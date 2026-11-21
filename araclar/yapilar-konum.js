// data/yapilar/*.js içindeki yapıların konumunu (ll) İngilizce Vikipedi'den, orada yoksa Vikiveri'den (P625) çeker ve dosyaya yazar.
// Ayrıca: sayfası bulunamayan / konumu olmayan başlıkları ve sahne verisindeki yapılarla çakışanları (aynı Vikipedi
// başlığı ya da 400 m'den yakın) listeler.
// Kullanım:  node araclar/yapilar-konum.js          (yalnızca konumu eksik olanlar)
//            node araclar/yapilar-konum.js --hepsi  (hepsini yeniden çek)
const fs = require('fs'), path = require('path');
const KOK = path.join(__dirname, '..'), DIZIN = path.join(KOK, 'data', 'yapilar'), HEPSI = process.argv.includes('--hepsi');
const API = 'https://en.wikipedia.org/w/api.php?format=json&action=query&redirects=1&prop=coordinates|pageprops&ppprop=wikibase_item&colimit=max&titles=';
const WD = 'https://www.wikidata.org/w/api.php?format=json&action=wbgetentities&props=claims&ids=';
const bekle = ms => new Promise(r => setTimeout(r, ms));
const UA = { 'User-Agent': 'ZamanYolculugu-arac/1.0 (egitim amacli harita)' };

