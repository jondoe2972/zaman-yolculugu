// ℹ️ Hakkında ve Kaynaklar: sitenin ne olduğu, verilerin nereden geldiği ve lisansları.
// Cliopatria sınırları CC BY 4.0 lisanslı: atıf sitede görünür olmalı (kürenin sağ altındaki şerit + bu pencere).
'use strict';
(() => {
  const GH = 'https://github.com/jondoe2972/zaman-yolculugu';
  const a = (href, t) => `<a href="${href}" target="_blank" rel="noopener">${t}</a>`;
  const KAYNAK = [
    ['🗺️', 'Tarihî sınırlar', `${a('https://github.com/Seshat-Global-History-Databank/cliopatria', 'Cliopatria')}, Seshat Global History Databank (MÖ 3400 – MS 2024). Lisans: ${a('https://creativecommons.org/licenses/by/4.0/deed.tr', 'CC BY 4.0')}. Makale: ${a('https://doi.org/10.1038/s41597-025-04516-9', 'Scientific Data, 2025')}. Türkçe devlet adlarının bir kısmı Vikiveri'den eşleştirildi ve elle düzeltildi.`],
    ['🌍', 'Kıyılar, göller ve nehirler', `${a('https://www.naturalearthdata.com/', 'Natural Earth')} 1:50m (kamu malı).`],
    ['📖', 'Ülke, kişi ve yapı bilgileri', `${a('https://www.wikidata.org/', 'Vikiveri')} (CC0) ve ${a('https://tr.wikipedia.org/', 'Vikipedi')} özetleri (${a('https://creativecommons.org/licenses/by-sa/4.0/deed.tr', 'CC BY-SA 4.0')}). Her kartta özetin alındığı maddeye bağlantı var.`],
    ['📷', 'Fotoğraflar', `${a('https://commons.wikimedia.org/', 'Wikimedia Commons')}. Her fotoğrafın altında çekeni ve lisansı yazıyor; yalnızca özgür lisanslı görseller gösterilir.`],
    ['🎵', 'Müzik ve doğa sesleri', `Wikimedia Commons kayıtları (her biri kendi lisansıyla) ve ${a('https://developers.google.com/assistant/tools/sound-library', 'Google Sound Library')}.`],
    ['📚', 'Kitaplar ve makaleler', `Tarihler, olaylar ve sayılar için kullanılan kitapların ve makalelerin tam listesi: ${a(GH + '/blob/main/KAYNAKLAR.md', 'KAYNAKLAR.md')}.`]
  ];
  const html = `<div class="hk">
    <p>Zaman Yolculuğu, dünya tarihini ve doğasını tek bir kürede, yıl yıl gezmek için hazırlanmış ücretsiz bir eğitim sitesidir. Reklam yok, üyelik yok, kişisel veri toplanmaz; ayarların ve keşif defterin yalnızca senin tarayıcında saklanır.</p>
    <h4>Bilgiler nereden geliyor?</h4>
    <ul class="hk-liste">${KAYNAK.map(([ik, b, t]) => `<li><span>${ik}</span><div><b>${b}</b><p>${t}</p></div></li>`).join('')}</ul>
    <h4>Bilmen gerekenler</h4>
    <ul class="hap">
      <li>Eski çağların tarihleri ve sınırları <b>yaklaşıktır</b>; araştırmacılar arasında farklı görüşler olabilir. Sınırlar bir devletin gerçekten denetlediği yeri değil, kabaca etki alanını gösterir.</li>
      <li>"Yaşa" bölümündeki hayatlar, dönemin kaynaklarına dayanan <b>temsilî</b> anlatımlardır; gerçek kişiler değildir.</li>
      <li>Oyunlardaki ipucu çizimleri ve küre simgeleri temsilîdir.</li>
    </ul>
    <h4>Bir hata mı gördün?</h4>
    <p>Yanlış bir tarih, ad ya da sınır gördüysen ${a(GH + '/issues', 'GitHub üzerinden bildir')}; düzeltelim.</p>
    <p class="hk-alt">Kaynak kodu: ${a(GH, 'github.com/jondoe2972/zaman-yolculugu')}</p></div>`;
  function ac() {
    if (!window.ZY || !window.ZY.showModal) return;
    window.ZY.showModal({ ikon: 'ℹ️', title: 'Hakkında ve kaynaklar', sub: 'Bu site nedir, bilgiler nereden geliyor?', tabs: [{ ad: 'ℹ️ Hakkında', html }] });
  }
  window.Hakkinda = { ac };
  document.addEventListener('click', ev => { if (ev.target.closest('[data-hakkinda]')) { ev.preventDefault(); ac(); } });
  if (new URLSearchParams(location.search).get('hakkinda')) setTimeout(ac, 400);
})();
