// Anadolu: bölgenin ortak verileri (küre konumları, Vikipedi başlıkları, şehirler, simgeler, nehirler, gökyüzü)
// Motorun okuduğu ortak nesne window.MISIR adını taşır (tarihsel ad: "bölge verisi").
// Konumlar: [enlem, boylam]. Yıl: MÖ pozitif, MS negatif.
(() => {
  const M = window.MISIR = {
    coords: {
      gobeklitepe: [37.2233, 38.9224], catalhoyuk: [37.667, 32.828], arslantepe: [38.3818, 38.3611], alacahoyuk: [40.2347, 34.6956], truva: [39.9575, 26.2389],
      kanis: [38.8503, 35.6353], hattusa: [40.019, 34.615], aslanlikapi: [40.0156, 34.6094], yazilikaya: [40.0256, 34.6297], sfenkslikapi: [40.2357, 34.695],
      truva6: [39.9577, 26.2392], vankalesi: [38.502, 43.339], gordion: [39.6497, 31.9792], midastumulus: [39.6553, 31.9937], midassehri: [39.163, 30.635],
      sardes: [38.488, 28.04], alyattes: [38.572, 28.02], artemis: [37.9497, 27.3639], mozole: [37.038, 27.4241], milet: [37.53, 27.278],
      artemis2: [37.9499, 27.3643], efestiyatro: [37.941, 27.342], bergama: [39.132, 27.184], bergamatiyatro: [39.1312, 27.1826], nemrut: [37.981, 38.7408],
      augustustapinagi: [39.9446, 32.858], celsus: [37.9393, 27.3405], aspendos: [36.9389, 31.1722], surlar: [41.0128, 28.923], ayasofya: [41.0086, 28.9802],
      goreme: [38.64, 34.845], derinkuyu: [38.374, 34.735], alaeddin: [37.873, 32.493], sultanhani: [38.248, 33.547], divrigi: [39.371, 38.114],
      kizilkule: [36.539, 32.0], mevlana: [37.871, 32.5048], bursaulucami: [40.184, 29.062], rumelihisari: [41.0846, 29.0565], topkapi: [41.0115, 28.9834],
      suleymaniye: [41.0162, 28.9638], selimiye: [41.6781, 26.5594], sultanahmet: [41.0054, 28.9768], dolmabahce: [41.0392, 29.0004], ankara: [39.9334, 32.8597],
      anitkabir: [39.925, 32.8369], istanbul: [41.02, 28.95], bogazkoprusu: [41.045, 29.034], canakkale1915: [40.342, 26.64], ataturkbaraji: [37.483, 38.317], camlica: [41.027, 29.069]
    },
    wiki: {
      gobeklitepe: 'Göbekli Tepe', catalhoyuk: 'Çatalhöyük', arslantepe: 'Arslantepe', alacahoyuk: 'Alaca Höyük', truva: 'Troy', kanis: 'Kültepe', hattusa: 'Hattusa',
      aslanlikapi: 'Lion Gate, Hattusa', yazilikaya: 'Yazılıkaya', sfenkslikapi: 'Alaca Höyük', truva6: 'Troy', vankalesi: 'Van Fortress', gordion: 'Gordion',
      midastumulus: 'Midas Mound', midassehri: 'Midas Monument', sardes: 'Sardis', alyattes: 'Tomb of Alyattes', artemis: 'Temple of Artemis', mozole: 'Mausoleum at Halicarnassus',
      milet: 'Miletus', artemis2: 'Temple of Artemis', efestiyatro: 'Great Theatre of Ephesus', bergama: 'Pergamon', bergamatiyatro: 'Pergamon', nemrut: 'Mount Nemrut',
      augustustapinagi: 'Temple of Augustus and Rome (Ankara)', celsus: 'Library of Celsus', aspendos: 'Aspendos', surlar: 'Walls of Constantinople', ayasofya: 'Hagia Sophia',
      goreme: 'Göreme National Park', derinkuyu: 'Derinkuyu underground city', alaeddin: 'Alâeddin Mosque', sultanhani: 'Sultan Han', divrigi: 'Great Mosque and Hospital of Divriği',
      kizilkule: 'Kızıl Kule', mevlana: 'Mevlana Museum', bursaulucami: 'Grand Mosque of Bursa', rumelihisari: 'Rumelihisarı', topkapi: 'Topkapı Palace',
      suleymaniye: 'Süleymaniye Mosque', selimiye: 'Selimiye Mosque', sultanahmet: 'Blue Mosque', dolmabahce: 'Dolmabahçe Palace', ankara: 'Ankara', anitkabir: 'Anıtkabir',
      istanbul: 'Istanbul', bogazkoprusu: 'Bosphorus Bridge', canakkale1915: '1915 Çanakkale Bridge', ataturkbaraji: 'Atatürk Dam', camlica: 'Küçük Çamlıca TV Radio Tower'
    },
    bilgi: {},
    alt: {},
    // küre: Anadolu yakınlaşınca görünen coğrafi adlar [enlem, boylam, ad, tür, en küçük yakınlık]
    kureAdlari: [[43.2, 34.5, 'KARADENİZ', 'deniz', 2.2], [34.8, 31.5, 'AKDENİZ', 'deniz', 2.2], [38.8, 25.3, 'EGE DENİZİ', 'deniz', 2.8], [40.75, 28.2, 'Marmara', 'kucuk', 5],
      [39.2, 33.2, 'ANADOLU', 'misir', 2.6], [41.6, 27.2, 'TRAKYA', 'bolge', 3], [37.6, 40.6, 'MEZOPOTAMYA', 'bolge', 3.2], [38.6, 42.9, 'Van Gölü', 'kucuk', 5],
      [40.7, 35.3, 'Kızılırmak', 'nehir', 4], [38.9, 39.7, 'Fırat', 'nehir', 4], [37.3, 40.9, 'Dicle', 'nehir', 5], [38.6, 34.9, 'KAPADOKYA', 'bolge', 4.5], [37.2, 33.8, 'TOROSLAR', 'bolge', 4], [39.7, 44.3, 'Ağrı Dağı', 'kucuk', 6], [38.7, 30.2, 'FRİGYA', 'bolge', 5]],
    sehirler: [
      { ad: 'Çatalhöyük', ll: [37.667, 32.828], from: 7400, to: 5900, not: 'Dünyanın en eski büyük köy-kentlerinden.' },
      { ad: 'Arslantepe (Melid)', ll: [38.3818, 38.3611], from: 4000, to: 700, not: 'Erken yönetim merkezi, sonra Geç Hitit krallığı.' },
      { ad: 'Truva (Troia, İlion)', ll: [39.9575, 26.2389], from: 3000, to: -500, not: 'Boğaz\'ın girişindeki efsanevi kale.' },
      { ad: 'Kaniş (Neşa)', ll: [38.8503, 35.6353], from: 2000, to: 1650, b: [[1750, 1650]], not: 'Asurlu tüccarların pazarı; Anitta\'nın başkenti.' },
      { ad: 'Hattuşa', ll: [40.019, 34.615], from: 1650, to: 1180, b: [[1650, 1295], [1267, 1180]], not: 'Hitit İmparatorluğu\'nun başkenti.' },
      { ad: 'Karkamış', ll: [36.83, 38.01], from: 2500, to: 600, not: 'Fırat kıyısında Hitit genel valiliği, sonra Geç Hitit krallığı.' },
      { ad: 'Gordion', ll: [39.6497, 31.9792], from: 950, to: -300, b: [[950, 696]], not: 'Frig başkenti; Gordion düğümü.' },
      { ad: 'Tuşpa (Van)', ll: [38.502, 43.339], from: 840, to: -2026, b: [[840, 600]], not: 'Urartu başkenti; bugün Van.' },
      { ad: 'Sardes', ll: [38.488, 28.04], from: 680, to: -1402, b: [[680, 547]], not: 'Lidya başkenti; ilk sikkeler.' },
      { ad: 'Efes', ll: [37.9395, 27.341], from: 1050, to: -1400, not: 'Artemis\'in kenti; Roma\'nın Asya eyaletinin merkezi.' },
      { ad: 'Milet', ll: [37.53, 27.278], from: 1050, to: -1400, not: 'Felsefenin doğduğu kent.' },
      { ad: 'İzmir (Smyrna)', ll: [38.4192, 27.1287], from: 1000, to: -2026, not: 'Homeros\'un kenti sayılır; bugün Türkiye\'nin üçüncü büyük şehri.' },
      { ad: 'Halikarnas (Bodrum)', ll: [37.038, 27.4241], from: 1000, to: -2026, b: [[377, 334]], not: 'Mausolos\'un başkenti.' },
      { ad: 'Bergama (Pergamon)', ll: [39.12, 27.18], from: 300, to: -2026, b: [[281, 133]], not: 'Attalos krallığının başkenti.' },
      { ad: 'Antakya (Antiokheia)', ll: [36.2025, 36.1606], from: 300, to: -2026, not: 'Seleukos başkenti; Roma\'nın üçüncü büyük kenti.' },
      { ad: 'Ankara (Ankyra)', ll: [39.9334, 32.8597], from: 700, to: -2026, b: [[-1920, -2026]], not: 'Galatya\'nın merkezi; 1923\'ten beri başkent.' },
      { ad: 'Kayseri (Mazaka, Kaisareia)', ll: [38.7205, 35.4826], from: 300, to: -2026, not: 'Kapadokya krallığının başkenti.' },
      { ad: 'Konya (İkonion)', ll: [37.8746, 32.4932], from: 800, to: -2026, b: [[-1097, -1299]], not: 'Selçuklu başkenti; Mevlana\'nın şehri.' },
      { ad: 'İznik (Nikaia)', ll: [40.4292, 29.7211], from: 316, to: -2026, b: [[-1075, -1097]], not: 'İlk Ekümenik Konsil; ilk Selçuklu başkenti.' },
      { ad: 'İzmit (Nikomedia)', ll: [40.7654, 29.9408], from: 712, to: -2026, b: [[-286, -324]], not: 'Diocletianus\'un başkenti.' },
      { ad: 'Bursa (Prusa)', ll: [40.1885, 29.061], from: 200, to: -2026, b: [[-1326, -1365]], not: 'İlk Osmanlı başkenti.' },
      { ad: 'Edirne (Hadrianopolis)', ll: [41.6771, 26.5557], from: -125, to: -2026, b: [[-1365, -1453]], not: 'Osmanlı\'nın ikinci başkenti.' },
      { ad: 'İstanbul (Byzantion, Konstantinopolis)', ll: [41.0082, 28.9784], from: 667, to: -2026, b: [[-330, -1922]], not: 'Roma, Bizans ve Osmanlı başkenti.' },
      { ad: 'Trabzon (Trapezus)', ll: [41.0027, 39.7168], from: 756, to: -2026, not: 'Miletlilerin kurduğu Karadeniz limanı; 1204-1461 Trabzon Rum İmparatorluğu.' },
      { ad: 'Sinop (Sinope)', ll: [42.0231, 35.1531], from: 700, to: -2026, not: 'Diogenes\'in kenti; Pontus başkenti.' },
      { ad: 'Antalya (Attaleia)', ll: [36.8841, 30.7056], from: 150, to: -2026, not: 'Bergama kralı II. Attalos\'un kurduğu liman.' },
      { ad: 'Diyarbakır (Amida)', ll: [37.9144, 40.2306], from: 1000, to: -2026, not: 'Kara bazalt surlarıyla ünlü.' },
      { ad: 'Erzurum (Theodosiopolis)', ll: [39.9043, 41.2679], from: -400, to: -2026, not: 'Doğu Anadolu\'nun kapısı.' },
      { ad: 'Sivas (Sebasteia)', ll: [39.7477, 37.0179], from: 64, to: -2026, not: 'Selçuklu darüşşifası, 1919 Sivas Kongresi.' },
      { ad: 'Şanlıurfa (Edessa)', ll: [37.1591, 38.7969], from: 300, to: -2026, not: 'Peygamberler şehri; Balıklıgöl.' },
      { ad: 'Mardin', ll: [37.3212, 40.7245], from: 1000, to: -2026, not: 'Artuklu başkenti; taş evleri.' }
    ],
    nil: { ikon: '🌊', title: 'Anadolu\'nun nehirleri', sub: 'Kızılırmak, Fırat, Dicle, Sakarya, Menderes', foto: 'Kızılırmak', tabs: [
      { ad: 'Genel', html: `<table class="tech"><tr><th>Kızılırmak</th><td>1.355 km; tamamı Türkiye\'de akan en uzun nehir. Antik adı <b>Halys</b>: Lidya-Med ve Hitit dünyasının sınırı.</td></tr>
        <tr><th>Fırat</th><td>~2.800 km; Erzurum ve Erzincan dağlarından doğar, Suriye ve Irak\'tan geçip Basra Körfezi\'ne dökülür.</td></tr>
        <tr><th>Dicle</th><td>~1.850 km; Elazığ\'daki Hazar Gölü yakınından doğar. Fırat ile birlikte "Mezopotamya" (iki nehir arası) adını verir.</td></tr>
        <tr><th>Sakarya</th><td>824 km; Frig başkenti Gordion onun kıyısında. 1921 Sakarya Meydan Muharebesi.</td></tr>
        <tr><th>Büyük Menderes</th><td>548 km; kıvrımları o kadar çoktur ki İngilizcede "meander" (kıvrılmak) kelimesi bu nehirden gelir.</td></tr></table>` },
      { ad: 'Tarihteki önemi', html: `<p>Göbekli Tepe ve ilk tarım köyleri Fırat ile Dicle arasındaki "Bereketli Hilal"de kuruldu. Hititler Kızılırmak\'ın kıvrımı içinde yaşadılar: Hattuşa bu kıvrımın içindedir. Kroisos, "Halys\'ı geçersen büyük bir imparatorluk yıkılacak" kehanetine kanıp Kızılırmak\'ı geçti.</p>` },
      { ad: 'Bugün', html: `<p>Fırat ve Dicle üzerindeki barajlar (Keban, Karakaya, Atatürk, Ilısu) GAP\'ın parçası. Atatürk Barajı Türkiye\'nin en büyük barajıdır. Kızılırmak üzerinde Hirfanlı ve Kesikköprü barajları var; deltası (Bafra) kuş cennetidir.</p>` }
    ] },
    gokyuzu: {
      gunes: { ikon: '☀️', title: 'Güneş · Anadolu inançlarında', sub: 'Arinna\'nın Güneş Tanrıçası\'ndan Mithras\'a', tabs: [
        { ad: '☀️ Güneş', html: `<ul class="hap"><li><b>Hititler:</b> en büyük tanrıları <b>Arinna\'nın Güneş Tanrıçası</b> (Hatti dilinde Eştan). Kralın ve kraliçenin koruyucusuydu.</li><li><b>Alacahöyük güneş kursları</b> (MÖ ~2500): tunçtan, geyik ve boğa figürlü; bugün Ankara\'nın simgesi.</li><li><b>Kommagene:</b> Nemrut Dağı\'nda Apollon-Mithras-Helios tek tanrı olarak tasvir edildi; heykeller gün doğumuna ve gün batımına bakar.</li><li><b>Türkler:</b> Eski Türk inançlarında Gök Tanrı ve güneş; Göktürk otağlarının kapısı doğuya, güneşin doğduğu yöne açılırdı.</li></ul>` },
        { ad: '📅 Takvim', html: `<p>Hititler yeni yılı ilkbaharda Purulli bayramıyla kutlardı. Nevruz (21 Mart), Anadolu\'da baharın gelişi olarak bugün de kutlanır.</p>` }] },
      ay: { ikon: '🌙', title: 'Ay · Anadolu inançlarında', sub: 'Arma\'dan Men\'e, hilal sembolüne', tabs: [
        { ad: '🌙 Ay', html: `<ul class="hap"><li><b>Hititler ve Luviler:</b> ay tanrısı <b>Arma</b> (Kaşku).</li><li><b>Frigya ve Roma Anadolu\'su:</b> ay tanrısı <b>Men</b>, omzunda hilalle tasvir edildi; Antalya ve Pisidya\'da tapınakları vardı.</li><li><b>Byzantion:</b> şehrin eski simgesi hilal ve yıldızdı (söylenceye göre MÖ 340\'ta Makedonya kuşatmasında ayın ışığı şehri kurtardı).</li><li><b>Osmanlı ve Türkiye:</b> ay-yıldız 18. yüzyıldan itibaren sancakta; bugün Türk bayrağında.</li></ul>` }] }
    },
    simgeler: [
      { id: 's-gobekli', ad: 'Göbekli Tepe', ikon: '🗿', wiki: 'Göbekli Tepe', git: { place: 'anadolu-tarihoncesi', y: 9400, id: 'gobeklitepe' }, ozet: 'İnsanlığın bilinen en eski anıtsal yapısı.', hap: ['MÖ ~9600: Stonehenge\'den 6.000 yıl eski.', 'T biçimli 5-6 m\'lik dikili taşlar, hayvan kabartmaları.', 'Avcı-toplayıcılar yaptı: tarımdan önce.', 'UNESCO Dünya Mirası (2018).'] },
      { id: 's-catal', ad: 'Çatalhöyük', ikon: '🏘️', wiki: 'Çatalhöyük', git: { place: 'anadolu-tarihoncesi', y: 7000, id: 'catalhoyuk' }, ozet: 'Damdan girilen evleriyle ilk büyük köy-kent.', hap: ['MÖ 7400-6000, Konya Ovası.', '~5.000-8.000 kişi.', 'Duvar resimleri, boğa başları, bilinen en eski "harita".'] },
      { id: 's-hattusa', ad: 'Hattuşa ve Hititler', ikon: '🦁', wiki: 'Hattusa', git: { place: 'anadolu-hitit', y: 1270, id: 'hattusa' }, ozet: 'Anadolu\'nun ilk imparatorluğunun başkenti.', hap: ['Aslanlı Kapı, Yazılıkaya.', '30.000 kil tablet.', 'Kadeş Antlaşması (MÖ 1259): bilinen en eski barış antlaşması.'] },
      { id: 's-truva', ad: 'Truva', ikon: '🐴', wiki: 'Troy', git: { place: 'anadolu-hitit', y: 1200, id: 'truva6' }, ozet: 'Homeros\'un İlyada destanının kenti.', hap: ['9 katman, 3.500 yıl.', 'Schliemann 1871\'de kazdı.', 'Hititçe adı: Wiluşa.'] },
      { id: 's-sikke', ad: 'İlk sikke (Lidya)', ikon: '🪙', wiki: 'Lydian coinage', git: { place: 'anadolu-demir', y: 620, id: 'sardes' }, ozet: 'Para Sardes\'te icat edildi.', hap: ['MÖ ~620-600, elektron (altın-gümüş).', 'Aslan başı damgası.', 'Kroisos saf altın ve gümüş sikke bastırdı.'] },
      { id: 's-midas', ad: 'Kral Midas', ikon: '👑', wiki: 'Midas', git: { place: 'anadolu-demir', y: 720, id: 'midastumulus' }, ozet: 'Dokunduğu her şeyi altına çeviren Frig kralı.', hap: ['Gerçek bir kral: Asur kayıtlarında "Mita".', 'Söylenceye göre eşek kulakları vardı.', 'Gordion\'daki büyük tümülüs.'] },
      { id: 's-artemis', ad: 'Efes ve Artemis Tapınağı', ikon: '🏛️', wiki: 'Ephesus', git: { place: 'anadolu-demir', y: 450, id: 'artemis' }, ozet: 'Yedi Harika\'dan biri.', hap: ['127 sütun.', 'Herostratos MÖ 356\'da yaktı.', 'Celsus Kütüphanesi ve 25.000 kişilik tiyatro.'] },
      { id: 's-nemrut', ad: 'Nemrut Dağı', ikon: '⛰️', wiki: 'Mount Nemrut', git: { place: 'anadolu-roma', y: 40, id: 'nemrut' }, ozet: '2.134 m\'de dev tanrı heykelleri.', hap: ['Kommagene kralı I. Antiokhos (MÖ 1. yy).', 'Doğu ve batı terasları.', 'Gün doğumu ziyaretleriyle ünlü.'] },
      { id: 's-ayasofya', ad: 'Ayasofya', ikon: '⛪', wiki: 'Hagia Sophia', git: { place: 'anadolu-roma', y: -540, id: 'ayasofya' }, ozet: '1.000 yıl dünyanın en büyük kilisesi.', hap: ['MS 537, Justinianus.', '1453\'te cami, 1934\'te müze, 2020\'de yeniden cami.', 'Kubbe 55,6 m yükseklikte.'] },
      { id: 's-kapadokya', ad: 'Kapadokya', ikon: '🎈', wiki: 'Cappadocia', git: { place: 'anadolu-roma', y: -1000, id: 'goreme' }, ozet: 'Peribacaları, kaya kiliseleri, yer altı şehirleri.', hap: ['Erciyes, Hasandağı volkanlarının tüfü.', 'Derinkuyu: 85 m derinlik.', 'Balon turları.'] },
      { id: 's-mevlana', ad: 'Mevlana ve Konya', ikon: '🌀', wiki: 'Rumi', git: { place: 'anadolu-selcuklu', y: -1275, id: 'mevlana' }, ozet: 'Selçuklu başkenti ve sema.', hap: ['Mesnevi.', 'Mevlevi seması UNESCO Somut Olmayan Kültürel Miras.', 'Şeb-i Arus: 17 Aralık.'] },
      { id: 's-kervansaray', ad: 'Selçuklu kervansarayları', ikon: '🐪', wiki: 'Caravanserai', git: { place: 'anadolu-selcuklu', y: -1229, id: 'sultanhani' }, ozet: 'İpek Yolu\'nun güvenli konakları.', hap: ['Her 30-40 km\'de bir.', '3 gün ücretsiz konaklama.', 'Sultanhanı en büyüğü.'] },
      { id: 's-istanbul', ad: 'İstanbul\'un fethi', ikon: '⚔️', wiki: 'Fall of Constantinople', git: { place: 'anadolu-osmanli', y: -1453, id: 'rumelihisari' }, ozet: '29 Mayıs 1453.', hap: ['Fatih Sultan Mehmed 21 yaşında.', 'Gemiler karadan Haliç\'e.', 'Orta Çağ\'ın sonu sayılır.'] },
      { id: 's-sinan', ad: 'Mimar Sinan', ikon: '🕌', wiki: 'Mimar Sinan', git: { place: 'anadolu-osmanli', y: -1557, id: 'suleymaniye' }, ozet: '300\'den fazla yapının mimarı.', hap: ['Çıraklık: Şehzade, kalfalık: Süleymaniye, ustalık: Selimiye.', 'Yaklaşık 98 yıl yaşadı (1490?-1588).'] },
      { id: 's-ataturk', ad: 'Atatürk ve Cumhuriyet', ikon: '🇹🇷', wiki: 'Mustafa Kemal Atatürk', git: { place: 'anadolu-cumhuriyet', y: -1938, id: 'anitkabir' }, ozet: 'Türkiye Cumhuriyeti\'nin kurucusu.', hap: ['1881 Selanik - 1938 İstanbul.', 'Çanakkale, Kurtuluş Savaşı.', 'Cumhuriyet 29 Ekim 1923.'] },
      { id: 's-kopru', ad: 'Boğaz köprüleri', ikon: '🌉', wiki: 'Bosphorus Bridge', git: { place: 'anadolu-cumhuriyet', y: -1980, id: 'bogazkoprusu' }, ozet: 'Avrupa ile Asya\'yı birleştiren köprüler.', hap: ['1973, 1988, 2016 (Boğaz); 2022 (Çanakkale).', 'Marmaray tüneli (2013).'] }
    ],
    bugun: `<p><b>Türkiye Cumhuriyeti</b> bugün ~86 milyon nüfuslu, 81 ilden oluşan bir ülke. Başkent Ankara, en büyük şehir İstanbul (~15,7 milyon).</p>
      <ul class="hap"><li><b>UNESCO Dünya Mirası:</b> 21 alan (Göbekli Tepe, Çatalhöyük, Hattuşa, Truva, Efes, Bergama, Afrodisias, Nemrut, Kapadokya, İstanbul, Selimiye, Divriği, Gordion, Arslantepe…).</li>
      <li><b>Turizm:</b> 2024\'te ~60 milyon yabancı ziyaretçi; dünyada ilk beşte.</li>
      <li><b>Müzeler:</b> Ankara Anadolu Medeniyetleri Müzesi (Hitit ve Frig eserleri), İstanbul Arkeoloji Müzeleri (İskender Lahdi, Kadeş Antlaşması tableti), Topkapı Sarayı, Efes ve Troya müzeleri, Şanlıurfa Arkeoloji Müzesi.</li>
      <li><b>Diller:</b> Türkçe resmi dil; Kürtçe, Zazaca, Arapça, Lazca, Çerkesçe ve diğer diller de konuşulur.</li></ul>`
  };

  // Şehirler hakkında ayrıntı (küre ve sahne kartları)
  window.SEHIR_BILGI = {
    'Hattuşa': { bugun: 'Boğazkale, Çorum', kurulus: 'MÖ ~2000 (Hatti kenti Hattuş); MÖ ~1650 Hitit başkenti', wiki: 'Hattusa', onem: 'Hitit İmparatorluğu\'nun 450 yıllık başkenti; Tunç Çağı\'nın en büyük arşivlerinden biri.', ilginc: 'Anitta MÖ ~1750\'de şehri yıkıp "Kim burada yeniden kral olursa Fırtına Tanrısı onu çarpsın" diye lanetlemişti; Hititler yine de buraya yerleşti.' },
      'Kaniş (Neşa)': { bugun: 'Kültepe, Kayseri', kurulus: 'MÖ ~3000', wiki: 'Kültepe', onem: 'Anadolu\'da yazının ilk kullanıldığı yer.', ilginc: 'Tüccarların tabletleri zarflara konup mühürlenirdi: zarfı açmadan kimse okuyamazdı.' },
      'Gordion': { bugun: 'Yassıhöyük, Polatlı', kurulus: 'MÖ ~2500; Frig başkenti MÖ ~950', wiki: 'Gordion', onem: 'Frig Krallığı\'nın merkezi.', ilginc: 'İskender\'in kestiği düğüm, Gordias\'ın arabasının okunu boyunduruğa bağlıyordu.' },
      'Tuşpa (Van)': { bugun: 'Van', kurulus: 'MÖ ~840', wiki: 'Tushpa', onem: 'Urartu Krallığı\'nın başkenti.', ilginc: 'Van kedisinin bir gözü mavi, diğeri kehribar rengidir ve yüzmeyi sever.' },
      'Sardes': { bugun: 'Sart, Salihli (Manisa)', kurulus: 'MÖ ~1200', wiki: 'Sardis', onem: 'Lidya başkenti; Pers Kral Yolu\'nun batı ucu.', ilginc: 'Kroisos Kiros\'a yenilince odun yığınının üstünde yakılmak istendi; Solon\'un "ölmeden kimseye mutlu deme" sözünü hatırlayıp bağırınca Kiros onu bağışladı (Herodotos).' },
      'Efes': { bugun: 'Selçuk, İzmir', kurulus: 'MÖ ~1050 (İyon); daha önce Arzava başkenti Apaşa', wiki: 'Ephesus', onem: 'Roma\'nın Asya eyaletinin merkezi; 200.000 kişilik metropol.', ilginc: 'Kent, Küçük Menderes\'in getirdiği alüvyonlar limanı doldurunca birkaç kez yer değiştirdi.' },
      'İstanbul (Byzantion, Konstantinopolis)': { bugun: 'İstanbul', kurulus: 'MÖ ~667 (Megaralı Byzas)', wiki: 'Istanbul', onem: '1.600 yıl boyunca Roma, Bizans ve Osmanlı imparatorluklarının başkenti.', ilginc: 'Delfi kâhini Byzas\'a "körler ülkesinin karşısına kur" dedi: Kadıköy\'ü kuranlar, Sarayburnu\'nun güzelliğini göremeyecek kadar "kör" sayıldı.' },
      'Konya (İkonion)': { bugun: 'Konya', kurulus: 'MÖ ~3000 (Alaeddin Tepesi höyüğü)', wiki: 'Konya', onem: 'Selçuklu başkenti; Mevlana\'nın şehri.', ilginc: 'Söylenceye göre adı Perseus\'un Medusa\'nın başını gösteren ikonundan (eikon) gelir.' },
      'Ankara (Ankyra)': { bugun: 'Ankara', kurulus: 'MÖ ~8. yy (Frig); söylenceye göre Midas bir çapa (ankyra) buldu', wiki: 'Ankara', onem: '1923\'ten beri Türkiye\'nin başkenti.', ilginc: 'Kurtuluş Savaşı yıllarında Ankara\'nın nüfusu ~20.000\'di; meclis eski bir okul binasında toplandı.' },
      'Bursa (Prusa)': { bugun: 'Bursa', kurulus: 'MÖ ~200 (Bitinya kralı Prusias)', wiki: 'Bursa', onem: 'İlk Osmanlı başkenti; ipek ve kaplıcalar.', ilginc: 'Osman ve Orhan Gazi\'nin türbeleri Bursa\'dadır.' },
      'Edirne (Hadrianopolis)': { bugun: 'Edirne', kurulus: 'MS ~125 (Hadrianus)', wiki: 'Edirne', onem: '1365-1453 Osmanlı başkenti.', ilginc: 'Kırkpınar yağlı güreşleri 1346\'dan beri yapılıyor: dünyanın en eski düzenli spor organizasyonlarından.' }
  };

  // Kültür modülü (tanrılar, mumyalar, roller) Mısır\'a özel; Anadolu için boş tutulur.
  window.KULTUR = { tanrilar: [], olumler: [], roller: [], mumyalama: '', ic: { eslesme: {}, sahneler: {} }, bilim: { genel: '', cag: {} } };
})();
