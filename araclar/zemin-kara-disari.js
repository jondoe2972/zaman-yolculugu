// data/dunya-veri.js içindeki kıyı çokgenlerini araclar/zemin-kaynak/kara.json olarak yazar (zemin-uret.py kullanır).
'use strict';
const fs = require('fs'), path = require('path'), vm = require('vm');
const KOK = path.resolve(__dirname, '..');
const ortam = {}; ortam.window = ortam; vm.createContext(ortam);
vm.runInContext(fs.readFileSync(path.join(KOK, 'data/dunya-veri.js'), 'utf8'), ortam);
const kara = ortam.DUNYA_VERI.kara;
fs.mkdirSync(path.join(KOK, 'araclar/zemin-kaynak'), { recursive: true });
fs.writeFileSync(path.join(KOK, 'araclar/zemin-kaynak/kara.json'), JSON.stringify(kara));
let enG = 90, sarma = 0;
for (const p of kara) for (let i = 0; i < p.length; i++) { if (p[i][0] < enG) enG = p[i][0]; if (i && Math.abs(p[i][1] - p[i - 1][1]) > 180) sarma++; }
console.log('çokgen', kara.length, 'nokta', kara.reduce((a, p) => a + p.length, 0), 'en güney enlem', enG, '180° boylamını aşan kenar', sarma);
