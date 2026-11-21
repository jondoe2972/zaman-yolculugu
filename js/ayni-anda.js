// ⏳ Aynı anda: yıl kartının altında seçili döneme ait kısa, şaşırtıcı bir bilgi. Tıklayınca açılır.
// Bilgiler data/ayni-anda.js'te. Görülenler tarayıcıda saklanır ve tekrar gösterilmez;
// bir dönemin bütün bilgileri görülünce o dönem baştan başlar.
'use strict';
window.AyniAnda = (() => {
  const A = window.AYNI_ANDA || [], kart = document.querySelector('.yearcard'); if (!A.length || !kart) return null;
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const ANAHTAR = 'zy-aa-gor';
  let gor; try { gor = new Set(JSON.parse(localStorage[ANAHTAR] || '[]')); } catch (e) { gor = new Set(); }
  const gorKaydet = () => { try { localStorage[ANAHTAR] = JSON.stringify([...gor]); } catch (e) { } };
  // dönem genişliği: eski çağlarda bilgiler seyrek, yakın çağda sık
  const pay = y => y > 2000 ? 400 : y > 500 ? 150 : y > 0 ? 60 : y > -1000 ? 50 : y > -1500 ? 25 : y > -1800 ? 15 : 6;
  const uzak = (f, y) => y <= f.d[0] && y >= f.d[1] ? 0 : Math.min(Math.abs(y - f.d[0]), Math.abs(y - f.d[1]));
  function donem(y) { const p = pay(y); let L = A.filter(f => uzak(f, y) <= p); if (!L.length) { const m = Math.min(...A.map(f => uzak(f, y))); L = A.filter(f => uzak(f, y) <= m + p); } return L; }
  function sec(y, haric) {
    const L = donem(y); let aday = L.filter(f => !gor.has(f.k) && f !== haric);
    if (!aday.length) { for (const f of L) gor.delete(f.k); aday = L.filter(f => f !== haric); if (!aday.length) aday = L; }
    const m = Math.min(...aday.map(f => uzak(f, y))), en = aday.filter(f => uzak(f, y) <= m + pay(y) / 3);
    return en[Math.floor(Math.random() * en.length)];
  }

  const btn = document.createElement('button'); btn.className = 'yc-aa'; btn.type = 'button'; btn.setAttribute('aria-expanded', 'false');
  btn.title = 'Bu dönemde dünyada neler oluyordu? Tıkla, oku.';
  const ac = document.createElement('div'); ac.className = 'aa-kart'; ac.hidden = true; ac.setAttribute('aria-live', 'polite');
  kart.append(btn, ac);
  let f = null, yGos = null, yBek = null, bekle = null;
  function goster(yeni) {
    f = yeni; gor.add(f.k); gorKaydet();
    btn.innerHTML = `<i>⏳ Aynı anda</i><span>${esc(f.k)}</span>`;
    btn.classList.remove('aa-yeni'); void btn.offsetWidth; btn.classList.add('aa-yeni');
    if (!ac.hidden) acikCiz();
  }
  function acikCiz() {
    const y = Math.round(window.ZY ? window.ZY.Y : 0), L = donem(y), kalan = L.filter(x => !gor.has(x.k)).length;
    ac.innerHTML = `<b>${esc(f.k)}</b><p>${esc(f.t)}</p>
      <div class="aa-alt"><button data-aa="sonraki" class="ana">↻ Başka bilgi</button>${f.w ? `<a href="https://en.wikipedia.org/wiki/${encodeURIComponent(f.w.replace(/ /g, '_'))}" target="_blank" rel="noopener" title="Bilginin kaynağı (İngilizce Vikipedi)">🔎 Kaynak</a>` : ''}<button data-aa="paylas">📋 Paylaş</button><button data-aa="kapat" class="aa-x" title="Kapat">✕</button></div>
      <small>${kalan ? `Bu dönemden ${kalan} bilgi daha var` : 'Bu dönemin bütün bilgilerini gördün 🎉'}</small>`;
    yukseklik();
  }
  // kart sahnenin altından taşmasın: kalan yüksekliğe sığdır, gerekirse kaydır
  function yukseklik() { const st = kart.parentElement.getBoundingClientRect(), r = ac.getBoundingClientRect(); ac.style.maxHeight = Math.max(120, st.bottom - r.top - 12) + 'px'; }
  window.addEventListener('resize', () => { if (!ac.hidden) yukseklik(); });
  function acKapa(a) { ac.hidden = !a; btn.setAttribute('aria-expanded', a); btn.classList.toggle('on', a); if (a) acikCiz(); }
  btn.addEventListener('click', () => acKapa(ac.hidden));
  ac.addEventListener('click', ev => {
    const b = ev.target.closest('[data-aa]'); if (!b) return;
    const k = b.dataset.aa, y = Math.round(window.ZY ? window.ZY.Y : 0);
    if (k === 'kapat') acKapa(false);
    else if (k === 'sonraki') goster(sec(y, f));
    else if (k === 'paylas') {
      const t = `⏳ Aynı anda (${YIL.fmt(y)}): ${f.k}\n${f.t}\n${location.origin}${location.pathname}?yil=${y}`;
      (navigator.clipboard ? navigator.clipboard.writeText(t) : Promise.reject()).then(() => { b.textContent = '✓ Kopyalandı'; }, () => { b.textContent = 'Kopyalanamadı'; });
    }
  });
  // yıl değişince: yeni yıl durunca, bilgi artık o döneme ait değilse yenisini göster
  setInterval(() => {
    if (!window.ZY) return; const y = Math.round(window.ZY.Y);
    if (y === yGos || y === yBek) return;
    yBek = y; clearTimeout(bekle); bekle = setTimeout(() => { yBek = null; yGos = y; if (!f || uzak(f, y) > pay(y)) goster(sec(y)); else if (!ac.hidden) acikCiz(); }, f ? 700 : 0);
  }, 400);
  return { ac: () => { if (!f && window.ZY) goster(sec(Math.round(window.ZY.Y))); acKapa(true); }, adet: A.length };
})();
