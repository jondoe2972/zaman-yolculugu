// 🦖🌍 Derin Zaman: 4,5 Milyar Yıllık Paleocoğrafya, Dinozorlar ve Gerçek Fosil Kazı Alanları
// (İsteğe bağlı / lazy-load — açılış yükü 0 KB)
'use strict';
window.DERIN_ZAMAN = {
  caglar: [
    {
      id: 'hadean', ad: 'Lav Dünyası (Hadean)', ik: '🌋',
      zaman: '4,5 – 4,0 Milyar Yıl Önce', kisa: '4,5 Mr',
      okyanus: '#35120c', okyanus2: '#1b0704', kara: '#5e2416', kara2: '#3d150c',
      kiyi: 'rgba(255,130,55,0.45)', atmosfer: 'rgba(255,110,40,0.48)', lav: true,
      gun: '~6 – 10 saat (Dünya çok hızlı dönüyordu!)',
      oksijen: '%0 (CO₂, metan ve su buharı)',
      sicaklik: '+200 °C → +80 °C',
      ozet: 'Dünya henüz yeni oluşmuş, yüzeyi erimiş magma okyanusları ve katılaşan bazalt kabuk adalarıyla kaplı bir ateş topuydu. Mars büyüklüğündeki Theia gezegeninin çarpmasıyla fırlayan parçalar Ay\'ı oluşturdu.',
      olay: '☄️ Dev meteor yağmuru (Geç Ağır Bombardıman) ve gezegen soğudukça milyonlarca yıl süren ilk yağmurlarla ilk okyanusların doğuşu!',
      kitalar: [
        // İlk bazalt proto-kabuk blokları
        [[-18,-48],[-6,-42],[8,-36],[20,-24],[26,-6],[18,16],[4,30],[-12,26],[-24,14],[-30,-8],[-26,-30]],
        [[26,56],[40,68],[52,86],[46,108],[34,122],[20,114],[14,94],[18,74]],
        [[-40,76],[-30,96],[-34,118],[-50,132],[-64,116],[-62,92],[-50,74]],
        [[18,-132],[32,-116],[28,-96],[12,-104],[8,-122]]
      ]
    },
    {
      id: 'kambriyen', ad: 'Kambriyen Patlaması', ik: '🦐',
      zaman: '541 – 485 Milyon Yıl Önce', kisa: '541 My',
      okyanus: '#135275', okyanus2: '#092d45', kara: '#b89f74', kara2: '#8f7752',
      kiyi: 'rgba(130,225,240,0.34)', atmosfer: 'rgba(130,210,235,0.42)',
      gun: '~20,7 saat',
      oksijen: '%12 – 15',
      sicaklik: '~+22 °C (buzulsuz sıcak sığ denizler)',
      ozet: 'Karalar hâlâ tamamen çıplak kaya ve kumdu; ama sığ sıcak okyanuslarda yaşam bir anda patladı! İlk gözler, ilk zırhlar, ilk bacaklar ve ilk avcı-av yarışı bu dönemde başladı.',
      olay: '👁️ Görme duyusunun icadı! Gözler ortaya çıkınca avcılar avlarını görebildi ve canlılar hızla kabuk, diken ve yüzgeç geliştirdi.',
      kitalar: [
        // Gondvana (Güney Yarımküre'ye yayılan dev süper kıta — PALEOMAP düzeni)
        [[-78,-10],[-68,-34],[-52,-46],[-38,-36],[-26,-24],[-18,-6],[-12,14],[-8,34],[-14,54],[-26,74],[-40,92],[-58,98],[-72,82],[-80,56],[-82,22]],
        // Lavrentiya (Ekvator'da bugünkü K. Amerika çekirdeği)
        [[-8,-112],[6,-108],[18,-98],[24,-80],[20,-62],[6,-58],[-6,-66],[-16,-84],[-14,-100]],
        // Baltika (Güneyde bugünkü Kuzey Avrupa)
        [[-42,8],[-28,6],[-18,18],[-16,36],[-26,46],[-40,42],[-46,24]],
        // Sibirya (Ekvator doğusu)
        [[2,96],[16,94],[26,108],[24,132],[12,142],[-2,134],[-6,114]],
        // Kuzey & Güney Çin mikro-kıtaları
        [[10,152],[22,160],[16,174],[4,168]],
        [[-16,136],[-6,144],[-12,156],[-22,148]]
      ]
    },
    {
      id: 'karbonifer', ad: 'Dev Ormanlar & Böcekler', ik: '🪲',
      zaman: '359 – 299 Milyon Yıl Önce', kisa: '320 My',
      okyanus: '#155878', okyanus2: '#0a314a', kara: '#4e8449', kara2: '#356134',
      kiyi: 'rgba(138,228,220,0.34)', atmosfer: 'rgba(140,225,180,0.42)',
      gun: '~22,4 saat',
      oksijen: '%35! (Bugün %21 — Dünya tarihinin zirvesi)',
      sicaklik: '~+14 – 20 °C (Güney Kutbu\'nda dev buzullar)',
      ozet: 'Euramerika (Lavrasya) ile Gondvana Ekvator\'da çarpışıp Pangea\'yı kurmaya başladı. Ekvator dev bataklık ormanlarıyla kaplanırken aşırı oksijen böcekleri kabus boyutlarına ulaştırdı!',
      olay: '🪨 Bugün yaktığımız taşkömürünün neredeyse tamamı bu çağın 40 metrelik eğrelti ve pullu ağaç ormanlarının milyonlarca yıl toprağa gömülmesiyle oluştu.',
      kitalar: [
        // Euramerika / Lavrasya (kuzey-batı)
        [[-6,-66],[8,-62],[24,-54],[38,-40],[46,-14],[48,14],[40,40],[26,56],[12,50],[2,34],[-6,16],[-12,-8],[-14,-36]],
        // Gondvana (güneyde çarpışıyor)
        [[-16,-48],[-10,-22],[-12,6],[-14,34],[-26,58],[-44,74],[-64,66],[-78,38],[-80,-6],[-70,-42],[-50,-60],[-30,-60]],
        // Sibirya (kuzeydoğu)
        [[46,66],[62,74],[68,102],[58,126],[42,118],[38,92]],
        // Doğu Asya adaları
        [[10,118],[24,126],[20,144],[6,138]]
      ],
      buz: [
        [[-66,-36],[-64,12],[-68,54],[-82,36],[-84,-24]]
      ]
    },
    {
      id: 'pangea', ad: 'Pangea & İlk Dinozorlar (Triyas)', ik: '🌍',
      zaman: '252 – 201 Milyon Yıl Önce', kisa: '230 My',
      okyanus: '#185d85', okyanus2: '#0b3552', kara: '#c4a668', kara2: '#9a7e46',
      kiyi: 'rgba(155,228,242,0.34)', atmosfer: 'rgba(235,205,140,0.42)',
      gun: '~22,8 saat',
      oksijen: '%16',
      sicaklik: '~+18 – 24 °C (iç kesimler dev süper çöl)',
      ozet: 'Dünya\'daki neredeyse tüm karalar tek bir devasa C biçimli süper kıtada birleşti: PANGEA! Doğusunda sıcak Tethys Körfezi, etrafında tek bir dev okyanus (Panthalassa) vardı.',
      olay: '🦖 Büyük Permiyen yok oluşunun ardından sahne boşaldı; ilk dinozorlar ve fare büyüklüğündeki ilk memeliler aynı dönemde doğdu.',
      kitalar: [
        // Tek dev C-şekilli süper kıta Pangea (Scotese PALEOMAP profili)
        [[68,-38],[74,-8],[72,26],[64,58],[52,82],[38,92],[26,76],[22,52],[26,28],[22,12],[10,4],[-2,12],[-10,28],[-14,52],[-26,72],[-42,80],[-58,68],[-72,42],[-78,8],[-72,-28],[-56,-50],[-36,-56],[-16,-48],[2,-56],[18,-64],[36,-62],[54,-54]],
        // Güney Çin / Kimmer adaları (Tethys ağzında)
        [[8,98],[18,110],[12,124],[0,114]],
        [[-4,74],[4,86],[-6,94],[-14,82]]
      ],
      coller: [
        [[24,-40],[32,-12],[26,12],[8,-2],[-12,-28],[-18,-44],[4,-46]]
      ]
    },
    {
      id: 'jura', ad: 'Jura: Dev Dinozorlar Çağı', ik: '🦕',
      zaman: '201 – 145 Milyon Yıl Önce', kisa: '155 My',
      okyanus: '#196490', okyanus2: '#0b3857', kara: '#7ca358', kara2: '#557b3c',
      kiyi: 'rgba(155,232,245,0.36)', atmosfer: 'rgba(165,220,245,0.45)',
      gun: '~23,2 saat',
      oksijen: '%26',
      sicaklik: '~+18 °C (kutuplarda bile buz yok!)',
      ozet: 'Pangea ortadan çatlayıp kuzeyde Lavrasya, güneyde Gondvana olarak ikiye ayrıldı; aralarında sıcak Tethys Denizi açıldı. Atlas Okyanusu ince bir yarık olarak doğdu; dev uzun boyunlu dinozorların altın çağı başladı!',
      olay: '🪶 İlk tüylü dinozorlar ve ilk kuş (Archaeopteryx) gökyüzüne kanat çırptı; denizlerde dev ihtiyozorlar ve pleziyozorlar yüzdü.',
      kitalar: [
        // Lavrasya (K. Amerika + Avrasya birleşik)
        [[64,-96],[72,-54],[72,-8],[66,36],[60,82],[48,116],[34,114],[22,94],[24,64],[30,36],[36,12],[34,-12],[24,-34],[20,-62],[28,-88],[44,-104]],
        // Batı Gondvana (G. Amerika + Afrika henüz yapışık!)
        [[10,-62],[18,-36],[20,-8],[14,22],[4,40],[-14,48],[-32,42],[-48,24],[-54,-6],[-48,-36],[-30,-56],[-12,-66]],
        // Doğu Gondvana (Antarktika + Avustralya + Hindistan)
        [[-32,48],[-28,74],[-32,102],[-44,126],[-60,130],[-74,98],[-76,56],[-64,34],[-46,38]]
      ],
      coller: [
        [[12,-28],[16,8],[2,18],[-10,4],[-8,-24]]
      ]
    },
    {
      id: 'kretase', ad: 'Kretase & 66 My Asteroit', ik: '☄️',
      zaman: '145 – 66 Milyon Yıl Önce', kisa: '66 My',
      okyanus: '#1a6b98', okyanus2: '#0c3b5b', kara: '#87ae5e', kara2: '#5f843e',
      kiyi: 'rgba(162,235,248,0.38)', atmosfer: 'rgba(180,225,248,0.46)',
      gun: '~23,6 saat',
      oksijen: '%28 – 30',
      sicaklik: '~+20 °C (deniz seviyesi bugünden 200 m yüksek!)',
      ozet: 'T-Rex, Triceratops ve Velociraptor\'un son dinozor çağı! Yüksek deniz seviyesi Kuzey Amerika\'yı ortadan ikiye böldü (Batı İç Denizi). Hindistan dev bir ada olarak Asya\'ya doğru yüzüyordu!',
      olay: '☄️ 66 milyon yıl önce 10 km çapında dev bir asteroit Meksika Yucatán\'a (Chicxulub) çarptı! Dev tsunamiler, küresel yangınlar ve yıllar süren toz kışı kuş dışı tüm dinozorları sildi.',
      asteroit: [21.4, -89.5],
      kitalar: [
        // Laramidia (Batı K. Amerika — T-Rex ve Triceratops yurdu!)
        [[66,-142],[68,-112],[54,-104],[38,-102],[22,-98],[24,-110],[38,-122],[52,-134]],
        // Appalachia (Doğu K. Amerika + Grönland)
        [[68,-84],[74,-44],[58,-48],[44,-62],[32,-78],[38,-90],[52,-90]],
        // Güney Amerika (Atlas iyice açıldı)
        [[10,-76],[6,-54],[-6,-36],[-22,-42],[-38,-56],[-54,-68],[-44,-74],[-20,-78],[-2,-80]],
        // Avrasya (Avrupa adalar topluluğu + Asya)
        [[64,-6],[70,32],[72,82],[64,132],[46,138],[30,122],[22,102],[26,76],[34,48],[42,24],[48,2],[56,-8]],
        // Afrika (Tethys kıyısı sığ denizle kaplı)
        [[28,-14],[32,12],[28,34],[14,44],[-4,40],[-20,34],[-34,20],[-22,12],[-4,8],[6,-8],[16,-16]],
        // Yüzen Hindistan Adası!
        [[-8,62],[-6,76],[-18,78],[-28,68],[-22,58]],
        // Avustralya
        [[-20,116],[-16,136],[-24,152],[-40,148],[-44,128],[-34,114]],
        // Antarktika (buzsuz ve ormanlık!)
        [[-64,-62],[-68,-16],[-68,38],[-70,96],[-72,146],[-84,110],[-84,20],[-82,-44]]
      ]
    },
    {
      id: 'senozoyik', ad: 'Dev Memeliler & Megalodon', ik: '🦈',
      zaman: '66 – 2,6 Milyon Yıl Önce', kisa: '15 My',
      okyanus: '#1b6a96', okyanus2: '#0d3c5c', kara: '#a4b876', kara2: '#7a9452',
      kiyi: 'rgba(170,236,248,0.36)', atmosfer: 'rgba(195,230,248,0.48)',
      gun: '~23,9 saat',
      oksijen: '%21',
      sicaklik: '+22 °C → +14 °C',
      ozet: 'Dinozorlar gidince küçük memeliler devleşip karaları fethetti! Hindistan Asya\'ya çarpıp Himalayalar\'ı yükseltti. Okyanuslarda 18 metrelik Megalodon köpekbalığı, Amazon\'da 13 metrelik Titanoboa yılanı hüküm sürüyordu.',
      olay: '🏔️ Hindistan\'ın Asya\'ya çarpmasıyla Himalayalar ve Tibet Platosu yükseldi; Afrika\'da Büyük Yarık Vadisi açılıp ilk insan atalarının yolu çizildi.',
      kitalar: [
        // Kuzey Amerika
        [[68,-162],[72,-124],[70,-82],[56,-60],[40,-72],[26,-82],[18,-96],[24,-108],[36,-122],[52,-132],[60,-150]],
        // Grönland
        [[78,-54],[80,-22],[66,-36],[60,-46],[70,-56]],
        // Güney Amerika (Panama henüz kapalı değil — ada kıta!)
        [[11,-74],[6,-54],[-6,-35],[-22,-42],[-38,-57],[-54,-68],[-44,-74],[-18,-76],[0,-80]],
        // Avrasya (Hindistan yeni çarpmış!)
        [[68,-8],[72,38],[74,98],[66,154],[50,142],[34,122],[18,106],[8,78],[24,66],[32,48],[38,26],[42,4],[38,-9],[52,-4]],
        // Afrika & Arabistan
        [[34,-10],[36,10],[31,32],[28,48],[14,50],[10,48],[-10,40],[-26,32],[-34,19],[-18,12],[4,8],[6,-10],[16,-17]],
        // Avustralya
        [[-12,130],[-14,144],[-26,153],[-38,146],[-35,122],[-22,114]],
        // Antarktika
        [[-65,-62],[-70,-12],[-69,42],[-70,104],[-73,152],[-85,112],[-85,18],[-83,-46]]
      ],
      coller: [
        [[28,-12],[30,28],[18,36],[14,10],[18,-14]]
      ],
      buz: [
        [[-70,-40],[-72,40],[-74,135],[-86,80],[-86,-30]]
      ]
    },
    {
      id: 'buzul', ad: 'Buzul Çağı & İlk İnsanlar', ik: '🦣',
      zaman: '2,6 Milyon – 12.000 Yıl Önce', kisa: '50 Bin',
      okyanus: '#17547d', okyanus2: '#0a2f4d', kara: '#a4b592', kara2: '#7a8f6e',
      kiyi: 'rgba(190,236,252,0.38)', atmosfer: 'rgba(210,235,252,0.52)',
      gun: '24 saat',
      oksijen: '%21',
      sicaklik: '~+8 °C (bugünden 6 °C soğuk; denizler 120 m alçak!)',
      ozet: 'Kuzey Amerika ve Avrupa\'nın yarısı 3 km kalınlığında buzullarla kaplandı. Deniz seviyesi 120 m düştü: Beringia kara köprüsü açıldı, İngiltere Avrupa\'ya, Endonezya Asya\'ya bağlandı! Homo sapiens tüm kıtalara yayıldı.',
      olay: '🚶‍♂️ İlk insanlar donmuş Beringia kara köprüsünden yürüyerek Asya\'dan Amerika\'ya geçti; mağara duvarlarına mamut ve bizon resimleri çizdi.',
      kitalar: [
        // Kuzey Amerika + Beringia kara köprüsü Asya'ya bağlı!
        [[70,-166],[73,-126],[70,-80],[54,-58],[38,-74],[24,-82],[14,-88],[20,-104],[34,-120],[50,-130],[60,-152],[64,-176]],
        // Grönland
        [[80,-52],[81,-18],[65,-36],[60,-46],[70,-58]],
        // Güney Amerika (Panama kapalı!)
        [[11,-76],[6,-52],[-6,-35],[-23,-42],[-39,-58],[-55,-68],[-44,-74],[-18,-76],[2,-80]],
        // Avrasya + Sundaland (Endonezya karayla birleşik!) + Britanya birleşik!
        [[68,-8],[72,40],[74,104],[66,174],[52,142],[34,122],[14,108],[0,106],[8,96],[22,88],[8,77],[25,66],[30,48],[38,26],[41,4],[37,-9],[56,-6]],
        // Afrika & Arabistan
        [[35,-10],[36,10],[31,32],[28,48],[14,50],[10,48],[-10,40],[-26,32],[-34,19],[-18,12],[4,8],[6,-10],[16,-17]],
        // Sahul (Avustralya + Yeni Gine tek kıta!)
        [[-4,134],[-8,148],[-24,154],[-39,146],[-35,120],[-18,118]],
        // Antarktika
        [[-64,-62],[-69,-10],[-68,42],[-69,106],[-72,154],[-85,112],[-85,18],[-83,-46]]
      ],
      buz: [
        // Laurentide & Cordilleran buz tabakası (K. Amerika)
        [[72,-142],[74,-82],[56,-56],[41,-74],[43,-102],[50,-128],[62,-146]],
        // Fennoscandian buz tabakası (Kuzey Avrupa)
        [[72,4],[72,54],[56,48],[53,14],[56,-4],[64,0]],
        // Grönland & Antarktika
        [[80,-52],[81,-18],[64,-36],[60,-46],[70,-58]],
        [[-64,-62],[-69,-10],[-68,42],[-69,106],[-72,154],[-85,112],[-85,18],[-83,-46]]
      ]
    }
  ],
  canlilar: [
    // --- KAMBRİYEN (5) ---
    { id: 'anomalocaris', cag: 'kambriyen', ad: 'Anomalocaris', ik: '🦐', boy: '1 metre (dönemin devi!)', ll: [51.4, -116.5],
      fosil: 'Burgess Şeyli (Kanada) & Çin', beslenme: 'Etçil — dünyanın ilk süper avcısı',
      superguc: '16.000 mercekli bileşik gözler ve ön kollarında dikenli yakalama kıskaçları!',
      sasirtici: 'Bilim insanları ilk başta başını karides, ağzını denizanası, gövdesini sünger sanıp 3 farklı hayvan olarak kaydetmişti!',
      yasa: '520 milyon yıl önce sıcak Kambriyen denizinde yan yüzgeçlerinle dalgalanarak süzülüyorsun. Dev bileşik gözlerinle kumda gizlenen trilobiti fark edip dikenli ön kollarınla yakalıyorsun.',
      w: 'Anomalocaris' },
    { id: 'trilobit', cag: 'kambriyen', ad: 'Trilobit', ik: '🪲', boy: '5 – 70 cm', ll: [31.5, -5.0],
      fosil: 'Fas, ABD, Rusya (20.000\'den fazla tür!)', beslenme: 'Deniz tabanı süpürücüsü',
      superguc: 'Kalsit kristalinden (taştan!) yapılmış gözler — tarihin ilk gerçek gözleri!',
      sasirtici: 'Dinozorlardan bile uzun yaşadı: Dünya okyanuslarında tam 270 milyon yıl boyunca hüküm sürdü!',
      yasa: 'Deniz tabanında zırhlı kabuğunla ilerliyorsun. Yukarıdan bir Anomalocaris gölgesi geçince tespih böceği gibi anında top şekline kıvrılıp taş gibi zırhına saklanıyorsun.',
      w: 'Trilobite' },
    { id: 'hallucigenia', cag: 'kambriyen', ad: 'Hallucigenia', ik: '🐛', boy: '3 – 5 cm', ll: [24.6, 102.9],
      fosil: 'Burgess Şeyli (Kanada) & Chengjiang (Çin)', beslenme: 'Deniz süngerleri',
      superguc: 'Sırtında 7 çift uzun diken, karnında yumuşak yürüyen bacaklar!',
      sasirtici: 'O kadar tuhaf görünüyordu ki bilim insanları 40 yıl boyunca onu ters (sırt üstü) çizdi ve kuyruğunu kafası sandı!',
      yasa: 'Sığ Kambriyen denizinin tabanında ince bacaklarınla yürürken sırtındaki diken kalkanı seni dev avcılardan koruyor.',
      w: 'Hallucigenia' },
    { id: 'opabinia', cag: 'kambriyen', ad: 'Opabinia', ik: '👁️', boy: '7 cm', ll: [51.3, -116.4],
      fosil: 'Burgess Şeyli (Kanada)', beslenme: 'Deniz tabanı yumuşakçaları',
      superguc: 'Başında tam 5 adet saplı göz ve ucunda kıskaç olan uzun esnek hortum!',
      sasirtici: '1975\'te paleontologlar ilk rekonstrüksiyonunu konferansta gösterdiğinde tüm salon şaka sanıp kahkahaya boğuldu!',
      yasa: '5 gözünle etrafını 360 derece tarayarak sığ deniz çamurunun üstünde süzülüyorsun. Esnek hortumunu çamura daldırıp minik bir solucanı ağzına götürüyorsun.',
      w: 'Opabinia' },
    { id: 'pikaia', cag: 'kambriyen', ad: 'Pikaia (İlk Omurgalı Atası)', ik: '🐟', boy: '4 cm', ll: [51.5, -116.6],
      fosil: 'Burgess Şeyli (Kanada)', beslenme: 'Süzerek beslenen plankton avcısı',
      superguc: 'Sırtı boyunca uzanan esnek çubuk (notokord) — bugünkü omurganın ilk taslağı!',
      sasirtici: 'Balıklar, dinozorlar, kuşlar ve insanların uzak ataları tam da bu 4 santimetrelik minik yüzücüye benziyordu!',
      yasa: 'Zırhın yok ama esnek sırt çubuğun sayesinde diğer tüm canlılardan daha kıvrak yüzüp avcılardan zikzak çizerek kaçıyorsun.',
      w: 'Pikaia' },

    // --- KARBONİFER (5) ---
    { id: 'meganeura', cag: 'karbonifer', ad: 'Meganeura (Dev Yusufçuk)', ik: '🪰', boy: '70 cm kanat açıklığı!', ll: [46.3, 2.6],
      fosil: 'Commentry (Fransa) & İngiltere', beslenme: 'Etçil — küçük amfibiler ve böcekler',
      superguc: 'Bir şahin büyüklüğünde dev böcek; %35 oksijenli havada havada asılı kalabiliyordu!',
      sasirtici: 'Bugün yaşasaydı oksijen yetersizliğinden nefes alamayıp ölürdü — böceklerin boyutu atmosferdeki oksijene bağlıdır.',
      yasa: 'Dev eğrelti ormanının tepesinde 70 cm kanatlarınla vızıldayarak süzülüyorsun; havada tek bir kuş bile yok, gökyüzünün tek efendisi sensin!',
      w: 'Meganeura' },
    { id: 'arthropleura', cag: 'karbonifer', ad: 'Arthropleura (Dev Kırkayak)', ik: '🐛', boy: '2,6 metre uzunluk · 50 kg!', ll: [55.4, -1.6],
      fosil: 'İngiltere, İskoçya & K. Amerika', beslenme: 'Otçul (çürümüş yapraklar ve sporlar)',
      superguc: 'Karada yaşamış en büyük omurgasız — bir araba boyunda zırhlı kırkayak!',
      sasirtici: 'Korkutucu görünmesine rağmen tamamen barışçıl bir otçuldu; 30 zırhlı plakası onu her saldırıdan korurdu.',
      yasa: 'Nemli taşkömürü ormanının zemininde onlarca bacağınla hışırdayarak yürüyorsun; dev boyutun yüzünden hiçbir etçil sana yaklaşamıyor.',
      w: 'Arthropleura' },
    { id: 'dunkleosteus', cag: 'karbonifer', ad: 'Dunkleosteus (Zırhlı Dev Balık)', ik: '🦈', boy: '6 – 9 metre · 3 – 4 ton', ll: [41.5, -81.7],
      fosil: 'Ohio (ABD), Fas, Belçika', beslenme: 'Süper etçil — köpekbalıkları ve zırhlı balıklar',
      superguc: 'Dişleri yoktu; onun yerine birbirine sürtüp kendini bileyen dev kemik giyotin çeneleri vardı!',
      sasirtici: 'Ağzını saniyenin 1/50\'sinde açıp devasa bir vakum yaratarak avını içine çekebiliyordu; ısırık gücü T-Rex\'e yakındı!',
      yasa: 'Kalın kemik zırhlı başınla eski denizlerin tartışmasız hükümdarısın. İlk köpekbalıkları bile gölgeni görünce derinlere kaçıyor.',
      w: 'Dunkleosteus' },
    { id: 'tiktaalik', cag: 'karbonifer', ad: 'Tiktaalik (Karaya İlk Çıkan Balık)', ik: '🐊', boy: '2,5 metre', ll: [77.5, -85.0],
      fosil: 'Ellesmere Adası (Kanada Arktik)', beslenme: 'Sığ su balıkları ve kıyı böcekleri',
      superguc: 'Hem solungaç hem akciğer; yüzgeçlerinin içinde gerçek bilek ve parmak kemikleri!',
      sasirtici: 'Boynunu sağa sola çevirebilen ilk balıktı — tüm dört ayaklı kara hayvanlarının (amfibi, sürüngen, memeli) dönüm noktası!',
      yasa: 'Sığ bataklık kıyısında güçlü ön yüzgeçlerinle çamura basıp başını sudan çıkarıyorsun; ilk kez bir omurgalı karadaki böceklerin peşine düşüyor!',
      w: 'Tiktaalik' },
    { id: 'pulmonoscorpius', cag: 'karbonifer', ad: 'Pulmonoscorpius (Dev Akrep)', ik: '🦂', boy: '70 cm (ev kedisi boyunda!)', ll: [55.9, -3.5],
      fosil: 'East Kirkton (İskoçya)', beslenme: 'Etçil — böcekler ve küçük dört ayaklılar',
      superguc: 'Gündüz avlanabilen iri yan gözler ve zehirli dev kuyruk iğnesi!',
      sasirtici: 'Bugünkü en büyük imparator akrebinin neredeyse 4 katı boyundaydı!',
      yasa: 'Dev bataklık ağaçlarının devrilmiş gövdelerinin altında pusuya yatıp yüksek oksijenli nemli ormanda dev böcekleri avlıyorsun.',
      w: 'Pulmonoscorpius' },

    // --- PANGEA / TRİYAS (6) ---
    { id: 'dimetrodon', cag: 'pangea', ad: 'Dimetrodon (Yelken Sırtlı)', ik: '🦎', boy: '3,5 – 4,5 metre', ll: [33.5, -99.2],
      fosil: 'Teksas & Oklahoma (ABD), Almanya', beslenme: 'Etçil — dönemin baş avcısı',
      superguc: 'Sırtındaki dev damarlı yelken güneş paneli gibi çalışıp vücudunu hızla ısıtırdı!',
      sasirtici: 'Dinozor sanılır ama DEĞİLDİR! Dinozorlardan 40 milyon yıl önce yaşamış, memelilere (insana!) dinozorlardan daha yakın bir akrabadır.',
      yasa: 'Sabah serinliğinde sırt yelkenini Pangea güneşine çeviriyorsun; 20 dakikada ısınıp hâlâ uyuşuk olan avlarını kolayca yakalıyorsun.',
      w: 'Dimetrodon' },
    { id: 'coelophysis', cag: 'pangea', ad: 'Coelophysis (İlk Dinozorlardan)', ik: '🦖', boy: '3 metre · 20 kg', ll: [36.3, -106.5],
      fosil: 'Ghost Ranch, New Mexico (ABD — yüzlerce iskelet!)', beslenme: 'Hızlı etçil sürü avcısı',
      superguc: 'İçi boş kuş gibi hafif kemikler — Pangea\'nın en hızlı koşucularından!',
      sasirtici: 'Sadece 20 kg ağırlığıyla dev sürüngenlerin arasında zekâsı ve hızıyla hayatta kalıp dinozor çağını başlattı.',
      yasa: 'Pangea\'nın kızıl kurak nehir yataklarında sürünle birlikte koşuyorsun; uzun ince boynunla küçük kertenkeleleri havada kapıyorsun.',
      w: 'Coelophysis' },
    { id: 'plateosaurus', cag: 'pangea', ad: 'Plateosaurus (İlk Dev Otçul)', ik: '🦕', boy: '8 – 10 metre · 4 ton', ll: [47.5, 8.0],
      fosil: 'Almanya, İsviçre, Fransa', beslenme: 'Otçul — yüksek ağaç yaprakları',
      superguc: 'İki ayağı üstünde yürüyüp yüksek kozalaklı ağaçlara uzanan ilk dev dinozor!',
      sasirtici: 'Yumurtadan çıktığında minikti ama yiyecek bulduğu yıla göre ya 5 metre ya da 10 metre boya ulaşıyordu!',
      yasa: 'Pangea\'nın kuzey ormanlarında sürünle yürüyerek yaprakları topluyor, ön pençelerindeki dev başparmak dikenleriyle kendini koruyorsun.',
      w: 'Plateosaurus' },
    { id: 'postosuchus', cag: 'pangea', ad: 'Postosuchus (Zırhlı Süper Avcı)', ik: '🐊', boy: '4 – 5 metre · 300 kg', ll: [33.2, -101.4],
      fosil: 'Teksas & Kuzey Karolina (ABD)', beslenme: 'Süper etçil',
      superguc: 'Sırtı kalın kemik zırh plakalarıyla kaplı, iki arka ayağı üstünde koşabilen dev timsah akrabası!',
      sasirtici: 'Dinozorlar daha küçükken Triyas dünyasının "T-Rex"i oydu; ancak Triyas sonundaki yok oluşta sahneyi dinozorlara bıraktı!',
      yasa: 'Pangea\'nın nehir kıyılarında ağır zırhın ve testere dişlerinle tüm küçük dinozorları korkuyla kaçırıyorsun.',
      w: 'Postosuchus' },
    { id: 'lystrosaurus', cag: 'pangea', ad: 'Lystrosaurus (Yok Oluşun Galibi)', ik: '🐗', boy: '1 – 2 metre', ll: [-32.2, 24.5],
      fosil: 'Güney Afrika, Hindistan, Antarktika, Çin!', beslenme: 'Otçul (kökler ve sert bitkiler)',
      superguc: 'Büyük Permiyen Yok Oluşunda canlıların %95\'i ölürken o hayatta kalıp tüm Pangea\'ya yayıldı!',
      sasirtici: 'Bir dönem karadaki tüm omurgalı hayvanların %95\'i sadece bu tek türden oluşuyordu! Antarktika\'da bulunması kıtaların birleşik (Pangea) olduğunun en büyük kanıtıdır!',
      yasa: 'Büyük yok oluş sonrası neredeyse bomboş kalan Pangea ovalarında iki fildişi benzeri dişinle toprağı kazıp kök yiyorsun.',
      w: 'Lystrosaurus' },
    { id: 'tanystropheus', cag: 'pangea', ad: 'Tanystropheus (Zürafa Boyunlu)', ik: '🦕', boy: '6 metre (3 metresi sadece boyun!)', ll: [45.9, 8.9],
      fosil: 'Monte San Giorgio (İsviçre / İtalya)', beslenme: 'Balık ve kalamar avcısı',
      superguc: 'Gövdesinden ve kuyruğundan daha uzun, sadece 13 dev omurdan oluşan 3 metrelik boyun!',
      sasirtici: 'Kıyıda veya sığ suda gövdesini gizleyip uzun boynunu olta gibi suya uzatarak balıkları şaşırtıyordu!',
      yasa: 'Tethys Denizi\'nin berrak sığ sularında uzun boynunla balık sürülerine sessizce yaklaşıp tek hamlede avını kapıyorsun.',
      w: 'Tanystropheus' },

    // --- JURA (8) ---
    { id: 'brachiosaurus', cag: 'jura', ad: 'Brachiosaurus', ik: '🦕', boy: '22 m uzun · 13 m yüksek · 50 ton!', ll: [39.1, -108.7],
      fosil: 'Colorado & Utah (ABD — Morrison Formasyonu)', beslenme: 'Otçul — 4 katlı bina yüksekliğindeki ağaç tepeleri',
      superguc: 'Ön bacakları arka bacaklarından uzun tek dev dinozor; kalbi 400 kg ağırlığındaydı!',
      sasirtici: 'Günde 400 kg yaprak yiyordu ve yiyecekleri çiğnemeden bütün yutup midesindeki taşlarla (gastrolit) öğütüyordu!',
      yasa: 'Jura ormanlarının üstünde 13 metre yükseklikte başını sallıyorsun. Hiçbir yırtıcı yetişkin bir Brachiosaurus\'a saldırmaya cesaret edemiyor.',
      w: 'Brachiosaurus' },
    { id: 'stegosaurus', cag: 'jura', ad: 'Stegosaurus', ik: '🦕', boy: '9 metre · 5 ton', ll: [39.7, -105.2],
      fosil: 'Morrison Formasyonu (ABD) & Portekiz', beslenme: 'Otçul — alçak eğreltiler',
      superguc: 'Sırtında 17 dev kemik plaka ve kuyruğunda 1 metrelik 4 ölümcül diken (Thagomizer)!',
      sasirtici: 'Kocaman 5 tonluk gövdesine rağmen beyni sadece bir ceviz büyüklüğündeydi (~80 gram)!',
      yasa: 'Bir Allosaurus yaklaşınca sırt plakalarına kan pompalayıp parlak kırmızıya dönüyor ve dikenli kuyruğunu savurarak onu uzaklaştırıyorsun.',
      w: 'Stegosaurus' },
    { id: 'allosaurus', cag: 'jura', ad: 'Allosaurus (Jura\'nın Aslanı)', ik: '🦖', boy: '9 – 12 metre · 2,5 ton', ll: [39.3, -110.7],
      fosil: 'Utah Cleveland-Lloyd (46+ iskelet!)', beslenme: 'Süper etçil — Stegosaurus ve genç sauropodlar',
      superguc: 'Üst çenesini baltaya benzer şekilde aşağı savurup avını yaralayabiliyordu!',
      sasirtici: 'T-Rex\'ten 80 milyon yıl önce yaşadı — yani T-Rex\'in Stegosaurus\'a uzaklığı, bizim T-Rex\'e uzaklığımızdan daha fazladır!',
      yasa: 'Jura savanlarında üç parmaklı keskin pençelerinle avını takip ediyorsun; dönemin tartışmasız en tehlikeli kara avcısısın.',
      w: 'Allosaurus' },
    { id: 'diplodocus', cag: 'jura', ad: 'Diplodocus (Kamçı Kuyruklu Dev)', ik: '🦕', boy: '26 – 28 metre · 15 ton', ll: [41.9, -106.0],
      fosil: 'Wyoming & Utah (ABD — Morrison Formasyonu)', beslenme: 'Otçul — alçak ve orta boylu bitkiler',
      superguc: '14 metrelik ince uzun kuyruğunu savurduğunda ucunda ses hızını aşan bir kamçı patlaması çıkarabiliyordu!',
      sasirtici: 'Kafası bir at kafası kadar küçüktü ama baştan kuyruğa iki belediye otobüsü uzunluğundaydı!',
      yasa: 'Devasa sürünle Jura düzlüklerinde yürürken uzun boynunla eğrelti tarlalarını elektrik süpürgesi gibi temizliyorsun.',
      w: 'Diplodocus' },
    { id: 'archaeopteryx', cag: 'jura', ad: 'Archaeopteryx (İlk Kuş)', ik: '🪶', boy: '50 cm (karga boyunda)', ll: [48.9, 11.0],
      fosil: 'Solnhofen kireçtaşları (Almanya)', beslenme: 'Böcekler ve küçük kertenkeleler',
      superguc: 'Hem dinozor dişleri ve kemikli kuyruğu, hem de gerçek uçuş tüyleri!',
      sasirtici: 'Kuşların doğrudan dinozorlardan evrimleştiğini kanıtlayan tarihin en ünlü fosilidir!',
      yasa: 'Jura Avrupa adalarındaki sığ lagün ağaçlarından atlayıp tüylü kanatlarınla süzülerek havadaki böcekleri avlıyorsun.',
      w: 'Archaeopteryx' },
    { id: 'liopleurodon', cag: 'jura', ad: 'Liopleurodon (Jura Deniz Canavarı)', ik: '🐋', boy: '7 – 10 metre', ll: [52.6, -0.2],
      fosil: 'İngiltere, Fransa, Almanya, Rusya', beslenme: 'Deniz süper avcısı',
      superguc: '4 dev kürek yüzgeçle su altında uçarcasına hızlanma ve suyun kokusunu alan burun delikleri!',
      sasirtici: 'Dinozor değil, dev bir deniz sürüngeniydi (Pliosaur) — kafatası tek başına 1,5 metre uzunluğundaydı.',
      yasa: 'Tethys Denizi\'nin mavi derinliklerinde 4 güçlü yüzgecinle süzülüp su altındaki koku izini takip ederek avını yakalıyorsun.',
      w: 'Liopleurodon' },
    { id: 'ichthyosaurus', cag: 'jura', ad: 'Ichthyosaurus (Deniz Yunusu Sürüngeni)', ik: '🐬', boy: '2 – 3,5 metre', ll: [50.7, -2.9],
      fosil: 'Lyme Regis (İngiltere — Mary Anning\'in keşfi!)', beslenme: 'Kalamar (belemnit) ve balık',
      superguc: 'Bir yemek tabağı büyüklüğünde dev gözler — karanlık derin denizde mükemmel görüş!',
      sasirtici: 'Yumurta bırakmak için karaya çıkmıyordu; tıpkı yunuslar gibi yavrularını doğrudan suda canlı doğuruyordu! 12 yaşındaki Mary Anning 1811\'de ilk tam iskeletini buldu.',
      yasa: 'Jura okyanusunun yüzeyine fırlayıp nefes alıyor, sonra dev gözlerinle 500 metre derindeki kalamar sürülerine dalıyorsun.',
      w: 'Ichthyosaurus' },
    { id: 'pterodactylus', cag: 'jura', ad: 'Pterodactylus (İlk Uçan Sürüngenlerden)', ik: '🦅', boy: '1 – 1,5 m kanat açıklığı', ll: [48.8, 11.1],
      fosil: 'Solnhofen (Almanya)', beslenme: 'Balık ve küçük omurgasızlar',
      superguc: 'Aşırı uzamış tek bir dördüncü parmak üzerine gerili deri kanatlar!',
      sasirtici: 'Bilim tarihinde tanımlanan İLK uçan sürüngendi (1784) — bu yüzden tüm uçan sürüngenlere halk arasında "pterodaktil" denir.',
      yasa: 'Solnhofen lagünlerinin üstünde süzülüp ince dişli gaganla su yüzeyindeki balıkları kapıyorsun.',
      w: 'Pterodactylus' },

    // --- KRETASE (12) ---
    { id: 'trex', cag: 'kretase', ad: 'Tyrannosaurus Rex (T-Rex)', ik: '🦖', boy: '12,5 metre · 8 – 9 ton!', ll: [47.5, -106.9],
      fosil: 'Hell Creek — Montana & Güney Dakota (ABD)', beslenme: 'Süper etçil — Triceratops, Edmontosaurus',
      superguc: 'Kara tarihinin en güçlü ısırığı: 6 ton basınç — bir otomobili tek ısırıkta ezebilirdi!',
      sasirtici: 'Gözleri kartaldan 13 kat keskin, koku alma duyusu köpekten güçlüydü; yavruları muhtemelen ince tüylerle kaplıydı!',
      yasa: '68 milyon yıl önce Batı Kuzey Amerika ormanlarında yürürken her adımın toprağı titretiyor. Keskin koku duyunla kilometrelerce ötedeki sürüyü buluyorsun.',
      w: 'Tyrannosaurus' },
    { id: 'triceratops', cag: 'kretase', ad: 'Triceratops', ik: '🦏', boy: '9 metre · 10 ton', ll: [45.8, -104.2],
      fosil: 'Hell Creek — Wyoming, Montana (ABD)', beslenme: 'Otçul — sert palmiyeler ve eğreltiler',
      superguc: '2,5 metre genişliğinde kemik yakalık kalkan ve 1 metrelik 3 keskin boynuz!',
      sasirtici: 'T-Rex\'e kafa tutabilen neredeyse tek dinozordu! Fosillerinde T-Rex ısırık izleri ve iyileşmiş savaş yaraları bulundu.',
      yasa: 'Sürünle birlikte daire oluşturup yavruları ortaya alıyorsun; üç boynuzunu dev bir T-Rex\'e doğru eğip geri adım atmıyorsun!',
      w: 'Triceratops' },
    { id: 'velociraptor', cag: 'kretase', ad: 'Velociraptor', ik: '🦅', boy: '2 metre · 15 kg (hindi boyunda!)', ll: [44.1, 103.7],
      fosil: 'Flaming Cliffs — Gobi Çölü (Moğolistan)', beslenme: 'Çevik etçil avcı',
      superguc: 'Ayaklarında 9 cm orak şeklinde öldürücü tırnak ve gerçek kuş tüyleri!',
      sasirtici: 'Filmlerdekinin aksine insan boyunda değil, bir hindi boyundaydı ve tamamen tüylüydü! Bir Protoceratops\'la dövüşürken kum fırtınasında birlikte fosilleşmiş örneği bulundu.',
      yasa: 'Gobi Çölü\'nün sıcak kumullarında tüylü kollarınla dengeni koruyarak koşuyor, orak pençenle kendinden büyük avların üstüne atılıyorsun.',
      w: 'Velociraptor' },
    { id: 'spinosaurus', cag: 'kretase', ad: 'Spinosaurus (Nehir Devi)', ik: '🐊', boy: '14 – 15 metre (T-Rex\'ten uzun!)', ll: [31.0, -4.1],
      fosil: 'Kem Kem (Fas) & Bahariye (Mısır)', beslenme: 'Dev nehir balıkları (8 m testere balıkları!)',
      superguc: 'Sırtında 2 metrelik dev yelken ve yüzmek için kürek şeklinde kuyruk — bilinen ilk yüzücü dinozor!',
      sasirtici: 'Bilinen en uzun etçil dinozordur! Sahra Çölü 95 milyon yıl önce devasa nehirler ve bataklıklarla kaplıydı.',
      yasa: 'Antik Kuzey Afrika\'nın dev nehirlerinde timsah gibi yüzüp konik dişli uzun çenenle 4 metrelik nehir balıklarını yakalıyorsun.',
      w: 'Spinosaurus' },
    { id: 'mosasaurus', cag: 'kretase', ad: 'Mosasaurus (Kretase Okyanus Kralı)', ik: '🦈', boy: '15 – 17 metre · 15 ton', ll: [50.8, 5.7],
      fosil: 'Hollanda (Meuse Nehri), ABD, Fas, Antarktika', beslenme: 'Her şey: köpekbalıkları, dev kaplumbağalar, ammonitler',
      superguc: 'Ağzının tavanında ikinci bir diş sırası — yakalanan av asla geriye kayamazdı!',
      sasirtici: 'Dinozor değil, bugünkü Komodo ejderinin ve yılanların dev deniz akrabasıydı!',
      yasa: 'Kretase\'nin sıcak küresel okyanuslarında en tepedeki avcısın; köpekbalıkları bile gölgeni görünce kaçıyor.',
      w: 'Mosasaurus' },
    { id: 'quetzalcoatlus', cag: 'kretase', ad: 'Quetzalcoatlus (Zürafa Boyunda Uçan Dev)', ik: '🦅', boy: '10 – 11 metre kanat açıklığı!', ll: [29.3, -103.3],
      fosil: 'Big Bend, Teksas (ABD)', beslenme: 'Küçük dinozorlar, balıklar ve leşler',
      superguc: 'Yerde durduğunda bir zürafa kadar uzun; 4 uzvunu birden fırlatarak 2,5 m havaya zıplayıp kalkıyordu!',
      sasirtici: 'Dünya tarihinde uçmuş en büyük canlıdır — küçük bir özel jet uçağı kadar kanat açıklığına sahipti!',
      yasa: 'Sıcak hava akımlarına (termallere) tutunup neredeyse hiç kanat çırpmadan Kretase kıtalarının üstünde yüzlerce kilometre süzülüyorsun.',
      w: 'Quetzalcoatlus' },
    { id: 'ankylosaurus', cag: 'kretase', ad: 'Ankylosaurus (Yaşayan Tank)', ik: '🛡️', boy: '8 metre · 6 ton', ll: [47.8, -107.2],
      fosil: 'Hell Creek — Montana (ABD) & Alberta (Kanada)', beslenme: 'Otçul — alçak eğreltiler ve meyveler',
      superguc: 'Göz kapaklarına kadar kemik zırhla kaplı gövde ve kemik kırıcı dev kuyruk topuzu!',
      sasirtici: 'T-Rex\'in bile ısırmaktan çekindiği tek otçuldu; kuyruk topuzu tek darbede bir T-Rex bacağını kırabilecek güçteydi!',
      yasa: 'Yere çömelip kemik zırhını kalkan yapınca hiçbir diş sana işlemiyor; kuyruk topuzunu bir balyoz gibi savuruyorsun.',
      w: 'Ankylosaurus' },
    { id: 'argentinosaurus', cag: 'kretase', ad: 'Argentinosaurus (Karaların En Ağırı)', ik: '🦕', boy: '35 metre uzun · 75 – 85 ton!', ll: [-38.9, -69.2],
      fosil: 'Neuquén / Patagonya (Arjantin)', beslenme: 'Otçul — kozalaklı ormanlar',
      superguc: '12 Afrika fili ağırlığında; tek bir sırt omuru bir yetişkin insan boyundaydı (1,6 m)!',
      sasirtici: 'Yumurtası sadece bir futbol topu kadardı — ama doğduktan sonra 40 yılda ağırlığı 15.000 katına çıkıyordu!',
      yasa: 'Patagonya\'nın gür ormanlarında yürürken her adımın toprağı sarsıyor; yetişkin olduğunda dünyadaki hiçbir yırtıcı sana yaklaşamıyor.',
      w: 'Argentinosaurus' },
    { id: 'parasaurolophus', cag: 'kretase', ad: 'Parasaurolophus (Borazan Sorguçlu)', ik: '🦕', boy: '9,5 metre · 2,5 ton', ll: [50.7, -111.5],
      fosil: 'Alberta (Kanada), Utah & New Mexico (ABD)', beslenme: 'Otçul — yapraklar ve çam iğneleri',
      superguc: 'Başının arkasındaki 1,8 metrelik içi boş kemik boru dev bir trombon gibi ses çıkarıyordu!',
      sasirtici: 'Bilim insanları kafatasını CT taramasıyla bilgisayar ortamında üfleyip 75 milyon yıl önceki gerçek sesini yeniden canlandırdı!',
      yasa: 'Sürüne tehlike uyarısı vermek için başındaki kemik borazandan kilometrelerce öteden duyulan derin, yankılı bir melodi çıkarıyorsun.',
      w: 'Parasaurolophus' },
    { id: 'therizinosaurus', cag: 'kretase', ad: 'Therizinosaurus (1 Metrelik Pençeler)', ik: '🦖', boy: '10 metre · 5 ton', ll: [43.5, 100.5],
      fosil: 'Nemegt Formasyonu — Gobi Çölü (Moğolistan)', beslenme: 'Otçul (korkunç pençelere rağmen barışçıl!)',
      superguc: 'Hayvanlar aleminin en uzun pençeleri: tırpan gibi tam 1 metre uzunluğunda!',
      sasirtici: 'İlk pençe fosili bulunduğunda bilim insanları onu dev bir deniz kaplumbağasının kaburgası sanmıştı!',
      yasa: 'Tüylü dev gövden ve 1 metrelik pençelerinle yüksek ağaç dallarını kendine çekip yaprak yiyorsun; yaklaşan Tarbosaurus\'u pençe gösterisiyle kaçırıyorsun.',
      w: 'Therizinosaurus' },
    { id: 'pteranodon', cag: 'kretase', ad: 'Pteranodon (Okyanus Süzücüsü)', ik: '🦅', boy: '6 – 7 metre kanat açıklığı', ll: [38.8, -100.8],
      fosil: 'Kansas (ABD — antik Batı İç Denizi tabanı!)', beslenme: 'Deniz balıkları',
      superguc: 'Başının arkasında dümen görevi gören dev kemik ibik ve tamamen dişsiz hafif gaga!',
      sasirtici: 'Adı Yunanca "dişsiz kanat" demektir. Fosilinin çoğu bugün kara olan Kansas eyaletinde bulunur — çünkü 85 milyon yıl önce orası denizdi!',
      yasa: 'Batı İç Denizi\'nin rüzgârlarına kanatlarını açıp albatros gibi saatlerce süzülerek gümüş renkli balıkları avlıyorsun.',
      w: 'Pteranodon' },
    { id: 'carnotaurus', cag: 'kretase', ad: 'Carnotaurus (Boynuzlu Boğa Dinozor)', ik: '🦖', boy: '8 metre · 1,5 ton', ll: [-43.3, -68.9],
      fosil: 'Chubut / Patagonya (Arjantin)', beslenme: 'Hızlı etçil koşucu',
      superguc: 'Gözlerinin üstünde iki boğa boynuzu ve saatte 50 km hıza ulaşan devasa kalça kasları!',
      sasirtici: 'Kolları T-Rex\'inkinden bile küçüktü (neredeyse güdük!) ama derisi pullu fosil iziyle tam olarak korunmuş nadir dinozorlardandır.',
      yasa: 'Güney Amerika ovalarında boğa boynuzlarınla rakiplerine kafa tutup yıldırım hızıyla avının peşine düşüyorsun.',
      w: 'Carnotaurus' },

    // --- SENOZOYİK (8) ---
    { id: 'megalodon', cag: 'senozoyik', ad: 'Megalodon (Dev Köpekbalığı)', ik: '🦈', boy: '15 – 20 metre · 50 ton!', ll: [33.0, -79.9],
      fosil: 'Tüm okyanus kıyıları (18 cm dev dişler!)', beslenme: 'Balinalar, dev foklar ve diğer köpekbalıkları',
      superguc: '18 tonluk ısırık gücü — T-Rex\'in tam 3 katı! Bir balinayı ikiye bölebiliyordu.',
      sasirtici: 'İskeleti kıkırdak olduğu için çürüdü; geriye sadece insan eli büyüklüğünde binlerce üçgen dişi kaldı.',
      yasa: '15 milyon yıl önce sıcak okyanusların mutlak kralısın. 276 testere dişinle göç eden balina sürülerini takip ediyorsun.',
      w: 'Megalodon' },
    { id: 'titanoboa', cag: 'senozoyik', ad: 'Titanoboa (Dev Yılan)', ik: '🐍', boy: '13 metre · 1,1 ton!', ll: [11.1, -72.6],
      fosil: 'Cerrejón kömür madeni (Kolombiya)', beslenme: 'Dev timsahlar ve dev kaplumbağalar',
      superguc: 'Bir otobüs uzunluğunda, en kalın yeri 1 metre çapında boğucu süper yılan!',
      sasirtici: 'Dinozorların yok oluşundan sadece 6 milyon yıl sonra tropik sıcaklık +32 °C\'ye çıkınca yılanlar bu dev boyuta ulaştı.',
      yasa: 'Eski Amazon bataklıklarında sessizce süzülüp 4 metrelik timsahları kaslı gövdenle sararak avlıyorsun.',
      w: 'Titanoboa' },
    { id: 'paraceratherium', cag: 'senozoyik', ad: 'Paraceratherium (Dev Gergedan)', ik: '🦏', boy: '7,5 m uzun · 5 m omuz · 17 ton!', ll: [40.2, 33.8],
      fosil: 'Anadolu (Çankırı / Kırıkkale!), Pakistan, Kazakistan, Moğolistan', beslenme: 'Otçul — ağaç tepeleri',
      superguc: 'Karada yaşamış en büyük memeli! Bugünkü en büyük Afrika filinin 3 katı ağırlığında!',
      sasirtici: 'Bu dev boynuzsuz gergedanın fosilleri Türkiye\'de Çankırı ve Kırıkkale\'de de bulundu!',
      yasa: '25 milyon yıl önce ormanlık Anadolu ve Asya ovalarında zürafa gibi yüksek ağaç dallarını yiyerek yürüyorsun.',
      w: 'Paraceratherium' },
    { id: 'smilodon', cag: 'senozoyik', ad: 'Smilodon (Kılıç Dişli Kaplan)', ik: '🐯', boy: '2,2 metre · 300 kg', ll: [34.06, -118.35],
      fosil: 'La Brea Katran Çukurları (Los Angeles) & G. Amerika', beslenme: 'Bizon, tembel hayvan ve genç mamutlar',
      superguc: '28 cm uzunluğunda kılıç gibi köpek dişleri ve 120 derece açılabilen çene!',
      sasirtici: 'Sadece 10.000 yıl önce — ilk insanların gözleri önünde — nesli tükendi!',
      yasa: 'Güçlü ön bacaklarınla dev bir bizonu yere devirip kılıç dişlerinle tek hamlede avını yakalıyorsun.',
      w: 'Smilodon' },
    { id: 'basilosaurus', cag: 'senozoyik', ad: 'Basilosaurus (Antik Dev Balina)', ik: '🐋', boy: '16 – 18 metre · 15 ton', ll: [29.3, 30.0],
      fosil: 'Vadi el-Hitan — Balinalar Vadisi (Mısır Sahra Çölü!)', beslenme: 'Diğer küçük balinalar ve köpekbalıkları',
      superguc: 'Kuyruğunun yanında hâlâ minik arka bacakları olan dev yılan biçimli antik balina!',
      sasirtici: 'Mısır\'ın bugün kupkuru olan Sahra Çölü\'ndeki "Balinalar Vadisi"nde yüzlerce Basilosaurus iskeleti kumun üstünde yatıyor — çünkü 40 milyon yıl önce orası Tethys Denizi\'ydi!',
      yasa: 'Antik Mısır denizinde yılan gibi kıvrılarak yüzüyor, küçük arka bacaklarınla karadaki atalarının son izini taşıyorsun.',
      w: 'Basilosaurus' },
    { id: 'andrewsarchus', cag: 'senozoyik', ad: 'Andrewsarchus (Dev Etçil Memeli)', ik: '🐺', boy: '4,5 metre · 1 ton', ll: [43.8, 111.9],
      fosil: 'İç Moğolistan (Çin)', beslenme: 'Etçil & leşçil — dev kaplumbağalar ve otçullar',
      superguc: 'Tek başına 83 cm uzunluğunda dev kafatası — kara tarihinin en iri etçil memelilerinden!',
      sasirtici: 'Kurt gibi görünmesine rağmen genetik olarak kurtlardan çok suaygırlarına ve balinalara daha yakındı!',
      yasa: '40 milyon yıl önce Asya kıyılarında dev çenenle kumsala vuran deniz canlılarını ve kabukluları kırıp yiyorsun.',
      w: 'Andrewsarchus' },
    { id: 'gastornis', cag: 'senozoyik', ad: 'Gastornis (Dev Terör Kuşu)', ik: '🦤', boy: '2 metre · 175 kg', ll: [49.8, 8.7],
      fosil: 'Messel Çukuru (Almanya), Fransa & ABD', beslenme: 'Sert meyveler, tohumlar ve küçük hayvanlar',
      superguc: 'Kocaman fındıkkıran gibi gaga ve güçlü koşucu bacaklar!',
      sasirtici: 'Dinozorlar yok olunca kısa süreliğine dev uçamayan kuşlar ormanların en büyük canlıları hâline geldi!',
      yasa: '50 milyon yıl önce tropik Avrupa ormanlarında at boyundaki küçük memelilerin arasından dev adımlarla geçiyorsun.',
      w: 'Gastornis' },
    { id: 'gigantopithecus', cag: 'senozoyik', ad: 'Gigantopithecus (Dev Tarihöncesi Maymun)', ik: '🦍', boy: '3 metre · 300 kg!', ll: [22.8, 108.3],
      fosil: 'Güney Çin & Vietnam mağaraları', beslenme: 'Otçul — bambu ve tropik meyveler',
      superguc: 'Dünya tarihinde yaşamış en büyük primat — bir gorilin neredeyse iki katı!',
      sasirtici: 'İlk dişleri 1935\'te Hong Kong\'daki geleneksel bir eczanede "ejderha dişi" diye satılırken keşfedildi!',
      yasa: 'Güney Çin\'in sık bambu ormanlarında dev kollarınla bambu gövdelerini kırıp çiğniyorsun.',
      w: 'Gigantopithecus' },

    // --- BUZUL ÇAĞI (6) ---
    { id: 'mamut', cag: 'buzul', ad: 'Tüylü Mamut', ik: '🦣', boy: '3,5 m omuz · 6 ton · 4 m dişler!', ll: [68.5, 135.0],
      fosil: 'Sibirya permafrostu (tüyleriyle donmuş!), Avrupa, K. Amerika', beslenme: 'Buzul bozkırı otları (günde 180 kg)',
      superguc: '1 metre uzunluğunda çift katmanlı kürk, 10 cm yağ tabakası ve kar küreyen kıvrık fildişleri!',
      sasirtici: 'Mısır\'da Büyük Giza Piramidi inşa edilirken bile Sibirya\'daki Wrangel Adası\'nda hâlâ son tüylü mamutlar yaşıyordu (MÖ 1650)!',
      yasa: '-35 °C Sibirya rüzgârında sürünle yan yana durup karı dev fildişlerinle kazıyarak alttaki kuru otlara ulaşıyorsun.',
      w: 'Woolly_mammoth' },
    { id: 'megatherium', cag: 'buzul', ad: 'Megatherium (Fil Boyunda Tembel Hayvan)', ik: '🦥', boy: '6 metre · 4 ton!', ll: [-34.6, -58.4],
      fosil: 'Arjantin (Charles Darwin bizzat buldu!) & G. Amerika', beslenme: 'Otçul — yüksek ağaç dalları',
      superguc: 'Bir Afrika fili büyüklüğünde dev yer tembel hayvanı ve 30 cm kazma pençeleri!',
      sasirtici: 'Brezilya\'da dev pençeleriyle kazdığı yüzlerce metre uzunluğundaki yeraltı tünelleri (paleoburrow) bugün hâlâ duruyor!',
      yasa: 'Güney Amerika bozkırlarında kalın kuyruğunu tabure gibi yere dayayıp arka ayakların üstüne kalkarak yüksek dalları kendine çekiyorsun.',
      w: 'Megatherium' },
    { id: 'kisa-yuzlu-ayi', cag: 'buzul', ad: 'Dev Kısa Yüzlü Ayı (Arctodus)', ik: '🐻', boy: '3,5 m (ayağa kalkınca!) · 900 kg', ll: [38.5, -120.5],
      fosil: 'Kaliforniya & Yukon (K. Amerika)', beslenme: 'Etçil & leşçil — Buzul Çağı\'nın en büyük kara etçili',
      superguc: 'Uzun bacaklarıyla saatte 60 km koşabiliyordu — kılıç dişli kaplanların bile avını elinden alırdı!',
      sasirtici: 'İlk insanların Amerika\'ya geçişini binlerce yıl geciktiren korkutucu yırtıcılardan biriydi.',
      yasa: 'Buzul Çağı Amerika\'sında kilometrelerce öteden kokusunu aldığın avın başına gelince kurt sürüleri hemen geri çekiliyor.',
      w: 'Arctodus' },
    { id: 'tuylu-gergedan', cag: 'buzul', ad: 'Tüylü Gergedan (Coelodonta)', ik: '🦏', boy: '3,8 metre · 3 ton', ll: [62.0, 129.7],
      fosil: 'Sibirya & Avrupa (Chauvet Mağarası\'nda resimleri var!)', beslenme: 'Buzul bozkırı otları',
      superguc: '1,4 metre uzunluğunda yassı ön boynuz — karı kürek gibi temizliyordu!',
      sasirtici: 'Buzul Çağı insanları onu Fransa\'daki Chauvet Mağarası\'nın duvarlarına 32.000 yıl önce ustalıkla çizdi!',
      yasa: 'Avrasya\'nın karlı steplerinde kalın kızıl-kahve kürkünle tipiye meydan okuyup boynuzunla karın altındaki otları açıyorsun.',
      w: 'Woolly_rhinoceros' },
    { id: 'irlanda-geyigi', cag: 'buzul', ad: 'İrlanda Geyiği (Megaloceros)', ik: '🦌', boy: '2,1 m omuz · 3,6 m boynuz açıklığı!', ll: [53.3, -7.8],
      fosil: 'İrlanda turbalıkları, İngiltere, Sibirya', beslenme: 'Otlar ve çalı yaprakları',
      superguc: 'Tarihin en büyük boynuzları: uçtan uca 3,6 metre ve 40 kg ağırlığında — ve her yıl yeniden büyüyordu!',
      sasirtici: 'Her bahar 40 kg kemik boynuzu sadece 4 ayda sıfırdan büyütmek için olağanüstü miktarda kalsiyum tüketiyordu.',
      yasa: 'Buzul Çağı Avrupa çayırlarında devasa boynuz tacınla güneşin altında parlayıp rakiplerini korkutuyorsun.',
      w: 'Irish_elk' },
    { id: 'korkunc-kurt', cag: 'buzul', ad: 'Korkunç Kurt (Aenocyon dirus)', ik: '🐺', boy: '1,6 metre · 70 – 80 kg', ll: [34.1, -118.4],
      fosil: 'La Brea Katran Çukurları (4.000\'den fazla kafatası!)', beslenme: 'Sürü avcısı — bizon, at, genç mamut',
      superguc: 'Bugünkü gri kurttan %30 daha güçlü çene — kalın kemikleri kırabiliyordu!',
      sasirtici: 'La Brea Katran Çukurlarında tam 4.000 adet Korkunç Kurt kafatası yan yana bulundu! 2021 DNA analizi onların gri kurtlardan 5,7 milyon yıl önce ayrıldığını kanıtladı.',
      yasa: '20 kişilik sürünle Buzul Çağı ovalarında dev bir bizonu kovalayıp güçlü çenelerinle sürüye ziyafet çekiyorsun.',
      w: 'Dire_wolf' }
  ],

  // ⛏️ GERÇEK PALEONTOLOJİK & ARKEOLOJİK FOSİL KAZI ALANLARI (Hangi hayvanın kemikleri nereden çıktı?)
  kazilar: [
    {
      id: 'kazi-burgess', cag: 'kambriyen', ad: 'Burgess Şeyli Kazı Alanı', ulke: 'Kanada (Britanya Kolumbiyası)',
      ll: [51.4, -116.5], yil: '1909 (Charles Doolittle Walcott)',
      katman: '508 milyon yıllık deniz çamuru şeyli (UNESCO Dünya Mirası)',
      kemikler: 'Anomalocaris, Hallucigenia, Opabinia, Pikaia, Marrella ve 65.000+ yumuşak dokulu fosil!',
      hikaye: '1909\'da Walcott\'un katırı Kayalık Dağlar\'da bir taşa takılıp devrilince kırılan kayanın içinden 508 milyon yıl önce çamur heyelanıyla anında gömülmüş, iç organları bile korunmuş Kambriyen canlıları çıktı!',
      ilginc: 'Normalde yumuşak dokular çürür; Burgess Şeyli oksijensiz ince çamur sayesinde gözleri, bağırsakları ve duyargaları bile korudu.',
      w: 'Burgess_Shale'
    },
    {
      id: 'kazi-chengjiang', cag: 'kambriyen', ad: 'Chengjiang Fosil Kazısı', ulke: 'Çin (Yunnan)',
      ll: [24.6, 102.9], yil: '1984 (Hou Xianguang)',
      katman: '518 milyon yıllık Maotianshan şeyli (UNESCO Dünya Mirası)',
      kemikler: 'Haikouichthys (bilinen en eski omurgalı balık!), Hallucigenia, Anomalocaris, dev trilobitler',
      hikaye: '1984\'te yağmurlu bir günde Çinli paleontolog Hou Xianguang çekiçle bir kayayı yardığında 518 milyon yıllık yumuşak dokulu bir canlı buldu; burası Kambriyen Patlamasının en eski penceresi oldu!',
      ilginc: 'İnsan dâhil tüm omurgalıların 518 milyon yıllık en eski ataları burada keşfedildi.',
      w: 'Maotianshan_Shales'
    },
    {
      id: 'kazi-ellesmere', cag: 'karbonifer', ad: 'Ellesmere Adası Arktik Kazısı', ulke: 'Kanada (Nunavut — Kuzey Kutbu)',
      ll: [77.5, -85.0], yil: '2004 (Neil Shubin ekibi)',
      katman: '375 milyon yıllık Fram Formasyonu (eski tropik nehir deltası)',
      kemikler: 'Tiktaalik roseae (balıktan kara hayvanına geçiş iskeleti!), dev zırhlı balıklar',
      hikaye: 'Bilim insanları 375 milyon yıl önce buranın tropik bir delta olduğunu hesaplayıp 5 yaz boyunca kutup ayıları arasında kazı yaptı ve sonunda kayanın içinden dışarı bakan Tiktaalik kafatasını buldu!',
      ilginc: '"Tiktaalik" adı yerel İnuit dilinde "sığ sulardaki iri balık" anlamına gelir.',
      w: 'Tiktaalik'
    },
    {
      id: 'kazi-joggins', cag: 'karbonifer', ad: 'Joggins Fosil Kayalıkları', ulke: 'Kanada (Yeni İskoçya)',
      ll: [45.7, -64.4], yil: '1842 (Charles Lyell & William Dawson)',
      katman: '310 milyon yıllık taşkömürü ormanı kayalıkları (UNESCO)',
      kemikler: 'Arthropleura izleri, Hylonomus (dünyanın bilinen en eski sürüngeni!), dev Lepidodendron ağaç gövdeleri',
      hikaye: 'Gelgitlerin her gün aşındırdığı 15 km\'lik falezlerde dik duran taşlaşmış 310 milyon yıllık ağaç kütüklerinin içinden tarihin en eski sürüngen iskeletleri çıkarıldı!',
      ilginc: 'Charles Darwin "Türlerin Kökeni" kitabında bu kayalıkları özel olarak kanıt diye anmıştır.',
      w: 'Joggins_Fossil_Cliffs'
    },
    {
      id: 'kazi-karoo', cag: 'pangea', ad: 'Karoo Havzası Kazıları', ulke: 'Güney Afrika',
      ll: [-32.2, 24.5], yil: '1838 (Andrew Geddes Bain)',
      katman: '260 – 200 milyon yıllık Beaufort Grubu',
      kemikler: 'Lystrosaurus, Gorgonopsidler, Cynodontlar (memelilerin doğrudan ataları!), erken dinozorlar',
      hikaye: 'Güney Afrika\'nın yarım milyon km²\'lik Karoo yarı-çölü, Büyük Permiyen Yok Oluşu öncesi ve sonrasını katman katman gösteren dünyanın en eksiksiz Pangea arşividir!',
      ilginc: 'Buradan çıkarılan Lystrosaurus kemiklerinin birebir aynısının Antarktika ve Hindistan\'da çıkması Pangea teorisini kesin olarak kanıtladı.',
      w: 'Karoo_Supergroup'
    },
    {
      id: 'kazi-ischigualasto', cag: 'pangea', ad: 'Ischigualasto (Ay Vadisi) Kazısı', ulke: 'Arjantin (San Juan)',
      ll: [-30.1, -67.9], yil: '1958 – 1991 (Paul Sereno & Arjantin ekibi)',
      katman: '231 milyon yıllık Geç Triyas kumtaşları (UNESCO)',
      kemikler: 'Eoraptor, Herrerasaurus (dünyanın bilinen en eski dinozorları!), dev timsah ataları',
      hikaye: 'Ay yüzeyini andıran bu kurak vadide 231 milyon yıl önce dinozorların sahneye ilk çıktığı anın tüm ekosistemi eksiksiz iskeletlerle ortaya çıkarıldı!',
      ilginc: 'Eoraptor ("Şafak Hırsızı") sadece 1 metre boyundaydı ama 165 milyon yıl sürecek dinozor imparatorluğunun ilk kıvılcımıydı.',
      w: 'Ischigualasto_Provincial_Park'
    },
    {
      id: 'kazi-morrison', cag: 'jura', ad: 'Morrison Formasyonu ("Kemik Savaşları")', ulke: 'ABD (Colorado, Utah, Wyoming)',
      ll: [40.4, -109.2], yil: '1877 (Othniel Marsh & Edward Cope)',
      katman: '156 – 146 milyon yıllık Jura nehir yatakları',
      kemikler: 'Brachiosaurus, Stegosaurus, Allosaurus, Diplodocus, Apatosaurus, Camarasaurus!',
      hikaye: '1877\'de iki rakip Amerikalı paleontolog Marsh ve Cope arasında başlayan "Kemik Savaşları" sırasında bu bölgeden 140\'tan fazla yeni dinozor türü çıkarıldı! Dinosaur Ulusal Anıtı\'nda 1.500 kemik hâlâ kayanın içinde sergileniyor.',
      ilginc: 'Dünya müzelerinde gördüğümüz Jura dinozor iskeletlerinin büyük çoğunluğu bu tek jeolojik kuşaktan gelmiştir!',
      w: 'Morrison_Formation'
    },
    {
      id: 'kazi-solnhofen', cag: 'jura', ad: 'Solnhofen Kireçtaşı Ocakları', ulke: 'Almanya (Bavyera)',
      ll: [48.9, 11.0], yil: '1861 (İlk Archaeopteryx keşfi!)',
      katman: '150 milyon yıllık çok ince taneli tropik lagün kireçtaşı',
      kemikler: 'Archaeopteryx (12 eksiksiz örnek!), Pterodactylus, Compsognathus, yusufçuklar ve deniz zambakları',
      hikaye: 'Baskı (litografi) taşları çıkarmak için kazılan bu ocaklarda 1861\'de hem tüyü hem dinozor dişi olan Archaeopteryx bulununca tüm bilim dünyası sarsıldı!',
      ilginc: 'Lagün tabanı çok tuzlu ve oksijensiz olduğu için leşçiller giremedi; bu yüzden kuş tüylerinin en ince telleri bile taşta iz bıraktı.',
      w: 'Solnhofen_Limestone'
    },
    {
      id: 'kazi-lyme', cag: 'jura', ad: 'Lyme Regis — Jura Kıyısı (Mary Anning)', ulke: 'İngiltere (Dorset)',
      ll: [50.7, -2.9], yil: '1811 (12 yaşındaki Mary Anning!)',
      katman: '200 – 190 milyon yıllık Erken Jura deniz killeri (UNESCO)',
      kemikler: 'Ichthyosaurus, Plesiosaurus, Dimorphodon (ilk İngiliz pterozoru), dev ammonitler',
      hikaye: '1811\'de henüz 12 yaşında olan yoksul fosil toplayıcısı Mary Anning, fırtına sonrası çöken uçurumda dünyanın ilk eksiksiz Ichthyosaurus iskeletini çıkardı ve modern paleontolojiyi doğurdu!',
      ilginc: 'Mary Anning ayrıca fosilleşmiş dışkıların (koprolit) ne olduğunu çözerek tarihöncesi canlıların ne yediğini bulmamızı sağladı.',
      w: 'Jurassic_Coast'
    },
    {
      id: 'kazi-hellcreek', cag: 'kretase', ad: 'Hell Creek Formasyonu', ulke: 'ABD (Montana, Güney & Kuzey Dakota)',
      ll: [47.5, -106.9], yil: '1902 (Barnum Brown — İlk T-Rex!)',
      katman: '68 – 66 milyon yıllık Kretase sonu (K-Pg asteroit iridyum tabakası burada!)',
      kemikler: 'Tyrannosaurus Rex ("Sue", "Scotty", "Stan"), Triceratops, Ankylosaurus, Edmontosaurus, Pachycephalosaurus',
      hikaye: '1902\'de Barnum Brown burada dünyanın ilk T-Rex iskeletini çıkardı. 1990\'da Sue Hendrickson %90\'ı eksiksiz dev T-Rex "Sue"yu buldu. Kazı duvarında 66 milyon yıllık asteroit kül çizgisi çıplak gözle görülür!',
      ilginc: 'İridyum çizgisinin 1 santimetre altında dinozor kemikleri vardır; 1 santimetre üstünde tek bir dinozor kemiği bile yoktur!',
      w: 'Hell_Creek_Formation'
    },
    {
      id: 'kazi-gobi', cag: 'kretase', ad: 'Flaming Cliffs (Bayanzag) — Gobi Çölü', ulke: 'Moğolistan',
      ll: [44.1, 103.7], yil: '1923 (Roy Chapman Andrews)',
      katman: '75 – 71 milyon yıllık Djadochta kızıl kumtaşları',
      kemikler: 'Velociraptor, Protoceratops, Oviraptor, Therizinosaurus ve dünyanın İLK dinozor yumurtaları!',
      hikaye: '1923\'te Gobi Çölü\'nün kızıl kayalıklarında tarihin ilk dinozor yumurta yuvaları bulundu! 1971\'de ise bir Velociraptor ile bir Protoceratops\'un birbirini ısırırken kum fırtınasında donmuş "Dövüşen Dinozorlar" iskeleti çıkarıldı!',
      ilginc: 'Kuluçka üstünde ölen Oviraptor anne dinozorları burada bulunarak dinozorların tıpkı kuşlar gibi yavrularına baktığı kanıtlandı.',
      w: 'Flaming_Cliffs'
    },
    {
      id: 'kazi-kemkem', cag: 'kretase', ad: 'Kem Kem Tabakaları Kazısı', ulke: 'Fas (Sahra Sınırı)',
      ll: [31.0, -4.1], yil: '1912 – 2014 (Nizar Ibrahim & Fas ekibi)',
      katman: '95 milyon yıllık antik dev nehir sistemi kumtaşları',
      kemikler: 'Spinosaurus (yüzücü kuyruğu!), Carcharodontosaurus, dev testere balıkları, uçan pterozorlar',
      hikaye: '2014–2020 kazılarında Spinosaurus\'un kürek biçimli yüzme kuyruğu burada bulununca dinozorların suda da avlanabildiği ilk kez kanıtlandı!',
      ilginc: 'Bilim insanları Kem Kem\'i "Dünya tarihinin en tehlikeli yeri" ilan etti — çünkü aynı nehirde 3 farklı dev etçil dinozor bir arada yaşıyordu!',
      w: 'Kem_Kem_Group'
    },
    {
      id: 'kazi-patagonya', cag: 'kretase', ad: 'Neuquén & Patagonya Devler Kazısı', ulke: 'Arjantin',
      ll: [-38.9, -69.2], yil: '1987 – 2014 (José Bonaparte & Arjantin ekibi)',
      katman: '100 – 70 milyon yıllık Patagonya kumtaşları',
      kemikler: 'Argentinosaurus, Patagotitan, Giganotosaurus, Carnotaurus, Amargasaurus!',
      hikaye: '1987\'de bir çiftçi tarlasında taşlaşmış ağaç kütüğü sandığı şeyin aslında Argentinosaurus\'un 1,6 metrelik tek bir sırt kemiği olduğu anlaşıldı!',
      ilginc: 'Dünya tarihinin gelmiş geçmiş en ağır 5 kara hayvanının tamamı Patagonya kazılarından çıkarıldı.',
      w: 'Argentinosaurus'
    },
    {
      id: 'kazi-anadolu', cag: 'senozoyik', ad: 'Çankırı–Kırıkkale Anadolu Dev Fosil Kazısı', ulke: 'Türkiye (İç Anadolu)',
      ll: [40.2, 33.8], yil: '2002 – 2021 (Türk–Fransız Paleontoloji Ekibi)',
      katman: '25 – 8 milyon yıllık Oligosen–Miyosen Anadolu çökelleri',
      kemikler: 'Paraceratherium (17 tonluk dev gergedan!), antik filler, zürafalar, kılıç dişli kediler, 3 parmaklı atlar!',
      hikaye: 'Kırıkkale Delice ve Çankırı Çorakyerler kazılarında karada yaşamış en büyük memeli olan Paraceratherium\'un çene ve bacak kemikleri ortaya çıkarıldı! Bugün MTA Şehit Cuma Dağ Tabiat Tarihi Müzesi\'nde (Ankara) sergileniyor.',
      ilginc: 'Anadolu 25 milyon yıl önce Asya, Avrupa ve Afrika arasındaki dev canlı göç köprüsüydü!',
      w: 'Paraceratherium'
    },
    {
      id: 'kazi-messel', cag: 'senozoyik', ad: 'Messel Çukuru (Messel Pit)', ulke: 'Almanya (Hessen)',
      ll: [49.9, 8.75], yil: '1875 – bugün (UNESCO Dünya Mirası)',
      katman: '47 milyon yıllık volkanik krater gölü bitümlü şeyli',
      kemikler: 'Propalaeotherium (kedi boyunda ilk atlar!), Darwinius (ilk primat!), Gastornis, mide içeriği korunmuş yarasalar ve böcekler!',
      hikaye: '47 milyon yıl önce krater gölünden yükselen zehirli gaz bulutu göl çevresindeki kuşları, atları ve yarasaları anında göl dibine düşürdü; tüyleri, kürkleri ve son yedikleri yapraklar bile fosilleşti!',
      ilginc: 'Bazı böcek fosillerinin 47 milyon yıllık metalik yeşil ve mavi kanat renkleri bugün hâlâ parlıyor!',
      w: 'Messel_pit'
    },
    {
      id: 'kazi-labrea', cag: 'buzul', ad: 'La Brea Katran Çukurları', ulke: 'ABD (Los Angeles, Kaliforniya)',
      ll: [34.06, -118.35], yil: '1901 – bugün (kazılar hâlâ sürüyor!)',
      katman: '50.000 – 11.000 yıllık doğal asfalt (katran) kapanı',
      kemikler: 'Smilodon (3.000+ kılıç dişli kaplan!), Korkunç Kurt (4.000+ iskelet!), Kolombiya Mamutu, dev yer tembel hayvanı, Kısa Yüzlü Ayı!',
      hikaye: 'Su birikintisiyle örtülü doğal katran çukurlarına saplanan bir mamutu yemek için gelen onlarca kılıç dişli kaplan ve kurt da katrana saplandı! Toplam 3,5 milyondan fazla kemik çıkarıldı.',
      ilginc: 'Los Angeles\'ın tam göbeğinde, gökdelenlerin yanında paleontologlar bugün bile her gün yeni Buzul Çağı kemikleri çıkarıyor!',
      w: 'La_Brea_Tar_Pits'
    },
    {
      id: 'kazi-sibirya', cag: 'buzul', ad: 'Sibirya Permafrost Fosil Kazıları', ulke: 'Rusya (Yakutistan & Yamal)',
      ll: [68.5, 135.0], yil: '1799 – bugün',
      katman: '45.000 – 10.000 yıllık donmuş toprak (permafrost)',
      kemikler: 'Tüylü Mamut ("Lyuba", "Yuka"), Tüylü Gergedan ("Sasha"), Mağara Aslanı yavruları, Buzul Çağı kurtları!',
      hikaye: 'Kuzey Sibirya\'nın yıl boyu donmuş toprakları doğal bir derin dondurucu gibi çalıştı; kemiklerin yanında kürk, deri, kas, hatta midelerindeki son yedikleri çiçekler bile bozulmadan çıktı!',
      ilginc: '2007\'de bulunan 42.000 yıllık bebek mamut "Lyuba"nın midesinde hâlâ anne sütü kalıntıları tespit edildi!',
      w: 'Lyuba_(mammoth)'
    }
  ]
};
