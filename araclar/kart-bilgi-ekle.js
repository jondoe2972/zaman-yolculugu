// Bilgi kartlarına eksik alanları ekler (bir kez çalıştırıldı; yeniden çalıştırılırsa var olan alanı atlar):
//   data/atlas/nehirler.js   → kaynak (nerede, nasıl doğar), dokulur (nereye, nasıl dökülür)
//   data/atlas/okyanus.js    → baglanti (hangi boğazlarla hangi sulara bağlanır, hangi nehirler dökülür)
//   data/yasam-doga*.js      → gocNeden (göç eden hayvan neden göç eder)
// Alanlar, kaydın id satırının hemen ardına eklenir. Kullanım: node araclar/kart-bilgi-ekle.js
'use strict';
const fs = require('fs'), path = require('path'), vm = require('vm');
const KOK = path.resolve(__dirname, '..');

const NEHIR = {
  nil: ['İki ana koldan oluşur. Beyaz Nil, Victoria Gölü\'nden çıkar (en uzak kaynakları Burundi ve Ruanda dağlarındaki derelerdir). Mavi Nil, Etiyopya yaylasındaki Tana Gölü\'nden doğar. İkisi Sudan\'ın başkenti Hartum\'da birleşir.', 'Kahire\'nin kuzeyinde deltaya yayılır; Reşid (Rosetta) ve Dimyat kollarıyla Akdeniz\'e dökülür.'],
  amazon: ['Peru\'da And Dağları\'nın 5.000 metreyi aşan yamaçlarındaki buzul ve kaynak sularından doğar. Marañón ve Ucayali nehirleri Peru\'da birleşince Amazon adını alır.', 'Brezilya\'da, Marajó Adası\'nın çevresindeki dev ağzından Atlas Okyanusu\'na dökülür; tatlı suyu kıyıdan çok açıkta bile okyanusun yüzeyinde izlenir.'],
  yangtze: ['Tibet Platosu\'nda, Tanggula Dağları\'nın buzullarından (Geladandong Dağı) doğar.', 'Şanghay yakınında Doğu Çin Denizi\'ne dökülür.'],
  mississippi: ['Mississippi, Minnesota\'daki küçük Itasca Gölü\'nden çıkar. Missouri ise Montana\'da Kayalık Dağlar\'da doğar. İkisi St. Louis\'in hemen kuzeyinde birleşir.', 'Louisiana\'da, "kuş ayağı" biçimli deltasıyla Meksika Körfezi\'ne dökülür.'],
  sariirmak: ['Çin\'in Qinghai eyaletinde, Tibet Platosu\'ndaki Bayan Har Dağları\'ndan doğar. Orta kesimde Lös Platosu\'ndan geçerken ona rengini veren sarı toprağı yüklenir.', 'Shandong eyaletinde Bohai Denizi\'ne (Sarı Deniz\'in iç körfezi) dökülür.'],
  kongo: ['En uzak kaynağı, Zambiya\'nın kuzeydoğu yaylalarındaki Chambeshi Nehri\'dir. Lualaba adıyla kuzeye akar, büyük bir yay çizerek ekvatoru iki kez keser.', 'Kongo Demokratik Cumhuriyeti ile Angola arasında, Banana kasabası yakınında Atlas Okyanusu\'na dökülür.'],
  mekong: ['Çin\'in Qinghai eyaletinde, Tibet Platosu\'ndaki kaynaklardan doğar.', 'Vietnam\'ın güneyinde, "Dokuz Ejder" denen çok kollu deltasıyla Güney Çin Denizi\'ne dökülür.'],
  nijer: ['Gine\'nin yaylalarında, Atlas Okyanusu\'na yalnızca yaklaşık 240 km uzakta doğar; ama denize değil, kuzeydoğuya, Sahra\'ya doğru akar. Mali\'de geniş bir iç delta oluşturur, sonra güneydoğuya döner.', 'Nijerya\'da geniş deltasıyla Gine Körfezi\'ne (Atlas Okyanusu) dökülür.'],
  volga: ['Moskova\'nın kuzeybatısındaki Valday Tepeleri\'nde, deniz seviyesinden yalnızca 228 metre yükseklikte doğar.', 'Astrahan\'da geniş deltasıyla Hazar Denizi\'ne dökülür; suyu okyanusa hiç ulaşmaz.'],
  indus: ['Tibet\'te, Kailas Dağı yakınlarındaki kaynaklardan doğar; Himalaya ve Karakurum buzullarının erime sularıyla büyür.', 'Pakistan\'da, Karaçi\'nin güneydoğusundaki deltasıyla Arap Denizi\'ne dökülür.'],
  tuna: ['Almanya\'da Kara Orman\'da doğar: Breg ve Brigach dereleri Donaueschingen\'de birleşince Tuna adını alır.', 'On ülkeden geçtikten sonra Romanya–Ukrayna sınırında üç ana kollu deltasıyla Karadeniz\'e dökülür.'],
  firat: ['Doğu Anadolu\'da iki koldan doğar: Karasu (Erzurum, Dumlu Dağı) ve Murat (Ağrı yöresi). İkisi Keban yakınında birleşir.', 'Irak\'ta Kurna\'da Dicle ile birleşir; Şattülarap adıyla Basra Körfezi\'ne dökülür.'],
  ganj: ['Hindistan Himalayaları\'ndaki Gangotri Buzulu\'ndan doğar. Bhagirathi ve Alaknanda nehirleri Devprayag\'da birleşince Ganj adını alır.', 'Bangladeş\'te Brahmaputra ile birleşir; dünyanın en büyük deltasıyla Bengal Körfezi\'ne dökülür.'],
  ob: ['Altay Dağları\'ndan gelen Biya ve Katun nehirlerinin Biysk yakınında birleşmesiyle oluşur. En büyük kolu İrtiş\'tir.', 'Uzun Ob Körfezi üzerinden Kara Denizi\'ne (Arktik Okyanusu) dökülür.'],
  yenisey: ['Tuva\'nın başkenti Kızıl\'da Büyük Yenisey ile Küçük Yenisey\'in birleşmesiyle oluşur. Baykal Gölü\'nün suyu da Angara Nehri\'yle Yenisey\'e katılır.', 'Kara Denizi\'ne (Arktik Okyanusu) dökülür.'],
  dicle: ['Elazığ\'da, Hazar Gölü yakınlarındaki Güneydoğu Toros kaynaklarından doğar.', 'Irak\'ta Kurna\'da Fırat ile birleşir; Şattülarap adıyla Basra Körfezi\'ne dökülür.'],
  parana: ['Brezilya\'nın güneyinde Paranaíba ve Grande nehirlerinin birleşmesiyle oluşur.', 'Arjantin\'de deltasının ucunda Uruguay Nehri\'yle birleşip Río de la Plata halicini oluşturur ve Atlas Okyanusu\'na açılır.'],
  zambezi: ['Zambiya\'nın kuzeybatı ucunda, yaklaşık 1.500 metre yükseklikteki bataklık bir kaynaktan doğar. Yolunun ortasında Victoria Şelalesi\'nden düşer.', 'Mozambik\'te deltasıyla Hint Okyanusu\'na (Mozambik Kanalı) dökülür.'],
  murray: ['Murray, Avustralya Alpleri\'nde doğar. Darling ise Queensland\'in güneyindeki dağlardan gelen kolların birleşmesiyle oluşur. İkisi Wentworth\'te birleşir.', 'Güney Avustralya\'da Alexandrina Gölü\'nden geçip Encounter Körfezi\'nde okyanusa dökülür.'],
  colorado: ['ABD\'nin Colorado eyaletinde, Kayalık Dağlar\'ın yüksek geçitlerinde doğar. Yolunda Büyük Kanyon\'u oymuştur.', 'Meksika\'da Kaliforniya Körfezi\'ne ulaşır; ancak suyu barajlar ve sulama için o kadar çok çekilir ki çoğu yıl denize varamadan tükenir.'],
  ceyhun: ['Pamir ve Hindukuş buzullarından beslenen Penç ve Vahş nehirlerinin birleşmesiyle oluşur.', 'Aral Gölü\'ne dökülürdü; sulama için çekilen su yüzünden bugün çoğu yıl göle ulaşmadan tükenir. Okyanusla bağlantısı yoktur.'],
  ren: ['İsviçre Alpleri\'nde, Graubünden kantonunda Ön Ren ile Arka Ren\'in birleşmesiyle oluşur. Bodensee\'den (Konstanz Gölü) geçer.', 'Hollanda\'da kollara ayrılır ve Kuzey Denizi\'ne dökülür.'],
  kizilirmak: ['Sivas\'ın doğusunda, İmranlı yakınlarındaki Kızıldağ\'dan doğar. İç Anadolu\'da büyük bir yay çizer.', 'Samsun\'un Bafra ilçesinde deltasıyla Karadeniz\'e dökülür. Türkiye\'nin kendi sınırları içinde doğup dökülen en uzun nehridir.'],
  orinoco: ['Venezuela ile Brezilya sınırındaki Parima Dağları\'ndan doğar. Casiquiare adlı doğal bir kanal, sularının bir bölümünü Amazon havzasına taşır.', 'Venezuela\'da çok kollu geniş deltasıyla Atlas Okyanusu\'na dökülür.'],
  stlawrence: ['Ontario Gölü\'nün çıkışında başlar; Büyük Göller\'in bütün suyunu taşır.', 'Giderek genişleyen haliciyle St. Lawrence Körfezi\'ne ve Atlas Okyanusu\'na açılır.'],
  seine: ['Fransa\'da Burgonya\'daki Langres Platosu\'nda, Dijon\'un kuzeybatısında doğar.', 'Paris\'ten geçtikten sonra Le Havre\'da Manş Denizi\'ne dökülür.'],
  thames: ['İngiltere\'de Gloucestershire\'daki Cotswold Tepeleri\'nde doğar.', 'Londra\'dan geçer ve doğuda geniş bir haliçle Kuzey Denizi\'ne açılır. Gelgit, nehrin Londra içindeki bölümünde bile hissedilir.'],
  po: ['Batı Alpler\'de, Monviso Dağı\'nın eteklerinde doğar.', 'Kuzey İtalya ovasını baştan sona geçer; Venedik\'in güneyinde deltasıyla Adriyatik Denizi\'ne dökülür.'],
  urdun: ['Hermon Dağı\'nın (Cebelüşşeyh) eteklerindeki kaynaklardan doğan Hasbani, Banyas ve Dan derelerinin birleşmesiyle oluşur. Celile (Taberiye) Gölü\'nden geçer.', 'Ölü Deniz\'e dökülür; okyanusa ulaşmaz. Karaların en alçak noktasında, deniz seviyesinin yaklaşık 430 metre altında biter.'],
  sakarya: ['Eskişehir\'in Çifteler ilçesi yakınındaki Sakaryabaşı kaynaklarından doğar. Porsuk ve Ankara çayları başlıca kollarıdır.', 'Sakarya\'nın Karasu ilçesinde Karadeniz\'e dökülür.']
};

