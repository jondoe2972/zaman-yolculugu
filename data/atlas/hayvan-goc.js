// 🐋🦅 Hayvanların Yıllık Göç Döngüleri (Katmanlar → Hayvan göç yolları)
'use strict';
window.ATLAS_HAYVAN_GOC = [
  {
    id: 'kambur-balina', ad: 'Kambur Balina Göçü', ik: '🐋', renk: '#38bdf8',
    mesafe: '~16.000 km (gidiş-dönüş)',
    dongu: 'Yaz (Aralık–Mart): Antarktika\'nın buzlu sularında günde 1,5 ton kril yiyip yağ depolar. Kış (Haziran–Ekim): Sıcak tropikal sulara (Avustralya/Kolombiya/Brezilya kıyıları) yüzerek yavrularını doğurur.',
    neden: 'Kutup suları besin (kril) açısından çok zengindir ama yeni doğan yağsız yavrular için fazla soğuktur; sıcak tropikal sular ise yavruların büyümesi için güvenlidir.',
    pusula: 'Dünya\'nın manyetik alanını, okyanus akıntılarını, deniz tabanı şekillerini ve güneşin açısını kullanarak aynı koya şaşmadan dönerler.',
    ilginc: 'Anne kambur balinalar tropikal sularda aylarca neredeyse hiç yemek yemeden yalnızca yağ depolarıyla yavrularını emzirir.',
    pts: [[-64, 150], [-52, 152], [-38, 153], [-25, 154], [-17, 148]],
    w: 'Humpback whale'
  },
  {
    id: 'gri-balina', ad: 'Gri Balina Pasifik Göçü', ik: '🐋', renk: '#60a5fa',
    mesafe: '~20.000 km (memeliler arasında en uzunlarından)',
    dongu: 'Yaz: Alaska ve Bering Denizi\'nin sığ sularında beslenir. Sonbahar–Kış: Kuzey Amerika kıyısı boyunca güneye inip Meksika\'daki sakin Baja California lagünlerinde doğum yapar.',
    neden: 'Baja lagünlerinin tuzlu ve sığ suları yavruların kolayca yüzmesini sağlar ve onları katil balinalardan (orka) korur.',
    pusula: 'Kıyı şeridini, su sıcaklığını ve kıta sahanlığının derinliğini takip ederek neredeyse sahilden kopmadan yol alırlar.',
    ilginc: 'Bir gri balina ömrü boyunca (60-70 yıl) Dünya ile Ay arasındaki mesafeye eşdeğer (~800.000 km) yol yüzer.',
    pts: [[64, -168], [58, -169], [54, -164], [52, -148], [47, -126], [37, -123], [26, -113.5]],
    w: 'Gray whale'
  },
  {
    id: 'kuzey-sumrusu', ad: 'Kuzey Sumrusu (Kutuplar Arası Göç)', ik: '🕊️', renk: '#facc15',
    mesafe: '~70.000 – 90.000 km / yıl (Dünya rekoru!)',
    dongu: 'Haziran–Ağustos: Kuzey Kutbu (Grönland/İzlanda) yazında ürer. Eylül–Kasım: Atlas Okyanusu\'nu zikzak çizerek geçip Antarktika\'ya iner. Mart–Mayıs: Güney yazı bitince tekrar Kuzey Kutbu\'na uçar.',
    neden: 'Her yıl hem Kuzey hem Güney yarımkürenin yaz mevsimini yakalayarak 24 saat gün ışığında bol balık ve krille beslenir.',
    pusula: 'Okyanus rüzgâr sistemlerini (alize ve batı rüzgârları) arkasına alıp düz çizgi yerine S harfi çizerek enerji tasarrufu yapar.',
    ilginc: '30 yıl yaşayan bir kuzey sumrusu ömrü boyunca Ay\'a 3 kez gidip gelecek kadar (~2,4 milyon km) uçar!',
    pts: [[72, -25], [50, -32], [22, -24], [-10, -18], [-40, -10], [-66, -15]],
    w: 'Arctic tern'
  },
  {
    id: 'beyaz-leylek', ad: 'Beyaz Leylek Göçü (Boğazlar Rotası)', ik: '🦩', renk: '#f97316',
    mesafe: '~10.000 – 12.000 km',
    dongu: 'İlkbahar–Yaz: Avrupa ve Anadolu\'da yuva kurup yavrularını büyütür. Ağustos–Eylül: İstanbul Boğazı, Hatay Belen Geçidi ve Nil Vadisi üzerinden Doğu ve Güney Afrika\'ya uçar.',
    neden: 'Kışın Avrupa\'da böcek ve kurbağa bulamadıkları için sıcak Afrika savanlarına göçerler; açık deniz üzerinde sıcak hava (termal) akımı olmadığı için kara köprülerini (İstanbul Boğazı ve Cebelitarık) seçerler.',
    pusula: 'Güneş pusulası, manyetik alan ve yaşlı leyleklerin hafızasındaki termal hava koridorlarını kullanırlar.',
    ilginc: 'Her sonbaharda 500.000\'den fazla beyaz leylek sadece birkaç hafta içinde İstanbul Boğazı ve Hatay semalarından süzülerek geçer.',
    pts: [[52, 14], [46, 20], [41.1, 29.0], [36.5, 36.2], [30.0, 31.2], [12.0, 34.0], [-4.0, 35.0], [-26.0, 28.0]],
    w: 'White stork'
  },
  {
    id: 'kral-kelebek', ad: 'Kral (Monark) Kelebeği Göçü', ik: '🦋', renk: '#fb923c',
    mesafe: '~4.500 km (tek yön)',
    dongu: 'Sonbahar: Kanada ve ABD\'den milyonlarca kelebek Meksika\'nın yüksek oyamel çam ormanlarına uçar ve ağaç dallarında kışı geçirir. İlkbahar: Kuzeye doğru yumurta bırakarak 3-4 nesilde Kanada\'ya geri dönerler.',
    neden: 'Kuzey Amerika\'nın dondurucu kışından kaçıp Meksika dağlarındaki serin ama donmayan mikro-iklimde enerji tasarrufu yapmak için.',
    pusula: 'Antenlerindeki biyolojik güneş saati ve Dünya\'nın manyetik alanını algılayan özel proteinlerle yol bulurlar.',
    ilginc: 'Kış için Meksika\'ya uçan kelebekler, oraya daha önce hiç gitmemiştir; büyük-büyük-büyükannelerinin ağaçlarını genetik pusulayla bulurlar!',
    pts: [[45, -79], [40, -86], [34, -95], [27, -100], [19.6, -100.3]],
    w: 'Monarch butterfly migration'
  },
  {
    id: 'serengeti-gnu', ad: 'Serengeti Büyük Antilop (Gnu) Göçü', ik: '🐃', renk: '#eab308',
    mesafe: '~1.600 km (sürekli yıllık çember)',
    dongu: 'Ocak–Mart: Güney Serengeti\'de 500.000 yavru doğar. Temmuz–Ekim: 1,5 milyon gnu ve 200.000 zebra timsahlı Mara Nehri\'ni aşarak Kenya\'daki Masai Mara\'ya geçer. Kasım: Yağmurlarla güneye dönerler.',
    neden: 'Doğu Afrika\'daki mevsimsel yağmurların yeşerttiği taze otlakların peşinden durmaksızın hareket ederler.',
    pusula: 'Uzak fırtınaların ve yağmur bulutlarının kokusunu ve sesini 50 kilometreden fazla mesafeden algılayabilirler.',
    ilginc: 'Karadaki en büyük memeli göçüdür; sürülerin geçişi uzaydaki uydulardan bile toz bulutu olarak seçilebilir.',
    pts: [[-3.1, 35.1], [-2.4, 34.4], [-1.5, 34.9], [-1.3, 35.2], [-2.2, 35.5], [-3.1, 35.1]],
    w: 'Serengeti'
  },
  {
    id: 'deniz-kaplumbaga', ad: 'Deri Sırtlı Kaplumbağa Pasifik Göçü', ik: '🐢', renk: '#34d399',
    mesafe: '~20.000 km (gidiş-dönüş)',
    dongu: 'Yaz–Sonbahar: Endonezya\'nın Papua kumsallarında yumurtladıktan sonra Pasifik\'i boydan boya geçip Kaliforniya açıklarındaki denizanası sürüleriyle beslenir; sonra aynı kumsala geri döner.',
    neden: 'Sıcak tropikal kumsallar yumurtaların kuluçkası için şarttır; soğuk Kaliforniya akıntısı ise en sevdikleri yiyecek olan denizanalarıyla doludur.',
    pusula: 'Yavruyken yumurtadan çıktığı kumsalın kendine özgü manyetik "parmak izini" beynine kazır ve 20 yıl sonra aynı sahile döner.',
    ilginc: 'Kuroshio ve Kuzey Pasifik akıntılarını adeta bir yürüyen bant gibi kullanarak enerjisini korur.',
    pts: [[-0.5, 132], [12, 145], [28, 165], [38, 200], [36, 236]],
    w: 'Leatherback sea turtle'
  },
  {
    id: 'pasifik-somonu', ad: 'Pasifik Somonu Okyanus–Nehir Döngüsü', ik: '🐟', renk: '#f472b6',
    mesafe: '~3.000 – 5.000 km',
    dongu: 'Gençlik: Tatlı su nehirlerinde doğup Kuzey Pasifik Okyanusu\'na açılır ve 2-5 yıl orada büyür. Yetişkinlik: Akıntıya ve şelalelere karşı yüzerek tam doğduğu dereye dönüp yumurta bırakır.',
    neden: 'Okyanus hızla büyümek için bol besin sunar; sığ ve serin dağ dereleri ise yumurtaların yırtıcılardan korunması için idealdir.',
    pusula: 'Okyanusta manyetik alanla kıyıya ulaşır, nehir ağzına gelince ise inanılmaz koku alma duyusuyla doğduğu derenin kokusunu tanır!',
    ilginc: 'Nehre dönen somonlar ayılara ve kartallara besin olurken, artıkları orman toprağına okyanus azotu taşıyarak dev çam ağaçlarını besler.',
    pts: [[57.5, -136], [53, -150], [49, -170], [54, -158], [59.5, -151.5]],
    w: 'Salmon run'
  },
  {
    id: 'ren-geyigi', ad: 'Ren Geyiği (Karibu) Arktik Göçü', ik: '🦌', renk: '#a78bfa',
    mesafe: '~4.800 km / yıl (karada en uzun göçlerden)',
    dongu: 'İlkbahar: Sürüler yüz binlerce bireyle kuzeydeki Arktik tundraya yürüyüp yavrular. Sonbahar: Kutup fırtınaları başlamadan güneydeki korunaklı tayga ormanlarına dönerler.',
    neden: 'Yazın tundrada bol ot ve daha az yırtıcı vardır; kışın ise orman örtüsü rüzgârı keser ve kar altındaki likenlere ulaşmayı kolaylaştırır.',
    pusula: 'Sürünün yaşlı dişileri nesilden nesile aktarılan göç geçitlerini ve nehir geçiş noktalarını hatırlar.',
    ilginc: 'Ren geyiklerinin göz rengi mevsimle değişir: yazın altın sarısı olan göz dokusu, kışın karanlık Arktik gecelerinde daha fazla ışık toplamak için maviye döner!',
    pts: [[69, -138], [67, -132], [64, -125], [61, -118]],
    w: 'Reindeer'
  },
  {
    id: 'sarkici-kus', ad: 'Avrasya Yırtıcı Kuş Göçü (Kızıldeniz–Anadolu)', ik: '🦅', renk: '#fbbf24',
    mesafe: '~8.000 – 10.000 km',
    dongu: 'İlkbahar: Doğu Afrika\'dan kalkıp Babülmendep Boğazı, Ürdün Vadisi ve Anadolu üzerinden Orta Asya bozkırlarına ulaşırlar. Sonbahar: Aynı dar boğazlardan Afrika\'ya dönerler.',
    neden: 'Büyük kanatlı kartal, şahin ve akbabalar deniz üstünde kanat çırpmak yerine kara üzerindeki sıcak hava sütunlarıyla süzülerek binlerce kilometre uçar.',
    pusula: 'Dağ sıralarını, vadileri ve boğazları görsel harita gibi kullanarak her yıl aynı dar gökyüzü otoyollarından geçerler.',
    ilginc: 'Artvin Borçka ve İstanbul Boğazı, dünyanın en önemli yırtıcı kuş göç darboğazları arasında yer alır.',
    pts: [[48, 65], [43, 47], [41.2, 41.7], [36.5, 36.2], [29.5, 35.0], [12.6, 43.3], [6.0, 38.5]],
    w: 'Bird migration'
  },
  {
    id: 'avrupa-yilanbaligi', ad: 'Avrupa Yılan Balığı (Sargasso Göçü)', ik: '🐍', renk: '#2dd4bf',
    mesafe: '~6.000 km (tek yön, ömürde bir kez!)',
    dongu: 'Gençlik: Sargasso Denizi\'nde doğan şeffaf larvalar Gulf Stream ile 2-3 yılda Avrupa nehirlerine sürüklenir ve orada 10–20 yıl büyür. Yetişkinlik: Hiç yemek yemeden 6.000 km yüzüp Sargasso\'ya dönerek yumurtlar.',
    neden: 'Sargasso Denizi\'nin sıcak, sakin ve yosunlu suları larvaların hayatta kalması için idealdir; Avrupa nehirleri ise hızla büyümek için bol besin sunar.',
    pusula: 'Okyanus akıntılarını, Dünya\'nın manyetik alanını ve derin deniz sıcaklık katmanlarını kullanarak 5.000 km ötedeki üreme alanını şaşmadan bulur.',
    ilginc: 'İnsanlar binlerce yıl yılan balıklarının nerede doğduğunu çözemedi; Aristoteles bile çamurdan doğduklarını sanmıştı — gizem ancak 1922\'de çözüldü!',
    pts: [[52, 2], [48, -10], [42, -26], [34, -46], [26, -64]],
    w: 'European eel'
  },
  {
    id: 'kiyi-cullugu', ad: 'Çizgili Kıyı Çulluğu (Kesintisiz Uçuş Rekoru)', ik: '🐦', renk: '#fde047',
    mesafe: '~13.500 km (hiç durmadan 11 gün!)',
    dongu: 'Yaz: Alaska tundrasında ürer. Sonbahar: Pasifik Okyanusu\'nu tek seferde, hiç konmadan, yemeden ve içmeden 11 günde aşıp Yeni Zelanda\'ya iner. İlkbahar: Sarı Deniz üzerinden Alaska\'ya döner.',
    neden: 'Kuzey kışından kaçıp Güney yarımkürenin ılıman Yeni Zelanda kıyılarında beslenmek için doğrudan okyanus kestirmesini kullanır.',
    pusula: 'Kalkıştan önce vücut ağırlığının yarısını yağa çevirir, hatta uçuşta yer açmak için sindirim organlarını geçici olarak küçültür!',
    ilginc: 'Uydu vericisiyle takip edilen bir genç kuş, Alaska\'dan Tazmanya\'ya 13.560 km boyunca tek bir mola vermeden uçarak dünya rekoru kırdı.',
    pts: [[60, 198], [40, 192], [15, 185], [-12, 179], [-37, 175]],
    w: 'Bar-tailed godwit'
  },
  {
    id: 'hint-kazi', ad: 'Hint Kazı (Himalaya Zirve Göçü)', ik: '🦢', renk: '#e2e8f0',
    mesafe: '~4.500 km (8.000 metre yükseklikten!)',
    dongu: 'Yaz: Moğolistan ve Tibet\'in yüksek göllerinde yavrular. Sonbahar: Everest ve Himalayalar\'ın karlı zirvelerinin üzerinden geçip Hindistan\'ın sıcak ovalarına iner.',
    neden: 'Tibet platosu kışın -30 °C\'de tamamen donar; Hindistan\'ın verimli sulak alanları ise kışın bol yiyecek sunar.',
    pusula: 'Kanındaki özel hemoglobin oksijeni insanlardan çok daha verimli bağlar; jet uçaklarının uçtuğu irtifada oksijensiz havada kanat çırpabilir!',
    ilginc: 'Dağcılar Everest tırmanışı sırasında başlarının üstünden neşeyle ses çıkararak geçen Hint kazı sürülerini sık sık görür.',
    pts: [[47, 100], [38, 92], [29, 86], [25, 82], [20, 78]],
    w: 'Bar-headed goose'
  },
  {
    id: 'gezgin-yusufcuk', ad: 'Gezgin Yusufçuk (Hint Okyanusu Göçü)', ik: '🪰', renk: '#fb7185',
    mesafe: '~18.000 km (4 nesilde — böcekler arası dünya rekoru!)',
    dongu: 'Muson yağmurlarının peşinden Hindistan\'dan kalkıp Maldivler üzerinden Hint Okyanusu\'nu aşarak Doğu Afrika\'ya uçar; orada yeni nesil doğar ve rüzgârla Hindistan\'a döner.',
    neden: 'Yumurtalarını bırakmak için muson yağmurlarının oluşturduğu geçici tatlı su göletlerine ihtiyaç duyar.',
    pusula: '1.000 metre yüksekliğe çıkıp mevsimlik muson rüzgârlarına binerek açık okyanusu neredeyse hiç enerji harcamadan geçer.',
    ilginc: 'Sadece 5 santimetre boyundaki bu narin böcek, Kral Kelebeği\'nin göç mesafesinin neredeyse iki katını kat eder!',
    pts: [[18, 73], [10, 74], [4, 73], [-2, 56], [-6, 40]],
    w: 'Pantala flavescens'
  },
  {
    id: 'buyuk-beyaz', ad: 'Büyük Beyaz Köpekbalığı (Pasifik Kafesi)', ik: '🦈', renk: '#94a3b8',
    mesafe: '~8.000 km (gidiş-dönüş)',
    dongu: 'Sonbahar: Kaliforniya kıyılarında foklarla beslenir. Kış–İlkbahar: Meksika ile Hawaii arasındaki ıssız açık okyanusa ("White Shark Café") yüzüp aylarca orada toplanır.',
    neden: 'Bilim insanları bu ıssız açık deniz noktasının hem derin deniz kalamarı ziyafeti hem de çiftleşme buluşma yeri olduğunu keşfetti.',
    pusula: 'Kafasındaki elektro-algılayıcılar (Lorenzini ampulleri) ile Dünya\'nın manyetik alanını hassas bir pusula gibi okur.',
    ilginc: 'Bu gizemli açık deniz buluşma noktası ancak 2002\'de uydu etiketleri sayesinde keşfedildi ve "Beyaz Köpekbalığı Kafesi" adını aldı.',
    pts: [[37, -123], [32, -128], [26, -135], [23, -142], [21, -155]],
    w: 'White Shark Café'
  },
  {
    id: 'sardalya-gocu', ad: 'Güney Afrika Büyük Sardalya Göçü', ik: '🐟', renk: '#38bdf8',
    mesafe: '~1.200 km (milyarlarca balık!)',
    dongu: 'Mayıs–Temmuz: Kış soğuk su koridoru açılınca milyarlarca sardalya Agulhas Burnu\'ndan doğu kıyısı boyunca kuzeye, Durban açıklarına doğru dev şeritler hâlinde yüzer.',
    neden: 'Sıcak Agulhas Akıntısı kıyıdan geçici olarak uzaklaşıp soğuk su yolu açtığında sardalyalar bu koridoru takip ederek kuzeye yayılır.',
    pusula: 'Su sıcaklığının 21 °C\'nin altına düşmesi göçün başlama sinyalidir; yunuslar, köpekbalıkları ve dalıcı kuşlar da hemen peşlerine takılır.',
    ilginc: 'Bazı sardalya sürüleri 7 kilometre uzunluğa ve 1,5 kilometre genişliğe ulaşarak uzaydaki uydulardan bile görünür!',
    pts: [[-35.5, 20.5], [-34.5, 24.5], [-33.0, 28.5], [-30.0, 31.2]],
    w: 'Sardine run'
  },
  {
    id: 'meyve-yarasasi', ad: 'Kasanka Meyve Yarasası Göçü', ik: '🦇', renk: '#c084fc',
    mesafe: '~2.000 km (sayıca dünyanın en büyük memeli göçü!)',
    dongu: 'Ekim–Aralık: Kongo yağmur ormanlarından kalkan 10 milyona yakın meyve yarasası Zambiya\'daki yalnızca birkaç hektarlık Kasanka bataklık ormanına akın eder.',
    neden: 'Bu iki ayda Kasanka ormanında musuku ve mufinsa meyveleri aynı anda olgunlaşarak dev bir meyve şöleni sunar.',
    pusula: 'Yarasalar gece gökyüzünü karartarak uçar ve yedikleri meyvelerin çekirdeklerini tüm Orta Afrika\'ya dağıtarak milyonlarca yeni ağaç eker.',
    ilginc: 'Her gün akşam günbatımında 10 milyon yarasanın aynı anda gökyüzüne kalkması 45 dakika boyunca kesintisiz sürer.',
    pts: [[-2, 23], [-7, 26], [-12.5, 30.2]],
    w: 'Straw-coloured fruit bat'
  },
  {
    id: 'deniz-fili', ad: 'Kuzey Deniz Fili Derin Deniz Göçü', ik: '🦭', renk: '#60a5fa',
    mesafe: '~20.000 km / yıl (yılda iki kez gidiş-dönüş!)',
    dongu: 'Kış: Kaliforniya ve Meksika kumsallarında yavrular. İlkbahar & Yaz: Alaska ve Aleut Adaları açıklarına yüzüp 8 ay boyunca karaya hiç çıkmadan açık denizde yaşar.',
    neden: 'Kuzey Pasifik\'in 500–1.500 metre derinliklerindeki kalamar ve derin deniz balıklarıyla beslenip yağ depolar.',
    pusula: 'Yüzlerce metre derine dalıp su altında 20 dakikalık "uyku dalışları" yaparak köpekbalıklarından korunur.',
    ilginc: 'Bir kuzey deniz fili yılın %80\'inden fazlasını su altında geçirir; nefes almak için yüzeye sadece 2–3 dakikalığına çıkar!',
    pts: [[35.5, -121.5], [42, -135], [49, -150], [52, -166]],
    w: 'Northern elephant seal'
  },
  {
    id: 'kalahari-zebra', ad: 'Kalahari–Okavango Zebra Göçü', ik: '🦓', renk: '#f8fafc',
    mesafe: '~1.000 km (gidiş-dönüş — Afrika\'nın en uzun kara göçü)',
    dongu: 'Yağmur mevsimi: Namibya Chobe Nehri\'nden güneye, Botsvana\'daki Makgadikgadi tuz tavalarının taze otlaklarına yürür. Kurak mevsim: Su kaynaklarına geri döner.',
    neden: 'Tuzlu çayırların mineralli taze otları yavruların büyümesi için eşsiz besin sağlar.',
    pusula: 'Binlerce zebra çitler kaldırıldığı anda nesiller öncesinden kalma genetik ve kültürel hafızayla eski göç yolunu yeniden buldu!',
    ilginc: 'Bilim insanları bu göçün 500 km\'lik düz hattını ancak 2014 yılında GPS tasmaları sayesinde tam olarak ortaya çıkardı.',
    pts: [[-17.8, 24.8], [-19.0, 24.5], [-20.5, 25.0]],
    w: 'Plains zebra'
  },
  {
    id: 'kir-kirlangici', ad: 'Kır Kırlangıcı (Avrupa–Güney Afrika Göçü)', ik: '🐦', renk: '#fb923c',
    mesafe: '~10.000 km (tek yön)',
    dongu: 'İlkbahar–Yaz: Avrupa ve Anadolu\'da çamurdan yaptığı yuvalarda yavrularını büyütür. Sonbahar: Cebelitarık ve Sahra Çölü\'nü aşarak Güney Afrika\'ya uçar.',
    neden: 'Kışın Avrupa\'da uçan sinek ve böcek kalmadığı için yaz mevsimini yaşayan Güney Afrika\'ya göçer.',
    pusula: 'Günde 300 km hızla uçup güneş, yıldızlar ve Dünya\'nın manyetik alanını kullanarak ertesi bahar tam aynı evin saçak altındaki eski yuvasına döner!',
    ilginc: 'Sadece 20 gram ağırlığındaki bu küçücük kuş, her yıl Sahra Çölü\'nü ve Kongo yağmur ormanlarını tek başına aşar.',
    pts: [[56, 10], [46, 5], [36, -5], [24, -2], [8, 8], [-10, 18], [-28, 25]],
    w: 'Barn swallow'
  }
];
