// Bölge seçimi. Adres: ?bolge=misir | anadolu | avrupa. Parametre yoksa "Tüm Dünya": bütün bölgeler birlikte yüklenir.
// Her bölge kendi veri dosyalarını yükler; sahne, küre ve arayüz motoru ortaktır.
// Veri dosyaları bölgenin ortak bilgilerini window.MISIR adlı nesneye yazar (tarihsel ad; "bölge verisi" demek).
'use strict';
(() => {
  const ORTAK = ['data/dunya-veri.js?v=28'];
  const B = {
    misir: {
      id: 'misir', ad: 'Mısır', ikon: '🏺', merkez: [27.2, 31.0], merkezZ: 6, isaret: [27, 31],
      hakkinda: 'Bu çağda Mısır', simgeAd: "Mısır'ın simgeleri", bugunAd: 'Bugünkü Mısır', antikAd: 'Antik Mısır',
      uc3: true, kultur: true,
      dosyalar: ['data/misir-erken.js?v=28', 'data/misir-eski-krallik.js?v=28', 'data/misir-bilgi.js?v=28', 'data/misir-orta-krallik.js?v=28',
        'data/misir-yeni-krallik.js?v=28', 'data/misir-gec-donem.js?v=28', 'data/misir-genel.js?v=28', 'data/misir-kultur.js?v=28',
        'data/misir-sinirlar.js?v=28', 'data/olaylar.js?v=28', 'data/misir-sehir-bilgi.js?v=28', ...ORTAK,
        'data/misir-ms-roma.js?v=1', 'data/misir-ms-islam.js?v=1', 'data/misir-ms-modern.js?v=1', 'data/misir-ms-dunya.js?v=1', 'data/ulke-sayfalari.js?v=3']
    },
    anadolu: {
      id: 'anadolu', ad: 'Anadolu', ikon: '🏛️', merkez: [39.0, 34.5], merkezZ: 5.5, isaret: [39, 35],
      hakkinda: 'Bu çağda Anadolu', yonelme: "Anadolu'ya", hukumdar: 'hükümdar', simgeGiris: "Anadolu'yu Anadolu yapan yerler, halklar ve eserler.", simgeAlt: '12.000 yıllık Anadolu mirası · bugünkü Türkiye', simgeAd: "Anadolu'nun simgeleri", bugunAd: 'Bugünkü Türkiye', antikAd: 'Anadolu',
      uc3: false, kultur: false,
      tum: { kisa: 'Tüm Anadolu tarihi', baslik: 'Anadolu · Bütün çağlar (MÖ 9600 – bugün)', start: 1300,
        hizli: [{ ad: 'Göbekli Tepe', y: 9500 }, { ad: 'Çatalhöyük', y: 7000 }, { ad: 'Kaniş', y: 1900 }, { ad: 'Hititler', y: 1600 }, { ad: 'Kadeş', y: 1274 }, { ad: 'Truva', y: 1180 },
          { ad: 'Midas', y: 720 }, { ad: 'İlk sikke', y: 620 }, { ad: 'Kroisos', y: 550 }, { ad: 'İskender', y: 334 }, { ad: 'Bergama', y: 180 }, { ad: 'Konstantinopolis', y: -330 }, { ad: 'Ayasofya', y: -537 },
          { ad: 'Malazgirt', y: -1071 }, { ad: 'Mevlana', y: -1260 }, { ad: 'İstanbul fethi', y: -1453 }, { ad: 'Süleymaniye', y: -1557 }, { ad: 'Cumhuriyet', y: -1923 }, { ad: 'Bugün', y: -2026 }] },
      mevsimler: { ahet: ['🌧️ Bahar', 'İlkbahar yağmurları: tarlalar yeşerir'], peret: ['🌱 Ekim', 'Güz ekimi: buğday ve arpa toprağa atılır'], semu: ['🌾 Hasat', 'Yaz hasadı: buğday biçilir, harman yapılır'] },
      sahne: { tema: 'anadolu', kum1: '#9fb3bd', kum2: '#b8b48c', dag: 2.3, plato: '#cdb97e', platoKenar: '#ae9a62', yakin: '#cbb27a', yol: 'rgba(222,205,160,0.6)',
        nehirYazi: 'KIZILIRMAK · Anadolu\'nun en uzun nehri', nehirAd: 'Anadolu\'nun nehirleri', agac: 'karisik', taskin: false, nehirRenk: [70, 128, 150] },
      dosyalar: ['data/anadolu/anadolu-antik.js?v=1', 'data/anadolu/anadolu-klasik.js?v=1', 'data/anadolu/anadolu-ortacag.js?v=1', 'data/anadolu/anadolu-osmanli.js?v=1',
        'data/anadolu/anadolu-genel.js?v=1', 'data/anadolu/anadolu-dunya.js?v=1', ...ORTAK, 'data/anadolu/anadolu-sayfa.js?v=1']
    }
  };
  B.avrupa = {
    id: 'avrupa', ad: 'Avrupa', ikon: '🏰', merkez: [49.5, 12.0], merkezZ: 3.2, isaret: [49, 10],
    hakkinda: 'Bu çağda Avrupa', yonelme: "Avrupa'ya", hukumdar: 'önder', simgeGiris: "Avrupa'yı Avrupa yapan yerler, olaylar ve fikirler.", simgeAlt: '5.000 yıllık Avrupa mirası · bugünkü Avrupa',
    simgeAd: "Avrupa'nın simgeleri", bugunAd: 'Bugünkü Avrupa', antikAd: 'Avrupa', uc3: false, kultur: false,
    tum: { kisa: 'Tüm Avrupa tarihi', baslik: 'Avrupa · Bütün çağlar (MÖ 3000 – bugün)', start: 432,
      hizli: [{ ad: 'Stonehenge', y: 2500 }, { ad: 'Knossos', y: 1700 }, { ad: 'Parthenon', y: 440 }, { ad: 'Sezar', y: 44 }, { ad: 'Kolezyum', y: -80 }, { ad: 'Roma\'nın düşüşü', y: -476 }, { ad: 'Şarlman', y: -800 },
        { ad: 'Notre-Dame', y: -1250 }, { ad: 'Kara Ölüm', y: -1348 }, { ad: 'Matbaa', y: -1450 }, { ad: 'Rönesans', y: -1504 }, { ad: 'Reform', y: -1517 }, { ad: 'Versay', y: -1690 }, { ad: 'Fransız İhtilali', y: -1789 },
        { ad: 'Napolyon', y: -1805 }, { ad: 'Eyfel', y: -1889 }, { ad: '1. Dünya Savaşı', y: -1916 }, { ad: '2. Dünya Savaşı', y: -1942 }, { ad: 'Berlin Duvarı', y: -1989 }, { ad: 'Bugün', y: -2026 }] },
    mevsimler: { ahet: ['🌧️ Bahar', 'İlkbahar yağmurları'], peret: ['🌱 Ekim', 'Güz ekimi'], semu: ['🌾 Hasat', 'Yaz hasadı'] },
    sahne: { tema: 'avrupa', kum1: '#8fa6b8', kum2: '#9fb88a', dag: 2.0, plato: '#a9c27e', platoKenar: '#86a05e', yakin: '#9fbf74', yol: 'rgba(200,190,160,0.6)',
      nehirYazi: 'REN · TUNA · SEN · TİBER: Avrupa\'nın nehirleri', nehirAd: 'Avrupa\'nın nehirleri', agac: 'karisik', taskin: false, nehirRenk: [60, 110, 150] },
    dosyalar: ['data/avrupa/avrupa-antik.js?v=1', 'data/avrupa/avrupa-ortacag.js?v=1', 'data/avrupa/avrupa-modern.js?v=1', 'data/avrupa/avrupa-genel.js?v=1', ...ORTAK]
  };
  // ---------- Afrika, Asya ve Doğu Avrupa bölgeleri: her biri tek veri dosyası (data/bolgeler/<id>.js) ----------
  const MEV_KUZEY = { ahet: ['🌧️ Bahar', 'İlkbahar yağmurları'], peret: ['🌱 Ekim', 'Ekim zamanı'], semu: ['🌾 Hasat', 'Hasat zamanı'] };
  const MEV_MUSON = { ahet: ['🌧️ Muson', 'Muson yağmurları: tarlalar su dolar'], peret: ['🌱 Ekim', 'Pirinç fideleri dikilir'], semu: ['🌾 Hasat', 'Kuru mevsimde hasat'] };
  const MEV_SAHEL = { ahet: ['🌧️ Yağmurlar', 'Yağmur mevsimi: darı ve sorgum ekilir'], peret: ['🌱 Büyüme', 'Ekinler büyür, nehir taşar'], semu: ['🌾 Hasat', 'Kuru mevsim: hasat ve kervanlar'] };
  const yeni = (id, ad, ikon, kita, o) => ({
    id, ad, ikon, kita, uc3: false, kultur: false, hakkinda: 'Bu çağda ' + ad, antikAd: ad, hukumdar: 'hükümdar',
    simgeGiris: `${o.ilgi} simgeleri: yerler, olaylar ve eserler.`, simgeAlt: o.simgeAlt, simgeAd: `${o.ilgi} simgeleri`, mevsimler: MEV_KUZEY,
    dosyalar: [`data/bolgeler/${id}.js?v=2`, ...ORTAK], ...o
  });
  Object.assign(B, {
    mezopotamya: yeni('mezopotamya', 'Mezopotamya ve İran', '🦁', 'asya', {
      ilgi: 'Mezopotamya ve İran\'ın', yonelme: 'Mezopotamya\'ya', bugunAd: 'Bugünkü Irak ve İran', simgeAlt: '7.000 yıllık Mezopotamya ve İran mirası',
      merkez: [33.5, 47.5], merkezZ: 4.6, isaret: [33, 45],
      tum: { kisa: 'Tüm Mezopotamya ve İran tarihi', baslik: 'Mezopotamya ve İran · Bütün çağlar (MÖ 5000 – bugün)', start: 1792,
        hizli: [{ ad: 'Uruk', y: 3300 }, { ad: 'Sargon', y: 2334 }, { ad: 'Hammurabi', y: 1754 }, { ad: 'Asur', y: 700 }, { ad: 'Babil', y: 575 }, { ad: 'Kiros', y: 539 }, { ad: 'Persepolis', y: 500 }, { ad: 'Sasaniler', y: -260 },
          { ad: 'Bağdat', y: -800 }, { ad: 'Moğollar', y: -1258 }, { ad: 'Safeviler', y: -1600 }, { ad: 'Bugün', y: -2026 }] },
      sahne: { tema: 'misir', kum1: '#9fb5b8', kum2: '#d2bd8c', dag: 1.6, plato: '#d8c08a', platoKenar: '#b89e64', yakin: '#d0b67c', yol: 'rgba(226,206,160,0.6)',
        nehirYazi: 'DİCLE · FIRAT: "iki nehir arası"', nehirAd: 'Dicle ve Fırat', agac: 'palm', taskin: true, nehirRenk: [72, 128, 140] } }),
    levant: yeni('levant', 'Arabistan ve Levant', '🕌', 'asya', {
      ilgi: 'Arabistan ve Levant\'ın', yonelme: 'Arabistan\'a', bugunAd: 'Bugünkü Arabistan ve Doğu Akdeniz', simgeAlt: 'Fenike\'den Mekke\'ye, Petra\'dan Dubai\'ye',
      merkez: [27.5, 40.5], merkezZ: 4.2, isaret: [24, 42],
      tum: { kisa: 'Tüm Arabistan ve Levant tarihi', baslik: 'Arabistan ve Levant · Bütün çağlar (MÖ 3000 – bugün)', start: -632,
        hizli: [{ ad: 'Biblos', y: 2500 }, { ad: 'Alfabe', y: 1050 }, { ad: 'Kudüs', y: 960 }, { ad: 'Petra', y: 50 }, { ad: 'Palmira', y: -270 }, { ad: 'Hz. Muhammed', y: -622 }, { ad: 'Emevîler', y: -700 },
          { ad: 'Haçlılar', y: -1099 }, { ad: 'Selahaddin', y: -1187 }, { ad: 'Osmanlı', y: -1517 }, { ad: 'Petrol', y: -1938 }, { ad: 'Bugün', y: -2026 }] },
      sahne: { tema: 'misir', kum1: '#a9bcc0', kum2: '#e0c48e', dag: 1.8, plato: '#e3c78e', platoKenar: '#c4a468', yakin: '#dcc08a', yol: 'rgba(232,212,168,0.6)',
        nehirYazi: 'ÜRDÜN NEHRİ · KIZILDENİZ KIYISI', nehirAd: 'Ürdün Nehri ve vahalar', agac: 'palm', taskin: false, nehirRenk: [70, 140, 160] } }),
    ortaasya: yeni('ortaasya', 'Bozkır ve Orta Asya', '🐎', 'asya', {
      ilgi: 'Bozkırın ve Orta Asya\'nın', yonelme: 'Orta Asya\'ya', bugunAd: 'Bugünkü Orta Asya ve Moğolistan', simgeAlt: 'Atlı göçebeler, İpek Yolu şehirleri, Türkler ve Moğollar', hukumdar: 'kağan',
      merkez: [44, 72], merkezZ: 3.4, isaret: [45, 75],
      tum: { kisa: 'Tüm Orta Asya tarihi', baslik: 'Bozkır ve Orta Asya · Bütün çağlar (MÖ 3500 – bugün)', start: -552,
        hizli: [{ ad: 'Atın evcilleşmesi', y: 3500 }, { ad: 'İskitler', y: 600 }, { ad: 'Hunlar', y: 200 }, { ad: 'Göktürkler', y: -552 }, { ad: 'Orhun Yazıtları', y: -732 }, { ad: 'Talas', y: -751 },
          { ad: 'Karahanlılar', y: -1000 }, { ad: 'Cengiz Han', y: -1206 }, { ad: 'Timur', y: -1400 }, { ad: 'Uluğ Bey', y: -1428 }, { ad: 'Rus işgali', y: -1868 }, { ad: 'Bağımsızlık', y: -1991 }] },
      mevsimler: { ahet: ['🌱 Bahar göçü', 'Sürüler yaylaya çıkar'], peret: ['☀️ Yayla', 'Yazın otlaklar'], semu: ['❄️ Kışlak', 'Sürüler kışlağa iner'] },
      sahne: { tema: 'anadolu', kum1: '#9fb4c4', kum2: '#c4c08a', dag: 2.6, plato: '#c8c07e', platoKenar: '#a8a060', yakin: '#bcb874', yol: 'rgba(210,200,150,0.6)',
        nehirYazi: 'SEYHUN · CEYHUN: bozkırın iki büyük nehri', nehirAd: 'Seyhun ve Ceyhun', agac: 'karisik', taskin: false, nehirRenk: [80, 130, 150] } }),
    hindistan: yeni('hindistan', 'Hindistan', '🐘', 'asya', {
      ilgi: 'Hindistan\'ın', yonelme: 'Hindistan\'a', bugunAd: 'Bugünkü Hint Alt Kıtası', simgeAlt: '5.000 yıllık Hint mirası · bugünkü Hindistan, Pakistan, Bangladeş, Sri Lanka', hukumdar: 'hükümdar',
      merkez: [23, 79], merkezZ: 4.0, isaret: [23, 78], mevsimler: MEV_MUSON,
      tum: { kisa: 'Tüm Hindistan tarihi', baslik: 'Hindistan · Bütün çağlar (MÖ 3300 – bugün)', start: -1632,
        hizli: [{ ad: 'Harappa', y: 2500 }, { ad: 'Vedalar', y: 1200 }, { ad: 'Buda', y: 500 }, { ad: 'Aşoka', y: 260 }, { ad: 'Guptalar', y: -400 }, { ad: 'Delhi Sultanlığı', y: -1206 },
          { ad: 'Babür', y: -1526 }, { ad: 'Ekber', y: -1580 }, { ad: 'Tac Mahal', y: -1648 }, { ad: 'Britanya', y: -1858 }, { ad: 'Bağımsızlık', y: -1947 }, { ad: 'Bugün', y: -2026 }] },
      sahne: { tema: 'misir', kum1: '#a8c0c4', kum2: '#c8b87e', dag: 1.8, plato: '#b8b46e', platoKenar: '#98944e', yakin: '#a8b062', yol: 'rgba(214,190,140,0.6)',
        nehirYazi: 'GANJ · İNDUS: kutsal nehirler', nehirAd: 'Ganj ve İndus', agac: 'palm', taskin: true, nehirRenk: [90, 130, 120] } }),
    cin: yeni('cin', 'Çin', '🐉', 'asya', {
      ilgi: 'Çin\'in', yonelme: 'Çin\'e', bugunAd: 'Bugünkü Çin', simgeAlt: '4.000 yıllık Çin mirası', hukumdar: 'imparator',
      merkez: [33.5, 110], merkezZ: 3.6, isaret: [34, 110], mevsimler: MEV_MUSON,
      tum: { kisa: 'Tüm Çin tarihi', baslik: 'Çin · Bütün çağlar (MÖ 2070 – bugün)', start: 221,
        hizli: [{ ad: 'Şang', y: 1300 }, { ad: 'Konfüçyüs', y: 500 }, { ad: 'Qin Shi Huang', y: 221 }, { ad: 'Han', y: 100 }, { ad: 'Tang', y: -700 }, { ad: 'Song', y: -1100 }, { ad: 'Kubilay', y: -1279 },
          { ad: 'Ming', y: -1420 }, { ad: 'Qing', y: -1700 }, { ad: 'Afyon Savaşı', y: -1840 }, { ad: 'Halk Cumhuriyeti', y: -1949 }, { ad: 'Bugün', y: -2026 }] },
      sahne: { tema: 'anadolu', kum1: '#9fb8c4', kum2: '#b4c08a', dag: 2.8, plato: '#a8b878', platoKenar: '#86985a', yakin: '#9cb46c', yol: 'rgba(200,186,150,0.6)',
        nehirYazi: 'SARI IRMAK · YANGTZE', nehirAd: 'Sarı Irmak ve Yangtze', agac: 'karisik', taskin: true, nehirRenk: [150, 130, 80] } }),
    japonya: yeni('japonya', 'Japonya ve Kore', '⛩️', 'asya', {
      ilgi: 'Japonya ve Kore\'nin', yonelme: 'Japonya\'ya', bugunAd: 'Bugünkü Japonya ve Kore', simgeAlt: 'Tapınaklar, samuraylar, Hangıl ve teknoloji', hukumdar: 'hükümdar',
      merkez: [36.5, 133], merkezZ: 4.4, isaret: [36.5, 136],
      tum: { kisa: 'Tüm Japonya ve Kore tarihi', baslik: 'Japonya ve Kore · Bütün çağlar (MÖ 1000 – bugün)', start: -1600,
        hizli: [{ ad: 'Gojoseon', y: 500 }, { ad: 'Yayoi', y: 300 }, { ad: 'Üç Krallık', y: -400 }, { ad: 'Nara', y: -752 }, { ad: 'Heian', y: -1000 }, { ad: 'Samuraylar', y: -1192 }, { ad: 'Hangıl', y: -1446 },
          { ad: 'Sekigahara', y: -1600 }, { ad: 'Meiji', y: -1868 }, { ad: 'Hiroşima', y: -1945 }, { ad: 'Kore Savaşı', y: -1950 }, { ad: 'Bugün', y: -2026 }] },
      sahne: { tema: 'anadolu', kum1: '#9cb8c8', kum2: '#a8c08c', dag: 3.0, plato: '#9cbc7a', platoKenar: '#7c9c5a', yakin: '#94b870', yol: 'rgba(196,186,156,0.6)',
        nehirYazi: 'JAPON DENİZİ · KORE BOĞAZI', nehirAd: 'Denizler ve nehirler', agac: 'karisik', taskin: false, nehirRenk: [60, 110, 150] } }),
    gdasya: yeni('gdasya', 'Güneydoğu Asya', '🛕', 'asya', {
      ilgi: 'Güneydoğu Asya\'nın', yonelme: 'Güneydoğu Asya\'ya', bugunAd: 'Bugünkü Güneydoğu Asya', simgeAlt: 'Angkor, Borobudur, baharat adaları', hukumdar: 'kral',
      merkez: [10, 108], merkezZ: 3.8, isaret: [12, 104], mevsimler: MEV_MUSON,
      tum: { kisa: 'Tüm Güneydoğu Asya tarihi', baslik: 'Güneydoğu Asya · Bütün çağlar (MÖ 1000 – bugün)', start: -1150,
        hizli: [{ ad: 'Dong Son', y: 500 }, { ad: 'Funan', y: -250 }, { ad: 'Srivicaya', y: -700 }, { ad: 'Borobudur', y: -825 }, { ad: 'Angkor Wat', y: -1150 }, { ad: 'Majapahit', y: -1350 },
          { ad: 'Malakka', y: -1450 }, { ad: 'Portekizliler', y: -1511 }, { ad: 'Hollandalılar', y: -1619 }, { ad: 'Bağımsızlık', y: -1945 }, { ad: 'Vietnam Savaşı', y: -1968 }, { ad: 'Bugün', y: -2026 }] },
      sahne: { tema: 'misir', kum1: '#9cc4c4', kum2: '#9cc080', dag: 2.2, plato: '#8cb868', platoKenar: '#6c984a', yakin: '#84b462', yol: 'rgba(200,184,140,0.6)',
        nehirYazi: 'MEKONG · İRAVADİ', nehirAd: 'Mekong ve İravadi', agac: 'palm', taskin: true, nehirRenk: [110, 120, 90] } }),
    batiafrika: yeni('batiafrika', 'Kuzey ve Batı Afrika', '🐪', 'afrika', {
      ilgi: 'Kuzey ve Batı Afrika\'nın', yonelme: 'Batı Afrika\'ya', bugunAd: 'Bugünkü Kuzey ve Batı Afrika', simgeAlt: 'Kartaca\'dan Timbuktu\'ya, Sahra kervanları', hukumdar: 'hükümdar',
      merkez: [22, 0], merkezZ: 3.4, isaret: [17, -3], mevsimler: MEV_SAHEL,
      tum: { kisa: 'Tüm Kuzey ve Batı Afrika tarihi', baslik: 'Kuzey ve Batı Afrika · Bütün çağlar (MÖ 1500 – bugün)', start: -1324,
        hizli: [{ ad: 'Nok', y: 500 }, { ad: 'Kartaca', y: 814 }, { ad: 'Hannibal', y: 218 }, { ad: 'Roma Afrikası', y: -150 }, { ad: 'Gana', y: -1000 }, { ad: 'Mansa Musa', y: -1324 },
          { ad: 'Timbuktu', y: -1450 }, { ad: 'Songhay', y: -1500 }, { ad: 'Köle ticareti', y: -1750 }, { ad: 'Sömürge', y: -1900 }, { ad: 'Bağımsızlık', y: -1960 }, { ad: 'Bugün', y: -2026 }] },
      sahne: { tema: 'misir', kum1: '#b0c0c0', kum2: '#e2c48a', dag: 1.4, plato: '#dcbc80', platoKenar: '#bc9a5e', yakin: '#cfb072', yol: 'rgba(230,206,160,0.6)',
        nehirYazi: 'NİJER NEHRİ · SAHRA', nehirAd: 'Nijer Nehri', agac: 'palm', taskin: true, nehirRenk: [90, 130, 130] } }),
    doguafrika: yeni('doguafrika', 'Doğu ve Güney Afrika', '🦒', 'afrika', {
      ilgi: 'Doğu ve Güney Afrika\'nın', yonelme: 'Doğu Afrika\'ya', bugunAd: 'Bugünkü Doğu ve Güney Afrika', simgeAlt: 'İnsanlığın beşiğinden Aksum\'a, Büyük Zimbabve\'den Mandela\'ya', hukumdar: 'hükümdar',
      merkez: [-5, 33], merkezZ: 3.2, isaret: [-2, 36], mevsimler: MEV_SAHEL,
      tum: { kisa: 'Tüm Doğu ve Güney Afrika tarihi', baslik: 'Doğu ve Güney Afrika · Bütün çağlar (MÖ 2500 – bugün)', start: -1300,
        hizli: [{ ad: 'Kerma', y: 1700 }, { ad: 'Kuş', y: 700 }, { ad: 'Meroe', y: 250 }, { ad: 'Aksum', y: -340 }, { ad: 'Lalibela', y: -1200 }, { ad: 'Büyük Zimbabve', y: -1300 },
          { ad: 'Kilva', y: -1350 }, { ad: 'Portekizliler', y: -1505 }, { ad: 'Şaka Zulu', y: -1820 }, { ad: 'Adwa', y: -1896 }, { ad: 'Mandela', y: -1994 }, { ad: 'Bugün', y: -2026 }] },
      sahne: { tema: 'misir', kum1: '#a8c4c8', kum2: '#c8bc7c', dag: 2.2, plato: '#c4b46c', platoKenar: '#a4944c', yakin: '#b8ac60', yol: 'rgba(210,186,140,0.6)',
        nehirYazi: 'NİL\'İN KAYNAKLARI · ZAMBEZİ · HİNT OKYANUSU', nehirAd: 'Nil, Zambezi ve göller', agac: 'palm', taskin: false, nehirRenk: [70, 130, 140] } }),
    doguavrupa: yeni('doguavrupa', 'Doğu Avrupa ve Rusya', '🪆', 'avrupa', {
      ilgi: 'Doğu Avrupa ve Rusya\'nın', yonelme: 'Doğu Avrupa\'ya', bugunAd: 'Bugünkü Doğu Avrupa ve Rusya', simgeAlt: 'Slavlar, Kiev Rus, Lehistan, çarlar ve Sovyetler', hukumdar: 'hükümdar',
      merkez: [53, 32], merkezZ: 3.2, isaret: [54, 35],
      tum: { kisa: 'Tüm Doğu Avrupa ve Rusya tarihi', baslik: 'Doğu Avrupa ve Rusya · Bütün çağlar (MÖ 700 – bugün)', start: -1700,
        hizli: [{ ad: 'İskitler', y: 500 }, { ad: 'Slavlar', y: -600 }, { ad: 'Kiev Rus', y: -988 }, { ad: 'Moğollar', y: -1240 }, { ad: 'Grunwald', y: -1410 }, { ad: 'Korkunç İvan', y: -1547 },
          { ad: 'Petro', y: -1703 }, { ad: 'Napolyon', y: -1812 }, { ad: 'Devrim', y: -1917 }, { ad: 'Stalingrad', y: -1942 }, { ad: 'SSCB\'nin sonu', y: -1991 }, { ad: 'Bugün', y: -2026 }] },
      mevsimler: { ahet: ['🌱 Bahar', 'Karlar erir, çamur mevsimi'], peret: ['☀️ Yaz', 'Kısa ve verimli yaz'], semu: ['❄️ Kış', 'Uzun, sert kış'] },
      sahne: { tema: 'avrupa', kum1: '#94a8bc', kum2: '#9cb488', dag: 1.4, plato: '#a0bc7c', platoKenar: '#7e9a5c', yakin: '#94b46e', yol: 'rgba(196,186,156,0.6)',
        nehirYazi: 'DİNYEPER · VOLGA · VİSTÜL', nehirAd: 'Dinyeper ve Volga', agac: 'karisik', taskin: false, nehirRenk: [60, 100, 140] } })
  });
  const MEV_GUNEY = { ahet: ['🌸 Bahar', 'Eylül-Kasım: güney yarımkürede bahar'], peret: ['☀️ Yaz', 'Aralık-Şubat: yaz'], semu: ['🍂 Güz', 'Mart-Mayıs: hasat ve güz'] };
  Object.assign(B, {
    kuzeyamerika: yeni('kuzeyamerika', 'Kuzey Amerika', '🦅', 'amerika', {
      ilgi: 'Kuzey Amerika\'nın', yonelme: 'Kuzey Amerika\'ya', bugunAd: 'Bugünkü ABD ve Kanada', simgeAlt: 'Höyük şehirlerinden gökdelenlere', hukumdar: 'önder',
      merkez: [42, -98], merkezZ: 3.0, isaret: [40, -98],
      tum: { kisa: 'Tüm Kuzey Amerika tarihi', baslik: 'Kuzey Amerika · Bütün çağlar (MÖ 3500 – bugün)', start: -1776,
        hizli: [{ ad: 'Poverty Point', y: 1500 }, { ad: 'Cahokia', y: -1100 }, { ad: 'Vikingler', y: -1000 }, { ad: 'İrokua Birliği', y: -1450 }, { ad: 'Jamestown', y: -1607 }, { ad: 'Bağımsızlık', y: -1776 },
          { ad: 'İç Savaş', y: -1863 }, { ad: 'Demiryolu', y: -1869 }, { ad: 'Buhran', y: -1930 }, { ad: 'Ay\'a iniş', y: -1969 }, { ad: '11 Eylül', y: -2001 }, { ad: 'Bugün', y: -2026 }] },
      sahne: { tema: 'avrupa', kum1: '#94acc0', kum2: '#a8bc88', dag: 2.4, plato: '#a8c07a', platoKenar: '#86a05a', yakin: '#9cbc70', yol: 'rgba(200,190,160,0.6)',
        nehirYazi: 'MİSSİSSİPPİ · BÜYÜK GÖLLER', nehirAd: 'Mississippi ve Büyük Göller', agac: 'karisik', taskin: false, nehirRenk: [70, 110, 140] } }),
    mezoamerika: yeni('mezoamerika', 'Mezoamerika ve Karayipler', '🌽', 'amerika', {
      ilgi: 'Mezoamerika\'nın', yonelme: 'Mezoamerika\'ya', bugunAd: 'Bugünkü Meksika, Orta Amerika ve Karayipler', simgeAlt: 'Olmeklerden Mayalara, Azteklerden bugünkü Meksika\'ya', hukumdar: 'hükümdar',
      merkez: [18, -90], merkezZ: 4.2, isaret: [19, -96], mevsimler: MEV_SAHEL,
      tum: { kisa: 'Tüm Mezoamerika tarihi', baslik: 'Mezoamerika ve Karayipler · Bütün çağlar (MÖ 2000 – bugün)', start: -1487,
        hizli: [{ ad: 'Olmekler', y: 1000 }, { ad: 'Teotihuacan', y: -200 }, { ad: 'Tikal', y: -734 }, { ad: 'Chichén Itzá', y: -1000 }, { ad: 'Tenochtitlan', y: -1325 }, { ad: 'Kolomb', y: -1492 },
          { ad: 'Cortés', y: -1521 }, { ad: 'Haiti Devrimi', y: -1804 }, { ad: 'Meksika bağımsız', y: -1821 }, { ad: 'Devrim', y: -1910 }, { ad: 'Panama Kanalı', y: -1914 }, { ad: 'Bugün', y: -2026 }] },
      sahne: { tema: 'misir', kum1: '#9cc4c8', kum2: '#a8c084', dag: 2.6, plato: '#9cbc6c', platoKenar: '#7c9c4e', yakin: '#94b866', yol: 'rgba(210,190,140,0.6)',
        nehirYazi: 'MEKSİKA KÖRFEZİ · KARAYİP DENİZİ', nehirAd: 'Göller ve kıyılar', agac: 'palm', taskin: false, nehirRenk: [60, 140, 160] } }),
    guneyamerika: yeni('guneyamerika', 'Güney Amerika', '🦙', 'amerika', {
      ilgi: 'Güney Amerika\'nın', yonelme: 'Güney Amerika\'ya', bugunAd: 'Bugünkü Güney Amerika', simgeAlt: 'Caral\'dan İnkalara, Bolívar\'dan bugüne', hukumdar: 'hükümdar',
      merkez: [-15, -62], merkezZ: 3.0, isaret: [-13, -72], mevsimler: MEV_GUNEY,
      tum: { kisa: 'Tüm Güney Amerika tarihi', baslik: 'Güney Amerika · Bütün çağlar (MÖ 3000 – bugün)', start: -1500,
        hizli: [{ ad: 'Caral', y: 2600 }, { ad: 'Chavín', y: 900 }, { ad: 'Nazca', y: -200 }, { ad: 'Tiwanaku', y: -600 }, { ad: 'Chan Chan', y: -1300 }, { ad: 'Pachacuti', y: -1438 },
          { ad: 'Machu Picchu', y: -1460 }, { ad: 'Pizarro', y: -1532 }, { ad: 'Potosí', y: -1600 }, { ad: 'Bolívar', y: -1819 }, { ad: 'Brezilya', y: -1888 }, { ad: 'Bugün', y: -2026 }] },
      sahne: { tema: 'anadolu', kum1: '#9cb8c8', kum2: '#b4b888', dag: 3.0, plato: '#a8b47a', platoKenar: '#88945a', yakin: '#9cac6c', yol: 'rgba(206,186,150,0.6)',
        nehirYazi: 'AND DAĞLARI · AMAZON', nehirAd: 'Amazon ve Titicaca', agac: 'karisik', taskin: false, nehirRenk: [120, 110, 80] } }),
    okyanusya: yeni('okyanusya', 'Okyanusya', '🦘', 'okyanusya', {
      ilgi: 'Okyanusya\'nın', yonelme: 'Okyanusya\'ya', bugunAd: 'Bugünkü Avustralya, Yeni Zelanda ve Pasifik', simgeAlt: 'Aborjinlerden Polinezyalı denizcilere, Moai\'den Sidney\'e', hukumdar: 'önder',
      merkez: [-22, 155], merkezZ: 2.8, isaret: [-25, 134], mevsimler: MEV_GUNEY,
      tum: { kisa: 'Tüm Okyanusya tarihi', baslik: 'Okyanusya · Bütün çağlar (MÖ 3000 – bugün)', start: -1770,
        hizli: [{ ad: 'Lapita', y: 1300 }, { ad: 'Samoa', y: 800 }, { ad: 'Hawaii', y: -1000 }, { ad: 'Moai', y: -1300 }, { ad: 'Yeni Zelanda', y: -1280 }, { ad: 'Tasman', y: -1642 },
          { ad: 'Cook', y: -1770 }, { ad: 'Sidney', y: -1788 }, { ad: 'Waitangi', y: -1840 }, { ad: 'Çanakkale', y: -1915 }, { ad: 'Opera Binası', y: -1973 }, { ad: 'Bugün', y: -2026 }] },
      sahne: { tema: 'misir', kum1: '#90c4d4', kum2: '#d4b47c', dag: 1.8, plato: '#c8a46a', platoKenar: '#a8844a', yakin: '#b8a060', yol: 'rgba(220,190,140,0.6)',
        nehirYazi: 'PASİFİK OKYANUSU · MERCAN DENİZİ', nehirAd: 'Pasifik ve Murray Nehri', agac: 'palm', taskin: false, nehirRenk: [50, 130, 170] } })
  });
  // kıtalar: seçicide, panelde ve zaman çizelgesinde gruplama
  window.KITALAR = [
    { id: 'afrika', ad: 'Afrika', ikon: '🌍', b: ['misir', 'batiafrika', 'doguafrika'] },
    { id: 'asya', ad: 'Asya', ikon: '🌏', b: ['anadolu', 'mezopotamya', 'levant', 'ortaasya', 'hindistan', 'cin', 'japonya', 'gdasya'] },
    { id: 'avrupa', ad: 'Avrupa', ikon: '🏰', b: ['avrupa', 'doguavrupa'] },
    { id: 'amerika', ad: 'Amerika', ikon: '🌎', b: ['kuzeyamerika', 'mezoamerika', 'guneyamerika'] },
    { id: 'okyanusya', ad: 'Okyanusya', ikon: '🏝️', b: ['okyanusya'] }
  ];
  B.misir.kita = 'afrika'; B.anadolu.kita = 'asya'; B.avrupa.kita = 'avrupa';
  // eski anıtları sonraki çağlara taşı (sahnede yıkılana kadar dururlar): her bölge dosyası sonunda çağırır
  window.BOLGE_TASI = onek => {
    const L = (window.PLACES || []).filter(p => p.id.startsWith(onek + '-')).sort((a, b) => a.sira - b.sira);
    L.forEach((p, i) => { const var_ = new Set(p.monuments.map(m => m.id));
      for (const q of L.slice(0, i)) for (const m of q.monuments) if (!m.eski && !var_.has(m.id) && !(m.yok && m.yok >= p.from)) { var_.add(m.id); p.monuments.push({ ...m, eski: true }); } });
  };
  const SIRA = ['misir', 'anadolu', 'avrupa', 'mezopotamya', 'levant', 'ortaasya', 'hindistan', 'cin', 'japonya', 'gdasya', 'batiafrika', 'doguafrika', 'doguavrupa', 'kuzeyamerika', 'mezoamerika', 'guneyamerika', 'okyanusya'];
  B.dunya = {
    id: 'dunya', ad: 'Tüm Dünya', ikon: '🌍', dunya: true, merkez: [36, 22], merkezZ: 1.9, isaret: null,
    hakkinda: 'Bu yıl dünyada', yonelme: 'bir bölgeye', simgeAd: 'Dünyanın simgeleri', simgeGiris: 'Bütün kıtaların bölgelerinden simgeler.', simgeAlt: 'Bütün bölgelerin mirası',
    bugunAd: 'Bugünkü dünya', antikAd: 'Dünya', hukumdar: 'hükümdar', uc3: false, kultur: false,
    tum: { kisa: 'Tüm dünya tarihi', baslik: 'Dünya · Bütün kıtalar (MÖ 9600 – bugün)', start: 1274,
      hizli: [{ ad: 'Göbekli Tepe', y: 9500 }, { ad: 'Çatalhöyük', y: 7000 }, { ad: 'Mısır birleşiyor', y: 3100 }, { ad: 'Büyük Piramit', y: 2577 }, { ad: 'Stonehenge', y: 2500 }, { ad: 'Hititler', y: 1600 },
        { ad: 'Kadeş', y: 1274 }, { ad: 'Truva', y: 1180 }, { ad: 'Parthenon', y: 440 }, { ad: 'İskender', y: 334 }, { ad: 'Sezar', y: 44 }, { ad: 'Kolezyum', y: -80 }, { ad: 'Ayasofya', y: -537 },
        { ad: 'Malazgirt', y: -1071 }, { ad: 'İstanbul fethi', y: -1453 }, { ad: 'Fransız İhtilali', y: -1789 }, { ad: 'Süveyş Kanalı', y: -1869 }, { ad: 'Cumhuriyet', y: -1923 }, { ad: '2. Dünya Savaşı', y: -1942 }, { ad: 'Bugün', y: -2026 }] }
  };
  const q = new URLSearchParams(location.search).get('bolge');
  const id = B[q] ? q : 'dunya';
  window.BOLGELER = B; window.BOLGE_SIRA = SIRA;
  window.BOLGE = B[id];
  // senkron yükleme: sıra korunur, motor dosyaları bunlardan sonra çalışır
  if (id !== 'dunya') { for (const f of B[id].dosyalar) document.write(`<script src="${f}"><\/script>`); return; }

  // ---- Tüm Dünya: bölgeler aynı global adlara yazdığı için sırayla yüklenir; her bölgeden sonra veriler toplanır ----
  const GLB = ['PLACES', 'MISIR', 'SINIRLAR', 'OLAYLAR', 'SEHIR_BILGI', 'KULTUR'];
  const V = window.BOLGE_VERI = {};
  window.__bolgeTopla = b => {
    V[b] = {}; for (const k of GLB) { V[b][k] = window[k]; window[k] = undefined; }
    for (const p of V[b].PLACES || []) p.bolge = b;
    for (const c of (V[b].MISIR || {}).sehirler || []) c.bolge = b;
    for (const s of V[b].SINIRLAR || []) s.bolge = b;
    for (const e of V[b].OLAYLAR || []) e.bolge = e.bolge || b;
  };
  window.__bolgeBirlestir = () => {
    const L = SIRA.map(b => V[b]), MM = L.map(v => v.MISIR || {});
    const sehirAd = new Set(), olayId = new Set();
    window.PLACES = L.flatMap((v, i) => (v.PLACES || []).map(p => { p.sira = i * 100 + (p.sira || 0); return p; }));
    window.MISIR = {
      ...MM[0],
      coords: Object.assign({}, ...MM.map(m => m.coords || {})),
      wiki: Object.assign({}, ...MM.map(m => m.wiki || {})),
      bilgi: Object.assign({}, ...MM.map(m => m.bilgi || {})),
      sehirler: MM.flatMap(m => m.sehirler || []).filter(c => !sehirAd.has(c.ad) && sehirAd.add(c.ad)),
      simgeler: MM.flatMap(m => m.simgeler || []),
      kureAdlari: MM.flatMap(m => m.kureAdlari || []),
      bugun: MM.map((m, i) => `<h4>${B[SIRA[i]].ikon} ${B[SIRA[i]].bugunAd}</h4>${m.bugun || ''}`).join('')
    };
    window.SINIRLAR = L.flatMap(v => v.SINIRLAR || []);
    window.OLAYLAR = L.flatMap(v => v.OLAYLAR || []).filter(e => !olayId.has(e.id) && olayId.add(e.id));
    window.SEHIR_BILGI = Object.assign({}, ...L.map(v => v.SEHIR_BILGI || {}));
    window.KULTUR = { tanrilar: [], olumler: [], roller: [], mumyalama: '', ic: { eslesme: {}, sahneler: {} }, bilim: { genel: '', cag: {} } };
  };
  const yuklendi = new Set();
  for (const b of SIRA) {
    for (const f of B[b].dosyalar) { if (yuklendi.has(f)) continue; yuklendi.add(f); document.write(`<script src="${f}"><\/script>`); }
    document.write(`<script>window.__bolgeTopla('${b}')<\/script>`);
  }
  document.write('<script>window.__bolgeBirlestir()<\/script>');
})();
