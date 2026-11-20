// Milattan sonra için küre verileri: yapı konumları, Vikipedi başlıkları, şehirler, sınırlar ve olaylar.
// Yıl: MS yıllar negatif (MS 1869 = -1869).
(() => {
  const M = window.MISIR;
  Object.assign(M.coords, {
    babilon: [30.006, 31.230], antinoopolis: [27.81, 30.88], pompeius: [31.1825, 29.8964], beyazmanastir: [26.53, 31.65],
    fustat: [30.008, 31.234], amr: [30.010, 31.233], asmakilise: [30.0053, 31.2302], ibntolun: [30.0287, 31.2495],
    kahire: [30.046, 31.262], ezher: [30.0458, 31.2627], kale: [30.0287, 31.2599], sultanhasan: [30.0322, 31.2564], kayitbay: [31.2140, 29.8856],
    kahiremodern: [30.0444, 31.2357], iskenderiyemodern: [31.2001, 29.9187], mehmetali: [30.0287, 31.2599], misirmuzesi: [30.0478, 31.2336],
    kahirekulesi: [30.0459, 31.2243], asuanbaraji: [23.9706, 32.8778], bibliotheca: [31.2089, 29.9092], gem: [29.9946, 31.1196]
  });
  Object.assign(M.wiki, {
    babilon: 'Babylon Fortress', antinoopolis: 'Antinoöpolis', pompeius: "Pompey's Pillar (column)", beyazmanastir: 'White Monastery',
    fustat: 'Fustat', amr: 'Mosque of Amr ibn al-As', asmakilise: 'Hanging Church', ibntolun: 'Mosque of Ibn Tulun', kahire: 'Islamic Cairo',
    ezher: 'Al-Azhar Mosque', kale: 'Cairo Citadel', sultanhasan: 'Mosque-Madrasa of Sultan Hasan', kayitbay: 'Citadel of Qaitbay',
    kahiremodern: 'Cairo', iskenderiyemodern: 'Alexandria', mehmetali: 'Mosque of Muhammad Ali', misirmuzesi: 'Egyptian Museum',
    kahirekulesi: 'Cairo Tower', asuanbaraji: 'Aswan Dam', bibliotheca: 'Bibliotheca Alexandrina', gem: 'Grand Egyptian Museum'
  });

  // ---------- şehirler: eski şehirlerin bazıları bugüne kadar yaşıyor ----------
  const S = M.sehirler, sehir = ad => S.find(c => c.ad === ad);
  const isk = sehir('İskenderiye'); if (isk) { isk.to = -2026; isk.b = [[320, -641]]; }
  const asu = sehir('Elephantine (Asuan)'); if (asu) asu.to = -2026;
  const teb = sehir('Teb (Vaset)'); if (teb) teb.to = -2026;
  const mem = sehir('Memfis'); if (mem) mem.to = -700;
  const pel = sehir('Pelusium'); if (pel) pel.to = -1200;
  const siv = sehir('Siva'); if (siv) siv.to = -2026;
  S.push(
    { ad: 'Fustat', ll: [30.008, 31.234], from: -641, to: -1168, b: [[-641, -969]], not: 'Arap fethinden sonra kurulan ilk başkent.' },
    { ad: 'Kahire', ll: [30.044, 31.236], from: -969, to: -2026, b: [[-969, -2026]], not: 'Fatımilerin kurduğu şehir; bin yıldır Mısır\'ın başkenti.' },
    { ad: 'Antinoopolis', ll: [27.81, 30.88], from: -130, to: -1000, not: 'Hadrianus\'un kurduğu Roma şehri.' },
    { ad: 'Dimyat', ll: [31.42, 31.81], from: -100, to: -2026, tur: 'kale', not: 'Doğu deltanın limanı; Haçlı seferlerinin hedefi.' },
    { ad: 'Reşit (Rosetta)', ll: [31.40, 30.42], from: -870, to: -2026, not: 'Batı deltada liman; Rosetta Taşı burada bulundu (1799).' },
    { ad: 'Asyut', ll: [27.18, 31.18], from: -641, to: -2026, not: 'Yukarı Mısır\'ın büyük şehri; Kıpti nüfusun merkezlerinden.' },
    { ad: 'Süveyş', ll: [29.97, 32.55], from: -1500, to: -2026, tur: 'liman', not: 'Kızıldeniz kıyısındaki liman; kanalın güney ucu.' },
    { ad: 'Port Said', ll: [31.26, 32.30], from: -1859, to: -2026, tur: 'liman', not: 'Süveyş Kanalı için kurulan liman şehri.' },
    { ad: 'İsmailiye', ll: [30.60, 32.27], from: -1863, to: -2026, not: 'Kanalın ortasında, Hidiv İsmail\'in adını taşıyan şehir.' },
    { ad: 'Yeni İdari Başkent', ll: [30.02, 31.70], from: -2015, to: -2026, not: 'Kahire\'nin 45 km doğusunda kurulan yeni hükümet şehri.' },
    { ad: 'El Alamein', ll: [30.83, 28.95], from: -1942, to: -2026, not: 'II. Dünya Savaşı\'nın dönüm noktası olan savaşların yeri.' }
  );
  Object.assign(window.SEHIR_BILGI, {
    'Fustat': { bugun: 'Eski Kahire (Mısr el-Kadime)', kurulus: 'MS 641 (Amr ibn el-As)', wiki: 'Fustat',
      onem: 'İslam Mısır\'ının ilk başkenti ve 300 yıl boyunca en büyük ticaret şehri.', ilginc: 'Çöplüklerinde bulunan Çin porselenleri, Orta Çağ\'ın küresel ticaretini gösteriyor.' },
    'Kahire': { bugun: 'Mısır\'ın başkenti; Büyük Kahire ~22 milyon', kurulus: 'MS 969 (Fatımiler)', wiki: 'Cairo',
      onem: 'Bin yıldır Mısır\'ın başkenti; Arap dünyasının ve Afrika\'nın en büyük şehri.', ilginc: '"Bin minareli şehir" diye anılır; Ezher Üniversitesi dünyanın en eski eğitim kurumlarından.' },
    'Antinoopolis': { bugun: 'Şeyh İbade köyü, Minya', kurulus: 'MS 130 (Hadrianus)', wiki: 'Antinoöpolis',
      onem: 'Roma döneminde Orta Mısır\'ın merkezi.', ilginc: 'Hadrianus onu Nil\'de boğulan sevgilisi Antinous için kurdu.' },
    'Dimyat': { bugun: 'Dimyat ili merkezi', kurulus: 'Antik Tamiat', wiki: 'Damietta',
      onem: 'Nil\'in doğu kolunun ağzındaki liman.', ilginc: 'Haçlılar 1219\'da aldı, ama Nil taşkını onları geri çekilmeye zorladı.' },
    'Reşit (Rosetta)': { bugun: 'Reşit, Buhayra ili', kurulus: 'MS ~870', wiki: 'Rosetta',
      onem: 'Nil\'in batı kolu üzerindeki liman şehri.', ilginc: 'Rosetta Taşı 1799\'da burada bir Fransız askerî tahkimatında bulundu.' },
    'Asyut': { bugun: 'Asyut ili merkezi', kurulus: 'Antik Sauty', wiki: 'Asyut',
      onem: 'Yukarı Mısır\'ın ticaret ve kervan şehri.', ilginc: 'Sudan\'dan gelen "Kırk Gün Yolu" kervanları burada sona ererdi.' },
    'Süveyş': { bugun: 'Süveyş ili merkezi', kurulus: 'Antik Klysma / Orta Çağ Kulzum', wiki: 'Suez',
      onem: 'Kızıldeniz limanı ve kanalın güney ucu.', ilginc: 'Osmanlılar 16. yüzyılda Hint Okyanusu donanmalarını burada inşa etti.' },
    'Port Said': { bugun: 'Port Said ili merkezi', kurulus: 'MS 1859', wiki: 'Port Said',
      onem: 'Süveyş Kanalı\'nın Akdeniz girişi.', ilginc: 'Adı Süveyş imtiyazını veren Said Paşa\'dan geliyor.' },
    'İsmailiye': { bugun: 'İsmailiye ili merkezi', kurulus: 'MS 1863', wiki: 'Ismailia',
      onem: 'Süveyş Kanalı İdaresi\'nin merkezi.', ilginc: 'Kanal kazılırken işçilerin kampı olarak doğdu.' },
    'Yeni İdari Başkent': { bugun: 'Kahire ile Süveyş arasında', kurulus: 'MS 2015 (yapımı sürüyor)', wiki: 'New Administrative Capital',
      onem: 'Bakanlıklar, meclis ve cumhurbaşkanlığı buraya taşınıyor.', ilginc: '394 m\'lik İkonik Kule Afrika\'nın en yüksek binası.' },
    'El Alamein': { bugun: 'Matruh ili, Akdeniz kıyısı', kurulus: 'Küçük bir tren durağı', wiki: 'El Alamein',
      onem: 'II. Dünya Savaşı\'nda Rommel\'in ilerleyişinin durdurulduğu yer (1942).', ilginc: 'Bugün bir sahil tatil kasabası ve savaş mezarlıklarıyla bilinir.' }
  });

  // ---------- sınırlar ----------
  const LEVANT = [[31.3, 34.2], [31.5, 34.45], [32.5, 34.9], [33.5, 35.3], [34.5, 35.8], [35.5, 35.8], [36.5, 36.2], [36.9, 38.0], [36.0, 38.4], [34.5, 37.6], [33.3, 36.6], [32.0, 36.1], [31.0, 35.6], [30.5, 34.9], [30.9, 34.3]];
  const SINA = [[31.2, 32.4], [31.1, 33.8], [29.5, 34.9], [27.75, 34.25], [29.9, 32.6]];
  const HICAZ = [[29.4, 34.95], [28.0, 35.2], [26.0, 36.6], [24.0, 38.1], [22.0, 39.1], [20.5, 40.0], [20.2, 41.2], [21.8, 40.7], [24.0, 39.8], [26.5, 38.0], [28.5, 36.6], [29.4, 35.8]];
  const SUDAN = [[22.0, 31.3], [22.0, 36.9], [18.0, 38.5], [15.5, 36.5], [12.0, 34.5], [10.0, 33.5], [10.0, 24.5], [15.0, 23.0], [20.0, 24.0], [22.0, 25.0]];
  const MODERN = [[31.6, 25.15], [31.35, 27.2], [31.05, 28.0], [30.9, 29.0], [31.2, 29.9], [31.45, 30.4], [31.55, 31.1], [31.5, 31.8], [31.25, 32.3], [31.15, 33.5], [31.3, 34.2],
    [29.5, 34.9], [28.4, 34.45], [27.75, 34.25], [28.5, 33.15], [29.95, 32.55], [29.6, 32.6], [28.2, 33.0], [27.3, 33.6], [26.4, 34.0], [25.2, 34.7], [23.9, 35.5], [23.0, 35.7], [22.0, 36.9], [22.0, 31.3], [22.0, 25.0]];
  const MODERN_SINASIZ = MODERN.filter(([la, lo]) => !(lo > 32.5 && la > 27.5));
  window.SINIRLAR.push(
    { from: 29, to: -395, ad: 'Roma İmparatorluğu · Aegyptus eyaleti', renk: '#9a3a3a', vadi: ['asuan', 'kuzey'], delta: true, poly: [SINA], etiket: [27.9, 28.7] },
    { from: -395, to: -619, ad: 'Bizans · Mısır', renk: '#6a3a8a', vadi: ['asuan', 'kuzey'], delta: true, poly: [SINA], etiket: [27.9, 28.7] },
    { from: -619, to: -629, ad: 'Sasani işgali', renk: '#5a7a3a', vadi: ['asuan', 'kuzey'], delta: true, poly: [SINA], etiket: [27.9, 28.7] },
    { from: -629, to: -641, ad: 'Bizans · Mısır', renk: '#6a3a8a', vadi: ['asuan', 'kuzey'], delta: true, poly: [SINA], etiket: [27.9, 28.7] },
    { from: -641, to: -868, ad: 'Halifelik · Mısır eyaleti', renk: '#3a7a5a', vadi: ['asuan', 'kuzey'], delta: true, poly: [SINA], etiket: [27.9, 28.7] },
    { from: -868, to: -905, ad: 'Tolunoğulları', renk: '#7a5a3a', vadi: ['asuan', 'kuzey'], delta: true, poly: [SINA, LEVANT], etiket: [27.9, 28.7] },
    { from: -905, to: -969, ad: 'Abbasi ve İhşidi Mısırı', renk: '#4a5a6a', vadi: ['asuan', 'kuzey'], delta: true, poly: [SINA], etiket: [27.9, 28.7] },
    { from: -969, to: -1171, ad: 'Fatımi Halifeliği', renk: '#3a8a5a', vadi: ['asuan', 'kuzey'], delta: true, poly: [SINA, LEVANT, HICAZ], etiket: [27.9, 28.7] },
    { from: -1171, to: -1250, ad: 'Eyyubiler', renk: '#b08a3a', vadi: ['asuan', 'kuzey'], delta: true, poly: [SINA, LEVANT, HICAZ], etiket: [27.9, 28.7] },
    { from: -1250, to: -1517, ad: 'Memlük Sultanlığı', renk: '#a04a3a', vadi: ['asuan', 'kuzey'], delta: true, poly: [SINA, LEVANT, HICAZ], etiket: [27.9, 28.7] },
    { from: -1517, to: -1805, ad: 'Osmanlı İmparatorluğu · Mısır eyaleti', renk: '#b03a3a', vadi: ['asuan', 'kuzey'], delta: true, poly: [SINA], etiket: [27.9, 28.7] },
    { from: -1805, to: -1882, ad: 'Kavalalı Mısırı', renk: '#3a8a8a', poly: [MODERN, SUDAN], etiket: [27.0, 29.5], etiket2: [16.5, 30.5], ad2: 'Mısır\'a bağlı Sudan' },
    { from: -1882, to: -1922, ad: 'Mısır Hidivliği (İngiliz işgali)', renk: '#5a5a8a', poly: [MODERN, SUDAN], etiket: [27.0, 29.5], etiket2: [16.5, 30.5], ad2: 'İngiliz-Mısır Sudanı' },
    { from: -1922, to: -1953, ad: 'Mısır Krallığı', renk: '#8a7a3a', poly: [MODERN], etiket: [27.0, 29.5] },
    { from: -1953, to: -1967, ad: 'Mısır Cumhuriyeti', renk: '#c03a3a', poly: [MODERN], etiket: [27.0, 29.5] },
    { from: -1967, to: -1982, ad: 'Mısır Cumhuriyeti', renk: '#c03a3a', poly: [MODERN_SINASIZ], etiket: [27.0, 29.5] },
    { from: -1967, to: -1982, ad: 'İsrail işgalinde Sina', renk: '#7a7a7a', poly: [SINA], etiket: [29.5, 33.8] },
    { from: -1982, to: -2026, ad: 'Mısır Arap Cumhuriyeti', renk: '#c03a3a', poly: [MODERN], etiket: [27.0, 29.5] }
  );

  // ---------- olaylar (MS) ----------
  window.OLAYLAR.push(
    // savaşlar
    { id: 'aktion', tur: 'savas', ad: 'Aktion deniz savaşı', y: 31, ll: [38.95, 20.75], onem: 4, wiki: 'Battle of Actium',
      taraflar: ['Octavianus (Roma)', 'Marcus Antonius ve Kleopatra'], kazanan: 'Octavianus', kuvvetler: 'Yüzlerce savaş gemisi; ~60.000 asker her iki yanda.',
      sonuc: 'Kleopatra ve Antonius Mısır\'a kaçtı; bir yıl sonra Mısır Roma eyaleti oldu.' },
    { id: 'iskenderiye298', tur: 'savas', ad: 'Diocletianus\'un İskenderiye kuşatması', y: -298, ll: [31.2, 29.92], onem: 2, wiki: 'Domitius Domitianus',
      taraflar: ['İmparator Diocletianus', 'İskenderiye\'deki isyancılar'], kazanan: 'Diocletianus', kuvvetler: 'Sekiz ay süren kuşatma.',
      sonuc: 'Şehrin bir kısmı yıkıldı; isyan bastırıldı.' },
    { id: 'arapfethi', tur: 'savas', ad: 'Arapların Mısır\'ı fethi', y: -640, ll: [30.07, 31.28], onem: 5, wiki: 'Muslim conquest of Egypt',
      taraflar: ['Raşidun Halifeliği (Amr ibn el-As)', 'Bizans İmparatorluğu'], kazanan: 'Raşidun Halifeliği', kuvvetler: 'Arap ordusu ~15.000; Bizans kuvvetleri daha kalabalık ama dağınık.',
      sonuc: 'Mısır İslam dünyasına katıldı; Fustat kuruldu. Ülke yavaş yavaş Arapça konuşan bir ülkeye dönüştü.' },
    { id: 'dimyat', tur: 'savas', ad: '5. Haçlı Seferi: Dimyat', y: -1219, ll: [31.42, 31.81], onem: 3, wiki: 'Siege of Damietta (1218–1219)',
      taraflar: ['Haçlılar', 'Eyyubiler (el-Kâmil)'], kazanan: 'Eyyubiler (sonunda)', kuvvetler: 'On binlerce Haçlı askeri.',
      sonuc: 'Haçlılar Dimyat\'ı aldı ama Kahire\'ye yürürken Nil taşkınına yakalanıp 1221\'de geri çekildi.' },
    { id: 'mansure', tur: 'savas', ad: 'Mansure Savaşı', y: -1250, ll: [31.04, 31.38], onem: 4, wiki: 'Battle of Al Mansurah',
      taraflar: ['Fransa kralı IX. Louis (7. Haçlı Seferi)', 'Eyyubiler ve Memlükler (Baybars)'], kazanan: 'Memlükler', kuvvetler: '~15.000-20.000 Haçlı.',
      sonuc: 'IX. Louis esir düştü; zafer, Memlüklerin iktidara gelmesinin yolunu açtı.' },
    { id: 'ayncalut', tur: 'savas', ad: 'Ayn Calut Savaşı', y: -1260, ll: [32.55, 35.36], onem: 5, wiki: 'Battle of Ain Jalut',
      taraflar: ['Memlükler (Kutuz ve Baybars)', 'Moğollar (İlhanlılar)'], kazanan: 'Memlükler', kuvvetler: 'Her iki yanda ~10.000-20.000 süvari.',
      sonuc: 'Moğolların batıya ilerleyişi durdu; Mısır ve İslam dünyasının batısı Moğol yıkımından kurtuldu.' },
    { id: 'ridaniye', tur: 'savas', ad: 'Mercidabık ve Ridaniye', y: -1517, ll: [30.07, 31.33], onem: 4, wiki: 'Battle of Ridaniya',
      taraflar: ['Osmanlı (Yavuz Sultan Selim)', 'Memlük Sultanlığı (Tomanbay)'], kazanan: 'Osmanlı', kuvvetler: 'Osmanlı topçusu ve yeniçeriler, Memlük süvarisine karşı.',
      sonuc: 'Mısır Osmanlı eyaleti oldu; halifelik Osmanlı\'ya geçti.' },
    { id: 'piramitler', tur: 'savas', ad: 'Piramitler Savaşı', y: -1798, ll: [30.07, 31.18], onem: 4, wiki: 'Battle of the Pyramids',
      taraflar: ['Fransa (Napolyon)', 'Memlükler (Murad Bey)'], kazanan: 'Fransa', kuvvetler: '~25.000 Fransız; ~6.000 Memlük süvarisi ve ~15.000 piyade.',
      sonuc: 'Napolyon Kahire\'ye girdi; ama iki hafta sonra donanması Ebukır\'da batırıldı.' },
    { id: 'telelkebir', tur: 'savas', ad: 'Tel el-Kebir Savaşı', y: -1882, ll: [30.55, 31.85], onem: 3, wiki: 'Battle of Tel el-Kebir',
      taraflar: ['İngiltere', 'Urabi Paşa\'nın Mısır ordusu'], kazanan: 'İngiltere', kuvvetler: '~13.000 İngiliz; ~20.000 Mısırlı.',
      sonuc: 'İngilizler Kahire\'yi aldı; 70 yıl sürecek işgal başladı.' },
    { id: 'alamein', tur: 'savas', ad: 'El Alamein Savaşı', y: -1942, ll: [30.83, 28.95], onem: 5, wiki: 'Second Battle of El Alamein',
      taraflar: ['Müttefikler (Montgomery)', 'Almanya ve İtalya (Rommel)'], kazanan: 'Müttefikler', kuvvetler: '~195.000 Müttefik; ~116.000 Mihver askeri, yüzlerce tank.',
      sonuc: 'Mihver kuvvetlerinin Süveyş Kanalı\'na ilerleyişi durdu; Kuzey Afrika savaşının dönüm noktası.' },
    { id: 'suveyskrizi', tur: 'savas', ad: 'Süveyş Krizi', y: -1956, ll: [31.26, 32.30], onem: 4, wiki: 'Suez Crisis',
      taraflar: ['İngiltere, Fransa ve İsrail', 'Mısır'], kazanan: 'Siyasi olarak Mısır', kuvvetler: 'İngiliz-Fransız çıkarması Port Said\'e.',
      sonuc: 'ABD ve SSCB\'nin baskısıyla saldıranlar çekildi; Nasır Arap dünyasının kahramanı oldu.' },
    { id: 'altigun', tur: 'savas', ad: 'Altı Gün Savaşı', y: -1967, ll: [30.0, 33.5], onem: 4, wiki: 'Six-Day War',
      taraflar: ['İsrail', 'Mısır, Suriye, Ürdün'], kazanan: 'İsrail', kuvvetler: 'Altı gün süren hava ve kara savaşı.',
      sonuc: 'Mısır Sina Yarımadası\'nı kaybetti; kanal 1975\'e kadar kapalı kaldı.' },
    { id: 'ekim1973', tur: 'savas', ad: 'Ekim (Yom Kippur) Savaşı', y: -1973, ll: [30.45, 32.35], onem: 4, wiki: 'Yom Kippur War',
      taraflar: ['Mısır ve Suriye', 'İsrail'], kazanan: 'Askerî olarak belirsiz', kuvvetler: 'Mısır ordusu Süveyş Kanalı\'nı geçti.',
      sonuc: 'Barış görüşmelerinin yolunu açtı; 1979 antlaşmasıyla Sina Mısır\'a döndü.' },
    // antlaşmalar
    { id: 'iskenderiyeantl', tur: 'antlasma', ad: 'İskenderiye antlaşması', y: -641, ll: [31.2, 29.92], onem: 3, wiki: 'Treaty of Alexandria (641)',
      taraflar: ['Amr ibn el-As', 'Patrik Kyros (Bizans)'], sonuc: 'İskenderiye savaşmadan teslim edildi; Bizans askerleri gemilerle ayrıldı.' },
    { id: 'londra1840', tur: 'antlasma', ad: 'Londra Antlaşması', y: -1840, ll: [51.5, -0.12], onem: 3, wiki: 'Convention of London (1840)',
      taraflar: ['İngiltere, Avusturya, Prusya, Rusya, Osmanlı', 'Mehmed Ali Paşa'], sonuc: 'Mehmed Ali Suriye\'den çekildi; karşılığında Mısır valiliği ailesine kalıtsal olarak verildi.' },
    { id: 'campdavid', tur: 'antlasma', ad: 'Camp David ve Mısır-İsrail barışı', y: -1979, ll: [39.65, -77.46], onem: 4, wiki: 'Egypt–Israel peace treaty',
      taraflar: ['Mısır (Sedat)', 'İsrail (Begin)'], sonuc: 'Sina 1982\'ye kadar Mısır\'a iade edildi; Mısır İsrail\'i tanıyan ilk Arap ülkesi oldu.' },
    // afetler
    { id: 'girit365', tur: 'afet', alt: 'tsunami', ad: '365 Girit depremi ve tsunamisi', y: -365, ll: [35.0, 23.5], onem: 3, wiki: '365 Crete earthquake',
      ozet: 'Girit açıklarındaki dev deprem tsunami yarattı; İskenderiye\'de gemiler evlerin çatılarına savruldu.' },
    { id: 'justinianveba', tur: 'afet', alt: 'salgin', ad: 'Justinianus vebası', y: -541, ll: [31.04, 32.55], onem: 5, wiki: 'Plague of Justinian',
      ozet: 'Pelusium\'da başlayıp bütün Akdeniz\'e yayılan veba; milyonlarca kişi öldü.' },
    { id: 'kitlik1065', tur: 'afet', alt: 'kuraklik', ad: 'Büyük kıtlık (Şiddet-i Müstansıriye)', y: -1068, ll: [30.04, 31.24], onem: 3, wiki: 'Fatimid Caliphate',
      ozet: 'Nil yedi yıl yeterince yükselmedi (1065-1072); Kahire\'de korkunç açlık yaşandı.' },
    { id: 'deprem1303', tur: 'afet', alt: 'deprem', ad: '1303 Girit depremi', y: -1303, ll: [35.2, 27.0], onem: 3, wiki: '1303 Crete earthquake',
      ozet: 'İskenderiye\'yi vuran deprem ve tsunami; Pharos Feneri büyük ölçüde yıkıldı.' },
    { id: 'karaolum', tur: 'afet', alt: 'salgin', ad: 'Kara Ölüm (veba)', y: -1348, ll: [30.04, 31.24], onem: 5, wiki: 'Black Death in the Middle East',
      ozet: 'Mısır nüfusunun yaklaşık üçte biri öldü; Kahire\'de günde binlerce kişi.' },
    { id: 'kahiredeprem', tur: 'afet', alt: 'deprem', ad: '1992 Kahire depremi', y: -1992, ll: [29.77, 31.07], onem: 2, wiki: '1992 Cairo earthquake',
      ozet: '5,8 büyüklüğündeki deprem 500\'den fazla kişinin ölümüne ve tarihî binalarda hasara yol açtı.' },
    // önemli olaylar
    { id: 'kahirekurulus', tur: 'olay', ad: 'Kahire kuruldu', y: -969, ll: [30.046, 31.262], onem: 4, wiki: 'Cairo',
      ozet: 'Fatımi komutan Cevher yeni başkenti kurdu; bir yıl sonra Ezher Camii yapıldı.' },
    { id: 'champollion', tur: 'olay', ad: 'Hiyeroglifler çözüldü', y: -1822, ll: [48.85, 2.35], onem: 4, wiki: 'Jean-François Champollion',
      ozet: 'Champollion, Rosetta Taşı\'nı kullanarak 1.400 yıldır okunamayan hiyeroglifleri çözdü.' },
    { id: 'suveyskanali', tur: 'olay', ad: 'Süveyş Kanalı açıldı', y: -1869, ll: [30.6, 32.33], onem: 5, wiki: 'Suez Canal',
      ozet: 'Akdeniz ile Kızıldeniz birleşti; Avrupa ile Asya arasındaki deniz yolu binlerce km kısaldı.' },
    { id: 'tutankamonbulundu', tur: 'olay', ad: 'Tutankamon\'un mezarı bulundu', y: -1922, ll: [25.7402, 32.6014], onem: 4, wiki: 'KV62',
      ozet: 'Howard Carter neredeyse el değmemiş bir firavun mezarı buldu; dünyada "Mısır çılgınlığı" başladı.' },
    { id: 'asuan', tur: 'olay', ad: 'Asuan Yüksek Barajı', y: -1970, ll: [23.97, 32.88], onem: 4, wiki: 'Aswan Dam',
      ozet: 'Nil\'in binlerce yıllık yıllık taşkını sona erdi; Nasır Gölü oluştu.' },
    { id: 'tahrir', tur: 'olay', ad: 'Tahrir: 25 Ocak devrimi', y: -2011, ll: [30.0444, 31.2357], onem: 4, wiki: 'Egyptian revolution of 2011',
      ozet: 'Milyonlarca kişi sokaklara çıktı; 30 yıllık Mübarek dönemi sona erdi.' },
    { id: 'gemacilis', tur: 'olay', ad: 'Büyük Mısır Müzesi açıldı', y: -2025, ll: [29.9946, 31.1196], onem: 3, wiki: 'Grand Egyptian Museum',
      ozet: 'Tutankamon\'un bütün hazineleri piramitlerin yanında, dünyanın en büyük arkeoloji müzesinde.' }
  );
})();
