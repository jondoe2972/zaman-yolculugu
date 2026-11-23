// 📸 Burası Neresi ve Hangi Çağ? (TimeGuessr / GeoGuessr tarzı fotoğraf tahmin oyunu)
// Fotoğrafa bak, mini haritada yerini işaretle ve hangi çağda yapıldığını tahmin et!
// Adres: ?oyun=foto · Veri: window.YAPILAR (data/yapilar/*.js) + window.DUNYA_VERI
'use strict';
window.FotoTahmin = (() => {
  const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const API = 'https://en.wikipedia.org/w/api.php?format=json&origin=*&action=query&redirects=1&prop=pageimages&piprop=thumbnail&pithumbsize=600&titles=';
  const D = Math.PI / 180;
  const km = (a, b) => {
    const h = Math.sin((b[0] - a[0]) * D / 2) ** 2 + Math.cos(a[0] * D) * Math.cos(b[0] * D) * Math.sin((b[1] - a[1]) * D / 2) ** 2;
    return Math.round(12742 * Math.asin(Math.sqrt(h)));
  };
  const oku = (k, v) => { try { return JSON.parse(localStorage[k] || 'null') || v; } catch (e) { return v; } };
  const yaz = (k, v) => { try { localStorage[k] = JSON.stringify(v); } catch (e) { } };

  const CAGLAR = [
    { id: 'antik',  ad: 'Antik Çağ',   alt: 'MÖ 500 öncesi',      test: y => y > 500 },
    { id: 'klasik', ad: 'Klasik Çağ',  alt: 'MÖ 500 – MS 500',    test: y => y <= 500 && y > -500 },
    { id: 'orta',   ad: 'Orta Çağ',    alt: 'MS 500 – 1450',      test: y => y <= -500 && y > -1450 },
    { id: 'yeni',   ad: 'Yeni Çağ',    alt: 'MS 1450 – 1800',     test: y => y <= -1450 && y > -1800 },
    { id: 'sanayi', ad: 'Sanayi Çağı', alt: 'MS 1800 – 1950',     test: y => y <= -1800 && y > -1950 },
    { id: 'modern', ad: 'Modern Çağ',  alt: 'MS 1950 sonrası',    test: y => y <= -1950 }
  ];
  const cagBul = y => CAGLAR.find(c => c.test(y)) || CAGLAR[2];

  function kademe(tur) {
    if (tur < 2) return { ad: '🌱 Isınma', minO: 5, carpan: 1, xp: 10 };
    if (tur < 5) return { ad: '⚔️ Orta', minO: 4, carpan: 1.5, xp: 16 };
    if (tur < 8) return { ad: '🔥 Zor', minO: 3, carpan: 2, xp: 24 };
    return { ad: '👑 Efsane', minO: 1, carpan: 3, xp: 35 };
  }

  const fotoCache = new Map();
  async function fotoGetir(w) {
    if (!w) return null;
    if (fotoCache.has(w)) return fotoCache.get(w);
    try {
      const j = await fetch(API + encodeURIComponent(w)).then(r => r.json());
      const p = Object.values(j.query?.pages || {})[0];
      const src = p && p.thumbnail ? p.thumbnail.source : null;
      fotoCache.set(w, src);
      return src;
    } catch (e) {
      return null;
    }
  }

  let el = null, s = null;
  const ist = () => oku('zy-foto-ist', { rekor: 0, tur: 0 });
  const istYaz = fn => { const I = ist(); fn(I); yaz('zy-foto-ist', I); return I; };

  function kutu() {
    if (!el) {
      el = document.createElement('div');
      el.id = 'foto-oyun';
      el.className = 'foto-oyun';
      el.setAttribute('role', 'dialog');
      el.setAttribute('aria-label', 'Burası Neresi ve Hangi Çağ?');
      document.querySelector('.stage').appendChild(el);
      el.addEventListener('click', tikla);
      window.addEventListener('keydown', ev => { if (ev.key === 'Escape' && el && !el.hidden) kapat(); });
    }
    el.hidden = false;
    return el;
  }

  function adaySec() {
    const kd = kademe(s.tur);
    const L = (window.YAPILAR || []).filter(x => x && x.w && x.ll && typeof x.y === 'number' && (x.o || 1) >= kd.minO && !s.gorulen.has(x.id));
    const havuz = L.length ? L : (window.YAPILAR || []).filter(x => x && x.w && x.ll && !s.gorulen.has(x.id));
    if (!havuz.length) { s.gorulen.clear(); return adaySec(); }
    const sec = havuz[Math.floor(Math.random() * havuz.length)];
    s.gorulen.add(sec.id);
    return sec;
  }

  // Mini dünya haritası (Equirectangular izdüşüm: tıklanan yerden [lat, lon] alınır)
  function haritaCiz() {
    const cv = el && el.querySelector('.ft-cv');
    if (!cv) return;
    const r = cv.getBoundingClientRect();
    const W = Math.round(r.width) || 440, H = Math.round(r.height) || 210;
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    cv.width = W * dpr; cv.height = H * dpr;
    const g = cv.getContext('2d');
    g.setTransform(dpr, 0, 0, dpr, 0, 0);

    const X = lo => (lo + 180) / 360 * W;
    const Y = la => (90 - la) / 180 * H;

    // Okyanus & hafif enlem çizgileri
    g.fillStyle = '#1b3552'; g.fillRect(0, 0, W, H);
    g.strokeStyle = 'rgba(255,255,255,0.08)'; g.lineWidth = 0.8;
    for (const la of [-60, -30, 0, 30, 60]) { g.beginPath(); g.moveTo(0, Y(la)); g.lineTo(W, Y(la)); g.stroke(); }

    // Kıtalar (Natural Earth)
    const kara = (window.DUNYA_VERI || {}).kara || [];
    g.fillStyle = '#c8b68e'; g.strokeStyle = '#5a462a'; g.lineWidth = 0.6;
    g.beginPath();
    for (const poly of kara) {
      for (let i = 0; i < poly.length; i++) {
        const px = X(poly[i][1]), py = Y(poly[i][0]);
        if (i === 0) g.moveTo(px, py); else g.lineTo(px, py);
      }
      g.closePath();
    }
    g.fill(); g.stroke();

    // Sonuç çizgisi ve gerçek konum
    if (s.acik && s.hedef) {
      const [gla, glo] = s.hedef.ll;
      const gx = X(glo), gy = Y(gla);
      if (s.pin) {
        const [pla, plo] = s.pin;
        g.strokeStyle = '#ffd666'; g.lineWidth = 2; g.setLineDash([5, 4]);
        g.beginPath(); g.moveTo(X(plo), Y(pla)); g.lineTo(gx, gy); g.stroke(); g.setLineDash([]);
      }
      g.fillStyle = '#22c55e'; g.strokeStyle = '#fff'; g.lineWidth = 2;
      g.beginPath(); g.arc(gx, gy, 6.5, 0, 7); g.fill(); g.stroke();
    }
    // Oyuncunun işaretlediği nokta
    if (s.pin) {
      const [pla, plo] = s.pin;
      const px = X(plo), py = Y(pla);
      g.fillStyle = '#ef4444'; g.strokeStyle = '#fff'; g.lineWidth = 2;
      g.beginPath(); g.arc(px, py, 6, 0, 7); g.fill(); g.stroke();
    }
  }

  function ciz() {
    const h = s.hedef, I = ist(), kd = kademe(s.tur);
    const hazir = !!(s.pin && s.cag);
    const gercekCag = h ? cagBul(h.y) : null;
    const kalpler = '❤️'.repeat(s.can) + '🖤'.repeat(Math.max(0, 3 - s.can));
    kutu().innerHTML = `
      <div class="ho-ust">
        <div><b>📸 Burası Neresi? · ${kd.ad} (×${kd.carpan})</b><small>${kalpler} · Haritada işaretle, çağını seç — her tur zorlaşır!</small></div>
        <div class="eo-sayac"><span>⭐ <b>${s.toplamPuan.toLocaleString('tr-TR')}</b></span><span>🏆 <b>${Math.max(I.rekor, s.toplamPuan).toLocaleString('tr-TR')}</b></span></div>
        <button class="ho-x" title="Kapat" aria-label="Kapat">✕</button>
      </div>
      <div class="ft-grid">
        <div class="ft-foto">
          ${s.foto ? `<img src="${esc(s.foto)}" alt="Tahmin edilecek tarihî yer">` : `<div class="ft-yukle">📷 Fotoğraf yükleniyor…</div>`}
          ${s.acik && h ? `<div class="ft-etiket"><b>${esc(h.ad)}</b><small>📍 ${esc(h.sehir)}, ${esc(h.ulke)} · ${esc(h.yil || YIL.fmt(h.y))}</small></div>` : ''}
        </div>
        <div class="ft-sag">
          <div class="ft-harita-kutu">
            <canvas class="ft-cv" title="Haritada tahmin ettiğin noktaya tıkla"></canvas>
            <small class="ft-hint">${s.acik ? `🟢 Gerçek konum · 🔴 Senin tahminin` : s.pin ? `🔴 Nokta işaretlendi — istersen başka yere tıkla` : `👆 Haritada buranın nerede olduğunu işaretle`}</small>
          </div>
          <div class="ft-caglar">
            ${CAGLAR.map(c => {
              let cls = '';
              if (s.acik) { if (gercekCag && c.id === gercekCag.id) cls = 'dogru'; else if (c.id === s.cag) cls = 'yanlis'; else cls = 'soluk'; }
              else if (c.id === s.cag) cls = 'secili';
              return `<button type="button" class="ft-cag ${cls}" data-ft-cag="${c.id}" ${s.acik ? 'disabled' : ''}><b>${c.ad}</b><small>${c.alt}</small></button>`;
            }).join('')}
          </div>
        </div>
      </div>
      ${s.acik ? `<div class="eo-sonuc ${s.bitti ? 'bitti' : s.sonPuan >= 500 ? 'iyi' : 'bitti'}">
        <b>${s.bitti ? `💀 Canların Bitti! Toplam ${s.toplamPuan.toLocaleString('tr-TR')} puan` : `🎯 +${s.sonPuan} puan! · Mesafe: ${s.mesafe.toLocaleString('tr-TR')} km · Çağ: ${s.cagDogru ? 'Doğru ✅' : gercekCag.ad + ' ❌'}`}</b>
        ${h.k ? `<small>${esc(h.k)}</small>` : ''}
        <div class="eo-btns">
          ${s.bitti ? `<button data-ft="tekrar" class="ana">🔁 Rekor İçin Tekrar Dene</button>` : `<button data-ft="sonraki" class="ana">Sonraki Fotoğraf ›</button>`}
          <button data-ft="kure">🌍 Kürede Gör</button>
          <button data-ft="paylas">📋 Paylaş</button>
        </div>
      </div>` : `<div class="ft-alt"><button data-ft="tahmin" class="ana" ${hazir ? '' : 'disabled'}>🎯 Tahmin Et</button></div>`}`;

    const cv = el.querySelector('.ft-cv');
    if (cv) {
      haritaCiz();
      if (!s.acik) {
        cv.addEventListener('click', ev => {
          const r = cv.getBoundingClientRect();
          const lo = ((ev.clientX - r.left) / r.width) * 360 - 180;
          const la = 90 - ((ev.clientY - r.top) / r.height) * 180;
          s.pin = [Math.max(-85, Math.min(85, la)), Math.max(-180, Math.min(180, lo))];
          ciz();
        });
      }
    }
  }

  async function yeniTur() {
    s.pin = null; s.cag = null; s.acik = false; s.foto = null;
    for (let deneme = 0; deneme < 6; deneme++) {
      const aday = adaySec();
      if (!aday) break;
      s.hedef = aday;
      ciz();
      const src = await fotoGetir(aday.w);
      if (src) {
        if (s && s.hedef === aday) { s.foto = src; ciz(); }
        return;
      }
    }
    ciz();
  }

  function tahminEt() {
    if (!s || s.acik || !s.pin || !s.cag || !s.hedef) return;
    const h = s.hedef;
    const d = km(s.pin, h.ll);
    const yerPuan = Math.max(0, Math.round(600 * Math.exp(-d / 2200)));
    const gercekCag = cagBul(h.y);
    const cagDogru = s.cag === gercekCag.id;
    const cagIdxFark = Math.abs(CAGLAR.findIndex(c => c.id === s.cag) - CAGLAR.findIndex(c => c.id === gercekCag.id));
    const cagPuan = cagDogru ? 400 : cagIdxFark === 1 ? 160 : 0;
    const kd = kademe(s.tur);
    s.mesafe = d;
    s.cagDogru = cagDogru;
    const ham = yerPuan + cagPuan;
    s.sonPuan = Math.round(ham * kd.carpan);
    s.toplamPuan += s.sonPuan;
    s.tur++;
    if (ham < 350) { s.can--; if (s.can <= 0) s.bitti = true; }
    s.acik = true;
    istYaz(I => { I.tur++; if (s.toplamPuan > I.rekor) I.rekor = s.toplamPuan; });
    if (ham >= 450 && window.ZY && window.ZY.xpEkle) {
      window.ZY.xpEkle(kd.xp, 'foto');
    }
    ciz();
  }

  function tikla(ev) {
    if (ev.target.closest('.ho-x')) return kapat();
    const cg = ev.target.closest('[data-ft-cag]');
    if (cg && s && !s.acik) { s.cag = cg.dataset.ftCag; ciz(); return; }
    const b = ev.target.closest('[data-ft]');
    if (!b) return;
    const k = b.dataset.ft;
    if (k === 'tahmin') tahminEt();
    else if (k === 'sonraki') yeniTur();
    else if (k === 'tekrar') basla();
    else if (k === 'kure' && s && s.hedef) {
      const id = s.hedef.id;
      kapat();
      if (window.ZY && window.ZY.yapiKurede) window.ZY.yapiKurede(id);
    } else if (k === 'paylas') {
      const I = ist();
      const met = `📸 Burası Neresi ve Hangi Çağ?\n⭐ Puan: ${s.toplamPuan.toLocaleString('tr-TR')} · 🏆 Rekor: ${I.rekor.toLocaleString('tr-TR')}\n${location.origin}${location.pathname}?oyun=foto`;
      (navigator.clipboard ? navigator.clipboard.writeText(met) : Promise.reject()).then(
        () => { b.textContent = '✓ Kopyalandı'; },
        () => { b.textContent = 'Kopyalanamadı'; }
      );
    }
  }

  function basla() {
    s = { gorulen: new Set(), toplamPuan: 0, tur: 0, can: 3, bitti: false, hedef: null, foto: null, pin: null, cag: null, acik: false, mesafe: 0, sonPuan: 0, cagDogru: false };
    yeniTur();
  }
  function ac() { basla(); }
  function kapat() { if (el) el.hidden = true; }
  function rekor() { return ist().rekor; }

  return { ac, kapat, rekor };
})();
