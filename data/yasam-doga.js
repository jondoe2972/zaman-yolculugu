// 🐾🌿 Yaşa: Hayvan ve Bitki Olarak Bir Gün / Bir Ömür
// 20 hayvan (5'i nesli tükenmiş tarihî tür!) + 16 bitki ve ağaç = 36 doğa yaşamı.
'use strict';
window.YASAM_DOGA = {
  hayvanlar: [
    {
      id: 'yd-mavibalina', ad: 'Mavi Balina', ik: '🐋', tur: 'hayvan', ll: [-60, -40],
      omur: '80 – 90 yıl',
      beslenme: 'Süzerek beslenen etçil — günde ~4 ton (40 milyon!) minik kril yutar.',
      alan: 'Tüm açık okyanuslar (yazın kutuplar, kışın sıcak tropikal sular)',
      superguc: '188 desibellik şarkısı su altında 800 km öteden duyulur; kalbi küçük bir otomobil boyutundadır.',
      tehdit: 'Gemi çarpmaları, okyanus gürültü kirliliği ve iklim değişikliğiyle azalan kril sürüleri.',
      dongu: [
        ['🌅 Derin Dalış', 'Sabah gün doğarken 100–200 metre derine dalar, ağzını 90 derece açarak bir kerede kendi ağırlığın kadar su ve kril yutarsın.'],
        ['☀️ Balina Çubuklarıyla Süzme', 'Dev dilinle suyu diş yerine geçen keratin çubuklarından dışarı iter, geride kalan milyonlarca krili tek lokmada yersin.'],
        ['🌙 Okyanus Şarkısı', 'Gece karanlığında derin bas frekanslarla kilometrelerce ötedeki diğer balinalarla haberleşir, yarım beynin uyurken diğer yarısıyla nefes almaya yüzeye çıkarsın.']
      ],
      w: 'Blue whale'
    },
    {
      id: 'yd-kartal', gocNeden: 'Kuzeyde kışın kalın kar tavşan ve dağ sıçanı gibi avları gizler; av bulmak zorlaşınca kartallar güneye iner. Ilıman dağlarda av yıl boyu bulunduğu için oradakiler göç etmez.', ad: 'Kaya Kartalı', ik: '🦅', tur: 'hayvan', ll: [39.5, 38.0],
      omur: '25 – 30 yıl (doğada)',
      beslenme: 'Yırtıcı etçil — tavşan, dağ sıçanı, tilki ve leşle beslenir.',
      alan: 'Kuzey yarımkürenin yüksek dağları, kanyonları ve bozkırları (Anadolu dahil)',
      superguc: 'Gözleri insandan 4–8 kat keskindir (3 km ötedeki tavşanı seçer) ve dalışta saatte 240–320 km hıza ulaşır.',
      tehdit: 'Yüksek gerilim hatları, zehirli yemler ve kayalık yuva alanlarının tahribi.',
      dongu: [
        ['🌅 Termal Yükseliş', 'Sabah güneşi kayaları ısıtınca yükselen sıcak hava akımına (termal) kanatlarını açar, tek kanat çırpmadan bulutlara çıkarsın.'],
        ['☀️ Şimşek Dalışı', '2 km aşağıda hareket eden bir tarla tavşanını fark edip kanatlarını gövdene kapatır, ok gibi aşağı süzülüp pençelerinle yakalarsın.'],
        ['🌙 Sarp Uçurum Yuvası', 'Eşinle her yıl yeni dallar ekleyerek 2 metre genişliğe ulaşan dev kayalık yuvana dönüp yavrularını beslersin.']
      ],
      w: 'Golden eagle'
    },
    {
      id: 'yd-aslan', ad: 'Afrika Aslanı', ik: '🦁', tur: 'hayvan', ll: [-2.3, 34.8],
      omur: '12 – 16 yıl (dişiler erkeklerden uzun yaşar)',
      beslenme: 'Etçil — zebra, gnu, ceylan ve manda avlar; tek seferde 30 kg et yiyebilir.',
      alan: 'Sahra Altı Afrika\'nın açık savanları ve çalılıkları',
      superguc: 'Kükremesi 8 kilometre öteden duyulur; kedigiller arasında kalabalık aile sürüsü (pride) kuran tek türdür.',
      tehdit: 'Yaşam alanı kaybı, kuraklık ve insan-hayvan çatışması.',
      dongu: [
        ['🌅 Şafak Dönüşü', 'Gece serinliğinde sürüyle yaptığın avdan sonra su birikintisinde serinler, yavrularla oynarsın.'],
        ['☀️ Akasya Gölgesinde Uyku', '40 °C kavurucu savan sıcağında günde 18–20 saat akasya ağaçlarının gölgesinde uyuyarak su ve enerji saklarsın.'],
        ['🌙 İşbirliğiyle Pusu', 'Karanlık çökünce dişiler yelpaze gibi açılıp avı pusu kuran diğer sürünün üstüne sürer.']
      ],
      w: 'Lion'
    },
    {
      id: 'yd-ahtapot', ad: 'Dev Pasifik Ahtapotu', ik: '🐙', tur: 'hayvan', ll: [48.5, -124.5],
      omur: '3 – 5 yıl (çok zeki ama kısa ömürlü!)',
      beslenme: 'Etçil — yengeç, ıstakoz, midye ve küçük balıkları gagasıyla kırıp yer.',
      alan: 'Kuzey Pasifik\'in soğuk, kayalık deniz tabanları ve mağaraları',
      superguc: '3 kalbi, mavi kanı, 9 sinir merkezi vardır; saniyenin beşte birinde hem rengini hem deri dokusunu kayaya benzetir.',
      tehdit: 'Köpekbalıkları, foklar ve yumurtalarını korurken aylarca yemek yememesi.',
      dongu: [
        ['🌅 Kaya Kovuğu', 'Gündüzleri bedeninde hiç kemik olmadığı için bozuk para kadar dar bir kaya yarığına sığıp saklanırsın.'],
        ['☀️ Renk Değiştiren Kâşif', 'Avcı bir fok yaklaşınca derindeki milyonlarca pigment hücresini (kromatofor) açıp yosun kaplı bir taşa dönüşürsün.'],
        ['🌙 Gece Avcısı', 'Karanlıkta 8 kolundaki 2.000 vantuzla hem dokunur hem tat alırsın; istiridye kabuklarını ustaca açıp beslenirsin.']
      ],
      w: 'Giant Pacific octopus'
    },
    {
      id: 'yd-penguen', gocNeden: 'Yumurta ve yavru için aylarca erimeyecek sağlam deniz buzu gerekir. Koloni kıyıdan uzakta, buzun en kalın olduğu yerde kurulur; yavru büyüdüğünde buz erir ve okyanus yakınlaşır.', ad: 'İmparator Penguen', ik: '🐧', tur: 'hayvan', ll: [-77.5, 166.0],
      omur: '15 – 20 yıl',
      beslenme: 'Etçil — balık, kalamar ve Antarktika krili (500 m derine dalabilir!).',
      alan: 'Antarktika deniz buzları ve Güney Okyanusu',
      superguc: '-60 °C rüzgârda binlerce penguenle sıkı çember oluşturup sırayla dıştan içe geçerek ısınır; su altında 20 dakika nefes tutar.',
      tehdit: 'Deniz buzlarının erken erimesi, leopar fokları ve katil balinalar.',
      dongu: [
        ['🌅 Buz Yürüyüşü', 'Kış başlarken denizden 100 km içeri yürüyüp dev kolonide eşinle buluşursun.'],
        ['☀️ 65 Günlük Nöbet', 'Anne yumurtayı bırakıp denize beslenmeye gidince, baba yumurtayı ayaklarının üstünde kuluçka kesesinde 2 ay boyunca tek lokma yemeden ısıtır.'],
        ['🌙 Buzul Fırtınasında Dayanışma', 'Saatte 150 km esen tipide yüzlerce penguen omuz omuza sokulup sıcaklığı 35 °C\'ye kadar korursun.']
      ],
      w: 'Emperor penguin'
    },
    {
      id: 'yd-fil', ad: 'Afrika Fili', ik: '🐘', tur: 'hayvan', ll: [-19.0, 23.0],
      omur: '60 – 70 yıl',
      beslenme: 'Otçul — günde ~150 kg ot, yaprak, ağaç kabuğu ve meyve + 150 litre su!',
      alan: 'Afrika savanları, ormanları ve nehir vadileri',
      superguc: 'Hortumunda 40.000 kas bulunur; ayak tabanlarıyla 30 km ötedeki diğer sürülerin düşük frekanslı titreşimlerini hisseder.',
      tehdit: 'Fildişi kaçak avcılığı, kuraklık ve göç yollarının bölünmesi.',
      dongu: [
        ['🌅 Çamur Banyosu', 'Sabah güneş yükselirken gölette yıkanıp sırtına çamur püskürtürsün — bu doğal güneş kremi ve sinek kovucundur!'],
        ['☀️ Bilgi Taşıyan Sürü', 'En yaşlı dişi (matriark) 50 yıllık hafızasıyla kurak mevsimde bile gizli su kaynaklarının yolunu bulur.'],
        ['🌙 Ormanın Bahçıvanı', 'Günde 20 km yürüyüp yediğin meyve tohumlarını kilometrelerce öteye taşıyarak yeni ağaçlar ve su çukurları yaratırsın.']
      ],
      w: 'African bush elephant'
    },
    {
      id: 'yd-kaplumbaga', gocNeden: 'Kurak ve serin mevsimde ovadaki otlar kurur; sisin nemli tuttuğu yaylalar ise yeşil kalır. Yağmurlar başlayınca taze ot ve yumurtlama alanı için ovaya geri iner.', ad: 'Galápagos Dev Kaplumbağası', ik: '🐢', tur: 'hayvan', ll: [-0.65, -90.5],
      omur: '100 – 175+ yıl (en uzun yaşayan kara omurgalılarından!)',
      beslenme: 'Otçul — dikenli incir kaktüsü, çimen, yaprak ve düşen meyveler.',
      alan: 'Galápagos Adaları (Ekvador, Büyük Okyanus)',
      superguc: 'Çok yavaş metabolizması sayesinde hiç yemek ve su olmadan 1 yıla kadar hayatta kalabilir!',
      tehdit: 'Adalara sonradan getirilen istilacı türler ve volkanik patlamalar.',
      dongu: [
        ['🌅 Güneşle Şarj', 'Soğukkanlı olduğun için sabah 2 saat güneşlenip vücut ısını artırır, sonra yavaşça harekete geçersin.'],
        ['☀️ Kaktüs Ziyafeti', 'Saatte yalnızca 300 metre hızla yürüyüp sulu kaktüs yapraklarıyla hem beslenir hem su ihtiyacını karşılarsın.'],
        ['🌙 Çamur Havuzu', 'Akşam serinliğinde sığ çamur çukuruna gömülüp ısınarak ve sivrisineklerden korunarak uyursun.']
      ],
      w: 'Galápagos tortoise'
    },
    {
      id: 'yd-ari', ad: 'Bal Arısı (İşçi Arı)', ik: '🐝', tur: 'hayvan', ll: [38.0, 28.5],
      omur: '4 – 6 hafta (yazın) · 4 – 6 ay (kış arısı)',
      beslenme: 'Otçul — çiçek nektarı (enerji) ve polen (protein); nektarı bala dönüştürür.',
      alan: 'Kutuplar hariç tüm dünyadaki çiçekli çayırlar, ormanlar ve bahçeler',
      superguc: 'Kovanda "8-figürü sallanma dansı" yaparak güneşin açısına göre çiçek tarlasının yönünü ve tam mesafesini arkadaşlarına tarif eder!',
      tehdit: 'Tarım ilaçları, monokültür tarım ve çiçek çeşitliliğinin azalması.',
      dongu: [
        ['🌅 Gençlik Görevleri', 'Hayatının ilk 2 haftasında kovanda temizlik yapar, larvaları besler ve altıgen balmumu petekleri örersin.'],
        ['☀️ 1.000 Çiçeklik Uçuş', 'Tarlacı olunca günde yüzlerce çiçeği ziyaret edip polen taşır — farkında olmadan insanların yediği meyve ve sebzelerin üçte birini tozlaştırırsın!'],
        ['🌙 Kovan Kliması', 'Gece kovan çok ısınırsa yüzlerce arıyla kanat çırpıp havayı serinletir, nektardaki suyu uçurup bal yaparsın.']
      ],
      w: 'Western honey bee'
    },
    {
      id: 'yd-kutupayisi', ad: 'Kutup Ayısı', ik: '🐻‍❄️', tur: 'hayvan', ll: [78.0, 16.0],
      omur: '20 – 25 yıl (doğada)',
      beslenme: 'Etçil — ağırlıklı olarak halkalı fok (yağca zengin); günde 100 km yüzebilir.',
      alan: 'Arktik Okyanusu deniz buzları (Svalbard, Kanada, Grönland, Sibirya)',
      superguc: 'Koku alma duyusu o kadar güçlüdür ki 1 metre kalınlığındaki kar ve buzun altındaki foku 1,5 km öteden koklar!',
      tehdit: 'Deniz buzlarının erimesiyle avlanma mevsiminin kısalması.',
      dongu: [
        ['🌅 Buz Deliği Nöbeti', 'Fokların nefes almak için açtığı buz deliğinin başında saatlerce kıpırdamadan beklersin.'],
        ['☀️ Buzlu Suda Maraton', 'Buz kütleleri arasında geniş ön patilerini kürek gibi kullanarak 0 °C suda saatlerce yorulmadan yüzersin.'],
        ['🌙 Kar İninde Kış', 'Anne kutup ayısı sonbaharda karın içine sıcak bir in kazar ve ikiz yavrularını bahara kadar süt vererek büyütür.']
      ],
      w: 'Polar bear'
    },
    {
      id: 'yd-panda', ad: 'Dev Panda', ik: '🐼', tur: 'hayvan', ll: [30.8, 103.3],
      omur: '15 – 20 yıl (doğada) · 30+ yıl (koruma altında)',
      beslenme: 'Neredeyse tamamen bambu (%99) — günde 12–14 saat boyunca 15–35 kg bambu yer!',
      alan: 'Orta Çin\'in sisli dağ bambu ormanları (Sichuan)',
      superguc: 'Bilek kemiğinden evrimleşmiş ekstra bir "sahte başparmağı" vardır; ince bambu saplarını insan eli gibi kavrar.',
      tehdit: 'Bambu ormanlarının parçalanması ve yavaş üreme hızı.',
      dongu: [
        ['🌅 Bambu Kahvaltısı', 'Sisli dağ yamacında uyanır uyanmaz en taze bambu filizlerini soyup yemeye başlarsın.'],
        ['☀️ Yavaş ve Huzurlu Öğle', 'Bambu besin değeri düşük olduğu için enerji tasarrufu yapıp sık sık kestirir, sonra tekrar yemeye devam edersin.'],
        ['🌙 Ağaçta Güvenli Uyku', 'Ağır gövdene rağmen usta bir tırmanıcısın; yavrularını yırtıcılardan korumak için yüksek dallara çıkarırsın.']
      ],
      w: 'Giant panda'
    },
    {
      id: 'yd-karleopari', ad: 'Kar Leoparı ("Dağların Hayaleti")', ik: '🐆', tur: 'hayvan', ll: [34.0, 78.0],
      omur: '12 – 15 yıl (doğada)',
      beslenme: 'Etçil — dağ keçisi, mavi koyun ve dağ sıçanı.',
      alan: 'Himalayalar, Pamir ve Altay Dağları\'nın 3.000–5.500 m yüksek kayalıkları',
      superguc: 'Kendi boyu kadar (1 metre) kalın kuyruğunu hem uçurumlarda denge için hem de uyurken burnunu ısıtan atkı gibi kullanır; 15 metre uzağa sıçrayabilir!',
      tehdit: 'İklim değişikliğiyle yüksek otlakların daralması ve kaçak avcılık.',
      dongu: [
        ['🌅 Şafak Devriyesi', 'Güneş doğmadan önce karlı sırtlarda neredeyse hiç iz ve ses bırakmadan geniş yastıklı patilerinle yürürsün.'],
        ['☀️ Kaya Kamuflajı', 'Duman grisi benekli kürkünle çıplak kayaların arasında tamamen görünmez olup avını izlersin.'],
        ['🌙 Kuyruk Battaniyesi', 'Gece -30 °C\'de bir kaya kovuğuna kıvrılır, pofuduk kuyruğunu yüzüne sarıp soğuk havayı ısıtarak nefes alırsın.']
      ],
      w: 'Snow leopard'
    },
    {
      id: 'yd-komodo', ad: 'Komodo Ejderi', ik: '🦎', tur: 'hayvan', ll: [-8.55, 119.45],
      omur: '30 yıla kadar',
      beslenme: 'Etçil — geyik, yaban domuzu, manda ve leş; tek seferde kendi ağırlığının %80\'i kadar et yiyebilir!',
      alan: 'Endonezya\'nın Komodo, Rinca ve Flores adaları',
      superguc: 'Çatal diliyle havadaki koku moleküllerini toplayıp 4–9 km ötedeki leşin yerini bulabilir; kan pıhtılaşmasını engelleyen zehir bezlerine sahiptir.',
      tehdit: 'Ada habitatının daralması ve yükselen deniz seviyesi.',
      dongu: [
        ['🌅 Güneş Banyosu', 'Sabah kayalarda güneşlenip 3 metrelik dev gövdeni avlanacak sıcaklığa getirirsin.'],
        ['☀️ Sabırlı Pusu', 'Patika kenarında uzun süre kıpırdamadan bekler, yaklaşan geyiğe ani bir hamle yaparsın.'],
        ['🌙 Toprak Yuvası', 'Akşam kazdığın çukura çekilip vücut ısını korur, haftalarca sürecek sindirim uykusuna yatarsın.']
      ],
      w: 'Komodo dragon'
    },
    {
      id: 'yd-albatros', gocNeden: 'Besini olan kalamar ve balık açık okyanusta çok seyrek dağılmıştır; yeterince yiyecek bulmak için rüzgârı kullanarak çok geniş bir alanı taramak zorundadır.', ad: 'Gezgin Albatros', ik: '🕊️', tur: 'hayvan', ll: [-54.0, -37.0],
      omur: '50 – 70 yıl',
      beslenme: 'Etçil — okyanus yüzeyindeki kalamar, balık ve kril.',
      alan: 'Güney Okyanusu\'nun fırtınalı açık denizleri',
      superguc: '3,5 metrelik kanat açıklığıyla yaşayan en geniş kanatlı kuştur; kanat kilitleme mekanizmasıyla tek kanat çırpmadan günde 1.000 km süzülebilir ve uçarken uyuyabilir!',
      tehdit: 'Uzun olta balıkçılığı ve okyanus plastikleri.',
      dongu: [
        ['🌅 Dalgalarla Süzülüş', 'Dev dalgaların hemen üstündeki rüzgâr farkını (dinamik süzülme) kullanarak yakıt harcamadan okyanusu aşarsın.'],
        ['☀️ 10.000 km\'lik Yiyecek Arayışı', 'Tek bir yiyecek turunda Güney Okyanusu\'nda 10.000 km uçup yavruna kalamar getirirsin.'],
        ['🌙 Ömürlük Eş', 'Yıllarca denizde yaşadıktan sonra tam doğduğun adaya dönüp ömür boyu aynı eşle buluşursun.']
      ],
      w: 'Wandering albatross'
    },
    {
      id: 'yd-yunus', ad: 'Afalina (Şişe Burunlu Yunus)', ik: '🐬', tur: 'hayvan', ll: [36.5, 29.0],
      omur: '40 – 50 yıl',
      beslenme: 'Etçil — sürü hâlinde balık sürülerini çembere alıp kalamar ve kefal avlar.',
      alan: 'Akdeniz, Ege ve tüm ılıman-tropikal denizler',
      superguc: 'Her yunusun kendine özel bir "imza ıslığı" (isim!) vardır; ekolokasyon sonarıyla karanlık suda bile gömülü balığı görür.',
      tehdit: 'Balık ağları, deniz kirliliği ve tekne trafiği.',
      dongu: [
        ['🌅 İsimle Selamlaşma', 'Sabah sürünle buluştuğunda her arkadaşını kendine özgü ıslık sesiyle çağırırsın.'],
        ['☀️ Çamur Halkası Avı', 'Sığ sularda kuyruğunla çamurdan bir halka kaldırıp balıkları şaşırtır, havaya sıçrayan balıkları takımca yakalarsın.'],
        ['🌙 Tek Gözü Açık Uyku', 'Nefes almayı unutmamak için beyninin sağ yarısı uyurken sol yarısı ve bir gözün açık nöbet tutar!']
      ],
      w: 'Common bottlenose dolphin'
    },
    {
      id: 'yd-denizkaplumbaga', gocNeden: 'Beslendiği açık deniz ile yumurtlayabileceği kumsal ayrı yerlerdedir. Kendi çıktığı kumsala döner, çünkü orası yavru çıkarmaya elverişli olduğunu bir kez kanıtlamıştır.', ad: 'Caretta Caretta (İribaş Deniz Kaplumbağası)', ik: '🐢', tur: 'hayvan', ll: [36.8, 28.6],
      omur: '60 – 80 yıl',
      beslenme: 'Etçil/Hepçil — denizanası, yengeç, deniz kestanesi ve süngerler.',
      alan: 'Akdeniz (Dalyan, Patara, Belek kıyıları) ve Atlas-Hint-Pasifik okyanusları',
      superguc: 'Yumurtadan çıktığı kumsalın manyetik koordinatını beynine kazır ve 25 yıl sonra binlerce kilometre yüzüp tam aynı sahile yumurtlamaya döner!',
      tehdit: 'Kıyı ışık kirliliği, plastik poşetleri denizanası sanıp yutma ve tekne pervaneleri.',
      dongu: [
        ['🌅 Açık Deniz Yolculuğu', 'Büyük okyanus akıntılarına kapılıp yıllarca binlerce kilometre dolaşır, güçlü çenenle kabukluları kırarsın.'],
        ['☀️ Su Altında Dinlenme', 'Tek nefesle 4–7 saat boyunca bir kayanın altında uyuyabilirsin.'],
        ['🌙 Kumsala Dönüş', 'Yaz gecesinde ay ışığında tam 25 yıl önce doğduğun kumsala çıkıp 100 yumurtayı sıcak kumun altına gizlersin.']
      ],
      w: 'Loggerhead sea turtle'
    },
    // ---- ⏳ Nesli Tükenmiş Hayvan Olarak Yaşa ----
    {
      id: 'yd-mamut', gocNeden: 'Buzul Çağı bozkırında ot mevsime göre yer değiştirirdi; günde yüzlerce kilo bitki yiyen sürüler taze otlağı ve suyu izlemek zorundaydı.', ad: 'Yünlü Mamut (Nesli Tükendi)', ik: '🦣', tur: 'hayvan', ll: [68.0, 140.0],
      omur: '60 – 70 yıl (MÖ ~1700\'de tükendi)',
      beslenme: 'Otçul — günde ~180 kg soğuk bozkır otu, saz ve bodur söğüt dalı.',
      alan: 'Buzul Çağı Sibirya, Avrupa ve Kuzey Amerika mamut bozkırları',
      superguc: '1 metreye kadar uzanan çift katmanlı kürkü, 10 cm yağ tabakası ve karı küremeye yarayan 4 metrelik kıvrık dişleri vardı.',
      tehdit: 'Buzul Çağı\'nın bitişiyle otlakların ormana dönüşmesi ve erken insan avcılığı.',
      dongu: [
        ['🌅 Kar Altından Kahvaltı', 'Kıvrık fildişlerini kürek gibi kullanıp kalın kar tabakasını sıyırır, alttaki kuru bozkır otlarına ulaşırsın.'],
        ['☀️ Bozkırın Mühendisi', 'Ağır adımlarınla toprağı çiğneyip fidanları ezerek orman yerine soğuk, verimli mamut bozkırının sürmesini sağlarsın.'],
        ['🌙 Buzul Gecesi', 'Küçük kulakların (ısı kaybını önlemek için!) ve kalın kürkünle -40 °C gecede sürü hâlinde birbirine sokulursun.']
      ],
      w: 'Woolly mammoth'
    },
    {
      id: 'yd-smilodon', ad: 'Kılıç Dişli Kaplan — Smilodon (Nesli Tükendi)', ik: '🐅', tur: 'hayvan', ll: [34.0, -118.3],
      omur: '15 – 20 yıl (MÖ ~8000\'de tükendi)',
      beslenme: 'Etçil — Buzul Çağı bizonları, dev tembel hayvanlar ve genç mamutlar.',
      alan: 'Buzul Çağı Kuzey ve Güney Amerika ovaları',
      superguc: '20 cm uzunluğundaki kılıç biçimli üst köpek dişleri ve ayı kadar güçlü, kaslı ön bacakları vardı; çenesini 120 derece açabiliyordu!',
      tehdit: 'Buzul Çağı sonunda büyük otçul avlarının yok olması.',
      dongu: [
        ['🌅 Çalılıkta Pusu', 'Uzun mesafe koşucusu değil, kaslı bir pusu avcısısın; yüksek otların arasında sessizce dev bir bizonu beklersin.'],
        ['☀️ Güçlü Kavrayış', 'Ön pençelerinle avını yere sabitleyip hassas kılıç dişlerini kırmadan tek hamlede avını indirirsin.'],
        ['🌙 Sürü Dayanışması', 'Fosillerde ağır kırıkları iyileşmiş Smilodonlar bulundu — bu da yaralı sürünün üyelerine diğerlerinin et taşıdığını gösteriyor!']
      ],
      w: 'Smilodon'
    },
    {
      id: 'yd-dodo', ad: 'Dodo Kuşu (Nesli Tükendi)', ik: '🦤', tur: 'hayvan', ll: [-20.2, 57.5],
      omur: '15 – 25 yıl (MS ~1681\'de tükendi)',
      beslenme: 'Otçul — düşen tropikal meyveler, tohumlar, fındıklar ve ara sıra yengeçler.',
      alan: 'Mauritius Adası (Hint Okyanusu)',
      superguc: 'Milyonlarca yıl yırtıcısız cennet adasında yaşadığı için uçmayı bırakıp 20 kiloluk dev bir güvercin akrabasına dönüştü.',
      tehdit: '17. yüzyılda adaya gelen insanlar ve beraberlerindeki domuz, sıçan ve maymunların yerdeki yumurtalarını yemesi.',
      dongu: [
        ['🌅 Orman Tabanında Gezinti', 'Kanatların sadece denge için var; sabah serinliğinde Mauritius ormanlarında yürüyüp olgun Tambalacoque meyvelerini toplarsın.'],
        ['☀️ Taş Yutan Mide', 'Sert tohumları öğütmek için taşlık midene küçük çakıl taşları yutarsın.'],
        ['🌙 Tek Yumurtalı Yuva', 'Yerde yaptığın basit yuvada eşinle tek yumurtanı korursun — adaya yeni gelen yırtıcılara karşı ne yazık ki hiç korku refleksin yoktur.']
      ],
      w: 'Dodo'
    },
    {
      id: 'yd-haast', ad: 'Dev Haast Kartalı (Nesli Tükendi)', ik: '🦅', tur: 'hayvan', ll: [-44.5, 169.5],
      omur: '25 – 35 yıl (MS ~1400\'de tükendi)',
      beslenme: 'Etçil — 200 kiloluk Dev Moa kuşlarını avlayan gelmiş geçmiş en büyük kartal!',
      alan: 'Yeni Zelanda Güney Adası dağ ormanları',
      superguc: '15 kg ağırlığa ve 3 metre kanat açıklığına sahipti; pençeleri bir kaplanın pençesi kadar büyüktü ve saatte 80 km hızla orman içine dalardı.',
      tehdit: 'Ana avı olan Dev Moa kuşunun insanların gelişiyle kısa sürede tükenmesi.',
      dongu: [
        ['🌅 Zirveden Gözetleme', 'Yeni Zelanda\'nın yüksek ağaç tepesinden aşağıda otlayan 3 metrelik Dev Moa sürülerini süzersin.'],
        ['☀️ Orman İçi Saldırı', 'Geniş ama kıvrak kanatlarınla ağaçların arasından süzülüp dev bir Moa\'yı kaplan gücüyle yakalarsın.'],
        ['🌙 Adanın Tek Hükümdarı', 'Yeni Zelanda\'da memeli yırtıcı olmadığı için gökyüzünün ve ormanın mutlak zirve avcısısın.']
      ],
      w: 'Haast\'s eagle'
    },
    {
      id: 'yd-tilasin', ad: 'Tazmanya Kaplanı — Tilasin (Nesli Tükendi)', ik: '🐺', tur: 'hayvan', ll: [-42.0, 146.5],
      omur: '8 – 12 yıl (Son birey MS 1936\'da öldü)',
      beslenme: 'Etçil — valabi, kanguru, kuşlar ve küçük keseli memeliler.',
      alan: 'Tazmanya Adası (Avustralya)',
      superguc: 'Görünüşü kurda, çizgileri kaplana benzese de hem dişisi hem erkeği karın kesesine sahip bir keseli memeliydi; çenesini 80 derece açabiliyordu!',
      tehdit: 'Ödüllü avcılık, yaşam alanı kaybı ve hastalık.',
      dongu: [
        ['🌅 Alacakaranlık Avcısı', 'Gündüzleri kaya kovuklarında uyur, akşam alacasında sessizce okaliptüs ormanına çıkarsın.'],
        ['☀️ Dayanıklı Takip', 'Hızlı koşmaktan çok sabırlı takiple avını yorarak yakalarsın.'],
        ['🌙 Kese İçinde Yavrular', '3-4 minik yavrunu arkaya doğru açılan karın kesende taşıyarak çalılıklardan güvenle geçirirsin.']
      ],
      w: 'Thylacine'
    },
    // ---- +16 Yeni Hayvan Çeşitliliği ----
    {
      id: 'yd-kralkelebek', gocNeden: 'Kuzeyin kışında donarak ölür. Tırtılının tek besini olan ipekotu ise yazın kuzeyde boldur; bu yüzden yazı kuzeyde, kışı Meksika\'nın serin ama donmayan dağ ormanlarında geçirir.', ad: 'Kral Kelebeği', ik: '🦋', tur: 'hayvan', ll: [19.6, -100.2],
      omur: '2 – 6 hafta (göçmen nesil 8 – 9 ay yaşar!)',
      beslenme: 'Tırtılken yalnızca zehirli ipekotu yaprağı; kelebekken çiçek nektarı.',
      zincir: 'Birincil tüketici & tozlayıcı — yediği ipekotu zehrini vücudunda biriktirdiği için kuşlar tarafından yenmez.',
      goc: 'Kanada\'dan Meksika\'daki aynı dağ ormanına 4.800 km göç eder — yolculuk 4 kuşak sürer; torununun torunu hiç görmediği aynı ağaçlara konar!',
      alan: 'Kuzey Amerika çayırları ve Meksika\'nın Oyamel köknar ormanları',
      superguc: 'Güneş pusulası ve Dünya\'nın manyetik alanını hisseden antenleriyle 4.800 km\'lik rotayı şaşmadan bulur.',
      sasirtici: 'Göç eden "süper nesil" diğer nesillerden 10 kat daha uzun yaşar; ağırlığı bir ataşın yarısı kadar (0,5 g) olmasına rağmen kıtayı aşar!',
      tehdit: 'İpekotu tarlalarının yok olması, tarım ilaçları ve Meksika\'daki kışlık ormanların azalması.',
      dongu: [
        ['🥚 Yumurta ve Zehirli Ziyafet', 'İpekotu yaprağına bırakılan yumurtadan 4 günde çıkıp 2 hafta içinde ağırlığını 2.000 kat artırırsın!'],
        ['🟢 Altın Noktalı Koza', 'Zümrüt yeşili, altın benekli krizalisin içinde bedenin tamamen eriyip 10 günde kanatlı bir kelebeğe dönüşür.'],
        ['🧭 Kıtalararası Yolculuk', 'Sonbaharda milyonlarca türdeşinle rüzgârı arkana alıp günde 80 km uçarak Meksika dağlarına ulaşırsın.']
      ],
      w: 'Monarch butterfly'
    },
    {
      id: 'yd-sumru', gocNeden: 'İki kutbun da yazını yaşar: uzun gündüzlerde küçük balık ve kril avlamak kolaydır. Böylece yılın büyük bölümünü gün ışığında geçirir.', ad: 'Arktik Sumru (Göç Rekortmeni)', ik: '🕊️', tur: 'hayvan', ll: [65.0, -18.0],
      omur: '25 – 34 yıl',
      beslenme: 'Etçil — küçük deniz balıkları, kril ve kabuklular.',
      zincir: 'İkincil deniz avcısı — okyanus yüzeyindeki küçük balıkları avlar, kutup tilkisi ve yırtıcı martılardan kaçınır.',
      goc: 'Dünya rekoru: Her yıl Kuzey Kutbu\'ndan Güney Kutbu\'na (Antarktika) gidip döner — yılda 70.000 ila 90.000 km!',
      alan: 'Yazın Arktik (İzlanda, Grönland), kışın Antarktika deniz buzları',
      superguc: 'Her yıl iki kutbun yazını birden yaşadığı için Dünya\'da en fazla gün ışığı gören canlıdır.',
      sasirtici: '30 yıllık ömrü boyunca yaklaşık 2,4 milyon kilometre uçar — bu, Ay\'a 3 kez gidip gelmeye eşittir!',
      tehdit: 'Okyanus ısınmasıyla değişen balık sürüleri ve kutup kıyılarındaki yırtıcılar.',
      dongu: [
        ['☀️ Kutup Yazında Yuva', 'Kuzey Kutbu\'nda güneşin hiç batmadığı yaz günlerinde kıyıda yumurtlar, yuvaya yaklaşan herkese (ayı dahil!) dalışla saldırırsın.'],
        ['🌊 Atlantik Boyunca Süzülüş', 'Ağustos\'ta rüzgâr koridorlarını kullanıp güneye iner, uçarken bile kısa saniyelik mikro-uykular alırsın.'],
        ['❄️ İkinci Yaz: Antarktika', 'Kuzey kışa girerken sen Antarktika\'da yaz güneşi altında kril avlayıp baharda tekrar kuzeye dönersin.']
      ],
      w: 'Arctic tern'
    },
    {
      id: 'yd-denizanasi', ad: 'Ölümsüz Denizanası (Turritopsis)', ik: '🪼', tur: 'hayvan', ll: [38.0, 15.0],
      omur: 'Biyolojik olarak sınırsız! (Avlanmazsa yaşlanıp ölmez)',
      beslenme: 'Etçil — plankton, balık yumurtaları ve minik deniz larvaları.',
      zincir: 'Alt-orta deniz tüketicisi — plankton yer; deniz kaplumbağaları, ton balıkları ve büyük denizanalarına av olur.',
      goc: 'Kendi gücüyle uzun göç etmez; ancak gemilerin balast sularıyla Akdeniz\'den tüm dünya okyanuslarına yayılmıştır.',
      alan: 'Akdeniz ve ılıman/tropikal dünya denizleri',
      superguc: 'Yaralandığında, aç kaldığında veya yaşlandığında yetişkin hücrelerini sıfırlayıp tekrar "bebek polip" aşamasına geri döner!',
      sasirtici: 'Yalnızca 4,5 milimetre (tırnağının ucu kadar) boyundadır ve tıpkı bir kelebeğin tekrar tırtıla dönmesi gibi yaşam döngüsünü sonsuz kez başa sarabilir!',
      tehdit: 'Biyolojik olarak ölümsüz olsa da çoğu birey balıklar, kaplumbağalar veya hastalıklar yüzünden ölür.',
      dongu: [
        ['🌱 Deniz Tabanında Polip', 'Kayaya tutunan minik bir polip kolonisi olarak doğar, tomurcuklanarak suya minik denizanaları bırakırsın.'],
        ['🌊 Özgür Yüzücü', 'Sadece birkaç hafta içinde erginleşip 80\'den fazla ince dokunaçla plankton avlayan şeffaf bir çana dönüşürsün.'],
        ['⏪ Zamanı Geri Sarma', 'Ağır stres veya yaşlanma başlayınca dibe çöküp dokunaçlarını eritir, hücrelerini yeniden programlayarak tekrar genç bir polipe dönüşürsün!']
      ],
      w: 'Turritopsis dohrnii'
    },
    {
      id: 'yd-tardigrad', ad: 'Su Ayısı (Tardigrad)', ik: '🦠', tur: 'hayvan', ll: [47.0, 10.0],
      omur: '3 – 30 ay aktif yaşam (uyku hâlinde 30+ yıl!)',
      beslenme: 'Yosun hücrelerinin sıvısı, bakteri ve mikroskobik canlılar.',
      zincir: 'Mikroskobik tüketici — yosun ve liken ekosistemlerinin minik temizlikçisi; nematod ve akarlara av olur.',
      goc: 'Kuru uyku (kriptobiyoz) hâlindeyken rüzgârla toz zerresi gibi kıtalar ve okyanuslar aşarak her yere dağılır.',
      alan: 'Himalaya zirvelerinden Mariana Çukuru\'na, Antarktika\'dan evinin bahçesindeki yosunlara kadar HER YERDE!',
      superguc: 'Vücudundaki suyun %99\'unu atıp cam gibi kuruyarak -272 °C soğuğa, +150 °C sıcağa, dev radyasyona ve uzay boşluğuna dayanır.',
      sasirtici: '2007\'de bir uzay aracının dışına bağlanıp 10 gün boyunca doğrudan uzay boşluğunda bırakılan su ayıları Dünya\'ya dönünce su değdiği an uyanıp yavruladı!',
      tehdit: 'Aktif hâldeyken yırtıcı mikroskobik kurtçuklar ve ani kimyasal kirlilik.',
      dongu: [
        ['💧 Yosun Ormanında Yürüyüş', '8 tombul bacağının ucundaki minik pençelerle yarım milimetrelik boyunla bir su damlasının içinde ağır ağır yürürsün.'],
        ['🏜️ Tun (Uyku) Modu', 'Yosun kuruyunca fıçı gibi kıvrılıp metabolizmanı %0,01\'e düşürür, onlarca yıl tek damla su olmadan beklersin.'],
        ['🌧️ Yeniden Doğuş', 'İlk yağmur damlası düştüğünde dakikalar içinde şişip uyanır, sanki hiç zaman geçmemiş gibi yaşamına devam edersin.']
      ],
      w: 'Tardigrade'
    },
    {
      id: 'yd-cita', ad: 'Çita (Kara Hız Rekortmeni)', ik: '🐆', tur: 'hayvan', ll: [-2.5, 35.0],
      omur: '10 – 12 yıl (doğada)',
      beslenme: 'Etçil — ceylan, impala ve tavşan gibi hızlı savan otçulları.',
      zincir: 'Hızlı gündüz avcısı — aslan ve sırtlanlarla karşılaşmamak için gündüz avlanır; avını sık sık daha iri avcılara kaptırır.',
      goc: 'Kıtalararası göç etmez ancak ceylan sürülerinin yağmur mevsimi hareketlerini takip ederek geniş savanlarda dolaşır.',
      alan: 'Doğu ve Güney Afrika savanları (az sayıda İran\'da)',
      superguc: '0\'dan 100 km/saat hıza sadece 3 saniyede çıkar — birçok süper spor otomobilden hızlıdır!',
      sasirtici: 'Diğer büyük kediler gibi kükreyemez; bunun yerine ev kedisi gibi mırlar ve kuş cıvıltısına benzeyen ince bir ses çıkarır! Koşarken zamanının yarısında dört ayağı birden havadadır.',
      tehdit: 'Yaşam alanı parçalanması, düşük genetik çeşitlilik ve aslan/sırtlan rekabeti.',
      dongu: [
        ['🌅 Gözetleme Tepesi', 'Sabah termit tepeciğinin üstüne çıkıp gözlerinin altındaki siyah "gözyaşı çizgileri" sayesinde güneş parlamadan av ararsın.'],
        ['⚡ 20 Saniyelik Şimşek Takibi', 'Saatte 110 km hızla 7 metrelik sıçramalar yaparsın; vücudun aşırı ısındığı için koşu 20–30 saniyeden uzun süremez.'],
        ['💨 Hızlı Ziyafet', 'Avını yakaladıktan sonra soluklanıp sırtlanlar kokuyu almadan hemen beslenirsin.']
      ],
      w: 'Cheetah'
    },
    {
      id: 'yd-kunduz', ad: 'Kunduz (Doğanın Baraj Mühendisi)', ik: '🦫', tur: 'hayvan', ll: [55.0, -112.0],
      omur: '10 – 15 yıl',
      beslenme: 'Otçul — ağaç kabuğu (söğüt, kavak), sürgünler ve su bitkileri.',
      zincir: 'Kilit taşı otçul — kurduğu göletlerle kurbağa, balık, kuş ve böceklere yeni yaşam alanı yaratır; kurt ve ayılara av olabilir.',
      goc: 'Göç etmez; kışın buzun altında suyun dibine depoladığı taze ağaç dallarından yiyerek yuvasında kalır.',
      alan: 'Kuzey Amerika ve Avrasya\'nın ormanlık akarsuları',
      superguc: 'Demir içerikli turuncu ön dişleri hiç aşınmaz ve ömür boyu uzar; 15 dakikada bir ağacı devirebilir!',
      sasirtici: 'Kanada\'da kunduz nesillerinin birlikte ördüğü en büyük baraj 850 metre uzunluğundadır ve uzaydan (uydu görüntülerinden) açıkça görülebilir!',
      tehdit: 'Geçmişte kürk ticareti yüzünden neredeyse tükendi; bugün nehir ıslahları ve kuraklık.',
      dongu: [
        ['🪓 Ağaç Kesimi', 'Akşam alacasında güçlü ön dişlerinle kavak ağaçlarını kemirip suya devirirsin.'],
        ['🏗️ Baraj ve Su Altı Girişli Ev', 'Dal ve çamurla dereyi kesip gölet oluşturur, tam ortasına yalnızca su altından girilebilen güvenli ahşap bir kubbe ev kurarsın.'],
        ['❄️ Kış Kileri', 'Sonbaharda suyun dibine yüzlerce taze dal gömer, göl donunca buzun altından yüzüp taze yemeğini alırsın.']
      ],
      w: 'Beaver'
    },
    {
      id: 'yd-denizati', ad: 'Denizatı', ik: '🐴', tur: 'hayvan', ll: [36.0, 14.0],
      omur: '1 – 5 yıl',
      beslenme: 'Etçil — minik karidesler, plankton ve balık larvalarını pipet ağzıyla emer.',
      zincir: 'Küçük kıyı avcısı — midesi olmadığı için gün boyu sürekli minik kabuklu yer; yengeçler ve büyük balıklara av olur.',
      goc: 'Göç etmez; kuyruğunu deniz çayırına dolayıp aynı küçük resifte yaşar.',
      alan: 'Ilıman ve tropikal deniz çayırları, mercan resifleri ve mangrovlar',
      superguc: 'Hayvanlar aleminde erkeğin hamile kalıp yüzlerce yavruyu doğurduğu tek canlı grubudur!',
      sasirtici: 'Midesi ve dişi yoktur — yiyecek sindirim sisteminden o kadar hızlı geçer ki günde 3.000\'den fazla minik karides emmek zorundadır!',
      tehdit: 'Deniz çayırlarının tahribi, dip trolü avcılığı ve geleneksel ilaç ticareti.',
      dongu: [
        ['💃 Sabah Dansı', 'Tek eşli partnerinle her sabah kuyruklarınızı birbirine dolayıp renk değiştirerek 10 dakikalık selamlama dansı yaparsın.'],
        ['🤰 Babanın Kuluçka Kesesi', 'Anne yumurtalarını babanın karın kesesine bırakır; baba 2–4 hafta boyunca yavrulara oksijen ve besin verip büyütür.'],
        ['🌊 Yüzlerce Minik Yavru', 'Doğum günü geldiğinde baba kesesinden 100 ila 1.000 arası pirinç tanesi kadar minik denizatını akıntıya bırakır.']
      ],
      w: 'Seahorse'
    },
    {
      id: 'yd-atesbocegi', ad: 'Ateş Böceği', ik: '✨', tur: 'hayvan', ll: [35.6, -83.5],
      omur: '1 – 2 yıl larva, yalnızca 2 – 4 hafta uçan yetişkin!',
      beslenme: 'Larvaken etçil (salyangoz, sümüklü böcek avcısı); yetişkinken nektar, polen ya da hiç yemez.',
      zincir: 'Bahçe ve orman temizlikçisi — larvaları zararlı salyangozları kontrol eder; vücutları zehirli olduğu için örümcekler dışında pek avlanmaz.',
      goc: 'Göç etmez; doğduğu nemli orman kıyısı veya dere kenarında yaşar.',
      alan: 'Ilıman ve tropikal nemli ormanlar, çayırlar ve dere kenarları',
      superguc: 'Lüsiferin kimyasalıyla neredeyse %100 verimli "soğuk ışık" üretir — sıradan bir ampul enerjisinin %90\'ını ısıya harcarken ateş böceği hiç ısınmaz!',
      sasirtici: 'Her ateş böceği türünün kendine özgü bir Mors alfabesi gibi ışık ritmi vardır; bazı türlerin dişileri başka türlerin sinyalini taklit edip erkeklerini tuzağa çekip yer!',
      tehdit: 'Şehirlerin yapay ışık kirliliği (eş bulma sinyallerini bozar), tarım ilaçları ve sulak alan kaybı.',
      dongu: [
        ['🐛 Toprak Altında 1 Yıl', 'Hayatının neredeyse tamamını nemli toprakta parlayan minik bir larva olarak salyangoz avlayarak geçirirsin.'],
        ['✨ Yaz Gecesi Işık Dansı', 'Yaz akşamı kanatlanıp karnındaki fenerle kendi türünün gizli ışık kodunu yakarak eş ararsın.'],
        ['🌿 Yeni Nesil', 'Sadece birkaç haftalık büyülü uçuşun ardından nemli yosunlara yumurtalarını bırakıp ömrünü tamamlarsın.']
      ],
      w: 'Firefly'
    },
    {
      id: 'yd-bukalemun', ad: 'Bukalemun', ik: '🦎', tur: 'hayvan', ll: [-18.9, 47.5],
      omur: '3 – 7 yıl',
      beslenme: 'Böcekçil — sinek, çekirge, örümcek; büyük türler küçük kertenkele de yer.',
      zincir: 'Ağaç tepesi pusucusu — böcek popülasyonunu dengeler; yılanlar ve yırtıcı kuşlara av olabilir.',
      goc: 'Göç etmez; ağaç dalları arasında son derece bölgeci bir yaşam sürer.',
      alan: 'Madagaskar (türlerin yarısı burada!), Afrika, Akdeniz ve Güney Asya',
      superguc: 'İki gözünü birbirinden tamamen bağımsız 360 derece döndürebilir; dili kendi vücut boyunun 2 katı uzunluğa saniyenin %2\'sinde fırlar!',
      sasirtici: 'Renk değiştirmesinin ana sebebi sadece kamuflaj değil, DUYGU ve ISI İLETİŞİMİDİR — öfkelendiğinde parlak kırmızı/sarıya, üşüdüğünde güneşi emmek için koyu renge döner!',
      tehdit: 'Ormansızlaşma (özellikle Madagaskar\'da) ve yasa dışı evcil hayvan ticareti.',
      dongu: [
        ['🌅 Güneşlenme', 'Sabah serinliğinde derini koyulaştırıp güneş ısısını emerek vücut sıcaklığını yükseltirsin.'],
        ['🎯 Çift Gözle Kilitleme', 'Bir gözün arkadaki tehlikeyi kollarken diğeri bir çekirgeyi seçer; ikisi birden hedefe odaklanıp mesafeyi milimetrik ölçer.'],
        ['👅 Yaylı Dil Atışı', 'Yapışkan uçlu dilini kurşun hızıyla fırlatıp 0,07 saniyede avını ağzına çekersin.']
      ],
      w: 'Chameleon'
    },
    {
      id: 'yd-peygamberdevesi', ad: 'Peygamber Devesi', ik: '🦗', tur: 'hayvan', ll: [38.0, 27.5],
      omur: '6 – 12 ay',
      beslenme: 'Etçil — sinek, arı, çekirge, kelebek; büyük türler küçük kertenkele ve sinekkuşu bile avlar!',
      zincir: 'Sabırlı pusu avcısı — tarım zararlılarını yer; kuşlar, yarasalar ve kertenkelelere av olur.',
      goc: 'Göç etmez; çalı ve çiçek dallarında yaprak ya da orkide çiçeği taklidi yaparak bekler.',
      alan: 'Tropikal ve ılıman bölgeler (Akdeniz ve Anadolu dahil)',
      superguc: 'Başını 180 derece çevirebilen tek böcektir ve 3 boyutlu (stereoskopik) derinlik algısıyla gördüğü kanıtlanan ilk böcektir!',
      sasirtici: 'Göğsünün ortasında yalnızca tek bir kulağı vardır — bu kulak yarasaların ultrasonik av seslerini duyup havada ani kaçış manevrası yapmasını sağlar!',
      tehdit: 'Tarım ilaçları, kış donları ve yırtıcı kuşlar.',
      dongu: [
        ['🫧 Köpük Yumurta Kesesi', 'İlkbaharda sertleşmiş köpük kesesinden (ooteka) yüzlerce minik kopya yavru aynı anda çıkar.'],
        ['🍃 Kusursuz Pusu', 'Yaprak gibi rüzgârda hafifçe sallanarak hareketsiz bekler, dikenli ön bacaklarını saniyenin 20\'de birinde kapatıp avını yakalarsın.'],
        ['🍂 Sonbahar Mirası', 'Sonbaharda yeni neslin yumurta kesesini bir dala yapıştırıp soğuklar gelince ömrünü tamamlarsın.']
      ],
      w: 'Mantis'
    },
    {
      id: 'yd-karinca', ad: 'Yaprak Kesici Karınca', ik: '🐜', tur: 'hayvan', ll: [9.0, -79.5],
      omur: 'İşçiler 1 – 2 yıl · Kraliçe 15 – 20 yıl!',
      beslenme: 'Kestikleri yaprakları YEMEZLER — yeraltında o yapraklarla özel bir mantar yetiştirip mantarı yerler!',
      zincir: 'Ekosistem dönüştürücüsü — ormandaki yaprakların %15\'ini toprağa taşıyıp toprağı havalandırır; karıncayiyen ve kuşlara av olur.',
      goc: 'Göç etmez; milyonlarca bireylik dev yeraltı şehirleri (bazen 8 metre derinliğinde!) kurarlar.',
      alan: 'Orta ve Güney Amerika yağmur ormanları',
      superguc: 'Kendi ağırlığının 50 katı yaprak parçasını taşıyabilir; insanlardan 50 MİLYON yıl önce tarımı ve antibiyotik kullanımını icat etmiştir!',
      sasirtici: 'Vücutlarının üstünde özel bir bakteri tabakası taşırlar — bu bakteriler yeraltı mantar bahçelerini zararlı küflerden koruyan doğal antibiyotik üretir!',
      tehdit: 'Ormansızlaşma, karıncayiyenler ve parazit sinekler.',
      dongu: [
        ['✂️ Yaprak Hasadı', 'Keskin çenelerinle ağaç yapraklarından yarım ay parçalar kesip şemsiye gibi başının üstünde otoyol gibi yuvaya taşırsın.'],
        ['🍄 Yeraltı Mantar Çiftliği', 'Küçük bahçıvan karıncalar yaprakları çiğneyip hamur yapar ve koloninin tek besini olan beyaz mantarı besler.'],
        ['🌬️ Klima Mühendisliği', 'Yuvanın havalandırma tünelleri sıcak havayı dışarı atıp taze oksijen çeker — 5 milyon karıncalık canlı bir metropol!']
      ],
      w: 'Leafcutter ant'
    },
    {
      id: 'yd-yusufcuk', gocNeden: 'Larvaları, yağmurların oluşturduğu geçici su birikintilerinde büyür. Yusufçuklar muson yağmurlarını izleyerek her kuşakta yeni yağmur alan bölgeye geçer.', ad: 'Yusufçuk (Hava Avcısı)', ik: '🪰', tur: 'hayvan', ll: [40.0, 29.0],
      omur: '1 – 5 yıl su altı larvası, 2 – 6 ay uçan yetişkin',
      beslenme: 'Etçil — günde 100\'den fazla sivrisinek, tatarcık ve küçük böcek avlar!',
      zincir: 'Hava süper avcısı — sivrisinekleri kontrol ederek insanları sıtma gibi hastalıklardan korur; kurbağa ve kuşlara av olur.',
      goc: 'Bazı türler (ör. Gezgin Küre Kanatlısı) Hindistan\'dan Afrika\'ya Hint Okyanusu üzerinden 14.000 km göç eder — böcekler arası dünya rekoru!',
      alan: 'Antarktika hariç tüm kıtalardaki göl, dere ve sulak alanlar',
      superguc: '4 kanadını birbirinden bağımsız oynatarak helikopter gibi havada asılı kalır, geri geri uçar ve baş aşağı döner.',
      sasirtici: 'Aslanların av başarısı %25 iken yusufçukların av başarısı %95\'tir — hayvanlar aleminin en isabetli avcısıdır ve 300 milyon yıldır (dinozorlardan bile önce!) Dünya\'dadır!',
      tehdit: 'Sulak alanların kurutulması ve su kirliliği.',
      dongu: [
        ['🌊 Su Altında Gizli Avcı', 'Yıllarca göl dibinde uzayan alt çeneli bir su larvası (nimf) olarak sivrisinek larvası ve küçük balık avlayarak büyürsün.'],
        ['🌅 Sazlıkta Dönüşüm', 'Bir bahar sabahı sudan çıkıp bir saza tırmanır, eski kabuğunu yarıp 30.000 mercekli dev gözlerinle göğe kanatlanırsın.'],
        ['⚡ %95 İsabetli Av', 'Avının gideceği noktayı önceden hesaplayıp havada kesişme rotasına uçarak tek hamlede yakalarsın.']
      ],
      w: 'Dragonfly'
    },
    {
      id: 'yd-ornitorenk', ad: 'Ornitorenk (Doğanın Bulmacası)', ik: '🦆', tur: 'hayvan', ll: [-37.0, 145.0],
      omur: '12 – 17 yıl',
      beslenme: 'Etçil — su altı böcek larvaları, solucanlar ve tatlı su karidesleri.',
      zincir: 'Nehir tabanı avcısı — omurgasızları avlar; yılanlar, su sıçanları ve yırtıcı kuşlara karşı dikkatli olur.',
      goc: 'Göç etmez; nehir kıyılarına kazdığı 10 metrelik toprak tünellerde yaşar.',
      alan: 'Doğu Avustralya ve Tazmanya\'nın temiz tatlı su nehirleri',
      superguc: 'Gözlerini ve kulaklarını kapatıp daldığında ördek gagasındaki elektrik algılayıcılarla avının kas hareketlerindeki minik elektrik sinyallerini hisseder!',
      sasirtici: 'Yumurtlayan bir memelidir, meme ucu olmadığı için sütü derisinden ter gibi sızar, erkeklerinin arka ayağında zehirli mahmuz vardır ve UV ışığı altında kürkü neon yeşil-mavi parlar!',
      tehdit: 'Kuraklık, nehir kirliliği, barajlar ve balık ağları.',
      dongu: [
        ['🌙 Gece Dalışı', 'Gözlerin kapalı hâlde nehir tabanında gaganı sağa sola sallayarak çamurdaki karideslerin elektrik alanını yakalarsın.'],
        ['🥚 Toprak Tünelde Yumurta', 'Anne nehir kıyısındaki derin yuvada 1–3 küçük yumurtayı 10 gün kuluçkaya yatırır.'],
        ['🥛 Deriden Beslenen Yavrular', 'Yumurtadan çıkan minik yavrular annenin karnındaki oluklara sızan sütü yalayarak 4 ayda büyür.']
      ],
      w: 'Platypus'
    },
    {
      id: 'yd-akbaba', gocNeden: 'Kışın soğuk havada onu taşıyan sıcak hava akımları zayıflar ve leş bulmak zorlaşır. Deneyimsiz gençler bu yüzden kışı sıcak Afrika\'da geçirir.', ad: 'Kızıl Akbaba (Doğanın Temizlik Ekibi)', ik: '🦅', tur: 'hayvan', ll: [39.0, 32.0],
      omur: '25 – 40 yıl',
      beslenme: 'Leşçil — yalnızca ölü hayvanları yer, canlı av peşinde koşmaz.',
      zincir: 'Kritik ayrıştırıcı/temizlikçi — leşleri hızla tüketerek salgın hastalıkların yayılmasını önler.',
      goc: 'Genç bireyler Anadolu ve Avrupa\'dan Afrika\'ya binlerce km göç eder; yetişkinler termal akımlarla günde 300 km süzülebilir.',
      alan: 'Akdeniz, Anadolu, Orta Doğu, Orta Asya ve Afrika\'nın sarp kayalıkları',
      superguc: 'Mide asidi akü asidi kadar güçlüdür (pH ~1); şarbon, kolera ve kuduz mikroplarını bile tamamen yok eder!',
      sasirtici: 'Akbabaların azaldığı bölgelerde kuduz ve salgın hastalıklar patlar — tek bir akbaba ömrü boyunca doğaya on binlerce dolarlık bedava sağlık/temizlik hizmeti sunar!',
      tehdit: 'Tarım ve hayvancılıkta kullanılan zehirli ilaçlar, rüzgâr türbinleri ve yüksek gerilim hatları.',
      dongu: [
        ['☀️ Kanat Çırpmadan Uçuş', '3 metreyi bulan dev kanatlarınla sıcak hava akımlarına binip saatlerce neredeyse sıfır enerjiyle gökyüzünü tararsın.'],
        ['🔍 Sosyal Haberleşme', 'Bir akbaba leş bulup alçaldığında kilometrelerce uzaktaki diğerleri bunu görüp dakikalar içinde toplanır.'],
        ['🏔️ Uçurum Kolonisi', 'Yılda tek bir yumurta bırakır, anne ve baba 4 ay boyunca yavruyu nöbetleşe büyütürsünüz.']
      ],
      w: 'Griffon vulture'
    },
    {
      id: 'yd-somon', ad: 'Pasifik Somonu', ik: '🐟', tur: 'hayvan', ll: [58.0, -135.0],
      omur: '3 – 7 yıl',
      beslenme: 'Etçil — gençken tatlı su böcekleri, okyanusta kril ve küçük balıklar.',
      zincir: 'Okyanusla orman arasındaki köprü — boz ayılar, kartallar ve kurtları besler; ölen bedenleri çam ormanlarına okyanus gübresi taşır!',
      goc: 'Okyanusta 3.000–5.000 km yüzdükten sonra tam olarak doğduğu nehrin ve derenin kokusunu takip ederek akıntıya karşı şelalelerden atlayıp eve döner!',
      alan: 'Kuzey Pasifik Okyanusu ve Alaska, Kanada, Rusya, Japonya nehirleri',
      superguc: 'Hem tatlı suda hem tuzlu okyanusta yaşayabilmek için böbreklerini ve solungaçlarını kimyasal olarak yeniden programlar.',
      sasirtici: 'Kuzey Amerika kıyılarındaki dev çam ağaçlarının içindeki azotun %80\'e varan kısmı, somonların okyanustan taşıyıp ayıların ormana bıraktığı balıklardan gelir!',
      tehdit: 'Nehir barajları, aşırı avlanma ve ısınan akarsular.',
      dongu: [
        ['🏞️ Nehirde Doğuş', 'Çakıl taşlarının arasında yumurtadan çıkıp doğduğun derenin eşsiz kimyasal kokusunu hafızana kazıyarak okyanusa açılırsın.'],
        ['🌊 Okyanusta Büyüme', '3–4 yıl Pasifik\'te avlanıp gümüşi ve güçlü bir yetişkine dönüşürsün.'],
        ['⬆️ Şelaleleri Aşan Son Yolculuk', 'Kırmızıya bürünüp tek lokma yemeden yüzlerce km akıntıya karşı yüzer, ayılardan sıyrılıp doğduğun çakıl yatağına yumurtalarını bırakırsın.']
      ],
      w: 'Pacific salmon'
    },
    {
      id: 'yd-kurt', ad: 'Bozkurt (Ekosistemin Dengesi)', ik: '🐺', tur: 'hayvan', ll: [44.6, -110.5],
      omur: '6 – 10 yıl (doğada)',
      beslenme: 'Etçil — geyik, yaban domuzu, bizon ve küçük memeliler.',
      zincir: 'Tepe avcısı (kilit taşı tür) — otçul sürülerini dengede tutarak ormanların ve nehir kıyılarının yenilenmesini sağlar.',
      goc: 'Genç kurtlar yeni sürü kurmak için 800–1.000 km uzağa kadar yolculuk yapabilir; sürüler geniş bölgeleri devriye gezer.',
      alan: 'Kuzey Amerika, Avrupa, Anadolu, Orta Asya ve Sibirya',
      superguc: 'Uluması ormanda 10 km, açık tundrada 16 km öteden duyulur; günde 50 km durmadan koşabilir.',
      sasirtici: '1995\'te Yellowstone Millî Parkı\'na kurtlar geri bırakılınca geyikler nehir kıyısındaki fidanları yemeyi kesti; ağaçlar büyüdü, kunduzlar döndü ve NEHİRLERİN AKIŞ YÖNÜ BİLE DÜZELDİ!',
      tehdit: 'Yaşam alanı kaybı, yasa dışı avlanma ve hayvancılık çatışması.',
      dongu: [
        ['🌅 Aile Sürüsü', 'Anne, baba ve kardeşlerden oluşan sıkı bir aile sürüsünde yaşar, yavrulara tüm sürü birlikte bakar.'],
        ['🐾 İşbirliğiyle Av', 'Sürü hâlinde zayıf veya yaşlı avları seçerek sürünün geri kalanının daha sağlıklı kalmasını sağlarsın.'],
        ['🌙 Akşam Uluması', 'Karanlık çökünce sürüyü toplamak ve bölge sınırlarını duyurmak için hep bir ağızdan ulursunuz.']
      ],
      w: 'Wolf'
    }
  ],
  bitkiler: [
    {
      id: 'yd-sekoya', ad: 'Dev Sekoya Ağacı', ik: '🌲', tur: 'bitki', ll: [36.56, -118.75],
      omur: '2.000 – 3.200+ yıl (Roma kurulmadan önce filizlenenler bugün hâlâ yaşıyor!)',
      beslenme: 'Fotosentez — güneş ışığı, CO₂ ve günde ~2.000 litre suyu 85 metre yukarı çekerek kendi besinini üretir.',
      alan: 'Kaliforniya Sierra Nevada Dağları (ABD)',
      superguc: '60 cm kalınlığındaki süngerimsi kızıl kabuğu orman yangınlarına ve böceklere karşı neredeyse yanmaz zırh gibidir.',
      tehdit: 'Aşırı şiddetli mega yangınlar ve uzun süreli kuraklıklar.',
      dongu: [
        ['🌱 Yüzyıllık Sabır', 'İlk 100 yılında hâlâ "genç" bir fidan sayılırsın; köklerin toprağın hemen altında geniş bir ağ kurar ve mantarlarla besin takası yapar.'],
        ['☀️ Bulutlara Ulaşan Dev', '85 metrelik tepende kendi küçük ekosistemin oluşur; dallarında eğrelti otları ve kuş yuvaları barınır.'],
        ['🔥 Ateşle Gelen Yeni Hayat', 'Hafif bir orman yangını çıktığında kalın kabuğun seni korur, sıcaklık ise kozalaklarını açıp küllü verimli toprağa binlerce yeni tohum döker!']
      ],
      w: 'Sequoiadendron giganteum'
    },
    {
      id: 'yd-zeytin', ad: 'Anıt Zeytin Ağacı', ik: '🫒', tur: 'bitki', ll: [38.4, 27.1],
      omur: '1.000 – 2.500+ yıl ("Ölmez Ağaç")',
      beslenme: 'Fotosentez — kireçli, taşlı Akdeniz toprağından derin kökleriyle en az suyla maksimum verim alır.',
      alan: 'Akdeniz Havzası (Anadolu, Ege, Girit, Levant, İtalya, İspanya)',
      superguc: 'Gövdesi yansa, kesilse ya da içi tamamen oyulsa bile kökünden yeniden filizlenip yüzyıllarca yaşamaya devam eder.',
      tehdit: 'Aşırı donlar ve zeytinliklerin yapılaşmaya açılması.',
      dongu: [
        ['🌸 İlkbahar Çiçekleri', 'Mayıs ayında binlerce minik beyaz çiçek açar; rüzgâr polenlerini komşu ağaçlara taşır.'],
        ['☀️ Yaz Kuraklığına Direniş', 'Gümüşi yaprakların kavurucu Akdeniz güneşini yansıtır; su kaybetmemek için gözeneklerini öğlen kapatırsın.'],
        ['🍂 Sonbahar Hasadı', 'İmparatorluklar kurulup yıkılırken sen her sonbahar insanlara ve kuşlara binlerce yıldır aynı bereketli zeytini verirsin.']
      ],
      w: 'Olive'
    },
    {
      id: 'yd-baobab', ad: 'Afrika Baobabı ("Hayat Ağacı")', ik: '🌳', tur: 'bitki', ll: [-20.25, 44.42],
      omur: '1.000 – 2.500 yıl',
      beslenme: 'Fotosentez — yağmur mevsiminde dev gövdesine 120.000 litreye kadar su depolayıp kurak ayları atlatır.',
      alan: 'Afrika savanları ve Madagaskar',
      superguc: 'Ters dikilmiş gibi duran dalları, lifli su tankı gövdesi ve portakaldan 6 kat fazla C vitamini içeren meyvesiyle tüm savana hayat verir.',
      tehdit: 'İklim değişikliğiyle artan aşırı sıcaklık ve kuraklık.',
      dongu: [
        ['🌧️ Yağmur Mevsimi', 'Kısa yağmurlarda süngerimsi gövden şişerek on binlerce litre suyu içine çeker ve yemyeşil yapraklarla kaplanırsın.'],
        ['🌙 Gece Çiçekleri', 'Büyük beyaz çiçeklerini yalnızca gece açarsın; çünkü onları meyve yarasaları ve gece kelebekleri tozlaştırır!'],
        ['☀️ 9 Aylık Kuraklık', 'Yapraklarını döküp suya tasarruf eder, dev gölgen ve gövdendeki nemle fillere, kuşlara ve insanlara sığınak olursun.']
      ],
      w: 'Adansonia'
    },
    {
      id: 'yd-venus', ad: 'Venüs Sinekkapanı', ik: '🪴', tur: 'bitki', ll: [34.2, -78.0],
      omur: '5 – 20 yıl',
      beslenme: 'Hem fotosentez hem etçil! Azotça fakir bataklıkta yaşadığı için sinek, örümcek ve karınca yakalayıp sindirir.',
      alan: 'Kuzey ve Güney Karolina\'nın nemli bataklıkları (ABD)',
      superguc: 'Yaprağının içinde 6 hassas "tetik tüyü" vardır; aynı tüye 20 saniye içinde İKİ KEZ dokunulursa yaprak 0,1 saniyede kapanır!',
      tehdit: 'Bataklıkların kurutulması ve yasa dışı bitki toplayıcılığı.',
      dongu: [
        ['🌅 Tatlı Tuzak', 'Yapraklarının kırmızı içi ve kenarındaki tatlı nektarla meraklı bir sineği kendine çekersin.'],
        ['⚡ 0,1 Saniyelik Kapanış', 'Yağmur damlasına aldanmamak için 20 saniye içinde iki dokunuşu sayar, gerçek böcek gelince kapanı şimşek gibi kapatırsın!'],
        ['☀️ 10 Günlük Sindirim', 'Yaprağı mühürleyip sindirim enzimleri salgılar, böcekten değerli azotu emdikten sonra yaprağı tekrar açarsın.']
      ],
      w: 'Venus flytrap'
    },
    {
      id: 'yd-kaktus', ad: 'Saguaro Dev Kaktüsü', ik: '🌵', tur: 'bitki', ll: [32.2, -111.1],
      omur: '150 – 200 yıl',
      beslenme: 'Fotosentez (gece CO₂ alıp gündüz güneşle işleyen özel CAM sistemi!).',
      alan: 'Sonora Çölü (ABD Arizona – Meksika)',
      superguc: 'Akordeon gibi kıvrımlı gövdesi yağmurda genişleyip 3.000 litre su depolar; ilk kolunu ancak 75 yaşındayken çıkarır!',
      tehdit: 'Çöl yangınları, aşırı donlar ve yavaş büyüme hızı.',
      dongu: [
        ['🌱 Koruyucu Ağacın Altında', 'İlk 10 yılında sadece 4 cm boyundasın; yakıcı çöl güneşinden bir "hemşire çalı"nın gölgesinde korunursun.'],
        ['🌙 Gece Nefes Alma', 'Gündüz su kaybetmemek için gözeneklerini sımsıkı kapatır, serin çöl gecesinde açıp karbondioksit toplarsın!'],
        ['☀️ Çölün Apartmanı', '12 metreye ulaşınca ağaçkakanlar gövdene yuva oyar, çöl baykuşları ve yarasa sürüleri meyvelerinle beslenir.']
      ],
      w: 'Saguaro'
    },
    {
      id: 'yd-bambu', ad: 'Dev Moso Bambusu', ik: '🎋', tur: 'bitki', ll: [30.2, 119.8],
      omur: '60 – 120 yıl (tek bir dev yeraltı kök ağı olarak)',
      beslenme: 'Fotosentez — yeraltındaki rizom ağıyla besini tüm orman boyunca paylaşır.',
      alan: 'Doğu ve Güneydoğu Asya\'nın nemli dağ yamaçları',
      superguc: 'Ağaç değil dev bir ottur! Baharda günde 90 cm (saatte ~4 cm!) uzayarak dünyanın en hızlı büyüyen bitkisidir ve çelik kadar esnektir.',
      tehdit: 'Ormansızlaşma ve 60–120 yılda bir yaşanan toplu çiçeklenme sonrası yenilenme dönemi.',
      dongu: [
        ['🌱 Yeraltında Sessiz Hazırlık', 'İlk 4–5 yıl boyunca toprak üstünde pek görünmez, yeraltında dev bir kök ve enerji ağı kurarsın.'],
        ['🚀 6 Haftada 25 Metre!', 'Bahar yağmurlarıyla filiz patlar ve sadece 6 haftada tam 25 metre yüksekliğe ulaşırsın!'],
        ['🌬️ Rüzgârda Eğil, Kırılma', 'İçi boş boğumlu gövden tayfun rüzgârında yay gibi eğilir ama kırılmaz; pandalara ve insanlara besin/barınak olursun.']
      ],
      w: 'Phyllostachys edulis'
    },
    {
      id: 'yd-nilufer', ad: 'Dev Amazon Nilüferi', ik: '🪷', tur: 'bitki', ll: [-3.1, -60.0],
      omur: 'Mevsimlik / Çok yıllık (hızlı büyüyen su bitkisi)',
      beslenme: 'Fotosentez — 3 metre çapındaki dev yapraklarıyla Amazon nehrindeki tüm güneş ışığını toplar.',
      alan: 'Amazon Nehri\'nin sakin göl ve lagünleri (Güney Amerika)',
      superguc: 'Yaprağının altındaki örümcek ağı gibi damar sistemi o kadar sağlamdır ki 40 kg ağırlığındaki bir çocuğu su üstünde taşıyabilir!',
      tehdit: 'Nehir kirliliği ve Amazon su rejiminin değişmesi.',
      dongu: [
        ['🌿 Su Üstünde Mühendislik', 'Altı dikenli dev yaprakların hızla açılır ve balıkların ısırmasını önler; kenarındaki küçük yarıklar yağmur suyunu dışarı akıtır.'],
        ['🤍 1. Gece: Beyaz Çiçek ve Isı', 'Çiçeğin ilk gece bembeyaz açılır, ananas kokusu yayar ve çevresinden 10 °C daha fazla ısınarak böcekleri içine çeker — sonra sabaha karşı kapatıp misafirini içeride tutar!'],
        ['🩷 2. Gece: Pembe Çiçek', 'İkinci gece çiçek pembeye döner, böceği polenle kaplayıp serbest bırakır ki başka bir beyaz çiçeği tozlaştırsın!']
      ],
      w: 'Victoria amazonica'
    },
    {
      id: 'yd-mikoriza', ad: 'Orman Mantar Ağı ("Ormanın İnterneti")', ik: '🍄', tur: 'bitki', ll: [44.5, -118.5],
      omur: 'Yüzlerce – 2.500+ yıl (Oregon\'daki dev mantar ağı 9 km² kaplar!)',
      beslenme: 'Ortak yaşam (Simbiyoz) — fotosentez yapmaz; ağaç köklerine su ve mineral verir, karşılığında ağaçtan şeker alır.',
      alan: 'Dünyadaki neredeyse tüm ormanların toprak altı',
      superguc: 'Tek bir çay kaşığı orman toprağında kilometrelerce mikroskobik mantar ipliği (hif) bulunur; yaşlı ağaçlar bu ağdan gölgedeki fidanlara besin gönderir!',
      tehdit: 'Toprağın aşırı sürülmesi, kimyasal gübreler ve orman kesimi.',
      dongu: [
        ['🕸️ Yeraltı Kabloları', 'Saç telinden 100 kat ince ipliklerinle çam, meşe ve kayın ağaçlarının köklerini birbirine bağlarsın.'],
        ['🤝 Adil Takas', 'Ağaçların ulaşamadığı kaya aralarından fosfor, azot ve suyu çekip köklere verir, karşılığında güneş enerjisiyle üretilen şekeri alırsın.'],
        ['🚨 Tehlike Sinyali', 'Bir ağaca böcek saldırınca kimyasal uyarı sinyallerini ağ üzerinden komşu ağaçlara iletirsin; onlar da savunma kimyasallarını önceden hazırlar!']
      ],
      w: 'Mycorrhizal network'
    },
    {
      id: 'yd-ginkgo', ad: 'Ginkgo Biloba ("Yaşayan Fosil Ağaç")', ik: '🍂', tur: 'bitki', ll: [31.0, 119.5],
      omur: '1.000 – 3.000 yıl',
      beslenme: 'Fotosentez — hava kirliliğine, böceklere ve hastalıklara olağanüstü dirençlidir.',
      alan: 'Anavatanı Çin (bugün tüm dünya parklarında)',
      superguc: '270 milyon yıldır (dinozorlardan bile önce!) neredeyse hiç değişmeden yaşayan yaşayan fosildir; 1945 Hiroşima atom bombasından 1 km ötede hayatta kalıp yeniden filizlenen ağaçlar ginkgoydu!',
      tehdit: 'Doğal yabani popülasyonu yalnızca Çin\'deki birkaç dağ vadisinde kalmıştır.',
      dongu: [
        ['🌿 Yelpaze Yapraklar', 'İlkbaharda başka hiçbir ağaçta olmayan yelpaze biçimli yaprakların açılır.'],
        ['☀️ Şehir Zırhı', 'Böceklerin sevmediği kimyasalların ve kalın hücre duvarların sayesinde ne hastalık ne şehir dumanı seni yıldıramaz.'],
        ['💛 Altın Yağmur', 'Sonbaharda tüm yaprakların aynı anda parlak altına döner ve çoğu zaman tek bir gün içinde hep birlikte dökülür!']
      ],
      w: 'Ginkgo biloba'
    },
    {
      id: 'yd-mangrov', ad: 'Mangrov Ağacı (Tuzlu Su Ormanı)', ik: '🌿', tur: 'bitki', ll: [22.0, 89.2],
      omur: '50 – 100+ yıl',
      beslenme: 'Fotosentez — diğer tüm ağaçları öldüren tuzlu deniz suyunu köklerindeki özel filtreyle arıtıp içer!',
      alan: 'Tropikal kıyılar (Sundarbans, Florida, Endonezya, Amazon deltası)',
      superguc: 'Suyun üstüne çıkan "şnorkel kökleriyle" çamurdan nefes alır; tsunamilerin ve kasırgaların dalga enerjisini %70 azaltarak kıyıları korur.',
      tehdit: 'Kıyı yapılaşması ve karides çiftlikleri için kesilmesi.',
      dongu: [
        ['🌊 Tuz Filtreleme', 'Köklerin deniz suyundaki tuzun %90\'ını daha içeri almadan süzüp geri çevirir; kalan tuzu ise yaşlı yapraklarında biriktirip döker.'],
        ['🐟 Yavru Balık Kreşi', 'Sualtındaki karmaşık kök labirentin binlerce yavru balık, yengeç ve karides için güvenli bir çocuk yuvasıdır.'],
        ['🌱 Yüzen Tohumlar', 'Tohumların daha daldayken filizlenip küçük bir mızrağa dönüşür; suya düşüp dalgalarla yeni kıyılara yüzerek çamura saplanır!']
      ],
      w: 'Mangrove'
    },
    {
      id: 'yd-sakura', ad: 'Sakura (Japon Kiraz Çiçeği)', ik: '🌸', tur: 'bitki', ll: [35.0, 135.75],
      omur: '40 – 60 yıl (bazı anıt türleri 1.000+ yıl!)',
      beslenme: 'Fotosentez — ilkbaharda yaprak çıkarmadan önce tüm enerjisini çiçeklenmeye ayırır.',
      alan: 'Japonya, Kore ve Doğu Asya',
      superguc: 'Kış soğuğunu ölçüp bahar sıcaklığı tam eşiğe geldiğinde milyonlarca ağaç birkaç gün içinde aynı anda pembe-beyaz buluta dönüşür.',
      tehdit: 'Isınan kışlar çiçeklenme takvimini erkene çekiyor.',
      dongu: [
        ['❄️ Kış Uykusu', 'Çiçek tomurcukların sonbahardan hazırdır; kışın soğuğu onları uyandırmak için gerekli biyolojik saati kurar.'],
        ['🌸 10 Günlük Şölen', 'Baharda tüm dalların bir anda pembe çiçekle patlar; rüzgârla yağan yapraklar Japon kültüründe hayatın güzelliğinin ve geçiciliğinin simgesidir.'],
        ['🌿 Yaz Yeşili', 'Çiçekler dökülünce hemen yeşil yaprakların çıkar ve gelecek bahar için güneş enerjisi biriktirirsin.']
      ],
      w: 'Cherry blossom'
    },
    {
      id: 'yd-kahve', ad: 'Kahve Ağacı (Coffea arabica)', ik: '☕', tur: 'bitki', ll: [7.5, 36.5],
      omur: '30 – 50 yıl (doğada 80+ yıl)',
      beslenme: 'Fotosentez — yüksek dağ yamaçlarının volkanik, mineralce zengin toprağını ve gölgeyi sever.',
      alan: 'Anavatanı Etiyopya yaylaları; bugün tüm tropikal "Kahve Kuşağı"',
      superguc: 'Kafeini aslında insanlar uyansın diye değil, yapraklarını yiyen böcekleri uzaklaştırmak için doğal bir savunma zehri olarak üretir!',
      tehdit: 'Küresel ısınma serin yüksek dağ kahve alanlarını daraltıyor.',
      dongu: [
        ['🌼 Yasemin Kokulu Çiçek', 'Yağmurun ardından bembeyaz, yasemin gibi kokan çiçekler açarsın.'],
        ['🍒 9 Aylık Olgunlaşma', 'Çiçeklerin yeşil, sonra parlak kırmızı "kahve kirazlarına" dönüşür — içindeki iki çekirdek bugün dünyanın en çok içilen içeceğinin kaynağıdır.'],
        ['🌳 Gölgede Büyüme', 'Doğal yaşamında uzun orman ağaçlarının gölgesinde kuşlarla birlikte uyumlu büyürsün.']
      ],
      w: 'Coffea arabica'
    },
    {
      id: 'yd-kakao', ad: 'Kakao Ağacı ("Tanrıların Besini")', ik: '🍫', tur: 'bitki', ll: [-2.0, -76.0],
      omur: '40 – 60 yıl (100 yıla kadar)',
      beslenme: 'Fotosentez — sıcak, nemli yağmur ormanlarının alt katmanlarında yüksek ağaçların gölgesinde yaşar.',
      alan: 'Anavatanı Amazon Havzası; bugün Batı Afrika ve Orta/Güney Amerika',
      superguc: 'Çiçekleri ve dev meyveleri ince dallarda değil, doğrudan kalın ağaç gövdesinin üzerinden çıkar (kauliflori)!',
      tehdit: 'Mantar hastalıkları ve yağmur ormanı tahribi.',
      dongu: [
        ['🦟 Minik Tozlaştırıcı', 'Gövdenin üstünde açan küçücük çiçeklerini bal arıları değil, yalnızca 1 mm\'lik minik orman tatarcıkları tozlaştırabilir!'],
        ['🍈 Gövdeden Sarkan Meyveler', 'Her biri 30–50 çekirdek taşıyan renkli kakao meyveleri doğrudan gövdenin üzerinde olgunlaşır.'],
        ['🐒 Maymunlarla Yayılış', 'Tatlı beyaz meyve etini yiyen maymunlar acı çekirdekleri tükürerek ormana yeni kakao ağaçları eker.']
      ],
      w: 'Theobroma cacao'
    },
    {
      id: 'yd-rafflesia', ad: 'Rafflesia (Dünyanın En Büyük Çiçeği)', ik: '🌺', tur: 'bitki', ll: [0.5, 101.5],
      omur: 'Yıllarca görünmez yaşar; çiçeği yalnızca 5–7 gün açar!',
      beslenme: 'Tam parazit — kökü, gövdesi, yaprağı ve klorofili YOKTUR; tamamen orman sarmaşığının içine yerleşip besin emer.',
      alan: 'Sumatra ve Borneo yağmur ormanları (Endonezya – Malezya)',
      superguc: '1 metre çapında ve 11 kg ağırlığında dünyanın en büyük tek çiçeğini açar; sinekleri çekmek için çürük et gibi kokar!',
      tehdit: 'Yağmur ormanlarının kesilmesiyle kritik tehlike altında.',
      dongu: [
        ['🕸️ Görünmez Yaşam', 'Yıllar boyunca bir sarmaşığın içinde mikroskobik iplikler hâlinde hiç görünmeden büyürsün.'],
        ['🌺 Dev Lahana Tomurcuğu', 'Aylar içinde bir lahana büyüklüğüne ulaşan tomurcuk bir sabah dev kırmızı-benekli çiçeğe açılır.'],
        ['🪰 5 Günlük Yarış', 'Keskin kokunla orman sineklerini çağırıp tozlaşmayı tamamlamak için sadece 5 günün vardır; sonra hızla kararıp kaybolursun.']
      ],
      w: 'Rafflesia arnoldii'
    },
    {
      id: 'yd-okaliptus', ad: 'Dev Okaliptüs (Avustralya)', ik: '🌿', tur: 'bitki', ll: [-37.8, 145.7],
      omur: '200 – 400 yıl',
      beslenme: 'Fotosentez — dikey sarkan yapraklarıyla yakıcı Avustralya güneşinden kaçınıp suyu korur.',
      alan: 'Avustralya ormanları (koalaların tek besin kaynağı)',
      superguc: '100 metreye ulaşan dünyanın en uzun çiçekli ağacıdır; yapraklarındaki uçucu yağlar çoğu hayvan için zehirlidir ama koalalar onu sindirecek özel karaciğere sahiptir.',
      tehdit: 'Aşırı sık ve şiddetli orman yangınları.',
      dongu: [
        ['☀️ Dikey Yapraklar', 'Yaprakların güneşe yan dönerek sarkar — bu yüzden okaliptüs ormanlarının altı güneşli ve ferah kalır.'],
        ['🐨 Koala Misafirleri', 'Dallarında günde 20 saat uyuyan koalalara hem yatak hem de besin sağlarsın.'],
        ['🌱 Yangından Sonra Filiz', 'Gövdenin kabuğu altında saklanan uyuyan tomurcuklar yangından sadece haftalar sonra yemyeşil sürgünler verir.']
      ],
      w: 'Eucalyptus regnans'
    },
    {
      id: 'yd-cay', ad: 'Çay Bitkisi (Camellia sinensis)', ik: '🍵', tur: 'bitki', ll: [25.0, 100.5],
      omur: '100 – 1.000+ yıl (Çin\'de 2.000 yıllık yabani çay ağaçları vardır!)',
      beslenme: 'Fotosentez — asitli toprak, bol sis ve yıl boyu düzenli yağmuru sever (Rize, Yunnan, Assam, Seylan).',
      alan: 'Anavatanı Güneybatı Çin; bugün Doğu Karadeniz, Hindistan, Sri Lanka ve Japonya',
      superguc: 'Yeşil, siyah, beyaz ve oolong çayların TAMAMI aynı bitkiden gelir — farkı yalnızca yaprakların toplanıp kurutulma/fermantasyon biçimi yaratır!',
      tehdit: 'Düzensiz yağışlar ve aşırı sıcaklık dalgaları.',
      dongu: [
        ['🌧️ Sisli Yamaçlar', 'Serin dağ sisi ve bol yağmur altında en üstteki iki taze yaprak ve tomurcuk ("iki yaprak bir tomurcuk") filizlenir.'],
        ['☀️ Doğal Savunma', 'Yapraklarında ürettiğin polifenoller ve kafein hem seni böceklerden korur hem de çaya eşsiz aromasını verir.'],
        ['🍵 Binlerce Yıllık Dostluk', '5.000 yıl önce Çin\'de başlayan yolculuğunla bugün sudan sonra insanlığın en çok içtiği içeceksin.']
      ],
      w: 'Camellia sinensis'
    },
    // ---- +12 Yeni Bitki Çeşitliliği ----
    {
      id: 'yd-kustum', ad: 'Küstüm Otu (Mimosa pudica)', ik: '🌱', tur: 'bitki', ll: [-10.0, -55.0],
      omur: '2 – 5 yıl',
      beslenme: 'Fotosentez + köklerindeki bakterilerle havadaki azotu toprağa bağlar.',
      zincir: 'Birincil üretici — dokunulunca hızla kapanarak otçul böcekleri ve hayvanları şaşırtıp kaçırır.',
      goc: 'Anavatanı Güney/Orta Amerika\'dır; tohumları hayvan tüylerine yapışarak tüm tropikal kuşağa yayılmıştır.',
      alan: 'Tropikal Amerika, Asya ve Afrika\'nın güneşli açıklıkları',
      superguc: 'Yapraklarına dokunulduğunda saniyeler içinde su basıncını boşaltıp yapraklarını sıkıca kapatır!',
      sasirtici: 'Bilim insanları küstüm otuna zararsız su damlaları damlattığında bitkinin bunun tehlike olmadığını ÖĞRENDİĞİNİ, artık kapanmadığını ve bunu haftalarca HATIRLADIĞINI keşfetti — beyni olmadan hafızası var!',
      tehdit: 'Aşırı soğuk ve gölge.',
      dongu: [
        ['🌅 Güneşle Açılış', 'Sabah gün doğarken ince tüy gibi yapraklarını güneşe doğru tek tek açarsın.'],
        ['⚡ Dokunma Refleksi', 'Bir çekirge yaprağına konunca elektrik sinyaliyle 0,1 saniyede yapraklarını kapatıp kuru bir dal gibi görünürsün.'],
        ['🌙 Gece Uykusu', 'Hava kararınca hiç dokunulmasa bile nem ve enerji korumak için yapraklarını kapatıp uyursun.']
      ],
      w: 'Mimosa pudica'
    },
    {
      id: 'yd-aycicegi', ad: 'Ayçiçeği (Günebakan)', ik: '🌻', tur: 'bitki', ll: [39.0, -98.0],
      omur: '1 yıl (tek yıllık)',
      beslenme: 'Fotosentez — bol güneş ve derin kökleriyle toprağın altındaki mineralleri emer.',
      zincir: 'Birincil üretici & arı/kuş deposu — poleni arıları, yağlı çekirdekleri kuşları ve insanları besler.',
      goc: 'Kuzey Amerika\'da 5.000 yıl önce yerlilerce evcilleştirildi; 16. yüzyılda Avrupa\'ya ve Trakya ovalarına yayıldı.',
      alan: 'Anavatanı Kuzey Amerika; bugün Trakya, Ukrayna, Rusya ve tüm ılıman ovalar',
      superguc: 'Gençken biyolojik saatiyle güneşi doğudan batıya takip eder; gece doğuya dönüp yeni günü bekler!',
      sasirtici: 'Tek bir çiçek sandığın ayçiçeğinin ortasında aslında 1.000 ila 2.000 adet minik ayrı çiçek Fibonacci spirali düzeninde dizilmiştir! Ayrıca topraktaki radyoaktif maddeleri bile temizleyebilir.',
      tehdit: 'Aşırı kuraklık ve mantar hastalıkları.',
      dongu: [
        ['🌱 Güneşi Takip', 'Genç gövden sabah doğuya, öğlen tepeye, akşam batıya dönerek maksimum güneş enerjisi toplar.'],
        ['🌻 Doğuya Sabitlenme', 'Çiçek açınca doğuya sabitlenirsin — sabah ilk güneşle ısınan çiçeklerin arıları 5 kat daha fazla çeker!'],
        ['🐦 Tohum Şöleni', 'Yaz sonunda yüzlerce yağlı çekirdekle başını eğip hem kuşları hem gelecek baharı beslersin.']
      ],
      w: 'Common sunflower'
    },
    {
      id: 'yd-karahindiba', ad: 'Karahindiba (Rüzgâr Gezgini)', ik: '🌼', tur: 'bitki', ll: [48.0, 11.0],
      omur: 'Çok yıllık (kökü 10+ yıl yaşar)',
      beslenme: 'Fotosentez — derin kazık köküyle beton çatlaklarından bile su ve mineral çeker.',
      zincir: 'Erken bahar üreticisi — kıştan çıkan bal arılarının ilk polen ve nektar kaynağıdır.',
      goc: 'Beyaz tüylü tohumları rüzgârda minik paraşüt gibi süzülerek 100 kilometreye kadar uçabilir!',
      alan: 'Antarktika hariç neredeyse tüm dünya çayırları ve şehirleri',
      superguc: 'Çiçeğinden köküne her parçası yenebilir; koparılsa bile derin kökünden günler içinde yeniden filizlenir.',
      sasirtici: 'Uçan tohumlarının tepesindeki tüylerin üstünde özel bir "ayrılmış hava girdabı" (vortex) oluşur — bu fiziksel mucize tohumu rüzgârda kilometrelerce havada tutar!',
      tehdit: 'Çim ilaçları (yabani ot sanılıp sökülmesi).',
      dongu: [
        ['🌼 Altın Çiçek', 'İlkbaharda parlak sarı çiçeğinle güneşle açılır, yağmurda ve gece kapanarak polenini korursun.'],
        ['☁️ Beyaz Küreye Dönüş', 'Tozlaştıktan sonra 2 gün kapalı kalıp yüzlerce ipeksi paraşütlü tohumdan oluşan beyaz topa dönüşürsün.'],
        ['🌬️ Rüzgârla Göç', 'Hafif bir esintiyle yüzlerce tohumun gökyüzüne dağılıp yeni kırlara yerleşir.']
      ],
      w: 'Taraxacum'
    },
    {
      id: 'yd-mese', ad: 'Anıt Meşe Ağacı', ik: '🌳', tur: 'bitki', ll: [40.5, 29.5],
      omur: '500 – 1.000+ yıl',
      beslenme: 'Fotosentez + köklerindeki mantar ağıyla ormandaki komşu ağaçlarla besin paylaşır.',
      zincir: 'Kilit taşı ekosistem mimarı — tek bir meşe ağacı böcek, kuş, sincap, liken ve mantar dahil 2.300\'den fazla türe ev sahipliği yapar!',
      goc: 'Meşe palamutlarını kış için toprağa gömen alakargalar ve sincaplar unuttukları yerlerde yeni meşe ormanları "diker".',
      alan: 'Avrupa, Anadolu, Kuzey Amerika ve Asya\'nın ılıman ormanları',
      superguc: 'Kökleri toprağın 10 metre derinine inebilir; fırtınalara ve yüzyıllık kuraklıklara meydan okur.',
      sasirtici: 'Bir meşe ağacı ilk palamutlarını vermeye 20–40 yaşında başlar ve ömrü boyunca yaklaşık 10 milyon palamut üretir — bunların sadece birkaç tanesi yeni bir dev meşeye dönüşür!',
      tehdit: 'Orman kesimi, yangınlar ve iklim değişikliği.',
      dongu: [
        ['🌰 Sincabın Unuttuğu Palamut', 'Sonbaharda bir alakarganın toprağa saklayıp unuttuğu palamuttan baharda filizlenirsin.'],
        ['🌳 Yüzyıllık Şehir', 'Yüzlerce yılda genişleyen dalların baykuşlara, yarasalara, yüzlerce kelebek türüne ve yosunlara dev bir apartman olur.'],
        ['🍂 Sonbahar Altını', 'Her sonbahar yapraklarını döküp toprağı besler, kış uykusuna geçersin.']
      ],
      w: 'Oak'
    },
    {
      id: 'yd-ejderhakani', ad: 'Ejderha Kanı Ağacı (Sokotra)', ik: '🌴', tur: 'bitki', ll: [12.5, 53.9],
      omur: '500 – 650+ yıl',
      beslenme: 'Fotosentez + şemsiye biçimli tepesiyle okyanus sisinden havadaki nemi yakalar.',
      zincir: 'Endemik çöl üreticisi — gölgesi altındaki serin toprakta ada kuşlarına ve kertenkelelere sığınak olur.',
      goc: 'Yalnızca Yemen\'e bağlı Sokotra Adası\'nda yaşar — Dünya\'da başka hiçbir yerde doğal olarak yoktur!',
      alan: 'Sokotra Adası (Hint Okyanusu)',
      superguc: 'Dev şemsiye şeklindeki tacı, kavurucu çöl güneşinde kendi köklerini gölgeler ve yapraklarından akan sis damlalarını doğrudan köküne yönlendirir.',
      sasirtici: 'Gövdesi kesildiğinde koyu kan kırmızısı bir reçine akar; antik Roma\'da gladyatör yaraları için ilaç ve Stradivarius kemanlarının efsanevi kızıl cilası olarak kullanıldı!',
      tehdit: 'İklim değişikliğiyle azalan muson sisi ve genç fidanları yiyen keçiler.',
      dongu: [
        ['🌫️ Sis Hasadı', 'Sabah denizden gelen sis bulutu sık yapraklı şemsiye tepende yoğunlaşıp köklerine su damlatır.'],
        ['⏳ Sabırlı Büyüme', 'On yılda yalnızca birkaç santimetre büyüyerek yüzyıllar içinde ikonik mantar şekline kavuşursun.'],
        ['🩸 Kırmızı Reçine Kalkanı', 'Gövden yaralandığında kırmızı reçinen yarayı anında kapatıp mikropları engeller.']
      ],
      w: 'Dracaena cinnabari'
    },
    {
      id: 'yd-orkide', ad: 'Arı Orkidesi (Taklit Ustası)', ik: '🌺', tur: 'bitki', ll: [38.5, 27.2],
      omur: 'Çok yıllık (yumrusu yıllarca yaşar)',
      beslenme: 'Fotosentez + çimlenmek için toprağındaki özel mikoriza mantarına tamamen bağımlıdır.',
      zincir: 'Uzman tozlaşma bitkisi — tozlaşmak için böceklerin duyularını taklit eder.',
      goc: 'Toz zerresi kadar hafif milyonlarca tohumu rüzgârla yüzlerce kilometre uzağa taşınabilir.',
      alan: 'Akdeniz havzası, Anadolu, Avrupa ve Orta Doğu çayırları',
      superguc: 'Çiçeği tıpkı tüylü bir dişi yaban arısına benzer ve dişi arının eş çağırma kokusunu (feromon) salgılar!',
      sasirtici: 'Erkek arı çiçeği gerçek bir dişi arı sanıp üzerine konduğunda sırtına polen keseleri yapışır; arı kandırıldığını anlayıp uçunca başka bir orkideyi tozlaştırmış olur!',
      tehdit: 'Yumrularının salep için bilinçsizce sökülmesi ve çayırların betonlaşması.',
      dongu: [
        ['🍄 Mantarla Ortaklık', 'Toz kadar küçük tohumun besin deposu olmadığı için ancak doğru mantarla buluşunca çimlenebilir.'],
        ['🐝 Kusursuz Kılık Değiştirme', 'Baharda açan çiçeğin kadifemsi dokusu ve kokusuyla erkek arıları mıknatıs gibi çeker.'],
        ['🌬️ Rüzgâr Tohumları', 'Tozlaşma sonrası kapsül patlayıp binlerce mikroskobik tohumu rüzgâra savurur.']
      ],
      w: 'Ophrys apifera'
    },
    {
      id: 'yd-palmiye', ad: 'Hindistan Cevizi Palmiyesi', ik: '🥥', tur: 'bitki', ll: [4.2, 73.5],
      omur: '60 – 80 yıl',
      beslenme: 'Fotosentez — tuzlu deniz spreyine ve kumsala dayanıklıdır.',
      zincir: 'Tropikal kıyı üreticisi — meyvesiyle hindistan cevizi yengeçlerini, kuşları ve ada insanlarını besler.',
      goc: 'Dünyanın en ünlü "deniz gezgini" bitkisidir: su geçirmez, hava dolu meyvesi okyanus akıntılarıyla 4.000 km yüzüp 3 ay sonra yeni bir mercan adasında filizlenebilir!',
      alan: 'Tüm tropikal okyanus kıyıları ve mercan adaları',
      superguc: 'Kasırga rüzgârlarında esnek gövdesi neredeyse yere kadar eğilir ama kırılmaz!',
      sasirtici: 'Tek bir ağaç yılda 70\'e kadar hindistan cevizi verir; içindeki berrak su o kadar sterildir ki acil durumlarda tropik adalarda doğrudan sıvı takviyesi olarak bile kullanılmıştır.',
      tehdit: 'Yükselen deniz seviyeleri ve palmiye hastalıkları.',
      dongu: [
        ['🌊 Okyanus Yolculuğu', 'Dalgaların taşıdığı sert kabuklu meyve ıssız bir kumsala vurur ve içindeki tatlı suyla ilk filizini büyütür.'],
        ['🌴 Esnek Gövde', 'Güneşe doğru eğilerek büyür, tuzlu rüzgârlara göğüs gerersin.'],
        ['🥥 Yeni Gezginler', 'Olgunlaşan meyvelerin suya düşüp yeni adalar keşfetmek üzere okyanusa açılır.']
      ],
      w: 'Coconut'
    },
    {
      id: 'yd-safran', ad: 'Safran Çiçeği (Kırmızı Altın)', ik: '🪻', tur: 'bitki', ll: [41.25, 32.69],
      omur: 'Soğanı çok yıllık (her sonbahar yeniden açar)',
      beslenme: 'Fotosentez — kireçli, drenajı iyi kuru toprakları ve serin sonbaharı sever.',
      zincir: 'Kültür bitkisi — arılarla tozlaşır; soğanları tarla farelerine karşı korunur.',
      goc: '3.500 yıl önce Ege/Girit ve İran\'dan tüm dünyaya yayıldı; Safranbolu adını bu mor çiçekten alır.',
      alan: 'İran, Safranbolu (Türkiye), Keşmir, İspanya ve Yunanistan',
      superguc: 'Kendi ağırlığının 100.000 katı suyu parlak altın sarısına boyayabilir!',
      sasirtici: 'Sadece 1 kilogram safran baharatı elde etmek için 150.000 ila 200.000 çiçeğin içindeki 3 ince kırmızı tepecik gün doğmadan tek tek elle toplanmalıdır — bu yüzden ağırlıkça altından pahalıdır!',
      tehdit: 'İklim değişikliği ve aşırı sonbahar yağışları.',
      dongu: [
        ['☀️ Yaz Uykusu', 'Kavurucu yaz boyunca toprağın altında soğan hâlinde uyuyarak su saklarsın.'],
        ['🍂 Sonbahar Mucizesi', 'Ekim ayında diğer tüm bitkiler solarken sen mor yaprakların ve 3 kırmızı tepeciğinle bir anda açarsın.'],
        ['🌅 Şafak Hasadı', 'Çiçeklerin güneş vurmadan solduğu için sadece şafak vaktinde elle toplanırsın.']
      ],
      w: 'Saffron'
    },
    {
      id: 'yd-pando', ad: 'Pando (Tek Kökten Dev Orman)', ik: '🍂', tur: 'bitki', ll: [38.52, -111.75],
      omur: '14.000 – 80.000 yıl (Dünya\'nın en ağır ve en yaşlı canlılarından!)',
      beslenme: 'Fotosentez — 47.000 ağaç gövdesi yeraltındaki TEK BİR dev kök sistemine bağlıdır!',
      zincir: 'Dev orman üreticisi — geyikler, kuşlar ve kunduzlara dev bir yaşam alanı sunar.',
      goc: 'Yeraltı kökleriyle yanlara doğru sürgün vererek 43 hektarlık (60 futbol sahası!) bir alana yayılmıştır.',
      alan: 'Utah, ABD',
      superguc: 'Üstteki ağaçlar yansa bile yeraltındaki dev kök hayatta kalır ve yangından sonra küllerden hızla yeni sürgünler fışkırtır!',
      sasirtici: 'Dışarıdan 47.000 ayrı ağaçlık bir orman gibi görünür ama genetik olarak HEPSİ TEK BİR CANLIDIR; toplam ağırlığı 6.000 ton (30 mavi balina ağırlığında!) ile Dünya\'nın en ağır organizmasıdır!',
      tehdit: 'Yeni çıkan genç sürgünleri yiyen aşırı geyik popülasyonu.',
      dongu: [
        ['🌱 Yeraltı Ağı', 'Tek bir tohumdan binlerce yıl önce doğup yeraltında kilometrelerce uzanan ortak bir kök sistemi kurdun.'],
        ['🍂 Altın Sonbahar', 'Aynı DNA\'yı taşıdığınız için sonbaharda 47.000 gövdenin yaprakları aynı gün altın sarısına döner!'],
        ['♻️ Sürekli Yenilenme', 'Yaşlanan bir gövde devrilince köklerin hemen yanından yepyeni genç bir gövde gönderir.']
      ],
      w: 'Pando (tree)'
    },
    {
      id: 'yd-lotus', ad: 'Kutsal Lotus Çiçeği', ik: '🪷', tur: 'bitki', ll: [25.3, 83.0],
      omur: 'Kökü onlarca yıl · Tohumu 1.300+ yıl canlı kalabilir!',
      beslenme: 'Fotosentez — çamurlu gölet tabanından besin alıp berrak su üstünde çiçek açar.',
      zincir: 'Sulak alan üreticisi — suyu temizler, yaprakları kurbağa ve böceklere sal olur.',
      goc: 'Asya ve Avustralya sulak alanlarının yerlisidir; kutsal sembol olarak tapınak havuzlarıyla tüm Asya\'ya yayıldı.',
      alan: 'Hindistan, Çin, Güneydoğu Asya ve Hazar kıyıları',
      superguc: 'Mikroskobik mumlu çıkıntıları sayesinde yaprakları su ve çamuru iter — "Lotus Etkisi" ile kendi kendini temizleyen yüzey teknolojisine ilham verdi!',
      sasirtici: 'Çin\'de kuru bir göl yatağından çıkarılan 1.300 yıllık bir lotus tohumu suyla buluşturulduğunda başarıyla çimlenip çiçek açmıştır! Ayrıca çiçeği kendi ısısını 30–35 °C\'de sabit tutabilir.',
      tehdit: 'Sulak alanların kurutulması ve ağır su kirliliği.',
      dongu: [
        ['🌊 Çamurdan Yükseliş', 'Karanlık çamurlu göl tabanından sapını güneşe doğru uzatıp tertemiz su yüzeyine çıkarsın.'],
        ['🔥 Sıcak Çiçek', 'Çiçeğin soğuk sabahlarda bile kendi metabolizmasıyla ısınıp böcekleri davet eder.'],
        ['⏳ Zaman Kapsülü Tohum', 'Sert kabuklu tohumların gerekirse yüzlerce yıl çamurda uyuyup uygun günü bekleyebilir.']
      ],
      w: 'Nelumbo nucifera'
    },
    {
      id: 'yd-lavanta', ad: 'Lavanta', ik: '🪻', tur: 'bitki', ll: [43.8, 5.8],
      omur: '10 – 15 yıl',
      beslenme: 'Fotosentez — taşlık, kireçli ve çok az sulu topraklarda bile gelişir.',
      zincir: 'Tozlayıcı mıknatısı — bal arıları ve kelebekler için en zengin nektar kaynaklarındandır; güçlü uçucu yağı zararlı böcekleri uzak tutar.',
      goc: 'Akdeniz\'in kayalık yamaçlarından çıkıp Provence (Fransa) ve Isparta\'nın (Türkiye) mor tarlalarına yayıldı.',
      alan: 'Akdeniz, Güney Fransa ve Isparta (Kuyucak, Türkiye)',
      superguc: 'Gümüşi ince tüylü yaprakları güneş ışığını yansıtarak yaz sıcağında su kaybını en aza indirir.',
      sasirtici: 'Adı Latince "yıkamak" (lavare) sözcüğünden gelir — Antik Romalılar hamam sularını lavanta ile kokulandırır, askerler yaralarını temizlemek için lavanta yağı taşırdı!',
      tehdit: 'Aşırı nem, kök çürüklüğü ve iklim aşırılıkları.',
      dongu: [
        ['☀️ Kurak Toprakta Direnç', 'Başka bitkilerin kuruduğu taşlık yamaçta ince gümüşi yapraklarınla yaz güneşine dayanırsın.'],
        ['🐝 Mor Şölen', 'Haziran-Temmuz\'da açan mor başakların binlerce arı ve kelebeği kendine çeker.'],
        ['💧 Esans Hazinesi', 'Güneş altında biriktirdiğin uçucu yağlar seni hem böceklerden korur hem parfüm ve tıpta kullanılır.']
      ],
      w: 'Lavandula'
    },
    {
      id: 'yd-yosun', ad: 'Turba Yosunu (Sphagnum)', ik: '🌿', tur: 'bitki', ll: [62.0, 26.0],
      omur: 'Yüzyıllarca büyümeye devam eder (alt katmanları binlerce yıllık turba olur)',
      beslenme: 'Fotosentez — gerçek kökü yoktur; yağmur suyunu doğrudan yapraklarından emer.',
      zincir: 'Süper karbon deposu — ölü katmanları çürümeden birikip Dünya\'nın en büyük karbon kilitlerinden birini oluşturur.',
      goc: 'Mikroskobik sporları rüzgârla kuzey yarımkürenin tüm nemli bataklıklarına yayılır.',
      alan: 'Kuzey Avrupa, Sibirya, Kanada ve İskoçya turbalıkları',
      superguc: 'Kendi kuru ağırlığının 20 katından fazla su tutabilen doğal bir süngerdir ve suyu asitlendirerek bakterilerin üremesini durdurur!',
      sasirtici: 'Antiseptik özelliği o kadar güçlüdür ki 1. Dünya Savaşı\'nda pamuk bitince askerlerin yaralarını sarmak için milyonlarca paket turba yosunu kullanılmıştır; ayrıca 2.000 yıllık "bataklık insanları" bu yosun sayesinde hiç çürümeden korunmuştur!',
      tehdit: 'Turbalıkların yakıt veya bahçe toprağı için kazılıp kurutulması.',
      dongu: [
        ['💧 Yağmur Süngeri', 'Her yağmurda hücrelerin suyla dolup şişer, kurak günlerde bile nemini korursun.'],
        ['🧪 Asit Kalkanı', 'Suyu asidik tutarak rakip bitkileri ve çürütücü bakterileri uzaklaştırırsın.'],
        ['🌍 Karbon Kasası', 'Alt katmanların binlerce yıl çürümeden birikip atmosferdeki milyonlarca ton karbonu toprağa hapseder.']
      ],
      w: 'Sphagnum'
    }
  ],
  mikroplar: [
    {
      id: 'yd-siyanobakteri', ad: 'Siyanobakteri (Oksijenin Mimarı)', ik: '🦠', tur: 'mikrop', ll: [-25.9, 114.2],
      omur: 'Saatler içinde bölünür · Soyu 3,5 MİLYAR yıldır yaşıyor!',
      beslenme: 'Fotosentez — güneş ışığı, su ve karbondioksitten besin üretip oksijen salar.',
      zincir: 'Dünya\'nın ilk birincil üreticisi — gezegenin atmosferini oksijenle doldurup tüm hayvanların evrimini başlattı.',
      goc: 'Okyanus akıntılarıyla tüm dünya denizlerinde, göllerde ve nemli kayalarda yaşar.',
      alan: 'Tüm okyanuslar, tatlı sular ve Avustralya\'daki antik stromatolit kıyıları',
      superguc: 'Yaklaşık 2,4 milyar yıl önce "Büyük Oksijenlenme Olayı" ile zehirli atmosferi nefes alınabilir hâle getirdi!',
      sasirtici: 'Bugün tüm bitkilerin yapraklarında fotosentez yapan kloroplastlar, milyarlarca yıl önce başka hücrelerin içine yerleşmiş SİYANOBakterilerin torunlarıdır!',
      tehdit: 'Aşırı çoğaldığında (alg patlaması) sudaki oksijeni tüketebilir; virüsler (siyanofajlar) baş düşmanıdır.',
      dongu: [
        ['☀️ Güneşle Enerji', 'Mikroskobik gövdenle güneş ışığını yakalayıp suyu parçalarsın ve atmosfere taze oksijen bırakırsın.'],
        ['🧬 İkiye Bölünme', 'Yeterince büyüyünce kendini kusursuzca kopyalayıp birkaç saat içinde iki yeni hücreye bölünürsün.'],
        ['🪨 Taşlaşan Koloniler', 'Milyarlarca kardeşinle üst üste birikip Avustralya kıyılarında hâlâ görülebilen stromatolit kayalarını kurarsın.']
      ],
      w: 'Cyanobacteria'
    },
    {
      id: 'yd-bakteriyofaj', ad: 'Bakteriyofaj (Uzay Aracı Virüsü)', ik: '🧬', tur: 'mikrop', ll: [48.8, 2.3],
      omur: 'Konak bakteri bulana kadar yıllarca bekleyebilir · Çoğalma döngüsü 20 – 40 dakika',
      beslenme: 'Beslenmez; yalnızca belirli bakterilerin içine DNA\'sını enjekte ederek kendini kopyalatır.',
      zincir: 'Mikro dünyanın süper avcısı — okyanuslardaki bakterilerin her gün %20–40\'ını yok ederek doğal dengeyi korur.',
      goc: 'Su damlacıkları, toprak, okyanuslar ve insan bağırsağı dahil bakterilerin olduğu her yerdedir.',
      alan: 'Dünya\'daki her okyanus damlası, toprak ve canlı bedeni',
      superguc: 'İnsan hücrelerine hiç zarar vermez, yalnızca hedef bakteriyi lazer hassasiyetiyle bulup yok eder (antibiyotiğe dirençli enfeksiyonlarda "faj tedavisi" olarak kullanılır!).',
      sasirtici: 'Görünüşü tıpkı Ay\'a inen uzay modülü gibidir ve Dünya\'daki toplam sayısı 10³¹\'dir — yani gezegendeki tüm diğer canlıların (bakteriler dahil!) toplamından fazladır!',
      tehdit: 'Bakterilerin geliştirdiği CRISPR savunma sistemi (insanların gen düzenleme teknolojisine ilham veren sistem!).',
      dongu: [
        ['🛸 Bakteriye İniş', 'Örümcek gibi 6 ince bacağınla hedef bakterinin yüzeyine konup kilitlenirsin.'],
        ['💉 DNA Enjeksiyonu', 'Kuyruğunu bir şırınga gibi sıkıştırıp kendi genetik kodunu bakterinin içine zerk edersin.'],
        ['💥 100 Yeni Kopya', '30 dakika içinde bakteri hücresini bir fabrikaya çevirip 100 yeni bakteriyofaj üreterek dışarı çıkarsın.']
      ],
      w: 'Bacteriophage'
    },
    {
      id: 'yd-lactobacillus', ad: 'Lactobacillus (Yoğurt & Bağırsak Dostu)', ik: '🥛', tur: 'mikrop', ll: [40.0, 33.0],
      omur: 'Hücre bölünmesi 1 – 2 saat · Kolonisi ömür boyu bizimle yaşar',
      beslenme: 'Süt şekeri (laktoz) ve bitkisel lifleri fermente ederek laktik asit üretir.',
      zincir: 'Faydalı simbiyotik bakteri — insan bağırsağını zararlı mikroplardan korur, sindirime ve bağışıklığa yardım eder.',
      goc: 'İnsanların yoğurt, kefir, turşu ve ekşi maya kültürüyle binlerce yıldır tüm dünyaya yayıldı.',
      alan: 'İnsan bağırsağı, yoğurt, kefir ve fermente gıdalar',
      superguc: 'Ürettiği doğal laktik asit sayesinde ortamı asidik tutup zararlı bakterilerin üremesini engeller.',
      sasirtici: 'İnsan vücudunda kendi insan hücrelerimizden daha fazla bakteri yaşar; yalnızca 1 kaşık ev yoğurdunda milyarlarca canlı Lactobacillus dostumuz vardır!',
      tehdit: 'Gereksiz kullanılan geniş spektrumlu antibiyotikler ve aşırı işlenmiş gıdalar.',
      dongu: [
        ['🥛 Süt Şöleni', 'Ilık sütün içinde uyanıp laktozu parçalayarak laktik asit üretmeye başlarsın.'],
        ['🥣 Yoğurdun Doğuşu', 'Ürettiğin asit süt proteinlerini birleştirip sütü kıvamlı, besleyici yoğurda dönüştürür.'],
        ['🛡️ Bağırsak Kalkanı', 'İnsan bağırsağına ulaşınca duvarlara tutunup zararlı mikroplara yer bırakmazsın.']
      ],
      w: 'Lactobacillus'
    },
    {
      id: 'yd-penicillium', ad: 'Penicillium Küfü (Antibiyotiğin Mucidi)', ik: '🧫', tur: 'mikrop', ll: [51.5, -0.17],
      omur: 'Haftalar – aylar · Sporları yıllarca canlı kalabilir',
      beslenme: 'Ayrıştırıcı mikro-mantar — meyve kabuğu, ekmek ve topraktaki organik maddeleri sindirir.',
      zincir: 'Doğal ayrıştırıcı ve kimyasal savaşçı — kendi alanına giren bakterileri yok etmek için penisilin salgılar.',
      goc: 'Mikroskobik mavi-yeşil sporları hava akımlarıyla tüm dünyaya dağılır.',
      alan: 'Toprak, nemli organik yüzeyler ve laboratuvarlar',
      superguc: 'Rakip bakterilerin hücre duvarını parçalayan "penisilin" molekülünü doğal olarak üretir.',
      sasirtici: '1928\'de Alexander Fleming tatilden dönünce unuttuğu bir deney kabında bu küfün etrafındaki tüm bakterileri temizlediğini fark etti — o tesadüf bugüne kadar 200 MİLYONDAN fazla insanın hayatını kurtardı!',
      tehdit: 'Aşırı sıcaklık, kuraklık ve kimyasal dezenfektanlar.',
      dongu: [
        ['🌬️ Rüzgârla Gelen Spor', 'Havada süzülen tek bir mikroskobik sporun nemli bir yüzeye konup ince iplikçikler (hif) salar.'],
        ['⚔️ Penisilin Kalkanı', 'Etrafına bakteriler yaklaşınca kimyasal savunmanı açıp onları eriten penisilin salgılarsın.'],
        ['🫧 Yeni Sporlar', 'Fırça biçimli uçlarından (Latince "penicillus" = fırça!) binlerce yeni spor savurursun.']
      ],
      w: 'Penicillium'
    },
    {
      id: 'yd-maya', ad: 'Ekmek Mayası (Saccharomyces)', ik: '🍞', tur: 'mikrop', ll: [30.0, 31.2],
      omur: 'Her 90 dakikada tomurcuklanarak çoğalır · Kurutulunca yıllarca uyur',
      beslenme: 'Şeker ve nişastayı sindirip karbondioksit gazı üretir.',
      zincir: 'Tek hücreli mantar ayrıştırıcı — meyve kabuklarında doğal yaşar, 10.000 yıldır insanlığın en eski ortağıdır.',
      goc: 'Antik Mısır ve Mezopotamya fırınlarından başlayarak tüm insan mutfaklarına yayıldı.',
      alan: 'Meyve kabukları, çiçek nektarı ve dünyanın tüm fırınları',
      superguc: 'Oksijen olmasa bile şekeri parçalayıp enerji üretebilir (fermantasyon) ve hamuru pamuk gibi kabartır!',
      sasirtici: 'Tek bir gram kuru ekmek mayasında yaklaşık 20 MİLYAR canlı maya hücresi uyur hâlde bekler; ılık su ve şeker değdiği an dakikalar içinde uyanıp ekmeği kabartır!',
      tehdit: '60 °C üzeri fırın sıcaklığı (ekmek pişerken görevini tamamlayıp ölür).',
      dongu: [
        ['💧 Ilık Suyla Uyanış', 'Un ve ılık suyla buluştuğunda kuru uykundan uyanıp nişastadaki şekeri yemeye başlarsın.'],
        ['🫧 Baloncuk Fabrikası', 'Ürettiğin milyonlarca minik karbondioksit balonu hamurun içinde hapsolup ekmeği kabartır.'],
        ['🌱 Tomurcuklanma', 'Gövdenin yanından minik bir yavru hücre tomurcuklanıp 90 dakikada yeni bir mayaya dönüşür.']
      ],
      w: 'Saccharomyces cerevisiae'
    },
    {
      id: 'yd-deinococcus', ad: 'Süpermen Bakteri (Deinococcus)', ik: '☢️', tur: 'mikrop', ll: [44.5, -123.2],
      omur: 'Saatler içinde bölünür · Kurak/dondurucu ortamda yıllarca dayanır',
      beslenme: 'Hepçil bakteri — organik kalıntılarla beslenir.',
      zincir: 'Ekstrem ortam ayrıştırıcısı — hiçbir canlının yaşayamadığı radyasyonlu ve kurak alanlarda hayatta kalır.',
      goc: 'Toz zerreleriyle stratosfere kadar çıkıp gezegenin dört bir yanına taşınır.',
      alan: 'Çöller, kayalar, nükleer tesis atıkları ve hatta uzay deneyi plakaları',
      superguc: 'İnsanı anında öldüren radyasyon dozunun 1.000 katına, aşırı soğuğa, vakuma ve asite dayanır!',
      sasirtici: 'Guinness Rekorlar Kitabı\'na "Dünya\'nın En Dayanıklı Bakterisi" olarak girdi: radyasyon DNA\'sını yüzlerce parçaya bölse bile 24 saat içinde tüm parçaları yapboz gibi hatasızca yeniden birleştirir!',
      tehdit: 'Neredeyse hiçbir doğal ekstrem koşul onu durduramaz; yalnızca yoğun ısı (otoklav) yok edebilir.',
      dongu: [
        ['☢️ Yedek Kopya Stratejisi', 'Hücrenin içinde DNA\'nın 4 ila 10 adet yedek kopyasını aynı anda saklarsın.'],
        ['🔧 Hızlı DNA Tamiri', 'Şiddetli radyasyon veya kuraklık DNA\'nı parçaladığında yedek kopyalara bakıp saatler içinde onarırsın.'],
        ['🚀 Uzay Testi', 'Uluslararası Uzay İstasyonu\'nun dış yüzeyinde 3 yıl boyunca doğrudan uzay boşluğunda hayatta kalabildin!']
      ],
      w: 'Deinococcus radiodurans'
    },
    {
      id: 'yd-diatom', ad: 'Diyatom (Cam Evli Mikro Alg)', ik: '💎', tur: 'mikrop', ll: [60.0, -25.0],
      omur: 'Günde 1 – 2 kez bölünür (hızlı yaşam döngüsü)',
      beslenme: 'Fotosentez — sudaki çözünmüş silisyumu alıp kendine camdan ev örer.',
      zincir: 'Okyanus besin zincirinin temel taşı — kril ve balıkları besler; atmosferdeki oksijenin %20\'sini üretir!',
      goc: 'Okyanus akıntılarıyla tüm dünya denizlerinde, göllerde ve buzulların altında sürüklenir.',
      alan: 'Tüm okyanusların güneş gören üst katmanı ve tatlı sular',
      superguc: 'Sudan topladığı silisyumla mikroskop altında dantel gibi işlenmiş, iki kapaklı gerçek CAM kabuk (früstül) inşa eder!',
      sasirtici: 'Aldığın her 5 nefesten 1\'inin oksijenini bu mikroskobik cam algler üretir — Dünya\'daki tüm yağmur ormanlarının toplamı kadar oksijen sağlarlar!',
      tehdit: 'Okyanus asitlenmesi ve besin minerali eksikliği.',
      dongu: [
        ['💎 Cam Sanatçısı', 'Deniz suyundaki silisyumla iki parçalı, simetrik mikroskobik bir cam kutunun içinde yaşarsın.'],
        ['🌬️ Oksijen Üretimi', 'Güneş ışığını cam kabuğundan geçirip fotosentez yaparak gezegene nefes olursun.'],
        ['🌊 Derinlere Yolculuk', 'Öldüğünde cam kabuğun okyanus dibine çöküp atmosferdeki karbonu milyonlarca yıl tabana hapseder.']
      ],
      w: 'Diatom'
    },
    {
      id: 'yd-biyolumin', ad: 'Parlayan Deniz Bakterisi (Vibrio)', ik: '🌌', tur: 'mikrop', ll: [21.3, -157.8],
      omur: 'Saatler içinde çoğalır',
      beslenme: 'Mürekkep balığının kendisine sunduğu şeker ve amino asitlerle beslenir.',
      zincir: 'Simbiyotik ortak — mürekkep balığına gece kamuflajı sağlar, karşılığında güvenli ev ve yemek alır.',
      goc: 'Tropikal ve ılıman denizlerde yaşar; geceleri kıyı dalgalarında mavi parıltılar yaratır.',
      alan: 'Hawaii ve tropikal okyanuslar (özellikle cüce mürekkep balığının ışık organı)',
      superguc: 'Yalnızken ışık yakmaz; ancak kardeşleriyle kimyasal mesajlaşıp kalabalık olduklarını anlayınca ("çoğunluk algılama") hep birlikte mavi ışık saçarlar!',
      sasirtici: 'Hawaii cüce mürekkep balığı gece avlanırken altından ay ışığı kadar mavi ışık yayması için bu bakterileri karnında besler — böylece gölgesi kaybolur ve alttaki avcılara görünmez olur!',
      tehdit: 'Her sabah şafakta mürekkep balığı bakterilerin %95\'ini denize salar, kalan %5 akşama kadar tekrar çoğalır!',
      dongu: [
        ['📡 Kimyasal Yoklama', 'Çevrene özel sinyal molekülleri bırakarak kaç kardeşinin yanında olduğunu sayarsın.'],
        ['💡 Toplu Mavi Parıltı', 'Yeterli sayıya ulaşınca milyarlarca bakteri aynı saniyede elektrik mavisi ışık yakarsınız.'],
        ['🌅 Şafak Yenilenmesi', 'Gün doğarken çoğu kardeşin okyanusa açılır, içeride kalanlar geceye kadar yeniden koloni kurar.']
      ],
      w: 'Aliivibrio fischeri'
    },
    {
      id: 'yd-amip', ad: 'Amip (Şekil Değiştiren Tek Hücreli)', ik: '🫧', tur: 'mikrop', ll: [41.0, 29.0],
      omur: 'Birkaç gün içinde ikiye bölünerek yenilenir',
      beslenme: 'Bakteri, mikro alg ve diğer tek hücrelileri sarıp yutar (fagositoz).',
      zincir: 'Tatlı su ve toprak avcısı — bakteri nüfusunu dengeler, topraktaki besinleri bitkilere kazandırır.',
      goc: 'Su damlacıkları, göletler ve nemli topraklarda yalancı ayaklarıyla ağır ağır sürünür.',
      alan: 'Dünyadaki tüm göletler, dereler ve nemli topraklar',
      superguc: 'Sabit bir şekli, ağzı veya bacağı yoktur — istediği yöne "yalancı ayak" (psödopod) uzatıp yürür ve avını gövdesiyle kucaklayıp yutar!',
      sasirtici: 'Bazı dev amip türlerinin (Amoeba dubia) DNA\'sı insan DNA\'sından 200 KAT daha uzundur — tek bir hücrede dev bir genetik kütüphane taşır!',
      tehdit: 'Göletin kuruması (kuruyunca koruyucu sert kist kabuğuna girip yağmuru bekler).',
      dongu: [
        ['🦶 Yalancı Ayakla Yürüyüş', 'Hücre sıvını öne akıtarak geçici kollar uzatıp su dibinde ağır çekimde ilerlersin.'],
        ['🫧 Kucaklayarak Yutma', 'Bir bakteri bulunca iki kolunla etrafını sarıp hücrenin içine çekerek sindirirsin.'],
        ['✂️ İkiye Bölünme', 'Yeterince beslenince çekirdeğini kopyalayıp ortadan ikiye ayrılır, iki genç amip olursun.']
      ],
      w: 'Amoeba'
    },
    {
      id: 'yd-civikmantar', ad: 'Cıvık Mantar (Beyinsiz Labirent Çözücü)', ik: '🟡', tur: 'mikrop', ll: [35.7, 139.7],
      omur: 'Uygun nemde yıllarca yaşayıp büyüyebilir',
      beslenme: 'Çürüyen yapraklar üzerindeki bakteri, mantar sporları ve yulaf taneleri.',
      zincir: 'Orman tabanı ayrıştırıcısı — besinleri geri dönüştürür.',
      goc: 'Saatte yaklaşık 1–4 santimetre hızla sarı ağlar örerek orman tabanında yürür!',
      alan: 'Serin, gölgeli ve nemli orman tabanları',
      superguc: 'Tek bir dev hücre içinde milyonlarca çekirdek barındırır; beyni olmadığı hâlde en kısa yolu hesaplayıp labirentleri çözer!',
      sasirtici: 'Japon bilim insanları Tokyo\'nun şehir haritasına göre yulaf taneleri dizdiğinde, bu beyinsiz sarı tek hücreli 26 saat içinde neredeyse TOKYO METRO AĞININ AYNISINI verimli biçimde ördü!',
      tehdit: 'Doğrudan güneş ışığı ve kuraklık.',
      dongu: [
        ['🕸️ Ağ Örerek Keşif', 'Karanlık orman tabanında parlak sarı damarlarını her yöne uzatarak besin ararsın.'],
        ['🧠 En Kısa Yol Hesabı', 'Yiyecek bulunca gereksiz kolları geri çekip en verimli otoyol hattını kalınlaştırırsın.'],
        ['🍄 Spor Kuleleri', 'Besin bitip ortam kuruyunca minik mantar benzeri kuleler çıkarıp rüzgâra spor salarsın.']
      ],
      w: 'Physarum polycephalum'
    },
    {
      id: 'yd-arkea', ad: 'Termofil Arkea (Kaynar Su Canlısı)', ik: '🔥', tur: 'mikrop', ll: [44.52, -110.83],
      omur: 'Saatler içinde bölünür · Soyu 3,8 milyar yıllık',
      beslenme: 'Güneş ışığı olmadan kükürt, hidrojen ve demir kimyasallarından enerji üretir (kemosentez)!',
      zincir: 'Derin okyanus bacalarının ve kaynar kaplıcaların birincil üreticisi.',
      goc: 'Volkanik kaplıcalar, Yellowstone gayzerleri ve okyanus tabanı hidrotermal bacalarında yaşar.',
      alan: 'Yellowstone (ABD), İzlanda kaplıcaları ve 4.000 m derinlikteki okyanus bacaları',
      superguc: '80 – 122 °C kaynar suda ve akü asidi kadar asidik havuzlarda proteinleri bozulmadan yaşar!',
      sasirtici: 'Yellowstone\'daki Grand Prismatic gölünün büyüleyici turuncu ve sarı halkalarını bu canlılar oluşturur; ayrıca modern PCR DNA testlerinin çalışmasını sağlayan ısıya dayanıklı enzimler bu canlılardan keşfedildi!',
      tehdit: 'Aksine, oda sıcaklığı (25 °C) onun için donmak demektir — serin sularda yaşayamaz!',
      dongu: [
        ['🌋 Kaynar Havuzda Yaşam', 'Diğer tüm canlıların saniyeler içinde haşlanacağı 95 °C suda huzurla yüzersin.'],
        ['⚗️ Kaya ve Kükürtle Beslenme', 'Güneşsiz okyanus dibinde volkanik bacadan çıkan kükürt gazını enerjiye çevirirsin.'],
        ['🧬 Yaşamın İlk Mirası', 'Dünya\'nın ilk lav ve okyanus çağlarındaki atalarınla neredeyse aynı kimyayla çoğalırsın.']
      ],
      w: 'Thermophile'
    },
    {
      id: 'yd-yersinia', ad: 'Veba Bakterisi (Yersinia pestis)', ik: '⚕️', tur: 'mikrop', ll: [43.0, 75.0],
      omur: 'Kısa bölünme süresi · Doğada kemirgen pirelerinde nesillerce sürer',
      beslenme: 'Konak memeli ve pire dokularındaki besinler.',
      zincir: 'Tarihi değiştiren patojen — doğada vahşi kemirgen ve pireler arasında dolaşır.',
      goc: '14. yüzyılda Orta Asya bozkırlarından İpek Yolu kervanları ve Ceneviz gemileriyle Avrupa\'ya yayıldı ("Kara Ölüm").',
      alan: 'Tarih boyunca Avrasya ticaret yolları; bugün modern antibiyotiklerle kolayca tedavi edilir',
      superguc: 'Pirenin midesini tıkayarak pirenin sürekli yeni konak ısırmasını sağlar — böylece tarihin en hızlı yayılan salgınlarından birini başlattı.',
      sasirtici: '1347–1353 arasındaki Kara Ölüm salgını Avrupa nüfusunun üçte birini yok edince işçi kıtlığı doğdu; bu da feodalizmin zayıflamasına, ücretlerin artmasına ve Rönesans\'a giden ekonomik dönüşüme yol açtı!',
      tehdit: 'Modern hijyen ve sıradan antibiyotikler (streptomisin/doksisiklin) bugün onu hızla durdurur.',
      dongu: [
        ['🐀 Bozkır Kemirgenleri', 'Doğal yaşam alanın olan Orta Asya kemirgenleri ve pireleri arasında sessizce yaşarsın.'],
        ['⛵ İpek Yolu Yolculuğu', '1347\'de ticaret kervanları ve gemi sıçanlarıyla Kırım\'dan Akdeniz limanlarına ulaşırsın.'],
        ['📜 Tarihin Dönüm Noktası', 'Salgın sonrası "karantina" (İtalyanca 40 gün: quaranta) kavramı ilk kez Venedik\'te icat edilir.']
      ],
      w: 'Yersinia pestis'
    },
    {
      id: 'yd-grip', ad: 'İnfluenza Virüsü (Kılık Değiştiren)', ik: '🤧', tur: 'mikrop', ll: [39.9, 116.4],
      omur: 'Hücre dışında saatler · Hücre içinde birkaç saatte binlerce kopya',
      beslenme: 'Beslenmez ve kendi metabolizması yoktur; konak hücrenin mekanizmasını ödünç alır.',
      zincir: 'Zorunlu hücre içi parazit — su kuşları, memeliler ve insanlar arasında dolaşır.',
      goc: 'Yaban ördekleri ve göçmen kuşlarla kıtalar aşar; kış aylarında insan toplumlarında mevsimlik dalgalar oluşturur.',
      alan: 'Tüm dünya (kış mevsiminde kapalı alanlarda hızla yayılır)',
      superguc: '8 ayrı RNA parçasından oluştuğu için iki farklı grip türü aynı hücrede buluşursa parçalarını karıştırıp yepyeni bir kılığa bürünebilir!',
      sasirtici: 'Bilim insanları virüslerin "canlı mı yoksa cansız kimyasal paket mi" olduğunu hâlâ tartışır; dış yüzeyindeki kılıfı her yıl hafifçe değiştirdiği için grip aşısı her sonbahar güncellenir!',
      tehdit: 'İnsan bağışıklık sisteminin antikorları, sabun (yağ zarını anında eritir!) ve aşılar.',
      dongu: [
        ['🔑 Hücre Kapısını Açma', 'Dış yüzeyindeki anahtar proteinlerle solunum yolu hücresine tutunup içeri girersin.'],
        ['🖨️ Hızlı Kopyalama', 'Hücrenin kendi üretim hattını kullanarak birkaç saat içinde binlerce yeni virüs paketi üretirsin.'],
        ['🛡️ Bağışıklıkla Kovalamaca', 'Bağışıklık sistemi seni tanıyınca sonraki kış için dış kılıfında küçük mutasyonlar biriktirirsin.']
      ],
      w: 'Influenza'
    },
    {
      id: 'yd-plazmodyum', ad: 'Sıtma Paraziti (Plasmodium)', ik: '🦟', tur: 'mikrop', ll: [-3.0, 25.0],
      omur: 'Sivrisinek ve insan arasında haftalar süren karmaşık yaşam döngüsü',
      beslenme: 'Kırmızı kan hücrelerindeki hemoglobini tüketir.',
      zincir: 'Karmaşık parazit — yaşam döngüsünü tamamlamak için hem Anofel sivrisineğine hem insana ihtiyaç duyar.',
      goc: 'Tropikal ve subtropikal sulak alanlarda sivrisineklerle taşınır; tarih boyunca Roma ve Akdeniz bataklıklarında da yaygındı.',
      alan: 'Sahra Altı Afrika, Güney Asya ve Amazon\'un sıcak sulak bölgeleri',
      superguc: 'İnsan vücuduna girdikten sonra karaciğerde saklanıp şekil değiştirir, ardından kırmızı kan hücrelerine girerek bağışıklık sisteminden gizlenir.',
      sasirtici: 'Büyük İskender\'in ölümünden Roma\'nın düşüşüne kadar tarihi etkilediği düşünülür; insan evriminde orak hücre geninin Afrika\'da yaygınlaşması bile vücudun bu parazite karşı geliştirdiği doğal bir kalkanıdır!',
      tehdit: 'Kınakına ağacından elde edilen kinin, artemisinin ilaçları, cibinlikler ve yeni sıtma aşıları.',
      dongu: [
        ['🦟 Sivrisinek Yolculuğu', 'Dişi Anofel sivrisineğinin tükürük bezinde bekleyip ısırıkla kana karışırsın.'],
        ['🩸 Kan Hücrelerinde Saklanma', 'Önce karaciğerde çoğalıp sonra kırmızı kan hücrelerinin içine girerek 48 saatte bir ateş nöbetine yol açarsın.'],
        ['🌿 Doğanın Cevabı', 'Peru\'daki kınakına kabuğu ve Çin\'deki pelin otu (artemisinin) insanlığa sana karşı en güçlü ilaçları verir.']
      ],
      w: 'Plasmodium'
    }
  ]
};