// Vikimedya hızlı ardışık isteklere "too many requests" diye düz metin döndürür: bekleyip yeniden dene
async function al(url) {
  for (let d = 0; d < 6; d++) {
    await bekle(1500 + d * 20000);
    const t = await fetch(url, { headers: UA }).then(r => r.text());
    try { return JSON.parse(t); } catch (e) { console.error('… istek sınırı, bekleniyor'); }
  }
  throw new Error('Vikimedya yanıt vermiyor: ' + url.slice(0, 80));
}
function kayitlar(s) {
  const out = [];
  for (const sat of s.split('\n')) {
    const id = /\{ id: '([^']+)'/.exec(sat), w = /\bw: (['"])((?:\\.|(?!\1).)*)\1/.exec(sat);
    if (id && w) out.push({ id: id[1], w: w[2].replace(/\\'/g, "'"), ll: /\bll: \[/.test(sat) });
  }
  return out;
}
async function koordinatlar(basliklar) {
  const sonuc = {}, qVar = {};
  for (let i = 0; i < basliklar.length; i += 40) {
    const parca = basliklar.slice(i, i + 40);
    // sonuçlar sayfalı gelebilir: "continue" bitene kadar oku, koordinatları birleştir
    const es = {}, sayfa = {}; let dev = '';
    do {
      const j = await al(API + encodeURIComponent(parca.join('|')) + dev);
      for (const n of j.query.normalized || []) es[n.from] = n.to; for (const r of j.query.redirects || []) es[r.from] = r.to;
      for (const p of Object.values(j.query.pages || {})) { const o = sayfa[p.title]; if (!o) sayfa[p.title] = p; else { if (p.coordinates && !o.coordinates) o.coordinates = p.coordinates; if (p.pageprops && !o.pageprops) o.pageprops = p.pageprops; } }
      dev = j.continue ? '&' + Object.entries(j.continue).map(([a, b]) => a + '=' + encodeURIComponent(b)).join('&') : '';
    } while (dev);
    for (const b of parca) {
      let t = b; for (let k = 0; k < 3 && es[t]; k++) t = es[t];
      const p = sayfa[t];
      if (!p || p.missing !== undefined) sonuc[b] = { yok: true };
      else if (p.coordinates) sonuc[b] = { ll: [+p.coordinates[0].lat.toFixed(4), +p.coordinates[0].lon.toFixed(4)], t };
      else { sonuc[b] = { koordinatsiz: true, t }; const q = p.pageprops && p.pageprops.wikibase_item; if (q) qVar[q] = b; }
    }
  }
  // Vikipedi'de konumu olmayanlar: Vikiveri'deki "koordinat konumu" (P625)
  const Q = Object.keys(qVar);
  for (let i = 0; i < Q.length; i += 40) {
    const j = await al(WD + Q.slice(i, i + 40).join('|'));
    for (const [q, e] of Object.entries(j.entities || {})) {
      const v = (((e.claims || {}).P625 || [])[0] || {}).mainsnak?.datavalue?.value;
      if (v) sonuc[qVar[q]] = { ll: [+v.latitude.toFixed(4), +v.longitude.toFixed(4)], t: sonuc[qVar[q]].t, wd: q };
    }
  }
  return sonuc;
}
// sahne verisindeki yapıların konumları ve Vikipedi başlıkları
function mevcut() {
  const dosyalar = [...fs.readdirSync(path.join(KOK, 'data', 'bolgeler')).map(f => 'data/bolgeler/' + f), 'data/misir-genel.js', 'data/misir-ms-dunya.js', 'data/anadolu/anadolu-genel.js', 'data/avrupa/avrupa-genel.js'];
  const ll = [], w = new Set();
  for (const f of dosyalar) {
    const s = fs.readFileSync(path.join(KOK, f), 'utf8');
    for (const m of s.matchAll(/coords:\s*\{([\s\S]*?)\n?\s*\}/g)) for (const c of m[1].matchAll(/'?([\w-]+)'?:\s*\[(-?[\d.]+),\s*(-?[\d.]+)\]/g)) ll.push({ id: c[1], f, ll: [+c[2], +c[3]] });
    const wm = /wiki:\s*\{([\s\S]*?)\}/.exec(s); if (wm) for (const c of wm[1].matchAll(/:\s*(['"])((?:\\.|(?!\1).)*)\1/g)) w.add(c[2].replace(/\\'/g, "'"));
  }
  return { ll, w };
}
const km = (a, b) => { const D = Math.PI / 180, x = (b[1] - a[1]) * D * Math.cos((a[0] + b[0]) / 2 * D), y = (b[0] - a[0]) * D; return Math.hypot(x, y) * 6371; };

(async () => {
  const M = mevcut(), ids = new Set();
  for (const f of fs.readdirSync(DIZIN).filter(f => f.endsWith('.js'))) {
    const yol = path.join(DIZIN, f); let s = fs.readFileSync(yol, 'utf8');
    const K = kayitlar(s), is = K.filter(k => HEPSI || !k.ll);
    for (const k of K) { if (ids.has(k.id)) console.log(`ÇİFT KİMLİK ${f}: ${k.id}`); ids.add(k.id); }
    if (!is.length) { console.log(`${f}: ${K.length} yapı, hepsinin konumu var`); continue; }
    const C = await koordinatlar([...new Set(is.map(k => k.w))]);
    let tamam = 0;
    for (const k of is) {
      const c = C[k.w];
      if (c.yok) { console.log(`SAYFA YOK ${f}: ${k.id} (${k.w})`); continue; }
      if (c.koordinatsiz) { console.log(`KONUM YOK ${f}: ${k.id} (${k.w} → ${c.t})`); continue; }
      if (M.w.has(k.w) || M.w.has(c.t)) console.log(`AYNI BAŞLIK sahnede var ${f}: ${k.id} (${k.w})`);
      const yakin = M.ll.find(m => km(m.ll, c.ll) < 0.4); if (yakin) console.log(`YAKIN (${km(yakin.ll, c.ll).toFixed(2)} km) ${f}: ${k.id} ↔ ${yakin.id} (${yakin.f})`);
      const re = new RegExp(`(\\{ id: '${k.id}', )(ll: \\[[^\\]]*\\], )?`);
      s = s.replace(re, `$1ll: [${c.ll[0]}, ${c.ll[1]}], `); tamam++;
    }
    fs.writeFileSync(yol, s);
    console.log(`${f}: ${K.length} yapı, ${tamam} konum yazıldı`);
  }
  // yapıların sayısı ve konumu eksik kalanlar
  let top = 0, eksik = [];
  for (const f of fs.readdirSync(DIZIN).filter(f => f.endsWith('.js'))) for (const k of kayitlar(fs.readFileSync(path.join(DIZIN, f), 'utf8'))) { top++; if (!k.ll) eksik.push(k.id); }
  console.log(`TOPLAM ${top} yapı; konumu eksik: ${eksik.length ? eksik.join(', ') : 'yok'}`);
})();
