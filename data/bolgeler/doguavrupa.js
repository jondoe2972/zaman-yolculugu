// Doğu Avrupa ve Rusya (Polonya, Litvanya, Letonya, Estonya, Belarus, Ukrayna, Moldova, Rusya ve Sibirya).
// Yıl: MÖ pozitif, MS negatif. Sahne (wx): batıdan doğuya
//   Krakov 800 · Malbork 1200 · Varşova 1100 · Vilnius 1500 · Minsk 1900 · Kiev 2400 · Kırım 2800 · Novgorod 3200
//   St. Petersburg 3400 · Moskova 4200 · Vladimir 4500 · Kazan 5300 · Volgograd 5600 · Yekaterinburg 6400 · Tobolsk 7000 · Novosibirsk 7600
// Kaynaklar: Hosking, "Russia and the Russians" (2011); Plokhy, "The Gates of Europe" (2015); Davies, "God's Playground" (2005);
//   Franklin & Shepard, "The Emergence of Rus 750-1200" (1996); Figes, "A People's Tragedy" (1996).
(() => {
  window.PLACES = window.PLACES || [];

  // ================= 1. İSKİTLER, GOTLAR VE SLAVLAR =================
  window.PLACES.push({
    id: 'doguavrupa-antik', sira: 1, kisa: 'İskitler, Hunlar ve Slavlar', aralikAd: 'MÖ 700 – MS 882',
    baslik: 'İskit altınları · Kırım\'ın Yunan şehirleri · Gotlar · Hunlar · Avarlar · Hazarlar · Slavlar',
    ulkeAlt: 'Karadeniz\'in kuzeyindeki bozkırdan ormanlara: İskitler, Sarmatlar, Gotlar, Hunlar, Hazarlar ve Slavlar (MÖ 700 – MS 882)',
    from: 700, to: -882, start: 400,
    not: 'Bilgiler büyük ölçüde Yunan, Bizans ve Arap kaynaklarına ve arkeolojiye dayanır.', baskent: 'Göçebe ordugâhlar; Pantikapaion (Kerç), İtil (Hazar)',
    sahne: { kizak: true, araba: [700, 200], katipYok: true, giyim: 'antik' },
    dynasties: [{ from: 700, to: 250, ad: 'İskitler', renk: '#a8822a' }, { from: 250, to: -375, ad: 'Sarmatlar ve Gotlar', renk: '#6a5a3a' }, { from: -375, to: -650, ad: 'Hunlar, Avarlar ve Slavlar', renk: '#7a3a2a' }, { from: -650, to: -882, ad: 'Hazarlar ve Slavlar', renk: '#3a6a5a' }],
    rulers: [
      { from: 700, to: 250, ad: 'İskit kralları', kisa: 'İskitler', kim: 'Karadeniz kuzeyinin atlı göçebeleri; Pers kralı Darius\'un seferini (MÖ 513) geri çekilerek boşa çıkardılar.' },
      { from: 250, to: -200, ad: 'Sarmatlar ve Kırım\'da Bosporos krallığı', kisa: 'Sarmatlar', kim: 'Doğudan gelen Sarmatlar İskitlerin yerini aldı. Kırım\'daki Yunan Bosporos krallığı Roma\'ya bağlandı.' },
      { from: -200, to: -375, ad: 'Gotlar (Ermanarik)', kisa: 'Gotlar', kim: 'İskandinavya\'dan geldiği anlatılan Germen Gotlar Karadeniz kuzeyinde bir krallık kurdu.' },
      { from: -375, to: -453, ad: 'Hunlar (Balamir, Attila)', kisa: 'Attila', kim: 'Hunlar 375 civarı Gotları yenip "Kavimler Göçü"nü başlattı. Attila\'nın imparatorluğu Ren\'den Karadeniz\'e uzandı.' },
      { from: -453, to: -567, ad: 'Slavların yayılışı', kisa: 'Slavlar', kim: 'Slav boyları Vistül ile Dinyeper arasından her yöne yayıldı: Balkanlara, Orta Avrupa\'ya, kuzeye.' },
      { from: -567, to: -681, ad: 'Avar Kağanlığı; Kubrat\'ın Büyük Bulgaristan\'ı', kisa: 'Avarlar', kim: 'Avarlar Macaristan ovasından Slavları yönetti. Kubrat Han Karadeniz kuzeyinde Bulgar boylarını birleştirdi.' },
      { from: -681, to: -862, ad: 'Hazar Kağanlığı ve Tuna Bulgarları', kisa: 'Hazarlar', kim: 'Türk Hazarlar Volga\'dan Kırım\'a uzandı; yöneticileri Yahudiliği kabul etti. Asparuh\'un Bulgarları Tuna\'ya geçti (681).' },
      { from: -862, to: -882, ad: 'Rurik (Novgorod)', kisa: 'Rurik', kim: 'Rus Kroniği\'ne göre İskandinav kökenli Varegler Novgorod\'a davet edildi; Rurik hanedanı başladı.' }
    ],
    eras: [
      { from: 700, to: 250, puan: { eko: 3, ordu: 4, istikrar: 3 }, baskent: 'Bozkırdaki kraliyet kurganları',
        gundem: 'İskitler bozkırın hâkimi; Yunanlar Karadeniz kıyısında Olbia, Hersonesos ve Pantikapaion gibi koloniler kurdu. İskitler tahıl ve köle karşılığında Yunan şarabı ve altın işçiliği alıyor.',
        savas: 'Atlı okçular ve "kavrulmuş toprak" taktiği.',
        ekonomi: 'Ukrayna\'nın kara toprağından (çernozyom) buğday Atina\'yı besliyor.',
        din: 'Ateş, gök ve savaş tanrıları; kurganlara gömülen krallar.',
        yasam: 'Kenevir buharı çadırları (Herodot\'a göre).',
        bilgi: 'Atina\'nın tahılının büyük bölümü MÖ 5-4. yüzyılda Karadeniz\'in kuzeyinden, bugünkü Ukrayna\'dan geliyordu.' },
      { from: 250, to: -375, puan: { eko: 3, ordu: 3, istikrar: 2 }, baskent: 'Pantikapaion; Got krallığı',
        gundem: 'Sarmatlar ve ardından Gotlar bölgeyi yönetti. Kırım\'daki Yunan şehirleri Roma\'nın kuzey ucu. Ormanlık kuzeyde Baltlar ve Finno-Ugor halkları avcılık ve tarımla yaşıyor.',
        savas: 'Sarmat zırhlı süvarisi (katafrakt) ve kadın savaşçılar.',
        ekonomi: 'Kehribar Yolu: Baltık\'tan Roma\'ya kehribar.',
        din: 'Gotlar 4. yüzyılda Hristiyan (Aryüs mezhebi) oldu.',
        yasam: 'Wulfila İncil\'i Gotçaya çevirdi.',
        bilgi: 'Yunan söylencelerindeki kadın savaşçılar "Amazonlar" Sarmat kadın savaşçılarından esinlenmiş olabilir: kadın mezarlarında silah bulundu.' },
      { from: -375, to: -650, puan: { eko: 2, ordu: 4, istikrar: 1 }, baskent: 'Hun ve Avar ordugâhları',
        gundem: 'Hunların gelişi Gotları batıya itti ve Roma İmparatorluğu\'nu sarstı. Attila\'nın ölümünden sonra Slavlar hızla yayıldı. Avar Kağanlığı Slav boylarını yönetti ve Konstantinopolis\'i kuşattı (626).',
        savas: 'Hun atlı okçuları; Avarların üzengili süvarisi.',
        ekonomi: 'Bizans altını haraç olarak bozkıra akıyor.',
        din: 'Slav tanrıları: Perun (gök gürültüsü), Veles, Mokoş.',
        yasam: 'Slav köyleri ahşap evler ve yarı toprak altı kulübeler.',
        bilgi: 'Üzengi Avrupa\'ya muhtemelen Avarlarla geldi (6. yüzyıl).' },
      { from: -650, to: -882, puan: { eko: 4, ordu: 4, istikrar: 3 }, baskent: 'İtil (Hazar), Novgorod',
        gundem: 'Hazar Kağanlığı Volga ticaret yolunu kontrol ediyor ve Arap ordularını Kafkasya\'da durdurdu. İskandinav Varegler nehirler üzerinden Bizans\'a ve Bağdat\'a kadar gidiyor. 862\'de Rurik Novgorod\'da.',
        savas: 'Hazar-Arap savaşları; Vareg korsanları.',
        ekonomi: 'Kürk, bal, mum ve köle karşılığında Abbasî gümüş dirhemleri: İskandinavya\'da on binlerce dirhem bulundu.',
        din: 'Hazar yönetici sınıfı Yahudiliği kabul etti; Kiril ve Metodiy Slav alfabesini yarattı (863).',
        yasam: 'Volga\'da İbn Fadlan Rus tüccarlarını anlattı (922).',
        bilgi: '"Rus" adının Vareglerin İsveç kıyısındaki "kürekçiler" anlamına gelen bir kelimeden türediği düşünülüyor.' }
    ],
    nufus: [[700, 3], [1, 5], [-500, 5], [-882, 6]],
    nufusNot: 'Doğu Avrupa ve Avrupa Rusyası için çok kaba tahminler.',
    dunyaOzet: { eko: 'Karadeniz tahılı Akdeniz\'i besliyor; sonra Volga yolu Bağdat gümüşünü kuzeye taşıyor.', askeri: 'Atlı göçebe orduları; Vareg savaşçıları.' },
    events: [
      { y: 650, t: 'Yunanlar Karadeniz\'de koloniler kuruyor', k: 'm' }, { y: 513, t: 'Darius\'un İskit seferi', k: 'm' }, { y: 400, t: 'Solokha kurganı', k: 'm' }, { y: 63, t: 'Mithridates Kırım\'da öldü', k: 'm' },
      { y: -375, t: 'Hunlar Gotları yendi', k: 'm' }, { y: -453, t: 'Attila öldü', k: 'm' }, { y: -567, t: 'Avarlar Macaristan\'da', k: 'm' }, { y: -632, t: 'Kubrat\'ın Büyük Bulgaristan\'ı', k: 'm' },
      { y: -681, t: 'Tuna Bulgar Hanlığı', k: 'm' }, { y: -737, t: 'Hazar-Arap savaşları', k: 'm' }, { y: -862, t: 'Rurik Novgorod\'da', k: 'm' }, { y: -863, t: 'Kiril ve Metodiy', k: 'm' },
      { y: 480, t: 'Salamis', k: 'w' }, { y: -476, t: 'Batı Roma\'nın sonu', k: 'w' }, { y: -800, t: 'Şarlman', k: 'w' }
    ],
    world: [{ from: 700, to: 146, yer: 'Yunanistan', t: 'Şehir devletleri; Karadeniz kolonileri.' }, { from: 27, to: -476, yer: 'Roma', t: 'Roma İmparatorluğu.' }, { from: -552, to: -744, yer: 'Bozkır', t: 'Göktürkler.' }, { from: -330, to: -882, yer: 'Bizans', t: 'Doğu Roma.' }],
    sites: [{ ad: 'OLBİA', wx: 2600 }, { ad: 'PANTİKAPAİON (KERÇ)', wx: 3000 }, { ad: 'HERSONESOS', wx: 2850 }, { ad: 'NOVGOROD', wx: 3200 }, { ad: 'İTİL (HAZAR)', wx: 5700 }, { ad: 'BÜYÜK BULGARİSTAN', wx: 4800 }],
    monuments: [
      { id: 'solokha', ad: 'Solokha kurganı', yer: 'Zaporijya, Ukrayna', wx: 2700, type: 'mound', b: 90, h: 18, start: 400, end: 390, vol: 4e4 },
      { id: 'hersonesos', ad: 'Hersonesos', yer: 'Sivastopol, Kırım', wx: 2850, type: 'greek', b: 70, h: 18, sutun: 6, start: 421, end: 400, vol: 4e4, ruin: -1399 }
    ],
    hizli: [{ ad: 'İskitler', y: 500 }, { ad: 'Solokha', y: 400 }, { ad: 'Sarmatlar', y: 200 }, { ad: 'Gotlar', y: -300 }, { ad: 'Hunlar', y: -375 }, { ad: 'Slavlar', y: -550 }, { ad: 'Hazarlar', y: -750 }, { ad: 'Rurik', y: -862 }],
    bilgi: {
      solokha: { ikon: '👑', yaptiran: 'İskit kralları', donem: 'MÖ ~400', mimar: '—', sure: '—', neden: 'Bir İskit kralının mezarı.', onem: 'İskit altın tarağının bulunduğu kurgan.', teknik: [['Yükseklik', '~18 m']], nasil: 'Toprak höyük altında mezar odaları.', bugun: 'Buluntular Ermitaj Müzesi\'nde.', ilginc: 'Altın tarağın üstünde savaşan üç İskit savaşçısı inanılmaz ayrıntıyla işlenmiş; Yunan ustalarının işi olduğu düşünülüyor.' },
      hersonesos: { ikon: '🏛️', yaptiran: 'Herakleialı Yunanlar', donem: 'MÖ 422/421\'den', mimar: '—', sure: '—', neden: 'Kırım\'da Yunan kolonisi.', onem: 'Geleneğe göre Kiev prensi Vladimir burada vaftiz edildi (988).', teknik: [['Kora (tarım alanı)', '~10.000 hektar, bölünmüş tarlalar']], nasil: 'Surlu şehir ve ızgara planlı tarlalar.', bugun: 'UNESCO Dünya Mirası (2013).', ilginc: 'Şehrin yeminli vatandaş yazıtında "şehre ihanet etmeyeceğim" sözü taşa kazınmış.' }
    },
    ulke: [
      { ad: 'Genel bakış', ikon: '🧭', html: '<p>Karadeniz\'in kuzeyindeki bozkır, Orta Asya\'dan gelen atlı halkların geçiş yoluydu: <b>İskitler, Sarmatlar, Hunlar, Avarlar, Bulgarlar, Hazarlar</b>. Kuzeydeki ormanlarda <b>Slavlar</b>, Baltlar ve Fin halkları yaşadı. 9. yüzyılda İskandinav Varegler nehir yollarını açtı ve Rus devletinin temelini attı.</p>' }
    ]
  });

  // ================= 2. KİEV RUS, ALTIN ORDA VE LEHİSTAN =================
  window.PLACES.push({
    id: 'doguavrupa-ortacag', sira: 2, kisa: 'Kiev Rus, Altın Orda ve Lehistan', aralikAd: 'MS 882 – 1547',
    baslik: 'Kiev Rus · Vladimir\'in vaftizi · Moğollar · Aleksandr Nevski · Grunwald · III. İvan',
    ulkeAlt: 'Kiev Rus\'tan Moğol-Tatar Altın Orda\'ya; Lehistan-Litvanya\'nın yükselişi ve Moskova (MS 882 – 1547)',
    from: -882, to: -1547, start: -1037,
    not: 'Tarihler büyük ölçüde Rus Kroniği\'ne dayanır.', baskent: 'Kiev, Novgorod, Vladimir, Saray (Altın Orda), Krakov, Vilnius, Moskova',
    sahne: { kizak: true, araba: false, giyim: 'cubbe' },
    dynasties: [{ from: -882, to: -1240, ad: 'Kiev Rus', renk: '#2a5a9a' }, { from: -1240, to: -1480, ad: 'Altın Orda; Lehistan-Litvanya', renk: '#a8822a' }, { from: -1480, to: -1547, ad: 'Moskova Büyük Knezliği', renk: '#8a2a2a' }],
    rulers: [
      { from: -882, to: -912, ad: 'Oleg', kisa: 'Oleg', kim: 'Kiev\'i başkent yaptı: "Rus şehirlerinin anası". Konstantinopolis\'e sefer yapıp ticaret antlaşması imzaladı (911).' },
      { from: -912, to: -980, ad: 'İgor, Olga ve Svyatoslav', kisa: 'Svyatoslav', kim: 'Prenses Olga Hristiyan oldu. Svyatoslav Hazar Kağanlığı\'nı yıktı (~965).' },
      { from: -980, to: -1015, ad: 'Büyük Vladimir', kisa: 'Vladimir', kim: 'Ortodoks Hristiyanlığı kabul etti (988) ve halkı Dinyeper\'de vaftiz ettirdi.' },
      { from: -1015, to: -1054, ad: 'Bilge Yaroslav', kisa: 'Yaroslav', kim: 'Kiev\'de Ayasofya Katedrali; ilk yasa kitabı (Russkaya Pravda). Kızlarını Fransa, Norveç ve Macaristan krallarıyla evlendirdi.' },
      { from: -1054, to: -1240, ad: 'Kiev ve Vladimir-Suzdal prensleri', kisa: 'Prensler', kim: 'Rus bölündü; Yuri Dolgoruki\'nin döneminde Moskova ilk kez kroniklerde anıldı (1147).' },
      { from: -1240, to: -1263, ad: 'Batu Han\'ın Altın Ordası; Aleksandr Nevski', kisa: 'Nevski', kim: 'Moğollar Kiev\'i yıktı (1240). Nevski Novgorod\'u İsveçlilere ve Töton Şövalyelerine karşı korudu ama Hana bağlılık bildirdi.' },
      { from: -1263, to: -1386, ad: 'Altın Orda hanları (Özbek Han); Litvanya büyük dükleri', kisa: 'Özbek Han', kim: 'Altın Orda İslam\'ı kabul etti. Litvanya, Rus topraklarının büyük bölümünü aldı. Moskova prensleri Hanın vergi toplayıcısı olarak güçlendi.' },
      { from: -1386, to: -1434, ad: 'Lehistan Kralı Jagiełło ve Litvanyalı Vytautas', kisa: 'Jagiełło', kim: 'Lehistan ve Litvanya birleşti; Grunwald\'da Töton Şövalyeleri yenildi (1410).' },
      { from: -1434, to: -1462, ad: 'Moskova\'da II. Vasili', kisa: 'II. Vasili', kim: 'Kazan ve Kırım hanlıkları Altın Orda\'dan ayrıldı.' },
      { from: -1462, to: -1505, ad: 'III. İvan (Büyük İvan)', kisa: 'III. İvan', kim: 'Novgorod\'u aldı, Ugra\'da Tatar boyunduruğunu sona erdirdi (1480), son Bizans imparatorunun yeğeni Sofya ile evlendi; Kremlin\'i yeniden yaptırdı.' },
      { from: -1505, to: -1533, ad: 'III. Vasili', kisa: 'III. Vasili', kim: 'Pskov ve Smolensk\'i aldı. "Moskova Üçüncü Roma\'dır" fikri yayıldı.' },
      { from: -1533, to: -1547, ad: 'Genç IV. İvan ve naipler', kisa: 'IV. İvan', kim: '3 yaşında tahta çıktı; boyarlar yönetti.' }
    ],
    eras: [
      { from: -882, to: -1054, puan: { eko: 4, ordu: 4, istikrar: 4 }, baskent: 'Kiev',
        gundem: 'Kiev Rus "Vareglerden Yunanlara" uzanan nehir yolunun efendisi. Vladimir 988\'de Ortodoks Hristiyanlığı seçti; Bizans kültürü, Kiril yazısı ve soğan kubbeli kiliseler geldi. Yaroslav döneminde Kiev Avrupa\'nın en büyük şehirlerinden.',
        savas: 'Druzina (prensin silahlı maiyeti); Peçenek göçebelerine karşı savaşlar.',
        ekonomi: 'Kürk, bal, balmumu, köle; Bizans ipeği ve şarabı.',
        din: 'Ortodoks Hristiyanlık; Perun heykeli Dinyeper\'e atıldı.',
        yasam: 'Ahşap şehirler, huş ağacı kabuğuna yazılmış mektuplar (Novgorod).',
        bilgi: 'Rus Kroniği\'ne göre Vladimir İslam\'ı reddetti çünkü "Rusların sevinci içmektir" dedi; anlatı tarihsel değil söylenceseldir.' },
      { from: -1054, to: -1240, puan: { eko: 4, ordu: 3, istikrar: 2 }, baskent: 'Kiev, Vladimir, Novgorod, Krakov',
        gundem: 'Kiev Rus prenslikler arasında bölündü. Kuzeydoğuda Vladimir-Suzdal, kuzeyde tüccar cumhuriyeti Novgorod güçlendi. Batıda Polonya krallığı ve Baltık\'ta Töton Şövalyeleri.',
        savas: 'Kıpçak (Kuman) akınları; "İgor\'un Seferi Destanı".',
        ekonomi: 'Novgorod Hansa Birliği ile ticaret yapıyor.',
        din: 'Ortodoks manastırları; Polonya\'da Katoliklik.',
        yasam: 'Novgorod\'da halk meclisi (veçe) prens seçiyor.',
        bilgi: 'Novgorod\'da bulunan 1.000\'den fazla huş kabuğu mektup, sıradan insanların bile okuma yazma bildiğini gösteriyor; biri bir çocuğun ödev karalamaları.' },
      { from: -1240, to: -1480, puan: { eko: 3, ordu: 4, istikrar: 2 }, baskent: 'Saray (Altın Orda), Moskova, Vilnius, Krakov',
        gundem: 'Batu Han\'ın Moğol-Türk ordusu Rus şehirlerini yıktı; Altın Orda 240 yıl vergi aldı. Moskova prensleri Hana yakın durarak güçlendi. Batıda Litvanya ve Lehistan Avrupa\'nın en büyük devletlerinden biri oldu.',
        savas: 'Buz Savaşı (1242), Kulikovo (1380), Grunwald (1410): Ortaçağ Avrupası\'nın en büyük savaşlarından.',
        ekonomi: 'Altın Orda\'nın başkenti Saray Volga ticaretinin merkezi.',
        din: 'Ortodoks kilisesi vergiden muaf tutuldu ve güçlendi; Altın Orda Müslüman oldu.',
        yasam: 'İkon ressamı Andrey Rublyov (Kutsal Üçleme, 1420\'ler).',
        bilgi: 'Rusçadaki "para" (dengi), "hazine" (kazna) ve "gümrük" (tamojnya) kelimeleri Tatar Türkçesinden geçti.' },
      { from: -1480, to: -1547, puan: { eko: 4, ordu: 4, istikrar: 4 }, baskent: 'Moskova, Krakov',
        gundem: 'Moskova Tatar egemenliğinden kurtuldu ve Rus topraklarını birleştirdi. İtalyan ustalar Kremlin\'in kırmızı tuğla surlarını yaptı. Krakov\'da Rönesans: Kopernik Jagiellon Üniversitesi\'nde okudu.',
        savas: 'Moskova-Litvanya savaşları; Kırım Hanlığı\'nın akınları.',
        ekonomi: 'Kürk ticareti, tahıl ihracatı (Lehistan, Gdansk üzerinden).',
        din: 'Moskova "Üçüncü Roma": Bizans\'ın mirasçısı fikri.',
        yasam: 'Lehistan\'da soylular demokrasisi (szlachta).',
        bilgi: 'Kopernik güneş merkezli sistemi anlatan kitabını 1543\'te, öldüğü yıl yayımladı.' }
    ],
    nufus: [[-882, 6], [-1200, 10], [-1300, 9], [-1400, 10], [-1547, 14]],
    nufusNot: 'Doğu Avrupa ve Avrupa Rusyası için kaba tahminler.',
    dunyaOzet: { eko: 'Nehir yolları Baltık\'ı Bizans\'a bağladı; Moğol barışı Avrasya ticaretini birleştirdi.', askeri: 'Druzina, şövalyeler, Moğol-Tatar süvarisi.' },
    events: [
      { y: -882, t: 'Kiev başkent', k: 'm' }, { y: -911, t: 'Bizans ile antlaşma', k: 'm' }, { y: -965, t: 'Hazar Kağanlığı yıkıldı', k: 'm' }, { y: -988, t: 'Vladimir\'in vaftizi', k: 'm' },
      { y: -1037, t: 'Kiev Ayasofya', k: 'm' }, { y: -1147, t: 'Moskova ilk kez anıldı', k: 'm' }, { y: -1240, t: 'Moğollar Kiev\'i yıktı', k: 'm' }, { y: -1242, t: 'Buz Savaşı', k: 'm' },
      { y: -1364, t: 'Krakov Üniversitesi', k: 'm' }, { y: -1380, t: 'Kulikovo', k: 'm' }, { y: -1410, t: 'Grunwald', k: 'm' }, { y: -1480, t: 'Ugra: Tatar boyunduruğunun sonu', k: 'm' },
      { y: -1495, t: 'Moskova Kremlini', k: 'm' }, { y: -1543, t: 'Kopernik\'in kitabı', k: 'm' },
      { y: -1054, t: 'Doğu-Batı kilise ayrılığı', k: 'w' }, { y: -1206, t: 'Cengiz Han', k: 'w' }, { y: -1453, t: 'İstanbul\'un fethi', k: 'w' }
    ],
    world: [{ from: -882, to: -1453, yer: 'Bizans', t: 'Kiev\'in dinî ve kültürel kaynağı.' }, { from: -1206, to: -1368, yer: 'Moğolistan', t: 'Moğol İmparatorluğu.' }, { from: -1299, to: -1547, yer: 'Osmanlı', t: 'Osmanlı; 1475\'te Kırım Hanlığı bağlandı.' }],
    sites: [{ ad: 'KRAKOV', wx: 800 }, { ad: 'GRUNWALD', wx: 1300 }, { ad: 'VİLNİUS', wx: 1500 }, { ad: 'KİEV', wx: 2400 }, { ad: 'NOVGOROD', wx: 3200 }, { ad: 'MOSKOVA', wx: 4200 }, { ad: 'VLADİMİR', wx: 4500 }, { ad: 'KULİKOVO', wx: 4300 }, { ad: 'KAZAN', wx: 5300 }, { ad: 'SARAY (ALTIN ORDA)', wx: 5800 }],
    monuments: [
      { id: 'kievayasofya', ad: 'Kiev Ayasofya Katedrali', yer: 'Kiev, Ukrayna', wx: 2400, type: 'church', b: 90, h: 30, renk: '#efe6d4', kubbe: '#d8b040', start: -1011, end: -1037, vol: 6e4 },
      { id: 'vladimirkatedral', ad: 'Vladimir Uspenski Katedrali', yer: 'Vladimir, Rusya', wx: 4500, type: 'church', b: 70, h: 33, renk: '#f2ecde', kubbe: '#d8b040', start: -1158, end: -1160, vol: 4e4 },
      { id: 'malbork', ad: 'Malbork Kalesi (Töton Şövalyeleri)', yer: 'Polonya', wx: 1200, type: 'gothic', b: 170, h: 48, renk: '#a8503a', start: -1274, end: -1300, vol: 1e5 },
      { id: 'kremlinmoskova', ad: 'Moskova Kremlini surları', yer: 'Moskova', wx: 4200, type: 'citadel', b: 260, h: 30, start: -1485, end: -1495, vol: 1.2e5 }
    ],
    hizli: [{ ad: 'Oleg', y: -882 }, { ad: 'Vaftiz', y: -988 }, { ad: 'Yaroslav', y: -1037 }, { ad: 'Moskova', y: -1147 }, { ad: 'Moğollar', y: -1240 }, { ad: 'Nevski', y: -1242 }, { ad: 'Kulikovo', y: -1380 }, { ad: 'Grunwald', y: -1410 }, { ad: 'Ugra', y: -1480 }, { ad: 'Kremlin', y: -1495 }],
    bilgi: {
      kievayasofya: { ikon: '⛪', yaptiran: 'Bilge Yaroslav', donem: '1011-1037 (tartışmalı)', mimar: 'Bizanslı ustalar', sure: '—', neden: 'Kiev Rus\'un ana katedrali; İstanbul\'daki Ayasofya\'ya öykünerek.', onem: 'Doğu Slav dünyasının en eski ayakta kiliselerinden.', teknik: [['Kubbe', '13 (bugün 19)'], ['Mozaik', '~260 m²']], nasil: 'Bizans mozaikleri ve freskleri; 17-18. yüzyılda Ukrayna Barok dış görünüm.', bugun: 'UNESCO Dünya Mirası (1990); müze.', ilginc: 'Duvarlarındaki 11. yüzyıl yazıları (grafitiler) arasında Yaroslav\'ın ölüm kaydı da var.' },
      vladimirkatedral: { ikon: '⛪', yaptiran: 'Andrey Bogolyubski', donem: '1158-1160 (1185-89 genişletildi)', mimar: '—', sure: '—', neden: 'Vladimir\'in yeni başkent katedrali.', onem: 'Moskova\'nın Uspenski Katedrali\'nin örneği.', teknik: [['Kubbe', '5 altın kubbe']], nasil: 'Beyaz kireçtaşı; Andrey Rublyov\'un freskleri (1408).', bugun: 'UNESCO Dünya Mirası (1992).', ilginc: 'Moskova\'nın büyük düklerinin taç giyme töreni 15. yüzyıla kadar burada yapıldı.' },
      malbork: { ikon: '🏰', yaptiran: 'Töton Şövalyeleri', donem: '1274-1300 ve sonrası', mimar: '—', sure: '~200 yıl genişletme', neden: 'Tarikatın merkezi.', onem: 'Taban alanı bakımından dünyanın en büyük kalesi; tuğladan Gotik mimarinin anıtı.', teknik: [['Alan', '~21 hektar']], nasil: 'Kırmızı tuğla Gotik kale; üç bölüm (Aşağı, Orta, Yukarı kale).', bugun: 'UNESCO Dünya Mirası (1997).', ilginc: 'İkinci Dünya Savaşı\'nda yarısı yıkıldı ve titizlikle yeniden yapıldı.' },
      kremlinmoskova: { ikon: '🏰', yaptiran: 'III. İvan', donem: '1485-1495 (surlar)', mimar: 'Pietro Antonio Solari ve Marco Ruffo (İtalyanlar)', sure: '~10 yıl', neden: 'Moskova\'nın kalesi ve iktidar merkezi.', onem: 'Rusya\'nın iktidarının simgesi.', teknik: [['Sur', '~2,2 km'], ['Kule', '20']], nasil: 'Milano\'daki Sforza Kalesi\'ni andıran kırlangıç kuyruğu mazgallar.', bugun: 'UNESCO Dünya Mirası (1990); Rusya cumhurbaşkanlığının merkezi.', ilginc: 'Kremlin kulelerindeki kırmızı yıldızlar 1937\'de takıldı; rüzgârda dönerek yük dengelenecek şekilde tasarlandı.' }
    },
    ulke: [
      { ad: 'Genel bakış', ikon: '🧭', html: '<p>882\'de Kiev merkezli <b>Kiev Rus</b> doğdu; 988\'de Ortodoks Hristiyanlığı benimsedi. 1240\'ta <b>Moğol-Tatar</b> istilası bölgeyi Altın Orda\'ya bağladı. Batıda <b>Lehistan</b> ve <b>Litvanya</b> birleşip büyük bir devlet oldu; doğuda <b>Moskova</b> güçlenip 1480\'de Tatar egemenliğinden kurtuldu.</p>' }
    ]
  });

  // ================= 3. ÇARLIK RUSYASI, LEHİSTAN VE SOVYETLER =================
  window.PLACES.push({
    id: 'doguavrupa-modern', sira: 3, modern: true, kisa: 'Çarlar, Sovyetler ve bugün', aralikAd: 'MS 1547 – bugün',
    baslik: 'Korkunç İvan · Büyük Petro · II. Katerina · 1812 · devrim · Stalin · Sovyetlerin sonu',
    ulkeAlt: 'Çarlık Rusyası\'ndan Rus İmparatorluğu\'na, Sovyetler Birliği\'nden bugünkü Doğu Avrupa\'ya (MS 1547 – bugün)',
    from: -1547, to: -2026, start: -1703,
    not: 'Tarihler kesindir (1918\'e kadar Rusya Jülyen takvimini kullanıyordu; burada Gregoryen yıllar verilmiştir). Hükümdar şeridi Rusya\'yı izler.', baskent: 'Moskova, 1712-1918 St. Petersburg, sonra Moskova; Varşova, Kiev, Minsk, Vilnius',
    sahne: { kizak: true, buhar: -1851, oto: -1920, ucak: -1925, turist: -1990, giyim: [[-1547, 'cubbe'], [-1880, 'modern']] },
    dynasties: [{ from: -1547, to: -1721, ad: 'Çarlık Rusyası', renk: '#8a2a2a' }, { from: -1721, to: -1917, ad: 'Rus İmparatorluğu', renk: '#a8822a' }, { from: -1917, to: -1991, ad: 'Sovyetler Birliği', renk: '#c81a1a' }, { from: -1991, to: -2026, ad: 'Bağımsız devletler', renk: '#2a5a9a' }],
    rulers: [
      { from: -1547, to: -1584, ad: 'IV. İvan (Korkunç İvan)', kisa: 'Korkunç İvan', kim: 'Kendine ilk kez "çar" unvanını verdi. Kazan (1552) ve Astrahan\'ı (1556) aldı; Aziz Vasil Katedrali. Gizli polisi (opriçnina) ve öfkesiyle ünlü.' },
      { from: -1584, to: -1613, ad: 'Fyodor, Boris Godunov ve Karışıklık Dönemi', kisa: 'Godunov', kim: 'Rurik hanedanı sona erdi; kıtlık, sahte çarlar ve Leh işgali (1610-1612).' },
      { from: -1613, to: -1682, ad: 'İlk Romanovlar (Mihail, Aleksey)', kisa: 'Romanovlar', kim: 'Romanov hanedanı 300 yıl sürecekti. Kazaklar Pasifik\'e ulaştı (1639); Ukrayna\'nın doğusu Rusya\'ya bağlandı (1654).' },
      { from: -1682, to: -1725, ad: 'I. Petro (Büyük Petro)', kisa: 'Petro', kim: 'Avrupa\'yı gezip donanma kurdu, sakalları vergilendirdi, St. Petersburg\'u kurdu (1703); Poltava\'da İsveç\'i yendi (1709).' },
      { from: -1725, to: -1762, ad: 'Petro\'dan sonraki çarlar ve çariçeler (Anna, Elizabeth)', kisa: 'Elizabeth', kim: 'Saray darbeleri; Moskova Üniversitesi (1755) ve Kışlık Saray.' },
      { from: -1762, to: -1796, ad: 'II. Katerina (Büyük Katerina)', kisa: 'Katerina', kim: 'Alman doğumlu çariçe. Osmanlı\'dan Kırım\'ı aldı (1783); Lehistan üç kez paylaşıldı (1772-1795) ve haritadan silindi.' },
      { from: -1796, to: -1825, ad: 'I. Pavel ve I. Aleksandr', kisa: 'I. Aleksandr', kim: 'Napolyon 1812\'de Moskova\'ya girdi ama yenilip geri çekildi; Rus ordusu Paris\'e kadar gitti.' },
      { from: -1825, to: -1855, ad: 'I. Nikola', kisa: 'I. Nikola', kim: 'Dekabrist ayaklanmasını bastırdı; Kırım Savaşı\'nda yenildi.' },
      { from: -1855, to: -1881, ad: 'II. Aleksandr', kisa: 'II. Aleksandr', kim: 'Serfliği kaldırdı (1861): 23 milyon köylü özgür oldu. Bir bombalı saldırıda öldürüldü.' },
      { from: -1881, to: -1894, ad: 'III. Aleksandr', kisa: 'III. Aleksandr', kim: 'Sert bir yönetim; Trans-Sibirya Demiryolu başladı (1891).' },
      { from: -1894, to: -1917, ad: 'II. Nikola', kisa: 'II. Nikola', kim: 'Japonya\'ya yenilgi, 1905 Devrimi, Birinci Dünya Savaşı. Şubat 1917\'de tahttan indi; 1918\'de ailesiyle öldürüldü.' },
      { from: -1917, to: -1924, ad: 'Vladimir Lenin', kisa: 'Lenin', kim: 'Ekim Devrimi (1917) ve iç savaş; Sovyetler Birliği kuruldu (1922). Polonya ve Baltık ülkeleri bağımsız oldu (1918).' },
      { from: -1924, to: -1953, ad: 'Josef Stalin', kisa: 'Stalin', kim: 'Zorla sanayileşme ve kolektifleştirme; Ukrayna\'da Holodomor kıtlığı (1932-33); Büyük Terör. İkinci Dünya Savaşı\'nda Almanya\'yı yendi; Doğu Avrupa Sovyet etkisine girdi.' },
      { from: -1953, to: -1985, ad: 'Kruşçev ve Brejnev', kisa: 'Brejnev', kim: 'Sputnik (1957) ve Gagarin (1961); Küba krizi (1962); Prag Baharı\'nın bastırılması (1968); durgunluk.' },
      { from: -1985, to: -1991, ad: 'Mihail Gorbaçov', kisa: 'Gorbaçov', kim: 'Glasnost ve perestroyka; Çernobil (1986); Berlin Duvarı\'nın yıkılması; SSCB 1991\'de dağıldı.' },
      { from: -1991, to: -1999, ad: 'Boris Yeltsin', kisa: 'Yeltsin', kim: 'Pazar ekonomisine sert geçiş; Çeçen savaşı. Polonya ve Baltık ülkeleri Batı\'ya yöneldi.' },
      { from: -1999, to: -2026, ad: 'Vladimir Putin', kisa: 'Putin', kim: 'Rusya\'nın uzun süreli lideri (2008-2012 arası başbakan). 2014\'te Kırım\'ı ilhak etti; 2022\'de Ukrayna\'ya tam ölçekli saldırı başlattı.' }
    ],
    eras: [
      { from: -1547, to: -1700, puan: { eko: 3, ordu: 4, istikrar: 2 }, baskent: 'Moskova; Krakov, sonra Varşova',
        gundem: 'Moskova Çarlığı Volga\'yı ve Sibirya\'yı aldı; Kazaklar 60 yılda Pasifik\'e ulaştı. Batıda Lehistan-Litvanya Birliği (1569) Avrupa\'nın en büyük devletlerinden; 1610\'da Leh ordusu Moskova\'ya girdi. Ukrayna Kazakları Hmelnitski ile ayaklandı (1648).',
        savas: 'Strelets tüfekçileri; Leh kanatlı süvarisi (husarya) Viyana önünde Osmanlı\'ya karşı (1683).',
        ekonomi: 'Sibirya kürkü devletin altını; köylüler serf olarak toprağa bağlandı.',
        din: 'Ortodoks kilisesinde reform ve bölünme (Eski İnananlar, 1666).',
        yasam: 'Ahşap izbalar, sobalı evler, kış boyunca kızakla yolculuk.',
        bilgi: 'Rus Kazakları Ural\'dan Pasifik\'e (~5.000 km) 1580-1639 arasında, nehirler ve kızaklarla ulaştı.' },
      { from: -1700, to: -1861, puan: { eko: 4, ordu: 5, istikrar: 3 }, baskent: 'St. Petersburg',
        gundem: 'Büyük Petro Rusya\'yı Avrupa\'ya çevirdi; St. Petersburg bataklık üzerinde yükseldi. II. Katerina Kırım\'ı ve Karadeniz kıyısını aldı, Lehistan haritadan silindi. 1812\'de Napolyon Moskova\'ya girdi ama "General Kış" yüzünden çekildi.',
        savas: 'Poltava (1709), Osmanlı-Rus savaşları, Borodino (1812), Kırım Savaşı (1853-1856).',
        ekonomi: 'Ural demiri, Ukrayna tahılı; serf emeği.',
        din: 'Petro patrikliği kaldırıp kiliseyi devlete bağladı.',
        yasam: 'Puşkin ve Rus edebiyatının doğuşu; saraylarda Fransızca konuşuluyor.',
        bilgi: 'St. Petersburg\'un yapımında on binlerce işçi bataklıkta öldü; şehre "kemikler üzerine kurulmuş şehir" denir.' },
      { from: -1861, to: -1917, puan: { eko: 4, ordu: 4, istikrar: 2 }, baskent: 'St. Petersburg',
        gundem: 'Serfliğin kaldırılması, demiryolları ve fabrikalar. Rus edebiyatı ve müziğinin altın çağı: Tolstoy, Dostoyevski, Çehov, Çaykovski. Ama yoksulluk, pogromlar ve devrimci hareketler; 1917\'de iki devrim çarlığı yıktı.',
        savas: 'Rus-Japon Savaşı (1904-05); Birinci Dünya Savaşı\'nda milyonlarca kayıp.',
        ekonomi: 'Trans-Sibirya Demiryolu (1891-1916): dünyanın en uzun demiryolu (~9.300 km).',
        din: 'Ortodoksluk; Yahudiler "yerleşim bölgesi"nde sınırlandırıldı.',
        yasam: 'Mendeleyev periyodik tabloyu yayımladı (1869); Rus balesi dünyaca ünlü.',
        bilgi: 'Ekim Devrimi Gregoryen takvime göre aslında 7 Kasım 1917\'de oldu; Rusya o zaman hâlâ Jülyen takvimini kullanıyordu.' },
      { from: -1917, to: -1953, puan: { eko: 3, ordu: 5, istikrar: 1 }, baskent: 'Moskova; Varşova',
        gundem: 'Bolşevikler iç savaşı kazandı ve SSCB\'yi kurdu. Stalin döneminde hızlı sanayileşme, kıtlıklar ve milyonlarca kişinin gulaglara gönderilmesi. İkinci Dünya Savaşı\'nda SSCB ~27 milyon kişi kaybetti ama Almanya\'yı yendi; Polonya bir kez daha yıkıldı ve sınırları batıya kaydırıldı.',
        savas: 'Stalingrad (1942-43), Leningrad kuşatması (872 gün), Kursk tank savaşı.',
        ekonomi: 'Beş yıllık planlar; ağır sanayi, kolektif çiftlikler.',
        din: 'Ateizm devlet politikası; kiliseler kapatıldı.',
        yasam: 'Ortak apartman daireleri (kommunalka), karne ve kuyruklar.',
        bilgi: 'Leningrad kuşatmasında günlük ekmek tayını 125 grama kadar düştü; yaklaşık 1 milyon sivil öldü.' },
      { from: -1953, to: -1991, puan: { eko: 3, ordu: 5, istikrar: 3 }, baskent: 'Moskova; Varşova Paktı başkentleri',
        gundem: 'Soğuk Savaş: SSCB uzay yarışını başlattı (Sputnik 1957, Gagarin 1961). Doğu Avrupa\'da Macaristan (1956), Çekoslovakya (1968) ve Polonya\'da Dayanışma Sendikası (1980) Sovyet yönetimine karşı çıktı. 1989\'da Doğu Bloku çöktü, 1991\'de SSCB dağıldı.',
        savas: 'Afganistan Savaşı (1979-1989); nükleer silahlanma.',
        ekonomi: 'Planlı ekonomi durgunlaştı; petrol gelirleri.',
        din: 'Polonyalı Papa II. Jean-Paul (1978) komünizme karşı moral kaynağı oldu.',
        yasam: 'Kruşçevka apartmanları, Lada otomobiller, dacha (yazlık).',
        bilgi: 'Baltık Yolu (1989): Estonya, Letonya ve Litvanya\'dan ~2 milyon kişi el ele tutuşarak 675 km\'lik bir insan zinciri oluşturdu.' },
      { from: -1991, to: -2026, puan: { eko: 4, ordu: 4, istikrar: 2 }, baskent: 'Moskova, Kiev, Varşova, Minsk, Vilnius, Riga, Tallinn, Kişinev',
        gundem: 'SSCB\'den 15 devlet çıktı. Polonya ve Baltık ülkeleri NATO ve AB\'ye katıldı (2004). Rusya petrol ve doğalgazla toparlandı. Ukrayna 2014\'te Kırım\'ın ilhakı ve Donbas savaşıyla, 2022\'den beri Rusya\'nın tam ölçekli saldırısıyla büyük bir savaş yaşıyor.',
        savas: 'Çeçen savaşları; 2022\'den beri Rusya-Ukrayna savaşı: İkinci Dünya Savaşı\'ndan beri Avrupa\'nın en büyük savaşı.',
        ekonomi: 'Rusya: enerji ihracatı; Polonya: AB içinde hızlı büyüme; Estonya: dijital devlet.',
        din: 'Ortodoksluk yeniden canlandı; Polonya\'da Katoliklik.',
        yasam: 'Estonya\'da vatandaşlar 2005\'ten beri internetten oy kullanabiliyor.',
        bilgi: 'Rusya 11 saat dilimine yayılan dünyanın en büyük ülkesi: Kaliningrad\'da akşam olurken Kamçatka\'da sabah olur.' }
    ],
    nufus: [[-1547, 14], [-1700, 25], [-1800, 50], [-1900, 140], [-1940, 200], [-1990, 290], [-2026, 235]],
    nufusNot: 'Avrupa Rusyası ve Sibirya, Ukrayna, Belarus, Polonya, Baltık ülkeleri ve Moldova toplamı; eski rakamlar kaba tahmindir. 1990\'dan sonra nüfus azaldı.',
    dunyaOzet: { eko: 'Rusya tahıl, kürk, sonra petrol ve doğalgazın büyük ihracatçısı.', askeri: 'Tüfek ve topçudan nükleer silahlara; dünyanın en büyük kara orduları.' },
    events: [
      { y: -1547, t: 'IV. İvan çar oldu', k: 'm' }, { y: -1552, t: 'Kazan alındı', k: 'm' }, { y: -1569, t: 'Lublin Birliği', k: 'm' }, { y: -1612, t: 'Moskova Lehlerden kurtarıldı', k: 'm' },
      { y: -1639, t: 'Kazaklar Pasifik\'te', k: 'm' }, { y: -1703, t: 'St. Petersburg kuruldu', k: 'm' }, { y: -1709, t: 'Poltava', k: 'm' }, { y: -1783, t: 'Kırım ilhak edildi', k: 'm' },
      { y: -1795, t: 'Lehistan haritadan silindi', k: 'm' }, { y: -1812, t: 'Napolyon Moskova\'da', k: 'm' }, { y: -1861, t: 'Serfliğin kaldırılması', k: 'm' }, { y: -1917, t: 'Ekim Devrimi', k: 'm' },
      { y: -1918, t: 'Polonya ve Baltık ülkeleri bağımsız', k: 'm' }, { y: -1932, t: 'Holodomor', k: 'm' }, { y: -1942, t: 'Stalingrad', k: 'm' }, { y: -1957, t: 'Sputnik', k: 'm' },
      { y: -1986, t: 'Çernobil', k: 'm' }, { y: -1989, t: 'Baltık Yolu; Doğu Bloku çöktü', k: 'm' }, { y: -1991, t: 'SSCB dağıldı', k: 'm' }, { y: -2004, t: 'Polonya ve Baltıklar AB\'de', k: 'm' }, { y: -2022, t: 'Rusya Ukrayna\'ya saldırdı', k: 'm' },
      { y: -1683, t: 'Viyana Kuşatması', k: 'w' }, { y: -1789, t: 'Fransız İhtilali', k: 'w' }, { y: -1923, t: 'Türkiye Cumhuriyeti', k: 'w' }
    ],
    world: [{ from: -1547, to: -1922, yer: 'Osmanlı', t: 'Rusya\'nın güneydeki büyük rakibi.' }, { from: -1789, to: -1815, yer: 'Fransa', t: 'İhtilal ve Napolyon.' }, { from: -1945, to: -1991, yer: 'Dünya', t: 'Soğuk Savaş: ABD ve SSCB.' }],
    sites: [{ ad: 'KRAKOV', wx: 800 }, { ad: 'VARŞOVA', wx: 1100 }, { ad: 'VİLNİUS', wx: 1500 }, { ad: 'MİNSK', wx: 1900 }, { ad: 'KİEV', wx: 2400 }, { ad: 'POLTAVA', wx: 2600 }, { ad: 'SİVASTOPOL', wx: 2850 }, { ad: 'ST. PETERSBURG', wx: 3400 }, { ad: 'MOSKOVA', wx: 4200 }, { ad: 'BORODİNO', wx: 4000 }, { ad: 'KAZAN', wx: 5300 }, { ad: 'STALİNGRAD', wx: 5600 }, { ad: 'URAL', wx: 6400 }, { ad: 'SİBİRYA', wx: 7300 }],
    monuments: [
      { id: 'aziz_vasil', ad: 'Aziz Vasil Katedrali', yer: 'Kızıl Meydan, Moskova', wx: 4280, type: 'church', kule: true, b: 70, h: 47, renk: '#c8503a', kubbe: '#3a9a5a', start: -1555, end: -1561, vol: 5e4 },
      { id: 'kisliksaray', ad: 'Kışlık Saray (Ermitaj)', yer: 'St. Petersburg', wx: 3400, type: 'museum', b: 220, h: 28, start: -1754, end: -1762, vol: 1.2e5 },
      { id: 'moskova', ad: 'Moskova', yer: 'Rusya', wx: 4100, type: 'modcity', b: 440, h: 130, n: 46, start: -1950, end: -2020, vol: 1.1e5 },
      { id: 'varsova', ad: 'Varşova ve Kültür ve Bilim Sarayı', yer: 'Polonya', wx: 1100, type: 'modcity', b: 360, h: 120, n: 36, start: -1952, end: -2020, vol: 8e4 }
    ],
    hizli: [{ ad: 'Korkunç İvan', y: -1552 }, { ad: 'Karışıklık', y: -1610 }, { ad: 'Petro', y: -1703 }, { ad: 'Katerina', y: -1783 }, { ad: '1812', y: -1812 }, { ad: 'Serflik bitti', y: -1861 }, { ad: 'Devrim', y: -1917 }, { ad: 'Stalingrad', y: -1942 }, { ad: 'Gagarin', y: -1961 }, { ad: '1991', y: -1991 }, { ad: 'Bugün', y: -2026 }],
    bilgi: {
      aziz_vasil: { ikon: '⛪', yaptiran: 'IV. İvan (Korkunç İvan)', donem: '1555-1561', mimar: 'Postnik Yakovlev (geleneğe göre)', sure: '~6 yıl', neden: 'Kazan\'ın fethini kutlamak.', onem: 'Rusya\'nın simgesi.', teknik: [['Kilise', '9 şapel, ortak bir temel üzerinde'], ['Yükseklik', '~47 m']], nasil: 'Her biri farklı desenli soğan kubbeler (renkler 17. yüzyılda eklendi).', bugun: 'UNESCO Dünya Mirası (1990); müze.', ilginc: 'Mimarın bir daha böylesini yapmasın diye kör edildiği söylencesi tarihî belgelerle desteklenmiyor.' },
      kisliksaray: { ikon: '🏛️', yaptiran: 'Çariçe Elizabeth', donem: '1754-1762', mimar: 'Bartolomeo Rastrelli', sure: '~8 yıl', neden: 'Çarların kışlık sarayı.', onem: 'Ermitaj: dünyanın en büyük sanat müzelerinden; 1917 Ekim Devrimi\'nde basıldı.', teknik: [['Oda', '~1.500'], ['Pencere', '~1.945'], ['Eser (Ermitaj)', '~3 milyon']], nasil: 'Rus Barok üslubu; yeşil-beyaz cephe.', bugun: 'Devlet Ermitaj Müzesi.', ilginc: 'Ermitaj\'da fareleri kovalamak için resmî görevli ~50 kedi yaşıyor; 18. yüzyıldan beri gelenek.' },
      moskova: { ikon: '🏙️', yaptiran: '—', donem: '1147\'den', mimar: '—', sure: '—', neden: 'Moskova nehri kıyısında.', onem: 'Avrupa\'nın en büyük şehirlerinden (~13 milyon).', teknik: [['Metro', '1935; saraya benzeyen istasyonlar']], nasil: 'Kremlin\'in çevresinde halkalar hâlinde büyüdü.', bugun: 'Rusya\'nın başkenti.', ilginc: 'Moskova metrosunun istasyonları avizeler, mozaikler ve mermerlerle "halkın sarayları" olarak tasarlandı.' },
      varsova: { ikon: '🏙️', yaptiran: '—', donem: '13. yy\'dan; 1596\'dan başkent', mimar: 'Kültür Sarayı: Lev Rudnev', sure: '—', neden: 'Vistül kıyısında başkent.', onem: 'İkinci Dünya Savaşı\'nda %85\'i yıkılan ve yeniden kurulan şehir.', teknik: [['Kültür ve Bilim Sarayı', '237 m, 1955']], nasil: 'Tarihî merkez eski resimlere (Canaletto) bakılarak yeniden yapıldı.', bugun: 'Polonya\'nın başkenti; eski şehri UNESCO Dünya Mirası.', ilginc: 'Eski Şehir\'in yeniden yapımında 18. yüzyıl ressamı Bernardo Bellotto\'nun ayrıntılı tabloları kullanıldı.' }
    },
    ulke: [
      { ad: 'Genel bakış', ikon: '🧭', html: '<p>1547\'de Korkunç İvan "çar" oldu; Rusya Sibirya\'yı ve Pasifik kıyısını aldı. <b>Büyük Petro</b> ve <b>II. Katerina</b> onu bir Avrupa büyük gücüne çevirdi; <b>Lehistan</b> 1795\'te haritadan silindi. 1917 devrimi <b>Sovyetler Birliği</b>ni doğurdu. 1991\'de SSCB dağıldı ve bölgede 10 bağımsız devlet çıktı.</p>' },
      { ad: 'Bugünkü ülkeler', ikon: '🗺️', html: '<ul><li><b>Rusya</b> (~146 milyon, Moskova)</li><li><b>Ukrayna</b> (Kiev), <b>Belarus</b> (Minsk), <b>Moldova</b> (Kişinev)</li><li><b>Polonya</b> (~37 milyon, Varşova)</li><li><b>Litvanya, Letonya, Estonya</b></li></ul>' }
    ]
  });

  window.BOLGE_TASI('doguavrupa');

  window.MISIR = {
    coords: { solokha: [47.38, 34.71], hersonesos: [44.6116, 33.4918], kievayasofya: [50.4529, 30.5143], vladimirkatedral: [56.1297, 40.4087], malbork: [54.0398, 19.0278], kremlinmoskova: [55.752, 37.6175], aziz_vasil: [55.7525, 37.6231], kisliksaray: [59.9398, 30.3146], moskova: [55.7558, 37.6173], varsova: [52.2318, 21.0058] },
    wiki: { solokha: 'Solokha', hersonesos: 'Chersonesus', kievayasofya: 'Saint Sophia Cathedral, Kyiv', vladimirkatedral: 'Dormition Cathedral, Vladimir', malbork: 'Malbork Castle', kremlinmoskova: 'Moscow Kremlin Wall', aziz_vasil: "Saint Basil's Cathedral", kisliksaray: 'Winter Palace', moskova: 'Moscow', varsova: 'Palace of Culture and Science' },
    bilgi: {}, alt: {},
    kureAdlari: [[58, 45, 'RUSYA', 'misir', 2.4], [60, 95, 'SİBİRYA', 'bolge', 2.2], [52, 20, 'POLONYA', 'bolge', 3.4], [49, 32, 'UKRAYNA', 'bolge', 3.2], [56.5, 24, 'BALTIK ÜLKELERİ', 'kucuk', 3.8],
      [60, 60, 'URAL DAĞLARI', 'kucuk', 3.2], [45.2, 34.2, 'KIRIM', 'kucuk', 4.5], [50, 31, 'Dinyeper', 'nehir', 5], [52, 21.2, 'Vistül', 'nehir', 6]],
    sehirler: [
      { ad: 'Kiev', ll: [50.4501, 30.5234], from: -482, to: -2026, b: [[-882, -1240], [-1991, -2026]], not: 'Kiev Rus\'un ve bugünkü Ukrayna\'nın başkenti.' },
      { ad: 'Novgorod', ll: [58.5228, 31.2698], from: -859, to: -2026, b: [[-1136, -1478]], not: 'Tüccar cumhuriyeti.' },
      { ad: 'Vladimir', ll: [56.1291, 40.4066], from: -1108, to: -2026, b: [[-1157, -1328]], not: 'Vladimir-Suzdal başkenti.' },
      { ad: 'Moskova', ll: [55.7558, 37.6173], from: -1147, to: -2026, b: [[-1328, -1712], [-1918, -2026]], not: 'Rusya\'nın başkenti.' },
      { ad: 'St. Petersburg', ll: [59.9311, 30.3609], from: -1703, to: -2026, b: [[-1712, -1918]], not: 'Rus İmparatorluğu\'nun başkenti.' },
      { ad: 'Krakov', ll: [50.0647, 19.945], from: -965, to: -2026, b: [[-1038, -1596]], not: 'Lehistan\'ın eski başkenti.' },
      { ad: 'Varşova', ll: [52.2297, 21.0122], from: -1300, to: -2026, b: [[-1596, -1795], [-1918, -2026]], not: 'Polonya\'nın başkenti.' },
      { ad: 'Vilnius', ll: [54.6872, 25.2797], from: -1323, to: -2026, b: [[-1323, -1795], [-1990, -2026]], not: 'Litvanya\'nın başkenti.' },
      { ad: 'Kazan', ll: [55.7963, 49.1088], from: -1005, to: -2026, b: [[-1438, -1552]], not: 'Kazan Hanlığı; bugün Tataristan.' },
      { ad: 'Saray (Altın Orda)', ll: [47.0, 47.0], from: -1250, to: -1400, b: [[-1250, -1395]], not: 'Altın Orda\'nın başkenti.' },
      { ad: 'Bahçesaray', ll: [44.7487, 33.8603], from: -1500, to: -2026, b: [[-1532, -1783]], not: 'Kırım Hanlığı\'nın başkenti.' },
      { ad: 'Minsk', ll: [53.9006, 27.559], from: -1067, to: -2026, b: [[-1991, -2026]], not: 'Belarus\'un başkenti.' }
    ],
    nil: { ikon: '🌊', title: 'Dinyeper, Volga ve büyük ova', sub: 'Nehirler, ormanlar ve bozkır', foto: 'Volga River', tabs: [{ ad: '🌊 Coğrafya', html: '<ul class="hap"><li><b>Volga</b> (~3.530 km) Avrupa\'nın en uzun nehri; Hazar Denizi\'ne dökülür. Ruslar ona "Volga Ana" der.</li><li><b>Dinyeper</b> Kiev\'den geçer; "Vareglerden Yunanlara" yolunun ana damarı.</li><li>Kuzeyde tayga ormanları, güneyde verimli kara topraklı bozkır.</li><li>Kışın nehirler donar ve kızak yolu olur; baharda karlar erince "rasputitsa" (çamur mevsimi) başlar.</li></ul>' }] },
    simgeler: [
      { id: 'de-iskit', ad: 'İskit altınları', ikon: '👑', wiki: 'Scythian art', git: { place: 'doguavrupa-antik', y: 400, id: 'solokha' }, ozet: 'Bozkırın altın sanatı.', hap: ['MÖ 7-3. yy.', 'Ermitaj\'da.'] },
      { id: 'de-kiev', ad: 'Kiev Ayasofya', ikon: '⛪', wiki: 'Saint Sophia Cathedral, Kyiv', git: { place: 'doguavrupa-ortacag', y: -1037, id: 'kievayasofya' }, ozet: 'Kiev Rus\'un katedrali.', hap: ['11. yy.', 'Bizans mozaikleri.'] },
      { id: 'de-malbork', ad: 'Malbork Kalesi', ikon: '🏰', wiki: 'Malbork Castle', git: { place: 'doguavrupa-ortacag', y: -1400, id: 'malbork' }, ozet: 'En büyük tuğla kale.', hap: ['13-15. yy.', 'Töton Şövalyeleri.'] },
      { id: 'de-kremlin', ad: 'Kremlin', ikon: '🏰', wiki: 'Moscow Kremlin', git: { place: 'doguavrupa-ortacag', y: -1495, id: 'kremlinmoskova' }, ozet: 'Rusya\'nın kalbi.', hap: ['Surlar 1485-1495.', '20 kule.'] },
      { id: 'de-vasil', ad: 'Aziz Vasil Katedrali', ikon: '⛪', wiki: "Saint Basil's Cathedral", git: { place: 'doguavrupa-modern', y: -1561, id: 'aziz_vasil' }, ozet: 'Renkli soğan kubbeler.', hap: ['1561.', 'Kızıl Meydan.'] },
      { id: 'de-petersburg', ad: 'St. Petersburg', ikon: '🏛️', wiki: 'Saint Petersburg', git: { place: 'doguavrupa-modern', y: -1762, id: 'kisliksaray' }, ozet: 'Petro\'nun Avrupa penceresi.', hap: ['1703.', 'Ermitaj.'] },
      { id: 'de-sputnik', ad: 'Sputnik ve Gagarin', ikon: '🚀', wiki: 'Sputnik 1', git: { place: 'doguavrupa-modern', y: -1957 }, ozet: 'Uzay çağı.', hap: ['Sputnik 1957.', 'Gagarin 1961.'] }
    ],
    bugun: '<p>Bölgede bugün ~235 milyon kişi yaşıyor. <b>Rusya</b> (~17 milyon km²) dünyanın en büyük ülkesi.</p><ul class="hap"><li><b>Diller:</b> Rusça, Ukraynaca, Lehçe, Belarusça, Litvanca, Letonca, Estonca, Tatarca.</li><li><b>AB ve NATO üyeleri:</b> Polonya, Litvanya, Letonya, Estonya.</li><li><b>2022\'den beri</b> Rusya-Ukrayna savaşı sürüyor.</li><li><b>Kültür:</b> Tolstoy, Dostoyevski, Çaykovski, Chopin, Marie Curie (Varşova doğumlu).</li></ul>'
  };
  window.SEHIR_BILGI = {
    'Kiev': { bugun: 'Kiev, Ukrayna', kurulus: '~482 (söylence: Kiy, Şçek, Horiv kardeşler)', wiki: 'Kyiv', onem: 'Doğu Slavların ilk büyük devletinin başkenti.', ilginc: 'Kiev metrosunun Arsenalna istasyonu ~105 metreyle dünyanın en derin metro istasyonu.' },
    'St. Petersburg': { bugun: 'Rusya', kurulus: '1703 (Büyük Petro)', wiki: 'Saint Petersburg', onem: '200 yıl Rus İmparatorluğu\'nun başkenti.', ilginc: 'Şehrin adı üç kez değişti: Petrograd (1914), Leningrad (1924) ve yeniden St. Petersburg (1991).' },
    'Krakov': { bugun: 'Polonya', kurulus: '~965\'te anıldı', wiki: 'Kraków', onem: 'Lehistan krallarının başkenti; Avrupa\'nın en iyi korunmuş eski şehirlerinden.', ilginc: 'Mariacki Kilisesi\'nin kulesinden her saat çalınan trompet melodisi aniden kesilir: söylenceye göre 13. yüzyılda Tatar okuyla vurulan bir trompetçinin anısına.' }
  };
  window.KULTUR = { tanrilar: [], olumler: [], roller: [], mumyalama: '', ic: { eslesme: {}, sahneler: {} }, bilim: { genel: '', cag: {} } };
  window.SINIRLAR = [];

  window.OLAYLAR = [
    { id: 'buzsavasi', tur: 'savas', ad: 'Buz Savaşı (Peypus Gölü)', y: -1242, ll: [58.68, 27.5], onem: 3, wiki: 'Battle on the Ice', taraflar: ['Novgorod (Aleksandr Nevski)', 'Livonya Şövalyeleri'], kazanan: 'Novgorod', sonuc: 'Şövalyelerin doğuya ilerleyişi durdu; Eisenstein\'ın ünlü filmine konu oldu.' },
    { id: 'kulikovo', tur: 'savas', ad: 'Kulikovo Savaşı', y: -1380, ll: [53.67, 38.66], onem: 4, wiki: 'Battle of Kulikovo', taraflar: ['Moskova (Dmitri Donskoy)', 'Altın Orda (Mamay)'], kazanan: 'Moskova', sonuc: 'Tatarlara karşı ilk büyük Rus zaferi; ama egemenlik 1480\'e kadar sürdü.' },
    { id: 'grunwald', tur: 'savas', ad: 'Grunwald Savaşı', y: -1410, ll: [53.48, 20.1], onem: 5, wiki: 'Battle of Grunwald', taraflar: ['Lehistan ve Litvanya (Jagiełło, Vytautas)', 'Töton Şövalyeleri'], kazanan: 'Lehistan-Litvanya', sonuc: 'Ortaçağ Avrupası\'nın en büyük savaşlarından; Tötonların gücü kırıldı.' },
    { id: 'poltava', tur: 'savas', ad: 'Poltava Savaşı', y: -1709, ll: [49.63, 34.57], onem: 5, wiki: 'Battle of Poltava', taraflar: ['Rusya (Büyük Petro)', 'İsveç (XII. Karl) ve Mazepa\'nın Kazakları'], kazanan: 'Rusya', sonuc: 'İsveç büyük güç olmaktan çıktı; XII. Karl Osmanlı\'ya (Bender) sığındı.' },
    { id: 'borodino', tur: 'savas', ad: 'Borodino Savaşı', y: -1812, ll: [55.52, 35.82], onem: 5, wiki: 'Battle of Borodino', taraflar: ['Fransa (Napolyon)', 'Rusya (Kutuzov)'], sonuc: 'Tek günde ~70.000 kayıp; Napolyon Moskova\'ya girdi ama şehir yanmıştı. Çekilişte Büyük Ordu neredeyse yok oldu.' },
    { id: 'leningrad', tur: 'savas', ad: 'Leningrad Kuşatması', y: -1941, ll: [59.93, 30.32], onem: 5, wiki: 'Siege of Leningrad', taraflar: ['SSCB', 'Almanya ve Finlandiya'], kazanan: 'SSCB', sonuc: '872 gün; ~1 milyon sivil açlıktan ve bombalardan öldü.' },
    { id: 'lublin', tur: 'antlasma', ad: 'Lublin Birliği', y: -1569, ll: [51.25, 22.57], onem: 4, wiki: 'Union of Lublin', taraflar: ['Lehistan Krallığı', 'Litvanya Büyük Dükalığı'], sonuc: 'Lehistan-Litvanya Birliği: Avrupa\'nın en büyük devletlerinden.' },
    { id: 'belovezha', tur: 'antlasma', ad: 'Belovej Anlaşmaları', y: -1991, ll: [52.57, 23.83], onem: 5, wiki: 'Belovezha Accords', taraflar: ['Rusya, Ukrayna, Belarus'], sonuc: 'Sovyetler Birliği\'nin varlığı sona erdi; Bağımsız Devletler Topluluğu.' },
    { id: 'vaftiz988', tur: 'olay', ad: 'Kiev\'in vaftizi', y: -988, ll: [50.45, 30.52], onem: 5, wiki: 'Christianization of Kievan Rus\'', sonuc: 'Ortodoks Hristiyanlık Doğu Slavların dini oldu.' },
    { id: 'ekimdevrimi', tur: 'olay', ad: 'Ekim Devrimi', y: -1917, ll: [59.94, 30.31], onem: 5, wiki: 'October Revolution', sonuc: 'Bolşevikler iktidarı aldı; dünyanın ilk komünist devleti.' },
    { id: 'holodomor', tur: 'afet', alt: 'kuraklik', ad: 'Holodomor', y: -1932, ll: [49.0, 32.0], onem: 5, wiki: 'Holodomor', sonuc: 'Sovyet kolektifleştirme politikaları sonucu Ukrayna\'da milyonlarca kişi açlıktan öldü.' },
    { id: 'tunguska', tur: 'afet', alt: 'kaza', ad: 'Tunguska olayı', y: -1908, ll: [60.89, 101.89], onem: 3, wiki: 'Tunguska event', sonuc: 'Bir göktaşı ya da kuyruklu yıldız havada patladı; 2.000 km² ormanı yere yatırdı.' }
  ];

  window.ULKE_SAYFA = window.ULKE_SAYFA || {};
  window.ULKE_SAYFA.doguavrupa = {
    id: 'doguavrupa', ad: 'Doğu Avrupa ve Rusya', ikon: '🪆', kw: ['rusya', 'russia', 'ukrayna', 'kiev', 'polonya', 'lehistan', 'litvanya', 'baltık', 'belarus', 'moskova', 'kremlin', 'çar', 'sovyet', 'sscb', 'stalin', 'petro', 'katerina', 'iskit', 'slav'],
    altBaslik: 'MÖ ~700 – bugün · İskitlerden Kiev Rus\'a, çarlardan Sovyetlere', kapakWiki: "Saint Basil's Cathedral", kapakAd: 'Aziz Vasil Katedrali', merkez: [53, 32], merkezZ: 3.2,
    ozet: ['<b>Doğu Avrupa</b>, Baltık\'tan Karadeniz\'e uzanan büyük ova ve ormanlardır; <b>Rusya</b> Ural\'ı aşıp Sibirya ile Pasifik\'e kadar uzanır.', 'İskitler ve bozkır halklarından sonra Slavlar, Kiev Rus, Lehistan-Litvanya ve Moskova yükseldi. Rus İmparatorluğu ve Sovyetler Birliği dünya tarihini derinden etkiledi.'],
    bilgiKutusu: [['Tarih', 'MÖ ~700 – bugün'], ['Önemli başkentler', 'Kiev, Novgorod, Vladimir, Krakov, Vilnius, Moskova, St. Petersburg, Varşova'], ['Diller', 'Rusça, Ukraynaca, Lehçe, Belarusça, Baltık dilleri'], ['Bugün', '~10 ülke, ~235 milyon kişi']],
    donemler: { 'doguavrupa-antik': 'İskitler, Gotlar, Hunlar, Hazarlar, Slavlar.', 'doguavrupa-ortacag': 'Kiev Rus, Altın Orda, Lehistan-Litvanya ve Moskova.', 'doguavrupa-modern': 'Çarlar, Sovyetler ve bugün.' },
    kultur: [{ baslik: 'Diller', ikon: '🗣️', html: '<p>Doğu Slav (Rusça, Ukraynaca, Belarusça) ve Batı Slav (Lehçe) dilleri; Baltık dilleri (Litvanca, Letonca); Fin dilleri (Estonca); Türk dilleri (Tatarca, Başkurtça, Kırım Tatarcası).</p>' }, { baslik: 'Din', ikon: '⛪', html: '<p>Ortodoks Hristiyanlık (Rusya, Ukrayna, Belarus), Katoliklik (Polonya, Litvanya), Protestanlık (Estonya, Letonya); Tataristan ve Kafkasya\'da İslam.</p>' }],
    figurler: [
      { id: 'aziz_vasil', ad: 'Aziz Vasil Katedrali', tur: 'yapı', wiki: "Saint Basil's Cathedral", ll: [55.7525, 37.6231], z: 85, yapim: '1555-1561', kim: 'Korkunç İvan', durum: 'ayakta', durumYazi: 'Müze.', nerede: 'Moskova', metin: 'Rengârenk soğan kubbeler.', git: { place: 'doguavrupa-modern', y: -1561, id: 'aziz_vasil' } },
      { id: 'kievayasofya', ad: 'Kiev Ayasofya', tur: 'yapı', wiki: 'Saint Sophia Cathedral, Kyiv', ll: [50.4529, 30.5143], z: 85, yapim: '11. yy', kim: 'Bilge Yaroslav', durum: 'ayakta', durumYazi: 'Müze.', nerede: 'Kiev', metin: 'Kiev Rus\'un katedrali.', git: { place: 'doguavrupa-ortacag', y: -1037, id: 'kievayasofya' } }
    ],
    kisiler: [
      { ad: 'Prenses Olga', wiki: 'Olga of Kiev', yil: '~890-969', ozet: 'Hristiyan olan ilk Kiev hükümdarı.', y: -957 }, { ad: 'Büyük Vladimir', wiki: 'Vladimir the Great', yil: '~958-1015', ozet: 'Rus\'un vaftizi.', y: -988 },
      { ad: 'Aleksandr Nevski', wiki: 'Alexander Nevsky', yil: '1221-1263', ozet: 'Novgorod\'un savunucusu.', y: -1242 }, { ad: 'Nikolaus Kopernik', wiki: 'Nicolaus Copernicus', yil: '1473-1543', ozet: 'Güneş merkezli sistem.', y: -1543 },
      { ad: 'Korkunç İvan', wiki: 'Ivan the Terrible', yil: '1530-1584', ozet: 'İlk çar.', y: -1552 }, { ad: 'Büyük Petro', wiki: 'Peter the Great', yil: '1672-1725', ozet: 'Rusya\'yı Avrupa\'ya açan çar.', y: -1703 },
      { ad: 'II. Katerina', wiki: 'Catherine the Great', yil: '1729-1796', ozet: 'Büyük Katerina.', y: -1783 }, { ad: 'Lev Tolstoy', wiki: 'Leo Tolstoy', yil: '1828-1910', ozet: 'Savaş ve Barış.', y: -1869 },
      { ad: 'Marie Curie', wiki: 'Marie Curie', yil: '1867-1934', ozet: 'Varşova doğumlu bilim insanı.', y: -1903 }, { ad: 'Yuri Gagarin', wiki: 'Yuri Gagarin', yil: '1934-1968', ozet: 'Uzaya çıkan ilk insan.', y: -1961 }
    ],
    biliyorMuydunuz: ['Baykal Gölü dünyanın en derin gölü ve yeryüzündeki donmamış tatlı suyun ~%20\'sini tutuyor.', 'Trans-Sibirya Demiryolu ~9.300 km: Moskova\'dan Vladivostok\'a 7 gün.', 'Polonya\'nın anayasası (3 Mayıs 1791) Avrupa\'nın ilk modern yazılı anayasası.', 'Rusça "çar" kelimesi Latince "Caesar"dan (Sezar) gelir.']
  };
})();
