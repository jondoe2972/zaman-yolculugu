// 3D görünüm (three.js r159, MIT): seçilen yapı ve çevresi gerçek ölçü ve konumlarıyla, seçili yıldaki hâliyle.
// İnşaat sürüyorsa tam bir şantiye: piramidin etrafına sarılan rampa, rampada kızakla taş çeken ekipler,
// taş ocağı, işçi köyü ve fırınlar, Nil'den kanal ve limanla taş getiren kayıklar.
'use strict';
window.UcBoyut = (() => {
  const THREE = window.THREE;
  let R, scene, cam, raf = 0, el, cv, labelsEl, ctx = null, center = null, lastY = null, T = 0, last = 0;
  const orbit = { th: 0.8, ph: 1.2, dist: 400, tx: 0, ty: 30, tz: 0, auto: true };
  let group = null, dyn = null;
  const COL = { core: 0xc9a060, casing: 0xf7f0de, step: 0xdcc390, sand: 0xe6cf9c, granite: 0xb5655a, ruin: 0xc9bfae, brick: 0xa8845a, lime: 0xefe3c4 };
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
  const rnd = (i) => { const x = Math.sin(i * 127.1 + 311.7) * 43758.5453; return x - Math.floor(x); };

  function mat(color, o = {}) { return new THREE.MeshStandardMaterial({ color, roughness: 0.92, metalness: 0, flatShading: true, ...o }); }
  // taş sıraları dokusu
  const texCache = {};
  function blockTex(base) {
    if (texCache[base]) return texCache[base];
    const c = document.createElement('canvas'); c.width = c.height = 256; const g = c.getContext('2d');
    const col = new THREE.Color(base); g.fillStyle = `#${col.getHexString()}`; g.fillRect(0, 0, 256, 256);
    for (let i = 0; i < 1400; i++) { g.fillStyle = `rgba(${Math.random() < 0.5 ? '255,255,255' : '80,55,30'},${Math.random() * 0.08})`; g.fillRect(Math.random() * 256, Math.random() * 256, 2, 2); }
    g.strokeStyle = 'rgba(70,45,20,0.45)'; g.lineWidth = 2;
    for (let r = 0; r < 8; r++) { const y = r * 32; g.beginPath(); g.moveTo(0, y); g.lineTo(256, y); g.stroke(); for (let k = 0; k < 9; k++) { const x = k * 32 + (r % 2) * 16; g.beginPath(); g.moveTo(x, y); g.lineTo(x, y + 32); g.stroke(); } }
    const t = new THREE.CanvasTexture(c); t.wrapS = t.wrapT = THREE.RepeatWrapping; t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4;
    texCache[base] = t; return t;
  }
  // gerçek fotoğraf dokuları (Poly Haven, CC0): renk + kabartı + pürüz
  const TL = new THREE.TextureLoader(), pbrCache = {};
  function pbr(name, rx, ry, tint, o = {}) {
    const base = pbrCache[name] || (pbrCache[name] = ['diff', 'nor_gl', 'rough'].map(k => {
      const t = TL.load(`assets/3d/dokular/${name}_${k}_1k.jpg`); t.wrapS = t.wrapT = THREE.RepeatWrapping; t.anisotropy = 8;
      if (k === 'diff') t.colorSpace = THREE.SRGBColorSpace; return t;
    }));
    const [map, normalMap, roughnessMap] = base.map(t => { const c = t.clone(); c.repeat.set(rx, ry); return c; });
    return new THREE.MeshStandardMaterial({ map, normalMap, roughnessMap, color: tint ?? 0xffffff, roughness: 1, metalness: 0, normalScale: new THREE.Vector2(o.ns ?? 1, o.ns ?? 1), ...(o.m || {}) });
  }
  const TINT = { [COL.core]: 0xffd08e, [COL.step]: 0xffd89c, [COL.ruin]: 0xeadfcc };
  function frustum(w0, w1, h, color, tex) {
    const g = new THREE.CylinderGeometry(w1 * Math.SQRT2, w0 * Math.SQRT2, h, 4, 1, false);
    g.rotateY(Math.PI / 4); g.translate(0, h / 2, 0);
    let m;
    const slant = Math.hypot(h, w0 - w1);
    if (tex) m = new THREE.Mesh(g, pbr('large_sandstone_blocks', Math.max(1, w0 * 8 / 5), Math.max(1, slant / 5), TINT[color] ?? color, { m: { flatShading: true } }));
    else if (color === COL.casing) m = new THREE.Mesh(g, pbr('sand_03', Math.max(1, w0 * 8 / 40), Math.max(1, slant / 40), 0xfaf3e2, { ns: 0.25, m: { flatShading: true, roughness: 0.75 } }));
    else m = new THREE.Mesh(g, mat(color));
    m.castShadow = true; m.receiveShadow = true; return m;
  }
  function box(w, h, d, color, x = 0, y = 0, z = 0) { const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat(color)); m.position.set(x, y + h / 2, z); m.castShadow = true; m.receiveShadow = true; return m; }

  // ---------- yol üzerinde konum ----------
  function makePath(pts) { const L = [0]; for (let i = 1; i < pts.length; i++) L.push(L[i - 1] + pts[i].distanceTo(pts[i - 1])); return { pts, L, len: L[L.length - 1] }; }
  function posAt(p, s, out, dir) {
    s = ((s % p.len) + p.len) % p.len; let i = 1; while (i < p.L.length - 1 && p.L[i] < s) i++;
    const a = p.pts[i - 1], b = p.pts[i], f = (s - p.L[i - 1]) / Math.max(1e-6, p.L[i] - p.L[i - 1]);
    out.lerpVectors(a, b, f); if (dir) dir.subVectors(b, a).normalize(); return out;
  }

  // ---------- insanlar (çok sayıda, tek çizim çağrısıyla) ----------
  // Uzaktaki binlerce işçi basit ve hafif çizilir; kameraya yakın olanların yerine
  // animasyonlu insan modeli (Quaternius "Animated Human", CC0) geçer.
  const HERO_R = 110, HERO_N = 48;
  let heroSrc = null, heroClips = null, heroMat = null;
  const heroPool = [];
  function loadHero() {
    if (heroSrc || !window.ZY3 || loadHero.busy) return; loadHero.busy = true;
    new ZY3.FBXLoader().load('assets/3d/insan/insan.fbx', o => {
      heroClips = {}; for (const a of o.animations) { const k = a.name.split('|').pop(); heroClips[k] = a; }
      heroMat = new THREE.MeshStandardMaterial({ map: egyptPalette(), roughness: 0.85 });
      o.traverse(c => { if (c.isMesh) { c.material = heroMat; c.castShadow = true; c.frustumCulled = false; } });
      heroSrc = o;
    }, undefined, () => { loadHero.busy = false; });
  }
  // modelin renk paleti Mısırlı işçiye göre: çıplak gövde, beyaz keten peştamal, siyah saç
  function egyptPalette() {
    // paletin satır bantları: 0-5 ten, 6-10 saç, 11-16 kemer/ayakkabı, 17-22 gömlek, 23-31 pantolon
    const c = document.createElement('canvas'); c.width = c.height = 32; const g = c.getContext('2d');
    const band = (y0, y1, col) => { g.fillStyle = col; g.fillRect(0, y0, 32, y1 - y0 + 1); };
    band(0, 5, '#8c5634'); band(6, 10, '#1c140e'); band(11, 16, '#6b4a2a'); band(17, 22, '#8c5634'); band(23, 31, '#efe7d2');
    const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.magFilter = THREE.NearestFilter; return t;
  }
  function heroGet() {
    let h = heroPool.find(x => !x.used);
    if (!h) {
      if (heroPool.length >= HERO_N || !heroSrc) return null;
      const o = ZY3.SkeletonUtils.clone(heroSrc); o.scale.setScalar(1.72 / 526);
      const mixer = new THREE.AnimationMixer(o), acts = {};
      for (const k of ['Walk', 'Working', 'Idle']) if (heroClips[k]) acts[k] = mixer.clipAction(heroClips[k]);
      h = { o, mixer, acts, cur: null, used: false, key: -1 }; heroPool.push(h); scene.add(o);
    }
    h.used = true; return h;
  }
  function heroPlay(h, act) {
    if (h.cur === act || !h.acts[act]) return;
    if (h.cur) h.acts[h.cur].fadeOut(0.25);
    h.acts[act].reset().setEffectiveTimeScale(act === 'Walk' ? 1.1 : 1).fadeIn(0.25).play(); h.acts[act].time = Math.random() * h.acts[act].getClip().duration; h.cur = act;
  }
  function People(n) {
    const body = new THREE.InstancedMesh(new THREE.CapsuleGeometry(0.22, 0.75, 2, 6), mat(0x9a5a30), n);
    const kilt = new THREE.InstancedMesh(new THREE.CylinderGeometry(0.26, 0.34, 0.4, 6), mat(0xf4eedf), n);
    const head = new THREE.InstancedMesh(new THREE.SphereGeometry(0.15, 8, 6), mat(0x1d140c), n);
    for (const m of [body, kilt, head]) { m.castShadow = true; m.count = 0; m.frustumCulled = false; }
    const M = new THREE.Matrix4(), Q = new THREE.Quaternion(), S = new THREE.Vector3(1, 1, 1), P = new THREE.Vector3(), E = new THREE.Euler();
    let i = 0, k = 0; const buf = [];
    return {
      meshes: [body, kilt, head], begin() { i = 0; k = 0; buf.length = 0; },
      add(x, y, z, yaw = 0, lean = 0, bob = 0, act = 'Walk') {
        const key = k++;
        if (heroSrc && cam) { const d = Math.hypot(x - cam.position.x, y - cam.position.y, z - cam.position.z); if (d < HERO_R) { buf.push({ key, d, x, y, z, yaw, lean, act }); return; } }
        if (i >= n) return; E.set(lean, yaw, 0); Q.setFromEuler(E);
        P.set(x, y + 0.6 + bob, z); M.compose(P, Q, S); body.setMatrixAt(i, M);
        P.set(x, y + 0.55 + bob, z); M.compose(P, Q, S); kilt.setMatrixAt(i, M);
        P.set(x + Math.sin(yaw) * lean * 0.8, y + 1.55 + bob, z + Math.cos(yaw) * lean * 0.8); M.compose(P, Q, S); head.setMatrixAt(i, M);
        i++;
      },
      end(dt) {
        // en yakın HERO_N kişi animasyonlu model olur; kalanlar basit çizilir
        buf.sort((a, b) => a.d - b.d);
        const keep = new Map(buf.slice(0, HERO_N).map(b => [b.key, b]));
        for (const h of heroPool) if (h.used && !keep.has(h.key)) { h.used = false; h.o.visible = false; }
        for (const b of buf.slice(HERO_N)) { const { x, y, z, yaw, lean } = b; this.addSimple(x, y, z, yaw, lean); }
        for (const [key, b] of keep) {
          let h = heroPool.find(x => x.used && x.key === key);
          if (!h) { h = heroGet(); if (!h) { this.addSimple(b.x, b.y, b.z, b.yaw, b.lean); continue; } h.key = key; }
          h.o.visible = true; h.o.position.set(b.x, b.y, b.z); h.o.rotation.set(b.act === 'Walk' ? b.lean * 0.5 : 0, b.yaw, 0, 'YXZ');
          heroPlay(h, b.act); h.mixer.update(dt);
        }
        for (const m of [body, kilt, head]) { m.count = i; m.instanceMatrix.needsUpdate = true; }
      },
      addSimple(x, y, z, yaw, lean) {
        if (i >= n) return; E.set(lean, yaw, 0); Q.setFromEuler(E);
        P.set(x, y + 0.6, z); M.compose(P, Q, S); body.setMatrixAt(i, M);
        P.set(x, y + 0.55, z); M.compose(P, Q, S); kilt.setMatrixAt(i, M);
        P.set(x + Math.sin(yaw) * lean * 0.8, y + 1.55, z + Math.cos(yaw) * lean * 0.8); M.compose(P, Q, S); head.setMatrixAt(i, M);
        i++;
      }
    };
  }
  function Blocks(n) {
    const mesh = new THREE.InstancedMesh(new THREE.BoxGeometry(1.8, 1.1, 1.2), pbr('sandstone_cracks', 0.5, 0.3, 0xfff4e0), n);
    // ahşap kızak: iki kızak ayağı ve üç travers tek geometride
    const sg = mergeGeo([[2.6, 0.22, 0.18, 0, 0.11, -0.5], [2.6, 0.22, 0.18, 0, 0.11, 0.5], [0.16, 0.12, 1.3, -0.8, 0.26, 0], [0.16, 0.12, 1.3, 0, 0.26, 0], [0.16, 0.12, 1.3, 0.8, 0.26, 0]].map(([w, h, d, x, y, z]) => new THREE.BoxGeometry(w, h, d).translate(x, y, z)));
    sg.rotateY(Math.PI / 2);
    const sled = new THREE.InstancedMesh(sg, mat(0x7a5532), n);
    for (const m of [mesh, sled]) { m.castShadow = true; m.count = 0; m.frustumCulled = false; }
    const M = new THREE.Matrix4(), Q = new THREE.Quaternion(), S = new THREE.Vector3(1, 1, 1), P = new THREE.Vector3(), E = new THREE.Euler(); let i = 0;
    return { meshes: [mesh, sled], begin() { i = 0; }, add(x, y, z, yaw) { if (i >= n) return; E.set(0, yaw + Math.PI / 2, 0); Q.setFromEuler(E); P.set(x, y + 0.87, z); M.compose(P, Q, S); mesh.setMatrixAt(i, M); E.set(0, yaw, 0); Q.setFromEuler(E); P.set(x, y, z); M.compose(P, Q, S); sled.setMatrixAt(i++, M); }, end() { for (const m of [mesh, sled]) { m.count = i; m.instanceMatrix.needsUpdate = true; } } };
  }
  // birkaç geometriyi tek geometride birleştirir (indekssiz)
  function mergeGeo(list) {
    const pos = [], nor = [], uv = [];
    for (const g0 of list) { const g = g0.index ? g0.toNonIndexed() : g0; pos.push(...g.attributes.position.array); nor.push(...g.attributes.normal.array); if (g.attributes.uv) uv.push(...g.attributes.uv.array); }
    const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setAttribute('normal', new THREE.Float32BufferAttribute(nor, 3));
    if (uv.length === pos.length / 3 * 2) g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
    return g;
  }
  // hurma ağacı yaprak tacı: aşağı sarkan uzun yapraklar
  function frondGeo() {
    const leaves = [];
    for (let i = 0; i < 9; i++) {
      const L = 4.2 + (i % 3) * 0.5, g = new THREE.PlaneGeometry(0.9, L, 1, 6); g.translate(0, L / 2, 0);
      const p = g.attributes.position; for (let k = 0; k < p.count; k++) { const y = p.getY(k), t = y / L; p.setX(k, p.getX(k) * (1 - t * 0.8) * (1 + Math.sin(t * 3.1) * 0.6)); p.setZ(k, -t * t * L * 0.75); }
      g.rotateX(-1.05 - (i % 2) * 0.25); g.rotateY(i / 9 * Math.PI * 2); g.computeVertexNormals(); leaves.push(g);
    }
    return mergeGeo(leaves);
  }

  // ---------- yapı modelleri ----------
  function hwFn(m) {
    const h = m.h, b = m.b / 2;
    return z => {
      if (m.type === 'bent') return z <= m.bz ? b + (m.bhw - b) * z / m.bz : m.bhw * (1 - (z - m.bz) / (h - m.bz));
      if (m.type === 'mastaba') return b - z * 0.3;
      return b * (1 - z / h);
    };
  }
  function pyramidModel(m, p, ruined, site) {
    const g = new THREE.Group(), h = m.h, b = m.b / 2, hw = hwFn(m);
    const pc = m.type === 'mastaba' ? p : clamp(p / 0.88, 0, 1);
    const zb = m.type === 'mastaba' ? h * p : h * (1 - Math.cbrt(1 - pc));
    const cf = (m.type === 'true' || m.type === 'bent') ? clamp((p - 0.88) / 0.12, 0, 1) : 0;
    const finished = cf >= 1 || (m.type !== 'true' && m.type !== 'bent' && p >= 1);
    const base = ruined ? COL.ruin : (m.type === 'step' || m.type === 'mastaba' ? COL.step : COL.core);
    const tex = !finished || ruined;
    const col = finished && !ruined ? COL.casing : base;
    if (m.type === 'step') {
      const n = m.steps, sh = h / n;
      for (let i = 0; i < n; i++) { const z0 = i * sh; if (z0 >= zb) break; const hh = Math.min(sh, zb - z0), w = b * (1 - i * (1 - 0.34) / Math.max(1, n - 1)); const s = frustum(w, w - sh * 0.2 * hh / sh, hh, base, true); s.position.y = z0; g.add(s); }
    } else if (m.type === 'bent' && zb > m.bz) {
      g.add(frustum(b, hw(m.bz), m.bz, col, tex)); const u = frustum(hw(m.bz), hw(zb), zb - m.bz, col, tex); u.position.y = m.bz; g.add(u);
    } else if (zb > 0.3) {
      g.add(frustum(b, Math.max(0.01, hw(zb)), zb, col, tex));
      // kaplama yukarıdan aşağı (son aşama)
      if (cf > 0 && cf < 1) { const zc = h * (1 - cf); const cap = frustum(hw(zc) + 0.15, 0.01, h - zc, COL.casing, false); cap.position.y = zc; g.add(cap); }
    }
    if (m.granite && zb > 0) { const gz = Math.min(zb, h * m.granite); g.add(frustum(b + 0.2, hw(gz) + 0.2, gz, COL.granite, false)); }
    const building = p > 0 && p < 1 && !ruined && !(m.stop && ctx.Y() <= m.stop);
    if (building && m.type !== 'mastaba' && zb > 3) site.push({ m, zb, hw, g });
    return g;
  }
  function sphinxModel(p) {
    const g = new THREE.Group(), c = 0xd6b57d, s = clamp(p * 1.2, 0.05, 1);
    const bodyM = new THREE.Mesh(new THREE.CapsuleGeometry(8, 40, 4, 10), mat(c)); bodyM.rotation.z = Math.PI / 2; bodyM.scale.y = 1; bodyM.position.set(-8, 8 * s, 0); bodyM.castShadow = true; g.add(bodyM);
    g.add(box(22, 4, 5, c, 28, 0, -5)); g.add(box(22, 4, 5, c, 28, 0, 5));
    if (p > 0.3) { const ne = frustum(7, 4, 13, 0xe2c590); ne.position.set(18, 10, 0); g.add(ne); g.add(box(6, 9, 7, c, 22, 11, 0)); }
    return g;
  }
  function templeModel(m, p) {
    const g = new THREE.Group(), w = m.b / 2, h = m.h, ph = clamp((p - 0.35) / 0.65, 0, 1);
    g.add(box(m.b * 0.92, h * 0.55 * clamp(p / 0.5, 0.05, 1), m.b * 1.4, 0xdcc08a, 0, 0, m.b * 0.75));
    if (p > 0.5) for (let i = 0; i < 6; i++) for (let j = 0; j < 2; j++) { const c = new THREE.Mesh(new THREE.CylinderGeometry(1.6, 1.8, h * 0.5, 10), mat(0xe9d3a3)); c.position.set((j ? 1 : -1) * w * 0.3, h * 0.25, m.b * 0.3 + i * m.b * 0.2); c.castShadow = true; g.add(c); }
    if (ph > 0) for (const sd of [-1, 1]) { const t = frustum(w * 0.42, w * 0.32, h * ph, sd < 0 ? 0xe6c995 : 0xd9b880, true); t.scale.z = 0.35; t.position.x = sd * w * 0.55; g.add(t); }
    if (ph > 0.6) g.add(box(m.b * 0.16, h * 0.72, m.b * 0.2, 0xe9d3a3, 0, 0, 0));
    if (m.obelisks && p >= 1) for (const sd of [-1, 1]) { const o = frustum(m.obelisks * 0.06, m.obelisks * 0.04, m.obelisks, 0xd9a99a); o.position.set(sd * w * 0.25, 0, -m.b * 0.25); g.add(o); }
    return g;
  }
  function otherModel(m, p) {
    const g = new THREE.Group(), s = clamp(p, 0.05, 1);
    switch (m.type) {
      case 'obelisk': g.add(frustum(m.h * 0.05, m.h * 0.035, m.h * s, 0xd9a99a)); break;
      case 'terrace': for (let i = 0; i < 3; i++) if (p * 3 > i) { g.add(box(m.b * (1 - i * 0.24), m.h / 3, m.b * 0.5 * (1 - i * 0.2), i % 2 ? 0xf3e8cf : 0xead9b4, 0, i * m.h / 3, -i * m.b * 0.12)); for (let k = 0; k < 10; k++) g.add(box(1.4, m.h / 3 - 1, 1.4, 0xf7efdc, -m.b * (1 - i * 0.24) / 2 + 4 + k * m.b * (1 - i * 0.24) / 10, i * m.h / 3, -i * m.b * 0.12 + m.b * 0.25 * (1 - i * 0.2))); } break;
      case 'colossus': for (const sd of [-1, 1]) { g.add(box(5, m.h * 0.45 * s, 7, 0xc9a07a, sd * m.b / 2, 0, 0)); if (p > 0.5) g.add(box(3.5, m.h * 0.55, 4, 0xc9a07a, sd * m.b / 2, m.h * 0.45, -1)); } break;
      case 'rocktemple': g.add(box(m.b * 2, m.h * 1.2, 30, 0xc98b52, 0, 0, -15)); for (let i = 0; i < 4; i++) g.add(box(6, m.h * 0.8 * s, 6, 0xe6b37c, -m.b * 0.37 + i * m.b * 0.25, 0, 2)); break;
      case 'lighthouse': g.add(box(m.h * 0.3, m.h * 0.56 * s, m.h * 0.3, 0xf3ecda)); if (p > 0.6) { const c = new THREE.Mesh(new THREE.CylinderGeometry(m.h * 0.09, m.h * 0.1, m.h * 0.28, 8), mat(0xece3cc)); c.position.y = m.h * 0.7; g.add(c); } if (p >= 1) { const l = new THREE.PointLight(0xffb347, 2, 300); l.position.y = m.h * 0.95; g.add(l); g.add(box(m.h * 0.08, m.h * 0.1, m.h * 0.08, 0xffc04d, 0, m.h * 0.85, 0)); } break;
      case 'city': for (let i = 0; i < Math.round((m.n || 16) * s); i++) { const a = i * 2.4, r = 8 + i * 6; g.add(box(10 + (i % 3) * 4, 5 + (i % 4) * 2, 10, i % 2 ? 0xcaa06a : 0xd3ab74, Math.cos(a) * r, 0, Math.sin(a) * r)); } break;
      case 'valley': g.add(box(m.b, m.h * 0.7, 60, 0xd8a76a, 0, 0, -40)); for (let i = 0; i < Math.round((m.n || 20) * s); i++) g.add(box(3, 4, 1, 0x3d2412, -m.b / 2 + 10 + i * (m.b - 20) / 20, 2 + (i % 3) * 8, -9.6)); break;
      default: g.add(box((m.b || 30), (m.h || 10) * s, (m.b || 30), 0xd9b878));
    }
    return g;
  }
  function modelFor(m, p, ruined, site) {
    if (['true', 'bent', 'step', 'mastaba'].includes(m.type)) return pyramidModel(m, p, ruined, site);
    if (m.type === 'sphinx') return sphinxModel(p);
    if (m.type === 'temple' || m.type === 'suntemple') return templeModel(m, p);
    return otherModel(m, p);
  }

  // ---------- şantiye: sarmal rampa, ocak, köy, kanal, liman, kayıklar ----------
  function buildSite(s, nile) {
    const g = new THREE.Group(), o = s.g.position, b = s.m.b / 2, off = 5, slope = 0.13;
    // sarmal rampa: güneydoğu köşeden başlayıp piramidin etrafında saat yönünde yükselir
    const pts = []; let t = 0, z = 0;
    const sq = (tt, w) => { const k = ((tt % 4) + 4) % 4, si = Math.floor(k), f = k - si; switch (si) { case 0: return [w - 2 * w * f, w]; case 1: return [-w, w - 2 * w * f]; case 2: return [-w + 2 * w * f, -w]; default: return [w, -w + 2 * w * f]; } };
    while (z < s.zb - 0.5 && pts.length < 2000) { const w = s.hw(z) + off, [x, zz] = sq(t, w); pts.push(new THREE.Vector3(o.x + x, z + 1, o.z + zz)); const ds = 6; t += ds / (2 * w); z += ds * slope; }
    const rmat = pbr('sandstone_cracks', 2, 3, 0x9e8a72, { ns: 1.4 });
    for (let i = 1; i < pts.length; i++) {
      const a = pts[i - 1], c = pts[i], len = a.distanceTo(c);
      const seg = new THREE.Mesh(new THREE.BoxGeometry(9, 2.2, len + 0.4), rmat); seg.position.lerpVectors(a, c, 0.5); seg.position.y -= 1.2; seg.lookAt(c.x, c.y - 1.2, c.z); seg.castShadow = true; seg.receiveShadow = true; g.add(seg);
    }
    // taş ocağı (piramidin güneybatısında)
    const q = new THREE.Vector3(o.x - b * 1.1, 0, o.z + b * 2.4);
    const qm = pbr('sandstone_cracks', 12, 7, 0xf0dcb4); for (let i = 0; i < 4; i++) { const qb = box(120 - i * 22, 2.5, 70 - i * 12, 0, q.x, -i * 0.2, q.z); qb.material = qm; g.add(qb); }
    const bm = pbr('sandstone_cracks', 0.5, 0.3, 0xfff4e0); for (let i = 0; i < 60; i++) g.add(Object.assign(box(1.8, 1.1, 1.2, COL.lime, q.x - 50 + rnd(i) * 100, 2.5, q.z - 25 + rnd(i + 9) * 50), { material: bm }));
    // işçi köyü ve fırınlar (güneydoğuda)
    const v = new THREE.Vector3(o.x + b * 1.6, 0, o.z + b * 2.8);
    const houseM = pbr('sandstone_cracks', 2, 1, 0xd2a878), roofM = mat(0x9c7a4c);
    for (let i = 0; i < 9; i++) for (let j = 0; j < 6; j++) { const hx = v.x + i * 14, hz = v.z + j * 16; const hb = new THREE.Mesh(new THREE.BoxGeometry(11, 3.4, 12), houseM); hb.position.set(hx, 1.7, hz); hb.castShadow = hb.receiveShadow = true; g.add(hb); const r = new THREE.Mesh(new THREE.BoxGeometry(11.6, 0.5, 12.6), roofM); r.position.set(hx, 3.6, hz); g.add(r); }
    const smokeSrc = []; for (let i = 0; i < 4; i++) { const bk = new THREE.Mesh(new THREE.CylinderGeometry(2.5, 3, 4, 10, 1, false, 0, Math.PI * 2), mat(0x8a5a3a)); bk.position.set(v.x - 18, 2, v.z + i * 22); g.add(bk); smokeSrc.push(bk.position.clone()); }
    // kanal ve liman (Nil yakınsa)
    const boats = []; let basinPos = null;
    if (nile) {
      const basin = new THREE.Vector3(o.x + b * 2.6, 0, o.z + b * 0.4); basinPos = basin;
      const wmat = new THREE.MeshStandardMaterial({ color: 0x2c5a68, roughness: 0.06, metalness: 0.2, polygonOffset: true, polygonOffsetFactor: -2 });
      const bs = new THREE.Mesh(new THREE.BoxGeometry(260, 0.6, 160), wmat); bs.position.set(basin.x, 0.35, basin.z); g.add(bs);
      const dir = new THREE.Vector3().subVectors(nile, basin); const L = dir.length();
      const can = new THREE.Mesh(new THREE.BoxGeometry(45, 0.6, L), wmat); can.position.lerpVectors(basin, nile, 0.5); can.position.y = 0.35; can.lookAt(nile.x, 0.35, nile.z); g.add(can);
      for (let i = 0; i < 18; i++) g.add(box(1.8, 1.1, 1.2, COL.lime, basin.x - 120 + rnd(i + 30) * 30, 0.6, basin.z - 70 + rnd(i + 40) * 140));
      const canalPath = makePath([new THREE.Vector3(nile.x, 0.6, nile.z), new THREE.Vector3(basin.x + 60, 0.6, basin.z)]);
      for (let i = 0; i < 6; i++) boats.push({ path: canalPath, s: i / 6 * canalPath.len, v: 6 + rnd(i) * 3, loaded: i % 2 === 0, mesh: boatMesh(true) });
      for (const bt of boats) g.add(bt.mesh);
    }
    // şantiyenin yolu: ocak -> rampa başı -> sarmal rampa
    const route = makePath([new THREE.Vector3(q.x, 0.5, q.z - 30), new THREE.Vector3(pts[0].x, 0.5, pts[0].z + 25), ...pts]);
    return { group: g, route, pts, basin: basinPos, quarry: q, village: v, smokeSrc, boats, top: s.zb, o, hwTop: s.hw(s.zb) };
  }
  // Nil kayığı: uçları yukarı kıvrık, ince uzun gövde; kıçta dümen küreği, ortada yük, isteğe bağlı yelken
  let hullGeo = null;
  function boatMesh(withSail) {
    const g = new THREE.Group();
    if (!hullGeo) {
      hullGeo = new THREE.CylinderGeometry(1.9, 1.9, 22, 12, 24, false, Math.PI / 2, Math.PI); hullGeo.rotateX(Math.PI / 2); hullGeo.rotateZ(Math.PI);
      const p = hullGeo.attributes.position;
      for (let k = 0; k < p.count; k++) { const z = p.getZ(k) / 11, w = Math.max(0.08, 1 - z * z * 0.85); p.setX(k, p.getX(k) * w); p.setY(k, p.getY(k) * w * 0.7 + Math.pow(Math.abs(z), 5) * 3.2); }
      hullGeo.computeVertexNormals();
    }
    const hm = new THREE.MeshStandardMaterial({ color: 0x9a6a3a, roughness: 0.9, side: THREE.DoubleSide });
    const hull = new THREE.Mesh(hullGeo, hm); hull.position.y = 1.3; hull.castShadow = true; g.add(hull);
    // bağlama ipleri (papirüs demeti görünümü)
    for (let i = -4; i <= 4; i++) { const r = new THREE.Mesh(new THREE.TorusGeometry(1.75 * (1 - (i / 5.5) ** 2 * 0.85), 0.07, 4, 12, Math.PI), mat(0x5e4024)); r.rotation.set(0, 0, Math.PI); r.position.set(0, 1.3, i * 2.2); g.add(r); }
    const deck = box(2.6, 0.15, 14, 0x8a6036, 0, 1.15, 0); g.add(deck);
    const oar = box(0.18, 0.18, 6, 0x6b4a2a, 0.9, 1.6, -11); oar.rotation.x = 0.5; g.add(oar);
    const cargo = box(1.8, 1.1, 1.2, COL.lime, 0, 1.25, 2); cargo.material = pbr('sandstone_cracks', 0.5, 0.3, 0xfff4e0); const c2 = cargo.clone(); c2.position.z = 4.2; const c3 = cargo.clone(); c3.position.z = -0.2;
    const cg = new THREE.Group(); cg.add(cargo, c2, c3); g.add(cg); g.userData.cargo = cg;
    if (withSail) {
      const mast = box(0.3, 13, 0.3, 0x6b4a2a, 0, 1.3, -1.5); g.add(mast);
      const sail = new THREE.Mesh(new THREE.PlaneGeometry(8, 7, 6, 4), new THREE.MeshStandardMaterial({ color: 0xf1e8d2, side: THREE.DoubleSide, roughness: 1 }));
      const sp = sail.geometry.attributes.position; for (let k = 0; k < sp.count; k++) sp.setZ(k, Math.cos(sp.getX(k) / 8 * Math.PI) * 0.8); sail.geometry.computeVertexNormals();
      sail.rotation.y = Math.PI / 2; sail.position.set(0, 9.5, -1.5); sail.castShadow = true; g.add(sail);
      for (const y of [6, 13]) { const yard = box(0.15, 0.15, 8.6, 0x6b4a2a, 0, y, -1.5); g.add(yard); }
    }
    return g;
  }

  // ---------- Nil ve tarlalar ----------
  let nileCache = null;
  function nileLocal() {
    const nil = ((window.DUNYA_VERI || {}).nehir || []).filter(r => /Nile/.test(r.ad));
    const out = [];
    for (const r of nil) { let seg = []; for (const p of r.p) { const [x, z] = local(p); if (Math.hypot(x, z) < 22000) seg.push(new THREE.Vector3(x, 0, z)); else if (seg.length) { out.push(seg); seg = []; } } if (seg.length > 1) out.push(seg); }
    return out;
  }
  function ribbon(seg, w, y, material) {
    const pos = [], idx = [], uv = []; let run = 0;
    seg.forEach((p, i) => { if (i) run += p.distanceTo(seg[i - 1]); uv.push(0, run / 40, w / 40, run / 40); const a = seg[Math.max(0, i - 1)], b = seg[Math.min(seg.length - 1, i + 1)]; const d = new THREE.Vector3().subVectors(b, a).normalize(); const nx = -d.z, nz = d.x; pos.push(p.x + nx * w / 2, y, p.z + nz * w / 2, p.x - nx * w / 2, y, p.z - nz * w / 2); if (i) { const k = i * 2; idx.push(k - 2, k - 1, k, k - 1, k + 1, k); } });
    const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2)); g.setIndex(idx); g.computeVertexNormals();
    const m = new THREE.Mesh(g, material); m.receiveShadow = true; return m;
  }

  // ---------- sahneyi kur ----------
  function local(ll) { const [la0, lo0] = ctx.coords[center.id]; return [(ll[1] - lo0) * Math.cos(la0 * Math.PI / 180) * 111320, -(ll[0] - la0) * 110540]; }
  let people = null, blocks = null, smoke = [], skyDome = null, hemi = null;
  // gerçek gökyüzü (Poly Haven HDRI, CC0): hem arka plan hem de yansıyan ortam ışığı
  function loadSky() {
    if (loadSky.done || !window.ZY3 || !R) return; loadSky.done = true;
    new ZY3.RGBELoader().load('assets/3d/gok/kloofendal_48d_partly_cloudy_puresky_1k.hdr', t => {
      t.mapping = THREE.EquirectangularReflectionMapping;
      const pm = new THREE.PMREMGenerator(R); scene.environment = pm.fromEquirectangular(t).texture; pm.dispose();
      scene.background = t; scene.backgroundIntensity = 0.9; scene.environmentIntensity = 0.55; scene.backgroundRotation && scene.backgroundRotation.set(0, 2.2, 0);
      if (skyDome) skyDome.visible = false; if (hemi) hemi.intensity = 0.35;
    }, undefined, () => { loadSky.done = false; });
  }
  function loadExtras() { loadSky(); loadHero(); }
  window.addEventListener('zy3-hazir', () => { if (R) loadExtras(); });
  function rebuild() {
    if (group) scene.remove(group);
    for (const h of heroPool) { h.used = false; h.o.visible = false; }
    group = new THREE.Group(); const sites = [], Y = ctx.Y(), list = [];
    for (const m of ctx.monuments()) {
      const ll = ctx.coords[m.id]; if (!ll || m.gen) continue;
      const [x, z] = local(ll); if (Math.hypot(x, z) > 4500) continue;
      const p = ctx.progress(m, Y); if (p < 0) continue;
      const ruined = !!(m.ruin && Y <= m.ruin) || !!(m.stop && Y <= m.stop && m.maxP < 1);
      const o = modelFor(m, p, ruined, sites); o.position.set(x, 0, z); group.add(o);
      list.push({ m, x, z, p, ruined });
    }
    // Nil, tarlalar, palmiyeler
    const segs = nileLocal(); let nearest = null, nd = 1e9;
    const fieldM = pbr('sand_03', 1, 1, 0x86b052, { ns: 1.2, m: { side: THREE.DoubleSide, polygonOffset: true, polygonOffsetFactor: -1 } });
    const waterM = new THREE.MeshStandardMaterial({ side: THREE.DoubleSide, color: 0x2c5a68, roughness: 0.06, metalness: 0.2, polygonOffset: true, polygonOffsetFactor: -2 });
    for (const sg of segs) { group.add(ribbon(sg, 5000, 0.12, fieldM)); group.add(ribbon(sg, 650, 0.3, waterM)); for (const p of sg) { const d = Math.hypot(p.x, p.z); if (d < nd) { nd = d; nearest = p.clone(); } } }
    if (segs.length) {
      const n = 600, tg = new THREE.CylinderGeometry(0.28, 0.45, 11, 7, 6); tg.translate(0, 5.5, 0);
      { const p = tg.attributes.position; for (let i = 0; i < p.count; i++) { const y = p.getY(i); p.setX(i, p.getX(i) + (y / 11) ** 2 * 1.2); const ring = Math.sin(y * 9) * 0.04; p.setZ(i, p.getZ(i) * (1 + ring)); } tg.computeVertexNormals(); }
      const trunk = new THREE.InstancedMesh(tg, mat(0x7c5a38, { flatShading: false }), n);
      const crown = new THREE.InstancedMesh(frondGeo(), new THREE.MeshStandardMaterial({ color: 0x5d8a35, roughness: 0.8, side: THREE.DoubleSide }), n);
      const M = new THREE.Matrix4(), Qp = new THREE.Quaternion(), Sp = new THREE.Vector3(), Pp = new THREE.Vector3(), Ep = new THREE.Euler(); let k = 0; const all = segs.flat();
      for (let i = 0; i < n && all.length; i++) {
        const p = all[Math.floor(rnd(i) * all.length)], sd = rnd(i + 3) < 0.5 ? -1 : 1, d = 360 + rnd(i + 7) * 1800, sc = 0.8 + rnd(i + 13) * 0.5, ry = rnd(i + 17) * 6.3;
        // palmiyeler kümeler hâlinde: her 3 ağaç bir koru
        const cx = p.x + sd * d, cz = p.z + (rnd(i + 11) - 0.5) * 300, x = cx + (rnd(i + 19) - 0.5) * 24, z = cz + (rnd(i + 23) - 0.5) * 24;
        Ep.set(0, ry, 0); Qp.setFromEuler(Ep); Sp.setScalar(sc); Pp.set(x, 0, z); M.compose(Pp, Qp, Sp); trunk.setMatrixAt(k, M);
        Pp.set(x + Math.cos(ry) * 1.2 * sc, 11 * sc, z - Math.sin(ry) * 1.2 * sc); M.compose(Pp, Qp, Sp); crown.setMatrixAt(k, M); k++;
      }
      trunk.count = crown.count = k; trunk.castShadow = crown.castShadow = true; group.add(trunk); group.add(crown);
    }
    // şantiye
    dyn = null; smoke.forEach(s => scene.remove(s)); smoke = [];
    const active = sites.sort((a, b) => b.m.b - a.m.b)[0];
    if (active) {
      dyn = buildSite(active, nearest && nd < 15000 ? nearest : null); group.add(dyn.group);
      for (const sp of dyn.smokeSrc) for (let i = 0; i < 6; i++) { const s = new THREE.Mesh(new THREE.SphereGeometry(1.6, 8, 6), new THREE.MeshStandardMaterial({ color: 0xdedad2, transparent: true, opacity: 0.4, depthWrite: false })); s.userData = { base: sp, ph: i / 6 }; smoke.push(s); scene.add(s); }
    }
    // nehirde de kayıklar
    if (segs.length) {
      const longest = segs.reduce((a, b) => (b.length > a.length ? b : a)); const rp = makePath(longest.map(p => new THREE.Vector3(p.x, 0.5, p.z)));
      const nb = []; for (let i = 0; i < 10; i++) { const bt = { path: rp, s: rnd(i + 50) * rp.len, v: (i % 2 ? 1 : -1) * (5 + rnd(i) * 3), loaded: i % 3 === 0, mesh: boatMesh(i % 2 === 0) }; nb.push(bt); group.add(bt.mesh); }
      if (dyn) dyn.boats.push(...nb); else dyn = { boats: nb };
    }
    scene.add(group);
    // etiketler
    labelsEl.innerHTML = list.map((o, i) => `<button data-l="${i}" data-id="${o.m.id}">${o.m.ad.replace(/ \(.*\)$/, '')}<small>${o.ruined ? 'harabe' : o.p >= 1 ? 'tamam' : `inşaat %${Math.round(o.p * 100)}`}</small></button>`).join('');
    labelsEl._list = list;
    const c = list.find(o => o.m.id === center.id) || list[0];
    el.querySelector('.u3-durum').textContent = `${YIL.fmt(Math.round(Y))} · ${c ? (c.ruined ? 'harabe' : c.p >= 1 ? 'tamamlanmış' : `inşaat sürüyor · %${Math.round(c.p * 100)}`) : 'bu yılda yok'}${dyn && dyn.route ? ' · şantiye canlı' : ''}`;
  }

  // ---------- canlandırma ----------
  const V = new THREE.Vector3(), Dv = new THREE.Vector3();
  function animate(dt) {
    if (!dyn) return;
    people.begin(); blocks.begin();
    if (dyn.route) {
      const r = dyn.route, nTeam = 34;
      for (let k = 0; k < nTeam; k++) {
        const s = (T * 2.2 + k * r.len / nTeam) % r.len;
        posAt(r, s, V, Dv); const yaw = Math.atan2(Dv.x, Dv.z);
        blocks.add(V.x, V.y - 0.4, V.z, yaw);
        // önde iki sıra halinde çekenler, kızağın önünde su döken
        for (let j = 0; j < 8; j++) { const ss = s + 4 + Math.floor(j / 2) * 1.6; posAt(r, ss, V, Dv); const side = (j % 2 ? 1 : -1) * 0.8; people.add(V.x + Dv.z * side, V.y - 0.4, V.z - Dv.x * side, Math.atan2(Dv.x, Dv.z), 0.35, Math.abs(Math.sin(T * 6 + j)) * 0.08); }
        posAt(r, s + 2.2, V, Dv); people.add(V.x, V.y - 0.4, V.z, Math.atan2(Dv.x, Dv.z), 0.1, 0, 'Walk');
        if (k % 4 === 0) { posAt(r, s - 2.5, V, Dv); people.add(V.x + Dv.z * 2, V.y - 0.4, V.z - Dv.x * 2, Math.atan2(Dv.x, Dv.z), 0, 0, 'Walk'); }
      }
      // tepedeki ve dipteki ustalar
      const o = dyn.o, w = dyn.hwTop;
      for (let i = 0; i < 70; i++) { const a = rnd(i) * Math.PI * 2, rr = rnd(i + 5) * w * 0.9; people.add(o.x + Math.cos(a) * rr, dyn.top, o.z + Math.sin(a) * rr, a, Math.sin(T * 3 + i) * 0.3, 0, i % 3 ? 'Working' : 'Idle'); }
      for (let i = 0; i < 60; i++) { const sd = Math.floor(rnd(i + 20) * 4), f = rnd(i + 30) * 2 - 1, B = dyn.pts.length ? dyn.o : o, bw = (dyn.pts[0] ? Math.abs(dyn.pts[0].x - dyn.o.x) : 50) + 14; const x = sd < 2 ? f * bw : (sd === 2 ? -bw : bw), z = sd < 2 ? (sd ? -bw : bw) : f * bw; people.add(B.x + x + Math.sin(T * 0.4 + i) * 3, 0, B.z + z, (Math.cos(T * 0.4 + i) > 0 ? 1 : -1) * Math.PI / 2 + (sd < 2 ? 0 : Math.PI / 2), 0, 0, 'Walk'); }
      // ocakta taş kesenler (tokmak sallar gibi eğilip kalkar)
      const q = dyn.quarry; for (let i = 0; i < 70; i++) people.add(q.x - 55 + rnd(i + 60) * 110, 2.5, q.z - 30 + rnd(i + 70) * 60, rnd(i) * 6, Math.max(0, Math.sin(T * 5 + i)) * 0.6, 0, 'Working');
      // köyde dolaşanlar
      const v = dyn.village; for (let i = 0; i < 40; i++) { const t2 = T * 0.15 + i; people.add(v.x + 60 + Math.sin(t2) * 60, 0, v.z + (i % 6) * 16 + 8, Math.cos(t2) > 0 ? Math.PI / 2 : -Math.PI / 2, 0, 0, 'Walk'); }
    }
    // kayıklar
    for (const bt of dyn.boats || []) {
      bt.s += bt.v * dt; posAt(bt.path, bt.s, V, Dv); bt.mesh.position.set(V.x, 0.3 + Math.sin(T * 2 + bt.s) * 0.08, V.z);
      bt.mesh.rotation.y = Math.atan2(Dv.x, Dv.z) + (bt.v < 0 ? Math.PI : 0);
      if (bt.mesh.userData.cargo) bt.mesh.userData.cargo.visible = bt.loaded;
      for (let i = 0; i < 4; i++) people.add(bt.mesh.position.x + Math.sin(bt.mesh.rotation.y) * (i * 3 - 6), 1.25, bt.mesh.position.z + Math.cos(bt.mesh.rotation.y) * (i * 3 - 6), bt.mesh.rotation.y, 0.2 * Math.sin(T * 3 + i), 0, 'Working');
    }
    for (const s of smoke) { const ph = (T * 0.12 + s.userData.ph) % 1; s.position.set(s.userData.base.x + ph * 6, 4 + ph * 30, s.userData.base.z); s.scale.setScalar(1 + ph * 3); s.material.opacity = 0.45 * (1 - ph); }
    people.end(dt); blocks.end();
  }

  function init() {
    el = document.getElementById('u3'); cv = document.getElementById('u3cv'); labelsEl = el.querySelector('.u3-labels');
    R = new THREE.WebGLRenderer({ canvas: cv, antialias: true }); R.shadowMap.enabled = true; R.shadowMap.type = THREE.PCFSoftShadowMap;
    R.toneMapping = THREE.ACESFilmicToneMapping; R.toneMappingExposure = 1.05; R.outputColorSpace = THREE.SRGBColorSpace;
    scene = new THREE.Scene();
    // gökyüzü kubbesi (yukarıdan ufka renk geçişi)
    const sky = new THREE.Mesh(new THREE.SphereGeometry(20000, 32, 16), new THREE.ShaderMaterial({ side: THREE.BackSide, depthWrite: false, fog: false,
      uniforms: { top: { value: new THREE.Color(0x5f9fd6) }, bot: { value: new THREE.Color(0xf3e2bf) } },
      vertexShader: 'varying float h; void main(){ h = normalize(position).y; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }',
      fragmentShader: 'uniform vec3 top; uniform vec3 bot; varying float h; void main(){ gl_FragColor = vec4(mix(bot, top, smoothstep(0.0, 0.45, h)), 1.0); }' }));
    scene.add(sky); skyDome = sky;
    scene.fog = new THREE.Fog(0xeedfc0, 2500, 16000);
    cam = new THREE.PerspectiveCamera(45, 1, 0.5, 40000);
    hemi = new THREE.HemisphereLight(0xd8ecff, 0xc9a46a, 0.85); scene.add(hemi);
    const sun = new THREE.DirectionalLight(0xfff0cc, 2.4); sun.position.set(-700, 900, 400); sun.castShadow = true;
    sun.shadow.mapSize.set(4096, 4096); Object.assign(sun.shadow.camera, { left: -900, right: 900, top: 900, bottom: -900, near: 10, far: 4000 }); sun.shadow.bias = -0.0004;
    scene.add(sun); scene.add(sun.target);
    const gg = new THREE.PlaneGeometry(36000, 36000, 160, 160); gg.rotateX(-Math.PI / 2);
    const pos = gg.attributes.position; for (let i = 0; i < pos.count; i++) { const x = pos.getX(i), z = pos.getZ(i), d = Math.hypot(x, z); pos.setY(i, d < 16000 ? -0.05 : (Math.sin(x * 0.0021) + Math.cos(z * 0.0017) + Math.sin((x + z) * 0.004)) * Math.min(1, (d - 16000) / 2500) * 40); }
    gg.computeVertexNormals();
    // kum dokusunun tekrarını kırmak için geniş ölçekli renk dalgalanması (köşe renkleri)
    const vc = []; for (let i = 0; i < pos.count; i++) { const x = pos.getX(i), z = pos.getZ(i); const n = 0.5 + 0.25 * Math.sin(x * 0.0011 + Math.cos(z * 0.0009) * 2) + 0.25 * Math.sin(z * 0.0013 - x * 0.0004); vc.push(0.86 + n * 0.16, 0.84 + n * 0.14, 0.8 + n * 0.12); }
    gg.setAttribute('color', new THREE.Float32BufferAttribute(vc, 3));
    const ground = new THREE.Mesh(gg, pbr('sand_03', 36000 / 11, 36000 / 11, 0xffe6bc, { ns: 0.7, m: { vertexColors: true } })); ground.receiveShadow = true; scene.add(ground);
    const sd = new THREE.Mesh(new THREE.SphereGeometry(260, 16, 16), new THREE.MeshBasicMaterial({ color: 0xfff6d0, fog: false })); sd.position.set(-9000, 11000, 6000); scene.add(sd);
    people = People(2600); blocks = Blocks(80);
    for (const m of [...people.meshes, ...blocks.meshes]) scene.add(m);
    // kontroller
    let drag = null; const pts = new Map();
    cv.addEventListener('pointerdown', e => { pts.set(e.pointerId, [e.clientX, e.clientY]); drag = { x: e.clientX, y: e.clientY, d0: null }; try { cv.setPointerCapture(e.pointerId); } catch (er) { /* */ } orbit.auto = false; });
    cv.addEventListener('pointermove', e => {
      if (!drag) return; if (pts.has(e.pointerId)) pts.set(e.pointerId, [e.clientX, e.clientY]);
      if (pts.size === 2) { const [a, b] = [...pts.values()], d = Math.hypot(a[0] - b[0], a[1] - b[1]); if (drag.d0) orbit.dist = clamp(orbit.dist * drag.d0 / d, 12, 6000); drag.d0 = d; return; }
      orbit.th -= (e.clientX - drag.x) * 0.006; orbit.ph = clamp(orbit.ph - (e.clientY - drag.y) * 0.005, 0.15, 1.52); drag.x = e.clientX; drag.y = e.clientY;
    });
    const up = e => { pts.delete(e.pointerId); if (!pts.size) drag = null; };
    cv.addEventListener('pointerup', up); cv.addEventListener('pointercancel', up);
    cv.addEventListener('wheel', e => { e.preventDefault(); orbit.dist = clamp(orbit.dist * (e.deltaY > 0 ? 1.12 : 0.89), 12, 6000); orbit.auto = false; }, { passive: false });
    labelsEl.addEventListener('click', e => { const b = e.target.closest('[data-id]'); if (!b) return; const o = labelsEl._list[+b.dataset.l]; orbit.tx = o.x; orbit.tz = o.z; orbit.ty = Math.max(8, (o.m.h || 30) * 0.3); orbit.dist = Math.max(80, (o.m.b || 60) * 1.7); });
    el.querySelector('.u3-back').addEventListener('click', close);
    el.querySelector('.u3-info').addEventListener('click', () => ctx.openInfo(center.id));
    el.querySelectorAll('[data-dy]').forEach(b => b.addEventListener('click', () => ctx.setYear(ctx.Y() + +b.dataset.dy)));
    el.querySelectorAll('[data-cam]').forEach(b => b.addEventListener('click', () => {
      if (!center) return; const v = b.dataset.cam; orbit.auto = false;
      if (v === 'rampa' && dyn && dyn.pts && dyn.pts.length) { const p = dyn.pts[Math.floor(dyn.pts.length * 0.3)]; Object.assign(orbit, { tx: p.x, ty: p.y, tz: p.z, dist: 45, ph: 1.15 }); }
      else if (v === 'ocak' && dyn && dyn.quarry) Object.assign(orbit, { tx: dyn.quarry.x, ty: 3, tz: dyn.quarry.z, dist: 90, ph: 1.1 });
      else if (v === 'kanal' && dyn && dyn.basin) Object.assign(orbit, { tx: dyn.basin.x + 200, ty: 2, tz: dyn.basin.z, dist: 340, ph: 1.12, th: 2.2 });
      else Object.assign(orbit, { tx: 0, tz: 0, ty: 30, dist: Math.max(260, (center.b || 60) * 1.9), ph: 1.22 });
    }));
    window.addEventListener('keydown', e => { if (e.key === 'Escape' && !el.hidden) close(); });
  }
  function frame(now) {
    if (el.hidden) return;
    const dt = Math.min(0.05, (now - last) / 1000 || 0); last = now; T += dt;
    const r = cv.getBoundingClientRect(), dpr = Math.min(2, window.devicePixelRatio || 1);
    if (cv.width !== Math.round(r.width * dpr) || cv.height !== Math.round(r.height * dpr)) { R.setPixelRatio(dpr); R.setSize(r.width, r.height, false); cam.aspect = r.width / r.height; cam.updateProjectionMatrix(); }
    const iy = Math.round(ctx.Y()); if (iy !== lastY) { lastY = iy; rebuild(); }
    if (orbit.auto) orbit.th += dt * 0.05;
    cam.position.set(orbit.tx + orbit.dist * Math.sin(orbit.ph) * Math.sin(orbit.th), orbit.ty + orbit.dist * Math.cos(orbit.ph), orbit.tz + orbit.dist * Math.sin(orbit.ph) * Math.cos(orbit.th));
    cam.lookAt(orbit.tx, orbit.ty, orbit.tz);
    animate(dt);
    R.render(scene, cam);
    const list = labelsEl._list || [], btns = labelsEl.children, v = new THREE.Vector3();
    for (let i = 0; i < btns.length; i++) {
      const o = list[i]; v.set(o.x, (o.m.h || 20) + 12, o.z).project(cam);
      const vis = v.z < 1 && Math.abs(v.x) < 1.05 && Math.abs(v.y) < 1.05 && orbit.dist > 60;
      btns[i].style.display = vis ? 'block' : 'none';
      if (vis) { btns[i].style.left = ((v.x + 1) / 2 * r.width) + 'px'; btns[i].style.top = ((1 - v.y) / 2 * r.height) + 'px'; }
    }
    raf = requestAnimationFrame(frame);
  }
  function open(id, c) {
    if (!THREE) { alert('3D kütüphanesi yüklenemedi.'); return; }
    ctx = c; if (!el) init(); loadExtras();
    const m = ctx.monuments().find(x => x.id === id); if (!m || !ctx.coords[id]) return;
    center = m; lastY = null; nileCache = null;
    Object.assign(orbit, { tx: 0, tz: 0, ty: 25, dist: Math.max(260, (m.b || 60) * 1.9), th: 0.9, ph: 1.22, auto: true });
    el.querySelector('.u3-title').textContent = m.ad;
    el.hidden = false; last = performance.now(); cancelAnimationFrame(raf); raf = requestAnimationFrame(frame);
  }
  function close() { if (el) el.hidden = true; cancelAnimationFrame(raf); }
  return { open, close, get acik() { return el && !el.hidden; }, get orbit() { return orbit; }, get dyn() { return dyn; } };
})();
