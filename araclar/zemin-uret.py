# Kürenin kabartmalı zemin görsellerini üretir (Natural Earth II + Ocean Bottom, kamu malı).
# Kullanım (site klasöründen):
#   node araclar/zemin-kara-disari.js                      -> araclar/zemin-kaynak/kara.json (kıyı çokgenleri)
#   <ai-araclar/venv python> araclar/zemin-uret.py [kara|deniz]  -> img/zemin-kara-4k.webp, img/zemin-kara-8k.webp, img/zemin-deniz.webp
# Kaynaklar araclar/zemin-kaynak/ altında durur (depoya girmez): NE2_50M_SR_W.tif, OB_50M.tif
#
# Kara görseli: yalnızca karanın renkleri. Kıyının dışı (ve kıyıya bitişik deniz pikselleri) en yakın kara rengiyle
# doldurulur; böylece küre çizilirken kara, vektör kıyı çizgisiyle kırpılınca kenarda mavi saçak kalmaz.
# İç göller mavi kalır; rengi çizim sırasında temaya göre ayarlanır (js/kure-zemin.js).
# Deniz görseli: okyanus tabanı kabartması, tek kanal (parlaklık). Rengi çizim sırasında temadan gelir.
import json, os, sys
import numpy as np
from PIL import Image, ImageDraw
Image.MAX_IMAGE_PIXELS = None

KOK = os.path.normpath(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..'))
KAYNAK = os.path.join(KOK, 'araclar', 'zemin-kaynak')
W, H = 8192, 4096

def su_mu(a):
    # Natural Earth'ün su rengi: mavi, kırmızıdan belirgin biçimde fazla (kar ve buz gölgeleri bu eşiğin altında kalır)
    r, g, b = a[..., 0].astype(np.int16), a[..., 1].astype(np.int16), a[..., 2].astype(np.int16)
    return (b - r > 52) & (b > g)

def genislet(m, n):
    # ikili maskeyi n piksel genişletir (3x3 komşuluk; boylamda sarar)
    for _ in range(n):
        k = m.copy()
        k[1:, :] |= m[:-1, :]; k[:-1, :] |= m[1:, :]
        k |= np.roll(m, 1, axis=1); k |= np.roll(m, -1, axis=1)
        m = k
    return m

def doldur(renk, gecerli):
    # "it-çek" doldurma: geçersiz pikseller, küçültülmüş katmanlardaki geçerli komşuların ortalamasıyla dolar
    h, w = gecerli.shape
    c = renk.astype(np.float32) * gecerli[..., None]
    a = gecerli.astype(np.float32)
    katman = [(c, a)]
    while min(c.shape[0], c.shape[1]) > 2:
        hh, ww = c.shape[0] // 2 * 2, c.shape[1] // 2 * 2
        c = c[:hh, :ww].reshape(hh // 2, 2, ww // 2, 2, 3).sum(axis=(1, 3))
        a = a[:hh, :ww].reshape(hh // 2, 2, ww // 2, 2).sum(axis=(1, 3))
        katman.append((c, a))
    c, a = katman[-1]
    dolu = c / np.maximum(a, 1e-6)[..., None]
    for c, a in reversed(katman[:-1]):
        buyuk = np.asarray(Image.fromarray(np.clip(dolu, 0, 255).astype(np.uint8)).resize((c.shape[1], c.shape[0]), Image.BILINEAR), dtype=np.float32)
        kendi = c / np.maximum(a, 1e-6)[..., None]
        dolu = np.where((a > 0.999)[..., None], kendi, buyuk)
    return dolu

def kara_maskesi():
    with open(os.path.join(KAYNAK, 'kara.json'), encoding='utf-8') as f:
        cokgenler = json.load(f)
    im = Image.new('L', (W, H), 0)
    d = ImageDraw.Draw(im)
    for p in cokgenler:
        if len(p) < 3: continue
        d.polygon([((lo + 180) / 360 * W, (90 - la) / 180 * H) for la, lo in p], fill=255)
    return np.asarray(im) > 127

def kara_uret():
    print('kara okunuyor'); sys.stdout.flush()
    ne = np.asarray(Image.open(os.path.join(KAYNAK, 'ne2', 'NE2_50M_SR_W', 'NE2_50M_SR_W.tif')).convert('RGB').resize((W, H), Image.LANCZOS))
    kara = kara_maskesi()
    su = su_mu(ne)
    # Antarktika ve kıyı verisinde olmayan buzullar: 60° güneyin altında görseldeki su olmayan her piksel karadır
    guney = np.zeros_like(kara); guney[int((90 + 60) / 180 * H):, :] = True
    kara = kara | (guney & ~su)
    # denize bağlı su: kıyı çokgeninin dışından başlayıp su pikselleri üzerinden 10 piksel içeri yürü (kıyı saçakları, haliçler)
    tohum = ~kara
    for _ in range(10):
        tohum = genislet(tohum, 1) & (su | ~kara)
    gecerli = kara & ~(tohum & su)
    print('kara payı %.3f, iç su payı %.4f' % (kara.mean(), (kara & su & gecerli).mean())); sys.stdout.flush()
    dolu = doldur(ne, gecerli)
    cikti = np.where(gecerli[..., None], ne.astype(np.float32), dolu)
    kara8 = Image.fromarray(np.clip(cikti, 0, 255).astype(np.uint8))
    img = os.path.join(KOK, 'img')
    kara8.save(os.path.join(img, 'zemin-kara-8k.webp'), quality=80, method=6)
    kara8.resize((4096, 2048), Image.LANCZOS).save(os.path.join(img, 'zemin-kara-4k.webp'), quality=82, method=6)

def deniz_uret():
    print('deniz okunuyor'); sys.stdout.flush()
    img = os.path.join(KOK, 'img')
    # 3072 px: okyanus tabanı yumuşak bir zemin; 4096 pikselde dosya 1 MB'ı aşıyor
    ob = np.asarray(Image.open(os.path.join(KAYNAK, 'ob', 'OB_50M', 'OB_50M.tif')).convert('RGB').resize((3072, 1536), Image.LANCZOS)).astype(np.float32)
    par = ob[..., 0] * 0.3 + ob[..., 1] * 0.5 + ob[..., 2] * 0.2
    lo, hi = np.percentile(par, 0.5), np.percentile(par, 99.8)
    par = np.clip((par - lo) / (hi - lo), 0, 1)
    Image.fromarray((par * 255).astype(np.uint8), 'L').save(os.path.join(img, 'zemin-deniz.webp'), quality=70, method=6)

# "kara" ya da "deniz" verilirse yalnızca o üretilir
if 'deniz' not in sys.argv[1:]: kara_uret()
if 'kara' not in sys.argv[1:]: deniz_uret()
for ad in ('zemin-kara-8k.webp', 'zemin-kara-4k.webp', 'zemin-deniz.webp'):
    print(ad, os.path.getsize(os.path.join(KOK, 'img', ad)))
