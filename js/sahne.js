// Sahne motoru: Nil vadisi panoraması, anıtlar, insanlar, hayvanlar, gemiler.
// Kodla çizilir (Canvas 2D). Dış kütüphane yok.
'use strict';
window.Sahne = (() => {
  const clamp = (v, a = 0, b = 1) => Math.max(a, Math.min(b, v));
  const lerp = (a, b, t) => a + (b - a) * t;
  const hash = i => { const x = Math.sin(i * 127.1 + 311.7) * 43758.5453; return x - Math.floor(x); };
  const wrap = (v, span) => ((v + span / 2) % span + span) % span - span / 2;
  const mixC = (a, b, t) => a.map((v, i) => Math.round(lerp(v, b[i], t)));
  const rgb = c => `rgb(${c[0]},${c[1]},${c[2]})`;
  const ease = t => t * t * (3 - 2 * t);

  const OUT = '#3a2414', SKIN = '#b4703d', SKIND = '#965a2e', LINEN = '#f4eedf', HAIR = '#17110c';

  let g, W = 0, H = 0, u = 1, s = 1, gY = 0, T = 0, P;
  let camX = 0;
  const st = { Y: 2560, season: 'peret', flood: 0, field: [134, 176, 76], act: 0, giyim: 'antik' };
  // bölge teması (js/bolge.js): renkler, ağaçlar, nehir adı
  const TM = Object.assign({ kum1: '#f0d9a6', kum2: '#ead09a', dag: 1, plato: '#e6c78c', platoKenar: '#cfa868', yakin: '#e2bf84', yol: 'rgba(245,225,180,0.6)',
    nehirYazi: 'NİL  →  kuzeye akar', nehirAd: 'Nil Nehri', agac: 'palm', taskin: true, nehirRenk: [63, 136, 168] }, (window.BOLGE && window.BOLGE.sahne) || {});
  const SEASON = {
    ahet: TM.taskin ? { field: [143, 122, 88], flood: 1 } : { field: [104, 160, 70], flood: 0 },
    peret: { field: [126, 172, 72], flood: 0 },
    semu: { field: [214, 178, 84], flood: 0 }
  };

  // ---------- yardımcı çizimler ----------
  function L(x1, y1, x2, y2, w, col) {
    g.strokeStyle = OUT; g.lineWidth = w + 2.4; g.beginPath(); g.moveTo(x1, y1); g.lineTo(x2, y2); g.stroke();
    g.strokeStyle = col; g.lineWidth = w; g.beginPath(); g.moveTo(x1, y1); g.lineTo(x2, y2); g.stroke();
  }
  function shape(pts, fill, lw = 1.4) {
    g.beginPath(); g.moveTo(pts[0], pts[1]);
    for (let i = 2; i < pts.length; i += 2) g.lineTo(pts[i], pts[i + 1]);
    g.closePath(); g.fillStyle = fill; g.fill(); if (lw) { g.strokeStyle = OUT; g.lineWidth = lw; g.stroke(); }
  }
  function circ(x, y, r, fill, lw = 1.4) {
    g.beginPath(); g.arc(x, y, r, 0, Math.PI * 2); g.fillStyle = fill; g.fill();
    if (lw) { g.strokeStyle = OUT; g.lineWidth = lw; g.stroke(); }
  }
  function ell(x, y, rx, ry, rot, fill, lw = 1.4) {
    g.beginPath(); g.ellipse(x, y, rx, ry, rot, 0, Math.PI * 2); g.fillStyle = fill; g.fill();
    if (lw) { g.strokeStyle = OUT; g.lineWidth = lw; g.stroke(); }
  }
  const kOf = y => u * (0.42 + (y / H - 0.75) * 2.4);           // yakın kıyıda derinliğe göre ölçek
  const kRiver = y => u * (0.30 + (y / H - 0.64) * 2.2);

  // ---------- insan ----------
  // birimler: boy ~60, ayaklar y=0. o: {kind, act, dir, ph, move, lean}
  function person(x, y, k, o) {
    const d = o.dir || 1, ph = o.ph || 0, mv = o.move ? 1 : 0, kind = o.kind || 'man', act = o.act || 'walk';
    const sw = Math.sin(ph) * 0.5 * mv;
    // dönemin giyimi: antik (peştamal), cubbe (galabiye), modern (gömlek-pantolon), karma (ikisi karışık)
    const sd = o.seed != null ? o.seed : 1;
    let gy = o.giyim || st.giyim;
    if (gy === 'karma') gy = hash(Math.floor(sd * 10) + (kind === 'woman' ? 7 : 0)) < 0.55 ? 'modern' : 'cubbe';
    if (gy !== 'antik') { g.save(); g.translate(x, y); g.scale(d * k, k); if (kind === 'child') g.scale(0.7, 0.7); if (o.lean) g.rotate(o.lean); personNew(gy, kind, act, sw, ph, o, sd); g.restore(); return; }
    g.save(); g.translate(x, y); g.scale(d * k, k);
    if (kind === 'child') g.scale(0.7, 0.7);
    if (o.lean) g.rotate(o.lean);
    g.lineCap = 'round'; g.lineJoin = 'round';
    const fem = kind === 'woman';
    const arm = (a, col, len = 17) => L(0, -43, Math.sin(a) * len, -43 + Math.cos(a) * len, 3.4, col);
    // arka kol
    if (act === 'pull') L(0, -43, 14, -37, 3.4, SKIND);
    else if (act === 'plough') L(0, -43, 12, -31, 3.4, SKIND);
    else if (act === 'hammer' || act === 'sickle' || act === 'pour' || act === 'jar' || act === 'staff') arm(0.3, SKIND);
    else arm(sw * 0.9, SKIND);
    // bacaklar
    const leg = (a, col) => L(0, -27, Math.sin(a) * 23, -27 + Math.cos(a) * 27, 4, col);
    leg(sw, SKIND); leg(-sw, SKIN);
    // gövde
    if (fem) {
      shape([-4.5, -45, 4.5, -45, 6.5, -4, -5.5, -4], LINEN);
    } else {
      L(0, -44, 0, -30, 9, SKIN);
      const kb = o.longKilt ? -11 : -19;
      shape([-5, -31, 5.5, -31, 8, kb, -6.5, kb], LINEN);
    }
    if (fem || o.collar) {
      g.strokeStyle = '#2f8fa3'; g.lineWidth = 2.4; g.beginPath(); g.arc(1, -45.5, 4.6, 0.12 * Math.PI, 0.88 * Math.PI); g.stroke();
    }
    if (act === 'sow') ell(-4, -27, 4, 5, 0, '#a77b45');
    // baş
    if (fem) { g.fillStyle = HAIR; g.beginPath(); g.ellipse(-0.6, -50, 7.2, 8.8, 0, 0, Math.PI * 2); g.fill(); }
    circ(1.6, -51.5, 6, SKIN, 1.3);
    g.fillStyle = HAIR; g.beginPath(); g.arc(1.2, -52.3, 6.5, Math.PI * 0.95, Math.PI * 1.97); g.closePath(); g.fill();
    g.fillStyle = OUT; g.beginPath(); g.arc(5, -51.3, 0.95, 0, 7); g.fill();
    if (kind === 'child') { g.strokeStyle = HAIR; g.lineWidth = 2.2; g.beginPath(); g.moveTo(-3, -54); g.quadraticCurveTo(-8, -49, -4.5, -44); g.stroke(); }
    // ön kol ve aletler
    if (act === 'jar') {
      ell(1.5, -62.5, 4.8, 4.6, 0, '#b5562f', 1.2); shape([-1, -66.5, 4, -66.5, 3.4, -69, -0.4, -69], '#b5562f', 1);
      L(0, -43, 5, -53, 3.4, SKIN); L(5, -53, 4.5, -60, 3, SKIN);
    } else if (act === 'hoe') {
      L(-13, -31, 9, -57, 1.6, '#7a5230'); shape([-13, -31, -19, -27, -15, -24.5], '#6d6a63', 1);
      L(0, -43, 5, -50, 3.4, SKIN);
    } else if (act === 'staff') {
      L(10, -64, 10, 0, 1.4, '#7a5230'); L(0, -43, 9, -34, 3.4, SKIN);
    } else if (act === 'pull') {
      L(0, -43, 16, -40, 3.4, SKIN);
    } else if (act === 'plough') {
      L(0, -43, 14, -33, 3.4, SKIN);
    } else if (act === 'pour') {
      L(0, -43, 12, -47, 3.4, SKIN);
      ell(17, -47, 4.5, 6, 1.2, '#b5562f', 1.2);
      g.fillStyle = '#7cc3e0';
      for (let i = 0; i < 4; i++) { const q = (T * 2.2 + i / 4) % 1; g.beginPath(); g.arc(22 + q * 3, -44 + q * 44, 1.3, 0, 7); g.fill(); }
    } else if (act === 'sow') {
      const a = 1.3 + Math.sin(T * 3 + ph) * 0.7; arm(a, SKIN);
      g.fillStyle = '#e9d89a';
      for (let i = 0; i < 5; i++) { const q = (T * 1.5 + i / 5 + ph) % 1; g.beginPath(); g.arc(16 + q * 10, -40 + q * 40, 0.9, 0, 7); g.fill(); }
    } else if (act === 'sickle') {
      const a = 0.5 + Math.sin(T * 4 + ph) * 0.35, hx = Math.sin(a) * 17, hy = -43 + Math.cos(a) * 17;
      arm(a, SKIN); g.strokeStyle = '#6d6a63'; g.lineWidth = 1.6; g.beginPath(); g.arc(hx + 4, hy, 4.5, -2.2, 1.2); g.stroke();
    } else if (act === 'hammer') {
      const a = 2.3 + Math.sin(T * 6 + ph) * 0.7, hx = Math.sin(a) * 17, hy = -43 + Math.cos(a) * 17;
      arm(a, SKIN); shape([hx - 3, hy - 4, hx + 4, hy - 4, hx + 4, hy + 2, hx - 3, hy + 2], '#8d6a45', 1);
    } else if (act === 'net') {
      arm(1.5, SKIN);
    } else {
      arm(-sw * 0.9, SKIN);
    }
    g.restore();
  }

  // Orta Çağ ve modern giyim: galabiye/cübbe ya da gömlek-pantolon
  const ROBE = ['#f1ede2', '#7b8fa6', '#a8906a', '#e6dccb', '#5f6f5a', '#3d4a66', '#8a5a44'];
  const SHIRT = ['#e9e4d8', '#4f79b0', '#c94f3a', '#3e8a5a', '#d9b44a', '#efefef', '#6a4f8a'];
  function personNew(gy, kind, act, sw, ph, o, sd) {
    const fem = kind === 'woman', hv = hash(Math.floor((sd != null ? sd : 1) * 13) + 3);
    const arm = (a, col, len = 17) => L(0, -43, Math.sin(a) * len, -43 + Math.cos(a) * len, 3.4, col);
    const pants = gy === 'modern' ? (hv < 0.5 ? '#2f3e5a' : '#5a4a3a') : SKIND;
    const top = gy === 'modern' ? SHIRT[Math.floor(hv * SHIRT.length)] : ROBE[Math.floor(hv * ROBE.length)];
    // arka kol
    if (act === 'pull' || act === 'plough') L(0, -43, 14, -36, 3.4, top);
    else if (act === 'hammer' || act === 'sickle' || act === 'pour' || act === 'jar' || act === 'staff' || act === 'photo') arm(0.3, top);
    else arm(sw * 0.9, top);
    // bacaklar
    const leg = (a, col) => L(0, -27, Math.sin(a) * 23, -27 + Math.cos(a) * 27, 4, col);
    leg(sw, pants); leg(-sw, pants);
    if (gy === 'cubbe' || fem) {
      // uzun elbise: omuzdan bileğe
      const hem = fem && gy === 'modern' ? -8 : -4, wv = Math.sin(ph) * 2 * (o.move ? 1 : 0);
      shape([-5, -46, 5, -46, 8 + wv, hem, -7 - wv, hem], fem && gy === 'modern' ? '#6a5a7a' : top);
      g.strokeStyle = 'rgba(0,0,0,0.12)'; g.lineWidth = 1; g.beginPath(); g.moveTo(0, -42); g.lineTo(0.5, hem); g.stroke();
    } else {
      shape([-5, -46, 5.5, -46, 6, -27, -5, -27], top); // gömlek
      g.fillStyle = 'rgba(0,0,0,0.15)'; g.fillRect(-5, -29, 11, 2);
    }
    // baş
    circ(1.6, -51.5, 6, SKIN, 1.3);
    if (fem) { // başörtüsü
      g.fillStyle = gy === 'modern' ? ['#c94f6a', '#3e6a8a', '#e3c36a', '#2a2a2a'][Math.floor(hv * 4)] : '#2a2320';
      g.beginPath(); g.ellipse(0.4, -52, 7.4, 8.4, 0, Math.PI * 0.62, Math.PI * 2.42); g.fill(); g.strokeStyle = OUT; g.lineWidth = 1.1; g.stroke();
    } else if (gy === 'cubbe') { // takke ya da sarık
      if (hv > 0.5) { ell(1.4, -57, 7.2, 3.4, 0, '#f4f0e6', 1.1); } else { g.fillStyle = '#f4f0e6'; g.beginPath(); g.arc(1.4, -54, 6.2, Math.PI, 0); g.fill(); g.strokeStyle = OUT; g.lineWidth = 1; g.stroke(); }
    } else {
      g.fillStyle = HAIR; g.beginPath(); g.arc(1.2, -52.6, 6.4, Math.PI * 0.95, Math.PI * 1.97); g.closePath(); g.fill();
      if (o.sapka) { shape([-5.5, -56, 8.5, -56, 6, -61, -3, -61], o.sapka, 1); L(-7, -56, 11, -56, 1.2, o.sapka); }
    }
    g.fillStyle = OUT; g.beginPath(); g.arc(5, -51.3, 0.95, 0, 7); g.fill();
    // ön kol ve eşyalar
    if (act === 'photo') { L(0, -43, 8, -50, 3.4, top); shape([6, -55, 13, -55, 13, -49, 6, -49], '#2a2a2a', 1); circ(13.5, -52, 1.6, '#7aa6d0', 0.6); }
    else if (act === 'jar') { L(0, -43, 5, -53, 3.4, top); ell(1.5, -62.5, 4.8, 4.6, 0, '#b5562f', 1.2); }
    else if (act === 'staff') { L(10, -64, 10, 0, 1.4, '#7a5230'); L(0, -43, 9, -34, 3.4, top); }
    else if (act === 'hoe') { L(-13, -31, 9, -57, 1.6, '#7a5230'); shape([-13, -31, -19, -27, -15, -24.5], '#6d6a63', 1); L(0, -43, 5, -50, 3.4, top); }
    else if (act === 'sickle') { const a = 0.5 + Math.sin(T * 4 + ph) * 0.35; arm(a, top); }
    else if (act === 'hammer') { const a = 2.3 + Math.sin(T * 6 + ph) * 0.7; arm(a, top); }
    else if (act === 'pull' || act === 'plough') L(0, -43, 15, -38, 3.4, top);
    else if (act === 'sow') { const a = 1.3 + Math.sin(T * 3 + ph) * 0.7; arm(a, top); }
    else arm(-sw * 0.9, top);
    // eller
    g.fillStyle = SKIN;
  }

  // ---------- modern taşıtlar ----------
  function car(x, y, k, d, sd, kind) {
    g.save(); g.translate(x, y); g.scale(d * k, k); g.lineJoin = 'round';
    const col = kind === 'taksi' ? '#f2f2f2' : kind === 'otobus' ? '#e9e6dc' : ['#c94f3a', '#3e6a9a', '#d9d4c4', '#2f3a40', '#e3c36a'][Math.floor(hash((sd != null ? sd : 1) * 7) * 5)];
    if (kind === 'otobus') {
      shape([-46, -6, 46, -6, 46, -38, -42, -38, -46, -30], col, 1.6);
      g.fillStyle = '#2e6a9a'; g.fillRect(-46, -20, 92, 4);
      g.fillStyle = '#9cc4e0'; for (let i = 0; i < 7; i++) g.fillRect(-38 + i * 12, -34, 9, 9);
      for (const wx of [-30, 30]) { circ(wx, -5, 7, '#2a2a2a', 1.2); circ(wx, -5, 3, '#9a9a9a', 0); }
    } else {
      shape([-26, -6, 26, -6, 26, -16, 14, -17, 8, -27, -12, -27, -18, -17, -26, -16], col, 1.5);
      if (kind === 'taksi') { g.fillStyle = '#1a1a1a'; g.fillRect(-26, -13, 52, 3); }
      g.fillStyle = '#9cc4e0'; g.beginPath(); g.moveTo(-10, -25); g.lineTo(-1, -25); g.lineTo(-1, -18); g.lineTo(-15, -18); g.closePath(); g.fill();
      g.beginPath(); g.moveTo(1, -25); g.lineTo(7, -25); g.lineTo(12, -18); g.lineTo(1, -18); g.closePath(); g.fill();
      for (const wx of [-15, 15]) { circ(wx, -5, 5.5, '#2a2a2a', 1.2); circ(wx, -5, 2.2, '#9a9a9a', 0); }
      g.fillStyle = '#ffe9a0'; g.fillRect(24, -15, 3, 3);
    }
    g.restore();
  }
  function steamer(x, y, k, d, kind) {
    g.save(); g.translate(x, y); g.scale(d * k, k); g.lineJoin = 'round';
    g.fillStyle = 'rgba(255,255,255,0.14)'; g.beginPath(); g.ellipse(0, 3, 70, 3, 0, 0, 7); g.fill();
    if (kind === 'kruvaziyer') {
      shape([-70, -4, 64, -4, 72, -16, -72, -16], '#f4f4f0', 1.6);
      for (let i = 0; i < 3; i++) { shape([-62 + i * 4, -16 - i * 9, 58 - i * 6, -16 - i * 9, 58 - i * 6, -25 - i * 9, -62 + i * 4, -25 - i * 9], i % 2 ? '#ecebe4' : '#fafaf6', 1.2); g.fillStyle = '#5a8ab0'; for (let j = 0; j < 14 - i * 2; j++) g.fillRect(-56 + i * 4 + j * 8, -23 - i * 9, 5, 4); }
      g.fillStyle = '#2e6a9a'; g.fillRect(-70, -9, 140, 2);
    } else {
      shape([-56, -4, 50, -4, 58, -14, -58, -14], '#f2ede0', 1.6);
      shape([-44, -14, 40, -14, 40, -26, -44, -26], '#f7f3e8', 1.4);
      g.fillStyle = '#6a4a2a'; for (let j = 0; j < 9; j++) g.fillRect(-40 + j * 9, -24, 5, 6);
      shape([-6, -26, 2, -26, 2, -46, -6, -46], '#2a2a2a', 1.2);
      g.fillStyle = 'rgba(80,80,80,0.35)'; for (let i = 0; i < 4; i++) { const q = (T * 0.5 + i / 4) % 1; g.beginPath(); g.arc(-2 - q * 30, -50 - q * 20, 4 + q * 8, 0, 7); g.fill(); }
      circ(-40, -10, 9, 'rgba(0,0,0,0)', 1.6); g.strokeStyle = '#a0402f'; g.lineWidth = 1.4; for (let i = 0; i < 4; i++) { const a = T * 2 + i * Math.PI / 4; g.beginPath(); g.moveTo(-40 - Math.cos(a) * 9, -10 - Math.sin(a) * 9); g.lineTo(-40 + Math.cos(a) * 9, -10 + Math.sin(a) * 9); g.stroke(); }
    }
    g.restore();
  }
  function plane(x, y, k) {
    g.save(); g.translate(x, y); g.scale(k, k); g.lineJoin = 'round';
    shape([-22, 0, 18, -2, 24, 0, 18, 2], '#f4f4f4', 1);
    shape([-2, 0, 6, 0, -6, 10], '#dcdcdc', 0.8); shape([-2, 0, 6, 0, -6, -8], '#e6e6e6', 0.8); shape([-22, 0, -17, 0, -22, -7], '#c94f3a', 0.8);
    g.strokeStyle = 'rgba(255,255,255,0.55)'; g.lineWidth = 2; g.beginPath(); g.moveTo(-24, 0); g.lineTo(-120, 1); g.stroke();
    g.restore();
  }

  // ---------- hayvanlar ----------
  function cow(x, y, k, d, ph, mv, col = '#f4efe6', spot = '#8a5634') {
    g.save(); g.translate(x, y); g.scale(d * k, k); g.lineCap = 'round'; g.lineJoin = 'round';
    const sw = Math.sin(ph) * 0.45 * mv;
    L(-12, -18, -12 + Math.sin(sw) * 8, 0, 3.4, col); L(12, -18, 12 + Math.sin(-sw) * 8, 0, 3.4, col);
    L(-19, -25, -23 + Math.sin(T * 2) * 2, -10, 1.6, col);
    ell(0, -22, 19, 9.5, 0, col);
    g.fillStyle = spot; g.beginPath(); g.ellipse(-6, -24, 5, 3.5, 0.3, 0, 7); g.fill(); g.beginPath(); g.ellipse(8, -20, 3.5, 2.6, -0.2, 0, 7); g.fill();
    L(-7, -17, -7 + Math.sin(-sw) * 8, 0, 3.6, col); L(14, -17, 14 + Math.sin(sw) * 8, 0, 3.6, col);
    ell(20, -27, 6.5, 5.5, -0.5, col);
    ell(26, -25, 5.2, 4, 0.5, col);
    g.strokeStyle = OUT; g.lineWidth = 3.4;
    g.beginPath(); g.moveTo(23, -30); g.quadraticCurveTo(17, -38, 22, -42); g.stroke();
    g.beginPath(); g.moveTo(26, -30); g.quadraticCurveTo(33, -37, 29, -42); g.stroke();
    g.strokeStyle = '#efe2c0'; g.lineWidth = 1.6;
    g.beginPath(); g.moveTo(23, -30); g.quadraticCurveTo(17, -38, 22, -42); g.stroke();
    g.beginPath(); g.moveTo(26, -30); g.quadraticCurveTo(33, -37, 29, -42); g.stroke();
    g.fillStyle = OUT; g.beginPath(); g.arc(27, -26, 0.9, 0, 7); g.fill();
    g.restore();
  }
  function donkey(x, y, k, d, ph, mv, load) {
    const col = '#9d948a';
    g.save(); g.translate(x, y); g.scale(d * k, k); g.lineCap = 'round'; g.lineJoin = 'round';
    const sw = Math.sin(ph) * 0.5 * mv;
    L(-9, -14, -9 + Math.sin(sw) * 6, 0, 2.8, col); L(9, -14, 9 + Math.sin(-sw) * 6, 0, 2.8, col);
    ell(0, -17, 13, 7, 0, col);
    if (load === 'sack') { ell(-2, -19, 7, 8, 0, '#c9a46e'); ell(4, -18, 6, 7, 0, '#b48c57'); }
    if (load === 'sheaf') { ell(0, -22, 10, 6, 0, '#e3c36a'); g.strokeStyle = '#a8862e'; g.lineWidth = 1; for (let i = -8; i <= 8; i += 3) { g.beginPath(); g.moveTo(i, -27); g.lineTo(i + 2, -17); g.stroke(); } }
    L(-6, -13, -6 + Math.sin(-sw) * 6, 0, 2.8, col); L(11, -13, 11 + Math.sin(sw) * 6, 0, 2.8, col);
    ell(15, -21, 4.5, 5, -0.6, col);
    ell(19, -20, 4.6, 3.4, 0.5, col);
    ell(13, -30, 1.8, 5, -0.2, col, 1.1); ell(16, -30, 1.8, 5, 0.25, col, 1.1);
    g.fillStyle = OUT; g.beginPath(); g.arc(19, -21.5, 0.8, 0, 7); g.fill();
    g.restore();
  }

  function horse(x, y, d, ph, col = '#8a5a33') { // birimler, çağıran dönüşümü ayarlar
    const sw = Math.sin(ph) * 0.6;
    L(-14, -26, -14 + Math.sin(-sw) * 10, 0, 3.2, col); L(12, -26, 12 + Math.sin(sw) * 12, -1, 3.2, col);
    g.strokeStyle = '#3a2414'; g.lineWidth = 3; g.beginPath(); g.moveTo(-19, -32); g.quadraticCurveTo(-28, -26, -26, -14); g.stroke();
    ell(0, -31, 20, 8.5, 0, col);
    L(-9, -26, -9 + Math.sin(sw) * 10, 0, 3.2, col); L(16, -26, 16 + Math.sin(-sw) * 12, -1, 3.2, col);
    shape([12, -36, 22, -52, 30, -48, 20, -28], col, 1.4);
    ell(29, -48, 7.5, 4, 0.55, col);
    g.strokeStyle = '#2a1a10'; g.lineWidth = 2.4; g.beginPath(); g.moveTo(13, -38); g.lineTo(22, -53); g.stroke();
    shape([22, -54, 20, -63, 25, -56], '#d9473a', 1);
    g.fillStyle = OUT; g.beginPath(); g.arc(29, -50, 0.9, 0, 7); g.fill();
  }
  function chariot(x, y, k, d, ph) {
    g.save(); g.translate(x, y); g.scale(d * k, k); g.lineCap = 'round'; g.lineJoin = 'round';
    g.save(); g.translate(6, -3); horse(0, 0, 1, ph + 1, '#6e4426'); g.restore();
    horse(0, 0, 1, ph);
    L(-46, -22, 8, -30, 1.6, '#7a5230');
    shape([-56, -14, -40, -14, -40, -32, -56, -30], '#c99a5c', 1.4);
    circ(-48, -12, 12, 'rgba(0,0,0,0)', 2);
    g.strokeStyle = '#7a5230'; g.lineWidth = 1.4;
    for (let i = 0; i < 3; i++) { const a = ph * 1.5 + i * Math.PI / 3; g.beginPath(); g.moveTo(-48 - Math.cos(a) * 11, -12 - Math.sin(a) * 11); g.lineTo(-48 + Math.cos(a) * 11, -12 + Math.sin(a) * 11); g.stroke(); }
    person(-50, -16, 0.95, { kind: 'man', act: 'pull', dir: 1, collar: true });
    g.restore();
  }
  function camel(x, y, k, d, ph) {
    const col = '#c8a06a', sw = Math.sin(ph) * 0.4;
    g.save(); g.translate(x, y); g.scale(d * k, k); g.lineCap = 'round'; g.lineJoin = 'round';
    L(-12, -34, -12 + Math.sin(-sw) * 10, 0, 3, col); L(10, -34, 10 + Math.sin(sw) * 10, 0, 3, col);
    ell(0, -40, 20, 9, 0, col); ell(-3, -50, 10, 8, 0, col);
    L(-8, -34, -8 + Math.sin(sw) * 10, 0, 3, col); L(14, -34, 14 + Math.sin(-sw) * 10, 0, 3, col);
    shape([14, -44, 26, -58, 32, -56, 20, -36], col, 1.4); ell(33, -57, 6.5, 3.5, 0.2, col);
    shape([-12, -46, 8, -46, 8, -40, -12, -40], '#a0402f', 1);
    g.fillStyle = OUT; g.beginPath(); g.arc(34, -58.5, 0.9, 0, 7); g.fill();
    g.restore();
  }
  function shaduf(x, y, k, ph) {
    g.save(); g.translate(x, y); g.scale(k, k); g.lineCap = 'round';
    L(-3, 0, -3, -46, 2.6, '#7a5230'); L(3, 0, 3, -46, 2.6, '#7a5230');
    const a = -0.3 + Math.sin(T * 1.1 + ph) * 0.32, ex = Math.cos(a) * 34, ey = -46 + Math.sin(a) * 34;
    L(-Math.cos(a) * 22, -46 - Math.sin(a) * 22, ex, ey, 2, '#8a6136');
    circ(-Math.cos(a) * 22, -46 - Math.sin(a) * 22, 5, '#8b6b4a', 1.2);
    g.strokeStyle = '#5a3a22'; g.lineWidth = 1; g.beginPath(); g.moveTo(ex, ey); g.lineTo(ex, ey + 18); g.stroke();
    ell(ex, ey + 21, 4, 3.5, 0, '#b5562f', 1.1);
    person(ex - 9, 0, 1, { kind: 'man', act: 'pull', dir: 1, lean: 0.15 + Math.sin(T * 1.1 + ph) * 0.15 });
    g.restore();
  }

  // ---------- gemiler ----------
  // o: {dir, type:'sail'|'row'|'cargo'|'skiff', ph}
  function boat(x, y, k, o) {
    const d = o.dir || 1;
    g.save(); g.translate(x, y); g.scale(d * k, k); g.lineCap = 'round'; g.lineJoin = 'round';
    // yansıma
    g.fillStyle = 'rgba(255,255,255,0.12)'; g.beginPath(); g.ellipse(0, 3, 44, 3, 0, 0, 7); g.fill();
    if (o.type === 'skiff') {
      g.beginPath(); g.moveTo(-26, -6); g.quadraticCurveTo(-30, -13, -33, -14); g.quadraticCurveTo(0, 6, 33, -14); g.quadraticCurveTo(30, -13, 26, -6); g.closePath();
      g.fillStyle = '#c7b455'; g.fill(); g.strokeStyle = OUT; g.lineWidth = 1.4; g.stroke();
      g.strokeStyle = '#8b7a2c'; g.lineWidth = 1; for (let i = -20; i <= 20; i += 8) { g.beginPath(); g.moveTo(i, -6); g.lineTo(i + 1, -1); g.stroke(); }
      person(4, -4, 0.75, { kind: 'man', act: o.ph % 2 > 1 ? 'net' : 'staff', dir: 1 });
      g.restore(); return;
    }
    const sail = o.type === 'sail';
    // yük
    if (o.type === 'cargo') shape([-14, -10, 16, -10, 16, -27, -14, -27], '#efe3c4', 1.4);
    // gövde
    g.beginPath(); g.moveTo(-40, -8); g.quadraticCurveTo(-46, -14, -46, -22);
    g.quadraticCurveTo(-30, -5, 0, -7); g.quadraticCurveTo(30, -5, 46, -24);
    g.quadraticCurveTo(45, -12, 40, -8); g.quadraticCurveTo(0, 8, -40, -8); g.closePath();
    g.fillStyle = '#8a5a33'; g.fill(); g.strokeStyle = OUT; g.lineWidth = 1.6; g.stroke();
    g.strokeStyle = '#c99a5c'; g.lineWidth = 1.4; g.beginPath(); g.moveTo(-38, -6); g.quadraticCurveTo(0, 2, 40, -8); g.stroke();
    // dümen küreği
    L(-34, -22, -46, 4, 1.6, '#7a5230');
    person(-34, -6, 0.6, { kind: 'man', act: 'plough', dir: 1 });
    if (sail) {
      L(0, -6, 0, -72, 1.8, '#7a5230');
      g.beginPath(); g.moveTo(-15, -68); g.quadraticCurveTo(-4 + Math.sin(T * 1.3) * 1.5, -44, -15, -18);
      g.lineTo(15, -18); g.quadraticCurveTo(26 + Math.sin(T * 1.3) * 1.5, -44, 15, -68); g.closePath();
      g.fillStyle = '#efe6cf'; g.fill(); g.strokeStyle = OUT; g.lineWidth = 1.4; g.stroke();
      L(-17, -68, 17, -68, 1.4, '#7a5230'); L(-17, -18, 17, -18, 1.4, '#7a5230');
      shape([4, -7, 18, -7, 18, -17, 4, -17], '#d9b273', 1.2);
    } else {
      // yatırılmış direk, kürekçiler
      L(-24, -14, 26, -18, 1.6, '#7a5230');
      for (let i = 0; i < 4; i++) {
        const rx = -18 + i * 12, a = Math.sin(T * 3 + i * 0.3 + (o.ph || 0));
        g.strokeStyle = '#7a5230'; g.lineWidth = 1.5; g.beginPath(); g.moveTo(rx, -14); g.lineTo(rx - 10 - a * 6, 6); g.stroke();
        if (o.type !== 'cargo') person(rx, -6, 0.5, { kind: 'man', act: 'pull', dir: -1, lean: -0.3 * a });
      }
    }
    g.restore();
  }

  // ---------- bitkiler, evler ----------
  function palm(x, y, h, seed) {
    const lean = (hash(seed) - 0.5) * h * 0.25, tx = x + lean, ty = y - h;
    g.lineCap = 'round';
    g.strokeStyle = OUT; g.lineWidth = h * 0.075 + 2; g.beginPath(); g.moveTo(x, y); g.quadraticCurveTo(x, y - h * 0.5, tx, ty); g.stroke();
    g.strokeStyle = '#8a6136'; g.lineWidth = h * 0.075; g.beginPath(); g.moveTo(x, y); g.quadraticCurveTo(x, y - h * 0.5, tx, ty); g.stroke();
    const n = 7, wv = Math.sin(T * 1.1 + seed) * 0.06;
    for (let i = 0; i < n; i++) {
      const a = -Math.PI + (i / (n - 1)) * Math.PI + wv, len = h * (0.42 + 0.1 * hash(seed + i));
      const ex = tx + Math.cos(a) * len, ey = ty + Math.sin(a) * len * 0.45 + len * 0.35;
      const cx = tx + Math.cos(a) * len * 0.5, cy = ty + Math.sin(a) * len * 0.5 - len * 0.12;
      g.strokeStyle = OUT; g.lineWidth = h * 0.06 + 2; g.beginPath(); g.moveTo(tx, ty); g.quadraticCurveTo(cx, cy, ex, ey); g.stroke();
      g.strokeStyle = i % 2 ? '#4f8a3a' : '#5f9e43'; g.lineWidth = h * 0.06; g.beginPath(); g.moveTo(tx, ty); g.quadraticCurveTo(cx, cy, ex, ey); g.stroke();
    }
    circ(tx, ty + h * 0.04, h * 0.045, '#9a4a2a', 1);
  }
  // Anadolu ağaçları: kavak, meşe, çam (seed'e göre)
  function agac(x, y, h, seed) {
    if (TM.agac === 'palm') return palm(x, y, h, seed);
    const r = hash(seed * 1.7 + 3), lw = Math.max(1, h * 0.03);
    L(x, y, x, y - h * 0.45, h * 0.07 + 1, '#6b4a2a');
    if (r < 0.4) { ell(x, y - h * 0.62, h * 0.14, h * 0.38, 0, r < 0.2 ? '#6f9a3e' : '#7aa848', lw); }
    else if (r < 0.75) { circ(x - h * 0.12, y - h * 0.52, h * 0.22, '#5f8f3a', lw); circ(x + h * 0.13, y - h * 0.55, h * 0.2, '#6c9c42', lw); circ(x, y - h * 0.72, h * 0.24, '#76a84a', lw); }
    else { shape([x - h * 0.3, y - h * 0.3, x + h * 0.3, y - h * 0.3, x, y - h * 0.75], '#3f7a45', lw); shape([x - h * 0.24, y - h * 0.55, x + h * 0.24, y - h * 0.55, x, y - h * 1.0], '#4a8a4e', lw); }
  }
  function house(x, y, k, v) {
    g.save(); g.translate(x, y); g.scale(k, k); g.lineJoin = 'round';
    if (st.Y <= -1940) {
      // Modern çağ: 4 farklı mimari stil (cam kule, teraslı apartman, sıcak tuğla blok, modern ofis)
      const stil = Math.floor(v * 4) % 4;
      if (stil === 0) {
        // Cam cepheli yüksek kule
        const w = 16 + Math.round(v * 6), h = 68 + Math.round(v * 26);
        shape([-w, -h, w, -h, w, 0, -w, 0], '#a9c2d8', 1.1);
        g.fillStyle = '#334155'; g.fillRect(-w, -h - 4, w * 2, 4);
        g.fillStyle = '#537fa8';
        for (let wy = -h + 5; wy < -10; wy += 9) g.fillRect(-w + 3, wy, w * 2 - 6, 4.5);
        g.fillStyle = 'rgba(255,255,255,0.22)'; g.fillRect(-w + 3, -h + 4, 4, h - 14);
      } else if (stil === 1) {
        // Teraslı modern apartman
        const w = 22, h = 44 + Math.round(v * 14);
        shape([-w, -h, w, -h, w, 0, -w, 0], '#e2ddd2', 1.1);
        shape([-w + 5, -h - 10, w - 5, -h - 10, w - 5, -h, -w + 5, -h], '#d2ccc0', 1);
        g.fillStyle = '#64748b';
        for (let wy = -h + 5; wy < -12; wy += 11) for (let wx = -w + 4; wx <= w - 9; wx += 9) g.fillRect(wx, wy, 5.5, 6);
        g.fillStyle = '#94a3b8'; for (let wy = -h + 11; wy < -10; wy += 11) g.fillRect(-w + 2, wy, w * 2 - 4, 1.5);
      } else if (stil === 2) {
        // Sıcak tuğla / krem şehir bloğu
        const w = 20, h = 38 + Math.round(v * 16);
        shape([-w, -h, w, -h, w, 0, -w, 0], '#c99b7c', 1.1);
        g.fillStyle = '#5c3c2e'; g.fillRect(-w - 1, -h - 3, w * 2 + 2, 3);
        g.fillStyle = '#475569';
        for (let wy = -h + 6; wy < -12; wy += 11) for (let wx = -w + 4; wx <= w - 8; wx += 8) g.fillRect(wx, wy, 4.5, 6.5);
      } else {
        // Kavisli çatılı modern iş merkezi
        const w = 19, h = 52 + Math.round(v * 18);
        shape([-w, -h, w, -h, w, 0, -w, 0], '#cbd5e1', 1.1);
        g.fillStyle = '#475569'; g.beginPath(); g.arc(0, -h, w * 0.72, Math.PI, 0); g.fill();
        g.fillStyle = '#5d86ad';
        for (let wy = -h + 6; wy < -12; wy += 10) for (let wx = -w + 4; wx <= w - 8; wx += 7) g.fillRect(wx, wy, 4.5, 5.5);
      }
      g.fillStyle = '#334155'; g.fillRect(-4, -9, 8, 9);
      g.restore(); return;
    }
    if (st.Y <= -1800) {
      // 19. yüzyıl – erken 20. yüzyıl: kiremit çatılı kâgir şehir evleri
      const h = v > 0.5 ? 32 : 24;
      shape([-20, -h, 20, -h, 20, 0, -20, 0], v > 0.5 ? '#ded5c5' : '#cfc2ae', 1.2);
      shape([-23, -h, 0, -h - 11, 23, -h], '#9c4e38', 1.2);
      g.fillStyle = '#475569';
      for (const wx of [-13, -3, 7]) g.fillRect(wx, -h + 6, 5, 7);
      if (h > 26) for (const wx of [-13, 7]) g.fillRect(wx, -15, 5, 7);
      g.fillStyle = '#5a3a22'; g.fillRect(-3, -11, 6, 11);
      g.restore(); return;
    }
    if (v > 0.6) { g.beginPath(); g.arc(30, 0, 11, Math.PI, 0); g.closePath(); g.fillStyle = '#c4985c'; g.fill(); g.strokeStyle = OUT; g.lineWidth = 1.4; g.stroke(); circ(30, -7, 1.6, '#5a3a22', 0); }
    if (v > 0.3) shape([-8, -34, 12, -34, 12, -24, -8, -24], '#d3ab74');
    shape([-20, -24, 20, -24, 20, 0, -20, 0], '#caa06a');
    shape([-21, -27, 21, -27, 21, -24, -21, -24], '#b98d58', 1.2);
    g.fillStyle = '#5a3a22'; g.beginPath(); g.moveTo(-4, 0); g.lineTo(-4, -10); g.arc(0, -10, 4, Math.PI, 0); g.lineTo(4, 0); g.fill();
    g.fillRect(10, -19, 5, 4);
    g.restore();
  }

  // ---------- anıtlar ----------
  function profileOf(m) {
    const b = m.b / 2, h = m.h;
    if (m.type === 'true') return [[0, b], [h, 0]];
    if (m.type === 'bent') return [[0, b], [m.bz, m.bhw], [h, 0]];
    if (m.type === 'mastaba') return [[0, b], [h, b - h * 0.3], [h, 0]];
    const n = m.steps, sh = h / n, top = b * 0.34, bat = sh * 0.2, pts = [];
    for (let i = 0; i < n; i++) { const w = lerp(b, top, i / Math.max(1, n - 1)); pts.push([i * sh, w], [(i + 1) * sh, w - bat]); }
    pts.push([h, 0]); return pts;
  }
  function hwAt(prof, z) {
    for (let i = 1; i < prof.length; i++) {
      const [z0, w0] = prof[i - 1], [z1, w1] = prof[i];
      if (z1 > z0 && z >= z0 && z <= z1) return lerp(w0, w1, (z - z0) / (z1 - z0));
    }
    return 0;
  }
  function progress(m, Y) {
    if (Y > m.start) return -1;
    if (m.stop) return clamp((m.start - Math.max(Y, m.stop)) / (m.start - m.stop)) * m.maxP;
    return clamp((m.start - Y) / (m.start - m.end));
  }
  function vol(m) { if (m.vol) return m.vol; return m.type === 'sphinx' || m.type === 'suntemple' ? 6e4 : (m.b || 20) * (m.b || 20) * (m.h || 10) / 3 * (m.type === 'step' ? 0.7 : 1); }
  const COL = {
    core: ['#e4c48a', '#c39a5c'], casing: ['#fbf3dc', '#ddcba4'], step: ['#ecd8a8', '#c8a974'],
    granite: ['#c97a6a', '#a05a4f'], ruin: ['#d8bd88', '#b99660']
  };

  function polyPts(pts) { g.beginPath(); g.moveTo(pts[0][0], pts[0][1]); for (let i = 1; i < pts.length; i++) g.lineTo(pts[i][0], pts[i][1]); g.closePath(); }

  function drawPyramid(m, p, x, y, k) {
    const prof = profileOf(m), h = m.h, hw0 = prof[0][1], fy = hw0 * k * 0.1;
    const mast = m.type === 'mastaba';
    const pc = mast ? p : clamp(p / 0.88);
    const zb = mast ? h * p : h * (1 - Math.cbrt(1 - pc));
    const cf = (m.type === 'true' || m.type === 'bent') ? clamp((p - 0.88) / 0.12) : 0;
    const unfinished = m.stop && st.Y <= m.stop && m.maxP < 1;
    const cols = m.mantle ? COL.casing : (m.type === 'step' || mast ? COL.step : COL.core);
    const Lp = [[x, y + fy]], Rp = [[x, y + fy]];
    for (const [z, w] of prof) { Lp.push([x - w * k, y - z * k]); Rp.push([x + w * k, y - z * k]); }
    const sil = [[x, y + fy], ...Lp.slice(1), ...Rp.slice(1).reverse()];
    const cy = z => y + fy - (z / h) * (h * k + fy);
    const yt = y - zb * k;
    const faces = (c) => { polyPts(Lp); g.fillStyle = c[0]; g.fill(); polyPts(Rp); g.fillStyle = c[1]; g.fill(); };

    g.save();
    g.beginPath(); g.rect(x - hw0 * k - 10, yt, hw0 * k * 2 + 20, zb * k + fy + 6); g.clip();
    faces(unfinished ? COL.ruin : cols);
    // taş sıraları
    g.save(); polyPts(sil); g.clip();
    const stepZ = k * 3 > 3.2 ? 3 : (k * 6 > 3 ? 6 : 12);
    g.strokeStyle = 'rgba(90,60,30,0.16)'; g.lineWidth = 1;
    for (let z = stepZ; z < zb; z += stepZ) {
      const w = hwAt(prof, z) * k; g.beginPath(); g.moveTo(x - w, y - z * k); g.lineTo(x, cy(z)); g.lineTo(x + w, y - z * k); g.stroke();
    }
    if (m.type === 'step') {
      g.strokeStyle = 'rgba(70,45,20,0.35)'; g.lineWidth = 1.4;
      for (let i = 1; i < m.steps; i++) { const z = i * h / m.steps; if (z > zb) break; const w = hwAt(prof, z - 0.01) * k; g.beginPath(); g.moveTo(x - w, y - z * k); g.lineTo(x, cy(z)); g.lineTo(x + w, y - z * k); g.stroke(); }
    }
    // kaplama: yukarıdan aşağı düzeltiliyor
    if (cf > 0 && !m.mantle) {
      g.save(); g.beginPath(); g.rect(x - hw0 * k - 10, y - h * k - 10, hw0 * k * 2 + 20, (h * cf) * k + 10); g.clip();
      faces(COL.casing); g.restore();
    }
    if (m.granite) {
      g.save(); g.beginPath(); g.rect(x - hw0 * k - 10, y - m.granite * h * k, hw0 * k * 2 + 20, m.granite * h * k + fy + 6); g.clip();
      faces(COL.granite); g.restore();
    }
    g.restore();
    // ön kenar gölgesi ve dış çizgi
    g.restore();
    g.save(); g.beginPath(); g.rect(x - hw0 * k - 10, yt - 1, hw0 * k * 2 + 20, zb * k + fy + 8); g.clip();
    g.strokeStyle = OUT; g.lineWidth = Math.max(1.4, 2 * u); g.lineJoin = 'round';
    polyPts(sil); g.stroke();
    g.beginPath(); g.moveTo(x, y + fy); g.lineTo(x, y - h * k); g.stroke();
    g.restore();
    // yarım kalmışsa üst yüzey
    if (zb < h - 0.3) {
      const w = hwAt(prof, zb) * k, dd = w * 0.1;
      shape([x - w, yt, x, yt - dd, x + w, yt, x, yt + dd], '#f0dcaa', Math.max(1.2, 1.6 * u));
    }
    // rampa ve işçiler
    const building = p > 0 && !unfinished && ((m.stop && st.Y > m.stop) || (!m.stop && p < 1));
    if (building && !mast && zb > 1) {
      const hb = hwAt(prof, zb);
      const bx0 = x - hw0 * k - zb * k * 1.25, bx1 = x - hw0 * k + zb * k * 0.2;
      const tx0 = x - hb * k - 2 * u, tx1 = x - hb * k * 0.25;
      shape([bx0, y + 2, bx1, y + fy * 0.6, tx1, yt + 1, tx0, yt + 1], '#ad8a58', Math.max(1.2, 1.6 * u));
      g.strokeStyle = 'rgba(80,50,25,0.25)'; g.lineWidth = 1;
      for (let i = 1; i < 6; i++) { const q = i / 6; g.beginPath(); g.moveTo(lerp(bx0, tx0, q), lerp(y, yt, q)); g.lineTo(lerp(bx1, tx1, q), lerp(y + fy * 0.6, yt, q)); g.stroke(); }
      const n = Math.round(clamp(m.b / 25, 3, 9));
      for (let i = 0; i < n; i++) {
        const q = (T * 0.04 + i / n) % 1, px = lerp((bx0 + bx1) / 2, (tx0 + tx1) / 2, q), py = lerp(y, yt, q);
        g.fillStyle = '#f3e6c4'; g.fillRect(px - 2.5 * u, py - 4 * u, 5 * u, 3.4 * u);
        g.fillStyle = '#4a2c18';
        for (let j = 1; j <= 3; j++) { g.beginPath(); g.arc(px + j * 3 * u, py - 2.5 * u - j * 0.6 * u, 1.2 * u, 0, 7); g.fill(); }
      }
      // tepedeki ve dipteki işçiler
      g.fillStyle = '#4a2c18';
      for (let i = 0; i < n * 2; i++) {
        const tx = x + (hash(i + m.wx) * 2 - 1) * hb * k * 0.9 + Math.sin(T * 0.4 + i) * 3 * u;
        g.beginPath(); g.arc(tx, yt - 1.5 * u, 1.1 * u, 0, 7); g.fill();
        const bx = x + (hash(i * 3 + m.wx) * 2.4 - 1.2) * hw0 * k + Math.sin(T * 0.3 + i * 2) * 8 * u;
        g.beginPath(); g.arc(bx, y + 3 * u + hash(i + 9) * 5 * u, 1.2 * u, 0, 7); g.fill();
      }
    }
  }

  function drawSphinx(m, p, x, y, k) {
    // oyulmadan önce kaya tepesi, sonra aslan gövdesi
    if (p < 1) {
      g.globalAlpha = 1 - p * 0.9;
      g.beginPath(); g.moveTo(x - 44 * k, y); g.quadraticCurveTo(x - 30 * k, y - 26 * k, x, y - 24 * k); g.quadraticCurveTo(x + 34 * k, y - 22 * k, x + 46 * k, y); g.closePath();
      g.fillStyle = '#d4b277'; g.fill(); g.strokeStyle = OUT; g.lineWidth = 1.6 * u; g.stroke();
      g.globalAlpha = 1;
    }
    if (p <= 0.05) return;
    g.save(); g.globalAlpha = clamp(p * 1.3); g.translate(x, y); g.scale(k, k); g.lineJoin = 'round';
    const lw = 1.8 * u / k;
    const S = (pts, c) => shape(pts, c, lw);
    S([-36, 0, -36, -9, -30, -14, 10, -14, 18, -10, 18, 0], '#dcbd85');   // gövde
    S([18, 0, 18, -4, 40, -4, 40, 0], '#d2b27a');                        // pençeler
    S([12, -12, 12, -26, 16, -31, 24, -31, 27, -26, 27, -12], '#e7cc96'); // başlık (nemes)
    S([16, -14, 16, -27, 24, -27, 24, -14], '#d6b57d');                   // yüz
    g.fillStyle = OUT; g.beginPath(); g.arc(22, -22, 0.9 * lw, 0, 7); g.fill();
    g.strokeStyle = '#b5935f'; g.lineWidth = lw * 0.6;
    for (let i = 0; i < 4; i++) { g.beginPath(); g.moveTo(12, -26 + i * 3.5); g.lineTo(16, -26 + i * 3.5); g.stroke(); }
    g.restore();
  }
  function drawSunTemple(m, p, x, y, k) {
    const pp = clamp(p / 0.6), po = clamp((p - 0.6) / 0.4);
    const hw = 40, ht = 14 * pp;
    shape([x - hw * k, y, x + hw * k, y, x + (hw - 3) * k, y - ht * k, x - (hw - 3) * k, y - ht * k], '#e7d2a2', 1.6 * u);
    if (po > 0) {
      const oh = 34 * po, yb = y - ht * k;
      shape([x - 6 * k, yb, x + 6 * k, yb, x + 3.5 * k, yb - oh * k, x, yb - (oh + 5) * k, x - 3.5 * k, yb - oh * k], '#f3e6c4', 1.6 * u);
      if (po >= 1) { shape([x - 3.5 * k, yb - 34 * k, x, yb - 39 * k, x + 3.5 * k, yb - 34 * k], '#f2c94c', 1.2 * u); }
    }
  }

  // ---------- yeni yapı türleri (Orta/Yeni Krallık, Geç Dönem) ----------
  const STONE = ['#e6c995', '#c9a46a'];
  function clipUp(x, y, w, hgt) { g.beginPath(); g.rect(x - w, y - hgt, w * 2, hgt + 8); g.clip(); }
  function ramp(x0, y, xt, yt, wTop) {
    shape([x0, y + 2, x0 + (xt - x0) * 0.55, y + 2, xt + wTop, yt, xt, yt], '#ad8a58', Math.max(1.2, 1.4 * u));
  }
  function drawTemple(m, p, x, y, k) {
    const bw = m.b * k, hp = m.h * k, lw = Math.max(1.2, 1.6 * u);
    const ph1 = clamp(p / 0.5), ph2 = clamp((p - 0.35) / 0.65);
    if (ph1 > 0) { // arkadaki salonlar
      const hh = hp * 0.55 * ph1, hw = bw * 0.46;
      shape([x - hw, y, x + hw, y, x + hw, y - hh, x - hw, y - hh], '#dcc08a', lw);
      if (ph1 >= 1) { g.fillStyle = 'rgba(90,60,30,0.28)'; for (let i = 0; i < 9; i++) g.fillRect(x - hw + (i + 0.5) * hw * 2 / 9 - 1.5 * k, y - hh + 3 * k, 3 * k, hh - 3 * k); }
    }
    if (ph2 > 0) { // pilonlar
      const th = hp * ph2;
      for (const sd of [-1, 1]) {
        const xo = x + sd * bw / 2, xi = x + sd * bw * 0.085, bat = th * 0.13;
        shape([xo, y, xi, y, xi, y - th, xo - sd * bat, y - th], sd < 0 ? STONE[0] : STONE[1], lw);
        if (ph2 >= 1) {
          g.fillStyle = 'rgba(70,45,20,0.6)'; g.fillRect(Math.min(xo - sd * bat, xi), y - th - 2.5 * k, Math.abs(xi - xo + sd * bat), 2.5 * k);
          // boyalı kabartmalar
          const cx = (xo + xi) / 2;
          g.fillStyle = 'rgba(40,90,150,0.55)'; g.fillRect(cx - bw * 0.08, y - th * 0.62, bw * 0.05, th * 0.32);
          g.fillStyle = 'rgba(170,50,40,0.55)'; g.fillRect(cx + bw * 0.02, y - th * 0.58, bw * 0.05, th * 0.28);
          // bayrak direkleri
          for (const o of [0.25, 0.6]) {
            const px = xi + (xo - xi) * o * 0.5;
            g.strokeStyle = '#6b4a2a'; g.lineWidth = Math.max(1, 1.2 * k); g.beginPath(); g.moveTo(px, y); g.lineTo(px, y - hp * 1.35); g.stroke();
            const wv = Math.sin(T * 3 + o * 9) * 3 * k;
            shape([px, y - hp * 1.35, px + 10 * k, y - hp * 1.3 + wv, px, y - hp * 1.24], o < 0.5 ? '#d9473a' : '#f4eedf', 0.8);
          }
        }
      }
      const gh = Math.min(th, hp * 0.72), gw = bw * 0.085;
      shape([x - gw, y, x + gw, y, x + gw, y - gh, x - gw, y - gh], '#e9d3a3', lw);
      if (gh > hp * 0.5) { g.fillStyle = '#4a2c18'; g.fillRect(x - gw * 0.55, y - hp * 0.5, gw * 1.1, hp * 0.5); }
      if (p < 1) ramp(x - bw * 0.95, y, x - bw * 0.5, y - th, bw * 0.12);
    }
    if (m.obelisks && p >= 1) for (const sd of [-1, 1]) drawObeliskAt(x + sd * bw * 0.15, y, k, m.obelisks, 1);
  }
  function drawObeliskAt(x, y, k, h, p) {
    const w = h * 0.14, ang = (1 - ease(clamp(p))) * 1.3;
    g.save(); g.translate(x, y); g.rotate(-ang); g.scale(k, k);
    shape([-w * 0.65, 0, w * 0.65, 0, w * 0.65, -w * 0.4, -w * 0.65, -w * 0.4], '#bfa27a', 1.2 / k);
    shape([-w / 2, -w * 0.4, w / 2, -w * 0.4, w * 0.34, -h * 0.9, -w * 0.34, -h * 0.9], '#d9a99a', 1.4 / k);
    shape([-w * 0.34, -h * 0.9, w * 0.34, -h * 0.9, 0, -h], '#f2c94c', 1.2 / k);
    g.strokeStyle = 'rgba(90,40,30,0.35)'; g.lineWidth = 0.8 / k;
    for (let i = 1; i < 9; i++) { g.beginPath(); g.moveTo(-w * 0.12, -h * 0.09 * i); g.lineTo(w * 0.12, -h * 0.09 * i); g.stroke(); }
    g.restore();
  }
  function seated(x, y, h, col) { // oturan dev heykel (birim: px)
    const lw = Math.max(1.2, 1.5 * u);
    shape([x - h * 0.22, y, x + h * 0.22, y, x + h * 0.22, y - h * 0.42, x - h * 0.22, y - h * 0.42], col, lw);           // taht
    shape([x - h * 0.13, y, x + h * 0.13, y, x + h * 0.13, y - h * 0.5, x - h * 0.13, y - h * 0.5], col, lw);             // bacaklar
    shape([x - h * 0.11, y - h * 0.5, x + h * 0.11, y - h * 0.5, x + h * 0.1, y - h * 0.8, x - h * 0.1, y - h * 0.8], col, lw); // gövde
    shape([x - h * 0.12, y - h * 0.78, x + h * 0.12, y - h * 0.78, x + h * 0.08, y - h * 0.95, x - h * 0.08, y - h * 0.95], '#e7cc96', lw); // nemes
    shape([x - h * 0.06, y - h * 0.8, x + h * 0.06, y - h * 0.8, x + h * 0.06, y - h * 0.94, x - h * 0.06, y - h * 0.94], col, lw);       // yüz
    shape([x - h * 0.05, y - h * 0.94, x + h * 0.05, y - h * 0.94, x + h * 0.04, y - h, x - h * 0.04, y - h], '#d9473a', lw * 0.8);       // taç
  }
  function drawColossus(m, p, x, y, k) {
    g.save(); clipUp(x, y, m.b * k + m.h * k, m.h * k * p + 2);
    for (const sd of [-1, 1]) seated(x + sd * m.b / 2 * k, y, m.h * k, '#c9a07a');
    g.restore();
  }
  function drawRockTemple(m, p, x, y, k) {
    const bw = m.b * k, hh = m.h * k, lw = Math.max(1.2, 1.6 * u);
    shape([x - bw * 1.1, y, x - bw * 0.95, y - hh * 1.2, x - bw * 0.2, y - hh * 1.32, x + bw * 0.6, y - hh * 1.25, x + bw * 1.1, y - hh * 1.05, x + bw * 1.2, y], '#d39a5c', lw);
    // yukarıdan aşağı oyuluyor
    g.save(); g.beginPath(); g.rect(x - bw / 2 - 2, y - hh - 2, bw + 4, hh * p + 2); g.clip();
    shape([x - bw / 2, y, x + bw / 2, y, x + bw / 2, y - hh, x - bw / 2, y - hh], '#e6b37c', lw);
    for (let i = 0; i < 4; i++) { const cx = x - bw / 2 + bw * (i + 0.5) / 4 + (i < 2 ? -1 : 1) * bw * 0.04; seated(cx, y, hh * 0.86, '#dba56f'); }
    g.restore();
    if (p >= 1) { g.fillStyle = '#3d2412'; g.fillRect(x - bw * 0.04, y - hh * 0.3, bw * 0.08, hh * 0.3); }
  }
  function drawTerrace(m, p, x, y, k) {
    const bw = m.b * k, lh = m.h * k / 3, lw = Math.max(1.2, 1.5 * u);
    for (let i = 0; i < 3; i++) {
      const lp = clamp(p * 3 - i); if (lp <= 0) break;
      const w = bw * (1 - i * 0.24) / 2, y0 = y - i * lh, hh = lh * lp;
      shape([x - w, y0, x + w, y0, x + w, y0 - hh, x - w, y0 - hh], i % 2 ? '#f3e8cf' : '#ead9b4', lw);
      if (lp >= 1) { g.fillStyle = 'rgba(80,55,30,0.4)'; const n = Math.max(6, Math.round(w / (4 * k))); for (let j = 0; j < n; j++) { if (Math.abs(j - n / 2) < 1.2) continue; g.fillRect(x - w + (j + 0.25) * 2 * w / n, y0 - hh + 2 * k, w / n * 0.9, hh - 4 * k); } }
      shape([x - bw * 0.05, y0, x + bw * 0.05, y0, x + bw * 0.035, y0 - hh, x - bw * 0.035, y0 - hh], '#f7efdc', lw * 0.8);
    }
  }
  function drawLighthouse(m, p, x, y, k) {
    const h = m.h * k, lw = Math.max(1.2, 1.6 * u);
    g.save(); clipUp(x, y, h, h * p + 4);
    shape([x - h * 0.17, y, x + h * 0.17, y, x + h * 0.15, y - h * 0.56, x - h * 0.15, y - h * 0.56], '#f3ecda', lw);
    g.strokeStyle = 'rgba(120,100,70,0.35)'; g.lineWidth = 1; for (let i = 1; i < 6; i++) { g.beginPath(); g.moveTo(x - h * 0.16, y - h * 0.1 * i); g.lineTo(x + h * 0.16, y - h * 0.1 * i); g.stroke(); }
    shape([x - h * 0.1, y - h * 0.56, x + h * 0.1, y - h * 0.56, x + h * 0.08, y - h * 0.84, x - h * 0.08, y - h * 0.84], '#ece3cc', lw);
    shape([x - h * 0.055, y - h * 0.84, x + h * 0.055, y - h * 0.84, x + h * 0.055, y - h * 0.96, x - h * 0.055, y - h * 0.96], '#e3d6b6', lw);
    g.restore();
    if (p >= 1) {
      const fx = x, fy = y - h * 0.9, r = h * (0.12 + Math.sin(T * 9) * 0.01);
      const gr = g.createRadialGradient(fx, fy, 0, fx, fy, r * 2.2); gr.addColorStop(0, 'rgba(255,220,120,0.95)'); gr.addColorStop(1, 'rgba(255,170,60,0)');
      g.fillStyle = gr; g.beginPath(); g.arc(fx, fy, r * 2.2, 0, 7); g.fill();
      L(x, y - h * 0.96, x, y - h, Math.max(1.5, h * 0.015), '#d9b273');
    }
  }
  function drawCity(m, p, x, y, k) {
    const n = Math.round((m.n || 16) * p), bw = m.b * k;
    const hs = [];
    for (let i = 0; i < n; i++) hs.push([x - bw / 2 + hash(i * 3.1 + m.wx) * bw, y - hash(i * 7.7 + 2) * Math.min(18 * u, bw * 0.08), hash(i + 5)]);
    hs.sort((a, b) => a[1] - b[1]);
    if (m.wall && p > 0.3) { g.strokeStyle = '#f2ede0'; g.lineWidth = Math.max(2, 3 * u); g.strokeRect(x - bw / 2 - 6 * u, y - 22 * u, bw + 12 * u, 24 * u); }
    for (const [hx, hy, v] of hs) house(hx, hy, Math.max(0.25 * u, (m.hk || 0.36) * k), v);
    if (m.tapinak && p > 0.5) drawTemple({ b: m.b * 0.28, h: m.b * 0.08 }, 1, x, y + 2, k);
  }
  // ---------- MS dönem yapıları: kilise, cami, kale, baraj, müze, kule, modern şehir ----------
  function crane(x, y, h) {
    const lw = Math.max(1, 1.2 * u);
    g.strokeStyle = '#d9a02a'; g.lineWidth = lw * 2; g.beginPath(); g.moveTo(x, y); g.lineTo(x, y - h); g.lineTo(x + h * 0.55, y - h); g.moveTo(x - h * 0.15, y - h); g.lineTo(x, y - h); g.stroke();
    g.lineWidth = lw; for (let i = 0; i < 8; i++) { g.beginPath(); g.moveTo(x - 2 * u, y - i * h / 8); g.lineTo(x + 2 * u, y - (i + 1) * h / 8); g.stroke(); }
    const q = (Math.sin(T * 0.6) + 1) / 2, hx = x + h * (0.15 + q * 0.35);
    g.strokeStyle = '#333'; g.beginPath(); g.moveTo(hx, y - h); g.lineTo(hx, y - h * 0.6); g.stroke();
    g.fillStyle = '#888'; g.fillRect(hx - 3 * u, y - h * 0.6, 6 * u, 4 * u);
  }
  function minaret(x, y, h, w, stil, col) {
    const lw = Math.max(1, 1.3 * u);
    if (stil === 'osmanli') {
      shape([x - w, y, x + w, y, x + w * 0.8, y - h * 0.86, x - w * 0.8, y - h * 0.86], col, lw);
      for (const f of [0.55, 0.8]) shape([x - w * 1.5, y - h * f, x + w * 1.5, y - h * f, x + w * 1.2, y - h * f + w * 0.8, x - w * 1.2, y - h * f + w * 0.8], col, lw);
      shape([x - w * 0.8, y - h * 0.86, x + w * 0.8, y - h * 0.86, x, y - h], '#7a8a96', lw);
    } else {
      // Memlük tarzı: kare gövde, sekizgen orta, ince üst ve soğan tepe
      shape([x - w, y, x + w, y, x + w, y - h * 0.45, x - w, y - h * 0.45], col, lw);
      shape([x - w * 0.8, y - h * 0.45, x + w * 0.8, y - h * 0.45, x + w * 0.75, y - h * 0.75, x - w * 0.75, y - h * 0.75], col, lw);
      shape([x - w * 1.3, y - h * 0.45, x + w * 1.3, y - h * 0.45, x + w * 1.1, y - h * 0.42, x - w * 1.1, y - h * 0.42], col, lw);
      shape([x - w * 0.5, y - h * 0.75, x + w * 0.5, y - h * 0.75, x + w * 0.5, y - h * 0.9, x - w * 0.5, y - h * 0.9], col, lw);
      g.beginPath(); g.ellipse(x, y - h * 0.93, w * 0.6, h * 0.05, 0, 0, 7); g.fillStyle = col; g.fill(); g.strokeStyle = OUT; g.lineWidth = lw; g.stroke();
      L(x, y - h * 0.97, x, y - h, Math.max(1, w * 0.12), '#c9a43a');
    }
  }
  function dome(x, y, r, col) {
    const lw = Math.max(1, 1.4 * u);
    g.beginPath(); g.moveTo(x - r, y); g.quadraticCurveTo(x - r, y - r * 1.25, x, y - r * 1.35); g.quadraticCurveTo(x + r, y - r * 1.25, x + r, y); g.closePath();
    g.fillStyle = col; g.fill(); g.strokeStyle = OUT; g.lineWidth = lw; g.stroke();
    L(x, y - r * 1.35, x, y - r * 1.6, Math.max(1, r * 0.06), '#c9a43a');
  }
  function drawMosque(m, p, x, y, k) {
    const bw = m.b * k, hh = m.h * k, lw = Math.max(1.2, 1.5 * u), col = m.renk || '#e3d3b4', cd = '#cdb894';
    g.save(); clipUp(x, y, bw + hh, hh * Math.max(0.15, p) * 1.1 + 4);
    const wh = hh * 0.32;
    shape([x - bw / 2, y, x + bw / 2, y, x + bw / 2, y - wh, x - bw / 2, y - wh], col, lw);
    g.fillStyle = 'rgba(80,55,30,0.35)'; const na = Math.max(4, Math.round(bw / (10 * k))); for (let i = 0; i < na; i++) { const ax = x - bw / 2 + (i + 0.5) * bw / na; g.beginPath(); g.moveTo(ax - bw / na * 0.25, y - 2 * k); g.lineTo(ax - bw / na * 0.25, y - wh * 0.55); g.arc(ax, y - wh * 0.55, bw / na * 0.25, Math.PI, 0); g.lineTo(ax + bw / na * 0.25, y - 2 * k); g.fill(); }
    // mazgallar
    g.fillStyle = col; for (let i = 0; i < na * 2; i++) { const cx = x - bw / 2 + (i + 0.5) * bw / (na * 2); g.fillRect(cx - 1.2 * k, y - wh - 2.5 * k, 2.4 * k, 2.5 * k); }
    if (m.stil === 'osmanli') {
      // basamaklı kubbeler, ortada büyük kubbe
      for (const sd of [-1, 1]) dome(x + sd * bw * 0.28, y - wh, bw * 0.09, '#9aa6ae');
      shape([x - bw * 0.22, y - wh, x + bw * 0.22, y - wh, x + bw * 0.22, y - wh - hh * 0.12, x - bw * 0.22, y - wh - hh * 0.12], col, lw);
      dome(x, y - wh - hh * 0.12, bw * 0.2, '#8f9ba3');
    } else {
      shape([x - bw * 0.14, y - wh, x + bw * 0.14, y - wh, x + bw * 0.14, y - wh - hh * 0.1, x - bw * 0.14, y - wh - hh * 0.1], cd, lw);
      dome(x, y - wh - hh * 0.1, bw * 0.13, m.kubbe || '#d8c49c');
    }
    const nm = m.minare ?? 1;
    for (let i = 0; i < nm; i++) { const mx = nm === 1 ? x + bw * 0.42 : x + (i % 2 ? 1 : -1) * bw * (0.44 - Math.floor(i / 2) * 0.12); minaret(mx, y, hh, Math.max(1.6 * u, 2.2 * k), m.stil, col); }
    g.restore();
    if (p < 1) crane(x + bw * 0.55, y, hh * 0.9);
  }
  function drawChurch(m, p, x, y, k) {
    const bw = m.b * k, hh = m.h * k, lw = Math.max(1.2, 1.5 * u), col = m.renk || '#e8dcc4';
    g.save(); clipUp(x, y, bw + hh, hh * Math.max(0.15, p) + 6);
    const wh = hh * 0.45;
    shape([x - bw / 2, y, x + bw / 2, y, x + bw / 2, y - wh, x - bw / 2, y - wh], col, lw);
    shape([x - bw / 2 - 2 * k, y - wh, x + bw / 2 + 2 * k, y - wh, x + bw * 0.3, y - wh - hh * 0.18, x - bw * 0.3, y - wh - hh * 0.18], '#b0835a', lw);
    g.fillStyle = 'rgba(60,40,25,0.45)'; for (let i = 0; i < 5; i++) { const ax = x - bw * 0.4 + i * bw * 0.2; g.beginPath(); g.moveTo(ax - 2 * k, y - wh * 0.3); g.lineTo(ax - 2 * k, y - wh * 0.7); g.arc(ax, y - wh * 0.7, 2 * k, Math.PI, 0); g.lineTo(ax + 2 * k, y - wh * 0.3); g.fill(); }
    // Kıpti kubbeleri ya da çan kulesi
    if (m.kule) { const tx = x - bw * 0.42; shape([tx - 4 * k, y, tx + 4 * k, y, tx + 4 * k, y - hh * 0.9, tx - 4 * k, y - hh * 0.9], col, lw); dome(tx, y - hh * 0.9, 4 * k, '#d8c49c'); }
    const dr = m.buyukKubbe ? bw * 0.26 : bw * 0.12;
    for (const sd of [-0.18, 0.18]) dome(x + sd * bw * (m.buyukKubbe ? 1.5 : 1), y - wh - hh * 0.12, bw * 0.09, '#efe6d4');
    dome(x, y - wh - hh * 0.18, dr, m.kubbe || '#f4ecdc');
    const cy = y - wh - hh * 0.18 - dr * 1.6;
    L(x, cy, x, cy - 5 * k, Math.max(1, 0.8 * k), '#3a2414'); L(x - 2.5 * k, cy - 3.3 * k, x + 2.5 * k, cy - 3.3 * k, Math.max(1, 0.8 * k), '#3a2414');
    g.restore();
  }
  function drawCitadel(m, p, x, y, k) {
    const bw = m.b * k, hh = m.h * k, lw = Math.max(1.2, 1.6 * u);
    // Mukattam tepesinin ucu (tepe: true ise)
    const hy = m.tepe ? hh * 0.35 : 0;
    if (m.tepe) shape([x - bw * 0.62, y, x - bw * 0.5, y - hy, x + bw * 0.45, y - hh * 0.38, x + bw * 0.65, y], '#cfa86a', lw);
    g.save(); clipUp(x, y - hy, bw, (hh - hy) * p + 4);
    const wy = y - hy, wh = m.tepe ? hh * 0.3 : hh * 0.6;
    shape([x - bw / 2, wy, x + bw / 2, wy, x + bw / 2, wy - wh, x - bw / 2, wy - wh], '#d9c39a', lw);
    for (let i = 0; i <= 6; i++) { const tx = x - bw / 2 + i * bw / 6; shape([tx - bw * 0.035, wy, tx + bw * 0.035, wy, tx + bw * 0.035, wy - wh * 1.35, tx - bw * 0.035, wy - wh * 1.35], '#cdb487', lw); g.fillStyle = '#cdb487'; for (let j = -1; j <= 1; j++) g.fillRect(tx + j * bw * 0.023 - 1.5 * k, wy - wh * 1.35 - 3 * k, 3 * k, 3 * k); }
    g.fillStyle = '#4a2c18'; g.beginPath(); g.moveTo(x - 5 * k, wy); g.lineTo(x - 5 * k, wy - wh * 0.6); g.arc(x, wy - wh * 0.6, 5 * k, Math.PI, 0); g.lineTo(x + 5 * k, wy); g.fill();
    g.restore();
  }
  function drawDam(m, p, x, y, k) {
    const bw = m.b * k, hh = m.h * k, lw = Math.max(1.2, 1.6 * u), w = bw * Math.max(0.1, p);
    shape([x - w / 2 - hh * 0.8, y, x + w / 2 + hh * 0.8, y, x + w / 2, y - hh, x - w / 2, y - hh], '#b8a585', lw);
    g.strokeStyle = 'rgba(80,70,50,0.35)'; g.lineWidth = 1; for (let i = 1; i < 4; i++) { const yy = y - hh * i / 4; g.beginPath(); g.moveTo(x - w / 2 - hh * 0.8 * (1 - i / 4), yy); g.lineTo(x + w / 2 + hh * 0.8 * (1 - i / 4), yy); g.stroke(); }
    if (p >= 1) {
      g.fillStyle = '#4a4a4a'; g.fillRect(x - w / 2, y - hh - 2 * k, w, 2 * k); // yol
      // Sovyet-Mısır dostluk anıtı (lotus)
      const ax = x + w * 0.2; for (let i = 0; i < 5; i++) { const a = -0.35 + i * 0.175; L(ax, y - hh, ax + Math.sin(a) * 30 * k, y - hh - Math.cos(a) * 60 * k, Math.max(1.5, 2.4 * k), '#e9e6dc'); }
      shape([ax - 8 * k, y - hh - 58 * k, ax + 8 * k, y - hh - 58 * k, ax + 12 * k, y - hh - 70 * k, ax, y - hh - 64 * k, ax - 12 * k, y - hh - 70 * k], '#f2f0e8', lw);
      // santral
      shape([x - w * 0.3, y, x - w * 0.1, y, x - w * 0.1, y - hh * 0.35, x - w * 0.3, y - hh * 0.35], '#d8d2c2', lw);
      g.fillStyle = 'rgba(120,180,220,0.8)'; for (let i = 0; i < 6; i++) g.fillRect(x - w * 0.28 + i * w * 0.03, y - 4 * k, w * 0.02, 4 * k);
    } else crane(x + w / 2, y - hh, hh * 0.8);
  }
  function drawMuseum(m, p, x, y, k) {
    const bw = m.b * k, hh = m.h * k, lw = Math.max(1.2, 1.6 * u);
    if (m.stil === 'klasik' || m.stil === 'disk') {
      g.save(); clipUp(x, y, bw, hh * Math.max(0.12, p) * 1.4 + 4);
      if (m.stil === 'klasik') {
        shape([x - bw / 2, y, x + bw / 2, y, x + bw / 2, y - hh * 0.8, x - bw / 2, y - hh * 0.8], '#e2a98e', lw);
        shape([x - bw * 0.16, y, x + bw * 0.16, y, x + bw * 0.16, y - hh, x - bw * 0.16, y - hh], '#e8b49a', lw);
        dome(x, y - hh, bw * 0.1, '#d89a80');
        g.fillStyle = 'rgba(70,40,30,0.5)'; g.beginPath(); g.moveTo(x - bw * 0.07, y); g.lineTo(x - bw * 0.07, y - hh * 0.45); g.arc(x, y - hh * 0.45, bw * 0.07, Math.PI, 0); g.lineTo(x + bw * 0.07, y); g.fill();
        for (let i = 0; i < 8; i++) { const wx = x - bw * 0.46 + i * bw * 0.04 + (i > 3 ? bw * 0.6 : 0); g.fillRect(wx, y - hh * 0.6, bw * 0.02, hh * 0.25); }
      } else {
        // eğik disk (İskenderiye Kütüphanesi)
        g.beginPath(); g.moveTo(x - bw / 2, y); g.lineTo(x + bw / 2, y); g.lineTo(x + bw / 2, y - hh * 0.25); g.lineTo(x - bw / 2, y - hh); g.closePath(); g.fillStyle = '#c9c5bb'; g.fill(); g.strokeStyle = OUT; g.lineWidth = lw; g.stroke();
        g.strokeStyle = 'rgba(80,80,80,0.4)'; g.lineWidth = 1; for (let i = 1; i < 8; i++) { const xx = x - bw / 2 + i * bw / 8; g.beginPath(); g.moveTo(xx, y); g.lineTo(xx, y - hh + (hh * 0.75) * i / 8); g.stroke(); }
        g.fillStyle = 'rgba(120,170,210,0.6)'; g.beginPath(); g.moveTo(x - bw / 2, y - hh); g.lineTo(x + bw / 2, y - hh * 0.25); g.lineTo(x + bw / 2, y - hh * 0.3); g.lineTo(x - bw / 2, y - hh * 1.05); g.fill();
      }
      g.restore();
      if (p < 1) crane(x + bw * 0.4, y, hh * 1.4); else if (m.kisaAd) label(x, y - hh * 1.2 - 12 * u, m.kisaAd, '#2e6a9a');
      return;
    }
    g.save(); clipUp(x, y, bw, hh * Math.max(0.12, p) + 4);
    shape([x - bw / 2, y, x + bw / 2, y, x + bw * 0.42, y - hh, x - bw * 0.5, y - hh * 0.55], '#e8e2d2', lw);
    // üçgen alabaster cephe deseni
    g.strokeStyle = 'rgba(150,140,120,0.55)'; g.lineWidth = 1;
    const n = Math.max(6, Math.round(bw / (14 * k)));
    for (let i = 0; i < n; i++) { const x0 = x - bw / 2 + i * bw / n, x1 = x0 + bw / n; g.beginPath(); g.moveTo(x0, y); g.lineTo((x0 + x1) / 2, y - hh * 0.5); g.lineTo(x1, y); g.stroke(); }
    g.fillStyle = 'rgba(120,170,210,0.55)'; g.fillRect(x - bw * 0.08, y - hh * 0.38, bw * 0.16, hh * 0.38);
    g.restore();
    if (p >= 1) { // girişte dev Ramses heykeli
      const sx = x - bw * 0.2, sh = hh * 0.55; shape([sx - sh * 0.08, y, sx + sh * 0.08, y, sx + sh * 0.06, y - sh * 0.9, sx - sh * 0.06, y - sh * 0.9], '#c9a07a', lw);
      circ(sx, y - sh * 0.95, sh * 0.07, '#c9a07a', lw);
      label(x, y - hh - 14 * u, m.kisaAd || 'MÜZE', '#2e6a9a');
    } else crane(x + bw * 0.3, y, hh * 1.3);
  }
  function drawTower(m, p, x, y, k) {
    const hh = m.h * k, w = Math.max(3 * u, m.b * k), lw = Math.max(1.2, 1.4 * u);
    g.save(); clipUp(x, y, hh, hh * p + 4);
    shape([x - w * 0.6, y, x + w * 0.6, y, x + w * 0.45, y - hh * 0.85, x - w * 0.45, y - hh * 0.85], '#e6dccb', lw);
    g.strokeStyle = 'rgba(120,100,70,0.5)'; g.lineWidth = 1; for (let i = 0; i < 14; i++) { const yy = y - hh * 0.85 * i / 14; g.beginPath(); g.moveTo(x - w * 0.55, yy); g.lineTo(x + w * 0.55, yy - hh * 0.06); g.moveTo(x + w * 0.55, yy); g.lineTo(x - w * 0.55, yy - hh * 0.06); g.stroke(); }
    shape([x - w * 1.1, y - hh * 0.85, x + w * 1.1, y - hh * 0.85, x + w * 0.8, y - hh * 0.95, x - w * 0.8, y - hh * 0.95], '#d8cdb6', lw);
    L(x, y - hh * 0.95, x, y - hh, Math.max(1, w * 0.1), '#888');
    g.restore();
    if (p >= 1 && Math.sin(T * 3) > 0) { g.fillStyle = '#ff4a3a'; g.beginPath(); g.arc(x, y - hh, 2 * u, 0, 7); g.fill(); }
  }
  function drawModCity(m, p, x, y, k) {
    const bw = m.b * k, n = Math.round((m.n || 40) * p), hmax = m.h * k, lw = Math.max(1, 1.2 * u);
    const bs = [];
    for (let i = 0; i < n; i++) { const r = hash(i * 5.3 + m.wx), r2 = hash(i * 2.1 + 7); bs.push([x - bw / 2 + hash(i * 3.7 + 1) * bw, (0.18 + Math.pow(r, 2.2) * 0.82) * hmax, (6 + r2 * 10) * k, r2, i]); }
    bs.sort((a, b) => b[1] - a[1]);
    for (const [bx, bh, w, r2, i] of bs) {
      const isMin = m.minareli && i % 9 === 4;
      if (isMin) { minaret(bx, y, bh * 0.8, Math.max(1.4 * u, 1.6 * k), 'memluk', '#e6d8b8'); continue; }
      const col = ['#d8c8a8', '#c9b89a', '#e3dccb', '#b8a88a', '#cfc6b2', '#a9b4bc'][Math.floor(r2 * 6)];
      shape([bx - w, y, bx + w, y, bx + w, y - bh, bx - w, y - bh], col, lw);
      g.fillStyle = r2 > 0.8 ? 'rgba(120,170,210,0.55)' : 'rgba(70,55,40,0.35)';
      const rows = Math.max(1, Math.floor(bh / (5 * k))), cols = Math.max(1, Math.floor(w * 2 / (4 * k)));
      if (rows * cols < 400) for (let a = 0; a < rows; a++) for (let b = 0; b < cols; b++) g.fillRect(bx - w + (b + 0.3) * w * 2 / cols, y - bh + (a + 0.3) * bh / rows, w * 2 / cols * 0.45, bh / rows * 0.45);
      if (r2 < 0.3) { circ(bx - w * 0.4, y - bh - 2 * k, 1.6 * k, '#e9e9e9', 0.6); } // çanak anten
    }
  }
  function drawValley(m, p, x, y, k) {
    const n = Math.round((m.n || 20) * p);
    for (let i = 0; i < n; i++) {
      const dx = (hash(i * 7.3 + 1) - 0.5) * m.b * k, dy = (0.12 + hash(i * 11.1 + 3) * 0.55) * m.h * k;
      g.fillStyle = '#f0d8a8'; g.beginPath(); g.moveTo(x + dx - 6 * k, y - dy + 9 * k); g.lineTo(x + dx + 6 * k, y - dy + 9 * k); g.lineTo(x + dx, y - dy + 2 * k); g.fill();
      shape([x + dx - 2.5 * k, y - dy + 2 * k, x + dx + 2.5 * k, y - dy + 2 * k, x + dx + 2 * k, y - dy - 4 * k, x + dx - 2 * k, y - dy - 4 * k], '#3d2412', 1);
    }
  }
  function drawCliffs() {
    for (const c of P.cliffs || []) {
      const x0 = W / 2 + (c.wx - c.w / 2 - camX) * s, x1 = W / 2 + (c.wx + c.w / 2 - camX) * s;
      if (x1 < -50 || x0 > W + 50) continue;
      g.beginPath(); g.moveTo(x0, gY + 2);
      const N = 40;
      for (let i = 0; i <= N; i++) {
        const t = i / N, tt = Math.abs(t * 2 - 1), wx = c.wx - c.w / 2 + t * c.w;
        const bump = Math.max(0, 1 - Math.abs(t - (c.peak || 0.5)) * 2.2);
        const hgt = c.h * (0.28 + 0.72 * Math.pow(bump, 1.3)) * (1 - Math.pow(tt, 6)) + noise(wx * 7) * c.h * 0.06;
        g.lineTo(x0 + t * (x1 - x0), gY - Math.max(0, hgt) * s);
      }
      g.lineTo(x1, gY + 2); g.closePath(); g.fillStyle = '#e0b47a'; g.fill(); g.strokeStyle = OUT; g.lineWidth = Math.max(1.2, 1.6 * u); g.stroke();
      g.save(); g.clip(); g.strokeStyle = 'rgba(140,90,40,0.3)'; g.lineWidth = 2 * u;
      for (let j = 1; j < 6; j++) { const yy = gY - c.h * s * j / 6; g.beginPath(); g.moveTo(x0, yy); g.lineTo(x1, yy + 6 * u); g.stroke(); }
      g.restore();
    }
  }
  // ---------- Anadolu yapı türleri: dikili taşlar, höyük/tümülüs, Yunan tapınağı, tiyatro, köprü, Nemrut ----------
  function drawPillars(m, p, x, y, k) { // Göbekli Tepe: yuvarlak çevre duvarı ve T biçimli dikili taşlar
    const bw = m.b * k, hh = m.h * k, lw = Math.max(1.2, 1.4 * u), n = m.n || 10, sh = Math.ceil(n * p);
    shape([x - bw / 2, y, x + bw / 2, y, x + bw * 0.46, y - hh * 0.35, x - bw * 0.46, y - hh * 0.35], '#c9ad7c', lw);
    g.strokeStyle = 'rgba(90,60,30,0.35)'; g.lineWidth = 1; for (let i = 1; i < 4; i++) { g.beginPath(); g.moveTo(x - bw * 0.48, y - hh * 0.35 * i / 4); g.lineTo(x + bw * 0.48, y - hh * 0.35 * i / 4); g.stroke(); }
    for (let i = 0; i < sh; i++) {
      const t = (i + 0.5) / n, px = x - bw * 0.42 + t * bw * 0.84, big = i === Math.floor(n / 2) || i === Math.floor(n / 2) - 1, ph = hh * (big ? 1 : 0.7), w = (big ? 4 : 3) * k;
      shape([px - w * 0.5, y - 1, px + w * 0.5, y - 1, px + w * 0.5, y - ph * 0.82, px - w * 0.5, y - ph * 0.82], '#e6d6b2', lw);
      shape([px - w * 1.5, y - ph * 0.82, px + w * 1.5, y - ph * 0.82, px + w * 1.5, y - ph, px - w * 1.5, y - ph], '#eddcb8', lw);
      if (big) { g.strokeStyle = 'rgba(80,50,25,0.6)'; g.lineWidth = Math.max(1, 0.6 * k); g.beginPath(); g.moveTo(px - w * 0.4, y - ph * 0.6); g.lineTo(px + w * 0.4, y - ph * 0.55); g.moveTo(px, y - ph * 0.7); g.lineTo(px, y - ph * 0.4); g.stroke(); }
      else if (i % 3 === 0) { g.fillStyle = 'rgba(80,50,25,0.5)'; g.beginPath(); g.ellipse(px, y - ph * 0.5, w * 0.35, w * 0.8, 0, 0, 7); g.fill(); } // kabartma hayvan
    }
  }
  function drawMound(m, p, x, y, k) { // höyük (katman katman köy) ya da tümülüs (kral mezarı tepesi)
    const bw = m.b * k, hh = m.h * k * Math.max(0.15, p), lw = Math.max(1.2, 1.5 * u);
    g.beginPath(); g.moveTo(x - bw / 2, y); g.bezierCurveTo(x - bw * 0.28, y - hh * 1.05, x + bw * 0.28, y - hh * 1.05, x + bw / 2, y); g.closePath();
    g.fillStyle = m.renk || (m.evler ? '#c4a172' : '#8fa65a'); g.fill(); g.strokeStyle = OUT; g.lineWidth = lw; g.stroke();
    if (m.evler) { // Çatalhöyük: kapısız, damdan girilen bitişik kerpiç evler
      const n = Math.round(9 * p);
      for (let i = 0; i < n; i++) { const t = (i + 0.5) / 9, hx = x - bw * 0.36 + t * bw * 0.72, top = y - hh * (0.72 + 0.04 * Math.sin(i)), w = bw * 0.04;
        shape([hx - w, top + hh * 0.18, hx + w, top + hh * 0.18, hx + w, top, hx - w, top], i % 2 ? '#d8b989' : '#cfae7c', 1);
        if (i % 2 === 0) L(hx, top, hx + w * 0.4, top - hh * 0.16, Math.max(1, 0.6 * k), '#6b4a2a'); }
    } else { g.strokeStyle = 'rgba(60,80,30,0.3)'; g.lineWidth = 1; for (let i = 1; i < 5; i++) { g.beginPath(); g.arc(x, y + hh * 0.4, bw * 0.12 * i, Math.PI * 1.15, Math.PI * 1.85); g.stroke(); } }
    if (p < 1 && !m.evler) for (let i = 0; i < 3; i++) person(x - bw * 0.3 + i * bw * 0.25, y - hh * (0.2 + i * 0.1), k * 0.25, { kind: 'man', act: 'hoe', dir: 1, ph: T * 3 + i, seed: i * 17 + 5 });
  }
  function drawGreek(m, p, x, y, k) { // sütunlu tapınak: basamak, sütunlar, alınlık (duz: Anıtkabir gibi düz çatı)
    const bw = m.b * k, hh = m.h * k, lw = Math.max(1.2, 1.4 * u), col = m.renk || '#f1ead8', n = m.sutun || 8;
    const st1 = clamp(p / 0.2), st2 = clamp((p - 0.2) / 0.55), st3 = clamp((p - 0.75) / 0.25), bh = hh * 0.12;
    if (st1 > 0) for (let i = 0; i < 3; i++) { const w = bw / 2 + (3 - i) * 2 * k; shape([x - w, y - i * bh / 3, x + w, y - i * bh / 3, x + w, y - (i + 1) * bh / 3 * st1, x - w, y - (i + 1) * bh / 3 * st1], col, lw); }
    const cy = y - bh, ch = (hh * 0.62) * st2;
    if (st2 > 0) {
      if (m.duz) shape([x - bw * 0.42, cy, x + bw * 0.42, cy, x + bw * 0.42, cy - ch, x - bw * 0.42, cy - ch], '#d9cfb6', lw);
      for (let i = 0; i < n; i++) { const cx = x - bw * 0.46 + (i + 0.5) * bw * 0.92 / n, w = Math.max(1.2, bw * 0.022);
        shape([cx - w, cy, cx + w, cy, cx + w * 0.85, cy - ch, cx - w * 0.85, cy - ch], col, lw);
        if (st2 >= 1) shape([cx - w * 1.4, cy - ch, cx + w * 1.4, cy - ch, cx + w * 1.4, cy - ch - 2 * k, cx - w * 1.4, cy - ch - 2 * k], col, 1); }
    }
    if (st3 > 0) {
      const ey = cy - hh * 0.62 - 2 * k, eh = hh * 0.1;
      shape([x - bw / 2, ey, x + bw / 2, ey, x + bw / 2, ey - eh, x - bw / 2, ey - eh], col, lw);
      g.fillStyle = m.boya || 'rgba(60,90,150,0.35)'; g.fillRect(x - bw / 2, ey - eh * 0.55, bw, eh * 0.25);
      if (!m.duz) shape([x - bw / 2 - 2 * k, ey - eh, x + bw / 2 + 2 * k, ey - eh, x, ey - eh - hh * 0.2 * st3], col, lw);
    }
    if (p < 1) crane(x + bw * 0.6, y, hh * 1.1);
  }
  function drawTheater(m, p, x, y, k) { // antik tiyatro: yamaca yaslanan oturma basamakları ve sahne binası
    const bw = m.b * k, hh = m.h * k, lw = Math.max(1.2, 1.4 * u), rows = Math.max(1, Math.round(12 * p));
    g.beginPath(); g.moveTo(x - bw / 2 - 10 * k, y); g.quadraticCurveTo(x, y - hh * 2.2, x + bw / 2 + 10 * k, y); g.closePath(); g.fillStyle = TM.plato; g.fill(); g.strokeStyle = OUT; g.lineWidth = lw; g.stroke();
    for (let i = 0; i < rows; i++) { const t = i / 12, ry = y - hh * 0.15 - t * hh * 0.85, rw = bw * (0.22 + t * 0.26);
      g.fillStyle = i % 2 ? '#e8dcc0' : '#ddcfae'; g.beginPath(); g.ellipse(x, ry, rw, hh * 0.06, 0, Math.PI, 0); g.lineTo(x + rw, ry + hh * 0.04); g.ellipse(x, ry + hh * 0.04, rw, hh * 0.06, 0, 0, Math.PI, true); g.closePath(); g.fill(); g.strokeStyle = 'rgba(80,60,40,0.4)'; g.lineWidth = 1; g.stroke(); }
    if (p > 0.7) { shape([x - bw * 0.28, y, x + bw * 0.28, y, x + bw * 0.28, y - hh * 0.32, x - bw * 0.28, y - hh * 0.32], '#e9dcbc', lw);
      g.fillStyle = 'rgba(70,50,30,0.45)'; for (let i = 0; i < 5; i++) { const ax = x - bw * 0.22 + i * bw * 0.11; g.fillRect(ax - 1.5 * k, y - hh * 0.25, 3 * k, hh * 0.25); } }
  }
  function drawBridge(m, p, x, y, k) { // asma köprü: iki kule, tabliye, ana kablolar
    const bw = m.b * k, hh = m.h * k, lw = Math.max(1.2, 1.4 * u), tx = bw * 0.32, dy = y - hh * 0.35;
    g.save(); clipUp(x, y, bw, hh * Math.max(0.2, p) + 6);
    for (const sd of [-1, 1]) { const px = x + sd * tx; shape([px - 2.5 * k, y, px + 2.5 * k, y, px + 2 * k, y - hh, px - 2 * k, y - hh], '#c9ccd0', lw); L(px - 3 * k, y - hh * 0.7, px + 3 * k, y - hh * 0.7, Math.max(1, 1.5 * k), '#b0b4b8'); }
    g.restore();
    if (p >= 0.6) {
      shape([x - bw / 2, dy, x + bw / 2, dy, x + bw / 2, dy - 3 * k, x - bw / 2, dy - 3 * k], '#d0d3d6', lw);
      g.strokeStyle = '#8a9096'; g.lineWidth = Math.max(1, 1 * k);
      g.beginPath(); g.moveTo(x - bw / 2, dy - 3 * k); g.quadraticCurveTo(x - tx - bw * 0.05, y - hh * 0.5, x - tx, y - hh); g.quadraticCurveTo(x, dy + hh * 0.35, x + tx, y - hh); g.quadraticCurveTo(x + tx + bw * 0.05, y - hh * 0.5, x + bw / 2, dy - 3 * k); g.stroke();
      g.lineWidth = 0.6; for (let i = -9; i <= 9; i++) { const hx = x + i * tx / 9, cyy = y - hh + (hh - (dy - (y - hh)) * 0) * 0 + (1 - Math.pow(i / 9, 2)) * (hh * 0.62); g.beginPath(); g.moveTo(hx, dy - 3 * k); g.lineTo(hx, Math.min(dy - 3 * k, cyy)); g.stroke(); }
      if (p >= 1) for (let i = 0; i < 4; i++) { const cx2 = x - bw / 2 + ((T * 30 * u + i * bw / 4) % bw); g.fillStyle = ['#d94a3a', '#f2f2f2', '#2e6a9a', '#e8c23a'][i]; g.fillRect(cx2, dy - 6 * k, 4 * k, 2.5 * k); }
    }
    if (p < 1) crane(x, y, hh * 0.8);
  }
  function drawNemrut(m, p, x, y, k) { // Nemrut Dağı: kırma taştan tümülüs ve önünde dev oturan heykeller
    const bw = m.b * k, hh = m.h * k, lw = Math.max(1.2, 1.5 * u);
    shape([x - bw * 0.6, y, x - bw * 0.1, y - hh * 0.55, x + bw * 0.1, y - hh * 0.55, x + bw * 0.6, y], '#a99a86', lw);
    const th = hh * Math.max(0.1, p);
    shape([x - bw * 0.35, y - hh * 0.5, x, y - hh * 0.5 - th * 0.5, x + bw * 0.35, y - hh * 0.5], '#c8bca8', lw);
    g.fillStyle = 'rgba(90,80,70,0.3)'; for (let i = 0; i < 30; i++) { const a = hash(i * 3.3), b = hash(i * 7.1); g.fillRect(x - bw * 0.3 + a * bw * 0.6, y - hh * 0.5 - b * th * 0.4 * (1 - Math.abs(a - 0.5) * 2), 1.5 * k, 1.5 * k); }
    if (p > 0.5) for (let i = 0; i < 5; i++) { const sx = x - bw * 0.5 + i * bw * 0.25, sy = y - hh * 0.02, sh = hh * 0.32; seated(sx, sy, sh, '#d6c6a6'); if (m.ruin && st.Y <= m.ruin) { circ(sx + (i % 2 ? 6 : -6) * k, y - 2 * k, sh * 0.09, '#d6c6a6', 1); } }
  }
  function drawGothic(m, p, x, y, k) { // Gotik katedral: iki kuleli cephe, gül pencere, uçan payandalar
    const bw = m.b * k, hh = m.h * k, lw = Math.max(1.2, 1.4 * u), col = m.renk || '#d8d0bf';
    g.save(); clipUp(x, y, bw + hh, hh * Math.max(0.15, p) + 6);
    const nh = hh * 0.55;
    shape([x - bw / 2, y, x + bw / 2, y, x + bw / 2, y - nh * 0.7, x - bw / 2, y - nh * 0.7], col, lw);
    shape([x - bw / 2, y - nh * 0.7, x + bw / 2, y - nh * 0.7, x + bw * 0.35, y - nh, x - bw * 0.35, y - nh], '#5a6470', lw);
    for (let i = 0; i < 6; i++) { const bx = x - bw * 0.42 + i * bw * 0.17; L(bx, y - nh * 0.35, bx + bw * 0.06, y - nh * 0.75, Math.max(1, 1.2 * k), '#b8ae9a'); }
    const tw = bw * 0.13, ts = m.tek ? [0] : [-1, 1];
    for (const sd of ts) { const tx = x + sd * bw * 0.3;
      shape([tx - tw, y, tx + tw, y, tx + tw, y - hh * 0.78, tx - tw, y - hh * 0.78], col, lw);
      if (m.sivri !== false) shape([tx - tw, y - hh * 0.78, tx + tw, y - hh * 0.78, tx, y - hh], '#4e5862', lw);
      g.fillStyle = 'rgba(40,40,60,0.5)'; for (let j = 0; j < 3; j++) { g.beginPath(); const wy = y - hh * (0.25 + j * 0.17); g.moveTo(tx - tw * 0.35, wy); g.lineTo(tx - tw * 0.35, wy - hh * 0.08); g.lineTo(tx, wy - hh * 0.11); g.lineTo(tx + tw * 0.35, wy - hh * 0.08); g.lineTo(tx + tw * 0.35, wy); g.fill(); } }
    if (!m.tek) { circ(x, y - nh * 0.5, bw * 0.08, '#5a4a8a', lw); g.strokeStyle = 'rgba(255,220,120,0.7)'; g.lineWidth = 1; for (let a = 0; a < 8; a++) { g.beginPath(); g.moveTo(x, y - nh * 0.5); g.lineTo(x + Math.cos(a * 0.785) * bw * 0.08, y - nh * 0.5 + Math.sin(a * 0.785) * bw * 0.08); g.stroke(); }
      g.fillStyle = '#3a2a1a'; g.beginPath(); g.moveTo(x - bw * 0.06, y); g.lineTo(x - bw * 0.06, y - nh * 0.22); g.lineTo(x, y - nh * 0.3); g.lineTo(x + bw * 0.06, y - nh * 0.22); g.lineTo(x + bw * 0.06, y); g.fill(); }
    if (m.saat) { circ(x, y - hh * 0.6, tw * 0.7, '#f4ecd0', lw); L(x, y - hh * 0.6, x, y - hh * 0.6 - tw * 0.5, 1.5, '#222'); }
    g.restore();
    if (p < 1) crane(x + bw * 0.6, y, hh * 0.7);
  }
  function drawArena(m, p, x, y, k) { // Roma amfitiyatrosu: kemer sıraları
    const bw = m.b * k, hh = m.h * k * Math.max(0.2, p), lw = Math.max(1.2, 1.4 * u), fl = Math.max(1, Math.round(4 * p));
    for (let f = 0; f < fl; f++) { const fy = y - f * hh / 4, fh = hh / 4, w = bw / 2 * (1 - f * 0.03);
      shape([x - w, fy, x + w, fy, x + w, fy - fh, x - w, fy - fh], f % 2 ? '#e2cfa6' : '#d8c296', lw);
      if (f < 3) { g.fillStyle = 'rgba(60,40,20,0.55)'; const n = 14; for (let i = 0; i < n; i++) { const ax = x - w + (i + 0.5) * w * 2 / n, aw = w / n * 0.55; g.beginPath(); g.moveTo(ax - aw, fy - 1); g.lineTo(ax - aw, fy - fh * 0.5); g.arc(ax, fy - fh * 0.5, aw, Math.PI, 0); g.lineTo(ax + aw, fy - 1); g.fill(); } } }
    if (m.ruin && st.Y <= m.ruin) { g.fillStyle = TM.plato; g.beginPath(); g.moveTo(x + bw * 0.1, y - hh); g.lineTo(x + bw / 2 + 2, y - hh); g.lineTo(x + bw / 2 + 2, y - hh * 0.45); g.fill(); }
  }
  // ---------- Asya ve Afrika yapıları ----------
  function drawPagoda(m, p, x, y, k) { // Çin, Kore, Japonya: kat kat kıvrık çatılı kule ya da salon (kat: 1 = salon)
    const bw = m.b * k, hh = m.h * k, lw = Math.max(1.1, 1.3 * u), n = m.kat || 5, duvar = m.renk || '#b8432f', cati = m.cati || '#3d4a4c';
    g.save(); clipUp(x, y, bw * 1.3 + hh, hh * Math.max(0.12, p) + 6);
    const taban = hh * 0.08; shape([x - bw * 0.55, y, x + bw * 0.55, y, x + bw * 0.5, y - taban, x - bw * 0.5, y - taban], '#d9cfbd', lw);
    let yy = y - taban; const katH = (hh * 0.86) / n;
    for (let i = 0; i < n; i++) {
      const w = bw * (n === 1 ? 0.42 : 0.4 - i * 0.24 / n), wh = katH * (n === 1 ? 0.55 : 0.6), rw = w * 1.55 + 3 * k, rh = katH * 0.36;
      shape([x - w, yy, x + w, yy, x + w, yy - wh, x - w, yy - wh], duvar, lw);
      g.fillStyle = 'rgba(40,20,10,0.35)'; for (let j = -2; j <= 2; j++) g.fillRect(x + j * w * 0.36 - 1.2 * k, yy - wh * 0.85, 2.4 * k, wh * 0.7);
      const ry = yy - wh; g.beginPath(); g.moveTo(x - rw, ry - rh * 0.55); g.quadraticCurveTo(x - rw * 0.7, ry + rh * 0.1, x - w * 0.9, ry); g.lineTo(x + w * 0.9, ry);
      g.quadraticCurveTo(x + rw * 0.7, ry + rh * 0.1, x + rw, ry - rh * 0.55); g.quadraticCurveTo(x + rw * 0.5, ry - rh * 0.6, x + w * 0.5, ry - rh); g.lineTo(x - w * 0.5, ry - rh);
      g.quadraticCurveTo(x - rw * 0.5, ry - rh * 0.6, x - rw, ry - rh * 0.55); g.closePath(); g.fillStyle = cati; g.fill(); g.strokeStyle = OUT; g.lineWidth = lw; g.stroke();
      yy = ry - rh;
    }
    L(x, yy, x, yy - katH * 0.7, Math.max(1, 1.2 * k), '#8a7a4a'); for (let i = 1; i <= 3; i++) L(x - 2 * k, yy - katH * 0.18 * i, x + 2 * k, yy - katH * 0.18 * i, Math.max(1, 0.8 * k), '#8a7a4a');
    g.restore(); if (p < 1) crane(x + bw * 0.6, y, hh * 0.8);
  }
  function drawStupa(m, p, x, y, k) { // Budist stupa; teras > 0 ise Borobudur gibi basamaklı
    const bw = m.b * k, hh = m.h * k, lw = Math.max(1.1, 1.3 * u), col = m.renk || '#ece4d2', ter = m.teras || 0;
    g.save(); clipUp(x, y, bw + hh, hh * Math.max(0.12, p) + 6);
    let yy = y, w = bw / 2;
    const th = ter ? hh * 0.45 / ter : hh * 0.12;
    for (let i = 0; i < Math.max(1, ter); i++) { shape([x - w, yy, x + w, yy, x + w * 0.94, yy - th, x - w * 0.94, yy - th], i % 2 ? '#a69a86' : '#b8ad98', lw); yy -= th; w *= ter ? 0.84 : 0.8; }
    const r = Math.min(w * 0.95, (hh - (y - yy)) * 0.55);
    g.beginPath(); g.moveTo(x - r, yy); g.arc(x, yy, r, Math.PI, 0); g.closePath(); g.fillStyle = col; g.fill(); g.strokeStyle = OUT; g.lineWidth = lw; g.stroke();
    const ty = yy - r; shape([x - r * 0.22, ty + 1, x + r * 0.22, ty + 1, x + r * 0.22, ty - r * 0.2, x - r * 0.22, ty - r * 0.2], '#d8cdb8', lw);
    for (let i = 0; i < 4; i++) { const cw = r * (0.3 - i * 0.06); shape([x - cw, ty - r * (0.24 + i * 0.13), x + cw, ty - r * (0.24 + i * 0.13), x + cw * 0.8, ty - r * (0.31 + i * 0.13), x - cw * 0.8, ty - r * (0.31 + i * 0.13)], m.altin ? '#e0b84a' : '#cfc3ab', Math.max(0.8, lw * 0.7)); }
    if (m.altin) { g.fillStyle = 'rgba(230,190,70,0.55)'; g.beginPath(); g.moveTo(x - r, yy); g.arc(x, yy, r, Math.PI, 0); g.fill(); }
    g.restore(); if (p < 1) crane(x + bw * 0.55, y, hh * 0.8);
  }
  function drawZiggurat(m, p, x, y, k) { // Mezopotamya: kerpiç basamaklı tapınak, ortada merdiven
    const bw = m.b * k, hh = m.h * k, lw = Math.max(1.2, 1.4 * u), n = m.kat || 3;
    g.save(); clipUp(x, y, bw + hh, hh * Math.max(0.15, p) + 6);
    let yy = y; const kh = hh * 0.78 / n;
    for (let i = 0; i < n; i++) { const w = bw / 2 * (1 - i * 0.26); shape([x - w, yy, x + w, yy, x + w * 0.95, yy - kh, x - w * 0.95, yy - kh], i % 2 ? '#c49a62' : '#b88a52', lw);
      g.strokeStyle = 'rgba(90,60,30,0.35)'; g.lineWidth = 1; for (let j = 1; j < 6; j++) { g.beginPath(); g.moveTo(x - w * 0.95, yy - kh * j / 6); g.lineTo(x + w * 0.95, yy - kh * j / 6); g.stroke(); } yy -= kh; }
    shape([x - bw * 0.07, y, x + bw * 0.07, y, x + bw * 0.04, y - hh * 0.78, x - bw * 0.04, y - hh * 0.78], '#d8b47c', lw);
    const tw = bw * 0.12; shape([x - tw, yy, x + tw, yy, x + tw, yy - hh * 0.16, x - tw, yy - hh * 0.16], m.renk || '#3a6ab0', lw);
    g.restore(); if (p < 1) crane(x + bw * 0.55, y, hh * 0.9);
  }
  function drawSahel(m, p, x, y, k) { // Sahel kerpiç camisi (Cenne, Timbuktu): payandalar, dışarı taşan hurma kirişleri
    const bw = m.b * k, hh = m.h * k, lw = Math.max(1.2, 1.4 * u), col = m.renk || '#b98250', koyu = '#9a6a3e';
    g.save(); clipUp(x, y, bw + hh, hh * Math.max(0.15, p) + 6);
    const wh = hh * 0.55; shape([x - bw / 2, y, x + bw / 2, y, x + bw / 2, y - wh, x - bw / 2, y - wh], col, lw);
    const kule = (cx, w, h) => { g.beginPath(); g.moveTo(cx - w, y); g.lineTo(cx - w * 0.75, y - h); g.quadraticCurveTo(cx, y - h - w * 1.1, cx + w * 0.75, y - h); g.lineTo(cx + w, y); g.closePath(); g.fillStyle = col; g.fill(); g.strokeStyle = OUT; g.lineWidth = lw; g.stroke();
      g.strokeStyle = '#5a3a20'; g.lineWidth = Math.max(1, 0.9 * k); for (let j = 1; j < 6; j++) { const yy = y - h * j / 6; g.beginPath(); g.moveTo(cx - w * 1.15, yy); g.lineTo(cx - w * 0.6, yy); g.moveTo(cx + w * 0.6, yy); g.lineTo(cx + w * 1.15, yy); g.stroke(); } };
    const nk = Math.max(3, m.n || 5); for (let i = 0; i < nk; i++) { const cx = x - bw / 2 + (i + 0.5) * bw / nk; kule(cx, Math.max(2 * k, bw / nk * 0.16), wh * 1.1); }
    kule(x - bw * 0.3, bw * 0.06, hh * 0.92); kule(x, bw * 0.07, hh); kule(x + bw * 0.3, bw * 0.06, hh * 0.92);
    g.fillStyle = koyu; g.fillRect(x - bw / 2, y - 3 * k, bw, 3 * k);
    g.restore(); if (p < 1) crane(x + bw * 0.55, y, hh * 0.9);
  }
  function drawPrang(m, p, x, y, k) { // Khmer tapınağı (Angkor): galeri ve lotus tomurcuğu kuleler
    const bw = m.b * k, hh = m.h * k, lw = Math.max(1.1, 1.3 * u), col = m.renk || '#a79c86';
    g.save(); clipUp(x, y, bw + hh, hh * Math.max(0.15, p) + 6);
    shape([x - bw / 2, y, x + bw / 2, y, x + bw * 0.47, y - hh * 0.14, x - bw * 0.47, y - hh * 0.14], '#8f8572', lw);
    shape([x - bw * 0.4, y - hh * 0.14, x + bw * 0.4, y - hh * 0.14, x + bw * 0.38, y - hh * 0.3, x - bw * 0.38, y - hh * 0.3], col, lw);
    const kule = (cx, w, h0, h) => { g.beginPath(); g.moveTo(cx - w, h0); g.bezierCurveTo(cx - w * 1.1, h0 - h * 0.6, cx - w * 0.35, h0 - h * 0.9, cx, h0 - h); g.bezierCurveTo(cx + w * 0.35, h0 - h * 0.9, cx + w * 1.1, h0 - h * 0.6, cx + w, h0); g.closePath(); g.fillStyle = col; g.fill(); g.strokeStyle = OUT; g.lineWidth = lw; g.stroke();
      g.strokeStyle = 'rgba(60,50,35,0.45)'; g.lineWidth = 1; for (let j = 1; j < 6; j++) { const yy = h0 - h * j / 6.5, ww = w * (1 - j * 0.13); g.beginPath(); g.moveTo(cx - ww, yy); g.lineTo(cx + ww, yy); g.stroke(); } };
    const b0 = y - hh * 0.3; kule(x - bw * 0.3, bw * 0.06, b0, hh * 0.45); kule(x + bw * 0.3, bw * 0.06, b0, hh * 0.45); kule(x - bw * 0.15, bw * 0.07, b0, hh * 0.55); kule(x + bw * 0.15, bw * 0.07, b0, hh * 0.55); kule(x, bw * 0.09, b0, hh * 0.7);
    g.restore(); if (p < 1) crane(x + bw * 0.55, y, hh * 0.9);
  }
  function drawSur(m, p, x, y, k) { // Çin Seddi gibi tepeleri aşan sur ve gözetleme kuleleri
    const bw = m.b * k, hh = m.h * k, lw = Math.max(1.1, 1.3 * u), col = m.renk || '#a99c84', n = 28;
    const yer = i => y - hh * 0.55 * Math.sin(i / n * Math.PI) * (0.6 + 0.4 * Math.sin(i * 0.7 + m.wx)), wy = 9 * k;
    const son = Math.max(1, Math.round(n * Math.min(1, p * 1.05)));
    g.beginPath(); g.moveTo(x - bw / 2, y); for (let i = 0; i <= son; i++) g.lineTo(x - bw / 2 + bw * i / n, yer(i)); for (let i = son; i >= 0; i--) g.lineTo(x - bw / 2 + bw * i / n, yer(i) - wy); g.closePath();
    g.fillStyle = col; g.fill(); g.strokeStyle = OUT; g.lineWidth = lw; g.stroke();
    g.fillStyle = col; for (let i = 0; i <= son; i++) { const bx = x - bw / 2 + bw * i / n; g.fillRect(bx - 1.3 * k, yer(i) - wy - 2.5 * k, 2.6 * k, 2.5 * k); }
    for (let i = 3; i <= son; i += 6) { const bx = x - bw / 2 + bw * i / n, by = yer(i) - wy; shape([bx - 5 * k, by + wy, bx + 5 * k, by + wy, bx + 5 * k, by - 9 * k, bx - 5 * k, by - 9 * k], '#b8ab92', lw); g.fillStyle = 'rgba(40,25,10,0.5)'; g.fillRect(bx - 1.5 * k, by - 6 * k, 3 * k, 4 * k); }
  }
  function drawHeykel(m, p, x, y, k) { // ayakta heykeller: stil moai | isa | ozgurluk
    const hh = m.h * k, bw = m.b * k, lw = Math.max(1.1, 1.3 * u);
    g.save(); clipUp(x, y, bw + hh, hh * Math.max(0.1, p) + 6);
    if (m.stil === 'moai') {
      const n = m.n || 5; shape([x - bw / 2, y, x + bw / 2, y, x + bw / 2 - 3 * k, y - hh * 0.12, x - bw / 2 + 3 * k, y - hh * 0.12], '#8a8478', lw);
      for (let i = 0; i < n; i++) { const cx = x - bw / 2 + (i + 0.5) * bw / n, w = Math.min(bw / n * 0.36, hh * 0.18), b0 = y - hh * 0.12;
        shape([cx - w, b0, cx + w, b0, cx + w * 0.95, b0 - hh * 0.45, cx - w * 0.95, b0 - hh * 0.45], '#6e6a62', lw);
        shape([cx - w * 0.95, b0 - hh * 0.45, cx + w * 0.95, b0 - hh * 0.45, cx + w * 0.9, b0 - hh * 0.88, cx + w * 0.2, b0 - hh * 0.92, cx - w * 0.9, b0 - hh * 0.88], '#7a756c', lw);
        shape([cx + w * 0.2, b0 - hh * 0.8, cx + w * 1.1, b0 - hh * 0.6, cx + w * 0.6, b0 - hh * 0.55], '#5e5a52', Math.max(0.8, lw * 0.6));
        g.fillStyle = '#3a342c'; g.fillRect(cx - w * 0.5, b0 - hh * 0.75, w * 0.8, 1.6 * k);
        if (m.pukao) circ(cx, b0 - hh * 0.95, w * 0.55, '#a8503a', lw); }
    } else {
      const ped = hh * (m.stil === 'ozgurluk' ? 0.45 : 0.2), col = m.stil === 'ozgurluk' ? '#6fa58f' : '#e8e4dc', b0 = y - ped, fh = hh - ped, w = Math.max(3 * k, bw * 0.18);
      shape([x - bw / 2, y, x + bw / 2, y, x + bw * 0.32, b0, x - bw * 0.32, b0], m.stil === 'ozgurluk' ? '#c8b89a' : '#b8b0a2', lw);
      shape([x - w, b0, x + w, b0, x + w * 0.55, b0 - fh * 0.78, x - w * 0.55, b0 - fh * 0.78], col, lw);
      if (m.stil === 'isa') { shape([x - fh * 0.4, b0 - fh * 0.74, x + fh * 0.4, b0 - fh * 0.74, x + fh * 0.4, b0 - fh * 0.68, x - fh * 0.4, b0 - fh * 0.68], col, lw); circ(x, b0 - fh * 0.86, w * 0.45, col, lw); }
      else { circ(x, b0 - fh * 0.85, w * 0.42, col, lw); L(x + w * 0.4, b0 - fh * 0.7, x + w * 0.9, b0 - fh * 1.05, Math.max(1.5, w * 0.3), col);
        g.fillStyle = '#ffb347'; g.beginPath(); g.ellipse(x + w * 0.95, b0 - fh * 1.1, w * 0.22, w * 0.4, 0, 0, 7); g.fill();
        g.strokeStyle = col; g.lineWidth = Math.max(1, k); for (let i = -2; i <= 2; i++) { g.beginPath(); g.moveTo(x, b0 - fh * 0.9); g.lineTo(x + i * w * 0.35, b0 - fh * 1.02); g.stroke(); } }
    }
    g.restore(); if (p < 1) crane(x + bw * 0.6, y, hh * 0.9);
  }
  function drawOpera(m, p, x, y, k) { // Sidney Opera Binası: beyaz yelken kabukları
    const bw = m.b * k, hh = m.h * k, lw = Math.max(1.1, 1.3 * u);
    g.save(); clipUp(x, y, bw + hh, hh * Math.max(0.1, p) + 6);
    shape([x - bw / 2, y, x + bw / 2, y, x + bw / 2, y - hh * 0.18, x - bw / 2, y - hh * 0.18], '#c8a88a', lw);
    const yel = (cx, w, h, yon) => { g.beginPath(); g.moveTo(cx - w * yon, y - hh * 0.18); g.quadraticCurveTo(cx - w * 0.2 * yon, y - hh * 0.18 - h * 1.1, cx + w * yon, y - hh * 0.18 - h); g.lineTo(cx + w * 0.6 * yon, y - hh * 0.18); g.closePath(); g.fillStyle = '#f6f4ee'; g.fill(); g.strokeStyle = OUT; g.lineWidth = lw; g.stroke(); };
    yel(x - bw * 0.3, bw * 0.12, hh * 0.55, 1); yel(x - bw * 0.15, bw * 0.13, hh * 0.75, 1); yel(x, bw * 0.13, hh * 0.82, 1); yel(x + bw * 0.18, bw * 0.12, hh * 0.6, 1); yel(x + bw * 0.32, bw * 0.1, hh * 0.45, 1);
    g.restore(); if (p < 1) crane(x + bw * 0.55, y, hh * 0.9);
  }
  function structTop(m, p, y, k) {
    switch (m.type) {
      case 'heykel': case 'opera': return y - m.h * k * Math.max(0.2, p);
      case 'pagoda': case 'stupa': case 'ziggurat': case 'sahel': case 'prang': return y - m.h * k * Math.max(0.2, p);
      case 'sur': return y - m.h * k * 0.75;
      case 'sphinx': return y - 30 * k;
      case 'suntemple': return y - 56 * k;
      case 'temple': return y - m.h * k * (p >= 1 ? 1.3 : 1);
      case 'terrace': return y - m.h * k * Math.min(1, p);
      case 'obelisk': return y - m.h * k * p;
      case 'colossus': case 'rocktemple': case 'lighthouse': return y - m.h * k * Math.max(0.2, p) * (m.type === 'rocktemple' ? 1.3 : 1);
      case 'city': return y - 30 * u;
      case 'valley': return y - m.h * k * 0.7;
      case 'mosque': case 'church': case 'tower': case 'museum': case 'modcity': return y - m.h * k * Math.max(0.2, p);
      case 'citadel': return y - m.h * k * 0.75;
      case 'pillars': case 'bridge': return y - m.h * k * Math.max(0.3, p);
      case 'mound': case 'theater': return y - m.h * k * Math.max(0.3, p) * (m.type === 'theater' ? 1.1 : 0.8);
      case 'greek': return y - m.h * k * (0.75 + 0.25 * p);
      case 'nemrut': return y - m.h * k;
      case 'gothic': case 'arena': return y - m.h * k * Math.max(0.3, p);
      case 'dam': return y - m.h * k * 1.6;
      default: { const zb = m.type === 'mastaba' ? m.h * p : m.h * (1 - Math.cbrt(1 - Math.min(1, p / 0.88))); return y - Math.max(zb, 4) * k; }
    }
  }
  function drawStruct(m, p, x, y, k) {
    if (m.donusum && st.Y > m.donusum) return drawChurch({ ...m, type: 'church', buyukKubbe: true, kubbe: '#9aa0a6' }, p, x, y, k); // camiye dönüşmeden önce kilise
    switch (m.type) {
      case 'sphinx': return drawSphinx(m, p, x, y, k);
      case 'suntemple': return drawSunTemple(m, p, x, y, k);
      case 'temple': return drawTemple(m, p, x, y, k);
      case 'terrace': return drawTerrace(m, p, x, y, k);
      case 'obelisk': return drawObeliskAt(x, y, k, m.h, p);
      case 'colossus': return drawColossus(m, p, x, y, k);
      case 'rocktemple': return drawRockTemple(m, p, x, y, k);
      case 'lighthouse': return drawLighthouse(m, p, x, y, k);
      case 'city': return drawCity(m, p, x, y, k);
      case 'valley': return drawValley(m, p, x, y, k);
      case 'mosque': return drawMosque(m, p, x, y, k);
      case 'church': return drawChurch(m, p, x, y, k);
      case 'citadel': return drawCitadel(m, p, x, y, k);
      case 'dam': return drawDam(m, p, x, y, k);
      case 'museum': return drawMuseum(m, p, x, y, k);
      case 'tower': return drawTower(m, p, x, y, k);
      case 'modcity': return drawModCity(m, p, x, y, k);
      case 'pillars': return drawPillars(m, p, x, y, k);
      case 'mound': return drawMound(m, p, x, y, k);
      case 'greek': return drawGreek(m, p, x, y, k);
      case 'theater': return drawTheater(m, p, x, y, k);
      case 'bridge': return drawBridge(m, p, x, y, k);
      case 'nemrut': return drawNemrut(m, p, x, y, k);
      case 'gothic': return drawGothic(m, p, x, y, k);
      case 'arena': return drawArena(m, p, x, y, k);
      case 'pagoda': return drawPagoda(m, p, x, y, k);
      case 'stupa': return drawStupa(m, p, x, y, k);
      case 'ziggurat': return drawZiggurat(m, p, x, y, k);
      case 'sahel': return drawSahel(m, p, x, y, k);
      case 'prang': return drawPrang(m, p, x, y, k);
      case 'sur': return drawSur(m, p, x, y, k);
      case 'heykel': return drawHeykel(m, p, x, y, k);
      case 'opera': return drawOpera(m, p, x, y, k);
      default: return drawPyramid(m, p, x, y, k);
    }
  }
  function drawMon(m, p, x, y, k) {
    const ruined = m.ruin && st.Y <= m.ruin;
    if (ruined) g.globalAlpha = 0.4;
    drawStruct(m, p, x, y, k);
    g.globalAlpha = 1;
    // müzeleştirilmiş antik yapı: önünde bilet gişesi ve tabela
    if (m.muze && st.Y <= m.muze && !ruined) {
      const half = Math.max(m.b || 30, 30) * k * 0.55, sx = x + half, sy = y + 2 * u;
      shape([sx - 9 * u, sy, sx + 9 * u, sy, sx + 9 * u, sy - 10 * u, sx - 9 * u, sy - 10 * u], '#f2ede0', 1.2 * u);
      shape([sx - 11 * u, sy - 10 * u, sx + 11 * u, sy - 10 * u, sx + 9 * u, sy - 14 * u, sx - 9 * u, sy - 14 * u], '#2e6a9a', 1 * u);
      g.fillStyle = '#2e6a9a'; g.font = `800 ${Math.round(6 * u + 3)}px system-ui`; g.textAlign = 'center'; g.fillText('MÜZE', sx, sy - 16 * u);
    }
    const top = structTop(m, p, y, k), half = Math.max(m.b || 30, (m.h || 30) * 0.3) / 2 * k;
    hits.push({ id: m.gen ? m.genId : m.id, ad: m.gen ? m.genAd : m.ad + (ruined ? ' (harabe)' : ''), x0: x - half, x1: x + half, y0: top - 4, y1: y + 6 });
    return top;
  }

  const skyHits = { sun: [0, 0, 0], moon: [0, 0, 0] };
  let MONS = [], NEAR = [];
  function prepare(place) {
    P = place;
    MONS = P.monuments.filter(m => m.bank !== 'near');
    NEAR = P.monuments.filter(m => m.bank === 'near');
    const f = P.mastabaField;
    if (f) for (let i = 0; i < f.n; i++) {
      const a = hash(i * 9.7 + 1), b = hash(i * 3.3 + 2);
      const start = Math.round(lerp(f.from, f.to, (i + a * 0.8) / f.n));
      MONS.push({ id: 'mastaba' + i, gen: true, genId: f.id || 'mastabalar', genAd: f.ad || 'Soyluların mastaba mezarları', ad: 'Soylu mastabası', wx: lerp(f.wx0, f.wx1, hash(i * 5.1 + 3)), dz: -0.12 - b * 0.35, type: 'mastaba', b: 18 + a * 12, h: 5 + b * 3, start, end: start - 3 });
    }
    MONS.sort((a, b) => (b.dz || 0) - (a.dz || 0));
  }

  function monumentAt(m) {
    const dz = m.dz || 0, k = s * (1 - dz * 0.12);
    return { k, x: W / 2 + (m.wx - camX) * s, y: gY - dz * H * 0.035 - (m.lift || 0) * k };
  }

  // Kameranın odaklanacağı anıt: inşaatı süren en büyük yapı, yoksa en son biten
  function focus(Y) {
    let best = null, bv = -1;
    for (const m of P.monuments) {
      const p = progress(m, Y);
      const active = p >= 0 && ((m.stop && Y > m.stop) || (!m.stop && p < 1));
      if (active && !m.minor) { const v = vol(m); if (v > bv) { bv = v; best = m; } }
    }
    if (best) return best;
    let rec = null;
    for (const m of P.monuments) if (!m.minor && vol(m) >= 5e4 && Y <= m.start && (!rec || m.start < rec.start)) rec = m;
    return rec || P.monuments[0];
  }
  function activity(Y) {
    let v = 0;
    for (const m of MONS) {
      const p = progress(m, Y);
      if (p >= 0 && ((m.stop && Y > m.stop) || (!m.stop && p < 1))) v += vol(m);
    }
    return clamp(v / 2.2e6);
  }

  // ---------- ajanlar (yakın kıyı ve nehir) ----------
  const agents = [];
  function initAgents() {
    agents.length = 0;
    const add = (o) => agents.push(Object.assign({ x: (Math.random() - 0.5) * 3000, ph: Math.random() * 6.28, seed: Math.random() * 1000 }, o));
    const kinds = [['man', 'walk'], ['woman', 'jar'], ['man', 'hoe'], ['child', 'walk'], ['woman', 'walk'], ['man', 'walk'], ['woman', 'jar']];
    for (let i = 0; i < 16; i++) {
      const [kind, act] = kinds[i % kinds.length], dir = Math.random() < 0.5 ? -1 : 1;
      add({ layer: 'road', t: 'person', kind, act, dir, v: (16 + Math.random() * 10) * dir, fy: 0.865 + Math.random() * 0.085 });
    }
    for (let i = 0; i < 3; i++) { const dir = i % 2 ? 1 : -1; add({ layer: 'road', t: 'donkey', dir, v: 13 * dir, fy: 0.88 + Math.random() * 0.06, load: 'sack' }); }
    for (let i = 0; i < 2; i++) add({ layer: 'road', t: 'cattle', dir: -1, v: -9, fy: 0.9 + i * 0.03 });
    for (let i = 0; i < 6; i++) add({ layer: 'road', t: 'sledge', slot: i, x: i * 977, dir: 1, v: 9, fy: 0.875 + (i % 3) * 0.03 });
    add({ layer: 'road', t: 'scribe', not: 'katipYok', dir: 1, v: 0, fy: 0.86 });
    // çağa göre: savaş arabası (Yeni Krallık'tan), şaduf, deve kervanı
    for (let i = 0; i < 2; i++) { const dir = i ? -1 : 1; add({ layer: 'road', t: 'chariot', need: 'araba', dir, v: 34 * dir, fy: 0.885 + i * 0.04 }); }
    for (let i = 0; i < 2; i++) add({ layer: 'road', t: 'camel', need: 'deve', dir: -1, v: -11, fy: 0.9 + i * 0.03 });
    for (let i = 0; i < 4; i++) add({ layer: 'field', t: 'shaduf', need: 'saduf', dir: 1, v: 0, x: i * 520 + 100, fy: 0.775 });
    // tarlalar (mevsime göre)
    for (let i = 0; i < 3; i++) add({ layer: 'field', t: 'plough', season: 'peret', dir: 1, v: 5, fy: 0.792 + i * 0.008 });
    for (let i = 0; i < 4; i++) add({ layer: 'field', t: 'person', kind: 'man', act: 'sow', season: 'peret', dir: 1, move: true, v: 4, fy: 0.8 + (i % 2) * 0.01 });
    for (let i = 0; i < 8; i++) add({ layer: 'field', t: 'person', kind: i % 3 ? 'man' : 'woman', act: 'sickle', lean: 0.7, season: 'semu', dir: 1, v: 0.6, fy: 0.792 + (i % 3) * 0.008 });
    for (let i = 0; i < 2; i++) add({ layer: 'road', t: 'donkey', season: 'semu', dir: 1, v: 12, fy: 0.9, load: 'sheaf' });
    for (let i = 0; i < 4; i++) add({ layer: 'field', t: 'boat', type: 'skiff', season: 'ahet', dir: i % 2 ? 1 : -1, v: (i % 2 ? 4 : -4), fy: 0.795 + (i % 2) * 0.01 });
    // nehir
    for (let i = 0; i < 3; i++) add({ layer: 'river', t: 'boat', type: 'sail', dir: -1, v: -14, fy: 0.675 + i * 0.02 });
    for (let i = 0; i < 2; i++) add({ layer: 'river', t: 'boat', type: 'row', dir: 1, v: 12, fy: 0.7 + i * 0.02 });
    for (let i = 0; i < 4; i++) add({ layer: 'river', t: 'boat', type: 'cargo', slot: i, dir: 1, v: 10, fy: 0.68 + (i % 2) * 0.03 + i * 0.004 });
    for (let i = 0; i < 3; i++) add({ layer: 'river', t: 'boat', type: 'skiff', dir: i % 2 ? 1 : -1, v: i % 2 ? 3 : -3, fy: 0.73 });
    // MS dönemleri: arabalar, otobüsler, turistler, buharlı gemiler, Nil kruvaziyerleri, uçaklar
    for (let i = 0; i < 5; i++) { const dir = i % 2 ? 1 : -1; add({ layer: 'road', t: 'car', need: 'oto', kind: i === 2 ? 'otobus' : i % 2 ? 'taksi' : 'araba', dir, v: (40 + i * 6) * dir, fy: 0.9 + (i % 3) * 0.025 }); }
    for (let i = 0; i < 3; i++) add({ layer: 'road', t: 'tourists', need: 'turist', dir: i % 2 ? 1 : -1, v: (i % 2 ? 7 : -7), fy: 0.87 + i * 0.03 });
    for (let i = 0; i < 2; i++) add({ layer: 'river', t: 'steamer', need: 'buhar', kind: 'buhar', dir: i ? 1 : -1, v: i ? 16 : -16, fy: 0.69 + i * 0.03 });
    for (let i = 0; i < 2; i++) add({ layer: 'river', t: 'steamer', need: 'kruvaziyer', kind: 'kruvaziyer', dir: i ? -1 : 1, v: i ? -9 : 9, fy: 0.685 + i * 0.035 });
    for (let i = 0; i < 2; i++) agents.push({ layer: 'plane', x: i * 900, y: 0.1 + i * 0.07, v: 60 + i * 15 });
    // kuşlar
    for (let i = 0; i < 7; i++) agents.push({ layer: 'sky', x: Math.random() * 2000, y: 0.08 + Math.random() * 0.22, v: 20 + Math.random() * 14, ph: Math.random() * 6 });
  }
  const LAYERF = { road: 1.7, field: 1.55, river: 1.3 };

  function agentVisible(a) {
    const Y = st.Y;
    if (a.season && a.season !== st.season) return false;
    // Evrensel çağ kuralları: modern şehirlerde inek, eşek, karasaban, antik kızak ve antik kayık çıkmaz
    if (a.t === 'sledge') return Y > -500 && !(P.sahne && P.sahne.kizak === false) && a.slot < Math.round(st.act * 6);
    if (a.t === 'scribe') return Y > -500 && !(P.sahne && P.sahne.katipYok);
    if (a.t === 'cattle') return Y > -1910;
    if (a.t === 'donkey') return Y > -1935;
    if (a.t === 'plough') return Y > -1925;
    if (a.layer === 'field') return Y > -1935;
    if (a.t === 'boat') {
      if (a.type === 'cargo') return Y > -1900 && a.slot < Math.round(st.act * 4.4);
      if (a.type === 'sail') return Y > -1950;
      return Y > -1900;
    }
    if (a.t === 'car') {
      const otoY = (P.sahne && typeof P.sahne.oto === 'number') ? P.sahne.oto : -1920;
      return Y <= otoY;
    }
    if (a.t === 'tourists') {
      const turY = (P.sahne && typeof P.sahne.turist === 'number') ? P.sahne.turist : -1960;
      return Y <= turY;
    }
    if (a.t === 'steamer') {
      if (a.kind === 'buhar') { const by = (P.sahne && typeof P.sahne.buhar === 'number') ? P.sahne.buhar : -1850; return Y <= by && Y >= -1965; }
      const ky = (P.sahne && typeof P.sahne.kruvaziyer === 'number') ? P.sahne.kruvaziyer : -1955;
      return Y <= ky;
    }
    if (a.t === 'camel' && Y <= -1920) return false;
    if (a.t === 'shaduf' && Y <= -1920) return false;
    if (a.need) { const f = P.sahne && P.sahne[a.need]; if (!f || (typeof f === 'number' && Y > f) || (Array.isArray(f) && (Y > f[0] || Y < f[1]))) return false; }
    if (a.not) { const f = P.sahne && P.sahne[a.not]; if (f && (f === true || (typeof f === 'number' && Y <= f))) return false; }
    return true;
  }

  function drawAgent(a, x, y) {
    if (a.t === 'steamer') return steamer(x, y, kRiver(y) * 0.9, a.dir, a.kind);
    if (a.t === 'car') return car(x, y, kOf(y) * 1.05, a.dir, a.seed, a.kind);
    if (a.t === 'tourists') { const k = kOf(y); for (let i = 0; i < 4; i++) person(x + i * 22 * k * a.dir, y + (i % 2) * 2 * k, k, { kind: i % 2 ? 'woman' : 'man', act: i === 1 ? 'photo' : 'walk', dir: a.dir, ph: a.ph + i * 1.7, seed: a.seed + i * 19, move: true, giyim: 'modern', sapka: i % 2 ? null : ['#f2e6c8', '#2e6a9a'][i / 2 | 0] }); person(x - 30 * k * a.dir, y, k, { kind: 'man', act: st.Y <= -1940 ? 'walk' : 'staff', dir: a.dir, ph: a.ph, seed: a.seed + 91, move: true, giyim: st.Y <= -1940 ? 'modern' : 'cubbe' }); return; }
    if (a.layer === 'river' || a.t === 'boat') return boat(x, y, a.k || (a.layer === 'river' ? kRiver(y) : kOf(y) * 0.8), { dir: a.dir, type: a.type, ph: a.ph });
    const k = a.k || kOf(y);
    if (a.t === 'person') {
      const act = st.Y <= -1920 && (a.act === 'jar' || a.act === 'hoe') ? 'walk' : a.act;
      return person(x, y, k, { kind: a.kind, act, dir: a.dir, ph: a.ph, seed: a.seed, move: a.v !== 0 && act !== 'sickle', lean: a.lean });
    }
    if (a.t === 'donkey') { donkey(x, y, k * 1.1, a.dir, a.ph, 1, a.load); person(x - a.dir * 30 * k, y + 2 * k, k, { kind: 'man', act: 'staff', dir: a.dir, ph: a.ph + 1, seed: a.seed, move: true }); return; }
    if (a.t === 'cattle') {
      cow(x, y, k * 1.1, a.dir, a.ph, 1); cow(x + 44 * k, y - 3 * k, k * 1.05, a.dir, a.ph + 1.5, 1, '#e8dccb', '#5a3a22');
      person(x + 84 * k, y + 2 * k, k, { kind: 'child', act: 'walk', dir: a.dir, ph: a.ph, seed: a.seed, move: true }); return;
    }
    if (a.t === 'plough') {
      cow(x, y - 2 * k, k * 0.95, 1, a.ph, 1, '#b07a48', '#6d4524'); cow(x - 4 * k, y + 1 * k, k, 1, a.ph + 1, 1, '#c99061', '#7a4a26');
      g.strokeStyle = '#7a5230'; g.lineWidth = 2 * k; g.beginPath(); g.moveTo(x - 10 * k, y - 16 * k); g.lineTo(x - 32 * k, y - 2 * k); g.lineTo(x - 40 * k, y - 22 * k); g.stroke();
      person(x - 46 * k, y, k, { kind: 'man', act: 'plough', dir: 1, ph: a.ph, seed: a.seed, move: true, lean: 0.2 }); return;
    }
    if (a.t === 'chariot') return chariot(x, y, k, a.dir, a.ph);
    if (a.t === 'camel') { camel(x, y, k, a.dir, a.ph); camel(x - a.dir * 52 * k, y + 2 * k, k, a.dir, a.ph + 1.3); person(x + a.dir * 40 * k, y + 2 * k, k, { kind: 'man', act: 'staff', longKilt: true, dir: a.dir, ph: a.ph, seed: a.seed, move: true }); return; }
    if (a.t === 'shaduf') return shaduf(x, y, k, a.ph);
    if (a.t === 'scribe') {
      g.save(); g.translate(x, y); g.scale(k, k);
      ell(0, -8, 9, 8, 0, LINEN); circ(2, -24, 6, SKIN, 1.3);
      g.fillStyle = HAIR; g.beginPath(); g.arc(1.6, -24.8, 6.5, Math.PI * 0.95, Math.PI * 1.97); g.closePath(); g.fill();
      shape([4, -12, 18, -14, 18, -10, 4, -8], '#efe1b0', 1); L(2, -16, 12, -12, 3, SKIN);
      g.restore(); return;
    }
    if (a.t === 'sledge') {
      // kızak + taş blok, önde çekenler, su döken, yanında ustabaşı
      g.save(); g.translate(x, y); g.scale(k, k); g.lineJoin = 'round';
      shape([-30, -4, 26, -4, 32, -10, 30, -12, 26, -8, -30, -8], '#8a5a33', 1.4);
      shape([-26, -8, 20, -8, 20, -34, -26, -34], '#efe3c4', 1.6);
      g.strokeStyle = 'rgba(120,90,50,0.3)'; g.lineWidth = 1; g.beginPath(); g.moveTo(-10, -34); g.lineTo(-12, -8); g.stroke();
      g.strokeStyle = '#a07a46'; g.lineWidth = 1.6; g.beginPath(); g.moveTo(30, -11); g.lineTo(160, -39); g.stroke();
      g.restore();
      person(x + 14 * k, y - 34 * k, k * 0.9, { kind: 'man', act: 'pour', dir: 1, seed: a.seed + 3 });
      for (let i = 0; i < 5; i++) person(x + (54 + i * 25) * k, y, k, { kind: 'man', act: 'pull', dir: 1, ph: a.ph + i * 0.9, seed: a.seed + i * 13 + 7, move: true, lean: 0.42 });
      person(x - 44 * k, y + 3 * k, k, { kind: 'man', act: 'staff', longKilt: true, collar: true, dir: 1, ph: a.ph, seed: a.seed + 71, move: true });
      return;
    }
  }

  // ---------- ana çizim ----------
  function noise(x) { return Math.sin(x * 0.0011) * 0.5 + Math.sin(x * 0.0037 + 1.3) * 0.3 + Math.sin(x * 0.0093 + 2.1) * 0.2; }
  function tiles(f, spacing, seed, fn) {
    const camL = camX * s * f, i0 = Math.floor((camL - W / 2 - 300 * u) / spacing), i1 = Math.ceil((camL + W / 2 + 300 * u) / spacing);
    for (let i = i0; i <= i1; i++) fn(i, W / 2 + i * spacing - camL, hash(i * 7.13 + seed));
  }
  const atWorld = (wx, f) => W / 2 + (wx - camX) * s * f;

  function draw(ctx, w, h, dpr, Y, dt, cam) {
    g = ctx; W = w; H = h; u = H / 720; s = 0.38 * H / 146.6; gY = H * 0.6; T += dt; camX = cam; st.Y = Y;
    { const gv = P.sahne && P.sahne.giyim; let gy = !gv ? (Y <= -1920 ? 'modern' : Y <= -1800 ? 'karma' : Y <= -500 ? 'cubbe' : 'antik') : typeof gv === 'string' ? gv : (gv.filter(([y0]) => Y <= y0).pop() || gv[0])[1]; if (Y <= -1950 && gy === 'antik') gy = 'modern'; st.giyim = gy; }
    // mevsim geçişi
    const tg = SEASON[st.season], e = 1 - Math.exp(-dt * 2.5);
    st.flood = lerp(st.flood, tg.flood, e); st.field = st.field.map((v, i) => lerp(v, tg.field[i], e));
    st.act = activity(Y);
    g.setTransform(dpr, 0, 0, dpr, 0, 0);
    g.lineCap = 'round'; g.lineJoin = 'round';

    // gökyüzü (güneş/ay tanrısı rozetleri yalnızca o yöre ve dönemde böyle bir inanç varsa çıkar)
    const hasGunesTanri = !!(((window.BOLGE && window.BOLGE.kultur) || (window.MISIR && window.MISIR.gokyuzu && window.MISIR.gokyuzu.gunes)) && Y > -400);
    const hasAyTanri = !!(((window.BOLGE && window.BOLGE.kultur) || (window.MISIR && window.MISIR.gokyuzu && window.MISIR.gokyuzu.ay)) && Y > -400);
    let gr = g.createLinearGradient(0, 0, 0, gY);
    gr.addColorStop(0, '#78b2db'); gr.addColorStop(0.7, '#cfe0e0'); gr.addColorStop(1, '#f5dfb2');
    g.fillStyle = gr; g.fillRect(0, 0, W, gY + 2);
    const sx = W * 0.83, sy = H * 0.13;
    gr = g.createRadialGradient(sx, sy, 0, sx, sy, 110 * u); gr.addColorStop(0, 'rgba(255,246,200,0.9)'); gr.addColorStop(1, 'rgba(255,246,200,0)');
    g.fillStyle = gr; g.fillRect(sx - 120 * u, sy - 120 * u, 240 * u, 240 * u);
    circ(sx, sy, 26 * u, '#fff3c4', 0);
    // ay (yalnızca ay tanrısı inancı olan antik bölgelerde gündüz hilali ve rozeti)
    const mxx = W * 0.6, myy = H * 0.085, mr = 13 * u;
    if (hasAyTanri) {
      g.fillStyle = 'rgba(245,245,235,0.85)'; g.beginPath(); g.arc(mxx, myy, mr, 0, 7); g.fill();
      g.fillStyle = 'rgba(150,190,220,0.9)'; g.beginPath(); g.arc(mxx + mr * 0.45, myy - mr * 0.2, mr * 0.92, 0, 7); g.fill();
    }
    skyHits.sun = [sx, sy, 34 * u]; skyHits.moon = [mxx, myy, 22 * u];
    if (hasGunesTanri) badge(sx + 30 * u, sy + 24 * u, 'gunes');
    if (hasAyTanri) badge(mxx + 18 * u, myy + 16 * u, 'ay');
    // bulutlar
    g.fillStyle = 'rgba(255,255,255,0.55)';
    for (let i = 0; i < 3; i++) {
      const cx = ((hash(i) * 1600 + T * 4 - camX * s * 0.08) % (W + 400) + W + 400) % (W + 400) - 200, cyy = H * (0.07 + i * 0.07);
      g.beginPath(); g.ellipse(cx, cyy, 60 * u, 10 * u, 0, 0, 7); g.ellipse(cx + 30 * u, cyy - 6 * u, 34 * u, 9 * u, 0, 0, 7); g.fill();
    }
    // kuşlar
    g.strokeStyle = '#3a3a3a'; g.lineWidth = 1.4 * u;
    for (const b of agents) if (b.layer === 'sky') {
      b.x += b.v * u * dt; const bx = (b.x % (W + 100)) - 50, by = H * b.y + Math.sin(T + b.ph) * 4 * u, f = Math.sin(T * 8 + b.ph) * 3 * u;
      g.beginPath(); g.moveTo(bx - 6 * u, by - f); g.quadraticCurveTo(bx - 3 * u, by - 3 * u, bx, by); g.quadraticCurveTo(bx + 3 * u, by - 3 * u, bx + 6 * u, by - f); g.stroke();
    }
    // uçaklar (20. yüzyıldan itibaren tüm dünyada)
    { const ucakY = (P.sahne && typeof P.sahne.ucak === 'number') ? P.sahne.ucak : -1935; if (Y <= ucakY) for (const a of agents) if (a.layer === 'plane') { a.x += a.v * u * dt; const px = (a.x % (W + 400)) - 200; plane(px, H * a.y, 0.9 * u); } }
    // uzak kumullar
    g.fillStyle = TM.kum1; g.beginPath(); g.moveTo(0, gY);
    for (let x = 0; x <= W + 20; x += 20) { const wx = camX + (x - W / 2) / (s * 0.35); g.lineTo(x, gY - (H * 0.07 + H * 0.03 * noise(wx)) * TM.dag); }
    g.lineTo(W, gY); g.closePath(); g.fill();
    if (TM.dag > 1) { // dağ sırtına oturan yumuşak karlı zirve şeridi
      g.save();
      g.beginPath(); g.moveTo(0, gY);
      for (let x = 0; x <= W + 20; x += 20) { const wx = camX + (x - W / 2) / (s * 0.35); g.lineTo(x, gY - (H * 0.07 + H * 0.03 * noise(wx)) * TM.dag); }
      g.lineTo(W, gY); g.closePath(); g.clip();
      const karY = gY - H * 0.086 * TM.dag;
      const kgr = g.createLinearGradient(0, karY - H * 0.03 * TM.dag, 0, karY + 12 * u);
      kgr.addColorStop(0, 'rgba(252,253,255,0.92)'); kgr.addColorStop(0.7, 'rgba(244,248,252,0.55)'); kgr.addColorStop(1, 'rgba(244,248,252,0)');
      g.fillStyle = kgr; g.fillRect(0, karY - H * 0.04 * TM.dag, W, H * 0.06 * TM.dag + 14 * u);
      g.restore();
    }
    g.fillStyle = TM.kum2; g.beginPath(); g.moveTo(0, gY);
    for (let x = 0; x <= W + 20; x += 20) { const wx = camX + (x - W / 2) / (s * 0.6); g.lineTo(x, gY - (H * 0.04 + H * 0.018 * noise(wx * 1.7 + 500)) * (TM.dag > 1 ? 1.5 : 1)); }
    g.lineTo(W, gY); g.closePath(); g.fill();
    // plato
    g.fillStyle = TM.plato; g.fillRect(0, gY - H * 0.03, W, H * 0.05);
    tiles(1, 70 * u, 3, (i, x, r) => { if (r < 0.5) { g.fillStyle = 'rgba(160,120,70,0.25)'; g.beginPath(); g.ellipse(x, gY - H * 0.012 + r * H * 0.02, 3 * u + r * 4 * u, 1.4 * u, 0, 0, 7); g.fill(); } });

    // anıtlar
    hits.length = 0;
    if (hasGunesTanri) { const [a, b, r] = skyHits.sun; hits.push({ id: 'gunes', ad: 'Güneş · güneş tanrısı', x0: a - r, x1: a + r, y0: b - r + 24 * u, y1: b + r }); }
    if (hasAyTanri) { const [a, b, r] = skyHits.moon; hits.push({ id: 'ay', ad: 'Ay · ay tanrıları', x0: a - r, x1: a + r, y0: b - r + 24 * u, y1: b + r }); }
    drawCliffs();
    const badges = [];
    for (const m of MONS) {
      const p = progress(m, Y); if (p < 0) continue;
      const { k, x, y } = monumentAt(m);
      const half = Math.max(m.b || 80, m.h || 0) * k;
      if (x < -half - 300 * u || x > W + half + 300 * u) continue;
      const top = drawMon(m, p, x, y, k);
      if (!m.gen && !m.minor) badges.push([x, top - 14 * u, m.id]);
    }
    for (const [bx, by, id] of badges) badge(bx, by, id);
    // plato kenarı
    g.fillStyle = TM.platoKenar; g.beginPath(); g.moveTo(0, gY + H * 0.005);
    for (let x = 0; x <= W + 20; x += 20) { const wx = camX + (x - W / 2) / (s * 1.05); g.lineTo(x, gY + H * 0.012 + H * 0.006 * noise(wx * 3)); }
    g.lineTo(W, gY + H * 0.03); g.lineTo(0, gY + H * 0.03); g.closePath(); g.fill();

    // batı kıyısı: tarlalar
    const fieldC = st.field.map(Math.round), water = [139, 112, 80], nileA = TM.nehirRenk, nileF = [128, 98, 70];
    const wbTop = gY + H * 0.02, wbBot = H * 0.645;
    g.fillStyle = rgb(fieldC); g.fillRect(0, wbTop, W, wbBot - wbTop);
    if (st.flood > 0.01) { g.fillStyle = `rgba(${water.join(',')},${0.92 * st.flood})`; g.fillRect(0, wbTop + 4 * u, W, wbBot - wbTop); }
    tiles(1.12, 46 * u, 11, (i, x, r) => {
      if (st.flood < 0.5) { g.strokeStyle = 'rgba(60,80,30,0.25)'; g.lineWidth = 1; g.beginPath(); g.moveTo(x, wbTop + 3 * u); g.lineTo(x + 24 * u, wbBot); g.stroke(); }
    });
    // Memfis
    const mx = P.memfis && (!P.memfis.from || Y <= P.memfis.from) ? atWorld(P.memfis.wx, 1.12) : -1e9;
    if (mx > -600 * u && mx < W + 600 * u) {
      const yb = wbBot - 6 * u;
      g.fillStyle = '#d9c9a5'; g.fillRect(mx - 260 * u, yb - 6 * u, 520 * u, 10 * u);
      for (let i = 0; i < 18; i++) { const hx = mx - 240 * u + i * 28 * u, hh = (10 + hash(i + 40) * 14) * u; shape([hx, yb, hx + 22 * u, yb, hx + 22 * u, yb - hh, hx, yb - hh], i % 4 === 0 ? '#e9dfc7' : '#d1b585', 1.2 * u); }
      shape([mx - 290 * u, yb + 2 * u, mx + 290 * u, yb + 2 * u, mx + 290 * u, yb - 8 * u, mx - 290 * u, yb - 8 * u], '#f2ede0', 1.4 * u);
      for (let i = 0; i < 12; i++) { const bx = mx - 285 * u + i * 52 * u; shape([bx, yb - 8 * u, bx + 9 * u, yb - 8 * u, bx + 9 * u, yb - 12 * u, bx, yb - 12 * u], '#f2ede0', 1 * u); }
      shape([mx + 40 * u, yb - 8 * u, mx + 110 * u, yb - 8 * u, mx + 104 * u, yb - 30 * u, mx + 46 * u, yb - 30 * u], '#efe6cf', 1.4 * u);
      label(mx, wbTop + 16 * u, P.memfis.ad, '#5b3a1e');
      hits.push({ id: 'memfis', ad: P.memfis.ad, x0: mx - 290 * u, x1: mx + 290 * u, y0: yb - 32 * u, y1: yb + 4 * u });
      badge(mx + 75 * u, yb - 44 * u, 'memfis');
    }
    // Gize limanı (Keops döneminde)
    if (P.liman && Y <= P.liman.from && Y >= P.liman.to) {
      const lx = atWorld(P.liman.wx, 1.12);
      if (lx > -300 * u && lx < W + 300 * u) {
        g.fillStyle = rgb(mixC(nileA, nileF, st.flood)); g.beginPath(); g.ellipse(lx, wbTop + (wbBot - wbTop) * 0.55, 120 * u, (wbBot - wbTop) * 0.32, 0, 0, 7); g.fill();
        g.strokeStyle = OUT; g.lineWidth = 1.2 * u; g.stroke();
        g.fillStyle = '#efe3c4'; for (let i = 0; i < 7; i++) g.fillRect(lx - 100 * u + i * 30 * u, wbTop + 4 * u, 12 * u, 6 * u);
        hits.push({ id: 'liman', ad: P.liman.ad, x0: lx - 120 * u, x1: lx + 120 * u, y0: wbTop, y1: wbBot });
      }
    }
    // batı kıyısı palmiyeleri ve köyleri
    tiles(1.12, 34 * u, 21, (i, x, r) => {
      const y = wbBot - 3 * u - hash(i + 2) * (wbBot - wbTop) * 0.45;
      if (r < 0.35) agac(x, y, (16 + r * 18) * u, i);
      else if (r > 0.9) house(x, y, 0.42 * u, hash(i + 5));
    });

    // Nil
    const nTop = H * 0.645, nBot = H * 0.75 + st.flood * H * 0.012;
    const nc = mixC(nileA, nileF, st.flood);
    gr = g.createLinearGradient(0, nTop, 0, nBot); gr.addColorStop(0, rgb(mixC(nc, [255, 255, 255], 0.15))); gr.addColorStop(1, rgb(mixC(nc, [0, 0, 0], 0.12)));
    g.fillStyle = gr; g.fillRect(0, nTop, W, nBot - nTop);
    g.strokeStyle = 'rgba(255,255,255,0.35)'; g.lineWidth = 1.4 * u;
    tiles(1.3, 52 * u, 31, (i, x, r) => {
      const yy = nTop + (0.1 + r * 0.8) * (nBot - nTop), xx = x + ((T * 14 * u) % (52 * u));
      g.beginPath(); g.moveTo(xx, yy); g.lineTo(xx + 12 * u, yy); g.stroke();
    });
    // nehir ajanları
    const ras = agents.filter(a => a.layer === 'river' && agentVisible(a)).map(a => {
      const span = W + 500 * u, camL = camX * s * LAYERF.river; a.x += a.v * u * dt;
      return { a, x: W / 2 + wrap(a.x - camL, span), y: H * a.fy };
    }).sort((p, q) => p.y - q.y);
    for (const r of ras) drawAgent(r.a, r.x, r.y);
    // akış yönü notu
    g.fillStyle = 'rgba(255,255,255,0.75)'; g.font = `600 ${Math.round(10 * u + 3)}px system-ui, sans-serif`; g.textAlign = 'left';
    g.fillText(TM.nehirYazi, 10 * u, nTop + 14 * u);
    hits.push({ id: 'nil', ad: TM.nehirAd, x0: 0, x1: W, y0: nTop + 24 * u, y1: nBot - 2 });
    badge(W * 0.5, nTop + (nBot - nTop) * 0.45, 'nil');

    // yakın kıyı
    const nbTop = nBot;
    g.fillStyle = TM.yakin; g.fillRect(0, nbTop, W, H - nbTop);
    // sazlıklar
    tiles(1.6, 22 * u, 41, (i, x, r) => {
      if (r < 0.55) { g.strokeStyle = '#5c8a3a'; g.lineWidth = 2 * u; for (let j = 0; j < 4; j++) { g.beginPath(); g.moveTo(x + j * 4 * u, nbTop + 6 * u); g.lineTo(x + j * 4 * u + Math.sin(T + i + j) * 2 * u, nbTop - (10 + j * 3 + r * 10) * u); g.stroke(); } circ(x + 6 * u, nbTop - (16 + r * 10) * u, 3 * u, '#7aa64a', 1 * u); }
    });
    // yakın tarlalar
    const fTop = nbTop + H * 0.006, fBot = H * 0.818;
    const tura = P.tura ? atWorld(P.tura.wx, 1.6) : -1e9;
    g.fillStyle = rgb(fieldC); g.fillRect(0, fTop, W, fBot - fTop);
    if (st.flood > 0.01) { g.fillStyle = `rgba(${water.join(',')},${0.9 * st.flood})`; g.fillRect(0, fTop, W, (fBot - fTop) * 0.85); }
    tiles(1.55, 160 * u, 51, (i, x) => { g.strokeStyle = 'rgba(70,60,30,0.3)'; g.lineWidth = 2 * u; g.beginPath(); g.moveTo(x, fTop); g.lineTo(x - 30 * u, fBot); g.stroke(); });
    if (st.season === 'semu') tiles(1.55, 26 * u, 52, (i, x, r) => { if (r < 0.4) shape([x, fBot - 4 * u, x + 8 * u, fBot - 4 * u, x + 4 * u, fBot - 18 * u], '#e3c36a', 1 * u); });
    // Tura taş ocağı
    if (tura > -700 * u && tura < W + 700 * u) {
      shape([tura - 330 * u, fBot + 4 * u, tura - 300 * u, fTop - 30 * u, tura - 120 * u, fTop - 44 * u, tura + 140 * u, fTop - 38 * u, tura + 300 * u, fTop - 24 * u, tura + 330 * u, fBot + 4 * u], '#efe6d0', 1.8 * u);
      g.strokeStyle = 'rgba(150,130,100,0.5)'; g.lineWidth = 1.2 * u;
      for (let i = 0; i < 9; i++) { const qx = tura - 260 * u + i * 60 * u; g.beginPath(); g.moveTo(qx, fTop - 30 * u); g.lineTo(qx + 6 * u, fBot); g.stroke(); }
      for (let i = 0; i < 5; i++) shape([tura - 200 * u + i * 70 * u, fBot, tura - 176 * u + i * 70 * u, fBot, tura - 176 * u + i * 70 * u, fBot - 14 * u, tura - 200 * u + i * 70 * u, fBot - 14 * u], '#f6efdc', 1.2 * u);
      if (st.act > 0) for (let i = 0; i < 6; i++) person(tura - 230 * u + i * 80 * u, fBot - 2 * u, kOf(fBot) * 0.9, { kind: 'man', act: 'hammer', dir: i % 2 ? 1 : -1, ph: i });
      label(tura, fTop - 54 * u, P.tura.ad, '#5b3a1e');
      hits.push({ id: 'tura', ad: P.tura.ad, x0: tura - 330 * u, x1: tura + 330 * u, y0: fTop - 64 * u, y1: fBot });
    }
    // tarla ajanları
    const fas = agents.filter(a => a.layer === 'field' && agentVisible(a)).map(a => {
      const span = W + 500 * u, camL = camX * s * LAYERF.field; a.x += a.v * u * dt; a.ph += dt * 4 * (a.v ? 1 : 0);
      return { a, x: W / 2 + wrap(a.x - camL, span), y: H * a.fy };
    }).filter(r => Math.abs(r.x - tura) > 360 * u).sort((p, q) => p.y - q.y);
    for (const r of fas) drawAgent(r.a, r.x, r.y);

    // yakın kıyıdaki yapılar (Karnak, Luksor, şehirler)
    const nearY = H * 0.845, nk = s * 1.7;
    const nearVis = NEAR.map(m => ({ m, p: progress(m, Y), x: atWorld(m.wx, 1.7) })).filter(o => o.p >= 0 && o.x > -o.m.b * nk - 300 * u && o.x < W + o.m.b * nk + 300 * u);
    const nearBusy = x => nearVis.some(o => Math.abs(x - o.x) < o.m.b * nk / 2 + 40 * u);
    // köy: evler ve palmiyeler
    tiles(1.7, 58 * u, 61, (i, x, r) => {
      if (Math.abs(x - tura) < 340 * u || nearBusy(x)) return;
      const y = H * 0.838 + hash(i + 3) * H * 0.012;
      if (r < 0.32) agac(x, y, (52 + r * 50) * u, i + 100);
      else if (r < 0.62) house(x, y, kOf(y) * 1.55, hash(i + 8));
    });
    for (const o of nearVis) { const kk = nk * (o.m.nk || 1); const top = drawMon(o.m, o.p, o.x, nearY - (o.m.lift || 0) * kk, kk); if (!o.m.minor) badge(o.x, top - 14 * u, o.m.id); }
    // yol (1930 sonrasında modern asfalt cadde + kaldırım + sokak lambaları)
    if (Y <= -1930) {
      g.fillStyle = '#c8c5bc'; g.fillRect(0, H * 0.85, W, H * 0.015);
      g.fillStyle = '#52565e'; g.fillRect(0, H * 0.865, W, H * 0.095);
      g.strokeStyle = 'rgba(245,235,190,0.65)'; g.lineWidth = 2 * u; g.setLineDash([18 * u, 16 * u]);
      g.beginPath(); g.moveTo(0, H * 0.912); g.lineTo(W, H * 0.912); g.stroke(); g.setLineDash([]);
      tiles(1.7, 210 * u, 83, (i, x) => {
        if (nearBusy(x)) return;
        const ly = H * 0.858;
        g.strokeStyle = '#3b424c'; g.lineWidth = 2.2 * u; g.beginPath(); g.moveTo(x, ly); g.lineTo(x, ly - 42 * u); g.lineTo(x + 9 * u, ly - 44 * u); g.stroke();
        g.fillStyle = '#fff5cc'; g.beginPath(); g.arc(x + 9 * u, ly - 43 * u, 3 * u, 0, 7); g.fill();
      });
    } else {
      g.fillStyle = TM.yol; g.fillRect(0, H * 0.855, W, H * 0.1);
    }
    // yol ajanları
    const rds = agents.filter(a => a.layer === 'road' && agentVisible(a)).map(a => {
      const span = W + 700 * u, camL = camX * s * LAYERF.road; a.x += a.v * u * dt; if (a.v) a.ph += dt * (a.t === 'sledge' ? 3.5 : 6);
      return { a, x: W / 2 + wrap(a.x - camL, span), y: H * a.fy };
    }).sort((p, q) => p.y - q.y);
    for (const r of rds) drawAgent(r.a, r.x, r.y);
    // ön plan palmiyeleri (alt ortadaki yer şeridini kapatmaması için kenarlarda)
    tiles(2.3, 420 * u, 71, (i, x, r) => { if (r < 0.45 && (x < W * 0.22 || x > W * 0.78)) agac(x, H * 1.04, (135 + r * 65) * u, i + 300); });

    // yer adları
    for (const site of P.sites) {
      const x = W / 2 + (site.wx - camX) * s;
      if (x > -200 && x < W + 200) label(x, gY + H * 0.042, site.ad, '#3a2414');
    }
    // fareyle üstüne gelinen yapının adı
    const hv = hits.find(h => h.id === st.hover);
    if (hv) {
      g.strokeStyle = 'rgba(255,214,102,0.9)'; g.lineWidth = 2; g.setLineDash([6, 4]);
      g.strokeRect(hv.x0, hv.y0, hv.x1 - hv.x0, hv.y1 - hv.y0); g.setLineDash([]);
      label((hv.x0 + hv.x1) / 2, Math.max(16 * u, hv.y0 - 30 * u), hv.ad + ' · bilgi için tıkla', '#3a2414');
    }
  }

  const hits = [];
  function badge(x, y, id) {
    const r = 8 * u + 3, pul = 1 + Math.sin(T * 3 + id.length) * 0.08;
    g.save(); g.translate(x, y); g.scale(pul, pul);
    circ(0, 0, r, st.hover === id ? '#ffffff' : '#ffd666', 1.6);
    g.fillStyle = OUT; g.font = `800 ${Math.round(r * 1.3)}px Georgia, serif`; g.textAlign = 'center'; g.textBaseline = 'middle';
    g.fillText('i', 0, 1); g.textBaseline = 'alphabetic';
    g.restore();
  }
  function hitTest(x, y) {
    for (let i = hits.length - 1; i >= 0; i--) { const h = hits[i]; if (x >= h.x0 && x <= h.x1 && y >= h.y0 - 24 * u && y <= h.y1) return h; }
    return null;
  }

  function label(x, y, text, col) {
    g.font = `700 ${Math.round(9 * u + 4)}px system-ui, sans-serif`; g.textAlign = 'center';
    const w = g.measureText(text).width + 14;
    g.fillStyle = 'rgba(255,248,230,0.82)'; g.beginPath(); g.roundRect(x - w / 2, y - 9 * u - 5, w, 18 * u + 4, 8); g.fill();
    g.fillStyle = col; g.fillText(text, x, y + 4 * u);
  }

  return {
    drawOn(ctx, fn) {
      const og = g; g = ctx;
      try {
        fn({ person, cow, donkey, boat, house, palm, chariot, camel,
          plough: (x, y, k, t) => drawAgent({ t: 'plough', ph: t * 4, k }, x, y),
          scribe: (x, y, k) => drawAgent({ t: 'scribe', k }, x, y),
          sledge: (x, y, k, t) => drawAgent({ t: 'sledge', ph: t * 3.5, k }, x, y) });
      } finally { g = og; }
    },
    tick: dt => { T += dt; },
    findHit: id => hits.find(h => h.id === id),
    prepare, initAgents, draw, progress, focus, activity, vol, profileOf, hwAt, hitTest,
    setHover: id => { st.hover = id; },
    setSeason: v => { st.season = v; }, get season() { return st.season; },
    get act() { return st.act; }, scale: (h) => 0.38 * h / 146.6
  };
})();
