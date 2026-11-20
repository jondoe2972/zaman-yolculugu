// Anadolu: Osmanlı (MS 1299 – 1922) ve Türkiye Cumhuriyeti (MS 1923 – 2026)
// Kaynaklar: İnalcık, "Osmanlı İmparatorluğu Klasik Çağ" (1973); Quataert, "Osmanlı İmparatorluğu 1700-1922" (2005);
// Zürcher, "Modernleşen Türkiye'nin Tarihi" (1993); TÜİK nüfus sayımları.
(() => {
  const ESKI = window.ANADOLU_ESKI;

  // ================= 7. OSMANLI =================
  window.PLACES.push({
    id: 'anadolu-osmanli', sira: 7, kisa: 'Osmanlı İmparatorluğu', aralikAd: 'MS 1299 – 1922',
    baslik: 'Söğüt · İstanbul\'un fethi · Mimar Sinan · Çanakkale',
    ulkeAlt: 'Osmanlı Devleti (MS 1299 – 1922)',
    from: -1299, to: -1922, start: -1453,
    not: 'Tarihler kesindir. 1831 öncesi nüfus için kesin sayım yok; tahrir defterlerinden tahmin edilir.',
    baskent: 'Söğüt, Bursa (1326), Edirne (1365), İstanbul (1453)',
    sahne: { kizak: false, deve: [-1299, -1900], buhar: -1850, ucak: -1912, giyim: 'cubbe', oto: -1910 },
    dynasties: [
      { from: -1299, to: -1453, ad: 'Kuruluş ve yükseliş: beylikten devlete', renk: '#9a2a2a' },
      { from: -1453, to: -1566, ad: 'Klasik çağ: Fatih\'ten Kanuni\'ye', renk: '#b8322a' },
      { from: -1566, to: -1839, ad: 'Duraklama ve ıslahat arayışları', renk: '#8a4a2a' },
      { from: -1839, to: -1922, ad: 'Tanzimat, Meşrutiyet ve çöküş', renk: '#6a4a5a' }
    ],
    rulers: [
      { from: -1299, to: -1326, ad: 'Osman Bey (Osman Gazi)', kisa: 'Osman Bey', kim: 'Söğüt ve Domaniç\'te kurulan beyliğin önderi. 1302 Koyunhisar\'da Bizans\'ı yendi. Söylenceye göre Şeyh Edebali\'nin evinde gördüğü rüya, devletin büyüyeceğinin işaretiydi.' },
      { from: -1326, to: -1362, ad: 'Orhan Gazi', kisa: 'Orhan Gazi', kim: 'Bursa\'yı (1326), İznik\'i ve İzmit\'i aldı; ilk Osmanlı akçesini bastırdı. 1354\'te Gelibolu ile Rumeli\'ye geçildi.' },
      { from: -1362, to: -1389, ad: 'I. Murad', kisa: 'I. Murad', kim: 'Edirne\'yi aldı ve başkent yaptı. Yeniçeri ocağını kurdu. 1389 Kosova Savaşı\'ndan sonra şehit edildi.' },
      { from: -1389, to: -1402, ad: 'I. Bayezid (Yıldırım)', kisa: 'Yıldırım Bayezid', kim: 'Anadolu beyliklerinin çoğunu aldı, Niğbolu\'da Haçlıları yendi (1396). 1402 Ankara Savaşı\'nda Timur\'a esir düştü.' },
      { from: -1402, to: -1413, ad: 'Fetret Devri', kisa: 'Fetret', kim: 'Bayezid\'in oğulları taht için 11 yıl savaştı; sonunda Çelebi Mehmed kazandı.' },
      { from: -1413, to: -1451, ad: 'I. Mehmed ve II. Murad', kisa: 'II. Murad', kim: 'Devlet yeniden birleşti. II. Murad Varna\'da (1444) Haçlıları yendi.' },
      { from: -1451, to: -1481, ad: 'II. Mehmed (Fatih Sultan Mehmed)', kisa: 'Fatih', kim: '21 yaşında İstanbul\'u fethetti (29 Mayıs 1453) ve Bizans\'a son verdi. Topkapı Sarayı\'nı yaptırdı; Trabzon, Sırbistan, Bosna, Kırım\'ı aldı.' },
      { from: -1481, to: -1520, ad: 'II. Bayezid ve Yavuz Sultan Selim', kisa: 'Yavuz Selim', kim: 'II. Bayezid İspanya\'dan kovulan Yahudileri kabul etti (1492). Yavuz Selim Çaldıran\'da Safevileri (1514), Mercidabık ve Ridaniye\'de Memlükleri yendi; halifelik Osmanlılara geçti.' },
      { from: -1520, to: -1566, ad: 'I. Süleyman (Kanuni)', kisa: 'Kanuni', kim: 'Osmanlı\'nın en uzun hükümdarlığı (46 yıl). Belgrad, Rodos, Mohaç, Bağdat; Viyana kuşatması (1529). Mimar Sinan\'a Süleymaniye\'yi yaptırdı; kanunnameleriyle "Kanuni" adını aldı.' },
      { from: -1566, to: -1623, ad: 'II. Selim\'den II. Osman\'a', kisa: 'II. Selim · III. Murad', kim: 'Kıbrıs alındı (1571), İnebahtı\'da donanma yenildi. Sinan Edirne\'de Selimiye\'yi yaptı. I. Ahmed Sultanahmet Camii\'ni yaptırdı. II. Osman yeniçerilerce öldürüldü (1622).' },
      { from: -1623, to: -1703, ad: 'IV. Murad, IV. Mehmed ve Köprülüler', kisa: 'Köprülüler', kim: 'IV. Murad Bağdat\'ı geri aldı (1638). Köprülü vezirler devleti toparladı; ama 1683 II. Viyana Kuşatması yenilgiyle bitti ve 1699 Karlofça\'da ilk büyük toprak kaybı yaşandı.' },
      { from: -1703, to: -1789, ad: 'III. Ahmed (Lale Devri), I. Mahmud, III. Mustafa', kisa: 'Lale Devri', kim: 'Lale Devri\'nde İbrahim Müteferrika ilk Türkçe matbaayı kurdu (1727). Rusya ile savaşlar; 1774 Küçük Kaynarca ile Kırım kaybedildi.' },
      { from: -1789, to: -1839, ad: 'III. Selim ve II. Mahmud', kisa: 'II. Mahmud', kim: 'III. Selim "Nizam-ı Cedid" ordusunu kurdu. II. Mahmud yeniçeri ocağını kaldırdı (Vaka-i Hayriye, 1826); fes ve modern okullar geldi. Yunanistan bağımsız oldu (1830).' },
      { from: -1839, to: -1876, ad: 'Abdülmecid ve Abdülaziz', kisa: 'Abdülmecid', kim: 'Tanzimat Fermanı (1839): herkese can, mal ve namus güvencesi, vergi ve askerlikte eşitlik. Kırım Savaşı (1853-56). Dolmabahçe Sarayı yapıldı.' },
      { from: -1876, to: -1909, ad: 'II. Abdülhamid', kisa: 'II. Abdülhamid', kim: 'I. Meşrutiyet ve ilk anayasa (Kanun-i Esasi, 1876); 1878\'de meclisi kapattı. Hicaz Demiryolu, okullar, telgraf. 1908\'de II. Meşrutiyet ilan edildi.' },
      { from: -1909, to: -1922, ad: 'V. Mehmed Reşad ve VI. Mehmed Vahdeddin', kisa: 'Son padişahlar', kim: 'Balkan Savaşları (1912-13), I. Dünya Savaşı (1914-18), Mondros (1918) ve Sevr (1920). Saltanat 1 Kasım 1922\'de TBMM tarafından kaldırıldı.' }
    ],
    eras: [
      { from: -1299, to: -1453, puan: { eko: 3, ordu: 5, istikrar: 3 }, baskent: 'Bursa, sonra Edirne',
        gundem: 'Bizans sınırındaki küçük bir uç beyliği hızla büyüyor. Bursa (1326) ilk başkent oldu; Rumeli\'ye geçildi ve Edirne (1365) alındı. 1402\'de Timur\'a yenilgi devleti neredeyse yıktı, ama 50 yıl sonra II. Mehmed İstanbul\'u kuşatıyor.',
        savas: 'Kosova (1389), Niğbolu (1396), Ankara (1402), Varna (1444). Yeniçeri ocağı ve timarlı sipahiler.',
        ekonomi: 'Timar sistemi: toprak, vergi karşılığında askerlere verilir. Bursa ipek ticaretinin merkezi.',
        din: 'Ahi birlikleri ve dervişler (Geyikli Baba, Abdal Musa) yerleşmeye yardım ediyor. Hristiyan halklar zimmi olarak vergi verip dinlerini koruyor.',
        yasam: 'Bursa\'da Ulu Cami (1400), Yeşil Cami ve külliyeler; Ahmedi ve Âşıkpaşazade Türkçe tarihler yazıyor.',
        bilgi: 'Fatih İstanbul kuşatmasında 1453\'te 70 gemiyi kızaklarla karadan, Galata\'nın arkasından Haliç\'e indirtti.' },
      { from: -1453, to: -1566, puan: { eko: 5, ordu: 5, istikrar: 5 }, baskent: 'İstanbul',
        gundem: 'İstanbul fethedildi ve imparatorluğun başkenti oldu; Ayasofya camiye dönüştürüldü. Yavuz Selim Mısır\'ı, Suriye\'yi ve kutsal kentleri aldı; Kanuni Macaristan\'dan Yemen\'e, Cezayir\'den Bağdat\'a uzanan bir imparatorluğu yönetiyor. Mimar Sinan Süleymaniye\'yi yapıyor (1550-57).',
        savas: 'Çaldıran (1514), Mohaç (1526), I. Viyana Kuşatması (1529), Preveze deniz zaferi (1538, Barbaros Hayreddin Paşa).',
        ekonomi: 'İpek ve baharat yolları Osmanlı topraklarından geçiyor. Kapalıçarşı dünyanın en büyük pazarlarından. Osmanlı akçesi ve altını.',
        din: 'Şeyhülislam Ebussuud Efendi şeriat ile kanunları uzlaştırdı. Millet sistemi: Rum, Ermeni, Yahudi toplulukları kendi işlerini kendi önderleriyle yönetiyor.',
        yasam: 'Piri Reis\'in dünya haritası (1513) Amerika\'yı gösteren en eski haritalardan. Kahve İstanbul\'a geldi (1555); ilk kahvehaneler açıldı.',
        bilgi: 'İstanbul 1453\'te ~50.000 kişiydi; Kanuni döneminde 500.000\'i geçerek Avrupa\'nın en büyük şehri oldu.' },
      { from: -1566, to: -1839, puan: { eko: 3, ordu: 3, istikrar: 2 }, baskent: 'İstanbul',
        gundem: 'İmparatorluk en geniş sınırlarına ulaştı ama Avrupa\'daki askeri ve ekonomik değişimlere yetişmekte zorlanıyor. Celali isyanları Anadolu\'yu sarstı. 1683 Viyana yenilgisinden sonra topraklar kaybedilmeye başlandı. Lale Devri\'nde (1718-30) matbaa ve Batı etkileri; II. Mahmud yeniçeriliği kaldırdı.',
        savas: 'Viyana (1683), Karlofça (1699), Rus savaşları, Mısır\'a Napolyon (1798), Navarin (1827).',
        ekonomi: 'Amerika\'dan gelen gümüş enflasyonu, iltizam (vergiyi açık artırmayla toplatma) sistemi. Avrupa\'ya kapitülasyonlar.',
        din: 'Kadızadeliler ile sufiler arasında tartışmalar; Mevlevi ve Bektaşi tarikatları güçlü.',
        yasam: 'Evliya Çelebi "Seyahatname"sini yazdı. İstanbul\'da çiçek aşısı uygulaması (Lady Montagu 1717\'de İngiltere\'ye götürdü).',
        bilgi: 'Hezarfen Ahmed Çelebi, Evliya Çelebi\'ye göre 1630\'larda Galata Kulesi\'nden uçarak Üsküdar\'a indi (rivayet).' },
      { from: -1839, to: -1922, puan: { eko: 2, ordu: 2, istikrar: 1 }, baskent: 'İstanbul (1920\'den itibaren Ankara\'da TBMM)',
        gundem: 'Tanzimat (1839) ile modernleşme: yeni okullar, demiryolları, telgraf, gazeteler. İlk anayasa ve meclis (1876). Ama milliyetçi ayaklanmalar ve büyük güçlerin baskısıyla Balkanlar kaybediliyor. I. Dünya Savaşı\'ndan sonra Anadolu işgal edildi; Mustafa Kemal Paşa 19 Mayıs 1919\'da Samsun\'a çıkıp Kurtuluş Savaşı\'nı başlattı.',
        savas: 'Kırım Savaşı (1853-56), 93 Harbi (1877-78), Balkan Savaşları, Çanakkale (1915), Sakarya (1921), Büyük Taarruz (30 Ağustos 1922).',
        ekonomi: 'Dış borçlar ve Düyun-u Umumiye (1881). Demiryolları: Haydarpaşa-Ankara, Bağdat ve Hicaz hatları.',
        din: 'Halifelik siyasette kullanılıyor; 1915-16\'da Ermeni tehcirinde ve savaş yıllarında Anadolu halkları büyük kayıplar verdi.',
        yasam: 'İstanbul\'da tramvay, Tünel (1875, dünyanın ikinci metrosu), fotoğrafhaneler, tiyatrolar. Namık Kemal, Şinasi yeni edebiyatı başlattı.',
        bilgi: 'Çanakkale Savaşı\'nda iki taraf 500.000\'den fazla asker kaybetti (ölü, yaralı, kayıp). Mustafa Kemal burada "Ben size taarruzu değil, ölmeyi emrediyorum" dedi.' }
    ],
    nufus: [[-1299, 6], [-1520, 6.5], [-1600, 8], [-1800, 9], [-1900, 13], [-1914, 15], [-1922, 13]],
    nufusNot: 'Bugünkü Türkiye toprakları için tahmin. 1914\'te imparatorluğun tamamı ~19-20 milyon; savaşlar ve göçlerle 1923\'e kadar Anadolu nüfusu azaldı.',
    dunyaOzet: { eko: 'Coğrafi keşifler (1492, 1498) ticaret yollarını okyanuslara kaydırdı; 18-19. yüzyılda Sanayi Devrimi Avrupa\'yı zenginleştirdi.', askeri: 'Barutlu silahlar, düzenli ordular; 19. yüzyılda sömürgeci imparatorluklar ve 1914-18 Birinci Dünya Savaşı.' },
    events: [
      { y: -1299, t: 'Osman Bey beyliğini kurdu (geleneksel tarih)', k: 'm' },
      { y: -1302, t: 'Koyunhisar (Bafeus) Savaşı', k: 'm' },
      { y: -1326, t: 'Bursa alındı', k: 'm' },
      { y: -1354, t: 'Gelibolu\'dan Rumeli\'ye geçildi', k: 'm' },
      { y: -1389, t: 'Kosova Savaşı', k: 'm' },
      { y: -1402, t: 'Ankara Savaşı: Timur, Yıldırım Bayezid\'i yendi', k: 'm' },
      { y: -1452, t: 'Rumeli Hisarı 4 ayda yapıldı', k: 'm' },
      { y: -1453, t: 'İstanbul\'un fethi (29 Mayıs)', k: 'm' },
      { y: -1478, t: 'Topkapı Sarayı tamamlandı', k: 'm' },
      { y: -1492, t: 'İspanya\'dan kovulan Yahudiler Osmanlı\'ya yerleşti', k: 'm' },
      { y: -1513, t: 'Piri Reis dünya haritasını çizdi', k: 'm' },
      { y: -1514, t: 'Çaldıran Savaşı', k: 'm' },
      { y: -1517, t: 'Mısır alındı; halifelik Osmanlı\'ya geçti', k: 'm' },
      { y: -1526, t: 'Mohaç Meydan Savaşı', k: 'm' },
      { y: -1529, t: 'I. Viyana Kuşatması', k: 'm' },
      { y: -1557, t: 'Süleymaniye Camii açıldı', k: 'm' },
      { y: -1575, t: 'Selimiye Camii (Edirne) tamamlandı', k: 'm' },
      { y: -1616, t: 'Sultanahmet Camii tamamlandı', k: 'm' },
      { y: -1683, t: 'II. Viyana Kuşatması', k: 'm' },
      { y: -1699, t: 'Karlofça Antlaşması', k: 'm' },
      { y: -1727, t: 'İbrahim Müteferrika matbaası', k: 'm' },
      { y: -1826, t: 'Yeniçeri ocağı kaldırıldı', k: 'm' },
      { y: -1839, t: 'Tanzimat Fermanı', k: 'm' },
      { y: -1856, t: 'Dolmabahçe Sarayı tamamlandı', k: 'm' },
      { y: -1876, t: 'I. Meşrutiyet: ilk anayasa', k: 'm' },
      { y: -1908, t: 'II. Meşrutiyet', k: 'm' },
      { y: -1915, t: 'Çanakkale Savaşı', k: 'm' },
      { y: -1919, t: 'Mustafa Kemal Samsun\'a çıktı (19 Mayıs)', k: 'm' },
      { y: -1920, t: 'TBMM Ankara\'da açıldı (23 Nisan)', k: 'm' },
      { y: -1921, t: 'Sakarya Meydan Muharebesi', k: 'm' },
      { y: -1922, t: 'Büyük Taarruz; saltanat kaldırıldı', k: 'm' },
      { y: -1492, t: 'Kolomb Amerika\'ya ulaştı', k: 'w' },
      { y: -1789, t: 'Fransız İhtilali', k: 'w' },
      { y: -1914, t: 'Birinci Dünya Savaşı başladı', k: 'w' }
    ],
    world: [
      { from: -1299, to: -1500, yer: 'Avrupa', t: 'Kara Ölüm (1347-51), Rönesans İtalya\'da başladı.' },
      { from: -1368, to: -1644, yer: 'Çin', t: 'Ming Hanedanı: Yasak Şehir, Zheng He\'nin filoları.' },
      { from: -1501, to: -1736, yer: 'İran', t: 'Safeviler: Osmanlı\'nın doğudaki rakibi.' },
      { from: -1526, to: -1857, yer: 'Hindistan', t: 'Babür İmparatorluğu: Tac Mahal (1653).' },
      { from: -1492, to: -1800, yer: 'Amerika', t: 'İspanyol ve Portekiz sömürgeleri; 1776 ABD bağımsızlığı.' },
      { from: -1760, to: -1900, yer: 'İngiltere', t: 'Sanayi Devrimi: buhar makinesi, demiryolları.' },
      { from: -1900, to: -1922, yer: 'Dünya', t: 'Birinci Dünya Savaşı; Rus Devrimi (1917).' }
    ],
    sites: [{ ad: 'ERZURUM', wx: 2200 }, { ad: 'KAYSERİ', wx: 3300 }, { ad: 'ANKARA', wx: 4500 }, { ad: 'KONYA', wx: 5200 }, { ad: 'SÖĞÜT', wx: 7800 }, { ad: 'BURSA', wx: 8150 }, { ad: 'İSTANBUL', wx: 8800 }, { ad: 'GELİBOLU · ÇANAKKALE', wx: 8000 }, { ad: 'EDİRNE', wx: 9400 }],
    monuments: [
      { id: 'bursaulucami', ad: 'Bursa Ulu Camii', yer: 'Bursa', wx: 8150, bank: 'near', type: 'mosque', stil: 'osmanli', minare: 2, renk: '#e4d6bc', b: 68, h: 30, start: -1396, end: -1400, vol: 6e4 },
      { id: 'rumelihisari', ad: 'Rumeli Hisarı', yer: 'İstanbul Boğazı', wx: 8650, type: 'citadel', tepe: true, b: 140, h: 32, start: -1452, end: -1452.4, vol: 7e4 },
      { id: 'topkapi', ad: 'Topkapı Sarayı', yer: 'İstanbul', wx: 8920, type: 'citadel', renk: '#e0d2b4', b: 200, h: 26, start: -1459, end: -1478, vol: 1.2e5 },
      { id: 'suleymaniye', ad: 'Süleymaniye Camii', yer: 'İstanbul', wx: 8760, type: 'mosque', stil: 'osmanli', minare: 4, b: 70, h: 72, start: -1550, end: -1557, vol: 2.2e5 },
      { id: 'selimiye', ad: 'Selimiye Camii', yer: 'Edirne', wx: 9400, type: 'mosque', stil: 'osmanli', minare: 4, b: 70, h: 82, start: -1569, end: -1575, vol: 2.2e5 },
      { id: 'sultanahmet', ad: 'Sultanahmet (Mavi) Camii', yer: 'İstanbul', wx: 8880, bank: 'near', type: 'mosque', stil: 'osmanli', minare: 6, b: 72, h: 64, start: -1609, end: -1616, vol: 2e5 },
      { id: 'dolmabahce', ad: 'Dolmabahçe Sarayı', yer: 'İstanbul', wx: 8600, bank: 'near', type: 'greek', duz: true, renk: '#f2eee4', boya: 'rgba(200,170,90,0.4)', b: 120, h: 24, sutun: 14, start: -1843, end: -1856, vol: 1.2e5 },
      ...ESKI(['ayasofya', 'surlar', 'alaeddin', 'mevlana', 'sultanhani', 'kizilkule', 'divrigi'], {
        ayasofya: { type: 'mosque', stil: 'osmanli', minare: 4, ad: 'Ayasofya Camii', b: 82, h: 56, renk: '#d9b98a', donusum: -1453 } })
    ],
    hizli: [{ ad: 'Osman Bey', y: -1300 }, { ad: 'Bursa', y: -1326 }, { ad: 'Ankara Savaşı', y: -1402 }, { ad: 'Rumeli Hisarı', y: -1452 }, { ad: 'Fetih', y: -1453 }, { ad: 'Çaldıran', y: -1514 }, { ad: 'Kanuni', y: -1530 }, { ad: 'Süleymaniye', y: -1555 }, { ad: 'Selimiye', y: -1572 }, { ad: 'Viyana', y: -1683 }, { ad: 'Lale Devri', y: -1727 }, { ad: 'Tanzimat', y: -1839 }, { ad: 'Çanakkale', y: -1915 }, { ad: 'Kurtuluş', y: -1922 }],
    bilgi: {
      bursaulucami: { ikon: '🕌', yaptiran: 'Yıldırım Bayezid', donem: '1396-1400', mimar: 'Ali Neccar', sure: '4 yıl', neden: 'Niğbolu zaferi için adak: Bayezid 20 cami yapma sözü vermişti; yerine 20 kubbeli tek bir cami yaptırdı.', onem: 'Erken Osmanlı mimarisinin en büyük camisi; içinde şadırvanlı havuz var.', teknik: [['Kubbe', '20 kubbe'], ['Hat', '192 yazı levhası']], nasil: 'Kesme taş, 12 ayak üzerine 20 kubbe.', bugun: 'İbadete açık.', ilginc: 'Söylenceye göre caminin yerinde evini satmak istemeyen bir Yahudi kadının arsası vardı; şadırvan onun evinin olduğu yere yapıldı.' },
      rumelihisari: { ikon: '🏰', yaptiran: 'II. Mehmed (Fatih)', donem: 'Nisan-Ağustos 1452', mimar: 'Müslihiddin Ağa', sure: '~4 ay', neden: 'Boğaz\'ı kapatıp İstanbul\'a Karadeniz\'den yardım gelmesini engellemek.', onem: '"Boğazkesen": İstanbul\'un fethinin hazırlığı.', teknik: [['Kuleler', 'Saruca Paşa, Halil Paşa, Zağanos Paşa kuleleri'], ['Alan', '~30.000 m²']], nasil: 'Üç vezir birer kuleyi yarıştırarak yaptırdı; işçi sayısı binlerceydi.', bugun: 'Müze ve açık hava konser alanı.', ilginc: 'Fatih\'in, kalenin planını "Muhammed" yazısının Arapça harflerine benzettiği söylenir (rivayet).' },
      topkapi: { ikon: '🏯', yaptiran: 'II. Mehmed (Fatih)', donem: '1459-1478; sonra eklemeler', mimar: 'Atik Sinan ve diğerleri', sure: '~19 yıl', neden: 'Osmanlı padişahlarının yönetim merkezi ve evi.', onem: '~400 yıl imparatorluğun yönetildiği saray; bugün dünyanın en zengin müzelerinden.', teknik: [['Alan', '~700.000 m²'], ['Avlular', '4 avlu, Harem (300+ oda)']], nasil: 'Tek bir büyük bina değil, avlular çevresinde köşkler ve daireler.', bugun: 'Müze: Kaşıkçı Elması, kutsal emanetler, saat koleksiyonu.', ilginc: '1856\'da padişahlar Dolmabahçe\'ye taşınınca Topkapı boşaldı; 1924\'te müze oldu.' },
      suleymaniye: { ikon: '🕌', yaptiran: 'I. Süleyman (Kanuni)', donem: '1550-1557', mimar: 'Mimar Sinan', sure: '7 yıl', neden: 'Padişahın külliyesi: cami, medreseler, darüşşifa, imaret, hamam, türbeler.', onem: 'Mimar Sinan\'ın "kalfalık eseri"; İstanbul siluetinin simgesi.', teknik: [['Kubbe', 'Çap 26,5 m, yükseklik 53 m'], ['Minare', '4 minare, 10 şerefe (Kanuni 10. padişah)']], nasil: 'Sinan sesi dağıtmak için kubbeye 64 küp yerleştirdi; kandil isini toplayan bir oda yapıp isten mürekkep yaptırdı.', bugun: 'İbadete açık; Kanuni ve Hürrem Sultan\'ın türbeleri bahçede.', ilginc: 'Caminin hemen dışında, Sinan\'ın kendi küçük türbesi var.' },
      selimiye: { ikon: '🕌', yaptiran: 'II. Selim', donem: '1569-1575', mimar: 'Mimar Sinan', sure: '~6 yıl', neden: 'Padişahın Edirne\'deki camisi.', onem: 'Sinan\'ın "ustalık eseri"; kubbesi Ayasofya\'nınkinden biraz büyük. UNESCO Dünya Mirası (2011).', teknik: [['Kubbe', 'Çap ~31,3 m, yükseklik 43 m'], ['Minare', '4 minare, ~71 m (en yükseklerden)']], nasil: 'Kubbe 8 ayak üzerine oturtuldu; içeride hiçbir yerden görüşü kesen sütun yok.', bugun: 'İbadete açık.', ilginc: 'Sinan bu camiyi yaptığında yaklaşık 80 yaşındaydı.' },
      sultanahmet: { ikon: '🕌', yaptiran: 'I. Ahmed', donem: '1609-1616', mimar: 'Sedefkâr Mehmed Ağa', sure: '7 yıl', neden: 'Padişahın camisi, Ayasofya\'nın karşısında.', onem: '6 minareli ilk Osmanlı camisi; iç süslemesindeki 20.000\'den fazla İznik çinisi yüzünden "Mavi Cami" denir.', teknik: [['Çini', '~21.000 İznik çinisi'], ['Pencere', '260']], nasil: 'Merkezi kubbe, dört yarım kubbe.', bugun: 'İbadete ve ziyarete açık.', ilginc: 'Altı minare, Mekke\'deki Mescid-i Haram ile yarış sayılınca oraya yedinci minare eklendi (rivayet).' },
      dolmabahce: { ikon: '🏛️', yaptiran: 'Abdülmecid', donem: '1843-1856', mimar: 'Garabet ve Nikoğos Balyan', sure: '~13 yıl', neden: 'Avrupa tarzı yeni saray.', onem: 'Osmanlı\'nın son yönetim merkezi; Atatürk 10 Kasım 1938\'de burada öldü.', teknik: [['Oda', '285 oda, 46 salon'], ['Avize', '4,5 tonluk dev kristal avize']], nasil: 'Barok, rokoko ve neoklasik üslupların karışımı; dolgu alan üzerine.', bugun: 'Müze. Atatürk\'ün odasındaki saatler 9.05\'te durdurulmuştur.', ilginc: 'Sarayın yapımı için yaklaşık 14 ton altın varak kullanıldı.' }
    },
    ulke: [
      { ad: 'Genel bakış', ikon: '🧭', html: `<p><b>Osmanlı Devleti</b>, 1299 civarında Söğüt\'te küçük bir beylik olarak doğdu ve üç kıtaya yayılan bir imparatorluğa dönüştü. 1453\'te <b>İstanbul</b>\'u fethetti ve 623 yıl boyunca 36 padişah tarafından yönetildi.</p><p>16. yüzyılda dünyanın en güçlü devletlerinden biriydi. 19. yüzyılda modernleşmeye çalıştı; Birinci Dünya Savaşı\'ndan sonra dağıldı ve yerine <b>Türkiye Cumhuriyeti</b> kuruldu.</p>` },
      { ad: 'Halklar ve millet sistemi', ikon: '👥', html: `<p>Türkler, Rumlar, Ermeniler, Yahudiler, Kürtler, Araplar, Arnavutlar, Boşnaklar, Bulgarlar, Lazlar, Çerkesler… Osmanlı\'da her din topluluğu bir "millet" sayıldı ve evlilik, miras, eğitim gibi işlerini kendi önderleriyle yürüttü.</p>` },
      { ad: 'Yönetim', ikon: '⚖️', html: `<p>Padişah, Divan-ı Hümayun (vezirler), kadılar (yargı) ve timarlı sipahiler. Devşirme sistemiyle Hristiyan çocuklar Müslüman yapılıp yeniçeri ya da devlet adamı olarak yetiştirildi; Mimar Sinan ve Sokullu Mehmed Paşa devşirmeydi.</p>` },
      { ad: 'Sanat ve bilim', ikon: '🎨', html: `<ul><li><b>Mimar Sinan</b>: 300\'den fazla yapı.</li><li><b>Piri Reis</b>: Kitab-ı Bahriye.</li><li><b>Takiyüddin</b>: İstanbul Rasathanesi (1577).</li><li><b>İznik çinisi, ebru, hat, minyatür.</b></li><li><b>Evliya Çelebi, Katip Çelebi.</b></li></ul>` }
    ]
  });

  // ================= 8. TÜRKİYE CUMHURİYETİ =================
  window.PLACES.push({
    id: 'anadolu-cumhuriyet', sira: 8, modern: true, kisa: 'Türkiye Cumhuriyeti', aralikAd: 'MS 1923 – bugün',
    baslik: 'Ankara · Devrimler · Boğaz köprüleri',
    ulkeAlt: 'Türkiye Cumhuriyeti (1923 – 2026)',
    from: -1923, to: -2026, start: -1938,
    not: 'Nüfus TÜİK sayımlarından. Tarihler kesindir.',
    baskent: 'Ankara',
    sahne: { kizak: false, oto: -1930, turist: -1960, buhar: [-1923, -1990], ucak: -1923, giyim: 'modern', katipYok: true },
    dynasties: [
      { from: -1923, to: -1950, ad: 'Tek parti dönemi', renk: '#c0303a' },
      { from: -1950, to: -2026, ad: 'Çok partili dönem', renk: '#d04040' }
    ],
    rulers: [
      { from: -1923, to: -1938, ad: 'Cumhurbaşkanı Mustafa Kemal Atatürk', kisa: 'Atatürk', kim: 'Kurtuluş Savaşı\'nın önderi ve Cumhuriyet\'in kurucusu. Saltanat ve halifeliği kaldırdı; Latin harfleri, medeni kanun, kadınlara seçme ve seçilme hakkı (1934), soyadı kanunu gibi devrimleri yaptı.' },
      { from: -1938, to: -1950, ad: 'Cumhurbaşkanı İsmet İnönü', kisa: 'İnönü', kim: 'Türkiye\'yi II. Dünya Savaşı\'nın dışında tuttu; Köy Enstitüleri kuruldu; 1946\'da çok partili hayata geçildi.' },
      { from: -1950, to: -1960, ad: 'Cumhurbaşkanı Celal Bayar · Başbakan Adnan Menderes', kisa: 'Menderes', kim: 'Demokrat Parti iktidarı: NATO üyeliği (1952), tarımda makineleşme, karayolları. 1960 askeri darbesiyle sona erdi.' },
      { from: -1960, to: -1980, ad: 'Darbeler ve koalisyonlar dönemi', kisa: '1960-80', kim: '1961 Anayasası, hızlı nüfus artışı ve köyden kente göç; 1974 Kıbrıs Barış Harekâtı; siyasi şiddet ve 1980 darbesi.' },
      { from: -1980, to: -2002, ad: '1980 sonrası: Özal ve koalisyonlar', kisa: 'Özal', kim: 'Turgut Özal ile dışa açılma, serbest piyasa, ihracat. 1990\'larda koalisyonlar, enflasyon, 1999 depremi ve 2001 ekonomik krizi.' },
      { from: -2002, to: -2026, ad: 'AK Parti dönemi (Erdoğan)', kisa: 'Erdoğan', kim: '2002\'den itibaren tek parti iktidarı; büyük altyapı projeleri (köprüler, tüneller, havalimanları). 2017 referandumuyla cumhurbaşkanlığı hükümet sistemi.' }
    ],
    eras: [
      { from: -1923, to: -1950, puan: { eko: 2, ordu: 3, istikrar: 4 }, baskent: 'Ankara',
        gundem: 'Lozan Antlaşması (24 Temmuz 1923) ile yeni Türkiye uluslararası alanda tanındı; 29 Ekim 1923\'te Cumhuriyet ilan edildi ve Ankara başkent oldu. Halifelik kaldırıldı (1924), Latin alfabesine geçildi (1928), kadınlara seçme ve seçilme hakkı verildi (1934). Atatürk 10 Kasım 1938\'de öldü.',
        savas: 'Türkiye II. Dünya Savaşı\'na girmedi (yalnızca 1945\'te simgesel olarak). Hatay 1939\'da Türkiye\'ye katıldı.',
        ekonomi: 'Devletçilik: Sümerbank, Etibank, ilk şeker ve dokuma fabrikaları; demiryolları Anadolu\'nun içine uzandı. 1929 Dünya Krizi ağır etkiledi.',
        din: 'Laiklik 1937\'de anayasaya girdi. Diyanet İşleri Başkanlığı kuruldu (1924).',
        yasam: 'Millet Mektepleri\'nde milyonlarca yetişkin okuma yazma öğrendi. Okuryazarlık 1927\'de ~%10\'du.',
        bilgi: 'Atatürk soyadını 1934\'te çıkan Soyadı Kanunu ile TBMM\'den aldı; adı "Atatürk" yalnızca ona özel olarak yasayla korunur.' },
      { from: -1950, to: -1980, puan: { eko: 3, ordu: 4, istikrar: 2 }, baskent: 'Ankara',
        gundem: 'Çok partili demokrasi: 1950 seçimlerinde iktidar el değiştirdi. Türkiye NATO\'ya girdi (1952). Köylerden şehirlere büyük göç başladı; İstanbul\'un nüfusu 1 milyondan 4,7 milyona çıktı. 1961\'de Almanya\'ya ilk işçi göçü. 1973\'te Boğaziçi Köprüsü açıldı.',
        savas: 'Kore Savaşı (1950-53); 1974 Kıbrıs Barış Harekâtı. 1960, 1971 ve 1980 askeri müdahaleleri.',
        ekonomi: 'Tarımda traktör, yeni karayolları; 1960\'lardan itibaren planlı kalkınma ve ithal ikameci sanayi; 1970\'lerin sonunda petrol krizi ve döviz darlığı.',
        din: 'Ezan 1950\'de yeniden Arapça okunmaya başladı; imam hatip okulları açıldı.',
        yasam: 'Gecekondular, ilk TV yayını (TRT, 1968), Yeşilçam sinemasının altın çağı.',
        bilgi: 'Boğaziçi Köprüsü açıldığında (1973) dünyanın en uzun 4. asma köprüsüydü ve Avrupa ile Asya\'yı karayoluyla bağlayan ilk köprüydü.' },
      { from: -1980, to: -2026, puan: { eko: 4, ordu: 5, istikrar: 3 }, baskent: 'Ankara',
        gundem: 'Türkiye dışa açıldı; ihracat ve turizm büyüdü. GAP projesiyle Atatürk Barajı (1992) Güneydoğu\'yu suladı. 1999 Marmara (Gölcük) ve 2023 Kahramanmaraş depremleri on binlerce can aldı. Marmaray (2013), Osmangazi ve Çanakkale 1915 köprüleri (2022) gibi projeler yapıldı. Türkiye 2023\'te Cumhuriyet\'in 100. yılını kutladı.',
        savas: 'PKK terörü ile mücadele; Suriye iç savaşının yansımaları; 15 Temmuz 2016 darbe girişimi püskürtüldü.',
        ekonomi: 'Türkiye dünyanın en büyük 20 ekonomisi arasında; otomotiv, tekstil, beyaz eşya, savunma sanayii; turizmde dünyanın ilk beşinde. Yüksek enflasyon dönemleri.',
        din: 'Toplumun büyük çoğunluğu Müslüman; Aleviler, Hristiyan ve Yahudi toplulukları da yaşıyor.',
        yasam: 'Nüfusun dörtte üçü şehirlerde. İstanbul ~16 milyon kişiyle Avrupa\'nın en kalabalık şehri.',
        bilgi: '2023 Kahramanmaraş depremleri (7,7 ve 7,6 büyüklüğünde) 11 ili etkiledi; Antakya\'nın tarihi merkezi büyük ölçüde yıkıldı.' }
    ],
    nufus: [[-1923, 13], [-1927, 13.6], [-1950, 20.9], [-1970, 35.6], [-1990, 56.5], [-2000, 67.8], [-2010, 73.7], [-2020, 83.6], [-2026, 86]],
    nufusNot: 'TÜİK sayımları: 1927\'de 13,6 milyon, 2023\'te 85,4 milyon.',
    dunyaOzet: { eko: 'Küreselleşme, internet ve akıllı telefon devrimi; Çin\'in yükselişi.', askeri: 'II. Dünya Savaşı (1939-45), Soğuk Savaş (1947-91), sonra bölgesel savaşlar ve terörle mücadele.' },
    events: [
      { y: -1923, t: 'Lozan Antlaşması; Cumhuriyet ilan edildi (29 Ekim)', k: 'm' },
      { y: -1924, t: 'Halifelik kaldırıldı', k: 'm' },
      { y: -1926, t: 'Türk Medeni Kanunu', k: 'm' },
      { y: -1928, t: 'Latin harflerine geçildi', k: 'm' },
      { y: -1934, t: 'Kadınlara seçme ve seçilme hakkı; Soyadı Kanunu', k: 'm' },
      { y: -1938, t: 'Atatürk vefat etti (10 Kasım)', k: 'm' },
      { y: -1939, t: 'Hatay Türkiye\'ye katıldı; Erzincan depremi', k: 'm' },
      { y: -1946, t: 'Çok partili hayata geçiş', k: 'm' },
      { y: -1952, t: 'NATO üyeliği', k: 'm' },
      { y: -1953, t: 'Anıtkabir tamamlandı', k: 'm' },
      { y: -1961, t: 'Almanya ile işgücü anlaşması', k: 'm' },
      { y: -1973, t: 'Boğaziçi Köprüsü açıldı', k: 'm' },
      { y: -1974, t: 'Kıbrıs Barış Harekâtı', k: 'm' },
      { y: -1992, t: 'Atatürk Barajı tamamlandı', k: 'm' },
      { y: -1999, t: 'Marmara depremi (17 Ağustos)', k: 'm' },
      { y: -2013, t: 'Marmaray açıldı', k: 'm' },
      { y: -2016, t: '15 Temmuz darbe girişimi', k: 'm' },
      { y: -2022, t: 'Çanakkale 1915 Köprüsü açıldı', k: 'm' },
      { y: -2023, t: 'Kahramanmaraş depremleri; Cumhuriyet\'in 100. yılı', k: 'm' },
      { y: -1939, t: 'II. Dünya Savaşı başladı', k: 'w' },
      { y: -1969, t: 'İnsan Ay\'a ayak bastı', k: 'w' },
      { y: -1991, t: 'Sovyetler Birliği dağıldı', k: 'w' }
    ],
    world: [
      { from: -1923, to: -1945, yer: 'Dünya', t: 'İki savaş arası; 1929 Büyük Buhran; II. Dünya Savaşı.' },
      { from: -1945, to: -1991, yer: 'Dünya', t: 'Soğuk Savaş: ABD ve SSCB; uzay yarışı.' },
      { from: -1993, to: -2026, yer: 'Avrupa', t: 'Avrupa Birliği; Türkiye 1999\'da aday ülke oldu.' },
      { from: -1991, to: -2026, yer: 'Dünya', t: 'İnternet, küreselleşme, yapay zekâ.' }
    ],
    sites: [{ ad: 'ŞANLIURFA · GAP', wx: 1000 }, { ad: 'ADIYAMAN · ATATÜRK BARAJI', wx: 1500 }, { ad: 'ANKARA', wx: 4500 }, { ad: 'KONYA', wx: 5200 }, { ad: 'İZMİR', wx: 7400 }, { ad: 'ÇANAKKALE', wx: 8000 }, { ad: 'İSTANBUL', wx: 8800 }, { ad: 'EDİRNE', wx: 9400 }],
    monuments: [
      { id: 'ankara', ad: 'Ankara (başkent)', yer: 'Ankara', wx: 4500, type: 'modcity', b: 420, h: 60, n: 46, start: -1923, end: -2010, vol: 9e4 },
      { id: 'anitkabir', ad: 'Anıtkabir', yer: 'Ankara', wx: 4380, type: 'greek', duz: true, renk: '#ece4d0', boya: 'rgba(160,140,110,0.35)', b: 72, h: 26, sutun: 10, start: -1944, end: -1953, vol: 1.2e5 },
      { id: 'istanbul', ad: 'İstanbul', yer: 'İstanbul', wx: 8800, bank: 'near', type: 'modcity', minareli: true, b: 520, h: 80, n: 60, start: -1923, end: -2015, vol: 8e4 },
      { id: 'bogazkoprusu', ad: '15 Temmuz Şehitler (Boğaziçi) Köprüsü', yer: 'İstanbul', wx: 8700, type: 'bridge', b: 360, h: 165, start: -1970, end: -1973, vol: 2e5 },
      { id: 'canakkale1915', ad: '1915 Çanakkale Köprüsü', yer: 'Çanakkale', wx: 8050, type: 'bridge', b: 420, h: 210, start: -2017, end: -2022, vol: 3e5 },
      { id: 'ataturkbaraji', ad: 'Atatürk Barajı', yer: 'Adıyaman-Şanlıurfa', wx: 1500, type: 'dam', b: 400, h: 50, start: -1983, end: -1992, vol: 2e5 },
      { id: 'camlica', ad: 'Çamlıca Kulesi', yer: 'İstanbul', wx: 9000, type: 'tower', b: 10, h: 200, start: -2016, end: -2020, vol: 5e4 },
      ...ESKI(['suleymaniye', 'sultanahmet', 'topkapi', 'dolmabahce', 'rumelihisari', 'surlar', 'selimiye'], {
        topkapi: { muze: -1924 }, dolmabahce: { muze: -1984 } }),
      ...ESKI(['ayasofya'], { ayasofya: { type: 'mosque', stil: 'osmanli', minare: 4, ad: 'Ayasofya', b: 82, h: 56, renk: '#d9b98a', muze: -1934 } })
    ],
    hizli: [{ ad: 'Cumhuriyet', y: -1923 }, { ad: 'Harf devrimi', y: -1928 }, { ad: 'Kadın hakları', y: -1934 }, { ad: '10 Kasım', y: -1938 }, { ad: 'Anıtkabir', y: -1953 }, { ad: 'Köprü', y: -1973 }, { ad: 'Atatürk Barajı', y: -1990 }, { ad: '1999', y: -1999 }, { ad: '1915 Köprüsü', y: -2022 }, { ad: 'Bugün', y: -2026 }],
    bilgi: {
      ankara: { ikon: '🏙️', yaptiran: 'Türkiye Cumhuriyeti', donem: '1923\'ten bugüne', mimar: 'İmar planı: Hermann Jansen (1932)', sure: '—', neden: 'Kurtuluş Savaşı\'nın yönetildiği, Anadolu\'nun ortasındaki güvenli şehir.', onem: '13 Ekim 1923\'te başkent oldu. 1923\'te ~30.000 olan nüfusu bugün ~5,8 milyon.', teknik: [['Nüfus (2023)', '~5,8 milyon'], ['Simgeler', 'Anıtkabir, Kızılay, Kale, Atakule']], nasil: 'Jansen planıyla bulvarlar, Kızılay meydanı, bakanlıklar bölgesi.', bugun: 'Türkiye\'nin ikinci büyük şehri.', ilginc: 'Ankara keçisi (tiftik) ve Ankara kedisi (Van kedisinin akrabası) dünyaya şehrin adını taşıdı: "angora".' },
      anitkabir: { ikon: '🏛️', yaptiran: 'Türkiye Cumhuriyeti', donem: '1944-1953', mimar: 'Emin Onat ve Orhan Arda', sure: '9 yıl', neden: 'Atatürk\'ün anıt mezarı.', onem: 'Türkiye\'nin en çok ziyaret edilen anıtlarından; resmi törenlerin merkezi.', teknik: [['Alan', '~750.000 m²'], ['Aslanlı Yol', '262 m, 24 aslan heykeli'], ['Şeref Holü', '40 kg\'lık tek parça mermer lahit']], nasil: 'Hitit, Frig, Selçuklu ve Osmanlı motiflerini modern bir sütunlu yapıda birleştirdi. Rasattepe üzerine.', bugun: 'Atatürk ve İnönü burada yatıyor; müze ve Kurtuluş Savaşı panoramaları.', ilginc: 'Aslanlı Yol\'daki aslanlar Hitit sanatından esinlenmiş; 12\'si erkek, 12\'si dişi, ve hepsi oturur durumda: "barış içinde güç".' },
      istanbul: { ikon: '🌉', yaptiran: '—', donem: '1923\'ten bugüne', mimar: '—', sure: '—', neden: '—', onem: 'Türkiye\'nin en büyük şehri; Avrupa ile Asya\'yı birleştiren tek metropol.', teknik: [['Nüfus (2023)', '~15,7 milyon'], ['Tarihi Alanlar', 'UNESCO Dünya Mirası (1985)']], nasil: '—', bugun: 'Ekonomi, kültür ve turizm merkezi.', ilginc: 'İstanbul 2.700 yılda Byzantion, Konstantinopolis, Kostantiniyye, İstanbul gibi pek çok adla anıldı.' },
      bogazkoprusu: { ikon: '🌉', yaptiran: 'Türkiye Cumhuriyeti (Karayolları)', donem: '1970-1973', mimar: 'Freeman Fox & Partners (Gilbert Roberts, William Brown)', sure: '~3 yıl', neden: 'İstanbul\'un iki yakasını karayoluyla bağlamak.', onem: 'Avrupa ile Asya arasında ilk köprü. Cumhuriyet\'in 50. yılında (30 Ekim 1973) açıldı.', teknik: [['Ana açıklık', '1.074 m'], ['Kule', '165 m'], ['Deniz yüksekliği', '64 m']], nasil: 'Çelik kuleler, eğik askı halatları, aerodinamik kutu kesitli tabliye.', bugun: '2016\'dan beri adı "15 Temmuz Şehitler Köprüsü". Günde ~180.000 araç.', ilginc: 'Açılışın ilk günü köprü yayalara açıldı ve yüz binlerce kişi kıtalar arasında yürüdü.' },
      canakkale1915: { ikon: '🌉', yaptiran: 'Türkiye Cumhuriyeti', donem: '2017-2022', mimar: 'COWI (tasarım), DLSY ortaklığı', sure: '~5 yıl', neden: 'Çanakkale Boğazı\'nı geçmek; Marmara otoyol halkası.', onem: 'Dünyanın orta açıklığı en uzun asma köprüsü.', teknik: [['Orta açıklık', '2.023 m (2023\'e, Cumhuriyet\'in 100. yılına gönderme)'], ['Kule', '318 m (18 Mart 1915\'e gönderme)']], nasil: 'Deniz tabanına keson temeller; çelik kuleler.', bugun: '18 Mart 2022\'de açıldı.', ilginc: 'Kulelerin tepesindeki kırmızı-beyaz renkler ve "füze" biçimi, Çanakkale Savaşı\'nın top mermilerinden esinlenmiş.' },
      ataturkbaraji: { ikon: '💧', yaptiran: 'DSİ (GAP)', donem: '1983-1992', mimar: 'DSİ', sure: '~9 yıl', neden: 'Fırat\'tan elektrik üretimi ve Harran Ovası\'nın sulanması.', onem: 'Türkiye\'nin en büyük barajı; GAP\'ın kalbi.', teknik: [['Yükseklik', '169 m'], ['Uzunluk', '1.820 m'], ['Göl', '817 km²']], nasil: 'Kaya dolgu baraj.', bugun: 'Şanlıurfa Tünelleri ile Harran Ovası\'na su veriyor; yılda ~8,9 milyar kWh elektrik.', ilginc: 'Barajın gölü, antik Samosata (Kommagene\'nin başkenti) kentini sular altında bıraktı.' },
      camlica: { ikon: '📡', yaptiran: 'Ulaştırma Bakanlığı', donem: '2016-2020', mimar: 'Melike Altınışık', sure: '~4 yıl', neden: 'İstanbul\'daki onlarca anteni tek kuleye toplamak.', onem: 'İstanbul\'un en yüksek yapısı (369 m).', teknik: [['Yükseklik', '369 m (deniz seviyesinden 587 m)']], nasil: 'Betonarme gövde, lale biçiminden esinlenen tasarım.', bugun: 'Seyir terası ve restoran.', ilginc: 'Kulenin tepesinden açık havada 100 km uzaklık görülebiliyor.' }
    },
    ulke: [
      { ad: 'Genel bakış', ikon: '🧭', html: `<p><b>Türkiye Cumhuriyeti</b> 29 Ekim 1923\'te ilan edildi; başkenti Ankara. Kurucusu Mustafa Kemal Atatürk. Anadolu\'nun ve Trakya\'nın 783.562 km²\'lik topraklarında bugün ~86 milyon kişi yaşıyor.</p><p>Bu topraklarda 12.000 yıldır kesintisiz yerleşim var: Göbekli Tepe\'den Hititlere, Lidya\'dan Bizans\'a, Selçuklulardan Osmanlılara.</p>` },
      { ad: 'Devrimler', ikon: '📜', html: `<ul><li>Saltanatın kaldırılması (1922), Cumhuriyet (1923), halifeliğin kaldırılması (1924).</li><li>Tevhid-i Tedrisat: eğitimde birlik (1924).</li><li>Şapka kanunu (1925), Medeni Kanun (1926).</li><li>Harf devrimi (1928), ölçü ve takvim birlikleri.</li><li>Kadınlara seçme ve seçilme hakkı (1930 belediye, 1934 milletvekili).</li></ul>` },
      { ad: 'Coğrafya', ikon: '⛰️', html: `<p>Yedi bölge: Marmara, Ege, Akdeniz, İç Anadolu, Karadeniz, Doğu ve Güneydoğu Anadolu. En yüksek dağ Ağrı (5.137 m), en uzun nehir Kızılırmak (1.355 km), en büyük göl Van Gölü (3.713 km²).</p>` }
    ]
  });
})();
