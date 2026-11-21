// 🌋 Tektonik Fay Kuşakları (Ateş Çemberi) ve Ünlü Yanardağlar (Katmanlar → Doğa → Yanardağlar)
'use strict';
window.ATLAS_VOLKANLAR = {
  faylar: [
    {
      id: 'ates-bati', ad: 'Pasifik Ateş Çemberi (Batı Kolu)',
      ozet: 'Yeni Zelanda\'dan Endonezya, Filipinler, Japonya ve Kamçatka\'ya uzanan bu kuşak, dünyadaki aktif yanardağların ve büyük depremlerin yaklaşık %75\'ine ev sahipliği yapar.',
      pts: [[-42, 173], [-30, 179], [-18, 175], [-8, 125], [-6, 106], [4, 126], [15, 121], [25, 123], [35, 140], [44, 147], [55, 161], [54, 178]]
    },
    {
      id: 'ates-dogu', ad: 'Pasifik Ateş Çemberi (Doğu Kolu)',
      ozet: 'Alaska\'dan Kuzey Amerika batı kıyısına, Meksika\'ya ve And Dağları boyunca Şili\'ye inen dev okyanus-kıta çarpışma kuşağıdır.',
      pts: [[55, -162], [58, -140], [47, -124], [36, -121], [20, -104], [10, -85], [0, -79], [-16, -72], [-34, -71], [-50, -74]]
    },
    {
      id: 'alp-himalaya', ad: 'Alp–Anadolu–Himalaya Deprem Kuşağı',
      ozet: 'Afrika, Arap ve Hint plakalarının Avrasya\'ya kuzeyden çarpmasıyla oluşan bu kuşak Akdeniz, Anadolu, İran ve Himalayalar boyunca uzanır.',
      pts: [[37, -6], [38, 15], [38, 25], [40.8, 30], [39.5, 40], [34, 48], [30, 62], [32, 76], [28, 86], [22, 95]]
    },
    {
      id: 'atlantik-sirt', ad: 'Orta Atlantik Sırtı',
      ozet: 'Atlas Okyanusu\'nun tam ortasından geçen 16.000 km\'lik sualtı dağ sırasıdır; plakalar burada birbirinden ayrılır ve okyanus tabanı sürekli yenilenir. İzlanda bu sırtın su üstüne çıktığı yerdir.',
      pts: [[65, -18], [52, -32], [38, -28], [22, -45], [5, -32], [-15, -14], [-38, -16], [-52, -5]]
    }
  ],
  volkanlar: [
    {
      id: 'vezuv', ad: 'Vezüv Yanardağı', ll: [40.82, 14.43], ulke: 'İtalya', yukseklik: '1.281 m', durum: 'Aktif',
      patlama: 'MS 79 — Pompeii ve Herculaneum\'u 6 metre kül altına gömdü.',
      ozet: 'Napoli Körfezi\'ne bakan Vezüv, Avrupa anakarasında son 100 yılda patlamış tek aktif yanardağdır. MS 79 patlaması Roma günlük yaşamını bir zaman kapsülü gibi korudu.',
      ilginc: 'Patlamayı bizzat izleyip mektuplarıyla anlatan Genç Plinius\'un adı, günümüzde yüksek kül sütunlu patlamalara ("Plinius tipi") verilmiştir.',
      w: 'Mount Vesuvius'
    },
    {
      id: 'etna', ad: 'Etna Yanardağı', ll: [37.75, 14.99], ulke: 'İtalya (Sicilya)', yukseklik: '3.357 m', durum: 'Çok Aktif',
      patlama: 'Neredeyse her yıl lav ve kül püskürtür; en büyük tarihî patlaması 1669\'dur.',
      ozet: 'Avrupa\'nın en yüksek ve en aktif yanardağıdır. Volkanik külün zenginleştirdiği yamaçlarında Sicilya\'nın en verimli üzüm bağları ve fıstık bahçeleri yetişir.',
      ilginc: 'Antik Yunan mitolojisinde ateş tanrısı Hephaistos\'un demirci atölyesinin Etna\'nın altında olduğuna inanılırdı.',
      w: 'Mount Etna'
    },
    {
      id: 'santorini', ad: 'Santorini (Thera) Kalderası', ll: [36.40, 25.40], ulke: 'Yunanistan (Ege Denizi)', yukseklik: '367 m', durum: 'Uyuyan / Aktif Sistem',
      patlama: 'MÖ ~1600 — İnsanlık tarihinin en şiddetli patlamalarından biri (Minos Patlaması).',
      ozet: 'Adanın ortasını tamamen uçurup dev bir deniz kalderası bırakan MÖ 1600 patlaması, Doğu Akdeniz\'de dev tsunamiler yaratıp Girit\'teki Minos uygarlığını sarstı.',
      ilginc: 'Birçok tarihçi Platon\'un anlattığı "tek günde sulara gömülen Atlantis" efsanesinin bu patlamadan doğduğunu düşünür.',
      w: 'Santorini caldera'
    },
    {
      id: 'agri', ad: 'Ağrı Dağı', ll: [39.70, 44.30], ulke: 'Türkiye', yukseklik: '5.137 m', durum: 'Uyuyan Volkan',
      patlama: 'Son büyük volkanik/freatik hareketi 1840 yılında kaydedildi.',
      ozet: 'Türkiye\'nin en yüksek zirvesi olan Ağrı Dağı, Büyük ve Küçük Ağrı konilerinden oluşan dev bir stratovolkandır; tepesi yıl boyu kalıcı buzulla kaplıdır.',
      ilginc: 'Efsanelerde Nuh\'un Gemisi\'nin tufan sonrası oturduğu dağ olarak anılır ve binlerce yıldır gezginlerin ilgisini çeker.',
      w: 'Mount Ararat'
    },
    {
      id: 'erciyes', ad: 'Erciyes Dağı', ll: [38.53, 35.45], ulke: 'Türkiye (Kayseri)', yukseklik: '3.917 m', durum: 'Sönmüş / Uyuyan',
      patlama: 'Milyonlarca yıl önceki patlamalarıyla Kapadokya\'nın tüf tabakalarını oluşturdu.',
      ozet: 'İç Anadolu\'nun en yüksek dağı olan Erciyes, Hasan Dağı ile birlikte püskürttüğü kalın volkanik küller sayesinde bugün Kapadokya\'nın peribacalarının doğmasını sağladı.',
      ilginc: 'Antik Roma sikkelerinin üzerinde Erciyes (Argaeus) zirvesinden alev çıkan kutsal bir dağ olarak resmedilmiştir.',
      w: 'Mount Erciyes'
    },
    {
      id: 'fuji', ad: 'Fuji Dağı', ll: [35.36, 138.73], ulke: 'Japonya', yukseklik: '3.776 m', durum: 'Uyuyan Aktif Volkan',
      patlama: 'Son patlaması 1707\'de (Hoei Patlaması) gerçekleşti; Tokyo\'ya kadar kül yağdı.',
      ozet: 'Kusursuz simetrik konisiyle Japonya\'nın en ünlü simgesi ve en yüksek dağıdır; üç tektonik plakanın kesiştiği nadir bir noktada yükselir.',
      ilginc: 'Ressam Hokusai\'nin "Fuji Dağı\'nın 36 Manzarası" serisi dünya sanat tarihinin en tanınan eserlerindendir.',
      w: 'Mount Fuji'
    },
    {
      id: 'krakatoa', ad: 'Krakatoa (Anak Krakatau)', ll: [-6.10, 105.42], ulke: 'Endonezya', yukseklik: '155 m (yeni koni)', durum: 'Çok Aktif',
      patlama: '1883 — Modern tarihin en gürültülü patlaması (4.800 km öteden duyuldu!).',
      ozet: '1883 patlaması adanın üçte ikisini yok etti, 30 metrelik tsunamiler yarattı ve atmosfere saçılan küller yüzünden tüm dünyada 1 yıl boyunca gün batımları kıpkırmızı göründü.',
      ilginc: 'Edvard Munch\'un ünlü "Çığlık" tablosundaki kan kırmızısı gökyüzünün 1883 Krakatoa küllerinden esinlendiği düşünülür.',
      w: 'Krakatoa'
    },
    {
      id: 'tambora', ad: 'Tambora Yanardağı', ll: [-8.25, 118.00], ulke: 'Endonezya', yukseklik: '2.850 m', durum: 'Aktif',
      patlama: '1815 — Son 10.000 yılın en büyük patlaması; 1816\'yı "Yazsız Yıl" yaptı.',
      ozet: '1815\'te 1.400 metre yüksekliğini kaybedecek kadar şiddetli patladı; küresel sıcaklığı düşürüp 1816 yazında Avrupa ve Amerika\'da kar yağmasına yol açtı.',
      ilginc: '1816\'nın karanlık ve yağmurlu yazında eve kapanan Mary Shelley, can sıkıntısından edebiyat tarihinin klasiği "Frankenstein"ı yazdı!',
      w: 'Mount Tambora'
    },
    {
      id: 'pinatubo', ad: 'Pinatubo Yanardağı', ll: [15.14, 120.35], ulke: 'Filipinler', yukseklik: '1.486 m', durum: 'Aktif',
      patlama: '1991 — 20. yüzyılın en büyük ikinci patlaması; Dünya\'yı 0,5 °C soğuttu.',
      ozet: '600 yıl uyuduktan sonra 1991\'de patlayarak stratosfere 20 milyon ton kükürt dioksit gönderdi; erken uyarı sayesinde on binlerce insanın hayatı kurtarıldı.',
      ilginc: 'Patlama sonrası kraterde biriken yağmur suları turkuaz renkli muhteşem bir krater gölü oluşturdu.',
      w: 'Mount Pinatubo'
    },
    {
      id: 'eyjafjallajokull', ad: 'Eyjafjallajökull', ll: [63.63, -19.62], ulke: 'İzlanda', yukseklik: '1.651 m', durum: 'Aktif',
      patlama: '2010 — Kül bulutu Avrupa\'da 100.000\'den fazla uçuşu durdurdu.',
      ozet: 'Orta Atlantik Sırtı üzerinde, kalın bir buzulun altında yer alan yanardağ 2010\'da patlayınca buzla temas eden magma çok ince cam tozuna dönüşüp Avrupa gökyüzünü kapladı.',
      ilginc: '2010\'da dünya genelinde haber spikerlerinin telaffuz etmekte en çok zorlandığı yer adı olarak tarihe geçti.',
      w: 'Eyjafjallajökull'
    },
    {
      id: 'yellowstone', ad: 'Yellowstone Süpervolkanı', ll: [44.43, -110.59], ulke: 'ABD', yukseklik: '2.805 m', durum: 'Aktif Jeotermal Sistem',
      patlama: 'Son süper patlaması 640.000 yıl önce oldu; bugün gayzerleriyle nefes alıyor.',
      ozet: 'Klasik bir dağ konisi değil, 70 km genişliğinde dev bir kalderadır. Altındaki dev magma odası dünyadaki tüm gayzerlerin yarısından fazlasını (Old Faithful gibi) ısıtır.',
      ilginc: 'Grand Prismatic Spring\'in gökkuşağı renklerini, kaynar suda yaşayabilen ısıya dayanıklı bakteriler (termofiller) oluşturur.',
      w: 'Yellowstone Caldera'
    },
    {
      id: 'kilauea', ad: 'Kīlauea Yanardağı', ll: [19.41, -155.29], ulke: 'ABD (Hawaii)', yukseklik: '1.247 m', durum: 'Dünyanın En Aktiflerinden',
      patlama: '1983\'ten 2018\'e kadar 35 yıl neredeyse kesintisiz lav akıttı.',
      ozet: 'Pasifik Okyanusu\'nun ortasındaki sıcak nokta (hotspot) üzerinde yükselen kalkan yanardağıdır; patlayıcı kül yerine akışkan lav nehirleriyle adayı büyütür.',
      ilginc: 'Okyanusa dökülen lavlar soğuyarak Hawaii Adası\'na son 40 yılda yüzlerce hektar yeni kara ekledi.',
      w: 'Kīlauea'
    },
    {
      id: 'sthelens', ad: 'Mount St. Helens', ll: [46.20, -122.18], ulke: 'ABD (Washington)', yukseklik: '2.549 m', durum: 'Aktif',
      patlama: '1980 — Dağın kuzey yamacı dev bir heyelanla yana doğru patladı.',
      ozet: '1980 patlaması, volkan bilimcilerin canlı izleyip belgelediği en kapsamlı modern patlamadır ve doğanın kül çölünden nasıl yeniden canlandığını gösteren açık hava laboratuvarıdır.',
      ilginc: 'Patlama sırasında dağın yüksekliği tek bir günde yaklaşık 400 metre azaldı.',
      w: 'Mount St. Helens'
    },
    {
      id: 'kilimanjaro', ad: 'Kilimanjaro Dağı', ll: [-3.07, 37.35], ulke: 'Tanzanya', yukseklik: '5.895 m', durum: 'Uyuyan Volkan',
      patlama: 'Son büyük faaliyeti yaklaşık 360.000 yıl önce yaşandı.',
      ozet: 'Afrika\'nın en yüksek zirvesi ve dünyanın en yüksek serbest duran (sıradağa bağlı olmayan) dağıdır; Doğu Afrika Rift Vadisi\'nin tektonik ayrılmasıyla yükselmiştir.',
      ilginc: 'Ekvator\'un hemen yanında olmasına rağmen 5.895 metrelik zirvesinde kar ve buzullar bulunur.',
      w: 'Mount Kilimanjaro'
    },
    {
      id: 'popocatepetl', ad: 'Popocatépetl', ll: [19.02, -98.62], ulke: 'Meksika', yukseklik: '5.426 m', durum: 'Çok Aktif',
      patlama: '1994\'ten beri sık sık duman, gaz ve kül püskürtür.',
      ozet: 'Meksiko City\'den yalnızca 70 km uzaklıktaki dev stratovolkandır; Aztek dilinde (Nahuatl) adı "Tüten Dağ" anlamına gelir.',
      ilginc: 'Milyonlarca insanın yaşadığı başkent metropolüne bu kadar yakın olup hâlâ aktif kalan dünyadaki en büyük yanardağlardan biridir.',
      w: 'Popocatépetl'
    },
    {
      id: 'cotopaxi', ad: 'Cotopaxi Yanardağı', ll: [-0.68, -78.44], ulke: 'Ekvador', yukseklik: '5.897 m', durum: 'Aktif',
      patlama: '1738\'den beri 50\'den fazla patlama kaydedildi; 2022–2023\'te yeniden hareketlendi.',
      ozet: 'And Dağları\'nda karla kaplı kusursuz konisiyle dünyanın en yüksek aktif yanardağlarından biridir.',
      ilginc: 'Ekvator çizgisine çok yakın olduğu için zirvesindeki buzul dünyada Ekvator\'a en yakın kalıcı buzullardan biridir.',
      w: 'Cotopaxi'
    }
  ]
};
