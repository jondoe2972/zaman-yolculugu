// 🗺️ Sınırdan Bil: günlük bulmaca. Bir devletin o yılki sınırı gösterilir, 6 tahminde bulunur.
// Her yanlış tahmin: uzaklık, yön ve yakınlık. 2. yanlıştan sonra kıyılar, 4. yanlıştan sonra ilk harf açılır.
// Herkese aynı gün aynı bulmaca düşer; sonuç Wordle gibi emojilerle paylaşılır. Adres: ?oyun=sinir
// Veri: data/oyun/sinir-bil.js (araclar/sinir-bil-uret.js), sınırlar Dunya.kayit ile (Cliopatria, CC BY 4.0).
'use strict';
window.SinirBil = (() => {
  const HAK = 6, D = Math.PI / 180, BASLANGIC = Date.UTC(2026, 10, 21);
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const sade = s => s.toLocaleLowerCase('tr').normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/ı/g, 'i').replace(/[^a-z0-9 ]/g, ' ').replace(/\s+/g, ' ').trim();
  const L = () => (window.SINIR_BIL || []).map(r => ({ n: r[0], ad: r[1], y: r[2], e: [r[3], r[4]], w: r[5] }));
  const km = (a, b) => { const h = Math.sin((b[0] - a[0]) * D / 2) ** 2 + Math.cos(a[0] * D) * Math.cos(b[0] * D) * Math.sin((b[1] - a[1]) * D / 2) ** 2; return Math.round(12742 * Math.asin(Math.sqrt(h))); };
  const OKLAR = ['⬆️', '↗️', '➡️', '↘️', '⬇️', '↙️', '⬅️', '↖️'];
  function yon(a, b) {
    const y = Math.sin((b[1] - a[1]) * D) * Math.cos(b[0] * D), x = Math.cos(a[0] * D) * Math.sin(b[0] * D) - Math.sin(a[0] * D) * Math.cos(b[0] * D) * Math.cos((b[1] - a[1]) * D);
    return OKLAR[Math.round(((Math.atan2(y, x) / D + 360) % 360) / 45) % 8];
  }
  const kare = d => d === 0 ? '🟩' : d < 1000 ? '🟨' : d < 3000 ? '🟧' : '🟥';
  // gün numarası (yerel tarih) ve o günün devleti: listenin tohumlu karışımı, her turda yeni karışım
  function gunNo() { const t = new Date(); return Math.max(0, Math.floor((Date.UTC(t.getFullYear(), t.getMonth(), t.getDate()) - BASLANGIC) / 864e5)); }
  function karistir(n, tohum) { const a = [...Array(n).keys()]; let s = tohum * 2654435761 >>> 0; const r = () => ((s = (s * 1664525 + 1013904223) >>> 0) / 4294967296); for (let i = n - 1; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }
  function gununDevleti(g) { const T = L(), tur = Math.floor(g / T.length); return T[karistir(T.length, tur + 7)[((g % T.length) + T.length) % T.length]]; }

  let el = null, s = null, serbestSeri = 0;
  const kademe = n => n < 2 ? { ad: '🌱 Isınma', kiyi: 0, harf: 2, xp: 15 } : n < 4 ? { ad: '⚔️ Orta', kiyi: 2, harf: 4, xp: 25 } : n < 7 ? { ad: '🔥 Zor', kiyi: 4, harf: 9, xp: 40 } : { ad: '👑 Efsane', kiyi: 5, harf: 9, xp: 55 };
  const kayitAnahtar = g => 'zy-sinir-' + g;
  const depoYaz = (k, v) => { try { localStorage[k] = JSON.stringify(v); } catch (e) { /* gizli mod */ } };
  const ist = () => { try { return JSON.parse(localStorage['zy-sinir-ist'] || '') } catch (e) { return { oyun: 0, kazan: 0, seri: 0, enSeri: 0, serRekor: 0, son: null, dag: [0, 0, 0, 0, 0, 0] }; } };

  // ---------- çizim: hedefin merkezine bakan ortografik izdüşüm ----------
  function ciz() {
    const cv = el.querySelector('canvas'), r = cv.getBoundingClientRect(), dpr = Math.min(2, window.devicePixelRatio || 1);
    const W = Math.round(r.width), H = Math.round(r.height); if (!W) return;
    cv.width = W * dpr; cv.height = H * dpr; const g = cv.getContext('2d'); g.setTransform(dpr, 0, 0, dpr, 0, 0);
    const zAyar = s.serbest ? kademe(serbestSeri) : kademe(2);
    const kiyi = s.yanlis >= zAyar.kiyi || s.bitti;
    g.fillStyle = kiyi ? '#a9cbd9' : '#f1e7d2'; g.fillRect(0, 0, W, H);
    if (!s.k) { g.fillStyle = '#8a6a4a'; g.font = '14px Georgia, serif'; g.textAlign = 'center'; g.fillText(s.hata ? 'Sınır yüklenemedi' : 'Sınır yükleniyor…', W / 2, H / 2); return; }
    const [la0, lo0] = s.k.e, s0 = Math.sin(la0 * D), c0 = Math.cos(la0 * D);
    const P = (la, lo) => { const cl = Math.cos(la * D), dl = (lo - lo0) * D; let x = cl * Math.sin(dl), y = c0 * Math.sin(la * D) - s0 * cl * Math.cos(dl); const z = s0 * Math.sin(la * D) + c0 * cl * Math.cos(dl); if (z < 0) { const m = Math.hypot(x, y) || 1; x /= m; y /= m; } return [x, y, z]; };
    if (!s.olcek) { // ölçek: devletin görünen noktaları çerçevenin %80'ine sığsın
      let x0 = 1, x1 = -1, y0 = 1, y1 = -1;
      for (const h of s.k.H) for (let j = 0; j < h.la.length; j++) { const [x, y, z] = P(h.la[j], h.lo[j]); if (z < 0) continue; x0 = Math.min(x0, x); x1 = Math.max(x1, x); y0 = Math.min(y0, y); y1 = Math.max(y1, y); }
      const gen = Math.max(x1 - x0, 0.05), yuk = Math.max(y1 - y0, 0.05);
      s.olcek = { k: Math.min(W * 0.8 / gen, H * 0.8 / yuk), cx: (x0 + x1) / 2, cy: (y0 + y1) / 2 };
    }
    const O = s.olcek, X = x => W / 2 + (x - O.cx) * O.k, Y = y => H / 2 - (y - O.cy) * O.k;
    const halka = (la, lo) => { let ilk = true; for (let j = 0; j < la.length; j++) { const [x, y] = P(la[j], lo[j]); if (ilk) { g.moveTo(X(x), Y(y)); ilk = false; } else g.lineTo(X(x), Y(y)); } g.closePath(); };
    if (kiyi) {
      g.beginPath(); for (const R of (window.DUNYA_VERI || { kara: [] }).kara) halka(R.map(p => p[0]), R.map(p => p[1]));
      g.fillStyle = '#efe6cf'; g.fill('evenodd'); g.strokeStyle = 'rgba(90,70,40,.35)'; g.lineWidth = 0.8; g.stroke();
    }
    g.beginPath(); for (const h of s.k.H) halka(h.la, h.lo);
    g.fillStyle = s.bitti ? (s.kazandi ? '#5d9a6a' : '#b8574a') : '#8a4f2a'; g.globalAlpha = kiyi ? 0.85 : 1; g.fill('evenodd'); g.globalAlpha = 1;
    g.strokeStyle = 'rgba(40,20,10,.7)'; g.lineWidth = 1.2; g.stroke();
  }

  // ---------- arayüz ----------
  function satirHTML(t) {
    if (!t) return '<li class="sb-bos"></li>';
    return t.d === 0 ? `<li class="sb-dogru"><b>${esc(t.ad)}</b><span>🎯 Doğru!</span></li>`
      : `<li><b>${esc(t.ad)}</b><span>${t.d.toLocaleString('tr-TR')} km</span><span>${t.yon}</span><span>%${Math.max(0, Math.round(100 - t.d / 200))}</span></li>`;
  }
  function ipucuHTML() {
    const h = s.hedef, zAyar = s.serbest ? kademe(serbestSeri) : kademe(2), ip = [];
    ip.push(s.yanlis >= zAyar.kiyi || s.bitti ? '🗺️ Kıyılar açıldı' : `🗺️ Kıyılar ${zAyar.kiyi - s.yanlis} yanlış sonra`);
    if (zAyar.harf < 9 || s.bitti) ip.push(s.yanlis >= zAyar.harf || s.bitti ? `🔤 İlk harf: <b>${esc(h.ad[0])}</b> · ${h.ad.split(' ')[0].length} harfli ilk sözcük` : `🔤 İlk harf ${zAyar.harf - s.yanlis} yanlış sonra`);
    else ip.push('🔥 İleri kademe: harf ipucu yok');
    return ip.map(x => `<span>${x}</span>`).join('');
  }
  function sonucHTML() {
    const h = s.hedef, I = ist();
    const gecen = s.tahmin.length, baslik = s.kazandi ? (gecen === 1 ? 'İlk tahminde! 🏆' : gecen <= 3 ? 'Harika! 🎉' : 'Bildin! 👏') : 'Bu sefer olmadı';
    const yarin = new Date(); yarin.setHours(24, 0, 0, 0); const kalan = Math.max(0, yarin - new Date()), sa = Math.floor(kalan / 36e5), dk = Math.floor(kalan / 6e4) % 60;
    return `<div class="sb-sonuc"><b>${baslik}</b><p>Cevap: <b>${esc(h.ad)}</b> · ${YIL.fmt(h.y)}</p>
      <div class="sb-btn"><button data-sb="paylas" class="ana">📋 Sonucu paylaş</button><button data-sb="kure">🌍 Kürede gör</button>${h.w ? `<a href="https://tr.wikipedia.org/wiki/Special:Search?search=${encodeURIComponent(h.ad.replace(/\s*\(.*\)/, ''))}" target="_blank" rel="noopener">📖 Vikipedi</a>` : ''}</div>
      ${s.serbest ? '<div class="sb-btn"><button data-sb="serbest">🔁 Bir tane daha</button></div>' : `<div class="sb-ist"><span><b>${I.oyun}</b> oyun</span><span><b>%${I.oyun ? Math.round(100 * I.kazan / I.oyun) : 0}</b> başarı</span><span><b>${I.seri}</b> seri</span><span><b>${I.enSeri}</b> en iyi</span></div>
      <small>Yeni bulmaca ${sa} sa ${dk} dk sonra · <button data-sb="serbest" class="lnk">Bu arada serbest oyna</button></small>`}</div>`;
  }
  function goster() {
    const h = s.hedef, kd = kademe(serbestSeri), I = ist();
    el.innerHTML = `<div class="sb-ust"><b>🗺️ Sınırdan Bil</b><small>${s.serbest ? `${kd.ad} · 🔥 ${serbestSeri} seri · 🏆 ${Math.max(I.serRekor || 0, serbestSeri)}` : `#${s.g + 1} · bugünün bulmacası`}</small><button class="sb-x" title="Kapat">✕</button></div>
      <div class="oz-bar"><button type="button" class="oz-btn${!s.serbest ? ' on' : ''}" data-sb="gunluk">📅 Günlük</button><button type="button" class="oz-btn${s.serbest ? ' on' : ''}" data-sb="serbest">🔥 Sonsuz Seri (Gittikçe Zorlaşır)</button></div>
      <canvas class="sb-cv" aria-label="Bulmaca devletinin sınırı"></canvas>
      <p class="sb-soru">${YIL.fmt(h.y)} yılında bu sınırlara sahip devlet hangisi?</p>
      <div class="sb-ipucu">${ipucuHTML()}</div>
      <ol class="sb-liste">${Array.from({ length: HAK }, (_, i) => satirHTML(s.tahmin[i])).join('')}</ol>
      ${s.bitti ? sonucHTML() : `<div class="sb-gir"><input type="text" placeholder="Devlet adı yaz… (ör. Osmanlı)" autocomplete="off" aria-label="Tahmin"><button data-sb="tahmin">Tahmin et</button><ul class="sb-oneri" hidden></ul></div>
      <small class="sb-not">${HAK - s.tahmin.length} hakkın kaldı · yanlış tahminde ok, devletin hangi yönde kaldığını gösterir</small>`}`;
    ciz();
    const son = el.querySelector('.sb-sonuc'); if (son && s.tahmin.length) son.scrollIntoView({ block: 'nearest' });
    const inp = el.querySelector('input'); if (inp) { inp.addEventListener('input', oneri); inp.addEventListener('keydown', tus); if (!matchMedia('(pointer: coarse)').matches) inp.focus(); }
  }
  function adaylar(q) {
    const t = sade(q); if (!t) return [];
    const kul = new Set(s.tahmin.map(x => x.ad));
    return L().filter(d => !kul.has(d.ad)).map(d => { const a = sade(d.ad), i = a.indexOf(t); return { d, p: i < 0 ? (a.split(' ').some(w => w.startsWith(t.split(' ')[0])) && t.split(' ').every(w => a.includes(w)) ? 50 : -1) : i === 0 ? 0 : a[i - 1] === ' ' ? 10 : 30 }; })
      .filter(x => x.p >= 0).sort((a, b) => a.p - b.p || a.d.ad.localeCompare(b.d.ad, 'tr')).slice(0, 7).map(x => x.d);
  }
  let secili = 0;
  function oneri() {
    const inp = el.querySelector('input'), ul = el.querySelector('.sb-oneri'), A = adaylar(inp.value); secili = 0;
    ul.hidden = !A.length; ul.innerHTML = A.map((d, i) => `<li data-ad="${esc(d.ad)}" class="${i === 0 ? 'on' : ''}">${esc(d.ad)}</li>`).join('');
    const h = el.querySelector('.sb-hata'); if (h) h.remove();
  }
  function uyari(msg) {
    let h = el.querySelector('.sb-hata');
    if (!h) { h = document.createElement('p'); h.className = 'bk-hata sb-hata'; h.setAttribute('role', 'alert'); const g0 = el.querySelector('.sb-gir'); if (g0) g0.after(h); }
    h.textContent = msg;
  }
  function tus(ev) {
    const ul = el.querySelector('.sb-oneri'), li = [...ul.querySelectorAll('li')];
    if (ev.key === 'ArrowDown' || ev.key === 'ArrowUp') { if (!li.length) return; ev.preventDefault(); secili = (secili + (ev.key === 'ArrowDown' ? 1 : -1) + li.length) % li.length; li.forEach((x, i) => x.classList.toggle('on', i === secili)); }
    else if (ev.key === 'Enter') { ev.preventDefault(); if (li[secili]) tahminEt(li[secili].dataset.ad); else uyari('Listeden bir devlet seç (yazmaya başlayınca öneriler çıkar).'); }
    else if (ev.key === 'Escape') kapat();
  }
  function tahminEt(ad) {
    if (s.bitti) return;
    const d = L().find(x => x.ad === ad); if (!d || s.tahmin.some(t => t.ad === ad)) return;
    const dogru = d.ad === s.hedef.ad, mesafe = dogru ? 0 : Math.max(1, km(d.e, s.hedef.e));
    s.tahmin.push({ ad: d.ad, d: mesafe, yon: dogru ? '🎯' : yon(d.e, s.hedef.e) });
    if (!dogru) s.yanlis++;
    if (dogru || s.tahmin.length >= HAK) {
      s.bitti = true; s.kazandi = dogru;
      if (!s.serbest) istYaz();
      else {
        if (dogru) { serbestSeri++; const I = ist(); if (serbestSeri > (I.serRekor || 0)) { I.serRekor = serbestSeri; depoYaz('zy-sinir-ist', I); } }
        else serbestSeri = 0;
      }
      if (dogru && window.ZY && window.ZY.xpEkle) window.ZY.xpEkle(s.serbest ? kademe(serbestSeri).xp : 30, 'sinir');
    }
    if (!s.serbest) depoYaz(kayitAnahtar(s.g), { t: s.tahmin, b: s.bitti, k: s.kazandi });
    goster();
  }
  function istYaz() {
    const I = ist(); I.oyun++; if (s.kazandi) { I.kazan++; I.dag[s.tahmin.length - 1]++; I.seri = I.son === s.g - 1 ? I.seri + 1 : 1; I.enSeri = Math.max(I.enSeri, I.seri); } else I.seri = 0;
    I.son = s.kazandi ? s.g : null; depoYaz('zy-sinir-ist', I);
  }
  function paylasMetni() {
    const sat = s.tahmin.map(t => t.d === 0 ? '🟩 🎯' : `${kare(t.d)} ${t.yon} ${t.d.toLocaleString('tr-TR')} km`);
    return `🗺️ Sınırdan Bil ${s.serbest ? '(serbest)' : '#' + (s.g + 1)} · ${s.kazandi ? s.tahmin.length : 'X'}/${HAK}\n${sat.join('\n')}\n${location.origin}${location.pathname}?oyun=sinir`;
  }
  function tikla(ev) {
    const b = ev.target.closest('[data-sb], .sb-x, .sb-oneri li'); if (!b) return;
    if (b.classList.contains('sb-x')) return kapat();
    if (b.dataset.ad) return tahminEt(b.dataset.ad);
    const k = b.dataset.sb;
    if (k === 'gunluk') return ac();
    if (k === 'tahmin') { const li = el.querySelector('.sb-oneri li.on') || el.querySelector('.sb-oneri li'); if (li) tahminEt(li.dataset.ad); else { const inp = el.querySelector('input'); oneri(); const ilk = el.querySelector('.sb-oneri li'); if (ilk && adaylar(inp.value).length === 1) tahminEt(ilk.dataset.ad); else uyari('Listeden bir devlet seç (yazmaya başlayınca öneriler çıkar).'); } }
    else if (k === 'paylas') { const t = paylasMetni(); (navigator.clipboard ? navigator.clipboard.writeText(t) : Promise.reject()).then(() => { b.textContent = '✓ Kopyalandı'; }, () => { b.textContent = 'Kopyalanamadı'; }); }
    else if (k === 'kure') { const h = s.hedef; kapat(); if (window.ZY) { window.ZY.setView('dunya'); window.ZY.setYear(h.y); } if (window.Dunya) window.Dunya.goTo(h.e[0], h.e[1], 3); }
    else if (k === 'serbest') { const T = L(); let h; do { h = T[Math.floor(Math.random() * T.length)]; } while (s && s.hedef && h.ad === s.hedef.ad); baslat(h, true); }
  }
  async function baslat(hedef, serbest) {
    s = { g: gunNo(), hedef, serbest, tahmin: [], yanlis: 0, bitti: false, kazandi: false, k: null, olcek: null };
    if (!serbest) { try { const o = JSON.parse(localStorage[kayitAnahtar(s.g)] || 'null'); if (o) { s.tahmin = o.t; s.bitti = o.b; s.kazandi = o.k; s.yanlis = o.t.filter(t => t.d !== 0).length; } } catch (e) { } }
    goster();
    const bu = s, k = window.Dunya && await window.Dunya.kayit(hedef.n, hedef.y);
    if (s !== bu) return; s.k = k; s.hata = !k; ciz();
  }
  function ac() {
    if (!el) {
      el = document.createElement('div'); el.id = 'sinirbil'; el.className = 'sinirbil'; el.setAttribute('role', 'dialog'); el.setAttribute('aria-label', 'Sınırdan Bil');
      document.querySelector('.stage').appendChild(el); el.addEventListener('click', tikla);
      window.addEventListener('keydown', ev => { if (ev.key === 'Escape' && el && !el.hidden) kapat(); });
      window.addEventListener('resize', () => { if (el && !el.hidden && s) { s.olcek = null; ciz(); } });
    }
    el.hidden = false; baslat(gununDevleti(gunNo()), false);
  }
  function kapat() { if (el) el.hidden = true; }
  const bugunBitti = () => { try { return !!JSON.parse(localStorage[kayitAnahtar(gunNo())] || 'null')?.b; } catch (e) { return false; } };
  return { ac, kapat, bugunBitti, gunNo };
})();
