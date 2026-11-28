// 🐉 Mitler ve Efsaneler (30 yer). Her kayıt bir anlatıyı, onun geçtiği yere bağlar.
// Üç şey ayrı tutulur: anlatının kendisi (anlati), gerçekte bilinenler (gercek) ve en eski yazılı kaynaklar (kaynak).
// "gercek" alanında kanıtlanmamış hiçbir şey kesinmiş gibi yazılmaz. ik: küredeki simge (img/simgeler.webp içinde olmalı).
'use strict';
window.ATLAS_MITLER = [
  {
    id: 'truva', ad: 'Truva Savaşı ve Tahta At', ik: '🐎', ll: [39.957, 26.239],
    yer: 'Hisarlık, Çanakkale, Türkiye', kultur: 'Antik Yunan destan geleneği',
    anlati: 'Destana göre Akhalar, Sparta kraliçesi Helene\'nin kaçırılması üzerine Truva\'yı on yıl kuşattı. Kent, içine asker saklanmış dev bir tahta atın surlardan içeri alınmasıyla düştü.',
    gercek: 'Hisarlık höyüğünde 1870\'lerden bu yana kazı yapılıyor; üst üste kurulmuş dokuz ana yerleşim katmanı bulundu. Geç Tunç Çağı katmanlarında (Troya VI ve VIIa) güçlü surlar, VIIa\'da ise MÖ 1180 dolaylarına tarihlenen yangın ve yıkım izleri var. Bu izlerin destandaki savaşa ait olduğu kanıtlanmış değildir; tahta at için arkeolojik bir bulgu yoktur.',
    kaynak: 'Homeros, İlyada (MÖ 8. yüzyıl; savaşın yalnızca birkaç haftasını anlatır). Tahta at Odysseia\'da kısaca geçer; ayrıntılı anlatım Vergilius\'un Aeneis\'indedir (MÖ 1. yüzyıl).',
    w: 'Troy'
  },
  {
    id: 'atlantis', ad: 'Atlantis', ik: '🌊', ll: [35.9, -7.5],
    yer: 'Platon\'a göre «Herakles Sütunları\'nın ötesinde», Atlas Okyanusu\'nda', kultur: 'Antik Yunan felsefesi',
    anlati: 'Platon\'un anlattığına göre Atlantis, Herakles Sütunları\'nın (Cebelitarık Boğazı) ötesinde büyük bir ada devletiydi. Atina\'ya saldırdı, yenildi ve bir gün bir gecede denize gömüldü. Platon olayı Solon\'dan 9.000 yıl öncesine yerleştirir.',
    gercek: 'Atlantis\'i anlatan bağımsız bir antik kaynak ya da arkeolojik bulgu yoktur; bilinen bütün anlatımlar Platon\'a dayanır. Araştırmacıların çoğu öyküyü, ideal devlet düşüncesini anlatmak için kurulmuş bir örnek sayar. Santorini (Thera) yanardağının MÖ 1600 dolaylarındaki patlamasının esin kaynağı olabileceği öne sürülmüştür; bu da kanıtlanmamış bir varsayımdır. Küredeki işaret gerçek bir yeri değil, Platon\'un tarif ettiği yönü gösterir.',
    kaynak: 'Platon, Timaios ve Kritias diyalogları (MÖ 360 dolayları).',
    w: 'Atlantis'
  },
  {
    id: 'nuh', ad: 'Nuh\'un Gemisi', ik: '🚢', ll: [39.702, 44.298],
    yer: 'Ağrı Dağı, Türkiye (İslam geleneğinde Şırnak\'taki Cudi Dağı)', kultur: 'Yahudilik, Hristiyanlık ve İslam; daha eski Mezopotamya tufan anlatıları',
    anlati: 'Anlatıya göre büyük bir tufan yeryüzünü kapladı; Nuh, ailesini ve hayvanları bir gemiyle kurtardı. Sular çekilince gemi bir dağa oturdu.',
    gercek: 'Gemiye ait olduğu bilimsel olarak doğrulanmış bir kalıntı bulunmamıştır. Ağrı yakınındaki gemi biçimli Durupınar oluşumunu jeologlar doğal bir kaya yapısı olarak değerlendirir. Tufan anlatısının çok daha eski Mezopotamya örnekleri vardır: Atrahasis Destanı ve Gılgamış Destanı\'nın 11. tableti.',
    kaynak: 'Tevrat, Yaratılış 8:4 (gemi «Ararat dağlarına» oturur); Kur\'an, Hûd Suresi 44. ayet (gemi «Cûdî»ye oturur).',
    w: 'Noah\'s Ark'
  },
  {
    id: 'gilgamis', ad: 'Gılgamış\'ın Ölümsüzlük Arayışı', ik: '📜', ll: [31.322, 45.637],
    yer: 'Uruk (bugünkü Varka), Irak', kultur: 'Sümer ve Babil',
    anlati: 'Uruk kralı Gılgamış, dostu Enkidu\'nun ölümünden sonra ölümsüzlüğün sırrını aramaya çıkar. Tufandan sağ kurtulan Utnapiştim\'i bulur ama ölümsüzlüğü elde edemez; kentine döner ve yaptırdığı surlarla anılmayı kabullenir.',
    gercek: 'Gılgamış\'ın adı Sümer Kral Listesi\'nde Uruk kralı olarak geçer. MÖ 2800 ile 2500 arasında yaşamış gerçek bir kral olabileceği düşünülür; varlığını kesin olarak gösteren bir belge yoktur, ancak Ur\'da bulunan çok eski bir metinde adının geçtiği öne sürülmüştür. Sonraki döneme ait Tummal Yazıtı, Uruk surlarının yapımını ona bağlar.',
    kaynak: 'Gılgamış\'la ilgili Sümerce şiirler (MÖ 2100 dolayları) ve Akadca Gılgamış Destanı; 12 tabletlik standart sürüm MÖ 13. ile 10. yüzyıllar arasında derlenmiştir.',
    w: 'Gilgamesh'
  },
  {
    id: 'minotor', ad: 'Minotor ve Labirent', ik: '🐂', ll: [35.298, 25.163],
    yer: 'Knossos, Girit, Yunanistan', kultur: 'Antik Yunan; Minos uygarlığı',
    anlati: 'Girit kralı Minos, yarı insan yarı boğa Minotor\'u Daidalos\'un yaptığı labirente kapattı. Atinalı Theseus, Ariadne\'nin verdiği iplik sayesinde labirentte yolunu kaybetmeden canavarı öldürüp geri döndü.',
    gercek: 'Arthur Evans\'ın 1900\'de başlattığı kazılar Knossos\'ta çok katlı, geniş bir saray ortaya çıkardı. Duvar resimlerinde boğanın üstünden atlayan gençler görülür. Karmaşık planlı sarayın ve boğa törenlerinin efsaneye esin vermiş olabileceği düşünülür; bir labirente ya da Minotor\'a ait bulgu yoktur.',
    kaynak: 'Plutarkhos, Theseus\'un Yaşamı; Ovidius, Dönüşümler (8. kitap); Apollodoros, Bibliotheka.',
    w: 'Knossos'
  },
  {
    id: 'romulus', ad: 'Romulus ve Remus', ik: '🐺', ll: [41.889, 12.487],
    yer: 'Palatino Tepesi, Roma, İtalya', kultur: 'Antik Roma',
    anlati: 'Tiber Nehri\'ne bırakılan ikiz bebekler Romulus ve Remus\'u bir dişi kurt emzirdi, bir çoban büyüttü. İkizler bir kent kurmaya karar verdi; çıkan kavgada Romulus kardeşini öldürdü ve kente kendi adını verdi.',
    gercek: 'Palatino Tepesi\'nde MÖ 9. ya da 8. yüzyıla tarihlenen kulübe kalıntıları bulunmuştur; geleneksel kuruluş tarihi de bu döneme düşer. İkizlerin ve dişi kurdun öyküsü ise tarihçilerce efsane sayılır.',
    kaynak: 'Livius, Ab Urbe Condita (1. kitap); Plutarkhos, Romulus\'un Yaşamı. Geleneksel kuruluş tarihi MÖ 753\'tür (Varro\'nun hesabı).',
    w: 'Romulus and Remus'
  },
  {
    id: 'eldorado', ad: 'El Dorado', ik: '✨', ll: [4.977, -73.775],
    yer: 'Guatavita Gölü, Kolombiya', kultur: 'Muisca halkı; İspanyol fetih dönemi anlatıları',
    anlati: '«El Dorado» İspanyolcada «altın kaplı adam» demektir. Anlatıya göre Muisca halkının yeni önderi, bedeni altın tozuyla kaplanmış olarak bir salla Guatavita Gölü\'ne açılır, altın ve zümrüt sunularını suya bırakırdı. Öykü zamanla, hiç bulunamayan bir altın kente dönüştü.',
    gercek: 'Altın kent hiç bulunmadı. Ancak tören anlatısını destekleyen bir buluntu var: 1969\'da Pasca yakınlarındaki bir mağarada bulunan altın Muisca salı, bir önderi ve eşlikçilerini gösterir; Bogotá\'daki Altın Müzesi\'nde sergilenir. Göl, 16. yüzyıldan başlayarak altın bulmak için birkaç kez boşaltılmaya çalışıldı.',
    kaynak: 'Juan Rodríguez Freyle, El Carnero (1636\'da yazıldı).',
    w: 'Lake Guatavita'
  },
  {
    id: 'arthur', ad: 'Kral Arthur', ik: '👑', ll: [50.668, -4.759],
    yer: 'Tintagel, Cornwall, İngiltere', kultur: 'Orta Çağ Britanya ve Fransa edebiyatı',
    anlati: 'Efsaneye göre Kral Arthur\'un öyküsü Tintagel\'de başlar. Arthur, Excalibur adlı kılıcı taşır ve Yuvarlak Masa şövalyeleriyle Britanya\'yı Sakson istilasına karşı savunur.',
    gercek: 'Arthur\'un yaşadığını gösteren kendi döneminden bir belge yoktur; tarihçilerin çoğu onu efsanevi bir kişi sayar. Tintagel\'deki kazılar ise 5. ve 6. yüzyıllarda burada Akdeniz\'den çanak çömlek getirten varlıklı bir yerleşim olduğunu göstermiştir. Bugün görülen şato kalıntıları 13. yüzyıla aittir.',
    kaynak: 'Monmouthlu Geoffrey, Historia Regum Britanniae (1136 dolayları): Arthur\'un Tintagel\'de ana rahmine düştüğünü anlatır.',
    w: 'Tintagel Castle'
  },
  {
    id: 'argonautlar', ad: 'Altın Post ve Argonautlar', ik: '⛵', ll: [42.14, 41.67],
    yer: 'Kolkhis: Rioni (antik Phasis) Nehri ağzı, Gürcistan', kultur: 'Antik Yunan destan geleneği',
    anlati: 'İason ve arkadaşları Argo adlı gemiyle Karadeniz\'i aşıp Kolkhis\'e varır. Amaçları, uyumayan bir ejderin koruduğu altın postu almaktır. Kralın kızı Medeia\'nın yardımıyla postu ele geçirip kaçarlar.',
    gercek: 'Kolkhis gerçek bir bölgeydi; bugünkü Batı Gürcistan\'daki Vani\'de, Kolkhis dönemine ait zengin mezarları olan bir kent kazılmıştır. Antik coğrafyacı Strabon, bu bölgede dağ derelerinin taşıdığı altın tozunun koyun postlarıyla toplandığını yazar ve efsanenin buradan doğmuş olabileceğini söyler. İason\'un yolculuğuna ait bir bulgu yoktur.',
    kaynak: 'Rodoslu Apollonios, Argonautika (MÖ 3. yüzyıl); Strabon, Geographika (11. kitap).',
    w: 'Golden Fleece'
  },
  {
    id: 'delphi', ad: 'Delphi Kâhini', ik: '🏛', ll: [38.482, 22.501],
    yer: 'Delphi, Yunanistan', kultur: 'Antik Yunan',
    anlati: 'Anlatıya göre Zeus dünyanın ortasını bulmak için iki kartal saldı; kartallar Delphi\'de buluştu. Burada Apollon tapınağında Pythia adlı rahibe, tanrının sözlerini soru soranlara iletirdi.',
    gercek: 'Kâhinlik gerçek bir kurumdu: kutsal alan MÖ 8. yüzyıldan MS 4. yüzyılın sonuna kadar çalıştı, kentler ve krallar önemli kararlardan önce buraya danıştı. Pythia\'nın yerden çıkan bir gazın etkisine girdiği antik yazarlarca anlatılır. 1980\'lerde başlayan bir araştırma tapınağın altında fay hatları bulunduğunu, 2001\'de alınan su örnekleri de kaynak suyunda etilen gazı izleri olduğunu bildirdi; bu açıklama hâlâ tartışmalıdır.',
    kaynak: 'Herodotos, Tarih; Plutarkhos\'un Delphi üzerine yazıları (kendisi burada rahiplik yaptı).',
    w: 'Delphi'
  },
  {
    id: 'midas', ad: 'Kral Midas\'ın Altın Dokunuşu', ik: '🪙', ll: [39.652, 31.994],
    yer: 'Gordion (Yassıhöyük), Polatlı, Ankara, Türkiye', kultur: 'Frigya; Antik Yunan ve Roma edebiyatı',
    anlati: 'Tanrı Dionysos, Frig kralı Midas\'a bir dilek hakkı verir. Midas dokunduğu her şeyin altına dönmesini ister; yemeği de altına dönünce pişman olur ve Paktolos Çayı\'nda yıkanarak bu güçten kurtulur.',
    gercek: 'Midas gerçek bir kraldı: Asur kralı II. Sargon\'un yıllıklarında MÖ 8. yüzyılın sonunda «Muşkili Mita» adıyla geçer. Gordion\'daki en büyük tümülüs «Midas Höyüğü» olarak bilinir; ancak ahşap mezar odası MÖ 740 dolaylarına tarihlendiği için bugün genellikle Midas\'ın babasına ait olduğu düşünülür. Altın dokunuş öyküsü efsanedir.',
    kaynak: 'Ovidius, Dönüşümler (11. kitap).',
    w: 'Midas'
  },
  {
    id: 'amazonlar', ad: 'Amazonlar', ik: '🏹', ll: [41.21, 36.97],
    yer: 'Themiskyra: Terme Çayı (antik Thermodon), Samsun, Türkiye', kultur: 'Antik Yunan',
    anlati: 'Antik yazarlara göre Amazonlar, Thermodon Irmağı kıyısındaki Themiskyra\'da yaşayan, yalnızca kadınlardan oluşan savaşçı bir halktı. Truva Savaşı\'na katıldıkları, Herakles ve Theseus\'la savaştıkları anlatılır.',
    gercek: 'Themiskyra kenti bulunamamıştır. Buna karşılık Karadeniz\'in kuzeyindeki bozkırlarda, İskit ve Sarmat mezarlarında silahlarıyla gömülmüş kadınlar ortaya çıkarıldı; bazılarının kemiklerinde savaş yaraları var. Efsanenin bu atlı göçebe kadın savaşçılardan esinlenmiş olabileceği düşünülür.',
    kaynak: 'Homeros, İlyada (Amazonlardan söz eder); Herodotos, Tarih (4. kitap).',
    w: 'Amazons'
  },
  {
    id: 'sahmaran', ad: 'Şahmaran', ik: '🐍', ll: [36.918, 34.895],
    yer: 'Tarsus, Mersin, Türkiye (anlatı Mardin ve çevresinde de yaygındır)', kultur: 'Anadolu, Mezopotamya ve İran halk anlatıları',
    anlati: 'Şahmaran, belden yukarısı kadın, aşağısı yılan olan bilge yılanlar şahıdır. Yeraltındaki ülkesine düşen bir genci konuk eder ve yerini kimseye söylememesi için söz alır. Genç sözünü tutamaz; Şahmaran yakalanıp öldürülür, bilgeliği ise gence geçer.',
    gercek: 'Şahmaran bir halk anlatısıdır; tarihsel bir karşılığı yoktur. Tarsus\'ta anlatının geçtiğine inanılan ve «Şahmeran Hamamı» adıyla bilinen tarihî bir hamam vardır. Şahmaran resimleri Mardin ve çevresinde bakır işlerinde ve camaltı resimlerinde bugün de yapılır.',
    kaynak: 'Sözlü gelenek. Yazılı anlatımlar: Mûsâ Abdî, Câmasbnâme (1429–1430\'da tamamlandı); benzer bir öykü Binbir Gece Masalları\'nda «Yılanlar Kraliçesi» adıyla yer alır.',
    w: 'Shahmaran'
  },
  {
    id: 'ergenekon', ad: 'Ergenekon', ik: '🐺', ll: [49, 88],
    yer: 'Yeri bilinmiyor (işaret Altay Dağları\'nı temsilen konmuştur)', kultur: 'Türk ve Moğol köken anlatıları',
    anlati: 'Anlatıya göre savaşta yenilen bir topluluktan geriye kalanlar, sarp dağlarla çevrili Ergenekon adlı ovaya sığınır. Kuşaklar boyunca çoğalırlar ve ovaya sığmaz olurlar. Bir demirci dağdaki demir madenini eritir; açılan geçitten dışarı çıkarlar. Kimi anlatımlarda yolu bir bozkurt gösterir.',
    gercek: 'Ergenekon\'un yeri bilinmiyor ve arkeolojik bir karşılığı yok. En eski yazılı anlatımda öykü Moğolların kökeni olarak geçer; sonraki kaynaklarda ve Türk edebiyatında Türklerin destanı olarak yer alır. Demircilik motifi eski kaynaklarla uyumludur: Çin yıllıkları, Göktürklerin atalarının Altay Dağları\'nda demircilik yaptığını yazar.',
    kaynak: 'Reşîdüddin, Câmiü\'t-Tevârîh (14. yüzyıl başı); Ebülgazi Bahadır Han, Şecere-i Türk (17. yüzyıl).',
    w: 'Altai Mountains'
  },
  {
    id: 'yediuyurlar', ad: 'Yedi Uyurlar (Ashâb-ı Kehf)', ik: '🕯', ll: [37.944, 27.357],
    yer: 'Efes, Selçuk, İzmir, Türkiye (Tarsus ve Afşin gibi başka yerler de aynı anlatıyı sahiplenir)', kultur: 'Hristiyan ve İslam geleneği',
    anlati: 'İnançları yüzünden kovuşturulan bir grup genç bir mağaraya sığınır ve orada derin bir uykuya dalar. Uyandıklarında aradan yüzyıllar geçmiştir. Hristiyan anlatımında olay Roma imparatoru Decius zamanında (MS 250 dolayı) başlar, gençler II. Theodosius zamanında uyanır.',
    gercek: 'Efes\'te Panayır Dağı\'nın eteğinde, anlatıya bağlanan bir mağara kilisesi ve çevresinde 5. ve 6. yüzyıllara ait yüzlerce mezar kazılmıştır; burası Orta Çağ boyunca hac yeriydi. Uyuyan gençlere ait bir kanıt yoktur ve aynı anlatıyı başka kentler de kendi mağaralarına bağlar.',
    kaynak: 'Suruçlu Yakub\'un Süryanice şiiri (5. yüzyıl sonu – 6. yüzyıl başı); Kur\'an, Kehf Suresi.',
    w: 'Seven Sleepers'
  },
  {
    id: 'babilkulesi', ad: 'Babil Kulesi', ik: '🧱', ll: [32.536, 44.421],
    yer: 'Babil, Irak', kultur: 'Yahudilik ve Hristiyanlık; Mezopotamya',
    anlati: 'Anlatıya göre tek bir dil konuşan insanlar, tepesi göğe erişecek bir kule yapmaya girişir. Tanrı dillerini karıştırır; birbirlerini anlayamaz olurlar, yapı yarım kalır ve insanlar yeryüzüne dağılır.',
    gercek: 'Anlatının esin kaynağı olarak Babil\'deki Etemenanki zigguratı gösterilir: tanrı Marduk\'a adanmış, tabanı yaklaşık 91 metre olan basamaklı bir tapınak kulesiydi ve MÖ 6. yüzyılda II. Nabukadnezar döneminde tamamlandı. Bugün yalnızca temel izleri duruyor.',
    kaynak: 'Tevrat, Yaratılış 11:1–9.',
    w: 'Tower of Babel'
  },
  {
    id: 'osiris', ad: 'Osiris\'in Ölümü ve Dirilişi', ik: '🏺', ll: [26.185, 31.919],
    yer: 'Abydos, Mısır', kultur: 'Antik Mısır',
    anlati: 'Kral Osiris, kıskanç kardeşi Seth tarafından öldürülür ve bedeni parçalanır. Eşi İsis parçaları toplayıp onu yeniden diriltir. Osiris ölüler ülkesinin hükümdarı olur; oğlu Horus tahtı Seth\'ten geri alır.',
    gercek: 'Abydos, Osiris inancının en önemli merkeziydi ve her yıl tanrının öyküsünü canlandıran törenlere sahne olurdu. Mısırlılar buradaki çok eski bir kral mezarını (I. Hanedan kralı Djer\'in mezarı) Osiris\'in mezarı sayıp binlerce adak bıraktı. I. Seti\'nin tapınağı ve Osireion bugün de ayaktadır.',
    kaynak: 'Piramit Metinleri (MÖ 2400 dolayları); Plutarkhos, İsis ve Osiris Üzerine (MS 2. yüzyıl başı).',
    w: 'Osiris myth'
  },
  {
    id: 'seba', ad: 'Seba Melikesi (Belkıs)', ik: '👑', ll: [15.427, 45.337],
    yer: 'Marib, Yemen', kultur: 'Yahudilik, Hristiyanlık ve İslam; Etiyopya geleneği',
    anlati: 'Seba ülkesinin kraliçesi, Süleyman\'ın bilgeliğini duyar ve onu sınamak için zengin armağanlarla ziyaretine gider. Etiyopya geleneğinde bu ziyaretten doğan oğul Menelik, Etiyopya krallarının atası sayılır.',
    gercek: 'Saba Krallığı gerçekti: başkenti Marib\'te büyük bir sulama barajı ve «Mahram Bilkıs» adıyla bilinen Awwam Tapınağı\'nın kalıntıları duruyor; krallık buhur ticaretiyle zenginleşmişti. Kraliçenin kendisine ait bir yazıt ya da başka bir kanıt bulunmamıştır.',
    kaynak: 'Tevrat, 1. Krallar 10; Kur\'an, Neml Suresi; Kebra Nagast (Etiyopya, 14. yüzyıl).',
    w: 'Queen of Sheba'
  },
  {
    id: 'simurg', ad: 'Simurg ve Zâl', ik: '🪶', ll: [35.951, 52.109],
    yer: 'Elburz Dağları, İran (işaret Demavend Dağı\'nı temsilen konmuştur)', kultur: 'İran destan geleneği',
    anlati: 'Pehlivan Sâm, saçları bembeyaz doğan oğlu Zâl\'ı uğursuz sayıp Elburz Dağı\'na bırakır. Dev kuş Simurg bebeği yuvasına götürüp büyütür. Zâl ülkesine dönerken Simurg ona bir tüyünü verir: başı sıkışınca tüyü yakacak, Simurg yardıma gelecektir.',
    gercek: 'Simurg mitolojik bir kuştur. Kökeni Şehnâme\'den çok daha eskidir: Zerdüşt dininin kutsal metni Avesta\'da «Saēna» adlı kuş olarak geçer. Zâl\'ın oğlu Rüstem, İran destanlarının en ünlü kahramanıdır.',
    kaynak: 'Firdevsî, Şehnâme (1010\'da tamamlandı).',
    w: 'Simurgh'
  },
  {
    id: 'ramakoprusu', ad: 'Rama\'nın Köprüsü', ik: '🌉', ll: [9.12, 79.52],
    yer: 'Hindistan ile Sri Lanka arasındaki sığlıklar (Rama Setu / Âdem Köprüsü)', kultur: 'Hint destan geleneği',
    anlati: 'Prens Rama\'nın eşi Sita, Lanka kralı Ravana tarafından kaçırılır. Rama\'ya yardım eden maymun ordusu, denize taşlar atarak Lanka\'ya uzanan bir köprü kurar; Rama köprüden geçip Sita\'yı kurtarır.',
    gercek: 'Hindistan\'ın Rameswaram Adası ile Sri Lanka\'nın Mannar Adası arasında yaklaşık 48 kilometre boyunca uzanan bir kireçtaşı sığlıklar zinciri gerçekten vardır ve uydu görüntülerinde açıkça seçilir. Jeologlar bunu doğal bir oluşum olarak değerlendirir; insan yapımı olduğuna dair kanıt yoktur.',
    kaynak: 'Valmiki, Ramayana (Yuddha Kanda bölümü).',
    w: 'Adam\'s Bridge'
  },
  {
    id: 'buyukyu', ad: 'Büyük Yu ve Tufan', ik: '🌊', ll: [35.83, 102.75],
    yer: 'Sarı Irmak havzası, Çin (işaret Jishi Boğazı\'nı gösterir)', kultur: 'Çin',
    anlati: 'Anlatıya göre Sarı Irmak kuşaklar boyunca taşıp ülkeyi sular altında bıraktı. Yu, suyun önüne set çekmek yerine kanallar açarak onu denize akıttı; on üç yıl çalıştı ve bu sürede evinin önünden üç kez geçtiği hâlde içeri girmedi. Sonunda Xia hanedanını kurdu.',
    gercek: 'Yu\'nun ve Xia hanedanının varlığı kesin olarak kanıtlanmış değildir. 2016\'da yayımlanan bir araştırma, Sarı Irmak\'ın yukarı kesimindeki Jishi Boğazı\'nda bir heyelan setinin yıkılmasıyla MÖ 1920 dolaylarında çok büyük bir taşkın yaşandığını öne sürdü ve bunun anlatıya kaynaklık etmiş olabileceğini belirtti. Bu yorum bilim insanları arasında tartışmalıdır.',
    kaynak: 'Shujing (Belgeler Kitabı), «Yu\'nun Haracı» bölümü; Sima Qian, Shiji (MÖ 100 dolayları).',
    w: 'Yu the Great'
  },
  {
    id: 'amaterasu', ad: 'Amaterasu ve Mağara', ik: '⛩', ll: [34.455, 136.725],
    yer: 'İse Tapınağı, Mie, Japonya', kultur: 'Japonya (Şinto)',
    anlati: 'Güneş tanrıçası Amaterasu, kardeşi Susanoo\'nun taşkınlıklarına öfkelenip bir mağaraya kapanır; dünya karanlığa gömülür. Öteki tanrılar mağaranın önünde bir ayna asıp şenlik yapar. Merak edip dışarı bakan Amaterasu mağaradan çıkarılır ve ışık geri döner.',
    gercek: 'İse\'deki iç tapınak Amaterasu\'ya adanmıştır ve anlatıdaki aynanın burada saklandığına inanılır; ayna halka gösterilmez. Tapınak 7. yüzyılın sonundan beri yaklaşık her yirmi yılda bir, aynı ölçülerle yeniden yapılır. Japon imparatorluk ailesi soyunu geleneksel olarak Amaterasu\'ya bağlar.',
    kaynak: 'Kojiki (712) ve Nihon Shoki (720).',
    w: 'Amaterasu'
  },
  {
    id: 'uluru', ad: 'Uluru ve Kuniya ile Liru', ik: '🏜', ll: [-25.345, 131.036],
    yer: 'Uluru, Kuzey Toprakları, Avustralya', kultur: 'Anangu halkı',
    anlati: 'Anangu halkının anlatılarına göre piton kadın Kuniya ile zehirli yılan adam Liru burada savaştı. Kayanın güney yüzündeki oyuklar ve çizgiler bu savaşın izleridir. Anlatıların bir bölümü yalnızca topluluk içinde aktarılır.',
    gercek: 'Uluru, yaklaşık 550 milyon yıl önce biriken kumtaşından oluşan, çevresindeki düzlükten 348 metre yükselen tek parça bir kayadır. Anangu halkı için kutsaldır; arazi 1985\'te onlara geri verildi ve kayaya tırmanmak 2019\'da yasaklandı.',
    kaynak: 'Anangu sözlü geleneği (Tjukurpa).',
    w: 'Uluru'
  },
  {
    id: 'maui', ad: 'Māui\'nin Balığı', ik: '🐟', ll: [-38.9, 175.8],
    yer: 'Kuzey Adası, Yeni Zelanda', kultur: 'Māori ve Polinezya',
    anlati: 'Yarı tanrı Māui, kardeşleriyle balığa çıkar ve büyülü oltasıyla denizin dibinden dev bir balık çeker. Bu balık Yeni Zelanda\'nın Kuzey Adası olur; kardeşlerinin balığı parçalamaya çalışması adanın dağlarını ve vadilerini oluşturur.',
    gercek: 'Kuzey Adası\'nın Māori dilindeki adı bugün de «Te Ika-a-Māui», yani «Māui\'nin balığı»dır; Güney Adası\'nın adlarından biri de «Māui\'nin kanosu» anlamına gelir. Polinezyalı denizciler Yeni Zelanda\'ya 1250–1300 dolaylarında ulaştı.',
    kaynak: 'Māori sözlü geleneği; ilk kapsamlı yazılı derleme George Grey, Polynesian Mythology (1855).',
    w: 'Māui (Māori mythology)'
  },
  {
    id: 'moai', ad: 'Yürüyen Moai Heykelleri', ik: '🗿', ll: [-27.12, -109.35],
    yer: 'Paskalya Adası (Rapa Nui), Şili', kultur: 'Rapa Nui halkı',
    anlati: 'Ada halkının anlatılarına göre dev taş heykeller, yontuldukları taş ocağından durdukları yerlere «yürüyerek» gitti; onları kutsal bir güç (mana) hareket ettirdi.',
    gercek: 'Adada yaklaşık 900 moai vardır ve çoğu Rano Raraku yanardağındaki taş ocağında yontulmuştur. 2012\'de duyurulan bir deneyde 18 kişi, üç halat kullanarak 4 tondan ağır bir kopyayı sağa sola sallayıp dik durumda ilerletmeyi başardı. Bu, «yürüdüler» anlatısının gerçek bir taşıma yöntemini hatırlatıyor olabileceğini gösterdi; heykellerin nasıl taşındığı konusunda tek bir görüş yoktur.',
    kaynak: 'Rapa Nui sözlü geleneği.',
    w: 'Moai'
  },
  {
    id: 'tenochtitlan', ad: 'Kartal ve Kaktüs: Tenochtitlan\'ın Kuruluşu', ik: '🦅', ll: [19.435, -99.131],
    yer: 'Meksiko, Meksika', kultur: 'Mexica (Aztek)',
    anlati: 'Tanrı Huitzilopochtli, göç eden Mexica halkına bir işaret verir: bir kaktüsün üstüne konmuş kartalı gördükleri yerde kentlerini kuracaklardır. İşareti Texcoco Gölü\'ndeki bir adada görürler ve Tenochtitlan\'ı kurarlar.',
    gercek: 'Tenochtitlan gerçekten göldeki bir adada kuruldu; geleneksel kuruluş tarihi 1325\'tir. Kentin ana tapınağı Templo Mayor\'un kalıntıları, 1978\'de elektrik işçilerinin büyük bir taş kabartma bulmasıyla bugünkü Meksiko\'nun merkezinde ortaya çıkarıldı. Kaktüsteki kartal bugün Meksika bayrağındadır.',
    kaynak: 'Codex Mendoza (1541 dolayları); Crónica Mexicayotl.',
    w: 'Tenochtitlan'
  },
  {
    id: 'mancocapac', ad: 'Manco Cápac ve Altın Asa', ik: '☀', ll: [-16.02, -69.18],
    yer: 'Güneş Adası, Titicaca Gölü, Bolivya', kultur: 'İnka',
    anlati: 'Bir anlatıya göre Güneş tanrısı İnti, çocukları Manco Cápac ile Mama Ocllo\'yu Titicaca Gölü\'nden yeryüzüne çıkarır ve ellerine altın bir asa verir. Asanın toprağa tümüyle gömüldüğü yerde duracaklardır; orası Cusco olur. Başka bir anlatıda İnkaların ataları Cusco yakınındaki bir mağaradan çıkar.',
    gercek: 'Titicaca Gölü\'ndeki Güneş Adası\'nda İnkaların kutsal saydığı bir kaya ve çevresinde tapınak kalıntıları vardır; ada önemli bir hac yeriydi. Cusco, İnka İmparatorluğu\'nun başkentiydi. Manco Cápac\'ın gerçek bir kişi olup olmadığı bilinmiyor. Titicaca anlatısı ilk kez 1609\'da yazıya geçtiği için ne kadar eski olduğu da tartışılır.',
    kaynak: 'Inca Garcilaso de la Vega, Comentarios Reales (1609); Juan de Betanzos (1551).',
    w: 'Manco Cápac'
  },
  {
    id: 'sundiata', ad: 'Sundiata Destanı', ik: '🦁', ll: [11.38, -8.38],
    yer: 'Niani (geleneksel başkent), Gine', kultur: 'Mande halkları; Mali İmparatorluğu',
    anlati: 'Destana göre Sundiata çocukken yürüyemiyordu ve annesiyle birlikte sürgüne gönderildi. Büyüyünce halkını topladı, büyücü kral Sumanguru\'yu Kirina Savaşı\'nda yendi ve Mali İmparatorluğu\'nu kurdu. Destanı kuşaktan kuşağa «griot» denen anlatıcılar aktarır.',
    gercek: 'Sundiata Keita gerçek bir hükümdardı ve Mali İmparatorluğu\'nu 13. yüzyılda kurdu; Kirina Savaşı 1235 dolaylarına tarihlenir. Tarihçi İbn Haldun ondan «Mari Cata» adıyla söz eder. Çocukluğuna ve büyüye ilişkin bölümler destanın anlatı geleneğine aittir.',
    kaynak: 'Mande sözlü geleneği; yazıya geçiren Djibril Tamsir Niane (1960). İbn Haldun, Kitâbü\'l-İber (14. yüzyıl).',
    w: 'Epic of Sundiata'
  },
  {
    id: 'lochness', ad: 'Loch Ness Canavarı', ik: '🦕', ll: [57.32, -4.43],
    yer: 'Loch Ness, İskoçya', kultur: 'İskoç halk anlatısı; 20. yüzyıl basını',
    anlati: 'Anlatıya göre gölün derinliklerinde uzun boyunlu dev bir yaratık yaşar. Öykü 1933\'te gazete haberleriyle dünyaya yayıldı ve yaratığa «Nessie» adı takıldı.',
    gercek: 'Yaratığın varlığına dair kanıt yoktur. En ünlü görüntü olan 1934 tarihli «cerrah fotoğrafı»nın oyuncak bir denizaltıyla yapılmış bir sahtecilik olduğu 1994\'te açıklandı. 2018\'de gölden alınan su örneklerindeki DNA\'yı inceleyen araştırmacılar sürüngen izine rastlamadı; bol miktarda yılan balığı DNA\'sı buldu.',
    kaynak: 'En eski anlatım: Adomnán, Aziz Columba\'nın Hayatı (7. yüzyıl; Ness Nehri\'ndeki bir su canavarından söz eder).',
    w: 'Loch Ness Monster'
  },
  {
    id: 'hamelin', ad: 'Fareli Köyün Kavalcısı', ik: '🐭', ll: [52.104, 9.357],
    yer: 'Hameln, Almanya', kultur: 'Alman halk anlatısı',
    anlati: 'Kavalcı, ezgisiyle kentin farelerini peşine takıp nehre götürür. Kentliler söz verdikleri parayı ödemeyince bu kez çocukları peşine takar ve onlarla birlikte gözden kaybolur.',
    gercek: 'Hameln\'in kayıtları 1284\'te 130 çocuğun kentten ayrılıp geri dönmediğini anlatır; en eski yazılı anlatım 15. yüzyılın ortasına aittir. Fareler öyküye ancak 16. yüzyılda eklenmiştir. Çocuklara ne olduğu bilinmiyor; Doğu Avrupa\'ya göç, salgın ya da kaza gibi açıklamalar öne sürülmüştür ve hiçbiri kanıtlanmamıştır.',
    kaynak: 'Lüneburg el yazması (1440–1450 dolayları); Grimm Kardeşler, Alman Efsaneleri (1816).',
    w: 'Pied Piper of Hamelin'
  }
];