const DENIZ = {
  marmara: 'Kuzeydoğuda İstanbul Boğazı ile Karadeniz\'e, güneybatıda Çanakkale Boğazı ile Ege\'ye bağlanır. Boğazlarda iki katlı akıntı vardır: üstte Karadeniz\'in az tuzlu suyu Ege\'ye, altta Akdeniz\'in tuzlu suyu Karadeniz\'e doğru akar.',
  ege: 'Akdeniz\'in kuzeydoğu koludur. Güneyde Girit\'in iki yanındaki geçitlerle açık Akdeniz\'e, kuzeydoğuda Çanakkale Boğazı ile Marmara\'ya bağlanır.',
  azak: 'Kerç Boğazı ile Karadeniz\'e bağlanır. Don ve Kuban nehirleri dökülür; bu yüzden suyu çok az tuzludur.',
  adriyatik: 'Güneyde Otranto Boğazı ile İyon Denizi\'ne (Akdeniz) açılır. Başlıca tatlı su kaynağı Po Nehri\'dir.',
  tiren: 'Akdeniz\'in bir parçasıdır. Güneyde Messina Boğazı ile İyon Denizi\'ne, batıda Bonifacio Boğazı (Korsika ile Sardinya arası) ile Batı Akdeniz\'e bağlanır.',
  iyon: 'Kuzeyde Otranto Boğazı ile Adriyatik\'e, batıda Messina Boğazı ile Tiren Denizi\'ne bağlanır; güneyi açık Akdeniz\'dir.',
  hazar: 'Okyanusla bağlantısı yoktur: kapalı bir havzadır ve dünyanın en büyük gölüdür. Suyunun büyük bölümünü Volga getirir; su yalnızca buharlaşmayla eksilir. Gemiler Volga–Don Kanalı\'yla Azak Denizi\'ne ve Karadeniz\'e geçebilir.',
  kuzeydenizi: 'Kuzeyde Norveç Denizi\'ne ve Atlas Okyanusu\'na açılır. Güneyde Dover Boğazı ile Manş Denizi\'ne, doğuda Skagerrak ile Baltık Denizi\'ne bağlanır. Ren, Elbe ve Thames buraya dökülür.',
  baltik: 'Danimarka boğazları (Öresund, Büyük Belt, Küçük Belt), ardından Kattegat ve Skagerrak üzerinden Kuzey Denizi\'ne bağlanır. Çıkışı dar, dökülen nehri çok olduğu için suyu az tuzludur.',
  mans: 'Batıda Atlas Okyanusu\'na, doğuda Dover Boğazı (en dar yeri yaklaşık 33 km) ile Kuzey Denizi\'ne bağlanır. Seine Nehri buraya dökülür.',
  irlandadenizi: 'Kuzeyde Kuzey Kanalı, güneyde St. George Kanalı ile Atlas Okyanusu\'na bağlanır.',
  norvecdenizi: 'Atlas Okyanusu ile Arktik Okyanusu arasında bir geçiş denizidir. Güneyde Kuzey Denizi\'ne, kuzeydoğuda Barents Denizi\'ne, batıda Grönland Denizi\'ne açılır. Kuzey Atlantik Akıntısı\'nın ılık suyu buradan kuzeye taşınır.',
  barents: 'Arktik Okyanusu\'nun kenar denizidir. Batıda Norveç Denizi\'ne, doğuda Novaya Zemlya adalarının ötesinde Kara Denizi\'ne, güneyde Beyaz Deniz\'e bağlanır.',
  arapdenizi: 'Hint Okyanusu\'nun kuzeybatı bölümüdür. Aden Körfezi ve Babülmendep Boğazı ile Kızıldeniz\'e; Umman Körfezi ve Hürmüz Boğazı ile Basra Körfezi\'ne bağlanır. İndus Nehri buraya dökülür.',
  bengal: 'Hint Okyanusu\'nun kuzeydoğu körfezidir; doğuda Andaman Denizi\'ne açılır. Ganj–Brahmaputra, Godavari ve Krişna nehirleri dökülür; bu yüzden yüzey suyu az tuzludur.',
  andaman: 'Batıda Andaman ve Nikobar adaları arasındaki geçitlerle Bengal Körfezi\'ne, güneydoğuda Malakka Boğazı ile Güney Çin Denizi\'ne bağlanır. İrravadi Nehri buraya dökülür.',
  guneycin: 'Kuzeydoğuda Tayvan Boğazı ile Doğu Çin Denizi\'ne ve Luzon Boğazı ile Filipin Denizi\'ne (Büyük Okyanus), güneybatıda Malakka Boğazı ile Hint Okyanusu\'na bağlanır. Mekong ve İnci nehirleri buraya dökülür.',
  dogucin: 'Kuzeyde Sarı Deniz\'e, kuzeydoğuda Kore Boğazı ile Japon Denizi\'ne, güneyde Tayvan Boğazı ile Güney Çin Denizi\'ne bağlanır; doğuda Ryukyu Adaları\'nın arasından Büyük Okyanus\'a açılır. Yangtze Nehri buraya dökülür.',
  sarideniz: 'Güneyde Doğu Çin Denizi\'ne açılır; kuzeybatıdaki iç körfezi Bohai Denizi\'dir. Rengini, Sarı Irmak\'ın taşıdığı sarı toprak (lös) verir.',
  ohotsk: 'Kuril Adaları arasındaki geçitlerle Büyük Okyanus\'a; La Pérouse ve Tatar boğazlarıyla Japon Denizi\'ne bağlanır. Amur Nehri dökülür.',
  bering: 'Kuzeyde Bering Boğazı (yaklaşık 85 km) ile Arktik Okyanusu\'na bağlanır; güneyde Aleut Adaları\'nın arasından Büyük Okyanus\'a açılır.',
  filipin: 'Büyük Okyanus\'un batı kenar denizidir. Batıda Luzon Boğazı ile Güney Çin Denizi\'ne bağlanır; doğusu Mariana Adaları\'na kadar açık okyanustur.',
  cava: 'Batıda Karimata Boğazı ile Güney Çin Denizi\'ne ve Sunda Boğazı ile Hint Okyanusu\'na; doğuda Flores Denizi\'ne; kuzeydoğuda Makassar Boğazı ile Selebes Denizi\'ne bağlanır.',
  mercan: 'Büyük Okyanus\'un kenar denizidir. Kuzeybatıda Torres Boğazı ile Arafura Denizi\'ne bağlanır, güneyde Tasman Denizi\'ne açılır.',
  tasman: 'Avustralya ile Yeni Zelanda arasındadır. Kuzeyde Mercan Denizi\'ne, güneyde Güney Okyanusu\'na açılır; batıda Bass Boğazı ile Avustralya\'nın güney sularına bağlanır.',
  meksikakorfezi: 'Karayip suyu Yucatán Kanalı\'ndan girer, Florida Boğazı\'ndan Atlas Okyanusu\'na çıkar: Gulf Stream böyle başlar. Mississippi Nehri buraya dökülür.',
  hudson: 'Hudson Boğazı ile Labrador Denizi\'ne (Atlas Okyanusu) bağlanır; kuzeyde Foxe Havzası üzerinden Arktik sularına açılır.',
  labradordenizi: 'Atlas Okyanusu\'nun kuzeybatı koludur. Kuzeyde Davis Boğazı ile Baffin Körfezi\'ne, batıda Hudson Boğazı ile Hudson Körfezi\'ne bağlanır.',
  karadeniz: 'İstanbul Boğazı, Marmara ve Çanakkale Boğazı yoluyla Ege\'ye ve Akdeniz\'e; Kerç Boğazı ile Azak Denizi\'ne bağlanır. Tuna, Dinyeper, Dinyester, Kızılırmak ve Sakarya buraya dökülür; bu yüzden suyu Akdeniz\'den belirgin biçimde az tuzludur.',
  akdeniz: 'Batıda Cebelitarık Boğazı (en dar yeri yaklaşık 14 km) ile Atlas Okyanusu\'na; kuzeydoğuda Çanakkale Boğazı üzerinden Marmara ve Karadeniz\'e; güneydoğuda Süveyş Kanalı (1869) ile Kızıldeniz\'e bağlanır. Buharlaşmayla yitirdiği su, nehirlerin getirdiğinden fazladır; açığı Atlas Okyanusu\'ndan giren yüzey suyu kapatır.',
  kizildeniz: 'Güneyde Babülmendep Boğazı ile Aden Körfezi\'ne (Hint Okyanusu), kuzeyde Süveyş Kanalı ile Akdeniz\'e bağlanır. Sürekli akan hiçbir nehir dökülmez; buharlaşma da çok olduğu için dünyanın en tuzlu denizlerindendir.',
  basra: 'Hürmüz Boğazı ile Umman Körfezi\'ne ve Arap Denizi\'ne bağlanır. Fırat ile Dicle birleşip Şattülarap adıyla buraya dökülür.',
  karayip: 'Kuzeybatıda Yucatán Kanalı ile Meksika Körfezi\'ne; doğuda Küçük Antiller arasındaki geçitlerle Atlas Okyanusu\'na bağlanır. Panama Kanalı gemileri Büyük Okyanus\'a geçirir.',
  japondenizi: 'Dar boğazlarla çevrili, neredeyse kapalı bir denizdir: güneyde Kore (Tsuşima) Boğazı Doğu Çin Denizi\'ne; doğuda Tsugaru Boğazı Büyük Okyanus\'a; kuzeyde La Pérouse ve Tatar boğazları Ohotsk Denizi\'ne açılır.',
  arktik: 'Bering Boğazı ile Büyük Okyanus\'a; Grönland ile Norveç arasındaki geniş açıklıktan (Fram Boğazı, Norveç ve Barents denizleri) Atlas Okyanusu\'na bağlanır. Ob, Yenisey, Lena ve Mackenzie gibi dev nehirler buraya dökülür.',
  guney: 'Öteki okyanuslarla arasında kara yoktur: 60° güney enleminin güneyinde Atlas, Hint ve Büyük Okyanus\'un sularıyla birleşir. Antarktika\'yı çepeçevre dolaşan Antarktika Çevresel Akıntısı üç okyanusun suyunu birbirine karıştırır.',
  hint: 'Güneybatıda, Afrika\'nın güney ucundaki Agulhas Burnu\'nun güneyinde Atlas Okyanusu\'yla; doğuda Endonezya adalarının arasındaki geçitlerde ve Avustralya\'nın güneyinde Büyük Okyanus\'la; güneyde Güney Okyanusu\'yla birleşir. Kızıldeniz ve Basra Körfezi kuzeydeki kollarıdır.',
  atlas: 'Kuzeyde Arktik Okyanusu\'na açılır. Güneybatıda, Horn Burnu\'nun güneyindeki Drake Geçidi\'nde Büyük Okyanus\'la; güneydoğuda, Afrika\'nın güney ucundaki Agulhas Burnu\'nun güneyinde Hint Okyanusu\'yla birleşir. Akdeniz (Cebelitarık Boğazı), Karayip ve Baltık başlıca kollarıdır; Panama Kanalı gemileri Büyük Okyanus\'a geçirir.',
  pasifik: 'Kuzeyde Bering Boğazı ile Arktik Okyanusu\'na; güneydoğuda Drake Geçidi ile Atlas Okyanusu\'na; batıda Endonezya adalarının arasındaki geçitlerle (Malakka, Lombok, Torres boğazları) Hint Okyanusu\'na bağlanır. Güneyde Güney Okyanusu\'yla birleşir.'
};

