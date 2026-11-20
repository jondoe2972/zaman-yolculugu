// Ansiklopedi: Vikipedi tarzı "Anadolu" sayfası (arama kutusundan açılır)
(() => {
  window.ULKE_SAYFA = window.ULKE_SAYFA || {};
  const F = (id, ad, tur, wiki, ll, z, yapim, kim, durum, durumYazi, nerede, metin, place, y) => ({ id, ad, tur, wiki, ll, z, yapim, kim, durum, durumYazi, nerede, metin, git: { place, y, id } });
  window.ULKE_SAYFA.anadolu = {
    id: 'anadolu', ad: 'Anadolu', ikon: '🏛️',
    kw: ['anadolu', 'türkiye', 'turkiye', 'turkey', 'anatolia', 'küçük asya', 'hitit', 'osmanlı', 'selçuklu', 'bizans', 'istanbul', 'ankara'],
    altBaslik: 'MÖ ~9600 – bugün · 12.000 yıllık yerleşim, onlarca uygarlık',
    kapakWiki: 'Göbekli Tepe', kapakAd: 'Göbekli Tepe\'nin dikili taşları',
    merkez: [39.0, 34.5], merkezZ: 5.5,
    ozet: [
      '<b>Anadolu</b> (Küçük Asya), bugünkü Türkiye topraklarının Asya\'da kalan büyük yarımadasıdır. Kuzeyde Karadeniz, güneyde Akdeniz, batıda Ege ile çevrilidir ve Asya ile Avrupa arasında bir köprü oluşturur. Adı Yunanca "güneşin doğduğu yer" anlamına gelen <i>Anatolē</i>\'den gelir.',
      'Dünyanın en eski anıtsal yapılarından <b>Göbekli Tepe</b> (MÖ ~9600) ve ilk büyük köy-kentlerden <b>Çatalhöyük</b> (MÖ ~7400) buradadır. Tarım, Anadolu\'nun güneydoğusundaki Bereketli Hilal\'den Avrupa\'ya yayıldı.',
      'Anadolu\'da sırasıyla <b>Hattiler, Hititler, Frigler, Urartular, Lidyalılar, İyonlar, Persler, Helenistik krallıklar, Roma ve Bizans, Selçuklular, Osmanlılar</b> ve 1923\'ten beri <b>Türkiye Cumhuriyeti</b> hüküm sürdü. Para (Lidya), felsefe (Milet) ve bilinen en eski barış antlaşması (Kadeş) bu topraklarda doğdu.'
    ],
    bilgiKutusu: [['Tarih', 'MÖ ~9600 – bugün (~12.000 yıl)'], ['Önemli başkentler', 'Hattuşa, Gordion, Tuşpa, Sardes, Bergama, Konstantinopolis, İznik, Konya, Bursa, Edirne, İstanbul, Ankara'],
      ['Yönetimler', 'Hitit → Frig, Urartu, Lidya → Pers → Helenistik → Roma ve Bizans → Selçuklu → Osmanlı → Türkiye Cumhuriyeti (1923)'],
      ['Diller', 'Hattice, Hititçe, Luvice → Frigce, Lidyaca, Urartuca → Yunanca, Latince, Ermenice, Süryanice → Türkçe'],
      ['Yazı', 'Çivi yazısı ve Luvi hiyeroglifleri → Frig ve Lidya alfabeleri → Yunan alfabesi → Arap alfabesi → Latin alfabesi (1928)'],
      ['Dinler', 'Hatti ve Hitit tanrıları, Kybele, Artemis → Hristiyanlık → İslam (bugün çoğunluk)'], ['Nüfus', '~2 milyon (MÖ 2000) → ~8 milyon (Roma) → 13,6 milyon (1927) → ~86 milyon (2026)'],
      ['Yüzölçümü', '783.562 km² (Türkiye)'], ['Bugün', 'Türkiye Cumhuriyeti · başkent Ankara']],
    donemler: {
      'anadolu-tarihoncesi': 'Göbekli Tepe ve Çatalhöyük ile insanlığın ilk tapınakları ve köyleri; Tunç Çağı\'nda Hattiler ve Truva; MÖ 1950\'de Asurlu tüccarlarla yazı geldi.',
      'anadolu-hitit': 'Hattuşa başkentli Hitit İmparatorluğu, Mısır ve Babil ile eşit bir büyük güç oldu. Kadeş Savaşı ve bilinen en eski barış antlaşması.',
      'anadolu-demir': 'Frigler (Midas), Urartular (Van), Lidyalılar (ilk sikke, Kroisos) ve İyon kentleri (felsefe, Homeros).',
      'anadolu-helen': 'Pers satraplıkları, Büyük İskender\'in fethi ve Bergama Krallığı: Mozole, Artemis Tapınağı, Zeus Sunağı.',
      'anadolu-roma': 'Roma\'nın en zengin eyaletleri, Hristiyanlığın beşiği ve 1.000 yıllık Bizans: Efes, Nemrut, Ayasofya, Kapadokya.',
      'anadolu-selcuklu': 'Malazgirt\'ten sonra Türkiye Selçukluları: Konya, kervansaraylar, Mevlana, Yunus Emre.',
      'anadolu-osmanli': 'Söğüt\'ten üç kıtaya: İstanbul\'un fethi, Mimar Sinan, Tanzimat ve Çanakkale.',
      'anadolu-cumhuriyet': 'Atatürk\'ün kurduğu Türkiye Cumhuriyeti: devrimler, çok partili hayat, Boğaz köprüleri ve bugün.'
    },
    kultur: [
      { baslik: 'Halklar', ikon: '👥', html: '<p>Anadolu binlerce yıl boyunca pek çok halka ev sahipliği yaptı: Hattiler, Hititler, Luviler, Hurriler, Frigler, Urartular, Lidyalılar, Karyalılar, Likyalılar, İyonlar, Galatlar, Ermeniler, Rumlar, Süryaniler, Yahudiler, Kürtler, Türkler, Lazlar, Çerkesler, Gürcüler… Bugünkü Türkiye bu mirasın üzerinde yaşıyor.</p>' },
      { baslik: 'Din ve inanç', ikon: '🙏', html: '<p>Hititlerin "bin tanrısı", Frig Ana Tanrıçası Kybele, Efes Artemis\'i; ardından Hristiyanlığın ilk kiliseleri ve konsilleri; 11. yüzyıldan sonra İslam ve tasavvuf (Mevlana, Yunus Emre, Hacı Bektaş Veli).</p>' },
      { baslik: 'Bilim ve icatlar', ikon: '🔬', html: '<ul><li>Tarım ve hayvanların evcilleştirilmesi (Bereketli Hilal)</li><li>İlk sikke (Lidya)</li><li>Felsefe ve bilim (Milet: Thales, Anaksimandros)</li><li>Şehir planlaması (Hippodamos)</li><li>Parşömen (Bergama)</li><li>Tıp (Galenos), Selçuklu darüşşifaları</li><li>Mimar Sinan\'ın kubbeleri</li></ul>' },
      { baslik: 'Yemek', ikon: '🍞', html: '<p>Anadolu buğdayın ve mercimeğin ilk evcilleştirildiği yerlerden. Hitit tabletlerinde 180\'den fazla ekmek türü sayılır. Bugünkü Türk mutfağı Orta Asya, Anadolu, Akdeniz ve Orta Doğu mutfaklarının birleşimidir.</p>' }
    ],
    figurler: [
      F('gobeklitepe', 'Göbekli Tepe', 'yapı', 'Göbekli Tepe', [37.2233, 38.9224], 60, 'MÖ ~9600-8200', 'Avcı-toplayıcılar', 'harabe', 'Kazılmış; koruma çatısı altında.', 'Şanlıurfa', 'İnsanlığın bilinen en eski anıtsal yapısı; T biçimli dikili taşlar.', 'anadolu-tarihoncesi', 9400),
      F('catalhoyuk', 'Çatalhöyük', 'yapı', 'Çatalhöyük', [37.667, 32.828], 60, 'MÖ ~7400-6000', 'Neolitik çiftçiler', 'harabe', 'Höyük; kazılmış evler koruma altında.', 'Konya, Çumra', 'Damdan girilen bitişik evleriyle ilk büyük köy-kent.', 'anadolu-tarihoncesi', 7000),
      F('hattusa', 'Hattuşa', 'yapı', 'Hattusa', [40.019, 34.615], 50, 'MÖ ~1650-1180', 'Hitit kralları', 'harabe', 'Surlar, kapılar ve tapınak temelleri.', 'Boğazkale, Çorum', 'Hitit İmparatorluğu\'nun başkenti.', 'anadolu-hitit', 1270),
      F('truva6', 'Truva', 'yapı', 'Troy', [39.9577, 26.2392], 60, 'MÖ ~3000 – MS 500', 'Truva beyleri', 'harabe', '9 katmanlı ören yeri.', 'Çanakkale', 'İlyada destanının kenti.', 'anadolu-hitit', 1200),
      F('midastumulus', 'Midas Tümülüsü', 'yapı', 'Midas Mound', [39.6553, 31.9937], 60, 'MÖ ~740', 'Frig kralı', 'ayakta', 'Ziyaret edilebilir; ahşap mezar odası.', 'Gordion, Polatlı', 'Dünyanın ayakta duran en eski ahşap yapılarından biri.', 'anadolu-demir', 730),
      F('artemis', 'Artemis Tapınağı', 'yapı', 'Temple of Artemis', [37.9497, 27.3639], 70, 'MÖ ~560', 'Kroisos', 'harabe', 'Tek sütun duruyor.', 'Selçuk, İzmir', 'Antik Dünyanın Yedi Harikası\'ndan biri.', 'anadolu-demir', 450),
      F('mozole', 'Halikarnas Mozolesi', 'yapı', 'Mausoleum at Halicarnassus', [37.038, 27.4241], 70, 'MÖ ~353-350', 'Artemisia', 'yikik', 'Yalnızca temelleri kaldı.', 'Bodrum', 'Yedi Harika\'dan biri; "mozole" kelimesinin kaynağı.', 'anadolu-helen', 350),
      F('bergama', 'Bergama', 'yapı', 'Pergamon', [39.132, 27.184], 60, 'MÖ ~230-160', 'Attalosoğulları', 'harabe', 'Akropol ve tiyatro ayakta; Zeus Sunağı Berlin\'de.', 'Bergama, İzmir', 'Helenistik dünyanın kültür başkenti.', 'anadolu-helen', 170),
      F('nemrut', 'Nemrut Dağı', 'yapı', 'Mount Nemrut', [37.981, 38.7408], 60, 'MÖ ~62-38', 'I. Antiokhos', 'harabe', 'Heykellerin başları yerde.', 'Adıyaman', 'Dağın tepesinde dev tanrı heykelleri.', 'anadolu-roma', 40),
      F('celsus', 'Celsus Kütüphanesi', 'yapı', 'Library of Celsus', [37.9393, 27.3405], 80, 'MS ~110-117', 'Julius Aquila', 'ayakta', 'Cephe 1970\'lerde yeniden dikildi.', 'Efes', 'Efes\'in simgesi olan Roma kütüphanesi.', 'anadolu-roma', -120),
      F('ayasofya', 'Ayasofya', 'yapı', 'Hagia Sophia', [41.0086, 28.9802], 80, 'MS 532-537', 'I. Justinianus', 'ayakta', 'Cami (2020\'den beri).', 'İstanbul', '~1.000 yıl dünyanın en büyük kilisesi.', 'anadolu-roma', -540),
      F('goreme', 'Kapadokya', 'yapı', 'Cappadocia', [38.64, 34.845], 40, 'MS 6-12. yy', 'Keşişler', 'ayakta', 'Açık hava müzesi.', 'Nevşehir', 'Peribacaları ve kaya kiliseleri.', 'anadolu-roma', -1000),
      F('sultanhani', 'Sultanhanı', 'yapı', 'Sultan Han', [38.248, 33.547], 70, '1229', 'I. Alaaddin Keykubad', 'ayakta', 'Onarılmış; ziyarete açık.', 'Aksaray', 'En büyük Selçuklu kervansarayı.', 'anadolu-selcuklu', -1230),
      F('suleymaniye', 'Süleymaniye Camii', 'yapı', 'Süleymaniye Mosque', [41.0162, 28.9638], 80, '1550-1557', 'Kanuni, Mimar Sinan', 'ayakta', 'İbadete açık.', 'İstanbul', 'Sinan\'ın kalfalık eseri.', 'anadolu-osmanli', -1557),
      F('selimiye', 'Selimiye Camii', 'yapı', 'Selimiye Mosque', [41.6781, 26.5594], 80, '1569-1575', 'II. Selim, Mimar Sinan', 'ayakta', 'İbadete açık.', 'Edirne', 'Sinan\'ın ustalık eseri.', 'anadolu-osmanli', -1575),
      F('anitkabir', 'Anıtkabir', 'yapı', 'Anıtkabir', [39.925, 32.8369], 80, '1944-1953', 'Türkiye Cumhuriyeti', 'ayakta', 'Müze ve anıt mezar.', 'Ankara', 'Atatürk\'ün anıt mezarı.', 'anadolu-cumhuriyet', -1953)
    ],
    kisiler: [
      { ad: 'Anitta', wiki: 'Anitta', yil: '~MÖ 1750', ozet: 'Anadolu\'da yazılmış ilk tarih metninin sahibi.', y: 1750 },
      { ad: 'I. Şuppiluliuma', wiki: 'Suppiluliuma I', yil: 'MÖ ~1350-1322', ozet: 'Hititleri imparatorluk yapan kral.', y: 1340 },
      { ad: 'Puduhepa', wiki: 'Puduhepa', yil: 'MÖ ~13. yy', ozet: 'Kadeş barışında rol oynayan güçlü Hitit kraliçesi.', y: 1259 },
      { ad: 'Midas', wiki: 'Midas', yil: 'MÖ ~740-696', ozet: 'Altın dokunuşlu Frig kralı.', y: 720 },
      { ad: 'Homeros', wiki: 'Homer', yil: 'MÖ ~8. yy', ozet: 'İlyada ve Odysseia\'nın ozanı (İzmir).', y: 750 },
      { ad: 'Kroisos', wiki: 'Croesus', yil: 'MÖ 560-547', ozet: 'Karun kadar zengin Lidya kralı.', y: 550 },
      { ad: 'Thales', wiki: 'Thales of Miletus', yil: 'MÖ ~624-546', ozet: 'İlk filozof (Milet).', y: 585 },
      { ad: 'Herodotos', wiki: 'Herodotus', yil: 'MÖ ~484-425', ozet: 'Tarihin babası (Bodrum).', y: 450 },
      { ad: 'Diogenes', wiki: 'Diogenes', yil: 'MÖ ~412-323', ozet: 'Fıçıda yaşayan Sinoplu filozof.', y: 360 },
      { ad: 'Strabon', wiki: 'Strabo', yil: 'MÖ 64 – MS 24', ozet: 'Amasyalı coğrafyacı.', y: 20 },
      { ad: 'Aziz Pavlus', wiki: 'Paul the Apostle', yil: 'MS ~5-64', ozet: 'Tarsuslu havari.', y: -50 },
      { ad: 'Galenos', wiki: 'Galen', yil: 'MS 129-216', ozet: 'Bergamalı ünlü hekim.', y: -160 },
      { ad: 'Aziz Nikolaos', wiki: 'Saint Nicholas', yil: 'MS ~270-343', ozet: 'Myra (Demre) piskoposu; Noel Baba.', y: -320 },
      { ad: 'Alparslan', wiki: 'Alp Arslan', yil: '1029-1072', ozet: 'Malazgirt\'in galibi.', y: -1071 },
      { ad: 'Mevlana Celaleddin Rumi', wiki: 'Rumi', yil: '1207-1273', ozet: 'Mesnevi\'nin şairi.', y: -1260 },
      { ad: 'Yunus Emre', wiki: 'Yunus Emre', yil: '~1238-1320', ozet: 'Türkçe tasavvuf şiirinin büyük ozanı.', y: -1300 },
      { ad: 'Fatih Sultan Mehmed', wiki: 'Mehmed II', yil: '1432-1481', ozet: 'İstanbul\'u fetheden padişah.', y: -1453 },
      { ad: 'Mimar Sinan', wiki: 'Mimar Sinan', yil: '~1490-1588', ozet: 'Osmanlı\'nın baş mimarı.', y: -1557 },
      { ad: 'Piri Reis', wiki: 'Piri Reis', yil: '~1465-1553', ozet: 'Denizci ve haritacı.', y: -1513 },
      { ad: 'Evliya Çelebi', wiki: 'Evliya Çelebi', yil: '1611-1682', ozet: 'Seyahatname\'nin yazarı.', y: -1650 },
      { ad: 'Mustafa Kemal Atatürk', wiki: 'Mustafa Kemal Atatürk', yil: '1881-1938', ozet: 'Türkiye Cumhuriyeti\'nin kurucusu.', y: -1923 }
    ],
    biliyorMuydunuz: [
      'Göbekli Tepe, Mısır piramitlerinden yaklaşık 7.000 yıl daha eskidir.',
      'Bilinen en eski barış antlaşması Hititler ile Mısırlılar arasında imzalandı (MÖ 1259).',
      'Dünyanın ilk sikkeleri Lidya\'da, bugünkü Manisa\'da basıldı.',
      'Yedi Harika\'nın ikisi (Artemis Tapınağı ve Mozole) Anadolu\'daydı.',
      'Noel Baba\'nın kökeni Antalya Demre\'de yaşamış Aziz Nikolaos\'tur.',
      '"Menderes" nehrinin adı İngilizceye "meander" (kıvrılmak) olarak geçti.',
      'Lale Avrupa\'ya Osmanlı İstanbul\'undan gitti; Hollanda\'daki "lale çılgınlığı" 1630\'larda yaşandı.',
      'İstanbul\'daki Tünel (1875), Londra metrosundan sonra dünyanın en eski ikinci yeraltı demiryoludur.'
    ]
  };
})();
