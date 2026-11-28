# Kürenin "oyun" görünümündeki çöl, buz örtüsü ve Hazar Denizi biçimlerini üretir: data/dogal-sekil.js
# Kaynak: Natural Earth II (kamu malı) görseli, araclar/zemin-kaynak/ne2/NE2_50M_SR_W/NE2_50M_SR_W.tif (depoya girmez).
# Kullanım (site klasöründen):  <ai-araclar/venv python> araclar/dogal-sekil.py [onizleme.png]
#
# Çöl: görseldeki arazi rengi "soluk kum" ya da "kızıl kum" olan piksellerin yarım derecelik hücrelerdeki oranı
# bulanıklaştırılır, iki eşikten eş düzey eğrisi çıkarılır (çekirdek ve çevre). Küre bu çokgenleri yumuşak kenarlı çizer.
# Buz: 58° kuzeyin üstünde kar-buz renginde olan alanlar (Grönland, Kuzey Buz Denizi adaları).
# Hazar: görselde su renginde olan iç deniz, piksel çözünürlüğünde.
import json, math, os, sys
import numpy as np
from PIL import Image
Image.MAX_IMAGE_PIXELS = None

KOK = os.path.normpath(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..'))
TIF = os.path.join(KOK, 'araclar', 'zemin-kaynak', 'ne2', 'NE2_50M_SR_W', 'NE2_50M_SR_W.tif')

def rampa(x, a, b):
    # x = a iken 0, x = b iken 1 (a > b olabilir)
    return np.clip((x - a) / (b - a), 0, 1)

def bulanik(f, n):
    # kutu bulanıklığı üç kez (Gauss'a yakın); boylamda sarar, enlemde kenar yinelenir
    for _ in range(3):
        k = np.zeros_like(f)
        for d in range(-n, n + 1):
            k += np.roll(f, d, axis=1)
        f = k / (2 * n + 1)
        p = np.pad(f, ((n, n), (0, 0)), mode='edge'); k = np.zeros_like(f)
        for d in range(2 * n + 1):
            k += p[d:d + f.shape[0]]
        f = k / (2 * n + 1)
    return f

def egri(F, t):
    # yürüyen kareler: F alanının t düzeyindeki kapalı eğrileri; noktalar (satır, sütun) kesirli dizin
    h, w = F.shape
    P = np.zeros((h + 2, w + 2), dtype=np.float64); P[1:-1, 1:-1] = F   # kenar 0: bütün eğriler kapanır
    B = P >= t
    seg = {}   # kenar anahtarı -> [komşu kenar anahtarları]
    def nokta(k):
        tur, i, j = k
        if tur == 0:   # yatay kenar: (i,j)-(i,j+1)
            a, b = P[i, j], P[i, j + 1]; return (i - 1.0, j - 1.0 + (t - a) / (b - a))
        a, b = P[i, j], P[i + 1, j]; return (i - 1.0 + (t - a) / (b - a), j - 1.0)
    def ekle(a, b):
        seg.setdefault(a, []).append(b); seg.setdefault(b, []).append(a)
    ys, xs = np.nonzero(B[:-1, :-1] != B[1:, 1:]) if False else (None, None)
    # yalnızca karışık hücreler gezilir
    kar = (B[:-1, :-1].astype(np.int8) + B[:-1, 1:] + B[1:, :-1] + B[1:, 1:])
    for i, j in zip(*np.nonzero((kar > 0) & (kar < 4))):
        tl, tr, bl, br = B[i, j], B[i, j + 1], B[i + 1, j], B[i + 1, j + 1]
        U, Dn, L, Rg = (0, i, j), (0, i + 1, j), (1, i, j), (1, i, j + 1)
        kenar = []
        if tl != tr: kenar.append(U)
        if tr != br: kenar.append(Rg)
        if bl != br: kenar.append(Dn)
        if tl != bl: kenar.append(L)
        if len(kenar) == 2: ekle(kenar[0], kenar[1])
        elif len(kenar) == 4:
            orta = (P[i, j] + P[i, j + 1] + P[i + 1, j] + P[i + 1, j + 1]) / 4 >= t
            if tl == orta: ekle(U, Rg); ekle(Dn, L)
            else: ekle(U, L); ekle(Rg, Dn)
    halkalar, gorulen = [], set()
    for bas in list(seg.keys()):
        if bas in gorulen: continue
        halka, once, k = [], None, bas
        while k is not None and k not in gorulen:
            gorulen.add(k); halka.append(nokta(k))
            sonraki = [x for x in seg[k] if x != once and x not in gorulen]
            once, k = k, (sonraki[0] if sonraki else None)
        if len(halka) >= 4: halkalar.append(halka)
    return halkalar

def sadelestir(p, tol):
    # Douglas-Peucker (kapalı halka: en uzak iki noktadan ikiye bölünür)
    def dp(q):
        if len(q) < 3: return q
        a, b = np.array(q[0]), np.array(q[-1]); ab = b - a; L = math.hypot(*ab) or 1e-9
        v = np.array(q) - a
        d = np.abs(v[:, 0] * ab[1] - v[:, 1] * ab[0]) / L
        i = int(d.argmax())
        if d[i] <= tol: return [q[0], q[-1]]
        return dp(q[:i + 1])[:-1] + dp(q[i:])
    q = np.array(p); i = int(((q - q[0]) ** 2).sum(1).argmax())
    return dp(p[:i + 1])[:-1] + dp(p[i:] + [p[0]])[:-1]

def alan(p):
    s = 0.0
    for i in range(len(p)):
        a, b = p[i], p[(i + 1) % len(p)]; s += a[1] * b[0] - b[1] * a[0]
    return abs(s) / 2

def main():
    im = Image.open(TIF).convert('RGB'); W, H = im.size
    a = np.asarray(im).astype(np.int16)
    r, g, b = a[..., 0], a[..., 1], a[..., 2]
    su = (b - r > 52) & (b > g)
    kara = ~su
    # ---- çöl puanı (0..1) ----
    soluk = rampa(g - b, 32, 24) * rampa(r, 176, 200)           # Sahra, Arabistan, Taklamakan: açık, az doygun kum
    kizil = rampa(r - g, 9, 15) * rampa(r, 170, 195)            # Gobi, Namib, Simpson, İran, Patagonya: kızıl-kahve
    col = np.maximum(soluk, kizil) * rampa(r - b, 12, 20) * kara
    N = 30                                                     # 30 piksel = 1 derece; hücre = yarım derece
    HC = N // 2
    def hucre(x): return x.reshape(H // HC, HC, W // HC, HC).mean(axis=(1, 3))
    fk, fc = hucre(kara.astype(np.float32)), hucre(col.astype(np.float32))
    lat = 90 - (np.arange(fk.shape[0]) + 0.5) * 0.5
    fc[np.abs(lat) > 52] = 0                                    # kutup çölleri ve tundra bu katmanda gösterilmez
    # Görselde açık renkli ama çöl olmayan Akdeniz iklimi kuşağı elle çıkarılır: [güney, kuzey, batı, doğu]
    lon = -180 + (np.arange(fk.shape[1]) + 0.5) * 0.5
    for la0, la1, lo0, lo1 in ((31.0, 46, -12, -4), (34.2, 46, -4, 11.5),      # Fas kıyısı ve Tell Atlası, İber Yarımadası
                               (35.0, 46, 11.5, 26), (36.8, 43, 26, 44.5),      # Sicilya, Yunanistan, Anadolu
                               (31.3, 37, 34.0, 36.6)):                         # Doğu Akdeniz kıyısı (Levant)
        fc[np.ix_((lat >= la0) & (lat <= la1), (lon >= lo0) & (lon <= lo1))] = 0
    alan_c = bulanik(fc, 1) / np.maximum(bulanik(fk, 1), 1e-3)  # kıyıda sönmesin: kara oranına bölünür
    alan_c[bulanik(fk, 3) < 0.02] = 0                           # açık denizde eğri çizilmez
    # ---- buz puanı ----
    buz = ((np.minimum(np.minimum(r, g), b) >= 190) & (b - r >= 6) & kara).astype(np.float32)   # mavimsi beyaz: buz (kurak tundra adaları gri kalır)
    fb = hucre(buz)
    fb[lat < 58] = 0
    alan_b = bulanik(fb, 1) / np.maximum(bulanik(fk, 1), 1e-3)
    alan_b[bulanik(fk, 2) < 0.02] = 0
    def ll(halka, adim, i0=0.0, j0=0.0):
        return [(90 - (i0 + y + 0.5) * adim, -180 + (j0 + x + 0.5) * adim) for y, x in halka]
    def topla(F, t, tol, enaz):
        out = []
        for h in egri(F, t):
            p = ll(h, 0.5)
            if alan(p) < enaz: continue
            p = sadelestir(p, tol)
            if len(p) >= 4: out.append([[round(la, 2), round(lo, 2)] for la, lo in p])
        return sorted(out, key=lambda p: -alan(p))
    cikti = {
        'col': topla(alan_c, 0.56, 0.12, 5),
        'colCevre': topla(alan_c, 0.30, 0.16, 8),
        'buz': topla(alan_b, 0.5, 0.1, 1.5),
    }
    # Sibirya anakarasındaki karlı dağlar (Putorana, Verhoyansk) buz örtüsü değildir: halkanın ortası 72,5° K'nin altında ve 60° D'nin doğusundaysa atılır
    def orta(p): return (sum(q[0] for q in p) / len(p), sum(q[1] for q in p) / len(p))
    cikti['buz'] = [p for p in cikti['buz'] if not (orta(p)[0] < 72.5 and orta(p)[1] > 60)]
    # ---- Hazar Denizi: 36-48 K, 46-56 D kutusundaki en büyük su parçası ----
    y0, y1, x0, x1 = int((90 - 48) * N), int((90 - 36) * N), int((46 + 180) * N), int((56 + 180) * N)
    m = su[y0:y1, x0:x1].astype(np.float32)
    k = np.zeros_like(m)                                       # 3x3 yumuşatma: basamaklı piksel kıyısı düzgünleşir
    p = np.pad(m, 1)
    for dy in range(3):
        for dx in range(3): k += p[dy:dy + m.shape[0], dx:dx + m.shape[1]]
    hz = [ll(h, 1 / N, y0, x0) for h in egri(k / 9, 0.5)]
    hz = sorted(hz, key=lambda q: -alan(q))[:1]
    cikti['hazar'] = [[[round(la, 2), round(lo, 2)] for la, lo in sadelestir(q, 0.025)] for q in hz]
    for ad, l in cikti.items(): print(ad, len(l), 'halka,', sum(len(x) for x in l), 'nokta')
    js = ('// Kürenin oyun görünümündeki çöl, buz örtüsü ve Hazar Denizi biçimleri: [enlem, boylam] halkaları.\n'
          '// Natural Earth II görselinden (kamu malı) araclar/dogal-sekil.py ile üretilir; elle düzenlenmez.\n'
          'window.DOGAL_SEKIL = ' + json.dumps(cikti, separators=(',', ':')) + ';\n')
    with open(os.path.join(KOK, 'data', 'dogal-sekil.js'), 'w', encoding='utf-8', newline='\n') as f: f.write(js)
    print('data/dogal-sekil.js', len(js), 'bayt')
    if len(sys.argv) > 1:
        from PIL import ImageDraw
        o = im.resize((2160, 1080), Image.BILINEAR) if len(sys.argv) < 3 else im.resize((4320, 2160), Image.BILINEAR); d = ImageDraw.Draw(o)
        K6 = o.size[0] / 360
        def xy(p): return [((lo + 180) * K6, (90 - la) * K6) for la, lo in p]
        for ad, renk in (('colCevre', (255, 140, 0)), ('col', (220, 0, 0)), ('buz', (0, 60, 255)), ('hazar', (0, 0, 0))):
            for p in cikti[ad]: d.line(xy(p) + xy(p[:1]), fill=renk, width=2)
        o.save(sys.argv[1])

main()
