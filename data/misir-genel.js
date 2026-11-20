// Mısır için bütün çağlara ortak bilgiler: Nil, simgeler, mezarlar ve keşifler,
// Vikipedi sayfa adları (fotoğraflar için), harita konumları, çağlar arasındaki yıllar.
// Kaynaklar: KAYNAKLAR.md. "Bugün" bilgileri 2025-2026 itibarıyla.
window.MISIR = {
  // Fotoğraflar İngilizce Vikipedi sayfalarındaki görsellerden (Wikimedia Commons) alınır.
  wiki: {
    djoser: 'Pyramid of Djoser', sekhemkhet: 'Buried Pyramid', khaba: 'Layer Pyramid', meidum1: 'Meidum', meidum2: 'Meidum', meidum: 'Meidum',
    bent: 'Bent Pyramid', red: 'Red Pyramid', khufu: 'Great Pyramid of Giza', kralice1: 'Giza pyramid complex', kralice2: 'Giza pyramid complex', kralice3: 'Giza pyramid complex', kralice: 'Giza pyramid complex',
    djedefre: 'Pyramid of Djedefre', khafre: 'Pyramid of Khafre', sphinx: 'Great Sphinx of Giza', menkaure: 'Pyramid of Menkaure', shepseskaf: 'Mastabat al-Fir\'aun',
    userkaf: 'Pyramid of Userkaf', gunes: 'Sun temple of Userkaf', sahure: 'Pyramid of Sahure', neferirkare: 'Pyramid of Neferirkare', mastabalar: 'Mastaba',
    memfis: 'Memphis, Egypt', tura: 'Tura, Egypt', liman: 'Diary of Merer', unas: 'Pyramid of Unas', pepi2: 'Pyramid of Pepi II',
    mentuhotep: 'Mortuary temple of Mentuhotep II', beyazsapel: 'White Chapel', amenemhat1: 'Pyramid of Amenemhat I', senusret1: 'Pyramid of Senusret I',
    heliopolis: 'Heliopolis (ancient Egypt)', senusret2: 'Pyramid of Senusret II', kahun: 'Lahun', senusret3: 'Pyramid of Senusret III', karapiramit: 'Black Pyramid',
    hawara: 'Hawara', labirent: 'Hawara', avaris: 'Avaris',
    karnak: 'Karnak', hatsepsutdikilitas: 'Karnak', hatsepsut: 'Mortuary Temple of Hatshepsut', krallar: 'Valley of the Kings', deyrelmedine: 'Deir el-Medina',
    memnon: 'Colossi of Memnon', luksor: 'Luxor Temple', amarna: 'Amarna', ramesseum: 'Ramesseum', abusimbel: 'Abu Simbel', piramses: 'Pi-Ramesses', medinethabu: 'Medinet Habu',
    taharka: 'Nuri', sais: 'Sais, Egypt', naukratis: 'Naukratis', iskenderiye: 'Alexandria', kutuphane: 'Library of Alexandria', pharos: 'Lighthouse of Alexandria',
    phile: 'Philae', edfu: 'Temple of Edfu', komombo: 'Kom Ombo', dendera: 'Dendera Temple complex',
    hierakonpolis: 'Hierakonpolis', nagada: 'Naqada', abidosmezarlar: 'Umm El Qa\'ab', sunet: 'Shunet El Zebib', buto: 'Buto', sakkaramastaba: 'Saqqara',
    nil: 'Nile'
  },

  // Bazı yapıların altında listelenen önemli mezarlar ve keşifler
  alt: {
    krallar: { baslik: 'Önemli mezarlar', items: [
      { kod: 'KV62', ad: 'Tutankamon', wiki: 'KV62', bulan: 'Howard Carter (destekçisi Lord Carnarvon)', yil: '4 Kasım 1922',
        icinden: '5.398 eser: 10 kg\'lık altın maske, 110 kg saf altından iç tabut, 6 savaş arabası, göktaşı demirinden hançer, tahtlar, mücevherler, yatağa benzer cenaze sedirleri.',
        not: 'Neredeyse hiç soyulmamış olarak bulunan tek kral mezarı. Carter mezara ilk baktığında "Harika şeyler görüyorum" dedi. Eserlerin tamamı bugün Gize\'deki Büyük Mısır Müzesi\'nde.' },
      { kod: 'KV17', ad: 'I. Seti', wiki: 'KV17', bulan: 'Giovanni Belzoni', yil: 'Ekim 1817',
        icinden: 'Kaymaktaşından (kalsit) yarı saydam lahit; vadinin en güzel boyalı kabartmaları.',
        not: '~137 m uzunluğunda. Lahit bugün Londra\'daki Sir John Soane Müzesi\'nde. Seti\'nin mumyası ise başka bir yerde, TT320\'deki gizli mağarada bulundu.' },
      { kod: 'KV5', ad: 'II. Ramses\'in oğulları', wiki: 'KV5', bulan: 'İlk kez 1825\'te James Burton girdi; gerçek büyüklüğünü 1995\'te Kent Weeks ortaya çıkardı', yil: '1825 / 1995',
        icinden: '120\'den fazla oda ve koridor; prenslere ait kemikler, çömlek parçaları, heykel parçaları.',
        not: 'Krallar Vadisi\'nin en büyük mezarı; kazı hâlâ sürüyor.' },
      { kod: 'KV20', ad: 'Hatşepsut ve I. Thutmose', wiki: 'KV20', bulan: 'Howard Carter temizledi', yil: '1903-1904',
        icinden: 'İki kuvarsit lahit (Hatşepsut ve babası I. Thutmose).',
        not: 'Vadinin en uzun ve en derin mezarlarından (~210 m). Hatşepsut\'un mumyası 2007\'de başka bir mezardan (KV60) çıkan mumya, bir kutudaki dişiyle eşleştirilerek tanımlandı.' },
      { kod: 'KV34', ad: 'III. Thutmose', wiki: 'KV34', bulan: 'Victor Loret', yil: '1898',
        icinden: 'Duvarlarda "Amduat" (yeraltı dünyası kitabı) tam metni; çöp adam gibi çizilmiş ilginç figürler.',
        not: 'Girişi bir uçurumun yüksek bir yerine gizlenmişti.' },
      { kod: 'KV35', ad: 'II. Amenhotep', wiki: 'KV35', bulan: 'Victor Loret', yil: 'Mart 1898',
        icinden: 'Kral kendi lahdinde bulundu; ayrıca rahiplerin buraya sakladığı 9 kral mumyası (IV. Thutmose, III. Amenhotep, Merneptah…) ve iki kadın mumyası.',
        not: '2010\'daki DNA çalışmalarına göre buradaki "Yaşlı Hanım" Kraliçe Tiye, "Genç Hanım" ise Tutankamon\'un annesi.' },
      { kod: 'KV46', ad: 'Yuya ve Tuya', wiki: 'KV46', bulan: 'James Quibell (Theodore Davis için)', yil: 'Şubat 1905',
        icinden: 'Neredeyse sağlam: yaldızlı tabutlar, bir savaş arabası, yataklar, sandalyeler, maskeler.',
        not: 'Kral değil, Kraliçe Tiye\'nin anne babası; Tutankamon\'unkinden önce bulunan en zengin mezar.' },
      { kod: 'KV55', ad: 'Amarna gizli deposu', wiki: 'KV55', bulan: 'Edward Ayrton (Theodore Davis için)', yil: 'Ocak 1907',
        icinden: 'Yüzü ve adı kazınmış bir tabut ve içinde bir erkek iskeleti; Kraliçe Tiye\'nin cenaze sunağı parçaları.',
        not: 'İskeletin büyük olasılıkla Akhenaton\'a (Tutankamon\'un babası) ait olduğu düşünülüyor; tartışma sürüyor.' },
      { kod: 'KV9', ad: 'V. ve VI. Ramses', wiki: 'KV9', bulan: 'Antik çağdan beri açık', yil: '-',
        icinden: 'Göğün tanrıçası Nut\'un tavanı kaplayan muhteşem astronomik resimleri.',
        not: 'Duvarlarında 1.000\'den fazla Yunanca ve Latince ziyaretçi yazısı var: 2.000 yıl önceki turistlerin "buradaydım" notları.' },
      { kod: 'KV63', ad: 'Mumyalama deposu', wiki: 'KV63', bulan: 'Otto Schaden ekibi', yil: '2006',
        icinden: '7 tabut ve 28 büyük küp; içlerinde mumya değil, mumyalamada kullanılan malzemeler.',
        not: 'Tutankamon\'dan (1922) sonra vadide bulunan ilk yeni mezar.' },
      { kod: 'TT320', ad: 'Kraliyet mumyaları saklı mağarası (Deyr el-Bahri)', wiki: 'Royal Cache', bulan: 'Önce Abd el-Rassul ailesi (~1871), resmen Émile Brugsch', yil: '1881',
        icinden: 'I. Ahmose, III. Thutmose, I. Seti ve II. Ramses gibi 50\'yi aşkın kral, kraliçe ve rahip mumyası.',
        not: 'Rahipler soygunlardan korumak için mumyaları MÖ ~10. yüzyılda buraya taşıdı. Mumyalar 2021\'de görkemli bir geçit töreniyle Ulusal Mısır Uygarlığı Müzesi\'ne taşındı.' },
      { kod: 'II. Thutmose', ad: 'II. Thutmose\'un mezarı (Batı vadileri)', wiki: 'Thutmose II', bulan: 'Mısır-İngiliz ortak kazı ekibi', yil: '2025',
        icinden: 'Boyalı tavan parçaları ve kral adı taşıyan kaymaktaşı kap parçaları; mezar sel suyuyla zarar görmüş.',
        not: 'Tutankamon\'dan bu yana bulunan ilk Yeni Krallık kral mezarı olarak duyuruldu.' }
    ] },
    khufu: { baslik: 'Önemli keşifler', items: [
      { kod: '1837', ad: 'Yük odaları ve işçi yazıları', wiki: 'Great Pyramid of Giza', bulan: 'Howard Vyse', yil: '1837',
        icinden: 'Kral Odası\'nın üstündeki boşluklarda işçi ekiplerinin boya ile yazdığı "Hufu\'nun dostları" gibi ekip adları.',
        not: 'Piramidin Keops dönemine ait olduğunun en güçlü kanıtlarından.' },
      { kod: '1925', ad: 'Kraliçe Hetepheres\'in gizli mezarı', wiki: 'Hetepheres I', bulan: 'George Reisner ekibi', yil: '1925',
        icinden: 'Keops\'un annesinin altın kaplı sedyesi, yatağı, koltuğu ve kanopik kutusu.',
        not: 'Ekipteki bir fotoğrafçının sehpasının ayağı bir alçı kapağa takılınca bulundu. Lahit boş çıktı.' },
      { kod: '1954', ad: 'Keops\'un güneş gemisi', wiki: 'Khufu ship', bulan: 'Kamal el-Mallakh', yil: '1954',
        icinden: '1.224 parçaya ayrılmış, 43 m uzunluğunda sedir ağacından bir gemi.',
        not: 'Parçalar yıllar süren bir çalışmayla yeniden birleştirildi. Gemi 2021\'de Büyük Mısır Müzesi\'ne taşındı.' },
      { kod: '1990', ad: 'Piramit işçilerinin mezarları', wiki: 'Giza pyramid complex', bulan: 'Zahi Hawass ve Mark Lehner ekipleri', yil: '1990',
        icinden: 'Piramit işçilerinin kendi küçük mezarları, ekmek fırınları ve işçi kasabası.',
        not: 'Bir turistin atı bir duvara takılıp tökezleyince ortaya çıktı; işçilerin köle olmadığını gösteren en önemli kanıtlardan.' },
      { kod: '2013', ad: 'Merer\'in Günlüğü', wiki: 'Diary of Merer', bulan: 'Pierre Tallet ekibi (Vadi el-Cerf)', yil: '2013',
        icinden: 'Kızıldeniz kıyısındaki bir limanda bulunan, bilinen en eski yazılı papirüsler.',
        not: 'Bir müfettişin Tura\'dan Gize\'ye kireçtaşı taşıdığını gün gün anlatıyor.' },
      { kod: '2017', ad: '"Büyük Boşluk"', wiki: 'ScanPyramids', bulan: 'ScanPyramids projesi (müon görüntüleme)', yil: '2017',
        icinden: 'Büyük Galeri\'nin üstünde en az 30 m uzunluğunda bilinmeyen bir boşluk.',
        not: 'Uzaydan gelen parçacıklarla (müonlar) piramidin içi "röntgenlendi". 2023\'te girişin üstünde ayrı bir koridor daha görüntülendi.' }
    ] },
    amarna: { baslik: 'Önemli keşifler', items: [
      { kod: '1887', ad: 'Amarna mektupları', wiki: 'Amarna letters', bulan: 'Yöreden bir kadın (toprak kazarken)', yil: '1887',
        icinden: 'Çivi yazılı 380\'i aşkın kil tablet: Babil, Mitanni, Hitit kralları ve Kenanlı vasallarla yazışmalar.',
        not: 'Tarihin bilinen en eski diplomatik arşivlerinden; bugün Berlin, Londra ve Kahire müzelerinde.' },
      { kod: '1912', ad: 'Nefertiti büstü', wiki: 'Nefertiti Bust', bulan: 'Ludwig Borchardt (Alman ekibi)', yil: '6 Aralık 1912',
        icinden: 'Heykeltıraş Thutmose\'un atölyesinde, boyaları korunmuş kireçtaşı büst.',
        not: 'Bugün Berlin\'deki Neues Museum\'da. Mısır büstün iadesini istiyor.' }
    ] }
  },

  // Çağlar dışında kalan bilgiler (genel kartlar)
  bilgi: {
    unas: { ikon: '📜', firavun: 'Unas', donem: '5. Hanedan sonu, ~MÖ 2365-2350', mimar: 'Bilinmiyor', sure: '~15 yıl',
      neden: 'Kralın mezarı; Djoser\'in piramidinin hemen yanında.',
      onem: 'İçinde ilk "Piramit Metinleri" var: kralın göğe yükselmesi için yazılmış, dünyanın bilinen en eski dinî metinlerinden.',
      teknik: [['Yükseklik', '~43 m'], ['Taban', '~58 × 58 m'], ['İç', 'Duvarları mavi boyalı hiyerogliflerle kaplı odalar']],
      nasil: 'Küçük, kaba taş çekirdekli bir piramit; ama iç odalar özenle süslendi.',
      bugun: 'Bir taş yığınına dönüşmüş; iç odaları zaman zaman ziyarete açılıyor.',
      ilginc: 'Metinlerdeki bir bölüm "Yamyam İlahisi" diye anılıyor: kral, tanrıların gücünü "yiyerek" kendine katıyor.' },
    pepi2: { ikon: '🔺', firavun: 'II. Pepi', donem: '6. Hanedan, ~MÖ 2275-2250', mimar: 'Bilinmiyor', sure: '~25 yıl',
      neden: 'Tarihin en uzun saltanatlarından birini süren kralın mezarı.',
      onem: 'Eski Krallık\'ın son büyük piramidi; ondan sonra devlet çöktü.',
      teknik: [['Yükseklik', '~52 m'], ['Taban', '~79 × 79 m'], ['İç', 'Piramit Metinleri']],
      nasil: 'Kaba taş çekirdek ve ince kireçtaşı kaplama; çevresinde kraliçelerin küçük piramitleri.',
      bugun: 'Güney Sakkara\'da harabe hâlinde.',
      ilginc: 'II. Pepi küçük bir çocukken tahta çıktı; bir yazıtta, kâşif Harkhuf\'a Afrika\'dan getirdiği dansçı cüceyi gemiden düşmesin diye gece gündüz korumasını emrediyor.' }
  },

  nil: {
    ikon: '🌊', title: 'Nil Nehri', sub: 'Mısır\'ın can damarı',
    tabs: [
      { ad: 'Genel', html: `
        <table class="tech">
        <tr><th>Uzunluk</th><td>~6.650 km (dünyanın en uzun nehirlerinden; Amazon ile yarışıyor)</td></tr>
        <tr><th>Kollar</th><td><b>Beyaz Nil</b> (Viktorya Gölü\'nden) ve <b>Mavi Nil</b> (Etiyopya\'daki Tana Gölü\'nden); Hartum\'da birleşiyor</td></tr>
        <tr><th>Havzası</th><td>11 ülke</td></tr>
        <tr><th>Akış yönü</th><td>Güneyden kuzeye, Akdeniz\'e</td></tr>
        <tr><th>Taşkının kaynağı</th><td>Etiyopya yaylalarına yağan yaz yağmurları; yıllık suyun yaklaşık %85\'i oradan</td></tr>
        </table>
        <p>Mısır\'da Nil, çölün ortasında yalnızca birkaç kilometre genişliğinde yeşil bir şerit oluşturur; kuzeyde ise geniş bir deltaya açılır. Mısırlılar verimli kara toprağa <b>Kemet</b> ("kara toprak"), çöle <b>Deşret</b> ("kızıl toprak") derdi; ülkelerinin adı da Kemet\'ti.</p>` },
      { ad: 'Mısır için önemi', html: `
        <p>Yunan tarihçi Herodot, Mısır\'ı <b>"Nil\'in armağanı"</b> diye tanımladı.</p>
        <ul>
        <li><b>Taşkın:</b> Her yaz (temmuz-ekim) nehir taşar, sular çekilince tarlalarda bereketli bir çamur bırakırdı. Gübreye ve yağmura gerek kalmadan yılda bir, bazen iki hasat yapılırdı.</li>
        <li><b>Takvim:</b> Yıl taşkınla başlardı. Sirius yıldızının şafakta yeniden görünmesi taşkının habercisi sayılırdı. Üç mevsim: Ahet (taşkın), Peret (ekim), Şemu (hasat).</li>
        <li><b>Ulaşım:</b> Nil ülkenin ana yoluydu. Akıntı kuzeye, rüzgâr çoğunlukla güneye eser: gemiler kuzeye akıntıyla, güneye yelkenle giderdi. Piramit taşları da gemilerle taşındı.</li>
        <li><b>Ölçüm:</b> "Nilometre" denen merdivenli kuyularla su yüksekliği ölçülür, vergiler buna göre belirlenirdi. Taşkın çok düşükse kıtlık, çok yüksekse yıkım olurdu.</li>
        <li><b>Papirüs ve balık:</b> Bataklıklardaki papirüs bitkisinden kâğıt, sepet, ip ve hatta kayık yapıldı; Nil balığı halkın temel besinlerindendi.</li>
        </ul>` },
      { ad: 'İnançlar', html: `
        <p>Mısırlılar Nil\'i bir tanrı olarak değil, <b>taşkını</b> bir tanrı olarak görürdü: <b>Hapi</b>, iri karınlı, bereketi taşıyan bir figür olarak resmedilirdi.</p>
        <p>Taşkının, ölen Osiris için yas tutan tanrıça <b>İsis\'in gözyaşlarından</b> geldiğine inanılırdı (sonraki çağlarda yaygın bir inanç).</p>
        <p>"Nil İlahisi" gibi metinlerde nehre şükran duyulur: <i>"Selam sana ey Hapi, Mısır\'a can vermek için yeryüzünden çıkan."</i></p>
        <p>Nil\'in batı yakası güneşin battığı, ölülerin diyarıydı; bu yüzden piramitler ve kral mezarları çoğunlukla batı yakadadır.</p>` },
      { ad: 'Bugün', html: `
        <ul>
        <li><b>Asuan Yüksek Barajı</b> (1970) taşkını sona erdirdi; arkasında yaklaşık 500 km uzunluğunda <b>Nasır Gölü</b> oluştu. Baraj elektrik ve düzenli su sağladı ama bereketli çamur artık tarlalara ulaşmıyor.</li>
        <li>Barajın suları altında kalmasın diye Ebu Simbel ve File tapınakları yerlerinden taşındı.</li>
        <li>Mısır\'ın yaklaşık 108 milyonluk nüfusunun büyük çoğunluğu, ülke topraklarının yalnızca küçük bir kısmını oluşturan Nil vadisi ve deltasında yaşıyor.</li>
        <li>Etiyopya\'nın Mavi Nil üzerindeki Büyük Rönesans Barajı (2025\'te açıldı), Mısır ile Etiyopya arasında önemli bir anlaşmazlık konusu.</li>
        </ul>` }
    ]
  },

  simgeler: [
    { id: 'khufu', ad: 'Büyük Piramit', ikon: '🔺', wiki: 'Great Pyramid of Giza', git: { place: 'misir-eski-krallik', y: 2560, id: 'khufu' },
      ozet: 'Antik Dünyanın Yedi Harikası\'ndan bugün ayakta kalan tek yapı.',
      hap: ['146,6 m yüksekliğinde yapıldı; ~3.800 yıl dünyanın en yüksek yapısıydı.', '~2,3 milyon taş blok, ortalama ~2,5 ton.', 'Keops için ~MÖ 2560\'ta, yaklaşık 20 yılda bitti.', 'Gize piramitleri 1979\'dan beri UNESCO Dünya Mirası.'] },
    { id: 'sphinx', ad: 'Büyük Sfenks', ikon: '🦁', wiki: 'Great Sphinx of Giza', git: { place: 'misir-eski-krallik', y: 2540, id: 'sphinx' },
      ozet: 'Aslan gövdeli, insan başlı dev heykel; Gize\'nin koruyucusu.',
      hap: ['73 m uzunluğunda, 20 m yüksekliğinde; tek bir kaya kütlesinden oyuldu.', 'Büyük olasılıkla Kefren döneminde yapıldı.', 'Tarih boyunca defalarca kuma gömüldü.', 'Burnunu Napolyon\'un askerleri kırmadı: 1737 çizimlerinde de burunsuz.'] },
    { id: 'nil', ad: 'Nil Nehri', ikon: '🌊', wiki: 'Nile', git: { nil: true },
      ozet: 'Çölün ortasındaki yeşil şerit; Mısır\'ın var oluş nedeni.',
      hap: ['~6.650 km uzunluğunda.', 'Yıllık taşkın, tarlalara bereketli kara çamur bırakırdı.', 'Herodot: "Mısır, Nil\'in armağanıdır."', 'Asuan Barajı (1970) taşkını sona erdirdi.'] },
    { id: 'tutankamon', ad: 'Tutankamon', ikon: '👑', wiki: 'Tutankhamun', git: { place: 'misir-yeni-krallik', y: 1330, id: 'krallar' },
      ozet: 'Genç yaşta ölen, ama mezarı sayesinde en ünlü firavun olan çocuk kral.',
      hap: ['~9 yaşında tahta çıktı, ~19 yaşında öldü (MÖ ~1327).', 'Mezarı (KV62) 1922\'de Howard Carter tarafından neredeyse sağlam bulundu.', '5.398 eser; altın maskesi ~10 kg.', 'Eserleri Gize\'deki Büyük Mısır Müzesi\'nde (2025\'te açıldı) bir arada sergileniyor.'] },
    { id: 'ramses', ad: 'II. Ramses', ikon: '⚔️', wiki: 'Ramesses II', git: { place: 'misir-yeni-krallik', y: 1260, id: 'abusimbel' },
      ozet: '"Büyük Ramses": en uzun ve en görkemli saltanatlardan biri.',
      hap: ['66 yıl hüküm sürdü (MÖ 1279-1213).', 'Kadeş Savaşı ve Hititlerle bilinen en eski barış antlaşmalarından biri.', 'Ebu Simbel, Ramesseum ve Pi-Ramses\'i yaptırdı.', 'Mumyası 1976\'da bakım için Paris\'e gönderildi.'] },
    { id: 'kleopatra', ad: 'VII. Kleopatra', ikon: '🐍', wiki: 'Cleopatra', git: { place: 'misir-gec-donem', y: 40, id: 'iskenderiye' },
      ozet: 'Mısır\'ın son kraliçesi; Roma\'nın iki büyük adamıyla ittifak kurdu.',
      hap: ['MÖ 51-30 arası hüküm sürdü.', 'Ptolemaios ailesinden Mısırca konuşan ilk hükümdar.', 'Jül Sezar ve Marcus Antonius ile ittifaklar.', 'Kleopatra\'nın zamanı Ay\'a ilk inişe, piramitlerin yapılışından daha yakın.'] },
    { id: 'nefertiti', ad: 'Nefertiti', ikon: '👸', wiki: 'Nefertiti Bust', git: { place: 'misir-yeni-krallik', y: 1342, id: 'amarna' },
      ozet: 'Akhenaton\'un güçlü eşi; büstü antik sanatın en ünlü eserlerinden.',
      hap: ['Amarna din devriminde kocasıyla birlikte merkezde yer aldı.', 'Büstü 1912\'de Amarna\'da bulundu.', 'Büst bugün Berlin\'de; Mısır iadesini istiyor.'] },
    { id: 'rosetta', ad: 'Hiyeroglif ve Rosetta Taşı', ikon: '📜', wiki: 'Rosetta Stone', git: { place: 'misir-gec-donem', y: 196 },
      ozet: 'Eski Mısır yazısının çözülmesini sağlayan taş.',
      hap: ['MÖ 196\'da aynı metin üç yazıyla yazıldı: hiyeroglif, demotik ve Yunanca.', '1799\'da Reşit (Rosetta) yakınında bulundu.', 'Champollion 1822\'de hiyeroglifleri çözdü.', '1802\'den beri British Museum\'da; müzenin en çok ziyaret edilen eseri.'] },
    { id: 'mumya', ad: 'Mumyalar', ikon: '⚱️', wiki: 'Mummy', git: null,
      ozet: 'Ölümden sonra hayat için bedeni korumanın sanatı.',
      hap: ['Mumyalama yaklaşık 70 gün sürerdi; beden natron tuzuyla kurutulurdu.', 'Kalp yerinde bırakılırdı: öbür dünyada tartılacaktı.', 'Kediler, timsahlar, ibisler gibi milyonlarca hayvan da mumyalandı.', '2021\'de 22 kral mumyası "Firavunların Altın Geçidi" ile yeni müzelerine taşındı.'] },
    { id: 'krallar', ad: 'Krallar Vadisi', ikon: '⛰️', wiki: 'Valley of the Kings', git: { place: 'misir-yeni-krallik', y: 1300, id: 'krallar' },
      ozet: 'Yeni Krallık firavunlarının gizli kaya mezarları.',
      hap: ['60\'tan fazla mezar.', '~430 yıl kullanıldı (MÖ ~1504-1075).', 'En ünlüsü Tutankamon\'un KV62\'si.', '1979\'dan beri UNESCO Dünya Mirası (Antik Teb).'] },
    { id: 'karnak', ad: 'Karnak', ikon: '🏛️', wiki: 'Karnak', git: { place: 'misir-yeni-krallik', y: 1260, id: 'karnak' },
      ozet: 'Dünyanın en büyük antik tapınak alanlarından.',
      hap: ['2.000 yılı aşkın sürede genişletildi.', 'Hipostil Salon\'da 134 dev sütun var.', 'Tanrı Amon-Ra\'nın evi; Yeni Krallık\'ın en zengin kurumu.'] },
    { id: 'abusimbel', ad: 'Ebu Simbel', ikon: '🌅', wiki: 'Abu Simbel', git: { place: 'misir-yeni-krallik', y: 1244, id: 'abusimbel' },
      ozet: 'II. Ramses\'in kayaya oyulmuş dev tapınağı.',
      hap: ['Cephede ~20 m\'lik dört oturan Ramses heykeli.', '1964-68\'de baraj suları basmasın diye parçalara kesilip yukarı taşındı.', 'Her yıl 22 Şubat ve 22 Ekim civarında güneş en içteki heykelleri aydınlatıyor.'] },
    { id: 'hatsepsut', ad: 'Hatşepsut', ikon: '🏛️', wiki: 'Hatshepsut', git: { place: 'misir-yeni-krallik', y: 1465, id: 'hatsepsut' },
      ozet: 'Firavun olarak hüküm süren kadın.',
      hap: ['~MÖ 1473-1458 arası firavun.', 'Punt\'a büyük deniz seferi düzenledi.', 'Deyr el-Bahri\'deki teraslı tapınağı antik mimarinin şaheserlerinden.'] },
    { id: 'narmer', ad: 'Narmer Paleti', ikon: '🪨', wiki: 'Narmer Palette', git: { place: 'misir-erken', y: 3050, id: 'hierakonpolis' },
      ozet: 'Mısır\'ın birleşmesini anlatan, bilinen en eski "tarihî belgelerden".',
      hap: ['~MÖ 3100. Kral Narmer bir yüzünde beyaz, öbür yüzünde kırmızı taçla.', '1898\'de Hierakonpolis\'te bulundu.', 'Bugün Kahire\'deki Mısır Müzesi\'nde.'] },
    { id: 'kedi', ad: 'Kediler ve hayvan tanrılar', ikon: '🐈', wiki: 'Cats in ancient Egypt', git: null,
      ozet: 'Mısırlılar için kutsal ve sevilen hayvanlar.',
      hap: ['Kedi tanrıça Bastet\'in şehri Bubastis\'teydi.', 'Antik bir yazara göre bir kediyi öldürmek ölümle cezalandırılırdı.', 'Tanrılar çoğu zaman hayvan başlı gösterilirdi: şahin başlı Horus, çakal başlı Anubis, ibis başlı Thot.'] }
  ],

  bugun: `
    <table class="tech">
    <tr><th>Nüfus</th><td>Yaklaşık 108 milyon (2025); Arap dünyasının en kalabalık ülkesi</td></tr>
    <tr><th>Turist</th><td>2024\'te yaklaşık <b>15,7 milyon</b> turist (rekor). Hükümetin hedefi 2028\'e kadar yılda 30 milyon.</td></tr>
    <tr><th>UNESCO</th><td>7 Dünya Mirası alanı; aralarında Memfis ve piramit alanları, Antik Teb, Ebu Simbel\'den File\'ye Nubya anıtları</td></tr>
    <tr><th>Yeni müze</th><td><b>Büyük Mısır Müzesi</b> (Gize, Kasım 2025\'te tamamen açıldı): tek bir uygarlığa adanmış dünyanın en büyük müzesi; Tutankamon\'un bütün eserleri burada.</td></tr>
    <tr><th>Mumyalar</th><td>Kral mumyaları 2021\'den beri Kahire\'deki Ulusal Mısır Uygarlığı Müzesi\'nde.</td></tr>
    <tr><th>Yurt dışında</th><td>Torino\'daki Museo Egizio (1824), British Museum, Louvre ve Berlin\'deki müzeler büyük Mısır koleksiyonlarına sahip. Mısır bazı eserlerin (Rosetta Taşı, Nefertiti büstü) iadesini istiyor.</td></tr>
    </table>
    <p class="note">Turizm verileri Mısır Turizm ve Eski Eserler Bakanlığı açıklamalarına dayanıyor; yıllara göre değişir.</p>`,

  // Eski Krallık'ın sonu ve 1. Ara Dönem (MÖ 2460-2100): "Tüm Antik Mısır" zaman çizgisindeki boşluğu doldurur
  araDonem: {
    dynasties: [
      { from: 2345, to: 2181, ad: '6. Hanedan', renk: '#5f8f6a' },
      { from: 2181, to: 2160, ad: '7.-8.', renk: '#7d7468' }
    ],
    rulers: [
      { from: 2455, to: 2345, ad: 'Geç 5. Hanedan (Niuserre, Djedkare-İsesi, Unas)', kisa: '5. Han. sonu', kim: 'Güneş tapınakları ve ilk Piramit Metinleri.' },
      { from: 2345, to: 2278, ad: 'Teti, I. Pepi ve Merenre', kisa: 'Teti·Pepi I', kim: '6. Hanedan\'ın ilk kralları.' },
      { from: 2278, to: 2184, ad: 'II. Pepi', kisa: 'II. Pepi', kim: 'Çocukken tahta çıktı; tarihin en uzun saltanatlarından biri (64 ya da 94 yıl).' },
      { from: 2184, to: 2160, ad: '7.-8. Hanedan (kısa saltanatlar)', kisa: '7.-8.', kim: 'Memfis\'te kısa süren, zayıf krallar.' },
      { from: 2160, to: 2100, ad: 'Herakleopolis ve Teb kralları', kisa: 'Bölünme', kim: 'Ülke kuzey ve güney olarak ikiye bölündü.' }
    ],
    eras: [
      { from: 2455, to: 2345, puan: { eko: 4, ordu: 3, istikrar: 4 }, baskent: 'Memfis',
        gundem: 'Piramitler küçülüyor, tapınaklar ve memurların mezarları zenginleşiyor. Djedkare-İsesi yönetimi yeniden düzenliyor; taşradaki valilerin gücü artıyor. Son kral Unas, piramidinin içine ilk kez dinî metinler (Piramit Metinleri) yazdırıyor.',
        savas: 'Büyük savaş kaydı yok; Nubya ve Levant\'a ticaret seferleri.',
        ekonomi: 'Tapınaklar ve soylular büyük topraklara sahip; kralın payı azalıyor.',
        din: 'Ölü kralın yıldızlara ve güneşe yükselişini anlatan Piramit Metinleri ortaya çıkıyor. Osiris inancı yükseliyor.',
        yasam: 'Vezir Ptahhotep\'e atfedilen "Öğütler", dünyanın bilinen en eski "nasıl iyi insan olunur" kitaplarından.',
        bilgi: 'Ptahhotep\'in Öğütleri\'nde "Bilgin olduğun için kibirlenme, cahile de bilgine danıştığın gibi danış" deniyor.' },
      { from: 2345, to: 2278, puan: { eko: 4, ordu: 4, istikrar: 3 }, baskent: 'Memfis',
        gundem: '6. Hanedan. Manethon\'a göre Teti muhafızları tarafından öldürüldü. I. Pepi döneminde bir saray komplosu ortaya çıkarıldı; memur Weni bunu ve Levant\'a yaptığı seferleri mezarına yazdırdı.',
        savas: 'Weni, köylülerden ve Nubyalı askerlerden kurulu büyük bir orduyla Levant\'taki "kum sakinlerine" karşı beş sefer yaptığını anlatıyor.',
        ekonomi: 'Nubya\'dan altın, abanoz, fildişi; uzun kara seferleri.',
        din: 'Krallar piramitlerine Piramit Metinleri yazdırmaya devam ediyor.',
        yasam: 'Taşradaki valiler kendi bölgelerinde büyük mezarlar yaptırıyor.',
        bilgi: 'Hierakonpolis\'te bulunan I. Pepi\'nin bakır heykeli, bilinen en eski büyük boy metal heykellerden.' },
      { from: 2278, to: 2184, puan: { eko: 3, ordu: 3, istikrar: 3 }, baskent: 'Memfis',
        gundem: 'II. Pepi çok küçük yaşta tahta çıkıyor ve onlarca yıl hüküm sürüyor. Kâşif Harkhuf Afrika\'nın içlerine (Yam ülkesi) seferler yapıyor. Ama merkezî güç zayıflıyor; eyalet valileri neredeyse bağımsız.',
        savas: 'Nubya\'da güçlenen topluluklarla sürtüşmeler.',
        ekonomi: 'Krallar vergileri valilere ve tapınaklara bağışlıyor (vergi muafiyeti fermanları); hazine küçülüyor.',
        din: 'Ölümden sonra hayat inancı soylulara doğru yayılıyor.',
        yasam: 'Valiler mezar yazıtlarında "açı doyurdum, çıplağı giydirdim" diye kendilerini övüyor.',
        bilgi: 'Harkhuf\'un mezarında, çocuk kralın ona yazdığı heyecanlı bir mektup var: getirdiği dansçı cüceyi sağ salim saraya ulaştırmasını istiyor.' },
      { from: 2184, to: 2100, puan: { eko: 1, ordu: 2, istikrar: 1 }, baskent: 'Memfis, sonra Herakleopolis ve Teb',
        gundem: 'Eski Krallık çöküyor. Ard arda kısa süren krallar, yerel valilerin güç savaşı ve düşük Nil taşkınları. Sonunda ülke kuzeyde Herakleopolis, güneyde Teb kralları arasında bölünüyor.',
        savas: 'Valiler ve yerel krallar arasında iç savaşlar.',
        ekonomi: 'MÖ 2200 civarında dünyanın birçok yerini etkileyen bir kuraklık dönemi ("4.2 bin yıl olayı") Nil taşkınlarını azalttı; kıtlıklar yaşandı.',
        din: 'Yerel tanrılar ve yerel kült merkezleri öne çıkıyor.',
        yasam: 'Sonraki dönemde yazılan "İpuver\'in Uyarıları" gibi metinler bu kaos yıllarını anlatıyor gibi (tarihi tartışmalı).',
        bilgi: 'Aynı yıllarda Mezopotamya\'da Akad İmparatorluğu da çöktü; iklim değişikliğinin rolü araştırılıyor.' }
    ],
    events: [
      { y: 2420, t: 'Niuserre\'nin güneş tapınağı (Ebu Gurab)', k: 'm' },
      { y: 2390, t: 'Ptahhotep\'in Öğütleri (atfen)', k: 'm' },
      { y: 2350, t: 'Unas: ilk Piramit Metinleri', k: 'm' },
      { y: 2300, t: 'Weni\'nin Levant seferleri', k: 'm' },
      { y: 2276, t: 'Çocuk kral II. Pepi\'nin Harkhuf\'a mektubu', k: 'm' },
      { y: 2200, t: 'Büyük kuraklık, düşük Nil taşkınları', k: 'm' },
      { y: 2181, t: 'Eski Krallık sona erdi', k: 'm' },
      { y: 2160, t: 'Herakleopolis\'te 9. Hanedan; ülke bölündü', k: 'm' },
      { y: 2334, t: 'Dünya: Akadlı Sargon ilk büyük imparatorluğu kurdu', k: 'w' },
      { y: 2250, t: 'Dünya: Akad kralı Naram-Sin; Ebla yıkıldı', k: 'w' }
    ],
    world: [
      { from: 2334, to: 2154, yer: 'Mezopotamya', t: 'Akad İmparatorluğu: Sargon ve torunu Naram-Sin, Basra Körfezi\'nden Akdeniz\'e uzanan ilk büyük imparatorluğu kurdu.' },
      { from: 2400, to: 2250, yer: 'Suriye', t: 'Ebla: binlerce kil tabletlik arşiviyle zengin bir ticaret krallığı.' },
      { from: 2300, to: 2000, yer: 'Anadolu', t: 'Alacahöyük kral mezarları: güneş kursları, geyik heykelcikleri.' }
    ],
    nufus: [[2460, 1.6], [2200, 1.5], [2100, 1.35]]
  },

  // Harita konumları [enlem, boylam]
  coords: {
    djoser: [29.871, 31.216], sekhemkhet: [29.866, 31.213], khaba: [29.933, 31.161], meidum1: [29.388, 31.157], meidum2: [29.388, 31.157],
    bent: [29.790, 31.209], red: [29.809, 31.206], khufu: [29.979, 31.134], kralice1: [29.977, 31.136], kralice2: [29.976, 31.136], kralice3: [29.975, 31.136],
    djedefre: [30.032, 31.075], khafre: [29.976, 31.131], sphinx: [29.975, 31.138], menkaure: [29.972, 31.128], shepseskaf: [29.839, 31.219],
    userkaf: [29.875, 31.219], gunes: [29.902, 31.199], sahure: [29.897, 31.203], neferirkare: [29.895, 31.202], unas: [29.868, 31.215], pepi2: [29.840, 31.207],
    mentuhotep: [25.737, 32.606], beyazsapel: [25.719, 32.657], amenemhat1: [29.575, 31.226], senusret1: [29.559, 31.222], heliopolis: [30.129, 31.307],
    senusret2: [29.235, 30.971], kahun: [29.234, 30.990], senusret3: [29.819, 31.226], karapiramit: [29.792, 31.223], hawara: [29.274, 30.899], labirent: [29.272, 30.902], avaris: [30.787, 31.821],
    karnak: [25.719, 32.657], hatsepsutdikilitas: [25.719, 32.658], hatsepsut: [25.738, 32.607], krallar: [25.740, 32.601], deyrelmedine: [25.728, 32.601],
    memnon: [25.720, 32.610], luksor: [25.699, 32.639], amarna: [27.645, 30.896], ramesseum: [25.728, 32.610], abusimbel: [22.337, 31.626], piramses: [30.800, 31.830], medinethabu: [25.719, 32.600],
    taharka: [18.563, 31.918], sais: [30.966, 30.769], naukratis: [30.899, 30.590], iskenderiye: [31.200, 29.918], kutuphane: [31.209, 29.909], pharos: [31.214, 29.885],
    phile: [24.025, 32.884], edfu: [24.978, 32.873], komombo: [24.452, 32.928], dendera: [26.142, 32.670],
    hierakonpolis: [25.097, 32.780], nagada: [25.900, 32.720], abidosmezarlar: [26.175, 31.909], sunet: [26.190, 31.920], buto: [31.200, 30.750]
  },
  // Şehirler ve önemli yerler. b: başkent olduğu yıllar
  sehirler: [
    { ad: 'Memfis', ll: [29.845, 31.25], from: 3000, to: 30, b: [[3000, 2160], [1332, 1279], [525, 404], [343, 320]], not: 'Eski Krallık\'ın başkenti; 3.000 yıl boyunca Mısır\'ın en önemli şehirlerinden.' },
    { ad: 'Abidos (Tinis)', ll: [26.185, 31.92], from: 3150, to: 30, b: [[3100, 3000]], not: 'İlk kralların mezarlığı; Osiris\'in kutsal şehri. İlk başkent Tinis yakındaydı (yeri kesin bilinmiyor).' },
    { ad: 'Nekhen', ll: [25.097, 32.78], from: 3150, to: 2000, not: 'Şahin tanrı Horus\'un şehri; birleşmenin merkezlerinden.' },
    { ad: 'Nagada', ll: [25.90, 32.72], from: 3150, to: 2500, not: 'Tanrı Seth\'in şehri; tarih öncesi kültüre adını verdi.' },
    { ad: 'Buto', ll: [31.20, 30.75], from: 3150, to: 30, not: 'Deltanın kutsal şehri; kobra tanrıça Wadjet.' },
    { ad: 'Heliopolis', ll: [30.13, 31.31], from: 3000, to: 30, not: 'Güneş tanrısı Ra\'nın kutsal şehri.' },
    { ad: 'Herakleopolis', ll: [29.08, 30.93], from: 2200, to: 700, b: [[2160, 2055]], not: '1. Ara Dönem\'de kuzey krallarının başkenti.' },
    { ad: 'Teb (Vaset)', ll: [25.70, 32.64], from: 2200, to: 30, b: [[2160, 1985], [1650, 1347], [1332, 1279]], not: 'Orta ve Yeni Krallık\'ın görkemli başkenti; bugünkü Luksor.' },
    { ad: 'İtj-tavy', ll: [29.60, 31.25], from: 1985, to: 1650, b: [[1985, 1650]], not: '12. Hanedan\'ın başkenti; yeri tam bilinmiyor (Lişt yakını).' },
    { ad: 'Avaris', ll: [30.787, 31.821], from: 1800, to: 1530, b: [[1650, 1550]], not: 'Hiksosların başkenti.' },
    { ad: 'Ahetaton (Amarna)', ll: [27.65, 30.90], from: 1347, to: 1330, b: [[1347, 1332]], not: 'Akhenaton\'un kısa ömürlü başkenti.' },
    { ad: 'Pi-Ramses', ll: [30.80, 31.83], from: 1280, to: 1050, b: [[1279, 1069]], not: 'II. Ramses\'in delta başkenti.' },
    { ad: 'Tanis', ll: [30.97, 31.88], from: 1069, to: 30, b: [[1069, 945]], not: '21. Hanedan\'ın başkenti; kral mezarları burada.' },
    { ad: 'Bubastis', ll: [30.57, 31.51], from: 2700, to: 30, b: [[945, 747]], not: 'Kedi tanrıça Bastet\'in şehri.' },
    { ad: 'Sais', ll: [30.966, 30.769], from: 1000, to: 30, b: [[664, 525], [404, 343]], not: '26. Hanedan\'ın başkenti.' },
    { ad: 'İskenderiye', ll: [31.20, 29.92], from: 331, to: 30, b: [[320, 30]], not: 'Büyük İskender\'in kurduğu, Ptolemaiosların başkenti.' },
    { ad: 'Elephantine (Asuan)', ll: [24.09, 32.89], from: 3000, to: 30, tur: 'kale', not: 'Güney sınırı; Birinci Çağlayan\'daki kale ve granit ocakları.' },
    { ad: 'Buhen', ll: [21.90, 31.30], from: 1950, to: 1100, tur: 'kale', not: 'Nubya\'daki dev Mısır kalesi.' },
    { ad: 'Kerma', ll: [19.60, 30.41], from: 2500, to: 1500, tur: 'nubya', not: 'Nubya\'nın güçlü Kerma Krallığı\'nın başkenti.' },
    { ad: 'Napata', ll: [18.53, 31.83], from: 1450, to: 300, b: [[747, 664]], tur: 'nubya', not: 'Kuş Krallığı\'nın merkezi; kutsal Gebel Barkal dağı.' },
    { ad: 'Naukratis', ll: [30.90, 30.59], from: 620, to: 30, not: 'Yunan tüccarların şehri.' },
    { ad: 'Pelusium', ll: [31.04, 32.55], from: 700, to: 30, tur: 'kale', not: 'Doğu sınırının kalesi; birçok istila burada başladı.' },
    { ad: 'Siva', ll: [29.20, 25.52], from: 700, to: 30, not: 'Amon kâhininin vahası; İskender burayı ziyaret etti.' },
    { ad: 'Sina madenleri', ll: [28.90, 33.37], from: 2700, to: 1100, tur: 'maden', not: 'Vadi Mağara ve Serabit el-Hadim: turkuaz ve bakır madenleri.' },
    { ad: 'Vadi el-Cerf limanı', ll: [28.90, 32.62], from: 2600, to: 2550, tur: 'liman', not: 'Keops döneminin Kızıldeniz limanı; Merer\'in Günlüğü burada bulundu.' }
  ]
};
