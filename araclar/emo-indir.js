// Sitedeki (HTML, JS, veri, CSS) bütün emojileri bulur; Google Noto Emoji'deki 72 px PNG'lerini img/emo/ klasörüne indirir
// ve js/emo-liste.js dosyasını yazar. Sayfadaki emojileri bu resimlere js/emo.js çevirir (her cihazda aynı görünüm).
// Yeni emoji eklendiğinde yeniden çalıştır:  node araclar/emo-indir.js   (ardından index.html'de emo-liste.js?v= sayısını artır)
'use strict';
const fs = require('fs'), path = require('path');
const KOK = path.resolve(__dirname, '..'), HEDEF = path.join(KOK, 'img', 'emo');
const NOTO = 'https://raw.githubusercontent.com/googlefonts/noto-emoji/main/';
const seg = new Intl.Segmenter('tr', { granularity: 'grapheme' });
const HIZLI = /[\p{Extended_Pictographic}\p{Regional_Indicator}]/u, SUNUM = /^\p{Emoji_Presentation}/u;
// Emoji sayılanlar: renkli gösterimi varsayılan olanlar, FE0F ile emoji yapılmış olanlar, U+1F000 üstü resim simgeleri, bayraklar.
// ▶ ↗ © gibi yazı simgeleri bilerek dışarıda kalır (js/emo.js aynı kuralı kullanır).
const uygun = g => HIZLI.test(g) && (g.includes('️') || SUNUM.test(g) || g.codePointAt(0) >= 0x1F000);
const anahtar = g => [...g].map(c => c.codePointAt(0)).filter(c => c !== 0xFE0F).map(c => c.toString(16)).join('_');

const dosyalar = [];
(function gez(d) {
  for (const f of fs.readdirSync(d)) {
    const p = path.join(d, f), g = path.relative(KOK, p).replace(/\\/g, '/');
    if (/^(\.git|\.claude|node_modules|vendor|assets|araclar|img)(\/|$)/.test(g) || /^data\/sinir(\/|$)/.test(g)) continue;
    if (fs.statSync(p).isDirectory()) gez(p); else if (/\.(js|html|css)$/.test(f) && f !== 'emo-liste.js' && f !== 'simge-dizin.js') dosyalar.push(p);
  }
})(KOK);
const bulunan = new Set();
for (const f of dosyalar) { const t = fs.readFileSync(f, 'utf8'); if (HIZLI.test(t)) for (const { segment } of seg.segment(t)) if (uygun(segment)) bulunan.add(anahtar(segment)); }

(async () => {
  fs.mkdirSync(HEDEF, { recursive: true });
  const liste = [...bulunan].sort(), hazir = [], eksik = []; let indirilen = 0, bayt = 0;
  const bayrak = k => { const cp = k.split('_').map(h => parseInt(h, 16)); return cp.length === 2 && cp.every(c => c >= 0x1F1E6 && c <= 0x1F1FF) ? cp.map(c => String.fromCharCode(c - 0x1F1E6 + 65)).join('') : null; };
  const is = async k => {
    const hedef = path.join(HEDEF, k + '.png');
    if (fs.existsSync(hedef) && fs.statSync(hedef).size > 100) { hazir.push(k); return; }
    const adresler = [NOTO + '2D/png/72/emoji_u' + k + '.png']; const b = bayrak(k); if (b) adresler.push(NOTO + 'third_party/region-flags/png/' + b + '.png');
    for (const u of adresler) {
      try {
        const r = await fetch(u); if (!r.ok) continue;
        const buf = Buffer.from(await r.arrayBuffer());
        if (buf.length < 100 || buf.readUInt32BE(0) !== 0x89504E47) continue;   // PNG imzası
        fs.writeFileSync(hedef, buf); indirilen++; bayt += buf.length; hazir.push(k); return;
      } catch (e) { /* sıradaki adres */ }
    }
    eksik.push(k);
  };
  const kuyruk = liste.slice(); await Promise.all(Array.from({ length: 8 }, async () => { while (kuyruk.length) await is(kuyruk.shift()); }));
  hazir.sort();
  fs.writeFileSync(path.join(KOK, 'js', 'emo-liste.js'),
    '// Otomatik üretilir: node araclar/emo-indir.js  (elle değiştirme). img/emo/ klasöründe resmi bulunan emojilerin kod noktaları.\n' +
    `'use strict';\nwindow.EMO_LISTE = '${hazir.join(' ')}';\n`);
  const toplam = hazir.reduce((a, k) => a + fs.statSync(path.join(HEDEF, k + '.png')).size, 0);
  console.log(`${dosyalar.length} dosyada ${liste.length} farklı emoji | resmi hazır: ${hazir.length} (klasör ${Math.round(toplam / 1024)} KB) | bu çalıştırmada indirilen: ${indirilen} (${Math.round(bayt / 1024)} KB)`);
  if (eksik.length) console.log('Noto\'da bulunamadı (cihaz emojisi olarak kalır):', eksik.map(k => String.fromCodePoint(...k.split('_').map(h => parseInt(h, 16)))).join(' '), '|', eksik.join(' '));
})();
