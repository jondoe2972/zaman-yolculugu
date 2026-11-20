// "Yaşa" için güç sahibi roller: hükümdarlar, komutanlar, subaylar, devlet başkanları.
// bolge: hangi bölgede; from/to: hangi yıllarda seçilebilir (MÖ pozitif, MS negatif).
// tema: çizim ortamı (misir, anadolu, avrupa); giyim: antik, cubbe, modern; tac: başlık (pskent, kavuk, tac, migfer, yok).
// Metinlerde {tarih}, {hukumdar}, {baskent} seçili yıla göre doldurulur.
'use strict';
window.ROLLER = [
  // ---------------- Mısır ----------------
  { id: 'firavun', ad: 'Firavun', ikon: '👑', bolge: 'misir', from: 3100, to: 30, tema: 'misir', giyim: 'antik', tac: 'pskent', guc: true,
    kim: 'Yukarı ve Aşağı Mısır\'ın kralı, tanrı Horus\'un yeryüzündeki biçimisin.',
    adimlar: [
      { saat: 'Şafak', sahne: 'saray', metin: 'Rahipler seni şafakta uyandırır: güneş tanrısı Ra doğarken sen de onun oğlu olarak yeniden "doğarsın". Yıkanır, en ince keteni giyer, boynuna altın gerdanlığı takarsın. Başında iki ülkenin birleşik tacı var.' },
      { saat: 'Sabah', sahne: 'tapinak', metin: 'Tapınakta tanrıya günlük sunuyu yaparsın. Kâğıt üzerinde ülkedeki bütün tapınakların başrahibi sensin. En önemli görevin Maat\'ı, yani evrenin düzenini korumak; Nil iyi taşmazsa suçlu sen sayılırsın.' },
      { saat: 'Öğle', sahne: 'divan', metin: 'Vezirin raporlarını sunar: Nil\'in yüksekliği, ambarlardaki tahıl, sınırdan gelen haberler. Valilerin dileklerini dinler, mezarının ve tapınakların planlarına bakarsın. Sözün kanundur.' },
      { saat: 'İkindi', sahne: 'savas', metin: 'Savaş arabanla çölde ava çıkarsın: aslan, yaban öküzü, ceylan. Av, firavunun kaosu yendiğinin simgesiydi; III. Amenhotep avladığı aslanları özel bir anma yazıtıyla duyurdu.' },
      { saat: 'Akşam', sahne: 'saray', metin: 'Sarayda ziyafet: arp ve lavta çalan müzisyenler, dansçılar, şarap, kızarmış kaz. Ama güvende değilsin: saray entrikaları gerçekti. III. Ramses bir harem komplosunda öldürüldü.' }
    ],
    his: 'Ülkenin tek sahibi ve tanrıların temsilcisisin; ama her şey sana bağlı olduğu için bir kıtlık ya da yenilgi senin başarısızlığın sayılır. Tahta çıktığın gün mezarının yapımına başlandı: hayatın biraz da sonsuzluğa hazırlıktır.',
    gercekler: ['Firavunların çoğu 10-20 yıl hüküm sürdü; II. Ramses 66 yıl tahtta kaldı.', 'III. Ramses\'in mumyası 2012\'de tomografiyle incelendi: boğazında ölümcül bir kesik bulundu.', 'Firavunlar kraliyet soyunu korumak için sık sık kız kardeşleri ya da üvey kardeşleriyle evlendi.'] },
  { id: 'vezir', ad: 'Vezir', ikon: '📜', bolge: 'misir', from: 2650, to: 30, tema: 'misir', giyim: 'antik', tac: 'yok', guc: true,
    kim: 'Firavundan sonra ülkenin en güçlü insanısın: başbakan, baş yargıç ve hazine bekçisi bir arada.',
    adimlar: [
      { saat: 'Şafak', sahne: 'saray', metin: 'Her sabah firavuna "ülkenin işleri yolundadır" raporunu verirsin; hazinedar da sana kapıların mühürlerinin sağlam olduğunu bildirir. Vezir Rehmire\'nin mezarındaki yazılar bu günlük düzeni anlatır.' },
      { saat: 'Sabah', sahne: 'divan', metin: 'Mahkemede oturursun; önünde kırk yasa tomarı serilidir. Tarla sınırı kavgaları, miras davaları, vergi şikâyetleri. Rehmire\'ye verilen öğüt: "Tanıdığına da tanımadığına da aynı gözle bak."' },
      { saat: 'Öğle', sahne: 'katip', metin: 'Kâtiplerin hesaplarını denetlersin: tahıl ambarları, Nil\'in ölçülen yüksekliği, eyaletlerden gelen vergiler. Ülke dev bir kayıt makinesi gibi işler.' },
      { saat: 'İkindi', sahne: 'santiye', metin: 'Firavunun mezarının yapımı da senin sorumluluğunda. İşçilerin ücreti (tahıl ve bira) gecikirse iş durur: MÖ 1157 civarında Deir el-Medine işçileri bilinen ilk grevi yaptı.' },
      { saat: 'Akşam', sahne: 'ev', metin: 'Bahçesinde havuz olan konağına dönersin: hizmetkârlar, müzisyenler, misafirler. Ama tek bir büyük hata firavunun gözünden düşmene yeter.' }
    ],
    his: 'Gerçek gücü elinde tutan sensin ama hep firavunun gölgesindesin. Ülkenin her derdi masana gelir; yorucu, saygın ve tehlikeli bir hayat.',
    gercekler: ['Bazı vezirler sonunda firavun oldu: XII. Hanedan\'ın kurucusu I. Amenemhat\'ın önceki firavunun veziri olduğu düşünülür.', 'Yeni Krallık\'ta biri Yukarı, biri Aşağı Mısır için iki vezir vardı.', 'Vezir Rehmire\'nin Teb\'deki mezarı, vezirin görevlerini anlatan en ayrıntılı kaynaktır.'] },
  { id: 'general-misir', ad: 'Ordu komutanı', ikon: '⚔️', bolge: 'misir', from: 1550, to: 1070, tema: 'misir', giyim: 'antik', tac: 'yok', guc: true,
    kim: 'Yeni Krallık\'ın profesyonel ordusunda savaş arabası birliklerinin komutanısın.',
    adimlar: [
      { saat: 'Şafak', sahne: 'kamp', metin: 'Ordu Kenan\'a doğru yürüyor. Çadırında uyanıp keşif kollarını dinliyorsun: düşman nerede, su kuyuları nerede, yol kaç gün sürecek?' },
      { saat: 'Sabah', sahne: 'talim', metin: 'Savaş arabalarını denetliyorsun: her arabada bir sürücü ve bir okçu var. Mızraklı piyadeler, Nubyalı okçular ve paralı Şerden askerleri düzene giriyor.' },
      { saat: 'Öğle', sahne: 'karargah', metin: 'Firavunla savaş planı yapıyorsun. Kadeş\'te (MÖ 1274) yakalanan iki casusun yalanına inanmak orduyu neredeyse felakete sürükledi; bu yüzden her bilgiyi iki kez kontrol edersin.' },
      { saat: 'İkindi', sahne: 'savas', metin: 'Savaş başlar: önce ok yağmuru, sonra savaş arabalarının hücumu. Bitince kâtipler düşmandan kesilen elleri sayarak kimin ne kadar ödül alacağını kaydeder.' },
      { saat: 'Akşam', sahne: 'kamp', metin: 'Ganimet ve esirler kayda geçiyor. Başarılı komutanlar "yiğitlik altını" nişanı, toprak ve hizmetkâr alırdı. General Horemheb sonunda firavun bile oldu.' }
    ],
    his: 'Zafer kazanırsan şan, toprak ve altın senin; yenilirsen firavunun öfkesi. Ömrünün yarısı yollarda ve çadırlarda geçer.',
    gercekler: ['Mısır\'ın daimi, profesyonel ordusu Yeni Krallık\'ta kuruldu.', 'Ordu komutanı Horemheb MÖ 1319 civarında firavun oldu.', 'Kadeş\'ten sonra Mısır ile Hititler arasında yapılan antlaşma, metni bugüne ulaşan en eski barış antlaşmasıdır.'] },

  // ---------------- Anadolu ----------------
  { id: 'hitit-krali', ad: 'Hitit kralı', ikon: '👑', bolge: 'anadolu', from: 1650, to: 1180, tema: 'anadolu', giyim: 'antik', tac: 'tac', guc: true,
    kim: 'Hattuşa\'da oturan "Büyük Kral"sın; Mısır firavunu ve Babil kralıyla eşitsin.',
    adimlar: [
      { saat: 'Şafak', sahne: 'tapinak', metin: 'Fırtına Tanrısı\'na ve Arinna\'nın Güneş Tanrıçası\'na dua edersin. Hitit kralı aynı zamanda baş rahiptir: yılın büyük kısmını bayramlar için şehir şehir dolaşarak geçirirsin.' },
      { saat: 'Sabah', sahne: 'divan', metin: 'Soylular meclisi (pankuş) toplanıyor. Kral Telipinu\'nun fermanı tahtın kime geçeceğini kurala bağladı; yine de taht kavgaları eksik olmaz.' },
      { saat: 'Öğle', sahne: 'katip', metin: 'Kâtipler Mısır firavununa yazdığın mektubu çivi yazısıyla kil tablete geçiriyor. Büyük krallar birbirine "kardeşim" diye hitap eder ve hediyeler gönderir: at, gümüş, demir hançer.' },
      { saat: 'İkindi', sahne: 'talim', metin: 'Savaş arabalarını denetlersin: Hitit arabası üç kişiliktir; sürücü, mızrakçı ve kalkancı. Bu ağır arabalar ordunun yumruğudur.' },
      { saat: 'Akşam', sahne: 'saray', metin: 'Kraliçe de devlet işlerinde söz sahibidir: Kraliçe Puduhepa kendi mührüyle yabancı krallara mektup yazar, davalara bakardı.' }
    ],
    his: 'Dağlarla çevrili, kışı sert bir ülkenin kralısın; düşmanlar her yanda. Gücün, savaş arabalarına ve tanrıların gönlünü hoş tutmana bağlı.',
    gercekler: ['Hattuşa\'da 30.000\'den fazla kil tablet bulundu.', 'Kadeş Antlaşması\'nın Hitit kopyası bugün İstanbul Arkeoloji Müzesi\'nde.', 'Hititçe, yazılı belgesi bulunan en eski Hint-Avrupa dilidir.'] },
  { id: 'bizans-imparatoru', ad: 'Bizans imparatoru', ikon: '👑', bolge: 'anadolu', from: -330, to: -1453, tema: 'anadolu', giyim: 'cubbe', tac: 'tac', guc: true,
    kim: 'Konstantinopolis\'te, "Romalıların imparatoru" olarak tahttasın.',
    adimlar: [
      { saat: 'Şafak', sahne: 'tapinak', metin: 'Gün ayinle başlar. İmparator Tanrı\'nın yeryüzündeki temsilcisi sayılır; patrik seni Ayasofya\'da taçlandırdı.' },
      { saat: 'Sabah', sahne: 'saray', metin: 'Büyük Saray\'da elçileri kabul edersin. Tahtın mekanik aslanlarla kükreyip yükseldiği anlatılır; yabancıları etkilemek için her şey tasarlanmıştır.' },
      { saat: 'Öğle', sahne: 'divan', metin: 'Saray görevlileri vergi, ordu ve kilise işlerini sunar. Bizans diplomasisi ünlüdür: savaşmak yerine düşmanları birbirine düşürmek, altınla barış satın almak.' },
      { saat: 'İkindi', sahne: 'toren', metin: 'Hipodrom\'da araba yarışları: Maviler ve Yeşiller taraftarları. Bu taraftar grupları siyasi güçtür; 532\'deki Nika isyanında neredeyse tahtı kaybettirdiler.' },
      { saat: 'Akşam', sahne: 'saray', metin: 'Sarayda entrika eksik olmaz: imparatorların önemli bir kısmı darbeyle tahttan indirildi, bazılarının gözleri kör edildi.' }
    ],
    his: 'Bin yıllık bir imparatorluğun mirasçısısın; ihtişam büyük, tehlike daha büyük. Surların dışında düşmanlar, içinde rakipler.',
    gercekler: ['Bizans 1123 yıl sürdü (330-1453).', 'İmparator Justinianus Ayasofya\'yı 5 yılda yaptırdı (532-537).', 'Rum ateşi, suyla bile söndürülemeyen gizli bir silahtı; formülü bugün hâlâ bilinmiyor.'] },
  { id: 'padisah', ad: 'Osmanlı padişahı', ikon: '👑', bolge: 'anadolu', from: -1453, to: -1922, tema: 'anadolu', giyim: 'cubbe', tac: 'kavuk', guc: true,
    kim: 'Üç kıtaya yayılan bir imparatorluğun padişahısın; sarayın Topkapı\'da.',
    adimlar: [
      { saat: 'Şafak', sahne: 'saray', metin: 'Topkapı Sarayı\'nda sabah namazıyla uyanırsın. Has Oda\'nın görevlileri seni giydirir; başında beyaz, iri kavuk ve sorguç.' },
      { saat: 'Sabah', sahne: 'divan', metin: 'Divan-ı Hümayun toplanıyor: sadrazam, kazaskerler, defterdarlar, nişancı. Fatih\'ten sonra padişahlar toplantıya çoğu zaman katılmaz, kafesli bir pencerenin arkasından dinler; vezirler senin orada olup olmadığını bilemez.' },
      { saat: 'Öğle', sahne: 'toren', metin: 'Cuma selamlığı: atınla camiye gidersin, halk yol boyunca dizilir, bazıları dilekçe uzatır. Padişahı görmek halk için büyük olaydır.' },
      { saat: 'İkindi', sahne: 'karargah', metin: 'Sefer hazırlığı: yeniçeriler, sipahiler, top arabaları, erzak. Kanuni Sultan Süleyman 13 sefere bizzat katıldı ve sonuncusunda, Zigetvar kuşatmasında çadırında öldü.' },
      { saat: 'Akşam', sahne: 'saray', metin: 'Harem\'de günün sonu. Valide sultan sarayın en güçlü kadınıdır; 17. yüzyılda bazı valide sultanlar devleti fiilen yönetti.' }
    ],
    his: 'Gücün sınırsız görünür ama sarayın duvarları arasında yaşarsın. Kardeşlerin rakibin, yeniçeriler hem gücün hem tehlikendir: birkaç padişah onların isyanıyla tahttan indirildi.',
    gercekler: ['36 padişah 623 yıl hüküm sürdü.', 'Kanuni Sultan Süleyman 46 yıl tahtta kaldı (1520-1566).', 'Fatih\'in kanunnamesi tahta çıkanın kardeşlerini öldürmesine izin veriyordu; 17. yüzyılda yerini şehzadelerin sarayda kapalı yaşadığı "kafes" usulü aldı.'] },
  { id: 'yeniceri', ad: 'Yeniçeri subayı (çorbacı)', ikon: '⚔️', bolge: 'anadolu', from: -1380, to: -1826, tema: 'anadolu', giyim: 'cubbe', tac: 'kavuk', guc: true,
    kim: 'Yeniçeri ocağında bir ortanın (bölüğün) komutanı, çorbacısın.',
    adimlar: [
      { saat: 'Şafak', sahne: 'kamp', metin: 'İstanbul\'daki kışlada uyanırsın. Ocağın rütbe adları mutfaktan gelir: çorbacı, aşçıbaşı, karakullukçu. Ortanın simgesi de bir kazandır.' },
      { saat: 'Sabah', sahne: 'talim', metin: 'Tüfek ve ok talimi. Yeniçeriler Avrupa\'da ateşli silahı düzenli olarak kullanan ilk piyade birliklerindendi; disiplinleri ve maaşlı oluşlarıyla ünlüydüler.' },
      { saat: 'Öğle', sahne: 'pazar', metin: 'Üç ayda bir ulufe (maaş) dağıtılır. Askerlere padişah adına pilav verilir; pilavı reddetmek ya da kazanı devirmek isyan işaretidir.' },
      { saat: 'İkindi', sahne: 'yuruyus', metin: 'Seferde ordu mehter takımıyla yürür. Yeniçeriler padişahın çadırının çevresinde savaşır, savaşın sonucunu çoğu zaman onlar belirler.' },
      { saat: 'Akşam', sahne: 'kamp', metin: 'Yeniçerilerin evlenmesi uzun süre yasaktı; 16. yüzyıl sonunda kurallar gevşedi, birçoğu esnaflık yapmaya başladı. 1826\'da II. Mahmud ocağı kaldırdı.' }
    ],
    his: 'Seçkin bir birliğin subayısın; sefer zaferle biterse ödül ve şan, yenilgiyle biterse ocakta öfke. Ocağın gücü öyle büyük ki padişahlar bile sizden çekinir.',
    gercekler: ['Ocağa asker ilk yüzyıllarda devşirme usulüyle, Balkanlar\'daki Hristiyan köylerden alınan çocuklardan toplandı.', 'Mehter takımı dünyanın en eski askerî bandolarından biri sayılır.', 'Ocak 1826\'daki Vaka-i Hayriye ile kaldırıldı.'] },
  { id: 'cumhurbaskani', ad: 'Cumhurbaşkanı', ikon: '🏛️', bolge: 'anadolu', from: -1923, to: -2026, tema: 'anadolu', giyim: 'modern', tac: 'yok', guc: true,
    kim: 'Türkiye Cumhuriyeti\'nin cumhurbaşkanısın; makamın Ankara\'da.',
    adimlar: [
      { saat: 'Sabah', sahne: 'ofis', metin: 'Güne basın özetiyle ve güvenlik brifingiyle başlarsın. Masanda imzanı bekleyen yasalar, atama kararnameleri ve yurt dışından gelen mektuplar var.' },
      { saat: 'Öğle', sahne: 'divan', metin: 'Bakanlarla toplantı. 1923-2018 arasında hükümeti başbakan yönetir, cumhurbaşkanı devletin başı olarak tarafsız dururdu; 2018\'den sonra yürütme doğrudan cumhurbaşkanına geçti.' },
      { saat: 'İkindi', sahne: 'toren', metin: 'Yabancı bir devlet başkanını resmî törenle karşılarsın: askerî bando, iki ülkenin marşları, tören kıtasını denetleme.' },
      { saat: 'Akşam', sahne: 'ofis', metin: 'Günün son görüşmeleri; ertesi gün bir yurt gezisi var. Seçimlerle gelir, seçimlerle gidersin: görev süren anayasayla sınırlıdır.' }
    ],
    his: 'Bir ülkenin geleceği masanda. Her kararın milyonlarca insanı etkiler ve her sözün dünya basınında okunur.',
    gercekler: ['Türkiye\'nin ilk cumhurbaşkanı Mustafa Kemal Atatürk\'tür (1923-1938).', 'Cumhurbaşkanı 2014\'ten beri doğrudan halk tarafından seçiliyor; önceden Meclis seçerdi.', '2018\'de cumhurbaşkanlığı hükümet sistemine geçildi ve başbakanlık kaldırıldı.'] },

  // ---------------- Avrupa ----------------
  { id: 'centurio', ad: 'Roma lejyon subayı (centurio)', ikon: '⚔️', bolge: 'avrupa', from: 200, to: -400, tema: 'avrupa', giyim: 'antik', tac: 'migfer', guc: true,
    kim: 'Bir Roma lejyonunda 80 kişilik bir birliğin komutanı, centuriosun.',
    adimlar: [
      { saat: 'Şafak', sahne: 'kamp', metin: 'Lejyon her akşam hendek ve çitle çevrili bir kamp kurar, her sabah söker. Borazan çalar; askerlerini sayar, günün parolasını alırsın.' },
      { saat: 'Sabah', sahne: 'yuruyus', metin: 'Yürüyüş: her asker 30 kilo kadar yük taşır, günde yaklaşık 30 km yol alınır. Roma\'nın taş yolları orduların hızlı hareket etmesi için yapıldı.' },
      { saat: 'Öğle', sahne: 'talim', metin: 'Talim: kalkanları birleştirip kaplumbağa (testudo) düzeni, mızrak atışı, kısa kılıçla dövüş. Elindeki asma dalından değnek rütbenin işaretidir; tembel askeri onunla cezalandırırsın.' },
      { saat: 'İkindi', sahne: 'savas', metin: 'Savaşta en önde sen durursun; centurioların ölüm oranı yüksekti. Cesaretin askerlerine örnek olmalı.' },
      { saat: 'Akşam', sahne: 'kamp', metin: 'Akşam yemeği: buğday lapası, ekmek, ekşi şarap (posca). Emekliliğinde sana toprak ya da yüklü bir ikramiye verilecek.' }
    ],
    his: 'Sert, disiplinli ve saygın bir hayat. Roma\'nın gücü senin gibi tecrübeli subayların omuzlarındadır.',
    gercekler: ['Bir lejyonda yaklaşık 5000 asker vardı.', 'Askerlik süresi Augustus\'tan sonra 20-25 yıldı.', 'Centurionun maaşı sıradan askerin birkaç katıydı.'] },
  { id: 'sovalye', ad: 'Şövalye', ikon: '🛡️', bolge: 'avrupa', from: -1000, to: -1450, tema: 'avrupa', giyim: 'modern', tac: 'migfer', guc: true,
    kim: 'Bir senyörün toprağında yaşayan, atlı ve zırhlı bir savaşçısın.',
    adimlar: [
      { saat: 'Şafak', sahne: 'tapinak', metin: 'Gün şatonun kilisesinde ayinle başlar. Şövalyelik yemininde kiliseyi, zayıfları ve efendini korumaya söz verdin.' },
      { saat: 'Sabah', sahne: 'talim', metin: 'Kılıç ve mızrak talimi. Zırhın ve atın bir köyün yıllık gelirinden pahalıdır; çocukken uşak, sonra silahtar olarak yıllarca eğitildin.' },
      { saat: 'Öğle', sahne: 'saray', metin: 'Senyörün salonunda yemek: et, ekmek, şarap. Toprağın karşılığında ona yılda belli günler askerlik yapmak zorundasın.' },
      { saat: 'İkindi', sahne: 'toren', metin: 'Turnuva: iki şövalye mızraklarla birbirine saldırır. Kazanan, yenilenin atını ve zırhını alır; turnuvalar tehlikeli ama kazançlıydı.' },
      { saat: 'Akşam', sahne: 'aksam', metin: 'Ozanlar şövalye romansları anlatır. Ama gerçek savaş romanslardaki kadar soylu değildir: 14. yüzyılda okçular ve piyadeler şövalyelerin üstünlüğünü sarsmaya başladı.' }
    ],
    his: 'Soylusun ama efendine bağlısın; savaş senin mesleğin. Gerçek hayatın şarkılardaki kadar parlak değil.',
    gercekler: ['Tam bir plaka zırh 20-25 kilo kadardı; ağırlık vücuda yayıldığı için şövalye ata yardımsız binebilirdi.', 'Crécy (1346) ve Agincourt (1415) savaşlarında İngiliz okçuları Fransız şövalyelerini ağır yenilgiye uğrattı.', 'Barut ve top yaygınlaşınca şövalye çağı sona erdi.'] },
  { id: 'mutlak-kral', ad: 'Kral (Versay)', ikon: '👑', bolge: 'avrupa', from: -1682, to: -1789, tema: 'avrupa', giyim: 'modern', tac: 'tac', guc: true,
    kim: 'Fransa kralısın; sarayın Versay\'da, "Devlet benim" diyen bir hükümdarlığın mirasçısısın.',
    adimlar: [
      { saat: 'Sabah', sahne: 'saray', metin: 'Uyanışın bile bir tören: soylular yatak odana sırayla girer, sana gömleğini uzatmak büyük bir ayrıcalıktır. XIV. Louis bu "lever" törenini soyluları sarayda oyalamak için kullandı.' },
      { saat: 'Öğle', sahne: 'divan', metin: 'Bakanlar konseyi: savaş, vergiler, sömürgeler. Kraliyet hazinesi sürekli borçlu; Versay\'ın ve savaşların masrafı büyük.' },
      { saat: 'İkindi', sahne: 'toren', metin: 'Bahçelerde gezinti ya da av. Versay\'ın bahçelerindeki yüzlerce fıskiye için nehirden su taşıyan dev bir pompa sistemi kuruldu.' },
      { saat: 'Akşam', sahne: 'saray', metin: 'Aynalı Salon\'da balo ve akşam yemeğin seyircilerin önünde yenir. Ama Paris\'te ekmek pahalı; halkın öfkesi büyüyor.' }
    ],
    his: 'Avrupa\'nın en görkemli sarayındasın, her hareketin bir tören. Ama ülke borç içinde ve halk ekmek bulamıyor: 1789 yaklaşıyor.',
    gercekler: ['XIV. Louis 72 yıl tahtta kaldı (1643-1715): Avrupa tarihinin en uzunu.', 'Saray 1682\'de resmen Versay\'a taşındı.', 'XVI. Louis 1793\'te giyotinle idam edildi.'] },
  { id: 'napolyon-subay', ad: 'Napolyon ordusunda subay', ikon: '⚔️', bolge: 'avrupa', from: -1796, to: -1815, tema: 'avrupa', giyim: 'modern', tac: 'migfer', guc: true,
    kim: 'Fransız Büyük Ordusu\'nda bir piyade alayında yüzbaşısın.',
    adimlar: [
      { saat: 'Şafak', sahne: 'kamp', metin: 'Davullar çalar. Napolyon ordusu hızıyla ünlüdür: erzakı yanında taşımaz, geçtiği yerden toplar; bu yüzden günde 30-40 km yürüyebilir.' },
      { saat: 'Sabah', sahne: 'yuruyus', metin: 'Yürüyüş. "Her askerin sırt çantasında bir mareşal asası vardır" denir: Devrim\'den sonra yükselmek soya değil, yeteneğe bağlı oldu.' },
      { saat: 'Öğle', sahne: 'karargah', metin: 'Albay haritanın başında emirleri verir. İmparator topçudan yetişmedir; savaşı topçu ateşiyle başlatır, sonra süvari ve piyadeyi doğru noktaya yığar.' },
      { saat: 'İkindi', sahne: 'savas', metin: 'Savaş: alayın kare düzeninde süvariye karşı durur, tüfekler dakikada iki üç kez ateşlenir. Duman yüzünden birkaç yüz metre ötesi görünmez.' },
      { saat: 'Akşam', sahne: 'kamp', metin: 'Kamp ateşinin başında mektup yazarsın. Yaralıların durumu kötüdür; ama orduda ilk kez sahada ameliyat yapan "uçan ambulanslar" kullanılıyor.' }
    ],
    his: 'Avrupa\'yı baştan başa yürüdün; zaferlerin şanını da Rusya\'nın karını da tattın. Yeteneğinle yükselebileceğin bir dünyadasın, ama savaş hiç bitmiyor.',
    gercekler: ['Austerlitz (1805) Napolyon\'un en ünlü zaferidir.', '1812 Rusya seferine katılan yaklaşık 600.000 askerin çok küçük bir kısmı geri dönebildi.', 'Cerrah Dominique-Jean Larrey\'in "uçan ambulansları" modern sahra sağlık hizmetinin başlangıcı sayılır.'] }
];
