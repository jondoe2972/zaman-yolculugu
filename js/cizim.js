// Mısır sanatı tarzında kodla çizimler: tanrı figürleri, hiyeroglifler, duvar resimleri (yapıların içi),
// mumya-lahit animasyonu ve "o dönemde yaşasaydım" sahneleri.
'use strict';
window.Cizim = (() => {
  const OUT = '#2a1a0e', LIN = '#f1ecdf', RED = '#b5653a', BLUE = '#2f5fa8', GOLD = '#e8b923', GREEN = '#4f9a5a';
  let c;
  const hash = i => { const x = Math.sin(i * 127.1 + 311.7) * 43758.5453; return x - Math.floor(x); };
  const clamp = (v, a = 0, b = 1) => Math.max(a, Math.min(b, v));
  function poly(pts, fill, lw = 1.4) { c.beginPath(); c.moveTo(pts[0], pts[1]); for (let i = 2; i < pts.length; i += 2) c.lineTo(pts[i], pts[i + 1]); c.closePath(); if (fill) { c.fillStyle = fill; c.fill(); } if (lw) { c.strokeStyle = OUT; c.lineWidth = lw; c.stroke(); } }
  function circ(x, y, r, fill, lw = 1.4) { c.beginPath(); c.arc(x, y, r, 0, Math.PI * 2); if (fill) { c.fillStyle = fill; c.fill(); } if (lw) { c.strokeStyle = OUT; c.lineWidth = lw; c.stroke(); } }
  function ell(x, y, rx, ry, rot, fill, lw = 1.4) { c.beginPath(); c.ellipse(x, y, rx, ry, rot, 0, Math.PI * 2); if (fill) { c.fillStyle = fill; c.fill(); } if (lw) { c.strokeStyle = OUT; c.lineWidth = lw; c.stroke(); } }
  function limb(x1, y1, x2, y2, w, col) { c.lineCap = 'round'; c.strokeStyle = OUT; c.lineWidth = w + 2.2; c.beginPath(); c.moveTo(x1, y1); c.lineTo(x2, y2); c.stroke(); c.strokeStyle = col; c.lineWidth = w; c.beginPath(); c.moveTo(x1, y1); c.lineTo(x2, y2); c.stroke(); }

  // ---------- küçük semboller ----------
  function ankh(x, y, s, col = GOLD) {
    c.save(); c.translate(x, y); c.scale(s, s);
    c.strokeStyle = OUT; c.lineWidth = 4.4; c.beginPath(); c.ellipse(0, -9, 3.4, 4.6, 0, 0, 7); c.moveTo(-6, -3); c.lineTo(6, -3); c.moveTo(0, -4); c.lineTo(0, 9); c.stroke();
    c.strokeStyle = col; c.lineWidth = 2.4; c.beginPath(); c.ellipse(0, -9, 3.4, 4.6, 0, 0, 7); c.moveTo(-6, -3); c.lineTo(6, -3); c.moveTo(0, -4); c.lineTo(0, 9); c.stroke();
    c.restore();
  }
  function was(x, y0, y1, col = '#6b4a2a') { // asa: alt ucu çatallı, üstü hayvan başlı
    limb(x, y0, x, y1, 1.8, col);
    c.strokeStyle = OUT; c.lineWidth = 1.6; c.beginPath(); c.moveTo(x, y1); c.lineTo(x - 3, y1 + 4); c.moveTo(x, y1); c.lineTo(x + 3, y1 + 4); c.stroke();
    poly([x - 1, y0, x + 6, y0 - 3, x + 4, y0 + 1], col, 1.2);
  }
  function feather(x, y, h, col = '#f4eedf') { ell(x, y - h / 2, h * 0.16, h / 2, 0.15, col, 1.2); c.strokeStyle = OUT; c.lineWidth = 0.8; c.beginPath(); c.moveTo(x - h * 0.05, y); c.lineTo(x + h * 0.06, y - h * 0.95); c.stroke(); }

  // ---------- Mısır figürü (profilden) ----------
  // o: { bas: insan|kadin|sahin|cakal|ibis|kedi|timsah|seth, tac, ten, govde: normal|mumya|sisman, tutar, dir, sakal, bukle, peruk, kral }
  function fig(x, y, h, o = {}) {
    const d = o.dir || 1, k = h / 100;
    c.save(); c.translate(x, y); c.scale(d * k, k); c.lineJoin = 'round';
    const ten = o.ten || RED, kad = o.bas === 'kadin' || o.kadin, mum = o.govde === 'mumya';
    const lw = 1.5;
    // bacaklar
    if (mum) {
      poly([-9, -80, 9, -80, 8, -6, 6, 0, -6, 0, -8, -6], LIN, lw);
      c.strokeStyle = 'rgba(80,60,40,0.35)'; c.lineWidth = 0.8;
      for (let i = 0; i < 9; i++) { c.beginPath(); c.moveTo(-8, -70 + i * 8); c.lineTo(8, -64 + i * 8); c.stroke(); }
    } else if (kad) {
      limb(-2, -40, -3, -2, 4.2, ten); limb(2, -40, 6, -2, 4.2, ten);
      poly([-8, -80, 8, -80, 9, -40, 8, -8, -6, -8, -8, -40], LIN, lw);
    } else {
      limb(-2, -50, -12, -2, 5, ten); limb(2, -50, 13, -2, 5, ten);
      poly([-14, 0, -6, 0, -8, -3, -13, -3], ten, 1); poly([10, 0, 19, 0, 17, -3, 11, -3], ten, 1);
    }
    // gövde
    if (!mum) {
      if (o.govde === 'sisman') ell(5, -56, 12, 13, 0, ten, lw);
      if (!kad) {
        poly([-12, -82, 12, -82, 7, -52, -7, -52], ten, lw);
        poly([-8, -54, 9, -54, 14, -32, -11, -32], LIN, lw);
        if (o.kral) poly([-1, -50, 4, -50, 6, -30, 1, -30], GOLD, 1);
      } else {
        poly([-11, -82, 11, -82, 8, -70, -8, -70], ten, lw);
      }
      // gerdanlık
      c.strokeStyle = '#2f8fa3'; c.lineWidth = 3; c.beginPath(); c.arc(1, -84, 9, 0.2 * Math.PI, 0.8 * Math.PI); c.stroke();
      c.strokeStyle = GOLD; c.lineWidth = 1.2; c.beginPath(); c.arc(1, -84, 11, 0.22 * Math.PI, 0.78 * Math.PI); c.stroke();
    } else {
      c.strokeStyle = '#2f8fa3'; c.lineWidth = 3; c.beginPath(); c.arc(1, -82, 8, 0.15 * Math.PI, 0.85 * Math.PI); c.stroke();
    }
    // kollar ve tutulanlar
    const t = o.tutar;
    if (mum) {
      limb(-4, -66, 6, -66, 3.4, o.eller || ten);
      if (t === 'asa') {
        c.strokeStyle = OUT; c.lineWidth = 2.6; c.beginPath(); c.moveTo(2, -76); c.lineTo(10, -56); c.stroke();
        c.strokeStyle = GOLD; c.lineWidth = 1.6; c.beginPath(); c.moveTo(2, -76); c.lineTo(10, -56); c.stroke();
        c.strokeStyle = OUT; c.lineWidth = 2.6; c.beginPath(); c.moveTo(10, -76); c.lineTo(0, -56); c.arc(-2, -58, 2.5, 0, Math.PI); c.stroke();
        c.strokeStyle = BLUE; c.lineWidth = 1.6; c.beginPath(); c.moveTo(10, -76); c.lineTo(0, -56); c.stroke();
      } else if (t === 'was') was(10, -84, -2);
    } else if (t === 'was' || t === 'ankh') {
      limb(-9, -78, -12, -50, 3.6, ten);
      if (t === 'ankh') ankh(-12, -44, 0.9);
      limb(9, -78, 20, -64, 3.6, ten);
      was(22, -98, -2);
    } else if (t === 'kalem') {
      limb(-9, -78, -6, -56, 3.6, ten); poly([-12, -60, 2, -60, 2, -54, -12, -54], '#efe1b0', 1);
      limb(9, -78, 18, -70, 3.6, ten); c.strokeStyle = OUT; c.lineWidth = 1.2; c.beginPath(); c.moveTo(18, -70); c.lineTo(24, -82); c.stroke();
    } else if (t === 'sunu') {
      limb(-9, -78, 16, -66, 3.6, ten); limb(9, -78, 20, -64, 3.6, ten);
      poly([12, -66, 32, -66, 30, -63, 14, -63], '#c99a5c', 1); ell(18, -69, 3, 2.5, 0, '#e3c36a', 1); ell(25, -69, 3, 2.5, 0, '#c97a3a', 1); circ(21, -73, 2.5, '#5a9a3a', 1);
    } else if (t === 'maat') {
      limb(-9, -78, 14, -68, 3.6, ten); limb(9, -78, 18, -64, 3.6, ten);
      fig(19, -66, 14, { bas: 'kadin', tac: 'tuy', ten: '#d9a35f', dir: 1 });
    } else if (t === 'ok') {
      limb(9, -78, 26, -80, 3.4, ten); limb(-9, -78, 8, -79, 3.4, ten);
      c.strokeStyle = OUT; c.lineWidth = 2; c.beginPath(); c.arc(26, -80, 16, -1.1, 1.1); c.stroke();
      c.lineWidth = 0.8; c.beginPath(); c.moveTo(26 + Math.cos(-1.1) * 16, -80 + Math.sin(-1.1) * 16); c.lineTo(8, -80); c.lineTo(26 + Math.cos(1.1) * 16, -80 + Math.sin(1.1) * 16); c.stroke();
      c.lineWidth = 1.2; c.beginPath(); c.moveTo(8, -80); c.lineTo(44, -80); c.stroke();
    } else if (t === 'yukari') {
      limb(-9, -78, -14, -100, 3.4, ten); limb(9, -78, 16, -100, 3.4, ten);
    } else if (t === 'cek') {
      limb(-9, -78, 14, -70, 3.4, ten); limb(9, -78, 18, -72, 3.4, ten);
    } else {
      limb(-9, -78, -11, -50, 3.6, ten); limb(9, -78, 12, -52, 3.6, ten);
    }
    // baş
    const b = o.bas || 'insan';
    const peruk = o.peruk || (o.tanri ? BLUE : '#17110c');
    if (b === 'insan' || b === 'kadin') {
      if (b === 'kadin' || o.uzunPeruk) poly([-9, -98, 6, -100, 6, -76, -10, -76], peruk, 1);
      ell(3, -90, 8, 9, 0, ten, lw);
      if (o.tac !== 'takke' && o.tac !== 'nemes') { c.fillStyle = peruk; c.beginPath(); c.arc(2, -92, 9.4, Math.PI * 0.95, Math.PI * 1.95); c.closePath(); c.fill(); }
      if (o.sakal) { c.strokeStyle = OUT; c.lineWidth = 3; c.beginPath(); c.moveTo(8, -82); c.quadraticCurveTo(10, -74, 14, -73); c.stroke(); }
      if (o.bukle) { c.strokeStyle = '#17110c'; c.lineWidth = 3; c.beginPath(); c.moveTo(-5, -94); c.quadraticCurveTo(-11, -86, -6, -78); c.stroke(); }
    } else if (b === 'sahin') {
      poly([-8, -98, 6, -100, 4, -78, -9, -78], peruk, 1);
      ell(3, -90, 8.5, 9, 0, '#7a6a48', lw);
      poly([9, -94, 17, -90, 12, -86, 10, -87], '#d9b273', 1.2);
      c.strokeStyle = OUT; c.lineWidth = 1.6; c.beginPath(); c.moveTo(5, -91); c.quadraticCurveTo(5, -84, 2, -82); c.stroke();
    } else if (b === 'cakal') {
      poly([-8, -98, 4, -100, 2, -78, -9, -78], peruk, 1);
      poly([-4, -86, 0, -96, 6, -96, 20, -88, 18, -84, 4, -82], '#1d1712', lw);
      poly([-2, -95, 0, -112, 4, -96], '#1d1712', 1.2); poly([2, -96, 6, -111, 8, -96], '#1d1712', 1.2);
    } else if (b === 'ibis') {
      poly([-8, -98, 4, -100, 2, -78, -9, -78], peruk, 1);
      ell(2, -91, 7, 7.5, 0, '#f4f0e6', lw);
      c.strokeStyle = OUT; c.lineWidth = 3.4; c.beginPath(); c.moveTo(7, -91); c.quadraticCurveTo(20, -88, 24, -76); c.stroke();
      c.strokeStyle = '#1d1712'; c.lineWidth = 2; c.beginPath(); c.moveTo(7, -91); c.quadraticCurveTo(20, -88, 24, -76); c.stroke();
    } else if (b === 'kedi') {
      ell(3, -90, 8, 8.5, 0, '#2a2420', lw);
      poly([-3, -96, -1, -106, 4, -98], '#2a2420', 1.2); poly([4, -98, 8, -106, 10, -95], '#2a2420', 1.2);
      poly([9, -90, 13, -87, 9, -85], '#2a2420', 1);
    } else if (b === 'timsah') {
      poly([-8, -98, 4, -100, 2, -78, -9, -78], peruk, 1);
      poly([-4, -95, 6, -96, 24, -89, 24, -85, 6, -83, -4, -84], '#5a7a3a', lw);
    } else if (b === 'seth') {
      poly([-8, -98, 4, -100, 2, -78, -9, -78], peruk, 1);
      poly([-4, -96, 4, -97, 14, -92, 18, -84, 14, -86, 4, -83, -4, -84], '#b0624a', lw);
      poly([-2, -96, -3, -112, 2, -112, 2, -97], '#b0624a', 1.2); poly([3, -97, 5, -112, 9, -112, 7, -96], '#b0624a', 1.2);
    }
    // göz
    if (b !== 'cakal' && b !== 'timsah' && b !== 'seth') { c.fillStyle = '#fff'; ell(6, -91, 2.4, 1.3, 0, '#fff', 0.8); circ(6.4, -91, 0.9, OUT, 0); }
    else circ(6, -91, 1, '#f2c94c', 0.6);
    // taçlar
    const top = -100;
    switch (o.tac) {
      case 'gunes': circ(2, top - 9, 9, '#d9473a', 1.4); poly([9, top - 4, 12, top - 12, 10, top - 2], GOLD, 1); break;
      case 'cift': poly([-8, top + 2, 8, top + 2, 8, top - 16, 3, top - 16, 3, top - 6, -6, top - 6], '#c0392b', 1.4); ell(-1, top - 12, 4.5, 11, 0, '#f4eedf', 1.4); break;
      case 'atef': ell(2, top - 12, 5, 14, 0, '#f4eedf', 1.4); feather(-6, top + 2, 26); feather(10, top + 2, 26); break;
      case 'tuyler': poly([-4, top + 2, 8, top + 2, 7, top - 4, -3, top - 4], '#c0392b', 1); poly([-2, top - 4, 1, top - 40, 3, top - 4], '#e9d9b0', 1.2); poly([3, top - 4, 6, top - 40, 8, top - 4], '#e9d9b0', 1.2); break;
      case 'taht': poly([-4, top + 2, 8, top + 2, 8, top - 6, 4, top - 6, 4, top - 14, -4, top - 14], '#3d6fb5', 1.2); break;
      case 'boynuz': c.strokeStyle = OUT; c.lineWidth = 3; c.beginPath(); c.moveTo(-10, top - 14); c.quadraticCurveTo(-8, top + 2, 2, top); c.quadraticCurveTo(12, top + 2, 14, top - 14); c.stroke(); circ(2, top - 9, 8, '#d9473a', 1.4); break;
      case 'tuy': feather(3, top + 2, 20); break;
      case 'ay': c.fillStyle = '#e8e4d8'; c.strokeStyle = OUT; c.lineWidth = 1.2; c.beginPath(); c.arc(2, top - 8, 9, 0.15 * Math.PI, 0.85 * Math.PI); c.arc(2, top - 13, 9, 0.75 * Math.PI, 0.25 * Math.PI, true); c.fill(); c.stroke(); circ(2, top - 12, 6, '#f2e6b0', 1.2); break;
      case 'takke': c.fillStyle = BLUE; c.beginPath(); c.arc(3, -92, 9, Math.PI * 1.0, Math.PI * 2.0); c.closePath(); c.fill(); break;
      case 'papirus': for (let i = -1; i <= 1; i++) { c.strokeStyle = '#3f7a2a'; c.lineWidth = 1.5; c.beginPath(); c.moveTo(2, top); c.lineTo(2 + i * 6, top - 14); c.stroke(); ell(2 + i * 7, top - 16, 4, 3, 0, '#5f9e43', 1); } break;
      case 'nemes': poly([-9, -96, 10, -98, 9, -84, 4, -80, 4, -74, -10, -74, -10, -84], GOLD, 1.4);
        c.strokeStyle = BLUE; c.lineWidth = 1.4; for (let i = 0; i < 4; i++) { c.beginPath(); c.moveTo(-9, -94 + i * 5); c.lineTo(9, -96 + i * 5); c.stroke(); }
        ell(3, -88, 6, 7, 0, o.ten || RED, 1.2); circ(6, -89, 1, OUT, 0); poly([8, -98, 11, -104, 10, -96], GOLD, 1); break;
      case 'mavi': poly([-8, -86, -9, -100, -2, -110, 10, -106, 12, -94, 9, -86], '#2f5fa8', 1.4);
        c.fillStyle = GOLD; for (let i = 0; i < 6; i++) circ(-4 + (i % 3) * 5, -100 + Math.floor(i / 3) * 6, 0.9, GOLD, 0); poly([10, -104, 13, -108, 12, -100], GOLD, 1); break;
    }
    c.restore();
  }

  // ---------- özel tanrı çizimleri ----------
  function aton(x, y, r, t = 0) {
    for (let i = 0; i < 13; i++) {
      const a = Math.PI * (0.15 + 0.7 * i / 12), L = r * 2.4;
      const ex = x + Math.cos(a) * L, ey = y + Math.sin(a) * L;
      c.strokeStyle = '#e8a21a'; c.lineWidth = 2; c.beginPath(); c.moveTo(x + Math.cos(a) * r, y + Math.sin(a) * r); c.lineTo(ex, ey); c.stroke();
      c.save(); c.translate(ex, ey); c.rotate(a - Math.PI / 2); poly([-3, 0, 3, 0, 4, 6, 1, 8, -1, 8, -4, 6], '#e8a21a', 0.8); c.restore();
    }
    const gr = c.createRadialGradient(x, y, 0, x, y, r * 1.6); gr.addColorStop(0, 'rgba(255,220,120,0.9)'); gr.addColorStop(1, 'rgba(255,200,80,0)');
    c.fillStyle = gr; c.beginPath(); c.arc(x, y, r * 1.6, 0, 7); c.fill();
    circ(x, y, r, '#d9473a', 1.6); poly([x - 3, y + r - 2, x + 3, y + r - 2, x, y + r + 6], GOLD, 1);
  }
  function nut(x, y, w, h) {
    c.save(); c.translate(x, y);
    c.fillStyle = '#2f5fa8'; c.strokeStyle = OUT; c.lineWidth = 1.6;
    c.beginPath(); c.moveTo(-w / 2, 0); c.lineTo(-w / 2 + w * 0.08, -h); c.lineTo(w / 2 - w * 0.08, -h); c.lineTo(w / 2, 0); c.lineTo(w / 2 - w * 0.12, 0); c.lineTo(w / 2 - w * 0.18, -h * 0.78); c.lineTo(-w / 2 + w * 0.18, -h * 0.78); c.lineTo(-w / 2 + w * 0.12, 0); c.closePath(); c.fill(); c.stroke();
    c.fillStyle = '#f2c94c'; for (let i = 0; i < 18; i++) star(-w / 2 + w * 0.12 + hash(i) * w * 0.76, -h * 0.82 - hash(i + 7) * h * 0.14, 2.6);
    ell(w / 2 - w * 0.03, -h * 0.94, w * 0.05, h * 0.07, 0, '#d9a35f', 1.4);
    c.restore();
  }
  function scarab(x, y, s) {
    circ(x, y - s * 1.6, s * 0.8, '#d9473a', 1.4);
    ell(x, y, s * 0.7, s * 0.9, 0, '#2e6b5a', 1.4); ell(x, y - s * 0.75, s * 0.45, s * 0.3, 0, '#2e6b5a', 1.2);
    c.strokeStyle = OUT; c.lineWidth = 1.2; for (const sd of [-1, 1]) for (let i = 0; i < 3; i++) { c.beginPath(); c.moveTo(x + sd * s * 0.5, y - s * 0.4 + i * s * 0.45); c.lineTo(x + sd * s * 1.1, y - s * 0.6 + i * s * 0.6); c.stroke(); }
  }
  function star(x, y, r) { c.beginPath(); for (let i = 0; i < 10; i++) { const a = -Math.PI / 2 + i * Math.PI / 5, rr = i % 2 ? r * 0.45 : r; c.lineTo(x + Math.cos(a) * rr, y + Math.sin(a) * rr); } c.closePath(); c.fill(); }

  function drawGod(ctx, god, w, h, t = 0) {
    c = ctx; const cz = god.cizim || {};
    const bg = c.createLinearGradient(0, 0, 0, h); bg.addColorStop(0, '#f3e4c2'); bg.addColorStop(1, '#e6cf9e');
    c.fillStyle = bg; c.fillRect(0, 0, w, h);
    frieze(0, 0, w, h * 0.07);
    c.fillStyle = 'rgba(120,80,40,0.12)'; c.fillRect(0, h * 0.9, w, h * 0.1);
    if (cz.ozel === 'aton') aton(w / 2, h * 0.38, Math.min(w, h) * 0.12, t);
    else if (cz.ozel === 'nut') nut(w / 2, h * 0.88, w * 0.8, h * 0.62);
    else if (cz.ozel === 'bocek') scarab(w / 2, h * 0.62, Math.min(w, h) * 0.16);
    else fig(w / 2 - h * 0.05, h * 0.9, h * 0.62, { ...cz, tanri: true, sakal: cz.bas !== 'kadin' && cz.bas !== 'kedi', dir: 1 });
    hieroColumn(w * 0.1, h * 0.12, h * 0.7, Math.max(10, h * 0.05), god.id.length * 7);
    hieroColumn(w * 0.88, h * 0.12, h * 0.7, Math.max(10, h * 0.05), god.id.length * 13);
  }

  // ---------- hiyeroglifler ----------
  const GLYPHS = ['ankh', 'goz', 'baykus', 'su', 'ekmek', 'kamis', 'el', 'yilan', 'kus', 'gunes', 'sepet', 'tuy', 'djed', 'ayak', 'bocek', 'yildiz'];
  function glyph(x, y, s, name, col = OUT) {
    c.save(); c.translate(x, y); c.strokeStyle = col; c.fillStyle = col; c.lineWidth = Math.max(1, s * 0.11); c.lineCap = 'round';
    const L = (a, b, cc, d) => { c.beginPath(); c.moveTo(a * s, b * s); c.lineTo(cc * s, d * s); c.stroke(); };
    switch (name) {
      case 'ankh': c.beginPath(); c.ellipse(0, -0.25 * s, 0.14 * s, 0.2 * s, 0, 0, 7); c.stroke(); L(-0.25, 0, 0.25, 0); L(0, 0, 0, 0.45); break;
      case 'goz': c.beginPath(); c.ellipse(0, 0, 0.32 * s, 0.14 * s, 0, 0, 7); c.stroke(); c.beginPath(); c.arc(0, 0, 0.08 * s, 0, 7); c.fill(); L(0, 0.14, -0.05, 0.4); c.beginPath(); c.moveTo(0.05 * s, 0.14 * s); c.quadraticCurveTo(0.3 * s, 0.4 * s, 0.15 * s, 0.42 * s); c.stroke(); break;
      case 'baykus': c.beginPath(); c.ellipse(0, 0.05 * s, 0.2 * s, 0.32 * s, 0, 0, 7); c.stroke(); c.beginPath(); c.arc(-0.07 * s, -0.15 * s, 0.05 * s, 0, 7); c.arc(0.07 * s, -0.15 * s, 0.05 * s, 0, 7); c.fill(); L(-0.1, 0.38, 0.1, 0.38); break;
      case 'su': c.beginPath(); for (let i = 0; i <= 6; i++) c.lineTo((-0.4 + i * 0.133) * s, (i % 2 ? -0.07 : 0.07) * s); c.stroke(); break;
      case 'ekmek': c.beginPath(); c.arc(0, 0.1 * s, 0.25 * s, Math.PI, 0); c.closePath(); c.fill(); break;
      case 'kamis': c.beginPath(); c.ellipse(0, 0, 0.08 * s, 0.38 * s, 0.25, 0, 7); c.stroke(); break;
      case 'el': c.beginPath(); c.moveTo(-0.4 * s, 0.05 * s); c.lineTo(0.3 * s, -0.02 * s); c.lineTo(0.38 * s, -0.12 * s); c.stroke(); break;
      case 'yilan': c.beginPath(); c.moveTo(-0.38 * s, 0.25 * s); c.quadraticCurveTo(-0.1 * s, 0, 0.1 * s, 0.25 * s); c.quadraticCurveTo(0.3 * s, 0.35 * s, 0.35 * s, -0.05 * s); c.stroke(); break;
      case 'kus': c.beginPath(); c.ellipse(0, 0.05 * s, 0.25 * s, 0.14 * s, -0.2, 0, 7); c.stroke(); c.beginPath(); c.arc(0.22 * s, -0.12 * s, 0.07 * s, 0, 7); c.stroke(); L(-0.05, 0.18, -0.05, 0.4); L(0.05, 0.18, 0.08, 0.4); break;
      case 'gunes': c.beginPath(); c.arc(0, 0, 0.22 * s, 0, 7); c.stroke(); c.beginPath(); c.arc(0, 0, 0.05 * s, 0, 7); c.fill(); break;
      case 'sepet': c.beginPath(); c.arc(0, -0.05 * s, 0.25 * s, 0, Math.PI); c.closePath(); c.stroke(); break;
      case 'tuy': c.beginPath(); c.ellipse(0, 0, 0.08 * s, 0.38 * s, 0.15, 0, 7); c.stroke(); break;
      case 'djed': L(0, -0.4, 0, 0.42); for (let i = 0; i < 3; i++) L(-0.2, -0.3 + i * 0.12, 0.2, -0.3 + i * 0.12); break;
      case 'ayak': c.beginPath(); c.moveTo(0, -0.38 * s); c.lineTo(0.02 * s, 0.3 * s); c.lineTo(0.3 * s, 0.32 * s); c.stroke(); break;
      case 'bocek': c.beginPath(); c.ellipse(0, 0.05 * s, 0.17 * s, 0.25 * s, 0, 0, 7); c.stroke(); L(-0.17, 0.05, -0.32, -0.08); L(0.17, 0.05, 0.32, -0.08); L(-0.15, 0.2, -0.3, 0.32); L(0.15, 0.2, 0.3, 0.32); break;
      case 'yildiz': star(0, 0, 0.3 * s); break;
    }
    c.restore();
  }
  function hieroColumn(x, y, len, s, seed, col = OUT, line = true) {
    if (line) { c.strokeStyle = 'rgba(42,26,14,0.35)'; c.lineWidth = 1; c.beginPath(); c.moveTo(x - s * 0.6, y); c.lineTo(x - s * 0.6, y + len); c.moveTo(x + s * 0.6, y); c.lineTo(x + s * 0.6, y + len); c.stroke(); }
    const n = Math.floor(len / (s * 1.15));
    for (let i = 0; i < n; i++) glyph(x, y + s * 0.6 + i * s * 1.15, s, GLYPHS[Math.floor(hash(seed + i * 3.7) * GLYPHS.length)], col);
  }
  function cartouche(x, y, w, h, seed, col = OUT) {
    c.strokeStyle = col; c.lineWidth = 1.6; c.beginPath(); c.roundRect(x - w / 2, y - h / 2, w, h, w / 2); c.stroke();
    c.beginPath(); c.moveTo(x - w * 0.35, y + h / 2 + 3); c.lineTo(x + w * 0.35, y + h / 2 + 3); c.stroke();
    for (let i = 0; i < 3; i++) glyph(x, y - h * 0.3 + i * h * 0.3, w * 0.6, ['gunes', 'ankh', 'baykus', 'su', 'kamis', 'yilan'][Math.floor(hash(seed + i) * 6)], col);
  }
  function frieze(x, y, w, h) { // kheker friz
    c.fillStyle = '#d9b273'; c.fillRect(x, y, w, h);
    const n = Math.max(6, Math.floor(w / (h * 0.7)));
    for (let i = 0; i < n; i++) { const xx = x + (i + 0.5) * w / n; poly([xx - h * 0.22, y + h, xx - h * 0.22, y + h * 0.3, xx, y + h * 0.05, xx + h * 0.22, y + h * 0.3, xx + h * 0.22, y + h], i % 3 === 0 ? '#2f8fa3' : i % 3 === 1 ? '#c0392b' : '#3a7a3a', 0.8); }
  }

  // ---------- yapıların içi ----------
  const IC = {};
  // her sahne: (W,H,t) -> çizer, noktaları {id: [x,y]} (piksel) döndürür
  IC.piramit = (W, H, t) => {
    const g0 = H * 0.8, L = W * 0.1, R = W * 0.9, ax = W * 0.5, ay = H * 0.08;
    let gr = c.createLinearGradient(0, 0, 0, g0); gr.addColorStop(0, '#78b2db'); gr.addColorStop(1, '#f5dfb2'); c.fillStyle = gr; c.fillRect(0, 0, W, g0);
    c.fillStyle = '#c9a46a'; c.fillRect(0, g0, W, H - g0); c.strokeStyle = 'rgba(90,60,30,0.3)'; for (let i = 1; i < 5; i++) { c.beginPath(); c.moveTo(0, g0 + i * (H - g0) / 5); c.lineTo(W, g0 + i * (H - g0) / 5); c.stroke(); }
    poly([L, g0, R, g0, ax, ay], '#e4c48a', 2);
    c.save(); c.beginPath(); c.moveTo(L, g0); c.lineTo(R, g0); c.lineTo(ax, ay); c.closePath(); c.clip();
    c.strokeStyle = 'rgba(90,60,30,0.14)'; c.lineWidth = 1; for (let y = g0; y > ay; y -= H * 0.025) { c.beginPath(); c.moveTo(0, y); c.lineTo(W, y); c.stroke(); }
    c.restore();
    const P = (fx, fy) => [L + (R - L) * fx, g0 - (g0 - ay) * fy];  // fx: soldan sağa (kuzey solda), fy: yükseklik oranı
    const line = (a, b, w = 4, col = '#3a2414') => { c.strokeStyle = col; c.lineWidth = w; c.beginPath(); c.moveTo(...a); c.lineTo(...b); c.stroke(); };
    const giris = P(0.43, 0.115), alt = P(0.5, -0.03), yer = P(0.53, -0.2), yer2 = P(0.6, -0.2);
    line(giris, P(0.5, -0.18)); line(P(0.5, -0.18), yer);
    c.fillStyle = '#5a3a22'; c.fillRect(yer[0], yer[1] - 8, yer2[0] - yer[0], 16);
    const yk = P(0.465, 0.06), gal0 = P(0.49, 0.15), gal1 = P(0.53, 0.33);
    line(yk, gal0, 4); line(gal0, gal1, 12, '#5a3a22');
    const kq = P(0.5, 0.155); line(gal0, kq, 3); c.fillStyle = '#5a3a22'; c.fillRect(kq[0] - 18, kq[1] - 12, 36, 14);
    const kr = P(0.555, 0.335); c.fillStyle = '#9b3b2e'; c.fillRect(kr[0] - 22, kr[1] - 14, 44, 16); c.strokeStyle = OUT; c.lineWidth = 1.5; c.strokeRect(kr[0] - 22, kr[1] - 14, 44, 16);
    c.fillStyle = '#5a5a5a'; c.fillRect(kr[0] + 6, kr[1] - 8, 12, 6);
    for (let i = 0; i < 5; i++) { c.strokeStyle = 'rgba(155,59,46,0.9)'; c.lineWidth = 2; c.beginPath(); c.moveTo(kr[0] - 20, kr[1] - 18 - i * 6); c.lineTo(kr[0] + 20, kr[1] - 18 - i * 6); c.stroke(); }
    c.setLineDash([3, 3]); c.strokeStyle = 'rgba(58,36,20,0.7)'; c.lineWidth = 1.5;
    c.beginPath(); c.moveTo(kr[0] - 18, kr[1] - 10); c.lineTo(...P(0.33, 0.53)); c.moveTo(kr[0] + 18, kr[1] - 10); c.lineTo(...P(0.72, 0.55)); c.moveTo(kq[0] - 14, kq[1] - 8); c.lineTo(...P(0.3, 0.42)); c.moveTo(kq[0] + 14, kq[1] - 8); c.lineTo(...P(0.7, 0.4)); c.stroke();
    c.setLineDash([8, 5]); c.strokeStyle = 'rgba(255,255,255,0.9)'; c.lineWidth = 3; c.beginPath(); c.moveTo(...P(0.5, 0.22)); c.lineTo(...P(0.54, 0.31)); c.stroke(); c.setLineDash([]);
    c.fillStyle = OUT; c.font = `600 ${Math.round(Math.max(11, W / 70))}px system-ui`; c.textAlign = 'center';
    c.fillText('Kuzey ←', W * 0.06, g0 - 6); c.fillText('→ Güney', W * 0.94, g0 - 6);
    return { giris, yeralti: [yer[0] + 20, yer[1]], kralice: kq, galeri: [(gal0[0] + gal1[0]) / 2, (gal0[1] + gal1[1]) / 2], kral: kr, yuk: [kr[0], kr[1] - 34], kanal: P(0.68, 0.48), bosluk: P(0.515, 0.26) };
  };
  IC.amduat = (W, H, t) => {
    c.fillStyle = '#ecd9a6'; c.fillRect(0, 0, W, H);
    c.fillStyle = '#1f3f7a'; c.fillRect(0, 0, W, H * 0.09); c.fillStyle = '#f2c94c'; for (let i = 0; i < 40; i++) star((i + 0.5) * W / 40, H * 0.045, Math.min(W, H) * 0.012);
    const r = [H * 0.12, H * 0.38, H * 0.66, H * 0.93];
    c.strokeStyle = OUT; c.lineWidth = 2; for (const y of r) { c.beginPath(); c.moveTo(0, y); c.lineTo(W, y); c.stroke(); }
    const fh = (r[1] - r[0]) * 0.8;
    for (let i = 0; i < 9; i++) fig(W * 0.24 + i * W * 0.08, r[1] - 4, fh, { bas: ['insan', 'sahin', 'insan', 'cakal', 'kadin', 'insan', 'timsah', 'insan', 'kadin'][i], ten: '#b5653a', tanri: true, dir: -1 });
    for (let i = 0; i < 6; i++) hieroColumn(W * 0.04 + i * W * 0.03, r[0] + 6, r[1] - r[0] - 12, Math.min(16, W * 0.018), i * 11);
    // kayık
    const by = r[2] - (r[2] - r[1]) * 0.18, bx = W * 0.5;
    c.fillStyle = '#c99a5c'; c.strokeStyle = OUT; c.lineWidth = 2; c.beginPath(); c.moveTo(bx - W * 0.2, by - 18); c.quadraticCurveTo(bx, by + 18, bx + W * 0.2, by - 18); c.lineTo(bx + W * 0.18, by - 8); c.quadraticCurveTo(bx, by + 6, bx - W * 0.18, by - 8); c.closePath(); c.fill(); c.stroke();
    poly([bx - 30, by - 4, bx + 30, by - 4, bx + 30, by - fh * 0.9, bx - 30, by - fh * 0.9], 'rgba(242,201,76,0.35)', 1.6);
    c.strokeStyle = '#3f7a2a'; c.lineWidth = 3; c.beginPath(); c.moveTo(bx - 34, by - 6); c.quadraticCurveTo(bx - 40, by - fh, bx, by - fh * 0.98); c.quadraticCurveTo(bx + 40, by - fh, bx + 34, by - 6); c.stroke();
    fig(bx - 4, by - 6, fh * 0.78, { bas: 'insan', tac: 'gunes', ten: '#4f9a5a', tanri: true, tutar: 'was', dir: 1 });
    poly([bx + 4, by - fh * 0.68, bx + 16, by - fh * 0.66, bx + 12, by - fh * 0.6], '#d9d0b8', 1.2);
    for (let i = 0; i < 3; i++) fig(bx - W * 0.15 + i * 26, by - 8, fh * 0.6, { bas: 'insan', ten: '#b5653a', tanri: true, dir: 1 });
    c.strokeStyle = '#6b4a2a'; c.lineWidth = 2; c.beginPath(); c.moveTo(bx + W * 0.19, by - 16); c.lineTo(W * 0.95, by - fh * 0.5); c.stroke();
    for (let i = 0; i < 4; i++) fig(W * 0.76 + i * W * 0.05, by - 2, fh * 0.7, { bas: 'insan', ten: '#b5653a', tanri: true, tutar: 'cek', dir: 1 });
    // Apep
    const ay = r[3] - (r[3] - r[2]) * 0.45;
    c.strokeStyle = OUT; c.lineWidth = 12; c.beginPath(); for (let x = W * 0.15; x <= W * 0.85; x += 6) c.lineTo(x, ay + Math.sin(x / 26 + t) * 14); c.stroke();
    c.strokeStyle = '#8a6a3a'; c.lineWidth = 8; c.beginPath(); for (let x = W * 0.15; x <= W * 0.85; x += 6) c.lineTo(x, ay + Math.sin(x / 26 + t) * 14); c.stroke();
    ell(W * 0.86, ay + Math.sin(W * 0.85 / 26 + t) * 14, 14, 8, 0, '#8a6a3a', 2);
    for (let i = 0; i < 5; i++) { const kx = W * 0.25 + i * W * 0.12; poly([kx, ay - 22, kx + 4, ay - 22, kx + 2, ay + 6], '#c9c9c9', 1); }
    fig(W * 0.1, r[3] - 4, (r[3] - r[2]) * 0.8, { bas: 'insan', ten: '#b5653a', tanri: true, tutar: 'cek', dir: 1 });
    cartouche(W * 0.05, (r[2] + r[3]) / 2, Math.min(28, W * 0.035), (r[3] - r[2]) * 0.7, 3);
    return { kayik: [bx - W * 0.12, by], ra: [bx, by - fh * 0.5], cekenler: [W * 0.84, by - fh * 0.3], apep: [W * 0.5, ay], saatler: [W * 0.6, (r[0] + r[1]) / 2], yazi: [W * 0.1, (r[0] + r[1]) / 2], kartus: [W * 0.05, (r[2] + r[3]) / 2] };
  };
  IC.kalp = (W, H, t) => {
    c.fillStyle = '#efe0bd'; c.fillRect(0, 0, W, H); frieze(0, 0, W, H * 0.06);
    const top = H * 0.08, row = H * 0.24, base = H * 0.9;
    c.strokeStyle = OUT; c.lineWidth = 2; c.beginPath(); c.moveTo(0, top + row); c.lineTo(W, top + row); c.moveTo(0, base); c.lineTo(W, base); c.stroke();
    for (let i = 0; i < 12; i++) { const x = W * 0.08 + i * W * 0.07; poly([x - 8, top + row - 4, x + 10, top + row - 4, x + 10, top + row - 18, x - 8, top + row - 18], '#c99a5c', 1); fig(x, top + row - 14, row * 0.55, { bas: i % 3 ? 'insan' : 'sahin', ten: '#b5653a', tanri: true, tac: i % 4 === 0 ? 'tuy' : undefined, dir: 1 }); }
    const fh = Math.min((base - top - row) * 0.66, W * 0.13);
    for (let i = 0; i < 10; i++) hieroColumn(W * 0.06 + i * W * 0.025, top + row + 8, (base - top - row) * 0.25, Math.min(14, W * 0.016), 40 + i * 5);
    fig(W * 0.06, base - 4, fh, { bas: 'insan', ten: '#b5653a', dir: 1, tutar: 'yukari' });
    fig(W * 0.12, base - 4, fh * 0.95, { bas: 'kadin', ten: '#d9a35f', dir: 1 });
    fig(W * 0.21, base - 4, fh, { bas: 'cakal', ten: '#b5653a', tanri: true, tutar: 'ankh', dir: 1 });
    // terazi
    const sx = W * 0.36, sy = base - fh * 0.92, tilt = Math.sin(t * 1.6) * 0.06;
    limb(sx, base - 4, sx, sy, 4, '#c99a5c');
    c.save(); c.translate(sx, sy); c.rotate(tilt); limb(-W * 0.07, 0, W * 0.07, 0, 3, '#c99a5c');
    for (const sd of [-1, 1]) { c.strokeStyle = OUT; c.lineWidth = 1; c.beginPath(); c.moveTo(sd * W * 0.07, 0); c.lineTo(sd * W * 0.07 - 12, 30); c.moveTo(sd * W * 0.07, 0); c.lineTo(sd * W * 0.07 + 12, 30); c.stroke(); ell(sd * W * 0.07, 32, 16, 4, 0, GOLD, 1.2); }
    c.restore();
    const lp = [sx - W * 0.07 * Math.cos(tilt), sy - W * 0.07 * Math.sin(tilt) + 26], rp = [sx + W * 0.07 * Math.cos(tilt), sy + W * 0.07 * Math.sin(tilt) + 26];
    ell(lp[0], lp[1], 6, 8, 0, '#a83a2a', 1.2); feather(rp[0], rp[1] + 6, 20);
    fig(sx + 6, base - 4, fh * 0.55, { bas: 'cakal', ten: '#b5653a', tanri: true, dir: -1, tutar: 'cek' });
    // Ammit
    const amx = W * 0.5, amy = base - 6;
    ell(amx, amy - 22, 26, 14, 0, '#d9a35f', 1.6); ell(amx - 20, amy - 24, 12, 13, 0, '#9a6a4a', 1.4);
    poly([amx + 18, amy - 30, amx + 46, amy - 34, amx + 46, amy - 26, amx + 22, amy - 22], '#5a7a3a', 1.4);
    limb(amx - 14, amy - 12, amx - 14, amy, 5, '#d9a35f'); limb(amx + 12, amy - 12, amx + 12, amy, 5, '#d9a35f');
    fig(W * 0.6, base - 4, fh, { bas: 'ibis', ten: '#b5653a', tanri: true, tutar: 'kalem', dir: -1 });
    fig(W * 0.68, base - 4, fh, { bas: 'sahin', tac: 'cift', ten: '#b5653a', tanri: true, tutar: 'ankh', dir: 1 });
    // Osiris tahtta
    const ox = W * 0.83;
    poly([ox - 30, base - 4, ox + 50, base - 4, ox + 46, base - fh * 1.18, ox - 30, base - fh * 1.18], 'rgba(242,201,76,0.25)', 1.6);
    poly([ox - 6, base - 4, ox + 14, base - 4, ox + 14, base - fh * 0.38, ox - 6, base - fh * 0.38], '#2f8fa3', 1.2);
    fig(ox + 4, base - fh * 0.12, fh * 0.92, { bas: 'insan', tac: 'atef', ten: GREEN, govde: 'mumya', tutar: 'asa', tanri: true, sakal: true, dir: -1 });
    fig(ox + 30, base - 4, fh * 0.92, { bas: 'kadin', tac: 'taht', ten: '#d9a35f', tanri: true, dir: -1 });
    return { olu: [W * 0.08, base - fh * 0.6], anubis: [W * 0.21, base - fh * 0.75], terazi: [sx, sy + 18], ammit: [amx, amy - 30], thot: [W * 0.6, base - fh * 0.7], horus: [W * 0.68, base - fh * 0.75], osiris: [ox + 4, base - fh * 0.7], yargiclar: [W * 0.45, top + row * 0.55], yazi: [W * 0.18, top + row + fh * 0.15] };
  };
  IC.metinler = (W, H, t) => {
    c.fillStyle = '#1f3f7a'; c.fillRect(0, 0, W, H * 0.16);
    c.fillStyle = '#f2c94c'; for (let i = 0; i < 70; i++) star(hash(i) * W, hash(i + 70) * H * 0.15, Math.min(W, H) * 0.012);
    c.fillStyle = '#efe9da'; c.fillRect(0, H * 0.16, W, H * 0.84);
    const s = Math.min(18, W / 46), cols = Math.floor(W * 0.68 / (s * 1.35));
    for (let i = 0; i < cols; i++) hieroColumn(W * 0.03 + i * s * 1.35, H * 0.19, H * 0.74, s, 200 + i * 9, '#1f4f9a');
    for (let i = 0; i < 3; i++) cartouche(W * 0.12 + i * W * 0.2, H * 0.5 + (i % 2) * H * 0.18, s * 1.2, s * 3.6, 77, '#1f4f9a');
    const px = W * 0.74;
    for (let i = 0; i < 7; i++) poly([px + i * W * 0.035, H * 0.92, px + (i + 1) * W * 0.035 - 3, H * 0.92, px + (i + 1) * W * 0.035 - 3, H * 0.3, px + i * W * 0.035, H * 0.3], ['#c0392b', '#2f8fa3', '#e9d9b0', '#3a7a3a'][i % 4], 1);
    poly([px + W * 0.02, H * 0.95, px + W * 0.22, H * 0.95, px + W * 0.22, H * 0.74, px + W * 0.02, H * 0.74], '#2a2a2a', 2);
    return { sutunlar: [W * 0.3, H * 0.35], tavan: [W * 0.5, H * 0.08], lahit: [px + W * 0.12, H * 0.84], saray: [px + W * 0.12, H * 0.45], kartus: [W * 0.12, H * 0.5], yamyam: [W * 0.55, H * 0.7] };
  };
  IC.mastaba = (W, H, t) => {
    c.fillStyle = '#e8d3a7'; c.fillRect(0, 0, W, H); frieze(0, 0, W, H * 0.05);
    const rs = [H * 0.06, H * 0.29, H * 0.52, H * 0.75, H * 0.98];
    c.strokeStyle = OUT; c.lineWidth = 2; for (const y of rs) { c.beginPath(); c.moveTo(W * 0.2, y); c.lineTo(W, y); c.stroke(); }
    const rh = rs[1] - rs[0];
    // mezar sahibi
    fig(W * 0.1, H * 0.97, H * 0.85, { bas: 'insan', ten: '#b5653a', tutar: 'was', uzunPeruk: true, dir: 1 });
    // 1: tarım
    for (let i = 0; i < 2; i++) cow(W * 0.3 + i * 18, rs[1] - 4, rh * 0.5, '#c99061');
    fig(W * 0.43, rs[1] - 4, rh * 0.8, { bas: 'insan', ten: '#b5653a', tutar: 'cek', dir: 1 });
    fig(W * 0.55, rs[1] - 4, rh * 0.8, { bas: 'insan', ten: '#b5653a', dir: 1 });
    for (let i = 0; i < 3; i++) fig(W * 0.72 + i * W * 0.08, rs[1] - 4, rh * 0.8, { bas: 'insan', ten: '#b5653a', tutar: 'cek', dir: 1 });
    // 2: su ve sığırlar
    c.fillStyle = 'rgba(47,95,168,0.5)'; c.fillRect(W * 0.2, rs[2] - rh * 0.3, W * 0.8, rh * 0.3);
    c.strokeStyle = BLUE; c.lineWidth = 1.5; for (let i = 0; i < 40; i++) { const x = W * 0.21 + i * W * 0.02; c.beginPath(); c.moveTo(x, rs[2] - rh * 0.2); c.lineTo(x + 6, rs[2] - rh * 0.26); c.lineTo(x + 12, rs[2] - rh * 0.2); c.stroke(); }
    for (let i = 0; i < 4; i++) cow(W * 0.35 + i * W * 0.11, rs[2] - rh * 0.1, rh * 0.55, i % 2 ? '#f0ebe0' : '#9a6a4a');
    fig(W * 0.26, rs[2] - 4, rh * 0.8, { bas: 'insan', ten: '#b5653a', dir: 1 }); cow(W * 0.27, rs[2] - rh * 0.55, rh * 0.25, '#f0ebe0');
    // 3: fırın, zanaat
    for (let i = 0; i < 3; i++) { fig(W * 0.28 + i * W * 0.07, rs[3] - 4, rh * 0.8, { bas: 'insan', ten: '#b5653a', dir: 1 }); }
    poly([W * 0.5, rs[3] - 4, W * 0.56, rs[3] - 4, W * 0.555, rs[3] - rh * 0.5, W * 0.505, rs[3] - rh * 0.5], '#8a5a3a', 1.4);
    for (let i = 0; i < 4; i++) ell(W * 0.6 + i * 14, rs[3] - rh * 0.25, 6, rh * 0.22, 0, '#b5562f', 1.2);
    fig(W * 0.8, rs[3] - 4, rh * 0.85, { bas: 'insan', ten: '#b5653a', tutar: 'yukari', dir: -1 });
    poly([W * 0.86, rs[3] - 4, W * 0.9, rs[3] - 4, W * 0.9, rs[3] - rh * 0.8, W * 0.86, rs[3] - rh * 0.8], '#e9d9b0', 1.4);
    // 4: bataklıkta av
    c.fillStyle = 'rgba(47,95,168,0.5)'; c.fillRect(W * 0.2, rs[4] - rh * 0.25, W * 0.8, rh * 0.25);
    for (let i = 0; i < 26; i++) { const x = W * 0.62 + i * W * 0.014; c.strokeStyle = '#3f7a2a'; c.lineWidth = 2; c.beginPath(); c.moveTo(x, rs[4] - 4); c.lineTo(x, rs[3] + 8); c.stroke(); ell(x, rs[3] + 8, 5, 3, 0, '#5f9e43', 1); }
    c.fillStyle = '#c7b455'; c.beginPath(); c.moveTo(W * 0.3, rs[4] - rh * 0.3); c.quadraticCurveTo(W * 0.42, rs[4] - rh * 0.1, W * 0.54, rs[4] - rh * 0.34); c.lineTo(W * 0.52, rs[4] - rh * 0.25); c.quadraticCurveTo(W * 0.42, rs[4] - rh * 0.02, W * 0.32, rs[4] - rh * 0.22); c.closePath(); c.fill(); c.stroke();
    fig(W * 0.42, rs[4] - rh * 0.22, rh * 0.95, { bas: 'insan', ten: '#b5653a', tutar: 'cek', dir: 1 });
    ell(W * 0.58, rs[4] - rh * 0.12, 22, 9, 0, '#8a6a7a', 1.4);
    return { tarla: [W * 0.4, rs[0] + rh * 0.5], hayvan: [W * 0.5, rs[1] + rh * 0.55], firin: [W * 0.53, rs[2] + rh * 0.55], zanaat: [W * 0.84, rs[2] + rh * 0.45], av: [W * 0.48, rs[3] + rh * 0.55], sunu: [W * 0.66, rs[0] + rh * 0.45], sahip: [W * 0.1, H * 0.45] };
  };
  IC.punt = (W, H, t) => {
    c.fillStyle = '#e6cf9e'; c.fillRect(0, 0, W, H); frieze(0, 0, W, H * 0.05);
    for (let i = 0; i < 14; i++) hieroColumn(W * 0.05 + i * W * 0.03, H * 0.08, H * 0.2, Math.min(15, W / 60), 300 + i);
    const sea = H * 0.72;
    c.fillStyle = '#3d7fb0'; c.fillRect(0, sea, W, H - sea);
    for (let i = 0; i < 14; i++) { const fx = hash(i) * W * 0.6 + W * 0.05, fy = sea + 14 + hash(i + 9) * (H - sea - 24); ell(fx + Math.sin(t + i) * 4, fy, 10, 5, 0, ['#e8b923', '#c0392b', '#f4eedf'][i % 3], 1); poly([fx - 10, fy, fx - 16, fy - 5, fx - 16, fy + 5], ['#e8b923', '#c0392b', '#f4eedf'][i % 3], 1); }
    for (let s = 0; s < 2; s++) {
      const bx = W * (0.16 + s * 0.27), by = sea + 6;
      c.fillStyle = '#c99a5c'; c.strokeStyle = OUT; c.lineWidth = 2; c.beginPath(); c.moveTo(bx - W * 0.12, by - 24); c.quadraticCurveTo(bx, by + 14, bx + W * 0.12, by - 30); c.lineTo(bx + W * 0.1, by - 14); c.quadraticCurveTo(bx, by, bx - W * 0.1, by - 12); c.closePath(); c.fill(); c.stroke();
      limb(bx, by - 10, bx, by - H * 0.4, 2.2, '#6b4a2a');
      poly([bx - W * 0.09, by - H * 0.38, bx + W * 0.09, by - H * 0.38, bx + W * 0.085, by - H * 0.24, bx - W * 0.085, by - H * 0.24], '#f4eedf', 1.6);
      for (let i = 0; i < 3; i++) { const tx = bx - W * 0.07 + i * W * 0.05; poly([tx - 9, by - 14, tx + 9, by - 14, tx + 7, by - 30, tx - 7, by - 30], '#c99a5c', 1); ell(tx, by - 44, 12, 14, 0, '#3f7a2a', 1.2); }
      ell(bx + 10, by - H * 0.3 + Math.sin(t * 2 + s) * 3, 6, 8, 0, '#8a7a6a', 1);
      for (let i = 0; i < 8; i++) { c.strokeStyle = '#6b4a2a'; c.lineWidth = 1.6; c.beginPath(); c.moveTo(bx - W * 0.09 + i * W * 0.025, by - 10); c.lineTo(bx - W * 0.1 + i * W * 0.025 - Math.sin(t * 2 + i) * 6, by + 14); c.stroke(); }
    }
    const vx = W * 0.72;
    for (let i = 0; i < 3; i++) { const hx = vx + i * W * 0.07, hy = sea - 2; limb(hx - 10, hy, hx - 10, hy - 28, 2, '#6b4a2a'); limb(hx + 10, hy, hx + 10, hy - 28, 2, '#6b4a2a'); c.fillStyle = '#c4985c'; c.beginPath(); c.arc(hx, hy - 28, 18, Math.PI, 0); c.closePath(); c.fill(); c.stroke(); }
    for (let i = 0; i < 3; i++) { const px = vx - W * 0.03 + i * W * 0.1; limb(px, sea - 2, px + 4, sea - H * 0.32, 3, '#8a6136'); for (let j = 0; j < 6; j++) { c.strokeStyle = '#4f8a3a'; c.lineWidth = 3; c.beginPath(); c.moveTo(px + 4, sea - H * 0.32); c.quadraticCurveTo(px + 4 + Math.cos(j) * 20, sea - H * 0.36, px + 4 + Math.cos(j) * 34, sea - H * 0.28); c.stroke(); } }
    fig(W * 0.9, sea - 2, H * 0.3, { bas: 'insan', ten: '#9a5a3a', dir: -1, sakal: true });
    c.save(); c.translate(W * 0.955, sea - 2); ell(0, -H * 0.12, W * 0.025, H * 0.1, 0, '#9a5a3a', 1.4); ell(0, -H * 0.25, W * 0.012, H * 0.03, 0, '#9a5a3a', 1.2); c.restore();
    return { gemi: [W * 0.16, sea - H * 0.3], agac: [W * 0.4, sea - 40], babun: [W * 0.27, sea - H * 0.32], ev: [vx + W * 0.07, sea - 30], kralice: [W * 0.955, sea - H * 0.14], balik: [W * 0.3, sea + (H - sea) / 2], yazi: [W * 0.25, H * 0.17] };
  };
  IC.kades = (W, H, t) => {
    c.fillStyle = '#e3c897'; c.fillRect(0, 0, W, H); frieze(0, 0, W, H * 0.05);
    for (let i = 0; i < 18; i++) hieroColumn(W * 0.04 + i * W * 0.025, H * 0.07, H * 0.16, Math.min(14, W / 70), 500 + i);
    // Kadeş kalesi ve nehir
    c.fillStyle = 'rgba(47,95,168,0.55)'; c.beginPath(); c.ellipse(W * 0.14, H * 0.5, W * 0.12, H * 0.2, 0, 0, 7); c.fill();
    poly([W * 0.07, H * 0.62, W * 0.21, H * 0.62, W * 0.21, H * 0.38, W * 0.07, H * 0.38], '#c9a46a', 1.8);
    for (let i = 0; i < 6; i++) poly([W * 0.07 + i * W * 0.024, H * 0.38, W * 0.085 + i * W * 0.024, H * 0.38, W * 0.085 + i * W * 0.024, H * 0.35, W * 0.07 + i * W * 0.024, H * 0.35], '#c9a46a', 1);
    c.fillStyle = 'rgba(47,95,168,0.55)'; c.fillRect(W * 0.27, H * 0.25, W * 0.06, H * 0.72);
    for (let i = 0; i < 6; i++) { c.save(); c.translate(W * 0.29 + (i % 2) * W * 0.02, H * 0.32 + i * H * 0.1); c.rotate(1.2 + i); fig(0, 0, H * 0.12, { bas: 'insan', ten: '#d9a35f' }); c.restore(); }
    // Hitit arabaları
    for (let i = 0; i < 3; i++) { const hx = W * 0.4 + i * W * 0.08, hy = H * 0.5 + (i % 2) * H * 0.2; chariotFlat(hx, hy, H * 0.12, -1, 3, t + i); }
    // Ramses
    chariotFlat(W * 0.78, H * 0.9, H * 0.3, -1, 1, t, true);
    fig(W * 0.95, H * 0.5, H * 0.14, { bas: 'insan', ten: '#b5653a', dir: -1, tutar: 'yukari' });
    fig(W * 0.97, H * 0.5, H * 0.14, { bas: 'insan', ten: '#d9a35f', dir: -1 });
    return { kral: [W * 0.76, H * 0.55], hitit: [W * 0.48, H * 0.56], nehir: [W * 0.3, H * 0.75], kale: [W * 0.14, H * 0.5], casus: [W * 0.96, H * 0.44], yazi: [W * 0.25, H * 0.15] };
  };
  function chariotFlat(x, y, h, d, crew, t, king) {
    c.save(); c.translate(x, y); c.scale(d, 1);
    const k = h / 100;
    for (let j = 0; j < 2; j++) { c.save(); c.translate(-j * 6 * k, -j * 3 * k); horseFlat(30 * k, 0, k, t, j ? '#6e4426' : (king ? '#d9b273' : '#8a5a33')); c.restore(); }
    circ(-34 * k, -16 * k, 16 * k, '#c99a5c', 1.6);
    c.strokeStyle = OUT; c.lineWidth = 1.2; for (let i = 0; i < 3; i++) { const a = i * Math.PI / 3 + t; c.beginPath(); c.moveTo(-34 * k - Math.cos(a) * 15 * k, -16 * k - Math.sin(a) * 15 * k); c.lineTo(-34 * k + Math.cos(a) * 15 * k, -16 * k + Math.sin(a) * 15 * k); c.stroke(); }
    poly([-50 * k, -18 * k, -22 * k, -18 * k, -22 * k, -40 * k, -48 * k, -36 * k], king ? GOLD : '#c99a5c', 1.4);
    c.restore();
    if (king) fig(x - d * 34 * k, y - 20 * k, h * 0.95, { bas: 'insan', tac: 'mavi', ten: RED, tutar: 'ok', dir: d, kral: true });
    else for (let i = 0; i < crew; i++) fig(x - d * (40 - i * 8) * k, y - 20 * k, h * 0.6, { bas: 'insan', ten: '#d9a35f', dir: d, peruk: '#3a2a1a' });
  }
  function horseFlat(x, y, k, t, col) {
    const sw = Math.sin(t * 6) * 0.5;
    limb(x - 16 * k, y - 26 * k, x - 22 * k + sw * 8 * k, y, 3 * k + 1, col); limb(x + 14 * k, y - 26 * k, x + 24 * k - sw * 8 * k, y - 4 * k, 3 * k + 1, col);
    ell(x, y - 32 * k, 22 * k, 9 * k, 0, col, 1.4);
    poly([x + 14 * k, y - 36 * k, x + 26 * k, y - 54 * k, x + 34 * k, y - 50 * k, x + 22 * k, y - 30 * k], col, 1.4);
    ell(x + 33 * k, y - 50 * k, 8 * k, 4 * k, 0.55, col, 1.2);
    poly([x + 26 * k, y - 56 * k, x + 24 * k, y - 66 * k, x + 30 * k, y - 58 * k], '#d9473a', 1);
  }
  IC.sunu = (W, H, t) => {
    c.fillStyle = '#e6cfa0'; c.fillRect(0, 0, W, H);
    for (const sx of [W * 0.06, W * 0.94]) { poly([sx - W * 0.035, H, sx + W * 0.035, H, sx + W * 0.03, H * 0.12, sx - W * 0.03, H * 0.12], '#d9bd88', 1.6); poly([sx - W * 0.05, H * 0.12, sx + W * 0.05, H * 0.12, sx + W * 0.03, H * 0.2, sx - W * 0.03, H * 0.2], '#3a7a3a', 1.4); for (let i = 0; i < 4; i++) { c.fillStyle = ['#c0392b', '#2f8fa3', '#e8b923', '#3a7a3a'][i]; c.fillRect(sx - W * 0.03, H * (0.3 + i * 0.03), W * 0.06, H * 0.012); } }
    // kanatlı güneş
    const gx = W * 0.5, gy = H * 0.12;
    for (const sd of [-1, 1]) { for (let i = 0; i < 4; i++) poly([gx + sd * 14, gy - 6 + i * 4, gx + sd * W * (0.22 - i * 0.03), gy - 8 + i * 6, gx + sd * W * (0.22 - i * 0.03), gy - 2 + i * 6, gx + sd * 14, gy + 2 + i * 4], ['#2f8fa3', '#c0392b', '#e8b923', '#2f5fa8'][i], 1); }
    circ(gx, gy, 14, '#d9473a', 1.6);
    for (const sd of [-1, 1]) { c.save(); c.translate(gx + sd * 18, gy + 6); poly([0, 0, sd * 3, -10, sd * 6, 0], GOLD, 1); c.restore(); }
    const base = H * 0.95, fh = H * 0.62;
    fig(W * 0.3, base, fh, { bas: 'insan', tac: 'nemes', ten: RED, tutar: 'maat', dir: 1, kral: true });
    fig(W * 0.68, base, fh * 1.05, { bas: 'insan', tac: 'tuyler', ten: '#3d6fb5', tanri: true, tutar: 'ankh', sakal: true, dir: -1 });
    cartouche(W * 0.22, H * 0.36, Math.min(30, W * 0.04), H * 0.18, 11, '#2f5fa8'); cartouche(W * 0.28, H * 0.36, Math.min(30, W * 0.04), H * 0.18, 23, '#2f5fa8');
    for (let i = 0; i < 4; i++) hieroColumn(W * 0.44 + i * W * 0.035, H * 0.26, H * 0.5, Math.min(16, W / 50), 600 + i, '#2f5fa8');
    for (let i = 0; i < 3; i++) hieroColumn(W * 0.78 + i * W * 0.035, H * 0.26, H * 0.4, Math.min(16, W / 50), 700 + i, '#c0392b');
    return { kral: [W * 0.3, base - fh * 0.6], maat: [W * 0.37, base - fh * 0.7], tanri: [W * 0.68, base - fh * 0.6], gunes: [gx, gy], kartus: [W * 0.25, H * 0.36], sutun: [W * 0.06, H * 0.55], yazi: [W * 0.5, H * 0.5] };
  };
  function cow(x, y, h, col) {
    const k = h / 30;
    c.save(); c.translate(x, y); c.scale(k, k);
    limb(-10, -12, -11, 0, 2.6, col); limb(9, -12, 10, 0, 2.6, col);
    ell(0, -16, 14, 7, 0, col, 1.2); ell(15, -20, 5, 4, 0.4, col, 1.1);
    c.strokeStyle = OUT; c.lineWidth = 1.6; c.beginPath(); c.moveTo(14, -24); c.quadraticCurveTo(10, -32, 15, -34); c.moveTo(17, -24); c.quadraticCurveTo(22, -31, 19, -34); c.stroke();
    c.restore();
  }
  function drawIc(ctx, id, W, H, t) { c = ctx; c.save(); c.lineJoin = 'round'; const pts = (IC[id] || IC.sunu)(W, H, t); c.restore(); return pts; }

  // ---------- mumya ve lahit animasyonu ----------
  function drawMummy(ctx, W, H, t, tur) {
    c = ctx; const cx = W / 2, cy = H * 0.55;
    const bg = c.createRadialGradient(cx, cy, 10, cx, cy, Math.max(W, H) * 0.7); bg.addColorStop(0, '#5a4028'); bg.addColorStop(1, '#140c06');
    c.fillStyle = bg; c.fillRect(0, 0, W, H);
    const fl = 0.85 + Math.sin(t * 13) * 0.05 + Math.sin(t * 7) * 0.05;
    const tg = c.createRadialGradient(W * 0.1, H * 0.2, 0, W * 0.1, H * 0.2, W * 0.6); tg.addColorStop(0, `rgba(255,190,90,${0.35 * fl})`); tg.addColorStop(1, 'rgba(255,190,90,0)');
    c.fillStyle = tg; c.fillRect(0, 0, W, H);
    limb(W * 0.08, H * 0.32, W * 0.1, H * 0.2, 4, '#6b4a2a'); circ(W * 0.1, H * 0.18, 6 * fl, '#ffb347', 0);
    if (tur === 'bilinmiyor') {
      c.fillStyle = '#c9a46a'; c.beginPath(); c.moveTo(0, H); c.quadraticCurveTo(W * 0.3, H * 0.55, W * 0.6, H * 0.8); c.quadraticCurveTo(W * 0.8, H * 0.6, W, H * 0.75); c.lineTo(W, H); c.fill();
      c.fillStyle = '#f3e4c2'; c.font = `800 ${Math.round(H * 0.25)}px Georgia`; c.textAlign = 'center'; c.fillText('?', cx, cy);
      c.font = `600 ${Math.round(H * 0.05)}px system-ui`; c.fillText('Mezarı bugüne kadar bulunamadı', cx, H * 0.9); return;
    }
    const L = Math.min(W * 0.8, H * 1.3), Wd = L * 0.36;     // lahit (üstten bakış)
    const T = t % 11, lidP = clamp((T - 1.2) / 1.8), cofP = clamp((T - 3.4) / 1.4), openP = clamp((T - 5.6) / 1.6);
    const x0 = cx - L / 2, y0 = cy - Wd / 2;
    const stone = tur === 'tas' || tur === 'bos' ? '#8a3b30' : '#8c8478';
    poly([x0, y0, x0 + L, y0, x0 + L, y0 + Wd, x0, y0 + Wd], stone, 2);
    poly([x0 + 10, y0 + 10, x0 + L - 10, y0 + 10, x0 + L - 10, y0 + Wd - 10, x0 + 10, y0 + Wd - 10], '#2a1e14', 1.2);
    // içerik
    c.save(); c.beginPath(); c.rect(x0 + 10, y0 + 10, L - 20, Wd - 20); c.clip();
    if (tur === 'bos') { c.fillStyle = 'rgba(200,170,120,0.25)'; for (let i = 0; i < 30; i++) circ(x0 + 20 + hash(i) * (L - 40), y0 + 20 + hash(i + 3) * (Wd - 40), 1.5, 'rgba(200,170,120,0.4)', 0); }
    else {
      const a = cofP;
      c.globalAlpha = 0.3 + 0.7 * a;
      if (tur !== 'tas') coffinTop(cx, cy, L * 0.86, Wd * 0.72, tur, openP);
      else mummyTop(cx, cy, L * 0.8, Wd * 0.6, false);
      c.globalAlpha = 1;
    }
    c.restore();
    // kapak kayıyor
    const lx = x0 + lidP * L * 1.05, ly = y0 - lidP * Wd * 0.25;
    c.save(); c.globalAlpha = 1 - clamp((lidP - 0.85) / 0.15) * 0.0;
    poly([lx - 4, ly - 4, lx + L + 4, ly - 4, lx + L + 4, ly + Wd + 4, lx - 4, ly + Wd + 4], tur === 'tas' || tur === 'bos' ? '#9b4a3c' : '#a39a8c', 2);
    c.fillStyle = 'rgba(42,26,14,0.5)'; c.font = `${Math.round(Wd * 0.18)}px Georgia`; c.textAlign = 'center';
    for (let i = 0; i < 3; i++) c.fillText('☥', lx + L * (0.25 + i * 0.25), ly + Wd * 0.6);
    c.restore();
    // açıklama
    c.fillStyle = '#f3e4c2'; c.font = `600 ${Math.round(Math.max(12, H * 0.045))}px system-ui`; c.textAlign = 'center';
    const msg = T < 1.2 ? 'Mezar odası: taş lahit' : T < 3.4 ? 'Lahdin kapağı açılıyor…' : tur === 'bos' ? 'Lahit boş!' : T < 5.6 ? (tur === 'tas' ? 'Mumya (tabutsuz bulundu)' : 'İnsan biçimli tabut') : (tur === 'tas' ? 'Keten sargılı mumya' : 'Tabutun içinde: keten sargılı mumya');
    c.fillText(msg, cx, H * 0.93);
  }
  function coffinTop(cx, cy, L, Wd, tur, openP) {
    const col = tur === 'altin' ? GOLD : tur === 'gumus' ? '#c9ccd2' : '#c99a5c', dark = tur === 'altin' ? '#2f5fa8' : tur === 'gumus' ? '#7a8088' : '#2a1e14';
    const head = cx - L / 2 + L * 0.13;
    const shape = () => { c.beginPath(); c.ellipse(head, cy, L * 0.13, Wd * 0.46, 0, Math.PI / 2, Math.PI * 1.5); c.lineTo(cx + L * 0.38, cy - Wd * 0.38); c.quadraticCurveTo(cx + L * 0.5, cy - Wd * 0.25, cx + L * 0.5, cy); c.quadraticCurveTo(cx + L * 0.5, cy + Wd * 0.25, cx + L * 0.38, cy + Wd * 0.38); c.closePath(); };
    // önce mumya (tabut açılınca görünür)
    mummyTop(cx, cy, L * 0.92, Wd * 0.8, tur === 'altin' || tur === 'gumus');
    c.save(); c.translate(0, -openP * Wd * 1.2); c.globalAlpha *= 1 - openP * 0.85;
    shape(); c.fillStyle = col; c.fill(); c.strokeStyle = OUT; c.lineWidth = 2; c.stroke();
    // tüy deseni (rishi)
    c.save(); shape(); c.clip();
    c.strokeStyle = dark; c.lineWidth = 1.2;
    for (let i = 0; i < 22; i++) { const x = head + L * 0.12 + i * L * 0.03; c.beginPath(); c.moveTo(x, cy - Wd * 0.4); c.quadraticCurveTo(x + L * 0.02, cy, x, cy + Wd * 0.4); c.stroke(); }
    c.restore();
    // nemes ve yüz
    ell(head, cy, L * 0.11, Wd * 0.4, 0, col, 1.6);
    c.strokeStyle = dark; c.lineWidth = 2.2; for (let i = -3; i <= 3; i++) { c.beginPath(); c.moveTo(head - L * 0.08, cy + i * Wd * 0.1); c.lineTo(head + L * 0.1, cy + i * Wd * 0.1); c.stroke(); }
    ell(head + L * 0.02, cy, L * 0.06, Wd * 0.2, 0, tur === 'ahsap' ? '#b5653a' : col, 1.4);
    circ(head + L * 0.035, cy - Wd * 0.08, 2.2, '#fff', 1); circ(head + L * 0.035, cy + Wd * 0.08, 2.2, '#fff', 1);
    poly([head + L * 0.075, cy - 3, head + L * 0.11, cy - 2, head + L * 0.11, cy + 2, head + L * 0.075, cy + 3], dark, 1);
    // çapraz kollar, asa ve kamçı
    const ax = head + L * 0.2;
    c.strokeStyle = OUT; c.lineWidth = 6; c.beginPath(); c.moveTo(ax - L * 0.04, cy - Wd * 0.32); c.lineTo(ax + L * 0.04, cy + Wd * 0.1); c.moveTo(ax - L * 0.04, cy + Wd * 0.32); c.lineTo(ax + L * 0.04, cy - Wd * 0.1); c.stroke();
    c.strokeStyle = dark; c.lineWidth = 3.6; c.beginPath(); c.moveTo(ax - L * 0.04, cy - Wd * 0.32); c.lineTo(ax + L * 0.04, cy + Wd * 0.1); c.moveTo(ax - L * 0.04, cy + Wd * 0.32); c.lineTo(ax + L * 0.04, cy - Wd * 0.1); c.stroke();
    // akbaba kanatları
    c.fillStyle = tur === 'altin' ? '#c0392b' : dark; for (let i = 0; i < 6; i++) { c.beginPath(); c.ellipse(ax + L * 0.12 + i * L * 0.025, cy, L * 0.01, Wd * (0.36 - i * 0.03), 0, 0, 7); c.fill(); }
    c.restore();
  }
  function mummyTop(cx, cy, L, Wd, mask) {
    const head = cx - L / 2 + L * 0.12;
    c.beginPath(); c.ellipse(head, cy, L * 0.11, Wd * 0.4, 0, Math.PI / 2, Math.PI * 1.5); c.lineTo(cx + L * 0.42, cy - Wd * 0.28); c.quadraticCurveTo(cx + L * 0.5, cy, cx + L * 0.42, cy + Wd * 0.28); c.closePath();
    c.fillStyle = '#d8c9a6'; c.fill(); c.strokeStyle = OUT; c.lineWidth = 1.6; c.stroke();
    c.save(); c.clip(); c.strokeStyle = 'rgba(120,90,50,0.55)'; c.lineWidth = 1.4;
    for (let i = -14; i < 30; i++) { c.beginPath(); c.moveTo(head + i * L * 0.04, cy - Wd); c.lineTo(head + i * L * 0.04 + Wd * 1.2, cy + Wd); c.stroke(); c.beginPath(); c.moveTo(head + i * L * 0.04, cy + Wd); c.lineTo(head + i * L * 0.04 + Wd * 1.2, cy - Wd); c.stroke(); }
    c.restore();
    if (mask) { ell(head + L * 0.01, cy, L * 0.1, Wd * 0.38, 0, GOLD, 1.6); c.strokeStyle = '#2f5fa8'; c.lineWidth = 2; for (let i = -2; i <= 2; i++) { c.beginPath(); c.moveTo(head - L * 0.07, cy + i * Wd * 0.12); c.lineTo(head + L * 0.09, cy + i * Wd * 0.12); c.stroke(); } ell(head + L * 0.03, cy, L * 0.05, Wd * 0.16, 0, GOLD, 1.2); circ(head + L * 0.04, cy - Wd * 0.07, 2, '#fff', 1); circ(head + L * 0.04, cy + Wd * 0.07, 2, '#fff', 1); }
    else ell(head, cy, L * 0.08, Wd * 0.28, 0, '#a8875a', 1.2);
  }

  // ---------- "o dönemde yaşasaydım" sahneleri ----------
  const SKY = { 'Şafak': ['#f0a868', '#f7d9a8'], 'Şafak öncesi': ['#3a3a6a', '#c98a7a'], 'Sabah': ['#8ec3e6', '#f3e4c2'], 'Öğle': ['#6fb0e0', '#fff1c8'], 'İkindi': ['#e9b26a', '#f6deb0'], 'Akşam': ['#5a4a8a', '#e09a6a'], 'Gece': ['#0f1530', '#2a2a50'] };
  function drawLife(ctx, W, H, step, t, A, opt = {}) {
    c = ctx; const sky = SKY[step.saat] || SKY['Sabah'];
    const gr = c.createLinearGradient(0, 0, 0, H * 0.7); gr.addColorStop(0, sky[0]); gr.addColorStop(1, sky[1]);
    c.fillStyle = gr; c.fillRect(0, 0, W, H);
    const night = step.saat === 'Akşam' || step.saat === 'Şafak öncesi';
    if (night) { c.fillStyle = 'rgba(255,255,255,0.8)'; for (let i = 0; i < 30; i++) circ(hash(i) * W, hash(i + 5) * H * 0.4, 1 + hash(i + 2), 'rgba(255,255,255,0.8)', 0); }
    const sunY = { 'Şafak': 0.55, 'Sabah': 0.3, 'Öğle': 0.12, 'İkindi': 0.3, 'Akşam': 0.62 }[step.saat];
    if (sunY != null) circ(W * (step.saat === 'İkindi' || step.saat === 'Akşam' ? 0.8 : 0.2), H * sunY, H * 0.07, '#fff1b0', 0);
    const gy = H * 0.78;
    c.fillStyle = '#e2bf84'; c.fillRect(0, gy, W, H - gy);
    const k = H / 160;
    const P = (x, o) => A.person(x, gy + 6, k, o);
    switch (step.sahne) {
      case 'ev': case 'aksam':
        A.house(W * 0.3, gy, k * 2.2, 0.7); A.palm(W * 0.85, gy, H * 0.55, 3);
        if (step.sahne === 'aksam') { circ(W * 0.42, gy - 8, 6 + Math.sin(t * 9) * 1.5, '#ffb347', 0); }
        P(W * 0.55, { kind: 'woman', act: 'jar', dir: -1, ph: t * 3, move: false }); P(W * 0.65, { kind: 'man', act: 'walk', dir: -1 }); P(W * 0.72, { kind: 'child', act: 'walk', dir: -1, ph: t * 6, move: true });
        break;
      case 'tarla':
        c.fillStyle = '#86b04c'; c.fillRect(0, gy - H * 0.04, W, H * 0.06);
        A.plough(W * 0.55, gy + 4, k * 1.1, t);
        P(W * 0.2, { kind: 'man', act: 'sow', dir: 1, ph: t * 4, move: true }); A.palm(W * 0.9, gy, H * 0.5, 7);
        break;
      case 'golge':
        A.palm(W * 0.45, gy, H * 0.65, 11); A.palm(W * 0.6, gy, H * 0.55, 4);
        A.scribe(W * 0.45, gy + 6, k); P(W * 0.58, { kind: 'man', act: 'walk', dir: -1 });
        break;
      case 'katip': case 'yazi': case 'ders':
        poly([W * 0.62, gy, W * 0.9, gy, W * 0.9, gy - H * 0.3, W * 0.62, gy - H * 0.3], '#caa06a', 1.6);
        for (let i = 0; i < 3; i++) { c.beginPath(); c.arc(W * (0.67 + i * 0.09), gy - H * 0.3, H * 0.06, Math.PI, 0); c.fillStyle = '#c4985c'; c.fill(); c.strokeStyle = OUT; c.stroke(); }
        A.scribe(W * 0.35, gy + 6, k * 1.2);
        if (step.sahne === 'ders') { A.scribe(W * 0.22, gy + 6, k * 0.9); A.scribe(W * 0.48, gy + 6, k * 0.9); }
        else { P(W * 0.5, { kind: 'man', act: 'hoe', dir: -1 }); A.donkey(W * 0.15, gy + 4, k, 1, t * 5, 0); }
        break;
      case 'santiye':
        if (opt.tapinak) { poly([W * 0.55, gy, W * 0.72, gy, W * 0.7, gy - H * 0.42, W * 0.57, gy - H * 0.42], '#e6c995', 1.6); poly([W * 0.76, gy, W * 0.93, gy, W * 0.91, gy - H * 0.42 * 0.6, W * 0.78, gy - H * 0.42 * 0.6], '#c9a46a', 1.6); poly([W * 0.62, gy - H * 0.42, W * 0.66, gy - H * 0.42, W * 0.78, gy - H * 0.25, W * 0.6, gy], '#ad8a58', 1.2); }
        else poly([W * 0.55, gy - 2, W * 0.95, gy - 2, W * 0.75, gy - H * 0.45], '#e4c48a', 1.6);
        A.sledge(W * 0.15, gy + 6, k * 0.9, t);
        break;
      case 'nehir':
        c.fillStyle = '#3f88a8'; c.fillRect(0, gy - H * 0.02, W, H * 0.12);
        A.boat(W * 0.7, gy + H * 0.04, k * 0.9, { dir: -1, type: 'sail' });
        P(W * 0.3, { kind: 'woman', act: 'jar', dir: 1, ph: t * 6, move: true });
        break;
      case 'pazar':
        for (let i = 0; i < 3; i++) { const x = W * (0.2 + i * 0.28); poly([x - 40, gy - 30, x + 40, gy - 30, x + 30, gy - 44, x - 30, gy - 44], ['#c0392b', '#2f8fa3', '#e8b923'][i], 1.4); limb(x - 34, gy, x - 34, gy - 30, 2, '#6b4a2a'); limb(x + 34, gy, x + 34, gy - 30, 2, '#6b4a2a'); ell(x - 12, gy - 6, 12, 6, 0, '#e3c36a', 1); ell(x + 14, gy - 6, 10, 6, 0, '#9a5a3a', 1); }
        P(W * 0.35, { kind: 'woman', act: 'walk', dir: 1, ph: t * 6, move: true }); P(W * 0.62, { kind: 'man', act: 'walk', dir: -1 });
        break;
      case 'tapinak':
        poly([W * 0.25, gy, W * 0.45, gy, W * 0.43, gy - H * 0.5, W * 0.27, gy - H * 0.5], '#e6c995', 1.6); poly([W * 0.55, gy, W * 0.75, gy, W * 0.73, gy - H * 0.5, W * 0.57, gy - H * 0.5], '#c9a46a', 1.6);
        poly([W * 0.45, gy, W * 0.55, gy, W * 0.55, gy - H * 0.36, W * 0.45, gy - H * 0.36], '#e9d3a3', 1.6);
        P(W * 0.5, { kind: 'man', act: 'staff', longKilt: true, collar: true, dir: -1 }); P(W * 0.2, { kind: 'man', act: 'walk', longKilt: true, dir: 1, ph: t * 4, move: true });
        break;
      case 'kamp': case 'talim': case 'yuruyus':
        for (let i = 0; i < 3; i++) { const x = W * (0.2 + i * 0.3); poly([x - 30, gy, x + 30, gy, x, gy - 40], '#e9dcc0', 1.4); }
        if (step.sahne === 'kamp') { circ(W * 0.5, gy - 6, 8 + Math.sin(t * 10) * 2, '#ff9a3a', 0); }
        for (let i = 0; i < 3; i++) P(W * (0.35 + i * 0.12), { kind: 'man', act: 'staff', dir: 1, ph: t * 5 + i, move: step.sahne !== 'kamp' });
        break;
      case 'savas':
        A.chariot(W * 0.5, gy + 4, k * 1.2, -1, t * 6);
        break;
      case 'oyun':
        for (let i = 0; i < 3; i++) P(W * (0.3 + i * 0.18), { kind: 'child', act: 'walk', dir: i % 2 ? -1 : 1, ph: t * 7 + i, move: true });
        circ(W * 0.48 + Math.sin(t * 3) * W * 0.12, gy - H * 0.15 - Math.abs(Math.sin(t * 6)) * H * 0.12, H * 0.025, '#c0392b', 1.2);
        break;
      default:
        A.house(W * 0.4, gy, k * 2, 0.4);
    }
  }

  return { fig, drawGod, drawIc, drawMummy, drawLife, glyph, hieroColumn, set ctx(v) { c = v; } };
})();
