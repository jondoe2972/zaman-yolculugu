// 🌍 Doğa Atlası: Görünmez Jeolojik ve Ekolojik Bölgeler
// Haritada sınır çizmeden, Doğa Atlası'nda karaya tıklandığında o bölgenin jeolojik oluşumunu, canlılık düzeyini ve ekosistemini açar.
// Önce özel alanlar (çöller, dağ blokları, yağmur ormanları, buzullar), sonra ana kıta blokları kontrol edilir.
'use strict';
window.ATLAS_DOGA_BOLGELER = {
  ozel: [
    {
      id: 'db-sahra', ad: 'Sahra Çölü', ik: '🏜️', tur: 'Özel Çöl Bölgesi', bb: [15, 32, -17, 35],
      canlilik: '🟠 Düşük (Ekstrem Çöl)',
      jeoloji: 'Milyarlarca yıllık Afrika Kalkanı üzerinde yer alır. Yaklaşık 7 milyon yıl önce Tetis Denizi\'nin çekilmesiyle kuraklaşmaya başladı; Dünya\'nın eksen eğikliğine bağlı olarak her ~20.000 yılda bir "Yeşil Sahra" ile kum çölü arasında gidip gelir (son yeşil dönem 5.000 yıl önce bitti).',
      ekosistem: 'Gündüz 50 °C, gece 0 °C\'ye yaklaşan sert koşullara uyum sağlamış çöl tilkisi (fennek), tek hörgüçlü deve, engerek, akrep, çöl böcekleri ve vahalar çevresinde hurma palmiyeleri yaşar.',
      iklim: 'Dünya\'nın en büyük sıcak çölüdür (9,2 milyon km²); bazı bölgelerine yıllarca tek damla yağmur düşmez.',
      ilginc: 'Sahra\'dan rüzgârla kalkan milyonlarca ton fosforlu kum tozu Atlas Okyanusu\'nu aşarak Amazon Yağmur Ormanları\'nı gübreler!',
      w: 'Sahara'
    },
    {
      id: 'db-arabistan', ad: 'Arabistan Çölü ve Platosu', ik: '🏜️', tur: 'Özel Çöl Bölgesi', bb: [13, 31, 35, 60],
      canlilik: '🟠 Düşük (Kurak Çöl)',
      jeoloji: 'Yaklaşık 25–30 milyon yıl önce Kızıldeniz yarığının açılmasıyla Afrika Plakası\'ndan kopup kuzeydoğuya kaydı ve İran/Anadolu\'ya çarparak Zagros ve Toros dağlarını yükseltti.',
      ekosistem: 'Arabistan oriksi (beyaz antilop), çöl kedisi, dikenli kuyruklu keler, göçmen şahinler ve yeraltı su vahalarında hurma bahçeleri bulunur.',
      iklim: 'Güneydeki Rub\'ül-Hali ("Boş Mahalle") dünyanın en büyük kesintisiz kum denizi olup aşırı sıcak ve kuraktır.',
      ilginc: 'Antik çağda bu toprakların altında biriken deniz canlısı kalıntıları, bugün dünyanın en büyük petrol rezervlerini oluşturmuştur.',
      w: 'Arabian Desert'
    },
    {
      id: 'db-gobi', ad: 'Gobi ve Taklamakan Çölleri', ik: '🏜️', tur: 'Soğuk Karasal Çöl', bb: [37, 46, 76, 112],
      canlilik: '🟠 Düşük (Sert Karasal)',
      jeoloji: 'Himalayalar\'ın yükselmesiyle Hint Okyanusu\'ndan gelen yağmur bulutları engellendi ("yağmur gölgesi") ve İç Asya\'da bu dev soğuk çöller oluştu. Dinozor çağında göller ve ormanlarla kaplıydı.',
      ekosistem: 'Çift hörgüçlü yabani Baktriya devesi, son derece nadir Gobi ayısı, kar leoparı (dağ eteklerinde), ceylanlar ve saksaul çalıları yaşar.',
      iklim: 'Yazın +45 °C, kışın ise -40 °C\'ye kadar düşen çok sert karasal soğuk çöl iklimi hâkimdir.',
      ilginc: 'Gobi Çölü dünyanın en zengin dinozor fosil yataklarından biridir; ilk dinozor yumurtaları 1923\'te burada keşfedildi.',
      w: 'Gobi Desert'
    },
    {
      id: 'db-atakama', ad: 'Atakama Çölü', ik: '🏜️', tur: 'Ekstrem Çöl', bb: [-28, -17, -72, -67],
      canlilik: '⚪ Çok Düşük (Neredeyse Yok)',
      jeoloji: 'Batıda soğuk Humboldt Akıntısı, doğuda ise 6.000 metrelik And Dağları nemi tamamen kestiği için en az 3 milyon yıldır Dünya\'nın kutuplar dışındaki en kurak yeridir.',
      ekosistem: 'Merkezinde neredeyse hiç bitki ve hayvan yaşamaz; yalnızca kayaların içinde aşırı kuraklığa dayanıklı mikroorganizmalar ve kıyı sisini toplayan nadir kaktüsler vardır.',
      iklim: 'Bazı meteoroloji istasyonlarında 400 yıl boyunca ölçülebilir yağmur kaydedilmemiştir; gökyüzü yılın 300 günü bulutsuzdur.',
      ilginc: 'Toprağı Mars yüzeyine o kadar benzer ki NASA uzay araçlarını Mars\'a göndermeden önce Atakama Çölü\'nde test eder.',
      w: 'Atacama Desert'
    },
    {
      id: 'db-outback', ad: 'Avustralya Kızıl Çölü (Outback)', ik: '🏜️', tur: 'Özel Çöl Bölgesi', bb: [-31, -19, 118, 141],
      canlilik: '🟠 Düşük (Kurak İç Çöl)',
      jeoloji: 'Dünya\'nın en eski ve en düz kara kabuklarından biri üzerinde yer alır; milyonlarca yıllık demir oksit (pas) birikimi toprağa ve Uluru kayasına karakteristik kızıl rengini verir.',
      ekosistem: 'Kızıl kanguru, dingo, dikenli şeytan kertenkelesi, devekuşu (emu) ve yeraltı suyuyla yaşayan kuraklığa dayanıklı okaliptüs çalıları yaşar.',
      iklim: 'Kıtanın iç kesimi yıl boyu sıcak ve çok kuraktır; nadiren yağan yağmur sonrası çöl günler içinde çiçekle kaplanır.',
      ilginc: 'Avustralya kıtası 45 milyon yıl boyunca diğer kıtalardan tamamen kopuk kaldığı için keseli hayvanlar burada benzersiz biçimde evrimleşti.',
      w: 'Outback'
    },
    {
      id: 'db-kalahari', ad: 'Kalahari ve Namib Çölleri', ik: '🏜️', tur: 'Özel Çöl Bölgesi', bb: [-29, -17, 12, 25],
      canlilik: '🟠 Düşük – Orta (Mevsimsel)',
      jeoloji: 'Namib Çölü 55 milyon yılı aşan yaşıyla dünyanın en eski çölü kabul edilir; Kalahari ise mevsimsel yağmurlarla canlanan dev bir kum havzasıdır.',
      ekosistem: 'Mirket kolonileri, gemsbok antilobu, çöl aslanları, sis toplayan böcekler ve 2.000 yıl yaşayabilen Welwitschia bitkisi yaşar.',
      iklim: 'Kıyıda soğuk Benguela Akıntısı yüzünden yoğun deniz sisi oluşur ama yağmur neredeyse hiç yağmaz.',
      ilginc: 'Namib Çölü\'ndeki dev kızıl kum tepeleri Atlas Okyanusu\'nun soğuk sularıyla doğrudan buluşur.',
      w: 'Namib Desert'
    },
    {
      id: 'db-himalaya', ad: 'Himalayalar ve Tibet Platosu', ik: '🏔️', tur: 'Dev Dağ Bloğu', bb: [27, 37, 73, 102],
      canlilik: '🟠 Düşük – Orta (Yüksek İrtifa)',
      jeoloji: 'Yaklaşık 50 milyon yıl önce Hint Plakası\'nın kuzeye doğru hızla ilerleyip Avrasya Plakası\'na çarpmasıyla yükseldi; çarpışma hâlâ sürdüğü için Everest her yıl ~4 mm yükselmeye devam ediyor!',
      ekosistem: 'Kar leoparı, Tibet yakı, kızıl panda, Himalaya akbabası ve 8.000 metre yüksekten uçan Hint kazları bu zorlu coğrafyada yaşar.',
      iklim: 'Kutuplar dışındaki en büyük buzul deposudur ("Üçüncü Kutup"); Ganj, İndus, Yangtze ve Mekong gibi dev nehirler buradan doğar.',
      ilginc: 'Everest\'in 8.848 metrelik zirvesindeki kayalarda deniz fosilleri bulunur — çünkü orası 50 milyon yıl önce eski Tetis Okyanusu\'nun tabanıydı!',
      w: 'Himalayas'
    },
    {
      id: 'db-and', ad: 'And Dağları Sıradağ Bloğu', ik: '🏔️', tur: 'Dev Dağ Bloğu', bb: [-55, 10, -79, -66],
      canlilik: '🟡 Orta (Yüksek Dağ & Bulut Ormanı)',
      jeoloji: 'Okyanus tabanındaki Nazca Plakası\'nın Güney Amerika Plakası\'nın altına dalmasıyla ~50 milyon yılda oluştu; 7.000 km uzunluğuyla karadaki en uzun sıradağdır.',
      ekosistem: 'And kondoru (3 m kanat açıklığı), lama, alpaka, vikunya, gözlüklü ayı ve patates ile kinoanın doğal yabani ataları burada yaşar.',
      iklim: 'Ekvator\'dan Patagonya buzullarına kadar uzandığı için aynı dağ yamacında tropikal ormandan kalıcı kara kadar her iklim görülür.',
      ilginc: 'Dünyanın en yüksek aktif yanardağlarının çoğu ve dünyanın en yüksek ticari gölü (Titicaca, 3.812 m) And Dağları\'ndadır.',
      w: 'Andes'
    },
    {
      id: 'db-alp', ad: 'Alp Dağları Bloğu', ik: '🏔️', tur: 'Dağ Bloğu', bb: [44, 48, 5, 16],
      canlilik: '🟡 Orta (Alpin Kuşak)',
      jeoloji: 'Yaklaşık 35–65 milyon yıl önce Afrika Plakası\'nın kuzeye itmesiyle eski Tetis Okyanusu tabanının kıvrılıp yükselmesiyle (Alp Orojenezi) oluştu.',
      ekosistem: 'Alp dağ keçisi (ibex), dağ sıçanı (marmot), sakallı akbaba, kaya kartalı ve kar altından çıkan edelweiss çiçeği yaşar.',
      iklim: 'Avrupa\'nın su kulesidir; Ren, Rhone, Po ve Tuna\'nın kolları Alp buzullarından beslenir.',
      ilginc: 'Alpler\'de 1991\'de eriyen bir buzulun içinden çıkan 5.300 yıllık "Buz Adam Ötzi", Bakır Çağı insan yaşamına ışık tuttu.',
      w: 'Alps'
    },
    {
      id: 'db-rocky', ad: 'Kayalık Dağlar (Rocky Mountains)', ik: '🏔️', tur: 'Dağ Bloğu', bb: [34, 58, -122, -104],
      canlilik: '🟡 Orta (Dağ & İğne Yapraklı Orman)',
      jeoloji: '80 ila 55 milyon yıl önce Pasifik tabanındaki plakaların Kuzey Amerika\'nın altına sığ açıyla dalmasıyla (Laramide Orojenezi) 4.800 km boyunca yükseldi.',
      ekosistem: 'Boz ayı (grizzly), puma, bozkurt, Kanada geyiği (elk), büyük boynuzlu dağ koyunu ve dev çam ormanları barındırır.',
      iklim: 'Kuzey Amerika\'nın su bölümü çizgisidir: batıya akan sular Pasifik\'e, doğuya akanlar Atlas ve Arktik\'e dökülür.',
      ilginc: 'Yellowstone Süpervolkanı ve dünyanın en ünlü gayzerleri bu dağ kuşağının kalbinde yer alır.',
      w: 'Rocky Mountains'
    },
    {
      id: 'db-anadolu', ad: 'Anadolu ve Kafkasya Dağlık Kuşağı', ik: '🏔️', tur: 'Tektonik Dağ & Plato Bloğu', bb: [36, 44, 26, 48],
      canlilik: '🟢 Yüksek (3 İklim Kuşağı Kavşağı)',
      jeoloji: 'Arap ve Afrika plakalarının kuzeye itmesiyle Avrasya\'ya sıkışan genç, hareketli bir Alp-Himalaya kuşağıdır. Kuzey Anadolu Fayı bu sıkışmanın batıya kaçış hattıdır.',
      ekosistem: 'Avrupa, Asya ve Akdeniz florasının buluşma noktasıdır: 3.000\'den fazla endemik bitki, kaya kartalı, boz ayı, vaşak, yaban keçisi ve boğazlardan geçen milyonlarca göçmen kuş!',
      iklim: 'Kıyılarda ılıman Akdeniz/Karadeniz, iç platolarda sert karasal, doğuda yüksek dağ iklimi bir arada görülür.',
      ilginc: 'Tek başına Anadolu\'daki bitki türü sayısı (~11.000+) tüm Avrupa kıtasının toplamına neredeyse eşittir!',
      w: 'Anatolia'
    },
    {
      id: 'db-amazon', ad: 'Amazon Yağmur Ormanı Havzası', ik: '🌴', tur: 'Biyoçeşitlilik Merkezi', bb: [-12, 5, -75, -48],
      canlilik: '🟢 Çok Yüksek (Dünya\'nın En Zengin Canlılığı)',
      jeoloji: 'And Dağları yükselmeden önce (15 milyon yıl önce) Amazon aslında doğudan batıya, Pasifik\'e akıyordu! Andlar yükselince dev bir iç göl oluştu ve nehir yön değiştirip Atlas Okyanusu\'na döndü.',
      ekosistem: 'Dünyadaki bilinen tüm türlerin yaklaşık %10\'u buradadır: jaguar, pembe nehir yunusu, harpiya kartalı, anakonda, zehirli ok kurbağaları ve 390 milyar ağaç!',
      iklim: 'Yıl boyu sıcak, nemli ve bol yağışlıdır; ağaçların terlemesi gökyüzünde "uçan nehirler" yaratarak kendi yağmurunu üretir.',
      ilginc: 'Amazon\'da hâlâ bilim insanlarının her 2 günde bir yeni bir bitki ya da hayvan türü keşfettiği tahmin edilir.',
      w: 'Amazon rainforest'
    },
    {
      id: 'db-kongo', ad: 'Kongo Havzası ve Doğu Afrika Rifti', ik: '🌴', tur: 'Yağmur Ormanı & Tektonik Yarık', bb: [-10, 5, 11, 40],
      canlilik: '🟢 Çok Yüksek (Orman & Savan)',
      jeoloji: 'Batıda dünyanın ikinci büyük yağmur ormanı Kongo Havzası, doğuda ise Afrika kıtasını yavaşça ikiye ayıran dev Doğu Afrika Rift Vadisi (20–25 milyon yaşında) yer alır.',
      ekosistem: 'Dağ gorili, şempanze, bonobo, orman fili, okapi; doğu savanlarında ise aslan, zürafa, fil ve Serengeti\'nin milyonlarca gnusu yaşar.',
      iklim: 'Ekvator boyunca bol yağışlı orman iklimi, doğu platolarında ise mevsimsel yağışlı savan iklimi hâkimdir.',
      ilginc: 'Doğu Afrika Rift Vadisi milyonlarca yıl içinde tamamen ayrılıp içine deniz dolacak ve yeni bir okyanus doğacaktır!',
      w: 'East African Rift'
    },
    {
      id: 'db-sibirya', ad: 'Sibirya Taygası ve Arktik Tundra', ik: '🌲', tur: 'Boreal Orman & Permafrost', bb: [56, 77, 60, 178],
      canlilik: '🟠 Düşük – Orta (Soğuk İklim)',
      jeoloji: 'Dünya\'nın en eski kıta çekirdeklerinden Sibirya Kratonu üzerinde yer alır. 252 milyon yıl önceki dev "Sibirya Tuzakları" volkanizması gezegenin en büyük kitlesel yok oluşunu tetiklemişti.',
      ekosistem: 'Dünya\'nın en geniş çam-ladin ormanı (tayga): Sibirya kaplanı (güneyde), boz ayı, ren geyiği, samur, kurt ve Baykal Gölü\'nde dünyanın tek tatlı su foku (nerpa) yaşar.',
      iklim: 'Kışın -50 °C\'nin altına düşer; toprağın altı yıl boyu donmuş (permafrost) hâldedir ve içinde donmuş yünlü mamutlar saklanır.',
      ilginc: 'Sibirya\'daki Baykal Gölü 1.642 metre derinliğiyle dünyadaki tüm sıvı tatlı suyun yaklaşık %20\'sini tek başına barındırır!',
      w: 'Siberia'
    },
    {
      id: 'db-gronland', ad: 'Grönland Buzul Örtüsü', ik: '🧊', tur: 'Kutup Buzul Bloğu', bb: [60, 84, -74, -12],
      canlilik: '⚪ Çok Düşük (Kıyı Şeridiyle Sınırlı)',
      jeoloji: 'Dünya\'nın en eski kayalarından bazılarına (3,8 milyar yıllık Isua kayaları!) ev sahipliği yapar. Son 2–3 milyon yıldır 3 km kalınlığında dev bir buz tabakasıyla kaplıdır.',
      ekosistem: 'İç kesimdeki buz çöllerinde neredeyse hiç canlı yoktur; yalnızca buzsuz kıyı şeridinde kutup ayısı, misk öküzü, kutup tilkisi, ren geyiği ve denizde narval balinası yaşar.',
      iklim: 'Kutup iklimi; buz örtüsü o kadar ağırdır ki adanın ortasındaki anakarayı deniz seviyesinin altına bastırmıştır.',
      ilginc: 'Grönland\'daki tüm buzlar erirse dünya deniz seviyesi yaklaşık 7 metre yükselir.',
      w: 'Greenland ice sheet'
    }
  ],
  kitalar: [
    {
      id: 'dk-antarktika', ad: 'Antarktika Kıtası', ik: '🧊', tur: 'Kıta Kara Bloğu',
      canlilik: '⚪ Neredeyse Yok (Yalnızca Kıyılarda)',
      jeoloji: 'Eski süper kıta Gondvana\'nın kalbiydi; ~34 milyon yıl önce Güney Amerika ve Avustralya\'dan tamamen kopunca etrafında soğuk akıntı (ACC) oluştu ve kıta 4 km kalınlığında buzla kaplandı.',
      ekosistem: 'İç kesimlerinde tek bir ağaç, kara memelisi ya da sürüngen yoktur! Canlılık yalnızca kıyılardaki imparator penguenler, foklar, balinalar ve buz altındaki mikroskobik canlılarla sınırlıdır.',
      iklim: 'Dünya\'nın en soğuk (-89,2 °C rekor!), en rüzgârlı ve en kurak kıtasıdır (teknik olarak dev bir soğuk çöldür).',
      ilginc: '100 milyon yıl önce Dinozor Çağı\'nda Antarktika buzsuz, ılıman ve yemyeşil ormanlarla kaplıydı!',
      w: 'Antarctica'
    },
    {
      id: 'dk-avrupa', ad: 'Avrupa Kara Bloğu', ik: '🌲', tur: 'Kıta Kara Bloğu',
      canlilik: '🟢 Yüksek (Ilıman Orman & Akdeniz)',
      jeoloji: 'Kuzeyde milyarlarca yıllık Baltık Kalkanı, güneyde ise Afrika\'nın çarpışmasıyla yükselmiş genç Alp-Karpat-Pirene dağ kuşaklarından oluşur; son Buzul Çağı\'nda kuzeyi tamamen buzla kaplıydı.',
      ekosistem: 'Geniş yapraklı meşe-kayın ormanları, boz ayı, kurt, vaşak, kızıl geyik, Avrupa bizonu ve güneyde zengin Akdeniz bitki örtüsü barındırır.',
      iklim: 'Sıcak Gulf Stream akıntısı sayesinde aynı enlemdeki Kanada\'ya göre çok daha ılıman ve yaşanabilirdir.',
      ilginc: 'İskandinavya toprakları, 10.000 yıl önce eriyen dev buzulların ağırlığından kurtulduğu için hâlâ her yıl ~1 cm yukarı doğru yükseliyor!',
      w: 'Geography of Europe'
    },
    {
      id: 'dk-asya', ad: 'Asya (Avrasya) Kara Bloğu', ik: '🌏', tur: 'Kıta Kara Bloğu',
      canlilik: '🟢 Çok Yüksek (Tüm Biyomlar)',
      jeoloji: 'Dünya\'nın en büyük kıtasıdır (%30 kara alanı). Birçok eski tektonik bloğun (Sibirya, Çin, Hindistan, Arabistan) yüz milyonlarca yıl boyunca çarpışıp birleşmesiyle oluştu.',
      ekosistem: 'Arktik tundradan ekvatoral Endonezya yağmur ormanlarına kadar Dünya\'daki tüm biyomları içerir: kaplan, dev panda, Asya fili, orangutan, komodo ejderi ve bozkır yılkı atları.',
      iklim: 'Kuzeyde aşırı soğuk, ortada kurak bozkır, güney ve doğuda ise muson yağmurlarının beslediği bereketli tropikal/ılıman iklimler görülür.',
      ilginc: 'Dünya\'nın hem en yüksek noktası (Everest, +8.848 m) hem de karadaki en alçak noktası (Ölü Deniz, -430 m) Asya\'dadır.',
      w: 'Geography of Asia'
    },
    {
      id: 'dk-afrika', ad: 'Afrika Kalkanı (Gondvana Kalbi)', ik: '🌍', tur: 'Kıta Kara Bloğu',
      canlilik: '🟢 Çok Yüksek (Büyük Memeli Merkezi)',
      jeoloji: '200 milyon yıl önce dev süper kıta Pangea bölündüğünde merkezde kalan en eski, en kararlı kıta çekirdeğidir (Gondvana\'nın kalbi).',
      ekosistem: 'Dünya\'da büyük kara memelilerinin (fil, aslan, zürafa, gergedan, goril, çita, su aygırı) en zengin çeşitliliği burada yaşar; insan türü Homo sapiens de ~300.000 yıl önce burada doğdu.',
      iklim: 'Ekvator kıtayı tam ortadan böler; ortada yağmur ormanları, kuzey ve güneyde simetrik savanlar ve çöller (Sahra & Kalahari) uzanır.',
      ilginc: 'Afrika çok eski bir kıta bloğu olduğu için elmas, altın ve platin bakımından gezegenin en zengin yeraltı kabuğuna sahiptir.',
      w: 'Geography of Africa'
    },
    {
      id: 'dk-kamerika', ad: 'Kuzey Amerika (Laurentia) Bloğu', ik: '🌎', tur: 'Kıta Kara Bloğu',
      canlilik: '🟢 Yüksek (Orman, Çayır & Dağ)',
      jeoloji: 'Merkezinde 4 milyar yıla yaklaşan Kanada Kalkanı (Laurentia) bulunur; ~180 milyon yıl önce Atlas Okyanusu açılırken Avrupa ve Afrika\'dan ayrılıp batıya kaydı.',
      ekosistem: 'Bizon sürüleri, boz ayı, kel kartal, puma, kunduz, dev sekoya ormanları ve binlerce göçmen kuşun geçtiği Büyük Göller ile Mississippi havzası yer alır.',
      iklim: 'Kuzeyde Arktik buzullardan güneyde tropikal Meksika ormanlarına ve geniş orta çayırlarına (Great Plains) uzanır.',
      ilginc: 'Yaklaşık 3 milyon yıl önce Panama Kıstağı denizden yükselince Kuzey ve Güney Amerika birleşti ve iki kıta arasında "Büyük Amerika Biyotik Değişimi" yaşandı.',
      w: 'Geography of North America'
    },
    {
      id: 'dk-gamerika', ad: 'Güney Amerika Kara Bloğu', ik: '🌎', tur: 'Kıta Kara Bloğu',
      canlilik: '🟢 Çok Yüksek (Eşsiz Endemik Türler)',
      jeoloji: 'Yaklaşık 135 milyon yıl önce Afrika\'dan ayrılıp batıya kaydı (Brezilya ve Batı Afrika kıyıları hâlâ yapboz gibi uyar!) ve batıda And Dağları\'nı yükseltti.',
      ekosistem: 'Milyonlarca yıl izole bir ada kıta olarak kaldığı için tembel hayvan, armadillo, kapibara, tukan, jaguar, lama ve Amazon\'un dev biyoçeşitliliği burada evrimleşti.',
      iklim: 'Dünya\'nın en yağışlı ormanı (Amazon) ile en kurak çölü (Atakama) aynı kıtada yan yana bulunur.',
      ilginc: 'Güney Amerika\'daki bitki ve kuş türlerinin çeşitliliği diğer tüm kıtalardan fazladır.',
      w: 'Geography of South America'
    },
    {
      id: 'dk-avustralya', ad: 'Avustralya ve Okyanusya Kıtası', ik: '🦘', tur: 'Kıta Kara Bloğu',
      canlilik: '🟡 Orta – Yüksek (Eşsiz Keseliler)',
      jeoloji: 'Yaklaşık 45 milyon yıl önce Antarktika\'dan kopup kuzeye doğru kaydı; bugün hâlâ yılda ~7 cm kuzeye hareket ederek dünyanın en hızlı kayan kıta plakasıdır!',
      ekosistem: 'Diğer kıtalardan izole kaldığı için kanguru, koala, vombat, ornitorenk (yumurtlayan memeli!) ve okaliptüs ormanları yalnızca burada gelişti.',
      iklim: 'İç kesimler çok kurak çöl, kuzey tropikal muson, doğu ve güney kıyılar ise ılıman orman iklimidir.',
      ilginc: 'Kıta o kadar hızlı kayıyor ki Avustralya 2017\'de GPS harita koordinatlarını 1,8 metre güncellemek zorunda kaldı!',
      w: 'Geography of Australia'
    }
  ]
};

