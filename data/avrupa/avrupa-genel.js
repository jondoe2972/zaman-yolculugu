// Avrupa: ortak veriler (küre konumları, Vikipedi, şehirler, simgeler, nehirler, gökyüzü), sınırlar, olaylar, ansiklopedi.
// Motorun okuduğu ortak nesne window.MISIR adını taşır (tarihsel ad: "bölge verisi").
(() => {
  window.MISIR = {
    coords: {
      stonehenge: [51.1789, -1.8262], knossos: [35.2981, 25.1631], miken: [37.7308, 22.7561], delfi: [38.4824, 22.501], parthenon: [37.9715, 23.7267], atinatiyatro: [37.9703, 23.7278], atina: [37.98, 23.73],
      kolezyum: [41.8902, 12.4922], pantheon: [41.8986, 12.4769], pontdugard: [43.9475, 4.5354], hadrianusduvari: [55.0, -2.3], pompeii: [40.7497, 14.4869],
      kurtuba: [37.8789, -4.7794], aachen: [50.7747, 6.0839], notredame: [48.853, 2.3499], montsaintmichel: [48.6361, -1.5115], koln: [50.9413, 6.9583], londrakulesi: [51.5081, -0.0759],
      floransa: [43.7731, 11.256], aziz_petrus: [41.9022, 12.4539], versay: [48.8049, 2.1204], kremlin: [55.752, 37.6175],
      eyfel: [48.8584, 2.2945], bigben: [51.5007, -0.1246], brandenburg: [52.5163, 13.3777], paris: [48.8566, 2.3522], londra: [51.5074, -0.1278],
      berlinduvari: [52.5075, 13.39], atomium: [50.8949, 4.3415], abparlamentosu: [48.5973, 7.7683]
    },
    wiki: {
      stonehenge: 'Stonehenge', knossos: 'Knossos', miken: 'Mycenae', delfi: 'Delphi', parthenon: 'Parthenon', atinatiyatro: 'Theatre of Dionysus', atina: 'Classical Athens',
      kolezyum: 'Colosseum', pantheon: 'Pantheon, Rome', pontdugard: 'Pont du Gard', hadrianusduvari: "Hadrian's Wall", pompeii: 'Pompeii',
      kurtuba: 'Mosque–Cathedral of Córdoba', aachen: 'Aachen Cathedral', notredame: 'Notre-Dame de Paris', montsaintmichel: 'Mont-Saint-Michel', koln: 'Cologne Cathedral', londrakulesi: 'Tower of London',
      floransa: 'Florence Cathedral', aziz_petrus: "St. Peter's Basilica", versay: 'Palace of Versailles', kremlin: 'Moscow Kremlin',
      eyfel: 'Eiffel Tower', bigben: 'Palace of Westminster', brandenburg: 'Brandenburg Gate', paris: 'Haussmann\'s renovation of Paris', londra: 'London',
      berlinduvari: 'Berlin Wall', atomium: 'Atomium', abparlamentosu: 'European Parliament'
    },
    bilgi: {}, alt: {},
    kureAdlari: [[57, -12, 'ATLAS OKYANUSU', 'deniz', 2.0], [37.5, 5, 'AKDENİZ', 'deniz', 2.0], [56, 3, 'KUZEY DENİZİ', 'deniz', 2.6], [58.5, 19.5, 'BALTIK DENİZİ', 'deniz', 2.8], [43.4, 34.5, 'KARADENİZ', 'deniz', 2.4],
      [50, 10, 'AVRUPA', 'misir', 2.0], [40.2, -3.7, 'İBERYA', 'bolge', 3.2], [43.2, 12.0, 'İTALYA', 'bolge', 3.2], [46.5, 2.5, 'GALYA · FRANSA', 'bolge', 3.4], [52.5, -1.5, 'BRİTANYA', 'bolge', 3.4], [51.5, 10.5, 'GERMANİA', 'bolge', 3.6],
      [39.2, 22, 'YUNANİSTAN', 'bolge', 3.4], [44, 20.5, 'BALKANLAR', 'bolge', 3.6], [61.5, 14, 'İSKANDİNAVYA', 'bolge', 3], [54, 33, 'RUSYA', 'bolge', 3], [46.5, 9.5, 'ALPLER', 'kucuk', 4.5],
      [50.2, 7.7, 'Ren', 'nehir', 5], [47.8, 17.5, 'Tuna', 'nehir', 5], [48.95, 2.0, 'Sen', 'nehir', 7], [51.48, 0.3, 'Thames', 'nehir', 7], [48.5, 44.4, 'Volga', 'nehir', 5]],
    sehirler: [
      { ad: 'Knossos', ll: [35.2981, 25.1631], from: 2000, to: 1100, b: [[1900, 1450]], not: 'Minos uygarlığının saray kenti.' },
      { ad: 'Miken', ll: [37.7308, 22.7561], from: 1600, to: 1100, b: [[1450, 1200]], not: 'Agamemnon\'un kenti.' },
      { ad: 'Atina', ll: [37.9838, 23.7275], from: 1400, to: -2026, b: [[508, 404], [-1834, -2026]], not: 'Demokrasinin doğduğu kent; bugün Yunanistan başkenti.' },
      { ad: 'Sparta', ll: [37.0755, 22.4303], from: 900, to: -400, not: 'Savaşçı şehir devleti.' },
      { ad: 'Pella', ll: [40.7597, 22.5244], from: 400, to: 168, b: [[400, 168]], not: 'Makedonya başkenti; İskender\'in doğduğu yer.' },
      { ad: 'Roma', ll: [41.9028, 12.4964], from: 753, to: -2026, b: [[753, -330], [-1871, -2026]], not: 'Roma İmparatorluğu\'nun ve bugün İtalya\'nın başkenti.' },
      { ad: 'Massalia (Marsilya)', ll: [43.2965, 5.3698], from: 600, to: -2026, not: 'Fokaialıların kurduğu koloni.' },
      { ad: 'Kartaca', ll: [36.8528, 10.3233], from: 814, to: -698, not: 'Roma\'nın büyük rakibi.' },
      { ad: 'Londra (Londinium)', ll: [51.5074, -0.1278], from: -47, to: -2026, b: [[-1066, -2026]], not: 'İngiltere ve Birleşik Krallık başkenti.' },
      { ad: 'Paris (Lutetia)', ll: [48.8566, 2.3522], from: 250, to: -2026, b: [[-987, -2026]], not: 'Fransa\'nın başkenti.' },
      { ad: 'Kurtuba (Córdoba)', ll: [37.8882, -4.7794], from: 169, to: -2026, b: [[-756, -1031]], not: 'Endülüs Emevî başkenti.' },
      { ad: 'Aachen', ll: [50.7753, 6.0839], from: -100, to: -2026, b: [[-794, -814]], not: 'Şarlman\'ın başkenti.' },
      { ad: 'Ravenna', ll: [44.4184, 12.2035], from: 200, to: -2026, b: [[-402, -540]], not: 'Batı Roma\'nın son başkenti.' },
      { ad: 'Venedik', ll: [45.4408, 12.3155], from: -697, to: -2026, b: [[-697, -1797]], not: 'Deniz cumhuriyeti.' },
      { ad: 'Floransa', ll: [43.7696, 11.2558], from: 59, to: -2026, not: 'Rönesans\'ın doğduğu kent.' },
      { ad: 'Lizbon', ll: [38.7223, -9.1393], from: 1200, to: -2026, b: [[-1255, -2026]], not: 'Keşifler çağının limanı.' },
      { ad: 'Madrid', ll: [40.4168, -3.7038], from: -865, to: -2026, b: [[-1561, -2026]], not: 'İspanya\'nın başkenti.' },
      { ad: 'Amsterdam', ll: [52.3676, 4.9041], from: -1275, to: -2026, not: 'İlk borsanın kenti.' },
      { ad: 'Viyana (Vindobona)', ll: [48.2082, 16.3738], from: 15, to: -2026, b: [[-1440, -2026]], not: 'Habsburgların başkenti.' },
      { ad: 'Berlin', ll: [52.52, 13.405], from: -1237, to: -2026, b: [[-1701, -2026]], not: 'Prusya ve Almanya başkenti.' },
      { ad: 'Moskova', ll: [55.7558, 37.6173], from: -1147, to: -2026, b: [[-1480, -1712], [-1918, -2026]], not: 'Rusya\'nın başkenti.' },
      { ad: 'St. Petersburg', ll: [59.9311, 30.3609], from: -1703, to: -2026, b: [[-1712, -1918]], not: 'Büyük Petro\'nun kenti.' },
      { ad: 'Kiev', ll: [50.4501, 30.5234], from: -482, to: -2026, b: [[-882, -1240]], not: 'Kiev Rus\'un başkenti; bugün Ukrayna başkenti.' },
      { ad: 'Brüksel', ll: [50.8503, 4.3517], from: -979, to: -2026, b: [[-1958, -2026]], not: 'AB kurumlarının merkezi.' },
      { ad: 'Prag', ll: [50.0755, 14.4378], from: -880, to: -2026, not: 'Bohemya ve Kutsal Roma\'nın kenti.' }
    ],
    nil: { ikon: '🌊', title: 'Avrupa\'nın nehirleri', sub: 'Tuna, Ren, Volga, Sen, Thames, Tiber', foto: 'Danube', tabs: [
      { ad: 'Genel', html: '<table class="tech"><tr><th>Volga</th><td>3.530 km: Avrupa\'nın en uzun nehri (Rusya).</td></tr><tr><th>Tuna</th><td>2.850 km; 10 ülkeden geçer, 4 başkent (Viyana, Bratislava, Budapeşte, Belgrad).</td></tr><tr><th>Ren</th><td>1.230 km; İsviçre\'den Kuzey Denizi\'ne; Roma\'nın sınırı.</td></tr><tr><th>Sen</th><td>777 km; Paris.</td></tr><tr><th>Thames</th><td>346 km; Londra.</td></tr><tr><th>Tiber</th><td>406 km; Roma.</td></tr></table>' },
      { ad: 'Tarihteki önemi', html: '<p>Ren ve Tuna yüzyıllarca Roma İmparatorluğu\'nun sınırıydı ("limes"). Vikingler nehirlerden içeri girerek Paris\'e ve Kiev\'e ulaştı. Sanayi Devrimi\'nde kanallar ve nehir gemileri kömür taşıdı.</p>' }] },
    gokyuzu: {
      gunes: { ikon: '☀️', title: 'Güneş · Avrupa inançlarında', sub: 'Stonehenge\'den Helios\'a', tabs: [{ ad: '☀️ Güneş', html: '<ul class="hap"><li><b>Stonehenge:</b> yaz gündönümünde güneş Topuk Taşı\'nın üstünden doğar.</li><li><b>Yunanlar:</b> Helios dört atlı arabasıyla gökyüzünü geçer; Apollon ışığın tanrısı.</li><li><b>Romalılar:</b> Sol Invictus ("Yenilmez Güneş") bayramı 25 Aralık\'ta kutlanırdı.</li><li><b>Kopernik (1543):</b> Dünya değil, Güneş merkezdeydi.</li></ul>' }] },
      ay: { ikon: '🌙', title: 'Ay · Avrupa inançlarında', sub: 'Selene\'den Galileo\'ya', tabs: [{ ad: '🌙 Ay', html: '<ul class="hap"><li><b>Yunanlar:</b> Ay tanrıçası Selene; Artemis de ayla ilişkilendirildi.</li><li><b>Nebra Gök Diski</b> (Almanya, MÖ ~1600): ay, güneş ve Ülker\'i gösteren bilinen en eski gökyüzü tasviri.</li><li><b>Galileo (1609):</b> teleskopla Ay\'ın dağlarını ve kraterlerini gördü.</li></ul>' }] }
    },
    simgeler: [
      { id: 'a-stonehenge', ad: 'Stonehenge', ikon: '🪨', wiki: 'Stonehenge', git: { place: 'avrupa-yunan', y: 2500, id: 'stonehenge' }, ozet: 'Gündönümüne hizalı dev taş çember.', hap: ['MÖ ~3000-1500.', 'Taşlar 250 km öteden getirildi.'] },
      { id: 'a-parthenon', ad: 'Parthenon ve demokrasi', ikon: '🏛️', wiki: 'Parthenon', git: { place: 'avrupa-yunan', y: 435, id: 'parthenon' }, ozet: 'Klasik Yunan\'ın simgesi.', hap: ['MÖ 447-432.', 'Atina demokrasisi MÖ 508.'] },
      { id: 'a-kolezyum', ad: 'Kolezyum', ikon: '🏟️', wiki: 'Colosseum', git: { place: 'avrupa-roma', y: -80, id: 'kolezyum' }, ozet: 'Roma\'nın dev amfitiyatrosu.', hap: ['MS 80.', '50.000+ seyirci.'] },
      { id: 'a-notredame', ad: 'Gotik katedraller', ikon: '⛪', wiki: 'Notre-Dame de Paris', git: { place: 'avrupa-ortacag', y: -1250, id: 'notredame' }, ozet: 'Taştan gökyüzüne uzanan kiliseler.', hap: ['Uçan payandalar, vitraylar.', 'Notre-Dame 2024\'te yeniden açıldı.'] },
      { id: 'a-matbaa', ad: 'Gutenberg matbaası', ikon: '📖', wiki: 'Printing press', git: { place: 'avrupa-ortacag', y: -1450 }, ozet: 'Bilgiyi herkese açan icat.', hap: ['~1450, Mainz.', '50 yılda ~20 milyon kitap basıldı.'] },
      { id: 'a-ronesans', ad: 'Rönesans', ikon: '🎨', wiki: 'Renaissance', git: { place: 'avrupa-ronesans', y: -1504, id: 'floransa' }, ozet: 'Sanatın ve bilimin yeniden doğuşu.', hap: ['Leonardo, Michelangelo, Rafael.', 'Floransa, Roma, Venedik.'] },
      { id: 'a-versay', ad: 'Versay', ikon: '👑', wiki: 'Palace of Versailles', git: { place: 'avrupa-ronesans', y: -1700, id: 'versay' }, ozet: 'Güneş Kral\'ın sarayı.', hap: ['2.300 oda.', 'Aynalı Salon.'] },
      { id: 'a-eyfel', ad: 'Eyfel Kulesi', ikon: '🗼', wiki: 'Eiffel Tower', git: { place: 'avrupa-devrimler', y: -1889, id: 'eyfel' }, ozet: 'Sanayi çağının simgesi.', hap: ['1889.', '330 m.'] },
      { id: 'a-duvar', ad: 'Berlin Duvarı', ikon: '🧱', wiki: 'Berlin Wall', git: { place: 'avrupa-bugun', y: -1975, id: 'berlinduvari' }, ozet: 'Bölünmüş Avrupa\'nın simgesi.', hap: ['1961-1989.', '155 km.'] },
      { id: 'a-ab', ad: 'Avrupa Birliği', ikon: '🇪🇺', wiki: 'European Union', git: { place: 'avrupa-bugun', y: -2004, id: 'abparlamentosu' }, ozet: 'Savaştan birliğe.', hap: ['27 üye.', 'Euro: 2002.'] }
    ],
    bugun: '<p><b>Avrupa</b> bugün ~745 milyon nüfuslu, ~44-50 ülkeli (sayım ölçütüne göre) bir kıta. <b>Avrupa Birliği</b> 27 ülke ve ~450 milyon kişi.</p><ul class="hap"><li><b>En kalabalık şehirler:</b> İstanbul, Moskova, Londra, Paris (metropol), Madrid, Berlin.</li><li><b>UNESCO Dünya Mirası:</b> dünyadaki alanların yaklaşık yarısı Avrupa\'da.</li><li><b>Turizm:</b> Fransa dünyanın en çok ziyaret edilen ülkesi (~100 milyon).</li><li><b>Diller:</b> AB\'nin 24 resmi dili var.</li></ul>'
  };

  window.SEHIR_BILGI = {
    'Roma': { bugun: 'Roma, İtalya', kurulus: 'MÖ 753 (söylence: Romulus ve Remus)', wiki: 'Rome', onem: 'Bir imparatorluğun ve Katolik Kilisesi\'nin merkezi: "Ebedi Şehir".', ilginc: 'Trevi Çeşmesi\'ne her gün ~3.000 euro bozuk para atılır; para yoksullara bağışlanır.' },
    'Atina': { bugun: 'Atina, Yunanistan', kurulus: 'MÖ ~1400 (Miken kalesi)', wiki: 'Athens', onem: 'Demokrasinin, felsefenin ve tiyatronun beşiği.', ilginc: 'Sokrates hiç kitap yazmadı; onu öğrencisi Platon\'un yazdıklarından tanıyoruz.' },
    'Paris (Lutetia)': { bugun: 'Paris, Fransa', kurulus: 'MÖ ~250 (Parisii Kelt kabilesi)', wiki: 'Paris', onem: 'Fransa\'nın başkenti; sanat ve devrimlerin şehri.', ilginc: 'Paris\'in altında 300 km\'lik eski taş ocağı tünelleri ve 6 milyon kişinin kemiklerinin bulunduğu yeraltı mezarlığı var.' },
    'Londra (Londinium)': { bugun: 'Londra, Birleşik Krallık', kurulus: 'MS ~47 (Romalılar)', wiki: 'London', onem: '19. yüzyılda dünyanın en büyük şehri ve finans merkezi.', ilginc: '1666 Büyük Londra Yangını şehrin üçte ikisini yaktı ama yalnızca birkaç kişi öldü.' },
    'Berlin': { bugun: 'Berlin, Almanya', kurulus: '1237', wiki: 'Berlin', onem: 'Prusya ve Almanya başkenti; 28 yıl duvarla bölündü.', ilginc: 'Berlin\'de Venedik\'ten daha fazla köprü var (~960).' }
  };
  window.KULTUR = { tanrilar: [], olumler: [], roller: [], mumyalama: '', ic: { eslesme: {}, sahneler: {} }, bilim: { genel: '', cag: {} } };

  // ---------- sınırlar (yaklaşık) ----------
  const YUNAN = [[41.0, 20.5], [41.5, 23.5], [40.9, 26.0], [39.5, 23.0], [38.2, 24.3], [36.4, 23.0], [36.5, 21.7], [38.3, 21.0], [39.6, 19.9]];
  const ROMA = [[55.5, -5.0], [55.0, -1.5], [51.0, 2.0], [51.8, 5.0], [50.5, 7.5], [48.5, 8.5], [48.3, 13.5], [48.0, 17.0], [46.0, 19.0], [44.8, 22.5], [44.2, 28.7], [41.2, 29.0], [40.5, 26.0], [36.4, 23.0], [38.0, 15.6], [37.0, 15.3], [38.2, 12.4], [40.0, 9.6], [43.0, 6.0], [42.4, 3.2], [36.0, -5.6], [37.0, -9.0], [42.8, -9.3], [43.6, -8.0], [43.4, -1.8], [46.0, -1.2], [47.8, -4.4], [48.7, -1.6], [50.2, -5.6], [51.6, -5.3]];
  const KAROLENJ = [[53.8, 8.5], [54.5, 10.5], [52.8, 14.0], [50.0, 13.8], [48.5, 16.5], [46.5, 14.0], [44.0, 12.6], [42.0, 13.0], [41.8, 12.0], [43.4, 10.3], [44.2, 8.2], [43.2, 5.5], [42.4, 3.2], [41.4, 2.0], [42.7, -1.7], [43.4, -1.8], [46.0, -1.2], [47.8, -4.4], [48.7, -1.6], [50.9, 1.6], [51.8, 4.0], [53.4, 6.9]];
  const NAPOLYON = [[53.8, 8.5], [54.5, 10.5], [52.8, 14.0], [50.0, 13.8], [47.8, 13.0], [46.5, 14.0], [45.6, 13.8], [44.0, 15.5], [42.5, 18.5], [41.0, 17.0], [38.0, 15.6], [40.0, 9.6], [43.0, 6.0], [42.4, 3.2], [41.4, 2.0], [42.7, -1.7], [43.4, -1.8], [46.0, -1.2], [47.8, -4.4], [48.7, -1.6], [50.9, 1.6], [51.8, 4.0], [53.4, 6.9]];
  const AB = [[69.0, 20.5], [65.8, 24.0], [70.0, 28.5], [60.5, 27.8], [57.5, 27.7], [56.0, 28.2], [54.0, 23.5], [52.0, 23.6], [48.0, 22.8], [48.2, 26.6], [45.4, 29.7], [41.7, 28.0], [41.0, 26.3], [36.4, 23.0], [38.0, 15.6], [37.0, 15.3], [38.2, 12.4], [40.0, 9.6], [43.0, 6.0], [42.4, 3.2], [36.0, -5.6], [37.0, -9.0], [42.8, -9.3], [43.6, -8.0], [43.4, -1.8], [46.0, -1.2], [47.8, -4.4], [48.7, -1.6], [50.9, 1.6], [51.8, 4.0], [53.4, 6.9], [54.8, 8.6], [57.7, 10.6], [56.0, 12.7], [59.0, 11.1], [63.0, 12.0], [68.0, 17.0]];
  window.SINIRLAR = [
    { from: 1900, to: 1450, ad: 'Minos (Girit)', renk: '#2a7a9a', poly: [[[35.6, 23.5], [35.4, 26.3], [34.9, 26.2], [35.1, 23.6]]], etiket: [35.3, 24.9] },
    { from: 1450, to: 1200, ad: 'Miken dünyası', renk: '#9a6a2a', poly: [YUNAN], etiket: [38.6, 22.4] },
    { from: 800, to: 338, ad: 'Yunan şehir devletleri', renk: '#3a6aaa', poly: [YUNAN], etiket: [38.6, 22.4] },
    { from: 338, to: 146, ad: 'Makedonya ve Yunan birlikleri', renk: '#6a3aa0', poly: [YUNAN], etiket: [39.8, 22.4] },
    { from: 146, to: -395, ad: 'Roma İmparatorluğu', renk: '#a8443a', poly: [ROMA], etiket: [44.5, 6.0] },
    { from: -395, to: -476, ad: 'Batı Roma', renk: '#7a3a5a', poly: [ROMA], etiket: [44.5, 6.0] },
    { from: -800, to: -843, ad: 'Şarlman\'ın imparatorluğu', renk: '#3a5a8a', poly: [KAROLENJ], etiket: [48.5, 6.0] },
    { from: -962, to: -1806, ad: 'Kutsal Roma Germen İmparatorluğu', renk: '#6a6a3a', poly: [[[54.5, 10.5], [53.8, 14.5], [50.0, 15.5], [48.5, 16.8], [46.4, 14.0], [45.6, 13.8], [44.0, 12.6], [43.2, 10.2], [44.0, 7.5], [46.2, 6.0], [47.6, 7.5], [49.2, 6.0], [51.5, 4.0], [53.4, 6.9]]], etiket: [50.3, 10.0] },
    { from: -1806, to: -1814, ad: 'Napolyon\'un Fransa İmparatorluğu ve bağlıları', renk: '#2a4a9a', poly: [NAPOLYON], etiket: [47.0, 4.5] },
    { from: -1993, to: -2026, ad: 'Avrupa Birliği', renk: '#2a4aa0', poly: [AB], etiket: [49.5, 10.0] }
  ];

  window.OLAYLAR = [
    { id: 'marathon', tur: 'savas', ad: 'Marathon Savaşı', y: 490, ll: [38.12, 23.97], onem: 4, wiki: 'Battle of Marathon', taraflar: ['Atina ve Plataia', 'Pers (I. Darius)'], kazanan: 'Atina', kuvvetler: '~10.000 Atinalı; ~25.000 Pers.', sonuc: 'Haberi Atina\'ya koşarak götüren habercinin söylencesi "maraton" koşusunun kaynağı.' },
    { id: 'salamis', tur: 'savas', ad: 'Thermopylai ve Salamis', y: 480, ll: [37.95, 23.55], onem: 5, wiki: 'Battle of Salamis', taraflar: ['Yunan şehirleri (Themistokles, Leonidas)', 'Pers (Kserkses)'], kazanan: 'Yunanlar', sonuc: 'Pers donanması dar boğazda yenildi; Yunan bağımsızlığı korundu.' },
    { id: 'cannae', tur: 'savas', ad: 'Cannae Savaşı', y: 216, ll: [41.31, 16.13], onem: 4, wiki: 'Battle of Cannae', taraflar: ['Kartaca (Hannibal)', 'Roma'], kazanan: 'Kartaca', kuvvetler: '~50.000 Kartacalı; ~86.000 Romalı.', sonuc: 'Kuşatma taktiğinin klasik örneği; bugün askeri okullarda okutuluyor.' },
    { id: 'alesia', tur: 'savas', ad: 'Alesia Kuşatması', y: 52, ll: [47.54, 4.5], onem: 4, wiki: 'Battle of Alesia', taraflar: ['Roma (Sezar)', 'Galyalılar (Vercingetorix)'], kazanan: 'Roma', sonuc: 'Galya Roma\'nın oldu.' },
    { id: 'teutoburg', tur: 'savas', ad: 'Teutoburg Ormanı', y: -9, ll: [52.4, 8.13], onem: 4, wiki: 'Battle of the Teutoburg Forest', taraflar: ['Germen kabileleri (Arminius)', 'Roma (Varus)'], kazanan: 'Germenler', sonuc: 'Üç lejyon yok oldu; Roma Ren\'in doğusuna yerleşemedi.' },
    { id: 'katalaun', tur: 'savas', ad: 'Katalaun Ovaları', y: -451, ll: [48.96, 4.37], onem: 4, wiki: 'Battle of the Catalaunian Plains', taraflar: ['Roma ve Vizigotlar (Aetius)', 'Hunlar (Attila)'], kazanan: 'Roma ve müttefikleri', sonuc: 'Attila Galya\'dan çekildi.' },
    { id: 'poitiers', tur: 'savas', ad: 'Poitiers (Tours) Savaşı', y: -732, ll: [46.58, 0.34], onem: 4, wiki: 'Battle of Tours', taraflar: ['Franklar (Charles Martel)', 'Emevîler (Abdurrahman Gafiki)'], kazanan: 'Franklar', sonuc: 'Emevîlerin kuzeye ilerleyişi durdu.' },
    { id: 'hastings', tur: 'savas', ad: 'Hastings Savaşı', y: -1066, ll: [50.91, 0.49], onem: 4, wiki: 'Battle of Hastings', taraflar: ['Normanlar (William)', 'Anglo-Saksonlar (II. Harold)'], kazanan: 'Normanlar', sonuc: 'İngiltere Norman krallığı oldu; İngilizceye binlerce Fransızca kelime girdi.' },
    { id: 'azincourt', tur: 'savas', ad: 'Azincourt Savaşı', y: -1415, ll: [50.46, 2.14], onem: 3, wiki: 'Battle of Agincourt', taraflar: ['İngiltere (V. Henry)', 'Fransa'], kazanan: 'İngiltere', sonuc: 'Uzun yaylı okçular zırhlı şövalyeleri yendi.' },
    { id: 'armada', tur: 'savas', ad: 'İspanyol Armadası', y: -1588, ll: [50.5, -1.0], onem: 4, wiki: 'Spanish Armada', taraflar: ['İngiltere (I. Elizabeth)', 'İspanya (II. Felipe)'], kazanan: 'İngiltere', sonuc: 'İngiltere denizlerde yükselmeye başladı.' },
    { id: 'otuzyil', tur: 'savas', ad: 'Otuz Yıl Savaşları', y: -1618, ll: [50.08, 14.42], onem: 5, wiki: 'Thirty Years\' War', taraflar: ['Protestan devletler, İsveç, Fransa', 'Habsburglar ve Katolik birlik'], sonuc: '1648 Vestfalya Barışı: modern devlet egemenliği fikri.' },
    { id: 'austerlitz', tur: 'savas', ad: 'Austerlitz Savaşı', y: -1805, ll: [49.13, 16.76], onem: 4, wiki: 'Battle of Austerlitz', taraflar: ['Fransa (Napolyon)', 'Avusturya ve Rusya'], kazanan: 'Fransa', sonuc: 'Napolyon\'un en büyük zaferi: "Üç İmparator Savaşı".' },
    { id: 'waterloo', tur: 'savas', ad: 'Waterloo Savaşı', y: -1815, ll: [50.68, 4.41], onem: 5, wiki: 'Battle of Waterloo', taraflar: ['İngiltere (Wellington) ve Prusya (Blücher)', 'Fransa (Napolyon)'], kazanan: 'İngiltere ve Prusya', sonuc: 'Napolyon\'un sonu; Avrupa\'da 100 yıla yakın büyük güç dengesi.' },
    { id: 'verdun', tur: 'savas', ad: 'Verdun ve Somme', y: -1916, ll: [49.16, 5.38], onem: 5, wiki: 'Battle of Verdun', taraflar: ['Fransa ve İngiltere', 'Almanya'], sonuc: 'Birinci Dünya Savaşı\'nın en kanlı savaşları: ikisinde birlikte ~1,5 milyon kayıp.' },
    { id: 'stalingrad', tur: 'savas', ad: 'Stalingrad Savaşı', y: -1942, ll: [48.71, 44.51], onem: 5, wiki: 'Battle of Stalingrad', taraflar: ['Sovyetler Birliği', 'Almanya ve müttefikleri'], kazanan: 'Sovyetler Birliği', sonuc: 'İkinci Dünya Savaşı\'nın dönüm noktası; ~2 milyon kayıp.' },
    { id: 'normandiya', tur: 'savas', ad: 'Normandiya Çıkarması', y: -1944, ll: [49.37, -0.87], onem: 5, wiki: 'Normandy landings', taraflar: ['ABD, İngiltere, Kanada ve müttefikler', 'Almanya'], kazanan: 'Müttefikler', sonuc: 'Tarihin en büyük deniz çıkarması (6 Haziran 1944): Batı Avrupa\'nın kurtuluşu başladı.' },
    { id: 'vestfalya', tur: 'antlasma', ad: 'Vestfalya Barışı', y: -1648, ll: [51.96, 7.63], onem: 5, wiki: 'Peace of Westphalia', taraflar: ['Kutsal Roma İmparatorluğu', 'İsveç, Fransa ve Alman prensleri'], sonuc: 'Otuz Yıl Savaşları bitti; devletlerin egemenliği ilkesi.' },
    { id: 'viyanakongresi', tur: 'antlasma', ad: 'Viyana Kongresi', y: -1815, ll: [48.21, 16.37], onem: 4, wiki: 'Congress of Vienna', taraflar: ['Avusturya, Rusya, Prusya, İngiltere, Fransa'], sonuc: 'Napolyon sonrası Avrupa haritası.' },
    { id: 'versay1919', tur: 'antlasma', ad: 'Versay Antlaşması', y: -1919, ll: [48.8, 2.12], onem: 5, wiki: 'Treaty of Versailles', taraflar: ['İtilaf Devletleri', 'Almanya'], sonuc: 'Birinci Dünya Savaşı resmen bitti; ağır koşullar yeni savaşın tohumlarını ekti.' },
    { id: 'roma1957', tur: 'antlasma', ad: 'Roma Antlaşması', y: -1957, ll: [41.89, 12.48], onem: 4, wiki: 'Treaty of Rome', taraflar: ['Fransa, Batı Almanya, İtalya, Belçika, Hollanda, Lüksemburg'], sonuc: 'Avrupa Ekonomik Topluluğu kuruldu.' },
    { id: 'maastricht', tur: 'antlasma', ad: 'Maastricht Antlaşması', y: -1992, ll: [50.85, 5.69], onem: 4, wiki: 'Maastricht Treaty', taraflar: ['12 AET ülkesi'], sonuc: 'Avrupa Birliği ve euro yolu.' },
    { id: 'vezuv', tur: 'afet', alt: 'yanardag', ad: 'Vezüv patlaması', y: -79, ll: [40.82, 14.43], onem: 4, wiki: 'Eruption of Mount Vesuvius in 79 AD', sonuc: 'Pompeii ve Herculaneum küllerin altında kaldı.' },
    { id: 'karaolum', tur: 'afet', alt: 'salgin', ad: 'Kara Ölüm (veba)', y: -1347, ll: [43.3, 5.4], onem: 5, wiki: 'Black Death', sonuc: 'Avrupa nüfusunun üçte biri ile yarısı öldü.' },
    { id: 'lizbon1755', tur: 'afet', alt: 'deprem', ad: 'Lizbon depremi ve tsunamisi', y: -1755, ll: [38.72, -9.14], onem: 4, wiki: '1755 Lisbon earthquake', sonuc: '~30.000-50.000 ölü; Voltaire gibi düşünürleri derinden etkiledi.' },
    { id: 'cernobil', tur: 'afet', alt: 'kaza', ad: 'Çernobil nükleer kazası', y: -1986, ll: [51.39, 30.1], onem: 4, wiki: 'Chernobyl disaster', sonuc: 'Tarihin en büyük nükleer kazası; radyoaktif bulut Türkiye dahil Avrupa\'ya yayıldı.' },
    { id: 'olimpiyat', tur: 'olay', ad: 'İlk Olimpiyat Oyunları', y: 776, ll: [37.64, 21.63], onem: 4, wiki: 'Ancient Olympic Games', sonuc: 'Her 4 yılda bir; savaşlar oyunlar için durdurulurdu.' },
    { id: 'demokrasi', tur: 'olay', ad: 'Atina demokrasisi', y: 508, ll: [37.98, 23.72], onem: 5, wiki: 'Athenian democracy', sonuc: 'Kleisthenes reformları.' },
    { id: 'magnacarta', tur: 'olay', ad: 'Magna Carta', y: -1215, ll: [51.44, -0.56], onem: 4, wiki: 'Magna Carta', sonuc: 'Kralın da yasaya bağlı olduğu ilkesi.' },
    { id: 'gutenberg', tur: 'olay', ad: 'Gutenberg matbaası', y: -1450, ll: [50.0, 8.27], onem: 5, wiki: 'Printing press', sonuc: 'Kitaplar ucuzladı; Reform ve Bilim Devrimi hızlandı.' },
    { id: 'luther', tur: 'olay', ad: 'Luther\'in 95 tezi', y: -1517, ll: [51.87, 12.65], onem: 5, wiki: 'Ninety-five Theses', sonuc: 'Protestan Reformu başladı.' },
    { id: 'bastille', tur: 'olay', ad: 'Fransız İhtilali', y: -1789, ll: [48.85, 2.37], onem: 5, wiki: 'French Revolution', sonuc: 'İnsan ve Yurttaş Hakları Bildirgesi.' },
    { id: 'duvaryikildi', tur: 'olay', ad: 'Berlin Duvarı yıkıldı', y: -1989, ll: [52.52, 13.38], onem: 5, wiki: 'Fall of the Berlin Wall', sonuc: 'Soğuk Savaş\'ın sonu; Almanya birleşti.' }
  ];

  window.ULKE_SAYFA = window.ULKE_SAYFA || {};
  window.ULKE_SAYFA.avrupa = {
    id: 'avrupa', ad: 'Avrupa', ikon: '🏰', kw: ['avrupa', 'europe', 'roma', 'yunan', 'antik yunan', 'rönesans', 'orta çağ', 'fransa', 'ingiltere', 'almanya', 'italya', 'avrupa birliği'],
    altBaslik: 'MÖ ~3000 – bugün · demokrasiden Rönesans\'a, devrimlerden Avrupa Birliği\'ne', kapakWiki: 'Parthenon', kapakAd: 'Atina\'da Parthenon', merkez: [49.5, 12.0], merkezZ: 3.2,
    ozet: ['<b>Avrupa</b>, Avrasya\'nın batı ucundaki kıtadır; doğuda Ural Dağları, güneyde Akdeniz, batıda Atlas Okyanusu ile sınırlanır. Adı Yunan mitolojisinde Zeus\'un kaçırdığı Fenikeli prenses Europa\'dan gelir.',
      'Antik Yunan demokrasi, felsefe ve tiyatroyu; Roma hukuku, yolları ve Latinceyi; Orta Çağ katedralleri ve üniversiteleri; Rönesans sanatı ve Bilim Devrimi\'ni; modern çağ ise sanayi, devrimler ve iki dünya savaşını doğurdu. 1945\'ten sonra kıta Avrupa Birliği ile birleşmeye yöneldi.'],
    bilgiKutusu: [['Tarih', 'MÖ ~3000 (megalitler) – bugün'], ['Önemli başkentler', 'Atina, Roma, Konstantinopolis, Aachen, Paris, Londra, Madrid, Viyana, Berlin, Moskova, Brüksel'], ['Çağlar', 'Antik → Orta Çağ → Rönesans → Aydınlanma → Sanayi → Modern'], ['Nüfus', '~30 milyon (MÖ 146) → ~80 milyon (1300) → ~745 milyon (2026)'], ['Bugün', '~44-50 ülke; Avrupa Birliği 27 üye']],
    donemler: { 'avrupa-yunan': 'Stonehenge, Minos ve Miken, sonra demokrasi, felsefe ve Olimpiyatları doğuran Yunan şehirleri.', 'avrupa-roma': 'Akdeniz\'i birleştiren Roma: Sezar, Augustus, Kolezyum, Pantheon; 476\'da Batı Roma sona erdi.', 'avrupa-ortacag': 'Şarlman, Vikingler, Haçlılar, katedraller, üniversiteler ve Kara Ölüm.', 'avrupa-ronesans': 'Leonardo ve Michelangelo, matbaa, Kolomb, Luther, Galileo, Newton ve Versay.', 'avrupa-devrimler': 'Fransız İhtilali, Napolyon, Sanayi Devrimi, Eyfel ve iki dünya savaşı.', 'avrupa-bugun': 'Demir Perde, Berlin Duvarı ve Avrupa Birliği.' },
    kultur: [{ baslik: 'Diller', ikon: '🗣️', html: '<p>Latin dilleri (İtalyanca, Fransızca, İspanyolca, Portekizce, Rumence), Germen dilleri (Almanca, İngilizce, Hollandaca, İskandinav dilleri), Slav dilleri (Rusça, Lehçe, Çekçe…), Yunanca, Macarca, Fince, Türkçe ve diğerleri.</p>' }, { baslik: 'Din', ikon: '✝️', html: '<p>Yunan-Roma tanrıları; sonra Hristiyanlık (Katolik, Ortodoks, Protestan); Endülüs ve Balkanlarda İslam; Yahudi toplulukları.</p>' }],
    figurler: [
      { id: 'stonehenge', ad: 'Stonehenge', tur: 'yapı', wiki: 'Stonehenge', ll: [51.1789, -1.8262], z: 70, yapim: 'MÖ ~3000-1500', kim: 'Neolitik topluluklar', durum: 'ayakta', durumYazi: 'Ayakta.', nerede: 'İngiltere', metin: 'Gündönümüne hizalı taş çember.', git: { place: 'avrupa-yunan', y: 2500, id: 'stonehenge' } },
      { id: 'parthenon', ad: 'Parthenon', tur: 'yapı', wiki: 'Parthenon', ll: [37.9715, 23.7267], z: 80, yapim: 'MÖ 447-432', kim: 'Perikles, Fidias', durum: 'harabe', durumYazi: 'Restorasyon sürüyor.', nerede: 'Atina', metin: 'Klasik mimarinin simgesi.', git: { place: 'avrupa-yunan', y: 435, id: 'parthenon' } },
      { id: 'kolezyum', ad: 'Kolezyum', tur: 'yapı', wiki: 'Colosseum', ll: [41.8902, 12.4922], z: 80, yapim: 'MS 70-80', kim: 'Vespasianus, Titus', durum: 'harabe', durumYazi: 'Yarısı ayakta.', nerede: 'Roma', metin: 'Roma\'nın dev amfitiyatrosu.', git: { place: 'avrupa-roma', y: -80, id: 'kolezyum' } },
      { id: 'notredame', ad: 'Notre-Dame', tur: 'yapı', wiki: 'Notre-Dame de Paris', ll: [48.853, 2.3499], z: 80, yapim: '1163-1345', kim: 'Paris piskoposluğu', durum: 'ayakta', durumYazi: '2024\'te yeniden açıldı.', nerede: 'Paris', metin: 'Gotik katedral.', git: { place: 'avrupa-ortacag', y: -1250, id: 'notredame' } },
      { id: 'versay', ad: 'Versay Sarayı', tur: 'yapı', wiki: 'Palace of Versailles', ll: [48.8049, 2.1204], z: 70, yapim: '1661-1710', kim: 'XIV. Louis', durum: 'ayakta', durumYazi: 'Müze.', nerede: 'Versay', metin: 'Güneş Kral\'ın sarayı.', git: { place: 'avrupa-ronesans', y: -1700, id: 'versay' } },
      { id: 'eyfel', ad: 'Eyfel Kulesi', tur: 'yapı', wiki: 'Eiffel Tower', ll: [48.8584, 2.2945], z: 80, yapim: '1887-1889', kim: 'Gustave Eiffel', durum: 'ayakta', durumYazi: 'Ayakta.', nerede: 'Paris', metin: 'Paris\'in simgesi.', git: { place: 'avrupa-devrimler', y: -1889, id: 'eyfel' } }
    ],
    kisiler: [
      { ad: 'Homeros', wiki: 'Homer', yil: 'MÖ ~8. yy', ozet: 'İlyada ve Odysseia.', y: 750 }, { ad: 'Perikles', wiki: 'Pericles', yil: 'MÖ ~495-429', ozet: 'Atina\'nın altın çağı.', y: 440 },
      { ad: 'Sokrates', wiki: 'Socrates', yil: 'MÖ 470-399', ozet: 'Felsefenin babası.', y: 420 }, { ad: 'Aristoteles', wiki: 'Aristotle', yil: 'MÖ 384-322', ozet: 'İskender\'in hocası.', y: 340 },
      { ad: 'Büyük İskender', wiki: 'Alexander the Great', yil: 'MÖ 356-323', ozet: 'Makedon fatih.', y: 334 }, { ad: 'Julius Sezar', wiki: 'Julius Caesar', yil: 'MÖ 100-44', ozet: 'Roma diktatörü.', y: 49 },
      { ad: 'Augustus', wiki: 'Augustus', yil: 'MÖ 63 – MS 14', ozet: 'İlk Roma imparatoru.', y: 20 }, { ad: 'Şarlman', wiki: 'Charlemagne', yil: '~742-814', ozet: 'Avrupa\'nın babası.', y: -800 },
      { ad: 'Jeanne d\'Arc', wiki: 'Joan of Arc', yil: '~1412-1431', ozet: 'Orléans\'ın kurtarıcısı.', y: -1429 }, { ad: 'Leonardo da Vinci', wiki: 'Leonardo da Vinci', yil: '1452-1519', ozet: 'Ressam, mucit.', y: -1503 },
      { ad: 'Martin Luther', wiki: 'Martin Luther', yil: '1483-1546', ozet: 'Reform\'un başlatıcısı.', y: -1517 }, { ad: 'Galileo Galilei', wiki: 'Galileo Galilei', yil: '1564-1642', ozet: 'Teleskop ve deney.', y: -1610 },
      { ad: 'Isaac Newton', wiki: 'Isaac Newton', yil: '1643-1727', ozet: 'Çekim yasası.', y: -1687 }, { ad: 'Napolyon Bonapart', wiki: 'Napoleon', yil: '1769-1821', ozet: 'Fransız imparatoru.', y: -1805 },
      { ad: 'Marie Curie', wiki: 'Marie Curie', yil: '1867-1934', ozet: 'İki Nobel alan ilk kişi.', y: -1911 }, { ad: 'Albert Einstein', wiki: 'Albert Einstein', yil: '1879-1955', ozet: 'Görelilik kuramı.', y: -1915 }
    ],
    biliyorMuydunuz: ['"Avrupa" adı Zeus\'un kaçırdığı Fenikeli (bugünkü Lübnan) bir prensesten gelir.', 'Roma\'nın yolları o kadar sağlamdı ki bazıları 2.000 yıl sonra bile kullanılıyor.', 'Kara Ölüm\'den sonra işçi az kaldığı için ücretler yükseldi ve serflik zayıfladı.', 'Dünyanın en eski üniversitesi sayılan Bologna 1088\'de kuruldu.', 'World Wide Web 1989\'da Cenevre\'deki CERN\'de icat edildi.']
  };
})();
