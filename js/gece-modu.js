// Gece modu: karanlıkta ekran göz almasın diye kartlar ve menüler koyu "Gece atlası" renklerine geçer, küre de biraz
// koyulaşır (stil: css/stil.css, body[data-gece="1"]). Seçim hatırlanır; hiç seçim yapılmadıysa cihazın açık/koyu
// tercihine uyulur. Düğme: küre düğmelerindeki ay / güneş (#gecemodbtn).
(() => {
  'use strict';
  const ANAHTAR = 'zy-gece', btn = document.getElementById('gecemodbtn');
  const cihaz = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null;
  const kayitli = () => { try { return localStorage.getItem(ANAHTAR); } catch (e) { return null; } };
  function uygula(acik) {
    if (acik) document.body.dataset.gece = '1'; else delete document.body.dataset.gece;
    if (btn) {
      btn.textContent = acik ? '☀️' : '🌙';
      btn.title = acik ? 'Gündüz moduna dön (açık renkler)' : 'Gece modu: karanlıkta gözü yormayan koyu renkler';
      btn.setAttribute('aria-pressed', String(acik));
    }
  }
  const k = kayitli();
  uygula(k === '1' || (k == null && !!cihaz && cihaz.matches));
  if (btn) btn.addEventListener('click', () => {
    const acik = document.body.dataset.gece !== '1';
    try { localStorage.setItem(ANAHTAR, acik ? '1' : '0'); } catch (e) { /* gizli sekme */ }
    uygula(acik);
  });
  // cihazın tercihi değişirse (ör. akşam olunca otomatik koyu mod) ve kullanıcı elle seçim yapmadıysa uy
  if (cihaz && cihaz.addEventListener) cihaz.addEventListener('change', e => { if (kayitli() == null) uygula(e.matches); });
})();
