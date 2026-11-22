// 🦖🌍 Derin Zaman: 4,5 Milyar Yıllık Paleocoğrafya Küresi, Dinozorlar & Gerçek Fosil Kazı Alanları
'use strict';
(() => {
  const D = Math.PI / 180;
  const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const rnd = n => { const s = Math.sin(n * 127.1 + 311.7) * 43758.5453; return s - Math.floor(s); };

  let box = null, cv = null, g = null, raf = 0;
  let cagIdx = 3; // Pangea'dan başla
  let rotLo = 10, rotLa = 10, drag = null;
  let oynuyor = false, oynTimer = 0, lastT = 0, astAnim = -1;
  let secili = null, seciliKazi = null, hits = [], hover = null;

  // Organik kıyı şeridi alt-bölümleyici (yapay düz kenarları doğal koy/burunlara dönüştürür)
  function organikKiyi(pts, seed, iter = 2) {
    let cur = pts.slice();
    for (let it = 0; it < iter; it++) {
      const next = [];
      const amp = it === 0 ? 0.16 : 0.085;
      for (let i = 0; i < cur.length; i++) {
        const a = cur[i], b = cur[(i + 1) % cur.length];
        next.push(a);
        const dla = b[0] - a[0];
        let dlo = b[1] - a[1];
        if (dlo > 180) dlo -= 360;
        if (dlo < -180) dlo += 360;
        const len = Math.hypot(dla, dlo);
        if (len < 2.2) continue;
        const h = (rnd(seed * 97 + it * 53 + i * 19.3) - 0.5) * 2;
        const nx = -dlo / len, ny = dla / len;
        const off = Math.min(4.2, len * amp) * h;
        const mla = Math.max(-86, Math.min(86, (a[0] + b[0]) * 0.5 + nx * off));
        let mlo = a[1] + dlo * 0.5 + ny * off;
        if (mlo > 180) mlo -= 360;
        if (mlo < -180) mlo += 360;
        next.push([mla, mlo]);
      }
      cur = next;
    }
    return cur;
  }

  function prep(pts) {
    const n = pts.length, cl = new Float32Array(n), sl = new Float32Array(n), lo = new Float32Array(n);
    for (let i = 0; i < n; i++) {
      const la = pts[i][0] * D;
      cl[i] = Math.cos(la); sl[i] = Math.sin(la); lo[i] = pts[i][1] * D;
    }
    return { n, cl, sl, lo };
  }

  // Her çağın organik kıta/çöl/buz çokgenlerini bir kez hazırla
  const cagCache = new Map();
  function cagHazirla(cag) {
    if (cagCache.has(cag.id)) return cagCache.get(cag.id);
    const sBase = cag.id.split('').reduce((a, c) => a + c.charCodeAt(0), 0);
    const kitalar = (cag.kitalar || []).map((p, i) => prep(organikKiyi(p, sBase + i * 17, 2)));
    const coller = (cag.coller || []).map((p, i) => prep(organikKiyi(p, sBase + 200 + i * 13, 1)));
    const buz = (cag.buz || []).map((p, i) => prep(organikKiyi(p, sBase + 400 + i * 11, 1)));
    const out = { kitalar, coller, buz };
    cagCache.set(cag.id, out);
    return out;
  }

  // Keşfet küresindeki gibi hafif organik arazi boya dokusu
  let desen = null, lavDesen = null;
  function dokuDesen(lav) {
    if (!lav && desen) return desen;
    if (lav && lavDesen) return lavDesen;
    const c = document.createElement('canvas'); c.width = c.height = 160;
    const x = c.getContext('2d');
    for (let i = 0; i < 850; i++) {
      const a = rnd(i), b = rnd(i + 999), k = rnd(i + 77);
      x.fillStyle = lav
        ? (k < 0.45 ? `rgba(255,130,30,${0.08 + k * 0.22})` : `rgba(25,8,4,${0.08 + (k - 0.45) * 0.22})`)
        : (k < 0.5 ? `rgba(45,65,28,${0.05 + k * 0.13})` : `rgba(255,252,232,${0.04 + (k - 0.5) * 0.14})`);
      x.beginPath();
      x.ellipse(a * 160, b * 160, 1 + rnd(i + 5) * 3.2, 0.6 + rnd(i + 6) * 1.7, rnd(i + 7) * 3, 0, 7);
      x.fill();
    }
    const pat = g.createPattern(c, 'repeat');
    if (lav) lavDesen = pat; else desen = pat;
    return pat;
  }

  function pj(cl, sl, lo, cl0, sl0, l0) {
    const dl = lo - l0;
    const x = cl * Math.sin(dl);
    const y = cl0 * sl - sl0 * cl * Math.cos(dl);
    const z = sl0 * sl + cl0 * cl * Math.cos(dl);
    return [x, y, z];
  }

  function P(lat, lon, cx, cy, R) {
    const la = lat * D, lo = lon * D, cl0 = Math.cos(rotLa * D), sl0 = Math.sin(rotLa * D), l0 = rotLo * D;
    const [x, y, z] = pj(Math.cos(la), Math.sin(la), lo, cl0, sl0, l0);
    return [cx + x * R, cy - y * R, z];
  }

  // Keşfet küresiyle aynı tam ufuk kesimli (z >= 0) çokgen yolu — arka yüz katlanması asla olmaz!
  function polyPath(p, cx, cy, R) {
    const n = p.n;
    if (n < 3) return false;
    const cl0 = Math.cos(rotLa * D), sl0 = Math.sin(rotLa * D), l0 = rotLo * D;
    let any = false, allVis = true, backIdx = -1;
    const xs = new Float32Array(n), ys = new Float32Array(n), zs = new Float32Array(n);
    for (let i = 0; i < n; i++) {
      const [x, y, z] = pj(p.cl[i], p.sl[i], p.lo[i], cl0, sl0, l0);
      xs[i] = x; ys[i] = y; zs[i] = z;
      if (z > 0) any = true;
      else { allVis = false; if (backIdx < 0) backIdx = i; }
    }
    if (!any) return false;
    if (allVis) {
      g.moveTo(cx + xs[0] * R, cy - ys[0] * R);
      for (let i = 1; i < n; i++) g.lineTo(cx + xs[i] * R, cy - ys[i] * R);
      g.closePath();
      return true;
    }
    const ufukA = (i, j) => {
      const t = zs[i] / (zs[i] - zs[j]);
      const hx = xs[i] + t * (xs[j] - xs[i]), hy = ys[i] + t * (ys[j] - ys[i]);
      return Math.atan2(-hy, hx);
    };
    let drew = false, open = false, aStart = 0;
    for (let k = 0; k < n; k++) {
      const i = (backIdx + k) % n, j = (i + 1) % n;
      const zi = zs[i] > 0, zj = zs[j] > 0;
      if (!zi && zj) {
        aStart = ufukA(i, j);
        g.moveTo(cx + Math.cos(aStart) * R, cy + Math.sin(aStart) * R);
        g.lineTo(cx + xs[j] * R, cy - ys[j] * R);
        open = true; drew = true;
      } else if (zi && zj && open) {
        g.lineTo(cx + xs[j] * R, cy - ys[j] * R);
      } else if (zi && !zj && open) {
        const aEnd = ufukA(i, j);
        g.lineTo(cx + Math.cos(aEnd) * R, cy + Math.sin(aEnd) * R);
        let d = aStart - aEnd;
        while (d > Math.PI) d -= 2 * Math.PI;
        while (d < -Math.PI) d += 2 * Math.PI;
        const steps = Math.max(1, Math.ceil(Math.abs(d) / 0.1));
        for (let s = 1; s <= steps; s++) {
          const aa = aEnd + d * s / steps;
          g.lineTo(cx + Math.cos(aa) * R, cy + Math.sin(aa) * R);
        }
        g.closePath();
        open = false;
      }
    }
    return drew;
  }

  function draw(now) {
    if (!box || box.hidden) { raf = 0; return; }
    const dt = Math.min(0.05, (now - lastT) / 1000 || 0.016);
    lastT = now;
    const DZ = window.DERIN_ZAMAN;
    if (!DZ) return;
    const cag = DZ.caglar[cagIdx];
    const geo = cagHazirla(cag);

    if (!drag) rotLo = ((rotLo + dt * 7.5) + 180) % 360 - 180;
    if (oynuyor) {
      oynTimer += dt;
      if (oynTimer > 4.2) {
        oynTimer = 0;
        cagIdx = (cagIdx + 1) % DZ.caglar.length;
        renderPanel();
      }
    }
    if (astAnim >= 0) { astAnim += dt; if (astAnim > 4.5) astAnim = -1; }

    const rc = cv.getBoundingClientRect();
    const dpr = Math.min(2, devicePixelRatio || 1);
    const W = Math.max(260, Math.round(rc.width)), H = Math.max(260, Math.round(rc.height));
    if (cv.width !== Math.round(W * dpr) || cv.height !== Math.round(H * dpr)) {
      cv.width = Math.round(W * dpr); cv.height = Math.round(H * dpr);
    }
    g.setTransform(dpr, 0, 0, dpr, 0, 0);
    g.clearRect(0, 0, W, H);

    const cx = W / 2, cy = H / 2, R = Math.min(W, H) * 0.43;

    // Yıldızlı uzay arka planı
    g.fillStyle = '#070c18';
    g.fillRect(0, 0, W, H);
    for (let i = 0; i < 95; i++) {
      const sx = (i * 197.3 % W), sy = (i * 113.7 % H), sr = 0.55 + (i % 3) * 0.42;
      g.fillStyle = `rgba(235,244,255,${0.22 + 0.42 * Math.abs(Math.sin(now * 0.001 + i))})`;
      g.beginPath(); g.arc(sx, sy, sr, 0, 7); g.fill();
    }

    // Atmosfer dış ışıltısı
    const atm = g.createRadialGradient(cx, cy, R * 0.88, cx, cy, R * 1.18);
    atm.addColorStop(0, cag.atmosfer || 'rgba(130,210,245,0.4)');
    atm.addColorStop(1, 'rgba(0,0,0,0)');
    g.fillStyle = atm;
    g.beginPath(); g.arc(cx, cy, R * 1.18, 0, 7); g.fill();

    // Küre gövdesi (zengin derin okyanus gradyanı)
    g.save();
    g.beginPath(); g.arc(cx, cy, R, 0, 7); g.clip();
    const oky = g.createRadialGradient(cx - R * 0.32, cy - R * 0.28, R * 0.08, cx, cy, R * 1.12);
    oky.addColorStop(0, cag.okyanus);
    oky.addColorStop(1, cag.okyanus2 || '#071c30');
    g.fillStyle = oky;
    g.fillRect(cx - R, cy - R, R * 2, R * 2);

    // İnce enlem/boylam ızgarası (Keşfet küresi gibi)
    g.strokeStyle = 'rgba(255,255,255,0.06)';
    g.lineWidth = 0.7;
    for (let la = -60; la <= 60; la += 30) {
      g.beginPath(); let pen = false;
      for (let lo = -180; lo <= 180; lo += 6) {
        const [x, y, z] = P(la, lo, cx, cy, R);
        if (z > 0) { pen ? g.lineTo(x, y) : g.moveTo(x, y); pen = true; } else pen = false;
      }
      g.stroke();
    }
    for (let lo = -180; lo < 180; lo += 30) {
      g.beginPath(); let pen = false;
      for (let la = -85; la <= 85; la += 5) {
        const [x, y, z] = P(la, lo, cx, cy, R);
        if (z > 0) { pen ? g.lineTo(x, y) : g.moveTo(x, y); pen = true; } else pen = false;
      }
      g.stroke();
    }

    // --- KEŞFET TEKNİĞİYLE KARA ÇİZİMİ ---
    // 1. Sığ deniz kıyı şelfi ışıldaması (çift katmanlı yumuşak kıyı halesi)
    g.beginPath();
    let karaVar = false;
    for (const kp of geo.kitalar) if (polyPath(kp, cx, cy, R)) karaVar = true;
    if (karaVar) {
      g.save();
      g.lineJoin = 'round'; g.lineCap = 'round';
      g.strokeStyle = cag.kiyi || 'rgba(165,235,248,0.25)';
      g.lineWidth = 14; g.stroke();
      g.strokeStyle = cag.lav ? 'rgba(255,155,70,0.45)' : 'rgba(215,246,255,0.28)';
      g.lineWidth = 5; g.stroke();

      // 2. Çapraz kara gradyanı
      const kg = g.createLinearGradient(cx - R, cy - R, cx + R, cy + R);
      kg.addColorStop(0, cag.kara);
      kg.addColorStop(1, cag.kara2 || cag.kara);
      g.fillStyle = kg;
      g.fill('nonzero');

      // 3. Kırpılmış organik arazi boya dokusu + çöl + buzul katmanları
      g.clip('nonzero');
      g.fillStyle = dokuDesen(!!cag.lav);
      g.fillRect(cx - R, cy - R, R * 2, R * 2);

      // İç kesim kurak çöl tonlaması (Pangea / Jura / Senozoyik)
      if (geo.coller.length) {
        g.beginPath();
        for (const cp of geo.coller) polyPath(cp, cx, cy, R);
        g.fillStyle = 'rgba(214,174,104,0.45)';
        g.fill('nonzero');
      }

      // Kutup ve buzul çağları buz tabakaları
      if (geo.buz.length) {
        g.beginPath();
        for (const bp of geo.buz) polyPath(bp, cx, cy, R);
        g.fillStyle = 'rgba(238,248,255,0.84)';
        g.fill('nonzero');
        g.strokeStyle = 'rgba(180,222,245,0.6)';
        g.lineWidth = 1.6;
        g.stroke();
      }
      g.restore();

      // 4. Net doğal kıyı şeridi çizgisi
      g.beginPath();
      for (const kp of geo.kitalar) polyPath(kp, cx, cy, R);
      g.strokeStyle = cag.lav ? 'rgba(255,145,55,0.75)' : 'rgba(42,68,46,0.58)';
      g.lineWidth = 1.25;
      g.stroke();
    }

    // Lav Dünyası magma parıltısı
    if (cag.lav) {
      for (let i = 0; i < 7; i++) {
        const [vx, vy, vz] = P(-35 + i * 14, -120 + i * 42, cx, cy, R);
        if (vz <= 0.1) continue;
        const p = 0.65 + 0.35 * Math.sin(now * 0.004 + i * 1.9);
        const vg = g.createRadialGradient(vx, vy, 1, vx, vy, 18 * p);
        vg.addColorStop(0, 'rgba(255,210,80,0.85)');
        vg.addColorStop(0.5, 'rgba(255,95,20,0.45)');
        vg.addColorStop(1, 'rgba(255,60,10,0)');
        g.fillStyle = vg;
        g.beginPath(); g.arc(vx, vy, 18 * p, 0, 7); g.fill();
      }
    }

    // 3B küresel gölgeleme ve ışık parlaklığı
    const sh = g.createRadialGradient(cx - R * 0.34, cy - R * 0.34, R * 0.12, cx, cy, R);
    sh.addColorStop(0, 'rgba(255,255,255,0.14)');
    sh.addColorStop(0.55, 'rgba(0,0,0,0)');
    sh.addColorStop(1, 'rgba(0,0,0,0.48)');
    g.fillStyle = sh;
    g.fillRect(cx - R, cy - R, R * 2, R * 2);

    // 66 My Asteroit Çarpma Efekti
    if (cag.asteroit) {
      const [ax, ay, az] = P(cag.asteroit[0], cag.asteroit[1], cx, cy, R);
      if (az > 0.05) {
        const pulse = (now * 0.002) % 1;
        g.strokeStyle = `rgba(255,140,40,${0.9 - pulse * 0.8})`;
        g.lineWidth = 2.6;
        g.beginPath(); g.arc(ax, ay, 8 + pulse * 30, 0, 7); g.stroke();
        g.fillStyle = '#ff6b2b';
        g.beginPath(); g.arc(ax, ay, 5.5, 0, 7); g.fill();
        if (astAnim >= 0) {
          const p = Math.min(1, astAnim / 1.1);
          if (p < 1) {
            const sx = ax + (1 - p) * R * 1.05, sy = ay - (1 - p) * R * 0.85;
            const gr = g.createLinearGradient(sx, sy, sx + 48, sy - 38);
            gr.addColorStop(0, '#fff7c2'); gr.addColorStop(0.45, '#ff7722'); gr.addColorStop(1, 'rgba(255,60,10,0)');
            g.strokeStyle = gr; g.lineWidth = 6.5; g.lineCap = 'round';
            g.beginPath(); g.moveTo(sx, sy); g.lineTo(sx + 48, sy - 38); g.stroke();
            g.fillStyle = '#fff'; g.beginPath(); g.arc(sx, sy, 5.5, 0, 7); g.fill();
          } else {
            const ep = (astAnim - 1.1) / 3.4;
            const rg = g.createRadialGradient(ax, ay, 2, ax, ay, R * (0.25 + ep * 1.2));
            rg.addColorStop(0, `rgba(255,245,180,${Math.max(0, 1 - ep * 1.4)})`);
            rg.addColorStop(0.35, `rgba(255,95,20,${Math.max(0, 0.85 - ep)})`);
            rg.addColorStop(1, 'rgba(40,18,12,0)');
            g.fillStyle = rg;
            g.beginPath(); g.arc(ax, ay, R * (0.25 + ep * 1.2), 0, 7); g.fill();
          }
        }
      }
    }

    // Dönemin canlıları ve gerçek fosil kazı alanları pinleri
    hits = [];
    const kazilar = (DZ.kazilar || []).filter(k => k.cag === cag.id);
    for (const k of kazilar) {
      const [kx, ky, kz] = P(k.ll[0], k.ll[1], cx, cy, R);
      if (kz <= 0.08) continue;
      const on = (seciliKazi && seciliKazi.id === k.id) || (hover && hover.tip === 'kazi' && hover.o.id === k.id);
      const r0 = on ? 14.5 : 11.5;
      // Elmas/kare kazı rozeti (altın-kehribar)
      g.save();
      g.translate(kx, ky);
      g.fillStyle = on ? '#b45309' : 'rgba(146,64,14,0.92)';
      g.strokeStyle = on ? '#fff7c2' : '#fde68a';
      g.lineWidth = on ? 2.4 : 1.7;
      g.beginPath();
      g.roundRect(-r0, -r0, r0 * 2, r0 * 2, 6);
      g.fill(); g.stroke();
      g.font = `${on ? 15 : 12.5}px system-ui`;
      g.textAlign = 'center'; g.textBaseline = 'middle';
      g.fillText('⛏️', 0, 0.5);
      g.restore();
      hits.push({ tip: 'kazi', o: k, x: kx, y: ky, r: r0 + 5 });
    }

    const canlilar = DZ.canlilar.filter(c => c.cag === cag.id);
    for (const c of canlilar) {
      const [x0, y0, z] = P(c.ll[0], c.ll[1], cx, cy, R);
      if (z <= 0.08) continue;
      // Aynı koordinatta kazı pini varsa hafif kaydır ki ikisi de tıklanabilsin
      const cakisti = kazilar.some(k => Math.abs(k.ll[0] - c.ll[0]) < 1.2 && Math.abs(k.ll[1] - c.ll[1]) < 1.2);
      const x = cakisti ? x0 + 18 : x0, y = cakisti ? y0 - 12 : y0;
      const on = (secili && secili.id === c.id) || (hover && hover.tip === 'canli' && hover.o.id === c.id);
      const r0 = on ? 15 : 12;
      g.fillStyle = on ? '#d97706' : 'rgba(14,24,42,0.88)';
      g.strokeStyle = on ? '#fff7dc' : '#fbbf24';
      g.lineWidth = on ? 2.5 : 1.6;
      g.beginPath(); g.arc(x, y, r0, 0, 7); g.fill(); g.stroke();
      g.font = `${on ? 16 : 13.5}px system-ui`;
      g.textAlign = 'center'; g.textBaseline = 'middle';
      g.fillText(c.ik, x, y + 0.5);
      hits.push({ tip: 'canli', o: c, x, y, r: r0 + 5 });
    }

    g.restore();

    // Hover etiketi
    if (hover) {
      const lbl = hover.tip === 'kazi' ? `⛏️ ${hover.o.ad} (${hover.o.ulke})` : `${hover.o.ik} ${hover.o.ad} · ${hover.o.boy}`;
      g.font = '700 12px system-ui';
      const tw = g.measureText(lbl).width + 18;
      const tx = Math.max(8, Math.min(W - tw - 8, hover.x - tw / 2));
      const ty = Math.max(8, hover.y - 34);
      g.fillStyle = 'rgba(15,23,42,0.94)';
      g.strokeStyle = hover.tip === 'kazi' ? '#fde68a' : '#fbbf24';
      g.lineWidth = 1.2;
      g.beginPath(); g.roundRect(tx, ty, tw, 24, 8); g.fill(); g.stroke();
      g.fillStyle = '#fff7dc'; g.textAlign = 'left'; g.textBaseline = 'middle';
      g.fillText(lbl, tx + 9, ty + 12.5);
    }

    // Küre çerçevesi ve dönem damgası
    g.strokeStyle = 'rgba(255,255,255,0.2)'; g.lineWidth = 1.2;
    g.beginPath(); g.arc(cx, cy, R, 0, 7); g.stroke();

    g.fillStyle = 'rgba(255,255,255,0.84)';
    g.font = '600 11.5px system-ui'; g.textAlign = 'center'; g.textBaseline = 'alphabetic';
    g.fillText('🌍 Küreyi sürükleyip döndür · 🦕 canlıya veya ⛏️ fosil kazı alanına tıkla', cx, H - 10);

    raf = requestAnimationFrame(draw);
  }

  function renderPanel() {
    const DZ = window.DERIN_ZAMAN;
    const cag = DZ.caglar[cagIdx];
    const canlilar = DZ.canlilar.filter(c => c.cag === cag.id);
    const kazilar = (DZ.kazilar || []).filter(k => k.cag === cag.id);
    box.querySelectorAll('[data-dz-cag]').forEach((b, i) => b.classList.toggle('on', i === cagIdx));
    const p = box.querySelector('#dz-panel');
    p.innerHTML = `
      <div class="dz-cag-bas">
        <span class="dz-etiket">${cag.ik} ${esc(cag.zaman)}</span>
        <h3>${esc(cag.ad)}</h3>
        <p>${esc(cag.ozet)}</p>
      </div>
      <div class="dz-stat">
        <div><small>⏱️ 1 Gün</small><b>${esc(cag.gun)}</b></div>
        <div><small>🌬️ Oksijen</small><b>${esc(cag.oksijen)}</b></div>
        <div><small>🌡️ Sıcaklık</small><b>${esc(cag.sicaklik)}</b></div>
      </div>
      <div class="dz-olay"><b>⚡ Dönemin Büyük Olayı</b><p>${esc(cag.olay)}</p>
        ${cag.asteroit ? `<button type="button" class="phbtn icbtn" data-dz-ast="1" style="margin-top:6px">☄️ 66 My Asteroit Çarpmasını İzle!</button>` : ''}
      </div>
      ${kazilar.length ? `<h4>⛏️ Gerçek Fosil Kazı Alanları (Hangi Kemik Nereden Çıktı?)</h4>
        <div class="dz-canlilar">${kazilar.map(k => `<button type="button" class="dz-ckart${seciliKazi && seciliKazi.id === k.id ? ' on' : ''}" data-dz-kazi="${esc(k.id)}"><span>⛏️</span><div><b>${esc(k.ad)}</b><small>${esc(k.ulke)} · ${esc(k.kemikler.split(',')[0])}</small></div></button>`).join('')}</div>` : ''}
      ${canlilar.length ? `<h4>🦕 Dönemin Canlıları ve Fosilleri</h4>
        <div class="dz-canlilar">${canlilar.map(c => `<button type="button" class="dz-ckart${secili && secili.id === c.id ? ' on' : ''}" data-dz-canli="${esc(c.id)}"><span>${c.ik}</span><div><b>${esc(c.ad)}</b><small>${esc(c.boy)}</small></div></button>`).join('')}</div>` : '<p class="dz-not">Bu çağda Dünya\'da henüz çok hücreli canlı yoktu — gezegen soğuyup ilk okyanusları hazırlıyordu.</p>'}
    `;
  }

  function canliAc(c) {
    secili = c; seciliKazi = null;
    rotLo = c.ll[1]; rotLa = Math.max(-45, Math.min(45, c.ll[0]));
    renderPanel();
    if (!window.ZY || !window.ZY.showModal) return;
    const cag = (window.DERIN_ZAMAN.caglar.find(x => x.id === c.cag) || {});
    const html = `<div class="kapak" data-kapak="${esc(c.w)}"></div>
      <span class="pill">${c.ik} Derin Zaman · ${esc(cag.zaman || '')}</span>
      <div class="did"><b>🤯 En Şaşırtıcı Bilgi</b><p>${esc(c.sasirtici)}</p></div>
      <table class="itbl">
        <tr><th>📏 Boyut / Ağırlık</th><td>${esc(c.boy)}</td></tr>
        <tr><th>🍽️ Beslenme</th><td>${esc(c.beslenme)}</td></tr>
        <tr><th>🦴 Kemik / Fosil Buluntu Yeri</th><td>${esc(c.fosil)}</td></tr>
        <tr><th>⚡ Süper Güç</th><td>${esc(c.superguc)}</td></tr>
      </table>
      <h4>🦖 ${esc(c.ad)} Olarak Bir Gün (Yaşa)</h4>
      <p>${esc(c.yasa)}</p>
      <div class="gos">
        <button class="phbtn icbtn" data-dz-fosil="${c.ll[0]}|${c.ll[1]}|${esc('🦴 ' + c.ad + ' Fosili')}">🦴 Fosil Yerini Dünya Küresinde Gör</button>
      </div>`;
    window.ZY.showModal({
      ikon: c.ik, title: c.ad, sub: `${c.boy} · ${c.fosil}`,
      tabs: [
        { ad: `${c.ik} Fosil & Yaşam`, html, onShow: b => { const kp = b.querySelector('.kapak'); if (kp && window.ZY.kapakYukle) window.ZY.kapakYukle(kp); } },
        ...(c.w && window.ZY.photoTab ? [window.ZY.photoTab(c.w, 8, false)] : [])
      ]
    });
  }

  function kaziAc(k) {
    seciliKazi = k; secili = null;
    rotLo = k.ll[1]; rotLa = Math.max(-45, Math.min(45, k.ll[0]));
    renderPanel();
    if (!window.ZY || !window.ZY.showModal) return;
    const cag = (window.DERIN_ZAMAN.caglar.find(x => x.id === k.cag) || {});
    const html = `<div class="kapak" data-kapak="${esc(k.w)}"></div>
      <span class="pill">⛏️ Paleontolojik Kazı Alanı · ${esc(cag.zaman || '')}</span>
      <table class="itbl">
        <tr><th>📍 Konum</th><td>${esc(k.ulke)}</td></tr>
        <tr><th>📅 İlk Keşif</th><td>${esc(k.yil)}</td></tr>
        <tr><th>🪨 Jeolojik Katman</th><td>${esc(k.katman)}</td></tr>
        <tr><th>🦴 Çıkarılan Kemikler & Fosiller</th><td><b>${esc(k.kemikler)}</b></td></tr>
      </table>
      <h4>🔎 Kazının Hikâyesi</h4>
      <p>${esc(k.hikaye)}</p>
      <div class="did"><b>💡 Biliyor muydun?</b><p>${esc(k.ilginc)}</p></div>
      <div class="gos">
        <button class="phbtn icbtn" data-dz-fosil="${k.ll[0]}|${k.ll[1]}|${esc('⛏️ ' + k.ad)}">🌍 Kazı Alanını Modern Dünya Küresinde Gör</button>
      </div>`;
    window.ZY.showModal({
      ikon: '⛏️', title: k.ad, sub: `${k.ulke} · ${k.yil}`,
      tabs: [
        { ad: '⛏️ Kazı & Buluntular', html, onShow: b => { const kp = b.querySelector('.kapak'); if (kp && window.ZY.kapakYukle) window.ZY.kapakYukle(kp); } },
        ...(k.w && window.ZY.photoTab ? [window.ZY.photoTab(k.w, 8, false)] : [])
      ]
    });
  }

  function cagSec(i) {
    cagIdx = i; secili = null; seciliKazi = null; astAnim = -1;
    const cag = window.DERIN_ZAMAN.caglar[cagIdx];
    if (cag.asteroit) { rotLo = -82; rotLa = 20; }
    else if (cag.id === 'pangea') { rotLo = 15; rotLa = 8; }
    renderPanel();
  }

  function kur() {
    if (box) return;
    const DZ = window.DERIN_ZAMAN;
    box = document.createElement('div');
    box.id = 'derin-zaman';
    box.className = 'dz-overlay';
    box.hidden = true;
    box.setAttribute('role', 'dialog');
    box.setAttribute('aria-label', 'Derin Zaman: Dinozorlar ve Pangea');
    box.innerHTML = `
      <div class="dz-kutu">
        <header class="dz-ust">
          <div><h2>🦖 Derin Zaman: 4,5 Milyar Yıl, Pangea &amp; Fosil Kazıları</h2><small>Gerçek paleocoğrafya kıtaları, dönem hayvanları ve dünyadaki fosil kazı alanları</small></div>
          <div class="dz-ust-sag">
            <button type="button" id="dz-oyna" class="dz-btn">▶ Çağları Oynat</button>
            <button type="button" id="dz-kapat" class="dz-x" title="Kapat">✕</button>
          </div>
        </header>
        <div class="dz-govde">
          <div class="dz-kure-wrap"><canvas id="dz-cv"></canvas></div>
          <aside id="dz-panel" class="dz-panel"></aside>
        </div>
        <nav class="dz-serit" aria-label="Jeolojik Çağlar">
          ${DZ.caglar.map((c, i) => `<button type="button" data-dz-cag="${i}"><span>${c.ik}</span><b>${esc(c.kisa)}</b><small>${esc(c.ad.split(' (')[0].split(':')[0])}</small></button>`).join('')}
        </nav>
      </div>`;
    document.body.appendChild(box);
    cv = box.querySelector('#dz-cv');
    g = cv.getContext('2d');

    box.querySelector('#dz-kapat').addEventListener('click', kapat);
    box.addEventListener('click', ev => {
      if (ev.target === box) { kapat(); return; }
      const cb = ev.target.closest('[data-dz-cag]'); if (cb) { oynuyor = false; box.querySelector('#dz-oyna').textContent = '▶ Çağları Oynat'; cagSec(+cb.dataset.dzCag); return; }
      const ck = ev.target.closest('[data-dz-canli]'); if (ck) { const c = DZ.canlilar.find(x => x.id === ck.dataset.dzCanli); if (c) canliAc(c); return; }
      const kz = ev.target.closest('[data-dz-kazi]'); if (kz) { const k = (DZ.kazilar || []).find(x => x.id === kz.dataset.dzKazi); if (k) kaziAc(k); return; }
      if (ev.target.closest('[data-dz-ast]')) { rotLo = -86; rotLa = 21; astAnim = 0; return; }
    });
    box.querySelector('#dz-oyna').addEventListener('click', e => {
      oynuyor = !oynuyor; oynTimer = 0;
      e.target.textContent = oynuyor ? '⏸ Durdur' : '▶ Çağları Oynat';
    });

    const cvPos = ev => { const rc = cv.getBoundingClientRect(); return [ev.clientX - rc.left, ev.clientY - rc.top]; };
    cv.addEventListener('pointerdown', ev => { const [x, y] = cvPos(ev); drag = { x, y, moved: false }; cv.setPointerCapture(ev.pointerId); });
    cv.addEventListener('pointermove', ev => {
      const [x, y] = cvPos(ev);
      if (drag) {
        const dx = x - drag.x, dy = y - drag.y;
        if (Math.hypot(dx, dy) > 4) drag.moved = true;
        rotLo = ((rotLo - dx * 0.45) + 180) % 360 - 180;
        rotLa = Math.max(-70, Math.min(70, rotLa + dy * 0.4));
        drag.x = x; drag.y = y;
      } else {
        hover = hits.find(h => Math.hypot(h.x - x, h.y - y) <= h.r) || null;
        cv.style.cursor = hover ? 'pointer' : 'grab';
      }
    });
    cv.addEventListener('pointerup', ev => {
      if (drag && !drag.moved) {
        const [x, y] = cvPos(ev);
        const h = hits.find(o => Math.hypot(o.x - x, o.y - y) <= o.r);
        if (h) { if (h.tip === 'kazi') kaziAc(h.o); else canliAc(h.o); }
      }
      drag = null;
    });
    window.addEventListener('keydown', ev => { if (ev.key === 'Escape' && box && !box.hidden && document.getElementById('modal')?.hidden) kapat(); });
  }

  function ac() {
    kur();
    box.hidden = false;
    renderPanel();
    lastT = performance.now();
    if (!raf) raf = requestAnimationFrame(draw);
  }
  function kapat() {
    oynuyor = false;
    if (box) box.hidden = true;
    if (raf) { cancelAnimationFrame(raf); raf = 0; }
  }

  window.DerinZaman = { ac, kapat };
})();
