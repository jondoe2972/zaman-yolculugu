# araclar/simge-kaynak/ içindeki Noto PNG'lerini tek resimde (img/simgeler.webp) toplar.
# Önce:  node araclar/simge-sayfa.js   (listeyi ve data/simge-dizin.js dosyasını üretir, eksikleri indirir)
# Kullanım:  python araclar/simge-sayfa.py     (Pillow gerekir)
import json, os
from PIL import Image

KOK = os.path.normpath(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..'))
KAYNAK = os.path.join(KOK, 'araclar', 'simge-kaynak')
L = json.load(open(os.path.join(KAYNAK, 'liste.json'), encoding='utf-8'))
H, R, S, D = L['hucre'], L['resim'], L['sutun'], L['dosyalar']
satir = (len(D) + S - 1) // S
sayfa = Image.new('RGBA', (S * H, satir * H), (0, 0, 0, 0))
for i, ad in enumerate(D):
    im = Image.open(os.path.join(KAYNAK, ad)).convert('RGBA')
    kutu = im.getbbox()                      # saydam kenarları at: her simge hücresini aynı ölçüde doldursun
    if kutu: im = im.crop(kutu)
    k = R / max(im.size)
    im = im.resize((max(1, round(im.width * k)), max(1, round(im.height * k))), Image.LANCZOS)
    x = (i % S) * H + (H - im.width) // 2; y = (i // S) * H + (H - im.height) // 2
    sayfa.alpha_composite(im, (x, y))
hedef = os.path.join(KOK, 'img', 'simgeler.webp')
sayfa.save(hedef, 'WEBP', quality=78, alpha_quality=75, method=6)
print(f'{len(D)} simge, {sayfa.width}x{sayfa.height} px, {os.path.getsize(hedef) // 1024} KB -> {hedef}')
