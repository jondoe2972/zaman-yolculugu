// 🌊 Dünya Atlası: Okyanuslar, önemli denizler, sıcak/soğuk akıntılar, girdaplar ve fırtına kuşakları.
'use strict';
window.ATLAS_OKYANUS = {
  // Denizler önce kontrol edilir (küçük kutu öncelikli), eşleşmezse büyük okyanuslar seçilir.
  okyanuslar: [
    {
      id: 'karadeniz', baglanti: 'İstanbul Boğazı, Marmara ve Çanakkale Boğazı yoluyla Ege\'ye ve Akdeniz\'e; Kerç Boğazı ile Azak Denizi\'ne bağlanır. Tuna, Dinyeper, Dinyester, Kızılırmak ve Sakarya buraya dökülür; bu yüzden suyu Akdeniz\'den belirgin biçimde az tuzludur.', ad: 'Karadeniz', tur: 'deniz', ik: '🌊',
      bb: [40.8, 47.0, 27.3, 41.8], merkez: [43.3, 34.5],
      yuzolcum: '436.400 km²', derinlik: 'Ortalama 1.253 m · En derin: 2.212 m',
      sicaklik: 'Yazın 22–26 °C · Kışın 6–9 °C',
      canlilar: 'Hamsi, palamut, lüfer, kalkan, mersin balığı, afalina ve mutur yunusları. Yaklaşık 150–200 metreden daha derinde oksijen yoktur (hidrojen sülfür tabakası); bu nedenle derin sularda canlı yaşamaz.',
      akintiOzet: 'Kıyılar boyunca saat yönünün tersine dönen "Rim Akıntısı" ve iki büyük iç döngü bulunur. İstanbul Boğazı\'nda üstten Karadeniz\'in az tuzlu suyu Marmara\'ya, alttan Akdeniz\'in tuzlu suyu Karadeniz\'e akar.',
      tarih: 'Antik Yunan kolonilerinden İpek Yolu\'nun kuzey limanlarına, Osmanlı\'nın "iç denizi" döneminden modern tahıl ve enerji koridorlarına kadar Avrasya\'nın kilit ticaret havzası oldu.',
      ilginc: 'Derin sularında oksijen olmadığı için 2.400 yıllık antik ahşap gemi batıkları çürümeden neredeyse ilk günkü gibi korunur.',
      w: 'Black Sea'
    },
    {
      id: 'akdeniz', baglanti: 'Batıda Cebelitarık Boğazı (en dar yeri yaklaşık 14 km) ile Atlas Okyanusu\'na; kuzeydoğuda Çanakkale Boğazı üzerinden Marmara ve Karadeniz\'e; güneydoğuda Süveyş Kanalı (1869) ile Kızıldeniz\'e bağlanır. Buharlaşmayla yitirdiği su, nehirlerin getirdiğinden fazladır; açığı Atlas Okyanusu\'ndan giren yüzey suyu kapatır.', ad: 'Akdeniz', tur: 'deniz', ik: '🌊',
      bb: [30.0, 45.8, -5.6, 36.3], merkez: [35.5, 18.0],
      yuzolcum: '2,5 milyon km²', derinlik: 'Ortalama 1.500 m · En derin: 5.267 m (Calypso Çukuru)',
      sicaklik: '14–28 °C (yüksek buharlaşma nedeniyle okyanuslardan daha tuzlu)',
      canlilar: 'Akdeniz foku (dünyanın en nadir deniz memelilerinden), Caretta caretta ve yeşil deniz kaplumbağası, orkinos, kılıçbalığı, ispermeçet balinası ve Posidonia deniz çayırları.',
      akintiOzet: 'Cebelitarık Boğazı\'ndan yüzeyde Atlas Okyanusu\'nun daha az tuzlu suyu içeri girer; buharlaşıp ağırlaşan tuzlu Akdeniz suyu dipten okyanusa geri döner.',
      tarih: 'Fenikeliler, Mısırlılar, Yunanlar, Kartacalılar, Romalılar ("Mare Nostrum — Bizim Denizimiz"), Arap denizciler ve Osmanlı donanmasıyla binlerce yıl boyunca uygarlıkların buluşma sahnesi oldu.',
      ilginc: 'Yaklaşık 5,9 milyon yıl önce Cebelitarık kapanınca Akdeniz neredeyse tamamen kurudu; 5,3 milyon yıl önce okyanus sularının dev bir şelaleyle dolmasıyla yeniden oluştu (Zanclean Tufanı).',
      w: 'Mediterranean Sea'
    },
    {
      id: 'kizildeniz', baglanti: 'Güneyde Babülmendep Boğazı ile Aden Körfezi\'ne (Hint Okyanusu), kuzeyde Süveyş Kanalı ile Akdeniz\'e bağlanır. Sürekli akan hiçbir nehir dökülmez; buharlaşma da çok olduğu için dünyanın en tuzlu denizlerindendir.', ad: 'Kızıldeniz', tur: 'deniz', ik: '🪸',
      bb: [12.5, 30.0, 32.3, 43.6], merkez: [21.0, 38.0],
      yuzolcum: '438.000 km²', derinlik: 'Ortalama 490 m · En derin: 3.040 m',
      sicaklik: '21–32 °C (dünyanın en sıcak ve en tuzlu denizlerinden)',
      canlilar: '1.200\'den fazla balık türü (%10\'u yalnızca burada yaşar), rengârenk mercan resifleri, dugong (deniz ineği), balina köpekbalığı ve deniz kaplumbağaları.',
      akintiOzet: 'Babülmendep Boğazı\'ndan Hint Okyanusu ile su alışverişi yapar; muson rüzgârlarına göre yüzey akıntısı mevsimden mevsime yön değiştirir.',
      tarih: 'Antik Mısır\'ın Punt seferlerinden baharat ticaretine, 1869\'da Süveyş Kanalı\'nın açılmasıyla Avrupa–Asya deniz ticaretinin ana damarına dönüştü.',
      ilginc: 'Afrika ve Arap levhaları birbirinden ayrıldığı için Kızıldeniz her yıl yaklaşık 1–2 cm genişliyor; milyonlarca yıl içinde yeni bir okyanusa dönüşmesi bekleniyor.',
      w: 'Red Sea'
    },
    {
      id: 'basra', baglanti: 'Hürmüz Boğazı ile Umman Körfezi\'ne ve Arap Denizi\'ne bağlanır. Fırat ile Dicle birleşip Şattülarap adıyla buraya dökülür.', ad: 'Basra Körfezi', tur: 'deniz', ik: '⛵',
      bb: [23.8, 30.5, 47.5, 56.5], merkez: [26.8, 51.8],
      yuzolcum: '251.000 km²', derinlik: 'Ortalama yalnızca 50 m · En derin: 90 m',
      sicaklik: 'Yazın 34 °C\'ye kadar çıkar',
      canlilar: 'Dugong (Avustralya\'dan sonra dünyadaki en büyük ikinci popülasyon), inci istiridyeleri, şahin gagalı deniz kaplumbağaları, yunuslar ve mercan kayalıkları.',
      akintiOzet: 'Hürmüz Boğazı\'ndan giren yüzey suyu körfez içinde saat yönünün tersine döner; aşırı buharlaşmayla tuzluluğu artan dip suyu boğazdan Umman Denizi\'ne çıkar.',
      tarih: 'Sümerlerin Dilmun (Bahreyn) ve İndus Vadisi ile deniz ticareti buradan yürüdü; binlerce yıl inci avcılığının, son yüzyılda ise küresel enerji ticaretinin merkezi oldu.',
      ilginc: 'Çok sığ olduğu için son Buzul Çağı\'nda (yaklaşık 15 bin yıl önce) tamamen kuru, nehirlerin aktığı verimli bir vadiydi.',
      w: 'Persian Gulf'
    },
    {
      id: 'karayip', baglanti: 'Kuzeybatıda Yucatán Kanalı ile Meksika Körfezi\'ne; doğuda Küçük Antiller arasındaki geçitlerle Atlas Okyanusu\'na bağlanır. Panama Kanalı gemileri Büyük Okyanus\'a geçirir.', ad: 'Karayip Denizi', tur: 'deniz', ik: '🏝️',
      bb: [9.0, 23.0, -89.0, -60.0], merkez: [15.5, -75.0],
      yuzolcum: '2,75 milyon km²', derinlik: 'Ortalama 2.200 m · En derin: 7.686 m (Cayman Çukuru)',
      sicaklik: 'Yıl boyu 26–29 °C',
      canlilar: 'Dünyanın en büyük ikinci bariyer resifi (Mezoamerikan Resifi), deniz ayısı (manati), çekiç başlı köpekbalığı, mercan balıkları ve beş farklı deniz kaplumbağası türü.',
      akintiOzet: 'Sıcak Karayip Akıntısı doğudan batıya geçip Yucatán Boğazı\'ndan Meksika Körfezi\'ne girer ve ünlü Gulf Stream\'i besler.',
      tarih: '1492\'de Kolomb\'un ulaştığı ilk Amerikan suları oldu; 16.–18. yüzyıllarda İspanyol hazine filoları, şeker ticareti ve korsanlık çağının kalbiydi.',
      ilginc: 'Sıcak yüzeyi nedeniyle Haziran–Kasım arasında Atlantik kasırgalarının başlıca enerji kaynağıdır.',
      w: 'Caribbean Sea'
    },
    {
      id: 'japondenizi', baglanti: 'Dar boğazlarla çevrili, neredeyse kapalı bir denizdir: güneyde Kore (Tsuşima) Boğazı Doğu Çin Denizi\'ne; doğuda Tsugaru Boğazı Büyük Okyanus\'a; kuzeyde La Pérouse ve Tatar boğazları Ohotsk Denizi\'ne açılır.', ad: 'Japon Denizi (Doğu Denizi)', tur: 'deniz', ik: '🌊',
      bb: [34.5, 51.5, 127.5, 142.0], merkez: [40.0, 134.5],
      yuzolcum: '978.000 km²', derinlik: 'Ortalama 1.752 m · En derin: 3.742 m',
      sicaklik: 'Güneyde ılıman, kuzeyde kışın buzlanacak kadar soğuk',
      canlilar: 'Kral yengeç, kalamar, somon, morina, minke balinası ve kuzey fokları.',
      akintiOzet: 'Güneyde sıcak Tsuşima Akıntısı (Kuroshio\'nun kolu) ile kuzeyden inen soğuk Liman Akıntısı karşılaşır; bu karışım son derece bereketli balıkçılık alanları yaratır.',
      tarih: 'Kore, Japonya ve Mançurya arasında kültür, Budizm, seramik ve ticaretin köprüsü oldu.',
      ilginc: 'Okyanusa dar ve sığ boğazlarla bağlandığı için gelgit genliği neredeyse Akdeniz kadar düşüktür.',
      w: 'Sea of Japan'
    },
    {
      id: 'arktik', baglanti: 'Bering Boğazı ile Büyük Okyanus\'a; Grönland ile Norveç arasındaki geniş açıklıktan (Fram Boğazı, Norveç ve Barents denizleri) Atlas Okyanusu\'na bağlanır. Ob, Yenisey, Lena ve Mackenzie gibi dev nehirler buraya dökülür.', ad: 'Arktik (Kuzey Buz) Okyanusu', tur: 'okyanus', ik: '🧊',
      bb: [66.5, 90.0, -180.0, 180.0], merkez: [82.0, 0.0],
      yuzolcum: '14,1 milyon km² (en küçük ve en sığ okyanus)', derinlik: 'Ortalama 1.038 m · En derin: 5.550 m (Molloy Çukuru)',
      sicaklik: '-1,8 °C ile +2 °C arası; yılın büyük bölümünde deniz buzuyla kaplı',
      canlilar: 'Kutup ayısı, narval (deniz gergedanı), beluga (beyaz balina), mors, Grönland köpekbalığı (400 yıldan fazla yaşayabilir!) ve buz altı algleri.',
      akintiOzet: 'Beaufort Döngüsü saat yönünde dönerken, Transpolar Sürüklenme deniz buzlarını Sibirya kıyılarından Grönland\'a ve Atlas Okyanusu\'na taşır.',
      tarih: 'İnuit ve kuzey halklarının binlerce yıllık yaşam alanı; 19. ve 20. yüzyılda Kuzeybatı Geçidi ve Kuzey Kutbu keşiflerinin sahnesi oldu.',
      ilginc: 'Diğer okyanuslardan farklı olarak ortasında bir kıta değil, kalınlığı 1–4 metre arasında değişen yüzen deniz buzu tabakası bulunur.',
      w: 'Arctic Ocean'
    },
    {
      id: 'guney', baglanti: 'Öteki okyanuslarla arasında kara yoktur: 60° güney enleminin güneyinde Atlas, Hint ve Büyük Okyanus\'un sularıyla birleşir. Antarktika\'yı çepeçevre dolaşan Antarktika Çevresel Akıntısı üç okyanusun suyunu birbirine karıştırır.', ad: 'Güney (Antarktika) Okyanusu', tur: 'okyanus', ik: '🐧',
      bb: [-90.0, -58.0, -180.0, 180.0], merkez: [-64.0, 20.0],
      yuzolcum: '21,9 milyon km²', derinlik: 'Ortalama 3.270 m · En derin: 7.434 m',
      sicaklik: '-2 °C ile +4 °C arası',
      canlilar: 'İmparator ve Adélie penguenleri, mavi ve kambur balinalar, leopar foku, dev albatros ve okyanus besin zincirinin temeli olan milyarlarca ton Antarktika krili.',
      akintiOzet: 'Hiçbir kıtaya çarpmadan Dünya\'yı batıdan doğuya çepeçevre dönen Antarktika Çevresi Akıntısı (ACC), dünyadaki en büyük su kütlesini taşır.',
      tarih: '18. yüzyılda Kaptan Cook\'un keşifleriyle haritalanmaya başlandı; Horn Burnu geçişi yelkenli çağının en tehlikeli rotasıydı.',
      ilginc: 'Kara engeli olmadığı için rüzgârlar kesintisiz hızlanır; denizciler bu kuşaklara "Kükreyen Kırklar", "Öfkeli Elliler" ve "Çığlık Atan Altmışlar" adını vermiştir.',
      w: 'Southern Ocean'
    },
    {
      id: 'hint', baglanti: 'Güneybatıda, Afrika\'nın güney ucundaki Agulhas Burnu\'nun güneyinde Atlas Okyanusu\'yla; doğuda Endonezya adalarının arasındaki geçitlerde ve Avustralya\'nın güneyinde Büyük Okyanus\'la; güneyde Güney Okyanusu\'yla birleşir. Kızıldeniz ve Basra Körfezi kuzeydeki kollarıdır.', ad: 'Hint Okyanusu', tur: 'okyanus', ik: '🌊',
      bb: [-58.0, 31.0, 20.0, 146.0], merkez: [-15.0, 78.0],
      yuzolcum: '70,6 milyon km² (dünyanın 3. büyük okyanusu)', derinlik: 'Ortalama 3.741 m · En derin: 7.290 m (Java Çukuru)',
      sicaklik: '22–30 °C (dünyanın en sıcak okyanusu)',
      canlilar: 'Dev manta vatozu, balina köpekbalığı, dugong, deniz kaplumbağaları, renkli mercan resifleri ve 65 milyon yıldır neredeyse değişmeyen "yaşayan fosil" Sölakant (Coelacanth) balığı.',
      akintiOzet: 'Diğer okyanuslardan farklı olarak kuzeydeki akıntılar muson rüzgârlarıyla yılda iki kez tamamen yön değiştirir; güneyde ise güçlü sıcak Agulhas Akıntısı Afrika kıyısından güneye iner.',
      tarih: 'Antik çağdan beri "Muson Ticaret Ağı"nın kalbiydi: Arap, Hint, Doğu Afrikalı, Çinli (Zheng He) ve sonradan Portekizli denizciler baharat, ipek, porselen ve altın taşıdı.',
      ilginc: 'Yılda iki kez yön değiştiren muson rüzgârları sayesinde antik gemiler yazın Hindistan\'a gidip kışın güvenle Afrika ve Arabistan\'a geri dönebiliyordu.',
      w: 'Indian Ocean'
    },
    {
      id: 'atlas', baglanti: 'Kuzeyde Arktik Okyanusu\'na açılır. Güneybatıda, Horn Burnu\'nun güneyindeki Drake Geçidi\'nde Büyük Okyanus\'la; güneydoğuda, Afrika\'nın güney ucundaki Agulhas Burnu\'nun güneyinde Hint Okyanusu\'yla birleşir. Akdeniz (Cebelitarık Boğazı), Karayip ve Baltık başlıca kollarıdır; Panama Kanalı gemileri Büyük Okyanus\'a geçirir.', ad: 'Atlas (Atlantik) Okyanusu', tur: 'okyanus', ik: '🌊',
      bb: [-58.0, 66.5, -98.0, 20.0], merkez: [15.0, -35.0],
      yuzolcum: '85,1 milyon km² (dünyanın 2. büyük okyanusu)', derinlik: 'Ortalama 3.646 m · En derin: 8.376 m (Porto Riko Çukuru)',
      sicaklik: 'Kutuplarda -2 °C, Ekvator\'da 28 °C',
      canlilar: 'Kuzey Atlantik gerçek balinası, kambur balina, yunuslar, Atlantik morinası, deniz kaplumbağaları ve kıyısız Sargasso Denizi\'nde üreyen Avrupa ile Amerika yılan balıkları.',
      akintiOzet: 'Kuzeyde sıcak Gulf Stream Avrupa\'nın kışlarını yumuşatır; soğuk Labrador Akıntısı ise buzdağlarını güneye sürükler. Güneyde sıcak Brezilya ve soğuk Benguela akıntıları döngü kurar.',
      tarih: 'Vikinglerin 1000 yılında geçişinden 1492 sonrası Coğrafi Keşifler\'e kadar Eski ve Yeni Dünya\'yı birbirine bağlayan (ve ne yazık ki Atlantik köle ticaretine de sahne olan) okyanus.',
      ilginc: 'Ortasında baştan başa uzanan Orta Atlantik Sırtı, dünyanın en uzun sualtı sıradağıdır (~16.000 km) ve İzlanda\'da su yüzüne çıkar.',
      w: 'Atlantic Ocean'
    },
    {
      id: 'pasifik', baglanti: 'Kuzeyde Bering Boğazı ile Arktik Okyanusu\'na; güneydoğuda Drake Geçidi ile Atlas Okyanusu\'na; batıda Endonezya adalarının arasındaki geçitlerle (Malakka, Lombok, Torres boğazları) Hint Okyanusu\'na bağlanır. Güneyde Güney Okyanusu\'yla birleşir.', ad: 'Büyük (Pasifik) Okyanus', tur: 'okyanus', ik: '🌊',
      bb: [-58.0, 66.5, -180.0, 180.0], merkez: [5.0, -155.0],
      yuzolcum: '165,2 milyon km² (Dünya yüzeyinin yaklaşık üçte biri!)', derinlik: 'Ortalama 4.000 m · En derin: 10.984 m (Mariana Çukuru)',
      sicaklik: 'Kutuplarda -1,4 °C, batı Ekvator\'da 30 °C',
      canlilar: 'Mavi balina, gri balina, dev mürekkep balığı, deniz samuru, Büyük Set Resifi\'ndeki binlerce mercan türü ve derin okyanus bacalarında güneş ışığı olmadan yaşayan canlılar.',
      akintiOzet: 'Kuzeyde sıcak Kuroshio, güneyde Doğu Avustralya ve soğuk Humboldt (Peru) akıntıları dev döngüler oluşturur; El Niño / La Niña salınımları tüm gezegenin iklimini etkiler.',
      tarih: 'Polinezyalı ustalar binlerce yıl boyunca yıldızlara ve dalgalara bakarak açık okyanusta Hawaii\'den Yeni Zelanda\'ya kadar adaları keşfetti; 1520\'de Macellan burayı geçip "Barışçıl" (Pacífico) adını verdi.',
      ilginc: 'Tüm kıtaların toplam yüzölçümünden daha geniştir ve çevresindeki "Ateş Çemberi"nde dünyadaki aktif yanardağların yaklaşık %75\'i yer alır.',
      w: 'Pacific Ocean'
    }
  ],

  // Sıcak (kırmızı-turuncu) ve soğuk (buz mavisi) başlıca okyanus akıntıları
  akintilar: [
    {
      id: 'gulfstream', ad: 'Gulf Stream (Körfez Akıntısı)', tip: 'sicak',
      hiz: 'Saatte ~9 km\'ye kadar (en hızlı akıntılardan)',
      pts: [[24, -82], [28, -79], [35, -74], [39, -64], [43, -46], [49, -28], [56, -12], [63, 2]],
      neden: 'Meksika Körfezi\'nden çıkan sıcak sular, rüzgârlar ve Dünya\'nın dönüşü (Coriolis etkisi) ile kuzeydoğuya, Avrupa\'ya doğru taşınır.',
      etki: 'Batı ve Kuzey Avrupa\'yı aynı enlemdeki Kanada\'ya göre kışın 5–10 °C daha ılık tutar; Norveç limanlarının kışın donmamasını sağlar.',
      dogaOnemi: 'Avrupa yılan balığı yavrularını Sargasso Denizi\'nden Avrupa nehirlerine taşır; deniz kaplumbağaları ve göçmen orkinoslar için sıcak bir okyanus otoyolu görevi görür ve mevsimsel göç takvimini tetikler.',
      ilginc: 'Taşıdığı su miktarı, dünyadaki tüm nehirlerin toplam debisinin yaklaşık 30 katıdır.',
      w: 'Gulf Stream'
    },
    {
      id: 'labrador', ad: 'Labrador Akıntısı', tip: 'soguk',
      hiz: 'Saatte ~1–2 km',
      pts: [[66, -61], [59, -59], [52, -53], [46, -50], [41, -54]],
      neden: 'Arktik Okyanusu ve Baffin Körfezi\'nin buz gibi suları Kanada\'nın doğu kıyısı boyunca güneye iner.',
      etki: 'Sıcak Gulf Stream ile Newfoundland açıklarında çarpışır; yoğun sisler ve dünyanın en bereketli balıkçılık alanlarından biri oluşur.',
      dogaOnemi: 'Oksijen ve mineralce zengin kutup sularını güneye taşıyarak plankton patlaması yaratır; yaz aylarında kambur ve mavi balinaları, fokları ve milyonlarca deniz kuşunu Newfoundland kıyılarına çeker.',
      ilginc: 'Grönland buzullarından kopan dev buzdağlarını güneye taşır; 1912\'de Titanik\'in çarptığı buzdağı da bu akıntıyla inmişti.',
      w: 'Labrador Current'
    },
    {
      id: 'kanarya', ad: 'Kanarya Akıntısı', tip: 'soguk',
      hiz: 'Saatte ~1 km',
      pts: [[41, -11], [34, -13], [27, -16], [19, -18], [13, -21]],
      neden: 'Kuzey Atlantik Döngüsü\'nün doğu kolu olarak serin kuzey sularını İberya ve Kuzeybatı Afrika boyunca güneye taşır.',
      etki: 'Sahra kıyılarında buharlaşmayı azaltarak kıyı çölleşmesini güçlendirir; dipten besin yüklü soğuk su çıkardığı için balıkçılığı zenginleştirir.',
      dogaOnemi: 'Derinden yüzeye çıkardığı besinlerle Batı Afrika kıyılarında dev sardalya sürüleri oluşturur; Akdeniz foku, yunuslar ve Atlantik\'i aşan deniz kaplumbağaları bu akıntıyla yol alır.',
      ilginc: '15. yüzyıldan itibaren Portekizli ve İspanyol gemileri Amerika\'ya giderken bu akıntı ve alize rüzgârlarından yararlandı.',
      w: 'Canary Current'
    },
    {
      id: 'brezilya', ad: 'Brezilya Akıntısı', tip: 'sicak',
      hiz: 'Saatte ~2–3 km',
      pts: [[-8, -33], [-16, -37], [-24, -42], [-33, -50], [-40, -54]],
      neden: 'Güney Ekvator Akıntısı Brezilya kıyılarına çarpınca güneye yönelerek sıcak bir kıyı akıntısı oluşturur.',
      etki: 'Brezilya\'nın güney kıyılarına ılık ve nemli hava taşır; güneyde soğuk Falkland Akıntısı ile karşılaşır.',
      dogaOnemi: 'Güneyde soğuk Falkland Akıntısı ile buluştuğu bölge (Arjantin açıkları) Güney Atlantik\'in en büyük beslenme alanına dönüşür; Macellan penguenleri ve güney gerçek balinaları göç zamanını bu su sıcaklığı değişimine göre ayarlar.',
      ilginc: 'Gulf Stream\'in güney yarımküredeki karşılığıdır ancak daha sığ ve daha zayıftır.',
      w: 'Brazil Current'
    },
    {
      id: 'benguela', ad: 'Benguela Akıntısı', tip: 'soguk',
      hiz: 'Saatte ~1–2 km',
      pts: [[-35, 16], [-27, 13], [-19, 11], [-11, 10]],
      neden: 'Güney Okyanusu\'nun soğuk suları Güney Afrika ve Namibya kıyıları boyunca kuzeye doğru akar.',
      etki: 'Kıyıda aşırı soğuk su ve yoğun sis oluşturur; Namib Çölü\'nün kurak kalmasının başlıca nedenlerinden biridir.',
      dogaOnemi: 'Kıyıdaki soğuk sis, Namib Çölü\'ndeki böcek ve bitkilerin tek su kaynağıdır; denizde ise dev sardalya göçünü besleyerek Afrika penguenleri, kürklü foklar ve balinalar için hayati bir besin zinciri kurar.',
      ilginc: 'Dipten yükselen soğuk sular bol plankton taşır; bu sayede Güney Afrika kıyılarında penguenler, foklar ve büyük beyaz köpekbalıkları yaşar.',
      w: 'Benguela Current'
    },
    {
      id: 'agulhas', ad: 'Agulhas Akıntısı', tip: 'sicak',
      hiz: 'Saatte ~7–9 km',
      pts: [[-14, 42], [-22, 37], [-30, 32], [-36, 23], [-38, 17]],
      neden: 'Hint Okyanusu\'nun sıcak suları Mozambik Kanalı\'ndan geçip Güney Afrika\'nın doğu kıyısını izleyerek güneybatıya hızlanır.',
      etki: 'Güney Afrika\'nın doğu kıyılarını ılık ve yağışlı yapar; Güney Okyanusu\'na çarpınca dev "Agulhas halkaları" hâlinde sıcak suyu Atlas Okyanusu\'na sızdırır.',
      dogaOnemi: 'Her kış kıyıya sokulan soğuk su koridoruyla etkileşerek milyonlarca balığın katıldığı ünlü "Güney Afrika Sardalya Göçü"nü başlatır; yunuslar, köpekbalıkları ve sümsük kuşları bu akıntı takvimini izler.',
      ilginc: 'Ters yönden esen güney fırtınalarıyla çarpıştığında 25–30 metrelik "dev haydut dalgalar" (rogue waves) üretebilir.',
      w: 'Agulhas Current'
    },
    {
      id: 'kuroshio', ad: 'Kuroshio (Kara Akıntı)', tip: 'sicak',
      hiz: 'Saatte ~5–8 km',
      pts: [[16, 124], [24, 124], [30, 130], [35, 141], [39, 155], [41, 172]],
      neden: 'Pasifik\'in sıcak Ekvator suları Filipinler ve Tayvan\'dan kuzeye yönelip Japonya kıyısı boyunca hızla akar.',
      etki: 'Japonya\'nın güney kıyılarını ılıtır ve mercan resiflerinin dünyanın en kuzey noktalarından birinde yaşamasını sağlar.',
      dogaOnemi: 'Kuzeyde soğuk Oyashio Akıntısı ile buluştuğunda Pasifik\'in en zengin balık ve kalamar sofrası kurulur; mavi yüzgeçli orkinoslar ve genç deniz kaplumbağaları bu akıntıyı göç koridoru olarak kullanır.',
      ilginc: 'Adı Japoncada "Kara Akıntı" demektir; planktonca fakir ama çok berrak olduğu için uzaktan koyu lacivert görünür.',
      w: 'Kuroshio Current'
    },
    {
      id: 'humboldt', ad: 'Humboldt (Peru) Akıntısı', tip: 'soguk',
      hiz: 'Saatte ~1–2 km',
      pts: [[-44, -76], [-34, -74], [-22, -72], [-12, -79], [-2, -84]],
      neden: 'Antarktika\'dan gelen soğuk sular Şili ve Peru kıyıları boyunca Ekvator\'a doğru yükselir.',
      etki: 'Dünyanın en kurak çölü olan Atakama Çölü\'nün oluşmasında büyük rol oynar; aynı zamanda dünyanın en zengin balıkçılık sularını yaratır.',
      dogaOnemi: 'Dünyadaki deniz balıkçılığının ~%18\'ini tek başına besleyen dev hamsi sürülerini yaratır; Galápagos penguenleri, deniz iguanaları ve pelikan kolonileri hayatta kalmak için bu akıntının getirdiği besine bağımlıdır.',
      ilginc: 'Ekvator\'a bu kadar yakın olan Galápagos Adaları\'nda penguenlerin yaşayabilmesinin sırrı bu soğuk akıntıdır!',
      w: 'Humboldt Current'
    },
    {
      id: 'doguavustralya', ad: 'Doğu Avustralya Akıntısı', tip: 'sicak',
      hiz: 'Saatte ~5–7 km',
      pts: [[-14, 148], [-22, 154], [-30, 155], [-38, 151]],
      neden: 'Mercan Denizi\'nin sıcak tropikal suları Avustralya\'nın doğu kıyısı boyunca güneye doğru akar.',
      etki: 'Büyük Set Resifi\'nden Sidney\'e kadar tropikal deniz canlılarını güneye taşır ve doğu kıyılarını ılıtır.',
      dogaOnemi: 'Mercan larvalarını ve yavru tropikal balıkları güneye taşıyarak kıyı resiflerini yeniler; kambur balinalar güneye Antarktika\'ya dönerken akıntının hızından yararlanır.',
      ilginc: 'Animasyon filmi "Kayıp Balık Nemo"da deniz kaplumbağalarının yolculuk ettiği ünlü "EAC" otoyolu tam olarak bu akıntıdır.',
      w: 'East Australian Current'
    },
    {
      id: 'acc', ad: 'Antarktika Çevresi Akıntısı (ACC)', tip: 'soguk',
      hiz: 'Saatte ~2–4 km (dev hacim)',
      pts: [[-56, -70], [-54, -30], [-52, 15], [-54, 70], [-56, 130], [-57, 175]],
      neden: 'Güney Okyanusu\'nda karaların engellemediği batı rüzgârları suyu kesintisiz doğuya sürükler.',
      etki: 'Sıcak suların Antarktika kıyılarına ulaşmasını engelleyerek kıtanın dev buz tabakasını korur ve üç büyük okyanusu birbirine bağlar.',
      dogaOnemi: 'Derin okyanusun besin ve oksijenini tüm gezegene pompalayan "küresel taşıyıcı bant"ın motorudur; milyarlarca ton Antarktika krilini besleyerek mavi balinaların, penguenlerin ve albatrosların göç döngüsünü ayakta tutar.',
      ilginc: 'Saniyede ~130 milyon metreküp su taşır — dünyadaki tüm nehirlerin toplamının yaklaşık 100 katıdır.',
      w: 'Antarctic Circumpolar Current'
    }
  ],

  // Girdaplar ve sürekli fırtına/kasırga alanları
  olaylar: [
    {
      id: 'naruto', ad: 'Naruto Girdapları', tip: 'girdap', ll: [34.23, 134.65],
      yer: 'Naruto Boğazı, Japonya',
      neden: 'Pasifik Okyanusu ile Seto İç Denizi arasındaki gelgit seviye farkı 1,5 metreyi bulunca dar boğazdan saatte 20 km hızla su boşalır.',
      etki: 'Bahar gelgitlerinde çapı 20 metreye ulaşan görkemli su girdapları oluşur; her 6 saatte bir yön değiştirir.',
      ilginc: 'Japon ressam Hiroşige\'nin ünlü tahta baskılarına ilham vermiş, günümüzde cam tabanlı gözlem köprüsünden izlenmektedir.',
      w: 'Naruto whirlpools'
    },
    {
      id: 'saltstraumen', ad: 'Saltstraumen Girdabı', tip: 'girdap', ll: [67.23, 14.61],
      yer: 'Bodø yakını, Norveç',
      neden: 'Her 6 saatte bir 400 milyon metreküp deniz suyu yalnızca 150 metre genişliğindeki sığ boğazdan geçmeye çalışır.',
      etki: 'Dünyanın bilinen en güçlü gelgit akıntısını (saatte ~40 km) ve çapı 10 metreyi bulan derin girdapları yaratır.',
      ilginc: 'Aşırı hareketli ve oksijenli sular nedeniyle bölgede 10.000 yıldır insanlar balıkçılık yapmaktadır.',
      w: 'Saltstraumen'
    },
    {
      id: 'maelstrom', ad: 'Lofoten Maelstrom (Moskstraumen)', tip: 'girdap', ll: [67.80, 12.82],
      yer: 'Lofoten Adaları, Norveç',
      neden: 'Açık okyanus gelgitleri, Lofoten adaları arasındaki dik denizaltı sırtlarına çarpınca güçlü dönel akıntılar doğar.',
      etki: 'Kış fırtınalarıyla birleştiğinde küçük tekneler için çok tehlikeli anaforlar oluşturur.',
      ilginc: 'Edgar Allan Poe ve Jules Verne\'in ("Denizler Altında Yirmi Bin Fersah") ünlü öykülerine konu olmuştur.',
      w: 'Moskstraumen'
    },
    {
      id: 'pasifikdongu', ad: 'Kuzey Pasifik Girdabı (Döngüsü)', tip: 'girdap', ll: [35.0, -145.0],
      yer: 'Kuzey Pasifik Okyanusu',
      neden: 'Kuroshio, Kuzey Pasifik, Kaliforniya ve Ekvator akıntıları birleşerek saat yönünde dönen kıta büyüklüğünde bir döngü oluşturur.',
      etki: 'Döngünün sakin merkezinde rüzgârlar azalır ve okyanusa karışan yüzen nesneler burada toplanır.',
      ilginc: 'İnsan kaynaklı plastik atıkların biriktiği "Büyük Pasifik Çöp Alanı" bu dev doğal döngünün içinde yer alır.',
      w: 'North Pacific Gyre'
    },
    {
      id: 'sargasso', ad: 'Sargasso Denizi (Atlantik Döngüsü)', tip: 'girdap', ll: [28.0, -66.0],
      yer: 'Kuzey Atlas Okyanusu',
      neden: 'Dört büyük Atlantik akıntısı (Gulf Stream, Kuzey Atlantik, Kanarya, Kuzey Ekvator) ortada dev bir saat yönü döngüsü çevirir.',
      etki: 'Kıyısı olmayan dünyadaki tek denizdir; sınırlarını kara değil, etrafındaki akıntılar çizer.',
      ilginc: 'Yüzeyini altın renkli Sargassum yosunları kaplar; Avrupa ve Amerika\'daki yılan balıkları yumurtlamak için binlerce km yüzüp buraya gelir.',
      w: 'Sargasso Sea'
    },
    {
      id: 'karayipkasirga', ad: 'Atlantik & Karayip Kasırga Kuşağı', tip: 'firtina', ll: [19.5, -67.0],
      yer: 'Karayipler ve Batı Atlas Okyanusu',
      neden: '27 °C\'nin üstündeki sıcak okyanus suları, Afrika kıyılarından gelen tropikal dalgalara dev bir buhar enerjisi pompalar.',
      etki: 'Haziran–Kasım arasında saatte 250 km\'yi aşan rüzgârlara sahip kasırgalar üretir.',
      ilginc: 'Tarihte İspanyol hazine filolarının ve sömürge limanlarının kaderini defalarca bu kasırgalar belirledi.',
      w: 'Atlantic hurricane'
    },
    {
      id: 'tayfunkusagi', ad: 'Batı Pasifik Tayfun Kuşağı', tip: 'firtina', ll: [18.0, 134.0],
      yer: 'Filipinler – Japonya açıkları',
      neden: 'Dünyanın en geniş sıcak su havuzu olan Batı Pasifik, yıl boyu çok yüksek nem ve sıcaklık sağlar.',
      etki: 'Dünyadaki en sık ve en şiddetli tropikal fırtınalar (tayfunlar) burada doğar.',
      ilginc: '1274 ve 1281\'de Kubilay Han\'ın Japonya\'ya gönderdiği dev Moğol donanmalarını dağıtan fırtınalara Japonlar "Kamikaze" (ilahi rüzgâr) adını verdi.',
      w: 'Pacific typhoon season'
    },
    {
      id: 'hornburnu', ad: 'Horn Burnu Fırtına Geçidi', tip: 'firtina', ll: [-56.2, -67.3],
      yer: 'Güney Amerika\'nın en güney ucu (Drake Geçidi)',
      neden: 'And Dağları ve Antarktika Yarımadası arasındaki dar geçit, batı rüzgârlarını ve Antarktika akıntısını huni gibi sıkıştırır.',
      etki: 'Yılın yaklaşık 300 günü fırtına, dev dalgalar ve buzdağları görülür; denizciliğin "Everest"i sayılır.',
      ilginc: '1914\'te Panama Kanalı açılana kadar iki okyanus arasında geçen gemilerin yüzlercesi burada battı.',
      w: 'Cape Horn'
    },
    {
      id: 'kukreyenkirklar', ad: 'Kükreyen Kırklar (Roaring Forties)', tip: 'firtina', ll: [-45.0, 48.0],
      yer: '40°–50° Güney enlemleri',
      neden: 'Güney yarımkürede bu enlemlerde rüzgârı yavaşlatacak neredeyse hiç kara parçası yoktur.',
      etki: 'Batıdan doğuya durmaksızın esen sert rüzgârlar ve 10–15 metrelik okyanus soluğanları yaratır.',
      ilginc: '17. yüzyılda Hollandalı denizciler ("Brouwer Rotası") bu fırtına kuşağına girerek Avrupa\'dan Endonezya\'ya gidiş süresini yarıya indirdi.',
      w: 'Roaring Forties'
    },
    {
      id: 'musonsiklon', ad: 'Bengal Körfezi Siklon & Muson Alanı', tip: 'firtina', ll: [15.0, 88.5],
      yer: 'Bengal Körfezi, Hint Okyanusu',
      neden: 'Çok sıcak ve sığ körfez suları, Himalayalar\'a çarpan yaz musonlarıyla birleşince yoğun fırtına sistemleri besler.',
      etki: 'Hindistan, Bangladeş ve Myanmar kıyılarında şiddetli siklonlar ve dünyanın en bol muson yağışları görülür.',
      ilginc: 'Himalayalar\'ın eteğindeki Mawsynram, bu körfezden gelen nem sayesinde dünyanın en çok yağış alan yerleşim yeridir.',
      w: 'North Indian Ocean tropical cyclone'
    }
  ]
};
