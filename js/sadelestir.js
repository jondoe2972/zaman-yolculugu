// Arayüz sadeleştirmeleri (uygulama.js'e dokunmadan):
// 1) 🎨 Renk teması üst çubuktan kalktı; seçenekler 🔊 Ses penceresinin altında ("Ses ve görünüm").
// 2) Bölge modunda (ör. Mısır) yıl kartının üstünde "hangi bölgedesin + Tüm Dünya'ya dön" şeridi:
//    eskiden bölge modunda olduğunu ya da nasıl geri döneceğini gösteren hiçbir şey yoktu.
'use strict';
(() => {
  const $ = q => document.querySelector(q);
  // 1) tema seçimi ses penceresine
  const ses = $('#sespop'), tema = $('#temapop');
  if (ses && tema) {
    tema.classList.add('tema-gomulu');
    ses.appendChild(tema);
    tema.hidden = false;
    const sb = $('#sesbtn'); if (sb) { sb.title = 'Ayarlar: ses, müzik, renk teması ve küre görünümü'; sb.setAttribute('aria-label', 'Ayarlar'); }
    ses.setAttribute('aria-label', 'Ayarlar: ses, müzik, renk teması ve küre görünümü');
  }
  // 2) bölge modu şeridi
  const B = window.BOLGE;
  const kart = $('.yearcard');
  if (B && !B.dunya && kart) {
    const s = document.createElement('div');
    s.className = 'yc-bolge';
    s.innerHTML = `<span>${B.ikon || '📍'} <b>${B.ad}</b> bölgesi</span><button type="button" class="yc-dunya" title="Bütün uygarlıkları tek kürede gör">🌍 Tüm Dünya ›</button>`;
    kart.insertBefore(s, kart.firstChild);
    s.querySelector('.yc-dunya').addEventListener('click', ev => {
      ev.stopPropagation();
      const y = window.ZY ? Math.round(window.ZY.Y) : null;
      location.href = location.pathname + '?bolge=dunya' + (y != null ? '&yil=' + y : '');
    });
  }
})();
