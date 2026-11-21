// Mezopotamya ve İran (bugünkü Irak ve İran): Sümer'den bugüne.
// Yıl: MÖ pozitif, MS negatif. Sahne (wx): güneyden kuzeye, sonra doğuya bir yolculuk
//   Ur 800 · Uruk 1200 · Babil 2100 · Ktesifon 2500 · Bağdat 2750 · Samarra 3150 · Ninova 3550 · Behistun 4300 · Hemedan 4600
//   Tahran 5300 · İsfahan 6000 · Persepolis 6600 · Pasargad 6950 · Meşhed 7700
// Kaynaklar: Van De Mieroop, "A History of the Ancient Near East" (2016); Kuhrt, "The Persian Empire" (2007);
//   Kennedy, "The Court of the Caliphs" (2004); Axworthy, "Iran: Empire of the Mind" (2008); Encyclopaedia Iranica.
(() => {
  window.PLACES = window.PLACES || [];

  // ================= 1. SÜMER, AKAD VE ESKİ BABİL =================
  window.PLACES.push({
    id: 'mezopotamya-sumer', sira: 1, kisa: 'Sümer, Akad ve Babil', aralikAd: 'MÖ 5000 – 1595',
    baslik: 'İlk şehirler · yazının icadı · Sargon · Hammurabi',
    ulkeAlt: 'Ubeyd köylerinden Sümer şehirlerine, Akad İmparatorluğu\'ndan Hammurabi\'nin Babil\'ine (MÖ 5000 – 1595)',
    from: 5000, to: 1595, start: 2100,
    not: 'MÖ 2000 öncesi tarihler orta kronolojiye göredir ve onlarca yıl oynayabilir.', baskent: 'Tek başkent yok: Uruk, Ur, Lagaş, Akad, sonra Babil',
    sahne: { kizak: true, araba: [3000, 1595], katipYok: false, giyim: 'antik' },
    dynasties: [
      { from: 5000, to: 3500, ad: 'Ubeyd kültürü', renk: '#7a6a4a' },
      { from: 3500, to: 2900, ad: 'Uruk dönemi: ilk şehirler', renk: '#9a6a2a' },
      { from: 2900, to: 2334, ad: 'Sümer şehir devletleri', renk: '#a8742e' },
      { from: 2334, to: 2154, ad: 'Akad İmparatorluğu', renk: '#8a3a2a' },
      { from: 2154, to: 2004, ad: 'Gutiler ve Ur III', renk: '#2a6a8a' },
      { from: 2004, to: 1595, ad: 'Eski Babil', renk: '#3a4a9a' }
    ],
    rulers: [
      { from: 5000, to: 3500, ad: 'Köy önderleri ve tapınak rahipleri', kisa: '?', kim: 'Güney Irak\'ın bataklık kıyılarında sulama kanalları kazan çiftçi köyleri. Eridu\'da üst üste yenilenen ilk tapınaklar.' },
      { from: 3500, to: 2900, ad: 'Uruk\'un rahip-kralları', kisa: 'En', kim: 'Uruk dünyanın ilk büyük şehri oldu (~40.000 kişi). Yöneticiye "en" denirdi; tapınak hem ambar hem yönetim merkeziydi.' },
      { from: 2900, to: 2334, ad: 'Sümer şehir kralları (Gılgamış, Eannatum)', kisa: 'Gılgamış', kim: 'Ur, Uruk, Lagaş, Umma, Kiş: birbiriyle su ve toprak için savaşan bağımsız şehirler. Uruk kralı Gılgamış sonradan destan kahramanı oldu.' },
      { from: 2334, to: 2279, ad: 'Akadlı Sargon', kisa: 'Sargon', kim: 'Söylenceye göre bir sakinin oğlu; Sümer şehirlerini birleştirip tarihin ilk imparatorluğunu kurdu. Akad dili diplomasi dili oldu.' },
      { from: 2279, to: 2154, ad: 'Sargon\'un halefleri (Naram-Sin)', kisa: 'Naram-Sin', kim: 'Naram-Sin kendini "dört yönün kralı" ve tanrı ilan etti. İmparatorluk kuraklık ve Guti akınlarıyla çöktü.' },
      { from: 2154, to: 2112, ad: 'Gutiler ve Lagaşlı Gudea', kisa: 'Gudea', kim: 'Dağlardan inen Gutiler kuzeyi yönetirken Lagaş\'ta Gudea tapınaklar yaptırdı; onlarca diyorit heykeli bugün müzelerde.' },
      { from: 2112, to: 2004, ad: 'Ur III hanedanı (Ur-Nammu, Şulgi)', kisa: 'Ur-Nammu', kim: 'Ur-Nammu bilinen en eski yasa metnini yazdırdı ve Ur Zigguratı\'nı yaptırdı. Şulgi döneminde devlet bürokrasisi on binlerce kil tablete kaydedildi.' },
      { from: 2004, to: 1792, ad: 'İsin, Larsa ve Amorit krallıkları', kisa: 'Amoritler', kim: 'Ur, Elamlılarca yıkıldı (MÖ 2004). Batıdan gelen Amoritler İsin, Larsa, Mari ve Babil\'de krallıklar kurdu.' },
      { from: 1792, to: 1750, ad: 'Hammurabi', kisa: 'Hammurabi', kim: 'Babil\'in altıncı kralı. Mezopotamya\'yı yeniden birleştirdi; 282 maddelik yasasını bazalt bir dikilitaşa kazıttı.' },
      { from: 1750, to: 1595, ad: 'Hammurabi\'nin halefleri (Samsu-iluna)', kisa: 'Samsu-iluna', kim: 'Babil küçüldü. MÖ 1595\'te Hitit kralı I. Murşili Babil\'i yağmaladı ve hanedan sona erdi.' }
    ],
    eras: [
      { from: 5000, to: 2900, puan: { eko: 3, ordu: 1, istikrar: 3 }, baskent: 'Eridu, sonra Uruk',
        gundem: 'Dicle ve Fırat\'ın arasındaki düzlükte çiftçiler kanallar kazıp çölü tarlaya çeviriyor. Uruk\'ta MÖ ~3300\'de yazı doğdu: önce tahıl ve koyun hesabı tutmak için kilden tabletlere çizilen resimler, sonra çivi yazısı.',
        savas: 'Henüz büyük ordular yok; şehirler surlarla çevrilmeye başladı. Uruk\'un surları söylencede Gılgamış\'a mal edilir.',
        ekonomi: 'Arpa, hurma, koyun ve keçi. Tapınaklar ürünü toplayıp dağıtıyor; işçilere ücret arpa ve bira olarak ödeniyor. Taş, ağaç ve maden dışarıdan geliyor.',
        din: 'Her şehrin bir koruyucu tanrısı var: Uruk\'ta gök tanrısı An ve aşk tanrıçası İnanna, Eridu\'da su tanrısı Enki.',
        yasam: 'Kerpiç evler, kamış kulübeler, kayıklar. Çömlekçi çarkı ve tekerlek bu çağın icatları.',
        bilgi: 'Bilinen en eski yazılı adlardan biri "Kuşim": Uruk tabletlerinde arpa hesabını imzalayan bir memur. İlk yazı edebiyat için değil, muhasebe için icat edildi.' },
      { from: 2900, to: 2334, puan: { eko: 4, ordu: 3, istikrar: 2 }, baskent: 'Ur, Uruk, Lagaş, Kiş (her şehir bağımsız)',
        gundem: 'Sümer\'de bir düzine şehir devleti var. Lagaş ile Umma bir sınır kanalı için yüz yıldan uzun savaştı. Ur\'un kraliyet mezarlarında altın başlıklar, lirler ve onlarca hizmetkârın cesedi bulundu.',
        savas: 'Kalkanlı, mızraklı piyade düzeni (falanks) ve eşeklerin çektiği dört tekerlekli savaş arabaları. Eannatum\'un "Akbabalar Steli" bilinen ilk savaş anıtı.',
        ekonomi: 'Tunç için kalay Afganistan\'dan, lapis lazuli Badahşan\'dan, bakır Umman\'dan (Magan) geliyor. Gümüş, değer ölçüsü olarak kullanılıyor.',
        din: 'Zigguratların öncüsü yüksek tapınak terasları. Rahipler gökyüzünü izleyip takvim tutuyor.',
        yasam: 'Okullara "tablet evi" deniyor; öğrenciler yüzlerce işareti ezberliyor. 60\'lık sayı sistemi bugünkü saat ve açı ölçümüzün kaynağı.',
        bilgi: 'Bir saatin 60 dakika, bir dairenin 360 derece olması Sümerlerin 60 tabanlı sayı sisteminden kalma.' },
      { from: 2334, to: 2004, puan: { eko: 5, ordu: 5, istikrar: 3 }, baskent: 'Akad (yeri bulunamadı), sonra Ur',
        gundem: 'Sargon Basra Körfezi\'nden Akdeniz\'e uzanan ilk imparatorluğu kurdu. Kızı Enheduanna Ur\'da başrahibe oldu ve adı bilinen ilk yazar sayılıyor. Akad\'ın çöküşünden sonra Ur III kralları güneyi yeniden birleştirdi.',
        savas: 'Sargon\'un 5.400 kişilik daimî ordusu: tarihin bilinen ilk profesyonel ordularından biri. Okçular ve hafif piyade.',
        ekonomi: 'Ur III döneminde devlet tarlaları, dokuma atölyeleri ve sürüleri büyük bir bürokrasiyle yönetiyor. Drehem\'de günde yüzlerce hayvanın giriş-çıkışı kaydediliyor.',
        din: 'Ay tanrısı Nanna Ur\'un koruyucusu; Ur-Nammu onun için dev bir ziggurat yaptırdı. Naram-Sin ve Şulgi kendilerini tanrı ilan etti.',
        yasam: 'Ur-Nammu Yasası: yaralamaya göz yerine para cezası. İlk "ücret tarifeleri" ve ölçü birlikleri.',
        bilgi: 'MÖ ~2200\'deki büyük kuraklık ("4.2 bin yıl olayı") Akad\'ın çöküşünde rol oynamış olabilir; aynı dönemde Mısır\'da Eski Krallık da dağıldı.' },
      { from: 2004, to: 1595, puan: { eko: 5, ordu: 4, istikrar: 3 }, baskent: 'Babil',
        gundem: 'Amorit krallıkları birbirleriyle yarışıyor. Hammurabi önce diplomasiyle sonra savaşla rakiplerini (Larsa, Mari) yendi. Babil 1.500 yıl boyunca Mezopotamya\'nın kültür başkenti olarak kalacak.',
        savas: 'Krallar arası ittifaklar ve mektuplaşmalar: Mari arşivinde binlerce diplomatik mektup var. Atlı savaş arabası yaygınlaşıyor.',
        ekonomi: 'Tüccarlar kervanlarla Anadolu\'ya (Kaniş) kalay ve kumaş götürüp gümüş getiriyor. Faiz, kredi ve sözleşmeler kil tabletlere yazılıyor.',
        din: 'Babil\'in tanrısı Marduk yükseliyor. Kâhinler koyun ciğerine bakarak gelecek okuyor.',
        yasam: 'Hammurabi Kanunları: hekim ücretleri, kira, miras, kadın hakları. Ceza toplumdaki konuma göre değişiyor.',
        bilgi: 'Hammurabi\'nin dikilitaşı 1901\'de İran\'daki Susa\'da bulundu: Elamlılar onu MÖ 12. yüzyılda ganimet olarak götürmüştü. Bugün Louvre\'da.' }
    ],
    nufus: [[5000, 0.3], [3500, 0.8], [3000, 1.2], [2300, 2], [2000, 2], [1595, 2.5]],
    nufusNot: 'Bugünkü Irak ve batı İran için kaba arkeolojik tahminler.',
    dunyaOzet: { eko: 'Mezopotamya ve Mısır dünyanın en gelişmiş iki ekonomisi; İndus şehirleriyle deniz yoluyla ticaret yapılıyor.', askeri: 'Tunç silahlar, falanks düzeni, eşek ve at çekişli savaş arabaları.' },
    events: [
      { y: 3300, t: 'Uruk\'ta yazı icat edildi', k: 'm' }, { y: 2900, t: 'Sümer şehir devletleri çağı başladı', k: 'm' }, { y: 2600, t: 'Ur kraliyet mezarları', k: 'm' },
      { y: 2450, t: 'Lagaş - Umma savaşı: Akbabalar Steli', k: 'm' }, { y: 2334, t: 'Akadlı Sargon imparatorluğu kurdu', k: 'm' }, { y: 2200, t: 'Büyük kuraklık', k: 'm' },
      { y: 2112, t: 'Ur-Nammu: Ur III hanedanı', k: 'm' }, { y: 2100, t: 'Ur Zigguratı yapıldı', k: 'm' }, { y: 2004, t: 'Elamlılar Ur\'u yıktı', k: 'm' },
      { y: 1792, t: 'Hammurabi tahta çıktı', k: 'm' }, { y: 1754, t: 'Hammurabi Kanunları', k: 'm' }, { y: 1595, t: 'Hititler Babil\'i yağmaladı', k: 'm' },
      { y: 3100, t: 'Mısır birleşti', k: 'w' }, { y: 2560, t: 'Büyük Piramit', k: 'w' }, { y: 2500, t: 'İndus\'ta Harappa ve Mohenjo-daro', k: 'w' }, { y: 1650, t: 'Hitit Krallığı', k: 'w' }
    ],
    world: [
      { from: 3100, to: 1595, yer: 'Mısır', t: 'Firavunlar; piramitler.' }, { from: 2600, to: 1900, yer: 'Hindistan', t: 'İndus uygarlığı; Mezopotamya ile ticaret.' },
      { from: 2000, to: 1595, yer: 'Anadolu', t: 'Asur tüccar kolonileri (Kaniş), sonra Hititler.' }, { from: 2070, to: 1600, yer: 'Çin', t: 'Xia hanedanı (söylencesel), sonra Şang.' }
    ],
    sites: [{ ad: 'UR', wx: 800 }, { ad: 'URUK', wx: 1200 }, { ad: 'LAGAŞ', wx: 1500 }, { ad: 'NİPPUR', wx: 1800 }, { ad: 'BABİL', wx: 2100 }, { ad: 'KİŞ', wx: 2300 }, { ad: 'MARİ', wx: 2900 }, { ad: 'SUSA (ELAM)', wx: 4100 }],
    monuments: [
      { id: 'uruk', ad: 'Uruk ve Beyaz Tapınak', yer: 'Warka, Irak', wx: 1200, type: 'city', wall: true, b: 280, n: 26, hk: 0.3, start: 4000, end: 3200, vol: 7e4, ruin: -300 },
      { id: 'urziggurat', ad: 'Ur Zigguratı', yer: 'Tell el-Mukayyar, Irak', wx: 800, type: 'ziggurat', b: 150, h: 42, kat: 3, start: 2112, end: 2094, vol: 1.2e5, ruin: 500 },
      { id: 'babil', ad: 'Babil', yer: 'Hille, Irak', wx: 2100, type: 'city', wall: true, b: 320, n: 30, hk: 0.32, start: 1894, end: 1800, vol: 8e4, ruin: -200 }
    ],
    hizli: [{ ad: 'Yazı', y: 3300 }, { ad: 'Ur mezarları', y: 2600 }, { ad: 'Sargon', y: 2334 }, { ad: 'Ur Zigguratı', y: 2100 }, { ad: 'Hammurabi', y: 1754 }, { ad: 'Babil yağması', y: 1595 }],
    bilgi: {
      uruk: { ikon: '🏙️', yaptiran: 'Sümerler', donem: 'MÖ ~4000 – MS ~300', mimar: '—', sure: 'Yüzyıllar içinde büyüdü', neden: 'Tarım artığını toplayan tapınak merkezi.', onem: 'Dünyanın ilk büyük şehri ve yazının doğduğu yer. Irak\'ın adı Uruk\'tan gelmiş olabilir.', teknik: [['Nüfus (MÖ ~2900)', '~40.000-80.000'], ['Sur uzunluğu', '~9 km']], nasil: 'Kerpiç ve pişmiş tuğla; tapınak duvarları renkli kil çivilerle mozaik gibi süslendi.', bugun: 'Warka ören yeri; UNESCO Dünya Mirası (2016).', ilginc: 'Gılgamış Destanı\'nda kahraman, ölümsüzlüğü bulamayınca teselliyi Uruk\'un surlarına bakmakta bulur.' },
      urziggurat: { ikon: '🛕', yaptiran: 'Ur-Nammu ve oğlu Şulgi', donem: 'MÖ ~2100', mimar: '—', sure: '~20 yıl', neden: 'Ay tanrısı Nanna\'nın tapınağı.', onem: 'En iyi korunmuş Sümer zigguratı.', teknik: [['Taban', '64 × 46 m'], ['Yükseklik (ilk hâli)', '~30 m'], ['Malzeme', 'Kerpiç çekirdek, bitümle örülmüş pişmiş tuğla kaplama']], nasil: 'Üç basamaklı kerpiç dağ; ön yüzde üç merdiven tepedeki tapınağa çıkar.', bugun: 'Alt basamak 1980\'lerde onarıldı; Nasiriye yakınında.', ilginc: 'Yağmur suyunu içeriden boşaltmak için tuğla duvarlarda "ağlama delikleri" bırakıldı.' },
      babil: { ikon: '🦁', yaptiran: 'Amorit kralları, sonra II. Nebukadnezar', donem: 'MÖ ~1894 – MS ~200', mimar: '—', sure: '—', neden: 'Fırat kıyısında ticaret ve yönetim merkezi.', onem: 'Hammurabi\'nin ve Nebukadnezar\'ın başkenti; MÖ ~600\'de belki dünyanın en büyük şehri.', teknik: [['Alan (MÖ 6. yy)', '~9 km²'], ['Nüfus', '~150.000-200.000']], nasil: 'Fırat şehri ikiye bölüyordu; çift sur ve hendek.', bugun: 'Ören yeri; UNESCO Dünya Mirası (2019).', ilginc: 'Saddam Hüseyin 1980\'lerde Babil sarayını adının yazılı olduğu tuğlalarla "yeniden" yaptırdı.' }
    },
    ulke: [
      { ad: 'Genel bakış', ikon: '🧭', html: '<p><b>Mezopotamya</b> Yunanca "iki nehir arası" demek: Dicle ile Fırat\'ın arası. Burada ilk şehirler, yazı, yasa, okul, tekerlek ve 60\'lık sayı sistemi doğdu. Güneyde <b>Sümerler</b>, sonra Sami dilli <b>Akadlar</b> ve <b>Babilliler</b>; doğudaki İran\'da ise <b>Elam</b> uygarlığı vardı.</p>' },
      { ad: 'Halklar', ikon: '👥', html: '<ul><li><b>Sümerler</b>: dili hiçbir dile benzemeyen güneyliler</li><li><b>Akadlar</b>: Sami dilli; Akadca 2.000 yıl diplomasi dili oldu</li><li><b>Amoritler</b>: batıdan gelen göçebeler; Hammurabi bir Amorit\'ti</li><li><b>Elamlılar</b>: güneybatı İran (Susa)</li><li><b>Gutiler</b>: Zagros dağlılar</li></ul>' },
      { ad: 'İcatlar', ikon: '💡', html: '<ul><li>Çivi yazısı (MÖ ~3300)</li><li>Tekerlek ve çömlekçi çarkı</li><li>60 tabanlı sayılar: saat ve derece</li><li>Yazılı yasa: Ur-Nammu, Hammurabi</li><li>İlk destan: Gılgamış</li><li>Bira ve ilk "tarifler"</li></ul>' }
    ]
  });

  // ================= 2. ASUR, PERS VE SASANİLER =================
  window.PLACES.push({
    id: 'mezopotamya-pers', sira: 2, kisa: 'Asur, Babil ve Pers', aralikAd: 'MÖ 1595 – MS 651',
    baslik: 'Asur · Nebukadnezar · Büyük Kiros · Persepolis · Sasaniler',
    ulkeAlt: 'Asur ve Babil imparatorluklarından Ahamenişlere, Partlara ve Sasanilere (MÖ 1595 – MS 651)',
    from: 1595, to: -651, start: 500,
    not: 'Tarihler büyük ölçüde kesindir (Asur kral listeleri ve tutulma kayıtları).', baskent: 'Asur, Ninova, Babil, Persepolis, Susa, Ktesifon',
    sahne: { kizak: false, araba: [1595, 300], deve: [900, -651], giyim: 'antik' },
    dynasties: [
      { from: 1595, to: 1155, ad: 'Kassit Babili', renk: '#6a5a3a' }, { from: 1155, to: 911, ad: 'Orta Asur', renk: '#7a4a3a' },
      { from: 911, to: 612, ad: 'Yeni Asur İmparatorluğu', renk: '#9a3a2a' }, { from: 612, to: 539, ad: 'Yeni Babil (Kalde)', renk: '#2a5aa0' },
      { from: 539, to: 330, ad: 'Ahameniş Pers İmparatorluğu', renk: '#a8822a' }, { from: 330, to: 141, ad: 'İskender ve Selevkoslar', renk: '#6a3aa0' },
      { from: 141, to: -224, ad: 'Part İmparatorluğu', renk: '#7a6a2a' }, { from: -224, to: -651, ad: 'Sasani İmparatorluğu', renk: '#8a2a4a' }
    ],
    rulers: [
      { from: 1595, to: 1155, ad: 'Kassit kralları', kisa: 'Kassitler', kim: 'Zagros\'tan gelen Kassitler Babil\'i 400 yıl yönetti; Mısır firavunlarıyla mektuplaştılar (Amarna mektupları).' },
      { from: 1155, to: 911, ad: 'Orta Asur kralları (I. Tiglat-Pileser)', kisa: 'Tiglat-Pileser', kim: 'Dicle kıyısındaki Asur şehri güçlendi; I. Tiglat-Pileser Akdeniz\'e kadar sefer yaptı. Sonra Arami akınlarıyla karanlık bir dönem geldi.' },
      { from: 911, to: 745, ad: 'Yeni Asur\'un yükselişi (II. Asurnasirpal, III. Salmanasar)', kisa: 'Asurnasirpal', kim: 'Her yıl düzenli seferler. II. Asurnasirpal Nimrud\'da dev bir saray yaptırıp açılışta 69.574 konuğa ziyafet verdi.' },
      { from: 745, to: 705, ad: 'III. Tiglat-Pileser ve II. Sargon', kisa: 'II. Sargon', kim: 'Daimî ordu ve eyalet sistemi kuruldu; fethedilen halklar başka yerlere sürüldü. İsrail Krallığı MÖ 722\'de yıkıldı.' },
      { from: 705, to: 681, ad: 'Sanherib', kisa: 'Sanherib', kim: 'Başkenti Ninova\'ya taşıdı; "rakipsiz saray" ve 50 km\'lik su kanalları yaptırdı. Babil\'i yerle bir etti (MÖ 689).' },
      { from: 681, to: 669, ad: 'Esarhaddon', kisa: 'Esarhaddon', kim: 'Babil\'i yeniden yaptırdı ve Mısır\'ı fethetti (MÖ 671).' },
      { from: 669, to: 631, ad: 'Asurbanipal', kisa: 'Asurbanipal', kim: 'Okuma yazma bilen ender krallardan; Ninova\'da 30.000\'den fazla tabletlik kütüphanesini kurdu. Gılgamış Destanı bu kütüphaneden bilinir.' },
      { from: 631, to: 605, ad: 'Asur\'un çöküşü ve Nabopolassar', kisa: 'Nabopolassar', kim: 'Babilliler ve Medler birleşti; Ninova MÖ 612\'de yakıldı. Asur, tarihin en hızlı çöken imparatorluklarından biri oldu.' },
      { from: 605, to: 562, ad: 'II. Nebukadnezar', kisa: 'Nebukadnezar', kim: 'Babil\'i İştar Kapısı ve Etemenanki zigguratıyla süsledi. Kudüs\'ü yıkıp Yahudileri Babil\'e sürdü (MÖ 587).' },
      { from: 562, to: 539, ad: 'Son Babil kralları (Nabonid)', kisa: 'Nabonid', kim: 'Nabonid on yılını Arabistan\'daki Tayma vahasında geçirdi; Babil\'i oğlu Belşazar yönetti.' },
      { from: 539, to: 530, ad: 'Büyük Kiros', kisa: 'Kiros', kim: 'Medleri, Lidya\'yı ve Babil\'i alıp dünyanın o güne kadarki en büyük imparatorluğunu kurdu. Sürgündeki halkların evlerine dönmesine izin verdi.' },
      { from: 530, to: 522, ad: 'II. Kambises', kisa: 'Kambises', kim: 'Mısır\'ı fethetti (MÖ 525).' },
      { from: 522, to: 486, ad: 'I. Darius', kisa: 'Darius', kim: 'İmparatorluğu satraplıklara böldü, Kral Yolu\'nu ve Persepolis\'i yaptırdı, altın sikke (dareikos) bastırdı. Marathon\'da Atinalılara yenildi.' },
      { from: 486, to: 465, ad: 'Kserkses', kisa: 'Kserkses', kim: 'Yunanistan\'a dev bir orduyla girdi; Thermopylai\'de kazandı ama Salamis\'te yenildi (MÖ 480).' },
      { from: 465, to: 331, ad: 'Son Ahamenişler (I. Artakserkses – III. Darius)', kisa: 'Artakserkses', kim: 'Saray entrikaları ve isyanlar; imparatorluk yine de 130 yıl ayakta kaldı.' },
      { from: 331, to: 323, ad: 'Büyük İskender', kisa: 'İskender', kim: 'Gaugamela\'da III. Darius\'u yendi, Persepolis\'i yaktı ve Babil\'de 32 yaşında öldü.' },
      { from: 323, to: 141, ad: 'Selevkos kralları', kisa: 'Selevkoslar', kim: 'İskender\'in komutanı Selevkos\'un hanedanı; Dicle kıyısında Seleukeia\'yı kurdular.' },
      { from: 141, to: -224, ad: 'Part kralları (Arşaklılar)', kisa: 'Partlar', kim: 'Atlı okçularıyla ünlü Partlar Roma\'yı Carrhae\'de yendi (MÖ 53). Başkentleri Ktesifon.' },
      { from: -224, to: -531, ad: 'Sasani şahları (I. Erdeşir, I. Şapur, II. Şapur)', kisa: 'Sasaniler', kim: 'Erdeşir Partları yıkıp Sasani hanedanını kurdu. I. Şapur Roma imparatoru Valerianus\'u esir aldı (MS 260).' },
      { from: -531, to: -579, ad: 'I. Hüsrev (Anuşirvan)', kisa: 'Anuşirvan', kim: '"Adil Hüsrev". Vergi düzenini yeniledi, Gundişapur\'da bilim insanlarını topladı; satranç Hindistan\'dan onun sarayına geldi.' },
      { from: -579, to: -628, ad: 'IV. Hürmüz ve II. Hüsrev', kisa: 'II. Hüsrev', kim: 'II. Hüsrev Bizans\'la 26 yıl savaştı, Kudüs ve Mısır\'ı aldı; sonunda Herakleios\'a yenildi.' },
      { from: -628, to: -651, ad: 'Çöküş ve III. Yezdicerd', kisa: 'Yezdicerd', kim: 'İç savaşla tükenen imparatorluk Arap ordularına yenildi (Kadisiye 636, Nihavend 642). Son şah Merv\'de öldürüldü.' }
    ],
    eras: [
      { from: 1595, to: 911, puan: { eko: 3, ordu: 3, istikrar: 3 }, baskent: 'Babil ve Asur',
        gundem: 'Kassitler Babil\'de, Asurlular kuzeyde. Mısır, Hititler, Mitanni, Babil ve Asur kralları birbirlerine "kardeşim" diye mektup yazıyor. MÖ ~1200\'deki Tunç Çağı çöküşünden sonra Arami göçebeleri bölgeye yayıldı.',
        savas: 'Atlı savaş arabaları. Asur ordusu demir silahları yaygın kullanan ilk ordulardan.',
        ekonomi: 'Babil\'den Mısır\'a lapis lazuli ve atlar, Mısır\'dan altın. Aramice ve Arami alfabesi ticaret dili olmaya başladı.',
        din: 'Marduk Babil\'in, Assur tanrısı Asur\'un baş tanrısı. Yeni yıl bayramında (Akitu) kral tanrının elini tutar.',
        yasam: 'Kassit dönemi "kudurru" sınır taşları: tarla bağışları tanrı simgeleriyle korunur.',
        bilgi: 'Babil yazıcıları bu dönemde Gılgamış Destanı\'nın "standart" 12 tabletlik hâlini derledi.' },
      { from: 911, to: 612, puan: { eko: 5, ordu: 5, istikrar: 3 }, baskent: 'Nimrud, Horsabad, Ninova',
        gundem: 'Yeni Asur İmparatorluğu Mısır\'dan İran\'a uzanıyor. Krallar saray duvarlarını savaş ve aslan avı kabartmalarıyla kaplıyor. Ninova, Sanherib döneminde dünyanın en büyük şehirlerinden biri.',
        savas: 'Demir silahlı daimî ordu, kuşatma kuleleri, koçbaşları, istihkâm birlikleri ve atlı süvari. Fethedilen halkların sürgün edilmesi bir yönetim aracı.',
        ekonomi: 'Eyaletlerden haraç; Fenike limanlarından gümüş, Anadolu\'dan demir. Sanherib\'in kanalları Ninova\'nın bahçelerini suluyor.',
        din: 'Kral tanrı Assur\'un yeryüzündeki temsilcisi. Saray kapılarında insan başlı kanatlı boğa heykelleri (lamassu).',
        yasam: 'Asurbanipal\'in kütüphanesi: tıp, büyü, astronomi, sözlükler ve destanlar.',
        bilgi: 'Asurbanipal\'in kütüphanesi Ninova yakıldığında yok olmadı: ateş kil tabletleri pişirip sağlamlaştırdı. Bugün çoğu British Museum\'da.' },
      { from: 612, to: 330, puan: { eko: 5, ordu: 5, istikrar: 4 }, baskent: 'Babil, sonra Pasargad, Susa ve Persepolis',
        gundem: 'Nebukadnezar\'ın Babil\'i göz kamaştırıyor: mavi sırlı tuğlalı İştar Kapısı ve 90 metrelik Etemenanki (Babil Kulesi). MÖ 539\'da Kiros Babil\'i savaşmadan aldı. Ahamenişler Mısır\'dan Hindistan\'a 50 milyon kişiyi yönetiyor.',
        savas: '"Ölümsüzler" adlı 10.000 kişilik seçkin birlik. Fenike donanması. Yunanlarla Pers Savaşları (MÖ 490-479).',
        ekonomi: 'Kral Yolu: Susa\'dan Sardes\'e 2.700 km; atlı ulaklar 7 günde geçiyordu. Ortak sikke, ortak ölçüler ve Aramice yazışma.',
        din: 'Zerdüştlük: iyi tanrı Ahura Mazda ile kötülük arasındaki mücadele. Persler fethettikleri halkların dinlerine dokunmadı.',
        yasam: 'Persepolis kabartmalarında 23 halkın elçileri Nevruz\'da hediyeler getiriyor. Kadın işçilere doğum izni ve ek tayın verildiği tabletlerden biliniyor.',
        bilgi: 'Persepolis tabletlerine göre sarayı köleler değil ücretli işçiler yaptı; ücretleri arpa, şarap ve gümüşle ödendi.' },
      { from: 330, to: -224, puan: { eko: 4, ordu: 4, istikrar: 3 }, baskent: 'Seleukeia, sonra Ktesifon',
        gundem: 'İskender\'den sonra Selevkoslar Yunan şehirleri kurdu. MÖ 141\'den itibaren Partlar Mezopotamya\'ya hâkim; Roma ile yüzyıllarca Fırat sınırında savaştılar.',
        savas: 'Part atlı okçuları ve zırhlı katafrakt süvarisi. Geri çekilirken arkaya ok atma: "Part atışı".',
        ekonomi: 'İpek Yolu Partlardan geçiyor: Çin ipeği batıya, Roma camı ve altını doğuya. Partlar aracılık ederek zenginleşti.',
        din: 'Zerdüştlük, Babil tanrıları, Yunan tanrıları ve Yahudilik yan yana. Babil\'de son çivi yazılı tablet MS ~75 tarihli.',
        yasam: 'Yunanca, Aramice ve Partça konuşuluyor. Babilli astronomlar Ay ve gezegen tablolarını hâlâ tutuyor.',
        bilgi: 'Bilinen son çivi yazısı metni MS ~75 yılına ait bir astronomi tableti: yazı 3.400 yıl kullanıldıktan sonra unutuldu.' },
      { from: -224, to: -651, puan: { eko: 5, ordu: 5, istikrar: 3 }, baskent: 'Ktesifon',
        gundem: 'Sasaniler kendilerini Ahamenişlerin mirasçısı sayıyor. Bizans ile 400 yıl süren bir rekabet: iki "dünyanın gözü". Ktesifon\'da devasa Kisra Kemeri yükseliyor.',
        savas: 'Ağır zırhlı süvari (savaran), savaş filleri ve kuşatma ustaları. Roma imparatoru Valerianus esir düştü; Julianus Ktesifon önünde öldü.',
        ekonomi: 'Kanallar ve kanat (yer altı su yolları) ile sulanan tarlalar; ipek dokuma, gümüş tabaklar, Hindistan ve Çin\'le deniz ticareti.',
        din: 'Zerdüştlük devlet dini; Mani\'nin dini Maniheizm de burada doğdu (MS 3. yy). Nesturi Hristiyanlar ve Yahudiler de kalabalık; Babil Talmudu burada yazıldı.',
        yasam: 'Satranç (şatrenc), çevgen (polo) ve şarkıcı-çalgıcılar saray hayatının parçası. Gundişapur akademisinde Yunan ve Hint tıbbı öğretiliyor.',
        bilgi: '"Cennet" anlamına gelen İngilizce paradise kelimesi Eski Farsça "duvarla çevrili bahçe" anlamındaki pairidaēza\'dan gelir.' }
    ],
    nufus: [[1595, 2.5], [700, 4], [500, 6], [1, 8], [-500, 10], [-651, 9]],
    nufusNot: 'Bugünkü Irak ve İran toplamı için kaba tahminler (Ahameniş İmparatorluğu\'nun tamamı ~30-50 milyon).',
    dunyaOzet: { eko: 'Pers İmparatorluğu, Roma ve Han Çini dünyanın en büyük ekonomileri; İpek Yolu Asya\'yı Akdeniz\'e bağlıyor.', askeri: 'Demir silahlar, atlı okçular, zırhlı süvari ve savaş filleri.' },
    events: [
      { y: 1595, t: 'Kassitler Babil\'de', k: 'm' }, { y: 879, t: 'Nimrud sarayının açılış ziyafeti', k: 'm' }, { y: 722, t: 'Asur İsrail Krallığı\'nı yıktı', k: 'm' }, { y: 689, t: 'Sanherib Babil\'i yıktı', k: 'm' },
      { y: 671, t: 'Asur Mısır\'ı fethetti', k: 'm' }, { y: 612, t: 'Ninova düştü', k: 'm' }, { y: 587, t: 'Kudüs yıkıldı; Babil sürgünü', k: 'm' }, { y: 575, t: 'İştar Kapısı', k: 'm' },
      { y: 539, t: 'Kiros Babil\'e girdi', k: 'm' }, { y: 518, t: 'Persepolis\'in yapımı başladı', k: 'm' }, { y: 480, t: 'Kserkses Yunanistan\'da', k: 'm' }, { y: 331, t: 'Gaugamela Savaşı', k: 'm' },
      { y: 330, t: 'Persepolis yakıldı', k: 'm' }, { y: 53, t: 'Carrhae: Partlar Roma\'yı yendi', k: 'm' }, { y: -224, t: 'Sasani hanedanı kuruldu', k: 'm' }, { y: -260, t: 'I. Şapur Valerianus\'u esir aldı', k: 'm' },
      { y: -540, t: 'Kisra Kemeri', k: 'm' }, { y: -636, t: 'Kadisiye Savaşı', k: 'm' }, { y: -651, t: 'Son Sasani şahı öldü', k: 'm' },
      { y: 776, t: 'İlk Olimpiyatlar', k: 'w' }, { y: 221, t: 'Çin birleşti', k: 'w' }, { y: 44, t: 'Sezar öldürüldü', k: 'w' }, { y: -622, t: 'Hicret', k: 'w' }
    ],
    world: [
      { from: 1595, to: 1069, yer: 'Mısır', t: 'Yeni Krallık firavunları.' }, { from: 800, to: 146, yer: 'Yunanistan', t: 'Şehir devletleri; Pers Savaşları.' },
      { from: 509, to: -476, yer: 'Roma', t: 'Cumhuriyet ve imparatorluk; Fırat sınırında Partlar ve Sasanilerle savaş.' }, { from: 206, to: -220, yer: 'Çin', t: 'Han hanedanı; İpek Yolu.' },
      { from: -330, to: -651, yer: 'Bizans', t: 'Doğu Roma; Sasanilerin büyük rakibi.' }
    ],
    sites: [{ ad: 'BABİL', wx: 2100 }, { ad: 'KTESİFON', wx: 2500 }, { ad: 'NİMRUD', wx: 3400 }, { ad: 'NİNOVA', wx: 3550 }, { ad: 'BEHİSTUN', wx: 4300 }, { ad: 'EKBATANA (HEMEDAN)', wx: 4600 }, { ad: 'SUSA', wx: 4100 }, { ad: 'PERSEPOLİS', wx: 6600 }, { ad: 'PASARGAD', wx: 6950 }],
    cliffs: [{ wx: 4300, w: 500, h: 110, peak: 0.5 }],
    monuments: [
      { id: 'ninova', ad: 'Ninova ve Sanherib\'in sarayı', yer: 'Musul, Irak', wx: 3550, type: 'city', wall: true, b: 340, n: 30, hk: 0.34, start: 704, end: 690, vol: 9e4, ruin: 612 },
      { id: 'etemenanki', ad: 'Etemenanki (Babil Kulesi)', yer: 'Babil', wx: 2200, type: 'ziggurat', b: 140, h: 70, kat: 7, renk: '#2a5ab0', start: 610, end: 590, vol: 2e5, ruin: 100 },
      { id: 'pasargad', ad: 'Kiros\'un mezarı', yer: 'Pasargad, İran', wx: 6950, type: 'terrace', b: 40, h: 11, start: 540, end: 530, vol: 2e4 },
      { id: 'persepolis', ad: 'Persepolis', yer: 'Şiraz yakını, İran', wx: 6600, type: 'terrace', b: 300, h: 26, start: 518, end: 450, vol: 2.2e5, ruin: 330 },
      { id: 'kisra', ad: 'Kisra Kemeri (Taq Kasra)', yer: 'Selman-ı Pak, Irak', wx: 2500, type: 'arena', b: 92, h: 37, start: -540, end: -550, vol: 9e4 }
    ],
    hizli: [{ ad: 'Asurbanipal', y: 650 }, { ad: 'Ninova\'nın düşüşü', y: 612 }, { ad: 'İştar Kapısı', y: 575 }, { ad: 'Kiros', y: 539 }, { ad: 'Persepolis', y: 500 }, { ad: 'Gaugamela', y: 331 }, { ad: 'Partlar', y: 53 }, { ad: 'Sasaniler', y: -260 }, { ad: 'Anuşirvan', y: -550 }, { ad: 'Kadisiye', y: -636 }],
    bilgi: {
      ninova: { ikon: '🏰', yaptiran: 'Sanherib', donem: 'MÖ 704-690 (yeniden yapım)', mimar: '—', sure: '~15 yıl', neden: 'Asur\'un yeni başkenti.', onem: 'Dünyanın ilk büyük kütüphanesinin ve "rakipsiz saray"ın şehri.', teknik: [['Sur', '~12 km, 15 kapı'], ['Alan', '~7,5 km²']], nasil: 'Kanallarla 50 km uzaktan su getirildi; Jerwan\'daki taş su kemeri bilinen en eski su kemerlerinden.', bugun: 'Musul\'un içinde; 2016\'da IŞİD kapıların bir kısmını yıktı, onarım sürüyor.', ilginc: 'Bazı araştırmacılara göre "Babil\'in asma bahçeleri" aslında Ninova\'daydı.' },
      etemenanki: { ikon: '🗼', yaptiran: 'Nabopolassar ve II. Nebukadnezar', donem: 'MÖ ~610-590 (son hâli)', mimar: '—', sure: '—', neden: 'Marduk\'un zigguratı: "gök ile yerin temel evi".', onem: 'Tevrat\'taki Babil Kulesi hikâyesinin esin kaynağı sayılıyor.', teknik: [['Taban', '91 × 91 m'], ['Yükseklik', '~90 m (tahmin)'], ['Tuğla', '~17 milyon']], nasil: 'Yedi basamaklı; en üstte mavi sırlı tuğlalı tapınak.', bugun: 'Yalnızca su dolu bir temel çukuru kaldı.', ilginc: 'İskender kuleyi yeniden yaptırmak için molozu kaldırtmaya başladı ama öldü; tuğlaları sonraki yüzyıllarda köylüler taşıdı.' },
      pasargad: { ikon: '🪦', yaptiran: 'Büyük Kiros', donem: 'MÖ ~540-530', mimar: '—', sure: '—', neden: 'Kiros\'un mezarı; Pasargad Pers\'in ilk başkenti.', onem: 'Pers imparatorluk mimarisinin ilk örneği.', teknik: [['Yükseklik', '~11 m'], ['Basamak', '6']], nasil: 'Altı basamaklı kaide üzerinde beşik çatılı tek odalı taş oda.', bugun: 'UNESCO Dünya Mirası (2004).', ilginc: 'İskender mezarı soyulmuş bulunca çok öfkelendi ve onarılmasını emretti.' },
      persepolis: { ikon: '🏛️', yaptiran: 'I. Darius, Kserkses, I. Artakserkses', donem: 'MÖ 518 – ~450', mimar: '—', sure: '~70 yıl', neden: 'Tören başkenti; Nevruz kabulleri.', onem: 'Pers İmparatorluğu\'nun simgesi.', teknik: [['Teras', '~125.000 m²'], ['Apadana sütunları', '72 adet, ~20 m'], ['Yüzler Salonu', '100 sütun']], nasil: 'Dağ eteğine taş teras; sedir tavanlar, taş merdivenlerde 23 halkın kabartması.', bugun: 'UNESCO Dünya Mirası (1979).', ilginc: 'İskender MÖ 330\'da Persepolis\'i yaktırdı; ganimeti taşımak için 20.000 katır ve 5.000 deve gerektiği yazılır.' },
      kisra: { ikon: '🌉', yaptiran: 'I. Hüsrev (Anuşirvan) olduğu sanılıyor', donem: 'MS 6. yy (tartışmalı)', mimar: '—', sure: '—', neden: 'Ktesifon sarayının taht salonu.', onem: 'Dünyanın en büyük tek açıklıklı tuğla kemerlerinden.', teknik: [['Kemer açıklığı', '~25 m'], ['Yükseklik', '~37 m']], nasil: 'Kalıp kullanmadan, tuğlaların eğik sıralarla örülmesiyle yapıldı.', bugun: 'Kemer ayakta; 2019-2020\'de onarıldı.', ilginc: 'Söylenceye göre Hz. Muhammed\'in doğduğu gece kemerin 14 dendanı yıkıldı.' }
    },
    ulke: [
      { ad: 'Genel bakış', ikon: '🧭', html: '<p>Bu çağda bölge iki kez dünyanın merkezi oldu: önce <b>Asur</b> ve <b>Babil</b>, sonra <b>Pers</b> imparatorlukları. Persler Mısır\'dan İndus\'a uzanan ilk "dünya imparatorluğunu" kurdu. Ardından gelen <b>Partlar</b> ve <b>Sasaniler</b> 800 yıl boyunca Roma ve Bizans\'la denk güçte savaştı.</p>' },
      { ad: 'Halklar ve diller', ikon: '👥', html: '<ul><li><b>Asurlular ve Babilliler</b>: Akadca</li><li><b>Aramiler</b>: Aramice bütün Orta Doğu\'nun ortak dili oldu</li><li><b>Medler ve Persler</b>: İran dilleri</li><li><b>Partlar</b>: kuzeydoğu İran\'dan atlı göçebeler</li><li><b>Yahudiler</b>: Babil sürgününden sonra Mezopotamya\'da büyük topluluk</li></ul>' },
      { ad: 'Din', ikon: '🔥', html: '<p>Mezopotamya tanrıları (Marduk, İştar, Assur) yavaşça unutuldu. İran\'da <b>Zerdüştlük</b> yayıldı: kutsal ateş, iyi düşünce, iyi söz, iyi iş. Sasani döneminde <b>Maniheizm</b> doğdu; Nesturi Hristiyanlık Çin\'e kadar yayıldı.</p>' }
    ]
  });

  // ================= 3. ABBASİ BAĞDADI VE MOĞOLLAR =================
  window.PLACES.push({
    id: 'mezopotamya-islam', sira: 3, kisa: 'Halifelik, Selçuklular ve Moğollar', aralikAd: 'MS 651 – 1501',
    baslik: 'Bağdat · Beytü\'l-Hikme · Harun Reşid · Selçuklular · Hülagü',
    ulkeAlt: 'Arap fethinden Abbasi Bağdadı\'na, Selçuklulardan İlhanlılara ve Timur\'a (MS 651 – 1501)',
    from: -651, to: -1501, start: -800,
    not: 'Tarihler kesindir; nüfus tahminleri yaklaşıktır.', baskent: 'Kufe, Bağdat, Samarra, Rey, İsfahan, Tebriz',
    sahne: { kizak: false, araba: false, deve: true, giyim: 'cubbe' },
    dynasties: [
      { from: -651, to: -750, ad: 'Raşid halifeler ve Emevîler', renk: '#2a7a4a' }, { from: -750, to: -945, ad: 'Abbasî Halifeliği', renk: '#1a1a1a' },
      { from: -945, to: -1055, ad: 'Büveyhîler', renk: '#5a3a7a' }, { from: -1055, to: -1194, ad: 'Büyük Selçuklular', renk: '#2a5a9a' },
      { from: -1194, to: -1258, ad: 'Son Abbasîler ve Harezmşahlar', renk: '#4a4a4a' }, { from: -1258, to: -1335, ad: 'İlhanlılar', renk: '#8a5a1a' },
      { from: -1335, to: -1501, ad: 'Celayirliler, Timur, Karakoyunlu, Akkoyunlu', renk: '#6a4a2a' }
    ],
    rulers: [
      { from: -651, to: -661, ad: 'Raşid halifeler (Hz. Osman, Hz. Ali)', kisa: 'Hz. Ali', kim: 'Irak\'ta Kufe ve Basra ordugâh şehirleri kuruldu. Hz. Ali hilafet merkezini Kufe\'ye taşıdı; 661\'de orada şehit edildi.' },
      { from: -661, to: -750, ad: 'Emevî halifeleri; Irak valisi Haccac', kisa: 'Emevîler', kim: 'Başkent Şam. Kerbela (680) Şiîliğin doğuşunda dönüm noktası oldu. Haccac Irak\'ı sert bir el ile yönetti.' },
      { from: -750, to: -775, ad: 'Abbasîler: Ebu\'l-Abbas ve Mansur', kisa: 'Mansur', kim: 'Abbasî ihtilali Horasan\'dan başladı. Halife Mansur 762\'de Dicle kıyısında yuvarlak şehir Bağdat\'ı kurdurdu.' },
      { from: -775, to: -786, ad: 'Mehdi ve Hadi', kisa: 'Mehdi', kim: 'Bağdat hızla büyüdü; Çin\'den öğrenilen kâğıt yapımı yayıldı.' },
      { from: -786, to: -809, ad: 'Harun Reşid', kisa: 'Harun Reşid', kim: 'Binbir Gece Masalları\'nın halifesi. Şarlman\'a mekanik bir su saati ve bir fil hediye etti.' },
      { from: -809, to: -833, ad: 'Emin ve Me\'mun', kisa: 'Me\'mun', kim: 'Kardeşler arası iç savaştan sonra Me\'mun, Beytü\'l-Hikme\'de Yunan, Hint ve Fars eserlerini Arapçaya çevirtti.' },
      { from: -833, to: -945, ad: 'Mutasım ve Samarra halifeleri', kisa: 'Mutasım', kim: 'Mutasım Türk gulam askerlerden ordu kurdu ve başkenti Samarra\'ya taşıdı. Halifeler zamanla ordunun elinde kukla oldu.' },
      { from: -945, to: -1055, ad: 'Büveyhî emirleri', kisa: 'Büveyhîler', kim: 'Deylemli Şiî Büveyhîler Bağdat\'ı alıp halifeyi yalnızca dinî önder olarak bıraktı.' },
      { from: -1055, to: -1092, ad: 'Tuğrul Bey, Alparslan, Melikşah; vezir Nizamülmülk', kisa: 'Melikşah', kim: 'Selçuklular 1055\'te Bağdat\'a girdi; halife Tuğrul\'a "doğunun ve batının sultanı" unvanını verdi. Nizamiye medreseleri kuruldu; Ömer Hayyam takvimi düzeltti.' },
      { from: -1092, to: -1194, ad: 'Geç Selçuklular', kisa: 'Selçuklular', kim: 'Melikşah ile Nizamülmülk\'ün ölümünden sonra sultanlık bölündü; Sencer doğuda direndi, Irak Selçukluları zayıfladı.' },
      { from: -1194, to: -1258, ad: 'Son Abbasî halifeleri (Nasır, Mustasım)', kisa: 'Nasır', kim: 'Halife Nasır siyasi gücü bir süre geri kazandı. Doğuda Harezmşahlar Moğollara yenildi (1220).' },
      { from: -1258, to: -1265, ad: 'Hülagü Han', kisa: 'Hülagü', kim: 'Cengiz\'in torunu. 1258\'de Bağdat\'ı yağmaladı, son halifeyi öldürttü; Abbasî Halifeliği Bağdat\'ta sona erdi.' },
      { from: -1265, to: -1335, ad: 'İlhanlılar (Gazan Han, Olcaytu, Ebu Said)', kisa: 'Gazan Han', kim: 'Gazan Han 1295\'te Müslüman oldu; veziri Reşidüddin ilk "dünya tarihi"ni yazdı. Başkent Tebriz.' },
      { from: -1335, to: -1405, ad: 'Celayirliler ve Timur', kisa: 'Timur', kim: 'İlhanlıların çöküşünden sonra beylikler. Timur İran\'ı ve Irak\'ı aldı; Bağdat\'ı 1401\'de yıktı.' },
      { from: -1405, to: -1501, ad: 'Karakoyunlu ve Akkoyunlu Türkmenleri (Uzun Hasan)', kisa: 'Uzun Hasan', kim: 'Tebriz merkezli Türkmen devletleri. Akkoyunlu Uzun Hasan Otlukbeli\'nde Fatih\'e yenildi (1473).' }
    ],
    eras: [
      { from: -651, to: -750, puan: { eko: 4, ordu: 5, istikrar: 2 }, baskent: 'Kufe, sonra Şam\'a bağlı',
        gundem: 'Kadisiye (636) ve Nihavend (642) savaşlarından sonra Sasani İmparatorluğu yıkıldı. Irak ve İran İslam dünyasına katıldı; Farsça Arap harfleriyle yazılmaya başlandı. Kerbela\'da Hz. Hüseyin\'in şehit edilmesi (680) Şiîliği derinden şekillendirdi.',
        savas: 'Arap ordularının hızlı süvari baskınları; ordugâh şehirleri Basra ve Kufe askeri üs olarak kuruldu.',
        ekonomi: 'Sasani vergi sistemi ve sulama kanalları korunuyor. Irak\'ın "Sevad"ı (kara toprağı) halifeliğin tahıl ambarı.',
        din: 'İslam hızla yayılıyor ama Zerdüştler, Hristiyanlar ve Yahudiler cizye ödeyerek dinlerini sürdürüyor.',
        yasam: 'Basra\'da Arap dilbilgisi doğdu; Kufe yazısı Kuran\'ın ilk yazı tarzı.',
        bilgi: 'Arap dilbilgisinin ilk büyük kitabını, Basra\'da yaşayan Farsça konuşan Sibeveyhi yazdı.' },
      { from: -750, to: -945, puan: { eko: 5, ordu: 4, istikrar: 4 }, baskent: 'Bağdat (836-892 Samarra)',
        gundem: 'Bağdat dünyanın en büyük şehirlerinden biri: belki 500.000 kişi. Beytü\'l-Hikme\'de Öklid, Aristoteles, Galenos çevriliyor; Harezmî cebiri, Kindî optiği yazıyor. Kâğıt fabrikaları kitapları ucuzlattı.',
        savas: 'Horasanlı askerler, sonra Türk gulamlar. Bizans ile sınır savaşları (Amoryum seferi, 838).',
        ekonomi: 'Basra limanından Çin ve Hindistan\'a gemiler; çek (sakk) ile para havalesi. Bağdat çarşılarında kitapçılar sokağı.',
        din: 'Mutezile tartışmaları; büyük fıkıh mezheplerinin kurucuları bu dönemde yaşadı.',
        yasam: 'Hastaneler (bimaristan), hamamlar, kütüphaneler. Satranç, şiir meclisleri ve Binbir Gece Masalları\'nın Bağdat\'ı.',
        bilgi: '"Algoritma" kelimesi Harezmî\'nin adından, "cebir" (algebra) onun kitabının adından gelir.' },
      { from: -945, to: -1258, puan: { eko: 4, ordu: 4, istikrar: 2 }, baskent: 'Bağdat, Rey, İsfahan, Merv',
        gundem: 'Halifeler yalnızca dinî önder; gerçek güç önce Büveyhîlerin, 1055\'ten sonra Selçuklu sultanlarının. İran\'da Firdevsî Şehname\'yi yazdı (1010); İbn Sina Kanun\'u, Ömer Hayyam rubailerini.',
        savas: 'Selçuklu atlı okçuları; Malazgirt (1071) Anadolu\'nun kapısını açtı. 1220\'de Moğollar Harezm\'i yıktı.',
        ekonomi: 'Selçuklu kervansarayları ve medreseleri. İsfahan Mescid-i Cuması\'nın kubbeleri yükseliyor.',
        din: 'Nizamiye medreseleri Sünnî öğretiyi yaydı; Gazzâlî Bağdat\'ta ders verdi. Hasan Sabbah\'ın Alamut kalesi (1090).',
        yasam: 'Farsça edebiyat altın çağında. Çini ve sırlı seramik, halı dokuma.',
        bilgi: 'Ömer Hayyam\'ın 1079\'da hazırladığı Celali takvimi, bugün kullandığımız Gregoryen takviminden daha az hata yapar.' },
      { from: -1258, to: -1501, puan: { eko: 3, ordu: 4, istikrar: 2 }, baskent: 'Tebriz, Sultaniye, Semerkant\'a bağlı, sonra Tebriz',
        gundem: 'Hülagü Bağdat\'ı yağmaladı (1258): kütüphaneler Dicle\'ye atıldı. İlhanlılar sonra İslam\'ı kabul edip Sultaniye\'de dev kubbeli Olcaytu Türbesi\'ni yaptırdı. Timur seferleri bölgeyi yeniden yıktı.',
        savas: 'Moğol ordusu kuşatma mühendisleri (Çinli ve İranlı) kullandı. Timur yıktığı şehirlerde kafataslarından kuleler diktirdi.',
        ekonomi: 'Sulama kanalları bozuldu; Irak\'ın nüfusu yüzyıllarca toparlanamadı. Tebriz İpek Yolu\'nun büyük pazarı oldu.',
        din: 'Moğollar önce Budist ve Hristiyanlara da yakındı; Gazan Han\'dan sonra İslam. Sufî tarikatlar güçlendi (Safeviye Erdebil\'de).',
        yasam: 'Minyatür sanatı Çin etkisiyle gelişti. Hafız Şiraz\'da gazellerini yazdı (14. yy).',
        bilgi: 'Hülagü\'nün kurdurduğu Meraga rasathanesinde Nasîrüddin Tûsî\'nin geliştirdiği "Tûsî çifti", 250 yıl sonra Kopernik\'in kitabında da görülür.' }
    ],
    nufus: [[-651, 9], [-900, 12], [-1200, 11], [-1258, 9], [-1300, 7], [-1501, 7]],
    nufusNot: 'Bugünkü Irak ve İran için kaba tahminler.',
    dunyaOzet: { eko: 'Abbasî Bağdadı ve Tang-Song Çini dünyanın en büyük ekonomileri; Hint Okyanusu ticareti büyüyor.', askeri: 'Atlı okçular, Türk gulamlar, Moğol ordusu ve kuşatma makineleri.' },
    events: [
      { y: -680, t: 'Kerbela', k: 'm' }, { y: -750, t: 'Abbasî ihtilali', k: 'm' },
      { y: -762, t: 'Bağdat kuruldu', k: 'm' }, { y: -786, t: 'Harun Reşid halife oldu', k: 'm' }, { y: -830, t: 'Beytü\'l-Hikme', k: 'm' }, { y: -836, t: 'Başkent Samarra\'ya taşındı', k: 'm' },
      { y: -945, t: 'Büveyhîler Bağdat\'ta', k: 'm' }, { y: -1010, t: 'Firdevsî Şehname\'yi bitirdi', k: 'm' }, { y: -1055, t: 'Tuğrul Bey Bağdat\'a girdi', k: 'm' }, { y: -1071, t: 'Malazgirt', k: 'm' },
      { y: -1092, t: 'Melikşah ve Nizamülmülk öldü', k: 'm' }, { y: -1220, t: 'Moğollar Harezm\'i yıktı', k: 'm' }, { y: -1258, t: 'Hülagü Bağdat\'ı yağmaladı', k: 'm' }, { y: -1295, t: 'Gazan Han Müslüman oldu', k: 'm' },
      { y: -1401, t: 'Timur Bağdat\'ı yıktı', k: 'm' }, { y: -1473, t: 'Otlukbeli Savaşı', k: 'm' },
      { y: -800, t: 'Şarlman imparator oldu', k: 'w' }, { y: -1099, t: 'Haçlılar Kudüs\'te', k: 'w' }, { y: -1453, t: 'İstanbul\'un fethi', k: 'w' }
    ],
    world: [
      { from: -661, to: -750, yer: 'Şam', t: 'Emevî Halifeliği.' }, { from: -618, to: -907, yer: 'Çin', t: 'Tang hanedanı; Talas (751).' }, { from: -800, to: -1099, yer: 'Avrupa', t: 'Şarlman, Vikingler, Haçlılar.' },
      { from: -1206, to: -1368, yer: 'Moğolistan', t: 'Moğol İmparatorluğu.' }, { from: -1299, to: -1501, yer: 'Anadolu', t: 'Osmanlı Beyliği büyüyor.' }
    ],
    sites: [{ ad: 'BASRA', wx: 1000 }, { ad: 'KUFE', wx: 1900 }, { ad: 'KERBELA', wx: 2000 }, { ad: 'BAĞDAT', wx: 2750 }, { ad: 'SAMARRA', wx: 3150 }, { ad: 'MUSUL', wx: 3550 }, { ad: 'TEBRİZ', wx: 4800 }, { ad: 'REY', wx: 5300 }, { ad: 'İSFAHAN', wx: 6000 }, { ad: 'ŞİRAZ', wx: 6700 }, { ad: 'NİŞABUR', wx: 7500 }],
    monuments: [
      { id: 'bagdat', ad: 'Bağdat: Yuvarlak Şehir', yer: 'Bağdat, Irak', wx: 2750, type: 'city', wall: true, b: 320, n: 32, hk: 0.3, start: -762, end: -766, vol: 1e5 },
      { id: 'malviye', ad: 'Samarra Ulu Camii ve Malviye Minaresi', yer: 'Samarra, Irak', wx: 3150, type: 'ziggurat', b: 60, h: 52, kat: 6, renk: '#c49a62', start: -848, end: -852, vol: 6e4 },
      { id: 'isfahancuma', ad: 'İsfahan Mescid-i Cuması', yer: 'İsfahan, İran', wx: 6000, type: 'mosque', b: 120, h: 40, minare: 2, kubbe: '#c8b48a', renk: '#d8c49c', start: -1086, end: -1088, vol: 8e4 },
      { id: 'olcaytu', ad: 'Olcaytu Türbesi', yer: 'Sultaniye, İran', wx: 5000, type: 'mosque', b: 70, h: 50, minare: 2, kubbe: '#3a8ab0', renk: '#c8b08a', start: -1302, end: -1312, vol: 7e4 }
    ],
    hizli: [{ ad: 'Kerbela', y: -680 }, { ad: 'Bağdat kuruldu', y: -762 }, { ad: 'Harun Reşid', y: -800 }, { ad: 'Beytü\'l-Hikme', y: -830 }, { ad: 'Şehname', y: -1010 }, { ad: 'Selçuklular', y: -1055 }, { ad: 'Hülagü', y: -1258 }, { ad: 'Gazan Han', y: -1300 }, { ad: 'Timur', y: -1401 }],
    bilgi: {
      bagdat: { ikon: '🌙', yaptiran: 'Halife Mansur', donem: '762-766', mimar: 'Haccac b. Ertat ve astrologlar (Nevbaht, Maşallah)', sure: '4 yıl, ~100.000 işçi', neden: 'Abbasîlerin yeni başkenti: Dicle kıyısında, kervan yollarının kavşağı.', onem: 'Abbasî altın çağının merkezi; 9. yüzyılda dünyanın en büyük şehirlerinden.', teknik: [['Çap', '~2,7 km'], ['Kapı', '4 (Kufe, Basra, Horasan, Şam)'], ['Sur', 'Çift sur ve hendek']], nasil: 'Tam daire planlı: ortada halifenin sarayı ve ulu cami, çevresinde halkalar hâlinde mahalleler.', bugun: 'Yuvarlak şehirden iz kalmadı; Bağdat ~9 milyon nüfuslu Irak başkenti.', ilginc: 'İnşaata başlama günü astrologlara sorularak seçildi: 30 Temmuz 762.' },
      malviye: { ikon: '🌀', yaptiran: 'Halife Mütevekkil', donem: '848-852', mimar: '—', sure: '~4 yıl', neden: 'Samarra Ulu Camii\'nin minaresi.', onem: 'Yapıldığında dünyanın en büyük camisi; sarmal minare benzersiz.', teknik: [['Yükseklik', '52 m'], ['Cami alanı', '~38.000 m²']], nasil: 'Pişmiş tuğladan, dışından sarmal bir rampa ile tepeye çıkılan konik kule. Eski zigguratlardan esinlendiği düşünülür.', bugun: 'UNESCO Dünya Mirası (2007, tehlike altında).', ilginc: 'Söylenceye göre halife tepeye eşeğine binerek çıkardı.' },
      isfahancuma: { ikon: '🕌', yaptiran: 'Melikşah\'ın veziri Nizamülmülk (güney kubbesi)', donem: '1086-1088 kubbeler; 8. yy\'dan 20. yy\'a eklemeler', mimar: '—', sure: '1.200 yıl boyunca eklemeler', neden: 'İsfahan\'ın ulu camisi.', onem: 'Dört eyvanlı İran cami planının ilk örneği.', teknik: [['Alan', '~20.000 m²'], ['Eyvan', '4']], nasil: 'Avlunun dört yanında dört büyük eyvan; tuğla kubbeler.', bugun: 'UNESCO Dünya Mirası (2012).', ilginc: 'Nizamülmülk ile rakibi Tacülmülk iki karşı uca birer kubbe yaptırdı: kubbeler 900 yıldır "yarışıyor".' },
      olcaytu: { ikon: '🔵', yaptiran: 'İlhanlı hükümdarı Olcaytu', donem: '1302-1312', mimar: '—', sure: '~10 yıl', neden: 'Olcaytu\'nun türbesi.', onem: 'Dünyanın en büyük tuğla kubbelerinden; Tac Mahal\'in uzak atası sayılır.', teknik: [['Kubbe yüksekliği', '~50 m'], ['Kubbe çapı', '~25 m']], nasil: 'Çift kabuklu kubbe; turkuaz sırlı tuğla kaplama.', bugun: 'UNESCO Dünya Mirası (2005).', ilginc: 'Olcaytu önce Hristiyan olarak vaftiz edilmişti; sonra Budizme, Sünnîliğe ve Şiîliğe geçti.' }
    },
    ulke: [
      { ad: 'Genel bakış', ikon: '🧭', html: '<p>Arap fethinden sonra Irak <b>Abbasî Halifeliği</b>nin kalbi oldu; <b>Bağdat</b> bilim, çeviri ve ticaretin merkeziydi. İran Farsçasını ve kültürünü korudu, İslam\'ın içinde yeni bir Fars edebiyatı doğdu. 11. yüzyılda <b>Selçuklu Türkleri</b>, 13. yüzyılda <b>Moğollar</b> geldi.</p>' },
      { ad: 'Bilim', ikon: '🔭', html: '<ul><li><b>Harezmî</b>: cebir, algoritma</li><li><b>Râzî</b>: çiçek ve kızamığı ayırt etti</li><li><b>İbn Sina</b>: Tıbbın Kanunu (Avrupa\'da 600 yıl okutuldu)</li><li><b>Bîrûnî</b>: Dünya\'nın yarıçapını ölçtü</li><li><b>Ömer Hayyam</b>: takvim ve kübik denklemler</li><li><b>Tûsî</b>: Meraga rasathanesi</li></ul>' },
      { ad: 'Edebiyat', ikon: '📜', html: '<ul><li>Binbir Gece Masalları (Bağdat çevresi)</li><li>Firdevsî: Şehname (~50.000 beyit)</li><li>Ömer Hayyam: Rubailer</li><li>Mevlana (Belh doğumlu), Sadi, Hafız</li></ul>' }
    ]
  });

  // ================= 4. SAFEVİLERDEN BUGÜNE =================
  window.PLACES.push({
    id: 'mezopotamya-modern', sira: 4, modern: true, kisa: 'Safevîlerden bugüne', aralikAd: 'MS 1501 – bugün',
    baslik: 'Şah İsmail · Şah Abbas\'ın İsfahan\'ı · Osmanlı Irak\'ı · petrol · devrim',
    ulkeAlt: 'Safevî İran\'ı ve Osmanlı Irak\'ından bugünkü İran ve Irak\'a (MS 1501 – bugün)',
    from: -1501, to: -2026, start: -1600,
    not: 'Tarihler kesindir. Irak 1534-1918 arasında Osmanlı yönetimindeydi; hükümdar şeridi İran\'ı izler.', baskent: 'Tebriz, Kazvin, İsfahan, Tahran; Irak\'ta Bağdat',
    sahne: { kizak: false, deve: [-1501, -1930], buhar: -1900, oto: -1925, ucak: -1930, giyim: [[-1501, 'cubbe'], [-1925, 'modern']] },
    dynasties: [
      { from: -1501, to: -1736, ad: 'Safevîler', renk: '#2a7a6a' }, { from: -1736, to: -1789, ad: 'Afşarlar ve Zendler', renk: '#6a5a2a' },
      { from: -1789, to: -1925, ad: 'Kaçarlar', renk: '#7a3a3a' }, { from: -1925, to: -1979, ad: 'Pehlevîler', renk: '#2a4a8a' }, { from: -1979, to: -2026, ad: 'İran İslam Cumhuriyeti', renk: '#2a6a3a' }
    ],
    rulers: [
      { from: -1501, to: -1524, ad: 'Şah İsmail', kisa: 'Şah İsmail', kim: '14 yaşında Tebriz\'de şah ilan edildi; Şiîliği devlet dini yaptı. Çaldıran\'da Yavuz Sultan Selim\'e yenildi (1514). Türkçe şiirler yazdı (Hatayî).' },
      { from: -1524, to: -1576, ad: 'I. Tahmasb', kisa: 'Tahmasb', kim: 'Kanuni\'yle savaştı; Bağdat 1534\'te Osmanlı\'ya geçti. Amasya Antlaşması (1555). Başkenti Kazvin\'e taşıdı.' },
      { from: -1576, to: -1588, ad: 'II. İsmail ve Muhammed Hüdabende', kisa: 'Hüdabende', kim: 'İç karışıklık ve Osmanlı savaşları.' },
      { from: -1588, to: -1629, ad: 'I. Abbas (Büyük Şah Abbas)', kisa: 'Şah Abbas', kim: 'Ordusunu yeniden kurdu, Portekizlileri Hürmüz\'den kovdu ve İsfahan\'ı "dünyanın yarısı" yaptı.' },
      { from: -1629, to: -1722, ad: 'Son Safevîler', kisa: 'Safevîler', kim: 'Kasr-ı Şirin Antlaşması (1639) bugünkü İran-Irak sınırının temelini attı. Devlet yavaşça zayıfladı.' },
      { from: -1722, to: -1736, ad: 'Afgan istilası ve Tahmasb Kulu (Nadir)', kisa: 'Nadir', kim: 'Afganlar İsfahan\'ı aldı (1722). Afşar boyundan Nadir onları kovdu.' },
      { from: -1736, to: -1747, ad: 'Nadir Şah', kisa: 'Nadir Şah', kim: '"İran\'ın Napolyon\'u". Delhi\'yi yağmalayıp Tavus Tahtı\'nı ve Kûh-i Nûr elmasını getirdi (1739).' },
      { from: -1747, to: -1789, ad: 'Zend hanedanı (Kerim Han)', kisa: 'Kerim Han', kim: 'Kendine şah değil "halkın vekili" diyen Kerim Han Şiraz\'ı başkent yaptı.' },
      { from: -1789, to: -1797, ad: 'Ağa Muhammed Han Kaçar', kisa: 'Ağa Muhammed', kim: 'Türkmen Kaçar boyunun önderi; Tahran\'ı başkent yaptı.' },
      { from: -1797, to: -1834, ad: 'Feth Ali Şah', kisa: 'Feth Ali Şah', kim: 'Rusya\'ya iki savaşta Kafkasya\'yı kaybetti (Gülistan 1813, Türkmençay 1828).' },
      { from: -1834, to: -1848, ad: 'Muhammed Şah', kisa: 'Muhammed Şah', kim: 'Herat için İngiltere ile çatıştı.' },
      { from: -1848, to: -1896, ad: 'Nasıreddin Şah', kisa: 'Nasıreddin', kim: 'Avrupa\'yı gezen ilk İran şahı; telgraf ve fotoğraf geldi. Tütün imtiyazına karşı halk boykotu (1891).' },
      { from: -1896, to: -1925, ad: 'Son Kaçarlar ve Meşrutiyet', kisa: 'Meşrutiyet', kim: '1906 Meşrutiyet Devrimi: ilk meclis ve anayasa. 1908\'de Mescid-i Süleyman\'da petrol bulundu.' },
      { from: -1925, to: -1941, ad: 'Rıza Şah Pehlevi', kisa: 'Rıza Şah', kim: 'Kazak tugayı subayıyken darbe yaptı; ülkenin adını resmen "İran" yaptı (1935), demiryolu ve üniversite kurdu.' },
      { from: -1941, to: -1979, ad: 'Muhammed Rıza Şah Pehlevi', kisa: 'Şah', kim: 'Musaddık\'ın petrolü millîleştirmesinden sonra 1953 darbesiyle güçlendi. "Beyaz Devrim" reformları; 1979\'da devrimle düştü.' },
      { from: -1979, to: -1989, ad: 'Ayetullah Humeyni', kisa: 'Humeyni', kim: 'İslam Cumhuriyeti\'nin kurucusu ve ilk dinî lideri. İran-Irak Savaşı (1980-1988).' },
      { from: -1989, to: -2026, ad: 'Ayetullah Ali Hamaney', kisa: 'Hamaney', kim: 'İslam Cumhuriyeti\'nin ikinci dinî lideri. Nükleer program yaptırımlar ve bölgesel çatışmalarla gündemde.' }
    ],
    eras: [
      { from: -1501, to: -1736, puan: { eko: 4, ordu: 4, istikrar: 3 }, baskent: 'Tebriz, Kazvin, İsfahan',
        gundem: 'Safevîler Şiîliği İran\'ın kimliği yaptı; Osmanlı ile Irak için 150 yıl savaşıldı. Şah Abbas İsfahan\'ı yeniden kurdu: Nakş-ı Cihan Meydanı, Şah Camii, Ali Kapu, Otuz Üç Göz Köprüsü. Avrupalı tüccarlar ipek için sıraya giriyor.',
        savas: 'Kızılbaş Türkmen süvarisi; Çaldıran\'daki yenilgiden sonra Şah Abbas Gürcü ve Ermeni gulamlardan tüfekli birlikler ve topçu kurdu.',
        ekonomi: 'İpek ihracatı devlet tekelinde; Ermeni tüccarlar Yeni Culfa\'dan Amsterdam\'a ağ kurdu. Halı dokumacılığı sanata dönüştü.',
        din: 'On iki imam Şiîliği resmî din. Kerbela, Necef (Irak) ve Meşhed kutsal şehirler.',
        yasam: 'Kahvehaneler, minyatür, hat ve çini. İsfahan\'da 1.000\'den fazla kervansaray ve 160 cami olduğu yazılır.',
        bilgi: 'İsfahan için söylenen "İsfahan nısf-ı cihan" ("İsfahan dünyanın yarısıdır") sözü Şah Abbas döneminden kalma.' },
      { from: -1736, to: -1925, puan: { eko: 3, ordu: 3, istikrar: 2 }, baskent: 'Meşhed, Şiraz, Tahran',
        gundem: 'Nadir Şah\'ın parlak ama kısa seferlerinden sonra Kaçarlar Tahran\'dan yönetti. Rusya kuzeyde Kafkasya\'yı, İngiltere güneyde Hindistan yolunu kontrol ediyor: İran "Büyük Oyun"un ortasında. Irak Osmanlı\'nın Bağdat, Musul ve Basra vilayetleri.',
        savas: 'Rus savaşlarında modern topçuya yenilgiler. Abbas Mirza Avrupa usulü ordu kurmaya çalıştı.',
        ekonomi: 'Avrupalılara imtiyazlar: telgraf, banka, tütün. 1908\'de petrol bulundu; Anglo-Persian Oil Company (bugünkü BP) kuruldu.',
        din: 'Ulema güçlü bir toplumsal güç; 1891 tütün boykotu bir fetvayla başladı.',
        yasam: 'İlk gazeteler, Darülfünun okulu (1851), fotoğraf. Kaçar portreleri ve uzun bıyıklı şahlar.',
        bilgi: 'Nasıreddin Şah bir fotoğraf meraklısıydı; Gülistan Sarayı\'nda kendi çektiği binlerce fotoğraf saklanıyor.' },
      { from: -1925, to: -1979, puan: { eko: 5, ordu: 4, istikrar: 3 }, baskent: 'Tahran; Irak\'ta Bağdat',
        gundem: 'Pehlevîler hızlı bir modernleşme yürüttü: Trans-İran demiryolu, üniversiteler, kadınların oy hakkı (1963). Irak 1932\'de bağımsız krallık, 1958\'de cumhuriyet oldu. Petrol iki ülkenin de kaderini belirliyor.',
        savas: 'İkinci Dünya Savaşı\'nda İngiltere ve SSCB İran\'ı işgal etti (1941). Soğuk Savaş\'ta İran ABD\'nin müttefiki.',
        ekonomi: 'Musaddık petrolü millîleştirdi (1951); 1953 darbesiyle devrildi. 1973 petrol krizi İran\'ı çok zenginleştirdi.',
        din: 'Laikleştirme politikaları ulemayla çatışma yarattı; Humeyni 1964\'te sürgüne gönderildi.',
        yasam: 'Tahran\'da sinemalar, bulvarlar, Batı tarzı giyim; köylerde ise yoksulluk sürüyor.',
        bilgi: 'Rıza Şah 1935\'te yabancı ülkelerden yazışmalarda "Persia" yerine "Iran" adının kullanılmasını istedi; İranlılar ülkelerine zaten bin yıllardır "İran" diyordu.' },
      { from: -1979, to: -2026, puan: { eko: 3, ordu: 4, istikrar: 2 }, baskent: 'Tahran; Irak\'ta Bağdat',
        gundem: '1979 devrimiyle İslam Cumhuriyeti kuruldu. İran-Irak Savaşı sekiz yıl sürdü (1980-1988). Irak\'ta 1991 Körfez Savaşı, 2003 ABD işgali ve Saddam\'ın düşüşü, 2014-2017 IŞİD dönemi yaşandı. İran nükleer programı nedeniyle ağır yaptırımlar altında.',
        savas: 'İran-Irak Savaşı\'nda ~500.000\'den fazla ölü, kimyasal silahlar. Bugün füze ve insansız hava aracı programları.',
        ekonomi: 'Petrol ve doğalgaz; İran dünyanın en büyük doğalgaz rezervlerinden birine sahip. Yaptırımlar ve yüksek enflasyon.',
        din: 'İran\'da velayet-i fakih sistemi. Irak\'ta Şiî çoğunluk, Sünnî Araplar ve Kürtler.',
        yasam: 'Genç ve eğitimli bir nüfus; üniversite öğrencilerinin yarıdan fazlası kadın. Nevruz hâlâ en büyük bayram.',
        bilgi: 'İran\'da yılbaşı Nevruz\'dur (21 Mart civarı) ve resmî takvim güneş yılına dayanan Hicrî Şemsî takvimidir.' }
    ],
    nufus: [[-1501, 7], [-1700, 9], [-1800, 8], [-1900, 12], [-1950, 22], [-1979, 50], [-2000, 88], [-2026, 138]],
    nufusNot: 'Bugünkü İran (~92 milyon) ve Irak (~46 milyon) toplamı; eski rakamlar kaba tahmindir.',
    dunyaOzet: { eko: 'Önce Osmanlı, Safevî ve Babür; sonra Avrupa sanayisi ve petrol çağı.', askeri: 'Tüfek ve topçu; 20. yüzyılda tank, uçak ve füze.' },
    events: [
      { y: -1501, t: 'Şah İsmail Tebriz\'de şah oldu', k: 'm' }, { y: -1514, t: 'Çaldıran Savaşı', k: 'm' }, { y: -1534, t: 'Bağdat Osmanlı\'ya geçti', k: 'm' }, { y: -1598, t: 'Başkent İsfahan', k: 'm' },
      { y: -1622, t: 'Hürmüz Portekizlilerden alındı', k: 'm' }, { y: -1639, t: 'Kasr-ı Şirin Antlaşması', k: 'm' }, { y: -1722, t: 'Afganlar İsfahan\'ı aldı', k: 'm' }, { y: -1739, t: 'Nadir Şah Delhi\'de', k: 'm' },
      { y: -1828, t: 'Türkmençay Antlaşması', k: 'm' }, { y: -1906, t: 'İran Meşrutiyeti', k: 'm' }, { y: -1908, t: 'İran\'da petrol bulundu', k: 'm' }, { y: -1932, t: 'Irak bağımsız oldu', k: 'm' },
      { y: -1953, t: 'Musaddık devrildi', k: 'm' }, { y: -1979, t: 'İran Devrimi', k: 'm' }, { y: -1980, t: 'İran-Irak Savaşı başladı', k: 'm' }, { y: -2003, t: 'Irak işgali', k: 'm' },
      { y: -1683, t: 'Viyana Kuşatması', k: 'w' }, { y: -1789, t: 'Fransız İhtilali', k: 'w' }, { y: -1945, t: 'İkinci Dünya Savaşı bitti', k: 'w' }
    ],
    world: [
      { from: -1501, to: -1918, yer: 'Osmanlı', t: 'Komşu ve rakip; Irak\'ı yönetti.' }, { from: -1526, to: -1857, yer: 'Hindistan', t: 'Babür İmparatorluğu.' },
      { from: -1700, to: -1917, yer: 'Rusya', t: 'Çarlık; Kafkasya\'ya ilerleyiş.' }, { from: -1945, to: -1991, yer: 'Dünya', t: 'Soğuk Savaş.' }
    ],
    sites: [{ ad: 'BASRA', wx: 1000 }, { ad: 'NECEF', wx: 1900 }, { ad: 'KERBELA', wx: 2000 }, { ad: 'BAĞDAT', wx: 2750 }, { ad: 'ERBİL', wx: 3700 }, { ad: 'TEBRİZ', wx: 4800 }, { ad: 'TAHRAN', wx: 5300 }, { ad: 'İSFAHAN', wx: 6000 }, { ad: 'ŞİRAZ', wx: 6700 }, { ad: 'MEŞHED', wx: 7700 }],
    monuments: [
      { id: 'sahcamii', ad: 'Şah Camii ve Nakş-ı Cihan Meydanı', yer: 'İsfahan, İran', wx: 6100, type: 'mosque', b: 150, h: 52, minare: 2, kubbe: '#3a8ab8', renk: '#d8c8a0', start: -1611, end: -1629, vol: 1.2e5 },
      { id: 'tahran', ad: 'Tahran', yer: 'İran', wx: 5300, type: 'modcity', b: 420, h: 95, n: 44, minareli: true, start: -1950, end: -2020, vol: 8e4 },
      { id: 'azadi', ad: 'Azadi Kulesi', yer: 'Tahran', wx: 5100, type: 'tower', b: 30, h: 45, start: -1970, end: -1971, vol: 2e4 },
      { id: 'bagdatmodern', ad: 'Modern Bağdat', yer: 'Irak', wx: 2900, type: 'modcity', b: 360, h: 70, n: 36, minareli: true, start: -1950, end: -2010, vol: 7e4 }
    ],
    hizli: [{ ad: 'Çaldıran', y: -1514 }, { ad: 'Şah Abbas', y: -1600 }, { ad: 'Şah Camii', y: -1629 }, { ad: 'Nadir Şah', y: -1739 }, { ad: 'Meşrutiyet', y: -1906 }, { ad: 'Petrol', y: -1908 }, { ad: 'Rıza Şah', y: -1935 }, { ad: 'Devrim', y: -1979 }, { ad: 'İran-Irak Savaşı', y: -1985 }, { ad: 'Bugün', y: -2026 }],
    bilgi: {
      sahcamii: { ikon: '🕌', yaptiran: 'I. Abbas (Şah Abbas)', donem: '1611-1629', mimar: 'Üstad Ali Ekber İsfahanî', sure: '~18 yıl', neden: 'Yeni başkentin ulu camisi; meydanın güney ucunda.', onem: 'Safevî mimarisinin doruğu; yedi renkli çinilerle kaplı.', teknik: [['Kubbe yüksekliği', '~52 m'], ['Çini', '~475.000 parça'], ['Meydan', '560 × 160 m']], nasil: 'Meydana dik giriş, ama cami Kıble\'ye bakmak için 45 derece döndürüldü; ziyaretçi dönüşü fark etmez.', bugun: 'UNESCO Dünya Mirası (1979), "İmam Camii" adıyla.', ilginc: 'Kubbenin altında ayağınızı vurunca ses yedi kez yankılanır.' },
      tahran: { ikon: '🏙️', yaptiran: '—', donem: '1786\'dan başkent', mimar: '—', sure: '—', neden: 'Kaçarların başkenti.', onem: 'İran\'ın en büyük şehri (~9 milyon, metropol ~15 milyon).', teknik: [['Nüfus (1900)', '~250.000'], ['Rakım', '1.100-1.700 m']], nasil: 'Elburz Dağları\'nın eteğinde, kuzeyden güneye eğimli.', bugun: 'İran\'ın başkenti.', ilginc: 'Kuzeyden güneye 600 metre yükseklik farkı var: kuzey mahalleleri hem serin hem zengin.' },
      azadi: { ikon: '🗼', yaptiran: 'Muhammed Rıza Şah', donem: '1971', mimar: 'Hüseyin Emanat', sure: '~1 yıl', neden: 'Pers İmparatorluğu\'nun 2.500. yılı kutlamaları.', onem: 'Tahran\'ın simgesi; 1979\'dan beri "Özgürlük" kulesi.', teknik: [['Yükseklik', '45 m'], ['Taş', '~8.000 mermer blok']], nasil: 'Sasani kemerleri ve İslami tonozları birleştiren tasarım.', bugun: 'Müze ve meydan.', ilginc: 'Mimarı Hüseyin Emanat yarışmayı 24 yaşında kazandı.' },
      bagdatmodern: { ikon: '🌆', yaptiran: '—', donem: '20. yy', mimar: '—', sure: '—', neden: 'Irak\'ın başkenti.', onem: 'Arap dünyasının en büyük şehirlerinden.', teknik: [['Nüfus', '~9 milyon']], nasil: 'Dicle iki yakayı ayırır: Kerh ve Rusafa.', bugun: 'Savaşlardan sonra yeniden yapılanma sürüyor.', ilginc: 'Bağdat\'ın Mütenebbi Caddesi 1.000 yıldır kitapçılar sokağı.' }
    },
    ulke: [
      { ad: 'Genel bakış', ikon: '🧭', html: '<p><b>Safevîler</b> bugünkü İran\'ın sınırlarını ve Şiî kimliğini oluşturdu. Irak dört yüzyıl <b>Osmanlı</b> eyaleti oldu, 1932\'de bağımsızlığını kazandı. 20. yüzyılda <b>petrol</b> iki ülkeyi de dünyanın gündemine taşıdı; ardından devrimler ve savaşlar geldi.</p>' },
      { ad: 'Bugün', ikon: '🗺️', html: '<ul><li><b>İran</b>: ~92 milyon; Farsça, Azerice, Kürtçe, Arapça, Belucice</li><li><b>Irak</b>: ~46 milyon; Arapça ve Kürtçe; kuzeyde Kürdistan Bölgesel Yönetimi</li><li>UNESCO mirası: Persepolis, Babil, İsfahan, Bam, Samarra</li></ul>' }
    ]
  });

  window.BOLGE_TASI('mezopotamya');

  // ================= ORTAK VERİLER =================
  window.MISIR = {
    coords: {
      uruk: [31.3236, 45.6364], urziggurat: [30.9627, 46.1031], babil: [32.5363, 44.4209], ninova: [36.3594, 43.1526], etemenanki: [32.5363, 44.4204], pasargad: [30.1939, 53.1673],
      persepolis: [29.9353, 52.8916], kisra: [33.0936, 44.5807], bagdat: [33.3152, 44.3661], malviye: [34.2058, 43.8794], isfahancuma: [32.6697, 51.6855], olcaytu: [36.4344, 48.7967],
      sahcamii: [32.6543, 51.6778], tahran: [35.6892, 51.389], azadi: [35.6997, 51.3381], bagdatmodern: [33.3128, 44.3615]
    },
    wiki: {
      uruk: 'Uruk', urziggurat: 'Ziggurat of Ur', babil: 'Babylon', ninova: 'Nineveh', etemenanki: 'Etemenanki', pasargad: 'Tomb of Cyrus', persepolis: 'Persepolis', kisra: 'Taq Kasra',
      bagdat: 'Round city of Baghdad', malviye: 'Great Mosque of Samarra', isfahancuma: 'Jameh Mosque of Isfahan', olcaytu: 'Dome of Soltaniyeh', sahcamii: 'Shah Mosque (Isfahan)', tahran: 'Tehran', azadi: 'Azadi Tower', bagdatmodern: 'Baghdad'
    },
    bilgi: {}, alt: {},
    kureAdlari: [[29.5, 50.0, 'BASRA KÖRFEZİ', 'deniz', 3.0], [41.5, 51.0, 'HAZAR DENİZİ', 'deniz', 3.0], [33, 44.5, 'MEZOPOTAMYA', 'misir', 3.4], [32.5, 54, 'İRAN', 'bolge', 3.0],
      [34, 47.5, 'ZAGROS', 'kucuk', 4.5], [36.2, 52.5, 'ELBURZ', 'kucuk', 5], [34.8, 42.6, 'Fırat', 'nehir', 5.5], [35.4, 43.6, 'Dicle', 'nehir', 5.5]],
    sehirler: [
      { ad: 'Ur', ll: [30.9627, 46.1031], from: 3800, to: -400, b: [[2112, 2004]], not: 'Sümer şehri; Ur III başkenti. Tevrat\'ta Hz. İbrahim\'in memleketi.' },
      { ad: 'Uruk', ll: [31.3236, 45.6364], from: 4500, to: -300, not: 'Dünyanın ilk büyük şehri; yazının doğduğu yer.' },
      { ad: 'Babil', ll: [32.5363, 44.4209], from: 2300, to: -200, b: [[1894, 1595], [626, 539]], not: 'Hammurabi\'nin ve Nebukadnezar\'ın başkenti.' },
      { ad: 'Ninova', ll: [36.3594, 43.1526], from: 6000, to: 612, b: [[705, 612]], not: 'Asur\'un son başkenti.' },
      { ad: 'Susa', ll: [32.1894, 48.2575], from: 4200, to: -1300, b: [[2700, 640], [521, 330]], not: 'Elam\'ın ve Pers\'in başkenti.' },
      { ad: 'Persepolis', ll: [29.9353, 52.8916], from: 518, to: 316, b: [[518, 330]], not: 'Ahamenişlerin tören başkenti.' },
      { ad: 'Ktesifon', ll: [33.0936, 44.5807], from: 120, to: -900, b: [[58, -637]], not: 'Partların ve Sasanilerin başkenti.' },
      { ad: 'Bağdat', ll: [33.3152, 44.3661], from: -762, to: -2026, b: [[-762, -1258], [-1921, -2026]], not: 'Abbasî başkenti; bugün Irak\'ın başkenti.' },
      { ad: 'İsfahan', ll: [32.6546, 51.668], from: 500, to: -2026, b: [[-1051, -1118], [-1598, -1722]], not: 'Selçuklu ve Safevî başkenti.' },
      { ad: 'Tebriz', ll: [38.08, 46.2919], from: -800, to: -2026, b: [[-1265, -1335], [-1501, -1555]], not: 'İlhanlı ve ilk Safevî başkenti.' },
      { ad: 'Tahran', ll: [35.6892, 51.389], from: -1200, to: -2026, b: [[-1786, -2026]], not: 'İran\'ın başkenti.' },
      { ad: 'Meşhed', ll: [36.2605, 59.6168], from: -818, to: -2026, b: [[-1736, -1747]], not: 'İmam Rıza türbesi; Nadir Şah\'ın başkenti.' },
      { ad: 'Şiraz', ll: [29.5918, 52.5837], from: -693, to: -2026, b: [[-1750, -1794]], not: 'Hafız\'ın ve Sadi\'nin şehri; Zend başkenti.' },
      { ad: 'Basra', ll: [30.5085, 47.7804], from: -636, to: -2026, not: 'Körfez\'in büyük limanı.' }
    ],
    nil: { ikon: '🌊', title: 'Dicle ve Fırat', sub: 'Mezopotamya\'yı doğuran iki nehir', foto: 'Tigris', tabs: [{ ad: '🌊 Nehirler', html: '<ul class="hap"><li><b>Fırat</b> (~2.800 km) ve <b>Dicle</b> (~1.850 km) Türkiye\'nin doğusundan doğar, Irak\'ta birleşip <b>Şattülarap</b> adıyla Basra Körfezi\'ne dökülür.</li><li>Nil\'in aksine taşkınları düzensiz ve yıkıcıdır: tarım için baraj ve kanal gerekir. Bu yüzden Mezopotamya\'da ilk büyük sulama düzenleri ve onları yöneten devletler doğdu.</li><li>Tuzlanma eski Sümer tarlalarını zamanla verimsiz yaptı; buğday yerine tuza dayanıklı arpa ekilmeye başlandı.</li><li>Bugün Türkiye\'deki barajlar (GAP) ve kuraklık nedeniyle Irak\'a gelen su azaldı.</li></ul>' }] },
    gokyuzu: {
      gunes: { ikon: '☀️', title: 'Güneş · Mezopotamya ve İran inançlarında', sub: 'Şamaş\'tan Mitra\'ya', tabs: [{ ad: '☀️ Güneş', html: '<ul class="hap"><li><b>Utu / Şamaş:</b> Sümer ve Babil\'de güneş ve adalet tanrısı; Hammurabi yasaları ondan alırken gösterilir.</li><li><b>Mitra:</b> İran\'da antlaşmaların ve ışığın tanrısı.</li><li><b>Nevruz:</b> ilkbahar ekinoksunda yeni yıl.</li></ul>' }] },
      ay: { ikon: '🌙', title: 'Ay · Mezopotamya inançlarında', sub: 'Ur\'un tanrısı Nanna', tabs: [{ ad: '🌙 Ay', html: '<ul class="hap"><li><b>Nanna / Sin:</b> Ur\'un ve Harran\'ın ay tanrısı.</li><li>Babilli astronomlar Ay tutulmalarını önceden hesaplayabiliyordu (saros döngüsü).</li><li>Haftanın 7 gün olması Ay\'ın evrelerine dayanan Babil geleneğinden gelir.</li></ul>' }] }
    },
    simgeler: [
      { id: 'mz-yazi', ad: 'Çivi yazısı', ikon: '✍️', wiki: 'Cuneiform', git: { place: 'mezopotamya-sumer', y: 3300 }, ozet: 'İnsanlığın ilk yazısı.', hap: ['MÖ ~3300, Uruk.', '3.000 yıldan uzun kullanıldı.'] },
      { id: 'mz-ziggurat', ad: 'Ur Zigguratı', ikon: '🛕', wiki: 'Ziggurat of Ur', git: { place: 'mezopotamya-sumer', y: 2100, id: 'urziggurat' }, ozet: 'Ay tanrısının kerpiç dağı.', hap: ['MÖ ~2100.', 'Taban 64 × 46 m.'] },
      { id: 'mz-hammurabi', ad: 'Hammurabi Kanunları', ikon: '⚖️', wiki: 'Code of Hammurabi', git: { place: 'mezopotamya-sumer', y: 1754 }, ozet: '282 maddelik yasa taşı.', hap: ['MÖ ~1754.', 'Louvre\'da.'] },
      { id: 'mz-istar', ad: 'İştar Kapısı', ikon: '🦁', wiki: 'Ishtar Gate', git: { place: 'mezopotamya-pers', y: 575 }, ozet: 'Mavi sırlı tuğlalı Babil kapısı.', hap: ['MÖ ~575.', 'Berlin\'de yeniden kuruldu.'] },
      { id: 'mz-persepolis', ad: 'Persepolis', ikon: '🏛️', wiki: 'Persepolis', git: { place: 'mezopotamya-pers', y: 480, id: 'persepolis' }, ozet: 'Pers krallarının tören şehri.', hap: ['MÖ 518\'den.', 'MÖ 330\'da yandı.'] },
      { id: 'mz-bagdat', ad: 'Abbasî Bağdadı', ikon: '🌙', wiki: 'House of Wisdom', git: { place: 'mezopotamya-islam', y: -830, id: 'bagdat' }, ozet: 'Bilgelik Evi ve çeviri hareketi.', hap: ['762\'de kuruldu.', 'Cebir burada yazıldı.'] },
      { id: 'mz-isfahan', ad: 'İsfahan', ikon: '🕌', wiki: 'Naqsh-e Jahan Square', git: { place: 'mezopotamya-modern', y: -1629, id: 'sahcamii' }, ozet: '"Dünyanın yarısı".', hap: ['Şah Abbas, 1598.', 'Dünyanın en büyük meydanlarından.'] },
      { id: 'mz-sehname', ad: 'Şehname', ikon: '📜', wiki: 'Shahnameh', git: { place: 'mezopotamya-islam', y: -1010 }, ozet: 'Firdevsî\'nin İran destanı.', hap: ['1010.', '~50.000 beyit.'] }
    ],
    bugun: '<p>Bölge bugün iki ülkeden oluşuyor: <b>İran</b> (~92 milyon, başkent Tahran) ve <b>Irak</b> (~46 milyon, başkent Bağdat).</p><ul class="hap"><li><b>Petrol:</b> ikisi de dünyanın en büyük petrol rezervlerine sahip ülkeler arasında.</li><li><b>Diller:</b> Farsça, Arapça, Kürtçe, Azerice, Türkmence, Aramice (Süryani topluluklar).</li><li><b>UNESCO:</b> İran\'da 28, Irak\'ta 6 Dünya Mirası alanı.</li><li><b>Nevruz</b> İran\'da ve Iraklı Kürtler arasında en büyük bayram.</li></ul>'
  };

  window.SEHIR_BILGI = {
    'Babil': { bugun: 'Hille yakını, Irak', kurulus: 'MÖ ~2300', wiki: 'Babylon', onem: 'Antik dünyanın en ünlü şehri; "Babil" adı Akadca "tanrının kapısı" (Bab-ilim) demek.', ilginc: 'Babil\'in asma bahçelerinin yeri hâlâ bulunamadı; belki de hiç var olmadılar ya da Ninova\'daydılar.' },
    'Bağdat': { bugun: 'Bağdat, Irak', kurulus: '762 (Halife Mansur)', wiki: 'Baghdad', onem: 'Abbasî altın çağının merkezi; bugün Irak\'ın başkenti.', ilginc: 'Kuruluşunda adı "Medinetüsselam" yani "Barış Şehri" idi.' },
    'İsfahan': { bugun: 'İsfahan, İran', kurulus: 'Antik çağ (Aspadana)', wiki: 'Isfahan', onem: 'Selçuklu ve Safevî başkenti; İran mimarisinin vitrini.', ilginc: 'Otuz Üç Göz Köprüsü\'nün altındaki çay bahçeleri yüzyıllardır şiir ve sohbet yeri.' },
    'Persepolis': { bugun: 'Fars eyaleti, İran', kurulus: 'MÖ 518 (I. Darius)', wiki: 'Persepolis', onem: 'Pers kralları Nevruz\'u burada kutlardı.', ilginc: 'Duvarlarında 1800\'lerin Avrupalı gezginlerinin kazıdığı imzalar var: Stanley de onlardan biri.' }
  };
  window.KULTUR = { tanrilar: [], olumler: [], roller: [], mumyalama: '', ic: { eslesme: {}, sahneler: {} }, bilim: { genel: '', cag: {} } };
  window.SINIRLAR = [];

  window.OLAYLAR = [
    { id: 'gaugamela', tur: 'savas', ad: 'Gaugamela Savaşı', y: 331, ll: [36.56, 43.44], onem: 5, wiki: 'Battle of Gaugamela', taraflar: ['Makedonya (Büyük İskender)', 'Pers (III. Darius)'], kazanan: 'Makedonya', kuvvetler: '~47.000 Makedon; Pers ordusu çok daha kalabalık (tahminler 50.000-250.000).', sonuc: 'Pers İmparatorluğu yıkıldı; İskender Babil\'e ve Persepolis\'e girdi.' },
    { id: 'carrhae', tur: 'savas', ad: 'Carrhae (Harran) Savaşı', y: 53, ll: [36.87, 39.03], onem: 4, wiki: 'Battle of Carrhae', taraflar: ['Partlar (Surena)', 'Roma (Crassus)'], kazanan: 'Partlar', kuvvetler: '~10.000 Part atlısı; ~40.000 Romalı.', sonuc: 'Crassus öldü; Roma\'nın doğuya ilerleyişi durdu.' },
    { id: 'edessa260', tur: 'savas', ad: 'Edessa Savaşı', y: -260, ll: [37.16, 38.79], onem: 4, wiki: 'Battle of Edessa', taraflar: ['Sasaniler (I. Şapur)', 'Roma (Valerianus)'], kazanan: 'Sasaniler', sonuc: 'Roma imparatoru ilk kez esir düştü; Nakş-ı Rüstem kabartmasında diz çökmüş gösterilir.' },
    { id: 'kadisiye', tur: 'savas', ad: 'Kadisiye Savaşı', y: -636, ll: [31.83, 44.47], onem: 5, wiki: 'Battle of al-Qadisiyyah', taraflar: ['Raşid Halifeliği (Sa\'d b. Ebi Vakkas)', 'Sasaniler (Rüstem Ferruhzad)'], kazanan: 'Raşid Halifeliği', sonuc: 'Irak Müslümanların eline geçti; Ktesifon düştü.' },
    { id: 'bagdat1258', tur: 'savas', ad: 'Bağdat Kuşatması', y: -1258, ll: [33.31, 44.37], onem: 5, wiki: 'Siege of Baghdad (1258)', taraflar: ['Moğollar (Hülagü)', 'Abbasî Halifeliği (Mustasım)'], kazanan: 'Moğollar', sonuc: 'Şehir yağmalandı, halife öldürüldü; İslam dünyasında bir çağ kapandı.' },
    { id: 'iraniraksavasi', tur: 'savas', ad: 'İran-Irak Savaşı', y: -1980, ll: [30.43, 48.2], onem: 5, wiki: 'Iran–Iraq War', taraflar: ['Irak (Saddam Hüseyin)', 'İran (Humeyni)'], sonuc: '1980-1988; sınırlar değişmeden bitti. Yüz binlerce kişi öldü.' },
    { id: 'kasrisirin', tur: 'antlasma', ad: 'Kasr-ı Şirin Antlaşması', y: -1639, ll: [34.52, 45.58], onem: 4, wiki: 'Treaty of Zuhab', taraflar: ['Osmanlı (IV. Murad)', 'Safevîler (I. Safi)'], sonuc: 'Bağdat Osmanlı\'da kaldı; bugünkü Türkiye-İran ve Irak-İran sınırının temeli.' },
    { id: 'yazi2', tur: 'olay', ad: 'Hammurabi Kanunları', y: 1754, ll: [32.54, 44.42], onem: 5, wiki: 'Code of Hammurabi', sonuc: '282 madde; "göze göz" ilkesi ve toplumsal sınıflara göre cezalar.' },
    { id: 'kiroslindiri', tur: 'olay', ad: 'Kiros Silindiri', y: 539, ll: [32.54, 44.42], onem: 4, wiki: 'Cyrus Cylinder', sonuc: 'Kiros\'un Babil\'e girişini anlatan kil silindir; sürgünlerin evlerine dönmesine izin verildiği yazılı. British Museum\'da.' },
    { id: 'beytulhikme', tur: 'olay', ad: 'Beytü\'l-Hikme', y: -830, ll: [33.33, 44.4], onem: 5, wiki: 'House of Wisdom', sonuc: 'Yunanca, Süryanice, Sanskritçe ve Farsça eserler Arapçaya çevrildi; cebir ve algoritma doğdu.' },
    { id: 'iranpetrol', tur: 'olay', ad: 'Orta Doğu\'da ilk petrol', y: -1908, ll: [31.99, 49.29], onem: 4, wiki: 'Masjed Soleyman', sonuc: 'Mescid-i Süleyman\'da bulunan petrol Anglo-Persian Oil Company\'nin (BP) doğuşuna yol açtı.' },
    { id: 'iranbalasi', tur: 'olay', ad: 'İran Devrimi', y: -1979, ll: [35.7, 51.42], onem: 5, wiki: 'Iranian Revolution', sonuc: 'Şah ülkeyi terk etti; İslam Cumhuriyeti kuruldu.' },
    { id: 'bam2003', tur: 'afet', alt: 'deprem', ad: 'Bam depremi', y: -2003, ll: [29.1, 58.36], onem: 3, wiki: '2003 Bam earthquake', sonuc: '~26.000 ölü; dünyanın en büyük kerpiç yapısı Arg-e Bam büyük hasar gördü.' }
  ];

  window.ULKE_SAYFA = window.ULKE_SAYFA || {};
  window.ULKE_SAYFA.mezopotamya = {
    id: 'mezopotamya', ad: 'Mezopotamya ve İran', ikon: '🦁', kw: ['mezopotamya', 'irak', 'iran', 'sümer', 'babil', 'asur', 'pers', 'persepolis', 'bağdat', 'abbasi', 'safevi', 'isfahan', 'hammurabi'],
    altBaslik: 'MÖ ~5000 – bugün · yazıdan Bağdat\'a, Persepolis\'ten İsfahan\'a', kapakWiki: 'Persepolis', kapakAd: 'Persepolis', merkez: [33.5, 47.5], merkezZ: 4.6,
    ozet: ['<b>Mezopotamya</b> (bugünkü Irak) ve <b>İran</b>, uygarlığın en eski merkezlerindendir. Yazı, şehir, yasa ve okul burada doğdu.', 'Asur, Babil ve Pers imparatorlukları, sonra Abbasî Bağdadı dünyanın merkezi oldu. Safevîler bugünkü İran\'ı biçimlendirdi; 20. yüzyılda petrol, devrimler ve savaşlar bölgenin kaderini belirledi.'],
    bilgiKutusu: [['Tarih', 'MÖ ~5000 – bugün'], ['Önemli başkentler', 'Uruk, Ur, Babil, Ninova, Persepolis, Ktesifon, Bağdat, İsfahan, Tahran'], ['Diller', 'Sümerce, Akadca, Aramice, Farsça, Arapça, Kürtçe, Türkçe'], ['Bugün', 'İran ve Irak (~138 milyon)']],
    donemler: { 'mezopotamya-sumer': 'İlk şehirler, yazı, Sargon ve Hammurabi.', 'mezopotamya-pers': 'Asur, Nebukadnezar\'ın Babil\'i, Pers, Part ve Sasani imparatorlukları.', 'mezopotamya-islam': 'Abbasî Bağdadı, Selçuklular ve Moğollar.', 'mezopotamya-modern': 'Safevîler, Kaçarlar, petrol çağı ve bugün.' },
    kultur: [{ baslik: 'Diller', ikon: '🗣️', html: '<p>Sümerce (yalıtık dil), Akadca, Aramice; İran\'da Eski Farsça, Pehlevice ve bugünkü Farsça. İslam\'dan sonra Arapça; Kürtçe, Azerice ve Türkmence.</p>' }, { baslik: 'Din', ikon: '🔥', html: '<p>Mezopotamya tanrıları; Zerdüştlük ve Maniheizm; Yahudilik ve Doğu Hristiyanlığı; İslam (İran\'da Şiî, Irak\'ta Şiî çoğunluk ve Sünnî); Ezidiler ve Mandenler.</p>' }],
    figurler: [
      { id: 'urziggurat', ad: 'Ur Zigguratı', tur: 'yapı', wiki: 'Ziggurat of Ur', ll: [30.9627, 46.1031], z: 70, yapim: 'MÖ ~2100', kim: 'Ur-Nammu', durum: 'harabe', durumYazi: 'Alt basamak onarıldı.', nerede: 'Nasiriye, Irak', metin: 'En iyi korunmuş ziggurat.', git: { place: 'mezopotamya-sumer', y: 2100, id: 'urziggurat' } },
      { id: 'persepolis', ad: 'Persepolis', tur: 'yapı', wiki: 'Persepolis', ll: [29.9353, 52.8916], z: 75, yapim: 'MÖ 518-450', kim: 'Darius, Kserkses', durum: 'harabe', durumYazi: 'Ören yeri.', nerede: 'Şiraz, İran', metin: 'Pers krallarının tören sarayı.', git: { place: 'mezopotamya-pers', y: 480, id: 'persepolis' } },
      { id: 'sahcamii', ad: 'Şah Camii', tur: 'yapı', wiki: 'Shah Mosque (Isfahan)', ll: [32.6543, 51.6778], z: 80, yapim: '1611-1629', kim: 'Şah Abbas', durum: 'ayakta', durumYazi: 'Ayakta.', nerede: 'İsfahan', metin: 'Safevî çinilerinin doruğu.', git: { place: 'mezopotamya-modern', y: -1629, id: 'sahcamii' } }
    ],
    kisiler: [
      { ad: 'Gılgamış', wiki: 'Gilgamesh', yil: 'MÖ ~2700', ozet: 'Uruk kralı, destan kahramanı.', y: 2700 }, { ad: 'Akadlı Sargon', wiki: 'Sargon of Akkad', yil: 'MÖ ~2334-2279', ozet: 'İlk imparatorluk.', y: 2334 },
      { ad: 'Hammurabi', wiki: 'Hammurabi', yil: 'MÖ ~1810-1750', ozet: 'Yasa koyucu Babil kralı.', y: 1754 }, { ad: 'Asurbanipal', wiki: 'Ashurbanipal', yil: 'MÖ 7. yy', ozet: 'Ninova kütüphanesi.', y: 650 },
      { ad: 'Büyük Kiros', wiki: 'Cyrus the Great', yil: 'MÖ ~600-530', ozet: 'Pers İmparatorluğu\'nun kurucusu.', y: 539 }, { ad: 'I. Darius', wiki: 'Darius the Great', yil: 'MÖ 550-486', ozet: 'Persepolis ve Kral Yolu.', y: 500 },
      { ad: 'Harun Reşid', wiki: 'Harun al-Rashid', yil: '~763-809', ozet: 'Binbir Gece\'nin halifesi.', y: -800 }, { ad: 'Harezmî', wiki: 'Al-Khwarizmi', yil: '~780-850', ozet: 'Cebirin babası.', y: -820 },
      { ad: 'İbn Sina', wiki: 'Avicenna', yil: '980-1037', ozet: 'Tıbbın Kanunu.', y: -1020 }, { ad: 'Ömer Hayyam', wiki: 'Omar Khayyam', yil: '1048-1131', ozet: 'Şair, matematikçi.', y: -1079 },
      { ad: 'Şah Abbas', wiki: 'Abbas the Great', yil: '1571-1629', ozet: 'İsfahan\'ın kurucusu.', y: -1600 }, { ad: 'Nadir Şah', wiki: 'Nader Shah', yil: '1688-1747', ozet: 'Delhi\'yi alan şah.', y: -1739 }
    ],
    biliyorMuydunuz: ['Bir dakikanın 60 saniye olması Sümerlerden kalma.', 'Satranç İran\'dan geçerek dünyaya yayıldı; "şah mat" Farsça "şah çaresiz kaldı" demek.', 'Babilliler 3.800 yıl önce Pisagor teoremini biliyordu (Plimpton 322 tableti).', 'Pers posta sistemi için Herodot\'un yazdığı "ne kar ne yağmur onları yolundan alıkoyar" sözü bugün New York postanesinin duvarında yazılı.']
  };
})();
