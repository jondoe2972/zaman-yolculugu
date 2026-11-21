// ⏳ Aynı anda: yıl kartının altında tarihin herhangi bir döneminden kısa, şaşırtıcı bir bilgi. Tıklayınca açılır.
// "O zamana git" seçili yılı bilginin yılına alır ve küreyi olayın geçtiği yere çevirir.
// Bilgiler data/ayni-anda.js'te. Görülenler tarayıcıda saklanır ve tekrar gösterilmez; hepsi görülünce baştan başlar.
'use strict';
window.AyniAnda = (() => {
  const A = window.AYNI_ANDA || [], kart = document.querySelector('.yearcard'); if (!A.length || !kart) return null;
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
    const kalan = A.filter(x => !gor.has(x.k)).length;
    ac.innerHTML = `<small class="aa-tarih">📅 ${tarih(f)}</small><b>${esc(f.k)}</b><p>${esc(f.t)}</p>
      <div class="aa-alt"><button data-aa="git" class="ana" title="Yılı ${tarih(f)} yap${f.ll ? ', küreyi olayın yerine çevir' : ''}">⏳ O zamana git</button><button data-aa="sonraki">↻ Başka</button>${f.w ? `<a href="https://en.wikipedia.org/wiki/${encodeURIComponent(f.w.replace(/ /g, '_'))}" target="_blank" rel="noopener" title="Bilginin kaynağı (İngilizce Vikipedi)">🔎 Kaynak</a>` : ''}<button data-aa="paylas" title="Panoya kopyala">📋</button><button data-aa="kapat" class="aa-x" title="Kapat">✕</button></div>
      <small>${A.length} bilgiden ${A.length - kalan} tanesini gördün</small>`;
    yukseklik();
  }
  // kart sahnenin altından taşmasın: kalan yüksekliğe sığdır, gerekirse kaydır
  function yukseklik() { const st = kart.parentElement.getBoundingClientRect(), r = ac.getBoundingClientRect(); ac.style.maxHeight = Math.max(120, st.bottom - r.top - 12) + 'px'; }
  window.addEventListener('resize', () => { if (!ac.hidden) yukseklik(); });
  function acKapa(a) { ac.hidden = !a; btn.setAttribute('aria-expanded', a); btn.classList.toggle('on', a); if (a) acikCiz(); }
  function git() {
    const y = f.d[0]; if (!window.ZY) return;
    window.ZY.setView('dunya'); window.ZY.setYear(y);
    if (f.ll && window.Dunya) { window.Dunya.goTo(f.ll[0], f.ll[1], 5); if (window.Dunya.pin) window.Dunya.pin(f.ll[0], f.ll[1], f.k); }
  }
  btn.addEventListener('click', () => { sonEtkilesim = Date.now(); acKapa(ac.hidden); });
  ac.addEventListener('click', ev => {
    const b = ev.target.closest('[data-aa]'); if (!b) return; sonEtkilesim = Date.now();
    const k = b.dataset.aa;
    if (k === 'kapat') acKapa(false);
    else if (k === 'sonraki') goster(sec(f));
    else if (k === 'git') git();
    else if (k === 'paylas') {
      const t = `⏳ Biliyor muydun? (${tarih(f)}) ${f.k}\n${f.t}\n${location.origin}${location.pathname}?yil=${f.d[0]}`;
      (navigator.clipboard ? navigator.clipboard.writeText(t) : Promise.reject()).then(() => { b.textContent = '✓'; }, () => { b.textContent = '✗'; });
    }
  });
  goster(sec());
  // kart kapalıyken başlık arada bir yenilenir; kullanıcı bir şeyle uğraşıyorsa dokunulmaz
  setInterval(() => { if (ac.hidden && Date.now() - sonEtkilesim > 45000 && !document.hidden) goster(sec(f)); }, 45000);
  return { ac: () => { acKapa(true); }, adet: A.length };
})();
