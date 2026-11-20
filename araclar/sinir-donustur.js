// Cliopatria (Seshat, CC BY 4.0) GeoJSON'unu küre için küçük, zaman dilimli dosyalara çevirir.
// Kullanım: node --max-old-space-size=4096 araclar/sinir-donustur.js <cliopatria.geojson> <cikti_klasoru> [turkce-adlar.json]
// Çıktı: <klasor>/sinir-<n>.js (her biri bir zaman dilimi) ve <klasor>/sinir-dizin.js (dilimlerin yıl aralıkları).
// Yıllar sitedeki kurala çevrilir: MÖ pozitif, MS negatif (Cliopatria'da MÖ negatif).
'use strict';
const fs = require('fs'), path = require('path');
const [, , GIRDI, CIKTI, ADLAR] = process.argv;
const TOL = 0.12, Q = 20; // sadeleştirme toleransı (derece) ve nicemleme (1/20 derece = 0,05°); kıyılar karaya kırpıldığı için kaba olabilir
const TR = ADLAR && fs.existsSync(ADLAR) ? JSON.parse(fs.readFileSync(ADLAR, 'utf8')) : {};

function dp(pts, tol) { // Douglas-Peucker
  if (pts.length < 4) return pts;
  const keep = new Uint8Array(pts.length); keep[0] = keep[pts.length - 1] = 1;
  const st = [[0, pts.length - 1]];
  while (st.length) {
    const [a, b] = st.pop(); let md = 0, mi = -1;
    const [ax, ay] = pts[a], [bx, by] = pts[b], dx = bx - ax, dy = by - ay, L = Math.hypot(dx, dy) || 1e-12;
    for (let i = a + 1; i < b; i++) { const d = Math.abs(dy * (pts[i][0] - ax) - dx * (pts[i][1] - ay)) / L; if (d > md) { md = d; mi = i; } }
    if (md > tol && mi > 0) { keep[mi] = 1; st.push([a, mi], [mi, b]); }
  }
  return pts.filter((_, i) => keep[i]);
}
const alan = r => { let s = 0; for (let i = 0; i < r.length; i++) { const [x1, y1] = r[i], [x2, y2] = r[(i + 1) % r.length]; s += x1 * y2 - x2 * y1; } return s / 2; };
function merkez(r) { let a = 0, cx = 0, cy = 0; for (let i = 0; i < r.length; i++) { const [x1, y1] = r[i], [x2, y2] = r[(i + 1) % r.length], f = x1 * y2 - x2 * y1; a += f; cx += (x1 + x2) * f; cy += (y1 + y2) * f; } return a ? [cy / (3 * a), cx / (3 * a)] : [r[0][1], r[0][0]]; }
const h = s => { let x = 2166136261; for (const ch of s) { x ^= ch.charCodeAt(0); x = Math.imul(x, 16777619); } return x >>> 0; };
const PALET = ['#c97b4a', '#b8574a', '#8e6aa6', '#5f8fae', '#6f9a5a', '#c9a24a', '#a0605e', '#4f8a86', '#b3794f', '#7a7fb0', '#9a8a4a', '#c46a7a', '#5d9a7a', '#a8744a', '#6a7a9a', '#b5894f'];

const j = JSON.parse(fs.readFileSync(GIRDI, 'utf8'));
const halkalar = [], halkaNo = new Map(), kayitlar = [];
let ham = 0, son = 0;
for (const f of j.features) {
  const p = f.properties; if (p.Type !== 'POLITY' || /^\(/.test(p.Name)) continue;
  const g = f.geometry; if (!g) continue;
  const polys = g.type === 'Polygon' ? [g.coordinates] : g.coordinates;
  const ids = []; let enb = null, enbA = 0;
  for (const poly of polys) for (let k = 0; k < poly.length; k++) {
    const ring = poly[k]; ham += ring.length;
    const s = dp(ring.slice(0, -1), TOL), A = Math.abs(alan(s));
    if (s.length < 3 || A < (k ? 0.02 : 0.008)) continue;
    if (k === 0 && A > enbA) { enbA = A; enb = s; }
    // nicemle ve fark kodla: [enlem, boylam] tamsayı çiftleri
    const out = []; let pl = 0, po = 0;
    for (const [lo, la] of s) { const qa = Math.round(la * Q), qo = Math.round(lo * Q); if (out.length && qa === pl && qo === po) continue; out.push(qa - pl, qo - po); pl = qa; po = qo; }
    if (out.length < 6) continue;
    const key = out.join(','); let id = halkaNo.get(key);
    if (id === undefined) { id = halkalar.length; halkalar.push(out); halkaNo.set(key, id); son += out.length / 2; }
    ids.push(id);
  }
  if (!ids.length) continue;
  const grup = (p.MemberOf || '').split(';')[0].replace(/[()]/g, '').trim() || p.Name;
  const et = enb ? merkez(enb).map(v => Math.round(v * 10) / 10) : null;
  kayitlar.push({ n: p.Name, tr: TR[p.Wikidata] || '', y0: -p.ToYear, y1: -p.FromYear, a: Math.round(p.Area), r: PALET[h(grup) % PALET.length], w: p.Wikipedia || '', q: p.Wikidata || '', e: et, g: ids });
}
// zaman dilimleri: kabaca eşit büyüklükte, sınırları yuvarlak yıllarda
const DILIM = [[4000, 1000], [999, 1], [0, -500], [-501, -1000], [-1001, -1300], [-1301, -1500], [-1501, -1700], [-1701, -1850], [-1851, -1950], [-1951, -2100]];
fs.mkdirSync(CIKTI, { recursive: true });
const dizin = [];
DILIM.forEach(([a, b], i) => {
  // geçiş animasyonu için dilimin hemen öncesi ve sonrasındaki kayıtlar da konur
  const ks = kayitlar.filter(k => k.y1 >= b - 60 && k.y0 <= a + 60);
  const kullan = [...new Set(ks.flatMap(k => k.g))].sort((x, y) => x - y), yeni = new Map(kullan.map((id, n) => [id, n]));
  const veri = { y: [a, b], k: ks.map(k => ({ ...k, g: k.g.map(id => yeni.get(id)) })), h: kullan.map(id => halkalar[id]) };
  const ad = `sinir-${i}.js`;
  fs.writeFileSync(path.join(CIKTI, ad), `window.__sinirDilim(${i},${JSON.stringify(veri)});\n`);
  dizin.push({ d: i, y: [a, b], kb: Math.round(fs.statSync(path.join(CIKTI, ad)).size / 1024) });
});
fs.writeFileSync(path.join(CIKTI, 'sinir-dizin.js'), `// Cliopatria (Seshat Global History Databank, CC BY 4.0) verisinden sadeleştirildi. araclar/sinir-donustur.js\nwindow.SINIR_DIZIN=${JSON.stringify(dizin.map(({ d, y }) => ({ d, y })))};\n`);
console.log('kayıt', kayitlar.length, 'halka', halkalar.length, 'nokta', ham, '→', Math.round(son));
console.table(dizin);
