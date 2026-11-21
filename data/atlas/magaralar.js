// 🪨 Tarihöncesi Mağaralar ve İlk Yerleşimler (MÖ 3000–4000 öncesi)
// Zaman çizelgesi MÖ 3000'den geriye gidince haritada mağara simgeleriyle görünür.
'use strict';
window.ATLAS_MAGARALAR = [
  {
    id: 'karain', ad: 'Karain Mağarası', ll: [37.08, 30.57], yer: 'Antalya, Türkiye',
    donem: 'MÖ 500.000 – MÖ 10.000 (Paleolitik)',
    nufus: 'Mevsimlik 20–40 kişilik avcı-toplayıcı klanlar',
    buluntular: ['Neandertal ve erken insan diş/kafatası parçaları', 'Çakmaktaşı el baltaları, kazıyıcılar ve mızrak uçları', 'Fil, su aygırı, mağara ayısı ve geyik kemikleri', 'Ocak (ateş) külleri ve oyma kemik aletler'],
    ozet: 'Anadolu\'da kesintisiz yerleşime sahne olan en eski mağaralardan biridir. Buzul çağlarında bile Akdeniz\'in ılıman iklimi sayesinde insan topluluklarına binlerce yıl sığınak oldu.',
    ilginc: 'Kazılarda Anadolu\'da bir zamanlar yaşamış olan fil ve su aygırı gibi sıcak iklim hayvanlarının fosil kemikleri bulundu.',
    w: 'Karain Cave'
  },
  {
    id: 'gobeklitepe', ad: 'Göbeklitepe', ll: [37.22, 38.92], yer: 'Şanlıurfa, Türkiye',
    donem: 'MÖ 9600 – MÖ 8200 (Çanak Çömleksiz Neolitik)',
    nufus: 'Çevre köylerden şenlikler için toplanan yüzlerce kişi',
    buluntular: ['6 metre boyunda T biçimli oyma kireçtaşı dikilitaşlar', 'Tilki, yaban domuzu, yılan, akbaba ve boğa kabartmaları', 'Dev taş kâseler ve öğütme taşları', 'Binlerce ceylan ve yaban sığırı kemiği'],
    ozet: 'Henüz çanak çömlek ve metal bilinmezken avcı-toplayıcı toplulukların inşa ettiği dünyanın bilinen en eski anıtsal toplanma ve inanç merkezidir.',
    ilginc: 'Stonehenge\'den yaklaşık 6.500 yıl, Mısır Piramitleri\'nden ise 7.000 yıl daha eskidir.',
    w: 'Göbekli Tepe'
  },
  {
    id: 'catalhoyuk', ad: 'Çatalhöyük', ll: [37.67, 32.83], yer: 'Konya, Türkiye',
    donem: 'MÖ 7400 – MÖ 5700 (Neolitik)',
    nufus: 'Zirve döneminde yaklaşık 5.000 – 8.000 kişi',
    buluntular: ['Sokaksız, damdan merdivenle girilen bitişik kerpiç evler', 'Duvarlarda boğa başları (bukranion), av sahneleri ve yanardağ resmi', 'Ev tabanlarının altına gömülü insan iskeletleri', 'Obsidyen aynalar, kemik iğneler ve ana tanrıça figürinleri'],
    ozet: 'İnsanlığın avcılıktan tarıma geçişindeki en büyük erken kentlerden biridir. Evler arı kovanı gibi bitişikti; insanlar sokak yerine çatılarda yürüyüp içeri damdaki delikten girerdi.',
    ilginc: 'Duvarlardan birinde bulunan çizimin, yakındaki Hasan Dağı\'nın patlamasını gösteren dünyanın en eski harita/manzara resmi olduğu düşünülür.',
    w: 'Çatalhöyük'
  },
  {
    id: 'lascaux', ad: 'Lascaux Mağarası', ll: [45.05, 1.17], yer: 'Dordogne, Fransa',
    donem: 'MÖ 17.000 – MÖ 15.000 (Üst Paleolitik)',
    nufus: '25–50 kişilik Buzul Çağı avcı toplulukları',
    buluntular: ['600\'den fazla renkli duvar resmi (dev yaban öküzleri, atlar, geyikler)', 'Kömür, kırmızı ve sarı aşı boyası pigment kapları', 'Hayvan yağıyla yanan taş kandiller', 'Çakmaktaşı kazıma kalemleri ve ren geyiği kemikleri'],
    ozet: '"Tarihöncesinin Sistina Şapeli" olarak anılan mağara, Buzul Çağı sanatçılarının meşale ışığında kayanın doğal kıvrımlarını kullanarak üç boyutlu efekt verdiği dev hayvan resimleriyle ünlüdür.',
    ilginc: 'Mağara 1940\'ta köpeği "Robot" bir deliğe düşen 18 yaşındaki Marcel Ravidat ve arkadaşları tarafından tesadüfen keşfedildi.',
    w: 'Lascaux'
  },
  {
    id: 'altamira', ad: 'Altamira Mağarası', ll: [43.38, -4.12], yer: 'Kantabriya, İspanya',
    donem: 'MÖ 34.000 – MÖ 13.000 (Paleolitik)',
    nufus: '20–40 kişilik avcı-toplayıcı aile grupları',
    buluntular: ['Tavana kırmızı ve siyahla çizilmiş çok renkli bizon sürüleri', 'El şablonları, at ve yaban domuzu figürleri', 'Deniz kabuğu süs eşyaları ve kemik zıpkınlar', 'Geyik ve bizon kemikleri ile taş bıçaklar'],
    ozet: 'Keşfedilen ilk büyük Paleolitik mağara sanatı merkezidir. Sanatçılar tavanın doğal çıkıntılarını bizonların sırt ve kaslarına denk getirerek canlı bir kabartma etkisi yaratmıştır.',
    ilginc: '1879\'da 8 yaşındaki María Sanz de Sautuola tavana bakıp "Baba, öküzlere bak!" diye bağırdığında bilim dünyası yıllarca bu resimlerin bu kadar eski olamayacağını sanmıştı.',
    w: 'Cave of Altamira'
  },
  {
    id: 'chauvet', ad: 'Chauvet Mağarası', ll: [44.39, 4.42], yer: 'Ardèche, Fransa',
    donem: 'MÖ 35.000 – MÖ 28.000 (Aurignacian)',
    nufus: 'Küçük göçebe avcı grupları (15–30 kişi)',
    buluntular: ['Mağara aslanları, tüylü gergedanlar, mamutlar ve ayılar', 'Mağara ayısı kafataslarıyla oluşturulmuş sunak benzeri taş', 'Yumuşak çamurda korunmuş bir çocuğun ve bir kurdun ayak izleri', 'Kömür meşale izleri'],
    ozet: 'Avrupa\'nın en eski ve en iyi korunmuş mağara resimlerini barındırır. 20.000 yıl önce mağara ağzı kaya düşmesiyle kapandığı için resimler neredeyse ilk günkü tazeliğinde kalmıştır.',
    ilginc: 'Bazı at ve gergedan çizimlerinde bacaklar art arda çoklu çizilmiştir; bu teknik meşale ışığında hayvanın koşuyormuş gibi hareket etmesini sağlıyordu.',
    w: 'Chauvet Cave'
  },
  {
    id: 'blombos', ad: 'Blombos Mağarası', ll: [-34.41, 21.22], yer: 'Batı Kap, Güney Afrika',
    donem: 'MÖ 100.000 – MÖ 70.000 (Orta Taş Çağı)',
    nufus: '15–30 kişilik kıyı avcı-toplayıcıları',
    buluntular: ['Üzerine geometrik çapraz çizgiler kazınmış aşı boyası taşı', '73.000 yıllık kırmızı çizgili taş (bilinen en eski çizim!)', 'Delinmiş deniz kabuğu kolyeler ve kemik bizler', 'Deniz kulağı (abalone) kabuğunda hazırlanmış boya karışımı'],
    ozet: 'Modern insanın (Homo sapiens) soyut düşünme, sanat ve takı yapma becerisinin Avrupa\'dan çok önce Afrika\'da doğduğunu kanıtlayan en önemli kazı alanıdır.',
    ilginc: 'Kazılarda deniz kabuğu içine aşı boyası, kemik iliği ve kömür karıştırılarak yapılmış 100.000 yıllık bir "boya atölyesi" seti bulundu.',
    w: 'Blombos Cave'
  },
  {
    id: 'sulawesi', ad: 'Sulawesi Mağaraları (Leang Tedongnge)', ll: [-4.98, 119.67], yer: 'Güney Sulawesi, Endonezya',
    donem: 'MÖ 45.500 – MÖ 35.000 (Paleolitik)',
    nufus: '20–40 kişilik ada avcı-toplayıcı grupları',
    buluntular: ['Bilinen en eski figüratif hayvan duvar resmi (45.500 yıllık yaban domuzu)', 'Kırmızı aşı boyasıyla püskürtülmüş yüzlerce el izi', 'Yarı insan yarı hayvan (teriantrop) av sahnesi', 'Taş yonga aletler ve tatlı su midye kabukları'],
    ozet: 'İnsanlık tarihinin bilinen en eski öyküleyici sanat eserine ev sahipliği yapar. Sanatçılar ağızlarına aldıkları boyayı duvara dayadıkları ellerinin üzerine püskürterek imzalarını bırakmıştır.',
    ilginc: 'Uzun süre mağara sanatının sadece Avrupa\'da doğduğu sanılıyordu; Sulawesi\'deki 45.500 yıllık resimler bu görüşü tamamen değiştirdi.',
    w: 'Leang Tedongnge'
  },
  {
    id: 'denisova', ad: 'Denisova Mağarası', ll: [51.40, 84.68], yer: 'Altay Dağları, Sibirya',
    donem: 'MÖ 280.000 – MÖ 30.000',
    nufus: 'Küçük soğuk iklim grupları (10–25 kişi)',
    buluntular: ['Yeni bir insan türü (Denisova insanı) keşfini sağlayan küçük parmak kemiği', 'Annesi Neandertal, babası Denisova olan kızın kemik parçası', '50.000 yıllık cilalı yeşil klorit taş bilezik', 'Kemikten yapılmış dünyanın en eski dikiş iğnelerinden biri'],
    ozet: 'Homo sapiens, Neandertaller ve Denisovalıların farklı dönemlerde (ve bazen aynı çağda) barındığı, insan evriminin en şaşırtıcı DNA keşiflerine sahne olan mağaradır.',
    ilginc: 'Tek bir serçe parmağı kemiğinden çıkarılan antik DNA, daha önce hiç bilinmeyen bir insan kuzenimizin varlığını ortaya çıkardı.',
    w: 'Denisova Cave'
  },
  {
    id: 'zhoukoudian', ad: 'Zhoukoudian (Pekin Adamı) Mağarası', ll: [39.69, 115.92], yer: 'Pekin yakını, Çin',
    donem: 'MÖ 750.000 – MÖ 200.000',
    nufus: '20–30 kişilik Homo erectus grupları',
    buluntular: ['40\'tan fazla Homo erectus bireyine ait kafatası ve diş fosilleri', 'Kalın kül tabakaları ve yanmış hayvan kemikleri (kontrollü ateş izi)', '100.000\'e yakın yontma kuvars ve taş alet', 'Dev geyik ve kılıç dişli kaplan fosilleri'],
    ozet: 'Erken insanların soğuk kışlarda ateş yakıp et pişirerek ve yırtıcıları uzak tutarak hayatta kaldığını gösteren en ünlü Paleolitik mağara sistemidir.',
    ilginc: '1920\'lerde bulunan orijinal "Pekin Adamı" fosilleri II. Dünya Savaşı sırasında gemiyle kaçırılırken gizemli biçimde kayboldu; bugün yalnızca alçı kopyaları mevcuttur.',
    w: 'Zhoukoudian'
  },
  {
    id: 'bhimbetka', ad: 'Bhimbetka Kaya Sığınakları', ll: [22.94, 77.61], yer: 'Madhya Pradeş, Hindistan',
    donem: 'MÖ 100.000 – MÖ 3000',
    nufus: '750\'den fazla kaya sığınağında mevsimlik gruplar (yüzlerce kişi)',
    buluntular: ['500\'ü aşkın sığınakta kırmızı, beyaz ve yeşil kaya resimleri', 'Grup hâlinde dans, bizon avı, fil ve kaplan tasvirleri', 'Taş el baltaları, mikrolit ok uçları ve öğütme taşları', 'Mezar kalıntıları ve ocak izleri'],
    ozet: 'Hindistan alt kıtasında insan yaşamının en erken izlerini ve binlerce yıl süren kesintisiz kaya sanatı geleneğini barındıran dev ormanlık kaya oluşumudur.',
    ilginc: 'Bazı sığınaklarda aynı kaya duvarının üzerine farklı binyıllarda 20 kata kadar üst üste resim çizildiği görülmüştür.',
    w: 'Bhimbetka rock shelters'
  },
  {
    id: 'tassili', ad: 'Tassili n\'Ajjer (Yeşil Sahra)', ll: [25.50, 9.00], yer: 'Güneydoğu Cezayir',
    donem: 'MÖ 10.000 – MÖ 3000 (Afrika Nemli Dönemi)',
    nufus: 'Göl ve akarsu kıyılarında yaşayan yüzlerce çoban ve avcı topluluğu',
    buluntular: ['15.000\'den fazla kaya resmi ve oyması', 'Zürafa, fil, timsah, su aygırı ve yüzen insan çizimleri', 'Sığır sürüleri güden çoban sahneleri', 'Taş öğütme el değirmenleri ve çanak çömlek parçaları'],
    ozet: 'Bugün dünyanın en kurak çöllerinden biri olan Sahra\'nın, MÖ 8000–4000 arasında nehirler, göller ve savanlarla kaplı yemyeşil bir cennet olduğunun canlı kanıtıdır.',
    ilginc: 'Kurak çölün ortasındaki kayalarda su aygırı ve kano kullanan insan resimleri görmek, iklim değişikliğinin geçmişte nasıl dev dönüşümler yarattığını gösterir.',
    w: 'Tassili n\'Ajjer'
  },
  {
    id: 'manos', ad: 'Cueva de las Manos (Eller Mağarası)', ll: [-47.15, -70.65], yer: 'Patagonya, Arjantin',
    donem: 'MÖ 9000 – MÖ 1000',
    nufus: 'Kanyon boyunca göçen 30–60 kişilik guanako avcıları',
    buluntular: ['800\'den fazla sol el şablonu (mineral boya püskürtülerek yapılmış)', 'Guanako (yaban laması) sürüleri ve avlanma sahneleri', 'Bola (taş fırlatma ipi) av aletleri ve obsidyen ok uçları', 'Kemik boya boruları'],
    ozet: 'Patagonya\'daki Pinturas Nehri kanyonunda yer alan mağara, binlerce yıl boyunca oradan geçen insanların "biz buradaydık" dercesine bıraktığı yüzlerce el iziyle kaplıdır.',
    ilginc: 'El izlerinin neredeyse tamamı sol eldir; çünkü sanatçılar sağ elleriyle kemik borudan boyayı sol ellerinin etrafına üflüyordu.',
    w: 'Cueva de las Manos'
  },
  {
    id: 'eriha', ad: 'Eriha (Jericho) İlk Yerleşimi', ll: [31.87, 35.44], yer: 'Ürdün Vadisi, Filistin',
    donem: 'MÖ 9000 – MÖ 7000 (Erken Neolitik)',
    nufus: 'Yaklaşık 1.000 – 2.000 kişi',
    buluntular: ['8,5 metre yüksekliğinde taş kule ve 3,6 metrelik savunma duvarı', 'Yuvarlak kerpiç evler ve su kaynağı etrafında tahıl siloları', 'Üzeri alçıyla sıvanıp deniz kabuğundan göz yapılmış ata kafatasları', 'Obsidyen ve turkuaz ticaret nesneleri'],
    ozet: 'Dünyanın kesintisiz yerleşime sahne olan en eski kentlerinden biridir. Deniz seviyesinin 250 metre altındaki tatlı su kaynağı sayesinde çok erken tarım başladı.',
    ilginc: 'MÖ 8000 civarında yapılan 22 basamaklı taş kule, muhtemelen insanlığın inşa ettiği ilk anıtsal taş gözetleme/tören yapısıdır.',
    w: 'Tell es-Sultan'
  },
  {
    id: 'skarabrae', ad: 'Skara Brae Neolitik Köyü', ll: [59.05, -3.34], yer: 'Orkney Adaları, İskoçya',
    donem: 'MÖ 3180 – MÖ 2500 (Geç Neolitik)',
    nufus: 'Yaklaşık 50 – 100 kişilik yerleşik çiftçi-balıkçı topluluğu',
    buluntular: ['Ağaç olmadığı için tamamen taştan yapılmış yatak, dolap ve raflar', 'Evleri birbirine bağlayan üstü kapalı taş geçitler ve kanalizasyon kanalları', 'Oyma taş toplar, kemik zarlar ve oluklu seramikler', 'Sığır, koyun, balina kemiği ve arpa kalıntıları'],
    ozet: 'Kuzey Avrupa\'nın en iyi korunmuş Taş Devri köyüdür. 1850\'deki dev bir fırtına kum tepesini uçurunca 5.000 yıl boyunca kum altında saklanan taş mobilyalı evler ortaya çıktı.',
    ilginc: 'Evlerin hepsinde aynı düzende merkezi ocak, iki taş yatak ve karşı duvarda değerli eşyaların konduğu taş "büfe" bulunur.',
    w: 'Skara Brae'
  },
  {
    id: 'mehrgarh', ad: 'Mehrgarh Neolitik Yerleşimi', ll: [29.38, 67.62], yer: 'Belucistan, Pakistan',
    donem: 'MÖ 7000 – MÖ 2600',
    nufus: 'Gelişme döneminde birkaç bin kişi',
    buluntular: ['İnsanlık tarihinin bilinen en eski diş tedavisi (çakmaktaşı matkapla delinmiş azı dişleri!)', 'Arpa, buğday ve pamuk tarımının en erken izleri', 'Lapis lazuli ve deniz kabuğu boncuk mezarları', 'Bölme duvarlı kerpiç tahıl ambarları'],
    ozet: 'Güney Asya\'da tarım ve hayvancılığın başladığı, ileride dev İndus Vadisi Uygarlığı\'nın temellerini atan öncü Neolitik yerleşimdir.',
    ilginc: 'Arkeologlar MÖ 7000\'den kalma insan çenelerinde çürük dişleri temizlemek için mikro çakmaktaşı matkaplarla açılmış kusursuz delikler keşfetti.',
    w: 'Mehrgarh'
  }
];
