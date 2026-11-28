// Dünya küresi (Google Earth benzeri): döndür, yakınlaştır; yaklaştıkça Mısır'ın ayrıntıları belirir.
// Kıyılar ve nehirler: Natural Earth 1:50m (kamu malı), data/dunya-veri.js.
// Seçili yıla göre: Mısır'ın sınırları, başkent, şehirler ve o yılda var olan yapılar (inşaat / tamam / harabe).
'use strict';
window.Dunya = (() => {
  const D = Math.PI / 180, OUT = '#2a1a0e';
  const DOKUNMATIK = matchMedia('(pointer: coarse)'); // parmakla kullanılan ekran: fareyle "üstüne gelme" yok
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
  const rnd = i => { const x = Math.sin(i * 127.1 + 311.7) * 43758.5453; return x - Math.floor(x); };
  const lerp = (a, b, t) => a + (b - a) * t;
  let g, W = 0, H = 0, T = 0, Ycur = 0;
  const view = { lat: 24, lon: 22, z: 1 };
  let zt = 1, target = null, idle = 0, hover = null, vel = [0, 0];
  const hits = [];
  let aralik = 100;
  const layers = { yapi: false, sehir: true, sinir: true, savas: false, deniz: false, afet: false, antlasma: false, olay: false, kaynak: false, ticaret: false, yolculuk: false, goc: false, magara: false, mit: false, tarihkazi: false, fosilkazi: false, akinti: false, ruzgar: false, hayvan: false, tukenen: false, bitki: false, cografya: false, nehir: false, hayvangoc: false, liman: false, volkan: false, donum: false, gece: false, yayilis: false, iklim: false, taban: false, kutup: false, krater: false, gol: false, saat: false, manyetik: false, tarim: false, yazi: false, din: false, tarihgoc: false, salgin: false, bogaz: false, megakent: false, icat: false, felsefe: false, insanlar: false };
  let yayilisAktif = null, turRota = null;
  // 🌓 Canlı gece/gündüz gölgesi ve büyük şehir ışıkları (gerçek UTC saate göre)
  const GECE_SEHIR = [
    [41.0,29.0,1.3],[39.9,32.8,0.9],[38.4,27.1,0.8],[51.5,-0.1,1.3],[48.8,2.3,1.3],[40.4,-3.7,1.0],[41.9,12.5,1.0],[52.5,13.4,1.0],[38.0,23.7,0.8],
    [55.7,37.6,1.2],[59.9,30.3,0.9],[30.0,31.2,1.2],[24.7,46.7,1.0],[25.2,55.3,1.1],[35.7,51.4,1.1],[19.1,72.9,1.3],[28.6,77.2,1.3],[22.6,88.4,1.1],
    [13.7,100.5,1.1],[1.3,103.8,1.1],[-6.2,106.8,1.1],[14.6,121.0,1.0],[22.3,114.2,1.2],[31.2,121.5,1.4],[39.9,116.4,1.4],[37.5,127.0,1.3],[35.7,139.7,1.4],
    [-33.9,151.2,1.0],[-37.8,145.0,0.9],[-36.8,174.8,0.8],[40.7,-74.0,1.4],[38.9,-77.0,1.0],[41.9,-87.6,1.1],[25.8,-80.2,1.0],[43.6,-79.4,1.0],
    [34.0,-118.2,1.3],[37.8,-122.4,1.0],[19.4,-99.1,1.3],[4.7,-74.1,0.9],[-12.0,-77.0,0.9],[-33.4,-70.6,0.9],[-23.5,-46.6,1.3],[-22.9,-43.2,1.1],
    [-34.6,-58.4,1.1],[6.5,3.4,1.1],[-26.2,28.0,1.0],[-1.3,36.8,0.8],[33.6,-7.6,0.9]
  ].map(([la, lo, w]) => [Math.cos(la * D), Math.sin(la * D), lo * D, w]);
  let geceCv = null, geceKey = '';
  function gunesVektor() {
    const now = new Date();
    const yilBas = Date.UTC(now.getUTCFullYear(), 0, 0);
    const doy = (Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()) - yilBas) / 864e5;
    const decl = -23.44 * Math.cos((2 * Math.PI / 365) * (doy + 10));
    const utcH = now.getUTCHours() + now.getUTCMinutes() / 60;
    const sunLo = 180 - utcH * 15;
    return pj(Math.cos(decl * D), Math.sin(decl * D), sunLo * D);
  }
  function geceMaske(sx, sy, sz) {
    const N = 96;
    if (!geceCv) { geceCv = document.createElement('canvas'); geceCv.width = geceCv.height = N; }
    const k = `${sx.toFixed(2)}|${sy.toFixed(2)}|${sz.toFixed(2)}`;
    if (k === geceKey) return geceCv;
    geceKey = k;
    const c = geceCv.getContext('2d'), img = c.createImageData(N, N), d = img.data;
    const half = N / 2;
    for (let py = 0; py < N; py++) {
      const y = (half - (py + 0.5)) / half;
      for (let px = 0; px < N; px++) {
        const x = ((px + 0.5) - half) / half;
        const r2 = x * x + y * y;
        if (r2 > 1) continue;
        const z = Math.sqrt(1 - r2);
        const dot = x * sx + y * sy + z * sz;
        if (dot >= 0.14) continue;
        const idx = (py * N + px) * 4;
        if (dot <= -0.16) {
          d[idx] = 6; d[idx + 1] = 14; d[idx + 2] = 42; d[idx + 3] = 158;
        } else {
          // Yumuşak gün batımı / alacakaranlık kuşağı
          const t = (0.14 - dot) / 0.30;
          const tw = Math.sin(t * Math.PI);
          d[idx] = Math.round(6 + tw * 55);
          d[idx + 1] = Math.round(14 + tw * 22);
          d[idx + 2] = Math.round(42 - tw * 10);
          d[idx + 3] = Math.round(t * t * 158);
        }
      }
    }
    c.putImageData(img, 0, 0);
    return geceCv;
  }

  // ---------- veri ----------
  const VERI = window.DUNYA_VERI || { kara: [], nehir: [] };
  // prep: noktaların küre üstündeki yeri (X = cos(enlem)·cos(boylam), Yv = cos(enlem)·sin(boylam)) bir kez hesaplanır;
  // küre dönerken her karede nokta başına cos/sin hesaplamak gerekmez (hız: bkz. linePath ve polyPathOn)
  const prep = pts => {
    const n = pts.length, la = new Float32Array(n), lo = new Float32Array(n); for (let i = 0; i < n; i++) { la[i] = pts[i][0] * D; lo[i] = pts[i][1] * D; }
    const cl = la.map(Math.cos), sl = la.map(Math.sin), X = new Float32Array(n), Yv = new Float32Array(n);
    for (let i = 0; i < n; i++) { X[i] = cl[i] * Math.cos(lo[i]); Yv[i] = cl[i] * Math.sin(lo[i]); }
    return { n, cl, sl, lo, X, Yv };
  };
  const KARA = VERI.kara.map(prep);
  // Hızlı kara/deniz ayrımı (okyanusa tıklamayı algılamak için)
  const KARA_BB = VERI.kara.map(pts => {
    let a0 = 90, a1 = -90, o0 = 180, o1 = -180;
    for (const p of pts) { if (p[0] < a0) a0 = p[0]; if (p[0] > a1) a1 = p[0]; if (p[1] < o0) o0 = p[1]; if (p[1] > o1) o1 = p[1]; }
    return { pts, bb: [a0, a1, o0, o1] };
  });
  function karaMi(la, lo) {
    if (la <= -72) return true;
    lo = ((((lo + 180) % 360) + 360) % 360) - 180;
    let ic = false;
    for (const r of KARA_BB) {
      const b = r.bb; if (la < b[0] || la > b[1] || lo < b[2] || lo > b[3]) continue;
      const pts = r.pts;
      for (let i = 0, j = pts.length - 1; i < pts.length; j = i++) {
        if ((pts[i][0] > la) !== (pts[j][0] > la) && lo < (pts[j][1] - pts[i][1]) * (la - pts[i][0]) / (pts[j][0] - pts[i][0]) + pts[i][1]) ic = !ic;
      }
    }
    if (ic && VERI.hazar && la >= 36 && la <= 48 && lo >= 46 && lo <= 55) {
      let hz = false;
      for (let i = 0, j = VERI.hazar.length - 1; i < VERI.hazar.length; j = i++) {
        const a = VERI.hazar[i], b = VERI.hazar[j];
        if ((a[0] > la) !== (b[0] > la) && lo < (b[1] - a[1]) * (la - a[0]) / (b[0] - a[0]) + a[1]) hz = !hz;
      }
      if (hz) return false;
    }
    return ic;
  }
  const NEHIR = VERI.nehir.map(r => ({ ad: r.ad, ...prep(r.p), nil: /Nile/.test(r.ad) }));
  // Nehirler kalınlık sınıflarına bölünür (1 ince dere … 5 ana nehir; data/nehir-kalinlik.js): kaynaktan denize doğru
  // kalınlaşır, büyük nehirler uzaktan da görünür. Veri yoksa (ya da sırası uymuyorsa) hepsi tek kalınlıkta çizilir.
  const NEHIR_SINIF = (() => {
    const K = window.NEHIR_KALINLIK; if (!K || K.length !== VERI.nehir.length) return null;
    const s = [[], [], [], [], []];
    VERI.nehir.forEach((r, i) => {
      if (/Nile/.test(r.ad)) return;
      let b = 0;
      for (const kosu of K[i].split(',')) {
        const [c, n] = kosu.split(':').map(Number), p = r.p.slice(Math.max(0, b - 1), b + n);   // önceki koşunun son noktasıyla başlar: çizgi kopmaz
        if (p.length > 1 && s[c - 1]) s[c - 1].push(prep(p));
        b += n;
      }
    });
    return s;
  })();
  const ZEMIN = window.KureZemin || null;   // kabartmalı zemin (js/kure-zemin.js); hazır değilse düz renkli çizim
  // Küre görünümü: 'oyun' (varsayılan: düz renkli, hızlı; kabartma yok) | 'resimli' (basamaklı renkler + kabartma) | 'gercekci'
  let gorunum = 'oyun';
  function setGorunum(id) { gorunum = id === 'resimli' || id === 'gercekci' ? id : 'oyun'; if (gorunum !== 'oyun' && ZEMIN) ZEMIN.baslat(); }
  const geceMi = () => document.body.dataset.gece === '1';
  const NIL_GERCEK = (() => {
    const segs = VERI.nehir.filter(r => r.ad === 'Nile').map(r => r.p[0][0] > r.p[r.p.length - 1][0] ? r.p.slice().reverse() : r.p.slice());
    segs.sort((a, b) => a[0][0] - b[0][0]);
    const out = []; for (const s of segs) out.push(...s);
    return out.length > 10 ? out : null;
  })();
  // Çöller, buz örtüsü ve Hazar Denizi: biçimler data/dogal-sekil.js'ten gelir (Natural Earth görselinden üretilir,
  // araclar/dogal-sekil.py). Çöl ve buz yumuşak kenarlı çizilir (bkz. yumusak): kenarları cetvelle çizilmiş gibi durmaz.
  const DSEK = window.DOGAL_SEKIL || { col: [], colCevre: [], buz: [], hazar: [] };
  const COLP = DSEK.col.map(prep), COLC = DSEK.colCevre.map(prep), BUZK = DSEK.buz.map(prep);
  const BUZ = [prep((() => { const p = []; for (let lo = -180; lo <= 180; lo += 6) p.push([-62, lo]); p.push([-90, 180], [-90, -180]); return p; })())];   // Antarktika (kıyıyla kırpılır)
  const HAZAR = prep(DSEK.hazar[0] || [[47, 49.5], [45, 47.5], [42.5, 48], [40.5, 50], [38.5, 49], [37, 50.5], [37.2, 54], [39.5, 53.5], [41, 52.8], [42.5, 52.5], [44.5, 50.5], [46.8, 53]]);
  // köşeleri yuvarlar (Chaikin): az noktayla elle çizilmiş çokgenler köşeli durmasın
  const yuvarla = (pts, kez = 2) => { for (let k = 0; k < kez; k++) { const o = []; for (let i = 0; i < pts.length; i++) { const p = pts[i], q = pts[(i + 1) % pts.length]; o.push([p[0] * 0.75 + q[0] * 0.25, p[1] * 0.75 + q[1] * 0.25], [p[0] * 0.25 + q[0] * 0.75, p[1] * 0.25 + q[1] * 0.75]); } pts = o; } return pts; };
  // Büyük iç göller (DUNYA_VERI.kara bunları kara olarak içerirken siyasi sınırlar oyuk bırakır; mavi göl olarak çizilerek yeşil boşluklar giderilir).
  // Biçimler data/gol-sekil.js'ten gelir (Natural Earth "Lakes"; araclar/gol-sekil.js). Göl içindeki büyük adalar ayrı halkadır:
  // göller 'evenodd' dolguyla boyanır, adalar oyuk kalır. Aral Gölü elle çizilmiştir: 1960 öncesindeki bütün hâli
  // (veri yalnızca bugünkü küçülmüş parçaları içerir).
  const ARAL = yuvarla([[46.8,60.7],[46.6,61.6],[45.8,61.0],[44.8,61.5],[43.6,60.5],[43.8,58.6],[45.1,58.3],[46.2,59.2]]);
  const GOLLER = [...(window.GOL_SEKIL || []), ARAL].map(prep);
  // Cliopatria 180° boylamında kesildiği için eksik kalan Çukotka/Wrangel (Rusya) halkaları kara verisinden alınır
  const CHUKOTKA_H = KARA_BB.filter(r => r.bb[0] > 63.8 && r.bb[1] < 72.0 && r.bb[3] < -169.0 && r.bb[2] <= -179.5).map(r => ({ la: r.pts.map(p => p[0]), lo: r.pts.map(p => p[1]), p: null }));
  // km: ortalama genişlik
  const BOGAZ = [
    { ad: 'İstanbul Boğazı', km: 1.4, p: prep([[40.995, 28.985], [41.02, 29.0], [41.045, 29.015], [41.07, 29.045], [41.09, 29.058], [41.12, 29.07], [41.15, 29.078], [41.175, 29.095], [41.2, 29.115], [41.23, 29.135]]) }
  ];
  const BULUT = Array.from({ length: 16 }, (_, i) => ({ la: (Math.sin(i * 12.9) * 0.5) * 120, lo: i * 47 % 360 - 180, r: 5 + (i % 5) * 1.6, tur: i % 3 }));
  // sabit ızgara, yıldızlar ve Nil kolları: her karede yeniden üretilmesin
  const IZGARA = [-60, -30, 0, 30, 60].map(la => prep(Array.from({ length: 91 }, (_, i) => [la, -180 + i * 4])));
  // Uzay: yıldızlar bir kez ayrı (saydam) bir tuvale çizilir (bir bölümü hafif bir şerit boyunca yoğunlaşır), her karede tek resim olarak basılır.
  // Yıldızların çoğu çok sönük ve küçüktür, azı parlaktır; hafif sıcak/soğuk renk farkı vardır. PARLAK: göz kırpanlar.
  let uzayCv = null, uzayKey = ''; const PARLAK = [];
  const uzayRenk = hex => { const n = parseInt(hex.slice(1), 16); return `rgb(${Math.round((n >> 16) * 0.62)},${Math.round(((n >> 8) & 255) * 0.62)},${Math.round((n & 255) * 0.66)})`; };
  function uzayKatman(wp, hp) {
    const key = wp + '|' + hp; if (uzayCv && uzayKey === key) return uzayCv;
    uzayKey = key; if (!uzayCv) uzayCv = document.createElement('canvas'); uzayCv.width = wp; uzayCv.height = hp;
    const x = uzayCv.getContext('2d'); x.clearRect(0, 0, wp, hp);
    let th = 20261128; const rn = () => (th = (th * 16807) % 2147483647) / 2147483647;
    const olc = Math.sqrt(wp * hp / (1440 * 900)), serit = px => hp * (0.46 + 0.13 * Math.sin(px / wp * 2 * Math.PI + 1.3));
    const leke = (px, py, rr, renk, a) => { for (const dx of [0, -wp, wp]) { if (px + dx + rr < 0 || px + dx - rr > wp) continue; const gr = x.createRadialGradient(px + dx, py, 0, px + dx, py, rr); gr.addColorStop(0, `rgba(${renk},${a})`); gr.addColorStop(1, `rgba(${renk},0)`); x.fillStyle = gr; x.fillRect(px + dx - rr, py - rr, rr * 2, rr * 2); } };
    PARLAK.length = 0;
    const N = Math.round(760 * olc * olc);
    for (let i = 0; i < N; i++) {
      const px = rn() * wp, py = i % 3 === 0 ? serit(px) + (rn() + rn() - 1) * hp * 0.16 : rn() * hp;   // üçte biri şeridin çevresinde yoğunlaşır
      const buyukluk = Math.pow(rn(), 7), yc = (0.42 + buyukluk * 1.5) * Math.max(1, olc), a = 0.22 + 0.7 * Math.pow(rn(), 1.6) + buyukluk * 0.3, t = rn();
      const renk = t < 0.16 ? '255,222,184' : t < 0.42 ? '196,214,255' : '255,255,255';
      if (py < -2 || py > hp + 2) continue;
      x.fillStyle = `rgba(${renk},${Math.min(1, a).toFixed(2)})`; x.beginPath(); x.arc(px, py, yc, 0, 7); x.fill();
      if (buyukluk > 0.42) { leke(px, py, yc * 4.5, renk, 0.2); if (PARLAK.length < 28) PARLAK.push([px, py, yc, renk, 0.7 + rn() * 1.6, rn() * 6.28]); }
    }
    return uzayCv;
  }
  let nilKollar = null;
  const getNilKollar = () => nilKollar || (window.Harita && window.Harita.KOLLAR ? (nilKollar = window.Harita.KOLLAR.map(prep)) : []);

  // ---------- izdüşüm ----------
  let cl0 = 1, sl0 = 0, l0 = 0, cL0 = 1, sL0 = 0; // cL0/sL0: boylam dönüşünün cos/sin'i (kare başına bir kez)
  let BX = new Float32Array(4096), BY = new Float32Array(4096), BZ = new Float32Array(4096); // ortak tamponlar (her çokgen için yeni dizi açılmasın)
  const AZ_PX = 0.7; // ekranda bundan yakın ardışık noktalar çizilmez (görüntü değişmez, çizgi sayısı azalır)
  const R = () => Math.min(W, H) * 0.42 * view.z;
  function pj(cl, sl, lo) {
    const d = lo - l0, cd = Math.cos(d);
    const x = cl * Math.sin(d), y = cl0 * sl - sl0 * cl * cd, z = sl0 * sl + cl0 * cl * cd;
    return [x, y, z];
  }
  function P(lat, lon) { const [x, y, z] = pj(Math.cos(lat * D), Math.sin(lat * D), lon * D); const r = R(); return [W / 2 + x * r, H / 2 - y * r, z]; }
  // çokgen yolu: kürenin görünür yarımküresine (z >= 0) tam kesim; arka yüz/antipod sarması asla olmaz
  function polyPathOn(dst, p) {
    const r = R(), cx = W / 2, cy = H / 2, n = p.n;
    if (n < 3) return false;
    let any = false, allVis = true, backIdx = -1;
    let minx = 1e9, maxx = -1e9, miny = 1e9, maxy = -1e9;
    if (BX.length < n) { const m = 1 << Math.ceil(Math.log2(n)); BX = new Float32Array(m); BY = new Float32Array(m); BZ = new Float32Array(m); }
    const xs = BX, ys = BY, zs = BZ, PX = p.X, PY = p.Yv, SL = p.sl;
    for (let i = 0; i < n; i++) {
      let x, y, z;
      if (PX) { const ccd = PX[i] * cL0 + PY[i] * sL0; x = PY[i] * cL0 - PX[i] * sL0; y = cl0 * SL[i] - sl0 * ccd; z = sl0 * SL[i] + cl0 * ccd; }
      else [x, y, z] = pj(p.cl[i], p.sl[i], p.lo[i]);
      xs[i] = x; ys[i] = y; zs[i] = z;
      if (z > 0) {
        any = true;
        const sx = cx + x * r, sy = cy - y * r;
        if (sx < minx) minx = sx; if (sx > maxx) maxx = sx;
        if (sy < miny) miny = sy; if (sy > maxy) maxy = sy;
      } else {
        allVis = false;
        if (backIdx < 0) backIdx = i;
      }
    }
    if (!any) return false;
    if (allVis) {
      if (maxx < -20 || minx > W + 20 || maxy < -20 || miny > H + 20) return false;
      let lx = cx + xs[0] * r, ly = cy - ys[0] * r; dst.moveTo(lx, ly);
      for (let i = 1; i < n; i++) { const sx = cx + xs[i] * r, sy = cy - ys[i] * r; if (i < n - 1 && Math.abs(sx - lx) + Math.abs(sy - ly) < AZ_PX) continue; dst.lineTo(sx, sy); lx = sx; ly = sy; }
      dst.closePath();
      return true;
    }
    // Ufku (z = 0) kesen çokgen: her görünür kıyı parçasını tam ufuk kesim noktasında başlatıp bitir,
    // ardından yalnızca ufuk çemberi üzerindeki en kısa yayla (|Δθ| <= π) kapat.
    const ufukA = (i, j) => {
      const t = zs[i] / (zs[i] - zs[j]);
      const hx = xs[i] + t * (xs[j] - xs[i]), hy = ys[i] + t * (ys[j] - ys[i]);
      return Math.atan2(-hy, hx);
    };
    let drew = false, open = false, aStart = 0, plx = 0, ply = 0;
    for (let k = 0; k < n; k++) {
      const i = (backIdx + k) % n, j = (i + 1) % n;
      const zi = zs[i] > 0, zj = zs[j] > 0;
      if (!zi && zj) {
        aStart = ufukA(i, j);
        dst.moveTo(cx + Math.cos(aStart) * r, cy + Math.sin(aStart) * r);
        plx = cx + xs[j] * r; ply = cy - ys[j] * r; dst.lineTo(plx, ply);
        open = true; drew = true;
      } else if (zi && zj && open) {
        const zk = zs[(j + 1) % n] > 0; // bir sonraki nokta ufkun ardındaysa bu nokta mutlaka çizilir
        const sx = cx + xs[j] * r, sy = cy - ys[j] * r;
        if (!zk || Math.abs(sx - plx) + Math.abs(sy - ply) >= AZ_PX) { dst.lineTo(sx, sy); plx = sx; ply = sy; }
      } else if (zi && !zj && open) {
        const aEnd = ufukA(i, j);
        dst.lineTo(cx + Math.cos(aEnd) * r, cy + Math.sin(aEnd) * r);
        let d = aStart - aEnd;
        while (d > Math.PI) d -= 2 * Math.PI;
        while (d < -Math.PI) d += 2 * Math.PI;
        const steps = Math.max(1, Math.ceil(Math.abs(d) / 0.12));
        for (let s = 1; s <= steps; s++) {
          const aa = aEnd + d * s / steps;
          dst.lineTo(cx + Math.cos(aa) * r, cy + Math.sin(aa) * r);
        }
        dst.closePath();
        open = false;
      }
    }
    return drew;
  }
  const polyPath = p => polyPathOn(g, p);
  // Yumuşak kenarlı alanlar (çöl, buz): çokgenler küçük bir tuvale çizilir, büyütülerek kürenin tabanına basılır.
  // Küçültme oranı kenarın ne kadar yumuşak olacağını belirler (kürenin yarıçapıyla orantılı: yaklaşınca geçiş de genişler).
  // gruplar: [[çokgenler, renk], …]; S: hedef tuvalin ölçeği (dpr × taban ölçeği); tw, th: hedef tuvalin piksel boyu
  let yumCv = null;
  function yumusak(gruplar, tw, th, S) {
    const k = clamp(R() * S * 0.032, 4, 44), w = Math.ceil(tw / k) + 4, h = Math.ceil(th / k) + 4;
    if (!yumCv) yumCv = document.createElement('canvas');
    if (yumCv.width !== w || yumCv.height !== h) { yumCv.width = w; yumCv.height = h; }
    const x = yumCv.getContext('2d');
    x.setTransform(1, 0, 0, 1, 0, 0); x.clearRect(0, 0, w, h); x.setTransform(S / k, 0, 0, S / k, 2, 2);
    for (const [l, renk] of gruplar) { x.beginPath(); let var_ = false; for (const p of l) if (polyPathOn(x, p)) var_ = true; if (var_) { x.fillStyle = renk; x.fill(); } }
    g.save(); g.setTransform(1, 0, 0, 1, 0, 0); g.imageSmoothingEnabled = true; g.imageSmoothingQuality = 'high';
    g.drawImage(yumCv, -2 * k, -2 * k, w * k, h * k); g.restore();
  }
  function linePath(p) {
    if (p.X) {
      // Ekranın epey dışındaki parçalar yola eklenmez (yakınlaşınca nehirlerin, yolların çoğu ekran dışında kalır);
      // ekrana giren/çıkan parça, dışarıdaki komşu noktasıyla birlikte çizilir ki çizgi kenarda kesik durmasın.
      const r = R(), cx = W / 2, cy = H / 2, PX = p.X, PY = p.Yv, SL = p.sl, n = p.n, M = 60;
      let pen = false, lx = 0, ly = 0, oncekiIc = false, onceVar = false, ox = 0, oy = 0;
      for (let i = 0; i < n; i++) {
        const ccd = PX[i] * cL0 + PY[i] * sL0, z = sl0 * SL[i] + cl0 * ccd;
        if (z <= 0.02) { pen = false; onceVar = false; oncekiIc = false; continue; }
        const sx = cx + (PY[i] * cL0 - PX[i] * sL0) * r, sy = cy - (cl0 * SL[i] - sl0 * ccd) * r;
        const ic = sx > -M && sx < W + M && sy > -M && sy < H + M;
        if (ic || oncekiIc) {
          if (!pen) { if (onceVar && !oncekiIc) { g.moveTo(ox, oy); g.lineTo(sx, sy); } else g.moveTo(sx, sy); pen = true; lx = sx; ly = sy; }
          else if (!ic || i === n - 1 || Math.abs(sx - lx) + Math.abs(sy - ly) >= AZ_PX) { g.lineTo(sx, sy); lx = sx; ly = sy; }
          if (!ic) pen = false;
        }
        oncekiIc = ic; onceVar = true; ox = sx; oy = sy;
      }
      return;
    }
    const r = R(); let pen = false; for (let i = 0; i < p.n; i++) { const [x, y, z] = pj(p.cl[i], p.sl[i], p.lo[i]); if (z > 0.02) { const sx = W / 2 + x * r, sy = H / 2 - y * r; pen ? g.lineTo(sx, sy) : g.moveTo(sx, sy); pen = true; } else pen = false; } }
  // ---------- akıntılar için yatayda kesintisiz tekrarlanan su dokusu (bir kez üretilir) ----------
  const DOKU_W = 512, DOKU_H = 64, _doku = {};
  function suDokusu(sicak) {
    const k = sicak ? 's' : 'c'; if (_doku[k]) return _doku[k];
    const cv = document.createElement('canvas'); cv.width = DOKU_W + 64; cv.height = DOKU_H;
    const cx = cv.getContext('2d'), im = cx.createImageData(DOKU_W, DOKU_H), dt = im.data;
    let tohum = sicak ? 7 : 3; const rnd = () => (tohum = (tohum * 16807) % 2147483647) / 2147483647;
    // x yönünde periyodik değer gürültüsü (ızgara x'te sarılır)
    const katmanlar = [[6, 3], [12, 5], [24, 8], [48, 12]].map(([gx, gy]) => ({ gx, gy, v: Array.from({ length: gx * (gy + 1) }, rnd) }));
    const yumus = t => t * t * (3 - 2 * t);
    const gurultu = (L, x, y) => {
      const fx = x / DOKU_W * L.gx, fy = y / DOKU_H * L.gy, ix = Math.floor(fx), iy = Math.floor(fy), ax = yumus(fx - ix), ay = yumus(fy - iy);
      const v = (i, j) => L.v[(j % (L.gy + 1)) * L.gx + ((i % L.gx) + L.gx) % L.gx];
      const a = v(ix, iy) + (v(ix + 1, iy) - v(ix, iy)) * ax, b = v(ix, iy + 1) + (v(ix + 1, iy + 1) - v(ix, iy + 1)) * ax;
      return a + (b - a) * ay;
    };
    const [r0, g0, b0] = sicak ? [226, 96, 52] : [38, 150, 214];
    const [r1, g1, b1] = sicak ? [255, 214, 160] : [205, 246, 255];
    for (let y = 0; y < DOKU_H; y++) {
      const kenar = Math.pow(Math.sin(Math.PI * (y + 0.5) / DOKU_H), 1.3);
      for (let x = 0; x < DOKU_W; x++) {
        // akış yönünde uzamış damarlar: y'yi gürültüyle kıvır, sinüs bantları
        const n = gurultu(katmanlar[0], x, y) * 0.5 + gurultu(katmanlar[1], x, y) * 0.3 + gurultu(katmanlar[2], x, y) * 0.2;
        const damar = Math.pow(Math.abs(Math.sin((y / DOKU_H) * 9.0 + n * 6.0 + x / DOKU_W * Math.PI * 4)), 6);
        const kopuk = Math.max(0, gurultu(katmanlar[3], x, y) - 0.62) * 3.2;
        const isik = Math.min(1, damar * 0.85 + kopuk);
        const i = (y * DOKU_W + x) * 4;
        dt[i] = r0 + (r1 - r0) * isik; dt[i + 1] = g0 + (g1 - g0) * isik; dt[i + 2] = b0 + (b1 - b0) * isik;
        dt[i + 3] = 255 * kenar * (0.28 + 0.72 * isik) * (0.75 + 0.25 * n);
      }
    }
    cx.putImageData(im, 0, 0);
    cx.drawImage(cv, 0, 0, 64, DOKU_H, DOKU_W, 0, 64, DOKU_H);   // sarma payı
    return (_doku[k] = cv);
  }
  // ---------- genel doku üretici (x yönünde kesintisiz) ----------
  function dokuUret(anahtar, tohum0, piksel) {
    if (_doku[anahtar]) return _doku[anahtar];
    const cv = document.createElement('canvas'); cv.width = DOKU_W + 64; cv.height = DOKU_H;
    const cx = cv.getContext('2d'), im = cx.createImageData(DOKU_W, DOKU_H), dt = im.data;
    let tohum = tohum0; const rnd = () => (tohum = (tohum * 16807) % 2147483647) / 2147483647;
    const kat = [[5, 4], [11, 7], [23, 11]].map(([gx, gy]) => ({ gx, gy, v: Array.from({ length: gx * (gy + 1) }, rnd) }));
    const ym = t => t * t * (3 - 2 * t);
    const gr = (L, x, y) => {
      const fx = x / DOKU_W * L.gx, fy = y / DOKU_H * L.gy, ix = Math.floor(fx), iy = Math.floor(fy), ax = ym(fx - ix), ay = ym(fy - iy);
      const v = (i, j) => L.v[(j % (L.gy + 1)) * L.gx + ((i % L.gx) + L.gx) % L.gx];
      const a = v(ix, iy) + (v(ix + 1, iy) - v(ix, iy)) * ax, b = v(ix, iy + 1) + (v(ix + 1, iy + 1) - v(ix, iy + 1)) * ax;
      return a + (b - a) * ay;
    };
    for (let y = 0; y < DOKU_H; y++) for (let x = 0; x < DOKU_W; x++) {
      const n = gr(kat[0], x, y) * 0.55 + gr(kat[1], x, y) * 0.3 + gr(kat[2], x, y) * 0.15;
      const [r, gg, b, a] = piksel(x, y, n), i = (y * DOKU_W + x) * 4;
      dt[i] = r; dt[i + 1] = gg; dt[i + 2] = b; dt[i + 3] = a;
    }
    cx.putImageData(im, 0, 0);
    cx.drawImage(cv, 0, 0, 64, DOKU_H, DOKU_W, 0, 64, DOKU_H);
    return (_doku[anahtar] = cv);
  }
  // rüzgâr dokusu: ince, tüy gibi uzun hava çizgileri; rengin hafif bir tonu ile
  function ruzgarDokusu(renk) {
    const n0 = parseInt(renk.slice(1), 16), rr = n0 >> 16, rg = (n0 >> 8) & 255, rb = n0 & 255;
    return dokuUret('r' + renk, 11, (x, y, n) => {
      const kenar = Math.pow(Math.sin(Math.PI * (y + 0.5) / DOKU_H), 0.9);
      const cizgi = Math.pow(Math.abs(Math.sin((y / DOKU_H) * 16 + n * 5 + x / DOKU_W * Math.PI * 4)), 16);
      const t = 0.25 + 0.75 * cizgi;
      return [255 + (rr - 255) * 0.35 * (1 - cizgi), 255 + (rg - 255) * 0.35 * (1 - cizgi), 255 + (rb - 255) * 0.35 * (1 - cizgi),
              255 * kenar * (0.04 + 0.96 * cizgi) * (0.7 + 0.3 * n) * t];
    });
  }
  // bir dokuyu ekran parçası boyunca kaydırarak çizer (matris elle; ekran dışı atlanır)
  function dokuAkit(seg, Lpx, doku, HW, kay, olc, ST, inc) {
    const tb = g.getTransform();
    for (let s1 = 0; s1 < Lpx; s1 += ST) {
      const w = inc(s1 + ST / 2); if (w <= 0.02) continue;
      const [x, y, tx, ty] = segNokta(seg, s1);
      if (x < -50 || y < -50 || x > W + 50 || y > H + 50) continue;
      const h = HW * (0.3 + 0.7 * w);
      g.setTransform(tb.a * tx + tb.c * ty, tb.b * tx + tb.d * ty, -tb.a * ty + tb.c * tx, -tb.b * ty + tb.d * tx,
        tb.a * x + tb.c * y + tb.e, tb.b * x + tb.d * y + tb.f);
      const sx = ((s1 * olc - kay) % DOKU_W + DOKU_W) % DOKU_W;
      g.drawImage(doku, sx, 0, ST * olc + 1, DOKU_H, -0.5, -h, ST + 1.2, h * 2);
    }
    g.setTransform(tb);
  }
  // emoji'ler bir kez küçük bir resme çizilir (haritada seçilsin diye koyu yumuşak gölgeyle), sonra hızlıca kopyalanır
  const _emo = {}, EMO_PX = 46, EMO_PAY = 13;
  function emojiResim(ik) {
    if (_emo[ik]) return _emo[ik];
    const c = document.createElement('canvas'), x = c.getContext('2d'); x.font = EMO_PX + 'px Atkinson Hyperlegible Next, system-ui';
    const w = Math.max(EMO_PX, Math.ceil(x.measureText(ik).width));
    c.width = w + EMO_PAY * 2; c.height = EMO_PX + EMO_PAY * 2;
    x.font = EMO_PX + 'px Atkinson Hyperlegible Next, system-ui'; x.textAlign = 'center'; x.textBaseline = 'middle'; x.fillStyle = '#fffdf5';
    x.shadowColor = 'rgba(8,14,22,0.85)'; x.shadowBlur = 7; x.shadowOffsetY = 1.5;
    x.fillText(ik, c.width / 2, c.height / 2 + 3); x.shadowBlur = 3; x.fillText(ik, c.width / 2, c.height / 2 + 3);
    return (_emo[ik] = c);
  }
  // arka plansız simge: (x, y) merkezli, görünen yarı boyu r olan emoji
  // Simgeler cihazın emojisiyle değil sitenin kendi resmiyle çizilir (Windows, Android, iOS: herkes aynı simgeyi görür).
  // Resimler: Google Noto Emoji, tek sayfada img/simgeler.webp; hangi emojinin hangi hücrede olduğu data/simge-dizin.js
  // (üretim: node araclar/simge-sayfa.js + python araclar/simge-sayfa.py). Sayfa yüklenene kadar ve dizinde olmayan
  // bir simgede cihazın emojisine düşülür.
  let _smImg = null, _smTam = null, _smYari = null;
  const _smIdx = new Map(), _smSeg = (typeof Intl !== 'undefined' && Intl.Segmenter) ? new Intl.Segmenter('tr', { granularity: 'grapheme' }) : null;
  function simgeSayfa() {
    if (_smTam) return _smTam;
    if (!_smImg) {
      _smImg = new Image();
      _smImg.onload = () => {
        // gölge bir kez, bütün sayfaya birden uygulanır (hücre kenarındaki pay gölgenin komşuya taşmasını önler)
        const c = document.createElement('canvas'); c.width = _smImg.width; c.height = _smImg.height;
        const x = c.getContext('2d'); x.shadowColor = 'rgba(8,14,22,0.8)'; x.shadowBlur = 6; x.shadowOffsetY = 1.5; x.drawImage(_smImg, 0, 0);
        x.shadowBlur = 2.5; x.shadowOffsetY = 0.5; x.drawImage(_smImg, 0, 0);
        const y = document.createElement('canvas'); y.width = c.width >> 1; y.height = c.height >> 1;
        const yx = y.getContext('2d'); yx.imageSmoothingQuality = 'high'; yx.drawImage(c, 0, 0, y.width, y.height);
        _smYari = y; _smTam = c;
      };
      _smImg.src = 'img/simgeler.webp?v=4';
    }
    return null;
  }
  function simgeHucreleri(ik, D) {
    let ix = _smIdx.get(ik); if (ix !== undefined) return ix;
    ix = [];
    for (const p of (_smSeg ? Array.from(_smSeg.segment(ik), q => q.segment) : [ik.trim()])) {
      const i = D.s[p.replace(/\uFE0F/g, '')];
      if (i !== undefined) ix.push(i); else if (/\p{Extended_Pictographic}|\p{Regional_Indicator}/u.test(p)) { ix = null; break; }
    }
    if (ix && !ix.length) ix = null;
    _smIdx.set(ik, ix); return ix;
  }
  // arka plansız simge: (x, y) merkezli, görünen yarı boyu r
  function simge(ik, x, y, r) {
    const D = window.SIMGE_DIZIN, tam = D ? simgeSayfa() : null, ix = tam ? simgeHucreleri(ik, D) : null;
    if (ix) {
      const en = r * 2.1, boy = en * D.hucre / D.resim, yari = en * DPRc <= D.resim * 0.55, kay = yari ? _smYari : tam, H = yari ? D.hucre / 2 : D.hucre;
      for (let j = 0; j < ix.length; j++) {
        const i = ix[j], cx = x + (j - (ix.length - 1) / 2) * en;
        g.drawImage(kay, (i % D.sutun) * H, Math.floor(i / D.sutun) * H, H, H, cx - boy / 2, y - boy / 2, boy, boy);
      }
      return;
    }
    const c = emojiResim(ik), k = r * 2.1 / EMO_PX, w = c.width * k, h = c.height * k;
    g.drawImage(c, x - w / 2, y - h / 2, w, h);
  }
  // ---------- kasırga ve girdap: bir kez çizilen sarmal resimler; her karede döndürülerek basılır ----------
  let _kasirga = null, _girdap = null, DPRc = 1;
  // Bir resmin yarıya inen kopyaları: ekrandaki boya en yakın kopya seçilir; böylece küçük çizimde (dönerken de) ne bulanır ne titrer.
  function mipZinciri(c) {
    const z = [c]; let o = c;
    while (o.width > 40) { const k = document.createElement('canvas'); k.width = k.height = o.width >> 1; const x = k.getContext('2d'); x.imageSmoothingQuality = 'high'; x.drawImage(o, 0, 0, k.width, k.height); z.push(k); o = k; }
    return z;
  }
  function mipSec(z, cssPx) { const px = cssPx * DPRc; let i = 0; while (i < z.length - 1 && z[i + 1].width >= px) i++; return z[i]; }
  // Kasırga: net kenarlı, resimli harita tarzında bulut sarmalı (yumuşak leke değil): pofuduk kenarlı kollar, ince gri-mavi çerçeve,
  // kolların içinde dönüşü gösteren ince çizgiler, ortada yoğun bulut diski ve keskin bir göz.
  function kasirgaResim() {
    if (_kasirga) return _kasirga;
    const N = 512, c = document.createElement('canvas'); c.width = c.height = N; const x = c.getContext('2d'), m = N / 2;
    let th = 9; const rn = () => (th = (th * 16807) % 2147483647) / 2147483647;
    const toplar = [];   // [x, y, yarıçap]
    const KOL = [[0, 1], [Math.PI, 1], [Math.PI / 2, 0.62], [Math.PI * 1.5, 0.62]];   // iki ana, iki ince kol
    const kolNokta = (a0, guc, t) => { const a = a0 + t * (guc === 1 ? 3.7 : 2.9), rr = (0.20 + (guc === 1 ? 0.70 : 0.58) * Math.pow(t, 0.92)) * m; return [m + Math.cos(a) * rr, m + Math.sin(a) * rr, a]; };
    const kolEn = (guc, t) => m * (0.155 * Math.pow(1 - t, 0.75) + 0.012) * guc;
    for (const [a0, guc] of KOL) for (let i = 0; i <= 64; i++) {
      const t = i / 64, [px, py, a] = kolNokta(a0, guc, t), w = kolEn(guc, t);
      toplar.push([px, py, w]);
      if (i % 2 === 0 && t < 0.93) { const ya = a + (rn() - 0.5) * 1.2; toplar.push([px + Math.cos(ya) * w * 0.62, py + Math.sin(ya) * w * 0.62, w * (0.50 + rn() * 0.2)]); }   // dış kenardaki pofuduklar
    }
    for (let i = 0; i < 18; i++) { const a = i / 18 * 6.283, rr = m * 0.265; toplar.push([m + Math.cos(a) * rr, m + Math.sin(a) * rr, m * (0.085 + rn() * 0.03)]); }
    toplar.push([m, m, m * 0.30]);
    const bas = (renk, ek) => { x.fillStyle = renk; x.beginPath(); for (const [px, py, r] of toplar) { x.moveTo(px + r + ek, py); x.arc(px, py, Math.max(0.5, r + ek), 0, 6.2832); } x.fill(); };
    bas('#7f9cb8', m * 0.020);   // çerçeve
    bas('#ffffff', 0);
    // kolların iç yanında hafif gölge + dönüş çizgileri
    x.lineCap = 'round';
    for (const [a0, guc] of KOL) {
      for (const [kay, kal, renk] of [[-0.42, 0.34, 'rgba(206,221,235,0.9)'], [0.05, 0.05, 'rgba(120,150,180,0.75)'], [0.42, 0.04, 'rgba(120,150,180,0.5)']]) {
        x.strokeStyle = renk;
        for (let i = 2; i < 58; i++) {
          const t0 = i / 64, t1 = (i + 1.3) / 64, [x0, y0, q0] = kolNokta(a0, guc, t0), [x1, y1, q1] = kolNokta(a0, guc, t1), w0 = kolEn(guc, t0), w1 = kolEn(guc, t1);
          // kay < 0: merkeze bakan yan; nokta, kol ekseninden merkeze/dışa doğru kaydırılır
          const u0 = [(x0 - m), (y0 - m)], l0 = Math.hypot(u0[0], u0[1]) || 1, u1 = [(x1 - m), (y1 - m)], l1 = Math.hypot(u1[0], u1[1]) || 1;
          x.lineWidth = Math.max(0.8, w0 * kal * 2);
          x.beginPath(); x.moveTo(x0 + u0[0] / l0 * w0 * kay, y0 + u0[1] / l0 * w0 * kay); x.lineTo(x1 + u1[0] / l1 * w1 * kay, y1 + u1[1] / l1 * w1 * kay); x.stroke();
        }
      }
    }
    // göz duvarı gölgesi ve göz
    const gd = x.createRadialGradient(m, m, m * 0.07, m, m, m * 0.24); gd.addColorStop(0, 'rgba(150,176,202,0.95)'); gd.addColorStop(0.45, 'rgba(206,221,235,0.7)'); gd.addColorStop(1, 'rgba(255,255,255,0)');
    x.fillStyle = gd; x.beginPath(); x.arc(m, m, m * 0.24, 0, 7); x.fill();
    x.globalCompositeOperation = 'destination-out'; x.fillStyle = '#000'; x.beginPath(); x.arc(m, m, m * 0.072, 0, 7); x.fill();
    x.globalCompositeOperation = 'source-over';
    x.strokeStyle = '#6f8dab'; x.lineWidth = m * 0.018; x.beginPath(); x.arc(m, m, m * 0.072, 0, 7); x.stroke();
    return (_kasirga = mipZinciri(c));
  }
  // Oyun ve Resimli görünümün bulutu: üç ayrı biçimde, net kenarlı pofuduk kümeler (üstten ışık almış beyaz gövde, alt yanı hafif gri-mavi gölgeli).
  // Her biçim için [bulut, yere düşen gölge] resim zincirleri bir kez üretilir.
  const _bulutO = [];
  function bulutResimOyun(tur) {
    if (_bulutO[tur]) return _bulutO[tur];
    const N = 384, m = N / 2, c = document.createElement('canvas'); c.width = c.height = N; const x = c.getContext('2d');
    let th = 31 + tur * 17; const rn = () => (th = (th * 16807) % 2147483647) / 2147483647;
    const toplar = [], yay = [0.80, 0.66, 0.74][tur], say = [9, 7, 11][tur];
    for (let i = 0; i < say; i++) {      // gövde: yatay bir eksen boyunca dizilmiş, ortada iri uçlarda küçük toplar
      const t = say === 1 ? 0.5 : i / (say - 1), ort = 1 - Math.abs(t - 0.5) * 2;
      toplar.push([m + (t - 0.5) * 2 * m * yay + (rn() - 0.5) * m * 0.08, m + m * 0.10 - ort * m * 0.10 + (rn() - 0.5) * m * 0.10, m * (0.13 + 0.17 * ort) * (0.85 + rn() * 0.3)]);
    }
    for (let i = 0; i < say - 3; i++) {  // üstteki kabarıklar
      const t = (i + 1) / (say - 2);
      toplar.push([m + (t - 0.5) * 2 * m * yay * 0.62 + (rn() - 0.5) * m * 0.1, m - m * (0.10 + rn() * 0.14), m * (0.12 + rn() * 0.09)]);
    }
    const bas = (renk, ek, dy) => { x.fillStyle = renk; x.beginPath(); for (const [px, py, r0] of toplar) { x.moveTo(px + r0 + ek, py + dy); x.arc(px, py + dy, r0 + ek, 0, 6.2832); } x.fill(); };
    bas('rgba(150,176,204,0.9)', m * 0.016, m * 0.012);   // ince çerçeve
    bas('#ffffff', 0, 0);
    x.globalCompositeOperation = 'source-atop';           // gövdenin içinde kalan gölge ve parlaklık
    const gr = x.createLinearGradient(0, m - m * 0.34, 0, m + m * 0.36); gr.addColorStop(0, 'rgba(255,255,255,0)'); gr.addColorStop(0.55, 'rgba(214,226,240,0)'); gr.addColorStop(1, 'rgba(160,184,212,0.75)');
    x.fillStyle = gr; x.fillRect(0, 0, N, N);
    x.fillStyle = 'rgba(190,208,228,0.45)';
    for (const [px, py, r0] of toplar) { x.beginPath(); x.arc(px + r0 * 0.25, py + r0 * 0.42, r0 * 0.78, 0, 7); x.fill(); }
    x.fillStyle = '#ffffff';
    for (const [px, py, r0] of toplar) { x.beginPath(); x.arc(px - r0 * 0.14, py - r0 * 0.16, r0 * 0.74, 0, 7); x.fill(); }
    x.globalCompositeOperation = 'source-over';
    // gölge: aynı biçimin koyu, yumuşatılmış kopyası
    const g2 = document.createElement('canvas'); g2.width = g2.height = N; const y2 = g2.getContext('2d');
    y2.filter = 'blur(' + Math.round(N * 0.022) + 'px)'; y2.drawImage(c, 0, 0); y2.filter = 'none';
    y2.globalCompositeOperation = 'source-in'; y2.fillStyle = 'rgba(6,24,48,1)'; y2.fillRect(0, 0, N, N);
    return (_bulutO[tur] = [mipZinciri(c), mipZinciri(g2)]);
  }
  // Gerçekçi görünümün bulutu: uzaydan görülen bulut kümesi gibi, kenarı eriyen irili ufaklı lekelerden oluşur (çerçeve ya da net kenar yok).
  // Üç ayrı biçim; her biri için [bulut, yere düşen gölge] resim zincirleri bir kez üretilir.
  const _bulut = [];
  function bulutResim(tur) {
    if (_bulut[tur]) return _bulut[tur];
    const N = 384, m = N / 2, c = document.createElement('canvas'); c.width = c.height = N; const x = c.getContext('2d');
    let th = 31 + tur * 17; const rn = () => (th = (th * 16807) % 2147483647) / 2147483647;
    const egri = [0.2, -0.28, 0.1][tur], say = [72, 56, 86][tur];
    for (let i = 0; i < say; i++) {      // hafif kavisli bir eksen boyunca: ortada sık ve iri, uçlarda seyrek ve küçük
      const t = rn(), ort = 1 - Math.abs(t - 0.5) * 2;
      const px = m + (t - 0.5) * N * 0.64 + (rn() - 0.5) * N * 0.05;
      const py = m + egri * N * 0.5 * ((t - 0.5) * (t - 0.5) * 4 - 0.5) + (rn() + rn() - 1) * N * (0.04 + 0.085 * ort);
      const rr = N * (0.03 + 0.07 * ort * rn() + 0.02 * rn());
      const gr = x.createRadialGradient(px, py, 0, px, py, rr); gr.addColorStop(0, 'rgba(255,255,255,0.52)'); gr.addColorStop(0.55, 'rgba(255,255,255,0.22)'); gr.addColorStop(1, 'rgba(255,255,255,0)');
      x.fillStyle = gr; x.beginPath(); x.arc(px, py, rr, 0, 7); x.fill();
    }
    x.globalCompositeOperation = 'source-atop';           // alt yanında hafif gri-mavi gölge
    const gr = x.createLinearGradient(0, m - N * 0.2, 0, m + N * 0.25); gr.addColorStop(0, 'rgba(200,214,232,0)'); gr.addColorStop(1, 'rgba(150,172,204,0.5)');
    x.fillStyle = gr; x.fillRect(0, 0, N, N);
    x.globalCompositeOperation = 'source-over';
    // gölge: aynı biçimin koyu kopyası (kenarlar zaten yumuşak)
    const g2 = document.createElement('canvas'); g2.width = g2.height = N; const y2 = g2.getContext('2d');
    y2.drawImage(c, 0, 0); y2.globalCompositeOperation = 'source-in'; y2.fillStyle = 'rgba(4,18,40,1)'; y2.fillRect(0, 0, N, N);
    return (_bulut[tur] = [mipZinciri(c), mipZinciri(g2)]);
  }
  function girdapResim() {
    if (_girdap) return _girdap;
    const N = 384, c = document.createElement('canvas'); c.width = c.height = N; const x = c.getContext('2d'), m = N / 2, olc = N / 144;
    // içine çeken koyu derinlik
    const d = x.createRadialGradient(m, m, 0, m, m, m); d.addColorStop(0, 'rgba(3,22,54,0.92)'); d.addColorStop(0.3, 'rgba(8,58,110,0.6)'); d.addColorStop(0.75, 'rgba(20,110,170,0.2)'); d.addColorStop(1, 'rgba(20,110,170,0)');
    x.fillStyle = d; x.beginPath(); x.arc(m, m, m, 0, 7); x.fill();
    // merkeze doğru sarılan köpük çizgileri: dört kalın kol, aralarında ince kollar
    x.lineCap = 'round';
    for (let kol = 0; kol < 8; kol++) {
      const ince = kol % 2 === 1, D = 90;
      for (let i = 0; i < D; i++) {
        const t0 = i / D, t1 = (i + 1.25) / D, f = t => [m + Math.cos(kol * 0.7854 + t * 4.6) * (0.07 + 0.88 * t) * m, m + Math.sin(kol * 0.7854 + t * 4.6) * (0.07 + 0.88 * t) * m];
        const [x0, y0] = f(t0), [x1, y1] = f(t1);
        x.strokeStyle = `rgba(226,248,255,${(ince ? 0.42 : 0.9) * Math.sin(Math.PI * Math.min(1, t0 * 1.15 + 0.06)) ** 0.8 * (1 - t0 * 0.55)})`;
        x.lineWidth = (ince ? 0.9 : 2.4) * (0.45 + 0.9 * (1 - t0)) * olc;
        x.beginPath(); x.moveTo(x0, y0); x.lineTo(x1, y1); x.stroke();
      }
    }
    const k = x.createRadialGradient(m, m, 0, m, m, m * 0.12); k.addColorStop(0, 'rgba(2,12,32,0.95)'); k.addColorStop(1, 'rgba(2,12,32,0)');
    x.fillStyle = k; x.beginPath(); x.arc(m, m, m * 0.12, 0, 7); x.fill();
    return (_girdap = mipZinciri(c));
  }
  // Göç hayvanları: Blender'da üretilmiş hareketli 3B sprite'lar (img/goc-hayvanlar.webp; betik: blender-deneme/goc_sprite.py).
  // Satır = hayvan (GOC_IDX); sütun = yön * 4 + hareket karesi. 9 yön: 0 ekranda aşağı (izleyiciye doğru), 4 sağa, 8 yukarı (uzağa);
  // sola gidişte resim aynalanır (16 yön). Kamera eğik kuş bakışı olduğundan hayvan döndükçe gerçekten 3B döner.
  const GOC_IDX = { 'serengeti-gnu': 0, 'meyve-yarasasi': 1, 'kiyi-cullugu': 2, 'gezgin-yusufcuk': 3, 'avrupa-yilanbaligi': 4,
    'ren-geyigi': 5, 'gri-balina': 6, 'sardalya-gocu': 7, 'beyaz-leylek': 8, 'kuzey-sumrusu': 9, 'sarkici-kus': 10, 'hint-kazi': 11,
    'kral-kelebek': 12, 'pasifik-somonu': 13, 'deniz-fili': 14, 'buyuk-beyaz': 15, 'kir-kirlangici': 16, 'deniz-kaplumbaga': 17,
    'kambur-balina': 18, 'kalahari-zebra': 19 };
  const GOC_HP = 96;
  // [ortam (h hava, s su, k kara), saniyedeki hareket döngüsü (kanat/kuyruk/koşu), boyut çarpanı]
  const GOC_TUR = [['k', 2.1, 1.15], ['h', 2.4, 1.05], ['h', 2.2, 1.2], ['h', 4.5, 0.95], ['s', 1.5, 1.15], ['k', 1.9, 1.2], ['s', 0.6, 1.35],
    ['s', 2.2, 0.95], ['h', 1.6, 1.3], ['h', 2.2, 1.15], ['h', 1.0, 1.25], ['h', 2.0, 1.25], ['h', 2.8, 1.0], ['s', 2.2, 0.95],
    ['s', 1.1, 1.1], ['s', 1.2, 1.35], ['h', 3.2, 1.05], ['s', 0.8, 1.0], ['s', 0.55, 1.4], ['k', 2.4, 1.1]];
  let _gocImg = null, _gocHazir = false, _gocGolge = null;
  function gocSprite() {
    if (!_gocImg) { _gocImg = new Image(); _gocImg.onload = () => { _gocHazir = true; }; _gocImg.src = 'img/goc-hayvanlar.webp?v=4'; }
    return _gocHazir ? _gocImg : null;
  }
  // uçan hayvanların yere düşen gölgesi: aynı karelerin koyu silüeti (yarı çözünürlükte, bir kez üretilir)
  function gocGolge(img) {
    if (_gocGolge) return _gocGolge;
    const c = document.createElement('canvas'); c.width = img.width >> 1; c.height = img.height >> 1;
    const x = c.getContext('2d'); x.drawImage(img, 0, 0, c.width, c.height);
    x.globalCompositeOperation = 'source-in'; x.fillStyle = '#04101c'; x.fillRect(0, 0, c.width, c.height);
    return (_gocGolge = c);
  }
  // emoji'nin başı hangi yöne bakıyor (Windows emojilerinde geyik ve zebra sağa, çoğu hayvan sola bakar)
  const _WIN = /Windows/.test(navigator.userAgent);
  function emojiYon(ik) {
    if (ik === '🦇' || ik === '🦋' || ik === '🐍') return 'yok';
    if (ik === '🪰') return 'ust';
    if ((ik === '🦌' || ik === '🦓') && _WIN) return 'sag';
    return 'sol';
  }
  function ekranParcalari(p) {
    const r = R(), segs = []; let cur = null;
    for (let i = 0; i < p.n; i++) {
      const [x, y, z] = pj(p.cl[i], p.sl[i], p.lo[i]);
      if (z > 0.02) {
        const sx = W / 2 + x * r, sy = H / 2 - y * r;
        if (!cur) { cur = [[sx, sy, 0]]; segs.push(cur); }
        else { const pr = cur[cur.length - 1], dd = Math.hypot(sx - pr[0], sy - pr[1]); if (dd > 0.5) cur.push([sx, sy, pr[2] + dd]); }
      } else cur = null;
    }
    return segs;
  }
  function segNokta(seg, dist) {
    let lo = 0, hi = seg.length - 1;
    while (hi - lo > 1) { const m = (lo + hi) >> 1; if (seg[m][2] <= dist) lo = m; else hi = m; }
    const a = seg[lo], b = seg[hi], span = (b[2] - a[2]) || 1, f = clamp((dist - a[2]) / span, 0, 1);
    const dx = b[0] - a[0], dy = b[1] - a[1], dl = Math.hypot(dx, dy) || 1;
    return [a[0] + dx * f, a[1] + dy * f, dx / dl, dy / dl];
  }
  // ---------- yollar: sık noktalara bölünmüş çizgi, km cinsinden birikimli uzunluk ----------
  const km = (a, b) => { const la1 = a[0] * D, la2 = b[0] * D, h = Math.sin((la2 - la1) / 2) ** 2 + Math.cos(la1) * Math.cos(la2) * Math.sin((b[1] - a[1]) * D / 2) ** 2; return 12742 * Math.asin(Math.min(1, Math.sqrt(h))); };
  function yolHazirla(r) {
    if (r._d) return r._d;
    // Köşesiz yol: verilen noktaların hepsinden geçen merkezcil Catmull-Rom eğrisi (taşma yapmaz, düğüm atmaz).
    // Boylamlar önce kesintisiz açılır (tarih çizgisini geçen yollar); ilk ve son nokta aynıysa eğri halka olarak kapanır.
    const K = [[r.pts[0][0], r.pts[0][1]]];
    for (let i = 1; i < r.pts.length; i++) {
      const o = K[K.length - 1]; let dlo = r.pts[i][1] - r.pts[i - 1][1]; if (dlo > 180) dlo -= 360; if (dlo < -180) dlo += 360;
      const lo = o[1] + dlo;   // atlanan (aynı) noktada fark sıfır olduğundan o[1] hep bir önceki açılmış boylamdır
      if (Math.abs(r.pts[i][0] - o[0]) + Math.abs(dlo) > 1e-6) K.push([r.pts[i][0], lo]);
    }
    const m = K.length, pts = []; let halka = false;
    if (m === 1) pts.push(K[0], K[0]);
    else if (m === 2) {
      const [a, b] = K, n = Math.max(1, Math.ceil(Math.hypot(b[0] - a[0], b[1] - a[1]) / 0.6));
      for (let j = 0; j <= n; j++) pts.push([a[0] + (b[0] - a[0]) * j / n, a[1] + (b[1] - a[1]) * j / n]);
    } else {
      const ilk = r.pts[0], son = r.pts[r.pts.length - 1];
      halka = m > 3 && Math.abs(ilk[0] - son[0]) < 1e-6 && Math.abs(((ilk[1] - son[1]) % 360 + 540) % 360 - 180) < 1e-6;
      const al = i => {
        if (halka) { const c = m - 1, j = ((i % c) + c) % c, tur = Math.floor(i / c) * (K[c][1] - K[0][1]); return [K[j][0], K[j][1] + tur]; }
        if (i < 0) return [2 * K[0][0] - K[1][0], 2 * K[0][1] - K[1][1]];
        if (i >= m) return [2 * K[m - 1][0] - K[m - 2][0], 2 * K[m - 1][1] - K[m - 2][1]];
        return K[i];
      };
      const dt = (a, b) => Math.max(1e-3, Math.sqrt(Math.hypot(b[0] - a[0], b[1] - a[1])));
      for (let i = 0; i < m - 1; i++) {
        const p0 = al(i - 1), p1 = al(i), p2 = al(i + 1), p3 = al(i + 2);
        const t1 = dt(p0, p1), t2 = t1 + dt(p1, p2), t3 = t2 + dt(p2, p3);
        const uz = Math.hypot(p2[0] - p1[0], p2[1] - p1[1]), n = Math.max(Math.ceil(uz / 0.6), Math.min(10, Math.ceil(uz / 0.04)));
        for (let j = 0; j < n; j++) {
          const t = t1 + (t2 - t1) * j / n, q = [0, 0];
          for (let e = 0; e < 2; e++) {
            const A1 = (t1 - t) / t1 * p0[e] + t / t1 * p1[e];
            const A2 = (t2 - t) / (t2 - t1) * p1[e] + (t - t1) / (t2 - t1) * p2[e];
            const A3 = (t3 - t) / (t3 - t2) * p2[e] + (t - t2) / (t3 - t2) * p3[e];
            const B1 = (t2 - t) / t2 * A1 + t / t2 * A2;
            const B2 = (t3 - t) / (t3 - t1) * A2 + (t - t1) / (t3 - t1) * A3;
            q[e] = (t2 - t) / (t2 - t1) * B1 + (t - t1) / (t2 - t1) * B2;
          }
          q[0] = clamp(q[0], -89.5, 89.5); pts.push(q);
        }
      }
      pts.push([K[m - 1][0], K[m - 1][1]]);
    }
    const cum = [0]; for (let i = 1; i < pts.length; i++) cum.push(cum[i - 1] + km(pts[i - 1], pts[i]));
    return (r._d = { pts, cum, L: cum[cum.length - 1] || 1, p: prep(pts), halka });
  }
  // Yol/göç/rüzgâr gibi çizgiler için tek dokunma alanı: bütün çizgi boyunca r piksel (eskiden yalnızca seyrek noktalarda küçük kutular vardı)
  function yolHit(o, d, r) {
    const pl = []; let cur = null, x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
    // fare algılama için ~80 nokta yeter (yarıçap toleransı içinde); her karede yüzlerce nokta izdüşürülmez
    const n = d.pts.length, adim = Math.max(1, Math.floor(n / 80));
    for (let i = 0; i < n; i = (i === n - 1) ? n : Math.min(n - 1, i + adim)) {
      const pt = d.pts[i];
      const [x, y, z] = P(pt[0], pt[1]);
      if (z > 0.05) {
        if (!cur) { cur = []; pl.push(cur); } cur.push(x, y);
        if (x < x0) x0 = x; if (x > x1) x1 = x; if (y < y0) y0 = y; if (y > y1) y1 = y;
      } else cur = null;
    }
    if (!pl.length) return;
    o.pl = pl; o.r = r; o.x0 = x0 - r; o.x1 = x1 + r; o.y0 = y0 - r; o.y1 = y1 + r;
    hits.unshift(o);
  }
  function yolNokta(d, s) {
    let lo = 0, hi = d.cum.length - 1; while (hi - lo > 1) { const m = (lo + hi) >> 1; if (d.cum[m] <= s) lo = m; else hi = m; }
    const f = clamp((s - d.cum[lo]) / ((d.cum[hi] - d.cum[lo]) || 1), 0, 1), a = d.pts[lo], b = d.pts[hi];
    return [a[0] + (b[0] - a[0]) * f, a[1] + (b[1] - a[1]) * f];
  }
  // çıkışta küçük halka, varışta ok ucu
  function yolUclari(d, renk, buyuk) {
    const n = d.pts.length, [sx, sy, sz] = P(...d.pts[0]), [ex, ey, ez2] = P(...d.pts[n - 1]), [qx, qy] = P(...d.pts[Math.max(0, n - 3)]);
    g.strokeStyle = renk; g.fillStyle = renk; g.lineWidth = 1.6;
    if (sz > 0.05) { g.beginPath(); g.arc(sx, sy, buyuk ? 4.5 : 3.2, 0, 7); g.stroke(); }
    if (ez2 > 0.05) { const a = Math.atan2(ey - qy, ex - qx), L = buyuk ? 10 : 7.5; g.beginPath(); g.moveTo(ex, ey); g.lineTo(ex - Math.cos(a - 0.45) * L, ey - Math.sin(a - 0.45) * L); g.lineTo(ex - Math.cos(a + 0.45) * L, ey - Math.sin(a + 0.45) * L); g.closePath(); g.fill(); }
  }
  // kara için hafif boya dokusu (ekran uzayında tekrar eden desen)
  let desen = null;
  function dokuDesen() {
    if (desen) return desen;
    const c = document.createElement('canvas'); c.width = c.height = 160; const x = c.getContext('2d');
    for (let i = 0; i < 900; i++) { const a = rnd(i), b = rnd(i + 999), k = rnd(i + 77); x.fillStyle = k < 0.5 ? `rgba(70,100,45,${0.05 + k * 0.12})` : `rgba(255,255,235,${0.04 + (k - 0.5) * 0.16})`; x.beginPath(); x.ellipse(a * 160, b * 160, 1 + rnd(i + 5) * 3, 0.6 + rnd(i + 6) * 1.6, rnd(i + 7) * 3, 0, 7); x.fill(); }
    return (desen = g.createPattern(c, 'repeat'));
  }
  // devlet rengi ve küre renk temaları (klasik kartografik siyasi harita paletleri — varsayılan: Canlı Doğa)
  const ATLAS_PALET = ['#dfc27d', '#98bc86', '#cf8b6b', '#89a7bd', '#e2aa73', '#a9b872', '#a59ab8', '#88b5a4', '#d4a66a', '#c4aa88', '#7ea99a', '#c98868'];
  const TEMALAR = {
    doga: { sp: ['#0e314d', '#04101c'], atm: ['rgba(103,232,249,0.55)', 'rgba(56,189,248,0.18)', 'rgba(34,211,238,0)'], oc: ['#46b5f0', '#2484cc', '#0f4a82'], gol: '#2e95dc', kara: ['#c8e6a8', '#8fc474'], mix: [248, 245, 236, 0.08], palet: ATLAS_PALET },
    safir: { sp: ['#122652', '#050b1a'], atm: ['rgba(96,185,255,0.58)', 'rgba(56,145,235,0.2)', 'rgba(40,120,220,0)'], oc: ['#3a8ed6', '#1c60a3', '#0c315e'], gol: '#2a75b8', kara: ['#cfe0b6', '#98b882'], mix: [244, 240, 228, 0.08], palet: ATLAS_PALET },
    zumrut: { sp: ['#0c2924', '#04120f'], atm: ['rgba(52,211,153,0.48)', 'rgba(16,185,129,0.18)', 'rgba(6,95,70,0)'], oc: ['#2fb5b0', '#187c82', '#0b454d'], gol: '#219196', kara: ['#c7e4a8', '#83b870'], mix: [240, 248, 236, 0.08], palet: ATLAS_PALET },
    mor: { sp: ['#23113d', '#0b0518'], atm: ['rgba(192,132,252,0.52)', 'rgba(139,92,246,0.18)', 'rgba(88,28,135,0)'], oc: ['#4478c9', '#254a94', '#112554'], gol: '#315ea8', kara: ['#d2dfb8', '#9eb887'], mix: [246, 240, 232, 0.08], palet: ATLAS_PALET },
    kutup: { sp: ['#071e2e', '#020912'], atm: ['rgba(45,212,191,0.58)', 'rgba(56,189,248,0.2)', 'rgba(14,116,144,0)'], oc: ['#54b8e6', '#257fb3', '#0e426b'], gol: '#3596c9', kara: ['#d6ece4', '#9ec5ba'], mix: [242, 248, 246, 0.10], palet: ATLAS_PALET }
  };
  // Kabartmalı zeminde okyanus rengi: [derin, orta, sığ] (okyanus tabanı görselinin parlaklığına göre karışır) ve göl rengi
  const ZEMIN_RENK = {
    doga: { dz: ['#0d3a63', '#1d6da3', '#62afd6'], gol: '#3f8fc2' },
    safir: { dz: ['#0b2c5c', '#1a55a0', '#5a9fdc'], gol: '#3a7cc4' },
    zumrut: { dz: ['#083c44', '#12777f', '#55b9b4'], gol: '#2b9396' },
    mor: { dz: ['#141f52', '#27489a', '#6a8fd6'], gol: '#4468b8' },
    kutup: { dz: ['#0a3350', '#1f6b96', '#74bcdc'], gol: '#4a9cc6' }
  };
  const ZEMIN_GECE = { dz: ['#020916', '#061a33', '#0d3053'], gol: '#14466f' };
  let temaId = 'doga', tema = TEMALAR.doga;
  const hexRGB = h => { const n = parseInt((h || '#888888').slice(1), 16); return [n >> 16, (n >> 8) & 255, n & 255]; };
  const rgbDist = (a, b) => Math.hypot(a[0] - b[0], a[1] - b[1], a[2] - b[2]);
  function siyasiRenk(hex) { const [r, gr, b] = hexRGB(hex), [mr, mg, mb, mw] = tema.mix; return `rgb(${Math.round(r * (1 - mw) + mr * mw)},${Math.round(gr * (1 - mw) + mg * mw)},${Math.round(b * (1 - mw) + mb * mw)})`; }
  // Devlet renkleri KALICIDIR: bir devlete (adına) bir kez renk verilir ve o devlet haritada kaldıkça rengi değişmez;
  // yıl ilerledikçe yalnızca sınırları değişir. Yeni kurulan devlet, o an komşusu olan devletlerin renklerinden en uzak
  // paleti rengini alır (ör. Türkiye–İran aynı renge düşmez). Eskiden renk, devletin o yılki listedeki sırasına bağlıydı;
  // listeye bir devlet girip çıkınca bütün renkler kayıyor, harita her yıl yeniden boyanmış gibi görünüyordu.
  const _devletRenk = new Map();   // devlet adı -> palet sırası
  const adKarma = t => { let h = 7; for (let i = 0; i < t.length; i++) h = (h * 31 + t.charCodeAt(i)) >>> 0; return h; };
  function renkAyir(list) {
    const pal = tema.palet, palRgb = pal.map(hexRGB), ks = [];
    for (const o of list) { const k = o.k; if (k && k.bb) ks.push(k); }
    const komsuMu = (x, y) => !(x.bb[1] + 1.8 < y.bb[0] || x.bb[0] - 1.8 > y.bb[1] || x.bb[3] + 1.8 < y.bb[2] || x.bb[2] - 1.8 > y.bb[3]);
    const ata = (k, i) => { k._r = pal[i]; k._rgb = palRgb[i]; k._ri = i; };
    // komşuların renklerine en uzak palet rengi; eşitlikte devletin adından türeyen sıraya en yakın olan (hep aynı sonuç)
    const enIyi = k => {
      const komsu = []; for (const q of ks) if (q !== k && q._rgb && komsuMu(k, q)) komsu.push(q._rgb);
      const bas = adKarma(k.n || '') % pal.length;
      let bestI = bas, bestD = -1;
      for (let j = 0; j < pal.length; j++) {
        const i = (bas + j) % pal.length; let md = 999;
        for (const c of komsu) { const d = rgbDist(palRgb[i], c); if (d < md) md = d; }
        if (md >= 62) { if (bestD < 62) { bestI = i; bestD = md; } break; }   // adından gelen sıraya en yakın, yeterince farklı ilk renk
        if (md > bestD) { bestD = md; bestI = i; }
      }
      return [bestI, bestD];
    };
    const yeni = [];
    for (const k of ks) {
      const i = k.n ? _devletRenk.get(k.n) : undefined;
      if (i !== undefined && i < pal.length) ata(k, i); else { k._rgb = null; yeni.push(k); }
    }
    // Rengi belli bir devletin rengine sonradan dokunulmaz (iki devlet ileride komşu olup benzer renge düşse bile):
    // kullanıcı için rengin hiç değişmemesi, komşuların her zaman zıt renkte olmasından önemlidir. Sınır çizgisi ve ad zaten ayırır.
    for (const k of yeni) { const [i] = enIyi(k); ata(k, i); if (k.n) _devletRenk.set(k.n, i); }
  }
  let katmanCv = null, tabanCv = null, tabanKey = '', dilimVer = 0;
  // Harita yazıları sitenin kendi yazı tipleriyle çizilir (her cihazda aynı): kara ve deniz adları Literata, etiketler
  // Atkinson Hyperlegible Next. Tuval yazı tipini kendiliğinden indirmediği için burada istenir; inince küre yeniden çizilir.
  if (document.fonts && document.fonts.load) Promise.all(['600 12px Literata', '700 12px Literata', 'italic 600 12px Literata', 'italic 700 12px Literata', '600 12px Atkinson Hyperlegible Next', '700 12px Atkinson Hyperlegible Next', '800 12px Atkinson Hyperlegible Next']
    .map(f => document.fonts.load(f).catch(() => null))).then(() => { tabanKey = ''; });
  // hareket hâlinde taban, cihaz yetişmiyorsa düşük çözünürlükte ayrı tuvale çizilir (bkz. hareketOlcek); kamera durunca tam çözünürlüğe döner
  let tabanKCv = null, sonKam = '';
  // Hareket hâlindeki taban ölçeği cihaza göre uyarlanır. Eskiden küre her kıpırdadığında yarı çözünürlüğe iniyor, durunca
  // yeniden netleşiyordu ("kalite düşüyor, tekrar yükleniyor"). Artık cihaz yetişiyorsa tam çözünürlük (1) korunur; yalnızca
  // taban çizimi uzun sürüyorsa 0,75'e, o da yetmezse 0,5'e iner ve çizim hızlanınca geri çıkar (bkz. draw içindeki ölçüm).
  let hareketOlcek = 1, tabanSure = 0, tabanSay = 0, hareketGorunum = 'oyun';
  function tabanK(w, h) { if (!tabanKCv) tabanKCv = document.createElement('canvas'); if (tabanKCv.width !== w || tabanKCv.height !== h) { tabanKCv.width = w; tabanKCv.height = h; } return tabanKCv; }
  function katman(w, h) { if (!katmanCv) katmanCv = document.createElement('canvas'); if (katmanCv.width !== w || katmanCv.height !== h) { katmanCv.width = w; katmanCv.height = h; } return katmanCv; }
  function taban(w, h) { if (!tabanCv) tabanCv = document.createElement('canvas'); if (tabanCv.width !== w || tabanCv.height !== h) { tabanCv.width = w; tabanCv.height = h; tabanKey = ''; } return tabanCv; }
  const llPath = pts => { const p = prep(pts); return () => polyPath(p); };

  // ---------- tarihi sınırlar: Cliopatria (Seshat, CC BY 4.0) ----------
  // data/sinir/sinir-<n>.js zaman dilimleri, gerektikçe yüklenir. Kayıt: {n, tr, y0, y1, a, r, e, g, w}
  // y1 başlangıç (erken) yılı, y0 bitiş yılı (site kuralı: MÖ pozitif). Aynı adlı ardışık kayıtlar arasında
  // sınır, kaydın son yıllarında yayılarak değişir: kazanılan yer eski merkezden halka halka dolar,
  // kaybedilen yer uzaktan başlayarak çekilir, ortak kısım hep görünür kalır.
  const DILIM = {}, yukleniyor = {};
  window.__sinirDilim = (i, v) => {
    const H = v.h.map(d => { const la = [], lo = []; let a = 0, o = 0; for (let k = 0; k < d.length; k += 2) { a += d[k]; o += d[k + 1]; la.push(a / 20); lo.push(o / 20); } return { la, lo, p: null }; });
    const K = v.k;
    for (const k of K) {
      k.H = k.g.map(id => H[id]);
      let a0 = 90, a1 = -90, o0 = 180, o1 = -180; for (const h of k.H) for (let j = 0; j < h.la.length; j++) { a0 = Math.min(a0, h.la[j]); a1 = Math.max(a1, h.la[j]); o0 = Math.min(o0, h.lo[j]); o1 = Math.max(o1, h.lo[j]); }
      // 180° boylamında kesilen Çukotka + Wrangel Adası'nı Rusya / SSCB / Rus İmparatorluğu sınırlarına ekle
      if (CHUKOTKA_H.length && /Russia|Soviet/i.test(k.n) && a1 > 64 && o1 >= 178) {
        for (const ch of CHUKOTKA_H) k.H.push(ch);
        o0 = Math.min(o0, -180);
      }
      k.bb = [a0, a1, o0, o1]; if (!k.e) k.e = [(a0 + a1) / 2, (o0 + o1) / 2];
    }
    // 1976–2024 diliminde Cliopatria'da eksik olan Batı Sahra (Fas, Cezayir ve Moritanya sınırlarına tam oturan çokgen) eklenir
    if (i === 9 && !K.some(k => k.n === 'Western Sahara' && k.y0 <= -2024)) {
      const wsPts = [[27.66,-13.5],[27.66,-8.68],[27.2,-8.68],[26.05,-8.65],[26.05,-12.0],[23.5,-11.95],[23.05,-13.05],[21.35,-13.0],[21.3,-17.0],[20.75,-17.02],[20.75,-17.2],[22.0,-17.0],[24.0,-16.2],[26.0,-15.0]];
      const wsH = { la: wsPts.map(p => p[0]), lo: wsPts.map(p => p[1]), p: null };
      K.push({ n: 'Western Sahara', tr: 'Batı Sahra', y1: -1976, y0: -2024, a: 266000, r: '#d4a03c', w: 'Western Sahara', e: [24.5, -13.1], H: [wsH], bb: [20.75, 27.66, -17.2, -8.65] });
    }
    const ada = {}; for (const k of K) (ada[k.n] = ada[k.n] || []).push(k);
    for (const L of Object.values(ada)) { L.sort((x, y) => y.y1 - x.y1); for (let j = 0; j < L.length; j++) { const n = L[j + 1]; if (n && n.y1 >= L[j].y0 - 2) { L[j].sonra = n; n.once = L[j]; } } }
    K.sort((x, y) => y.a - x.a);
    DILIM[i] = K;
    dilimVer++;
  };
  function dilimNo(y) { const Z = window.SINIR_DIZIN || []; const d = Z.find(z => y <= z.y[0] && y >= z.y[1]); return d ? d.d : y > (Z[0] || { y: [0] }).y[0] ? 0 : Z.length - 1; }
  function dilimIste(i) { if (DILIM[i] || yukleniyor[i] || i < 0) return; yukleniyor[i] = 1; const sc = document.createElement('script'); sc.src = `data/sinir/sinir-${i}.js?v=1`; sc.onerror = () => { yukleniyor[i] = 0; }; document.head.appendChild(sc); }
  // ayrıntı düzeyleri: uzaktan bakarken halkanın sadeleştirilmiş sürümü çizilir (küçük adalar asla silinmez)
  function dpLL(la, lo, tol) {
    const n = la.length; if (n < 5) return la.map((a, j) => [a, lo[j]]);
    const keep = new Uint8Array(n); keep[0] = keep[n - 1] = 1; const st = [[0, n - 1]];
    while (st.length) { const [a, b] = st.pop(); let md = 0, mi = -1; const dx = lo[b] - lo[a], dy = la[b] - la[a], L = Math.hypot(dx, dy) || 1e-9; for (let i = a + 1; i < b; i++) { const d = Math.abs(dy * (lo[i] - lo[a]) - dx * (la[i] - la[a])) / L; if (d > md) { md = d; mi = i; } } if (md > tol && mi > 0) { keep[mi] = 1; st.push([a, mi], [mi, b]); } }
    const out = []; for (let i = 0; i < n; i++) if (keep[i]) out.push([la[i], lo[i]]);
    return out.length >= 3 ? out : la.map((a, j) => [a, lo[j]]);
  }
  const LOD = [0, 0.05, 0.12];
  // kıta adları (uzaktan görünen tek yazılar); yerleri bölge işaretlerinin arasına denk gelecek biçimde seçildi
  const KITA_AD = [[4, 21, 'AFRİKA'], [57, 22, 'AVRUPA'], [50, 95, 'ASYA'], [53, -104, 'KUZEY AMERİKA'], [-24, -60, 'GÜNEY AMERİKA'], [-31, 134, 'OKYANUSYA'], [-80, 20, 'ANTARKTİKA']];
  function halkaYol(h, sv) {
    if (!h.L) {
      h.L = []; let a0 = 90, a1 = -90, o0 = 180, o1 = -180; for (let j = 0; j < h.la.length; j++) { a0 = Math.min(a0, h.la[j]); a1 = Math.max(a1, h.la[j]); o0 = Math.min(o0, h.lo[j]); o1 = Math.max(o1, h.lo[j]); }
      h.c = [(a0 + a1) / 2, (o0 + o1) / 2]; h.rad = Math.hypot((a1 - a0) / 2, (o1 - o0) / 2 * Math.cos(h.c[0] * D)) * D;
    }
    if (h.L[sv] === undefined) { const pts = sv ? dpLL(h.la, h.lo, LOD[sv]) : h.la.map((a, j) => [a, h.lo[j]]); h.L[sv] = pts ? prep(pts) : null; }
    return h.L[sv];
  }
  let svNow = 0;
  function sekilYol(k) {
    g.beginPath(); let v = false; const r = R();
    for (const h of k.H) {
      const p = halkaYol(h, svNow); if (!p) continue;
      const [x, y, z] = P(h.c[0], h.c[1]); if (z < -Math.sin(Math.min(1.5, h.rad))) continue;
      const rr = h.rad * r + 4; if (x + rr < 0 || x - rr > W || y + rr < 0 || y - rr > H) continue;
      if (polyPath(p)) v = true;
    }
    return v;
  }
  // ekranda (px) bir merkezden kaydın sınır kutusunun en uzak köşesine uzaklık
  function uzak(c, bb) { let m = 0; for (const la of [bb[0], bb[1]]) for (const lo of [bb[2], bb[3]]) { const a = Math.acos(clamp(Math.sin(c[0] * D) * Math.sin(la * D) + Math.cos(c[0] * D) * Math.cos(la * D) * Math.cos((lo - c[1]) * D), -1, 1)); if (a > m) m = a; } return m * R() * 1.05 + 4; }
  function daireKirp(c, r) { const [x, y, z] = P(...c); g.beginPath(); g.arc(x, y, Math.max(0, r), 0, 7); g.clip(); void z; }
  // seçili yılda görünen kayıtlar ve geçiş durumları
  let aktifOnbellek = { y: null, o: [] };
  function aktifSinirlar(Y) {
    if (aktifOnbellek.y === Y) return aktifOnbellek.o;
    // yalnızca o yılın dilimi yüklendiyse önbelleğe al (yoksa yükleme bitince sınırlar hiç görünmüyordu)
    const o = aktifSinirlar0(Y); if (DILIM[dilimNo(Y)]) { renkAyir(o); aktifOnbellek = { y: Y, o }; } return o;
  }
  const SINIR_SON = -2024; // Cliopatria verisi MS 2024'te bitiyor: sonrası için son sınırlar gösterilir
  function aktifSinirlar0(Y) {
    Y = Math.max(Y, SINIR_SON);
    const i = dilimNo(Y); dilimIste(i);
    const Z = window.SINIR_DIZIN || [], dz = Z[i]; if (dz) { if (Y - dz.y[1] < 60) dilimIste(i + 1); if (dz.y[0] - Y < 60) dilimIste(i - 1); }
    const K = DILIM[i]; if (!K) return [];
    const out = [];
    for (const k of K) {
      if (!(Y > k.y0 - 1 && Y <= k.y1 + 0.0001)) continue;
      // Her yıl var olan devletler tam sınırlarıyla çizilir (daire kırpması ülkelerde yapay boşluklar açıyordu)
      out.push({ k, mod: 'sabit' });
    }
    return out;
  }
  // saydam: kabartmalı zeminde dolgu yarı saydamdır (dağlar altından görünür); sınır boyunca devletin renginde bir bant
  // ve ince koyu çizgi devleti ayırır
  function sinirCiz(o, saydam) {
    const k = o.k, renk = siyasiRenk(k._r || k.r);
    if (!sekilYol(k)) return;
    if (saydam) {
      g.globalAlpha = saydam; g.fillStyle = renk; g.fill('evenodd');
      g.globalAlpha = Math.min(1, saydam + 0.4); g.strokeStyle = renk; g.lineWidth = 3.4; g.lineJoin = 'round'; g.stroke();
      g.globalAlpha = 1; g.strokeStyle = 'rgba(48,28,14,0.6)'; g.lineWidth = 0.85; g.stroke();
      return;
    }
    g.fillStyle = renk;
    g.fill('evenodd');
    // karaPath kırpımı içindeyiz: kendi renginde hafif taşma çizgisi kıyı ve sınır dikiş boşluklarını kapatır
    g.strokeStyle = renk; g.lineWidth = 2.4; g.lineJoin = 'round'; g.stroke();
    g.strokeStyle = 'rgba(58,32,14,0.62)'; g.lineWidth = 0.95; g.stroke();
  }
  // Vikiveri eşleştirmesinde yanlış çıkan Türkçe adlar (Cliopatria İngilizce adına göre). Dizi: [[bu yıldan itibaren, ad], ...];
  // eşleşen yıl yoksa verideki ad kalır (ör. "Japon İmparatorluğu" 1947'ye kadar doğru).
  const AD_DUZELT = {
    'Denmark': 'Danimarka', 'Republic of Korea': 'Güney Kore', 'Syria': [[-1920, 'Suriye']], 'Republic of Yemen': [[-1990, 'Yemen']],
    'Republic of the Congo': [[-1960, 'Kongo Cumhuriyeti']], 'Mexico': [[-1846, 'Meksika']], 'Ukraine': 'Ukrayna', 'Japan': [[-1947, 'Japonya']],
    'French Fifth Republic': 'Fransa', 'Kingdom of Great Britain': [[-1922, 'Birleşik Krallık']], 'Guinea': 'Gine', 'Romania': [[-1947, 'Romanya']],
    'Third Hellenic Republic': 'Yunanistan', 'Republic of Bulgaria': [[-1990, 'Bulgaristan']], 'Hungary': [[-1918, 'Macaristan']],
    'Second Republic of Austria': 'Avusturya', 'Éire': 'İrlanda', 'Georgia': 'Gürcistan', 'Slovakia': 'Slovakya',
    'Republic of China': [[-1950, 'Tayvan (Çin Cumhuriyeti)'], [null, 'Çin Cumhuriyeti']], 'Republic of Albania': [[-1991, 'Arnavutluk']],
    'Lebanon': [[-1943, 'Lübnan']], 'Sultanate of Brunei': [[-1984, 'Brunei']], 'Luxembourg': [[-1890, 'Lüksemburg']],
    'Mujahideen': 'Mücahitler', 'Russian-occupied territories': 'Rusya işgalindeki topraklar',
    'Western Sahara': 'Batı Sahra'
  };
  function duzAd(k, y) { const d = AD_DUZELT[k.n]; if (!d) return null; if (typeof d === 'string') return d; for (const [s, ad] of d) if (s == null || y <= s) return ad; return null; }
  const sinirAd = (k, y = Ycur) => ((window.DEVLET_NOT || {})[k.n] || {}).tr || duzAd(k, y) || k.tr || k.n;

  // ---------- simgeler (yapıların küçük resimleri) ----------
  function sh(x, y, s) { g.fillStyle = 'rgba(0,0,0,0.28)'; g.beginPath(); g.ellipse(x, y + s * 0.75, s * 1.1, s * 0.25, 0, 0, 7); g.fill(); }
  let polyRenk = OUT, polyKal = 1;   // icon() anıt simgelerini çizerken değiştirir, sonra geri alır
  function poly(pts, fill, lw = 1.2, dash) { g.beginPath(); g.moveTo(pts[0], pts[1]); for (let i = 2; i < pts.length; i += 2) g.lineTo(pts[i], pts[i + 1]); g.closePath(); if (fill) { g.fillStyle = fill; g.fill(); } if (lw) { g.strokeStyle = polyRenk; g.lineWidth = lw * polyKal; g.lineJoin = 'round'; if (dash) g.setLineDash(dash); g.stroke(); g.setLineDash([]); } }
  function iconShape(type, x, y, s, light, dark) {
    const b = y + s * 0.7;
    switch (type) {
      case 'true': case 'bent':
        poly([x - s, b, x, b + s * 0.12, x, y - s], light); poly([x, b + s * 0.12, x + s, b, x, y - s], dark); break;
      case 'step':
        for (let i = 0; i < 4; i++) { const w = s * (1 - i * 0.22), yy = b - i * s * 0.42; poly([x - w, yy, x + w, yy, x + w * 0.92, yy - s * 0.42, x - w * 0.92, yy - s * 0.42], i % 2 ? dark : light); } break;
      case 'mastaba': poly([x - s, b, x + s, b, x + s * 0.8, b - s * 0.6, x - s * 0.8, b - s * 0.6], light); break;
      case 'sphinx':
        poly([x - s, b, x + s * 0.5, b, x + s * 0.5, b - s * 0.45, x - s * 0.9, b - s * 0.4], light);
        poly([x + s * 0.25, b - s * 0.4, x + s * 0.75, b - s * 0.4, x + s * 0.7, b - s * 1.1, x + s * 0.3, b - s * 1.1], dark);
        poly([x + s * 0.5, b, x + s * 1.1, b, x + s * 1.1, b - s * 0.15, x + s * 0.5, b - s * 0.15], light); break;
      case 'obelisk': poly([x - s * 0.22, b, x + s * 0.22, b, x + s * 0.14, y - s * 0.8, x, y - s * 1.05, x - s * 0.14, y - s * 0.8], light); poly([x - s * 0.14, y - s * 0.8, x + s * 0.14, y - s * 0.8, x, y - s * 1.05], '#f2c94c', 1); break;
      case 'temple': case 'suntemple':
        poly([x - s, b, x - s * 0.15, b, x - s * 0.2, y - s * 0.75, x - s * 0.85, y - s * 0.75], light);
        poly([x + s * 0.15, b, x + s, b, x + s * 0.85, y - s * 0.75, x + s * 0.2, y - s * 0.75], dark);
        poly([x - s * 0.15, b, x + s * 0.15, b, x + s * 0.15, y - s * 0.3, x - s * 0.15, y - s * 0.3], '#5a3a22', 1);
        g.strokeStyle = OUT; g.lineWidth = 1; g.beginPath(); g.moveTo(x - s * 0.45, y - s * 0.75); g.lineTo(x - s * 0.45, y - s * 1.25); g.stroke();
        poly([x - s * 0.45, y - s * 1.25, x - s * 0.1, y - s * 1.15 + Math.sin(T * 4) * s * 0.06, x - s * 0.45, y - s * 1.05], '#d9473a', 0.8); break;
      case 'terrace':
        poly([x - s, b, x + s, b, x + s, b - s * 0.45, x - s, b - s * 0.45], light);
        poly([x - s * 0.7, b - s * 0.45, x + s * 0.7, b - s * 0.45, x + s * 0.7, b - s * 0.9, x - s * 0.7, b - s * 0.9], dark);
        g.fillStyle = 'rgba(42,26,14,0.55)'; for (let i = 0; i < 5; i++) g.fillRect(x - s * 0.85 + i * s * 0.4, b - s * 0.38, s * 0.12, s * 0.32);
        g.fillStyle = '#e8b98a'; g.fillRect(x - s * 1.1, y - s * 1.2, s * 2.2, s * 0.25); break;
      case 'colossus':
        for (const sd of [-0.5, 0.5]) { const cx = x + sd * s; poly([cx - s * 0.3, b, cx + s * 0.3, b, cx + s * 0.3, b - s * 0.55, cx - s * 0.3, b - s * 0.55], light); poly([cx - s * 0.18, b - s * 0.55, cx + s * 0.18, b - s * 0.55, cx + s * 0.14, y - s * 0.8, cx - s * 0.14, y - s * 0.8], dark); } break;
      case 'rocktemple':
        poly([x - s * 1.2, b, x - s * 1.1, y - s * 1.0, x + s * 1.1, y - s * 1.1, x + s * 1.2, b], '#c98b52');
        for (let i = 0; i < 4; i++) { const cx = x - s * 0.75 + i * s * 0.5; poly([cx - s * 0.17, b, cx + s * 0.17, b, cx + s * 0.13, y - s * 0.6, cx - s * 0.13, y - s * 0.6], light, 0.9); }
        break;
      case 'lighthouse':
        poly([x - s * 0.4, b, x + s * 0.4, b, x + s * 0.32, y - s * 0.1, x - s * 0.32, y - s * 0.1], light);
        poly([x - s * 0.24, y - s * 0.1, x + s * 0.24, y - s * 0.1, x + s * 0.18, y - s * 0.75, x - s * 0.18, y - s * 0.75], dark);
        { const f = s * (0.32 + Math.sin(T * 10) * 0.06); const gr = g.createRadialGradient(x, y - s * 0.9, 0, x, y - s * 0.9, f * 2.5); gr.addColorStop(0, 'rgba(255,220,120,0.95)'); gr.addColorStop(1, 'rgba(255,160,60,0)'); g.fillStyle = gr; g.beginPath(); g.arc(x, y - s * 0.9, f * 2.5, 0, 7); g.fill(); } break;
      case 'city':
        g.strokeStyle = '#f4eedf'; g.lineWidth = 1.6; g.strokeRect(x - s * 1.15, b - s * 1.05, s * 2.3, s * 1.1);
        for (let i = 0; i < 5; i++) { const hx = x - s * 0.95 + i * s * 0.42, hh = s * (0.35 + (i * 37 % 5) * 0.1); poly([hx, b - 1, hx + s * 0.34, b - 1, hx + s * 0.34, b - 1 - hh, hx, b - 1 - hh], i % 2 ? light : dark, 0.9); } break;
      case 'valley': // kral mezarları: kaya içinde bir dizi kapı ve üstte taç
        poly([x - s * 1.25, b, x - s * 1.0, y - s * 0.55, x - s * 0.2, y - s * 0.8, x + s * 0.6, y - s * 0.6, x + s * 1.25, b], '#c98b52');
        for (let i = 0; i < 4; i++) poly([x - s * 0.82 + i * s * 0.48, b - 1, x - s * 0.58 + i * s * 0.48, b - 1, x - s * 0.6 + i * s * 0.48, b - s * 0.42, x - s * 0.8 + i * s * 0.48, b - s * 0.42], '#2a1a0e', 0.6);
        poly([x - s * 0.22, y - s * 0.78, x + s * 0.22, y - s * 0.78, x + s * 0.2, y - s * 1.0, x + s * 0.06, y - s * 1.5, x - s * 0.06, y - s * 1.5, x - s * 0.2, y - s * 1.0], '#f4eedf', 1);
        g.fillStyle = '#e8b923'; g.beginPath(); g.arc(x, y - s * 1.55, s * 0.09, 0, 7); g.fill(); break;
      case 'mosque': // kubbe ve minare
        poly([x - s, b, x + s * 0.55, b, x + s * 0.55, b - s * 0.5, x - s, b - s * 0.5], light);
        g.beginPath(); g.arc(x - s * 0.22, b - s * 0.5, s * 0.5, Math.PI, 0); g.closePath(); g.fillStyle = dark; g.fill(); g.strokeStyle = OUT; g.lineWidth = 1; g.stroke();
        poly([x + s * 0.68, b, x + s * 0.92, b, x + s * 0.88, y - s * 0.95, x + s * 0.72, y - s * 0.95], light);
        poly([x + s * 0.66, y - s * 0.95, x + s * 0.94, y - s * 0.95, x + s * 0.8, y - s * 1.35], dark); break;
      case 'church':
        poly([x - s * 0.9, b, x + s * 0.9, b, x + s * 0.9, b - s * 0.6, x - s * 0.9, b - s * 0.6], light);
        g.beginPath(); g.arc(x, b - s * 0.6, s * 0.42, Math.PI, 0); g.closePath(); g.fillStyle = dark; g.fill(); g.strokeStyle = OUT; g.lineWidth = 1; g.stroke();
        g.strokeStyle = OUT; g.lineWidth = 1.4; g.beginPath(); g.moveTo(x, b - s * 1.02); g.lineTo(x, b - s * 1.45); g.moveTo(x - s * 0.16, b - s * 1.28); g.lineTo(x + s * 0.16, b - s * 1.28); g.stroke(); break;
      case 'citadel':
        poly([x - s * 1.1, b, x + s * 1.1, b, x + s * 1.1, b - s * 0.6, x - s * 1.1, b - s * 0.6], light);
        for (const tx of [-0.95, 0, 0.95]) poly([x + (tx - 0.22) * s, b, x + (tx + 0.22) * s, b, x + (tx + 0.22) * s, b - s * 1.0, x + (tx - 0.22) * s, b - s * 1.0], dark); break;
      case 'dam':
        poly([x - s * 1.3, b, x + s * 1.3, b, x + s * 1.0, b - s * 0.55, x - s * 1.0, b - s * 0.55], '#b8a585');
        g.fillStyle = '#3f8fc0'; g.fillRect(x - s * 1.3, b - s * 0.3, s * 0.3, s * 0.3); break;
      case 'museum':
        poly([x - s * 1.1, b, x + s * 1.1, b, x + s * 0.9, b - s * 0.85, x - s * 1.1, b - s * 0.45], light);
        g.fillStyle = 'rgba(80,140,200,0.8)'; g.fillRect(x - s * 0.2, b - s * 0.45, s * 0.4, s * 0.45); break;
      case 'tower':
        poly([x - s * 0.22, b, x + s * 0.22, b, x + s * 0.14, y - s * 0.9, x - s * 0.14, y - s * 0.9], light);
        poly([x - s * 0.36, y - s * 0.9, x + s * 0.36, y - s * 0.9, x + s * 0.26, y - s * 1.15, x - s * 0.26, y - s * 1.15], dark); break;
      case 'modcity':
        for (let i = 0; i < 5; i++) { const hx = x - s * 1.05 + i * s * 0.44, hh = s * (0.5 + (i * 37 % 5) * 0.2); poly([hx, b, hx + s * 0.36, b, hx + s * 0.36, b - hh, hx, b - hh], i % 2 ? light : dark); } break;
      case 'pagoda': // kat kat kıvrık çatı
        for (let i = 0; i < 3; i++) { const w = s * (0.95 - i * 0.24), yy = b - i * s * 0.55; poly([x - w * 0.5, yy, x + w * 0.5, yy, x + w * 0.5, yy - s * 0.3, x - w * 0.5, yy - s * 0.3], '#c0533e'); poly([x - w, yy - s * 0.26, x + w, yy - s * 0.26, x + w * 0.5, yy - s * 0.55, x - w * 0.5, yy - s * 0.55], dark); } break;
      case 'stupa':
        poly([x - s, b, x + s, b, x + s * 0.9, b - s * 0.3, x - s * 0.9, b - s * 0.3], dark);
        g.beginPath(); g.moveTo(x - s * 0.75, b - s * 0.3); g.arc(x, b - s * 0.3, s * 0.75, Math.PI, 0); g.closePath(); g.fillStyle = light; g.fill(); g.strokeStyle = OUT; g.lineWidth = 1.2; g.stroke();
        poly([x - s * 0.1, b - s * 1.05, x + s * 0.1, b - s * 1.05, x, b - s * 1.55], dark, 1); break;
      case 'ziggurat':
        for (let i = 0; i < 3; i++) { const w = s * (1 - i * 0.28), yy = b - i * s * 0.45; poly([x - w, yy, x + w, yy, x + w * 0.92, yy - s * 0.45, x - w * 0.92, yy - s * 0.45], i % 2 ? dark : light); } break;
      case 'sahel':
        poly([x - s, b, x + s, b, x + s, b - s * 0.7, x - s, b - s * 0.7], '#c89460');
        for (const cx of [x - s * 0.6, x, x + s * 0.6]) poly([cx - s * 0.18, b - s * 0.7, cx + s * 0.18, b - s * 0.7, cx + s * 0.12, b - s * 1.3, cx - s * 0.12, b - s * 1.3], '#b07a48', 1); break;
      case 'prang':
        poly([x - s, b, x + s, b, x + s * 0.9, b - s * 0.35, x - s * 0.9, b - s * 0.35], dark);
        for (const [cx, h] of [[x - s * 0.55, 0.8], [x + s * 0.55, 0.8], [x, 1.25]]) poly([cx - s * 0.2, b - s * 0.35, cx + s * 0.2, b - s * 0.35, cx, b - s * (0.35 + h)], light, 1); break;
      case 'sur':
        poly([x - s * 1.2, b, x - s * 1.2, b - s * 0.5, x - s * 0.3, b - s * 0.9, x + s * 0.5, b - s * 0.6, x + s * 1.2, b - s * 0.8, x + s * 1.2, b], light);
        poly([x - s * 0.5, b - s * 0.75, x - s * 0.1, b - s * 0.75, x - s * 0.1, b - s * 1.25, x - s * 0.5, b - s * 1.25], dark, 1); break;
      case 'heykel':
        poly([x - s * 0.5, b, x + s * 0.5, b, x + s * 0.3, b - s * 0.35, x - s * 0.3, b - s * 0.35], dark);
        poly([x - s * 0.25, b - s * 0.35, x + s * 0.25, b - s * 0.35, x + s * 0.15, y - s * 0.9, x - s * 0.15, y - s * 0.9], light, 1); break;
      case 'opera':
        poly([x - s, b, x + s, b, x + s, b - s * 0.2, x - s, b - s * 0.2], dark);
        for (const [cx, h] of [[x - s * 0.5, 0.8], [x, 1.2], [x + s * 0.5, 0.7]]) poly([cx - s * 0.3, b - s * 0.2, cx + s * 0.25, b - s * (0.2 + h), cx + s * 0.2, b - s * 0.2], '#f6f4ee', 1); break;
      // ---- ünlü yapılar (data/yapilar) için ek simgeler ----
      case 'kabe': // siyah küp, altın kuşak
        poly([x - s * 0.75, b, x + s * 0.3, b, x + s * 0.3, b - s * 1.0, x - s * 0.75, b - s * 1.0], '#1d1b19', 1);
        poly([x + s * 0.3, b, x + s * 0.75, b - s * 0.22, x + s * 0.75, b - s * 1.2, x + s * 0.3, b - s * 1.0], '#34302b', 1);
        poly([x - s * 0.75, b - s * 1.0, x + s * 0.3, b - s * 1.0, x + s * 0.75, b - s * 1.2, x - s * 0.3, b - s * 1.2], '#4a453e', 1);
        g.strokeStyle = '#e0b23c'; g.lineWidth = Math.max(1.2, s * 0.13); g.beginPath(); g.moveTo(x - s * 0.72, b - s * 0.74); g.lineTo(x + s * 0.3, b - s * 0.74); g.lineTo(x + s * 0.73, b - s * 0.93); g.stroke(); break;
      case 'kopru':
        g.lineCap = 'round'; g.strokeStyle = OUT; g.lineWidth = s * 0.3; g.beginPath(); g.moveTo(x - s * 1.2, b); g.quadraticCurveTo(x, b - s * 1.25, x + s * 1.2, b); g.stroke();
        g.strokeStyle = light; g.lineWidth = s * 0.18; g.stroke();
        poly([x - s * 1.35, b - s * 0.62, x + s * 1.35, b - s * 0.62, x + s * 1.35, b - s * 0.42, x - s * 1.35, b - s * 0.42], dark, 1); break;
      case 'eyfel':
        poly([x - s * 0.8, b, x - s * 0.12, y - s * 1.3, x, y - s * 1.55, x + s * 0.12, y - s * 1.3, x + s * 0.8, b, x + s * 0.4, b, x, b - s * 0.45, x - s * 0.4, b], dark, 1);
        g.fillStyle = light; g.fillRect(x - s * 0.48, b - s * 0.62, s * 0.96, s * 0.12); g.fillRect(x - s * 0.26, y - s * 0.35, s * 0.52, s * 0.1); break;
      case 'gokdelen':
        poly([x - s * 0.32, b, x, b, x, y - s * 1.55, x - s * 0.12, y - s * 1.2, x - s * 0.24, y - s * 0.4], light);
        poly([x, b, x + s * 0.32, b, x + s * 0.24, y - s * 0.4, x + s * 0.12, y - s * 1.2, x, y - s * 1.55], dark); break;
      case 'tac': // kaide, soğan kubbe ve dört minare
        poly([x - s * 1.05, b, x + s * 1.05, b, x + s * 1.05, b - s * 0.2, x - s * 1.05, b - s * 0.2], dark, 1);
        poly([x - s * 0.55, b - s * 0.2, x + s * 0.55, b - s * 0.2, x + s * 0.55, b - s * 0.72, x - s * 0.55, b - s * 0.72], light);
        g.beginPath(); g.moveTo(x - s * 0.42, b - s * 0.72); g.bezierCurveTo(x - s * 0.6, b - s * 1.25, x - s * 0.08, b - s * 1.3, x, b - s * 1.6); g.bezierCurveTo(x + s * 0.08, b - s * 1.3, x + s * 0.6, b - s * 1.25, x + s * 0.42, b - s * 0.72); g.closePath();
        g.fillStyle = light; g.fill(); g.strokeStyle = OUT; g.lineWidth = 1; g.stroke();
        for (const mx of [-0.88, 0.88]) poly([x + (mx - 0.07) * s, b - s * 0.2, x + (mx + 0.07) * s, b - s * 0.2, x + (mx + 0.05) * s, b - s * 1.1, x + (mx - 0.05) * s, b - s * 1.1], light, 0.8); break;
      case 'turbe': // kare gövde, kasnak ve kubbe
        poly([x - s * 0.8, b, x + s * 0.8, b, x + s * 0.8, b - s * 0.6, x - s * 0.8, b - s * 0.6], light);
        poly([x - s * 0.5, b - s * 0.6, x + s * 0.5, b - s * 0.6, x + s * 0.5, b - s * 0.78, x - s * 0.5, b - s * 0.78], dark, 1);
        g.beginPath(); g.arc(x, b - s * 0.78, s * 0.5, Math.PI, 0); g.closePath(); g.fillStyle = dark; g.fill(); g.strokeStyle = OUT; g.lineWidth = 1; g.stroke();
        g.fillStyle = 'rgba(42,26,14,0.6)'; g.fillRect(x - s * 0.14, b - s * 0.42, s * 0.28, s * 0.42); break;
      case 'kolonad': // basamak, sütunlar ve alınlık
        poly([x - s * 1.1, b, x + s * 1.1, b, x + s * 1.1, b - s * 0.16, x - s * 1.1, b - s * 0.16], dark, 1);
        g.fillStyle = light; for (let i = 0; i < 5; i++) g.fillRect(x - s * 0.9 + i * s * 0.42, b - s * 0.8, s * 0.16, s * 0.64);
        poly([x - s * 1.05, b - s * 0.8, x + s * 1.05, b - s * 0.8, x + s * 1.05, b - s * 0.95, x - s * 1.05, b - s * 0.95], dark, 1);
        poly([x - s * 1.1, b - s * 0.95, x + s * 1.1, b - s * 0.95, x, b - s * 1.35], light, 1); break;
      case 'saray': // geniş gövde, orta blok ve kubbe
        poly([x - s * 1.25, b, x + s * 1.25, b, x + s * 1.25, b - s * 0.5, x - s * 1.25, b - s * 0.5], light);
        poly([x - s * 0.4, b, x + s * 0.4, b, x + s * 0.4, b - s * 0.8, x - s * 0.4, b - s * 0.8], dark);
        g.beginPath(); g.arc(x, b - s * 0.8, s * 0.32, Math.PI, 0); g.closePath(); g.fillStyle = dark; g.fill(); g.strokeStyle = OUT; g.lineWidth = 1; g.stroke();
        g.fillStyle = 'rgba(42,26,14,0.5)'; for (const wx of [-1.0, -0.7, 0.62, 0.92]) g.fillRect(x + wx * s, b - s * 0.36, s * 0.13, s * 0.2); break;
      case 'arena': // stadyum / amfitiyatro
        g.beginPath(); g.ellipse(x, b - s * 0.45, s * 1.15, s * 0.6, 0, 0, 7); g.fillStyle = light; g.fill(); g.strokeStyle = OUT; g.lineWidth = 1.2; g.stroke();
        g.beginPath(); g.ellipse(x, b - s * 0.5, s * 0.62, s * 0.28, 0, 0, 7); g.fillStyle = dark; g.fill(); g.stroke(); break;
      case 'kemer': // zafer takı / anıt kapı
        poly([x - s * 0.95, b, x - s * 0.3, b, x - s * 0.3, b - s * 0.55, x + s * 0.3, b - s * 0.55, x + s * 0.3, b, x + s * 0.95, b, x + s * 0.95, b - s * 1.2, x - s * 0.95, b - s * 1.2], light);
        g.beginPath(); g.arc(x, b - s * 0.55, s * 0.3, Math.PI, 0); g.fillStyle = 'rgba(42,26,14,0.55)'; g.fill();
        poly([x - s * 1.05, b - s * 1.2, x + s * 1.05, b - s * 1.2, x + s * 1.05, b - s * 1.4, x - s * 1.05, b - s * 1.4], dark, 1); break;
      case 'torii': // kırmızı Şinto kapısı
        g.fillStyle = '#d9472f'; g.strokeStyle = OUT; g.lineWidth = 1;
        for (const px of [-0.6, 0.6]) { g.fillRect(x + px * s - s * 0.1, b - s * 1.1, s * 0.2, s * 1.1); g.strokeRect(x + px * s - s * 0.1, b - s * 1.1, s * 0.2, s * 1.1); }
        poly([x - s * 1.1, b - s * 1.35, x + s * 1.1, b - s * 1.35, x + s * 0.95, b - s * 1.12, x - s * 0.95, b - s * 1.12], '#d9472f', 1);
        poly([x - s * 0.85, b - s * 0.92, x + s * 0.85, b - s * 0.92, x + s * 0.85, b - s * 0.8, x - s * 0.85, b - s * 0.8], '#d9472f', 1); break;
      case 'anit': // kaideli büyük anıt bloğu
        poly([x - s * 1.0, b, x + s * 1.0, b, x + s * 0.85, b - s * 0.3, x - s * 0.85, b - s * 0.3], dark, 1);
        poly([x - s * 0.55, b - s * 0.3, x + s * 0.55, b - s * 0.3, x + s * 0.45, b - s * 1.3, x - s * 0.45, b - s * 1.3], light); break;
      default: g.beginPath(); g.arc(x, y, s * 0.6, 0, 7); g.fillStyle = light; g.fill(); g.strokeStyle = OUT; g.stroke();
    }
  }
  function icon(it, x, y, s) {
    const hov = hover && hover.it === it;
    if (hov) s *= 1.18;
    // Simgeyi haritadan ayıran sıcak ışık halesi ve yer gölgesi; çizgiler simge büyüdükçe kalınlaşır, rengi yumuşak kahverengidir.
    // Ünlü yapılarda (it.lm) hale hafifçe nefes alır: göz ilk onlara gider.
    { const nb = it.lm ? 1 + Math.sin(T * 1.7 + x * 0.05) * 0.1 : 1, hr = s * 1.9 * nb, hl = g.createRadialGradient(x, y, s * 0.3, x, y, hr);
      hl.addColorStop(0, it.st === 'harabe' ? 'rgba(255,244,214,0.22)' : hov ? 'rgba(255,236,170,0.75)' : 'rgba(255,238,190,0.5)'); hl.addColorStop(1, 'rgba(255,238,190,0)');
      g.fillStyle = hl; g.beginPath(); g.arc(x, y, hr, 0, 7); g.fill(); }
    sh(x, y, s);
    polyRenk = 'rgba(70,40,16,0.92)'; polyKal = clamp(s / 7.5, 1, 1.9);
    try { iconGovde(it, x, y, s); } finally { polyRenk = OUT; polyKal = 1; }
  }
  function iconGovde(it, x, y, s) {
    if (it.st === 'harabe') { g.globalAlpha = 0.65; iconShape(it.type, x, y, s, '#c9bfae', '#a59a88'); g.globalAlpha = 1; return; }
    if (it.st === 'ins') {
      // inşaat: önce soluk taslak, sonra ilerlemeye göre aşağıdan yukarı dolan yapı, iskele ve vinç
      g.globalAlpha = 0.35; iconShape(it.type, x, y, s, 'rgba(255,240,210,0.5)', 'rgba(220,200,160,0.5)'); g.globalAlpha = 1;
      const top = y - s * 1.1, bot = y + s * 0.85, cut = bot - (bot - top) * clamp(it.p || 0.05, 0.08, 1);
      g.save(); g.beginPath(); g.rect(x - s * 2, cut, s * 4, bot - cut + 4); g.clip(); iconShape(it.type, x, y, s, '#f0c674', '#c99a4a'); g.restore();
      g.strokeStyle = `rgba(255,150,40,${0.45 + 0.35 * Math.sin(T * 4)})`; g.lineWidth = 1.5; g.beginPath(); g.arc(x, y, s * 1.6, 0, 7); g.stroke();
      return;
    }
    // güneş alan yüz açık ve sıcak, gölge yüz belirgin koyu: küçük boyda da hacim okunur
    iconShape(it.type, x, y, s, it.type === 'true' || it.type === 'bent' ? '#fff0c4' : '#ffe3a6', it.type === 'true' || it.type === 'bent' ? '#d9a95a' : '#cf8f48');
  }
  // olayların canlı efektleri: savaşta yükselen duman ve alevler, yangında alev, yanardağda kül bulutu,
  // depremde yayılan halkalar, dalgada su halkaları, kuraklıkta sıcak titreşimi, salgında soluk ışıma
  function puff(x, y, r, col, a) { if (!(r > 0) || !(a > 0)) return; g.fillStyle = col.replace('A', a.toFixed(3)); g.beginPath(); g.arc(x, y, r, 0, 7); g.fill(); }
  function evFx(e, x, y, s, now) {
    const k = now ? 1 : 0.6, seed = Math.abs(e.y * 0.37); // MS yılları eksi: kalan da eksi çıkıp yarıçapı bozmasın
    if (e.tur === 'savas') {
      for (let i = 0; i < 7; i++) { const ph = (T * 0.35 + i / 7 + seed) % 1; puff(x + Math.sin(i * 2.1 + T * 0.6) * s * 0.5 + ph * s * 0.9, y - s * 0.4 - ph * s * 3.2, s * (0.35 + ph * 0.9), 'rgba(60,55,50,A)', 0.55 * (1 - ph) * k); }
      for (let i = 0; i < 5; i++) { const ph = (T * 1.6 + i / 5 + seed) % 1; puff(x + (rnd(i) - 0.5) * s * 1.6, y + s * 0.55 - ph * s * 1.1, s * 0.22 * (1 - ph) + 0.6, i % 2 ? 'rgba(255,170,40,A)' : 'rgba(230,70,30,A)', 0.9 * (1 - ph) * k); }
    } else if (e.tur === 'deniz') { // top dumanı ve su sıçramaları
      for (let i = 0; i < 5; i++) { const ph = (T * 0.4 + i / 5 + seed) % 1; puff(x + Math.sin(i * 2.3 + T * 0.5) * s * 0.6 + ph * s * 0.7, y - s * 0.3 - ph * s * 2.4, s * (0.3 + ph * 0.7), 'rgba(90,90,95,A)', 0.5 * (1 - ph) * k); }
      for (let i = 0; i < 4; i++) { const ph = (T * 1.3 + i / 4 + seed) % 1; puff(x + (rnd(i + 7) - 0.5) * s * 3, y + s * 0.3 - Math.sin(ph * Math.PI) * s * 1.1, s * 0.2 + 0.5, 'rgba(200,235,255,A)', 0.85 * (1 - ph) * k); }
    } else if (e.tur === 'afet') {
      switch (e.alt) {
        case 'yangin':
          for (let i = 0; i < 6; i++) { const ph = (T * 0.4 + i / 6 + seed) % 1; puff(x + ph * s * 0.6, y - s * 0.5 - ph * s * 2.6, s * (0.3 + ph * 0.8), 'rgba(80,70,60,A)', 0.45 * (1 - ph) * k); }
          for (let i = 0; i < 8; i++) { const ph = (T * 2 + i / 8 + seed) % 1; puff(x + (rnd(i + 3) - 0.5) * s * 1.4, y + s * 0.4 - ph * s * 1.4, s * 0.28 * (1 - ph) + 0.6, i % 3 ? 'rgba(255,190,60,A)' : 'rgba(240,80,30,A)', (1 - ph) * k); }
          break;
        case 'yanardag':
          for (let i = 0; i < 9; i++) { const ph = (T * 0.25 + i / 9 + seed) % 1; puff(x + Math.sin(i * 1.7) * ph * s * 1.6 + ph * s, y - s * 0.6 - ph * s * 4, s * (0.4 + ph * 1.4), 'rgba(70,65,65,A)', 0.6 * (1 - ph) * k); }
          { const gl = g.createRadialGradient(x, y, 0, x, y, s * 2); gl.addColorStop(0, `rgba(255,90,30,${0.45 * k * (0.7 + 0.3 * Math.sin(T * 6))})`); gl.addColorStop(1, 'rgba(255,90,30,0)'); g.fillStyle = gl; g.beginPath(); g.arc(x, y, s * 2, 0, 7); g.fill(); }
          break;
        case 'deprem':
          for (let i = 0; i < 3; i++) { const ph = (T * 0.8 + i / 3) % 1; g.strokeStyle = `rgba(255,170,90,${0.7 * (1 - ph) * k})`; g.lineWidth = 2; g.beginPath(); g.arc(x, y, s * (1 + ph * 2.6), 0, 7); g.stroke(); }
          break;
        case 'tsunami': case 'sel':
          for (let i = 0; i < 3; i++) { const ph = (T * 0.6 + i / 3) % 1; g.strokeStyle = `rgba(120,200,255,${0.8 * (1 - ph) * k})`; g.lineWidth = 2.5; g.beginPath(); g.ellipse(x, y, s * (1 + ph * 2.4), s * (0.5 + ph * 1.2), 0, 0, 7); g.stroke(); }
          break;
        case 'kuraklik':
          { const gl = g.createRadialGradient(x, y, 0, x, y, s * 2.6); gl.addColorStop(0, `rgba(255,170,40,${0.4 * k * (0.75 + 0.25 * Math.sin(T * 2.5))})`); gl.addColorStop(1, 'rgba(255,170,40,0)'); g.fillStyle = gl; g.beginPath(); g.arc(x, y, s * 2.6, 0, 7); g.fill(); }
          g.strokeStyle = `rgba(255,220,150,${0.5 * k})`; g.lineWidth = 1.2; for (let i = 0; i < 3; i++) { g.beginPath(); for (let j = 0; j <= 10; j++) { const xx = x - s + j * s * 0.2, yy = y - s * (1.4 + i * 0.4) + Math.sin(j + T * 5 + i) * 1.5; j ? g.lineTo(xx, yy) : g.moveTo(xx, yy); } g.stroke(); }
          break;
        case 'salgin':
          { const gl = g.createRadialGradient(x, y, 0, x, y, s * 2.4); gl.addColorStop(0, `rgba(150,220,90,${0.35 * k * (0.6 + 0.4 * Math.sin(T * 1.8))})`); gl.addColorStop(1, 'rgba(150,220,90,0)'); g.fillStyle = gl; g.beginPath(); g.arc(x, y, s * 2.4, 0, 7); g.fill(); }
          break;
      }
    } else {
      const gl = g.createRadialGradient(x, y, s * 0.6, x, y, s * 2); const c = e.tur === 'olay' ? '170,120,255' : '255,214,102';
      gl.addColorStop(0, `rgba(${c},${0.35 * (0.6 + 0.4 * Math.sin(T * 2 + seed))})`); gl.addColorStop(1, `rgba(${c},0)`); g.fillStyle = gl; g.beginPath(); g.arc(x, y, s * 2, 0, 7); g.fill();
      if (e.tur === 'olay') for (let i = 0; i < 4; i++) { const a = T * 0.8 + i * Math.PI / 2; puff(x + Math.cos(a) * s * 1.5, y + Math.sin(a) * s * 1.5, 1.4, 'rgba(255,240,200,A)', 0.8); }
    }
  }
  // olay simgeleri: çapraz kılıçlar (savaş), dalga, çatlak, alev, yanardağ, güneş (kuraklık), salgın, mühürlü belge (antlaşma)
  // Olay işaretleri: arka plansız, sitenin Noto resimleriyle (savaş, deniz savaşı, antlaşma, olay ve afet türleri)
  const EV_SIMGE = { savas: '⚔️', deniz: '⛵', antlasma: '📜', olay: '🏛️' };
  const AFET_SIMGE = { deprem: '🏚️', tsunami: '🌊', sel: '🌊', yangin: '🔥', yanardag: '🌋', kuraklik: '☀️', salgin: '🦠' };
  function evIcon(e, x, y, s) { simge(EV_SIMGE[e.tur] || AFET_SIMGE[e.alt] || '⚠️', x, y, s * 1.05); }

  // Gece modu: gündüz haritası için seçilmiş "koyu yazı + açık çerçeve" çiftleri karanlık zeminde parlak bir etiket gibi
  // durur; çerçeve koyu laciverte, yazı aynı tonun açık hâline çevrilir. Zaten koyu çerçeveli yazılara dokunulmaz.
  let geceAktif = false; const _geceYazi = new Map();
  function geceYazi(col, halo) {
    const k = col + '|' + halo; let v = _geceYazi.get(k); if (v) return v;
    v = [col, halo];
    const m = /rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)/.exec(halo);
    if (m && (+m[1] * 0.3 + +m[2] * 0.59 + +m[3] * 0.11) > 150) {
      let r = 255, gr = 255, b = 255;
      if (/^#[0-9a-f]{6}$/i.test(col)) { const n = parseInt(col.slice(1), 16); r = n >> 16; gr = (n >> 8) & 255; b = n & 255; }
      else { const c = /rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)/.exec(col); if (c) { r = +c[1]; gr = +c[2]; b = +c[3]; } }
      const ac = x => Math.round(x + (255 - x) * 0.66);
      v = [`rgb(${ac(r)},${ac(gr)},${ac(b)})`, 'rgba(5,12,26,0.82)'];
    }
    if (_geceYazi.size > 400) _geceYazi.clear();
    _geceYazi.set(k, v); return v;
  }
  // gece modunda şehir ışığı: ılık sarı bir ışık lekesi (bir kez üretilir)
  let _sehirIsik = null;
  function sehirIsik() {
    if (_sehirIsik) return _sehirIsik;
    const c = document.createElement('canvas'); c.width = c.height = 64; const x = c.getContext('2d');
    const gr = x.createRadialGradient(32, 32, 0, 32, 32, 32); gr.addColorStop(0, 'rgba(255,240,190,1)'); gr.addColorStop(0.16, 'rgba(255,214,120,0.75)'); gr.addColorStop(0.45, 'rgba(255,170,60,0.22)'); gr.addColorStop(1, 'rgba(255,150,40,0)');
    x.fillStyle = gr; x.fillRect(0, 0, 64, 64);
    return (_sehirIsik = c);
  }
  function star(x, y, r) { g.beginPath(); for (let i = 0; i < 10; i++) { const a = -Math.PI / 2 + i * Math.PI / 5, rr = i % 2 ? r * 0.45 : r; g.lineTo(x + Math.cos(a) * rr, y + Math.sin(a) * rr); } g.closePath(); }
  function text(x, y, t, o = {}) {
    g.font = `${o.it ? 'italic ' : ''}${o.w || 600} ${o.size || 12}px ${o.serif ? 'Literata, Georgia, serif' : 'Atkinson Hyperlegible Next, system-ui, sans-serif'}`;
    g.textAlign = o.align || 'center'; g.textBaseline = 'middle';
    if (o.ls) { try { g.letterSpacing = o.ls + 'px'; } catch (e) { /* eski tarayıcı */ } }
    let yCol = o.col || '#fff', hCol = o.haloCol || 'rgba(20,14,8,0.75)';
    if (geceAktif) [yCol, hCol] = geceYazi(yCol, hCol);
    g.lineWidth = o.halo ?? 3; g.strokeStyle = hCol; g.lineJoin = 'round';
    const pr = yaziParcala(t);
    if (pr) {
      // içinde emoji olan yazı: parçalar soldan sağa dizilir; emojiler sitenin kendi resmiyle çizilir
      const sz = o.size || 12, ew = sz * 1.3, gen = pr.map(q => q.e ? ew : g.measureText(q.m).width), top = gen.reduce((a, b) => a + b, 0);
      let cx = g.textAlign === 'center' ? x - top / 2 : g.textAlign === 'right' ? x - top : x; g.textAlign = 'left';
      for (let i = 0; i < pr.length; i++) {
        if (pr[i].e) simge(pr[i].e, cx + ew / 2, y, sz * 0.54);
        else { g.strokeText(pr[i].m, cx, y); g.fillStyle = yCol; g.fillText(pr[i].m, cx, y); }
        cx += gen[i];
      }
    } else { g.strokeText(t, x, y); g.fillStyle = yCol; g.fillText(t, x, y); }
    try { g.letterSpacing = '0px'; } catch (e) { /* */ }
    g.textBaseline = 'alphabetic';
  }
  // Yazıyı [{ m: 'yazı' } | { e: 'emoji' }] parçalarına ayırır; içinde site resmi olan emoji yoksa (ya da resim sayfası
  // henüz yüklenmediyse) null döner ve yazı olduğu gibi çizilir.
  const _yzParca = new Map(), YZ_EMO = /[\p{Extended_Pictographic}\p{Regional_Indicator}]/u;
  function yaziParcala(t) {
    const D = window.SIMGE_DIZIN; if (!D || !_smSeg || typeof t !== 'string') return null;
    if (!_smTam) { if (YZ_EMO.test(t)) simgeSayfa(); return null; }
    let p = _yzParca.get(t); if (p !== undefined) return p;
    p = null;
    if (YZ_EMO.test(t)) {
      const liste = []; let yazi = '', var1 = false;
      for (const { segment } of _smSeg.segment(t)) {
        if (D.s[segment.replace(/️/g, '')] !== undefined) { if (yazi) { liste.push({ m: yazi }); yazi = ''; } liste.push({ e: segment }); var1 = true; }
        else yazi += segment;
      }
      if (yazi) liste.push({ m: yazi });
      if (var1) p = liste;
    }
    if (_yzParca.size > 3000) _yzParca.clear();
    _yzParca.set(t, p); return p;
  }
  // ipucu kutusu gibi düz (kenarlıksız) yazılar için: emojileri site resmiyle, sola dayalı çizer
  function duzYazi(t, x, y, sz) {
    const pr = yaziParcala(t); if (!pr) { g.fillText(t, x, y); return; }
    const ew = sz * 1.3; let cx = x;
    for (const q of pr) { if (q.e) { simge(q.e, cx + ew / 2, y - sz * 0.36, sz * 0.54); cx += ew; } else { g.fillText(q.m, cx, y); cx += g.measureText(q.m).width; } }
  }

  // Etiket kuyruğu: yazılar hemen çizilmez; kare sonunda önem sırasına göre, üst üste binmeyecek şekilde yerleştirilir.
  const LQ = [], OBS = [];
  function lab(pri, x, y, t, o = {}) { LQ.push({ pri, x, y, t, o }); }
  function obstacle(x0, y0, x1, y1) { OBS.push([x0, y0, x1 - x0, y1 - y0]); }
  function flushLabels() {
    const hit = (b, q) => !(b[0] > q[0] + q[2] || b[0] + b[2] < q[0] || b[1] > q[1] + q[3] || b[1] + b[3] < q[1]);
    LQ.sort((a, b) => b.pri - a.pri);
    const placed = [], ga = g.globalAlpha;
    for (const L of LQ) {
      const o = L.o, sz = o.size || 12;
      g.font = `${o.it ? 'italic ' : ''}${o.w || 600} ${sz}px ${o.serif ? 'Literata, Georgia, serif' : 'Atkinson Hyperlegible Next, system-ui, sans-serif'}`;
      const tw = g.measureText(L.t).width + (o.ls || 0) * L.t.length, pad = 3;
      const al = o.align || 'center', x0 = al === 'left' ? L.x : al === 'right' ? L.x - tw : L.x - tw / 2;
      // bilgi düğmesi (ⓘ) de yazının kutusuna dahil: yanındaki yazıyla çakışmasın
      const ek = o.bilgi ? 11 + Math.max(6, sz * 0.55) + 2 : 0;
      // o.kay: yer yoksa biraz aşağıda ya da yukarıda dene (devlet adı başkent yazısının üstüne denk gelince kaybolmasın)
      let b = null;
      for (const dy of o.kay ? [0, sz * 1.9, -sz * 1.9] : [0]) {
        const c = [x0 - pad, L.y + dy - sz / 2 - pad, tw + pad * 2 + ek, sz + pad * 2];
        if (placed.some(q => hit(c, q)) || (L.pri < 85 && OBS.some(q => hit(c, q)))) continue;
        b = c; L.y += dy; break;
      }
      if (!b) continue;
      g.globalAlpha = ga * (o.a ?? 1);
      placed.push(b); text(L.x, L.y, L.t, o);
      if (o.bilgi) { // devlet adının yanında bilgi düğmesi
        const bx = x0 + tw + 11, by = L.y, br = Math.max(6, sz * 0.55);
        g.fillStyle = 'rgba(255,250,240,0.92)'; g.strokeStyle = 'rgba(80,40,15,0.75)'; g.lineWidth = 1.4; g.beginPath(); g.arc(bx, by, br, 0, 7); g.fill(); g.stroke();
        g.fillStyle = '#6a3a14'; g.font = `700 ${Math.round(br * 1.45)}px Literata, Georgia, serif`; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText('i', bx, by + 0.5); g.textBaseline = 'alphabetic';
        hits.push({ kind: 'devlet', k: o.bilgi, x0: bx - br - 3, x1: bx + br + 3, y0: by - br - 3, y1: by + br + 3 });
      }
    }
    g.globalAlpha = ga;
    LQ.length = 0; OBS.length = 0;
  }

  // ---------- çizim ----------
  // items: [{id, ad, type, ll, st, p}], cities: [{ad, ll, cap, tur}]
  function draw(ctx, w, h, dpr, dt, Y, items, cities) {
    if (!w || !h || !ctx || !ctx.canvas || !ctx.canvas.width || !ctx.canvas.height) return;
    g = ctx; W = w; H = h; T += dt; idle += dt; Ycur = Y; DPRc = dpr || 1;
    g.setTransform(dpr, 0, 0, dpr, 0, 0);
    // hareket: hedef, eylemsizlik (düşük hızda hemen durur ki taban önbelleği kilitlensin)
    // açılış sahnesinde hedefe yavaş başlayıp hızlanarak gidilir; hedefe çok yaklaşınca olağan hıza dönülür
    if (acilis) {
      // Açılış jeneriği: dünya çok uzakta küçük bir nokta olarak başlar; önce yavaş, sonra hızlanarak yaklaşır ve
      // yavaşlayıp hafifçe "yaylanarak" yerine oturur. Yakınlık üstel ilerler (göze sabit hızla yaklaşıyor görünür).
      acilis = Math.max(acilis, (performance.now() - acilisT0) / 1000);   // gerçek saate bağlı: yavaş cihazda da aynı sürede biter, arayüzün gelişiyle eşgüdümlü kalır
      const p = Math.min(1, acilis / ACILIS_SURE), h = acilisHedef, E = p * p * p * (p * (p * 6 - 15) + 10), q = clamp((p - 0.82) / 0.18, 0, 1), d = 1 - Math.pow(1 - p, 3);
      view.z = zt = ACILIS_Z0 * Math.pow(h.z / ACILIS_Z0, E) * (1 + 0.03 * Math.sin(Math.PI * q) * (1 - q));
      view.lon = h.lon - 150 * (1 - d); view.lat = h.lat * (0.25 + 0.75 * d);
      acilisP = p; acilisHiz = 30 * p * p * (1 - p) * (1 - p);   // yıldız geçişinin hızı: yaklaşmanın hızıyla aynı eğri
      if (p >= 1) { view.lon = h.lon; view.lat = h.lat; view.z = zt = h.z; acilis = 0; acilisP = 1; acilisHiz = 0; target = null; }
    }
    else if (target) { const e = 1 - Math.exp(-dt * 2.6); let dl = ((target.lon - view.lon + 540) % 360) - 180; view.lon += dl * e; view.lat += (target.lat - view.lat) * e; zt = lerp(zt, target.z, e); if (Math.abs(dl) < 0.03 && Math.abs(target.lat - view.lat) < 0.03 && Math.abs(target.z - zt) < 0.01) { view.lon = target.lon; view.lat = target.lat; zt = target.z; target = null; } }
    else if (Math.hypot(vel[0], vel[1]) > 0.015) { view.lon -= vel[0]; view.lat = clamp(view.lat + vel[1], -80, 80); vel = vel.map(v => v * Math.pow(0.04, dt)); }
    else { vel[0] = 0; vel[1] = 0; }
    if (Math.abs(view.z - zt) < 0.002) view.z = zt;
    else view.z = lerp(view.z, zt, 1 - Math.exp(-dt * 9));
    cl0 = Math.cos(view.lat * D); sl0 = Math.sin(view.lat * D); l0 = view.lon * D; cL0 = Math.cos(l0); sL0 = Math.sin(l0);
    const DM = !!(window.BOLGE && window.BOLGE.dunya), r = R(), cx = W / 2, cy = H / 2, ez = DM ? clamp((view.z - 1.15) / 0.7, 0, 1) : clamp((view.z - 1.8) / 1.4, 0, 1);
    // yazı düzeyi: uzakta yalnızca kıta adları (ka), yaklaşınca devlet ve başkent adları (ua)
    const ka = 1 - clamp((view.z - 2.0) / 0.3, 0, 1), ua = clamp((view.z - 2.3) / 0.3, 0, 1);
    // uzay ve yıldızlar (hafif ön-hesaplanmış koordinatlar)
    const sp = g.createRadialGradient(cx, cy, r * 0.5, cx, cy, Math.max(W, H)); sp.addColorStop(0, uzayRenk(tema.sp[0])); sp.addColorStop(1, uzayRenk(tema.sp[1]));
    g.fillStyle = sp; g.fillRect(0, 0, W, H);
    // yıldız katmanı: küre ekranı tümüyle kaplıyorsa çizilmez; küre döndükçe yatayda hafifçe kayar (kesintisiz tekrar eder)
    if (!turRota && r < Math.hypot(W, H) / 2) {
      const yc = uzayKatman(g.canvas.width, g.canvas.height), kay = (((view.lon * 0.4 * dpr) % yc.width) + yc.width) % yc.width;
      g.save(); g.setTransform(1, 0, 0, 1, 0, 0); g.drawImage(yc, kay, 0); g.drawImage(yc, kay - yc.width, 0);
      for (let i = 0; i < PARLAK.length; i++) {   // parlak yıldızların göz kırpması
        const p = PARLAK[i], a = 0.5 + 0.5 * Math.sin(T * p[4] + p[5]), px = (p[0] + kay) % yc.width, rr = p[2] * (2.4 + a * 2.2);
        const gl = g.createRadialGradient(px, p[1], 0, px, p[1], rr); gl.addColorStop(0, `rgba(${p[3]},${(0.55 * a).toFixed(2)})`); gl.addColorStop(1, `rgba(${p[3]},0)`);
        g.fillStyle = gl; g.fillRect(px - rr, p[1] - rr, rr * 2, rr * 2);
      }
      g.restore();
    }
    if (acilis) acilisUzay(dt, cx, cy, r);
    // statik küre tabanı önbelleği: kamera/yıl/sınırlar değişmedikçe kıtalar, sınırlar ve nehirler yeniden çizilmez
    const cw = g.canvas.width, ch = g.canvas.height;
    // Kamera bu karede kıpırdadıysa (döndürme, yakınlaşma, uçuş) taban yarı çözünürlükte çizilip büyütülür:
    // boyanan piksel dörtte bire iner, FPS artar. Kamera durduğu ilk karede tam çözünürlükle yeniden çizilir.
    const kam = `${view.lat.toFixed(4)}|${view.lon.toFixed(4)}|${view.z.toFixed(4)}`, hareket = kam !== sonKam; sonKam = kam;
    const zem = gorunum !== 'oyun' && ZEMIN && ZEMIN.hazir ? ZEMIN : null, gece = geceMi() && !!zem, resimli = gorunum === 'resimli';
    // görünüm değişince ölçek baştan: düz renkli çizim tam çözünürlükle, kabartmalı görünümler (ağır) yarı çözünürlükle başlar
    if (hareketGorunum !== gorunum) { hareketGorunum = gorunum; hareketOlcek = zem ? 0.5 : 1; tabanSure = 0; tabanSay = 0; }
    const ks = hareket ? hareketOlcek : 1, tw = Math.ceil(cw * ks), th = Math.ceil(ch * ks);
    geceAktif = gece;
    if (zem && view.z > 1.7) zem.yaklasti();
    const tKey = `${cw}|${ch}|${kam}|${Math.round(Y * 4)}|${layers.sinir ? 1 : 0}|${dilimVer}|${temaId}|${turRota ? turRota.id : ''}|${ks}|${zem ? zem.seviye : 0}|${geceMi() ? 1 : 0}|${gorunum}`;
    const tb = ks < 1 ? tabanK(tw, th) : taban(cw, ch);   // tam çözünürlükte hareket ve duruş aynı tuvali kullanır: durunca yeniden çizilmez
    if (tKey !== tabanKey) {
      tabanKey = tKey;
      const tabanT0 = performance.now();
      const tc = tb.getContext('2d'), anaG = g;
      tc.setTransform(1, 0, 0, 1, 0, 0); tc.clearRect(0, 0, tw, th); tc.setTransform(dpr * ks, 0, 0, dpr * ks, 0, 0);
      g = tc;
      // kabartmalı zeminin renkleri ve küreye giydirme (WebGL tuvalinden bu tuvale basılır)
      const zr = zem ? { derin: (gece ? ZEMIN_GECE : ZEMIN_RENK[temaId] || ZEMIN_RENK.doga).dz[0], orta: (gece ? ZEMIN_GECE : ZEMIN_RENK[temaId] || ZEMIN_RENK.doga).dz[1], sig: (gece ? ZEMIN_GECE : ZEMIN_RENK[temaId] || ZEMIN_RENK.doga).dz[2], gol: (gece ? ZEMIN_GECE : ZEMIN_RENK[temaId] || ZEMIN_RENK.doga).gol, karsitlik: resimli ? 1.0 : 1.08, doygunluk: resimli ? 1.5 : 1.12, parlaklik: resimli ? 1.04 : 0.97, stil: resimli ? 1 : 0 } : null;
      const zeminBas = tur => { const S = dpr * ks, c = zem.ciz(tur, tw, th, cx * S, cy * S, r * S, [cl0, sl0, l0], zr, gece); if (!c) return; g.save(); g.setTransform(1, 0, 0, 1, 0, 0); g.drawImage(c, 0, 0); g.restore(); };
      // atmosfer: kürenin kenarına yapışık ince parlak şerit + dışa doğru sönen geniş, soluk hale (ışık sol üstten)
      if (zem) {
        const hale = g.createRadialGradient(cx - r * 0.02, cy - r * 0.02, r * 0.97, cx, cy, r * 1.2), ha = gece ? 0.55 : 1;
        hale.addColorStop(0, `rgba(150,205,255,${0.5 * ha})`); hale.addColorStop(0.12, `rgba(110,175,245,${0.26 * ha})`); hale.addColorStop(0.4, `rgba(80,140,230,${0.09 * ha})`); hale.addColorStop(1, 'rgba(60,110,210,0)');
        g.fillStyle = hale; g.beginPath(); g.arc(cx, cy, r * 1.2, 0, 7); g.fill();
      } else {
        const atm = g.createRadialGradient(cx, cy, r * 0.96, cx, cy, r * 1.16); atm.addColorStop(0, tema.atm[0]); atm.addColorStop(0.5, tema.atm[1]); atm.addColorStop(1, tema.atm[2]);
        g.fillStyle = atm; g.beginPath(); g.arc(cx, cy, r * 1.16, 0, 7); g.fill();
      }
      // okyanus
      if (zem) zeminBas(0);
      else { const oc = g.createRadialGradient(cx - r * 0.35, cy - r * 0.4, r * 0.05, cx, cy, r); oc.addColorStop(0, tema.oc[0]); oc.addColorStop(0.55, tema.oc[1]); oc.addColorStop(1, tema.oc[2]); g.fillStyle = oc; g.beginPath(); g.arc(cx, cy, r, 0, 7); g.fill(); }
      g.save(); g.beginPath(); g.arc(cx, cy, r, 0, 7); g.clip();
      // enlem ızgarası (ön-hesaplanmış)
      g.strokeStyle = `rgba(255,255,255,${(zem ? 0.06 : 0.1) * (1 - ez * 0.7)})`; g.lineWidth = 1;
      for (const gp of IZGARA) { g.beginPath(); linePath(gp); g.stroke(); }
      // karalar: tek Path2D geçişiyle 4x projeksiyon yerine 1x projeksiyon
      const karaPath = new Path2D();
      let anyLand = false;
      for (const p of KARA) if (polyPathOn(karaPath, p)) anyLand = true;
      if (anyLand && zem) {
        // kıyı sığlığı: kıyıdan açığa doğru sönen açık su şeridi (karanın altında kalan yarısı kara çizilince örtülür)
        g.lineJoin = 'round';
        const sg = gece ? '70,150,210' : '150,215,240', sk = clamp(0.7 + view.z * 0.22, 0.9, 2.6);
        for (const [en, a] of hareket ? [[9, 0.16]] : [[20, 0.07], [11, 0.1], [5, 0.16]]) { g.strokeStyle = `rgba(${sg},${a})`; g.lineWidth = en * sk; g.stroke(karaPath); }
        g.save(); g.clip(karaPath);
        zeminBas(1);
        if (layers.sinir) {
          g.beginPath(); for (const p of GOLLER) polyPath(p); g.fillStyle = zr.gol; g.fill('evenodd');
          const tolPx = 1.3 / (R() * D); svNow = tolPx >= LOD[2] ? 2 : tolPx >= LOD[1] ? 1 : 0;
          const sa = gece ? 0.4 : resimli ? 0.68 : 0.5;
          for (const o of aktifSinirlar(Y)) if (turSinirUygun(o)) sinirCiz(o, sa);
          g.globalAlpha = 1;
        }
        g.restore();
        g.beginPath(); for (const p of GOLLER) polyPath(p); g.fillStyle = zr.gol; g.fill('evenodd'); g.strokeStyle = gece ? 'rgba(120,170,210,0.3)' : 'rgba(40,90,130,0.4)'; g.lineWidth = 0.6; g.stroke();
        g.lineJoin = 'bevel';
        g.strokeStyle = gece ? `rgba(130,180,220,${0.3 + ez * 0.1})` : resimli ? `rgba(52,72,58,${0.7 + ez * 0.1})` : `rgba(40,78,104,${0.42 + ez * 0.14})`; g.lineWidth = resimli ? 1.1 + ez * 0.3 : 0.7 + ez * 0.25; g.stroke(karaPath);
      } else if (anyLand) {
        g.lineJoin = 'bevel';
        g.strokeStyle = 'rgba(232,246,252,0.34)'; g.lineWidth = 4.5; g.stroke(karaPath);
        const lg = g.createLinearGradient(cx - r, cy - r, cx + r, cy + r); lg.addColorStop(0, tema.kara[0]); lg.addColorStop(1, tema.kara[1]);
        g.fillStyle = lg; g.fill(karaPath);
        g.save(); g.clip(karaPath);
        g.fillStyle = dokuDesen(); g.globalAlpha = 0.55; g.fillRect(cx - r, cy - r, r * 2, r * 2); g.globalAlpha = 1;
        g.beginPath(); for (const p of BUZ) polyPath(p); g.fillStyle = 'rgba(248,250,252,0.95)'; g.fill();
        // çöl: geniş soluk çevre + koyu çekirdek, üst üste; buz: Grönland ve Kuzey Buz Denizi adaları (hepsi yumuşak kenarlı)
        yumusak([[COLC, 'rgba(236,222,182,0.5)'], [COLP, 'rgba(238,224,184,0.78)'], [BUZK, 'rgba(248,250,252,0.96)']], tw, th, dpr * ks);
        // dönemin siyasi sınırları: ikinci dev ofscreen canvas / destination-in yerine doğrudan karaPath klip içinde hızlı çizim!
        if (layers.sinir) {
          // Büyük göl oyuklarının altında göl mavisi taban boya: kıyılarda tek piksel bile yeşil boşluk kalmasın
          g.beginPath(); for (const p of GOLLER) polyPath(p); g.fillStyle = tema.gol; g.fill('evenodd'); g.strokeStyle = tema.gol; g.lineWidth = 4.5; g.lineJoin = 'round'; g.stroke();
          g.globalAlpha = 0.92;
          const tolPx = 1.3 / (R() * D); svNow = tolPx >= LOD[2] ? 2 : tolPx >= LOD[1] ? 1 : 0;
          for (const o of aktifSinirlar(Y)) if (turSinirUygun(o)) sinirCiz(o);
          g.globalAlpha = 1;
        }
        g.restore();
        g.beginPath(); polyPath(HAZAR); for (const p of GOLLER) polyPath(p); g.fillStyle = tema.gol; g.fill('evenodd'); g.strokeStyle = 'rgba(100,125,90,0.48)'; g.lineWidth = 0.65; g.stroke();
        g.strokeStyle = `rgba(105,125,90,${0.45 + ez * 0.2})`; g.lineWidth = 0.7 + ez * 0.3; g.stroke(karaPath);
      }
      // dar boğazlar ve nehirler
      g.lineCap = 'round'; g.lineJoin = 'round';
      if (view.z > 2.5) for (const b of BOGAZ) { g.beginPath(); linePath(b.p); g.strokeStyle = '#8fbedb'; g.lineWidth = clamp(b.km * r / 6371 * 2.5, 2.5, 40); g.stroke(); }
      // 675 nehir aynı renk ve kalınlıkta: tek yol, tek stroke (eskiden her nehir ayrı çiziliyordu)
      if (NEHIR_SINIF) {
        // sınıf başına tek yol, tek stroke: ana nehirler uzaktan, ince dereler yaklaşınca belirir; kalınlık yakınlıkla artar
        const esik = [3.1, 2.3, 1.65, 1.2, 0.85], kal = [0.5, 0.75, 1.05, 1.45, 1.95], zk = clamp(0.6 + view.z * 0.2, 0.78, 2.5);
        const nr = gece ? '96,160,214' : zem ? '44,112,172' : '70,138,192';
        for (let c = 0; c < 5; c++) {
          const a = clamp((view.z - esik[c]) / 0.45, 0, 1); if (a <= 0) continue;
          g.beginPath(); for (const n of NEHIR_SINIF[c]) linePath(n);
          g.strokeStyle = `rgba(${nr},${(a * (0.62 + c * 0.07)).toFixed(2)})`; g.lineWidth = kal[c] * zk; g.stroke();
        }
      } else if (view.z > 1.6) { g.beginPath(); for (const n of NEHIR) if (!n.nil) linePath(n); g.strokeStyle = `rgba(80,145,195,${clamp((view.z - 1.6) / 2, 0, 0.75)})`; g.lineWidth = 0.8 + ez; g.stroke(); }
      const nilW = clamp(view.z * 0.6, 1.4, 9);
      // Nil vadisinin yeşil şeridi: kabartmalı zeminde vadi görselde zaten yeşil, şerit yalnızca hafif bir vurgu olur
      for (const n of NEHIR) if (n.nil) { g.beginPath(); linePath(n); g.strokeStyle = `rgba(90,150,60,${(zem ? 0.22 : 0.55) * (1 - ez * 0.85)})`; g.lineWidth = nilW * 1.8; g.stroke(); }
      if (view.z > 4 && view.z < 30) for (const br of getNilKollar()) { g.beginPath(); linePath(br); g.strokeStyle = `rgba(90,150,60,${0.55 * (1 - ez * 0.85)})`; g.lineWidth = nilW * 1.4; g.stroke(); }
      for (const n of NEHIR) if (n.nil) { g.beginPath(); linePath(n); g.strokeStyle = '#2f7fc0'; g.lineWidth = clamp(nilW * 0.32, 1.2, 6); g.stroke(); }
      if (view.z > 4 && view.z < 30) for (const br of getNilKollar()) { g.beginPath(); linePath(br); g.strokeStyle = '#2f7fc0'; g.lineWidth = clamp(nilW * 0.22, 1, 4); g.stroke(); }
      // küre ışık ve gölgesi
      const shd = g.createRadialGradient(cx - r * 0.45, cy - r * 0.45, r * 0.1, cx, cy, r * 1.02); shd.addColorStop(0, zem ? 'rgba(255,255,240,0.1)' : 'rgba(255,255,240,0.14)'); shd.addColorStop(0.65, 'rgba(0,0,0,0)'); shd.addColorStop(1, zem ? (gece ? 'rgba(0,2,14,0.62)' : 'rgba(2,10,30,0.46)') : 'rgba(0,0,20,0.5)');
      g.fillStyle = shd; g.fillRect(cx - r, cy - r, r * 2, r * 2);
      if (!zem && gorunum !== 'oyun' && geceMi()) { g.fillStyle = 'rgba(4,10,28,0.26)'; g.fillRect(cx - r, cy - r, r * 2, r * 2); }   // kabartmalı zemin yoksa gece modu: düz karartma
      if (zem) {  // kenarda atmosferin içten görünen ince ışığı
        const ic = g.createRadialGradient(cx, cy, r * 0.9, cx, cy, r); ic.addColorStop(0, 'rgba(140,200,255,0)'); ic.addColorStop(0.7, `rgba(140,200,255,${gece ? 0.07 : 0.1})`); ic.addColorStop(1, `rgba(165,215,255,${gece ? 0.3 : 0.42})`);
        g.fillStyle = ic; g.fillRect(cx - r, cy - r, r * 2, r * 2);
      }
      g.restore();
      g = anaG;
      if (hareket) {
        // taban çiziminin süresi (yumuşatılmış): 16 ms'yi aşarsa ölçek bir basamak iner, 6 ms'nin altındaysa bir basamak çıkar
        const dtT = performance.now() - tabanT0; tabanSure = tabanSay ? tabanSure * 0.8 + dtT * 0.2 : dtT; tabanSay++;
        if (tabanSay >= 10) {
          if (tabanSure > 16 && hareketOlcek > 0.5) { hareketOlcek = hareketOlcek > 0.75 ? 0.75 : 0.5; tabanSay = 0; }
          else if (tabanSure < 6 && hareketOlcek < 1) { hareketOlcek = hareketOlcek < 0.75 ? 0.75 : 1; tabanSay = 0; }
        }
      }
    }
    // önbellekteki küre tabanını tek seferde bas
    g.save(); g.setTransform(1, 0, 0, 1, 0, 0); g.drawImage(tb, 0, 0, cw, ch); g.restore();
    g.save(); g.beginPath(); g.arc(cx, cy, r, 0, 7); g.clip();
    // 🌓 Canlı Gece / Gündüz gölgesi ve (yalnızca Tarih Atlası'nda) gece tarafındaki altın şehir ışıkları
    if (layers.gece && (layers.sehir || layers.yapi)) {
      const [sx, sy, sz] = gunesVektor();
      g.drawImage(geceMaske(sx, sy, sz), cx - r, cy - r, r * 2, r * 2);
      g.save();
      for (const [cl, sl, lo, wt] of GECE_SEHIR) {
        const [x, y, z] = pj(cl, sl, lo);
        if (z <= 0.04) continue;
        const dot = x * sx + y * sy + z * sz;
        if (dot >= -0.02) continue;
        const na = clamp((-dot - 0.02) / 0.16, 0, 1);
        const px = cx + x * r, py = cy - y * r, rad = (2.6 + wt * 2.2) * clamp(view.z * 0.45, 0.85, 2.2);
        const gl = g.createRadialGradient(px, py, 0, px, py, rad * 2.1);
        gl.addColorStop(0, `rgba(255,232,145,${(0.95 * na).toFixed(2)})`);
        gl.addColorStop(0.45, `rgba(255,180,60,${(0.45 * na).toFixed(2)})`);
        gl.addColorStop(1, 'rgba(255,150,40,0)');
        g.fillStyle = gl; g.beginPath(); g.arc(px, py, rad * 2.1, 0, 7); g.fill();
        g.fillStyle = `rgba(255,250,210,${(0.92 * na).toFixed(2)})`;
        g.beginPath(); g.arc(px, py, Math.max(1.1, rad * 0.34), 0, 7); g.fill();
      }
      g.restore();
    }
    // Gece modu: o yılın şehirleri karanlık dünyada ılık ışıklar olarak parlar (başkentler daha iri)
    if (gece && layers.sehir && cities && cities.length) {
      const isik = sehirIsik(), kz = clamp(0.5 + view.z * 0.17, 0.7, 2);
      g.save(); g.globalCompositeOperation = 'lighter';
      for (const c of cities) {
        const [x, y, z] = P(...c.ll); if (z <= 0.06 || x < -30 || x > W + 30 || y < -30 || y > H + 30) continue;
        const s2 = (c.cap ? 15 : 8) * kz * (0.93 + 0.07 * Math.sin(T * 1.6 + x * 0.37));
        g.globalAlpha = Math.min(1, z * 3) * (c.cap ? 0.95 : 0.7); g.drawImage(isik, x - s2, y - s2, s2 * 2, s2 * 2);
      }
      g.restore();
    }
    // bulutlar (uzaktan)
    // Bulutlar: yalnızca dünyaya çok uzaktan bakarken görünür (yaklaştıkça sönüp kaybolur); her biri önce yere düşen
    // gölgesiyle, sonra pofuduk bulut resmiyle çizilir ve yavaşça doğuya sürüklenir.
    if (view.z < 1.6) {
      const ca = 1 - clamp((view.z - 1.12) / 0.48, 0, 1);
      for (const b of BULUT) {
        b.lo += dt * 1.5; const [x, y, z] = P(b.la, b.lo); if (z <= 0.18) continue;
        const yumusak = zem && !resimli, [bulut, golge] = (yumusak ? bulutResim : bulutResimOyun)(b.tur), en = b.r * r / 100 * (yumusak ? 6.4 : 5.0), boy = en * (0.55 + 0.45 * z), a = ca * Math.min(1, (z - 0.18) * 2.2);
        g.globalAlpha = (gece ? 0.18 : yumusak ? 0.3 : 0.5) * a; g.drawImage(mipSec(golge, en), x - en / 2 + en * (yumusak ? 0.04 : 0.05), y - boy / 2 + en * (yumusak ? 0.055 : 0.07), en, boy);
        g.globalAlpha = (gece ? 0.3 : yumusak ? 0.9 : 0.94) * a; g.drawImage(mipSec(bulut, en), x - en / 2, y - boy / 2, en, boy);
      }
      g.globalAlpha = 1;
    }
    if (acilis && acilisP < 0.86) { g.restore(); hits.length = 0; return; }   // restore: yukarıda açılan küre kırpması kapanır (yoksa kırpma sonraki karelere kalır)
    // ---- Mısır katmanı ----
    hits.length = 0;
    if (ez > 0) {
      g.globalAlpha = ez;
      // coğrafi adlar
      const EGEO = [[32.4, 28.4, 'AKDENİZ', 'deniz', 2.2], [24.8, 36.0, 'KIZILDENİZ', 'deniz', 2.2], [29.4, 33.75, 'SİNA', 'bolge', 3], [25.4, 28.2, 'BATI ÇÖLÜ', 'bolge', 3], [27.3, 33.55, 'DOĞU ÇÖLÜ', 'bolge', 3.5], [21.6, 32.9, 'NUBYA', 'bolge', 3],
        [30.8, 30.35, 'AŞAĞI MISIR', 'misir', 2.6], [26.6, 31.55, 'YUKARI MISIR', 'misir', 2.6], [28.2, 31.15, 'Nil Nehri', 'nehir', 3.2], [29.42, 30.45, 'Faiyum', 'kucuk', 7], [31.1, 31.2, 'Delta', 'kucuk', 6]];
      const misirVar = !window.BOLGE || window.BOLGE.id === 'misir' || DM;
      const geo = [...(misirVar ? EGEO : []), ...(window.BOLGE && window.BOLGE.id !== 'misir' ? ((window.MISIR || {}).kureAdlari || []) : [])].filter(function (q) { return !this.has(q[2]) && this.add(q[2]); }, new Set());
      for (const [la, lo, ad, tur, zmin] of geo) {
        if (view.z < zmin) continue;
        // Doğa katmanları açıkken tekrarlanan taban nehir/dağ/bölge etiketlerini sustur (çift yazı ve çakışmayı önle)
        if (tur === 'nehir' && (layers.nehir || layers.cografya)) continue;
        if ((tur === 'bolge' || tur === 'kucuk' || tur === 'misir') && layers.cografya && !layers.sinir) continue;
        const [x, y, z] = P(la, lo); if (z <= 0.05) continue;
        const pr = { deniz: 80, misir: 70, nehir: 55, bolge: 50, kucuk: 32 }[tur];
        if (tur === 'deniz') lab(pr, x, y, ad, { col: '#4d7392', it: true, serif: true, size: 13, w: 600, ls: 3, halo: 2.5, haloCol: 'rgba(225,240,248,0.75)' });
        else if (tur === 'misir') lab(pr, x, y, ad, { col: '#fffaf0', serif: true, size: 12.5, w: 600, ls: 2.5, haloCol: 'rgba(90,45,15,0.6)' });
        else if (tur === 'nehir') lab(pr, x, y, ad, { col: '#2f6f9e', it: true, serif: true, size: 12, w: 600, halo: 2.5, haloCol: 'rgba(240,248,252,0.75)' });
        else lab(pr, x, y, ad, { col: '#5e5434', it: tur === 'bolge', serif: true, size: tur === 'kucuk' ? 11 : 12, w: 600, ls: tur === 'bolge' ? 2 : 0, halo: 2.5, haloCol: 'rgba(245,245,230,0.7)' });
      }
      if (view.z > 8 && misirVar) for (const [la, lo, ad] of [[24.08, 32.89, '1. Çağlayan'], [21.8, 31.25, '2. Çağlayan'], [19.75, 30.4, '3. Çağlayan'], [18.68, 32.15, '4. Çağlayan']]) { const [x, y, z] = P(la, lo); if (z <= 0) continue; g.strokeStyle = '#fff'; g.lineWidth = 1.5; g.beginPath(); g.moveTo(x - 5, y - 3); g.lineTo(x, y + 2); g.lineTo(x + 5, y - 3); g.stroke(); lab(30, x + 8, y, ad, { align: 'left', size: 10.5, col: '#dfe9f5' }); }
      // devlet adları: ekranda yeterince büyük olanlar, büyükten küçüğe öncelikli
      if (layers.sinir && ua > 0) for (const o of aktifSinirlar(Y)) {
        if (!turSinirUygun(o)) continue;
        const k = o.k; if (o.mod === 'son' || o.mod === 'dogus') continue;
        const px = Math.sqrt(k.a) / 111 * R() * D; if (px < 55) continue;
        const [x, y, z] = P(...k.e); if (z <= 0.08) continue;
        const ad = sinirAd(k).toLocaleUpperCase('tr'), sz = clamp(9 + Math.log10(k.a) * 0.9, 10, 14);
        lab(60 + Math.log10(k.a) * 6, x, y, ad, { col: '#fffaf0', size: sz, w: 600, serif: true, ls: 1.5, haloCol: 'rgba(80,40,15,0.55)', bilgi: k, a: ua, kay: true });
        hits.push({ kind: 'devlet', k, x0: x - ad.length * sz * 0.36, x1: x + ad.length * sz * 0.36, y0: y - sz * 0.7, y1: y + sz * 0.7 });
      }
      // şehirler ve başkent
      const cityHits = [];
      g.globalAlpha = ez * ua;
      for (const c of (layers.sehir && ua > 0 ? cities : [])) {
        const [x, y, z] = P(...c.ll); if (z <= 0.05 || x < -20 || x > W + 20 || y < -20 || y > H + 20) continue;
        if (c.cap) {
          const pr = 1 + Math.sin(T * 3) * 0.12;
          g.fillStyle = 'rgba(255,214,102,0.25)'; g.beginPath(); g.arc(x, y, 11 * pr, 0, 7); g.fill();
          g.fillStyle = '#ffd666'; g.strokeStyle = OUT; g.lineWidth = 1.4; star(x, y, 7); g.fill(); g.stroke();
          if (!DM || view.z > 2.6) lab(100, x, y + 15, c.ad, { size: 12, w: 800, col: '#ffe7a3', a: ua }); obstacle(x - 9, y - 9, x + 9, y + 9);
          cityHits.push({ kind: 'sehir', c, x0: x - 10, x1: x + 10, y0: y - 10, y1: y + 10 });
        } else if (view.z > 7) {
          g.fillStyle = '#f4eedf'; g.strokeStyle = OUT; g.lineWidth = 1.2; g.beginPath(); g.arc(x, y, 3, 0, 7); g.fill(); g.stroke();
          obstacle(x - 4, y - 4, x + 4, y + 4); if (view.z > 9) lab(36, x, y + 11, c.ad, { size: 10.5, w: 600, col: '#f4e7cf' });
          cityHits.push({ kind: 'sehir', c, x0: x - 6, x1: x + 6, y0: y - 6, y1: y + 6 });
        }
      }
      g.globalAlpha = ez;
      // yapılar: küçük simgeler, tam yerinde. Uzaktan bir bölgede yalnızca en önemlisi görünür;
      // yaklaştıkça üst üste binmeyecek şekilde diğerleri de belirir.
      // Ünlü yapılar (it.lm) önemlerine göre farklı yakınlıkta belirir (it.zmin): dünyaca ünlüler hemen, yereller çok yaklaşınca.
      if (view.z >= 2.6 && layers.yapi) {
        // simge yarı boyu: yaklaştıkça büyür (eskiden 5,5–9 pikseldi; ayrıntı seçilmiyordu)
        const s = clamp(6.8 + view.z * 0.42, 8.5, 15), minD = view.z >= 14 ? 0 : view.z >= 5.5 ? s * 2.3 : Math.max(s * 2.7, 28);
        const vis = []; for (const it of items) { if (it.id === 'seddqin' || it.id === 'seddming') continue; if (view.z < (it.zmin || 3)) continue; const [x, y, z] = P(...it.ll); if (z > 0.05 && x > -20 && x < W + 20 && y > -20 && y < H + 20) vis.push({ it, x, y, kids: [] }); }
        const rank = o => (o.it.w || 1e4) * (o.it.st === 'ins' ? 3 : 1) * (o.it.st === 'harabe' ? 0.3 : 1);
        vis.sort((a, b) => rank(b) - rank(a));
        const shown = [];
        for (const o of vis) { const near = shown.find(q => Math.abs(q.x - o.x) < minD && Math.abs(q.y - o.y) < minD); if (near) near.kids.push(o); else shown.push(o); }
        shown.sort((a, b) => a.y - b.y);
        const rmax = Math.max(1, ...shown.map(rank));
        const cizYapi = (it, px, py, si, fa, kids, rankVal) => {
          g.globalAlpha = ez * (0.25 + 0.75 * fa);
          if (kids && kids.length) {
            const katSay = Math.min(3, kids.length);
            for (let k = katSay; k >= 1; k--) {
              g.fillStyle = k === 1 ? 'rgba(244,218,158,0.88)' : 'rgba(218,180,115,0.72)';
              g.strokeStyle = 'rgba(72,42,16,0.78)'; g.lineWidth = 1.2;
              g.beginPath(); g.arc(px + k * 4.2, py - k * 1.4, si * 0.92, 0, 7); g.fill(); g.stroke();
            }
          }
          icon(it, px, py, si); obstacle(px - si, py - si, px + si, py + si);
          if (kids && kids.length) {
            const bx = px + si + 3, by = py - si - 1;
            g.fillStyle = '#c97b16'; g.strokeStyle = '#fff6dc'; g.lineWidth = 1.4;
            g.beginPath(); g.arc(bx, by, 7.2, 0, 7); g.fill(); g.stroke();
            g.fillStyle = '#fffaf0'; g.font = '800 8.5px Atkinson Hyperlegible Next, system-ui'; g.textAlign = 'center'; g.textBaseline = 'middle';
            g.fillText(`+${kids.length}`, bx, by + 0.4); g.textBaseline = 'alphabetic';
          }
          g.globalAlpha = ez;
          const labZ = it.lm ? ({ 5: 3.4, 4: 5.5, 3: 8.5, 2: 11.5, 1: 15 })[it.o] || 12 : 9;
          if (view.z > labZ) lab(38 + 8 * Math.sqrt(rankVal / rmax), px, py + si + 10, it.ad, { size: 10.5, w: 600, col: '#fff6dc', halo: 2.5 });
          hits.push({ kind: 'yapi', it, kids: kids || [], cx: px, cy: py, x0: px - si - 4, x1: px + si + (kids && kids.length ? 12 : 4), y0: py - si - (kids && kids.length ? 9 : 4), y1: py + si + 4 });
        };
        for (const o of shown) {
          const fa = clamp((view.z - (o.it.zmin || 3)) / ((o.it.zmin || 3) * 0.25), 0, 1);
          const si = s * (o.it.lm ? ({ 5: 1.4, 4: 1.2, 3: 1.05 })[o.it.o] || 1 : 1);
          // Orta-yakın ölçekte (z >= 5.5) kümelenen yapıtlar aşırı yaklaşmaya gerek kalmadan halka/küre düzeninde yan yana açılır!
          if (o.kids.length && view.z >= 5.5) {
            const grup = [o, ...o.kids.slice(0, 7)];
            const artan = o.kids.slice(7);
            const n = grup.length;
            const ringR = clamp(si * 2.2 + n * 1.8, 17, 34);
            // Merkez noktası ve ince bağlayıcı halka
            g.globalAlpha = ez * 0.45;
            g.strokeStyle = '#ffd666'; g.lineWidth = 1;
            g.beginPath(); g.arc(o.x, o.y, ringR, 0, 7); g.stroke();
            g.fillStyle = '#ffd666'; g.beginPath(); g.arc(o.x, o.y, 2.2, 0, 7); g.fill();
            for (let i = 0; i < n; i++) {
              const ang = -Math.PI / 2 + (i * 2 * Math.PI) / n;
              const px = o.x + Math.cos(ang) * ringR, py = o.y + Math.sin(ang) * ringR;
              const cur = grup[i], cSi = s * (cur.it.lm ? ({ 5: 1.25, 4: 1.1, 3: 1.0 })[cur.it.o] || 0.95 : 0.95);
              g.globalAlpha = ez * 0.5; g.strokeStyle = 'rgba(255,230,150,0.65)'; g.lineWidth = 1;
              g.beginPath(); g.moveTo(o.x, o.y); g.lineTo(px, py); g.stroke();
              cizYapi(cur.it, px, py, cSi, fa, i === 0 ? artan : [], rank(cur));
            }
          } else {
            cizYapi(o.it, o.x, o.y, si, fa, o.kids, rank(o));
          }
        }
      }
      if (view.z < 14) hits.push(...cityHits); else hits.unshift(...cityHits);
      flushLabels();
      g.globalAlpha = 1;
    }
    // yeraltı kaynakları ve dünya madenleri: seçili yılda işletilenler, element simgeli küçük rozetler
    if (layers.kaynak && view.z >= 1.45) {
      const KT = window.KAYNAK_TUR || {}, s = clamp(5.5 + view.z * 0.45, 6.5, 11);
      const fa = clamp((view.z - 1.45) / 0.5, 0.2, 1), minSep = view.z >= 3.5 ? 16 : 24, shownK = [];
      for (const k of window.KAYNAKLAR || []) {
        if (!(Y <= k.from && Y >= k.to)) continue;
        const [x, y, z] = P(...k.ll); if (z <= 0.08 || x < -20 || x > W + 20 || y < -20 || y > H + 20) continue;
        if (shownK.some(q => Math.abs(q[0] - x) < minSep && Math.abs(q[1] - y) < minSep)) continue;
        shownK.push([x, y]);
        const t = KT[k.tur] || {}, hov = hover && hover.kind === 'kaynak' && hover.k === k;
        g.globalAlpha = clamp(z * 3, 0, 1) * fa;
        g.fillStyle = 'rgba(0,0,0,0.3)'; g.beginPath(); g.roundRect(x - s + 1, y - s + 2, s * 2, s * 2, 3); g.fill();
        g.fillStyle = t.renk; g.strokeStyle = hov ? '#ffd666' : '#fff6dc'; g.lineWidth = hov ? 2.4 : 1.4;
        g.beginPath(); g.roundRect(x - s, y - s, s * 2, s * 2, 3); g.fill(); g.stroke();
        const sem = t.sem || '?'; g.fillStyle = t.yazi; g.textAlign = 'center'; g.textBaseline = 'middle';
        // simge emojiyse (petrol, elmas) sitenin kendi resmiyle, element yazısıysa (Au, Fe…) yazı olarak çizilir
        if (YZ_EMO.test(sem) && window.SIMGE_DIZIN && simgeSayfa() && simgeHucreleri(sem, window.SIMGE_DIZIN)) simge(sem, x, y, s * 0.6);
        else { g.font = `800 ${Math.round(s * (sem.length > 2 ? 0.62 : 0.95))}px Atkinson Hyperlegible Next, system-ui`; g.fillText(sem, x, y + 0.5); }
        if (view.z >= 3.2 || hov) lab(hov ? 97 : 52, x, y + s + 10, k.ad.replace(/ \(.*\)$/, ''), { size: 10, w: 600, col: '#ffe7a3', halo: 2.6, haloCol: 'rgba(24,16,8,0.88)', kay: true });
        g.globalAlpha = 1;
        hits.push({ kind: 'kaynak', k, x0: x - s - 3, x1: x + s + 3, y0: y - s - 3, y1: y + s + 3 });
      }
    }
    // ticaret yolları: katman açıkken tüm tarihlerde görünür; ince çizgi, malın aktığı yöne giden noktalar
    if (layers.ticaret) for (const t of window.TICARET_YOLLARI || []) {
      const d = yolHazirla(t), deniz = t.tur === 'deniz', col = deniz ? '40,110,165' : '160,85,25';
      const hov = hover && hover.kind === 'yol' && hover.t === t;
      g.beginPath(); linePath(d.p); g.strokeStyle = `rgba(${col},${hov ? 0.95 : 0.5})`; g.lineWidth = hov ? 2.6 : 1.5; g.setLineDash(deniz ? [6, 4] : []); g.stroke(); g.setLineDash([]);
      const sp = clamp(900 / view.z, 40, 600), off = (T * sp / 2.4) % sp;
      g.fillStyle = `rgba(${col},${hov ? 1 : 0.9})`;
      for (let s = off; s < d.L; s += sp) { const [x, y, z] = P(...yolNokta(d, s)); if (z <= 0.05) continue; g.beginPath(); g.arc(x, y, hov ? 2.8 : 2, 0, 7); g.fill(); }
      yolUclari(d, `rgba(${col},${hov ? 1 : 0.75})`, hov);
      const [mx, my, mz] = P(...yolNokta(d, d.L / 2));
      if (mz > 0.1 && (view.z > 2.4 || hov)) text(mx, my - 9, (deniz ? '⛵ ' : '🐪 ') + t.ad, { size: 10.5, w: 700, col: `rgb(${col})`, halo: 3, haloCol: 'rgba(250,248,236,0.85)', serif: true, it: true });
      yolHit({ kind: 'yol', t }, d, 7);
    }
    // ünlü yolculuklar: seçili yıla yakın olanlar; kesik çizgi, giden yolcu, süre etiketi
    if (layers.yolculuk) for (const j of window.YOLCULUKLAR || []) {
      const dd = Math.abs(Y - j.y); if (dd > aralik) continue;
      const d = yolHazirla(j), hov = hover && hover.kind === 'yolculuk' && hover.j === j;
      g.globalAlpha = clamp(1 - dd / (aralik * 1.3 + 1), 0.45, 1);
      g.beginPath(); linePath(d.p); g.strokeStyle = hov ? '#ffb38a' : 'rgba(255,140,90,0.85)'; g.lineWidth = hov ? 3 : 2; g.setLineDash([3, 5]); g.stroke(); g.setLineDash([]);
      yolUclari(d, '#ff8c5a', hov);
      const k = (T / 6) % 1, [px, py, pz] = P(...yolNokta(d, d.L * k));
      if (pz > 0.05) { g.fillStyle = '#fff3e0'; g.strokeStyle = '#d4522a'; g.lineWidth = 2; g.beginPath(); g.arc(px, py, 4, 0, 7); g.fill(); g.stroke(); }
      const [mx, my, mz] = P(...yolNokta(d, d.L / 2));
      if (mz > 0.1) {
        const lb = '⏱ ' + j.sure.split(' (')[0].split(';')[0]; g.font = '700 11px Atkinson Hyperlegible Next, system-ui'; const w = g.measureText(lb).width + 14;
        g.fillStyle = hov ? '#ffd666' : 'rgba(58,26,12,0.9)'; g.strokeStyle = '#ff8c5a'; g.lineWidth = 1.2; g.beginPath(); g.roundRect(mx - w / 2, my - 10, w, 20, 10); g.fill(); g.stroke();
        g.fillStyle = hov ? '#2a1d10' : '#ffe7d6'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText(lb, mx, my + 0.5);
        hits.push({ kind: 'yolculuk', j, x0: mx - w / 2, x1: mx + w / 2, y0: my - 10, y1: my + 10 });
      }
      yolHit({ kind: 'yolculuk', j }, d, 7);
      g.globalAlpha = 1;
    }
    // insanlığın yayılışı (data/goc.js): katman açıkken tüm tarihlerde görünür
    const GOC = window.GOC;
    if (layers.goc && GOC) {
      const ea = 1;
      for (const r of GOC.yollar) {
        const d = yolHazirla(r), hov = hover && hover.kind === 'goc' && hover.r === r;
        g.globalAlpha = 1; g.lineCap = 'round'; g.lineJoin = 'round';
        g.beginPath(); linePath(d.p); g.strokeStyle = `rgba(200,80,50,${hov ? 0.5 : 0.26})`; g.lineWidth = hov ? 10 : 7; g.stroke();
        g.strokeStyle = 'rgba(150,45,30,0.9)'; g.lineWidth = 1.7; g.setLineDash([6, 4]); g.stroke(); g.setLineDash([]);
        const sp = clamp(1500 / view.z, 70, 900), off = (T * sp / 3) % sp; g.fillStyle = 'rgba(255,240,220,0.95)';
        for (let s = off; s < d.L; s += sp) { const [x, y, z] = P(...yolNokta(d, s)); if (z <= 0.05) continue; g.beginPath(); g.arc(x, y, 2.3, 0, 7); g.fill(); }
        yolUclari(d, 'rgba(150,45,30,0.95)', true);
        const [mx, my, mz] = P(...yolNokta(d, d.L * (r.lf ?? 0.5)));
        if (mz > 0.15 && (view.z >= 1.4 || hov)) text(mx, my - 11, r.etiket, { size: 11.5, w: 700, col: '#7a2414', halo: 3, haloCol: 'rgba(255,246,230,0.9)', serif: true, it: true });
        yolHit({ kind: 'goc', r }, d, 8);
        g.globalAlpha = 1;
      }
      if (ea > 0) { // beşik: Doğu Afrika'da atan halka
        const [x, y, z] = P(...GOC.besik.ll);
        if (z > 0.1) {
          g.globalAlpha = ea; const ph = (T * 0.6) % 1;
          for (const k of [0, 0.5]) { const p = (ph + k) % 1; g.strokeStyle = `rgba(200,80,50,${0.8 * (1 - p)})`; g.lineWidth = 2.5; g.beginPath(); g.arc(x, y, 8 + p * 30, 0, 7); g.stroke(); }
          g.fillStyle = '#c8502f'; g.strokeStyle = '#fff6e6'; g.lineWidth = 2; g.beginPath(); g.arc(x, y, 7, 0, 7); g.fill(); g.stroke();
          // yazı noktanın sağında (Hint Okyanusu tarafı boş; solda kıta adı ve bölge işareti var)
          text(x + 14, y + 16, '🧬 İnsanlığın beşiği', { size: 13, w: 800, col: '#7a2414', halo: 3.5, haloCol: 'rgba(255,246,230,0.92)', serif: true, align: 'left' });
          hits.unshift({ kind: 'besik', x0: x - 10, x1: x + 150, y0: y - 10, y1: y + 26 }); g.globalAlpha = 1;
        }
      }
      for (const m of GOC.tarim) { // tarımın doğduğu yerler: katman açıkken tüm tarihlerde görünür
        const [x, y, z] = P(...m.ll); if (z <= 0.1) continue;
        const hov = hover && hover.kind === 'tarim' && hover.m === m;
        g.globalAlpha = 1; g.fillStyle = 'rgba(250,236,170,0.95)'; g.strokeStyle = '#7a5a14'; g.lineWidth = 1.5;
        g.font = `${hov ? 13 : 11}px Atkinson Hyperlegible Next, system-ui`; g.textAlign = 'center'; g.textBaseline = 'middle'; simge('🌾', x, y, hov ? 11.5 : 9.5); g.textBaseline = 'alphabetic';
        if (view.z >= 1.9 || hov) text(x, y + 20, m.ad, { size: 11, w: 700, col: '#5a4010', halo: 3, haloCol: 'rgba(255,248,225,0.9)', serif: true });
        hits.unshift({ kind: 'tarim', m, x0: x - 12, x1: x + 12, y0: y - 12, y1: y + 12 }); g.globalAlpha = 1;
      }
    }
    // olaylar: seçili yıla ±100 yıl uzaklıktaki savaşlar, afetler, antlaşmalar (önemine göre büyük)
    const evs = (window.OLAYLAR || []).filter(e => layers[e.tur] && Math.abs(Y - e.y) <= aralik);
    evs.sort((a, b) => a.onem - b.onem);
    for (const e of evs) {
      let [x, y, z] = P(...e.ll); if (z <= 0.05) continue;
      const d = Math.abs(Y - e.y), a = clamp(1 - d / (aralik * 1.3 + 1), 0.35, 1), s = 4 + e.onem * 2.3, now = d <= Math.max(1, aralik * 0.05);
      g.globalAlpha = a;
      evFx(e, x, y, s, now);
      if (e.alt === 'deprem') { x += Math.sin(T * 47 + e.y) * s * 0.12; y += Math.cos(T * 39) * s * 0.08; }
      if (now) { const pr = (T * 1.2) % 1; g.strokeStyle = e.tur === 'savas' ? `rgba(230,60,40,${1 - pr})` : e.tur === 'deniz' ? `rgba(60,160,230,${1 - pr})` : e.tur === 'afet' ? `rgba(255,150,40,${1 - pr})` : e.tur === 'olay' ? `rgba(170,120,255,${1 - pr})` : `rgba(80,180,255,${1 - pr})`; g.lineWidth = 2.5; g.beginPath(); g.arc(x, y, s * (1.2 + pr * 1.6), 0, 7); g.stroke(); }
      if (e.tur === 'deniz') { g.save(); g.translate(x, y); g.rotate(Math.sin(T * 1.6 + e.y) * 0.12); g.translate(-x, -y); evIcon(e, x, y, s); g.restore(); }
      else if (e.tur === 'savas') { g.save(); g.translate(x, y); g.rotate(Math.sin(T * 9 + e.y) > 0.6 ? 0.18 : 0); g.translate(-x, -y); evIcon(e, x, y, s); g.restore(); }
      else evIcon(e, x, y, s);
      g.globalAlpha = 1;
      hits.push({ kind: 'olay', e, x0: x - s - 3, x1: x + s + 3, y0: y - s - 3, y1: y + s + 3 });
    }
    // 🌊 Okyanus akıntıları, girdaplar ve fırtına alanları (data/atlas/okyanus.js)
    const OK = window.ATLAS_OKYANUS;
    if (layers.akinti && OK) {
      for (const a of OK.akintilar || []) {
        const d = yolHazirla(a), sicak = a.tip === 'sicak', col = sicak ? '232,92,56' : '43,159,217';
        const hov = hover && hover.kind === 'akinti' && hover.a === a;
        g.save(); g.lineCap = 'round'; g.lineJoin = 'round';
        // Akan su: akıntının eğrisi boyunca kayan gerçek bir su dokusu (akış yönünde uzamış ışık
        // damarları, köpük parlamaları). İki katman farklı hızda akar: derinlik hissi. Üstte pırıltılar.
        const segs = ekranParcalari(d.p);
        const zs = clamp(view.z / 1.6, 0.85, 1.8);
        const HW = (hov ? 10 : 8) * zs;
        const doku = suDokusu(sicak);
        const acik = sicak ? '255,226,196' : '226,248,255';
        g.beginPath(); linePath(d.p);
        g.strokeStyle = `rgba(${col},${hov ? 0.16 : 0.09})`; g.lineWidth = HW * 2.8; g.stroke();
        for (const seg of segs) {
          const Lpx = seg[seg.length - 1][2]; if (Lpx < 12) continue;
          const inc = s1 => Math.min(1, s1 / 50, (Lpx - s1) / 50);
          // performans: dönüşüm matrisi elle hesaplanır (save/rotate/restore yok), parçalar büyük,
          // ekran dışı parçalar atlanır; küre hareket ederken yalnızca alt katman çizilir
          const ST = hareket ? 14 : 10, iki = !hareket;
          const tb = g.getTransform(), kay1 = T * 16 * zs, kay2 = T * 31 * zs;
          g.globalAlpha = hov ? 1 : 0.9;
          for (let s1 = 0; s1 < Lpx; s1 += ST) {
            const w = inc(s1 + ST / 2); if (w <= 0.02) continue;
            const [x, y, tx, ty] = segNokta(seg, s1);
            if (x < -40 || y < -40 || x > W + 40 || y > H + 40) continue;
            const h = HW * (0.3 + 0.7 * w);
            const A = tb.a * tx + tb.c * ty, B = tb.b * tx + tb.d * ty, C = -tb.a * ty + tb.c * tx, Dd = -tb.b * ty + tb.d * tx;
            g.setTransform(A, B, C, Dd, tb.a * x + tb.c * y + tb.e, tb.b * x + tb.d * y + tb.f);
            const sx1 = ((s1 - kay1) % DOKU_W + DOKU_W) % DOKU_W;
            g.drawImage(doku, sx1, 0, ST + 1, DOKU_H, -0.5, -h, ST + 1.2, h * 2);
            if (iki) {
              const sx2 = ((s1 * 1.7 - kay2) % DOKU_W + DOKU_W) % DOKU_W, h2 = h * 0.62;
              g.globalAlpha = hov ? 0.55 : 0.4;
              g.drawImage(doku, sx2, 0, ST * 1.7 + 1, DOKU_H, -0.5, -h2, ST + 1.2, h2 * 2);
              g.globalAlpha = hov ? 1 : 0.9;
            }
          }
          g.setTransform(tb);
          g.globalAlpha = 1; g.globalCompositeOperation = 'lighter';
          // pırıltılar
          g.fillStyle = `rgba(${acik},0.9)`;
          for (let k = 0; k < Lpx / 30; k++) {
            const s1 = (k * 30 + T * 26 * zs + (k * 53.7) % 30) % Lpx, w = inc(s1);
            const tw = Math.sin(T * 4.2 + k * 2.1); if (tw < 0.6 || w < 0.3) continue;
            const [x, y, tx, ty] = segNokta(seg, s1), o = Math.sin(k * 7.7) * HW * 0.55;
            g.beginPath(); g.arc(x - ty * o, y + tx * o, 0.9 + (tw - 0.6) * 2, 0, 7); g.fill();
          }
          g.globalCompositeOperation = 'source-over';
        }
        yolUclari(d, `rgba(${col},0.95)`, true);
        const [mx, my, mz] = P(...yolNokta(d, d.L / 2));
        if (mz > 0.12 && (view.z >= 1.5 || hov)) text(mx, my - 10, (sicak ? '🔥 ' : '❄️ ') + a.ad.split(' (')[0], { size: 10.5, w: 700, col: sicak ? '#ffd9c2' : '#d2f0ff', halo: 3, haloCol: 'rgba(10,20,38,0.85)' });
        yolHit({ kind: 'akinti', a }, d, 8);
        g.restore();
      }
      for (const o of OK.olaylar || []) {
        const [x, y, z] = P(...o.ll); if (z <= 0.08) continue;
        const hov = hover && hover.kind === 'denizolay' && hover.o === o;
        // Arka plansız, dönen gerçek efekt: girdapta merkeze sarılan köpük kolları, kasırgada gözlü bulut sarmalı.
        // İki katman farklı hızda döner (derinlik); kasırga kuzey yarımkürede saat yönünün tersine, güneyde saat yönünde döner.
        const girdap = o.tip === 'girdap', buyut = hov ? 1.15 : 1;
        const s0 = (girdap ? clamp(11 + view.z * 4.5, 15, 30) : clamp(12 + view.z * 4.5, 17, 32)) * buyut;
        g.save(); g.translate(x, y);
        if (girdap) {
          const zm = girdapResim();
          g.save(); g.rotate(T * 1.1); g.drawImage(mipSec(zm, s0 * 2), -s0, -s0, s0 * 2, s0 * 2); g.restore();
          g.save(); g.rotate(T * 2.3 + 1); g.globalAlpha = 0.8; g.drawImage(mipSec(zm, s0 * 1.16), -s0 * 0.58, -s0 * 0.58, s0 * 1.16, s0 * 1.16); g.restore();
          const nb = (T * 0.6) % 1;   // dışarıdan içeri daralan halka: suyun çekildiği hissi
          g.strokeStyle = `rgba(210,244,255,${0.45 * nb})`; g.lineWidth = 1.2; g.beginPath(); g.arc(0, 0, s0 * (1.08 - 0.5 * nb), 0, 7); g.stroke();
        } else {
          const im = mipSec(kasirgaResim(), s0 * 2), yn = o.ll[0] < 0 ? -1 : 1;
          g.scale(yn, 1);
          // bulutun denize düşen gölgesi: aynı sarmalın koyu, kaydırılmış kopyası yerine hafif bir leke (hızlı)
          g.fillStyle = 'rgba(6,20,40,0.16)'; g.beginPath(); g.arc(s0 * 0.10 * yn, s0 * 0.14, s0 * 0.66, 0, 7); g.fill();
          g.save(); g.rotate(-T * 0.7); g.drawImage(im, -s0, -s0, s0 * 2, s0 * 2); g.restore();
          if (hov) { g.strokeStyle = 'rgba(255,214,102,0.8)'; g.lineWidth = 1.4; g.beginPath(); g.arc(0, 0, s0 * 0.98, 0, 7); g.stroke(); }
        }
        g.restore();
        if (view.z >= 1.6 || hov) text(x, y + s0 + 9, o.ad.split(' (')[0], { size: 10.5, w: 700, col: girdap ? '#c8f2ff' : '#ffd9c2', halo: 3, haloCol: 'rgba(10,18,34,0.85)' });
        hits.push({ kind: 'denizolay', o, x0: x - s0 * 0.8, x1: x + s0 * 0.8, y0: y - s0 * 0.8, y1: y + s0 * 0.8 });
      }
    }
    // 💨 Dünyayı değiştiren yıllık rüzgâr dalgaları ve küresel rüzgâr sistemleri (data/atlas/ruzgarlar.js)
    if (layers.ruzgar && window.ATLAS_RUZGARLAR) {
      for (const rz of window.ATLAS_RUZGARLAR) {
        const d = yolHazirla(rz), hov = hover && hover.kind === 'ruzgar' && hover.rz === rz;
        const col = rz.renk || '#38bdf8';
        g.save(); g.lineCap = 'round'; g.lineJoin = 'round';
        // Hava koridoru + iki katman akan tüy gibi hava çizgileri + parlayan, kıvrılarak geçen rüzgâr hamleleri
        g.beginPath(); linePath(d.p);
        g.strokeStyle = hexA(col, hov ? 0.16 : 0.06); g.lineWidth = hov ? 30 : 22; g.stroke();
        const segs = ekranParcalari(d.p);
        const zs = clamp(view.z / 1.6, 0.85, 1.8), HW = (hov ? 13 : 10.5) * zs, rdoku = ruzgarDokusu(col);
        for (const seg of segs) {
          const Lpx = seg[seg.length - 1][2]; if (Lpx < 12) continue;
          const inc = s1 => Math.min(1, s1 / 60, (Lpx - s1) / 60);
          g.globalAlpha = hov ? 1 : 0.85; dokuAkit(seg, Lpx, rdoku, HW, T * 46 * zs, 1.0, hareket ? 30 : 22, inc);
          if (!hareket && (hov || view.z > 1.5)) { g.globalAlpha = hov ? 0.7 : 0.5; dokuAkit(seg, Lpx, rdoku, HW * 0.6, T * 82 * zs, 1.6, 24, inc); }
          g.globalAlpha = 1;
          // rüzgâr hamleleri: uzun kuyruklu, kıvrılarak ilerleyen parlak çizgiler
          g.globalCompositeOperation = 'lighter';
          const per = 170 * zs, hiz = 95 * zs, uz = 80 * zs, KD = 4;
          const kova = Array.from({ length: KD }, () => new Path2D());   // aynı saydamlıktaki parçalar tek seferde çizilir
          for (const lane of [-0.45, 0.5]) {
            const off = (T * hiz + (lane + 1) * 63) % per;
            for (let s0 = off - per; s0 < Lpx; s0 += per) {
              let onceki = null;
              for (let k = 0; k <= 8; k++) {
                const sk = s0 + uz * k / 8; if (sk < 0 || sk > Lpx) { onceki = null; continue; }
                const [x, y, tx, ty] = segNokta(seg, sk), w = inc(sk);
                const o = (lane * HW + Math.sin(sk * 0.045 - T * 2.4 + lane * 3) * HW * 0.35) * (0.3 + 0.7 * w);
                const nk = [x - ty * o, y + tx * o];
                if (onceki && w > 0.15) { const b = Math.min(KD - 1, Math.floor((k - 1) / 2)); kova[b].moveTo(onceki[0], onceki[1]); kova[b].lineTo(nk[0], nk[1]); }
                onceki = nk;
              }
            }
          }
          for (let b = 0; b < KD; b++) {
            g.strokeStyle = `rgba(255,255,255,${((b + 1) / KD) ** 1.5 * (hov ? 0.95 : 0.7)})`;
            g.lineWidth = (hov ? 1.9 : 1.4) * (0.45 + 0.55 * (b + 1) / KD);
            g.stroke(kova[b]);
          }
          g.globalCompositeOperation = 'source-over';
        }
        yolUclari(d, hov ? '#fff7dc' : col, true);
        const [mx, my, mz] = P(...yolNokta(d, d.L / 2));
        const rzAd = `${rz.ik} ${rz.ad.split(' (')[0]}`;
        if (mz > 0.12 && (view.z >= 1.25 || hov)) {
          lab(hov ? 98 : 62, mx, my - 11, rzAd, { size: 10.5, w: 700, col: '#f0f9ff', halo: 3.2, haloCol: 'rgba(10,20,38,0.9)', kay: true });
          const hw = rzAd.length * 3.3 + 6; hits.push({ kind: 'ruzgar', rz, x0: mx - hw, x1: mx + hw, y0: my - 22, y1: my });
        }
        yolHit({ kind: 'ruzgar', rz }, d, 11);
        g.restore();
      }
    }
    // 🏺 Tarihî Kazılar & 🦴 Fosil Buluntuları (data/atlas/kazilar.js)
    const KZ = window.ATLAS_KAZILAR;
    if (KZ && (layers.tarihkazi || layers.fosilkazi)) {
      const cizKazilar = (liste, kind, bg, border) => {
        const shownKz = [], minSep = view.z >= 3.5 ? 14 : 22;
        for (const kz of liste || []) {
          const [x, y, z] = P(...kz.ll); if (z <= 0.1 || x < -20 || x > W + 20 || y < -20 || y > H + 20) continue;
          if (shownKz.some(q => Math.abs(q[0] - x) < minSep && Math.abs(q[1] - y) < minSep)) continue;
          shownKz.push([x, y]);
          const hov = hover && hover.kind === kind && hover.kz === kz, s0 = hov ? 12.5 : 10;
          g.fillStyle = bg; g.strokeStyle = hov ? '#ffd666' : border; g.lineWidth = hov ? 2.4 : 1.6;
          g.font = `${hov ? 13 : 11}px Atkinson Hyperlegible Next, system-ui`; g.textAlign = 'center'; g.textBaseline = 'middle';
          simge(kz.ik || (kind === 'fosilkazi' ? '🦴' : '🏺'), x, y, s0); g.textBaseline = 'alphabetic';
          obstacle(x - s0 - 2, y - s0 - 2, x + s0 + 2, y + s0 + 2);
          if (view.z >= 1.55 || hov) lab(hov ? 97 : 58, x, y + s0 + 10, kz.ad.split(' (')[0], { size: 10.5, w: 700, col: kind === 'fosilkazi' ? '#fef08a' : '#ffe8c2', halo: 3, haloCol: 'rgba(24,14,8,0.88)', kay: true });
          hits.push({ kind, kz, x0: x - s0 - 4, x1: x + s0 + 4, y0: y - s0 - 4, y1: y + s0 + 4 });
        }
      };
      if (layers.tarihkazi) cizKazilar(KZ.tarih, 'tarihkazi', 'rgba(148,66,28,0.92)', '#fde68a');
      if (layers.fosilkazi) cizKazilar(KZ.doga, 'fosilkazi', 'rgba(120,76,18,0.92)', '#a7f3d0');
    }
    // 🌿 Doğa Atlası Genişleme Katmanları (data/atlas/doga-ek.js)
    const DEK = window.ATLAS_DOGA_EK;
    if (DEK) {
      // Paralel/Meridyen çizgi yardımcısı (tüm çizgi ve etiket boyunca tıklanabilir!)
      const czBul = id => (DEK.cizgiler || []).find(c => c.id === id);
      const labHit = (obj, lx, ly, txt) => { const hw = txt.length * 3.4 + 6; hits.push({ ...obj, x0: lx - hw, x1: lx + hw, y0: ly - 11, y1: ly + 4 }); };
      const plHitEkle = (obj, pl, r) => {
        if (!pl.length) return;
        let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
        for (const s of pl) for (let i = 0; i < s.length; i += 2) { if (s[i] < x0) x0 = s[i]; if (s[i] > x1) x1 = s[i]; if (s[i + 1] < y0) y0 = s[i + 1]; if (s[i + 1] > y1) y1 = s[i + 1]; }
        hits.unshift({ ...obj, pl, r, x0: x0 - r, x1: x1 + r, y0: y0 - r, y1: y1 + r });
      };
      const cizParalel = (la, col, lw, dash, etiket, cz, hitObj) => {
        const ho = hitObj || (cz ? { kind: 'cizgi', cz } : null);
        const hov = ho && hover && ((ho.kind === 'cizgi' && hover.kind === 'cizgi' && hover.cz === ho.cz) || (ho.kind === 'manyetik' && hover.kind === 'manyetik' && hover.mn === ho.mn));
        g.save(); g.strokeStyle = hov ? '#ffffff' : col; g.lineWidth = hov ? lw + 2 : lw; if (dash) g.setLineDash(dash);
        g.beginPath(); let open = false, ex = null, ey = null;
        const pl = []; let cur = null;
        for (let lo = -180; lo <= 180; lo += 4) {
          const [x, y, z] = P(la, lo);
          if (z > 0.02) {
            if (!open) { g.moveTo(x, y); open = true; cur = []; pl.push(cur); } else g.lineTo(x, y);
            cur.push(x, y);
            if (Math.abs(lo - Math.round(view.lon / 4) * 4) <= 6) { ex = x; ey = y; }
          } else { open = false; cur = null; }
        }
        g.stroke(); g.restore();
        if (ho) plHitEkle(ho, pl, 11);
        if (etiket && ex != null && ey != null) {
          lab(hov ? 99 : 64, ex, ey - 7, etiket, { size: hov ? 11 : 10, w: 700, col: hov ? '#ffffff' : col, halo: 3, haloCol: 'rgba(10,16,28,0.9)', kay: true });
          if (ho) labHit(ho, ex, ey - 7, etiket);
        }
      };
      const cizMeridyen = (lo, col, lw, dash, etiket, cz) => {
        const ho = cz ? { kind: 'cizgi', cz } : null;
        const hov = ho && hover && hover.kind === 'cizgi' && hover.cz === cz;
        g.save(); g.strokeStyle = hov ? '#ffffff' : col; g.lineWidth = hov ? lw + 2 : lw; if (dash) g.setLineDash(dash);
        g.beginPath(); let open = false, ex = null, ey = null;
        const pl = []; let cur = null;
        for (let la = -84; la <= 84; la += 4) {
          const [x, y, z] = P(la, lo);
          if (z > 0.02) {
            if (!open) { g.moveTo(x, y); open = true; cur = []; pl.push(cur); } else g.lineTo(x, y);
            cur.push(x, y);
            if (Math.abs(la - clamp(Math.round(view.lat / 4) * 4, -60, 60)) <= 4) { ex = x; ey = y; }
          } else { open = false; cur = null; }
        }
        g.stroke(); g.restore();
        if (ho) plHitEkle(ho, pl, 11);
        if (etiket && ex != null && ey != null) {
          lab(hov ? 99 : 62, ex + 4, ey, etiket, { size: hov ? 10.5 : 9.5, w: 700, col: hov ? '#ffffff' : col, halo: 2.8, haloCol: 'rgba(10,16,28,0.9)', kay: true });
          if (ho) labHit(ho, ex + 4, ey, etiket);
        }
      };
      // 1) 🌡️ İklim Kuşakları, Biyomlar & Ekvator/Dönenceler
      if (layers.iklim) {
        g.save();
        g.beginPath(); g.arc(cx, cy, R, 0, 7); g.clip();
        for (const b of DEK.iklimBantlar || []) {
          for (const sgn of (b.lat0 < 0 ? [1] : [1, -1])) {
            const a0 = b.lat0 < 0 ? b.lat0 : sgn * b.lat0, a1 = b.lat0 < 0 ? b.lat1 : sgn * b.lat1;
            const loL = []; const loU = [];
            for (let lo = -180; lo <= 180; lo += 6) {
              const p0 = P(a0, lo), p1 = P(a1, lo);
              if (p0[2] > 0.02) loL.push(p0);
              if (p1[2] > 0.02) loU.push(p1);
            }
            if (loL.length > 2 && loU.length > 2) {
              g.beginPath();
              loL.forEach((q, i) => i ? g.lineTo(q[0], q[1]) : g.moveTo(q[0], q[1]));
              for (let i = loU.length - 1; i >= 0; i--) g.lineTo(loU[i][0], loU[i][1]);
              g.closePath(); g.fillStyle = hexA(b.renk, 0.14); g.fill();
            }
          }
        }
        g.restore();
        cizParalel(0, '#fde047', 1.8, [7, 4], '☀️ Ekvator (0°)', czBul('cz-ekvator'));
        cizParalel(23.44, '#fb923c', 1.4, [5, 5], 'Yengeç Dönencesi (23,4°K)', czBul('cz-yengec'));
        cizParalel(-23.44, '#fb923c', 1.4, [5, 5], 'Oğlak Dönencesi (23,4°G)', czBul('cz-oglak'));
        cizParalel(66.56, '#7dd3fc', 1.3, [4, 4], 'Kuzey Kutup Dairesi (66,5°K)', czBul('cz-kkutup'));
        cizParalel(-66.56, '#7dd3fc', 1.3, [4, 4], 'Güney Kutup Dairesi (66,5°G)', czBul('cz-gkutup'));
        cizMeridyen(0, 'rgba(255,246,210,0.68)', 1.2, [4, 4], '0° Greenwich', czBul('cz-greenwich'));
        for (const n of DEK.iklimNoktalar || []) {
          const b = DEK.iklimBantlar.find(x => x.id === n.band); if (!b) continue;
          const [x, y, z] = P(...n.ll); if (z <= 0.12 || x < -20 || x > W + 20 || y < -20 || y > H + 20) continue;
          const hov = hover && hover.kind === 'iklim' && hover.n === n, r0 = hov ? 12 : 9.5;
          g.fillStyle = hexA(b.renk, 0.92); g.strokeStyle = hov ? '#fff' : '#fef9c3'; g.lineWidth = hov ? 2.4 : 1.5;
          g.font = `${hov ? 13 : 11}px Atkinson Hyperlegible Next, system-ui`; g.textAlign = 'center'; g.textBaseline = 'middle';
          simge(b.ik, x, y, r0); g.textBaseline = 'alphabetic';
          const lbl = n.ad.split(' (')[0];
          if (view.z >= 1.3 || hov) { lab(hov ? 97 : 56, x, y + r0 + 10, lbl, { size: 10, w: 700, col: '#fef9c3', halo: 3, haloCol: 'rgba(12,18,28,0.88)', kay: true }); labHit({ kind: 'iklim', n, b }, x, y + r0 + 10, lbl); }
          hits.push({ kind: 'iklim', n, b, x0: x - r0 - 4, x1: x + r0 + 4, y0: y - r0 - 4, y1: y + r0 + 4 });
        }
      }
      // 2) 🌊 Okyanus Tabanı: Çukurlar, Denizaltı Sıradağları & Mercan Resifleri
      if (layers.taban && DEK.okyanusTaban) {
        for (const sr of DEK.okyanusTaban.sirtlar || []) {
          const d = yolHazirla(sr), hov = hover && hover.kind === 'tabansirt' && hover.sr === sr;
          g.save(); g.lineCap = 'round'; g.lineJoin = 'round';
          g.beginPath(); linePath(d.p);
          g.strokeStyle = hov ? 'rgba(56,189,248,0.45)' : 'rgba(14,165,233,0.22)'; g.lineWidth = hov ? 11 : 7.5; g.stroke();
          g.beginPath(); linePath(d.p);
          g.strokeStyle = hov ? '#fde047' : '#38bdf8'; g.lineWidth = hov ? 2.8 : 2; g.setLineDash([7, 5]); g.lineDashOffset = -T * 18; g.stroke();
          g.restore();
          const [mx, my, mz] = P(...yolNokta(d, d.L / 2));
          if (mz > 0.12 && (view.z >= 1.2 || hov)) {
            const srLbl = `🏔️ ${sr.ad}`;
            lab(hov ? 97 : 58, mx, my - 9, srLbl, { size: 10, w: 700, col: '#bae6fd', halo: 3, haloCol: 'rgba(8,20,38,0.9)', kay: true });
            labHit({ kind: 'tabansirt', sr }, mx, my - 9, srLbl);
          }
          yolHit({ kind: 'tabansirt', sr }, d, 10);
        }
        for (const t of DEK.okyanusTaban.noktalar || []) {
          const [x, y, z] = P(...t.ll); if (z <= 0.1 || x < -20 || x > W + 20 || y < -20 || y > H + 20) continue;
          const hov = hover && hover.kind === 'taban' && hover.t === t, r0 = hov ? 12.5 : 10;
          const bg = t.tur === 'cukur' ? 'rgba(15,23,66,0.94)' : t.tur === 'resif' ? 'rgba(190,24,93,0.9)' : 'rgba(124,45,18,0.92)';
          const bd = t.tur === 'cukur' ? '#60a5fa' : t.tur === 'resif' ? '#fbcfe8' : '#fdba74';
          g.fillStyle = bg; g.strokeStyle = hov ? '#fde047' : bd; g.lineWidth = hov ? 2.4 : 1.7;
          g.font = `${hov ? 13 : 11}px Atkinson Hyperlegible Next, system-ui`; g.textAlign = 'center'; g.textBaseline = 'middle';
          simge(t.ik, x, y, r0); g.textBaseline = 'alphabetic';
          obstacle(x - r0 - 2, y - r0 - 2, x + r0 + 2, y + r0 + 2);
          const lbl = t.ad.split(' (')[0];
          if (view.z >= 1.35 || hov) { lab(hov ? 97 : 58, x, y + r0 + 10, lbl, { size: 10.2, w: 700, col: bd, halo: 3, haloCol: 'rgba(8,14,28,0.9)', kay: true }); labHit({ kind: 'taban', t }, x, y + r0 + 10, lbl); }
          hits.push({ kind: 'taban', t, x0: x - r0 - 4, x1: x + r0 + 4, y0: y - r0 - 4, y1: y + r0 + 4 });
        }
      }
      // 3) 🌌 Kutup Işıkları (Aurora), Buz Örtüleri & Buzul Çağı Kara Köprüleri
      if (layers.kutup) {
        // Parlayan animasyonlu Kuzey & Güney Aurora ovali (şerit boyunca tıklanabilir!)
        for (const [en, aId] of [[67.5, 'aurora-kuzey'], [-68.0, 'aurora-guney']]) {
          const aObj = (DEK.kutup || []).find(x => x.id === aId);
          g.save(); g.lineCap = 'round';
          const pl = []; let cur = null;
          for (const [off, col, lw] of [[0, 'rgba(52,211,153,0.38)', 10], [1.4, 'rgba(167,139,250,0.30)', 6], [-0.8, 'rgba(110,231,183,0.72)', 2.4]]) {
            g.beginPath(); let open = false;
            for (let lo = -180; lo <= 180; lo += 4) {
              const wv = Math.sin(lo * 0.14 + T * 2.1 + off) * 1.4 + Math.cos(lo * 0.08 - T * 1.3) * 0.9;
              const [x, y, z] = P(en + off + wv, lo);
              if (z > 0.03) {
                if (!open) { g.moveTo(x, y); open = true; if (off === 0) { cur = []; pl.push(cur); } } else g.lineTo(x, y);
                if (off === 0) cur.push(x, y);
              } else { open = false; if (off === 0) cur = null; }
            }
            g.strokeStyle = col; g.lineWidth = lw; g.stroke();
          }
          g.restore();
          if (aObj) plHitEkle({ kind: 'kutup', k: aObj }, pl, 12);
        }
        for (const k of DEK.kutup || []) {
          const [x, y, z] = P(...k.ll); if (z <= 0.08 || x < -20 || x > W + 20 || y < -20 || y > H + 20) continue;
          const hov = hover && hover.kind === 'kutup' && hover.k === k, r0 = hov ? 12.5 : 10;
          const bg = k.tur === 'aurora' ? 'rgba(16,185,129,0.88)' : k.tur === 'buzul' ? 'rgba(30,64,175,0.88)' : 'rgba(120,80,35,0.92)';
          g.fillStyle = bg; g.strokeStyle = hov ? '#fde047' : '#e0f2fe'; g.lineWidth = hov ? 2.4 : 1.7;
          g.font = `${hov ? 13 : 11}px Atkinson Hyperlegible Next, system-ui`; g.textAlign = 'center'; g.textBaseline = 'middle';
          simge(k.ik, x, y, r0); g.textBaseline = 'alphabetic';
          const lbl = k.ad.split(' (')[0];
          if (view.z >= 1.2 || hov) { lab(hov ? 97 : 59, x, y + r0 + 10, lbl, { size: 10.2, w: 700, col: '#e0f2fe', halo: 3, haloCol: 'rgba(8,16,32,0.9)', kay: true }); labHit({ kind: 'kutup', k }, x, y + r0 + 10, lbl); }
          hits.push({ kind: 'kutup', k, x0: x - r0 - 4, x1: x + r0 + 4, y0: y - r0 - 4, y1: y + r0 + 4 });
        }
      }
      // 4) ☄️ Göktaşı Kraterleri (eşmerkezli şok halkaları!)
      if (layers.krater) {
        for (const kr of DEK.kraterler || []) {
          const [x, y, z] = P(...kr.ll); if (z <= 0.1 || x < -20 || x > W + 20 || y < -20 || y > H + 20) continue;
          const hov = hover && hover.kind === 'krater' && hover.kr === kr, r0 = hov ? 12 : 9.5;
          const pulse = 1 + Math.sin(T * 2.5 + kr.ll[0]) * 0.14;
          g.save();
          g.strokeStyle = hov ? 'rgba(253,224,71,0.85)' : 'rgba(251,146,60,0.55)'; g.lineWidth = 1.4;
          g.beginPath(); g.arc(x, y, (r0 + 5) * pulse, 0, 7); g.stroke();
          g.setLineDash([3, 3]); g.beginPath(); g.arc(x, y, (r0 + 9) * pulse, 0, 7); g.stroke();
          g.restore();
          g.fillStyle = 'rgba(124,45,18,0.92)'; g.strokeStyle = hov ? '#fde047' : '#fdba74'; g.lineWidth = hov ? 2.4 : 1.6;
          g.font = `${hov ? 13 : 11}px Atkinson Hyperlegible Next, system-ui`; g.textAlign = 'center'; g.textBaseline = 'middle';
          simge('☄️', x, y, r0); g.textBaseline = 'alphabetic';
          const lbl = kr.ad.split(' (')[0];
          if (view.z >= 1.3 || hov) { lab(hov ? 97 : 58, x, y + r0 + 12, lbl, { size: 10.2, w: 700, col: '#fed7aa', halo: 3, haloCol: 'rgba(24,10,6,0.9)', kay: true }); labHit({ kind: 'krater', kr }, x, y + r0 + 12, lbl); }
          hits.push({ kind: 'krater', kr, x0: x - r0 - 8, x1: x + r0 + 8, y0: y - r0 - 8, y1: y + r0 + 8 });
        }
      }
      // 5) 💧 Büyük Göller & Dev Şelaleler
      if (layers.gol) {
        for (const gl of DEK.golSelale || []) {
          const [x, y, z] = P(...gl.ll); if (z <= 0.1 || x < -20 || x > W + 20 || y < -20 || y > H + 20) continue;
          const hov = hover && hover.kind === 'gol' && hover.gl === gl, r0 = hov ? 12 : 9.5;
          g.fillStyle = gl.tur === 'selale' ? 'rgba(6,182,212,0.92)' : 'rgba(29,78,216,0.92)';
          g.strokeStyle = hov ? '#fde047' : '#bae6fd'; g.lineWidth = hov ? 2.4 : 1.6;
          g.font = `${hov ? 13 : 11}px Atkinson Hyperlegible Next, system-ui`; g.textAlign = 'center'; g.textBaseline = 'middle';
          simge(gl.ik, x, y, r0); g.textBaseline = 'alphabetic';
          const lbl = gl.ad.split(' (')[0];
          if (view.z >= 1.35 || hov) { lab(hov ? 97 : 57, x, y + r0 + 10, lbl, { size: 10.2, w: 700, col: '#e0f2fe', halo: 3, haloCol: 'rgba(8,20,42,0.9)', kay: true }); labHit({ kind: 'gol', gl }, x, y + r0 + 10, lbl); }
          hits.push({ kind: 'gol', gl, x0: x - r0 - 4, x1: x + r0 + 4, y0: y - r0 - 4, y1: y + r0 + 4 });
        }
      }
      // 6) 🕐 24 Saat Dilimi, Tarih Değiştirme Çizgisi (180°) & Canlı Şehir Saatleri
      if (layers.saat) {
        for (let h = -11; h <= 12; h++) {
          const lo = h * 15;
          if (h === 0) cizMeridyen(0, '#fde047', 1.8, [6, 4], 'UTC 0°', czBul('cz-greenwich'));
          else if (h === 12) cizMeridyen(180, '#fb7185', 2.0, [5, 3], '📅 Tarih Değiştirme (180°)', czBul('cz-tarih180'));
          else cizMeridyen(lo, 'rgba(226,232,240,0.28)', 0.9, [3, 5], view.z >= 1.4 ? `UTC${h > 0 ? '+' + h : h}` : null);
        }
        const nowMs = Date.now();
        for (const s of DEK.saatSehirler || []) {
          const [x, y, z] = P(...s.ll); if (z <= 0.12 || x < -20 || x > W + 20 || y < -20 || y > H + 20) continue;
          const dtLoc = new Date(nowMs + s.utc * 3600000);
          const hh = String(dtLoc.getUTCHours()).padStart(2, '0'), mm = String(dtLoc.getUTCMinutes()).padStart(2, '0');
          const txt = `${s.ad} ${hh}:${mm}`;
          g.save(); g.font = '700 10.5px Atkinson Hyperlegible Next, system-ui';
          const tw = g.measureText(txt).width + 12, th = 19;
          g.fillStyle = 'rgba(15,23,42,0.88)'; g.strokeStyle = '#fbbf24'; g.lineWidth = 1.2;
          g.beginPath(); g.roundRect(x - tw / 2, y - th / 2, tw, th, 6); g.fill(); g.stroke();
          g.fillStyle = '#fef3c7'; g.textAlign = 'center'; g.textBaseline = 'middle';
          g.fillText(txt, x, y + 0.5); g.restore();
          hits.push({ kind: 'saat', s, saat: `${hh}:${mm}`, x0: x - tw / 2, x1: x + tw / 2, y0: y - th / 2, y1: y + th / 2 });
        }
      }
      // 7) 🧲 Manyetik Kutuplar & Güney Atlantik Anomalisi
      if (layers.manyetik) {
        const mnTers = (DEK.manyetik || []).find(x => x.id === 'manyetik-tersinme');
        cizParalel(0, 'rgba(192,132,252,0.52)', 1.3, [5, 5], '🧲 Manyetik Ekvator', null, mnTers ? { kind: 'manyetik', mn: mnTers } : null);
        for (const mn of DEK.manyetik || []) {
          const hov = hover && hover.kind === 'manyetik' && hover.mn === mn, col = mn.renk || '#38bdf8';
          if (mn.pts && mn.pts.length >= 2) {
            const d = yolHazirla(mn);
            g.save(); g.lineCap = 'round'; g.lineJoin = 'round';
            g.beginPath(); linePath(d.p);
            g.strokeStyle = hexA(col, hov ? 0.95 : 0.72); g.lineWidth = hov ? 3.5 : 2.3; g.setLineDash([6, 4]); g.lineDashOffset = -T * 20; g.stroke();
            yolUclari(d, hov ? '#fff' : col, true);
            g.restore();
            yolHit({ kind: 'manyetik', mn }, d, 10);
          }
          const [x, y, z] = P(...mn.ll); if (z <= 0.08 || x < -20 || x > W + 20 || y < -20 || y > H + 20) continue;
          if (mn.tur === 'anomali') {
            const rad = clamp(R * 0.24, 24, 95) * (1 + Math.sin(T * 2.2) * 0.07);
            g.save(); g.fillStyle = hov ? 'rgba(244,63,94,0.32)' : 'rgba(244,63,94,0.18)'; g.strokeStyle = hov ? '#fff' : 'rgba(251,113,133,0.78)'; g.lineWidth = hov ? 2.2 : 1.6; g.setLineDash([5, 4]);
            g.beginPath(); g.ellipse(x, y, rad * 1.25, rad * 0.78, -0.25, 0, 7); g.fill(); g.stroke(); g.restore();
            hits.unshift({ kind: 'manyetik', mn, x0: x - rad * 1.15, x1: x + rad * 1.15, y0: y - rad * 0.72, y1: y + rad * 0.72 });
          }
          const r0 = hov ? 13 : 10.5;
          g.fillStyle = hexA(col, 0.92); g.strokeStyle = hov ? '#fff' : '#e0f2fe'; g.lineWidth = hov ? 2.4 : 1.7;
          g.font = `${hov ? 13.5 : 11.5}px Atkinson Hyperlegible Next, system-ui`; g.textAlign = 'center'; g.textBaseline = 'middle';
          simge(mn.ik, x, y, r0); g.textBaseline = 'alphabetic';
          const lbl = mn.ad.split(' (')[0];
          if (view.z >= 1.1 || hov) { lab(hov ? 98 : 62, x, y + r0 + 11, lbl, { size: 10.2, w: 700, col: '#f0f9ff', halo: 3, haloCol: 'rgba(10,16,32,0.9)', kay: true }); labHit({ kind: 'manyetik', mn }, x, y + r0 + 11, lbl); }
          hits.push({ kind: 'manyetik', mn, x0: x - r0 - 5, x1: x + r0 + 5, y0: y - r0 - 5, y1: y + r0 + 5 });
        }
      }
      // 8) 🌾 Dünya Tarım & Besin Anavatanları (Vavilov Merkezleri — Kapsamlı, tüm hale tıklanabilir!)
      if (layers.tarim) {
        for (const tr of DEK.tarim || []) {
          const [x, y, z] = P(...tr.ll); if (z <= 0.1 || x < -30 || x > W + 30 || y < -30 || y > H + 30) continue;
          const hov = hover && hover.kind === 'tarimvav' && hover.tr === tr, col = tr.renk || '#eab308';
          const haloR = clamp((tr.r || 7) * (R / 90), 16, 85);
          g.save();
          g.fillStyle = hexA(col, hov ? 0.30 : 0.17); g.strokeStyle = hexA(col, hov ? 0.9 : 0.55); g.lineWidth = hov ? 2.2 : 1.3; g.setLineDash([4, 3]);
          g.beginPath(); g.arc(x, y, haloR, 0, 7); g.fill(); g.stroke(); g.restore();
          hits.unshift({ kind: 'tarimvav', tr, x0: x - haloR * 0.85, x1: x + haloR * 0.85, y0: y - haloR * 0.85, y1: y + haloR * 0.85 });
          const r0 = hov ? 13 : 10.5;
          g.fillStyle = hexA(col, 0.94); g.strokeStyle = hov ? '#fff' : '#fef9c3'; g.lineWidth = hov ? 2.5 : 1.8;
          g.font = `${hov ? 14 : 11.5}px Atkinson Hyperlegible Next, system-ui`; g.textAlign = 'center'; g.textBaseline = 'middle';
          simge(tr.ik, x, y, r0); g.textBaseline = 'alphabetic';
          const lbl = tr.ad.split(' (')[0];
          if (view.z >= 1.15 || hov) { lab(hov ? 98 : 63, x, y + r0 + 11, lbl, { size: 10.5, w: 700, col: '#fefce8', halo: 3.2, haloCol: 'rgba(18,14,6,0.9)', kay: true }); labHit({ kind: 'tarimvav', tr }, x, y + r0 + 11, lbl); }
          hits.push({ kind: 'tarimvav', tr, x0: x - r0 - 5, x1: x + r0 + 5, y0: y - r0 - 5, y1: y + r0 + 5 });
        }
      }
    }
    // 🏛️ Tarih Atlası Genişleme Katmanları (data/atlas/tarih-ek.js)
    const TEK = window.ATLAS_TARIH_EK;
    if (TEK) {
      // 1) 🗣️ Yazının Doğuşu, Alfabeler & Dil Aileleri (temiz kalın renkli şeritler + odak karartma)
      if (layers.yazi) {
        const anyYaziHov = hover && hover.kind === 'yazi';
        for (const yz of TEK.yazilar || []) {
          const hov = anyYaziHov && hover.yz === yz, dim = anyYaziHov && !hov, col = yz.renk || '#f59e0b';
          if (yz.pts && yz.pts.length >= 2) {
            const d = yolHazirla(yz);
            g.save(); g.lineCap = 'round'; g.lineJoin = 'round';
            g.beginPath(); linePath(d.p);
            g.strokeStyle = hexA(col, hov ? 0.34 : dim ? 0.05 : 0.16); g.lineWidth = hov ? 12 : 7; g.stroke();
            g.beginPath(); linePath(d.p);
            g.strokeStyle = hexA(col, hov ? 0.96 : dim ? 0.18 : 0.65); g.lineWidth = hov ? 4.0 : 2.8; g.stroke();
            if (!dim) yolUclari(d, hov ? '#fff7dc' : col, true);
            g.restore();
            yolHit({ kind: 'yazi', yz }, d, 10);
          }
          const [x, y, z] = P(...yz.ll); if (z <= 0.1 || x < -20 || x > W + 20 || y < -20 || y > H + 20) continue;
          const r0 = hov ? 13 : 10.5;
          g.save(); if (dim) g.globalAlpha = 0.45;
          g.fillStyle = hexA(col, 0.94); g.strokeStyle = hov ? '#fff' : '#fef3c7'; g.lineWidth = hov ? 2.5 : 1.7;
          g.font = `${hov ? 13.5 : 11}px Atkinson Hyperlegible Next, system-ui`; g.textAlign = 'center'; g.textBaseline = 'middle';
          simge(yz.ik, x, y, r0); g.textBaseline = 'alphabetic'; g.restore();
          const lbl = yz.ad.split(' (')[0];
          if (view.z >= 1.25 || hov) { lab(hov ? 97 : 60, x, y + r0 + 10, lbl, { size: 10.2, w: 700, col: '#fef3c7', halo: 3, haloCol: 'rgba(20,12,6,0.9)', kay: true }); const hw = lbl.length * 3.4 + 6; hits.push({ kind: 'yazi', yz, x0: x - hw, x1: x + hw, y0: y + r0 - 1, y1: y + r0 + 14 }); }
          hits.push({ kind: 'yazi', yz, x0: x - r0 - 4, x1: x + r0 + 4, y0: y - r0 - 4, y1: y + r0 + 4 });
        }
      }
      // 2) 🕊️ Dinlerin & İnanç Sistemlerinin Doğuşu ve Yayılışı (temiz kalın renkli koridorlar + Yahudilik/Hristiyanlık ayrı!)
      if (layers.din) {
        const anyDinHov = hover && hover.kind === 'din';
        for (const dn of TEK.dinler || []) {
          const hov = anyDinHov && hover.dn === dn, dim = anyDinHov && !hov, col = dn.renk || '#eab308';
          for (const pts of dn.yollar || []) {
            const d = pts._d || (pts._d = yolHazirla({ pts }));
            g.save(); g.lineCap = 'round'; g.lineJoin = 'round';
            g.beginPath(); linePath(d.p);
            g.strokeStyle = hexA(col, hov ? 0.36 : dim ? 0.04 : 0.16); g.lineWidth = hov ? 13 : 8; g.stroke();
            g.beginPath(); linePath(d.p);
            g.strokeStyle = hexA(col, hov ? 0.98 : dim ? 0.16 : 0.66); g.lineWidth = hov ? 4.2 : 3.0; g.stroke();
            if (!dim) yolUclari(d, hov ? '#fff7dc' : col, true);
            g.restore();
            yolHit({ kind: 'din', dn }, d, 10);
          }
          const [x, y, z] = P(...dn.ll); if (z <= 0.1 || x < -20 || x > W + 20 || y < -20 || y > H + 20) continue;
          const r0 = hov ? 13.5 : 11;
          g.save(); if (dim) g.globalAlpha = 0.48;
          g.fillStyle = hexA(col, 0.95); g.strokeStyle = hov ? '#fff' : '#fef9c3'; g.lineWidth = hov ? 2.6 : 1.8;
          g.font = `${hov ? 14 : 12}px Atkinson Hyperlegible Next, system-ui`; g.textAlign = 'center'; g.textBaseline = 'middle';
          simge(dn.ik, x, y, r0); g.textBaseline = 'alphabetic'; g.restore();
          if (view.z >= 1.05 || hov) {
            const ly = dn.id === 'yahudilik' ? y + r0 + 12 : dn.id === 'hristiyanlik' ? y - r0 - 7 : y + r0 + 11;
            lab(hov ? 99 : 64, x, ly, dn.ad.split(' (')[0], { size: 10.5, w: 700, col: '#fffbeb', halo: 3.2, haloCol: 'rgba(18,12,8,0.92)', kay: true });
            const hw = dn.ad.split(' (')[0].length * 3.5 + 6; hits.push({ kind: 'din', dn, x0: x - hw, x1: x + hw, y0: ly - 11, y1: ly + 4 });
          }
          hits.push({ kind: 'din', dn, x0: x - r0 - 5, x1: x + r0 + 5, y0: y - r0 - 5, y1: y + r0 + 5 });
        }
      }
      // 3) 🏃 Tarih Çağlarındaki Büyük Göç Dalgaları (kalın temiz akış şeritleri + odak karartma)
      if (layers.tarihgoc) {
        const anyMgHov = hover && hover.kind === 'tarihgoc';
        for (const mg of TEK.buyukGoc || []) {
          const d = yolHazirla(mg), hov = anyMgHov && hover.mg === mg, dim = anyMgHov && !hov, col = mg.renk || '#f59e0b';
          g.save(); g.lineCap = 'round'; g.lineJoin = 'round';
          g.beginPath(); linePath(d.p);
          g.strokeStyle = hexA(col, hov ? 0.36 : dim ? 0.05 : 0.18); g.lineWidth = hov ? 14 : 9; g.stroke();
          g.beginPath(); linePath(d.p);
          g.strokeStyle = hov ? '#fff7dc' : hexA(col, dim ? 0.2 : 0.82); g.lineWidth = hov ? 4.4 : 3.2; g.stroke();
          if (!dim) yolUclari(d, hov ? '#fff7dc' : col, true);
          g.restore();
          const [mx, my, mz] = P(...yolNokta(d, d.L / 2));
          if (mz > 0.12 && (view.z >= 1.15 || hov)) {
            const txt = `${mg.ik} ${mg.ad.split(' (')[0]}`;
            lab(hov ? 98 : 61, mx, my - 10, txt, { size: 10.5, w: 700, col: '#fef3c7', halo: 3.2, haloCol: 'rgba(20,12,8,0.9)', kay: true });
            const hw = txt.length * 3.3 + 6; hits.push({ kind: 'tarihgoc', mg, x0: mx - hw, x1: mx + hw, y0: my - 21, y1: my });
          }
          yolHit({ kind: 'tarihgoc', mg }, d, 11);
        }
      }
      // 4) 🦠 Dünyayı Değiştiren Büyük Salgınlar (temiz kalın şerit + merkez nabzı + odak karartma)
      if (layers.salgin) {
        const anySgHov = hover && hover.kind === 'salgin';
        for (const sg of TEK.salginlar || []) {
          const hov = anySgHov && hover.sg === sg, dim = anySgHov && !hov, col = sg.renk || '#e11d48';
          if (sg.pts && sg.pts.length >= 2) {
            const d = yolHazirla(sg);
            g.save(); g.lineCap = 'round'; g.lineJoin = 'round';
            g.beginPath(); linePath(d.p);
            g.strokeStyle = hexA(col, hov ? 0.38 : dim ? 0.05 : 0.18); g.lineWidth = hov ? 13 : 8.5; g.stroke();
            g.beginPath(); linePath(d.p);
            g.strokeStyle = hov ? '#fecdd3' : hexA(col, dim ? 0.2 : 0.78); g.lineWidth = hov ? 4.0 : 2.9; g.stroke();
            if (!dim) yolUclari(d, hov ? '#fecdd3' : col, true);
            g.restore();
            yolHit({ kind: 'salgin', sg }, d, 10);
          }
          const [x, y, z] = P(...sg.ll); if (z <= 0.1 || x < -20 || x > W + 20 || y < -20 || y > H + 20) continue;
          const r0 = hov ? 13 : 10.5, pulse = 1 + Math.sin(T * 3 + sg.ll[0]) * 0.16;
          g.save(); if (dim) g.globalAlpha = 0.45;
          g.strokeStyle = hexA(col, 0.55); g.lineWidth = 1.6;
          g.beginPath(); g.arc(x, y, (r0 + 5) * pulse, 0, 7); g.stroke();
          g.fillStyle = hexA(col, 0.94); g.strokeStyle = hov ? '#fff' : '#fecdd3'; g.lineWidth = hov ? 2.5 : 1.7;
          g.font = `${hov ? 13.5 : 11}px Atkinson Hyperlegible Next, system-ui`; g.textAlign = 'center'; g.textBaseline = 'middle';
          simge(sg.ik, x, y, r0); g.textBaseline = 'alphabetic'; g.restore();
          const lbl = sg.ad.split(' (')[0];
          if (view.z >= 1.25 || hov) { lab(hov ? 97 : 60, x, y + r0 + 11, lbl, { size: 10.2, w: 700, col: '#ffe4e6', halo: 3, haloCol: 'rgba(28,6,14,0.9)', kay: true }); const hw = lbl.length * 3.4 + 6; hits.push({ kind: 'salgin', sg, x0: x - hw, x1: x + hw, y0: y + r0, y1: y + r0 + 15 }); }
          hits.push({ kind: 'salgin', sg, x0: x - r0 - 4, x1: x + r0 + 4, y0: y - r0 - 4, y1: y + r0 + 4 });
        }
      }
      // 6) ⚓ Stratejik Boğazlar & Tarihî Geçitler
      if (layers.bogaz) {
        for (const bg of TEK.bogazlar || []) {
          const [x, y, z] = P(...bg.ll); if (z <= 0.1 || x < -20 || x > W + 20 || y < -20 || y > H + 20) continue;
          const hov = hover && hover.kind === 'bogaz' && hover.bg === bg, r0 = hov ? 12 : 9.5;
          g.fillStyle = bg.tur === 'gecit' ? 'rgba(146,64,14,0.92)' : 'rgba(15,44,89,0.92)';
          g.strokeStyle = hov ? '#fde047' : (bg.tur === 'gecit' ? '#fcd34d' : '#7dd3fc'); g.lineWidth = hov ? 2.4 : 1.7;
          g.font = `${hov ? 12.5 : 10.5}px Atkinson Hyperlegible Next, system-ui`; g.textAlign = 'center'; g.textBaseline = 'middle';
          simge(bg.ik, x, y, r0); g.textBaseline = 'alphabetic';
          const lbl = bg.ad.split(' (')[0];
          if (view.z >= 1.4 || hov) { lab(hov ? 97 : 58, x, y + r0 + 11, lbl, { size: 10.2, w: 700, col: '#e0f2fe', halo: 3, haloCol: 'rgba(10,18,34,0.9)', kay: true }); const hw = lbl.length * 3.4 + 6; hits.push({ kind: 'bogaz', bg, x0: x - hw, x1: x + hw, y0: y + r0, y1: y + r0 + 15 }); }
          hits.push({ kind: 'bogaz', bg, x0: x - r0 - 4, x1: x + r0 + 4, y0: y - r0 - 4, y1: y + r0 + 4 });
        }
      }
      // 7) 🏙️ Tarih Boyunca Dünyanın En Büyük Şehirleri (Zaman Çizelgesine Göre 👑 Taç!)
      if (layers.megakent) {
        for (const mk of TEK.megakentler || []) {
          const [x, y, z] = P(...mk.ll); if (z <= 0.1 || x < -20 || x > W + 20 || y < -20 || y > H + 20) continue;
          const hov = hover && hover.kind === 'megakent' && hover.mk === mk;
          const kral = (mk.aralik || []).some(([a, b]) => Ycur <= a && Ycur >= b);
          const r0 = kral ? (hov ? 15 : 13) : (hov ? 12 : 9.5);
          if (kral) {
            const pR = r0 + 6 + Math.sin(T * 4) * 3;
            g.save(); g.strokeStyle = 'rgba(250,204,21,0.85)'; g.fillStyle = 'rgba(250,204,21,0.22)'; g.lineWidth = 2;
            g.beginPath(); g.arc(x, y, pR, 0, 7); g.fill(); g.stroke(); g.restore();
          }
          g.fillStyle = kral ? 'rgba(202,138,4,0.96)' : 'rgba(51,65,85,0.90)';
          g.strokeStyle = kral ? '#fef08a' : (hov ? '#fde047' : '#cbd5e1'); g.lineWidth = kral ? 2.6 : (hov ? 2.2 : 1.5);
          g.font = `${kral ? 14 : (hov ? 13 : 10.5)}px Atkinson Hyperlegible Next, system-ui`; g.textAlign = 'center'; g.textBaseline = 'middle';
          simge(kral ? '👑' : mk.ik, x, y, kral ? r0 * 1.15 : r0); g.textBaseline = 'alphabetic';
          if (kral || view.z >= 1.35 || hov) {
            const lbl = (kral ? '👑 ' : '') + mk.ad.split(' (')[0];
            lab(kral ? 99 : (hov ? 97 : 58), x, y + r0 + 11, lbl, { size: kral ? 11.2 : 10, w: 700, col: kral ? '#fef08a' : '#f1f5f9', halo: 3.2, haloCol: 'rgba(15,12,8,0.92)', kay: true });
            const hw = lbl.length * 3.5 + 6; hits.push({ kind: 'megakent', mk, kral, x0: x - hw, x1: x + hw, y0: y + r0, y1: y + r0 + 15 });
          }
          hits.push({ kind: 'megakent', mk, kral, x0: x - r0 - 4, x1: x + r0 + 4, y0: y - r0 - 4, y1: y + r0 + 4 });
        }
      }
    }
    // 💡🦉👑 Büyük İcatlar, Felsefi Akımlar ve Büyük İnsanlar (data/atlas/kultur-ek.js)
    const KEK = window.ATLAS_KULTUR_EK;
    if (KEK) {
      const cizKulturNokta = (liste, kind, bg, bd, txCol, zLbl) => {
        const shownK = [], minSep = view.z >= 3.5 ? 14 : 20;
        for (const it of liste || []) {
          const [x, y, z] = P(...it.ll); if (z <= 0.1 || x < -20 || x > W + 20 || y < -20 || y > H + 20) continue;
          if (shownK.some(q => Math.abs(q[0] - x) < minSep && Math.abs(q[1] - y) < minSep)) continue;
          shownK.push([x, y]);
          const hov = hover && hover.kind === kind && hover.it === it, r0 = hov ? 13 : 10.5;
          g.fillStyle = bg; g.strokeStyle = hov ? '#ffffff' : bd; g.lineWidth = hov ? 2.5 : 1.7;
          g.font = `${hov ? 13.5 : 11.5}px Atkinson Hyperlegible Next, system-ui`; g.textAlign = 'center'; g.textBaseline = 'middle';
          simge(it.ik || '✨', x, y, r0); g.textBaseline = 'alphabetic';
          const lbl = it.ad.split(' (')[0];
          if (view.z >= zLbl || hov) {
            lab(hov ? 98 : 61, x, y + r0 + 11, lbl, { size: 10.2, w: 700, col: txCol, halo: 3.1, haloCol: 'rgba(14,10,8,0.92)', kay: true });
            const hw = lbl.length * 3.4 + 6; hits.push({ kind, it, x0: x - hw, x1: x + hw, y0: y + r0, y1: y + r0 + 15 });
          }
          hits.push({ kind, it, x0: x - r0 - 4, x1: x + r0 + 4, y0: y - r0 - 4, y1: y + r0 + 4 });
        }
      };
      if (layers.icat) cizKulturNokta(KEK.icatlar, 'icat', 'rgba(180,83,9,0.93)', '#fde047', '#fef9c3', 1.25);
      if (layers.felsefe) cizKulturNokta(KEK.felsefeler, 'felsefe', 'rgba(88,28,135,0.93)', '#e9d5ff', '#f3e8ff', 1.15);
      if (layers.insanlar) cizKulturNokta(KEK.insanlar, 'insanlar', 'rgba(30,58,138,0.93)', '#93c5fd', '#eff6ff', 1.25);
    }
    // 🏔️ Doğa ve tarihî coğrafya bölgeleri (dağlar, doğa harikaları, çöller, havzalar — data/atlas/cografya-bolge.js)
    if (layers.cografya && window.ATLAS_COGRAFYA) {
      const CG_STIL = { harika: ['✨', '#b35c24'], dag: ['🏔️', '#546270'], col: ['🏜️', '#b88230'], havza: ['🌿', '#367d4a'], nehir: ['🌊', '#2a75ab'] };
      const ANA_CG = { kapadokya: 1, agri: 1, everest: 1, kilimanjaro: 1, alpler: 1, andlar: 1, sahra: 1, buyukkanyon: 1, uyuni: 1, setresifi: 1 };
      const uzak = view.z < 1.45;
      const minSep = uzak ? 54 : view.z >= 4 ? 12 : view.z >= 2.2 ? 18 : 24;
      const shownCg = [];
      for (const cg of window.ATLAS_COGRAFYA) {
        if (uzak && !ANA_CG[cg.id]) continue;
        const [x, y, z] = P(...cg.ll); if (z <= 0.1 || x < -20 || x > W + 20 || y < -20 || y > H + 20) continue;
        if (shownCg.some(q => Math.abs(q[0] - x) < minSep && Math.abs(q[1] - y) < minSep)) continue;
        shownCg.push([x, y]);
        const [ik, bg] = CG_STIL[cg.tur] || ['📍', '#5a4a3a'];
        const hov = hover && hover.kind === 'cografya' && hover.cg === cg, s0 = hov ? 12.5 : (uzak ? 8.5 : 10);
        g.fillStyle = bg; g.strokeStyle = hov ? '#ffd666' : (cg.tur === 'harika' ? '#ffe08a' : '#fff6dc'); g.lineWidth = hov ? 2.2 : 1.5;
        g.font = `${hov ? 13 : (uzak ? 9.5 : 11)}px Atkinson Hyperlegible Next, system-ui`; g.textAlign = 'center'; g.textBaseline = 'middle'; simge(ik, x, y, s0); g.textBaseline = 'alphabetic';
        obstacle(x - s0 - 2, y - s0 - 2, x + s0 + 2, y + s0 + 2);
        const kisaYuk = cg.yukseklik ? cg.yukseklik.split(' (')[0].split(' ·')[0] : '';
        const lbl = cg.tur === 'dag' && kisaYuk && (view.z >= 2.1 || hov) ? `${cg.ad.split(' (')[0]} · ${kisaYuk}` : cg.ad.split(' (')[0];
        if (view.z >= 1.55 || hov) lab(hov ? 95 : (cg.tur === 'harika' ? 60 : 55), x, y + s0 + 10, lbl, { size: 10.5, w: 700, col: cg.tur === 'harika' ? '#ffe8a8' : '#fff7e0', halo: 3, haloCol: 'rgba(32,20,10,0.85)', serif: true, kay: true });
        hits.push({ kind: 'cografya', cg, x0: x - s0 - 5, x1: x + s0 + 5, y0: y - s0 - 5, y1: y + s0 + 5 });
      }
    }
    // 🏞️ Dünya Nehir İsimleri (büyüklüğüne oranla yaklaştıkça/uzaklaştıkça belirir — data/atlas/nehirler.js)
    if ((layers.nehir || layers.cografya) && window.ATLAS_NEHIRLER) {
      for (const nr of window.ATLAS_NEHIRLER) {
        const minZ = nr.boy === 3 ? 1.55 : nr.boy === 2 ? 2.75 : 4.4;
        if (view.z < minZ) continue;
        const [x, y, z] = P(...nr.ll); if (z <= 0.1 || x < -24 || x > W + 24 || y < -24 || y > H + 24) continue;
        const hov = hover && hover.kind === 'nehir' && hover.nr === nr;
        const fa = clamp((view.z - minZ) / 0.65, 0.25, 1);
        const sz = nr.boy === 3 ? 11.2 : nr.boy === 2 ? 10.4 : 9.6;
        lab(hov ? 96 : 42 + nr.boy * 5, x, y, `~ ${nr.ad}`, { size: sz, w: 700, it: true, serif: true, col: hov ? '#ffe89c' : '#cdeeff', halo: 2.8, haloCol: 'rgba(14,42,68,0.9)', a: hov ? 1 : fa, kay: true });
        const hw = Math.max(28, nr.ad.length * 3.4);
        hits.push({ kind: 'nehir', nr, x0: x - hw, x1: x + hw, y0: y - 9, y1: y + 9 });
      }
    }
    // 🐋🦅 Hayvanların Yıllık Göç Döngüleri (data/atlas/hayvan-goc.js)
    if (layers.hayvangoc && window.ATLAS_HAYVAN_GOC) {
      for (const hg of window.ATLAS_HAYVAN_GOC) {
        const d = yolHazirla(hg), hov = hover && hover.kind === 'hayvangoc' && hover.hg === hg;
        const col = hov ? '#ffd666' : (hg.renk || '#34d399');
        g.save(); g.lineCap = 'round'; g.lineJoin = 'round';
        // Göç patikası: hayvanın renginde yumuşak parıltı, ince hat ve hat boyunca akan beyaz noktalar
        g.beginPath(); linePath(d.p);
        g.strokeStyle = hexA(col, hov ? 0.34 : 0.17); g.lineWidth = hov ? 9 : 6; g.stroke();
        g.strokeStyle = hexA(col, hov ? 0.95 : 0.6); g.lineWidth = hov ? 1.8 : 1.2; g.stroke();
        g.setLineDash([0.01, 13]); g.lineDashOffset = -T * 14;
        g.strokeStyle = hov ? 'rgba(255,250,225,0.98)' : 'rgba(255,255,255,0.85)'; g.lineWidth = hov ? 3.3 : 2.5; g.stroke();
        g.setLineDash([]); g.lineDashOffset = 0;
        // Mevsimsel çıkış ve varış yaşam alanı halkaları (yıllık döngü)
        const nP = d.pts.length, pulse = (T * 0.7) % 1;
        for (const pt of [d.pts[0], d.pts[nP - 1]]) {
          const [hx, hy, hz] = P(...pt);
          if (hz > 0.08) {
            g.strokeStyle = hexA(col, 0.55 * (1 - pulse)); g.lineWidth = 1.4;
            g.beginPath(); g.arc(hx, hy, 5 + pulse * 8, 0, 7); g.stroke();
            g.fillStyle = 'rgba(16,24,34,0.85)'; g.strokeStyle = col; g.lineWidth = 1.6;
            g.beginPath(); g.arc(hx, hy, 4.2, 0, 7); g.fill(); g.stroke();
          }
        }
        // Tek hayvan: rota boyunca gider, uçta soluklanıp geri döner (halka rotada durmadan döner). Uçanlar yerden yüksekte
        // uçar ve gölgeleri yere düşer; yüzenler arkalarında köpük ve halka bırakır; koşanlar toz kaldırır.
        const si = GOC_IDX[hg.id], spr = si != null ? gocSprite() : null;
        const faz = hg.pts[0][0] * 0.013 + hg.pts[0][1] * 0.007, kes = v => ((v % 1) + 1) % 1;
        let k, gy = 1;
        if (d.halka) k = kes(T / 11 + faz); else { const u = kes((T / 11 + faz) / 2) * 2; k = u < 1 ? u : 2 - u; gy = u < 1 ? 1 : -1; }
        const s = d.L * k, kmPx = 6371 / R();   // 1 pikselin kaç km ettiği: izler ekranda hep aynı boyda görünsün
        const geri = km2 => yolNokta(d, d.halka ? ((s - gy * km2) % d.L + d.L) % d.L : clamp(s - gy * km2, 0, d.L));
        let px = 0, py = 0, pz = -1;
        const [lx, ly, lz] = P(...yolNokta(d, s));
        if (lz > 0.08) {
          const ileri = Math.max(d.L * 0.012, 5 * kmPx), [ax2, ay2] = P(...geri(-ileri)), [bx2, by2] = P(...geri(ileri));
          const ang = Math.atan2(ay2 - by2, ax2 - bx2), uc = d.halka ? 1 : Math.min(1, k / 0.04, (1 - k) / 0.04);
          const r = clamp(5.5 + view.z * 3.1, 8, 22) + (hov ? 3 : 0);   // uzakta küçük, yaklaştıkça büyür
          const ort = spr ? GOC_TUR[si] : null, ortam = ort ? ort[0] : 'h', bk = ort ? ort[2] : 1, k2 = r * 2.05 * bk;
          const yuk = ortam === 'h' ? r * (1.0 + 0.24 * Math.sin(T * 1.7 + faz * 9)) : 0;   // uçuş yüksekliği (hafifçe alçalıp yükselir)
          const izPx = Math.min(r * (ortam === 'h' ? 5.5 : 4.2), d.L * 0.3 / kmPx);
          g.globalCompositeOperation = 'lighter';
          if (ortam === 'h') {
            // arkasında parlayan iz: yerden hayvana doğru yükselir
            const izk = [new Path2D(), new Path2D(), new Path2D()];
            let on = null;
            for (let i = 0; i <= 9; i++) {
              const [qx, qy, qz] = P(...geri(izPx * kmPx * (1 - i / 9)));
              if (qz <= 0.08) { on = null; continue; }
              const yy = qy - yuk * (0.35 + 0.65 * i / 9);
              if (on) { const b = Math.min(2, Math.floor((i - 1) / 3)); izk[b].moveTo(on[0], on[1]); izk[b].lineTo(qx, yy); }
              on = [qx, yy];
            }
            for (let b = 0; b < 3; b++) { g.strokeStyle = hexA(col, ((b + 1) / 3) ** 1.6 * 0.55 * uc); g.lineWidth = (hov ? 4.2 : 3.2) * (b + 1) / 3; g.stroke(izk[b]); }
            // kanatlarından geriye savrulan, kıvrılarak sönen rüzgâr çizgileri
            const dx = Math.cos(ang), dy = Math.sin(ang); g.lineWidth = 1.15;
            for (let j = 0; j < 4; j++) {
              const a = kes(T * 1.6 + j / 4 + faz * 3), yan = (j % 2 ? 1 : -1) * r * (0.55 + 0.35 * (j >> 1)), gp = r * (0.7 + 2.6 * a), uz = r * (0.7 + 0.9 * a), kv = yan * 0.35 * (0.4 + a);
              const bx = lx - dx * gp - dy * yan, by = ly - yuk - dy * gp + dx * yan;
              g.strokeStyle = `rgba(255,255,255,${Math.sin(Math.PI * a) * 0.62 * uc})`;
              g.beginPath(); g.moveTo(bx, by); g.quadraticCurveTo(bx - dx * uz * 0.5 - dy * kv * 0.3, by - dy * uz * 0.5 + dx * kv * 0.3, bx - dx * uz - dy * kv, by - dy * uz + dx * kv); g.stroke();
            }
          } else if (ortam === 's') {
            // V biçimli köpük izi + geride büyüyüp sönen su halkaları
            const nx = -Math.sin(ang), ny = Math.cos(ang), [tx2, ty2] = P(...geri(izPx * kmPx));
            const gr = g.createLinearGradient(lx, ly, tx2, ty2); gr.addColorStop(0, `rgba(235,250,255,${0.6 * uc})`); gr.addColorStop(1, 'rgba(235,250,255,0)');
            g.strokeStyle = gr; g.lineWidth = hov ? 1.9 : 1.4;
            for (const yan of [-1, 1]) {
              g.beginPath();
              for (let i = 0; i <= 7; i++) { const [qx, qy] = P(...geri(izPx * kmPx * i / 7)), ac = r * (0.18 + 0.85 * i / 7) * yan; i ? g.lineTo(qx + nx * ac, qy + ny * ac) : g.moveTo(qx + nx * ac, qy + ny * ac); }
              g.stroke();
            }
            for (let j = 0; j < 3; j++) {
              const a = kes(T * 0.5 + j / 3 + faz), [qx, qy, qz] = P(...geri(izPx * kmPx * a * 1.1)); if (qz <= 0.08) continue;
              g.strokeStyle = `rgba(215,242,255,${(1 - a) * 0.5 * uc})`; g.lineWidth = 1.2;
              g.beginPath(); g.ellipse(qx, qy, r * (0.3 + 1.25 * a), r * (0.3 + 1.25 * a) * 0.62, 0, 0, 7); g.stroke();
            }
          }
          g.globalCompositeOperation = 'source-over';
          if (ortam === 'k') for (let j = 0; j < 4; j++) {   // ayaklarının kaldırdığı toz
            const a = kes(T * 1.3 + j / 4 + faz), [qx, qy, qz] = P(...geri(izPx * kmPx * (0.15 + 0.85 * a))); if (qz <= 0.08) continue;
            g.fillStyle = `rgba(232,212,172,${(1 - a) * 0.5 * uc})`;
            g.beginPath(); g.arc(qx, qy + r * 0.5 - a * r * 0.7, r * (0.16 + 0.42 * a), 0, 7); g.fill();
          }
          px = lx; py = ly - yuk; pz = lz;
          if (spr) {
            // ekrandaki gidiş açısına en yakın yön karesi seçilir, kalan küçük fark döndürülerek tamamlanır
            let al = ang, ayna = 1; if (Math.cos(al) < 0) { al = Math.PI - al; ayna = -1; }
            al = Math.atan2(Math.sin(al), Math.cos(al));
            const di = clamp(Math.round((Math.PI / 2 - al) / (Math.PI / 8)), 0, 8), kalan = al - (Math.PI / 2 - di * Math.PI / 8);
            const kare = Math.floor(kes(T * ort[1] + faz * 5) * 4) % 4, sx = (di * 4 + kare) * GOC_HP, sy = si * GOC_HP;
            if (ortam === 'h') {
              g.save(); g.translate(lx + yuk * 0.3, ly + yuk * 0.1); g.scale(ayna, 1); g.rotate(kalan); g.globalAlpha = 0.3 * uc;
              g.drawImage(gocGolge(spr), sx / 2, sy / 2, GOC_HP / 2, GOC_HP / 2, -k2 * 0.8, -k2 * 0.8, k2 * 1.6, k2 * 1.6); g.restore();
            } else if (ortam === 's') {
              g.fillStyle = `rgba(6,38,74,${0.26 * uc})`; g.beginPath(); g.ellipse(lx + r * 0.12, ly + r * 0.3, k2 * 0.62, k2 * 0.3, ang, 0, 7); g.fill();
            }
            g.save(); g.translate(px, py); g.globalAlpha = uc; g.scale(ayna, 1); g.rotate(kalan);
            g.drawImage(spr, sx, sy, GOC_HP, GOC_HP, -k2, -k2, k2 * 2, k2 * 2); g.restore();
            if (si === 6 || si === 18) {   // balinalar ara ara su püskürtür
              const sp = kes(T / 4.5 + faz * 3);
              if (sp < 0.28) {
                const t = sp / 0.28, hx = px + Math.cos(ang) * k2 * 0.3, hy = py + Math.sin(ang) * k2 * 0.2 - k2 * 0.12;
                g.fillStyle = `rgba(238,251,255,${(1 - t) * 0.92 * uc})`;
                for (let j = -3; j <= 3; j++) { g.beginPath(); g.arc(hx + j * k2 * 0.1 * t, hy - k2 * (1.5 * t - 0.85 * t * t) * (1 - Math.abs(j) * 0.11), 0.8 + (1 - t) * 1.2, 0, 7); g.fill(); }
              }
            }
          } else {
            // resim yüklenene kadar (ya da resmi olmayan rotada) emoji
            const emo = emojiResim(hg.ik), yon = emojiYon(hg.ik);
            g.save(); g.translate(px, py); g.globalAlpha = uc;
            if (yon === 'sol' || yon === 'sag') {
              const saga = Math.cos(ang) >= 0, ayna = (saga ? 1 : -1) * (yon === 'sag' ? 1 : -1);
              g.rotate(clamp(saga ? ang : ang - Math.PI * Math.sign(ang || 1), -0.55, 0.55)); g.scale(ayna, 1);
            } else if (yon === 'ust') g.rotate(ang + Math.PI / 2);
            g.drawImage(emo, -r, -r, r * 2, r * 2);
            g.restore();
          }
        }
        g.restore();
        const [mx, my, mz] = P(...yolNokta(d, d.L * 0.5));
        const hgAd = GOC_IDX[hg.id] != null ? hg.ad.split(' (')[0] : `${hg.ik} ${hg.ad.split(' (')[0]}`;
        if (mz > 0.12 && (view.z >= 1.35 || hov)) {
          lab(hov ? 97 : 58, mx, my - 12, hgAd, { size: 10.5, w: 700, col: '#fff7dc', halo: 3, haloCol: 'rgba(14,24,34,0.9)', kay: true });
          const hw = hgAd.length * 3.3 + 6; hits.push({ kind: 'hayvangoc', hg, x0: mx - hw, x1: mx + hw, y0: my - 23, y1: my - 1 });
        }
        yolHit({ kind: 'hayvangoc', hg }, d, 10);
        if (pz > 0.08) hits.push({ kind: 'hayvangoc', hg, x0: px - 15, x1: px + 15, y0: py - 15, y1: py + 15 });
      }
    }
    // ⚓ Dünya Çapındaki Önemli Limanlar (data/atlas/limanlar.js)
    if (layers.liman && window.ATLAS_LIMANLAR && view.z >= 1.45) {
      const shownL = [], faL = clamp((view.z - 1.45) / 0.45, 0.25, 1);
      g.globalAlpha = faL;
      for (const lm of window.ATLAS_LIMANLAR) {
        const [x, y, z] = P(...lm.ll); if (z <= 0.1 || x < -20 || x > W + 20 || y < -20 || y > H + 20) continue;
        if (shownL.some(q => Math.abs(q[0] - x) < 24 && Math.abs(q[1] - y) < 24)) continue;
        shownL.push([x, y]);
        const hov = hover && hover.kind === 'liman' && hover.lm === lm;
        const s0 = hov ? 12 : 9.5;
        g.save();
        g.fillStyle = hov ? '#1d4ed8' : '#163457'; g.strokeStyle = hov ? '#ffd666' : '#f3d58d'; g.lineWidth = hov ? 2.2 : 1.5;
        g.font = `${hov ? 13 : 10.5}px Atkinson Hyperlegible Next, system-ui`; g.textAlign = 'center'; g.textBaseline = 'middle';
        simge('⚓', x, y, s0);
        g.restore();
        obstacle(x - s0 - 2, y - s0 - 2, x + s0 + 2, y + s0 + 2);
        if (view.z >= 1.75 || hov) lab(hov ? 97 : 60, x, y + s0 + 10, lm.ad.split(' (')[0], { size: 10.2, w: 700, col: '#e8f4ff', halo: 2.8, haloCol: 'rgba(12,24,44,0.9)', kay: true });
        hits.push({ kind: 'liman', lm, x0: x - s0 - 3, x1: x + s0 + 3, y0: y - s0 - 3, y1: y + s0 + 3 });
      }
      g.globalAlpha = 1;
    }
    // 🍵🧭 Yemeklerin, Kelimelerin ve İcatların Dünya Yolculuğu (data/atlas/yolculuk-hikaye.js)
    if ((layers.yayilis || yayilisAktif) && window.ATLAS_YAYILIS) {
      const rotaItem = window.ATLAS_YAYILIS.find(x => x.id === yayilisAktif) || (hover && hover.kind === 'yayilis' ? hover.yy : null);
      if (rotaItem && rotaItem.pts && rotaItem.pts.length >= 2) {
        const d = yolHazirla(rotaItem);
        g.save(); g.lineCap = 'round'; g.lineJoin = 'round';
        g.beginPath(); linePath(d.p);
        g.strokeStyle = 'rgba(255,214,102,0.42)'; g.lineWidth = 7.5; g.stroke();
        g.strokeStyle = '#fbbf24'; g.lineWidth = 2.4; g.setLineDash([6, 4]); g.stroke(); g.setLineDash([]);
        yolUclari(d, '#ffd666', true);
        const k = (T / 6) % 1, [px, py, pz] = P(...yolNokta(d, d.L * k));
        if (pz > 0.08) {
          g.fillStyle = 'rgba(42,24,10,0.92)'; g.strokeStyle = '#ffd666'; g.lineWidth = 1.8;
          g.font = '13px Atkinson Hyperlegible Next, system-ui'; g.textAlign = 'center'; g.textBaseline = 'middle';
          simge(rotaItem.ik, px, py, 12);
        }
        g.restore();
      }
      if (layers.yayilis && (view.z >= 1.35 || yayilisAktif)) {
        const shownY = [];
        for (const yy of window.ATLAS_YAYILIS) {
          if (view.z < 1.35 && yayilisAktif !== yy.id) continue;
          const [x, y, z] = P(...yy.ll); if (z <= 0.1 || x < -20 || x > W + 20 || y < -20 || y > H + 20) continue;
          if (shownY.some(q => Math.abs(q[0] - x) < 22 && Math.abs(q[1] - y) < 22)) continue;
          shownY.push([x, y]);
          const hov = hover && hover.kind === 'yayilis' && hover.yy === yy, akt = yayilisAktif === yy.id;
          const s0 = hov || akt ? 12.5 : 10;
          g.save();
          g.fillStyle = akt ? '#ffd666' : '#fff6dc'; g.strokeStyle = hov || akt ? '#b45309' : '#92400e'; g.lineWidth = hov || akt ? 2.4 : 1.6;
          g.font = `${hov || akt ? 14 : 11.5}px Atkinson Hyperlegible Next, system-ui`; g.textAlign = 'center'; g.textBaseline = 'middle';
          simge(yy.ik, x, y, s0);
          g.restore();
          obstacle(x - s0 - 2, y - s0 - 2, x + s0 + 2, y + s0 + 2);
          if (view.z >= 1.5 || hov || akt) lab(hov || akt ? 98 : 56, x, y + s0 + 10, yy.ad.split(' (')[0], { size: 10.2, w: 700, col: '#fef3c7', halo: 2.8, haloCol: 'rgba(42,20,8,0.9)', kay: true });
          hits.push({ kind: 'yayilis', yy, x0: x - s0 - 3, x1: x + s0 + 3, y0: y - s0 - 3, y1: y + s0 + 3 });
        }
      }
    }
    // 🌋 Tektonik Fay Kuşakları (Ateş Çemberi) ve Ünlü Yanardağlar (data/atlas/volkanlar.js)
    if (layers.volkan && window.ATLAS_VOLKANLAR) {
      for (const f of window.ATLAS_VOLKANLAR.faylar || []) {
        const d = yolHazirla(f), hov = hover && hover.kind === 'fay' && hover.f === f;
        g.save(); g.lineCap = 'round'; g.lineJoin = 'round';
        g.beginPath(); linePath(d.p);
        g.strokeStyle = hov ? 'rgba(255,214,102,0.55)' : 'rgba(239,68,68,0.28)'; g.lineWidth = hov ? 8 : 5.5; g.stroke();
        g.strokeStyle = hov ? '#ffd666' : 'rgba(249,115,22,0.9)'; g.lineWidth = hov ? 2.6 : 1.7; g.setLineDash([6, 4]); g.stroke(); g.setLineDash([]);
        g.restore();
        for (let i = 0; i < d.pts.length; i += 2) { const [x, y, z] = P(...d.pts[i]); if (z > 0.06) hits.unshift({ kind: 'fay', f, x0: x - 7, x1: x + 7, y0: y - 7, y1: y + 7 }); }
      }
      const shownV = [];
      if (view.z >= 1.45) for (const v of window.ATLAS_VOLKANLAR.volkanlar || []) {
        const [x, y, z] = P(...v.ll); if (z <= 0.1 || x < -20 || x > W + 20 || y < -20 || y > H + 20) continue;
        if (shownV.some(q => Math.abs(q[0] - x) < 22 && Math.abs(q[1] - y) < 22)) continue;
        shownV.push([x, y]);
        const hov = hover && hover.kind === 'volkan' && hover.v === v;
        const s0 = hov ? 13 : 10.5, aktif = !/uyuyan|sönmüş/i.test(v.durum || '');
        // Yanardağ artık sitenin Noto resmiyle çizilir: etkin olanlar yanardağ simgesi ve kraterden yükselen kül
        // bulutçuklarıyla, uyuyan ya da sönmüş olanlar sakin karlı dağ simgesiyle.
        simge(aktif ? '🌋' : '🗻', x, y, s0 * 1.05);
        if (aktif) for (let k = 0; k < 3; k++) {
          const ph = (((T * 0.5 + k * 0.33 + v.ll[1] * 0.02) % 1) + 1) % 1;
          g.fillStyle = `rgba(228,221,214,${(0.5 * (1 - ph)).toFixed(2)})`;
          g.beginPath(); g.arc(x + Math.sin(ph * 5 + k * 2) * 2.4 + ph * 3, y - s0 * 0.95 - ph * s0, 1.6 + ph * 3.2, 0, 7); g.fill();
        }
        obstacle(x - s0 - 2, y - s0 - 2, x + s0 + 2, y + s0 + 2);
        if (view.z >= 1.55 || hov) lab(hov ? 97 : 61, x, y + s0 + 9, v.ad.split(' (')[0], { size: 10.2, w: 700, col: '#ffedd5', halo: 2.8, haloCol: 'rgba(42,14,10,0.9)', kay: true });
        hits.push({ kind: 'volkan', v, x0: x - s0 - 3, x1: x + s0 + 3, y0: y - s0 - 3, y1: y + s0 + 3 });
      }
    }
    // 🐾 Bölge hayvanları (yaşayanlar) ve ⏳ nesli tükenen canlılar — iki ayrı katman, yıldan bağımsız (data/atlas/hayvanlar.js)
    if ((layers.hayvan || layers.tukenen) && window.ATLAS_HAYVANLAR && view.z >= 1.55) {
      const minD = clamp(42 - view.z * 2.5, 22, 38);
      const shownH = [];
      const fa = clamp((view.z - 1.55) / 0.5, 0.2, 1);
      g.globalAlpha = fa;
      for (const h of window.ATLAS_HAYVANLAR) {
        const tuk = h.durum === 'Nesli Tükendi';
        if (tuk ? !layers.tukenen : !layers.hayvan) continue;
        const [x, y, z] = P(...h.ll); if (z <= 0.1 || x < -20 || x > W + 20 || y < -20 || y > H + 20) continue;
        if (shownH.some(q => Math.abs(q[0] - x) < minD && Math.abs(q[1] - y) < minD)) continue;
        shownH.push([x, y]);
        const hov = hover && hover.kind === 'hayvan' && hover.h === h;
        const buy = clamp(10.5 + (view.z - 1.55) * 1.5, 10.5, 15), s0 = hov ? buy + 2 : buy, den = h.kita === 'Okyanus';   // yaklaştıkça büyür
        g.fillStyle = tuk ? '#fff0cc' : den ? '#e4f5ff' : '#fbf6e8';
        g.strokeStyle = hov ? '#ffd666' : tuk ? '#c87018' : den ? '#2b88c4' : '#3d8a4e';
        g.lineWidth = hov ? 2.4 : 1.7;
        g.font = `${hov ? 15 : 12.5}px Atkinson Hyperlegible Next, system-ui`; g.textAlign = 'center'; g.textBaseline = 'middle'; simge(h.ik, x, y, s0); g.textBaseline = 'alphabetic';
        obstacle(x - s0 - 2, y - s0 - 2, x + s0 + 2, y + s0 + 2);
        if (view.z >= 2.6 || hov) lab(hov ? 96 : 48, x, y + s0 + 10, h.ad.split(' (')[0], { size: 10, w: 700, col: tuk ? '#ffe2a0' : '#fff8e8', halo: 2.8, haloCol: 'rgba(20,16,10,0.85)', kay: true });
        hits.push({ kind: 'hayvan', h, x0: x - s0 - 3, x1: x + s0 + 3, y0: y - s0 - 3, y1: y + s0 + 3 });
      }
      g.globalAlpha = 1;
    }
    // 🌿 Yöreye özgü bitkiler ve ağaçlar (data/atlas/bitkiler.js)
    if (layers.bitki && window.ATLAS_BITKILER && view.z >= 1.55) {
      const minD = clamp(38 - view.z * 2.2, 20, 34), shownB = [];
      const fa = clamp((view.z - 1.55) / 0.5, 0.2, 1);
      g.globalAlpha = fa;
      for (const bt of window.ATLAS_BITKILER) {
        const [x, y, z] = P(...bt.ll); if (z <= 0.1 || x < -20 || x > W + 20 || y < -20 || y > H + 20) continue;
        if (shownB.some(q => Math.abs(q[0] - x) < minD && Math.abs(q[1] - y) < minD)) continue;
        shownB.push([x, y]);
        const hov = hover && hover.kind === 'bitki' && hover.bt === bt, s0 = hov ? 12.5 : 10;
        g.fillStyle = '#e6f6e8'; g.strokeStyle = hov ? '#ffd666' : '#2e7d32'; g.lineWidth = hov ? 2.4 : 1.7;
        g.font = `${hov ? 14.5 : 12}px Atkinson Hyperlegible Next, system-ui`; g.textAlign = 'center'; g.textBaseline = 'middle'; simge(bt.ik, x, y, s0); g.textBaseline = 'alphabetic';
        obstacle(x - s0 - 2, y - s0 - 2, x + s0 + 2, y + s0 + 2);
        if (view.z >= 2.4 || hov) lab(hov ? 96 : 47, x, y + s0 + 10, bt.ad.split(' (')[0], { size: 10, w: 700, col: '#dcfce7', halo: 2.8, haloCol: 'rgba(14,32,18,0.88)', kay: true });
        hits.push({ kind: 'bitki', bt, x0: x - s0 - 3, x1: x + s0 + 3, y0: y - s0 - 3, y1: y + s0 + 3 });
      }
      g.globalAlpha = 1;
    }
    // 🧱 Gerçek coğrafi hattı boyunca çizilen dev yapılar (Çin Seddi, Hadrian Duvarı, İnka Yolu, Süveyş & Panama Kanalları)
    if (layers.yapi && window.HAT_YAPILAR) {
      for (const hy of window.HAT_YAPILAR) {
        const minZ = hy.minZ || 3.6;
        if (Y > hy.from || Y < hy.to || view.z < minZ) continue;
        const d = yolHazirla(hy), hov = hover && hover.kind === 'hatyapi' && hover.hy === hy;
        const fa = clamp((view.z - minZ) / (minZ * 0.35), 0, 1);
        const sc = clamp((view.z - minZ) / 6, 0, 1);
        g.save(); g.lineCap = 'round'; g.lineJoin = 'round';
        g.globalAlpha = hov ? 1 : (0.15 + 0.85 * fa);
        if (hy.tip === 'sur') {
          // Yaklaştıkça netleşen ince taş dış hat + sıcak sur gövdesi + yakından görünen gözetleme kuleleri
          const dis = lerp(3.2, 5.4, sc) + (hov ? 1.8 : 0);
          const ic = lerp(1.6, 2.8, sc) + (hov ? 1.0 : 0);
          g.beginPath(); linePath(d.p);
          g.strokeStyle = hov ? '#ffd666' : '#3a2614'; g.lineWidth = dis; g.stroke();
          g.strokeStyle = '#ead6a8'; g.lineWidth = ic; g.stroke();
          g.strokeStyle = 'rgba(90,58,28,0.6)'; g.lineWidth = lerp(0.8, 1.3, sc); g.setLineDash([2, 4]); g.stroke(); g.setLineDash([]);
          // Gözetleme kuleleri yalnızca biraz daha yaklaşınca belirsin
          if (view.z >= minZ + 1.0 || hov) {
            const kuleAdim = clamp(650 / view.z, 26, 260);
            const ks = lerp(1.8, 2.9, sc) + (hov ? 0.9 : 0);
            for (let s0 = 0; s0 <= d.L; s0 += kuleAdim) {
              const [x, y, z] = P(...yolNokta(d, s0)); if (z <= 0.08) continue;
              g.fillStyle = '#f5e4be'; g.strokeStyle = '#3a2614'; g.lineWidth = 1;
              g.fillRect(x - ks, y - ks, ks * 2, ks * 2); g.strokeRect(x - ks, y - ks, ks * 2, ks * 2);
            }
          }
        } else if (hy.tip === 'kanal') {
          g.beginPath(); linePath(d.p);
          g.strokeStyle = hov ? '#ffd666' : '#1b4965'; g.lineWidth = lerp(3.2, 5.0, sc) + (hov ? 1.6 : 0); g.stroke();
          g.strokeStyle = '#5fd0f5'; g.lineWidth = lerp(1.6, 2.6, sc) + (hov ? 1.0 : 0); g.stroke();
        } else {
          g.beginPath(); linePath(d.p);
          g.strokeStyle = hov ? '#ffd666' : '#5a3a18'; g.lineWidth = lerp(2.6, 4.0, sc) + (hov ? 1.4 : 0); g.stroke();
          g.strokeStyle = '#f0c878'; g.lineWidth = lerp(1.2, 1.8, sc) + (hov ? 0.8 : 0); g.setLineDash([4.5, 3]); g.stroke(); g.setLineDash([]);
        }
        g.restore();
        const [mx, my, mz] = P(...yolNokta(d, d.L * 0.45));
        if (mz > 0.12 && (view.z >= minZ + 0.9 || hov)) {
          const ik = hy.tip === 'sur' ? '🧱 ' : hy.tip === 'kanal' ? '🚢 ' : '🛣️ ';
          lab(hov ? 97 : 62, mx, my - 10, ik + hy.ad, { size: 10.5, w: 700, col: '#fff7dc', halo: 3, haloCol: 'rgba(38,24,10,0.9)', serif: true, kay: true });
        }
        for (let i = 0; i < d.pts.length; i++) {
          const [x, y, z] = P(...d.pts[i]);
          if (z > 0.06) hits.push({ kind: 'hatyapi', hy, x0: x - 8, x1: x + 8, y0: y - 8, y1: y + 8 });
        }
      }
    }
    // ⚡ Dünyanın Seyrini Değiştiren Büyük Olaylar (seçilen yıldan BAĞIMSIZ olarak haritanın her yerinde görünür)
    if (layers.donum && window.DONUM_NOKTALARI) {
      for (const dn of window.DONUM_NOKTALARI) {
        const [x, y, z] = P(...dn.ll); if (z <= 0.08 || x < -24 || x > W + 24 || y < -24 || y > H + 24) continue;
        const hov = hover && hover.kind === 'donum' && hover.d === dn;
        const s0 = hov ? 14 : 11, ph = (T * 0.9 + dn.ll[1] * 0.02) % 1;
        g.save();
        g.strokeStyle = `rgba(255,214,102,${0.65 * (1 - ph)})`; g.lineWidth = 2;
        g.beginPath(); g.arc(x, y, s0 + ph * 11, 0, 7); g.stroke();
        g.fillStyle = hov ? '#ffd666' : '#2d193d'; g.strokeStyle = '#ffd666'; g.lineWidth = hov ? 2.6 : 2;
        g.font = `${hov ? 15 : 12.5}px Atkinson Hyperlegible Next, system-ui`; g.textAlign = 'center'; g.textBaseline = 'middle';
        simge('⚡', x, y, s0);
        g.restore();
        obstacle(x - s0 - 2, y - s0 - 2, x + s0 + 2, y + s0 + 2);
        lab(hov ? 99 : 72, x, y + s0 + 10, `${dn.ad}`, { size: 10.5, w: 800, col: '#ffe99c', halo: 3.2, haloCol: 'rgba(26,12,38,0.9)', kay: true });
        hits.push({ kind: 'donum', d: dn, x0: x - s0 - 4, x1: x + s0 + 4, y0: y - s0 - 4, y1: y + s0 + 4 });
      }
    }
    // 🪨 Tarihöncesi Mağaralar ve İlk Yerleşimler (katman açıkken tüm tarihlerde görünür)
    if (layers.magara && window.ATLAS_MAGARALAR) {
      const ma = 1;
      const shownM = [];
      for (const m of window.ATLAS_MAGARALAR) {
        const [x, y, z] = P(...m.ll); if (z <= 0.1 || x < -24 || x > W + 24 || y < -24 || y > H + 24) continue;
        if (shownM.some(q => Math.abs(q[0] - x) < 26 && Math.abs(q[1] - y) < 26)) continue;
        shownM.push([x, y]);
        const hov = hover && hover.kind === 'magara' && hover.m === m;
        const s0 = hov ? 12.5 : 10;
        g.save();
        g.globalAlpha = hov ? 1 : ma;
        // Taş mağara kemeri
        g.fillStyle = '#5c4b3c'; g.strokeStyle = hov ? '#ffd666' : '#f4e3c2'; g.lineWidth = hov ? 2.2 : 1.4;
        g.beginPath(); g.arc(x, y + 1, s0, Math.PI, 0); g.lineTo(x + s0, y + s0 * 0.65); g.lineTo(x - s0, y + s0 * 0.65); g.closePath(); g.fill(); g.stroke();
        // Karanlık mağara ağzı
        g.fillStyle = '#1b120b';
        g.beginPath(); g.arc(x, y + s0 * 0.2, s0 * 0.56, Math.PI, 0); g.lineTo(x + s0 * 0.56, y + s0 * 0.62); g.lineTo(x - s0 * 0.56, y + s0 * 0.62); g.closePath(); g.fill();
        // Titreyen kamp ateşi kıvılcımı
        const fl = 0.85 + Math.sin(T * 7 + m.ll[1]) * 0.2;
        g.fillStyle = '#ff8c2a'; g.beginPath(); g.arc(x, y + s0 * 0.34, s0 * 0.28 * fl, 0, 7); g.fill();
        g.fillStyle = '#ffe57f'; g.beginPath(); g.arc(x, y + s0 * 0.32, s0 * 0.14 * fl, 0, 7); g.fill();
        g.restore();
        obstacle(x - s0 - 2, y - s0 - 2, x + s0 + 2, y + s0 + 2);
        if (view.z >= 1.55 || hov) lab(hov ? 97 : 64, x, y + s0 + 10, m.ad.split(' (')[0], { size: 10.5, w: 700, col: '#ffe8c2', halo: 3, haloCol: 'rgba(28,16,8,0.9)', serif: true, kay: true });
        hits.push({ kind: 'magara', m, x0: x - s0 - 4, x1: x + s0 + 4, y0: y - s0 - 4, y1: y + s0 + 4 });
      }
    }
    // 🐉 Mitler ve efsaneler (data/atlas/mitler.js): anlatının geçtiği yerde simge. Mor hale, bunun bir kazı ya da olay
    // değil bir anlatı olduğunu ayırt ettirir.
    if (layers.mit && window.ATLAS_MITLER) {
      const shownT = [];
      for (const m of window.ATLAS_MITLER) {
        const [x, y, z] = P(...m.ll); if (z <= 0.1 || x < -24 || x > W + 24 || y < -24 || y > H + 24) continue;
        if (shownT.some(q => Math.abs(q[0] - x) < 26 && Math.abs(q[1] - y) < 26)) continue;
        shownT.push([x, y]);
        const hov = hover && hover.kind === 'mit' && hover.m === m, s0 = hov ? 15 : 12.5, nb = 1 + Math.sin(T * 1.6 + m.ll[1]) * 0.08;
        const hl = g.createRadialGradient(x, y, s0 * 0.3, x, y, s0 * 1.7 * nb); hl.addColorStop(0, hov ? 'rgba(214,186,255,0.75)' : 'rgba(196,160,255,0.55)'); hl.addColorStop(1, 'rgba(196,160,255,0)');
        g.fillStyle = hl; g.beginPath(); g.arc(x, y, s0 * 1.7 * nb, 0, 7); g.fill();
        simge(m.ik || '🐉', x, y, s0);
        obstacle(x - s0 - 2, y - s0 - 2, x + s0 + 2, y + s0 + 2);
        if (view.z >= 1.55 || hov) lab(hov ? 97 : 64, x, y + s0 + 11, m.ad, { size: 10.5, w: 700, col: '#eadcff', halo: 3, haloCol: 'rgba(22,12,40,0.9)', serif: true, kay: true });
        hits.push({ kind: 'mit', m, x0: x - s0 - 4, x1: x + s0 + 4, y0: y - s0 - 4, y1: y + s0 + 4 });
      }
    }
    // 🎁 Dünya Çevresinde Gizli Sürprizler (Easter Eggs — yalnızca kendi tarihsel döneminde ve o noktaya iyice yaklaşınca belirir)
    if (window.ATLAS_SURPRIZLER) {
      for (const sp of window.ATLAS_SURPRIZLER) {
        if (sp.uzay || !sp.ll || view.z < (sp.minZ || 7)) continue;
        if ((sp.from != null && Y > sp.from) || (sp.to != null && Y < sp.to)) continue;
        const [x, y, z] = P(...sp.ll); if (z <= 0.1 || x < -20 || x > W + 20 || y < -20 || y > H + 20) continue;
        const bul = !!(window.ZY && window.ZY.surprizBulunduMu && window.ZY.surprizBulunduMu(sp.id));
        const hov = hover && hover.kind === 'surpriz' && hover.sp === sp;
        const fa = clamp((view.z - sp.minZ) / 1.4, 0.18, 1), ph = 0.5 + 0.5 * Math.sin(T * 2.4 + sp.ll[0]);
        const s0 = hov ? 12 : (bul ? 9.5 : 6.2);
        g.save(); g.globalAlpha = hov ? 1 : fa * (bul ? 0.92 : 0.42 + ph * 0.28);
        if (hov || bul) {
          g.strokeStyle = `rgba(255,214,102,${0.35 + ph * 0.4})`; g.lineWidth = 1.4;
          g.beginPath(); g.arc(x, y, s0 + 3 + ph * 3, 0, 7); g.stroke();
        }
        g.fillStyle = bul ? 'rgba(42,28,14,0.92)' : 'rgba(56,34,12,0.58)'; g.strokeStyle = hov ? '#ffd666' : 'rgba(255,214,102,0.75)'; g.lineWidth = hov ? 2 : 1.1;
        g.font = `${hov ? 13.5 : (bul ? 11.5 : 8.5)}px Atkinson Hyperlegible Next, system-ui`; g.textAlign = 'center'; g.textBaseline = 'middle';
        g.globalAlpha *= bul ? 1 : 0.7; simge(bul ? sp.ik : '✨', x, y, s0);
        g.restore();
        if (bul && (view.z >= sp.minZ + 0.6 || hov)) lab(hov ? 98 : 50, x, y + s0 + 10, sp.ad.split(' (')[0], { size: 10, w: 700, col: '#ffe89c', halo: 2.8, haloCol: 'rgba(28,18,6,0.9)', kay: true });
        hits.push({ kind: 'surpriz', sp, x0: x - s0 - 4, x1: x + s0 + 4, y0: y - s0 - 4, y1: y + s0 + 4 });
      }
    }
    if (LQ.length) flushLabels();
    g.restore();
    // 🛰️ Uzay boşluğundaki gizli sürpriz (Voyager Altın Plağı — yalnızca MS 1977 ve sonrasında uzayda görünür!)
    if (view.z < 1.55 && window.ATLAS_SURPRIZLER) {
      const voy = window.ATLAS_SURPRIZLER.find(s => s.uzay);
      if (voy && (voy.from == null || Y <= voy.from) && (voy.to == null || Y >= voy.to)) {
        const ang = -0.58 + Math.sin(T * 0.08) * 0.22;
        const vx = cx + Math.cos(ang) * (r + 68), vy = cy + Math.sin(ang) * (r + 68);
        if (vx > 24 && vx < W - 24 && vy > 66 && vy < H - 40) {
          const bul = !!(window.ZY && window.ZY.surprizBulunduMu && window.ZY.surprizBulunduMu(voy.id));
          const hov = hover && hover.kind === 'surpriz' && hover.sp === voy;
          const ph = 0.5 + 0.5 * Math.sin(T * 2.6);
          g.save();
          if (hov || bul) {
            g.strokeStyle = `rgba(255,214,102,${hov ? 0.85 : 0.35 + ph * 0.25})`; g.lineWidth = 1.2;
            g.beginPath(); g.arc(vx, vy, (hov ? 12 : 9) + ph * 2.5, 0, 7); g.stroke();
            g.fillStyle = 'rgba(22,26,48,0.82)'; g.strokeStyle = '#ffd666'; g.lineWidth = hov ? 1.6 : 1;
            g.font = `${hov ? 11.5 : 9.5}px Atkinson Hyperlegible Next, system-ui`; g.textAlign = 'center'; g.textBaseline = 'middle';
            simge('🛰️', vx, vy, hov ? 9.5 : 7.5);
            text(vx, vy + 16, 'Voyager 1', { size: 9.5, w: 700, col: '#ffe89c', halo: 2.5, haloCol: 'rgba(10,14,28,0.9)' });
          } else {
            // Keşfedilmeden önce: uzayda hafifçe parlayan minik altın 4-köşeli yıldız
            const arm = 3.2 + ph * 2.4;
            g.globalAlpha = 0.45 + ph * 0.45;
            g.strokeStyle = '#ffe99c'; g.lineWidth = 1.1; g.lineCap = 'round';
            g.beginPath();
            g.moveTo(vx - arm, vy); g.lineTo(vx + arm, vy);
            g.moveTo(vx, vy - arm); g.lineTo(vx, vy + arm);
            g.stroke();
            g.fillStyle = '#fff9db';
            g.beginPath(); g.arc(vx, vy, 1.5 + ph * 0.7, 0, 7); g.fill();
          }
          g.restore();
          hits.push({ kind: 'surpriz', sp: voy, x0: vx - 10, x1: vx + 10, y0: vy - 10, y1: vy + 10 });
        }
      }
    }
    // uzaktan medeniyet işareti
    const isaretler = DM ? (window.BOLGE_SIRA || []).map(id => window.BOLGELER[id]) : [window.BOLGE || { isaret: [27, 31], ad: 'Mısır' }];
    const ia = DM ? ka : 1 - ez;
    const kutular = [];
    // kıta adları: yalnızca uzaktan; yaklaşınca yerlerini devlet adları alır
    if (ka > 0) {
      g.save();
      for (const [la, lo, ad] of KITA_AD) {
        const [x, y, z] = P(la, lo); if (z <= 0.15) continue;
        const sz = clamp(13 + view.z * 2.5, 15, 20), ls = 6;
        g.font = `700 ${sz}px Literata, Georgia, serif`; const tw = g.measureText(ad).width + ls * ad.length;
        g.globalAlpha = ka * clamp((z - 0.15) * 3, 0, 1);
        text(x, y, ad, { size: sz, w: 700, serif: true, ls, col: '#fffaf0', halo: 3.5, haloCol: 'rgba(70,42,18,0.6)' });
        kutular.push([x - tw / 2 - 4, y - sz / 2 - 4, x + tw / 2 + 4, y + sz / 2 + 4]);
      }
      g.restore();
    }
    if (ia > 0 && !turRota) {
      // önce bütün işaretlerin yerleri; sonra adlar çakışmayacak biçimde yerleşir (sağ, sol, üst, alt; sığmazsa yalnızca simge).
      // Tüm Dünya'da bölge adları yazılmaz (yalnızca kıta adları); bölgenin adı imleç üstüne gelince görünür.
      const pts = isaretler.map(BGd => { const [x, y, z] = P(...(BGd.isaret || [27, 31])); return { BGd, x, y, z }; }).filter(o => o.z > 0.1);
      kutular.push(...pts.map(o => [o.x - 9, o.y - 9, o.x + 9, o.y + 9]));
      const cakisir = r => kutular.some(k => r[0] < k[2] && r[2] > k[0] && r[1] < k[3] && r[3] > k[1]);
      // Dokunmatik ekranda fare yok, "üstüne gelince ad" çıkmaz: Tüm Dünya'da da adlar küçük yazıyla noktanın yanında
      const dmAd = DM && DOKUNMATIK.matches, adBoy = dmAd ? 12 : 15;
      g.save(); g.font = `800 ${adBoy}px Literata, Georgia, serif`;
      for (const o of pts) {
        const { BGd, x, y } = o, on = BGd.id !== 'misir' || (Y <= 3150 && Y >= 30), ad = (DM ? BGd.ikon + ' ' : '') + (BGd.ad || 'Mısır');
        const tw = g.measureText(ad).width + 4;
        g.globalAlpha = ia; const pr = 1 + Math.sin(T * 2.5) * 0.25;
        g.strokeStyle = 'rgba(255,214,102,0.7)'; g.lineWidth = 2; g.beginPath(); g.arc(x, y, 14 * pr, 0, 7); g.stroke();
        g.fillStyle = on ? '#ffd666' : '#bbb'; g.strokeStyle = OUT; g.beginPath(); g.arc(x, y, 6, 0, 7); g.fill(); g.stroke();
        const yer = DM && !dmAd ? null : [[x + 14, y, 'left', [x + 12, y - 10, x + 14 + tw, y + 10]], [x - 14, y, 'right', [x - 14 - tw, y - 10, x - 12, y + 10]],
          [x, y - 22, 'center', [x - tw / 2, y - 32, x + tw / 2, y - 12]], [x, y + 22, 'center', [x - tw / 2, y + 12, x + tw / 2, y + 32]]].find(c => !cakisir(c[3]) && c[3][0] >= 4 && c[3][2] <= W - 4 && c[3][1] >= 4 && c[3][3] <= H - 4); // ekrandan taşan yer seçilmez
        if (yer) { kutular.push(yer[3]); text(yer[0], yer[1], ad, { align: yer[2], size: adBoy, w: 800, col: '#ffe7a3', serif: true }); }
        const r = yer ? yer[3] : [x - 18, y - 18, x + 18, y + 18];
        hits.push({ kind: 'med', b: DM ? BGd : null, x0: Math.min(x - 18, r[0]), x1: Math.max(x + 18, r[2]), y0: Math.min(y - 18, r[1]), y1: Math.max(y + 18, r[3]) });
        g.globalAlpha = 1;
      }
      g.restore();
    }
    // 🎬 Rehberli belgesel turu özel rotası ve numaralı duraklar
    if (turRota && turRota.pts && turRota.pts.length > 1) {
      hits.length = 0;
      const cizYol = (pts, stroke, lw, dash) => {
        g.save(); g.strokeStyle = stroke; g.lineWidth = lw; g.lineCap = 'round'; g.lineJoin = 'round';
        if (dash) g.setLineDash(dash);
        g.beginPath();
        let acik = false;
        for (let i = 0; i < pts.length; i++) {
          const [x, y, z] = P(pts[i][0], pts[i][1]);
          if (z > 0.02) { if (!acik) { g.moveTo(x, y); acik = true; } else g.lineTo(x, y); }
          else acik = false;
        }
        g.stroke(); g.restore();
      };
      // Belgesel rotası (koyu dış çizgi + tema/tur vurgu rengi + hareketli ışık akışı)
      const rCol = turRota.renk || '#ffd666';
      cizYol(turRota.pts, 'rgba(18, 10, 4, 0.72)', 7.5);
      cizYol(turRota.pts, rCol, 4.2);
      g.save(); g.lineDashOffset = -(T * 26); cizYol(turRota.pts, '#fff8dc', 2.0, [10, 14]); g.restore();
      // Numaralı duraklar
      const ds = turRota.duraklar || [];
      for (let i = 0; i < ds.length; i++) {
        const d = ds[i], [x, y, z] = P(d.ll[0], d.ll[1]);
        if (z <= 0.04) continue;
        const aktif = i === turRota.idx;
        if (aktif) {
          const ph = (T * 0.9) % 1;
          g.save(); g.strokeStyle = rCol; g.globalAlpha = 1 - ph; g.lineWidth = 2.5;
          g.beginPath(); g.arc(x, y, 11 + ph * 22, 0, 7); g.stroke(); g.restore();
        }
        const rad = aktif ? 12 : 9;
        g.save();
        g.fillStyle = aktif ? rCol : '#1b2638';
        g.strokeStyle = aktif ? '#1a0e04' : rCol;
        g.lineWidth = aktif ? 2.5 : 2;
        g.beginPath(); g.arc(x, y, rad, 0, 7); g.fill(); g.stroke();
        g.fillStyle = aktif ? '#1a0e04' : '#fff8e1';
        g.font = `800 ${aktif ? 12 : 10.5}px Atkinson Hyperlegible Next, system-ui, sans-serif`;
        g.textAlign = 'center'; g.textBaseline = 'middle';
        g.fillText(String(i + 1), x, y + 0.5);
        g.restore();
        const kisa = (d.kisa || d.baslik.split(':')[0]);
        text(x, y - rad - 9, kisa, { size: aktif ? 13.5 : 11.5, w: 800, col: aktif ? rCol : '#fffaf0', halo: 3.5, haloCol: 'rgba(10,14,24,0.88)' });
        hits.push({ kind: 'turdurak', idx: i, x0: x - 16, x1: x + 16, y0: y - 16, y1: y + 16 });
      }
    }
    // aramadan gelen konum işareti: birkaç saniye nabız gibi atan iğne
    if (pinAt && !turRota && T - pinAt.t0 < 9) {
      const [x, y, z] = P(pinAt.lat, pinAt.lon);
      if (z > 0.05) {
        const k = (T - pinAt.t0), fade = clamp(9 - k, 0, 1);
        g.globalAlpha = fade;
        for (let i = 0; i < 3; i++) { const ph = ((k * 0.8 + i / 3) % 1); g.strokeStyle = `rgba(255,214,102,${1 - ph})`; g.lineWidth = 2.5; g.beginPath(); g.arc(x, y, 6 + ph * 34, 0, 7); g.stroke(); }
        const by = y - 10 - Math.abs(Math.sin(k * 3)) * 6;
        g.fillStyle = '#e8483a'; g.strokeStyle = '#fff'; g.lineWidth = 2; g.beginPath(); g.arc(x, by - 8, 7, Math.PI * 0.85, Math.PI * 2.15); g.lineTo(x, by + 4); g.closePath(); g.fill(); g.stroke();
        g.fillStyle = '#fff'; g.beginPath(); g.arc(x, by - 8, 2.6, 0, 7); g.fill();
        if (pinAt.ad) text(x, by - 26, pinAt.ad, { size: 13, w: 800, col: '#ffe7a3' });
        g.globalAlpha = 1;
      }
    }
    // ipucu
    if (hover && hover.kind === 'olay') tip(hover.x1 + 6, hover.y0, hover.e.ad, `${YIL.fmt(hover.e.y)} · ${({ savas: 'Savaş', deniz: 'Deniz savaşı', afet: 'Doğal afet', antlasma: 'Antlaşma', olay: 'Önemli olay' })[hover.e.tur] || 'Olay'} · tıkla: ayrıntılar`);
    else if (hover && hover.kind === 'yapi' && hover.it.lm) tip(hover.x1 + 6, hover.y0, hover.it.ad, `${hover.it.lm.sehir}, ${hover.it.lm.ulke} · ${hover.it.lm.yil || YIL.fmt(hover.it.lm.y)}` + (hover.kids && hover.kids.length ? ` · aynı yerde ${hover.kids.length} yapı daha: ${hover.kids.slice(0, 4).map(o => o.it.ad).join(', ')}${hover.kids.length > 4 ? '…' : ''}` : '') + ' · tıkla: fotoğraf ve bilgi');
    else if (hover && hover.kind === 'yapi') tip(hover.x1 + 6, hover.y0, hover.it.ad, ({ ins: `İnşaat sürüyor · %${Math.round((hover.it.p || 0) * 100)}`, bitti: 'Tamamlanmış', harabe: 'Harabe / yarım kalmış' })[hover.it.st] + (hover.kids && hover.kids.length ? ` · tıkla: bilgi kartı · aynı yerde ${hover.kids.length} yapı daha: ${hover.kids.slice(0, 4).map(o => o.it.ad).join(', ')}${hover.kids.length > 4 ? '…' : ''}` : ' · tıkla: bilgi kartı'));
    else if (hover && hover.kind === 'kume') tip(hover.x1 + 6, hover.y0, `${hover.list.length} yapı`, hover.list.slice(0, 6).map(o => o.it.ad).join(', ') + (hover.list.length > 6 ? '…' : '') + ' · tıkla: yaklaş');
    else if (hover && hover.kind === 'kaynak') tip(hover.x1 + 6, hover.y0, hover.k.ad, `${((window.KAYNAK_TUR || {})[hover.k.tur] || {}).ad} · ${YIL.fmt(hover.k.from)} – ${hover.k.to <= -2026 ? 'bugün' : YIL.fmt(hover.k.to)} · tıkla: ayrıntılar`);
    else if (hover && hover.kind === 'yol') tip(hover.x1 + 6, hover.y0, hover.t.ad, `${hover.t.cikis} → ${hover.t.varis} · ${hover.t.mal} · tıkla: ayrıntılar`);
    else if (hover && hover.kind === 'yolculuk') tip(hover.x1 + 6, hover.y0, hover.j.ad, `${YIL.fmt(hover.j.y)} · ${hover.j.sure} · ${hover.j.nasil} · tıkla: hikâyesi`);
    else if (hover && hover.kind === 'devlet') tip(hover.x1 + 6, hover.y0, sinirAd(hover.k), `${YIL.fmt(hover.k.y1)} – ${hover.k.y0 <= -2024 ? 'bugün' : YIL.fmt(hover.k.y0)} arasındaki sınırları · ~${Math.round(hover.k.a).toLocaleString('tr-TR')} km² · tıkla: ayrıntılar`);
    else if (hover && hover.kind === 'goc') tip(hover.x1 + 6, hover.y0, hover.r.ad + ' · ' + hover.r.etiket, 'tıkla: insanlığın yolculuğu');
    else if (hover && hover.kind === 'besik') tip(hover.x1 + 6, hover.y0, window.GOC.besik.ad, window.GOC.besik.not + ' · tıkla: insanlığın yolculuğu');
    else if (hover && hover.kind === 'tarim') tip(hover.x1 + 6, hover.y0, `🌾 ${hover.m.ad} · MÖ ~${hover.m.y.toLocaleString('tr-TR')}`, `${hover.m.urun} · ${hover.m.not}`);
    else if (hover && hover.kind === 'med' && hover.b) tip(hover.x1 + 6, hover.y0 + 30, hover.b.ikon + ' ' + hover.b.ad, 'tıkla: bu bölgeye git');
    else if (hover && hover.kind === 'akinti') tip(hover.x1 + 6, hover.y0, hover.a.ad, `${hover.a.tip === 'sicak' ? '🔥 Sıcak akıntı' : '❄️ Soğuk akıntı'} · ${hover.a.hiz} · tıkla: ayrıntılar`);
    else if (hover && hover.kind === 'ruzgar') tip(hover.x1 + 6, hover.y0, `${hover.rz.ik} ${hover.rz.ad}`, `${hover.rz.mevsim} · ${hover.rz.hiz} · tıkla: ayrıntılar`);
    else if (hover && hover.kind === 'denizolay') tip(hover.x1 + 6, hover.y0, hover.o.ad, `${hover.o.tip === 'girdap' ? '🌀 Girdap / Döngü' : '🌪️ Fırtına alanı'} · ${hover.o.yer} · tıkla: ayrıntılar`);
    else if (hover && hover.kind === 'hayvan') tip(hover.x1 + 6, hover.y0, `${hover.h.ik} ${hover.h.ad}`, `${hover.h.bolge} · ${hover.h.durum === 'Nesli Tükendi' ? '⏳ ' + hover.h.sayi : hover.h.durum} · tıkla: bilgi ve fotoğraf`);
    else if (hover && hover.kind === 'bitki') tip(hover.x1 + 6, hover.y0, `${hover.bt.ik} ${hover.bt.ad}`, `${hover.bt.bolge} · tıkla: meyvesi ve kullanım alanları`);
    else if (hover && hover.kind === 'cografya') tip(hover.x1 + 6, hover.y0, hover.cg.ad, `${hover.cg.yukseklik ? hover.cg.yukseklik + ' · ' : ''}${hover.cg.konum} · tıkla: ayrıntı ve fotoğraf`);
    else if (hover && hover.kind === 'nehir') tip(hover.x1 + 6, hover.y0, `🏞️ ${hover.nr.ad}`, `${hover.nr.uzunluk} · ${hover.nr.havza} · tıkla: doğa ve tarih`);
    else if (hover && hover.kind === 'hayvangoc') tip(hover.x1 + 6, hover.y0, `${hover.hg.ik} ${hover.hg.ad}`, `${hover.hg.mesafe}${hover.hg.sure ? ' · ⏱️ ' + hover.hg.sure : ''} · tıkla: göç döngüsü`);
    else if (hover && hover.kind === 'liman') tip(hover.x1 + 6, hover.y0, `⚓ ${hover.lm.ad}`, `${hover.lm.ulke} · ${hover.lm.rol} · tıkla: liman bilgisi`);
    else if (hover && hover.kind === 'yayilis') tip(hover.x1 + 6, hover.y0, `${hover.yy.ik} ${hover.yy.ad}`, `${hover.yy.koken} · tıkla: dünyaya yayılış hikâyesi`);
    else if (hover && hover.kind === 'volkan') tip(hover.x1 + 6, hover.y0, `🌋 ${hover.v.ad}`, `${hover.v.ulke} · ${hover.v.yukseklik} (${hover.v.durum}) · tıkla: patlama tarihi`);
    else if (hover && hover.kind === 'fay') tip(hover.x1 + 6, hover.y0, `🔥 ${hover.f.ad}`, 'Tektonik fay ve deprem kuşağı · tıkla: ayrıntılar');
    else if (hover && hover.kind === 'hatyapi') tip(hover.x1 + 6, hover.y0, hover.hy.ad, `${hover.hy.yer} · ${hover.hy.uzunluk} · tıkla: ayrıntılar`);
    else if (hover && hover.kind === 'donum') tip(hover.x1 + 6, hover.y0, `⚡ ${hover.d.ad}`, `${hover.d.yilYazi} · ${hover.d.yer} · tıkla: dünyayı nasıl değiştirdi?`);
    else if (hover && hover.kind === 'magara') tip(hover.x1 + 6, hover.y0, `🪨 ${hover.m.ad}`, `${hover.m.donem} · ${hover.m.yer} · tıkla: kazı buluntuları ve nüfus`);
    else if (hover && hover.kind === 'mit') tip(hover.x1 + 6, hover.y0, `${hover.m.ik} ${hover.m.ad}`, `${hover.m.yer} · tıkla: anlatı ve gerçekte bilinenler`);
    else if (hover && hover.kind === 'tarihkazi') tip(hover.x1 + 6, hover.y0, `${hover.kz.ik || '🏺'} ${hover.kz.ad}`, `${hover.kz.yas} · ${hover.kz.yer} · tıkla: buluntular ve tarihî önemi`);
    else if (hover && hover.kind === 'fosilkazi') tip(hover.x1 + 6, hover.y0, `${hover.kz.ik || '🦴'} ${hover.kz.ad}`, `${hover.kz.yas} · ${hover.kz.yer} · tıkla: fosil buluntusu ve bilimsel önemi`);
    else if (hover && hover.kind === 'iklim') tip(hover.x1 + 6, hover.y0, `${hover.b.ik} ${hover.n.ad}`, `${hover.b.sicaklik} · Yağış: ${hover.b.yagis} · tıkla: iklim özellikleri`);
    else if (hover && hover.kind === 'cizgi') tip(hover.x1 + 6, hover.y0, `${hover.cz.ik} ${hover.cz.ad}`, `${hover.cz.olcu} · tıkla: coğrafi çizgi bilgisi`);
    else if (hover && hover.kind === 'taban') tip(hover.x1 + 6, hover.y0, `${hover.t.ik} ${hover.t.ad}`, `${hover.t.olcu} · ${hover.t.yer} · tıkla: okyanus tabanı`);
    else if (hover && hover.kind === 'tabansirt') tip(hover.x1 + 6, hover.y0, `${hover.sr.ik} ${hover.sr.ad}`, `${hover.sr.olcu} · tıkla: sualtı sıradağı`);
    else if (hover && hover.kind === 'kutup') tip(hover.x1 + 6, hover.y0, `${hover.k.ik} ${hover.k.ad}`, `${hover.k.yer} · tıkla: ayrıntılar`);
    else if (hover && hover.kind === 'krater') tip(hover.x1 + 6, hover.y0, `☄️ ${hover.kr.ad}`, `${hover.kr.cap} · ${hover.kr.yas} · tıkla: çarpma hikâyesi`);
    else if (hover && hover.kind === 'gol') tip(hover.x1 + 6, hover.y0, `${hover.gl.ik} ${hover.gl.ad}`, `${hover.gl.olcu} · ${hover.gl.yer} · tıkla: ayrıntılar`);
    else if (hover && hover.kind === 'saat') tip(hover.x1 + 6, hover.y0, `🕐 ${hover.s.ad} · ${hover.saat}`, `UTC${hover.s.utc >= 0 ? '+' + hover.s.utc : hover.s.utc} · Canlı yerel saat`);
    else if (hover && hover.kind === 'yazi') tip(hover.x1 + 6, hover.y0, `${hover.yz.ik} ${hover.yz.ad}`, `${hover.yz.donem} · ${hover.yz.aile} · tıkla: ayrıntılar`);
    else if (hover && hover.kind === 'din') tip(hover.x1 + 6, hover.y0, `${hover.dn.ik} ${hover.dn.ad}`, `${hover.dn.donem} · ${hover.dn.yer} · tıkla: doğuşu ve yayılışı`);
    else if (hover && hover.kind === 'tarihgoc') tip(hover.x1 + 6, hover.y0, `${hover.mg.ik} ${hover.mg.ad}`, `${hover.mg.donem} · tıkla: büyük göç hikâyesi`);
    else if (hover && hover.kind === 'salgin') tip(hover.x1 + 6, hover.y0, `${hover.sg.ik} ${hover.sg.ad}`, `${hover.sg.donem} · ${hover.sg.kayip} · tıkla: yayılış ve etkileri`);
    else if (hover && hover.kind === 'bogaz') tip(hover.x1 + 6, hover.y0, `${hover.bg.ik} ${hover.bg.ad}`, `${hover.bg.olcu} · ${hover.bg.yer} · tıkla: stratejik önemi`);
    else if (hover && hover.kind === 'manyetik') tip(hover.x1 + 6, hover.y0, `${hover.mn.ik} ${hover.mn.ad}`, `${hover.mn.olcu} · ${hover.mn.yer} · tıkla: manyetik alan bilgisi`);
    else if (hover && hover.kind === 'tarimvav') tip(hover.x1 + 6, hover.y0, `${hover.tr.ik} ${hover.tr.ad}`, `${hover.tr.donem} · ${hover.tr.yer} · tıkla: tüm ürünler ve yabani ataları`);
    else if (hover && hover.kind === 'megakent') tip(hover.x1 + 6, hover.y0, `${hover.kral ? '👑 ' : hover.mk.ik + ' '}${hover.mk.ad}`, `${hover.kral ? 'BU YILIN EN BÜYÜK ŞEHRİ! · ' : ''}${hover.mk.donem} · Nüfus: ${hover.mk.nufus} · tıkla: ayrıntılar`);
    else if (hover && hover.kind === 'icat') tip(hover.x1 + 6, hover.y0, `${hover.it.ik} ${hover.it.ad}`, `${hover.it.donem} · ${hover.it.mucit} · tıkla: nasıl icat edildi?`);
    else if (hover && hover.kind === 'felsefe') tip(hover.x1 + 6, hover.y0, `${hover.it.ik} ${hover.it.ad}`, `${hover.it.donem} · ${hover.it.kurucu} · tıkla: temel fikirler`);
    else if (hover && hover.kind === 'insanlar') tip(hover.x1 + 6, hover.y0, `${hover.it.ik} ${hover.it.ad}`, `${hover.it.donem} · ${hover.it.yer} · tıkla: hayatı ve mirası`);
    else if (hover && hover.kind === 'surpriz') { const bul = !!(window.ZY && window.ZY.surprizBulunduMu && window.ZY.surprizBulunduMu(hover.sp.id)); tip(hover.x1 + 6, hover.y0, bul ? `${hover.sp.ik} ${hover.sp.ad}` : '✨ Gizli Sürpriz!', bul ? `${hover.sp.yer} · tıkla: hikâyesi` : 'Keşfetmek için tıkla! (+35 XP)'); }
    else if (hover && hover.kind === 'sehir') tip(hover.x1 + 6, hover.y0, hover.c.ad + (hover.c.cap ? ' (başkent)' : ''), hover.c.not || '');
  }
  function tip(x, y, t1, t2) {
    g.font = '700 13px Atkinson Hyperlegible Next, system-ui'; const w1 = g.measureText(t1).width; g.font = '12px Atkinson Hyperlegible Next, system-ui';
    const words = (t2 || '').split(' '), lines = []; let cur = ''; for (const w of words) { const n = cur ? cur + ' ' + w : w; if (g.measureText(n).width > 250 && cur) { lines.push(cur); cur = w; } else cur = n; } if (cur) lines.push(cur);
    const w = Math.max(w1, ...lines.map(l => g.measureText(l).width)) + 18, h = 24 + lines.length * 15;
    x = clamp(x, 4, W - w - 4); y = clamp(y - h, 4, H - h - 4);
    g.fillStyle = 'rgba(255,246,220,0.97)'; g.strokeStyle = OUT; g.lineWidth = 1; g.beginPath(); g.roundRect(x, y, w, h, 9); g.fill(); g.stroke();
    g.fillStyle = OUT; g.textAlign = 'left'; g.font = '700 13px Atkinson Hyperlegible Next, system-ui'; duzYazi(t1, x + 9, y + 17, 13);
    g.font = '12px Atkinson Hyperlegible Next, system-ui'; lines.forEach((l, i) => duzYazi(l, x + 9, y + 33 + i * 15, 12));
  }
  function hexA(hex, a) { const n = parseInt(hex.slice(1), 16); return `rgba(${n >> 16},${(n >> 8) & 255},${n & 255},${a})`; }
  function softHex(hex) { const n = parseInt(hex.slice(1), 16); const f = v => Math.round(v + (255 - v) * 0.35); return `rgb(${f(n >> 16)},${f((n >> 8) & 255)},${f(n & 255)})`; }
  function darkHex(hex) { const n = parseInt(hex.slice(1), 16); const f = v => Math.round(v * 0.45); return `rgb(${f(n >> 16)},${f((n >> 8) & 255)},${f(n & 255)})`; }
  function lightHex(hex) { const n = parseInt(hex.slice(1), 16); const f = v => Math.round(v + (255 - v) * 0.55); return `rgb(${f(n >> 16)},${f((n >> 8) & 255)},${f(n & 255)})`; }

  // Çizgi hitleri (h.pl: ekrandaki görünen parçalar, h.r: tolerans) çizgiye uzaklıkla, diğerleri kutuyla denetlenir.
  // pad > 0 (telefon dokunuşu): önce tam isabet aranır, bulunamazsa her şey pad kadar genişletilerek yeniden aranır.
  function hitIc(h, x, y, p) {
    if (x < h.x0 - p || x > h.x1 + p || y < h.y0 - p || y > h.y1 + p) return false;
    if (!h.pl) return true;
    const rr = (h.r + p) * (h.r + p);
    for (const s of h.pl) {
      if (s.length === 2) { if ((x - s[0]) ** 2 + (y - s[1]) ** 2 <= rr) return true; continue; }
      for (let i = 0; i + 3 < s.length; i += 2) {
        const ax = s[i], ay = s[i + 1], dx = s[i + 2] - ax, dy = s[i + 3] - ay, L2 = dx * dx + dy * dy;
        const t = L2 ? clamp(((x - ax) * dx + (y - ay) * dy) / L2, 0, 1) : 0;
        if ((x - ax - dx * t) ** 2 + (y - ay - dy * t) ** 2 <= rr) return true;
      }
    }
    return false;
  }
  function hitTest(x, y, pad) {
    for (let i = hits.length - 1; i >= 0; i--) if (hitIc(hits[i], x, y, 0)) return hits[i];
    if (pad) for (let i = hits.length - 1; i >= 0; i--) if (hitIc(hits[i], x, y, pad)) return hits[i];
    return null;
  }
  function drag(dx, dy) { if (acilis) return; idle = 0; target = null; const k = 57 / (R() || 1); vel = [dx * k, dy * k]; view.lon -= dx * k; view.lat = clamp(view.lat + dy * k, -80, 80); }
  function release() { /* eylemsizlik: son hız korunur */ }
  function hold() { vel = [0, 0]; }
  function zoom(f, x, y) {
    idle = 0; target = null;
    const nz = clamp(zt * f, 0.6, 4000);
    if (x != null) { // imlecin altındaki noktaya doğru yaklaş
      const r = R(), px = (x - W / 2) / r, py = -(y - H / 2) / r, z2 = 1 - px * px - py * py;
      if (z2 > 0) {
        const z = Math.sqrt(z2), lat = Math.asin(py * cl0 + z * sl0) / D, lon = view.lon + Math.atan2(px, z * cl0 - py * sl0) / D;
        const k = 1 - zt / nz; view.lat += (lat - view.lat) * k * 0.9; view.lon += (((lon - view.lon + 540) % 360) - 180) * k * 0.9;
      }
    }
    zt = nz;
  }
  function zoomTo(x, y, f) { zoom(f, x, y); }
  function goEgypt(ll, z) { idle = 0; vel = [0, 0]; target = ll ? { lat: ll[0], lon: ll[1], z: z || 6 } : { lat: 27.2, lon: 31.0, z: 6 }; }
  let pinAt = null;
  function pin(lat, lon, ad) { pinAt = { lat, lon, ad, t0: T }; }
  function goTo(lat, lon, z) { idle = 0; vel = [0, 0]; target = { lat, lon, z }; }
  // Açılış sahnesi: dünya uzakta ve yana dönük başlar, açılış görünümüne (o anki hedef) dönerek yaklaşır.
  // Hedef yoksa (küre yerine çoktan vardıysa) bulunduğu görünüm hedef alınır. Kullanıcı küreyi tutarsa sahne biter.
  // Sahnenin süresini (sn) döndürür. Sahne sürerken küre sürüklenemez; acilisGec() sahneyi hemen bitirir.
  const ACILIS_SURE = 5.6, ACILIS_Z0 = 0.045;
  let acilis = 0, acilisP = 1, acilisHiz = 0, acilisHedef = null, acYildiz = null, acilisT0 = 0;   // acilis > 0: sahne sürüyor (geçen süre, sn)
  function acilisSahnesi() {
    if (acilis) return 0;
    // sahne, bulutların göründüğü uzak görünümde biter (bulutlar yakınlık 1,12'den sonra silinmeye başlar)
    acilisHedef = target ? { lat: Math.min(target.lat, 28), lon: target.lon, z: Math.min(target.z, 1.04) } : { lat: view.lat, lon: view.lon, z: Math.min(zt, 1.04) };
    target = null; vel = [0, 0]; idle = 0; acilis = 0.0001; acilisP = 0; acYildiz = null; acilisT0 = performance.now();
    view.lon = acilisHedef.lon - 150; view.lat = acilisHedef.lat * 0.25; view.z = zt = ACILIS_Z0;
    return ACILIS_SURE;
  }
  function acilisGec() { if (acilis) acilis = ACILIS_SURE; }
  // Jeneriğin uzay katmanı: kameraya doğru akan yıldızlar (hız arttıkça iz bırakırlar) ve dünya henüz küçük bir noktayken
  // çevresindeki mavi parıltı. Sahne ilerledikçe söner; yalnızca sahne sürerken çizilir.
  function acilisUzay(dt, cx, cy, r) {
    if (!acYildiz) { acYildiz = []; let th = 7; const rn = () => (th = (th * 16807) % 2147483647) / 2147483647; for (let i = 0; i < 170; i++) acYildiz.push({ x: rn() * 2 - 1, y: rn() * 2 - 1, z: 0.08 + rn() * 0.92, s: 0.5 + rn() * 1.1, m: rn() < 0.22 }); }
    const son = 1 - clamp((acilisP - 0.72) / 0.24, 0, 1), gir = clamp(acilisP / 0.08, 0, 1), olc = Math.max(W, H) * 0.62;
    if (son > 0) {
      g.lineCap = 'round';
      for (const y of acYildiz) {
        const z0 = y.z; y.z -= acilisHiz * Math.min(dt, 0.05) * 0.34;
        if (y.z < 0.045) { y.z += 0.95; continue; }
        const x1 = cx + y.x / y.z * olc, y1 = cy + y.y / y.z * olc; if (x1 < -30 || x1 > W + 30 || y1 < -30 || y1 > H + 30) continue;
        const x0 = cx + y.x / z0 * olc, y0 = cy + y.y / z0 * olc, a = clamp((1 - y.z) * 1.5, 0, 1) * son * gir, k = y.s * (0.6 + 0.9 * (1 - y.z));
        g.strokeStyle = y.m ? `rgba(190,214,255,${(a * 0.95).toFixed(2)})` : `rgba(255,250,236,${(a * 0.9).toFixed(2)})`; g.lineWidth = k;
        g.beginPath(); g.moveTo(x0, y0); g.lineTo(x1 + 0.01, y1 + 0.01); g.stroke();
      }
    }
    const pa = 1 - clamp((r - 26) / 150, 0, 1);
    if (pa > 0) {
      const pr = Math.max(r * 4.5, 46), pg = g.createRadialGradient(cx, cy, r * 0.6, cx, cy, pr);
      pg.addColorStop(0, `rgba(140,205,255,${(0.62 * pa).toFixed(2)})`); pg.addColorStop(0.35, `rgba(90,160,245,${(0.22 * pa).toFixed(2)})`); pg.addColorStop(1, 'rgba(70,130,230,0)');
      g.fillStyle = pg; g.beginPath(); g.arc(cx, cy, pr, 0, 7); g.fill();
    }
  }
  function reset() { idle = 0; vel = [0, 0]; target = { lat: 24, lon: 22, z: 1 }; }
  // seçili yılda var olan devletler (dilim yüklenmemişse yüklenir ve kısa süre beklenir)
  async function devletler(y) {
    for (let i = 0; i < 40; i++) { const o = aktifSinirlar0(y); if (o.length) return o.map(q => ({ ad: duzAd(q.k, Math.max(y, SINIR_SON)) || q.k.tr || q.k.n, n: q.k.n, a: q.k.a, e: q.k.e, bb: q.k.bb, w: q.k.w, renk: q.k._r })); await new Promise(r => setTimeout(r, 250)); }
    return [];
  }
  // bir devletin o yılki sınır kaydı (oyunlar için): halkalar [enlem], [boylam] dizileri olarak
  async function kayit(n, y) {
    y = Math.max(y, SINIR_SON);
    const i = dilimNo(y); dilimIste(i);
    for (let t = 0; t < 80; t++) {
      const K = DILIM[i];
      if (K) { const k = K.find(q => q.n === n && y <= q.y1 && y >= q.y0); return k ? { n: k.n, ad: duzAd(k, y) || k.tr || k.n, e: k.e, bb: k.bb, w: k.w, H: k.H.map(h => ({ la: h.la, lo: h.lo })) } : null; }
      await new Promise(r => setTimeout(r, 250));
    }
    return null;
  }
  // bir noktanın o yıl hangi devletin sınırları içinde kaldığı (oyunlar için); yoksa null
  function llAt(x, y) {
    const r = R(), px = (x - W / 2) / r, py = -(y - H / 2) / r, z2 = 1 - px * px - py * py; if (z2 <= 0) return null;
    const z = Math.sqrt(z2), rawLo = view.lon + Math.atan2(px, z * cl0 - py * sl0) / D;
    return [Math.asin(py * cl0 + z * sl0) / D, ((((rawLo + 180) % 360) + 360) % 360) - 180];
  }
  function icerir(k, la, lo) {
    if (!k || !k.H || !k.bb || la < k.bb[0] || la > k.bb[1] || lo < k.bb[2] || lo > k.bb[3]) return false;
    const icinde = h => { let ic = false; for (let i = 0, j = h.la.length - 1; i < h.la.length; j = i++) { if ((h.la[i] > la) !== (h.la[j] > la) && lo < (h.lo[j] - h.lo[i]) * (la - h.la[i]) / (h.la[j] - h.la[i]) + h.lo[i]) ic = !ic; } return ic; };
    return k.H.filter(icinde).length % 2 === 1;
  }
  async function nerede(la, lo, y) {
    const icinde = h => { let ic = false; for (let i = 0, j = h.la.length - 1; i < h.la.length; j = i++) { if ((h.la[i] > la) !== (h.la[j] > la) && lo < (h.lo[j] - h.lo[i]) * (la - h.la[i]) / (h.la[j] - h.la[i]) + h.lo[i]) ic = !ic; } return ic; };
    const idx = dilimNo(Math.max(y, SINIR_SON));
    dilimIste(idx);
    for (let t = 0; t < 100; t++) {
      if (DILIM[idx]) {
        const o = aktifSinirlar0(y);
        const L = o.map(q => q.k).filter(k => la >= k.bb[0] && la <= k.bb[1] && lo >= k.bb[2] && lo <= k.bb[3] && k.H.filter(icinde).length % 2 === 1).sort((a, b) => a.a - b.a);
        return L[0] || null;
      }
      await new Promise(r => setTimeout(r, 80));
    }
    return null;
  }
  function turSinirUygun(o) {
    if (!turRota || !turRota.filtre) return true;
    const k = o && o.k; if (!k) return false;
    return turRota.filtre.test((k.n || '') + ' ' + (k.tr || '') + ' ' + (sinirAd(k) || ''));
  }
  function setTema(id) { if (!TEMALAR[id]) id = 'doga'; temaId = id; tema = TEMALAR[id]; aktifOnbellek = { y: null, o: [] }; tabanKey = ''; }
  return { devletler, kayit, nerede, llAt, icerir, karaMi, sinirAd, setTema, setTurRota: r => { turRota = r || null; tabanKey = ''; }, get sinirAcik() { return layers.sinir; }, sinirDurum: y => aktifSinirlar(y).filter(o => o.mod !== 'sabit').map(o => [o.k.n, o.mod, +(o.t || 0).toFixed(2)]), pin, layers, acilisSahnesi, acilisGec, setGorunum, get gorunum() { return gorunum; }, setLayer: (k, v) => { layers[k] = v; }, setYayilis: id => { yayilisAktif = id || null; }, setAralik: v => { aralik = v; }, get aralik() { return aralik; }, draw, hitTest, drag, hold, release, zoom, zoomTo, goEgypt, goTo, reset, setHover: h => { hover = h; }, get view() { return view; } };
})();
