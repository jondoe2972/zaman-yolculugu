// 🌿 Yöreye Özgü Bitkiler ve Ağaçlar (Doğa Atlası → Bitkiler katmanı)
// Her bitkinin anavatanı, meyvesi/ürünü, ne için kullanıldığı (kâğıt, ilaç, kauçuk, baharat, kumaş vb.) ve ilginç bilgisi.
'use strict';
window.ATLAS_BITKILER = [
  {
    id: 'papirus', ad: 'Nil Papirüsü', ik: '🌾', ll: [30.9, 31.1], bolge: 'Nil Deltası, Mısır',
    meyve: 'Yenilebilir meyvesi yoktur; kalın üçgen gövdesi ve özü kullanılır.',
    kullanim: 'Antik dünyanın kâğıdı (papirüs ruloları), sazdan nehir sandalları, halat, hasır sepet ve sandalet yapımı.',
    ozellik: 'Nil Nehri\'nin sığ kıyılarında 4–5 metreye kadar büyüyen dev su sazıdır. Gövde şeritleri çapraz dizilip preslenerek kurutulunca pürüzsüz yazı sayfasına dönüşürdü.',
    ilginc: 'İngilizce "paper" (kâğıt) kelimesi doğrudan Antik Mısır\'ın papirüs bitkisinin adından gelir.',
    w: 'Cyperus papyrus'
  },
  {
    id: 'zeytin', ad: 'Akdeniz Zeytin Ağacı', ik: '🫒', ll: [38.4, 27.1], bolge: 'Ege, Anadolu ve Akdeniz Havzası',
    meyve: 'Zeytin (sonbaharda yeşil ve siyah olarak hasat edilir).',
    kullanim: 'Zeytinyağı (yemeklik ve antik çağda kandil yakıtı), doğal sabun yapımı, tıbbi merhemler ve ince ahşap işçiliği.',
    ozellik: 'Kurak ve taşlı topraklarda 2.000 yıldan fazla yaşayabilen "Ölmez Ağaç"tır; derin kökleri ve gümüşi yapraklarıyla yaz sıcağına direnir.',
    ilginc: 'Antik Olimpiyat Oyunları\'nda şampiyonlara altın madalya yerine kutsal zeytin ağacından örülmüş taç takılırdı.',
    w: 'Olive'
  },
  {
    id: 'findik', ad: 'Karadeniz Fındığı', ik: '🌰', ll: [40.95, 38.4], bolge: 'Doğu Karadeniz (Ordu, Giresun, Trabzon)',
    meyve: 'Sert kabuklu fındık meyvesi (Ağustos ayında toplanır).',
    kullanim: 'Çikolata ve şekerleme sanayii, fındık yağı, kuruyemiş ve kabuğundan çevre dostu biyokütle yakıtı.',
    ozellik: 'Bol yağışlı, nemli ve ılıman Karadeniz yamaçlarını sever; Türkiye tek başına dünya fındık üretiminin yaklaşık %65–70\'ini karşılar.',
    ilginc: 'Fındık ağaçları kışın ortasında (Ocak–Şubat) yapraksızken çiçek açıp rüzgârla tozlaşan nadir bitkilerdendir.',
    w: 'Corylus avellana'
  },
  {
    id: 'safran', ad: 'Safran Çiçeği', ik: '🪻', ll: [41.25, 32.69], bolge: 'Safranbolu (Türkiye) & Horasan (İran)',
    meyve: 'Meyvesi değil, mor çiçeğin içindeki 3 ince kırmızı tepecik (stigma) toplanır.',
    kullanim: 'Dünyanın en pahalı baharatı, doğal altın sarısı kumaş boyası, parfümeri ve geleneksel şifa.',
    ozellik: 'Sonbaharda yalnızca birkaç hafta boyunca mor çiçek açar; güneş doğmadan önce tek tek elle toplanması gerekir.',
    ilginc: 'Sadece 1 kilogram kuru safran elde etmek için yaklaşık 150.000 çiçeğin elle toplanması gerekir — bu yüzden ağırlığınca altından değerlidir!',
    w: 'Saffron'
  },
  {
    id: 'sedir', ad: 'Toros ve Lübnan Sediri', ik: '🌲', ll: [34.24, 36.05], bolge: 'Lübnan Dağları ve Toroslar (Türkiye)',
    meyve: 'Dik duran fıçı biçimli kozalaklar (yenmez).',
    kullanim: 'Antik Fenike ve Mısır gemilerinin direkleri, tapınak ve saray inşası, güve kovucu hoş kokulu reçine ve sedir yağı.',
    ozellik: '1.000–2.000 metre yükseklikte, karlı dağ yamaçlarında 1.000 yılı aşkın süre yaşar; reçineli ahşabı suda çürümediği için antik çağın en aranan kerestesiydi.',
    ilginc: 'Antik Mısır\'da ağaç az olduğu için firavunların dev güneş tekneleri ve lahitleri Fenike gemileriyle getirilen sedir kerestesinden yapılırdı.',
    w: 'Cedrus libani'
  },
  {
    id: 'gunluk', ad: 'Günlük (Tütsü) Ağacı', ik: '🌿', ll: [17.05, 54.1], bolge: 'Güney Arabistan (Umman, Yemen) ve Somali',
    meyve: 'Küçük kapsül meyveleri vardır; asıl değer gövde çizilince sızan reçinedir.',
    kullanim: 'Antik tapınak tütsüleri, lüks parfümeri, mumyalama reçinesi ve aromaterapi yağı.',
    ozellik: 'Kuru kayalık çöl yamaçlarında bile yetişebilen bodur ağaçtır; gövdesinden sızan beyaz süt kuruyunca altın renkli hoş kokulu tütsü tanelerine dönüşür.',
    ilginc: 'Antik çağda Güney Arabistan\'dan Akdeniz\'e uzanan "Tütsü Yolu" üzerindeki en değerli mal bu ağacın reçinesiydi.',
    w: 'Boswellia sacra'
  },
  {
    id: 'hurma', ad: 'Hurma Palmiyesi', ik: '🌴', ll: [24.47, 39.61], bolge: 'Arabistan, Mezopotamya ve Kuzey Afrika vahaları',
    meyve: 'Salkımlar hâlinde yüksek enerjili tatlı hurma meyvesi.',
    kullanim: 'Temel çöl gıdası, yapraklarından sepet/hasır ve gölgelik, liflerinden halat, gövdesinden vaha evlerinin çatı kirişleri.',
    ozellik: 'Arap atasözünde "ayakları suda, başı ateşte" diye tarif edilir: kökleri yeraltı suyuna ulaşırken tepesi 50 °C çöl güneşinde olgunlaşır.',
    ilginc: '2.000 yıllık antik bir çömlekte (Masada) bulunan hurma çekirdeği 2005\'te ekildiğinde filizlenip büyüyerek dünya rekoru kırdı!',
    w: 'Date palm'
  },
  {
    id: 'dut', ad: 'Ak Dut (İpek Ağacı)', ik: '🍃', ll: [30.3, 120.1], bolge: 'Çin (bugün Anadolu ve tüm İpek Yolu boyunca)',
    meyve: 'Tatlı beyaz ve mor dut meyvesi (taze, kurutulmuş veya pekmez yapılır).',
    kullanim: 'Yaprakları ipekböceğinin tek besinidir (ipek kumaş üretimi!), kabuğundan geleneksel el yapımı kâğıt, meyvesinden gıda ve pekmez.',
    ozellik: 'Hızlı büyüyen, kuraklığa dayanıklı ağaçtır; Çin\'de 5.000 yıl önce ipek böcekçiliğiyle birlikte kültüre alındı.',
    ilginc: 'Çin\'de kâğıdın icadında (MS 105) kullanılan ilk ana hammaddelerden biri dut ağacının iç kabuk lifleriydi!',
    w: 'Morus alba'
  },
  {
    id: 'bambu', ad: 'Dev Moso Bambusu', ik: '🎋', ll: [29.8, 118.5], bolge: 'Doğu ve Güney Asya',
    meyve: 'Sadece 60–120 yılda bir nadir tohum verir; genç sürgünleri sebze olarak yenir.',
    kullanim: 'Kâğıt hamuru yapımı, deprem/tayfuna dayanıklı inşaat iskelesi, mobilya, tekstil kumaşı, flüt gibi müzik aletleri ve yemek çubukları.',
    ozellik: 'Ağaç değil dev bir ottur; baharda günde 90 cm uzayarak dünyanın en hızlı büyüyen bitkisidir ve çekme dayanımı çelikle yarışır.',
    ilginc: 'Çin\'de kâğıt icat edilmeden önce kitaplar ince dilimlenip iple birbirine bağlanan bambu şeritlerine yazılırdı.',
    w: 'Bamboo'
  },
  {
    id: 'cay', ad: 'Çay Bitkisi (Camellia sinensis)', ik: '🍵', ll: [24.8, 100.2], bolge: 'Güneybatı Çin, Hindistan (Assam), Sri Lanka ve Rize',
    meyve: 'Küçük odunsu kapsül tohumu vardır; taze üst yaprakları kullanılır.',
    kullanim: 'Yeşil, siyah, beyaz ve oolong çay üretimi (sudan sonra dünyanın en çok içilen içeceği!), kozmetik ve antioksidan özleri.',
    ozellik: 'Asitli toprak ve sisli dağ yağmurlarını sever; budanmazsa 15 metrelik bir ağaca dönüşebilir.',
    ilginc: 'Siyah çay ile yeşil çay tamamen aynı bitkiden toplanır; tek fark yaprakların oksijenle fermente edilip edilmemesidir.',
    w: 'Camellia sinensis'
  },
  {
    id: 'karabiber', ad: 'Karabiber Asması', ik: '🌶️', ll: [11.25, 75.8], bolge: 'Malabar Kıyısı (Güney Hindistan)',
    meyve: 'Salkım hâlinde küçük yuvarlak taneler (yeşilken kurutulunca karabiber, olgunlaşıp soyulunca beyaz biber olur!).',
    kullanim: 'Baharat, buzdolabı yokken etleri koruma, doğal ilaç ve Orta Çağ\'da para yerine geçen ticaret malı.',
    ozellik: 'Tropikal yağmur ormanlarında büyük ağaçlara sarılarak 4 metreye kadar tırmanan çok yıllık bir asmadır.',
    ilginc: 'Orta Çağ Avrupa\'sında karabiber o kadar değerliydi ki "Siyah Altın" diye anılır, kira ve vergiler bazen karabiber tanesiyle ödenirdi.',
    w: 'Black pepper'
  },
  {
    id: 'tarcin', ad: 'Seylan Tarçın Ağacı', ik: '🪵', ll: [7.2, 80.6], bolge: 'Sri Lanka (Seylan)',
    meyve: 'Küçük mor dut benzeri meyvesi vardır; asıl kullanılan kısım ince iç kabuğudur.',
    kullanim: 'Tatlı ve yemek baharatı, uçucu yağ, parfümeri ve antik Mısır\'da mumyalama karışımları.',
    ozellik: 'Genç sürgünlerin dış kabuğu sıyrılıp altındaki ince iç kabuk çıkarılır; güneşte kururken kendiliğinden bildiğimiz tarçın çubuğu şekline kıvrılır.',
    ilginc: '16. yüzyılda Portekiz ve Hollanda, Sri Lanka\'daki tarçın ormanlarının tekelini ele geçirmek için yıllarca deniz savaşları yaptı.',
    w: 'Cinnamomum verum'
  },
  {
    id: 'karanfil', ad: 'Karanfil Ağacı', ik: '🌺', ll: [0.8, 127.4], bolge: 'Maluku (Baharat) Adaları, Endonezya',
    meyve: 'Meyvesi değil, henüz açmamış pembe çiçek tomurcukları kurutulur.',
    kullanim: 'Baharat, diş ağrısını uyuşturan doğal öjenol yağı, parfüm ve tütsü.',
    ozellik: 'Yüzyıllarca dünyada yalnızca Endonezya\'nın birkaç küçük volkanik adasında doğal olarak yetişti.',
    ilginc: '1522\'de Macellan\'ın dünya turundan dönen tek gemisi Victoria, ambarındaki karanfil yükünü satarak tüm seferin masrafını fazlasıyla karşıladı!',
    w: 'Clove'
  },
  {
    id: 'mantarmese', ad: 'Mantar Meşesi', ik: '🌳', ll: [38.6, -8.0], bolge: 'Portekiz, İspanya ve Batı Akdeniz',
    meyve: 'Palamut (hayvan yemi). Asıl ürün süngerimsi kalın kabuğudur.',
    kullanim: 'Doğal şarap mantarı, ses/ısı yalıtım levhaları, ayakkabı tabanı, çanta ve uzay roketi ısı kalkanı yalıtımı!',
    ozellik: 'Ağacı kesmeden her 9 yılda bir yalnızca kalın dış kabuğu soyulur; ağaç kabuğunu tamamen yenileyerek 200 yıl yaşar.',
    ilginc: 'Portekiz tek başına dünyadaki doğal mantar üretiminin yarısından fazlasını karşılar ve mantar meşesi kesmek yasayla yasaktır.',
    w: 'Quercus suber'
  },
  {
    id: 'lavanta', ad: 'Lavanta', ik: '💐', ll: [43.9, 5.8], bolge: 'Provence (Fransa), Akdeniz ve Isparta (Türkiye)',
    meyve: 'Hoş kokulu mor çiçek başakları toplanır.',
    kullanim: 'Parfüm ve kolonya, doğal sabun, sakinleştirici uçucu yağ, bal üretimi ve doğal güve kovucu.',
    ozellik: 'Güneşli, kireçli ve susuz yamaçları seven dayanıklı Akdeniz çalısıdır; yaz başında mor denizler oluşturur.',
    ilginc: 'Adı Latince "yıkamak" anlamına gelen "lavare" sözünden gelir; Romalılar hamam sularını lavanta çiçekleriyle kokulandırırdı.',
    w: 'Lavandula'
  },
  {
    id: 'keten', ad: 'Keten Bitkisi', ik: '🌾', ll: [50.8, 3.3], bolge: 'Avrupa (Belçika, Fransa) ve Antik Mısır',
    meyve: 'Tohumu (keten tohumu — gıda ve yağ) ile uzun gövde lifleri kullanılır.',
    kullanim: 'Serin tutan keten kumaş, yağlı boya resmi için bezir yağı, kaliteli kâğıt (banknot kâğıdı!) ve sağlıklı keten tohumu.',
    ozellik: 'Mavi narin çiçekli ince gövdeli bitkidir; insanlığın 30.000 yıl önce iplik bükmek için kullandığı en eski tekstil bitkisidir.',
    ilginc: 'Antik Mısır mumyalarının neredeyse tamamı yüzlerce metre uzunluğunda ince keten şeritlerle sarılırdı.',
    w: 'Flax'
  },
  {
    id: 'kahve', ad: 'Kahve Ağacı (Coffea arabica)', ik: '☕', ll: [7.5, 36.5], bolge: 'Etiyopya Yaylaları (Anavatanı)',
    meyve: 'Kırmızı "kahve kirazı" — içindeki iki çekirdek kavrulup öğütülür.',
    kullanim: 'Dünya çapında kahve içeceği, kafein özü ve kabuğundan cascara çayı.',
    ozellik: '1.200–2.000 metre yüksekliğindeki serin tropikal dağ ormanlarında gölgede büyür.',
    ilginc: 'Efsaneye göre Etiyopyalı çoban Kaldi, keçilerinin kırmızı kahve meyvelerini yedikten sonra gece boyunca dans edercesine enerjik olduğunu fark ederek kahveyi keşfetti.',
    w: 'Coffea arabica'
  },
  {
    id: 'argan', ad: 'Argan Ağacı', ik: '🌳', ll: [30.4, -9.2], bolge: 'Güneybatı Fas (UNESCO Biyosfer Alanı)',
    meyve: 'Zeytine benzeyen sarı meyve; içindeki sert çekirdekten argan yağı sıkılır.',
    kullanim: 'Kozmetik cilt ve saç yağı ("Fas\'ın Sıvı Altını"), yemeklik fındıksı yağ ve çölleşmeyi durduran kök ağı.',
    ozellik: 'Dünyada doğal olarak yalnızca Fas\'ın yarı kurak güneybatısında yetişen dikenli ve çok dayanıklı bir ağaçtır.',
    ilginc: 'Fas\'taki dağ keçileri argan meyvesini yemek için bu ağacın 10 metre yüksekliğindeki dallarına tırmanır!',
    w: 'Argania spinosa'
  },
  {
    id: 'baobab', ad: 'Afrika Baobabı', ik: '🌳', ll: [-20.25, 44.42], bolge: 'Madagaskar ve Afrika Savanları',
    meyve: 'Kadife kabuklu büyük meyve; içindeki kuru beyaz toz yüksek C vitamini içerir.',
    kullanim: 'Besleyici meyve içeceği, iç kabuk lifinden sağlam halat ve kumaş, dev gövdesinde su depolama ve gölgelik.',
    ozellik: '2.000 yıldan fazla yaşar ve yağmur mevsiminde gövdesinde 120.000 litreye kadar su biriktirir.',
    ilginc: 'Bazı dev yaşlı baobabların oyuk gövdeleri Afrika\'da doğal su sarnıcı, okul, depo ve hatta otobüs durağı olarak kullanılmıştır.',
    w: 'Adansonia'
  },
  {
    id: 'kakao', ad: 'Kakao Ağacı', ik: '🍫', ll: [-2.0, -76.0], bolge: 'Amazon Havzası & Mezoamerika (bugün Batı Afrika dahil)',
    meyve: 'Doğrudan gövdeden çıkan renkli dev kapsül meyveler (her birinde 30–50 çekirdek).',
    kullanim: 'Çikolata yapımı, kozmetik ve tıpta kullanılan kakao yağı ve sıcak kakao içeceği.',
    ozellik: 'Yağmur ormanlarının nemli gölgesinde yaşar; çekirdekleri fermente edilip kavrulmadan çikolata kokusu ortaya çıkmaz.',
    ilginc: 'Maya ve Aztekler kakaoyu acı biberle karıştırıp köpüklü içecek yapar ve kakao çekirdeklerini pazarlarda bozuk para yerine kullanırdı.',
    w: 'Theobroma cacao'
  },
  {
    id: 'kaucuk', ad: 'Amazon Kauçuk Ağacı (Hevea)', ik: '🛞', ll: [-3.1, -60.0], bolge: 'Amazon Yağmur Ormanı (Brezilya)',
    meyve: 'Üç bölmeli patlayan tohum kapsülü; asıl ürün gövdeden akan beyaz lateks sütüdür.',
    kullanim: 'Otomobil ve uçak lastikleri, su geçirmez çizme/yağmurluk, tıbbi eldiven, silgi ve esnek hortumlar.',
    ozellik: 'Gövdesi çizildiğinde kendini yaralardan korumak için beyaz sütlü "lateks" salgılar; kuruyunca esnek doğal kauçuğa dönüşür.',
    ilginc: 'İngilizce kauçuk demek olan "rubber" kelimesi, 1770\'te kurşun kalem izini silmeye (rub out) yaradığı keşfedilince konmuştur!',
    w: 'Hevea brasiliensis'
  },
  {
    id: 'kinkona', ad: 'Kınakına Ağacı (Cinchona)', ik: '🌿', ll: [-10.0, -75.5], bolge: 'Peru ve Ekvador And Dağları',
    meyve: 'Küçük kanatlı tohum kapsülleri; asıl şifa ağacın kabuğundadır.',
    kullanim: 'Sıtma hastalığını tedavi eden ilk etkili ilaç olan "kinin" (quinine) üretimi ve tonik içecek aroması.',
    ozellik: 'And Dağları\'nın 1.500–3.000 metre yüksekliğindeki sisli bulut ormanlarında yetişir; Quechua yerlileri ateş düşürücü özelliğini yüzyıllar önce keşfetmişti.',
    ilginc: 'Kınakına ağacı o kadar hayati bir ilaç kaynağıydı ki Peru\'nun resmi devlet armasında resmedilmiştir!',
    w: 'Cinchona'
  },
  {
    id: 'agave', ad: 'Mavi Agave', ik: '🌵', ll: [20.88, -103.83], bolge: 'Meksika (Jalisco)',
    meyve: 'Çiçeklenmeden önce ortasındaki dev ananas biçimli gövdesi (piña) hasat edilir.',
    kullanim: 'Uzun yaprak liflerinden sağlam gemi halatı ve dokuma, tatlı özünden doğal agave şurubu ve geleneksel içecekler.',
    ozellik: 'Kurak volkanik topraklarda 7–10 yıl büyür; ömründe yalnızca bir kez 5 metrelik dev çiçek sapı çıkarıp tohum verdikten sonra ölür.',
    ilginc: 'Meksika\'nın antik uygarlıkları agave yapraklarının ucundaki sivri dikenleri doğal dikiş iğnesi, liflerini de iplik olarak kullanıyordu.',
    w: 'Agave tequilana'
  },
  {
    id: 'sekoya', ad: 'Dev Sekoya', ik: '🌲', ll: [36.56, -118.75], bolge: 'Kaliforniya (Sierra Nevada, ABD)',
    meyve: 'Yumurta büyüklüğünde kozalaklar (sıcaklıkla açılır).',
    kullanim: 'Dünyanın en büyük karbon deposu ormanları, biyolojik çeşitlilik sığınağı ve doğa koruma mirası.',
    ozellik: '3.200 yılı aşan ömrü ve 85 metreyi geçen boyuyla hacim bakımından dünyadaki en büyük canlı ağaçlardır.',
    ilginc: 'En büyük birey olan "General Sherman" ağacının gövdesi o kadar kalındır ki taban çapı 11 metreyi bulur.',
    w: 'Sequoiadendron giganteum'
  },
  {
    id: 'okaliptus', ad: 'Avustralya Okaliptüsü', ik: '🌿', ll: [-37.8, 145.7], bolge: 'Avustralya ve Tazmanya',
    meyve: 'Küçük odunsu "sakız fındığı" (gumnut) kapsülleri.',
    kullanim: 'Nefes açıcı okaliptüs yağı ve öksürük pastilleri, yüksek kaliteli kâğıt hamuru, kereste ve koalaların tek besin kaynağı.',
    ozellik: '700\'den fazla türü vardır; hızlı büyür, bataklıkları kurutma gücü yüksektir ve dikey yapraklarıyla güneşten korunur.',
    ilginc: 'Okaliptüs yapraklarının uçucu yağı havada buharlaşarak Avustralya\'daki "Mavi Dağlar"a (Blue Mountains) uzaktan mavi sis rengini verir.',
    w: 'Eucalyptus'
  },
  {
    id: 'ginkgo', ad: 'Ginkgo Biloba', ik: '🍂', ll: [31.0, 119.5], bolge: 'Doğu Çin',
    meyve: 'Sarı etli tohumu (Asya mutfağında pişirilerek yenir); yaprak özü tıpta kullanılır.',
    kullanim: 'Hafıza ve dolaşım destekleyici bitkisel özler, hava kirliliğine dayanıklı şehir ağaçlandırması.',
    ozellik: '270 milyon yıldır neredeyse değişmeden yaşayan fosil ağaçtır; böceklere, hastalıklara ve şehir dumanına karşı olağanüstü dirençlidir.',
    ilginc: '1945\'te Hiroşima\'da atom bombasının düştüğü yere 1 km mesafede hayatta kalıp yeniden filizlenen 6 ağaç Ginkgo Biloba\'ydı.',
    w: 'Ginkgo biloba'
  }
];
