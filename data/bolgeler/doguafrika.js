// Doğu ve Güney Afrika (Sudan, Etiyopya, Eritre, Somali, Kenya, Tanzanya, Uganda, Mozambik, Zimbabve, Güney Afrika ve komşuları).
// Yıl: MÖ pozitif, MS negatif. Sahne (wx): Nil'den güneye, Hint Okyanusu kıyısı boyunca Ümit Burnu'na
//   Kerma 700 · Napata 1100 · Meroe 1500 · Gondar 2200 · Aksum 2400 · Lalibela 2700 · Addis Ababa 3000 · Mogadişu 3600
//   Nairobi 3800 · Lamu 4000 · Mombasa 4300 · Zanzibar 4700 · Kilva 5100 · Büyük Zimbabve 6200 · Johannesburg 7000 · Kap 7900
// Kaynaklar: Iliffe, "Africans" (2017); Phillipson, "Foundations of an African Civilisation: Aksum" (2012);
//   Horton & Middleton, "The Swahili" (2000); Pikirayi, "The Zimbabwe Culture" (2001); Thompson, "A History of South Africa" (2014).
(() => {
  window.PLACES = window.PLACES || [];

  // ================= 1. KERMA, KUŞ VE AKSUM =================
  window.PLACES.push({
    id: 'doguafrika-antik', sira: 1, kisa: 'Kerma, Kuş ve Aksum', aralikAd: 'MÖ 2500 – MS 640',
    baslik: 'Kerma · Kuşlu firavunlar · Meroe piramitleri · kandakeler · Aksum dikilitaşları',
    ulkeAlt: 'Nubya\'nın Kerma ve Kuş krallıklarından Etiyopya\'nın Aksum İmparatorluğu\'na (MÖ 2500 – MS 640)',
    from: 2500, to: -640, start: 690,
    not: 'Kerma ve Kuş tarihleri büyük ölçüde Mısır kayıtlarına ve arkeolojiye dayanır.', baskent: 'Kerma, Napata, Meroe, Aksum',
    sahne: { kizak: false, araba: [1600, 300], deve: [-100, -640], katipYok: true, giyim: 'antik' },
    dynasties: [{ from: 2500, to: 1500, ad: 'Kerma krallığı', renk: '#8a5a2a' }, { from: 1500, to: 1070, ad: 'Mısır egemenliği', renk: '#c8a040' }, { from: 1070, to: 300, ad: 'Kuş (Napata)', renk: '#5a3a2a' }, { from: 300, to: -350, ad: 'Meroe', renk: '#9a4a2a' }, { from: -350, to: -640, ad: 'Aksum', renk: '#2a6a5a' }],
    rulers: [
      { from: 2500, to: 1500, ad: 'Kerma kralları', kisa: 'Kerma', kim: 'Üçüncü Nil çağlayanında Sahra altı Afrika\'nın ilk büyük krallığı; Mısır\'ın güney rakibi.' },
      { from: 1500, to: 1070, ad: 'Mısır egemenliği (Kuş Kral Naibi)', kisa: 'Mısır', kim: 'Yeni Krallık firavunları Nubya\'yı aldı; Nubya altını Mısır\'ı zenginleştirdi.' },
      { from: 1070, to: 747, ad: 'Napata\'nın Kuş kralları', kisa: 'Napata', kim: 'Mısır zayıflayınca Kuş bağımsızlaştı; Napata\'da Amon tapınağı.' },
      { from: 747, to: 656, ad: 'Kuşlu firavunlar (Piye, Taharka)', kisa: 'Taharka', kim: 'Kuş kralları Mısır\'ı fethedip 25. hanedanı kurdu; Taharka\'nın adı Tevrat\'ta geçer. Asur onları Mısır\'dan çıkardı.' },
      { from: 656, to: 300, ad: 'Napata krallığı', kisa: 'Napata', kim: 'Kuşlular Nubya\'ya çekildi; başkent yavaş yavaş güneye, Meroe\'ye kaydı.' },
      { from: 300, to: -350, ad: 'Meroe kralları ve kandakeleri (Amanirenas)', kisa: 'Kandakeler', kim: 'Kandake (kraliçe) Amanirenas Roma\'yla savaştı ve barışla geri çekilmesini sağladı (MÖ 21-20).' },
      { from: -350, to: -540, ad: 'Aksum kralları (Ezana, Kaleb)', kisa: 'Ezana', kim: 'Ezana Hristiyanlığı kabul edip Meroe\'yi yıktı. Kaleb Yemen\'e sefer yaptı (~525).' },
      { from: -540, to: -640, ad: 'Aksum\'un son büyük çağı', kisa: 'Aksum', kim: 'Aksum kralı (Necaşi) Mekke\'den kaçan ilk Müslümanlara sığınma verdi (615).' }
    ],
    eras: [
      { from: 2500, to: 1070, puan: { eko: 4, ordu: 3, istikrar: 3 }, baskent: 'Kerma',
        gundem: 'Nil\'in yukarısında Kerma krallığı dev kerpiç tapınaklar (deffufa) yapıyor ve Mısır ile altın, fildişi, abanoz ticareti yürütüyor. Mısır sonunda Nubya\'yı fethetti. Doğu Afrika\'da Bantu dilli çiftçiler yavaş yavaş güneye yayılmaya başladı.',
        savas: 'Nubyalı okçular ünlüydü; Mısırlılar Nubya\'ya "Yay Ülkesi" (Ta-Seti) derdi.',
        ekonomi: 'Altın, fildişi, abanoz, sığır.',
        din: 'Kerma\'da büyük tümülüs mezarlar; kralla birlikte yüzlerce kişi gömüldü.',
        yasam: 'Sığır sürüleri zenginlik ölçüsü; seramikleri ince ve parlak.',
        bilgi: 'Kerma\'nın Batı Deffufa\'sı 3.500 yıldır ayakta duran dünyanın en eski kerpiç yapılarından.' },
      { from: 1070, to: 300, puan: { eko: 4, ordu: 4, istikrar: 3 }, baskent: 'Napata',
        gundem: 'Kuş krallığı güçlendi ve MÖ 8. yüzyılda Mısır\'ı fethetti: "Kara firavunlar" Nil\'i Akdeniz\'den Sudan\'a kadar yönetti. Kuşlular Mısır geleneklerini canlandırdı ve kendi piramitlerini yaptı.',
        savas: 'Asur\'un demir silahlı ordusu Kuşluları Mısır\'dan çıkardı (MÖ 671-663).',
        ekonomi: 'Altın ve demir; Nil ticareti.',
        din: 'Amon kültü; Cebel Barkal kutsal dağ.',
        yasam: 'Firavun tarzı taçlar ve iki uraeus yılanı (Mısır ve Kuş).',
        bilgi: 'Sudan\'da Mısır\'dakinden daha fazla piramit var: ~200\'den fazla.' },
      { from: 300, to: -350, puan: { eko: 4, ordu: 3, istikrar: 4 }, baskent: 'Meroe; Aksum',
        gundem: 'Meroe bir demir sanayi şehri: cüruf yığınları hâlâ görülüyor. Kendi yazılarını (Meroitik) kullandılar. Kraliçeler (kandake) güçlü. Doğuda Etiyopya yaylasında Aksum, Kızıldeniz ticaretiyle yükseldi.',
        savas: 'Kandake Amanirenas Roma\'ya karşı savaştı; bir Augustus heykelinin başını kesip Meroe\'deki bir tapınağın eşiğine gömdü.',
        ekonomi: 'Demir, altın; Aksum fildişi, tütsü ve altınla Roma ve Hindistan\'la ticaret yapıyor.',
        din: 'Meroe\'de aslan başlı tanrı Apedemak; Aksum\'da Güney Arabistan tanrıları.',
        yasam: 'Meroitik yazı hâlâ tam okunamıyor: harfler biliniyor ama dil anlaşılamıyor.',
        bilgi: 'Amanirenas\'ın gömdürdüğü Augustus başı 1910\'da bulundu; bugün British Museum\'da.' },
      { from: -350, to: -640, puan: { eko: 5, ordu: 4, istikrar: 4 }, baskent: 'Aksum',
        gundem: 'Aksum İmparatorluğu Roma, Pers ve Çin ile birlikte dünyanın "dört büyük gücünden" biri sayıldı (Mani\'ye göre). Kral Ezana Hristiyanlığı kabul etti: Etiyopya dünyanın ilk Hristiyan devletlerinden. Dev granit dikilitaşlar yükseldi. Nubya\'da üç Hristiyan krallık doğdu.',
        savas: 'Aksum Yemen\'e sefer yaptı (~525); Kızıldeniz\'in iki yakasını kontrol etti.',
        ekonomi: 'Kendi altın, gümüş ve tunç sikkeleri; Adulis limanı.',
        din: 'Etiyopya Ortodoks Kilisesi; Ge\'ez dili ve yazısı.',
        yasam: 'Etiyopya geleneğine göre Ahit Sandığı Aksum\'daki bir kilisede korunuyor.',
        bilgi: 'İslam tarihinde "ilk hicret" Aksum\'a yapıldı: Hristiyan kral (Necaşi) Mekkeli Müslümanları korudu (615).' }
    ],
    nufus: [[2500, 1], [1000, 2], [1, 5], [-300, 7], [-640, 8]],
    nufusNot: 'Doğu ve Güney Afrika için çok kaba tahminler.',
    dunyaOzet: { eko: 'Nubya altını ve Aksum\'un Kızıldeniz ticareti Akdeniz\'i Hindistan\'a bağladı.', askeri: 'Okçular, demir silahlar, savaş filleri (Aksum).' },
    events: [
      { y: 2000, t: 'Kerma\'nın Batı Deffufa\'sı', k: 'm' }, { y: 1500, t: 'Mısır Nubya\'yı aldı', k: 'm' }, { y: 1000, t: 'Bantu göçleri yayılıyor', k: 'm' }, { y: 744, t: 'Piye Mısır\'ı fethetti', k: 'm' },
      { y: 690, t: 'Taharka firavun oldu', k: 'm' }, { y: 300, t: 'Başkent Meroe', k: 'm' }, { y: 24, t: 'Amanirenas Roma\'ya karşı', k: 'm' }, { y: -100, t: 'Aksum yükseliyor', k: 'm' },
      { y: -330, t: 'Ezana Hristiyan oldu', k: 'm' }, { y: -350, t: 'Aksum Meroe\'yi yıktı', k: 'm' }, { y: -525, t: 'Kaleb\'in Yemen seferi', k: 'm' }, { y: -615, t: 'İlk hicret: Müslümanlar Aksum\'da', k: 'm' },
      { y: 2560, t: 'Büyük Piramit', k: 'w' }, { y: 1274, t: 'Kadeş', k: 'w' }, { y: -476, t: 'Batı Roma\'nın sonu', k: 'w' }
    ],
    world: [{ from: 3100, to: 30, yer: 'Mısır', t: 'Firavunlar; Nubya\'nın komşusu ve rakibi.' }, { from: 27, to: -476, yer: 'Roma', t: 'Mısır Roma eyaleti; Meroe ve Aksum\'la ticaret.' }, { from: -224, to: -640, yer: 'İran', t: 'Sasaniler.' }],
    sites: [{ ad: 'KERMA', wx: 700 }, { ad: 'NAPATA · CEBEL BARKAL', wx: 1100 }, { ad: 'MEROE', wx: 1500 }, { ad: 'ADULİS', wx: 2100 }, { ad: 'AKSUM', wx: 2400 }, { ad: 'HİNT OKYANUSU KIYISI', wx: 4300 }],
    monuments: [
      { id: 'kerma', ad: 'Kerma: Batı Deffufa', yer: 'Kerma, Sudan', wx: 700, type: 'ziggurat', kat: 2, renk: '#a8744a', b: 90, h: 20, start: 2000, end: 1900, vol: 6e4 },
      { id: 'meroe', ad: 'Meroe piramitleri', yer: 'Bajrawiya, Sudan', wx: 1500, type: 'true', b: 14, h: 30, start: 280, end: 270, vol: 3e4 },
      { id: 'aksum', ad: 'Aksum dikilitaşları', yer: 'Aksum, Etiyopya', wx: 2400, type: 'obelisk', b: 6, h: 24, start: -320, end: -340, vol: 1e4 }
    ],
    hizli: [{ ad: 'Kerma', y: 2000 }, { ad: 'Mısır Nubya\'da', y: 1450 }, { ad: 'Piye', y: 744 }, { ad: 'Taharka', y: 690 }, { ad: 'Meroe', y: 280 }, { ad: 'Amanirenas', y: 24 }, { ad: 'Ezana', y: -330 }, { ad: 'İlk hicret', y: -615 }],
    bilgi: {
      kerma: { ikon: '🧱', yaptiran: 'Kerma kralları', donem: 'MÖ ~2000-1500', mimar: '—', sure: '—', neden: 'Tapınak; kral törenleri.', onem: 'Sahra altı Afrika\'nın en eski büyük yapılarından.', teknik: [['Yükseklik', '~18 m'], ['Malzeme', 'Kerpiç']], nasil: 'Masif kerpiç kütle; içinden dar bir merdiven çatıya çıkar.', bugun: 'Kerma ören yeri, Sudan.', ilginc: '"Deffufa" Nubya dilinde insan yapımı kerpiç yapı demektir.' },
      meroe: { ikon: '🔺', yaptiran: 'Meroe kralları ve kraliçeleri', donem: 'MÖ ~300 – MS ~350', mimar: '—', sure: '—', neden: 'Kraliyet mezarları.', onem: 'Dünyanın en büyük piramit topluluklarından; ~200 piramit.', teknik: [['Yükseklik', '6-30 m'], ['Eğim', '~70 derece']], nasil: 'Mısır piramitlerinden daha dik ve küçük; önlerinde küçük tapınaklar.', bugun: 'UNESCO Dünya Mirası (2011).', ilginc: '1834\'te İtalyan define avcısı Ferlini hazine bulmak için 40 piramidin tepesini yıktı.' },
      aksum: { ikon: '🗿', yaptiran: 'Aksum kralları', donem: 'MS ~3-4. yy', mimar: '—', sure: '—', neden: 'Kraliyet mezarlarını işaretlemek.', onem: 'Dünyanın en büyük tek parça dikilitaşları arasında; Etiyopya\'nın simgesi.', teknik: [['Büyük Stel (düşük)', '~33 m, ~520 ton'], ['Aksum Dikilitaşı', '~24 m']], nasil: 'Granit bloklara çok katlı saray cepheleri, kapı ve pencereler oyuldu.', bugun: 'UNESCO Dünya Mirası (1980).', ilginc: 'Mussolini 1937\'de 24 metrelik dikilitaşı Roma\'ya götürttü; 2005\'te Etiyopya\'ya geri verildi.' }
    },
    ulke: [
      { ad: 'Genel bakış', ikon: '🧭', html: '<p>Nil\'in yukarısındaki <b>Nubya</b> (bugünkü Sudan) Mısır\'ın kardeş uygarlığıdır: Kerma, Kuş ve Meroe krallıkları. Etiyopya yaylasında <b>Aksum</b> Kızıldeniz ticaretiyle bir imparatorluk oldu ve 4. yüzyılda Hristiyanlığı kabul etti. Güneyde Bantu dilli çiftçiler demir ve tarımı kıtaya yaydı.</p>' },
      { ad: 'İnsanlığın beşiği', ikon: '🦴', html: '<p>Doğu Afrika insanlığın doğduğu yerdir: Etiyopya\'da "Lucy" (3,2 milyon yıl), Tanzanya\'da Laetoli ayak izleri (3,7 milyon yıl), Etiyopya\'da en eski <i>Homo sapiens</i> fosillerinden biri (Omo, ~230.000 yıl).</p>' }
    ]
  });

  // ================= 2. LALİBELA, SVAHİLİ ŞEHİRLERİ VE BÜYÜK ZİMBABVE =================
  window.PLACES.push({
    id: 'doguafrika-ortacag', sira: 2, kisa: 'Lalibela, Kilva ve Büyük Zimbabve', aralikAd: 'MS 640 – 1500',
    baslik: 'Hristiyan Nubya · Svahili şehirleri · Lalibela kiliseleri · Mapungubwe · Büyük Zimbabve',
    ulkeAlt: 'Hristiyan Nubya ve Etiyopya\'dan Svahili kıyısının liman şehirlerine ve Büyük Zimbabve\'ye (MS 640 – 1500)',
    from: -640, to: -1500, start: -1300,
    not: 'Tarihler kesin değildir; bazıları arkeolojiye ve sözlü geleneğe dayanır.', baskent: 'Dongola, Lalibela (Roha), Kilva, Büyük Zimbabve',
    sahne: { kizak: false, araba: false, deve: [-640, -1500], giyim: 'cubbe' },
    dynasties: [{ from: -640, to: -1137, ad: 'Makuria ve Aksum\'un çöküşü', renk: '#5a4a6a' }, { from: -1137, to: -1270, ad: 'Zagwe ve Svahili şehirleri', renk: '#8a5a2a' }, { from: -1270, to: -1500, ad: 'Süleymanî Etiyopya ve Büyük Zimbabve', renk: '#2a6a4a' }],
    rulers: [
      { from: -640, to: -900, ad: 'Makuria kralları ve son Aksum kralları', kisa: 'Makuria', kim: 'Hristiyan Nubya Arap ordularını durdurdu; Bakt antlaşması (652) 600 yıl sürdü.' },
      { from: -900, to: -1137, ad: 'Etiyopya\'nın karanlık çağı', kisa: '?', kim: 'Aksum çöktü; söylencede Kraliçe Gudit Aksum\'u yaktı. Kıyıda Svahili şehirleri büyüyor.' },
      { from: -1137, to: -1181, ad: 'Zagwe kralları', kisa: 'Zagwe', kim: 'Agaw kökenli Zagwe hanedanı Etiyopya\'yı yönetti.' },
      { from: -1181, to: -1221, ad: 'Kral Lalibela', kisa: 'Lalibela', kim: 'Kayaya oyulmuş 11 kilise yaptırdı: "Yeni Kudüs".' },
      { from: -1221, to: -1270, ad: 'Son Zagwe kralları', kisa: 'Zagwe', kim: 'Güneyde Mapungubwe krallığı altın ve fildişi ticaretiyle zengin.' },
      { from: -1270, to: -1314, ad: 'Yekuno Amlak ve Süleymanî hanedanı', kisa: 'Yekuno Amlak', kim: 'Kral Süleyman ile Saba Melikesi\'nin soyundan geldiklerini söyleyen hanedan (geleneğe göre).' },
      { from: -1314, to: -1344, ad: 'Amda Seyon', kisa: 'Amda Seyon', kim: 'Etiyopya\'yı genişletti. Kilva Sultanlığı ve Büyük Zimbabve zirvede.' },
      { from: -1344, to: -1434, ad: 'Süleymanî imparatorları', kisa: 'Etiyopya', kim: 'Kebra Nagast (Kralların Şanı) destanı.' },
      { from: -1434, to: -1468, ad: 'Zara Yakob', kisa: 'Zara Yakob', kim: 'Etiyopya kilisesini güçlendirdi; Floransa Konsili\'ne elçi gönderdi.' },
      { from: -1468, to: -1500, ad: 'Etiyopya imparatorları; Büyük Zimbabve\'nin sonu', kisa: 'Etiyopya', kim: 'Büyük Zimbabve terk edildi; Monomotapa ve Torwa krallıkları onun yerini aldı. Vasco da Gama Mombasa ve Malindi\'ye geldi (1498).' }
    ],
    eras: [
      { from: -640, to: -1000, puan: { eko: 3, ordu: 3, istikrar: 3 }, baskent: 'Dongola (Makuria), Aksum',
        gundem: 'Nubya\'nın Hristiyan krallıkları Arap ordularını durdurdu ve Mısır\'la bir antlaşma (Bakt) imzaladı. Aksum zayıfladı. Doğu Afrika kıyısında Afrikalı ve Arap-Pers tüccarların buluştuğu küçük liman kasabaları Svahili kültürünü doğurdu.',
        savas: 'Nubyalı okçular Arapları iki kez geri püskürttü ("göz okçuları").',
        ekonomi: 'Kıyıdan Arabistan ve Hindistan\'a fildişi, altın, mangrov kerestesi.',
        din: 'Nubya ve Etiyopya\'da Hristiyanlık; kıyıda İslam yayılıyor.',
        yasam: 'Svahili dili: Bantu temelli, Arapça kelimelerle zenginleşmiş.',
        bilgi: '"Svahili" Arapça "sahiller" (sevahil) kelimesinden gelir: kıyının insanları.' },
      { from: -1000, to: -1270, puan: { eko: 4, ordu: 3, istikrar: 3 }, baskent: 'Roha (Lalibela), Kilva, Mapungubwe',
        gundem: 'Etiyopya\'da Kral Lalibela kayaya oyulmuş kiliseler yaptırdı. Kıyıda Kilva, Mombasa, Lamu ve Mogadişu taş camili şehirlere dönüştü. Güneyde Mapungubwe altın gergedan heykelleriyle ilk büyük krallık oldu.',
        savas: 'Şehir devletleri arasında rekabet; kara iç kesimlerde sığır akınları.',
        ekonomi: 'Zimbabve yaylasının altını Kilva üzerinden Hint Okyanusu\'na; Çin porseleni ve Hint boncukları içeri.',
        din: 'Lalibela Kudüs\'e hac yerine "Yeni Kudüs" olarak düşünüldü.',
        yasam: 'Mercan taşından evler, sofralarda Çin porseleni.',
        bilgi: 'Lalibela kiliseleri yukarıdan aşağıya, tek parça kayanın içinden oyuldu; çatıları yerle aynı hizada.' },
      { from: -1270, to: -1500, puan: { eko: 5, ordu: 3, istikrar: 4 }, baskent: 'Etiyopya\'da gezici saray; Kilva; Büyük Zimbabve',
        gundem: 'Büyük Zimbabve 18.000 kişiyle Sahra altının en büyük taş şehirlerinden. Kilva Sultanlığı altın ticaretiyle kendi sikkesini bastı; İbn Battuta onu "dünyanın en güzel şehirlerinden" saydı. Zheng He\'nin Çin filosu Malindi\'ye geldi ve Çin\'e zürafa götürdü.',
        savas: 'Etiyopya ile Adal sultanlığı arasında savaşlar.',
        ekonomi: 'Altın, fildişi, köle, demir; Kilva\'nın bakır sikkeleri Avustralya\'da bile bulundu.',
        din: 'Etiyopya kilisesi; kıyıda İslam; iç kesimde ata ruhları.',
        yasam: 'Büyük Zimbabve\'nin harçsız taş duvarları ve konik kulesi.',
        bilgi: 'Büyük Zimbabve\'nin duvarlarında hiç harç yok; taşlar yalnızca üst üste dizilerek 11 metreye kadar yükseltildi.' }
    ],
    nufus: [[-640, 8], [-1000, 11], [-1300, 16], [-1500, 20]],
    nufusNot: 'Doğu ve Güney Afrika için kaba tahminler.',
    dunyaOzet: { eko: 'Hint Okyanusu ticareti Afrika kıyısını Arabistan, Hindistan ve Çin\'e bağladı.', askeri: 'Okçular, mızraklı piyade; Etiyopya süvarisi.' },
    events: [
      { y: -652, t: 'Bakt antlaşması', k: 'm' }, { y: -800, t: 'Svahili kasabaları', k: 'm' }, { y: -960, t: 'Kraliçe Gudit (söylence)', k: 'm' }, { y: -1100, t: 'Kilva yükseliyor', k: 'm' },
      { y: -1220, t: 'Mapungubwe\'nin altın gergedanı', k: 'm' }, { y: -1200, t: 'Lalibela kiliseleri', k: 'm' }, { y: -1270, t: 'Süleymanî hanedanı', k: 'm' }, { y: -1300, t: 'Büyük Zimbabve zirvede', k: 'm' },
      { y: -1331, t: 'İbn Battuta Kilva\'da', k: 'm' }, { y: -1418, t: 'Zheng He Malindi\'de', k: 'm' }, { y: -1450, t: 'Büyük Zimbabve terk ediliyor', k: 'm' }, { y: -1498, t: 'Vasco da Gama Malindi\'de', k: 'm' },
      { y: -1099, t: 'Haçlılar Kudüs\'te', k: 'w' }, { y: -1324, t: 'Mansa Musa\'nın haccı', k: 'w' }, { y: -1453, t: 'İstanbul\'un fethi', k: 'w' }
    ],
    world: [{ from: -969, to: -1500, yer: 'Mısır', t: 'Fatımîler, Eyyubîler, Memlükler.' }, { from: -1235, to: -1464, yer: 'Batı Afrika', t: 'Mali İmparatorluğu.' }, { from: -1368, to: -1500, yer: 'Çin', t: 'Ming; Zheng He\'nin seferleri.' }],
    sites: [{ ad: 'DONGOLA', wx: 900 }, { ad: 'LALİBELA', wx: 2700 }, { ad: 'ZEYLA', wx: 3200 }, { ad: 'MOGADİŞU', wx: 3600 }, { ad: 'MALİNDİ', wx: 4100 }, { ad: 'MOMBASA', wx: 4300 }, { ad: 'ZANZİBAR', wx: 4700 }, { ad: 'KİLVA', wx: 5100 }, { ad: 'SOFALA', wx: 5700 }, { ad: 'BÜYÜK ZİMBABVE', wx: 6200 }, { ad: 'MAPUNGUBWE', wx: 6600 }],
    monuments: [
      { id: 'lalibela', ad: 'Lalibela: Aziz Yorgi Kilisesi', yer: 'Amhara, Etiyopya', wx: 2700, type: 'church', b: 30, h: 15, renk: '#b88a62', start: -1190, end: -1221, vol: 2e4 },
      { id: 'kilva', ad: 'Kilva Büyük Camii ve Husuni Kubva', yer: 'Kilva Kisiwani, Tanzanya', wx: 5100, type: 'mosque', minare: 0, b: 110, h: 18, kubbe: '#d8cdb4', renk: '#d8cdb4', start: -1300, end: -1320, vol: 3e4, ruin: -1550 },
      { id: 'buyukzimbabve', ad: 'Büyük Zimbabve: Büyük Çevre Duvarı', yer: 'Masvingo, Zimbabve', wx: 6200, type: 'citadel', renk: '#a89a80', b: 220, h: 14, start: -1250, end: -1350, vol: 8e4, ruin: -1450 }
    ],
    hizli: [{ ad: 'Bakt', y: -652 }, { ad: 'Svahili', y: -900 }, { ad: 'Lalibela', y: -1200 }, { ad: 'Mapungubwe', y: -1220 }, { ad: 'Büyük Zimbabve', y: -1300 }, { ad: 'Kilva', y: -1331 }, { ad: 'Zheng He', y: -1418 }, { ad: 'Vasco da Gama', y: -1498 }],
    bilgi: {
      lalibela: { ikon: '✝️', yaptiran: 'Kral Lalibela', donem: '12-13. yy', mimar: '—', sure: '—', neden: 'Etiyopya\'da bir "Yeni Kudüs" kurmak.', onem: 'Kayaya oyulmuş 11 kilise; hâlâ ibadet ediliyor.', teknik: [['Aziz Yorgi', '~12 × 12 × 12 m, haç planlı']], nasil: 'Önce kayaya derin bir hendek kazıldı, sonra ortada kalan blok içten oyuldu.', bugun: 'UNESCO Dünya Mirası (1978).', ilginc: 'Söylenceye göre melekler gece çalışıp insanların gündüz yaptığının iki katını yapıyordu.' },
      kilva: { ikon: '🕌', yaptiran: 'Kilva sultanları', donem: '11-14. yy', mimar: '—', sure: '—', neden: 'Kilva\'nın cuma camisi ve sultan sarayı.', onem: 'Svahili kıyısının en büyük taş camisi.', teknik: [['Kubbe', '~16 kubbe ve tonoz']], nasil: 'Mercan taşı ve kireç harcı.', bugun: 'UNESCO Dünya Mirası (1981).', ilginc: 'İbn Battuta 1331\'de Kilva\'yı "dünyanın en güzel ve en iyi yapılmış şehirlerinden biri" diye anlattı.' },
      buyukzimbabve: { ikon: '🏰', yaptiran: 'Şona halkının ataları', donem: '~1100-1450', mimar: '—', sure: '~300 yıl', neden: 'Kralın sarayı ve törensel merkez.', onem: 'Zimbabve ülkesine adını veren şehir ("taş evler").', teknik: [['Büyük Çevre duvarı', '~250 m, 11 m yükseklik'], ['Nüfus', '~18.000']], nasil: 'Granit bloklar harçsız dizildi; konik kule.', bugun: 'UNESCO Dünya Mirası (1986); Zimbabve bayrağındaki kuş burada bulundu.', ilginc: 'Sömürge yönetimi şehrin Afrikalılarca yapıldığını uzun süre kabul etmek istemedi; arkeologlar bunu 1905\'te kanıtladı.' }
    },
    ulke: [
      { ad: 'Genel bakış', ikon: '🧭', html: '<p>Bu çağda Etiyopya Hristiyan bir imparatorluk olarak varlığını sürdürdü ve <b>Lalibela</b> kiliselerini yarattı. Hint Okyanusu kıyısında <b>Svahili</b> şehirleri (Kilva, Mombasa, Zanzibar) Afrika, Arap ve Hint kültürlerini birleştirdi. İç kesimde <b>Büyük Zimbabve</b> taş duvarlı bir altın krallığının merkeziydi.</p>' }
    ]
  });

  // ================= 3. PORTEKİZLİLERDEN MANDELA'YA =================
  window.PLACES.push({
    id: 'doguafrika-modern', sira: 3, modern: true, kisa: 'Zulular, sömürge ve bağımsızlık', aralikAd: 'MS 1500 – bugün',
    baslik: 'Portekiz kaleleri · Gondar · Zanzibar · Şaka Zulu · Adwa · apartheid · Mandela',
    ulkeAlt: 'Portekizlilerden Umman Zanzibar\'ına, Zulu krallığından sömürgeciliğe, bağımsızlıktan bugüne (MS 1500 – bugün)',
    from: -1500, to: -2026, start: -1896,
    not: 'Tarihler kesindir. Hükümdar şeridi bölgenin öne çıkan önderlerini sırayla izler.', baskent: 'Gondar, Zanzibar, Addis Ababa; bugün Addis Ababa, Nairobi, Dodoma, Pretoria ve diğerleri',
    sahne: { kizak: false, deve: [-1500, -1900], buhar: -1890, oto: -1925, ucak: -1940, turist: -1980, giyim: [[-1500, 'cubbe'], [-1940, 'modern']] },
    dynasties: [{ from: -1500, to: -1820, ad: 'Portekizliler, Umman ve Gondar', renk: '#7a5a2a' }, { from: -1820, to: -1890, ad: 'Zulular, Zanzibar ve Etiyopya\'nın yeniden doğuşu', renk: '#8a3a2a' }, { from: -1890, to: -1960, ad: 'Sömürge çağı', renk: '#4a4a7a' }, { from: -1960, to: -2026, ad: 'Bağımsız devletler', renk: '#2a8a4a' }],
    rulers: [
      { from: -1500, to: -1543, ad: 'Portekiz kaleleri; Adal\'ın İmam Ahmed Gragn\'ı', kisa: 'Gragn', kim: 'Portekizliler Kilva ve Mombasa\'yı yağmaladı. Adal sultanlığından İmam Ahmed Etiyopya\'yı neredeyse tamamen aldı; Portekiz yardımıyla durduruldu.' },
      { from: -1543, to: -1632, ad: 'Etiyopya imparatorları; Monomotapa', kisa: 'Monomotapa', kim: 'Zimbabve\'de Monomotapa krallığı Portekizlilerle altın ticareti yaptı.' },
      { from: -1632, to: -1667, ad: 'Fasiledes (Gondar)', kisa: 'Fasiledes', kim: 'Gondar\'ı başkent yaptı; şatolar inşa ettirdi.' },
      { from: -1667, to: -1769, ad: 'Gondar imparatorları; Umman Zanzibar\'ı alıyor', kisa: 'Gondar', kim: 'Ummanlılar Portekizlileri Mombasa\'dan kovdu (1698). Hollandalılar Kap\'ta koloni kurdu (1652).' },
      { from: -1769, to: -1816, ad: 'Prensler Çağı (Zemene Mesafint)', kisa: '?', kim: 'Etiyopya\'da imparatorlar güçsüz, bölge beyleri güçlü.' },
      { from: -1816, to: -1828, ad: 'Şaka Zulu', kisa: 'Şaka', kim: 'Zulu krallığını güçlü bir askeri devlete çevirdi; kısa mızrak ve "boğa boynuzu" düzeni.' },
      { from: -1828, to: -1855, ad: 'Zanzibar sultanları; Boerlerin Büyük Göçü', kisa: 'Zanzibar', kim: 'Umman sultanı başkentini Zanzibar\'a taşıdı (1840): karanfil ve köle ticareti. Boerler iç bölgelere göçtü (1835\'ten).' },
      { from: -1855, to: -1868, ad: 'II. Tewodros', kisa: 'Tewodros', kim: 'Etiyopya\'yı yeniden birleştirdi; İngilizlerle savaşta Mekdela\'da intihar etti.' },
      { from: -1868, to: -1889, ad: 'IV. Yohannes; Kimberley elmasları', kisa: 'Yohannes', kim: 'Güney Afrika\'da elmas (1867) ve altın (1886) bulundu. Zulular İsandlwana\'da İngilizleri yendi (1879).' },
      { from: -1889, to: -1913, ad: 'II. Menelik', kisa: 'Menelik', kim: 'Adwa\'da İtalya\'yı yenerek (1896) Etiyopya\'nın bağımsızlığını korudu; Addis Ababa\'yı kurdu.' },
      { from: -1913, to: -1930, ad: 'Sömürge yönetimleri; Etiyopya\'da Zewditu', kisa: 'Sömürgeler', kim: 'Kenya, Uganda İngiliz; Tanganyika Alman, sonra İngiliz; Mozambik Portekiz. Güney Afrika Birliği (1910).' },
      { from: -1930, to: -1974, ad: 'Haile Selasie', kisa: 'Haile Selasie', kim: 'İtalyan işgaline karşı Milletler Cemiyeti\'nde konuştu (1936). Afrika Birliği Örgütü Addis Ababa\'da kuruldu (1963).' },
      { from: -1974, to: -1994, ad: 'Derg ve apartheid\'in son yılları', kisa: 'Apartheid', kim: 'Etiyopya\'da askeri cunta ve kıtlık; Güney Afrika\'da ırk ayrımına karşı mücadele.' },
      { from: -1994, to: -1999, ad: 'Nelson Mandela', kisa: 'Mandela', kim: '27 yıl hapis yattıktan sonra Güney Afrika\'nın ilk siyahi cumhurbaşkanı oldu.' },
      { from: -1999, to: -2026, ad: 'Bugünkü devletler', kisa: 'Bugün', kim: 'Etiyopya ve Kenya hızlı büyüdü; Güney Sudan 2011\'de bağımsız oldu.' }
    ],
    eras: [
      { from: -1500, to: -1820, puan: { eko: 3, ordu: 3, istikrar: 2 }, baskent: 'Gondar, Mombasa, Zanzibar, Kap',
        gundem: 'Portekizliler Svahili şehirlerini yağmalayıp kaleler kurdu (Mombasa\'daki İsa Kalesi). Etiyopya Adal savaşlarından sonra Gondar\'da şatolar yaptı. Ummanlılar Portekizlileri kovdu. En güneyde Hollandalılar Kap kolonisini kurdu (1652).',
        savas: 'Portekiz topları; Etiyopya-Adal savaşı (1529-1543); Osmanlı Habeş eyaleti (Kızıldeniz kıyısı).',
        ekonomi: 'Altın, fildişi; Kap\'ta şarap ve buğday çiftlikleri.',
        din: 'Etiyopya kilisesi; Svahili İslamı; Cizvitler Etiyopya\'da (1557-1632).',
        yasam: 'Gondar\'da Avrupa, Hint ve Etiyopya mimarisinin karışımı şatolar.',
        bilgi: 'Kahve Etiyopya\'nın Kafa bölgesinden çıktı; söylenceye göre keçi çobanı Kaldi keçilerinin kahve meyvesi yiyince zıpladığını fark etti.' },
      { from: -1820, to: -1890, puan: { eko: 3, ordu: 4, istikrar: 2 }, baskent: 'Zanzibar, Ulundi (Zulu), Mekdela, Pretoria',
        gundem: 'Şaka Zulu güneyde güçlü bir krallık kurdu; Mfecane döneminde halklar yer değiştirdi. Zanzibar Doğu Afrika köle ve karanfil ticaretinin merkezi oldu. Livingstone ve Stanley iç kesimleri gezdi. Güney Afrika\'da elmas ve altın bulundu.',
        savas: 'İsandlwana (1879): Zulular modern bir İngiliz ordusunu yendi. Boer Savaşları.',
        ekonomi: 'Zanzibar dünyanın karanfilinin çoğunu üretti; köle ticareti 1873\'te Zanzibar\'da yasaklandı.',
        din: 'Misyonerler; Etiyopya\'da imparatorların yeniden güçlenmesi.',
        yasam: 'Johannesburg 1886\'da altın madenci kampı olarak doğdu.',
        bilgi: 'Stanley\'nin Livingstone\'u bulduğunda söylediği "Dr. Livingstone, sanırım?" sözü tarihin en ünlü selamlarından; ama Stanley\'nin gerçekten bunu söyleyip söylemediği tartışmalı.' },
      { from: -1890, to: -1960, puan: { eko: 3, ordu: 2, istikrar: 2 }, baskent: 'Nairobi, Dar es Salaam, Lourenço Marques, Pretoria, Addis Ababa',
        gundem: 'Avrupa ülkeleri bölgeyi paylaştı; yalnızca Etiyopya Adwa zaferiyle bağımsız kaldı (1936-1941 İtalyan işgali hariç). Kenya ve Uganda\'da demiryolu, beyaz yerleşimciler ve plantasyonlar. Güney Afrika\'da 1948\'de apartheid resmî politika oldu.',
        savas: 'Maji Maji isyanı (1905-07); Mau Mau ayaklanması (1952-60); İtalya\'nın Etiyopya işgali.',
        ekonomi: 'Kahve, çay, sisal, bakır, altın; Güney Afrika Afrika\'nın sanayi merkezi.',
        din: 'Hristiyanlık hızla yayıldı; Doğu Afrika kıyısında İslam.',
        yasam: 'Ayrı okullar, ayrı mahalleler; Afrikalılar için geçiş belgesi zorunluluğu.',
        bilgi: 'Haile Selasie 1936\'da Milletler Cemiyeti\'nde "Bugün biz, yarın siz" diyerek dünyayı faşizme karşı uyardı.' },
      { from: -1960, to: -2026, puan: { eko: 4, ordu: 3, istikrar: 3 }, baskent: 'Addis Ababa, Nairobi, Dodoma, Kampala, Maputo, Harare, Pretoria',
        gundem: 'Tanzanya, Kenya, Uganda 1960\'larda; Mozambik 1975\'te; Zimbabve 1980\'de bağımsız oldu. Güney Afrika\'da Mandela\'nın serbest bırakılması (1990) ve 1994 seçimleri apartheid\'i bitirdi. Ruanda soykırımı (1994). Bugün Etiyopya, Kenya ve Ruanda hızla büyüyen ekonomiler.',
        savas: 'Etiyopya-Eritre savaşı, Somali iç savaşı, Sudan ve Güney Sudan çatışmaları.',
        ekonomi: 'Kenya\'da M-Pesa mobil para; Etiyopya\'da Büyük Rönesans Barajı; Güney Afrika madenleri.',
        din: 'Hristiyanlık ve İslam; Etiyopya Ortodoks Kilisesi.',
        yasam: 'Kenyalı ve Etiyopyalı koşucular dünya maratonlarına hâkim; Serengeti göçü ve safari turizmi.',
        bilgi: 'Kenya\'da mobil telefonla para gönderme (M-Pesa, 2007) bankacılığa erişimi milyonlarca kişiye açtı; dünyada bir ilk sayılır.' }
    ],
    nufus: [[-1500, 20], [-1800, 27], [-1900, 45], [-1950, 90], [-1980, 190], [-2000, 300], [-2026, 620]],
    nufusNot: 'Doğu ve Güney Afrika toplamı (Etiyopya ~130 milyon, Tanzanya ~70, Güney Afrika ~64, Kenya ~57); eski rakamlar kaba tahmindir.',
    dunyaOzet: { eko: 'Hint Okyanusu ticareti Avrupa sömürgeciliğine dönüştü; 20. yüzyılda maden ve tarım ihracatı.', askeri: 'Portekiz topları, Zulu mızrakları, makineli tüfekler; bağımsızlık savaşları.' },
    events: [
      { y: -1505, t: 'Portekizliler Kilva ve Mombasa\'yı yağmaladı', k: 'm' }, { y: -1529, t: 'Etiyopya-Adal savaşı', k: 'm' }, { y: -1593, t: 'İsa Kalesi (Mombasa)', k: 'm' }, { y: -1636, t: 'Gondar kuruldu', k: 'm' },
      { y: -1652, t: 'Kap kolonisi', k: 'm' }, { y: -1698, t: 'Ummanlılar Mombasa\'yı aldı', k: 'm' }, { y: -1818, t: 'Şaka Zulu krallığı', k: 'm' }, { y: -1840, t: 'Başkent Zanzibar', k: 'm' },
      { y: -1871, t: 'Stanley Livingstone\'u buldu', k: 'm' }, { y: -1879, t: 'İsandlwana', k: 'm' }, { y: -1886, t: 'Witwatersrand altını', k: 'm' }, { y: -1896, t: 'Adwa', k: 'm' },
      { y: -1948, t: 'Apartheid', k: 'm' }, { y: -1963, t: 'Afrika Birliği Örgütü', k: 'm' }, { y: -1990, t: 'Mandela serbest', k: 'm' }, { y: -1994, t: 'Güney Afrika\'da ilk özgür seçim; Ruanda soykırımı', k: 'm' },
      { y: -1789, t: 'Fransız İhtilali', k: 'w' }, { y: -1884, t: 'Berlin Konferansı', k: 'w' }, { y: -1945, t: 'İkinci Dünya Savaşı bitti', k: 'w' }
    ],
    world: [{ from: -1517, to: -1885, yer: 'Osmanlı', t: 'Kızıldeniz kıyısında Habeş eyaleti.' }, { from: -1830, to: -1960, yer: 'Avrupa', t: 'Sömürge imparatorlukları.' }, { from: -1945, to: -1991, yer: 'Dünya', t: 'Soğuk Savaş.' }],
    sites: [{ ad: 'HARTUM', wx: 1300 }, { ad: 'GONDAR', wx: 2200 }, { ad: 'ADWA', wx: 2450 }, { ad: 'ADDİS ABABA', wx: 3000 }, { ad: 'NAİROBİ', wx: 3800 }, { ad: 'MOMBASA', wx: 4300 }, { ad: 'ZANZİBAR', wx: 4700 }, { ad: 'DAR ES SELAM', wx: 4900 }, { ad: 'HARARE', wx: 6100 }, { ad: 'JOHANNESBURG', wx: 7000 }, { ad: 'DURBAN', wx: 7300 }, { ad: 'KAP (CAPE TOWN)', wx: 7900 }],
    monuments: [
      { id: 'isakalesi', ad: 'İsa Kalesi (Fort Jesus)', yer: 'Mombasa, Kenya', wx: 4300, type: 'citadel', b: 160, h: 22, start: -1593, end: -1596, vol: 5e4 },
      { id: 'gondar', ad: 'Gondar: Fasil Gebbi şatoları', yer: 'Gondar, Etiyopya', wx: 2200, type: 'citadel', tepe: false, b: 140, h: 30, start: -1636, end: -1640, vol: 5e4 },
      { id: 'nairobi', ad: 'Nairobi', yer: 'Kenya', wx: 3800, type: 'modcity', b: 380, h: 90, n: 38, start: -1965, end: -2020, vol: 7e4 },
      { id: 'johannesburg', ad: 'Johannesburg', yer: 'Güney Afrika', wx: 7000, type: 'modcity', b: 400, h: 110, n: 42, start: -1930, end: -2010, vol: 8e4 }
    ],
    hizli: [{ ad: 'Portekizliler', y: -1505 }, { ad: 'Gragn', y: -1535 }, { ad: 'Gondar', y: -1640 }, { ad: 'Kap', y: -1652 }, { ad: 'Şaka Zulu', y: -1820 }, { ad: 'Zanzibar', y: -1850 }, { ad: 'Adwa', y: -1896 }, { ad: 'Haile Selasie', y: -1936 }, { ad: 'Bağımsızlıklar', y: -1963 }, { ad: 'Mandela', y: -1994 }],
    bilgi: {
      isakalesi: { ikon: '🏰', yaptiran: 'Portekizliler', donem: '1593-1596', mimar: 'Giovanni Battista Cairati', sure: '~3 yıl', neden: 'Hint Okyanusu ticaret yolunu korumak.', onem: '16. yüzyıl Portekiz askeri mimarisinin en iyi korunmuş örneklerinden.', teknik: [['Plan', 'İnsan bedeni biçiminde (Rönesans ideali)']], nasil: 'Mercan kayası üzerine kalın taş duvarlar.', bugun: 'UNESCO Dünya Mirası (2011); müze.', ilginc: 'Ummanlılar kaleyi 1696-1698 arasında 33 ay kuşattı; sonunda içeride yalnızca birkaç kişi kalmıştı.' },
      gondar: { ikon: '🏯', yaptiran: 'İmparator Fasiledes ve halefleri', donem: '1636\'dan', mimar: '—', sure: '—', neden: 'Etiyopya\'nın kalıcı başkenti.', onem: '"Afrika\'nın Camelot\'u".', teknik: [['Sur', '~900 m'], ['Şato', '6']], nasil: 'Etiyopya, Hint, Arap ve Portekiz-Barok etkileri.', bugun: 'UNESCO Dünya Mirası (1979).', ilginc: 'Fasiledes\'in hamamı her yıl Timket bayramında suyla doldurulur ve binlerce kişi vaftiz törenine katılır.' },
      nairobi: { ikon: '🏙️', yaptiran: '—', donem: '1899 (demiryolu deposu)', mimar: '—', sure: '—', neden: 'Mombasa-Uganda demiryolunun ara istasyonu.', onem: 'Doğu Afrika\'nın en büyük şehri ve teknoloji merkezi ("Silikon Savana").', teknik: [['Nüfus', '~5 milyon']], nasil: 'Bataklık bir alanda kuruldu; adı Maasai dilinde "soğuk su".', bugun: 'Kenya\'nın başkenti; BM\'nin Afrika merkezi.', ilginc: 'Şehrin hemen yanında, gökdelenlerin göründüğü bir milli park var: aslanlar ve zürafalar şehir silüetinin önünde gezer.' },
      johannesburg: { ikon: '⛏️', yaptiran: '—', donem: '1886', mimar: '—', sure: '—', neden: 'Witwatersrand altın yatakları.', onem: 'Güney Afrika\'nın ekonomik merkezi; dünyanın en büyük altın yatağının şehri.', teknik: [['Altın', 'Dünyada çıkarılan altının ~%40\'ı Witwatersrand\'dan']], nasil: 'Madenci kampından 10 yılda 100.000 kişilik şehre.', bugun: '~6 milyon (metropol ~10 milyon).', ilginc: 'Mandela ve Desmond Tutu aynı sokakta (Vilakazi Caddesi, Soweto) yaşadı: iki Nobel barış ödüllünün evi aynı caddede.' }
    },
    ulke: [
      { ad: 'Genel bakış', ikon: '🧭', html: '<p>1500\'den sonra Portekizliler, Ummanlılar ve Hollandalılar kıyıya geldi. 19. yüzyılda <b>Şaka Zulu</b> güneyde güçlü bir krallık kurdu; ardından Avrupa ülkeleri bölgeyi paylaştı. <b>Etiyopya</b> Adwa\'da İtalya\'yı yenerek bağımsız kaldı. 1960\'lardan sonra ülkeler bağımsız oldu; Güney Afrika\'da <b>apartheid</b> 1994\'te sona erdi.</p>' },
      { ad: 'Bugünkü ülkeler', ikon: '🗺️', html: '<ul><li>Boynuz: Etiyopya, Eritre, Cibuti, Somali, Sudan, Güney Sudan</li><li>Doğu: Kenya, Uganda, Tanzanya, Ruanda, Burundi</li><li>Güney: Mozambik, Zimbabve, Zambiya, Malavi, Botsvana, Namibya, Güney Afrika, Lesotho, Esvatini, Madagaskar</li></ul>' }
    ]
  });

  window.BOLGE_TASI('doguafrika');

  window.MISIR = {
    coords: { kerma: [19.6, 30.41], meroe: [16.9386, 33.7493], aksum: [14.1311, 38.7197], lalibela: [12.0317, 39.0414], kilva: [-8.9575, 39.5122], buyukzimbabve: [-20.2674, 30.9338], isakalesi: [-4.0629, 39.6797], gondar: [12.6075, 37.4692], nairobi: [-1.2921, 36.8219], johannesburg: [-26.2041, 28.0473] },
    wiki: { kerma: 'Deffufa', meroe: 'Nubian pyramids', aksum: 'Obelisk of Axum', lalibela: 'Church of Saint George, Lalibela', kilva: 'Kilwa Kisiwani', buyukzimbabve: 'Great Zimbabwe', isakalesi: 'Fort Jesus', gondar: 'Fasil Ghebbi', nairobi: 'Nairobi', johannesburg: 'Johannesburg' },
    bilgi: {}, alt: {},
    kureAdlari: [[-8, 52, 'HİNT OKYANUSU', 'deniz', 2.2], [9, 40, 'ETİYOPYA YAYLASI', 'bolge', 3.2], [17, 33, 'NUBYA', 'bolge', 3.4], [-3, 37, 'DOĞU AFRİKA', 'misir', 2.6], [-24, 26, 'GÜNEY AFRİKA', 'bolge', 2.8],
      [-1, 33, 'Victoria Gölü', 'kucuk', 4.5], [-3.07, 37.35, 'Kilimanjaro', 'kucuk', 5.5], [-17.9, 25.85, 'Victoria Şelalesi', 'kucuk', 6], [-16, 30, 'Zambezi', 'nehir', 5], [-19, 46.5, 'MADAGASKAR', 'bolge', 3.6]],
    sehirler: [
      { ad: 'Kerma', ll: [19.6, 30.41], from: 2500, to: 1500, b: [[2500, 1500]], not: 'Kerma krallığının başkenti.' },
      { ad: 'Napata', ll: [18.53, 31.83], from: 1450, to: 300, b: [[1070, 300]], not: 'Kuş başkenti; Cebel Barkal.' },
      { ad: 'Meroe', ll: [16.94, 33.73], from: 800, to: -350, b: [[300, -350]], not: 'Demir şehri; piramitler.' },
      { ad: 'Aksum', ll: [14.1211, 38.7234], from: 400, to: -2026, b: [[100, -940]], not: 'Aksum İmparatorluğu\'nun başkenti.' },
      { ad: 'Lalibela', ll: [12.0317, 39.0414], from: -1100, to: -2026, b: [[-1137, -1270]], not: 'Zagwe başkenti; kaya kiliseleri.' },
      { ad: 'Kilva', ll: [-8.9575, 39.5122], from: -900, to: -1800, not: 'Svahili kıyısının altın limanı.' },
      { ad: 'Mombasa', ll: [-4.0435, 39.6682], from: -900, to: -2026, not: 'Kenya\'nın büyük limanı.' },
      { ad: 'Zanzibar', ll: [-6.1659, 39.2026], from: -1000, to: -2026, b: [[-1840, -1964]], not: 'Umman-Zanzibar sultanlığının başkenti.' },
      { ad: 'Büyük Zimbabve', ll: [-20.2674, 30.9338], from: -1100, to: -1450, b: [[-1220, -1450]], not: 'Taş şehir.' },
      { ad: 'Gondar', ll: [12.6, 37.4667], from: -1636, to: -2026, b: [[-1636, -1855]], not: 'Etiyopya\'nın 17-19. yy başkenti.' },
      { ad: 'Addis Ababa', ll: [9.03, 38.74], from: -1886, to: -2026, b: [[-1886, -2026]], not: 'Etiyopya\'nın başkenti; Afrika Birliği merkezi.' },
      { ad: 'Nairobi', ll: [-1.2921, 36.8219], from: -1899, to: -2026, b: [[-1907, -2026]], not: 'Kenya\'nın başkenti.' },
      { ad: 'Kap (Cape Town)', ll: [-33.9249, 18.4241], from: -1652, to: -2026, b: [[-1652, -1910]], not: 'Kap kolonisinin merkezi.' },
      { ad: 'Johannesburg', ll: [-26.2041, 28.0473], from: -1886, to: -2026, not: 'Altın şehri.' }
    ],
    nil: { ikon: '🌊', title: 'Nil\'in kaynakları, göller ve Zambezi', sub: 'Büyük Rift Vadisi', foto: 'Lake Victoria', tabs: [{ ad: '🌊 Sular', html: '<ul class="hap"><li><b>Mavi Nil</b> Etiyopya\'daki Tana Gölü\'nden, <b>Beyaz Nil</b> Victoria Gölü\'nden çıkar; Hartum\'da birleşirler. Mısır\'ın taşkın suyunun ~%85\'i Etiyopya\'dan gelir.</li><li><b>Büyük Rift Vadisi</b> kıtayı yaran dev bir yarık: Tanganyika (dünyanın ikinci en derin gölü) ve Malavi gölleri burada.</li><li><b>Zambezi</b> (~2.570 km) üzerinde Victoria Şelalesi: yerel adı "Gürleyen duman".</li><li>Kilimanjaro (5.895 m) Afrika\'nın en yüksek dağı.</li></ul>' }] },
    simgeler: [
      { id: 'da-lucy', ad: 'Lucy ve insanlığın beşiği', ikon: '🦴', wiki: 'Lucy (Australopithecus)', git: { place: 'doguafrika-antik', y: 2500 }, ozet: '3,2 milyon yıllık atamız.', hap: ['Etiyopya, 1974.', 'Adı bir Beatles şarkısından.'] },
      { id: 'da-meroe', ad: 'Meroe piramitleri', ikon: '🔺', wiki: 'Nubian pyramids', git: { place: 'doguafrika-antik', y: 280, id: 'meroe' }, ozet: 'Sudan\'ın dik piramitleri.', hap: ['~200 piramit.', 'Kandakeler.'] },
      { id: 'da-aksum', ad: 'Aksum dikilitaşları', ikon: '🗿', wiki: 'Obelisk of Axum', git: { place: 'doguafrika-antik', y: -330, id: 'aksum' }, ozet: 'Granit kuleler.', hap: ['MS 4. yy.', '2005\'te Roma\'dan döndü.'] },
      { id: 'da-lalibela', ad: 'Lalibela kiliseleri', ikon: '✝️', wiki: 'Rock-Hewn Churches, Lalibela', git: { place: 'doguafrika-ortacag', y: -1200, id: 'lalibela' }, ozet: 'Kayaya oyulmuş kiliseler.', hap: ['12-13. yy.', '11 kilise.'] },
      { id: 'da-kilva', ad: 'Kilva ve Svahili kıyısı', ikon: '⛵', wiki: 'Kilwa Kisiwani', git: { place: 'doguafrika-ortacag', y: -1331, id: 'kilva' }, ozet: 'Okyanus ticaretinin şehirleri.', hap: ['İbn Battuta 1331.', 'Mercan taşı camiler.'] },
      { id: 'da-zimbabve', ad: 'Büyük Zimbabve', ikon: '🏰', wiki: 'Great Zimbabwe', git: { place: 'doguafrika-ortacag', y: -1300, id: 'buyukzimbabve' }, ozet: 'Harçsız taş şehir.', hap: ['11-15. yy.', '18.000 kişi.'] },
      { id: 'da-adwa', ad: 'Adwa zaferi', ikon: '🛡️', wiki: 'Battle of Adwa', git: { place: 'doguafrika-modern', y: -1896 }, ozet: 'Sömürgeciliğe karşı zafer.', hap: ['1 Mart 1896.', 'Etiyopya bağımsız kaldı.'] },
      { id: 'da-mandela', ad: 'Nelson Mandela', ikon: '✊', wiki: 'Nelson Mandela', git: { place: 'doguafrika-modern', y: -1994 }, ozet: 'Apartheid\'in sonu.', hap: ['27 yıl hapis.', '1994 cumhurbaşkanı.'] }
    ],
    bugun: '<p>Doğu ve Güney Afrika\'da ~620 milyon kişi yaşıyor. En kalabalıkları <b>Etiyopya</b> (~130 milyon), <b>Tanzanya</b>, <b>Güney Afrika</b> ve <b>Kenya</b>.</p><ul class="hap"><li><b>Diller:</b> Svahili, Amharca, Oromo, Somalice, Zulu, Xhosa, Afrikaans, İngilizce, Portekizce.</li><li><b>Doğa:</b> Serengeti göçü, Kilimanjaro, Victoria Şelalesi, Madagaskar\'ın eşsiz canlıları.</li><li><b>Ekonomi:</b> kahve, çay, çiçek, maden, turizm, mobil teknoloji.</li><li><b>Afrika Birliği</b> merkezi Addis Ababa\'da.</li></ul>'
  };
  window.SEHIR_BILGI = {
    'Aksum': { bugun: 'Tigray, Etiyopya', kurulus: 'MÖ ~400', wiki: 'Axum', onem: 'Aksum İmparatorluğu\'nun başkenti; Etiyopya Hristiyanlığının kutsal şehri.', ilginc: 'Etiyopya geleneğine göre Ahit Sandığı Aksum\'daki Siyon Meryem Ana Kilisesi\'nde saklanıyor ve yalnızca bir keşiş onu görebiliyor.' },
    'Zanzibar': { bugun: 'Tanzanya', kurulus: 'Erken Svahili dönemi', wiki: 'Stone Town', onem: 'Karanfil, baharat ve köle ticaretinin merkezi.', ilginc: 'Tarihin en kısa savaşı 1896\'da Zanzibar ile İngiltere arasında yaşandı: ~38-45 dakika sürdü.' },
    'Addis Ababa': { bugun: 'Etiyopya', kurulus: '1886 (Menelik ve Taytu)', wiki: 'Addis Ababa', onem: 'Afrika\'nın diplomatik başkenti.', ilginc: 'Adı Amharca "yeni çiçek" demek; okaliptüs ağaçları şehrin yakacak sorununu çözmek için Avustralya\'dan getirildi.' }
  };
  window.KULTUR = { tanrilar: [], olumler: [], roller: [], mumyalama: '', ic: { eslesme: {}, sahneler: {} }, bilim: { genel: '', cag: {} } };
  window.SINIRLAR = [];

  window.OLAYLAR = [
    { id: 'piyemisir', tur: 'savas', ad: 'Piye\'nin Mısır seferi', y: 744, ll: [26.0, 32.0], onem: 4, wiki: 'Piye', taraflar: ['Kuş (Piye)', 'Mısır\'daki Libyalı beyler'], kazanan: 'Kuş', sonuc: 'Kuşlu firavunlar (25. hanedan) Mısır\'ı yönetmeye başladı.' },
    { id: 'adwa', tur: 'savas', ad: 'Adwa Savaşı', y: -1896, ll: [14.16, 38.89], onem: 5, wiki: 'Battle of Adwa', taraflar: ['Etiyopya (II. Menelik, İmparatoriçe Taytu)', 'İtalya'], kazanan: 'Etiyopya', kuvvetler: '~100.000 Etiyopyalı; ~17.000 İtalyan ve Eritreli asker.', sonuc: 'Etiyopya bağımsızlığını korudu; sömürgeciliğe karşı Afrika\'nın simgesi oldu.' },
    { id: 'isandlwana', tur: 'savas', ad: 'İsandlwana Savaşı', y: -1879, ll: [-28.36, 30.65], onem: 4, wiki: 'Battle of Isandlwana', taraflar: ['Zulu krallığı (Cetshwayo)', 'İngiltere'], kazanan: 'Zulular', sonuc: 'İngiliz ordusunun sömürge savaşlarındaki en ağır yenilgilerinden; ama Zulu krallığı aynı yıl yenildi.' },
    { id: 'zanzibar1896', tur: 'savas', ad: 'İngiliz-Zanzibar Savaşı', y: -1896, ll: [-6.16, 39.19], onem: 2, wiki: 'Anglo-Zanzibar War', taraflar: ['İngiltere', 'Zanzibar (Halid bin Bargaş)'], kazanan: 'İngiltere', sonuc: 'Tarihin bilinen en kısa savaşı: ~38-45 dakika.' },
    { id: 'baktantlasma', tur: 'antlasma', ad: 'Bakt Antlaşması', y: -652, ll: [18.22, 30.75], onem: 3, wiki: 'Baqt', taraflar: ['Makuria (Nubya)', 'Raşid Halifeliği (Mısır)'], sonuc: 'Yaklaşık 600 yıl süren barış ve ticaret düzeni.' },
    { id: 'ilkhicret', tur: 'olay', ad: 'Habeşistan\'a ilk hicret', y: -615, ll: [14.12, 38.72], onem: 4, wiki: 'Migration to Abyssinia', sonuc: 'Mekkeli Müslümanlar Hristiyan Aksum kralına sığındı.' },
    { id: 'apartheidson', tur: 'olay', ad: 'Güney Afrika\'da ilk özgür seçim', y: -1994, ll: [-25.75, 28.19], onem: 5, wiki: '1994 South African general election', sonuc: 'Nelson Mandela cumhurbaşkanı oldu; apartheid sona erdi.' },
    { id: 'lucyolay', tur: 'olay', ad: 'Lucy bulundu', y: -1974, ll: [11.1, 40.58], onem: 4, wiki: 'Lucy (Australopithecus)', sonuc: '3,2 milyon yıllık Australopithecus afarensis iskeleti; insan evriminin simgesi.' },
    { id: 'ruanda', tur: 'olay', ad: 'Ruanda soykırımı', y: -1994, ll: [-1.94, 30.06], onem: 5, wiki: 'Rwandan genocide', sonuc: '~100 günde ~500.000-800.000 Tutsi ve ılımlı Hutu öldürüldü.' },
    { id: 'etiyopyakitlik', tur: 'afet', alt: 'kuraklik', ad: 'Etiyopya kıtlığı', y: -1984, ll: [12.0, 39.5], onem: 4, wiki: '1983–1985 famine in Ethiopia', sonuc: 'Yüz binlerce kişi öldü; Live Aid konserleri düzenlendi.' }
  ];

  window.ULKE_SAYFA = window.ULKE_SAYFA || {};
  window.ULKE_SAYFA.doguafrika = {
    id: 'doguafrika', ad: 'Doğu ve Güney Afrika', ikon: '🦒', kw: ['doğu afrika', 'güney afrika', 'etiyopya', 'habeşistan', 'sudan', 'nubya', 'kuş', 'aksum', 'lalibela', 'kenya', 'tanzanya', 'zanzibar', 'zimbabve', 'zulu', 'mandela', 'apartheid', 'svahili'],
    altBaslik: 'MÖ ~2500 – bugün · Nubya\'dan Aksum\'a, Büyük Zimbabve\'den Mandela\'ya', kapakWiki: 'Great Zimbabwe', kapakAd: 'Büyük Zimbabve', merkez: [-5, 33], merkezZ: 3.2,
    ozet: ['<b>Doğu Afrika</b> insanlığın beşiğidir. Nubya\'da Kerma, Kuş ve Meroe; Etiyopya\'da Aksum krallıkları yükseldi.', 'Hint Okyanusu kıyısında Svahili şehirleri, iç kesimde Büyük Zimbabve gelişti. Sömürgecilikten sonra Etiyopya bağımsızlığını korudu; Güney Afrika 1994\'te apartheid\'i bitirdi.'],
    bilgiKutusu: [['Tarih', 'MÖ ~2500 – bugün (insan atası fosilleri milyonlarca yıl)'], ['Önemli başkentler', 'Kerma, Napata, Meroe, Aksum, Lalibela, Kilva, Büyük Zimbabve, Gondar, Addis Ababa'], ['Diller', 'Svahili, Amharca, Oromo, Somalice, Zulu, Xhosa'], ['Bugün', '~25 ülke, ~620 milyon kişi']],
    donemler: { 'doguafrika-antik': 'Kerma, Kuş, Meroe ve Aksum.', 'doguafrika-ortacag': 'Hristiyan Nubya, Lalibela, Svahili şehirleri, Büyük Zimbabve.', 'doguafrika-modern': 'Portekizliler, Zulular, sömürge, Adwa ve bağımsızlık.' },
    kultur: [{ baslik: 'Diller', ikon: '🗣️', html: '<p>Kuşi ve Sami diller (Amharca, Oromo, Somalice, Tigrinya), Nilo-Sahra dilleri, Bantu dilleri (Svahili, Zulu, Xhosa, Şona) ve Afrikaans.</p>' }, { baslik: 'Din', ikon: '✝️', html: '<p>Etiyopya Ortodoks Kilisesi dünyanın en eski kiliselerinden; kıyıda ve Boynuz\'da İslam; Güney\'de Hristiyanlık ve geleneksel inançlar.</p>' }],
    figurler: [
      { id: 'lalibela', ad: 'Lalibela', tur: 'yapı', wiki: 'Church of Saint George, Lalibela', ll: [12.0317, 39.0414], z: 80, yapim: '12-13. yy', kim: 'Kral Lalibela', durum: 'ayakta', durumYazi: 'Ayakta.', nerede: 'Etiyopya', metin: 'Kayaya oyulmuş kilise.', git: { place: 'doguafrika-ortacag', y: -1200, id: 'lalibela' } },
      { id: 'buyukzimbabve', ad: 'Büyük Zimbabve', tur: 'yapı', wiki: 'Great Zimbabwe', ll: [-20.2674, 30.9338], z: 75, yapim: '11-15. yy', kim: 'Şona ataları', durum: 'harabe', durumYazi: 'Ören yeri.', nerede: 'Zimbabve', metin: 'Harçsız taş şehir.', git: { place: 'doguafrika-ortacag', y: -1300, id: 'buyukzimbabve' } }
    ],
    kisiler: [
      { ad: 'Taharka', wiki: 'Taharqa', yil: 'MÖ 7. yy', ozet: 'Kuşlu firavun.', y: 690 }, { ad: 'Amanirenas', wiki: 'Amanirenas', yil: 'MÖ 1. yy', ozet: 'Roma\'ya karşı kandake.', y: 24 },
      { ad: 'Ezana', wiki: 'Ezana of Axum', yil: '4. yy', ozet: 'Hristiyan Aksum kralı.', y: -330 }, { ad: 'Lalibela', wiki: 'Gebre Mesqel Lalibela', yil: '~1162-1221', ozet: 'Kilise yaptıran kral.', y: -1200 },
      { ad: 'Şaka Zulu', wiki: 'Shaka', yil: '~1787-1828', ozet: 'Zulu krallığının kurucusu.', y: -1820 }, { ad: 'II. Menelik', wiki: 'Menelik II', yil: '1844-1913', ozet: 'Adwa\'nın galibi.', y: -1896 },
      { ad: 'Haile Selasie', wiki: 'Haile Selassie', yil: '1892-1975', ozet: 'Son Etiyopya imparatoru.', y: -1936 }, { ad: 'Nelson Mandela', wiki: 'Nelson Mandela', yil: '1918-2013', ozet: 'Apartheid\'e karşı direniş.', y: -1994 },
      { ad: 'Wangari Maathai', wiki: 'Wangari Maathai', yil: '1940-2011', ozet: 'Nobel ödüllü çevreci.', y: -2004 }
    ],
    biliyorMuydunuz: ['Etiyopya kendi takvimini kullanır: yıl 13 aydır ve Gregoryen takvimin 7-8 yıl gerisindedir.', 'Kahve Etiyopya\'dan dünyaya yayıldı.', 'Madagaskar\'daki canlıların ~%90\'ı dünyanın başka hiçbir yerinde yaşamaz.', 'Kenya\'daki Turkana Gölü çevresi insan atası fosillerinin en zengin yerlerinden.']
  };
})();
