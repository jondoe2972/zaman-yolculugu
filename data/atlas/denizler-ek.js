// 🌊 Dünya Denizleri Genişleme Paketi: +28 büyük deniz ve körfez (hepsi tıklanabilir, Arama ve Keşif Defteri'nde!)
'use strict';
(() => {
  const AO = window.ATLAS_OKYANUS;
  if (!AO || !Array.isArray(AO.okyanuslar)) return;
  const DENIZLER = [
    // ---- Türkiye ve Akdeniz Alt Denizleri (Akdeniz ve Karadeniz'den ÖNCE eşleşir!) ----
    {
      id: 'marmara', ad: 'Marmara Denizi', tur: 'deniz', ik: '🌊',
      bb: [40.25, 41.15, 26.6, 29.95], merkez: [40.7, 28.2],
      yuzolcum: '11.350 km²', derinlik: 'Ortalama 494 m · En derin: 1.370 m',
      sicaklik: 'Yazın 23–26 °C · Kışın 7–9 °C',
      canlilar: 'Lüfer, palamut, istavrit, tekir, kalkan, deniz çayırları ve boğazlardan göç eden yunus sürüleri.',
      akintiOzet: 'Üst tabakada Karadeniz\'in az tuzlu suyu İstanbul Boğazı\'ndan Çanakkale\'ye akar; 25 metre altta Akdeniz\'in yoğun tuzlu suyu ters yönde Karadeniz\'e gider.',
      tarih: 'İstanbul ve Çanakkale Boğazları ile Asya\'yı Avrupa\'ya, Karadeniz\'i Akdeniz\'e bağlayan dünyanın en stratejik iç denizidir; adını Marmara Adası\'ndaki ünlü beyaz mermerden (marmaros) alır.',
      ilginc: 'Kuzey Anadolu Fay Hattı tam Marmara Denizi\'nin tabanındaki 1.200 metrelik derin çukurların içinden geçer.',
      w: 'Sea of Marmara'
    },
    {
      id: 'ege', ad: 'Ege Denizi', tur: 'deniz', ik: '⛵',
      bb: [35.4, 41.0, 22.8, 27.3], merkez: [38.2, 25.0],
      yuzolcum: '214.000 km²', derinlik: 'Ortalama 350 m · En derin: 3.543 m (Girit kuzeyi)',
      sicaklik: '15–26 °C (berrak ve bol güneşli)',
      canlilar: 'Akdeniz foku, süngerler, ahtapot, orfoz, çipura, levrek ve binlerce adanın etrafındaki zengin deniz çayırları.',
      akintiOzet: 'Çanakkale Boğazı\'ndan çıkan serin Karadeniz suları batıya yayılır; yazın kuzeyden esen serin "Etezyen / Meltem" rüzgârları yelkenlilere yön verir.',
      tarih: 'Girit Minos, Miken, İyonya, Efes, Milet, Troya ve Atina uygarlıklarıyla felsefenin, demokrasinin ve antik denizciliğin beşiği oldu.',
      ilginc: 'Ege Denizi\'nde 2.000\'den fazla ada ve adacık vardır; antik denizciler neredeyse hiç karayı gözden kaybetmeden adadan adaya geçebilirdi!',
      w: 'Aegean Sea'
    },
    {
      id: 'azak', ad: 'Azak Denizi', tur: 'deniz', ik: '🌊',
      bb: [45.2, 47.4, 34.8, 39.4], merkez: [46.1, 36.8],
      yuzolcum: '39.000 km²', derinlik: 'Ortalama yalnızca 7 m · En derin: 14 m (dünyanın en sığ denizi!)',
      sicaklik: 'Yazın 28 °C · Kışın kısmen donar',
      canlilar: 'Mersin balığı, sudak, ringa ve sığ sularda beslenen milyonlarca göçmen su kuşu.',
      akintiOzet: 'Don ve Kuban nehirlerinin taşıdığı bol tatlı su Kerç Boğazı\'ndan Karadeniz\'e boşalır; bu yüzden tuzluluğu okyanusların üçte biri kadardır.',
      tarih: 'Antik çağda "Maiotis Gölü" denirdi; Kırım Hanlığı, Osmanlı ve Rus İmparatorluğu arasında yüzyıllarca stratejik kapı oldu.',
      ilginc: 'Dünya üzerindeki en sığ denizdir — en derin noktası bile sadece 14 metredir (yaklaşık 4 katlı bir bina yüksekliği)!',
      w: 'Sea of Azov'
    },
    {
      id: 'adriyatik', ad: 'Adriyatik Denizi', tur: 'deniz', ik: '⛵',
      bb: [40.0, 45.8, 12.2, 19.6], merkez: [42.8, 15.8],
      yuzolcum: '138.600 km²', derinlik: 'Kuzeyde sığ (35 m) · Güneyde 1.233 m',
      sicaklik: '12–26 °C',
      canlilar: 'Şişe burunlu yunuslar, Caretta caretta kaplumbağaları ve Dalmaçya kıyılarının mercan kayalıkları.',
      akintiOzet: 'Otranto Boğazı\'ndan giren akıntı Hırvatistan kıyısından kuzeye çıkıp İtalya kıyısından güneye iner.',
      tarih: 'Venedik Cumhuriyeti, Dubrovnik (Ragusa) ve Roma\'nın doğu ticareti yüzyıllarca bu dar deniz üzerinden yürüdü.',
      ilginc: 'Kuzeydoğu kıyısındaki Hırvatistan (Dalmaçya) kıyılarında 1.200\'den fazla kristal berraklığında ada bulunur.',
      w: 'Adriatic Sea'
    },
    {
      id: 'tiren', ad: 'Tiren Denizi', tur: 'deniz', ik: '🌋',
      bb: [38.0, 43.0, 9.5, 16.0], merkez: [40.2, 12.8],
      yuzolcum: '275.000 km²', derinlik: 'Ortalama 2.000 m · En derin: 3.785 m',
      sicaklik: '14–26 °C',
      canlilar: 'İspermeçet balinaları, orkinoslar, kılıçbalıkları ve volkanik su altı dağlarının canlıları.',
      akintiOzet: 'İtalya yarımadası ile Korsika, Sardinya ve Sicilya adaları arasında dairesel bir akıntı döngüsü oluşturur.',
      tarih: 'Adını Etrüsklerden (Tyrrhenoi) alır; Roma\'nın Ostia ve Napoli limanları bu denize açılırdı.',
      ilginc: 'Tabanında Marsili adlı Avrupa\'nın en büyük su altı yanardağı ile sürekli lav püskürten Stromboli adası bulunur!',
      w: 'Tyrrhenian Sea'
    },
    {
      id: 'iyon', ad: 'İyon Denizi', tur: 'deniz', ik: '🌊',
      bb: [35.5, 40.2, 15.0, 22.2], merkez: [37.8, 18.8],
      yuzolcum: '169.000 km²', derinlik: 'En derin: 5.267 m (Akdeniz\'in en derin çukuru: Calypso!)',
      sicaklik: '15–27 °C',
      canlilar: 'Akdeniz\'in en önemli Caretta caretta yuvalama plajları (Zakintos) ve derin deniz balinaları.',
      akintiOzet: 'Doğu ve Batı Akdeniz arasında derin su geçişinin ana kavşağıdır.',
      tarih: '1571 İnebahtı (Lepanto) Deniz Savaşı ve MÖ 31 Actium Deniz Savaşı bu denizin doğu kıyılarında yaşandı.',
      ilginc: 'Yunanistan açıklarındaki Calypso Çukuru, 5.267 metre derinliğiyle tüm Akdeniz\'in en derin noktasıdır.',
      w: 'Ionian Sea'
    },
    {
      id: 'hazar', ad: 'Hazar Denizi', tur: 'deniz', ik: '🐟',
      bb: [36.5, 47.2, 46.5, 54.5], merkez: [41.8, 50.6],
      yuzolcum: '371.000 km² (Dünyanın en büyük kapalı su kütlesi!)', derinlik: 'Kuzeyde 5 m · Güneyde 1.025 m',
      sicaklik: 'Kuzeyde kışın donar · Güneyde 10–28 °C',
      canlilar: 'Dünya havyarının kaynağı dev Beluga mersin balıkları ve Dünya\'da yalnızca burada yaşayan Hazar foku!',
      akintiOzet: 'Okyanuslara bağlantısı yoktur; suyunun %80\'i Volga Nehri\'nden gelir ve deniz seviyesinin 28 metre altındadır.',
      tarih: 'Hazar Kağanlığı, İpek Yolu\'nun kuzey geçişi ve 19. yüzyıldan itibaren Bakü petrolünün doğduğu denizdir.',
      ilginc: 'Büyüklüğü ve hafif tuzlu suyu yüzünden "deniz" denir ama aslında okyanusa çıkışı olmayan dev bir iç göldür — antik Tetis Okyanusu\'nun son kalıntısıdır!',
      w: 'Caspian Sea'
    },

    // ---- Avrupa ve Kuzey Denizleri ----
    {
      id: 'kuzeydenizi', ad: 'Kuzey Denizi', tur: 'deniz', ik: '🌊',
      bb: [51.0, 61.5, -3.0, 9.5], merkez: [56.2, 3.2],
      yuzolcum: '570.000 km²', derinlik: 'Ortalama 95 m · En derin: 700 m (Norveç Çukuru)',
      sicaklik: '6–17 °C (rüzgârlı ve dalgalı)',
      canlilar: 'Ringa, morina, uskumru, yunuslar, gri foklar ve dev deniz kuşu kolonileri.',
      akintiOzet: 'Kuzeyden giren sıcak Gulf Stream kolu sayesinde yüksek enlemine rağmen kışın hiç donmaz.',
      tarih: 'Viking akınları, Hansa Birliği ticareti, Hollanda ve İngiltere\'nin deniz imparatorlukları bu denizde doğdu.',
      ilginc: '8.000 yıl önce Kuzey Denizi yoktu! İngiltere ile Avrupa\'yı birleştiren "Doggerland" adlı verimli bir kara parçasıydı; buzullar eriyince sular altında kaldı.',
      w: 'North Sea'
    },
    {
      id: 'baltik', ad: 'Baltık Denizi', tur: 'deniz', ik: '🟠',
      bb: [53.8, 66.0, 10.0, 30.2], merkez: [58.5, 19.8],
      yuzolcum: '377.000 km²', derinlik: 'Ortalama yalnızca 55 m · En derin: 459 m',
      sicaklik: '0–20 °C (kuzeyi kışın kalın buzla kaplanır)',
      canlilar: 'Az tuzlu (acı) suya uyum sağlamış ringa, somon, morina ve Baltık halkalı foku.',
      akintiOzet: '250\'den fazla nehrin tatlı suyuyla beslendiği için dünyanın en az tuzlu denizlerinden biridir.',
      tarih: 'Antik Kehribar Yolu\'nun başlangıcı, Vikinglerin ve Orta Çağ\'da zengin Hansa şehirlerinin iç denizi oldu.',
      ilginc: 'Suyu az tuzlu ve soğuk olduğu için gemi kurdu yaşamaz; bu sayede 1628\'de batan dev İsveç savaş gemisi "Vasa" 333 yıl sonra neredeyse hiç çürümeden çıkarıldı!',
      w: 'Baltic Sea'
    },
    {
      id: 'mans', ad: 'Manş Denizi (İngiliz Kanalı)', tur: 'deniz', ik: '⛵',
      bb: [48.5, 51.2, -5.5, 2.0], merkez: [50.0, -1.5],
      yuzolcum: '75.000 km²', derinlik: 'Ortalama 63 m · En dar yeri: Dover Boğazı (33 km)',
      sicaklik: '8–18 °C',
      canlilar: 'Uskumru, levrek, köpekbalığı türleri, yunuslar ve büyük gelgit canlıları.',
      akintiOzet: 'Dünyanın en yoğun gemi trafiğine sahip boğazıdır; günde 500\'den fazla dev gemi geçer.',
      tarih: '1066 Norman Fethi, 1588 İspanyol Armadası ve 1944 Normandiya Çıkarması (D-Day) bu dar denizde yaşandı.',
      ilginc: '1994\'te açılan 50 km\'lik Manş Tüneli ile Fransa ve İngiltere denizin 75 metre altından hızlı trenle birbirine bağlandı!',
      w: 'English Channel'
    },
    {
      id: 'irlandadenizi', ad: 'İrlanda Denizi', tur: 'deniz', ik: '🌊',
      bb: [51.8, 55.2, -6.5, -2.8], merkez: [53.6, -4.6],
      yuzolcum: '46.000 km²', derinlik: 'Ortalama 52 m · En derin: 315 m',
      sicaklik: '7–16 °C',
      canlilar: 'Dev camgöz köpekbalıkları, yunuslar, foklar ve zengin deniz kuşları.',
      akintiOzet: 'Güneyde St. George Kanalı ve kuzeyde Kuzey Kanalı ile Atlas Okyanusu\'na bağlanır; güçlü gelgit akıntılarına sahiptir.',
      tarih: 'Kelt denizcileri, Vikinglerin Dublin üssü ve Sanayi Devrimi\'nin Liverpool–Belfast ticaret koridoru oldu.',
      ilginc: 'Rüzgârı o kadar güçlüdür ki bugün dünyanın en büyük açık deniz rüzgâr enerjisi santrallerine ev sahipliği yapar.',
      w: 'Irish Sea'
    },
    {
      id: 'norvecdenizi', ad: 'Norveç Denizi', tur: 'deniz', ik: '❄️',
      bb: [61.5, 72.0, -5.0, 18.0], merkez: [66.5, 4.5],
      yuzolcum: '1,38 milyon km²', derinlik: 'Ortalama 2.000 m · En derin: 3.970 m',
      sicaklik: '2–10 °C (sıcak akıntı sayesinde buz tutmaz!)',
      canlilar: 'Devasa morina ve ringa sürüleri, orkalar, kambur balinalar ve dünyanın en büyük soğuk su mercan resifleri!',
      akintiOzet: 'Sıcak Norveç Akıntısı burada soğuyup dibe batarak tüm Dünya okyanuslarını döndüren dev "Konveyör Bandı"nı çalıştırır.',
      tarih: 'Vikinglerin İzlanda ve Grönland\'a açıldığı fırtınalı kuzey rotasıdır.',
      ilginc: 'Kuzey Kutup Dairesi\'nde olmasına rağmen sıcak Atlas akıntısı sayesinde limanları kışın bile hiç donmaz!',
      w: 'Norwegian Sea'
    },
    {
      id: 'barents', ad: 'Barents Denizi', tur: 'deniz', ik: '🧊',
      bb: [68.0, 80.5, 18.0, 60.0], merkez: [74.0, 38.0],
      yuzolcum: '1,4 milyon km²', derinlik: 'Ortalama 230 m · En derin: 600 m',
      sicaklik: '-1 ile +8 °C arası',
      canlilar: 'Kutup ayıları, morslar, beyaz balinalar (beluga) ve dünyanın en zengin Arktik morina stokları.',
      akintiOzet: 'Sıcak Atlas suları ile buz gibi Arktik sularının çarpıştığı aşırı besin zengini bir denizdir.',
      tarih: 'Adını 1596\'da Kuzeydoğu Geçidi\'ni arayan Hollandalı kâşif Willem Barentsz\'den alır; 2. Dünya Savaşı\'nda Arktik konvoylarının rotasıydı.',
      ilginc: 'Sıcak su girişi nedeniyle küresel ısınmanın en hızlı hissedildiği denizlerden biridir — bu yüzden "Arktik\'in sıcak noktası" diye anılır.',
      w: 'Barents Sea'
    },

    // ---- Asya ve Hint Okyanusu Denizleri ----
    {
      id: 'arapdenizi', ad: 'Arap Denizi (Umman Denizi)', tur: 'deniz', ik: '⛵',
      bb: [8.0, 25.5, 51.0, 76.5], merkez: [16.5, 64.0],
      yuzolcum: '3,86 milyon km²', derinlik: 'Ortalama 2.734 m · En derin: 4.652 m',
      sicaklik: '24–30 °C',
      canlilar: 'Balina köpekbalıkları, dev manta vatozları, mavi balinalar ve yeşil deniz kaplumbağaları.',
      akintiOzet: 'Muson rüzgârlarıyla her 6 ayda bir akıntı yönü 180 DERECE tersine döner!',
      tarih: 'Antik İndus–Mezopotamya ticaretinden Arap dhow gemilerine, İbn Battuta ve Vasco da Gama\'ya kadar baharat ticaretinin otoyolu oldu.',
      ilginc: 'Denizciler binlerce yıl boyunca yazın güneybatı musonuyla Hindistan\'a, kışın kuzeydoğu musonuyla Arabistan\'a saat gibi düzenli sefer yaptı!',
      w: 'Arabian Sea'
    },
    {
      id: 'bengal', ad: 'Bengal Körfezi', tur: 'deniz', ik: '🌊',
      bb: [5.0, 22.5, 79.5, 95.5], merkez: [14.5, 87.5],
      yuzolcum: '2,17 milyon km² (Dünyanın en büyük körfezi!)', derinlik: 'Ortalama 2.600 m · En derin: 4.694 m',
      sicaklik: '26–30 °C',
      canlilar: 'Irrawaddy nehir yunusları, Olive Ridley deniz kaplumbağaları (yüz binlercesi aynı gecede Odisha kumsalına yumurtlar!) ve Sundarbans mangrov canlıları.',
      akintiOzet: 'Ganj ve Brahmaputra nehirlerinin taşıdığı devasa tatlı su yüzey tuzluluğunu belirgin biçimde düşürür.',
      tarih: 'Chola Deniz İmparatorluğu, Budizm\'in Güneydoğu Asya\'ya yayılışı ve Doğu Hindistan ticareti buradan şekillendi.',
      ilginc: 'Kuzeyindeki Ganj-Brahmaputra Deltası dünyanın en büyük nehir deltasıdır ve tabanında Himalayalar\'dan taşınmış 20 km kalınlığında dev tortul yelpaze yatar!',
      w: 'Bay of Bengal'
    },
    {
      id: 'andaman', ad: 'Andaman Denizi', tur: 'deniz', ik: '🪸',
      bb: [5.5, 17.0, 92.5, 99.5], merkez: [11.0, 96.0],
      yuzolcum: '797.700 km²', derinlik: 'Ortalama 870 m · En derin: 4.400 m',
      sicaklik: '27–30 °C',
      canlilar: 'Rengârenk mercan resifleri, dugonglar, balina köpekbalıkları ve kireçtaşı adacıkları.',
      akintiOzet: 'Malakka Boğazı üzerinden Hint Okyanusu ile Güney Çin Denizi\'ni birbirine bağlar.',
      tarih: 'Hint ve Çin medeniyetleri arasındaki deniz ipek yolunun en yoğun geçididir.',
      ilginc: '2004 yılında Hint Okyanusu\'ndaki büyük deprem ve tsunami bu denizin tabanındaki fay hattında tetiklendi; ayrıca dış dünyayla hiç temas kurmayan Kuzey Sentinel Adası buradadır.',
      w: 'Andaman Sea'
    },
    {
      id: 'guneycin', ad: 'Güney Çin Denizi', tur: 'deniz', ik: '⛵',
      bb: [0.0, 23.5, 102.0, 121.0], merkez: [12.5, 113.5],
      yuzolcum: '3,5 milyon km²', derinlik: 'Ortalama 1.212 m · En derin: 5.560 m',
      sicaklik: '25–30 °C',
      canlilar: 'Dünya deniz biyoçeşitliliğinin kalbi ("Mercan Üçgeni" kenarı): 3.000\'den fazla balık türü ve yüzlerce mercan çeşidi.',
      akintiOzet: 'Muson rüzgârlarıyla yön değiştiren güçlü yüzey akıntıları ve sık tropikal tayfunlar.',
      tarih: 'Çinli amiral Zheng He\'nin dev hazine filolarından bugüne kadar dünya deniz ticaretinin üçte biri bu denizden geçer!',
      ilginc: 'Küresel deniz ticaretinin her yıl trilyonlarca dolarlık yükü bu denizin sularından taşınır.',
      w: 'South China Sea'
    },
    {
      id: 'dogucin', ad: 'Doğu Çin Denizi', tur: 'deniz', ik: '🌊',
      bb: [23.5, 33.5, 118.5, 130.0], merkez: [28.5, 124.5],
      yuzolcum: '1,25 milyon km²', derinlik: 'Geniş sığ kıta sahanlığı (~200 m) · Okinawa Çukuru: 2.717 m',
      sicaklik: '15–28 °C',
      canlilar: 'Zengin balıkçılık alanları, deniz kaplumbağaları ve Okinawa mercan resifleri.',
      akintiOzet: 'Doğu kenarından sıcak ve hızlı Kuroshio Akıntısı kuzeye doğru akar.',
      tarih: 'Çin, Kore, Ryukyu Krallığı ve Japonya arasındaki kültürel ve ticari köprü oldu (yazı, çay ve Budizm buradan Japonya\'ya geçti).',
      ilginc: 'Yangtze Nehri her yıl yüz milyonlarca ton verimli alüvyonu bu sığ denize boşaltır.',
      w: 'East China Sea'
    },
    {
      id: 'sarideniz', ad: 'Sarı Deniz', tur: 'deniz', ik: '🌊',
      bb: [33.5, 41.0, 117.5, 126.5], merkez: [36.5, 122.5],
      yuzolcum: '380.000 km²', derinlik: 'Ortalama yalnızca 44 m · En derin: 152 m',
      sicaklik: '4–26 °C',
      canlilar: 'Gelgit çamur düzlükleri Doğu Asya–Avustralya göç yolundaki milyonlarca kıyı kuşunun hayati mola yeridir.',
      akintiOzet: 'Çok sığdır; Gobi Çölü\'nden gelen toz fırtınaları ve Sarı Irmak\'ın (Huang He) taşıdığı sarı lös toprağı sularına altın-sarı rengini verir.',
      tarih: 'Antik Çin ve Kore krallıklarının kıyı ticaret merkeziydi.',
      ilginc: 'Kore kıyılarında gelgit farkı 9 metreyi aşar — deniz çekildiğinde kilometrelerce uzanan dev çamur ovaları ortaya çıkar!',
      w: 'Yellow Sea'
    },
    {
      id: 'ohotsk', ad: 'Ohotsk Denizi', tur: 'deniz', ik: '🧊',
      bb: [44.0, 62.5, 135.0, 162.0], merkez: [54.0, 148.0],
      yuzolcum: '1,58 milyon km²', derinlik: 'Ortalama 859 m · En derin: 3.372 m',
      sicaklik: '-1 ile +12 °C arası (kışın büyük kısmı donar)',
      canlilar: 'Dev kral yengeçler, Pasifik somonları, orkalar, Grönland balinaları ve Steller deniz kartalları.',
      akintiOzet: 'Amur Nehri\'nin buz gibi tatlı suyu kışın bu denizi enlemine göre dünyanın en güneydeki deniz buzu kuşağına çevirir.',
      tarih: '17. yüzyılda Rus kâşiflerin Pasifik\'e ilk ulaştığı denizdir.',
      ilginc: 'Kışın Japonya\'nın Hokkaido kıyılarına kadar sürüklenen dev buz kütleleri ("Ryuhyo") doğa severler için ünlü bir manzaradır.',
      w: 'Sea of Okhotsk'
    },
    {
      id: 'bering', ad: 'Bering Denizi', tur: 'deniz', ik: '🧊',
      bb: [52.0, 66.0, 162.0, 180.0], bb2: [52.0, 66.0, -180.0, -158.0], merkez: [58.5, -175.0],
      yuzolcum: '2 milyon km²', derinlik: 'Kuzeyde sığ (50 m) · Güneyde 4.097 m',
      sicaklik: '0–10 °C (dünyanın en fırtınalı denizlerinden)',
      canlilar: 'Alaska kral yengeci, gri balinalar, morslar, deniz samurları ve milyonlarca deniz kuşu.',
      akintiOzet: 'Bering Boğazı üzerinden Pasifik ile Arktik Okyanusu\'nu birleştirir.',
      tarih: 'Son Buzul Çağı\'nda deniz seviyesi alçalınca burada "Beringia" kara köprüsü oluştu ve ilk insanlar Asya\'dan Amerika kıtasına yürüyerek geçti!',
      ilginc: 'Bering Boğazı\'nın ortasındaki iki küçük Diomede Adası birbirinden sadece 3,8 km uzaktadır ama aralarından Uluslararası Tarih Çizgisi geçtiği için saat farkı tam 21 SAATTİR ("Dün Adası" ve "Yarın Adası")!',
      w: 'Bering Sea'
    },
    {
      id: 'filipin', ad: 'Filipin Denizi', tur: 'deniz', ik: '🌋',
      bb: [6.0, 32.0, 121.0, 145.0], merkez: [19.0, 133.0],
      yuzolcum: '5 milyon km² (Dünyanın en büyük kenar denizlerinden!)', derinlik: 'Ortalama 4.100 m · En derin: 10.994 m (Mariana Çukuru!)',
      sicaklik: '22–29 °C',
      canlilar: 'Derin okyanus canlıları, göçmen ton balıkları ve Pasifik adalarının mercan resifleri.',
      akintiOzet: 'Kuzey Ekvator Akıntısı burada kuzeye dönerek sıcak Kuroshio Akıntısı\'nı doğurur.',
      tarih: '1521\'de Macellan\'ın Pasifik\'i aşıp ulaştığı deniz ve 2. Dünya Savaşı\'nın en büyük uçak gemisi muharebelerinin sahnesi oldu.',
      ilginc: 'Doğu sınırında Dünya\'nın en derin noktası olan 11 km derinliğindeki Mariana Çukuru yer alır!',
      w: 'Philippine Sea'
    },
    {
      id: 'cava', ad: 'Cava Denizi', tur: 'deniz', ik: '⛵',
      bb: [-8.5, -2.5, 105.5, 119.0], merkez: [-5.3, 112.0],
      yuzolcum: '320.000 km²', derinlik: 'Ortalama yalnızca 46 m',
      sicaklik: '27–30 °C',
      canlilar: '3.000\'den fazla tropikal balık ve mercan türü.',
      akintiOzet: 'Muson rüzgârlarıyla yön değiştiren sıcak sığ sular.',
      tarih: 'Majapahit ve Srivijaya deniz imparatorlukları ile baharat adalarına giden gemilerin ana kavşağıydı.',
      ilginc: 'Buzul Çağı\'nda burası tamamen kuru bir kara parçasıydı ("Sundaland"); Cava, Sumatra ve Borneo yürüyerek birbirine bağlıydı!',
      w: 'Java Sea'
    },

    // ---- Okyanusya ve Amerika Denizleri ----
    {
      id: 'mercan', ad: 'Mercan Denizi', tur: 'deniz', ik: '🪸',
      bb: [-25.0, -9.0, 142.0, 166.0], merkez: [-17.5, 154.0],
      yuzolcum: '4,79 milyon km²', derinlik: 'Ortalama 2.394 m · En derin: 9.140 m',
      sicaklik: '22–29 °C',
      canlilar: 'Dünyanın en büyük canlı yapısı olan Büyük Set Resifi, 1.500 balık türü, köpekbalıkları ve kambur balinalar.',
      akintiOzet: 'Güney Ekvator Akıntısı buradan güneye kıvrılıp Doğu Avustralya Akıntısı\'na dönüşür.',
      tarih: 'Kaptan James Cook\'un 1770\'te gemisini resiflere oturttuğu deniz ve 1942 Mercan Denizi Savaşı\'nın sahnesi.',
      ilginc: 'Büyük Set Resifi o kadar büyüktür ki Dünya yörüngesindeki astronotlar tarafından çıplak gözle seçilebilir!',
      w: 'Coral Sea'
    },
    {
      id: 'tasman', ad: 'Tasman Denizi', tur: 'deniz', ik: '🌊',
      bb: [-46.0, -25.0, 148.0, 174.0], merkez: [-36.5, 161.0],
      yuzolcum: '2,3 milyon km²', derinlik: 'Ortalama 3.500 m · En derin: 5.943 m',
      sicaklik: '12–23 °C',
      canlilar: 'Mavi penguenler, albatroslar, güney gerçek balinaları ve derin deniz canlıları.',
      akintiOzet: 'Avustralya ile Yeni Zelanda arasındaki 2.000 km\'lik mesafede sert batı rüzgârları ve güçlü dalgalar oluşur.',
      tarih: 'Adını 1642\'de Tazmanya ve Yeni Zelanda\'yı gören ilk Avrupalı denizci Abel Tasman\'dan alır.',
      ilginc: 'Avustralyalılar ve Yeni Zelandalılar aralarındaki bu dev denize şakayla "Hendek" (The Ditch) derler!',
      w: 'Tasman Sea'
    },
    {
      id: 'meksikakorfezi', ad: 'Meksika Körfezi', tur: 'deniz', ik: '☄️',
      bb: [18.0, 30.5, -98.0, -80.5], merkez: [24.8, -90.0],
      yuzolcum: '1,6 milyon km²', derinlik: 'Ortalama 1.615 m · En derin: 4.384 m',
      sicaklik: '22–30 °C (sıcak tropikal havuz)',
      canlilar: 'Deniz inekleri (manati), yunuslar, balina köpekbalıkları ve derin deniz mercanları.',
      akintiOzet: 'Burada ısınan sular Florida Boğazı\'ndan fışkırıp Avrupa\'yı ısıtan dev Gulf Stream akıntısını başlatır!',
      tarih: 'Maya deniz ticareti, İspanyol hazine filoları ve modern enerji tarihinin merkezi oldu.',
      ilginc: '66 milyon yıl önce dinozorları yok eden 10 km genişliğindeki dev Chicxulub asteroidi tam bu körfezin güney kıyısına (Yucatán) çarptı!',
      w: 'Gulf of Mexico'
    },
    {
      id: 'hudson', ad: 'Hudson Körfezi', tur: 'deniz', ik: '🐻‍❄️',
      bb: [51.0, 64.0, -95.0, -77.0], merkez: [58.5, -85.5],
      yuzolcum: '1,23 milyon km²', derinlik: 'Ortalama yalnızca 100 m',
      sicaklik: 'Kışın tamamen donar · Yazın 4–8 °C',
      canlilar: 'Kutup ayıları (Churchill — "Dünyanın Kutup Ayısı Başkenti"!), 50.000+ beyaz balina (beluga) ve halkalı foklar.',
      akintiOzet: 'Kışın donan deniz buzu kutup ayılarının fok avladığı dev platformdur; yazın eriyince ayılar karada bekler.',
      tarih: '1610\'da Kuzeybatı Geçidi\'ni arayan İngiliz kâşif Henry Hudson tarafından haritalandı.',
      ilginc: 'Buzul Çağı\'ndaki dev buz tabakasının ağırlığı yer kabuğunu çöktürdüğü için Hudson Körfezi\'nin yerçekimi Dünya ortalamasından hafifçe daha düşüktür ve tabanı hâlâ her yıl yükselmektedir!',
      w: 'Hudson Bay'
    },
    {
      id: 'labradordenizi', ad: 'Labrador Denizi', tur: 'deniz', ik: '🧊',
      bb: [52.0, 65.0, -64.0, -43.0], merkez: [58.0, -53.5],
      yuzolcum: '841.000 km²', derinlik: 'Ortalama 1.900 m · En derin: 4.316 m',
      sicaklik: '-1 ile +6 °C arası',
      canlilar: 'Grönland balinaları, narvallar, buzdağı kenarındaki morina sürüleri ve foklar.',
      akintiOzet: 'Grönland buzullarından kopan dev buzdağlarını güneye, Kuzey Atlantik gemi rotalarına taşıyan soğuk Labrador Akıntısı buradan doğar.',
      tarih: 'MS 1000\'de Vikinglerin Grönland\'dan Kuzey Amerika\'ya (Vinland) geçtiği ve 1912\'de Titanic\'i batıran buzdağının geldiği denizdir!',
      ilginc: 'Kışın yüzey suları o kadar soğuyup yoğunlaşır ki 2.000 metre dibe çökerek tüm Atlantik Okyanusu\'nun derin sularını oksijenle besler.',
      w: 'Labrador Sea'
    }
  ];
  // Dar denizleri en başa koy ki Akdeniz/Karadeniz/okyanuslardan önce eşleşsinler!
  AO.okyanuslar.unshift(...DENIZLER);
})();
