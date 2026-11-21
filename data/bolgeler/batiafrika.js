// Kuzey ve Batı Afrika (Mısır hariç: Mağrip, Sahra ve Batı Afrika).
// Yıl: MÖ pozitif, MS negatif. Sahne (wx): Atlas Okyanusu kıyısından Sahel'e, sonra Mağrip'e
//   Dakar/Gore 800 · Kumbi Saleh (Gana) 1300 · Cenne 1800 · Timbuktu 2300 · Gao 2800 · Nok/İfe/Benin 3400 · Lagos 3500 · Kano 3800
//   Kazablanka 4300 · Marakeş 4600 · Fes 5100 · Cezayir 5800 · Kayrevan 6400 · Kartaca 6700 · El Cem 6900 · Leptis Magna 7500
// Kaynaklar: Iliffe, "Africans: The History of a Continent" (2017); Abun-Nasr, "A History of the Maghrib" (1987);
//   Gomez, "African Dominion" (2018); Miles, "Carthage Must Be Destroyed" (2010); UNESCO General History of Africa.
(() => {
  window.PLACES = window.PLACES || [];

  // ================= 1. KARTACA, NUMİDYA VE ROMA AFRİKASI =================
  window.PLACES.push({
    id: 'batiafrika-antik', sira: 1, kisa: 'Kartaca, Nok ve Roma Afrikası', aralikAd: 'MÖ 1500 – MS 700',
    baslik: 'Nok heykelleri · Kartaca · Hannibal · Numidya · Leptis Magna · Augustinus · Vandallar',
    ulkeAlt: 'Berberi boylarından Fenike Kartacası\'na, Roma\'nın Africa eyaletinden Vandallara ve Bizans\'a; güneyde Nok kültürü (MÖ 1500 – MS 700)',
    from: 1500, to: -700, start: 218,
    not: 'Kartaca\'nın kuruluş tarihi söylenceseldir; Sahra altı Afrika için bilgiler arkeolojiye dayanır.', baskent: 'Kartaca, Sirta (Numidya), Leptis Magna',
    sahne: { kizak: false, araba: [1000, 100], deve: [-200, -700], katipYok: true, giyim: 'antik' },
    dynasties: [{ from: 1500, to: 814, ad: 'Berberi boyları ve Fenike limanları', renk: '#7a6a3a' }, { from: 814, to: 146, ad: 'Kartaca', renk: '#7a2a6a' }, { from: 146, to: -429, ad: 'Numidya ve Roma Afrikası', renk: '#a8443a' }, { from: -429, to: -700, ad: 'Vandallar ve Bizans', renk: '#5a4a6a' }],
    rulers: [
      { from: 1500, to: 814, ad: 'Berberi (Amazigh) boyları', kisa: '?', kim: 'Mağrip\'te Berberi çobanlar ve çiftçiler; Sahra\'da kaya resimleri. Fenikeliler kıyıda ticaret durakları kuruyor.' },
      { from: 814, to: 480, ad: 'Kartaca\'nın ilk yüzyılları (söylencede Kraliçe Dido)', kisa: 'Dido', kim: 'Söylenceye göre Surlu prenses Elissa (Dido) bir öküz derisinin kaplayacağı kadar toprak istedi; deriyi ince şeritlere kesip bir tepeyi çevreledi.' },
      { from: 480, to: 264, ad: 'Kartaca\'nın tüccar aristokrasisi', kisa: 'Kartaca', kim: 'İki "suffet" ve bir senato yönetiyor. Kartacalı Hanno Batı Afrika kıyılarına keşif yolculuğu yaptı.' },
      { from: 264, to: 146, ad: 'Pön Savaşları (Hamilkar, Hannibal)', kisa: 'Hannibal', kim: 'Hannibal fillerle Alpleri aştı (MÖ 218), Cannae\'de Roma\'yı ezdi; ama Zama\'da yenildi. Roma MÖ 146\'da Kartaca\'yı yerle bir etti.' },
      { from: 146, to: 46, ad: 'Numidya kralları (Masinissa\'nın mirası, Jugurtha, Juba)', kisa: 'Jugurtha', kim: 'Berberi Numidya krallığı Roma\'nın müttefiki, sonra rakibi oldu; Jugurtha Romalı senatörlere rüşvet vermesiyle ünlü.' },
      { from: 46, to: -193, ad: 'Roma Africa eyaleti', kisa: 'Roma', kim: 'Sezar yeni bir Kartaca kurdurdu. Kuzey Afrika Roma\'nın buğday ve zeytinyağı ambarı oldu.' },
      { from: -193, to: -235, ad: 'Septimius Severus ve Severuslar', kisa: 'Severus', kim: 'Leptis Magna doğumlu ilk Afrikalı Roma imparatoru; memleketini mermer anıtlarla süsledi.' },
      { from: -235, to: -429, ad: 'Geç Roma Afrikası; Aziz Augustinus', kisa: 'Augustinus', kim: 'Hippo piskoposu Augustinus (Berberi kökenli) Batı Hristiyanlığının en etkili düşünürlerinden.' },
      { from: -429, to: -534, ad: 'Vandal kralları (Geiserik)', kisa: 'Geiserik', kim: 'Vandallar İspanya\'dan geçip Kartaca\'yı aldı (439) ve Roma\'yı yağmaladı (455).' },
      { from: -534, to: -700, ad: 'Bizans Afrikası', kisa: 'Bizans', kim: 'Belisarius Vandalları yendi. Arap orduları Kayrevan\'ı kurdu (670) ve Kartaca\'yı aldı (698).' }
    ],
    eras: [
      { from: 1500, to: 480, puan: { eko: 3, ordu: 2, istikrar: 3 }, baskent: 'Kartaca',
        gundem: 'Kuzeyde Berberi boyları ve Kartaca gibi Fenike limanları; güneyde, bugünkü Nijerya\'da Nok kültürü pişmiş topraktan insan heykelleri yapıyor ve demir eritiyor. Sahra artık çöl, ama atlı arabalarla geçiliyor.',
        savas: 'Kartaca\'nın paralı askerleri ve güçlü donanması; Sicilya için Yunanlarla savaşlar.',
        ekonomi: 'Kartaca Akdeniz ticaretinin merkezi: mor boya, seramik, gümüş; Sahra\'dan fildişi ve altın.',
        din: 'Kartaca\'da Baal Hammon ve Tanit; Berberilerde atalar ve doğa güçleri.',
        yasam: 'Nok\'ta büyük gözlü, özenli saç modelli heykeller; Kartaca\'da çok katlı evler.',
        bilgi: 'Nok heykelleri Sahra altı Afrika\'nın bilinen en eski büyük heykelleri; bazıları 2.500 yıldan eski.' },
      { from: 480, to: 146, puan: { eko: 5, ordu: 4, istikrar: 3 }, baskent: 'Kartaca',
        gundem: 'Kartaca batı Akdeniz\'in efendisi: İspanya, Sardinya ve Sicilya\'da üsler. Roma ile üç Pön Savaşı: Hannibal\'ın İtalya seferi efsaneleşti. MÖ 146\'da Roma şehri yaktı ve yıktı.',
        savas: 'Savaş filleri, Numidya süvarisi ve 220 gemilik yuvarlak askeri liman (Kothon).',
        ekonomi: 'Tarım bilimci Mago\'nun kitabı o kadar ünlüydü ki Roma Senatosu onu Latinceye çevirtti.',
        din: 'Tophet: çocuk kurbanı iddiası tarihçiler arasında tartışmalı.',
        yasam: 'Kartaca\'da belki 400.000 kişi yaşıyordu.',
        bilgi: 'Romalı senatör Yaşlı Cato her konuşmasını "Ceterum censeo Carthaginem esse delendam" (Kartaca yıkılmalıdır) diye bitirirdi.' },
      { from: 146, to: -429, puan: { eko: 5, ordu: 3, istikrar: 4 }, baskent: 'Kartaca (Roma eyalet merkezi)',
        gundem: 'Kuzey Afrika Roma\'nın en zengin eyaletlerinden oldu: zeytinlikler, buğday tarlaları, mozaikli villalar, dev amfitiyatrolar. Leptis Magna ve El Cem anıtlarla doldu. Deve Sahra\'ya yayıldı ve kervan ticaretini mümkün kıldı.',
        savas: 'Roma\'ya karşı Berberi isyanları (Tacfarinas). Limes: çöl sınırındaki hendek ve kaleler.',
        ekonomi: 'Afrika zeytinyağı ve buğdayı Roma\'yı besliyor; vahşi hayvanlar amfitiyatrolara gönderiliyor.',
        din: 'Hristiyanlık erken yayıldı: Tertullianus, Kiprianus, Augustinus.',
        yasam: 'Tunus\'un Bardo Müzesi dünyanın en büyük Roma mozaiği koleksiyonlarından birine sahip.',
        bilgi: 'Kuzey Afrika\'daki fil türü (bugün nesli tükenmiş) Hannibal\'ın filleri ve Roma oyunları yüzünden azalmış olabilir.' },
      { from: -429, to: -700, puan: { eko: 3, ordu: 3, istikrar: 2 }, baskent: 'Kartaca, sonra Kayrevan',
        gundem: 'Vandallar bir Germen krallığı kurdu; Bizans onu yıktı. 7. yüzyıl sonunda Arap orduları geldi; Kayrevan Kuzey Afrika\'nın ilk büyük İslam şehri oldu. Berberi kraliçesi Kahina direnişe önderlik etti.',
        savas: 'Vandal donanması; Bizans kaleleri; Kahina\'nın direnişi.',
        ekonomi: 'Şehirler küçüldü; kervan yolları Sahra\'nın güneyine uzanıyor.',
        din: 'Hristiyanlık ve Berberi inançları; İslam yayılmaya başladı.',
        yasam: 'Berberi dilleri ve Latince yan yana.',
        bilgi: '"Vandalizm" kelimesi Vandalların 455\'te Roma\'yı yağmalamasından gelir; oysa çağdaş kaynaklar yağmanın görece kontrollü olduğunu anlatır.' }
    ],
    nufus: [[1500, 2], [500, 4], [146, 5], [-200, 8], [-500, 7], [-700, 7]],
    nufusNot: 'Mağrip ve Batı Afrika için çok kaba tahminler.',
    dunyaOzet: { eko: 'Akdeniz\'de Kartaca ve Roma; Sahra\'nın güneyinde demir ve tarım yayılıyor.', askeri: 'Savaş filleri, Numidya atlıları, Roma lejyonları.' },
    events: [
      { y: 900, t: 'Nok kültürü gelişiyor', k: 'm' }, { y: 814, t: 'Kartaca kuruldu (söylence)', k: 'm' }, { y: 480, t: 'Himera: Kartaca Sicilya\'da yenildi', k: 'm' }, { y: 470, t: 'Hanno\'nun Batı Afrika yolculuğu', k: 'm' },
      { y: 264, t: 'Birinci Pön Savaşı', k: 'm' }, { y: 218, t: 'Hannibal Alpleri aştı', k: 'm' }, { y: 202, t: 'Zama', k: 'm' }, { y: 146, t: 'Kartaca yıkıldı', k: 'm' },
      { y: 105, t: 'Jugurtha yakalandı', k: 'm' }, { y: -193, t: 'Septimius Severus imparator', k: 'm' }, { y: -238, t: 'El Cem amfitiyatrosu', k: 'm' }, { y: -430, t: 'Augustinus öldü', k: 'm' },
      { y: -439, t: 'Vandallar Kartaca\'da', k: 'm' }, { y: -534, t: 'Bizans Afrikası', k: 'm' }, { y: -670, t: 'Kayrevan kuruldu', k: 'm' }, { y: -698, t: 'Araplar Kartaca\'yı aldı', k: 'm' },
      { y: 776, t: 'İlk Olimpiyatlar', k: 'w' }, { y: 44, t: 'Sezar öldürüldü', k: 'w' }, { y: -476, t: 'Batı Roma\'nın sonu', k: 'w' }
    ],
    world: [{ from: 3100, to: 30, yer: 'Mısır', t: 'Firavunlar ve Ptolemaioslar.' }, { from: 509, to: -476, yer: 'Roma', t: 'Kartaca\'nın büyük rakibi.' }, { from: 700, to: -350, yer: 'Nubya', t: 'Kuş krallığı.' }],
    sites: [{ ad: 'NOK', wx: 3300 }, { ad: 'VOLUBİLİS', wx: 5000 }, { ad: 'HİPPO (AUGUSTİNUS)', wx: 6100 }, { ad: 'KARTACA', wx: 6700 }, { ad: 'ZAMA', wx: 6500 }, { ad: 'EL CEM', wx: 6900 }, { ad: 'LEPTİS MAGNA', wx: 7500 }],
    monuments: [
      { id: 'kartaca', ad: 'Kartaca', yer: 'Tunus', wx: 6700, type: 'city', wall: true, b: 320, n: 30, hk: 0.32, start: 814, end: 700, vol: 9e4, ruin: 146, yok: 50 },
      { id: 'kartacaroma', ad: 'Roma Kartacası', yer: 'Tunus', wx: 6750, type: 'city', wall: false, b: 300, n: 28, hk: 0.3, start: 29, end: -50, vol: 7e4, ruin: -698 },
      { id: 'leptis', ad: 'Leptis Magna tiyatrosu ve Severus bazilikası', yer: 'Hums, Libya', wx: 7500, type: 'theater', b: 120, h: 26, start: -193, end: -211, vol: 6e4 },
      { id: 'elcem', ad: 'El Cem Amfitiyatrosu (Thysdrus)', yer: 'Tunus', wx: 6900, type: 'arena', b: 148, h: 36, start: -230, end: -238, vol: 1e5 }
    ],
    hizli: [{ ad: 'Nok', y: 500 }, { ad: 'Kartaca', y: 814 }, { ad: 'Hanno', y: 470 }, { ad: 'Hannibal', y: 218 }, { ad: 'Kartaca yıkıldı', y: 146 }, { ad: 'Severus', y: -200 }, { ad: 'El Cem', y: -238 }, { ad: 'Augustinus', y: -400 }, { ad: 'Vandallar', y: -450 }, { ad: 'Kayrevan', y: -670 }],
    bilgi: {
      kartaca: { ikon: '⚓', yaptiran: 'Surlu Fenikeliler', donem: 'MÖ 814 (söylence) – MÖ 146', mimar: '—', sure: '—', neden: 'Akdeniz ticaret yolunun ortasında liman.', onem: 'Roma\'nın en büyük rakibi; batı Akdeniz\'in efendisi.', teknik: [['Askeri liman', 'Yuvarlak, ~220 gemi'], ['Sur', '~34 km (söylenen)']], nasil: 'Ticari ve askeri iki iç içe liman; Byrsa tepesinde kale.', bugun: 'Tunus\'un banliyösü; UNESCO Dünya Mirası (1979).', ilginc: 'Roma\'nın Kartaca\'nın topraklarına tuz serptiği hikâyesi 19. yüzyılda uydurulmuş bir efsanedir.' },
      kartacaroma: { ikon: '🏛️', yaptiran: 'Julius Sezar ve Augustus', donem: 'MÖ 29\'dan', mimar: '—', sure: '—', neden: 'Eski Kartaca\'nın yerinde Roma kolonisi.', onem: 'Roma İmparatorluğu\'nun en büyük şehirlerinden.', teknik: [['Antoninus hamamları', 'Roma dünyasının en büyüklerinden']], nasil: 'Izgara planlı Roma şehri; su kemeri 132 km.', bugun: 'Ören yeri.', ilginc: 'Zaghouan su kemeri Kartaca\'ya 132 km uzaktan su taşıyordu.' },
      leptis: { ikon: '🏛️', yaptiran: 'Septimius Severus', donem: 'MS 2-3. yy', mimar: '—', sure: '—', neden: 'İmparatorun doğduğu şehri süslemek.', onem: 'Akdeniz\'in en iyi korunmuş Roma şehirlerinden.', teknik: [['Tiyatro', 'MS 1-2'], ['Severus forumu', '~100 × 60 m']], nasil: 'Mermer ve kireçtaşı; liman, bazilika, hamamlar.', bugun: 'UNESCO Dünya Mirası (1982, tehlike altında).', ilginc: 'Şehir yüzyıllarca kumun altında kaldığı için çok iyi korundu.' },
      elcem: { ikon: '🏟️', yaptiran: 'Thysdrus halkı (zeytinyağı zenginliğiyle)', donem: '~238', mimar: '—', sure: '—', neden: 'Gladyatör ve hayvan dövüşleri.', onem: 'Roma dünyasının en büyük amfitiyatrolarından; Kolezyum\'dan sonra üçüncü büyük.', teknik: [['Seyirci', '~35.000'], ['Boyut', '148 × 122 m']], nasil: 'Bir tepeye yaslanmadan, tamamen taş kemerler üzerinde.', bugun: 'UNESCO Dünya Mirası (1979).', ilginc: 'Gladyatör filminin bazı sahneleri için örnek alındı.' }
    },
    ulke: [
      { ad: 'Genel bakış', ikon: '🧭', html: '<p>Kuzey Afrika\'nın yerlileri <b>Berberiler</b>dir (İmazigen). Fenikeliler kıyıda <b>Kartaca</b>\'yı kurdu; Kartaca Roma\'yla savaşıp yenildi ve bölge Roma\'nın zengin bir eyaleti oldu. Sahra\'nın güneyinde <b>Nok</b> kültürü demir ve pişmiş toprak heykelleriyle Batı Afrika\'nın ilk büyük uygarlıklarından biriydi.</p>' }
    ]
  });

  // ================= 2. GANA, MALİ, SONGHAY VE MAĞRİP =================
  window.PLACES.push({
    id: 'batiafrika-imparatorluk', sira: 2, kisa: 'Gana, Mali ve Songhay', aralikAd: 'MS 700 – 1591',
    baslik: 'Altın ve tuz · Kayrevan · Murabıtlar · Sundiata · Mansa Musa · Timbuktu · Benin',
    ulkeAlt: 'Sahra kervanlarının altın çağı: Batı Afrika imparatorlukları ve Mağrip hanedanları (MS 700 – 1591)',
    from: -700, to: -1591, start: -1324,
    not: 'Batı Afrika tarihleri Arap kaynaklarına ve sözlü geleneğe (griotlar) dayanır; bazıları yaklaşıktır.', baskent: 'Kumbi Saleh (Gana), Niani (Mali), Gao (Songhay), Kayrevan, Fes, Marakeş',
    sahne: { kizak: false, araba: false, deve: true, giyim: 'cubbe' },
    dynasties: [{ from: -700, to: -1050, ad: 'Gana İmparatorluğu; Kayrevan ve Fes', renk: '#a8742e' }, { from: -1050, to: -1235, ad: 'Murabıtlar ve Muvahhidler', renk: '#2a6a5a' }, { from: -1235, to: -1464, ad: 'Mali İmparatorluğu', renk: '#c89a2a' }, { from: -1464, to: -1591, ad: 'Songhay İmparatorluğu', renk: '#8a4a2a' }],
    rulers: [
      { from: -700, to: -800, ad: 'Emevî valileri; Tarık bin Ziyad', kisa: 'Tarık', kim: 'Berberi komutan Tarık 711\'de Cebelitarık\'ı geçip İspanya\'ya girdi; Cebelitarık "Tarık\'ın dağı" demek.' },
      { from: -800, to: -909, ad: 'Ağlebîler (Kayrevan) ve İdrisîler (Fes)', kisa: 'Ağlebîler', kim: 'Kayrevan Ulu Camii yeniden yapıldı; Fes\'te Karaviyyin Camii (859) kuruldu.' },
      { from: -909, to: -1050, ad: 'Fatımîler ve Zirîler; güneyde Gana kralları', kisa: 'Fatımîler', kim: 'Fatımîler Tunus\'ta doğup Mısır\'a geçti. Gana kralları "altın ülkesinin" efendisi.' },
      { from: -1050, to: -1106, ad: 'Murabıtlar (Yusuf bin Taşfin)', kisa: 'Yusuf b. Taşfin', kim: 'Sahra\'dan çıkan Berberi Murabıtlar Marakeş\'i kurdu ve Endülüs\'e geçti (Zallaka, 1086).' },
      { from: -1106, to: -1147, ad: 'Son Murabıtlar', kisa: 'Murabıtlar', kim: 'Muvahhid hareketi Atlas dağlarında doğdu.' },
      { from: -1147, to: -1235, ad: 'Muvahhidler (Abdülmümin, Yakub el-Mansur)', kisa: 'Muvahhidler', kim: 'Mağrip\'i ve Endülüs\'ü birleştirdiler; Kutubiyye Camii. Filozof İbn Rüşd onların sarayındaydı.' },
      { from: -1235, to: -1255, ad: 'Sundiata Keita', kisa: 'Sundiata', kim: 'Destana göre çocukken yürüyemeyen "Aslan Kral"; Kirina Savaşı\'nda Sosso kralını yenip Mali İmparatorluğu\'nu kurdu.' },
      { from: -1255, to: -1312, ad: 'Mali mansaları', kisa: 'Mansalar', kim: 'Mansa Ebubekir II\'nin Atlas Okyanusu\'na filo gönderdiği anlatılır.' },
      { from: -1312, to: -1337, ad: 'Mansa Musa', kisa: 'Mansa Musa', kim: '1324 hac yolculuğunda Kahire\'de o kadar altın dağıttı ki altının değeri yıllarca düştü. Timbuktu\'yu bilim merkezi yaptı.' },
      { from: -1337, to: -1464, ad: 'Geç Mali; Mağrip\'te Merinîler ve Hafsîler', kisa: 'Mali', kim: 'İbn Battuta Mali\'yi ziyaret etti (1352). Tuaregler Timbuktu\'yu aldı. Fes\'te Merinî medreseleri; İbn Haldun Mukaddime\'yi yazdı (1377).' },
      { from: -1464, to: -1493, ad: 'Sonni Ali', kisa: 'Sonni Ali', kim: 'Gao\'lu Songhay hükümdarı; Timbuktu ve Cenne\'yi aldı, Batı Afrika\'nın en büyük imparatorluğunu kurdu.' },
      { from: -1493, to: -1528, ad: 'Askia Muhammed', kisa: 'Askia', kim: 'Hacca gitti, Timbuktu\'da âlimleri destekledi, imparatorluğu eyaletlere böldü.' },
      { from: -1528, to: -1591, ad: 'Son Askialar', kisa: 'Askialar', kim: 'Tondibi\'de (1591) Fas\'ın tüfekli ordusuna yenildiler.' }
    ],
    eras: [
      { from: -700, to: -1050, puan: { eko: 4, ordu: 4, istikrar: 3 }, baskent: 'Kumbi Saleh, Kayrevan, Fes',
        gundem: 'Sahra\'yı develerle geçen kervanlar kuzeyin tuzunu güneyin altınıyla takas ediyor. Gana "altın ülkesi" olarak ünlü. Kuzeyde İslam ve Arapça yayıldı; Kayrevan ve Fes büyük ilim merkezleri. Fes\'teki Karaviyyin dünyanın hâlâ eğitim veren en eski üniversitesi sayılır.',
        savas: 'Gana\'nın 200.000 kişilik ordusu olduğu yazılır (abartılı olabilir).',
        ekonomi: 'Tuz, altın, köle, fildişi, bakır kervanları; Sicilmase Sahra\'nın kuzey kapısı.',
        din: 'Mağrip\'te İslam; Gana\'da kral geleneksel dinde ama Müslüman tüccarların ayrı bir şehri var.',
        yasam: 'Batı Afrika\'da griotlar (söz ustaları) tarihi şarkılarla aktarıyor.',
        bilgi: 'Fes\'teki Karaviyyin\'i 859\'da Kayrevanlı bir kadın, Fatıma el-Fihri kurdu.' },
      { from: -1050, to: -1235, puan: { eko: 5, ordu: 5, istikrar: 3 }, baskent: 'Marakeş',
        gundem: 'Murabıtlar ve Muvahhidler Mağrip\'i ve Endülüs\'ü birleştiren Berberi imparatorlukları kurdu. Marakeş, Rabat ve Sevilla\'da büyük camiler. Gana zayıfladı; Batı Afrika\'da yeni güçler doğdu. Nijerya\'da İfe\'nin tunç başları yapıldı.',
        savas: 'Berberi deve ve at süvarisi; Endülüs\'te Kastilya\'ya karşı savaşlar.',
        ekonomi: 'Murabıt altın dinarı Akdeniz\'in güvenilir parası.',
        din: 'Maliki mezhebi; Muvahhidlerin tevhid öğretisi.',
        yasam: 'İbn Rüşd Aristoteles\'i yorumladı; Avrupa onu "Averroes" diye tanıdı.',
        bilgi: 'İfe\'nin tunç başları o kadar gerçekçi ki 1938\'de bulunduklarında Avrupalılar ilk başta Afrikalıların yaptığına inanmak istemedi.' },
      { from: -1235, to: -1464, puan: { eko: 5, ordu: 4, istikrar: 4 }, baskent: 'Niani; kuzeyde Fes ve Tunus',
        gundem: 'Mali İmparatorluğu Atlas Okyanusu\'ndan Nijer\'e uzanıyor; dünyanın altınının büyük kısmı buradan çıkıyor. Mansa Musa\'nın haccı dünyayı şaşırttı; 1375 Katalan Atlası onu elinde altın külçeyle çizdi. Timbuktu\'da Sankore medresesi ve yazma kütüphaneler.',
        savas: 'Atlı süvari ve okçular; Mağrip\'te Merinî-Hafsî savaşları.',
        ekonomi: 'Altın, tuz, bakır, kola cevizi; Cenne ve Timbuktu pazarları.',
        din: 'Saray ve şehirler Müslüman; köylerde geleneksel inançlar.',
        yasam: 'Kerpiç camiler: Cenne ve Timbuktu\'nun Cingerey Ber camisi. Kurukan Fuga ("Mali anayasası") sözlü gelenekte.',
        bilgi: 'Mansa Musa bugün bazı listelerde "tarihin en zengin insanı" olarak anılır; ama servetini sayıyla ölçmek imkânsız.' },
      { from: -1464, to: -1591, puan: { eko: 5, ordu: 4, istikrar: 3 }, baskent: 'Gao; Benin şehri; Fes',
        gundem: 'Songhay İmparatorluğu Batı Afrika\'nın en büyük devleti oldu; Timbuktu\'da on binlerce öğrenci. Güneyde Benin krallığı tunç levhalar ve dev toprak surlarıyla. Portekizliler kıyıya geldi (1440\'lar); Atlantik köle ticareti başladı. 1591\'de Fas ordusu Songhay\'ı yıktı.',
        savas: 'Songhay süvarisi ve Nijer nehri filosu; Tondibi\'de tüfekler kazandı.',
        ekonomi: 'Altın kervanları; Portekiz gemileri kıyıda altın ve köle almaya başladı.',
        din: 'Timbuktu\'nun Sankore, Cingerey Ber ve Sidi Yahya medreseleri.',
        yasam: 'Benin ustaları kayıp mum yöntemiyle tunç döküyor.',
        bilgi: 'Timbuktu\'nun yazmaları (yüz binlerce sayfa: astronomi, tıp, hukuk) 2012\'de cihatçılardan kurtarmak için gizlice Bamako\'ya kaçırıldı.' }
    ],
    nufus: [[-700, 8], [-1000, 11], [-1300, 16], [-1500, 22], [-1591, 24]],
    nufusNot: 'Mağrip ve Batı Afrika için kaba tahminler.',
    dunyaOzet: { eko: 'Batı Afrika altını Akdeniz ve İslam dünyasının parasını besledi; Avrupa\'nın altınının büyük kısmı da buradan geldi.', askeri: 'Deve ve at süvarisi; 16. yüzyılda ateşli silahlar.' },
    events: [
      { y: -711, t: 'Tarık bin Ziyad İspanya\'ya geçti', k: 'm' }, { y: -836, t: 'Kayrevan Ulu Camii', k: 'm' }, { y: -859, t: 'Karaviyyin kuruldu', k: 'm' }, { y: -1070, t: 'Marakeş kuruldu', k: 'm' },
      { y: -1076, t: 'Murabıtlar ve Gana', k: 'm' }, { y: -1195, t: 'Kutubiyye minaresi', k: 'm' }, { y: -1235, t: 'Kirina: Mali İmparatorluğu', k: 'm' }, { y: -1324, t: 'Mansa Musa\'nın haccı', k: 'm' },
      { y: -1327, t: 'Cingerey Ber Camii', k: 'm' }, { y: -1352, t: 'İbn Battuta Mali\'de', k: 'm' }, { y: -1375, t: 'Katalan Atlası', k: 'm' }, { y: -1377, t: 'İbn Haldun: Mukaddime', k: 'm' },
      { y: -1444, t: 'Portekizliler Senegal\'de', k: 'm' }, { y: -1468, t: 'Sonni Ali Timbuktu\'yu aldı', k: 'm' }, { y: -1495, t: 'Askia Muhammed\'in haccı', k: 'm' }, { y: -1591, t: 'Tondibi', k: 'm' },
      { y: -1099, t: 'Haçlılar Kudüs\'te', k: 'w' }, { y: -1453, t: 'İstanbul\'un fethi', k: 'w' }, { y: -1492, t: 'Kolomb; Gırnata düştü', k: 'w' }
    ],
    world: [{ from: -711, to: -1492, yer: 'Endülüs', t: 'İber Yarımadası\'nda Müslüman yönetimi.' }, { from: -969, to: -1517, yer: 'Mısır', t: 'Fatımîler, Eyyubîler, Memlükler.' }, { from: -1299, to: -1591, yer: 'Anadolu', t: 'Osmanlı; Cezayir ve Tunus\'a uzandı (16. yy).' }],
    sites: [{ ad: 'KUMBİ SALEH (GANA)', wx: 1300 }, { ad: 'NİANİ (MALİ)', wx: 1600 }, { ad: 'CENNE', wx: 1800 }, { ad: 'TİMBUKTU', wx: 2300 }, { ad: 'GAO', wx: 2800 }, { ad: 'İFE', wx: 3300 }, { ad: 'BENİN', wx: 3400 }, { ad: 'SİCİLMASE', wx: 4400 }, { ad: 'MARAKEŞ', wx: 4600 }, { ad: 'FES', wx: 5100 }, { ad: 'KAYREVAN', wx: 6400 }],
    monuments: [
      { id: 'kumbisaleh', ad: 'Kumbi Saleh (Gana başkenti)', yer: 'Moritanya', wx: 1300, type: 'city', wall: false, b: 240, n: 20, hk: 0.24, start: -800, end: -900, vol: 4e4, ruin: -1240 },
      { id: 'kayrevan', ad: 'Kayrevan Ulu Camii', yer: 'Tunus', wx: 6400, type: 'mosque', minare: 1, b: 130, h: 32, kubbe: '#d8c49c', renk: '#e0d0aa', start: -836, end: -840, vol: 7e4 },
      { id: 'kutubiyye', ad: 'Kutubiyye Camii', yer: 'Marakeş, Fas', wx: 4600, type: 'mosque', minare: 1, b: 110, h: 77, kubbe: '#3a8a5a', renk: '#c8865a', start: -1158, end: -1195, vol: 7e4 },
      { id: 'cenne', ad: 'Cenne Ulu Camii', yer: 'Mali', wx: 1800, type: 'sahel', b: 150, h: 32, n: 6, start: -1240, end: -1250, vol: 5e4 },
      { id: 'cingereyber', ad: 'Cingerey Ber Camii', yer: 'Timbuktu, Mali', wx: 2300, type: 'sahel', b: 120, h: 26, n: 5, start: -1325, end: -1327, vol: 4e4 },
      { id: 'benin', ad: 'Benin Şehri ve surları', yer: 'Edo, Nijerya', wx: 3400, type: 'city', wall: true, b: 300, n: 28, hk: 0.26, start: -1440, end: -1473, vol: 7e4, ruin: -1897 }
    ],
    hizli: [{ ad: 'Tarık', y: -711 }, { ad: 'Karaviyyin', y: -859 }, { ad: 'Gana', y: -1000 }, { ad: 'Marakeş', y: -1070 }, { ad: 'Kutubiyye', y: -1195 }, { ad: 'Sundiata', y: -1235 }, { ad: 'Mansa Musa', y: -1324 }, { ad: 'İbn Battuta', y: -1352 }, { ad: 'Songhay', y: -1500 }, { ad: 'Tondibi', y: -1591 }],
    bilgi: {
      kumbisaleh: { ikon: '🪙', yaptiran: 'Gana (Wagadu) krallığı', donem: '~9-13. yy', mimar: '—', sure: '—', neden: 'Gana\'nın başkenti olduğu düşünülen şehir.', onem: '"Altın ülkesi"nin merkezi.', teknik: [['Nüfus', '~15.000-20.000 (tahmin)']], nasil: 'Taş evli Müslüman tüccar şehri ve ayrı bir kral şehri.', bugun: 'Moritanya\'da ören yeri.', ilginc: 'Coğrafyacı el-Bekri (1068), Gana kralının köpeklerinin altın tasmalar taktığını yazar.' },
      kayrevan: { ikon: '🕌', yaptiran: 'Ukbe bin Nafi (670); bugünkü hâli Ağlebî Ziyadetullah', donem: '836', mimar: '—', sure: '—', neden: 'Kuzey Afrika\'nın ilk büyük camisi.', onem: 'Mağrip\'in en eski camilerinden; "dördüncü kutsal şehir" Kayrevan\'ın kalbi.', teknik: [['Alan', '~9.000 m²'], ['Minare', '~31 m, kare']], nasil: 'Roma ve Bizans yapılarından alınmış 400\'den fazla sütun.', bugun: 'UNESCO Dünya Mirası (1988).', ilginc: 'Kare minaresi dünyanın ayakta kalan en eski minarelerinden biri sayılır.' },
      kutubiyye: { ikon: '🕌', yaptiran: 'Muvahhid halifesi Abdülmümin; minare Yakub el-Mansur', donem: '1158-1195', mimar: '—', sure: '—', neden: 'Marakeş\'in ulu camisi.', onem: 'Sevilla\'nın Giralda\'sına ve Rabat\'ın Hasan Kulesi\'ne örnek oldu.', teknik: [['Minare', '~77 m']], nasil: 'Kumtaşı minare; içinde rampa, tepede bakır küreler.', bugun: 'Marakeş\'in simgesi.', ilginc: 'Adı, çevresindeki kitapçılardan ("kütübiyyun") gelir.' },
      cenne: { ikon: '🕌', yaptiran: 'Kral Koi Konboro (13. yy, geleneğe göre)', donem: '13. yy; bugünkü hâli 1907', mimar: 'İsmaila Traoré (1907)', sure: '—', neden: 'Cenne\'nin ulu camisi.', onem: 'Dünyanın en büyük kerpiç yapısı.', teknik: [['Platform', '75 × 75 m'], ['Duvar', '~16 m']], nasil: 'Güneşte kurutulmuş kerpiç; dışarı taşan hurma kütükleri iskele olarak kullanılır.', bugun: 'UNESCO Dünya Mirası (1988).', ilginc: 'Her yıl şehrin bütün halkı "Crépissage" şenliğinde camiyi yeni çamurla sıvar.' },
      cingereyber: { ikon: '🕌', yaptiran: 'Mansa Musa; mimar Endülüslü şair es-Sahili', donem: '1327', mimar: 'Ebu İshak es-Sahili', sure: '—', neden: 'Hacdan dönüşte Timbuktu\'ya cami.', onem: 'Timbuktu\'nun üç büyük camisinden biri.', teknik: [['Saf', '25 sıra']], nasil: 'Kerpiç, taş ve ahşap.', bugun: 'UNESCO Dünya Mirası.', ilginc: 'Mansa Musa mimara 200 kilo altın ödediği anlatılır.' },
      benin: { ikon: '🛡️', yaptiran: 'Oba (kral) Ewuare', donem: '15. yy', mimar: '—', sure: '—', neden: 'Benin krallığının başkenti.', onem: 'Dünyanın en büyük toprak yapılarından biri: hendekli surlar.', teknik: [['Surların toplam uzunluğu', '~16.000 km (bütün krallıkta, tahmin)']], nasil: 'Toprak setler ve hendekler; geniş caddeler; tunç levhalı saray.', bugun: '1897\'de İngiliz seferinde yakıldı; Benin tunçlarının bir kısmı iade ediliyor.', ilginc: 'Benin tunçları Avrupa müzelerine dağıldı; Almanya 2022\'de yüzlercesini Nijerya\'ya iade etmeye başladı.' }
    },
    ulke: [
      { ad: 'Genel bakış', ikon: '🧭', html: '<p>Deve ve kervanlarla Sahra bir okyanus gibi geçilir oldu: kuzeyden tuz, güneyden altın. Batı Afrika\'da <b>Gana, Mali ve Songhay</b> imparatorlukları doğdu; Timbuktu bir ilim şehrine dönüştü. Kuzeyde Berberi <b>Murabıt</b> ve <b>Muvahhid</b> imparatorlukları Mağrip ve Endülüs\'ü yönetti.</p>' },
      { ad: 'Altın ve tuz', ikon: '🪙', html: '<ul><li>Sahra\'nın ortasındaki Tegaza ve Taudeni\'de tuz kalıpları kesildi.</li><li>Güneyde Bambuk ve Bure\'de altın çıkarıldı.</li><li>"Sessiz ticaret": tüccarlar malları bırakıp uzaklaşır, karşı taraf altınını yanına koyardı.</li><li>Bir deve kervanında binlerce deve olabiliyordu.</li></ul>' }
    ]
  });

  // ================= 3. FAS'TAN BAĞIMSIZLIĞA =================
  window.PLACES.push({
    id: 'batiafrika-modern', sira: 3, modern: true, kisa: 'Köle ticareti, sömürge ve bağımsızlık', aralikAd: 'MS 1591 – bugün',
    baslik: 'Atlantik köle ticareti · Aşanti · Abdülkadir · Afrika\'nın paylaşılması · bağımsızlık',
    ulkeAlt: 'Atlantik köle ticaretinden Fransız ve İngiliz sömürgelerine, bağımsızlıktan bugüne (MS 1591 – bugün)',
    from: -1591, to: -2026, start: -1960,
    not: 'Tarihler kesindir. Köle ticareti rakamları Trans-Atlantic Slave Trade Database tahminleridir.', baskent: 'Marakeş, Meknes, Kumasi, Abomey; bugün Rabat, Cezayir, Tunus, Dakar, Abuja, Akra ve diğerleri',
    sahne: { kizak: false, deve: [-1591, -1960], buhar: -1890, oto: -1930, ucak: -1940, turist: -1980, giyim: [[-1591, 'cubbe'], [-1950, 'modern']] },
    dynasties: [{ from: -1591, to: -1830, ad: 'Fas sultanları, garp ocakları ve Batı Afrika krallıkları', renk: '#7a5a2a' }, { from: -1830, to: -1956, ad: 'Sömürge çağı', renk: '#4a4a7a' }, { from: -1956, to: -2026, ad: 'Bağımsız devletler', renk: '#2a8a4a' }],
    rulers: [
      { from: -1591, to: -1603, ad: 'Ahmed el-Mansur (Fas)', kisa: 'el-Mansur', kim: 'Vadi\'l-Mahazin\'de (1578) Portekiz kralını yendi; Songhay\'ı ele geçirdi ve "Altın" lakabını aldı.' },
      { from: -1603, to: -1672, ad: 'Saadîlerin çöküşü; Osmanlı garp ocakları', kisa: 'Garp ocakları', kim: 'Cezayir, Tunus ve Trablus Osmanlı\'ya bağlı; Akdeniz\'de korsan (levent) donanmaları.' },
      { from: -1672, to: -1727, ad: 'Mevlay İsmail (Fas)', kisa: 'Mevlay İsmail', kim: 'Meknes\'i dev bir saray şehri yaptı; siyah askerlerden ordu (Abid el-Buhari) kurdu.' },
      { from: -1727, to: -1830, ad: 'Aşanti, Dahomey ve Oyo krallıkları', kisa: 'Aşanti', kim: 'Kumasi merkezli Aşanti krallığı altın ve köle ticaretiyle güçlendi; Altın Tabure kutsal simge.' },
      { from: -1830, to: -1884, ad: 'Fransız Cezayir\'i ve Emir Abdülkadir', kisa: 'Abdülkadir', kim: 'Fransa Cezayir\'i işgal etti (1830); Emir Abdülkadir 15 yıl direndi. Sokoto Halifeliği (1804) kuzey Nijerya\'da.' },
      { from: -1884, to: -1914, ad: 'Afrika\'nın paylaşılması', kisa: 'Paylaşım', kim: 'Berlin Konferansı (1884-85). Fransa Batı Afrika\'nın çoğunu, İngiltere Nijerya ve Altın Kıyısı\'nı aldı. Samori Ture ve Aşantiler direndi.' },
      { from: -1914, to: -1956, ad: 'Sömürge yönetimleri', kisa: 'Sömürgeler', kim: 'Afrikalı askerler iki dünya savaşında savaştı (Senegal tüfekçileri). Libya 1951\'de bağımsız oldu.' },
      { from: -1956, to: -1970, ad: 'Bağımsızlık önderleri (Nkrumah, Senghor, Burgiba, V. Muhammed)', kisa: 'Nkrumah', kim: 'Fas ve Tunus (1956), Gana (1957), 1960\'ta 17 Afrika ülkesi; Cezayir savaşla (1962).' },
      { from: -1970, to: -2026, ad: 'Bağımsız devletler', kisa: 'Bağımsız', kim: 'Darbeler, iç savaşlar (Nijerya-Biafra, Liberya, Sierra Leone) ve demokratikleşme. 2011 Arap Baharı Tunus\'ta başladı.' }
    ],
    eras: [
      { from: -1591, to: -1830, puan: { eko: 3, ordu: 3, istikrar: 2 }, baskent: 'Marakeş, Meknes, Cezayir, Kumasi, Abomey, Oyo',
        gundem: 'Atlantik köle ticareti zirvede: 1500-1866 arası ~12,5 milyon Afrikalı Amerika\'ya gemilerle götürüldü, yolda yaklaşık 1,8 milyonu öldü. Kıyıda Aşanti, Dahomey ve Oyo krallıkları güçlendi. Mağrip\'te Fas sultanları ve Osmanlı garp ocakları.',
        savas: 'Tüfek ticareti krallıklar arası savaşları kızıştırdı; Dahomey\'nin kadın savaşçıları (Agoji).',
        ekonomi: 'Köle, altın, palmiye yağı karşılığında silah, kumaş, rom. Akdeniz\'de korsanlık.',
        din: 'Sahel\'de İslam\'ın yeniden canlanması; kıyıda geleneksel dinler (Vodun).',
        yasam: 'Gore, Elmina, Ouidah: köle kaleleri ve "dönüşü olmayan kapılar".',
        bilgi: 'Vodun (voodoo) inancı Benin\'deki Dahomey\'den köle ticaretiyle Haiti\'ye ve Amerika\'ya taşındı.' },
      { from: -1830, to: -1914, puan: { eko: 3, ordu: 2, istikrar: 1 }, baskent: 'Cezayir, Dakar, Lagos (sömürge merkezleri)',
        gundem: 'Köle ticareti yasaklandı (İngiltere 1807) ama Avrupa ülkeleri bu kez toprakları ele geçirdi. Fransa Cezayir\'i 1830\'da işgal etti; 1884-85 Berlin Konferansı Afrika\'yı haritada paylaştı. Samori Ture, Emir Abdülkadir ve Aşantiler direndi.',
        savas: 'Maxim makineli tüfeği sömürge savaşlarının sonucunu belirledi.',
        ekonomi: 'Yer fıstığı, kakao, palmiye yağı, kauçuk ihracatı; demiryolları limanlara.',
        din: 'Sokoto Halifeliği; misyoner okulları.',
        yasam: 'Sınırlar Avrupa\'da cetvelle çizildi; aynı halklar farklı ülkelere bölündü.',
        bilgi: '1914\'te Afrika\'da yalnızca iki ülke bağımsızdı: Etiyopya ve Liberya.' },
      { from: -1914, to: -1960, puan: { eko: 3, ordu: 2, istikrar: 2 }, baskent: 'Rabat, Cezayir, Tunus, Dakar, Lagos, Akra',
        gundem: 'Sömürge yönetimi altında okullar, şehirler ve demiryolları, ama ağır vergiler ve zorla çalıştırma. Afrikalı askerler iki dünya savaşında Avrupa için savaştı. Savaş sonrası bağımsızlık hareketleri güçlendi; Gana 1957\'de Sahra altında bağımsızlığını kazanan ilk sömürge oldu.',
        savas: 'Cezayir Bağımsızlık Savaşı (1954-1962): yüz binlerce ölü.',
        ekonomi: 'Kakao (Altın Kıyısı dünyanın en büyük üreticisi), fosfat, petrol (Nijerya 1956).',
        din: 'İslam, Hristiyanlık ve geleneksel inançlar.',
        yasam: 'Négritude: Senghor ve Césaire\'in Afrika kimliği hareketi.',
        bilgi: '1960 "Afrika Yılı" olarak anılır: o yıl 17 Afrika ülkesi bağımsız oldu.' },
      { from: -1960, to: -2026, puan: { eko: 3, ordu: 3, istikrar: 2 }, baskent: 'Rabat, Cezayir, Tunus, Trablus, Dakar, Bamako, Abuja, Akra',
        gundem: 'Bağımsız devletler yoksulluk, darbeler ve iç savaşlarla uğraştı; Nijerya Afrika\'nın en kalabalık ülkesi ve en büyük ekonomilerinden biri oldu. 2011\'de Tunus\'ta başlayan Arap Baharı Libya\'da iç savaşa yol açtı. Sahel\'de cihatçı gruplar ve darbeler.',
        savas: 'Biafra Savaşı (1967-1970); Liberya ve Sierra Leone iç savaşları; Mali ve Sahel çatışmaları.',
        ekonomi: 'Petrol (Nijerya, Cezayir, Libya), fosfat (Fas), kakao (Fildişi Sahili, Gana); hızla büyüyen teknoloji ve müzik sektörleri.',
        din: 'Kuzey ve Sahel\'de İslam, kıyıda Hristiyanlık.',
        yasam: 'Afrobeats, Nollywood (Nijerya, dünyanın en çok film üreten ikinci sineması); dünyanın en genç nüfusu.',
        bilgi: 'Nijerya\'nın nüfusunun 2050\'ye kadar ~375 milyona çıkıp ABD\'yi geçmesi bekleniyor.' }
    ],
    nufus: [[-1591, 24], [-1800, 30], [-1900, 45], [-1950, 95], [-1980, 200], [-2000, 300], [-2026, 535]],
    nufusNot: 'Mağrip (Fas, Cezayir, Tunus, Libya) ve Batı Afrika toplamı; eski rakamlar kaba tahmindir.',
    dunyaOzet: { eko: 'Atlantik ekonomisi Afrikalıların zorla çalıştırılmasıyla büyüdü; 20. yüzyılda bağımsız Afrika hammaddeye bağımlı kaldı.', askeri: 'Tüfekten makineli tüfeğe; sömürge orduları.' },
    events: [
      { y: -1591, t: 'Tondibi: Songhay\'ın sonu', k: 'm' }, { y: -1672, t: 'Mevlay İsmail', k: 'm' }, { y: -1701, t: 'Aşanti krallığı', k: 'm' }, { y: -1776, t: 'Gore Köle Evi', k: 'm' },
      { y: -1804, t: 'Sokoto Halifeliği', k: 'm' }, { y: -1807, t: 'İngiltere köle ticaretini yasakladı', k: 'm' }, { y: -1830, t: 'Fransa Cezayir\'i işgal etti', k: 'm' }, { y: -1884, t: 'Berlin Konferansı', k: 'm' },
      { y: -1897, t: 'Benin Şehri yakıldı', k: 'm' }, { y: -1911, t: 'İtalya Libya\'ya saldırdı; Trablusgarp Savaşı', k: 'm' }, { y: -1956, t: 'Fas ve Tunus bağımsız', k: 'm' }, { y: -1957, t: 'Gana bağımsız', k: 'm' },
      { y: -1960, t: 'Afrika Yılı', k: 'm' }, { y: -1962, t: 'Cezayir bağımsız', k: 'm' }, { y: -1967, t: 'Biafra Savaşı', k: 'm' }, { y: -2011, t: 'Arap Baharı', k: 'm' },
      { y: -1789, t: 'Fransız İhtilali', k: 'w' }, { y: -1865, t: 'ABD\'de köleliğin kaldırılması', k: 'w' }, { y: -1945, t: 'İkinci Dünya Savaşı bitti', k: 'w' }
    ],
    world: [{ from: -1591, to: -1830, yer: 'Amerika', t: 'Afrikalı kölelerle çalışan plantasyonlar.' }, { from: -1830, to: -1960, yer: 'Avrupa', t: 'Sömürge imparatorlukları.' }, { from: -1945, to: -1991, yer: 'Dünya', t: 'Soğuk Savaş.' }],
    sites: [{ ad: 'DAKAR · GORE', wx: 800 }, { ad: 'BAMAKO', wx: 1600 }, { ad: 'TİMBUKTU', wx: 2300 }, { ad: 'AKRA · ELMİNA', wx: 3000 }, { ad: 'KUMASİ', wx: 3100 }, { ad: 'LAGOS', wx: 3500 }, { ad: 'KAZABLANKA', wx: 4300 }, { ad: 'MEKNES', wx: 5000 }, { ad: 'CEZAYİR', wx: 5800 }, { ad: 'TUNUS', wx: 6600 }, { ad: 'TRABLUS', wx: 7400 }],
    monuments: [
      { id: 'gore', ad: 'Gore Adası Köle Evi', yer: 'Dakar, Senegal', wx: 850, type: 'museum', b: 60, h: 16, start: -1776, end: -1778, vol: 1e4 },
      { id: 'hasan2', ad: 'II. Hasan Camii', yer: 'Kazablanka, Fas', wx: 4300, type: 'mosque', minare: 1, b: 180, h: 110, kubbe: '#3a8a6a', renk: '#e6dcc8', start: -1986, end: -1993, vol: 1.2e5 },
      { id: 'lagos', ad: 'Lagos', yer: 'Nijerya', wx: 3500, type: 'modcity', b: 420, h: 100, n: 46, start: -1960, end: -2020, vol: 9e4 }
    ],
    hizli: [{ ad: 'Tondibi', y: -1591 }, { ad: 'Meknes', y: -1700 }, { ad: 'Köle ticareti', y: -1750 }, { ad: 'Cezayir işgali', y: -1830 }, { ad: 'Berlin Konferansı', y: -1884 }, { ad: 'Sömürgeler', y: -1920 }, { ad: 'Afrika Yılı', y: -1960 }, { ad: 'Cezayir', y: -1962 }, { ad: 'Arap Baharı', y: -2011 }, { ad: 'Bugün', y: -2026 }],
    bilgi: {
      gore: { ikon: '⛓️', yaptiran: 'Avrupalı tüccarlar', donem: '1776-1778', mimar: '—', sure: '—', neden: 'Köle ticareti dönemine ait bir tüccar evi.', onem: 'Atlantik köle ticaretinin anıtı; "Dönüşü Olmayan Kapı".', teknik: [['Gore adası', '~0,18 km²']], nasil: 'Alt katta hücreler, üst katta tüccarların evi.', bugun: 'Müze; UNESCO Dünya Mirası (Gore Adası, 1978).', ilginc: 'Nelson Mandela, Barack Obama ve Papa II. Jean-Paul buradaki kapıyı ziyaret etti; tarihçiler evin ticaretteki gerçek rolünü tartışıyor.' },
      hasan2: { ikon: '🕌', yaptiran: 'Kral II. Hasan', donem: '1986-1993', mimar: 'Michel Pinseau', sure: '~7 yıl, ~10.000 usta', neden: 'Kazablanka\'ya ulusal cami.', onem: 'Afrika\'nın en büyük camilerinden; minaresi dünyanın en yükseklerinden.', teknik: [['Minare', '210 m'], ['Kapasite', '~105.000 kişi (avluyla)']], nasil: 'Kısmen deniz üzerine kurulu; açılır kapanır tavan.', bugun: 'Müslüman olmayanların gezebildiği ender camilerden.', ilginc: 'Zeminin bir kısmı camdan: altından Atlas Okyanusu görünür.' },
      lagos: { ikon: '🏙️', yaptiran: '—', donem: '15. yy\'dan', mimar: '—', sure: '—', neden: 'Lagün kıyısında liman.', onem: 'Afrika\'nın en büyük şehirlerinden (~16-20 milyon).', teknik: [['Nüfus (1950)', '~300.000']], nasil: 'Adalar ve lagün üzerinde hızla büyüyen megakent.', bugun: 'Nijerya\'nın ekonomik başkenti; 1991\'de başkent Abuja\'ya taşındı.', ilginc: 'Lagos\'taki Makoko, direkler üzerinde suyun içinde kurulmuş bir mahalle.' }
    },
    ulke: [
      { ad: 'Genel bakış', ikon: '🧭', html: '<p>1591\'de Songhay\'ın yıkılmasından sonra kıyıdaki krallıklar Avrupalılarla ticaretle güçlendi; <b>Atlantik köle ticareti</b> milyonlarca insanı Amerika\'ya sürükledi. 19. yüzyılda Fransa ve İngiltere bölgeyi sömürge yaptı. 1956-1962 arasında neredeyse bütün ülkeler bağımsız oldu.</p>' },
      { ad: 'Bugünkü ülkeler', ikon: '🗺️', html: '<ul><li>Mağrip: Fas, Cezayir, Tunus, Libya, Moritanya</li><li>Sahel: Mali, Nijer, Burkina Faso, Çad</li><li>Kıyı: Senegal, Gambiya, Gine, Sierra Leone, Liberya, Fildişi Sahili, Gana, Togo, Benin, Nijerya</li></ul>' }
    ]
  });

  window.BOLGE_TASI('batiafrika');

  window.MISIR = {
    coords: { kartaca: [36.8528, 10.3233], kartacaroma: [36.858, 10.33], leptis: [32.6386, 14.2903], elcem: [35.2964, 10.7069], kumbisaleh: [15.7656, -7.9667], kayrevan: [35.6814, 10.1036], kutubiyye: [31.6237, -7.9937], cenne: [13.9054, -4.5555], cingereyber: [16.7713, -3.0109], benin: [6.335, 5.6037], gore: [14.6672, -17.3983], hasan2: [33.6082, -7.6325], lagos: [6.5244, 3.3792] },
    wiki: { kartaca: 'Ancient Carthage', kartacaroma: 'Carthage', leptis: 'Leptis Magna', elcem: 'Amphitheatre of El Jem', kumbisaleh: 'Koumbi Saleh', kayrevan: 'Great Mosque of Kairouan', kutubiyye: 'Kutubiyya Mosque', cenne: 'Great Mosque of Djenné', cingereyber: 'Djinguereber Mosque', benin: 'Walls of Benin', gore: 'House of Slaves', hasan2: 'Hassan II Mosque', lagos: 'Lagos' },
    bilgi: {}, alt: {},
    kureAdlari: [[22, 3, 'SAHRA', 'misir', 2.4], [15, 0, 'SAHEL', 'bolge', 3.0], [31.5, -6, 'ATLAS DAĞLARI', 'kucuk', 3.6], [34.5, 3, 'MAĞRİP', 'bolge', 3.2], [9, -2, 'BATI AFRİKA', 'bolge', 3.0],
      [3, 0, 'GİNE KÖRFEZİ', 'deniz', 3.2], [24, -22, 'ATLAS OKYANUSU', 'deniz', 2.4], [14.5, -2.5, 'Nijer', 'nehir', 5]],
    sehirler: [
      { ad: 'Kartaca', ll: [36.8528, 10.3233], from: 814, to: -698, b: [[814, 146], [-439, -534]], not: 'Fenike ve Vandal başkenti.' },
      { ad: 'Leptis Magna', ll: [32.6386, 14.2903], from: 650, to: -650, not: 'Septimius Severus\'un şehri.' },
      { ad: 'Kayrevan', ll: [35.6781, 10.0963], from: -670, to: -2026, b: [[-800, -909]], not: 'Ağlebî başkenti.' },
      { ad: 'Fes', ll: [34.0181, -5.0078], from: -789, to: -2026, b: [[-789, -927], [-1248, -1465]], not: 'Karaviyyin\'in şehri.' },
      { ad: 'Marakeş', ll: [31.6295, -7.9811], from: -1070, to: -2026, b: [[-1070, -1269], [-1525, -1659]], not: 'Murabıt, Muvahhid ve Saadî başkenti.' },
      { ad: 'Kumbi Saleh', ll: [15.7656, -7.9667], from: -700, to: -1240, b: [[-800, -1076]], not: 'Gana başkenti.' },
      { ad: 'Cenne', ll: [13.9054, -4.5555], from: 250, to: -2026, not: 'Sahel\'in kerpiç şehri.' },
      { ad: 'Timbuktu', ll: [16.7735, -3.0074], from: -1100, to: -2026, not: 'Kervanların ve âlimlerin şehri.' },
      { ad: 'Gao', ll: [16.2666, -0.0402], from: -700, to: -2026, b: [[-1464, -1591]], not: 'Songhay başkenti.' },
      { ad: 'Benin Şehri', ll: [6.335, 5.6037], from: -1180, to: -2026, b: [[-1440, -1897]], not: 'Benin krallığının başkenti.' },
      { ad: 'Kumasi', ll: [6.6885, -1.6244], from: -1680, to: -2026, b: [[-1701, -1901]], not: 'Aşanti başkenti.' },
      { ad: 'Cezayir', ll: [36.7538, 3.0588], from: -950, to: -2026, b: [[-1516, -1830], [-1962, -2026]], not: 'Cezayir\'in başkenti.' },
      { ad: 'Dakar', ll: [14.7167, -17.4677], from: -1857, to: -2026, b: [[-1902, -1959], [-1960, -2026]], not: 'Fransız Batı Afrikası\'nın ve Senegal\'in başkenti.' },
      { ad: 'Lagos', ll: [6.5244, 3.3792], from: -1472, to: -2026, b: [[-1960, -1991]], not: 'Nijerya\'nın en büyük şehri.' }
    ],
    nil: { ikon: '🌊', title: 'Nijer Nehri ve Sahra', sub: 'Çölün kıyısında hayat', foto: 'Niger River', tabs: [{ ad: '🌊 Su ve çöl', html: '<ul class="hap"><li><b>Nijer</b> (~4.180 km) Gine dağlarından doğar, önce çöle doğru kuzeye, sonra güneye kıvrılıp Gine Körfezi\'ne akar. Bu tuhaf yay, Timbuktu\'yu hem nehre hem çöle komşu yaptı.</li><li><b>İç Nijer Deltası</b> her yıl taşıp Mali\'de dev bir sulak alan oluşturur.</li><li><b>Sahra</b> ~9 milyon km² ile dünyanın en büyük sıcak çölü. 6.000 yıl önce yeşildi: kaya resimlerinde zürafalar ve sığırlar görülür.</li><li><b>Sahel</b> ("kıyı") çöl ile savan arasındaki geçiş kuşağıdır.</li></ul>' }] },
    simgeler: [
      { id: 'ba-kartaca', ad: 'Kartaca', ikon: '⚓', wiki: 'Ancient Carthage', git: { place: 'batiafrika-antik', y: 218, id: 'kartaca' }, ozet: 'Roma\'nın büyük rakibi.', hap: ['MÖ 814 - 146.', 'Hannibal.'] },
      { id: 'ba-nok', ad: 'Nok heykelleri', ikon: '🗿', wiki: 'Nok culture', git: { place: 'batiafrika-antik', y: 500 }, ozet: 'Batı Afrika\'nın ilk büyük sanatı.', hap: ['MÖ ~1500 - MS 500.', 'Nijerya.'] },
      { id: 'ba-elcem', ad: 'El Cem Amfitiyatrosu', ikon: '🏟️', wiki: 'Amphitheatre of El Jem', git: { place: 'batiafrika-antik', y: -238, id: 'elcem' }, ozet: 'Afrika\'nın Kolezyum\'u.', hap: ['~238.', '35.000 kişi.'] },
      { id: 'ba-mansa', ad: 'Mansa Musa', ikon: '👑', wiki: 'Mansa Musa', git: { place: 'batiafrika-imparatorluk', y: -1324 }, ozet: 'Altının kralı.', hap: ['Hac 1324.', 'Mali İmparatorluğu.'] },
      { id: 'ba-cenne', ad: 'Cenne Ulu Camii', ikon: '🕌', wiki: 'Great Mosque of Djenné', git: { place: 'batiafrika-imparatorluk', y: -1300, id: 'cenne' }, ozet: 'En büyük kerpiç yapı.', hap: ['13. yy; 1907.', 'Her yıl yeniden sıvanır.'] },
      { id: 'ba-timbuktu', ad: 'Timbuktu yazmaları', ikon: '📜', wiki: 'Timbuktu Manuscripts', git: { place: 'batiafrika-imparatorluk', y: -1500, id: 'cingereyber' }, ozet: 'Çölün kütüphaneleri.', hap: ['Yüz binlerce sayfa.', '2012\'de kurtarıldı.'] },
      { id: 'ba-benin', ad: 'Benin tunçları', ikon: '🛡️', wiki: 'Benin Bronzes', git: { place: 'batiafrika-imparatorluk', y: -1500, id: 'benin' }, ozet: 'Kayıp mum döküm başyapıtları.', hap: ['13-19. yy.', 'İadeler sürüyor.'] },
      { id: 'ba-gore', ad: 'Gore ve köle ticareti', ikon: '⛓️', wiki: 'Atlantic slave trade', git: { place: 'batiafrika-modern', y: -1776, id: 'gore' }, ozet: 'Dönüşü olmayan kapı.', hap: ['~12,5 milyon kişi.', '1500-1866.'] }
    ],
    bugun: '<p>Mağrip ve Batı Afrika\'da 21 ülke ve ~535 milyon kişi yaşıyor. <b>Nijerya</b> (~230 milyon) Afrika\'nın en kalabalık ülkesi.</p><ul class="hap"><li><b>Diller:</b> Arapça, Berberi dilleri (Tamazight), Fransızca, İngilizce, Hausa, Yoruba, İgbo, Volof, Bambara.</li><li><b>Ekonomi:</b> petrol, doğalgaz, kakao, fosfat, altın.</li><li><b>Kültür:</b> Afrobeats, Nollywood, griot müziği.</li><li><b>Genç nüfus:</b> Nijer\'de ortanca yaş ~15.</li></ul>'
  };
  window.SEHIR_BILGI = {
    'Timbuktu': { bugun: 'Mali', kurulus: '~1100 (Tuareg kamp yeri)', wiki: 'Timbuktu', onem: 'Kervan ve ilim şehri.', ilginc: 'Avrupa\'da yüzyıllarca "dünyanın öbür ucu" anlamında kullanıldı; birçok Avrupalı gerçek bir şehir olduğunu bilmiyordu.' },
    'Kartaca': { bugun: 'Tunus', kurulus: 'MÖ 814 (söylence)', wiki: 'Carthage', onem: 'Batı Akdeniz\'in en büyük şehri.', ilginc: 'Hannibal, babasına çocukken Roma\'nın düşmanı olacağına yemin ettiğini anlatırdı.' },
    'Fes': { bugun: 'Fas', kurulus: '789 (İdris I)', wiki: 'Fez, Morocco', onem: 'Dünyanın en büyük arabasız şehir bölgelerinden olan eski medinesiyle.', ilginc: 'Fes medinesinde ~9.000 dar sokak var; yabancıların rehbersiz kaybolması neredeyse kesin.' }
  };
  window.KULTUR = { tanrilar: [], olumler: [], roller: [], mumyalama: '', ic: { eslesme: {}, sahneler: {} }, bilim: { genel: '', cag: {} } };
  window.SINIRLAR = [];

  window.OLAYLAR = [
    { id: 'zama', tur: 'savas', ad: 'Zama Savaşı', y: 202, ll: [36.3, 9.45], onem: 5, wiki: 'Battle of Zama', taraflar: ['Roma (Scipio Africanus) ve Numidya (Masinissa)', 'Kartaca (Hannibal)'], kazanan: 'Roma', sonuc: 'İkinci Pön Savaşı bitti; Kartaca donanmasını ve İspanya\'yı kaybetti.' },
    { id: 'kartaca146', tur: 'savas', ad: 'Kartaca\'nın yıkılışı', y: 146, ll: [36.85, 10.32], onem: 5, wiki: 'Siege of Carthage (Third Punic War)', taraflar: ['Roma (Scipio Aemilianus)', 'Kartaca'], kazanan: 'Roma', sonuc: 'Şehir yakıldı, halkı köle yapıldı; Africa eyaleti kuruldu.' },
    { id: 'kirina', tur: 'savas', ad: 'Kirina Savaşı', y: -1235, ll: [12.6, -8.4], onem: 4, wiki: 'Battle of Kirina', taraflar: ['Mandinkalar (Sundiata Keita)', 'Sosso (Sumanguru Kante)'], kazanan: 'Mandinkalar', sonuc: 'Mali İmparatorluğu kuruldu.' },
    { id: 'vadilmahazin', tur: 'savas', ad: 'Vadi\'l-Mahazin (Üç Kral) Savaşı', y: -1578, ll: [35.0, -5.9], onem: 4, wiki: 'Battle of Alcácer Quibir', taraflar: ['Fas (Saadîler) ve Osmanlı desteği', 'Portekiz (Kral Sebastião)'], kazanan: 'Fas', sonuc: 'Üç kral öldü; Portekiz İspanya\'ya bağlandı (1580).' },
    { id: 'tondibi', tur: 'savas', ad: 'Tondibi Savaşı', y: -1591, ll: [16.3, -0.02], onem: 4, wiki: 'Battle of Tondibi', taraflar: ['Fas (Cuder Paşa)', 'Songhay (Askia İshak II)'], kazanan: 'Fas', kuvvetler: '~4.000 tüfekli Faslı; Songhay ordusu çok daha kalabalık.', sonuc: 'Songhay İmparatorluğu çöktü.' },
    { id: 'cezayirsavasi', tur: 'savas', ad: 'Cezayir Bağımsızlık Savaşı', y: -1954, ll: [36.75, 3.06], onem: 5, wiki: 'Algerian War', taraflar: ['FLN', 'Fransa'], kazanan: 'FLN', sonuc: '1962\'de Cezayir bağımsız oldu; 1 milyona yakın Avrupalı ülkeyi terk etti.' },
    { id: 'berlinkonf', tur: 'antlasma', ad: 'Berlin Konferansı', y: -1884, ll: [52.51, 13.38], onem: 5, wiki: 'Berlin Conference', taraflar: ['14 Avrupa ülkesi ve ABD'], sonuc: 'Afrika\'nın paylaşılması için kurallar; hiçbir Afrikalı davet edilmedi.' },
    { id: 'mansahac', tur: 'olay', ad: 'Mansa Musa\'nın haccı', y: -1324, ll: [30.05, 31.25], onem: 5, wiki: 'Mansa Musa', sonuc: 'Kahire\'de dağıtılan altın fiyatları yıllarca düşürdü; Mali Avrupa haritalarına girdi.' },
    { id: 'karaviyyin', tur: 'olay', ad: 'Karaviyyin kuruldu', y: -859, ll: [34.06, -4.97], onem: 4, wiki: 'University of al-Qarawiyyin', sonuc: 'Fatıma el-Fihri\'nin kurduğu cami-medrese; hâlâ eğitim veriyor.' },
    { id: 'kolebaslangic', tur: 'olay', ad: 'Atlantik köle ticareti', y: -1526, ll: [6.2, -1.0], onem: 5, wiki: 'Atlantic slave trade', sonuc: '~12,5 milyon Afrikalı zorla Amerika\'ya götürüldü.' },
    { id: 'sahelkuraklik', tur: 'afet', alt: 'kuraklik', ad: 'Sahel kuraklığı', y: -1972, ll: [14.0, 2.0], onem: 4, wiki: 'Sahel drought', sonuc: '1968-1985 kuraklıkları ve kıtlıklarında yüz binlerce kişi öldü.' },
    { id: 'agadir1960', tur: 'afet', alt: 'deprem', ad: 'Agadir depremi', y: -1960, ll: [30.42, -9.6], onem: 3, wiki: '1960 Agadir earthquake', sonuc: '~12.000-15.000 ölü; şehir yeniden kuruldu.' }
  ];

  window.ULKE_SAYFA = window.ULKE_SAYFA || {};
  window.ULKE_SAYFA.batiafrika = {
    id: 'batiafrika', ad: 'Kuzey ve Batı Afrika', ikon: '🐪', kw: ['afrika', 'batı afrika', 'kuzey afrika', 'mağrip', 'kartaca', 'hannibal', 'mali', 'mansa musa', 'timbuktu', 'gana', 'songhay', 'fas', 'cezayir', 'tunus', 'libya', 'nijerya', 'senegal', 'sahra'],
    altBaslik: 'MÖ ~1500 – bugün · Kartaca\'dan Timbuktu\'ya, kervanlardan bağımsızlığa', kapakWiki: 'Great Mosque of Djenné', kapakAd: 'Cenne Ulu Camii', merkez: [22, 0], merkezZ: 3.4,
    ozet: ['<b>Kuzey ve Batı Afrika</b>, Akdeniz kıyısından Sahra\'yı aşıp Gine Körfezi\'ne uzanır. Kartaca, Roma Afrikası ve Berberi imparatorlukları kuzeyde; Gana, Mali ve Songhay güneyde yükseldi.', 'Sahra kervanları altın ve tuz taşıdı; Atlantik köle ticareti ve sömürgecilik bölgeyi derinden yaraladı. 1956-1962 arası ülkeler bağımsızlığını kazandı.'],
    bilgiKutusu: [['Tarih', 'MÖ ~1500 – bugün'], ['Önemli başkentler', 'Kartaca, Kayrevan, Fes, Marakeş, Kumbi Saleh, Niani, Gao, Benin, Kumasi'], ['Diller', 'Arapça, Berberice, Fransızca, İngilizce, Hausa, Yoruba, Volof'], ['Bugün', '21 ülke, ~535 milyon kişi']],
    donemler: { 'batiafrika-antik': 'Kartaca, Nok, Numidya ve Roma Afrikası.', 'batiafrika-imparatorluk': 'Gana, Mali, Songhay; Murabıtlar ve Muvahhidler.', 'batiafrika-modern': 'Köle ticareti, sömürge ve bağımsızlık.' },
    kultur: [{ baslik: 'Diller', ikon: '🗣️', html: '<p>Kuzeyde Arapça ve Berberi dilleri; Sahel ve Batı Afrika\'da Hausa, Yoruba, İgbo, Mandinka, Volof, Fula ve yüzlercesi. Sömürge dilleri Fransızca ve İngilizce resmî dil.</p>' }, { baslik: 'Din', ikon: '🕌', html: '<p>Kuzeyde ve Sahel\'de İslam; kıyıda Hristiyanlık; geleneksel Yoruba ve Vodun inançları.</p>' }],
    figurler: [
      { id: 'cenne', ad: 'Cenne Ulu Camii', tur: 'yapı', wiki: 'Great Mosque of Djenné', ll: [13.9054, -4.5555], z: 80, yapim: '1907 (13. yy temelli)', kim: 'Cenne halkı', durum: 'ayakta', durumYazi: 'Ayakta.', nerede: 'Mali', metin: 'En büyük kerpiç yapı.', git: { place: 'batiafrika-imparatorluk', y: -1300, id: 'cenne' } },
      { id: 'elcem', ad: 'El Cem', tur: 'yapı', wiki: 'Amphitheatre of El Jem', ll: [35.2964, 10.7069], z: 80, yapim: '~238', kim: 'Thysdrus halkı', durum: 'ayakta', durumYazi: 'Ayakta.', nerede: 'Tunus', metin: 'Dev Roma amfitiyatrosu.', git: { place: 'batiafrika-antik', y: -238, id: 'elcem' } }
    ],
    kisiler: [
      { ad: 'Hannibal', wiki: 'Hannibal', yil: 'MÖ 247-183', ozet: 'Kartacalı komutan.', y: 218 }, { ad: 'Masinissa', wiki: 'Masinissa', yil: 'MÖ ~238-148', ozet: 'Numidya kralı.', y: 202 },
      { ad: 'Aziz Augustinus', wiki: 'Augustine of Hippo', yil: '354-430', ozet: 'Kilise babası.', y: -400 }, { ad: 'Tarık bin Ziyad', wiki: 'Tariq ibn Ziyad', yil: '~670-720', ozet: 'Endülüs fatihi.', y: -711 },
      { ad: 'Sundiata Keita', wiki: 'Sundiata Keita', yil: '~1217-1255', ozet: 'Mali\'nin kurucusu.', y: -1235 }, { ad: 'Mansa Musa', wiki: 'Mansa Musa', yil: '~1280-1337', ozet: 'Altının kralı.', y: -1324 },
      { ad: 'İbn Battuta', wiki: 'Ibn Battuta', yil: '1304-1369', ozet: 'Tanca doğumlu gezgin.', y: -1352 }, { ad: 'İbn Haldun', wiki: 'Ibn Khaldun', yil: '1332-1406', ozet: 'Sosyolojinin öncüsü.', y: -1377 },
      { ad: 'Emir Abdülkadir', wiki: 'Emir Abdelkader', yil: '1808-1883', ozet: 'Cezayir direnişi.', y: -1840 }, { ad: 'Kwame Nkrumah', wiki: 'Kwame Nkrumah', yil: '1909-1972', ozet: 'Gana\'nın bağımsızlık önderi.', y: -1957 }
    ],
    biliyorMuydunuz: ['Sahra 6.000 yıl önce göller ve savanlarla kaplıydı.', '"Barbar" ve "Berberi" kelimelerinin kökeni aynı: Yunanlar anlamadıkları dilleri "bar-bar" diye taklit ederdi; Berberiler kendilerine "İmazigen" (özgür insanlar) der.', 'Timbuktu yazmalarının bazıları 13. yüzyıldan kalma.', 'Kartaca\'nın son savunmasında kadınların saçlarını mancınık ipi yapmak için kestiği anlatılır.']
  };
})();
