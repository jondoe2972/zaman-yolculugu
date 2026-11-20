// 3D şehir (three.js r159, MIT): bir şehrin seçili yıldaki hâli. Veri: data/sehir3d-<şehir>.js
// Kıyılar ve yapılar gerçek konumlarında (1 birim = 1 metre). Mahalleler nüfus eğrisine göre dolar ve boşalır;
// surlar, kiliseler, camiler, köprüler yapıldıkları ve yıkıldıkları yıllarda görünür ya da harabeye döner.
'use strict';
window.Sehir3D = (() => {
  const THREE = window.THREE, D = Math.PI / 180;
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
  const rnd = i => { const x = Math.sin(i * 127.1 + 311.7) * 43758.5453; return x - Math.floor(x); };
  let V = null, Rn = null, sc = null, cam = null, el = null, cv = null, labEl = null, raf = 0, last = 0, T = 0, ctx = null;
  let Y = 0, sonY = null, oynuyor = false, insaGrup = null, evler = null, yapilar = [], etiketler = [], kayiklar = [], insanlar = null, agaclar = null, yolGrup = null;
  const orb = { th: -0.55, ph: 0.92, dist: 7200, tx: 0, tz: 0 }, hedef = { ...orb };
  let kos = 1;
  const XZ = ll => [(ll[1] - V.merkez[1]) * 111320 * kos, -(ll[0] - V.merkez[0]) * 111320];
  // [[yıl, değer], ...] büyük yıldan küçüğe (MÖ pozitif): ara değer
  const egri = (a, y) => { if (y >= a[0][0]) return a[0][1]; for (let i = 1; i < a.length; i++) if (y >= a[i][0]) { const [y0, v0] = a[i - 1], [y1, v1] = a[i]; return v0 + (v1 - v0) * (y0 - y) / (y0 - y1); } return a[a.length - 1][1]; };
  const varMi = (o, y) => y <= o.from && y >= (o.to ?? -99999);
  const mat = (c, o = {}) => new THREE.MeshStandardMaterial({ color: c, roughness: 0.9, metalness: 0, flatShading: true, ...o });
  const icinde = (p, poly) => { let r = false; for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) { const [xi, zi] = poly[i], [xj, zj] = poly[j]; if ((zi > p[1]) !== (zj > p[1]) && p[0] < (xj - xi) * (p[1] - zi) / (zj - zi) + xi) r = !r; } return r; };
  const cizgiUzak = (p, pts) => { let m = 1e9; for (let i = 1; i < pts.length; i++) { const [ax, az] = pts[i - 1], [bx, bz] = pts[i], dx = bx - ax, dz = bz - az, L = dx * dx + dz * dz || 1, t = clamp(((p[0] - ax) * dx + (p[1] - az) * dz) / L, 0, 1); m = Math.min(m, Math.hypot(p[0] - ax - t * dx, p[1] - az - t * dz)); } return m; };

  // ---------- yapı kurucuları ----------
  const TAS = '#cdbb98', KURSUN = '#8d989f';
  function kutu(w, h, d, renk, x = 0, y = 0, z = 0, ry = 0) { const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat(renk)); m.position.set(x, y + h / 2, z); m.rotation.y = ry; m.castShadow = m.receiveShadow = true; return m; }
  function silindir(r, h, renk, x = 0, y = 0, z = 0, seg = 12) { const m = new THREE.Mesh(new THREE.CylinderGeometry(r, r, h, seg), mat(renk)); m.position.set(x, y + h / 2, z); m.castShadow = true; return m; }
  function koni(r, h, renk, x = 0, y = 0, z = 0, seg = 12) { const m = new THREE.Mesh(new THREE.ConeGeometry(r, h, seg), mat(renk)); m.position.set(x, y + h / 2, z); m.castShadow = true; return m; }
  function kubbe(r, hy, renk, x = 0, y = 0, z = 0) { const m = new THREE.Mesh(new THREE.SphereGeometry(r, 20, 10, 0, Math.PI * 2, 0, Math.PI / 2), mat(renk, { flatShading: false })); m.position.set(x, y, z); m.scale.y = hy; m.castShadow = true; return m; }
  function sur(o) {
    const g = new THREE.Group(), P = o.pts.map(XZ), kal = o.kal || 5, kh = o.kuleH || o.h * 1.6;
    const parca = (pts, h, kuleAra, ofs) => {
      for (let i = 1; i < pts.length; i++) {
        const [ax, az] = pts[i - 1], [bx, bz] = pts[i], L = Math.hypot(bx - ax, bz - az), a = Math.atan2(bz - az, bx - ax);
        let nx = -Math.sin(a), nz = Math.cos(a); if (ofs && nx > 0) { nx = -nx; nz = -nz; }
        const ox = ofs ? nx * ofs : 0, oz = ofs ? nz * ofs : 0;
        g.add(kutu(L + kal, h, kal, TAS, (ax + bx) / 2 + ox, 0, (az + bz) / 2 + oz, -a));
        if (kuleAra) for (let s = 0; s < L; s += kuleAra) g.add(kutu(kal * 2.4, kh * (ofs ? 0.7 : 1), kal * 2.4, '#c8b48e', ax + (bx - ax) * s / L + ox, 0, az + (bz - az) * s / L + oz, -a));
      }
    };
    parca(P, o.h, o.kule, 0);
    if (o.cift) parca(P, o.h * 0.6, o.kule, 28); // alçak dış sur
    return g;
  }
  function hipodrom(o) {
    const g = new THREE.Group(), en = o.en, uz = o.uz, kum = new THREE.Mesh(new THREE.BoxGeometry(en, 0.6, uz), mat('#e3cf9f')); kum.position.y = 0.3; kum.receiveShadow = true; g.add(kum);
    const tribun = new THREE.Group();
    tribun.add(kutu(12, 16, uz - en / 2, '#d6c29c', -en / 2 - 6, 0, en / 4)); tribun.add(kutu(12, 16, uz - en / 2, '#d6c29c', en / 2 + 6, 0, en / 4));
    for (let i = 0; i <= 10; i++) { const a = Math.PI * i / 10, r = en / 2 + 6; tribun.add(kutu(14, 16, 12, '#d6c29c', Math.cos(a) * r, 0, -uz / 2 + en / 2 - Math.sin(a) * r, -a + Math.PI / 2)); }
    tribun.add(kutu(en + 24, 20, 14, '#cbb48c', 0, 0, uz / 2 - 7));
    g.add(tribun); g.add(kutu(8, 2, uz * 0.6, '#cdbb98', 0, 0, 0));
    g.userData.harabe = [tribun];
    return g;
  }
  function saray(o) {
    const g = new THREE.Group(), r = o.renk || '#e8dcc0';
    if (o.bahce) { const b = new THREE.Mesh(new THREE.CircleGeometry(o.bahce, 24), mat('#8fae6a')); b.rotation.x = -Math.PI / 2; b.position.y = 0.4; g.add(b); }
    for (const [dx, dz, w, d, h] of o.parca) { g.add(kutu(w, h, d, r, dx, 0, dz)); g.add(kutu(w + 1, 1.2, d + 1, '#b5452f', dx, h, dz)); }
    for (const [dx, dz, rr] of o.kubbeler || []) g.add(kubbe(rr, 0.9, KURSUN, dx, 14, dz));
    if (o.kuleH) { const [kx, kz] = o.kuleXZ; g.add(silindir(6, o.kuleH, r, kx, 0, kz)); g.add(koni(7, 10, KURSUN, kx, o.kuleH, kz)); }
    g.userData.harabe = g.children.slice();
    return g;
  }
  function kubbeli(o) {
    const g = new THREE.Group(), r = o.renk || (o.cami ? '#e6e1d6' : '#d9a17e'), kr = o.kubbeRenk || KURSUN;
    g.add(kutu(o.w, o.h, o.d, r));
    const kb = o.kubbeH - o.kubbeR * 0.9;
    g.add(silindir(o.kubbeR * 1.04, Math.max(1, kb - o.h), r, 0, o.h, 0, 20));
    g.add(kubbe(o.kubbeR, 0.9, kr, 0, kb, 0));
    if (o.yarim) for (const s of [-1, 1]) { g.add(kubbe(o.kubbeR * 0.95, 0.75, kr, 0, o.h + (kb - o.h) * 0.45, s * o.kubbeR * 1.05)); }
    for (const [sx, sz] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) g.add(kubbe(o.kubbeR * 0.32, 0.9, kr, sx * o.w * 0.34, o.h, sz * o.d * 0.34));
    if (o.avlu) { const a = o.avlu; g.add(kutu(a, 7, 4, r, 0, 0, o.d / 2 + a)); g.add(kutu(4, 7, a, r, -a / 2, 0, o.d / 2 + a / 2)); g.add(kutu(4, 7, a, r, a / 2, 0, o.d / 2 + a / 2)); }
    // minareler: yıla göre sayıları artar
    const yer = [[-1, -1], [1, -1], [-1, 1], [1, 1]].map(([sx, sz]) => [sx * (o.w / 2 + 3), sz * (o.d / 2 + 3)]);
    if (o.avlu) yer.push([-o.avlu / 2 - 2, o.d / 2 + o.avlu + 2], [o.avlu / 2 + 2, o.d / 2 + o.avlu + 2]);
    g.userData.minare = [];
    const enCok = Math.max(0, ...(o.minare || []).map(m => m[1]));
    for (let i = 0; i < enCok; i++) {
      const [mx, mz] = yer[i % yer.length], mh = o.kubbeH * (i >= 4 ? 1.05 : 1.2), m = new THREE.Group();
      m.add(silindir(2.3, mh, '#f1ece2', mx, 0, mz, 10)); m.add(silindir(3.2, 1.2, '#f1ece2', mx, mh * 0.78, mz, 10)); m.add(koni(2.5, 10, kr, mx, mh, mz, 10));
      m.userData.sira = i; g.add(m); g.userData.minare.push(m);
    }
    g.userData.minareYil = o.minare || [];
    return g;
  }
  function sutun(o) { const g = new THREE.Group(); g.add(o.kare ? kutu(o.r * 2, o.h, o.r * 2, o.renk || '#b98a7a') : silindir(o.r, o.h, o.renk || '#9a6a6a', 0, 0, 0, 14)); g.add(kutu(o.r * 3, 3, o.r * 3, TAS)); return g; }
  function kule(o) { const g = new THREE.Group(); g.add(silindir(o.r, o.h, o.renk || TAS, 0, 0, 0, 16)); g.add(koni(o.r * 1.1, o.koni, '#7f8a90', 0, o.h, 0, 16)); return g; }
  function kemer(o) {
    const g = new THREE.Group(), P = o.pts.map(XZ), r = o.renk || TAS;
    for (let i = 1; i < P.length; i++) { const [ax, az] = P[i - 1], [bx, bz] = P[i], L = Math.hypot(bx - ax, bz - az), a = Math.atan2(bz - az, bx - ax);
      for (let s = 0; s <= L; s += 22) g.add(kutu(5, o.h, 7, r, ax + (bx - ax) * s / L, 0, az + (bz - az) * s / L, -a));
      g.add(kutu(L, 4, 7, r, (ax + bx) / 2, o.h - 4, (az + bz) / 2, -a)); g.add(kutu(L, 2.5, 7, r, (ax + bx) / 2, o.h * 0.5, (az + bz) / 2, -a)); }
    return g;
  }
  function carsi(o) {
    const g = new THREE.Group(); g.add(kutu(o.w, 8, o.d, '#d9c7a6'));
    const geo = new THREE.SphereGeometry(4.5, 10, 5, 0, Math.PI * 2, 0, Math.PI / 2), n = Math.floor(o.w / 13) * Math.floor(o.d / 13), im = new THREE.InstancedMesh(geo, mat(KURSUN), n), m4 = new THREE.Matrix4(); let k = 0;
    for (let x = -o.w / 2 + 7; x < o.w / 2; x += 13) for (let z = -o.d / 2 + 7; z < o.d / 2; z += 13) if (k < n) { m4.makeTranslation(x, 8, z); im.setMatrixAt(k++, m4); }
    im.count = k; g.add(im); return g;
  }
  function kopru(o) {
    const g = new THREE.Group(), [a, b] = o.pts.map(XZ), L = Math.hypot(b[0] - a[0], b[1] - a[1]), ang = Math.atan2(b[1] - a[1], b[0] - a[0]);
    g.add(kutu(L, 2, o.en, '#d8d2c4', (a[0] + b[0]) / 2, 5, (a[1] + b[1]) / 2, -ang));
    for (let s = 20; s < L; s += 45) g.add(kutu(4, 6, o.en * 0.8, '#bdb6a8', a[0] + (b[0] - a[0]) * s / L, -1, a[1] + (b[1] - a[1]) * s / L, -ang));
    return g;
  }
  function asma(o) {
    const g = new THREE.Group(), [a, b] = o.pts.map(XZ), L = Math.hypot(b[0] - a[0], b[1] - a[1]), ang = Math.atan2(b[1] - a[1], b[0] - a[0]), cx = (a[0] + b[0]) / 2, cz = (a[1] + b[1]) / 2;
    g.add(kutu(L * 1.5, 3, 33, '#c9c6bf', cx, 64, cz, -ang));
    for (const s of [-0.5, 0.5]) { const x = cx + Math.cos(ang) * L * s, z = cz + Math.sin(ang) * L * s; g.add(kutu(8, o.h, 36, '#d3d0c8', x, 0, z, -ang)); }
    const pts = []; for (let i = 0; i <= 30; i++) { const t = i / 30 - 0.5; pts.push(new THREE.Vector3(cx + Math.cos(ang) * L * t, 64 + (o.h - 64) * (4 * t * t), cz + Math.sin(ang) * L * t)); }
    for (const off of [-15, 15]) { const geo = new THREE.BufferGeometry().setFromPoints(pts.map(p => p.clone().add(new THREE.Vector3(-Math.sin(ang) * off, 0, Math.cos(ang) * off)))); g.add(new THREE.Line(geo, new THREE.LineBasicMaterial({ color: '#8a8f94' }))); }
    return g;
  }
  const KUR = { sur, hipodrom, saray, kubbe: kubbeli, sutun, kule, kemer, carsi, kopru, asma };

  // ---------- mahalleler: evler ve apartmanlar (tek çizimde binlerce) ----------
  function engeller() {
    const E = [];
    for (const o of V.yapilar) {
      if (o.ll) { const [x, z] = XZ(o.ll); const r = o.tip === 'hipodrom' ? null : o.tip === 'saray' ? Math.max(...o.parca.map(p => Math.hypot(p[0], p[1]) + Math.max(p[2], p[3]) / 2), o.bahce || 0) + 8 : o.tip === 'carsi' ? Math.max(o.w, o.d) * 0.6 : o.w ? Math.max(o.w, o.d) * 0.75 + (o.avlu ? o.avlu * 1.1 : 12) : 14;
        if (o.tip === 'hipodrom') E.push({ hip: true, x, z, a: o.aci, uz: o.uz / 2 + 20, en: o.en / 2 + 28 }); else E.push({ x, z, r }); }
      if (o.pts && (o.tip === 'sur' || o.tip === 'kemer')) E.push({ cizgi: o.pts.map(XZ), r: o.cift ? 45 : 14 });
    }
    for (const y of V.yollar) E.push({ cizgi: y.pts.map(XZ), r: 9 });
    return E;
  }
  const engelde = (p, E) => E.some(e => e.cizgi ? cizgiUzak(p, e.cizgi) < e.r : e.hip ? (() => { const dx = p[0] - e.x, dz = p[1] - e.z, c = Math.cos(e.a), s = Math.sin(e.a), u = dx * c - dz * s, v = dx * s + dz * c; return Math.abs(u) < e.en && Math.abs(v) < e.uz; })() : Math.hypot(p[0] - e.x, p[1] - e.z) < e.r);
  function mahalleKur() {
    const E = engeller(), B = [];
    V.bolgeler.forEach((b, bi) => {
      const poly = b.poly.map(XZ), [mx, mz] = XZ(b.merkez), ca = Math.cos(b.aci), sa = Math.sin(b.aci), S = bi === 0 || bi === 1 ? 19 : 34;
      let u0 = 1e9, u1 = -1e9, v0 = 1e9, v1 = -1e9; for (const [x, z] of poly) { const u = (x - mx) * ca + (z - mz) * sa, v = -(x - mx) * sa + (z - mz) * ca; u0 = Math.min(u0, u); u1 = Math.max(u1, u); v0 = Math.min(v0, v); v1 = Math.max(v1, v); }
      const L = [];
      for (let iu = Math.floor(u0 / S); iu * S < u1; iu++) for (let iv = Math.floor(v0 / S); iv * S < v1; iv++) {
        if (((iu % 5) + 5) % 5 === 4 || ((iv % 4) + 4) % 4 === 3) continue; // sokaklar
        const k = bi * 1e6 + iu * 1000 + iv, u = iu * S + (rnd(k) - 0.5) * 4, v = iv * S + (rnd(k + 1) - 0.5) * 4;
        const p = [mx + u * ca - v * sa, mz + u * sa + v * ca];
        if (!icinde(p, poly) || engelde(p, E)) continue;
        L.push({ x: p[0], z: p[1], ry: -b.aci + (rnd(k + 2) - 0.5) * 0.12, w: S * (0.45 + rnd(k + 3) * 0.25), d: S * (0.55 + rnd(k + 4) * 0.3), h: 5 + rnd(k + 5) * 4, ap: 12 + rnd(k + 6) * 26, pr: Math.hypot(u, v) * (0.7 + rnd(k + 7) * 0.6), hm: rnd(k + 8), rk: rnd(k + 9) });
      }
      L.sort((a, c) => a.pr - c.pr);
      B.push({ b, L });
    });
    const top = B.reduce((s, z) => s + z.L.length, 0);
    const kutuG = new THREE.BoxGeometry(1, 1, 1); kutuG.translate(0, 0.5, 0);
    const catiG = new THREE.ConeGeometry(0.75, 1, 4); catiG.rotateY(Math.PI / 4); catiG.translate(0, 0.5, 0);
    const ev = new THREE.InstancedMesh(kutuG, mat('#ffffff'), top), cati = new THREE.InstancedMesh(catiG, mat('#ffffff'), top), apt = new THREE.InstancedMesh(kutuG, mat('#ffffff'), top);
    for (const m of [ev, cati, apt]) { m.castShadow = true; m.receiveShadow = true; m.count = 0; sc.add(m); }
    evler = { B, ev, cati, apt };
  }
  const EV_ESKI = ['#d8c3a0', '#cdb08a', '#e0cfb0', '#c9ab84'], EV_OSM = ['#e9dcc4', '#d9b48a', '#c98f6a', '#efe4cf', '#b98a62', '#e4c9a0'], APT = ['#ece7de', '#ddd6c8', '#e8dccb', '#cfd3d6', '#f0e9dc'], CATI = ['#b5452f', '#a83e2a', '#c0533a', '#9e3b28'];
  function evleriGuncelle(y) {
    const { B, ev, cati, apt } = evler, m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), e = new THREE.Euler(), s = new THREE.Vector3(), p = new THREE.Vector3(), c = new THREE.Color();
    const modK = egri(V.modern, y), pal = y <= -1453 ? EV_OSM : EV_ESKI; let ne = 0, na = 0;
    for (const { b, L } of B) {
      const n = Math.round(L.length * clamp(egri(b.dolu, y), 0, 1)), mf = modK * b.modern;
      for (let i = 0; i < n; i++) {
        const l = L[i]; e.set(0, l.ry, 0); q.setFromEuler(e); p.set(l.x, 0, l.z);
        if (l.hm < mf) { s.set(l.w * 0.95, l.ap, l.d * 0.95); m4.compose(p, q, s); apt.setMatrixAt(na, m4); apt.setColorAt(na, c.set(APT[Math.floor(l.rk * APT.length)])); na++; }
        else {
          s.set(l.w, l.h, l.d); m4.compose(p, q, s); ev.setMatrixAt(ne, m4); ev.setColorAt(ne, c.set(pal[Math.floor(l.rk * pal.length)]));
          p.y = l.h; s.set(l.w * 1.08, l.w * 0.32, l.d * 1.08); m4.compose(p, q, s); cati.setMatrixAt(ne, m4); cati.setColorAt(ne, c.set(CATI[Math.floor(l.hm * 97 % 1 * CATI.length)])); ne++;
        }
      }
    }
    ev.count = cati.count = ne; apt.count = na;
    for (const m of [ev, cati, apt]) { m.instanceMatrix.needsUpdate = true; if (m.instanceColor) m.instanceColor.needsUpdate = true; }
  }

  // ---------- ağaçlar, yollar, kayıklar, insanlar ----------
  function agacKur() {
    const geo = new THREE.ConeGeometry(2.6, 14, 6); geo.translate(0, 7, 0);
    const pts = [];
    const sur = V.yapilar.find(o => o.id === 'theodosius-sur'), topk = V.yapilar.find(o => o.id === 'topkapi');
    if (sur) { const P = sur.pts.map(XZ); for (let i = 0; i < 900; i++) { const k = Math.floor(rnd(i) * (P.length - 1)), t = rnd(i + 1), [ax, az] = P[k], [bx, bz] = P[k + 1], a = Math.atan2(bz - az, bx - ax), off = 60 + rnd(i + 2) * 160; pts.push({ x: ax + (bx - ax) * t - Math.sin(a) * off * (Math.sin(a) < 0 ? -1 : 1), z: az + (bz - az) * t + Math.cos(a) * off, from: -1453 }); } }
    if (topk) { const [x, z] = XZ(topk.ll); for (let i = 0; i < 160; i++) { const a = rnd(i + 50) * 6.28, r = 40 + rnd(i + 51) * 210; pts.push({ x: x + Math.cos(a) * r, z: z + Math.sin(a) * r, from: -1478 }); } }
    const im = new THREE.InstancedMesh(geo, mat('#4f7a45'), pts.length); im.castShadow = true; sc.add(im);
    agaclar = { im, pts };
  }
  function agacGuncelle(y) { const { im, pts } = agaclar, m4 = new THREE.Matrix4(); let n = 0; for (const t of pts) if (y <= t.from) { m4.makeTranslation(t.x, 0, t.z); im.setMatrixAt(n++, m4); } im.count = n; im.instanceMatrix.needsUpdate = true; }
  function yolKur() {
    yolGrup = [];
    for (const y of V.yollar) { const g = new THREE.Group(), P = y.pts.map(XZ); for (let i = 1; i < P.length; i++) { const [ax, az] = P[i - 1], [bx, bz] = P[i], L = Math.hypot(bx - ax, bz - az), a = Math.atan2(bz - az, bx - ax); const m = new THREE.Mesh(new THREE.BoxGeometry(L + 10, 0.4, 12), mat('#c9b48e')); m.position.set((ax + bx) / 2, 0.2, (az + bz) / 2); m.rotation.y = -a; m.receiveShadow = true; g.add(m); } g.userData = { from: y.from, pts: P, L: P.slice(1).reduce((s, p, i) => s + Math.hypot(p[0] - P[i][0], p[1] - P[i][1]), 0) }; sc.add(g); yolGrup.push(g); }
  }
  const yolNokta = (P, s) => { for (let i = 1; i < P.length; i++) { const L = Math.hypot(P[i][0] - P[i - 1][0], P[i][1] - P[i - 1][1]); if (s <= L) { const t = s / L; return [P[i - 1][0] + (P[i][0] - P[i - 1][0]) * t, P[i - 1][1] + (P[i][1] - P[i - 1][1]) * t, Math.atan2(P[i][1] - P[i - 1][1], P[i][0] - P[i - 1][0])]; } s -= L; } const n = P.length - 1; return [P[n][0], P[n][1], 0]; };
  function insanKur() {
    const geo = new THREE.CylinderGeometry(0.9, 1.1, 3.6, 6); geo.translate(0, 1.8, 0);
    const N = 900, im = new THREE.InstancedMesh(geo, mat('#ffffff'), N), c = new THREE.Color(), RK = ['#8a3a2a', '#2f5fa8', '#e9e2cf', '#6a7a3a', '#c9a24a', '#5a3a6a', '#3a3a3a', '#b5653a'];
    for (let i = 0; i < N; i++) im.setColorAt(i, c.set(RK[i % RK.length]));
    sc.add(im); insanlar = { im, N, ph: Array.from({ length: N }, (_, i) => ({ yol: i % Math.max(1, V.yollar.length), s: rnd(i) , v: (rnd(i + 3) < 0.5 ? -1 : 1) * (0.0015 + rnd(i + 4) * 0.002), yan: (rnd(i + 5) - 0.5) * 9 })) };
  }
  function insanGuncelle(dt, y) {
    const { im, N, ph } = insanlar, m4 = new THREE.Matrix4(), uzak = orb.dist > 2600; let n = 0;
    if (!uzak) { const pay = clamp(egri(V.nufus, y) / 400, 0.08, 1); const aktif = yolGrup.filter(g => y <= g.userData.from);
      for (let i = 0; i < N * pay && aktif.length; i++) { const o = ph[i], g = aktif[o.yol % aktif.length]; o.s = (o.s + o.v * dt * 60 / g.userData.L * 30 + 1) % 1; const [x, z, a] = yolNokta(g.userData.pts, o.s * g.userData.L); m4.makeTranslation(x - Math.sin(a) * o.yan, 0.4, z + Math.cos(a) * o.yan); im.setMatrixAt(n++, m4); } }
    im.count = n; im.instanceMatrix.needsUpdate = true;
  }
  const SU_YOLLARI = [[[41.0200, 28.9760], [41.0260, 28.9640], [41.0330, 28.9545], [41.0400, 28.9470], [41.0470, 28.9420], [41.0400, 28.9470], [41.0330, 28.9545], [41.0260, 28.9640]], [[41.0185, 28.9775], [41.0195, 28.9900], [41.0215, 29.0070], [41.0195, 28.9900]], [[41.0080, 28.9900], [41.0010, 28.9600], [40.9960, 28.9350], [41.0010, 28.9600]], [[41.0250, 28.9900], [41.0400, 29.0150], [41.0550, 29.0330], [41.0400, 29.0150]]];
  function kayikKur() {
    for (let i = 0; i < 26; i++) {
      const g = new THREE.Group(); const govde = new THREE.Mesh(new THREE.BoxGeometry(26, 4, 7), mat('#7a5232')); govde.position.y = 1; g.add(govde);
      const yelken = new THREE.Mesh(new THREE.PlaneGeometry(14, 16), mat('#f3ead6', { side: THREE.DoubleSide })); yelken.position.set(0, 12, 0); yelken.rotation.y = Math.PI / 2; g.add(yelken);
      const baca = silindir(1.6, 9, '#333333', 4, 3, 0, 8); g.add(baca);
      const ust = kutu(16, 4, 6.4, '#f4f1ea', -2, 3, 0); g.add(ust);
      g.userData = { yol: SU_YOLLARI[i % SU_YOLLARI.length].map(XZ), s: rnd(i + 20), v: 0.004 + rnd(i + 21) * 0.006, yelken, baca, ust, govde, esik: rnd(i + 22) };
      sc.add(g); kayiklar.push(g);
    }
  }
  function kayikGuncelle(dt, y) {
    const say = clamp(egri(V.nufus, y) / 600, 0.15, 1), buhar = y <= -1850, modern = y <= -1950;
    for (const k of kayiklar) {
      const u = k.userData; k.visible = u.esik < say; if (!k.visible) continue;
      const P = u.yol, L = P.slice(1).reduce((s, p, i) => s + Math.hypot(p[0] - P[i][0], p[1] - P[i][1]), 0);
      u.s = (u.s + u.v * dt * 25 / L * 40) % 1; const [x, z, a] = yolNokta(P, u.s * L); k.position.set(x, 0, z); k.rotation.y = -a;
      const vapur = buhar && u.esik < 0.6; u.yelken.visible = !vapur; u.baca.visible = vapur && !modern; u.ust.visible = vapur; u.govde.material.color.set(vapur ? (modern ? '#f4f1ea' : '#2f3a40') : '#7a5232');
    }
  }

  // ---------- sahne ----------
  function kur() {
    Rn = new THREE.WebGLRenderer({ canvas: cv, antialias: true }); Rn.setPixelRatio(Math.min(2, window.devicePixelRatio || 1));
    Rn.outputColorSpace = THREE.SRGBColorSpace; Rn.shadowMap.enabled = true; Rn.shadowMap.type = THREE.PCFSoftShadowMap;
    sc = new THREE.Scene(); sc.background = new THREE.Color('#cfe3ee'); sc.fog = new THREE.Fog('#cfe3ee', 14000, 40000);
    cam = new THREE.PerspectiveCamera(40, 1, 10, 60000);
    sc.add(new THREE.HemisphereLight('#ffffff', '#c9b08a', 1.0));
    const gun = new THREE.DirectionalLight('#fff3dc', 1.9); gun.position.set(-4000, 6000, 3000); gun.castShadow = true;
    gun.shadow.mapSize.set(4096, 4096); Object.assign(gun.shadow.camera, { left: -9000, right: 9000, top: 9000, bottom: -9000, near: 100, far: 20000 }); gun.shadow.bias = -0.0004; sc.add(gun);
    const su = new THREE.Mesh(new THREE.PlaneGeometry(80000, 80000), mat('#6aa7d6', { roughness: 0.35, flatShading: false })); su.rotation.x = -Math.PI / 2; su.position.y = -1.5; su.receiveShadow = true; sc.add(su);
    for (const k of V.kara) { const P = k.map(XZ), sh = new THREE.Shape(); P.forEach(([x, z], i) => i ? sh.lineTo(x, -z) : sh.moveTo(x, -z)); const geo = new THREE.ExtrudeGeometry(sh, { depth: 3, bevelEnabled: false }); geo.rotateX(-Math.PI / 2); geo.translate(0, -3, 0); const m = new THREE.Mesh(geo, mat('#dccaa4')); m.position.y = 0; m.receiveShadow = true; sc.add(m); }
    insaGrup = new THREE.Group(); sc.add(insaGrup);
    for (const o of V.yapilar) {
      const f = KUR[o.tip]; if (!f) continue; const g = f(o);
      if (o.ll) { const [x, z] = XZ(o.ll); g.position.set(x, 0, z); g.rotation.y = -(o.aci || 0); }
      g.traverse(m => { if (m.isMesh) { m.castShadow = true; m.receiveShadow = true; } });
      g.userData.o = o; insaGrup.add(g); yapilar.push(g);
      const yuk = o.kubbeH || o.h || 20, merk = o.ll ? XZ(o.ll) : (() => { const P = o.pts.map(XZ); return P[Math.floor(P.length / 2)]; })();
      const b = document.createElement('button'); b.innerHTML = `${o.ad}<small></small>`; b.onclick = () => bilgiGoster(o); labEl.appendChild(b);
      etiketler.push({ b, o, g, p: new THREE.Vector3(merk[0], yuk + 12, merk[1]) });
    }
    mahalleKur(); agacKur(); yolKur(); insanKur(); kayikKur();
  }
  function bilgiGoster(o) {
    const k = el.querySelector('.s3-bilgi'); k.hidden = false;
    k.innerHTML = `<button class="s3-bx">✕</button><b>${o.ad}</b><small>${YIL.fmt(o.from)}${o.to != null ? ' – ' + YIL.fmt(o.to) : ''}</small><p>${o.not || ''}</p>`;
    k.querySelector('.s3-bx').onclick = () => { k.hidden = true; };
  }
  function yilUygula(y) {
    const yi = Math.round(y); if (yi === sonY) return; sonY = yi;
    for (const g of yapilar) {
      const o = g.userData.o, v = varMi(o, yi); g.visible = v; if (!v) continue;
      const harabe = o.yikik != null && yi <= o.yikik;
      if (g.userData.harabe) for (const m of g.userData.harabe) m.visible = !(harabe && o.tip === 'hipodrom');
      g.scale.y = harabe && o.tip !== 'hipodrom' ? 0.45 : 1;
      if (g.userData.minare) { const say = (g.userData.minareYil.filter(([yy]) => yi <= yy).pop() || [0, 0])[1]; for (const m of g.userData.minare) m.visible = m.userData.sira < say; }
    }
    for (const g of yolGrup) g.visible = yi <= g.userData.from;
    evleriGuncelle(yi); agacGuncelle(yi);
    const d = V.donemler.find(q => yi <= q.from && yi >= q.to);
    el.querySelector('.s3-yil').textContent = YIL.fmt(yi);
    el.querySelector('.s3-donem').innerHTML = `${d ? d.t : ''}<small>Nüfus (yaklaşık): ${Math.round(egri(V.nufus, yi)).toLocaleString('tr-TR')} bin</small>`;
    const kd = el.querySelector('.s3-kaydir'); if (document.activeElement !== kd) kd.value = String(V.baslangic - yi);
  }
  function kameraKoy() {
    const x = orb.tx + orb.dist * Math.sin(orb.ph) * Math.sin(orb.th), y = orb.dist * Math.cos(orb.ph), z = orb.tz + orb.dist * Math.sin(orb.ph) * Math.cos(orb.th);
    cam.position.set(x, y, z); cam.lookAt(orb.tx, 0, orb.tz);
  }
  function kare(now) {
    const dt = Math.min(0.05, (now - last) / 1000); last = now; T += dt;
    if (oynuyor) { Y = Math.max(-2026, Y - dt * 25); if (Y <= -2026) { oynuyor = false; oynatDugme(); } ctx.setYear(Y); }
    else if (ctx) Y = ctx.Y();
    yilUygula(Y);
    const e = 1 - Math.exp(-dt * 3); for (const k of ['th', 'ph', 'dist', 'tx', 'tz']) orb[k] += (hedef[k] - orb[k]) * e;
    kameraKoy(); kayikGuncelle(dt, Y); insanGuncelle(dt, Y);
    const w = cv.clientWidth, h = cv.clientHeight, v = new THREE.Vector3();
    for (const t of etiketler) {
      const gor = t.g.visible && (orb.dist < 3500 || ['ayasofya', 'suleymaniye', 'sultanahmet', 'topkapi', 'galata-kulesi', 'theodosius-sur', 'hipodrom', 'bogazici-koprusu'].includes(t.o.id));
      v.copy(t.p).project(cam); const on = gor && v.z < 1 && Math.abs(v.x) < 1.05 && Math.abs(v.y) < 1.05;
      t.b.style.display = on ? '' : 'none'; if (on) { t.b.style.left = `${(v.x + 1) / 2 * w}px`; t.b.style.top = `${(1 - v.y) / 2 * h}px`; }
    }
    Rn.render(sc, cam); raf = requestAnimationFrame(kare);
  }
  function boyut() { const w = cv.clientWidth, h = cv.clientHeight; Rn.setSize(w, h, false); cam.aspect = w / h; cam.updateProjectionMatrix(); }
  function oynatDugme() { el.querySelector('.s3-oynat').textContent = oynuyor ? '⏸' : '▶'; }
  function kamGit(k) { const [x, z] = XZ(k.hedef); Object.assign(hedef, { tx: x, tz: z, th: k.th, ph: k.ph, dist: k.dist }); }
  function etkilesim() {
    let dr = null; const ptr = new Map();
    cv.addEventListener('pointerdown', e => { cv.setPointerCapture(e.pointerId); ptr.set(e.pointerId, [e.clientX, e.clientY]); dr = { x: e.clientX, y: e.clientY, sag: e.button === 2 || e.shiftKey }; });
    cv.addEventListener('pointermove', e => {
      if (!dr || !ptr.has(e.pointerId)) return; const o = ptr.get(e.pointerId), dx = e.clientX - o[0], dy = e.clientY - o[1]; ptr.set(e.pointerId, [e.clientX, e.clientY]);
      if (ptr.size === 2) { const [a, b] = [...ptr.values()], d = Math.hypot(a[0] - b[0], a[1] - b[1]); if (dr.pd) hedef.dist = clamp(hedef.dist * dr.pd / d, 250, 16000); dr.pd = d; return; }
      if (dr.sag) { const k = hedef.dist / 900, rx = Math.cos(hedef.th), rz = -Math.sin(hedef.th), fx = -Math.sin(hedef.th), fz = -Math.cos(hedef.th); hedef.tx -= (rx * dx - fx * dy) * k; hedef.tz -= (rz * dx - fz * dy) * k; }
      else { hedef.th -= dx * 0.005; hedef.ph = clamp(hedef.ph - dy * 0.004, 0.25, 1.35); }
    });
    const bit = e => { ptr.delete(e.pointerId); if (!ptr.size) dr = null; else if (dr) dr.pd = null; };
    cv.addEventListener('pointerup', bit); cv.addEventListener('pointercancel', bit); cv.addEventListener('contextmenu', e => e.preventDefault());
    cv.addEventListener('wheel', e => { e.preventDefault(); hedef.dist = clamp(hedef.dist * Math.exp(e.deltaY * 0.0012), 250, 16000); }, { passive: false });
    window.addEventListener('resize', () => { if (!el.hidden) boyut(); });
  }
  function open(ad, c) {
    V = (window.SEHIR3D || {})[ad]; if (!V || !THREE) return false; ctx = c; kos = Math.cos(V.merkez[0] * D);
    el = document.getElementById('s3'); cv = el.querySelector('canvas'); labEl = el.querySelector('.s3-etiket');
    if (!Rn) {
      kur(); etkilesim();
      el.querySelector('.s3-geri').onclick = close;
      el.querySelector('.s3-oynat').onclick = () => { if (Y <= -2025) { Y = V.baslangic; ctx.setYear(Y); } oynuyor = !oynuyor; oynatDugme(); };
      const kd = el.querySelector('.s3-kaydir'); kd.min = 0; kd.max = V.baslangic + 2026; kd.oninput = () => { oynuyor = false; oynatDugme(); Y = V.baslangic - +kd.value; ctx.setYear(Y); };
      el.querySelector('.s3-kam').innerHTML = V.kameralar.map((k, i) => `<button data-k="${i}">${k.ad}</button>`).join('');
      el.querySelector('.s3-kam').onclick = e => { const b = e.target.closest('[data-k]'); if (b) kamGit(V.kameralar[+b.dataset.k]); };
      el.querySelector('.s3-hizli').innerHTML = V.hizli.map(q => `<button data-y="${q.y}">${q.ad}</button>`).join('');
      el.querySelector('.s3-hizli').onclick = e => { const b = e.target.closest('[data-y]'); if (b) { oynuyor = false; oynatDugme(); Y = +b.dataset.y; ctx.setYear(Y); } };
    }
    el.querySelector('.s3-baslik').textContent = `${V.ad} · 3D`;
    el.hidden = false; Y = clamp(ctx.Y(), -2026, V.baslangic); ctx.setYear(Y); sonY = null; kamGit(V.kameralar[0]); Object.assign(orb, hedef, { dist: hedef.dist * 1.4 });
    boyut(); last = performance.now(); cancelAnimationFrame(raf); raf = requestAnimationFrame(kare); return true;
  }
  function close() { cancelAnimationFrame(raf); raf = 0; oynuyor = false; if (el) el.hidden = true; if (ctx && ctx.onClose) ctx.onClose(); }
  return { open, close, var: ad => !!(window.SEHIR3D || {})[ad], durum: () => evler && { lot: evler.B.map(z => z.L.length), ev: evler.ev.count, apt: evler.apt.count, yapi: yapilar.length } };
})();
