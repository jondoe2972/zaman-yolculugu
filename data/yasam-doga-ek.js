// 🐾🌿 Yaşa Doğa Genişleme Paketi: +24 Hayvan (toplam 60) + 22 Bitki (toplam 50)
'use strict';
(() => {
  const YD = window.YASAM_DOGA;
  if (!YD) return;
  YD.hayvanlar.push(
    {
      id: 'yd-sinekkusu', ad: 'Arı Sinekkuşu', ik: '🐦', tur: 'hayvan', ll: [21.5, -79.0],
      omur: '3 – 7 yıl',
      beslenme: 'Çiçek nektarı ve minik sinekler — her 10 dakikada bir beslenmek zorundadır!',
      zincir: 'Hızlı tozlayıcı — yüzlerce tropikal çiçeği tozlaştırır; örümcekler ve peygamber develerinden kaçınır.',
      goc: 'Bazı sinekkuşu türleri Meksika Körfezi\'ni 800 km boyunca hiç durmadan tek nefeste uçarak geçer.',
      alan: 'Küba ve Amerika kıtasının tropikal ormanları',
      superguc: 'Geri geri, yan yan ve baş aşağı uçabilen tek kuştur; kanatlarını saniyede 80 kez çırpar!',
      sasirtici: 'Ağırlığı yalnızca 2 gramdır (bir madeni paradan hafif!) ve kalbi uçarken dakikada 1.260 kez atar; gece donmamak için kalbini 50\'ye düşürüp mini kış uykusuna (torpor) girer!',
      tehdit: 'Ormansızlaşma ve çiçekli alanların azalması.',
      dongu: [
        ['⚡ Saniyede 80 Kanat', 'Gün doğar doğmaz havada asılı kalıp uzun gaganla günde 1.500\'den fazla çiçeği ziyaret edersin.'],
        ['🥚 Bezelye Kadar Yumurta', 'Örümcek ağı ve yosunla ceviz kabuğu kadar minik bir yuva örüp 2 kahve çekirdeği boyunda yumurta bırakırsın.'],
        ['🌙 Gece Enerji Tasarrufu', 'Hava kararınca vücut ısını yarıya düşürüp derin enerji tasarrufuna geçersin.']
      ],
      w: 'Bee hummingbird'
    },
    {
      id: 'yd-mavihalkali', ad: 'Mavi Halkalı Ahtapot', ik: '🐙', tur: 'hayvan', ll: [-33.9, 151.3],
      omur: '1 – 2 yıl',
      beslenme: 'Etçil — küçük yengeç, karides ve balıklar.',
      zincir: 'Zehirli resif avcısı — parlak mavi halkaları "bana dokunma!" uyarısıdır.',
      goc: 'Göç etmez; Avustralya ve Pasifik kıyılarındaki sığ gelgit havuzlarında ve mercan kovuklarında yaşar.',
      alan: 'Avustralya ve Batı Pasifik sığ mercan kıyıları',
      superguc: 'Tehlike hissedince derisindeki 60 parlak elektrik mavisi halkayı saniyede yakıp söndürür.',
      sasirtici: 'Golf topu büyüklüğündedir ama tükürüğündeki tetrodotoksin zehri siyanürden 1.000 kat güçlüdür — tek bir birey 26 yetişkin insanı etkisiz hâle getirebilecek zehir taşır ve bilinen panzehri yoktur!',
      tehdit: 'Kıyı kirliliği ve yasa dışı akvaryum ticareti.',
      dongu: [
        ['🪨 Kusursuz Kamuflaj', 'Sakin hâlde kum ve kaya renginde olup kimseye görünmeden gelgit havuzunda dolaşırsın.'],
        ['💙 Neon Uyarı', 'Bir avcı yaklaşınca saniyenin üçte birinde parlak mavi halkalarını yakarak uzak durmasını söylersin.'],
        ['🥚 Son Görev', 'Anne 50–100 yumurtasını kollarının altında 6 ay boyunca yemek yemeden korur ve yavrular çıkınca ölür.']
      ],
      w: 'Blue-ringed octopus'
    },
    {
      id: 'yd-mantiskaridesi', ad: 'Mantis Karidesi', ik: '🦐', tur: 'hayvan', ll: [-18.0, 147.0],
      omur: '4 – 20 yıl',
      beslenme: 'Etçil — yengeç, salyangoz ve sert kabuklu midyeler.',
      zincir: 'Resiflerin zırh kırıcı avcısı — sert kabuklu avları tek darbeyle parçalar.',
      goc: 'Göç etmez; mercan resiflerindeki kendi U biçimli yuvasını savunur.',
      alan: 'Hint-Pasifik tropikal mercan resifleri',
      superguc: 'Ön kıskaçlarını 22 kalibrelik mermi hızıyla (80 km/s) savurur; gözlerinde insandaki 3 yerine 16 renk reseptörü vardır!',
      sasirtici: 'Yumruğu o kadar hızlıdır ki suyun içinde anlık buhar balonu (kavitasyon) oluşturur; balon patlarken su bir anlığına GÜNEŞ YÜZEYİ SICAKLIĞINA ulaşır ve ışık kıvılcımı çıkarır!',
      tehdit: 'Mercan beyazlaması ve okyanus ısınması.',
      dongu: [
        ['🌈 16 Kanallı Görüş', 'İki bağımsız saplı gözünle ultraviyole ve polarize ışığı görerek resifi tararsın.'],
        ['🥊 Süpersonik Darbe', 'Kalın kabuklu bir yengeci tek yumrukta çatlatıp akvaryum camını bile kırabilecek güçle avlanırsın.'],
        ['🏠 Mercan Kalesi', 'Geceleri yuvanın girişini taşlarla kapatıp güvenle dinlenirsin.']
      ],
      w: 'Mantis shrimp'
    },
    {
      id: 'yd-aksolotl', ad: 'Aksolotl (Gülümseyen Semender)', ik: '🦎', tur: 'hayvan', ll: [19.26, -99.10],
      omur: '10 – 15 yıl',
      beslenme: 'Etçil — solucan, böcek larvaları ve küçük balıklar.',
      zincir: 'Göl tabanı avcısı — Meksika\'nın antik kanallarında üst omurgasız avcısıdır.',
      goc: 'Doğada yalnızca Meksika\'daki Xochimilco Gölü kanallarında yaşar!',
      alan: 'Xochimilco Gölü (Meksiko, Meksika)',
      superguc: 'Kopan bacağını, kuyruğunu, omuriliğini, kalbinin ve hatta beyninin bir kısmını iz bırakmadan YENİDEN BÜYÜTEBİLİR!',
      sasirtici: 'Hayatı boyunca hiç karaya çıkmadan "sonsuz gençlik" (neoteni) hâlinde tüylü solungaçlarıyla yaşar; Aztek mitolojisinde ateş tanrısı Xolotl\'un su kılığına girmiş hâli sayılırdı!',
      tehdit: 'Şehirleşme, su kirliliği ve göle sonradan bırakılan istilacı sazan/tilapia balıkları (doğada kritik tehlike altında).',
      dongu: [
        ['💧 Sonsuz Gençlik', 'Diğer semenderler karaya geçerken sen ömrün boyunca su altında gülümseyen yüzün ve tüylü solungaçlarınla kalırsın.'],
        ['🧬 Yenilenme Mucizesi', 'Bir yırtıcı bacağını yaralarsa kök hücrelerin haftalar içinde kemik, kas ve sinirleri sıfırdan örer.'],
        ['🌙 Gece Avı', 'Gece karanlığında sudaki titreşimleri hissedip ağzını vakum gibi açarak avını çekersin.']
      ],
      w: 'Axolotl'
    },
    {
      id: 'yd-narval', ad: 'Narval (Denizin Tek Boynuzlusu)', ik: '🐋', tur: 'hayvan', ll: [73.0, -80.0],
      omur: '40 – 50 yıl',
      beslenme: 'Etçil — Grönland pisi balığı, Arktik morina ve kalamar.',
      zincir: 'Arktik derin dalış avcısı — kutup ayıları ve orkalar baş düşmanıdır.',
      goc: 'Kışın kalın deniz buzlarının altındaki dar yarıklara, yazın Grönland ve Kanada fiyortlarına göç eder.',
      alan: 'Kuzey Kutbu (Grönland, Kanada ve Rusya Arktik suları)',
      superguc: '1.500 metre derinliğe dalabilir ve alnından çıkan 3 metrelik spiral "boynuz" aslında dev bir üst köpek dişidir!',
      sasirtici: 'Spiral dişinin içinde 10 MİLYON sinir ucu vardır — yani bu boynuz bir kılıç değil, suyun sıcaklığını, basıncını ve tuzluluğunu ölçen dev bir sensördür! Orta Çağ\'da Avrupa\'da "tek boynuzlu at boynuzu" diye ağırlığınca altına satılırdı.',
      tehdit: 'Kutup buzullarının erimesi, gemi gürültüsü ve buz kapanları.',
      dongu: [
        ['❄️ Buz Altı Dalışı', 'Kış karanlığında 1.500 m derine dalıp 25 dakika nefes tutarak kalamar avlar, nefes için buz çatlaklarına çıkarsın.'],
        ['🦄 Sensör Diş', 'Spiral dişinle buzun ne zaman donacağını ve tuz değişimlerini milimetrik hissedersin.'],
        ['☀️ Yaz Fiyortları', 'Yazın buzlar açılınca yüzlerce narvalle birlikte sığ koy ve fiyortlarda buluşursunuz.']
      ],
      w: 'Narwhal'
    },
    {
      id: 'yd-koala', ad: 'Koala', ik: '🐨', tur: 'hayvan', ll: [-33.0, 151.0],
      omur: '13 – 18 yıl',
      beslenme: 'Otçul — neredeyse yalnızca zehirli okaliptüs yaprakları yer!',
      zincir: 'Uzmanlaşmış ağaç otçulu — başka hiçbir memelinin sindiremediği okaliptüs yapraklarını tüketir.',
      goc: 'Göç etmez; aynı okaliptüs korusunda ağaçtan ağaca geçer.',
      alan: 'Doğu ve Güneydoğu Avustralya okaliptüs ormanları',
      superguc: 'Karaciğeri okaliptüs yaprağındaki zehirleri zararsız hâle getirir; neredeyse hiç su içmeden tüm suyunu yapraklardan alır!',
      sasirtici: 'Koalaların parmak izi insan parmak izine o kadar benzer ki elektron mikroskobu altında bile uzmanlar ayırt etmekte zorlanır! Düşük enerjili besini yüzünden günde 18–20 saat uyur.',
      tehdit: 'Orman yangınları, habitat kaybı ve hastalıklar.',
      dongu: [
        ['😴 20 Saat Uyku', 'Çatal dalların arasına yerleşip zehirli yaprakları sindirirken günün neredeyse tamamını uyuyarak geçirirsin.'],
        ['🌿 Gece Ziyafeti', 'Gece serinliğinde 600 okaliptüs türünden en taze ve zehirsiz 30 türü koklayarak seçersin.'],
        ['🦘 Kese ve Sırt', 'Fasulye tanesi kadar doğan yavrun 6 ay kesede büyüdükten sonra sırtına tutunup dünyayı tanır.']
      ],
      w: 'Koala'
    },
    {
      id: 'yd-tembelhayvan', ad: 'Üç Parmaklı Tembel Hayvan', ik: '🦥', tur: 'hayvan', ll: [-3.0, -60.0],
      omur: '20 – 30 yıl',
      beslenme: 'Otçul — ağaç yaprakları, tomurcuklar ve sürgünler.',
      zincir: 'Ağaç tepesi otçulu — jaguar ve harpya kartalından hareketsiz kalarak gizlenir.',
      goc: 'Göç etmez; tüm ömrünü birkaç ağaç dalında baş aşağı asılı geçirir.',
      alan: 'Orta ve Güney Amerika yağmur ormanları',
      superguc: 'Su altında nefesini 40 dakika tutabilir (yunuslardan bile uzun!) ve kolları yorulmadan dala kilitlenir.',
      sasirtici: 'Metabolizması o kadar yavaştır ki tek bir yaprağı sindirmesi 30 GÜN sürebilir! Kürkü o kadar yavaş hareket eder ki üzerinde yeşil algler ve özel güveler büyür — bu yeşil yosun ona ağaçta kusursuz kamuflaj sağlar!',
      tehdit: 'Ormansızlaşma ve haftada bir kez tuvalet için yere indiğinde avcılara yakalanması.',
      dongu: [
        ['🌿 Baş Aşağı Yaşam', 'Kıvrık pençelerin kas gücü harcamadan dala kilitlenir; uyurken bile düşmezsin.'],
        ['🦠 Kürkünde Ekosistem', 'Kürkündeki yeşil algleri yalayarak ekstra besin alır, aynı zamanda yaprakların arasında görünmez olursun.'],
        ['🏊 Şaşırtıcı Yüzücü', 'Karada saatte 0,2 km gitsen de suya girince karadakinden 3 kat hızlı yüzersin!']
      ],
      w: 'Three-toed sloth'
    },
    {
      id: 'yd-flamingo', ad: 'Flamingo', ik: '🦩', tur: 'hayvan', ll: [38.7, 33.4],
      omur: '30 – 40 yıl (hayvanat bahçelerinde 60+ yıl!)',
      beslenme: 'Tuzlu göllerdeki mavi-yeşil algler ve tuz karideslerini ters gagasından süzerek yer.',
      zincir: 'Tuz gölü süzücüsü — başka kuşların yaşayamadığı aşırı tuzlu ve sodalı göllerde beslenir.',
      goc: 'Tuz Gölü (Türkiye), Camargue ve Doğu Afrika soda gölleri arasında mevsimlik göç eder.',
      alan: 'Tuz Gölü (Anadolu), Akdeniz lagünleri, Afrika ve Güney Amerika tuz gölleri',
      superguc: 'Cildi yakacak kadar alkalik/sodalı göllerde ve kaynar kaplıca kenarlarında ayakları zarar görmeden yürür!',
      sasirtici: 'Flamingolar gri-beyaz doğar — pembe renklerini yedikleri alg ve karideslerdeki beta-karoten pigmentinden alırlar! Tek ayak üzerinde dururken eklemleri mekanik olarak kilitlendiği için sıfır kas gücüyle uyuyabilirler.',
      tehdit: 'Tuz göllerinin ve sulak alanların kuruması.',
      dongu: [
        ['🙃 Baş Aşağı Süzme', 'Gaganı suya ters daldırıp dilini pompa gibi kullanarak dakikada binlerce mikroskobik alg süzersin.'],
        ['🦩 Tek Ayakta Uyku', 'Vücut ısını korumak için bir ayağını tüylerinin içine çekip dengede uyursun.'],
        ['🏰 Çamur Kulesi Yuva', 'Binlerce flamingoyla birlikte çamurdan minik volkan şeklinde yuva yapıp tepesine tek yumurta bırakırsın.']
      ],
      w: 'Flamingo'
    },
    {
      id: 'yd-baykus', ad: 'Peçeli Baykuş (Sessiz Avcı)', ik: '🦉', tur: 'hayvan', ll: [47.0, 8.0],
      omur: '4 – 10 yıl (doğada)',
      beslenme: 'Etçil — tarla faresi, köstebek ve küçük kemirgenler.',
      zincir: 'Gece tepe avcısı — bir baykuş ailesi yılda 3.000\'den fazla tarla faresi yiyerek tarlaları korur.',
      goc: 'Çoğu yerleşiktir; av azaldığında yeni bölgelere uçar.',
      alan: 'Kutuplar ve çöller hariç neredeyse tüm dünya',
      superguc: 'Tüylerinin kenarındaki mikroskobik tarak yapısı rüzgâr türbülansını yok eder — uçarken neredeyse SIFIR SES çıkarır!',
      sasirtici: 'İki kulağı kafasının aynı hizasında değil, biri yukarda biri aşağıdadır! Bu sayede zifiri karanlıkta kar altındaki bir farenin kalp atışını ve yerini 3 boyutlu radar gibi santimetrik bulur; başını 270° çevirebilir.',
      tehdit: 'Fare zehirleri, karayolu trafiği ve eski ahır/ağaç kovuklarının yok olması.',
      dongu: [
        ['🌙 Zifiri Karanlıkta Radar', 'Kalp şeklindeki yüz tüylerin ses dalgalarını kulaklarına odaklayan canlı bir çanak antendir.'],
        ['🤫 Sıfır Sesle Süzülüş', 'Mikrofonların bile kaydedemediği sessizlikte avının üstüne inersin.'],
        ['☀️ Gündüz Gizlenişi', 'Gün doğarken sessiz bir ağaç kovuğunda veya taş kulede dinlenirsin.']
      ],
      w: 'Barn owl'
    },
    {
      id: 'yd-zurafa', ad: 'Zürafa', ik: '🦒', tur: 'hayvan', ll: [-2.0, 36.0],
      omur: '20 – 25 yıl',
      beslenme: 'Otçul — başka hiçbir hayvanın ulaşamadığı yüksek akasya yaprakları.',
      zincir: 'Yüksek ağaç tüketicisi — savanın gözetleme kulesi gibidir; diğer otçullar tehlikeyi zürafaya bakıp anlar.',
      goc: 'Yağışa göre savan ve açık ormanlar arasında mevsimlik yer değiştirir.',
      alan: 'Sahra Altı Afrika savanları',
      superguc: '5,5 metre boyuyla karadaki en uzun hayvandır; 11 kg\'lık dev kalbi kanı 2 metre yukarıdaki beynine özel valflerle pompalar.',
      sasirtici: '2 metrelik boynunda tıpkı İNSANLAR gibi sadece 7 adet boyun omuru vardır (her biri 25 cm)! Günde yalnızca 30 dakika uyur ve 45 cm uzunluğundaki dili güneş yanmasın diye koyu MOR renktedir.',
      tehdit: 'Yaşam alanı kaybı ve kaçak avcılık.',
      dongu: [
        ['🌿 Akasya Ziyafeti', '45 cm\'lik esnek dilinle dikenli akasya dallarının arasından en taze yaprakları ustaca sıyırırsın.'],
        ['💧 Tehlikeli Su İçişi', 'Su içerken ön bacaklarını iki yana açıp eğilmen gerekir; bu yüzden sürüde biri hep gözcü kalır.'],
        ['⚡ Tekme Savunması', 'Bir aslan yaklaşırsa akşam yemeği boyundaki toynağınla tek vuruşta onu etkisiz hâle getirebilirsin!']
      ],
      w: 'Giraffe'
    },
    {
      id: 'yd-suaygiri', ad: 'Su Aygırı', ik: '🦛', tur: 'hayvan', ll: [-1.5, 35.0],
      omur: '40 – 50 yıl',
      beslenme: 'Otçul — geceleri karaya çıkıp 40 kg taze ot yer.',
      zincir: 'Nehir ekosistem mühendisi — suya bıraktığı gübre balık sürülerini besler; yetişkininin timsahlar bile yanına yaklaşamaz!',
      goc: 'Kuraklıkta su birikintileri arasında yürür; normalde nehirlerde yerleşiktir.',
      alan: 'Sahra Altı Afrika nehir ve gölleri',
      superguc: 'Gündüzleri suyun altında uyur ve bilinçsiz bir refleksle her 5 dakikada bir uyanmadan yüzeye çıkıp nefes alır!',
      sasirtici: 'Derisinden salgıladığı kırmızımsı sıvı eskiden "kan teri" sanılırdı — oysa hem UV ışınlarını kesen doğal GÜNEŞ KREMİ hem de yaraları iyileştiren doğal ANTİBİYOTİKTİR! 3 ton ağırlığına rağmen karada saatte 30 km koşabilir.',
      tehdit: 'Nehirlerin kuruması ve yasa dışı diş ticareti.',
      dongu: [
        ['☀️ Nehirde Serinleme', 'Gündüz kavurucu sıcakta sadece gözlerin ve kulakların su üstünde kalacak biçimde nehirde serinlersin.'],
        ['🌙 Gece Otlağı', 'Güneş batınca karaya çıkıp gece boyunca 5–8 km yürüyerek çimen biçme makinesi gibi otlarsın.'],
        ['🦷 Dev Esneme', 'Çeneni 150 derece açıp 50 cm\'lik dişlerini göstererek nehirdeki sınırını ilan edersin.']
      ],
      w: 'Hippopotamus'
    },
    {
      id: 'yd-pangolin', ad: 'Pangolin (Pullu Karıncayiyen)', ik: '🦔', tur: 'hayvan', ll: [5.0, 15.0],
      omur: '10 – 20 yıl',
      beslenme: 'Böcekçil — yılda 70 MİLYON karınca ve termit yer!',
      zincir: 'Doğal haşere kontrolcüsü — ormanlardaki termit popülasyonunu dengeler.',
      goc: 'Göç etmez; gececi ve yalnız bir yaşam sürer.',
      alan: 'Sahra Altı Afrika ve Güney/Güneydoğu Asya ormanları',
      superguc: 'Tırnaklarımızla aynı maddeden (keratin) yapılmış keskin pullarla kaplı TEK memelidir; tehlikede zırhlı bir top gibi kıvrılır!',
      sasirtici: 'Dili kendi gövdesinden bile uzundur ve göğüs kafesinin derinliklerine kadar bağlanır! Aslanlar bile kıvrılmış bir pangolinin zırhını kolay kolay açamaz.',
      tehdit: 'Dünyada en çok yasa dışı ticareti yapılan memeli olması (nesli ciddi tehlike altında).',
      dongu: [
        ['🌙 Gece Kazıcısı', 'Güçlü ön pençelerinle beton gibi sert termit yuvalarını açıp yapışkan dilinle ziyafet çekersin.'],
        ['🛡️ Zırh Topu', 'Tehlike anında başını karnına saklayıp keskin pullu bir topa dönüşürsün.'],
        ['👶 Kuyrukta Yolculuk', 'Yavrun doğduktan sonra aylarca annesinin pullu kuyruğuna sımsıkı tutunarak gezer.']
      ],
      w: 'Pangolin'
    },
    {
      id: 'yd-mirket', ad: 'Mirket (Kalahari Nöbetçisi)', ik: '🦊', tur: 'hayvan', ll: [-25.5, 21.5],
      omur: '8 – 12 yıl',
      beslenme: 'Etçil/Böcekçil — akrep, yılan, örümcek, kertenkele ve böcekler.',
      zincir: 'Sosyal çöl avcısı — zehirli akrepleri kontrol eder; kartal ve çakallara karşı topluca nöbet tutar.',
      goc: 'Göç etmez; 20–50 bireylik aileler hâlinde yeraltı tünel şehirlerinde yaşar.',
      alan: 'Kalahari ve Namib Çölleri (Güney Afrika, Botsvana, Namibya)',
      superguc: 'Akrep ve birçok yılan zehrine karşı doğal bağışıklığı vardır!',
      sasirtici: 'Ailede her zaman biri tümsekte arka ayakları üstünde "nöbetçi" durur ve 30\'dan fazla farklı alarm sesi çıkarır (kartal için ayrı, yılan için ayrı ses)! Yetişkinler yavrulara önce iğnesi koparılmış akreple gerçek "avcılık okulu" dersi verir.',
      tehdit: 'Yırtıcı kuşlar, çakallar ve aşırı kuraklık.',
      dongu: [
        ['🌅 Sabah Güneşlenmesi', 'Soğuk çöl gecesinden sonra tünelden çıkıp karnını güneşe dönerek tüm aile birlikte ısınırsınız.'],
        ['👀 Nöbet Değişimi', 'Biri gökyüzünü tararken diğerleri kumda akrep ve böcek kazar; tehlike ıslığında saniyede tünele dalarsınız.'],
        ['🎓 Yavru Eğitimi', 'Sürüdeki "bakıcılar" yavrulara akrebin zehirli kuyruğunu nasıl koparacaklarını adım adım öğretir.']
      ],
      w: 'Meerkat'
    },
    {
      id: 'yd-kutuptilkisi', ad: 'Kutup Tilkisi', ik: '🦊', tur: 'hayvan', ll: [78.2, 15.6],
      omur: '3 – 6 yıl (doğada)',
      beslenme: 'Hepçil — lemming kemirgenleri, deniz kuşları, balık ve kutup ayısı artıkları.',
      zincir: 'Arktik tundra avcısı — lemming popülasyonuna bağlı yaşar; kar baykuşu ve kutup ayısına dikkat eder.',
      goc: 'Bir kutup tilkisi Norveç Svalbard\'dan Kanada\'ya deniz buzları üzerinden sadece 76 günde 3.500 km yürüyerek rekor kırdı!',
      alan: 'Arktik tundra (Grönland, İzlanda, Svalbard, Kanada, Sibirya)',
      superguc: 'Kışın kar gibi bembeyaz, yazın kaya/toprak gibi kahverengi kürk giyer; -50 °C soğukta bile üşümez!',
      sasirtici: 'Patilerinin altı bile kalın kürkle kaplıdır (doğal kar botu!) ve karın 1 metre altındaki farenin yerini Dünya\'nın manyetik alanını da kullanarak balıklama dalarak yakalar!',
      tehdit: 'Kuzeye yayılan kızıl tilkiler ve deniz buzlarının azalması.',
      dongu: [
        ['❄️ Beyaz Kış Kürkü', 'Kış tipisinde kalın beyaz kuyruğunu yüzüne sarıp karın içinde sıcacık uyursun.'],
        ['🎯 Kar Altı Dalışı', 'Karın altından gelen minik hışırtıyı duyup havaya zıplayarak baş aşağı kara dalıp avını kaparsın.'],
        ['☀️ Kahverengi Yaz', 'Yazın karlar eriyince kürkünü kahverengiye değiştirip kayalıklar arasında görünmez olursun.']
      ],
      w: 'Arctic fox'
    },
    {
      id: 'yd-denizsamuru', ad: 'Deniz Samuru', ik: '🦦', tur: 'hayvan', ll: [36.6, -121.9],
      omur: '15 – 20 yıl',
      beslenme: 'Etçil — deniz kestanesi, midye, istiridye ve yengeç.',
      zincir: 'Kilit taşı deniz avcısı — deniz kestanelerini yiyerek dev kelp yosun ormanlarının yok olmasını önler!',
      goc: 'Göç etmez; Kuzey Pasifik\'in dev kelp yosunu ormanlarında yaşar.',
      alan: 'Kaliforniya, Alaska, Japonya ve Rusya Kuzey Pasifik kıyıları',
      superguc: 'Hayvanlar alemindeki en yoğun kürke sahiptir (1 cm²\'de 150.000 tüy!) ve alet kullanan nadir deniz memelilerindendir.',
      sasirtici: 'Uyurken okyanus akıntısı onları ayırmasın diye BİRBİRLERİNİN ELİNİ TUTARAK uyurlar! Koltuk altında en sevdiği taşı sakladığı doğal bir deri cebi vardır; midyeleri göğsünde o taşla kırar.',
      tehdit: 'Petrol sızıntıları, köpekbalıkları ve geçmişteki kürk avcılığı.',
      dongu: [
        ['🪨 Taşla Midye Kırma', 'Dibe dalıp topladığın midyeleri sırt üstü yüzerken göğsündeki favori taşınla kırıp yersin.'],
        ['🫧 Kürk Bakımı', 'Kürküne hava kabarcıkları üfleyerek buz gibi okyanusta ıslanmadan kuru ve sıcak kalırsın.'],
        ['🤝 El Ele Uyku', 'Gece kelp yosununu battaniye gibi beline sarıp arkadaşının elini tutarak dalgalarda sallanırsın.']
      ],
      w: 'Sea otter'
    },
    {
      id: 'yd-gronlandkopek', ad: 'Grönland Köpekbalığı (400 Yıllık Dev)', ik: '🦈', tur: 'hayvan', ll: [70.0, -40.0],
      omur: '250 – 500 yıl! (Dünya\'nın en uzun yaşayan omurgalısı)',
      beslenme: 'Etçil/Leşçil — soğuk derin deniz balıkları, foklar ve balina leşleri.',
      zincir: 'Derin Arktik tepe avcısı — buz gibi 2.000 m derinlikte rakipsizdir.',
      goc: 'Kuzey Atlantik ve Arktik\'in dondurucu derin sularında ağır çekimde dolaşır.',
      alan: 'Grönland, İzlanda ve Kuzey Atlantik derin suları',
      superguc: 'O kadar yavaş büyür ki (yılda sadece 1 cm!) cinsel olgunluğa yaklaşık 150 YAŞINDA ulaşır!',
      sasirtici: 'Bugün Arktik\'te yüzen bazı Grönland köpekbalıkları 1600\'lerde — yani Osmanlı\'da IV. Murad ya da Galileo döneminde — doğmuş ve hâlâ hayattadır! Etindeki doğal antifriz kimyasalı onu donmaktan korur.',
      tehdit: 'Derin deniz balıkçı ağlarına takılma ve Arktik ısınması.',
      dongu: [
        ['❄️ Yavaş Çekim Yaşam', '0 °C buzlu derinlikte saatte yalnızca 1–2 km hızla süzülerek enerjini yüzyıllarca korursun.'],
        ['👃 Karanlıkta Koku', 'Neredeyse kör olmana rağmen keskin koku duyunla kilometrelerce ötedeki avı bulursun.'],
        ['⏳ Yüzyılları Aşan Ömür', 'İnsan imparatorlukları kurulup yıkılırken sen hâlâ aynı kuzey sularında sakince yüzersin.']
      ],
      w: 'Greenland shark'
    },
    {
      id: 'yd-devmurekkep', ad: 'Dev Mürekkep Balığı', ik: '🦑', tur: 'hayvan', ll: [-41.0, 174.0],
      omur: '3 – 5 yıl (çok hızlı büyüyüp 13 metreye ulaşır!)',
      beslenme: 'Etçil — derin deniz balıkları ve diğer kalamarlar.',
      zincir: 'Derin okyanus avcısı — tek gerçek rakibi 2.000 m\'ye dalan dev ispermeçet balinalarıdır!',
      goc: '300 ila 1.000 metre arasındaki karanlık "alacakaranlık kuşağı"nda tüm okyanuslarda dolaşır.',
      alan: 'Tüm dünya okyanuslarının derin suları (özellikle Yeni Zelanda ve Japonya açıkları)',
      superguc: 'Hayvanlar alemindeki EN BÜYÜK GÖZLERE sahiptir — her bir gözü tam bir futbol topu (27 cm) büyüklüğündedir!',
      sasirtici: 'Yüzyıllarca denizcilerin anlattığı "Kraken" canavarı efsanelerinin gerçek ilham kaynağıdır ve doğal ortamında canlı olarak ilk kez ancak 2012 yılında filme alınabilmiştir!',
      tehdit: 'İspermeçet balinaları (balinaların derisinde bu devin vantuz izleri sıkça görülür).',
      dongu: [
        ['🌌 Derinlikte Pusu', 'Futbol topu kadar gözlerinle 1.000 m derinlikteki en zayıf biyolüminesans parıltısını bile yakalarsın.'],
        ['🦑 10 Metrelik Dokunaç', 'İki uzun av kolunu şimşek gibi fırlatıp dişli vantuzlarınla avını yakalarsın.'],
        ['🖤 Mürekkep Bulutu', 'Dev bir ispermeçet balinasıyla karşılaşınca koyu mürekkep bulutu bırakıp jet itişiyle karanlığa kaçarsın.']
      ],
      w: 'Giant squid'
    },
    {
      id: 'yd-balporsugu', ad: 'Bal Porsuğu (Korkusuz Savaşçı)', ik: '🦡', tur: 'hayvan', ll: [-22.0, 24.0],
      omur: '7 – 12 yıl (doğada)',
      beslenme: 'Hepçil — arı kovanı/bal, kobra yılanları, akrep, kemirgen ve meyveler.',
      zincir: 'Cesur orta avcı — kendisinden 10 kat büyük aslan ve leoparları bile geri püskürtür!',
      goc: 'Göç etmez; geniş bir alanda gece-gündüz gezer ve her gece yeni bir çukur kazar.',
      alan: 'Afrika, Orta Doğu ve Hindistan',
      superguc: 'Kobra ve mamba yılanlarının ölümcül zehrine karşı doğal direnci vardır; derisi o kadar kalın ve gevşektir ki ısırıldığında kendi derisinin içinde dönüp saldırganı ısırabilir!',
      sasirtici: 'Guinness Rekorlar Kitabı tarafından "Dünya\'nın En Korkusuz Hayvanı" seçildi! Bir kobra tarafından ısırılıp bayılsa bile 2 saat uyuduktan sonra uyanıp yılanı yemeye devam ettiği belgelenmiştir.',
      tehdit: 'Arıcılarla çatışma ve karayolu kazaları.',
      dongu: [
        ['🍯 Kovan Baskını', 'Yüzlerce arı sokmasına kalın derin sayesinde aldırmadan kovanı açıp bal ve arı larvalarını yersin.'],
        ['🐍 Zehirli Ziyafet', 'Zehirli bir kobrayı korkusuzca yakalayıp başından kuyruğuna kadar afiyetle yersin.'],
        ['🛠️ Kaçış Ustası', 'Çok zekidir — kapalı alanlarda taş, dal ve tırmık kullanarak kilitli kapıları açıp kaçtığı ünlüdür!']
      ],
      w: 'Honey badger'
    },
    {
      id: 'yd-kivikusu', ad: 'Kivi Kuşu', ik: '🥝', tur: 'hayvan', ll: [-41.3, 173.2],
      omur: '25 – 50 yıl',
      beslenme: 'Böcekçil/Hepçil — solucan, böcek larvaları ve düşmüş meyveler.',
      zincir: 'Gececi orman tabanı avcısı — memeli bulunmayan eski Yeni Zelanda\'da kirpi/porsuk rolünü üstlendi.',
      goc: 'Uçamadığı için yalnızca Yeni Zelanda ormanlarında yaşar.',
      alan: 'Yeni Zelanda yağmur ormanları',
      superguc: 'Burun delikleri tüm diğer kuşların aksine gagasının TA UCUNDADIR — toprağa saplayıp yer altındaki solucanları koklayarak bulur!',
      sasirtici: 'Tavuk boyutundadır ama yumurtası kendi vücut ağırlığının %20\'si kadardır (insan boyutuna oranlasak 12 kiloluk bir bebek doğurmak gibi!) ve kivi meyvesi adını bu kuştan almıştır.',
      tehdit: 'Adaya sonradan getirilen gelincik, kedi ve köpekler.',
      dongu: [
        ['🌙 Gece Koklayıcısı', 'Karanlıkta tüyleri kürk gibi yumuşak gövdenle ormanda dolaşıp uzun gaganla toprağı koklarsın.'],
        ['🥚 Dev Yumurta', 'Yumurtayı bıraktıktan sonra 80 gün boyunca kuluçkaya genellikle BABA kivi yatar!'],
        ['🌳 Ömür Boyu Eş', 'Eşinle 20 yılı aşan uzun bir ömür boyunca aynı orman bölgesini paylaşırsın.']
      ],
      w: 'Kiwi (bird)'
    },
    {
      id: 'yd-gergedanbocegi', ad: 'Herkül Gergedan Böceği', ik: '🪲', tur: 'hayvan', ll: [10.0, -84.0],
      omur: '1 – 2 yıl larva · 3 – 6 ay yetişkin böcek',
      beslenme: 'Larvaken çürüyen odun; yetişkinken olgun tropikal meyvelerin suyu.',
      zincir: 'Orman ayrıştırıcısı — devrilmiş ağaçları toprağa geri kazandırır.',
      goc: 'Göç etmez; geceleri tropikal ormanlarda uçarak meyve ve eş arar.',
      alan: 'Orta ve Güney Amerika yağmur ormanları',
      superguc: 'Vücut ağırlığına oranla Dünya\'nın en güçlü canlılarındandır — kendi ağırlığının 850 KATINI taşıyabilir!',
      sasirtici: 'İnsan boyutunda olsaydı tek başına 65 tonluk bir tankı kaldırabilirdi! Ayrıca kabuğunun rengi havadaki neme göre zeytin yeşilinden siyaha değişir.',
      tehdit: 'Yağmur ormanı kaybı ve koleksiyon amaçlı yakalanma.',
      dongu: [
        ['🪵 2 Yıllık Dev Larva', 'Çürüyen dev ağaç kütüklerinin içinde avuç içi kadar büyük bir larva olarak büyürsün.'],
        ['🪲 17 cm\'lik Zırhlı Dev', 'Kozadan çıktığında boynuzunla birlikte 17 cm uzunluğa ulaşan parıltılı bir şövalye olursun.'],
        ['⚔️ Boynuz Güreşi', 'Dişiyi etkilemek için rakip erkekleri kıskaç boynuzunla kavrayıp ağaç dalından aşağı atmaya çalışırsın.']
      ],
      w: 'Hercules beetle'
    },
    {
      id: 'yd-mantavatoz', ad: 'Dev Manta Vatozu', ik: '🌊', tur: 'hayvan', ll: [-8.7, 115.5],
      omur: '40 – 50 yıl',
      beslenme: 'Süzerek beslenir — mikroskobik plankton ve minik balık larvaları.',
      zincir: 'Açık okyanus süzücüsü — planktonları süzer; yalnızca büyük köpekbalıkları ve orkalar tehdit oluşturur.',
      goc: 'Plankton patlamalarını takip ederek tropikal okyanuslarda 1.000+ km göç eder.',
      alan: 'Tüm tropikal ve subtropikal okyanuslar',
      superguc: '7 metreye ulaşan kanatlarıyla su altında kuş gibi süzülür; tüm balıklar arasında en büyük beyne sahiptir!',
      sasirtici: 'Bilim insanları su altına ayna koyduğunda manta vatozlarının kendilerini tanıdığını ve aynanın karşısında baloncuk çıkarıp kanat salladığını gözlemledi! Ayrıca suda hiç durmadan yüzmek zorundadır.',
      tehdit: 'Balıkçı ağları ve solungaç plakası avcılığı.',
      dongu: [
        ['🪽 Sualtı Uçuşu', 'Dev kanatlarını zarifçe çırparak mercan temizlik istasyonlarına uğrayıp küçük balıklara parazitlerini temizletirsin.'],
        ['🌀 Plankton Girdabı', 'Diğer mantalarla daire çizip planktonları merkeze toplayarak açık ağzınla süzülürsün.'],
        ['🚀 Sudan Sıçrayış', 'Bazen 7 metrelik gövdenle sudan 2 metre havaya sıçrayıp görkemli bir sesle suya çarparsın.']
      ],
      w: 'Giant oceanic manta ray'
    },
    {
      id: 'yd-okapi', ad: 'Okapi (Orman Zürafası)', ik: '🦓', tur: 'hayvan', ll: [1.5, 28.5],
      omur: '20 – 30 yıl',
      beslenme: 'Otçul — 100\'den fazla yağmur ormanı yaprağı, tomurcuk, mantar ve kil.',
      zincir: 'Gizli orman otçulu — leoparlardan sessizliği ve kamuflaj çizgileriyle korunur.',
      goc: 'Göç etmez; yalnızca Kongo\'nun derin Ituri yağmur ormanlarında yaşar.',
      alan: 'Demokratik Kongo Cumhuriyeti (Ituri Yağmur Ormanı)',
      superguc: 'Bacakları zebra gibi çizgili ama ZÜRAFANIN TEK YAŞAYAN AKRABASIDIR; 35 cm\'lik diliyle kendi göz kapaklarını ve kulaklarını temizleyebilir!',
      sasirtici: 'O kadar utangaç ve gizlidir ki Batı bilim dünyası 1901 yılına kadar varlığını bilmiyordu — yıllarca "Afrika tek boynuzlusu" diye efsane sanıldı!',
      tehdit: 'Orman kesimi, yasa dışı madencilik ve kaçak avcılık.',
      dongu: [
        ['🌿 Gölgelerde Kamuflaj', 'Bacaklarındaki beyaz çizgiler sık orman yapraklarından süzülen güneş ışığında seni görünmez kılar.'],
        ['👂 Dev Radar Kulaklar', 'Leoparların en ufak adımını duyan iri kulaklarınla ormanda sessizce yön değiştirirsin.'],
        ['👶 İki Aylık Sır', 'Yeni doğan okapi yavrusu avcılar kokusunu almasın diye ilk 1–2 ay boyunca neredeyse hiç dışkılamaz!']
      ],
      w: 'Okapi'
    },
    {
      id: 'yd-leylek', ad: 'Beyaz Leylek', ik: '🦢', tur: 'hayvan', ll: [40.2, 28.6],
      omur: '20 – 35 yıl',
      beslenme: 'Etçil — kurbağa, böcek, çekirge, yılan ve tarla faresi.',
      zincir: 'Sulak alan ve tarla avcısı — çiftçilerin en sevdiği doğal zararlı kontrolcüsüdür.',
      goc: 'Her yıl Avrupa ve Anadolu\'dan İstanbul Boğazı üzerinden Güney Afrika\'ya 10.000 km gidip döner!',
      alan: 'Avrupa, Anadolu (Eskikaraağaç vb.) ve kışın Sahra Altı Afrika',
      superguc: 'Deniz üstünde sıcak hava akımı olmadığı için Akdeniz\'i geçmez; İstanbul Boğazı ve Cebelitarık gibi dar kara köprülerinden süzülerek uçar!',
      sasirtici: 'Ses telleri gelişmediği için ötmez; bunun yerine eşiyle selamlaşırken gagasını hızla birbirine vurarak "lak-lak" (takırdama) müziği yapar ve her bahar on binlerce km öteden AYNI BACADAKİ yuvaya geri döner!',
      tehdit: 'Sulak alanların kuruması, açık elektrik hatları ve göç yollarındaki avcılık.',
      dongu: [
        ['🌬️ Boğazdan Süzülüş', 'İlkbaharda yüz binlerce leylekle termal akımlara binip İstanbul semalarından süzülerek kuzeye geçersin.'],
        ['🏡 Sadık Yuva', 'Her yıl yeni dallar ekleyerek 1 ton ağırlığa ulaşabilen dev yuvanda eşinle gaga takırdatarak buluşursun.'],
        ['🌍 10.000 km Sonbahar Göçü', 'Yavrular uçmayı öğrenince Ağustos sonunda hep birlikte Afrika savanlarına doğru yola çıkarsınız.']
      ],
      w: 'White stork'
    },
    {
      id: 'yd-yarasa', ad: 'Uçan Tilki (Dev Meyve Yarasası)', ik: '🦇', tur: 'hayvan', ll: [-17.0, 145.5],
      omur: '15 – 25 yıl',
      beslenme: 'Otçul — meyve, çiçek nektarı ve polen (asla kan emmez!).',
      zincir: 'Gece tohum ekicisi ve tozlayıcı — tropikal yağmur ormanlarının yenilenmesinde başrol oynar.',
      goc: 'Çiçek açan ağaçları ve olgun meyveleri takip ederek gecede 50 km, mevsimde yüzlerce km uçar.',
      alan: 'Avustralya, Güneydoğu Asya, Hindistan ve Hint Okyanusu adaları',
      superguc: 'Gerçek anlamda uçabilen tek memeli grubudur; 1,5 metrelik kanat açıklığı ve keskin gece görüşüne sahiptir.',
      sasirtici: 'Tek bir gece uçuşunda binlerce meyve tohumunu ormansız alanlara bırakarak yeni yağmur ormanları diker — bilim insanları onlara "Gecenin Bahçıvanları" diyor!',
      tehdit: 'Aşırı sıcak hava dalgaları, elektrik telleri ve meyve bahçesi ağları.',
      dongu: [
        ['☀️ Baş Aşağı Koloni', 'Gündüzleri binlerce arkadaşınla dev ağaç dallarına baş aşağı asılıp kanatlarınla kendini yelpazelersin.'],
        ['🌙 Meyve Uçuşu', 'Gün batımında dev sürü hâlinde gökyüzüne yükselip keskin kokunla olgun incir ve mangoları bulursun.'],
        ['🌱 Orman Dikimi', 'Uçarken bıraktığın tohumlar ertesi yağmurda yeni tropikal ağaçlara dönüşür.']
      ],
      w: 'Pteropus'
    }
  );

  YD.bitkiler.push(
    {
      id: 'yd-kaucuk', ad: 'Kauçuk Ağacı (Hevea)', ik: '🌳', tur: 'bitki', ll: [-3.1, -60.0],
      omur: '60 – 100 yıl',
      beslenme: 'Fotosentez — sıcak, nemli Amazon yağmur ormanı toprağını sever.',
      zincir: 'Yağmur ormanı üreticisi — gövdesindeki yapışkan lateks sütü böceklerin kabuğu delmesini önler.',
      goc: 'Anavatanı Amazon\'dur; 1876\'da tohumları Brezilya\'dan gizlice kaçırılıp Malezya ve Tayland\'a yayıldı.',
      alan: 'Amazon Havzası, Malezya, Endonezya ve Tayland',
      superguc: 'Kabuğu çizildiğinde anında süt beyazı esnek lateks akıtıp kendi yarasını kapatır.',
      sasirtici: 'Dünyadaki otomobil lastiklerinden uçak tekerleklerine, silgiden ameliyat eldivenine kadar modern sanayinin temeli bu ağacın böceklere karşı ürettiği savunma sütüne dayanır!',
      tehdit: 'Yaprak mantarı hastalıkları ve tek tip tarım.',
      dongu: [
        ['🌧️ Ekvator Yağmuru', 'Yılda 2.500 mm yağmur altında 30 metre göğe uzanırsın.'],
        ['🥛 Lateks Kalkanı', 'Kabuğundaki ince kanallarda biriktirdiğin beyaz süt seni odun kurtlarından korur.'],
        ['💥 Patlayan Tohum', 'Olgunlaşan meyven sesli bir patlamayla tohumlarını 15 metre uzağa fırlatır!']
      ],
      w: 'Hevea brasiliensis'
    },
    {
      id: 'yd-tarcin', ad: 'Seylan Tarçın Ağacı', ik: '🪵', tur: 'bitki', ll: [7.8, 80.7],
      omur: '40 – 60 yıl',
      beslenme: 'Fotosentez — tropikal kıyı nemi ve kumlu toprak.',
      zincir: 'Tropikal üretici — aromatik yağları yaprak ve kabuğunu mantarlardan korur.',
      goc: 'Sri Lanka\'nın yerlisidir; antik çağda Arap tüccarlar kaynağını yüzyıllarca gizli tutup Roma\'ya masalsı fiyatlara sattı.',
      alan: 'Sri Lanka (Seylan), Güney Hindistan ve Seyşeller',
      superguc: 'İç kabuğu soyulduğunda kuruyarak kendiliğinden ince tarçın rulolarına kıvrılır!',
      sasirtici: 'Antik Roma\'da tarçın gümüşten 15 kat daha pahalıydı! Tüccarlar fiyatını yüksek tutmak için tarçının "dev kuşların uçurum yuvalarından" toplandığı yalanını uydurmuşlardı.',
      tehdit: 'Aşırı nem değişimleri ve orman kaybı.',
      dongu: [
        ['🌱 Genç Sürgünler', 'Yağmur mevsiminde yumuşak ve esnek yeni dallar sürersin.'],
        ['🪵 İç Kabuk Hasadı', 'İnce iç kabuğun kuruyunca eşsiz kokulu kahverengi çubuklara dönüşür.'],
        ['🌿 Yeniden Filizlenme', 'Budanan köklerinden her mevsim taze sürgünler fışkırır.']
      ],
      w: 'Cinnamomum verum'
    },
    {
      id: 'yd-vanilya', ad: 'Vanilya Orkidesi', ik: '🌼', tur: 'bitki', ll: [20.4, -97.3],
      omur: '15 – 20 yıl (tırmanıcı orkide asması)',
      beslenme: 'Fotosentez — büyük ağaç gövdelerine sarılarak gölgede yükselir.',
      zincir: 'Tropikal orkide — doğada yalnızca Meksika\'daki özel Melipona arısı tarafından tozlaştırılır.',
      goc: 'Meksika\'da Totonak ve Aztekler buldu; 1841\'de Réunion Adası\'nda 12 yaşındaki Edmond Albius adlı çocuk elle tozlaştırmayı icat edince Madagaskar\'a yayıldı.',
      alan: 'Meksika, Madagaskar ve tropikal adalar',
      superguc: 'Yenilebilir meyve veren TEK orkide cinsidir!',
      sasirtici: 'Her bir vanilya çiçeği yılda SADECE TEK BİR SABAH birkaç saatliğine açar! O birkaç saat içinde tozlaşmazsa solup düşer — bu yüzden Madagaskar\'da her çiçek hâlâ tek tek elle kürdanla tozlaştırılır.',
      tehdit: 'Tropikal kasırgalar ve iklim değişikliği.',
      dongu: [
        ['🌿 Tırmanan Asma', 'Hava köklerinle tropikal ağaçlara tutunup 15 metre yükseğe tırmanırsın.'],
        ['⏰ 4 Saatlik Çiçek', 'Bir sabah sarı-yeşil çiçeğini açarsın; öğlene kadar tozlaşırsan 9 ayda olgunlaşacak vanilya çubuğun büyür.'],
        ['✨ Fermente Aroma', 'Yeşil çubuğun başlangıçta kokusuzdur; güneş ve terletme işlemiyle o eşsiz vanilya kokusu doğar.']
      ],
      w: 'Vanilla planifolia'
    },
    {
      id: 'yd-karabiber', ad: 'Karabiber Asması (Kara Altın)', ik: '🫑', tur: 'bitki', ll: [11.2, 75.8],
      omur: '20 – 30 yıl',
      beslenme: 'Fotosentez — sıcak ve yağışlı Malabar kıyısı ormanları.',
      zincir: 'Tropikal sarmaşık — acı piperin maddesi meyvesini zararlı böceklerden korur.',
      goc: 'Güney Hindistan\'dan 4.000 yıl önce Mısır\'a (II. Ramses\'in mumyasında karabiber bulundu!), Roma\'ya ve tüm dünyaya yayıldı.',
      alan: 'Hindistan (Kerala/Malabar), Vietnam ve Endonezya',
      superguc: 'Siyah, beyaz ve yeşil biberin hepsi aynı asmadan gelir — farkı olgunlaşma zamanı ve kabuğun soyulması yaratır!',
      sasirtici: 'Orta Çağ Avrupa\'sında karabiber o kadar değerliydi ki kira, vergi ve çeyizler karabiber taneleriyle ödenirdi; Vasco da Gama\'nın Hindistan deniz yolunu aramasının ana sebebi bu bitkiydi!',
      tehdit: 'Kök çürüklüğü ve muson düzensizliği.',
      dongu: [
        ['🌧️ Muson Tırmanışı', 'Ağaçlara sarılarak büyür, salkım salkım minik yeşil taneler verirsin.'],
        ['☀️ Güneşte Kararma', 'Yeşil taneler güneşte kuruyunca buruşup keskin aromalı karabibere dönüşür.'],
        ['🌍 Dünya Sofraları', 'Bugün dünyada en çok ticareti yapılan baharat olarak her mutfaktasın.']
      ],
      w: 'Black pepper'
    },
    {
      id: 'yd-kinakina', ad: 'Kınakına Ağacı (Sıtma İlacı)', ik: '🌿', tur: 'bitki', ll: [-13.5, -72.0],
      omur: '30 – 50 yıl',
      beslenme: 'Fotosentez — And Dağları\'nın sisli bulut ormanları (1.500–3.000 m).',
      zincir: 'Yüksek dağ üreticisi — kabuğundaki acı kinin maddesi doğal savunmasıdır.',
      goc: 'Peru ve Ekvador And Dağları\'ndan 17. yüzyılda Avrupa\'ya ve tüm tropikal dünyaya yayıldı.',
      alan: 'Peru, Ekvador, Bolivya And yamaçları',
      superguc: 'Kabuğundaki kinin alkaloidi sıtma parazitini durduran ilk etkili doğal ilaçtır!',
      sasirtici: '17. yüzyılda Avrupa\'ya ulaştığında sıtma yüzünden ölen milyonlarca insanı kurtardı; Peru\'nun ulusal armasında bile kınakına ağacı yer alır ve klasik tonik içeceğine acı tadını veren de kinindir!',
      tehdit: 'And bulut ormanlarının tahribi.',
      dongu: [
        ['🌫️ Bulut Ormanı', 'And Dağları\'nın serin, sürekli sisli yamaçlarında pembe-beyaz çiçekler açarsın.'],
        ['💊 Şifalı Kabuk', 'Gövde kabuğunda biriktirdiğin kinin seni böceklerden korurken insanlığa şifa olur.'],
        ['🌬️ Kanatlı Tohumlar', 'Hafif kanatlı tohumların dağ rüzgârlarıyla yeni yamaçlara taşınır.']
      ],
      w: 'Cinchona'
    },
    {
      id: 'yd-papirus', ad: 'Nil Papirüsü (İlk Kâğıt)', ik: '🌾', tur: 'bitki', ll: [30.8, 31.2],
      omur: 'Çok yıllık rizom (su kenarında on yıllarca sürer)',
      beslenme: 'Fotosentez — sığ tatlı su bataklıkları ve nehir kıyıları.',
      zincir: 'Sulak alan üreticisi — suyu filtreler, su kuşlarına ve balıklara barınak olur.',
      goc: 'Antik Nil Vadisi\'nin sembolüydü; bugün Doğu Afrika göllerinde ve Sicilya\'da doğal olarak yaşar.',
      alan: 'Nil havzası, Doğu Afrika sulak alanları',
      superguc: 'Üçgen gövdesi 4–5 metre uzar; ince şeritleri çapraz dizilip ezildiğinde kendi doğal özsuyuyla yapışıp kâğıda dönüşür!',
      sasirtici: 'İngilizce "paper" ve Fransızca "papier" sözcükleri doğrudan bu bitkinin adından (papyrus) gelir! Antik Mısırlılar papirüsten sadece kâğıt değil, sandal, halat, sandalet ve sepet de yaptı.',
      tehdit: 'Sulak alanların kurutulması ve barajlar.',
      dongu: [
        ['🌊 Nehir Kıyısı', 'Taşkın sularının getirdiği verimli çamurda hızla 4 metre boya ulaşırsın.'],
        ['☀️ Püsküllü Taç', 'Tependeki ince yeşil püsküller rüzgârda dans edip kuşlara yuva olur.'],
        ['📜 Tarihin Hafızası', 'İnsanlığın ilk destanları, tıp kitapları ve matematik papirüsleri senin gövdene yazıldı.']
      ],
      w: 'Cyperus papyrus'
    },
    {
      id: 'yd-sedir', ad: 'Toros ve Lübnan Sediri', ik: '🌲', tur: 'bitki', ll: [36.8, 30.0],
      omur: '1.000 – 2.000+ yıl!',
      beslenme: 'Fotosentez — yüksek kireçtaşı dağ yamaçları ve kar suları.',
      zincir: 'Dağ ormanı mimarı — kışın yaprak dökmez, yaban keçisi ve dağ kuşlarına sığınak olur.',
      goc: 'Toros Dağları (dünyadaki en büyük doğal sedir ormanları Türkiye\'dedir!) ve Lübnan dağları.',
      alan: 'Toros Dağları (Antalya, Mersin, Kahramanmaraş) ve Lübnan',
      superguc: 'Reçineli aromatik ahşabı suya, kurtçuklara ve çürümeye karşı yüzyıllarca dayanıklıdır!',
      sasirtici: 'Antik Mısır Firavunlarının güneş tekneleri, Fenike ticaret filoları ve Gılgamış Destanı\'ndaki kutsal ormanlar bu ağaçtan yapılmıştır; Antalya\'daki "Ambar Katranı" sediri 2.000 yaşındadır!',
      tehdit: 'Orman yangınları ve kuraklaşan dağ iklimi.',
      dongu: [
        ['❄️ Kar Altında Çimlenme', 'Tohumların soğuk kış karının altında uyanıp kayalık yarıklara kök salar.'],
        ['🌲 Şemsiye Taç', 'Yaşlandıkça tepen düzleşip rüzgâra dayanıklı görkemli yatay dallar oluşturur.'],
        ['🪵 Bin Yıllık Miras', 'Reçinen böcekleri uzak tutarak seni binlerce yıl ayakta tutar.']
      ],
      w: 'Cedrus libani'
    },
    {
      id: 'yd-nar', ad: 'Nar Ağacı', ik: '🍎', tur: 'bitki', ll: [37.0, 35.3],
      omur: '100 – 200 yıl',
      beslenme: 'Fotosentez — sıcak yaz güneşi ve kuraklığa dayanıklı toprak.',
      zincir: 'Akdeniz/Orta Doğu üreticisi — kuşlar ve insanlar meyvesini yiyip tohumlarını yayar.',
      goc: 'İran ve Anadolu\'dan 5.000 yıl önce tüm Akdeniz\'e ve İpek Yolu\'yla Çin\'e yayıldı.',
      alan: 'Anadolu, İran, Kafkasya, Akdeniz ve Orta Asya',
      superguc: 'Kalın deri kabuğu içindeki yüzlerce sulu taneyi aylarca bozulmadan korur.',
      sasirtici: 'Tek bir nar meyvesinin içinde ortalama 600 ila 1.000 arasında yakut kırmızısı tane bulunur; bu yüzden 5.000 yıldır tüm Akdeniz kültürlerinde bereketin sembolüdür ve el bombasına ("grenade") bile adını vermiştir!',
      tehdit: 'Aşırı kış donları.',
      dongu: [
        ['🌺 Alev Kırmızısı Çiçekler', 'İlkbaharda parlak turuncu-kırmızı çiçeklerinle arıları davet edersin.'],
        ['💎 Yakut Hazinesi', 'Yaz güneşi altında kalın kabuğun içinde yüzlerce sulu tohum olgunlaştır.'],
        ['🍂 Sonbahar Hasadı', 'Ekim ayında çatlayan meyvelerin toprağa ve sofralara bereket saçar.']
      ],
      w: 'Pomegranate'
    },
    {
      id: 'yd-incir', ad: 'İncir Ağacı (Ters Çiçek)', ik: '🍈', tur: 'bitki', ll: [37.8, 27.8],
      omur: '100 – 200 yıl',
      beslenme: 'Fotosentez — derin ve güçlü kökleriyle kayaların arasından bile su bulur.',
      zincir: 'Kilit taşı meyve ağacı — yılda 2 kez meyve vererek 1.200\'den fazla kuş ve memeli türünü besler.',
      goc: '11.000 yıl önce Yakın Doğu\'da (tarım devriminin en başlarında!) evcilleştirilen ilk ağaçlardan biridir.',
      alan: 'Ege/Aydın, Akdeniz ve Orta Doğu',
      superguc: 'Yediğimiz incir aslında bir meyve değil, İÇE DOĞRU BÜYÜMÜŞ yüzlerce minik çiçeğin oluşturduğu özel bir kesedir!',
      sasirtici: 'Yabani incirler 80 milyon yıldır yalnızca 2 milimetrelik minik "incir arısı" ile ortak yaşar — arı incirin içine girip çiçekleri tozlaştırır, incir de arının yavrularına yuva olur!',
      tehdit: 'Şiddetli don ve kuraklık.',
      dongu: [
        ['🪨 Kayayı Delen Kök', 'İncecik bir taş duvar çatlağında bile kök salıp dev bir ağaca dönüşebilirsin.'],
        ['🐝 Gizli Tozlaşma', 'İçindeki yüzlerce görünmez çiçek minik incir arısıyla buluşup ballı meyveye dönüşür.'],
        ['☀️ Ege Güneşi', 'Yaz sonunda güneşte ballanan incirlerin binlerce yıldır insan ve kuşları besler.']
      ],
      w: 'Ficus carica'
    },
    {
      id: 'yd-bugday', ad: 'Buğday (Medeniyetin Tohumu)', ik: '🌾', tur: 'bitki', ll: [37.8, 39.8],
      omur: '1 yıl (tek yıllık tahıl)',
      beslenme: 'Fotosentez — güneşli ovalar ve ılıman yağışlar.',
      zincir: 'İnsanlığın bir numaralı enerji kaynağı — dünya nüfusunun kalori ihtiyacının %20\'sini tek başına karşılar!',
      goc: '11.000 yıl önce Güneydoğu Anadolu\'da (Karacadağ etekleri!) yabani siyez buğdayından evcilleştirilip tüm dünyaya yayıldı.',
      alan: 'Anavatanı Güneydoğu Anadolu / Bereketli Hilal; bugün tüm kıtalar',
      superguc: 'Yabani buğday başakları olgunlaşınca tohumu rüzgâra dökerken, insanlar dökülmeyen mutasyonu seçerek tarımı ve şehirleri başlattı!',
      sasirtici: 'Ekmeklik buğdayın DNA\'sı insan DNA\'sından 5 KAT DAHA BÜYÜKTÜR (3 farklı yabani ot türünün doğal melezidir)! Bugün Dünya\'da ekili tarım alanlarının en genişini buğday kaplar.',
      tehdit: 'Kuraklık, pas mantarı ve aşırı sıcak dalgaları.',
      dongu: [
        ['🌱 Sonbahar Ekimi', 'Kış karının altında köklerini güçlendirip bahar güneşiyle hızla boy atarsın.'],
        ['🌾 Altın Başak', 'Yaz başında rüzgârda dalgalanan altın bir denize dönüşürsün.'],
        ['🍞 Ekmek ve Yaşam', 'Hasat edilen tanelerin değirmenlerde una ve sofralarda ekmeğe dönüşür.']
      ],
      w: 'Wheat'
    },
    {
      id: 'yd-welwitschia', ad: 'Welwitschia (2.000 Yıllık 2 Yaprak)', ik: '🌵', tur: 'bitki', ll: [-22.6, 15.0],
      omur: '1.000 – 2.000 yıl!',
      beslenme: 'Fotosentez — Atlantik\'ten Namib Çölü\'ne gelen sabah sisini yapraklarından emer.',
      zincir: 'Çöl fosil üreticisi — gölgesi ve özsuyu çöl böcekleri ile gergedanlara can verir.',
      goc: 'Yalnızca Namibya ve Angola\'nın kurak Namib Çölü\'nde yaşar.',
      alan: 'Namib Çölü (Namibya – Angola)',
      superguc: '1.500 yıl boyunca HAYATI BOYUNCA SADECE 2 ADET YAPRAK büyütür — o iki yaprak hiç dökülmez, sadece rüzgârla şerit şerit yırtılıp uzar!',
      sasirtici: 'Dinozorlar çağından (Jura dönemi) kalma yaşayan bir fosildir; yılda neredeyse hiç yağmur yağmayan çölde sadece okyanus sisinden içtiği nemle iki bin yıl hayatta kalır!',
      tehdit: 'İklim değişikliği ve çöl araçlarının ezmesi.',
      dongu: [
        ['🌫️ Çöl Sisi', 'Şafakta Atlantik\'ten sürüklenen soğuk sis damlalarını 2 dev yaprağındaki gözeneklerden içersin.'],
        ['⏳ İki Yaprakla İki Bin Yıl', 'Yaprakların tabandan ömür boyu uzar, uçları rüzgârda kuruyup kıvrılır.'],
        ['🪨 Çölün Sabırlı Tanığı', 'Yüzlerce yıl kıpırdamadan çöl kumlarının ortasında yeşil kalırsın.']
      ],
      w: 'Welwitschia'
    },
    {
      id: 'yd-gokkusagi', ad: 'Gökkuşağı Okaliptüsü', ik: '🌈', tur: 'bitki', ll: [7.0, 125.5],
      omur: '100 – 150 yıl',
      beslenme: 'Fotosentez — tropikal yağmur ormanları.',
      zincir: 'Tropikal dev üretici — 60–75 metre boya ulaşıp yağmur ormanı çatısını kurar.',
      goc: 'Filipinler, Endonezya ve Papua Yeni Gine\'nin yerlisidir; güzelliğiyle Hawaii ve tropikal parklara taşındı.',
      alan: 'Filipinler (Mindanao), Endonezya, Papua Yeni Gine',
      superguc: 'Gövdesi pastel boyayla boyanmış gibi parlak yeşil, mavi, mor, turuncu ve kızıl şeritlerle kaplıdır!',
      sasirtici: 'Bu inanılmaz renkler boya değil tamamen doğaldır: kabuğu yıl boyunca farklı zamanlarda şeritler hâlinde soyulur; taze çıkan kabuk parlak yeşildir, havayla temas ettikçe sırayla mavi, mor, turuncu ve bordoya döner!',
      tehdit: 'Kağıt hamuru için aşırı kesim.',
      dongu: [
        ['🎨 Canlı Tuval', 'Gövden büyüdükçe eski kabuk şeritleri dökülür ve altından neon yeşili yeni kabuk çıkar.'],
        ['🌈 Renk Değişimi', 'Haftalar içinde klorofil ve tanenler oksitlenerek gövdeni gökkuşağına çevirir.'],
        ['🌳 70 Metrelik Dev', 'Hızla büyüyerek tropikal ormanın en renkli sütunu olursun.']
      ],
      w: 'Eucalyptus deglupta'
    },
    {
      id: 'yd-ibrikbitki', ad: 'Etçil İbrik Bitkisi (Nepenthes)', ik: '🪴', tur: 'bitki', ll: [4.0, 115.0],
      omur: '10 – 20+ yıl',
      beslenme: 'Fotosentez + yaprak ucundaki sürahi tuzakla yakaladığı böcekler (azot için).',
      zincir: 'Etçil bitki — böcekleri sindirir; bazı dev türleri dağ sivri fareleriyle "tuvalet ortaklığı" kurar!',
      goc: 'Borneo, Sumatra, Filipinler ve Madagaskar yağmur ormanlarında yaşar.',
      alan: 'Güneydoğu Asya (Borneo, Sumatra) yağmur ormanları',
      superguc: 'Yaprağının ucu yağmurdan koruyan kapaklı, içi sindirim sıvısı dolu kaygan bir sürahiye dönüşür!',
      sasirtici: 'Bazı dev Borneo türleri 3,5 litre su tutabilir; böcek yakalamak yerine ağzında tatlı nektar sunup küçük ağaç farelerini kendine çeker ve onların bıraktığı azotlu gübreyle beslenir!',
      tehdit: 'Ormansızlaşma ve yasa dışı koleksiyon toplama.',
      dongu: [
        ['🍯 Tatlı Tuzak', 'Sürahinin parlak kenarında tatlı nektar salgılayıp karınca ve sinekleri çağırırsın.'],
        ['🛝 Kaygan Ağız', 'Yağmurla ıslanan ağız kenarı buz kadar kayganlaşır ve böcek içindeki sıvıya düşer.'],
        ['🧪 Sindirim', 'Enzimlerin birkaç gün içinde böcekteki tüm azot ve mineralleri emip yeni yapraklara gönderir.']
      ],
      w: 'Nepenthes'
    },
    {
      id: 'yd-sumercimegi', ad: 'Su Mercimeği (En Küçük Çiçek)', ik: '🟢', tur: 'bitki', ll: [39.5, 32.5],
      omur: 'Her 48 saatte bir bölünerek nüfusunu ikiye katlar!',
      beslenme: 'Fotosentez — durgun gölet ve dere yüzeylerinden doğrudan besin emer.',
      zincir: 'Hızlı su üreticisi — ördek, balık ve kurbağaların besinidir; kirli suları doğal olarak temizler.',
      goc: 'Su kuşlarının ayaklarına ve tüylerine yapışarak bir gölden diğerine taşınır.',
      alan: 'Antarktika hariç tüm dünyanın gölet ve durgun suları',
      superguc: 'Wolffia türü yalnızca 0,6 milimetre boyuyla Dünya\'nın EN KÜÇÜK ÇİÇEKLİ BİTKİSİDİR — 25 tanesi tek bir tırnağa sığar!',
      sasirtici: 'Soya fasulyesi kadar yüksek protein içerir ve her 2 günde bir ikiye katlanarak Dünya\'nın en hızlı büyüyen çiçekli bitkisidir; NASA uzay yolculuklarında astronot besini olarak incelemektedir!',
      tehdit: 'Göl kuruması ve aşırı dalgalı sular.',
      dongu: [
        ['💧 Yüzeyde Süzülüş', 'Kökün bile olmadan sakin göl yüzeyinde zümrüt yeşili bir halı oluşturursun.'],
        ['⚡ 48 Saatte Çoğalma', 'Güneşli yaz günlerinde gövdenin yanından yeni kardeşin çıkıp hızla göleti kaplarsınız.'],
        ['❄️ Kış Dalışı', 'Kış gelince nişasta doldurup gölün dibine batar, baharda tekrar yüzeye çıkarsın!']
      ],
      w: 'Duckweed'
    },
    {
      id: 'yd-gul', ad: 'Isparta Yağ Gülü (Rosa damascena)', ik: '🌹', tur: 'bitki', ll: [37.76, 30.55],
      omur: '25 – 35 yıl',
      beslenme: 'Fotosentez — serin yayla geceleri ve güneşli bahar sabahları.',
      zincir: 'Aromatik çalı — dikenleri otçullardan korur, kokusu arıları ve insanları çeker.',
      goc: 'Orta Doğu ve Anadolu\'dan Avrupa\'ya yayıldı; bugün dünya gül yağı üretiminin %65\'i Isparta\'dandır!',
      alan: 'Isparta (Türkiye), Bulgaristan Gül Vadisi ve İran',
      superguc: 'Gecenin serinliğinde taç yapraklarında 300\'den fazla farklı koku molekülü biriktirir.',
      sasirtici: 'Sadece 1 kilogram saf gül yağı elde etmek için yaklaşık 3,5 – 4 TON (1,5 milyondan fazla!) taze gül çiçeğinin güneş yakmadan sabah şafakta elle toplanması gerekir!',
      tehdit: 'Geç ilkbahar donları.',
      dongu: [
        ['🌅 Şafak Kokusu', 'Mayıs-Haziran sabahlarında güneş yükselmeden en yoğun kokunu yayarsın.'],
        ['🌹 Gül Hasadı', 'Çiçeklerin sabah çiyi üstündeyken elle toplanıp bakır imbiklerde buharla damıtılır.'],
        ['❄️ Kış Dinlenmesi', 'Sonbaharda yapraklarını döküp gelecek baharın tomurcuklarını hazırlarsın.']
      ],
      w: 'Rosa × damascena'
    },
    {
      id: 'yd-dut', ad: 'Beyaz Dut Ağacı (İpeğin Sırrı)', ik: '🌿', tur: 'bitki', ll: [30.2, 120.1],
      omur: '100 – 250 yıl',
      beslenme: 'Fotosentez — ılıman ve güneşli topraklarda hızla büyür.',
      zincir: 'İpek böceğinin TEK besini — dut yaprağı olmadan ipek üretilemez!',
      goc: 'Kuzey Çin\'den İpek Yolu boyunca Orta Asya, Bursa (Türkiye) ve Avrupa\'ya yayıldı.',
      alan: 'Çin, Orta Asya, Anadolu (Bursa, Malatya) ve Akdeniz',
      superguc: 'Polenini havaya fırlatırken saniyede 170 metre (ses hızının yarısı!) hıza ulaşarak bitkiler dünyasının en hızlı hareketini yapar!',
      sasirtici: 'İpek böceği tırtılları yalnızca taze dut yaprağı yiyerek büyür — yani binlerce yıl kıtaları birbirine bağlayan İpek Yolu aslında bu ağacın yaprakları sayesinde var oldu!',
      tehdit: 'Yaprak zararlıları ve şehirleşme.',
      dongu: [
        ['⚡ Süpersonik Polen', 'Baharda çiçeklerin polenini bir mancınık gibi ses hızının yarısıyla havaya fırlatır!'],
        ['🐛 İpek Ortaklığı', 'Taze yaprakların ipek böceklerini besler, tatlı meyvelerin kuşlara şölen olur.'],
        ['🌳 Gölge Ağacı', 'Geniş gölgenle yüzyıllarca köy meydanlarına serinlik verirsin.']
      ],
      w: 'Morus alba'
    },
    {
      id: 'yd-kelp', ad: 'Dev Deniz Yosunu (Kelp Ormanı)', ik: '🌊', tur: 'bitki', ll: [36.8, -122.0],
      omur: '5 – 7 yıl',
      beslenme: 'Fotosentez — soğuk ve besince zengin okyanus akıntılarında yaşar.',
      zincir: 'Su altı ormanı mimarı — binlerce balık, fok ve deniz samuruna ev sahipliği yapar.',
      goc: 'Kaliforniya, Patagonya, Güney Afrika ve Avustralya\'nın soğuk kıyılarında dev su altı ormanları kurar.',
      alan: 'Soğuk Pasifik ve Güney Okyanusu kıyıları',
      superguc: 'Günde 60 santimetre uzayarak 45 metre yüksekliğe ulaşan su altı gökdelenleri kurar!',
      sasirtici: 'Gerçek kökü yoktur; kayaya tutunur ve her yaprağının dibinde gaz dolu minik şamandıralar (hava keseleri) sayesinde güneş ışığına doğru dimdik ayakta durur!',
      tehdit: 'Deniz samurlarının azalmasıyla çoğalan deniz kestaneleri ve okyanus sıcak dalgaları.',
      dongu: [
        ['🎈 Doğal Şamandıralar', 'Hava dolu minik keseciklerin seni 45 metre boyunca deniz yüzeyine doğru dik tutar.'],
        ['🦦 Samurla İttifak', 'Deniz samurları seni yiyen kestaneleri avlayarak ormanını korur; sen de onlara uyku yatağı olursun.'],
        ['🌬️ Okyanus Akciğeri', 'Hızla büyürken sudan tonlarca karbondioksit emip oksijen üretirsin.']
      ],
      w: 'Giant kelp'
    },
    {
      id: 'yd-kizilcam', ad: 'Anadolu Kızılçamı', ik: '🌲', tur: 'bitki', ll: [37.0, 28.5],
      omur: '150 – 250 yıl',
      beslenme: 'Fotosentez — sıcak, kurak Akdeniz ve Ege yamaçlarında bile yetişir.',
      zincir: 'Akdeniz orman üreticisi — çam balı üreten basra böceği ve arılarla ünlü ortaklık kurar.',
      goc: 'Doğu Akdeniz\'in yerlisidir; dünyadaki en geniş doğal kızılçam ormanları Türkiye\'dedir.',
      alan: 'Ege, Akdeniz ve Güney Anadolu (Türkiye)',
      superguc: 'Bazı kozalakları yıllarca kapalı kalır ve yalnızca orman yangınının ısısıyla açılıp küllerin üstüne taze tohum saçar!',
      sasirtici: 'Dünya çam balı üretiminin ~%90\'ı Anadolu kızılçam ormanlarından gelir! Kızılçamlar milyonlarca yıldır Akdeniz yangınlarına uyum sağlayarak küllerden kendi kendini yeniden doğurur.',
      tehdit: 'Sıklaşan aşırı sıcaklar ve ardışık orman yangınları.',
      dongu: [
        ['🔥 Ateşten Yeniden Doğuş', 'Yangın sonrası açılan kozalaklarından dökülen tohumlar ilk sonbahar yağmuruyla filizlenir.'],
        ['🍯 Çam Balı Zinciri', 'Gövdendeki minik basra böceği özsuyunu damlatır, arılar bunu toplayıp eşsiz çam balını yapar.'],
        ['☀️ Kuraklığa Meydan Okuma', 'İğne yapraklarınla 40 °C yaz sıcağında su kaybetmeden yeşil kalırsın.']
      ],
      w: 'Pinus brutia'
    },
    {
      id: 'yd-misirBitki', ad: 'Mısır Bitkisi (Zea mays)', ik: '🌽', tur: 'bitki', ll: [17.0, -96.7],
      omur: '1 yıl (tek yıllık)',
      beslenme: 'Fotosentez (C4 süper verimli fotosentez — güneşli sıcakta çok hızlı büyür).',
      zincir: 'Küresel temel besin — insanlar ve çiftlik hayvanları için dünyanın en çok üretilen tahılıdır.',
      goc: '9.000 yıl önce Meksika\'da küçücük "teosinte" otundan evcilleştirildi; 16. yüzyılda Osmanlı\'ya Mısır üzerinden girip tüm dünyaya yayıldı.',
      alan: 'Anavatanı Meksika; bugün tüm dünya',
      superguc: 'Her bir mısır püskülü telinin ucunda TEK BİR mısır tanesi büyür — koçanda kaç tane varsa o kadar püskül teli vardır!',
      sasirtici: 'İnsanlar tarafından o kadar değiştirilmiştir ki kalın kabuğu yüzünden doğada kendi başına tohumunu döküp çoğalamaz — artık insan olmadan yaşayamayan bir bitkidir ve her koçandaki sıra sayısı neredeyse her zaman ÇİFT sayıdır!',
      tehdit: 'Kuraklık ve mısır kurdu.',
      dongu: [
        ['🌱 Hızlı Yükseliş', 'C4 fotosentez motorunla yaz güneşinde haftalar içinde 2,5 metre boya ulaşırsın.'],
        ['🌽 Püskül ve Polen', 'Tependeki püskülden dökülen polenler her bir ipeksi tele değip tek tek mısır tanesini oluşturur.'],
        ['🌍 Küresel Yolculuk', 'Meksika\'dan çıkıp bugün patlamış mısırdan ekmeğe her kıtanın sofrasındasın.']
      ],
      w: 'Maize'
    },
    {
      id: 'yd-patatesBitki', ad: 'Patates Bitkisi', ik: '🥔', tur: 'bitki', ll: [-15.8, -70.0],
      omur: '1 yıl (yumrusuyla yeniden filizlenir)',
      beslenme: 'Fotosentez — ürettiği nişastayı yeraltındaki yumrularda depolar.',
      zincir: 'Yüksek dağ üreticisi — insanlığın en verimli kalori kaynaklarından biridir.',
      goc: '8.000 yıl önce Peru/Bolivya And Dağları\'nda evcilleştirildi; 16. yüzyılda Avrupa\'ya gelip kıtlıkları bitirdi.',
      alan: 'Anavatanı Peru/Bolivya (Titicaca çevresi); bugün tüm dünya',
      superguc: 'Diğer tahılların yetişemediği soğuk, taşlık ve 4.000 m yüksek dağlarda bile bol ürün verir!',
      sasirtici: '1995\'te Columbia uzay mekiğinde yetiştirilerek UZAYDA YETİŞEN İLK SEBZE oldu! Ayrıca Peru\'da sarı, mor, kırmızı ve mavi renklerde 4.000\'den fazla farklı yerli patates çeşidi vardır.',
      tehdit: 'Patates mildiyösü (1845 İrlanda Kıtlığı\'na yol açan mantar).',
      dongu: [
        ['🌱 Gözden Filizlenme', 'Toprağa ekilen bir patatesin üzerindeki "göz"lerden hızla yeşil sürgünler çıkar.'],
        ['🥔 Yeraltı Hazinesi', 'Yaprakların güneş enerjisini nişastaya çevirip toprağın altında şişkin yumrulara doldurur.'],
        ['🚀 Uzaya Kadar', 'And Dağları\'nın 4.000 metresinden yörüngeye kadar insanlığın yol arkadaşı oldun.']
      ],
      w: 'Potato'
    },
    {
      id: 'yd-biberBitki', ad: 'Acı Biber (Kapsaisin Sırrı)', ik: '🌶️', tur: 'bitki', ll: [19.0, -98.2],
      omur: '1 – 5 yıl',
      beslenme: 'Fotosentez — sıcak güneşli iklimleri sever.',
      zincir: 'Akıllı tohum dağıtıcı — memelileri acıyla uzak tutarken kuşlara lezzetli meyve sunar.',
      goc: '8.000 yıl önce Meksika ve Bolivya\'dan çıktı; 16. yüzyılda Portekiz ve Osmanlı ticaretiyle Hindistan, Kore ve Anadolu\'ya yayıldı.',
      alan: 'Anavatanı Orta/Güney Amerika; bugün tüm dünya',
      superguc: 'Acılığını veren kapsaisin maddesi memelilerin dilindeki "sıcaklık/yanma" reseptörlerini kandırıp ateş değmiş hissi verir!',
      sasirtici: 'Acı biber neden acıdır? Memeliler tohumlarını dişleriyle ezip yok ettiği için onları kaçırmak ister; KUŞLARDA İSE ACI RESEPTÖRÜ YOKTUR — kuşlar acıyı hiç hissetmeden biberi yiyip tohumlarını kilometrelerce uzağa taşır!',
      tehdit: 'Don ve yaprak bitleri.',
      dongu: [
        ['🌼 Beyaz Çiçek', 'Sıcak yaz günlerinde küçük beyaz çiçeklerin meyveye dönüşür.'],
        ['🔥 Acı Savunma', 'Tohumlarının etrafını kapsaisinle kaplayıp kemirgenleri uzaklaştırırsın.'],
        ['🐦 Kuş Kuryesi', 'Parlak kırmızı renginle kuşları çekip tohumlarını yeni topraklara uçurursun.']
      ],
      w: 'Chili pepper'
    },
    {
      id: 'yd-keten', ad: 'Keten Bitkisi (Mavi Çiçekli Lif)', ik: '🩵', tur: 'bitki', ll: [36.0, 38.0],
      omur: '1 yıl (tek yıllık)',
      beslenme: 'Fotosentez — serin ve nemli bahar toprağı.',
      zincir: 'Kadim lif ve tohum bitkisi — insanlığın ilk dokuma kumaşlarını verdi.',
      goc: '10.000 yıl önce Bereketli Hilal\'de evcilleştirildi; Antik Mısır\'dan Avrupa\'ya yayıldı.',
      alan: 'Bereketli Hilal, Mısır, Avrupa ve Kuzey Amerika',
      superguc: 'Gövdesindeki uzun lifler ıslandığında daha da güçlenir ve yaz sıcağında serin tutan kumaşa dönüşür.',
      sasirtici: 'Gürcistan\'daki bir mağarada 30.000 yıllık boyalı keten lifleri bulundu — yani keten insanlığın kullandığı bilinen EN ESKİ TEKSTİL LİFİDİR! Ayrıca mavi çiçekleri her sabah açıp öğlen dökülür.',
      tehdit: 'Aşırı kuraklık.',
      dongu: [
        ['🩵 Sabah Mavisi', 'Sabah gün doğarken tarla masmavi çiçeklerle kaplanır; öğleden sonra taç yapraklar rüzgârla dökülür.'],
        ['🧵 Altın Lifler', 'Gövdenin içindeki ipeksi lifler eğrilip keten kumaşa, tohumların ise omega-3 zengini yağa dönüşür.'],
        ['🏺 30.000 Yıllık Miras', 'Firavun mumyalarının sargısından gemi yelkenlerine kadar tarihe dokundun.']
      ],
      w: 'Flax'
    }
  );
})();

