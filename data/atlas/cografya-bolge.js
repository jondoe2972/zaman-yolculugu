// 🏔️ Dünya Atlası: Yüksek dağlar (rakımlarıyla), dünyada eşi benzeri olmayan doğa harikaları, çöller, nehirler ve tarihî havzalar.
// tur: 'dag' (🏔️), 'harika' (✨), 'col' (🏜️), 'havza' (🌿), 'nehir' (🌊)
'use strict';
window.ATLAS_COGRAFYA = [
  // ---- Eşsiz Doğa Harikaları (Dünyada Eşi Benzeri Olmayan Yerler) ----
  {
    id: 'kapadokya', ad: 'Kapadokya ve Peri Bacaları', tur: 'harika', ll: [38.64, 34.83],
    yukseklik: '1.000 – 1.400 m (volkanik plato)',
    konum: 'Nevşehir, Ürgüp, Göreme, Avanos (İç Anadolu, Türkiye)',
    olcu: 'Yaklaşık 10 milyon yıllık volkanik tüf vadileri · 36+ yeraltı şehri',
    ozet: 'Erciyes, Hasan Dağı ve Güllüdağ\'ın milyonlarca yıl önce püskürttüğü kalın volkanik kül ve tüf tabakalarının yağmur, rüzgâr ve akarsularla oyulmasıyla oluşan, dünyada eşi benzeri olmayan peri bacaları diyarıdır. Yumuşak tüfün üstündeki sert bazalt şapkalar, koni biçimli dev doğal kuleleri korumuştur.',
    tarihOnemi: 'Yumuşak kaya kolayca oyulabildiği için Hititlerden Romalılara, ilk Hristiyanlardan Bizans\'a kadar insanlar kayaların içine evler, kiliseler ve Derinkuyu ile Kaymaklı gibi 8 kat yerin altına inen, 20.000 kişiyi barındırabilen dev yeraltı şehirleri kurdu.',
    ilginc: 'Derinkuyu Yeraltı Şehri\'nin 85 metre derine inen havalandırma bacaları, şarap mahzenleri, okulları ve içeriden tek kişinin kapatabildiği 500 kiloluk yuvarlak taş kapıları vardır.',
    w: 'Cappadocia'
  },
  {
    id: 'pamukkale', ad: 'Pamukkale Travertenleri', tur: 'harika', ll: [37.92, 29.12],
    yukseklik: '360 m · 2,7 km uzunluğunda beyaz teraslar',
    konum: 'Denizli (Ege / Güneybatı Anadolu, Türkiye)',
    olcu: '17 sıcak su kaynağı (35 – 100 °C) · UNESCO Dünya Mirası',
    ozet: 'Yeraltından çıkan kalsiyum bikarbonatça zengin sıcak termal suların yamaçtan akarken karbondioksit kaybedip bembeyaz kireçtaşı teraslarına (traverten) dönüşmesiyle oluşan, uzaktan pamuktan bir kaleyi andıran eşsiz doğa harikasıdır.',
    tarihOnemi: 'Bergama Krallığı MÖ 2. yüzyılda bu şifalı suların hemen tepesine Hierapolis antik kentini kurdu; Roma döneminde dünyanın en büyük termal sağlık ve kaplıca merkezlerinden biri oldu.',
    ilginc: 'Antik Havuz\'da (Kleopatra Havuzu) MS 7. yüzyıldaki büyük depremle suya devrilen gerçek Roma mermer sütunlarının arasında 36 °C suda yüzülebilir.',
    w: 'Pamukkale'
  },
  {
    id: 'buyukkanyon', ad: 'Büyük Kanyon (Grand Canyon)', tur: 'harika', ll: [36.10, -112.11],
    yukseklik: '1.857 m derinlik · 2.100 m kenar rakımı',
    konum: 'Arizona, ABD',
    olcu: 'Uzunluk: 446 km · Genişlik: 6 – 29 km',
    ozet: 'Kolorado Nehri\'nin yaklaşık 5–6 milyon yıl boyunca Kolorado Platosu\'nu keserek açtığı devasa yarık. Duvarlarındaki her renkli kaya katmanı, Dünya\'nın neredeyse 2 milyar yıllık jeolojik geçmişini açık bir kitap gibi sergiler.',
    tarihOnemi: 'Pueblo, Havasupai ve Navajo yerli halkları binlerce yıldır kanyonun vadilerinde ve kenarlarında yaşamış, burayı kutsal saymıştır.',
    ilginc: 'Kanyonun tepesi ile tabanı arasında 15 °C\'yi aşan sıcaklık farkı vardır; tepede kar yağarken dipte çöl sıcağı yaşanabilir.',
    w: 'Grand Canyon'
  },
  {
    id: 'uyuni', ad: 'Salar de Uyuni (Tuz Aynası)', tur: 'harika', ll: [-20.13, -67.49],
    yukseklik: '3.656 m (And Platosu)',
    konum: 'Potosí, Güneybatı Bolivya',
    olcu: 'Yüzölçümü: 10.582 km² (dünyanın en büyük tuz düzlüğü)',
    ozet: 'Tarihöncesi dev bir gölün kurumasıyla geriye kalan uçsuz bucaksız bembeyaz tuz çölüdür. Yağmur mevsiminde üzeri birkaç santimetre suyla kaplanınca gökyüzünü kusursuzca yansıtan dünyanın en büyük doğal aynasına dönüşür.',
    tarihOnemi: 'İnka ve Aymara toplulukları yüzyıllardır buradan çıkardıkları tuzu lama kervanlarıyla And köylerine taşıdı; bugün altında dünyanın en büyük lityum rezervlerinden biri yatıyor.',
    ilginc: 'O kadar dümdüzdür ki 10.000 km²\'lik alanda yükseklik farkı 1 metreden azdır; bu yüzden NASA ve ESA uyduları yükseklik sensörlerini buraya bakarak kalibre eder.',
    w: 'Salar de Uyuni'
  },
  {
    id: 'setresifi', ad: 'Büyük Set Resifi (Great Barrier Reef)', tur: 'harika', ll: [-18.28, 147.70],
    yukseklik: 'Deniz seviyesi · 2.300 km uzunluk',
    konum: 'Queensland açıkları, Mercan Denizi (Avustralya)',
    olcu: '2.900\'den fazla resif ve 900 ada · ~344.400 km²',
    ozet: 'Milyarlarca minik mercan polibinin binlerce yılda inşa ettiği, uzaydan çıplak gözle görülebilen Dünya\'daki en büyük canlı yapıdır. 1.500\'den fazla balık türü, deniz kaplumbağaları ve balinalara yuva olur.',
    tarihOnemi: 'Aborjin ve Torres Boğazı yerlileri 60.000 yılı aşkın süredir bu resifleri avlanma, denizcilik ve kültürel hikâyelerinin merkezi olarak kullandı.',
    ilginc: 'Resif tek bir kaya değil, her biri toplu iğne başı kadar olan canlı mercanların kireç iskeletlerinden oluşan dev bir okyanus şehridir.',
    w: 'Great Barrier Reef'
  },
  {
    id: 'zhangjiajie', ad: 'Zhangjiajie Taş Sütunları', tur: 'harika', ll: [29.32, 110.44],
    yukseklik: '1.000 – 1.262 m (200 m\'lik dik kuleler)',
    konum: 'Hunan Eyaleti, Çin',
    olcu: '3.000\'den fazla kuvars-kumtaşı sütunu',
    ozet: 'Suyun ve donma-çözülme döngüsünün milyonlarca yıl boyunca yumuşak kayaları aşındırıp geride 200 metre yüksekliğinde ince, dik taş kuleler bıraktığı büyüleyici vadidir. Tepelerinde çam ağaçları yetişir ve sık sık sis deniziyle kaplanır.',
    tarihOnemi: 'Geleneksel Çin mürekkep manzara resimlerine (Shan Shui) yüzyıllarca ilham verdi; 2009\'da Avatar filmindeki uçan Pandora dağları bu sütunlardan esinlenerek tasarlandı.',
    ilginc: 'Sütunlardan birinin yamacına kurulu Bailong Asansörü, 326 metre yüksekliğiyle dünyanın en yüksek açık hava cam asansörüdür.',
    w: 'Zhangjiajie National Forest Park'
  },
  {
    id: 'halong', ad: 'Ha Long Körfezi', tur: 'harika', ll: [20.91, 107.18],
    yukseklik: 'Denizden 100 – 200 m yükselen kireçtaşı kuleleri',
    konum: 'Kuzeydoğu Vietnam (Tonkin Körfezi)',
    olcu: '1.600\'den fazla ada ve adacık · ~1.553 km²',
    ozet: 'Zümrüt yeşili suların içinden dikey olarak yükselen, üzeri tropikal ormanlarla kaplı binlerce kireçtaşı adacığı, gizli deniz mağaraları ve iç lagünlerden oluşan masalsı karstik körfez.',
    tarihOnemi: 'Adı Vietnamcada "Alçalan Ejderha" demektir; efsaneye göre ülkeyi işgalcilerden korumak için gökten inen ejderhalar ağızlarından yeşim taşları saçarak bu adaları oluşturmuştur.',
    ilginc: 'Adaların çoğu o kadar dik ve ulaşılması zordur ki üzerinde hiçbir insan yaşamaz; buna karşılık yüzen balıkçı köyleri nesillerdir körfezin sakin sularında yaşar.',
    w: 'Hạ Long Bay'
  },
  {
    id: 'victoriaselale', ad: 'Victoria Şelalesi (Mosi-oa-Tunya)', tur: 'harika', ll: [-17.92, 25.86],
    yukseklik: '108 m düşüş · 1.708 m genişlik',
    konum: 'Zambiya ve Zimbabve sınırı (Zambezi Nehri)',
    olcu: 'Dünyanın en geniş tek parça su perdesi',
    ozet: 'Zambezi Nehri\'nin tüm genişliğiyle dar bir bazalt yarığına dökülerek oluşturduğu devasa şelale. Yerel dildeki adı "Mosi-oa-Tunya", yani "Gürleyen Duman"dır.',
    tarihOnemi: 'Yüzyıllardır Tonga ve Lozi halkları için kutsal bir yerdi; 1855\'te İskoç kâşif David Livingstone tarafından Avrupa dünyasına tanıtıldı.',
    ilginc: 'Suyun çarpışmasıyla yükselen sis bulutu 400 metre göğe çıkar ve 30 kilometreden görülür; dolunay gecelerinde burada nadir "ay gökkuşağı" (moonbow) oluşur.',
    w: 'Victoria Falls'
  },
  {
    id: 'iguazu', ad: 'İguazu Şelaleleri', tur: 'harika', ll: [-25.69, -54.44],
    yukseklik: '82 m düşüş · 2,7 km genişlik',
    konum: 'Arjantin ve Brezilya sınırı',
    olcu: '275 ayrı şelaleden oluşan dünyanın en büyük şelale sistemi',
    ozet: 'Subtropikal yağmur ormanının ortasında, at nalı biçimli "Şeytan Boğazı" (Garganta del Diablo) dâhil 275 ayrı çağlayanın gürleyerek döküldüğü doğa mucizesi.',
    tarihOnemi: 'Guarani yerlilerinin dilinde adı "Büyük Su" anlamına gelir; 1541\'de İspanyol kâşif Cabeza de Vaca tarafından kayda geçirildi.',
    ilginc: 'ABD First Lady\'si Eleanor Roosevelt İguazu\'yu ilk gördüğünde şaşkınlıkla sadece "Zavallı Niagara!" diyebilmiştir.',
    w: 'Iguazu Falls'
  },
  {
    id: 'sokotra', ad: 'Sokotra Adası', tur: 'harika', ll: [12.46, 53.82],
    yukseklik: '1.503 m (Haggier Dağları)',
    konum: 'Hint Okyanusu (Yemen\'e bağlı)',
    olcu: 'Bitki türlerinin %37\'si Dünya\'da başka hiçbir yerde yok',
    ozet: 'Milyonlarca yıldır anakaradan kopuk kaldığı için evrimin tamamen farklı bir yol izlediği, şemsiye biçimli Ejderha Kanı ağaçları ve şişe ağaçlarıyla "Dünya\'daki uzaylı gezegen" diye anılan ada.',
    tarihOnemi: 'Antik çağda Mısır, Roma ve Arap denizciler adanın kırmızı Ejderha Kanı reçinesini ilaç, boya ve tütsü olarak altın değerinde alıp satardı.',
    ilginc: 'Ejderha Kanı ağacının gövdesi çizildiğinde kan kırmızısı bir reçine akar; şemsiye şeklindeki tepesi çöl sıcağında kendi köküne gölge ve çiy toplar.',
    w: 'Socotra'
  },
  {
    id: 'fiyortlar', ad: 'Norveç Fiyortları (Geirangerfjord)', tur: 'harika', ll: [62.10, 7.09],
    yukseklik: '1.000 – 1.400 m dik kaya duvarları · 1.300 m derinlik',
    konum: 'Batı Norveç kıyıları',
    olcu: 'Sognefjord 205 km uzunluğuyla Avrupa\'nın en uzun fiyordu',
    ozet: 'Buzul çağında kilometrelerce kalınlıktaki dev buzulların dağları U biçiminde oyması ve buzlar eriyince deniz suyunun bu derin vadileri doldurmasıyla oluşan nefes kesici deniz kolları.',
    tarihOnemi: 'Vikinglerin fırtınalardan korunaklı doğal limanları ve uzun gemilerini inşa ettikleri gizli üsler bu fiyortların içindeydi.',
    ilginc: 'Fiyortların iç kesimlerinde su o kadar derindir ki dev okyanus gemileri sarp dağ duvarlarının ve şelalelerin birkaç metre yanından geçebilir.',
    w: 'Geirangerfjord'
  },
  {
    id: 'yellowstone', ad: 'Yellowstone Süpervolkanı ve Gayzerleri', tur: 'harika', ll: [44.43, -110.59],
    yukseklik: '2.400 m (ortalama plato rakımı)',
    konum: 'Wyoming, Montana, Idaho (ABD)',
    olcu: 'Dünyadaki tüm gayzerlerin %50\'sinden fazlası burada',
    ozet: 'Yerin hemen birkaç kilometre altındaki dev magma odasının ısıttığı 10.000\'den fazla sıcak su kaynağı, fokurdayan çamur havuzları, Old Faithful gayzeri ve gökkuşağı halkalı Grand Prismatic gölüyle canlı bir jeoloji laboratuvarı.',
    tarihOnemi: '1872\'de dünyanın ilk millî parkı ilan edildi ve küresel doğa koruma hareketinin başlangıcı oldu.',
    ilginc: 'Grand Prismatic kaynağının turuncu, sarı ve yeşil halkaları kimyasal boya değil, kaynar suda yaşayabilen farklı ısı-sever (termofil) bakterilerdir.',
    w: 'Yellowstone National Park'
  },
  {
    id: 'baykal', ad: 'Baykal Gölü', tur: 'harika', ll: [53.55, 108.16],
    yukseklik: '455 m rakım · 1.642 m derinlik (dünyanın en derini)',
    konum: 'Güney Sibirya, Rusya',
    olcu: '25 – 30 milyon yaşında · Dünya sıvı tatlı suyunun ~%20\'si',
    ozet: 'Dünyanın hem en derin hem en eski tatlı su gölüdür. O kadar berraktır ki kışın cam gibi donduğunda 40 metre altındaki taşlar bile seçilebilir.',
    tarihOnemi: 'Cengiz Han\'ın anayurdu ve Sibirya\'daki Buryat halkları için "Kutsal Deniz" olarak anılmıştır.',
    ilginc: 'Baykal Gölü\'nde Dünya\'da yalnızca burada yaşayan tek tatlı su foku olan sevimli "Nerpa" (Baykal foku) yaşar.',
    w: 'Lake Baikal'
  },
  {
    id: 'lutgolu', ad: 'Lut Gölü (Ölü Deniz)', tur: 'harika', ll: [31.55, 35.47],
    yukseklik: '-430 m (karadaki en alçak nokta)',
    konum: 'Ürdün, Filistin ve İsrail sınırı',
    olcu: '%34 tuzluluk oranı (okyanuslardan ~10 kat daha tuzlu)',
    ozet: 'Büyük Yarık Vadisi\'nin devamında, deniz seviyesinin 430 metre altında yer alan aşırı tuzlu göl. Yüksek yoğunluğu sayesinde yüzme bilmeyen biri bile batmadan suyun üstünde kitap okuyabilir.',
    tarihOnemi: 'Antik Mısır\'da mumyalama için buradan doğal asfalt (bitüm) çıkarılırdı; kıyısındaki Kumran mağaralarında 2.000 yıllık "Ölü Deniz Parşömenleri" bulundu.',
    ilginc: 'Yüksek tuzluluk yüzünden içinde balık veya bitki yaşayamadığı için "Ölü Deniz" denir; ancak mikroskobik tuz-sever bakteriler hâlâ hayatta kalabilir.',
    w: 'Dead Sea'
  },
  {
    id: 'danakil', ad: 'Danakil Çöküntüsü (Dallol)', tur: 'harika', ll: [14.24, 40.30],
    yukseklik: '-125 m (deniz seviyesinin altı)',
    konum: 'Afar Bölgesi, Kuzeydoğu Etiyopya',
    olcu: 'Yıllık ortalama sıcaklık: ~34,6 °C (Dünya\'nın en sıcak yerleşim bölgelerinden)',
    ozet: 'Üç tektonik levhanın birbirinden ayrıldığı noktada kükürt, demir ve tuzun oluşturduğu neon sarı, turuncu ve yeşil asit gölleri ile aktif Erta Ale lav gölünü barındıran akıl almaz coğrafya.',
    tarihOnemi: 'Afar göçebeleri binlerce yıldır buradan kestikleri tuz kalıplarını deve kervanlarıyla Etiyopya yaylalarına taşıyıp "beyaz altın" olarak takas ediyor.',
    ilginc: 'NASA ve astrobiyologlar, başka gezegenlerde ekstrem koşullarda yaşamın nasıl var olabileceğini anlamak için Danakil\'deki asit göllerini inceler.',
    w: 'Danakil Depression'
  },
  {
    id: 'antilop', ad: 'Antilop Kanyonu', tur: 'harika', ll: [36.86, -111.37],
    yukseklik: '1.120 m · 40 m derinlikte dar yarık',
    konum: 'Navajo Toprakları, Arizona (ABD)',
    olcu: 'Ani çöl sellerinin milyonlarca yılda oyduğu kumtaşı koridorları',
    ozet: 'Kırmızı Navajo kumtaşının ani çöl selleri ve rüzgârla dalga dalga oyulması sonucu oluşan dar yarık kanyonu. Öğle güneşinin tepeden dar aralıklardan süzülmesiyle duvarlar turuncu, mor ve altın renklere bürünür.',
    tarihOnemi: 'Navajo halkının dilinde adı "Suyun kayaların arasından aktığı yer" anlamına gelir ve kutsal bir doğa mekânı olarak korunur.',
    ilginc: 'Kanyonun kilometrelerce uzağına yağan bir yağmur bile dakikalar içinde dar koridoru metrelerce sel suyuyla doldurabilir.',
    w: 'Antelope Canyon'
  },

  // ---- Yüksek Dağlar ve Sıradağlar (Rakımlarıyla) ----
  {
    id: 'agri', ad: 'Ağrı Dağı', tur: 'dag', ll: [39.70, 44.30],
    yukseklik: '5.137 m (Türkiye\'nin en yüksek zirvesi)',
    konum: 'Ağrı – Iğdır sınırı (Doğu Anadolu, Türkiye)',
    olcu: 'Büyük Ağrı: 5.137 m · Küçük Ağrı: 3.896 m · Taban çapı: ~40 km',
    ozet: 'Ovanın ortasından tek başına yükselerek bulutları delen, tepesi dört mevsim kalıcı buzulla kaplı sönmüş dev stratovolkandır. Türkiye\'nin en yüksek noktası ve Anadolu\'nun görkemli çatısıdır.',
    tarihOnemi: 'Binlerce yıldır Mezopotamya, Ermeni, İran ve Türk efsanelerinin merkezinde yer aldı; Tufan anlatılarında Nuh\'un Gemisi\'nin oturduğu dağ olarak tüm dünyada ün kazandı.',
    ilginc: 'Ağrı Dağı\'nın zirvesindeki buz örtüsü Türkiye\'nin en büyük buzuludur; son kez 1840\'ta büyük bir deprem ve buhar patlamasıyla yamaçlarında dev heyelan yaşanmıştır.',
    w: 'Mount Ararat'
  },
  {
    id: 'everest', ad: 'Everest Dağı (Chomolungma)', tur: 'dag', ll: [27.99, 86.93],
    yukseklik: '8.849 m (Dünyanın en yüksek zirvesi)',
    konum: 'Nepal – Çin (Tibet) sınırı, Himalayalar',
    olcu: 'Deniz seviyesinden 8.848,86 m · Zirvede oksijen %33',
    ozet: 'Dünya\'nın deniz seviyesinden en yüksek noktasıdır. Tibetçe adı "Chomolungma" (Evrenin Ana Tanrıçası), Nepalce adı "Sagarmatha" (Göğün Alnı) demektir.',
    tarihOnemi: '29 Mayıs 1953\'te Yeni Zelandalı Edmund Hillary ve Nepalli Şerpa Tenzing Norgay zirveye ulaşan ilk insanlar olarak tarihe geçti.',
    ilginc: 'Everest\'in en tepesindeki kireçtaşları 450 milyon yıl önce eski bir okyanusun tabanıydı; yani zirvede deniz canlısı fosilleri bulunur!',
    w: 'Mount Everest'
  },
  {
    id: 'k2', ad: 'K2 Dağı (Chogori)', tur: 'dag', ll: [35.88, 76.51],
    yukseklik: '8.611 m (Dünyanın 2. en yüksek zirvesi)',
    konum: 'Pakistan – Çin sınırı, Karakurum Dağları',
    olcu: '8.611 m · "Vahşi Dağ" (en zorlu 8.000\'lik)',
    ozet: 'Everest\'ten sadece 238 metre daha alçak ama çok daha dik, fırtınalı ve çığ tehlikesi yüksek dev piramit zirvesidir.',
    tarihOnemi: 'İlk kez 1954\'te İtalyan ekip (Lino Lacedelli ve Achille Compagnoni) tarafından çıkıldı; kış tırmanışı ise 2021\'e kadar başarılamadı.',
    ilginc: '1856\'da Britanyalı haritacılar Karakurum\'da ölçtükleri 2. zirveye geçici olarak "K2" (Karakurum-2) kodunu verdi ve o kod kalıcı adına dönüştü.',
    w: 'K2'
  },
  {
    id: 'aconcagua', ad: 'Aconcagua Dağı', tur: 'dag', ll: [-32.65, -70.01],
    yukseklik: '6.961 m (Amerika kıtasının en yüksek zirvesi)',
    konum: 'Mendoza, Arjantin (And Dağları)',
    olcu: 'Asya dışındaki en yüksek dağ (6.961 m)',
    ozet: 'Güney ve Kuzey Amerika\'nın tamamındaki en yüksek zirvedir. Zirvesine yakın bölgelerde şiddetli "Viento Blanco" (Beyaz Rüzgâr) fırtınaları eser.',
    tarihOnemi: 'İnkalar bu dağı kutsal sayar, 5.000 metrenin üzerindeki yamaçlarına kurban ve adak törenleri düzenlerdi; 1985\'te burada iyi korunmuş bir İnka mumyası bulundu.',
    ilginc: 'Teknik buz tırmanışı gerektirmeyen en yüksek dağdır ama düşük oksijen ve sert rüzgâr yüzünden tırmanıcıların çoğu zirveye ulaşamadan geri döner.',
    w: 'Aconcagua'
  },
  {
    id: 'denali', ad: 'Denali Dağı', tur: 'dag', ll: [63.07, -151.01],
    yukseklik: '6.190 m (Kuzey Amerika\'nın en yüksek zirvesi)',
    konum: 'Alaska, ABD',
    olcu: 'Tabandan zirveye 5.500 m dikey yükseliş (Everest\'ten bile fazla!)',
    ozet: 'Kuzey Kutup Dairesi\'ne yakın konumu nedeniyle neredeyse tamamı devasa buzullarla kaplı, yıl boyunca -40 °C\'nin altına inen dev granit kütlesi.',
    tarihOnemi: 'Koyukon yerlilerinin dilinde "Yüce Olan" anlamına gelen Denali adı, uzun süre "Mount McKinley" diye anıldıktan sonra 2015\'te resmen geri verildi.',
    ilginc: 'Everest 5.200 metrelik yüksek bir platodan yükselirken Denali neredeyse deniz seviyesindeki ovadan tek parça 5.500 metre fırladığı için görsel olarak dünyanın en heybetli dağlarından biridir.',
    w: 'Denali'
  },
  {
    id: 'elbruz', ad: 'Elbruz Dağı', tur: 'dag', ll: [43.35, 42.44],
    yukseklik: '5.642 m (Avrupa ve Kafkasların en yüksek zirvesi)',
    konum: 'Kabardey-Balkarya / Karaçay-Çerkesya (Rusya, Kafkaslar)',
    olcu: 'Batı zirvesi: 5.642 m · Doğu zirvesi: 5.621 m',
    ozet: 'İki karlı konisiyle Kafkas Dağları\'nın taç mücevheri olan sönmüş dev yanardağ. Avrupa kıtasının en yüksek noktası kabul edilir.',
    tarihOnemi: 'Karaçay-Balkar dilinde "Mingi-Tav" (Ebedî Dağ) diye anılır; 2. Dünya Savaşı\'nda 1942\'de Alman ve Sovyet dağ birlikleri bu zirvede bile çatışmıştır.',
    ilginc: 'Üzerinde 22 ayrı buzul bulunur ve bu buzullar Kafkasların en büyük nehirlerinden Kuban ile Terek\'i besler.',
    w: 'Mount Elbrus'
  },
  {
    id: 'montblanc', ad: 'Mont Blanc', tur: 'dag', ll: [45.83, 6.86],
    yukseklik: '4.808 m (Alplerin ve Batı Avrupa\'nın en yüksek zirvesi)',
    konum: 'Fransa – İtalya sınırı (Alpler)',
    olcu: 'Adı Fransızcada "Beyaz Dağ" anlamına gelir',
    ozet: 'Kalın buz takkesiyle parlayan, modern dağcılık (alpinizm) sporunun doğduğu efsanevi zirve.',
    tarihOnemi: '1786\'da Jacques Balmat ve Michel Paccard\'ın Mont Blanc\'a çıkışı, insanlık tarihinde modern dağcılığın başlangıcı sayılır.',
    ilginc: 'Dağın tam altından geçen 11,6 kilometrelik Mont Blanc Tüneli, Fransa ile İtalya\'yı Alplerin kalbinden birbirine bağlar.',
    w: 'Mont Blanc'
  },
  {
    id: 'matterhorn', ad: 'Matterhorn', tur: 'dag', ll: [45.98, 7.66],
    yukseklik: '4.478 m (Alplerin en ikonik piramit zirvesi)',
    konum: 'İsviçre (Zermatt) – İtalya sınırı',
    olcu: 'Dört keskin yüzlü kusursuz buzul piramidi',
    ozet: 'Dört yönden buzulların yontmasıyla neredeyse cetvelle çizilmiş bir piramit biçimini alan, dünyanın en çok fotoğrafı çekilen dağı.',
    tarihOnemi: '1865\'teki ilk tırmanışı Alplerin "Altın Dağcılık Çağı"nın doruk noktası oldu; ancak inişte 4 dağcının ipinin kopması Avrupa\'yı yasa boğdu.',
    ilginc: 'Afrika tektonik levhasının Avrupa\'nın üstüne bindirmesiyle oluştuğu için Matterhorn\'un zirve kayaları aslında jeolojik olarak Afrika\'dan gelmedir!',
    w: 'Matterhorn'
  },
  {
    id: 'cilo', ad: 'Cilo Dağı (Uludoruk / Reşko)', tur: 'dag', ll: [37.49, 44.00],
    yukseklik: '4.135 m (Türkiye\'nin 2. en yüksek zirvesi)',
    konum: 'Hakkâri (Güneydoğu Anadolu, Türkiye)',
    olcu: 'Uludoruk: 4.135 m · 20.000 yıllık aktif vadi buzulları',
    ozet: 'Sarp kireçtaşı duvarları, turkuaz buzul gölleri (Sat Gölleri) ve binlerce yıllık buzullarıyla Anadolu\'nun en vahşi ve yüksek sıradağıdır.',
    tarihOnemi: 'Yüksek yaylalarındaki Gevaruk Vadisi\'nde binlerce yıl önce kayalara kazınmış dağ keçisi ve av sahnesi kaya resimleri bulunur.',
    ilginc: 'Ağrı Dağı tek bir volkan konisi iken, Cilo-Sat Dağları tektonik yükselme ile oluşmuş Türkiye\'nin en yüksek sıradağıdır.',
    w: 'Mount Uludoruk'
  },
  {
    id: 'kackar', ad: 'Kaçkar Dağları', tur: 'dag', ll: [40.84, 41.16],
    yukseklik: '3.937 m (Doğu Karadeniz\'in en yüksek zirvesi)',
    konum: 'Rize – Artvin – Erzurum sınırı (Türkiye)',
    olcu: 'Kuzey yamaçları yağmur ormanı, zirvesi 4.000 m\'ye yakın buzul bölgesi',
    ozet: 'Karadeniz\'den gelen nemli bulutların çarpıp yoğun yağış bıraktığı, bulut denizlerinin üzerinde yükselen granit zirveler ve yüzlerce buzul gölüyle bezeli sıradağ.',
    tarihOnemi: 'Asırlardır Hemşin ve Laz yaylacılık kültürünün kalbidir; fırtına vadileri boyunca tarihî kemer taş köprüler uzanır.',
    ilginc: 'Karadeniz kıyısından sadece 40 kilometre içeride 0 metreden neredeyse 4.000 metreye tırmandığı için Dünya\'nın en dik iklim geçişlerinden birini sunar.',
    w: 'Kaçkar Mountains'
  },
  {
    id: 'erciyes', ad: 'Erciyes Dağı', tur: 'dag', ll: [38.53, 35.45],
    yukseklik: '3.917 m (İç Anadolu\'nun en yüksek zirvesi)',
    konum: 'Kayseri (İç Anadolu, Türkiye)',
    olcu: 'Sönmüş stratovolkan · Kapadokya\'nın mimarı',
    ozet: 'İç Anadolu bozkırının ortasından görkemle yükselen, zirvesinde antik buzul izleri taşıyan sönmüş yanardağ. Milyonlarca yıl önce püskürttüğü küller Kapadokya\'nın peri bacalarını oluşturmuştur.',
    tarihOnemi: 'Antik çağda "Argaios" adıyla kutsal sayıldı; Roma dönemi Kayseri (Caesarea) sikkelerinin arkasında hep Erciyes Dağı\'nın kabartması basılırdı.',
    ilginc: 'Antik coğrafyacı Strabon, berrak bir günde Erciyes\'in zirvesinden hem Karadeniz\'in hem de Akdeniz\'in görülebildiğini iddia etmiştir.',
    w: 'Mount Erciyes'
  },
  {
    id: 'fuji', ad: 'Fuji Dağı', tur: 'dag', ll: [35.36, 138.73],
    yukseklik: '3.776 m (Japonya\'nın en yüksek zirvesi)',
    konum: 'Honşu Adası, Tokyo\'nun 100 km güneybatısı (Japonya)',
    olcu: 'Neredeyse kusursuz simetrik volkan konisi',
    ozet: 'Karlı zirvesi ve kusursuz simetrisiyle Japonya\'nın kültürel ve sanatsal simgesi olan uyuyan stratovolkan.',
    tarihOnemi: 'Şintoizm ve Budizm\'de kutsal hac dağıdır; ressam Hokusai\'nin "Fuji Dağı\'nın 36 Görünümü" serisi dünya sanat tarihine damga vurmuştur.',
    ilginc: 'Son kez 1707\'de patlamış, 100 km ötedeki Tokyo\'yu (Edo) haftalarca kül altında bırakmıştır; bugün hâlâ "aktif ama uyuyan" sınıfındadır.',
    w: 'Mount Fuji'
  },
  {
    id: 'uludag', ad: 'Uludağ (Antik Olympos)', tur: 'dag', ll: [40.07, 29.22],
    yukseklik: '2.543 m (Marmara Bölgesi\'nin en yüksek zirvesi)',
    konum: 'Bursa (Marmara, Türkiye)',
    olcu: '40 km uzunluğunda granit kütle · 7 buzul gölü',
    ozet: 'Zengin göknar ormanları, buzul gölleri (Aynalı, Kilimli, Karagöl) ve geniş kayak platolarıyla Marmara\'nın zirvesidir.',
    tarihOnemi: 'Antik çağda "Mysia Olympos\'u" (Keşiş Dağı) adıyla bilinirdi; Bizans döneminde yüzlerce keşişin yaşadığı manastırlar dağıydı; 1925\'te "Uludağ" adını aldı.',
    ilginc: 'Yalnızca Uludağ\'da yetişen 30\'dan fazla endemik bitki türü ve nadir Apollon kelebeği bu dağın yüksek çayırlarında yaşar.',
    w: 'Uludağ'
  },
  {
    id: 'tanridaglari', ad: 'Tanrı Dağları (Tian Shan)', tur: 'dag', ll: [42.03, 80.13],
    yukseklik: '7.439 m (Cengiş Çokuşu / Zafer Zirvesi)',
    konum: 'Kırgızistan, Kazakistan, Özbekistan ve Sincan (Orta Asya)',
    olcu: 'Uzunluk: ~2.500 km · Karlı dev Orta Asya duvarı',
    ozet: 'Bozkırlarla Taklamakan Çölü\'nü ayıran, buzulları ve yüksek yaylalarıyla Orta Asya\'nın su deposu olan dev sıradağ.',
    tarihOnemi: 'Göktürklerden Karahanlılara Türk tarihinin ana yurtlarından biri oldu; İpek Yolu kervanları bu dağların yüksek geçitlerinden aşarak Çin\'e ulaştı.',
    ilginc: 'Bugün tüm dünyada yetiştirilen kültür elmasının (Malus domestica) yabani atası, Tanrı Dağları\'nın eteklerindeki elma ormanlarında doğmuştur!',
    w: 'Tian Shan'
  },
  {
    id: 'kayalikdaglar', ad: 'Kayalık Dağlar (Rocky Mountains)', tur: 'dag', ll: [39.12, -106.45],
    yukseklik: '4.401 m (Mount Elbert)',
    konum: 'Kanada\'dan New Mexico\'ya (Kuzey Amerika)',
    olcu: 'Uzunluk: ~4.800 km · Kıta Su Bölümü Çizgisi',
    ozet: 'Kuzey Amerika\'nın batı omurgasını oluşturan, yağmur sularını Pasifik ve Atlantik okyanuslarına ayıran devasa dağ zinciri.',
    tarihOnemi: '19. yüzyıldaki Altına Hücum ve kıtalararası demiryolu inşası sırasında aşılması en zor doğal engel oldu.',
    ilginc: 'Boz ayılar, puma, geyik ve kartalların yaşadığı Yellowstone ve Banff gibi dünyanın en ünlü millî parkları bu dağlar üzerindedir.',
    w: 'Rocky Mountains'
  },
  {
    id: 'atlasdaglari', ad: 'Atlas Dağları', tur: 'dag', ll: [31.06, -7.91],
    yukseklik: '4.167 m (Toubkal Zirvesi, Fas)',
    konum: 'Fas, Cezayir ve Tunus (Kuzeybatı Afrika)',
    olcu: 'Uzunluk: ~2.500 km · Akdeniz ile Sahra arasındaki duvar',
    ozet: 'Akdeniz\'in ılıman iklimini Sahra Çölü\'nün yakıcı sıcağından ayıran, kışın tepeleri karla kaplanan görkemli Kuzey Afrika dağları.',
    tarihOnemi: 'Berberi (Amazigh) halklarının binlerce yıllık kalesi oldu; adını Yunan mitolojisinde gök kubbeyi omuzlarında taşıyan Titan Atlas\'tan alır.',
    ilginc: 'Bir zamanlar bu dağlarda yaşayan ve Roma arenalarında dövüştürülen efsanevi "Berberi Aslanı" (Atlas Aslanı) doğada 20. yüzyılda tükendi.',
    w: 'Atlas Mountains'
  },
  {
    id: 'himalayalar', ad: 'Himalayalar', tur: 'dag', ll: [28.4, 84.2],
    yukseklik: '8.849 m (Everest) · 8.000 m üstü 10 zirve',
    konum: 'Güney Asya (Nepal, Hindistan, Çin/Tibet, Butan, Pakistan)',
    olcu: 'Uzunluk: ~2.400 km · Dünyanın en yüksek sıradağı',
    ozet: 'Hint levhasının Avrasya levhasıyla çarpışmasıyla yükselen, dünyanın en yüksek sıradağıdır. Ganj, İndus ve Brahmaputra gibi milyarlarca insanı besleyen dev nehirler buradan doğar.',
    tarihOnemi: 'Hindistan ile Çin arasında neredeyse aşılmaz doğal bir duvar örerek iki dev uygarlığın birbirinden bağımsız gelişmesini sağladı; Hint Okyanusu\'ndan gelen muson bulutlarını tutup Hindistan\'ı bereketli, Tibet\'i ise kurak yaptı.',
    ilginc: 'Hint levhası hâlâ kuzeye ittiği için Himalayalar her yıl yaklaşık 5 milimetre yükselmeye devam ediyor; tepelerinde milyonlarca yıllık deniz kabuklusu fosilleri bulunur.',
    w: 'Himalayas'
  },
  {
    id: 'andlar', ad: 'And Dağları', tur: 'dag', ll: [-15.5, -70.0],
    yukseklik: '6.961 m (Aconcagua) · ~7.000 km uzunluk',
    konum: 'Güney Amerika\'nın batı kıyısı boyunca (7 ülke)',
    olcu: 'Uzunluk: ~7.000 km (karadaki en uzun sıradağ) · En yüksek: Aconcagua (6.961 m)',
    ozet: 'Kolombiya\'dan Patagonya\'ya uzanan dünyanın en uzun kara sıradağıdır. Yüksek platoları (Altiplano) ve verimli vadileri benzersiz bir dağ uygarlığına ev sahipliği yaptı.',
    tarihOnemi: 'İnka İmparatorluğu 4.000 metre yükseklikte 40.000 km\'lik taş yol ağı (Qhapaq Ñan), teras tarımı ve dondurarak kurutma teknolojisi geliştirdi; patates ve kinoa tüm dünyaya bu dağlardan yayıldı.',
    ilginc: 'Potósi\'deki (Bolivya) gümüş madenleri 16. yüzyılda İspanya üzerinden tüm dünyanın para sistemini değiştirdi.',
    w: 'Andes'
  },
  {
    id: 'alpler', ad: 'Alpler', tur: 'dag', ll: [46.5, 9.8],
    yukseklik: '4.808 m (Mont Blanc) · ~1.200 km',
    konum: 'Orta Avrupa (İsviçre, İtalya, Fransa, Avusturya, Almanya, Slovenya)',
    olcu: 'Uzunluk: ~1.200 km · En yüksek: Mont Blanc (4.808 m)',
    ozet: 'Akdeniz dünyasını Orta ve Kuzey Avrupa\'dan ayıran karlı sıradağlardır. Ren, Rhone ve Po nehirlerinin kaynağıdır.',
    tarihOnemi: 'Roma\'yı kuzeyden gelen akınlara karşı yüzyıllarca korudu. MÖ 218\'de Kartacalı komutan Hannibal\'in savaş filleriyle Alpleri aşması, antik tarihin en şaşırtıcı askerî harekâtı oldu.',
    ilginc: '5.300 yıl önce Alplerde donmuş olarak bulunan "Buz Adam Ötzi", Bakır Çağı insanının giysilerini, aletlerini ve yediği son yemeği günümüze taşıdı.',
    w: 'Alps'
  },
  {
    id: 'kafkaslar', ad: 'Kafkas Dağları', tur: 'dag', ll: [42.6, 44.8],
    yukseklik: '5.642 m (Elbruz) · ~1.200 km',
    konum: 'Karadeniz ile Hazar Denizi arası',
    olcu: 'Uzunluk: ~1.200 km · En yüksek: Elbruz (5.642 m)',
    ozet: 'Avrupa ile Asya arasında doğal bir sınır oluşturan sarp ve geçit vermez dağ silsilesidir.',
    tarihOnemi: 'Kuzey bozkırlarından (İskit, Hun, Hazar, Moğol) Orta Doğu\'ya inen istilaları yalnızca Derbent ve Daryal geçitlerine sıkıştırdı; bu yüzden sarp vadilerinde 50\'den fazla dil ve halk binlerce yıl boyunca korundu.',
    ilginc: 'Antik Yunan mitolojisinde ateşin tanrılardan çalınmasıyla cezalandırılan Prometheus\'un zincire vurulduğu yer Kafkaslar olarak anlatılır.',
    w: 'Caucasus Mountains'
  },
  {
    id: 'toroslar', ad: 'Toros Dağları', tur: 'dag', ll: [37.2, 34.4],
    yukseklik: '3.756 m (Demirkazık / Aladağlar)',
    konum: 'Güney Anadolu (Akdeniz\'e paralel)',
    olcu: 'Uzunluk: ~2.000 km · En yüksek: Demirkazık (3.756 m)',
    ozet: 'Anadolu\'nun güney kıyısını iç platodan ayıran, sedir ormanları ve derin kanyonlarla dolu dağ kuşağıdır.',
    tarihOnemi: 'İç Anadolu ile Suriye–Mezopotamya arasındaki tek ana geçiş olan "Gülek Boğazı (Kilikya Kapıları)" Büyük İskender\'den Haçlılara ve Osmanlı ordularına kadar tarihin en stratejik dar boğazlarından biri oldu.',
    ilginc: 'Torosların dayanıklı sedir ağaçları antik çağda Mısır ve Fenike gemilerinin yapımında altın kadar değerliydi.',
    w: 'Taurus Mountains'
  },
  {
    id: 'urallar', ad: 'Ural Dağları', tur: 'dag', ll: [60.0, 59.5],
    yukseklik: '1.895 m (Narodnaya Zirvesi)',
    konum: 'Rusya (Kuzey Buz Denizi\'nden Kazakistan\'a)',
    olcu: 'Uzunluk: ~2.500 km · En yüksek: Narodnaya (1.895 m)',
    ozet: 'Kuzeyden güneye uzanan, Avrupa ile Asya kıtalarının geleneksel sınırı kabul edilen eski ve zengin madenli dağ sırasıdır.',
    tarihOnemi: 'Zengin demir, bakır, altın ve zümrüt yataklarıyla Rus İmparatorluğu\'nun ve 2. Dünya Savaşı\'nda (fabrikalar doğuya taşınınca) Sovyet sanayisinin can damarı oldu.',
    ilginc: '250–300 milyon yaşındadır; Himalayalar gibi genç dağlara göre çok daha eski ve aşınmıştır.',
    w: 'Ural Mountains'
  },
  {
    id: 'kilimanjaro', ad: 'Kilimanjaro Dağı', tur: 'dag', ll: [-3.07, 37.35],
    yukseklik: '5.895 m (Afrika\'nın en yüksek zirvesi)',
    konum: 'Tanzanya, Doğu Afrika',
    olcu: 'Yükseklik: 5.895 m (dünyanın en yüksek bağımsız dağı)',
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
