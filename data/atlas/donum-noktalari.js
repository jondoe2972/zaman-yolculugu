// ⚡ Dünyanın Seyrini Değiştiren Büyük Olaylar (seçilen yıldan bağımsız, haritanın her yerinde görünür)
// + 🧱 Gerçek hattı boyunca çizilen dev yapılar (Çin Seddi, Hadrian Duvarı, İnka Yolu, Süveyş ve Panama Kanalları).
'use strict';
window.DONUM_NOKTALARI = [
  {
    id: 'tarim-devrimi', ad: 'Tarım Devrimi', y: 9500, yilYazi: 'MÖ ~10.000', ll: [37.22, 38.92], yer: 'Bereketli Hilal (Güneydoğu Anadolu – Levant)',
    ozet: 'İnsanlar yüz binlerce yıllık avcı-toplayıcı yaşamın ardından buğday ve arpayı ekip hayvanları evcilleştirmeye başladı.',
    etki: 'İlk kalıcı köyler, nüfus artışı, gıda fazlası, zanaatkârlık, kentler ve uygarlıkların tamamı bu büyük kırılmayla doğdu.',
    ilginc: 'Tarım dünyanın en az 7–8 farklı bölgesinde (Çin, Mezoamerika, Andlar, Yeni Gine vb.) birbirinden tamamen habersiz biçimde ortaya çıktı.',
    w: 'Neolithic Revolution'
  },
  {
    id: 'yazinin-icadi', ad: 'Yazının İcadı', y: 3200, yilYazi: 'MÖ ~3200', ll: [31.32, 45.64], yer: 'Uruk, Sümer (Mezopotamya)',
    ozet: 'Sümerli kâtipler tapınak depolarındaki tahıl ve sürü hesaplarını kil tabletlere kamışla kazıyarak çivi yazısını geliştirdi.',
    etki: 'Tarih öncesi dönem kapandı, yazılı tarih başladı: yasalar, bilim, edebiyat ve devlet kayıtları nesilden nesile bozulmadan aktarılabildi.',
    ilginc: 'Bilinen en eski yazılı metinlerin çoğu destan ya da kral fermanı değil; bira, arpa ve koyun sayımı yapan muhasebe fişleridir!',
    w: 'Cuneiform'
  },
  {
    id: 'ilk-para', ad: 'İlk Madeni Para (Sikke)', y: 620, yilYazi: 'MÖ ~620', ll: [38.49, 28.04], yer: 'Sardes, Lidya (Anadolu)',
    ozet: 'Lidyalılar altın ve gümüş karışımı elektrumdan, ağırlığı ve ayarı devlet mührüyle güvence altına alınmış ilk standart sikkeleri bastı.',
    etki: 'Takas ekonomisi yerini hızlı ticarete, ücretli emeğe, vergilendirmeye ve küresel bankacılığın ilk adımlarına bıraktı.',
    ilginc: 'Lidya Kralı Kroisos\'un (Karun) zenginliği o kadar efsaneleşti ki bugün hâlâ "Karun kadar zengin" deyimi kullanılır.',
    w: 'Lydian stater'
  },
  {
    id: 'demokrasi', ad: 'Demokrasinin Doğuşu', y: 508, yilYazi: 'MÖ 508', ll: [37.97, 23.72], yer: 'Atina, Antik Yunanistan',
    ozet: 'Kleisthenes reformlarıyla Atina\'da yurttaş meclisi kuruldu; yasalar ve savaş kararları halk oylamasıyla alınmaya başlandı.',
    etki: 'Halk egemenliği, açık tartışma ve yurttaş hakları fikri yüzyıllar sonra modern anayasaların ve cumhuriyetlerin ilham kaynağı oldu.',
    ilginc: 'Antik Atina\'da vatandaşlar kimin sürgüne gönderileceğini kırık çömlek parçalarının ("ostrakon") üstüne isim yazarak oylardı.',
    w: 'Athenian democracy'
  },
  {
    id: 'kagit-icadi', ad: 'Kâğıdın İcadı', y: -105, yilYazi: 'MS 105', ll: [34.62, 112.45], yer: 'Luoyang, Han Hanedanı (Çin)',
    ozet: 'Saray görevlisi Cai Lun, dut ağacı kabuğu, kenevir ve eski kumaş liflerini ezerek ucuz ve hafif kâğıt üretimini standartlaştırdı.',
    etki: 'Ağır bambu şeritleri ve pahalı parşömenin yerini alan kâğıt, kitapların çoğalmasını, devlet bürokrasisini ve bilimin yayılmasını hızlandırdı.',
    ilginc: 'Kâğıt yapımı 751 Talas Savaşı sonrası Semerkant\'a, oradan Bağdat ve Endülüs üzerinden Avrupa\'ya ulaşana kadar yaklaşık 1.000 yıl geçti.',
    w: 'History of paper'
  },
  {
    id: 'sifir-rakami', ad: 'Sıfır ve Ondalık Sistem', y: -500, yilYazi: 'MS ~500', ll: [25.60, 85.14], yer: 'Pataliputra / Hindistan',
    ozet: 'Hintli matematikçiler (Aryabhata ve Brahmagupta) sıfırı hem basamak tutucu hem de bağımsız bir sayı olarak sistemleştirdi.',
    etki: 'Harezmi\'nin eserleriyle İslam dünyasına ve Avrupa\'ya geçen bu sistem olmadan modern matematik, muhasebe, mühendislik ve bilgisayarlar mümkün olamazdı.',
    ilginc: 'Türkçedeki "sıfır" ve İngilizcedeki "zero" ile "cipher" kelimelerinin tamamı Arapça "boş" anlamına gelen "sıfr" sözcüğünden gelir.',
    w: '0'
  },
  {
    id: 'islamin-dogusu', ad: 'İslam\'ın Doğuşu ve Hicret', y: -622, yilYazi: 'MS 622', ll: [24.47, 39.61], yer: 'Mekke ve Medine, Arabistan',
    ozet: 'Hz. Muhammed\'in Medine\'ye hicretiyle yeni bir din, hukuk düzeni ve medeniyet doğdu; bir yüzyıl içinde İspanya\'dan Hindistan\'a yayıldı.',
    etki: 'Orta Doğu, Kuzey Afrika ve Asya\'nın kültürel, dilsel ve siyasi haritasını kalıcı biçimde yeniden çizdi; İpek Yolu ve bilim ağlarını birleştirdi.',
    ilginc: 'Hicret yılı olan MS 622, Hicrî takvimin başlangıcı olarak kabul edildi.',
    w: 'Hegira'
  },
  {
    id: 'islam-altin-cagi', ad: 'Beytü\'l-Hikme ve Bilim Çağı', y: -830, yilYazi: 'MS ~830', ll: [33.31, 44.37], yer: 'Bağdat, Abbasi Halifeliği',
    ozet: 'Bağdat\'ta kurulan Beytü\'l-Hikme\'de Yunan, Hint ve Pers bilim eserleri çevrildi; cebir, optik, tıp ve astronomide çığır açan keşifler yapıldı.',
    etki: 'Harezmi, İbn Heysem, İbn Sina ve Biruni gibi bilginlerin çalışmaları deneysel bilim yönteminin ve Avrupa Rönesansı\'nın temellerini attı.',
    ilginc: 'Bilgisayar biliminin temel taşı olan "algoritma" kelimesi, burada çalışan matematikçi el-Harezmi\'nin adının Latince okunuşundan gelir.',
    w: 'House of Wisdom'
  },
  {
    id: 'kara-olum', ad: 'Kara Ölüm (Büyük Veba)', y: -1347, yilYazi: 'MS 1347–1353', ll: [45.03, 35.38], yer: 'Kırım\'dan Tüm Avrasya ve Avrupa\'ya',
    ozet: 'İpek Yolu ve Akdeniz gemileriyle yayılan veba salgını, birkaç yıl içinde Avrupa nüfusunun yaklaşık üçte birini ila yarısını yok etti.',
    etki: 'İşgücü kıtlığı Avrupa\'da feodal serflik düzeninin çözülmesini hızlandırdı, ücretleri yükseltti, tıp ve karantina kavramlarını doğurdu.',
    ilginc: '"Karantina" kelimesi, Venedik\'in veba taşıyabileceği düşünülen gemileri limanda 40 gün ("quaranta giorni") bekletmesinden gelir.',
    w: 'Black Death'
  },
  {
    id: 'matbaa', ad: 'Gutenberg Matbaası', y: -1450, yilYazi: 'MS ~1450', ll: [49.99, 8.27], yer: 'Mainz, Almanya',
    ozet: 'Johannes Gutenberg hareketli metal harfler ve baskı presiyle kitapların elle kopyalanması çağını sona erdirdi.',
    etki: 'Bilgi ucuzladı ve hızla yayıldı; Rönesans, Reform, Bilimsel Devrim ve modern gazetecilik matbaa sayesinde küresel dalgalara dönüştü.',
    ilginc: 'Matbaadan önce Avrupa\'nın tamamında yalnızca birkaç milyon elyazması kitap varken, 50 yıl içinde 20 milyondan fazla kitap basıldı.',
    w: 'Printing press'
  },
  {
    id: 'istanbul-fethi', ad: 'İstanbul\'un Fethi', y: -1453, yilYazi: 'MS 1453', ll: [41.01, 28.97], yer: 'İstanbul, Osmanlı İmparatorluğu',
    ozet: 'II. Mehmed\'in (Fatih) 53 günlük kuşatma sonunda şehri almasıyla 1.000 yılı aşkın Doğu Roma (Bizans) İmparatorluğu sona erdi.',
    etki: 'Osmanlı bir dünya imparatorluğuna dönüştü; büyük kuşatma topları ortaçağ kale çağını kapattı, Avrupa yeni deniz ticaret yolları aramaya hız verdi.',
    ilginc: 'Pek çok tarihçi bu olayı Orta Çağ\'ın bitişi ve Yeni Çağ\'ın başlangıcı olarak kabul eder.',
    w: 'Fall of Constantinople'
  },
  {
    id: 'amerika-kesfi', ad: '1492: Eski ve Yeni Dünya Buluşması', y: -1492, yilYazi: 'MS 1492', ll: [24.05, -74.53], yer: 'Karayipler (Bahamalar)',
    ozet: 'Kristof Kolomb\'un Atlantik\'i aşmasıyla on binlerce yıldır birbirinden kopuk olan Amerika ile Avrasya-Afrika kalıcı biçimde bağlandı.',
    etki: 'Patates, domates, mısır ve kakao Eski Dünya\'ya; at, buğday ve ne yazık ki salgın hastalıklar Amerika\'ya taşındı ("Kolomb Takası"), küresel ekonomi doğdu.',
    ilginc: 'İtalyan pizzası (domates), İsviçre çikolatası (kakao) ve İrlanda patatesi 1492\'den önce Avrupa\'da hiç bilinmiyordu!',
    w: 'Columbian exchange'
  },
  {
    id: 'bilimsel-devrim', ad: 'Rönesans ve Bilimsel Devrim', y: -1543, yilYazi: 'MS 1543–1687', ll: [43.77, 11.25], yer: 'Floransa – Avrupa',
    ozet: 'Kopernik\'in Güneş merkezli evren modeli, Galileo\'nun teleskobu ve Newton\'ın kütleçekim yasaları doğayı anlama biçimini kökten değiştirdi.',
    etki: 'Gözlem, deney ve matematik modern bilimin ortak dili hâline geldi; sonraki tüm teknoloji ve uzay çağının kapısını açtı.',
    ilginc: '1543 yılında hem Kopernik\'in gökyüzünü açıklayan kitabı hem de Vesalius\'un insan anatomisini çizen kitabı aynı yıl yayımlandı.',
    w: 'Scientific Revolution'
  },
  {
    id: 'sanayi-devrimi', ad: 'Sanayi Devrimi', y: -1769, yilYazi: 'MS 1760\'lar–1840\'lar', ll: [52.48, -1.89], yer: 'Birmingham ve Manchester, İngiltere',
    ozet: 'James Watt\'ın geliştirdiği buhar makinesi, kömür enerjisi ve dokuma makineleriyle üretim el emeğinden fabrikalara geçti.',
    etki: 'Demiryolları, buharlı gemiler, büyük şehirleşme, modern ekonomi ve insanlık tarihinin en hızlı nüfus/teknoloji sıçraması başladı; aynı zamanda iklim değişikliğinin başlangıcı oldu.',
    ilginc: 'Buharlı lokomotiften önce bir insanın karada gidebildiği en yüksek hız binlerce yıl boyunca yalnızca bir atın koşma hızıyla sınırlıydı.',
    w: 'Industrial Revolution'
  },
  {
    id: 'fransiz-ihtilali', ad: 'Fransız İhtilali', y: -1789, yilYazi: 'MS 1789', ll: [48.85, 2.37], yer: 'Paris, Fransa',
    ozet: 'Bastille\'in düşüşüyle mutlak monarşi ve soyluluk ayrıcalıkları yıkıldı; "İnsan ve Yurttaş Hakları Bildirgesi" ilan edildi.',
    etki: 'Özgürlük, eşitlik, laiklik, ulus-devlet ve anayasal hukuk fikirleri tüm Avrupa\'ya, Osmanlı\'ya ve dünyaya yayılarak modern siyaseti şekillendirdi.',
    ilginc: 'Bugün dünyanın neredeyse tamamında kullanılan metre ve kilogram (metrik sistem), Fransız İhtilali sırasında standartlaştırıldı.',
    w: 'French Revolution'
  },
  {
    id: 'asi-modern-tip', ad: 'Aşının Bulunuşu ve Modern Tıp', y: -1796, yilYazi: 'MS 1796', ll: [51.69, -2.45], yer: 'Berkeley, İngiltere (köken: Osmanlı ve Çin)',
    ozet: 'Edward Jenner, yüzyıllardır Osmanlı\'da ve Asya\'da uygulanan çiçek aşısı geleneğini sığır çiçeğiyle güvenli modern aşıya dönüştürdü.',
    etki: '1928\'de penisilinin (antibiyotik) keşfiyle birlikte bulaşıcı hastalıklar geriledi; 1800\'de ~30 yıl olan ortalama insan ömrü iki kattan fazla uzadı.',
    ilginc: 'Aşı tekniğini İngiltere\'ye ilk tanıtan kişi, 1717\'de İstanbul\'da Türk kadınlarının uyguladığı çiçek aşısını görüp mektuplarıyla anlatan Lady Mary Montagu\'ydu.',
    w: 'Vaccination'
  },
  {
    id: 'ilk-ucus', ad: 'Motorlu İlk Uçuş', y: -1903, yilYazi: 'MS 1903', ll: [36.02, -75.67], yer: 'Kitty Hawk, Kuzey Karolina (ABD)',
    ozet: 'Bisiklet tamircisi Wright Kardeşler, kendi yaptıkları motorlu uçakla 12 saniye boyunca 37 metre havada kalarak insanlığın uçma rüyasını gerçeğe çevirdi.',
    etki: 'Kıtalar arası yolculuk haftalardan saatlere indi; dünya ticareti, turizm, diplomasi ve ulaşım tamamen küreselleşti.',
    ilginc: 'İlk uçuşun üzerinden yalnızca 66 yıl geçmişti ki insanlık bu kez Ay\'a iniş yaptı!',
    w: 'Wright brothers'
  },
  {
    id: 'dunya-savaslari', ad: 'Dünya Savaşları ve BM\'nin Kuruluşu', y: -1945, yilYazi: 'MS 1914–1945', ll: [52.52, 13.41], yer: 'Avrupa ve Tüm Dünya',
    ozet: 'İki küresel savaşta on milyonlarca insan hayatını kaybetti; büyük imparatorluklar dağıldı, sömürgecilik çözüldü ve nükleer çağ başladı.',
    etki: '1945\'te Birleşmiş Milletler ve Evrensel İnsan Hakları Bildirgesi kuruldu; modern uluslararası düzen ve sınırlar büyük ölçüde bu dönemin sonunda çizildi.',
    ilginc: 'Savaş teknolojisi için geliştirilen radar, jet motoru ve ilk elektronik bilgisayarlar barış döneminde sivil yaşamı baştan yarattı.',
    w: 'World War II'
  },
  {
    id: 'aya-inis', ad: 'İnsanın Ay\'a Ayak Basması', y: -1969, yilYazi: 'MS 1969', ll: [28.57, -80.65], yer: 'Cape Canaveral (Apollo 11)',
    ozet: 'Apollo 11 göreviyle Neil Armstrong ve Buzz Aldrin başka bir gök cismine ayak basan ilk insanlar oldu; yaklaşık 650 milyon kişi canlı izledi.',
    etki: 'Uzay çağı, uydular, GPS, hava durumu tahmini ve Dünya\'ya uzaydan tek bir "mavi bilye" olarak bakma bilinci insanlığın ufkunu sonsuza dek değiştirdi.',
    ilginc: 'Apollo 11\'i Ay\'a indiren uçuş bilgisayarının işlem gücü, bugünkü basit bir akıllı telefonun milyonlarca kat altındaydı.',
    w: 'Apollo 11'
  },
  {
    id: 'internet-web', ad: 'İnternet ve Web\'in Doğuşu', y: -1989, yilYazi: 'MS 1989', ll: [46.23, 6.05], yer: 'CERN, Cenevre (İsviçre)',
    ozet: 'Tim Berners-Lee, bilgisayarlar arasında bilgi paylaşmak için World Wide Web\'i (WWW) icat etti ve 1993\'te tüm insanlığa ücretsiz olarak açtı.',
    etki: 'Matbaadan sonraki en büyük bilgi devrimi yaşandı: milyarlarca insan, kütüphaneler, haritalar ve iletişim saniyeler içinde birbirine bağlandı.',
    ilginc: 'Tim Berners-Lee Web\'i patentleyip milyarlar kazanmak yerine herkes özgürce kullanabilsin diye kamuya bağışladı.',
    w: 'World Wide Web'
  }
];