const GOC = {
  'yd-kartal': 'Kuzeyde kışın kalın kar tavşan ve dağ sıçanı gibi avları gizler; av bulmak zorlaşınca kartallar güneye iner. Ilıman dağlarda av yıl boyu bulunduğu için oradakiler göç etmez.',
  'yd-penguen': 'Yumurta ve yavru için aylarca erimeyecek sağlam deniz buzu gerekir. Koloni kıyıdan uzakta, buzun en kalın olduğu yerde kurulur; yavru büyüdüğünde buz erir ve okyanus yakınlaşır.',
  'yd-albatros': 'Besini olan kalamar ve balık açık okyanusta çok seyrek dağılmıştır; yeterince yiyecek bulmak için rüzgârı kullanarak çok geniş bir alanı taramak zorundadır.',
  'yd-denizkaplumbaga': 'Beslendiği açık deniz ile yumurtlayabileceği kumsal ayrı yerlerdedir. Kendi çıktığı kumsala döner, çünkü orası yavru çıkarmaya elverişli olduğunu bir kez kanıtlamıştır.',
  'yd-mamut': 'Buzul Çağı bozkırında ot mevsime göre yer değiştirirdi; günde yüzlerce kilo bitki yiyen sürüler taze otlağı ve suyu izlemek zorundaydı.',
  'yd-kralkelebek': 'Kuzeyin kışında donarak ölür. Tırtılının tek besini olan ipekotu ise yazın kuzeyde boldur; bu yüzden yazı kuzeyde, kışı Meksika\'nın serin ama donmayan dağ ormanlarında geçirir.',
  'yd-sumru': 'İki kutbun da yazını yaşar: uzun gündüzlerde küçük balık ve kril avlamak kolaydır. Böylece yılın büyük bölümünü gün ışığında geçirir.',
  'yd-yusufcuk': 'Larvaları, yağmurların oluşturduğu geçici su birikintilerinde büyür. Yusufçuklar muson yağmurlarını izleyerek her kuşakta yeni yağmur alan bölgeye geçer.',
  'yd-akbaba': 'Kışın soğuk havada onu taşıyan sıcak hava akımları zayıflar ve leş bulmak zorlaşır. Deneyimsiz gençler bu yüzden kışı sıcak Afrika\'da geçirir.',
  'yd-sinekkusu': 'Yakut boğazlı sinekkuşu gibi göçmen türler için: Kuzey Amerika\'da kışın çiçek nektarı ve böcek kalmaz. Çok hızlı çalışan metabolizmaları aç kalmaya dayanamadığından kışı Orta Amerika\'da geçirirler.',
  'yd-narval': 'Yazın buzsuz, sığ fiyortlarda yavrular. Kışın açık denizin derin sularında, yoğun buzun altında balık avlar; buz onu katil balinalardan da korur.',
  'yd-flamingo': 'Beslendiği sığ tuzlu göllerin su düzeyi mevsime göre değişir. Göl kuruduğunda ya da donduğunda, tuzla karidesi ve alg bulabileceği başka bir göle geçer.',
  'yd-zurafa': 'Kurak mevsimde yaprağını döken ağaçlardan, yeşil kalan nehir kıyısı ormanlarına geçer; yağmurla birlikte taze yaprak veren savana geri döner.',
  'yd-kutuptilkisi': 'Başlıca avı olan lemmingler azaldığında ya da genç tilki kendine boş bir bölge aradığında, deniz buzunu köprü gibi kullanarak çok uzaklara yürür.',
  'yd-leylek': 'Avrupa\'da kışın kurbağa, çekirge ve öteki böcekler ortadan kalkar. Yiyeceğin bol olduğu Afrika\'da kışlar, baharda yavrulamak için kuzeye döner.',
  'yd-diplodocus': 'Büyük olasılıkla kurak mevsimde su ve taze bitki bulmak için; bu boyda bir sürü bir bölgenin bitkisini kısa sürede tüketirdi.',
  'yd-parasaurolophus': 'Büyük olasılıkla mevsime göre yeşeren bitkileri ve güvenli yuvalama alanlarını izlemek için.',
  'yd-triceratops': 'Büyük olasılıkla kurak mevsimde tükenen bitkilerin yerine taze otlak bulmak için.',
  'yd-kelaynak': 'Kışın Fırat kıyılarında böcek ve küçük sürüngen kalmazdı; kuşlar kışı Etiyopya yaylalarında geçirirdi. Bugün Birecik\'tekiler kışın koruma altında tutulur.',
  'yd-kanguru': 'Avustralya\'nın iç kesimlerinde yağmur düzensiz yağar; taze ot yalnızca yağmur alan yerde biter. Kangurular uzaktaki fırtınaların ardından yeşeren alana gider.',
  'yd-pelikan': 'Kışın kuzeydeki göller donar ve balıklar derine çekilir; pelikanlar balık tutabilecekleri sıcak ve sığ sulara, Afrika\'ya iner.',
  'yd-rengeyigi': 'Yazın kuzeydeki tundrada taze ot ve yavrulamak için güvenli alan bulur, serin rüzgâr sinek sürülerini de uzak tutar. Kışın, karın altından liken kazıyabildiği ormanlık güneye iner.',
  'yd-atnalikrab': 'Yumurtalarını bırakmak için. Yumurtalar, en yüksek gelgitin ulaştığı kumda dalgalardan ve denizdeki avcılardan uzakta gelişir.',
  'yd-tardigrad2': 'Sayıları çok artınca bulundukları yerin bitkisi tükenir. Sürü, yağmurdan sonra yeşeren yeni alanlara doğru rüzgârla birlikte uçar.',
  'yd-orumcek': 'Yumurtadan çıkan yüzlerce yavru aynı yerde kalırsa yiyecek için birbiriyle yarışır, hatta birbirini yer. Rüzgârla dağılarak boş bir avlanma alanı bulurlar.',
  'yd-yunusnehir': 'Sular yükselince balıklar su basmış ormanın içine dağılır; yunus da avının peşinden ağaçların arasına girer.',
  'yd-puffin': 'Yumurtasını denizde bırakamaz; karada, yırtıcıların ulaşamadığı uçurum yuvalarında ürer. Yavru büyüyünce balığın bol olduğu açık denize döner.',
  'yd-sinekkanat': 'Avladığı küçük kuşlar kışın kuzeyi terk eder; gökdoğan da avının peşinden güneye iner.',
  'yd-bizon': 'Mevsime göre yeşeren otlakları izlerdi: yazın kuzeyin taze çayırlarına çıkar, kışın karın daha ince olduğu güneye inerdi.',
  'yd-alpkeçisi': 'Yüksekte kış boyu kalın kar otu örter. Güneşi gören alçak güney yamaçlarında kar incedir ve ot karın altından çıkarılabilir.',
  'yd-kaplumbaga': 'Kurak ve serin mevsimde ovadaki otlar kurur; sisin nemli tuttuğu yaylalar ise yeşil kalır. Yağmurlar başlayınca taze ot ve yumurtlama alanı için ovaya geri iner.'
};

