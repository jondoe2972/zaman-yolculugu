// 🦖🌍 Derin Zaman: 4,5 Milyar Yıllık Dünya, Pangea ve Dinozorlar (İsteğe bağlı / lazy-load — açılış yükü 0 KB)
'use strict';
window.DERIN_ZAMAN = {
  caglar: [
    {
      id: 'hadean', ad: 'Lav Dünyası (Hadean)', ik: '🌋',
      zaman: '4,5 – 4,0 Milyar Yıl Önce', kisa: '4,5 Mr',
      okyanus: '#3b150e', kara: '#592316', atmosfer: 'rgba(255,110,40,0.45)',
      gun: '~6 – 10 saat (Dünya çok hızlı dönüyordu!)',
      oksijen: '%0 (CO₂, metan ve su buharı)',
      sicaklik: '+200 °C → +80 °C',
      ozet: 'Dünya henüz yeni oluşmuş, yüzeyi erimiş magma okyanuslarıyla kaplı bir ateş topuydu. Mars büyüklüğündeki Theia gezegeninin çarpmasıyla fırlayan parçalar Ay\'ı oluşturdu.',
      olay: '☄️ Dev meteor yağmuru (Geç Ağır Bombardıman) ve gezegen soğudukça milyonlarca yıl süren ilk yağmurlarla ilk okyanusların doğuşu!',
      kitalar: [
        [[-15,-40],[15,-30],[25,10],[5,35],[-20,25],[-28,-10]],
        [[30,60],[50,90],[35,120],[15,100],[20,70]],
        [[-45,80],[-30,115],[-55,130],[-65,95]]
      ]
    },
    {
      id: 'kambriyen', ad: 'Kambriyen Patlaması', ik: '🦐',
      zaman: '541 – 485 Milyon Yıl Önce', kisa: '541 My',
      okyanus: '#154e6e', kara: '#9e8864', atmosfer: 'rgba(130,210,235,0.42)',
      gun: '~20,7 saat',
      oksijen: '%12 – 15',
      sicaklik: '~+22 °C (buzulsuz sıcak denizler)',
      ozet: 'Karalar hâlâ tamamen çıplak ve cansızdı; ama sığ sıcak okyanuslarda yaşam bir anda patladı! İlk gözler, ilk zırhlar, ilk bacaklar ve ilk avcı-av yarışı bu dönemde başladı.',
      olay: '👁️ Görme duyusunun icadı! Gözler ortaya çıkınca avcılar avlarını görebildi ve canlılar hızla kabuk, diken ve yüzgeç geliştirdi.',
      kitalar: [
        [[-75,-20],[-45,-40],[-25,-15],[-15,30],[-30,75],[-60,95],[-80,50]], // Gondvana
        [[-5,-105],[20,-95],[25,-65],[0,-60],[-15,-85]], // Lavrentiya
        [[-35,10],[-15,20],[-18,45],[-38,38]], // Baltika
        [[5,95],[25,110],[20,140],[0,130]] // Sibirya
      ]
    },
    {
      id: 'karbonifer', ad: 'Dev Ormanlar & Böcekler', ik: '🪲',
      zaman: '359 – 299 Milyon Yıl Önce', kisa: '320 My',
      okyanus: '#195472', kara: '#3d6e42', atmosfer: 'rgba(140,225,180,0.42)',
      gun: '~22,4 saat',
      oksijen: '%35! (Bugün %21 — Dünya tarihinin zirvesi)',
      sicaklik: '~+14 – 20 °C',
      ozet: 'Kıtalar Pangea\'yı oluşturmak üzere çarpışırken Ekvator dev bataklık ormanlarıyla kaplandı. Atmosferdeki aşırı oksijen sayesinde böcekler kabus boyutlarına ulaştı!',
      olay: '🪨 Bugün yaktığımız taşkömürünün neredeyse tamamı bu çağın dev eğrelti ve kibrit otu ormanlarının milyonlarca yıl toprağa gömülmesiyle oluştu.',
      kitalar: [
        [[-10,-55],[35,-45],[48,10],[25,55],[-10,45],[-22,-15]], // Lavrasya
        [[-18,-35],[-12,35],[-40,70],[-75,40],[-70,-30],[-42,-55]] // Gondvana birleşiyor
      ]
    },
    {
      id: 'pangea', ad: 'Pangea & İlk Dinozorlar (Triyas)', ik: '🌍',
      zaman: '252 – 201 Milyon Yıl Önce', kisa: '230 My',
      okyanus: '#1b5b82', kara: '#c49d62', atmosfer: 'rgba(235,200,135,0.42)',
      gun: '~22,8 saat',
      oksijen: '%16',
      sicaklik: '~+18 – 24 °C (iç kesimler dev çöl)',
      ozet: 'Dünya\'daki tüm kıtalar tek bir devasa C biçimli süper kıtada birleşti: PANGEA! Etrafını tek bir dev okyanus (Panthalassa) sarıyordu. İsteyen yürüyerek Kuzey Kutbu\'ndan Güney Kutbu\'na gidebilirdi!',
      olay: '🦖 Büyük Permiyen yok oluşunun ardından sahne boşaldı; ilk dinozorlar ve fare büyüklüğündeki ilk memeliler aynı dönemde doğdu.',
      kitalar: [
        // Tek dev C-şekilli süper kıta: Pangea!
        [[65,-35],[72,25],[55,75],[32,88],[18,55],[22,18],[5,8],[-10,22],[-18,62],[-45,75],[-72,40],[-75,-18],[-48,-48],[-15,-45],[12,-58],[42,-55]]
      ]
    },
    {
      id: 'jura', ad: 'Jura: Dev Dinozorlar Çağı', ik: '🦕',
      zaman: '201 – 145 Milyon Yıl Önce', kisa: '155 My',
      okyanus: '#1c638c', kara: '#6a9652', atmosfer: 'rgba(165,220,245,0.45)',
      gun: '~23,2 saat',
      oksijen: '%26',
      sicaklik: '~+18 °C (kutuplarda bile buz yok!)',
      ozet: 'Pangea ortadan çatlayıp kuzeyde Lavrasya, güneyde Gondvana olarak ikiye ayrıldı; aralarında sıcak Tethys Denizi açıldı. Gezegen dev uzun boyunlu sauropod dinozorların altın çağına girdi!',
      olay: '🪶 İlk tüylü dinozorlar ve ilk kuş (Archaeopteryx) gökyüzüne kanat çırptı; ilk Atlas Okyanusu ince bir yarık olarak açılmaya başladı.',
      kitalar: [
        [[62,-75],[70,-15],[58,55],[40,105],[22,95],[24,35],[32,-10],[28,-65],[45,-88]], // Lavrasya
        [[8,-52],[15,-12],[10,32],[-18,52],[-48,38],[-52,-15],[-32,-58],[-12,-62]], // Batı Gondvana (G.Amerika+Afrika)
        [[-38,52],[-35,98],[-58,122],[-72,82],[-65,48]] // Doğu Gondvana (Antarktika+Avustralya+Hindistan)
      ]
    },
    {
      id: 'kretase', ad: 'Kretase & 66 My Asteroit', ik: '☄️',
      zaman: '145 – 66 Milyon Yıl Önce', kisa: '66 My',
      okyanus: '#1c6b96', kara: '#7aa658', atmosfer: 'rgba(180,225,248,0.46)',
      gun: '~23,6 saat',
      oksijen: '%28 – 30',
      sicaklik: '~+20 °C (deniz seviyesi bugünden 200 m yüksek!)',
      ozet: 'T-Rex, Triceratops ve Velociraptor\'un hüküm sürdüğü son dinozor çağı! İlk çiçekli bitkiler ve bal arıları ortaya çıktı. Kıtalar birbirinden iyice uzaklaştı, Hindistan Asya\'ya doğru hızla yüzüyordu.',
      olay: '☄️ 66 milyon yıl önce 10 km çapında dev bir asteroit Meksika Yucatán\'a (Chicxulub) çarptı! Dev tsunamiler, küresel yangınlar ve yıllar süren toz kışı kuş dışı tüm dinozorları sildi.',
      asteroit: [21.4, -89.5],
      kitalar: [
        [[62,-128],[68,-65],[46,-62],[24,-92],[34,-118]], // K. Amerika
        [[8,-76],[2,-42],[-34,-54],[-52,-68],[-18,-78]], // G. Amerika
        [[64,-8],[68,48],[56,125],[26,120],[28,62],[38,24],[44,-8]], // Avrasya
        [[30,-14],[28,34],[2,44],[-33,22],[-15,10],[8,-14]], // Afrika
        [[-12,62],[-8,76],[-24,74],[-26,60]], // Yüzen Hindistan Adası!
        [[-22,115],[-20,148],[-42,146],[-44,116]], // Avustralya
        [[-68,-60],[-70,40],[-72,140],[-84,60],[-84,-40]] // Antarktika
      ]
    },
    {
      id: 'senozoyik', ad: 'Dev Memeliler & Megalodon', ik: '🦈',
      zaman: '66 – 2,6 Milyon Yıl Önce', kisa: '15 My',
      okyanus: '#1e6994', kara: '#9eb572', atmosfer: 'rgba(195,230,248,0.48)',
      gun: '~23,9 saat',
      oksijen: '%21',
      sicaklik: '+22 °C → +14 °C',
      ozet: 'Dinozorlar gidince küçük memeliler devleşip karaları fethetti! Hindistan Asya\'ya çarpıp Himalayalar\'ı yükseltti. Okyanuslarda 18 metrelik Megalodon köpekbalığı, Amazon\'da 13 metrelik Titanoboa yılanı hüküm sürüyordu.',
      olay: '🏔️ Hindistan\'ın Asya\'ya çarpmasıyla Himalayalar ve Tibet Platosu yükseldi; Afrika\'da Büyük Yarık Vadisi açılıp ilk insan atalarının yolu çizildi.',
      kitalar: [
        [[66,-140],[70,-60],[44,-64],[18,-96],[34,-122]],
        [[10,-75],[-4,-36],[-36,-56],[-54,-70],[-18,-78]],
        [[68,-8],[70,60],[62,145],[22,120],[10,77],[36,28],[40,-9]],
        [[34,-10],[30,34],[8,48],[-34,20],[4,8],[14,-16]],
        [[-14,126],[-16,152],[-38,146],[-34,115]],
        [[-68,-60],[-70,40],[-72,140],[-84,60],[-84,-40]]
      ]
    },
    {
      id: 'buzul', ad: 'Buzul Çağı & İlk İnsanlar', ik: '🦣',
      zaman: '2,6 Milyon – 12.000 Yıl Önce', kisa: '50 Bin',
      okyanus: '#1a557c', kara: '#a8b896', atmosfer: 'rgba(210,235,252,0.52)',
      buzul: true,
      gun: '24 saat',
      oksijen: '%21',
      sicaklik: 'Bugünden 6 – 8 °C daha soğuk',
      ozet: 'Kuzey Amerika ve Kuzey Avrupa kilometrelerce kalınlıkta buz tabakalarıyla kaplandı. Deniz seviyesi 120 metre alçalınca Sibirya ile Alaska arasında Bering kara köprüsü açıldı!',
      olay: '🧬 Yünlü mamutlar, kılıç dişli kaplanlar ve mağara aslanlarının dünyasında Homo sapiens Afrika\'dan çıkıp tüm kıtalara yayıldı.',
      kitalar: [
        [[68,-145],[72,-58],[44,-64],[16,-94],[34,-122]],
        [[11,-75],[-5,-35],[-36,-56],[-55,-70],[-18,-78]],
        [[70,-8],[72,62],[66,160],[22,120],[8,77],[36,28],[38,-9]],
        [[35,-10],[31,34],[10,50],[-34,20],[4,8],[14,-17]],
        [[-12,128],[-16,153],[-39,146],[-34,115]],
        [[-68,-60],[-70,40],[-72,140],[-84,60],[-84,-40]]
      ]
    }
  ],
  canlilar: [
    // Kambriyen
    { id: 'dz-anomalo', cag: 'kambriyen', ad: 'Anomalocaris', ik: '🦐', ll: [51.4, -116.5], boy: '1 metre (döneminin devi!)', beslenme: 'Etçil — trilobitler ve yumuşak canlılar.', fosil: 'Burgess Şeyli (Kanada) & Chengjiang (Çin)', superguc: '16.000 mercekli saplı gözleri ve önündeki iki kıskaç koluyla Dünya\'nın ilk süper avcısıydı!', sasirtici: 'Fosil parçaları ayrı ayrı bulunduğu için bilim insanları 80 yıl boyunca ağzını denizanası, kollarını karides, gövdesini sünger sandı!', yasa: '520 milyon yıl önce ılık Kambriyen denizinde dev bileşik gözlerinle parlayan bir trilobiti fark edip kıvrımlı yan yüzgeçlerinle dalgalanarak peşine düşersin.', w: 'Anomalocaris' },
    { id: 'dz-trilobit', cag: 'kambriyen', ad: 'Trilobit', ik: '🪲', ll: [31.5, -5.5], boy: '2 cm – 70 cm', beslenme: 'Deniz tabanı çamuru, alg ve küçük canlılar.', fosil: 'Fas, ABD, Çekya ve tüm kıtalar (20.000+ tür!)', superguc: 'Göz mercekleri organik dokudan değil, GERÇEK KALSİT KRİSTALİNDEN (taş mercek!) yapılmıştı!', sasirtici: '270 milyon yıl boyunca Dünya okyanuslarında hayatta kalarak dinozorlardan bile çok daha uzun süre var oldu!', yasa: 'Tehlike yaklaşınca tespih böceği gibi sert zırhlı bir top hâlinde kıvrılıp taş mercekli gözlerinle tehlikenin geçmesini beklersin.', w: 'Trilobite' },
    { id: 'dz-hallucigenia', cag: 'kambriyen', ad: 'Hallucigenia', ik: '🐛', ll: [51.0, -116.0], boy: '3 – 5 cm', beslenme: 'Deniz tabanı süngerleri ve organik parçalar.', fosil: 'Kanada (Burgess Şeyli) & Çin', superguc: 'Sırtında iki sıra keskin savunma dikeni ve altında 7 çift yumuşak bacağı vardı.', sasirtici: 'O kadar tuhaf görünüyordu ki ilk keşfeden bilim insanları onu TERS ÇEVİRİP (dikenlerini bacak, kafasını kuyruk sanarak!) 15 yıl boyunca yanlış çizdi!', yasa: 'Kambriyen okyanus tabanında yumuşak bacaklarınla yürürken sırtındaki iğne gibi dikenler seni dev avcılardan korur.', w: 'Hallucigenia' },

    // Karbonifer
    { id: 'dz-meganeura', cag: 'karbonifer', ad: 'Meganeura (Dev Yusufçuk)', ik: '🪰', ll: [46.3, 2.8], boy: '70 cm kanat açıklığı (bir karga kadar!)', beslenme: 'Etçil — dev böcekler ve küçük amfibiler.', fosil: 'Commentry (Fransa) & İngiltere', superguc: '%35 oksijenli atmosfer sayesinde bugünkü yusufçukların 8 katı büyüklüğe ulaştı!', sasirtici: 'Böcekler akciğer değil vücutlarındaki ince borularla nefes alır — bugünün %21 oksijenli havasında yaşasaydı nefes yetmezliğinden bu boyuta asla ulaşamazdı!', yasa: '30 metrelik eğrelti ağaçlarının arasında 70 cm kanatlarınla havada asılı kalıp dev bataklık böceklerini tek hamlede yakalarsın.', w: 'Meganeura' },
    { id: 'dz-arthropleura', cag: 'karbonifer', ad: 'Arthropleura (2,5 m Kırkayak)', ik: '🐛', ll: [55.5, -1.6], boy: '2,5 metre uzunluk · 50 kg!', beslenme: 'Otçul — çürüyen yaprak, spor ve odun.', fosil: 'İskoçya, İngiltere, Almanya ve Kuzey Amerika', superguc: '30 çift zırhlı plakasıyla tarihin karada yaşamış EN BÜYÜK omurgasız canlısıydı!', sasirtici: 'Bir otomobil kadar uzundu ama korkunç görünmesine rağmen tamamen zararsız bir vejetaryendi!', yasa: 'Dev bataklık ormanının nemli tabanında 60 bacağınla hışırdayarak yürür, kocaman gövden sayesinde hiçbir avcı sana yaklaşamaz.', w: 'Arthropleura' },

    // Pangea / Triyas
    { id: 'dz-dimetrodon', cag: 'pangea', ad: 'Dimetrodon (Yelken Sırtlı)', ik: '🦎', ll: [33.5, -99.0], boy: '3,5 – 4,5 metre · 250 kg', beslenme: 'Etçil — köpekbalıkları, amfibiler ve küçük sürüngenler.', fosil: 'Teksas, Oklahoma (ABD) & Almanya', superguc: 'Sırtındaki dev damarlı yelken sabah güneşinde hızla ısınmasını ve öğlen serinlemesini sağlardı!', sasirtici: 'Çoğu kişi onu dinozor sanır ama DİNOZOR DEĞİLDİR — dinozorlardan 40 milyon yıl önce yaşadı ve aslında İNSANLARIN ve memelilerin uzak akrabasıdır!', yasa: 'Pangea\'nın sıcak sabahında dev yelkenini güneşe dönüp ısınırsın; diğer sürüngenler hâlâ uyuşukken sen avına çıkarsın.', w: 'Dimetrodon' },
    { id: 'dz-coelophysis', cag: 'pangea', ad: 'Coelophysis (İlk Hızlı Dinozor)', ik: '🦖', ll: [36.3, -106.5], boy: '3 metre uzunluk · 20 kg', beslenme: 'Etçil — kertenkeleler, balıklar ve böcekler.', fosil: 'Ghost Ranch, New Mexico (ABD)', superguc: 'İçi boş kuş benzeri kemikleri sayesinde son derece hafif ve hızlı bir koşucuydu.', sasirtici: 'New Mexico\'da yüzlercesinin fosili aynı noktada birlikte bulundu — muhtemelen ani bir Triyas çöl selinde tüm sürü aynı anda gömüldü!', yasa: 'Pangea\'nın kızıl çöl vadilerinde ince uzun bacaklarınla saatte 40 km koşarak küçük kertenkelelerin peşine düşersin.', w: 'Coelophysis' },
    { id: 'dz-plateosaurus', cag: 'pangea', ad: 'Plateosaurus', ik: '🦕', ll: [48.8, 9.2], boy: '8 – 10 metre · 4 ton', beslenme: 'Otçul — iğne yapraklı ağaçlar ve eğreltiler.', fosil: 'Almanya, İsviçre ve Fransa (100+ iskelet!)', superguc: 'İki arka ayağı üzerinde yürüyüp yüksek ağaç dallarına uzanan ilk dev otçul dinozorlardandı!', sasirtici: 'Aynı yaştaki iki Plateosaurus tamamen farklı boylarda olabiliyordu — yiyecek bolken hızla büyüyüp kıtlıkta büyümeyi durdurabiliyorlardı!', yasa: 'Pangea\'nın kuzey ormanlarında uzun boynunla kozalaklı dallara uzanıp sürüyle birlikte yeşil vadiler ararsın.', w: 'Plateosaurus' },

    // Jura
    { id: 'dz-brachiosaurus', cag: 'jura', ad: 'Brachiosaurus', ik: '🦕', ll: [39.1, -108.7], boy: '25 m uzunluk · 13 m boy · 50 ton!', beslenme: 'Otçul — günde 400 kg yüksek ağaç yaprağı.', fosil: 'Kolorado, Utah (ABD) & Tanzanya', superguc: 'Ön bacakları arka bacaklarından uzundu — zürafa gibi başı hep 4 katlı bina yüksekliğindeydi!', sasirtici: 'Başını 13 metre yukarıda beslemek için kalbi 400 kilogram ağırlığındaydı (bir otomobil motoru kadar!) ve yaprakları çiğnemeden bütün yutup midesindeki taşlarla (gastrolit) öğütürdü!', yasa: 'Jura ormanlarının en tepesindeki taze yapraklara rakipsizce uzanırsın; yer sarsılarak yürürken hiçbir avcı sana yaklaşamaz.', w: 'Brachiosaurus' },
    { id: 'dz-stegosaurus', cag: 'jura', ad: 'Stegosaurus', ik: '🦕', ll: [40.4, -109.3], boy: '9 metre · 5 ton', beslenme: 'Otçul — alçak eğreltiler ve çalılar.', fosil: 'Wyoming, Kolorado (ABD) & Portekiz', superguc: 'Kuyruğunun ucundaki 1 metrelik 4 kemik kazığı ("thagomizer") saldıran Allosaurus\'a kırbaç gibi savururdu!', sasirtici: 'Koca 5 tonluk gövdesine rağmen beyni yalnızca BİR CEVİZ (80 gram) büyüklüğündeydi! Sırtındaki 17 kemik plaka ise renk değiştirip ısı dengeliyordu.', yasa: 'Alçak eğrelti otlarını yerken sırt plakaların güneşle parlar; bir Allosaurus yaklaşınca kuyruğundaki 4 dev dikeni savurarak onu kaçırırsın.', w: 'Stegosaurus' },
    { id: 'dz-allosaurus', cag: 'jura', ad: 'Allosaurus (Jura\'nın Aslanı)', ik: '🦖', ll: [39.3, -110.7], boy: '9 – 10 metre · 2 ton', beslenme: 'Etçil — Stegosaurus ve genç sauropodlar.', fosil: 'Utah, Wyoming (ABD) & Portekiz', superguc: 'Üst çenesini balta gibi kullanıp avına hızla saldırırdı; keskin kavisli 3 parmaklı pençeleri vardı.', sasirtici: 'T-Rex\'ten 80 milyon yıl ÖNCE yaşadı (T-Rex ile hiç karşılaşmadılar — T-Rex\'e biz Stegosaurus\'tan daha yakınız!)!', yasa: 'Jura ovalarında keskin görüşünle sürüden ayrılmış bir genç sauropod arar, güçlü bacaklarınla pusudan fırlarsın.', w: 'Allosaurus' },
    { id: 'dz-archaeopteryx', cag: 'jura', ad: 'Archaeopteryx (İlk Kuş)', ik: '🪶', ll: [48.9, 11.0], boy: '50 cm (bir saksağan boyutunda)', beslenme: 'Böcekler ve küçük kertenkeleler.', fosil: 'Solnhofen kireçtaşları, Bavyera (Almanya)', superguc: 'Hem dinozor dişleri, pençeli kanatları ve kemikli kuyruğu, HEM de kusursuz uçuş tüyleri vardı!', sasirtici: '1861\'de Darwin\'in evrim kitabından sadece 2 yıl sonra bulunarak dinozorların KUŞLARA nasıl dönüştüğünü kanıtlayan en ünlü fosil oldu!', yasa: 'Jura adalarının palmiye ağaçlarından tüylü kanatlarını açıp süzülerek havadaki böcekleri yakalarsın.', w: 'Archaeopteryx' },
    { id: 'dz-plesiosaur', cag: 'jura', ad: 'Plesiosaurus', ik: '🐉', ll: [50.7, -2.9], boy: '3,5 – 5 metre', beslenme: 'Etçil — balık ve kalamar.', fosil: 'Lyme Regis (İngiltere — Mary Anning keşfetti!)', superguc: '4 büyük yüzgeciyle su altında penguen gibi "uçarak" yüzer, uzun boynunu balık sürüsüne uzatırdı.', sasirtici: '1823\'te 24 yaşındaki fosil avcısı Mary Anning buldu; ünlü "Loch Ness Canavarı" efsanesi doğrudan Plesiosaurus\'un şeklinden esinlenmiştir!', yasa: 'Sıcak Tethys Denizi\'nde 4 kürek yüzgecinle süzülür, uzun boynunu bir balık sürüsünün ortasına sessizce uzatırsın.', w: 'Plesiosaurus' },

    // Kretase
    { id: 'dz-trex', cag: 'kretase', ad: 'Tyrannosaurus rex', ik: '🦖', ll: [47.5, -106.5], boy: '12,3 m uzunluk · 8 ton', beslenme: 'Etçil — Triceratops, Edmontosaurus ve leş.', fosil: 'Montana, Güney Dakota (ABD) & Kanada', superguc: 'Isırık gücü 6 TON (bir otomobili kağıt gibi ezebilir!) — karada yaşamış en güçlü ısırık!', sasirtici: 'Gözleri kartaldan daha keskindir ve koku alma merkezi beyninin dev bir kısmını kaplar; ayrıca küçük kolları sanılanın aksine kaslıydı ve her biri 200 kg kaldırabiliyordu!', yasa: 'Kretase ormanında derin bas titreşimlerle bölge ilan eder, 6 tonluk çenen ve keskin kokunla avını kilometrelerce öteden takip edersin.', w: 'Tyrannosaurus' },
    { id: 'dz-triceratops', cag: 'kretase', ad: 'Triceratops', ik: '🦏', ll: [44.5, -104.5], boy: '9 metre · 10 ton', beslenme: 'Otçul — sert palmiye ve eğrelti yaprakları.', fosil: 'Wyoming, Montana (ABD) & Kanada', superguc: '1 metrelik iki alın boynuzu ve 2 metre genişliğindeki kemik kalkanıyla T-Rex\'e kafa tutabilen dev tank!', sasirtici: 'Ağzında 800\'e kadar diş diziliydi ve aşındıkça ömür boyu yenilenirdi; bazı fosil kalkanlarında T-Rex\'le çarpışıp İYİLEŞMİŞ ısırık izleri bulundu!', yasa: 'Sürünle birlikte Kretase çayırlarında otlarken bir T-Rex yaklaşırsa boynuzlarını öne indirip dev kalkanını siper edersin.', w: 'Triceratops' },
    { id: 'dz-velociraptor', cag: 'kretase', ad: 'Velociraptor', ik: '🪶', ll: [44.1, 103.7], boy: '2 m uzunluk · 15 kg (bir hindi boyutunda!)', beslenme: 'Etçil — Protoceratops ve küçük sürüngenler.', fosil: 'Gobi Çölü (Moğolistan & Çin)', superguc: 'Her iki ayağındaki orak gibi kıvrık 9 cm\'lik pençesiyle avını yakalayıp sabitlerdi.', sasirtici: 'Filmlerdeki gibi pullu ve dev değil, GERÇEKTE TÜYLERLE KAPLI ve bir hindi büyüklüğündeydi! Gobi\'de bir Protoceratops\'la dövüşürken kum fırtınasında donmuş ünlü "Dövüşen Dinozorlar" fosili bulundu!', yasa: 'Gobi\'nin sıcak kumullarında tüylü kollarını denge için açıp şimşek hızıyla avının üstüne atlarsın.', w: 'Velociraptor' },
    { id: 'dz-spinosaurus', cag: 'kretase', ad: 'Spinosaurus (Yüzen Dev)', ik: '🐊', ll: [28.3, 28.9], boy: '14 – 15 metre · 7 ton (T-Rex\'ten uzun!)', beslenme: 'Etçil — dev 8 metrelik testere balıkları ve nehir canlıları.', fosil: 'Mısır (Bahariye) & Fas (Kem Kem)', superguc: 'Kürek şeklindeki kuyruğu ve timsah benzeri burnuyla SUDA YÜZEN ilk bilinen dev etçil dinozordu!', sasirtici: 'Sırtında 2 metre yüksekliğinde dev bir yelken taşırdı; 1912\'de Mısır\'da bulunan ilk orijinal iskeleti 1944\'te Münih\'teki bombardımanda yok oldu, 70 yıl sonra Fas\'ta yenisi bulundu!', yasa: 'Kuzey Afrika\'nın dev Kretase nehirlerinde kürek kuyruğunla yüzüp dev testere balıklarını konik dişlerinle yakalarsın.', w: 'Spinosaurus' },
    { id: 'dz-quetzal', cag: 'kretase', ad: 'Quetzalcoatlus (Uçan Zürafa)', ik: '🦅', ll: [29.3, -103.2], boy: '11 metre kanat açıklığı · Zürafa boyunda!', beslenme: 'Etçil — küçük dinozorlar, kertenkele ve balık.', fosil: 'Big Bend, Teksas (ABD)', superguc: 'Tarihte gökyüzünde uçmuş EN BÜYÜK canlı — küçük bir yolcu uçağı kadar kanat açıklığına sahipti!', sasirtici: 'Zürafa kadar uzundu ama içi hava dolu kağıt gibi ince kemikleri sayesinde sadece ~200 kg ağırlığındaydı; dört ayağından yay gibi fırlayıp 2,5 m zıplayarak havalanırdı!', yasa: 'Kretase gökyüzünde 11 metrelik kanatlarını termal akımlara yayıp saatte 100 km hızla kıtayı tararsın.', w: 'Quetzalcoatlus' },
    { id: 'dz-mosasaurus', cag: 'kretase', ad: 'Mosasaurus (Okyanusun T-Rex\'i)', ik: '🐋', ll: [50.8, 5.7], boy: '15 – 17 metre · 15 ton!', beslenme: 'Etçil — köpekbalıkları, ammonitler ve diğer deniz sürüngenleri.', fosil: 'Maastricht (Hollanda) — adını Meuse Nehri\'nden alır!', superguc: 'Ağzının üst damağında ikinci bir diş sırası vardı — avı boğazından asla kaçamazdı!', sasirtici: 'Dinozor değil, bugünkü Komodo ejderi ve yılanların dev deniz akrabasıydı; 1764\'te bulunan kafatası insanlara ilk kez "türlerin neslinin tükenebileceğini" öğretti!', yasa: 'Sığ Kretase denizinde dev kuyruk yüzgecinle hızlanıp bir köpekbalığını tek hamlede yakalarsın.', w: 'Mosasaurus' },

    // Senozoyik
    { id: 'dz-megalodon', cag: 'senozoyik', ad: 'Megalodon (18 m Dev Köpekbalığı)', ik: '🦈', ll: [34.0, -78.0], boy: '15 – 20 metre · 50+ ton!', beslenme: 'Etçil — dev balinalar, foklar ve deniz kaplumbağaları.', fosil: 'Tüm okyanus kıyıları (18 cm\'lik dev üçgen dişler!)', superguc: 'Isırık gücü 18 TON (T-Rex\'in 3 katı!) — tek ısırıkta bir balinayı ikiye bölebilirdi!', sasirtici: 'Tek bir dişi yetişkin bir insanın elinden büyüktür (18 cm)! 3,6 milyon yıl önce okyanuslar soğuyup balina göçleri değişince soyu tükendi.', yasa: 'Sıcak Miyosen okyanuslarında dev gölgenle derinlerden yükselir, açık denizlerin tartışmasız kralı olarak yüzersin.', w: 'Megalodon' },
    { id: 'dz-titanoboa', cag: 'senozoyik', ad: 'Titanoboa (13 m Dev Yılan)', ik: '🐍', ll: [11.1, -72.6], boy: '13 metre uzunluk · 1,1 ton!', beslenme: 'Etçil — dev timsahlar ve nehir balıkları.', fosil: 'Cerrejón kömür madeni, Kolombiya', superguc: 'Bugünkü en büyük anakondanın iki katı uzunluğunda ve bir şehir otobüsü boyundaydı!', sasirtici: 'Yılanlar soğukkanlı olduğu için bu boyuta ancak çok sıcak iklimde ulaşabilir — Titanoboa\'nın varlığı, 60 milyon yıl önce Ekvator\'un bugünden 6 °C daha sıcak olduğunu kanıtladı!', yasa: 'Dinozorların hemen ardından ısınan tropikal Kolombiya bataklıklarında 13 metrelik gövdenle sessizce süzülürsün.', w: 'Titanoboa' },
    { id: 'dz-paraceratherium', cag: 'senozoyik', ad: 'Paraceratherium (Dev Boynuzsuz Gergedan)', ik: '🦏', ll: [29.0, 68.5], boy: '5 m omuz yüksekliği · 17 ton!', beslenme: 'Otçul — yüksek ağaç yaprakları.', fosil: 'Pakistan, Kazakistan, Moğolistan, Çin ve ANADOLU (Çankırı/Kırıkkale!)', superguc: 'Karada yaşamış EN BÜYÜK MEMELİ — 3 Afrika fili ağırlığındaydı!', sasirtici: 'Bu 17 tonluk devin fosilleri Türkiye\'de (Çankırı ve Kırıkkale\'de!) de bulunmuştur — 25 milyon yıl önce Anadolu\'da dev gergedanlar yürüyordu!', yasa: 'Asya ve Anadolu\'nun yemyeşil ormanlarında 7 metre yükseklikteki yaprakları kavrayıp yer sarsılarak yürürsün.', w: 'Paraceratherium' },
    { id: 'dz-terorkusu', cag: 'senozoyik', ad: 'Phorusrhacos (Terör Kuşu)', ik: '🐦', ll: [-46.0, -68.0], boy: '2,5 – 3 metre boy · 130 kg', beslenme: 'Etçil — tarihöncesi atlar ve memeliler.', fosil: 'Patagonya, Arjantin', superguc: 'Uçamıyordu ama saatte 50 km koşup balta gibi kıvrık dev gagasıyla avını vururdu!', sasirtici: 'Güney Amerika milyonlarca yıl ada kıtasıyken aslan ve kurt yoktu — kıtanın tepe yırtıcısı bu 3 metrelik dev kuşlardı!', yasa: 'Patagonya çayırlarında uzun güçlü bacaklarınla koşup kanca gaganla savanın kralı olursun.', w: 'Phorusrhacos' },

    // Buzul Çağı
    { id: 'dz-mamut', cag: 'buzul', ad: 'Yünlü Mamut', ik: '🦣', ll: [68.0, 145.0], boy: '3,5 m boy · 6 ton', beslenme: 'Otçul — günde 180 kg bozkır otu.', fosil: 'Sibirya donmuş toprağı, Avrupa & Alaska', superguc: '1 metrelik çift katmanlı kürkü ve 10 cm yağ tabakasıyla -50 °C\'de yaşardı.', sasirtici: 'Mısır\'daki Büyük Piramit yapılırken Sibirya açıklarındaki Wrangel Adası\'nda hâlâ yaşayan cüce mamutlar vardı!', yasa: 'Buzul Çağı\'nın karlı bozkırında 4 metrelik kıvrık dişlerinle karı sıyırıp alttaki taze otlara ulaşırsın.', w: 'Woolly mammoth' },
    { id: 'dz-smilodon', cag: 'buzul', ad: 'Kılıç Dişli Kaplan (Smilodon)', ik: '🐅', ll: [34.06, -118.35], boy: '2 m uzunluk · 300 kg', beslenme: 'Etçil — bizon, deve ve genç mamut.', fosil: 'La Brea Katran Çukurları (Los Angeles, ABD)', superguc: '28 cm\'lik kılıç dişleri ve ayı kadar kaslı ön kollarıyla pusudan saldırırdı!', sasirtici: 'Los Angeles\'taki La Brea katran çukurlarında binlerce Smilodon iskeleti bulundu — kırık kemikleri iyileşmiş fosiller, yaralı arkadaşlarına sürünün yemek taşıdığını kanıtladı!', yasa: 'Buzul Çağı çayırlarında çalıların ardında sabırla bekler, güçlü ön patilerinle dev avını yere sabitlersin.', w: 'Smilodon' },
    { id: 'dz-megatherium', cag: 'buzul', ad: 'Dev Tembel Hayvan (Megatherium)', ik: '🦥', ll: [-34.6, -58.4], boy: '6 metre boy · 4 ton (fil kadar!)', beslenme: 'Otçul — yaprak, meyve ve dev avokadolar!', fosil: 'Arjantin, Bolivya ve Brezilya', superguc: 'Arka ayakları üstünde 6 metreye dikilip dev pençeleriyle ağaç dallarını kendine çekerdi!', sasirtici: 'Bugünkü minik tembel hayvanların fil boyutundaki atasıydı ve 40 metrelik dev yeraltı tünelleri ("paleoburrow") kazıp içinde uyurdu — o tüneller Brezilya\'da hâlâ duruyor!', yasa: 'Güney Amerika pampalarında iki ayağın üstüne kalkıp yüksek dallardan avokado toplarsın; 4 tonluk cüssenle kimse sana bulaşamaz.', w: 'Megatherium' }
  ]
};
