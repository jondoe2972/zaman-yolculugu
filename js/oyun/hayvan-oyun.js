// 🧠 Tarih & Doğa Bilgini + 📍 Nerede Yaşar?
// Gittikçe zorlaşan sonsuz rekor sistemi: 🌱 Isınma → ⚔️ Orta → 🔥 Zor → 👑 Efsane · ❤️ 3 Can
// Modlar: 🏛️ Tarih Bilgini · 🌿 Doğa Bilgini · ⚡ Tarih + Doğa Karma · 📍 Nerede Yaşar?
'use strict';
window.HayvanOyunu = (() => {
  const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const API = 'https://en.wikipedia.org/w/api.php?format=json&origin=*&action=query&redirects=1&prop=pageimages&piprop=thumbnail&pithumbsize=480&titles=';
  const oku = (k, v) => { try { return JSON.parse(localStorage[k] || 'null') || v; } catch (e) { return v; } };
  const yaz = (k, v) => { try { localStorage[k] = JSON.stringify(v); } catch (e) { } };
  const karistir = arr => { const a = [...arr]; for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };

  const KITA_GRUPLARI = {
    'Asya': '🌏 Asya', 'Afrika': '🌍 Afrika', 'Avrupa': '🏰 Avrupa',
    'Amerika': '🌎 Amerika', 'Okyanusya': '🏝️ Okyanusya', 'Okyanus': '🌊 Okyanuslar',
    'Arktik': '🧊 Kutuplar', 'Antarktika': '🧊 Kutuplar'
  };
  const kitaEtiket = h => KITA_GRUPLARI[h.kita] || '🌍 Dünya';

  // Gittikçe zorlaşan kademe hesaplayıcı
  function kademeBilgi(seri) {
    if (seri < 3) return { tier: 'kolay', ad: '🌱 Isınma', carpan: 1, puan: 100 };
    if (seri < 6) return { tier: 'orta', ad: '⚔️ Orta', carpan: 1.5, puan: 150 };
    if (seri < 10) return { tier: 'zor', ad: '🔥 Zor', carpan: 2, puan: 200 };
    return { tier: 'zor', ad: '👑 Efsane', carpan: 3, puan: 300 };
  }

  // 🌿 Doğa Bilgini soru bankası (Kolay → Orta → Zor)
  const DOGA_BANK = {
    kolay: [
      { s: 'Dünya üzerinde yaşamış bilinen en büyük hayvan hangisidir?', d: 'Mavi Balina', y: ['Afrika Fili', 'Balina Köpekbalığı', 'T-Rex'], a: 'Mavi balina 30 metre boya ve 180 tona ulaşarak tüm dinozorlardan bile büyüktür.' },
      { s: 'Hangi kuş uçamaz ama saatte 70 km hızla koşabilir?', d: 'Devekuşu', y: ['İmparator Penguen', 'Kivi', 'Flamingo'], a: 'Devekuşu dünyanın en büyük ve karada en hızlı koşan kuşudur.' },
      { s: 'Yavrularını karnındaki kesede büyüten ve yalnızca Avustralya\'da doğal yaşayan memeli hangisidir?', d: 'Kanguru', y: ['Dev Panda', 'Lama', 'Su Aygırı'], a: 'Kangurular, koalalar ve vombatlar Avustralya\'nın ünlü keseli memelileridir.' },
      { s: 'Günde yaklaşık 12–14 saat yalnızca bambu yiyerek beslenen ünlü hayvan hangisidir?', d: 'Dev Panda', y: ['Koala', 'Tembel Hayvan', 'Kutup Ayısı'], a: 'Dev pandalar Çin\'in dağlık bambu ormanlarında yaşar ve diyetlerinin %99\'u bambudur.' },
      { s: 'Hangi kara hayvanı kısa mesafede saatte 110 km hıza ulaşarak en hızlı koşucudur?', d: 'Çita', y: ['Leopar', 'Ceylan', 'Bozkurt'], a: 'Çita 0\'dan 100 km/s hıza yalnızca 3 saniyede çıkabilir.' },
      { s: 'Dünya okyanuslarının bilinen en derin noktası (-10.984 m) hangisidir?', d: 'Mariana Çukuru', y: ['Porto Riko Çukuru', 'Java Çukuru', 'Tonga Çukuru'], a: 'Batı Pasifik\'teki Mariana Çukuru\'na Everest\'i koysanız zirvesi hâlâ 2 km su altında kalır.' },
      { s: '66 milyon yıl önce dinozorların sonunu getiren dev göktaşı krateri hangisidir?', d: 'Chicxulub Krateri', y: ['Barringer Krateri', 'Vredefort Kubbesi', 'Tunguska'], a: 'Meksika\'nın Yucatán Yarımadası\'ndaki Chicxulub krateri 180 km çapındadır.' },
      { s: 'Uzaydan çıplak gözle görülebilen, canlı mercanların kurduğu dünyanın en büyük yapısı hangisidir?', d: 'Büyük Set Resifi', y: ['Amazon Ormanı', 'Belize Resifi', 'Kızıldeniz Resifi'], a: 'Avustralya açıklarındaki Büyük Set Resifi 2.300 km boyunca uzanır.' },
      { s: 'Dünyanın en yüksek şelalesi (979 m) hangisidir?', d: 'Angel Şelalesi', y: ['Niagara Şelalesi', 'Victoria Şelalesi', 'Iguazú Şelalesi'], a: 'Venezuela\'daki Angel Şelalesi\'nde su yere varmadan rüzgârla sis bulutuna dönüşür.' },
      { s: 'Kahvenin (Coffea arabica) dünyadaki ilk doğal anavatanı neresidir?', d: 'Etiyopya Yaylası', y: ['Brezilya', 'Kolombiya', 'Hindistan'], a: 'Kahve Etiyopya\'nın Kaffa ormanlarından Yemen\'e, oradan Osmanlı üzerinden tüm dünyaya yayıldı.' }
    ],
    orta: [
      { s: 'Her yıl Kuzey Kutbu ile Antarktika arasında ~80.000 km uçarak dünya göç rekorunu elinde tutan kuş hangisidir?', d: 'Kuzey Sumrusu', y: ['Beyaz Leylek', 'Albatros', 'Kaya Kartalı'], a: 'Kuzey sumrusu her yıl iki yarımkürenin yazını birden yaşar ve ömrü boyunca Ay\'a 3 kez gidip gelecek kadar uçar.' },
      { s: 'Hangi memeli hayvan, yavrularını doğurmak yerine yumurtlayarak dünyaya getirir?', d: 'Ornitorenk', y: ['Koala', 'Kunduz', 'Su Samuru'], a: 'Ornitorenk ve ekidne, dünyada yumurtlayan tek memeli grubudur.' },
      { s: 'Üç kalbi, dokuz beyni ve bakır bazlı mavi kanı olan deniz canlısı hangisidir?', d: 'Ahtapot', y: ['Manta Vatozu', 'Denizanası', 'Balina Köpekbalığı'], a: 'Ahtapotun kanındaki hemosiyanin ona mavi renk verir; her kolunun kendi sinir ağı vardır.' },
      { s: 'Dünyanın en derin (1.642 m) ve sıvı tatlı suların %20\'sini tek başına tutan gölü hangisidir?', d: 'Baykal Gölü', y: ['Victoria Gölü', 'Superior Gölü', 'Hazar Denizi'], a: 'Sibirya\'daki Baykal Gölü 25 milyon yıllıktır ve dünyadaki tek tatlı su fokuna ev sahipliği yapar.' },
      { s: 'Bugün yediğimiz modern mısır, Meksika\'da hangi yabani ottan binlerce yıllık seçimle geliştirildi?', d: 'Teosinte', y: ['Siyez', 'Kinoa', 'Sorgum'], a: 'Teosinte sadece 6–12 sert taneli küçük bir ottu; Mezoamerikalı çiftçiler onu dev koçana dönüştürdü.' },
      { s: 'Ekvator\'daki Galápagos Adaları\'nda penguenlerin yaşayabilmesini hangi soğuk okyanus akıntısı sağlar?', d: 'Humboldt (Peru) Akıntısı', y: ['Gulf Stream', 'Kuroshio Akıntısı', 'Brezilya Akıntısı'], a: 'Antarktika\'dan gelen soğuk Humboldt Akıntısı, Galápagos sularını serin tutar.' },
      { s: 'Kutup ayısının tüyleri şeffaftır; peki altındaki derisi ne renktir?', d: 'Siyah', y: ['Pembe', 'Beyaz', 'Gri'], a: 'Siyah deri, içi boş şeffaf kıllardan geçen güneş ısısını en yüksek düzeyde emer.' },
      { s: 'Dünyadaki tüm elmaların yabani atası (Malus sieversii) doğal olarak hangi bölgede orman oluşturur?', d: 'Orta Asya (Kazakistan / Tanrı Dağları)', y: ['Avrupa Alpleri', 'Kuzey Amerika', 'Akdeniz'], a: 'Kazakistan\'ın eski başkenti Almatı\'nın adı doğrudan "Elmaların Babası" anlamına gelir.' },
      { s: 'Lahana, brokoli, karnabahar ve brüksel lahanası aslında hangi tarım merkezinde tek bir yabani bitkiden üretildi?', d: 'Akdeniz Merkezi', y: ['And Dağları', 'Yeni Gine', 'Batı Afrika'], a: 'Hepsi tek bir yabani hardal türünün (Brassica oleracea) farklı kısımlarının seçilmesiyle doğdu.' },
      { s: 'Buzul Çağı\'nda Asya ile Amerika\'yı birleştirip ilk insanların ve mamutların geçtiği kara köprüsü hangisidir?', d: 'Beringia', y: ['Doggerland', 'Sundaland', 'Sahul'], a: 'Deniz seviyesi 120 m alçaktayken Sibirya ile Alaska arasında 1.000 km genişliğinde bir bozkır köprüsü vardı.' }
    ],
    zor: [
      { s: 'Avrupa yılan balıkları yumurtlamak için 5.000 km yüzerek hangi uzak deniz bölgesine göç eder?', d: 'Sargasso Denizi', y: ['Kuzey Denizi', 'Akdeniz', 'Bering Denizi'], a: 'Bermuda yakınındaki Sargasso Denizi\'nde yumurtlarlar; yavrular Gulf Stream ile Avrupa\'ya döner.' },
      { s: 'Dünya\'nın manyetik kalkanının %30 zayıfladığı ve Hubble Teleskobu\'nun geçerken kapandığı bölge hangisidir?', d: 'Güney Atlantik Anomalisi', y: ['Bermuda Şeytan Üçgeni', 'Mariana Çukuru', 'Kuzey Manyetik Kutbu'], a: 'Brezilya–Güney Atlantik üzerindeki bu bölgede Van Allen radyasyon kuşağı yüzeye 200 km\'ye kadar iner.' },
      { s: 'Yaklaşık 400 yıla kadar yaşayabilen, bilinen en uzun ömürlü omurgalı deniz canlısı hangisidir?', d: 'Grönland Köpekbalığı', y: ['Galápagos Kaplumbağası', 'Mavi Balina', 'Dev Kalamar'], a: 'Arktik derinliklerinde çok yavaş metabolizmayla yaşayan bu köpekbalığı 150 yaşında erişkin olur.' },
      { s: 'Şeker kamışı ve çekirdeksiz muzun dünyadaki en eski evcilleştirme izleri (9.000 yıllık Kuk Bataklığı) nerededir?', d: 'Papua Yeni Gine Yaylası', y: ['Hindistan', 'Brezilya', 'Mısır'], a: 'UNESCO mirası Kuk Bataklığı, tarımın dünyada bağımsız doğduğu en eski merkezlerden biridir.' },
      { s: 'Trilyonlarca karat endüstriyel "çarpma elması" barındıran 100 km çaplı Sibirya göktaşı krateri hangisidir?', d: 'Popigai Krateri', y: ['Vredefort Kubbesi', 'Manicouagan', 'Sudbury Havzası'], a: '35,7 milyon yıl önceki dev çarpma, yerdeki grafiti saniyeler içinde elmasa dönüştürdü.' },
      { s: '400 milyon yıldır neredeyse hiç değişmeden yaşadığı için "yaşayan fosil" denen ve 1938\'de canlı yakalanan balık hangisidir?', d: 'Sölakant (Coelacanth)', y: ['Fener Balığı', 'Mersin Balığı', 'Vatoz'], a: 'Dinozorlarla birlikte tükendiği sanılan sölakant, Güney Afrika açıklarında canlı bulundu.' },
      { s: 'Kışın vücudundaki suyun %60\'ı donmasına rağmen kanını glikozla antifrize çevirip baharda canlanan canlı hangisidir?', d: 'Alaska Orman Kurbağası', y: ['Axolotl', 'Kutup Ayısı', 'Tardigrad'], a: 'Orman kurbağasının kalbi kışın tamamen durur, baharda güneşle çözülüp zıplayarak uyanır.' },
      { s: 'Buzul Çağı\'nda Britanya\'yı Kıta Avrupası\'na bağlayıp dev Storegga tsunamisiyle sular altında kalan ova hangisidir?', d: 'Doggerland', y: ['Beringia', 'Sahul', 'Sundaland'], a: 'MÖ 6200 civarında Norveç açıklarındaki dev denizaltı heyelanı Doggerland\'ı Kuzey Denizi\'ne gömdü.' },
      { s: 'DNA analizlerine göre tüm modern siyez buğdaylarının yabani atası Anadolu\'da hangi dağın eteklerindendir?', d: 'Karacadağ (Diyarbakır–Şanlıurfa)', y: ['Erciyes', 'Ağrı Dağı', 'Uludağ'], a: 'İlk çiftçiler yaklaşık 10.000 yıl önce Karacadağ eteklerindeki yabani siyezi evcilleştirdi.' }
    ]
  };

  // 🏛️ Tarih Bilgini soru bankası (Kolay → Orta → Zor)
  const TARIH_BANK = {
    kolay: [
      { s: 'İnsanlık tarihinin bilinen ilk yazı sistemi (MÖ ~3400) hangisidir?', d: 'Sümer Çivi Yazısı', y: ['Fenike Alfabesi', 'Latin Alfabesi', 'Orhun Alfabesi'], a: 'Sümerler Uruk\'ta kil tabletlere kamışla bastıkları çivi yazısıyla tarih çağlarını başlattı.' },
      { s: '1450 civarında Avrupa\'da hareketli metal harfli matbaayı geliştirerek kitap devrimini başlatan kimdir?', d: 'Johannes Gutenberg', y: ['Leonardo da Vinci', 'Galileo Galilei', 'Isaac Newton'], a: 'Gutenberg\'in matbaasıyla 50 yıl içinde Avrupa\'da 20 milyondan fazla kitap basıldı.' },
      { s: 'Akdeniz ile Kızıldeniz\'i birleştirerek Avrupa–Asya deniz yolunu 7.000 km kısaltan geçit hangisidir?', d: 'Süveyş Kanalı', y: ['Panama Kanalı', 'Cebelitarık Boğazı', 'Hürmüz Boğazı'], a: '1869\'da açılan Süveyş Kanalı gemileri Afrika\'yı dolaşmaktan kurtardı.' },
      { s: '1928\'de laboratuvarda unuttuğu bakteri kabındaki küf sayesinde ilk antibiyotik Penisilini keşfeden kimdir?', d: 'Alexander Fleming', y: ['Louis Pasteur', 'Edward Jenner', 'Marie Curie'], a: 'Fleming\'in keşfi enfeksiyonları ölümcül olmaktan çıkarıp milyonlarca hayat kurtardı.' },
      { s: 'Tarihte iki farklı bilim dalında (Fizik ve Kimya) Nobel Ödülü kazanan tek bilim insanı kimdir?', d: 'Marie Curie', y: ['Albert Einstein', 'Isaac Newton', 'Nikola Tesla'], a: 'Marie Curie radyoaktivite, polonyum ve radyum çalışmalarıyla çifte Nobel kazandı.' },
      { s: 'Tarihte nüfusu 1 milyonu aşan ilk antik megakent (MS ~100) hangisidir?', d: 'Roma', y: ['Atina', 'Uruk', 'Londra'], a: 'Antik Roma 11 su kemeri ve dev apartmanlarıyla MS 100\'de 1 milyonu geçti.' },
      { s: 'Edirne\'deki Selimiye Camii\'ni 86 yaşında tamamlayıp "ustalık eserim" diyen Osmanlı başmimarı kimdir?', d: 'Mimar Sinan', y: ['Piri Reis', 'Uluğ Bey', 'İbn Sina'], a: 'Mimar Sinan 50 yıllık başmimarlık döneminde 350\'den fazla anıtsal eser inşa etti.' },
      { s: '1903\'te Kitty Hawk\'ta ilk kontrollü motorlu uçak uçuşunu (12 saniye, 36 m) gerçekleştirenler kimlerdir?', d: 'Wright Kardeşler', y: ['Leonardo da Vinci', 'Montgolfier Kardeşler', 'Thomas Edison'], a: 'Orville ve Wilbur Wright bisiklet tamircisiyken havacılık çağını başlattılar.' },
      { s: '1347\'de Kırım\'dan gemilerle Avrupa\'ya ulaşıp nüfusun neredeyse yarısını yok eden büyük salgın hangisidir?', d: 'Kara Ölüm (Büyük Veba)', y: ['İspanyol Gribi', 'Antoninus Vebası', 'Büyük Kolera'], a: 'Venedik\'te gemilerin 40 gün bekletilmesi (quaranta giorni) bugünkü "karantina" kelimesini doğurdu.' },
      { s: 'Antik Yunan\'da "sorgulanmamış hayat yaşanmaya değmez" diyen ve hiç yazılı eser bırakmayan filozof kimdir?', d: 'Sokrates', y: ['Aristoteles', 'Epikür', 'Konfüçyüs'], a: 'Sokrates\'in tüm fikirlerini öğrencisi Platon\'un yazdığı diyaloglardan biliyoruz.' }
    ],
    orta: [
      { s: 'Yunan, Latin, Arap, İbrani ve Kiril alfabelerinin tamamının ortak atası olan 22 harfli antik tüccar alfabesi hangisidir?', d: 'Fenike Alfabesi', y: ['Sümer Çivi Yazısı', 'Mısır Hiyeroglifi', 'Maya Glifi'], a: 'Akdeniz\'i dolaşan Fenikeli denizciler pratik 22 harfli alfabelerini tüm dünyaya yaydı.' },
      { s: 'MS 375\'te Hunların Karadeniz\'in kuzeyine gelmesiyle başlayıp Batı Roma\'yı yıkan büyük hareket hangisidir?', d: 'Büyük Kavimler Göçü', y: ['Deniz Kavimleri Göçü', 'Bantu Göçü', 'Viking Yayılımı'], a: 'Kavimler Göçü bugünkü Fransa, İngiltere ve İspanya\'nın temellerini attı ve Ortaçağ\'ı başlattı.' },
      { s: 'Bilgisayar biliminin temelindeki "Algoritma" kelimesi, hangi 9. yüzyıl Bağdat matematikçisinin adından gelir?', d: 'El-Harezmi', y: ['İbn Sina', 'Farabi', 'Ömer Hayyam'], a: 'Cebir bilimini kuran Harezmi\'nin Latince adı "Algoritmi" bugünkü algoritma kelimesini doğurdu.' },
      { s: '1513\'te Amerika kıyılarını olağanüstü doğrulukla çizen ve Kitab-ı Bahriye\'yi yazan Osmanlı amirali kimdir?', d: 'Piri Reis', y: ['Barbaros Hayreddin', 'Evliya Çelebi', 'Kâtip Çelebi'], a: 'Piri Reis\'in haritası 1929\'da Topkapı Sarayı\'nda bulundu ve dünya haritacılık tarihine geçti.' },
      { s: '"El-Kanun fi\'t-Tıb" kitabı 600 yıl boyunca hem Doğu\'da hem Avrupa üniversitelerinde okutulan hekim kimdir?', d: 'İbn Sina (Avicenna)', y: ['Hipokrat', 'Galen', 'İbn Rüşd'], a: 'Buharalı İbn Sina mikroskoptan 600 yıl önce görünmez hastalık etkenlerini ve karantinayı tanımladı.' },
      { s: 'MS 775–935 arasında Beytü\'l-Hikme ve kusursuz daire planıyla dünyanın en kalabalık şehri olan başkent hangisidir?', d: 'Bağdat', y: ['Kurtuba', 'İskenderiye', 'Babil'], a: 'Abbasi Halifesi Mansur\'un kurduğu Bağdat, İslam Altın Çağı\'nda 1 milyon nüfusa ulaştı.' },
      { s: 'Kontrol edebileceğin şeylerle edemeyeceklerini ayırıp iç huzuru savunan, Epiktetos ve Marcus Aurelius\'un okulu hangisidir?', d: 'Stoacılık', y: ['Epikürcülük', 'Varoluşçuluk', 'Sofizm'], a: 'Bir köle (Denizlili Epiktetos) ile bir Roma imparatorunu aynı ilkede buluşturan felsefe okuludur.' },
      { s: '1843\'te mekanik Analitik Makine için ilk algoritmayı yazarak tarihin ilk bilgisayar programcısı olan kişi kimdir?', d: 'Ada Lovelace', y: ['Alan Turing', 'Marie Curie', 'Tim Berners-Lee'], a: 'Ada Lovelace bilgisayarların gelecekte müzik besteleyip grafik çizebileceğini 100 yıl önceden öngördü.' },
      { s: '1989\'da CERN\'de World Wide Web\'i icat edip patent almadan tüm insanlığa ücretsiz hediye eden kimdir?', d: 'Tim Berners-Lee', y: ['Bill Gates', 'Steve Jobs', 'Nikola Tesla'], a: 'Berners-Lee 1993\'te web teknolojisini ücretsiz kamu malına bırakarak modern interneti mümkün kıldı.' },
      { s: '29 yıl boyunca 117.000 km gezerek Marco Polo\'nun 3 katı yol yürüyen 14. yüzyıl gezgini kimdir?', d: 'İbn Battuta', y: ['Evliya Çelebi', 'Zheng He', 'Vasco da Gama'], a: 'Tancalı İbn Battuta Anadolu Beylikleri\'nden Hindistan, Mali ve Çin\'e kadar 44 bugünkü ülkeyi gezdi.' }
    ],
    zor: [
      { s: '1443\'te Kral Büyük Sejong\'un harfleri ağız ve dil şekline göre bilimsel olarak tasarlattığı alfabe hangisidir?', d: 'Hangul (Kore)', y: ['Brahmi', 'Kiril', 'Kanji'], a: 'Dilbilimciler Hangul\'u dünyanın en mantıklı ve öğrenmesi en kolay yazı sistemi kabul eder.' },
      { s: 'Semerkant\'ta 40 metrelik mermer sekstantla bir yılın süresini yalnızca 58 saniye farkla ölçen astronom sultan kimdir?', d: 'Uluğ Bey', y: ['Ali Kuşçu', 'El-Biruni', 'Ömer Hayyam'], a: 'Timur\'un torunu Uluğ Bey, teleskop icat edilmeden 1.018 yıldızın kataloğunu çıkardı.' },
      { s: '1854 Londra kolera salgınında vakaları haritalayıp su tulumbasından kaynaklandığını kanıtlayarak epidemiyolojiyi kuran hekim kimdir?', d: 'Dr. John Snow', y: ['Louis Pasteur', 'Edward Jenner', 'Alexander Fleming'], a: 'Broad Street su tulumbasının kolunu söktürerek modern halk sağlığı bilimini başlattı.' },
      { s: '1717\'de İstanbul\'da Türk kadınlarının uyguladığı çiçek aşısını görüp mektuplarıyla İngiltere\'ye tanıtan kişi kimdir?', d: 'Lady Mary Wortley Montagu', y: ['Florence Nightingale', 'Marie Curie', 'Hypatia'], a: 'Anadolu\'daki bu halk hekimliği geleneği, Edward Jenner\'ın 1796 modern aşısına giden yolu açtı.' },
      { s: 'Orhun (Göktürk) alfabesini 1893\'te çözen ve ilk okuduğu kelimenin "Tengri" olduğu bilinen dilbilimci kimdir?', d: 'Vilhelm Thomsen', y: ['Jean-François Champollion', 'Heinrich Schliemann', 'Arthur Evans'], a: 'Danimarkalı Thomsen 38 harflik Göktürk alfabesini çözerek Türk tarihinin en eski yazılı belgelerini açığa çıkardı.' },
      { s: 'İnananlara tarihte ilk kez "Hristiyan" adının verildiği antik kent hangisidir?', d: 'Antakya (Antiochia)', y: ['Roma', 'İskenderiye', 'Efes'], a: 'Bugünkü Hatay\'da yer alan antik Antakya, erken Hristiyanlığın ilk büyük merkezlerinden biriydi.' },
      { s: 'MS 935–1013 arasında sokak lambaları, 70 kütüphanesi ve 450.000 nüfusuyla dünyanın en kalabalık şehri olan Endülüs başkenti hangisidir?', d: 'Kurtuba (Córdoba)', y: ['Gırnata', 'Sevilla', 'Toledo'], a: 'Aynı dönemde Londra ve Paris ~20.000 nüfuslu kasabalarken Kurtuba\'da 400.000 ciltlik kütüphane vardı.' },
      { s: 'Batı felsefesinde Aristoteles "Birinci Öğretmen", peki "Erdemli Şehir" eseriyle "İkinci Öğretmen" (Muallim-i Sani) sayılan filozof kimdir?', d: 'Farabi', y: ['İbn Rüşd', 'Gazali', 'El-Kindi'], a: 'Türkistanlı Farabi mantık, müzik teorisi ve siyaset felsefesinde İslam ve Avrupa düşüncesini derinden etkiledi.' },
      { s: '1507\'de Hint Okyanusu baharat ticaretini kontrol etmek için Portekiz\'in ilk hedef aldığı stratejik geçit hangisidir?', d: 'Hürmüz Boğazı', y: ['Babülmendep', 'Malakka Boğazı', 'Dover Boğazı'], a: 'Basra Körfezi\'nin kapısı olan Hürmüz Boğazı bugün de dünya petrol ticaretinin beşte birini taşır.' }
    ]
  };

  // Atlas verilerinden dinamik ekstra sorular üret (çeşitlilik hiç bitmesin!)
  function dinamikDogaSorulari() {
    const out = [];
    const DEK = window.ATLAS_DOGA_EK || {};
    const kr = DEK.kraterler || [];
    if (kr.length >= 4) {
      for (const k of karistir(kr).slice(0, 4)) {
        const y = karistir(kr.filter(x => x.id !== k.id)).slice(0, 3).map(x => x.ad.split(' (')[0]);
        out.push({ s: `${k.yer} konumunda bulunan, ${k.cap} büyüklüğündeki göktaşı krateri hangisidir?`, d: k.ad.split(' (')[0], y, a: k.ozet });
      }
    }
    const gl = DEK.golSelale || [];
    if (gl.length >= 4) {
      for (const g0 of karistir(gl).slice(0, 4)) {
        const ayni = gl.filter(x => x.tur === g0.tur && x.id !== g0.id);
        if (ayni.length < 3) continue;
        const y = karistir(ayni).slice(0, 3).map(x => x.ad.split(' (')[0]);
        out.push({ s: `${g0.yer} bölgesindeki (${g0.olcu}) bu ünlü ${g0.tur === 'selale' ? 'şelale' : 'göl'} hangisidir?`, d: g0.ad.split(' (')[0], y, a: g0.ozet });
      }
    }
    const tr = DEK.tarim || [];
    if (tr.length >= 4) {
      for (const t of karistir(tr).slice(0, 4)) {
        const y = karistir(tr.filter(x => x.id !== t.id)).slice(0, 3).map(x => x.ad.split(' (')[0]);
        const urunKisa = t.urunler.split(',').slice(0, 3).join(',');
        out.push({ s: `"${urunKisa}" ürünlerinin ilk evcilleştirildiği Vavilov tarım anavatanı hangisidir?`, d: t.ad.split(' (')[0], y, a: t.yabani || t.ozet });
      }
    }
    return out;
  }

  function dinamikTarihSorulari() {
    const out = [];
    const KEK = window.ATLAS_KULTUR_EK || {};
    const TEK = window.ATLAS_TARIH_EK || {};
    const ic = KEK.icatlar || [];
    if (ic.length >= 4) {
      for (const it of karistir(ic).slice(0, 4)) {
        const y = karistir(ic.filter(x => x.id !== it.id)).slice(0, 3).map(x => x.ad.split(' (')[0]);
        out.push({ s: `${it.donem} döneminde ${it.yer} merkezli olarak ortaya çıkan ve mucidi "${it.mucit}" olan büyük icat hangisidir?`, d: it.ad.split(' (')[0], y, a: it.ozet });
      }
    }
    const bi = KEK.insanlar || [];
    if (bi.length >= 4) {
      for (const it of karistir(bi).slice(0, 4)) {
        const y = karistir(bi.filter(x => x.id !== it.id)).slice(0, 3).map(x => x.ad.split(' (')[0]);
        out.push({ s: `${it.donem} yıllarında yaşamış, ${it.yer} ile anılan bu büyük isim kimdir?\n"${it.ozet.slice(0, 115)}..."`, d: it.ad.split(' (')[0], y, a: it.ilginc || it.detay });
      }
    }
    const bg = TEK.bogazlar || [];
    if (bg.length >= 4) {
      for (const it of karistir(bg).slice(0, 4)) {
        const y = karistir(bg.filter(x => x.id !== it.id)).slice(0, 3).map(x => x.ad.split(' (')[0]);
        out.push({ s: `${it.yer} konumundaki (${it.olcu}) stratejik geçit hangisidir?`, d: it.ad.split(' (')[0], y, a: it.ozet });
      }
    }
    return out;
  }

  const fotoCache = new Map();
  async function fotoYukle(titles) {
    const eksik = [...new Set(titles.filter(w => w && !fotoCache.has(w)))];
    if (!eksik.length) return;
    try {
      const j = await fetch(API + encodeURIComponent(eksik.slice(0, 20).join('|'))).then(r => r.json());
      const map = {};
      for (const r of [...(j.query?.normalized || []), ...(j.query?.redirects || [])]) map[r.from] = r.to;
      const byT = {};
      for (const p of Object.values(j.query?.pages || {})) if (p.thumbnail) byT[p.title] = p.thumbnail.source;
      for (const t of eksik.slice(0, 20)) {
        let tt = t;
        for (let k = 0; k < 3 && map[tt]; k++) tt = map[tt];
        fotoCache.set(t, byT[tt] || null);
      }
    } catch (e) { /* çevrimdışı */ }
  }

  let el = null, s = null;

  function kutu() {
    if (el) return el;
    el = document.createElement('div');
    el.id = 'hayvan-oyun';
    el.className = 'ho';
    el.hidden = true;
    el.setAttribute('role', 'dialog');
    el.setAttribute('aria-modal', 'true');
    el.setAttribute('aria-label', 'Tarih ve Doğa Bilgini');
    document.body.appendChild(el);
    el.addEventListener('click', tikla);
    window.addEventListener('keydown', e => { if (e.key === 'Escape' && el && !el.hidden) kapat(); });
    return el;
  }

  const ist = () => oku('zy-ho-ist2', { dogaRekor: 0, tarihRekor: 0, karmaRekor: 0, neredeRekor: 0, oyun: 0 });
  const istKaydet = fn => { const d = ist(); fn(d); yaz('zy-ho-ist2', d); return d; };

  function secim() {
    const k = kutu(); k.hidden = false;
    const I = ist();
    k.innerHTML = `<div class="ho-kart">
      <div class="eo-ust">
        <div><b>🧠 Tarih &amp; Doğa Bilgini</b><small>Sorular her turda otomatik zorlaşır: 🌱 Isınma → ⚔️ Orta → 🔥 Zor → 👑 Efsane · ❤️ 3 Can!</small></div>
        <button class="ho-x" title="Kapat" aria-label="Kapat">✕</button>
      </div>
      <div class="ho-secim">
        <button type="button" class="ho-mod" data-ho="tarih">
          <span>🏛️</span>
          <b>Tarih Bilgini</b>
          <small>İcatlar, filozoflar, büyük insanlar, dinler, alfabeler, salgınlar ve megakentler!</small>
          ${I.tarihRekor ? `<em>🏆 Rekor: ${I.tarihRekor.toLocaleString('tr-TR')} puan</em>` : ''}
        </button>
        <button type="button" class="ho-mod" data-ho="doga">
          <span>🌿</span>
          <b>Doğa Bilgini</b>
          <small>Hayvanlar, okyanus tabanı, kraterler, Vavilov tarım, göller ve iklim harikaları!</small>
          ${I.dogaRekor ? `<em>🏆 Rekor: ${I.dogaRekor.toLocaleString('tr-TR')} puan</em>` : ''}
        </button>
        <button type="button" class="ho-mod" data-ho="karma">
          <span>⚡</span>
          <b>Tarih + Doğa Karma</b>
          <small>İki dünyanın en çarpıcı soruları bir arada — gerçek genel kültür testi!</small>
          ${I.karmaRekor ? `<em>🏆 Rekor: ${I.karmaRekor.toLocaleString('tr-TR')} puan</em>` : ''}
        </button>
        <button type="button" class="ho-mod" data-ho="nerede">
          <span>🐾</span>
          <b>Nerede Yaşar? (Fotoğraflı)</b>
          <small>Hayvan fotoğrafına bak, hangi kıta veya okyanusta yaşadığını bil; tur ilerledikçe zorlaşır!</small>
          ${I.neredeRekor ? `<em>🏆 Rekor: ${I.neredeRekor.toLocaleString('tr-TR')} puan</em>` : ''}
        </button>
      </div>
    </div>`;
  }

  // ---------- 1) 📍 NEREDE YAŞAR? (Gittikçe zorlaşan + 3 Can) ----------
  const KOLAY_H = new Set(['devpanda', 'bengalkaplani', 'asyafili', 'aslan', 'zurafa', 'kutupayisi', 'penguen', 'kanguru', 'koala', 'komodo', 'orangutan', 'caretta', 'vankedisi', 'lama', 'jaguar', 'goril', 'afrikafili']);

  function neredeBasla() {
    const H = (window.ATLAS_HAYVANLAR || []).filter(h => h.kita && h.w);
    const kolay = karistir(H.filter(h => KOLAY_H.has(h.id)));
    const orta = karistir(H.filter(h => !KOLAY_H.has(h.id) && h.from == null));
    const zor = karistir(H.filter(h => h.from != null || h.durum === 'Kritik' || h.durum === 'Tükendi'));
    s = { mod: 'nerede', havuz: { kolay, orta, zor }, gorulen: new Set(), seri: 0, puan: 0, can: 3, izler: [], secim: null, bitti: false };
    neredeTur();
  }

  function neredeTur() {
    const kd = kademeBilgi(s.seri);
    const hav = s.havuz[kd.tier].filter(x => !s.gorulen.has(x.id));
    const yedek = [...s.havuz.kolay, ...s.havuz.orta, ...s.havuz.zor].filter(x => !s.gorulen.has(x.id));
    const h = hav[0] || yedek[0] || s.havuz.kolay[0];
    if (!h) { s.gorulen.clear(); return neredeTur(); }
    s.gorulen.add(h.id);
    const dogru = kitaEtiket(h);
    const tumKitalar = [...new Set(Object.values(KITA_GRUPLARI))];
    const yanlis = karistir(tumKitalar.filter(x => x !== dogru)).slice(0, 3);
    s.hedef = h; s.dogru = dogru; s.siklar = karistir([dogru, ...yanlis]); s.secim = null; s.kademe = kd;
    neredeCiz();
    fotoYukle([h.w]).then(() => { if (s && s.hedef === h) neredeCiz(); });
  }

  function neredeCiz() {
    const k = kutu(), h = s.hedef, I = ist();
    k.hidden = false;
    const img = fotoCache.get(h.w);
    const acik = s.secim != null;
    const dogruMu = s.secim === s.dogru;
    const kd = s.kademe || kademeBilgi(s.seri);
    const kalpler = '❤️'.repeat(s.can) + '🖤'.repeat(Math.max(0, 3 - s.can));
    k.innerHTML = `<div class="ho-kart">
      <div class="eo-ust">
        <div><b>🐾 Nerede Yaşar? · ${kd.ad} (×${kd.carpan})</b><small>${kalpler} · Puan: <b>${s.puan.toLocaleString('tr-TR')}</b></small></div>
        <div class="eo-sayac"><span>🔥 <b>${s.seri}</b></span><span>🏆 <b>${Math.max(I.neredeRekor, s.puan).toLocaleString('tr-TR')}</b></span></div>
        <button class="ho-x" title="Kapat" aria-label="Kapat">✕</button>
      </div>
      <div class="ho-foto">
        ${img ? `<img src="${esc(img)}" alt="${esc(h.ad)}">` : `<div class="ho-yuk">${h.ik || '🐾'} Fotoğraf yükleniyor…</div>`}
        <div class="ho-rozet">${h.ik || '🐾'} <b>${esc(h.ad)}</b></div>
      </div>
      <div class="ho-ipucu">
        ${s.seri < 6 ? `<span>🌿 <b>Yaşam alanı:</b> ${esc(h.habitat)}</span>` : `<span>🍽️ <b>Beslenme:</b> ${esc(h.beslenme)}</span>`}
        <span>⚠️ <b>Durum:</b> ${esc(h.durum)}</span>
      </div>
      <div class="ho-siklar">
        ${s.siklar.map(op => {
          let cls = '';
          if (acik) { if (op === s.dogru) cls = 'dogru'; else if (op === s.secim) cls = 'yanlis'; else cls = 'soluk'; }
          return `<button class="ho-sik ${cls}" data-ho-op="${esc(op)}" ${acik ? 'disabled' : ''}>${esc(op)}</button>`;
        }).join('')}
      </div>
      ${acik ? `<div class="eo-sonuc ${dogruMu ? 'iyi' : 'bitti'}">
        <b>${dogruMu ? `🎉 Doğru! +${kd.puan} puan (${h.bolge})` : s.bitti ? `💀 Canların Bitti! Toplam ${s.puan.toLocaleString('tr-TR')} puan` : `🙈 Yanlış! Doğrusu: ${s.dogru} (${h.bolge})`}</b>
        <small>${esc(h.ozellik)}</small>
        <div class="eo-btns">
          ${!s.bitti ? `<button data-ho="sonraki" class="ana">Sonraki Hayvan ›</button>` : `<button data-ho="nerede" class="ana">🔁 Rekor İçin Tekrar Dene</button><button data-ho="paylas">📋 Paylaş</button><button data-ho="menu">Modlar</button>`}
          <button data-ho="kure">🌍 Kürede Gör</button>
        </div>
      </div>` : ''}
    </div>`;
  }

  // ---------- 2) 🧠 TARİH / DOĞA / KARMA BİLGİNİ (Gittikçe Zorlaşan + ❤️ 3 Can) ----------
  const MOD_AD = { tarih: '🏛️ Tarih Bilgini', doga: '🌿 Doğa Bilgini', karma: '⚡ Tarih + Doğa Karma' };
  const REKOR_KEY = { tarih: 'tarihRekor', doga: 'dogaRekor', karma: 'karmaRekor' };

  function havuzOlustur(alan) {
    const toQ = item => ({ soru: item.s, dogru: item.d, siklar: karistir([item.d, ...item.y]), aciklama: item.a });
    const k = [], o = [], z = [];
    if (alan === 'doga' || alan === 'karma') {
      k.push(...DOGA_BANK.kolay);
      o.push(...DOGA_BANK.orta);
      z.push(...DOGA_BANK.zor, ...dinamikDogaSorulari());
    }
    if (alan === 'tarih' || alan === 'karma') {
      k.push(...TARIH_BANK.kolay);
      o.push(...TARIH_BANK.orta);
      z.push(...TARIH_BANK.zor, ...dinamikTarihSorulari());
    }
    return { kolay: karistir(k).map(toQ), orta: karistir(o).map(toQ), zor: karistir(z).map(toQ) };
  }

  function testBasla(alan) {
    const havuz = havuzOlustur(alan);
    s = { mod: 'test', alan, havuz, gorulen: new Set(), seri: 0, puan: 0, can: 3, secim: null, bitti: false, izler: [], q: null, kademe: kademeBilgi(0) };
    siradakiTestSoru();
  }

  function siradakiTestSoru() {
    const kd = kademeBilgi(s.seri);
    const al = tier => {
      const aday = s.havuz[tier].filter(x => !s.gorulen.has(x.soru));
      return aday.length ? aday[0] : null;
    };
    let q = al(kd.tier) || al('orta') || al('zor') || al('kolay');
    if (!q) {
      s.gorulen.clear();
      s.havuz = havuzOlustur(s.alan);
      q = s.havuz[kd.tier][0] || s.havuz.kolay[0];
    }
    s.gorulen.add(q.soru);
    s.q = q; s.secim = null; s.kademe = kd;
    testCiz();
  }

  function testCiz() {
    const k = kutu(), q = s.q, I = ist();
    k.hidden = false;
    const acik = s.secim != null;
    const dogruMu = s.secim === q.dogru;
    const kd = s.kademe || kademeBilgi(s.seri);
    const rek = I[REKOR_KEY[s.alan]] || 0;
    const kalpler = '❤️'.repeat(s.can) + '🖤'.repeat(Math.max(0, 3 - s.can));
    k.innerHTML = `<div class="ho-kart">
      <div class="eo-ust">
        <div><b>${MOD_AD[s.alan]} · ${kd.ad} (×${kd.carpan})</b><small>${kalpler} · Puan: <b>${s.puan.toLocaleString('tr-TR')}</b></small></div>
        <div class="eo-sayac"><span>🔥 <b>${s.seri}</b></span><span>🏆 <b>${Math.max(rek, s.puan).toLocaleString('tr-TR')}</b></span></div>
        <button class="ho-x" title="Kapat" aria-label="Kapat">✕</button>
      </div>
      <div class="oz-bar">
        <button type="button" class="oz-btn${s.alan === 'tarih' ? ' on' : ''}" data-ho-alan="tarih">🏛️ Tarih</button>
        <button type="button" class="oz-btn${s.alan === 'doga' ? ' on' : ''}" data-ho-alan="doga">🌿 Doğa</button>
        <button type="button" class="oz-btn${s.alan === 'karma' ? ' on' : ''}" data-ho-alan="karma">⚡ İkisi Birden</button>
      </div>
      <div class="ho-soru">${esc(q.soru).replace(/\n/g, '<br>')}</div>
      <div class="ho-siklar">
        ${q.siklar.map(op => {
          let cls = '';
          if (acik) { if (op === q.dogru) cls = 'dogru'; else if (op === s.secim) cls = 'yanlis'; else cls = 'soluk'; }
          return `<button class="ho-sik ${cls}" data-ho-tid="${esc(op)}" ${acik ? 'disabled' : ''}>${esc(op)}</button>`;
        }).join('')}
      </div>
      ${acik ? `<div class="eo-sonuc ${dogruMu ? 'iyi' : 'bitti'}">
        <b>${dogruMu ? `🎉 Doğru! +${kd.puan} puan` : s.bitti ? `💀 Canların Bitti! Toplam ${s.puan.toLocaleString('tr-TR')} puan` : `🙈 Yanlış! Doğrusu: ${q.dogru}`}</b>
        <small>${esc(q.aciklama)}</small>
        <div class="eo-btns">
          ${!s.bitti ? `<button data-ho="test-sonraki" class="ana">Sonraki Soru ›</button>` : `<button data-ho="tekrar" class="ana">🔁 Rekor İçin Tekrar Dene</button><button data-ho="paylas">📋 Paylaş</button><button data-ho="menu">Modlar</button>`}
        </div>
      </div>` : ''}
    </div>`;
  }

  function paylasMetni() {
    if (!s) return '';
    const I = ist();
    if (s.mod === 'nerede') {
      return `🐾 Nerede Yaşar? (Zaman Yolculuğu)\n${s.izler.slice(-15).join('')}\n⭐ ${s.puan.toLocaleString('tr-TR')} Puan · 🔥 Seri: ${s.seri} · 🏆 Rekor: ${I.neredeRekor.toLocaleString('tr-TR')}\n${location.origin}${location.pathname}?oyun=hayvan`;
    }
    const rek = I[REKOR_KEY[s.alan]] || 0;
    return `${MOD_AD[s.alan]} (Zaman Yolculuğu)\n${s.izler.slice(-15).join('')}\n⭐ ${s.puan.toLocaleString('tr-TR')} Puan · 🔥 Seri: ${s.seri} · 🏆 Rekor: ${rek.toLocaleString('tr-TR')}\n${location.origin}${location.pathname}?oyun=hayvan`;
  }

  function tikla(ev) {
    if (ev.target === el || ev.target.closest('.ho-x')) return kapat();
    const alBtn = ev.target.closest('[data-ho-alan]');
    if (alBtn) { testBasla(alBtn.dataset.hoAlan); return; }
    const op = ev.target.closest('[data-ho-op]');
    if (op && s && s.mod === 'nerede' && s.secim == null) {
      s.secim = op.dataset.hoOp;
      const kd = s.kademe || kademeBilgi(s.seri);
      if (s.secim === s.dogru) {
        s.seri++; s.puan += kd.puan; s.izler.push('🟩');
        istKaydet(I => { if (s.puan > I.neredeRekor) I.neredeRekor = s.puan; });
        if (window.ZY && window.ZY.xpEkle) window.ZY.xpEkle(Math.round(kd.puan / 15), 'hayvan');
      } else {
        s.can--; s.izler.push('🟥');
        if (s.can <= 0) { s.bitti = true; istKaydet(I => { I.oyun++; }); }
      }
      neredeCiz();
      return;
    }
    const tid = ev.target.closest('[data-ho-tid]');
    if (tid && s && s.mod === 'test' && s.secim == null) {
      s.secim = tid.dataset.hoTid;
      const kd = s.kademe || kademeBilgi(s.seri);
      const dogru = s.secim === s.q.dogru;
      if (dogru) {
        s.seri++; s.puan += kd.puan; s.izler.push('🟩');
        const rk = REKOR_KEY[s.alan];
        istKaydet(I => { if (s.puan > (I[rk] || 0)) I[rk] = s.puan; });
        if (window.ZY && window.ZY.xpEkle) window.ZY.xpEkle(Math.round(kd.puan / 15), 'hayvan');
      } else {
        s.can--; s.izler.push('🟥');
        if (s.can <= 0) { s.bitti = true; istKaydet(I => { I.oyun++; }); }
      }
      testCiz();
      return;
    }
    const b = ev.target.closest('[data-ho]');
    if (!b) return;
    const k = b.dataset.ho;
    if (k === 'nerede') neredeBasla();
    else if (k === 'tarih' || k === 'doga' || k === 'karma') testBasla(k);
    else if (k === 'tekrar' && s) testBasla(s.alan || 'karma');
    else if (k === 'menu') secim();
    else if (k === 'sonraki') neredeTur();
    else if (k === 'test-sonraki') siradakiTestSoru();
    else if (k === 'kure' && s && s.hedef) {
      const h = s.hedef; kapat();
      if (window.ZY && window.ZY.hayvanKurede) window.ZY.hayvanKurede(h.id);
    } else if (k === 'paylas') {
      const t = paylasMetni();
      (navigator.clipboard ? navigator.clipboard.writeText(t) : Promise.reject()).then(
        () => { b.textContent = '✓ Kopyalandı'; },
        () => { b.textContent = 'Kopyalanamadı'; }
      );
    }
  }

  function ac(baslangicMod) {
    kutu().hidden = false;
    if (baslangicMod === 'tarih' || baslangicMod === 'doga' || baslangicMod === 'karma') { testBasla(baslangicMod); return; }
    if (baslangicMod === 'nerede') { neredeBasla(); return; }
    secim();
  }
  function kapat() { if (el) el.hidden = true; }
  function rekor() { const I = ist(); return Math.max(I.dogaRekor, I.tarihRekor, I.karmaRekor, I.neredeRekor); }

  return { ac, kapat, rekor };
})();
