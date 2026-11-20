// Mısır kültürü: tanrılar, bilim, firavunların ölümleri ve mumyaları, günlük hayat rolleri, duvar resimleri.
// Kaynaklar: KAYNAKLAR.md. Duvar resmi çizimleri gerçek eserlerden esinlenen basitleştirilmiş canlandırmalardır.
window.KULTUR = {
  tanrilar: [
    { id: 'ra', ad: 'Ra (Re)', unvan: 'Güneş tanrısı', wiki: 'Ra', cizim: { bas: 'sahin', tac: 'gunes', ten: '#b5653a', tutar: 'was' },
      gorunum: 'Şahin başlı, başında kobrayla çevrili kırmızı bir güneş kursu taşıyan tanrı.',
      gorev: 'Güneşin, ışığın ve yaratılışın tanrısı. Her gün gökyüzünde kayığıyla yolculuk eder, gece yeraltından geçip sabah yeniden doğar.',
      merkez: 'Heliopolis (İunu)',
      mit: 'Sabah güneşi bok böceği <b>Khepri</b>, öğle güneşi <b>Ra</b>, akşam güneşi yaşlı <b>Atum</b> olarak düşünülürdü. Gece yeraltında kaos yılanı <b>Apep</b> (Apophis) güneş kayığına saldırır ama yenilir; bu yüzden güneş her sabah yeniden doğar.',
      ilginc: '4. Hanedan\'dan itibaren firavunlar "Ra\'nın oğlu" unvanını taşıdı. Piramitlerin biçiminin, bulutların arasından yere inen güneş ışınlarını andırdığı düşünülür.' },
    { id: 'aton', ad: 'Aton', unvan: 'Güneş kursu', wiki: 'Aten', cizim: { ozel: 'aton' },
      gorunum: 'İnsan ya da hayvan biçimi yok: ışınlarının ucunda küçük eller olan bir güneş kursu.',
      gorev: 'Akhenaton döneminde (MÖ ~1352-1336) neredeyse tek tanrı olarak tapınılan güneş ışığının kendisi.',
      merkez: 'Ahetaton (Amarna)',
      mit: 'Akhenaton\'un yazdığı kabul edilen "Aton\'a Büyük İlahi", güneşin bütün canlıları, insanları, hayvanları ve yabancı ülkeleri bile beslediğini anlatır.',
      ilginc: 'Aton tapınakları çatısızdı: tanrı karanlık bir odada değil, açık gökyüzünde güneş ışığında "yaşıyordu".' },
    { id: 'amun', ad: 'Amon (Amon-Ra)', unvan: 'Gizli olan, tanrıların kralı', wiki: 'Amun', cizim: { bas: 'insan', tac: 'tuyler', ten: '#3d6fb5', tutar: 'was' },
      gorunum: 'Başında iki uzun tüy taşıyan, çoğu zaman mavi tenli bir insan; bazen koç.',
      gorev: 'Teb\'in tanrısı. Yeni Krallık\'ta güneş tanrısıyla birleşip "Amon-Ra" olarak devletin en büyük tanrısı oldu.',
      merkez: 'Teb (Karnak)',
      mit: 'Adı "gizli olan" demektir: görünmeyen rüzgâr ve yaşam nefesi gibi her yerde ama gözle görülmez. Eşi Mut, oğlu ay tanrısı Khonsu ile Teb üçlüsünü oluşturur.',
      ilginc: 'Karnak\'taki Amon tapınağı Yeni Krallık\'ta ülkenin en zengin kurumuydu; binlerce rahip ve işçiye, büyük topraklara sahipti.' },
    { id: 'horus', ad: 'Horus', unvan: 'Gökyüzü ve krallık tanrısı', wiki: 'Horus', cizim: { bas: 'sahin', tac: 'cift', ten: '#b5653a', tutar: 'ankh' },
      gorunum: 'Şahin ya da şahin başlı bir adam; başında Yukarı ve Aşağı Mısır\'ın çift tacı.',
      gorev: 'Gökyüzünün ve krallığın tanrısı. Yaşayan firavun Horus\'un yeryüzündeki hâli sayılırdı.',
      merkez: 'Edfu, Nekhen (Hierakonpolis)',
      mit: 'Osiris ile İsis\'in oğlu. Babasını öldüren amcası Seth ile uzun bir savaşa girdi ve kazandı. Savaşta kaybedip geri kazandığı gözü, "Horus\'un Gözü" (udjat), koruma ve iyileşmenin simgesi oldu.',
      ilginc: 'Horus\'un Gözü bugün bile muska ve takı olarak kullanılıyor.' },
    { id: 'osiris', ad: 'Osiris', unvan: 'Ölüler diyarının kralı', wiki: 'Osiris', cizim: { bas: 'insan', tac: 'atef', ten: '#4f9a5a', govde: 'mumya', tutar: 'asa' },
      gorunum: 'Yeşil ya da siyah tenli, mumya gibi sarılmış, başında beyaz "atef" tacı, elinde çoban değneği ve harman döveni (kamçı) tutan bir kral.',
      gorev: 'Yeraltı dünyasının kralı; ölümden sonra yeniden doğuşun ve bereketin tanrısı.',
      merkez: 'Abidos',
      mit: 'Kıskanç kardeşi Seth onu öldürüp parçalarını ülkeye dağıttı. Eşi İsis parçaları tek tek bulup birleştirdi ve onu büyüyle yeniden hayata döndürdü. Osiris yeraltının kralı oldu; ölen her insan "Osiris" gibi yeniden doğmayı umardı.',
      ilginc: 'Yeşil teni, kuraklıktan sonra yeniden filizlenen bitkileri, yani yeniden doğuşu simgeler.' },
    { id: 'isis', ad: 'İsis', unvan: 'Büyü ve annelik tanrıçası', wiki: 'Isis', cizim: { bas: 'kadin', tac: 'taht', ten: '#d9a35f', tutar: 'ankh' },
      gorunum: 'Başında taht biçimli bir hiyeroglif taşıyan kadın; bazen kanatlı.',
      gorev: 'Büyü, annelik, şifa ve korumanın tanrıçası.',
      merkez: 'File (Philae)',
      mit: 'Kocası Osiris\'i yeniden hayata döndürdü; oğlu Horus\'u Seth\'ten deltanın bataklıklarında saklayarak büyüttü.',
      ilginc: 'İsis kültü Yunanistan\'a ve Roma İmparatorluğu\'na kadar yayıldı; File\'de MS 6. yüzyıla kadar tapınıldı.' },
    { id: 'anubis', ad: 'Anubis', unvan: 'Mumyalama ve mezarlık tanrısı', wiki: 'Anubis', cizim: { bas: 'cakal', ten: '#b5653a', tutar: 'was' },
      gorunum: 'Siyah çakal başlı adam ya da yatan siyah bir çakal.',
      gorev: 'Mumyalamanın, mezarlıkların ve ölülerin koruyucusu; ölüyü yargılanacağı salona götürür.',
      merkez: 'Kinopolis; bütün mezarlıklar',
      mit: 'Kalbin tartılması sahnesinde teraziyi o kontrol eder. Mumyacı rahipler törenlerde Anubis maskesi takardı.',
      ilginc: 'Siyah rengi, Nil\'in bereketli kara toprağını ve yeniden doğuşu temsil eder. Çakallar mezarlıklarda dolaştığı için bu tanrı mezarların koruyucusu oldu.' },
    { id: 'thot', ad: 'Thot', unvan: 'Yazı ve bilgelik tanrısı', wiki: 'Thoth', cizim: { bas: 'ibis', tac: 'ay', ten: '#b5653a', tutar: 'kalem' },
      gorunum: 'İbis kuşu başlı adam ya da babun; başında bazen ay kursu.',
      gorev: 'Yazının, bilgeliğin, matematiğin ve ayın tanrısı; tanrıların kâtibi.',
      merkez: 'Hermopolis',
      mit: 'Hiyeroglif yazıyı insanlara onun verdiğine inanılırdı. Kalbin tartılmasının sonucunu o yazar.',
      ilginc: 'Yunanlar onu kendi tanrıları Hermes ile eşleştirdi ("Hermes Trismegistos").' },
    { id: 'khonsu', ad: 'Khonsu', unvan: 'Ay tanrısı', wiki: 'Khonsu', cizim: { bas: 'insan', tac: 'ay', ten: '#b5653a', govde: 'mumya', tutar: 'asa', bukle: true },
      gorunum: 'Yanında gençlik buklesi olan, başında hilal ve dolunay taşıyan, mumya gibi sarılmış genç bir tanrı.',
      gorev: 'Ayın tanrısı; adı "gezgin" demek: gece gökyüzünde yolculuk eden ay.',
      merkez: 'Teb (Karnak\'ta kendi tapınağı)',
      mit: 'Amon ile Mut\'un oğlu. Hastalıkları iyileştirdiğine ve kötü ruhları kovduğuna inanılırdı.',
      ilginc: 'Karnak\'taki Khonsu tapınağı, Yeni Krallık tapınak planının en iyi korunmuş örneklerinden.' },
    { id: 'hathor', ad: 'Hathor', unvan: 'Sevgi ve müzik tanrıçası', wiki: 'Hathor', cizim: { bas: 'kadin', tac: 'boynuz', ten: '#d9a35f', tutar: 'ankh' },
      gorunum: 'Başında inek boynuzları arasında güneş kursu taşıyan kadın; bazen inek.',
      gorev: 'Sevgi, müzik, dans, annelik ve neşenin tanrıçası.',
      merkez: 'Dendera',
      mit: 'Bir efsaneye göre Ra\'nın öfkeli gözü olarak dişi aslan Sekhmet\'e dönüşüp insanlığı yok etmeye başladı. Tanrılar kırmızıya boyanmış birayı kan sanıp içmesini sağladı; sarhoş olunca sakinleşti ve yeniden sevecen Hathor oldu.',
      ilginc: '"Sistrum" denen çıngırak çalgısı onun simgesi.' },
    { id: 'bastet', ad: 'Bastet', unvan: 'Kedi tanrıça', wiki: 'Bastet', cizim: { bas: 'kedi', ten: '#d9a35f', tutar: 'ankh' },
      gorunum: 'Kedi ya da kedi başlı kadın.',
      gorev: 'Evin, kadınların, doğurganlığın ve kedilerin koruyucusu.',
      merkez: 'Bubastis',
      mit: 'Önceleri dişi aslan başlı savaşçı bir tanrıçaydı; zamanla daha yumuşak bir kedi tanrıçaya dönüştü.',
      ilginc: 'Herodot, Bubastis\'teki Bastet bayramına 700.000 kişinin katıldığını yazdı.' },
    { id: 'sobek', ad: 'Sobek', unvan: 'Timsah tanrı', wiki: 'Sobek', cizim: { bas: 'timsah', tac: 'tuyler', ten: '#b5653a', tutar: 'was' },
      gorunum: 'Timsah ya da timsah başlı adam.',
      gorev: 'Nil\'in, suyun, gücün ve bereketin tanrısı.',
      merkez: 'Kom Ombo; Faiyum (Krokodilopolis)',
      mit: 'Nil\'in tehlikeli gücünü ve firavunun kudretini temsil ederdi.',
      ilginc: 'Tapınaklarında kutsal timsahlar beslenir, öldüklerinde mumyalanırdı.' },
    { id: 'ptah', ad: 'Ptah', unvan: 'Yaratıcı tanrı, zanaatkârların koruyucusu', wiki: 'Ptah', cizim: { bas: 'insan', tac: 'takke', ten: '#4f9a5a', govde: 'mumya', tutar: 'was' },
      gorunum: 'Mavi takke giyen, mumya gibi sarılmış, sakallı bir adam; elinde asa.',
      gorev: 'Memfis\'in yaratıcı tanrısı; heykeltıraşların, ustaların koruyucusu.',
      merkez: 'Memfis',
      mit: 'Memfis teolojisine göre dünyayı önce kalbinde düşünüp sonra diliyle söyleyerek, yani sözle yarattı.',
      ilginc: 'Batı dillerindeki "Egypt" adı, Memfis\'teki Ptah tapınağının adından (Hut-ka-Ptah) gelir.' },
    { id: 'seth', ad: 'Seth', unvan: 'Çöl ve fırtına tanrısı', wiki: 'Set (deity)', cizim: { bas: 'seth', ten: '#b5653a', tutar: 'was' },
      gorunum: 'Kıvrık burunlu, kare kulaklı, hiçbir gerçek hayvana tam benzemeyen "Seth hayvanı" başlı adam.',
      gorev: 'Çölün, fırtınanın, kaosun ve yabancı ülkelerin tanrısı.',
      merkez: 'Nagada (Ombos), Avaris',
      mit: 'Kardeşi Osiris\'i öldürdü, Horus ile savaştı. Ama Ra\'nın kayığında kaos yılanı Apep\'e karşı savaşan da oydu: tamamen kötü değildi.',
      ilginc: 'Hiksoslar ve 19. Hanedan ona özellikle saygı gösterdi; I. Seti\'nin adı "Seth\'in adamı" demek.' },
    { id: 'maat', ad: 'Maat', unvan: 'Doğruluk ve düzen tanrıçası', wiki: 'Maat', cizim: { bas: 'kadin', tac: 'tuy', ten: '#d9a35f', tutar: 'ankh' },
      gorunum: 'Başında tek bir devekuşu tüyü olan kadın.',
      gorev: 'Doğruluğun, adaletin ve evrensel düzenin tanrıçası.',
      merkez: 'Bütün tapınaklar',
      mit: 'Başındaki tüy, kalbin tartılmasında terazinin öbür kefesine konurdu.',
      ilginc: 'Firavunlar tapınak kabartmalarında tanrılara küçük bir Maat heykeli sunarken gösterilir: "Dünyanın düzenini koruyorum" demektir.' },
    { id: 'hapi', ad: 'Hapi', unvan: 'Nil taşkınının tanrısı', wiki: 'Hapi (Nile god)', cizim: { bas: 'insan', tac: 'papirus', ten: '#3d6fb5', govde: 'sisman', tutar: 'sunu' },
      gorunum: 'Büyük karınlı, başında papirüs bitkileri taşıyan, elinde yiyecek sunuları olan bir figür.',
      gorev: 'Nil\'in yıllık taşkınının ve onun getirdiği bereketin tanrısı.',
      merkez: 'Asuan yakınındaki çağlayanlar',
      mit: 'Birinci Çağlayan yakınında bir mağarada yaşadığına ve taşkın sularını oradan saldığına inanılırdı.',
      ilginc: 'Büyük karnı tembellik değil, bolluk ve iyi beslenmeyi simgeler.' },
    { id: 'nut', ad: 'Nut', unvan: 'Gökyüzü tanrıçası', wiki: 'Nut (goddess)', cizim: { ozel: 'nut' },
      gorunum: 'Bedeni yıldızlarla kaplı, dünyanın üzerine kemer gibi eğilmiş bir kadın.',
      gorev: 'Gökyüzünün tanrıçası; her akşam güneşi yutar, her sabah yeniden doğurur.',
      merkez: '-',
      mit: 'Yer tanrısı Geb\'in eşi; Osiris, İsis, Seth ve Nephthys\'in annesi.',
      ilginc: 'Mezar tavanlarına ve tabut kapaklarının iç yüzüne sık sık çizilir: ölüyü kollarına alan gökyüzü.' },
    { id: 'khepri', ad: 'Khepri', unvan: 'Sabah güneşi', wiki: 'Khepri', cizim: { ozel: 'bocek' },
      gorunum: 'Bok böceği (skarabe) ya da böcek başlı adam.',
      gorev: 'Doğan sabah güneşi.',
      merkez: 'Heliopolis',
      mit: 'Bok böceğinin gübre topunu yuvarlaması gibi, Khepri de güneşi her sabah ufuktan gökyüzüne yuvarlar.',
      ilginc: 'Skarabe muskaları Mısır\'ın en yaygın tılsımlarıydı; mumyaların kalbinin üzerine "kalp skarabesi" konurdu.' }
  ],

  bilim: {
    genel: `
      <h4>🔢 Matematik</h4>
      <ul>
      <li><b>Onluk sistem:</b> 1, 10, 100, 1.000 (nilüfer), 10.000 (parmak), 100.000 (iribaş) ve 1.000.000 (kollarını kaldırmış tanrı Heh) için ayrı işaretler vardı.</li>
      <li><b>Kesirler:</b> Payı 1 olan kesirlerle (1/2, 1/3, 1/4…) hesap yapılırdı; 2/3 için özel bir işaret vardı.</li>
      <li><b>Rhind Matematik Papirüsü</b> (~MÖ 1550, daha eski bir kitabın kopyası): 84 problem; alan, hacim, ekmek ve bira paylaştırma. Daire alanı için kullandıkları yöntem π\'yi yaklaşık 3,16 alıyordu.</li>
      <li><b>Moskova Papirüsü:</b> kesik piramidin hacmini doğru hesaplayan bir problem içeriyor; döneminin en ileri matematik bilgilerinden.</li>
      </ul>
      <h4>📐 Geometri ve mühendislik</h4>
      <ul>
      <li><b>Seked:</b> eğimi "bir arşın yükselmek için kaç avuç ilerlenir" diye ölçerlerdi. Büyük Piramit\'in seked\'i 5½ avuç, yani ~51,8°.</li>
      <li>Her taşkından sonra tarla sınırları iplerle yeniden ölçülürdü: "geometri" (yer ölçümü) kelimesinin ruhu buradan.</li>
      <li>Büyük Piramit\'in kenarları ana yönlere birkaç açı dakikası hassasiyetle hizalı; taban kenarları arasındaki fark yalnızca birkaç santim.</li>
      <li>Yüzlerce tonluk dikilitaşlar tek parça kesilip taşındı ve dikildi.</li>
      </ul>
      <h4>🌟 Astronomi ve takvim</h4>
      <ul>
      <li><b>365 günlük takvim:</b> 30 günlük 12 ay + 5 ek gün. Bugünkü takvimimizin atası (Jül Sezar Mısırlı gökbilimcilerden yararlandı).</li>
      <li><b>24 saat:</b> Geceyi, birbiri ardına doğan 36 yıldız grubuyla (dekanlar) saatlere böldüler; gece 12, gündüz 12 saat fikri buradan geliyor.</li>
      <li>Sirius yıldızının şafakta yeniden görünmesi Nil taşkınının ve yeni yılın habercisiydi.</li>
      <li>Su saatleri (bilinen en eskilerinden biri III. Amenhotep dönemine ait, Karnak\'ta bulundu) ve gölge saatleri kullandılar.</li>
      </ul>
      <h4>⚕️ Tıp</h4>
      <ul>
      <li><b>Hesy-Ra</b> (~MÖ 2650): "dişçilerin ve hekimlerin başı" unvanıyla adı bilinen en eski hekimlerden.</li>
      <li><b>Edwin Smith Papirüsü</b> (~MÖ 1600, daha eski bir metnin kopyası): 48 yaralanma vakası; muayene, teşhis ve tedavi adım adım. Beynin bilinen en eski tarifi burada.</li>
      <li><b>Ebers Papirüsü</b> (~MÖ 1550): 700\'den fazla reçete ve tedavi. Yaraya bal (mikrop öldürücü) sürmek gibi bugün de geçerli yöntemler var; büyülü formüller de var.</li>
      <li><b>Kahun Papirüsü</b> (~MÖ 1800): bilinen en eski kadın hastalıkları metni.</li>
      <li>Kahire Müzesi\'ndeki ahşap ve deri <b>protez ayak parmağı</b> (MÖ ~950-710) gerçekten kullanılmış: dünyanın bilinen en eski işlevsel protezlerinden.</li>
      </ul>
      <h4>🧪 Kimya ve malzemeler</h4>
      <ul>
      <li><b>Mısır mavisi:</b> bilinen ilk yapay boya (pigment); kum, bakır ve kireç birlikte pişirilerek yapıldı.</li>
      <li>Cam ve parlak "fayans" boncuklar, göz kalemi (sürme), parfümler; ekmek ve bira için mayalama.</li>
      <li>Mumyalama: natron tuzuyla kurutma, reçineler ve yağlarla koruma.</li>
      </ul>`,
    cag: {
      'misir-erken': 'Bu çağda: yazının icadı (hiyeroglif), ilk papirüs tomarı, yıl kayıtları ve takvimin temelleri.',
      'misir-eski-krallik': 'Bu çağda: piramit mühendisliği zirvede (Büyük Piramit), Hesy-Ra gibi ilk hekimler, Mısır mavisi, eğim (seked) hesapları.',
      'misir-orta-krallik': 'Bu çağda: matematik ve tıp kitapları yazılıyor (Rhind\'in aslı, Moskova ve Kahun papirüsleri); Faiyum\'da büyük sulama projeleri.',
      'misir-yeni-krallik': 'Bu çağda: Edwin Smith ve Ebers tıp papirüsleri, cam yapımı, su saatleri, mezar tavanlarında yıldız haritaları.',
      'misir-gec-donem': 'Bu çağda: İskenderiye dünyanın bilim merkezi: Öklid\'in geometrisi, Eratosthenes\'in Dünya ölçümü, Herophilos\'un anatomisi, takvime artık gün önerisi (MÖ 238).'
    }
  },

  // Firavunların ölümleri, mumyaları ve lahitleri. tabut: altin | ahsap | gumus | tas | yok
  olumler: [
    { id: 'keops', y: 2566, kim: 'Keops (Hufu)', tabut: 'bos', wiki: 'Khufu',
      mumya: 'Mumyası hiç bulunmadı. Kral Odası\'ndaki kırmızı granit lahit, ilk kâşifler girdiğinde boş ve kapaksızdı.',
      lahit: 'Kırmızı Asuan granitinden yontulmuş sade bir lahit; Kral Odası\'nın kapısından geçmeyecek kadar geniş, yani oda yapılırken içeri konmuş olmalı.',
      ilginc: 'Mısır\'ın en büyük anıtını yaptıran kralın bugün bilinen tek tam heykeli, yalnızca 7,5 cm boyunda fildişi bir heykelcik.' },
    { id: 'seqenenre', y: 1560, kim: 'Seqenenre Tao', tabut: 'ahsap', wiki: 'Seqenenre Tao',
      mumya: '1881\'de Deyr el-Bahri\'deki gizli mağarada (TT320) bulundu. Kafatasında balta, mızrak ve topuz yaraları var: Hiksoslara karşı savaşta öldüğü düşünülüyor.',
      lahit: 'Tüy desenli (rishi) ahşap tabut.',
      ilginc: '2021\'deki bilgisayarlı tomografi incelemesi, ellerinin bağlıyken öldürülmüş olabileceğini öne sürdü.' },
    { id: 'ahmose', y: 1525, kim: 'I. Ahmose', tabut: 'ahsap', wiki: 'Ahmose I',
      mumya: 'TT320 gizli mağarasında bulundu. Yeni Krallık\'ın kurucusu, öldüğünde yaklaşık 35 yaşındaydı.',
      lahit: 'Ahşap tabut; sonradan yeniden kullanılmış.',
      ilginc: 'Annesi Kraliçe Ahhotep, savaştaki cesaretinden dolayı altın sinek nişanlarıyla gömüldü.' },
    { id: 'hatsepsut', y: 1458, kim: 'Hatşepsut', tabut: 'tas', wiki: 'Hatshepsut',
      mumya: 'Mumyası 1903\'te KV60\'ta tabutsuz yerde yatarken bulundu ama kimin olduğu bilinmiyordu. 2007\'de, adının yazılı olduğu bir kutudaki dişin mumyanın ağzındaki boşluğa uyduğu gösterilerek tanımlandı.',
      lahit: 'Krallar Vadisi\'ndeki KV20 mezarında kendisi ve babası için kuvarsitten lahitler yaptırdı.',
      ilginc: 'Araştırmalar ölürken 50\'li yaşlarında olduğunu ve kemik kanseri olabileceğini gösterdi.' },
    { id: 'thutmose3', y: 1425, kim: 'III. Thutmose', tabut: 'ahsap', wiki: 'Thutmose III',
      mumya: 'TT320 gizli mağarasında bulundu; soyguncular tarafından üç parçaya ayrılmıştı, antik rahipler kürek gibi tahtalarla tutturmuştu.',
      lahit: 'KV34\'teki kırmızı boyalı, kartuş biçimli kuvarsit lahit.',
      ilginc: 'Mısır\'ın "en büyük asker kralı" yaklaşık 1,6 m boyundaydı.' },
    { id: 'amenhotep3', y: 1352, kim: 'III. Amenhotep', tabut: 'ahsap', wiki: 'Amenhotep III',
      mumya: 'KV35\'teki gizli depoda bulundu. Mumyacılar derinin altına reçine doldurarak bedene dolgunluk vermişti: o döneme göre yeni bir teknik.',
      lahit: 'Asıl mezarı KV22 (Batı Vadisi) soyulmuş.',
      ilginc: 'Dişleri çok kötü durumdaydı: zenginlerin bile diş ağrısı çektiğini gösteriyor.' },
    { id: 'akhenaton', y: 1336, kim: 'Akhenaton', tabut: 'ahsap', wiki: 'KV55',
      mumya: 'KV55\'te bulunan iskeletin büyük olasılıkla Akhenaton\'a ait olduğu düşünülüyor; DNA çalışmaları onu Tutankamon\'un babası olarak gösteriyor (tartışma sürüyor).',
      lahit: 'Altın ve değerli taşlarla kaplı, ama yüz maskesi koparılmış ve kartuşları kazınmış bir tabut: ölümünden sonra adının silinmeye çalışıldığının işareti.',
      ilginc: 'Amarna\'daki asıl kraliyet mezarı da bulundu ama soyulmuş ve tahrip edilmişti.' },
    { id: 'tutankamon', y: 1327, kim: 'Tutankamon', tabut: 'altin', wiki: 'Tutankhamun',
      mumya: 'Mumyası bugün hâlâ Krallar Vadisi\'ndeki mezarında (KV62), cam bir vitrinde. 2005\'te tomografiyle, 2010\'da DNA ile incelendi: sol ayağında bir bozukluk vardı, sıtma geçirmişti, bastonla yürüyor olabilirdi (mezarında 130\'dan fazla baston bulundu).',
      lahit: 'İç içe: taş (kuvarsit) lahit, içinde iç içe üç insan biçimli tabut. Dıştaki ikisi altın kaplı ahşap; en içteki 110 kg saf altından. Mumyanın yüzünde ~10 kg\'lık altın maske.',
      ilginc: 'Altın maske lapis lazuli, kuvars, obsidiyen ve renkli camla süslü. Maskenin arkasında Ölüler Kitabı\'ndan koruyucu bir büyü yazılı.' },
    { id: 'seti1', y: 1279, kim: 'I. Seti', tabut: 'ahsap', wiki: 'Seti I',
      mumya: 'TT320 gizli mağarasında bulundu. Dünyanın en iyi korunmuş kral mumyalarından; yüzü neredeyse yaşıyormuş gibi.',
      lahit: 'KV17\'deki yarı saydam kaymaktaşı (kalsit) lahit, içi ve dışı yazılarla kaplı; bugün Londra\'da Sir John Soane Müzesi\'nde.',
      ilginc: 'Sir John Soane, 1825\'te lahdi göstermek için üç gece süren, yüzlerce mumla aydınlatılmış davetler düzenledi.' },
    { id: 'ramses2', y: 1213, kim: 'II. Ramses', tabut: 'ahsap', wiki: 'Ramesses II',
      mumya: 'TT320\'de bulundu. 90 yaşına yaklaşmıştı; artrit, diş apsesi ve damar sertliği vardı. 1976\'da mantar sorunu nedeniyle tedavi için Paris\'e götürüldü ve askerî törenle karşılandı.',
      lahit: 'Bugünkü sade ahşap tabut, rahiplerin onu yeniden gömdüğü tabut; asıl görkemli tabutu kayıp.',
      ilginc: 'Mumyasının burnu biçimini korusun diye içine karabiber taneleri konmuştu.' },
    { id: 'ramses3', y: 1153, kim: 'III. Ramses', tabut: 'ahsap', wiki: 'Ramesses III',
      mumya: 'TT320\'de bulundu. 2012\'deki tomografi boğazında derin bir bıçak yarası olduğunu gösterdi: "harem komplosu"nda öldürüldüğü doğrulandı.',
      lahit: 'KV11\'deki büyük granit lahdin kapağı Cambridge\'de, teknesi Paris\'te (Louvre).',
      ilginc: 'Mumyacılar boynundaki yaranın üzerine koruyucu bir "Horus\'un Gözü" muskası koymuştu.' },
    { id: 'psusennes', y: 991, kim: 'I. Psusennes', tabut: 'gumus', wiki: 'Psusennes I',
      mumya: '1940\'ta Pierre Montet tarafından Tanis\'te bulundu; deltanın nemi yüzünden mumya büyük ölçüde çürümüştü.',
      lahit: 'Saf gümüş tabut (o dönemde gümüş altından değerliydi) ve altın maske; taş lahit, Merneptah\'ın eski lahdinden yeniden kullanılmış.',
      ilginc: 'Keşif II. Dünya Savaşı\'nın başına denk geldiği için Tutankamon\'unki kadar ünlü olmadı.' },
    { id: 'kleopatra', y: 30, kim: 'VII. Kleopatra', tabut: 'bilinmiyor', wiki: 'Cleopatra',
      mumya: 'Mezarı ve mumyası hiç bulunmadı. Antik yazarlara göre Marcus Antonius ile birlikte İskenderiye\'deki mezarına gömüldü.',
      lahit: 'Bilinmiyor; mezarın İskenderiye\'de, belki bugün deniz altında kalan saray bölgesinde olduğu düşünülüyor.',
      ilginc: 'Plutarkhos\'a göre bir yılan (kobra) ısırığıyla öldü; tarihçiler zehirlenmenin başka yollarını da tartışıyor.' }
  ],
  mumyalama: `
    <ol class="steps">
    <li><b>1. gün - Yıkama:</b> Beden Nil suyu ve palmiye şarabıyla yıkanır; mumyacılar "Güzel Ev" denen çadırda çalışır.</li>
    <li><b>Beyin:</b> Burun deliğinden sokulan bir kancayla çıkarılır (önemsiz sayılırdı).</li>
    <li><b>İç organlar:</b> Karnın sol yanından yapılan bir kesikle akciğerler, mide, bağırsaklar ve karaciğer çıkarılır, ayrı ayrı kurutulup dört <b>kanopik kavanoza</b> konur. <b>Kalp yerinde bırakılır:</b> öbür dünyada tartılacaktır.</li>
    <li><b>40 gün natron:</b> Beden, tuza benzeyen natron mineraliyle kaplanıp kurutulur.</li>
    <li><b>Dolgu ve yağlar:</b> Keten, talaş ve reçineyle doldurulur; deri yağlarla yumuşatılır.</li>
    <li><b>Sarma:</b> Yüzlerce metre keten bez; katların arasına <b>muskalar</b> (Horus\'un Gözü, skarabe, djed sütunu) yerleştirilir, büyü sözleri okunur. Bu aşama yaklaşık 15 gün sürer.</li>
    <li><b>70. gün - Ağız Açma Töreni:</b> Rahip, mumyanın ağzına ve gözlerine kutsal aletlerle dokunur: ölü öbür dünyada yiyebilsin, görebilsin, konuşabilsin diye.</li>
    </ol>
    <p class="note">Bu ayrıntılı yöntem zenginler içindi. Sıradan insanlar daha basit yöntemlerle ya da sıcak kumda kendiliğinden kuruyarak gömülürdü.</p>`,

  // "O dönemde yaşasaydım" rolleri. Metinlerde {firavun}, {yil}, {baskent}, {tanri}, {santiye} çağa göre doldurulur.
  roller: [
    { id: 'ciftci', ad: 'Çiftçi', ikon: '🌾', kim: 'Mısırlıların çoğu gibi Nil kıyısında bir köyde çiftçisin.',
      adimlar: [
        { saat: 'Şafak', sahne: 'ev', metin: 'Kerpiç evinin düz damında uyanıyorsun; sıcak gecelerde bütün aile damda uyur. Kahvaltıda arpa ekmeği, soğan ve bir kase koyu, hafif bira var. Yıl MÖ {yil}; ülkeyi {firavun} yönetiyor.' },
        { saat: 'Sabah', sahne: 'tarla', metin: 'Tarlandasın. Taşkın çekildiyse öküzlerle saban sürüyor, tohum serpiyorsun; hasat mevsimiyse orakla arpa biçiyorsun. Tarlanın sınırlarını taşkından sonra devletin ölçücüleri iplerle yeniden çizdi.' },
        { saat: 'Öğle', sahne: 'golge', metin: 'Güneş tepede, hava çok sıcak. Bir hurma ağacının gölgesinde azığını yiyorsun: ekmek, soğan, biraz kuru balık. Kanallarda timsahlara ve akreplere dikkat etmelisin.' },
        { saat: 'İkindi', sahne: 'katip', metin: 'Kâtipler ve muhafızlar hasattan devletin payını ölçmeye geldi. Vergiyi tam ödeyemeyenlerin dövüldüğü sahneler mezar resimlerinde bile var. Taşkın mevsiminde sen de birkaç ay {santiye} gibi devlet işlerinde çalışacaksın.' },
        { saat: 'Akşam', sahne: 'aksam', metin: 'Eve dönüyorsun. Çocuklar kanalda yüzmüş, eşin ekmek pişirmiş. Yağ kandilinin ışığında masallar anlatılır; köyün tanrıçasına ve evin koruyucusu cüce tanrı Bes\'e küçük bir dua.' }
      ],
      his: 'Hayatın ağır ama düzenli. Nil iyi taşarsa karnın tok, kötü taşarsa aç. Mutluluğun hasada, ailene ve köyündeki bayramlara bağlı. Büyük ihtimalle hiç köyünden uzaklaşmadan yaşarsın.',
      gercekler: ['Nüfusun büyük çoğunluğu (tahminen %80\'den fazlası) çiftçiydi.', 'Bebek ölümleri yüzünden doğumda beklenen ömür yaklaşık 20-30 yıldı; yetişkinliğe ulaşanlar 50-60 yaşlarını görebilirdi.', 'Para yoktu; ücretler ve vergiler tahılla ödenirdi.'] },
    { id: 'katip', ad: 'Kâtip', ikon: '✍️', kim: 'Okuma yazma bilen az sayıdaki kişiden birisin: bir kâtip.',
      adimlar: [
        { saat: 'Şafak', sahne: 'ev', metin: 'Yıkanıp temiz beyaz keten eteğini giyiyorsun. Kâtip olmak saygın bir iş: elin kalem tutuyor, ağır işlerden muafsın.' },
        { saat: 'Sabah', sahne: 'yazi', metin: 'Bağdaş kurup oturuyor, papirüsü dizinin üstünde geriyorsun. Kamış kalemini su ile ıslatıp siyah mürekkebe, başlıkları ve önemli yerleri yazmak için kırmızıya batırıyorsun. Bugün {baskent} ambarlarından çıkan tahılı kaydediyorsun.' },
        { saat: 'Öğle', sahne: 'golge', metin: 'Öğle yemeğinde öğrencilere ders veriyorsun. Okullarda öğrenciler "Mesleklerin Hicvi" adlı eski bir metni kopyalayarak öğrenir: "Kâtip ol, ellerin yumuşak kalsın; çömlekçi gibi çamura, demirci gibi ateşe mahkûm olma!"' },
        { saat: 'İkindi', sahne: 'katip', metin: 'Köylere gidip hasadı ölçüyor, vergileri ve işçi listelerini yazıyorsun. {santiye} için gelen erzak da senin kayıtlarında.' },
        { saat: 'Akşam', sahne: 'aksam', metin: 'Akşam arkadaşlarınla "senet" oyunu oynuyorsun. Yazmayı bildiğin için mektup yazmak isteyen komşular kapını çalıyor.' }
      ],
      his: 'Kendini ayrıcalıklı ve önemli hissedersin. Ama yanlış hesap ya da kayıp kayıt başını belaya sokabilir. Çocuğunu da kâtip yapmak için okula göndermeye çalışırsın.',
      gercekler: ['Nüfusun belki yalnızca %1\'i okuma yazma biliyordu.', 'Kâtipler yalnızca hiyeroglifi değil, daha hızlı el yazısını (hiyeratik) da öğrenirdi.', 'Rhind Matematik Papirüsü\'nü kopyalayan kâtibin adı biliniyor: Ahmose.'] },
    { id: 'isci', ad: 'İnşaat işçisi', ikon: '🧱', kim: 'Firavunun büyük şantiyesinde çalışan bir işçisin. Köle değilsin; ücretini ekmek, bira ve et olarak alıyorsun.',
      adimlar: [
        { saat: 'Şafak', sahne: 'ev', metin: 'İşçi kasabasında, ekip arkadaşlarınla paylaştığın kerpiç bir yatakhanede uyanıyorsun. Ekiplerin şakacı adları var: duvarlarda "Hufu\'nun Dostları", "Menkaure\'nin Sarhoşları" gibi ekip adları bulundu.' },
        { saat: 'Sabah', sahne: 'santiye', metin: 'Bugünkü şantiye: {santiye}. Tonlarca ağırlıktaki bir taşı kızağa yükleyip halatla çekiyorsunuz; önde biri kızağın kayması için kumu ıslatıyor. Ustabaşı tempo tutturmak için şarkı söyletiyor.' },
        { saat: 'Öğle', sahne: 'golge', metin: 'Fırınlardan sıcak ekmek, testilerle bira geliyor; arada sığır ve balık eti de. İşçilerin kemiklerinden, iyi beslendikleri anlaşıldı.' },
        { saat: 'İkindi', sahne: 'santiye', metin: 'Bir arkadaşının ayağı taşın altında kaldı. Hekimler kırığı tahta parçalarıyla sardı; işçi mezarlarında iyileşmiş kırıklar ve hatta başarılı ameliyat izleri bulundu.' },
        { saat: 'Akşam', sahne: 'aksam', metin: 'Kasabaya dönüyorsun. On günlük haftanın sonunda izin var; birkaç ay sonra köyüne, tarlana döneceksin. Burada ölürsen piramidin yakınındaki işçi mezarlığına, kralının yanına gömülmek bir onur.' }
      ],
      his: 'Çok yorgunsun ama yalnız değilsin: ekibin bir aile gibi. Kralın sonsuz hayatına katkı yaptığına inanıyorsun; bu sana gurur veriyor.',
      gercekler: ['Büyük Piramit\'te aynı anda 20.000-25.000 kişinin çalıştığı tahmin ediliyor.', 'Sık anılan bir tahmine göre bir işçinin günlük payı birkaç somun ekmek ve birkaç litre biraydı.', 'İşçiler dönüşümlü çalışırdı; çoğu birkaç ay sonra köyüne dönerdi.'] },
    { id: 'kadin', ad: 'Ev hanımı ve dokumacı', ikon: '🧵', kim: 'Bir zanaatkârın eşi, üç çocuk annesisin. Evi sen yönetiyorsun.',
      adimlar: [
        { saat: 'Şafak', sahne: 'nehir', metin: 'Başında testiyle Nil\'e ya da köy kuyusuna su almaya gidiyorsun; yolda komşularla sohbet.' },
        { saat: 'Sabah', sahne: 'ev', metin: 'Diz çökerek taş el değirmeninde tahıl öğütüyorsun; çok yorucu bir iş. Hamuru yoğurup ekmek pişiriyor, ekmeğin bir kısmını suyla mayalayıp bira yapıyorsun.' },
        { saat: 'Öğle', sahne: 'golge', metin: 'Gölgede keten iplik eğirip dokuma yapıyorsun. Fazla kumaşı pazarda takas edeceksin. Küçük çocuğun yanında oyuncak tahta timsahıyla oynuyor.' },
        { saat: 'İkindi', sahne: 'pazar', metin: 'Pazardasın: kumaşını sebze, balık ve bir kavanoz bal ile değiştiriyorsun. Para yok; mallar tahıl ya da bakır ağırlığına göre değerlendiriliyor.' },
        { saat: 'Akşam', sahne: 'aksam', metin: 'Gözlerine siyah sürme (kohl) çekiyorsun; hem süs hem de güneşe ve sineklere karşı koruma. Doğumda seni koruması için evdeki su aygırı tanrıça Taweret\'e dua ediyorsun.' }
      ],
      his: 'Gün boyu çalışırsın ama evin hanımı olarak saygı görürsün. Mısırlı kadınlar mülk sahibi olabilir, miras alabilir, mahkemeye gidebilir, boşanabilirdi: aynı çağın birçok toplumundan daha özgür.',
      gercekler: ['Doğum, kadınlar için en büyük hayati tehlikeydi.', 'Mısırlı kadınların evlilik sözleşmeleri ve mahkeme kayıtları günümüze ulaştı.', 'Evli kadının unvanı "Evin Hanımı" (nebet per) idi.'] },
    { id: 'rahip', ad: 'Rahip', ikon: '🙏', kim: '{tanri} tapınağında görevli bir "temiz" (wab) rahipsin.',
      adimlar: [
        { saat: 'Şafak öncesi', sahne: 'nehir', metin: 'Tapınağın kutsal gölünde yıkanıp arınıyorsun. Bütün vücut kıllarını tıraş etmişsin; yün değil yalnızca keten ve papirüs sandalet giyebilirsin.' },
        { saat: 'Şafak', sahne: 'tapinak', metin: 'Başrahip en içteki karanlık odanın mühürlü kapısını açıyor. Tanrının altın kaplı heykelini ilahilerle "uyandırıyor", yıkıyor, giydiriyor, tütsüyle kokuluyor. Halk bu odaya asla giremez.' },
        { saat: 'Sabah', sahne: 'tapinak', metin: 'Tanrıya ekmek, et, meyve, bira ve çiçek sunuluyor. Tanrı "yedikten" sonra yiyecekler rahiplere dağıtılıyor: senin maaşın da bu.' },
        { saat: 'Öğle', sahne: 'yazi', metin: 'Tapınak bir şirket gibi: tarlaları, sürüleri, atölyeleri var. Kâtip rahiplerle birlikte hesapları kontrol ediyorsun.' },
        { saat: 'Akşam', sahne: 'aksam', metin: 'Akşam töreninden sonra kutsal oda yeniden mühürleniyor. Çoğu rahip yılın dört ayından yalnızca birinde tapınakta görev yapar; ayın sonunda evine, ailene döneceksin. Bayramlarda tanrının heykelini kutsal kayığıyla omuzlarınızda halkın önünden geçireceksiniz.' }
      ],
      his: 'Kendini kutsal bir düzenin parçası hissedersin. İşin dünyanın düzenini (Maat) korumak. Saygı görürsün ve karnın toktur.',
      gercekler: ['Herodot, rahiplerin günde iki kez, gece iki kez soğuk suyla yıkandığını yazdı.', 'Tapınaklar ülkenin topraklarının büyük bir kısmına sahipti.', 'Halk tanrılara tapınağın dış avlularında ve evlerindeki küçük sunaklarda dua ederdi.'] },
    { id: 'asker', ad: 'Asker', ikon: '🛡️', kim: 'Firavunun ordusunda bir askersin.',
      adimlar: [
        { saat: 'Şafak', sahne: 'kamp', metin: 'Kamptasın. Yeni Krallık\'tan önce ordunun çoğu köylerden toplanan yaya askerlerdi; Yeni Krallık\'ta ise atlı savaş arabaları ordunun yıldızı oldu.' },
        { saat: 'Sabah', sahne: 'talim', metin: 'Talim: mızrak, kalkan, okçuluk. Savaş arabası ekibindeysen bir sürücü ve bir okçu olarak iki kişisiniz. Ülkeyi {firavun} yönetiyor; sefer emri her an gelebilir.' },
        { saat: 'Öğle', sahne: 'yuruyus', metin: 'Uzun bir yürüyüş: çölde suyu idareli kullanıyorsun. Sırtında azığın, ekmek ve kuru et.' },
        { saat: 'İkindi', sahne: 'savas', metin: 'Savaşta düşman askeri saymak için öldürülen düşmanların elleri kesilip kâtiplere sayılırdı: duvar kabartmalarında bile görülen sert bir gelenek.' },
        { saat: 'Akşam', sahne: 'kamp', metin: 'Kampta ateşin başında. Kahramanlık gösterenlere firavun "altın sinekler" denen cesaret nişanları ve toprak verir. Emekli olunca sana bir tarla verilecek.' }
      ],
      his: 'Heyecan, korku ve gurur bir arada. Ganimet ve nişan zengin edebilir, ama çölde susuzluk ve uzak savaşlar ölüm demek olabilir. Bir Mısır metni askerliği "en zor meslek" diye anlatır.',
      gercekler: ['Kadeş Savaşı\'nda (MÖ ~1274) iki taraf toplam binlerce savaş arabası kullandı.', 'Ordunun bir kısmı yabancı paralı askerlerdi: Nubyalı okçular, sonra Şardanalar ve Yunanlar.', 'Kral Ahmose\'nin annesi, cesaret nişanı olarak altın sineklerle gömüldü.'] },
    { id: 'cocuk', ad: 'Çocuk', ikon: '🧒', kim: 'Yedi yaşında bir çocuksun.',
      adimlar: [
        { saat: 'Şafak', sahne: 'ev', metin: 'Saçın kazınmış, yalnızca bir yanda uzun bir örgü var: "gençlik buklesi". Sıcakta çoğu zaman çıplak dolaşıyorsun; boynunda kötülükten koruyan bir muska.' },
        { saat: 'Sabah', sahne: 'ders', metin: 'Bir kâtibin oğluysan okula gidiyorsun: kırık çömlek parçalarına yazı çalışıyorsun; tembellik edersen öğretmen sopa gösteriyor. Kızlar ve köylü çocukları ise evde ve tarlada annelerinden, babalarından iş öğreniyor.' },
        { saat: 'Öğle', sahne: 'oyun', metin: 'Arkadaşlarınla top oynuyor, ip çekiyor, birbirinizin sırtına binip yarışıyorsunuz. Oyuncakların: tahta at, ağzı açılıp kapanan tahta timsah, bez bebek.' },
        { saat: 'İkindi', sahne: 'nehir', metin: 'Kanalda yüzüyor, kuş kovalıyorsun. Büyükler timsahlara ve akreplere karşı uyarıyor.' },
        { saat: 'Akşam', sahne: 'aksam', metin: 'Evcil kedin kucağında, annen masal anlatıyor: belki Sinuhe\'nin maceraları ya da Batık Gemici\'nin dev yılanla karşılaşması.' }
      ],
      his: 'Oyun ve keşif dolu bir çocukluk. Ama hastalıklar tehlikeli; birçok çocuk beş yaşını göremezdi. 12-14 yaşlarında yetişkin sayılır, çalışmaya ve evlenmeye hazırlanırdın.',
      gercekler: ['Mısır\'dan günümüze çok sayıda oyuncak ve masa oyunu ulaştı.', 'Kızlar genellikle 12-14, erkekler biraz daha geç yaşta evlenirdi.', 'Çocukluk hastalıklarına karşı büyü sözleri ve muskalar kullanılırdı.'] }
  ],

  // Yapıların içi: duvar resimleri ve yazıtlar (yakınlaşınca açılır)
  ic: {
    eslesme: {
      khufu: 'piramit', krallar: 'amduat', deyrelmedine: 'kalp', unas: 'metinler', pepi2: 'metinler',
      mastabalar: 'mastaba', sakkaramastaba: 'mastaba', djoser: 'mastaba', hatsepsut: 'punt', abusimbel: 'kades', ramesseum: 'kades',
      karnak: 'sunu', luksor: 'sunu', medinethabu: 'sunu', edfu: 'sunu', dendera: 'sunu', komombo: 'sunu', phile: 'sunu', beyazsapel: 'sunu', mentuhotep: 'sunu'
    },
    sahneler: {
      piramit: { ad: 'Büyük Piramit\'in içi', alt: 'Kesit çizimi: içeride duvar resmi yok, ama gizemli odalar ve koridorlar var', not: 'Büyük Piramit\'in iç duvarları süslemesizdir; Piramit Metinleri ancak 200 yıl sonra (Unas) ortaya çıktı.',
        noktalar: [
          { id: 'giris', ad: 'Giriş ve inen koridor', metin: 'Kuzey yüzde, yerden ~17 m yükseklikte. Asıl giriş taşlarla kapatılmıştı; bugün turistler 9. yüzyılda açılan "Me\'mun tüneli"nden girer. Koridor ana yönlere çok hassas hizalı.' },
          { id: 'yeralti', ad: 'Yeraltı odası', metin: 'Kayanın içine oyulmuş, bitmemiş bir oda. Planın sonradan değiştiğinin işareti olabilir.' },
          { id: 'kralice', ad: '"Kraliçe Odası"', metin: 'Adı Arap gezginlerden kalma bir yanlışlık: kraliçe için değil, belki kralın ruhunu temsil eden bir heykel için yapıldı. İki dar havalandırma kanalının sonundaki küçük kapılar robotlarla incelendi.' },
          { id: 'galeri', ad: 'Büyük Galeri', metin: '8,6 m yüksekliğinde, 47 m uzunluğunda, tavanı basamak basamak daralan muhteşem bir koridor. Belki tıkaç taşlarını saklamak için yapıldı.' },
          { id: 'kral', ad: 'Kral Odası', metin: 'Tamamen kırmızı Asuan granitiyle kaplı. İçinde kapaksız, boş bir granit lahit var. Tavanında her biri onlarca ton ağırlığında granit kirişler.' },
          { id: 'yuk', ad: 'Yük odaları ve işçi yazıları', metin: 'Kral Odası\'nın üstündeki beş boşluk, tavanın ağırlığını dağıtır. 1837\'de burada işçi ekiplerinin boya ile yazdığı "Hufu\'nun Dostları" gibi yazılar bulundu: piramidin Keops\'a ait olduğunun güçlü kanıtı.' },
          { id: 'kanal', ad: '"Hava kanalları"', metin: 'Kral ve Kraliçe odalarından çıkan dar kanallar. Bazı araştırmacılara göre kralın ruhunun gökteki yıldızlara (Orion, kutup yıldızları) yükselmesi için yönlendirilmişti.' },
          { id: 'bosluk', ad: '"Büyük Boşluk" (2017)', metin: 'Uzaydan gelen müon parçacıklarıyla yapılan taramada Büyük Galeri\'nin üstünde en az 30 m uzunluğunda bilinmeyen bir boşluk bulundu. Ne olduğu hâlâ bilinmiyor.' }
        ] },
      amduat: { ad: 'Kral mezarının duvarı', alt: 'Amduat: güneşin geceleyin yeraltından geçişi (III. Thutmose, KV34 tarzında)', not: 'Bu çizim, KV34 ve diğer kral mezarlarındaki "Amduat" resimlerinden esinlenen basitleştirilmiş bir canlandırmadır.',
        noktalar: [
          { id: 'kayik', ad: 'Güneş kayığı', metin: 'Güneş tanrısı gece yeraltı dünyasının 12 saatini bir kayıkla geçer. Ölen kral da bu yolculuğa katılıp sabah güneşle birlikte yeniden doğmayı umar.' },
          { id: 'ra', ad: 'Koç başlı güneş tanrısı', metin: 'Gece yolculuğunda güneş tanrısı gerçek resimlerde koç başlı ("Auf-Ra", güneşin bedeni) gösterilir; burada basitleştirilmiş olarak başında güneş kursuyla çizildi. Kayığın ortasında bir kabin içinde durur ve onu koruyucu yılan Mehen sarar.' },
          { id: 'cekenler', ad: 'Kayığı çeken tanrılar', metin: 'Yeraltında su olmayan yerlerde kayık halatlarla çekilir. Çizimlerdeki figürlerin her birinin adı yanına yazılmıştır.' },
          { id: 'apep', ad: 'Apep (Apophis)', metin: 'Kaos yılanı. Her gece güneşi yutmaya çalışır; tanrılar onu bağlar ve bıçaklarla keser. Güneşin her sabah doğması, düzenin kaosa karşı zaferidir.' },
          { id: 'saatler', ad: 'Gecenin saatleri', metin: 'Amduat ("Yeraltında olan") 12 bölümdür: her biri gecenin bir saatini anlatır. Her bölümün kapısını yıldız biçimli tanrıçalar korur.' },
          { id: 'yazi', ad: 'Yazıtlar', metin: 'Duvar, açılmış dev bir papirüs tomarı gibi tasarlanmıştır; yazılar el yazısına yakın sade hiyerogliflerle yazılmıştır. Metin, kralın her kapıdan geçmek için bilmesi gereken adları ve sözleri sayar.' },
          { id: 'kartus', ad: 'Kartuş', metin: 'Oval çerçeve, içindeki adın bir kral adı olduğunu gösterir. Krallar iki kartuşlu ada sahipti: taht adı ve doğum adı.' }
        ] },
      kalp: { ad: 'Kalbin tartılması', alt: 'Ölüler Kitabı, 125. bölüm (Ani Papirüsü ve işçi mezarlarındaki resimler tarzında)', not: 'Bu çizim, Ani Papirüsü (British Museum) gibi eserlerden esinlenen basitleştirilmiş bir canlandırmadır.',
        noktalar: [
          { id: 'olu', ad: 'Ölen kişi', metin: 'Ölü, yargılanacağı "İki Gerçeğin Salonu"na getirilir. Burada 42 yargıç tanrının önünde "olumsuz itiraf"ı okur: "Ben haksızlık etmedim, ben çalmadım, ben öldürmedim, ben açlığa sebep olmadım, ben kimseyi ağlatmadım…"' },
          { id: 'anubis', ad: 'Anubis', metin: 'Çakal başlı tanrı teraziyi kontrol eder; ölüyü elinden tutup yargı salonuna getiren de odur.' },
          { id: 'terazi', ad: 'Terazi: kalp ve tüy', metin: 'Bir kefede ölünün kalbi (vicdanı ve anıları), öbüründe doğruluk tanrıçası Maat\'ın tüyü durur. Kalp tüyden ağır gelmezse, yani günahlarla yüklü değilse, ölü cennete (Sazlıklar Tarlası) gider.' },
          { id: 'ammit', ad: 'Ammit, "ölü yiyen"', metin: 'Başı timsah, gövdesi aslan, arkası su aygırı olan canavar. Kalp ağır gelirse onu yer ve ölü ikinci kez, sonsuza kadar ölür. Mısırlıların en büyük korkusu.' },
          { id: 'thot', ad: 'Thot', metin: 'İbis başlı yazı tanrısı sonucu kaydeder: "Kalbi doğru bulundu."' },
          { id: 'horus', ad: 'Horus', metin: 'Sınavı geçen ölüyü elinden tutup Osiris\'in huzuruna götürür.' },
          { id: 'osiris', ad: 'Osiris tahtında', metin: 'Yeraltının kralı, arkasında İsis ve Nephthys. Ölü onun krallığına kabul edilir ve bir "Osiris" olur.' },
          { id: 'yargiclar', ad: 'Yargıç tanrılar', metin: 'Üstteki sırada oturan tanrılar. Ölü her birinin adını bilip ona ayrı bir günahı işlemediğini söylemelidir.' },
          { id: 'yazi', ad: 'Hiyeroglif sütunları', metin: 'Sütunlar, ölünün okuduğu büyülü sözleri ve kişilerin adlarını içerir. Hiyeroglifler, figürlerin baktığı yöne doğru okunur.' }
        ] },
      metinler: { ad: 'Piramit Metinleri', alt: 'Unas Piramidi\'nin mezar odası (MÖ ~2350)', not: 'Bu çizim, Sakkara\'daki Unas Piramidi\'nin iç odalarından esinlenen basitleştirilmiş bir canlandırmadır.',
        noktalar: [
          { id: 'sutunlar', ad: 'Mavi hiyeroglif sütunları', metin: 'Dünyanın bilinen en eski uzun dinî metinleri. Ölü kralın göğe yükselip yıldızlar ve güneş tanrısıyla birleşmesini sağlayan büyü sözleri: "Kral göğe merdivenle tırmanır", "Kral gökyüzünü öper, bir şahin gibi uçar".' },
          { id: 'tavan', ad: 'Yıldızlı tavan', metin: 'Lacivert tavan sarı beş köşeli yıldızlarla kaplıdır: mezar odası gökyüzünün kendisidir ve kral "hiç batmayan yıldızlar" (kutup çevresindeki yıldızlar) arasına katılacaktır.' },
          { id: 'lahit', ad: 'Lahit', metin: 'Odanın batı ucunda, Batı (ölülerin diyarı) yönünde siyah taştan lahit.' },
          { id: 'saray', ad: '"Saray cephesi" süslemesi', metin: 'Lahdin çevresindeki duvarlar kaymaktaşıdır ve renkli, girintili bir saray cephesi gibi boyanmıştır: kral öbür dünyada da sarayında yaşayacaktır.' },
          { id: 'kartus', ad: 'Unas\'ın adı', metin: 'Metinlerde kralın adı tekrar tekrar geçer: büyü sözleri kişiye özeldir.' },
          { id: 'yamyam', ad: '"Yamyam İlahisi"', metin: 'Metinlerden biri kralın tanrıları "yiyerek" onların gücünü kendine kattığını anlatır. Gerçek yamyamlık değil, gücün sembolik olarak alınmasıdır.' }
        ] },
      mastaba: { ad: 'Bir soylunun mastabası', alt: 'Günlük hayat sahneleri (Sakkara\'daki Ti ve Ptahhotep mastabaları tarzında)', not: 'Bu çizim, Sakkara\'daki Ti mastabası gibi Eski Krallık mezarlarından esinlenen basitleştirilmiş bir canlandırmadır.',
        noktalar: [
          { id: 'tarla', ad: 'Tarım', metin: 'Saban süren öküzler, tohum serpen köylüler, orakla hasat. Mezar sahibi öbür dünyada da bol yiyeceği olsun ister.' },
          { id: 'hayvan', ad: 'Sığır sürüsü', metin: 'Sığırlar bir kanaldan geçirilir; çoban, timsahlardan korunmak için bir buzağıyı sırtında taşır ve ötekiler annelerini izler. Duvar yazısında çobanların birbirine söylediği sözler bile yazılıdır.' },
          { id: 'firin', ad: 'Fırın ve bira', metin: 'Ekmek hamuru yoğrulur, kalıplarda pişirilir; bira küplerde mayalanır. Mısır\'ın iki temel besini.' },
          { id: 'zanaat', ad: 'Zanaatkârlar', metin: 'Marangozlar, heykeltıraşlar, kuyumcular, deri ustaları. Aletleri ve çalışma yöntemleri bu resimlerden öğrenildi.' },
          { id: 'av', ad: 'Bataklıkta av', metin: 'Mezar sahibi papirüs kayığında, elinde zıpkınla su aygırı ve balık avlar; kuşlar havalanır. Kaosun (vahşi doğa) düzen tarafından yenilmesini de simgeler.' },
          { id: 'sunu', ad: 'Sunu taşıyanlar', metin: 'Mezar sahibinin çiftliklerinden gelen kadınlar ve erkekler başlarında sepetlerle yiyecek getirir. Resimler "büyülü" sayılırdı: duvardaki ekmek, öbür dünyada gerçek ekmek olacaktı.' },
          { id: 'sahip', ad: 'Mezar sahibi', metin: 'Diğerlerinden çok daha büyük çizilir: Mısır sanatında boyut önemi gösterir. Yüzü yandan, gözü ve omuzları önden çizilir.' }
        ] },
      punt: { ad: 'Punt seferi kabartması', alt: 'Hatşepsut Tapınağı, Deyr el-Bahri (MÖ ~1470)', not: 'Bu çizim, Deyr el-Bahri\'deki Punt kabartmalarından esinlenen basitleştirilmiş bir canlandırmadır.',
        noktalar: [
          { id: 'gemi', ad: 'Mısır gemileri', metin: 'Beş büyük yelkenli gemi Kızıldeniz\'den Punt\'a (bugünkü Eritre-Somali kıyıları) gitti. Gemiler küreklerle ve büyük kare yelkenle yol alıyor.' },
          { id: 'agac', ad: 'Tütsü ağaçları', metin: 'Kökleriyle birlikte sepetlere konmuş mür ağaçları: Mısır\'da yetiştirilmek üzere getirildi. Tarihin bilinen en eski bitki nakli girişimlerinden.' },
          { id: 'babun', ad: 'Babunlar ve hayvanlar', metin: 'Gemilerin direklerinde babunlar oynuyor; ayrıca zürafa, panter postu, fildişi, abanoz ve altın getirildi.' },
          { id: 'ev', ad: 'Punt evleri', metin: 'Punt halkının evleri, merdivenle çıkılan, kazıklar üzerinde kubbeli kulübeler olarak gösterilmiş.' },
          { id: 'kralice', ad: 'Punt Kraliçesi Ati', metin: 'Kral Parahu\'nun eşi Ati, çok iri ve kıvrımlı bir bedenle gösterilir; kabartmanın en ünlü figürlerinden.' },
          { id: 'balik', ad: 'Deniz canlıları', metin: 'Geminin altındaki suda Kızıldeniz\'e özgü balıklar, istakozlar ve kalamarlar o kadar doğru çizilmiş ki biyologlar türlerini tanıyabildi.' },
          { id: 'yazi', ad: 'Yazıtlar', metin: 'Yazılar seferi ve getirilenleri sayar: "Gemilerin Punt ülkesinin harikalarıyla, tanrı ülkesinin güzel kokulu ağaçlarıyla yüklenmesi…"' }
        ] },
      kades: { ad: 'Kadeş Savaşı kabartması', alt: 'II. Ramses (Ebu Simbel, Ramesseum, Luksor), MÖ ~1274', not: 'Bu çizim, Ebu Simbel ve Ramesseum\'daki Kadeş kabartmalarından esinlenen basitleştirilmiş bir canlandırmadır.',
        noktalar: [
          { id: 'kral', ad: 'II. Ramses savaş arabasında', metin: 'Kral herkesten çok daha büyük çizilir; tek başına düşman saflarına dalıp ok atar. Metne göre ordusu dağıldığında tanrı Amon\'a seslendi ve tek başına savaştı (propaganda!).' },
          { id: 'hitit', ad: 'Hitit savaş arabaları', metin: 'Hitit arabalarında üç kişi (sürücü, mızrakçı, kalkancı), Mısır arabalarında iki kişi gösterilir. Hitit arabaları daha ağır, Mısırlılarınki daha hızlıydı.' },
          { id: 'nehir', ad: 'Asi Nehri (Orontes)', metin: 'Kaçan Hitit askerleri nehre düşüyor; bir sahnede Halep prensi baş aşağı tutularak içtiği sudan kurtarılıyor.' },
          { id: 'kale', ad: 'Kadeş kalesi', metin: 'Nehir ve hendekle çevrili surlu şehir (bugünkü Suriye\'de, Humus yakınında).' },
          { id: 'casus', ad: 'Casuslar', metin: 'Savaştan önce iki bedevi, Hititlerin çok uzakta olduğunu söyleyerek Mısırlılara yanlış bilgi verdi. Sonra yakalanan iki Hitit casusu dövülünce gerçeği söyledi: Hitit ordusu Kadeş\'in hemen arkasında saklanıyordu. Kabartmada bu sahne de var.' },
          { id: 'yazi', ad: 'Yazıtlar', metin: 'Savaş iki ayrı metinle anlatılır: "Şiir" ve "Rapor". Mısır tarafı zafer ilan etti; Hitit belgeleri ise sonucun en fazla berabere olduğunu gösteriyor. Ardından MÖ ~1259\'da barış antlaşması imzalandı.' }
        ] },
      sunu: { ad: 'Tapınak duvarı', alt: 'Firavun tanrıya sunu yapıyor (Karnak, Luksor, Edfu tarzında)', not: 'Bu çizim, Mısır tapınaklarındaki sunu sahnelerinden esinlenen basitleştirilmiş bir canlandırmadır.',
        noktalar: [
          { id: 'kral', ad: 'Firavun', metin: 'Kral, ülkenin tek baş rahibi sayılırdı: duvarlarda her zaman tanrıya kendisi sunu yaparken gösterilir. Gerçekte bu işi her gün rahipler yapardı.' },
          { id: 'maat', ad: 'Maat sunusu', metin: 'Kralın avucundaki küçük oturan tanrıça heykeli Maat\'tır: "Dünyanın düzenini ve adaleti koruyorum" demektir. En önemli sunudur.' },
          { id: 'tanri', ad: 'Tanrı', metin: 'Tanrı, karşılığında krala elindeki "ankh" (hayat) işaretini uzatır: uzun ömür, güç ve zafer verir. Bu bir alışveriş gibidir: düzen karşılığında hayat.' },
          { id: 'gunes', ad: 'Kanatlı güneş kursu', metin: 'Kapıların ve sahnelerin üstündeki kanatlı güneş, Horus\'un (Behdeti) koruyucu simgesidir. Kötülüğü dışarıda tutar.' },
          { id: 'kartus', ad: 'Kartuşlar', metin: 'Kralın adları oval çerçeveler içinde. Bir kral başka bir kralın anıtını sahiplenmek istediğinde kartuştaki adı kazıyıp kendi adını yazdırırdı.' },
          { id: 'sutun', ad: 'Papirüs sütunlar', metin: 'Sütunlar papirüs demeti biçimindedir: tapınak, dünyanın yaratıldığı ilk bataklığın taştan bir modelidir.' },
          { id: 'yazi', ad: 'Yazıtlar', metin: 'Sahnenin yanındaki sütunlar konuşmaları yazar: tanrı krala "Sana sonsuz yaşam ve güç veriyorum" der. Yazılar renkliydi; bugün çoğu boyası solmuş.' }
        ] }
    }
  }
};
