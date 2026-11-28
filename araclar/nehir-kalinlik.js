// Kürede nehirlerin kaynaktan denize kalınlaşarak çizilmesi için kalınlık sınıflarını üretir → data/nehir-kalinlik.js
// Kaynak: Natural Earth 1:50m "rivers + lake centerlines, scale rank" (kamu malı),
//   araclar/zemin-kaynak/nehir/nehir.geojson (her parçada strokeweig: 0,15 – 1,2).
// data/dunya-veri.js'teki nehir noktalarının her biri, bu verideki en yakın noktanın kalınlığını alır.
// Çıktı, DUNYA_VERI.nehir ile aynı sırada; her nehir için "sınıf:nokta sayısı" dizisi (1 ince dere … 5 ana nehir).
'use strict';
const fs = require('fs'), path = require('path'), vm = require('vm');
const KOK = path.resolve(__dirname, '..');
const ortam = {}; ortam.window = ortam; vm.createContext(ortam);
vm.runInContext(fs.readFileSync(path.join(KOK, 'data/dunya-veri.js'), 'utf8'), ortam);
const nehir = ortam.DUNYA_VERI.nehir;
const gj = JSON.parse(fs.readFileSync(path.join(KOK, 'araclar/zemin-kaynak/nehir/nehir.geojson'), 'utf8'));

const sinif = w => w >= 0.8 ? 5 : w >= 0.5 ? 4 : w >= 0.35 ? 3 : w >= 0.25 ? 2 : 1;
// 0,5° ızgara: hücre → [enlem, boylam, kalınlık]
const HUCRE = 0.5, izgara = new Map();
const anahtar = (la, lo) => Math.floor(la / HUCRE) + '|' + Math.floor(lo / HUCRE);
for (const f of gj.features) {
  const w = f.properties.strokeweig || 0.2;
  const cizgiler = f.geometry.type === 'LineString' ? [f.geometry.coordinates] : f.geometry.coordinates;
  for (const c of cizgiler) for (let i = 0; i < c.length; i++) {
    // parçalar arası da örneklenir ki seyrek noktalı düz kollarda eşleşme kaçmasın
    const adim = i ? Math.max(1, Math.ceil(Math.hypot(c[i][0] - c[i - 1][0], c[i][1] - c[i - 1][1]) / 0.1)) : 1;
    for (let s = 1; s <= adim; s++) {
      const t = i ? s / adim : 1, lo = i ? c[i - 1][0] + (c[i][0] - c[i - 1][0]) * t : c[i][0], la = i ? c[i - 1][1] + (c[i][1] - c[i - 1][1]) * t : c[i][1];
      const k = anahtar(la, lo); if (!izgara.has(k)) izgara.set(k, []); izgara.get(k).push([la, lo, w]);
    }
  }
}
function enYakin(la, lo) {
  let en = 1e9, w = 0;
  for (let a = -1; a <= 1; a++) for (let b = -1; b <= 1; b++) {
    const l = izgara.get((Math.floor(la / HUCRE) + a) + '|' + (Math.floor(lo / HUCRE) + b)); if (!l) continue;
    for (const p of l) { const d = (p[0] - la) ** 2 + ((p[1] - lo) * Math.cos(la * Math.PI / 180)) ** 2; if (d < en) { en = d; w = p[2]; } }
  }
  return [Math.sqrt(en), w];
}
let nokta = 0, eslesen = 0; const dagilim = [0, 0, 0, 0, 0, 0], cikti = [];
for (const r of nehir) {
  const s = r.p.map(([la, lo]) => { const [d, w] = enYakin(la, lo); nokta++; if (d < 0.08) { eslesen++; return sinif(w); } return 0; });
  // eşleşmeyen noktalar komşusunun sınıfını alır; hiç eşleşmeyen nehir en ince sınıfta kalır
  for (let i = 1; i < s.length; i++) if (!s[i]) s[i] = s[i - 1];
  for (let i = s.length - 2; i >= 0; i--) if (!s[i]) s[i] = s[i + 1];
  for (let i = 0; i < s.length; i++) if (!s[i]) s[i] = 1;
  // tek noktalık sıçramaları komşusuna uydur
  for (let i = 1; i < s.length - 1; i++) if (s[i] !== s[i - 1] && s[i - 1] === s[i + 1]) s[i] = s[i - 1];
  const kosu = []; for (const c of s) { dagilim[c]++; const son = kosu[kosu.length - 1]; if (son && son[0] === c) son[1]++; else kosu.push([c, 1]); }
  cikti.push(kosu.map(k => k[0] + ':' + k[1]).join(','));
}
const metin = '// Nehir kalınlık sınıfları (1 ince dere … 5 ana nehir), DUNYA_VERI.nehir ile aynı sırada: "sınıf:nokta sayısı,…".\n' +
  '// araclar/nehir-kalinlik.js ile üretildi (Natural Earth 1:50m, scale rank; kamu malı). Elle düzenleme.\n' +
  'window.NEHIR_KALINLIK = ' + JSON.stringify(cikti) + ';\n';
fs.writeFileSync(path.join(KOK, 'data/nehir-kalinlik.js'), metin, 'utf8');
console.log('nehir', nehir.length, 'nokta', nokta, 'eşleşen', eslesen, (eslesen / nokta * 100).toFixed(1) + '%', 'sınıf dağılımı', dagilim.slice(1).join(' / '), 'bayt', metin.length);
const bak = ad => nehir.map((r, i) => r.ad === ad ? cikti[i] : null).filter(Boolean).join('  |  ');
for (const ad of ['Nile', 'Amazonas', 'Danube', 'Euphrates', 'Kızılırmak', 'Volga']) console.log(ad + ':', bak(ad).slice(0, 200));