// 🤰 Gebelik, kuluçka ve üreme süreci bilgileri (tüm hayvan, bitki ve mikro canlılar için)
(() => {
  const YD = window.YASAM_DOGA;
  if (!YD) return;
  const UREME = {
    'yd-fil': '22 ay gebelik (karadaki en uzun hamilelik!) · Tek yavru 100 kg doğar ve 20 dakika içinde ayağa kalkar.',
    'yd-mavibalina': '11 – 12 ay gebelik · Yavru 7 metre ve 2,5 ton doğar; anne sütüyle günde 90 kg kilo alır!',
    'yd-zurafa': '15 ay gebelik · Anne ayakta doğum yapar; yavru 1,8 m boyunda dünyaya düşer ve 1 saatte koşmaya başlar.',
    'yd-aslan': '110 gün (~3,5 ay) gebelik · 2 – 4 kör yavru doğar; sürüdeki tüm dişiler yavruları ortak emzirir.',
    'yd-cita': '90 – 95 gün gebelik · 3 – 5 yavru doğar; sırtlarında bal porsuğuna benzeyen gümüşi kamuflaj yelesi vardır.',
    'yd-kurt': '63 gün gebelik · 4 – 6 yavru yeraltı ininde doğar; tüm sürü yavrulara yemek taşır.',
    'yd-kutupayisi': '8 ay gebelik (döllenme gecikmeli) · Kışın kar mağarasında sadece 600 gr doğan 1 – 2 yavru baharda dışarı çıkar.',
    'yd-panda': '95 – 160 gün gebelik · Yavru yalnızca 100 gr (bir tereyağı paketi kadar — annenin 900\'de 1\'i!) doğar.',
    'yd-koala': '35 gün gebelik · Fasulye tanesi kadar (0,5 gr) kör doğar, kendi başına annenin kesesine tırmanıp 6 ay orada büyür.',
    'yd-penguen': 'Tek yumurta · Baba penguen -60 °C\'de 65 gün boyunca yumurtayı ayaklarının üstünde yemek yemeden ısıtır!',
    'yd-denizati': 'Baba hamile kalır! Anne yumurtaları babanın kesesine bırakır; baba 2 – 4 hafta sonra 100 – 1.000 yavru doğurur.',
    'yd-ahtapot': '50.000 – 100.000 yumurta · Anne yumurtaları 6 – 10 ay (bazen 4 yıl!) yemeden havalandırıp korur, yavrular çıkınca ölür.',
    'yd-gronlandkopek': '8 – 18 yıl tahmini gebelik (omurgalılar rekoru!) · 150 yaşında erişkinliğe ulaşır ve canlı yavru doğurur.',
    'yd-ari': 'Kraliçe arı günde 1.500 – 2.000 yumurta bırakır; yumurta 21 günde yetişkin işçi arıya dönüşür.',
    'yd-ornitorenk': 'Yumurtlayan nadir memeli! 1 – 3 yumurta 10 günde çatlar; yavrular annenin derisinden sızan sütü yalar.',
    'yd-suaygiri': '8 ay gebelik · Su altında doğum yapar; yavru doğar doğmaz yüzeye çıkıp ilk nefesini alır!',
    'yd-yunus': '12 ay gebelik · Yavru boğulmasın diye kuyruğu önde doğar; anne hemen yüzeye itip nefes aldırır.',
    'yd-denizkaplumbaga': 'Kumsala 100 yumurta gömer · 60 günde çatlar; yavrunun cinsiyetini kumun sıcaklığı belirler!',
    'yd-karleopari': '93 – 100 gün gebelik · 2 – 3 yavru yüksek kaya mağaralarında doğar ve 2 yıl anneyle kalır.',
    'yd-kartal': '45 gün kuluçka · 1 – 2 yumurta; yavrular 70 gün sonra ilk kez uçurumdan süzülür.',
    'yd-kaplumbaga': '4 – 8 ay kuluçka · Toprak çukura 2 – 16 yumurta bırakır; yavrular yumurtadan çıkınca tamamen bağımsızdır.',
    'yd-komodo': '7 – 8 ay kuluçka · 20 yumurta; erkek olmadan da (partenogenez) kendi başına yavru üretebilir!',
    'yd-albatros': '75 – 80 gün kuluçka · İki yılda tek bir yumurta; anne-baba yavruya 9 ay boyunca okyanustan yemek taşır.',
    'yd-mamut': 'Yaklaşık 22 ay gebelik · Tıpkı bugünkü filler gibi uzun süre anne sütü ve sürü korumasıyla büyürdü.',
    'yd-smilodon': 'Yaklaşık 3,5 – 4 ay gebelik · Yavruların dev kılıç dişleri 1,5 yaşından sonra tam uzardı.',
    'yd-tilasin': '35 gün gebelik · Hem anne hem babada kese vardı; 3 – 4 minik yavru kesede 3 ay büyürdü.',
    'yd-kralkelebek': 'Yumurta (4 gün) → Tırtıl (14 gün) → Krizalis koza (10 gün) → Kelebek! Göçmen nesil 8 – 9 ay yaşar.',
    'yd-sumru': '21 – 24 gün kuluçka · Kuzey Kutbu kıyısında 1 – 3 yumurta; anne-baba yuvaya yaklaşan herkese saldırır.',
    'yd-denizanasi': 'Eşeyli ve eşeysiz üreme · Stres altında yetişkinlikten bebek polip aşamasına geri dönebilir!',
    'yd-tardigrad': '1 – 30 yumurta · 14 günde yetişkin boyutunun minyatürü olarak yumurtadan çıkar.',
    'yd-kunduz': '105 gün gebelik · 2 – 4 yavru gözleri açık ve kürkü tam doğar; 24 saat içinde yüzebilir!',
    'yd-atesbocegi': 'Yumurta → 1 – 2 yıl toprakta parlayan larva → 2 – 4 hafta uçan yetişkin (eşini ışık koduyla bulur).',
    'yd-bukalemun': '20 – 80 yumurta toprağa gömülür (4 – 12 ay kuluçka); bazı türler doğrudan canlı yavru doğurur.',
    'yd-peygamberdevesi': 'Köpük kese (ooteka) içine 100 – 400 yumurta bırakır; baharda hepsi aynı anda çıkar.',
    'yd-karinca': 'Kraliçe tek bir çiftleşme uçuşundan sonra 15 yıl boyunca milyonlarca işçi karınca yumurtlar.',
    'yd-yusufcuk': 'Suya bırakılan yumurta 1 – 5 yıl su altı larvası kalır, ardından göğe kanatlanır.',
    'yd-akbaba': '55 gün kuluçka · Yılda tek yumurta; anne-baba 4 ay boyunca sırayla besler.',
    'yd-somon': 'Doğduğu nehir çakılına 2.000 – 5.000 yumurta bırakır; çoğu Pasifik somonu üredikten sonra ölür.',
    'yd-sinekkusu': '14 – 16 gün kuluçka · Ceviz kabuğu kadar yuvada 2 bezelye büyüklüğünde yumurta.',
    'yd-mavihalkali': '50 – 100 yumurta · Anne 6 ay yemeden korur ve yavrular çıkınca ölür.',
    'yd-mantiskaridesi': 'Yumurtaları yapışkan bir top hâlinde ön ayaklarında taşır ve sürekli temizler.',
    'yd-aksolotl': '100 – 1.000 jelatinli yumurta · 2 haftada çıkar ve ömür boyu su altında "genç" formda kalır.',
    'yd-narval': '14 – 15 ay gebelik · 1,6 m boyunda tek yavru doğar ve 20 ay anne sütüyle beslenir.',
    'yd-tembelhayvan': '6 ay gebelik · Anne dala baş aşağı asılı hâlde doğum yapar; yavru 6 ay annenin karnına sarılır!',
    'yd-flamingo': '28 – 30 gün kuluçka · Çamur tepeciğinde tek yumurta; anne ve baba yavruyu "kursak sütü" ile besler.',
    'yd-baykus': '30 gün kuluçka · 4 – 7 yumurta; yavrular farklı günlerde çıktığı için büyükten küçüğe sıralanır.',
    'yd-pangolin': '4 – 5 ay gebelik · Yumuşak pullu tek yavru doğar; pullar 2 günde sertleşir, yavru annenin kuyruğunda taşınır.',
    'yd-mirket': '70 gün gebelik · 2 – 5 yavru yeraltı tünelinde doğar; tüm koloni bakıcılık yapar.',
    'yd-kutuptilkisi': '52 gün gebelik · Av bolsa tek seferde 10 – 14 yavruya kadar (etçiller rekoru!) doğurabilir.',
    'yd-denizsamuru': '6 – 8 ay gebelik · Suda doğum yapar; yavru batmayacak kadar kabarık kürkle doğar ve annenin göğsünde uyur.',
    'yd-devmurekkep': 'Milyonlarca minik yumurta derin okyanusa bırakılır; yavrular hızla büyüyüp birkaç yılda devleşir.',
    'yd-balporsugu': '6 – 8 hafta gebelik · 1 – 2 yavru yeraltı ininde doğar ve 1 yıl anneden hayatta kalma dersi alır.',
    'yd-kivikusu': '75 – 85 gün kuluçka (kuşlar arasında en uzunlardan!) · Dev yumurtaya genellikle baba yatar.',
    'yd-gergedanbocegi': 'Yumurta → 1 – 2 yıl çürük odun larvası → 1 ay pupa → yetişkin zırhlı böcek.',
    'yd-mantavatoz': '12 ay gebelik · Yavru annenin karnında kanatları rulo gibi sarılı büyür ve 1,5 m kanat açıklığıyla doğar!',
    'yd-okapi': '14 – 15 ay gebelik · Tek yavru doğar; avcılar kokusunu almasın diye ilk 1 – 2 ay dışkılamaz!',
    'yd-leylek': '33 – 34 gün kuluçka · 3 – 5 yumurta; anne ve baba 2 ay boyunca yavrulara sürekli su ve yiyecek taşır.',
    'yd-yarasa': '5 – 6 ay gebelik · Tek yavru doğar; ilk haftalarda anne gece uçarken yavru göğsüne sımsıkı tutunur.'
  };
  for (const h of YD.hayvanlar) if (!h.ureme && UREME[h.id]) h.ureme = UREME[h.id];
  for (const b of YD.bitkiler) if (!b.ureme) b.ureme = 'Tohum, polen, spor veya kök sürgünüyle çoğalır; rüzgâr, su, arılar veya hayvanlar yeni nesli uzaklara taşır.';
  for (const m of (YD.mikroplar || [])) if (!m.ureme) m.ureme = 'Hızlı hücre bölünmesi, tomurcuklanma, spor veya konak hücre kopyalamasıyla saatler içinde milyonlarca yeni nesil oluşturur.';
})();
