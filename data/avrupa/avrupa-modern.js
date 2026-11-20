// Avrupa: Devrimler ve dünya savaşları (MS 1789 – 1945) ve Birleşik Avrupa (MS 1945 – bugün)
// Kaynaklar: Hobsbawm, "Devrim Çağı", "Sermaye Çağı", "İmparatorluk Çağı", "Aşırılıklar Çağı"; Judt, "Postwar" (2005).
(() => {
  const ESKI = window.AVRUPA_ESKI;

  // ================= 5. DEVRİMLER VE DÜNYA SAVAŞLARI =================
  window.PLACES.push({
    id: 'avrupa-devrimler', sira: 5, kisa: 'Devrimler ve dünya savaşları', aralikAd: 'MS 1789 – 1945',
    baslik: 'Fransız İhtilali · Napolyon · Sanayi · Eyfel · İki dünya savaşı',
    ulkeAlt: 'Devrimler, ulus devletler, sanayi ve dünya savaşları (MS 1789 – 1945)',
    from: -1789, to: -1945, start: -1889,
    not: 'Tarihler kesindir. Savaş kayıpları tahminidir.', baskent: 'Paris, Londra, Berlin, Viyana, St. Petersburg/Moskova, Roma',
    sahne: { kizak: false, buhar: -1830, oto: -1905, ucak: -1914, giyim: [[-1789, 'cubbe'], [-1880, 'modern']] },
    dynasties: [{ from: -1789, to: -1815, ad: 'Fransız İhtilali ve Napolyon', renk: '#2a4a9a' }, { from: -1815, to: -1914, ad: 'Sanayi, milliyetçilik ve sömürge imparatorlukları', renk: '#5a5a6a' }, { from: -1914, to: -1945, ad: 'Dünya savaşları çağı', renk: '#7a2a2a' }],
    rulers: [
      { from: -1789, to: -1799, ad: 'Fransız Devrimi (Robespierre, Direktuvar)', kisa: 'Devrim', kim: 'Bastille\'in alınması (14 Temmuz 1789), İnsan ve Yurttaş Hakları Bildirgesi; XVI. Louis giyotinle idam edildi (1793); Terör dönemi.' },
      { from: -1799, to: -1815, ad: 'Napolyon Bonapart', kisa: 'Napolyon', kim: 'Fransa imparatoru (1804). Avrupa\'nın çoğunu fethetti; Medeni Kanun\'u yaydı. Rusya seferinde ordusunu kaybetti; Waterloo\'da yenildi (1815).' },
      { from: -1815, to: -1848, ad: 'Viyana Kongresi düzeni (Metternich)', kisa: 'Metternich', kim: 'Krallar eski düzeni korumaya çalıştı; Yunanistan (1830) ve Belçika bağımsız oldu.' },
      { from: -1848, to: -1871, ad: '1848 devrimleri, III. Napolyon, Bismarck', kisa: 'Bismarck', kim: '"Halkların Baharı" (1848). İtalya (1861) ve Almanya (1871) birleşti.' },
      { from: -1871, to: -1914, ad: 'Kraliçe Victoria, II. Wilhelm, II. Nikolay', kisa: 'Victoria', kim: 'Britanya dünyanın dörtte birini yönetiyor; Avrupa Afrika\'yı paylaştı (Berlin Konferansı, 1884). "Güzel Dönem" (Belle Époque).' },
      { from: -1914, to: -1918, ad: 'Birinci Dünya Savaşı', kisa: '1. Dünya Savaşı', kim: 'Saraybosna suikastı (1914) ile başladı; siper savaşı; ~17 milyon ölü. Dört imparatorluk (Alman, Avusturya-Macaristan, Rus, Osmanlı) yıkıldı.' },
      { from: -1918, to: -1939, ad: 'İki savaş arası: Lenin, Stalin, Mussolini, Hitler', kisa: 'Diktatörler', kim: 'Rusya\'da Sovyetler Birliği; İtalya\'da faşizm (1922), Almanya\'da Nazizm (1933). 1929 Büyük Buhranı.' },
      { from: -1939, to: -1945, ad: 'İkinci Dünya Savaşı (Hitler, Churchill, Stalin, de Gaulle)', kisa: '2. Dünya Savaşı', kim: 'Almanya\'nın Polonya\'yı işgaliyle başladı. Holokost\'ta 6 milyon Yahudi öldürüldü. Avrupa\'da 8 Mayıs 1945\'te bitti; toplam ~70-85 milyon ölü.' }
    ],
    eras: [
      { from: -1789, to: -1815, puan: { eko: 3, ordu: 5, istikrar: 1 }, baskent: 'Paris',
        gundem: 'Fransız İhtilali "Özgürlük, Eşitlik, Kardeşlik" fikirlerini yaydı: krallık yıkıldı, cumhuriyet ilan edildi. Napolyon bütün Avrupa\'yı fethetti; Kutsal Roma İmparatorluğu sona erdi (1806). Metre sistemi ve Medeni Kanun yayıldı.',
        savas: 'Napolyon Savaşları: Austerlitz (1805), Trafalgar (1805), Rusya seferi (1812: 600.000 asker gitti, ~100.000\'i döndü), Waterloo (1815).', ekonomi: 'İngiltere\'de fabrikalar ve buhar makineleri; Kıta Ablukası.',
        din: 'Devrim kilisenin topraklarına el koydu; laiklik fikri doğdu.', yasam: 'Beethoven\'ın 3. Senfonisi önce Napolyon\'a adanmıştı; imparator olunca adını sildi.', bilgi: 'Metre, 1793\'te Dünya\'nın kuzey kutbundan ekvatora uzaklığının on milyonda biri olarak tanımlandı.' },
      { from: -1815, to: -1914, puan: { eko: 5, ordu: 5, istikrar: 3 }, baskent: 'Londra, Paris, Berlin, Viyana',
        gundem: 'Sanayi Devrimi Avrupa\'yı dönüştürdü: demiryolları (1825), telgraf, elektrik, fotoğraf, telefon, otomobil (1886). Kentler büyüdü; işçi hareketleri ve sosyalizm doğdu. Milliyetçilikle İtalya ve Almanya birleşti. Avrupalı devletler Afrika ve Asya\'nın çoğunu sömürgeleştirdi. Eyfel Kulesi (1889) çağın simgesi.',
        savas: 'Kırım Savaşı (1853-56), Prusya-Fransa Savaşı (1870-71).', ekonomi: 'Kömür, demir, çelik; Londra dünyanın finans merkezi.',
        din: 'Darwin\'in "Türlerin Kökeni" (1859) büyük tartışma yarattı.', yasam: 'Zorunlu ilkokul, gazeteler, müzeler, futbol (1863 kuralları).', bilgi: 'Eyfel Kulesi 20 yıl sonra sökülecekti; telsiz anteni olarak işe yarayınca kurtuldu.' },
      { from: -1914, to: -1945, puan: { eko: 1, ordu: 5, istikrar: 1 }, baskent: 'Berlin, Londra, Moskova, Paris',
        gundem: 'İki dünya savaşı Avrupa\'yı yıktı. Birinci Dünya Savaşı imparatorlukları yıktı; Rusya\'da Bolşevik Devrimi (1917). Büyük Buhran\'ın ardından faşizm ve Nazizm yükseldi. İkinci Dünya Savaşı ve Holokost insanlık tarihinin en büyük felaketleri oldu.',
        savas: 'Verdun ve Somme (1916), Stalingrad (1942-43), Normandiya Çıkarması (6 Haziran 1944), Berlin\'in düşüşü (1945).', ekonomi: '1929 Büyük Buhranı; savaş ekonomileri.',
        din: 'Holokost: Nazi Almanyası Yahudileri, Romanları ve diğerlerini sistemli olarak öldürdü.', yasam: 'Kadınlar savaş fabrikalarında çalıştı; birçok ülkede oy hakkı kazandı.', bilgi: '1914 Noel\'inde Batı Cephesi\'nde İngiliz ve Alman askerler siperlerden çıkıp birlikte şarkı söyledi, top oynadı: "Noel Ateşkesi".' }
    ],
    nufus: [[-1789, 150], [-1850, 270], [-1900, 400], [-1914, 460], [-1945, 520]],
    nufusNot: 'Bütün Avrupa (Avrupa Rusyası dahil).',
    dunyaOzet: { eko: 'Avrupa sanayi ve sömürgelerle dünya ekonomisinin merkezi; 1900\'den sonra ABD yetişti.', askeri: 'Makineli tüfek, tank, uçak, denizaltı; 1945\'te atom bombası.' },
    events: [
      { y: -1789, t: 'Bastille\'in alınması', k: 'm' }, { y: -1793, t: 'XVI. Louis idam edildi', k: 'm' }, { y: -1804, t: 'Napolyon imparator oldu', k: 'm' }, { y: -1805, t: 'Austerlitz ve Trafalgar', k: 'm' },
      { y: -1812, t: 'Napolyon\'un Rusya seferi', k: 'm' }, { y: -1815, t: 'Waterloo; Viyana Kongresi', k: 'm' }, { y: -1825, t: 'İlk yolcu demiryolu (İngiltere)', k: 'm' }, { y: -1848, t: 'Avrupa\'da 1848 devrimleri', k: 'm' },
      { y: -1859, t: 'Darwin: Türlerin Kökeni', k: 'm' }, { y: -1861, t: 'İtalya birleşti', k: 'm' }, { y: -1871, t: 'Almanya birleşti', k: 'm' }, { y: -1889, t: 'Eyfel Kulesi açıldı', k: 'm' },
      { y: -1896, t: 'Atina\'da ilk modern Olimpiyatlar', k: 'm' }, { y: -1914, t: 'Birinci Dünya Savaşı başladı', k: 'm' }, { y: -1917, t: 'Rus Devrimi', k: 'm' }, { y: -1918, t: 'Birinci Dünya Savaşı bitti', k: 'm' },
      { y: -1919, t: 'Versay Antlaşması', k: 'm' }, { y: -1933, t: 'Hitler iktidara geldi', k: 'm' }, { y: -1939, t: 'İkinci Dünya Savaşı başladı', k: 'm' }, { y: -1944, t: 'Normandiya Çıkarması', k: 'm' }, { y: -1945, t: 'Savaş Avrupa\'da bitti (8 Mayıs)', k: 'm' },
      { y: -1923, t: 'Türkiye Cumhuriyeti', k: 'w' }, { y: -1929, t: 'Büyük Buhran', k: 'w' }
    ],
    world: [{ from: -1789, to: -1945, yer: 'ABD', t: 'Bağımsız cumhuriyet, iç savaş (1861-65), sanayi devi.' }, { from: -1789, to: -1922, yer: 'Osmanlı', t: 'Tanzimat ve çöküş; 1923 Türkiye Cumhuriyeti.' }, { from: -1858, to: -1945, yer: 'Hindistan', t: 'Britanya sömürgesi.' }, { from: -1868, to: -1945, yer: 'Japonya', t: 'Meiji modernleşmesi.' }],
    sites: [{ ad: 'LONDRA', wx: 2300 }, { ad: 'MANCHESTER', wx: 2100 }, { ad: 'NORMANDİYA', wx: 2600 }, { ad: 'PARİS', wx: 2900 }, { ad: 'WATERLOO · BRÜKSEL', wx: 3200 }, { ad: 'VERDUN', wx: 3350 }, { ad: 'BERLİN', wx: 3800 }, { ad: 'ROMA', wx: 4800 }, { ad: 'VİYANA', wx: 5300 }, { ad: 'SARAYBOSNA', wx: 5700 }, { ad: 'STALİNGRAD', wx: 7800 }],
    monuments: [
      { id: 'eyfel', ad: 'Eyfel Kulesi', yer: 'Paris', wx: 2950, type: 'tower', b: 25, h: 180, start: -1887, end: -1889, vol: 1.5e5 },
      { id: 'bigben', ad: 'Westminster Sarayı ve Big Ben', yer: 'Londra', wx: 2300, type: 'gothic', tek: true, saat: true, sivri: true, renk: '#d9c79a', b: 90, h: 96, start: -1840, end: -1859, vol: 1.4e5 },
      { id: 'brandenburg', ad: 'Brandenburg Kapısı', yer: 'Berlin', wx: 3800, bank: 'near', type: 'greek', duz: true, renk: '#e8e0cc', b: 65, h: 26, sutun: 6, start: -1788, end: -1791, vol: 3e4 },
      { id: 'paris', ad: 'Paris (Haussmann bulvarları)', yer: 'Paris', wx: 2900, bank: 'near', type: 'modcity', b: 420, h: 30, n: 40, start: -1853, end: -1870, vol: 8e4 },
      { id: 'londra', ad: 'Londra', yer: 'Londra', wx: 2350, bank: 'near', type: 'modcity', b: 400, h: 35, n: 40, start: -1800, end: -1900, vol: 8e4 },
      ...ESKI(['notredame', 'versay', 'aziz_petrus', 'floransa', 'kremlin', 'kolezyum', 'londrakulesi']),
      ...ESKI(['koln'], { koln: { stop: undefined, maxP: undefined, start: -1842, end: -1880 } })
    ],
    hizli: [{ ad: 'Bastille', y: -1789 }, { ad: 'Napolyon', y: -1805 }, { ad: 'Waterloo', y: -1815 }, { ad: 'Demiryolu', y: -1830 }, { ad: '1848', y: -1848 }, { ad: 'Almanya', y: -1871 }, { ad: 'Eyfel', y: -1889 }, { ad: '1. Dünya Savaşı', y: -1916 }, { ad: 'Buhran', y: -1929 }, { ad: '2. Dünya Savaşı', y: -1942 }, { ad: 'Zafer', y: -1945 }],
    bilgi: {
      eyfel: { ikon: '🗼', yaptiran: 'Fransa (1889 Dünya Fuarı)', donem: '1887-1889', mimar: 'Gustave Eiffel\'in şirketi (Maurice Koechlin, Émile Nouguier, Stephen Sauvestre)', sure: '2 yıl 2 ay', neden: 'Fransız Devrimi\'nin 100. yılı için Dünya Fuarı\'nın giriş kapısı.', onem: '1930\'a kadar dünyanın en yüksek yapısı; Paris\'in ve Fransa\'nın simgesi.', teknik: [['Yükseklik', '330 m (antenlerle)'], ['Demir parça', '18.038'], ['Perçin', '2,5 milyon'], ['Ağırlık', '~10.100 ton']], nasil: 'Parçalar fabrikada milimetrik hesaplanıp perçinlendi; şantiyede yalnızca 300 işçi çalıştı.', bugun: 'Yılda ~6 milyon ziyaretçi.', ilginc: 'Sıcak yaz günlerinde demir genleşir ve kule 15 cm\'ye kadar uzar.' },
      bigben: { ikon: '🕰️', yaptiran: 'Britanya parlamentosu', donem: '1840-1859 (saat 1859)', mimar: 'Charles Barry ve Augustus Pugin', sure: '~19 yıl', neden: '1834 yangınında yanan eski sarayın yerine.', onem: 'Britanya parlamentosunun binası; "parlamentoların anası".', teknik: [['Saat kulesi', '96 m'], ['Big Ben çanı', '13,7 ton']], nasil: 'Neo-Gotik üslupta.', bugun: 'Kule 2012\'den beri "Elizabeth Kulesi" adını taşıyor.', ilginc: 'Saatin hızı, sarkacın üstüne bozuk para konup alınarak ayarlanır: bir peni saati günde 0,4 saniye hızlandırır.' },
      brandenburg: { ikon: '🏛️', yaptiran: 'Prusya kralı II. Friedrich Wilhelm', donem: '1788-1791', mimar: 'Carl Gotthard Langhans', sure: '3 yıl', neden: 'Berlin\'in barış kapısı.', onem: 'Almanya\'nın bölünmüşlüğünün ve birleşmesinin simgesi.', teknik: [['Sütun', '12 Dor sütunu'], ['Yükseklik', '26 m']], nasil: 'Atina Akropolis girişinden (Propylaia) esinlendi.', bugun: 'Berlin\'in simgesi.', ilginc: 'Tepedeki dört atlı araba heykelini Napolyon 1806\'da Paris\'e götürdü; 1814\'te geri getirildi.' },
      paris: { ikon: '🏙️', yaptiran: 'III. Napolyon ve Baron Haussmann', donem: '1853-1870', mimar: 'Georges-Eugène Haussmann', sure: '~17 yıl', neden: 'Dar ortaçağ sokaklarını geniş bulvarlarla değiştirmek.', onem: 'Modern şehir planlamasının örneği.', teknik: [['Bulvar', '~165 km yeni cadde']], nasil: '~20.000 bina yıkıldı, 40.000 yenisi yapıldı.', bugun: 'Paris\'in bugünkü görünümü.', ilginc: 'Bulvarlar biraz da barikat kurulmasını zorlaştırmak için genişti.' },
      londra: { ikon: '🏙️', yaptiran: '—', donem: '19. yüzyıl', mimar: '—', sure: '—', neden: '—', onem: '1825-1925 arası dünyanın en büyük şehri.', teknik: [['Nüfus (1900)', '~6,5 milyon']], nasil: '—', bugun: 'Birleşik Krallık\'ın başkenti.', ilginc: 'Dünyanın ilk metrosu Londra\'da 1863\'te açıldı.' }
    },
    ulke: [
      { ad: 'Genel bakış', ikon: '🧭', html: '<p>Fransız İhtilali ve Sanayi Devrimi Avrupa\'yı kökten değiştirdi: krallıklar yerini ulus devletlere ve cumhuriyetlere bırakmaya başladı. 19. yüzyılda Avrupa dünyanın en güçlü bölgesiydi. 20. yüzyılın ilk yarısında iki dünya savaşı kıtayı yıktı.</p>' },
      { ad: 'Fikirler', ikon: '💡', html: '<ul><li>İnsan hakları, demokrasi, milliyetçilik</li><li>Liberalizm, sosyalizm (Marx, 1848)</li><li>Darwin\'in evrim kuramı</li><li>Einstein\'ın görelilik kuramı (1905, 1915)</li></ul>' }
    ]
  });

  // ================= 6. BİRLEŞİK AVRUPA =================
  window.PLACES.push({
    id: 'avrupa-bugun', sira: 6, modern: true, kisa: 'Soğuk Savaş ve Avrupa Birliği', aralikAd: 'MS 1945 – bugün',
    baslik: 'Berlin Duvarı · Avrupa Birliği · Euro',
    ulkeAlt: 'Soğuk Savaş ve birleşen Avrupa (1945 – 2026)',
    from: -1945, to: -2026, start: -1989,
    not: 'Tarihler kesindir.', baskent: 'Brüksel (AB kurumları), Strazburg (Avrupa Parlamentosu)',
    sahne: { kizak: false, oto: -1945, turist: -1960, ucak: -1945, giyim: 'modern' },
    dynasties: [{ from: -1945, to: -1991, ad: 'Soğuk Savaş: bölünmüş Avrupa', renk: '#4a4a7a' }, { from: -1991, to: -2026, ad: 'Avrupa Birliği', renk: '#2a4aa0' }],
    rulers: [
      { from: -1945, to: -1957, ad: 'Yeniden yapılanma (Marshall Planı, NATO)', kisa: 'Marshall Planı', kim: 'ABD Batı Avrupa\'ya yardım etti; Avrupa "Demir Perde" ile ikiye bölündü.' },
      { from: -1957, to: -1989, ad: 'Avrupa Ekonomik Topluluğu ve Doğu Bloku', kisa: 'AET', kim: 'Roma Antlaşması (1957) ile 6 ülke ortak pazar kurdu. Doğuda Sovyet etkisi; Berlin Duvarı (1961).' },
      { from: -1989, to: -2004, ad: 'Duvarın yıkılışı ve Avrupa Birliği\'nin doğuşu', kisa: 'Maastricht', kim: 'Berlin Duvarı yıkıldı (1989), Almanya birleşti (1990), SSCB dağıldı (1991). Maastricht (1992) ile Avrupa Birliği; euro (2002).' },
      { from: -2004, to: -2026, ad: 'Genişleyen AB ve yeni krizler', kisa: 'AB', kim: 'Doğu Avrupa ülkeleri AB\'ye katıldı (2004). Borç krizi, Brexit (2020), salgın ve Rusya\'nın Ukrayna\'yı işgali (2022).' }
    ],
    eras: [
      { from: -1945, to: -1989, puan: { eko: 4, ordu: 4, istikrar: 4 }, baskent: 'Batı: Bonn, Paris, Londra · Doğu: Moskova',
        gundem: 'Savaşın yıkıntılarından Batı Avrupa hızla toparlandı ("ekonomik mucize"). Kıta Demir Perde ile ikiye bölündü: Batıda demokrasiler ve NATO, Doğuda Sovyet etkisindeki rejimler ve Varşova Paktı. Berlin Duvarı (1961) bölünmenin simgesi oldu. Avrupa Ekonomik Topluluğu genişledi.',
        savas: 'Soğuk Savaş: nükleer silahlanma; Macaristan (1956) ve Çekoslovakya (1968) ayaklanmaları bastırıldı.', ekonomi: 'Refah devleti, ortak pazar, kitle turizmi.',
        din: 'Kiliseler boşalıyor; laikleşme.', yasam: 'Rock müzik, 1968 öğrenci hareketleri, uzay yarışı.', bilgi: 'Berlin Duvarı 155 km uzunluğundaydı; 28 yıl boyunca en az 140 kişi geçmeye çalışırken öldü.' },
      { from: -1989, to: -2026, puan: { eko: 4, ordu: 3, istikrar: 3 }, baskent: 'Brüksel',
        gundem: '9 Kasım 1989\'da Berlin Duvarı yıkıldı; Doğu Avrupa demokrasiye geçti. Avrupa Birliği 27 ülkeye ulaştı; Schengen ile sınırlar kalktı, 20 ülke euro kullanıyor. Ama Yugoslavya savaşları (1991-2001), borç krizi, göç tartışmaları, Brexit ve 2022\'de Rusya\'nın Ukrayna\'yı işgali yeni sınavlar oldu.',
        savas: 'Bosna Savaşı ve Srebrenitsa (1995); Ukrayna Savaşı (2022-).', ekonomi: 'Tek pazar ve euro; AB dünyanın en büyük ekonomilerinden.',
        din: 'Çok dinli, çok kültürlü toplumlar.', yasam: 'Erasmus öğrenci değişimi, ucuz uçuşlar, internet.', bilgi: 'CERN\'de (Cenevre) Tim Berners-Lee 1989\'da World Wide Web\'i icat etti.' }
    ],
    nufus: [[-1945, 520], [-1970, 650], [-1990, 720], [-2026, 745]],
    nufusNot: 'Bütün Avrupa (Rusya\'nın Avrupa kısmı dahil); AB ~450 milyon.',
    dunyaOzet: { eko: 'ABD, Çin ve AB dünyanın en büyük üç ekonomisi.', askeri: 'NATO; nükleer caydırıcılık; insansız hava araçları.' },
    events: [
      { y: -1948, t: 'Marshall Planı; Berlin Ablukası', k: 'm' }, { y: -1949, t: 'NATO kuruldu', k: 'm' }, { y: -1957, t: 'Roma Antlaşması: AET', k: 'm' }, { y: -1961, t: 'Berlin Duvarı', k: 'm' },
      { y: -1968, t: 'Prag Baharı; Paris\'te öğrenci olayları', k: 'm' }, { y: -1986, t: 'Çernobil nükleer kazası', k: 'm' }, { y: -1989, t: 'Berlin Duvarı yıkıldı', k: 'm' }, { y: -1990, t: 'Almanya birleşti', k: 'm' },
      { y: -1991, t: 'Sovyetler Birliği dağıldı', k: 'm' }, { y: -1993, t: 'Avrupa Birliği kuruldu', k: 'm' }, { y: -2002, t: 'Euro banknotları', k: 'm' }, { y: -2004, t: 'AB 10 ülkeyle genişledi', k: 'm' },
      { y: -2020, t: 'Brexit; COVID-19 salgını', k: 'm' }, { y: -2022, t: 'Rusya Ukrayna\'yı işgal etti', k: 'm' }, { y: -2024, t: 'Notre-Dame yeniden açıldı', k: 'm' },
      { y: -1969, t: 'Ay\'a ilk iniş', k: 'w' }
    ],
    world: [{ from: -1945, to: -1991, yer: 'Dünya', t: 'ABD ve SSCB: Soğuk Savaş.' }, { from: -1949, to: -2026, yer: 'Çin', t: 'Halk Cumhuriyeti; 1980\'lerden sonra hızlı büyüme.' }, { from: -1991, to: -2026, yer: 'Dünya', t: 'Küreselleşme, internet, iklim değişikliği.' }],
    sites: [{ ad: 'LİZBON', wx: 1000 }, { ad: 'MADRİD', wx: 1600 }, { ad: 'LONDRA', wx: 2300 }, { ad: 'PARİS', wx: 2900 }, { ad: 'BRÜKSEL', wx: 3200 }, { ad: 'BERLİN', wx: 3800 }, { ad: 'CENEVRE · CERN', wx: 4000 }, { ad: 'ROMA', wx: 4800 }, { ad: 'VİYANA', wx: 5300 }, { ad: 'KİEV', wx: 7200 }, { ad: 'MOSKOVA', wx: 7600 }],
    monuments: [
      { id: 'berlinduvari', ad: 'Berlin Duvarı', yer: 'Berlin', wx: 3850, bank: 'near', type: 'citadel', renk: '#b8b8b0', b: 260, h: 4, start: -1961, end: -1961.5, vol: 5e4, ruin: -1989 },
      { id: 'atomium', ad: 'Atomium', yer: 'Brüksel', wx: 3200, type: 'tower', b: 18, h: 102, start: -1956, end: -1958, vol: 3e4 },
      { id: 'abparlamentosu', ad: 'Avrupa Parlamentosu', yer: 'Strazburg', wx: 3400, type: 'modcity', b: 160, h: 60, n: 8, start: -1995, end: -1999, vol: 6e4 },
      ...ESKI(['eyfel', 'bigben', 'brandenburg', 'paris', 'londra', 'notredame', 'versay', 'aziz_petrus', 'floransa', 'kremlin', 'kolezyum', 'parthenon', 'stonehenge'], { versay: { muze: -1837 }, kolezyum: { muze: -1950 }, parthenon: { muze: -1950 } }),
      ...ESKI(['koln'], { koln: { stop: undefined, maxP: undefined, start: -1842, end: -1880 } })
    ],
    hizli: [{ ad: 'Marshall', y: -1948 }, { ad: 'Roma Antl.', y: -1957 }, { ad: 'Duvar', y: -1961 }, { ad: '1968', y: -1968 }, { ad: 'Çernobil', y: -1986 }, { ad: 'Duvar yıkıldı', y: -1989 }, { ad: 'AB', y: -1993 }, { ad: 'Euro', y: -2002 }, { ad: 'Brexit', y: -2020 }, { ad: 'Bugün', y: -2026 }],
    bilgi: {
      berlinduvari: { ikon: '🧱', yaptiran: 'Doğu Almanya (DDR)', donem: '13 Ağustos 1961 – 9 Kasım 1989', mimar: '—', sure: 'Bir gecede tel örgü; sonra beton', neden: 'Doğu Almanların Batı\'ya kaçışını durdurmak.', onem: 'Soğuk Savaş\'ın ve bölünmüş Avrupa\'nın simgesi.', teknik: [['Uzunluk', '155 km'], ['Yükseklik', '3,6 m'], ['Gözetleme kulesi', '302']], nasil: 'Beton bloklar, "ölüm şeridi", köpekler ve ışıklar.', bugun: 'East Side Gallery\'de 1,3 km\'lik resimli bir parçası duruyor.', ilginc: 'Duvar, bir sözcünün yanlışlıkla "sınır hemen şimdi açıldı" demesiyle yıkıldı: o gece binlerce kişi kapılara yürüdü.' },
      atomium: { ikon: '⚛️', yaptiran: 'Belçika (Expo 58)', donem: '1956-1958', mimar: 'André ve Jean Polak; mühendis André Waterkeyn', sure: '~2 yıl', neden: '1958 Dünya Fuarı.', onem: 'Bir demir kristalinin 165 milyar kat büyütülmüş modeli; atom çağının simgesi.', teknik: [['Yükseklik', '102 m'], ['Küre', '9 adet, 18 m çap']], nasil: 'Çelik borularla birbirine bağlı alüminyum küreler.', bugun: 'Müze ve seyir terası.', ilginc: 'Yalnızca fuar için yapılmıştı; sökülmesi planlanıyordu.' },
      abparlamentosu: { ikon: '🇪🇺', yaptiran: 'Avrupa Birliği', donem: '1995-1999', mimar: 'Architecture-Studio', sure: '~4 yıl', neden: 'Avrupa Parlamentosu\'nun genel kurul binası.', onem: '27 ülkenin seçilmiş temsilcileri burada toplanıyor.', teknik: [['Milletvekili', '720']], nasil: '—', bugun: 'Strazburg ve Brüksel arasında dönüşümlü toplantılar.', ilginc: 'Parlamento ayda bir hafta Strazburg\'a taşınır: her ay kamyonlarla dosyalar götürülür.' }
    },
    ulke: [
      { ad: 'Genel bakış', ikon: '🧭', html: '<p>İkinci Dünya Savaşı\'ndan sonra Avrupa ikiye bölündü; Batı Avrupa ülkeleri savaşı bir daha yaşamamak için ekonomilerini birleştirdi. 1989\'da Berlin Duvarı\'nın yıkılmasıyla kıta yeniden birleşti; bugün <b>Avrupa Birliği</b> 27 ülkeyi bir araya getiriyor.</p>' },
      { ad: 'Avrupa Birliği', ikon: '🇪🇺', html: '<ul><li>27 üye, ~450 milyon kişi</li><li>Euro: 20 ülke</li><li>Schengen: pasaportsuz seyahat</li><li>Türkiye 1987\'de başvurdu, 1999\'da aday oldu</li></ul>' }
    ]
  });
})();
