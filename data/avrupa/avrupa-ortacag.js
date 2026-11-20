// Avrupa: Orta Çağ (MS 476 – 1453) ve Rönesans, Reform, Keşifler (MS 1453 – 1789)
// Kaynaklar: Wickham, "The Inheritance of Rome" (2009); Le Goff, "Ortaçağ Batı Uygarlığı"; Burke, "The European Renaissance" (1998); Blanning, "The Pursuit of Glory" (2007).
(() => {
  const ESKI = window.AVRUPA_ESKI;

  // ================= 3. ORTA ÇAĞ =================
  window.PLACES.push({
    id: 'avrupa-ortacag', sira: 3, kisa: 'Orta Çağ', aralikAd: 'MS 476 – 1453',
    baslik: 'Şarlman · Vikingler · Katedraller · Kara Ölüm',
    ulkeAlt: 'Orta Çağ Avrupası (MS 476 – 1453)',
    from: -476, to: -1453, start: -1250,
    not: 'Tarihler büyük ölçüde kesindir. Nüfus tahminleri yaklaşıktır.', baskent: 'Tek başkent yok: Aachen, Paris, Londra, Roma (papalık), Konstantinopolis…',
    sahne: { kizak: true, araba: false, giyim: 'cubbe' },
    dynasties: [
      { from: -476, to: -800, ad: 'Erken Orta Çağ: Germen krallıkları', renk: '#5a6a3a' },
      { from: -800, to: -1000, ad: 'Karolenj İmparatorluğu ve Vikingler', renk: '#3a5a8a' },
      { from: -1000, to: -1300, ad: 'Yüksek Orta Çağ: feodalite, Haçlılar, katedraller', renk: '#8a3a3a' },
      { from: -1300, to: -1453, ad: 'Geç Orta Çağ: Kara Ölüm ve Yüzyıl Savaşları', renk: '#4a3a4a' }
    ],
    rulers: [
      { from: -476, to: -511, ad: 'Odoaker, Teoderik ve Frank kralı I. Clovis', kisa: 'Clovis', kim: 'Clovis Frankları birleştirdi ve Katolik oldu (~496): Fransa\'nın çekirdeği.' },
      { from: -511, to: -768, ad: 'Merovenj ve ilk Karolenj kralları (Charles Martel, Pepin)', kisa: 'Charles Martel', kim: 'Charles Martel Emevî ordusunu Poitiers\'de durdurdu (732).' },
      { from: -768, to: -814, ad: 'Şarlman (Büyük Karl)', kisa: 'Şarlman', kim: 'Batı Avrupa\'nın çoğunu birleştirdi; 800 Noel\'inde Roma\'da imparator taç giydi. "Avrupa\'nın babası".' },
      { from: -814, to: -962, ad: 'Karolenj ardılları; Viking, Macar ve Arap akınları', kisa: 'Vikingler', kim: 'İmparatorluk Verdun\'da (843) üçe bölündü: bugünkü Fransa ve Almanya\'nın kökü. Vikingler Lindisfarne\'den (793) Paris\'e kadar akın ediyor.' },
      { from: -962, to: -1066, ad: 'I. Otto ve Kutsal Roma İmparatorluğu', kisa: 'I. Otto', kim: 'Otto Macarları Lech\'te yendi (955) ve 962\'de imparator oldu: Kutsal Roma Germen İmparatorluğu.' },
      { from: -1066, to: -1095, ad: 'Fatih William ve Papa VII. Gregorius', kisa: 'Fatih William', kim: 'Normandiyalı William İngiltere\'yi fethetti (Hastings, 1066).' },
      { from: -1095, to: -1215, ad: 'Haçlı Seferleri çağı (II. Urbanus, Aslan Yürekli Richard, Barbarossa)', kisa: 'Haçlılar', kim: 'Papa II. Urbanus Clermont\'ta Birinci Haçlı Seferi\'ni ilan etti (1095).' },
      { from: -1215, to: -1337, ad: 'Magna Carta\'dan Yüzyıl Savaşları\'na (IX. Louis, II. Frederick)', kisa: 'IX. Louis', kim: 'İngiltere\'de Magna Carta (1215): kral da yasaya bağlı. Fransa\'da Aziz Louis; Paris üniversitesi.' },
      { from: -1337, to: -1453, ad: 'Yüzyıl Savaşları: İngiltere ve Fransa krallıkları', kisa: 'Jeanne d\'Arc', kim: 'Kara Ölüm (1347-51); Jeanne d\'Arc Orléans\'ı kurtardı (1429). 1453\'te savaş bitti ve Osmanlı İstanbul\'u fethetti.' }
    ],
    eras: [
      { from: -476, to: -800, puan: { eko: 1, ordu: 2, istikrar: 1 }, baskent: 'Ravenna, Toledo, Paris…',
        gundem: 'Batı Roma\'nın yerinde Germen krallıkları: Ostrogotlar (İtalya), Vizigotlar (İspanya), Franklar (Galya), Anglo-Saksonlar (Britanya). Kentler küçüldü, okuryazarlık çöktü; bilgiyi manastırlar korudu. 711\'de Emevîler İspanya\'ya geçti.',
        savas: 'Krallar arası savaşlar; Poitiers (732), Bizans\'ın İtalya seferleri.', ekonomi: 'Kendine yeten köy ve malikâne ekonomisi; para azaldı.',
        din: 'Hristiyanlık bütün Avrupa\'ya yayılıyor; Benedikten manastırları ("dua et ve çalış").', yasam: 'İnsanların çoğu toprağa bağlı köylü.', bilgi: 'İrlandalı keşişlerin süslediği Kells Kitabı (~800) dünyanın en güzel el yazmalarından sayılır.' },
      { from: -800, to: -1000, puan: { eko: 2, ordu: 3, istikrar: 2 }, baskent: 'Aachen',
        gundem: 'Şarlman Batı Avrupa\'yı birleştirdi ve okulları yeniden açtırdı (Karolenj Rönesansı). Ölümünden sonra imparatorluk bölündü. Kuzeyden Vikingler, doğudan Macarlar, güneyden Araplar akın ediyor. Endülüs\'te Kurtuba Avrupa\'nın en büyük ve en bilgili şehri.',
        savas: 'Viking gemileri nehirlerden içeri giriyor: Paris kuşatması (845, 885).', ekonomi: 'Vikingler İskandinavya\'dan Bağdat\'a ticaret yolları açtı; Kiev Rus devleti doğdu.',
        din: 'Vikingler ve Slavlar Hristiyanlaşıyor.', yasam: 'Feodalite: kale, şövalye ve serf.', bilgi: 'Vikinglerin İzlanda\'da 930\'da kurduğu Althing meclisi, hâlâ işleyen en eski parlamento sayılır.' },
      { from: -1000, to: -1300, puan: { eko: 4, ordu: 4, istikrar: 3 }, baskent: 'Paris, Londra, Roma',
        gundem: 'Avrupa canlanıyor: ağır saban ve yel değirmenleriyle tarım arttı, nüfus ikiye katlandı. Romanesk sonra Gotik katedraller (Notre-Dame, Chartres) yükseliyor. Bologna, Paris, Oxford üniversiteleri kuruldu. Haçlı Seferleri (1096-1291).',
        savas: 'Hastings (1066), Haçlı Seferleri, İspanya\'da Reconquista.', ekonomi: 'Venedik ve Ceneviz Akdeniz ticaretini yönetiyor; panayırlar, loncalar.',
        din: 'Papalığın gücü doruğunda; Fransisken ve Dominiken tarikatları.', yasam: 'Kentlerde zanaatkârlar ve tüccarlar: "burjuvazi".', bilgi: 'Notre-Dame\'ın yapımı yaklaşık 180 yıl sürdü; ustaların çoğu bitişini göremedi.' },
      { from: -1300, to: -1453, puan: { eko: 2, ordu: 3, istikrar: 1 }, baskent: 'Paris, Londra, Avignon (papalık)',
        gundem: 'Küçük Buzul Çağı, kıtlıklar ve 1347-51 Kara Ölüm: Avrupa nüfusunun üçte biri ile yarısı öldü. Yüzyıl Savaşları İngiltere ile Fransa\'yı yıprattı. İtalya\'da Dante, Petrarca, Giotto ile Rönesans başlıyor; Gutenberg matbaası (~1450).',
        savas: 'Crécy (1346) ve Azincourt (1415): İngiliz uzun yayları; barut topları kalelerin duvarlarını yıkmaya başladı.', ekonomi: 'Vebadan sonra işçi az: ücretler yükseldi, serflik zayıfladı.',
        din: 'Büyük Batı Ayrılığı: aynı anda iki, sonra üç papa (1378-1417). Jan Hus yakıldı (1415).', yasam: 'Kara Ölüm\'den sonra "ölüm dansı" resimleri yaygınlaştı.', bilgi: '"Karantina" kelimesi Venedik\'te gemilerin 40 gün (quaranta) bekletilmesinden gelir.' }
    ],
    nufus: [[-476, 30], [-600, 26], [-1000, 40], [-1300, 80], [-1350, 50], [-1453, 60]],
    nufusNot: 'Kara Ölüm\'de nüfus 80 milyondan ~50 milyona düştü (tahmin).',
    dunyaOzet: { eko: 'Bağdat, Kurtuba, Konstantinopolis ve Çin\'deki Song kentleri dünyanın en zengin merkezleri; Avrupa 1000\'den sonra yükseliyor.', askeri: 'Zırhlı şövalyeler ve kaleler; 14. yüzyılda barut ve uzun yay.' },
    events: [
      { y: -496, t: 'Clovis vaftiz edildi', k: 'm' }, { y: -529, t: 'Monte Cassino manastırı', k: 'm' }, { y: -711, t: 'Emevîler İspanya\'ya geçti', k: 'm' }, { y: -732, t: 'Poitiers (Tours) Savaşı', k: 'm' },
      { y: -793, t: 'Vikinglerin Lindisfarne baskını', k: 'm' }, { y: -800, t: 'Şarlman imparator oldu', k: 'm' }, { y: -843, t: 'Verdun Antlaşması', k: 'm' }, { y: -962, t: 'Kutsal Roma İmparatorluğu', k: 'm' },
      { y: -1054, t: 'Doğu ve Batı kiliseleri ayrıldı', k: 'm' }, { y: -1066, t: 'Hastings Savaşı', k: 'm' }, { y: -1088, t: 'Bologna Üniversitesi', k: 'm' }, { y: -1096, t: 'Birinci Haçlı Seferi', k: 'm' },
      { y: -1163, t: 'Notre-Dame\'ın yapımı başladı', k: 'm' }, { y: -1215, t: 'Magna Carta', k: 'm' }, { y: -1271, t: 'Marco Polo Çin\'e yola çıktı', k: 'm' }, { y: -1337, t: 'Yüzyıl Savaşları başladı', k: 'm' },
      { y: -1347, t: 'Kara Ölüm Avrupa\'ya ulaştı', k: 'm' }, { y: -1429, t: 'Jeanne d\'Arc Orléans\'ı kurtardı', k: 'm' }, { y: -1450, t: 'Gutenberg matbaası', k: 'm' }, { y: -1453, t: 'İstanbul\'un fethi; Yüzyıl Savaşları bitti', k: 'm' },
      { y: -622, t: 'Hicret', k: 'w' }, { y: -1071, t: 'Malazgirt', k: 'w' }, { y: -1206, t: 'Cengiz Han', k: 'w' }
    ],
    world: [{ from: -476, to: -1453, yer: 'Bizans', t: 'Doğu Roma: Konstantinopolis Avrupa\'nın en büyük şehri.' }, { from: -632, to: -1258, yer: 'İslam dünyası', t: 'Halifelikler; Bağdat\'ta Beytül Hikme.' }, { from: -1206, to: -1368, yer: 'Asya', t: 'Moğol İmparatorluğu.' }, { from: -1299, to: -1453, yer: 'Anadolu', t: 'Osmanlı Devleti doğdu ve büyüdü.' }],
    sites: [{ ad: 'KURTUBA (ENDÜLÜS)', wx: 1500 }, { ad: 'CANTERBURY · LONDRA', wx: 2300 }, { ad: 'MONT-SAINT-MICHEL', wx: 2600 }, { ad: 'PARİS', wx: 2900 }, { ad: 'AACHEN', wx: 3300 }, { ad: 'KÖLN', wx: 3500 }, { ad: 'VENEDİK', wx: 4600 }, { ad: 'ROMA', wx: 4800 }, { ad: 'KİEV', wx: 7200 }],
    monuments: [
      { id: 'kurtuba', ad: 'Kurtuba Ulu Camii (Mezquita)', yer: 'Kurtuba, İspanya', wx: 1500, bank: 'near', type: 'mosque', stil: 'memluk', minare: 1, renk: '#e0c49a', b: 120, h: 24, start: -785, end: -987, vol: 9e4 },
      { id: 'aachen', ad: 'Aachen Saray Şapeli', yer: 'Aachen, Almanya', wx: 3300, type: 'church', kule: true, renk: '#d8cdb8', b: 40, h: 32, start: -792, end: -805, vol: 4e4 },
      { id: 'notredame', ad: 'Notre-Dame Katedrali', yer: 'Paris', wx: 2900, type: 'gothic', b: 60, h: 69, start: -1163, end: -1345, vol: 2e5 },
      { id: 'montsaintmichel', ad: 'Mont-Saint-Michel', yer: 'Normandiya', wx: 2600, type: 'citadel', tepe: true, renk: '#c9c0ae', b: 110, h: 80, start: -1023, end: -1228, vol: 9e4 },
      { id: 'koln', ad: 'Köln Katedrali', yer: 'Köln', wx: 3500, bank: 'near', type: 'gothic', b: 70, h: 157, start: -1248, end: -1880, stop: -1473, maxP: 0.55, vol: 2.5e5 },
      { id: 'londrakulesi', ad: 'Londra Kalesi (White Tower)', yer: 'Londra', wx: 2300, bank: 'near', type: 'citadel', renk: '#e6e0d0', b: 120, h: 27, start: -1078, end: -1100, vol: 7e4 },
      ...ESKI(['kolezyum', 'pantheon', 'stonehenge', 'parthenon'], { kolezyum: { ruin: -1349 } })
    ],
    hizli: [{ ad: 'Clovis', y: -496 }, { ad: 'Endülüs', y: -750 }, { ad: 'Şarlman', y: -800 }, { ad: 'Vikingler', y: -850 }, { ad: 'Hastings', y: -1066 }, { ad: 'Haçlılar', y: -1096 }, { ad: 'Notre-Dame', y: -1250 }, { ad: 'Magna Carta', y: -1215 }, { ad: 'Kara Ölüm', y: -1348 }, { ad: 'Jeanne d\'Arc', y: -1429 }, { ad: 'Matbaa', y: -1450 }],
    bilgi: {
      kurtuba: { ikon: '🕌', yaptiran: 'I. Abdurrahman ve ardılları (Emevî)', donem: '785-987', mimar: '—', sure: '~200 yıl', neden: 'Endülüs Emevî başkentinin ulu camisi.', onem: 'Kırmızı-beyaz çift kemerli 856 sütunuyla İslam mimarisinin şaheseri; 1236\'dan beri katedral.', teknik: [['Sütun', '856'], ['Alan', '~23.400 m²']], nasil: 'Roma ve Vizigot sütunları yeniden kullanıldı; kemerler taş ve tuğla dönüşümlü.', bugun: 'Katedral olarak kullanılıyor; UNESCO.', ilginc: 'Kurtuba 10. yüzyılda 70 kütüphanesi ve sokak lambalarıyla Avrupa\'nın en büyük şehriydi.' },
      aachen: { ikon: '⛪', yaptiran: 'Şarlman', donem: '792-805', mimar: 'Metzli Odo', sure: '~13 yıl', neden: 'Şarlman\'ın saray kilisesi ve mezarı.', onem: '600 yıl boyunca 31 Alman kralı burada taç giydi.', teknik: [['Biçim', 'Sekizgen kubbeli']], nasil: 'Ravenna\'daki San Vitale\'den esinlendi; Roma\'dan sütunlar getirildi.', bugun: 'Aachen Katedrali; UNESCO\'nun ilk listesinde (1978).', ilginc: 'Şarlman\'ın taş tahtı hâlâ burada; tahta oturmak için altından geçip eğilmek gerekiyordu: alçakgönüllülük işareti.' },
      notredame: { ikon: '⛪', yaptiran: 'Paris piskoposu Maurice de Sully', donem: '1163-1345', mimar: 'Jean de Chelles, Pierre de Montreuil ve diğerleri', sure: '~180 yıl', neden: 'Paris\'in katedrali.', onem: 'Gotik mimarinin ilk büyük örneklerinden: uçan payandalar, gül pencereler.', teknik: [['Kuleler', '69 m'], ['Uzunluk', '128 m'], ['Gül pencere', '13 m çap']], nasil: 'Duvarların ağırlığı dışarıdaki "uçan payandalara" aktarıldı; böylece duvarlar incelip büyük vitraylar açılabildi.', bugun: '2019 yangınında çatı ve sivri kule yandı; 7 Aralık 2024\'te yeniden açıldı.', ilginc: 'Victor Hugo\'nun "Notre-Dame\'ın Kamburu" (1831) yıkılmak üzere olan katedralin kurtarılmasını sağladı.' },
      montsaintmichel: { ikon: '🏰', yaptiran: 'Benedikten keşişleri', donem: '1023-1228 (manastır)', mimar: '—', sure: '—', neden: 'Başmelek Mikail\'e adanmış ada manastırı.', onem: 'Gelgitle bazen ada, bazen kara olan kaya.', teknik: [['Yükseklik', '~92 m (tepedeki heykel dahil)']], nasil: 'Kayanın etrafına basamak basamak.', bugun: 'Yılda ~3 milyon ziyaretçi.', ilginc: 'Gelgit farkı 14 m\'ye çıkabilir; su "dörtnala koşan at hızıyla" gelir denir.' },
      koln: { ikon: '⛪', yaptiran: 'Köln başpiskoposluğu', donem: '1248-1473, sonra 1842-1880', mimar: 'Usta Gerhard; 1842\'den sonra Zwirner', sure: '632 yıl (400 yıl ara)', neden: 'Üç Kral\'ın kutsal emanetlerine yakışır bir katedral.', onem: 'Kuzey Avrupa\'nın en büyük Gotik katedrali; 1880-84 arası dünyanın en yüksek yapısı.', teknik: [['Kuleler', '157 m']], nasil: '1473\'te yarım kaldı; güney kulesinin üstündeki ortaçağ vinci 400 yıl şehrin simgesi oldu. Bulunan orijinal planlarla 1880\'de bitirildi.', bugun: 'UNESCO; Almanya\'nın en çok ziyaret edilen yapısı.', ilginc: '2. Dünya Savaşı\'nda 14 bomba isabet etti ama yıkılmadı.' },
      londrakulesi: { ikon: '🏰', yaptiran: 'Fatih William', donem: '1078-1100', mimar: 'Rochester piskoposu Gundulf', sure: '~20 yıl', neden: 'Normanların Londra\'yı denetlemesi.', onem: 'Kraliyet sarayı, hapishane, darphane; bugün taç mücevherleri burada.', teknik: [['White Tower', '27 m']], nasil: 'Normandiya\'dan getirilen Caen taşı.', bugun: 'UNESCO; kuzgunlar ve Beefeater muhafızları.', ilginc: 'Söylenceye göre kuzgunlar kaleden ayrılırsa krallık yıkılır; bu yüzden en az altı kuzgun bakılır.' }
    },
    ulke: [
      { ad: 'Genel bakış', ikon: '🧭', html: '<p>Batı Roma\'nın düşüşünden (476) İstanbul\'un fethine (1453) kadar süren bin yıl. Germen krallıkları, Şarlman\'ın imparatorluğu, Vikingler, feodalite, Haçlı Seferleri, katedraller, üniversiteler ve Kara Ölüm.</p>' },
      { ad: 'Feodalite', ikon: '🏰', html: '<p>Kral topraklarını soylulara, soylular şövalyelere verirdi; karşılığında askerlik ve sadakat. Köylülerin çoğu toprağa bağlı serflerdi.</p>' },
      { ad: 'Kilise', ikon: '✝️', html: '<p>Katolik Kilisesi okulların, hastanelerin ve kitapların merkezi. Manastırlar antik kitapları kopyalayarak korudu.</p>' }
    ]
  });

  // ================= 4. RÖNESANS, REFORM VE KEŞİFLER =================
  window.PLACES.push({
    id: 'avrupa-ronesans', sira: 4, kisa: 'Rönesans ve Keşifler', aralikAd: 'MS 1453 – 1789',
    baslik: 'Leonardo · Kolomb · Luther · Bilim Devrimi · Versay',
    ulkeAlt: 'Rönesans, Reform, Coğrafi Keşifler ve Aydınlanma (MS 1453 – 1789)',
    from: -1453, to: -1789, start: -1504,
    not: 'Tarihler kesindir.', baskent: 'Floransa, Roma, Madrid, Paris (Versay), Londra, Viyana',
    sahne: { kizak: false, giyim: 'cubbe' },
    dynasties: [{ from: -1453, to: -1517, ad: 'Rönesans ve Keşifler', renk: '#c08a2a' }, { from: -1517, to: -1648, ad: 'Reform ve din savaşları', renk: '#6a4a8a' }, { from: -1648, to: -1789, ad: 'Mutlak monarşiler ve Aydınlanma', renk: '#2a5a9a' }],
    rulers: [
      { from: -1453, to: -1492, ad: 'Lorenzo de\' Medici (Floransa) ve İspanyol Katolik Krallar', kisa: 'Medici', kim: 'Medici ailesi Floransa\'da sanatçıları destekledi. İspanya\'da Ferdinand ve İsabel Gırnata\'yı aldı (1492).' },
      { from: -1492, to: -1519, ad: 'Papa II. Julius ve Kral I. François', kisa: 'II. Julius', kim: 'Papa Julius Michelangelo\'ya Sistine tavanını, Rafael\'e odalarını yaptırdı; yeni Aziz Petrus Bazilikası\'nı başlattı.' },
      { from: -1519, to: -1556, ad: 'V. Karl (Habsburg)', kisa: 'V. Karl', kim: 'İspanya, Hollanda, Avusturya, Almanya ve Amerika\'yı yöneten imparator: "Güneş batmayan imparatorluk". Kanuni\'nin rakibi.' },
      { from: -1556, to: -1603, ad: 'II. Felipe ve I. Elizabeth', kisa: 'I. Elizabeth', kim: 'İngiltere İspanyol Armadası\'nı yendi (1588); Shakespeare\'in çağı.' },
      { from: -1603, to: -1648, ad: 'Otuz Yıl Savaşları dönemi', kisa: 'Otuz Yıl', kim: 'Katolik ve Protestanlar arasında Orta Avrupa\'yı yakan savaş (1618-48); Vestfalya Barışı ile bitti.' },
      { from: -1648, to: -1715, ad: 'XIV. Louis (Güneş Kral)', kisa: 'XIV. Louis', kim: '72 yıl tahtta kaldı; Versay Sarayı\'nı yaptırdı: "Devlet benim".' },
      { from: -1715, to: -1789, ad: 'Aydınlanmış despotlar (II. Friedrich, Katerina, Maria Theresia, XVI. Louis)', kisa: 'Aydınlanma', kim: 'Prusya, Rusya ve Avusturya yükseliyor. Fransa\'da borçlar ve kıtlık ihtilale gidiyor.' }
    ],
    eras: [
      { from: -1453, to: -1517, puan: { eko: 4, ordu: 4, istikrar: 3 }, baskent: 'Floransa, Roma, Lizbon, Madrid',
        gundem: 'Rönesans: İtalya\'da antik Yunan-Roma bilgisi yeniden doğuyor. Leonardo da Vinci, Michelangelo, Rafael. Matbaa kitapları ucuzlattı. Portekiz Afrika\'yı dolaşıp Hindistan\'a ulaştı (Vasco da Gama, 1498); Kolomb Amerika\'ya vardı (1492).',
        savas: 'İtalyan Savaşları; Osmanlı Balkanlarda ilerliyor.', ekonomi: 'Ticaret Akdeniz\'den Atlantik\'e kayıyor; Lizbon ve Sevilla zenginleşiyor.',
        din: 'Papalık Rönesans sanatının en büyük hamisi.', yasam: 'Perspektifli resim, sonelerle şiir, banka ve çift taraflı muhasebe.', bilgi: 'Leonardo\'nun not defterlerinde helikopter, tank ve paraşüt çizimleri var; yazılarını aynada okunacak şekilde tersten yazıyordu.' },
      { from: -1517, to: -1648, puan: { eko: 4, ordu: 4, istikrar: 1 }, baskent: 'Madrid, Viyana, Paris, Londra',
        gundem: 'Martin Luther 95 tezini Wittenberg\'de yayımladı (1517): Protestan Reformu. Avrupa Katolik ve Protestan diye bölündü; din savaşları başladı. Kopernik, Galileo ve Kepler Güneş merkezli evreni savundu. Amerika\'dan gelen gümüş fiyatları altüst etti.',
        savas: 'Viyana Kuşatması (1529), İnebahtı (1571), Armada (1588), Otuz Yıl Savaşları (1618-48): Almanya\'nın nüfusunun belki üçte biri öldü.', ekonomi: 'İspanyol gümüşü, Hollanda Doğu Hindistan Şirketi (1602): ilk anonim şirket ve borsa (Amsterdam).',
        din: 'Reform ve Karşı-Reform; Engizisyon.', yasam: 'Shakespeare (Hamlet, 1600), Cervantes (Don Kişot, 1605).', bilgi: 'Galileo 1610\'da teleskopla Jüpiter\'in dört uydusunu buldu; 1633\'te Engizisyon onu ev hapsine mahkûm etti.' },
      { from: -1648, to: -1789, puan: { eko: 5, ordu: 5, istikrar: 3 }, baskent: 'Versay, Londra, Viyana, St. Petersburg',
        gundem: 'Mutlak krallar çağı: XIV. Louis\'nin Versay\'ı bütün Avrupa\'ya örnek oldu. Newton evrensel çekim yasasını yazdı (1687). Aydınlanma düşünürleri (Locke, Voltaire, Rousseau, Montesquieu) akıl, özgürlük ve kuvvetler ayrılığını savundu. İngiltere\'de Sanayi Devrimi başlıyor (buhar makinesi, 1769).',
        savas: 'II. Viyana Kuşatması (1683), Yedi Yıl Savaşları (1756-63): ilk "dünya savaşı" sayılır.', ekonomi: 'Sömürge ticareti, şeker ve köle ticareti; bankalar ve borsalar.',
        din: 'Din savaşları bitti; hoşgörü fikri yayılıyor.', yasam: 'Kahvehaneler (İstanbul\'dan gelen kahve), gazeteler, ansiklopedi (Diderot, 1751).', bilgi: 'Versay\'ın Aynalı Salonu\'ndaki 357 ayna, Venedik\'in ayna tekelini kırmak için Fransa\'da üretildi.' }
    ],
    nufus: [[-1453, 60], [-1600, 90], [-1650, 85], [-1700, 100], [-1789, 150]],
    nufusNot: 'Bütün Avrupa için tahminler.',
    dunyaOzet: { eko: 'Keşifler dünya ticaretini okyanuslara taşıdı; Amerika\'nın gümüşü Çin\'e kadar aktı.', askeri: 'Barutlu ordular, kalyonlar; Osmanlı, Babür ve Çin dev kara imparatorlukları.' },
    events: [
      { y: -1492, t: 'Kolomb Amerika\'ya ulaştı; Gırnata düştü', k: 'm' }, { y: -1498, t: 'Vasco da Gama Hindistan\'a ulaştı', k: 'm' }, { y: -1503, t: 'Leonardo Mona Lisa\'ya başladı', k: 'm' }, { y: -1506, t: 'Aziz Petrus Bazilikası\'nın yapımı başladı', k: 'm' },
      { y: -1508, t: 'Michelangelo Sistine Şapeli tavanına başladı', k: 'm' }, { y: -1517, t: 'Luther\'in 95 tezi', k: 'm' }, { y: -1522, t: 'Magellan seferi dünyayı dolaştı', k: 'm' }, { y: -1543, t: 'Kopernik: Güneş merkezli evren', k: 'm' },
      { y: -1588, t: 'İspanyol Armadası yenildi', k: 'm' }, { y: -1610, t: 'Galileo\'nun teleskobu', k: 'm' }, { y: -1618, t: 'Otuz Yıl Savaşları başladı', k: 'm' }, { y: -1648, t: 'Vestfalya Barışı', k: 'm' },
      { y: -1682, t: 'XIV. Louis Versay\'a taşındı', k: 'm' }, { y: -1687, t: 'Newton\'un Principia\'sı', k: 'm' }, { y: -1703, t: 'St. Petersburg kuruldu', k: 'm' }, { y: -1751, t: 'Diderot\'nun Ansiklopedi\'si', k: 'm' }, { y: -1769, t: 'Watt\'ın buhar makinesi', k: 'm' },
      { y: -1453, t: 'İstanbul\'un fethi', k: 'w' }, { y: -1526, t: 'Babür İmparatorluğu', k: 'w' }, { y: -1776, t: 'ABD bağımsızlığı', k: 'w' }
    ],
    world: [{ from: -1453, to: -1789, yer: 'Osmanlı', t: 'Avrupa\'nın güneydoğusunu yöneten imparatorluk.' }, { from: -1492, to: -1789, yer: 'Amerika', t: 'Sömürgeler; Aztek (1521) ve İnka (1533) yıkıldı.' }, { from: -1526, to: -1789, yer: 'Hindistan', t: 'Babürler: Tac Mahal.' }, { from: -1644, to: -1789, yer: 'Çin', t: 'Qing Hanedanı.' }],
    sites: [{ ad: 'LİZBON', wx: 1000 }, { ad: 'SEVİLLA · MADRİD', wx: 1600 }, { ad: 'LONDRA', wx: 2300 }, { ad: 'VERSAY · PARİS', wx: 2900 }, { ad: 'AMSTERDAM', wx: 3300 }, { ad: 'WİTTENBERG', wx: 3900 }, { ad: 'FLORANSA', wx: 4400 }, { ad: 'ROMA · VATİKAN', wx: 4800 }, { ad: 'VİYANA', wx: 5300 }, { ad: 'ST. PETERSBURG', wx: 7400 }],
    monuments: [
      { id: 'floransa', ad: 'Floransa Katedrali (Brunelleschi kubbesi)', yer: 'Floransa', wx: 4400, type: 'church', buyukKubbe: true, kubbe: '#c0583a', renk: '#eae2d0', kule: true, b: 90, h: 114, start: -1420, end: -1436, vol: 1.8e5 },
      { id: 'aziz_petrus', ad: 'Aziz Petrus Bazilikası', yer: 'Vatikan', wx: 4850, type: 'church', buyukKubbe: true, kubbe: '#8a9aa4', renk: '#e6dcc6', b: 150, h: 136, start: -1506, end: -1626, vol: 2.5e5 },
      { id: 'versay', ad: 'Versay Sarayı', yer: 'Versay, Paris', wx: 2850, bank: 'near', type: 'greek', duz: true, renk: '#efe6d0', boya: 'rgba(200,170,80,0.45)', b: 300, h: 26, sutun: 20, start: -1661, end: -1710, vol: 2e5 },
      { id: 'kremlin', ad: 'Moskova Kremlini ve Aziz Vasil Katedrali', yer: 'Moskova', wx: 7600, type: 'citadel', renk: '#b84a3a', b: 200, h: 40, start: -1485, end: -1561, vol: 1.2e5 },
      ...ESKI(['notredame', 'koln', 'londrakulesi', 'kolezyum', 'pantheon'])
    ],
    hizli: [{ ad: 'Brunelleschi', y: -1436 }, { ad: 'Kolomb', y: -1492 }, { ad: 'Mona Lisa', y: -1503 }, { ad: 'Luther', y: -1517 }, { ad: 'Kopernik', y: -1543 }, { ad: 'Armada', y: -1588 }, { ad: 'Galileo', y: -1610 }, { ad: 'Otuz Yıl', y: -1630 }, { ad: 'Versay', y: -1690 }, { ad: 'Newton', y: -1687 }, { ad: 'Buhar', y: -1769 }],
    bilgi: {
      floransa: { ikon: '⛪', yaptiran: 'Floransa Cumhuriyeti', donem: '1296-1436 (kubbe 1420-1436)', mimar: 'Arnolfo di Cambio; kubbe: Filippo Brunelleschi', sure: '140 yıl', neden: 'Floransa\'nın katedrali (Santa Maria del Fiore).', onem: 'Brunelleschi\'nin kubbesi Rönesans mimarisinin başlangıcı sayılır.', teknik: [['Kubbe', '45,5 m çap; ~37.000 ton'], ['Tuğla', '~4 milyon']], nasil: 'İskele kurmadan, iç içe iki kabuk ve balıksırtı tuğla örgüsüyle; Brunelleschi bunun için yeni vinçler icat etti.', bugun: '463 basamakla kubbeye çıkılabilir.', ilginc: 'Kubbe 1418\'deki yarışmayla seçildi; Brunelleschi yöntemini kimse çalmasın diye gizli tuttu.' },
      aziz_petrus: { ikon: '⛪', yaptiran: 'Papa II. Julius ve ardılları', donem: '1506-1626', mimar: 'Bramante, Rafael, Michelangelo (kubbe), Maderno, Bernini', sure: '120 yıl', neden: 'Aziz Petrus\'un mezarının üstüne yeni bazilika.', onem: 'Dünyanın en büyük kiliselerinden; Katolik dünyasının merkezi.', teknik: [['Kubbe', '136,6 m yükseklik'], ['Alan', '~15.000 m²']], nasil: 'Michelangelo\'nun kubbesi ölümünden sonra 1590\'da bitirildi.', bugun: 'Vatikan; UNESCO.', ilginc: 'Yapımı için satılan "endüljanslar" (günah bağışlama belgeleri) Luther\'in Reform\'u başlatmasının nedenlerinden biriydi.' },
      versay: { ikon: '🏰', yaptiran: 'XIV. Louis', donem: '1661-1710', mimar: 'Louis Le Vau, Jules Hardouin-Mansart; bahçe: André Le Nôtre', sure: '~50 yıl', neden: 'Kralın gücünü göstermek ve soyluları gözetim altında tutmak.', onem: 'Mutlak monarşinin simgesi; 1919 Versay Antlaşması burada imzalandı.', teknik: [['Oda', '2.300'], ['Bahçe', '800 hektar'], ['Aynalı Salon', '73 m, 357 ayna']], nasil: 'Bir av köşkü yıllar içinde dev saraya dönüştü; 36.000 işçi çalıştı.', bugun: 'Yılda ~15 milyon ziyaretçi (bahçeler dahil).', ilginc: 'Kral herkesin gözü önünde uyanır, giyinir ve yemek yerdi: soylular "kralın kalkışını" izlemek için yarışırdı.' },
      kremlin: { ikon: '🏰', yaptiran: 'III. İvan, IV. İvan (Korkunç)', donem: '1485-1561', mimar: 'İtalyan ustalar (Aristotile Fioravanti), Postnik Yakovlev', sure: '—', neden: 'Moskova Büyük Knezliği\'nin kalesi.', onem: 'Rus devletinin merkezi; Aziz Vasil\'in rengârenk soğan kubbeleri Rusya\'nın simgesi.', teknik: [['Sur', '2,2 km, 20 kule']], nasil: 'Kırmızı tuğla surlar İtalyan Rönesans ustalarınca.', bugun: 'Rusya Devlet Başkanlığı; UNESCO.', ilginc: 'Söylenceye göre Korkunç İvan, Aziz Vasil\'in mimarlarını bir benzerini yapamasınlar diye kör ettirdi (doğru olmadığı düşünülüyor).' }
    },
    ulke: [
      { ad: 'Genel bakış', ikon: '🧭', html: '<p>İtalya\'da başlayan <b>Rönesans</b>, matbaa, <b>Coğrafi Keşifler</b>, Luther\'in <b>Reform</b>u, Kopernik\'ten Newton\'a <b>Bilim Devrimi</b> ve <b>Aydınlanma</b>: Avrupa bu üç yüzyılda dünyayı değiştiren fikirler ve güçler üretti.</p>' },
      { ad: 'Sanat', ikon: '🎨', html: '<ul><li>Leonardo: Mona Lisa, Son Akşam Yemeği</li><li>Michelangelo: Davut, Sistine tavanı</li><li>Rafael, Botticelli, Dürer, Rembrandt, Vermeer</li><li>Müzik: Bach, Vivaldi, Mozart</li></ul>' },
      { ad: 'Bilim', ikon: '🔭', html: '<ul><li>Kopernik (1543), Kepler, Galileo</li><li>Newton: çekim yasası (1687)</li><li>Harvey: kan dolaşımı</li><li>Linnaeus: canlıların sınıflandırılması</li></ul>' }
    ]
  });
})();