// 🧱 Gerçek coğrafi hattı boyunca çizilen dev yapılar (kürede nokta değil, uzandıkları tüm hat boyunca görünürler)
window.HAT_YAPILAR = [
  {
    id: 'cinseddi', infoId: 'seddming', eskiInfoId: 'seddqin',
    ad: 'Çin Seddi', tip: 'sur', from: 221, to: -2100, minZ: 3.6,
    // Doğuda Bohai Denizi (Shanhaiguan) → Pekin/Badaling → Datong → Sarı Irmak kıvrımı → Lanzhou → Jiayuguan → Dunhuang
    pts: [[40.00, 119.80], [40.43, 116.01], [40.15, 113.30], [39.50, 111.50], [38.30, 109.75], [38.48, 106.25], [37.50, 105.00], [36.10, 103.80], [37.90, 102.60], [38.93, 100.45], [39.80, 98.22], [40.15, 94.66]],
    yer: 'Kuzey Çin (Shanhaiguan\'dan Jiayuguan ve Dunhuang\'a)',
    uzunluk: 'Tüm kollarıyla ~21.196 km · Ana Ming hattı ~8.850 km',
    ozet: 'Kuzey bozkırlarından gelen akınlara karşı savunma, sınır denetimi ve İpek Yolu kervanlarının güvenliği için MÖ 3. yüzyıldan MS 17. yüzyıla kadar farklı hanedanlarca inşa edilen dev sur ve gözetleme kulesi ağı.',
    ilginc: 'Yaygın efsanenin aksine Çin Seddi Ay\'dan çıplak gözle görünmez; ancak haritada Kuzey Çin boyunca binlerce kilometre kıvrılan devasa hattıyla insan elinden çıkmış en uzun yapıdır.',
    w: 'Great Wall of China'
  },
  {
    id: 'hadrian',
    ad: 'Hadrian Duvarı', tip: 'sur', from: -122, to: -2100, minZ: 5.5,
    pts: [[55.00, -1.50], [55.02, -2.05], [54.99, -2.45], [54.94, -2.93], [54.95, -3.22]],
    yer: 'Kuzey İngiltere (Kuzey Denizi\'nden İrlanda Denizi\'ne)',
    uzunluk: '117,5 km (73 Roma mili)',
    ozet: 'Roma İmparatoru Hadrianus\'un MS 122\'de Britanya\'nın kuzey sınırını belirlemek ve kontrol etmek için adayı doğudan batıya boydan boya kestiği taş sur, hendek ve kale zinciri.',
    ilginc: 'Her Roma milinde bir küçük kale ("milecastle") ve aralarında ikişer gözetleme kulesi vardı; kalıntılarının büyük kısmı bugün hâlâ ayaktadır.',
    w: 'Hadrian\'s Wall'
  },
  {
    id: 'inkayolu',
    ad: 'İnka Kraliyet Yolu (Qhapaq Ñan)', tip: 'yol', from: -1438, to: -1800, minZ: 3.8,
    pts: [[0.20, -78.50], [-2.90, -79.00], [-7.16, -78.51], [-12.05, -75.21], [-13.53, -71.97], [-16.50, -68.15], [-21.50, -65.70], [-27.50, -67.50], [-33.45, -70.66]],
    yer: 'And Dağları (Ekvador → Peru/Cusco → Bolivya → Şili/Arjantin)',
    uzunluk: 'Tüm kollarıyla ~40.000 km',
    ozet: 'İnka İmparatorluğu\'nun 4.000–5.000 metre yüksekliğindeki And zirvelerini taş döşeli yollar, merdivenler ve asma ip köprülerle birbirine bağlayan mühendislik harikası.',
    ilginc: 'Tekerlek ve at olmadan yalnızca koşucu ulaklar ("chaski") ve lamalarla işleyen bu yolda bir mesaj günde 240 km hızla imparatorluğun bir ucundan diğerine ulaşırdı.',
    w: 'Inca road system'
  },
  {
    id: 'suveyskanali',
    ad: 'Süveyş Kanalı', tip: 'kanal', from: -1869, to: -2100, minZ: 5.5,
    pts: [[31.26, 32.31], [30.82, 32.32], [30.58, 32.30], [30.33, 32.38], [29.96, 32.55]],
    yer: 'Mısır (Akdeniz – Kızıldeniz bağlantısı)',
    uzunluk: '193 km',
    ozet: '1869\'da açılarak Akdeniz ile Kızıldeniz\'i doğrudan bağlayan, gemilerin tüm Afrika\'yı dolaşma zorunluluğunu ortadan kaldıran dev su yolu.',
    ilginc: 'Avrupa ile Hindistan arasındaki deniz yolculuğunu yaklaşık 7.000 kilometre (haftalarca süre) kısalttı; günümüzde dünya deniz ticaretinin ~%12\'si buradan geçer.',
    w: 'Suez Canal'
  },
  {
    id: 'panamakanali',
    ad: 'Panama Kanalı', tip: 'kanal', from: -1914, to: -2100, minZ: 6.0,
    pts: [[9.38, -79.92], [9.27, -79.92], [9.12, -79.75], [9.00, -79.60], [8.94, -79.55]],
    yer: 'Panama (Atlas Okyanusu – Büyük Okyanus)',
    uzunluk: '82 km',
    ozet: '1914\'te tamamlanan ve dev su havuzları (havuz kapakları) yardımıyla gemileri kıtanın ortasındaki göl seviyesine çıkarıp iki okyanus arasında geçiren kanal.',
    ilginc: 'Gemileri Güney Amerika\'nın en güneyindeki fırtınalı Horn Burnu\'nu dolaşmaktan kurtararak yolculuğu yaklaşık 13.000 km kısalttı.',
    w: 'Panama Canal'
  }
];