const tirnak = t => "'" + t.replace(/\\/g, '\\\\').replace(/'/g, "\\'") + "'";
function ekle(dosya, kayitlar, alanlar) {
  const yol = path.join(KOK, dosya); let s = fs.readFileSync(yol, 'utf8'), n = 0;
  for (const [id, deger] of Object.entries(kayitlar)) {
    const degerler = Array.isArray(deger) ? deger : [deger];
    const desen = new RegExp("id:\\s*(['\"])" + id.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&') + "\\1\\s*,");
    const m = desen.exec(s); if (!m) continue;
    const sonra = s.slice(m.index + m[0].length, m.index + m[0].length + 40);
    if (sonra.trimStart().startsWith(alanlar[0] + ':')) continue;   // zaten eklenmiş
    const ek = ' ' + alanlar.map((a, i) => a + ': ' + tirnak(degerler[i])).join(', ') + ',';
    s = s.slice(0, m.index + m[0].length) + ek + s.slice(m.index + m[0].length); n++;
  }
  fs.writeFileSync(yol, s);
  return n;
}
console.log('nehir', ekle('data/atlas/nehirler.js', NEHIR, ['kaynak', 'dokulur']), '/', Object.keys(NEHIR).length);
console.log('deniz', ekle('data/atlas/okyanus.js', DENIZ, ['baglanti']) + ekle('data/atlas/denizler-ek.js', DENIZ, ['baglanti']), '/', Object.keys(DENIZ).length);
let g = 0; for (const f of ['data/yasam-doga.js', 'data/yasam-doga-ek.js']) g += ekle(f, GOC, ['gocNeden']);
// yasam-doga-antik.js ve yasam-doga-ek2.js kayıtları sıralı diziler hâlinde tutar; orada göç nedeni dosyanın sonuna
// eklenen küçük bir tabloyla, kimliğe göre atanır
for (const f of ['data/yasam-doga-antik.js', 'data/yasam-doga-ek2.js']) {
  const yol = path.join(KOK, f); let s = fs.readFileSync(yol, 'utf8');
  if (s.includes('GOC_NEDEN')) continue;
  const bunlar = Object.entries(GOC).filter(([id]) => s.includes("['" + id + "'"));
  if (!bunlar.length) continue;
  s = s.replace(/\s*$/, '\n') + '\n// Göç eden hayvanlar neden göç eder (kart satırı: "Neden göç eder?"). araclar/kart-bilgi-ekle.js ile eklendi.\n(() => {\n  const GOC_NEDEN = {\n' +
    bunlar.map(([id, t]) => '    ' + tirnak(id) + ': ' + tirnak(t)).join(',\n') + '\n  };\n  for (const h of (window.YASAM_DOGA && window.YASAM_DOGA.hayvanlar) || []) if (GOC_NEDEN[h.id]) h.gocNeden = GOC_NEDEN[h.id];\n})();\n';
  fs.writeFileSync(yol, s); g += bunlar.length;
}
// Galápagos kaplumbağasının göç yönü düzeltildi: kurak mevsimde yaylaya çıkar, yağmur mevsiminde ovaya iner
{
  const yol = path.join(KOK, 'data/yasam-doga.js'); let s = fs.readFileSync(yol, 'utf8');
  const eski = 'Yağmur mevsiminde kıyıdan volkan yamaçlarındaki yeşil yaylalara doğru birkaç kilometrelik yavaş göç yapar.';
  if (s.includes(eski)) { s = s.replace(eski, 'Kurak mevsimde ovadan volkan yamaçlarındaki yeşil yaylalara çıkar, yağmur mevsiminde yeniden ovaya iner; birkaç kilometrelik yavaş bir göçtür.'); fs.writeFileSync(yol, s); console.log('Galápagos kaplumbağası göç yönü düzeltildi'); }
}
console.log('göç nedeni', g, '/', Object.keys(GOC).length);

// doğrulama: dosyalar hâlâ çalışıyor mu, alanlar doğru kayıtlara girdi mi
const o = { console }; o.window = o; vm.createContext(o);
for (const f of ['data/atlas/nehirler.js', 'data/atlas/okyanus.js', 'data/atlas/denizler-ek.js', 'data/yasam-doga.js', 'data/yasam-doga-ek.js', 'data/yasam-doga-antik.js', 'data/yasam-doga-ek2.js']) vm.runInContext(fs.readFileSync(path.join(KOK, f), 'utf8'), o, { filename: f });
console.log('nehir kaynak/dökülür olan', o.ATLAS_NEHIRLER.filter(n => n.kaynak && n.dokulur).length, '/', o.ATLAS_NEHIRLER.length,
  '· deniz bağlantısı olan', o.ATLAS_OKYANUS.okyanuslar.filter(n => n.baglanti).length, '/', o.ATLAS_OKYANUS.okyanuslar.length,
  '· göç nedeni olan hayvan', o.YASAM_DOGA.hayvanlar.filter(h => h.gocNeden).length,
  '· başka kayda sızan', [...(o.ATLAS_OKYANUS.akintilar || []), ...(o.ATLAS_OKYANUS.olaylar || [])].filter(n => n.baglanti).length + o.YASAM_DOGA.bitkiler.filter(h => h.gocNeden).length);
