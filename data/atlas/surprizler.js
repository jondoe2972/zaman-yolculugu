// 🎁 Dünya Çevresinde 20 Gizli Sürpriz (Easter Eggs — 5 tanesi ÇOK ZOR Efsanevi Keşif!)
// Haritada yaklaştıkça (veya uzay boşluğunda) beliren gizli keşifler; Keşif Defterim'de XP kazandıkça ipuçlarının kilidi açılır!
'use strict';
window.ATLAS_SURPRIZLER = [
  {
    id: 'voyager', ad: 'Voyager Altın Plağı', ik: '🛰️', uzay: true, minZ: 0, from: -1977, to: -2100, xpKilit: 0,
    ipucu: 'Zaman çizelgesini MS 1977 veya sonrasına getir ve kürenin dışındaki karanlık uzay boşluğuna dikkatlice bak! Yıldızların arasında hafifçe altın gibi parlayıp süzülen o tek özel yıldıza tıkla.',
    yer: 'Yıldızlararası Uzay (1977\'den beri)',
    ozet: '1977\'de fırlatılan Voyager 1 ve 2 uzay sondaları, insanlığın başka uygarlıklara gönderdiği bir "zaman kapsülü" taşır: 55 dilde selam (Türkçe: "Sayın Türkçe bilen arkadaşlarımız, sabah şerifleriniz hayrolsun!"), Bach\'tan Azeri muğamına müzikler, balina sesleri ve Dünya fotoğrafları.',
    ilginc: 'Voyager 1 şu an Dünya\'dan 24 milyar kilometreden fazla uzakta, insan elinden çıkıp Güneş Sistemi dışına ulaşan en uzak nesnedir.',
    w: 'Voyager Golden Record'
  },
  {
    id: 'atlantis', ad: 'Kayıp Kıta Atlantis Efsanesi', ik: '🏛️', ll: [35.90, -9.20], minZ: 7.5, from: 10000, to: -2100, xpKilit: 0,
    ipucu: 'Platon\'un tarifine göre "Herkül Sütunları\'nın (Cebelitarık Boğazı) hemen ötesinde", Atlas Okyanusu\'nda suların içine yakından bak!',
    yer: 'Cebelitarık Açıkları (Atlas Okyanusu)',
    ozet: 'Filozof Platon\'un MÖ 360 civarında yazdığı diyaloglarda anlattığı, tek bir gün ve gecede sulara gömüldüğü söylenen efsanevi ada uygarlığı. Tarihçiler bunun Santorini\'deki dev MÖ 1600 yanardağ patlamasından ve Minos uygarlığından esinlendiğini düşünür.',
    ilginc: 'Platon\'dan önce hiçbir antik metinde Atlantis adı geçmez; yine de 2.400 yıldır haritacıları ve kâşifleri peşinden koşturuyor.',
    w: 'Atlantis'
  },
  {
    id: 'bermuda', ad: 'Bermuda Şeytan Üçgeni', ik: '🔺', ll: [25.50, -71.00], minZ: 6.5, from: -1492, to: -2100, xpKilit: 30,
    ipucu: 'MS 1492 sonrası bir yılda Florida, Bermuda ve Porto Riko arasındaki Atlas Okyanusu sularına iyice yaklaş.',
    yer: 'Kuzey Atlas Okyanusu',
    ozet: '20. yüzyılda kaybolan birkaç uçak ve gemi yüzünden gizemli efsanelerle anılan deniz bölgesi. Bilimsel veriler buradaki kaza oranının dünyanın diğer yoğun deniz yollarından farklı olmadığını, ancak güçlü Gulf Stream akıntısı ve ani tropikal fırtınaların navigasyonu zorlaştırdığını gösterir.',
    ilginc: 'Kristof Kolomb 1492\'de bu bölgeden geçerken pusulasının sapma yaptığını ve denizde garip parıltılar gördüğünü seyir defterine yazmıştı.',
    w: 'Bermuda Triangle'
  },
  {
    id: 'antikythera', ad: 'Antikythera Düzeneği (Antik Bilgisayar)', ik: '⚙️', ll: [35.88, 23.30], minZ: 9.0, from: 200, to: -2100, xpKilit: 60,
    ipucu: 'MÖ 200 sonrası bir yılda Yunanistan ile Girit arasındaki küçük Antikythera adasının sularına iyice yaklaş!',
    yer: 'Ege / Girit Boğazı, Yunanistan',
    ozet: '1901\'de bir Roma batığından çıkarılan, MÖ 2. yüzyıla ait 30\'dan fazla hassas bronz dişli çarktan oluşan el yapımı astronomik hesap makinesi. Güneş-Ay tutulmalarını, gezegen hareketlerini ve Olimpiyat oyunlarının tarihlerini hesaplayabiliyordu.',
    ilginc: 'Bu kadar karmaşık dişli çark mekanizması Avrupa\'da ancak 1.400 yıl sonra mekanik saatlerle yeniden yapılabildi.',
    w: 'Antikythera mechanism'
  },
  {
    id: 'nazca', ad: 'Nazca Çizgileri', ik: '🦅', ll: [-14.74, -75.13], minZ: 8.5, from: 500, to: -2100, xpKilit: 90,
    ipucu: 'MÖ 500 sonrası bir yılda Peru\'nun güneyindeki kurak kıyı çölüne tepeden iyice yaklaş — dev bir sinekkuşu ve örümcek seni bekliyor!',
    yer: 'Nazca Çölü, Peru',
    ozet: 'MÖ 500 – MS 500 arasında Nazca kültürü tarafından çöl yüzeyindeki koyu çakıllar sıyrılıp alttaki açık renkli toprak ortaya çıkarılarak çizilmiş, ancak havadan bakıldığında tam görülebilen yüzlerce dev hayvan ve geometrik şekil.',
    ilginc: 'Bölge neredeyse hiç yağmur almadığı ve rüzgâr az olduğu için bu devasa çizgiler 2.000 yıldır bozulmadan kalmıştır.',
    w: 'Nazca Lines'
  },
  {
    id: 'troya', ad: 'Troya Atı', ik: '🐴', ll: [39.96, 26.24], minZ: 9.5, from: 1300, to: -2100, xpKilit: 120,
    ipucu: 'MÖ 1300 sonrası bir yılda Çanakkale Boğazı\'nın güney girişine, antik Troya (Hisarlık) tepesine iyice yaklaş!',
    yer: 'Çanakkale, Türkiye',
    ozet: 'Homeros\'un İlyada ve Odysseia destanlarında anlatılan, 10 yıllık Troya kuşatmasını bitirmek için içine savaşçıların saklandığı efsanevi dev tahta at. Arkeologlar Troya\'da üst üste 9 farklı antik kent katmanı ortaya çıkarmıştır.',
    ilginc: 'Modern bilgisayar güvenliğinde kendini zararsız bir dosya gibi gösterip içeri sızan zararlı yazılımlara bu efsaneden dolayı "Truva Atı (Trojan)" adı verilir.',
    w: 'Trojan Horse'
  },
  {
    id: 'eldorado', ad: 'Altın Efsanesi: El Dorado', ik: '👑', ll: [4.97, -73.77], minZ: 8.5, from: -1500, to: -2100, xpKilit: 150,
    ipucu: 'MS 1500 sonrası bir yılda Kolombiya\'nın And Dağları\'ndaki kutsal Guatavita Gölü çevresine iyice yaklaş.',
    yer: 'Guatavita Gölü, Kolombiya',
    ozet: 'Avrupalı kâşiflerin yüzyıllarca aradığı "Altın Şehir" efsanesi aslında bir şehirden değil, Muisca kabilesinin yeni liderini altın tozuyla kaplayıp kutsal Guatavita Gölü\'ne altın sunular attığı törenden ("El Dorado" = Altın Adam) doğmuştur.',
    ilginc: 'Gölün dibinde gerçekten çok sayıda Muisca altın salı ve mücevheri bulundu; en ünlüsü bugün Bogota Altın Müzesi\'nde sergileniyor.',
    w: 'El Dorado'
  },
  {
    id: 'lochness', ad: 'Loch Ness Gölü Efsanesi', ik: '🐉', ll: [57.32, -4.42], minZ: 9.5, from: -565, to: -2100, xpKilit: 180,
    ipucu: 'MS 565 sonrası bir yılda İskoçya\'nın kuzeyindeki derin ve sisli vadi gölüne iyice yaklaş.',
    yer: 'İskoçya Yaylaları, Birleşik Krallık',
    ozet: '230 metre derinliğindeki karanlık Loch Ness Gölü\'nde yaşadığı söylenen "Nessie" efsanesi 6. yüzyıla kadar uzanır. 2019\'da göl suyundan alınan çevresel DNA (eDNA) örnekleri canavara rastlamadı ancak gölde çok büyük yılan balıkları olabileceğini gösterdi.',
    ilginc: 'Loch Ness o kadar derindir ki tek başına İngiltere ve Galler\'deki tüm göllerin toplamından daha fazla tatlı su barındırır.',
    w: 'Loch Ness Monster'
  },
  {
    id: 'mariana', ad: 'Mariana Çukuru (Trieste Batiskafı)', ik: '🤿', ll: [11.37, 142.59], minZ: 7.5, from: -1960, to: -2100, xpKilit: 210,
    ipucu: 'MS 1960 veya sonrasında Batı Pasifik\'te Guam Adası\'nın güneybatısındaki en derin okyanus yarığına iyice yaklaş!',
    yer: 'Challenger Deep, Büyük Okyanus',
    ozet: '10.994 metre derinliğiyle okyanusların en derin noktasıdır. 1960\'ta Jacques Piccard ve Don Walsh "Trieste" batiskafıyla buraya indiğinde, Everest Dağı\'nı ters çevirip içine koysanız bile zirvenin üstünde 2 km daha su kalacak derinlikte yaşayan canlılar buldular.',
    ilginc: 'Mariana Çukuru\'nun tabanındaki su basıncı, deniz seviyesindekinin 1.000 katından fazladır — parmağınızın ucunda 50 jumbo jetin ağırlığına denk!',
    w: 'Mariana Trench'
  },
  {
    id: 'kutup', ad: 'Kuzey Kutbu Keşif Noktası', ik: '🧭', ll: [88.50, 0.0], minZ: 5.5, from: -1909, to: -2100, xpKilit: 240,
    ipucu: 'MS 1909 veya sonrasında kürenin en tepesine, 90° Kuzey enlemindeki buzulların tam zirvesine yaklaş!',
    yer: '90° Kuzey, Arktik Okyanusu',
    ozet: 'Altında kara değil, 4.000 metre derinliğindeki Arktik Okyanusu\'nun üzerinde sürüklenen deniz buzları bulunur. Burada tüm boylamlar birleşir ve hangi yöne adım atarsanız atın güneye gitmiş olursunuz!',
    ilginc: 'Kuzey Kutbu\'nda Güneş yılda sadece bir kez doğar (Mart) ve bir kez batar (Eylül); yani 6 ay kesintisiz gündüz, 6 ay gece yaşanır.',
    w: 'North Pole'
  },
  {
    id: 'derinkuyu', ad: 'Derinkuyu Gizli Yeraltı Şehri', ik: '🕯️', ll: [38.37, 34.73], minZ: 9.5, from: 700, to: -2100, xpKilit: 270,
    ipucu: 'İç Anadolu\'nun kalbinde, Kapadokya\'nın güneyindeki Nevşehir topraklarına iyice yaklaş — 1963\'te bir evin bodrum duvarı yıkılınca ortaya çıkan 20.000 kişilik yeraltı şehri!',
    yer: 'Nevşehir / Kapadokya, Türkiye',
    ozet: 'Yerin 85 metre altına doğru 18 kat inen, 20.000 insanın hayvanlarıyla ve erzaklarıyla aylarca gizlenebildiği devasa yeraltı kenti! İçinde havalandırma bacaları, su kuyuları, okul, şapeller ve yalnızca içeriden kapatılabilen 500 kg\'lık yuvarlak taş kapılar bulunur.',
    ilginc: '1963\'te bir köylü evinin duvarını tadilat için kırdığında arkasında gizli bir oda buldu — o kapı insanlık tarihinin en büyük yeraltı şehrine açılıyordu!',
    w: 'Derinkuyu underground city'
  },
  {
    id: 'pirireis', ad: 'Piri Reis\'in 1513 Dünya Haritası', ik: '🗺️', ll: [40.41, 26.67], minZ: 9.5, from: -1513, to: -2100, xpKilit: 300,
    ipucu: 'MS 1513 sonrası bir yılda Çanakkale Boğazı\'nın kuzey kıyısındaki Gelibolu yarımadasına iyice yaklaş!',
    yer: 'Gelibolu, Türkiye (Topkapı Sarayı\'nda bulundu)',
    ozet: 'Osmanlı amirali ve haritacısı Piri Reis\'in 1513\'te Gelibolu\'da ceylan derisi üzerine çizdiği ünlü dünya haritası. Kristof Kolomb\'un Amerika\'ya ulaşmasından yalnızca 21 yıl sonra Güney Amerika ve Karayip kıyılarını şaşırtıcı bir doğrulukla göstermiştir.',
    ilginc: 'Harita 400 yıl kayıp kaldıktan sonra 1929\'da Topkapı Sarayı müzeye dönüştürülürken tozlu bir rafın içinde tesadüfen bulundu!',
    w: 'Piri Reis map'
  },
  {
    id: 'svalbard', ad: 'Svalbard "Kıyamet" Tohum Deposu', ik: '🌱', ll: [78.23, 15.49], minZ: 8.5, from: -2008, to: -2100, xpKilit: 330,
    ipucu: 'MS 2008 sonrası bir yılda Norveç\'in çok kuzeyinde, Kuzey Kutbu\'na 1.300 km uzaklıktaki buzlu Svalbard adasına yaklaş!',
    yer: 'Spitsbergen, Svalbard, Norveç',
    ozet: 'Donmuş bir dağın 120 metre içine oyulmuş, insanlığın tarım mirasını koruyan "Nuh\'un Gemisi"! Dünyanın dört bir yanından gönderilen 1,2 milyondan fazla buğday, pirinç, mısır ve sebze tohumu -18 °C\'de saklanır; elektrik kesilse bile buz dağı tohumları yüzyıllarca dondurulmuş tutar.',
    ilginc: 'Kasa ilk kez 2015\'te Suriye\'deki savaş yüzünden Halep tohum bankası zarar görünce açıldı ve tarım araştırmacılarına tohum geri verildi.',
    w: 'Svalbard Global Seed Vault'
  },
  {
    id: 'moai-govde', ad: 'Paskalya Adası\'nın Gömülü Gövdeleri', ik: '🗿', ll: [-27.12, -109.28], minZ: 8.5, from: -1200, to: -2100, xpKilit: 360,
    ipucu: 'MS 1200 sonrası bir yılda Güney Pasifik\'in ortasındaki o minik, ıssız Şili adasına (Rapa Nui) iyice yaklaş!',
    yer: 'Rapa Nui (Paskalya Adası), Büyük Okyanus',
    ozet: 'Herkes onları sadece dev taş "başlar" sanır — ama 2012 kazıları toprak altında tam 7 metre daha uzanan, sırtları antik dövme ve hiyeroglif benzeri sembollerle işlenmiş koca taş gövdeleri ve elleri ortaya çıkardı!',
    ilginc: 'Rapa Nui halkı 80 tonluk heykelleri tekerleksiz olarak sadece 3 halatla sağa-sola "yürüterek" (buzdolabı taşır gibi!) kilometrelerce taşıdı.',
    w: 'Moai'
  },
  {
    id: 'yonaguni', ad: 'Yonaguni Sualtı Piramidi', ik: '⛩️', ll: [24.43, 123.01], minZ: 9.5, from: -1986, to: -2100, xpKilit: 390,
    ipucu: 'MS 1986 sonrası bir yılda Japonya\'nın en batı ucunda, Tayvan\'ın hemen doğusundaki küçük Yonaguni adasının sularına yaklaş!',
    yer: 'Yonaguni Adası, Okinawa, Japonya',
    ozet: '1986\'da çekiçbaş köpekbalıklarını gözlemleyen bir dalgıcın 25 metre derinde keşfettiği, keskin 90 derecelik basamaklar, teraslar ve sütun izleri taşıyan 150 metrelik dev sualtı kaya yapısı! Doğal kumtaşı kırılması mı yoksa Buzul Çağı\'nda sular altında kalmış 10.000 yıllık bir uygarlık mı — tartışma hâlâ sürüyor.',
    ilginc: 'Buzul Çağı\'nda deniz seviyesi 120 metre alçaktı; yani bu yapı 10.000 yıl önce tamamen kuru toprağın üstündeydi!',
    w: 'Yonaguni Monument'
  },

  // --- 🔴 5 ÇOK ZOR (EFSANEVİ) GİZLİ SÜRPRİZ — Bulması zor ama keşfettiğine kesinlikle değer! ---
  {
    id: 'point-nemo', ad: '🔴 [Efsanevi] Point Nemo & Uzay Aracı Mezarlığı', ik: '🚀', zor: true, ll: [-48.87, -123.39], minZ: 11.5, from: -1971, to: -2100, xpKilit: 430,
    ipucu: '🔴 ÇOK ZOR · MS 1971 sonrası bir yılda Güney Pasifik\'in tam ortasında, karadan en uzak o bomboş mavi noktaya (48.9°G, 123.4°B) çok yakından bak!',
    yer: 'Güney Pasifik Okyanusu (En yakın kara 2.688 km uzakta!)',
    ozet: 'Dünya\'nın karaya en uzak noktası ("Ulaşılmazlık Kutbu")! Buradayken en yakın insanlar çoğu zaman 400 km yukarıdaki Uluslararası Uzay İstasyonu\'ndaki astronotlardır! Kimseye zarar vermesin diye görevini bitiren Mir Uzay İstasyonu ve 260\'tan fazla uydu ile roket buraya düşürüldü.',
    ilginc: '2030\'larda emekliye ayrılacak Uluslararası Uzay İstasyonu (ISS) da kontrollü şekilde tam bu noktada okyanusa indirilecek!',
    w: 'Pole of inaccessibility'
  },
  {
    id: 'kola-sondaj', ad: '🔴 [Efsanevi] Kola Süper Derin Sondajı (12,2 km)', ik: '🕳️', zor: true, ll: [69.39, 30.61], minZ: 12.0, from: -1970, to: -2100, xpKilit: 490,
    ipucu: '🔴 ÇOK ZOR · MS 1970 sonrası bir yılda Rusya\'nın Norveç sınırına çok yakın, Arktik\'teki Kola Yarımadası\'na derinlemesine yaklaş!',
    yer: 'Murmansk / Kola Yarımadası, Rusya',
    ozet: 'İnsanlığın Dünya\'nın merkezine doğru kazabildiği en derin delik: tam 12.262 metre (Everest\'ten daha derin, ama çapı sadece 23 cm)! 1970\'te başlayan kazıda 12 km derinde sıcaklık 180 °C\'ye ulaşıp kaya plastik gibi erimeye başlayınca matkaplar durdu.',
    ilginc: 'Bilim insanları 6,7 km derindeki 2 milyar yıllık kayaların içinde 24 farklı türde mikroskobik plankton fosili ve beklenmedik miktarda yeraltı suyu buldu!',
    w: 'Kola Superdeep Borehole'
  },
  {
    id: 'cehennem-kapisi', ad: '🔴 [Efsanevi] Darvaza "Cehennem Kapısı" Krateri', ik: '🔥', zor: true, ll: [40.25, 58.44], minZ: 12.0, from: -1971, to: -2100, xpKilit: 550,
    ipucu: '🔴 ÇOK ZOR · MS 1971 sonrası bir yılda Türkmenistan\'daki Karakum Çölü\'nün tam ortasına çok yakından bak!',
    yer: 'Karakum Çölü, Türkmenistan',
    ozet: '1971\'de doğalgaz arayan jeologların sondaj kulesi yeraltı mağarasına çökünce zehirli metan gazı yayılmasın diye "birkaç günde yanıp biter" düşüncesiyle ateşe verildi — 70 metre genişliğindeki krater 55 yılı aşkın süredir çölün ortasında gece gündüz alev alev yanmaya devam ediyor!',
    ilginc: '2013\'te kâşif George Kourounis yanmaz giysiyle kraterin dibine inip kaynar çamurda aşırı sıcağa dayanıklı ekstremofil bakteriler keşfetti!',
    w: 'Darvaza gas crater'
  },
  {
    id: 'baltik-anomali', ad: '🔴 [Efsanevi] Baltık Denizi Sualtı Anomalisi', ik: '🛸', zor: true, ll: [60.80, 19.80], minZ: 12.5, from: -2011, to: -2100, xpKilit: 620,
    ipucu: '🔴 ÇOK ZOR · MS 2011 sonrası bir yılda İsveç ile Finlandiya arasındaki Botniya Denizi\'nin (Kuzey Baltık) tam ortasına derinlemesine yaklaş!',
    yer: 'Botniya Denizi (İsveç – Finlandiya arası)',
    ozet: '2011\'de İsveçli hazine dalgıçlarının 90 metre derinde sonar taraması yaparken yakaladığı, 60 metre çapında, merdiven benzeri hatlara ve arkasında 300 metrelik sürüklenme izine sahip gizemli dairesel oluşum! Jeologlar Buzul Çağı\'nda sürüklenen dev bir buzul kayası olduğunu açıkladı.',
    ilginc: 'Sonar görüntüsü Star Wars\'taki Millennium Falcon uzay gemisine o kadar çok benziyordu ki fotoğraf tüm dünyada viral oldu!',
    w: 'Baltic Sea anomaly'
  },
  {
    id: 'pando-orman', ad: '🔴 [Efsanevi] Pando: 80.000 Yıllık Tek Canlı Orman', ik: '🌳', zor: true, ll: [38.52, -111.75], minZ: 13.0, from: 10000, to: -2100, xpKilit: 700,
    ipucu: '🔴 ÇOK ZOR · ABD\'nin Utah eyaletinin güney-orta dağlarına (Fishlake) çok yakından bak — 47.000 ağaç gibi duran ama aslında TEK BİR DEV CANLI!',
    yer: 'Fishlake Ulusal Ormanı, Utah, ABD',
    ozet: 'Dışarıdan bakınca 47.000 titrek kavak ağacından oluşan kocaman bir orman gibi görünür; ama DNA testleri hepsinin yeraltında tek bir dev kök sistemine bağlı, genetik olarak birebir aynı TEK BİR CANLI olduğunu kanıtladı! Toplam ağırlığı 6.000 ton — 40 mavi balina ağırlığında!',
    ilginc: 'Latince "Yayılıyorum" anlamına gelen Pando, son Buzul Çağı\'ndan beri (tahminen 14.000 – 80.000 yıldır) aynı yerde büyümeye devam ediyor!',
    w: 'Pando (tree)'
  }
];
