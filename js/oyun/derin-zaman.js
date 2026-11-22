// 🦖🌍 Derin Zaman: Dinozorlar & Pangea Modu — Hafif 2D Canvas Paleo-Küre & Asteroit Simülasyonu
'use strict';
(() => {
  const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  let box = null, cv = null, g = null, raf = 0;
  let cagIdx = 3; // Başlangıç: 🌍 Pangea!
  let rotLo = 15, rotLa = 12, drag = null;
  let hits = [], hover = null, secili = null;
  let oynuyor = false, oynTimer = 0;
  let astAnim = -1; // >=0 iken 66 My Chicxulub asteroit çarpma animasyonu

  const RAD = Math.PI / 180;
  function pj(la, lo, cx, cy, r) {
    const phi = la * RAD, lam = (lo - rotLo) * RAD, phi0 = rotLa * RAD;
    const x = Math.cos(phi) * Math.sin(lam);
    const y = Math.cos(phi0) * Math.sin(phi) - Math.sin(phi0) * Math.cos(phi) * Math.cos(lam);
    const z = Math.sin(phi0) * Math.sin(phi) + Math.cos(phi0) * Math.cos(phi) * Math.cos(lam);
    return [cx + x * r, cy - y * r, z];
  }

  function polyDraw(pts, cx, cy, r) {
    // Küre ön yarımküresine sade kırpma ile pürüzsüz çizim
    const out = [];
    const n = pts.length;
    for (let i = 0; i < n; i++) {
      const a = pts[i], b = pts[(i + 1) % n];
      const steps = 6;
      for (let s = 0; s < steps; s++) {
        const t = s / steps;
        const la = a[0] + (b[0] - a[0]) * t, lo = a[1] + (b[1] - a[1]) * t;
        const p = pj(la, lo, cx, cy, r);
        if (p[2] >= -0.02) out.push(p);
      }
    }
    if (out.length < 3) return;
    g.beginPath();
    out.forEach((p, i) => i === 0 ? g.moveTo(p[0], p[1]) : g.lineTo(p[0], p[1]));
    g.closePath();
    g.fill();
    g.stroke();
  }

  let lastT = performance.now();
  function draw(now) {
    if (!box || box.hidden) { raf = 0; return; }
    const dt = Math.min(0.05, (now - lastT) / 1000); lastT = now;
    if (!drag) rotLo = ((rotLo + dt * 7) + 180) % 360 - 180;
    if (oynuyor) {
      oynTimer += dt;
      if (oynTimer >= 3.2) {
        oynTimer = 0;
        const DZ = window.DERIN_ZAMAN;
        cagSec((cagIdx + 1) % DZ.caglar.length);
      }
    }
    if (astAnim >= 0) {
      astAnim += dt * 0.45;
      if (astAnim > 1.8) astAnim = -1;
    }

    const rect = cv.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const W = Math.max(240, Math.round(rect.width)), H = Math.max(240, Math.round(rect.height));
    if (cv.width !== Math.round(W * dpr) || cv.height !== Math.round(H * dpr)) {
      cv.width = Math.round(W * dpr); cv.height = Math.round(H * dpr);
    }
    g.setTransform(dpr, 0, 0, dpr, 0, 0);
    g.clearRect(0, 0, W, H);

    // Yıldızlı kozmik arka plan
    g.fillStyle = '#090d1a';
    g.fillRect(0, 0, W, H);
    g.fillStyle = 'rgba(255,245,215,0.45)';
    for (let i = 0; i < 42; i++) {
      const sx = ((i * 197 + 31) % 997) / 997 * W, sy = ((i * 353 + 73) % 991) / 991 * H;
      g.fillRect(sx, sy, (i % 3 === 0 ? 1.8 : 1.1), (i % 3 === 0 ? 1.8 : 1.1));
    }

    const DZ = window.DERIN_ZAMAN;
    const cag = DZ.caglar[cagIdx];
    const cx = W / 2, cy = H / 2, r = Math.min(W, H) * 0.41;

    // Atmosfer parıltısı
    const atm = g.createRadialGradient(cx, cy, r * 0.9, cx, cy, r * 1.18);
    atm.addColorStop(0, cag.atmosfer);
    atm.addColorStop(1, 'rgba(0,0,0,0)');
    g.fillStyle = atm; g.beginPath(); g.arc(cx, cy, r * 1.18, 0, 7); g.fill();

    // Okyanus / Lav küresi
    const oc = g.createRadialGradient(cx - r * 0.32, cy - r * 0.35, r * 0.08, cx, cy, r);
    oc.addColorStop(0, cag.id === 'hadean' ? '#9e3819' : '#2d84b0');
    oc.addColorStop(1, cag.okyanus);
    g.fillStyle = oc; g.beginPath(); g.arc(cx, cy, r, 0, 7); g.fill();

    g.save();
    g.beginPath(); g.arc(cx, cy, r, 0, 7); g.clip();

    // Hafif enlem çizgileri
    g.strokeStyle = 'rgba(255,255,255,0.08)'; g.lineWidth = 1;
    for (const la of [-60, -30, 0, 30, 60]) {
      g.beginPath(); let bas = false;
      for (let lo = -180; lo <= 180; lo += 12) {
        const [x, y, z] = pj(la, lo, cx, cy, r);
        if (z > 0) { if (!bas) { g.moveTo(x, y); bas = true; } else g.lineTo(x, y); } else bas = false;
      }
      g.stroke();
    }

    // Dönemin kıtaları (Pangea → Lavrasya/Gondvana → Modern)
    g.fillStyle = cag.kara;
    g.strokeStyle = cag.id === 'hadean' ? 'rgba(255,140,40,0.65)' : 'rgba(255,248,225,0.28)';
    g.lineWidth = 1.4;
    for (const poly of cag.kitalar || []) polyDraw(poly, cx, cy, r);

    // Buzul Çağı kutup buzları
    if (cag.buzul) {
      g.fillStyle = 'rgba(240,248,255,0.78)'; g.strokeStyle = 'rgba(255,255,255,0.5)';
      polyDraw([[89,-180],[58,-160],[54,-90],[58,-10],[60,60],[62,150],[89,180]], cx, cy, r);
      polyDraw([[-89,-180],[-64,-120],[-64,0],[-64,120],[-89,180]], cx, cy, r);
    }

    // Hadean lav çatlak parıltıları
    if (cag.id === 'hadean') {
      g.strokeStyle = `rgba(255,165,40,${0.35 + 0.25 * Math.sin(now * 0.004)})`;
      g.lineWidth = 2;
      for (const [la, lo] of [[10,-20],[-10,15],[25,80],[-45,100]]) {
        const [x, y, z] = pj(la, lo, cx, cy, r);
        if (z > 0.1) { g.beginPath(); g.arc(x, y, 10 + 4 * Math.sin(now * 0.005 + la), 0, 7); g.stroke(); }
      }
    }

    // ☄️ 66 Milyon Yıl Önce Chicxulub Asteroit Çarpması
    if (cag.asteroit) {
      const [ax, ay, az] = pj(cag.asteroit[0], cag.asteroit[1], cx, cy, r);
      if (az > 0.05) {
        const pulse = 0.5 + 0.5 * Math.sin(now * 0.006);
        g.strokeStyle = `rgba(255,95,40,${0.55 + pulse * 0.4})`; g.lineWidth = 2.2;
        g.beginPath(); g.arc(ax, ay, 10 + pulse * 8, 0, 7); g.stroke();
        g.fillStyle = '#ff6b2b'; g.beginPath(); g.arc(ax, ay, 5, 0, 7); g.fill();
        g.font = '700 10.5px system-ui'; g.fillStyle = '#ffd666'; g.textAlign = 'center';
        g.fillText('☄️ Chicxulub (66 My)', ax, ay - 15);
      }
      if (astAnim >= 0) {
        if (astAnim < 0.55) {
          const t = astAnim / 0.55;
          const sx = cx + r * 1.15, sy = cy - r * 1.05;
          const px = sx + (ax - sx) * t, py = sy + (ay - sy) * t;
          const tr = g.createLinearGradient(sx, sy, px, py);
          tr.addColorStop(0, 'rgba(255,120,20,0)'); tr.addColorStop(1, '#fff3b0');
          g.strokeStyle = tr; g.lineWidth = 5; g.beginPath(); g.moveTo(sx, sy); g.lineTo(px, py); g.stroke();
          g.fillStyle = '#fff'; g.beginPath(); g.arc(px, py, 6.5, 0, 7); g.fill();
        } else {
          const t = (astAnim - 0.55) / 1.25;
          const rad = t * r * 1.6;
          g.fillStyle = `rgba(255,140,30,${Math.max(0, 0.55 * (1 - t))})`;
          g.beginPath(); g.arc(ax, ay, rad, 0, 7); g.fill();
          g.strokeStyle = `rgba(255,230,140,${Math.max(0, 0.9 * (1 - t))})`; g.lineWidth = 3;
          g.beginPath(); g.arc(ax, ay, rad * 0.85, 0, 7); g.stroke();
        }
      }
    }

    // Küre gölge derinliği
    const shd = g.createRadialGradient(cx - r * 0.4, cy - r * 0.4, r * 0.15, cx, cy, r * 1.03);
    shd.addColorStop(0, 'rgba(255,255,240,0.12)');
    shd.addColorStop(0.7, 'rgba(0,0,0,0)');
    shd.addColorStop(1, 'rgba(0,0,16,0.55)');
    g.fillStyle = shd; g.fillRect(cx - r, cy - r, r * 2, r * 2);

    // Dönemin canlı & fosil rozetleri
    hits = [];
    const liste = DZ.canlilar.filter(c => c.cag === cag.id);
    for (const c of liste) {
      const [x, y, z] = pj(c.ll[0], c.ll[1], cx, cy, r);
      if (z <= 0.12) continue;
      const hov = hover === c || secili === c;
      const s0 = hov ? 14 : 11.5;
      g.fillStyle = hov ? '#ffd666' : 'rgba(26,18,12,0.9)';
      g.strokeStyle = hov ? '#fff' : '#ffd666'; g.lineWidth = hov ? 2.4 : 1.6;
      g.beginPath(); g.arc(x, y, s0, 0, 7); g.fill(); g.stroke();
      g.font = `${hov ? 15 : 13}px system-ui`; g.textAlign = 'center'; g.textBaseline = 'middle';
      g.fillText(c.ik, x, y + 1);
      g.textBaseline = 'alphabetic';
      g.font = '700 10.5px system-ui'; g.fillStyle = '#fff5d6';
      g.fillText(c.ad.split(' (')[0], x, y + s0 + 11);
      hits.push({ c, x, y, r: s0 + 4 });
    }
    g.restore();

    // Üst bilgi rozeti
    g.font = '700 12px system-ui'; g.fillStyle = 'rgba(255,232,165,0.85)'; g.textAlign = 'left';
    g.fillText(`${cag.ik} ${cag.ad} · ${cag.zaman}`, 12, 22);
    g.font = '500 11px system-ui'; g.fillStyle = 'rgba(210,220,235,0.65)';
    g.fillText('Küreyi sürükleyerek döndür · simgelere tıkla', 12, H - 12);

    raf = requestAnimationFrame(draw);
  }

  function renderPanel() {
    const DZ = window.DERIN_ZAMAN;
    const cag = DZ.caglar[cagIdx];
    const canlilar = DZ.canlilar.filter(c => c.cag === cag.id);
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
      ${canlilar.length ? `<h4>🦕 Dönemin Canlıları ve Fosilleri</h4>
        <div class="dz-canlilar">${canlilar.map(c => `<button type="button" class="dz-ckart${secili && secili.id === c.id ? ' on' : ''}" data-dz-canli="${esc(c.id)}"><span>${c.ik}</span><div><b>${esc(c.ad)}</b><small>${esc(c.boy)}</small></div></button>`).join('')}</div>` : '<p class="dz-not">Bu çağda Dünya\'da henüz çok hücreli canlı yoktu — gezegen soğuyup ilk okyanusları hazırlıyordu.</p>'}
    `;
  }

  function canliAc(c) {
    secili = c;
    rotLo = c.ll[1]; rotLa = Math.max(-45, Math.min(45, c.ll[0]));
    renderPanel();
    if (!window.ZY || !window.ZY.showModal) return;
    const html = `<div class="kapak" data-kapak="${esc(c.w)}"></div>
      <span class="pill">${c.ik} Derin Zaman · ${esc((window.DERIN_ZAMAN.caglar.find(x => x.id === c.cag) || {}).zaman || '')}</span>
      <div class="did"><b>🤯 En Şaşırtıcı Bilgi</b><p>${esc(c.sasirtici)}</p></div>
      <table class="itbl">
        <tr><th>📏 Boyut / Ağırlık</th><td>${esc(c.boy)}</td></tr>
        <tr><th>🍽️ Beslenme</th><td>${esc(c.beslenme)}</td></tr>
        <tr><th>🦴 Fosil Buluntu Yeri</th><td>${esc(c.fosil)}</td></tr>
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

  function cagSec(i) {
    cagIdx = i; secili = null; astAnim = -1;
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
          <div><h2>🦖 Derin Zaman: 4,5 Milyar Yıl &amp; Pangea</h2><small>Kıtaların ayrılışını, dinozorları, Megalodon\'u ve 66 My asteroit çarpmasını keşfet</small></div>
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
        hover = (hits.find(h => Math.hypot(h.x - x, h.y - y) <= h.r) || {}).c || null;
        cv.style.cursor = hover ? 'pointer' : 'grab';
      }
    });
    cv.addEventListener('pointerup', ev => {
      if (drag && !drag.moved) {
        const [x, y] = cvPos(ev);
        const h = hits.find(o => Math.hypot(o.x - x, o.y - y) <= o.r);
        if (h) canliAc(h.c);
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
