// Güney Amerika.
// Yıl: MÖ pozitif, MS negatif. Sahne (wx): kuzeyden And Dağları boyunca güneye, sonra Atlas kıyısına
//   Bogotá 600 · Quito 1000 · Moche 1250 · Chan Chan 1500 · Caral 1800 · Chavín 2000 · Lima 1900 · Nazca 2300 · Cusco 2800
//   Machu Picchu 3000 · Tiwanaku 3300 · Potosí 3700 · Santiago 4700 · Buenos Aires 5600 · São Paulo 6600 · Rio 7000 · Salvador 7500
// Kaynaklar: Moseley, "The Incas and Their Ancestors" (2001); Shady, Caral kazı raporları; MacQuarrie, "The Last Days of the Incas" (2007);
//   Lynch, "Simón Bolívar" (2006); Skidmore & Smith, "Modern Latin America" (2014); Fausto, "A Concise History of Brazil" (2014).
(() => {
  window.PLACES = window.PLACES || [];

  // ================= 1. CARAL'DAN CHİMÚ'YA =================
  window.PLACES.push({
    id: 'guneyamerika-antik', sira: 1, kisa: 'Caral, Nazca ve Tiwanaku', aralikAd: 'MÖ 3000 – MS 1438',
    baslik: 'Caral piramitleri · Chavín · Nazca çizgileri · Moche · Tiwanaku · Chan Chan',
    ulkeAlt: 'Amerika\'nın en eski şehri Caral\'dan And uygarlıklarına ve Chimú krallığına (MÖ 3000 – MS 1438)',
    from: 3000, to: -1438, start: 2600,
    not: 'And uygarlıklarının yazısı yoktu; tarihler arkeolojiye (radyokarbon) dayanır.', baskent: 'Caral, Chavín de Huántar, Moche, Tiwanaku, Huari, Chan Chan',
    sahne: { kizak: false, araba: false, katipYok: true, giyim: 'antik' },
    dynasties: [{ from: 3000, to: 1800, ad: 'Norte Chico (Caral)', renk: '#8a6a3a' }, { from: 1800, to: 200, ad: 'Chavín ve erken kültürler', renk: '#5a6a4a' }, { from: 200, to: -600, ad: 'Nazca ve Moche', renk: '#a8542e' }, { from: -600, to: -1000, ad: 'Tiwanaku ve Wari', renk: '#5a4a7a' }, { from: -1000, to: -1438, ad: 'Chimú ve bölgesel krallıklar', renk: '#2a6a7a' }],
    rulers: [
      { from: 3000, to: 1800, ad: 'Caral\'ın önderleri', kisa: '?', kim: 'Peru kıyısında Amerika\'nın bilinen en eski şehri: piramitler ve batık meydanlar. Silah izi neredeyse yok.' },
      { from: 1800, to: 900, ad: 'Erken törensel merkezler', kisa: '?', kim: 'U biçimli tapınaklar; patates, kinoa ve pamuk tarımı; lama ve alpaka evcilleştirildi.' },
      { from: 900, to: 200, ad: 'Chavín rahipleri', kisa: 'Chavín', kim: 'Chavín de Huántar\'daki yeraltı galerileri ve jaguar-yılan tanrıları bütün And bölgesine yayıldı.' },
      { from: 200, to: -600, ad: 'Moche lordları (Sipan Lordu) ve Nazca toplulukları', kisa: 'Sipan Lordu', kim: 'Kuzeyde Moche dev kerpiç piramitler ve portre çömlekleri yaptı; güneyde Nazca çölü dev çizgilerle süslendi.' },
      { from: -600, to: -1000, ad: 'Tiwanaku ve Wari yöneticileri', kisa: 'Tiwanaku', kim: 'Titicaca Gölü kıyısında Tiwanaku, Ayacucho\'da Wari: And\'ın ilk "imparatorlukları".' },
      { from: -1000, to: -1438, ad: 'Chimú kralları ve bölgesel krallıklar', kisa: 'Chimú', kim: 'Kıyıda Chimú krallığı Chan Chan\'ı kurdu; dağlarda Cusco çevresinde İnkalar küçük bir krallıktı.' }
    ],
    eras: [
      { from: 3000, to: 900, puan: { eko: 3, ordu: 1, istikrar: 4 }, baskent: 'Caral',
        gundem: 'Mısır\'da piramitler yükselirken Peru\'da Caral\'ın piramitleri yapılıyordu. Kıyı halkı balık, iç kesim pamuk yetiştirip takas etti. Kayıt tutmak için düğümlü ipler (kipu) kullanılmaya başlandı. Andlarda patates ve lama evcilleştirildi.',
        savas: 'Caral\'da sur ya da silah izi neredeyse yok: barışçıl bir toplum olabilir.',
        ekonomi: 'Balık ve pamuk takası; balık ağları için pamuk.',
        din: 'Batık dairesel meydanlarda törenler; müzik (kemikten flütler).',
        yasam: 'Taş ve kerpiç evler; kinoa ve fasulye.',
        bilgi: 'Caral\'da 32 kemik flüt bulundu: Amerika\'nın en eski müzik aletlerinden.' },
      { from: 900, to: -600, puan: { eko: 4, ordu: 3, istikrar: 3 }, baskent: 'Chavín de Huántar, Moche',
        gundem: 'Chavín\'in dinî etkisi Andlara yayıldı. Kuzeyde Moche krallığı sulama kanalları ve dev kerpiç piramitlerle zenginleşti; Sipan Lordu\'nun mezarı altın ve gümüşle doluydu. Güneyde Nazca halkı çöle yüzlerce dev çizgi ve hayvan figürü çizdi.',
        savas: 'Moche savaşçıları ve esir kurban törenleri.',
        ekonomi: 'Sulu tarım; Nazca\'da yeraltı su kanalları (puquio).',
        din: 'Moche\'nin Kesen Tanrısı; Nazca\'nın yağmur ve bereket törenleri.',
        yasam: 'Moche portre çömlekleri gerçek yüzleri gösterir.',
        bilgi: 'Nazca çizgilerinin bazıları 300 metreden uzun; tam olarak ancak havadan görülebiliyor.' },
      { from: -600, to: -1000, puan: { eko: 4, ordu: 4, istikrar: 3 }, baskent: 'Tiwanaku, Huari',
        gundem: 'Titicaca Gölü kıyısında, 3.800 metre yükseklikte Tiwanaku taş kapıları ve teraslarıyla bir dinî başkent oldu. Wari yollar ve yönetim merkezleri kurdu; İnka İmparatorluğu\'nun öncüsü sayılır.',
        savas: 'Wari\'nin askeri yerleşimleri.',
        ekonomi: 'Yükseltilmiş tarlalar (suka kollus) dondan korunmuş tarım sağladı.',
        din: 'Güneş Kapısı\'ndaki asalı tanrı.',
        yasam: 'Kurutulmuş patates (chuño) yıllarca saklanabiliyordu.',
        bilgi: 'Tiwanaku taşları metal kenetlerle birleştirildi: erimiş bakır taş oyuklara döküldü.' },
      { from: -1000, to: -1438, puan: { eko: 4, ordu: 3, istikrar: 3 }, baskent: 'Chan Chan, Cusco',
        gundem: 'Chimú krallığı Peru kıyısında Chan Chan\'ı kurdu: Amerika\'nın en büyük kerpiç şehri. Andlarda küçük İnka krallığı Cusco çevresinde güçleniyor. Kuzeyde Muisca halkı altın işçiliğiyle ünlü (El Dorado efsanesinin kaynağı).',
        savas: 'Chimú\'nun kıyı fetihleri; İnka ile Chanka savaşı (1438).',
        ekonomi: 'Altın ve gümüş işçiliği; balıkçılık ve sulama.',
        din: 'Chimú\'da Ay tanrısı; Muisca\'da Guatavita gölüne altın sunular.',
        yasam: 'Chan Chan\'ın duvarlarında balık ve kuş kabartmaları.',
        bilgi: '"El Dorado" (Altın Adam) efsanesi, yeni Muisca önderinin bedeni altın tozuyla kaplanıp Guatavita gölüne dalmasından doğdu.' }
    ],
    nufus: [[3000, 0.3], [1000, 1], [-1, 4], [-600, 6], [-1000, 8], [-1438, 10]],
    nufusNot: 'Bütün Güney Amerika için çok kaba tahminler.',
    dunyaOzet: { eko: 'Güney Amerika dünyanın geri kalanından bağımsız gelişti; patates, domates, kinoa ve kakao burada.', askeri: 'Sapan, topuz, bola; at ve demir yok.' },
    events: [
      { y: 2600, t: 'Caral\'ın büyük piramidi', k: 'm' }, { y: 1800, t: 'Caral terk ediliyor', k: 'm' }, { y: 900, t: 'Chavín de Huántar', k: 'm' }, { y: 100, t: 'Nazca çizgileri', k: 'm' },
      { y: -250, t: 'Sipan Lordu', k: 'm' }, { y: -450, t: 'Huaca del Sol', k: 'm' }, { y: -600, t: 'Tiwanaku ve Wari', k: 'm' }, { y: -900, t: 'Chan Chan kuruldu', k: 'm' },
      { y: -1000, t: 'Tiwanaku çöküyor', k: 'm' }, { y: -1200, t: 'İnkalar Cusco\'da (geleneğe göre)', k: 'm' }, { y: -1438, t: 'İnkalar Chankaları yendi', k: 'm' },
      { y: 2560, t: 'Büyük Piramit', k: 'w' }, { y: -476, t: 'Batı Roma\'nın sonu', k: 'w' }, { y: -1206, t: 'Cengiz Han', k: 'w' }
    ],
    world: [{ from: 3100, to: 1069, yer: 'Mısır', t: 'Firavunlar.' }, { from: 1200, to: -900, yer: 'Mezoamerika', t: 'Olmekler ve Mayalar.' }, { from: 27, to: -476, yer: 'Roma', t: 'Roma İmparatorluğu.' }],
    sites: [{ ad: 'MUİSCA (BOGOTÁ)', wx: 600 }, { ad: 'MOCHE', wx: 1250 }, { ad: 'SİPAN', wx: 1100 }, { ad: 'CHAN CHAN', wx: 1500 }, { ad: 'CARAL', wx: 1800 }, { ad: 'CHAVÍN', wx: 2000 }, { ad: 'NAZCA', wx: 2300 }, { ad: 'HUARİ', wx: 2500 }, { ad: 'TİWANAKU', wx: 3300 }],
    cliffs: [{ wx: 2700, w: 900, h: 150, peak: 0.5 }],
    monuments: [
      { id: 'caral', ad: 'Caral: Büyük Piramit', yer: 'Supe vadisi, Peru', wx: 1800, type: 'step', b: 150, h: 28, start: 2600, end: 2500, vol: 7e4, ruin: 1800 },
      { id: 'chavin', ad: 'Chavín de Huántar', yer: 'Ancash, Peru', wx: 2000, type: 'terrace', b: 90, h: 16, start: 900, end: 800, vol: 4e4, ruin: 200 },
      { id: 'huacadelsol', ad: 'Moche: Huaca del Sol', yer: 'Trujillo, Peru', wx: 1250, type: 'step', b: 160, h: 41, start: -100, end: -450, vol: 1.2e5, ruin: -850 },
      { id: 'tiwanaku', ad: 'Tiwanaku: Akapana ve Güneş Kapısı', yer: 'Bolivya', wx: 3300, type: 'step', b: 200, h: 18, start: -500, end: -600, vol: 8e4, ruin: -1000 },
      { id: 'chanchan', ad: 'Chan Chan', yer: 'Trujillo, Peru', wx: 1500, type: 'city', wall: true, b: 320, n: 28, hk: 0.26, start: -900, end: -1100, vol: 9e4, ruin: -1470 }
    ],
    hizli: [{ ad: 'Caral', y: 2600 }, { ad: 'Chavín', y: 900 }, { ad: 'Nazca', y: 100 }, { ad: 'Sipan', y: -250 }, { ad: 'Moche', y: -450 }, { ad: 'Tiwanaku', y: -700 }, { ad: 'Chan Chan', y: -1200 }],
    bilgi: {
      caral: { ikon: '🔺', yaptiran: 'Norte Chico halkı', donem: 'MÖ ~2600', mimar: '—', sure: '—', neden: 'Tören ve yönetim merkezi.', onem: 'Amerika\'nın bilinen en eski şehri; Mısır piramitleriyle aynı çağda.', teknik: [['Büyük Piramit', '~150 × 160 m, ~28 m']], nasil: 'Taş duvarlar ve "şikra" denilen taş dolu sazdan torbalar: depreme dayanıklı dolgu.', bugun: 'UNESCO Dünya Mirası (2009).', ilginc: 'Taş dolu saz torbalar depremde esneyerek yapıyı ayakta tuttu: 4.500 yıllık bir deprem teknolojisi.' },
      chavin: { ikon: '🐆', yaptiran: 'Chavín kültürü', donem: 'MÖ ~900-200', mimar: '—', sure: '—', neden: 'Hac merkezi ve kehanet tapınağı.', onem: 'And dünyasının ilk büyük dinî merkezi.', teknik: [['Lanzón', '4,5 m\'lik oyma taş tanrı']], nasil: 'Taş tapınağın altında labirent gibi dar galeriler; su kanalları gürültüyle yankılanıyordu.', bugun: 'UNESCO Dünya Mirası (1985).', ilginc: 'Rahiplerin galerilerde deniz kabuğu borular (pututu) çalarak ürkütücü sesler çıkardığı düşünülüyor.' },
      huacadelsol: { ikon: '☀️', yaptiran: 'Moche krallığı', donem: 'MS ~100-450', mimar: '—', sure: 'Birkaç yüzyıl', neden: 'Moche başkentinin yönetim ve tören yapısı.', onem: 'Amerika\'nın en büyük kerpiç yapılarından.', teknik: [['Kerpiç', '~140 milyon'], ['Yükseklik', '~41 m']], nasil: 'Kerpiçlerde farklı işaretler var: her topluluk kendi payını yapıp işaretliyordu.', bugun: 'Yarısı 17. yüzyılda altın arayan İspanyollar tarafından nehir saptırılarak yıkıldı.', ilginc: 'İspanyollar yapının içinde altın aramak için Moche nehrinin yatağını değiştirdi.' },
      tiwanaku: { ikon: '🚪', yaptiran: 'Tiwanaku halkı', donem: 'MS ~500-1000', mimar: '—', sure: '—', neden: 'Titicaca çevresinin dinî başkenti.', onem: 'And\'ın en yüksek antik şehirlerinden (3.850 m).', teknik: [['Güneş Kapısı', 'Tek parça andezit, ~10 ton']], nasil: 'Hassas kesilmiş taş bloklar ve metal kenetler.', bugun: 'UNESCO Dünya Mirası (2000).', ilginc: 'İnkalar Tiwanaku harabelerini dünyanın yaratıldığı yer olarak görürdü.' },
      chanchan: { ikon: '🏰', yaptiran: 'Chimú kralları', donem: '~900-1470', mimar: '—', sure: '—', neden: 'Chimú krallığının başkenti.', onem: 'Amerika\'nın en büyük kerpiç şehri; dünyanın en büyüklerinden.', teknik: [['Alan', '~20 km²'], ['Saray sitesi', '10 (her kral için bir)']], nasil: 'Yüksek kerpiç duvarlı saray siteleri; balık ve dalga kabartmaları.', bugun: 'UNESCO Dünya Mirası (1986, tehlike altında: El Niño yağmurları).', ilginc: 'Her Chimú kralı öldüğünde sarayı mezarına dönüşür, yeni kral kendine yeni bir saray yaptırırdı.' }
    },
    ulke: [
      { ad: 'Genel bakış', ikon: '🧭', html: '<p>Güney Amerika\'nın büyük uygarlıkları <b>And Dağları</b> ve Pasifik kıyısında gelişti: Caral (Amerika\'nın en eski şehri), Chavín, Nazca, Moche, Tiwanaku, Wari ve Chimú. Yazı kullanmadılar ama düğümlü iplerle (kipu) kayıt tuttular. Amazon havzasında da büyük köy toplulukları ve "kara toprak" (terra preta) yapan halklar yaşadı.</p>' },
      { ad: 'And armağanları', ikon: '🥔', html: '<ul><li>Patates (4.000\'den fazla çeşit)</li><li>Kinoa, domates, yer fıstığı, acı biber</li><li>Lama ve alpaka; alpaka yünü</li><li>Kauçuk ve kinin (sıtma ilacı)</li></ul>' }
    ]
  });

  // ================= 2. İNKA İMPARATORLUĞU VE FETİH =================
  window.PLACES.push({
    id: 'guneyamerika-inka', sira: 2, kisa: 'İnka İmparatorluğu', aralikAd: 'MS 1438 – 1572',
    baslik: 'Pachacuti · Cusco · Machu Picchu · İnka yolları · Atahualpa · Pizarro · Vilcabamba',
    ulkeAlt: 'Amerika\'nın en büyük imparatorluğu Tawantinsuyu ve İspanyol fethi (MS 1438 – 1572)',
    from: -1438, to: -1572, start: -1460,
    not: 'İnka tarihleri İspanyol kroniklerine dayanır; bazıları birkaç yıl oynayabilir.', baskent: 'Cusco; fetihten sonra Lima (1535)',
    sahne: { kizak: false, araba: false, giyim: 'antik' },
    dynasties: [{ from: -1438, to: -1532, ad: 'İnka İmparatorluğu (Tawantinsuyu)', renk: '#c8902a' }, { from: -1532, to: -1572, ad: 'Fetih ve Vilcabamba', renk: '#7a3a2a' }],
    rulers: [
      { from: -1438, to: -1471, ad: 'Pachacuti', kisa: 'Pachacuti', kim: 'Chanka saldırısını püskürtüp küçük bir krallığı imparatorluğa çevirdi; Cusco\'yu yeniden kurdu ve Machu Picchu\'yu yaptırdı.' },
      { from: -1471, to: -1493, ad: 'Topa İnka Yupanqui', kisa: 'Topa İnka', kim: 'Chimú krallığını aldı; imparatorluğu Şili ve Arjantin\'e genişletti.' },
      { from: -1493, to: -1527, ad: 'Huayna Capac', kisa: 'Huayna Capac', kim: 'İmparatorluk Ekvador\'dan orta Şili\'ye uzandı. İspanyollar gelmeden önce yayılan çiçek salgınında öldü.' },
      { from: -1527, to: -1533, ad: 'Huáscar ve Atahualpa', kisa: 'Atahualpa', kim: 'İki kardeş arasında iç savaş; Atahualpa kazandı ama Cajamarca\'da Pizarro\'ya esir düştü (1532) ve öldürüldü (1533).' },
      { from: -1533, to: -1572, ad: 'Pizarro, Manco İnka ve Vilcabamba İnkaları', kisa: 'Manco İnka', kim: 'Manco İnka 1536\'da Cusco\'yu kuşattı; sonra ormandaki Vilcabamba\'da direniş sürdü. Son İnka Túpac Amaru 1572\'de idam edildi.' }
    ],
    eras: [
      { from: -1438, to: -1500, puan: { eko: 5, ordu: 5, istikrar: 5 }, baskent: 'Cusco',
        gundem: 'İnkalar bir kuşakta Ekvador\'dan Şili\'ye 4.000 km\'lik bir imparatorluk kurdu: Tawantinsuyu, "dört bölgenin birliği". Cusco\'nun kusursuz taş duvarları, dağ yamaçlarında teraslar, 40.000 km\'lik yol ağı ve depolar. Para ve pazar yoktu; devlet ambarlardan dağıtım yapıyordu.',
        savas: 'Topuz, sapan ve bola; yollar boyunca ordu depoları. Fethedilen halkların bir kısmı başka bölgelere yerleştirildi (mitmaq).',
        ekonomi: 'Mit\'a: vergi yerine emek; kipu ile kayıt.',
        din: 'Güneş tanrısı İnti; İnka, güneşin oğlu. Kurban törenleri (capacocha).',
        yasam: 'Chasqui koşucuları haberleri bayrak yarışıyla günde ~240 km taşıyordu.',
        bilgi: 'İnka taş duvarlarında taşlar harçsız ama o kadar sıkı oturur ki aralarına bıçak girmez; bu duvarlar sonraki depremlerde İspanyol binalarından sağlam çıktı.' },
      { from: -1500, to: -1532, puan: { eko: 5, ordu: 4, istikrar: 2 }, baskent: 'Cusco, Quito',
        gundem: 'Portekizli Cabral Brezilya\'ya ulaştı (1500). Avrupa salgınları İspanyollardan önce Andlara ulaştı ve Huayna Capac\'ı öldürdü. Ardından gelen kardeş savaşı imparatorluğu ikiye böldü. 1532\'de Pizarro 168 adamla Cajamarca\'ya geldi.',
        savas: 'Huáscar-Atahualpa iç savaşı.',
        ekonomi: 'Brezilya kıyısında Portekizliler kırmızı boya veren pau-brasil ağacını topladı: ülke adını bu ağaçtan aldı.',
        din: 'Kehanetler ve kötü alametlerden söz edilir.',
        yasam: 'Amazon\'da Orellana\'nın yolculuğu (1542) "Amazon kadın savaşçıları" söylencesini doğurdu.',
        bilgi: 'Brezilya, adını kırmızı boya için kesilen "pau-brasil" (közağacı) ağacından alır.' },
      { from: -1532, to: -1572, puan: { eko: 3, ordu: 3, istikrar: 1 }, baskent: 'Lima (İspanyol); Vilcabamba (İnka direnişi)',
        gundem: 'Pizarro Atahualpa\'yı esir aldı; fidye olarak bir odayı altınla, iki odayı gümüşle doldurttu, sonra onu öldürttü. İspanyollar Cusco\'yu aldı, Lima\'yı kurdu (1535). Fatihler birbirleriyle savaştı. Potosí\'de dev gümüş damarı bulundu (1545).',
        savas: 'Cusco kuşatması (1536); Sacsayhuamán savaşı.',
        ekonomi: 'Potosí gümüşü dünya ekonomisini değiştirmeye başladı.',
        din: 'Güneş tapınağı Coricancha\'nın altınları eritildi; üstüne kilise yapıldı.',
        yasam: 'Salgınlar ve zorla çalıştırma nüfusu çökertti.',
        bilgi: 'Atahualpa\'nın fidyesi için ~6 ton altın ve ~12 ton gümüş toplandı; sanat eserlerinin çoğu külçe yapıldı.' }
    ],
    nufus: [[-1438, 10], [-1500, 15], [-1532, 12], [-1572, 7]],
    nufusNot: 'Bütün Güney Amerika için tartışmalı tahminler (İnka İmparatorluğu 6-14 milyon).',
    dunyaOzet: { eko: 'İnka İmparatorluğu dünyanın en büyük devletlerinden biriydi; fetihten sonra And gümüşü dünyaya yayıldı.', askeri: 'Topuz ve sapan karşısında çelik, at, top ve salgınlar.' },
    events: [
      { y: -1438, t: 'Pachacuti imparator oldu', k: 'm' }, { y: -1450, t: 'Machu Picchu', k: 'm' }, { y: -1470, t: 'İnkalar Chimú\'yu aldı', k: 'm' }, { y: -1500, t: 'Cabral Brezilya\'da', k: 'm' },
      { y: -1527, t: 'Huayna Capac salgında öldü', k: 'm' }, { y: -1532, t: 'Cajamarca: Atahualpa esir', k: 'm' }, { y: -1533, t: 'Pizarro Cusco\'da', k: 'm' }, { y: -1535, t: 'Lima kuruldu', k: 'm' },
      { y: -1536, t: 'Cusco kuşatması', k: 'm' }, { y: -1545, t: 'Potosí gümüşü', k: 'm' }, { y: -1572, t: 'Son İnka Túpac Amaru idam edildi', k: 'm' },
      { y: -1453, t: 'İstanbul\'un fethi', k: 'w' }, { y: -1521, t: 'Tenochtitlan düştü', k: 'w' }, { y: -1571, t: 'İnebahtı', k: 'w' }
    ],
    world: [{ from: -1428, to: -1521, yer: 'Meksika', t: 'Aztekler.' }, { from: -1453, to: -1572, yer: 'Osmanlı', t: 'Osmanlı\'nın zirvesi.' }, { from: -1526, to: -1572, yer: 'Hindistan', t: 'Babürler.' }],
    sites: [{ ad: 'QUİTO', wx: 1000 }, { ad: 'CAJAMARCA', wx: 1350 }, { ad: 'LİMA', wx: 1900 }, { ad: 'CUSCO', wx: 2800 }, { ad: 'MACHU PİCCHU', wx: 3000 }, { ad: 'VİLCABAMBA', wx: 3100 }, { ad: 'TİTİCACA', wx: 3300 }, { ad: 'POTOSÍ', wx: 3700 }],
    cliffs: [{ wx: 2900, w: 900, h: 160, peak: 0.5 }],
    monuments: [
      { id: 'cusco', ad: 'Cusco ve Coricancha', yer: 'Peru', wx: 2800, type: 'city', wall: false, b: 300, n: 28, hk: 0.28, start: -1438, end: -1460, vol: 9e4 },
      { id: 'sacsayhuaman', ad: 'Sacsayhuamán', yer: 'Cusco', wx: 2650, type: 'citadel', b: 220, h: 18, start: -1440, end: -1500, vol: 1e5, ruin: -1536 },
      { id: 'machupicchu', ad: 'Machu Picchu', yer: 'Urubamba vadisi, Peru', wx: 3000, type: 'terrace', b: 180, h: 30, start: -1450, end: -1460, vol: 8e4, ruin: -1572 }
    ],
    hizli: [{ ad: 'Pachacuti', y: -1438 }, { ad: 'Machu Picchu', y: -1460 }, { ad: 'Chimú\'nun sonu', y: -1470 }, { ad: 'Cabral', y: -1500 }, { ad: 'Cajamarca', y: -1532 }, { ad: 'Lima', y: -1535 }, { ad: 'Potosí', y: -1545 }, { ad: 'Vilcabamba', y: -1572 }],
    bilgi: {
      cusco: { ikon: '☀️', yaptiran: 'Pachacuti', donem: '1438\'den yeniden yapım', mimar: '—', sure: '—', neden: 'İnka İmparatorluğu\'nun başkenti, "dünyanın göbeği".', onem: 'İnka mimarisinin kalbi.', teknik: [['Coricancha', 'Duvarları altın levhalarla kaplıydı'], ['Rakım', '~3.400 m']], nasil: 'Şehir planı bir puma biçiminde; Sacsayhuamán başı.', bugun: 'UNESCO Dünya Mirası (1983); İspanyol kiliseleri İnka temelleri üzerinde.', ilginc: '1950 depreminde İspanyol Santo Domingo manastırı çöktü, altındaki İnka duvarları sapasağlam ortaya çıktı.' },
      sacsayhuaman: { ikon: '🪨', yaptiran: 'Pachacuti ve halefleri', donem: '15. yy', mimar: '—', sure: '~50 yıl', neden: 'Tören alanı ve kale.', onem: 'Dev taş zikzak duvarlar.', teknik: [['En büyük taş', '~120 ton (tahmin)'], ['Duvar', '3 kat zikzak']], nasil: 'Harçsız, çok köşeli taşlar birbirine tam oturur.', bugun: 'Her 24 Haziran\'da İnti Raymi (Güneş Bayramı) burada canlandırılıyor.', ilginc: 'İspanyollar duvarlarının taşlarını Cusco\'daki kiliseleri yapmak için söktü; yalnızca taşınamayacak kadar büyük olanlar kaldı.' },
      machupicchu: { ikon: '⛰️', yaptiran: 'Pachacuti', donem: '~1450', mimar: '—', sure: '—', neden: 'İmparatorun kraliyet malikânesi.', onem: 'Dünyanın Yeni Yedi Harikası; İnka mühendisliğinin simgesi.', teknik: [['Rakım', '2.430 m'], ['Yapı', '~200']], nasil: 'Dağ sırtına teraslar ve gizli drenaj; yapıların yarısı yeraltındaki temellerde.', bugun: 'UNESCO Dünya Mirası (1983).', ilginc: 'İspanyollar Machu Picchu\'yu hiç bulamadı; 1911\'de Hiram Bingham\'ı oraya yerel çiftçiler götürdü.' }
    },
    ulke: [
      { ad: 'Genel bakış', ikon: '🧭', html: '<p><b>İnkalar</b> 1438\'den sonra Amerika\'nın en büyük imparatorluğunu kurdu: Tawantinsuyu. Yazıları yoktu ama kipu ipleri, 40.000 km yol, teraslar ve depolarla milyonlarca insanı yönettiler. 1532\'de <b>Pizarro</b>\'nun küçük grubu, salgın ve iç savaşla zayıflamış imparatorluğu ele geçirdi.</p>' },
      { ad: 'İnka mühendisliği', ikon: '🛤️', html: '<ul><li><b>Qhapaq Ñan:</b> ~40.000 km yol, asma köprüler</li><li><b>Teraslar:</b> farklı yüksekliklerde farklı ürünler</li><li><b>Kipu:</b> düğümlü iplerle sayı kaydı</li><li><b>Depolar (qollqa):</b> kıtlığa karşı yiyecek</li><li>Depreme dayanıklı yamuk kapı ve pencereler</li></ul>' }
    ]
  });

  // ================= 3. SÖMÜRGEDEN BUGÜNE =================
  window.PLACES.push({
    id: 'guneyamerika-modern', sira: 3, modern: true, kisa: 'Sömürge, bağımsızlık ve bugün', aralikAd: 'MS 1572 – bugün',
    baslik: 'Potosí · Brezilya şekeri · Túpac Amaru II · Bolívar · San Martín · Perón · bugünkü Güney Amerika',
    ulkeAlt: 'İspanyol ve Portekiz sömürgelerinden bağımsızlık savaşlarına, diktatörlüklerden demokrasiye (MS 1572 – bugün)',
    from: -1572, to: -2026, start: -1819,
    not: 'Tarihler kesindir. Hükümdar şeridi kıtanın öne çıkan önderlerini izler.', baskent: 'Lima, Salvador, Rio de Janeiro; bugün Brasília, Buenos Aires, Lima, Bogotá, Santiago, Caracas ve diğerleri',
    sahne: { kizak: false, araba: true, buhar: -1860, oto: -1920, ucak: -1935, turist: -1970, giyim: [[-1572, 'cubbe'], [-1910, 'modern']] },
    dynasties: [{ from: -1572, to: -1810, ad: 'İspanyol ve Portekiz sömürgeleri', renk: '#a8822a' }, { from: -1810, to: -1830, ad: 'Bağımsızlık savaşları', renk: '#c83a2a' }, { from: -1830, to: -1930, ad: 'Yeni devletler', renk: '#2a7a4a' }, { from: -1930, to: -2026, ad: 'Modern Güney Amerika', renk: '#2a5a9a' }],
    rulers: [
      { from: -1572, to: -1780, ad: 'Peru genel valileri ve Brezilya valileri', kisa: 'Genel valiler', kim: 'Vali Toledo Potosí için mita zorla çalıştırmasını düzenledi. Brezilya\'da şeker, sonra altın (Minas Gerais).' },
      { from: -1780, to: -1810, ad: 'Túpac Amaru II ayaklanması ve sömürgenin son yılları', kisa: 'Túpac Amaru II', kim: 'İnka soyundan gelen José Gabriel Condorcanqui büyük bir yerli ayaklanması başlattı (1780) ve idam edildi.' },
      { from: -1810, to: -1830, ad: 'Simón Bolívar ve José de San Martín', kisa: 'Bolívar', kim: '"Kurtarıcı" Bolívar kuzeyi, San Martín güneyi bağımsızlığa taşıdı; And Dağları\'nı ordularla aştılar. Brezilya 1822\'de imparatorluk olarak bağımsızlığını ilan etti.' },
      { from: -1830, to: -1889, ad: 'Brezilya İmparatoru II. Pedro ve caudillolar', kisa: 'II. Pedro', kim: 'Brezilya\'da 58 yıllık istikrarlı imparatorluk; İspanyolca konuşan ülkelerde güçlü generaller (caudillo). Paraguay Savaşı (1864-1870).' },
      { from: -1889, to: -1930, ad: 'Cumhuriyetler ve ihracat ekonomileri', kisa: 'Cumhuriyetler', kim: 'Brezilya cumhuriyet oldu (1889). Arjantin et ve buğdayla dünyanın en zengin ülkelerinden biri oldu.' },
      { from: -1930, to: -1955, ad: 'Getúlio Vargas ve Juan Perón dönemi', kisa: 'Perón', kim: 'Brezilya\'da Vargas, Arjantin\'de Perón ve Evita: işçi hareketleri ve sanayileşme.' },
      { from: -1955, to: -1990, ad: 'Askeri diktatörlükler ve Soğuk Savaş', kisa: 'Cuntalar', kim: 'Brezilya (1964), Şili (1973, Pinochet), Arjantin (1976) askeri yönetimleri; binlerce kişi kayboldu.' },
      { from: -1990, to: -2026, ad: 'Demokratik dönem', kisa: 'Demokrasi', kim: 'Kıtanın neredeyse tamamında seçimle gelen hükümetler; Venezuela\'da derin kriz.' }
    ],
    eras: [
      { from: -1572, to: -1780, puan: { eko: 4, ordu: 3, istikrar: 3 }, baskent: 'Lima, Salvador, Rio de Janeiro',
        gundem: 'Potosí\'nin Cerro Rico dağı dünya tarihinin en zengin gümüş madenlerinden biri oldu; 17. yüzyılda şehir Paris kadar kalabalıktı. Brezilya\'da şeker plantasyonları için ~4-5 milyon Afrikalı köle getirildi: Amerika\'ya getirilen kölelerin yaklaşık %40\'ı. 1690\'larda Minas Gerais\'te altın bulundu.',
        savas: 'Kaçak köle toplulukları (quilombo): Palmares bir yüzyıl direndi.',
        ekonomi: 'Gümüş, şeker, altın, tütün; Manila kalyonları ve Atlantik ticareti.',
        din: 'Cizvit misyonları (Paraguay); Katolik barok kiliseler.',
        yasam: 'Mestizo, mulatto, yerli ve Afrikalı toplulukların karışımı.',
        bilgi: 'İspanyolcada "vale un Potosí" (bir Potosí eder) deyimi hâlâ "paha biçilmez" anlamında kullanılır.' },
      { from: -1780, to: -1830, puan: { eko: 3, ordu: 4, istikrar: 1 }, baskent: 'Lima, Caracas, Buenos Aires, Rio de Janeiro',
        gundem: 'Napolyon\'un İspanya\'yı işgali (1808) bağımsızlık hareketlerini tetikledi. Bolívar Venezuela\'dan Bolivya\'ya, San Martín Arjantin\'den Şili\'ye ve Peru\'ya savaştı. Portekiz kraliyet ailesi Napolyon\'dan kaçıp Rio\'ya taşındı (1808); Brezilya 1822\'de bağımsız imparatorluk oldu.',
        savas: 'Boyacá (1819), Carabobo (1821), Ayacucho (1824).',
        ekonomi: 'Savaşlar madenleri ve ticareti çökertti; İngiliz tüccarlar yeni pazarlara girdi.',
        din: 'Kilise ile yeni devletler arasında gerilim.',
        yasam: 'Bolívar\'ın "Gran Colombia" hayali dağıldı.',
        bilgi: 'Bolivya, adını Simón Bolívar\'dan aldı.' },
      { from: -1830, to: -1930, puan: { eko: 4, ordu: 3, istikrar: 2 }, baskent: 'Rio de Janeiro, Buenos Aires, Santiago, Lima, Bogotá',
        gundem: 'Yeni devletler sınır savaşları ve iç çatışmalar yaşadı. Paraguay Savaşı\'nda Paraguay nüfusunun büyük kısmını kaybetti. Brezilya 1888\'de köleliği kaldıran son Amerika ülkesi oldu. Milyonlarca İtalyan, İspanyol, Alman, Japon göçmen geldi.',
        savas: 'Paraguay Savaşı (1864-1870), Pasifik Savaşı (1879-1884): Bolivya denize kıyısını kaybetti.',
        ekonomi: 'Kahve (Brezilya), sığır eti ve buğday (Arjantin), bakır ve güherçile (Şili), kauçuk (Amazon).',
        din: 'Katolik çoğunluk.',
        yasam: 'Tango Buenos Aires\'te doğdu.',
        bilgi: 'Amazon kauçuk patlamasında Manaus\'ta orman ortasına bir opera binası yapıldı (1896); malzemeleri Avrupa\'dan geldi.' },
      { from: -1930, to: -1990, puan: { eko: 3, ordu: 3, istikrar: 1 }, baskent: 'Brasília (1960), Buenos Aires, Santiago, Lima',
        gundem: 'Popülist önderler (Vargas, Perón), sonra askeri diktatörlükler. Brezilya başkentini ormanın ortasında sıfırdan kurulan Brasília\'ya taşıdı (1960). Che Guevara ve devrim hareketleri; Şili\'de Allende ve Pinochet darbesi. Futbol kıtanın tutkusu: Pelé, Maradona.',
        savas: 'Falkland (Malvinas) Savaşı (1982): Arjantin-İngiltere.',
        ekonomi: 'Sanayileşme, borç krizleri ve hiperenflasyon.',
        din: 'Kurtuluş teolojisi.',
        yasam: 'Gabriel García Márquez\'in "Yüzyıllık Yalnızlık"ı (1967); bossa nova.',
        bilgi: 'Brasília\'nın planı yukarıdan bakınca bir uçak (ya da kuş) biçimindedir.' },
      { from: -1990, to: -2026, puan: { eko: 4, ordu: 2, istikrar: 3 }, baskent: 'Brasília, Buenos Aires, Lima, Bogotá, Santiago, Caracas',
        gundem: 'Demokrasiye dönüş. Brezilya dünyanın büyük ekonomilerinden biri; Kolombiya FARC ile barış imzaladı (2016). Venezuela\'da ekonomik çöküş milyonlarca kişiyi göçe zorladı. Amazon ormanının korunması dünyanın gündeminde.',
        savas: 'Kolombiya iç savaşının sonu.',
        ekonomi: 'Soya, demir, bakır (Şili dünyanın en büyük üreticisi), lityum, petrol.',
        din: 'Katoliklik; Evanjelik kiliseler hızla büyüyor. İlk Latin Amerikalı papa: Arjantinli Papa Franciscus (2013-2025).',
        yasam: 'Rio Karnavalı, Arjantin\'in 2022 Dünya Kupası zaferi.',
        bilgi: 'Amazon yağmur ormanı dünyanın en büyük tropikal ormanı; ~390 milyar ağaç barındırıyor.' }
    ],
    nufus: [[-1572, 7], [-1650, 8], [-1800, 12], [-1900, 40], [-1950, 113], [-2000, 350], [-2026, 440]],
    nufusNot: 'Bütün Güney Amerika (Brezilya ~212 milyon, Kolombiya ~53, Arjantin ~46).',
    dunyaOzet: { eko: 'Amerika gümüşü ve şekeri dünya ekonomisini değiştirdi; 20. yüzyılda tarım ve maden ihracatı.', askeri: 'Bağımsızlık orduları; 20. yüzyılda askeri darbeler.' },
    events: [
      { y: -1572, t: 'Potosí mitası', k: 'm' }, { y: -1630, t: 'Palmares quilombosu', k: 'm' }, { y: -1693, t: 'Minas Gerais altını', k: 'm' }, { y: -1780, t: 'Túpac Amaru II ayaklanması', k: 'm' },
      { y: -1808, t: 'Portekiz sarayı Rio\'ya taşındı', k: 'm' }, { y: -1810, t: 'Bağımsızlık hareketleri', k: 'm' }, { y: -1817, t: 'San Martín And\'ı aştı', k: 'm' }, { y: -1819, t: 'Boyacá', k: 'm' },
      { y: -1822, t: 'Brezilya bağımsız', k: 'm' }, { y: -1824, t: 'Ayacucho', k: 'm' }, { y: -1864, t: 'Paraguay Savaşı', k: 'm' }, { y: -1888, t: 'Brezilya köleliği kaldırdı', k: 'm' },
      { y: -1931, t: 'Kurtarıcı İsa Heykeli', k: 'm' }, { y: -1960, t: 'Brasília', k: 'm' }, { y: -1973, t: 'Şili darbesi', k: 'm' }, { y: -1982, t: 'Falkland Savaşı', k: 'm' }, { y: -2016, t: 'Kolombiya barışı', k: 'm' },
      { y: -1789, t: 'Fransız İhtilali', k: 'w' }, { y: -1914, t: 'Panama Kanalı', k: 'w' }, { y: -1945, t: 'İkinci Dünya Savaşı bitti', k: 'w' }
    ],
    world: [{ from: -1572, to: -1810, yer: 'İspanya ve Portekiz', t: 'Sömürge imparatorlukları.' }, { from: -1776, to: -2026, yer: 'ABD', t: 'Kuzeyde yükselen güç.' }, { from: -1945, to: -1991, yer: 'Dünya', t: 'Soğuk Savaş.' }],
    sites: [{ ad: 'CARACAS', wx: 500 }, { ad: 'BOGOTÁ', wx: 650 }, { ad: 'LİMA', wx: 1900 }, { ad: 'CUSCO', wx: 2800 }, { ad: 'POTOSÍ', wx: 3700 }, { ad: 'SANTİAGO', wx: 4700 }, { ad: 'BUENOS AİRES', wx: 5600 }, { ad: 'BRASÍLİA', wx: 6300 }, { ad: 'SÃO PAULO', wx: 6600 }, { ad: 'RİO DE JANEİRO', wx: 7000 }, { ad: 'SALVADOR', wx: 7500 }, { ad: 'MANAUS (AMAZON)', wx: 7900 }],
    monuments: [
      { id: 'potosi', ad: 'Potosí ve Cerro Rico', yer: 'Bolivya', wx: 3700, type: 'city', wall: false, b: 300, n: 30, hk: 0.3, start: -1545, end: -1600, vol: 8e4 },
      { id: 'kurtariciisa', ad: 'Kurtarıcı İsa Heykeli', yer: 'Corcovado, Rio de Janeiro', wx: 7050, type: 'heykel', stil: 'isa', b: 40, h: 60, start: -1922, end: -1931, vol: 3e4 },
      { id: 'buenosaires', ad: 'Buenos Aires', yer: 'Arjantin', wx: 5600, type: 'modcity', b: 400, h: 100, n: 42, start: -1900, end: -2010, vol: 9e4 },
      { id: 'saopaulo', ad: 'São Paulo', yer: 'Brezilya', wx: 6600, type: 'modcity', b: 440, h: 140, n: 50, start: -1950, end: -2020, vol: 1.1e5 }
    ],
    hizli: [{ ad: 'Potosí', y: -1600 }, { ad: 'Brezilya altını', y: -1700 }, { ad: 'Túpac Amaru II', y: -1780 }, { ad: 'Bolívar', y: -1819 }, { ad: 'Brezilya', y: -1822 }, { ad: 'Paraguay Savaşı', y: -1865 }, { ad: 'Kölelik bitti', y: -1888 }, { ad: 'Kurtarıcı İsa', y: -1931 }, { ad: 'Brasília', y: -1960 }, { ad: 'Bugün', y: -2026 }],
    bilgi: {
      potosi: { ikon: '⛏️', yaptiran: 'İspanyollar', donem: '1545\'ten', mimar: '—', sure: '—', neden: 'Cerro Rico\'nun gümüş madenleri.', onem: 'Sömürge döneminin en zengin şehri; 17. yüzyılda Amerika\'nın en kalabalık şehirlerinden.', teknik: [['Rakım', '~4.000 m'], ['Nüfus (1611)', '~160.000']], nasil: 'Yerli işçiler mita sistemiyle madenlere gönderildi; cıvayla gümüş ayrıştırma.', bugun: 'UNESCO Dünya Mirası (1987, tehlike altında).', ilginc: 'Madenlerde ölen işçi sayısı o kadar fazlaydı ki Cerro Rico\'ya "insan yiyen dağ" denir.' },
      kurtariciisa: { ikon: '✝️', yaptiran: 'Brezilya Katolik Kilisesi', donem: '1922-1931', mimar: 'Heitor da Silva Costa; heykeltıraş Paul Landowski, yüz Gheorghe Leonida', sure: '9 yıl', neden: 'Brezilya\'nın bağımsızlığının 100. yılı.', onem: 'Rio\'nun ve Brezilya\'nın simgesi; Dünyanın Yeni Yedi Harikası.', teknik: [['Yükseklik', '30 m (kaideyle 38 m)'], ['Kol açıklığı', '28 m']], nasil: 'Betonarme; dış yüzey binlerce sabuntaşı mozaikle kaplı.', bugun: '710 m\'lik Corcovado dağının tepesinde.', ilginc: 'Heykele her yıl birkaç kez yıldırım düşer; parmak uçları bu yüzden onarıldı.' },
      buenosaires: { ikon: '🏙️', yaptiran: '—', donem: '1536 ve 1580\'de kuruldu', mimar: '—', sure: '—', neden: 'Río de la Plata ağzında liman.', onem: 'Arjantin\'in başkenti; tangonun doğduğu şehir.', teknik: [['Metropol', '~15 milyon']], nasil: '19. yüzyıl göçmenleriyle Paris tarzı bulvarlar.', bugun: 'Arjantin\'in başkenti.', ilginc: 'Avenida 9 de Julio dünyanın en geniş caddelerinden: ~140 m.' },
      saopaulo: { ikon: '🏙️', yaptiran: '—', donem: '1554 (Cizvit misyonu)', mimar: '—', sure: '—', neden: 'Kahve zenginliği.', onem: 'Güney Yarımküre\'nin en büyük şehri (~22 milyon metropol).', teknik: [['Japon kökenli nüfus', 'Japonya dışındaki en büyük']], nasil: 'Kahve, sanayi ve göçle büyüdü.', bugun: 'Brezilya\'nın ekonomik merkezi.', ilginc: 'Şehirde 2007\'den beri büyük reklam panoları yasak.' }
    },
    ulke: [
      { ad: 'Genel bakış', ikon: '🧭', html: '<p>Üç yüzyıl boyunca kıta <b>İspanya</b> ve <b>Portekiz</b>\'in sömürgesiydi; Potosí gümüşü ve Brezilya şekeri dünya ekonomisini değiştirdi. 1810-1825 arasında <b>Bolívar</b> ve <b>San Martín</b> bağımsızlığı getirdi; Brezilya 1822\'de bağımsız oldu. 20. yüzyılda popülizm, diktatörlükler ve demokrasi dönemleri yaşandı.</p>' },
      { ad: 'Bugünkü ülkeler', ikon: '🗺️', html: '<ul><li><b>Brezilya</b> (~212 milyon, Portekizce)</li><li>Kolombiya, Arjantin, Peru, Venezuela, Şili, Ekvador, Bolivya, Paraguay, Uruguay</li><li>Guyana, Surinam ve Fransız Guyanası</li></ul>' }
    ]
  });

  window.BOLGE_TASI('guneyamerika');

  window.MISIR = {
    coords: { caral: [-10.8933, -77.5203], chavin: [-9.5929, -77.1774], huacadelsol: [-8.1339, -78.9897], tiwanaku: [-16.5547, -68.6733], chanchan: [-8.1059, -79.0745], cusco: [-13.5165, -71.9786], sacsayhuaman: [-13.5094, -71.9822], machupicchu: [-13.1631, -72.545], potosi: [-19.5836, -65.7531], kurtariciisa: [-22.9519, -43.2105], buenosaires: [-34.6037, -58.3816], saopaulo: [-23.5505, -46.6333] },
    wiki: { caral: 'Caral', chavin: 'Chavín de Huántar', huacadelsol: 'Huaca del Sol', tiwanaku: 'Tiwanaku', chanchan: 'Chan Chan', cusco: 'Coricancha', sacsayhuaman: 'Sacsayhuamán', machupicchu: 'Machu Picchu', potosi: 'Cerro Rico', kurtariciisa: 'Christ the Redeemer (statue)', buenosaires: 'Buenos Aires', saopaulo: 'São Paulo' },
    bilgi: {}, alt: {},
    kureAdlari: [[-12, -55, 'GÜNEY AMERİKA', 'misir', 2.0], [-15, -73, 'AND DAĞLARI', 'kucuk', 3.2], [-4, -62, 'AMAZON', 'bolge', 2.8], [-38, -66, 'PATAGONYA', 'bolge', 3.2], [-20, -88, 'PASİFİK OKYANUSU', 'deniz', 2.2], [-25, -30, 'ATLAS OKYANUSU', 'deniz', 2.2],
      [-15.8, -69.4, 'Titicaca', 'kucuk', 5], [-3.3, -60, 'Amazon', 'nehir', 5], [-14.7, -75.1, 'Nazca', 'kucuk', 6]],
    sehirler: [
      { ad: 'Caral', ll: [-10.8933, -77.5203], from: 3000, to: 1800, not: 'Amerika\'nın en eski şehri.' },
      { ad: 'Chavín de Huántar', ll: [-9.5929, -77.1774], from: 1200, to: 200, not: 'And\'ın hac merkezi.' },
      { ad: 'Tiwanaku', ll: [-16.5547, -68.6733], from: 100, to: -1000, not: 'Titicaca kıyısındaki dinî başkent.' },
      { ad: 'Chan Chan', ll: [-8.1059, -79.0745], from: -900, to: -1470, b: [[-900, -1470]], not: 'Chimú başkenti.' },
      { ad: 'Cusco', ll: [-13.532, -71.9675], from: -1200, to: -2026, b: [[-1438, -1533]], not: 'İnka başkenti.' },
      { ad: 'Lima', ll: [-12.0464, -77.0428], from: -1535, to: -2026, b: [[-1543, -2026]], not: 'Peru genel valiliğinin ve Peru\'nun başkenti.' },
      { ad: 'Potosí', ll: [-19.5836, -65.7531], from: -1545, to: -2026, not: 'Gümüş şehri.' },
      { ad: 'Salvador', ll: [-12.9777, -38.5016], from: -1549, to: -2026, b: [[-1549, -1763]], not: 'Brezilya\'nın ilk başkenti.' },
      { ad: 'Rio de Janeiro', ll: [-22.9068, -43.1729], from: -1565, to: -2026, b: [[-1763, -1960]], not: 'Brezilya\'nın eski başkenti.' },
      { ad: 'Buenos Aires', ll: [-34.6037, -58.3816], from: -1580, to: -2026, b: [[-1776, -2026]], not: 'Arjantin\'in başkenti.' },
      { ad: 'Bogotá', ll: [4.711, -74.0721], from: -1538, to: -2026, b: [[-1739, -2026]], not: 'Kolombiya\'nın başkenti.' },
      { ad: 'Santiago', ll: [-33.4489, -70.6693], from: -1541, to: -2026, b: [[-1818, -2026]], not: 'Şili\'nin başkenti.' },
      { ad: 'Brasília', ll: [-15.7975, -47.8919], from: -1960, to: -2026, b: [[-1960, -2026]], not: 'Planlı başkent.' }
    ],
    nil: { ikon: '🌊', title: 'Amazon, And Dağları ve Titicaca', sub: 'Dünyanın en büyük nehri ve en uzun dağ zinciri', foto: 'Amazon River', tabs: [{ ad: '🌊 Coğrafya', html: '<ul class="hap"><li><b>Amazon</b> (~6.400 km) dünyanın en çok su taşıyan nehri: okyanuslara akan tatlı suyun ~%20\'si.</li><li><b>And Dağları</b> (~7.000 km) dünyanın en uzun dağ zinciri; en yüksek doruk Aconcagua (6.961 m).</li><li><b>Titicaca Gölü</b> (3.812 m) gemi işleyen en yüksek büyük göl.</li><li><b>Atacama</b> dünyanın en kurak çöllerinden; bazı yerlere yüzyıllardır yağmur düşmedi.</li></ul>' }] },
    simgeler: [
      { id: 'ga-caral', ad: 'Caral', ikon: '🔺', wiki: 'Caral', git: { place: 'guneyamerika-antik', y: 2600, id: 'caral' }, ozet: 'Amerika\'nın en eski şehri.', hap: ['MÖ ~2600.', 'Barışçıl bir toplum.'] },
      { id: 'ga-nazca', ad: 'Nazca çizgileri', ikon: '🐒', wiki: 'Nazca Lines', git: { place: 'guneyamerika-antik', y: 100 }, ozet: 'Çöle çizilmiş dev figürler.', hap: ['MÖ 500 – MS 500.', 'Havadan görülür.'] },
      { id: 'ga-tiwanaku', ad: 'Tiwanaku', ikon: '🚪', wiki: 'Tiwanaku', git: { place: 'guneyamerika-antik', y: -700, id: 'tiwanaku' }, ozet: 'Güneş Kapısı.', hap: ['3.850 m.', 'Titicaca.'] },
      { id: 'ga-chanchan', ad: 'Chan Chan', ikon: '🏰', wiki: 'Chan Chan', git: { place: 'guneyamerika-antik', y: -1300, id: 'chanchan' }, ozet: 'En büyük kerpiç şehir.', hap: ['Chimú.', '~20 km².'] },
      { id: 'ga-machupicchu', ad: 'Machu Picchu', ikon: '⛰️', wiki: 'Machu Picchu', git: { place: 'guneyamerika-inka', y: -1460, id: 'machupicchu' }, ozet: 'Bulutların üstündeki İnka şehri.', hap: ['~1450.', '1911\'de dünyaya tanıtıldı.'] },
      { id: 'ga-kipu', ad: 'Kipu', ikon: '🪢', wiki: 'Quipu', git: { place: 'guneyamerika-inka', y: -1480 }, ozet: 'Düğümlü iplerle kayıt.', hap: ['Onluk sayılar.', 'İnka devleti.'] },
      { id: 'ga-bolivar', ad: 'Simón Bolívar', ikon: '⚔️', wiki: 'Simón Bolívar', git: { place: 'guneyamerika-modern', y: -1819 }, ozet: 'Kurtarıcı.', hap: ['6 ülkeyi bağımsızlığa taşıdı.', 'Bolivya adı ondan.'] },
      { id: 'ga-isa', ad: 'Kurtarıcı İsa', ikon: '✝️', wiki: 'Christ the Redeemer (statue)', git: { place: 'guneyamerika-modern', y: -1931, id: 'kurtariciisa' }, ozet: 'Rio\'nun simgesi.', hap: ['1931.', '38 m.'] }
    ],
    bugun: '<p>Güney Amerika\'da 12 bağımsız ülke ve ~440 milyon kişi yaşıyor. <b>Brezilya</b> nüfusun ve yüzölçümünün neredeyse yarısı.</p><ul class="hap"><li><b>Diller:</b> İspanyolca, Portekizce; Keçuva (~8 milyon), Guarani, Aymara.</li><li><b>Doğa:</b> Amazon, Iguazú, Galápagos, Patagonya.</li><li><b>Ekonomi:</b> soya, kahve, et, bakır, lityum, petrol.</li><li><b>Kültür:</b> futbol, tango, samba, Latin Amerika edebiyatı.</li></ul>'
  };
  window.SEHIR_BILGI = {
    'Cusco': { bugun: 'Peru', kurulus: '~1100-1200 (İnka söylencesi: Manco Capac)', wiki: 'Cusco', onem: 'İnka İmparatorluğu\'nun başkenti.', ilginc: 'Keçuvaca "Qusqu" adının "göbek" anlamına geldiği söylenir: İnkalar için dünyanın merkeziydi.' },
    'Potosí': { bugun: 'Bolivya', kurulus: '1545', wiki: 'Potosí', onem: 'Dünyanın en zengin gümüş madeni.', ilginc: 'Bugün de madenciler dağa girmeden önce maden tanrısı "El Tío"ya koka yaprağı ve içki sunar.' },
    'Rio de Janeiro': { bugun: 'Brezilya', kurulus: '1565', wiki: 'Rio de Janeiro', onem: '1808-1821 arasında Portekiz İmparatorluğu\'nun başkenti.', ilginc: 'Bir Avrupa imparatorluğunun Avrupa dışında başkent olan tek şehri.' }
  };
  window.KULTUR = { tanrilar: [], olumler: [], roller: [], mumyalama: '', ic: { eslesme: {}, sahneler: {} }, bilim: { genel: '', cag: {} } };
  window.SINIRLAR = [];

  window.OLAYLAR = [
    { id: 'cajamarca', tur: 'savas', ad: 'Cajamarca', y: -1532, ll: [-7.16, -78.51], onem: 5, wiki: 'Battle of Cajamarca', taraflar: ['İspanyollar (Francisco Pizarro)', 'İnkalar (Atahualpa)'], kazanan: 'İspanyollar', kuvvetler: '168 İspanyol; Atahualpa\'nın binlerce maiyeti.', sonuc: 'Atahualpa esir alındı; İnka İmparatorluğu çöküşe girdi.' },
    { id: 'cusco1536', tur: 'savas', ad: 'Cusco Kuşatması', y: -1536, ll: [-13.51, -71.98], onem: 4, wiki: 'Siege of Cusco', taraflar: ['İnkalar (Manco İnka)', 'İspanyollar'], kazanan: 'İspanyollar', sonuc: 'İnka direnişi Vilcabamba ormanlarına çekildi.' },
    { id: 'ayacucho', tur: 'savas', ad: 'Ayacucho Savaşı', y: -1824, ll: [-13.16, -74.22], onem: 5, wiki: 'Battle of Ayacucho', taraflar: ['Bağımsızlıkçılar (Sucre)', 'İspanya'], kazanan: 'Bağımsızlıkçılar', sonuc: 'Güney Amerika\'da İspanyol yönetimi fiilen sona erdi.' },
    { id: 'paraguay', tur: 'savas', ad: 'Paraguay Savaşı', y: -1864, ll: [-25.28, -57.63], onem: 4, wiki: 'Paraguayan War', taraflar: ['Brezilya, Arjantin, Uruguay', 'Paraguay'], kazanan: 'Üçlü İttifak', sonuc: 'Paraguay nüfusunun belki yarısından fazlasını kaybetti: Latin Amerika\'nın en kanlı savaşı.' },
    { id: 'falkland', tur: 'savas', ad: 'Falkland (Malvinas) Savaşı', y: -1982, ll: [-51.7, -59.0], onem: 3, wiki: 'Falklands War', taraflar: ['Birleşik Krallık', 'Arjantin'], kazanan: 'Birleşik Krallık', sonuc: 'Arjantin\'de askeri cunta düştü.' },
    { id: 'tordesillas', tur: 'antlasma', ad: 'Tordesillas Antlaşması', y: -1494, ll: [41.5, -5.0], onem: 5, wiki: 'Treaty of Tordesillas', taraflar: ['İspanya', 'Portekiz'], sonuc: 'Yeni dünya bir çizgiyle paylaşıldı; Brezilya bu yüzden Portekizce konuşur.' },
    { id: 'kolombiyabaris', tur: 'antlasma', ad: 'Kolombiya barış anlaşması', y: -2016, ll: [4.71, -74.07], onem: 3, wiki: 'Colombian peace process', taraflar: ['Kolombiya hükümeti', 'FARC'], sonuc: '50 yılı aşan iç savaş sona erdi; Santos Nobel Barış Ödülü aldı.' },
    { id: 'tupacamaru2', tur: 'olay', ad: 'Túpac Amaru II ayaklanması', y: -1780, ll: [-14.27, -71.22], onem: 4, wiki: 'Rebellion of Túpac Amaru II', sonuc: 'Andlardaki en büyük sömürge karşıtı yerli ayaklanması; bastırıldı.' },
    { id: 'aurea', tur: 'olay', ad: 'Altın Yasa: Brezilya\'da köleliğin sonu', y: -1888, ll: [-22.9, -43.17], onem: 4, wiki: 'Lei Áurea', sonuc: 'Prenses Isabel\'in imzasıyla Amerika kıtasında köleliği kaldıran son ülke Brezilya oldu.' },
    { id: 'valdivia', tur: 'afet', alt: 'deprem', ad: 'Valdivia depremi', y: -1960, ll: [-38.24, -73.05], onem: 5, wiki: '1960 Valdivia earthquake', sonuc: 'Ölçülen en büyük deprem (9,4-9,6); tsunami Japonya ve Hawaii\'ye ulaştı.' },
    { id: 'kocasalgin', tur: 'afet', alt: 'salgin', ad: 'And\'da çiçek salgını', y: -1527, ll: [-0.22, -78.51], onem: 4, wiki: 'Huayna Capac', sonuc: 'İnka İmparatoru Huayna Capac ve varisi öldü; iç savaş başladı.' }
  ];

  window.ULKE_SAYFA = window.ULKE_SAYFA || {};
  window.ULKE_SAYFA.guneyamerika = {
    id: 'guneyamerika', ad: 'Güney Amerika', ikon: '🦙', kw: ['güney amerika', 'inka', 'machu picchu', 'peru', 'brezilya', 'arjantin', 'şili', 'kolombiya', 'bolivya', 'venezuela', 'ekvador', 'bolivar', 'amazon', 'and dağları', 'nazca', 'cusco'],
    altBaslik: 'MÖ ~3000 – bugün · Caral\'dan İnkalara, Bolívar\'dan bugüne', kapakWiki: 'Machu Picchu', kapakAd: 'Machu Picchu', merkez: [-15, -62], merkezZ: 3.0,
    ozet: ['<b>Güney Amerika</b>\'da Caral, Nazca, Moche, Tiwanaku ve Chimú gibi And uygarlıkları gelişti; 15. yüzyılda İnkalar Amerika\'nın en büyük imparatorluğunu kurdu.', '1532\'den sonra İspanyollar ve Portekizliler kıtayı sömürgeleştirdi; 19. yüzyılın başında Bolívar ve San Martín bağımsızlığı getirdi.'],
    bilgiKutusu: [['Tarih', 'MÖ ~3000 – bugün'], ['Önemli merkezler', 'Caral, Chavín, Tiwanaku, Chan Chan, Cusco, Potosí, Lima, Rio de Janeiro'], ['Diller', 'İspanyolca, Portekizce, Keçuva, Guarani, Aymara'], ['Bugün', '12 ülke, ~440 milyon kişi']],
    donemler: { 'guneyamerika-antik': 'Caral, Chavín, Nazca, Moche, Tiwanaku, Chimú.', 'guneyamerika-inka': 'İnka İmparatorluğu ve fetih.', 'guneyamerika-modern': 'Sömürge, bağımsızlık ve bugün.' },
    kultur: [{ baslik: 'Diller', ikon: '🗣️', html: '<p>Keçuva (İnkaların dili), Aymara, Guarani (Paraguay\'da resmî); İspanyolca ve Portekizce.</p>' }, { baslik: 'Din', ikon: '⛪', html: '<p>And tanrıları (İnti, Pachamama); bugün Katolik çoğunluk ve yerli inançların karışımı.</p>' }],
    figurler: [
      { id: 'machupicchu', ad: 'Machu Picchu', tur: 'yapı', wiki: 'Machu Picchu', ll: [-13.1631, -72.545], z: 85, yapim: '~1450', kim: 'Pachacuti', durum: 'harabe', durumYazi: 'Ören yeri.', nerede: 'Peru', metin: 'İnka dağ şehri.', git: { place: 'guneyamerika-inka', y: -1460, id: 'machupicchu' } },
      { id: 'kurtariciisa', ad: 'Kurtarıcı İsa', tur: 'yapı', wiki: 'Christ the Redeemer (statue)', ll: [-22.9519, -43.2105], z: 85, yapim: '1922-1931', kim: 'Landowski, da Silva Costa', durum: 'ayakta', durumYazi: 'Ayakta.', nerede: 'Rio de Janeiro', metin: 'Corcovado\'daki dev heykel.', git: { place: 'guneyamerika-modern', y: -1931, id: 'kurtariciisa' } }
    ],
    kisiler: [
      { ad: 'Pachacuti', wiki: 'Pachacuti', yil: '~1418-1471', ozet: 'İnka İmparatorluğu\'nun kurucusu.', y: -1450 }, { ad: 'Atahualpa', wiki: 'Atahualpa', yil: '~1502-1533', ozet: 'Son bağımsız İnka imparatoru.', y: -1532 },
      { ad: 'Túpac Amaru II', wiki: 'Túpac Amaru II', yil: '1738-1781', ozet: 'Yerli ayaklanmasının önderi.', y: -1780 }, { ad: 'Simón Bolívar', wiki: 'Simón Bolívar', yil: '1783-1830', ozet: 'Kurtarıcı.', y: -1819 },
      { ad: 'José de San Martín', wiki: 'José de San Martín', yil: '1778-1850', ozet: 'And\'ı aşan general.', y: -1817 }, { ad: 'II. Pedro', wiki: 'Pedro II of Brazil', yil: '1825-1891', ozet: 'Brezilya imparatoru.', y: -1860 },
      { ad: 'Eva Perón', wiki: 'Eva Perón', yil: '1919-1952', ozet: 'Arjantin\'in "Evita"sı.', y: -1950 }, { ad: 'Gabriel García Márquez', wiki: 'Gabriel García Márquez', yil: '1927-2014', ozet: 'Nobel ödüllü yazar.', y: -1967 },
      { ad: 'Pelé', wiki: 'Pelé', yil: '1940-2022', ozet: 'Futbolun efsanesi.', y: -1970 }
    ],
    biliyorMuydunuz: ['Patates Andlarda ~8.000 yıl önce evcilleştirildi; Peru\'da 4.000\'den fazla çeşidi var.', 'La Paz (Bolivya) dünyanın en yüksek idari başkenti (~3.600 m).', 'Ekvador adını ekvator çizgisinden alır.', 'Şili kuzeyden güneye ~4.300 km uzunlukta ama ortalama genişliği yalnızca ~177 km.']
  };
})();
