// Harita görünümü: Mısır haritası üzerinde seçili yılda var olan yapılar ve şehirler.
// Kodla çizilir; kıyı ve nehir çizgileri yaklaşık (gerçek enlem-boylam noktalarından basitleştirildi).
'use strict';
window.Harita = (() => {
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
  const OUT = '#3a2414';
  let g, W = 0, H = 0, u = 1, T = 0;
  const view = { lat: 26.0, lon: 31.2, z: 1 };
  let hover = null;
  const hits = [];

  // ---- coğrafya (enlem, boylam) ----
  const NIL = [[17.7, 33.98], [18.2, 33.6], [18.55, 32.9], [19.0, 32.6], [19.53, 33.33], [19.3, 32.6], [18.9, 32.2], [18.55, 31.85], [18.4, 31.4], [18.6, 30.8], [19.17, 30.48], [19.6, 30.4], [20.3, 30.5], [20.9, 30.6], [21.3, 30.9], [21.8, 31.33], [22.34, 31.62], [23.0, 32.4], [23.6, 32.85], [24.09, 32.9], [24.45, 32.93], [24.98, 32.88], [25.29, 32.55], [25.7, 32.64], [26.0, 32.7], [26.16, 32.72], [26.15, 32.4], [26.05, 32.25], [26.2, 32.0], [26.56, 31.7], [27.18, 31.18], [27.65, 30.9], [28.1, 30.75], [28.6, 30.9], [29.07, 31.1], [29.5, 31.2], [29.85, 31.25], [30.1, 31.22]];
  const ROSETTA = [[30.1, 31.22], [30.6, 30.95], [31.0, 30.6], [31.46, 30.37]];
  const DAMIETTA = [[30.1, 31.22], [30.5, 31.2], [30.97, 31.25], [31.52, 31.84]];
  const PELUSIAC = [[30.25, 31.3], [30.6, 31.5], [30.9, 31.9], [31.04, 32.54]];
  const CANOPIC = [[30.45, 31.0], [30.9, 30.55], [31.32, 30.06]];
  const KIYI = [[31.55, 24.0], [31.55, 25.15], [31.35, 27.24], [30.95, 28.8], [31.2, 29.9], [31.32, 30.06], [31.46, 30.37], [31.6, 31.0], [31.52, 31.84], [31.26, 32.3], [31.13, 33.8], [31.5, 34.45], [32.5, 34.9], [33.5, 35.3], [34.5, 35.6]];
  const KIZILDENIZ = [[29.97, 32.55], [29.0, 32.65], [28.0, 33.2], [27.25, 33.8], [26.1, 34.28], [25.0, 34.9], [24.0, 35.5], [23.0, 35.7], [22.0, 36.6], [20.0, 37.3], [17.0, 38.7], [17.0, 42], [24.0, 38.0], [26.0, 36.5], [27.35, 35.69], [28.0, 34.85], [29.53, 35.0], [29.5, 34.9], [28.5, 34.5], [27.73, 34.25], [28.2, 33.6], [29.0, 33.1], [29.9, 32.6]];
  const DELTA = [[30.05, 31.22], [30.5, 30.85], [31.0, 30.2], [31.32, 30.06], [31.46, 30.37], [31.6, 31.0], [31.52, 31.84], [31.15, 32.4], [30.6, 31.7], [30.25, 31.4]];
  const VAHA = [[29.2, 25.52, 0.18], [28.35, 28.85, 0.2], [25.5, 29.0, 0.3], [25.45, 30.55, 0.25], [29.35, 30.75, 0.32]];
  const ETIKET = [
    [32.5, 28.2, 'AKDENİZ', 'deniz'], [25.6, 35.4, 'KIZILDENİZ', 'deniz'], [29.4, 33.9, 'SİNA', 'bolge'],
    [27.0, 27.2, 'BATI ÇÖLÜ', 'bolge'], [26.4, 34.0, 'DOĞU ÇÖLÜ', 'bolge'], [21.2, 32.7, 'NUBYA', 'bolge'],
    [30.85, 30.4, 'AŞAĞI MISIR', 'mısır'], [27.0, 31.75, 'YUKARI MISIR', 'mısır']
  ];
  const CAGLAYAN = [[24.08, 32.89, '1. Çağlayan'], [21.8, 31.25, '2. Çağlayan'], [19.75, 30.4, '3. Çağlayan'], [18.68, 32.15, '4. Çağlayan']];

  const DEFAULT = { lat: 25.0, lon: 31.0, z: 0.86 };
  function base() { const k0 = Math.min(W / (12.5 * 0.9), H / 14.5); return k0; }
  function P2(lat, lon) {
    const k = base() * view.z;
    return [W / 2 + (lon - view.lon) * 0.9 * k, H / 2 - (lat - view.lat) * k];
  }
  function unP(x, y) { const k = base() * view.z; return [view.lat - (y - H / 2) / k, view.lon + (x - W / 2) / (0.9 * k)]; }
  function path(pts, close) { g.beginPath(); pts.forEach(([la, lo], i) => { const [x, y] = P2(la, lo); i ? g.lineTo(x, y) : g.moveTo(x, y); }); if (close) g.closePath(); }

  // ---- simgeler ----
  function icon(type, x, y, s, st) {
    const fill = st === 'ins' ? '#ffb347' : st === 'harabe' ? '#b8ab98' : '#fff6dc';
    g.lineWidth = 1.4; g.strokeStyle = OUT; g.fillStyle = fill; g.lineJoin = 'round';
    g.beginPath();
    switch (type) {
      case 'true': case 'bent': g.moveTo(x - s, y + s * 0.7); g.lineTo(x + s, y + s * 0.7); g.lineTo(x, y - s); break;
      case 'step': g.moveTo(x - s, y + s * 0.7); for (let i = 0; i < 3; i++) { const w = s * (1 - i * 0.3), yy = y + s * 0.7 - (i + 1) * s * 0.55; g.lineTo(x - w, yy); g.lineTo(x - w + s * 0.3, yy); } g.lineTo(x + s * 0.1, y - s * 0.95); for (let i = 2; i >= 0; i--) { const w = s * (1 - i * 0.3), yy = y + s * 0.7 - (i + 1) * s * 0.55; g.lineTo(x + w - s * 0.3, yy); g.lineTo(x + w, yy); } g.lineTo(x + s, y + s * 0.7); break;
      case 'mastaba': g.rect(x - s, y - s * 0.3, s * 2, s * 0.8); break;
      case 'obelisk': g.moveTo(x - s * 0.25, y + s * 0.8); g.lineTo(x + s * 0.25, y + s * 0.8); g.lineTo(x + s * 0.15, y - s * 0.7); g.lineTo(x, y - s); g.lineTo(x - s * 0.15, y - s * 0.7); break;
      case 'temple': case 'suntemple': g.moveTo(x - s, y + s * 0.7); g.lineTo(x - s * 0.8, y - s * 0.6); g.lineTo(x - s * 0.2, y - s * 0.6); g.lineTo(x - s * 0.2, y + s * 0.7); g.moveTo(x + s, y + s * 0.7); g.lineTo(x + s * 0.8, y - s * 0.6); g.lineTo(x + s * 0.2, y - s * 0.6); g.lineTo(x + s * 0.2, y + s * 0.7); g.closePath(); g.fill(); g.stroke(); g.beginPath(); g.rect(x - s * 0.2, y - s * 0.2, s * 0.4, s * 0.9); break;
      case 'terrace': g.rect(x - s, y + s * 0.1, s * 2, s * 0.6); g.rect(x - s * 0.65, y - s * 0.5, s * 1.3, s * 0.6); break;
      case 'colossus': case 'sphinx': g.ellipse(x, y + s * 0.2, s, s * 0.5, 0, 0, 7); g.moveTo(x + s * 0.9, y); g.arc(x + s * 0.6, y - s * 0.3, s * 0.4, 0, 7); break;
      case 'rocktemple': g.rect(x - s, y - s * 0.8, s * 2, s * 1.5); break;
      case 'lighthouse': g.rect(x - s * 0.4, y - s * 0.2, s * 0.8, s); g.rect(x - s * 0.25, y - s * 0.75, s * 0.5, s * 0.55); break;
      case 'valley': g.moveTo(x - s, y + s * 0.7); g.lineTo(x - s * 0.3, y - s * 0.8); g.lineTo(x, y - s * 0.3); g.lineTo(x + s * 0.4, y - s); g.lineTo(x + s, y + s * 0.7); break;
      case 'city': g.rect(x - s * 0.9, y - s * 0.3, s * 0.8, s); g.rect(x, y - s * 0.7, s * 0.9, s * 1.4); break;
      default: g.arc(x, y, s * 0.7, 0, 7);
    }
    g.fill(); g.stroke();
    if (st === 'ins') { g.strokeStyle = 'rgba(255,140,0,' + (0.5 + 0.5 * Math.sin(T * 5)) + ')'; g.lineWidth = 2; g.beginPath(); g.arc(x, y, s * 1.6, 0, 7); g.stroke(); }
  }

  // items: [{id, ad, type, ll, st}] ; cities: [{ad, ll, cap, tur, not}]
  function draw(ctx, w, h, dpr, dt, items, cities, info) {
    g = ctx; W = w; H = h; u = Math.min(W, H) / 600; T += dt;
    g.setTransform(dpr, 0, 0, dpr, 0, 0);
    hits.length = 0;
    // çöl
    const gr = g.createLinearGradient(0, 0, 0, H); gr.addColorStop(0, '#efd9aa'); gr.addColorStop(1, '#e6c58c');
    g.fillStyle = gr; g.fillRect(0, 0, W, H);
    // denizler
    g.fillStyle = '#86bddf';
    path([[40, 20], ...KIYI, [40, 40]], true); g.fill();
    path(KIZILDENIZ, true); g.fill();
    g.strokeStyle = 'rgba(40,90,130,0.5)'; g.lineWidth = 1.5; path(KIYI); g.stroke(); path(KIZILDENIZ, true); g.stroke();
    // vahalar, Faiyum, delta
    g.fillStyle = 'rgba(110,160,70,0.55)';
    for (const [la, lo, r] of VAHA) { const [x, y] = P2(la, lo); const k = base() * view.z; g.beginPath(); g.ellipse(x, y, r * k * 0.9, r * k * 0.6, 0, 0, 7); g.fill(); }
    const [fx, fy] = P2(29.45, 30.62), kz = base() * view.z; g.fillStyle = '#86bddf'; g.beginPath(); g.ellipse(fx, fy, 0.22 * kz, 0.08 * kz, -0.2, 0, 7); g.fill();
    g.fillStyle = 'rgba(110,160,70,0.6)'; path(DELTA, true); g.fill();
    // vadi şeridi (yeşil) ve nehir
    g.lineCap = 'round'; g.lineJoin = 'round';
    g.strokeStyle = 'rgba(110,160,70,0.6)'; g.lineWidth = clamp(0.12 * kz, 6, 34); path(NIL); g.stroke();
    g.strokeStyle = '#3f88a8'; g.lineWidth = clamp(0.025 * kz, 2, 9);
    for (const br of [NIL, ROSETTA, DAMIETTA, PELUSIAC, CANOPIC]) { path(br); g.stroke(); }
    // çağlayanlar
    g.font = `600 ${Math.round(10 + u * 2)}px system-ui`; g.textAlign = 'left';
    for (const [la, lo, ad] of CAGLAYAN) { const [x, y] = P2(la, lo); g.strokeStyle = OUT; g.lineWidth = 1.5; g.beginPath(); g.moveTo(x - 5, y - 3); g.lineTo(x, y + 2); g.lineTo(x + 5, y - 3); g.stroke(); if (view.z > 1.4) { g.fillStyle = 'rgba(58,36,20,0.7)'; g.fillText(ad, x + 7, y + 3); } }
    // Yukarı / Aşağı Mısır sınırı (Memfis hizası)
    { const [x0, y0] = P2(29.86, 30.6), [x1] = P2(29.86, 31.9); g.setLineDash([6, 5]); g.strokeStyle = 'rgba(120,60,20,0.55)'; g.lineWidth = 1.5; g.beginPath(); g.moveTo(x0, y0); g.lineTo(x1, y0); g.stroke(); g.setLineDash([]); }
    // bölge etiketleri
    g.textAlign = 'center';
    for (const [la, lo, ad, tur] of ETIKET) {
      const [x, y] = P2(la, lo);
      g.font = tur === 'mısır' ? `800 ${Math.round(13 + u * 4)}px Georgia, serif` : `italic 600 ${Math.round(11 + u * 3)}px Georgia, serif`;
      g.fillStyle = tur === 'deniz' ? 'rgba(30,80,120,0.65)' : tur === 'mısır' ? 'rgba(140,60,20,0.55)' : 'rgba(90,60,30,0.45)';
      g.fillText(ad, x, y);
    }
    // şehirler
    for (const c of cities) {
      const [x, y] = P2(c.ll[0], c.ll[1]);
      if (x < -40 || x > W + 40 || y < -40 || y > H + 40) continue;
      if (c.cap) {
        g.fillStyle = '#ffd666'; g.strokeStyle = OUT; g.lineWidth = 1.5; star(x, y, 9 + u * 2); g.fill(); g.stroke();
      } else {
        g.fillStyle = c.tur === 'kale' ? '#9c5a3a' : c.tur === 'maden' ? '#2f8fa3' : c.tur === 'liman' ? '#3f6fb0' : c.tur === 'nubya' ? '#5a3a22' : '#3a2414';
        g.beginPath(); g.arc(x, y, 4 + u, 0, 7); g.fill(); g.strokeStyle = '#fff6dc'; g.lineWidth = 1.2; g.stroke();
      }
      const big = c.cap || view.z > 1.6;
      if (big) { label(x + 10, y - 8, c.ad + (c.cap ? ' (başkent)' : ''), c.cap ? '#5b3a1e' : '#3a2414', c.cap); }
      hits.push({ kind: 'sehir', c, x0: x - 9, x1: x + 9, y0: y - 9, y1: y + 9 });
    }
    // yapılar: yakın olanlar kümelenir (tıklayınca yakınlaşır), az sayıdakiler sarmalla ayrılır
    const s = clamp(5 + view.z * 1.6, 6, 14) * (0.8 + u * 0.2), cell = s * 2.6;
    const buckets = new Map();
    for (const it of items) {
      const [x, y] = P2(it.ll[0], it.ll[1]);
      if (x < -40 || x > W + 40 || y < -40 || y > H + 40) continue;
      const key = Math.floor(x / cell) + ',' + Math.floor(y / cell);
      if (!buckets.has(key)) buckets.set(key, []);
      buckets.get(key).push({ it, x, y });
    }
    const placed = [];
    for (const list of buckets.values()) {
      if (list.length > 2) {
        const x = list.reduce((a, o) => a + o.x, 0) / list.length, y = list.reduce((a, o) => a + o.y, 0) / list.length;
        const r = s * 1.15 + Math.min(10, list.length);
        g.fillStyle = '#fff6dc'; g.strokeStyle = OUT; g.lineWidth = 1.6; g.beginPath(); g.arc(x, y, r, 0, 7); g.fill(); g.stroke();
        if (list.some(o => o.it.st === 'ins')) { g.strokeStyle = 'rgba(255,140,0,' + (0.5 + 0.5 * Math.sin(T * 5)) + ')'; g.lineWidth = 2.5; g.beginPath(); g.arc(x, y, r + 4, 0, 7); g.stroke(); }
        g.fillStyle = OUT; g.font = `800 ${Math.round(r * 0.9)}px system-ui`; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText(list.length, x, y + 1); g.textBaseline = 'alphabetic';
        hits.push({ kind: 'kume', list, cx: x, cy: y, x0: x - r, x1: x + r, y0: y - r, y1: y + r });
        placed.push([x, y]);
        continue;
      }
      for (const o of list) {
        let { x, y } = o; let a = 0, r = 0;
        while (placed.some(p => Math.hypot(p[0] - x, p[1] - y) < s * 1.9) && r < 120) { a += 1.1; r = 3 + a * 1.6; x = o.x + Math.cos(a) * r; y = o.y + Math.sin(a) * r; }
        if (r > 0) { g.strokeStyle = 'rgba(58,36,20,0.4)'; g.lineWidth = 1; g.beginPath(); g.moveTo(o.x, o.y); g.lineTo(x, y); g.stroke(); }
        placed.push([x, y]);
        icon(o.it.type, x, y, s, o.it.st);
        if ((hover && hover.it === o.it) || view.z > 3.2) label(x + s + 4, y + 4, o.it.ad, '#3a2414');
        hits.push({ kind: 'yapi', it: o.it, x0: x - s - 3, x1: x + s + 3, y0: y - s - 3, y1: y + s + 3 });
      }
    }
    if (hover && hover.kind === 'sehir') tip(hover.x0 + 12, hover.y0 - 6, `${hover.c.ad}${hover.c.cap ? ' · başkent' : ''}`, hover.c.not);
    if (hover && hover.kind === 'kume') tip(hover.x1 + 4, hover.y0, `${hover.list.length} yapı`, hover.list.slice(0, 6).map(o => o.it.ad).join(', ') + (hover.list.length > 6 ? '…' : '') + ' · tıkla: yakınlaş');
    if (hover && hover.kind === 'yapi') { const st = { ins: 'inşaat sürüyor', harabe: 'harabe', bitti: 'ayakta' }[hover.it.st]; tip(hover.x1 + 4, hover.y0, hover.it.ad, `${st} · tıkla: bilgi kartı`); }
    // lejant
    if (W > 520 && window.innerWidth > 860) legend(info);
  }
  function star(x, y, r) { g.beginPath(); for (let i = 0; i < 10; i++) { const a = -Math.PI / 2 + i * Math.PI / 5, rr = i % 2 ? r * 0.45 : r; g.lineTo(x + Math.cos(a) * rr, y + Math.sin(a) * rr); } g.closePath(); }
  function label(x, y, t, col, bold) {
    g.font = `${bold ? 800 : 600} ${Math.round(11 + u * 2)}px system-ui`; g.textAlign = 'left';
    g.lineWidth = 3; g.strokeStyle = 'rgba(255,248,230,0.85)'; g.strokeText(t, x, y); g.fillStyle = col; g.fillText(t, x, y);
  }
  function tip(x, y, t1, t2) {
    g.font = '700 13px system-ui'; const w1 = g.measureText(t1).width; g.font = '12px system-ui';
    const lines = wrapText(t2 || '', 240); const w = Math.max(w1, ...lines.map(l => g.measureText(l).width)) + 16, h = 22 + lines.length * 15;
    x = clamp(x, 4, W - w - 4); y = clamp(y - h, 4, H - h - 4);
    g.fillStyle = 'rgba(255,246,220,0.97)'; g.strokeStyle = OUT; g.lineWidth = 1; g.beginPath(); g.roundRect(x, y, w, h, 8); g.fill(); g.stroke();
    g.fillStyle = OUT; g.font = '700 13px system-ui'; g.textAlign = 'left'; g.fillText(t1, x + 8, y + 16);
    g.font = '12px system-ui'; lines.forEach((l, i) => g.fillText(l, x + 8, y + 32 + i * 15));
  }
  function wrapText(t, max) { const out = []; let cur = ''; g.font = '12px system-ui'; for (const w of t.split(' ')) { const n = cur ? cur + ' ' + w : w; if (g.measureText(n).width > max && cur) { out.push(cur); cur = w; } else cur = n; } if (cur) out.push(cur); return out; }
  function legend(info) {
    const x = 10, y = H - 92;
    g.fillStyle = 'rgba(32,22,14,0.72)'; g.beginPath(); g.roundRect(x, y, 218, 82, 10); g.fill();
    g.font = '12px system-ui'; g.textAlign = 'left'; g.fillStyle = '#f3e7d0';
    icon('true', x + 16, y + 18, 7, 'bitti'); g.fillStyle = '#f3e7d0'; g.fillText('Ayakta', x + 30, y + 22);
    icon('true', x + 100, y + 18, 7, 'ins'); g.fillStyle = '#f3e7d0'; g.fillText('İnşaat sürüyor', x + 114, y + 22);
    icon('true', x + 16, y + 42, 7, 'harabe'); g.fillStyle = '#f3e7d0'; g.fillText('Harabe', x + 30, y + 46);
    g.fillStyle = '#ffd666'; g.strokeStyle = OUT; star(x + 106, y + 40, 7); g.fill(); g.stroke(); g.fillStyle = '#f3e7d0'; g.fillText('Başkent', x + 114, y + 46);
    g.fillStyle = '#c9b894'; g.fillText(info || '', x + 10, y + 70);
  }

  function hitTest(x, y) { for (let i = hits.length - 1; i >= 0; i--) { const h = hits[i]; if (x >= h.x0 && x <= h.x1 && y >= h.y0 && y <= h.y1) return h; } return null; }
  function zoomAt(x, y, f) {
    const [la, lo] = unP(x, y);
    view.z = clamp(view.z * f, 0.8, 40);
    const [nx, ny] = P2(la, lo);
    const k = base() * view.z;
    view.lon += (nx - x) / (0.9 * k); view.lat -= (ny - y) / k;
  }
  function pan(dx, dy) { const k = base() * view.z; view.lon -= dx / (0.9 * k); view.lat += dy / k; }
  function go(lat, lon, z) { view.lat = lat; view.lon = lon; view.z = z; }
  function reset() { Object.assign(view, DEFAULT); }
  reset();
  return { NIL, DELTA, KOLLAR: [ROSETTA, DAMIETTA, PELUSIAC, CANOPIC], draw, hitTest, zoomAt, pan, go, reset, setHover: h => { hover = h; }, get view() { return view; } };
})();
