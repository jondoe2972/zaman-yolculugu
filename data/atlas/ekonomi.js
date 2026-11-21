// 💰 Dönemsel Ekonomi ve Geçim Kaynakları (devlet kartındaki Ekonomi sekmesi)
// Yıl kuralı: MÖ pozitif, MS negatif (ör. MS 1950 = -1950). Her devletin farklı çağlardaki ana gelir ve ticaret kaynakları.
'use strict';
window.ATLAS_EKONOMI = [
  {
    id: 'abd',
    esles: /united states|amerika birleşik|abd\b|thirteen colonies/i,
    donemler: [
      {
        from: -1700, to: -1865,
        baslik: 'Tarım, Pamuk ve Erken Deniz Ticareti',
        kaynaklar: ['Pamuk & Tütün', 'Tahıl', 'Gemi İnşası', 'Kürk Ticareti'],
        ihracat: 'Ham pamuk (Avrupa dokuma fabrikalarına), tütün, kereste, tahıl ve balina yağı.',
        nasil: 'Güney eyaletleri dev plantasyonlarda üretilen pamuk ve tütün ihracatından, Kuzey eyaletleri ise Atlantik deniz ticareti, tersaneler ve yeni kurulan tekstil fabrikalarından gelir sağlıyordu.',
        ilginc: '1850\'lerde dünya pamuk arzının yaklaşık %75\'i ABD\'nin güneyinden İngiliz ve Fransız dokuma tezgâhlarına gidiyordu.'
      },
      {
        from: -1866, to: -1950,
        baslik: 'Sanayi Devi: Demiryolu, Çelik ve Petrol',
        kaynaklar: ['Çelik & Kömür', 'Petrol', 'Otomotiv', 'Demiryolu'],
        ihracat: 'Otomobil, işlenmiş petrol, tarım makineleri, çelik ve tahıl.',
        nasil: 'Kıtayı boydan boya aşan demiryolları, seri üretim bantları (Fordizm) ve dev petrol-çelik şirketleri sayesinde ABD 1890\'larda dünyanın en büyük sanayi ekonomisi hâline geldi.',
        ilginc: '1913\'te Henry Ford\'un hareketli montaj hattı bir otomobilin üretim süresini 12 saatten 93 dakikaya indirdi.'
      },
      {
        from: -1951, to: -2100,
        baslik: 'Teknoloji, Finans ve Küresel İnovasyon',
        kaynaklar: ['Yazılım & Teknoloji', 'Finans', 'Havacılık & Uzay', 'İlaç & Medya'],
        ihracat: 'Bilgisayar çipleri, yazılım ve bulut hizmetleri, yolcu uçakları, tıbbi cihazlar, sinema ve finansal hizmetler.',
        nasil: 'Silikon Vadisi merkezli bilişim/yapay zekâ ekosistemi, Wall Street küresel sermaye piyasaları, ileri savunma-havacılık sanayii ve ABD dolarının uluslararası rezerv para konumu ekonominin temel motorudur.',
        ilginc: 'Günümüzde ABD ekonomisinin yaklaşık %75\'i tarım veya ağır sanayiden değil, teknoloji, finans ve bilgiye dayalı hizmet sektöründen gelir.'
      }
    ]
  },
  {
    id: 'cin',
    esles: /china|çin|qin|han|tang|song|ming|qing|yuan|zhou|shang/i,
    donemler: [
      {
        from: 2100, to: -1948,
        baslik: 'İpek, Porselen ve Çay İmparatorluğu',
        kaynaklar: ['İpek', 'Porselen', 'Çay', 'Tuz & Demir Tekeli'],
        ihracat: 'Ham ve dokuma ipek, mavi-beyaz porselen, çay, kâğıt, barut ve lake eşyalar.',
        nasil: 'İpek Yolu kervanları ve güney limanlarından kalkan gemilerle Avrupa, İslam dünyası ve Asya\'ya lüks mallar satılıyor; içeride ise imparatorluk hazinesi tarım vergisi ile devletin tuz-demir tekelinden besleniyordu.',
        ilginc: 'İpek üretiminin sırrı (ipekböceği yumurtası ve dut yaprağı) yüzyıllarca devlet sırrı sayıldı; dışarı çıkarmaya çalışanlar ağır cezalarla karşılaşıyordu.'
      },
      {
        from: -1949, to: -2100,
        baslik: 'Dünyanın Üretim Üssü ve İleri Teknoloji',
        kaynaklar: ['Elektronik & İmalat', 'Küresel Lojistik', 'Yenilenebilir Enerji', 'E-Ticaret'],
        ihracat: 'Akıllı telefonlar, bilgisayarlar, elektrikli araçlar, güneş panelleri, makineler ve tekstil.',
        nasil: '1978\'den sonraki ekonomik açılımla dev limanlar, hızlı tren ağı ve organize sanayi şehirleri kuruldu; önce dünyanın en büyük imalat atölyesi, son yıllarda da elektrikli araç ve güneş enerjisi lideri oldu.',
        ilginc: 'Dünyadaki güneş panellerinin yaklaşık %80\'i ve konteyner taşımacılığının büyük kısmı Çin\'in kıyı limanlarından dünyaya dağılır.'
      }
    ]
  },
  {
    id: 'osmanli-turkiye',
    esles: /ottoman|osmanlı|turkey|türkiye|seljuk|selçuklu|anatolia|anadolu|rum/i,
    donemler: [
      {
        from: -1070, to: -1922,
        baslik: 'Kervan Yolları, Tımar Tarımı ve Zanaat Loncaları',
        kaynaklar: ['İpek & Baharat Gümrüğü', 'Tarım (Tımar)', 'Halı & İpek Dokuma', 'Deniz Ticareti'],
        ihracat: 'Bursa ipeği, Anadolu halıları, tiftik yünü, pamuk, kuru incir-üzüm, deri ve bakır işçiliği.',
        nasil: 'Asya ile Avrupa arasındaki kara ve deniz yollarını (İstanbul, İzmir, Halep, İskenderiye) elinde tutarak yüksek gümrük geliri elde ediyor; kırsalda tımar sistemiyle tahıl üretimi, şehirlerde Ahilik loncalarıyla zanaat üretimi yürütülüyordu.',
        ilginc: 'Avrupalı ressamların tablolarında masa örtüsü olarak çizilen "Holbein" ve "Lotto" halıları aslında Batı Anadolu\'dan ihraç edilen Türk halılarıydı.'
      },
      {
        from: -1923, to: -2100,
        baslik: 'Sanayi, Turizm, Tarım ve Savunma Teknolojisi',
        kaynaklar: ['Otomotiv & Makine', 'Tekstil', 'Turizm', 'Tarım & Savunma'],
        ihracat: 'Otomobil ve yedek parça, hazır giyim, beyaz eşya, fındık-narenciye, çelik ve insansız hava araçları.',
        nasil: 'Avrupa ile Orta Doğu arasındaki lojistik köprü konumu sayesinde güçlü bir imalat ve otomotiv üssüne dönüştü; buna Akdeniz-Ege turizmi, tarım ihracatı ve büyüyen savunma-yazılım ekosistemi eşlik ediyor.',
        ilginc: 'Türkiye dünya fındık üretiminin yaklaşık %65-70\'ini tek başına karşılar ve Avrupa\'nın en büyük ticari araç üreticilerindendir.'
      }
    ]
  },
  {
    id: 'misir',
    esles: /egypt|mısır|ptolem|mamluk|memlük|fatimid|fatımi/i,
    donemler: [
      {
        from: 3200, to: -640,
        baslik: 'Nil\'in Bereketi: Tahıl, Papirüs ve Altın',
        kaynaklar: ['Nil Tahılı', 'Papirüs', 'Nubya Altını', 'Keten Kumaş'],
        ihracat: 'Buğday ve arpa, papirüs ruloları (antik dünyanın kâğıdı), ince keten kumaş ve cam eşyalar.',
        nasil: 'Her yaz taşan Nil Nehri\'nin bıraktığı verimli çamur sayesinde yılda birkaç hasat alınıyor; Akdeniz\'in "tahıl ambarı" olan Mısır, Roma ve Yunan şehirlerini besleyip Nubya madenlerinden altın çıkarıyordu.',
        ilginc: 'Antik Akdeniz\'deki neredeyse tüm kitaplar ve devlet yazışmaları, yalnızca Nil Deltası\'nda yetişen papirüs kamışından yapılan yapraklara yazılıyordu.'
      },
      {
        from: -641, to: -1868,
        baslik: 'Kızıldeniz–Akdeniz Baharat Köprüsü',
        kaynaklar: ['Baharat Transit Gümrüğü', 'Şeker Kamışı', 'Tekstil', 'Nil Tarımı'],
        ihracat: 'Hindistan\'dan gelen karabiber ve baharatların Avrupa\'ya aktarımı, rafine şeker ve ince pamuklu dokumalar.',
        nasil: 'Hint Okyanusu\'ndan Kızıldeniz\'e gelen baharat gemileri Kahire ve İskenderiye üzerinden Venedikli tüccarlara satılıyor; bu geçiş gümrüğü Memlük ve Fatımi hazinesinin en büyük gelir kaynağını oluşturuyordu.',
        ilginc: 'Ümit Burnu\'nun 1498\'de aşılmasıyla baharat gemileri Afrika\'yı dolaşmaya başlayınca Mısır\'ın transit geliri sert biçimde düştü.'
      },
      {
        from: -1869, to: -2100,
        baslik: 'Süveyş Kanalı, Turizm ve Enerji',
        kaynaklar: ['Süveyş Kanalı Geliri', 'Turizm', 'Doğalgaz', 'Pamuk & Tarım'],
        ihracat: 'Süveyş geçiş hizmetleri, doğalgaz ve petrol ürünleri, uzun lifli Mısır pamuğu, gübre ve narenciye.',
        nasil: '1869\'da açılan Süveyş Kanalı dünya deniz ticaretinin ~%12\'sini geçirerek dev bir döviz kaynağı sağladı; Piramitler ve Kızıldeniz turizmi ile Akdeniz doğalgaz sahaları ekonomiyi destekler.',
        ilginc: 'Mısır pamuğu, olağanüstü uzun ve yumuşak lifleri nedeniyle hâlâ dünyanın en kaliteli lüks kumaşlarında kullanılır.'
      }
    ]
  },
  {
    id: 'ingiltere',
    esles: /united kingdom|britain|england|ingiltere|birleşik krallık|britanya/i,
    donemler: [
      {
        from: -800, to: -1759,
        baslik: 'Yün İhracatı ve Yükselen Deniz Ticareti',
        kaynaklar: ['Yün & Kumaş', 'Kalay Madeni', 'Deniz Ticareti', 'Tarım'],
        ihracat: 'Ham yün (Flanders dokumacılarına), yünlü kumaşlar, Cornwall kalayı ve balık.',
        nasil: 'Orta Çağ boyunca İngiltere\'nin en değerli ihracat ürünü koyun yünüydü; 17. yüzyıldan itibaren Doğu Hindistan Şirketi ve Atlantik filolarıyla küresel deniz ticaretine açıldı.',
        ilginc: 'İngiltere Lordlar Kamarası başkanının hâlâ "Yün Çuvalı" (Woolsack) adı verilen yün dolu bir minder üzerinde oturması, ülkenin tarihî yün zenginliğinin sembolüdür.'
      },
      {
        from: -1760, to: -1945,
        baslik: 'Sanayi Devrimi\'nin Atölyesi',
        kaynaklar: ['Kömür & Buhar', 'Tekstil Fabrikaları', 'Demir-Çelik', 'Küresel Bankacılık'],
        ihracat: 'Makinede dokunmuş pamuklu kumaşlar, lokomotifler, buharlı gemiler, çelik ve kömür.',
        nasil: 'Buhar makinesi, zengin kömür yatakları ve geniş sömürge pazarları sayesinde 19. yüzyılda "dünyanın atölyesi" oldu; Londra küresel finans ve deniz sigortacılığının merkezi hâline geldi.',
        ilginc: '1850\'lerde Britanya tek başına dünyadaki kömürün yarıdan fazlasını çıkarıyor ve dünya ticaret gemilerinin büyük kısmını inşa ediyordu.'
      },
      {
        from: -1946, to: -2100,
        baslik: 'Küresel Finans, Teknoloji ve Hizmet Ekonomisi',
        kaynaklar: ['Finans (Londra)', 'İlaç & Biyoteknoloji', 'Havacılık', 'Yazılım & Kültür'],
        ihracat: 'Finans ve sigorta hizmetleri, uçak motorları (Rolls-Royce), ilaçlar, lüks araçlar ve medya/eğitim.',
        nasil: 'Ağır sanayiden bilgi ve hizmet ekonomisine geçildi; Londra dünyanın önde gelen finans merkezlerinden biri olmayı sürdürürken üniversite araştırmaları, biyoteknoloji ve yaratıcı sektörler öne çıktı.',
        ilginc: 'Londra döviz piyasasında tek bir günde işlem gören para hacmi birçok ülkenin yıllık ekonomik üretiminin katbekat üzerindedir.'
      }
    ]
  },
  {
    id: 'roma-italya',
    esles: /roman|roma|italy|italya|venice|venedik|genoa|ceneviz|florence|floransa|papal/i,
    donemler: [
      {
        from: 500, to: -500,
        baslik: 'Akdeniz Ortak Pazarı: Zeytinyağı, Şarap ve Eyalet Vergisi',
        kaynaklar: ['Zeytinyağı & Şarap', 'Eyalet Vergileri', 'Mermer & Maden', 'Deniz Ticareti'],
        ihracat: 'Amforalarda zeytinyağı ve şarap, cam eşya, bronz işçiliği ve seramik.',
        nasil: 'Akdeniz\'i tek bir güvenli iç deniz ("Mare Nostrum") hâline getirip 80.000 km\'yi aşan taş yollar kurdu; Mısır\'dan tahıl, İspanya\'dan gümüş, Doğu\'dan ipek akarken eyalet vergileri imparatorluğu finanse etti.',
        ilginc: 'Roma\'daki Testaccio Tepesi, milyonlarca kırık zeytinyağı amforasının üst üste yığılmasıyla oluşmuş yapay bir antik ticaret tepesidir.'
      },
      {
        from: -1000, to: -1860,
        baslik: 'Bankacılık, Rönesans Sanatı ve Deniz Cumhuriyetleri',
        kaynaklar: ['Bankacılık (Floransa)', 'Doğu Baharatı (Venedik)', 'İpek & Cam', 'Denizcilik'],
        ihracat: 'Venedik camı (Murano), ince yünlü ve ipek kumaşlar, doğudan aktarılan baharatlar ve finansal kredi.',
        nasil: 'Venedik ve Ceneviz gemileri Doğu Akdeniz ile Karadeniz ticaretine hâkim olurken, Floransa\'daki Medici ailesi gibi bankerler modern çift taraflı muhasebe ve uluslararası bankacılığı kurdu.',
        ilginc: '"Banka" kelimesi İtalyanca "banco" (sarrafların para saydığı tezgâh), "iflas" (bankrupt) ise "banca rotta" (kırık tezgâh) sözünden gelir.'
      },
      {
        from: -1861, to: -2100,
        baslik: 'Tasarım, Makine, Moda ve Gastronomi',
        kaynaklar: ['Endüstriyel Makine', 'Moda & Lüks', 'Otomotiv', 'Turizm & Gıda'],
        ihracat: 'Hassas sanayi makineleri, lüks moda ve deri ürünleri, spor otomobiller, ilaç, zeytinyağı ve peynir.',
        nasil: 'Kuzey İtalya\'daki binlerce yüksek uzmanlıklı aile işletmesi ("Made in Italy") hassas mühendislik ve tasarım ürünleriyle dünyaya ihracat yaparken, tarihî şehirler dev bir turizm geliri üretir.',
        ilginc: 'İtalya genellikle moda ve yemekle anılsa da en büyük ihracat kalemi aslında yüksek hassasiyetli sanayi makineleri ve robotik ekipmanlardır.'
      }
    ]
  },
  {
    id: 'fransa',
    esles: /france|fransa|frank|gaul|galya|burgundy|napoleon/i,
    donemler: [
      {
        from: -500, to: -1850,
        baslik: 'Avrupa\'nın Tahıl Ambarı, Şarap ve Lüks Zanaat',
        kaynaklar: ['Tahıl & Tarım', 'Şarap', 'İpek (Lyon)', 'Lüks Zanaat'],
        ihracat: 'Şarap, Lyon ipeği, porselen, parfüm, mobilya ve tahıl.',
        nasil: 'Avrupa\'nın en verimli tarım ovalarına ve en kalabalık nüfusuna sahipti; 17. yüzyılda Colbert\'in politikalarıyla lüks tekstil, ayna, porselen ve parfüm üretiminde Avrupa\'nın moda lideri oldu.',
        ilginc: '17. yüzyılda Venedik\'in ayna üretim tekelini kırmak için Fransa, Venedikli ustaları gizlice Paris\'e getirip Versay\'ın ünlü Aynalı Salonu\'nu yaptırdı.'
      },
      {
        from: -1851, to: -2100,
        baslik: 'Havacılık, Nükleer Enerji, Lüks ve Turizm',
        kaynaklar: ['Havacılık (Airbus)', 'Lüks & Kozmetik', 'Turizm', 'Tarım & İlaç'],
        ihracat: 'Yolcu uçakları, parfüm ve kozmetik, lüks moda, ilaç, şarap-peynir ve nükleer enerji teknolojisi.',
        nasil: 'Dünyanın en çok turist ağırlayan ülkesi olmasının yanı sıra havacılık-uzay (Airbus/Ariane), yüksek hızlı tren, lüks markalar ve Avrupa\'nın en büyük tarım üretimiyle dengeli bir ekonomi yürütür.',
        ilginc: 'Fransa elektriğinin yaklaşık %65-70\'ini nükleer santrallerden üreterek komşu Avrupa ülkelerine büyük miktarda elektrik ihraç eder.'
      }
    ]
  },
  {
    id: 'almanya',
    esles: /germany|almanya|prussia|prusya|holy roman|kutsal roma|hansa|bavaria|austria|avusturya/i,
    donemler: [
      {
        from: -900, to: -1849,
        baslik: 'Hansa Deniz Birliği, Gümüş Madenleri ve Zanaat',
        kaynaklar: ['Gümüş & Demir', 'Hansa Ticareti', 'Bira & Tahıl', 'Matbaa & Zanaat'],
        ihracat: 'Saksonya ve Tirol gümüşü, metal aletler, kereste, keten kumaş ve basılı kitaplar.',
        nasil: 'Kuzeyde Hansa Birliği şehirleri Baltık ve Kuzey Denizi ticaretini kontrol ederken, güneyde Augsburg ve Nürnberg bankerleri (Fugger ailesi) ile maden şehirleri Avrupa finansına yön veriyordu.',
        ilginc: '"Dolar" kelimesi, Bohemya\'daki Joachimsthal gümüş madeninde basılan "Thaler" sikkesinin adından türemiştir.'
      },
      {
        from: -1850, to: -2100,
        baslik: 'Mühendislik, Otomotiv ve Kimya Devi',
        kaynaklar: ['Otomotiv', 'Makine Mühendisliği', 'Kimya & İlaç', 'Optik & Elektronik'],
        ihracat: 'Otomobiller, endüstriyel makineler, kimyasal ürünler, tıbbi cihazlar ve elektrikli ekipman.',
        nasil: '19. yüzyıl sonunda kimya, elektrik ve hassas makine mühendisliğinde öne çıktı; bugün de "Mittelstand" denen binlerce uzman orta ölçekli sanayi şirketiyle Avrupa\'nın ihracat lokomotifidir.',
        ilginc: 'Aspirin, dizel motor, röntgen cihazı ve modern sentetik gübre gibi dünyayı değiştiren birçok sanayi buluşu 19. yüzyıl sonu Alman laboratuvarlarında doğdu.'
      }
    ]
  },
  {
    id: 'japonya',
    esles: /japan|japonya|tokugawa|edo|meiji|shogun|yamato/i,
    donemler: [
      {
        from: -500, to: -1867,
        baslik: 'Pirinç Ekonomisi, Gümüş ve Zanaat',
        kaynaklar: ['Pirinç (Koku)', 'Gümüş & Bakır', 'İpek & Seramik', 'Balıkçılık'],
        ihracat: 'Gümüş (16-17. yy\'da dünya arzının üçte biri!), bakır, porselen (Imari) ve lake işleri.',
        nasil: 'Edo döneminde vergiler ve samuray maaşları bile "koku" denen pirinç ölçüsüyle hesaplanıyordu; 200 yılı aşkın kapalı dönem (Sakoku) boyunca yalnızca Nagazaki limanından sınırlı Hollanda ve Çin ticareti yapıldı.',
        ilginc: 'Osaka\'da 1730\'da kurulan Dojima Pirinç Borsası, dünyanın ilk organize vadeli işlem (futures) borsası kabul edilir.'
      },
      {
        from: -1868, to: -2100,
        baslik: 'Otomotiv, Robotik ve Hassas Teknoloji',
        kaynaklar: ['Otomotiv', 'Robotik & Çip', 'Hassas Elektronik', 'Gemi & Çelik'],
        ihracat: 'Otomobiller, endüstriyel robotlar, kamera/optik lensler, yarı iletken üretim makineleri ve video oyunları.',
        nasil: 'Doğal kaynakları çok az olan Japonya, yüksek eğitimli iş gücü ve "Kaizen" (sürekli iyileştirme) üretim kültürüyle II. Dünya Savaşı sonrası dünyanın en büyük teknoloji ve otomotiv ihracatçılarından biri oldu.',
        ilginc: 'Dünyadaki endüstriyel fabrika robotlarının neredeyse yarısı Japon şirketleri tarafından üretilir.'
      }
    ]
  },
  {
    id: 'kore',
    esles: /korea|kore|joseon|goryeo|silla/i,
    donemler: [
      {
        from: -500, to: -1950,
        baslik: 'Pirinç, Ginseng ve Seladon Porselen',
        kaynaklar: ['Pirinç Tarımı', 'Kore Ginsengi', 'Seladon Seramik', 'Kâğıt & Deniz Ürünleri'],
        ihracat: 'Yüksek kaliteli ginseng kökü, yeşilimsi seladon porselen, hanji kâğıdı ve ipek.',
        nasil: 'Çin ve Japonya arasında köprü konumundaki yarımada, tarıma dayalı yerleşik ekonomisini özellikle değerli ginseng ve ince seramik-kâğıt ticaretiyle destekliyordu.',
        ilginc: 'Goryeo döneminin yeşil seladon porselenleri o kadar beğeniliyordu ki Çinli gezginler bile onu "gök altındaki ilk mucize" diye övmüştü.'
      },
      {
        from: -1951, to: -2100,
        baslik: 'Yarı İletkenler, Gemi İnşası ve Küresel Pop Kültür',
        kaynaklar: ['Yarı İletken Çipler', 'Elektronik & Ekran', 'Gemi İnşası', 'Otomotiv & K-Kültür'],
        ihracat: 'Bellek çipleri, akıllı telefonlar, OLED ekranlar, dev LNG tankerleri, otomobiller ve dijital içerik (K-Pop, dizi).',
        nasil: '1960\'larda yoksul bir tarım ülkesiyken "Han Nehri Mucizesi" ile hızla çelik, gemi, otomotiv ve mikroçip devine dönüştü; bugün teknolojiyle kültürel ihracatı birlikte yürütüyor.',
        ilginc: 'Dünyadaki akıllı telefon ve bilgisayarların bellek (DRAM/NAND) çiplerinin yarısından fazlası Güney Kore fabrikalarında üretilir.'
      }
    ]
  },
  {
    id: 'hindistan',
    esles: /india|hindistan|mughal|babür|maurya|gupta|delhi|maratha|chola|vijayanagara/i,
    donemler: [
      {
        from: 500, to: -1857,
        baslik: 'Baharat, İnce Pamuklu ve Elmas Diyarı',
        kaynaklar: ['Pamuklu & İpek Kumaş', 'Baharat (Karabiber)', 'Değerli Taşlar', 'Çivit & Tarım'],
        ihracat: 'Muslin ve kaliko pamuklu kumaşlar, karabiber, kakule, tarçın, çivit boyası (indigo) ve Golconda elmasları.',
        nasil: 'Muson rüzgârlarıyla Hint Okyanusu\'nun kalbinde yer alan Hindistan, yüzyıllarca dünyanın en büyük pamuklu dokuma üreticisiydi; Babür döneminde dünya ekonomisinin yaklaşık dörtte birini tek başına üretiyordu.',
        ilginc: '18. yüzyıla kadar dünyadaki neredeyse tüm elmaslar yalnızca Hindistan\'ın Golconda madenlerinden çıkıyordu.'
      },
      {
        from: -1858, to: -2100,
        baslik: 'Yazılım, İlaç Üretimi ve Uzay Teknolojisi',
        kaynaklar: ['BT & Yazılım', 'İlaç & Aşı', 'Mücevher & Tekstil', 'Tarım & Uzay'],
        ihracat: 'Yazılım mühendisliği ve BT hizmetleri, jenerik ilaçlar ve aşılar, işlenmiş elmas, pirinç, çay ve otomobil.',
        nasil: 'Bengaluru ve Haydarabad gibi teknoloji merkezleriyle dünyanın yazılım ve mühendislik üslerinden biri hâline geldi; aynı zamanda dünyanın en büyük aşı ve uygun fiyatlı ilaç üreticisidir.',
        ilginc: 'Dünyada çocuklara yapılan aşıların yaklaşık %60\'ı Hindistan\'daki tesislerde üretilir.'
      }
    ]
  },
  {
    id: 'iran-pers',
    esles: /iran|persia|pers|achaemenid|sasan|safavid|safevi|parthia|part|qajar|kaçar/i,
    donemler: [
      {
        from: 600, to: -1907,
        baslik: 'İpek Yolu\'nun Kalbi: Halı, İpek ve Safran',
        kaynaklar: ['İpek Yolu Transit', 'İran Halısı', 'Ham İpek', 'Safran & Turkuaz'],
        ihracat: 'El dokuması halılar, ham ipek, safran, turkuaz taşı, gül suyu ve çini seramik.',
        nasil: 'Çin ile Akdeniz arasındaki en önemli kara güzergâhını elinde tuttu; Pers Kral Yolu ve Safevi kervansarayları sayesinde hem doğu-batı ticaretinden pay aldı hem de ünlü halı ve ipeklerini dünyaya sattı.',
        ilginc: 'Pers İmparatorluğu\'nun 2.700 km\'lik "Kral Yolu" üzerindeki atlı ulak sistemi, haberlerin bir uçtan diğerine 7 günde ulaşmasını sağlıyordu.'
      },
      {
        from: -1908, to: -2100,
        baslik: 'Petrol, Doğalgaz ve Petrokimya',
        kaynaklar: ['Ham Petrol', 'Doğalgaz', 'Petrokimya', 'Antep Fıstığı & Safran'],
        ihracat: 'Petrol ve doğalgaz ürünleri, petrokimya, çelik, halı, safran ve fıstık.',
        nasil: '1908\'de Orta Doğu\'nun ilk büyük petrol kuyusunun açılmasıyla ekonomi hidrokarbon gelirlerine dayandı; buna tarım (dünya safran üretiminin ~%85\'i) ve yerel sanayi eşlik eder.',
        ilginc: 'Dünyadaki safranın neredeyse tamamı İran\'ın Horasan bölgesindeki mor çiğdem çiçeklerinin elle toplanan liflerinden elde edilir.'
      }
    ]
  },
  {
    id: 'arabistan',
    esles: /arabia|arabistan|caliphate|halife|umayyad|emev|abbasid|abbasi|hejaz|hicaz|saudi|suudi|oman|umman|yemen/i,
    donemler: [
      {
        from: 1000, to: -1937,
        baslik: 'Tütsü, Kahve, İnci ve Hint Okyanusu Ticareti',
        kaynaklar: ['Tütsü & Mür', 'Kahve (Moka)', 'Basra İncisi', 'Kervan & Deniz Ticareti'],
        ihracat: 'Günlük/tütsü reçinesi, Yemen kahvesi, Basra Körfezi incileri, Arap atları, hurma ve baharat aktarımı.',
        nasil: 'Antik çağda Güney Arabistan\'dan Akdeniz\'e giden "Tütsü Yolu", İslam çağında ise Bağdat-Kahire-Basra hattı üzerinden Çin\'den Endülüs\'e uzanan dev bir serbest ticaret ve çek ("sakk") ağı kuruldu.',
        ilginc: 'İngilizce "check" (banka çeki) kelimesi, Abbasi dönemi tüccarlarının yanlarında altın taşımamak için kullandığı Arapça "sakk" belgesinden gelir.'
      },
      {
        from: -1938, to: -2100,
        baslik: 'Enerji Devi: Petrol, Petrokimya ve Lojistik',
        kaynaklar: ['Ham Petrol', 'Doğalgaz', 'Petrokimya', 'Hac & Lojistik/Turizm'],
        ihracat: 'Ham petrol, rafine yakıt, plastik-petrokimya ürünleri ve son yıllarda havacılık-finans-turizm hizmetleri.',
        nasil: '1938\'de dev petrol rezervlerinin keşfiyle Körfez ülkeleri dünyanın ana enerji tedarikçisine dönüştü; son on yılda enerji gelirlerini lojistik limanlara, turizme ve teknoloji yatırımlarına aktarıyorlar.',
        ilginc: '20. yüzyıl başına kadar Basra Körfezi ekonomisinin en büyük gelir kaynağı petrol değil, dalgıçların deniz dibinden çıkardığı doğal incilerdi.'
      }
    ]
  },
  {
    id: 'ispanya',
    esles: /spain|ispanya|castile|kastilya|aragon|al-andalus|endülüs/i,
    donemler: [
      {
        from: -711, to: -1491,
        baslik: 'Endülüs Tarımı, Merinos Yünü ve Zanaat',
        kaynaklar: ['Zeytinyağı & İpek', 'Merinos Yünü', 'Kâğıt & Deri', 'Demir (Toledo)'],
        ihracat: 'Kordoba derisi, Toledo çeliği, zeytinyağı, narenciye, ipek ve kaliteli Merinos yünü.',
        nasil: 'Endülüs\'te gelişmiş sulama kanalları Avrupa\'ya pirinç, narenciye ve şeker kamışını getirirken; Kastilya krallığı yüksek kaliteli Merinos koyunu yünü ihracatıyla zenginleşti.',
        ilginc: 'Avrupa\'daki ilk kâğıt imalathanelerinden biri 11. yüzyılda Endülüs\'teki Xàtiva şehrinde kuruldu.'
      },
      {
        from: -1492, to: -1825,
        baslik: 'Yeni Dünya Gümüşü ve Atlantik Kalyonları',
        kaynaklar: ['Potosí & Meksika Gümüşü', 'Altın', 'Kakao & Tütün', 'Cıva'],
        ihracat: 'Gümüş sikkeler ("Sekiz Real"), boya (koşnil kırmızısı), kakao, tütün ve şarap.',
        nasil: 'Amerika\'daki dev Potosí ve Zacatecas madenlerinden çıkan gümüş, "Hazine Filoları" ile İspanya\'ya taşınıyor; hatta Manila Kalyonları aracılığıyla Çin ipeği ve porseleniyle takas ediliyordu.',
        ilginc: 'İspanyol gümüş sikkesi ("Peso / Piece of Eight") o kadar yaygınlaştı ki 19. yüzyıla kadar Avrupa\'dan Çin\'e ve ABD\'ye kadar küresel para birimi gibi kullanıldı.'
      },
      {
        from: -1826, to: -2100,
        baslik: 'Turizm, Otomotiv, Zeytinyağı ve Yenilenebilir Enerji',
        kaynaklar: ['Turizm', 'Otomotiv', 'Zeytinyağı & Tarım', 'Rüzgâr/Güneş Enerjisi'],
        ihracat: 'Otomobiller, zeytinyağı, meyve-sebze, moda (Inditex), ilaç ve yenilenebilir enerji ekipmanları.',
        nasil: 'Dünyanın en büyük ikinci turizm destinasyonu olmasının yanında, Avrupa\'nın en büyük ikinci otomobil üreticisi ve dünya zeytinyağı üretiminin lideridir.',
        ilginc: 'Dünyada üretilen zeytinyağının yaklaşık %40-45\'i tek başına İspanya\'nın (özellikle Endülüs\'ün) zeytinliklerinden gelir.'
      }
    ]
  },
  {
    id: 'hollanda',
    esles: /netherlands|hollanda|dutch|felemenk/i,
    donemler: [
      {
        from: -1580, to: -1850,
        baslik: 'Altın Çağ: Deniz Ticareti, Baharat ve İlk Borsa',
        kaynaklar: ['Deniz Taşımacılığı', 'Baharat (VOC)', 'Bankacılık & Borsa', 'Gemi İnşası'],
        ihracat: 'Küçük Hindistan cevizi, karanfil, tarçın, ringa balığı, peynir ve finansal hizmetler.',
        nasil: '1602\'de kurulan Hollanda Doğu Hindistan Şirketi (VOC) dünyanın ilk halka açık anonim şirketi oldu; yel değirmenleriyle çalışan kereste atölyelerinde ucuz ticaret gemileri üretip Avrupa\'nın yükünü taşıdılar.',
        ilginc: '1637\'deki "Lale Çılgınlığı" sırasında nadir bir lale soğanının fiyatı Amsterdam\'da lüks bir kanal evinin fiyatına eşitlenmişti.'
      },
      {
        from: -1851, to: -2100,
        baslik: 'Çip Makineleri, Liman Lojistiği ve Yüksek Teknoloji Tarım',
        kaynaklar: ['Çip Litografi (ASML)', 'Rotterdam Limanı', 'Sera Tarımı & Çiçek', 'Kimya'],
        ihracat: 'Mikroçip üretim makineleri, kesme çiçek, sebze-tohum, peynir, petrokimya ve lojistik hizmetleri.',
        nasil: 'Küçücük yüzölçümüne rağmen kapalı akıllı seralar sayesinde ABD\'den sonra dünyanın en büyük ikinci tarım ihracatçısıdır; ayrıca dünyanın en ileri çip makinelerini (ASML) tek başına üretir.',
        ilginc: 'Dünyadaki en gelişmiş akıllı telefon ve yapay zekâ çiplerinin tamamı, Hollanda\'nın küçük bir kasabasında üretilen EUV makineleriyle basılır.'
      }
    ]
  },
  {
    id: 'rusya',
    esles: /russia|rusya|soviet|sovyet|muscovy|moskova|kievan rus|kiev rus/i,
    donemler: [
      {
        from: -850, to: -1916,
        baslik: 'Kürk Ticareti, Tahıl ve Kereste',
        kaynaklar: ['Samur & Kürk', 'Tahıl', 'Kereste & Keten', 'Demir (Ural)'],
        ihracat: 'Sibirya samur ve tilki kürkleri ("yumuşak altın"), buğday, kereste, balmumu ve keten.',
        nasil: '16-17. yüzyıllarda Sibirya\'ya doğru genişlemenin temel ekonomik motoru Avrupa ve Çin\'de servet değerindeki kürk ticaretiydi; 19. yüzyılda Karadeniz limanlarından Avrupa\'ya dev tahıl ihracatı başladı.',
        ilginc: '17. yüzyılda Rus Çarlığı hazinesinin neredeyse %10-15\'i Sibirya\'dan vergi olarak toplanan samur kürklerinden geliyordu.'
      },
      {
        from: -1917, to: -2100,
        baslik: 'Enerji Kaynakları, Maden, Tahıl ve Ağır Sanayi',
        kaynaklar: ['Petrol & Doğalgaz', 'Metal & Gübre', 'Buğday', 'Uzay & Savunma'],
        ihracat: 'Doğalgaz, ham petrol, buğday, gübre, nikel-paladyum-alüminyum, kereste ve savunma/nükleer teknoloji.',
        nasil: 'Sovyet döneminde ağır sanayi, hidroelektrik ve uzay teknolojisine odaklanıldı; günümüzde dünyanın en büyük doğalgaz, buğday ve gübre ihracatçıları arasında yer alır.',
        ilginc: 'Rusya dünyanın en geniş yüzölçümü sayesinde aynı anda hem en büyük doğal gaz rezervlerinden birine hem de dünyanın en geniş orman örtüsüne sahiptir.'
      }
    ]
  },
  {
    id: 'mali-batiafrika',
    esles: /mali|songhai|ghana|gana|benin|kanem|bornu|ashanti|nigeria|nijerya/i,
    donemler: [
      {
        from: -500, to: -1850,
        baslik: 'Sahra Altın ve Tuz Kervanları',
        kaynaklar: ['Altın Madenleri', 'Kaya Tuzu', 'Fildişi & Kola Cevizi', 'Deri & Dokuma'],
        ihracat: 'Altın tozu ve külçeleri (Akdeniz ve Avrupa darphanelerine), deri işleri ve kola cevizi.',
        nasil: 'Bambuk ve Bure madenlerindeki altın, Sahra Çölü\'nü aşan binlerce develik kervanlarla kuzeydeki Taghaza tuz madenlerinden gelen kaya tuzuyla neredeyse ağırlığınca takas ediliyordu; Timbuktu bu ticaretin yıldızıydı.',
        ilginc: '1324\'te Mali hükümdarı Mansa Musa hacca giderken Kahire\'de o kadar çok altın dağıttı ki Mısır\'da altın fiyatları 10 yıl boyunca düştü.'
      },
      {
        from: -1851, to: -2100,
        baslik: 'Kakao, Petrol, Altın ve Dijital Girişimler',
        kaynaklar: ['Kakao', 'Altın', 'Petrol & Doğalgaz', 'Tarım & Teknoloji'],
        ihracat: 'Kakao çekirdeği (dünya çikolatasının ana kaynağı), altın, ham petrol, kaju ve fıstık.',
        nasil: 'Batı Afrika bugün dünyanın en büyük kakao ve altın üretim merkezlerinden biridir; Nijerya ve Gana\'da büyüyen finansal teknoloji (fintech) ve sinema (Nollywood) sektörleri yeni gelir kapıları açıyor.',
        ilginc: 'Dünyada yenen çikolatanın yaklaşık %60-70\'inin hammaddesi olan kakao, Batı Afrika\'daki (Fildişi Sahili ve Gana) küçük aile çiftliklerinde yetişir.'
      }
    ]
  },
  {
    id: 'mogol',
    esles: /mongol|moğol|golden horde|altın orda|ilkhanate|ilhanlı|chagatai|çağatay|timur/i,
    donemler: [
      {
        from: -1150, to: -1600,
        baslik: 'Pax Mongolica: Kıtalararası İpek Yolu Güvenliği',
        kaynaklar: ['İpek Yolu Vergisi', 'Hayvancılık & At', 'Kervan Ortaklıkları', 'Zanaat Şehirleri'],
        ihracat: 'Bozkır atları, yün-keçe, deri ve Çin\'den Akdeniz\'e kesintisiz akan ipek, baharat ve porselen.',
        nasil: 'Kore\'den Macaristan\'a tek bir güvenli ticaret bölgesi ("Pax Mongolica") kuruldu; tüccarlara devlet pasaportu ("paiza") ve kredi ortaklığı ("ortoq") verilerek kıtalararası ticaret patlama yaptı.',
        ilginc: 'Marco Polo\'nun Venedik\'ten Çin\'e güvenle gidebilmesini sağlayan şey, Moğolların kurduğu ve her 40 km\'de bir at değiştirilen "Yam" posta-kervan ağıydı.'
      }
    ]
  },
  {
    id: 'bizans',
    esles: /byzant|bizans|eastern roman|doğu roma/i,
    donemler: [
      {
        from: -330, to: -1453,
        baslik: 'Altın Solidus, Kraliyet İpeği ve Boğazlar Ticareti',
        kaynaklar: ['Boğazlar Gümrüğü', 'İpek Dokuma', 'Altın Sikke', 'Mozaik & Cam'],
        ihracat: 'Mor boyalı imparatorluk ipeği, altın işçiliği, cam eşya, şarap ve zeytinyağı.',
        nasil: 'Konstantinopolis, Karadeniz ile Akdeniz ve Asya ile Avrupa arasındaki ana kavşaktı; 6. yüzyılda Çin\'den gizlice ipekböceği yumurtası getirtilince Bizans Avrupa\'nın tek ipek üreticisi oldu.',
        ilginc: 'Bizans\'ın altın "Solidus" (Bezant) sikkesi 700 yıl boyunca ayarını neredeyse hiç bozmadığı için Orta Çağ\'ın "doları" olarak tüm Akdeniz\'de geçiyordu.'
      }
    ]
  },
  {
    id: 'yunan',
    esles: /greece|yunan|athens|atina|sparta|macedon|makedon|hellen|seleucid/i,
    donemler: [
      {
        from: 1200, to: -1900,
        baslik: 'Deniz Ticareti, Zeytinyağı, Şarap ve Gümüş',
        kaynaklar: ['Zeytinyağı', 'Şarap & Seramik', 'Lavrion Gümüşü', 'Deniz Taşımacılığı'],
        ihracat: 'Zeytinyağı, boyalı amforalarda şarap, gümüş sikke (Atina baykuşu) ve mermer.',
        nasil: 'Dağlık arazide tahıl az yetiştiği için zeytin ve üzüme yönelip bunları gemilerle Karadeniz ve Mısır\'a ihraç ederek karşılığında tahıl alıyorlardı; bu ağ Akdeniz boyunca yüzlerce koloni doğurdu.',
        ilginc: 'Atina\'nın ünlü baykuşlu gümüş sikkeleri, şehrin güneyindeki Lavrion gümüş madenlerinden çıkarılan cevherle basılıyor ve Akdeniz\'in her limanında kabul görüyordu.'
      },
      {
        from: -1901, to: -2100,
        baslik: 'Dünya Ticaret Filosu ve Akdeniz Turizmi',
        kaynaklar: ['Denizcilik Filosu', 'Turizm', 'Zeytinyağı & Gıda', 'İlaç & Alüminyum'],
        ihracat: 'Deniz taşımacılığı hizmetleri, zeytinyağı, rafine yakıt, alüminyum ve gıda ürünleri.',
        nasil: 'Yunan armatörleri küresel ticaret gemisi kapasitesinin yaklaşık beşte birini kontrol eder; buna Ege-Akdeniz adalarının güçlü turizm geliri eşlik eder.',
        ilginc: 'Nüfusu 10 milyon civarında olan Yunanistan, toplam tonaj bakımından dünyanın en büyük ticaret gemisi filosuna sahiptir.'
      }
    ]
  },
  {
    id: 'mezopotamya',
    esles: /sumer|sümer|babylon|babil|assyr|asur|akkad|mesopotamia|mezopotamya|iraq|ırak/i,
    donemler: [
      {
        from: 4000, to: -1920,
        baslik: 'Sulu Tarım, Yün Dokuma ve İlk Ticaret Kayıtları',
        kaynaklar: ['Arpa & Hurma', 'Yünlü Kumaş', 'Kervan Ticareti', 'Kil Tablet Muhasebe'],
        ihracat: 'İnce yünlü kumaşlar, arpa, hurma, susam yağı ve deri; karşılığında Anadolu\'dan gümüş-bakır, Lübnan\'dan sedir ağacı alınırdı.',
        nasil: 'Dicle ve Fırat\'ın sulama kanalları büyük ürün fazlası yarattı; Asurlu tüccarlar Anadolu\'da (Kültepe/Kaniş) ticaret kolonileri kurup kil tabletlere sözleşmeler, faiz ve senetler yazdı.',
        ilginc: 'İnsanlık tarihinin en eski yazılı belgelerinin neredeyse %90\'ı şiir ya da destan değil, Sümer tapınaklarının arpa, koyun ve ticaret hesap defterleridir.'
      },
      {
        from: -1921, to: -2100,
        baslik: 'Petrol ve Enerji',
        kaynaklar: ['Ham Petrol', 'Doğalgaz', 'Hurma & Tarım'],
        ihracat: 'Ham petrol ve enerji ürünleri.',
        nasil: 'Kerkük ve Basra\'daki dev petrol yatakları modern ekonominin ve devlet bütçesinin ana omurgasını oluşturur.',
        ilginc: 'Antik Babil\'de tapınak duvarlarını yapıştırmak için kullanılan "zift" (bitüm), aslında bölgedeki petrolün binlerce yıl önce yüzeye sızan doğal hâliydi.'
      }
    ]
  },
  {
    id: 'mezo-guney-amerika',
    esles: /aztec|aztek|maya|inca|inka|mexico|meksika|peru/i,
    donemler: [
      {
        from: 1000, to: -1550,
        baslik: 'Kakao, Obsidyen, Mısır ve And Tekstili',
        kaynaklar: ['Mısır & Patates', 'Kakao Çekirdeği', 'Obsidyen & Yeşim', 'Alpaka Yünü & Altın'],
        ihracat: 'Aztek ve Mayalarda kakao (para birimi!), obsidyen bıçaklar, quetzal tüyleri; İnkalarda alpaka-vikunya dokumaları, kurutulmuş patates (chuño) ve altın-gümüş.',
        nasil: 'Aztek başkenti Tenochtitlan\'daki Tlatelolco pazarına günde 60.000 kişi gelirdi; İnkalar ise para kullanmadan tüm imparatorluğu "mita" işgücü ve devlet ambarlarıyla (qullqa) yönetti.',
        ilginc: 'Aztek pazarında kakao çekirdeği bozuk para gibi kullanılıyordu: 100 kakao çekirdeğine bir hindi, 1-2 çekirdeğe bir avokado alınabiliyordu.'
      },
      {
        from: -1551, to: -2100,
        baslik: 'İmalat, Otomotiv, Bakır ve Tarım',
        kaynaklar: ['Otomotiv & Elektronik', 'Gümüş & Bakır', 'Avokado & Kahve', 'Turizm'],
        ihracat: 'Meksika\'da otomobil, elektronik, avokado ve petrol; Peru\'da bakır, altın, kinoa ve balık unu.',
        nasil: 'Kuzey Amerika sanayi zincirine bağlı imalat tesisleri (Meksika) ve And Dağları\'nın zengin bakır-altın madenleri (Peru) modern ekonomiyi taşır.',
        ilginc: 'Bugün dünya mutfaklarının vazgeçilmezi olan domates, patates, mısır, biber, kakao ve avokado tüm dünyaya bu topraklardan yayıldı.'
      }
    ]
  },
  {
    id: 'brezilya',
    esles: /brazil|brezilya/i,
    donemler: [
      {
        from: -1500, to: -1950,
        baslik: 'Şeker, Altın, Kauçuk ve Kahve Döngüleri',
        kaynaklar: ['Kahve', 'Şeker Kamışı', 'Amazon Kauçuğu', 'Altın & Elmas'],
        ihracat: 'Kahve çekirdeği, ham şeker, doğal kauçuk, kakao ve Brezilya ağacı boyası.',
        nasil: 'Sömürge döneminden 20. yüzyıla kadar ekonomi ardışık ihraç patlamaları yaşadı: önce şeker, sonra Minas Gerais altını, 19. yüzyılda otomobil lastiği için Amazon kauçuğu ve dünya kahvesi.',
        ilginc: 'Brezilya\'ya adını veren "pau-brasil" ağacı, 16. yüzyılda Avrupa tekstil atölyelerinde çok aranan parlak kırmızı boya elde etmek için ihraç ediliyordu.'
      },
      {
        from: -1951, to: -2100,
        baslik: 'Tarım Süper Gücü, Demir Cevheri ve Havacılık',
        kaynaklar: ['Soya & Kahve', 'Demir Cevheri', 'Petrol & Etanol', 'Havacılık (Embraer)'],
        ihracat: 'Soya fasulyesi, kahve, şeker, portakal suyu, demir cevheri, ham petrol ve bölgesel yolcu uçakları.',
        nasil: 'Dünyanın en büyük tarım ve gıda ihracatçılarından biri olmasının yanında Embraer uçakları, derin deniz petrolü ve şeker kamışından üretilen biyoetanol yakıtıyla öne çıkar.',
        ilginc: 'Brezilya 150 yılı aşkın süredir kesintisiz olarak dünyanın en büyük kahve üreticisidir.'
      }
    ]
  },
  {
    id: 'portekiz',
    esles: /portugal|portekiz/i,
    donemler: [
      {
        from: -1415, to: -1825,
        baslik: 'Deniz İmparatorluğu: Baharat, Şeker ve Altın',
        kaynaklar: ['Hint Baharatı', 'Brezilya Şekeri & Altını', 'Deniz Ticareti', 'Şarap'],
        ihracat: 'Hindistan ve Endonezya\'dan getirilen baharatlar, Çin porseleni, Brezilya şekeri ve Porto şarabı.',
        nasil: 'Ümit Burnu\'nu aşıp Hindistan\'a doğrudan deniz yolu açarak 16. yüzyılda Lizbon\'u Avrupa\'nın baharat başkentine dönüştürdü.',
        ilginc: 'Portekiz bugün dünyadaki doğal şarap mantarının (meşe kabuğu) yarısından fazlasını tek başına üretir.'
      },
      {
        from: -1826, to: -2100,
        baslik: 'Turizm, Mantar, Yenilenebilir Enerji ve Teknoloji',
        kaynaklar: ['Turizm', 'Mantar & Tarım', 'Otomotiv & Tekstil', 'Yenilenebilir Enerji'],
        ihracat: 'Otomobil parçaları, ayakkabı, doğal mantar, zeytinyağı, şarap ve yazılım hizmetleri.',
        nasil: 'Atlas Okyanusu kıyısındaki rüzgâr-güneş yatırımları, turizm ve Avrupa\'nın yükselen teknoloji girişim merkezlerinden Lizbon ekonomiyi büyütür.',
        ilginc: 'Portekiz zaman zaman tüm ülkenin elektrik ihtiyacını günler boyunca %100 yenilenebilir enerjiyle karşılayabiliyor.'
      }
    ]
  },
  {
    id: 'iskandinavya',
    esles: /sweden|isveç|norway|norveç|denmark|danimarka|viking|kalmar|finland|finlandiya/i,
    donemler: [
      {
        from: -750, to: -1850,
        baslik: 'Kürk, Kehribar, Bakır-Demir ve Deniz Ticareti',
        kaynaklar: ['Kürk & Kehribar', 'Demir & Bakır (İsveç)', 'Kurutulmuş Morina', 'Kereste'],
        ihracat: 'Baltık kehribarı, kuzey kürkleri, yüksek saflıkta İsveç demiri, Falun bakırı ve kurutulmuş morina balığı.',
        nasil: 'Vikingler nehir ve deniz yollarıyla Bizans\'tan Bağdat\'a kadar kürk ve kehribar satıp gümüş alıyordu; sonraki yüzyıllarda İsveç demiri Avrupa\'nın en kaliteli çeliğinin hammaddesi oldu.',
        ilginc: 'İsveç\'teki Falun Bakır Madeni 17. yüzyılda tek başına Avrupa\'nın bakır ihtiyacının yaklaşık üçte ikisini karşılıyordu.'
      },
      {
        from: -1851, to: -2100,
        baslik: 'Yeşil Enerji, Denizcilik, İlaç ve Tasarım',
        kaynaklar: ['Petrol/Hidroelektrik (Norveç)', 'İlaç & Denizcilik (Danimarka)', 'Telekom & Tasarım (İsveç)', 'Balıkçılık'],
        ihracat: 'Doğalgaz ve somon (Norveç), insülin/ilaç ve rüzgâr türbini (Danimarka), telekom, mobilya ve makine (İsveç).',
        nasil: 'Doğal kaynak gelirlerini (Norveç Varlık Fonu gibi) geleceğe yatırıp yüksek tasarım, yenilenebilir enerji ve yaşam bilimleri üzerine kurulu yüksek refah ekonomileri yarattılar.',
        ilginc: 'Norveç\'in petrol gelirleriyle kurduğu Devlet Varlık Fonu, dünyadaki halka açık şirketlerin yaklaşık %1,5\'ine ortaktır.'
      }
    ]
  },
  {
    id: 'avustralya',
    esles: /australia|avustralya/i,
    donemler: [
      {
        from: -1788, to: -1950,
        baslik: 'Merinos Yünü ve Altına Hücum',
        kaynaklar: ['Yün', 'Altın Madenleri', 'Buğday', 'Et & Süt'],
        ihracat: 'İnce Merinos yünü, altın, buğday ve soğutmalı gemilerle Avrupa\'ya taşınan et.',
        nasil: '1850\'lerdeki altına hücum dalgası nüfusu ve şehirleri (Melbourne) hızla büyüttü; geniş otlaklarda yetiştirilen koyunların yünü 100 yılı aşkın süre ekonominin bel kemiği oldu.',
        ilginc: '1950\'lerde "Avustralya koyunun sırtında yolculuk ediyor" sözü yaygındı; çünkü ihracatın neredeyse yarısı tek başına yünden geliyordu.'
      },
      {
        from: -1951, to: -2100,
        baslik: 'Maden Devi, Enerji ve Eğitim',
        kaynaklar: ['Demir Cevheri & Lityum', 'Doğalgaz (LNG)', 'Yükseköğretim', 'Tarım & Turizm'],
        ihracat: 'Demir cevheri, elektrikli araç bataryaları için lityum, kömür, LNG, altın, buğday ve uluslararası üniversite eğitimi.',
        nasil: 'Asya sanayisinin en büyük hammadde tedarikçisidir; dünyanın en büyük demir cevheri ve lityum üreticisi konumunda olup güçlü bir eğitim ve turizm geliri de sağlar.',
        ilginc: 'Dünyadaki elektrikli araç ve telefon bataryalarında kullanılan lityumun yaklaşık yarısı Avustralya madenlerinden çıkarılır.'
      }
    ]
  }
];

window.ekonomiBul = function (ad, rawName, yil) {
  const list = window.ATLAS_EKONOMI || [];
  const d = list.find(x => x.esles && (x.esles.test(rawName || '') || x.esles.test(ad || '')));
  if (!d || !d.donemler || !d.donemler.length) return null;
  // MÖ pozitif, MS negatif: from >= yil >= to
  let sec = d.donemler.find(p => yil <= p.from && yil >= p.to);
  if (!sec) {
    // En yakın dönemi seç
    sec = d.donemler.reduce((best, p) => {
      const dist = yil > p.from ? yil - p.from : (yil < p.to ? p.to - yil : 0);
      const bdist = yil > best.from ? yil - best.from : (yil < best.to ? best.to - yil : 0);
      return dist < bdist ? p : best;
    }, d.donemler[0]);
  }
  return { id: d.id, ...sec };
};
