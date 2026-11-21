// 🎭 Ben kimim?: ünlü kişilerin hayatları, ipucu kartları hâlinde. js/oyun/kim.js oynatır.
// z: zorluk (1 kolay: çok tanınan · 2 orta · 3 zor: az tanınan), ll: doğum yeri [enlem, boylam], w: İngilizce Vikipedi başlığı.
// k: kartlar, sırayla daha açık ipuçları: [yıl, ipucu resmi (js/oyun/cizimler.js), ne oldu, o dönemde hayat (isteğe bağlı), yer [enlem, boylam] (isteğe bağlı)]
// Yıl: MÖ pozitif, MS negatif. Metinlerde kişinin adı geçmez; tartışmalı olaylar "anlatılır" diye yazılır.
window.KIM = [
  // ================= KOLAY =================
  { id: "kleopatra", ad: "Kleopatra", alt: ["Kleopatra VII", "Cleopatra"], z: 1, ulke: "Mısır", alan: "Kraliçe", kim: "Mısır'ın son Ptolemaios kraliçesi", ll: [31.2, 29.92], dogum: 69, olum: 30, w: "Cleopatra", k: [
    [69, "capa", "Bir kral ailesinde, büyük bir liman kentinde doğdun. Ailen aslen Makedonyalı ama yüzyıllardır Nil kıyısında hüküm sürüyor.", "Kentin ünlü kütüphanesinde yüz binlerce papirüs rulosu var. Zenginler ince keten giyer; halk ekmek yer, bira içer."],
    [51, "tac", "18 yaşında küçük erkek kardeşinle birlikte tahta çıktın. Atalarından farklı olarak halkının dilini de öğrendin; birçok dil konuştuğun anlatılır."],
    [48, "parsomen", "Taht kavgasında kentten kaçmak zorunda kaldın. Anlatılana göre saraya gizlice girmek için bir çuvala sarılıp güçlü bir Romalı komutanın önüne getirildin."],
    [41, "gemi", "Tarsus'a altın kaplı kıçı ve mor yelkenleriyle bir gemiyle geldin. Roma'nın en güçlü adamlarından biri sana âşık oldu.", "Akdeniz'de yolculuk kürekli ve yelkenli gemilerle yapılır; kışın denize pek açılınmaz.", [36.92, 34.89]],
    [30, "yilan", "Aktium'da yenildin. Anlatılana göre zehirli bir yılana kendini ısırtarak öldün. Ölümünle ülken bir Roma eyaleti oldu."]] },
  { id: "iskender", ad: "Büyük İskender", alt: ["İskender", "Alexander", "III. Aleksandros"], z: 1, ulke: "Yunanistan (Makedonya bölgesi)", alan: "Kral ve komutan", kim: "Makedonya kralı, Mısır'dan Hindistan'a uzanan imparatorluğun kurucusu", ll: [40.76, 22.52], dogum: 356, olum: 323, w: "Alexander the Great", k: [
    [356, "dag", "Dağlık bir krallıkta, kralın oğlu olarak doğdun. Anlatılana göre doğduğun gece uzaklarda büyük bir tapınak yandı."],
    [343, "kitap", "13 yaşındasın. Baban sana dünyanın en ünlü filozoflarından birini öğretmen olarak tuttu.", "Soylu çocuklar ata binmeyi, ok atmayı ve Homeros'un destanlarını ezbere okumayı öğrenir."],
    [336, "tac", "Baban bir düğün töreninde öldürüldü; 20 yaşında kral oldun."],
    [333, "at", "Büyük bir imparatorluğun ordusunu yendin. Gordion'da kimsenin çözemediği düğümü kılıcınla kestin.", "Ordular günde 20-30 km yürür; yiyecek yol boyunca köylerden toplanır.", [39.65, 31.98]],
    [323, "harita", "Mısır'dan Hindistan'a uzanan bir imparatorluk kurdun; adını taşıyan şehirler kurdun. 32 yaşında Babil'de öldün.", null, [32.54, 44.42]]] },
  { id: "sezar", ad: "Julius Sezar", alt: ["Gaius Julius Caesar", "Caesar", "Jül Sezar"], z: 1, ulke: "İtalya", alan: "Komutan ve devlet adamı", kim: "Romalı komutan ve devlet adamı", ll: [41.89, 12.49], dogum: 100, olum: 44, w: "Julius Caesar", k: [
    [100, "sutun", "Eski ama pek zengin olmayan soylu bir ailede, kalabalık bir başkentte doğdun.", "Şehrin nüfusu yüz binleri aşıyor; halk çok katlı, yangına açık kira evlerinde yaşıyor, ekmeği devlet dağıtıyor."],
    [75, "gemi", "Genç yaşta korsanlar seni kaçırdı. İstedikleri fidyeyi az bulup artırmalarını söyledin; serbest kalınca hepsini yakalattın.", null, [37.29, 27.15]],
    [52, "kalkan", "Galya'yı yıllar süren savaşlarla fethettin ve bu savaşları kendin bir kitapta anlattın.", null, [46.5, 2.5]],
    [49, "kilic", "Ordunla küçük bir ırmağı geçip başkente yürüdün ve 'Zar atıldı' dedin. İç savaş başladı.", null, [44.06, 12.4]],
    [44, "hancer", "Takvimi düzelttin; bir ay bugün hâlâ senin adını taşıyor. Mart ayının ortasında senatoda hançerlenerek öldürüldün."]] },
  { id: "cengiz", ad: "Cengiz Han", alt: ["Temuçin", "Genghis Khan"], z: 1, ulke: "Moğolistan", alan: "Han, hükümdar", kim: "Moğol İmparatorluğu'nun kurucusu", ll: [48.9, 110.0], dogum: -1162, olum: -1227, w: "Genghis Khan", k: [
    [-1162, "cadir", "Bozkırda keçe çadırlarda yaşayan bir boyun beyinin oğlu olarak doğdun. Anlatılana göre doğarken avucunda bir kan pıhtısı vardı.", "Bozkırda insanlar kısrak sütünden kımız içer, kurutulmuş et yer; çadırlar göç ederken arabalarla taşınır."],
    [-1171, "at", "9 yaşındayken baban zehirlendi. Boyun sizi terk etti; annen ve kardeşlerinle kök ve balıkla hayatta kaldın."],
    [-1206, "tac", "Bozkırın bütün boylarını birleştirdin. Büyük bir kurultayda sana yeni bir unvan verildi."],
    [-1219, "ok", "Harezmşahlar elçilerini öldürünce Orta Asya'ya sefere çıktın; Semerkant ve Buhara düştü.", null, [39.65, 66.96]],
    [-1227, "harita", "Tarihin en büyük kara imparatorluğunu kurdun. Öldüğünde mezarının yeri gizli tutuldu ve hâlâ bulunamadı."]] },
  { id: "fatih", ad: "Fatih Sultan Mehmed", alt: ["II. Mehmed", "Fatih", "Mehmed the Conqueror"], z: 1, ulke: "Türkiye", alan: "Padişah", kim: "İstanbul'u fetheden Osmanlı padişahı", ll: [41.68, 26.56], dogum: -1432, olum: -1481, w: "Mehmed II", k: [
    [-1432, "saray", "Bir sultanın üçüncü oğlu olarak Balkanlar'daki bir başkentte doğdun. Tahta geçeceğin kimsenin aklına gelmezdi."],
    [-1444, "tac", "12 yaşındayken baban tahtı sana bıraktı; ama bir Haçlı ordusu gelince ondan geri dönmesini istedin.", "Saray çocukları Arapça, Farsça, hat ve kılıç dersleri alır; lalaları onları sancak yönetmeye hazırlar."],
    [-1452, "kule", "Boğaz'ın en dar yerine dört ayda bir hisar yaptırdın.", null, [41.08, 29.06]],
    [-1453, "gemi", "Gemileri karadan yürüterek bir koya indirdin. 21 yaşında bin yıllık bir şehri aldın.", "Kuşatmalarda dev toplar kullanılmaya başlandı; bir topu döküp taşımak haftalar sürüyor.", [41.01, 28.98]],
    [-1480, "cerceve", "Venedikli bir ressama portreni yaptırdın; birçok dil biliyordun. 49 yaşında yeni bir seferin yolunda öldün.", null, [41.01, 28.98]]] },
  { id: "leonardo", ad: "Leonardo da Vinci", alt: ["Leonardo", "Da Vinci"], z: 1, ulke: "İtalya", alan: "Ressam ve mucit", kim: "Rönesans ressamı, mucit ve bilim insanı", ll: [43.79, 10.93], dogum: -1452, olum: -1519, w: "Leonardo da Vinci", k: [
    [-1452, "ev", "Toskana'da küçük bir kasabada, bir noterin evlilik dışı oğlu olarak doğdun. Okulda Latince öğrenmedin."],
    [-1466, "firca", "14 yaşında Floransa'da bir heykeltıraş ve ressamın atölyesine çırak oldun.", "Atölyelerde çıraklar boya tozlarını öğütür, fırça yapar, ustanın tablolarındaki küçük ayrıntıları boyar.", [43.77, 11.25]],
    [-1482, "disli", "Milano dükü için savaş makineleri, köprüler ve dev bir at heykeli tasarladın. Defterlerine aynada okunacak gibi tersten yazdın.", null, [45.46, 9.19]],
    [-1503, "cerceve", "Floransalı bir tüccarın karısının portresine başladın ve ölene dek elinden bırakmadın. Bugün dünyanın en ünlü tablosu.", null, [43.77, 11.25]],
    [-1519, "kanat", "Uçan makineler ve insan anatomisi çizdin. Son yıllarını Fransa kralının konuğu olarak geçirdin.", null, [47.41, 0.98]]] },
  { id: "kolomb", ad: "Kristof Kolomb", alt: ["Kolomb", "Christopher Columbus", "Cristoforo Colombo"], z: 1, ulke: "İtalya", alan: "Denizci ve kâşif", kim: "Atlantik'i geçen Cenovalı denizci", ll: [44.41, 8.93], dogum: -1451, olum: -1506, w: "Christopher Columbus", k: [
    [-1451, "capa", "Ligurya kıyısında, bir liman cumhuriyetinde, bir dokumacının oğlu olarak doğdun."],
    [-1476, "gemi", "Bir deniz savaşında geminiz battı; bir küreğe tutunarak Portekiz kıyısına yüzdün.", null, [37.0, -9.0]],
    [-1486, "harita", "Batıya giderek Asya'ya ulaşabileceğini savundun. Dünyanın çevresini olduğundan çok küçük hesaplamıştın.", "Denizciler yıldızlara, pusulaya ve kum saatine bakarak yol bulur; aylarca peksimet ve tuzlu et yerler.", [40.42, -3.7]],
    [-1492, "pusula", "Üç gemiyle yola çıktın; iki aylık yolculuktan sonra Karayipler'de bir adaya çıktın. Hindistan'a vardığını sandın.", null, [24.1, -74.5]],
    [-1506, "zincir", "Dört kez okyanusu geçtin; bir ara zincire vurulup İspanya'ya getirildin. Gittiğin yerin yeni bir kıta olduğunu hiç kabul etmedin.", null, [41.65, -4.72]]] },
  { id: "napolyon", ad: "Napolyon Bonapart", alt: ["Napolyon", "Napoleon", "I. Napolyon"], z: 1, ulke: "Fransa (Korsika)", alan: "İmparator ve komutan", kim: "Fransız imparatoru ve komutan", ll: [41.92, 8.74], dogum: -1769, olum: -1821, w: "Napoleon", k: [
    [-1769, "ada", "Bir Akdeniz adasında, ada başka bir ülkeye geçtikten bir yıl sonra doğdun. Ana dilin, sonradan yöneteceğin ülkenin dili değildi."],
    [-1785, "top", "Askerî okulda topçu subayı oldun; arkadaşların aksanınla alay ediyordu.", "Askerî okullarda soylu çocuklar matematik, eskrim ve dans öğrenir; disiplin çok serttir.", [48.85, 2.3]],
    [-1798, "piramit", "Mısır'a sefer düzenledin; yanında 150'yi aşkın bilim insanı götürdün.", null, [29.98, 31.13]],
    [-1804, "tac", "Kendini imparator ilan ettin; taç giyme töreninde tacı kendi başına kendin koydun.", "Avrupa'da yolculuk atlı arabayla günler sürer; haberler ulaklarla taşınır.", [48.85, 2.35]],
    [-1815, "ada", "Rusya seferinde ordunu kaybettin. Son büyük yenilginden sonra Atlantik'in ortasındaki ıssız bir adaya sürüldün.", null, [50.68, 4.41]]] },
  { id: "mozart", ad: "Wolfgang Amadeus Mozart", alt: ["Mozart"], z: 1, ulke: "Avusturya", alan: "Besteci", kim: "Avusturyalı besteci", ll: [47.8, 13.04], dogum: -1756, olum: -1791, w: "Wolfgang Amadeus Mozart", k: [
    [-1756, "dag", "Alplerin eteğinde, bir başpiskoposun yönettiği bir kentte, bir saray müzisyeninin oğlu olarak doğdun."],
    [-1762, "piyano", "6 yaşında ablanla Avrupa saraylarında konser veriyorsun; tuşları bir bezle örtülüyken bile çalabiliyorsun.", "Yolculuklar sarsıntılı posta arabalarıyla yapılır; çocuklar çiçek ve tifo gibi hastalıklara kolayca yakalanır.", [48.2, 16.37]],
    [-1770, "nota", "14 yaşında Roma'da, yalnızca bir kez dinlediğin gizli bir kilise eserini ezberden kâğıda geçirdin.", null, [41.9, 12.45]],
    [-1786, "maske", "Viyana'da operalar yazıyorsun; birinde bir berberin düğünü anlatılıyor.", null, [48.21, 16.37]],
    [-1791, "kalem", "35 yaşında öldün; son eserin bir ölüler için ayin müziğiydi ve onu bitiremedin.", null, [48.21, 16.37]]] },
  { id: "beethoven", ad: "Ludwig van Beethoven", alt: ["Beethoven"], z: 1, ulke: "Almanya", alan: "Besteci", kim: "Alman besteci", ll: [50.73, 7.1], dogum: -1770, olum: -1827, w: "Ludwig van Beethoven", k: [
    [-1770, "kule", "Ren kıyısında bir saray kentinde, bir şarkıcının oğlu olarak doğdun. Baban seni sert yöntemlerle harika çocuk yapmaya çalıştı."],
    [-1787, "piyano", "Ünlü bir besteciden ders almak umuduyla Viyana'ya gittin; ama annen hastalanınca hemen dönmek zorunda kaldın.", null, [48.21, 16.37]],
    [-1801, "kulak", "Viyana'da piyano virtüözü olarak ünlendin; ama 30 yaşına doğru işitmen azalmaya başladı.", "Viyana'da konserler soyluların salonlarında verilir; besteciler zengin hamilerden maaş alır.", [48.21, 16.37]],
    [-1804, "tac", "Bir senfonini Napolyon'a adamıştın; kendini imparator ilan edince adının yazılı olduğu sayfayı yırttın.", null, [48.21, 16.37]],
    [-1824, "nota", "Neredeyse tamamen sağırken, sonunda koronun 'Neşeye Övgü' söylediği dokuzuncu senfonini sahneye koydun.", null, [48.21, 16.37]]] },
  { id: "einstein", ad: "Albert Einstein", alt: ["Einstein"], z: 1, ulke: "Almanya", alan: "Fizikçi", kim: "Görelilik kuramının fizikçisi", ll: [48.4, 9.99], dogum: -1879, olum: -1955, w: "Albert Einstein", k: [
    [-1879, "simsek", "Güney Almanya'da bir kentte, elektrik işiyle uğraşan bir ailede doğdun. Konuşmaya geç başladın."],
    [-1884, "pusula", "5 yaşında babanın gösterdiği bir pusula seni büyüledi: ibreyi görünmeyen bir şey çeviriyordu.", "Şehirlerde atlı tramvaylar yerini elektrikliye bırakıyor; evlerin çoğunda hâlâ elektrik yok.", [48.14, 11.58]],
    [-1905, "kalem", "Bir patent bürosunda memurken bir yılda dört çığır açan makale yayımladın; birinde ünlü bir denklem vardı.", null, [46.95, 7.45]],
    [-1921, "madalya", "Nobel Fizik Ödülü'nü aldın; ama en ünlü kuramın için değil, ışığın elektrik üretmesi üzerine çalışman için.", null, [52.52, 13.4]],
    [-1952, "yildiz", "Ülkenden göç edip ABD'de yaşadın. Sana yeni kurulan bir ülkenin cumhurbaşkanlığı önerildi; reddettin.", null, [40.35, -74.66]]] },
  { id: "curie", ad: "Marie Curie", alt: ["Curie", "Maria Skłodowska", "Madam Curie"], z: 1, ulke: "Polonya", alan: "Fizikçi ve kimyacı", kim: "Radyoaktiviteyi inceleyen fizikçi ve kimyacı", ll: [52.23, 21.01], dogum: -1867, olum: -1934, w: "Marie Curie", k: [
    [-1867, "kitap", "Rus Çarlığı'nın yönetimindeki bir başkentte, öğretmen bir ailenin beşinci çocuğu olarak doğdun.", "Ülkende kızların üniversiteye girmesi yasak; kadınlar gizli bir 'uçan üniversitede' ders alıyor."],
    [-1891, "kitap", "24 yaşında Paris'e gittin; çatı katında, bazen yalnızca ekmek ve çayla yaşayarak okudun.", null, [48.85, 2.34]],
    [-1898, "sise", "Eşinle birlikte iki yeni element keşfettin; birine doğduğun ülkenin adını verdin.", null, [48.84, 2.34]],
    [-1903, "madalya", "Nobel ödülü alan ilk kadın oldun.", null, [59.33, 18.07]],
    [-1914, "araba", "İkinci Nobel'ini kimyada aldın. Birinci Dünya Savaşı'nda röntgen cihazlı arabalarla cepheye gittin.", null, [49.0, 2.5]]] },
  { id: "galileo", ad: "Galileo Galilei", alt: ["Galileo", "Galile"], z: 1, ulke: "İtalya", alan: "Astronom ve fizikçi", kim: "İtalyan astronom ve fizikçi", ll: [43.72, 10.4], dogum: -1564, olum: -1642, w: "Galileo Galilei", k: [
    [-1564, "nota", "İtalya'da eğik kulesiyle ünlü olacak bir kentte, bir müzisyenin oğlu olarak doğdun."],
    [-1583, "lamba", "Anlatılana göre katedralde sallanan bir kandili nabzınla saydın: büyük de salınsa küçük de, bir gidiş geliş aynı sürüyordu."],
    [-1609, "teleskop", "Hollanda'da icat edilen bir aleti duydun, kendin daha iyisini yapıp gökyüzüne çevirdin.", "Üniversitelerde dersler Latince verilir; Aristoteles'in kitapları hâlâ en büyük otoritedir.", [45.41, 11.88]],
    [-1610, "yildiz", "Jüpiter'in çevresinde dönen dört ay keşfettin; Ay'ın yüzeyinin dağlık olduğunu gördün.", null, [45.41, 11.88]],
    [-1633, "terazi", "Dünya'nın Güneş'in çevresinde döndüğünü savunduğun için yargılandın; ömrünün sonuna kadar ev hapsinde kaldın.", null, [41.9, 12.45]]] },
  { id: "jeanne", ad: "Jeanne d'Arc", alt: ["Jan Dark", "Joan of Arc", "Orleans Bakiresi"], z: 1, ulke: "Fransa", alan: "Asker", kim: "Yüz Yıl Savaşı'nda Fransız ordusuna önderlik eden köylü kızı", ll: [48.44, 5.67], dogum: -1412, olum: -1431, w: "Joan of Arc", k: [
    [-1412, "ev", "Doğu Fransa'da küçük bir köyde, bir çiftçinin kızı olarak doğdun. Okuma yazma bilmiyorsun.", "Köylüler tarlada çalışır, zamanı kilise çanlarından anlar; ülkede onlarca yıldır savaş sürüyor."],
    [-1425, "kanat", "13 yaşında bahçede sesler duymaya başladın; azizlerin sana büyük bir görev verdiğine inandın."],
    [-1429, "kilic", "17 yaşında erkek kılığına girip veliahdın yanına gittin; ordunun başında kuşatılmış bir şehri kurtardın.", null, [47.9, 1.9]],
    [-1429, "tac", "Veliahdın Reims Katedrali'nde taç giymesini sağladın.", null, [49.25, 4.03]],
    [-1431, "alev", "Düşmanlarına satıldın; 19 yaşında Rouen'de yakılarak öldürüldün. Yaklaşık 500 yıl sonra aziz ilan edildin.", null, [49.44, 1.1]]] },
  { id: "tutankamon", ad: "Tutankamon", alt: ["Tutankhamun", "Tutankhamen"], z: 1, ulke: "Mısır", alan: "Firavun", kim: "Mezarı neredeyse sağlam bulunan genç firavun", ll: [27.65, 30.9], dogum: 1341, olum: 1323, w: "Tutankhamun", k: [
    [1341, "gunes", "Güneş kursuna tapan bir firavunun yeni kurduğu başkentte doğdun."],
    [1332, "tac", "8-9 yaşında tahta çıktın; eski tanrılara dönüldü ve adın da değiştirildi.", "Mısırlılar ekmek, soğan, balık yer; bira herkesin içeceğidir. Ölümden sonraki hayata hazırlık çok önemlidir.", [25.7, 32.64]],
    [1327, "araba", "Savaş arabalarını ve avı seviyorsun; ama ayağındaki bir rahatsızlık yüzünden bastonla yürüyorsun.", null, [29.85, 31.25]],
    [1323, "piramit", "19 yaşında öldün; aceleyle hazırlanan küçük bir mezara gömüldün.", null, [25.74, 32.6]],
    [-1922, "maske", "3.000 yıldan uzun süre sonra mezarın neredeyse hiç soyulmamış olarak bulundu; altın maskenle dünyanın en ünlü firavunu oldun.", null, [25.74, 32.6]]] },
  // ================= ORTA =================
  { id: "timur", ad: "Timur", alt: ["Aksak Timur", "Emir Timur", "Tamerlane", "Timurlenk"], z: 2, ulke: "Özbekistan", alan: "Hükümdar", kim: "Semerkant merkezli imparatorluğun kurucusu", ll: [39.06, 66.83], dogum: -1336, olum: -1405, w: "Timur", k: [
    [-1336, "cadir", "Orta Asya'da, Semerkant'ın güneyinde, Moğol kökenli küçük bir Türk boyunun soyluları arasında doğdun."],
    [-1363, "ok", "Bir çatışmada sağ bacağından ve sağ elinden yaralandın; ömür boyu topalladın. Düşmanların sana bu yüzden bir lakap taktı."],
    [-1370, "tac", "Semerkant'ı başkent yaptın. Cengiz soyundan olmadığın için 'han' değil 'emir' unvanını kullandın.", "Semerkant pazarlarında Çin ipeği, Hint baharatı ve Rus kürkü satılır; ustalar mavi çinili kubbeler yapar.", [39.65, 66.96]],
    [-1402, "fil", "Hindistan'dan fillerle döndün; sonra Ankara'da bir Osmanlı sultanını yenip esir aldın.", null, [40.0, 32.9]],
    [-1405, "kubbe", "Çin'e sefere çıkarken kış ortasında Otrar'da öldün. Semerkant'taki türbenin kubbesi göz alıcı bir mavidir.", null, [42.85, 68.3]]] },
  { id: "sinan", ad: "Mimar Sinan", alt: ["Sinan", "Koca Mimar Sinan"], z: 2, ulke: "Türkiye", alan: "Mimar", kim: "Osmanlı başmimarı", ll: [38.7, 35.56], dogum: -1490, olum: -1588, w: "Mimar Sinan", k: [
    [-1490, "ev", "Kayseri yakınlarında bir köyde, Hristiyan bir ailede doğdun.", "Köylerde evler kerpiç ve taştandır; çocuklar küçük yaşta tarlada ve hayvanların başında çalışır."],
    [-1512, "kilic", "Devşirme olarak İstanbul'a getirildin; yeniçeri oldun ve marangozluk öğrendin.", null, [41.01, 28.98]],
    [-1535, "gemi", "Seferlerde ordu için köprüler ve gemiler yaptın; bir gölü geçmek için üç gemi yaptırdın.", null, [38.5, 43.0]],
    [-1557, "kubbe", "Saray başmimarı oldun. Padişah adına İstanbul'un tepelerinden birine dev bir külliye yaptın.", "İnşaatlarda binlerce işçi çalışır; taşlar gemilerle getirilir, kubbe için ahşap iskeleler kurulur.", [41.016, 28.964]],
    [-1575, "kubbe", "Edirne'de dört minareli bir cami yaptın ve ona 'ustalık eserim' dedin. 80 yaşını geçmişken hâlâ çalışıyordun.", null, [41.68, 26.56]]] },
  { id: "piri", ad: "Piri Reis", alt: ["Piri"], z: 2, ulke: "Türkiye", alan: "Denizci ve haritacı", kim: "Osmanlı amirali ve haritacı", ll: [40.41, 26.67], dogum: -1470, olum: -1553, w: "Piri Reis", k: [
    [-1470, "capa", "Çanakkale Boğazı kıyısında, denizcilerle dolu bir kasabada doğdun."],
    [-1487, "gemi", "Ünlü bir korsan olan amcanla birlikte Akdeniz'de gemilerde büyüdün.", "Kadırgalarda yüzlerce kürekçi çalışır; denizciler peksimet, zeytin ve kuru et yer.", [37.0, 15.0]],
    [-1513, "harita", "Ceylan derisi üzerine, yeni keşfedilen bir kıtanın kıyılarını da gösteren bir dünya haritası çizdin.", null, [40.41, 26.67]],
    [-1526, "kitap", "Akdeniz'in limanlarını ve kıyılarını tek tek anlatan büyük bir denizcilik kitabı yazdın.", null, [41.01, 28.98]],
    [-1553, "kilic", "80 yaşını geçmişken Hint Okyanusu'ndaki filoya komutan oldun; dönüşte Kahire'de idam edildin.", null, [30.04, 31.24]]] },
  { id: "ibnsina", ad: "İbn Sina", alt: ["Avicenna", "İbni Sina"], z: 2, ulke: "Özbekistan", alan: "Hekim ve filozof", kim: "Hekim ve filozof", ll: [39.8, 64.6], dogum: -980, olum: -1037, w: "Avicenna", k: [
    [-980, "kubbe", "Buhara yakınlarında, bir devlet memurunun oğlu olarak doğdun."],
    [-990, "kitap", "10 yaşında Kuran'ı ezberledin; 16 yaşında hasta bakmaya başladın.", "Kitaplar elle kopyalanır; bir kitabın kopyası aylar sürer ve çok pahalıdır."],
    [-997, "sise", "Ağır hasta hükümdarı iyileştirdin; ödül olarak saray kütüphanesini kullanma izni istedin.", null, [39.77, 64.42]],
    [-1025, "kitap", "Beş ciltlik büyük bir tıp kitabı yazdın; Avrupa'da 600 yıl ders kitabı olarak okundu.", null, [32.65, 51.67]],
    [-1037, "yildiz", "Felsefe, astronomi ve müzik üzerine de yazdın. Hemedan'da öldün; Avrupa'da Latince adınla tanınırsın.", null, [34.8, 48.51]]] },
  { id: "hurrem", ad: "Hürrem Sultan", alt: ["Hürrem", "Roksolana"], z: 2, ulke: "Ukrayna", alan: "Padişah eşi", kim: "Kanuni Sultan Süleyman'ın eşi", ll: [49.41, 24.6], dogum: -1505, olum: -1558, w: "Hurrem Sultan", k: [
    [-1505, "ev", "Bugünkü Ukrayna'da, anlatılana göre bir papazın kızı olarak doğdun."],
    [-1520, "zincir", "Kırım akıncıları seni kaçırdı; köle pazarında satılıp bir saraya getirildin.", "Saraydaki genç kızlar okuma yazma, müzik, dikiş ve saray adabı öğrenir.", [41.01, 28.98]],
    [-1534, "yuzuk", "Padişah seninle resmen evlendi; bu yüzyıllardır görülmemiş bir şeydi.", null, [41.01, 28.98]],
    [-1540, "kalem", "Padişah seferdeyken ona mektuplar ve şiirler yazdın, saraydaki haberleri bildirdin.", null, [41.01, 28.98]],
    [-1552, "kubbe", "İstanbul'da hamam, cami ve aşevi yaptırdın; Kudüs'te yoksullar için bir imaret kurdurdun.", null, [41.007, 28.979]]] },
  { id: "mansamusa", ad: "Mansa Musa", alt: ["Musa", "Kankan Musa"], z: 2, ulke: "Mali", alan: "Hükümdar", kim: "Mali İmparatorluğu'nun hükümdarı", ll: [11.38, -8.38], dogum: -1280, olum: -1337, w: "Mansa Musa", k: [
    [-1280, "nehir", "Batı Afrika'da, Nijer Nehri kıyısında güçlü bir krallığın hanedan ailesinde doğdun."],
    [-1312, "tac", "Atlantik'i keşfetmeye giden bir hükümdarın yerine tahta geçtin; o hiç geri dönmedi."],
    [-1324, "deve", "Binlerce kişi ve altın yüklü develerle hacca gittin.", "Sahra'yı geçen kervanlar tuz, altın ve kitap taşır; yolculuk aylar sürer.", [21.42, 39.83]],
    [-1324, "sikke", "Kahire'de o kadar çok altın dağıttın ki altının değeri yıllarca düşük kaldı.", null, [30.04, 31.24]],
    [-1327, "kubbe", "Timbuktu'da kerpiçten büyük bir cami yaptırdın; kent bilginlerin buluşma yeri oldu. Tarihin en zengin insanlarından biri sayılırsın.", null, [16.77, -3.0]]] },
  { id: "konfucyus", ad: "Konfüçyüs", alt: ["Kong Fuzi", "Confucius"], z: 2, ulke: "Çin", alan: "Düşünür ve öğretmen", kim: "Çinli düşünür ve öğretmen", ll: [35.6, 116.99], dogum: 551, olum: 479, w: "Confucius", k: [
    [551, "kalkan", "Doğu Çin'de küçük bir devlette, yaşlı bir askerin oğlu olarak doğdun; baban sen çok küçükken öldü.", "Çin küçük devletlere bölünmüş; soylular tunç kaplarla atalarına sunu yapar."],
    [532, "terazi", "Gençken tahıl ambarı ve hayvan sürüsü kâtipliği yaptın."],
    [500, "kitap", "Devletinde yüksek bir yargı görevine geldin; ama hükümdar öğütlerini dinlemeyince ayrıldın."],
    [495, "araba", "Öğrencilerinle yıllarca devletleri dolaşıp sözünü dinleyecek bir hükümdar aradın."],
    [479, "parsomen", "Öldükten sonra öğrencilerin sözlerini topladı. Düşüncelerin 2.000 yıl boyunca Çin devletinin temeli oldu."]] },
  { id: "ramses", ad: "II. Ramses", alt: ["Ramses", "Büyük Ramses", "Ramesses II"], z: 2, ulke: "Mısır", alan: "Firavun", kim: "Mısır firavunu", ll: [30.8, 31.82], dogum: 1303, olum: 1213, w: "Ramesses II", k: [
    [1303, "kilic", "Asker kökenli bir ailede doğdun; deden firavun olunca saraya girdin."],
    [1279, "tac", "Yaklaşık 25 yaşında firavun oldun.", "Köylüler Nil taşkınıyla tarla eker; taşkın aylarında devletin büyük inşaatlarında çalışır.", [25.7, 32.64]],
    [1274, "araba", "Kadeş'te Hititlerle savaştın; savaşı tapınak duvarlarına büyük bir zafer olarak yazdırdın.", null, [34.56, 36.52]],
    [1264, "tapinak", "Nubya'da kayaya oyulmuş, önünde kendi dev heykellerinin oturduğu tapınaklar yaptırdın.", null, [22.34, 31.63]],
    [1259, "parsomen", "Hititlerle bilinen en eski barış antlaşmalarından birini yaptın. 66 yıl tahtta kaldın."]] },
  { id: "hannibal", ad: "Hannibal", alt: ["Hannibal Barca", "Annibal"], z: 2, ulke: "Tunus", alan: "Komutan", kim: "Kartacalı komutan", ll: [36.85, 10.32], dogum: 247, olum: 183, w: "Hannibal", k: [
    [247, "capa", "Kuzey Afrika'da büyük bir ticaret kentinde, ünlü bir komutanın oğlu olarak doğdun."],
    [238, "kilic", "9 yaşında babanla İspanya'ya gittin; bir sunağın önünde Roma'ya ömür boyu düşman olacağına yemin ettin.", null, [38.0, -1.0]],
    [218, "fil", "Ordunla ve savaş fillerinle karlı Alpleri aştın.", "Ordular çadırlarda konaklar; yiyecek yol boyunca toplanır, kışın sefer pek yapılmaz.", [45.2, 6.9]],
    [216, "kalkan", "Cannae'de kendinden büyük bir Roma ordusunu kuşatıp yok ettin.", null, [41.31, 16.13]],
    [183, "sise", "Yıllar sonra Anadolu'da, Bitinya'da sürgündeyken Romalılara teslim edilmemek için zehir içtin.", null, [40.77, 29.43]]] },
  { id: "spartakus", ad: "Spartaküs", alt: ["Spartacus"], z: 2, ulke: "Bulgaristan", alan: "Gladyatör ve isyan önderi", kim: "Roma'ya karşı köle isyanının önderi", ll: [42.0, 23.1], dogum: 110, olum: 71, w: "Spartacus", k: [
    [110, "dag", "Balkanlar'da, Trakya'da doğdun; doğum yılını ve aileni kimse bilmiyor."],
    [75, "zincir", "Köle olarak İtalya'ya satıldın ve bir gladyatör okuluna kondun.", "İtalya'da nüfusun büyük bir kısmı köledir; tarlalarda, madenlerde ve evlerde çalışırlar.", [41.08, 14.25]],
    [73, "kilic", "Arkadaşlarınla mutfaktan aldığınız bıçaklarla okuldan kaçtınız.", null, [41.08, 14.25]],
    [73, "dag", "Bir yanardağın yamacına sığındınız; ordun on binlerce kaçak köleye ulaştı.", null, [40.82, 14.43]],
    [71, "kalkan", "Roma'nın en zengin adamının ordusuna yenildin; yakalanan arkadaşların bir yol boyunca çarmıha gerildi.", null, [40.5, 15.5]]] },
  { id: "evliya", ad: "Evliya Çelebi", alt: ["Evliya"], z: 2, ulke: "Türkiye", alan: "Gezgin ve yazar", kim: "Osmanlı gezgini ve yazar", ll: [41.01, 28.98], dogum: -1611, olum: -1682, w: "Evliya Çelebi", k: [
    [-1611, "yuzuk", "İstanbul'da, sarayın kuyumcubaşısının oğlu olarak doğdun."],
    [-1630, "kitap", "Anlattığına göre rüyanda Peygamber'den 'şefaat' isteyecekken dilin sürçtü ve 'seyahat' dedin."],
    [-1640, "at", "Kırk yıl boyunca at sırtında Osmanlı topraklarını ve komşularını dolaştın.", "Yolcular kervansaraylarda kalır; eşkıya korkusuyla kafile hâlinde yolculuk edilir.", [39.9, 41.27]],
    [-1665, "harita", "Bir elçilik heyetiyle Viyana'ya gittin; şehrin kiliselerini ve saatlerini uzun uzun anlattın.", null, [48.21, 16.37]],
    [-1682, "kitap", "Gördüklerini on ciltlik bir kitapta topladın; anlattıklarının bazıları gerçek, bazıları abartılı.", null, [30.04, 31.24]]] },
  { id: "darwin", ad: "Charles Darwin", alt: ["Darwin"], z: 2, ulke: "Birleşik Krallık (İngiltere)", alan: "Doğa bilimci", kim: "Evrim kuramının doğa bilimcisi", ll: [52.71, -2.75], dogum: -1809, olum: -1882, w: "Charles Darwin", k: [
    [-1809, "sise", "İngiltere'de zengin bir doktorun oğlu olarak doğdun; deden ünlü bir şair ve doktordu."],
    [-1825, "kitap", "Tıp okumaya başladın ama ameliyatları izlemeye dayanamadın; böcek toplamayı daha çok sevdin.", "Ameliyatlar uyuşturucu ilaç olmadan yapılıyor; hasta bağırırken öğrenciler izliyor.", [55.95, -3.19]],
    [-1831, "gemi", "22 yaşında bir gemiyle beş yıllık bir dünya yolculuğuna çıktın.", null, [50.37, -4.14]],
    [-1835, "kus", "Bir takımadada, her adada gagası farklı küçük kuşlar gördün.", null, [-0.9, -90.97]],
    [-1859, "kitap", "Türlerin nasıl ortaya çıktığını anlatan kitabın ilk gün tükendi; tartışması hâlâ sürüyor.", null, [51.33, 0.05]]] },
  { id: "tesla", ad: "Nikola Tesla", alt: ["Tesla"], z: 2, ulke: "Hırvatistan", alan: "Mucit ve mühendis", kim: "Mucit ve elektrik mühendisi", ll: [44.57, 15.32], dogum: -1856, olum: -1943, w: "Nikola Tesla", k: [
    [-1856, "simsek", "Avusturya İmparatorluğu'nun sınır bölgesinde, bir papazın oğlu olarak doğdun; bir fırtınalı gecede doğduğun anlatılır."],
    [-1884, "gemi", "Cebinde birkaç sentle Amerika'ya göç ettin; ünlü bir mucidin şirketinde çalışmaya başladın.", "Göçmenler okyanusu buharlı gemilerin alt katlarında, kalabalık koğuşlarda geçer.", [40.7, -74.0]],
    [-1888, "disli", "Alternatif akımla çalışan bir motor geliştirdin; bugün evlerimize gelen elektrik böyle akar.", "Şehirlerde gaz lambaları yerini elektrik ampullerine bırakmaya başlıyor.", [40.7, -74.0]],
    [-1899, "simsek", "Laboratuvarında metrelerce uzunlukta yapay şimşekler yarattın.", null, [38.83, -104.82]],
    [-1943, "kus", "Son yıllarını New York'ta bir otel odasında güvercinlere bakarak geçirdin. Bir manyetik ölçü birimi adını taşır.", null, [40.75, -73.99]]] },
  { id: "nightingale", ad: "Florence Nightingale", alt: ["Nightingale", "Lambalı Kadın"], z: 2, ulke: "İtalya", alan: "Hemşire", kim: "Modern hemşireliğin kurucusu", ll: [43.77, 11.25], dogum: -1820, olum: -1910, w: "Florence Nightingale", k: [
    [-1820, "saray", "Zengin bir İngiliz ailesinin kızı olarak, ailenin uzun bir İtalya yolculuğu sırasında doğdun."],
    [-1837, "kitap", "Ailen evlenmeni beklerken sen hastalara bakmak istedin; o zaman bu iş saygın sayılmıyordu.", null, [51.0, -1.6]],
    [-1854, "lamba", "Bir savaşta Üsküdar'daki askerî hastaneye gittin; geceleri elinde lambayla koğuşları dolaştın.", "Mikroplar henüz bilinmiyor; yaralılar kirli çarşaflarda yatıyor ve çoğu enfeksiyondan ölüyor.", [41.0, 29.02]],
    [-1858, "harita", "Askerlerin çoğunun yaralardan değil hastalıklardan öldüğünü renkli istatistik çizimleriyle gösterdin.", null, [51.5, -0.12]],
    [-1860, "kitap", "Londra'da ilk modern hemşirelik okulunu kurdun.", null, [51.5, -0.12]]] },
  { id: "michelangelo", ad: "Michelangelo", alt: ["Michelangelo Buonarroti", "Mikelanj"], z: 2, ulke: "İtalya", alan: "Heykeltıraş ve ressam", kim: "Rönesans heykeltıraşı, ressam ve mimar", ll: [43.64, 11.98], dogum: -1475, olum: -1564, w: "Michelangelo", k: [
    [-1475, "keski", "Toskana'da küçük bir kasabada doğdun; taş ustası bir ailenin yanında bir sütanneyle büyüdün."],
    [-1490, "saray", "Floransa'nın en güçlü ailesinin sarayında, onların çocuklarıyla birlikte yetiştin.", null, [43.77, 11.25]],
    [-1504, "heykel", "Başkalarının yarım bıraktığı dev bir mermer bloktan beş metrelik bir genç heykeli yonttun.", null, [43.77, 11.25]],
    [-1512, "firca", "Yıllarca yüksek bir iskele üstünde çalışarak bir şapelin tavanını boyadın.", "Sanatçılar zengin aileler ve kilise için çalışır; boyaları kendileri öğütüp karıştırır.", [41.9, 12.45]],
    [-1564, "kubbe", "Roma'daki büyük bazilikanın kubbesini tasarladın; 88 yaşında öldün.", null, [41.9, 12.45]]] },
  { id: "hatsepsut", ad: "Hatşepsut", alt: ["Hatshepsut"], z: 2, ulke: "Mısır", alan: "Firavun", kim: "Firavun olan Mısır kraliçesi", ll: [25.7, 32.64], dogum: 1507, olum: 1458, w: "Hatshepsut", k: [
    [1507, "gunes", "Nil kıyısında güçlü bir firavunun kızı olarak doğdun."],
    [1479, "tac", "Kocan ölünce küçük üvey oğlunun yerine ülkeyi yönetmeye başladın."],
    [1473, "heykel", "Kendini firavun ilan ettin; heykellerinde takma sakallı ve erkek kılığında gösterildin.", "Firavunun gücü tanrılardan gelir; tapınaklar aynı zamanda büyük çiftlik ve ambardır."],
    [1470, "gemi", "Uzak bir ülkeye gemiler gönderdin; tütsü ağaçları ve maymunlarla döndüler.", null, [26.0, 34.0]],
    [1458, "tapinak", "Kayalıklara yaslanan teraslı tapınağın bugün de ayakta. Ölümünden sonra adın birçok anıttan kazındı.", null, [25.74, 32.61]]] },
  { id: "attila", ad: "Attila", alt: ["Atilla", "Attila the Hun"], z: 2, ulke: "Bilinmiyor (Orta Avrupa bozkırları)", alan: "Hükümdar", kim: "Hun hükümdarı", ll: [47.0, 20.0], dogum: -406, olum: -453, w: "Attila", k: [
    [-406, "cadir", "Tuna'nın ötesindeki bozkırda, güçlü bir kavmin hükümdar ailesinde doğdun."],
    [-434, "tac", "Ağabeyinle birlikte tahta çıktın; birkaç yıl sonra tek başına hükümdar oldun.", "Atlı göçebeler çadırlarda yaşar; hükümdarın ahşap sarayında ziyafetler verilir."],
    [-447, "kilic", "Doğu Roma'yı yenip ağır vergiye bağladın; imparator sana her yıl altın göndermek zorunda kaldı.", null, [42.0, 25.0]],
    [-452, "kule", "İtalya'ya girdin ama Papa ile görüştükten sonra geri döndün.", null, [45.44, 12.33]],
    [-453, "kadeh", "Düğün gecende burnun kanayarak öldün; mezarının yeri bilinmiyor."]] },
  { id: "gandi", ad: "Mahatma Gandi", alt: ["Gandhi", "Gandi", "Mohandas Gandhi"], z: 2, ulke: "Hindistan", alan: "Bağımsızlık önderi", kim: "Hindistan'ın bağımsızlık önderi", ll: [21.64, 69.6], dogum: -1869, olum: -1948, w: "Mahatma Gandhi", k: [
    [-1869, "capa", "Batı Hindistan'da bir liman kentinde, küçük bir prensliğin başbakanının oğlu olarak doğdun."],
    [-1888, "kitap", "İngiltere'de hukuk okudun; annene et yemeyeceğine söz vermiştin.", null, [51.5, -0.12]],
    [-1893, "tren", "Güney Afrika'da birinci sınıf biletin olduğu halde rengin yüzünden trenden atıldın.", null, [-29.6, 30.38]],
    [-1930, "cark", "Halkına kendi kumaşını kendi dokumasını önerdin; tuz vergisine karşı yüzlerce kilometre yürüdün.", "Köylerin çoğunda elektrik yok; insanlar tarlada çalışır, kumaşı el tezgâhlarında dokur.", [20.89, 72.8]],
    [-1948, "kus", "Ülken bağımsız oldu; birkaç ay sonra bir suikastçı seni vurdu.", null, [28.6, 77.21]]] },
  { id: "vangogh", ad: "Vincent van Gogh", alt: ["Van Gogh"], z: 2, ulke: "Hollanda", alan: "Ressam", kim: "Hollandalı ressam", ll: [51.47, 4.66], dogum: -1853, olum: -1890, w: "Vincent van Gogh", k: [
    [-1853, "ev", "Hollanda'da bir köyde, bir papazın oğlu olarak doğdun."],
    [-1869, "cerceve", "16 yaşında amcanın ortak olduğu bir sanat galerisinde çalışmaya başladın.", null, [52.08, 4.3]],
    [-1880, "kalem", "Kömür madencilerine vaizlik yaptın; 27 yaşında ressam olmaya karar verdin.", "Madenciler günde 12 saatten fazla yerin altında çalışır; çocuklar da madenlerde çalışıyor.", [50.4, 3.9]],
    [-1888, "cicek", "Güney Fransa'da sarı bir ev kiraladın, ayçiçekleri boyadın. Bir kriz sırasında kulağını kestin.", null, [43.68, 4.63]],
    [-1890, "yildiz", "Hastanede yıldızlı bir gece manzarası boyadın. 37 yaşında öldün; hayattayken neredeyse hiç tablo satamadın.", null, [49.07, 2.17]]] },
  { id: "harezmi", ad: "Harezmi", alt: ["El-Harezmi", "al-Khwarizmi", "Muhammed bin Musa"], z: 2, ulke: "Özbekistan", alan: "Matematikçi", kim: "Cebirin kurucusu sayılan matematikçi", ll: [41.38, 60.36], dogum: -780, olum: -850, w: "Muhammad ibn Musa al-Khwarizmi", k: [
    [-780, "nehir", "Aral Gölü'nün güneyinde, büyük bir nehrin deltasındaki bir bölgede doğdun."],
    [-813, "kitap", "Halifenin Bağdat'taki bilim akademisinde çalışmaya başladın.", "Bağdat'ta kâğıt yeni yayıldı; Yunanca, Farsça ve Sanskritçe kitaplar Arapçaya çevriliyor.", [33.31, 44.36]],
    [-820, "terazi", "Miras ve ticaret hesaplarını çözmek için denklemleri anlatan bir kitap yazdın; adı yeni bir bilim dalının adı oldu.", null, [33.31, 44.36]],
    [-825, "rakam", "Hint sayılarını ve sıfırı anlatan kitabın sayesinde Avrupa bugünkü rakamları öğrendi.", null, [33.31, 44.36]],
    [-833, "yildiz", "Bir dünya coğrafyası ve yıldız tabloları hazırladın. Adından bilgisayarların temel kavramlarından biri türedi.", null, [33.31, 44.36]]] },
  // ================= ZOR =================
  { id: "enheduanna", ad: "Enheduanna", alt: ["Enheduana"], z: 3, ulke: "Irak", alan: "Rahibe ve şair", kim: "Adı bilinen ilk yazar, Ur başrahibesi", ll: [33.1, 44.1], dogum: 2285, olum: 2250, w: "Enheduanna", k: [
    [2285, "tac", "Mezopotamya'da yeni kurulan ilk imparatorluğun kralının kızı olarak doğdun."],
    [2260, "yildiz", "Baban seni Ur kentindeki ay tanrısının başrahibesi yaptı.", "Tapınaklar aynı zamanda ambar ve işyeridir; kâtipler kil tabletlere hesap yazar.", [30.96, 46.1]],
    [2255, "tablet", "Bir tanrıça için uzun ilahiler yazdın ve altına kendi adını koydun.", null, [30.96, 46.1]],
    [2250, "kilic", "Bir isyanda tapınaktan sürüldün; sonra geri döndün.", null, [30.96, 46.1]],
    [-1927, "tablet", "4.000 yıl sonra Ur kazılarında resminin olduğu bir disk bulundu. Adı bilinen ilk yazar sensin.", null, [30.96, 46.1]]] },
  { id: "ezop", ad: "Ezop", alt: ["Aisopos", "Aesop"], z: 3, ulke: "Bilinmiyor (Anadolu ya da Trakya)", alan: "Masalcı", kim: "Antik Yunan masalcısı", ll: [39.0, 30.0], dogum: 620, olum: 564, w: "Aesop", k: [
    [620, "zincir", "Anadolu'da ya da Trakya'da doğdun; anlatılanlara göre köle olarak dünyaya geldin."],
    [600, "ada", "Bir Ege adasında, bir efendinin kölesi olarak çalıştın.", "Köleler evlerde, tarlalarda ve atölyelerde çalışır; bazıları efendisinin işlerini yönetir.", [37.75, 26.97]],
    [590, "tilki", "Hayvanların konuştuğu kısa, dersli hikâyeler anlattın: tilki ile üzüm, karga ile tilki…", null, [37.75, 26.97]],
    [570, "kitap", "Zekân sayesinde özgürlüğüne kavuştun."],
    [564, "dag", "Delfi'de rahiplerle tartıştıktan sonra uçurumdan atılarak öldürüldüğün anlatılır. Masalların 2.500 yıldır anlatılıyor.", null, [38.48, 22.5]]] },
  { id: "hipatia", ad: "Hipatia", alt: ["Hypatia"], z: 3, ulke: "Mısır", alan: "Matematikçi ve filozof", kim: "İskenderiyeli matematikçi ve filozof", ll: [31.2, 29.92], dogum: -355, olum: -415, w: "Hypatia", k: [
    [-355, "capa", "Mısır'ın büyük liman kentinde, bir matematikçinin kızı olarak doğdun."],
    [-380, "yildiz", "Babanla birlikte eski astronomi kitaplarının yeni basımlarını hazırladın."],
    [-400, "kitap", "Kentteki felsefe okulunun başına geçtin; öğrencilerin farklı dinlerden geliyordu.", "Kent, Hristiyanlar, Yahudiler ve eski dinlere bağlı olanlar arasında gerginliklerle dolu."],
    [-410, "pusula", "Bir öğrencin için gökyüzünü ölçen bir astrolab ve suyun yoğunluğunu ölçen bir alet tasarladın."],
    [-415, "kitap", "Kentteki siyasi çatışmalar sırasında bir kalabalık seni öldürdü."]] },
  { id: "zhenghe", ad: "Zheng He", alt: ["Çeng Ho", "Cheng Ho"], z: 3, ulke: "Çin", alan: "Amiral", kim: "Ming Çin'inin büyük amirali", ll: [24.7, 102.6], dogum: -1371, olum: -1433, w: "Zheng He", k: [
    [-1371, "kubbe", "Güneybatı Çin'de, Müslüman bir ailede doğdun; baban hacca gitmişti."],
    [-1381, "zincir", "Bölgeni fetheden ordu seni esir aldı; saray hizmetine verildin.", null, [39.9, 116.4]],
    [-1405, "gemi", "Yüzlerce gemi ve on binlerce denizciden oluşan bir filonun komutanı oldun.", "Gemilerde pirinç, tuzlu sebze, çay taşınır; denizciler aylarca açık denizde kalır.", [32.06, 118.8]],
    [-1415, "zurafa", "Seferlerinin ardından imparatora Doğu Afrika'dan bir zürafa getirildi; saraylılar onu efsanevi bir hayvan sandı.", null, [-3.22, 40.12]],
    [-1433, "harita", "Yedi büyük deniz seferinin sonuncusunda öldün. Ülken bu seferlerden sonra denize açılmaktan vazgeçti.", null, [11.25, 75.78]]] },
  { id: "ulugbey", ad: "Uluğ Bey", alt: ["Ulug Beg", "Uluğbey"], z: 3, ulke: "İran", alan: "Hükümdar ve astronom", kim: "Astronom Timurlu hükümdar", ll: [36.43, 48.79], dogum: -1394, olum: -1449, w: "Ulugh Beg", k: [
    [-1394, "cadir", "Dedenin seferlerinden biri sırasında İran'da bir ordugâhta doğdun."],
    [-1409, "tac", "15 yaşında Semerkant'ın yöneticisi oldun.", null, [39.65, 66.96]],
    [-1420, "kubbe", "Semerkant'ta bir medrese yaptırdın ve orada kendin ders verdin.", "Medreselerde öğrenciler matematik, astronomi ve hukuk okur, küçük hücrelerde kalır.", [39.65, 66.98]],
    [-1428, "yildiz", "Dev bir gözlemevi kurdun ve 1.000'i aşkın yıldızın yerini ölçtün.", null, [39.67, 67.0]],
    [-1449, "kilic", "Tahta çıktıktan iki yıl sonra kendi oğlunun adamları tarafından öldürüldün.", null, [39.65, 66.96]]] },
  { id: "murasaki", ad: "Murasaki Şikibu", alt: ["Murasaki Shikibu", "Murasaki"], z: 3, ulke: "Japonya", alan: "Yazar", kim: "Genji'nin Hikâyesi'nin yazarı", ll: [35.01, 135.77], dogum: -973, olum: -1014, w: "Murasaki Shikibu", k: [
    [-973, "yelpaze", "Bir adalar ülkesinin imparatorluk başkentinde, bilgin bir memurun kızı olarak doğdun.", "Saray kadınları kat kat ipek giysiler giyer, birbirlerine şiirle mektup yazar."],
    [-985, "kitap", "Ağabeyinin derslerini kapıdan dinleyip ondan önce öğrendin; baban 'keşke erkek doğsaydın' dedi."],
    [-1001, "kalem", "Kocan öldükten sonra yazmaya başladın."],
    [-1006, "yelpaze", "İmparatoriçenin hizmetine girdin; saray hayatını anlatan bir günlük tuttun."],
    [-1010, "kitap", "Yakışıklı bir prensin aşklarını anlatan uzun hikâyen dünyanın ilk romanı sayılır."]] },
  { id: "kasgarli", ad: "Kaşgarlı Mahmud", alt: ["Kaşgarlı", "Mahmud al-Kashgari"], z: 3, ulke: "Kırgızistan", alan: "Dilci ve sözlükçü", kim: "Divanü Lügati't-Türk'ün yazarı", ll: [42.5, 77.5], dogum: -1008, olum: -1105, w: "Mahmud al-Kashgari", k: [
    [-1008, "dag", "Büyük bir dağ gölünün kıyısında, Karahanlı hanedanına mensup bir ailede doğdun."],
    [-1057, "at", "Türk boylarını tek tek dolaşıp dillerini, atasözlerini ve şiirlerini derledin.", "Bozkırda kentler kervan yollarının üstündedir; insanlar hem göçebe hem yerleşik yaşar.", [39.47, 75.99]],
    [-1072, "kitap", "Bağdat'ta Araplara Türkçeyi öğretmek için büyük bir sözlük yazdın.", null, [33.31, 44.36]],
    [-1074, "harita", "Kitabına Türk ülkelerini gösteren yuvarlak bir dünya haritası çizdin.", null, [33.31, 44.36]],
    [-1915, "kitap", "Kitabının bilinen tek nüshası yüzyıllar sonra İstanbul'da bir sahafta bulundu.", null, [41.01, 28.96]]] },
  { id: "takiyuddin", ad: "Takiyüddin", alt: ["Takiyüddin Râsıd", "Taqi ad-Din"], z: 3, ulke: "Suriye", alan: "Astronom ve mühendis", kim: "Osmanlı astronomu ve mühendis", ll: [33.51, 36.29], dogum: -1526, olum: -1585, w: "Taqi ad-Din Muhammad ibn Ma'ruf", k: [
    [-1526, "kitap", "Şam'da bir bilgin ailesinde doğdun."],
    [-1551, "disli", "Buharla döndürülen bir şiş tasarlayıp kitabına yazdın.", "Mekanik saatler çok değerlidir; çoğu Avrupa'dan getirilir.", [30.04, 31.24]],
    [-1560, "terazi", "Mısır'da kadılık yaptın; boş zamanlarında saatler ve makineler tasarladın.", null, [30.04, 31.24]],
    [-1577, "teleskop", "İstanbul'da büyük bir gözlemevi kurdun; o yıl gökte parlak bir kuyruklu yıldız gördün.", null, [41.03, 28.98]],
    [-1580, "kule", "Gözlemevin açıldıktan üç yıl sonra yıktırıldı.", null, [41.03, 28.98]]] },
  { id: "lovelace", ad: "Ada Lovelace", alt: ["Ada", "Ada Byron", "Lovelace"], z: 3, ulke: "Birleşik Krallık (İngiltere)", alan: "Matematikçi", kim: "İlk bilgisayar programını yazan matematikçi", ll: [51.51, -0.13], dogum: -1815, olum: -1852, w: "Ada Lovelace", k: [
    [-1815, "kalem", "Londra'da ünlü bir şairin kızı olarak doğdun; baban sen bebekken ülkeyi terk etti."],
    [-1828, "kanat", "12 yaşında buharla çalışan bir uçan makine tasarlamaya çalıştın; kuşların kanatlarını inceledin.", "Soylu kızlar evde özel öğretmenlerden ders alır; üniversiteye giremezler."],
    [-1833, "disli", "Bir davette dişlilerle hesap yapan bir makineyle ve onun mucidiyle tanıştın."],
    [-1843, "kitap", "O makine için notlar yazdın; bunlardan biri ilk bilgisayar programı sayılır."],
    [-1852, "nota", "Makinelerin bir gün müzik bile besteleyebileceğini öngördün. 36 yaşında öldün."]] },
  { id: "yisunsin", ad: "Yi Sun-sin", alt: ["Yi Sun Sin", "Amiral Yi"], z: 3, ulke: "Güney Kore", alan: "Amiral", kim: "Koreli amiral", ll: [37.57, 126.98], dogum: -1545, olum: -1598, w: "Yi Sun-sin", k: [
    [-1545, "saray", "Bir yarımadanın başkentinde, yoksullaşmış soylu bir ailede doğdun."],
    [-1576, "ok", "Askerî sınavı geçip subay oldun; dürüstlüğün yüzünden iki kez rütbeni kaybettin.", "Devlet görevine sınavla girilir; adaylar ok atma, binicilik ve klasik kitaplardan sınanır."],
    [-1592, "gemi", "Üstü dikenli zırhla kaplı 'kaplumbağa gemileri'yle denizde düşmanı durdurdun.", null, [34.84, 128.43]],
    [-1597, "gemi", "Elinde yalnızca 13 gemi kalmışken yüzlerce gemilik bir düşman filosunu durdurdun.", null, [34.57, 126.3]],
    [-1598, "kalkan", "Son deniz savaşında vuruldun; 'ölümümü duyurmayın' dediğin anlatılır.", null, [34.95, 127.85]]] },
  { id: "nzinga", ad: "Kraliçe Nzinga", alt: ["Nzinga", "Njinga"], z: 3, ulke: "Angola", alan: "Kraliçe", kim: "Ndongo ve Matamba kraliçesi", ll: [-9.5, 15.0], dogum: -1583, olum: -1663, w: "Nzinga of Ndongo and Matamba", k: [
    [-1583, "tac", "Orta Afrika'da bir kralın kızı olarak doğdun; doğarken göbek bağının boynuna dolandığı anlatılır."],
    [-1622, "saray", "Portekiz valisiyle görüşmeye gittin; sana sandalye verilmeyince bir hizmetkârının sırtına oturdun.", null, [-8.84, 13.23]],
    [-1624, "tac", "Kraliçe oldun ve köle ticareti yapan Portekizlilere karşı savaştın.", "Kıyıdan her yıl binlerce insan esir olarak gemilerle okyanusun öbür yakasına götürülüyor."],
    [-1631, "kilic", "Komşu bir krallığı alıp orayı yeni üssün yaptın; savaşları bizzat yönettin.", null, [-9.5, 16.5]],
    [-1663, "kalkan", "80 yaşını geçince öldün; bugün Angola'nın ulusal kahramanısın."]] },
  { id: "toussaint", ad: "Toussaint Louverture", alt: ["Toussaint", "Louverture"], z: 3, ulke: "Haiti", alan: "Devrim önderi", kim: "Haiti Devrimi'nin önderi", ll: [19.76, -72.2], dogum: -1743, olum: -1803, w: "Toussaint Louverture", k: [
    [-1743, "bitki", "Karayipler'de bir şeker plantasyonunda köle olarak doğdun.", "Plantasyonlarda köleler gün doğmadan şeker kamışı kesmeye başlar; çoğu birkaç yıl içinde ölür."],
    [-1776, "zincir", "Otuzlu yaşlarında özgürlüğüne kavuştun; okuma yazma öğrenmiştin."],
    [-1791, "kilic", "Adada büyük bir köle isyanı başladı; kısa sürede isyancıların en usta komutanı oldun."],
    [-1801, "parsomen", "Adanın yönetimini ele geçirip bir anayasa ilan ettin."],
    [-1803, "dag", "Napolyon'un askerleri seni hileyle yakaladı; Fransa'da soğuk bir dağ kalesinde öldün. Bir yıl sonra adan bağımsız oldu.", null, [46.87, 6.39]]] },
  { id: "cezeri", ad: "El Cezeri", alt: ["Cezeri", "al-Jazari", "İsmail el-Cezeri"], z: 3, ulke: "Türkiye", alan: "Mühendis ve mucit", kim: "Artuklu mühendisi, robotların öncüsü", ll: [37.33, 42.19], dogum: -1136, olum: -1206, w: "Ismail al-Jazari", k: [
    [-1136, "nehir", "Dicle kıyısında, ırmağın kucakladığı bir kentte doğdun."],
    [-1174, "saray", "Artuklu sultanlarının sarayında baş mühendis oldun.", "Saraylarda su çarkları, çeşmeler ve otomatik oyuncaklar soyluları eğlendirir.", [37.91, 40.24]],
    [-1200, "fil", "Bir fil, kule ve kuşlardan oluşan, yarım saatte bir ses çıkaran dev bir su saati tasarladın.", null, [37.91, 40.24]],
    [-1205, "disli", "Elli makinenin nasıl yapılacağını resimleriyle anlatan bir kitap yazdın; aralarında kendi kendine hareket eden figürler de vardı.", null, [37.91, 40.24]],
    [-1206, "kitap", "Kitabın mühendislik tarihinin en önemli kitaplarından sayılır.", null, [37.91, 40.24]]] },
  { id: "sabiha", ad: "Sabiha Gökçen", alt: ["Sabiha"], z: 3, ulke: "Türkiye", alan: "Pilot", kim: "İlk Türk kadın savaş pilotu", ll: [40.19, 29.06], dogum: -1913, olum: -2001, w: "Sabiha Gökçen", k: [
    [-1913, "ev", "Bursa'da doğdun; küçük yaşta anneni ve babanı kaybettin.", "Ülke yıllardır savaşta; kentlerde yetimhaneler kalabalık."],
    [-1925, "kitap", "Bir devlet başkanı seni manevi kızı olarak yanına aldı ve okuttu.", null, [39.93, 32.86]],
    [-1935, "ucak", "Bir paraşüt ve uçuş gösterisini izledikten sonra pilot olmaya karar verdin.", null, [39.93, 32.86]],
    [-1937, "ucak", "Bir askerî harekâtta savaş uçağı kullandın; dünyanın ilk kadın savaş pilotlarından biri oldun.", null, [39.78, 30.52]],
    [-2001, "ucak", "İstanbul'daki bir havalimanı bugün senin adını taşıyor.", null, [40.9, 29.31]]] },
  { id: "pachacuti", ad: "Pachacuti", alt: ["Pachacútec", "Paçakuti"], z: 3, ulke: "Peru", alan: "Hükümdar", kim: "İnka İmparatorluğu'nu kuran hükümdar", ll: [-13.53, -71.97], dogum: -1418, olum: -1472, w: "Pachacuti", k: [
    [-1418, "dag", "And Dağları'nda, küçük bir krallığın başkentinde, kralın oğullarından biri olarak doğdun."],
    [-1438, "kalkan", "Düşman kuşatmasında baban ve veliaht kardeşin kaçtı; sen şehri savundun ve kazandın."],
    [-1438, "tac", "Kral oldun ve 'dünyayı değiştiren' anlamına gelen bir ad aldın.", "Halk patates ve mısır yetiştirir, lamalarla yük taşır; vergi para yerine çalışarak ödenir."],
    [-1450, "dag", "Dağların tepesinde, bulutların arasında bir saray kentin yapıldı.", null, [-13.16, -72.55]],
    [-1471, "yol", "Küçük krallığını dev bir imparatorluğa çevirdin; ülkeni yollar ve ambarlarla birbirine bağladın."]] }
];
// Tahmin listesine karışan, oyunda olmayan ünlüler: tahmin etmeyi zorlaştırır
window.KIM_SASIRTMA = ["Homeros", "Platon", "Pisagor", "Arşimet", "Öklid", "Herodot", "Perikles", "Leonidas", "Nefertiti", "Keops", "Hammurabi", "Büyük Kiros", "I. Darius", "Kserkses", "Augustus", "Neron", "Marcus Aurelius", "Büyük Konstantin", "Justinianus", "Theodora", "Orhan Gazi", "Yıldırım Bayezid", "II. Murad", "IV. Murad", "Hacı Bektaş Veli", "Karacaoğlan", "Pir Sultan Abdal", "Âşık Veysel", "Nazım Hikmet", "Orhan Pamuk", "Cahit Arf", "Mehmet Akif Ersoy", "İsmet İnönü", "Kazım Karabekir", "İbn Rüşd", "İmam Gazali", "Tarık bin Ziyad", "Babür Şah", "Şah Cihan", "Şah İsmail", "Nadir Şah", "Aslan Yürekli Richard", "Fatih Vilhelm", "Martin Luther", "Erasmus", "Machiavelli", "Rafael", "Botticelli", "Vivaldi", "Haydn", "Schubert", "Wagner", "Verdi", "Çaykovski", "Dostoyevski", "Puşkin", "Victor Hugo", "Mark Twain", "Charles Dickens", "II. Elizabeth", "Winston Churchill", "Charles de Gaulle", "Lenin", "Franklin Roosevelt", "John F. Kennedy", "Benjamin Franklin", "Thomas Jefferson", "Karl Marx", "Sigmund Freud", "Stephen Hawking", "Alan Turing", "Wright Kardeşler", "Louis Armstrong", "Michael Jackson", "John Lennon", "Bob Marley", "Diego Maradona", "Montezuma I", "Atahualpa"];
