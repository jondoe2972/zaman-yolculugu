// 🌍🌊 Görünmez Kıta Alt-Bölgeleri (24 Bölge) & Okyanus Alt-Bölgeleri (6 Bölge)
// Haritada hiçbir sınır çizmeden, nereye tıklarsan o bölgenin kendine özgü doğa, jeoloji, iklim ve ekosistem bilgilerini açar!
'use strict';
(() => {
  const DB = window.ATLAS_DOGA_BOLGELER;
  if (DB) {
    DB.altbolgeler = [
      // --- ASYA ALT-BÖLGELERİ ---
      {
        id: 'ab-guneydogu-asya', ad: 'Güneydoğu Asya (Muson & Takımadalar)', ik: '🌴', tur: 'Asya Alt-Bölgesi', bb: [-11, 22, 92, 141],
        canlilik: '🟢 Çok Yüksek (Tropikal Yağmur Ormanı & Mercan Üçgeni)',
        jeoloji: 'Avrasya, Hint-Avustralya ve Pasifik plakalarının çarpışma kavşağıdır. Endonezya ve Filipinler takımadaları Ateş Çemberi\'nin en aktif volkanik yayını oluşturur; Buzul Çağı\'nda denizler alçakken burası "Sundaland" adlı tek kara parçasıydı.',
        ekosistem: 'Orangutan, Komodo ejderi, Sumatra kaplanı, Asya fili, Mekong dev yayın balığı ve denizlerde dünyanın en zengin mercan resifleri ("Mercan Üçgeni") burada yaşar.',
        iklim: 'Yıl boyu sıcak, nemli tropikal muson iklimi; yıllık yağış miktarı çok yüksektir ve pirinç tarımının kalbidir.',
        ilginc: 'Wallace Çizgisi adı verilen görünmez biyolojik sınır Endonezya\'nın tam ortasından geçer: batısında kaplan ve orangutan, doğusunda ise kanguru akrabası keseliler yaşar!',
        w: 'Southeast Asia'
      },
      {
        id: 'ab-dogu-asya', ad: 'Doğu Asya (Çin, Japonya & Kore)', ik: '🎋', tur: 'Asya Alt-Bölgesi', bb: [22, 54, 102, 148],
        canlilik: '🟢 Yüksek (Bambu Ormanı & Ilıman Muson)',
        jeoloji: 'Doğuda Pasifik Plakası\'nın dalmasıyla Japonya volkanik adaları yükselirken, iç kesimde Yangtze ve Sarı Nehir binlerce yılda verimli lös ovalarını oluşturdu.',
        ekosistem: 'Dev panda, kızıl panda, Japon makağı (kar maymunu), altın kalkık burunlu maymun, Japon turnası ve dev bambu ormanları bu bölgenin simgesidir.',
        iklim: 'Yazları sıcak ve yağışlı Doğu Asya musonu, kışları Sibirya\'dan gelen soğuk hava dalgalarıyla dört mevsim belirgindir.',
        ilginc: 'Çin\'in Yangtze Nehri, tek bir ülke sınırları içinde akan dünyanın en uzun nehridir (6.300 km) ve Asya\'nın en büyük tarım havzasını besler.',
        w: 'East Asia'
      },
      {
        id: 'ab-guney-asya', ad: 'Güney Asya (Hint Alt-Kıtası)', ik: '🐘', tur: 'Asya Alt-Bölgesi', bb: [5, 30, 62, 92],
        canlilik: '🟢 Çok Yüksek (Muson Ormanı & Ganj Deltası)',
        jeoloji: '100 milyon yıl önce Gondvana\'dan kopup kuzeye doğru hızla yüzen Hint Plakası, 50 milyon yıl önce Asya\'ya çarparak Himalayalar\'ı yükseltti ve kendi başına dev bir alt-kıta oluşturdu.',
        ekosistem: 'Bengal kaplanı, Asya fili, tek boynuzlu Hint gergedanı, Hint aslanı (Gir Ormanı), kral kobra, tavus kuşu ve Sundarbans mangrov ormanları burada yaşar.',
        iklim: 'Haziran–Eylül arasındaki Hint Okyanusu Yaz Musonu bölgenin yıllık yağışının %80\'ini indirerek 2 milyar insanı besler.',
        ilginc: 'Batı Gat Dağları Himalayalar\'dan bile yaşlıdır ve dünyanın en zengin 8 biyoçeşitlilik merkezinden biridir!',
        w: 'Indian subcontinent'
      },
      {
        id: 'ab-orta-asya', ad: 'Orta Asya (Bozkır, Tanrı Dağları & İpek Yolu)', ik: '🐎', tur: 'Asya Alt-Bölgesi', bb: [36, 56, 48, 88],
        canlilik: '🟡 Orta (Uçsuz Bucaksız Bozkır & Yüksek Dağ)',
        jeoloji: 'Okyanuslardan en uzak kara içidir ("Avrasya\'nın Kalbi"). Güneyde Tanrı ve Pamir dağları yükselirken, kuzeyde binlerce kilometrelik Kazak bozkırları ve Hazar–Aral çöküntüleri uzanır.',
        ekosistem: 'Sayga antilobu, yılkı atları (Przewalski), kar leoparı, bozkır kartalı, çift hörgüçlü deve ve elma ile lalenin dünyadaki ilk yabani ataları burada doğmuştur!',
        iklim: 'Sert karasal iklim: yazları kavurucu sıcak, kışları dondurucu soğuk; yağış azdır.',
        ilginc: 'Bugün tüm dünyada yediğimiz kültür elmasının (Malus domestica) genetik anavatanı Kazakistan\'daki Tanrı Dağları etekleridir ("Almatı" = Elmaların Babası)!',
        w: 'Central Asia'
      },
      {
        id: 'ab-bati-asya', ad: 'Batı Asya (İran Platosu, Mezopotamya & Levant)', ik: '🏛️', tur: 'Asya Alt-Bölgesi', bb: [24, 38, 34, 62],
        canlilik: '🟡 Orta (Plato, Vadi & Bereketli Hilal)',
        jeoloji: 'Arap Plakası\'nın Avrasya\'ya bindirmesiyle yükselen Zagros ve Elburz dağları, aralarında İran Platosu ile Fırat–Dicle\'nin oluşturduğu Mezopotamya ovasını barındırır.',
        ekosistem: 'İran çitası (son derece nadir), Anadolu/İran leoparı, yabani koyun-keçi ataları, göçmen kuşların ana koridoru ve buğday-arpanın ilk evcilleştirildiği Bereketli Hilal!',
        iklim: 'Kıyılarda Akdeniz iklimi, iç platolarda yarı kurak step ve dağlarda karlı kışlar görülür.',
        ilginc: 'İnsanlık tarihinin ilk tarımı, ilk şehirleri ve ilk yazısı (~MÖ 3200) tam olarak bu bölgedeki Fırat ve Dicle vadilerinde doğdu!',
        w: 'West Asia'
      },

      // --- AVRUPA ALT-BÖLGELERİ ---
      {
        id: 'ab-kuzey-avrupa', ad: 'Kuzey Avrupa & İskandinavya (Fiyortlar)', ik: '🌌', tur: 'Avrupa Alt-Bölgesi', bb: [55, 72, -25, 32],
        canlilik: '🟡 Orta (Boreal Tayga, Tundra & Fiyort)',
        jeoloji: 'Son Buzul Çağı\'nda 3 km kalınlığında buzulların oyduğu derin Norveç fiyortları ve Finlandiya\'nın 188.000 buzul gölü! İzlanda ise iki tektonik plakanın tam ayrılma çatlağı üstünde yanardağlarla doğdu.',
        ekosistem: 'Ren geyiği, sığın (moose), kutup tilkisi, deniz papağanı (puffin), kutup ışıkları (Aurora) altında uzanan çam-huş ormanları.',
        iklim: 'Gulf Stream sıcak akıntısı sayesinde aynı enlemdeki Alaska ve Sibirya\'dan çok daha ılımandır; kuzeyde yazın "Gece Yarısı Güneşi" yaşanır.',
        ilginc: 'Buzulların ağırlığından kurtulan İskandinavya toprağı hâlâ her yıl yaklaşık 1 santimetre yukarı yükselmektedir!',
        w: 'Nordic countries'
      },
      {
        id: 'ab-bati-avrupa', ad: 'Batı Avrupa (Atlantik Kıyısı & Ilıman Orman)', ik: '🌳', tur: 'Avrupa Alt-Bölgesi', bb: [43, 56, -11, 15],
        canlilik: '🟢 Yüksek (Ilıman Geniş Yapraklı Orman)',
        jeoloji: 'Buzul Çağı\'nda Britanya Adası Avrupa\'ya "Doggerland" adlı kara köprüsüyle bağlıydı; 8.000 yıl önce deniz yükselince Manş Denizi oluştu. Ren, Seine ve Loire verimli ovaları besler.',
        ekosistem: 'Kızıl geyik, yaban domuzu, kızıl tilki, porsuk, meşe-kayın ormanları ve Atlas kıyısındaki zengin gelgit ekosistemleri.',
        iklim: 'Batı Rüzgârları ve Gulf Stream etkisiyle yıl boyu bol yağışlı, kışları yumuşak ve yemyeşil okyanusal iklim.',
        ilginc: 'Hollanda topraklarının yaklaşık %26\'sı deniz seviyesinin altındadır ve yüzyıllardır setler ve yel değirmenleriyle denizden kazanılmıştır!',
        w: 'Western Europe'
      },
      {
        id: 'ab-guney-avrupa', ad: 'Güney Avrupa & Akdeniz Havzası', ik: '🫒', tur: 'Avrupa Alt-Bölgesi', bb: [35, 45, -10, 29],
        canlilik: '🟢 Yüksek (Akdeniz Maki & Endemik Zenginlik)',
        jeoloji: 'Afrika Plakası\'nın Avrupa\'ya çarpışmasıyla Pireneler, Apeninler, Balkanlar ve Etna–Vezüv–Santorini gibi aktif Akdeniz yanardağları yükseldi.',
        ekosistem: 'Zeytin, defne, zakkum, mantar meşesi, Akdeniz foku, Caretta caretta kaplumbağaları ve İber vaşağı bu güneşli kuşağın simgesidir.',
        iklim: 'Yazları sıcak ve kurak, kışları ılık ve yağışlı klasik Akdeniz iklimi.',
        ilginc: '5,3 milyon yıl önce Cebelitarık Boğazı kapanınca Akdeniz neredeyse tamamen kurudu; sonra Atlas Okyanusu dev bir şelaleyle dolup Akdeniz\'i 2 yılda yeniden doldurdu (Zanklean Tufanı)!',
        w: 'Southern Europe'
      },
      {
        id: 'ab-dogu-avrupa', ad: 'Doğu Avrupa Büyük Düzlüğü & Karpatlar', ik: '🌾', tur: 'Avrupa Alt-Bölgesi', bb: [45, 62, 15, 55],
        canlilik: '🟢 Yüksek (Kara Toprak Bozkırı & Karma Orman)',
        jeoloji: 'Avrupa\'nın en geniş düzlüğüdür; Tuna, Dinyeper ve Volga nehirleri buradan akar. Ukrayna\'dan Rusya\'ya uzanan "Çernozyom" (kara toprak) dünyanın en verimli tarım toprağıdır.',
        ekosistem: 'Avrupa bizonu (Białowieża kadim ormanı), boz ayı, kurt, vaşak, turnalar ve uçsuz bucaksız buğday-ayçiçeği ovaları.',
        iklim: 'Karasal iklim: sıcak yazlar ve uzun, karlı kışlar.',
        ilginc: 'Polonya–Belarus sınırındaki Białowieża Ormanı, Avrupa\'da Buzul Çağı\'ndan beri kesilmeden kalmış son gerçek ilkel ormandır!',
        w: 'Eastern European Plain'
      },

      // --- AFRİKA ALT-BÖLGELERİ ---
      {
        id: 'ab-kuzey-afrika', ad: 'Kuzey Afrika & Mağrip (Atlas Dağları & Nil)', ik: '🌴', tur: 'Afrika Alt-Bölgesi', bb: [29, 37.5, -13, 35],
        canlilik: '🟡 Orta (Akdeniz Kıyısı & Nil Vahası)',
        jeoloji: 'Batıda 4.167 m\'lik Atlas Dağları Afrika–Avrasya çarpışmasıyla yükselirken, doğuda dünyanın en uzun nehirlerinden Nil çölün ortasında yeşil bir yaşam koridoru yaratır.',
        ekosistem: 'Berberi şebeği (Avrupa dışındaki tek makak akrabası), Atlas sediri ormanları, çöl tilkisi, Nil timsahı ve göçmen leylekler.',
        iklim: 'Kıyı şeridinde ılıman Akdeniz iklimi; birkaç yüz kilometre güneyde hızla Sahra Çölü\'ne geçiş.',
        ilginc: 'Atlas Dağları\'ndaki yüksek doruklarda kışın kar yağar ve Fas\'ta kayak merkezleri bulunur!',
        w: 'North Africa'
      },
      {
        id: 'ab-bati-afrika', ad: 'Batı Afrika (Sahel & Gine Körfezi)', ik: '🌳', tur: 'Afrika Alt-Bölgesi', bb: [4, 16, -18, 15],
        canlilik: '🟢 Çok Yüksek (Tropikal Orman & Savan)',
        jeoloji: 'Eski Batı Afrika Kratonu üzerinde yer alır; Nijer Nehri dev bir yay çizerek çöl sınırından (Timbuktu) geçip Gine Körfezi\'ne dökülür.',
        ekosistem: 'Cüce su aygırı, Batı Afrika şempanzesi, orman fili, baobab ağaçları ve dünyanın kakao üretiminin %70\'ini sağlayan tropikal kuşak!',
        iklim: 'Kuzeyde kurak Sahel geçişi, güneyde ise bol yağışlı sıcak tropikal yağmur ormanları.',
        ilginc: 'Nijer Nehri okyanusa sadece 240 km mesafede doğar ama ters yöne (içeri, çöle doğru!) 4.180 km dolaştıktan sonra Atlas Okyanusu\'na kavuşur!',
        w: 'West Africa'
      },
      {
        id: 'ab-dogu-afrika', ad: 'Doğu Afrika (Serengeti & Büyük Yarık Vadisi)', ik: '🦁', tur: 'Afrika Alt-Bölgesi', bb: [-12, 14, 29, 52],
        canlilik: '🟢 Çok Yüksek (Büyük Savan Göçü & İnsanlığın Beşiği)',
        jeoloji: 'Doğu Afrika Rift Vadisi boyunca kıta yılda birkaç milimetre ayrılıyor; Kilimanjaro (5.895 m), Kenya Dağı ve Etiyopya Yaylaları bu volkanik kırıkta yükseldi.',
        ekosistem: 'Serengeti\'de her yıl 2 milyon gnu ve zebranın Büyük Göçü, aslan, çita, zürafa, Afrika fili, su aygırı ve flamingolarla kaplı soda gölleri!',
        iklim: 'Yüksek platolar sayesinde Ekvator\'da olmasına rağmen serin ve güneşli savan iklimi.',
        ilginc: 'İnsanlık tarihinin en eski fosilleri (Lucy — 3,2 milyon yıl!) ve Homo sapiens\'in doğuşu tam bu Doğu Afrika vadilerindedir.',
        w: 'East Africa'
      },
      {
        id: 'ab-guney-afrika', ad: 'Güney Afrika & Kap Bölgesi', ik: '🦏', tur: 'Afrika Alt-Bölgesi', bb: [-35, -17, 15, 36],
        canlilik: '🟢 Çok Yüksek (Kap Bitki Krallığı & Büyük Beşli)',
        jeoloji: 'Milyarlarca yıllık Kaapvaal Kratonu (dünyanın en zengin altın ve elmas yatakları!) ile Drakensberg sıradağlarını ve Atlas–Hint okyanuslarının buluştuğu Ümit Burnu\'nu barındırır.',
        ekosistem: 'Büyük Beşli (aslan, fil, gergedan, leopar, bufalo), Afrika pengueni (sıcak kıyıda!), büyük beyaz köpekbalıkları ve Fynbos çiçek örtüsü.',
        iklim: 'Güneybatıda Akdeniz iklimi, doğuda subtropikal savan, batıda kurak Karoo bozkırı.',
        ilginc: 'Güney Afrika\'daki küçük "Kap Bitki Krallığı" tek başına 9.000\'den fazla bitki türüne ev sahipliği yapar — bunların %70\'i dünyada başka hiçbir yerde yetişmez!',
        w: 'Southern Africa'
      },
      {
        id: 'ab-madagaskar', ad: 'Madagaskar (Kayıp Evrim Adası)', ik: '🐒', tur: 'Afrika Alt-Bölgesi', bb: [-26, -11, 43, 51],
        canlilik: '🟢 Çok Yüksek (%90 Endemik Canlılar!)',
        jeoloji: '88 milyon yıl önce Hindistan\'dan kopup tamamen izole bir ada olarak kaldı — bilim insanları ona "Sekizinci Kıta" der!',
        ekosistem: 'Halka kuyruklu lemurlar, dev baobab ağaçları, fossa avcısı ve dünyadaki bukalemun türlerinin neredeyse yarısı sadece burada yaşar!',
        iklim: 'Doğuda tropikal yağmur ormanı, batıda kuru dikenli ormanlar ve baobab bulvarları.',
        ilginc: 'Madagaskar\'daki hayvan ve bitkilerin yaklaşık %90\'ı Dünya\'nın başka hiçbir yerinde doğal olarak bulunmaz!',
        w: 'Madagascar'
      },

      // --- KUZEY & ORTA AMERİKA ALT-BÖLGELERİ ---
      {
        id: 'ab-kanada-alaska', ad: 'Kuzey Amerika Arktik, Alaska & Kanada Kalkanı', ik: '🦌', tur: 'Kuzey Amerika Alt-Bölgesi', bb: [50, 75, -168, -52],
        canlilik: '🟡 Orta (Boreal Orman, Tundra & Buzul Gölleri)',
        jeoloji: '4 milyar yıllık Kanada Kalkanı, Buzul Çağı\'nda buz tabakaları tarafından zımparalandı ve buzlar eriyince geride dünyanın en fazla tatlı su gölü kaldı.',
        ekosistem: 'Kutup ayısı, karibu (ren geyiği), boz ayı, kunduz, kel kartal, somon göçleri ve uçsuz bucaksız çam taygası.',
        iklim: 'Uzun, sert, karlı subarktik kışlar ve kısa ama canlı yazlar.',
        ilginc: 'Kanada\'daki göl sayısı, dünyanın geri kalan TÜM ülkelerindeki göllerin toplamından daha fazladır!',
        w: 'Canadian Shield'
      },
      {
        id: 'ab-bati-kamerika', ad: 'Batı Kuzey Amerika (Pasifik, Sekoya & Kanyonlar)', ik: '🌲', tur: 'Kuzey Amerika Alt-Bölgesi', bb: [30, 50, -126, -108],
        canlilik: '🟢 Yüksek (Dev Sekoya, Çöl & Pasifik Kıyısı)',
        jeoloji: 'Pasifik ve Kuzey Amerika plakalarının sürtündüğü San Andreas Fayı, Sierra Nevada dağları ve Colorado Nehri\'nin 6 milyon yılda oyduğu Büyük Kanyon buradadır.',
        ekosistem: 'Dünyanın en uzun ağaçları (115 m dev sekoyalar!), Kaliforniya kondoru, puma, deniz samuru ve Sonora çölünün dev saguaro kaktüsleri.',
        iklim: 'Kıyıda Akdeniz/ılıman okyanus iklimi, iç kesimlerde Mojave ve Ölüm Vadisi gibi ekstrem çöller.',
        ilginc: 'Kaliforniya\'daki Ölüm Vadisi (Death Valley) +56,7 °C ile Dünya\'da kaydedilmiş en yüksek hava sıcaklığı rekorunu elinde tutar!',
        w: 'Western United States'
      },
      {
        id: 'ab-orta-kamerika', ad: 'Orta Kuzey Amerika (Büyük Ovalar & Mississippi)', ik: '🦬', tur: 'Kuzey Amerika Alt-Bölgesi', bb: [29, 50, -108, -88],
        canlilik: '🟡 Orta – Yüksek (Geniş Çayırlar & Nehir Havzası)',
        jeoloji: '80 milyon yıl önce Kretase Çağı\'nda burası Batı İç Denizi adlı dev bir iç denizdi! Kuruyunca geride uçsuz bucaksız düz çayırlar (Great Plains) ve Mississippi havzası kaldı.',
        ekosistem: 'Bir zamanlar 60 milyon Amerikan bizonunun gezdiği çayırlar, çayır köpekleri, çakallar ve milyonlarca göçmen kuşun "Mississippi Uçuş Yolu".',
        iklim: 'Karasal iklim; kutup soğuğu ile Meksika Körfezi\'nin sıcak neminin çarpışmasıyla "Hortum Koridoru" (Tornado Alley) oluşur.',
        ilginc: 'Büyük Ovalar\'ın toprağı o kadar verimlidir ki bugün tek başına dünyanın en büyük tahıl ambarlarından biridir.',
        w: 'Great Plains'
      },
      {
        id: 'ab-dogu-kamerika', ad: 'Doğu Kuzey Amerika (Büyük Göller & Apalaşlar)', ik: '🍁', tur: 'Kuzey Amerika Alt-Bölgesi', bb: [25, 50, -88, -60],
        canlilik: '🟢 Yüksek (Akçaağaç Ormanı & Büyük Göller)',
        jeoloji: '480 milyon yıllık Apalaş Dağları bir zamanlar Himalayalar kadar yüksekti (ve Pangea\'da İskoçya dağlarıyla bitişikti!). Kuzeyde dünyanın en büyük tatlı su göl zinciri (Büyük Göller) uzanır.',
        ekosistem: 'Kara ayı, ak kuyruklu geyik, rakun, kunduz, Florida Everglades timsahları ve sonbaharda kıpkırmızıya dönen akçaağaç ormanları.',
        iklim: 'Nemli karasal ve güneyde subtropikal iklim; dört mevsim belirgin.',
        ilginc: 'Kuzeydeki 5 Büyük Göl, dünyadaki yüzey tatlı sularının yaklaşık %21\'ini tek başına barındırır!',
        w: 'Appalachian Mountains'
      },
      {
        id: 'ab-orta-amerika', ad: 'Orta Amerika & Karayipler (Volkanik Köprü)', ik: '🦜', tur: 'Amerika Alt-Bölgesi', bb: [7, 30, -116, -60],
        canlilik: '🟢 Çok Yüksek (Biyoçeşitlilik Köprüsü)',
        jeoloji: 'Yaklaşık 3 milyon yıl önce Panama Kıstağı denizden yükselip Kuzey ve Güney Amerika\'yı birleştirdi; bu olay okyanus akıntılarını (Gulf Stream!) ve küresel iklimi kökten değiştirdi.',
        ekosistem: 'Dünya kara alanının %1\'inden azını kaplamasına rağmen tüm türlerin %7\'sini barındırır: jaguar, quetzal kuşu, tukan, deniz inekleri ve Karayip mercan resifleri!',
        iklim: 'Tropikal yağmur ormanları, Meksika yaylaları ve yaz-sonbahar Atlas kasırga kuşağı.',
        ilginc: 'Yucatán Yarımadası\'ndaki Chicxulub krateri, 66 milyon yıl önce dinozorları yok eden 10 km\'lik asteroitin tam çarpma noktasıdır!',
        w: 'Central America'
      },

      // --- GÜNEY AMERİKA ALT-BÖLGELERİ ---
      {
        id: 'ab-brezilya-yayla', ad: 'Brezilya Yaylaları, Cerrado & Pantanal', ik: '🐆', tur: 'Güney Amerika Alt-Bölgesi', bb: [-28, -4, -60, -34],
        canlilik: '🟢 Çok Yüksek (Dünyanın En Büyük Sulak Alanı)',
        jeoloji: 'Antik Güney Amerika Kalkanı üzerinde yer alan eski aşınmış platolar, Iguaçu Şelalesi\'ni yaratan bazalt katmanları ve dünyanın en büyük tropikal sulak alanı Pantanal.',
        ekosistem: 'Jaguar (Pantanal\'da en yoğun!), dev karıncayiyen, yeleli kurt, kapibara, sümbül makav papağanı ve anakondalar.',
        iklim: 'Mevsimsel yağışlı tropikal savan (Cerrado) ve Atlantik kıyı yağmur ormanları.',
        ilginc: 'Pantanal sulak alanı yağmur mevsiminde o kadar büyür ki İngiltere\'nin neredeyse tamamı kadar dev bir iç denize dönüşür!',
        w: 'Pantanal'
      },
      {
        id: 'ab-patagonya', ad: 'Güney Koni, Pampalar & Patagonya', ik: '🧊', tur: 'Güney Amerika Alt-Bölgesi', bb: [-56, -28, -76, -52],
        canlilik: '🟡 Orta (Bozkır, Buzul & Kutup Kuşları)',
        jeoloji: 'Kuzeyde verimli Arjantin Pampaları, güneyde ise And Dağları\'nın yağmur gölgesindeki rüzgârlı Patagonya bozkırı ve Perito Moreno gibi dev buzullar yer alır.',
        ekosistem: 'Guanako (yabani lama), puma, Macellan pengueni, And kondoru, güney gerçek balinaları ve dünyanın en büyük dinozor fosil yatakları!',
        iklim: 'Güneye indikçe Kükreyen Kırklar rüzgârlarının hüküm sürdüğü serin, rüzgârlı ve buzul iklimi.',
        ilginc: 'Dünya tarihinde karada yürümüş en ağır dinozorların (Argentinosaurus, Patagotitan) tamamı Patagonya\'nın kızıl kayalıklarında keşfedildi!',
        w: 'Patagonia'
      },
      {
        id: 'ab-kuzey-gamerika', ad: 'Kuzey Güney Amerika (Orinoko & Tepui Masa Dağları)', ik: '🏞️', tur: 'Güney Amerika Alt-Bölgesi', bb: [1, 13, -76, -50],
        canlilik: '🟢 Çok Yüksek (Kayıp Dünya Tepuileri)',
        jeoloji: '2 milyar yıllık Guyana Kalkanı\'ndan yükselen dik duvarlı "Tepui" masa dağları (Roraima Dağı!) ve dünyanın en yüksek kesintisiz şelalesi Angel Şelalesi (979 m) buradadır.',
        ekosistem: 'Tepui zirveleri milyonlarca yıldır izole olduğu için yalnızca tek bir dağın tepesinde yaşayan endemik kurbağa ve etçil bitkiler evrimleşmiştir!',
        iklim: 'Sıcak tropikal iklim ve masa dağlarının zirvelerinde neredeyse her gün bulut ve yağmur.',
        ilginc: 'Sir Arthur Conan Doyle\'un ünlü "Kayıp Dünya" romanına ve Pixar\'ın "Yukarı Bak (Up)" filmindeki Cennet Şelalesi\'ne bu bölge ilham verdi!',
        w: 'Tepui'
      },

      // --- OKYANUSYA ALT-BÖLGELERİ ---
      {
        id: 'ab-dogu-avustralya', ad: 'Doğu & Güney Avustralya (Okaliptüs & Set Resifi)', ik: '🐨', tur: 'Okyanusya Alt-Bölgesi', bb: [-44, -10, 140, 155],
        canlilik: '🟢 Çok Yüksek (Okaliptüs Ormanı & Mercan Resifi)',
        jeoloji: 'Büyük Bölücü Dağlar kıyıya yağış bırakırken hemen açıklarında uzaydan görülebilen 2.300 km\'lik Büyük Set Resifi uzanır.',
        ekosistem: 'Koala, ornitorenk (yumurtlayan memeli!), vombat, Tazmanya canavarı, dev okaliptüs ormanları ve 200 milyon yıllık yaşayan fosil Wollemi Çamı!',
        iklim: 'Kuzeyde tropikal, güneyde ve Tazmanya\'da ılıman yağışlı iklim.',
        ilginc: 'Avustralya\'nın en ünlü ağacı okaliptüsün 700\'den fazla türü vardır ve koalalar beslenmelerinin neredeyse tamamını sadece bu yapraklardan sağlar!',
        w: 'Great Dividing Range'
      },
      {
        id: 'ab-yenizelanda', ad: 'Yeni Zelanda & Güney Pasifik Adaları', ik: '🥝', tur: 'Okyanusya Alt-Bölgesi', bb: [-48, -10, 162, 180],
        canlilik: '🟢 Yüksek (Kuşlar Kıtası & Volkanik Adalar)',
        jeoloji: 'Aslında büyük bölümü su altında kalmış 8. kıta "Zelandiya"nın (Zealandia) su üstünde kalan dağ zirveleridir! Aktif gayzerler, volkanlar ve derin fiyortlarla doludur.',
        ekosistem: 'Memeli yırtıcılar hiç ulaşmadığı için uçamayan kivi kuşu, kakapo papağanı ve 200 milyon yıllık yaşayan fosil sürüngen tuatara burada evrimleşti!',
        iklim: 'Serin, bol yağışlı ılıman okyanus iklimi; Güney Alpleri\'nde buzullar deniz kıyısına kadar iner.',
        ilginc: 'Yeni Zelanda, insanlığın yerleştiği son büyük kara parçasıdır — Polinezyalı Maoriler adaya ancak MS ~1280\'lerde ulaştı!',
        w: 'Zealandia'
      }
    ];

    // Güncellenmiş bölge bulucu: 1) Özel doğa blokları (çöl/dağ/orman) → 2) Kıta alt-bölgeleri → 3) Kıta yedeği
    window.dogaBolgeBul = function (la, lo) {
      lo = ((((lo + 180) % 360) + 360) % 360) - 180;
      for (const b of DB.ozel || []) {
        const [a0, a1, o0, o1] = b.bb;
        if (la >= a0 && la <= a1 && lo >= o0 && lo <= o1) return b;
      }
      for (const b of DB.altbolgeler || []) {
        const [a0, a1, o0, o1] = b.bb;
        if (la >= a0 && la <= a1 && lo >= o0 && lo <= o1) return b;
      }
      const byId = id => (DB.kitalar || []).find(x => x.id === id);
      if (la <= -60) return byId('dk-antarktika');
      if (lo < -25) return la >= 13 ? byId('dk-kamerika') : byId('dk-gamerika');
      if (la <= -8 && lo >= 110) return byId('dk-avustralya');
      if (la >= 35 && lo >= -25 && lo <= 50 && !(la < 42 && lo > 26)) return byId('dk-avrupa');
      if (la <= 37 && lo >= -25 && lo <= 52 && !(la > 12 && lo > 35)) return byId('dk-afrika');
      return byId('dk-asya') || (DB.kitalar || [])[0] || null;
    };
  }

  // ---------- 🌊 Büyük Okyanusların Alt-Bölgeleri (haritada çizgisiz, tıklanan yarımküre/kuşağa göre!) ----------
  const OK = window.ATLAS_OKYANUS;
  if (OK && Array.isArray(OK.okyanuslar)) {
    OK.okyanuslar.push(
      {
        id: 'pasifik-kuzey', ad: 'Kuzey Pasifik Okyanusu', ik: '🌊', tur: 'okyanus',
        yuzolcum: '~81 milyon km² (Ekvator\'un kuzeyi)',
        derinlik: 'Ortalama 4.280 m · En derin: Mariana Çukuru (10.994 m)',
        sicaklik: 'Tropiklerde 28 °C · Alaska ve Bering\'de 2–6 °C',
        canlilar: 'Dev Pasifik ahtapotu, mavi balina, gri balina göçleri (20.000 km!), deniz samuru, orka ve Hawaii mercan resifleri.',
        akintiOzet: 'Saat yönünde dönen dev Kuzey Pasifik Girdabı (Kuroshio sıcak + Kaliforniya soğuk akıntıları) ve Asya–Amerika arasındaki güçlü Batı Rüzgârları.',
        tarih: '16.–19. yüzyıllarda Manila–Acapulco İspanyol galyonları 250 yıl boyunca bu okyanusun akıntılarıyla Asya ipeğini ve Amerika gümüşünü taşıdı.',
        ilginc: 'Kuzey Pasifik Girdabı\'nın durgun merkezinde okyanus akıntılarının topladığı devasa "Büyük Pasifik Çöp Yaması" oluşmuştur; Mariana Çukuru da bu yarımdadır.',
        w: 'North Pacific Ocean'
      },
      {
        id: 'pasifik-guney', ad: 'Güney Pasifik Okyanusu (Polinezya & Point Nemo)', ik: '🏝️', tur: 'okyanus',
        yuzolcum: '~84 milyon km² (Ekvator\'un güneyi)',
        derinlik: 'Ortalama 4.100 m · En derin: Tonga Çukuru (10.882 m)',
        sicaklik: 'Tropik adalarda 27–30 °C · Güneyde 4–10 °C',
        canlilar: 'Büyük Set Resifi, kambur balina doğum alanları, Humboldt Akıntısı\'nın devasa hamsi sürüleri, manta vatozları ve deniz kaplumbağaları.',
        akintiOzet: 'Saat yönünün tersine dönen Güney Pasifik Girdabı, soğuk Humboldt Akıntısı ve 2–7 yılda bir tüm dünyanın iklimini değiştiren El Niño salınımı.',
        tarih: 'Polinezyalı denizciler 3.000 yıl önce yıldızları ve dalga kırılmalarını okuyarak Fiji\'den Tahiti\'ye, Paskalya Adası\'ndan Yeni Zelanda\'ya kadar binlerce adayı keşfetti.',
        ilginc: 'Dünya\'nın karaya en uzak noktası ve uzay araçlarının mezarlığı olan "Point Nemo" Güney Pasifik\'in tam ortasındadır!',
        w: 'South Pacific Ocean'
      },
      {
        id: 'atlas-kuzey', ad: 'Kuzey Atlas (Atlantik) Okyanusu', ik: '⛵', tur: 'okyanus',
        yuzolcum: '~41 milyon km² (Ekvator\'un kuzeyi)',
        derinlik: 'Ortalama 3.650 m · En derin: Porto Riko Çukuru (8.376 m)',
        sicaklik: 'Karayipler\'de 28 °C · İzlanda açıklarında 4–8 °C',
        canlilar: 'Atlas mavi yüzgeçli orkinosu, kambur balinalar, yılan balığı doğum alanı (Sargasso Denizi), morina balığı ve Kuzey Atlantik gerçek balinası.',
        akintiOzet: 'Avrupa\'yı ısıtan sıcak Gulf Stream akıntısı, soğuk Labrador akıntısı ve etrafı karasız tek deniz olan Sargasso Denizi.',
        tarih: 'Vikinglerin 1000 yılında Amerika\'ya, Kolomb\'un 1492\'de Yeni Dünya\'ya geçtiği ve yüzyıllarca Avrupa–Amerika ticaretinin aktığı en yoğun okyanus koridoru.',
        ilginc: '1912\'de Titanik\'in battığı buzdağı kuşağı, soğuk Labrador akıntısının Grönland buzullarını güneye taşıdığı tam bu bölgededir.',
        w: 'North Atlantic Ocean'
      },
      {
        id: 'atlas-guney', ad: 'Güney Atlas (Atlantik) Okyanusu', ik: '🌊', tur: 'okyanus',
        yuzolcum: '~40 milyon km² (Ekvator\'un güneyi)',
        derinlik: 'Ortalama 3.850 m · En derin: Güney Sandwich Çukuru (8.264 m)',
        sicaklik: 'Brezilya kıyısında 26 °C · Güney Afrika ve Patagonya\'da 8–14 °C',
        canlilar: 'Güney gerçek balinaları, Afrika ve Macellan penguenleri, dev albatroslar ve soğuk Benguela akıntısının zengin balık sürüleri.',
        akintiOzet: 'Saat yönünün tersine dönen Güney Atlantik Girdabı: batıda sıcak Brezilya Akıntısı, doğuda soğuk Benguela Akıntısı.',
        tarih: '1488\'de Bartolomeu Dias\'ın Ümit Burnu\'nu, 1520\'de Macellan\'ın Güney Amerika ucunu dolaşmasıyla dünya deniz ticaretinin güney otoyolu oldu.',
        ilginc: 'Güney Amerika ile Afrika 135 milyon yıl önce tam bu okyanusun ortasındaki Orta Atlantik Sırtı\'ndan ayrıldı ve her yıl ~3 cm uzaklaşmaya devam ediyor!',
        w: 'South Atlantic Ocean'
      },
      {
        id: 'hint-kuzey', ad: 'Kuzey & Tropikal Hint Okyanusu (Muson Kuşağı)', ik: '⛵', tur: 'okyanus',
        yuzolcum: '~32 milyon km² (Kuzey ve Tropikal havza)',
        derinlik: 'Ortalama 3.500 m · Maldivler & Seyşeller mercan sırtları',
        sicaklik: '26 – 30 °C (Dünyanın en sıcak açık okyanus suları!)',
        canlilar: 'Balina köpekbalığı, manta vatozu, dugong (deniz ineği), yeşil deniz kaplumbağaları ve Maldivler–Seyşeller mercan resifleri.',
        akintiOzet: 'Dünyada akıntı yönünü 6 ayda bir tam 180° tersine çeviren TEK okyanus bölgesidir (Hint Okyanusu Yaz ve Kış Musonları!).',
        tarih: 'Antik Mısır\'dan Roma\'ya, Arap denizcilerden Çinli Amiral Zheng He\'ye kadar binlerce yıl boyunca Baharat ve İpek Yolu\'nun en zengin deniz yolu oldu.',
        ilginc: 'Hint Okyanusu\'nun kuzeyi karayla (Asya) çevrili olduğu için ısınıp soğuyarak dev muson motorunu çalıştırır!',
        w: 'Indian Ocean'
      },
      {
        id: 'hint-guney', ad: 'Güney Hint Okyanusu (Kükreyen Kırklar)', ik: '🌬️', tur: 'okyanus',
        yuzolcum: '~38 milyon km² (20°G – 58°G arası)',
        derinlik: 'Ortalama 4.000 m · En derin: Sunda (Cava) Çukuru (7.290 m)',
        sicaklik: 'Kuzeyde 22 °C · Güneyde 4 – 10 °C',
        canlilar: 'Mavi balinalar, gezgin albatroslar, dev kalamarlar, Kerguelen Adaları penguen kolonileri ve 400 milyon yıllık yaşayan fosil Coelacanth balığı (batıda!).',
        akintiOzet: 'Güneyde durdurulamaz Kükreyen Kırklar rüzgârları, doğuda Batı Avustralya soğuk akıntısı ve batıda sıcak Agulhas akıntısı.',
        tarih: '1611\'de Hollandalı kaptanlar Ümit Burnu\'ndan sonra Güney Hint Okyanusu\'nun sert rüzgârlarına girerek Endonezya\'ya ulaşma süresini yarıya indirdi ("Brouwer Rotası").',
        ilginc: 'Bu bölge okyanusun en az keşfedilmiş, en ıssız ve en dalgalı su kütlelerinden biridir; 2014\'te kaybolan MH370 uçağı burada arandı.',
        w: 'Indian Ocean'
      }
    );
  }
})();
