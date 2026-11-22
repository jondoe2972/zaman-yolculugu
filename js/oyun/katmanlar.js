// 🌍🌌 Dünya ve Uzay Katmanları — Tam Ekran Yarım-Elma Kesit & 5 Atmosfer Katmanı (Keşfet tarzında, yakınlaştırılabilir)
'use strict';
(() => {
  const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

  let root = null, cv = null, g = null, raf = 0;
  let z = 1, panX = 0, panY = 0;
  let tz = 1, tpanX = 0, tpanY = 0;
  let hoverId = null, secId = 'dis-cekirdek';
  let drag = null, pts = new Map();
  let lastT = performance.now(), T = 0;

  // Sabit yıldız tarlası & meteorlar
  const YILDIZ = Array.from({ length: 120 }, (_, i) => ({
    x: ((i * 197 + 41) % 997) / 997,
    y: ((i * 353 + 89) % 991) / 991,
    r: i % 5 === 0 ? 1.7 : i % 2 === 0 ? 1.15 : 0.75,
    ph: i * 1.3
  }));

  function geom(W, H) {
    const baseR = Math.min(W, H) * 0.235;
    const R = baseR * z;
    // Masaüstünde bilgi kartı sağda olacağı için merkezi hafif sola dengele
    const offX = W > 860 ? -W * 0.13 : 0;
    const cx = W / 2 + offX + panX;
    // Telefonda kart altta: küre kartın üstünde kalan boşluğa ortalanır ve sığacak kadar küçülür
    if (W <= 860 && root) {
      const kart = root.querySelector('#ke-kart'), ust = kart ? kart.getBoundingClientRect().top - root.getBoundingClientRect().top : H;
      const bosH = clamp(ust, H * 0.4, H), Rm = Math.min(W, bosH - 40) * 0.235 * z;
      return { cx, cy: 20 + (bosH - 20) / 2 + panY, R: Rm };
    }
    const cy = H / 2 + panY;
    return { cx, cy, R };
  }

  function katmanAt(mx, my, W, H) {
    const { cx, cy, R } = geom(W, H);
    const dx = mx - cx, dy = my - cy;
    const d = Math.hypot(dx, dy) / R;
    const L = window.DUNYA_KATMANLAR || [];
    // Sağ yarı (dx >= 0): kesit iç katmanları + atmosfer katmanları
    // Sol yarı (dx < 0): yüzey (d <= 1 → Yerkabuğu) + atmosfer katmanları (d > 1)
    if (d <= 1.0) {
      if (dx < 0) return L.find(x => x.id === 'yerkabugu') || null;
      return L.find(x => x.grup === 'ic' && d >= x.r0 && d <= x.r1) || null;
    }
    return L.find(x => x.grup === 'atm' && d > x.r0 && d <= x.r1) || null;
  }

  function draw(now) {
    if (!root || root.hidden) { raf = 0; return; }
    const dt = Math.min(0.05, (now - lastT) / 1000); lastT = now; T += dt;
    // Yumuşak zoom/pan geçişi
    const k = 1 - Math.exp(-dt * 12);
    z += (tz - z) * k; panX += (tpanX - panX) * k; panY += (tpanY - panY) * k;

    const rc = cv.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const W = Math.max(280, Math.round(rc.width)), H = Math.max(280, Math.round(rc.height));
    if (cv.width !== Math.round(W * dpr) || cv.height !== Math.round(H * dpr)) {
      cv.width = Math.round(W * dpr); cv.height = Math.round(H * dpr);
    }
    g.setTransform(dpr, 0, 0, dpr, 0, 0);

    // 1. Kozmik uzay arka planı (Keşfet küresiyle aynı stil)
    const bg = g.createRadialGradient(W * 0.42, H * 0.45, 40, W * 0.5, H * 0.5, Math.max(W, H) * 0.8);
    bg.addColorStop(0, '#0f1b33'); bg.addColorStop(0.55, '#091022'); bg.addColorStop(1, '#040711');
    g.fillStyle = bg; g.fillRect(0, 0, W, H);
    for (const st of YILDIZ) {
      const a = 0.35 + 0.45 * (0.5 + 0.5 * Math.sin(T * 1.4 + st.ph));
      g.fillStyle = `rgba(255,248,225,${a.toFixed(2)})`;
      g.beginPath(); g.arc(st.x * W, st.y * H, st.r, 0, 7); g.fill();
    }

    const { cx, cy, R } = geom(W, H);
    const L = window.DUNYA_KATMANLAR || [];
    const atm = L.filter(x => x.grup === 'atm').slice().reverse(); // En dıştan içe
    const ic = L.filter(x => x.grup === 'ic').slice().reverse();   // Kabuktan çekirdeğe

    // 2. ATMOSFERİN 5 KATMANI (Eş merkezli yarı-saydam halkalar)
    for (const kat of atm) {
      const rOut = kat.r1 * R, rIn = kat.r0 * R;
      const akt = hoverId === kat.id || secId === kat.id;
      const gr = g.createRadialGradient(cx, cy, rIn, cx, cy, rOut);
      gr.addColorStop(0, kat.renk); gr.addColorStop(1, kat.renk2);
      g.save();
      g.beginPath(); g.arc(cx, cy, rOut, 0, 7); g.arc(cx, cy, rIn, 0, 7, true); g.closePath();
      g.fillStyle = gr; g.fill();
      g.strokeStyle = akt ? '#ffd666' : 'rgba(180,225,255,0.22)';
      g.lineWidth = akt ? 2.6 : 1;
      g.beginPath(); g.arc(cx, cy, rOut, 0, 7); g.stroke();
      g.restore();

      // Stratosfer içinde yumuşak Ozon Tabakası şeridi
      if (kat.id === 'stratosfer') {
        g.save();
        g.strokeStyle = 'rgba(72,225,235,0.42)'; g.lineWidth = Math.max(2, R * 0.03);
        g.setLineDash([8, 6]);
        g.beginPath(); g.arc(cx, cy, (kat.r0 + 0.075) * R, 0, 7); g.stroke();
        g.restore();
      }
      // Termosfer içinde Kármán çizgisi + Kutup Işıkları (Aurora)
      if (kat.id === 'termosfer') {
        g.save();
        g.strokeStyle = 'rgba(255,214,102,0.38)'; g.lineWidth = 1.2; g.setLineDash([4, 5]);
        g.beginPath(); g.arc(cx, cy, (kat.r0 + 0.03) * R, 0, 7); g.stroke();
        g.setLineDash([]);
        // Kuzey & Güney Aurora yeşil-mor parıltısı
        const aurR = (kat.r0 + 0.09) * R;
        const ph = Math.sin(T * 1.8) * 0.06;
        g.strokeStyle = 'rgba(74,242,175,0.65)'; g.lineWidth = Math.max(3, R * 0.035); g.lineCap = 'round';
        g.beginPath(); g.arc(cx, cy, aurR, -Math.PI * 0.64 + ph, -Math.PI * 0.36 + ph); g.stroke();
        g.strokeStyle = 'rgba(168,110,255,0.45)'; g.lineWidth = Math.max(2, R * 0.02);
        g.beginPath(); g.arc(cx, cy, aurR + 4, -Math.PI * 0.6 + ph, -Math.PI * 0.4 + ph); g.stroke();
        g.restore();
      }
    }

    // 2b. Atmosfer içi canlı mini öğeler (uçak, meteor, ISS, uydu)
    // Yolcu uçağı (Troposfer)
    {
      const a = -2.2 + Math.sin(T * 0.25) * 0.35, rr = 1.07 * R;
      const ux = cx + Math.cos(a) * rr, uy = cy + Math.sin(a) * rr;
      g.font = `${clamp(11 * Math.sqrt(z), 10, 18)}px system-ui`; g.textAlign = 'center'; g.textBaseline = 'middle';
      g.fillText('✈️', ux, uy);
    }
    // Hava balonu (Stratosfer)
    {
      const a = -2.55, rr = 1.21 * R;
      g.font = `${clamp(11 * Math.sqrt(z), 10, 18)}px system-ui`;
      g.fillText('🎈', cx + Math.cos(a) * rr, cy + Math.sin(a) * rr);
    }
    // Yıldız kayması / Göktaşı (Mezosfer)
    {
      const mt = (T * 0.42) % 1;
      const a0 = -0.85, a1 = -0.58, a = a0 + (a1 - a0) * mt, rr = (1.42 - mt * 0.11) * R;
      const mx = cx + Math.cos(a) * rr, my = cy + Math.sin(a) * rr;
      const tx = cx + Math.cos(a - 0.11) * (rr + 0.05 * R), ty = cy + Math.sin(a - 0.11) * (rr + 0.05 * R);
      const gr = g.createLinearGradient(tx, ty, mx, my);
      gr.addColorStop(0, 'rgba(255,200,100,0)'); gr.addColorStop(1, 'rgba(255,245,190,0.95)');
      g.strokeStyle = gr; g.lineWidth = 2.4; g.beginPath(); g.moveTo(tx, ty); g.lineTo(mx, my); g.stroke();
      g.fillStyle = '#fff9d6'; g.beginPath(); g.arc(mx, my, 2.5, 0, 7); g.fill();
    }
    // ISS (Termosfer)
    {
      const a = -1.1 + T * 0.12, rr = 1.54 * R;
      g.font = `${clamp(13 * Math.sqrt(z), 11, 20)}px system-ui`;
      g.fillText('🛰️', cx + Math.cos(a) * rr, cy + Math.sin(a) * rr);
    }
    // Uzay uydusu (Ekzosfer)
    {
      const a = 0.65 - T * 0.06, rr = 1.72 * R;
      g.font = `${clamp(12 * Math.sqrt(z), 10, 18)}px system-ui`;
      g.fillText('📡', cx + Math.cos(a) * rr, cy + Math.sin(a) * rr);
    }

    // 3. DÜNYA — SOL YARI: CANLI YÜZEY (Keşfet Küresi Tarzında Okyanus, Kıta, Kutup, Bulut)
    g.save();
    g.beginPath(); g.arc(cx, cy, R, Math.PI * 0.5, Math.PI * 1.5); g.closePath(); g.clip();
    const oc = g.createRadialGradient(cx - R * 0.38, cy - R * 0.35, R * 0.06, cx, cy, R);
    oc.addColorStop(0, '#9bd0e8'); oc.addColorStop(0.55, '#5da3cc'); oc.addColorStop(1, '#2b5f8a');
    g.fillStyle = oc; g.fillRect(cx - R, cy - R, R + 2, R * 2);

    // Keşfet tonlarında stilize yeşil-altın kıta silüetleri (sol yarımküre)
    const kgr = g.createLinearGradient(cx - R, cy - R, cx, cy + R);
    kgr.addColorStop(0, '#cfe0a8'); kgr.addColorStop(1, '#8fb06d');
    g.fillStyle = kgr; g.strokeStyle = 'rgba(72,96,58,0.45)'; g.lineWidth = 1.2;
    const cizKita = pts => {
      g.beginPath();
      pts.forEach(([px, py], i) => i === 0 ? g.moveTo(cx + px * R, cy + py * R) : g.lineTo(cx + px * R, cy + py * R));
      g.closePath(); g.fill(); g.stroke();
    };
    // Avrupa / Afrika batısı + Amerika hissi veren organik kıtalar
    cizKita([[-0.78,-0.52],[-0.42,-0.62],[-0.18,-0.45],[-0.28,-0.16],[-0.58,-0.10],[-0.82,-0.25]]);
    cizKita([[-0.56,-0.02],[-0.15,-0.08],[-0.02,0.18],[-0.18,0.58],[-0.46,0.46],[-0.62,0.18]]);
    cizKita([[-0.92,0.12],[-0.72,0.22],[-0.66,0.56],[-0.82,0.68],[-0.95,0.42]]);
    // Sahra çölü tonu
    g.fillStyle = 'rgba(235,216,170,0.65)';
    g.beginPath(); g.ellipse(cx - 0.32 * R, cy + 0.06 * R, 0.2 * R, 0.1 * R, -0.2, 0, 7); g.fill();
    // Kutup buzulları
    g.fillStyle = 'rgba(248,252,255,0.92)';
    g.beginPath(); g.ellipse(cx - 0.12 * R, cy - 0.94 * R, 0.42 * R, 0.13 * R, 0, 0, 7); g.fill();
    g.beginPath(); g.ellipse(cx - 0.12 * R, cy + 0.95 * R, 0.45 * R, 0.12 * R, 0, 0, 7); g.fill();
    // Hafif beyaz bulut şeritleri
    g.fillStyle = 'rgba(255,255,255,0.34)';
    g.beginPath(); g.ellipse(cx - 0.48 * R, cy - 0.32 * R, 0.24 * R, 0.045 * R, 0.18, 0, 7); g.fill();
    g.beginPath(); g.ellipse(cx - 0.35 * R, cy + 0.36 * R, 0.28 * R, 0.04 * R, -0.15, 0, 7); g.fill();
    // Küre gölgesi (sol kenar derinliği)
    const sh = g.createRadialGradient(cx - R * 0.35, cy - R * 0.35, R * 0.15, cx, cy, R);
    sh.addColorStop(0, 'rgba(255,255,240,0.1)'); sh.addColorStop(0.7, 'rgba(0,0,0,0)'); sh.addColorStop(1, 'rgba(5,12,28,0.42)');
    g.fillStyle = sh; g.fillRect(cx - R, cy - R, R + 2, R * 2);
    g.restore();

    // 4. DÜNYA — SAĞ YARI: YARIM ELMA KESİTİ (Merkeze Kadar 5 İç Katman!)
    g.save();
    g.beginPath(); g.arc(cx, cy, R, -Math.PI * 0.5, Math.PI * 0.5); g.closePath(); g.clip();
    for (const kat of ic) {
      const rOut = kat.r1 * R, rIn = kat.r0 * R;
      const akt = hoverId === kat.id || secId === kat.id;
      const gr = g.createRadialGradient(cx, cy, rIn, cx, cy, rOut);
      gr.addColorStop(0, kat.renk); gr.addColorStop(1, kat.renk2);
      g.fillStyle = gr;
      g.beginPath(); g.arc(cx, cy, rOut, -Math.PI * 0.5, Math.PI * 0.5); g.lineTo(cx, cy); g.closePath(); g.fill();
      if (akt) {
        g.strokeStyle = '#ffd666'; g.lineWidth = 3;
        g.beginPath(); g.arc(cx, cy, rOut - 1, -Math.PI * 0.5, Math.PI * 0.5); g.stroke();
      } else {
        g.strokeStyle = 'rgba(255,235,190,0.28)'; g.lineWidth = 1;
        g.beginPath(); g.arc(cx, cy, rOut, -Math.PI * 0.5, Math.PI * 0.5); g.stroke();
      }
    }
    // Dış çekirdekte canlı sıvı metal akım halkaları
    g.strokeStyle = 'rgba(255,235,140,0.35)'; g.lineWidth = 1.6;
    for (let i = 0; i < 3; i++) {
      const a0 = -1.2 + i * 0.85 + Math.sin(T * 1.2 + i) * 0.15;
      g.beginPath(); g.arc(cx, cy, (0.31 + i * 0.065) * R, a0, a0 + 0.55); g.stroke();
    }
    // İç çekirdek parlak merkez parıltısı
    const coreG = g.createRadialGradient(cx, cy, 0, cx, cy, 0.24 * R);
    coreG.addColorStop(0, '#ffffff'); coreG.addColorStop(0.55, '#ffe88a'); coreG.addColorStop(1, 'rgba(255,180,30,0)');
    g.fillStyle = coreG; g.beginPath(); g.arc(cx, cy, 0.24 * R, 0, 7); g.fill();
    g.restore();

    // Yarım elma kesit kenar çizgisi (merkezden dikey kesit sınırı)
    g.strokeStyle = 'rgba(255,244,210,0.75)'; g.lineWidth = 2;
    g.beginPath(); g.moveTo(cx, cy - R); g.lineTo(cx, cy + R); g.stroke();
    g.strokeStyle = 'rgba(255,248,225,0.45)'; g.lineWidth = 1.4;
    g.beginPath(); g.arc(cx, cy, R, 0, 7); g.stroke();

    // 5. OKUNAKLI KATMAN ETİKETLERİ (Kesit üzerinde temiz konumlandırma)
    g.textBaseline = 'middle';
    const labelCiz = (kat, ang, align) => {
      const rm = (kat.r0 + kat.r1) * 0.5 * R;
      const x = cx + Math.cos(ang) * rm, y = cy + Math.sin(ang) * rm;
      const akt = hoverId === kat.id || secId === kat.id;
      if (z < 0.8 && !akt && kat.id === 'yerkabugu') return;
      g.font = `${akt ? 800 : 700} ${clamp(10.5 * Math.pow(z, 0.25), 10, 14)}px system-ui`;
      g.textAlign = align || 'center';
      const txt = `${kat.ik} ${kat.ad.split(' (')[0]}`;
      g.lineWidth = 3.2; g.strokeStyle = 'rgba(8,12,24,0.88)'; g.strokeText(txt, x, y);
      g.fillStyle = akt ? '#ffd666' : '#f4ead2'; g.fillText(txt, x, y);
    };
    const acilar = {
      'ic-cekirdek': [0, 'center'],
      'dis-cekirdek': [0.35, 'center'],
      'alt-manto': [-0.32, 'center'],
      'ust-manto': [0.58, 'center'],
      'yerkabugu': [0.95, 'left'],
      'troposfer': [-1.18, 'left'],
      'stratosfer': [-0.95, 'left'],
      'mezosfer': [-0.72, 'left'],
      'termosfer': [-0.48, 'left'],
      'ekzosfer': [-0.24, 'left']
    };
    for (const kat of L) {
      const [ang, al] = acilar[kat.id] || [0, 'center'];
      if (kat.id === 'ic-cekirdek') {
        const akt = hoverId === kat.id || secId === kat.id;
        g.font = `800 ${clamp(10.5 * Math.pow(z, 0.25), 10, 13.5)}px system-ui`;
        g.textAlign = 'center'; g.lineWidth = 3; g.strokeStyle = 'rgba(40,18,4,0.85)';
        g.strokeText('☀️ İç Çekirdek', cx + 0.08 * R, cy);
        g.fillStyle = akt ? '#fff' : '#3a1a04'; g.fillText('☀️ İç Çekirdek', cx + 0.08 * R, cy);
      } else {
        labelCiz(kat, ang, al);
      }
    }

    raf = requestAnimationFrame(draw);
  }

  function kartCiz() {
    const L = window.DUNYA_KATMANLAR || [];
    const idx = Math.max(0, L.findIndex(x => x.id === secId));
    const k = L[idx]; if (!k) return;
    root.querySelectorAll('[data-ke-id]').forEach(b => b.classList.toggle('on', b.dataset.keId === k.id));
    const card = root.querySelector('#ke-kart');
    const prev = L[idx - 1], next = L[idx + 1];
    card.innerHTML = `
      <button type="button" class="ke-tutamak" data-ke-ac aria-label="Kartı büyüt / küçült"><i></i></button>
      <span class="ke-tur">${k.grup === 'ic' ? '🌋 Dünya\'nın İç Katmanı' : '🌌 Atmosfer Katmanı'}</span>
      <h3>${k.ik} ${esc(k.ad)}</h3>
      <div class="ke-meta">
        <div><small>📏 Konum / Kalınlık</small><b>${esc(k.konum)}</b></div>
        <div><small>🌡️ Sıcaklık</small><b>${esc(k.sicaklik)}</b></div>
        <div><small>🪨 Yapı</small><b>${esc(k.yapi)}</b></div>
        <div><small>⚖️ Basınç</small><b>${esc(k.basinc)}</b></div>
      </div>
      <p class="ke-ozet">${esc(k.ozet)}</p>
      <button type="button" class="ke-devam" data-ke-ac>Devamını oku ▾</button>
      <p class="ke-var"><b>🔭 Burada Ne Var?</b> ${esc(k.nelerVar)}</p>
      <div class="ke-bil"><b>🤯 En Şaşırtıcı Bilgi</b><p>${esc(k.sasirtici)}</p></div>
      <div class="ke-yon">
        <button type="button" ${prev ? `data-ke-git="${prev.id}"` : 'disabled'}>‹ ${prev ? esc(prev.ad.split(' (')[0]) : 'Merkez'}</button>
        <button type="button" ${next ? `data-ke-git="${next.id}"` : 'disabled'}>${next ? esc(next.ad.split(' (')[0]) : 'Uzay'} ›</button>
      </div>`;
  }

  function odakla(id) {
    secId = id;
    kartCiz();
  }

  function kur() {
    if (root) return;
    const L = window.DUNYA_KATMANLAR || [];
    root = document.createElement('div');
    root.id = 'katman-ekran';
    root.className = 'ke-ekran';
    root.hidden = true;
    root.setAttribute('role', 'dialog');
    root.setAttribute('aria-label', 'Dünya ve Uzay Katmanları');
    root.innerHTML = `
      <canvas id="ke-cv"></canvas>
      <header class="ke-ust">
        <button type="button" id="ke-geri" class="ke-geri">← Haritaya Dön</button>
        <div class="ke-bas"><b>🌍 Dünya ve Uzay Katmanları</b><small>Katmanlara tıkla · tekerlek / iki parmakla yakınlaştır ve sürükle</small></div>
      </header>
      <div class="ke-ctl">
        <button type="button" id="ke-zin" title="Yakınlaştır">＋</button>
        <button type="button" id="ke-zout" title="Uzaklaştır">－</button>
        <button type="button" id="ke-fit" title="Görünümü sıfırla">⤢</button>
      </div>
      <aside id="ke-kart" class="ke-kart"></aside>
      <nav class="ke-serit" aria-label="Katman listesi">
        ${L.map(k => `<button type="button" data-ke-id="${k.id}" class="${k.grup}">${k.ik}<span>${esc(k.ad.split(' (')[0])}</span></button>`).join('')}
      </nav>`;
    document.body.appendChild(root);
    cv = root.querySelector('#ke-cv');
    g = cv.getContext('2d');

    root.querySelector('#ke-geri').addEventListener('click', kapat);
    root.querySelector('#ke-zin').addEventListener('click', () => { tz = clamp(tz * 1.35, 0.65, 5.5); });
    root.querySelector('#ke-zout').addEventListener('click', () => { tz = clamp(tz / 1.35, 0.65, 5.5); if (tz <= 1.05) { tpanX = 0; tpanY = 0; } });
    root.querySelector('#ke-fit').addEventListener('click', () => { tz = 1; tpanX = 0; tpanY = 0; });

    root.addEventListener('click', ev => {
      // Telefonda kart küçük başlar; "Devamını oku" ya da tutamak tam metni açar/kapatır
      if (ev.target.closest('[data-ke-ac]')) {
        const acik = root.classList.toggle('ke-kart-acik');
        root.querySelectorAll('.ke-devam').forEach(d => { d.textContent = acik ? 'Daha az göster ▴' : 'Devamını oku ▾'; });
        return;
      }
      const b = ev.target.closest('[data-ke-id],[data-ke-git]');
      if (b) odakla(b.dataset.keId || b.dataset.keGit);
    });

    const cvPos = ev => { const rc = cv.getBoundingClientRect(); return [ev.clientX - rc.left, ev.clientY - rc.top]; };
    cv.addEventListener('wheel', ev => {
      ev.preventDefault();
      const f = ev.deltaY < 0 ? 1.18 : 1 / 1.18;
      tz = clamp(tz * f, 0.65, 5.5);
      if (tz <= 1.02) { tpanX *= 0.85; tpanY *= 0.85; }
    }, { passive: false });

    cv.addEventListener('pointerdown', ev => {
      const p = cvPos(ev); pts.set(ev.pointerId, p); cv.setPointerCapture(ev.pointerId);
      if (pts.size === 1) drag = { x: p[0], y: p[1], moved: false, d0: null };
      else if (pts.size === 2) {
        const [a, b] = [...pts.values()];
        drag = { x: (a[0] + b[0]) / 2, y: (a[1] + b[1]) / 2, moved: true, d0: Math.hypot(a[0] - b[0], a[1] - b[1]) };
      }
    });
    cv.addEventListener('pointermove', ev => {
      const p = cvPos(ev);
      if (pts.has(ev.pointerId)) pts.set(ev.pointerId, p);
      if (drag && pts.size === 2) {
        const [a, b] = [...pts.values()], d = Math.hypot(a[0] - b[0], a[1] - b[1]);
        if (drag.d0 > 10) tz = clamp(tz * (d / drag.d0), 0.65, 5.5);
        drag.d0 = d;
        return;
      }
      if (drag && pts.size === 1) {
        const dx = p[0] - drag.x, dy = p[1] - drag.y;
        if (Math.hypot(dx, dy) > 4) drag.moved = true;
        tpanX = clamp(tpanX + dx, -420 * z, 420 * z);
        tpanY = clamp(tpanY + dy, -420 * z, 420 * z);
        drag.x = p[0]; drag.y = p[1];
      } else {
        const rc = cv.getBoundingClientRect();
        const k = katmanAt(p[0], p[1], rc.width, rc.height);
        hoverId = k ? k.id : null;
        cv.style.cursor = k ? 'pointer' : 'grab';
      }
    });
    const bitir = ev => {
      if (drag && !drag.moved && pts.size <= 1) {
        const p = cvPos(ev), rc = cv.getBoundingClientRect();
        const k = katmanAt(p[0], p[1], rc.width, rc.height);
        if (k) odakla(k.id);
      }
      pts.delete(ev.pointerId);
      if (!pts.size) drag = null;
    };
    cv.addEventListener('pointerup', bitir);
    cv.addEventListener('pointercancel', bitir);
    window.addEventListener('keydown', ev => { if (ev.key === 'Escape' && root && !root.hidden) kapat(); });
  }

  function ac() {
    kur();
    root.hidden = false;
    tz = 1; tpanX = 0; tpanY = 0;
    kartCiz();
    lastT = performance.now();
    if (!raf) raf = requestAnimationFrame(draw);
  }
  function kapat() {
    if (root) root.hidden = true;
    if (raf) { cancelAnimationFrame(raf); raf = 0; }
  }

  window.KatmanEkran = { ac, kapat };
})();
