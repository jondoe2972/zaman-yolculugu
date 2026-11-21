// ⚓ Dünya Çapındaki Önemli Tarihî ve Modern Limanlar (Katmanlar → Limanlar)
'use strict';
window.ATLAS_LIMANLAR = [
  {
    id: 'istanbul', ad: 'İstanbul Limanı (Haliç & Boğaz)', ll: [41.02, 28.98], ulke: 'Türkiye', rol: 'Tarihî & Boğaz Kavşağı',
    kurulus: 'MÖ 667 – Bugün',
    ozet: 'Karadeniz ile Akdeniz\'i birbirine bağlayan doğal Haliç sığınağı sayesinde 2.700 yıldır Avrupa ve Asya arasındaki en kritik deniz kapılarından biridir.',
    ticaret: 'Bizans ve Osmanlı dönemlerinde Karadeniz tahılı, İpek Yolu malları ve Akdeniz zeytinyağı buradan dağılırdı; bugün kruvaziyer ve bölgesel deniz ticareti sürer.',
    ilginc: 'Bizans döneminde düşman gemilerini durdurmak için Haliç\'in ağzına Sarayburnu\'ndan Galata\'ya kadar dev bir demir zincir gerilirdi.',
    w: 'Port of Istanbul'
  },
  {
    id: 'iskenderiye', ad: 'İskenderiye Limanı', ll: [31.20, 29.88], ulke: 'Mısır', rol: 'Antik & Akdeniz Merkezi',
    kurulus: 'MÖ 331 – Bugün',
    ozet: 'Büyük İskender\'in kurduğu ve Antik Dünyanın Yedi Harikası\'ndan İskenderiye Feneri\'nin aydınlattığı liman, yüzyıllarca Akdeniz\'in en zengin ticaret kapısı oldu.',
    ticaret: 'Antik çağda Roma\'yı besleyen Nil tahılı ve papirüs, Orta Çağ\'da Hint baharatları, günümüzde Mısır\'ın dış ticaretinin yarısından fazlası buradan geçer.',
    ilginc: 'Limanın hemen yanındaki ünlü İskenderiye Kütüphanesi için limana giren her gemideki kitaplara el konulup kopyası çıkarılır, aslı kütüphanede saklanırdı.',
    w: 'Port of Alexandria'
  },
  {
    id: 'venedik', ad: 'Venedik Limanı', ll: [45.43, 12.33], ulke: 'İtalya', rol: 'Orta Çağ Deniz Cumhuriyeti',
    kurulus: 'MS 697 – Bugün',
    ozet: 'Adriyatik\'in sığ lagününde kurulan Venedik, Orta Çağ ve Rönesans boyunca Doğu Akdeniz ile Avrupa arasındaki baharat ve ipek ticaretinin kalbiydi.',
    ticaret: 'Baharat, ipek, Murano camı, tuz ve gemi inşası (Arsenale tersanesi).',
    ilginc: 'Venedik\'in dev tersanesi "Arsenale", 16. yüzyılda sanayi devriminden 250 yıl önce seri montaj hattı mantığıyla günde bir savaş gemisi üretebiliyordu.',
    w: 'Port of Venice'
  },
  {
    id: 'rotterdam', ad: 'Rotterdam Limanı', ll: [51.92, 4.48], ulke: 'Hollanda', rol: 'Avrupa\'nın En Büyük Limanı',
    kurulus: 'MS 1340 – Bugün',
    ozet: 'Ren ve Maas nehirlerinin Kuzey Denizi\'ne döküldüğü noktada yer alan Rotterdam, 40 kilometreden uzun rıhtımlarıyla Avrupa\'nın ana ticaret kapısıdır.',
    ticaret: 'Konteyner taşımacılığı, ham petrol ve yakıt, kimyasallar, tahıl ve Almanya/Avrupa sanayisinin tüm hammaddeleri.',
    ilginc: '1962\'den 2004\'e kadar 42 yıl boyunca kesintisiz olarak dünyanın en yoğun limanı unvanını taşıdı; bugün pek çok terminali tamamen insansız robot vinçlerle çalışır.',
    w: 'Port of Rotterdam'
  },
  {
    id: 'hamburg', ad: 'Hamburg Limanı', ll: [53.54, 9.98], ulke: 'Almanya', rol: 'Hansa & Kuzey Avrupa Kapısı',
    kurulus: 'MS 1189 – Bugün',
    ozet: 'Kuzey Denizi\'nden 100 km içeride, Elbe Nehri üzerinde kurulu olmasına rağmen gelgit kanalları sayesinde dev okyanus gemilerini ağırlayan "Almanya\'nın Dünyaya Açılan Kapısı".',
    ticaret: 'Kahve, çay, baharat (tarihî Speicherstadt depoları), makine, otomotiv ve konteyner.',
    ilginc: 'Limandaki Speicherstadt, su kanalları üzerine meşe kazıklarla inşa edilmiş dünyanın en büyük tarihî antrepo kompleksidir ve UNESCO Dünya Mirası\'dır.',
    w: 'Port of Hamburg'
  },
  {
    id: 'londra', ad: 'Londra Limanı (Thames)', ll: [51.50, 0.05], ulke: 'Birleşik Krallık', rol: 'İmparatorluk & Finans Limanı',
    kurulus: 'MS 50 – Bugün',
    ozet: 'Romalılar tarafından kurulan ve 19. yüzyılda Britanya İmparatorluğu\'nun kalbi olan liman, bir dönem dünyadaki deniz ticaretinin en büyük buluşma noktasıydı.',
    ticaret: 'Tarihte çay, şeker, baharat, yün ve kömür; bugün konteyner ve enerji ürünleri.',
    ilginc: 'Dünyanın en ünlü deniz sigortacılığı kurumu Lloyd\'s of London, 17. yüzyılda liman yakınındaki bir kahvehanede tüccarların gemi haberlerini paylaşmasıyla doğdu.',
    w: 'Port of London'
  },
  {
    id: 'lizbon', ad: 'Lizbon Limanı (Tejo)', ll: [38.70, -9.14], ulke: 'Portekiz', rol: 'Coğrafi Keşifler Başlangıç Noktası',
    kurulus: 'MÖ 1200 – Bugün',
    ozet: 'Tejo Nehri\'nin Atlas Okyanusu\'yla buluştuğu doğal koyda yer alan Lizbon, Vasco da Gama ve Portekiz kâşiflerinin okyanuslara açıldığı limandır.',
    ticaret: '16. yüzyılda Hindistan baharatları, Çin porseleni ve Brezilya altını; günümüzde Atlantik konteyner ve yolcu taşımacılığı.',
    ilginc: 'Vasco da Gama\'nın Hindistan\'a açıldığı noktada inşa edilen Belém Kulesi, limanın girişini koruyan tarihî bir deniz kalesiydi.',
    w: 'Port of Lisbon'
  },
  {
    id: 'marsilya', ad: 'Marsilya Limanı', ll: [43.30, 5.36], ulke: 'Fransa', rol: 'Batı Akdeniz\'in En Eski Limanı',
    kurulus: 'MÖ 600 – Bugün',
    ozet: 'Anadolu\'nun Foça (Phokaia) kentinden gelen denizcilerin MÖ 600\'de kurduğu Marsilya, Fransa\'nın en büyük ve Akdeniz\'in en köklü limanlarından biridir.',
    ticaret: 'Zeytinyağı, sabun, şarap, Akdeniz–Kuzey Afrika deniz yolu ve petrol/konteyner.',
    ilginc: 'Marsilya\'yı kuran Foçalı denizciler, Güney Fransa\'ya ilk zeytin ağaçlarını ve üzüm bağlarını da yanlarında getirmişti.',
    w: 'Grand port maritime de Marseille'
  },
  {
    id: 'pire', ad: 'Pire Limanı', ll: [37.94, 23.64], ulke: 'Yunanistan', rol: 'Ege & Akdeniz Aktarma Üssü',
    kurulus: 'MÖ 493 – Bugün',
    ozet: 'Antik Atina\'nın donanma ve ticaret limanı olarak kurulan Pire, günümüzde Avrupa\'nın en yoğun yolcu ve Doğu Akdeniz\'in en büyük konteyner limanlarındandır.',
    ticaret: 'Antik çağda zeytinyağı, seramik ve Karadeniz tahılı; bugün Asya–Avrupa konteyner aktarması ve Ege adaları feribot ağı.',
    ilginc: 'Antik Atina, kuşatma altında bile denize erişimini kaybetmemek için şehirden Pire Limanı\'na kadar 6 km uzunluğunda çift "Uzun Surlar" inşa etmişti.',
    w: 'Port of Piraeus'
  },
  {
    id: 'sanghay', ad: 'Şanghay Limanı', ll: [31.23, 121.50], ulke: 'Çin', rol: 'Dünyanın En Yoğun Konteyner Limanı',
    kurulus: 'MS 1074 – Bugün',
    ozet: 'Yangtze Nehri\'nin Doğu Çin Denizi\'ne döküldüğü yerde kurulu Şanghay, açık denizdeki Yangshan Adası terminaliyle yılda 49 milyondan fazla konteyner işler.',
    ticaret: 'Elektronik, makine, elektrikli araçlar, tekstil ve Çin\'in tüm Yangtze havzası üretimi.',
    ilginc: 'Limanın Yangshan terminali, anakaraya okyanus üzerinden geçen 32,5 kilometre uzunluğundaki dev Donghai Köprüsü ile bağlanır.',
    w: 'Port of Shanghai'
  },
  {
    id: 'singapur', ad: 'Singapur Limanı', ll: [1.26, 103.82], ulke: 'Singapur', rol: 'Küresel Aktarma Süper Kavşağı',
    kurulus: 'MS 1819 – Bugün',
    ozet: 'Hint Okyanusu ile Büyük Okyanus arasındaki dar Malakka Boğazı\'nın ucunda yer alan Singapur, dünyanın en büyük aktarma (transshipment) limanıdır.',
    ticaret: 'Dünyadaki konteynerlerin yaklaşık beşte biri ve ham petrol sevkiyatının yarısına yakını bu boğazdan geçer.',
    ilginc: 'Herhangi bir anda Singapur açıklarında ortalama 1.000\'den fazla dev yük gemisi demirlemiş ya da sırasını bekliyor olur.',
    w: 'Port of Singapore'
  },
  {
    id: 'hongkong', ad: 'Hong Kong Limanı (Victoria)', ll: [22.29, 114.16], ulke: 'Çin (Hong Kong)', rol: 'Derin Doğal Liman & Finans Kapısı',
    kurulus: 'MS 1841 – Bugün',
    ozet: 'Tayfunlara karşı korunaklı derin doğal koyu sayesinde 19. yüzyıldan beri Güney Çin ile Batı dünyası arasındaki en hızlı deniz ticareti kapılarından biridir.',
    ticaret: 'Elektronik, tüketim malları, lüks ürünler ve finans bağlantılı deniz taşımacılığı.',
    ilginc: 'Limanın ortasından geçen Star Ferry yolcu vapurları 1888\'den beri aralıksız olarak iki yaka arasında sefer yapıyor.',
    w: 'Port of Hong Kong'
  },
  {
    id: 'busan', ad: 'Busan Limanı', ll: [35.10, 129.04], ulke: 'Güney Kore', rol: 'Kuzeydoğu Asya Aktarma Devi',
    kurulus: 'MS 1876 – Bugün',
    ozet: 'Kore Yarımadası\'nın güneydoğu ucunda, Büyük Okyanus\'a açılan Busan, dünyanın en büyük 6-7 konteyner limanından biridir.',
    ticaret: 'Yarı iletken, otomobil, gemi parçaları, çelik ve Kuzey Pasifik aktarma yükleri.',
    ilginc: 'Kore Savaşı sırasında (1950) Busan geçici başkent olmuş ve tüm uluslararası ikmal bu limandan yapılmıştır.',
    w: 'Port of Busan'
  },
  {
    id: 'yokohama', ad: 'Tokyo & Yokohama Limanı', ll: [35.45, 139.65], ulke: 'Japonya', rol: 'Japonya\'nın Modernleşme Kapısı',
    kurulus: 'MS 1859 – Bugün',
    ozet: '1859\'da Japonya\'nın 200 yıllık dışa kapalılığını bitirip dünyaya açılan ilk uluslararası ticaret limanıdır.',
    ticaret: '19. yüzyılda ham ipek ve yeşil çay; günümüzde otomobil, robotik, hassas elektronik ve LNG ithalatı.',
    ilginc: 'Japonya\'nın ilk demiryolu (1872), ilk gazetesi ve ilk dondurması Yokohama Limanı sayesinde ülkeye girmiştir.',
    w: 'Port of Yokohama'
  },
  {
    id: 'dubai', ad: 'Cebel Ali Limanı (Dubai)', ll: [25.01, 55.06], ulke: 'Birleşik Arap Emirlikleri', rol: 'Orta Doğu\'nun En Büyük Yapay Limanı',
    kurulus: 'MS 1979 – Bugün',
    ozet: 'Çöl kıyısının kazılmasıyla inşa edilen Cebel Ali, dünyanın en büyük insan yapımı limanı ve Orta Doğu–Afrika–Hindistan ticaretinin ana aktarma merkezidir.',
    ticaret: 'Konteyner aktarması, tüketim malları, petrol ürünleri, altın ve gıda lojistiği.',
    ilginc: 'Limanın kazılması sırasında çıkarılan kum ve kaya miktarı, Büyük Giza Piramidi\'nin hacminin onlarca katıydı.',
    w: 'Port of Jebel Ali'
  },
  {
    id: 'mumbai', ad: 'Mumbai Limanı (Nhava Sheva)', ll: [18.95, 72.90], ulke: 'Hindistan', rol: 'Hint Okyanusu\'nun Batı Kapısı',
    kurulus: 'MS 1668 – Bugün',
    ozet: 'Yedi adanın birleştirilmesiyle kurulan doğal derin koyu sayesinde Hindistan\'ın deniz ticaretinde yüzyıllardır lider konumundadır.',
    ticaret: 'Tekstil, ilaç, baharat, işlenmiş elmas, yazılım donanımı ve ham petrol ithalatı.',
    ilginc: '1869\'da Süveyş Kanalı açılınca Avrupa\'dan Hindistan\'a en yakın büyük liman hâline gelen Mumbai bir anda dev bir metropole dönüştü.',
    w: 'Mumbai Port'
  },
  {
    id: 'newyork', ad: 'New York & New Jersey Limanı', ll: [40.68, -74.04], ulke: 'ABD', rol: 'Kuzey Amerika\'nın Doğu Kapısı',
    kurulus: 'MS 1624 – Bugün',
    ozet: 'Hudson Nehri ağzındaki korunaklı doğal koyu ve Erie Kanalı bağlantısı sayesinde ABD\'nin ekonomik ve kültürel başkentine can veren limandır.',
    ticaret: '19. yüzyılda milyonlarca göçmen ve tahıl-pamuk; bugün ABD Doğu Yakası\'nın en büyük konteyner ve otomobil limanı.',
    ilginc: '1892–1954 arasında 12 milyondan fazla göçmen gemilerle bu limandaki Ellis Adası\'ndan geçerek Özgürlük Heykeli\'ni ilk kez gördü.',
    w: 'Port of New York and New Jersey'
  },
  {
    id: 'losangeles', ad: 'Los Angeles & Long Beach Limanı', ll: [33.74, -118.26], ulke: 'ABD', rol: 'Pasifik Ticaretinin Amerika Kapısı',
    kurulus: 'MS 1907 – Bugün',
    ozet: 'Yan yana çalışan Los Angeles ve Long Beach limanları birlikte ABD\'ye deniz yoluyla giren tüm konteynerlerin yaklaşık %40\'ını karşılar.',
    ticaret: 'Asya\'dan gelen elektronik, mobilya, giyim ve ABD\'den Asya\'ya giden tarım/geri dönüşüm ürünleri.',
    ilginc: 'Limandan çıkan yükleri iç eyaletlere taşımak için günde yüzlerce kilometre uzunluğunda çift katlı konteyner trenleri sefer yapar.',
    w: 'Port of Los Angeles'
  },
  {
    id: 'panama', ad: 'Balboa & Colón Limanları (Panama)', ll: [9.36, -79.90], ulke: 'Panama', rol: 'İki Okyanusun Kavşağı',
    kurulus: 'MS 1914 – Bugün',
    ozet: 'Panama Kanalı\'nın Atlas (Colón) ve Pasifik (Balboa) uçlarında yer alan bu ikiz limanlar, Latin Amerika\'nın en büyük konteyner aktarma merkezidir.',
    ticaret: 'Doğu Asya ile ABD Doğu Yakası ve Avrupa arasındaki küresel konteyner ve LNG trafiği.',
    ilginc: 'Bir gemi kolon limanından girip sadece 8-10 saatte Atlas Okyanusu\'ndan Büyük Okyanus\'a geçerek 13.000 km yol tasarruf eder.',
    w: 'Port of Balboa'
  },
  {
    id: 'santos', ad: 'Santos Limanı', ll: [-23.96, -46.30], ulke: 'Brezilya', rol: 'Güney Amerika\'nın En Büyük Limanı',
    kurulus: 'MS 1892 – Bugün',
    ozet: 'São Paulo sanayi bölgesinin denize açılan kapısı olan Santos, Latin Amerika\'nın en yüksek yük hacmine sahip limanıdır.',
    ticaret: 'Dünya kahve ihracatının büyük kısmı, soya fasulyesi, şeker, portakal suyu ve otomobil.',
    ilginc: '20. yüzyıl başında dünya kahvesinin neredeyse %70\'i tek başına Santos rıhtımlarından gemilere yükleniyordu.',
    w: 'Port of Santos'
  },
  {
    id: 'capetown', ad: 'Cape Town Limanı (Ümit Burnu)', ll: [-33.90, 18.43], ulke: 'Güney Afrika', rol: 'İki Okyanusun İkmal Durağı',
    kurulus: 'MS 1652 – Bugün',
    ozet: 'Atlas ve Hint Okyanusları\'nın buluştuğu Ümit Burnu yakınında, 1652\'de Hollandalı denizcilerin taze sebze-su ikmal istasyonu olarak kurduğu tarihî liman.',
    ticaret: 'Tarihte Doğu Hindistan gemilerinin zorunlu ikmal durağı; bugün meyve, şarap, maden ve Güney Atlantik denizciliği.',
    ilginc: 'Süveyş Kanalı 1869\'da açılana kadar Avrupa\'dan Hindistan ve Çin\'e giden her gemi mutlaka Cape Town\'da mola verirdi.',
    w: 'Port of Cape Town'
  },
  {
    id: 'sidney', ad: 'Sidney Limanı (Port Jackson)', ll: [-33.85, 151.21], ulke: 'Avustralya', rol: 'Güney Pasifik Doğal Limanı',
    kurulus: 'MS 1788 – Bugün',
    ozet: '240 kilometreyi aşan girintili kıyı şeridiyle dünyanın en büyük doğal limanlarından biridir; ünlü Sidney Opera Binası ve Liman Köprüsü burada yükselir.',
    ticaret: 'Tarihte Avustralya yünü ve altını; günümüzde yolcu gemileri, feribotlar ve yakındaki Botany Bay konteyner terminali.',
    ilginc: 'İngiliz Kaptan Arthur Phillip 1788\'de buraya girdiğinde "bin gemilik bir donanmanın tam güvenlikle demirleyebileceği dünyanın en güzel limanı" demişti.',
    w: 'Port Jackson'
  }
];
