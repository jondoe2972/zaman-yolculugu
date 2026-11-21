// ⏳ Aynı anda & 🤯 Şaşırt Beni:
// 1) Yıl kartının altında tarihten şaşırtıcı kısa bilgi.
// 2) Keşfet ekranında ve Oyunlar menüsünde tek tık "🤯 Şaşırt Beni" hap bilgi kartı (Haritada Gör + Paylaş + Kaynak).
// Bilgiler data/ayni-anda.js + ayni-anda-2.js'te (453 kaynaklı bilgi). Görülenler localStorage['zy-aa-gor'] içinde saklanır.
'use strict';
window.AyniAnda = (() => {
  const gorTek = new Set();
  const A = (window.AYNI_ANDA || []).filter(x => x && x.k && !gorTek.has(x.k) && gorTek.add(x.k));
  const kart = document.querySelector('.yearcard'); if (!A.length || !kart) return null;
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const ANAHTAR = 'zy-aa-gor';
  let gor; try { gor = new Set(JSON.parse(localStorage[ANAHTAR] || '[]')); } catch (e) { gor = new Set(); }
  const gorKaydet = () => { try { localStorage[ANAHTAR] = JSON.stringify([...gor]); } catch (e) { } };
  const tarih = f => f.d[0] === f.d[1] ? YIL.fmt(f.d[0]) : YIL.aralik(f.d[0], f.d[1]);
  function sec(haric) {
    let aday = A.filter(f => !gor.has(f.k) && f !== haric);
    if (!aday.length) { gor.clear(); aday = A.filter(f => f !== haric); }
    return aday[Math.floor(Math.random() * aday.length)];
  }
  const paylasYazi = x => `🤯 Biliyor muydun? (${tarih(x)})\n${x.k}\n${x.t}\n${location.origin}${location.pathname}?yil=${x.d[0]}`;
  function haritadaGor(x) {
    if (!x || !window.ZY) return;
    const y = x.d[0];
    window.ZY.setView('dunya'); window.ZY.setYear(y);
    if (x.ll && window.Dunya) { window.Dunya.goTo(x.ll[0], x.ll[1], 5); if (window.Dunya.pin) window.Dunya.pin(x.ll[0], x.ll[1], x.k); }
  }

  // ---------- 1. Yıl kartındaki kompakt bilgi ----------
  const btn = document.createElement('button'); btn.className = 'yc-aa'; btn.type = 'button'; btn.setAttribute('aria-expanded', 'false');
  btn.title = 'Tarihten şaşırtıcı bir bilgi. Tıkla, oku.';
  const ac = document.createElement('div'); ac.className = 'aa-kart'; ac.hidden = true; ac.setAttribute('aria-live', 'polite');
  kart.append(btn, ac);
  let f = null, sonEtkilesim = Date.now();
  function goster(yeni) {
    f = yeni; gor.add(f.k); gorKaydet();
    btn.innerHTML = `<i>⏳ Biliyor muydun?</i><span>${esc(f.k)}</span>`;
    btn.classList.remove('aa-yeni'); void btn.offsetWidth; btn.classList.add('aa-yeni');
    if (!ac.hidden) acikCiz();
  }
  function acikCiz() {
    ac.innerHTML = `<small class="aa-tarih">📅 ${tarih(f)}</small><b>${esc(f.k)}</b><p>${esc(f.t)}</p>
      <div class="aa-alt"><button data-aa="git" class="ana" title="Yılı ${tarih(f)} yap${f.ll ? ', küreyi olayın yerine çevir' : ''}">⏳ O zamana git</button><button data-aa="sonraki">↻ Başka</button>${f.w ? `<a href="https://en.wikipedia.org/wiki/${encodeURIComponent(f.w.replace(/ /g, '_'))}" target="_blank" rel="noopener" title="Bilginin kaynağı (İngilizce Vikipedi)">🔎 Kaynak</a>` : ''}<button data-aa="paylas" title="Panoya kopyala">📋</button><button data-aa="kapat" class="aa-x" title="Kapat">✕</button></div>`;
    yukseklik();
  }
  function yukseklik() { const st = kart.parentElement.getBoundingClientRect(), r = ac.getBoundingClientRect(); ac.style.maxHeight = Math.max(120, st.bottom - r.top - 12) + 'px'; }
  window.addEventListener('resize', () => { if (!ac.hidden) yukseklik(); });
  function acKapa(a) { ac.hidden = !a; btn.setAttribute('aria-expanded', a); btn.classList.toggle('on', a); if (a) acikCiz(); }
  btn.addEventListener('click', () => { sonEtkilesim = Date.now(); acKapa(ac.hidden); });
  ac.addEventListener('click', ev => {
    const b = ev.target.closest('[data-aa]'); if (!b) return; sonEtkilesim = Date.now();
    const k = b.dataset.aa;
    if (k === 'kapat') acKapa(false);
    else if (k === 'sonraki') goster(sec(f));
    else if (k === 'git') haritadaGor(f);
    else if (k === 'paylas') {
      (navigator.clipboard ? navigator.clipboard.writeText(paylasYazi(f)) : Promise.reject()).then(() => { b.textContent = '✓'; }, () => { b.textContent = '✗'; });
    }
  });

  // ---------- 2. 🤯 Şaşırt Beni hap kartı ve hızlı düğmesi ----------
  const stage = document.querySelector('.stage');
  let sbEl = null, sf = null;
  if (stage) {
    const sbtn = document.createElement('button');
    sbtn.id = 'sasirtbtn';
    sbtn.className = 'sasirtbtn';
    sbtn.type = 'button';
    sbtn.title = 'Tarihten tek tıkla şaşırtıcı bir bilgi çıkar';
    sbtn.innerHTML = '🤯<span> Şaşırt Beni</span>';
    sbtn.addEventListener('click', () => sasirt(true));
    stage.appendChild(sbtn);
  }

  function sbCiz(anim) {
    if (!sbEl || !sf) return;
    sbEl.innerHTML = `
      <div class="sbk-ust">
        <span class="sbk-roz">🤯 Şaşırt Beni</span>
        <span class="sbk-tar">📅 ${tarih(sf)}</span>
        <button class="sbk-x" title="Kapat" aria-label="Kapat">✕</button>
      </div>
      <div class="sbk-govde${anim ? ' gir' : ''}">
        <h3>${esc(sf.k)}</h3>
        <p>${esc(sf.t)}</p>
      </div>
      <div class="sbk-alt">
        <button data-sbk="git" class="ana">🌍 Haritada Gör</button>
        <button data-sbk="yeni">🎲 Bir Tane Daha</button>
        <button data-sbk="paylas">📋 Paylaş</button>
        ${sf.w ? `<a href="https://en.wikipedia.org/wiki/${encodeURIComponent(sf.w.replace(/ /g, '_'))}" target="_blank" rel="noopener">🔎 Kaynak</a>` : ''}
      </div>`;
  }

  function sasirt(yeni = true) {
    sonEtkilesim = Date.now();
    acKapa(false);
    for (const id of ['sinirbil', 'hayat', 'eski-oyun', 'topraklar', 'hayvan-oyun']) {
      const e = document.getElementById(id); if (e) e.hidden = true;
    }
    if (!sbEl && stage) {
      sbEl = document.createElement('div');
      sbEl.id = 'sasirt';
      sbEl.className = 'sasirt';
      sbEl.setAttribute('role', 'dialog');
      sbEl.setAttribute('aria-label', 'Şaşırt Beni');
      stage.appendChild(sbEl);
      sbEl.addEventListener('click', ev => {
        if (ev.target.closest('.sbk-x')) { sbEl.hidden = true; return; }
        const b = ev.target.closest('[data-sbk]'); if (!b) return;
        sonEtkilesim = Date.now();
        const k = b.dataset.sbk;
        if (k === 'yeni') { sf = sec(sf); gor.add(sf.k); gorKaydet(); sbCiz(true); }
        else if (k === 'git') { sbEl.hidden = true; haritadaGor(sf); }
        else if (k === 'paylas') {
          (navigator.clipboard ? navigator.clipboard.writeText(paylasYazi(sf)) : Promise.reject()).then(
            () => { b.textContent = '✓ Kopyalandı'; setTimeout(() => { b.textContent = '📋 Paylaş'; }, 1800); },
            () => { b.textContent = 'Kopyalanamadı'; }
          );
        }
      });
      window.addEventListener('keydown', ev => { if (ev.key === 'Escape' && sbEl && !sbEl.hidden) sbEl.hidden = true; });
    }
    if (yeni || !sf) { sf = sec(sf || f); gor.add(sf.k); gorKaydet(); }
    if (sbEl) { sbEl.hidden = false; sbCiz(true); }
  }

  goster(sec());
  setInterval(() => { if (ac.hidden && (!sbEl || sbEl.hidden) && Date.now() - sonEtkilesim > 45000 && !document.hidden) goster(sec(f)); }, 45000);
  return { ac: () => sasirt(true), sasirt, kapat: () => { if (sbEl) sbEl.hidden = true; }, adet: A.length };
})();
