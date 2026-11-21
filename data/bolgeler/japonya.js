// Japonya ve Kore.
// Yıl: MÖ pozitif, MS negatif. Sahne (wx): Kore'den Japonya'ya, batıdan doğuya
//   Pyongyang 900 · Seul 1500 · Gyeongju 2200 · Busan 2600 · Fukuoka 3300 · Hiroşima 4000 · Himeji 4300 · Osaka 4550
//   Nara 4800 · Kyoto 5000 · Kamakura 5800 · Tokyo (Edo) 6200 · Nikko 6600
// Kaynaklar: Totman, "A History of Japan" (2005); Jansen, "The Making of Modern Japan" (2000);
//   Seth, "A Concise History of Korea" (2016); Cumings, "Korea's Place in the Sun" (2005).
(() => {
  window.PLACES = window.PLACES || [];

  // ================= 1. YAYOİ, ÜÇ KRALLIK VE NARA =================
  window.PLACES.push({
    id: 'japonya-antik', sira: 1, kisa: 'Kofun, Üç Krallık ve Nara', aralikAd: 'MÖ 1000 – MS 794',
    baslik: 'Jomon ve Yayoi · Himiko · dev höyükler · Kore\'nin üç krallığı · Budizm · Nara',
    ulkeAlt: 'Çömlekçi Jomon\'dan pirinç ekici Yayoi\'ye, Kore\'nin üç krallığından Nara\'nın Büyük Buda\'sına (MÖ 1000 – MS 794)',
    from: 1000, to: -794, start: -752,
    not: 'MS 500 öncesi tarihler arkeolojik tahminlerdir; Japon kroniklerinin ilk bölümleri söylencesel.', baskent: 'Yamatai, Asuka, Nara; Kore\'de Pyongyang, Gyeongju, Buyeo',
    sahne: { kizak: false, araba: false, katipYok: true, giyim: 'antik' },
    dynasties: [
      { from: 1000, to: 300, ad: 'Jomon sonu; Kore\'de Gojoseon', renk: '#6a6a4a' }, { from: 300, to: -250, ad: 'Yayoi dönemi', renk: '#8a7a3a' },
      { from: -250, to: -538, ad: 'Kofun dönemi', renk: '#7a5a3a' }, { from: -538, to: -710, ad: 'Asuka dönemi', renk: '#3a6a5a' }, { from: -710, to: -794, ad: 'Nara dönemi', renk: '#a8742e' }
    ],
    rulers: [
      { from: 1000, to: 300, ad: 'Jomon toplulukları; Kore\'de Gojoseon', kisa: '?', kim: 'Japonya\'da avcı-toplayıcı Jomon kültürü dünyanın en eski çömleklerini yapmıştı. Kore\'de geleneğe göre ilk krallık Gojoseon.' },
      { from: 300, to: -180, ad: 'Yayoi boy önderleri', kisa: '?', kim: 'Kore üzerinden gelen göçmenler sulu pirinç tarımını, tunç ve demiri getirdi.' },
      { from: -180, to: -248, ad: 'Kraliçe Himiko (Yamatai)', kisa: 'Himiko', kim: 'Çin kayıtlarına göre 30 kadar küçük krallığı yöneten şaman kraliçe; Çin\'e elçi gönderdi (238).' },
      { from: -248, to: -538, ad: 'Yamato büyük kralları; Kore\'de Kral Gwanggaeto', kisa: 'Yamato', kim: 'Dev anahtar deliği biçimli mezar höyükleri. Kore\'de Goguryeo kralı Gwanggaeto Mançurya\'ya kadar uzandı.' },
      { from: -538, to: -622, ad: 'Asuka: Prens Şotoku', kisa: 'Şotoku', kim: 'Budizm Kore\'nin Baekje krallığından geldi. Şotoku 17 maddelik anayasayı yazdı ve Horyu-ji\'yi yaptırdı.' },
      { from: -622, to: -710, ad: 'Taika reformları ve İmparator Tenmu', kisa: 'Tenmu', kim: 'Tang Çini örneğinde merkezî devlet. Kore\'de Silla yarımadayı birleştirdi (668-676).' },
      { from: -710, to: -794, ad: 'Nara dönemi; İmparator Şomu', kisa: 'Şomu', kim: 'Nara Japonya\'nın ilk kalıcı başkenti. Şomu Todai-ji\'nin Büyük Buda\'sını döktürdü (752).' }
    ],
    eras: [
      { from: 1000, to: -250, puan: { eko: 2, ordu: 1, istikrar: 3 }, baskent: 'Yok; köy toplulukları',
        gundem: 'Japonya\'da Jomon avcı-toplayıcıları süslü çömlekler yapıyor. MÖ ~300\'den sonra Kore\'den gelen göçmenlerle pirinç tarlaları, tunç çanlar ve demir aletler yayıldı. Kore\'de Gojoseon\'dan sonra Çin Han hanedanı kuzeyde eyaletler kurdu (MÖ 108).',
        savas: 'Hendekli köyler ve gözetleme kuleleri (Yoşinogari).',
        ekonomi: 'Sulu pirinç tarımı; tunç ayna ve çanlar.',
        din: 'Doğa ruhları (kami): Şintonun kökleri.',
        yasam: 'Ahşap direkli tahıl ambarları, ipek ve kenevir dokuma.',
        bilgi: 'Jomon çömlekleri 16.000 yıl öncesine dayanır: dünyanın bilinen en eski çömleklerinden.' },
      { from: -250, to: -538, puan: { eko: 3, ordu: 3, istikrar: 3 }, baskent: 'Yamato (Nara ovası); Kore\'de Pyongyang, Gyeongju',
        gundem: 'Yamato kralları dev "kofun" höyüklerine gömülüyor; en büyüğü Mısır piramitlerinden geniş bir alan kaplıyor. Kore\'de Goguryeo, Baekje ve Silla krallıkları rekabet ediyor; Kore Çin kültürünü Japonya\'ya aktaran köprü.',
        savas: 'Zırhlı atlı savaşçılar; demir kılıçlar.',
        ekonomi: 'Kore\'den demir külçeleri; Kore\'li zanaatkârlar Japonya\'ya göçüyor.',
        din: 'Şinto: Ise Tapınağı. Kore\'ye Budizm 4. yüzyılda geldi.',
        yasam: 'Haniwa: höyüklerin çevresine dizilen pişmiş topraktan asker, at ve ev figürleri.',
        bilgi: 'Daisen Kofun (Nintoku İmparatoru\'na mal edilen) 486 m uzunluğuyla taban alanı bakımından dünyanın en büyük mezarlarından.' },
      { from: -538, to: -794, puan: { eko: 4, ordu: 3, istikrar: 4 }, baskent: 'Asuka, Fujiwara, Nara; Kore\'de Gyeongju (Silla)',
        gundem: 'Budizm, Çin yazısı ve Tang tarzı devlet yönetimi benimsendi. Prens Şotoku tapınaklar yaptırdı. Nara\'da Todai-ji ve dev Buda heykeli. Kore\'de Birleşik Silla Gyeongju\'da Bulguksa\'yı yaptı.',
        savas: 'Baekje\'ye yardım için gönderilen Japon donanması Hakusukinoe\'de Tang-Silla\'ya yenildi (663).',
        ekonomi: 'İlk Japon sikkeleri (708); vergi tahıl, kumaş ve emekle.',
        din: 'Budizm devlet desteğinde; Şinto ile yan yana.',
        yasam: 'İlk tarih kitapları Kojiki (712) ve Nihon Şoki (720); şiir derlemesi Man\'yoşu.',
        bilgi: 'Todai-ji\'nin Büyük Buda\'sı için o dönemde Japonya\'da üretilen bronzun neredeyse tamamı kullanıldı.' }
    ],
    nufus: [[1000, 0.3], [300, 1], [-1, 2], [-500, 6], [-794, 9]],
    nufusNot: 'Japonya ve Kore için kaba tahminler.',
    dunyaOzet: { eko: 'Han, sonra Tang Çini Doğu Asya\'nın merkezi; Kore ve Japonya onun kültürünü benimsedi.', askeri: 'Tunç ve demir silahlar; atlı okçular.' },
    events: [
      { y: 300, t: 'Yayoi: pirinç tarımı', k: 'm' }, { y: 108, t: 'Han Çini kuzey Kore\'de', k: 'm' }, { y: 57, t: 'Silla kuruldu (geleneğe göre)', k: 'm' }, { y: -238, t: 'Himiko\'nun elçisi Çin\'de', k: 'm' },
      { y: -414, t: 'Gwanggaeto Steli', k: 'm' }, { y: -450, t: 'Daisen Kofun', k: 'm' }, { y: -538, t: 'Budizm Japonya\'ya geldi', k: 'm' }, { y: -604, t: 'Şotoku\'nun 17 maddesi', k: 'm' },
      { y: -645, t: 'Taika reformu', k: 'm' }, { y: -668, t: 'Silla Kore\'yi birleştirdi', k: 'm' }, { y: -710, t: 'Nara başkent', k: 'm' }, { y: -712, t: 'Kojiki', k: 'm' }, { y: -752, t: 'Büyük Buda', k: 'm' },
      { y: 221, t: 'Çin birleşti', k: 'w' }, { y: -618, t: 'Tang hanedanı', k: 'w' }
    ],
    world: [{ from: 206, to: -220, yer: 'Çin', t: 'Han hanedanı.' }, { from: -618, to: -794, yer: 'Çin', t: 'Tang hanedanı; Japon elçileri Chang\'an\'da.' }],
    sites: [{ ad: 'PYONGYANG', wx: 900 }, { ad: 'BUYEO (BAEKJE)', wx: 1700 }, { ad: 'GYEONGJU (SİLLA)', wx: 2200 }, { ad: 'YOŞİNOGARİ', wx: 3300 }, { ad: 'İSE', wx: 5300 }, { ad: 'ASUKA', wx: 4900 }, { ad: 'NARA', wx: 4800 }],
    monuments: [
      { id: 'daisen', ad: 'Daisen Kofun', yer: 'Sakai, Osaka', wx: 4550, type: 'mound', b: 180, h: 30, renk: '#6a8a4a', start: -440, end: -460, vol: 1e5 },
      { id: 'horyuji', ad: 'Horyu-ji pagodası', yer: 'Nara', wx: 4900, type: 'pagoda', kat: 5, renk: '#c8b89a', cati: '#4a4a4a', b: 34, h: 32, start: -670, end: -711, vol: 2e4 },
      { id: 'todaiji', ad: 'Todai-ji ve Büyük Buda', yer: 'Nara', wx: 4800, type: 'pagoda', kat: 2, renk: '#8a5a3a', cati: '#3a3a3a', b: 140, h: 48, start: -745, end: -752, vol: 1e5 },
      { id: 'bulguksa', ad: 'Bulguksa', yer: 'Gyeongju, Güney Kore', wx: 2200, type: 'pagoda', kat: 1, renk: '#b8423a', cati: '#3a4a4a', b: 110, h: 24, start: -751, end: -774, vol: 5e4 }
    ],
    hizli: [{ ad: 'Yayoi', y: 300 }, { ad: 'Himiko', y: -238 }, { ad: 'Gwanggaeto', y: -400 }, { ad: 'Kofun', y: -450 }, { ad: 'Budizm', y: -538 }, { ad: 'Şotoku', y: -604 }, { ad: 'Silla', y: -668 }, { ad: 'Büyük Buda', y: -752 }],
    bilgi: {
      daisen: { ikon: '⛰️', yaptiran: 'Yamato kralları', donem: '5. yy', mimar: '—', sure: '~15-20 yıl (tahmin)', neden: 'Bir büyük kralın mezarı (geleneğe göre İmparator Nintoku).', onem: 'Dünyanın taban alanı en büyük mezarlarından.', teknik: [['Uzunluk', '486 m'], ['Hendek', '3 sıra']], nasil: 'Anahtar deliği biçimli toprak höyük; yamaçlarda binlerce haniwa figürü vardı.', bugun: 'UNESCO Dünya Mirası (Mozu-Furuichi, 2019); imparatorluk mezarı olduğu için girilemez.', ilginc: 'Yerden bakınca ormanlık bir tepe gibi görünür; şekli ancak havadan anlaşılır.' },
      horyuji: { ikon: '🛕', yaptiran: 'Prens Şotoku (ilk yapı 607)', donem: '7. yy sonu yeniden yapım', mimar: '—', sure: '—', neden: 'Budist tapınak.', onem: 'Dünyanın ayakta kalan en eski ahşap binalarından.', teknik: [['Pagoda', '5 kat, ~32 m']], nasil: 'Ortadaki tek ağaç direk (şinbaşira) depremlerde salınarak yapıyı ayakta tutar.', bugun: 'UNESCO Dünya Mirası (1993).', ilginc: 'Merkez direğin ağacının 594\'te kesildiği ağaç halkalarından belirlendi.' },
      todaiji: { ikon: '🙏', yaptiran: 'İmparator Şomu', donem: '745-752', mimar: 'Kuninaka no Kimimaro (heykel)', sure: '~7 yıl', neden: 'Ülkeyi salgın ve kıtlıktan korumak için dev Buda.', onem: 'Japonya\'nın en büyük bronz Buda\'sı.', teknik: [['Buda', '~15 m, ~500 ton'], ['Salon', '57 × 50 m']], nasil: 'Bronz sekiz aşamada döküldü; salon birkaç kez yandı, bugünkü hâli 1709.', bugun: 'UNESCO Dünya Mirası; çevresinde serbest dolaşan geyikler.', ilginc: 'Salondaki bir direğin dibinde Buda\'nın burun deliği büyüklüğünde bir delik var; içinden geçen çocukların aydınlanacağına inanılır.' },
      bulguksa: { ikon: '🏯', yaptiran: 'Silla başbakanı Kim Dae-seong', donem: '751-774', mimar: '—', sure: '~23 yıl', neden: 'Budist tapınak.', onem: 'Birleşik Silla sanatının başyapıtı.', teknik: [['Taş pagodalar', 'Dabotap ve Seokgatap']], nasil: 'Taş teraslar ve köprü merdivenler üzerinde ahşap salonlar.', bugun: 'UNESCO Dünya Mirası (1995).', ilginc: 'Seokgatap pagodasında bulunan bir sutra, dünyanın bilinen en eski basılı metinlerinden (~751) olabilir.' }
    },
    ulke: [
      { ad: 'Genel bakış', ikon: '🧭', html: '<p><b>Kore</b> ve <b>Japonya</b> Çin uygarlığından çok şey aldı ama kendi kültürlerini kurdu. Kore\'nin üç krallığı (Goguryeo, Baekje, Silla) Budizmi ve yazıyı Japonya\'ya aktardı. Japonya\'da Yamato kralları dev höyükler yaptırdı; 8. yüzyılda Nara\'da merkezî bir imparatorluk kuruldu.</p>' }
    ]
  });

  // ================= 2. SAMURAYLAR VE JOSEON =================
  window.PLACES.push({
    id: 'japonya-ortacag', sira: 2, kisa: 'Samuraylar, Goryeo ve Joseon', aralikAd: 'MS 794 – 1868',
    baslik: 'Heian · Genji Hikâyesi · şogunlar · Moğol seferleri · Hangıl · Sekigahara · Edo',
    ulkeAlt: 'Kyoto saray kültüründen samuray şogunluklarına; Kore\'de Goryeo ve Joseon\'a (MS 794 – 1868)',
    from: -794, to: -1868, start: -1600,
    not: 'Tarihler kesindir. Hükümdar şeridi Japonya\'nın fiilî yöneticilerini izler.', baskent: 'Kyoto (Heian), Kamakura, Edo; Kore\'de Kaesong ve Hanyang (Seul)',
    sahne: { kizak: false, araba: false, giyim: 'cubbe' },
    dynasties: [{ from: -794, to: -1185, ad: 'Heian', renk: '#a85a7a' }, { from: -1185, to: -1333, ad: 'Kamakura şogunluğu', renk: '#5a5a3a' }, { from: -1333, to: -1603, ad: 'Muromachi ve Sengoku', renk: '#7a3a2a' }, { from: -1603, to: -1868, ad: 'Edo (Tokugawa)', renk: '#2a4a6a' }],
    rulers: [
      { from: -794, to: -1016, ad: 'Heian imparatorları', kisa: 'Heian', kim: 'Başkent Heian-kyo (Kyoto). Kore\'de Goryeo krallığı kuruldu (918): "Kore" adı buradan gelir.' },
      { from: -1016, to: -1068, ad: 'Fujiwara no Michinaga ve Fujiwara naipleri', kisa: 'Fujiwara', kim: 'Fujiwara ailesi kızlarını imparatorlarla evlendirerek yönetti. Murasaki Şikibu Genji Hikâyesi\'ni yazdı.' },
      { from: -1068, to: -1185, ad: 'Emekli imparatorlar ve Taira klanı', kisa: 'Taira', kim: 'Samuray klanları güçlendi; Genpei Savaşı (1180-1185) Minamotoların zaferiyle bitti.' },
      { from: -1185, to: -1199, ad: 'Minamoto no Yoritomo', kisa: 'Yoritomo', kim: 'Kamakura\'da ilk şogunluğu kurdu (1192\'de şogun unvanı).' },
      { from: -1199, to: -1333, ad: 'Hojo naipleri', kisa: 'Hojo', kim: 'Moğol istilalarını (1274, 1281) püskürttüler: ikincisinde "kamikaze" (ilahi rüzgâr) denilen tayfun Moğol filosunu batırdı.' },
      { from: -1333, to: -1467, ad: 'Aşikaga şogunları', kisa: 'Aşikaga', kim: 'Kyoto\'da Altın Köşk; Zen, çay töreni ve Noh tiyatrosu. Kore\'de Joseon kuruldu (1392), Kral Sejong Hangıl\'ı yarattı.' },
      { from: -1467, to: -1568, ad: 'Sengoku: savaşan beylikler', kisa: 'Sengoku', kim: 'Ōnin Savaşı\'ndan sonra yüz yıllık iç savaş. Portekizliler tüfeği getirdi (1543), Francisco Xavier Hristiyanlığı (1549).' },
      { from: -1568, to: -1582, ad: 'Oda Nobunaga', kisa: 'Nobunaga', kim: 'Tüfekli piyadeyle Japonya\'nın birleşmesini başlattı; Honno-ji\'de kendi generalinin ihanetine uğradı.' },
      { from: -1582, to: -1598, ad: 'Toyotomi Hideyoşi', kisa: 'Hideyoşi', kim: 'Köylü kökenli; Japonya\'yı birleştirdi. Kore\'yi istila etti (1592-1598); Amiral Yi Sun-sin kaplumbağa gemileriyle direndi.' },
      { from: -1598, to: -1616, ad: 'Tokugawa İeyasu', kisa: 'İeyasu', kim: 'Sekigahara\'da kazandı (1600), 1603\'te şogun oldu, Edo\'yu (Tokyo) başkent yaptı.' },
      { from: -1616, to: -1853, ad: 'Tokugawa şogunları', kisa: 'Tokugawa', kim: '250 yıl barış; ülke dışa kapandı (sakoku), yalnızca Nagasaki\'de Hollandalı ve Çinli tüccarlar.' },
      { from: -1853, to: -1868, ad: 'Perry\'nin "kara gemileri" ve şogunluğun sonu', kisa: 'Bakumatsu', kim: 'ABD\'li Komodor Perry limanları açmaya zorladı (1853-54). Boşin Savaşı ve Meiji Restorasyonu.' }
    ],
    eras: [
      { from: -794, to: -1185, puan: { eko: 4, ordu: 2, istikrar: 4 }, baskent: 'Heian-kyo (Kyoto); Kore\'de Kaesong',
        gundem: 'Kyoto\'da incelikli bir saray kültürü: şiir yarışmaları, katmanlı ipek giysiler, kana alfabesiyle yazan kadın yazarlar. Murasaki Şikibu\'nun Genji Hikâyesi dünyanın ilk romanlarından sayılır. Kore\'de Goryeo celadon seramikleriyle ünlü.',
        savas: 'Taşrada samuray (bushi) klanları doğuyor: atlı okçular.',
        ekonomi: 'Soyluların ve tapınakların vergiden muaf malikâneleri (şoen).',
        din: 'Tendai ve Şingon Budizmi; Şinto ile iç içe.',
        yasam: 'Kana hece alfabeleri; "Yastık Kitabı" (Sei Şonagon).',
        bilgi: 'Genji Hikâyesi (~1008) 54 bölüm ve 400\'den fazla karakter içerir.' },
      { from: -1185, to: -1600, puan: { eko: 4, ordu: 5, istikrar: 2 }, baskent: 'Kamakura, Kyoto; Kore\'de Kaesong, sonra Hanyang (Seul)',
        gundem: 'Samuraylar yönetimi ele geçirdi: şogunlar. Moğol istilaları tayfunlarla durdu. Zen Budizmi, çay töreni ve Altın Köşk. Kore\'de Joseon\'un Kral Sejomg (1418-1450) Hangıl alfabesini yarattı. Japonya\'da yüz yıllık iç savaş ve Hideyoşi\'nin Kore istilası.',
        savas: 'Samuray kılıcı (katana), tüfek (1543\'ten), kaleler. Yi Sun-sin\'in zırhlı kaplumbağa gemileri.',
        ekonomi: 'Pazarlar, loncalar, Çin bakır sikkeleri. Kore\'de metal harfli matbaa: Jikji (1377), Gutenberg\'den 78 yıl önce.',
        din: 'Zen, Saf Toprak ve Nichiren Budizmi; Joseon\'da Yeni-Konfüçyüsçülük devlet ideolojisi.',
        yasam: 'Noh tiyatrosu, kaya bahçeleri, ikebana.',
        bilgi: 'Hangıl o kadar mantıklı tasarlandı ki Kral Sejong\'un fermanına göre "akıllı biri bir sabahta, yavaş biri on günde" öğrenebilir.' },
      { from: -1600, to: -1868, puan: { eko: 5, ordu: 3, istikrar: 5 }, baskent: 'Edo (şogun), Kyoto (imparator); Kore\'de Hanyang',
        gundem: 'Tokugawa barışı: 250 yıl savaşsız. Edo 1 milyonluk dünyanın en büyük şehirlerinden biri. Ülke dışa kapalı; Nagasaki\'deki Hollandalılar dışında Batı\'ya kapı yok. Kabuki, ukiyo-e ve haiku. 1853\'te Amerikan gemileri kapıyı zorladı.',
        savas: 'Barış çağı; samuraylar memura dönüştü. Daimyolar her iki yılda bir Edo\'da yaşamak zorunda (sankin kotai).',
        ekonomi: 'Pirinç vergisi, tüccarlar zenginleşti; Osaka "Japonya\'nın mutfağı".',
        din: 'Hristiyanlık yasaklandı (1614); Budist tapınaklarına kayıt zorunlu.',
        yasam: 'Hokusai\'nin "Büyük Dalga"sı, Başo\'nun haikuları, sumo ve kabuki.',
        bilgi: 'Edo dönemi Japonya\'sında okuma yazma oranı o çağın Avrupa\'sının birçok ülkesinden yüksekti; tapınak okulları (terakoya) çok yaygındı.' }
    ],
    nufus: [[-794, 9], [-1000, 11], [-1300, 15], [-1600, 24], [-1700, 38], [-1868, 50]],
    nufusNot: 'Japonya ve Kore için tahminler (1868: Japonya ~33 milyon, Kore ~17 milyon).',
    dunyaOzet: { eko: 'Song, Ming ve Qing Çini bölgenin merkezi; Japon gümüşü 16-17. yüzyılda dünya ticaretinde önemli.', askeri: 'Samuraylar, tüfek, kaleler; Kore\'nin zırhlı gemileri.' },
    events: [
      { y: -794, t: 'Kyoto başkent', k: 'm' }, { y: -918, t: 'Goryeo kuruldu', k: 'm' }, { y: -1008, t: 'Genji Hikâyesi', k: 'm' }, { y: -1185, t: 'Dan-no-ura: Genpei Savaşı bitti', k: 'm' },
      { y: -1192, t: 'İlk şogun', k: 'm' }, { y: -1251, t: 'Tripitaka Koreana', k: 'm' }, { y: -1274, t: 'Birinci Moğol istilası', k: 'm' }, { y: -1281, t: 'İkinci Moğol istilası; tayfun', k: 'm' },
      { y: -1377, t: 'Jikji: metal harfli matbaa', k: 'm' }, { y: -1392, t: 'Joseon kuruldu', k: 'm' }, { y: -1397, t: 'Altın Köşk', k: 'm' }, { y: -1446, t: 'Hangıl ilan edildi', k: 'm' },
      { y: -1543, t: 'Portekiz tüfekleri', k: 'm' }, { y: -1592, t: 'Japonya Kore\'yi istila etti', k: 'm' }, { y: -1600, t: 'Sekigahara', k: 'm' }, { y: -1639, t: 'Sakoku', k: 'm' }, { y: -1853, t: 'Perry\'nin gemileri', k: 'm' },
      { y: -1206, t: 'Cengiz Han', k: 'w' }, { y: -1453, t: 'İstanbul\'un fethi', k: 'w' }, { y: -1789, t: 'Fransız İhtilali', k: 'w' }
    ],
    world: [{ from: -960, to: -1279, yer: 'Çin', t: 'Song.' }, { from: -1271, to: -1368, yer: 'Çin', t: 'Yuan (Moğol).' }, { from: -1368, to: -1644, yer: 'Çin', t: 'Ming.' }, { from: -1644, to: -1868, yer: 'Çin', t: 'Qing.' }],
    sites: [{ ad: 'KAESONG', wx: 1200 }, { ad: 'HANYANG (SEUL)', wx: 1500 }, { ad: 'BUSAN', wx: 2600 }, { ad: 'NAGASAKİ', wx: 3100 }, { ad: 'HİMEJİ', wx: 4300 }, { ad: 'OSAKA', wx: 4550 }, { ad: 'KYOTO', wx: 5000 }, { ad: 'SEKİGAHARA', wx: 5300 }, { ad: 'KAMAKURA', wx: 5800 }, { ad: 'EDO', wx: 6200 }],
    monuments: [
      { id: 'byodoin', ad: 'Byodo-in Anka Salonu', yer: 'Uji, Kyoto', wx: 5150, type: 'pagoda', kat: 1, renk: '#c84a2a', cati: '#5a5a5a', b: 90, h: 20, start: -1052, end: -1053, vol: 3e4 },
      { id: 'kinkakuji', ad: 'Kinkaku-ji (Altın Köşk)', yer: 'Kyoto', wx: 5000, type: 'pagoda', kat: 3, renk: '#d8b040', cati: '#3a3a3a', b: 40, h: 30, start: -1397, end: -1398, vol: 2e4 },
      { id: 'gyeongbokgung', ad: 'Gyeongbokgung Sarayı', yer: 'Seul', wx: 1500, type: 'pagoda', kat: 2, renk: '#b8423a', cati: '#3a4a4a', b: 120, h: 30, start: -1394, end: -1395, vol: 6e4 },
      { id: 'himeji', ad: 'Himeji Kalesi', yer: 'Hyogo', wx: 4300, type: 'pagoda', kat: 5, renk: '#f2eee6', cati: '#5a6a6a', b: 80, h: 46, start: -1601, end: -1609, vol: 6e4 }
    ],
    hizli: [{ ad: 'Heian', y: -900 }, { ad: 'Genji', y: -1008 }, { ad: 'Şogun', y: -1192 }, { ad: 'Moğollar', y: -1281 }, { ad: 'Altın Köşk', y: -1397 }, { ad: 'Hangıl', y: -1446 }, { ad: 'Sengoku', y: -1550 }, { ad: 'İmjin', y: -1592 }, { ad: 'Sekigahara', y: -1600 }, { ad: 'Edo', y: -1750 }, { ad: 'Perry', y: -1853 }],
    bilgi: {
      byodoin: { ikon: '🐦', yaptiran: 'Fujiwara no Yorimichi', donem: '1053', mimar: '—', sure: '—', neden: 'Saf Toprak cennetini yeryüzünde canlandırmak.', onem: 'Heian mimarisinin simgesi.', teknik: [['Çatı', 'İki bronz anka kuşu']], nasil: 'Gölün üstünde yansıyan, kanat açmış kuş biçimli salon.', bugun: 'UNESCO Dünya Mirası; Japon 10 yen madeni parasının üzerinde.', ilginc: '10.000 yenlik banknotta da çatıdaki anka kuşu var.' },
      kinkakuji: { ikon: '✨', yaptiran: 'Şogun Aşikaga Yoşimitsu', donem: '1397', mimar: '—', sure: '—', neden: 'Emekli şogunun villası, ölümünden sonra Zen tapınağı.', onem: 'Kyoto\'nun simgesi.', teknik: [['Kat', '3, üst iki kat altın varak']], nasil: 'Her katı farklı mimari üslupta.', bugun: 'UNESCO Dünya Mirası (Kyoto).', ilginc: '1950\'de genç bir rahip köşkü yaktı; bugünkü yapı 1955\'te birebir yeniden yapıldı. Olay Mişima\'nın romanına konu oldu.' },
      gyeongbokgung: { ikon: '🏯', yaptiran: 'Joseon kurucusu Taejo', donem: '1395', mimar: 'Jeong Do-jeon (plan)', sure: '—', neden: 'Joseon\'un ana sarayı.', onem: 'Kore\'nin en büyük sarayı.', teknik: [['Bina (19. yy)', '~330']], nasil: 'Bugakdan dağının önünde, geomansiye göre yerleştirildi.', bugun: '1592\'de yandı, 1867\'de yeniden yapıldı; Japon döneminde yıkılan bölümler onarılıyor.', ilginc: 'Bugün hanbok giyen ziyaretçiler saraya ücretsiz giriyor.' },
      himeji: { ikon: '🏯', yaptiran: 'İkeda Terumasa', donem: '1601-1609', mimar: '—', sure: '~9 yıl', neden: 'Batı Japonya\'yı koruyan kale.', onem: 'Japonya\'nın orijinal hâliyle en iyi korunmuş kalesi; "Beyaz Balıkçıl Kalesi".', teknik: [['Ana kule', '~46 m (tepe dahil)'], ['Bina', '83']], nasil: 'Beyaz sıva yangına karşı koruma; labirent gibi yollar.', bugun: 'UNESCO Dünya Mirası (1993).', ilginc: 'İkinci Dünya Savaşı\'nda şehir bombalandı ama kaleye isabet eden bomba patlamadı.' }
    },
    ulke: [
      { ad: 'Genel bakış', ikon: '🧭', html: '<p>Japonya\'da önce Kyoto\'daki <b>imparatorluk sarayı</b>, sonra <b>samuray</b> şogunları yönetti. Sengoku iç savaşından sonra <b>Tokugawa</b> şogunluğu 250 yıllık barış getirdi. Kore\'de <b>Goryeo</b> ve <b>Joseon</b> hanedanları 900 yılı aşkın yönetti; Hangıl alfabesi ve metal harfli matbaa Kore\'nin armağanlarıdır.</p>' },
      { ad: 'Samuray', ikon: '⚔️', html: '<ul><li><b>Bushido:</b> sadakat ve onur yolu</li><li><b>Katana:</b> katlanarak dövülmüş çelik</li><li><b>Daimyo:</b> bölge beyi</li><li><b>Şogun:</b> askeri yönetici; imparator sembolik</li><li>1876\'da kılıç taşıma yasaklandı</li></ul>' }
    ]
  });

  // ================= 3. MEİJİ'DEN BUGÜNE =================
  window.PLACES.push({
    id: 'japonya-modern', sira: 3, modern: true, kisa: 'Meiji\'den bugüne', aralikAd: 'MS 1868 – bugün',
    baslik: 'Meiji · sanayi · imparatorluk · Hiroşima · Kore Savaşı · ekonomik mucizeler',
    ulkeAlt: 'Meiji Restorasyonu\'ndan Japon imparatorluğuna, savaş sonrası mucizeye; bölünmüş Kore (MS 1868 – bugün)',
    from: -1868, to: -2026, start: -1964,
    not: 'Tarihler kesindir. Hükümdar şeridi Japon imparatorlarını izler.', baskent: 'Tokyo, Seul, Pyongyang',
    sahne: { kizak: false, buhar: -1872, oto: -1915, ucak: -1925, turist: -1970, giyim: [[-1868, 'cubbe'], [-1900, 'modern']] },
    dynasties: [{ from: -1868, to: -1945, ad: 'Japon İmparatorluğu', renk: '#c81a2a' }, { from: -1945, to: -2026, ad: 'Savaş sonrası Japonya ve iki Kore', renk: '#2a5a9a' }],
    rulers: [
      { from: -1868, to: -1912, ad: 'İmparator Meiji', kisa: 'Meiji', kim: 'Samuray düzeni kaldırıldı; demiryolu, fabrika, anayasa (1889). Çin\'i (1895) ve Rusya\'yı (1905) yendi.' },
      { from: -1912, to: -1926, ad: 'İmparator Taişo', kisa: 'Taişo', kim: '"Taişo demokrasisi"; Büyük Kanto depremi (1923).' },
      { from: -1926, to: -1945, ad: 'İmparator Hirohito (Şova); militarist hükümetler', kisa: 'Hirohito', kim: 'Mançurya (1931) ve Çin (1937) işgali, Pearl Harbor (1941). Hiroşima ve Nagazaki\'den sonra teslim oldu.' },
      { from: -1945, to: -1989, ad: 'Şova (Hirohito); barışçıl anayasa', kisa: 'Şova', kim: 'ABD işgali, yeni anayasa (1947), "ekonomik mucize", Tokyo Olimpiyatları (1964) ve hızlı tren.' },
      { from: -1989, to: -2019, ad: 'Heisei (Akihito)', kisa: 'Heisei', kim: 'Ekonomik balon patladı; "kayıp on yıl". 2011 depremi ve Fukuşima.' },
      { from: -2019, to: -2026, ad: 'Reiwa (Naruhito)', kisa: 'Reiwa', kim: 'Yaşlanan nüfus; 2021 Tokyo Olimpiyatları.' }
    ],
    eras: [
      { from: -1868, to: -1910, puan: { eko: 4, ordu: 4, istikrar: 4 }, baskent: 'Tokyo; Kore\'de Seul',
        gundem: 'Meiji Japonya\'sı 40 yılda Batı\'yı yakaladı: demiryolları, fabrikalar, zorunlu eğitim, modern ordu. Çin\'i ve Rusya\'yı yenen ilk Asya ülkesi oldu. Kore Joseon\'u (1897\'den Kore İmparatorluğu) Japon baskısı altında.',
        savas: 'Çin-Japon (1894-95) ve Rus-Japon (1904-05) savaşları; Tsuşima deniz zaferi.',
        ekonomi: 'İpek ihracatı, tekstil fabrikaları, zaibatsu şirketleri (Mitsubishi, Mitsui).',
        din: 'Devlet Şintosu; imparator kutsal.',
        yasam: 'Batı giysileri, et yemek, saat ve takvim değişti (Gregoryen takvim 1873).',
        bilgi: 'İlk Japon demiryolu 1872\'de Tokyo-Yokohama arasında açıldı; trenler o günden beri dakikliğiyle ünlü.' },
      { from: -1910, to: -1945, puan: { eko: 4, ordu: 5, istikrar: 2 }, baskent: 'Tokyo; Kore Japon sömürgesi',
        gundem: 'Japonya Kore\'yi ilhak etti (1910); Koreliler 35 yıl sömürge yönetimi altında yaşadı. 1 Mart Hareketi (1919). Japonya Mançurya\'yı ve Çin\'in büyük kısmını işgal etti, Pasifik Savaşı\'na girdi. 1945\'te Hiroşima ve Nagazaki atom bombalarıyla yıkıldı.',
        savas: 'Pearl Harbor (1941), Midway (1942), Okinawa (1945). Atom bombaları: ~200.000 ölü.',
        ekonomi: 'Savaş ekonomisi; Kore\'de pirinç ve zorla çalıştırma.',
        din: 'Devlet Şintosu Kore\'ye de dayatıldı.',
        yasam: 'Korelilere Japon isimleri zorla verildi (1939).',
        bilgi: 'Hiroşima\'daki Atom Bombası Kubbesi bombanın neredeyse tam altında olmasına rağmen ayakta kaldı; bugün barış anıtı.' },
      { from: -1945, to: -1990, puan: { eko: 5, ordu: 2, istikrar: 4 }, baskent: 'Tokyo, Seul, Pyongyang',
        gundem: 'Kore 38. paralelde bölündü; Kore Savaşı (1950-1953) ateşkesle bitti. Japonya barışçıl anayasayla dünyanın ikinci büyük ekonomisi oldu: Sony, Toyota, Şinkansen. Güney Kore de "Han Nehri mucizesi" ile sanayileşti.',
        savas: 'Kore Savaşı: ~2-3 milyon ölü; Türkiye de 21.000 askerle katıldı.',
        ekonomi: 'Japon otomobilleri ve elektroniği dünyayı fethetti; Güney Kore\'de Samsung ve Hyundai.',
        din: 'Japonya\'da Şinto ve Budizm; Güney Kore\'de Hristiyanlık hızla yayıldı.',
        yasam: 'Anime, manga, karaoke; Seul Olimpiyatları (1988).',
        bilgi: 'Şinkansen hızlı treni 1964\'te açıldığından beri yolcu ölümüne yol açan tek bir çarpışma ya da raydan çıkma kazası yaşanmadı.' },
      { from: -1990, to: -2026, puan: { eko: 4, ordu: 3, istikrar: 4 }, baskent: 'Tokyo, Seul, Pyongyang',
        gundem: 'Japonya yaşlanan nüfus ve durgun ekonomiyle uğraşırken Güney Kore K-pop ve dizileriyle kültür gücü oldu. Kuzey Kore nükleer silah geliştirdi (ilk deneme 2006). 2011 Tohoku depremi ve tsunamisi.',
        savas: 'Kuzey Kore füze denemeleri; Kore yarımadası hâlâ teknik olarak savaşta.',
        ekonomi: 'Japonya dünyanın 4. büyük ekonomisi; Güney Kore yarı iletken ve gemi inşasında lider.',
        din: 'Laik toplumlar; Japonya\'da insanlar doğumda Şinto, ölümde Budist törenleri yapar.',
        yasam: 'Tokyo dünyanın en kalabalık metropol bölgesi (~37 milyon).',
        bilgi: 'Japonya\'da 100 yaşını geçmiş 95.000\'den fazla kişi yaşıyor.' }
    ],
    nufus: [[-1868, 50], [-1910, 64], [-1945, 97], [-1970, 150], [-2000, 196], [-2026, 200]],
    nufusNot: 'Japonya (~123 milyon), Güney Kore (~52 milyon), Kuzey Kore (~26 milyon) toplamı.',
    dunyaOzet: { eko: 'Japonya ve Güney Kore 20. yüzyılın en hızlı sanayileşen ülkeleri.', askeri: 'Modern ordu ve donanma; atom bombası; Soğuk Savaş cephesi.' },
    events: [
      { y: -1868, t: 'Meiji Restorasyonu', k: 'm' }, { y: -1872, t: 'İlk tren', k: 'm' }, { y: -1889, t: 'Meiji Anayasası', k: 'm' }, { y: -1905, t: 'Tsuşima: Rusya yenildi', k: 'm' },
      { y: -1910, t: 'Kore ilhak edildi', k: 'm' }, { y: -1923, t: 'Kanto depremi', k: 'm' }, { y: -1941, t: 'Pearl Harbor', k: 'm' }, { y: -1945, t: 'Hiroşima ve Nagazaki', k: 'm' },
      { y: -1950, t: 'Kore Savaşı', k: 'm' }, { y: -1964, t: 'Tokyo Olimpiyatları ve Şinkansen', k: 'm' }, { y: -1988, t: 'Seul Olimpiyatları', k: 'm' }, { y: -2011, t: 'Tohoku depremi ve Fukuşima', k: 'm' },
      { y: -1914, t: 'Birinci Dünya Savaşı', k: 'w' }, { y: -1949, t: 'Çin Halk Cumhuriyeti', k: 'w' }, { y: -1991, t: 'SSCB dağıldı', k: 'w' }
    ],
    world: [{ from: -1912, to: -1949, yer: 'Çin', t: 'Cumhuriyet ve iç savaş.' }, { from: -1945, to: -1991, yer: 'Dünya', t: 'Soğuk Savaş.' }],
    sites: [{ ad: 'PYONGYANG', wx: 900 }, { ad: 'DMZ', wx: 1250 }, { ad: 'SEUL', wx: 1500 }, { ad: 'NAGAZAKİ', wx: 3100 }, { ad: 'HİROŞİMA', wx: 4000 }, { ad: 'OSAKA', wx: 4550 }, { ad: 'KYOTO', wx: 5000 }, { ad: 'TOKYO', wx: 6200 }, { ad: 'FUKUŞİMA', wx: 7000 }],
    monuments: [
      { id: 'genbaku', ad: 'Hiroşima Atom Bombası Kubbesi', yer: 'Hiroşima', wx: 4000, type: 'museum', b: 60, h: 25, start: -1914, end: -1915, vol: 2e4, ruin: -1945 },
      { id: 'tokyo', ad: 'Tokyo', yer: 'Japonya', wx: 6200, type: 'modcity', b: 460, h: 150, n: 50, start: -1955, end: -2015, vol: 1.2e5 },
      { id: 'seul', ad: 'Seul', yer: 'Güney Kore', wx: 1500, type: 'modcity', b: 380, h: 120, n: 40, start: -1970, end: -2015, vol: 9e4 }
    ],
    hizli: [{ ad: 'Meiji', y: -1868 }, { ad: 'Tsuşima', y: -1905 }, { ad: 'İlhak', y: -1910 }, { ad: 'Pearl Harbor', y: -1941 }, { ad: 'Hiroşima', y: -1945 }, { ad: 'Kore Savaşı', y: -1951 }, { ad: 'Şinkansen', y: -1964 }, { ad: 'Seul 1988', y: -1988 }, { ad: 'Fukuşima', y: -2011 }, { ad: 'Bugün', y: -2026 }],
    bilgi: {
      genbaku: { ikon: '🕊️', yaptiran: 'Hiroşima vilayeti (sergi sarayı)', donem: '1915', mimar: 'Jan Letzel (Çek)', sure: '—', neden: 'Sanayi tanıtım salonu.', onem: 'Atom bombasının simgesi ve barış anıtı.', teknik: [['Bomba patlaması', 'Binanın ~150 m yakınında, ~600 m yükseklikte']], nasil: 'Patlama neredeyse tepeden geldiği için duvarlar ayakta kaldı.', bugun: 'UNESCO Dünya Mirası (1996).', ilginc: '6 Ağustos 1945\'te saat 08:15\'te binadaki herkes öldü; bina o anki hâliyle korunuyor.' },
      tokyo: { ikon: '🏙️', yaptiran: '—', donem: '1603\'ten (Edo)', mimar: '—', sure: '—', neden: 'Tokugawa\'nın kalesi; 1868\'den imparatorluk başkenti.', onem: 'Dünyanın en kalabalık metropol bölgesi.', teknik: [['Metropol nüfus', '~37 milyon'], ['Tokyo Skytree', '634 m']], nasil: '1923 depremi ve 1945 bombardımanından sonra iki kez yeniden kuruldu.', bugun: 'Japonya\'nın başkenti.', ilginc: 'Şinjuku istasyonu günde ~3,5 milyon yolcuyla dünyanın en işlek istasyonu.' },
      seul: { ikon: '🏙️', yaptiran: '—', donem: '1394\'ten başkent', mimar: '—', sure: '—', neden: 'Han Nehri kıyısında Joseon başkenti.', onem: 'Güney Kore\'nin başkenti (~10 milyon, metropol ~26 milyon).', teknik: [['Lotte World Tower', '555 m']], nasil: 'Kore Savaşı\'nda büyük ölçüde yıkıldı; 30 yılda megakente dönüştü.', bugun: 'Teknoloji ve K-pop merkezi.', ilginc: 'Seul, sınırdaki Askerden Arındırılmış Bölge\'ye yalnızca ~50 km uzaklıkta.' }
    },
    ulke: [
      { ad: 'Genel bakış', ikon: '🧭', html: '<p>1868 <b>Meiji Restorasyonu</b> Japonya\'yı hızla modernleştirdi; Japonya bir sömürge imparatorluğu kurdu ve Kore\'yi ilhak etti. İkinci Dünya Savaşı\'ndaki yenilgiden sonra barışçıl bir ekonomik güce dönüştü. Kore 1945\'te bölündü; Kore Savaşı\'ndan sonra Güney demokratik ve zengin bir ülke, Kuzey kapalı bir rejim oldu.</p>' }
    ]
  });

  window.BOLGE_TASI('japonya');

  window.MISIR = {
    coords: { daisen: [34.5639, 135.4877], horyuji: [34.6147, 135.7346], todaiji: [34.689, 135.8398], bulguksa: [35.7901, 129.3322], byodoin: [34.8892, 135.8077], kinkakuji: [35.0394, 135.7292], gyeongbokgung: [37.5796, 126.977], himeji: [34.8394, 134.6939], genbaku: [34.3955, 132.4536], tokyo: [35.6762, 139.6503], seul: [37.5665, 126.978] },
    wiki: { daisen: 'Daisen Kofun', horyuji: 'Hōryū-ji', todaiji: 'Tōdai-ji', bulguksa: 'Bulguksa', byodoin: 'Byōdō-in', kinkakuji: 'Kinkaku-ji', gyeongbokgung: 'Gyeongbokgung', himeji: 'Himeji Castle', genbaku: 'Hiroshima Peace Memorial', tokyo: 'Tokyo', seul: 'Seoul' },
    bilgi: {}, alt: {},
    kureAdlari: [[39.5, 134, 'JAPON DENİZİ', 'deniz', 3.0], [33, 142, 'PASİFİK OKYANUSU', 'deniz', 2.4], [36.5, 138.2, 'JAPONYA', 'misir', 3.0], [37.5, 127.6, 'KORE', 'bolge', 3.4], [43.2, 142.8, 'HOKKAİDO', 'kucuk', 4], [35.36, 138.73, 'Fuji', 'kucuk', 6]],
    sehirler: [
      { ad: 'Gyeongju', ll: [35.8562, 129.2247], from: 57, to: -2026, b: [[57, -935]], not: 'Silla başkenti.' },
      { ad: 'Pyongyang', ll: [39.0392, 125.7625], from: 1122, to: -2026, b: [[-427, -668], [-1948, -2026]], not: 'Goguryeo ve bugün Kuzey Kore başkenti.' },
      { ad: 'Seul (Hanyang)', ll: [37.5665, 126.978], from: 18, to: -2026, b: [[-1394, -1910], [-1948, -2026]], not: 'Joseon ve Güney Kore başkenti.' },
      { ad: 'Nara', ll: [34.6851, 135.8048], from: -710, to: -2026, b: [[-710, -784]], not: 'Japonya\'nın ilk kalıcı başkenti.' },
      { ad: 'Kyoto', ll: [35.0116, 135.7681], from: -794, to: -2026, b: [[-794, -1869]], not: '1.000 yıl imparatorluk başkenti.' },
      { ad: 'Kamakura', ll: [35.3192, 139.5467], from: -1180, to: -2026, b: [[-1185, -1333]], not: 'İlk şogunluğun merkezi.' },
      { ad: 'Edo (Tokyo)', ll: [35.6762, 139.6503], from: -1457, to: -2026, b: [[-1603, -2026]], not: 'Şogunların ve 1868\'den imparatorun şehri.' },
      { ad: 'Osaka', ll: [34.6937, 135.5023], from: -645, to: -2026, not: 'Hideyoşi\'nin kalesi; tüccar şehri.' },
      { ad: 'Nagasaki', ll: [32.7503, 129.8779], from: -1571, to: -2026, not: 'Edo döneminde Batı\'ya açık tek kapı.' },
      { ad: 'Hiroşima', ll: [34.3853, 132.4553], from: -1589, to: -2026, not: '1945 atom bombası.' }
    ],
    nil: { ikon: '🌊', title: 'Denizler, dağlar ve Fuji', sub: 'Ada ülkesi ve yarımada', foto: 'Mount Fuji', tabs: [{ ad: '🌊 Coğrafya', html: '<ul class="hap"><li><b>Japonya</b> ~14.000 adadan oluşur; dört büyük ada Honşu, Hokkaido, Kyuşu ve Şikoku.</li><li>Ülkenin ~%70\'i dağlık; insanlar dar kıyı ovalarında yaşar.</li><li>"Ateş Çemberi" üzerinde: yılda binlerce deprem ve 100\'den fazla etkin yanardağ.</li><li><b>Kore</b> dağlık bir yarımada; Han ve Nakdong nehirleri ovaları sular.</li></ul>' }] },
    simgeler: [
      { id: 'jp-kofun', ad: 'Kofun höyükleri', ikon: '⛰️', wiki: 'Kofun', git: { place: 'japonya-antik', y: -450, id: 'daisen' }, ozet: 'Anahtar deliği biçimli dev mezarlar.', hap: ['3-7. yy.', 'Daisen 486 m.'] },
      { id: 'jp-todaiji', ad: 'Nara\'nın Büyük Buda\'sı', ikon: '🙏', wiki: 'Tōdai-ji', git: { place: 'japonya-antik', y: -752, id: 'todaiji' }, ozet: 'Dev bronz Buda.', hap: ['752.', '~15 m.'] },
      { id: 'jp-genji', ad: 'Genji Hikâyesi', ikon: '📖', wiki: 'The Tale of Genji', git: { place: 'japonya-ortacag', y: -1008 }, ozet: 'İlk romanlardan.', hap: ['~1008.', 'Murasaki Şikibu.'] },
      { id: 'jp-hangil', ad: 'Hangıl', ikon: '🔤', wiki: 'Hangul', git: { place: 'japonya-ortacag', y: -1446 }, ozet: 'Kral Sejong\'un alfabesi.', hap: ['1443-1446.', '24 harf.'] },
      { id: 'jp-samuray', ad: 'Samuraylar', ikon: '⚔️', wiki: 'Samurai', git: { place: 'japonya-ortacag', y: -1600 }, ozet: 'Japonya\'nın savaşçı sınıfı.', hap: ['12-19. yy.', 'Bushido.'] },
      { id: 'jp-himeji', ad: 'Himeji Kalesi', ikon: '🏯', wiki: 'Himeji Castle', git: { place: 'japonya-ortacag', y: -1609, id: 'himeji' }, ozet: 'Beyaz Balıkçıl.', hap: ['1609.', 'Orijinal hâliyle.'] },
      { id: 'jp-hirosima', ad: 'Hiroşima', ikon: '🕊️', wiki: 'Atomic bombings of Hiroshima and Nagasaki', git: { place: 'japonya-modern', y: -1945, id: 'genbaku' }, ozet: 'İlk atom bombası.', hap: ['6 Ağustos 1945.', 'Barış anıtı.'] },
      { id: 'jp-sinkansen', ad: 'Şinkansen', ikon: '🚄', wiki: 'Shinkansen', git: { place: 'japonya-modern', y: -1964 }, ozet: 'İlk hızlı tren.', hap: ['1964.', '320 km/s.'] }
    ],
    bugun: '<p><b>Japonya</b> (~123 milyon), <b>Güney Kore</b> (~52 milyon) ve <b>Kuzey Kore</b> (~26 milyon).</p><ul class="hap"><li>Japonya ve Güney Kore dünyanın en büyük 15 ekonomisi arasında.</li><li>Kültür: anime, manga, K-pop, Kore dizileri, suşi, kimçi.</li><li>Yaşlanan nüfus: Japonya\'da insanların ~%29\'u 65 yaş üstü.</li><li>Kore yarımadası 1953\'ten beri ateşkesle bölünmüş.</li></ul>'
  };
  window.SEHIR_BILGI = {
    'Kyoto': { bugun: 'Kyoto, Japonya', kurulus: '794', wiki: 'Kyoto', onem: '1.000 yıl Japonya\'nın başkenti; 1.600 Budist tapınağı.', ilginc: 'İkinci Dünya Savaşı\'nda atom bombası hedefleri arasındaydı; ABD Savaş Bakanı Stimson kültürel önemi yüzünden listeden çıkarttı.' },
    'Seul (Hanyang)': { bugun: 'Seul, Güney Kore', kurulus: 'MÖ 18 (Baekje), 1394 Joseon başkenti', wiki: 'Seoul', onem: 'Kore\'nin 600 yıllık başkenti.', ilginc: 'Seul\'deki Cheonggyecheon deresi bir otoyolun altından çıkarılıp 2005\'te şehir parkı yapıldı.' },
    'Edo (Tokyo)': { bugun: 'Tokyo, Japonya', kurulus: '1457 (Edo Kalesi)', wiki: 'Tokyo', onem: '18. yüzyılda dünyanın en büyük şehri.', ilginc: '"Tokyo" adı "Doğu başkenti" demek; 1868\'de Edo\'nun adı değiştirildi.' }
  };
  window.KULTUR = { tanrilar: [], olumler: [], roller: [], mumyalama: '', ic: { eslesme: {}, sahneler: {} }, bilim: { genel: '', cag: {} } };
  window.SINIRLAR = [];

  window.OLAYLAR = [
    { id: 'hakusukinoe', tur: 'savas', ad: 'Hakusukinoe (Baekgang) Savaşı', y: -663, ll: [36.0, 126.7], onem: 3, wiki: 'Battle of Baekgang', taraflar: ['Tang ve Silla', 'Yamato Japonya\'sı ve Baekje'], kazanan: 'Tang ve Silla', sonuc: 'Baekje sona erdi; Japonya kıtadan çekildi.' },
    { id: 'dannoura', tur: 'savas', ad: 'Dan-no-ura Deniz Savaşı', y: -1185, ll: [33.96, 130.95], onem: 4, wiki: 'Battle of Dan-no-ura', taraflar: ['Minamoto', 'Taira'], kazanan: 'Minamoto', sonuc: 'Genpei Savaşı bitti; samuray yönetimi başladı.' },
    { id: 'mogoljaponya', tur: 'savas', ad: 'Moğolların Japonya seferi', y: -1281, ll: [33.6, 130.3], onem: 5, wiki: 'Mongol invasions of Japan', taraflar: ['Kamakura şogunluğu', 'Yuan (Kubilay) ve Goryeo'], kazanan: 'Japonya', sonuc: 'Tayfun ("kamikaze") Moğol filosunu dağıttı.' },
    { id: 'hansando', tur: 'savas', ad: 'Hansando Deniz Savaşı', y: -1592, ll: [34.8, 128.5], onem: 4, wiki: 'Battle of Hansan Island', taraflar: ['Joseon (Yi Sun-sin)', 'Japonya'], kazanan: 'Joseon', sonuc: 'Kaplumbağa gemileri ve "turna kanadı" düzeni Japon ikmal yolunu kesti.' },
    { id: 'sekigahara', tur: 'savas', ad: 'Sekigahara Savaşı', y: -1600, ll: [35.36, 136.47], onem: 5, wiki: 'Battle of Sekigahara', taraflar: ['Doğu ordusu (Tokugawa İeyasu)', 'Batı ordusu (İşida Mitsunari)'], kazanan: 'Tokugawa', kuvvetler: 'Her iki tarafta ~80.000.', sonuc: '250 yıllık Tokugawa barışı.' },
    { id: 'tsusima', tur: 'savas', ad: 'Tsuşima Deniz Savaşı', y: -1905, ll: [34.5, 129.8], onem: 5, wiki: 'Battle of Tsushima', taraflar: ['Japonya (Togo)', 'Rusya'], kazanan: 'Japonya', sonuc: 'Bir Asya ülkesi modern çağda ilk kez bir Avrupa büyük gücünü yendi.' },
    { id: 'koresavasi', tur: 'savas', ad: 'Kore Savaşı', y: -1950, ll: [38.0, 127.0], onem: 5, wiki: 'Korean War', taraflar: ['Güney Kore, BM (ABD, Türkiye ve diğerleri)', 'Kuzey Kore, Çin'], sonuc: '1953 ateşkesi; yarımada hâlâ bölünmüş. Kunuri ve Kumyangjang-ni\'de Türk Tugayı savaştı.' },
    { id: 'hirosima', tur: 'savas', ad: 'Hiroşima ve Nagazaki', y: -1945, ll: [34.39, 132.45], onem: 5, wiki: 'Atomic bombings of Hiroshima and Nagasaki', taraflar: ['ABD', 'Japonya'], sonuc: 'Savaşta kullanılan ilk ve tek atom bombaları; ~200.000 ölü. Japonya 15 Ağustos\'ta teslim oldu.' },
    { id: 'meiji', tur: 'olay', ad: 'Meiji Restorasyonu', y: -1868, ll: [35.68, 139.75], onem: 5, wiki: 'Meiji Restoration', sonuc: 'Şogunluk sona erdi; Japonya hızla modernleşti.' },
    { id: 'hangilolay', tur: 'olay', ad: 'Hangıl ilan edildi', y: -1446, ll: [37.58, 126.98], onem: 4, wiki: 'Hunminjeongeum', sonuc: 'Halkın kolayca okuyup yazması için yaratılan alfabe; 9 Ekim Hangıl Günü.' },
    { id: 'kanto', tur: 'afet', alt: 'deprem', ad: 'Büyük Kanto depremi', y: -1923, ll: [35.33, 139.14], onem: 4, wiki: '1923 Great Kantō earthquake', sonuc: '~105.000 ölü; Tokyo ve Yokohama yangınlarla yıkıldı.' },
    { id: 'tohoku', tur: 'afet', alt: 'tsunami', ad: 'Tohoku depremi ve tsunamisi', y: -2011, ll: [38.3, 142.37], onem: 5, wiki: '2011 Tōhoku earthquake and tsunami', sonuc: '9,0 büyüklüğünde; ~18.000 ölü ve Fukuşima nükleer kazası.' }
  ];

  window.ULKE_SAYFA = window.ULKE_SAYFA || {};
  window.ULKE_SAYFA.japonya = {
    id: 'japonya', ad: 'Japonya ve Kore', ikon: '⛩️', kw: ['japonya', 'japan', 'kore', 'korea', 'samuray', 'şogun', 'kyoto', 'tokyo', 'seul', 'hangıl', 'joseon', 'meiji', 'hiroşima'],
    altBaslik: 'MÖ ~1000 – bugün · höyüklerden samuraylara, Hangıl\'dan K-pop\'a', kapakWiki: 'Himeji Castle', kapakAd: 'Himeji Kalesi', merkez: [36.5, 133], merkezZ: 4.4,
    ozet: ['<b>Japonya</b> ve <b>Kore</b>, Çin\'in komşusu olarak onun yazısını, Budizmini ve Konfüçyüsçülüğünü benimseyip kendine özgü kültürler kurdu.', 'Japonya\'da samuraylar 700 yıl yönetti; Kore\'de Joseon hanedanı 500 yıldan uzun sürdü. 20. yüzyılda savaş, sömürge ve bölünmeden sonra iki ülke de teknoloji devine dönüştü.'],
    bilgiKutusu: [['Tarih', 'MÖ ~1000 – bugün'], ['Önemli başkentler', 'Gyeongju, Nara, Kyoto, Kamakura, Edo/Tokyo, Hanyang/Seul'], ['Diller', 'Japonca, Korece'], ['Bugün', '3 ülke, ~200 milyon kişi']],
    donemler: { 'japonya-antik': 'Yayoi, Kofun, Kore\'nin Üç Krallığı ve Nara.', 'japonya-ortacag': 'Heian, samuraylar, Goryeo ve Joseon, Tokugawa.', 'japonya-modern': 'Meiji, savaş ve savaş sonrası mucizeler.' },
    kultur: [{ baslik: 'Yazı', ikon: '✍️', html: '<p>Japonca Çin karakterleri (kanji) ve iki hece alfabesiyle (hiragana, katakana) yazılır. Korece 1446\'da yaratılan Hangıl alfabesiyle yazılır.</p>' }, { baslik: 'İnanç', ikon: '⛩️', html: '<p>Japonya\'da Şinto ve Budizm; Kore\'de Budizm, Konfüçyüsçülük, bugün Hristiyanlık.</p>' }],
    figurler: [
      { id: 'himeji', ad: 'Himeji Kalesi', tur: 'yapı', wiki: 'Himeji Castle', ll: [34.8394, 134.6939], z: 80, yapim: '1601-1609', kim: 'İkeda Terumasa', durum: 'ayakta', durumYazi: 'Ayakta.', nerede: 'Hyogo', metin: 'Beyaz Balıkçıl Kalesi.', git: { place: 'japonya-ortacag', y: -1609, id: 'himeji' } },
      { id: 'todaiji', ad: 'Todai-ji', tur: 'yapı', wiki: 'Tōdai-ji', ll: [34.689, 135.8398], z: 80, yapim: '752', kim: 'Şomu', durum: 'ayakta', durumYazi: 'Ayakta.', nerede: 'Nara', metin: 'Büyük Buda.', git: { place: 'japonya-antik', y: -752, id: 'todaiji' } }
    ],
    kisiler: [
      { ad: 'Himiko', wiki: 'Himiko', yil: '~170-248', ozet: 'Şaman kraliçe.', y: -238 }, { ad: 'Prens Şotoku', wiki: 'Prince Shōtoku', yil: '574-622', ozet: 'Budizmin koruyucusu.', y: -604 },
      { ad: 'Murasaki Şikibu', wiki: 'Murasaki Shikibu', yil: '~973-1014', ozet: 'Genji Hikâyesi.', y: -1008 }, { ad: 'Kral Sejong', wiki: 'Sejong the Great', yil: '1397-1450', ozet: 'Hangıl\'ın yaratıcısı.', y: -1446 },
      { ad: 'Oda Nobunaga', wiki: 'Oda Nobunaga', yil: '1534-1582', ozet: 'Birleşmenin başlatıcısı.', y: -1575 }, { ad: 'Yi Sun-sin', wiki: 'Yi Sun-sin', yil: '1545-1598', ozet: 'Yenilmez amiral.', y: -1592 },
      { ad: 'Tokugawa İeyasu', wiki: 'Tokugawa Ieyasu', yil: '1543-1616', ozet: 'Edo şogunluğunun kurucusu.', y: -1600 }, { ad: 'Katsuşika Hokusai', wiki: 'Hokusai', yil: '1760-1849', ozet: 'Büyük Dalga.', y: -1831 }
    ],
    biliyorMuydunuz: ['Japonya\'nın imparatorluk hanedanı dünyanın kesintisiz süren en eski monarşisi sayılır.', 'Kore\'nin Jikji kitabı (1377) metal harflerle basılmış günümüze ulaşan en eski kitap; bugün Paris\'te.', '"Karaoke" Japonca "boş orkestra" demek.', 'Japonya\'da 8 milyondan fazla otomatik satış makinesi var: dünyanın en yoğun oranı.']
  };
})();