window.dogaBolgeBul = function (la, lo) {
  const DB = window.ATLAS_DOGA_BOLGELER;
  if (!DB) return null;
  lo = ((((lo + 180) % 360) + 360) % 360) - 180;
  // 1) Önce özel doğa/jeoloji bölgeleri (çöller, dev dağ blokları, yağmur ormanları, buzullar)
  for (const b of DB.ozel || []) {
    const [a0, a1, o0, o1] = b.bb;
    if (la >= a0 && la <= a1 && lo >= o0 && lo <= o1) return b;
  }
  // 2) Kıta kara blokları (her kara noktası mutlaka bir kıtaya düşer!)
  const byId = id => (DB.kitalar || []).find(x => x.id === id);
  if (la <= -60) return byId('dk-antarktika');
  if (lo < -25) return la >= 13 ? byId('dk-kamerika') : byId('dk-gamerika');
  if (la <= -8 && lo >= 110) return byId('dk-avustralya');
  if (la >= 35 && lo >= -25 && lo <= 50 && !(la < 42 && lo > 26)) return byId('dk-avrupa');
  if (la <= 37 && lo >= -25 && lo <= 52 && !(la > 12 && lo > 35)) return byId('dk-afrika');
  return byId('dk-asya') || (DB.kitalar || [])[0] || null;
};
