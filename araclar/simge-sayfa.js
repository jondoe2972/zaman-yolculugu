// Haritadaki emoji simgelerini her cihazda aynı görünen site resmine çevirir (kaynak: Google Noto Emoji, 2D/png/128).
// 1) Veri dosyalarındaki bütün `ik` alanlarını ve js/dunya.js içindeki emojileri toplar,
// 2) eksik olanların PNG'sini araclar/simge-kaynak/ klasörüne indirir (klasör .gitignore'da),
// 3) araclar/simge-kaynak/liste.json ve data/simge-dizin.js dosyalarını yazar.
// Ardından resmi üretmek için:  python araclar/simge-sayfa.py   (Pillow gerekir)
// Kullanım:  node araclar/simge-sayfa.js
'use strict';
const fs = require('fs'), path = require('path');
const KOK = path.resolve(__dirname, '..'), KAYNAK = path.join(__dirname, 'simge-kaynak');
const NOTO = 'https://raw.githubusercontent.com/googlefonts/noto-emoji/main/';
const HUCRE = 80, RESIM = 64, SUTUN = 16;   // hücre 80 px, içindeki resim 64 px (kenarda gölge payı)

global.window = global; global.document = {};
const veri = [];
for (const d of ['data/atlas']) for (const f of fs.readdirSync(path.join(KOK, d))) if (f.endsWith('.js')) veri.push(path.join(d, f));
veri.push('data/goc.js', 'data/kaynaklar.js', 'data/yollar.js', 'data/cografya.js');
const once = new Set(Object.keys(global));
for (const f of veri) { try { require(path.join(KOK, f)); } catch (e) { console.log('atlandı:', f, e.message.slice(0, 60)); } }

const EMOJI = /\p{Extended_Pictographic}|\p{Regional_Indicator}/u, seg = new Intl.Segmenter('tr', { granularity: 'grapheme' });
const sade = s => s.replace(/️/g, '');
const bulunan = new Map();   // sade grapheme -> kaç yerde
const ekle = metin => { for (const { segment } of seg.segment(metin)) if (EMOJI.test(segment)) { const k = sade(segment); bulunan.set(k, (bulunan.get(k) || 0) + 1); } };
const gorulen = new Set();
const gez = o => {
  if (!o || typeof o !== 'object' || gorulen.has(o)) return; gorulen.add(o);
  if (Array.isArray(o)) { o.forEach(gez); return; }
  for (const [k, v] of Object.entries(o)) { if (k === 'ik' && typeof v === 'string') ekle(v); else if (v && typeof v === 'object') gez(v); }
};
for (const k of Object.keys(global)) if (!once.has(k)) gez(global[k]);
const veriSayi = bulunan.size;
ekle(fs.readFileSync(path.join(KOK, 'js/dunya.js'), 'utf8'));

const dosyaAdi = g => 'emoji_u' + [...g].map(c => c.codePointAt(0).toString(16)).join('_') + '.png';
const bayrakKodu = g => { const cp = [...g].map(c => c.codePointAt(0)); return cp.length === 2 && cp.every(c => c >= 0x1F1E6 && c <= 0x1F1FF) ? cp.map(c => String.fromCharCode(c - 0x1F1E6 + 65)).join('') : null; };

(async () => {
  fs.mkdirSync(KAYNAK, { recursive: true });
  const liste = [...bulunan.keys()].sort((a, b) => a.codePointAt(0) - b.codePointAt(0) || (a < b ? -1 : 1));
  const tamam = [], eksik = []; let indirilen = 0, bayt = 0;
  const is = async g => {
    const ad = dosyaAdi(g), hedef = path.join(KAYNAK, ad);
    if (fs.existsSync(hedef) && fs.statSync(hedef).size > 100) { tamam.push(g); return; }
    const adresler = [NOTO + '2D/png/128/' + ad]; const b = bayrakKodu(g); if (b) adresler.push(NOTO + 'third_party/region-flags/png/' + b + '.png');
    for (const u of adresler) {
      try {
        const r = await fetch(u); if (!r.ok) continue;
        const buf = Buffer.from(await r.arrayBuffer());
        if (buf.length < 100 || buf.readUInt32BE(0) !== 0x89504E47) continue;   // PNG imzası
        fs.writeFileSync(hedef, buf); indirilen++; bayt += buf.length; tamam.push(g); return;
      } catch (e) { /* sıradaki adres */ }
    }
    eksik.push(g);
  };
  const kuyruk = liste.slice(); await Promise.all(Array.from({ length: 8 }, async () => { while (kuyruk.length) await is(kuyruk.shift()); }));
  const sirali = liste.filter(g => tamam.includes(g));
  fs.writeFileSync(path.join(KAYNAK, 'liste.json'), JSON.stringify({ hucre: HUCRE, resim: RESIM, sutun: SUTUN, dosyalar: sirali.map(dosyaAdi) }));
  const dizin = {}; sirali.forEach((g, i) => { dizin[g] = i; });
  fs.writeFileSync(path.join(KOK, 'data/simge-dizin.js'),
    '// Otomatik üretilir: node araclar/simge-sayfa.js  (elle değiştirme). Emoji (FE0F\'siz) -> img/simgeler.webp içindeki hücre sırası.\n' +
    '// Resimler: Google Noto Emoji (github.com/googlefonts/noto-emoji), lisans metni: img/NOTO-EMOJI-LISANS.txt\n' +
    `'use strict';\nwindow.SIMGE_DIZIN = { hucre: ${HUCRE}, resim: ${RESIM}, sutun: ${SUTUN}, s: ${JSON.stringify(dizin)} };\n`);
  console.log(`veri dosyalarında ${veriSayi}, dunya.js ile birlikte ${liste.length} farklı simge | hazır: ${sirali.length} | bu çalıştırmada indirilen: ${indirilen} (${Math.round(bayt / 1024)} KB)`);
  if (eksik.length) console.log('Noto\'da bulunamadı (cihaz emojisi olarak kalır):', eksik.join(' '));
})();
