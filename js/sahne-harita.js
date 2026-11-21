// Sahnenin haritası: sahne bir panorama şeridi (wx); bu modül şeridi gerçek haritaya bağlar.
// Anıtların gerçek konumları (MISIR.coords) wx'e göre sıralanıp bir "yol" oluşturur: wx ↔ enlem/boylam.
// Çizim: kara ve nehirler (Natural Earth, data/dunya-veri.js), o yılın yapıları, yer adları, "buradasın" ve şu an görülen kısım.
'use strict';
window.SahneHarita = (() => {
  const D = Math.PI / 180, clamp = (v, a, b) => Math.max(a, Math.min(b, v));
  const sar = d => ((d + 540) % 360 + 360) % 360 - 180; // boylam farkını -180..180 aralığına getirir
  let KARA = null, NEHIR = null;
  function hazirla() {
    if (KARA) return;
    const V = window.DUNYA_VERI || { kara: [], nehir: [] };
    const kutu = p => { let a = 90, b = -90, c = 180, d = -180; for (const [la, lo] of p) { if (la < a) a = la; if (la > b) b = la; if (lo < c) c = lo; if (lo > d) d = lo; } return [a, b, c, d]; };
    KARA = V.kara.map(p => ({ p, k: kutu(p) }));
    NEHIR = V.nehir.map(r => ({ p: r.p, k: kutu(r.p), nil: /Nile/.test(r.ad) }));
  }

  // ---------- yol: wx ↔ konum ----------
  const yolOnb = new WeakMap();
  function yol(sp, co) {
    if (yolOnb.has(sp)) return yolOnb.get(sp);
    const grup = new Map(); let lo0 = null;
    for (const m of sp.monuments || []) {
      const c = co[m.id]; if (!c || typeof m.wx !== 'number') continue;
      if (lo0 == null) lo0 = c[1];
      const k = Math.round(m.wx / 60), g = grup.get(k) || { wx: 0, la: 0, lo: 0, n: 0 };
      g.wx += m.wx; g.la += c[0]; g.lo += lo0 + sar(c[1] - lo0); g.n++; grup.set(k, g); // tarih çizgisini aşan yerler (Pasifik) kopmasın
    }
    const pts = [...grup.values()].map(g => ({ wx: g.wx / g.n, la: g.la / g.n, lo: g.lo / g.n })).sort((a, b) => a.wx - b.wx);
    let r = null;
    if (pts.length >= 2) {
      const bb = [Math.min(...pts.map(p => p.la)), Math.max(...pts.map(p => p.la)), Math.min(...pts.map(p => p.lo)), Math.max(...pts.map(p => p.lo))];
      r = { pts, bb };
    }
    yolOnb.set(sp, r); return r;
  }
  function wxLL(y, wx) {
    const p = y.pts; if (wx <= p[0].wx) return [p[0].la, p[0].lo];
    for (let i = 1; i < p.length; i++) if (wx <= p[i].wx) { const a = p[i - 1], b = p[i], t = (wx - a.wx) / (b.wx - a.wx || 1); return [a.la + (b.la - a.la) * t, a.lo + (b.lo - a.lo) * t]; }
    const z = p[p.length - 1]; return [z.la, z.lo];
  }
  // konuma en yakın yol noktası: { wx, km }
  function llWx(y, la, lo) {
    const cs = Math.cos(la * D); let best = null;
    for (let i = 1; i < y.pts.length; i++) {
      const a = y.pts[i - 1], b = y.pts[i], ax = sar(a.lo - lo) * cs, ay = a.la - la, bx = sar(b.lo - lo) * cs, by = b.la - la;
      const dx = bx - ax, dy = by - ay, L = dx * dx + dy * dy, t = L ? clamp(-(ax * dx + ay * dy) / L, 0, 1) : 0;
      const px = ax + dx * t, py = ay + dy * t, d = Math.hypot(px, py) * 111;
      if (!best || d < best.km) best = { wx: a.wx + (b.wx - a.wx) * t, km: d };
    }
    return best;
  }

  // ---------- görünüm: merkez (la, lo) ve ölçek s (enlem derecesi başına piksel) ----------
  function sigdir(y, w, h, pay = 0.16) {
    const [a, b, c, d] = y.bb, la = (a + b) / 2, lo = (c + d) / 2, cs = Math.cos(la * D);
    const sLa = Math.max(b - a, 0.12), sLo = Math.max((d - c) * cs, 0.12);
    return { la, lo, s: Math.min(h * (1 - 2 * pay) / sLa, w * (1 - 2 * pay) / sLo) };
  }
  const izd = (v, w, h) => { const cs = Math.cos(v.la * D); return (la, lo) => [w / 2 + sar(lo - v.lo) * cs * v.s, h / 2 - (la - v.la) * v.s]; };
  const ters = (v, w, h, x, y) => { const cs = Math.cos(v.la * D); return [v.la - (y - h / 2) / v.s, v.lo + (x - w / 2) / (cs * v.s)]; };

  // ---------- zemin: deniz, kara, nehirler (görünüm değişmedikçe önbellekten) ----------
  const zOnb = new Map();
  function zemin(yuva, v, w, h, dpr) {
    const anahtar = [v.la.toFixed(5), v.lo.toFixed(5), v.s.toFixed(3), w, h, dpr].join('|');
    let z = zOnb.get(yuva);
    if (z && z.anahtar === anahtar) return z.cv;
    hazirla();
    const cv = (z && z.cv) || document.createElement('canvas'); cv.width = Math.round(w * dpr); cv.height = Math.round(h * dpr);
    const g = cv.getContext('2d'); g.setTransform(dpr, 0, 0, dpr, 0, 0);
    const cs = Math.cos(v.la * D), [la1, lo0] = ters(v, w, h, 0, 0), [la0, lo1] = ters(v, w, h, w, h), pay = 0.5;
    // Poligon bütün olarak 360° kaydırılır (nokta nokta sarmak tarih çizgisinde yatay çizgiler bırakırdı).
    // Görünüm tarih çizgisinin öbür yanına taşabilir: poligonun ortası görünümün ortasına en yakın kopyası seçilir.
    const kay = k => Math.round((v.lo - (k[2] + k[3]) / 2) / 360) * 360;
    const gorunur = k => { const o = kay(k); return !(k[1] < la0 - pay || k[0] > la1 + pay || k[3] + o < lo0 - pay || k[2] + o > lo1 + pay); };
    const yolla = (p, k) => { const o = kay(k); p.forEach(([la, lo], i) => { const x = w / 2 + (lo + o - v.lo) * cs * v.s, y = h / 2 - (la - v.la) * v.s; if (i) g.lineTo(x, y); else g.moveTo(x, y); }); };
    g.fillStyle = '#a8cde0'; g.fillRect(0, 0, w, h);
    g.beginPath();
    for (const { p, k } of KARA) { if (!gorunur(k)) continue; yolla(p, k); g.closePath(); }
    g.fillStyle = '#efe3c4'; g.fill(); g.strokeStyle = 'rgba(120,95,60,.45)'; g.lineWidth = 1; g.stroke();
    const nehir = (r, lw, renk) => { g.beginPath(); yolla(r.p, r.k); g.strokeStyle = renk; g.lineWidth = lw; g.lineJoin = g.lineCap = 'round'; g.stroke(); };
    for (const r of NEHIR) if (r.nil && gorunur(r.k)) nehir(r, clamp(0.09 * v.s, 4, 60), 'rgba(120,165,80,.45)'); // Nil'in yeşil vadisi
    for (const r of NEHIR) if (gorunur(r.k)) nehir(r, r.nil ? clamp(0.012 * v.s, 1.6, 6) : clamp(0.006 * v.s, 0.8, 3), '#4b8fc0');
    zOnb.set(yuva, { anahtar, cv });
    return cv;
  }

  const PIRAMIT = new Set(['true', 'step', 'bent', 'mastaba', 'ziggurat', 'stupa', 'mound', 'terrace']);
  const RENK = { bitti: '#5a3a1a', ins: '#e8892a', harabe: '#9b9081' };
  function sekil(g, x, y, r, tip, st) {
    g.beginPath();
    if (PIRAMIT.has(tip)) { g.moveTo(x, y - r * 1.15); g.lineTo(x + r * 1.1, y + r * 0.8); g.lineTo(x - r * 1.1, y + r * 0.8); g.closePath(); }
    else if (tip === 'city' || tip === 'modcity' || tip === 'citadel') g.rect(x - r * 0.85, y - r * 0.85, r * 1.7, r * 1.7);
    else g.arc(x, y, r * 0.9, 0, Math.PI * 2);
    g.fillStyle = RENK[st] || RENK.bitti; g.fill(); g.lineWidth = 1.3; g.strokeStyle = st === 'ins' ? '#fff' : 'rgba(255,248,230,.95)'; g.stroke();
  }
  function yazi(g, x, y, t, o, kutular) {
    g.font = `${o.kalin ? 700 : 600} ${o.boy}px system-ui, sans-serif`;
    const w = g.measureText(t).width, h = o.boy + 4;
    const yer = [[x + o.ara, y - h / 2], [x - o.ara - w, y - h / 2], [x - w / 2, y - o.ara - h], [x - w / 2, y + o.ara]];
    for (const [bx, by] of yer) {
      const k = [bx - 2, by, bx + w + 2, by + h];
      if (k[0] < 2 || k[2] > o.W - 2 || k[1] < 2 || k[3] > o.H - 2) continue;
      if (kutular.some(c => !(k[2] < c[0] || k[0] > c[2] || k[3] < c[1] || k[1] > c[3]))) continue;
      kutular.push(k);
      g.lineWidth = 3; g.strokeStyle = 'rgba(250,244,228,.92)'; g.lineJoin = 'round'; g.strokeText(t, bx, by + h - 4);
      g.fillStyle = o.renk || '#3a2414'; g.fillText(t, bx, by + h - 4);
      return true;
    }
    return false;
  }
  // ölçek çubuğu için yuvarlak km
  const yuvarla = km => { const b = Math.pow(10, Math.floor(Math.log10(km))), n = km / b; return (n >= 5 ? 5 : n >= 2 ? 2 : 1) * b; };

  // o: { yl, v, yapilar: [{ id, ad, tip, ll, st, wx }], yerler: [{ ad, wx }], cam: [wx0, wx, wx1], buyuk, hover, T }
  function ciz(g, yuva, w, h, dpr, o) {
    const { yl, v } = o, P = izd(v, w, h), hits = [], kutular = [], k = o.buyuk ? 1 : w < 120 ? 0.55 : 0.8;
    g.drawImage(zemin(yuva, v, w, h, dpr), 0, 0, w, h);
    // sahnedeki yol (kesik çizgi) ve şu an görülen kısım (sarı)
    const yolCiz = (a, b, lw, renk, kesik) => {
      g.beginPath(); const n = 40;
      for (let i = 0; i <= n; i++) { const [x, y] = P(...wxLL(yl, a + (b - a) * i / n)); if (i) g.lineTo(x, y); else g.moveTo(x, y); }
      g.setLineDash(kesik || []); g.lineWidth = lw; g.strokeStyle = renk; g.lineCap = g.lineJoin = 'round'; g.stroke(); g.setLineDash([]);
    };
    const p0 = yl.pts[0].wx, p1 = yl.pts[yl.pts.length - 1].wx;
    yolCiz(p0, p1, 2 * k + 0.5, 'rgba(110,60,20,.55)', [5 * k + 1, 4 * k + 1]);
    const [c0, cx, c1] = o.cam;
    yolCiz(clamp(c0, p0, p1), clamp(c1, p0, p1), 9 * k + 2, 'rgba(60,35,10,.5)');
    yolCiz(clamp(c0, p0, p1), clamp(c1, p0, p1), 6 * k + 1, 'rgba(255,214,102,.95)');
    // yapılar
    const r = (o.buyuk ? 7 : 5) * (w < 120 ? 0.75 : 1);
    const ys = o.yapilar.map(y => { const [x, yy] = P(...y.ll); return { y, x, yy }; }).filter(q => q.x > -20 && q.x < w + 20 && q.yy > -20 && q.yy < h + 20);
    for (const q of ys) { sekil(g, q.x, q.yy, r, q.y.tip, q.y.st); hits.push({ x: q.x, y: q.yy, r: Math.max(14, r + 6), tur: 'yapi', wx: q.y.wx, ad: q.y.ad, id: q.y.id }); }
    // buradasın
    const [bx, by] = P(...wxLL(yl, clamp(cx, p0, p1)));
    const nab = 1 + 0.35 * Math.sin((o.T || 0) * 4);
    g.beginPath(); g.arc(bx, by, (9 * k + 3) * nab, 0, Math.PI * 2); g.fillStyle = 'rgba(220,40,40,.22)'; g.fill();
    g.beginPath(); g.arc(bx, by, 4.5 * k + 2, 0, Math.PI * 2); g.fillStyle = '#d62828'; g.fill(); g.lineWidth = 2; g.strokeStyle = '#fff'; g.stroke();
    if (w >= 120) {
      const boy = o.buyuk ? 13 : 11, W = w, H = h;
      kutular.push([4, 4, 34, 46], [w - w * 0.36 - 20, h - 30, w, h]); // kuzey oku ve ölçek çubuğunun yeri yazılara kapalı
      kutular.push([bx - 8, by - 8, bx + 8, by + 8]);
      // kırmızı etikette bulunduğun yerin adı (o yerin ayrı etiketi yazılmaz)
      // Yer adlarının kendi koordinatı yok; konumu yalnızca yakınında (wx'te) konumu bilinen bir yapı varsa güvenilir.
      // Yoksa (ör. Pasifik'te Tahiti) haritaya yazılmaz, yanlış yere düşmesin.
      const capa = wx => { let b = null; for (const p of yl.pts) if (Math.abs(p.wx - wx) <= 120 && (!b || Math.abs(p.wx - wx) < Math.abs(b.wx - wx))) b = p; return b; };
      const capali = wx => !!capa(wx);
      const bAd = o.burada && capali(o.burada.wx) && Math.abs(o.burada.wx - cx) < 400 ? o.burada.ad : null;
      const burada = bAd ? (o.buyuk ? `Buradasın · ${bAd}` : bAd) : 'Buradasın';
      yazi(g, bx, by, burada, { boy, ara: 9, kalin: true, renk: '#b01e1e', W, H }, kutular);
      if (o.hover) { const q = ys.find(z => z.y.id === o.hover); if (q) yazi(g, q.x, q.yy, q.y.ad, { boy, ara: 9, kalin: true, W, H }, kutular); }
      // yer adları (sahnedeki tabelalar; yakındakiler önce), sonra büyük haritada yapı adları
      const yerler = o.yerler.filter(s => s.ad !== bAd && capali(s.wx)).sort((a, b) => Math.abs(a.wx - cx) - Math.abs(b.wx - cx));
      for (const s of yerler) { const c = capa(s.wx), [x, y] = P(c.la, c.lo); if (x < 0 || x > w || y < 0 || y > h) continue; if (yazi(g, x, y, s.ad, { boy: boy - 1, ara: 6, kalin: true, renk: '#6b3b12', W, H }, kutular)) hits.push({ x, y, r: 16, tur: 'yer', wx: s.wx, ad: s.ad }); }
      if (o.buyuk) for (const q of ys) yazi(g, q.x, q.yy, q.y.ad, { boy: 11.5, ara: r + 3, W, H }, kutular);
      // kuzey oku
      g.save(); g.translate(18, 22); g.fillStyle = 'rgba(40,25,10,.8)'; g.beginPath(); g.moveTo(0, -11); g.lineTo(6, 5); g.lineTo(0, 1); g.lineTo(-6, 5); g.closePath(); g.fill();
      g.font = '700 10px system-ui'; g.textAlign = 'center'; g.fillText('K', 0, 17); g.restore(); g.textAlign = 'left';
      // ölçek
      const km = yuvarla((w * 0.28) / v.s * 111), px = km / 111 * v.s, sx = w - px - 12, sy = h - 12;
      g.strokeStyle = 'rgba(40,25,10,.8)'; g.lineWidth = 2; g.beginPath(); g.moveTo(sx, sy - 4); g.lineTo(sx, sy); g.lineTo(sx + px, sy); g.lineTo(sx + px, sy - 4); g.stroke();
      g.font = '600 10px system-ui'; g.fillStyle = 'rgba(40,25,10,.85)'; g.textAlign = 'center'; g.fillText(`${km.toLocaleString('tr-TR')} km`, sx + px / 2, sy - 5); g.textAlign = 'left';
    }
    return hits;
  }
  // tıklanan yer: yapı ya da yer adı, yoksa yola yakınsa yol üstündeki nokta
  function sec(o, hits, w, h, x, y, yolPx = 36) {
    let best = null, bd = 1e9;
    for (const q of hits) { const d = Math.hypot(q.x - x, q.y - y); if (d < q.r && d < bd) { bd = d; best = q; } }
    if (best) return best;
    const [la, lo] = ters(o.v, w, h, x, y), r = llWx(o.yl, la, lo);
    if (r && r.km / 111 * o.v.s < yolPx) return { tur: 'yol', wx: r.wx };
    return null;
  }
  return { yol, wxLL, llWx, sigdir, ters, ciz, sec };
})();
