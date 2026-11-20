// Dünya küresi (Google Earth benzeri): döndür, yakınlaştır; yaklaştıkça Mısır'ın ayrıntıları belirir.
// Kıyılar ve nehirler: Natural Earth 1:50m (kamu malı), data/dunya-veri.js.
// Seçili yıla göre: Mısır'ın sınırları, başkent, şehirler ve o yılda var olan yapılar (inşaat / tamam / harabe).
'use strict';
window.Dunya = (() => {
  const D = Math.PI / 180, OUT = '#2a1a0e';
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
  const rnd = i => { const x = Math.sin(i * 127.1 + 311.7) * 43758.5453; return x - Math.floor(x); };
  const lerp = (a, b, t) => a + (b - a) * t;
  let g, W = 0, H = 0, T = 0, Ycur = 0;
  const view = { lat: 24, lon: 22, z: 1 };
  let zt = 1, target = null, idle = 0, hover = null, vel = [0, 0];
  const hits = [];
  let aralik = 100;
  const layers = { yapi: true, sehir: true, sinir: true, savas: false, afet: false, antlasma: false, olay: false, kaynak: false, ticaret: true, yolculuk: false };

  // ---------- veri ----------
  const VERI = window.DUNYA_VERI || { kara: [], nehir: [] };
  const prep = pts => { const n = pts.length, la = new Float32Array(n), lo = new Float32Array(n); for (let i = 0; i < n; i++) { la[i] = pts[i][0] * D; lo[i] = pts[i][1] * D; } return { n, cl: la.map(Math.cos), sl: la.map(Math.sin), lo }; };
  const KARA = VERI.kara.map(prep);
  const NEHIR = VERI.nehir.map(r => ({ ad: r.ad, ...prep(r.p), nil: /Nile/.test(r.ad) }));
  const NIL_GERCEK = (() => {
    const segs = VERI.nehir.filter(r => r.ad === 'Nile').map(r => r.p[0][0] > r.p[r.p.length - 1][0] ? r.p.slice().reverse() : r.p.slice());
    segs.sort((a, b) => a[0][0] - b[0][0]);
    const out = []; for (const s of segs) out.push(...s);
    return out.length > 10 ? out : null;
  })();
  const COL = {
    col: [[30, -9], [32, -2], [33, 8], [31.5, 15], [30, 20], [31, 25], [31, 29.5], [30.4, 31.4], [30, 32.5], [31, 34.5], [33, 36.5], [35, 39], [33, 45], [30, 48], [28, 50], [24, 52], [22, 59], [17, 55], [14, 48], [15, 43], [18, 40], [17, 36], [15, 33], [16, 25], [15, 15], [16, 5], [17, -5], [20, -16.5], [24, -16], [28, -12]],
    asya: [[45, 52], [47, 60], [45, 68], [43, 78], [45, 90], [44, 105], [40, 110], [38, 100], [37, 88], [38, 75], [36, 62], [30, 62], [27, 58], [29, 52], [33, 48], [37, 52], [41, 53]],
    avustralya: [[-20, 118], [-22, 125], [-20, 135], [-24, 141], [-30, 141], [-32, 135], [-31, 128], [-27, 120], [-24, 116]],
    kalahari: [[-17, 12], [-22, 14], [-28, 16], [-29, 20], [-26, 25], [-20, 24], [-18, 18]],
    amerika: [[37, -118], [37, -110], [32, -104], [28, -104], [25, -109], [30, -114], [34, -117]],
    atakama: [[-18, -70.5], [-27, -70.5], [-27, -68.5], [-18, -68.5]]
  };
  const COLP = Object.values(COL).map(prep);
  const BUZ = [prep((() => { const p = []; for (let lo = -180; lo <= 180; lo += 6) p.push([-62, lo]); p.push([-90, 180], [-90, -180]); return p; })()),
    prep([[60, -44], [64, -52], [70, -55], [76, -68], [78, -72], [82, -62], [83.5, -35], [81.5, -15], [76, -19], [70, -22], [65.5, -37.5], [62, -42]])];
  const HAZAR = prep([[47, 49.5], [45, 47.5], [42.5, 48], [40.5, 50], [38.5, 49], [37, 50.5], [37.2, 54], [39.5, 53.5], [41, 52.8], [42.5, 52.5], [44.5, 50.5], [46.8, 53]]);
  // km: ortalama genişlik
  const BOGAZ = [
    { ad: 'İstanbul Boğazı', km: 1.4, p: prep([[40.995, 28.985], [41.02, 29.0], [41.045, 29.015], [41.07, 29.045], [41.09, 29.058], [41.12, 29.07], [41.15, 29.078], [41.175, 29.095], [41.2, 29.115], [41.23, 29.135]]) }
  ];
  const BULUT =Array.from({ length: 18 }, (_, i) => ({ la: (Math.sin(i * 12.9) * 0.5) * 120, lo: i * 47 % 360 - 180, r: 6 + (i % 5) * 2.5, a: 0.18 + (i % 3) * 0.06 }));

  // ---------- izdüşüm ----------
  let cl0 = 1, sl0 = 0, l0 = 0;
  const R = () => Math.min(W, H) * 0.42 * view.z;
  function pj(cl, sl, lo) {
    const d = lo - l0, cd = Math.cos(d);
    const x = cl * Math.sin(d), y = cl0 * sl - sl0 * cl * cd, z = sl0 * sl + cl0 * cl * cd;
    return [x, y, z];
  }
  function P(lat, lon) { const [x, y, z] = pj(Math.cos(lat * D), Math.sin(lat * D), lon * D); const r = R(); return [W / 2 + x * r, H / 2 - y * r, z]; }
  // çokgen yolu: ufkun arkasındaki kısımlar ufuk çemberi boyunca yay ile kapatılır
  function polyPath(p) {
    const r = R(), cx = W / 2, cy = H / 2;
    let any = false, prevA = null, minx = 1e9, maxx = -1e9, miny = 1e9, maxy = -1e9;
    const pts = [];
    for (let i = 0; i < p.n; i++) {
      const [x, y, z] = pj(p.cl[i], p.sl[i], p.lo[i]);
      if (z > 0) { any = true; const sx = cx + x * r, sy = cy - y * r; pts.push([sx, sy, null]); if (sx < minx) minx = sx; if (sx > maxx) maxx = sx; if (sy < miny) miny = sy; if (sy > maxy) maxy = sy; }
      else pts.push([0, 0, Math.atan2(-y, x)]);
    }
    if (!any || maxx < -20 || minx > W + 20 || maxy < -20 || miny > H + 20) return false;
    g.moveTo(...edgeOrPt(pts[0], cx, cy, r));
    for (let i = 1; i < pts.length; i++) {
      const q = pts[i];
      if (q[2] === null) { g.lineTo(q[0], q[1]); prevA = null; }
      else {
        const a = q[2];
        if (prevA !== null) { let d = a - prevA; while (d > Math.PI) d -= 2 * Math.PI; while (d < -Math.PI) d += 2 * Math.PI; const n = Math.ceil(Math.abs(d) / 0.15); for (let j = 1; j <= n; j++) { const aa = prevA + d * j / n; g.lineTo(cx + Math.cos(aa) * r, cy + Math.sin(aa) * r); } }
        else g.lineTo(cx + Math.cos(a) * r, cy + Math.sin(a) * r);
        prevA = a;
      }
    }
    g.closePath();
    return true;
  }
  const edgeOrPt = (q, cx, cy, r) => q[2] === null ? [q[0], q[1]] : [cx + Math.cos(q[2]) * r, cy + Math.sin(q[2]) * r];
  function linePath(p) { const r = R(); let pen = false; for (let i = 0; i < p.n; i++) { const [x, y, z] = pj(p.cl[i], p.sl[i], p.lo[i]); if (z > 0.02) { const sx = W / 2 + x * r, sy = H / 2 - y * r; pen ? g.lineTo(sx, sy) : g.moveTo(sx, sy); pen = true; } else pen = false; } }
  // ---------- yollar: sık noktalara bölünmüş çizgi, km cinsinden birikimli uzunluk ----------
  const km = (a, b) => { const la1 = a[0] * D, la2 = b[0] * D, h = Math.sin((la2 - la1) / 2) ** 2 + Math.cos(la1) * Math.cos(la2) * Math.sin((b[1] - a[1]) * D / 2) ** 2; return 12742 * Math.asin(Math.min(1, Math.sqrt(h))); };
  function yolHazirla(r) {
    if (r._d) return r._d;
    const pts = [];
    for (let i = 0; i < r.pts.length - 1; i++) { const a = r.pts[i], b = r.pts[i + 1], n = Math.max(1, Math.ceil(Math.hypot(b[0] - a[0], b[1] - a[1]) / 0.6)); for (let j = 0; j < n; j++) pts.push([a[0] + (b[0] - a[0]) * j / n, a[1] + (b[1] - a[1]) * j / n]); }
    pts.push(r.pts[r.pts.length - 1]);
    const cum = [0]; for (let i = 1; i < pts.length; i++) cum.push(cum[i - 1] + km(pts[i - 1], pts[i]));
    return (r._d = { pts, cum, L: cum[cum.length - 1] || 1, p: prep(pts) });
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
  // devlet rengi: aynı ton, resimli haritaya uygun toprak/pastel karışımı
  function siyasiRenk(hex) { const n = parseInt(hex.slice(1), 16), m = [214, 150, 104], f = (v, i) => Math.round(v * 0.6 + m[i] * 0.4); return `rgb(${f(n >> 16, 0)},${f((n >> 8) & 255, 1)},${f(n & 255, 2)})`; }
  let katmanCv = null;
  function katman(w, h) { if (!katmanCv) katmanCv = document.createElement('canvas'); if (katmanCv.width !== w || katmanCv.height !== h) { katmanCv.width = w; katmanCv.height = h; } return katmanCv; }
  const llPath = pts => { const p = prep(pts); return () => polyPath(p); };

  // ---------- Mısır katmanı: sınırlar ----------
  let sinirCache = null;
  function nilIdx(ll) { const N = NIL_GERCEK || (window.Harita && window.Harita.NIL) || []; let bi = 0, bd = 1e9; N.forEach((p, i) => { const d = Math.hypot(p[0] - ll[0], p[1] - ll[1]); if (d < bd) { bd = d; bi = i; } }); return bi; }
  function band(aName, bName, w = 0.42) {
    const N = NIL_GERCEK || window.Harita.NIL, NN = window.NIL_NOKTA;
    let ia = nilIdx(NN[aName]), ib = nilIdx(NN[bName]); if (ia > ib) [ia, ib] = [ib, ia];
    const s = N.slice(ia, ib + 1); if (s.length < 2) return null;
    const L = [], Rr = [];
    for (let i = 0; i < s.length; i++) {
      const a = s[Math.max(0, i - 1)], b = s[Math.min(s.length - 1, i + 1)];
      let dy = b[0] - a[0], dx = (b[1] - a[1]) * Math.cos(s[i][0] * D); const n = Math.hypot(dx, dy) || 1; dx /= n; dy /= n;
      const k = w / Math.cos(s[i][0] * D);
      L.push([s[i][0] + dx * w, s[i][1] - dy * k]); Rr.push([s[i][0] - dx * w, s[i][1] + dy * k]);
    }
    return prep([...L, ...Rr.reverse()]);
  }
  function sinirlar() {
    if (sinirCache) return sinirCache;
    const DELTA = prep((window.Harita && window.Harita.DELTA) || []);
    sinirCache = (window.SINIRLAR || []).map(s => ({ ...s, parts: [s.vadi && band(...s.vadi), s.delta && DELTA, ...(s.poly || []).map(prep)].filter(Boolean) }));
    return sinirCache;
  }

  // ---------- simgeler (yapıların küçük resimleri) ----------
  function sh(x, y, s) { g.fillStyle = 'rgba(0,0,0,0.28)'; g.beginPath(); g.ellipse(x, y + s * 0.75, s * 1.1, s * 0.25, 0, 0, 7); g.fill(); }
  function poly(pts, fill, lw = 1.2, dash) { g.beginPath(); g.moveTo(pts[0], pts[1]); for (let i = 2; i < pts.length; i += 2) g.lineTo(pts[i], pts[i + 1]); g.closePath(); if (fill) { g.fillStyle = fill; g.fill(); } if (lw) { g.strokeStyle = OUT; g.lineWidth = lw; if (dash) g.setLineDash(dash); g.stroke(); g.setLineDash([]); } }
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
      default: g.beginPath(); g.arc(x, y, s * 0.6, 0, 7); g.fillStyle = light; g.fill(); g.strokeStyle = OUT; g.stroke();
    }
  }
  function icon(it, x, y, s) {
    const hov = hover && hover.it === it;
    if (hov) s *= 1.18;
    sh(x, y, s);
    if (it.st === 'harabe') { g.globalAlpha = 0.65; iconShape(it.type, x, y, s, '#c9bfae', '#a59a88'); g.globalAlpha = 1; return; }
    if (it.st === 'ins') {
      // inşaat: önce soluk taslak, sonra ilerlemeye göre aşağıdan yukarı dolan yapı, iskele ve vinç
      g.globalAlpha = 0.35; iconShape(it.type, x, y, s, 'rgba(255,240,210,0.5)', 'rgba(220,200,160,0.5)'); g.globalAlpha = 1;
      const top = y - s * 1.1, bot = y + s * 0.85, cut = bot - (bot - top) * clamp(it.p || 0.05, 0.08, 1);
      g.save(); g.beginPath(); g.rect(x - s * 2, cut, s * 4, bot - cut + 4); g.clip(); iconShape(it.type, x, y, s, '#f0c674', '#c99a4a'); g.restore();
      g.strokeStyle = `rgba(255,150,40,${0.45 + 0.35 * Math.sin(T * 4)})`; g.lineWidth = 1.5; g.beginPath(); g.arc(x, y, s * 1.6, 0, 7); g.stroke();
      return;
    }
    iconShape(it.type, x, y, s, it.type === 'true' || it.type === 'bent' ? '#fbf1d6' : '#f1dcae', it.type === 'true' || it.type === 'bent' ? '#d8c39a' : '#c9a46a');
  }
  // olayların canlı efektleri: savaşta yükselen duman ve alevler, yangında alev, yanardağda kül bulutu,
  // depremde yayılan halkalar, dalgada su halkaları, kuraklıkta sıcak titreşimi, salgında soluk ışıma
  function puff(x, y, r, col, a) { if (!(r > 0) || !(a > 0)) return; g.fillStyle = col.replace('A', a.toFixed(3)); g.beginPath(); g.arc(x, y, r, 0, 7); g.fill(); }
  function evFx(e, x, y, s, now) {
    const k = now ? 1 : 0.6, seed = Math.abs(e.y * 0.37); // MS yılları eksi: kalan da eksi çıkıp yarıçapı bozmasın
    if (e.tur === 'savas') {
      for (let i = 0; i < 7; i++) { const ph = (T * 0.35 + i / 7 + seed) % 1; puff(x + Math.sin(i * 2.1 + T * 0.6) * s * 0.5 + ph * s * 0.9, y - s * 0.4 - ph * s * 3.2, s * (0.35 + ph * 0.9), 'rgba(60,55,50,A)', 0.55 * (1 - ph) * k); }
      for (let i = 0; i < 5; i++) { const ph = (T * 1.6 + i / 5 + seed) % 1; puff(x + (rnd(i) - 0.5) * s * 1.6, y + s * 0.55 - ph * s * 1.1, s * 0.22 * (1 - ph) + 0.6, i % 2 ? 'rgba(255,170,40,A)' : 'rgba(230,70,30,A)', 0.9 * (1 - ph) * k); }
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
  function evIcon(e, x, y, s) {
    const bg = { savas: '#a8322a', afet: '#c9701e', antlasma: '#2f6fa8', olay: '#7a4fb0' }[e.tur] || '#555';
    g.fillStyle = bg; g.strokeStyle = '#fff6dc'; g.lineWidth = 1.6; g.beginPath(); g.arc(x, y, s, 0, 7); g.fill(); g.stroke();
    g.save(); g.translate(x, y); const k = s / 10; g.scale(k, k); g.lineCap = 'round'; g.lineJoin = 'round';
    const W_ = '#fff6dc';
    if (e.tur === 'savas') {
      for (const sd of [-1, 1]) { g.save(); g.rotate(sd * 0.78); g.strokeStyle = W_; g.lineWidth = 2.2; g.beginPath(); g.moveTo(0, -7); g.lineTo(0, 4); g.stroke(); g.lineWidth = 2.6; g.beginPath(); g.moveTo(-3, 4); g.lineTo(3, 4); g.stroke(); g.lineWidth = 2; g.beginPath(); g.moveTo(0, 4); g.lineTo(0, 7.5); g.stroke(); g.restore(); }
    } else if (e.tur === 'olay') {
      g.fillStyle = W_; g.fillRect(-6, 4, 12, 2.4); g.fillRect(-6, -6, 12, 2.2);
      for (let i = 0; i < 3; i++) g.fillRect(-5 + i * 4, -4, 2, 8);
      g.beginPath(); g.moveTo(-7, -6); g.lineTo(0, -9.5); g.lineTo(7, -6); g.closePath(); g.fill();
    } else if (e.tur === 'antlasma') {
      g.fillStyle = W_; g.fillRect(-5, -6, 10, 12); g.strokeStyle = bg; g.lineWidth = 1.2; for (let i = 0; i < 3; i++) { g.beginPath(); g.moveTo(-3, -3 + i * 3); g.lineTo(3, -3 + i * 3); g.stroke(); }
      g.fillStyle = '#d9473a'; g.beginPath(); g.arc(3, 5, 2.6, 0, 7); g.fill();
    } else {
      g.strokeStyle = W_; g.fillStyle = W_; g.lineWidth = 2;
      switch (e.alt) {
        case 'deprem': g.beginPath(); g.moveTo(-1, -7); g.lineTo(2, -2); g.lineTo(-2, 1); g.lineTo(2, 4); g.lineTo(0, 7); g.stroke(); g.beginPath(); g.moveTo(-7, 6); g.lineTo(7, 6); g.stroke(); break;
        case 'tsunami': case 'sel': g.beginPath(); g.moveTo(-7, 3); g.quadraticCurveTo(-4, -6, 2, -5); g.quadraticCurveTo(6, -4, 4, 0); g.quadraticCurveTo(1, 0, 2, 3); g.stroke(); g.beginPath(); g.moveTo(-7, 6); g.quadraticCurveTo(0, 3, 7, 6); g.stroke(); break;
        case 'yangin': g.beginPath(); g.moveTo(0, 7); g.quadraticCurveTo(-7, 3, -2, -7); g.quadraticCurveTo(-1, -2, 2, -3); g.quadraticCurveTo(7, 2, 0, 7); g.fill(); break;
        case 'yanardag': g.beginPath(); g.moveTo(-7, 6); g.lineTo(-2, -2); g.lineTo(2, -2); g.lineTo(7, 6); g.closePath(); g.fill(); g.fillStyle = '#ffd666'; for (let i = 0; i < 3; i++) { g.beginPath(); g.arc(-2 + i * 2, -5 - i % 2 * 2, 1.4, 0, 7); g.fill(); } break;
        case 'kuraklik': g.beginPath(); g.arc(0, -1, 3.2, 0, 7); g.fill(); for (let i = 0; i < 8; i++) { const a = i * Math.PI / 4; g.beginPath(); g.moveTo(Math.cos(a) * 4.6, -1 + Math.sin(a) * 4.6); g.lineTo(Math.cos(a) * 6.6, -1 + Math.sin(a) * 6.6); g.stroke(); } break;
        case 'salgin': g.beginPath(); g.arc(0, 0, 3.5, 0, 7); g.fill(); for (let i = 0; i < 6; i++) { const a = i * Math.PI / 3; g.beginPath(); g.moveTo(Math.cos(a) * 3.5, Math.sin(a) * 3.5); g.lineTo(Math.cos(a) * 6.5, Math.sin(a) * 6.5); g.stroke(); g.beginPath(); g.arc(Math.cos(a) * 6.8, Math.sin(a) * 6.8, 1.2, 0, 7); g.fill(); } break;
        default: g.beginPath(); g.arc(0, 0, 4, 0, 7); g.fill();
      }
    }
    g.restore();
  }
  function star(x, y, r) { g.beginPath(); for (let i = 0; i < 10; i++) { const a = -Math.PI / 2 + i * Math.PI / 5, rr = i % 2 ? r * 0.45 : r; g.lineTo(x + Math.cos(a) * rr, y + Math.sin(a) * rr); } g.closePath(); }
  function text(x, y, t, o = {}) {
    g.font = `${o.it ? 'italic ' : ''}${o.w || 600} ${o.size || 12}px ${o.serif ? 'Georgia, serif' : 'system-ui, sans-serif'}`;
    g.textAlign = o.align || 'center'; g.textBaseline = 'middle';
    if (o.ls) { try { g.letterSpacing = o.ls + 'px'; } catch (e) { /* eski tarayıcı */ } }
    g.lineWidth = o.halo ?? 3; g.strokeStyle = o.haloCol || 'rgba(20,14,8,0.75)'; g.lineJoin = 'round'; g.strokeText(t, x, y);
    g.fillStyle = o.col || '#fff'; g.fillText(t, x, y);
    try { g.letterSpacing = '0px'; } catch (e) { /* */ }
    g.textBaseline = 'alphabetic';
  }

  // Etiket kuyruğu: yazılar hemen çizilmez; kare sonunda önem sırasına göre, üst üste binmeyecek şekilde yerleştirilir.
  const LQ = [], OBS = [];
  function lab(pri, x, y, t, o = {}) { LQ.push({ pri, x, y, t, o }); }
  function obstacle(x0, y0, x1, y1) { OBS.push([x0, y0, x1 - x0, y1 - y0]); }
  function flushLabels() {
    const hit = (b, q) => !(b[0] > q[0] + q[2] || b[0] + b[2] < q[0] || b[1] > q[1] + q[3] || b[1] + b[3] < q[1]);
    LQ.sort((a, b) => b.pri - a.pri);
    const placed = [];
    for (const L of LQ) {
      const o = L.o, sz = o.size || 12;
      g.font = `${o.it ? 'italic ' : ''}${o.w || 600} ${sz}px ${o.serif ? 'Georgia, serif' : 'system-ui, sans-serif'}`;
      const tw = g.measureText(L.t).width + (o.ls || 0) * L.t.length, pad = 3;
      const al = o.align || 'center', x0 = al === 'left' ? L.x : al === 'right' ? L.x - tw : L.x - tw / 2;
      const b = [x0 - pad, L.y - sz / 2 - pad, tw + pad * 2, sz + pad * 2];
      if (placed.some(q => hit(b, q))) continue;
      if (L.pri < 85 && OBS.some(q => hit(b, q))) continue;
      placed.push(b); text(L.x, L.y, L.t, o);
    }
    LQ.length = 0; OBS.length = 0;
  }

  // ---------- çizim ----------
  // items: [{id, ad, type, ll, st, p}], cities: [{ad, ll, cap, tur}]
  function draw(ctx, w, h, dpr, dt, Y, items, cities) {
    g = ctx; W = w; H = h; T += dt; idle += dt; Ycur = Y;
    g.setTransform(dpr, 0, 0, dpr, 0, 0);
    // hareket: hedef, eylemsizlik, yavaş dönüş
    if (target) { const e = 1 - Math.exp(-dt * 2.6); let dl = ((target.lon - view.lon + 540) % 360) - 180; view.lon += dl * e; view.lat += (target.lat - view.lat) * e; zt = lerp(zt, target.z, e); if (Math.abs(dl) < 0.02 && Math.abs(target.z - zt) < 0.01) target = null; }
    else if (Math.hypot(vel[0], vel[1]) > 0.01) { view.lon -= vel[0]; view.lat = clamp(view.lat + vel[1], -80, 80); vel = vel.map(v => v * Math.pow(0.04, dt)); }
    else if (idle > 6 && zt < 1.6) view.lon += dt * 3;
    view.z = lerp(view.z, zt, 1 - Math.exp(-dt * 9));
    cl0 = Math.cos(view.lat * D); sl0 = Math.sin(view.lat * D); l0 = view.lon * D;
    const DM = !!(window.BOLGE && window.BOLGE.dunya), r = R(), cx = W / 2, cy = H / 2, ez = DM ? clamp((view.z - 1.15) / 0.7, 0, 1) : clamp((view.z - 1.8) / 1.4, 0, 1);
    // uzay ve yıldızlar
    const sp = g.createRadialGradient(cx, cy, r * 0.5, cx, cy, Math.max(W, H)); sp.addColorStop(0, '#0d1430'); sp.addColorStop(1, '#03050c');
    g.fillStyle = sp; g.fillRect(0, 0, W, H);
    for (let i = 0; i < 220; i++) { const x = ((Math.sin(i * 91.7) * 0.5 + 0.5) * W + view.lon * 0.4) % W, y = (Math.sin(i * 47.3 + 1) * 0.5 + 0.5) * H, tw = 0.25 + 0.6 * (Math.sin(i * 13 + T * (1 + i % 3)) * 0.5 + 0.5); g.fillStyle = `rgba(255,255,255,${tw})`; g.fillRect((x + W) % W, y, i % 9 ? 1.2 : 2, i % 9 ? 1.2 : 2); }
    // atmosfer
    const atm = g.createRadialGradient(cx, cy, r * 0.96, cx, cy, r * 1.16); atm.addColorStop(0, 'rgba(200,228,245,0.65)'); atm.addColorStop(0.5, 'rgba(170,210,240,0.2)'); atm.addColorStop(1, 'rgba(150,200,240,0)');
    g.fillStyle = atm; g.beginPath(); g.arc(cx, cy, r * 1.16, 0, 7); g.fill();
    // okyanus
    const oc = g.createRadialGradient(cx - r * 0.35, cy - r * 0.4, r * 0.05, cx, cy, r); oc.addColorStop(0, '#b4d6e8'); oc.addColorStop(0.55, '#8fbedb'); oc.addColorStop(1, '#5e93bd');
    g.fillStyle = oc; g.beginPath(); g.arc(cx, cy, r, 0, 7); g.fill();
    g.save(); g.beginPath(); g.arc(cx, cy, r, 0, 7); g.clip();
    // ızgara
    g.strokeStyle = `rgba(255,255,255,${0.1 * (1 - ez * 0.7)})`; g.lineWidth = 1;
    for (let la = -60; la <= 60; la += 30) { g.beginPath(); linePath(prep(Array.from({ length: 91 }, (_, i) => [la, -180 + i * 4]))); g.stroke(); }
    // karalar (tek yol: çöller ve buzlar bunun içine kırpılır)
    g.beginPath(); let anyLand = false; for (const p of KARA) if (polyPath(p)) anyLand = true;
    if (anyLand) {
      // resimli harita: kıyı boyunca açık sığ su parlaması, soluk yeşil ve hafif dokulu kara
      g.beginPath(); for (const p of KARA) polyPath(p);
      g.lineJoin = 'round'; for (const [w, a] of [[22, 0.12], [12, 0.18], [5, 0.28]]) { g.strokeStyle = `rgba(232,246,252,${a})`; g.lineWidth = w; g.stroke(); }
      const lg = g.createLinearGradient(cx - r, cy - r, cx + r, cy + r); lg.addColorStop(0, '#d3e0b2'); lg.addColorStop(1, '#a9c287');
      g.fillStyle = lg; g.fill('evenodd');
      g.save(); g.clip('evenodd');
      g.fillStyle = dokuDesen(); g.globalAlpha = 0.55; g.fillRect(cx - r, cy - r, r * 2, r * 2); g.globalAlpha = 1;
      g.beginPath(); for (const p of COLP) polyPath(p); g.fillStyle = 'rgba(236,222,182,0.88)'; g.fill();
      g.beginPath(); for (const p of BUZ) polyPath(p); g.fillStyle = 'rgba(248,250,252,0.95)'; g.fill();
      g.restore();
      g.beginPath(); polyPath(HAZAR); g.fillStyle = '#93c2dc'; g.fill(); g.strokeStyle = 'rgba(100,125,90,0.5)'; g.lineWidth = 0.7; g.stroke();
      g.beginPath(); for (const p of KARA) polyPath(p); g.strokeStyle = `rgba(105,125,90,${0.45 + ez * 0.2})`; g.lineWidth = 0.7 + ez * 0.3; g.stroke();
    }
    // dönemin siyasi sınırları: opak renk, keskin sınır çizgisi (nehirler üstte kalır)
    // Yalnızca karaya boyanır ve yarı saydamdır: denizler, boğazlar ve arazi görünür kalır.
    if (ez > 0 && layers.sinir && anyLand) {
      // dönemin devletleri: hepsi ayrı bir katmana boyanır, katman karaya kırpılır,
      // sonra yumuşak gölgeyle bindirilir (kabarık, resimli harita görünümü)
      const cv = g.canvas, L = katman(cv.width, cv.height), lc = L.getContext('2d'), gg = g;
      lc.setTransform(1, 0, 0, 1, 0, 0); lc.clearRect(0, 0, L.width, L.height); lc.setTransform(dpr, 0, 0, dpr, 0, 0);
      g = lc; g.lineJoin = 'round'; let var_ = false;
      for (const s of sinirlar()) {
        if (!(Y <= s.from && Y >= s.to)) continue;
        g.beginPath(); for (const p of s.parts) polyPath(p);
        g.fillStyle = siyasiRenk(s.renk); g.fill(); var_ = true;
        g.globalCompositeOperation = 'source-atop'; g.strokeStyle = 'rgba(255,250,235,0.45)'; g.lineWidth = 3; g.stroke();
        g.globalCompositeOperation = 'source-over'; g.strokeStyle = 'rgba(90,50,25,0.55)'; g.lineWidth = 0.9; g.stroke();
      }
      g.globalCompositeOperation = 'destination-in'; g.beginPath(); for (const p of KARA) polyPath(p); g.fill('evenodd'); g.globalCompositeOperation = 'source-over';
      g = gg;
      if (var_) { g.save(); g.globalAlpha = ez * 0.9; g.shadowColor = 'rgba(70,40,15,0.42)'; g.shadowBlur = 7 * dpr; g.shadowOffsetY = 3 * dpr; g.setTransform(1, 0, 0, 1, 0, 0); g.drawImage(L, 0, 0); g.restore(); }
      g.beginPath(); polyPath(HAZAR); g.fillStyle = '#93c2dc'; g.fill();
    }
    // dar boğazlar: 1:50m kıyı verisinde kapalı görünenler, su olarak çizilir
    g.lineCap = 'round'; g.lineJoin = 'round';
    if (view.z > 2.5) for (const b of BOGAZ) { g.beginPath(); linePath(b.p); g.strokeStyle = '#8fbedb'; g.lineWidth = clamp(b.km * r / 6371 * 2.5, 2.5, 40); g.stroke(); }
    // nehirler
    if (view.z > 1.6) for (const n of NEHIR) { if (n.nil) continue; g.beginPath(); linePath(n); g.strokeStyle = `rgba(80,145,195,${clamp((view.z - 1.6) / 2, 0, 0.75)})`; g.lineWidth = 0.8 + ez; g.stroke(); }
    // Nil: yeşil vadi + mavi nehir
    const nilW = clamp(view.z * 0.6, 1.4, 9);
    for (const n of NEHIR) if (n.nil) { g.beginPath(); linePath(n); g.strokeStyle = `rgba(90,150,60,${0.55 * (1 - ez * 0.85)})`; g.lineWidth = nilW * 1.8; g.stroke(); }
    if (window.Harita && view.z > 4 && view.z < 30) { const N = window.Harita; for (const br of (N.KOLLAR || [])) { g.beginPath(); linePath(prep(br)); g.strokeStyle = `rgba(90,150,60,${0.55 * (1 - ez * 0.85)})`; g.lineWidth = nilW * 1.4; g.stroke(); } }
    for (const n of NEHIR) if (n.nil) { g.beginPath(); linePath(n); g.strokeStyle = '#2f7fc0'; g.lineWidth = clamp(nilW * 0.32, 1.2, 6); g.stroke(); }
    if (window.Harita && view.z > 4 && view.z < 30) for (const br of window.Harita.KOLLAR || []) { g.beginPath(); linePath(prep(br)); g.strokeStyle = '#2f7fc0'; g.lineWidth = clamp(nilW * 0.22, 1, 4); g.stroke(); }
    // bulutlar (uzaktan)
    if (view.z < 3.5) { const ca = 1 - clamp((view.z - 2) / 1.5, 0, 1); for (const b of BULUT) { b.lo += dt * 1.5; const [x, y, z] = P(b.la, b.lo); if (z <= 0.1) continue; g.fillStyle = `rgba(255,255,255,${b.a * ca * z})`; g.beginPath(); g.ellipse(x, y, b.r * r / 100 * 3, b.r * r / 100 * 1.2 * z, 0, 0, 7); g.fill(); } }
    // ışık ve gölge
    const shd = g.createRadialGradient(cx - r * 0.45, cy - r * 0.45, r * 0.1, cx, cy, r * 1.02); shd.addColorStop(0, 'rgba(255,255,240,0.14)'); shd.addColorStop(0.65, 'rgba(0,0,0,0)'); shd.addColorStop(1, 'rgba(0,0,20,0.5)');
    g.fillStyle = shd; g.fillRect(cx - r, cy - r, r * 2, r * 2);
    // ---- Mısır katmanı ----
    hits.length = 0;
    if (ez > 0) {
      g.globalAlpha = ez;
      // dönemin sınırları
      for (const s of sinirlar()) {
        if (!(Y <= s.from && Y >= s.to)) continue;
        void s; // sınırlar artık nehirlerden önce, opak olarak çiziliyor
      }
      // coğrafi adlar
      const EGEO = [[32.4, 28.4, 'AKDENİZ', 'deniz', 2.2], [24.8, 36.0, 'KIZILDENİZ', 'deniz', 2.2], [29.4, 33.75, 'SİNA', 'bolge', 3], [25.4, 28.2, 'BATI ÇÖLÜ', 'bolge', 3], [27.3, 33.55, 'DOĞU ÇÖLÜ', 'bolge', 3.5], [21.6, 32.9, 'NUBYA', 'bolge', 3],
        [30.8, 30.35, 'AŞAĞI MISIR', 'misir', 2.6], [26.6, 31.55, 'YUKARI MISIR', 'misir', 2.6], [28.2, 31.15, 'Nil Nehri', 'nehir', 3.2], [29.42, 30.45, 'Faiyum', 'kucuk', 7], [31.1, 31.2, 'Delta', 'kucuk', 6]];
      const misirVar = !window.BOLGE || window.BOLGE.id === 'misir' || DM;
      const geo = [...(misirVar ? EGEO : []), ...(window.BOLGE && window.BOLGE.id !== 'misir' ? ((window.MISIR || {}).kureAdlari || []) : [])].filter(function (q) { return !this.has(q[2]) && this.add(q[2]); }, new Set());
      for (const [la, lo, ad, tur, zmin] of geo) {
        if (view.z < zmin) continue; const [x, y, z] = P(la, lo); if (z <= 0.05) continue;
        const pr = { deniz: 80, misir: 70, nehir: 55, bolge: 50, kucuk: 32 }[tur];
        if (tur === 'deniz') lab(pr, x, y, ad, { col: '#4d7392', it: true, serif: true, size: 13, w: 600, ls: 3, halo: 2.5, haloCol: 'rgba(225,240,248,0.75)' });
        else if (tur === 'misir') lab(pr, x, y, ad, { col: '#fffaf0', serif: true, size: 12.5, w: 600, ls: 2.5, haloCol: 'rgba(90,45,15,0.6)' });
        else if (tur === 'nehir') lab(pr, x, y, ad, { col: '#2f6f9e', it: true, serif: true, size: 12, w: 600, halo: 2.5, haloCol: 'rgba(240,248,252,0.75)' });
        else lab(pr, x, y, ad, { col: '#5e5434', it: tur === 'bolge', serif: true, size: tur === 'kucuk' ? 11 : 12, w: 600, ls: tur === 'bolge' ? 2 : 0, halo: 2.5, haloCol: 'rgba(245,245,230,0.7)' });
      }
      if (view.z > 8 && misirVar) for (const [la, lo, ad] of [[24.08, 32.89, '1. Çağlayan'], [21.8, 31.25, '2. Çağlayan'], [19.75, 30.4, '3. Çağlayan'], [18.68, 32.15, '4. Çağlayan']]) { const [x, y, z] = P(la, lo); if (z <= 0) continue; g.strokeStyle = '#fff'; g.lineWidth = 1.5; g.beginPath(); g.moveTo(x - 5, y - 3); g.lineTo(x, y + 2); g.lineTo(x + 5, y - 3); g.stroke(); lab(30, x + 8, y, ad, { align: 'left', size: 10.5, col: '#dfe9f5' }); }
      // sınır adları
      for (const s of sinirlar()) {
        if (!layers.sinir || !(Y <= s.from && Y >= s.to)) continue;
        if (DM && view.z < 2.6) continue;
        const [x, y, z] = P(...s.etiket); if (z > 0.05) lab(90, x, y, s.ad.toLocaleUpperCase('tr'), { col: '#fffaf0', size: 12, w: 600, serif: true, ls: 2, haloCol: 'rgba(80,40,15,0.55)' });
        if (s.etiket2) { const [x2, y2, z2] = P(...s.etiket2); if (z2 > 0.05) lab(60, x2, y2, s.ad2, { col: '#fff3dc', size: 11, w: 600, it: true, serif: true, haloCol: 'rgba(80,40,15,0.55)' }); }
      }
      // şehirler ve başkent
      const cityHits = [];
      for (const c of (layers.sehir ? cities : [])) {
        const [x, y, z] = P(...c.ll); if (z <= 0.05 || x < -20 || x > W + 20 || y < -20 || y > H + 20) continue;
        if (c.cap) {
          const pr = 1 + Math.sin(T * 3) * 0.12;
          g.fillStyle = 'rgba(255,214,102,0.25)'; g.beginPath(); g.arc(x, y, 11 * pr, 0, 7); g.fill();
          g.fillStyle = '#ffd666'; g.strokeStyle = OUT; g.lineWidth = 1.4; star(x, y, 7); g.fill(); g.stroke();
          if (!DM || view.z > 2.6) lab(100, x, y + 15, c.ad, { size: 12, w: 800, col: '#ffe7a3' }); obstacle(x - 9, y - 9, x + 9, y + 9);
          cityHits.push({ kind: 'sehir', c, x0: x - 10, x1: x + 10, y0: y - 10, y1: y + 10 });
        } else if (view.z > 7) {
          g.fillStyle = '#f4eedf'; g.strokeStyle = OUT; g.lineWidth = 1.2; g.beginPath(); g.arc(x, y, 3, 0, 7); g.fill(); g.stroke();
          obstacle(x - 4, y - 4, x + 4, y + 4); if (view.z > 9) lab(36, x, y + 11, c.ad, { size: 10.5, w: 600, col: '#f4e7cf' });
          cityHits.push({ kind: 'sehir', c, x0: x - 6, x1: x + 6, y0: y - 6, y1: y + 6 });
        }
      }
      // yapılar: küçük simgeler, tam yerinde. Uzaktan bir bölgede yalnızca en önemlisi görünür;
      // yaklaştıkça üst üste binmeyecek şekilde diğerleri de belirir.
      if (view.z >= 3 && layers.yapi) {
        const s = clamp(4.5 + view.z * 0.12, 5.5, 9), minD = Math.max(s * 2.7, view.z < 20 ? 30 : 0);
        const vis = []; for (const it of items) { const [x, y, z] = P(...it.ll); if (z > 0.05 && x > -20 && x < W + 20 && y > -20 && y < H + 20) vis.push({ it, x, y, kids: [] }); }
        const rank = o => (o.it.w || 1e4) * (o.it.st === 'ins' ? 3 : 1) * (o.it.st === 'harabe' ? 0.3 : 1);
        vis.sort((a, b) => rank(b) - rank(a));
        const shown = [];
        for (const o of vis) { const near = shown.find(q => Math.abs(q.x - o.x) < minD && Math.abs(q.y - o.y) < minD); if (near) near.kids.push(o); else shown.push(o); }
        shown.sort((a, b) => a.y - b.y);
        const rmax = Math.max(1, ...shown.map(rank));
        for (const o of shown) {
          icon(o.it, o.x, o.y, s); obstacle(o.x - s, o.y - s, o.x + s, o.y + s);
          if (view.z > 12) lab(38 + 8 * Math.sqrt(rank(o) / rmax), o.x, o.y + s + 8, o.it.ad, { size: 10.5, w: 600, col: '#fff6dc', halo: 2.5 });
          hits.push({ kind: 'yapi', it: o.it, kids: o.kids, cx: o.x, cy: o.y, x0: o.x - s - 3, x1: o.x + s + 3, y0: o.y - s - 4, y1: o.y + s + 3 });
        }
      }
      if (view.z < 14) hits.push(...cityHits); else hits.unshift(...cityHits);
      flushLabels();
      g.globalAlpha = 1;
    }
    // yeraltı kaynakları: seçili yılda işletilenler, element simgeli küçük rozetler
    if (layers.kaynak) {
      const KT = window.KAYNAK_TUR || {}, s = clamp(5 + view.z * 0.5, 6, 11);
      for (const k of window.KAYNAKLAR || []) {
        if (!(Y <= k.from && Y >= k.to)) continue;
        const [x, y, z] = P(...k.ll); if (z <= 0.05) continue;
        const t = KT[k.tur] || {}, hov = hover && hover.kind === 'kaynak' && hover.k === k;
        g.globalAlpha = clamp(z * 3, 0, 1);
        g.fillStyle = 'rgba(0,0,0,0.3)'; g.beginPath(); g.roundRect(x - s + 1, y - s + 2, s * 2, s * 2, 3); g.fill();
        g.fillStyle = t.renk; g.strokeStyle = hov ? '#ffd666' : '#fff6dc'; g.lineWidth = hov ? 2.4 : 1.4;
        g.beginPath(); g.roundRect(x - s, y - s, s * 2, s * 2, 3); g.fill(); g.stroke();
        const sem = t.sem || '?'; g.fillStyle = t.yazi; g.textAlign = 'center'; g.textBaseline = 'middle';
        g.font = `800 ${Math.round(s * (sem.length > 2 ? 0.62 : 0.95))}px system-ui`; g.fillText(sem, x, y + 0.5);
        if (view.z > 14) text(x, y + s + 9, k.ad.replace(/ \(.*\)$/, ''), { size: 10, w: 600, col: '#ffe7a3', halo: 2.5 });
        g.globalAlpha = 1;
        hits.push({ kind: 'kaynak', k, x0: x - s - 2, x1: x + s + 2, y0: y - s - 2, y1: y + s + 2 });
      }
    }
    // ticaret yolları: yalnızca kullanıldığı yıllarda; ince çizgi, malın aktığı yöne giden noktalar
    if (layers.ticaret) for (const t of window.TICARET_YOLLARI || []) {
      if (!(Y <= t.from && Y >= t.to)) continue;
      const d = yolHazirla(t), deniz = t.tur === 'deniz', col = deniz ? '40,110,165' : '160,85,25';
      const hov = hover && hover.kind === 'yol' && hover.t === t;
      g.beginPath(); linePath(d.p); g.strokeStyle = `rgba(${col},${hov ? 0.95 : 0.5})`; g.lineWidth = hov ? 2.6 : 1.5; g.setLineDash(deniz ? [6, 4] : []); g.stroke(); g.setLineDash([]);
      const sp = clamp(900 / view.z, 40, 600), off = (T * sp / 2.4) % sp;
      g.fillStyle = `rgba(${col},${hov ? 1 : 0.9})`;
      for (let s = off; s < d.L; s += sp) { const [x, y, z] = P(...yolNokta(d, s)); if (z <= 0.05) continue; g.beginPath(); g.arc(x, y, hov ? 2.8 : 2, 0, 7); g.fill(); }
      yolUclari(d, `rgba(${col},${hov ? 1 : 0.75})`, hov);
      const [mx, my, mz] = P(...yolNokta(d, d.L / 2));
      if (mz > 0.1 && (view.z > 2.4 || hov)) text(mx, my - 9, (deniz ? '⛵ ' : '🐪 ') + t.ad, { size: 10.5, w: 700, col: `rgb(${col})`, halo: 3, haloCol: 'rgba(250,248,236,0.85)', serif: true, it: true });
      for (let i = 0; i < d.pts.length; i += 2) { const [x, y, z] = P(...d.pts[i]); if (z > 0.05) hits.unshift({ kind: 'yol', t, x0: x - 6, x1: x + 6, y0: y - 6, y1: y + 6 }); }
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
        const lb = '⏱ ' + j.sure.split(' (')[0].split(';')[0]; g.font = '700 11px system-ui'; const w = g.measureText(lb).width + 14;
        g.fillStyle = hov ? '#ffd666' : 'rgba(58,26,12,0.9)'; g.strokeStyle = '#ff8c5a'; g.lineWidth = 1.2; g.beginPath(); g.roundRect(mx - w / 2, my - 10, w, 20, 10); g.fill(); g.stroke();
        g.fillStyle = hov ? '#2a1d10' : '#ffe7d6'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText(lb, mx, my + 0.5);
        hits.push({ kind: 'yolculuk', j, x0: mx - w / 2, x1: mx + w / 2, y0: my - 10, y1: my + 10 });
      }
      for (let i = 0; i < d.pts.length; i += 2) { const [x, y, z] = P(...d.pts[i]); if (z > 0.05) hits.unshift({ kind: 'yolculuk', j, x0: x - 6, x1: x + 6, y0: y - 6, y1: y + 6 }); }
      g.globalAlpha = 1;
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
      if (now) { const pr = (T * 1.2) % 1; g.strokeStyle = e.tur === 'savas' ? `rgba(230,60,40,${1 - pr})` : e.tur === 'afet' ? `rgba(255,150,40,${1 - pr})` : e.tur === 'olay' ? `rgba(170,120,255,${1 - pr})` : `rgba(80,180,255,${1 - pr})`; g.lineWidth = 2.5; g.beginPath(); g.arc(x, y, s * (1.2 + pr * 1.6), 0, 7); g.stroke(); }
      if (e.tur === 'savas') { g.save(); g.translate(x, y); g.rotate(Math.sin(T * 9 + e.y) > 0.6 ? 0.18 : 0); g.translate(-x, -y); evIcon(e, x, y, s); g.restore(); }
      else evIcon(e, x, y, s);
      g.globalAlpha = 1;
      hits.push({ kind: 'olay', e, x0: x - s - 3, x1: x + s + 3, y0: y - s - 3, y1: y + s + 3 });
    }
    g.restore();
    // uzaktan medeniyet işareti
    const isaretler = DM ? (window.BOLGE_SIRA || []).map(id => window.BOLGELER[id]) : [window.BOLGE || { isaret: [27, 31], ad: 'Mısır' }];
    const ia = DM ? clamp(1 - (view.z - 2.6) / 1.2, 0, 1) : 1 - ez;
    if (ia > 0) for (const BGd of isaretler) {
      const [x, y, z] = P(...(BGd.isaret || [27, 31])); const on = BGd.id !== 'misir' || (Y <= 3150 && Y >= 30);
      if (z > 0.1) {
        g.globalAlpha = ia; const pr = 1 + Math.sin(T * 2.5) * 0.25;
        g.strokeStyle = 'rgba(255,214,102,0.7)'; g.lineWidth = 2; g.beginPath(); g.arc(x, y, 14 * pr, 0, 7); g.stroke();
        g.fillStyle = on ? '#ffd666' : '#bbb'; g.strokeStyle = OUT; g.beginPath(); g.arc(x, y, 6, 0, 7); g.fill(); g.stroke();
        text(x + 14, y, (DM ? BGd.ikon + ' ' : '') + (BGd.ad || 'Mısır'), { align: 'left', size: 15, w: 800, col: '#ffe7a3', serif: true });
        hits.push({ kind: 'med', b: DM ? BGd : null, x0: x - 18, x1: x + 120, y0: y - 18, y1: y + 22 });
        g.globalAlpha = 1;
      }
    }
    // aramadan gelen konum işareti: birkaç saniye nabız gibi atan iğne
    if (pinAt && T - pinAt.t0 < 9) {
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
    if (hover && hover.kind === 'olay') tip(hover.x1 + 6, hover.y0, hover.e.ad, `${YIL.fmt(hover.e.y)} · ${({ savas: 'Savaş', afet: 'Doğal afet', antlasma: 'Antlaşma', olay: 'Önemli olay' })[hover.e.tur]} · tıkla: ayrıntılar`);
    else if (hover && hover.kind === 'yapi') tip(hover.x1 + 6, hover.y0, hover.it.ad, ({ ins: `İnşaat sürüyor · %${Math.round((hover.it.p || 0) * 100)}`, bitti: 'Tamamlanmış', harabe: 'Harabe / yarım kalmış' })[hover.it.st] + (hover.kids && hover.kids.length ? ` · tıkla: bilgi kartı · aynı yerde ${hover.kids.length} yapı daha: ${hover.kids.slice(0, 4).map(o => o.it.ad).join(', ')}${hover.kids.length > 4 ? '…' : ''}` : ' · tıkla: bilgi kartı'));
    else if (hover && hover.kind === 'kume') tip(hover.x1 + 6, hover.y0, `${hover.list.length} yapı`, hover.list.slice(0, 6).map(o => o.it.ad).join(', ') + (hover.list.length > 6 ? '…' : '') + ' · tıkla: yaklaş');
    else if (hover && hover.kind === 'kaynak') tip(hover.x1 + 6, hover.y0, hover.k.ad, `${((window.KAYNAK_TUR || {})[hover.k.tur] || {}).ad} · ${YIL.fmt(hover.k.from)} – ${hover.k.to <= -2026 ? 'bugün' : YIL.fmt(hover.k.to)} · tıkla: ayrıntılar`);
    else if (hover && hover.kind === 'yol') tip(hover.x1 + 6, hover.y0, hover.t.ad, `${hover.t.cikis} → ${hover.t.varis} · ${hover.t.mal} · tıkla: ayrıntılar`);
    else if (hover && hover.kind === 'yolculuk') tip(hover.x1 + 6, hover.y0, hover.j.ad, `${YIL.fmt(hover.j.y)} · ${hover.j.sure} · ${hover.j.nasil} · tıkla: hikâyesi`);
    else if (hover && hover.kind === 'sehir') tip(hover.x1 + 6, hover.y0, hover.c.ad + (hover.c.cap ? ' (başkent)' : ''), hover.c.not || '');
  }
  function tip(x, y, t1, t2) {
    g.font = '700 13px system-ui'; const w1 = g.measureText(t1).width; g.font = '12px system-ui';
    const words = (t2 || '').split(' '), lines = []; let cur = ''; for (const w of words) { const n = cur ? cur + ' ' + w : w; if (g.measureText(n).width > 250 && cur) { lines.push(cur); cur = w; } else cur = n; } if (cur) lines.push(cur);
    const w = Math.max(w1, ...lines.map(l => g.measureText(l).width)) + 18, h = 24 + lines.length * 15;
    x = clamp(x, 4, W - w - 4); y = clamp(y - h, 4, H - h - 4);
    g.fillStyle = 'rgba(255,246,220,0.97)'; g.strokeStyle = OUT; g.lineWidth = 1; g.beginPath(); g.roundRect(x, y, w, h, 9); g.fill(); g.stroke();
    g.fillStyle = OUT; g.textAlign = 'left'; g.font = '700 13px system-ui'; g.fillText(t1, x + 9, y + 17);
    g.font = '12px system-ui'; lines.forEach((l, i) => g.fillText(l, x + 9, y + 33 + i * 15));
  }
  function hexA(hex, a) { const n = parseInt(hex.slice(1), 16); return `rgba(${n >> 16},${(n >> 8) & 255},${n & 255},${a})`; }
  function softHex(hex) { const n = parseInt(hex.slice(1), 16); const f = v => Math.round(v + (255 - v) * 0.35); return `rgb(${f(n >> 16)},${f((n >> 8) & 255)},${f(n & 255)})`; }
  function darkHex(hex) { const n = parseInt(hex.slice(1), 16); const f = v => Math.round(v * 0.45); return `rgb(${f(n >> 16)},${f((n >> 8) & 255)},${f(n & 255)})`; }
  function lightHex(hex) { const n = parseInt(hex.slice(1), 16); const f = v => Math.round(v + (255 - v) * 0.55); return `rgb(${f(n >> 16)},${f((n >> 8) & 255)},${f(n & 255)})`; }

  function hitTest(x, y) { for (let i = hits.length - 1; i >= 0; i--) { const h = hits[i]; if (x >= h.x0 && x <= h.x1 && y >= h.y0 && y <= h.y1) return h; } return null; }
  function drag(dx, dy) { idle = 0; target = null; const k = 57 / (R() || 1); vel = [dx * k, dy * k]; view.lon -= dx * k; view.lat = clamp(view.lat + dy * k, -80, 80); }
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
  function reset() { idle = 0; vel = [0, 0]; target = { lat: 24, lon: 22, z: 1 }; }
  return { pin, layers, setLayer: (k, v) => { layers[k] = v; }, setAralik: v => { aralik = v; }, get aralik() { return aralik; }, draw, hitTest, drag, hold, release, zoom, zoomTo, goEgypt, goTo, reset, setHover: h => { hover = h; }, get view() { return view; } };
})();
