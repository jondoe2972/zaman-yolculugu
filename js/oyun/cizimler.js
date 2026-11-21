// 🎨 İpucu resimleri: küçük nesne çizimleri ve döneme göre değişen çizim tarzları.
// Her nesne 120×120'lik bir tuvale düz renklerle bir kez çizilir; seçilen tarz bu çizimi dönüştürür:
//   MÖ → siyah figür vazo · MS 1–1450 → mozaik (İslam dünyasında minyatür/çini) · 1450–1900 → gravür · 1900 sonrası → kesik kâğıt.
// kaba (1–4): ilk ipuçlarında resim iri taneli çıkar, ilerledikçe netleşir.
// Kullanım: Cizim.ciz(canvas, 'lir', yil, [enlem, boylam], kaba)
'use strict';
window.Cizim = (() => {
  const S = 120;
  // ---------- küçük yardımcılar ----------
  let g;
  const R = (c, x, y, w, h) => { g.fillStyle = c; g.fillRect(x, y, w, h); };
  const C = (c, x, y, r) => { g.fillStyle = c; g.beginPath(); g.arc(x, y, r, 0, 7); g.fill(); };
  const E = (c, x, y, rx, ry, a = 0) => { g.fillStyle = c; g.beginPath(); g.ellipse(x, y, rx, ry, a, 0, 7); g.fill(); };
  const P = (c, ...p) => { g.fillStyle = c; g.beginPath(); g.moveTo(p[0], p[1]); for (let i = 2; i < p.length; i += 2) g.lineTo(p[i], p[i + 1]); g.closePath(); g.fill(); };
  const L = (c, w, ...p) => { g.strokeStyle = c; g.lineWidth = w; g.lineCap = 'round'; g.lineJoin = 'round'; g.beginPath(); g.moveTo(p[0], p[1]); for (let i = 2; i < p.length; i += 2) g.lineTo(p[i], p[i + 1]); g.stroke(); };
  const Q = (c, w, x0, y0, cx, cy, x1, y1) => { g.strokeStyle = c; g.lineWidth = w; g.lineCap = 'round'; g.beginPath(); g.moveTo(x0, y0); g.quadraticCurveTo(cx, cy, x1, y1); g.stroke(); };
  const AL = '#d9a521', ALk = '#a8781a', KZ = '#b8322a', MV = '#2f6db0', AH = '#b5752a', AHk = '#6b3d12', DM = '#8a8f99', DMa = '#c9ced6', KR = '#2a2420', BZ = '#e8e2d2', YS = '#4f8a3a', TN = '#c98a4a';
  const yildizYol = (x, y, r1, r2, n) => { const p = []; for (let i = 0; i < n * 2; i++) { const r = i % 2 ? r2 : r1, a = i * Math.PI / n - Math.PI / 2; p.push(x + r * Math.cos(a), y + r * Math.sin(a)); } return p; };

  // ---------- nesneler ----------
  const N = {
    lir() { g.fillStyle = AH; g.beginPath(); g.moveTo(30, 100); g.quadraticCurveTo(14, 50, 34, 16); g.lineTo(44, 20); g.quadraticCurveTo(30, 52, 44, 88); g.lineTo(76, 88); g.quadraticCurveTo(90, 52, 76, 20); g.lineTo(86, 16); g.quadraticCurveTo(106, 50, 90, 100); g.closePath(); g.fill(); R(AHk, 34, 24, 52, 8); R(AHk, 36, 92, 48, 10); for (let x = 46; x <= 74; x += 7) L('#e9d8a6', 2, x, 32, x, 92); },
    tac() { P(AL, 18, 92, 14, 38, 38, 64, 60, 26, 82, 64, 106, 38, 102, 92); R(ALk, 18, 84, 84, 12); for (const [x, y] of [[60, 70], [36, 78], [84, 78]]) C(KZ, x, y, 7); for (const [x, y] of [[14, 38], [60, 26], [106, 38]]) C(MV, x, y, 6); },
    kalem() { E('#2a3a5a', 36, 96, 18, 10); g.fillStyle = BZ; g.beginPath(); g.moveTo(40, 92); g.quadraticCurveTo(52, 40, 100, 12); g.quadraticCurveTo(96, 48, 48, 92); g.closePath(); g.fill(); Q('#8a7a5a', 2, 42, 94, 66, 52, 98, 16); L('#5a4a3a', 3, 42, 94, 36, 106); },
    parsomen() { R('#e8d6a8', 26, 24, 68, 72); E('#c9b27a', 26, 24, 8, 8); E('#c9b27a', 94, 96, 8, 8); R('#c9b27a', 18, 16, 10, 16); R('#c9b27a', 92, 88, 10, 16); for (let y = 38; y < 86; y += 9) L('#7a5a3a', 2, 36, y, 84 - (y % 18), y); },
    gemi() { P(AHk, 10, 78, 110, 78, 96, 98, 24, 98); L(AHk, 4, 60, 78, 60, 14); P(BZ, 62, 18, 98, 70, 62, 70); P('#d9d0b8', 58, 24, 58, 70, 26, 70); R(KZ, 60, 12, 16, 7); for (let x = 22; x < 100; x += 12) L(MV, 3, x - 6, 106, x, 102, x + 6, 106); },
    yilan() { g.lineCap = 'round'; Q('#4f7a2a', 12, 20, 100, 70, 96, 60, 70); Q('#4f7a2a', 12, 60, 70, 46, 46, 70, 40); Q('#4f7a2a', 12, 70, 40, 96, 34, 88, 18); E('#3a5a1a', 90, 16, 10, 7, -0.4); C('#e8c94a', 93, 13, 2); L(KZ, 2, 98, 18, 106, 20); },
    kitap() { P('#7a2a1e', 14, 30, 60, 38, 60, 98, 14, 90); P('#8a3a26', 106, 30, 60, 38, 60, 98, 106, 90); P(BZ, 20, 30, 58, 37, 58, 92, 20, 86); P(BZ, 100, 30, 62, 37, 62, 92, 100, 86); for (let y = 44; y < 82; y += 8) { L('#8a7a5a', 1.5, 26, y - 3, 52, y + 2); L('#8a7a5a', 1.5, 68, y + 2, 94, y - 3); } },
    at() { E('#7a4a26', 58, 62, 30, 16); P('#7a4a26', 78, 54, 96, 24, 108, 30, 92, 62); E('#7a4a26', 104, 32, 9, 7, 0.6); for (const x of [36, 46, 70, 80]) R('#5a3418', x, 70, 7, 34); P(KR, 86, 28, 92, 24, 80, 58, 74, 54); Q(KR, 5, 28, 56, 14, 64, 18, 88); },
    harita() { P('#e8d6a8', 14, 24, 44, 16, 76, 24, 106, 16, 106, 96, 76, 104, 44, 96, 14, 104); P('#9ab86a', 26, 40, 44, 34, 52, 50, 38, 66, 24, 58); P('#9ab86a', 64, 60, 90, 54, 96, 76, 80, 88, 62, 80); L(KZ, 2.5, 40, 62, 56, 70, 70, 68); L(KZ, 3, 74, 64, 82, 72); L(KZ, 3, 82, 64, 74, 72); },
    kalkan() { g.fillStyle = KZ; g.beginPath(); g.moveTo(60, 12); g.lineTo(100, 26); g.quadraticCurveTo(100, 84, 60, 108); g.quadraticCurveTo(20, 84, 20, 26); g.closePath(); g.fill(); P(AL, 60, 24, 88, 34, 86, 70, 60, 94, 34, 70, 32, 34); P(KZ, 60, 40, 66, 58, 60, 76, 54, 58); },
    kilic() { P(DMa, 56, 10, 64, 10, 64, 82, 60, 90, 56, 82); L(DM, 1.5, 60, 14, 60, 80); R(AL, 38, 82, 44, 8); R(AHk, 56, 90, 8, 18); C(AL, 60, 110, 5); },
    hancer() { P(DMa, 52, 16, 60, 6, 68, 16, 66, 70, 54, 70); R(AL, 42, 70, 36, 7); R('#5a2a1a', 55, 77, 10, 24); C(KZ, 60, 104, 6); },
    ok() { Q(AHk, 6, 30, 12, 72, 60, 30, 108); L(BZ, 1.5, 30, 12, 30, 108); L('#7a5a3a', 3, 22, 60, 104, 60); P(DM, 104, 60, 92, 54, 92, 66); P(KZ, 22, 60, 14, 52, 26, 56); P(KZ, 22, 60, 14, 68, 26, 64); },
    kule() { R('#b8a888', 40, 30, 40, 76); for (let x = 36; x < 84; x += 12) R('#b8a888', x, 20, 8, 12); R('#9a8a6a', 36, 30, 48, 6); P('#5a3a2a', 52, 106, 52, 84, 60, 76, 68, 84, 68, 106); R('#3a2a1a', 56, 46, 8, 14); },
    firca() { E('#e8d6a8', 54, 66, 44, 34, -0.2); C('#f5ecd6', 38, 76, 8); C(KZ, 30, 52, 7); C(MV, 48, 42, 7); C(AL, 68, 44, 7); C(YS, 82, 58, 7); L(AHk, 5, 96, 12, 62, 70); P(KR, 62, 70, 56, 82, 66, 74); },
    disli() { const dis = (x, y, r, n, c) => { P(c, ...yildizYol(x, y, r + 7, r, n * 1)); C(c, x, y, r + 1); C('#f1e7d2', x, y, r * 0.35); }; dis(46, 58, 24, 10, '#9a7a3a'); dis(86, 82, 14, 8, '#7a6a5a'); },
    cerceve() { R(AL, 20, 14, 80, 92); R(ALk, 26, 20, 68, 80); R('#5a6a4a', 32, 26, 56, 68); E('#c9a07a', 60, 52, 12, 15); P('#3a2a1e', 40, 94, 44, 70, 60, 64, 76, 70, 80, 94); E('#3a2a1e', 60, 42, 14, 9); },
    kanat() { for (let i = 0; i < 6; i++) { E(i % 2 ? BZ : '#d9d0b8', 40 + i * 9, 40 + i * 9, 34 - i * 3, 7, 0.75); } L(AHk, 4, 24, 24, 96, 96); },
    pusula() { C(ALk, 60, 60, 46); C('#f1e7d2', 60, 60, 38); P(KZ, 60, 26, 66, 60, 54, 60); P(KR, 60, 94, 66, 60, 54, 60); C(AL, 60, 60, 5); for (let a = 0; a < 8; a++) { const x = 60 + 32 * Math.cos(a * Math.PI / 4), y = 60 + 32 * Math.sin(a * Math.PI / 4); C(ALk, x, y, 2); } },
    zincir() { g.lineWidth = 7; g.strokeStyle = DM; for (let i = 0; i < 5; i++) { g.beginPath(); g.ellipse(22 + i * 19, 30 + i * 15, 13, 8, 0.65, 0, 7); g.stroke(); } },
    top() { C('#3a3a3a', 34, 86, 16); C('#6a5a4a', 34, 86, 6); P('#2a2a2a', 30, 72, 104, 46, 108, 58, 40, 94); C(KR, 104, 52, 7); for (let i = 0; i < 3; i++) C('#1a1a1a', 14 + i * 10, 104, 5); },
    piramit() { P('#d8b66a', 60, 16, 108, 100, 12, 100); P('#b8964a', 60, 16, 108, 100, 66, 100); R('#e8d6a8', 0, 100, 120, 20); C('#e8a83a', 100, 22, 9); },
    ada() { R(MV, 0, 74, 120, 46); E('#b8a46a', 60, 76, 44, 12); P('#6a8a4a', 30, 74, 52, 34, 64, 50, 76, 30, 96, 74); L(BZ, 2, 10, 92, 24, 88, 38, 92); L(BZ, 2, 70, 100, 84, 96, 98, 100); },
    piyano() { R(KR, 14, 30, 92, 56); R(BZ, 20, 60, 80, 20); for (let x = 20; x < 100; x += 8) L('#3a3a3a', 1, x, 60, x, 80); for (const x of [26, 34, 50, 58, 66, 82, 90]) R(KR, x - 2, 60, 4, 12); R(KR, 20, 86, 6, 24); R(KR, 94, 86, 6, 24); },
    nota() { C(KR, 36, 92, 12); C(KR, 84, 80, 12); R(KR, 44, 26, 5, 66); R(KR, 92, 14, 5, 66); P(KR, 44, 26, 97, 14, 97, 26, 44, 38); },
    maske() { g.fillStyle = BZ; g.beginPath(); g.moveTo(14, 26); g.quadraticCurveTo(46, 16, 60, 26); g.quadraticCurveTo(66, 70, 38, 92); g.quadraticCurveTo(10, 70, 14, 26); g.fill(); g.fillStyle = AL; g.beginPath(); g.moveTo(60, 34); g.quadraticCurveTo(84, 24, 106, 34); g.quadraticCurveTo(110, 80, 82, 100); g.quadraticCurveTo(56, 80, 60, 34); g.fill(); E(KR, 28, 44, 6, 4); E(KR, 48, 44, 6, 4); Q(KR, 3, 28, 72, 38, 64, 48, 72); E(KR, 74, 52, 6, 4); E(KR, 94, 52, 6, 4); Q(KR, 3, 74, 76, 84, 84, 94, 76); },
    kulak() { g.fillStyle = '#d9a07a'; g.beginPath(); g.moveTo(52, 16); g.quadraticCurveTo(100, 14, 96, 58); g.quadraticCurveTo(94, 80, 74, 88); g.quadraticCurveTo(66, 106, 50, 102); g.quadraticCurveTo(40, 96, 46, 84); g.quadraticCurveTo(30, 50, 52, 16); g.fill(); Q('#9a5a3a', 5, 60, 34, 84, 36, 78, 60); Q('#9a5a3a', 4, 78, 60, 64, 66, 64, 80); },
    yildiz() { R('#1e2a4a', 0, 0, 120, 120); P(AL, ...yildizYol(60, 58, 34, 14, 5)); for (const [x, y] of [[16, 20], [100, 16], [18, 96], [104, 92], [90, 50], [30, 70]]) C('#f1e7d2', x, y, 2.5); },
    madalya() { P(KZ, 40, 8, 56, 8, 66, 54, 50, 54); P(MV, 80, 8, 64, 8, 54, 54, 70, 54); C(ALk, 60, 78, 30); C(AL, 60, 78, 24); P(ALk, ...yildizYol(60, 78, 14, 6, 5)); },
    sise() { R('#c9d6d8', 50, 14, 20, 30); P('#c9d6d8', 50, 40, 70, 40, 100, 100, 20, 100); P(YS, 36, 72, 84, 72, 100, 100, 20, 100); R(AHk, 48, 8, 24, 8); C('#9ad66a', 50, 86, 4); C('#9ad66a', 66, 80, 3); },
    lamba() { E(AL, 60, 76, 40, 14); P(AL, 92, 72, 112, 58, 108, 70, 96, 80); Q(ALk, 6, 24, 70, 8, 60, 22, 50); E('#f5b84a', 108, 48, 7, 13); E('#fff1a8', 108, 52, 3, 7); R(ALk, 52, 62, 16, 6); },
    teleskop() { P(AHk, 18, 54, 92, 24, 98, 38, 24, 68); P(AL, 18, 54, 26, 51, 32, 65, 24, 68); P(AL, 84, 27, 92, 24, 98, 38, 90, 41); L(KR, 4, 60, 46, 40, 104); L(KR, 4, 60, 46, 60, 106); L(KR, 4, 60, 46, 80, 104); },
    terazi() { R(AHk, 57, 18, 6, 82); R(AHk, 40, 98, 40, 8); L(AL, 4, 18, 34, 102, 34); C(AL, 60, 30, 6); L(ALk, 1.5, 18, 34, 10, 70); L(ALk, 1.5, 18, 34, 26, 70); L(ALk, 1.5, 102, 34, 94, 64); L(ALk, 1.5, 102, 34, 110, 64); E(AL, 18, 72, 16, 5); E(AL, 102, 66, 16, 5); },
    alev() { g.fillStyle = '#e0602a'; g.beginPath(); g.moveTo(60, 8); g.quadraticCurveTo(104, 60, 84, 96); g.quadraticCurveTo(60, 116, 36, 96); g.quadraticCurveTo(16, 60, 60, 8); g.fill(); g.fillStyle = '#f5c040'; g.beginPath(); g.moveTo(60, 44); g.quadraticCurveTo(84, 74, 72, 96); g.quadraticCurveTo(60, 106, 48, 96); g.quadraticCurveTo(36, 74, 60, 44); g.fill(); },
    kubbe() { R('#e8e2d2', 20, 66, 80, 40); g.fillStyle = '#4a8a9a'; g.beginPath(); g.arc(60, 66, 32, Math.PI, 0); g.fill(); R(AL, 58, 24, 4, 10); C(AL, 60, 22, 4); R('#e8e2d2', 104, 22, 8, 84); P('#4a8a9a', 102, 22, 108, 6, 114, 22); for (let x = 30; x < 92; x += 16) P('#5a6a7a', x, 106, x, 86, x + 5, 80, x + 10, 86, x + 10, 106); },
    fil() { E('#8a8f99', 56, 60, 34, 24); E('#8a8f99', 92, 50, 16, 16); E('#9aa0aa', 82, 48, 10, 14); Q('#8a8f99', 9, 104, 56, 112, 84, 102, 100); for (const x of [32, 46, 62, 74]) R('#7a7f89', x, 74, 10, 30); L(BZ, 3, 98, 62, 110, 70); },
    deve() { E(TN, 52, 62, 30, 14); E(TN, 44, 46, 12, 12); E(TN, 64, 46, 12, 12); Q(TN, 9, 80, 60, 96, 52, 96, 26); E(TN, 102, 24, 10, 6); for (const x of [30, 40, 64, 74]) R('#a8703a', x, 70, 6, 36); },
    sikke() { C(ALk, 48, 54, 30); C(AL, 48, 54, 25); C(ALk, 80, 76, 28); C(AL, 80, 76, 23); E(ALk, 48, 54, 8, 12); P(ALk, ...yildizYol(80, 76, 12, 5, 6)); },
    tablet() { R('#b88a5a', 22, 14, 76, 92); for (let y = 26; y < 98; y += 11) for (let x = 30; x < 90; x += 9 + (y % 3)) { P('#6a4a2a', x, y, x + 6, y + 2, x, y + 4); } },
    kopru() { R('#b8a888', 0, 40, 120, 52); R('#9a8a6a', 0, 36, 120, 6); g.fillStyle = MV; for (const x of [20, 60, 100]) { g.beginPath(); g.arc(x, 92, 15, Math.PI, 0); g.fill(); } R(MV, 0, 92, 120, 28); for (let x = 8; x < 120; x += 24) L(BZ, 2, x, 104, x + 10, 102); },
    tilki() { P('#d96a2a', 20, 30, 34, 56, 46, 30, 60, 70, 34, 82); P('#d96a2a', 46, 68, 96, 56, 100, 84, 50, 90); g.fillStyle = '#d96a2a'; g.beginPath(); g.moveTo(96, 70); g.quadraticCurveTo(118, 40, 100, 26); g.quadraticCurveTo(108, 54, 92, 80); g.fill(); C('#f5ecd6', 101, 28, 5); P('#f5ecd6', 28, 66, 46, 74, 34, 82); C(KR, 34, 58, 2.5); R('#8a3a1a', 52, 88, 6, 18); R('#8a3a1a', 86, 82, 6, 22); },
    dag() { P('#7a8a9a', 0, 104, 44, 24, 76, 80, 90, 58, 120, 104); P(BZ, 44, 24, 56, 46, 48, 42, 40, 48, 34, 42); P(BZ, 90, 58, 98, 70, 90, 66, 84, 72); R(YS, 0, 104, 120, 16); },
    tren() { R('#3a3a3a', 20, 44, 60, 40); R('#3a3a3a', 70, 28, 30, 56); R('#9ab8d8', 76, 36, 18, 14); R('#2a2a2a', 26, 26, 12, 20); E('#d8d8d8', 30, 18, 12, 7); E('#e8e8e8', 18, 10, 9, 5); C(KZ, 36, 92, 12); C(KZ, 64, 92, 12); C(KZ, 90, 92, 10); L('#5a5a5a', 3, 0, 106, 120, 106); },
    cark() { C('#8a6a3a', 46, 60, 34); C('#f1e7d2', 46, 60, 28); for (let a = 0; a < 8; a++) L('#8a6a3a', 3, 46, 60, 46 + 28 * Math.cos(a * Math.PI / 4), 60 + 28 * Math.sin(a * Math.PI / 4)); C('#8a6a3a', 46, 60, 6); R('#8a6a3a', 76, 92, 36, 8); L(BZ, 2, 46, 32, 104, 60); E(BZ, 104, 64, 7, 10); },
    kus() { g.fillStyle = BZ; g.beginPath(); g.moveTo(14, 60); g.quadraticCurveTo(50, 40, 78, 56); g.quadraticCurveTo(100, 50, 108, 40); g.quadraticCurveTo(104, 64, 82, 70); g.quadraticCurveTo(50, 82, 14, 60); g.fill(); P('#d9d0b8', 40, 56, 70, 14, 74, 58); C(KR, 96, 50, 2.5); P(AL, 106, 46, 116, 48, 106, 52); },
    cicek() { L(YS, 5, 60, 64, 58, 112); E(YS, 44, 94, 14, 6, -0.5); for (let a = 0; a < 12; a++) E('#f0c020', 60 + 22 * Math.cos(a * Math.PI / 6), 44 + 22 * Math.sin(a * Math.PI / 6), 10, 5, a * Math.PI / 6); C('#6a4a1a', 60, 44, 15); },
    rakam() { g.fillStyle = KR; g.font = 'bold 44px Georgia, serif'; g.textAlign = 'center'; g.fillText('0', 34, 52); g.fillText('7', 84, 52); g.fillText('3', 34, 104); g.fillText('9', 84, 104); },
    ucak() { E('#9aa0aa', 60, 60, 46, 9); P('#7a8a9a', 52, 56, 72, 56, 58, 14, 48, 14); P('#7a8a9a', 52, 64, 72, 64, 58, 106, 48, 106); P('#7a8a9a', 14, 58, 24, 58, 16, 40, 10, 40); C('#5a6a7a', 106, 60, 4); L(KR, 2, 108, 46, 108, 74); },
    yol() { R(YS, 0, 0, 120, 120); P('#c8b07a', 50, 0, 70, 0, 100, 120, 20, 120); for (let y = 10; y < 120; y += 16) R('#a8905a', 54 + y * 0.03, y, 12 + y * 0.1, 6); },
    zurafa() { E('#e0b04a', 56, 78, 26, 14); P('#e0b04a', 70, 74, 96, 14, 104, 18, 80, 78); E('#e0b04a', 100, 14, 10, 6, 0.4); for (const x of [36, 46, 64, 74]) R('#c8902a', x, 84, 5, 30); for (const [x, y] of [[50, 74], [62, 80], [80, 54], [88, 36], [44, 84]]) C('#9a5a1a', x, y, 3.5); },
    kadeh() { P(AL, 34, 18, 86, 18, 72, 56, 48, 56); R(ALk, 57, 56, 6, 34); E(ALk, 60, 96, 22, 6); P(KZ, 38, 24, 82, 24, 76, 38, 44, 38); },
    heykel() { R('#d8d2c2', 36, 92, 48, 18); E('#e8e2d2', 60, 26, 10, 12); P('#e8e2d2', 46, 38, 74, 38, 78, 66, 70, 92, 50, 92, 42, 66); L('#e8e2d2', 6, 46, 42, 38, 66); L('#e8e2d2', 6, 74, 42, 80, 24); },
    tapinak() { P('#d8d0b8', 10, 36, 60, 12, 110, 36); R('#c8c0a8', 12, 36, 96, 8); for (let x = 18; x < 106; x += 16) R('#e8e2d2', x, 46, 8, 54); R('#c8c0a8', 8, 100, 104, 10); },
    yelpaze() { for (let i = 0; i < 9; i++) { const a = Math.PI * (1.08 + i * 0.105); P(i % 2 ? '#c84a4a' : '#e8d6a8', 60, 96, 60 + 56 * Math.cos(a), 96 + 56 * Math.sin(a), 60 + 56 * Math.cos(a + 0.105), 96 + 56 * Math.sin(a + 0.105)); } C(KR, 60, 96, 5); },
    capa() { L('#4a5a6a', 7, 60, 22, 60, 100); C('#4a5a6a', 60, 18, 9); C('#f1e7d2', 60, 18, 4); L('#4a5a6a', 6, 40, 38, 80, 38); g.strokeStyle = '#4a5a6a'; g.lineWidth = 7; g.beginPath(); g.arc(60, 70, 34, 0.3, Math.PI - 0.3); g.stroke(); P('#4a5a6a', 20, 72, 30, 86, 18, 88); P('#4a5a6a', 100, 72, 90, 86, 102, 88); },
    saray() { R('#e8dcc0', 14, 46, 92, 60); P('#b8322a', 10, 48, 60, 20, 110, 48); for (let x = 22; x < 100; x += 14) R('#8a6a4a', x, 60, 8, 14); R('#6a4a2a', 52, 82, 16, 24); R(AL, 58, 10, 4, 12); },
    sutun() { R('#e8e2d2', 44, 22, 32, 80); R('#d8d0b8', 34, 14, 52, 10); R('#d8d0b8', 34, 100, 52, 10); for (let x = 50; x < 76; x += 7) L('#c8c0a8', 2, x, 26, x, 98); },
    cadir() { P('#e8dcc0', 14, 70, 60, 70, 106, 70, 100, 104, 20, 104); g.fillStyle = '#d8c8a0'; g.beginPath(); g.ellipse(60, 70, 48, 20, 0, Math.PI, 0); g.fill(); L(KZ, 3, 18, 86, 102, 86); R('#6a4a2a', 50, 80, 20, 24); C('#c8b890', 60, 52, 6); },
    ev() { R('#d8c8a0', 22, 54, 76, 50); P('#8a4a2a', 14, 56, 60, 22, 106, 56); R('#6a4a2a', 52, 74, 16, 30); R('#9ab8d8', 30, 64, 14, 12); R('#9ab8d8', 76, 64, 14, 12); R(YS, 0, 104, 120, 16); },
    nehir() { R(YS, 0, 0, 120, 120); g.fillStyle = MV; g.beginPath(); g.moveTo(40, 0); g.quadraticCurveTo(90, 40, 40, 70); g.quadraticCurveTo(10, 90, 50, 120); g.lineTo(80, 120); g.quadraticCurveTo(44, 90, 70, 72); g.quadraticCurveTo(120, 40, 66, 0); g.fill(); for (const [x, y] of [[100, 20], [18, 30], [96, 96]]) C('#3a6a2a', x, y, 8); },
    simsek() { R('#3a4a6a', 0, 0, 120, 120); E('#8a9aaa', 40, 22, 30, 14); E('#8a9aaa', 76, 20, 28, 16); P('#f5d040', 66, 26, 40, 66, 58, 66, 44, 108, 84, 56, 64, 56, 80, 26); },
    gunes() { R('#f1d8a0', 0, 0, 120, 120); for (let a = 0; a < 12; a++) L('#d9a521', 4, 60 + 26 * Math.cos(a * Math.PI / 6), 60 + 26 * Math.sin(a * Math.PI / 6), 60 + 48 * Math.cos(a * Math.PI / 6), 60 + 48 * Math.sin(a * Math.PI / 6)); C('#e8a83a', 60, 60, 22); },
    yuzuk() { g.strokeStyle = AL; g.lineWidth = 10; g.beginPath(); g.ellipse(60, 74, 30, 26, 0, 0, 7); g.stroke(); P('#5ab8d8', 60, 20, 74, 36, 60, 52, 46, 36); P('#8ad8f0', 60, 26, 68, 36, 60, 46); },
    keski() { R('#d8d2c2', 10, 66, 70, 44); P(DMa, 70, 24, 76, 18, 46, 60, 40, 66); R(AHk, 74, 10, 10, 18); P('#9a7a5a', 86, 6, 112, 14, 104, 32, 82, 24); L('#c8c0a8', 2, 20, 80, 40, 92); },
    bitki() { R('#a8703a', 0, 100, 120, 20); for (const x of [24, 48, 72, 96]) { L('#6a9a3a', 6, x, 100, x + 4, 14); for (let y = 30; y < 96; y += 16) L('#8aba4a', 3, x + 2, y, x + 16, y - 10); } },
    elma() { C('#c8322a', 46, 66, 30); C('#c8322a', 74, 66, 30); E('#e05a4a', 44, 56, 8, 12, -0.4); L(AHk, 5, 60, 40, 64, 18); E(YS, 76, 22, 14, 7, -0.5); },
    ampul() { C('#f5e08a', 60, 48, 32); P('#f5e08a', 40, 66, 80, 66, 72, 84, 48, 84); R(DM, 46, 84, 28, 18); for (let y = 88; y < 102; y += 5) L(DMa, 2, 46, y, 74, y); L('#c88a1a', 2.5, 52, 72, 56, 44, 60, 56, 64, 44, 68, 72); },
    telefon() { R(KR, 34, 10, 52, 100); R('#2a4a6a', 38, 20, 44, 76); for (let y = 28; y < 90; y += 14) for (let x = 44; x < 80; x += 14) R(['#e05a4a', '#4a9a5a', '#e8b84a', '#5a8ad8'][(x + y) % 4], x, y, 9, 9); C('#5a5a5a', 60, 103, 3); },
    ay() { R('#101830', 0, 0, 120, 120); C('#d8d8d0', 60, 60, 42); for (const [x, y, r] of [[44, 46, 8], [72, 70, 11], [70, 40, 5], [48, 78, 6]]) C('#b0b0a8', x, y, r); for (const [x, y] of [[12, 14], [104, 20], [14, 104], [108, 100]]) C('#f1e7d2', x, y, 2); },
    eldiven() { g.fillStyle = KZ; g.beginPath(); g.ellipse(64, 50, 34, 38, 0.2, 0, 7); g.fill(); E(KZ, 34, 58, 13, 20, -0.4); R('#e8e2d2', 46, 84, 36, 22); L('#8a1a1a', 2, 40, 40, 52, 62); },
    futbol() { R(YS, 0, 0, 120, 120); C('#f5f5f0', 60, 60, 40); P(KR, ...yildizYol(60, 60, 13, 13, 5)); for (let a = 0; a < 5; a++) { const x = 60 + 32 * Math.cos(a * 1.2566 - 1.57), y = 60 + 32 * Math.sin(a * 1.2566 - 1.57); C(KR, x, y, 7); } },
    otobus() { R('#d8a020', 8, 30, 104, 56); R('#9ab8d8', 14, 38, 16, 16); for (let x = 36; x < 104; x += 18) R('#9ab8d8', x, 38, 14, 16); R('#8a6a1a', 8, 70, 104, 5); C(KR, 30, 90, 11); C(KR, 90, 90, 11); C(DM, 30, 90, 4); C(DM, 90, 90, 4); },
    fare() { C(KR, 60, 66, 30); C(KR, 30, 32, 18); C(KR, 90, 32, 18); E('#f0c8a0', 60, 74, 20, 16); C(KR, 60, 66, 4); E(BZ, 50, 58, 6, 8); E(BZ, 70, 58, 6, 8); C(KR, 51, 60, 3); C(KR, 71, 60, 3); Q(KZ, 3, 48, 80, 60, 88, 72, 80); },
    kazan() { g.fillStyle = '#b8742a'; g.beginPath(); g.moveTo(16, 50); g.lineTo(104, 50); g.quadraticCurveTo(104, 104, 60, 104); g.quadraticCurveTo(16, 104, 16, 50); g.fill(); R('#8a4a1a', 12, 44, 96, 10); g.strokeStyle = '#8a4a1a'; g.lineWidth = 5; g.beginPath(); g.arc(60, 44, 34, Math.PI, 0); g.stroke(); C('#b8742a', 98, 92, 8); },
    esek() { E('#8a8a8a', 54, 62, 30, 15); P('#8a8a8a', 76, 56, 92, 34, 104, 40, 90, 64); E('#9a9a9a', 102, 44, 10, 8, 0.6); P('#6a6a6a', 88, 34, 84, 10, 92, 30); P('#6a6a6a', 96, 32, 98, 8, 102, 30); for (const x of [32, 42, 64, 74]) R('#6a6a6a', x, 70, 6, 34); Q('#6a6a6a', 3, 26, 58, 16, 66, 18, 82); },
    balon() { g.fillStyle = KZ; g.beginPath(); g.arc(60, 46, 36, Math.PI * 0.9, Math.PI * 2.1); g.quadraticCurveTo(84, 78, 70, 88); g.lineTo(50, 88); g.quadraticCurveTo(36, 78, 26, 58); g.fill(); for (const x of [46, 60, 74]) L(AL, 3, x, 12, x - (x - 60) * 0.3, 86); L(AHk, 1.5, 50, 88, 50, 98); L(AHk, 1.5, 70, 88, 70, 98); R('#8a5a2a', 46, 98, 28, 14); },
    gitar() { E(AH, 46, 82, 26, 24); E(AH, 58, 58, 18, 16); C(AHk, 52, 74, 7); P('#5a3418', 62, 52, 102, 12, 108, 18, 68, 58); R('#3a2414', 98, 6, 14, 14); L(BZ, 1, 40, 90, 104, 14); L(BZ, 1, 44, 92, 106, 16); },
    org() { R('#8a5a2a', 10, 70, 100, 40); for (let i = 0; i < 9; i++) { const h = 30 + Math.abs(4 - i) * -6 + 30; R(i % 2 ? DMa : '#b8bcc4', 14 + i * 10.5, 70 - h, 8, h); E('#5a5a5a', 18 + i * 10.5, 70 - h + 8, 3, 2); } R(BZ, 20, 82, 80, 10); for (let x = 24; x < 98; x += 6) L(KR, 1, x, 82, x, 92); },
    lama() { E('#e8dcc4', 50, 70, 26, 14); P('#e8dcc4', 64, 66, 76, 22, 88, 22, 80, 70); E('#e8dcc4', 86, 22, 12, 8); P('#c8bca4', 80, 16, 78, 4, 86, 14); for (const x of [30, 40, 58, 68]) R('#c8bca4', x, 78, 6, 30); R(KZ, 30, 58, 36, 8); },
    araba() { R('#6a4a2a', 22, 46, 70, 30); P('#8a5a3a', 22, 46, 34, 26, 80, 26, 92, 46); C(KR, 38, 82, 14); C('#9a7a5a', 38, 82, 5); C(KR, 82, 82, 14); C('#9a7a5a', 82, 82, 5); L(AHk, 4, 92, 56, 116, 52); }
  };
  const CIZ_YOK = '?';

  // ---------- tarzlar ----------
  const px = (d, x, y) => { x = Math.max(0, Math.min(S - 1, x | 0)); y = Math.max(0, Math.min(S - 1, y | 0)); const i = (y * S + x) * 4; return [d[i], d[i + 1], d[i + 2], d[i + 3]]; };
  let tohum = 7; const rnd = () => ((tohum = (tohum * 16807) % 2147483647) / 2147483647);
  const T = {
    mozaik(h, d) { h.fillStyle = '#4a4034'; h.fillRect(0, 0, S, S); for (let y = 0; y < S; y += 6) for (let x = (y / 6 % 2) * 3 - 3; x < S; x += 6) { const p = px(d, x + 3, y + 3); h.fillStyle = p[3] > 100 ? `rgb(${p[0]},${p[1]},${p[2]})` : (rnd() < 0.5 ? '#a08c6e' : '#94805f'); const j = () => rnd() * 1.2; h.beginPath(); h.moveTo(x + j(), y + j()); h.lineTo(x + 5 - j(), y + j()); h.lineTo(x + 5 - j(), y + 5 - j()); h.lineTo(x + j(), y + 5 - j()); h.fill(); } },
    vazo(h, d) { h.fillStyle = '#c8693a'; h.fillRect(0, 0, S, S); for (let y = 0; y < S; y++) for (let x = 0; x < S; x++) { const p = px(d, x, y); if (p[3] < 100) continue; const q = px(d, x + 2, y), s = px(d, x, y + 2); const kenar = (Math.abs(p[0] - q[0]) + Math.abs(p[1] - q[1]) > 70 && q[3] > 100) || (Math.abs(p[0] - s[0]) + Math.abs(p[1] - s[1]) > 70 && s[3] > 100); h.fillStyle = kenar ? '#e08a55' : '#1d1410'; h.fillRect(x, y, 1, 1); } h.strokeStyle = '#1d1410'; h.lineWidth = 3; h.strokeRect(4, 4, S - 8, S - 8); for (let x = 8; x < S - 8; x += 10) { h.fillStyle = '#1d1410'; h.fillRect(x, S - 12, 5, 4); } },
    gravur(h, d) {
      h.fillStyle = '#f1e7d0'; h.fillRect(0, 0, S, S);
      for (let y = 0; y < S; y++) for (let x = 0; x < S; x++) {
        const p = px(d, x, y); if (p[3] < 100) continue; const l = (p[0] + p[1] + p[2]) / 765;
        const kenar = [px(d, x + 1, y), px(d, x - 1, y), px(d, x, y + 1), px(d, x, y - 1)].some(o => o[3] < 100 || Math.abs(o[0] - p[0]) + Math.abs(o[1] - p[1]) > 90);
        const cizgi = (x + y) % (l < 0.6 ? 3 : 4) === 0 || (l < 0.4 && (x - y + 240) % 3 === 0);
        h.fillStyle = kenar ? '#1e140c' : cizgi ? '#3b2a1c' : '#e8dcbc'; h.fillRect(x, y, 1, 1);
      }
    },
    kagit(h, d) { h.fillStyle = '#efe3c4'; h.fillRect(0, 0, S, S); for (const [dx, renk] of [[3, '#b9a77a'], [0, null]]) for (let y = 0; y < S; y++) for (let x = 0; x < S; x++) { const p = px(d, x, y); if (p[3] < 100) continue; if (renk) h.fillStyle = renk; else { const l = (p[0] + p[1] + p[2]) / 765; h.fillStyle = l < 0.45 ? '#7a2e1e' : l < 0.7 ? '#b8562e' : '#d98a4a'; } h.fillRect(x + dx, y + dx, 1, 1); } },
    cini(h, d) { h.fillStyle = '#e9f0f2'; h.fillRect(0, 0, S, S); h.fillStyle = '#1f5a8a'; for (let i = 0; i < S; i += 12) { h.beginPath(); h.arc(i + 6, 6, 3, 0, 7); h.arc(i + 6, S - 6, 3, 0, 7); h.fill(); } for (let y = 0; y < S; y++) for (let x = 0; x < S; x++) { const p = px(d, x, y); if (p[3] < 100) continue; const kenar = [px(d, x + 1, y), px(d, x, y + 1), px(d, x - 1, y), px(d, x, y - 1)].some(o => o[3] < 100 || Math.abs(o[0] - p[0]) > 40); h.fillStyle = kenar ? '#b88a1c' : `rgb(${Math.min(255, p[0] + 20)},${Math.min(255, p[1] + 20)},${Math.min(255, p[2] + 25)})`; h.fillRect(x, y, 1, 1); } }
  };
  const ISLAM = (y, [la, lo]) => (la > 8 && la < 45 && lo > 25 && lo < 80 && y <= -650) || (la > 35 && la < 44 && lo > -10 && lo < 0 && y <= -711 && y >= -1492);
  function tarz(y, ll) { if (y > 0) return 'vazo'; if (y > -1450) return ll && ISLAM(y, ll) ? 'cini' : 'mozaik'; if (y > -1900) return 'gravur'; return 'kagit'; }
  const TARZ_AD = { vazo: 'Antik vazo', mozaik: 'Mozaik', cini: 'Minyatür ve çini', gravur: 'Gravür', kagit: 'Kesik kâğıt' };

  function kaynak(nesne, kaba) {
    const c = document.createElement('canvas'); c.width = c.height = S; g = c.getContext('2d');
    (N[nesne] || (() => { g.fillStyle = KR; g.font = 'bold 60px Georgia'; g.textAlign = 'center'; g.fillText(CIZ_YOK, 60, 80); }))();
    if (kaba > 1) { // iri taneli: küçült, sonra keskin kenarlarla büyüt
      const k = document.createElement('canvas'), n = Math.round(S / kaba); k.width = k.height = n; const kg = k.getContext('2d'); kg.drawImage(c, 0, 0, n, n);
      const b = document.createElement('canvas'); b.width = b.height = S; const bg = b.getContext('2d'); bg.imageSmoothingEnabled = false; bg.drawImage(k, 0, 0, S, S); return bg.getImageData(0, 0, S, S).data;
    }
    return g.getImageData(0, 0, S, S).data;
  }
  // tuvale çizer; anim: tanecikler rastgele sırayla belirir
  function ciz(cv, nesne, y, ll, kaba = 1, anim = true) {
    const t = tarz(y, ll), d = kaynak(nesne, kaba), o = document.createElement('canvas'); o.width = o.height = S; tohum = 11; T[t](o.getContext('2d'), d);
    cv.width = cv.height = S; const h = cv.getContext('2d');
    if (!anim || matchMedia('(prefers-reduced-motion: reduce)').matches) { h.drawImage(o, 0, 0); return t; }
    const B = 10, hucre = []; for (let yy = 0; yy < S; yy += B) for (let xx = 0; xx < S; xx += B) hucre.push([xx, yy]);
    for (let i = hucre.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [hucre[i], hucre[j]] = [hucre[j], hucre[i]]; }
    h.fillStyle = 'rgba(0,0,0,.08)'; h.fillRect(0, 0, S, S);
    const t0 = performance.now(), SURE = 650; let k = 0;
    (function adim(now) { const n = Math.min(hucre.length, Math.ceil(hucre.length * (now - t0) / SURE)); for (; k < n; k++) { const [x, yy] = hucre[k]; h.drawImage(o, x, yy, B, B, x, yy, B, B); } if (k < hucre.length) requestAnimationFrame(adim); })(t0);
    return t;
  }
  return { ciz, tarz, TARZ_AD, nesneler: Object.keys(N) };
})();
