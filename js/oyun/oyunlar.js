// 🎮 Oyunlar menüsü: bütün oyunlar tek düğmenin altında toplanır (🎭 Ben kimim?, 🗺️ Sınırdan Bil, ⏳ Biliyor muydun?).
// Yeni oyun eklemek: OYUNLAR dizisine bir satır ve js/oyun/ altına oyunun dosyası.
'use strict';
(() => {
  const btn = document.querySelector('[data-mod="oyun"]'); if (!btn) return;
  const DUNYA = !!(window.BOLGE && window.BOLGE.dunya);
  const OYUNLAR = [
    { id: 'dog', ikon: '🎭', ad: 'Ben kimim?', alt: 'Ünlü biri olarak doğ; hayatından ipuçlarıyla kim olduğunu bil', yeni: true, ac: () => { if (!DUNYA) { location.href = location.pathname + '?dog=1'; return; } if (window.Hayat) window.Hayat.basla(); } },
    { id: 'sinir', ikon: '🗺️', ad: 'Sınırdan Bil', alt: () => window.SinirBil && window.SinirBil.bugunBitti() ? '✓ Bugünkü bulmaca çözüldü · serbest oyna' : 'Günlük bulmaca: sınırı gör, devleti bil', yeni: true, ac: () => window.SinirBil && window.SinirBil.ac() },
    { id: 'aa', ikon: '⏳', ad: 'Biliyor muydun?', alt: `Tarihten ${window.AYNI_ANDA ? window.AYNI_ANDA.length : 'yüzlerce'} şaşırtıcı bilgi; tek tıkla o zamana git`, ac: () => window.AyniAnda && window.AyniAnda.ac() }
  ];
  const pop = document.createElement('div'); pop.className = 'oyunpop'; pop.hidden = true; pop.setAttribute('role', 'menu');
  document.body.appendChild(pop);
  function ciz() {
    pop.innerHTML = '<b class="op-bas">🎮 Oyunlar</b>' + OYUNLAR.map(o => `<button data-oyun="${o.id}" role="menuitem"><span class="op-ik">${o.ikon}</span><span><b>${o.ad}${o.yeni ? ' <i>yeni</i>' : ''}</b><small>${typeof o.alt === 'function' ? o.alt() : o.alt}</small></span></button>`).join('');
  }
  function konum() { const r = btn.getBoundingClientRect(); pop.style.top = (r.bottom + 6) + 'px'; pop.style.left = Math.max(8, Math.min(window.innerWidth - pop.offsetWidth - 8, r.left + r.width / 2 - pop.offsetWidth / 2)) + 'px'; }
  function goster(ac) { if (ac) { ciz(); pop.hidden = false; konum(); } else pop.hidden = true; btn.classList.toggle('on', ac); btn.setAttribute('aria-expanded', ac); }
  btn.addEventListener('click', ev => { ev.stopPropagation(); goster(pop.hidden); });
  pop.addEventListener('click', ev => { const b = ev.target.closest('[data-oyun]'); if (!b) return; goster(false); const o = OYUNLAR.find(x => x.id === b.dataset.oyun); for (const id of ['sinirbil', 'hayat']) { const e = document.getElementById(id); if (e && id !== { dog: 'hayat', sinir: 'sinirbil' }[o.id]) e.hidden = true; } o.ac(); });
  document.addEventListener('click', ev => { if (!pop.hidden && !pop.contains(ev.target)) goster(false); });
  document.addEventListener('keydown', ev => { if (ev.key === 'Escape') goster(false); });
  window.addEventListener('resize', () => { if (!pop.hidden) konum(); });
  if (new URLSearchParams(location.search).get('oyun') === 'sinir') setTimeout(() => window.SinirBil && window.SinirBil.ac(), 600);
})();
