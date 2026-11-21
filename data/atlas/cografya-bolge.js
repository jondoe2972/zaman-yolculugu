// 🏔️ Dünya Atlası: Tarihi şekillendiren dağlar, çöller, nehirler ve tarihî havzalar.
// tur: 'dag' (🏔️), 'col' (🏜️), 'havza' (🌿), 'nehir' (🌊)
'use strict';
window.ATLAS_COGRAFYA = [
  // ---- Dağlar ----
  {
    id: 'himalayalar', ad: 'Himalayalar', tur: 'dag', ll: [28.0, 86.9],
    konum: 'Güney Asya (Nepal, Hindistan, Çin/Tibet, Butan, Pakistan)',
    olcu: 'Uzunluk: ~2.400 km · En yüksek: Everest (8.849 m)',
    ozet: 'Hint levhasının Avrasya levhasıyla çarpışmasıyla yükselen, dünyanın en yüksek sıradağıdır. Ganj, İndus ve Brahmaputra gibi milyarlarca insanı besleyen dev nehirler buradan doğar.',
    tarihOnemi: 'Hindistan ile Çin arasında neredeyse aşılmaz doğal bir duvar örerek iki dev uygarlığın birbirinden bağımsız gelişmesini sağladı; Hint Okyanusu\'ndan gelen muson bulutlarını tutup Hindistan\'ı bereketli, Tibet\'i ise kurak yaptı.',
    ilginc: 'Hint levhası hâlâ kuzeye ittiği için Himalayalar her yıl yaklaşık 5 milimetre yükselmeye devam ediyor; tepelerinde milyonlarca yıllık deniz kabuklusu fosilleri bulunur.',
    w: 'Himalayas'
  },
  {
    id: 'andlar', ad: 'And Dağları', tur: 'dag', ll: [-15.5, -70.0],
    konum: 'Güney Amerika\'nın batı kıyısı boyunca (7 ülke)',
    olcu: 'Uzunluk: ~7.000 km (karadaki en uzun sıradağ) · En yüksek: Aconcagua (6.961 m)',
    ozet: 'Kolombiya\'dan Patagonya\'ya uzanan dünyanın en uzun kara sıradağıdır. Yüksek platoları (Altiplano) ve verimli vadileri benzersiz bir dağ uygarlığına ev sahipliği yaptı.',
    tarihOnemi: 'İnka İmparatorluğu 4.000 metre yükseklikte 40.000 km\'lik taş yol ağı (Qhapaq Ñan), teras tarımı ve dondurarak kurutma teknolojisi geliştirdi; patates ve kinoa tüm dünyaya bu dağlardan yayıldı.',
    ilginc: 'Potósi\'deki (Bolivya) gümüş madenleri 16. yüzyılda İspanya üzerinden tüm dünyanın para sistemini değiştirdi.',
    w: 'Andes'
  },
  {
    id: 'alpler', ad: 'Alpler', tur: 'dag', ll: [46.5, 9.8],
    konum: 'Orta Avrupa (İsviçre, İtalya, Fransa, Avusturya, Almanya, Slovenya)',
    olcu: 'Uzunluk: ~1.200 km · En yüksek: Mont Blanc (4.808 m)',
    ozet: 'Akdeniz dünyasını Orta ve Kuzey Avrupa\'dan ayıran karlı sıradağlardır. Ren, Rhone ve Po nehirlerinin kaynağıdır.',
    tarihOnemi: 'Roma\'yı kuzeyden gelen akınlara karşı yüzyıllarca korudu. MÖ 218\'de Kartacalı komutan Hannibal\'in savaş filleriyle Alpleri aşması, antik tarihin en şaşırtıcı askerî harekâtı oldu.',
    ilginc: '5.300 yıl önce Alplerde donmuş olarak bulunan "Buz Adam Ötzi", Bakır Çağı insanının giysilerini, aletlerini ve yediği son yemeği günümüze taşıdı.',
    w: 'Alps'
  },
  {
    id: 'kafkaslar', ad: 'Kafkas Dağları', tur: 'dag', ll: [43.0, 42.7],
    konum: 'Karadeniz ile Hazar Denizi arası',
    olcu: 'Uzunluk: ~1.200 km · En yüksek: Elbruz (5.642 m)',
    ozet: 'Avrupa ile Asya arasında doğal bir sınır oluşturan sarp ve geçit vermez dağ silsilesidir.',
    tarihOnemi: 'Kuzey bozkırlarından (İskit, Hun, Hazar, Moğol) Orta Doğu\'ya inen istilaları yalnızca Derbent ve Daryal geçitlerine sıkıştırdı; bu yüzden sarp vadilerinde 50\'den fazla dil ve halk binlerce yıl boyunca korundu.',
    ilginc: 'Antik Yunan mitolojisinde ateşin tanrılardan çalınmasıyla cezalandırılan Prometheus\'un zincire vurulduğu yer Kafkaslar olarak anlatılır.',
    w: 'Caucasus Mountains'
  },
  {
    id: 'toroslar', ad: 'Toros Dağları', tur: 'dag', ll: [37.4, 34.8],
    konum: 'Güney Anadolu (Akdeniz\'e paralel)',
    olcu: 'Uzunluk: ~2.000 km · En yüksek: Demirkazık (3.756 m)',
    ozet: 'Anadolu\'nun güney kıyısını iç platodan ayıran, sedir ormanları ve derin kanyonlarla dolu dağ kuşağıdır.',
    tarihOnemi: 'İç Anadolu ile Suriye–Mezopotamya arasındaki tek ana geçiş olan "Gülek Boğazı (Kilikya Kapıları)" Büyük İskender\'den Haçlılara ve Osmanlı ordularına kadar tarihin en stratejik dar boğazlarından biri oldu.',
    ilginc: 'Torosların dayanıklı sedir ağaçları antik çağda Mısır ve Fenike gemilerinin yapımında altın kadar değerliydi.',
    w: 'Taurus Mountains'
  },
  {
    id: 'urallar', ad: 'Ural Dağları', tur: 'dag', ll: [60.0, 59.5],
    konum: 'Rusya (Kuzey Buz Denizi\'nden Kazakistan\'a)',
    olcu: 'Uzunluk: ~2.500 km · En yüksek: Narodnaya (1.895 m)',
    ozet: 'Kuzeyden güneye uzanan, Avrupa ile Asya kıtalarının geleneksel sınırı kabul edilen eski ve zengin madenli dağ sırasıdır.',
    tarihOnemi: 'Zengin demir, bakır, altın ve zümrüt yataklarıyla Rus İmparatorluğu\'nun ve 2. Dünya Savaşı\'nda (fabrikalar doğuya taşınınca) Sovyet sanayisinin can damarı oldu.',
    ilginc: '250–300 milyon yaşındadır; Himalayalar gibi genç dağlara göre çok daha eski ve aşınmıştır.',
    w: 'Ural Mountains'
  },
  {
    id: 'kilimanjaro', ad: 'Kilimanjaro Dağı', tur: 'dag', ll: [-3.07, 37.35],
    konum: 'Tanzanya, Doğu Afrika',
    olcu: 'Yükseklik: 5.895 m (Afrika\'nın en yüksek noktası)',
    ozet: 'Sıradağ olmadan tek başına savanların ortasından yükselen dünyanın en yüksek bağımsız yanardağ kütlesidir.',
    tarihOnemi: 'Ekvator\'un hemen yanında zirvesinde kar bulunması, 19. yüzyılda Avrupalı coğrafyacılar tarafından yıllarca imkânsız sanılıp reddedildi.',
    ilginc: 'Eteğinden zirvesine tırmanan biri birkaç gün içinde tropikal ormandan kutup buzullarına kadar 5 ayrı iklim kuşağı geçer.',
    w: 'Mount Kilimanjaro'
  },

  // ---- Çöller ve Bozkırlar ----
  {
    id: 'sahra', ad: 'Sahra Çölü', tur: 'col', ll: [23.5, 11.0],
    konum: 'Kuzey Afrika (11 ülke)',
    olcu: 'Yüzölçümü: ~9,2 milyon km² (dünyanın en büyük sıcak çölü)',
    ozet: 'Atlas Okyanusu\'ndan Kızıldeniz\'e uzanan, kumulların yanında kayalık platolar ve vahalarla dolu dev çöl.',
    tarihOnemi: 'Tek hörgüçlü devenin kullanımıyla MÖ 1. binyıldan itibaren "Altın ve Tuz Kervanları"na dönüştü; Gana, Mali ve Songhay imparatorlukları ile Timbuktu\'nun zenginliğini doğurdu.',
    ilginc: 'Yaklaşık 10.000 – 5.000 yıl önce Sahra yemyeşil savanlar, dev göller ve nehirlerle doluydu; bugünkü kumların ortasında zürafa ve timsah kaya resimleri bulunur!',
    w: 'Sahara'
  },
  {
    id: 'gobi', ad: 'Gobi Çölü', tur: 'col', ll: [42.5, 103.5],
    konum: 'Güney Moğolistan ve Kuzey Çin',
    olcu: 'Yüzölçümü: ~1,3 milyon km² · Kışın -40 °C, yazın +45 °C',
    ozet: 'Himalayalar\'ın Hint Okyanusu yağmurlarını kesmesiyle oluşan, çoğunlukla taşlık ve soğuk bir Asya çölüdür.',
    tarihOnemi: 'İpek Yolu\'nun en zorlu duraklarından biriydi ve göçebe Türk-Moğol bozkır dünyasıyla yerleşik Çin imparatorlukları arasında doğal bir tampon bölge işlevi gördü.',
    ilginc: '1920\'lerde dünyada ilk kez dinozor yumurtaları Gobi Çölü\'ndeki "Alevli Kayalıklar"da keşfedildi.',
    w: 'Gobi Desert'
  },
  {
    id: 'taklamakan', ad: 'Taklamakan Çölü', tur: 'col', ll: [39.0, 82.5],
    konum: 'Tarım Havzası (Sincan / Doğu Türkistan, Çin)',
    olcu: 'Yüzölçümü: ~337.000 km² (en büyük hareketli kum çöllerinden)',
    ozet: 'Tanrı Dağları ve Kunlun Dağları arasında sıkışmış, etrafı vahalarla çevrili uçsuz bucaksız kum denizi.',
    tarihOnemi: 'İpek Yolu kervanları çölün ortasına giremediği için kuzey (Kaşgar–Turfan) ve güney (Hotan–Dunhuang) vaha şehirlerinden dolandı; bu vahalar Budist, Türk, Sogd ve Çin kültürlerinin harmanlandığı zengin merkezlere dönüştü.',
    ilginc: 'Halk arasında adı sıkça "Giren bir daha çıkamaz" biçiminde yorumlanır; kuru kumları altında 4.000 yıllık mumyalar ve kayıp kentler korunmuştur.',
    w: 'Taklamakan Desert'
  },
  {
    id: 'arabistancolu', ad: 'Arabistan Çölü ve Rub\'ül-Hali', tur: 'col', ll: [20.5, 49.0],
    konum: 'Arap Yarımadası',
    olcu: 'Yüzölçümü: ~2,3 milyon km²',
    ozet: 'Dünyanın en geniş kesintisiz kum çölü olan Rub\'ül-Hali ("Boş Çeyrek") dâhil dev çöl kuşağı.',
    tarihOnemi: 'Zorlu iklimi büyük dış orduların yarımadayı fethetmesini engelledi; buhur (günlük) ve baharat kervan yolları Mekke, Medine ve Petra gibi ticaret merkezlerini besledi.',
    ilginc: '20. yüzyılda kumların altında dünyanın en büyük petrol rezervlerinin keşfedilmesiyle yarımada birkaç on yılda küresel ekonomi merkezine dönüştü.',
    w: 'Arabian Desert'
  },
  {
    id: 'atakama', ad: 'Atakama Çölü', tur: 'col', ll: [-23.8, -69.5],
    konum: 'Kuzey Şili (And Dağları ile Pasifik arası)',
    olcu: 'Yüzölçümü: ~105.000 km² (dünyanın en kurak kutup dışı çölü)',
    ozet: 'Soğuk Humboldt Akıntısı ve yüksek And Dağları yüzünden bazı noktalarına yüzyıllardır hiç yağmur düşmemiş çöl.',
    tarihOnemi: '19. yüzyılda buradaki zengin nitrat (güherçile) ve bakır yatakları yüzünden Şili, Peru ve Bolivya arasında "Pasifik Savaşı" çıktı.',
    ilginc: 'Toprağı Mars\'a o kadar benzer ki NASA uzay araçlarını burada dener; bulutsuz gökyüzü sayesinde dünyanın en dev teleskopları (ALMA) buraya kurulmuştur.',
    w: 'Atacama Desert'
  },
  {
    id: 'bozkir', ad: 'Büyük Avrasya Bozkırı', tur: 'col', ll: [49.0, 74.0],
    konum: 'Macaristan\'dan Moğolistan\'a (~8.000 km)',
    olcu: 'Tarihin "Atlı Otoyolu"',
    ozet: 'Avrupa\'nın ortasından Çin sınırına kadar kesintisiz uzanan dev otlak kuşağı.',
    tarihOnemi: 'Atın MÖ ~3500\'de burada evcilleştirilmesiyle İskitler, Hunlar, Göktürkler, Kıpçaklar ve Moğollar kıtalar arası hareket kabiliyeti kazandı; Kavimler Göçü ve İpek Yolu bu koridordan şekillendi.',
    ilginc: 'Tekerlekli araba, üzengi ve bileşik yay gibi savaş ve ulaşım devrimleri büyük ölçüde bu bozkır kuşağında doğup tüm dünyaya yayıldı.',
    w: 'Eurasian Steppe'
  },

  // ---- Tarihî Havzalar ve Nehirler ----
  {
    id: 'bereketlihilal', ad: 'Bereketli Hilal', tur: 'havza', ll: [35.5, 40.5],
    konum: 'Güneydoğu Anadolu, Mezopotamya ve Levant',
    olcu: 'Tarımın ve ilk kentlerin doğduğu hilal biçimli kuşak',
    ozet: 'Dicle, Fırat ve Ürdün nehirleri ile Güneydoğu Anadolu eteklerini kapsayan, yabani buğday ve arpanın anavatanı.',
    tarihOnemi: 'İnsanlık yaklaşık 11–12 bin yıl önce burada avcı-toplayıcılıktan tarıma ve yerleşik hayata geçti; Göbekli Tepe, Çatalhöyük, Eriha ve Sümer şehirleri bu kuşağın meyvesidir.',
    ilginc: 'Bugün dünya nüfusunun temel gıdası olan buğday, arpa, mercimek, nohut ile koyun ve keçi ilk kez bu bölgede evcilleştirildi.',
    w: 'Fertile Crescent'
  },
  {
    id: 'maveraunnehir', ad: 'Maveraünnehir', tur: 'havza', ll: [40.2, 65.5],
    konum: 'Ceyhun (Amu Derya) ve Seyhun (Siri Derya) nehirleri arası (Özbekistan, Tacikistan, Kazakistan)',
    olcu: 'Adı Arapçada "Nehrin Ötesi" anlamına gelir',
    ozet: 'Buhara, Semerkant, Hive ve Taşkent gibi efsanevi vaha şehirlerini barındıran Orta Asya\'nın verimli kalbi.',
    tarihOnemi: 'İpek Yolu\'nun ana kavşağı ve İslam Altın Çağı\'nın en parlak bilim merkezlerinden biri oldu: İbn Sina, Harezmi (cebire adını veren), Biruni, Farabi ve Uluğ Bey bu topraklarda yetişti.',
    ilginc: '751 Talas Savaşı sonrası kâğıt yapımı Çin\'den ilk kez Semerkant\'a geldi ve Maveraünnehir üzerinden tüm İslam dünyasına ve Avrupa\'ya yayıldı.',
    w: 'Transoxiana'
  },
  {
    id: 'mezopotamya', ad: 'Mezopotamya (Fırat ve Dicle)', tur: 'nehir', ll: [32.8, 44.8],
    konum: 'Irak, Suriye ve Güneydoğu Anadolu',
    olcu: 'Fırat (~2.800 km) ve Dicle (~1.900 km) arasındaki ova',
    ozet: 'Adı Yunancada "İki Nehir Arası" demektir; sulama kanallarıyla antik dünyanın en verimli tahıl ambarına dönüştü.',
    tarihOnemi: 'Sümerler, Akadlar, Babilliler ve Asurlular burada çivi yazısını, ilk yasaları (Hammurabi), tekerleği, 60\'lık saat/dakika sistemini ve ilk büyük imparatorlukları kurdu.',
    ilginc: 'Bir saatin 60 dakika, bir dairenin 360 derece olması hâlâ Mezopotamyalı Sümer ve Babillilerin 60 tabanlı matematiğinden mirastır.',
    w: 'Mesopotamia'
  },
  {
    id: 'nilvadisi', ad: 'Nil Vadisi ve Deltası', tur: 'nehir', ll: [26.5, 31.8],
    konum: 'Doğu ve Kuzeydoğu Afrika (11 ülke)',
    olcu: 'Uzunluk: ~6.650 km (dünyanın en uzun nehirlerinden)',
    ozet: 'Sahra Çölü\'nün ortasında ince bir yeşil yaşam şeridi açarak Akdeniz\'e dökülen dev nehir.',
    tarihOnemi: 'Her yıl düzenli taşarak geride verimli kara çamur bıraktı; bu öngörülebilir bereket 3.000 yıllık Antik Mısır uygarlığını, 365 günlük güneş takvimini ve piramitleri mümkün kıldı.',
    ilginc: 'Nil\'de su güneyden kuzeye akarken rüzgâr kuzeyden güneye eser; bu sayede antik gemiler kuzeye akıntıyla, güneye yelken açarak kolayca giderdi.',
    w: 'Nile'
  },
  {
    id: 'indusvadisi', ad: 'İndus Vadisi', tur: 'havza', ll: [27.5, 68.5],
    konum: 'Pakistan ve Kuzeybatı Hindistan',
    olcu: 'Uzunluk: ~3.180 km (Tibet\'ten Umman Denizi\'ne)',
    ozet: 'Himalaya kar sularıyla beslenen, MÖ 2600\'de dünyanın en planlı ilk şehirlerine ev sahipliği yapmış havza.',
    tarihOnemi: 'Harappa ve Mohenco-Daro kentleri 4.500 yıl önce ızgara sokak planı, tuğla evler ve kapalı kanalizasyon sistemine sahipti; "Hindistan" ve "Hint" adları da bu nehirden gelir.',
    ilginc: 'İndus Vadisi uygarlığının mühürlerindeki gizemli yazı sistemi, aradan 100 yıl geçmesine rağmen hâlâ çözülemedi.',
    w: 'Indus Valley Civilisation'
  },
  {
    id: 'sariirmak', ad: 'Sarı Irmak (Huang He) Havzası', tur: 'nehir', ll: [35.5, 113.0],
    konum: 'Kuzey Çin',
    olcu: 'Uzunluk: ~5.464 km (Çin uygarlığının beşiği)',
    ozet: 'Taşıdığı ince sarı lös toprağı yüzünden suları sarı akan, Kuzey Çin ovasını besleyen dev nehir.',
    tarihOnemi: 'Şang, Zhou, Qin ve Han hanedanları bu havzada kuruldu; tarım ve sulama için kurulan merkezi teşkilat 4.000 yıllık Çin devlet geleneğini doğurdu.',
    ilginc: 'Hem verimliliğiyle "Ana Nehir" hem de yıkıcı taşkınlarıyla "Çin\'in Kederi" olarak anılmıştır; tarih boyunca yatağını 20\'den fazla kez değiştirmiştir.',
    w: 'Yellow River'
  },
  {
    id: 'anadoluplatosu', ad: 'Anadolu Platosu', tur: 'havza', ll: [39.0, 33.8],
    konum: 'Türkiye (Asya ile Avrupa arasındaki köprü)',
    olcu: 'Ortalama yükseklik: ~1.100 m',
    ozet: 'Üç yanı denizlerle, kuzey ve güneyi yüksek dağ sıralarıyla çevrili, tarih boyunca uygarlıkların kavşağı olmuş yarımada.',
    tarihOnemi: 'Hititlerden Friglere, Lidya\'da ilk madeni paranın icadından Roma, Bizans, Selçuklu, Osmanlı ve Türkiye Cumhuriyeti\'ne kadar Doğu ile Batı\'yı birleştiren ana köprü oldu.',
    ilginc: 'İnsanlık tarihinin bilinen en eski tapınak merkezi Göbekli Tepe ve en büyük Neolitik yerleşimlerinden Çatalhöyük Anadolu\'dadır.',
    w: 'Anatolia'
  },
  {
    id: 'amazon', ad: 'Amazon Havzası ve Nehri', tur: 'nehir', ll: [-3.4, -62.5],
    konum: 'Güney Amerika (Brezilya, Peru, Kolombiya vb.)',
    olcu: 'Uzunluk: ~6.400 km · Dünya tatlı su akışının ~%20\'si',
    ozet: 'Dünyadaki en büyük tropikal yağmur ormanını ve gezegendeki bilinen türlerin yaklaşık %10\'unu barındıran dev havza.',
    tarihOnemi: 'Uzun süre "el değmemiş boş orman" sanıldı; son yıllardaki lazer (LiDAR) taramaları Kolomb öncesi burada milyonlarca insanın yaşadığı büyük bahçe-şehirler ve verimli "Terra Preta" (kara toprak) tarımı kurduğunu kanıtladı.',
    ilginc: 'Amazon Nehri\'nin genişliği yağış mevsiminde bazı yerlerde 40 kilometreyi aşar ve üzerinde tek bir köprü bile yoktur.',
    w: 'Amazon basin'
  },
  {
    id: 'tuna', ad: 'Tuna Nehri Havzası', tur: 'nehir', ll: [46.2, 19.0],
    konum: 'Orta ve Güneydoğu Avrupa (10 ülkeden geçer)',
    olcu: 'Uzunluk: ~2.850 km (Kara Orman\'dan Karadeniz\'e)',
    ozet: 'Viyana, Bratislava, Budapeşte ve Belgrad gibi dört başkenti birbirine bağlayan Avrupa\'nın ana su yolu.',
    tarihOnemi: 'Yüzyıllarca Roma İmparatorluğu\'nun kuzey sınırı ("Limes"), ardından Osmanlı ile Habsburg imparatorlukları arasındaki büyük mücadelenin ve Orta Avrupa ticaretinin omurgası oldu.',
    ilginc: 'Dünyada en fazla sayıda ülkeden (10 ülke) geçen nehirdir.',
    w: 'Danube'
  },
  {
    id: 'buyukyarik', ad: 'Büyük Yarık Vadisi (Doğu Afrika)', tur: 'havza', ll: [-1.5, 36.2],
    konum: 'Doğu Afrika (Etiyopya, Kenya, Tanzanya)',
    olcu: 'Uzunluk: ~6.000 km · Kıtanın yavaşça ikiye ayrıldığı fay hattı',
    ozet: 'Volkanik göller, savanlar ve derin kanyonlarla dolu dev tektonik çöküntü.',
    tarihOnemi: 'İnsanlığın beşiği sayılır: "Lucy" (Australopithecus), Homo habilis ve en eski Homo sapiens fosilleri ile ilk taş aletler bu vadide bulundu.',
    ilginc: 'Afrika kıtası bu yarık boyunca yılda birkaç milimetre ayrılıyor; on milyonlarca yıl sonra Doğu Afrika ayrı bir ada kıtasına dönüşecek.',
    w: 'East African Rift'
  }
];
