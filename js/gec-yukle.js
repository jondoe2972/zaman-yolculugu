// Geç yükleme: açılışta gerekmeyen büyük veri dosyaları (Yaşa'nın insan, hayvan, bitki ve mikrop hayatları, ~400 KB)
// sayfayı bekletmesin. Küre açıldıktan birkaç saniye sonra arka planda yüklenir; Yaşa daha önce açılırsa hemen yüklenir.
// Dosyalar paralel iner ama yazıldıkları sırayla çalışır (async = false): ek dosyalar ana dosyaya ekleme yapıyor.
'use strict';
window.GecYukle = (() => {
  const PAKET = {
    yasa: ['data/yasam.js?v=1', 'data/yasam-asya.js?v=1', 'data/yasam-amerika.js?v=1',
      'data/yasam-doga.js?v=5', 'data/yasam-doga-ek.js?v=3', 'data/yasam-doga-ek2.js?v=2', 'data/yasam-doga-antik.js?v=2']
  };
  const vaat = {}, hazir = {};
  const betik = src => new Promise((ok, hata) => {
    const s = document.createElement('script'); s.src = src; s.async = false;
    s.onload = ok; s.onerror = () => hata(new Error(src + ' yüklenemedi'));
    document.head.appendChild(s);
  });
  function yukle(ad) {
    if (!vaat[ad]) {
      vaat[ad] = Promise.all(PAKET[ad].map(betik)).then(() => { hazir[ad] = true; window.dispatchEvent(new Event('gecyukle:' + ad)); })
        .catch(e => { delete vaat[ad]; throw e; }); // bağlantı koptuysa bir sonraki denemede yeniden dener
    }
    return vaat[ad];
  }
  // sayfa yüklendikten sonra boşta kalınca arka planda hazırla
  window.addEventListener('load', () => setTimeout(() => {
    const is = () => yukle('yasa').catch(() => {});
    if ('requestIdleCallback' in window) requestIdleCallback(is, { timeout: 6000 }); else is();
  }, 2500));
  return { yukle, hazir: ad => !!hazir[ad] };
})();
