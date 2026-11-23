// 🎬 Rehberli Görselli Belgesel Turları
// Yıl kuralı: MÖ pozitif (ör. 138 = MÖ 138), MS negatif (ör. -1453 = MS 1453).
window.BELGESEL_TURLAR = [
  {
    id: 'ipekyolu',
    ikon: '🐪',
    ad: 'İpek Yolu’nun Hikâyesi',
    alt: 'Çin’den Akdeniz’e medeniyet ve ticaret köprüsü',
    renk: '#ffd666',
    sinir: true,
    rota: [
      [34.26, 108.94], [36.06, 103.83], [38.93, 100.45], [40.14, 94.66], [42.95, 89.18],
      [39.47, 75.99], [40.52, 72.80], [39.65, 66.96], [39.77, 64.42], [37.66, 62.18],
      [36.30, 59.60], [35.69, 51.39], [33.31, 44.36], [36.20, 37.16], [37.87, 32.48],
      [41.01, 28.97], [40.64, 22.94], [43.51, 16.44], [45.44, 12.33]
    ],
    duraklar: [
      { y: 138, ll: [34.26, 108.94], z: 2.6, kisa: 'Chang’an', w: 'Giant Wild Goose Pagoda',
        baslik: 'Chang’an: Büyük Yolculuğun Başlangıcı',
        metin: 'Han İmparatoru Wu’nun elçisi Zhang Qian, Batı’ya doğru yola çıktı. Bu keşif seferi, Çin’in gizli hazinesi ipeği Akdeniz’e bağlayan efsanevi İpek Yolu’nu başlattı.' },
      { y: -100, ll: [40.14, 94.66], z: 2.8, kisa: 'Dunhuang', w: 'Mogao Caves',
        baslik: 'Dunhuang: Çölün Kapısındaki Vaha',
        metin: 'Kervanlar, acımasız Taklamakan Çölü’nün kenarındaki Dunhuang vahasında soluklandı. Tüccarlarla birlikte Budizm, sanat ve yeni fikirler de mağara tapınaklarından dünyaya yayıldı.' },
      { y: -750, ll: [39.65, 66.96], z: 2.9, kisa: 'Semerkant', w: 'Registan',
        baslik: 'Semerkant: İpek Yolu’nun Kalbi',
        metin: 'Orta Asya’nın incisi Semerkant’ta Çin ipeği, Hint baharatı, Fars camı ve Türk atları el değiştirdi. Kâğıt üretimi bu şehir üzerinden İslam dünyasına ve oradan Avrupa’ya ulaştı.' },
      { y: -830, ll: [33.31, 44.36], z: 2.9, kisa: 'Bağdat', w: 'Mustansiriya Madrasah',
        baslik: 'Bağdat: Ticaretin Taşıdığı Bilim',
        metin: 'İpek Yolu sadece kumaş değil, bilgi de taşıdı. Abbasi başkenti Bağdat’ta kurulan Beytülhikme’de Yunan, Hint ve Fars eserleri çevrildi; cebir, tıp ve astronomi altın çağını yaşadı.' },
      { y: -1271, ll: [45.44, 12.33], z: 2.9, kisa: 'Venedik', w: 'Grand Canal (Venice)',
        baslik: 'Venedik & Marco Polo’nun Yolculuğu',
        metin: 'Venedikli tüccar Marco Polo, 24 yıl süren Doğu yolculuğunda Kubilay Han’ın sarayına ulaştı. Dönüşte anlattığı kâğıt para, kömür ve dev şehirler Avrupa’nın hayal gücünü ateşledi.' },
      { y: -1453, ll: [41.01, 28.97], z: 3.0, kisa: 'İstanbul', w: 'Hagia Sophia',
        baslik: 'İstanbul: Kara Yolundan Okyanuslara',
        metin: 'Doğu ile Batı’nın kapısı İstanbul Osmanlı hâkimiyetine girince, Avrupalı denizciler baharat ve ipeğe ulaşmak için okyanuslara açıldı. Kara İpek Yolu yerini Coğrafi Keşifler Çağı’na bıraktı.' }
    ]
  },
  {
    id: 'roma',
    ikon: '🏛️',
    ad: 'Roma’nın Yükselişi ve Çöküşü',
    alt: 'Küçük bir tepeden Akdeniz imparatorluğuna',
    renk: '#f59e0b',
    sinir: true,
    rota: [
      [41.90, 12.49], [36.85, 10.32], [43.95, 4.53], [47.54, 4.50], [41.90, 12.49],
      [31.20, 29.92], [37.98, 23.73], [41.01, 28.97], [41.90, 12.49]
    ],
    duraklar: [
      { y: 509, ll: [41.90, 12.49], z: 3.1, kisa: 'Roma', w: 'Roman Forum',
        baslik: 'Roma: Tiber Kıyısında Doğan Cumhuriyet',
        metin: 'Yedi tepe üzerine kurulan küçük şehir devleti, krallığı devirip cumhuriyeti ilan etti. Senato, hukuk sistemi ve disiplinli lejyonlar gelecekteki imparatorluğun temelini attı.' },
      { y: 146, ll: [36.85, 10.32], z: 3.1, kisa: 'Kartaca', w: 'Carthage',
        baslik: 'Kartaca: Akdeniz’in Tek Hâkimi',
        metin: 'Pön Savaşları’nda Hannibal’in Alpler’i aşan ordusuna direnen Roma, sonunda rakibi Kartaca’yı yendi. Artık Batı Akdeniz’e "Bizim Deniz" (Mare Nostrum) diyebiliyordu.' },
      { y: 52, ll: [47.54, 4.50], z: 3.0, kisa: 'Galya', w: 'Pont du Gard',
        baslik: 'Galya: Sezar’ın Zaferi ve Roma Yolları',
        metin: 'Jül Sezar’ın Galya’yı fethi Roma sınırlarını Atlantik’e taşıdı. Taş döşeli yollar, dev su kemerleri ve amfitiyatrolar Avrupa’nın çehresini kalıcı olarak değiştirdi.' },
      { y: 30, ll: [31.20, 29.92], z: 3.1, kisa: 'İskenderiye', w: 'Pompey\'s Pillar (Alexandria)',
        baslik: 'İskenderiye: İmparatorluk Çağı Başlıyor',
        metin: 'Kleopatra’nın yenilgisiyle zengin Mısır tahıl ambarı Roma’ya bağlandı. Augustus ilk imparator oldu ve iki yüzyıl sürecek "Pax Romana" (Roma Barışı) dönemi başladı.' },
      { y: -330, ll: [41.01, 28.97], z: 3.2, kisa: 'Konstantinopolis', w: 'Walls of Constantinople',
        baslik: 'Konstantinopolis: Yeni Doğu Başkenti',
        metin: 'İmparator Konstantin, başkenti Boğaz’ın kıyısına taşıdı. İkiye bölünen imparatorluğun doğu kanadı, Bizans adıyla bin yıl daha yaşamayı başaracaktı.' },
      { y: -476, ll: [41.90, 12.49], z: 3.1, kisa: 'Batı Roma', w: 'Colosseum',
        baslik: '476: Batı Roma’nın Sonu',
        metin: 'Kavimler Göçü, ekonomik kriz ve iç savaşlarla yıpranan Batı Roma İmparatorluğu çöktü. Antik Çağ kapandı; Avrupa’da Orta Çağ başladı.' }
    ]
  },
  {
    id: 'turkler',
    ikon: '🌙',
    ad: 'Türklerin Büyük Yolculuğu',
    alt: 'Orta Asya bozkırlarından Anadolu’ya ve Cumhuriyet’e',
    renk: '#fbbf24',
    sinir: true,
    rota: [
      [47.55, 102.84], [43.25, 76.95], [39.65, 66.96], [37.66, 62.18],
      [39.15, 42.53], [37.87, 32.48], [41.01, 28.97], [39.93, 32.85]
    ],
    duraklar: [
      { y: -552, ll: [47.55, 102.84], z: 2.7, kisa: 'Ötüken', w: 'Orkhon inscriptions',
        baslik: 'Ötüken & Göktürkler: Taşa Kazınan Tarih',
        metin: 'Bumin Kağan’ın kurduğu Göktürk Kağanlığı, tarihte "Türk" adını devlet adı olarak kullanan ilk imparatorluk oldu. Orhun Yazıtları Türkçenin en eski anıtsal belgelerini bıraktı.' },
      { y: -1040, ll: [37.66, 62.18], z: 2.9, kisa: 'Merv', w: 'Merv',
        baslik: 'Dandanakan & Büyük Selçuklu',
        metin: 'Tuğrul ve Çağrı Bey önderliğindeki Selçuklular, Horasan’da büyük bir imparatorluk kurdu. Medreseler, kervansaraylar ve bilim insanlarıyla İslam dünyasına yeni bir soluk getirdiler.' },
      { y: -1071, ll: [39.15, 42.53], z: 3.2, kisa: 'Malazgirt', w: 'Ahlat',
        baslik: '1071 Malazgirt: Anadolu’nun Kapıları',
        metin: 'Sultan Alparslan’ın Malazgirt zaferi, Anadolu’yu Türk yurdu haline getiren büyük göç ve yerleşme sürecini başlattı.' },
      { y: -1220, ll: [37.87, 32.48], z: 3.2, kisa: 'Konya', w: 'Mevlana Museum',
        baslik: 'Konya: Anadolu Selçuklu’nun Altın Çağı',
        metin: 'Başkent Konya, Mevlana’nın hoşgörüsü, görkemli medreseler ve ticaret yolları üzerindeki taş hanlarla Anadolu’nun kültür ve bilim merkezine dönüştü.' },
      { y: -1453, ll: [41.01, 28.97], z: 3.2, kisa: 'İstanbul', w: 'Topkapi Palace',
        baslik: 'İstanbul: Üç Kıtaya Uzanan Osmanlı',
        metin: 'Fatih Sultan Mehmet’in İstanbul’u fethi yeni bir çağ açtı. Osmanlı Devleti kısa sürede Balkanlar, Ortadoğu ve Kuzey Afrika’yı kapsayan bir dünya gücüne dönüştü.' },
      { y: -1923, ll: [39.93, 32.85], z: 3.2, kisa: 'Ankara', w: 'Anıtkabir',
        baslik: '1923 Ankara: Türkiye Cumhuriyeti',
        metin: 'Mustafa Kemal Atatürk önderliğindeki Kurtuluş Savaşı’nın ardından Ankara başkent ilan edildi ve çağdaş Türkiye Cumhuriyeti kuruldu.' }
    ]
  },
  {
    id: 'kesifler',
    ikon: '⛵',
    ad: 'Büyük Coğrafi Keşifler',
    alt: 'Okyanusların haritasını çizen cesur yolculuklar',
    renk: '#38bdf8',
    sinir: true,
    rota: [
      [38.72, -9.14], [14.70, -17.44], [-34.36, 18.47], [11.25, 75.78],
      [38.72, -9.14], [24.05, -74.53], [-52.50, -68.40], [10.31, 123.89], [37.38, -5.99]
    ],
    duraklar: [
      { y: -1488, ll: [38.72, -9.14], z: 2.8, kisa: 'Lizbon', w: 'Belém Tower',
        baslik: 'Lizbon: Okyanusa Açılan Karavelalar',
        metin: 'Portekizli denizciler pusula, usturlap ve rüzgâra karşı gidebilen karavela gemileriyle bilinmeyen Atlantik sularına yelken açtı.' },
      { y: -1488, ll: [-34.36, 18.47], z: 2.8, kisa: 'Ümit Burnu', w: 'Cape of Good Hope',
        baslik: 'Ümit Burnu: Afrika’nın Güney Ucu Aşılıyor',
        metin: 'Bartolomeu Dias fırtınalı suları aşarak Afrika’nın güney ucunu döndü. Hindistan’a denizden ulaşmanın mümkün olduğu ilk kez kanıtlandı.' },
      { y: -1492, ll: [24.05, -74.53], z: 2.7, kisa: 'Yeni Dünya', w: 'San Salvador Island',
        baslik: '1492: Kristof Kolomb ve Amerika',
        metin: 'Batıya giderek Hindistan’a ulaşmayı hedefleyen Kolomb, Karayip adalarına ayak bastı. İki yarımküre binlerce yıl sonra yeniden buluştu; patates, domates ve kakao dünyaya yayıldı.' },
      { y: -1498, ll: [11.25, 75.78], z: 2.8, kisa: 'Kalküta', w: 'Kochi',
        baslik: 'Vasco da Gama: Hindistan Deniz Yolu',
        metin: 'Vasco da Gama Afrika’yı dolaşıp Hindistan’a ulaştı. Baharat ticareti artık kervanlardan dev okyanus filolarına kaymaya başladı.' },
      { y: -1520, ll: [-52.50, -68.40], z: 2.6, kisa: 'Macellan Boğazı', w: 'Strait of Magellan',
        baslik: 'Macellan Boğazı: Pasifik’e Geçit',
        metin: 'Ferdinand Macellan Güney Amerika’nın buzlu güney geçidini aşarak sakin sularına "Pasifik" adını verdiği dev okyanusa çıktı.' },
      { y: -1522, ll: [37.38, -5.99], z: 2.9, kisa: 'Sevilla', w: 'Torre del Oro',
        baslik: '1522: Dünya’nın İlk Tam Turu',
        metin: 'Victoria gemisi Juan Sebastián Elcano komutasında Sevilla’ya döndü. İnsanlık ilk kez Dünya’nın çevresini denizden dolaşarak küresel çağın kapısını açtı.' }
    ]
  },
  {
    id: 'uygarlik',
    ikon: '🏺',
    ad: 'İlk Uygarlıkların Doğuşu',
    alt: 'Avcılıktan ilk tapınaklara, şehirlere ve yazıya',
    renk: '#eab308',
    sinir: true,
    rota: [
      [37.22, 38.92], [37.67, 32.83], [31.32, 45.64], [29.98, 31.13],
      [27.33, 68.14], [36.12, 114.32]
    ],
    duraklar: [
      { y: 9500, ll: [37.22, 38.92], z: 3.1, kisa: 'Göbeklitepe', w: 'Göbekli Tepe',
        baslik: 'Göbeklitepe: Tarihin Sıfır Noktası',
        metin: 'Henüz tarım ve çömlek bile yokken avcı-toplayıcılar Şanlıurfa’da 12 bin yıl önce dev T biçimli dikilitaşlar yükseltti. İnanç, yerleşik hayattan bile önce geldi.' },
      { y: 7000, ll: [37.67, 32.83], z: 3.1, kisa: 'Çatalhöyük', w: 'Çatalhöyük',
        baslik: 'Çatalhöyük: Sokaksız İlk Kasaba',
        metin: 'Konya Ovası’nda binlerce insan bitişik kerpiç evlerde yaşadı; sokak yerine çatılarda yürüyüp evlerine merdivenle indiler.' },
      { y: 3200, ll: [31.32, 45.64], z: 3.1, kisa: 'Uruk', w: 'Ziggurat of Ur',
        baslik: 'Mezopotamya & Uruk: Yazının İcadı',
        metin: 'Fırat ve Dicle arasında dünyanın ilk büyük şehirleri kuruldu. Sümerler tahıl ve ticaret kayıtları tutmak için kil tabletlere çivi yazısını kazıdı; tarih çağları başladı.' },
      { y: 2560, ll: [29.98, 31.13], z: 3.1, kisa: 'Gize', w: 'Great Pyramid of Giza',
        baslik: 'Gize Piramitleri: Nil’in Ölümsüz Anıtları',
        metin: 'Nil’in bereketli taşkınlarıyla zenginleşen Antik Mısır, 3.800 yıl boyunca dünyanın en yüksek yapısı kalacak Büyük Piramit’i inşa etti.' },
      { y: 2400, ll: [27.33, 68.14], z: 3.0, kisa: 'Mohenjo-daro', w: 'Mohenjo-daro',
        baslik: 'İndus Vadisi: Şehir Planlamasının Öncüsü',
        metin: 'Mohenjo-daro’da ızgara planlı caddeler, pişmiş tuğla evler ve her eve bağlı kapalı kanalizasyon sistemleri vardı.' },
      { y: 1250, ll: [36.12, 114.32], z: 2.9, kisa: 'Anyang', w: 'Yinxu',
        baslik: 'Sarı Nehir & Shang: Tunç ve Kehanet Kemikleri',
        metin: 'Çin’in Sarı Nehir vadisinde Shang Hanedanı, muhteşem tunç kaplar döktü ve kaplumbağa kabuklarına bugünkü Çin yazısının atalarını kazıdı.' }
    ]
  },
  {
    id: 'iskender',
    ikon: '⚔️',
    ad: 'Büyük İskender’in Doğu Seferi',
    alt: '11 yılda üç kıtaya uzanan efsanevi yürüyüş',
    renk: '#fb7185',
    sinir: true,
    rota: [
      [40.76, 22.52], [39.96, 26.24], [39.65, 31.99], [31.20, 29.92],
      [32.54, 44.42], [29.93, 52.89], [32.92, 73.73]
    ],
    duraklar: [
      { y: 334, ll: [40.76, 22.52], z: 3.2, kisa: 'Pella', w: 'Pella',
        baslik: 'Pella: 20 Yaşında Bir Kral',
        metin: 'Aristoteles’in öğrencisi Makedonyalı İskender, babası II. Filip’in ardından tahta geçti ve dev Pers İmparatorluğu’na karşı doğu seferini başlattı.' },
      { y: 334, ll: [39.96, 26.24], z: 3.2, kisa: 'Truva', w: 'Troy',
        baslik: 'Truva & Granikos: Anadolu’ya İlk Adım',
        metin: 'Çanakkale Boğazı’nı geçen İskender, İlyada kahramanı Akhilleus’un mezarını ziyaret etti ve Granikos’ta ilk büyük zaferini kazandı.' },
      { y: 333, ll: [39.65, 31.99], z: 3.2, kisa: 'Gordion', w: 'Gordium',
        baslik: 'Gordion Düğümü',
        metin: 'Efsaneye göre Gordion’daki karmaşık düğümü çözen Asya’nın hâkimi olacaktı. İskender düğümü kılıcıyla keserek kararlılığını tüm dünyaya gösterdi.' },
      { y: 331, ll: [31.20, 29.92], z: 3.1, kisa: 'İskenderiye', w: 'Bibliotheca Alexandrina',
        baslik: 'Mısır & İskenderiye’nin Kuruluşu',
        metin: 'Mısır’da kurtarıcı olarak karşılanan İskender, Akdeniz kıyısında kendi adını taşıyan İskenderiye şehrini kurdu; kent yüzyıllarca antik bilimin merkezi oldu.' },
      { y: 330, ll: [29.93, 52.89], z: 3.0, kisa: 'Persepolis', w: 'Persepolis',
        baslik: 'Babil ve Persepolis: Pers İmparatorluğu’nun Sonu',
        metin: 'Gaugamela zaferiyle III. Darius’u yenen İskender, Babil’e ve Pers başkenti Persepolis’e girdi. Artık bilinen dünyanın en büyük imparatorluğunun hükümdarıydı.' },
      { y: 326, ll: [32.92, 73.73], z: 2.9, kisa: 'İndus', w: 'Indus River',
        baslik: 'İndus Nehri: Dünyanın Sonuna Yolculuk',
        metin: 'Hindistan’da fillerle savaşan yorgun askerleri daha ileri gitmek istemeyince İskender geri döndü; 32 yaşında Babil’de öldüğünde geride Helenistik çağ kaldı.' }
    ]
  },
  {
    id: 'bilim',
    ikon: '🔭',
    ad: 'Bilimin ve İcatların Yolculuğu',
    alt: 'Dünya’yı ölçmekten Ay’a ayak basmaya',
    renk: '#4ade80',
    sinir: true,
    rota: [
      [31.20, 29.92], [33.31, 44.36], [49.99, 8.25], [43.77, 11.25],
      [51.48, 0.00], [28.57, -80.65]
    ],
    duraklar: [
      { y: 240, ll: [31.20, 29.92], z: 3.1, kisa: 'İskenderiye', w: 'Library of Alexandria',
        baslik: 'Eratosthenes: Gölgeyle Dünya’yı Ölçmek',
        metin: 'İskenderiye Kütüphanesi başkanı Eratosthenes, iki şehirdeki güneş gölgelerini karşılaştırarak Dünya’nın çevresini şaşırtıcı bir doğrulukla hesapladı.' },
      { y: -820, ll: [33.31, 44.36], z: 3.1, kisa: 'Bağdat', w: 'Baghdad',
        baslik: 'Harezmi: Cebir ve Algoritmanın Doğuşu',
        metin: 'Bağdat’ta çalışan Harezmi, sıfır rakamını ve cebir bilimini sistemleştirdi. Bugün bilgisayarların temelini oluşturan "algoritma" kelimesi onun adından gelir.' },
      { y: -1450, ll: [49.99, 8.25], z: 3.1, kisa: 'Mainz', w: 'Gutenberg Bible',
        baslik: 'Gutenberg Matbaası: Bilginin Patlaması',
        metin: 'Johannes Gutenberg’in hareketli metal harfli matbaası, kitapları saraylardan çıkarıp milyonlarca insanın eline ulaştırdı; Rönesans ve Bilim Devrimi hızlandı.' },
      { y: -1609, ll: [43.77, 11.25], z: 3.1, kisa: 'Floransa', w: 'Galileo Galilei',
        baslik: 'Galileo: Teleskop Gökyüzüne Çevriliyor',
        metin: 'Galileo teleskobunu göğe çevirdiğinde Jüpiter’in uydularını ve Ay’ın kraterlerini gördü. Evrenin merkezinin Dünya olmadığı gözlemle kanıtlandı.' },
      { y: -1687, ll: [51.48, 0.00], z: 3.1, kisa: 'Londra', w: 'Royal Observatory, Greenwich',
        baslik: 'Newton & Buhar Çağı',
        metin: 'Isaac Newton evrensel çekim yasasıyla göklerin ve yerin aynı fizik kurallarına uyduğunu gösterdi. Kısa süre sonra buhar makineleri modern sanayi çağını başlattı.' },
      { y: -1969, ll: [28.57, -80.65], z: 2.8, kisa: 'Apollo 11', w: 'Apollo 11',
        baslik: '1969: İnsanlık Ay’a Ayak Basıyor',
        metin: 'Cape Canaveral’dan fırlatılan Satürn V roketi, insanlığı ilk kez başka bir gök cismine taşıdı. Dünya’ya uzaydan bakılan o an yeni bir çağın simgesi oldu.' }
    ]
  },
  {
    id: 'atescemberi',
    ikon: '🌋',
    ad: 'Pasifik Ateş Çemberi',
    alt: 'Dünya’nın en aktif yanardağ ve deprem kuşağı (Doğa)',
    renk: '#f97316',
    sinir: false,
    rota: [
      [-38.80, 175.90], [-6.10, 105.42], [14.60, 121.00], [35.36, 138.73],
      [56.06, 160.64], [58.00, -155.00], [46.20, -122.19], [19.02, -98.62],
      [-0.68, -78.44], [-33.45, -70.66]
    ],
    duraklar: [
      { y: -2024, ll: [35.36, 138.73], z: 2.7, kisa: 'Fuji Dağı', w: 'Mount Fuji',
        baslik: 'Fuji Dağı: Japonya’nın Kutsal Yanardağı',
        metin: 'Pasifik Okyanusu’nu at nalı gibi saran 40.000 kilometrelik Ateş Çemberi, dünyadaki aktif yanardağların %75’ini barındırır. Fuji Dağı bu tektonik kuşağın en ünlü simgesidir.' },
      { y: -1883, ll: [-6.10, 105.42], z: 2.7, kisa: 'Krakatoa', w: 'Krakatoa',
        baslik: '1883 Krakatoa: Dünyayı Saran Patlama',
        metin: 'Endonezya’daki Krakatoa patlaması modern tarihin en şiddetli seslerinden birini çıkardı; küller atmosferi dolaşarak yıllarca kızıl gün batımları oluşturdu.' },
      { y: -2024, ll: [-38.80, 175.90], z: 2.7, kisa: 'Taupo', w: 'Lake Taupō',
        baslik: 'Yeni Zelanda & Taupo Süper Volkanı',
        metin: 'Bugün huzurlu bir göl gibi görünen Taupo, aslında binlerce yıl önce gökyüzünü karartan dev bir süper yanardağın kalderasıdır.' },
      { y: -2024, ll: [-0.68, -78.44], z: 2.7, kisa: 'Cotopaxi', w: 'Cotopaxi',
        baslik: 'And Dağları: Okyanus Levhası Kıtanın Altında',
        metin: 'Nazca levhasının Güney Amerika’nın altına dalması, dünyanın en uzun sıradağları olan Andlar’ı ve Ekvador’un karlı dev yanardağı Cotopaxi’yi yükseltti.' },
      { y: -1980, ll: [46.20, -122.19], z: 2.7, kisa: 'St. Helens', w: 'Mount St. Helens',
        baslik: '1980 St. Helens: Zirvesini Kaybeden Dağ',
        metin: 'ABD’deki St. Helens Yanardağı’nın yan patlaması dağın yüksekliğini 400 metre düşürdü ve doğanın kendini nasıl hızla yenilediğini gösteren canlı bir laboratuvara dönüştü.' },
      { y: -2024, ll: [56.06, 160.64], z: 2.7, kisa: 'Kamçatka', w: 'Klyuchevskaya Sopka',
        baslik: 'Kamçatka: Ateş ve Buzun Buluşması',
        metin: 'Rusya’nın uzak doğusundaki Kamçatka Yarımadası’nda buzullar ile 30’dan fazla aktif yanardağ yan yana durur; Ateş Çemberi’nin kuzey yayı burada tamamlanır.' }
    ]
  }
];
