// ℹ️ Hakkında ve Kaynaklar: sitenin ne olduğu, verilerin nereden geldiği ve lisansları.
// Cliopatria sınırları CC BY 4.0 lisanslı: atıf sitede görünür olmalı (kürenin sağ altındaki şerit + bu pencere).
'use strict';
(() => {
  const GH = 'https://github.com/jondoe2972/zaman-yolculugu';
  const a = (href, t) => `<a href="${href}" target="_blank" rel="noopener">${t}</a>`;
  const KAYNAK = [
    ['🗺️', 'Tarihî sınırlar', `${a('https://github.com/Seshat-Global-History-Databank/cliopatria', 'Cliopatria')}, Seshat Global History Databank (MÖ 3400 – MS 2024). Lisans: ${a('https://creativecommons.org/licenses/by/4.0/deed.tr', 'CC BY 4.0')}. Makale: ${a('https://doi.org/10.1038/s41597-025-04516-9', 'Scientific Data, 2025')}. Türkçe devlet adlarının bir kısmı Vikiveri'den eşleştirildi ve elle düzeltildi.`],
    ['🌍', 'Kıyılar, nehirler, kabartmalı zemin ve okyanus tabanı', `${a('https://www.naturalearthdata.com/', 'Natural Earth')} 1:50m (kamu malı).`],
    ['🧩', 'Simgeler ve emojiler',`${a('https://github.com/googlefonts/noto-emoji', 'Noto Emoji')} · © Google LLC · resimler ${a('https://www.apache.org/licenses/LICENSE-2.0', 'Apache 2.0')}, yazı tipi ${a('https://openfontlicense.org/', 'SIL OFL 1.1')}. Her cihazda aynı görünsün diye haritadaki simgeler ve sayfadaki emojiler sitenin kendi resim dosyalarından çizilir.`],
    ['🐋', 'Göç hayvanı 3B modelleri', `${a('https://poly.pizza/', 'Poly Pizza')} üzerinden: Poly by Google, Google Data Arts Team ve Paul Spooner (${a('https://creativecommons.org/licenses/by/3.0/deed.tr', 'CC BY')}); Quaternius (CC0). İkonlar Blender ile render edildi.`],
    ['📖', 'Ülke, kişi ve yapı bilgileri', `${a('https://www.wikidata.org/', 'Vikiveri')} (CC0) ve ${a('https://tr.wikipedia.org/', 'Vikipedi')} özetleri (${a('https://creativecommons.org/licenses/by-sa/4.0/deed.tr', 'CC BY-SA 4.0')}). Her kartta özetin alındığı maddeye bağlantı var.`],
    ['📷', 'Fotoğraflar', `${a('https://commons.wikimedia.org/', 'Wikimedia Commons')}. Her fotoğrafın altında çekeni ve lisansı yazıyor; yalnızca özgür lisanslı görseller gösterilir.`],
    ['🎵', 'Müzik ve doğa sesleri', `Wikimedia Commons kayıtları (her biri kendi lisansıyla) ve ${a('https://developers.google.com/assistant/tools/sound-library', 'Google Sound Library')}. Antik Çağ müziği: Seikilos Ağıtı, seslendiren Marcus Harvey (${a('https://commons.wikimedia.org/wiki/File:%CE%9F_%CE%95%CF%80%CE%B9%CF%84%CE%AC%CF%86%CE%B9%CE%BF%CF%82_%CF%84%CE%BF%CF%85_%CE%A3%CE%B5%E1%BF%96%CE%BA%CE%B9%CE%BB%CE%BF%CF%85_-_Epitaph_of_Seikilos.ogg', 'Commons')}, ${a('https://creativecommons.org/licenses/by-sa/2.5/deed.tr', 'CC BY-SA 2.5')}). Öteki çağ müzikleri kamu malı ya da CC0; tam liste KAYNAKLAR.md'de.`],
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
  // Zaman çizelgesinin yüksekliği CSS'e bildirilir: atıf şeridi dar ekranda çizelgenin hemen üstünde durur (stil.css, .atif)
  const tl = document.querySelector('.tl');
  if (tl) {
    const olc = () => { const h = Math.round(tl.getBoundingClientRect().height); document.documentElement.style.setProperty('--tl-h', (h || 30) + 'px'); };
    olc(); window.addEventListener('resize', olc); window.addEventListener('load', olc);
    if (window.ResizeObserver) new ResizeObserver(olc).observe(tl);
  }
  document.addEventListener('click', ev => { if (ev.target.closest('[data-hakkinda]')) { ev.preventDefault(); ac(); } });
  if (new URLSearchParams(location.search).get('hakkinda')) setTimeout(ac, 400);
})();
