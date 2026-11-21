// Okyanusya (Avustralya, Yeni Zelanda, Yeni Gine ve Pasifik adaları: Melanezya, Mikronezya, Polinezya).
// Yıl: MÖ pozitif, MS negatif. Sahne (wx): batıdan doğuya
//   Perth 600 · Uluru 1400 · Darwin 2000 · Yeni Gine 2600 · Melbourne 3200 · Sidney 3500 · Auckland 4200 · Wellington 4400
//   Nan Madol 4700 · Fiji 5000 · Tonga 5400 · Samoa 5800 · Tahiti 6500 · Hawaii 7200 · Paskalya Adası 7900
// Kaynaklar: Flood, "Archaeology of the Dreamtime"; Kirch, "On the Road of the Winds" (2017); Thompson, "Sea People" (2019);
//   Clark, "A Short History of Australia" (2006); King, "The Penguin History of New Zealand" (2003); Hunt & Lipo, "The Statues That Walked" (2011).
(() => {
  window.PLACES = window.PLACES || [];

  // ================= 1. ABORJİNLER VE POLİNEZYA YOLCULUKLARI =================
  window.PLACES.push({
    id: 'okyanusya-antik', sira: 1, kisa: 'Aborjinler ve Polinezyalı denizciler', aralikAd: 'MÖ 3000 – MS 1606',
    baslik: 'Rüya Zamanı · Lapita · çift gövdeli kanolar · Tu\'i Tonga · Nan Madol · Moai · Maori',
    ulkeAlt: 'Dünyanın en eski yaşayan kültürü Aborjinlerden yıldızlarla yol bulan Polinezyalı denizcilere (MÖ 3000 – MS 1606)',
    from: 3000, to: -1606, start: -1300,
    not: 'Aborjinler Avustralya\'da en az 50.000-65.000 yıldır yaşıyor. Polinezya yerleşim tarihleri radyokarbona dayanır ve son yıllarda daha geç tarihlere çekildi.', baskent: 'Tek merkez yok: Tongatapu, Nan Madol, Rapa Nui, Maori pa\'ları',
    sahne: { kizak: false, araba: false, katipYok: true, giyim: 'antik' },
    dynasties: [{ from: 3000, to: 1500, ad: 'Aborjinler ve Yeni Gine çiftçileri', renk: '#a8542e' }, { from: 1500, to: -900, ad: 'Lapita ve Batı Polinezya', renk: '#2a8a8a' }, { from: -900, to: -1300, ad: 'Büyük Polinezya yolculukları', renk: '#2a6aa8' }, { from: -1300, to: -1606, ad: 'Ada krallıkları ve Maoriler', renk: '#6a4a3a' }],
    rulers: [
      { from: 3000, to: 1500, ad: 'Aborjin toplulukları ve Yeni Gine çiftçileri', kisa: '?', kim: 'Avustralya\'da yüzlerce dil grubu; Yeni Gine yaylasında dünyanın en eski tarım merkezlerinden biri (taro, muz, şeker kamışı).' },
      { from: 1500, to: 500, ad: 'Lapita denizcileri', kisa: 'Lapita', kim: 'Desenli çömlekleriyle tanınan Lapita halkı Bismarck adalarından Fiji, Tonga ve Samoa\'ya yelken açtı.' },
      { from: 500, to: -900, ad: 'Tonga, Samoa ve Fiji şefleri', kisa: 'Şefler', kim: 'Batı Polinezya\'da Polinezya kültürü ve dili biçimlendi; sonra uzun bir duraklama.' },
      { from: -900, to: -1200, ad: 'Tu\'i Tonga hanedanı', kisa: 'Tu\'i Tonga', kim: 'Tongalı kutsal krallar denizler ötesindeki adaları etkileri altına aldı.' },
      { from: -1200, to: -1300, ad: 'Büyük yolculuklar; Rapa Nui\'nin Hotu Matu\'a\'sı', kisa: 'Hotu Matu\'a', kim: 'Polinezyalılar Hawaii, Paskalya Adası ve en son Yeni Zelanda\'ya ulaştı (~1250-1300).' },
      { from: -1300, to: -1500, ad: 'Maori kabileleri; Nan Madol\'un Saudeleur hanedanı', kisa: 'Saudeleur', kim: 'Mikronezya\'da Saudeleurlar bazalt sütunlardan Nan Madol\'u yönetti; Rapa Nui\'de Moai heykelleri dikildi.' },
      { from: -1500, to: -1606, ad: 'Ada önderleri ve ilk Avrupalılar', kisa: '?', kim: 'Magellan Pasifik\'i geçti (1521); İspanyollar Mikronezya ve Solomon adalarına uğradı.' }
    ],
    eras: [
      { from: 3000, to: 1500, puan: { eko: 2, ordu: 1, istikrar: 5 }, baskent: 'Yok',
        gundem: 'Aborjinler kıtanın her köşesinde avcılık, toplayıcılık ve ateşle arazi yönetimiyle yaşıyor; kaya resimleri on binlerce yıllık. Yeni Gine yaylalarında insanlar 7.000 yıldır bahçe tarımı yapıyor. Dingo Avustralya\'ya ~3.500 yıl önce geldi.',
        savas: 'Bumerang, mızrak atıcı (woomera), kalkan.',
        ekonomi: 'Avcılık, balıkçılık, yam ve tohum toplama; aşı boyası ve taş baltaların uzun mesafe takası.',
        din: 'Rüya Zamanı (Dreaming): atalar dünyayı yaratırken şarkılarla yollar çizdi.',
        yasam: 'Şarkı yolları (songlines) sözlü haritalar gibi kuşaktan kuşağa aktarılır.',
        bilgi: 'Aborjin kültürü dünyanın kesintisiz süren en eski kültürü kabul edilir.' },
      { from: 1500, to: -900, puan: { eko: 3, ordu: 1, istikrar: 4 }, baskent: 'Tonga ve Samoa',
        gundem: 'Lapita halkı çift gövdeli kanolarla açık okyanusa açıldı ve 3.000 km\'den fazla yol alarak Fiji, Tonga ve Samoa\'ya yerleşti. Batı Polinezya\'da Polinezya dili ve kültürü doğdu. Sonra yolculuklar ~1.500 yıl durdu.',
        savas: 'Topluluklar arası çatışmalar; tahta sopalar.',
        ekonomi: 'Kanolarda taşınan "bitki paketi": taro, yam, ekmek ağacı, hindistancevizi, domuz, tavuk, köpek.',
        din: 'Mana ve tapu (tabu) kavramları.',
        yasam: 'Dövme (tatau) sanatı: "tattoo" kelimesi buradan gelir.',
        bilgi: '"Tabu" ve "tattoo" kelimeleri dünya dillerine Polinezya dillerinden geçti.' },
      { from: -900, to: -1300, puan: { eko: 3, ordu: 3, istikrar: 4 }, baskent: 'Tongatapu',
        gundem: 'Polinezyalılar yıldızları, dalgaları, kuşları ve bulutları okuyarak tarihin en büyük deniz keşiflerinden birini yaptı: Cook Adaları, Tahiti, Markiz, Hawaii, Paskalya Adası ve en son Yeni Zelanda. Tonga\'da Tu\'i Tonga hanedanı güçlü bir deniz şefliği kurdu.',
        savas: 'Savaş kanoları; Tonga\'nın deniz seferleri.',
        ekonomi: 'Polinezyalılar Güney Amerika\'ya da ulaşıp tatlı patatesi getirdi: genetik çalışmalar ~1200\'de temas olduğunu gösteriyor.',
        din: 'Marae: açık hava tapınak alanları.',
        yasam: 'Ha\'amonga \'a Maui taş kapısı (Tonga, ~1200).',
        bilgi: 'Polinezya üçgeni (Hawaii - Yeni Zelanda - Paskalya Adası) yaklaşık 25 milyon km²: Rusya\'dan büyük bir deniz alanı.' },
      { from: -1300, to: -1606, puan: { eko: 3, ordu: 3, istikrar: 3 }, baskent: 'Nan Madol, Rapa Nui, Maori pa\'ları',
        gundem: 'Paskalya Adası\'nda (Rapa Nui) ~1.000 Moai heykeli oyuldu. Mikronezya\'da Saudeleur krallığı deniz üstündeki yapay adalardan Nan Madol\'u yönetti. Yeni Zelanda\'da Maoriler dev moa kuşlarını avladı ve tepe kaleleri (pa) kurdu.',
        savas: 'Maori pa kaleleri ve kabile savaşları.',
        ekonomi: 'Yeşim taşı (pounamu), balık, kumara (tatlı patates).',
        din: 'Ataları temsil eden heykeller; Hawaii\'de heiau tapınakları.',
        yasam: 'Moa kuşu (~3,6 m) Maorilerin gelişinden sonra ~100-200 yılda nesli tükendi.',
        bilgi: 'Rapa Nui halkının söylencesine göre Moai heykelleri taş ocağından "yürüyerek" yerlerine gitti; deneyler, heykellerin iplerle sallanarak dik taşınabildiğini gösterdi.' }
    ],
    nufus: [[3000, 0.7], [1000, 1], [-1000, 1.5], [-1300, 2], [-1606, 2]],
    nufusNot: 'Bütün Okyanusya için çok kaba tahminler.',
    dunyaOzet: { eko: 'Okyanusya dünyanın geri kalanından büyük ölçüde ayrıydı; Polinezyalılar Güney Amerika ile temas kurdu.', askeri: 'Taş ve tahta silahlar; metal yok.' },
    events: [
      { y: 3000, t: 'Yeni Gine\'de tarım yaygınlaşıyor', k: 'm' }, { y: 1500, t: 'Dingo Avustralya\'ya geldi (yaklaşık)', k: 'm' }, { y: 1350, t: 'Lapita yolculukları', k: 'm' }, { y: 850, t: 'Tonga ve Samoa\'ya yerleşim', k: 'm' },
      { y: -950, t: 'Tu\'i Tonga hanedanı', k: 'm' }, { y: -1000, t: 'Doğu Polinezya\'ya yolculuklar', k: 'm' }, { y: -1100, t: 'Hawaii\'ye yerleşim', k: 'm' }, { y: -1200, t: 'Rapa Nui\'ye yerleşim', k: 'm' },
      { y: -1250, t: 'Polinezyalılar Yeni Zelanda\'da', k: 'm' }, { y: -1300, t: 'Moai heykelleri', k: 'm' }, { y: -1521, t: 'Magellan Pasifik\'i geçti', k: 'm' },
      { y: 2560, t: 'Büyük Piramit', k: 'w' }, { y: -476, t: 'Batı Roma\'nın sonu', k: 'w' }, { y: -1492, t: 'Kolomb', k: 'w' }
    ],
    world: [{ from: 2000, to: -1438, yer: 'Güney Amerika', t: 'And uygarlıkları; Polinezyalılarla temas.' }, { from: -802, to: -1431, yer: 'Güneydoğu Asya', t: 'Khmer İmparatorluğu.' }],
    sites: [{ ad: 'KAKADU', wx: 2000 }, { ad: 'ULURU', wx: 1400 }, { ad: 'YENİ GİNE YAYLASI', wx: 2600 }, { ad: 'BİSMARCK ADALARI', wx: 2900 }, { ad: 'AOTEAROA (YENİ ZELANDA)', wx: 4300 }, { ad: 'NAN MADOL', wx: 4700 }, { ad: 'FİJİ', wx: 5000 }, { ad: 'TONGA', wx: 5400 }, { ad: 'SAMOA', wx: 5800 }, { ad: 'TAHİTİ', wx: 6500 }, { ad: 'HAWAİİ', wx: 7200 }, { ad: 'RAPA NUİ', wx: 7900 }],
    monuments: [
      { id: 'nanmadol', ad: 'Nan Madol', yer: 'Pohnpei, Mikronezya', wx: 4700, type: 'citadel', renk: '#4a4a48', b: 220, h: 14, start: -1180, end: -1350, vol: 7e4, ruin: -1628 },
      { id: 'moai', ad: 'Rapa Nui: Ahu Tongariki Moaileri', yer: 'Paskalya Adası, Şili', wx: 7900, type: 'heykel', stil: 'moai', n: 7, pukao: false, b: 140, h: 22, start: -1250, end: -1500, vol: 4e4 }
    ],
    hizli: [{ ad: 'Rüya Zamanı', y: 2500 }, { ad: 'Lapita', y: 1350 }, { ad: 'Samoa', y: 850 }, { ad: 'Tu\'i Tonga', y: -950 }, { ad: 'Hawaii', y: -1100 }, { ad: 'Yeni Zelanda', y: -1280 }, { ad: 'Moai', y: -1400 }, { ad: 'Magellan', y: -1521 }],
    bilgi: {
      nanmadol: { ikon: '🪨', yaptiran: 'Saudeleur hanedanı', donem: '~1180-1628', mimar: '—', sure: 'Yüzyıllar', neden: 'Kraliyet, tören ve mezar merkezi.', onem: '"Pasifik\'in Venedik\'i": deniz üstünde 92 yapay ada.', teknik: [['Bazalt', '~750.000 ton'], ['Ada', '92']], nasil: 'Altıgen bazalt sütunlar kütük gibi çapraz dizildi; nasıl taşındıkları hâlâ tartışılıyor.', bugun: 'UNESCO Dünya Mirası (2016, tehlike altında).', ilginc: 'Pohnpei söylencesine göre iki büyücü kardeş taşları uçurarak yerine getirdi.' },
      moai: { ikon: '🗿', yaptiran: 'Rapa Nui halkı', donem: '~1250-1500', mimar: '—', sure: 'Yüzyıllar', neden: 'Tanrılaştırılmış ataları temsil etmek; köylere sırtı denize dönük bakar.', onem: 'Pasifik\'in en ünlü anıtları.', teknik: [['Moai sayısı', '~1.000'], ['Ahu Tongariki', '15 heykel'], ['En büyük dikilmiş', '~10 m, ~82 ton']], nasil: 'Rano Raraku yanardağının tüfünden oyuldu; iplerle sallanarak "yürütüldüğü" düşünülüyor.', bugun: 'UNESCO Dünya Mirası (1995). Ahu Tongariki 1960 tsunamisinden sonra 1990\'larda yeniden dikildi.', ilginc: 'Heykellerin çoğunun gövdesi toprak altında: "kafalar" aslında tam bedenli heykeller.' }
    },
    ulke: [
      { ad: 'Genel bakış', ikon: '🧭', html: '<p><b>Avustralya</b>\'da Aborjin ve Torres Boğazı halkları en az 50.000 yıldır yaşıyor. Pasifik adalarına ise <b>Austronezyalı</b> denizciler geldi: önce Lapita halkı, sonra Polinezyalılar. Pusula ve harita olmadan, yıldızlarla ve dalgalarla yol bularak Hawaii\'den Yeni Zelanda\'ya, Paskalya Adası\'na kadar dünyanın en geniş okyanusunu keşfettiler.</p>' },
      { ad: 'Bölgeler', ikon: '🗺️', html: '<ul><li><b>Avustralya</b>: Aborjinler ve Torres Boğazı adalıları</li><li><b>Melanezya</b> ("kara adalar"): Yeni Gine, Solomon, Vanuatu, Fiji</li><li><b>Mikronezya</b> ("küçük adalar"): Guam, Palau, Pohnpei, Kiribati</li><li><b>Polinezya</b> ("çok adalar"): Hawaii, Yeni Zelanda, Samoa, Tonga, Tahiti, Rapa Nui</li></ul>' }
    ]
  });

  // ================= 2. KAŞİFLER VE KOLONİLER =================
  window.PLACES.push({
    id: 'okyanusya-somurge', sira: 2, kisa: 'Kaşifler ve koloniler', aralikAd: 'MS 1606 – 1901',
    baslik: 'Janszoon · Tasman · Cook · İlk Filo · Kamehameha · Waitangi · altına hücum',
    ulkeAlt: 'Avrupalı kaşiflerden İngiliz kolonilerine; Hawaii krallığı ve Maori direnişi (MS 1606 – 1901)',
    from: -1606, to: -1901, start: -1788,
    not: 'Tarihler kesindir.', baskent: 'Sidney (Yeni Güney Galler), Auckland ve Wellington, Honolulu',
    sahne: { kizak: false, araba: true, buhar: -1855, giyim: [[-1606, 'antik'], [-1788, 'cubbe']] },
    dynasties: [{ from: -1606, to: -1788, ad: 'Avrupalı kaşifler', renk: '#6a5a3a' }, { from: -1788, to: -1901, ad: 'İngiliz kolonileri ve Hawaii krallığı', renk: '#7a2a3a' }],
    rulers: [
      { from: -1606, to: -1642, ad: 'Hollandalı kaşifler (Willem Janszoon)', kisa: 'Janszoon', kim: 'Janszoon\'un Duyfken gemisi Avustralya\'ya ulaşan bilinen ilk Avrupa gemisi oldu (1606).' },
      { from: -1642, to: -1768, ad: 'Abel Tasman ve Pasifik keşifleri', kisa: 'Tasman', kim: 'Tasman Tazmanya\'yı ve Yeni Zelanda\'yı gördü (1642). Avustralya "Yeni Hollanda" olarak anıldı.' },
      { from: -1768, to: -1788, ad: 'James Cook\'un yolculukları', kisa: 'Cook', kim: 'Cook Yeni Zelanda\'nın haritasını çıkardı ve Avustralya\'nın doğu kıyısına çıktı (1770); Hawaii\'de öldürüldü (1779).' },
      { from: -1788, to: -1810, ad: 'İlk Filo; Hawaii\'de I. Kamehameha', kisa: 'Kamehameha', kim: 'İngiltere Sidney\'de bir sürgün kolonisi kurdu (26 Ocak 1788). Kamehameha Hawaii adalarını birleştirdi (1795-1810).' },
      { from: -1810, to: -1840, ad: 'Vali Macquarie; Maori Tüfek Savaşları', kisa: 'Macquarie', kim: 'Koloni şehirleri büyüdü; Avrupa tüfekleri Maori kabileleri arasındaki savaşları kanlı hâle getirdi.' },
      { from: -1840, to: -1851, ad: 'Waitangi Antlaşması', kisa: 'Waitangi', kim: 'İngiliz taçı ile Maori şefleri arasındaki antlaşma Yeni Zelanda\'nın kuruluş belgesi oldu; iki dildeki metinler farklı anlaşıldı.' },
      { from: -1851, to: -1893, ad: 'Altına hücum, Yeni Zelanda savaşları ve Hawaii krallığı', kisa: 'Altına hücum', kim: 'Victoria\'da altın bulundu (1851). Yeni Zelanda savaşlarında Maori toprakları el konuldu. Hawaii Kraliçesi Liliuokalani 1893\'te bir darbeyle devrildi.' },
      { from: -1893, to: -1901, ad: 'Federasyon yolunda; Yeni Zelanda\'da kadınlara oy hakkı', kisa: 'Federasyon', kim: 'Yeni Zelanda dünyada kadınlara ulusal seçimlerde oy hakkı veren ilk ülke oldu (1893). ABD Hawaii\'yi ilhak etti (1898).' }
    ],
    eras: [
      { from: -1606, to: -1788, puan: { eko: 2, ordu: 2, istikrar: 4 }, baskent: 'Yok (Avrupalılar için)',
        gundem: 'Hollandalı, İspanyol, Fransız ve İngiliz gemileri Pasifik\'i haritaya geçirdi. Avustralya\'nın batı kıyısı "Yeni Hollanda" oldu. Cook\'un üç yolculuğu Pasifik\'in haritasını tamamladı ve Tahitili denizci Tupaia ona yol gösterdi.',
        savas: 'Avrupalılar ile adalılar arasında çatışmalar.',
        ekonomi: 'Baharat ve gümüş yollarının dışında; Hollanda Doğu Hindistan Şirketi Avustralya\'yı ilginç bulmadı.',
        din: 'Ada inançları sürüyor.',
        yasam: 'Batavia gemisi 1629\'da Batı Avustralya\'da battı; hayatta kalanlar arasında korkunç bir isyan yaşandı.',
        bilgi: 'Cook\'a yol gösteren Tahitili Tupaia, başka adaların yönünü ve uzaklığını gösteren bir harita çizdi: Polinezya bilgisinin yazılı tek örneklerinden.' },
      { from: -1788, to: -1850, puan: { eko: 3, ordu: 3, istikrar: 2 }, baskent: 'Sidney, Hobart, Russell/Auckland, Honolulu',
        gundem: 'İngiltere Avustralya\'yı mahkûmlar için bir sürgün kolonisi yaptı: 1788-1868 arası ~162.000 mahkûm gönderildi. Aborjinler topraklarını kaybetti; salgınlar ve şiddetle nüfusları çok azaldı. Hawaii krallığı birleşti. Yeni Zelanda\'da Waitangi Antlaşması (1840).',
        savas: 'Sınır savaşları ve Aborjin direnişi; Maori Tüfek Savaşları.',
        ekonomi: 'Merino koyunu ve yün; balina avcılığı; sandal ağacı.',
        din: 'Misyonerler; Hawaii\'de kapu (tabu) sistemi 1819\'da kaldırıldı.',
        yasam: 'Koloni şehirleri: Sidney, Hobart, Melbourne (1835).',
        bilgi: 'Bugünkü Avustralyalıların yaklaşık %20\'sinin soyağacında bir mahkûm bulunduğu tahmin ediliyor.' },
      { from: -1850, to: -1901, puan: { eko: 4, ordu: 3, istikrar: 3 }, baskent: 'Melbourne, Sidney, Wellington, Honolulu',
        gundem: 'Altına hücum Avustralya\'nın nüfusunu 10 yılda üç katına çıkardı; Melbourne dünyanın en zengin şehirlerinden oldu. Yeni Zelanda savaşlarında Maori toprakları el konuldu. Hawaii krallığı Amerikan şeker çiftçileri tarafından devrildi.',
        savas: 'Yeni Zelanda savaşları (1845-1872); Eureka Ayaklanması (1854).',
        ekonomi: 'Altın, yün, buğday, soğutmalı gemilerle et ihracatı (1882).',
        din: 'Hristiyanlık adalara yayıldı.',
        yasam: 'Gizli oylama ("Avustralya usulü oy", 1856) dünyaya yayıldı.',
        bilgi: 'Bugün dünyanın çoğu ülkesinde kullanılan gizli oy pusulası ilk kez 1856\'da Avustralya\'nın Victoria ve Güney Avustralya eyaletlerinde uygulandı.' }
    ],
    nufus: [[-1606, 2], [-1788, 2.2], [-1850, 2.5], [-1901, 6]],
    nufusNot: 'Bütün Okyanusya için kaba tahminler; yerli nüfus 19. yüzyılda büyük ölçüde azaldı.',
    dunyaOzet: { eko: 'Sanayi Devrimi\'nin yün ve altın talebi Avustralya ve Yeni Zelanda\'yı dönüştürdü.', askeri: 'Avrupa tüfekleri; sömürge savaşları.' },
    events: [
      { y: -1606, t: 'Janszoon Avustralya\'da', k: 'm' }, { y: -1629, t: 'Batavia gemisi battı', k: 'm' }, { y: -1642, t: 'Tasman Yeni Zelanda\'yı gördü', k: 'm' }, { y: -1770, t: 'Cook Botany Bay\'de', k: 'm' },
      { y: -1779, t: 'Cook Hawaii\'de öldü', k: 'm' }, { y: -1788, t: 'İlk Filo: Sidney', k: 'm' }, { y: -1810, t: 'Kamehameha Hawaii\'yi birleştirdi', k: 'm' }, { y: -1840, t: 'Waitangi Antlaşması', k: 'm' },
      { y: -1851, t: 'Avustralya altına hücum', k: 'm' }, { y: -1856, t: 'Gizli oy', k: 'm' }, { y: -1868, t: 'Son mahkûm gemisi', k: 'm' }, { y: -1893, t: 'Yeni Zelanda\'da kadınlara oy; Hawaii darbesi', k: 'm' }, { y: -1898, t: 'ABD Hawaii\'yi ilhak etti', k: 'm' },
      { y: -1683, t: 'Viyana Kuşatması', k: 'w' }, { y: -1789, t: 'Fransız İhtilali', k: 'w' }, { y: -1865, t: 'ABD İç Savaşı bitti', k: 'w' }
    ],
    world: [{ from: -1700, to: -1901, yer: 'İngiltere', t: 'İngiliz İmparatorluğu ve Sanayi Devrimi.' }, { from: -1776, to: -1901, yer: 'ABD', t: 'Pasifik\'e genişleme.' }],
    sites: [{ ad: 'BATAVİA BATIĞI', wx: 600 }, { ad: 'BALLARAT (ALTIN)', wx: 3000 }, { ad: 'MELBOURNE', wx: 3200 }, { ad: 'BOTANY BAY', wx: 3400 }, { ad: 'SİDNEY', wx: 3500 }, { ad: 'WAİTANGİ', wx: 4100 }, { ad: 'AUCKLAND', wx: 4200 }, { ad: 'WELLİNGTON', wx: 4400 }, { ad: 'TAHİTİ', wx: 6500 }, { ad: 'HONOLULU', wx: 7200 }],
    monuments: [
      { id: 'hydepark', ad: 'Hyde Park Kışlası', yer: 'Sidney', wx: 3550, type: 'museum', b: 70, h: 22, start: -1817, end: -1819, vol: 2e4 },
      { id: 'waitangievi', ad: 'Waitangi Antlaşma Evi', yer: 'Bay of Islands, Yeni Zelanda', wx: 4100, type: 'museum', b: 50, h: 14, start: -1833, end: -1834, vol: 1e4 },
      { id: 'iolani', ad: '\'Iolani Sarayı', yer: 'Honolulu, Hawaii', wx: 7200, type: 'museum', b: 80, h: 28, start: -1879, end: -1882, vol: 3e4 }
    ],
    hizli: [{ ad: 'Janszoon', y: -1606 }, { ad: 'Tasman', y: -1642 }, { ad: 'Cook', y: -1770 }, { ad: 'Sidney', y: -1788 }, { ad: 'Kamehameha', y: -1810 }, { ad: 'Waitangi', y: -1840 }, { ad: 'Altın', y: -1851 }, { ad: 'Kadınlara oy', y: -1893 }],
    bilgi: {
      hydepark: { ikon: '⛓️', yaptiran: 'Vali Lachlan Macquarie; mimar mahkûm Francis Greenway', donem: '1817-1819', mimar: 'Francis Greenway', sure: '~2 yıl', neden: 'Mahkûmları barındırmak.', onem: 'Avustralya\'nın mahkûm kolonisi geçmişinin simgesi.', teknik: [['Kapasite', '~600 mahkûm']], nasil: 'Georgian tuğla bina.', bugun: 'UNESCO Dünya Mirası (Avustralya Mahkûm Alanları, 2010).', ilginc: 'Mimarı Greenway sahtecilikten mahkûm edilmiş bir mimardı; daha sonra Avustralya\'nın 10 dolarlık banknotuna resmi basıldı.' },
      waitangievi: { ikon: '📜', yaptiran: 'İngiliz temsilci James Busby', donem: '1833-1834', mimar: 'John Verge', sure: '—', neden: 'İngiliz temsilcinin evi.', onem: '6 Şubat 1840\'ta Waitangi Antlaşması burada imzalandı.', teknik: [['İmza', '~500 Maori şefi']], nasil: 'Avustralya\'da kesilip gemiyle getirilen ahşap.', bugun: 'Waitangi Günü (6 Şubat) Yeni Zelanda\'nın ulusal günü.', ilginc: 'Antlaşmanın İngilizce metni "egemenliği devretmek", Maorice metni "yönetim (kawanatanga)" diyordu; bu fark bugün de tartışılıyor.' },
      iolani: { ikon: '👑', yaptiran: 'Kral Kalākaua', donem: '1879-1882', mimar: 'Thomas J. Baker ve diğerleri', sure: '3 yıl', neden: 'Hawaii krallarının sarayı.', onem: 'ABD topraklarındaki tek kraliyet sarayı.', teknik: [['Elektrik', '1887 (Beyaz Saray\'dan önce)']], nasil: 'Amerikan Floransa üslubu.', bugun: 'Müze.', ilginc: 'Son kraliçe Liliuokalani 1895\'te kendi sarayında 8 ay hapsedildi; ünlü "Aloha \'Oe" şarkısını o yazdı.' }
    },
    ulke: [
      { ad: 'Genel bakış', ikon: '🧭', html: '<p>1606\'dan sonra Hollandalılar, sonra İngilizler bölgeyi keşfetti. 1788\'de İngiltere Sidney\'de bir mahkûm kolonisi kurdu; Avustralya\'nın yerli halkları topraklarını, dillerinin ve nüfuslarının büyük kısmını kaybetti. Yeni Zelanda 1840\'ta Waitangi Antlaşması ile İngiliz kolonisi oldu. Hawaii bağımsız bir krallık olarak 1893\'e kadar yaşadı.</p>' }
    ]
  });

  // ================= 3. AVUSTRALYA, YENİ ZELANDA VE PASİFİK ÜLKELERİ =================
  window.PLACES.push({
    id: 'okyanusya-modern', sira: 3, modern: true, kisa: 'Avustralya, Yeni Zelanda ve Pasifik', aralikAd: 'MS 1901 – bugün',
    baslik: 'Federasyon · Çanakkale\'de ANZAC · Pasifik Savaşı · Sidney Opera Binası · Pasifik ülkelerinin bağımsızlığı',
    ulkeAlt: 'Avustralya Federasyonu\'ndan iki dünya savaşına, çok kültürlü toplumlara ve iklim değişikliğiyle mücadele eden adalara (MS 1901 – bugün)',
    from: -1901, to: -2026, start: -1973,
    not: 'Tarihler kesindir.', baskent: 'Canberra (1927\'den), Wellington, Port Moresby, Suva ve diğerleri',
    sahne: { kizak: false, buhar: [-1901, -1960], oto: -1915, ucak: -1925, turist: -1960, giyim: 'modern' },
    dynasties: [{ from: -1901, to: -1945, ad: 'Federasyon ve dünya savaşları', renk: '#2a4a8a' }, { from: -1945, to: -1975, ad: 'Savaş sonrası göç', renk: '#2a7a6a' }, { from: -1975, to: -2026, ad: 'Çok kültürlü Okyanusya', renk: '#2a8aa8' }],
    rulers: [
      { from: -1901, to: -1914, ad: 'Avustralya Federasyonu (Barton, Deakin)', kisa: 'Federasyon', kim: '6 koloni birleşip Avustralya Topluluğu\'nu kurdu (1 Ocak 1901). "Beyaz Avustralya" göç politikası başladı. Yeni Zelanda dominyon oldu (1907).' },
      { from: -1914, to: -1918, ad: 'Birinci Dünya Savaşı: ANZAC', kisa: 'ANZAC', kim: 'Avustralya ve Yeni Zelanda kolordusu Çanakkale\'de savaştı (1915); 25 Nisan ANZAC Günü olarak anılıyor.' },
      { from: -1918, to: -1939, ad: 'Savaşlar arası dönem', kisa: '?', kim: 'Canberra başkent oldu (1927); Sidney Liman Köprüsü (1932); Büyük Buhran.' },
      { from: -1939, to: -1945, ad: 'İkinci Dünya Savaşı (John Curtin)', kisa: 'Curtin', kim: 'Japonya Darwin\'i bombaladı (1942); Yeni Gine\'deki Kokoda yolunda savaş. Pasifik adaları savaş alanı oldu.' },
      { from: -1945, to: -1972, ad: 'Savaş sonrası göç (Menzies dönemi)', kisa: 'Menzies', kim: 'Avrupa\'dan milyonlarca göçmen; 1967 referandumu Aborjinleri nüfus sayımına dahil etti. Samoa bağımsız oldu (1962).' },
      { from: -1972, to: -2008, ad: 'Çok kültürlülük ve Pasifik bağımsızlıkları', kisa: 'Çok kültür', kim: '"Beyaz Avustralya" politikası sona erdi (1973). Fiji (1970), Papua Yeni Gine (1975) ve diğer adalar bağımsız oldu.' },
      { from: -2008, to: -2026, ad: 'Ulusal özür ve bugün', kisa: 'Bugün', kim: 'Avustralya hükümeti "Çalınmış Kuşaklar" için özür diledi (2008). Pasifik adaları iklim değişikliğinin ön cephesinde.' }
    ],
    eras: [
      { from: -1901, to: -1945, puan: { eko: 4, ordu: 3, istikrar: 4 }, baskent: 'Melbourne, sonra Canberra; Wellington',
        gundem: 'Avustralya ve Yeni Zelanda İngiliz İmparatorluğu içinde genç uluslar oldu. Çanakkale\'de (Gelibolu) binlerce ANZAC askeri öldü; bu savaş iki ülkenin ulusal kimliğini biçimlendirdi. Mustafa Kemal\'in ANZAC annelerine yazıldığı kabul edilen sözleri Anzak Koyu\'ndaki anıtta yazılıdır.',
        savas: 'Gelibolu (1915), Batı Cephesi; İkinci Dünya Savaşı\'nda Tobruk, Kokoda, Pasifik adaları (Guadalcanal).',
        ekonomi: 'Yün, buğday, et, madenler.',
        din: 'Hristiyan çoğunluk.',
        yasam: 'Aborjin çocukları ailelerinden zorla alındı: "Çalınmış Kuşaklar" (1910-1970).',
        bilgi: 'Her yıl 25 Nisan\'da binlerce Avustralyalı ve Yeni Zelandalı Çanakkale\'deki Anzak Koyu\'nda şafak törenine katılır.' },
      { from: -1945, to: -1975, puan: { eko: 5, ordu: 2, istikrar: 4 }, baskent: 'Canberra, Wellington, Suva, Port Moresby',
        gundem: 'Avustralya "ya nüfus artar ya yok oluruz" diyerek Avrupa\'dan göçmen getirdi; aralarında Türkiye\'den gelenler de vardı (1967 anlaşması). Pasifik\'te nükleer denemeler yapıldı (Bikini, Mururoa). Sidney Opera Binası 1973\'te açıldı.',
        savas: 'Kore ve Vietnam savaşlarına katılım.',
        ekonomi: 'Demir cevheri, kömür, yün; Snowy Dağları hidroelektrik projesi.',
        din: 'Göçle Ortodoks, Katolik ve Müslüman topluluklar büyüdü.',
        yasam: 'Banliyöler, sörf, kriket ve ragbi.',
        bilgi: 'Türkiye ile Avustralya arasında 1967\'de imzalanan göç anlaşmasıyla binlerce Türk Avustralya\'ya yerleşti.' },
      { from: -1975, to: -2026, puan: { eko: 5, ordu: 2, istikrar: 4 }, baskent: 'Canberra, Wellington, Port Moresby, Suva',
        gundem: 'Avustralya ve Yeni Zelanda çok kültürlü, zengin toplumlar oldu. Aborjinlerin toprak hakları tanındı (Mabo, 1992). Pasifik ada ülkeleri bağımsızlığını kazandı ama deniz seviyesinin yükselmesi Tuvalu ve Kiribati gibi ülkelerin varlığını tehdit ediyor.',
        savas: 'Bougainville çatışması (1988-1998).',
        ekonomi: 'Madencilik, eğitim, turizm; Çin ile ticaret.',
        din: 'Din dışı nüfus artıyor; Pasifik adalarında güçlü Hristiyanlık.',
        yasam: 'Maori dili Yeni Zelanda\'nın resmî dili (1987); haka dansı dünyaca ünlü.',
        bilgi: 'Tuvalu\'nun en yüksek noktası deniz seviyesinden yalnızca ~4,6 metre yüksekte; ülke 2023\'te vatandaşlarının Avustralya\'ya göç edebilmesi için bir anlaşma imzaladı.' }
    ],
    nufus: [[-1901, 6], [-1945, 10], [-1975, 18], [-2000, 31], [-2026, 46]],
    nufusNot: 'Avustralya (~27 milyon), Yeni Zelanda (~5 milyon), Papua Yeni Gine (~10-12 milyon) ve Pasifik adaları toplamı.',
    dunyaOzet: { eko: 'Okyanusya Asya ekonomilerine bağlandı; madenler, tarım ve turizm.', askeri: 'Dünya savaşlarına katılım; Pasifik\'te nükleer denemeler.' },
    events: [
      { y: -1901, t: 'Avustralya Federasyonu', k: 'm' }, { y: -1907, t: 'Yeni Zelanda dominyon', k: 'm' }, { y: -1915, t: 'Gelibolu: ANZAC', k: 'm' }, { y: -1927, t: 'Canberra başkent', k: 'm' },
      { y: -1932, t: 'Sidney Liman Köprüsü', k: 'm' }, { y: -1942, t: 'Darwin bombalandı; Kokoda', k: 'm' }, { y: -1946, t: 'Bikini nükleer denemeleri', k: 'm' }, { y: -1967, t: 'Aborjin referandumu', k: 'm' },
      { y: -1973, t: 'Sidney Opera Binası; Beyaz Avustralya politikası bitti', k: 'm' }, { y: -1975, t: 'Papua Yeni Gine bağımsız', k: 'm' }, { y: -1992, t: 'Mabo kararı', k: 'm' }, { y: -2000, t: 'Sidney Olimpiyatları', k: 'm' }, { y: -2008, t: 'Ulusal özür', k: 'm' },
      { y: -1923, t: 'Türkiye Cumhuriyeti', k: 'w' }, { y: -1945, t: 'İkinci Dünya Savaşı bitti', k: 'w' }, { y: -1991, t: 'SSCB dağıldı', k: 'w' }
    ],
    world: [{ from: -1914, to: -1945, yer: 'Dünya', t: 'Dünya savaşları.' }, { from: -1945, to: -1991, yer: 'Dünya', t: 'Soğuk Savaş.' }, { from: -1978, to: -2026, yer: 'Çin', t: 'Okyanusya\'nın en büyük ticaret ortağı.' }],
    sites: [{ ad: 'PERTH', wx: 600 }, { ad: 'ULURU', wx: 1400 }, { ad: 'DARWİN', wx: 2000 }, { ad: 'KOKODA (YENİ GİNE)', wx: 2600 }, { ad: 'CANBERRA', wx: 3300 }, { ad: 'SİDNEY', wx: 3500 }, { ad: 'AUCKLAND', wx: 4200 }, { ad: 'WELLİNGTON', wx: 4400 }, { ad: 'FİJİ', wx: 5000 }, { ad: 'TUVALU', wx: 5300 }, { ad: 'HAWAİİ', wx: 7200 }],
    monuments: [
      { id: 'limankoprusu', ad: 'Sidney Liman Köprüsü', yer: 'Sidney', wx: 3200, type: 'bridge', renk: '#7a8a8a', b: 280, h: 50, start: -1923, end: -1932, vol: 9e4 },
      { id: 'opera', ad: 'Sidney Opera Binası', yer: 'Sidney', wx: 3800, type: 'opera', b: 130, h: 55, start: -1959, end: -1973, vol: 6e4 },
      { id: 'sidney', ad: 'Sidney', yer: 'Avustralya', wx: 3480, type: 'modcity', b: 260, h: 110, n: 34, start: -1960, end: -2020, vol: 8e4 },
      { id: 'skytower', ad: 'Auckland Sky Tower', yer: 'Auckland', wx: 4200, type: 'tower', b: 12, h: 80, start: -1994, end: -1997, vol: 1.5e4 }
    ],
    hizli: [{ ad: 'Federasyon', y: -1901 }, { ad: 'Gelibolu', y: -1915 }, { ad: 'Liman Köprüsü', y: -1932 }, { ad: 'Darwin', y: -1942 }, { ad: 'Göç', y: -1967 }, { ad: 'Opera Binası', y: -1973 }, { ad: 'Mabo', y: -1992 }, { ad: 'Olimpiyat', y: -2000 }, { ad: 'Bugün', y: -2026 }],
    bilgi: {
      limankoprusu: { ikon: '🌉', yaptiran: 'Yeni Güney Galler hükümeti', donem: '1923-1932', mimar: 'John Bradfield; Dorman Long şirketi', sure: '~9 yıl', neden: 'Sidney\'nin iki yakasını bağlamak.', onem: 'Dünyanın en geniş uzun açıklıklı kemer köprüsü.', teknik: [['Kemer açıklığı', '503 m'], ['Yükseklik', '134 m'], ['Perçin', '~6 milyon']], nasil: 'Kemerin iki yarısı iki yakadan aynı anda uzatılıp ortada birleştirildi.', bugun: 'Kemerin tepesine tırmanış turları yapılıyor.', ilginc: 'Halk ona "Eski Askı" (The Coathanger) der.' },
      opera: { ikon: '🎭', yaptiran: 'Yeni Güney Galler hükümeti', donem: '1959-1973', mimar: 'Jørn Utzon (Danimarka)', sure: '14 yıl', neden: 'Sidney\'ye bir sanat merkezi.', onem: '20. yüzyılın en ünlü yapılarından.', teknik: [['Kabuk', '~1 milyon beyaz-krem fayans'], ['Yükseklik', '~65 m']], nasil: 'Kabukların hepsi aynı kürenin parçalarından kesildi: bu fikir yapıyı inşa edilebilir kıldı.', bugun: 'UNESCO Dünya Mirası (2007).', ilginc: 'Mimar Utzon tartışmalar yüzünden 1966\'da işi bırakıp ülkeden ayrıldı ve tamamlanmış binayı hiç görmedi.' },
      sidney: { ikon: '🏙️', yaptiran: '—', donem: '1788', mimar: '—', sure: '—', neden: 'Port Jackson\'ın doğal limanı.', onem: 'Okyanusya\'nın en büyük şehri (~5,5 milyon).', teknik: [['Liman', 'Dünyanın en büyük doğal limanlarından']], nasil: 'Mahkûm kolonisinden dünya şehrine.', bugun: '2000 Olimpiyatları\'nı düzenledi.', ilginc: 'Sidney\'deki bazı yerlerin adları Aborjin dilinden gelir: Bondi "suyun kayalara çarpma sesi" demektir.' },
      skytower: { ikon: '🗼', yaptiran: 'SkyCity', donem: '1994-1997', mimar: 'Craig Craig Moller', sure: '~3 yıl', neden: 'Yayın ve gözlem kulesi.', onem: 'Güney Yarımküre\'nin en yüksek serbest duran yapılarından.', teknik: [['Yükseklik', '328 m']], nasil: 'Betonarme gövde; tepesinden bungee benzeri "SkyJump" atlayışı.', bugun: 'Auckland\'ın simgesi.', ilginc: 'Kuleden 192 metre yükseklikten tellerle atlamak mümkün.' }
    },
    ulke: [
      { ad: 'Genel bakış', ikon: '🧭', html: '<p>1901\'de <b>Avustralya</b> federasyon oldu; <b>Yeni Zelanda</b> 1907\'de dominyon oldu. İki ülke Çanakkale\'de birlikte savaştı ve ANZAC geleneği doğdu. 1970\'lerden sonra çok kültürlü toplumlara dönüştüler; Pasifik ada ülkeleri bağımsızlığını kazandı.</p>' },
      { ad: 'Bugünkü ülkeler', ikon: '🗺️', html: '<ul><li><b>Avustralya</b> (~27 milyon, Canberra)</li><li><b>Yeni Zelanda</b> (~5,3 milyon, Wellington)</li><li><b>Papua Yeni Gine</b> (~10-12 milyon; 800\'den fazla dil)</li><li>Fiji, Solomon Adaları, Vanuatu, Samoa, Tonga, Kiribati, Tuvalu, Nauru, Mikronezya, Palau, Marshall Adaları</li><li>Hawaii (ABD), Fransız Polinezyası, Yeni Kaledonya (Fransa), Rapa Nui (Şili)</li></ul>' }
    ]
  });

  window.BOLGE_TASI('okyanusya');

  window.MISIR = {
    coords: { nanmadol: [6.8442, 158.335], moai: [-27.1258, -109.2768], hydepark: [-33.8696, 151.2124], waitangievi: [-35.2672, 174.0809], iolani: [21.3069, -157.8589], limankoprusu: [-33.8523, 151.2108], opera: [-33.8568, 151.2153], sidney: [-33.8688, 151.2093], skytower: [-36.8485, 174.7622] },
    wiki: { nanmadol: 'Nan Madol', moai: 'Ahu Tongariki', hydepark: 'Hyde Park Barracks, Sydney', waitangievi: 'Treaty House, Waitangi', iolani: 'ʻIolani Palace', limankoprusu: 'Sydney Harbour Bridge', opera: 'Sydney Opera House', sidney: 'Sydney', skytower: 'Sky Tower (Auckland)' },
    bilgi: {}, alt: {},
    kureAdlari: [[-25, 134, 'AVUSTRALYA', 'misir', 2.0], [-6, 145, 'YENİ GİNE', 'bolge', 3.2], [-41, 172, 'YENİ ZELANDA', 'bolge', 3.0], [-18, 160, 'MERCAN DENİZİ', 'deniz', 3.0], [-40, 160, 'TASMAN DENİZİ', 'deniz', 3.0],
      [-10, -150, 'POLİNEZYA', 'bolge', 2.6], [8, 160, 'MİKRONEZYA', 'bolge', 3.0], [-12, 165, 'MELANEZYA', 'bolge', 3.4], [0, -170, 'PASİFİK OKYANUSU', 'deniz', 1.8], [-25.3, 131, 'Uluru', 'kucuk', 6]],
    sehirler: [
      { ad: 'Nan Madol', ll: [6.8442, 158.335], from: -1180, to: -1628, b: [[-1180, -1628]], not: 'Saudeleur başkenti.' },
      { ad: 'Tongatapu (Mu\'a)', ll: [-21.17, -175.12], from: -950, to: -2026, b: [[-1200, -1800]], not: 'Tu\'i Tonga\'nın merkezi.' },
      { ad: 'Rapa Nui', ll: [-27.1127, -109.3497], from: -1200, to: -2026, not: 'Moailerin adası.' },
      { ad: 'Sidney', ll: [-33.8688, 151.2093], from: -1788, to: -2026, b: [[-1788, -1901]], not: 'Avustralya\'nın ilk koloni şehri.' },
      { ad: 'Melbourne', ll: [-37.8136, 144.9631], from: -1835, to: -2026, b: [[-1901, -1927]], not: 'Avustralya\'nın ilk federal başkenti.' },
      { ad: 'Canberra', ll: [-35.2809, 149.13], from: -1913, to: -2026, b: [[-1927, -2026]], not: 'Avustralya\'nın planlı başkenti.' },
      { ad: 'Auckland', ll: [-36.8485, 174.7633], from: -1840, to: -2026, b: [[-1841, -1865]], not: 'Yeni Zelanda\'nın en büyük şehri.' },
      { ad: 'Wellington', ll: [-41.2865, 174.7762], from: -1840, to: -2026, b: [[-1865, -2026]], not: 'Yeni Zelanda\'nın başkenti.' },
      { ad: 'Honolulu', ll: [21.3069, -157.8583], from: -1795, to: -2026, b: [[-1845, -1893]], not: 'Hawaii krallığının başkenti.' },
      { ad: 'Port Moresby', ll: [-9.4438, 147.1803], from: -1873, to: -2026, b: [[-1975, -2026]], not: 'Papua Yeni Gine\'nin başkenti.' }
    ],
    nil: { ikon: '🌊', title: 'Pasifik Okyanusu ve kurak kıta', sub: 'Dünyanın en büyük okyanusu, en kurak yerleşik kıtası', foto: 'Pacific Ocean', tabs: [{ ad: '🌊 Coğrafya', html: '<ul class="hap"><li><b>Pasifik</b> dünya yüzeyinin yaklaşık üçte birini kaplar: bütün kıtaların toplamından büyük.</li><li><b>Avustralya</b> insanların yaşadığı en kurak kıta; en uzun nehri <b>Murray-Darling</b> (~3.700 km).</li><li><b>Büyük Set Resifi</b> (~2.300 km) canlıların yaptığı en büyük yapı; uzaydan görülebilir.</li><li>Polinezyalı denizciler dalga örüntülerini ve yıldızları okuyarak yol buldu; Marshall Adaları\'nda dalgaları gösteren çubuk haritalar yapıldı.</li></ul>' }] },
    simgeler: [
      { id: 'ok-ruya', ad: 'Rüya Zamanı ve kaya sanatı', ikon: '🎨', wiki: 'Australian Aboriginal art', git: { place: 'okyanusya-antik', y: 2500 }, ozet: 'Dünyanın en eski yaşayan kültürü.', hap: ['50.000+ yıl.', 'Şarkı yolları.'] },
      { id: 'ok-kano', ad: 'Polinezya kanoları', ikon: '🛶', wiki: 'Polynesian navigation', git: { place: 'okyanusya-antik', y: -1100 }, ozet: 'Yıldızlarla okyanusu aşmak.', hap: ['Çift gövde.', '25 milyon km²lik üçgen.'] },
      { id: 'ok-nanmadol', ad: 'Nan Madol', ikon: '🪨', wiki: 'Nan Madol', git: { place: 'okyanusya-antik', y: -1400, id: 'nanmadol' }, ozet: 'Pasifik\'in Venedik\'i.', hap: ['92 yapay ada.', 'Bazalt sütunlar.'] },
      { id: 'ok-moai', ad: 'Moai', ikon: '🗿', wiki: 'Moai', git: { place: 'okyanusya-antik', y: -1450, id: 'moai' }, ozet: 'Rapa Nui\'nin dev heykelleri.', hap: ['~1.000 heykel.', '~1250-1500.'] },
      { id: 'ok-cook', ad: 'James Cook', ikon: '⛵', wiki: 'James Cook', git: { place: 'okyanusya-somurge', y: -1770 }, ozet: 'Pasifik\'in haritası.', hap: ['3 yolculuk.', '1779\'da Hawaii\'de öldü.'] },
      { id: 'ok-waitangi', ad: 'Waitangi Antlaşması', ikon: '📜', wiki: 'Treaty of Waitangi', git: { place: 'okyanusya-somurge', y: -1840, id: 'waitangievi' }, ozet: 'Yeni Zelanda\'nın kuruluş belgesi.', hap: ['6 Şubat 1840.', 'İki dilde, iki anlam.'] },
      { id: 'ok-anzac', ad: 'ANZAC ve Çanakkale', ikon: '🎖️', wiki: 'Anzac Day', git: { place: 'okyanusya-modern', y: -1915 }, ozet: 'Gelibolu\'da doğan bir gelenek.', hap: ['25 Nisan 1915.', 'Anzak Koyu.'] },
      { id: 'ok-opera', ad: 'Sidney Opera Binası', ikon: '🎭', wiki: 'Sydney Opera House', git: { place: 'okyanusya-modern', y: -1973, id: 'opera' }, ozet: 'Yelken kabuklu sanat merkezi.', hap: ['1973.', 'Jørn Utzon.'] }
    ],
    bugun: '<p>Okyanusya\'da 14 bağımsız ülke ve ~46 milyon kişi yaşıyor. <b>Avustralya</b> nüfusun yarısından fazlası.</p><ul class="hap"><li><b>Diller:</b> İngilizce, Maorice, Tok Pisin, Fijice, Samoaca, Tongaca; Papua Yeni Gine\'de 800\'den fazla dil.</li><li><b>Doğa:</b> Büyük Set Resifi, Uluru, kanguru, koala, kivi.</li><li><b>İklim:</b> alçak mercan adaları deniz seviyesinin yükselmesiyle tehdit altında.</li><li><b>Kültür:</b> ragbi ve haka, Aborjin sanatı, Polinezya dansları.</li></ul>'
  };
  window.SEHIR_BILGI = {
    'Sidney': { bugun: 'Yeni Güney Galler, Avustralya', kurulus: '26 Ocak 1788', wiki: 'Sydney', onem: 'Avustralya\'nın en büyük şehri.', ilginc: '26 Ocak Avustralya Günü olarak kutlanır; Aborjinlerin bir kısmı bu günü "İstila Günü" olarak anar.' },
    'Rapa Nui': { bugun: 'Paskalya Adası, Şili', kurulus: '~1200 (Polinezya yerleşimi)', wiki: 'Easter Island', onem: 'Dünyanın en uzak yerleşik adalarından.', ilginc: 'Avrupalılar adaya 1722\'de Paskalya günü geldiği için "Paskalya Adası" adını verdi.' },
    'Wellington': { bugun: 'Yeni Zelanda', kurulus: '1840', wiki: 'Wellington', onem: 'Dünyanın en güneydeki başkenti.', ilginc: 'Rüzgârıyla ünlü: "Rüzgârlı Wellington" diye anılır.' }
  };
  window.KULTUR = { tanrilar: [], olumler: [], roller: [], mumyalama: '', ic: { eslesme: {}, sahneler: {} }, bilim: { genel: '', cag: {} } };
  window.SINIRLAR = [];

  window.OLAYLAR = [
    { id: 'anzac', tur: 'savas', ad: 'Gelibolu: ANZAC çıkarması', y: -1915, ll: [40.24, 26.28], onem: 5, wiki: 'Landing at Anzac Cove', taraflar: ['Avustralya ve Yeni Zelanda Kolordusu (ANZAC)', 'Osmanlı (Mustafa Kemal)'], kazanan: 'Osmanlı', sonuc: '25 Nisan 1915\'te başlayan çıkarma başarısız oldu; ~8.700 Avustralyalı ve ~2.800 Yeni Zelandalı öldü. ANZAC Günü\'nün kaynağı.' },
    { id: 'kokoda', tur: 'savas', ad: 'Kokoda Yolu', y: -1942, ll: [-8.88, 147.73], onem: 4, wiki: 'Kokoda Track campaign', taraflar: ['Avustralya ve Papualı taşıyıcılar', 'Japonya'], kazanan: 'Avustralya', sonuc: 'Japonların Port Moresby\'ye ilerleyişi durduruldu.' },
    { id: 'guadalcanal', tur: 'savas', ad: 'Guadalcanal', y: -1942, ll: [-9.6, 160.15], onem: 4, wiki: 'Guadalcanal campaign', taraflar: ['ABD ve müttefikler', 'Japonya'], kazanan: 'Müttefikler', sonuc: 'Pasifik Savaşı\'nda müttefiklerin ilk büyük kara zaferi.' },
    { id: 'cookhawaii', tur: 'savas', ad: 'Cook\'un ölümü (Kealakekua)', y: -1779, ll: [19.48, -155.93], onem: 3, wiki: 'James Cook', taraflar: ['Hawaii yerlileri', 'İngiliz denizciler'], sonuc: 'Çalınan bir kayık yüzünden çıkan çatışmada Cook öldürüldü.' },
    { id: 'waitangi', tur: 'antlasma', ad: 'Waitangi Antlaşması', y: -1840, ll: [-35.27, 174.08], onem: 5, wiki: 'Treaty of Waitangi', taraflar: ['İngiliz Tacı', '~500 Maori şefi'], sonuc: 'Yeni Zelanda İngiliz kolonisi oldu; Maori toprak hakları tartışması bugün de sürüyor.' },
    { id: 'ilkfilo', tur: 'olay', ad: 'İlk Filo Sidney\'de', y: -1788, ll: [-33.86, 151.21], onem: 5, wiki: 'First Fleet', sonuc: '11 gemi ve ~750 mahkûm; Avustralya\'nın İngiliz kolonizasyonu başladı.' },
    { id: 'kadinoy1893', tur: 'olay', ad: 'Kadınlara oy hakkı', y: -1893, ll: [-41.29, 174.78], onem: 4, wiki: 'Women\'s suffrage in New Zealand', sonuc: 'Yeni Zelanda ulusal seçimlerde kadınlara oy hakkı veren ilk ülke oldu; Kate Sheppard\'ın dilekçesi.' },
    { id: 'mabo', tur: 'olay', ad: 'Mabo kararı', y: -1992, ll: [-9.93, 144.05], onem: 4, wiki: 'Mabo v Queensland (No 2)', sonuc: 'Avustralya Yüksek Mahkemesi "kimsenin toprağı değildi" (terra nullius) görüşünü reddetti; yerli toprak hakları tanındı.' },
    { id: 'bikini', tur: 'afet', alt: 'kaza', ad: 'Bikini nükleer denemeleri', y: -1946, ll: [11.6, 165.38], onem: 4, wiki: 'Nuclear testing at Bikini Atoll', sonuc: 'ABD 1946-1958 arası 23 nükleer deneme yaptı; ada halkı sürüldü ve bir daha dönemedi.' },
    { id: 'tsunami1960', tur: 'afet', alt: 'tsunami', ad: '1960 Şili tsunamisi Pasifik\'te', y: -1960, ll: [19.72, -155.08], onem: 3, wiki: '1960 Valdivia earthquake', sonuc: 'Şili depreminin tsunamisi Hawaii\'de Hilo\'yu vurdu ve Rapa Nui\'de Ahu Tongariki\'nin Moailerini devirdi.' },
    { id: 'karacuma', tur: 'afet', alt: 'yangin', ad: 'Kara Yaz orman yangınları', y: -2020, ll: [-35.5, 149.5], onem: 4, wiki: '2019–20 Australian bushfire season', sonuc: '~24 milyon hektar yandı; yaklaşık 3 milyar hayvanın etkilendiği tahmin ediliyor.' }
  ];

  window.ULKE_SAYFA = window.ULKE_SAYFA || {};
  window.ULKE_SAYFA.okyanusya = {
    id: 'okyanusya', ad: 'Okyanusya', ikon: '🦘', kw: ['okyanusya', 'avustralya', 'yeni zelanda', 'pasifik', 'polinezya', 'aborjin', 'maori', 'hawaii', 'paskalya adası', 'moai', 'anzac', 'sidney', 'papua', 'fiji', 'tonga', 'samoa'],
    altBaslik: 'MÖ ~3000 – bugün · Aborjinlerden Polinezyalı denizcilere, Moai\'den Sidney\'e', kapakWiki: 'Sydney Opera House', kapakAd: 'Sidney Opera Binası', merkez: [-22, 155], merkezZ: 2.8,
    ozet: ['<b>Okyanusya</b>, Avustralya kıtası ile Pasifik Okyanusu\'ndaki binlerce adadan oluşur. Aborjinler dünyanın kesintisiz süren en eski kültürünü yaşattı; Polinezyalılar yıldızlarla yol bularak Pasifik\'in uzak köşelerine yerleşti.', '17. yüzyıldan sonra Avrupalılar geldi; Avustralya ve Yeni Zelanda İngiliz kolonisi oldu. Bugün çok kültürlü uluslar ve bağımsız ada ülkeleri var.'],
    bilgiKutusu: [['Tarih', 'En az 50.000 yıl (Aborjinler) – bugün'], ['Önemli merkezler', 'Tongatapu, Nan Madol, Rapa Nui, Sidney, Melbourne, Wellington, Honolulu'], ['Diller', 'İngilizce, Maorice, Tok Pisin ve yüzlerce yerli dil'], ['Bugün', '14 ülke, ~46 milyon kişi']],
    donemler: { 'okyanusya-antik': 'Aborjinler, Lapita, Polinezya yolculukları, Moai.', 'okyanusya-somurge': 'Kaşifler, koloniler, Hawaii krallığı.', 'okyanusya-modern': 'Federasyon, ANZAC, çok kültürlülük ve iklim.' },
    kultur: [{ baslik: 'Diller', ikon: '🗣️', html: '<p>Avustralya\'da 1788\'de 250\'den fazla Aborjin dili vardı. Austronezya dilleri (Maorice, Hawaiice, Samoaca) Madagaskar\'dan Rapa Nui\'ye uzanan dünyanın en yaygın dil ailelerinden biridir. Papua Yeni Gine\'de 800\'den fazla dil konuşulur.</p>' }, { baslik: 'İnanç', ikon: '🌀', html: '<p>Aborjinlerin Rüya Zamanı, Polinezyalıların mana ve tapu kavramları; bugün Hristiyanlık yaygın.</p>' }],
    figurler: [
      { id: 'opera', ad: 'Sidney Opera Binası', tur: 'yapı', wiki: 'Sydney Opera House', ll: [-33.8568, 151.2153], z: 85, yapim: '1959-1973', kim: 'Jørn Utzon', durum: 'ayakta', durumYazi: 'Ayakta.', nerede: 'Sidney', metin: 'Yelken kabukları.', git: { place: 'okyanusya-modern', y: -1973, id: 'opera' } },
      { id: 'moai', ad: 'Moai', tur: 'yapı', wiki: 'Moai', ll: [-27.1258, -109.2768], z: 80, yapim: '~1250-1500', kim: 'Rapa Nui halkı', durum: 'ayakta', durumYazi: 'Yeniden dikildi.', nerede: 'Paskalya Adası', metin: 'Dev atalar.', git: { place: 'okyanusya-antik', y: -1450, id: 'moai' } }
    ],
    kisiler: [
      { ad: 'Tupaia', wiki: 'Tupaia (navigator)', yil: '~1725-1770', ozet: 'Cook\'a yol gösteren Tahitili denizci.', y: -1769 }, { ad: 'James Cook', wiki: 'James Cook', yil: '1728-1779', ozet: 'Kaşif.', y: -1770 },
      { ad: 'I. Kamehameha', wiki: 'Kamehameha I', yil: '~1758-1819', ozet: 'Hawaii\'yi birleştiren kral.', y: -1810 }, { ad: 'Kraliçe Liliuokalani', wiki: 'Liliʻuokalani', yil: '1838-1917', ozet: 'Hawaii\'nin son kraliçesi.', y: -1893 },
      { ad: 'Kate Sheppard', wiki: 'Kate Sheppard', yil: '1847-1934', ozet: 'Kadınlara oy hakkı mücadelesi.', y: -1893 }, { ad: 'Eddie Mabo', wiki: 'Eddie Mabo', yil: '1936-1992', ozet: 'Toprak hakları mücadelesi.', y: -1992 },
      { ad: 'Edmund Hillary', wiki: 'Edmund Hillary', yil: '1919-2008', ozet: 'Everest\'e ilk çıkanlardan.', y: -1953 }
    ],
    biliyorMuydunuz: ['Avustralya\'da insandan çok kanguru var.', 'Yeni Zelanda\'da insandan ~5 kat fazla koyun yaşıyor.', 'Papua Yeni Gine dünyanın dil bakımından en çeşitli ülkesi.', 'Kiribati dört yarımkürenin hepsinde toprağı olan tek ülke.']
  };
})();
