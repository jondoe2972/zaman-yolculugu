// Kürenin oyun görünümündeki göl biçimlerini üretir: data/gol-sekil.js
// Kaynak: Natural Earth 1:50m "Lakes" (kamu malı), araclar/zemin-kaynak/gol/ne_50m_lakes.geojson (depoya girmez).
//   İndirme: https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_50m_lakes.geojson
// Kullanım (site klasöründen): node araclar/gol-sekil.js
//
// Alınanlar: yüzölçümü en az ENAZ_KM2 olan doğal göller ve adı EK listesinde olanlar. Barajlar alınmaz (çoğu 20. yüzyıl
// yapısı; atlas bütün çağları gösterir), ATLA listesindekiler de. Aral Gölü alınmaz: veri bugünkü küçülmüş parçaları gösterir, kürede 1960 öncesi
// bütün göl elle çizilmiş duruyor (js/dunya.js: ARAL). Göl içindeki büyük adalar ayrı halka olarak eklenir (oyuk).
'use strict';
const fs = require('fs'), path = require('path');
const KOK = path.join(__dirname, '..');
const G = JSON.parse(fs.readFileSync(path.join(KOK, 'araclar/zemin-kaynak/gol/ne_50m_lakes.geojson'), 'utf8'));
const ENAZ_KM2 = 1500, ADA_ENAZ_KM2 = 250, TOL = 0.02;
const EK = /^(Lake Chad|Dead Sea|Lake Tuz|Lake Sevan|Lake Geneva|Lake Tana|Lake Kivu|Lake Edward|Lago de Managua|Lake Taupo|Vättern|Lake Balaton|Bodensee)$/;
// Aral (yukarıda), 1932'de setle kapatılan IJsselmeer, 1960'lardan sonra dolan Sarıkamış ve çoğu zaman kuru olan Avustralya tuz gölleri
const ATLA = /Aral|Barsakelmes|IJsselmeer|Sarygamysh|Lake Mackay|Lake Gairdner|Lake Torrens|Lake Barlee|Lake Frome|Lake Eyre/i;

// küre üstünde halka alanı (km²)
function alan(h) {
  let s = 0; const R = 6371, D = Math.PI / 180;
  for (let i = 0; i < h.length; i++) { const a = h[i], b = h[(i + 1) % h.length]; s += (b[0] - a[0]) * D * (2 + Math.sin(a[1] * D) + Math.sin(b[1] * D)); }
  return Math.abs(s * R * R / 2);
}
// Douglas-Peucker (kapalı halka)
function sade(p, tol) {
  const dp = q => {
    if (q.length < 3) return q;
    const [ax, ay] = q[0], [bx, by] = q[q.length - 1], L = Math.hypot(bx - ax, by - ay) || 1e-9;
    let en = 0, ei = 0;
    for (let i = 1; i < q.length - 1; i++) { const d = Math.abs((q[i][0] - ax) * (by - ay) - (q[i][1] - ay) * (bx - ax)) / L; if (d > en) { en = d; ei = i; } }
    if (en <= tol) return [q[0], q[q.length - 1]];
    return dp(q.slice(0, ei + 1)).slice(0, -1).concat(dp(q.slice(ei)));
  };
  if (p.length && p[0][0] === p[p.length - 1][0] && p[0][1] === p[p.length - 1][1]) p = p.slice(0, -1);
  let ei = 0, en = 0; for (let i = 1; i < p.length; i++) { const d = (p[i][0] - p[0][0]) ** 2 + (p[i][1] - p[0][1]) ** 2; if (d > en) { en = d; ei = i; } }
  return dp(p.slice(0, ei + 1)).slice(0, -1).concat(dp(p.slice(ei).concat([p[0]])).slice(0, -1));
}
const out = [], adlar = [];
for (const f of G.features) {
  const o = f.properties, ad = o.name || '';
  if (/Reservoir/i.test(o.featurecla || '') || /Reservoir|Rés\.|Réservoir|\bRes\b/i.test(ad) || ATLA.test(ad)) continue;
  const cok = f.geometry.type === 'Polygon' ? [f.geometry.coordinates] : f.geometry.coordinates;
  for (const pol of cok) {
    const km2 = alan(pol[0]);
    if (km2 < ENAZ_KM2 && !EK.test(ad)) continue;
    adlar.push(`${ad || '(adsız)'} ${Math.round(km2)}`);
    pol.forEach((h, i) => {
      if (i > 0 && alan(h) < ADA_ENAZ_KM2) return;
      const s = sade(h.map(q => [q[0], q[1]]), TOL);
      if (s.length >= 4) out.push(s.map(q => [+q[1].toFixed(2), +q[0].toFixed(2)]));   // [enlem, boylam]
    });
  }
}
const js = '// Kürenin oyun görünümündeki göl biçimleri: [enlem, boylam] halkaları (göl içindeki büyük adalar ayrı halka: oyuk).\n' +
  '// Natural Earth 1:50m "Lakes" verisinden (kamu malı) araclar/gol-sekil.js ile üretilir; elle düzenlenmez.\n' +
  'window.GOL_SEKIL = ' + JSON.stringify(out) + ';\n';
fs.writeFileSync(path.join(KOK, 'data/gol-sekil.js'), js);
console.log(adlar.length, 'göl,', out.length, 'halka,', out.reduce((a, h) => a + h.length, 0), 'nokta,', js.length, 'bayt');
console.log(adlar.join(' | '));
console.log('özellik türleri:', [...new Set(G.features.map(f => f.properties.featurecla))].join(', '));
