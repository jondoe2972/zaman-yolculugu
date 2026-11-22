// 🏺🦴 Tarihî Arkeolojik Kazılar (Tarih Atlası) ve Doğa / Fosil Buluntuları (Doğa Atlası)
'use strict';
window.ATLAS_KAZILAR = {
  // ---------- 🏛️ TARİH ATLASI: TARİHÎ KAZILAR VE ARKEOLOJİK BULUNTULAR (18) ----------
  tarih: [
    {
      id: 'tk-tutankamon', ad: 'Tutankamon\'un Mezarı (KV62)', ik: '👑', yer: 'Krallar Vadisi, Luksor, Mısır', ll: [25.7402, 32.6014],
      yas: '~3.350 yıllık (MÖ ~1323)', yil: '1922 (Howard Carter)',
      buluntu: '11 kg saf altın ölüm maskesi, 3 iç içe altın tabut, savaş arabaları, taht, mücevherler ve 5.398 eksiksiz eser!',
      onem: 'Antik Mısır\'da yağmalanmadan günümüze ulaşan tek firavun mezarıdır! Mısır sanatı, mumyalama tekniği ve saray yaşamı hakkında bildiklerimizin yarısını bu tek kazıya borçluyuz.',
      ilginc: 'Howard Carter mezar kapısında küçük bir delik açıp mum tuttuğunda Lord Carnarvon "Bir şey görüyor musun?" diye sordu; Carter tarihe geçen cevabını verdi: "Evet, harika şeyler!"',
      w: 'Tomb of Tutankhamun'
    },
    {
      id: 'tk-rosetta', ad: 'Rosetta (Reşit) Taşı Keşfi', ik: '📜', yer: 'Reşit (Rashid), Nil Deltası, Mısır', ll: [31.4044, 30.4164],
      yas: '~2.220 yıllık (MÖ 196)', yil: '1799 (Pierre-François Bouchard)',
      buluntu: 'Aynı kraliyet fermanının 3 farklı yazıyla (Hiyeroglif, Demotik ve Antik Yunanca) kazındığı 760 kg\'lık granodiyorit taş steli!',
      onem: '1.400 yıldır hiç kimsenin okuyamadığı Antik Mısır hiyerogliflerinin 1822\'de Champollion tarafından çözülmesini sağladı — Antik Mısır\'ın 3.000 yıllık sessizliğini bozdu!',
      ilginc: 'Askerler eski bir kale duvarını güçlendirirken taş sıradan bir yapı taşı olarak duvara örülmüş hâlde tesadüfen bulundu!',
      w: 'Rosetta Stone'
    },
    {
      id: 'tk-stonehenge', ad: 'Stonehenge Arkeolojik Kazıları', ik: '🪨', yer: 'Wiltshire, İngiltere', ll: [51.1789, -1.8262],
      yas: '~4.500 – 5.000 yıllık (MÖ ~3000–2000)', yil: '1919 – 2020 (William Hawley & Mike Parker Pearson)',
      buluntu: '25 tonluk sarsen taşları, 240 km ötedeki Galler\'den taşınmış "mavi taşlar", 60+ yakılmış insan mezarı, geyik boynuzu kazmalar ve 3 km ötede "Durrington Walls" işçi köyü!',
      onem: 'Gündönümü güneşine hizalanmış Neolitik mühendislik ve inanç merkezidir. 2020\'de çevresinde yerin altında 2 km çapında dev bir tarihöncesi çukur çemberi daha keşfedildi.',
      ilginc: 'Gömülü insanların kemik analizleri, Stonehenge\'i yapanların sadece yerel halk değil İskoçya\'dan ve Avrupa\'dan gelen ziyaretçiler olduğunu kanıtladı!',
      w: 'Stonehenge'
    },
    {
      id: 'tk-gobeklitepe', ad: 'Göbeklitepe & Taş Tepeler Kazıları', ik: '🗿', yer: 'Şanlıurfa, Türkiye', ll: [37.2232, 38.9224],
      yas: '~11.600 yıllık (MÖ ~9600–8200)', yil: '1994 – bugün (Klaus Schmidt & Türk Ekibi)',
      buluntu: 'Üzerinde tilki, yaban domuzu, turna, akrep ve yılan kabartmaları olan 6 metrelik T biçimli dev dikilitaşlar ve 20\'den fazla dairesel tapınak alanı!',
      onem: 'Tarih kitaplarını baştan yazdı! Önceden "insanlar önce tarım yaptı, sonra tapınak kurdu" sanılıyordu; Göbeklitepe avcı-toplayıcıların tarımdan BİLE ÖNCE dev anıtlar inşa ettiğini kanıtladı.',
      ilginc: 'Yakınındaki Karahantepe\'de 2021–2023 kazılarında 11.400 yıllık insan heykelleri ve kayaya oyulmuş 250\'den fazla dikilitaş daha ortaya çıkarıldı!',
      w: 'Göbekli Tepe'
    },
    {
      id: 'tk-catalhoyuk', ad: 'Çatalhöyük Neolitik Kent Kazısı', ik: '🧱', yer: 'Konya (Çumra), Türkiye', ll: [37.6675, 32.8283],
      yas: '~9.000 yıllık (MÖ ~7100–5700)', yil: '1961 – bugün (James Mellaart & Ian Hodder)',
      buluntu: 'Sokaksız, damdan merdivenle girilen bitişik kerpiç evler, dünyanın en eski şehir haritası/volkan duvar resmi, ana tanrıça heykelcikleri ve 8.600 yıllık ekmek mayası!',
      onem: 'İnsanlığın tarıma geçip binlerce kişi bir arada yaşadığı bilinen en eski ve en iyi korunmuş büyük yerleşimlerinden biridir.',
      ilginc: '2024\'te Çatalhöyük\'te bir fırının içinde 8.600 yıllık mayalanmış ama pişirilmemiş hamur bulundu — dünyanın bilinen en eski ekmeği!',
      w: 'Çatalhöyük'
    },
    {
      id: 'tk-troya', ad: 'Troya (Hisarlık) 9 Katmanlı Kazı', ik: '⚔️', yer: 'Çanakkale, Türkiye', ll: [39.9575, 26.2389],
      yas: '~5.000 yıllık (MÖ 3000 – MS 500)', yil: '1871 – bugün (Heinrich Schliemann & Türk Ekibi)',
      buluntu: 'Üst üste 9 farklı antik kent katmanı, "Priamos Hazinesi" altınları, Tunç Çağı surları, ok uçları ve büyük yangın izleri!',
      onem: 'Homeros\'un İlyada destanındaki Troya\'nın sadece bir efsane değil, Çanakkale Boğazı\'nı kontrol eden gerçek bir Tunç Çağı kenti olduğunu kanıtladı.',
      ilginc: 'Schliemann acele edip en eski katmanı ararken, aslında Homeros\'un anlattığı gerçek Troya katmanını (Troya VI/VII) kazıp geçmişti!',
      w: 'Troy'
    },
    {
      id: 'tk-pompeii', ad: 'Pompeii & Herculaneum Kazıları', ik: '🌋', yer: 'Napoli yakını, İtalya', ll: [40.7497, 14.4861],
      yas: '~1.950 yıllık (MS 79 Vezüv patlaması)', yil: '1748 – bugün',
      buluntu: 'Volkan külünün altında anında donmuş tüm bir Roma şehri: fırınlarda kalmış ekmekler, sokak lokantaları (thermopolium), mozaikler, duvar yazıları ve 2.000\'e yakın karbonlaşmış papirüs tomarı!',
      onem: 'Antik Roma\'nın sıradan günlük yaşamını, yemek tariflerini ve sokak kültürünü bir zaman kapsülü gibi birebir gösteren eşsiz kazıdır.',
      ilginc: '2024\'te yapay zekâ ve X-ışını taramasıyla Herculaneum\'daki yanmış, açılamayan 2.000 yıllık papirüs tomarlarının içindeki Antik Yunanca metinler ilk kez okundu!',
      w: 'Pompeii'
    },
    {
      id: 'tk-terrakotta', ad: 'Terrakotta Ordusu Kazısı', ik: '🪖', yer: 'Xi\'an (Shaanxi), Çin', ll: [34.3841, 109.2785],
      yas: '~2.230 yıllık (MÖ ~210)', yil: '1974 (Kuyu kazan çiftçiler keşfetti!)',
      buluntu: '8.000\'den fazla gerçek insan boyutunda, her birinin yüz ifadesi farklı pişmiş toprak asker, 670 at, 130 savaş arabası ve hâlâ keskin bronz kılıçlar!',
      onem: 'Çin\'i ilk kez birleştiren İmparator Qin Shi Huang\'ın öteki dünyadaki ordusu olarak yapıldı; antik Çin metalurji ve sanatının zirvesidir.',
      ilginc: 'İmparatorun hemen yakındaki ana mezar tepesi hâlâ AÇILMADI — çünkü toprak ölçümleri içeride cıva nehirleri olduğunu gösteriyor!',
      w: 'Terracotta Army'
    },
    {
      id: 'tk-ur', ad: 'Ur Kraliyet Mezarları (Sümer)', ik: '🏺', yer: 'Zikar (Nasiriye yakını), Irak', ll: [30.9625, 46.1031],
      yas: '~4.500 yıllık (MÖ ~2600)', yil: '1922 – 1934 (Leonard Woolley)',
      buluntu: 'Lapis lazuli ve altından "Ur Standardı", altın boğa başlı lirler (dünyanın en eski telli çalgıları!), Kraliçe Puabi\'nin altın tacı ve dünyanın en eski masa oyunu "Ur Kraliyet Oyunu"!',
      onem: 'Sümer uygarlığının ne kadar ileri bir kuyumculuk, müzik ve ticaret ağına (Afganistan\'dan lapis lazuli, Hindistan\'dan akik!) sahip olduğunu ortaya çıkardı.',
      ilginc: 'Mezarlardan çıkan 4.500 yıllık "Ur Kraliyet Oyunu"nun kuralları Babil kil tabletinde bulundu — bugün hâlâ oynanabiliyor!',
      w: 'Royal Cemetery at Ur'
    },
    {
      id: 'tk-knossos', ad: 'Knossos Sarayı & Minos Kazısı', ik: '🐂', yer: 'Girit Adası, Yunanistan', ll: [35.2979, 25.1632],
      yas: '~3.900 yıllık (MÖ ~1900–1450)', yil: '1900 (Arthur Evans)',
      buluntu: '1.300 odalı labirent benzeri çok katlı saray, boğa üstünden atlama freskleri, pişmiş toprak su boruları ve henüz tam çözülememiş "Linear A" kil tabletleri!',
      onem: 'Avrupa\'nın ilk ileri saray uygarlığı olan Minosluları gün ışığına çıkardı ve Yunan mitolojisindeki "Minotor Labirenti" efsanesinin kökenini açıkladı.',
      ilginc: 'Knossos Sarayı\'nda 3.800 yıl önce sifonlu tuvalet ve sıcak-soğuk su tesisatı vardı!',
      w: 'Knossos'
    },
    {
      id: 'tk-kumran', ad: 'Ölü Deniz Parşömenleri (Kumran Mağaraları)', ik: '📜', yer: 'Kumran, Ölü Deniz Kıyısı', ll: [31.7411, 35.4594],
      yas: '~2.100 – 2.300 yıllık (MÖ 3. yy – MS 1. yy)', yil: '1947 (Bedevi bir çoban buldu!)',
      buluntu: '11 mağarada kil küpler içinde saklanmış 900\'den fazla antik el yazması parşömen ve hazine yerlerini şifreli anlatan "Bakır Tomar"!',
      onem: 'Kutsal metinlerin bilinen en eski el yazmalarını 1.000 yıl daha geriye götürdü ve antik dönem dinî yaşamına eşsiz ışık tuttu.',
      ilginc: '1947\'de kayıp keçisini arayan genç bir çoban mağaraya taş atınca içeriden kırılan küp sesi geldi — o taş 20. yüzyılın en büyük el yazması keşfini başlattı!',
      w: 'Dead Sea Scrolls'
    },
    {
      id: 'tk-suttonhoo', ad: 'Sutton Hoo Kraliyet Gemi Mezarı', ik: '🛡️', yer: 'Suffolk, İngiltere', ll: [52.0908, 1.3414],
      yas: '~1.400 yıllık (MS ~625)', yil: '1939 (Basil Brown)',
      buluntu: '27 metrelik dev meşe geminin içinde ünlü demir-bronz yüz maskeli miğfer, granat taşlı altın omuz tokaları, Bizans gümüş tepsileri ve sikkeler!',
      onem: '"Karanlık Çağ" sanılan Erken Orta Çağ İngiltere\'sinin aslında İstanbul\'a (Bizans\'a) ve Sri Lanka\'ya kadar uzanan parlak bir sanat ve ticaret ağına sahip olduğunu kanıtladı!',
      ilginc: 'Asitli toprak geminin tahtasını tamamen eritmişti ama kumun içinde geminin tüm kaburga ve perçin izleri hayalet gibi kusursuz kalmıştı!',
      w: 'Sutton Hoo'
    },
    {
      id: 'tk-oseberg', ad: 'Oseberg Viking Gemisi Kazısı', ik: '⛵', yer: 'Vestfold, Norveç', ll: [59.3094, 10.4444],
      yas: '~1.190 yıllık (MS 834)', yil: '1904 (Gabriel Gustafson)',
      buluntu: '21,5 metrelik ejderha başlı meşe Viking gemisi, oymalı ahşap araba, 4 kızak, yataklar, ipek dokumalar ve iki yüksek rütbeli kadının mezarı!',
      onem: 'Vikinglerin sadece savaşçı değil, olağanüstü ince ahşap oymacılığı ve ipek ticareti yapan bir uygarlık olduğunu gösterdi.',
      ilginc: 'Gemi mavi kilin içine gömüldüğü için oksijen girmedi ve 1.190 yıllık ahşap neredeyse yeni kesilmiş gibi sağlam çıktı!',
      w: 'Oseberg Ship'
    },
    {
      id: 'tk-pazirık', ad: 'Pazırık Kurganı (Dünyanın En Eski Halısı)', ik: '🧶', yer: 'Altay Dağları, Sibirya, Rusya', ll: [50.7397, 88.0558],
      yas: '~2.500 yıllık (MÖ ~5. yüzyıl)', yil: '1947 – 1949 (Sergei Rudenko)',
      buluntu: 'Dünyanın bilinen en eski düğümlü yün halısı ("Pazırık Halısı"), dövmeleri korunmuş mumyalar, koşum takımlı donmuş atlar ve ahşap savaş arabası!',
      onem: 'İskit / Saka bozkır kültürü ile Türk dokumacılık geleneğinin (Gördes düğümü!) 2.500 yıl önceki yüksek sanat düzeyini kanıtlar.',
      ilginc: 'Mezara sızan su donup buz bloğuna dönüştüğü için 2.500 yıllık yün halının parlak kırmızı ve sarı renkleri bugün bile canlıdır!',
      w: 'Pazyryk carpet'
    },
    {
      id: 'tk-mohenjodaro', ad: 'Mohenjo-daro (İndus Vadisi Kazısı)', ik: '🏙️', yer: 'Sind, Pakistan', ll: [27.3292, 68.1389],
      yas: '~4.500 yıllık (MÖ ~2500–1900)', yil: '1922 (R. D. Banerji & John Marshall)',
      buluntu: 'Izgara planlı caddeler, "Büyük Hamam", her evde tuvalet ve kapalı kanalizasyon sistemi, bronz "Dans Eden Kız" heykeli ve henüz çözülememiş İndus mühürleri!',
      onem: 'Mısır ve Mezopotamya ile yaşıt, ama saray ve savaş silahı yerine şehir planlamasına ve temizliğe odaklanmış benzersiz bir uygarlığı ortaya çıkardı.',
      ilginc: '4.500 yıl önce her evden ana caddeye bağlanan tuğla kanalizasyon sistemi, Avrupa şehirlerinde ancak 19. yüzyılda yaygınlaşabildi!',
      w: 'Mohenjo-daro'
    },
    {
      id: 'tk-sipan', ad: 'Sipán Lordu Altın Mezarı (Moche)', ik: '👑', yer: 'Lambayeque, Peru', ll: [-6.8019, -79.6019],
      yas: '~1.700 yıllık (MS ~300)', yil: '1987 (Walter Alva)',
      buluntu: 'Altın ve gümüşten yerfıstığı kolyesi, turkuaz kulak süsleri, altın başlık, bakır-altın zırh ve 400\'den fazla mücevher!',
      onem: '"Amerika\'nın Tutankamon\'u" olarak anılır! İnkalardan 1.100 yıl önce yaşamış Moche uygarlığının yağmalanmamış ilk kral mezarıdır.',
      ilginc: 'Defineciler mezara ulaşmadan sadece günler önce arkeologlar polis korumasıyla kazıya başlayıp bu hazineyi insanlığa kurtardı!',
      w: 'Lord of Sipán'
    },
    {
      id: 'tk-palenque', ad: 'Palenque & Kral Pakal\'ın Lahdi (Maya)', ik: '🛕', yer: 'Chiapas, Meksika', ll: [17.4838, -92.0461],
      yas: '~1.340 yıllık (MS 683)', yil: '1949 – 1952 (Alberto Ruz Lhuillier)',
      buluntu: 'Yazıtlar Tapınağı\'nın tam altındaki gizli merdivenle inilen 20 tonluk oymalı lahit, Kral Pakal\'ın 200 parçalık yeşim taşı ölüm maskesi ve Maya hiyeroglifleri!',
      onem: 'Mısır piramitlerinin aksine Maya piramitlerinin sadece tapınak değil aynı zamanda görkemli kral mezarları da olabildiğini kanıtladı.',
      ilginc: 'Piramidin tepesindeki taban taşının altında gizli merdiveni temizleyip mezar odasına inmek arkeologların tam 4 yılını aldı!',
      w: 'Kʼinich Janaabʼ Pakal'
    },
    {
      id: 'tk-efes', ad: 'Efes Antik Kenti Kazıları', ik: '🏛️', yer: 'Selçuk, İzmir, Türkiye', ll: [37.9411, 27.3419],
      yas: '~2.000 – 3.000 yıllık (MÖ 10. yy – MS 6. yy)', yil: '1863 – bugün (160+ yıldır sürüyor!)',
      buluntu: 'Celsus Kütüphanesi, 25.000 kişilik Büyük Tiyatro, mozaikli Yamaç Evler, Artemis Tapınağı temelleri ve gladyatör mezarlığı!',
      onem: 'Akdeniz\'in en iyi korunmuş antik metropollerinden biridir; kentin hâlâ yalnızca yaklaşık %20\'si kazılabilmiştir!',
      ilginc: 'Efes\'te bulunan gladyatör kemiklerinin kimyasal analizi, Roma gladyatörlerinin et ağırlıklı değil çoğunlukla arpa ve fasulye (vejetaryen!) beslendiğini kanıtladı!',
      w: 'Ephesus'
    }
  ],

  // ---------- 🌿 DOĞA ATLASI: FOSİL KAZILARI VE DOĞA BULUNTULARI (18) ----------
  doga: [
    {
      id: 'fk-kehribar-orumcek', ad: '99 Milyon Yıllık Kehribarda Örümcek & Dinozor Kuyruğu', ik: '🕷️', yer: 'Hukawng Vadisi (Kaçin), Myanmar', ll: [26.45, 96.60],
      yas: '~99 milyon yıllık (Kretase Çağı)', yil: '2016 – 2018 (Lida Xing & Paleontoloji Ekibi)',
      buluntu: 'Ağaç reçinesi (kehribar) içinde tek bir tüyü bile bozulmamış 99 milyon yıllık tüylü dinozor kuyruğu, dev kuyruklu antik örümcek (Chimerarachne), yavru kuş ve Kretase çiçekleri!',
      onem: 'Taş fosiller yalnızca kemikleri korur; kehribar ise yumuşak dokuları, örümcek kıllarını, kanat damarlarını ve dinozor tüylerinin gerçek renklerini 3 boyutlu bir zaman kapsülü gibi saklar!',
      ilginc: 'Tüylü dinozor kuyruğunu taşıyan o eşsiz kehribar parçası, bir mücevher pazarında "içinde bitki var" sanılarak kolye yapılmak üzereyken bilim insanı tarafından son anda fark edilip satın alındı!',
      w: 'Burmese amber'
    },
    {
      id: 'fk-baltik-kehribar', ad: 'Baltık Kehribarı Antik Böcek & Bitki Hazinesi', ik: '🪲', yer: 'Kaliningrad & Gdansk Kıyıları, Baltık Denizi', ll: [54.88, 19.95],
      yas: '~44 milyon yıllık (Eosen Çağı)', yil: 'Antik Çağ\'dan bugüne (milyonlarca örnek)',
      buluntu: '44 milyon yıl önceki dev çam ormanlarının reçinesine hapsolmuş binlerce antik karınca, arı, örümcek, kertenkele, yosun ve çiçek poleni!',
      onem: 'Dünyadaki bilinen kehribar yataklarının %80\'i buradadır; 44 milyon yıl önceki Avrupa ormanlarının tüm böcek ve bitki ekosistemini mikroskop altında canlı gibi incelememizi sağlar.',
      ilginc: 'Baltık kehribarı deniz suyundan hafif olduğu için büyük fırtınalardan sonra 44 milyon yıllık fosiller kendiliğinden kumsala vurur!',
      w: 'Baltic amber'
    },
    {
      id: 'fk-lucy', ad: 'Lucy (3,2 Milyon Yıllık İnsan Atası Fosili)', ik: '🦴', yer: 'Hadar / Afar Vadisi, Etiyopya', ll: [11.10, 40.58],
      yas: '~3,2 milyon yıllık (Pliyosen)', yil: '1974 (Donald Johanson & Tom Gray)',
      buluntu: 'Australopithecus afarensis türüne ait %40\'ı eksiksiz iskelet (52 kemik): iki ayak üzerinde dik yürüdüğünü kanıtlayan leğen kemiği ve diz eklemi!',
      onem: 'İnsan evriminde beynin büyümesinden ÇOK ÖNCE iki ayak üstünde dik yürümenin başladığını kesin olarak kanıtlayan dönüm noktası fosilidir.',
      ilginc: 'Adını, keşif gecesi kazı kampında kasetçalarda defalarca çalan Beatles\'ın "Lucy in the Sky with Diamonds" şarkısından aldı!',
      w: 'Lucy (Australopithecus)'
    },
    {
      id: 'fk-otzi', ad: 'Buz Adam Ötzi (5.300 Yıllık Doğal Mumya)', ik: '🧊', yer: 'Ötztal Alpleri (İtalya–Avusturya Sınırı)', ll: [46.7789, 10.8397],
      yas: '~5.300 yıllık (Bakır Çağı · MÖ ~3300)', yil: '1991 (Dağcılar buzulda buldu!)',
      buluntu: 'Derisi, 61 dövmesi, bakır baltası, ayı kürkü şapkası, ok kılıfı, midesindeki son yemeği (dağ keçisi eti & buğday) ve sol omzuna saplanmış taş ok ucuyla eksiksiz donmuş insan!',
      onem: 'Avrupa\'nın bilinen en eski doğal insan mumyasıdır; 5.300 yıl önceki kıyafet, tıp (şifalı mantar taşıyordu!) ve genetik tarih hakkında eşsiz bilgiler verdi.',
      ilginc: 'Ötzi\'nin DNA\'sı incelendiğinde bugünkü Avusturya Tirol bölgesinde yaşayan 19 modern insanla ortak genetik akrabalığı tespit edildi!',
      w: 'Ötzi'
    },
    {
      id: 'fk-lyuba', ad: 'Bebek Mamut Lyuba (42.000 Yıllık Donmuş Mamut)', ik: '🦣', yer: 'Yamal Yarımadası, Sibirya, Rusya', ll: [68.90, 70.50],
      yas: '~41.800 yıllık (Buzul Çağı)', yil: '2007 (Ren geyiği çobanı Yuri Khudi buldu)',
      buluntu: 'Hortumu, kirpikleri, kulakları, iç organları ve midesindeki anne sütü kalıntıları bile bozulmamış 1 aylık yavru tüylü mamut!',
      onem: 'Şimdiye kadar bulunmuş en eksiksiz mamut örneğidir; CT taramalarıyla mamutların soğuğa nasıl dayandığı ve beslenme biyolojisi çözüldü.',
      ilginc: 'Yavru mamut 42.000 yıl önce bir nehir yatağında ince çamura saplanıp boğuldu; oksijensiz donmuş toprak (permafrost) onu kusursuz sakladı.',
      w: 'Lyuba (mammoth)'
    },
    {
      id: 'fk-archaeopteryx', ad: 'Solnhofen: İlk Kuş Archaeopteryx Fosili', ik: '🪶', yer: 'Solnhofen, Bavyera, Almanya', ll: [48.89, 10.99],
      yas: '~150 milyon yıllık (Geç Jura)', yil: '1861 (İlk eksiksiz "Londra Örneği")',
      buluntu: 'Hem dinozor dişleri ve kemikli kuyruğu, hem de en ince tüy tellerine kadar taşta iz bırakmış 12 adet Archaeopteryx iskeleti!',
      onem: 'Darwin\'in Türlerin Kökeni kitabından sadece 2 yıl sonra bulunarak kuşların dinozorlardan evrimleştiğini kanıtlayan tarihin en ünlü ara geçiş fosilidir.',
      ilginc: 'Kireçtaşı o kadar ince taneliydi ki yusufçuk kanatları ve denizanası izleri bile 150 milyon yıl sonra bozulmadan kaldı!',
      w: 'Archaeopteryx'
    },
    {
      id: 'fk-trex-sue', ad: 'Hell Creek: T-Rex "Sue" & Asteroit Çizgisi', ik: '🦖', yer: 'Güney Dakota & Montana, ABD', ll: [45.28, -102.66],
      yas: '~67 milyon yıllık (Geç Kretase)', yil: '1990 (Sue Hendrickson)',
      buluntu: '%90\'ı eksiksiz 12,3 metrelik dev Tyrannosaurus Rex iskeleti ("Sue"), Triceratops kafatasları ve 66 milyon yıllık asteroit iridyum kül tabakası!',
      onem: 'T-Rex\'in yaşadığı yaralanmaları, çene kas gücünü ve dinozorların asteroit çarpmasıyla nasıl aniden yok olduğunu katman katman kanıtlar.',
      ilginc: 'Sue\'nun kaburgalarında iyileşmiş kırıklar ve çenesinde parazit izleri bulundu — bu dev T-Rex 28 yaşına kadar zorlu bir hayat yaşamıştı!',
      w: 'Sue (dinosaur)'
    },
    {
      id: 'fk-anadolu-dev', ad: 'Çankırı–Kırıkkale: 17 Tonluk Dev Gergedan Fosili', ik: '🦏', yer: 'Çankırı & Kırıkkale (Delice), Türkiye', ll: [40.20, 33.80],
      yas: '~25 milyon yıllık (Oligosen)', yil: '2002 – 2021 (Türk–Fransız Ekibi)',
      buluntu: 'Karada yaşamış gelmiş geçmiş en büyük memeli olan boynuzsuz dev gergedan Paraceratherium\'un çene, diş ve dev bacak kemikleri + antik fil ve zürafa fosilleri!',
      onem: 'Anadolu topraklarının 25 milyon yıl önce tropik ormanlar ve dev memelilerle dolu, Asya–Avrupa–Afrika arasında ana canlı köprüsü olduğunu kanıtlar.',
      ilginc: 'Bulunan dev çene ve iskelet canlandırması bugün Ankara\'da MTA Şehit Cuma Dağ Tabiat Tarihi Müzesi\'nde ücretsiz görülebilir!',
      w: 'Paraceratherium'
    },
    {
      id: 'fk-balina-vadisi', ad: 'Vadi el-Hitan (Çöldeki Ayaklı Balinalar Vadisi)', ik: '🐋', yer: 'Fayyum, Sahra Çölü, Mısır', ll: [29.28, 30.05],
      yas: '~40 milyon yıllık (Eosen)', yil: '1902 – bugün (UNESCO Dünya Mirası)',
      buluntu: 'Kupkuru Sahra kumlarının üstünde yatan 400\'den fazla antik balina iskeleti — 18 metrelik Basilosaurus ve minik arka bacaklı Dorudon!',
      onem: 'Balinaların bir zamanlar karada yürüyen dört ayaklı memelilerden okyanuslara nasıl geri döndüğünü arka bacak kemikleriyle gözler önüne serer!',
      ilginc: '40 milyon yıl önce Mısır\'ın bu çölü sıcak, sığ bir tropik denizdi (Tetis Okyanusu) ve balinaların doğum koyuydu!',
      w: 'Wadi al-Hitan'
    },
    {
      id: 'fk-burgess', ad: 'Burgess Şeyli: 508 Milyon Yıllık İlk Hayvanlar', ik: '🦐', yer: 'Yoho Ulusal Parkı, Kanada', ll: [51.44, -116.47],
      yas: '~508 milyon yıllık (Kambriyen Patlaması)', yil: '1909 (Charles Walcott)',
      buluntu: 'Dünyanın ilk süper avcısı Anomalocaris, 5 gözlü Opabinia, dikenli Hallucigenia ve omurgalıların ilk atası Pikaia — yumuşak organlarıyla korunmuş 65.000+ fosil!',
      onem: 'Bugünkü neredeyse tüm hayvan gruplarının (eklembacaklılar, yumuşakçalar, omurgalılar) 508 milyon yıl önce bir anda nasıl ortaya çıktığını gösterir.',
      ilginc: 'Kaya tabakası aslında bir zamanlar deniz tabanıydı; milyonlarca yıl sonra tektonik çarpışmayla 2.300 metre yüksekteki Kayalık Dağlar\'a yükseldi!',
      w: 'Burgess Shale'
    },
    {
      id: 'fk-liaoning', ad: 'Liaoning: İlk Çiçek & Tüylü Dinozorlar', ik: '🌸', yer: 'Liaoning Eyaleti, Çin', ll: [41.60, 120.40],
      yas: '~125 milyon yıllık (Erken Kretase)', yil: '1996 – bugün',
      buluntu: 'Dünyanın bilinen en eski çiçekli bitkilerinden Archaefructus, renk pigmentleri çözülen tüylü dinozorlar (Sinosauropteryx, Microraptor) ve ilk keseli memeliler!',
      onem: 'Volkan külleri göl kenarındaki tüm ormanı bir anda örttüğü için hem ilk çiçeklerin hem de dinozor tüylerinin gerçek renkleri (kızıl-turuncu çizgili!) tespit edildi.',
      ilginc: 'Liaoning sayesinde küçük etçil dinozorların çoğunun pullu değil, rengârenk tüylerle kaplı olduğu kesinleşti!',
      w: 'Jehol Biota'
    },
    {
      id: 'fk-labrea', ad: 'La Brea Katran Çukurları (Buzul Çağı Kapanı)', ik: '🐯', yer: 'Los Angeles, Kaliforniya, ABD', ll: [34.0638, -118.3554],
      yas: '~11.000 – 50.000 yıllık (Buzul Çağı)', yil: '1901 – bugün (kazılar sürüyor!)',
      buluntu: '3.000+ kılıç dişli kaplan (Smilodon), 4.000+ korkunç kurt kafatası, mamutlar, dev yer tembel hayvanları, böcekler ve 3,5 milyon fosil kemik!',
      onem: 'Dünyanın en zengin Buzul Çağı memeli fosil arşivi; üstelik şehrin tam ortasında bugün hâlâ yeni fosiller çıkarılıyor.',
      ilginc: 'Doğal asfaltın üstü yağmur suyuyla kaplanınca su içmeye gelen hayvanlar yapışıyor, onları avlamaya gelen yırtıcılar da aynı kapana düşüyordu!',
      w: 'La Brea Tar Pits'
    },
    {
      id: 'fk-messel', ad: 'Messel Çukuru: 47 Milyon Yıllık Metalik Böcekler', ik: '🐴', yer: 'Hessen (Frankfurt yakını), Almanya', ll: [49.9175, 8.7567],
      yas: '~47 milyon yıllık (Eosen)', yil: '1875 – bugün (UNESCO Dünya Mirası)',
      buluntu: 'Kedi boyutundaki ilk atlar (Propalaeotherium), erken primat "Ida", kanatları hâlâ metalik yeşil parlayan böcekler, yarasalar ve mide içeriği korunmuş kuşlar!',
      onem: 'Dinozorlar yok olduktan hemen sonra memelilerin nasıl hızla çeşitlenip ormanlara yayıldığını en ince ayrıntısıyla gösterir.',
      ilginc: 'Messel Çukuru 1970\'lerde neredeyse dev bir çöp döküm sahasına çevrilecekti; halkın ve bilim insanlarının mücadelesiyle UNESCO mirası ilan edilip kurtarıldı!',
      w: 'Messel pit'
    },
    {
      id: 'fk-joggins', ad: 'Joggins: 310 Milyon Yıllık Taşlaşmış Kömür Ormanı', ik: '🌲', yer: 'Yeni İskoçya, Kanada', ll: [45.70, -64.44],
      yas: '~310 milyon yıllık (Karbonifer)', yil: '1842 – bugün (UNESCO Dünya Mirası)',
      buluntu: '40 metrelik dev Lepidodendron pullu ağaçlarının dik duran taşlaşmış gövdeleri, 2,6 metrelik dev kırkayak Arthropleura izleri ve dünyanın en eski sürüngeni Hylonomus!',
      onem: 'Bugünkü taşkömürünü oluşturan ilk dev yağmur ormanlarını ve omurgalıların yumurtlayarak tamamen karaya geçişini belgeleyen en önemli bitki-hayvan fosil alanıdır.',
      ilginc: 'Dünyanın en yüksek gelgitleri her gün falezleri aşındırdığı için 310 milyon yıllık yeni fosil ağaçlar kendiliğinden ortaya çıkıyor!',
      w: 'Joggins Fossil Cliffs'
    },
    {
      id: 'fk-taslasmis-orman', ad: 'Arizona Taşlaşmış Ormanı (Kristal Ağaçlar)', ik: '🪵', yer: 'Arizona, ABD', ll: [34.91, -109.78],
      yas: '~225 milyon yıllık (Geç Triyas — Pangea)', yil: '1851 – bugün',
      buluntu: 'Hücre hücre kuvars, ametist ve jasper kristaline dönüşmüş yüzlerce dev Araucarioxylon kozalaklı ağaç gövdesi + ilk dinozor ve dev amfibi fosilleri!',
      onem: 'Pangea süper kıtasının tropik nehir ormanlarındaki dev kozalaklı bitki örtüsünü göz alıcı kristal kesitlerle günümüze taşır.',
      ilginc: 'Ağaçlar volkanik kül altında oksijensiz kalınca çürümedi; yeraltı sularındaki silis her ahşap hücresinin yerini alıp ağaçları saf gökkuşağı taşına çevirdi!',
      w: 'Petrified Forest National Park'
    },
    {
      id: 'fk-gobi-yumurta', ad: 'Gobi Çölü: İlk Dinozor Yumurtaları & Dövüşen Dinozorlar', ik: '🥚', yer: 'Bayanzag (Flaming Cliffs), Moğolistan', ll: [44.14, 103.71],
      yas: '~75 milyon yıllık (Geç Kretase)', yil: '1923 & 1971',
      buluntu: 'Dünya tarihinde keşfedilen İLK dinozor yumurtaları, kuluçkaya yatmış anne Oviraptor ve birbirini ısırırken kum fırtınasında gömülmüş Velociraptor + Protoceratops!',
      onem: 'Dinozorların tıpkı kuşlar gibi yumurtlayıp yuvalarına ve yavrularına özenle baktığını kanıtlayan devrimci buluntudur.',
      ilginc: '1923\'te kaşif Roy Chapman Andrews bu keşfi yaparken Hollywood\'un ünlü "Indiana Jones" karakterine doğrudan ilham verdi!',
      w: 'Fighting Dinosaurs'
    },
    {
      id: 'fk-lyme', ad: 'Lyme Regis: Mary Anning & Jura Deniz Canavarları', ik: '🐬', yer: 'Dorset (Jura Kıyısı), İngiltere', ll: [50.72, -2.93],
      yas: '~195 milyon yıllık (Erken Jura)', yil: '1811 – 1828 (Mary Anning)',
      buluntu: 'İlk eksiksiz Ichthyosaurus (deniz yunusu sürüngeni), ilk Plesiosaurus, ilk İngiliz uçan sürüngeni (Dimorphodon) ve dev spiral ammonit fosilleri!',
      onem: '12 yaşındaki yoksul bir kız çocuğunun bulduğu bu fosiller, türlerin neslinin tükenebileceğini kanıtlayarak modern paleontoloji bilimini başlattı.',
      ilginc: 'Mary Anning fosilleşmiş dışkıların (koprolit) sırrını çözerek 200 milyon yıl önceki deniz canavarlarının midesinde ne olduğunu ortaya çıkardı!',
      w: 'Mary Anning'
    },
    {
      id: 'fk-patagonya', ad: 'Patagonya Devleri (Karadaki En Büyük Dinozorlar)', ik: '🦕', yer: 'Neuquén & Chubut, Arjantin', ll: [-38.90, -69.20],
      yas: '~95 – 101 milyon yıllık (Kretase)', yil: '1987 – 2014',
      buluntu: '35–37 metrelik, 75–80 tonluk Argentinosaurus ve Patagotitan kemikleri, 1,6 metrelik tek bir sırt omuru ve dev etçil Giganotosaurus!',
      onem: 'Karada yaşamış en ağır hayvanların boyut sınırını ve kemik yapısını ortaya koyan dünyanın en zengin dev dinozor mezarlığıdır.',
      ilginc: '2014\'te Patagotitan\'ın 2,4 metrelik tek bir uyluk kemiği çıkarıldığında yanında uzanan paleontolog kemiğin yanında küçücük kaldı!',
      w: 'Patagotitan'
    }
  ]
};
