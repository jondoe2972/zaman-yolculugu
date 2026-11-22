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
      id: 'yd-kartal', ad: 'Kaya Kartalı', ik: '🦅', tur: 'hayvan', ll: [39.5, 38.0],
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
      id: 'yd-penguen', ad: 'İmparator Penguen', ik: '🐧', tur: 'hayvan', ll: [-77.5, 166.0],
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
      id: 'yd-kaplumbaga', ad: 'Galápagos Dev Kaplumbağası', ik: '🐢', tur: 'hayvan', ll: [-0.65, -90.5],
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
      id: 'yd-albatros', ad: 'Gezgin Albatros', ik: '🕊️', tur: 'hayvan', ll: [-54.0, -37.0],
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
      id: 'yd-denizkaplumbaga', ad: 'Caretta Caretta (İribaş Deniz Kaplumbağası)', ik: '🐢', tur: 'hayvan', ll: [36.8, 28.6],
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
      id: 'yd-mamut', ad: 'Yünlü Mamut (Nesli Tükendi)', ik: '🦣', tur: 'hayvan', ll: [68.0, 140.0],
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
    }
  ]
};
