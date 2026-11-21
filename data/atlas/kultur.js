// 👘 Devletler ve ülkeler için döneme göre kültür, giyim, mutfak ve günlük yaşam profilleri.
// openDevlet() içindeki "👘 Kültür ve Yaşam" sekmesi tarafından kullanılır.
// Her kayıt regex (esles) ile hem Cliopatria İngilizce adına (k.n) hem Türkçe adına (ad) eşleşir.
'use strict';
window.DEVLET_KULTUR = [
  {
    id: 'osmanli', esles: /ottoman|osmanl/i,
    baslik: 'Osmanlı Toplumunda Kültür ve Yaşam',
    halk: 'Çok dilli, çok dinli ve mahalle dayanışmasına dayalı bir toplum yapısı vardı. Zanaatkârlar loncalarda örgütlenir, misafirperverlik, vakıf yardımlaşması ve komşuluk hukuku günlük yaşamın temelini oluştururdu.',
    giyim: 'Erkekler şalvar, gömlek, kuşak, kaftan (veya cepken) ile döneme göre sarık/kavuk, 19. yüzyıldan itibaren fes giyerdi. Kadınlar evde entari ve şalvar, dışarıda ferace ve yaşmak kullanırdı; kumaşın kalitesi ve başlık biçimi meslek ve rütbeyi belli ederdi.',
    mutfak: 'Saray ve halk mutfağı zeytinyağlılar, pilav, börek, kebap, şerbet ve baklava gibi şerbetli tatlılarla ünlendi. 16. yüzyılda İstanbul\'da açılan kahvehaneler sohbetin, satrancın, meddah ve Karagöz gösterilerinin kalbi oldu.',
    adet: 'Hamam kültürü, bayram şenlikleri, aşure ve ramazan geceleri, hat sanatı, ebru, çinicilik ve klasik Türk müziği toplumun her kesiminde yaşardı.',
    ilginc: 'İstanbul\'da kurulan kahvehaneler, Avrupa\'daki ilk kahvehanelerden yaklaşık bir yüzyıl önce açıldı ve "mekteb-i irfan" (bilgi okulu) olarak anıldı.'
  },
  {
    id: 'turkiye', esles: /turkey|türkiye cumhuriyeti|^türkiye$/i,
    baslik: 'Türkiye\'de Kültür ve Günlük Yaşam',
    halk: 'Sıcakkanlılık, misafirperverlik, güçlü aile bağları ve imece (dayanışma) kültürü öne çıkar. Anadolu\'nun binlerce yıllık mirasıyla modern kent yaşamı iç içe geçer.',
    giyim: 'Cumhuriyet döneminden itibaren modern gündelik giyim yaygındır; bunun yanında düğünlerde, şenliklerde ve halk oyunlarında Ege\'den Karadeniz\'e, Doğu Anadolu\'dan Trakya\'ya her yörenin renkli geleneksel kıyafetleri yaşatılır.',
    mutfak: 'İnce belli bardakta çay ve Türk kahvesi günün ayrılmaz parçasıdır; zengin kahvaltı sofraları, zeytinyağlılar, mantı, kebap, simit, lahmacun ve baklava dünyaca tanınır.',
    adet: 'Eve gelen misafire kolonya ve çay/kahve ikramı, bayramlarda büyüklerin elini öpme, halay/horon/zeybek halk oyunları, sokak kedilerine ve köpeklerine sahip çıkma kültürü çok belirgindir.',
    ilginc: 'Türkiye, kişi başına düşen yıllık çay tüketiminde dünyada açık ara ilk sırada yer alır.'
  },
  {
    id: 'selcuklu', esles: /seljuk|selçuklu|rum sultanate/i,
    baslik: 'Selçuklu Döneminde Kültür ve Yaşam',
    halk: 'Orta Asya bozkır geleneği ile İran ve Anadolu kent kültürünü harmanlayan dinamik bir toplumdu. Kervansaraylar, medreseler, darüşşifalar (hastaneler) ve Ahilik teşkilatı toplumu bir arada tutardı.',
    giyim: 'Türkmen beyleri ve kentliler börk (keçe başlık), uzun kollu kaftan, kemer ve deri çizme giyerdi; geometrik ve çift başlı kartal motifli ipek ve yün dokumalar sevilirdi.',
    mutfak: 'Tandır ekmeği, etli yahni, bulgur ve buğday yemekleri, ayran, şerbet ve bal ile tatlandırılmış hamur işleri yaygındı; kervansaraylarda yolculara üç gün ücretsiz yemek verilirdi.',
    adet: 'Ahilik (dürüst ticaret ve ustalık geleneği), Mevlana ve Yunus Emre gibi düşünürlerin hoşgörü iklimi, taş işçiliği ve turkuaz çini sanatı döneme damga vurdu.',
    ilginc: 'Anadolu Selçuklu kervansarayları her 30–40 kilometrede (bir deve yürüyüşü günü) kurulmuştu ve tüccarların malları bir nevi devlet sigortası altındaydı.'
  },
  {
    id: 'gokturk', esles: /gokturk|göktürk|türk kağan|uyghur|uygur|xiongnu|hun/i,
    baslik: 'Bozkır Türklerinde Kültür ve Yaşam',
    halk: 'Atlı göçebe düzen içinde hareketli, özgürlüğüne düşkün ve boy dayanışmasına dayalı bir yaşam vardı. Kadınlar da ata biner, ok atar ve kurultay kararlarında söz sahibi olurdu.',
    giyim: 'Ata binmeye uygun ceket (kaftan), şalvar, uzun deri çizme, kemer ve soğuğa dayanıklı keçe/kürk başlık (börk) giyilirdi; bu pantolonlu giyim tarzı zamanla Çin ve Avrupa ordularına da geçti.',
    mutfak: 'Et (özellikle at ve koyun), kımız (fermente kısrak sütü), kurut (kurutulmuş yoğurt) ve süt ürünleri temel gıdaydı.',
    adet: 'Oba ve yurt (keçe çadır) yaşamı, kopuz eşliğinde destan anlatıcılığı, demircilik ustalığı, av şölenleri ve taş anıtlar (Orhun Yazıtları) dikme geleneği öne çıkardı.',
    ilginc: 'Bozkır halklarının geliştirdiği pantolon ve üzengi, tüm dünyada süvari giyiminin ve biniciliğin standart hâline gelmesini sağladı.'
  },
  {
    id: 'bizans', esles: /byzantine|eastern roman|bizans|doğu roma/i,
    baslik: 'Bizans (Doğu Roma) Kültür ve Yaşamı',
    halk: 'Roma devlet geleneği, Yunan dili ve Hristiyan inancının birleştiği kozmopolit bir imparatorluktu. Konstantinopolis sokakları tüccarlar, zanaatkârlar, keşişler ve öğrencilerle dolup taşardı.',
    giyim: 'Soylu erkek ve kadınlar altın sırmalı, mor ve parlak renkli ipek tunikler (dalmatika) ve omuzdan dökülen pelerinler (chlamys) giyerdi; gerçek Tyrian moru yalnızca imparator ailesine aitti.',
    mutfak: 'Zeytinyağı, ekmek, peynir, balık, bakliyat, baharatlı şaraplar ve bal ile yapılan tatlılar sofraların temelini oluştururdu.',
    adet: 'Hipodromdaki araba yarışları (Maviler ve Yeşiller takımları) bugünkü futbol rekabeti kadar ateşliydi; altın mozaikler, ikonalar ve görkemli kilise törenleri günlük yaşamın merkezindeydi.',
    ilginc: '6. yüzyılda iki keşişin Çin\'den içi oyuk bastonlar içinde ipek böceği yumurtası kaçırmasıyla Bizans, Avrupa\'nın ilk ipek üretim merkezi oldu.'
  },
  {
    id: 'roma', esles: /roman republic|roman empire|western roman|roma cumhuriyeti|roma imparatorluğu|batı roma/i,
    baslik: 'Antik Roma\'da Kültür ve Yaşam',
    halk: 'Hukuk, mühendislik ve kent yaşamına büyük önem veren bir toplumdu. Günün merkezi "Forum" meydanıydı; vatandaşlar sabah işlerini bitirip öğleden sonra halk hamamlarında sosyalleşirdi.',
    giyim: 'Vatandaş erkekler resmi günlerde uzun yün örtü "toga", günlük hayatta diz boyu "tunika" giyerdi. Kadınlar "stola" ve üstüne "palla" şalı takardı; deri sandaletler yaygındı.',
    mutfak: 'Ekmek, zeytin, peynir, tahıl lapası, şarap ve neredeyse her yemeğe lezzet veren fermente balık sosu "garum" çok sevilirdi; zengin şölenlerinde insanlar divanlara uzanarak yemek yerdi.',
    adet: 'Halk hamamları, amfitiyatrolardaki gladyatör oyunları, su kemerleri, tiyatro ve hitabet sanatı Roma kent kültürünün imzasıydı.',
    ilginc: 'Roma sokaklarında "thermopolium" denen sıcak yemek tezgâhları vardı — antik çağın ilk fast-food dükkânlarıydı!'
  },
  {
    id: 'misir', esles: /egypt|mısır|ptolem|mamluk|memlük|fatimid/i,
    baslik: 'Mısır\'da Kültür ve Yaşam',
    halk: 'Nil Nehri\'nin ritmine göre yaşayan, aileye, mizaha ve ahiret inancına derinden bağlı bir toplumdu. Antik Mısır\'da kadınlar mülk edinebilir, ticaret yapabilir ve boşanma hakkına sahipti.',
    giyim: 'Sıcak iklim nedeniyle hafif, beyaz keten kumaşlar tercih edilirdi: antik çağda erkekler diz boyu etek (şenti), kadınlar omuzdan askılı keten elbise giyerdi; hem erkekler hem kadınlar gözlerini güneşten ve enfeksiyondan korumak için sürme (kohl) çekerdi.',
    mutfak: 'Ekmek ve arpa birası antik Mısır\'da günlük ücret olarak bile ödenirdi; mercimek, soğan, hurma, incir, Nil balıkları ve modern Mısır\'da ünlü "kuşari" ile "ful medames" sofraların baş tacıdır.',
    adet: 'Senet masa oyunu, müzik, koku ve parfüm yapımı, tapınak bayramları ve Nil taşkını kutlamaları binlerce yıl boyunca yaşamı renklendirdi.',
    ilginc: 'Antik Mısırlılar kedileri o kadar severdi ki bir evin kedisi öldüğünde ev halkı yas işareti olarak kaşlarını tıraş ederdi.'
  },
  {
    id: 'yunan', esles: /greek|athens|sparta|macedon|hellen|yunan|atina|makedonya/i,
    baslik: 'Antik Yunan\'da Kültür ve Yaşam',
    halk: 'Felsefe, tartışma, sanat ve spor tutkunu kent devletleri (polisler) kültürüydü. "Agora" meydanında siyaset, ticaret ve felsefe iç içe konuşulurdu.',
    giyim: 'Dikişsiz tek parça keten veya yün kumaşın omuzdan iğnelerle tutturulup bele kemerle bağlandığı "khiton" ve soğukta üstüne sarılan "himation" giyilirdi.',
    mutfak: 'Akdeniz üçlüsü olan ekmek, zeytinyağı ve suyla seyreltilmiş şarap temel besindi; incir, zeytin, peynir ve balık çok tüketilirdi.',
    adet: 'Olimpiyat Oyunları (savaşlara bile ara verilirdi!), açık hava tiyatro festivalleri (tragedya ve komedya), spor salonları (gymnasion) ve "symposion" sohbet geceleri kültürün özüydü.',
    ilginc: 'Antik Yunan\'da şarabı suyla karıştırmadan sek içmek kabalık ve "barbarlık" işareti sayılırdı.'
  },
  {
    id: 'iran', esles: /achaemenid|persia|sasan|safavid|qajar|iran|pers|sasani|safevi|parth/i,
    baslik: 'İran (Pers) Kültür ve Yaşamı',
    halk: 'Şiire, misafirperverliğe, nezakete ("taarof") ve bahçe sanatına derinden değer veren köklü bir uygarlıktır.',
    giyim: 'Antik Perslerde uzun kollu renkli kaftanlar, pantolon ve keçe başlıklar giyilirdi; Safevi döneminde zarif ipek cüppeler, işlemeli kuşaklar ve ince sarıklar öne çıktı.',
    mutfak: 'Safranlı pilavlar, nar ve cevizle yapılan güveçler (fesenjan), taze otlar, kebaplar, gül suyu ve çay İran mutfağının imzasıdır.',
    adet: 'Baharın gelişini kutlayan Nevruz bayramı 3.000 yılı aşkın süredir kutlanır; Firdevsi, Hafız, Sadi ve Ömer Hayyam\'ın şiirleri bugün bile günlük konuşmalarda ezbere okunur.',
    ilginc: 'İngilizcedeki "paradise" (cennet) kelimesi, duvarlarla çevrili su kanallı Pers kraliyet bahçeleri olan "pairidaēza"dan gelir.'
  },
  {
    id: 'arap_islam', esles: /abbasid|umayyad|rashidun|arabia|abbasi|emevi|raşidin|suudi|mısır/i,
    baslik: 'Klasik İslam & Arap Dünyasında Kültür ve Yaşam',
    halk: 'Söz sanatına (şiir), misafirperverliğe, ticaret ahlakına ve ilme büyük önem verilirdi. Bağdat, Şam, Kahire ve Kurtuba gibi şehirler kütüphaneler, rasathaneler ve çarşılarla doluydu.',
    giyim: 'Sıcak iklime uygun bol ve akışkan giysiler (sevb/cübbe), başı güneşten ve kumdan koruyan sarık veya kefiye ile renkli şallar kullanılırdı.',
    mutfak: 'Hurma, baharatlı pilavlar, kuzu yemekleri, humus, ekmek çeşitleri, bademli/fıstıklı tatlılar, kakuleli kahve ve naneli çay yaygındı.',
    adet: 'Bağdat\'taki Beytü\'l-Hikme gibi çeviri ve bilim merkezleri, hat ve geometri sanatı, avlulu serin evler ve misafire gösterilen cömertlik kültürün temel direkleridir.',
    ilginc: 'Dünyanın kesintisiz eğitim veren en eski üniversitesi sayılan Karaviyyin (859, Fas), Fatıma el-Fihri adlı bir kadın tarafından kurulmuştur.'
  },
  {
    id: 'mogol', esles: /mongol|yuan|ilkhan|golden horde|chagatai|moğol|ilhanlı|altın orda/i,
    baslik: 'Moğol İmparatorluğu\'nda Kültür ve Yaşam',
    halk: 'Bozkır disiplini, dini hoşgörü ve liyakate dayalı bir imparatorluk kültürü kurdular. Yasa kuralları hırsızlığı ve elçiye dokunmayı kesin biçimde yasaklardı.',
    giyim: 'Önden çapraz kapanan uzun "deel" kaftanı, kalın kuşak, kürk şapka ve ucu hafif kalkık deri çizmeler (otları ezmemek için) giyilirdi.',
    mutfak: 'Haşlanmış koyun eti, mantı benzeri "buuz", süt çayı, kımız ve kurutulmuş peynir temel besinlerdi.',
    adet: 'Her yıl yapılan "Naadam" festivalinde üç erkeklik oyunu (güreş, at yarışı, okçuluk) düzenlenirdi; posta sistemi "Yam" sayesinde bir haber kıtayı haftalar içinde aşardı.',
    ilginc: 'Moğol Barışı (Pax Mongolica) döneminde bir yolcu başına altın tepsi koysa dahi Karadeniz\'den Çin\'e güvenle yürüyebileceği anlatılırdı.'
  },
  {
    id: 'cin', esles: /china|han |tang |song |ming |qing |qin |zhou |shang |çin/i,
    baslik: 'Çin\'de Kültür ve Yaşam',
    halk: 'Aileye saygı, toplumsal uyum, eğitim ve devlet memurluğu sınavlarına dayalı 4.000 yıllık kesintisiz bir kültür geleneğine sahiptir.',
    giyim: 'Han ve Tang dönemlerinde geniş kollu, çapraz yakalı ipek "hanfu" elbiseleri yaygındı; Qing döneminde dik yakalı uzun cüppeler (changshan/qipao) öne çıktı. Sarı renk uzun süre yalnızca imparatora ayrıldı.',
    mutfak: 'Yemek çubuklarıyla (chopsticks) yenilen pirinç, erişte, buharda mantı (dim sum), soya sosu ve yeşil çay Çin mutfağının binlerce yıllık simgesidir.',
    adet: 'Çin Yeni Yılı (Bahar Bayramı), kaligrafi, porselen sanatı, ipek dokumacılığı, Tai Chi ve geleneksel bahçe tasarımı günlük yaşamın kalbindedir.',
    ilginc: 'Kâğıt, matbaa, pusula ve barut — modern dünyayı şekillendiren "Dört Büyük Buluş" — Çin\'de icat edildi.'
  },
  {
    id: 'japonya', esles: /japan|shogun|tokugawa|edo|meiji|heian|japonya/i,
    baslik: 'Japonya\'da Kültür ve Yaşam',
    halk: 'Doğaya saygı, kusurlulukta güzellik bulma ("wabi-sabi"), incelik, dakiklik ve toplumsal nezaket Japon kültürünün en ayırt edici özellikleridir.',
    giyim: 'Geleneksel "kimono" (ve yazlık pamuklu "yukata") ile bele sarılan "obi" kuşağı yüzyıllardır törenlerde ve festivallerde giyilir; geleneksel ahşap sandaletlere "geta" denir.',
    mutfak: 'Taze deniz ürünleri, pirinç, suşi, ramen, miso çorbası, tempura ve matcha yeşil çayı hem göze hem damağa hitap edecek biçimde sunulur.',
    adet: 'İlkbaharda kiraz çiçeği izleme ("hanami"), çay seremonisi, origami, kaplıca ("onsen") banyoları, haiku şiiri ve modern dönemde dünya çapında sevilen manga/anime kültürü.',
    ilginc: 'Japonya\'da eve girerken ayakkabı çıkarmak yalnızca temizlik değil, dış dünyanın telaşını kapıda bırakma geleneğidir.'
  },
  {
    id: 'kore', esles: /korea|joseon|goryeo|silla|kore/i,
    baslik: 'Kore\'de Kültür ve Yaşam',
    halk: 'Büyüklere saygı, güçlü topluluk duygusu ("jeong"), eğitime yüksek önem ve estetik tasarım anlayışı öne çıkar.',
    giyim: 'Kısa ceket ("jeogori") ve kabarık etek/pantolondan oluşan canlı renkli "hanbok", bayramlarda ve özel günlerde hâlâ giyilir.',
    mutfak: 'Fermente lahana turşusu "kimchi", bibimbap, bulgogi ve küçük paylaşım tabakları ("banchan") her sofranın parçasıdır.',
    adet: '15. yüzyılda Kral Sejong\'un herkes kolayca okuyabilsin diye tasarladığı Hangıl alfabesi, yerden ısıtmalı geleneksel "ondol" evleri ve günümüzde küresel K-pop/sinema kültürü.',
    ilginc: 'Kore\'de geleneksel evlerin altından sıcak duman kanalları geçirilen "ondol" yerden ısıtma sistemi 2.000 yılı aşkın süredir kullanılmaktadır.'
  },
  {
    id: 'hindistan', esles: /india|mughal|gupta|maurya|delhi sultan|maratha|hindistan|babür/i,
    baslik: 'Hindistan\'da Kültür ve Yaşam',
    halk: 'Yüzlerce dil, din, renk ve festivalin bir arada yaşadığı dünyanın en çeşitli kültürel mozaiğidir; misafir "tanrı gibi" (Atithi Devo Bhava) ağırlanır.',
    giyim: 'Kadınlar tek parça uzun kumaştan sarılan rengârenk "sari" veya "salwar kameez", erkekler pamuklu "kurta" ve "dhoti" giyer; bölgelere göre dokuma ve desenler tamamen değişir.',
    mutfak: 'Zerdeçal, kimyon, kakule, tarçın gibi zengin baharatlarla hazırlanan köriler, mercimek (dal), naan ekmeği, biryani ve sütlü baharatlı "masala chai" dünyaca ünlüdür.',
    adet: 'Işık festivali Diwali, renk festivali Holi, yoga ve meditasyon geleneği, klasik raga müziği, kına sanatı ve Bollywood sineması yaşamın enerjisini oluşturur.',
    ilginc: 'Satranç oyunu (eski adıyla "Çaturanga") ve bugün tüm dünyanın kullandığı "0" (sıfır) rakamı Hindistan\'da doğmuştur.'
  },
  {
    id: 'fransa', esles: /france|frank|gaul|fransa|frank/i,
    baslik: 'Fransa\'da Kültür ve Yaşam',
    halk: 'Sanat, edebiyat, felsefe, gastronomi ve sokak kafelerinde uzun sohbetler Fransız yaşam sanatının ("art de vivre") temelidir.',
    giyim: '17. yüzyılda Versay Sarayı\'ndan bu yana Paris moda dünyasının başkenti oldu; şıklık, sade kesimler ve zarif aksesuarlar günlük stile sinmiştir.',
    mutfak: 'Taze baget ekmek, kruvasan, yüzlerce çeşit peynir, tereyağlı soslar, kiş, makaron ve özenli sofra adabı UNESCO Somut Olmayan Kültürel Miras listesinde yer alır.',
    adet: 'Kafe teraslarında kahve içip kitap okuma, müze ve sinema kültürü, felsefi tartışmalar ve 14 Temmuz Bastille Günü kutlamaları.',
    ilginc: 'Fransa\'da restoran kelimesi 18. yüzyılda Paris\'te "güç tazeleyen et suyu çorbası" (bouillon restaurant) satan lokantalardan tüm dünyaya yayıldı.'
  },
  {
    id: 'ingiltere', esles: /england|united kingdom|great britain|british|ingiltere|birleşik krallık|britanya/i,
    baslik: 'Birleşik Krallık\'ta Kültür ve Yaşam',
    halk: 'Kibarlık, sıraya girme alışkanlığı, ince mizah ("ironi"), köklü gelenekler ve dünya çapında etkili edebiyat ile müzik kültürü öne çıkar.',
    giyim: 'Yünlü tüvit ceketler, yağmura dayanıklı trençkotlar ve 19. yüzyılda dünyaya yayılan modern takım elbise geleneği burada şekillendi.',
    mutfak: 'Sütlü siyah çay ve beş çayı ("afternoon tea"), fish & chips, pazar rostosu ve zengin kahvaltı klasikleri bilinir.',
    adet: 'Mahalle pub\'larında sohbet, bahçecilik tutkusu, tiyatro (Shakespeare geleneği), futbol ve kriket maçları günlük yaşamın parçasıdır.',
    ilginc: 'Futbol, tenis, ragbi ve kriket gibi modern dünyanın en popüler sporlarının kuralları 19. yüzyılda İngiltere\'de yazılı hâle getirildi.'
  },
  {
    id: 'italya', esles: /italy|venice|florence|milan|genoa|papal|italya|venedik|floransa/i,
    baslik: 'İtalya\'da Kültür ve Yaşam',
    halk: 'Aile sofraları, el kol hareketleriyle canlı sohbetler, tasarım zevki ve meydanlarda ("piazza") akşam yürüyüşü ("passeggiata") İtalyan kültürünün ruhudur.',
    giyim: 'Rönesans\'tan beri kumaş, deri işçiliği ve moda tasarımında dünya liderlerindendir; günlük hayatta bile özenli giyinme ("la bella figura") önemlidir.',
    mutfak: 'Bölgeden bölgeye değişen makarna çeşitleri, Napoli pizzası, zeytinyağı, espresso, tiramisu ve gelato (İtalyan dondurması) az ama taze malzemeyle mucizeler yaratır.',
    adet: 'Opera, Rönesans sanatı ve mimarisi, kahve barlarında ayakta hızlı espresso içme geleneği ve yerel şehir festivalleri.',
    ilginc: 'Bugün dünya çapında müzikte kullanılan "piyano, allegro, forte, opera" gibi terimlerin neredeyse tamamı İtalyancadır.'
  },
  {
    id: 'ispanya', esles: /spain|castile|aragon|al-andalus|ispanya|endülüs/i,
    baslik: 'İspanya\'da Kültür ve Yaşam',
    halk: 'Akşam geç saatlere kadar süren sokak hayatı, müzik, dans ve paylaşımcı sosyal yaşam İspanya\'yı çok canlı kılar.',
    giyim: 'Endülüs\'te fırfırlı flamenko elbiseleri ve şallar geleneksel simgelerdir; 16. yüzyıl İspanyol saray modası bir dönem tüm Avrupa\'yı etkilemiştir.',
    mutfak: 'Küçük paylaşım tabakları ("tapas"), safranlı "paella", soğuk domates çorbası "gazpacho", churros ve zeytinyağlı yemekler meşhurdur.',
    adet: 'Flamenko müziği ve dansı, öğle sıcağında kısa dinlenme ("siesta"), renkli şehir festivalleri ve mimaride Endülüs ile Avrupa sanatının birleşimi.',
    ilginc: 'İspanyolca, dünya genelinde yaklaşık 500 milyon anadil konuşuruyla Çinceden sonra en çok konuşulan ikinci anadildir.'
  },
  {
    id: 'almanya', esles: /germany|prussia|holy roman|almanya|prusya|kutsal roma/i,
    baslik: 'Almanya\'da Kültür ve Yaşam',
    halk: 'Düzen, dakiklik, mühendislik ve zanaatkârlık titizliği, doğa yürüyüşü sevgisi ve derin felsefe/müzik mirasıyla tanınır.',
    giyim: 'Gündelik modern stilin yanında Bavyera bölgesinde festivallerde deri pantolon ("Lederhosen") ve geleneksel elbise ("Dirndl") giyilir.',
    mutfak: '3.000\'den fazla tescilli ekmek çeşidi, tuzlu simit ("Brezel"), patates yemekleri, elmalı strudel ve geleneksel fırın pastaları ünlüdür.',
    adet: 'Klasik müzik (Bach, Beethoven, Brahms), yılbaşı pazarları, kitap okuma kültürü ve doğa koruma bilinci çok güçlüdür.',
    ilginc: '1450\'de Johannes Gutenberg\'in Mainz\'da hareketli metal harfli matbaayı geliştirmesi, bilgi devrimini ve okuryazarlığı tüm dünyaya yaydı.'
  },
  {
    id: 'rusya', esles: /russia|soviet|muscovy|kievan rus|rusya|sovyet/i,
    baslik: 'Rusya\'da Kültür ve Yaşam',
    halk: 'Derin edebiyat ve sanat tutkusu, zorlu kışlara dayanıklılık, samimi dostluklar ve semaver başında uzun mutfak sohbetleri öne çıkar.',
    giyim: 'Kışın kürk şapka ("uşanka") ve kalın paltolar hayat kurtarır; geleneksel halk kıyafetinde nakışlı "rubaha" gömlekleri ve "sarafan" elbiseleri kullanılır.',
    mutfak: 'Pancarlı "borç" çorbası, ince krep ("blini"), mantı benzeri "pelmeni", siyah çavdar ekmeği ve semaverde demlenen çay sofraların temelidir.',
    adet: 'Bale ve klasik müzik (Çaykovski), dünya edebiyatının devleri (Tolstoy, Dostoyevski, Çehov), buhar banyosu ("banya") ve satranç tutkusu.',
    ilginc: 'Rusya\'da ev eşiğinin üstünden el sıkışmak veya bir şey uzatmak uğursuzluk sayılır; misafir içeri adım attıktan sonra selamlaşılır.'
  },
  {
    id: 'abd', esles: /united states|amerika birleşik/i,
    baslik: 'ABD\'de Kültür ve Yaşam',
    halk: 'Dünyanın dört bir yanından gelen göçmen kültürlerinin harmanlandığı, bireysel girişimciliğin, yol kültürünün ve popüler sanatın çok güçlü olduğu bir toplumdur.',
    giyim: '19. yüzyılda altın arayıcıları için üretilen kot pantolon ("blue jeans"), tişört ve spor ayakkabı buradan tüm dünyanın gündelik kıyafetine dönüştü.',
    mutfak: 'Güney eyaletlerinin barbeküsü, burger, elmalı turta, Meksika-ABD mutfağı (Tex-Mex) ve büyük şehirlerde her kıtadan mutfaklar bir aradadır.',
    adet: 'Caz, blues ve rock\'n\'roll müziği, Hollywood sineması, Şükran Günü aile sofraları, beyzbol/basketbol ve ulusal park gezileri.',
    ilginc: 'Dünyanın ilk ulusal parkı olan Yellowstone, 1872\'de ABD\'de doğayı koruma amacıyla ilan edildi.'
  },
  {
    id: 'meksika', esles: /mexico|aztec|maya|meksika|aztek/i,
    baslik: 'Meksika ve Mezoamerika\'da Kültür ve Yaşam',
    halk: 'Renkli sanat, güçlü aile bağları, müzik ve yerli Maya/Aztek mirasıyla İspanyol etkisinin eşsiz birleşimi öne çıkar.',
    giyim: 'Geleneksel el dokuması nakışlı "huipil" bluzları, pançolar ve "rebozo" şalları binlerce yıllık dokuma ustalığını yaşatır.',
    mutfak: 'Mısır ekmeği ("tortilla"), taco, avokadolu "guacamole", acı biberli ve kakaolu "mole" sosu UNESCO Dünya Mirası\'dır. Çikolata (kakao), domates ve mısır tüm dünyaya buradan yayıldı!',
    adet: 'Ölen sevdiklerin hüzünle değil neşe, çiçek ve müzikle anıldığı "Ölüler Günü" (Día de los Muertos), mariachi müziği ve duvar resmi sanatı.',
    ilginc: 'Antik Aztek ve Mayalar çikolatayı şekersiz, acı biber ve baharatlarla köpüklü sıcak bir içecek olarak içer, kakao çekirdeklerini para yerine kullanırdı.'
  },
  {
    id: 'inka', esles: /inca|peru|inka/i,
    baslik: 'And ve İnka Kültür ve Yaşamı',
    halk: 'Yüksek dağlarda hayatta kalmayı "ayni" denen karşılıklı yardımlaşma ve topluluk dayanışmasıyla başaran bir toplumdu.',
    giyim: 'Lama ve alpaka yününden parlak doğal boyalarla dokunan geometrik desenli pançolar, şallar ve soğuktan koruyan kulaklıklı "chullo" bereleri ünlüdür.',
    mutfak: 'Yüzlerce çeşit patates, kinoa, mısır ve yüksek dağ soğuğunda kurutulan "chuño" (antik dondurarak kurutma tekniği) temel gıdalardı.',
    adet: 'Yazıları olmadığı hâlde düğümlü renkli iplerle ("khipu") nüfus ve vergi kayıtları tutmaları, harçsız mükemmel taş duvarları ve pan flüt müziği.',
    ilginc: 'Dünyada bugün tüketilen patatesin anavatanı And Dağları\'dır; Peru\'da 3.000\'den fazla farklı patates çeşidi yetişir.'
  },
  {
    id: 'mali_afrika', esles: /mali|songhai|ghana|ethiopia|aksum|etiyopya/i,
    baslik: 'Afrika İmparatorlukları\'nda Kültür ve Yaşam',
    halk: 'Sözlü tarih geleneği, müzik, ritim, misafirperverlik ve kervan ticaretiyle yoğrulmuş zengin toplumlardı.',
    giyim: 'Batı Afrika\'da el dokuması canlı "kente" ve "bogolan" (çamur boyalı) kumaşlar, Etiyopya\'da ise ince beyaz pamuklu "netela" şalları giyilirdi.',
    mutfak: 'Batı Afrika\'da darı, sorgum, yerfıstığı sosları ve jollof pilavı; Etiyopya\'da ekşi mayalı "injera" ekmeği ve kahve seremonisi öne çıkar.',
    adet: 'Tarihi nesilden nesile müzikle aktaran "Griot" ozanları, Timbuktu\'nun yüz binlerce elyazması kütüphanesi ve Etiyopya\'nın geleneksel kahve kavurma töreni.',
    ilginc: 'Kahve bitkisi ilk kez Etiyopya yaylalarında keşfedilmiş, oradan Yemen ve Osmanlı üzerinden tüm dünyaya yayılmıştır.'
  }
];
