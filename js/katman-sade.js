// Katmanlar menüsünü sadeleştirir: her atlasta önce 7–8 "öne çıkan" katman, gerisi "＋ N katman daha" altında.
// Açık (işaretli) bir katman, menü kısa görünümdeyken de görünür kalır. Seçim tarayıcıda hatırlanır.
'use strict';
(() => {
  const ONE_CIKAN = {
    tarih: ['sinir', 'yapi', 'donum', 'ticaret', 'din', 'megakent', 'goc', 'savas'],
    doga: ['cografya', 'nehir', 'iklim', 'akinti', 'volkan', 'hayvan', 'tukenen', 'hayvangoc']
  };
  const ANAHTAR = 'zy-kp-tum';
  const pop = document.getElementById('katman'); if (!pop) return;
  let tum = false; try { tum = localStorage.getItem(ANAHTAR) === '1'; } catch (e) { /* gizli mod */ }
  const gruplar = [...pop.querySelectorAll('.kp-grup[data-kpgrup]')];
  for (const g of gruplar) {
    const one = new Set(ONE_CIKAN[g.dataset.kpgrup] || []);
    let ek = 0;
    for (const el of g.children) {
      const inp = el.querySelector && el.querySelector('input[data-kat]');
      // öne çıkmayan katmanlar, olay başlığı ve olay yılı aralığı "ek" bölümde
      if (inp ? !one.has(inp.dataset.kat) : (el.classList.contains('kp-ayir') || el.classList.contains('kp-aralik'))) { el.classList.add('kp-ek'); if (inp) ek++; }
    }
    if (!ek) continue;
    const b = document.createElement('button');
    b.type = 'button'; b.className = 'kp-daha'; b.dataset.ek = ek;
    const derin = g.querySelector('#derin-ac');
    g.insertBefore(b, derin || null);
  }
  function guncelle() {
    pop.classList.toggle('kp-tum', tum);
    pop.querySelectorAll('.kp-ek').forEach(el => { const i = el.querySelector('input'); el.classList.toggle('kp-acik', !!(i && i.checked)); });
    pop.querySelectorAll('.kp-daha').forEach(b => { b.textContent = tum ? '− Daha az göster' : `＋ ${b.dataset.ek} katman daha`; b.setAttribute('aria-expanded', String(tum)); });
  }
  pop.addEventListener('click', ev => {
    const b = ev.target.closest('.kp-daha'); if (!b) { setTimeout(guncelle, 0); return; } // Hepsini Aç / Temizle vb.
    ev.stopPropagation(); tum = !tum;
    try { localStorage.setItem(ANAHTAR, tum ? '1' : '0'); } catch (e) { /* */ }
    guncelle();
  });
  // katmanlar başka yerden de açılıp kapanabiliyor (Hepsini Aç/Temizle, atlas geçişi): değişince ve menü açılınca tazele
  pop.addEventListener('change', guncelle);
  new MutationObserver(guncelle).observe(pop, { attributes: true, attributeFilter: ['hidden'] });
  guncelle();
})();