// Mevcut 36 türe besin zinciri, göç ve en şaşırtıcı bilgi zenginleştirmesi (hiçbir tür eksik kalmasın)
(() => {
  const EK = {
    'yd-mavibalina': {
      zincir: 'Okyanusun en büyük süzücü tüketicisi — günde 4 ton kril yer; yetişkininin neredeyse hiç doğal avcısı yoktur (yalnızca orka sürüleri yavrulara saldırabilir).',
      goc: 'Yazın kutuplarda kril yiyip kışın yavrulamak için 6.000–8.000 km yüzerek sıcak tropikal sulara göç eder.',
      sasirtici: 'Dili tek başına bir Afrika fili ağırlığındadır, kalbi küçük bir otomobil kadardır ve atardamarlarının içinde küçük bir çocuk emekleyebilir!'
    },
    'yd-kartal': {
      zincir: 'Gökyüzünün tepe yırtıcısı — kemirgen, tavşan ve tilki nüfusunu dengeler; yetişkininin doğal düşmanı yoktur.',
      goc: 'Kuzeydeki popülasyonlar kışın 4.000 km güneye göç ederken Anadolu ve Akdeniz\'deki kartallar yıl boyu kendi dağlarında kalır.',
      sasirtici: 'Avına dalarken saatte 320 km hıza ulaşır ve gözlerinin arkasındaki yüksek çözünürlüklü odak sayesinde 3 km ötedeki bir tavşanı görebilir!'
    },
    'yd-aslan': {
      zincir: 'Savanın tepe avcısı — zebra, gnu ve manda sürülerini dengede tutar; sırtlanlarla sürekli rekabet hâlindedir.',
      goc: 'Göç etmez; sürüsüyle birlikte 20 ila 400 km²\'lik kendi bölgesini savunur.',
      sasirtici: 'Günün 18–20 saatini uyuyarak geçirir, avın %85–90\'ını dişiler yapar ve bir aslanın kükremesi sakin gecede 8 kilometre öteden duyulur!'
    },
    'yd-ahtapot': {
      zincir: 'Zeki orta-üst deniz avcısı — yengeç ve midye yer; köpekbalığı, fok ve büyük balıklara av olur.',
      goc: 'Uzun göç etmez; derin ve sığ kayalık kovuklar arasında mevsimlik hareket eder.',
      sasirtici: '3 kalbi, bakır bazlı mavi kanı ve 9 beyni vardır (her bir kolunun kendi mini beyni bulunur); kavanoz kapağını içeriden bile açabilir!'
    },
    'yd-penguen': {
      zincir: 'Antarktika deniz avcısı — balık ve kril yer; leopar foku ve orkalar başlıca avcılarıdır.',
      goc: 'Her kış buz üzerinden 100–120 km yürüyerek üreme kolonisine gider, yazın okyanusa döner.',
      sasirtici: 'Baba penguen -60 °C kutup kışında 65 gün boyunca tek lokma yemeden, yumurtayı ayaklarının üstünde taşıyarak vücut ağırlığının yarısını kaybeder!'
    },
    'yd-fil': {
      zincir: 'Kilit taşı mega-otçul — ağaçları devirip savanı açık tutar, kuraklıkta kuyu kazar; yetişkininin doğal düşmanı yoktur.',
      goc: 'Kurak ve yağışlı mevsimlerde su ve otlak peşinde yüzlerce kilometrelik geleneksel göç yollarını takip eder.',
      sasirtici: 'Ölen sürü üyelerinin kemiklerine dokunup yas tutan, aynada kendini tanıyan ve ayak tabanlarıyla 30 km öteden yer titreşimiyle haberleşen nadir canlılardandır!'
    },
    'yd-kaplumbaga': {
      zincir: 'Ada otçulu & tohum dağıtıcısı — kaktüs ve otları yiyip tohumlarını adaya yayar; yetişkininin doğal düşmanı yoktur.',
      goc: 'Kurak mevsimde ovadan volkan yamaçlarındaki yeşil yaylalara çıkar, yağmur mevsiminde yeniden ovaya iner; birkaç kilometrelik yavaş bir göçtür.',
      sasirtici: 'Metabolizması o kadar yavaştır ki tek damla su içmeden ve yemek yemeden 1 YIL boyunca hayatta kalabilir; 170 yılı aşan ömrüyle birkaç insan kuşağına tanıklık eder!'
    },
    'yd-ari': {
      zincir: 'Dünyanın en kritik tozlayıcısı — çiçekli bitkilerin ve tarım ürünlerinin büyük bölümünü tozlaştırır; kuşlar, eşek arıları ve ayılara av olabilir.',
      goc: 'Kovanından günde 5 km uzağa kadar uçar; koloniler çoğalınca yeni kovan kurmak için oğul vererek göç eder.',
      sasirtici: 'Bir işçi bal arısı tüm ömrü boyunca yalnızca 1 çay kaşığının 12\'de 1\'i kadar bal üretebilir — tek bir kaşık bal için 12 arının bütün hayatı ve binlerce çiçek ziyareti gerekir!'
    },
    'yd-kutupayisi': {
      zincir: 'Arktik\'in tepe süper avcısı — neredeyse yalnızca halkalı fok avlar; buz üzerinde doğal düşmanı yoktur.',
      goc: 'Deniz buzlarının mevsimlik hareketini takip ederek yılda 3.000 km\'den fazla yol yürüyüp yüzebilir.',
      sasirtici: 'Kürkü aslında beyaz değil ŞEFFAF içi boş tüylerdir, altındaki derisi ise güneş ısısını emmek için SİYAHTIR! Bir fokun kokusunu 1,5 km öteden ve 1 metre buzun altından alabilir.'
    },
    'yd-panda': {
      zincir: 'Uzmanlaşmış otçul (etçil atalardan!) — besininin %99\'u bambudur; yetişkininin doğal düşmanı neredeyse yoktur.',
      goc: 'Bambu sürgünlerini takip ederek dağ yamaçlarında aşağı-yukarı mevsimlik göç yapar.',
      sasirtici: 'Sindirim sistemi hâlâ etçillere benzediği için bambunun çok azını sindirebilir — bu yüzden günde 12–14 saat boyunca 15–30 kg bambu yemek zorundadır!'
    },
    'yd-karleopari': {
      zincir: 'Yüksek dağların tepe avcısı — dağ keçisi ve mavi koyun popülasyonunu dengeler.',
      goc: 'Kışın kar bastırınca avlarını takip ederek daha alçak vadilere iner, yazın 5.000 m\'ye tırmanır.',
      sasirtici: 'Kendi vücut boyu kadar uzun kuyruğu hem uçurumda denge çubuğu hem de -30 °C\'de uyurken burnuna sardığı sıcacık bir atkı görevi görür; tek sıçrayışta 15 metre atlayabilir!'
    },
    'yd-komodo': {
      zincir: 'Adalarının tepe avcısı — geyik, yaban domuzu ve manda avlar; yetişkininin doğal düşmanı yoktur.',
      goc: 'Göç etmez ama adalar arasında güçlü yüzücü olarak kilometrelerce yüzebilir.',
      sasirtici: 'Dişi Komodo ejderleri hiç erkek olmadan da (partenogenez ile) kendi başına döllenmiş yumurta bırakıp yavru dünyaya getirebilir!'
    },
    'yd-albatros': {
      zincir: 'Açık okyanus avcısı — kalamar ve balık yer; denizde yetişkininin pek düşmanı yoktur.',
      goc: 'Ömrünün %90\'ını açık okyanuslarda geçirir; tek bir yolculukta 15.000 km\'yi kanatlarını neredeyse hiç çırpmadan süzülerek aşar!',
      sasirtici: '3,5 metrelik kanat açıklığıyla yaşayan kuşlar arasında dünya rekorunun sahibidir; "Wisdom" adlı albatros 70 yaşını aşmış hâlde hâlâ yumurtlayıp yavru büyütmektedir!'
    },
    'yd-yunus': {
      zincir: 'Zeki üst deniz avcısı — balık sürülerini işbirliğiyle avlar; büyük köpekbalıkları ve orkalara karşı sürüsüyle savunma yapar.',
      goc: 'Kıyı sürüleri yerleşiktir; açık deniz sürüleri balık sürülerini izleyerek yüzlerce km göç eder.',
      sasirtici: 'Her yunusun doğduğunda kendine özel bir "imza ıslığı" (yani bir İSMİ) vardır; birbirlerine isimleriyle seslenirler ve yarım beyinleri uyurken diğer yarısıyla nefes alırlar!'
    },
    'yd-denizkaplumbaga': {
      zincir: 'Deniz çayırı ve denizanası dengeleyicisi — okyanus sağlığını korur; yavruyken kuş ve yengeçlere, yetişkinken köpekbalıklarına av olabilir.',
      goc: 'Okyanuslar boyunca 10.000+ km yüzüp 20–30 yıl sonra tam olarak yumurtadan çıktığı AYNI KUMSALA geri döner!',
      sasirtici: 'Yavruların cinsiyetini genler değil KUMUN SICAKLIĞI belirler: ılık kumda dişi, serin kumda erkek yavrular çıkar!'
    },
    'yd-mamut': {
      zincir: 'Buzul Çağı\'nın mega-otçulu — bozkırları açık tutup toprağı gübrelerdi; kılıç dişli kaplanlar ve erken insanlar avcılarıydı.',
      goc: 'Diş izotopları, tek bir mamutun ömrü boyunca 70.000 km (Dünya\'nın çevresinin neredeyse 2 katı!) göç ettiğini kanıtladı.',
      sasirtici: 'Mısır\'daki Büyük Piramit inşa edilirken Sibirya açıklarındaki Wrangel Adası\'nda hâlâ yaşayan cüce mamutlar vardı!'
    },
    'yd-smilodon': {
      zincir: 'Buzul Çağı\'nın tepe pusu avcısı — bizon, at ve genç mamutları avlardı.',
      goc: 'Büyük otçul sürülerinin peşinde Amerika kıtasının geniş ovalarında dolaşırdı.',
      sasirtici: '28 santimetrelik dev kılıç dişleri aslında oldukça kırılgandı; avını önce ağır kaslı ön kollarıyla yere bastırıp sonra hassas bir ısırıkla etkisiz hâle getirirdi!'
    },
    'yd-dodo': {
      zincir: 'Ada meyve yiyicisi & tohum dağıtıcısı — doğal avcısı olmadığı için uçmayı bırakmıştı.',
      goc: 'Uçamadığı için yalnızca Mauritius Adası\'nda yaşadı.',
      sasirtici: 'İnsanlarla ilk kez 1598\'de karşılaştı; insanlardan hiç korkmadığı ve adaya getirilen domuz/sıçanlar yumurtalarını yediği için yalnızca 80 yıl içinde tamamen yok oldu!'
    },
    'yd-haast': {
      zincir: 'Yeni Zelanda\'nın tepe yırtıcısı — 200 kg\'lık dev Moa kuşlarını avlayan tek avcıydı.',
      goc: 'Yeni Zelanda Güney Adası\'nın orman ve dağlarında yerleşikti.',
      sasirtici: '15 kilogram ağırlığıyla gelmiş geçmiş en büyük kartaldı; pençeleri bir kaplan pençesi kadar büyüktü ve avı olan Moa tükenince kendisi de yok oldu!'
    },
    'yd-tilasin': {
      zincir: 'Tazmanya\'nın tepe keseli yırtıcısı — kanguru ve valabi popülasyonunu dengelerdi.',
      goc: 'Tazmanya Adası\'nın orman ve bozkırlarında yerleşikti.',
      sasirtici: 'Hem dişisinde hem erkeğinde karın kesesi bulunan tek keseli yırtıcıydı ve çenesini neredeyse düz bir çizgi gibi 80 derece açabiliyordu!'
    },
    'yd-sekoya': {
      zincir: 'Dev orman üreticisi — gökyüzüne uzanan dallarında kendi mikro-ekosistemini barındırır.',
      goc: 'Sadece Kaliforniya Sierra Nevada yamaçlarında yaşar; kozalakları orman yangınının ısısıyla açılıp tohum saçar!',
      sasirtici: 'General Sherman adlı dev sekoya 2.200 yaşındadır ve tek bir gövdesinde 400\'den fazla küçük evi inşa etmeye yetecek kadar ahşap hacmi vardır!'
    },
    'yd-zeytin': {
      zincir: 'Akdeniz\'in kadim üreticisi — meyvesiyle kuşları ve insanları besler, binlerce yıl toprak erozyonunu önler.',
      goc: '6.000 yıl önce Doğu Akdeniz ve Anadolu\'dan tüm Akdeniz havzasına yayıldı.',
      sasirtici: 'Gövdesi kuruyup kesilse bile kökünden yeniden sürgün verir; bu yüzden Girit, Lübnan ve Anadolu\'da 2.000–3.000 yaşını aşmış hâlâ zeytin veren "ölümsüz ağaçlar" vardır!'
    },
    'yd-baobab': {
      zincir: 'Savanın yaşam kaynağı — gövdesi su deposu, çiçekleri yarasaları, meyveleri filler ve insanları besler.',
      goc: 'Afrika, Madagaskar ve Avustralya savanlarında yaşar.',
      sasirtici: 'Yağmur mevsiminde dev süngerimsi gövdesinde 120.000 LİTREYE kadar su depolar; kuraklıkta filler susuz kalınca gövdesini kemirip su içer!'
    },
    'yd-venus': {
      zincir: 'Etçil üretici — fakir bataklık toprağında bulamadığı azotu sinek ve örümcek yakalayarak karşılar.',
      goc: 'Doğada yalnızca ABD\'nin Kuzey ve Güney Karolina kıyılarındaki dar bir bataklık şeridinde yaşar.',
      sasirtici: 'Kapanı SAYI SAYABİLİR! İçindeki tüylere 20 saniye içinde 2 kez dokunulmazsa (yağmur damlası sanıp) kapanmaz; 5 kez dokunulunca sindirim enzimini salgılar!'
    },
    'yd-kaktus': {
      zincir: 'Çöl üreticisi — çiçekleri yarasaları, meyveleri çöl kuşlarını besler; gövdesi ağaçkakanlara serin yuva olur.',
      goc: 'Yalnızca Sonora Çölü\'nde (Meksika/Arizona) doğal olarak yaşar.',
      sasirtici: 'İlk kolunu çıkarması 50–75 yıl sürer! Akordeon gibi kıvrımlı gövdesi yağmur yağınca şişip tek seferde 750 litre suyu içine çeker.'
    },
    'yd-bambu': {
      zincir: 'Hızlı orman üreticisi — dev pandaların ana besinidir, eşdeğer ağaçlara göre %35 daha fazla oksijen üretir.',
      goc: 'Yeraltı rizomlarıyla hızla yayılır; Asya, Afrika ve Amerika\'nın tropikal/ılıman bölgelerinde yaşar.',
      sasirtici: 'Ağaç değil dev bir OT türüdür! Bazı türleri günde 91 santimetre (saatte neredeyse 4 cm!) uzayarak gözle görülür hızda büyüyebilir ve aynı türün tüm bambuları 60–120 yılda bir dünyanın her yerinde AYNI ANDA çiçek açar!'
    },
    'yd-nilufer': {
      zincir: 'Amazon su yüzeyi üreticisi — dev yaprakları kuşlara yüzen platform olur.',
      goc: 'Amazon Havzası\'nın sakin nehir ve göllerinde yaşar.',
      sasirtici: '3 metre çapındaki yaprağının altı katedral kubbesi gibi kaburgalıdır ve üzerinde küçük bir çocuğu (40 kg\'a kadar!) batmadan taşıyabilir; çiçeği 1. gece beyaz, 2. gece pembe açar!'
    },
    'yd-mikoriza': {
      zincir: 'Ormanın ayrıştırıcı & besin taşıyıcı ağı — ölü yaprakları minerale çevirip ağaç köklerine iletir.',
      goc: 'Yeraltında kilometrelerce uzanan iplikçikleriyle tüm ormanları birbirine bağlar.',
      sasirtici: 'Bilim insanları buna "Orman İnterneti" (Wood Wide Web) diyor: yaşlı anne ağaçlar bu mantar ağı üzerinden karanlıkta kalan yavru fidanlara şeker ve böcek saldırısı uyarısı gönderir!'
    },
    'yd-ginkgo': {
      zincir: 'Yaşayan fosil üretici — 270 milyon yıldır (dinozorlardan önce!) neredeyse hiç değişmeden hayatta.',
      goc: 'Çin tapınak bahçelerinde korunup tüm dünya şehirlerine yayıldı.',
      sasirtici: '1945\'te Hiroşima\'ya atılan atom bombasının merkezinden sadece 1–2 km uzaktaki 6 ginkgo ağacı kavrulmasına rağmen ertesi bahar yeniden filizlendi ve bugün hâlâ yaşıyor!'
    },
    'yd-mangrov': {
      zincir: 'Kıyı koruyucu üretici — su altı kökleri yavru balık ve karideslerin kreşidir; kıyıyı tsunamiden korur.',
      goc: 'Tohumları ağaçtayken filizlenip mızrak gibi suya düşer ve gelgitle başka kıyılara yüzüp toprağa saplanır!',
      sasirtici: 'Tuzlu okyanus suyunu köklerinden süzer, sızan fazla tuzu ise yapraklarının üzerinde gerçek tuz kristalleri olarak dışarı atar!'
    },
    'yd-sakura': {
      zincir: 'Bahar üreticisi — erken bahar çiçekleriyle arı ve böcekleri besler.',
      goc: 'Japonya\'da çiçek açma dalgası ("Sakura Cephesi") her bahar güneyden kuzeye doğru takip edilir.',
      sasirtici: 'Çiçekleri sadece 1–2 hafta açık kalıp rüzgârla kar gibi dökülür; bu kısa güzellik Japon kültüründe "anın kıymetini bilme" (Mono no aware) felsefesinin sembolü olmuştur.'
    },
    'yd-kahve': {
      zincir: 'Tropikal orman altı üreticisi — gölgede büyür, çiçekleri arıları besler.',
      goc: 'Etiyopya\'dan Yemen\'e, oradan Osmanlı kahvehaneleriyle Avrupa\'ya ve Brezilya\'ya yayıldı.',
      sasirtici: 'Kahve çekirdeğinin içindeki kafein aslında bitkinin yapraklarını yiyen böcekleri felç etmek için ürettiği doğal bir kimyasal savunma silahıdır!'
    },
    'yd-kakao': {
      zincir: 'Yağmur ormanı üreticisi — yalnızca minik tatarcık sinekleriyle tozlaşır; maymunlar meyvesini yer.',
      goc: 'Amazon ve Mezoamerika\'dan 16. yüzyılda tüm tropikal kuşağa yayıldı.',
      sasirtici: 'Çiçekleri ince dallarda değil doğrudan ağacın kalın GÖVDESİNDE açar; Aztekler kakao çekirdeklerini gerçek madeni para gibi harcardı — 100 çekirdek bir hindi ederdi!'
    },
    'yd-rafflesia': {
      zincir: 'Parazit çiçek — kökü, gövdesi ve yaprağı yoktur; asma köklerinin içinde yaşar.',
      goc: 'Yalnızca Sumatra ve Borneo yağmur ormanlarında yetişir.',
      sasirtici: '1 metre çapı ve 11 kg ağırlığıyla Dünya\'nın en büyük tek çiçeğidir; leş sineklerini çekmek için çürük et gibi kokar ve çiçek açması 9 ay sürerken sadece 5 gün açık kalır!'
    },
    'yd-okaliptus': {
      zincir: 'Avustralya orman üreticisi — koalaların neredeyse tek besinidir.',
      goc: 'Avustralya\'dan bataklık kurutmak ve kereste için Akdeniz ve dünyaya yayıldı.',
      sasirtici: 'Yapraklarındaki uçucu yağlar yangınları körükler ama kabuğu ateşe dayanıklıdır; rakiplerini yakan yangından hemen sonra küllerden ilk filizlenen ağaç kendisi olur!'
    },
    'yd-cay': {
      zincir: 'Dağ yamacı üreticisi — yapraklarındaki kafein ve tanenler onu böceklerden korur.',
      goc: 'Güneybatı Çin\'den İpek Yolu ve deniz ticaretiyle dünyaya yayıldı; kara yoluyla gidenler "Çay", denizle gidenler "Tea" dedi.',
      sasirtici: 'Yeşil, siyah, beyaz ve oolong çayların TAMAMI aynı bitkiden gelir ve Çin\'de 2.000 yaşını aşmış hâlâ yaprak veren dev yabani çay ağaçları vardır!'
    }
  };
  for (const lst of [window.YASAM_DOGA.hayvanlar, window.YASAM_DOGA.bitkiler, window.YASAM_DOGA.mikroplar || []]) {
    for (const o of lst) if (EK[o.id]) Object.assign(o, EK[o.id]);
  }
})();
