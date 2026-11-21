// Kuzey Amerika (bugünkü ABD ve Kanada; Meksika "Mezoamerika" bölgesinde).
// Yıl: MÖ pozitif, MS negatif. Sahne (wx): batıdan doğuya
//   Alaska 600 · Vancouver 1200 · San Francisco 1500 · Los Angeles 1800 · Mesa Verde/Chaco 2600 · Teksas 3400
//   Cahokia/St. Louis 4300 · Şikago 4700 · Toronto 5600 · Washington 6300 · Philadelphia 6500 · New York 6800 · Boston 7100 · Québec 7600 · Newfoundland 7900
// Kaynaklar: Mann, "1491" (2005); Pauketat, "Cahokia" (2009); Taylor, "American Colonies" (2001);
//   Wood, "Empire of Liberty" (2009); McPherson, "Battle Cry of Freedom" (1988); Morton, "A Short History of Canada" (2017).
(() => {
  window.PLACES = window.PLACES || [];

  // ================= 1. YERLİ HALKLAR =================
  window.PLACES.push({
    id: 'kuzeyamerika-yerli', sira: 1, kisa: 'Yerli halklar ve höyük şehirleri', aralikAd: 'MÖ 3500 – MS 1607',
    baslik: 'Poverty Point · Hopewell · Cahokia · Pueblolar · İrokua Birliği · Vikingler',
    ulkeAlt: 'Höyük yapıcılarından Pueblo köylerine, İrokua Birliği\'nden ilk Avrupalı yerleşimlere (MÖ 3500 – MS 1607)',
    from: 3500, to: -1607, start: -1100,
    not: 'Kuzey Amerika yerlilerinin yazısı yoktu; tarihler arkeolojiye ve sözlü geleneğe dayanır.', baskent: 'Tek merkez yok: Poverty Point, Cahokia, Chaco Kanyonu, İrokua meclisleri',
    sahne: { kizak: false, araba: false, katipYok: true, giyim: 'antik' },
    dynasties: [{ from: 3500, to: 1000, ad: 'Arkaik dönem', renk: '#7a6a4a' }, { from: 1000, to: -800, ad: 'Woodland (Adena, Hopewell)', renk: '#5a7a3a' }, { from: -800, to: -1350, ad: 'Mississippi ve Pueblo kültürleri', renk: '#a8742e' }, { from: -1350, to: -1607, ad: 'İrokualar ve ilk Avrupalılar', renk: '#6a4a3a' }],
    rulers: [
      { from: 3500, to: 1000, ad: 'Arkaik dönem toplulukları', kisa: '?', kim: 'Louisiana\'da Watson Brake (MÖ ~3500) ve Poverty Point (MÖ ~1700-1100) toprak höyükleri: tarımdan önce yapılmış anıtlar.' },
      { from: 1000, to: -500, ad: 'Adena ve Hopewell önderleri', kisa: 'Hopewell', kim: 'Ohio vadisinde törensel toprak yapılar ve kıta boyunca ticaret ağı: Büyük Göller bakırı, Kayalık Dağlar\'ın obsidyeni, Meksika Körfezi\'nin deniz kabukları.' },
      { from: -500, to: -1050, ad: 'Pueblo ve Mississippi toplulukları', kisa: '?', kim: 'Mısır tarımı yayıldı; güneybatıda Pueblo köyleri, Mississippi vadisinde höyüklü kasabalar.' },
      { from: -1050, to: -1350, ad: 'Cahokia\'nın önderleri', kisa: 'Cahokia', kim: 'Cahokia 10.000-20.000 kişiyle Meksika\'nın kuzeyindeki en büyük şehir oldu. Chaco Kanyonu\'nda "büyük evler".' },
      { from: -1350, to: -1450, ad: 'Pueblo ve Woodland toplulukları', kisa: '?', kim: 'Kuraklıklarla Cahokia ve Mesa Verde terk edildi; topluluklar yer değiştirdi.' },
      { from: -1450, to: -1607, ad: 'İrokua (Haudenosaunee) Birliği ve ilk Avrupalılar', kisa: 'İrokualar', kim: 'Beş ulus Büyük Barış Yasası ile birleşti. Cabot (1497), Cartier (1534) ve İspanyollar kıyılara geldi; salgın hastalıklar yayıldı.' }
    ],
    eras: [
      { from: 3500, to: 1000, puan: { eko: 2, ordu: 1, istikrar: 4 }, baskent: 'Yok',
        gundem: 'Avcı-toplayıcılar ve balıkçılar kıtanın her yerinde. Louisiana\'da insanlar daha tarımı bilmeden dev toprak halkalar ve höyükler yaptı: Poverty Point\'in yapımı milyonlarca sepet toprak gerektirdi.',
        savas: 'Örgütlü ordular yok; mızrak atıcı (atlatl) avda ve çatışmada.',
        ekonomi: 'Bizon, geyik, balık, deniz kabuğu; uzak ticaret.',
        din: 'Doğa ruhları ve ataların anısına törenler.',
        yasam: 'Mevsimlik kamp yerleri, kemik ve taş aletler.',
        bilgi: 'Poverty Point UNESCO listesindeki Kuzey Amerika anıtlarından biridir ve Stonehenge\'in son evresiyle aynı çağdadır.' },
      { from: 1000, to: -800, puan: { eko: 3, ordu: 2, istikrar: 4 }, baskent: 'Ohio vadisi törensel merkezleri',
        gundem: 'Adena ve Hopewell kültürleri Ohio ve Mississippi vadilerinde toprak höyükler ve geometrik çevreler yaptı. Hopewell ticaret ağı kıtanın dört bir yanından nadir malzemeler topladı. Güneybatıda mısır ve fasulye tarımı başladı.',
        savas: 'Yay ve ok MS ~500\'de yaygınlaştı.',
        ekonomi: 'Mısır, kabak ve fasulye: "Üç Kız Kardeş".',
        din: 'Ölüler için büyük törensel höyükler; Yılan Höyüğü (Ohio).',
        yasam: 'Kil çömlekler, bakır süsler, mika kesimlerinden eller ve kuşlar.',
        bilgi: 'Hopewell yapıları Ay\'ın 18,6 yıllık döngüsüne göre hizalanmış: yerliler gökyüzünü dikkatle gözlüyordu.' },
      { from: -800, to: -1350, puan: { eko: 4, ordu: 3, istikrar: 3 }, baskent: 'Cahokia, Chaco Kanyonu',
        gundem: 'Mississippi kültürü Cahokia\'yı kurdu: 120 höyüklü, meydanlı, ahşap güneş takvimli bir şehir. Güneybatıda Atalardan Kalma Puebloluar Chaco Kanyonu\'nda yüzlerce odalı taş "büyük evler" ve Mesa Verde\'de uçurum evleri yaptı. Vikingler Newfoundland\'e geldi (~1000).',
        savas: 'Ahşap çit surlar; kuraklık dönemlerinde çatışmalar.',
        ekonomi: 'Mısır tarımı nüfusu artırdı; turkuaz ve kakao ticareti Meksika\'ya kadar uzandı.',
        din: 'Güneş, gökyüzü ve bereket törenleri; kiva denilen yer altı tören odaları.',
        yasam: 'Chunkey oyunu: taş tekerleğe mızrak atma.',
        bilgi: 'Chaco Kanyonu\'ndaki çanak çömleklerde kakao izleri bulundu: kakao 2.000 km uzaktaki Meksika\'dan geliyordu.' },
      { from: -1350, to: -1607, puan: { eko: 3, ordu: 3, istikrar: 2 }, baskent: 'İrokua meclisi (Onondaga)',
        gundem: 'İrokua Birliği beş ulusu barış içinde birleştirdi. 1492\'den sonra Avrupalılar geldi: hastalıklar yerli nüfusun büyük kısmını öldürdü. İspanyollar Florida\'da St. Augustine\'i kurdu (1565); İngilizlerin Roanoke kolonisi kayboldu (1590).',
        savas: 'İspanyol fatihlerin seferleri (de Soto 1539-1542).',
        ekonomi: 'Avrupalılarla kürk ve balık ticareti başlıyor.',
        din: 'Uzun evler ve sözlü yasa: wampum kuşakları.',
        yasam: 'At henüz yok; Ova yerlileri ata 17. yüzyılda kavuşacak.',
        bilgi: 'İrokua Birliği\'nin meclis düzeninin ABD anayasasını yazanları etkilediği ABD Kongresi\'nin 1988 kararında kabul edildi; tarihçiler etkinin derecesini tartışıyor.' }
    ],
    nufus: [[3500, 0.3], [1000, 1], [-1000, 2], [-1300, 3], [-1500, 4], [-1607, 2]],
    nufusNot: 'Meksika\'nın kuzeyi için çok tartışmalı tahminler (1492\'de 2-7 milyon arası); salgınlar nüfusu çok azalttı.',
    dunyaOzet: { eko: 'Kuzey Amerika dünyanın geri kalanından ayrı gelişti; mısır tarımı Mezoamerika\'dan geldi.', askeri: 'Mızrak atıcı, sonra yay ve ok; at ve demir yok.' },
    events: [
      { y: 3500, t: 'Watson Brake höyükleri', k: 'm' }, { y: 1600, t: 'Poverty Point', k: 'm' }, { y: 500, t: 'Adena kültürü', k: 'm' }, { y: 100, t: 'Hopewell ticaret ağı', k: 'm' },
      { y: -1000, t: 'Vikingler Newfoundland\'de', k: 'm' }, { y: -1050, t: 'Cahokia büyüdü', k: 'm' }, { y: -1100, t: 'Chaco Kanyonu\'nun büyük evleri', k: 'm' }, { y: -1276, t: 'Büyük kuraklık', k: 'm' },
      { y: -1450, t: 'İrokua Birliği (tahmin)', k: 'm' }, { y: -1497, t: 'Cabot Newfoundland\'de', k: 'm' }, { y: -1534, t: 'Cartier St. Lawrence\'ta', k: 'm' }, { y: -1565, t: 'St. Augustine kuruldu', k: 'm' },
      { y: 2560, t: 'Büyük Piramit', k: 'w' }, { y: -1206, t: 'Cengiz Han', k: 'w' }, { y: -1492, t: 'Kolomb Karayipler\'de', k: 'w' }
    ],
    world: [{ from: 1200, to: -900, yer: 'Mezoamerika', t: 'Olmekler ve Mayalar.' }, { from: -1325, to: -1521, yer: 'Meksika', t: 'Aztekler.' }, { from: -1438, to: -1572, yer: 'Güney Amerika', t: 'İnkalar.' }],
    sites: [{ ad: 'ALASKA', wx: 600 }, { ad: 'KALİFORNİYA', wx: 1600 }, { ad: 'MESA VERDE', wx: 2500 }, { ad: 'CHACO KANYONU', wx: 2700 }, { ad: 'BÜYÜK OVALAR', wx: 3400 }, { ad: 'POVERTY POİNT', wx: 3900 }, { ad: 'CAHOKİA', wx: 4300 }, { ad: 'OHİO (HOPEWELL)', wx: 5000 }, { ad: 'İROKUA ÜLKESİ', wx: 5800 }, { ad: 'L\'ANSE AUX MEADOWS', wx: 7900 }],
    monuments: [
      { id: 'povertypoint', ad: 'Poverty Point höyükleri', yer: 'Louisiana', wx: 3900, type: 'mound', b: 160, h: 16, renk: '#7a9a5a', start: 1700, end: 1600, vol: 6e4 },
      { id: 'chaco', ad: 'Chaco Kanyonu: Pueblo Bonito', yer: 'New Mexico', wx: 2700, type: 'city', wall: true, b: 220, n: 18, hk: 0.24, start: -850, end: -1100, vol: 5e4, ruin: -1150 },
      { id: 'cahokia', ad: 'Cahokia: Keşişler Höyüğü', yer: 'Illinois', wx: 4300, type: 'mound', b: 220, h: 30, renk: '#6a8a4a', start: -900, end: -1200, vol: 1.2e5, ruin: -1400 }
    ],
    hizli: [{ ad: 'Watson Brake', y: 3500 }, { ad: 'Poverty Point', y: 1600 }, { ad: 'Hopewell', y: 100 }, { ad: 'Vikingler', y: -1000 }, { ad: 'Cahokia', y: -1100 }, { ad: 'Chaco', y: -1100 }, { ad: 'İrokualar', y: -1500 }, { ad: 'Cartier', y: -1534 }],
    bilgi: {
      povertypoint: { ikon: '⛰️', yaptiran: 'Avcı-toplayıcı topluluklar', donem: 'MÖ ~1700-1100', mimar: '—', sure: 'Kuşaklar boyunca', neden: 'Tören ve toplanma yeri.', onem: 'Avcı-toplayıcıların yaptığı dünyanın en büyük toprak anıtlarından.', teknik: [['Halka', '6 iç içe yarım halka, çap ~1,2 km'], ['Toprak', '~750.000 m³']], nasil: 'Sepetlerle taşınan toprak; büyük höyüğün birkaç ay içinde yapıldığı düşünülüyor.', bugun: 'UNESCO Dünya Mirası (2014).', ilginc: 'Bölgede taş olmadığı için insanlar pişirmek için pişmiş kil toplar kullandı; binlercesi bulundu.' },
      chaco: { ikon: '🏜️', yaptiran: 'Atalardan Kalma Pueblolular', donem: '~850-1150', mimar: '—', sure: '~300 yıl', neden: 'Tören, ticaret ve gökyüzü gözlem merkezi.', onem: 'Güneybatının en büyük taş yapıları.', teknik: [['Pueblo Bonito', '~650 oda, 4-5 kat']], nasil: 'İnce taş levhalar; 80 km uzaktan getirilen 200.000 kütük.', bugun: 'UNESCO Dünya Mirası (1987).', ilginc: 'Duvarlar ve yollar güneş ve ay döngülerine göre hizalanmış; Fajada Butte\'deki "güneş hançeri" gündönümlerini gösterir.' },
      cahokia: { ikon: '🏔️', yaptiran: 'Mississippi kültürü', donem: '~900-1200', mimar: '—', sure: '~300 yıl', neden: 'Şehrin büyük tören tepesi; önderin evi.', onem: 'Amerika\'nın en büyük toprak yapısı.', teknik: [['Taban', '~291 × 236 m'], ['Yükseklik', '~30 m']], nasil: 'Sepetlerle taşınan ~22 milyon fit küp toprak.', bugun: 'UNESCO Dünya Mirası (1982).', ilginc: 'Cahokia 1250 civarında aynı dönemdeki Londra kadar kalabalıktı.' }
    },
    ulke: [
      { ad: 'Genel bakış', ikon: '🧭', html: '<p>Kuzey Amerika\'ya insanlar en az 15.000 yıl önce Asya\'dan geldi. Yüzlerce farklı yerli halk avcılık, balıkçılık ve tarımla yaşadı. <b>Höyük yapıcılar</b> (Poverty Point, Hopewell, Cahokia), güneybatının <b>Puebloluları</b> ve kuzeydoğunun <b>İrokua Birliği</b> en bilinen kültürlerdir.</p>' },
      { ad: 'Halklar', ikon: '👥', html: '<ul><li><b>Kuzeydoğu:</b> İrokualar, Algonkinler</li><li><b>Güneydoğu:</b> Çerokiler, Muskogee (Krikler)</li><li><b>Ovalar:</b> Lakota, Çeyenler, Komançiler</li><li><b>Güneybatı:</b> Pueblolar, Navajolar, Apaçiler</li><li><b>Kuzeybatı kıyısı:</b> Haidalar, Tlingitler (totem direkleri)</li><li><b>Arktik:</b> İnuitler</li></ul>' }
    ]
  });

  // ================= 2. SÖMÜRGELER, BAĞIMSIZLIK VE İÇ SAVAŞ =================
  window.PLACES.push({
    id: 'kuzeyamerika-somurge', sira: 2, kisa: 'Sömürgeler, bağımsızlık ve iç savaş', aralikAd: 'MS 1607 – 1865',
    baslik: 'Jamestown · Québec · Bağımsızlık Bildirgesi · Washington · batıya göç · Lincoln',
    ulkeAlt: 'İngiliz ve Fransız sömürgelerinden Amerika Birleşik Devletleri\'nin kuruluşuna ve İç Savaş\'a (MS 1607 – 1865)',
    from: -1607, to: -1865, start: -1776,
    not: 'Tarihler kesindir.', baskent: 'Jamestown, Boston, Québec; 1790\'dan sonra Philadelphia, 1800\'den Washington',
    sahne: { kizak: false, araba: true, buhar: -1830, giyim: 'cubbe' },
    dynasties: [{ from: -1607, to: -1776, ad: 'İngiliz ve Fransız sömürgeleri', renk: '#7a3a3a' }, { from: -1776, to: -1861, ad: 'Genç Cumhuriyet', renk: '#2a4a8a' }, { from: -1861, to: -1865, ad: 'İç Savaş', renk: '#5a5a5a' }],
    rulers: [
      { from: -1607, to: -1689, ad: 'İngiliz, Fransız ve Hollanda sömürge yönetimleri', kisa: 'Sömürgeler', kim: 'Jamestown (1607), Québec (1608), Plymouth (1620), Yeni Amsterdam (1626; 1664\'te New York oldu).' },
      { from: -1689, to: -1763, ad: 'Sömürge savaşları', kisa: '?', kim: 'İngiltere ile Fransa dört savaşta kıtayı paylaşamadı; 1763\'te Fransa Kanada\'yı kaybetti.' },
      { from: -1763, to: -1789, ad: 'Devrim ve Kıta Kongresi', kisa: 'Kongre', kim: '"Temsil yoksa vergi yok". Bağımsızlık Bildirgesi (4 Temmuz 1776), savaş 1783\'te bitti; Anayasa 1787\'de yazıldı.' },
      { from: -1789, to: -1797, ad: 'George Washington', kisa: 'Washington', kim: 'ABD\'nin ilk başkanı; iki dönemden sonra kendi isteğiyle çekildi.' },
      { from: -1797, to: -1829, ad: 'Adams, Jefferson, Madison, Monroe', kisa: 'Jefferson', kim: 'Louisiana Satın Alımı (1803) ülkeyi ikiye katladı; Lewis ve Clark Pasifik\'e ulaştı; 1812 Savaşı.' },
      { from: -1829, to: -1861, ad: 'Andrew Jackson ve batıya genişleme', kisa: 'Jackson', kim: 'Yerli halkların zorla sürülmesi (Gözyaşı Yolu, 1838). Meksika savaşıyla Kaliforniya alındı (1848); altına hücum.' },
      { from: -1861, to: -1865, ad: 'Abraham Lincoln', kisa: 'Lincoln', kim: 'Güney eyaletleri ayrıldı; İç Savaş\'ta Birlik kazandı ve kölelik kaldırıldı. Lincoln savaştan birkaç gün sonra öldürüldü.' }
    ],
    eras: [
      { from: -1607, to: -1763, puan: { eko: 3, ordu: 2, istikrar: 3 }, baskent: 'Sömürge başkentleri',
        gundem: 'İngilizler doğu kıyısında 13 koloni kurdu; Fransızlar St. Lawrence ve Mississippi boyunca kürk ticareti yaptı. Güney kolonilerinde tütün ve pirinç plantasyonları Afrikalı kölelerle çalıştırıldı. Yerli halklar hastalık ve savaşlarla topraklarını kaybetti.',
        savas: 'Kral Philip Savaşı (1675-76), Fransız ve Kızılderili Savaşı (1754-1763).',
        ekonomi: 'Kürk, tütün, balık, kereste; köle ticareti.',
        din: 'Püritenler, Quakerlar (Pennsylvania), Katolikler (Québec, Maryland).',
        yasam: 'Harvard Koleji (1636); ilk gazeteler ve matbaalar.',
        bilgi: 'Hollandalılar Manhattan\'ı 1626\'da yerlilerden yaklaşık 60 gulden değerinde mal karşılığında "satın aldı"; ama yerliler için toprak satışı fikri bile yabancıydı.' },
      { from: -1763, to: -1815, puan: { eko: 4, ordu: 3, istikrar: 3 }, baskent: 'Philadelphia, sonra Washington; Québec',
        gundem: 'İngiliz vergilerine karşı öfke Boston Çay Partisi\'ne (1773) ve Bağımsızlık Savaşı\'na yol açtı. 4 Temmuz 1776\'da bağımsızlık ilan edildi; Fransa\'nın yardımıyla kazanıldı. Anayasa (1787) güçler ayrılığı ve haklar bildirgesiyle dünyaya örnek oldu. Kanada İngiliz kaldı.',
        savas: 'Lexington (1775), Saratoga (1777), Yorktown (1781); 1812 Savaşı\'nda İngilizler Washington\'ı yaktı.',
        ekonomi: 'Pamuk çırçırı (1793) güneyde köleliğe dayalı pamuk ekonomisini büyüttü.',
        din: 'Din özgürlüğü anayasada güvence altına alındı.',
        yasam: 'Benjamin Franklin\'in paratoneri ve Postanesi.',
        bilgi: 'Bağımsızlık Bildirgesi\'ni imzalayanların çoğu 2 Ağustos 1776\'da imzaladı; 4 Temmuz metnin kabul edildiği gündür.' },
      { from: -1815, to: -1865, puan: { eko: 4, ordu: 4, istikrar: 2 }, baskent: 'Washington; Ottawa (1857\'den Kanada başkenti seçildi)',
        gundem: 'ABD batıya doğru büyüdü: Teksas, Oregon, Kaliforniya. Yerli halklar zorla batıya sürüldü. Kölelik ülkeyi ikiye böldü; 1861\'de güney eyaletleri ayrılınca İç Savaş başladı: ~620.000-750.000 ölü. 1865\'te kölelik anayasayla kaldırıldı.',
        savas: 'Gettysburg (1863): İç Savaş\'ın dönüm noktası.',
        ekonomi: 'Buharlı gemiler, kanallar, demiryolları; kuzeyde fabrikalar.',
        din: 'İkinci Büyük Uyanış; kölelik karşıtı hareket.',
        yasam: 'Altına hücum (1849): San Francisco birkaç yılda 1.000 kişilik köyden 25.000 kişilik şehre büyüdü.',
        bilgi: 'Lincoln\'ün Gettysburg Söylevi yalnızca 272 kelime ve yaklaşık iki dakikaydı; tarihin en ünlü konuşmalarından biri oldu.' }
    ],
    nufus: [[-1607, 2], [-1700, 2], [-1776, 3], [-1800, 5.6], [-1830, 14], [-1865, 39]],
    nufusNot: 'ABD ve Kanada (yerliler dahil, kaba tahmin); 1790\'dan sonra ABD sayımları.',
    dunyaOzet: { eko: 'Atlantik ticareti: tütün, pamuk, şeker ve köle ticareti; 19. yüzyılda sanayi devrimi Amerika\'ya geçti.', askeri: 'Tüfekler ve toplar; İç Savaş\'ta demiryolu ve telgraf.' },
    events: [
      { y: -1607, t: 'Jamestown', k: 'm' }, { y: -1608, t: 'Québec kuruldu', k: 'm' }, { y: -1620, t: 'Mayflower', k: 'm' }, { y: -1636, t: 'Harvard', k: 'm' },
      { y: -1763, t: 'Fransa Kanada\'yı kaybetti', k: 'm' }, { y: -1773, t: 'Boston Çay Partisi', k: 'm' }, { y: -1776, t: 'Bağımsızlık Bildirgesi', k: 'm' }, { y: -1781, t: 'Yorktown', k: 'm' },
      { y: -1787, t: 'ABD Anayasası', k: 'm' }, { y: -1803, t: 'Louisiana Satın Alımı', k: 'm' }, { y: -1838, t: 'Gözyaşı Yolu', k: 'm' }, { y: -1849, t: 'Altına hücum', k: 'm' },
      { y: -1861, t: 'İç Savaş başladı', k: 'm' }, { y: -1863, t: 'Gettysburg; Özgürlük Bildirisi', k: 'm' }, { y: -1865, t: 'Kölelik kaldırıldı; Lincoln öldürüldü', k: 'm' },
      { y: -1683, t: 'Viyana Kuşatması', k: 'w' }, { y: -1789, t: 'Fransız İhtilali', k: 'w' }, { y: -1815, t: 'Waterloo', k: 'w' }
    ],
    world: [{ from: -1607, to: -1821, yer: 'Meksika', t: 'Yeni İspanya.' }, { from: -1760, to: -1865, yer: 'İngiltere', t: 'Sanayi Devrimi.' }, { from: -1789, to: -1815, yer: 'Fransa', t: 'İhtilal ve Napolyon.' }],
    sites: [{ ad: 'SAN FRANCİSCO', wx: 1500 }, { ad: 'OREGON YOLU', wx: 2200 }, { ad: 'ALAMO (TEKSAS)', wx: 3400 }, { ad: 'ST. LOUİS', wx: 4300 }, { ad: 'GETTYSBURG', wx: 6200 }, { ad: 'WASHİNGTON', wx: 6300 }, { ad: 'PHİLADELPHİA', wx: 6500 }, { ad: 'NEW YORK', wx: 6800 }, { ad: 'BOSTON', wx: 7100 }, { ad: 'QUÉBEC', wx: 7600 }],
    monuments: [
      { id: 'bagimsizliksalonu', ad: 'Bağımsızlık Salonu', yer: 'Philadelphia', wx: 6500, type: 'museum', b: 70, h: 32, start: -1732, end: -1753, vol: 3e4 },
      { id: 'beyazsaray', ad: 'Beyaz Saray', yer: 'Washington', wx: 6300, type: 'museum', b: 80, h: 22, start: -1792, end: -1800, vol: 3e4 },
      { id: 'capitol', ad: 'ABD Kongre Binası (Capitol)', yer: 'Washington', wx: 6200, type: 'church', buyukKubbe: true, kubbe: '#f2eee6', renk: '#f2eee6', b: 120, h: 88, start: -1793, end: -1866, vol: 1e5 }
    ],
    hizli: [{ ad: 'Jamestown', y: -1607 }, { ad: 'Mayflower', y: -1620 }, { ad: 'Boston Çay Partisi', y: -1773 }, { ad: 'Bağımsızlık', y: -1776 }, { ad: 'Anayasa', y: -1787 }, { ad: 'Louisiana', y: -1803 }, { ad: 'Altına hücum', y: -1849 }, { ad: 'Gettysburg', y: -1863 }],
    bilgi: {
      bagimsizliksalonu: { ikon: '🔔', yaptiran: 'Pennsylvania eyalet meclisi', donem: '1732-1753', mimar: 'Andrew Hamilton', sure: '~21 yıl', neden: 'Eyalet meclis binası.', onem: 'Bağımsızlık Bildirgesi (1776) ve Anayasa (1787) burada kabul edildi.', teknik: [['Özgürlük Çanı', '~940 kg, çatlak']], nasil: 'Tuğla Georgian mimari.', bugun: 'UNESCO Dünya Mirası (1979).', ilginc: 'Özgürlük Çanı\'nın ünlü çatlağı 1840\'larda çalınırken büyüdü; çan o günden beri çalınmıyor.' },
      beyazsaray: { ikon: '🏛️', yaptiran: 'ABD hükümeti', donem: '1792-1800', mimar: 'James Hoban', sure: '8 yıl', neden: 'Başkanın evi.', onem: 'ABD başkanlığının simgesi.', teknik: [['Oda', '132']], nasil: 'Kumtaşı, beyaz badana; yapımında köleleştirilmiş işçiler de çalıştı.', bugun: 'Başkanın resmî konutu.', ilginc: 'İngilizler 1814\'te yaktı; yeniden yapılınca isli taşlar beyaza boyandı. "Beyaz Saray" adı 1901\'de resmîleşti.' },
      capitol: { ikon: '🏛️', yaptiran: 'ABD Kongresi', donem: '1793-1866 (kubbe 1855-1866)', mimar: 'William Thornton; kubbe Thomas U. Walter', sure: '~70 yıl', neden: 'Kongre\'nin binası.', onem: 'Amerikan demokrasisinin simgesi.', teknik: [['Kubbe', 'Dökme demir, ~4.000 ton']], nasil: 'İç Savaş sırasında bile yapımı durmadı: Lincoln "birliğin devam ettiğinin işareti" dedi.', bugun: 'Kongre\'nin toplandığı bina.', ilginc: 'Kubbenin tepesindeki Özgürlük Heykeli\'nin dökümünde köleleştirilmiş bir usta, Philip Reid, önemli rol oynadı.' }
    },
    ulke: [
      { ad: 'Genel bakış', ikon: '🧭', html: '<p>17. yüzyılda İngilizler, Fransızlar ve Hollandalılar kıyıya yerleşti. 13 İngiliz kolonisi 1776\'da bağımsızlığını ilan edip <b>Amerika Birleşik Devletleri</b>\'ni kurdu. Ülke batıya genişledi, yerli halklar topraklarından sürüldü. Kölelik meselesi 1861\'de <b>İç Savaş</b>\'a yol açtı. Kanada İngiliz kaldı ve 1867\'de özerk bir dominyon oldu.</p>' }
    ]
  });

  // ================= 3. SÜPER GÜÇ =================
  window.PLACES.push({
    id: 'kuzeyamerika-modern', sira: 3, modern: true, kisa: 'Sanayi, dünya savaşları ve süper güç', aralikAd: 'MS 1865 – bugün',
    baslik: 'Demiryolları · Özgürlük Heykeli · gökdelenler · Büyük Buhran · Ay\'a iniş · internet',
    ulkeAlt: 'Yeniden yapılanmadan sanayi devine, dünya savaşlarından Soğuk Savaş\'a ve bugüne (MS 1865 – bugün)',
    from: -1865, to: -2026, start: -1969,
    not: 'Tarihler kesindir. Hükümdar şeridi ABD başkanlarını izler; Kanada 1867\'de dominyon, 1982\'de tam bağımsız oldu.', baskent: 'Washington; Ottawa',
    sahne: { kizak: false, buhar: [-1865, -1950], oto: -1910, ucak: -1920, turist: -1960, giyim: [[-1865, 'cubbe'], [-1890, 'modern']] },
    dynasties: [{ from: -1865, to: -1917, ad: 'Yeniden yapılanma ve sanayi', renk: '#6a4a2a' }, { from: -1917, to: -1945, ad: 'Dünya savaşları ve Buhran', renk: '#5a5a6a' }, { from: -1945, to: -2026, ad: 'Süper güç', renk: '#2a4a9a' }],
    rulers: [
      { from: -1865, to: -1901, ad: 'Yeniden Yapılanma ve Yaldızlı Çağ başkanları', kisa: 'Yaldızlı Çağ', kim: 'Kıtalar arası demiryolu (1869). Ova yerlileri son savaşlarında yenildi (Wounded Knee 1890). Kanada Konfederasyonu (1867).' },
      { from: -1901, to: -1909, ad: 'Theodore Roosevelt', kisa: 'T. Roosevelt', kim: 'Milli parklar, Panama Kanalı\'nın yapımı, tekellere karşı yasalar.' },
      { from: -1909, to: -1933, ad: 'Taft, Wilson, Harding, Coolidge, Hoover', kisa: 'Wilson', kim: 'ABD Birinci Dünya Savaşı\'na girdi (1917). Kadınlara oy hakkı (1920). 1929 borsa çöküşü.' },
      { from: -1933, to: -1945, ad: 'Franklin D. Roosevelt', kisa: 'F. D. Roosevelt', kim: '"Yeni Düzen" ile Büyük Buhran\'la mücadele; Pearl Harbor\'dan sonra İkinci Dünya Savaşı\'na girdi.' },
      { from: -1945, to: -1961, ad: 'Truman ve Eisenhower', kisa: 'Eisenhower', kim: 'Atom bombası, Marshall Planı, NATO, Kore Savaşı; otoyollar ve banliyöler.' },
      { from: -1961, to: -1969, ad: 'Kennedy ve Johnson', kisa: 'Kennedy', kim: 'Küba krizi (1962), Kennedy suikastı (1963), Sivil Haklar Yasası (1964), Vietnam.' },
      { from: -1969, to: -1989, ad: 'Nixon\'dan Reagan\'a', kisa: 'Reagan', kim: 'Apollo 11 Ay\'a indi (1969), Watergate (1974), Soğuk Savaş\'ın son yılları.' },
      { from: -1989, to: -2009, ad: 'George H. W. Bush, Clinton, George W. Bush', kisa: 'Clinton', kim: 'Soğuk Savaş bitti; internet çağı; 11 Eylül saldırıları (2001) ve Irak savaşı.' },
      { from: -2009, to: -2017, ad: 'Barack Obama', kisa: 'Obama', kim: 'İlk siyahi ABD başkanı; 2008 finans krizinden çıkış.' },
      { from: -2017, to: -2026, ad: 'Trump, Biden ve yeniden Trump', kisa: 'Trump', kim: 'Donald Trump (2017-2021), Joe Biden (2021-2025), 2025\'ten beri yeniden Trump. COVID-19 salgını.' }
    ],
    eras: [
      { from: -1865, to: -1917, puan: { eko: 5, ordu: 3, istikrar: 3 }, baskent: 'Washington; Ottawa',
        gundem: 'Demiryolları kıtayı birleştirdi; Avrupa\'dan milyonlarca göçmen Ellis Adası\'ndan geçti. Edison\'un ampulü, Bell\'in telefonu, Wright kardeşlerin uçağı, Ford\'un T Modeli. ABD dünyanın en büyük sanayi ekonomisi oldu. Ova yerlileri rezervasyonlara kapatıldı; bizonlar neredeyse yok edildi.',
        savas: 'Ova Savaşları; İspanya-Amerika Savaşı (1898).',
        ekonomi: 'Çelik (Carnegie), petrol (Rockefeller), demiryolu; gökdelenler Şikago ve New York\'ta.',
        din: 'Protestan çoğunluk; İrlandalı ve İtalyan Katolik, Yahudi göçmenler.',
        yasam: 'Ayrımcı "Jim Crow" yasaları güneyde siyahları ikinci sınıf vatandaş yaptı.',
        bilgi: 'Bizon sayısı 1800\'lerin başında ~30 milyondan 1889\'da 1.000\'in altına indi.' },
      { from: -1917, to: -1945, puan: { eko: 3, ordu: 5, istikrar: 2 }, baskent: 'Washington',
        gundem: '"Çılgın Yirmiler"in caz ve sinemasından sonra 1929 borsa çöküşü Büyük Buhran\'ı başlattı: işsizlik %25\'e çıktı. İkinci Dünya Savaşı\'nda ABD "demokrasinin cephaneliği" oldu; atom bombasını geliştirdi.',
        savas: 'Pearl Harbor (1941), Normandiya (1944), Pasifik savaşları; Hiroşima ve Nagazaki (1945).',
        ekonomi: 'Hollywood, radyo, otomobil; savaş sanayisi Buhran\'ı bitirdi.',
        din: 'İçki yasağı (1920-1933).',
        yasam: 'Harlem Rönesansı; Empire State Binası (1931).',
        bilgi: 'Empire State Binası yalnızca 410 günde yapıldı.' },
      { from: -1945, to: -1991, puan: { eko: 5, ordu: 5, istikrar: 3 }, baskent: 'Washington',
        gundem: 'ABD ve SSCB arasında Soğuk Savaş. Sivil haklar hareketi: Rosa Parks, Martin Luther King ("Bir hayalim var", 1963). Apollo 11 ile insan Ay\'a ayak bastı (1969). Vietnam Savaşı ülkeyi böldü.',
        savas: 'Kore ve Vietnam savaşları; nükleer silahlanma yarışı.',
        ekonomi: 'Dünya ekonomisinin yaklaşık yarısı (1945); otoyollar, banliyöler, televizyon.',
        din: 'Siyahi kiliseler sivil haklar hareketinin merkezi.',
        yasam: 'Rock and roll, Hollywood, Silikon Vadisi\'nin doğuşu.',
        bilgi: 'Apollo 11\'in bilgisayarı bugünkü bir cep telefonundan milyonlarca kat daha yavaştı.' },
      { from: -1991, to: -2026, puan: { eko: 5, ordu: 5, istikrar: 3 }, baskent: 'Washington; Ottawa',
        gundem: 'Soğuk Savaş\'tan tek süper güç olarak çıkan ABD internet, akıllı telefon ve yapay zekâ çağına öncülük etti. 11 Eylül 2001 saldırıları, Afganistan ve Irak savaşları, 2008 finans krizi, COVID-19 salgını. Kanada çok kültürlü bir toplum.',
        savas: 'Afganistan (2001-2021) ve Irak (2003-2011) savaşları.',
        ekonomi: 'Dünyanın en büyük ekonomisi; Apple, Google, Microsoft, Amazon.',
        din: 'Çok dinli toplum; din dışı nüfus artıyor.',
        yasam: 'Sosyal medya, akıllı telefonlar; dünyanın en çok göç alan ülkesi.',
        bilgi: 'Kanada ile ABD arasındaki ~8.900 km\'lik sınır dünyanın en uzun kara sınırıdır.' }
    ],
    nufus: [[-1865, 39], [-1900, 81], [-1930, 133], [-1950, 165], [-1980, 252], [-2000, 313], [-2026, 383]],
    nufusNot: 'ABD (~342 milyon) ve Kanada (~41 milyon) toplamı.',
    dunyaOzet: { eko: 'ABD 1890\'lardan beri dünyanın en büyük ekonomisi.', askeri: 'İki dünya savaşı, nükleer silahlar, Soğuk Savaş.' },
    events: [
      { y: -1867, t: 'Kanada Konfederasyonu; Alaska satın alındı', k: 'm' }, { y: -1869, t: 'Kıtalar arası demiryolu', k: 'm' }, { y: -1876, t: 'Telefon', k: 'm' }, { y: -1886, t: 'Özgürlük Heykeli', k: 'm' },
      { y: -1903, t: 'Wright kardeşler uçtu', k: 'm' }, { y: -1908, t: 'Ford T Modeli', k: 'm' }, { y: -1917, t: 'ABD savaşa girdi', k: 'm' }, { y: -1920, t: 'Kadınlara oy hakkı', k: 'm' },
      { y: -1929, t: 'Borsa çöküşü', k: 'm' }, { y: -1941, t: 'Pearl Harbor', k: 'm' }, { y: -1945, t: 'Atom bombası; BM New York\'ta', k: 'm' }, { y: -1963, t: '"Bir hayalim var"', k: 'm' },
      { y: -1969, t: 'Apollo 11 Ay\'da', k: 'm' }, { y: -1991, t: 'Soğuk Savaş bitti', k: 'm' }, { y: -2001, t: '11 Eylül', k: 'm' }, { y: -2008, t: 'Finans krizi; Obama seçildi', k: 'm' },
      { y: -1914, t: 'Birinci Dünya Savaşı', k: 'w' }, { y: -1923, t: 'Türkiye Cumhuriyeti', k: 'w' }, { y: -1949, t: 'Çin Halk Cumhuriyeti', k: 'w' }
    ],
    world: [{ from: -1914, to: -1945, yer: 'Avrupa', t: 'Dünya savaşları.' }, { from: -1945, to: -1991, yer: 'SSCB', t: 'Soğuk Savaş rakibi.' }, { from: -1978, to: -2026, yer: 'Çin', t: 'Yükselen rakip.' }],
    sites: [{ ad: 'ALASKA', wx: 600 }, { ad: 'SEATTLE', wx: 1100 }, { ad: 'SİLİKON VADİSİ', wx: 1450 }, { ad: 'HOLLYWOOD', wx: 1800 }, { ad: 'HOUSTON', wx: 3400 }, { ad: 'ŞİKAGO', wx: 4700 }, { ad: 'TORONTO', wx: 5600 }, { ad: 'WASHİNGTON', wx: 6300 }, { ad: 'NEW YORK', wx: 6800 }, { ad: 'MONTREAL', wx: 7400 }],
    monuments: [
      { id: 'goldengate', ad: 'Golden Gate Köprüsü', yer: 'San Francisco', wx: 1500, type: 'bridge', renk: '#c0442e', b: 300, h: 45, start: -1933, end: -1937, vol: 8e4 },
      { id: 'ozgurluk', ad: 'Özgürlük Heykeli', yer: 'New York', wx: 7180, type: 'heykel', stil: 'ozgurluk', b: 30, h: 70, start: -1884, end: -1886, vol: 3e4 },
      { id: 'newyork', ad: 'New York ve Empire State Binası', yer: 'New York', wx: 6750, type: 'modcity', b: 420, h: 200, n: 52, start: -1900, end: -1970, vol: 1.4e5 },
      { id: 'cntower', ad: 'CN Kulesi', yer: 'Toronto', wx: 5600, type: 'tower', b: 14, h: 110, start: -1973, end: -1976, vol: 2e4 }
    ],
    hizli: [{ ad: 'Demiryolu', y: -1869 }, { ad: 'Özgürlük Heykeli', y: -1886 }, { ad: 'Uçak', y: -1903 }, { ad: 'Buhran', y: -1930 }, { ad: 'Golden Gate', y: -1937 }, { ad: '1945', y: -1945 }, { ad: 'Sivil haklar', y: -1963 }, { ad: 'Ay', y: -1969 }, { ad: '11 Eylül', y: -2001 }, { ad: 'Bugün', y: -2026 }],
    bilgi: {
      goldengate: { ikon: '🌉', yaptiran: 'Golden Gate Köprüsü bölgesi', donem: '1933-1937', mimar: 'Joseph Strauss, Charles Ellis, Irving Morrow (renk ve süsleme)', sure: '~4 yıl', neden: 'San Francisco\'yu kuzeye bağlamak.', onem: 'Açıldığında dünyanın en uzun asma köprüsü.', teknik: [['Ana açıklık', '1.280 m'], ['Kule', '227 m']], nasil: 'Çelik kablolar; işçiler için ilk kez güvenlik ağı kullanıldı.', bugun: 'San Francisco\'nun simgesi.', ilginc: 'Rengi "International Orange" sisli havada görünsün diye seçildi; ABD donanması siyah-sarı çizgili boyanmasını istemişti.' },
      ozgurluk: { ikon: '🗽', yaptiran: 'Fransız halkının armağanı', donem: '1884-1886', mimar: 'Frédéric Bartholdi; iç iskelet Gustave Eiffel', sure: '—', neden: 'Bağımsızlığın 100. yılı ve Fransa-ABD dostluğu.', onem: 'Göçmenlerin gördüğü ilk Amerika görüntüsü; özgürlüğün simgesi.', teknik: [['Yükseklik', '46 m (kaideyle 93 m)'], ['Bakır kaplama', '2,4 mm']], nasil: 'Fransa\'da yapılıp 350 parça hâlinde gemiyle taşındı.', bugun: 'UNESCO Dünya Mirası (1984).', ilginc: 'Heykel başlangıçta bakır renginde parlıyordu; 30 yılda oksitlenerek yeşile döndü.' },
      newyork: { ikon: '🏙️', yaptiran: '—', donem: '1624 (Yeni Amsterdam)', mimar: 'Empire State: Shreve, Lamb & Harmon', sure: '—', neden: 'Hudson ağzında doğal liman.', onem: 'Dünyanın finans ve kültür başkentlerinden; BM merkezi.', teknik: [['Empire State', '381 m (1931)'], ['Metropol', '~20 milyon']], nasil: 'Manhattan\'ın sağlam kaya zemini gökdelenleri mümkün kıldı.', bugun: 'ABD\'nin en kalabalık şehri.', ilginc: 'New York\'ta 800\'den fazla dil konuşulur: dünyanın dil bakımından en çeşitli şehri.' },
      cntower: { ikon: '🗼', yaptiran: 'Kanada Ulusal Demiryolları', donem: '1973-1976', mimar: 'John Andrews', sure: '~3 yıl', neden: 'Radyo ve televizyon yayını.', onem: '1976-2007 arası dünyanın en yüksek serbest duran yapısı.', teknik: [['Yükseklik', '553 m']], nasil: 'Kayar kalıpla dökülen beton gövde; anten helikopterle takıldı.', bugun: 'Toronto\'nun simgesi.', ilginc: '356 metredeki cam zeminde yürümek mümkün.' }
    },
    ulke: [
      { ad: 'Genel bakış', ikon: '🧭', html: '<p>İç Savaş\'tan sonra <b>ABD</b> sanayi devine dönüştü ve iki dünya savaşından süper güç olarak çıktı. <b>Kanada</b> 1867\'de konfederasyon oldu ve barışçıl bir yoldan tam bağımsızlığa ulaştı. Sivil haklar hareketi, uzay yarışı ve internet bu çağın simgeleri.</p>' },
      { ad: 'Bugün', ikon: '🗺️', html: '<ul><li><b>ABD</b> (~342 milyon, Washington): 50 eyalet</li><li><b>Kanada</b> (~41 milyon, Ottawa): 10 eyalet, 3 bölge; İngilizce ve Fransızca resmî</li><li>Yerli halklar: ABD\'de 570\'ten fazla tanınmış kabile, Kanada\'da İlk Uluslar, İnuitler ve Métisler</li></ul>' }
    ]
  });

  window.BOLGE_TASI('kuzeyamerika');

  window.MISIR = {
    coords: { povertypoint: [32.6363, -91.4058], chaco: [36.0606, -107.9617], cahokia: [38.6604, -90.0623], bagimsizliksalonu: [39.9489, -75.15], beyazsaray: [38.8977, -77.0365], capitol: [38.8899, -77.0091], goldengate: [37.8199, -122.4783], ozgurluk: [40.6892, -74.0445], newyork: [40.7484, -73.9857], cntower: [43.6426, -79.3871] },
    wiki: { povertypoint: 'Poverty Point', chaco: 'Pueblo Bonito', cahokia: 'Monks Mound', bagimsizliksalonu: 'Independence Hall', beyazsaray: 'White House', capitol: 'United States Capitol', goldengate: 'Golden Gate Bridge', ozgurluk: 'Statue of Liberty', newyork: 'Empire State Building', cntower: 'CN Tower' },
    bilgi: {}, alt: {},
    kureAdlari: [[40, -100, 'KUZEY AMERİKA', 'misir', 2.0], [57, -100, 'KANADA', 'bolge', 2.4], [39, -98, 'ABD', 'bolge', 2.6], [37, -138, 'PASİFİK OKYANUSU', 'deniz', 2.2], [35, -62, 'ATLAS OKYANUSU', 'deniz', 2.2],
      [45, -84, 'Büyük Göller', 'kucuk', 4], [42, -110, 'KAYALIK DAĞLAR', 'kucuk', 3.4], [33, -91, 'Mississippi', 'nehir', 5], [64, -152, 'ALASKA', 'bolge', 3]],
    sehirler: [
      { ad: 'Cahokia', ll: [38.6557, -90.0622], from: -700, to: -1400, not: 'Mississippi kültürünün şehri.' },
      { ad: 'Chaco Kanyonu', ll: [36.06, -107.96], from: -850, to: -1150, not: 'Pueblo büyük evleri.' },
      { ad: 'Québec', ll: [46.8139, -71.208], from: -1608, to: -2026, b: [[-1608, -1763]], not: 'Yeni Fransa\'nın başkenti.' },
      { ad: 'Boston', ll: [42.3601, -71.0589], from: -1630, to: -2026, not: 'Devrimin beşiği.' },
      { ad: 'Philadelphia', ll: [39.9526, -75.1652], from: -1682, to: -2026, b: [[-1790, -1800]], not: 'Bağımsızlık Bildirgesi\'nin şehri.' },
      { ad: 'New York', ll: [40.7128, -74.006], from: -1624, to: -2026, b: [[-1785, -1790]], not: 'ABD\'nin en büyük şehri.' },
      { ad: 'Washington', ll: [38.9072, -77.0369], from: -1790, to: -2026, b: [[-1800, -2026]], not: 'ABD\'nin başkenti.' },
      { ad: 'Ottawa', ll: [45.4215, -75.6972], from: -1826, to: -2026, b: [[-1866, -2026]], not: 'Kanada\'nın başkenti.' },
      { ad: 'Şikago', ll: [41.8781, -87.6298], from: -1833, to: -2026, not: 'İlk gökdelenlerin şehri.' },
      { ad: 'San Francisco', ll: [37.7749, -122.4194], from: -1776, to: -2026, not: 'Altına hücumun şehri.' },
      { ad: 'Los Angeles', ll: [34.0522, -118.2437], from: -1781, to: -2026, not: 'Hollywood\'un şehri.' },
      { ad: 'Toronto', ll: [43.6532, -79.3832], from: -1793, to: -2026, not: 'Kanada\'nın en büyük şehri.' }
    ],
    nil: { ikon: '🌊', title: 'Mississippi ve Büyük Göller', sub: 'Kıtanın su yolları', foto: 'Mississippi River', tabs: [{ ad: '🌊 Sular', html: '<ul class="hap"><li><b>Mississippi-Missouri</b> (~6.300 km) dünyanın en uzun nehir sistemlerinden; Cahokia ve sonra New Orleans onun kıyısında.</li><li><b>Büyük Göller</b> dünyanın tatlı su yüzeyinin ~%21\'ini tutar; Niagara Şelalesi Erie ile Ontario arasında.</li><li><b>St. Lawrence</b> Fransızların kıtaya girdiği kapıydı.</li><li><b>Colorado</b> nehri Büyük Kanyon\'u oydu.</li></ul>' }] },
    simgeler: [
      { id: 'ka-cahokia', ad: 'Cahokia', ikon: '🏔️', wiki: 'Cahokia', git: { place: 'kuzeyamerika-yerli', y: -1100, id: 'cahokia' }, ozet: 'Kuzey Amerika\'nın kayıp şehri.', hap: ['~1050-1350.', '120 höyük.'] },
      { id: 'ka-chaco', ad: 'Chaco Kanyonu', ikon: '🏜️', wiki: 'Chaco Culture National Historical Park', git: { place: 'kuzeyamerika-yerli', y: -1100, id: 'chaco' }, ozet: 'Pueblo büyük evleri.', hap: ['850-1150.', 'Güneş hizalamaları.'] },
      { id: 'ka-bildirge', ad: 'Bağımsızlık Bildirgesi', ikon: '📜', wiki: 'United States Declaration of Independence', git: { place: 'kuzeyamerika-somurge', y: -1776, id: 'bagimsizliksalonu' }, ozet: '"Bütün insanlar eşit yaratılmıştır."', hap: ['4 Temmuz 1776.', 'Philadelphia.'] },
      { id: 'ka-lincoln', ad: 'Lincoln ve köleliğin sonu', ikon: '⛓️', wiki: 'Abraham Lincoln', git: { place: 'kuzeyamerika-somurge', y: -1863 }, ozet: 'İç Savaş ve özgürlük.', hap: ['1861-1865.', '13. Değişiklik.'] },
      { id: 'ka-ozgurluk', ad: 'Özgürlük Heykeli', ikon: '🗽', wiki: 'Statue of Liberty', git: { place: 'kuzeyamerika-modern', y: -1886, id: 'ozgurluk' }, ozet: 'Göçmenlerin karşılayıcısı.', hap: ['1886.', 'Fransa\'nın armağanı.'] },
      { id: 'ka-goldengate', ad: 'Golden Gate', ikon: '🌉', wiki: 'Golden Gate Bridge', git: { place: 'kuzeyamerika-modern', y: -1937, id: 'goldengate' }, ozet: 'Turuncu asma köprü.', hap: ['1937.', '1.280 m açıklık.'] },
      { id: 'ka-apollo', ad: 'Apollo 11', ikon: '🚀', wiki: 'Apollo 11', git: { place: 'kuzeyamerika-modern', y: -1969 }, ozet: 'İnsan Ay\'da.', hap: ['20 Temmuz 1969.', 'Armstrong ve Aldrin.'] }
    ],
    bugun: '<p><b>ABD</b> (~342 milyon) ve <b>Kanada</b> (~41 milyon). Kanada yüzölçümüyle dünyanın ikinci büyük ülkesi.</p><ul class="hap"><li><b>Ekonomi:</b> ABD dünyanın en büyük ekonomisi; teknoloji, finans, film.</li><li><b>Diller:</b> İngilizce, İspanyolca, Fransızca; yerli diller.</li><li><b>Doğa:</b> Yellowstone (1872, dünyanın ilk milli parkı), Büyük Kanyon, Niagara.</li></ul>'
  };
  window.SEHIR_BILGI = {
    'New York': { bugun: 'New York, ABD', kurulus: '1624 (Yeni Amsterdam)', wiki: 'New York City', onem: 'Dünyanın finans ve kültür merkezlerinden; BM merkezi.', ilginc: '1664\'te İngilizler aldığında adı York Dükü\'nün onuruna New York oldu.' },
    'Washington': { bugun: 'District of Columbia, ABD', kurulus: '1790', wiki: 'Washington, D.C.', onem: 'ABD\'nin başkenti.', ilginc: 'Şehir hiçbir eyalete ait değil; bu yüzden halkı Kongre\'de oy hakkı olan temsilciye sahip değil.' },
    'Québec': { bugun: 'Québec, Kanada', kurulus: '1608 (Champlain)', wiki: 'Quebec City', onem: 'Kuzey Amerika\'nın en eski surlu şehirlerinden.', ilginc: 'Meksika\'nın kuzeyinde surları hâlâ ayakta olan tek şehir.' }
  };
  window.KULTUR = { tanrilar: [], olumler: [], roller: [], mumyalama: '', ic: { eslesme: {}, sahneler: {} }, bilim: { genel: '', cag: {} } };
  window.SINIRLAR = [];

  window.OLAYLAR = [
    { id: 'yorktown', tur: 'savas', ad: 'Yorktown Kuşatması', y: -1781, ll: [37.24, -76.51], onem: 5, wiki: 'Siege of Yorktown', taraflar: ['ABD (Washington) ve Fransa', 'İngiltere (Cornwallis)'], kazanan: 'ABD ve Fransa', sonuc: 'Bağımsızlık Savaşı fiilen bitti.' },
    { id: 'gettysburg', tur: 'savas', ad: 'Gettysburg Savaşı', y: -1863, ll: [39.81, -77.23], onem: 5, wiki: 'Battle of Gettysburg', taraflar: ['Birlik (Meade)', 'Konfederasyon (Lee)'], kazanan: 'Birlik', sonuc: 'İç Savaş\'ın dönüm noktası; ~50.000 kayıp.' },
    { id: 'littlebighorn', tur: 'savas', ad: 'Little Bighorn Savaşı', y: -1876, ll: [45.57, -107.43], onem: 4, wiki: 'Battle of the Little Bighorn', taraflar: ['Lakota, Kuzey Çeyen, Arapaho (Oturan Boğa, Çılgın At)', 'ABD (Custer)'], kazanan: 'Yerliler', sonuc: 'Custer ve birliği yok oldu; ama Ova yerlilerinin son büyük zaferiydi.' },
    { id: 'pearlharbor', tur: 'savas', ad: 'Pearl Harbor saldırısı', y: -1941, ll: [21.36, -157.95], onem: 5, wiki: 'Attack on Pearl Harbor', taraflar: ['Japonya', 'ABD'], sonuc: 'ABD İkinci Dünya Savaşı\'na girdi.' },
    { id: 'parisbaris1783', tur: 'antlasma', ad: 'Paris Antlaşması (1783)', y: -1783, ll: [48.86, 2.35], onem: 4, wiki: 'Treaty of Paris (1783)', taraflar: ['ABD', 'İngiltere'], sonuc: 'ABD\'nin bağımsızlığı tanındı.' },
    { id: 'louisiana', tur: 'antlasma', ad: 'Louisiana Satın Alımı', y: -1803, ll: [29.95, -90.07], onem: 4, wiki: 'Louisiana Purchase', taraflar: ['ABD (Jefferson)', 'Fransa (Napolyon)'], sonuc: '~2,1 milyon km² 15 milyon dolara; ülke iki katına çıktı.' },
    { id: 'bildirge1776', tur: 'olay', ad: 'Bağımsızlık Bildirgesi', y: -1776, ll: [39.95, -75.15], onem: 5, wiki: 'United States Declaration of Independence', sonuc: '13 koloni bağımsızlığını ilan etti.' },
    { id: 'apollo11', tur: 'olay', ad: 'Apollo 11', y: -1969, ll: [28.57, -80.65], onem: 5, wiki: 'Apollo 11', sonuc: 'Neil Armstrong ve Buzz Aldrin Ay\'a indi; Cape Canaveral\'dan fırlatıldı.' },
    { id: 'mlk', tur: 'olay', ad: 'Washington Yürüyüşü', y: -1963, ll: [38.89, -77.05], onem: 4, wiki: 'March on Washington for Jobs and Freedom', sonuc: 'Martin Luther King\'in "Bir hayalim var" konuşması.' },
    { id: 'sanfrancisco1906', tur: 'afet', alt: 'deprem', ad: 'San Francisco depremi', y: -1906, ll: [37.75, -122.55], onem: 4, wiki: '1906 San Francisco earthquake', sonuc: 'Deprem ve yangınlar şehrin %80\'ini yok etti; ~3.000 ölü.' },
    { id: 'katrina', tur: 'afet', alt: 'sel', ad: 'Katrina Kasırgası', y: -2005, ll: [29.95, -90.07], onem: 4, wiki: 'Hurricane Katrina', sonuc: 'New Orleans\'ın %80\'i sular altında kaldı; ~1.400 ölü.' },
    { id: 'tozkasesi', tur: 'afet', alt: 'kuraklik', ad: 'Toz Kasesi', y: -1934, ll: [36.5, -101.0], onem: 3, wiki: 'Dust Bowl', sonuc: 'Kuraklık ve erozyon Büyük Ovalar\'ı toz fırtınalarıyla kapladı; yüz binlerce çiftçi göç etti.' }
  ];

  window.ULKE_SAYFA = window.ULKE_SAYFA || {};
  window.ULKE_SAYFA.kuzeyamerika = {
    id: 'kuzeyamerika', ad: 'Kuzey Amerika', ikon: '🦅', kw: ['kuzey amerika', 'amerika', 'abd', 'usa', 'kanada', 'yerli', 'kızılderili', 'cahokia', 'washington', 'new york', 'lincoln', 'iç savaş', 'bağımsızlık'],
    altBaslik: 'MÖ ~3500 – bugün · höyük şehirlerinden gökdelenlere', kapakWiki: 'Statue of Liberty', kapakAd: 'Özgürlük Heykeli', merkez: [42, -98], merkezZ: 3.0,
    ozet: ['<b>Kuzey Amerika</b>\'da binlerce yıl boyunca yüzlerce yerli halk yaşadı; Cahokia ve Chaco Kanyonu gibi büyük merkezler kurdular.', '17. yüzyıldan sonra Avrupalılar geldi; 1776\'da ABD bağımsızlığını ilan etti ve iki yüzyılda dünyanın en güçlü ülkesi oldu. Kanada barışçıl bir yoldan bağımsızlaştı.'],
    bilgiKutusu: [['Tarih', 'MÖ ~3500 (höyükler) – bugün'], ['Önemli merkezler', 'Poverty Point, Cahokia, Chaco, Québec, Philadelphia, Washington, New York'], ['Diller', 'İngilizce, Fransızca, İspanyolca, yerli diller'], ['Bugün', 'ABD ve Kanada, ~383 milyon kişi']],
    donemler: { 'kuzeyamerika-yerli': 'Höyük yapıcılar, Pueblolar, İrokualar.', 'kuzeyamerika-somurge': 'Sömürgeler, bağımsızlık ve İç Savaş.', 'kuzeyamerika-modern': 'Sanayi, dünya savaşları ve süper güç.' },
    kultur: [{ baslik: 'Diller', ikon: '🗣️', html: '<p>Yüzlerce yerli dil (Navajo, Çeroki, Kri, İnuktitut); İngilizce, Fransızca, İspanyolca.</p>' }, { baslik: 'Din', ikon: '⛪', html: '<p>Yerli inançları; Protestan ve Katolik Hristiyanlık; Yahudilik, İslam ve diğerleri.</p>' }],
    figurler: [
      { id: 'ozgurluk', ad: 'Özgürlük Heykeli', tur: 'yapı', wiki: 'Statue of Liberty', ll: [40.6892, -74.0445], z: 85, yapim: '1884-1886', kim: 'Bartholdi, Eiffel', durum: 'ayakta', durumYazi: 'Ayakta.', nerede: 'New York', metin: 'Özgürlüğün simgesi.', git: { place: 'kuzeyamerika-modern', y: -1886, id: 'ozgurluk' } },
      { id: 'cahokia', ad: 'Cahokia', tur: 'yapı', wiki: 'Monks Mound', ll: [38.6604, -90.0623], z: 75, yapim: '~900-1200', kim: 'Mississippi kültürü', durum: 'harabe', durumYazi: 'Ören yeri.', nerede: 'Illinois', metin: 'Dev toprak höyük.', git: { place: 'kuzeyamerika-yerli', y: -1100, id: 'cahokia' } }
    ],
    kisiler: [
      { ad: 'Pocahontas', wiki: 'Pocahontas', yil: '~1596-1617', ozet: 'Powhatan prensesi.', y: -1610 }, { ad: 'George Washington', wiki: 'George Washington', yil: '1732-1799', ozet: 'İlk ABD başkanı.', y: -1789 },
      { ad: 'Benjamin Franklin', wiki: 'Benjamin Franklin', yil: '1706-1790', ozet: 'Bilim insanı ve diplomat.', y: -1776 }, { ad: 'Thomas Jefferson', wiki: 'Thomas Jefferson', yil: '1743-1826', ozet: 'Bağımsızlık Bildirgesi\'nin yazarı.', y: -1776 },
      { ad: 'Abraham Lincoln', wiki: 'Abraham Lincoln', yil: '1809-1865', ozet: 'Köleliği kaldıran başkan.', y: -1863 }, { ad: 'Oturan Boğa', wiki: 'Sitting Bull', yil: '~1831-1890', ozet: 'Lakota önderi.', y: -1876 },
      { ad: 'Thomas Edison', wiki: 'Thomas Edison', yil: '1847-1931', ozet: 'Mucit.', y: -1879 }, { ad: 'Martin Luther King', wiki: 'Martin Luther King Jr.', yil: '1929-1968', ozet: 'Sivil haklar önderi.', y: -1963 },
      { ad: 'Neil Armstrong', wiki: 'Neil Armstrong', yil: '1930-2012', ozet: 'Ay\'a ilk ayak basan insan.', y: -1969 }
    ],
    biliyorMuydunuz: ['Yellowstone (1872) dünyanın ilk milli parkıdır.', 'Kuzey Amerika\'ya ilk ulaşan Avrupalılar Kolomb\'dan ~500 yıl önce gelen Vikinglerdi (L\'Anse aux Meadows, ~1021).', 'Alaska 1867\'de Rusya\'dan 7,2 milyon dolara satın alındı.', 'Kanada\'da dünyanın göllerinin yarısından fazlası var.']
  };
})();
