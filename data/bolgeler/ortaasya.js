// Bozkır ve Orta Asya (bugünkü Kazakistan, Özbekistan, Türkmenistan, Kırgızistan, Tacikistan, Moğolistan, Doğu Türkistan).
// Yıl: MÖ pozitif, MS negatif. Sahne (wx): batıdan doğuya İpek Yolu ve bozkır
//   Hive 800 · Merv 1300 · Buhara 2000 · Semerkant 2500 · Taşkent 3000 · Türkistan 3200 · Talas 3600 · Almatı/Esik 3900
//   Issık Göl 4300 · Altay (Pazırık) 4900 · Orhun 6000 · Karakurum 6100 · Ulan Batur 6800
// Kaynaklar: Golden, "Central Asia in World History" (2011); Beckwith, "Empires of the Silk Road" (2009);
//   Kafesoğlu, "Türk Millî Kültürü"; Manz, "The Rise and Rule of Tamerlane" (1989); Weatherford, "Genghis Khan" (2004).
(() => {
  window.PLACES = window.PLACES || [];

  // ================= 1. ATLILAR, İSKİTLER VE HUNLAR =================
  window.PLACES.push({
    id: 'ortaasya-bozkir', sira: 1, kisa: 'Atlılar, İskitler ve Hunlar', aralikAd: 'MÖ 3500 – MS 552',
    baslik: 'Atın evcilleşmesi · kurganlar · Tomris · Mete Han · İpek Yolu',
    ulkeAlt: 'Bozkırın ilk atlılarından İskitlere, Asya Hun İmparatorluğu\'na ve Juan-juan\'lara (MÖ 3500 – MS 552)',
    from: 3500, to: -552, start: 209,
    not: 'MÖ 1000 öncesi tarihler arkeolojik tahminlerdir. Hunlar hakkında bilgilerin çoğu Çin kaynaklarından gelir.', baskent: 'Göçebe ordugâhlar: Ötüken çevresi, Altay, Semerkant',
    sahne: { kizak: false, araba: [2000, 300], deve: [1000, -552], giyim: 'antik' },
    dynasties: [
      { from: 3500, to: 900, ad: 'Bozkır Tunç Çağı (Botai, Andronovo)', renk: '#6a7a4a' }, { from: 900, to: 209, ad: 'İskitler ve Sakalar', renk: '#a8822a' },
      { from: 209, to: -155, ad: 'Asya Hun İmparatorluğu', renk: '#7a3a2a' }, { from: -155, to: -552, ad: 'Siyenpiler, Kuşanlar, Juan-juan ve Akhunlar', renk: '#5a4a6a' }
    ],
    rulers: [
      { from: 3500, to: 900, ad: 'Bozkır boy önderleri', kisa: '?', kim: 'Kazakistan\'daki Botai\'de atlar evcilleştirildi (MÖ ~3500). MÖ ~2000\'de Sintaşta\'da ilk ispitli tekerlekli savaş arabaları.' },
      { from: 900, to: 330, ad: 'İskit ve Saka kralları (Tomris)', kisa: 'Tomris', kim: 'Atlı okçu göçebeler Karadeniz\'den Altay\'a. Herodot\'a göre Masaget kraliçesi Tomris Pers kralı Kiros\'u yendi (MÖ 530).' },
      { from: 330, to: 209, ad: 'Sakalar, Yüeçiler ve Baktriya Yunanları', kisa: 'Baktriya', kim: 'İskender Semerkant\'a kadar geldi (MÖ 329). Güneyde Yunan-Baktriya krallığı, doğuda Yüeçiler ve Hunlar.' },
      { from: 209, to: 174, ad: 'Mete Han', kisa: 'Mete Han', kim: 'Asya Hun İmparatorluğu\'nu kurdu; Han Çini\'ni haraca bağladı. Ordusunu onluk sisteme göre düzenledi: Türk ordusunun kuruluşu kabul edilen MÖ 209 bu yüzden önemlidir.' },
      { from: 174, to: 48, ad: 'Hun tanhuları', kisa: 'Tanhular', kim: 'Han Çini ile yüz yıldan uzun savaş ve barış. Çin, Hunlara karşı müttefik aramak için batıya elçi gönderdi; bu yolculuk İpek Yolu\'nu açtı.' },
      { from: 48, to: -155, ad: 'Kuzey ve Güney Hunları; Kuşan İmparatorluğu', kisa: 'Kuşanlar', kim: 'Hunlar ikiye bölündü; güneydekiler Çin\'e bağlandı. Güneyde Yüeçi kökenli Kuşanlar (Kanişka) Hindistan\'a uzandı.' },
      { from: -155, to: -402, ad: 'Siyenpiler ve Kuşanlar', kisa: '?', kim: 'Moğolistan\'da Siyenpi boyları, batıda Kuşanlar ve sonra Sasaniler. 4. yüzyılda Hunlar Avrupa\'ya ulaştı (375).' },
      { from: -402, to: -552, ad: 'Juan-juan (Avar) Kağanlığı ve Akhunlar', kisa: 'Juan-juan', kim: 'Juan-juan hükümdarı Şelun ilk kez "kağan" unvanını aldı (402). Güneyde Akhunlar (Eftalitler) Sasanileri haraca bağladı.' }
    ],
    eras: [
      { from: 3500, to: 900, puan: { eko: 2, ordu: 3, istikrar: 3 }, baskent: 'Yok',
        gundem: 'Bozkırda insanlar atı evcilleştirdi ve sürülerle göçerek yaşamaya başladı. MÖ ~2000\'de hafif, ispitli tekerlekli savaş arabası icat edildi ve hızla Mısır\'dan Çin\'e kadar yayıldı. Andronovo kültürü Ural\'dan Altay\'a uzanıyor.',
        savas: 'Savaş arabaları ve bronz silahlar. Atın sırtında savaşmak henüz yaygın değil.',
        ekonomi: 'Koyun, sığır, at; kısrak sütü (kımız). Altay ve Kazakistan\'da bakır ve kalay madenleri.',
        din: 'Gök ve yer ruhları, atalar. Kurganlarda atlarıyla birlikte gömülen önderler.',
        yasam: 'Yazın yaylada, kışın kışlakta. Tekerlekli arabalar üzerinde keçe çadırlar.',
        bilgi: 'Botai\'deki çanak çömlekte kısrak sütü yağı bulundu: insanlar 5.500 yıl önce at sütü içiyordu.' },
      { from: 900, to: 209, puan: { eko: 3, ordu: 5, istikrar: 2 }, baskent: 'Göçebe ordugâhlar',
        gundem: 'İskitler ve Sakalar bozkırın efendisi. Altınla dolu kurganlar yapıyorlar: Kazakistan\'da "Altın Elbiseli Adam", Altay\'da buzla korunmuş Pazırık mezarları. Persler, Yunanlar ve Çinliler bu atlı okçulardan çekiniyor.',
        savas: 'Atlı okçuluk: dörtnala giderken ok atmak. Kompozit yay; Pers kralı Darius\'un İskit seferi (MÖ 513) sonuçsuz kaldı.',
        ekonomi: 'At ve hayvan ticareti; Yunan kolonileriyle tahıl ve altın takası.',
        din: 'Gök tanrısı, ateş ve ataların ruhları; savaşçılar atlarıyla birlikte gömülüyor.',
        yasam: 'Dövme yapılmış savaşçılar, keçe halılar ve "hayvan üslubu" altın süsler.',
        bilgi: 'Pazırık kurganında bulunan halı dünyanın bilinen en eski düğümlü halısı (MÖ ~4-3. yy); bugün Ermitaj Müzesi\'nde.' },
      { from: 209, to: -155, puan: { eko: 4, ordu: 5, istikrar: 3 }, baskent: 'Ötüken çevresi (Orhun vadisi)',
        gundem: 'Mete Han Hun boylarını birleştirip ilk büyük bozkır imparatorluğunu kurdu. Çin, Hun akınlarına karşı Seddini uzattı ve prenseslerini Hun hükümdarlarına gelin gönderdi. Han elçisi Zhang Qian\'ın batı yolculuğu İpek Yolu\'nu başlattı.',
        savas: 'Onluk sistem: 10, 100, 1.000 ve 10.000 kişilik birlikler. Hızlı atlı okçular ve sahte kaçış taktiği.',
        ekonomi: 'Çin\'den ipek, tahıl ve şarap haracı; karşılığında barış. Bozkır ile tarım dünyası arasında sınır pazarları.',
        din: 'Gök Tanrı inancı; tanhu "Göğün oğlu" sayılıyor.',
        yasam: 'Çadır kentler, at yarışları ve büyük şölenler.',
        bilgi: 'Türk Kara Kuvvetleri\'nin kuruluş yılı olarak Mete Han\'ın tahta çıkışı MÖ 209 kabul edilir.' },
      { from: -155, to: -552, puan: { eko: 3, ordu: 4, istikrar: 2 }, baskent: 'Bozkırda değişen ordugâhlar; güneyde Semerkant ve Belh',
        gundem: 'Hunların bir kolu batıya göçtü; Avrupa Hunları 375\'te Karadeniz kuzeyine geldi. Bozkırda Juan-juan Kağanlığı, güneyde Akhunlar. Semerkant ve Buhara\'da Soğdlu tüccarlar İpek Yolu\'nun asıl taşıyıcıları.',
        savas: 'Üzengi bozkırda yaygınlaştı (4-5. yy): atlı savaşçı artık ağır zırh ve mızrakla da savaşabiliyor.',
        ekonomi: 'Soğdlular ipek, misk, cam ve gümüş ticaretini Çin\'den Bizans\'a kadar yürütüyor.',
        din: 'Budizm İpek Yolu boyunca yayılıyor; Zerdüştlük ve Maniheizm Soğd\'da güçlü.',
        yasam: 'Juan-juan\'a bağlı Türkler Altay\'da demircilik yapıyor.',
        bilgi: 'Göktürk geleneğine göre Türkler Juan-juan\'ların demircileriydi; demir işçiliği onları güçlü yaptı.' }
    ],
    nufus: [[3500, 0.3], [1000, 0.8], [200, 2], [-300, 3], [-552, 3]],
    nufusNot: 'Orta Asya ve Moğolistan için çok kaba tahminler; göçebe nüfusları sayılamadı.',
    dunyaOzet: { eko: 'İpek Yolu Han Çini\'ni Pers ve Roma\'ya bağlıyor; bozkır atı ve kürkü güneye, ipek ve tahıl kuzeye gidiyor.', askeri: 'Atlı okçular, savaş arabaları; sonra üzengi ve ağır süvari.' },
    events: [
      { y: 3500, t: 'Botai\'de at evcilleştirildi', k: 'm' }, { y: 2000, t: 'İspitli savaş arabası (Sintaşta)', k: 'm' }, { y: 530, t: 'Tomris Kiros\'u yendi (Herodot)', k: 'm' }, { y: 329, t: 'İskender Semerkant\'ta', k: 'm' },
      { y: 300, t: 'Pazırık kurganları', k: 'm' }, { y: 209, t: 'Mete Han Hun İmparatorluğu\'nu kurdu', k: 'm' }, { y: 200, t: 'Baideng: Mete Han Çin imparatorunu kuşattı', k: 'm' }, { y: 138, t: 'Zhang Qian batıya yola çıktı', k: 'm' },
      { y: 48, t: 'Hunlar ikiye bölündü', k: 'm' }, { y: -375, t: 'Hunlar Avrupa\'ya ulaştı', k: 'm' }, { y: -402, t: 'İlk "kağan" unvanı (Juan-juan)', k: 'm' }, { y: -552, t: 'Göktürkler Juan-juan\'ı yıktı', k: 'm' },
      { y: 2560, t: 'Büyük Piramit', k: 'w' }, { y: 221, t: 'Çin birleşti; Çin Seddi', k: 'w' }, { y: -476, t: 'Batı Roma\'nın sonu', k: 'w' }
    ],
    world: [
      { from: 1046, to: 221, yer: 'Çin', t: 'Zhou hanedanı; Savaşan Devletler.' }, { from: 550, to: 330, yer: 'İran', t: 'Pers İmparatorluğu.' }, { from: 206, to: -220, yer: 'Çin', t: 'Han hanedanı.' },
      { from: -375, to: -469, yer: 'Avrupa', t: 'Avrupa Hunları; Attila.' }
    ],
    sites: [{ ad: 'HARZEM', wx: 800 }, { ad: 'MERV', wx: 1300 }, { ad: 'SOĞD', wx: 2200 }, { ad: 'BOTAİ', wx: 3500 }, { ad: 'ESİK', wx: 3900 }, { ad: 'ALTAY', wx: 4900 }, { ad: 'PAZIRIK', wx: 5000 }, { ad: 'ÖTÜKEN', wx: 6000 }],
    cliffs: [{ wx: 4900, w: 800, h: 130, peak: 0.5 }],
    monuments: [
      { id: 'esik', ad: 'Esik kurganı (Altın Elbiseli Adam)', yer: 'Almatı yakını, Kazakistan', wx: 3900, type: 'mound', b: 90, h: 12, start: 420, end: 400, vol: 4e4 },
      { id: 'pazirik', ad: 'Pazırık kurganları', yer: 'Altay, Rusya', wx: 5000, type: 'mound', b: 70, h: 8, start: 300, end: 290, vol: 3e4 },
      { id: 'semerkant', ad: 'Maracanda (Afrasiyab, eski Semerkant)', yer: 'Semerkant, Özbekistan', wx: 2500, type: 'city', wall: true, b: 280, n: 26, hk: 0.3, start: 700, end: 500, vol: 6e4, ruin: -1220 }
    ],
    hizli: [{ ad: 'Botai', y: 3500 }, { ad: 'Savaş arabası', y: 2000 }, { ad: 'Tomris', y: 530 }, { ad: 'Esik', y: 410 }, { ad: 'Pazırık', y: 300 }, { ad: 'Mete Han', y: 209 }, { ad: 'İpek Yolu', y: 130 }, { ad: 'Hunlar Avrupa\'da', y: -375 }, { ad: 'Juan-juan', y: -450 }],
    bilgi: {
      esik: { ikon: '👑', yaptiran: 'Sakalar', donem: 'MÖ ~4. yy (tartışmalı)', mimar: '—', sure: '—', neden: 'Genç bir Saka önderinin mezarı.', onem: 'Kazakistan\'ın ulusal simgelerinden: "Altın Elbiseli Adam".', teknik: [['Altın parça', '~4.000'], ['Kurgan çapı', '~60 m']], nasil: 'Toprak ve taş tümülüs altında ahşap mezar odası.', bugun: 'Buluntular Almatı ve Astana müzelerinde.', ilginc: 'Mezardaki gümüş kâsenin üstündeki 26 harflik yazı hâlâ kesin olarak okunamadı.' },
      pazirik: { ikon: '🧊', yaptiran: 'Altay\'daki İskit-Saka boyları', donem: 'MÖ ~4-3. yy', mimar: '—', sure: '—', neden: 'Önderlerin ve atlarının mezarları.', onem: 'Donmuş toprak sayesinde keçe, halı, ahşap ve dövmeli bedenler korunmuş.', teknik: [['En eski düğümlü halı', '~1,8 × 2 m']], nasil: 'Mezarın üstündeki taşlar suyun donmasını sağladı; buz 2.400 yıl boyunca her şeyi korudu.', bugun: 'Buluntular St. Petersburg\'da, Ermitaj Müzesi\'nde.', ilginc: 'Mumyalanmış bir kadının ("Buz Prensesi") kollarında geyik ve grifon dövmeleri var.' },
      semerkant: { ikon: '🏙️', yaptiran: 'Soğdlular', donem: 'MÖ ~7. yy – MS 1220', mimar: '—', sure: '—', neden: 'Zerefşan vadisinin vaha şehri.', onem: 'İpek Yolu\'nun kalbi; İskender\'in "Maracanda"sı.', teknik: [['Alan', '~2,2 km²']], nasil: 'Kerpiç surlar, saray ve tapınaklar; duvar resimleri (Elçiler Salonu, 7. yy).', bugun: 'Afrasiyab ören yeri ve müzesi.', ilginc: 'Afrasiyab duvar resimlerinde Çin, Kore ve Türk elçileri bir Soğd kralına hediye getiriyor.' }
    },
    ulke: [
      { ad: 'Genel bakış', ikon: '🧭', html: '<p><b>Bozkır</b>, Macaristan\'dan Mançurya\'ya uzanan dev bir çayır kuşağıdır. Burada at evcilleştirildi, savaş arabası icat edildi ve atlı göçebe imparatorluklar doğdu. Güneyde <b>Semerkant, Buhara, Merv</b> gibi vaha şehirleri İpek Yolu\'nun duraklarıydı.</p>' },
      { ad: 'Göçebe hayat', ikon: '🐎', html: '<ul><li><b>Yurt (çadır):</b> keçe ve ahşap kafes, kurulup sökülebilir</li><li><b>Kımız:</b> mayalanmış kısrak sütü</li><li><b>Beş hayvan:</b> at, koyun, keçi, sığır, deve</li><li><b>Kurgan:</b> önderlerin toprak tepeli mezarları</li><li><b>Kompozit yay:</b> ahşap, boynuz ve sinirden</li></ul>' }
    ]
  });

  // ================= 2. GÖKTÜRKLER VE İPEK YOLU =================
  window.PLACES.push({
    id: 'ortaasya-turk', sira: 2, kisa: 'Göktürkler ve İpek Yolu', aralikAd: 'MS 552 – 1206',
    baslik: 'Bumin Kağan · Orhun Yazıtları · Uygurlar · Talas · Karahanlılar · Selçuklular',
    ulkeAlt: 'Göktürk ve Uygur kağanlıklarından Samanîlere, Karahanlılara ve Selçuklulara (MS 552 – 1206)',
    from: -552, to: -1206, start: -732,
    not: 'Tarihler kesindir; Göktürk tarihi büyük ölçüde Orhun yazıtlarına ve Çin kaynaklarına dayanır.', baskent: 'Ötüken, Ordu-Balık, Buhara, Balasagun, Kaşgar, Merv',
    sahne: { kizak: false, araba: false, deve: true, katipYok: -900, giyim: [[-552, 'antik'], [-900, 'cubbe']] },
    dynasties: [
      { from: -552, to: -744, ad: 'Göktürk Kağanlığı', renk: '#2a6aa8' }, { from: -744, to: -840, ad: 'Uygur Kağanlığı', renk: '#3a8a6a' },
      { from: -840, to: -1040, ad: 'Samanîler, Karahanlılar ve Gazneliler', renk: '#6a5a2a' }, { from: -1040, to: -1141, ad: 'Selçuklular ve Karahanlılar', renk: '#2a5a9a' },
      { from: -1141, to: -1206, ad: 'Karahıtaylar ve Harezmşahlar', renk: '#5a4a6a' }
    ],
    rulers: [
      { from: -552, to: -572, ad: 'Bumin Kağan, Muhan Kağan; batıda İstemi Yabgu', kisa: 'Bumin', kim: 'Bumin Juan-juan\'ları yenip Göktürk Kağanlığı\'nı kurdu. Kardeşi İstemi batıda Sasanilerle birlikte Akhunları yıktı.' },
      { from: -572, to: -630, ad: 'Göktürk kağanları (Taspar, Tardu)', kisa: 'Tardu', kim: 'Kağanlık doğu ve batı olarak ikiye ayrıldı. Bizans\'a elçiler gönderildi (568). Çin\'de Sui ve Tang yükseliyor.' },
      { from: -630, to: -682, ad: 'Tang Çini egemenliği', kisa: 'Tang', kim: 'Doğu Göktürkleri Tang\'a yenildi; Türk boyları 50 yıl Çin\'e bağlı kaldı.' },
      { from: -682, to: -744, ad: 'İkinci Göktürk Kağanlığı (İlteriş, Kapgan, Bilge Kağan; Tonyukuk, Kül Tigin)', kisa: 'Bilge Kağan', kim: 'İlteriş Kağan devleti yeniden kurdu. Bilge Kağan ve kardeşi Kül Tigin adına Orhun yazıtları dikildi (732, 735).' },
      { from: -744, to: -840, ad: 'Uygur Kağanlığı (Kutluk Bilge Kül, Bögü Kağan)', kisa: 'Uygurlar', kim: 'Ordu-Balık\'ı başkent yaptılar. Bögü Kağan Maniheizmi kabul etti (762). 840\'ta Kırgızlar başkenti yıktı.' },
      { from: -840, to: -999, ad: 'Samanîler (Buhara) ve Karahanlılar (Kaşgar)', kisa: 'Samanîler', kim: 'Buhara\'da İranlı Samanîler; Farsça edebiyat doğdu. Karahanlı Satuk Buğra Han Müslüman oldu (10. yy).' },
      { from: -999, to: -1040, ad: 'Karahanlılar ve Gazneli Mahmud', kisa: 'Gazneli Mahmud', kim: 'Karahanlılar Buhara\'yı aldı (999). Gazneli Mahmud Hindistan\'a 17 sefer yaptı.' },
      { from: -1040, to: -1141, ad: 'Selçuklular (Tuğrul, Alparslan, Melikşah, Sencer) ve Karahanlılar', kisa: 'Sencer', kim: 'Dandanakan\'da (1040) Gaznelileri yenen Selçuklular Merv\'den büyük bir imparatorluk yönetti. Sultan Sencer 1141\'de Katvan\'da Karahıtaylara yenildi.' },
      { from: -1141, to: -1206, ad: 'Karahıtaylar ve Harezmşahlar', kisa: 'Harezmşah', kim: 'Kuzey Çin\'den gelen Karahıtaylar Orta Asya\'ya hâkim oldu; Harezmşahlar güçlenip onları yendi.' }
    ],
    eras: [
      { from: -552, to: -744, puan: { eko: 4, ordu: 5, istikrar: 3 }, baskent: 'Ötüken (Orhun vadisi)',
        gundem: 'Göktürkler Kore\'den Karadeniz\'e uzanan ilk "Türk" adlı devleti kurdu. İpek Yolu\'nu kontrol ediyor, Bizans ve Sasanilerle diplomasi yapıyorlar. Bilge Kağan ve veziri Tonyukuk Türk dilinin ilk büyük yazılı metinlerini taşa kazıttı.',
        savas: 'Atlı okçular, zırhlı süvari, kurt başlı sancak (bayrak).',
        ekonomi: 'Soğdlu tüccarlar Göktürk himayesinde ipek ticareti yapıyor. Altay\'da demir işçiliği.',
        din: 'Gök Tanrı (Tengri), Umay ve Yer-Sub. Balbal taşları: yenilen düşmanları temsil eden dikili taşlar.',
        yasam: 'Kağanın yazlık ve kışlık ordusu. Ölünün ardından yuğ töreni ve yas.',
        bilgi: 'Orhun yazıtlarında Bilge Kağan halkına şöyle seslenir: "Ey Türk, üstte gök çökmedikçe, altta yer delinmedikçe, senin ilini ve töreni kim bozabilir?"' },
      { from: -744, to: -999, puan: { eko: 5, ordu: 4, istikrar: 3 }, baskent: 'Ordu-Balık, sonra Buhara ve Kaşgar',
        gundem: 'Uygurlar şehirler kurdu ve yerleşik hayata geçti; Maniheist ve Budist metinler yazdılar. 751\'deki Talas Savaşı\'nda Abbasîler Tang\'ı yendi; Karluklar belirleyici oldu. 840\'tan sonra Türk boyları güneye ve batıya yayıldı.',
        savas: 'Talas Savaşı: Abbasîler ve Karluklar Tang ordusunu yendi; Çin\'in batıya ilerlemesi durdu.',
        ekonomi: 'Uygurlar Tang Çini\'ne at satıp karşılığında ipek aldı. Buhara Samanî gümüş dirhemleri Rusya ve İskandinavya\'ya kadar ulaştı.',
        din: 'Uygurlarda Maniheizm ve Budizm; Samanîler ve Karahanlılarla birlikte İslam.',
        yasam: 'Turfan\'da Uygur saray freskleri ve matbaa. Buhara Samanî kütüphanesi; İbn Sina gençliğinde burada okudu.',
        bilgi: 'Talas Savaşı\'ndan sonra esir düşen Çinli ustaların Semerkant\'ta kâğıt yapımını öğrettiği anlatılır.' },
      { from: -999, to: -1206, puan: { eko: 5, ordu: 5, istikrar: 3 }, baskent: 'Kaşgar, Balasagun, Gazne, Merv, Gürgenç',
        gundem: 'Türkler İslam dünyasının yeni yöneticileri: Karahanlılar, Gazneliler, Selçuklular. Kaşgarlı Mahmud Divanü Lügati\'t-Türk\'ü, Yusuf Has Hacib Kutadgu Bilig\'i yazdı. Merv dünyanın en büyük şehirlerinden biri.',
        savas: 'Dandanakan (1040) ve Katvan (1141) savaşları. Gulam askerler ve Türkmen atlıları.',
        ekonomi: 'Kervansaraylar, ribatlar ve İpek Yolu ticareti. Merv ve Buhara\'da kâğıt, kumaş ve seramik.',
        din: 'Hoca Ahmed Yesevî Türkçe hikmetleriyle tasavvufu bozkıra yaydı. Sufî tarikatlar güçleniyor.',
        yasam: 'Türkçe ilk büyük edebiyat eserleri; Farsça ve Arapça ile yan yana.',
        bilgi: 'Kaşgarlı Mahmud\'un Divanü Lügati\'t-Türk\'ündeki dünya haritası, Japonya\'yı gösteren bilinen en eski haritalardan biri.' }
    ],
    nufus: [[-552, 3], [-800, 4], [-1000, 5], [-1200, 6]],
    nufusNot: 'Orta Asya ve Moğolistan için kaba tahminler.',
    dunyaOzet: { eko: 'İpek Yolu altın çağında: Tang Çini, Abbasî Bağdadı ve Bizans arasındaki ticaret Orta Asya\'dan geçiyor.', askeri: 'Atlı okçular ve zırhlı süvari; Türk gulam askerler İslam ordularının bel kemiği.' },
    events: [
      { y: -552, t: 'Göktürk Kağanlığı kuruldu', k: 'm' }, { y: -568, t: 'Göktürk elçileri Bizans\'ta', k: 'm' }, { y: -630, t: 'Doğu Göktürkleri Tang\'a yenildi', k: 'm' }, { y: -682, t: 'İkinci Göktürk Kağanlığı', k: 'm' },
      { y: -732, t: 'Kül Tigin yazıtı', k: 'm' }, { y: -735, t: 'Bilge Kağan yazıtı', k: 'm' }, { y: -744, t: 'Uygur Kağanlığı', k: 'm' }, { y: -751, t: 'Talas Savaşı', k: 'm' },
      { y: -762, t: 'Uygurlar Maniheizmi kabul etti', k: 'm' }, { y: -840, t: 'Kırgızlar Ordu-Balık\'ı yıktı', k: 'm' }, { y: -999, t: 'Karahanlılar Buhara\'yı aldı', k: 'm' }, { y: -1040, t: 'Dandanakan Savaşı', k: 'm' },
      { y: -1070, t: 'Kutadgu Bilig', k: 'm' }, { y: -1074, t: 'Divanü Lügati\'t-Türk', k: 'm' }, { y: -1141, t: 'Katvan Savaşı', k: 'm' },
      { y: -622, t: 'Hicret', k: 'w' }, { y: -800, t: 'Şarlman', k: 'w' }, { y: -1071, t: 'Malazgirt', k: 'w' }
    ],
    world: [
      { from: -618, to: -907, yer: 'Çin', t: 'Tang hanedanı.' }, { from: -750, to: -1258, yer: 'Bağdat', t: 'Abbasî Halifeliği.' }, { from: -1071, to: -1206, yer: 'Anadolu', t: 'Türkler Anadolu\'ya yerleşiyor.' }
    ],
    sites: [{ ad: 'GÜRGENÇ (HAREZM)', wx: 800 }, { ad: 'MERV', wx: 1300 }, { ad: 'BUHARA', wx: 2000 }, { ad: 'SEMERKANT', wx: 2500 }, { ad: 'TALAS', wx: 3600 }, { ad: 'BALASAGUN', wx: 4100 }, { ad: 'KAŞGAR', wx: 4500 }, { ad: 'TURFAN', wx: 5300 }, { ad: 'ORDU-BALIK', wx: 5800 }, { ad: 'ÖTÜKEN', wx: 6000 }],
    monuments: [
      { id: 'orhun', ad: 'Orhun Yazıtları', yer: 'Orhun vadisi, Moğolistan', wx: 6000, type: 'obelisk', b: 10, h: 18, start: -731, end: -735, vol: 1e4 },
      { id: 'samani', ad: 'İsmail Samanî Türbesi', yer: 'Buhara, Özbekistan', wx: 2000, type: 'mosque', minare: 0, b: 40, h: 26, kubbe: '#c8a070', renk: '#c8a070', start: -900, end: -943, vol: 2e4 },
      { id: 'kalyan', ad: 'Kalyan Minaresi', yer: 'Buhara', wx: 2100, type: 'mosque', minare: 1, b: 30, h: 46, kubbe: '#c8a070', renk: '#d0ac78', start: -1121, end: -1127, vol: 3e4 },
      { id: 'sencer', ad: 'Sultan Sencer Türbesi', yer: 'Merv, Türkmenistan', wx: 1300, type: 'mosque', minare: 0, b: 50, h: 38, kubbe: '#3a8ab0', renk: '#c8a878', start: -1150, end: -1157, vol: 3e4 }
    ],
    hizli: [{ ad: 'Bumin Kağan', y: -552 }, { ad: 'Orhun Yazıtları', y: -732 }, { ad: 'Uygurlar', y: -750 }, { ad: 'Talas', y: -751 }, { ad: 'Samanîler', y: -920 }, { ad: 'Karahanlılar', y: -999 }, { ad: 'Dandanakan', y: -1040 }, { ad: 'Divanü Lügati\'t-Türk', y: -1074 }, { ad: 'Katvan', y: -1141 }],
    bilgi: {
      orhun: { ikon: '🪨', yaptiran: 'Bilge Kağan; veziri Tonyukuk', donem: '720-735', mimar: 'Yazıcı Yollug Tigin', sure: '—', neden: 'Kül Tigin ve Bilge Kağan\'ın anıt mezarları; Tonyukuk\'un kendi yazıtı.', onem: 'Türk adının geçtiği ve Türkçenin bilinen en eski uzun metinleri.', teknik: [['Kül Tigin yazıtı', '3,75 m'], ['Yazı', 'Köktürk alfabesi ve Çince']], nasil: 'Taş kaplumbağa kaide üzerine dikilmiş mermer dikilitaşlar.', bugun: 'Moğolistan\'da müze; UNESCO Dünya Mirası (Orhun Vadisi, 2004).', ilginc: 'Yazıtlar 1893\'te Danimarkalı dilbilimci Vilhelm Thomsen tarafından çözüldü; ilk okuduğu kelimeler "Tengri" ve "Türk" idi.' },
      samani: { ikon: '🧱', yaptiran: 'İsmail Samanî', donem: '892-943 arası', mimar: '—', sure: '—', neden: 'Samanî hanedanının türbesi.', onem: 'Orta Asya İslam mimarisinin en eski ayakta yapılarından.', teknik: [['Boyut', '~10 × 10 m'], ['Malzeme', 'Pişmiş tuğla']], nasil: 'Tuğlalar sepet örgüsü gibi dizilerek gün boyunca değişen gölge desenleri yaratır.', bugun: 'Buhara tarihî merkezi; UNESCO Dünya Mirası.', ilginc: 'Moğol istilası sırasında türbe toprak altında kaldığı için yıkılmaktan kurtuldu.' },
      kalyan: { ikon: '🗼', yaptiran: 'Karahanlı Arslan Han', donem: '1127', mimar: 'Usta Bako', sure: '—', neden: 'Ezan ve gözetleme kulesi.', onem: 'Buhara\'nın simgesi.', teknik: [['Yükseklik', '~46 m'], ['Taban çapı', '~9 m']], nasil: 'Desenli tuğla bantlar; temeli 10 metre derinde.', bugun: 'Ayakta; Kalyan Camii (1514) ile birlikte.', ilginc: 'Cengiz Han 1220\'de Buhara\'yı yakarken minarenin güzelliğinden etkilenip yıkılmamasını emrettiği anlatılır.' },
      sencer: { ikon: '🕌', yaptiran: 'Sultan Sencer', donem: '~1157', mimar: 'Serahslı Muhammed b. Atsız', sure: '—', neden: 'Büyük Selçuklu sultanı Sencer\'in türbesi.', onem: 'Çift kabuklu kubbenin erken ve büyük bir örneği.', teknik: [['Kubbe çapı', '~17 m'], ['Yükseklik', '~38 m']], nasil: 'İç ve dış iki kubbe; dış kubbe turkuaz çinilerle kaplıydı.', bugun: 'Merv ören yeri, UNESCO Dünya Mirası.', ilginc: 'Moğollar 1221\'de Merv\'i yerle bir etti ama türbe ayakta kaldı.' }
    },
    ulke: [
      { ad: 'Genel bakış', ikon: '🧭', html: '<p>552\'de kurulan <b>Göktürk Kağanlığı</b> "Türk" adını taşıyan ilk devlettir. Ardından <b>Uygurlar</b> yerleşik bir kültür kurdu. 10. yüzyıldan itibaren Türk boyları İslam\'ı kabul etti; <b>Karahanlılar, Gazneliler ve Selçuklular</b> Orta Asya\'dan Anadolu\'ya ve Hindistan\'a uzanan devletler kurdu.</p>' },
      { ad: 'Yazı ve edebiyat', ikon: '📜', html: '<ul><li><b>Köktürk alfabesi:</b> Orhun ve Yenisey yazıtları</li><li><b>Uygur alfabesi:</b> Soğd alfabesinden; Moğollar da kullandı</li><li><b>Kutadgu Bilig</b> (1069-70): Yusuf Has Hacib</li><li><b>Divanü Lügati\'t-Türk</b> (1072-74): Kaşgarlı Mahmud</li><li><b>Divan-ı Hikmet:</b> Ahmed Yesevî</li></ul>' }
    ]
  });

  // ================= 3. CENGİZ HAN VE TİMUR =================
  window.PLACES.push({
    id: 'ortaasya-mogol', sira: 3, kisa: 'Cengiz Han ve Timur', aralikAd: 'MS 1206 – 1500',
    baslik: 'Moğol İmparatorluğu · Karakurum · Çağatay Hanlığı · Timur · Uluğ Bey',
    ulkeAlt: 'Cengiz Han\'ın kurultayından Timurluların Semerkant ve Herat\'ına (MS 1206 – 1500)',
    from: -1206, to: -1500, start: -1220,
    not: 'Tarihler kesindir. Moğol seferlerindeki kayıp sayıları kaynaklarda çok abartılı olabilir.', baskent: 'Karakurum, Almalık, Semerkant, Herat',
    sahne: { kizak: false, araba: false, deve: true, giyim: 'cubbe' },
    dynasties: [
      { from: -1206, to: -1260, ad: 'Büyük Moğol İmparatorluğu', renk: '#3a5a8a' }, { from: -1260, to: -1370, ad: 'Çağatay Hanlığı ve Altın Orda', renk: '#5a6a3a' },
      { from: -1370, to: -1500, ad: 'Timurlular', renk: '#2a7a8a' }
    ],
    rulers: [
      { from: -1206, to: -1227, ad: 'Cengiz Han', kisa: 'Cengiz', kim: 'Asıl adı Temuçin. 1206 kurultayında bütün Moğol ve Türk boylarının hanı seçildi. Harezm\'i yıktı (1219-1221) ve tarihin en büyük kara imparatorluğunu başlattı.' },
      { from: -1227, to: -1241, ad: 'Ögeday Kağan', kisa: 'Ögeday', kim: 'Karakurum\'u başkent yaptı (1235). Batu Han\'ın Avrupa seferi Macaristan\'a ulaştı; Ögeday\'ın ölümü üzerine geri dönüldü.' },
      { from: -1241, to: -1251, ad: 'Töregene Hatun ve Güyük Kağan', kisa: 'Güyük', kim: 'Papalık elçisi Plano Carpini Güyük\'ün tahta çıkışına tanık oldu (1246).' },
      { from: -1251, to: -1259, ad: 'Möngke Kağan', kisa: 'Möngke', kim: 'Kardeşleri Kubilay\'ı Çin\'e, Hülagü\'yü İran\'a gönderdi. Ölümünden sonra imparatorluk bölündü.' },
      { from: -1259, to: -1370, ad: 'Çağatay hanları ve Altın Orda; doğuda Yuan', kisa: 'Çağataylar', kim: 'Orta Asya Çağatay Hanlığı\'na kaldı; batıda Altın Orda, Çin\'de Kubilay\'ın Yuan hanedanı, İran\'da İlhanlılar.' },
      { from: -1370, to: -1405, ad: 'Timur', kisa: 'Timur', kim: 'Barlas boyundan. Semerkant\'ı başkent yaptı; Delhi\'den Ankara\'ya, Moskova yakınından Şam\'a sefer yaptı. Çin seferine çıkarken Otrar\'da öldü.' },
      { from: -1405, to: -1447, ad: 'Şahruh; Semerkant\'ta Uluğ Bey', kisa: 'Şahruh', kim: 'Başkent Herat\'ta Şahruh, Semerkant\'ta oğlu Uluğ Bey. Timurlu Rönesansı.' },
      { from: -1447, to: -1449, ad: 'Uluğ Bey', kisa: 'Uluğ Bey', kim: 'Astronom hükümdar; yıldız kataloğu Zîc-i Uluğ Bey. Oğlu tarafından öldürüldü.' },
      { from: -1449, to: -1469, ad: 'Ebu Said Mirza', kisa: 'Ebu Said', kim: 'Timurlu topraklarını yeniden birleştirmeye çalıştı; Akkoyunlulara yenildi.' },
      { from: -1469, to: -1500, ad: 'Hüseyin Baykara (Herat); veziri Ali Şir Nevai', kisa: 'Baykara', kim: 'Herat\'ta sanatın altın çağı: Nevai\'nin Çağatayca şiirleri, Bihzad\'ın minyatürleri.' }
    ],
    eras: [
      { from: -1206, to: -1260, puan: { eko: 3, ordu: 5, istikrar: 3 }, baskent: 'Karakurum',
        gundem: 'Cengiz Han bozkırı birleştirdi ve dünyayı fethe çıktı. Otrar\'da Moğol elçi ve tüccarlarının öldürülmesi Harezm seferini başlattı: Buhara, Semerkant, Merv, Nişabur yıkıldı. Karakurum\'da Çinli, İranlı, Avrupalı elçiler ve ustalar buluşuyor.',
        savas: 'Onluk sistem, her askere 3-5 yedek at, Çinli kuşatma mühendisleri, sahte kaçış ve kuşatma taktikleri. Haber ağı "yam": at istasyonları.',
        ekonomi: 'Pax Mongolica: İpek Yolu bir kez daha güvenli; kâğıt para ve paiza (geçiş belgesi).',
        din: 'Moğollar her dine hoşgörülü: Karakurum\'da camiler, kiliseler ve Budist tapınakları yan yana.',
        yasam: 'Yasa (Cengiz yasası) ve kurultay. Seyyahlar Plano Carpini ve Rubruk Karakurum\'u anlattı.',
        bilgi: 'Moğol ulakları yam istasyonlarında at değiştirerek günde 200 km\'den fazla yol alabiliyordu.' },
      { from: -1260, to: -1370, puan: { eko: 3, ordu: 4, istikrar: 2 }, baskent: 'Almalık, Karşı',
        gundem: 'İmparatorluk dört hanlığa bölündü. Çağatay Hanlığı\'nda Moğol yöneticiler zamanla Türkleşti ve Müslüman oldu. Kara Ölüm (veba) 1330\'larda Orta Asya\'da başlamış olabilir.',
        savas: 'Hanlıklar birbirleriyle savaşıyor; Çağatay hanlığı Maveraünnehir ve Moğolistan (Doğu) olarak ikiye bölündü.',
        ekonomi: 'Ticaret yolları yeniden canlandı ama savaşlar ve veba onları yine zayıflattı.',
        din: 'Tarmaşirin Han İslam\'ı kabul etti (1326 civarı). Nakşibendî tarikatı Buhara\'da doğdu.',
        yasam: 'Çağatay Türkçesi gelişiyor.',
        bilgi: 'Kırgızistan\'daki Issık Göl yakınında 1338-1339 tarihli Nesturi mezar taşlarında "veba" yazılı; bilim insanları buradaki kemiklerde Kara Ölüm bakterisini buldu.' },
      { from: -1370, to: -1500, puan: { eko: 5, ordu: 5, istikrar: 3 }, baskent: 'Semerkant, sonra Herat',
        gundem: 'Timur seferlerinden getirdiği ustalarla Semerkant\'ı dünyanın en güzel şehri yapmaya çalıştı: Bibi Hanım Camii, Gur-i Emir. Torunu Uluğ Bey dünyanın en büyük rasathanelerinden birini kurdu. Herat\'ta Nevai ve Bihzad.',
        savas: 'Timur Altın Orda\'yı (Tokhtamış), Delhi Sultanlığı\'nı (1398), Memlükleri ve Osmanlı\'yı (Ankara 1402) yendi.',
        ekonomi: 'Semerkant ve Herat\'ta dokuma, kâğıt, çini ve kitap atölyeleri.',
        din: 'Ahmed Yesevî türbesi Timur tarafından yaptırıldı; Nakşibendîlik güçlendi.',
        yasam: 'Bahçeler, şiir meclisleri ve minyatür. Kastilyalı elçi Clavijo Timur\'un sarayını anlattı (1404).',
        bilgi: 'Uluğ Bey\'in rasathanesi bir yılın uzunluğunu 365 gün 6 saat 10 dakika olarak ölçtü; gerçeğe yalnızca ~1 dakika uzak.' }
    ],
    nufus: [[-1206, 6], [-1260, 4], [-1370, 4], [-1500, 5]],
    nufusNot: 'Orta Asya ve Moğolistan için kaba tahminler; Moğol seferleri bazı şehirleri boşalttı.',
    dunyaOzet: { eko: 'Moğol barışı Avrasya ticaretini birleştirdi; Marco Polo Çin\'e gitti. 14. yüzyılda Kara Ölüm her yere yayıldı.', askeri: 'Moğol atlı orduları; barut silahları Çin\'den batıya yayılıyor.' },
    events: [
      { y: -1206, t: 'Cengiz Han kurultayda han seçildi', k: 'm' }, { y: -1218, t: 'Otrar olayı', k: 'm' }, { y: -1220, t: 'Buhara ve Semerkant yıkıldı', k: 'm' }, { y: -1221, t: 'Merv yıkıldı', k: 'm' },
      { y: -1227, t: 'Cengiz Han öldü', k: 'm' }, { y: -1235, t: 'Karakurum başkent oldu', k: 'm' }, { y: -1241, t: 'Moğollar Macaristan\'da', k: 'm' }, { y: -1260, t: 'Moğol İmparatorluğu bölündü', k: 'm' },
      { y: -1338, t: 'Issık Göl\'de veba', k: 'm' }, { y: -1370, t: 'Timur Semerkant\'ta', k: 'm' }, { y: -1398, t: 'Timur Delhi\'de', k: 'm' }, { y: -1402, t: 'Ankara Savaşı', k: 'm' },
      { y: -1404, t: 'Gur-i Emir', k: 'm' }, { y: -1405, t: 'Timur öldü', k: 'm' }, { y: -1429, t: 'Uluğ Bey rasathanesi', k: 'm' }, { y: -1449, t: 'Uluğ Bey öldürüldü', k: 'm' },
      { y: -1271, t: 'Marco Polo yola çıktı', k: 'w' }, { y: -1347, t: 'Kara Ölüm Avrupa\'da', k: 'w' }, { y: -1453, t: 'İstanbul\'un fethi', k: 'w' }
    ],
    world: [
      { from: -1271, to: -1368, yer: 'Çin', t: 'Yuan hanedanı (Kubilay).' }, { from: -1256, to: -1335, yer: 'İran', t: 'İlhanlılar.' }, { from: -1242, to: -1502, yer: 'Rusya', t: 'Altın Orda.' },
      { from: -1299, to: -1500, yer: 'Anadolu', t: 'Osmanlı.' }
    ],
    sites: [{ ad: 'GÜRGENÇ', wx: 800 }, { ad: 'BUHARA', wx: 2000 }, { ad: 'SEMERKANT', wx: 2500 }, { ad: 'OTRAR', wx: 3000 }, { ad: 'TÜRKİSTAN (YESİ)', wx: 3200 }, { ad: 'ALMALIK', wx: 4200 }, { ad: 'ISSIK GÖL', wx: 4300 }, { ad: 'KARAKURUM', wx: 6100 }],
    monuments: [
      { id: 'karakurum', ad: 'Karakurum', yer: 'Orhun vadisi, Moğolistan', wx: 6100, type: 'city', wall: true, b: 240, n: 22, hk: 0.28, start: -1235, end: -1250, vol: 5e4, ruin: -1388 },
      { id: 'guriemir', ad: 'Gur-i Emir (Timur\'un türbesi)', yer: 'Semerkant', wx: 2600, type: 'mosque', minare: 2, b: 70, h: 40, kubbe: '#3a9ad0', renk: '#d8c49c', start: -1403, end: -1404, vol: 5e4 },
      { id: 'yesevi', ad: 'Hoca Ahmed Yesevî Türbesi', yer: 'Türkistan, Kazakistan', wx: 3200, type: 'mosque', minare: 0, b: 90, h: 44, kubbe: '#3a8ab0', renk: '#cdb48c', start: -1389, end: -1405, vol: 6e4 },
      { id: 'ulugbey', ad: 'Uluğ Bey Rasathanesi', yer: 'Semerkant', wx: 2750, type: 'mound', b: 50, h: 30, renk: '#c8a070', start: -1424, end: -1429, vol: 2e4, ruin: -1449 }
    ],
    hizli: [{ ad: 'Cengiz Han', y: -1206 }, { ad: 'Harezm seferi', y: -1220 }, { ad: 'Karakurum', y: -1235 }, { ad: 'Bölünme', y: -1260 }, { ad: 'Timur', y: -1370 }, { ad: 'Ankara', y: -1402 }, { ad: 'Gur-i Emir', y: -1404 }, { ad: 'Uluğ Bey', y: -1429 }, { ad: 'Nevai', y: -1490 }],
    bilgi: {
      karakurum: { ikon: '⛺', yaptiran: 'Ögeday Kağan', donem: '1235\'ten', mimar: '—', sure: '—', neden: 'Moğol İmparatorluğu\'nun başkenti.', onem: 'Dünyanın en büyük imparatorluğunun merkezi.', teknik: [['Sur', '~1,5 × 2 km']], nasil: 'Kerpiç surlar, Müslüman ve Çinli mahalleleri, sarayın önünde gümüş ağaç.', bugun: 'Erdene Zuu manastırı kalıntıların üzerinde; UNESCO (Orhun Vadisi).', ilginc: 'Sarayın önündeki gümüş ağaç çeşmesini Fransız usta Guillaume Boucher yaptı: dallarından şarap, kımız, bal şarabı ve pirinç birası akıyordu.' },
      guriemir: { ikon: '🔵', yaptiran: 'Timur (torunu Muhammed Sultan için)', donem: '1403-1404', mimar: 'İsfahanlı Muhammed bin Mahmud', sure: '~1 yıl', neden: 'Timurlu hanedan türbesi; Timur da buraya gömüldü.', onem: 'Babür ve Tac Mahal türbelerinin atası.', teknik: [['Kubbe', 'Dilimli, ~34 m yükseklik'], ['Timur\'un mezar taşı', 'Koyu yeşil yeşim']], nasil: 'Turkuaz dilimli kubbe, yüksek kasnak.', bugun: 'Semerkant, UNESCO Dünya Mirası.', ilginc: 'Sovyet bilim insanları 1941\'de Timur\'un mezarını açtı; iki gün sonra Almanya SSCB\'ye saldırdı. Söylenceye göre mezarda "Beni rahatsız eden, benden korkunç bir düşmanı serbest bırakır" yazıyordu.' },
      yesevi: { ikon: '🕌', yaptiran: 'Timur', donem: '1389-1405 (yarım kaldı)', mimar: '—', sure: '—', neden: 'Türk tasavvufunun öncüsü Ahmed Yesevî\'nin mezarı üzerine.', onem: 'Timurlu mimarisinin en büyük yapılarından.', teknik: [['Ana kubbe çapı', '~18 m'], ['Boyut', '~46 × 65 m']], nasil: 'Ön cephe hiç kaplanmadı; tuğla iskele delikleri bugün de görülüyor.', bugun: 'UNESCO Dünya Mirası (2003); Kazakistan\'ın önemli ziyaret yeri.', ilginc: 'İçinde 2 tonluk tunç bir kazan (taykazan) var; Timur tarafından döktürüldü.' },
      ulugbey: { ikon: '🔭', yaptiran: 'Uluğ Bey', donem: '1424-1429', mimar: '—', sure: '~5 yıl', neden: 'Gökyüzünü ölçmek.', onem: '1.018 yıldızlık katalog; Ptolemaios\'tan sonra en kapsamlı.', teknik: [['Sekstant yarıçapı', '~40 m'], ['Yükseklik', '3 kat']], nasil: 'Toprağa gömülü dev mermer yay (Fahri sekstantı).', bugun: 'Yeraltı kısmı 1908\'de Vyatkin tarafından bulundu.', ilginc: 'Uluğ Bey\'in öldürülmesinden sonra rasathane yıkıldı; öğrencisi Ali Kuşçu İstanbul\'a gelip Ayasofya medresesinde ders verdi.' }
    },
    ulke: [
      { ad: 'Genel bakış', ikon: '🧭', html: '<p>1206\'da <b>Cengiz Han</b> bozkır boylarını birleştirdi; torunları Kore\'den Macaristan\'a uzanan tarihin en büyük kara imparatorluğunu kurdu. Bölündükten sonra Orta Asya <b>Çağatay Hanlığı</b>na kaldı. 1370\'te <b>Timur</b> Semerkant\'tan yeni bir imparatorluk kurdu; torunları sanat ve bilimin koruyucusu oldu.</p>' },
      { ad: 'Moğol yönetimi', ikon: '📜', html: '<ul><li><b>Kurultay:</b> han seçimi ve büyük kararlar</li><li><b>Yasa:</b> Cengiz\'in kuralları</li><li><b>Yam:</b> posta ve at istasyonları</li><li><b>Paiza:</b> altın ya da gümüş geçiş levhası</li><li><b>Din hoşgörüsü</b></li></ul>' }
    ]
  });

  // ================= 4. HANLIKLARDAN BAĞIMSIZLIĞA =================
  window.PLACES.push({
    id: 'ortaasya-modern', sira: 4, modern: true, kisa: 'Hanlıklardan bağımsızlığa', aralikAd: 'MS 1500 – bugün',
    baslik: 'Şeybanîler · Buhara ve Hive · Rus Türkistanı · Sovyetler · bağımsız cumhuriyetler',
    ulkeAlt: 'Özbek hanlıklarından Rus ve Sovyet yönetimine, 1991 bağımsızlığından bugüne (MS 1500 – bugün)',
    from: -1500, to: -2026, start: -1650,
    not: 'Tarihler kesindir. Moğolistan 1691-1911 arası Çin\'deki Qing hanedanına bağlıydı.', baskent: 'Buhara, Hive, Hokand, Taşkent; bugün Astana, Taşkent, Aşkabat, Bişkek, Duşanbe, Ulan Batur',
    sahne: { kizak: false, deve: [-1500, -1930], buhar: -1890, oto: -1930, ucak: -1940, giyim: [[-1500, 'cubbe'], [-1925, 'modern']] },
    dynasties: [
      { from: -1500, to: -1865, ad: 'Özbek hanlıkları (Buhara, Hive, Hokand)', renk: '#2a7a6a' }, { from: -1865, to: -1917, ad: 'Rus Türkistanı', renk: '#4a4a7a' },
      { from: -1917, to: -1991, ad: 'Sovyet dönemi', renk: '#a82a2a' }, { from: -1991, to: -2026, ad: 'Bağımsız cumhuriyetler', renk: '#2a8aa8' }
    ],
    rulers: [
      { from: -1500, to: -1510, ad: 'Muhammed Şeybani Han', kisa: 'Şeybani', kim: 'Özbek boylarıyla Semerkant\'ı aldı (1500); Timurlu Babür önce Kabil\'e, sonra Hindistan\'a gitti.' },
      { from: -1510, to: -1598, ad: 'Şeybanîler (II. Abdullah Han)', kisa: 'Abdullah Han', kim: 'Buhara\'da medreseler, kervansaraylar ve kapalı çarşılar.' },
      { from: -1598, to: -1747, ad: 'Canîler (Aştarhanîler) ve Hive hanları', kisa: 'Canîler', kim: 'Deniz ticaretinin yükselişiyle İpek Yolu zayıfladı. Semerkant Registanı\'na Şirdar ve Tilla Kari medreseleri eklendi.' },
      { from: -1747, to: -1865, ad: 'Buhara Emirliği, Hive ve Hokand hanlıkları', kisa: 'Emirler', kim: 'Üç rakip devlet. Kazak cüzleri ve Türkmen boyları bağımsız.' },
      { from: -1865, to: -1917, ad: 'Rus Türkistanı genel valileri', kisa: 'Çarlık', kim: 'Rusya Taşkent\'i (1865), Semerkant\'ı (1868), Hive\'yi (1873) aldı; Hokand\'ı ilhak etti (1876). Gökdepe\'de Türkmenler yenildi (1881).' },
      { from: -1917, to: -1953, ad: 'Sovyet yönetimi; Stalin', kisa: 'Stalin', kim: 'Basmacı direnişi bastırıldı; 1924\'te bugünkü cumhuriyetlerin sınırları çizildi. Kollektifleştirme ve Kazak kıtlığı.' },
      { from: -1953, to: -1991, ad: 'Sovyet yönetimi; pamuk ve uzay', kisa: 'SSCB', kim: 'Gagarin Kazakistan\'daki Baykonur\'dan uzaya çıktı (1961). Pamuk için Aral Gölü\'nü besleyen nehirler kurutuldu.' },
      { from: -1991, to: -2026, ad: 'Bağımsız cumhuriyetler ve Moğolistan', kisa: 'Bağımsızlık', kim: 'Kazakistan, Özbekistan, Türkmenistan, Kırgızistan ve Tacikistan 1991\'de bağımsız oldu. Moğolistan 1990\'da demokrasiye geçti.' }
    ],
    eras: [
      { from: -1500, to: -1865, puan: { eko: 3, ordu: 3, istikrar: 3 }, baskent: 'Buhara, Hive, Hokand',
        gundem: 'Özbek hanlıkları vaha şehirlerini yönetiyor. Avrupalıların açtığı deniz yolları İpek Yolu\'nu gölgede bıraktı. Hive\'de köle pazarı 19. yüzyıla kadar sürdü. Kazak bozkırlarında üç cüz; Rusya kuzeyden yaklaşıyor.',
        savas: 'Hanlıklar arası savaşlar ve Türkmen akınları. Kazaklar 1720\'lerde Cungarlara karşı "Büyük Felaket" yıllarını yaşadı.',
        ekonomi: 'Buhara\'nın kapalı çarşıları, pamuk, ipek, kuru meyve ve karakul derisi. Rusya ile kervan ticareti.',
        din: 'Buhara "İslam\'ın kubbesi": yüzlerce medrese. Nakşibendîlik Osmanlı\'ya ve Hindistan\'a yayıldı.',
        yasam: 'Çayhaneler, pilav ve hamamlar. Hive İçan Kala\'nın kerpiç surları.',
        bilgi: 'Semerkant\'ın Registan meydanındaki üç medrese farklı yüzyıllarda yapıldı: Uluğ Bey (1420), Şirdar (1636) ve Tilla Kari (1660).' },
      { from: -1865, to: -1917, puan: { eko: 3, ordu: 2, istikrar: 3 }, baskent: 'Taşkent (Rus genel valiliği)',
        gundem: 'Rusya Orta Asya\'yı fethetti: "Büyük Oyun"da İngiltere ile rekabet. Taşkent\'te Rus mahalleleri, demiryolu (Trans-Hazar 1880\'ler). Cedidçiler yeni usul okullar açtı.',
        savas: 'Göktepe katliamı (1881). 1916 Orta Asya ayaklanması.',
        ekonomi: 'Pamuk, Amerikan İç Savaşı\'ndan sonra Rus tekstilinin hammaddesi oldu.',
        din: 'Cedidcilik: İsmail Gaspıralı\'nın "Dilde, fikirde, işte birlik" fikri.',
        yasam: 'Demiryolu, telgraf ve gazete; ama halkın çoğu hâlâ köylü ve göçebe.',
        bilgi: 'Hive Hanlığı 1873\'te Rusya\'ya bağlandı ama 1920\'ye kadar kendi hanı tarafından yönetildi.' },
      { from: -1917, to: -1991, puan: { eko: 4, ordu: 4, istikrar: 3 }, baskent: 'Taşkent, Alma-Ata, Aşkabat, Frunze, Duşanbe',
        gundem: 'Sovyetler bölgeyi beş cumhuriyete böldü, Latin ve sonra Kiril alfabesini getirdi. Kollektifleştirmede Kazakların yaklaşık üçte biri açlıktan öldü (1930-33). İkinci Dünya Savaşı\'nda fabrikalar buraya taşındı; Baykonur\'dan ilk insan uzaya gitti.',
        savas: 'Basmacı direnişi (1918-1930\'lar). Afganistan savaşına (1979-1989) Orta Asyalı askerler katıldı.',
        ekonomi: 'Pamuk tek ürün oldu; Aral Gölü\'nü besleyen Seyhun ve Ceyhun kurutuldu. Semipalatinsk\'te 456 nükleer deneme yapıldı.',
        din: 'Din baskı altında; camiler kapatıldı.',
        yasam: 'Okuma yazma oranı neredeyse %100\'e çıktı. Taşkent 1966 depreminden sonra Sovyet şehri olarak yeniden yapıldı.',
        bilgi: 'Aral Gölü 1960\'tan bu yana yüzey alanının yaklaşık %90\'ını kaybetti; eski limanlarda gemiler kumun ortasında kaldı.' },
      { from: -1991, to: -2026, puan: { eko: 4, ordu: 3, istikrar: 3 }, baskent: 'Astana, Taşkent, Aşkabat, Bişkek, Duşanbe, Ulan Batur',
        gundem: 'SSCB dağılınca beş Türk ve Fars dilli cumhuriyet bağımsızlığını kazandı. Kazakistan petrol ve uranyumla büyüdü, başkentini Astana\'ya taşıdı (1997). Türk Devletleri Teşkilatı kuruldu. Çin\'in "Kuşak ve Yol" projesi İpek Yolu\'nu yeniden canlandırıyor.',
        savas: 'Tacikistan iç savaşı (1992-1997). Kırgızistan\'da devrimler (2005, 2010).',
        ekonomi: 'Petrol, doğalgaz, uranyum (Kazakistan dünyanın en büyük üreticisi), altın ve pamuk. Rusya\'da çalışan göçmenlerin gönderdiği para.',
        din: 'İslam yeniden canlandı; camiler ve medreseler açıldı.',
        yasam: 'Latin alfabesine dönüş (Özbekistan, Türkmenistan; Kazakistan geçişte). Nevruz bayramı.',
        bilgi: 'Moğolistan dünyanın en seyrek nüfuslu bağımsız ülkesi: kilometrekareye ~2 kişi düşüyor; halkın yaklaşık dörtte biri hâlâ göçebe.' }
    ],
    nufus: [[-1500, 5], [-1800, 6], [-1900, 10], [-1950, 20], [-1991, 52], [-2026, 85]],
    nufusNot: 'Beş Orta Asya cumhuriyeti ve Moğolistan toplamı (Özbekistan ~37 milyon, Kazakistan ~20 milyon); eski rakamlar kaba tahmindir.',
    dunyaOzet: { eko: 'Deniz yolları İpek Yolu\'nu gölgede bıraktı; 20. yüzyılda petrol, pamuk ve maden.', askeri: 'Tüfek ve topçu; Rus ve Sovyet orduları; nükleer denemeler.' },
    events: [
      { y: -1500, t: 'Şeybani Han Semerkant\'ı aldı', k: 'm' }, { y: -1504, t: 'Babür Kabil\'e gitti', k: 'm' }, { y: -1636, t: 'Şirdar Medresesi', k: 'm' }, { y: -1723, t: 'Kazakların "Büyük Felaket" yılları', k: 'm' },
      { y: -1865, t: 'Rusya Taşkent\'i aldı', k: 'm' }, { y: -1873, t: 'Hive Rusya\'ya bağlandı', k: 'm' }, { y: -1881, t: 'Gökdepe', k: 'm' }, { y: -1916, t: 'Orta Asya ayaklanması', k: 'm' },
      { y: -1924, t: 'Sovyet cumhuriyetlerinin sınırları çizildi', k: 'm' }, { y: -1932, t: 'Kazak kıtlığı', k: 'm' }, { y: -1961, t: 'Gagarin Baykonur\'dan uzaya', k: 'm' }, { y: -1966, t: 'Taşkent depremi', k: 'm' },
      { y: -1991, t: 'Bağımsızlık', k: 'm' }, { y: -1997, t: 'Astana başkent oldu', k: 'm' }, { y: -2009, t: 'Türk Konseyi', k: 'm' },
      { y: -1526, t: 'Babür İmparatorluğu', k: 'w' }, { y: -1917, t: 'Rus Devrimi', k: 'w' }, { y: -1989, t: 'Berlin Duvarı yıkıldı', k: 'w' }
    ],
    world: [
      { from: -1526, to: -1857, yer: 'Hindistan', t: 'Babür İmparatorluğu (Timurlu).' }, { from: -1644, to: -1912, yer: 'Çin', t: 'Qing hanedanı; Doğu Türkistan ve Moğolistan\'ı aldı.' },
      { from: -1721, to: -1917, yer: 'Rusya', t: 'Rus İmparatorluğu.' }, { from: -1922, to: -1991, yer: 'SSCB', t: 'Sovyetler Birliği.' }
    ],
    sites: [{ ad: 'HİVE', wx: 800 }, { ad: 'AŞKABAT', wx: 1100 }, { ad: 'BUHARA', wx: 2000 }, { ad: 'SEMERKANT', wx: 2500 }, { ad: 'TAŞKENT', wx: 3000 }, { ad: 'BAYKONUR', wx: 3400 }, { ad: 'ASTANA', wx: 3800 }, { ad: 'BİŞKEK', wx: 4100 }, { ad: 'ULAN BATUR', wx: 6800 }],
    monuments: [
      { id: 'registan', ad: 'Registan medreseleri', yer: 'Semerkant', wx: 2450, type: 'mosque', minare: 4, b: 160, h: 40, kubbe: '#3a9ad0', renk: '#d8c49c', start: -1619, end: -1660, vol: 1e5 },
      { id: 'hive', ad: 'Hive: İçan Kala', yer: 'Özbekistan', wx: 800, type: 'city', wall: true, b: 260, n: 24, hk: 0.3, start: -1600, end: -1660, vol: 6e4 },
      { id: 'taskent', ad: 'Taşkent', yer: 'Özbekistan', wx: 3000, type: 'modcity', b: 380, h: 80, n: 38, minareli: true, start: -1966, end: -2020, vol: 7e4 },
      { id: 'astana', ad: 'Astana ve Bayterek Kulesi', yer: 'Kazakistan', wx: 3800, type: 'modcity', b: 360, h: 110, n: 36, start: -1997, end: -2020, vol: 8e4 }
    ],
    hizli: [{ ad: 'Şeybani', y: -1500 }, { ad: 'Registan', y: -1660 }, { ad: 'Rus fethi', y: -1868 }, { ad: 'Gökdepe', y: -1881 }, { ad: 'Sovyetler', y: -1924 }, { ad: 'Gagarin', y: -1961 }, { ad: 'Bağımsızlık', y: -1991 }, { ad: 'Astana', y: -1997 }, { ad: 'Bugün', y: -2026 }],
    bilgi: {
      registan: { ikon: '🕌', yaptiran: 'Uluğ Bey; sonra Buhara valisi Yalangtuş Bahadır', donem: '1417-1420 ve 1619-1660', mimar: '—', sure: '—', neden: 'Semerkant\'ın ana meydanında üç medrese.', onem: 'Orta Asya\'nın en ünlü meydanı.', teknik: [['Medrese', '3'], ['Şirdar portalı', 'Kaplanlı güneş mozaiği']], nasil: 'Mozaik çiniler; Şirdar\'ın portalında güneşi sırtında taşıyan kaplanlar.', bugun: 'UNESCO Dünya Mirası (Semerkant, 2001).', ilginc: '"Registan" Farsça "kumlu yer" demek: meydan eskiden bir dere yatağının kumluğuydu.' },
      hive: { ikon: '🏰', yaptiran: 'Hive hanları', donem: '17-19. yy', mimar: '—', sure: '—', neden: 'Hive Hanlığı\'nın iç şehri.', onem: 'Orta Asya\'nın en iyi korunmuş surlu şehri.', teknik: [['Sur', '~2,2 km, 10 m yükseklik'], ['Kalta Minor', '1855, yarım kalmış minare']], nasil: 'Kerpiç surlar; içinde 50\'den fazla tarihî yapı.', bugun: 'UNESCO Dünya Mirası (1990).', ilginc: 'Kalta Minor dünyanın en yüksek minaresi olacaktı ama han ölünce 29 metrede yarım kaldı.' },
      taskent: { ikon: '🏙️', yaptiran: '—', donem: 'MÖ ~2. yy\'dan', mimar: '—', sure: '—', neden: 'Çirçik vahasında ticaret şehri.', onem: 'Orta Asya\'nın en büyük şehri (~3 milyon).', teknik: [['Metro', '1977, Orta Asya\'nın ilki']], nasil: '1966 depreminden sonra geniş caddeli Sovyet şehri olarak yeniden yapıldı.', bugun: 'Özbekistan\'ın başkenti.', ilginc: 'Metro istasyonları sanat galerisi gibi süslü; 2018\'e kadar fotoğraf çekmek yasaktı.' },
      astana: { ikon: '🏙️', yaptiran: 'Nursultan Nazarbayev', donem: '1997\'den başkent', mimar: 'Kisho Kurokawa (şehir planı); Bayterek: Akmurat Cerkenov', sure: '—', neden: 'Kazakistan\'ın yeni başkenti.', onem: 'Bozkırın ortasında fütüristik bir şehir.', teknik: [['Bayterek', '97 m (1997 yılını simgeler)']], nasil: 'Esil nehri kıyısında sıfırdan planlandı.', bugun: '~1,4 milyon nüfus; dünyanın en soğuk başkentlerinden biri.', ilginc: 'Şehrin adı Akmola, Astana, Nur-Sultan ve yeniden Astana oldu; "Astana" Kazakça "başkent" demek.' }
    },
    ulke: [
      { ad: 'Genel bakış', ikon: '🧭', html: '<p>1500\'de <b>Özbek</b> boyları Timurluların yerini aldı. Deniz yolları açılınca İpek Yolu zayıfladı. 19. yüzyılda <b>Rusya</b> bölgeyi fethetti; 1917\'den sonra <b>Sovyetler</b> bugünkü beş cumhuriyetin sınırlarını çizdi. 1991\'de bağımsızlık geldi.</p>' },
      { ad: 'Bugünkü ülkeler', ikon: '🗺️', html: '<ul><li><b>Kazakistan</b> (~20 milyon, Astana)</li><li><b>Özbekistan</b> (~37 milyon, Taşkent)</li><li><b>Türkmenistan</b> (~7 milyon, Aşkabat)</li><li><b>Kırgızistan</b> (~7 milyon, Bişkek)</li><li><b>Tacikistan</b> (~10 milyon, Duşanbe; Farsça konuşulur)</li><li><b>Moğolistan</b> (~3,5 milyon, Ulan Batur)</li></ul>' }
    ]
  });

  window.BOLGE_TASI('ortaasya');

  // ================= ORTAK VERİLER =================
  window.MISIR = {
    coords: { esik: [43.37, 77.45], pazirik: [50.73, 88.0], semerkant: [39.672, 66.989], orhun: [47.56, 102.83], samani: [39.7766, 64.4018], kalyan: [39.7756, 64.4142], sencer: [37.6633, 62.1636], karakurum: [47.2, 102.82], guriemir: [39.6484, 66.9692], yesevi: [43.2933, 68.2722], ulugbey: [39.6748, 67.0058], registan: [39.6547, 66.9758], hive: [41.3783, 60.3639], taskent: [41.2995, 69.2401], astana: [51.1282, 71.4304] },
    wiki: { esik: 'Issyk kurgan', pazirik: 'Pazyryk culture', semerkant: 'Afrasiyab (Samarkand)', orhun: 'Orkhon inscriptions', samani: 'Samanid Mausoleum', kalyan: 'Kalyan Minaret', sencer: 'Mausoleum of Ahmad Sanjar', karakurum: 'Karakorum', guriemir: 'Gur-e-Amir', yesevi: 'Mausoleum of Khoja Ahmed Yasawi', ulugbey: 'Ulugh Beg Observatory', registan: 'Registan', hive: 'Itchan Kala', taskent: 'Tashkent', astana: 'Bayterek Tower' },
    bilgi: {}, alt: {},
    kureAdlari: [[45, 60, 'ARAL', 'kucuk', 4.2], [41.5, 51, 'HAZAR DENİZİ', 'deniz', 3.0], [46, 68, 'KAZAK BOZKIRI', 'bolge', 2.8], [40.5, 64, 'MAVERAÜNNEHİR', 'bolge', 3.6],
      [47, 102, 'MOĞOLİSTAN', 'bolge', 2.8], [42.5, 76, 'TANRI DAĞLARI', 'kucuk', 3.6], [49, 88, 'ALTAY', 'kucuk', 3.6], [39.5, 82, 'TAKLAMAKAN', 'kucuk', 3.4], [43.5, 104, 'GOBİ ÇÖLÜ', 'kucuk', 3.2],
      [42.4, 61.8, 'Ceyhun', 'nehir', 5], [44.5, 66, 'Seyhun', 'nehir', 5], [42.4, 77.3, 'Issık Göl', 'kucuk', 5.5]],
    sehirler: [
      { ad: 'Semerkant', ll: [39.6542, 66.9597], from: 700, to: -2026, b: [[-1370, -1405], [-1500, -1534]], not: 'İpek Yolu\'nun incisi; Timur\'un başkenti.' },
      { ad: 'Buhara', ll: [39.7747, 64.4286], from: 500, to: -2026, b: [[-875, -999], [-1534, -1920]], not: 'Samanî başkenti; "İslam\'ın kubbesi".' },
      { ad: 'Merv', ll: [37.6633, 62.1636], from: 600, to: -1221, b: [[-1040, -1157]], not: 'Selçuklu başkenti; 12. yy\'da dünyanın en büyük şehirlerinden.' },
      { ad: 'Hive', ll: [41.3783, 60.3639], from: 500, to: -2026, b: [[-1598, -1920]], not: 'Hive Hanlığı\'nın başkenti.' },
      { ad: 'Kaşgar', ll: [39.4704, 75.9898], from: 200, to: -2026, b: [[-940, -1211]], not: 'Karahanlı başkenti; Kaşgarlı Mahmud\'un şehri.' },
      { ad: 'Balasagun', ll: [42.746, 75.25], from: -900, to: -1400, b: [[-940, -1130]], not: 'Karahanlı başkenti; Yusuf Has Hacib\'in doğduğu yer.' },
      { ad: 'Ordu-Balık', ll: [47.43, 102.66], from: -744, to: -840, b: [[-744, -840]], not: 'Uygur başkenti.' },
      { ad: 'Karakurum', ll: [47.2, 102.82], from: -1220, to: -1388, b: [[-1235, -1260]], not: 'Moğol İmparatorluğu başkenti.' },
      { ad: 'Herat', ll: [34.3482, 62.1997], from: 500, to: -2026, b: [[-1405, -1507]], not: 'Timurlu başkenti (bugün Afganistan).' },
      { ad: 'Türkistan (Yesi)', ll: [43.2973, 68.2517], from: -500, to: -2026, not: 'Ahmed Yesevî\'nin şehri.' },
      { ad: 'Taşkent', ll: [41.2995, 69.2401], from: 200, to: -2026, b: [[-1865, -2026]], not: 'Özbekistan\'ın başkenti.' },
      { ad: 'Astana', ll: [51.1694, 71.4491], from: -1830, to: -2026, b: [[-1997, -2026]], not: 'Kazakistan\'ın başkenti.' },
      { ad: 'Ulan Batur', ll: [47.8864, 106.9057], from: -1639, to: -2026, b: [[-1924, -2026]], not: 'Moğolistan\'ın başkenti.' }
    ],
    nil: { ikon: '🌊', title: 'Seyhun ve Ceyhun', sub: 'Bozkır ve çölde hayatın iki damarı', foto: 'Amu Darya', tabs: [{ ad: '🌊 Nehirler', html: '<ul class="hap"><li><b>Ceyhun (Amu Derya)</b> ~2.400 km, <b>Seyhun (Sir Derya)</b> ~2.200 km: Pamir ve Tanrı Dağları\'nın karlarından doğup Aral Gölü\'ne akarlar.</li><li>İki nehir arasındaki topraklara Araplar <b>Maveraünnehir</b> ("nehrin ötesi") dedi; Semerkant ve Buhara buradadır.</li><li>Sovyet döneminde pamuk tarlaları için suyu çekildi; Aral Gölü neredeyse kurudu.</li><li>Kuzeyde <b>Orhun</b> ve <b>Selenga</b> nehirleri Moğol bozkırının kalbidir.</li></ul>' }] },
    simgeler: [
      { id: 'oa-at', ad: 'Atın evcilleşmesi', ikon: '🐎', wiki: 'Botai culture', git: { place: 'ortaasya-bozkir', y: 3500 }, ozet: 'İnsanlık tarihini değiştiren ortaklık.', hap: ['MÖ ~3500, Botai.', 'Kımız ve atlı göç.'] },
      { id: 'oa-mete', ad: 'Mete Han', ikon: '🏹', wiki: 'Modu Chanyu', git: { place: 'ortaasya-bozkir', y: 209 }, ozet: 'Asya Hun İmparatorluğu\'nun kurucusu.', hap: ['MÖ 209.', 'Onluk ordu sistemi.'] },
      { id: 'oa-orhun', ad: 'Orhun Yazıtları', ikon: '🪨', wiki: 'Orkhon inscriptions', git: { place: 'ortaasya-turk', y: -732, id: 'orhun' }, ozet: 'Türkçenin taşa yazılı ilk uzun metinleri.', hap: ['732 ve 735.', 'Köktürk alfabesi.'] },
      { id: 'oa-cengiz', ad: 'Cengiz Han', ikon: '⛺', wiki: 'Genghis Khan', git: { place: 'ortaasya-mogol', y: -1206 }, ozet: 'Tarihin en büyük kara imparatorluğu.', hap: ['1206 kurultayı.', 'Pax Mongolica.'] },
      { id: 'oa-gurienir', ad: 'Gur-i Emir', ikon: '🔵', wiki: 'Gur-e-Amir', git: { place: 'ortaasya-mogol', y: -1404, id: 'guriemir' }, ozet: 'Timur\'un türbesi.', hap: ['1404.', 'Turkuaz dilimli kubbe.'] },
      { id: 'oa-ulugbey', ad: 'Uluğ Bey Rasathanesi', ikon: '🔭', wiki: 'Ulugh Beg Observatory', git: { place: 'ortaasya-mogol', y: -1429, id: 'ulugbey' }, ozet: 'Astronom hükümdarın gözlemevi.', hap: ['1429.', '1.018 yıldız.'] },
      { id: 'oa-registan', ad: 'Registan', ikon: '🕌', wiki: 'Registan', git: { place: 'ortaasya-modern', y: -1660, id: 'registan' }, ozet: 'Semerkant\'ın üç medreseli meydanı.', hap: ['1420-1660.', 'Kaplanlı portal.'] },
      { id: 'oa-yurt', ad: 'Yurt (keçe çadır)', ikon: '🛖', wiki: 'Yurt', git: { place: 'ortaasya-turk', y: -700 }, ozet: 'Göçebe hayatın evi.', hap: ['Bir saatte kurulur.', 'Bugün de kullanılıyor.'] }
    ],
    bugun: '<p>Bölgede bugün beş Orta Asya cumhuriyeti ve Moğolistan var; toplam ~85 milyon kişi. Doğu Türkistan (Sincan) Çin\'e bağlı.</p><ul class="hap"><li><b>Diller:</b> Özbekçe, Kazakça, Türkmence, Kırgızca (Türk dilleri), Tacikçe (Farsça), Moğolca, Rusça.</li><li><b>Kaynaklar:</b> petrol, doğalgaz, uranyum, altın, pamuk.</li><li><b>Türk Devletleri Teşkilatı:</b> Türkiye, Azerbaycan, Kazakistan, Özbekistan, Kırgızistan.</li><li><b>Göçebe kültürü:</b> yurt, kımız, at oyunları (kökbörü), Dünya Göçebe Oyunları.</li></ul>'
  };

  window.SEHIR_BILGI = {
    'Semerkant': { bugun: 'Semerkant, Özbekistan', kurulus: 'MÖ ~7. yy', wiki: 'Samarkand', onem: 'İpek Yolu\'nun incisi; Timur\'un başkenti.', ilginc: 'İslam dünyasındaki ilk kâğıt fabrikalarının Semerkant\'ta kurulduğu anlatılır; "Semerkant kâğıdı" ünlüydü.' },
    'Buhara': { bugun: 'Buhara, Özbekistan', kurulus: 'MÖ ~5. yy', wiki: 'Bukhara', onem: 'Samanî başkenti; İbn Sina\'nın yetiştiği şehir.', ilginc: 'Şehirde 140\'tan fazla tarihî yapı korunuyor; merkezi bir açık hava müzesi.' },
    'Karakurum': { bugun: 'Harhorin, Moğolistan', kurulus: '1220 (ordugâh), 1235 (şehir)', wiki: 'Karakorum', onem: 'Moğol İmparatorluğu\'nun başkenti.', ilginc: 'Rubruk\'a göre Karakurum, Paris\'in kenar mahallesi Saint-Denis\'den büyük değildi.' },
    'Merv': { bugun: 'Bayramali yakını, Türkmenistan', kurulus: 'MÖ ~6. yy', wiki: 'Merv', onem: 'Selçuklu başkenti; 12. yy\'da dünyanın en büyük şehirlerinden.', ilginc: 'Merv\'de 10 büyük kütüphane vardı; coğrafyacı Yakut el-Hamevi buradan 1218\'de kitaplarını bırakıp kaçmak zorunda kaldı.' }
  };
  window.KULTUR = { tanrilar: [], olumler: [], roller: [], mumyalama: '', ic: { eslesme: {}, sahneler: {} }, bilim: { genel: '', cag: {} } };
  window.SINIRLAR = [];

  window.OLAYLAR = [
    { id: 'baideng', tur: 'savas', ad: 'Baideng Kuşatması', y: 200, ll: [40.1, 113.3], onem: 4, wiki: 'Battle of Baideng', taraflar: ['Asya Hunları (Mete Han)', 'Han Çini (Gaozu)'], kazanan: 'Hunlar', sonuc: 'Han imparatoru 7 gün kuşatıldı; Çin Hunlara haraç ve prenses vermeyi kabul etti.' },
    { id: 'talas', tur: 'savas', ad: 'Talas Savaşı', y: -751, ll: [42.52, 72.24], onem: 5, wiki: 'Battle of Talas', taraflar: ['Abbasîler ve Karluklar', 'Tang Çini (Gao Xianzhi)'], kazanan: 'Abbasîler', sonuc: 'Orta Asya İslam dünyasında kaldı; kâğıt yapımının batıya geçtiği anlatılır.' },
    { id: 'dandanakan', tur: 'savas', ad: 'Dandanakan Savaşı', y: -1040, ll: [37.4, 62.2], onem: 5, wiki: 'Battle of Dandanaqan', taraflar: ['Selçuklular (Tuğrul, Çağrı)', 'Gazneliler (I. Mesud)'], kazanan: 'Selçuklular', sonuc: 'Büyük Selçuklu Devleti kuruldu.' },
    { id: 'katvan', tur: 'savas', ad: 'Katvan Savaşı', y: -1141, ll: [39.9, 66.5], onem: 4, wiki: 'Battle of Qatwan', taraflar: ['Karahıtaylar (Yelü Dashi)', 'Selçuklular (Sencer)'], kazanan: 'Karahıtaylar', sonuc: 'Selçuklular Maveraünnehir\'i kaybetti; Avrupa\'da "Prester John" söylencesini besledi.' },
    { id: 'otrar', tur: 'savas', ad: 'Otrar ve Harezm seferi', y: -1219, ll: [42.85, 68.3], onem: 5, wiki: 'Mongol invasion of the Khwarazmian Empire', taraflar: ['Moğollar (Cengiz Han)', 'Harezmşahlar (Muhammed)'], kazanan: 'Moğollar', sonuc: 'Buhara, Semerkant, Merv, Gürgenç yıkıldı; Harezm İmparatorluğu sona erdi.' },
    { id: 'gokdepe', tur: 'savas', ad: 'Gökdepe Kuşatması', y: -1881, ll: [38.15, 57.97], onem: 3, wiki: 'Battle of Geok Tepe (1881)', taraflar: ['Rusya (Skobelev)', 'Teke Türkmenleri'], kazanan: 'Rusya', sonuc: 'Türkmenistan Rus egemenliğine girdi.' },
    { id: 'kurultay1206', tur: 'olay', ad: 'Büyük Kurultay', y: -1206, ll: [48.5, 109.5], onem: 5, wiki: 'Genghis Khan', sonuc: 'Temuçin "Cengiz Han" unvanıyla bütün bozkır boylarının hanı oldu.' },
    { id: 'orhunolay', tur: 'olay', ad: 'Orhun Yazıtları dikildi', y: -732, ll: [47.56, 102.83], onem: 5, wiki: 'Orkhon inscriptions', sonuc: 'Türk dilinin ilk büyük yazılı belgeleri.' },
    { id: 'gagarin', tur: 'olay', ad: 'Gagarin uzaya çıktı', y: -1961, ll: [45.92, 63.34], onem: 5, wiki: 'Vostok 1', sonuc: 'İlk insanlı uzay uçuşu Kazakistan\'daki Baykonur\'dan yapıldı.' },
    { id: 'aral', tur: 'afet', alt: 'kuraklik', ad: 'Aral Gölü\'nün kuruması', y: -1987, ll: [45.0, 60.0], onem: 4, wiki: 'Aral Sea', sonuc: 'Dünyanın dördüncü büyük gölü 1960\'tan beri büyük ölçüde kurudu; bir çevre felaketi.' },
    { id: 'taskent1966', tur: 'afet', alt: 'deprem', ad: 'Taşkent depremi', y: -1966, ll: [41.3, 69.27], onem: 3, wiki: '1966 Tashkent earthquake', sonuc: '~300.000 kişi evsiz kaldı; şehir yeniden kuruldu.' },
    { id: 'semipalatinsk', tur: 'afet', alt: 'kaza', ad: 'Semipalatinsk nükleer denemeleri', y: -1949, ll: [50.07, 78.43], onem: 4, wiki: 'Semipalatinsk Test Site', sonuc: '1949-1989 arası 456 nükleer deneme; bölge halkı radyasyondan etkilendi.' }
  ];

  window.ULKE_SAYFA = window.ULKE_SAYFA || {};
  window.ULKE_SAYFA.ortaasya = {
    id: 'ortaasya', ad: 'Bozkır ve Orta Asya', ikon: '🐎', kw: ['orta asya', 'bozkır', 'türkistan', 'göktürk', 'hun', 'uygur', 'moğol', 'cengiz', 'timur', 'semerkant', 'buhara', 'kazakistan', 'özbekistan', 'türkmenistan', 'kırgızistan', 'moğolistan', 'ipek yolu'],
    altBaslik: 'MÖ ~3500 – bugün · atlılardan Göktürklere, Cengiz\'den Timur\'a', kapakWiki: 'Registan', kapakAd: 'Semerkant, Registan', merkez: [44, 72], merkezZ: 3.4,
    ozet: ['<b>Orta Asya</b> ve büyük <b>bozkır</b>, Türklerin ve Moğolların ana yurdudur. At burada evcilleşti; atlı göçebe imparatorluklar Çin\'den Avrupa\'ya kadar dünyayı etkiledi.', 'Güneydeki vaha şehirleri Semerkant, Buhara ve Merv İpek Yolu\'nun kalbiydi. Bölge 19. yüzyılda Rusya\'ya bağlandı ve 1991\'de bağımsızlığını kazandı.'],
    bilgiKutusu: [['Tarih', 'MÖ ~3500 – bugün'], ['Önemli başkentler', 'Ötüken, Ordu-Balık, Buhara, Kaşgar, Merv, Karakurum, Semerkant, Herat, Taşkent, Astana'], ['Diller', 'Türk dilleri, Moğolca, Farsça (Tacikçe), Rusça'], ['Bugün', '6 ülke, ~85 milyon kişi']],
    donemler: { 'ortaasya-bozkir': 'Atın evcilleşmesi, İskitler, Hunlar.', 'ortaasya-turk': 'Göktürkler, Uygurlar, Karahanlılar, Selçuklular.', 'ortaasya-mogol': 'Cengiz Han, Çağataylar, Timur ve Uluğ Bey.', 'ortaasya-modern': 'Özbek hanlıkları, Rus ve Sovyet yönetimi, bağımsızlık.' },
    kultur: [{ baslik: 'Diller', ikon: '🗣️', html: '<p>Türk dilleri (Göktürkçe, Uygurca, Çağatayca, bugün Özbekçe, Kazakça, Türkmence, Kırgızca), Moğolca, Soğdca ve Farsça.</p>' }, { baslik: 'Din', ikon: '☁️', html: '<p>Gök Tanrı inancı ve şamanizm; Budizm, Maniheizm, Nesturi Hristiyanlık; 10. yüzyıldan itibaren İslam. Moğolistan\'da Tibet Budizmi.</p>' }],
    figurler: [
      { id: 'orhun', ad: 'Orhun Yazıtları', tur: 'yapı', wiki: 'Orkhon inscriptions', ll: [47.56, 102.83], z: 70, yapim: '732-735', kim: 'Bilge Kağan', durum: 'ayakta', durumYazi: 'Müzede.', nerede: 'Moğolistan', metin: 'Türkçenin ilk büyük yazıtları.', git: { place: 'ortaasya-turk', y: -732, id: 'orhun' } },
      { id: 'registan', ad: 'Registan', tur: 'yapı', wiki: 'Registan', ll: [39.6547, 66.9758], z: 80, yapim: '1420-1660', kim: 'Uluğ Bey, Yalangtuş', durum: 'ayakta', durumYazi: 'Ayakta.', nerede: 'Semerkant', metin: 'Üç medreseli meydan.', git: { place: 'ortaasya-modern', y: -1660, id: 'registan' } }
    ],
    kisiler: [
      { ad: 'Tomris', wiki: 'Tomyris', yil: 'MÖ 6. yy', ozet: 'Masaget kraliçesi.', y: 530 }, { ad: 'Mete Han', wiki: 'Modu Chanyu', yil: 'MÖ ~234-174', ozet: 'Hun İmparatorluğu\'nun kurucusu.', y: 209 },
      { ad: 'Bilge Kağan', wiki: 'Bilge Khagan', yil: '683-734', ozet: 'Göktürk kağanı.', y: -720 }, { ad: 'Tonyukuk', wiki: 'Tonyukuk', yil: '~646-726', ozet: 'Göktürk veziri.', y: -716 },
      { ad: 'Kaşgarlı Mahmud', wiki: 'Mahmud al-Kashgari', yil: '1008-1105', ozet: 'İlk Türkçe sözlük.', y: -1074 }, { ad: 'Ahmed Yesevî', wiki: 'Khoja Akhmet Yassawi', yil: '1093-1166', ozet: 'Türk tasavvufunun öncüsü.', y: -1140 },
      { ad: 'Cengiz Han', wiki: 'Genghis Khan', yil: '~1162-1227', ozet: 'Moğol İmparatorluğu\'nun kurucusu.', y: -1206 }, { ad: 'Timur', wiki: 'Timur', yil: '1336-1405', ozet: 'Semerkant\'ın fatihi.', y: -1400 },
      { ad: 'Uluğ Bey', wiki: 'Ulugh Beg', yil: '1394-1449', ozet: 'Astronom hükümdar.', y: -1429 }, { ad: 'Ali Şir Nevai', wiki: 'Ali-Shir Nava\'i', yil: '1441-1501', ozet: 'Çağatay Türkçesinin büyük şairi.', y: -1490 }
    ],
    biliyorMuydunuz: ['"Kağan" unvanını ilk kullananlar 5. yüzyılda Juan-juan hükümdarlarıydı.', 'Pantolon büyük olasılıkla bozkırdaki atlılar tarafından icat edildi: at sırtında etek giymek zordur.', 'Cengiz Han\'ın mezarının yeri hâlâ bilinmiyor.', 'Kazakistan dünyanın denize kıyısı olmayan en büyük ülkesi.']
  };
})();
