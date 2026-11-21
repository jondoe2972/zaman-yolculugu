// Arabistan ve Levant (bugünkü Suriye, Lübnan, İsrail, Filistin, Ürdün, Suudi Arabistan, Yemen, Körfez ülkeleri).
// Yıl: MÖ pozitif, MS negatif. Sahne (wx): kuzeyden güneye, sonra Körfez'e
//   Biblos 800 · Sur 1100 · Krak 1400 · Şam 1700 · Palmira 2300 · Kudüs 2900 · Petra 3600 · Medine 5000 · Mekke 5600
//   Riyad 6000 · Marib 6600 · Maskat 7400 · Dubai 7900
// Kaynaklar: Hoyland, "Arabia and the Arabs" (2001); Kennedy, "The Prophet and the Age of the Caliphates" (2016);
//   Riley-Smith, "The Crusades" (2014); Rogan, "The Arabs" (2009); Encyclopaedia of Islam.
(() => {
  window.PLACES = window.PLACES || [];

  // ================= 1. FENİKE, İSRAİL VE KERVAN KRALLIKLARI =================
  window.PLACES.push({
    id: 'levant-antik', sira: 1, kisa: 'Fenikeliler, krallıklar ve kervanlar', aralikAd: 'MÖ 3000 – MS 610',
    baslik: 'Biblos · alfabe · Kudüs · Sebe · Petra · Palmira',
    ulkeAlt: 'Kenan şehirlerinden Fenikelilere, İsrail ve Yahuda\'dan Nabatilere ve Palmira\'ya (MÖ 3000 – MS 610)',
    from: 3000, to: -610, start: 1050,
    not: 'MÖ 1000 civarındaki krallık tarihleri büyük ölçüde dinî geleneğe dayanır; arkeolojik kanıt tartışmalıdır.', baskent: 'Tek başkent yok: Biblos, Sur, Kudüs, Samiriye, Marib, Petra, Palmira',
    sahne: { kizak: false, araba: [1600, 300], deve: [1000, -610], giyim: 'antik' },
    dynasties: [
      { from: 3000, to: 1200, ad: 'Kenan şehirleri', renk: '#7a6a3a' }, { from: 1200, to: 586, ad: 'Fenike ve İsrail krallıkları', renk: '#7a3a7a' },
      { from: 586, to: 63, ad: 'Pers ve Helenistik egemenlik', renk: '#a8822a' }, { from: 63, to: -330, ad: 'Roma, Nabatiler ve Palmira', renk: '#a8443a' },
      { from: -330, to: -610, ad: 'Bizans ve Arap krallıkları', renk: '#6a3a5a' }
    ],
    rulers: [
      { from: 3000, to: 1550, ad: 'Kenan ve Biblos şehir kralları', kisa: 'Biblos', kim: 'Biblos Mısır\'a Lübnan sediri satarak zenginleşti. Şehirler küçük krallıklar hâlinde.' },
      { from: 1550, to: 1200, ad: 'Mısır\'a bağlı Kenan kralları', kisa: 'Mısır', kim: 'Yeni Krallık firavunları bölgeye hâkim. Ugarit\'te ilk alfabelerden biri (30 işaretli çivi yazısı alfabe) kullanılıyor.' },
      { from: 1200, to: 1000, ad: 'Fenike şehirleri ve İsrail kabileleri', kisa: '?', kim: 'Tunç Çağı çöküşünden sonra kıyıda Fenike şehirleri (Sur, Sayda), iç kesimde İsrailoğulları, Filistliler ve Arami krallıkları.' },
      { from: 1000, to: 931, ad: 'Davud ve Süleyman (geleneğe göre)', kisa: 'Süleyman', kim: 'Tevrat\'a göre Davud Kudüs\'ü başkent yaptı, Süleyman ilk tapınağı inşa ettirdi. Sur kralı Hiram sedir ağacı gönderdi.' },
      { from: 931, to: 722, ad: 'İsrail ve Yahuda krallıkları', kisa: 'İki krallık', kim: 'Kuzeyde İsrail (Samiriye), güneyde Yahuda (Kudüs). Fenikeliler Kartaca\'yı kurdu (MÖ 814).' },
      { from: 722, to: 539, ad: 'Asur ve Babil egemenliği', kisa: 'Asur', kim: 'Asur İsrail\'i yıktı (MÖ 722); Babil Kudüs\'ü yıkıp halkı sürgün etti (MÖ 587).' },
      { from: 539, to: 332, ad: 'Pers satraplığı', kisa: 'Persler', kim: 'Kiros sürgündekilerin dönmesine izin verdi; Kudüs\'te İkinci Tapınak yapıldı. Fenike donanması Pers filosunun bel kemiği.' },
      { from: 332, to: 63, ad: 'İskender, Ptolemaioslar, Selevkoslar ve Makabiler', kisa: 'Selevkoslar', kim: 'İskender Sur\'u 7 ay kuşattı. Sonra bölge Mısır ve Suriye\'deki Yunan krallıkları arasında el değiştirdi; Makabi isyanı (MÖ 167).' },
      { from: 63, to: 4, ad: 'Roma egemenliği; Büyük Herodes', kisa: 'Herodes', kim: 'Pompeius bölgeyi Roma\'ya bağladı. Herodes Kudüs tapınağını büyüttü ve Masada kalesini yaptırdı.' },
      { from: 4, to: -106, ad: 'Roma valileri ve Nabati kralları', kisa: 'Nabatiler', kim: 'Hz. İsa\'nın yaşadığı dönem. Roma MS 70\'te Kudüs tapınağını yıktı. Nabati kralları Petra\'dan tütsü yolunu yönetti.' },
      { from: -106, to: -273, ad: 'Roma Arabistan eyaleti ve Palmira (Zenobia)', kisa: 'Zenobia', kim: 'Trajan Nabati krallığını eyalet yaptı. Palmira kraliçesi Zenobia Mısır\'a kadar uzandı; Aurelianus onu yendi (272).' },
      { from: -273, to: -610, ad: 'Bizans ve Arap krallıkları (Gassânîler, Lahmîler, Himyer)', kisa: 'Gassânîler', kim: 'Bizans\'a bağlı Hristiyan Arap Gassânîler, Sasanilere bağlı Lahmîler; Yemen\'de Himyer krallığı.' }
    ],
    eras: [
      { from: 3000, to: 1200, puan: { eko: 4, ordu: 2, istikrar: 3 }, baskent: 'Biblos, Ugarit, Hazor',
        gundem: 'Kıyıdaki Kenan şehirleri Mısır ile Mezopotamya arasında köprü. Biblos\'tan Mısır\'a sedir kütükleri ve zeytinyağı gidiyor. Ugarit kâtipleri dünyanın ilk alfabelerinden birini kullanıyor.',
        savas: 'Şehir surları ve Mısır firavunlarının seferleri: Megiddo (MÖ 1457) bilinen ayrıntılı ilk savaşlardan.',
        ekonomi: 'Sedir, şarap, zeytinyağı, cam boncuk. Arabistan\'da develer henüz yeni evcilleşiyor.',
        din: 'Kenan tanrıları: El, Baal (fırtına), Astarte. Yüksek yerlerde açık hava sunakları.',
        yasam: 'Kerpiç ve taş evler, zeytinlikler, bağlar. Ölü Deniz\'den tuz ve bitüm.',
        bilgi: '"Biblos" Yunanların papirüse verdiği addı, çünkü papirüs Mısır\'dan bu limandan gelirdi; "Bible" (İncil) kelimesi buradan türedi.' },
      { from: 1200, to: 586, puan: { eko: 5, ordu: 3, istikrar: 2 }, baskent: 'Sur, Sayda, Kudüs, Samiriye, Şam',
        gundem: 'Fenikeliler 22 harfli alfabeyi Akdeniz\'e yaydı: Yunan, Latin ve Arap alfabelerinin atası. Sur\'un gemileri Kartaca\'yı, Kadiz\'i kurdu. İç kesimde İsrail ve Yahuda krallıkları; güney Arabistan\'da Sebe (Saba) krallığı tütsü ticaretiyle zengin.',
        savas: 'Asur orduları defalarca bölgeye indi. Fenike şehirleri ağır haraçla bağımsızlığını korumaya çalıştı.',
        ekonomi: 'Sur moru: deniz salyangozundan elde edilen ve altından değerli boya. Sebe\'nin tütsüsü ve günlüğü develerle kuzeye taşınıyor.',
        din: 'İsraillilerde tek tanrılı inanç gelişiyor; Tevrat\'ın ilk metinleri. Fenikelilerde Melkart ve Baal.',
        yasam: 'Fenike gemileri Afrika\'nın çevresini dolaştı (Herodot\'a göre, MÖ ~600). Marib Barajı Sebe\'nin vahalarını suluyor.',
        bilgi: 'Bir kilo mor kumaş boyası için ~10.000 salyangoz gerekiyordu; bu yüzden mor, kralların rengi oldu.' },
      { from: 586, to: -106, puan: { eko: 5, ordu: 3, istikrar: 3 }, baskent: 'Petra, Kudüs, Antakya\'ya bağlı',
        gundem: 'Persler, Yunanlar ve Romalılar birbirini izledi. Çöldeki Nabatiler Petra\'yı kayaya oydular ve tütsü yolunu kontrol ettiler. Hz. İsa\'nın öğretisi Celile\'den yayıldı; Roma, isyandan sonra Kudüs tapınağını yıktı (MS 70).',
        savas: 'İskender\'in Sur kuşatması (MÖ 332); Masada kuşatması (MS 73-74).',
        ekonomi: 'Tütsü, baharat ve ipek kervanları. Nabatiler çölde yağmur suyunu sarnıçlarda toplama ustası.',
        din: 'Yahudilik İkinci Tapınak dönemi; Hristiyanlık doğdu. Nabati tanrısı Dushara.',
        yasam: 'Ölü Deniz Yazmaları Kumran\'da bu dönemde yazıldı. Petra\'da 800\'den fazla kaya mezarı.',
        bilgi: 'Petra\'nın ünlü "Hazine"si aslında bir kral mezarı; ön yüzündeki kurşun izleri, içinde hazine olduğunu sanan Bedevilerin attığı kurşunlardan.' },
      { from: -106, to: -610, puan: { eko: 4, ordu: 3, istikrar: 3 }, baskent: 'Bosra, Palmira, Kudüs; Yemen\'de Zafar',
        gundem: 'Palmira bir çöl vahası olmaktan Roma\'nın en zengin kervan şehirlerinden birine dönüştü. Hristiyanlık bölgenin dini oldu; Kudüs\'te Kutsal Kabir Kilisesi yapıldı (335). Arabistan\'da Mekke bir hac ve ticaret merkezi.',
        savas: 'Bizans ile Sasaniler bölge için savaşıyor; ikisi de Arap müttefik krallıklar kullanıyor.',
        ekonomi: 'Mekkeli Kureyş tüccarları kışın Yemen\'e, yazın Şam\'a kervan gönderiyor. Marib Barajı\'nın son çöküşü (~570) güney Arabistan\'ı zayıflattı.',
        din: 'Hristiyanlık, Yahudilik ve Arap putperestliği; Kâbe çevresinde yıllık panayır ve hac.',
        yasam: 'Arap şiiri altın çağında: en iyi kasideler (Muallakat) Ukaz panayırında okunuyordu.',
        bilgi: 'Palmira\'nın gümrük tarifesi (MS 137) bir taşa kazınmış: köleden parfüme kadar her malın vergisi yazılı. Bugün Rusya\'da, Ermitaj Müzesi\'nde.' }
    ],
    nufus: [[3000, 0.3], [1000, 1], [500, 1.5], [1, 3], [-300, 4], [-610, 4]],
    nufusNot: 'Levant ve Arap Yarımadası için kaba tahminler.',
    dunyaOzet: { eko: 'Akdeniz ile Hint Okyanusu arasındaki kara köprüsü: tütsü, baharat ve ipek buradan geçiyor.', askeri: 'Asur, Pers, Makedon, Roma ve Bizans orduları; çölde deve süvarisi.' },
    events: [
      { y: 2600, t: 'Biblos Mısır\'a sedir satıyor', k: 'm' }, { y: 1457, t: 'Megiddo Savaşı', k: 'm' }, { y: 1200, t: 'Tunç Çağı çöküşü', k: 'm' }, { y: 1050, t: 'Fenike alfabesi', k: 'm' },
      { y: 960, t: 'Kudüs\'te ilk tapınak (geleneğe göre)', k: 'm' }, { y: 814, t: 'Fenikeliler Kartaca\'yı kurdu', k: 'm' }, { y: 722, t: 'İsrail Krallığı yıkıldı', k: 'm' }, { y: 587, t: 'Kudüs yıkıldı', k: 'm' },
      { y: 332, t: 'İskender Sur\'u aldı', k: 'm' }, { y: 63, t: 'Pompeius Kudüs\'e girdi', k: 'm' }, { y: -30, t: 'Hz. İsa\'nın çarmıha gerilmesi (~30-33)', k: 'm' }, { y: -70, t: 'Kudüs tapınağı yıkıldı', k: 'm' },
      { y: -106, t: 'Nabati krallığı Roma eyaleti oldu', k: 'm' }, { y: -272, t: 'Zenobia yenildi', k: 'm' }, { y: -335, t: 'Kutsal Kabir Kilisesi', k: 'm' }, { y: -570, t: 'Marib Barajı yıkıldı; Fil Yılı', k: 'm' },
      { y: 2560, t: 'Büyük Piramit', k: 'w' }, { y: 539, t: 'Kiros Babil\'de', k: 'w' }, { y: 44, t: 'Sezar öldürüldü', k: 'w' }
    ],
    world: [
      { from: 3000, to: 1069, yer: 'Mısır', t: 'Firavunlar; Biblos\'un en büyük müşterisi.' }, { from: 911, to: 612, yer: 'Mezopotamya', t: 'Asur İmparatorluğu.' },
      { from: 509, to: -476, yer: 'Roma', t: 'Cumhuriyet ve imparatorluk.' }, { from: -330, to: -610, yer: 'Bizans', t: 'Doğu Roma, Konstantinopolis.' }
    ],
    sites: [{ ad: 'UGARİT', wx: 600 }, { ad: 'BİBLOS', wx: 800 }, { ad: 'SUR', wx: 1100 }, { ad: 'ŞAM', wx: 1700 }, { ad: 'PALMİRA', wx: 2300 }, { ad: 'KUDÜS', wx: 2900 }, { ad: 'ÖLÜ DENİZ', wx: 3150 }, { ad: 'PETRA', wx: 3600 }, { ad: 'MEKKE', wx: 5600 }, { ad: 'MARİB (SEBE)', wx: 6600 }],
    cliffs: [{ wx: 3600, w: 600, h: 120, peak: 0.5 }],
    monuments: [
      { id: 'biblos', ad: 'Biblos', yer: 'Cübeyl, Lübnan', wx: 800, type: 'city', wall: true, b: 220, n: 20, hk: 0.3, start: 3000, end: 2800, vol: 5e4 },
      { id: 'kudus', ad: 'Kudüs', yer: 'Kudüs', wx: 2850, type: 'city', wall: true, b: 260, n: 24, hk: 0.34, start: 1000, end: 960, vol: 6e4 },
      { id: 'marib', ad: 'Marib Barajı', yer: 'Marib, Yemen', wx: 6600, type: 'dam', b: 220, h: 16, start: 750, end: 700, vol: 6e4, ruin: -570 },
      { id: 'petra', ad: 'Petra: Hazine (El-Hazne)', yer: 'Ürdün', wx: 3600, type: 'greek', renk: '#d49a7a', sutun: 6, b: 50, h: 40, start: -10, end: -40, vol: 4e4 },
      { id: 'palmira', ad: 'Palmira: Bel Tapınağı', yer: 'Tedmür, Suriye', wx: 2300, type: 'greek', renk: '#e8d0a4', sutun: 8, b: 80, h: 24, start: -20, end: -32, vol: 6e4, ruin: -2015 }
    ],
    hizli: [{ ad: 'Biblos', y: 2600 }, { ad: 'Alfabe', y: 1050 }, { ad: 'Süleyman', y: 950 }, { ad: 'Kartaca', y: 814 }, { ad: 'Babil sürgünü', y: 587 }, { ad: 'Petra', y: -20 }, { ad: 'Hz. İsa', y: -30 }, { ad: 'Zenobia', y: -270 }, { ad: 'Marib', y: -570 }],
    bilgi: {
      biblos: { ikon: '⚓', yaptiran: 'Kenanlılar ve Fenikeliler', donem: 'MÖ ~5000\'den beri yerleşim', mimar: '—', sure: '—', neden: 'Mısır\'a sedir ihraç eden liman.', onem: 'Dünyanın kesintisiz yerleşilen en eski şehirlerinden; Fenike alfabesinin ilk yazıtları burada.', teknik: [['Kral Ahiram lahdi', 'MÖ ~1000, alfabeyle yazılmış ilk uzun yazıtlardan']], nasil: 'Deniz kıyısında küçük bir liman tepesi; sonradan Haçlı kalesi eklendi.', bugun: 'Cübeyl, Lübnan; UNESCO Dünya Mirası (1984).', ilginc: 'Mısır\'ın Eski Krallık dönemine ait gemiler "Biblos gemisi" diye anılırdı: uzun yolculuk yapan büyük gemi demekti.' },
      kudus: { ikon: '🕍', yaptiran: '—', donem: 'MÖ ~3000\'den beri', mimar: '—', sure: '—', neden: 'Dağ sırtında, sulu bir pınarın (Gihon) yanında.', onem: 'Yahudilik, Hristiyanlık ve İslam için kutsal şehir.', teknik: [['Eski şehir', '~0,9 km²'], ['Bugünkü surlar', 'Kanuni, 1537-1541']], nasil: 'Şehir defalarca yıkılıp eski katmanların üzerine yeniden kuruldu.', bugun: 'Eski Şehir UNESCO Dünya Mirası (1981).', ilginc: 'Kudüs tarih boyunca en az iki kez tamamen yıkıldı, 23 kez kuşatıldı.' },
      marib: { ikon: '💧', yaptiran: 'Sebe krallığı', donem: 'MÖ ~8. yy – MS ~570', mimar: '—', sure: 'Yüzyıllarca onarıldı', neden: 'Muson sellerini toplayıp Marib vahasını sulamak.', onem: 'Antik dünyanın en büyük mühendislik yapılarından; Kuran\'da Sebe selinden söz edilir.', teknik: [['Uzunluk', '~580 m'], ['Sulanan alan', '~100 km²']], nasil: 'Toprak ve taş set; iki yanında taş savaklar.', bugun: 'Kalıntılar ayakta; 1986\'da yakınına yeni bir baraj yapıldı.', ilginc: 'Barajın yıkılmasından sonra pek çok Yemenli Arap kabilesinin kuzeye göç ettiği anlatılır.' },
      petra: { ikon: '🏜️', yaptiran: 'Nabati kralları (muhtemelen IV. Aretas)', donem: 'MS 1. yy başı', mimar: '—', sure: '—', neden: 'Bir kral mezarı ya da tapınak.', onem: 'Petra\'nın simgesi; Dünyanın Yeni Yedi Harikası\'ndan.', teknik: [['Yükseklik', '~40 m'], ['Malzeme', 'Pembe kumtaşı (kayaya oyulmuş)']], nasil: 'Yukarıdan aşağıya doğru, iskele kurulmadan kaya oyularak yapıldı.', bugun: 'UNESCO Dünya Mirası (1985); yılda ~1 milyon ziyaretçi.', ilginc: 'Petra\'yı 1812\'de Batı dünyasına tanıtan İsviçreli gezgin Burckhardt, Arap kılığında "Şeyh İbrahim" adıyla dolaşıyordu.' },
      palmira: { ikon: '🏛️', yaptiran: 'Palmiralılar', donem: 'MS 32', mimar: '—', sure: '—', neden: 'Mezopotamya kökenli tanrı Bel\'in tapınağı.', onem: 'Orta Doğu\'nun en iyi korunmuş Roma dönemi tapınaklarındandı.', teknik: [['Avlu', '~205 × 210 m']], nasil: 'Yunan-Roma sütunları ile yerel çatı ve merlonların karışımı.', bugun: '2015\'te IŞİD tarafından havaya uçuruldu; yalnızca kapı ayakta.', ilginc: 'Palmira\'nın 82 yaşındaki eski eser müdürü Halid el-Esad, eserlerin yerini söylemediği için 2015\'te öldürüldü.' }
    },
    ulke: [
      { ad: 'Genel bakış', ikon: '🧭', html: '<p><b>Levant</b> ("güneşin doğduğu yer") Doğu Akdeniz kıyılarıdır: Suriye, Lübnan, İsrail, Filistin, Ürdün. Güneyinde <b>Arap Yarımadası</b> uzanır. Burası Mısır ile Mezopotamya, Akdeniz ile Hint Okyanusu arasındaki kavşaktır. Alfabe, tek tanrılı dinler ve büyük kervan şehirleri burada doğdu.</p>' },
      { ad: 'Halklar', ikon: '👥', html: '<ul><li><b>Kenanlılar ve Fenikeliler</b>: denizciler, alfabenin yayıcıları</li><li><b>İsrailliler</b>: Tevrat\'ın halkı</li><li><b>Aramiler</b>: Şam krallığı; Aramice Hz. İsa\'nın dili</li><li><b>Nabatiler</b>: Petra\'nın Arapları</li><li><b>Sebeliler ve Himyerliler</b>: güney Arabistan</li><li><b>Araplar</b>: çöl kabileleri, şairler ve tüccarlar</li></ul>' },
      { ad: 'Alfabe', ikon: '🔤', html: '<p>Fenike alfabesinin 22 harfi yalnızca ünsüzlerden oluşuyordu. Yunanlar ünlüleri ekledi; Aramice üzerinden İbrani ve Arap alfabeleri doğdu. "Alfabe" adı ilk iki harften gelir: <b>alef</b> (öküz) ve <b>bet</b> (ev).</p>' }
    ]
  });

  // ================= 2. İSLAM'IN DOĞUŞU, EMEVÎLER VE HAÇLILAR =================
  window.PLACES.push({
    id: 'levant-islam', sira: 2, kisa: 'İslam, Emevîler ve Haçlılar', aralikAd: 'MS 610 – 1517',
    baslik: 'Mekke ve Medine · Kubbetü\'s-Sahra · Emevî Camii · Selahaddin · Memlükler',
    ulkeAlt: 'İslam\'ın doğuşundan Emevîlere, Haçlı Seferleri\'nden Memlüklere (MS 610 – 1517)',
    from: -610, to: -1517, start: -691,
    not: 'Tarihler kesindir; Hz. Muhammed\'in hayatındaki tarihler İslam geleneğine göredir.', baskent: 'Medine, Şam, Kahire\'ye bağlı, Kudüs (Haçlı Krallığı)',
    sahne: { kizak: false, araba: false, deve: true, giyim: 'cubbe' },
    dynasties: [
      { from: -610, to: -661, ad: 'Hz. Muhammed ve Raşid halifeler', renk: '#2a7a4a' }, { from: -661, to: -750, ad: 'Emevî Halifeliği', renk: '#3a8a3a' },
      { from: -750, to: -969, ad: 'Abbasîler, Tolunoğulları ve İhşidîler', renk: '#1a1a1a' }, { from: -969, to: -1099, ad: 'Fatımîler ve Selçuklular', renk: '#2a6a5a' },
      { from: -1099, to: -1250, ad: 'Haçlılar ve Eyyubîler', renk: '#9a3a2a' }, { from: -1250, to: -1517, ad: 'Memlük Sultanlığı', renk: '#a8742e' }
    ],
    rulers: [
      { from: -610, to: -632, ad: 'Hz. Muhammed', kisa: 'Hz. Muhammed', kim: 'İslam geleneğine göre 610\'da ilk vahyi aldı; 622\'de Medine\'ye hicret etti, 630\'da Mekke\'ye döndü ve 632\'de vefat etti.' },
      { from: -632, to: -661, ad: 'Raşid halifeler (Hz. Ebubekir, Ömer, Osman, Ali)', kisa: 'Hz. Ömer', kim: 'Yermük (636) ile Suriye, Kudüs (638) ve Mısır alındı. Kuran Hz. Osman döneminde tek mushafta toplandı.' },
      { from: -661, to: -685, ad: 'Muaviye ve ilk Emevîler', kisa: 'Muaviye', kim: 'Şam valisi Muaviye halife oldu; başkent Şam. Hilafet babadan oğula geçmeye başladı.' },
      { from: -685, to: -705, ad: 'Abdülmelik', kisa: 'Abdülmelik', kim: 'Kubbetü\'s-Sahra\'yı yaptırdı (691), Arapçayı devlet dili yaptı ve ilk yazılı İslam sikkelerini bastırdı.' },
      { from: -705, to: -750, ad: 'I. Velid ve son Emevîler', kisa: 'Velid', kim: 'Emevî Camii (705-715). Halifelik İspanya\'dan İndus\'a uzandı. 750\'de Abbasî ihtilaliyle yıkıldı.' },
      { from: -750, to: -969, ad: 'Abbasî valileri, Tolunoğulları ve İhşidîler', kisa: 'Abbasîler', kim: 'Başkent Bağdat\'a taşınınca Şam ikinci plana düştü. Mısır\'daki Türk valiler (Tolunoğulları) Suriye\'yi de yönetti.' },
      { from: -969, to: -1071, ad: 'Fatımî halifeleri', kisa: 'Fatımîler', kim: 'Kahire merkezli Şiî Fatımîler Suriye ve Hicaz\'a hâkim oldu.' },
      { from: -1071, to: -1099, ad: 'Selçuklular', kisa: 'Selçuklular', kim: 'Türkmen beyi Atsız Kudüs\'ü aldı; Suriye\'de Selçuklu melikleri birbirleriyle çekişiyor.' },
      { from: -1099, to: -1174, ad: 'Kudüs Haçlı Krallığı; Zengîler (Nureddin)', kisa: 'Haçlılar', kim: 'Birinci Haçlı Seferi Kudüs\'ü aldı (1099). Musul\'dan Zengî ve oğlu Nureddin Müslüman cephesini birleştirdi.' },
      { from: -1174, to: -1193, ad: 'Selahaddin Eyyubî', kisa: 'Selahaddin', kim: 'Mısır ve Suriye\'yi birleştirdi; Hıttin\'de Haçlıları yenip Kudüs\'ü aldı (1187). Aslan Yürekli Richard\'la ateşkes yaptı.' },
      { from: -1193, to: -1250, ad: 'Eyyubîler', kisa: 'Eyyubîler', kim: 'Selahaddin\'in mirasçıları; II. Friedrich\'e Kudüs\'ü antlaşmayla geçici olarak verdiler (1229).' },
      { from: -1250, to: -1277, ad: 'Memlükler: Kutuz ve Baybars', kisa: 'Baybars', kim: 'Kıpçak kökenli köle askerler sultan oldu. Ayn Calut\'ta Moğolları ilk kez durdurdular (1260).' },
      { from: -1277, to: -1341, ad: 'Kalavun ve Nasır Muhammed', kisa: 'Kalavun', kim: 'Kalavun\'un oğlu Halil son Haçlı kalesi Akka\'yı aldı (1291).' },
      { from: -1341, to: -1517, ad: 'Geç Memlükler (Kayıtbay, Kansu Gavri)', kisa: 'Kayıtbay', kim: 'Kara Ölüm ve ekonomik gerileme. 1516\'da Mercidabık\'ta Yavuz Sultan Selim\'e yenildiler.' }
    ],
    eras: [
      { from: -610, to: -661, puan: { eko: 3, ordu: 5, istikrar: 3 }, baskent: 'Medine, sonra Kufe',
        gundem: 'Mekke\'de doğan İslam, Medine\'de bir devlete dönüştü. Hz. Muhammed\'in vefatından sonra 20 yıl içinde Arap orduları Bizans\'tan Suriye ve Mısır\'ı aldı, Sasani İmparatorluğu\'nu yıktı. Kudüs anlaşmayla teslim oldu (638).',
        savas: 'Bedir (624), Uhud (625), Hendek (627); sonra Yermük (636). Hızlı deve ve at birlikleri, çölü bir kalkan gibi kullanıyor.',
        ekonomi: 'Ganimet ve vergiler Medine\'ye akıyor. Divan teşkilatı ile askerlere düzenli maaş.',
        din: 'Kuran ve sünnet. Kıble Kudüs\'ten Mekke\'ye çevrildi (624). Fethedilen halklara din değiştirme zorunluluğu yok.',
        yasam: 'Medine\'de ilk mescit: hurma kütüklerinden direkler ve hurma yaprağı çatı.',
        bilgi: 'Hicrî takvimin başlangıcı olan Hicret (622), takvim olarak Hz. Ömer döneminde (~638) benimsendi.' },
      { from: -661, to: -969, puan: { eko: 5, ordu: 5, istikrar: 4 }, baskent: 'Şam (750\'den sonra Bağdat\'a bağlı)',
        gundem: 'Emevîler Şam\'dan İspanya\'dan Orta Asya\'ya uzanan bir imparatorluk yönetti. Kubbetü\'s-Sahra ve Emevî Camii Bizans ustalarının mozaikleriyle süslendi. Abbasîlerden sonra bölge Bağdat\'ın gölgesinde kaldı.',
        savas: 'Bizans\'a karşı her yaz akınlar; İstanbul kuşatmaları (674-678, 717-718).',
        ekonomi: 'Dinar ve dirhem; çöl köşkleri (Kusayr Amra) ve tarım arazileri. Hac yolu ticareti.',
        din: 'Arapça hem din hem yönetim dili oldu. Hristiyanlar hâlâ nüfusun büyük bölümü.',
        yasam: 'Kusayr Amra hamamının duvarlarında av, müzik ve yıldız haritası freskleri.',
        bilgi: 'Kubbetü\'s-Sahra İslam dünyasının bugün ayakta olan en eski büyük anıtıdır (691).' },
      { from: -969, to: -1250, puan: { eko: 4, ordu: 4, istikrar: 1 }, baskent: 'Kahire\'ye bağlı; Kudüs (Haçlılar), Şam (Eyyubîler)',
        gundem: 'Fatımîler, Selçuklular ve sonra Avrupa\'dan gelen Haçlılar. 1099\'da Kudüs Haçlıların eline geçti ve korkunç bir katliam yaşandı. Selahaddin 1187\'de şehri geri aldı ve halkına dokunmadı.',
        savas: 'Ağır zırhlı Frank şövalyeleri ve Türk atlı okçuları. Krak des Chevaliers gibi devasa Haçlı kaleleri. Hıttin\'de susuz kalan Haçlı ordusu yok oldu.',
        ekonomi: 'Venedik ve Cenova tüccarları Akka ve Sur limanlarında. Şeker kamışı tarımı Avrupa\'ya şekeri tanıttı.',
        din: 'Haçlı Seferleri; tapınak şövalyeleri ve hastane şövalyeleri. Kudüs üç din için savaşın merkezi.',
        yasam: 'Şam\'da medreseler ve bimaristanlar (Nureddin Hastanesi). Usame b. Münkız\'ın anıları Frankları gözler önüne seriyor.',
        bilgi: 'Haçlılar Avrupa\'ya şekeri, limonu, kayısıyı ve damasko kumaşını ("Şam kumaşı") götürdü.' },
      { from: -1250, to: -1517, puan: { eko: 4, ordu: 5, istikrar: 3 }, baskent: 'Kahire\'ye bağlı (Şam, Halep naiplikleri)',
        gundem: 'Memlükler Moğolları Ayn Calut\'ta durdurdu ve son Haçlı kalelerini aldı. Kara Ölüm (1348) nüfusu azalttı. Timur 1400\'de Şam\'ı yağmaladı.',
        savas: 'Memlük atlı okçuları dünyanın en iyi süvarileri arasında; ama barut ve tüfeği geç benimsediler.',
        ekonomi: 'Hint Okyanusu baharatı Kızıldeniz\'den Kahire\'ye ve Venedik\'e. Portekiz\'in Ümit Burnu yolunu açması (1498) bu ticareti sarstı.',
        din: 'Sünnî medreseler; Hicaz\'ın koruyuculuğu Memlüklerde. İbn Teymiyye Şam\'da yaşadı.',
        yasam: 'Şam çeliği, cam lambalar ve mozaikler. Hac kervanları Kahire ve Şam\'dan Mekke\'ye.',
        bilgi: 'Ünlü gezgin İbn Battuta 1348\'de Şam\'da vebanın bir günde 2.400 kişiyi öldürdüğünü yazar.' }
    ],
    nufus: [[-610, 4], [-750, 5], [-1000, 5], [-1300, 5], [-1350, 3.5], [-1517, 4]],
    nufusNot: 'Levant ve Arap Yarımadası için kaba tahminler.',
    dunyaOzet: { eko: 'İslam dünyası Akdeniz ile Hint Okyanusu ticaretini birleştirdi; Bağdat ve Kahire dünyanın en büyük şehirlerinden.', askeri: 'Atlı okçular, ağır zırhlı şövalyeler, kaleler ve kuşatma makineleri.' },
    events: [
      { y: -610, t: 'İlk vahiy (geleneğe göre)', k: 'm' }, { y: -622, t: 'Hicret', k: 'm' }, { y: -630, t: 'Mekke\'nin fethi', k: 'm' }, { y: -632, t: 'Hz. Muhammed\'in vefatı', k: 'm' },
      { y: -636, t: 'Yermük Savaşı', k: 'm' }, { y: -638, t: 'Kudüs teslim oldu', k: 'm' }, { y: -661, t: 'Emevîler; başkent Şam', k: 'm' }, { y: -691, t: 'Kubbetü\'s-Sahra', k: 'm' },
      { y: -715, t: 'Emevî Camii tamamlandı', k: 'm' }, { y: -750, t: 'Abbasî ihtilali', k: 'm' }, { y: -1099, t: 'Haçlılar Kudüs\'ü aldı', k: 'm' }, { y: -1187, t: 'Hıttin ve Kudüs\'ün geri alınması', k: 'm' },
      { y: -1260, t: 'Ayn Calut', k: 'm' }, { y: -1291, t: 'Akka düştü: Haçlıların sonu', k: 'm' }, { y: -1400, t: 'Timur Şam\'ı yağmaladı', k: 'm' }, { y: -1516, t: 'Mercidabık', k: 'm' },
      { y: -732, t: 'Poitiers', k: 'w' }, { y: -1071, t: 'Malazgirt', k: 'w' }, { y: -1453, t: 'İstanbul\'un fethi', k: 'w' }, { y: -1492, t: 'Kolomb Amerika\'da', k: 'w' }
    ],
    world: [
      { from: -610, to: -1453, yer: 'Bizans', t: 'Kuzeydeki büyük komşu.' }, { from: -750, to: -1258, yer: 'Bağdat', t: 'Abbasî Halifeliği.' }, { from: -969, to: -1517, yer: 'Mısır', t: 'Fatımîler, Eyyubîler, Memlükler; Kahire.' },
      { from: -1206, to: -1368, yer: 'Moğolistan', t: 'Moğol İmparatorluğu.' }, { from: -1299, to: -1517, yer: 'Anadolu', t: 'Osmanlı yükseliyor.' }
    ],
    sites: [{ ad: 'HALEP', wx: 1300 }, { ad: 'KRAK DES CHEVALİERS', wx: 1400 }, { ad: 'ŞAM', wx: 1700 }, { ad: 'AKKA', wx: 2500 }, { ad: 'KUDÜS', wx: 2900 }, { ad: 'HITTİN', wx: 2650 }, { ad: 'KERAK', wx: 3400 }, { ad: 'MEDİNE', wx: 5000 }, { ad: 'MEKKE', wx: 5600 }],
    monuments: [
      { id: 'kubbetussahra', ad: 'Kubbetü\'s-Sahra', yer: 'Kudüs', wx: 2960, type: 'mosque', minare: 0, b: 60, h: 36, kubbe: '#d8b040', renk: '#4a7ab0', start: -688, end: -691, vol: 6e4 },
      { id: 'emevicamii', ad: 'Emevî Camii', yer: 'Şam, Suriye', wx: 1700, type: 'mosque', minare: 3, b: 150, h: 45, kubbe: '#9aa6ae', renk: '#e2d4b6', start: -705, end: -715, vol: 1.2e5 },
      { id: 'krak', ad: 'Krak des Chevaliers (Hısnü\'l-Ekrad)', yer: 'Humus yakını, Suriye', wx: 1400, type: 'citadel', tepe: true, b: 170, h: 40, start: -1142, end: -1170, vol: 1e5 }
    ],
    hizli: [{ ad: 'Hicret', y: -622 }, { ad: 'Yermük', y: -636 }, { ad: 'Kubbetü\'s-Sahra', y: -691 }, { ad: 'Emevî Camii', y: -715 }, { ad: 'Haçlılar', y: -1099 }, { ad: 'Hıttin', y: -1187 }, { ad: 'Ayn Calut', y: -1260 }, { ad: 'Akka', y: -1291 }, { ad: 'Mercidabık', y: -1516 }],
    bilgi: {
      kubbetussahra: { ikon: '🟡', yaptiran: 'Emevî halifesi Abdülmelik', donem: '688-691', mimar: 'Raca b. Hayve ve Yezid b. Selam (gözetmenler)', sure: '~3 yıl', neden: 'Hz. Muhammed\'in Mirac\'a yükseldiğine inanılan kayanın üzerinde.', onem: 'Ayakta kalan en eski büyük İslam anıtı.', teknik: [['Kubbe çapı', '~20 m'], ['Yükseklik', '~35 m'], ['Plan', 'Sekizgen']], nasil: 'Bizans martyriumlarına benzer sekizgen plan; içi altın zeminli mozaiklerle kaplı.', bugun: 'Kudüs Eski Şehri, Harem-i Şerif.', ilginc: 'Dışındaki çiniler Kanuni Sultan Süleyman döneminde (16. yy) eklendi; altın kaplama 1993\'te Ürdün Kralı Hüseyin\'in bağışıyla yenilendi.' },
      emevicamii: { ikon: '🕌', yaptiran: 'Halife I. Velid', donem: '705-715', mimar: '—', sure: '~10 yıl', neden: 'Şam\'ın ulu camisi; eski Jüpiter tapınağı ve Vaftizci Yahya Kilisesi\'nin yerinde.', onem: 'İslam mimarisinin ilk büyük camilerinden; birçok caminin örneği oldu.', teknik: [['Boyut', '157 × 97 m'], ['Minare', '3']], nasil: 'Bizans ustaları ve mozaikçileri çalıştı; avlu duvarlarında cennet bahçesi mozaikleri.', bugun: 'Ayakta; içinde Hz. Yahya\'nın başının bulunduğuna inanılan türbe.', ilginc: 'Doğudaki minarenin adı "İsa Minaresi": geleneğe göre Hz. İsa kıyamet öncesi buraya inecek.' },
      krak: { ikon: '🏰', yaptiran: 'Hastane Şövalyeleri', donem: '1142-1170 (genişletmeler 1271\'e kadar)', mimar: '—', sure: '—', neden: 'Humus boşluğunu korumak.', onem: 'Ortaçağ askeri mimarisinin en iyi korunmuş örneklerinden.', teknik: [['Garnizon', '~2.000 asker'], ['Surlar', 'Çift sur']], nasil: 'Tepenin üstünde iç içe iki sur; iç sur dış surdan yüksek.', bugun: 'UNESCO Dünya Mirası; Suriye savaşında hasar gördü, onarılıyor.', ilginc: 'Baybars 1271\'de kaleyi sahte bir mektupla aldı: şövalyelere komutanlarının teslim olmalarını emrettiği bir mektup gönderdi.' }
    },
    ulke: [
      { ad: 'Genel bakış', ikon: '🧭', html: '<p>7. yüzyılda <b>Mekke</b> ve <b>Medine</b>\'de doğan İslam, kısa sürede Atlas Okyanusu\'ndan Çin sınırına yayıldı. <b>Emevîler</b> Şam\'dan yönetti. Sonra bölge Bağdat ve Kahire\'nin gölgesinde kaldı, 200 yıl boyunca <b>Haçlı Seferleri</b> yaşandı ve <b>Memlükler</b> Moğolları durdurdu.</p>' },
      { ad: 'Kutsal şehirler', ikon: '🕋', html: '<ul><li><b>Mekke</b>: Kâbe; her yıl hac</li><li><b>Medine</b>: Hz. Muhammed\'in kabri, Mescid-i Nebevî</li><li><b>Kudüs</b>: Mescid-i Aksa, Kubbetü\'s-Sahra; Yahudiler için Ağlama Duvarı; Hristiyanlar için Kutsal Kabir Kilisesi</li></ul>' }
    ]
  });

  // ================= 3. OSMANLI'DAN PETROL DEVLETLERİNE =================
  window.PLACES.push({
    id: 'levant-modern', sira: 3, modern: true, kisa: 'Osmanlı\'dan petrol devletlerine', aralikAd: 'MS 1517 – bugün',
    baslik: 'Osmanlı Hicaz ve Şam · Hicaz Demiryolu · mandalar · petrol · Dubai',
    ulkeAlt: 'Dört yüzyıllık Osmanlı yönetiminden bugünkü Arap devletlerine (MS 1517 – bugün)',
    from: -1517, to: -2026, start: -1908,
    not: 'Tarihler kesindir.', baskent: 'İstanbul\'a bağlı (Şam, Halep, Cidde); sonra Riyad, Amman, Beyrut, Şam, Kudüs, Abu Dabi',
    sahne: { kizak: false, deve: [-1517, -1960], buhar: -1908, oto: -1930, ucak: -1940, turist: -1990, giyim: [[-1517, 'cubbe'], [-1950, 'modern']] },
    dynasties: [
      { from: -1517, to: -1918, ad: 'Osmanlı yönetimi', renk: '#a8322e' }, { from: -1918, to: -1948, ad: 'Mandalar ve krallıklar', renk: '#4a5a7a' },
      { from: -1948, to: -2026, ad: 'Bağımsız devletler ve petrol çağı', renk: '#2a6a5a' }
    ],
    rulers: [
      { from: -1517, to: -1566, ad: 'Yavuz Sultan Selim ve Kanuni Sultan Süleyman', kisa: 'Kanuni', kim: 'Mısır\'la birlikte Suriye ve Hicaz Osmanlı\'ya geçti; padişahlar "Hâdimü\'l-Haremeyn" unvanını aldı. Kanuni Kudüs surlarını yeniden yaptırdı.' },
      { from: -1566, to: -1744, ad: 'Osmanlı valileri ve Mekke şerifleri', kisa: 'Osmanlı', kim: 'Şam, Halep, Sayda eyaletleri; Hicaz\'da Haşimî şerifler. Lübnan dağlarında Dürzi emirler (Fahreddin Maanoğlu).' },
      { from: -1744, to: -1818, ad: 'Birinci Suudi Devleti (Diriye)', kisa: 'Diriye', kim: 'Muhammed bin Suud ile Muhammed bin Abdülvehhab\'ın ittifakı (1744). Mısırlı Mehmed Ali\'nin ordusu Diriye\'yi yıktı (1818).' },
      { from: -1818, to: -1908, ad: 'Osmanlı, Mısırlı Mehmed Ali ve Tanzimat', kisa: 'Tanzimat', kim: 'İbrahim Paşa Suriye\'yi 1831-1840 arası yönetti. Tanzimat ile yeni vilayetler; Beyrut büyük bir liman şehri oldu.' },
      { from: -1908, to: -1918, ad: 'Hicaz Demiryolu ve Arap İsyanı', kisa: 'Şerif Hüseyin', kim: 'Demiryolu 1908\'de Medine\'ye ulaştı. Mekke Şerifi Hüseyin 1916\'da İngiliz desteğiyle Osmanlı\'ya karşı ayaklandı.' },
      { from: -1918, to: -1932, ad: 'İngiliz ve Fransız mandaları', kisa: 'Mandalar', kim: 'Sykes-Picot düzeni: Suriye ve Lübnan Fransa\'ya, Filistin ve Ürdün İngiltere\'ye. İbn Suud Hicaz\'ı aldı (1925).' },
      { from: -1932, to: -1953, ad: 'Kral Abdülaziz İbn Suud', kisa: 'İbn Suud', kim: 'Suudi Arabistan Krallığı\'nı ilan etti (1932); 1938\'de Dammam\'da ticari petrol bulundu.' },
      { from: -1953, to: -1975, ad: 'Kral Suud ve Kral Faysal', kisa: 'Faysal', kim: 'Faysal\'ın 1973 petrol ambargosu dünyayı sarstı. Körfez emirlikleri bağımsız oldu (BAE 1971).' },
      { from: -1975, to: -2015, ad: 'Kral Halid, Fahd ve Abdullah', kisa: 'Fahd', kim: 'Körfez Savaşı (1991). Dubai ve Doha dünya şehirlerine dönüştü.' },
      { from: -2015, to: -2026, ad: 'Kral Selman ve Veliaht Muhammed bin Selman', kisa: 'Selman', kim: '"Vizyon 2030": petrol dışı ekonomi, turizm ve kadınlara araba kullanma izni (2018).' }
    ],
    eras: [
      { from: -1517, to: -1800, puan: { eko: 3, ordu: 3, istikrar: 4 }, baskent: 'İstanbul\'a bağlı: Şam, Halep, Cidde',
        gundem: 'Dört yüz yıllık Osmanlı dönemi başladı. Şam hac kervanının başlangıç noktası; Halep İpek Yolu\'nun ve Avrupa ticaretinin büyük pazarı. Yemen kahvesi (Muha) dünyaya yayılıyor.',
        savas: 'Bedevi kabilelerinin hac kervanlarına baskınları; Portekizlilerle Kızıldeniz ve Körfez\'de deniz savaşları.',
        ekonomi: 'Halep\'te Fransız, İngiliz ve Venedik konsoloslukları. Yemen kahve tekelini 17. yüzyıl sonuna kadar elinde tuttu.',
        din: 'Haremeyn\'e (Mekke ve Medine) her yıl İstanbul\'dan "Surre alayı" hediyeler gönderiyor.',
        yasam: 'Kahvehaneler, hanlar, hamamlar. Şam\'ın Azm Sarayı (1750).',
        bilgi: 'Dünyanın kahve tutkusu Yemen\'den başladı: "mocha" adı Yemen\'in Muha limanından gelir.' },
      { from: -1800, to: -1918, puan: { eko: 3, ordu: 3, istikrar: 2 }, baskent: 'İstanbul\'a bağlı; Diriye ve Riyad\'da Suudi emirler',
        gundem: 'Vahhabi hareketi ve Suudi devletleri doğdu. Osmanlı Tanzimat\'la modernleşmeye çalıştı: Hicaz Demiryolu İstanbul\'dan Medine\'ye hacıları taşıdı. Birinci Dünya Savaşı\'nda Arap İsyanı ve Lawrence; Osmanlı bölgeden çekildi.',
        savas: 'Medine müdafaası: Fahreddin Paşa savaş bittikten sonra bile şehri 1919\'a kadar teslim etmedi ("Çöl Kaplanı").',
        ekonomi: 'Süveyş Kanalı (1869) Kızıldeniz\'i dünya ticaretine yeniden açtı. Beyrut ipek ve matbaa merkezi.',
        din: 'Nahda (Arap uyanışı): Beyrut\'ta gazeteler, okullar, Arapça romanlar.',
        yasam: 'Körfez\'de inci avcılığı: dalgıçlar burun mandalıyla 20 metre derine dalıyor.',
        bilgi: 'Hicaz Demiryolu\'nun yapımında Müslümanlardan bağış toplandı; Hindistan\'dan Fas\'a kadar bağışçılar vardı.' },
      { from: -1918, to: -1973, puan: { eko: 4, ordu: 3, istikrar: 2 }, baskent: 'Riyad, Amman, Bağdat, Şam, Beyrut, Kudüs',
        gundem: 'Mandalar dönemi ve bağımsızlıklar: Suudi Arabistan (1932), Lübnan (1943), Suriye ve Ürdün (1946), İsrail (1948). Petrol bulunması çöl krallıklarını dönüştürüyor. Arap-İsrail savaşları (1948, 1956, 1967).',
        savas: '1948 savaşı ve Filistinlilerin göçü (Nekbe); 1967 Altı Gün Savaşı.',
        ekonomi: 'Dammam No. 7 kuyusu (1938) Suudi petrolünü başlattı. Aramco dünyanın en büyük petrol şirketi oldu.',
        din: 'Mekke ve Medine\'de dev genişletmeler; hacı sayısı yüz binlere çıktı.',
        yasam: 'Çadırlardan şehirlere: Riyad\'ın nüfusu 1950\'de ~80.000\'den bugün ~7 milyona çıktı.',
        bilgi: 'Japon inci yetiştiriciliğinin 1930\'larda yaygınlaşması Körfez\'in inci ekonomisini çökertti; birkaç yıl sonra petrol bulundu.' },
      { from: -1973, to: -2026, puan: { eko: 5, ordu: 4, istikrar: 2 }, baskent: 'Riyad, Abu Dabi, Doha, Kudüs, Amman, Beyrut, Şam',
        gundem: '1973 petrol krizinden sonra Körfez ülkeleri çok zenginleşti; Dubai ve Doha cam kulelerle doldu. Lübnan iç savaşı (1975-1990), Körfez Savaşı (1991), Arap Baharı ve Suriye iç savaşı (2011\'den), İsrail-Filistin çatışması bölgenin gündemini belirliyor.',
        savas: 'Suriye iç savaşında yüz binlerce ölü ve milyonlarca mülteci; Türkiye 3 milyondan fazla Suriyeliye ev sahipliği yaptı. Yemen iç savaşı (2014\'ten).',
        ekonomi: 'Petrol, doğalgaz, havayolları (Emirates, Qatar), turizm ve finans. Suudi Arabistan "Vizyon 2030".',
        din: 'Her yıl ~2 milyon kişi hacca gidiyor. Lübnan\'da 18 resmî mezhep.',
        yasam: 'Dünyanın en yüksek binası Burj Khalifa (828 m, 2010). Katar 2022 Dünya Kupası\'nı düzenledi.',
        bilgi: 'BAE nüfusunun yaklaşık %90\'ı yabancı; ülke vatandaşları kendi ülkelerinde azınlıkta.' }
    ],
    nufus: [[-1517, 4], [-1800, 5], [-1900, 7], [-1950, 15], [-1980, 35], [-2000, 65], [-2026, 115]],
    nufusNot: 'Suriye, Lübnan, İsrail, Filistin, Ürdün, Suudi Arabistan, Yemen, Umman ve Körfez ülkeleri toplamı; eski rakamlar kaba tahmindir.',
    dunyaOzet: { eko: 'Önce baharat ve kahve, sonra Süveyş Kanalı ve petrol: bölge 20. yüzyılda dünya enerjisinin merkezi oldu.', askeri: 'Tüfekten tanka; 20. yüzyılda Soğuk Savaş\'ın ve petrolün çekişme alanı.' },
    events: [
      { y: -1517, t: 'Hicaz Osmanlı\'ya bağlandı', k: 'm' }, { y: -1541, t: 'Kudüs surları yeniden yapıldı', k: 'm' }, { y: -1744, t: 'Diriye ittifakı', k: 'm' },
      { y: -1818, t: 'Diriye yıkıldı', k: 'm' }, { y: -1869, t: 'Süveyş Kanalı açıldı', k: 'm' }, { y: -1908, t: 'Hicaz Demiryolu Medine\'de', k: 'm' }, { y: -1916, t: 'Arap İsyanı', k: 'm' },
      { y: -1919, t: 'Medine teslim oldu', k: 'm' }, { y: -1932, t: 'Suudi Arabistan kuruldu', k: 'm' }, { y: -1938, t: 'Suudi petrolü bulundu', k: 'm' }, { y: -1948, t: 'İsrail kuruldu; ilk Arap-İsrail savaşı', k: 'm' },
      { y: -1967, t: 'Altı Gün Savaşı', k: 'm' }, { y: -1971, t: 'BAE kuruldu', k: 'm' }, { y: -1973, t: 'Petrol krizi', k: 'm' }, { y: -2010, t: 'Burj Khalifa', k: 'm' }, { y: -2011, t: 'Suriye iç savaşı başladı', k: 'm' },
      { y: -1789, t: 'Fransız İhtilali', k: 'w' }, { y: -1923, t: 'Türkiye Cumhuriyeti', k: 'w' }, { y: -1945, t: 'İkinci Dünya Savaşı bitti', k: 'w' }
    ],
    world: [
      { from: -1517, to: -1918, yer: 'Osmanlı', t: 'Bölgeyi yöneten imparatorluk.' }, { from: -1798, to: -1882, yer: 'Mısır', t: 'Napolyon, Mehmed Ali, Süveyş Kanalı.' },
      { from: -1945, to: -1991, yer: 'Dünya', t: 'Soğuk Savaş.' }, { from: -1991, to: -2026, yer: 'Dünya', t: 'Küreselleşme ve internet.' }
    ],
    sites: [{ ad: 'HALEP', wx: 1300 }, { ad: 'BEYRUT', wx: 950 }, { ad: 'ŞAM', wx: 1700 }, { ad: 'AMMAN', wx: 3200 }, { ad: 'KUDÜS', wx: 2900 }, { ad: 'MEDİNE', wx: 5000 }, { ad: 'CİDDE', wx: 5400 }, { ad: 'MEKKE', wx: 5600 }, { ad: 'RİYAD', wx: 6000 }, { ad: 'SANA', wx: 6700 }, { ad: 'DOHA', wx: 7200 }, { ad: 'DUBAİ', wx: 7900 }],
    monuments: [
      { id: 'hicazgari', ad: 'Hicaz Demiryolu Medine Garı', yer: 'Medine', wx: 5000, type: 'museum', b: 90, h: 18, start: -1907, end: -1908, vol: 2e4 },
      { id: 'riyad', ad: 'Riyad', yer: 'Suudi Arabistan', wx: 6000, type: 'modcity', b: 400, h: 110, n: 40, minareli: true, start: -1960, end: -2020, vol: 8e4 },
      { id: 'dubai', ad: 'Dubai ve Burj Khalifa', yer: 'Birleşik Arap Emirlikleri', wx: 7900, type: 'modcity', b: 380, h: 180, n: 44, start: -1990, end: -2015, vol: 1e5 }
    ],
    hizli: [{ ad: 'Osmanlı', y: -1517 }, { ad: 'Kudüs surları', y: -1541 }, { ad: 'Kahve', y: -1650 }, { ad: 'Diriye', y: -1744 }, { ad: 'Hicaz Demiryolu', y: -1908 }, { ad: 'Arap İsyanı', y: -1916 }, { ad: 'Petrol', y: -1938 }, { ad: '1948', y: -1948 }, { ad: 'Petrol krizi', y: -1973 }, { ad: 'Burj Khalifa', y: -2010 }],
    bilgi: {
      hicazgari: { ikon: '🚂', yaptiran: 'II. Abdülhamid', donem: '1900-1908', mimar: 'Heinrich Meissner (baş mühendis)', sure: '8 yıl', neden: 'Hacıları Şam\'dan Medine\'ye taşımak; Arabistan\'ı İstanbul\'a bağlamak.', onem: 'Osmanlı\'nın son büyük projelerinden; hac yolculuğunu 40 günden 4 güne indirdi.', teknik: [['Uzunluk', '1.320 km (Şam-Medine)'], ['Açılış', '1 Eylül 1908']], nasil: 'Askerler ve işçiler çölde ray döşedi; Medine\'ye yakın kısımda yalnızca Müslüman mühendisler çalıştı.', bugun: 'Medine garı müze; hattın bir kısmı Ürdün\'de çalışıyor.', ilginc: 'Lawrence ve Arap isyancılar 1917-1918\'de hattı defalarca havaya uçurdu; Medine\'ye hiç ulaşılamadı.' },
      riyad: { ikon: '🏙️', yaptiran: '—', donem: '1902\'den Suudi merkezi', mimar: '—', sure: '—', neden: 'Necid\'in merkezi.', onem: 'Suudi Arabistan\'ın başkenti (~7 milyon).', teknik: [['Nüfus (1950)', '~80.000']], nasil: 'Kerpiç bir vaha kasabasından çöl metropolüne.', bugun: 'Hızla büyüyen başkent.', ilginc: 'İbn Suud 1902\'de Riyad\'ı yalnızca ~40 adamla gece baskınıyla aldı.' },
      dubai: { ikon: '🌆', yaptiran: 'Al Maktum hanedanı', donem: '1990\'lardan', mimar: 'Burj Khalifa: Adrian Smith (SOM)', sure: '—', neden: 'Petrol azalınca ticaret, turizm ve finans merkezi olmak.', onem: 'Dünyanın en yüksek binasının şehri.', teknik: [['Burj Khalifa', '828 m, 163 kat'], ['Açılış', '2010']], nasil: 'Yapay adalar (Palm Jumeirah) ve çöl ortasında gökdelenler.', bugun: '~3,8 milyon nüfus.', ilginc: '1960\'larda Dubai bir inci ve balıkçı kasabasıydı; ilk asfalt yol 1960\'larda yapıldı.' }
    },
    ulke: [
      { ad: 'Genel bakış', ikon: '🧭', html: '<p>1516-1517\'de <b>Osmanlı</b> bölgeyi aldı ve dört yüzyıl yönetti. Birinci Dünya Savaşı\'ndan sonra İngiltere ve Fransa bölgeyi paylaştı; ardından bugünkü devletler doğdu. 20. yüzyılda <b>petrol</b> Arap Yarımadası\'nı dünyanın en zengin bölgelerinden birine çevirdi; Levant ise savaşlarla sarsıldı.</p>' },
      { ad: 'Bugünkü ülkeler', ikon: '🗺️', html: '<ul><li>Levant: Suriye, Lübnan, İsrail, Filistin, Ürdün</li><li>Arap Yarımadası: Suudi Arabistan, Yemen, Umman, BAE, Katar, Bahreyn, Kuveyt</li></ul>' }
    ]
  });

  window.BOLGE_TASI('levant');

  // ================= ORTAK VERİLER =================
  window.MISIR = {
    coords: { biblos: [34.1197, 35.6464], kudus: [31.7767, 35.2345], marib: [15.3956, 45.2522], petra: [30.3222, 35.4515], palmira: [34.5476, 38.2689], kubbetussahra: [31.778, 35.2354], emevicamii: [33.5116, 36.3066], krak: [34.7567, 36.2947], hicazgari: [24.4672, 39.5996], riyad: [24.7136, 46.6753], dubai: [25.1972, 55.2744] },
    wiki: { biblos: 'Byblos', kudus: 'Old City of Jerusalem', marib: 'Marib Dam', petra: 'Al-Khazneh', palmira: 'Temple of Bel', kubbetussahra: 'Dome of the Rock', emevicamii: 'Umayyad Mosque', krak: 'Krak des Chevaliers', hicazgari: 'Hejaz Railway', riyad: 'Riyadh', dubai: 'Burj Khalifa' },
    bilgi: {}, alt: {},
    kureAdlari: [[34.5, 33.2, 'DOĞU AKDENİZ', 'deniz', 3.2], [20, 38.5, 'KIZILDENİZ', 'deniz', 3.0], [26.5, 52, 'BASRA KÖRFEZİ', 'deniz', 3.2], [14, 58, 'ARAP DENİZİ', 'deniz', 2.6],
      [24, 45, 'ARAP YARIMADASI', 'misir', 2.6], [33.5, 37, 'LEVANT', 'bolge', 3.6], [21, 51, 'RUBÜLHALİ ÇÖLÜ', 'kucuk', 3.6], [31.5, 35.5, 'Ölü Deniz', 'kucuk', 6], [32.4, 35.62, 'Ürdün', 'nehir', 7]],
    sehirler: [
      { ad: 'Biblos', ll: [34.1197, 35.6464], from: 5000, to: -2026, not: 'Fenike limanı.' },
      { ad: 'Sur', ll: [33.2704, 35.2038], from: 2750, to: -2026, b: [[1000, 332]], not: 'Fenike\'nin en güçlü şehri; Kartaca\'nın kurucusu.' },
      { ad: 'Kudüs', ll: [31.7767, 35.2345], from: 3000, to: -2026, b: [[1000, 587], [-1099, -1187]], not: 'Üç dinin kutsal şehri.' },
      { ad: 'Şam', ll: [33.5138, 36.2765], from: 3000, to: -2026, b: [[1000, 732], [-661, -750], [-1946, -2026]], not: 'Emevî başkenti; bugün Suriye\'nin başkenti.' },
      { ad: 'Halep', ll: [36.2021, 37.1343], from: 3000, to: -2026, not: 'İpek Yolu\'nun batı ucundaki büyük pazar.' },
      { ad: 'Petra', ll: [30.3285, 35.4444], from: 300, to: -700, b: [[300, -106]], not: 'Nabati başkenti.' },
      { ad: 'Palmira', ll: [34.5503, 38.2691], from: 200, to: -2026, b: [[-260, -273]], not: 'Zenobia\'nın kervan şehri.' },
      { ad: 'Mekke', ll: [21.4225, 39.8262], from: 400, to: -2026, not: 'Kâbe; İslam\'ın en kutsal şehri.' },
      { ad: 'Medine', ll: [24.4672, 39.6112], from: 500, to: -2026, b: [[-622, -661]], not: 'İlk İslam devletinin merkezi.' },
      { ad: 'Marib', ll: [15.4542, 45.3264], from: 1000, to: -2026, b: [[800, 100]], not: 'Sebe krallığının başkenti.' },
      { ad: 'Riyad', ll: [24.7136, 46.6753], from: -1700, to: -2026, b: [[-1824, -1891], [-1902, -2026]], not: 'Suudi Arabistan\'ın başkenti.' },
      { ad: 'Dubai', ll: [25.2048, 55.2708], from: -1800, to: -2026, not: 'Körfez\'in ticaret ve turizm merkezi.' },
      { ad: 'Beyrut', ll: [33.8938, 35.5018], from: 1500, to: -2026, b: [[-1943, -2026]], not: 'Lübnan\'ın başkenti; "Doğu\'nun Paris\'i".' },
      { ad: 'Akka', ll: [32.9281, 35.0818], from: 1500, to: -2026, b: [[-1191, -1291]], not: 'Son Haçlı başkenti.' }
    ],
    nil: { ikon: '🌊', title: 'Ürdün Nehri, vahalar ve çöl', sub: 'Suyun az olduğu yerde hayat', foto: 'Jordan River', tabs: [{ ad: '💧 Su', html: '<ul class="hap"><li><b>Ürdün Nehri</b> Celile Gölü\'nden Ölü Deniz\'e akar; Ölü Deniz deniz seviyesinin ~430 m altında, dünyanın en alçak kara noktası.</li><li><b>Arap Yarımadası</b>nda hiç sürekli akan nehir yoktur; hayat vahalara, kuyulara ve yağmur sellerinin aktığı vadilere (vadi) bağlıdır.</li><li>Nabatiler çöl yağmurunu sarnıçlarda toplayarak Petra\'yı yaşattı; Sebeliler Marib Barajı\'nı yaptı.</li><li>Bugün Körfez ülkeleri içme suyunun çoğunu deniz suyunu tuzdan arındırarak elde ediyor.</li></ul>' }] },
    simgeler: [
      { id: 'lv-alfabe', ad: 'Fenike alfabesi', ikon: '🔤', wiki: 'Phoenician alphabet', git: { place: 'levant-antik', y: 1050 }, ozet: 'Bugünkü alfabelerin atası.', hap: ['MÖ ~1050.', '22 harf.'] },
      { id: 'lv-petra', ad: 'Petra', ikon: '🏜️', wiki: 'Petra', git: { place: 'levant-antik', y: -20, id: 'petra' }, ozet: 'Kayaya oyulmuş şehir.', hap: ['Nabatiler.', 'Dünyanın Yeni Yedi Harikası.'] },
      { id: 'lv-palmira', ad: 'Palmira', ikon: '🏛️', wiki: 'Palmyra', git: { place: 'levant-antik', y: -260, id: 'palmira' }, ozet: 'Zenobia\'nın çöl şehri.', hap: ['MS 1-3. yy altın çağ.', '2015\'te tahrip edildi.'] },
      { id: 'lv-kubbe', ad: 'Kubbetü\'s-Sahra', ikon: '🟡', wiki: 'Dome of the Rock', git: { place: 'levant-islam', y: -691, id: 'kubbetussahra' }, ozet: 'En eski büyük İslam anıtı.', hap: ['691.', 'Kudüs.'] },
      { id: 'lv-emevi', ad: 'Emevî Camii', ikon: '🕌', wiki: 'Umayyad Mosque', git: { place: 'levant-islam', y: -715, id: 'emevicamii' }, ozet: 'Şam\'ın ulu camisi.', hap: ['705-715.', 'Bizans mozaikleri.'] },
      { id: 'lv-krak', ad: 'Krak des Chevaliers', ikon: '🏰', wiki: 'Krak des Chevaliers', git: { place: 'levant-islam', y: -1200, id: 'krak' }, ozet: 'Haçlı kalelerinin en ünlüsü.', hap: ['1142\'den.', 'Baybars 1271\'de aldı.'] },
      { id: 'lv-hicaz', ad: 'Hicaz Demiryolu', ikon: '🚂', wiki: 'Hejaz Railway', git: { place: 'levant-modern', y: -1908, id: 'hicazgari' }, ozet: 'İstanbul\'dan Medine\'ye tren.', hap: ['1908.', '1.320 km.'] },
      { id: 'lv-burj', ad: 'Burj Khalifa', ikon: '🏙️', wiki: 'Burj Khalifa', git: { place: 'levant-modern', y: -2012, id: 'dubai' }, ozet: 'Dünyanın en yüksek binası.', hap: ['2010.', '828 m.'] }
    ],
    bugun: '<p>Bölgede bugün 12 ülke ve ~115 milyon kişi yaşıyor. En kalabalıkları <b>Suudi Arabistan</b> (~35 milyon), <b>Yemen</b> (~35 milyon) ve <b>Suriye</b> (~24 milyon).</p><ul class="hap"><li><b>Petrol:</b> Suudi Arabistan dünyanın en büyük petrol ihracatçılarından.</li><li><b>Kutsal şehirler:</b> Mekke, Medine, Kudüs.</li><li><b>Çatışmalar:</b> İsrail-Filistin, Suriye ve Yemen savaşları.</li><li><b>Gökdelenler:</b> Dubai, Doha, Riyad.</li></ul>'
  };

  window.SEHIR_BILGI = {
    'Kudüs': { bugun: 'Kudüs', kurulus: 'MÖ ~3000', wiki: 'Jerusalem', onem: 'Yahudilik, Hristiyanlık ve İslam için kutsal.', ilginc: 'Eski Şehir dört mahalleye ayrılır: Müslüman, Hristiyan, Yahudi ve Ermeni.' },
    'Şam': { bugun: 'Şam, Suriye', kurulus: 'MÖ ~3000 (belki daha eski)', wiki: 'Damascus', onem: 'Dünyanın kesintisiz yerleşilen en eski başkentlerinden; Emevî başkenti.', ilginc: '"Şam çeliği" kılıçları desenli ve çok sert olmalarıyla ünlüydü; yapım yöntemi sonradan unutuldu.' },
    'Mekke': { bugun: 'Mekke, Suudi Arabistan', kurulus: 'İslam öncesi', wiki: 'Mecca', onem: 'Kâbe\'nin bulunduğu, İslam\'ın en kutsal şehri.', ilginc: 'Müslüman olmayanların şehre girmesi yasaktır.' },
    'Petra': { bugun: 'Ma\'an, Ürdün', kurulus: 'MÖ ~4. yy (Nabatiler)', wiki: 'Petra', onem: 'Kervan yolunun kaya şehri.', ilginc: 'Şehre 1,2 km uzunluğundaki dar bir kanyon (Sık) ile girilir; en dar yeri 3 metre.' }
  };
  window.KULTUR = { tanrilar: [], olumler: [], roller: [], mumyalama: '', ic: { eslesme: {}, sahneler: {} }, bilim: { genel: '', cag: {} } };
  window.SINIRLAR = [];

  window.OLAYLAR = [
    { id: 'megiddo', tur: 'savas', ad: 'Megiddo Savaşı', y: 1457, ll: [32.58, 35.18], onem: 4, wiki: 'Battle of Megiddo (15th century BC)', taraflar: ['Mısır (III. Thutmose)', 'Kenan koalisyonu (Kadeş kralı)'], kazanan: 'Mısır', sonuc: 'Ayrıntılı kaydı olan ilk savaş; "Armageddon" adı Megiddo\'dan gelir.' },
    { id: 'sur332', tur: 'savas', ad: 'Sur Kuşatması', y: 332, ll: [33.27, 35.2], onem: 4, wiki: 'Siege of Tyre (332 BC)', taraflar: ['Makedonya (İskender)', 'Sur'], kazanan: 'Makedonya', sonuc: 'İskender adaya ulaşmak için denize bir set yaptırdı; Sur o günden beri yarımada.' },
    { id: 'yermuk', tur: 'savas', ad: 'Yermük Savaşı', y: -636, ll: [32.8, 35.95], onem: 5, wiki: 'Battle of the Yarmuk', taraflar: ['Raşid Halifeliği (Halid b. Velid)', 'Bizans'], kazanan: 'Raşid Halifeliği', sonuc: 'Suriye kesin olarak Müslümanlara geçti.' },
    { id: 'kudus1099', tur: 'savas', ad: 'Kudüs Kuşatması', y: -1099, ll: [31.78, 35.23], onem: 5, wiki: 'Siege of Jerusalem (1099)', taraflar: ['Birinci Haçlı Seferi', 'Fatımîler'], kazanan: 'Haçlılar', sonuc: 'Kudüs Haçlı Krallığı kuruldu; halk katledildi.' },
    { id: 'hittin', tur: 'savas', ad: 'Hıttin Savaşı', y: -1187, ll: [32.8, 35.45], onem: 5, wiki: 'Battle of Hattin', taraflar: ['Eyyubîler (Selahaddin)', 'Kudüs Krallığı (Guy de Lusignan)'], kazanan: 'Eyyubîler', sonuc: 'Kudüs üç ay sonra teslim oldu.' },
    { id: 'aynicalut', tur: 'savas', ad: 'Ayn Calut Savaşı', y: -1260, ll: [32.55, 35.36], onem: 5, wiki: 'Battle of Ain Jalut', taraflar: ['Memlükler (Kutuz, Baybars)', 'Moğollar (Kitbuga)'], kazanan: 'Memlükler', sonuc: 'Moğolların batıya ilerleyişi ilk kez durdu.' },
    { id: 'akka1291', tur: 'savas', ad: 'Akka\'nın düşüşü', y: -1291, ll: [32.92, 35.07], onem: 4, wiki: 'Siege of Acre (1291)', taraflar: ['Memlükler (Halil)', 'Haçlılar'], kazanan: 'Memlükler', sonuc: 'Kutsal Topraklar\'daki Haçlı varlığı sona erdi.' },
    { id: 'mercidabik', tur: 'savas', ad: 'Mercidabık Savaşı', y: -1516, ll: [36.53, 37.27], onem: 5, wiki: 'Battle of Marj Dabiq', taraflar: ['Osmanlı (Yavuz Sultan Selim)', 'Memlükler (Kansu Gavri)'], kazanan: 'Osmanlı', sonuc: 'Suriye ve ardından Mısır Osmanlı\'ya geçti.' },
    { id: 'altigun', tur: 'savas', ad: 'Altı Gün Savaşı', y: -1967, ll: [31.5, 34.9], onem: 4, wiki: 'Six-Day War', taraflar: ['İsrail', 'Mısır, Suriye, Ürdün'], kazanan: 'İsrail', sonuc: 'İsrail Doğu Kudüs, Batı Şeria, Gazze, Sina ve Golan\'ı işgal etti.' },
    { id: 'sykespicot', tur: 'antlasma', ad: 'Sykes-Picot Anlaşması', y: -1916, ll: [33.51, 36.28], onem: 5, wiki: 'Sykes–Picot Agreement', taraflar: ['İngiltere', 'Fransa'], sonuc: 'Osmanlı\'nın Arap topraklarını gizlice paylaşan anlaşma; bugünkü sınırların temeli.' },
    { id: 'hudeybiye', tur: 'antlasma', ad: 'Hudeybiye Antlaşması', y: -628, ll: [21.43, 39.62], onem: 4, wiki: 'Treaty of Hudaybiyyah', taraflar: ['Medine Müslümanları (Hz. Muhammed)', 'Mekkeli Kureyş'], sonuc: '10 yıllık barış; iki yıl sonra Mekke savaşsız alındı.' },
    { id: 'olbudeniz', tur: 'olay', ad: 'Ölü Deniz Yazmaları bulundu', y: -1947, ll: [31.74, 35.46], onem: 4, wiki: 'Dead Sea Scrolls', sonuc: 'Bir Bedevi çobanın mağarada bulduğu, 2.000 yıllık en eski İncil metinleri.' },
    { id: 'petrol1938', tur: 'olay', ad: 'Dammam 7 kuyusu', y: -1938, ll: [26.32, 50.13], onem: 4, wiki: 'Dammam No. 7', sonuc: 'Suudi Arabistan\'da ilk ticari petrol; 1982\'ye kadar çalıştı.' },
    { id: 'halep2023', tur: 'afet', alt: 'deprem', ad: 'Kahramanmaraş depremleri (Suriye)', y: -2023, ll: [36.2, 37.15], onem: 4, wiki: '2023 Turkey–Syria earthquakes', sonuc: 'Kuzey Suriye\'de binlerce kişi öldü; Halep ve İdlib ağır hasar gördü.' }
  ];

  window.ULKE_SAYFA = window.ULKE_SAYFA || {};
  window.ULKE_SAYFA.levant = {
    id: 'levant', ad: 'Arabistan ve Levant', ikon: '🕌', kw: ['arabistan', 'levant', 'suriye', 'lübnan', 'kudüs', 'israil', 'filistin', 'ürdün', 'petra', 'mekke', 'medine', 'şam', 'fenike', 'suudi', 'dubai', 'yemen', 'haçlı'],
    altBaslik: 'MÖ ~3000 – bugün · alfabeden İslam\'a, Haçlılardan petrole', kapakWiki: 'Petra', kapakAd: 'Petra', merkez: [27.5, 40.5], merkezZ: 4.2,
    ozet: ['<b>Levant</b> (Doğu Akdeniz kıyıları) ve <b>Arap Yarımadası</b>, Afrika, Asya ve Avrupa\'nın buluştuğu yerdir.', 'Fenike alfabesi, Yahudilik, Hristiyanlık ve İslam burada doğdu. Haçlı Seferleri, dört yüz yıllık Osmanlı dönemi ve 20. yüzyılın petrol zenginliği bölgeyi biçimlendirdi.'],
    bilgiKutusu: [['Tarih', 'MÖ ~3000 – bugün'], ['Önemli şehirler', 'Biblos, Sur, Kudüs, Şam, Petra, Palmira, Mekke, Medine, Riyad, Dubai'], ['Diller', 'Arapça, İbranice, Aramice (azınlık)'], ['Bugün', '12 ülke, ~115 milyon kişi']],
    donemler: { 'levant-antik': 'Fenikeliler, İsrail, Sebe, Nabatiler ve Palmira.', 'levant-islam': 'İslam\'ın doğuşu, Emevîler, Haçlılar ve Memlükler.', 'levant-modern': 'Osmanlı, mandalar, bağımsızlık ve petrol.' },
    kultur: [{ baslik: 'Diller', ikon: '🗣️', html: '<p>Kenanca, Fenikece, İbranice, Aramice; güneyde Sebece ve Himyerce. İslam\'dan sonra Arapça bütün bölgenin dili oldu; İbranice 20. yüzyılda yeniden günlük dil hâline getirildi.</p>' }, { baslik: 'Din', ikon: '🕋', html: '<p>Kenan ve Arap tanrıları; Yahudilik, Hristiyanlık ve İslam. Dürziler, Aleviler, Maruniler ve birçok Doğu Hristiyan kilisesi.</p>' }],
    figurler: [
      { id: 'petra', ad: 'Petra', tur: 'yapı', wiki: 'Petra', ll: [30.3222, 35.4515], z: 80, yapim: 'MS 1. yy', kim: 'Nabatiler', durum: 'ayakta', durumYazi: 'Ören yeri.', nerede: 'Ürdün', metin: 'Kayaya oyulmuş Nabati başkenti.', git: { place: 'levant-antik', y: -20, id: 'petra' } },
      { id: 'kubbetussahra', ad: 'Kubbetü\'s-Sahra', tur: 'yapı', wiki: 'Dome of the Rock', ll: [31.778, 35.2354], z: 85, yapim: '691', kim: 'Abdülmelik', durum: 'ayakta', durumYazi: 'Ayakta.', nerede: 'Kudüs', metin: 'Altın kubbeli sekizgen anıt.', git: { place: 'levant-islam', y: -691, id: 'kubbetussahra' } }
    ],
    kisiler: [
      { ad: 'Hz. Süleyman', wiki: 'Solomon', yil: 'MÖ ~10. yy', ozet: 'Geleneğe göre Kudüs\'teki ilk tapınağın kurucusu.', y: 950 }, { ad: 'Zenobia', wiki: 'Zenobia', yil: '~240-274', ozet: 'Palmira kraliçesi.', y: -270 },
      { ad: 'Hz. İsa', wiki: 'Jesus', yil: 'MÖ ~4 – MS ~30', ozet: 'Hristiyanlığın merkezindeki kişi.', y: -30 }, { ad: 'Hz. Muhammed', wiki: 'Muhammad', yil: '~570-632', ozet: 'İslam peygamberi.', y: -622 },
      { ad: 'Selahaddin Eyyubî', wiki: 'Saladin', yil: '1137-1193', ozet: 'Kudüs\'ü geri alan sultan.', y: -1187 }, { ad: 'Baybars', wiki: 'Baybars', yil: '1223-1277', ozet: 'Memlük sultanı.', y: -1260 },
      { ad: 'İbn Battuta', wiki: 'Ibn Battuta', yil: '1304-1369', ozet: 'Büyük gezgin.', y: -1330 }, { ad: 'Kral Abdülaziz İbn Suud', wiki: 'Ibn Saud', yil: '1875-1953', ozet: 'Suudi Arabistan\'ın kurucusu.', y: -1932 }
    ],
    biliyorMuydunuz: ['"Kahve" kelimesi Arapça kahve\'den Türkçeye, oradan Avrupa dillerine geçti.', 'Ölü Deniz o kadar tuzlu ki insan suda batmadan yüzer.', 'Fenikeliler Sur moru boyası için salyangoz kabuklarından dağlar oluşturdu.', 'Kubbetü\'s-Sahra\'nın kubbesi aslında altın değil, altın kaplı bakır levhalardan.']
  };
})();
