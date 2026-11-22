// 🌍🌌 Dünya'nın İç Katmanları ve Atmosferin 5 Katmanı (100% lazy-load — açılış yükü 0 KB)
// r0..r1: kesit çizimindeki oransal yarıçaplar (1.0 = Dünya yüzeyi / 0 km)
'use strict';
window.DUNYA_KATMANLAR = [
  // ---- DÜNYA'NIN İÇ KATMANLARI (Merkezden Yüzeye) ----
  {
    id: 'ic-cekirdek', grup: 'ic', ad: 'İç Çekirdek', ik: '☀️',
    r0: 0, r1: 0.22, renk: '#fff3b0', renk2: '#ffb703',
    konum: '5.150 – 6.371 km derinlik (Merkez)',
    sicaklik: '~5.400 – 5.700 °C (Güneş yüzeyi kadar sıcak!)',
    yapi: 'KATI demir (%85) ve nikel (%10) kristalleri',
    basinc: '3,6 milyon atmosfer (deniz seviyesinin 3,6 milyon katı!)',
    ozet: 'Dünya\'nın tam kalbinde yer alan, Ay\'ın yaklaşık %70\'i büyüklüğünde parlayan katı bir metal küredir. Aşırı yüksek sıcaklık demiri eritmeye yetse de üzerindeki tüm gezegenin akıl almaz basıncı atomları sımsıkı kilitleyip katı tutar.',
    nelerVar: 'Dev demir kristalleri, Dünya\'nın oluşumundan kalan ilk radyoaktif ısı ve yılda ~1 mm büyüyen katılaşma sınırı.',
    sasirtici: 'İç çekirdek Dünya\'nın geri kalanından biraz daha farklı hızda dönebilir ve Dünya\'nın dışındaki tüm altının %99\'undan fazlası aslında çekirdeğe çökmüştür — o altın yüzeye çıkarılsaydı tüm gezegeni yarım metre kalınlığında kaplardı!'
  },
  {
    id: 'dis-cekirdek', grup: 'ic', ad: 'Dış Çekirdek', ik: '🧲',
    r0: 0.22, r1: 0.50, renk: '#fb8500', renk2: '#d64515',
    konum: '2.900 – 5.150 km derinlik (2.250 km kalınlık)',
    sicaklik: '4.000 – 5.000 °C',
    yapi: 'SIVI ve sürekli çalkalanan erimiş demir-nikel okyanusu',
    basinc: '1,3 – 3,3 milyon atmosfer',
    ozet: 'Dünya\'nın kendi ekseni etrafında dönmesiyle bu devasa sıvı metal okyanusu sürekli girdaplar oluşturarak akar. Bu hareket gezegenimizi dev bir elektrik dinamosuna çevirir.',
    nelerVar: 'Sıvı demir akıntıları ve Dünya\'nın koruyucu manyetik alanını (manyetosfer) üreten jeodinamo.',
    sasirtici: 'Dış çekirdek olmasaydı Dünya\'nın manyetik kalkanı da olmazdı; Güneş rüzgârları tıpkı Mars\'ta olduğu gibi atmosferimizi ve okyanuslarımızı uzaya süpürüp götürürdü — hayatı koruyan görünmez kalkan buradan doğar!'
  },
  {
    id: 'alt-manto', grup: 'ic', ad: 'Alt Manto', ik: '🌋',
    r0: 0.50, r1: 0.78, renk: '#c84b26', renk2: '#8f2514',
    konum: '660 – 2.900 km derinlik (2.240 km kalınlık)',
    sicaklik: '1.600 – 3.700 °C',
    yapi: 'Yüksek basınç altında çok yoğun silikat (bridgmanit) kayası',
    basinc: '240 bin – 1,3 milyon atmosfer',
    ozet: 'Dünya hacminin yarısından fazlasını oluşturan devasa sıcak kaya katmanıdır. Milyonlarca yıllık zaman ölçeğinde çok ağır çekimde (tırnak uzaması hızında!) yükselip alçalır.',
    nelerVar: 'Dünya\'nın en yaygın minerali olan bridgmanit ve çekirdek sınırından yükselen dev sıcak magma sütunları (Hawaii ve Yellowstone\'u besleyen!).',
    sasirtici: 'Alt mantonun derinliklerinde Afrika ve Pasifik\'in altında Everest\'ten 100 kat daha yüksek (1.000 km!) iki gizemli dev kaya kıtası (LLSVP) keşfedildi — bunların 4,5 milyar yıl önce Dünya\'ya çarpan Theia gezegeninin kalıntıları olabileceği düşünülüyor!'
  },
  {
    id: 'ust-manto', grup: 'ic', ad: 'Üst Manto & Astenosfer', ik: '🔥',
    r0: 0.78, r1: 0.94, renk: '#e06d38', renk2: '#b3421e',
    konum: '70 – 660 km derinlik',
    sicaklik: '500 – 1.600 °C',
    yapi: 'Yarı esnek (plastik gibi akabilen) sıcak peridotit kayası',
    basinc: '20 bin – 240 bin atmosfer',
    ozet: 'Üstteki sert kıta ve okyanus levhaları, astenosfer adı verilen bu yumuşak ve sıcak kaya tabakasının üzerinde yüzer gibi hareket eder. Depremlerin, yanardağların ve kıta kaymasının motorudur!',
    nelerVar: 'Tektonik levha hareketleri, yanardağ magma odaları ve doğal ELMASLARIN oluştuğu 150–250 km derinlik!',
    sasirtici: 'Üst mantonun 410–660 km derinliğindeki "ringwoodit" minerallerinin içinde, Dünya yüzeyindeki TÜM OKYANUSLARIN TOPLAMINDAN DAHA FAZLA su (kristal içine hapsolmuş hâlde) bulunduğu keşfedildi!'
  },
  {
    id: 'yerkabugu', grup: 'ic', ad: 'Yerkabuğu (Litosfer)', ik: '🪨',
    r0: 0.94, r1: 1.00, renk: '#7b6346', renk2: '#4d3b27',
    konum: '0 – 70 km derinlik (Okyanus altında sadece 5 – 10 km!)',
    sicaklik: 'Yüzey sıcaklığı → altta ~400 °C',
    yapi: 'Katı granit (kıtalar) ve bazalt (okyanus tabanı)',
    basinc: '1 – 20 bin atmosfer',
    ozet: 'Üzerinde yaşadığımız, dağların, okyanusların, şehirlerin ve ormanların bulunduğu incecik taş kabuktur. Dünya bir elma olsaydı yerkabuğu elmanın kabuğundan bile daha ince olurdu!',
    nelerVar: 'Kıtalar, okyanuslar, Mariana Çukuru (-11 km), tüm madenler ve insanlığın kazabildiği en derin delik: Kola Sondajı (12,2 km).',
    sasirtici: 'İnsanlık Ay\'a gitti ve Mars\'a araç indirdi ama kendi ayaklarımızın altında bugüne kadar yalnızca 12,2 kilometre (Kola Sondajı, Rusya) kazabildik — 180 °C sıcakta matkap uçları eriyince durmak zorunda kaldık!'
  },

  // ---- ATMOSFERİN 5 KATMANI (Yüzeyden Uzaya) ----
  {
    id: 'troposfer', grup: 'atm', ad: 'Troposfer (Yaşam ve Hava Olayları)', ik: '☁️',
    r0: 1.00, r1: 1.13, renk: 'rgba(120,198,242,0.52)', renk2: 'rgba(72,155,215,0.38)',
    konum: '0 – 12 km yükseklik (Ekvator\'da 18 km, kutuplarda 8 km)',
    sicaklik: '+15 °C → -55 °C (Yükseldikçe soğur)',
    yapi: '%78 Azot, %21 Oksijen + tüm su buharı ve bulutlar',
    basinc: 'Atmosfer kütlesinin %75 – 80\'i bu en alt katmandadır!',
    ozet: 'Nefes aldığımız, yağmurun, karın, şimşeğin, rüzgârın ve gökkuşağının yaşandığı en yoğun atmosfer katmanıdır. Canlı yaşamının neredeyse tamamı burada yer alır.',
    nelerVar: 'Bulutlar, fırtınalar, Everest Dağı (8,8 km), kuşlar ve ticari yolcu uçakları (10 – 12 km).',
    sasirtici: 'Uçakların 10–11 km yükseklikte (troposferin tam tavanında) uçmasının sebebi, bulutların ve fırtınaların üstüne çıkıp türbülanstan kaçmak ve ince havada daha az yakıt yakmaktır!'
  },
  {
    id: 'stratosfer', grup: 'atm', ad: 'Stratosfer & Ozon Tabakası', ik: '🛡️',
    r0: 1.13, r1: 1.28, renk: 'rgba(66,138,204,0.42)', renk2: 'rgba(42,98,168,0.28)',
    konum: '12 – 50 km yükseklik',
    sicaklik: '-55 °C → 0 °C (Ozon güneş UV\'sini emdiği için yükselince ISINIR!)',
    yapi: 'Kuru, durgun hava + 20–30 km\'de yoğun Ozon (O₃) kalkanı',
    basinc: 'Yüzey basıncının %10\'undan %0,1\'ine düşer',
    ozet: 'Hava akımları yatay ve sakin olduğu için neredeyse hiç bulut yoktur. İçindeki Ozon Tabakası, Güneş\'ten gelen öldürücü morötesi (UV) ışınların %98\'ini emerek karada yaşamı mümkün kılar.',
    nelerVar: 'Ozon Tabakası (20–30 km), meteoroloji balonları, süpersonik Concorde uçuşları (18 km) ve Felix Baumgartner\'ın 39 km uzay atlayışı.',
    sasirtici: 'Dünya\'daki tüm ozon gazı tek bir katmanda deniz seviyesine sıkıştırılsaydı kalınlığı yalnızca 3 MİLİMETRE (iki madeni para kalınlığı!) olurdu — ama o incecik kalkan tüm gezegeni korur!'
  },
  {
    id: 'mezosfer', grup: 'atm', ad: 'Mezosfer (Göktaşı Kalkanı)', ik: '☄️',
    r0: 1.28, r1: 1.44, renk: 'rgba(48,84,152,0.34)', renk2: 'rgba(28,52,110,0.22)',
    konum: '50 – 85 km yükseklik',
    sicaklik: '0 °C → -90 °C (Atmosferin EN SOĞUK katmanı!)',
    yapi: 'Çok seyrek gazlar, buz kristali gece parlayan bulutları',
    basinc: 'Yüzeyin binde birinden az',
    ozet: 'Uçak ve balonların çıkamadığı, uyduların ise sürtünmeden dolayı alçalamadığı için "cahil bölge" (ignorosphere) de denen gizemli orta katmandır. Ama gezegenin en önemli göktaşı kalkanıdır!',
    nelerVar: 'Yıldız kaymaları (göktaşlarının yanıp kül olması), nadir "gece parlayan bulutlar" ve kırmızı cin (sprite) yıldırımları.',
    sasirtici: 'Her gün uzaydan Dünya\'ya ortalama 40 ila 100 TON uzay tozu ve göktaşı düşer — neredeyse tamamı tam bu mezosfer katmanında sürtünmeyle yanıp gökyüzünde "yıldız kayması"na dönüşür!'
  },
  {
    id: 'termosfer', grup: 'atm', ad: 'Termosfer (Aurora & ISS)', ik: '✨',
    r0: 1.44, r1: 1.62, renk: 'rgba(32,68,128,0.28)', renk2: 'rgba(24,118,122,0.18)',
    konum: '85 – 600 km yükseklik (100 km = Kármán Uzay Sınırı!)',
    sicaklik: '-90 °C → +1.500 °C (Ama hava o kadar seyrek ki üşürsün!)',
    yapi: 'İyonlaşmış oksijen ve azot atomları (İyonosfer)',
    basinc: 'Neredeyse vakum (milyonda bir atmosfer)',
    ozet: '100 km\'deki Kármán Çizgisi uzayın resmi başlangıcıdır. Güneş\'ten gelen yüklü parçacıklar buradaki gaz atomlarına çarpınca büyüleyici yeşil ve mor Kutup Işıkları (Aurora) doğar!',
    nelerVar: 'Kármán Çizgisi (100 km), Kutup Işıkları (Aurora Borealis), Uluslararası Uzay İstasyonu (ISS — 408 km) ve Hubble Teleskobu (540 km).',
    sasirtici: 'Termosferde gaz molekülleri 1.500 °C\'ye kadar ısınır ama araları o kadar boştur ki elini dışarı uzatsan ısıyı iletecek yeterli molekül olmadığı için yanmaz, aksine DONARSIN!'
  },
  {
    id: 'ekzosfer', grup: 'atm', ad: 'Ekzosfer (Uzaya Açılan Kapı)', ik: '🛰️',
    r0: 1.62, r1: 1.82, renk: 'rgba(24,40,86,0.22)', renk2: 'rgba(12,18,42,0.08)',
    konum: '600 – 10.000 km yükseklik',
    sicaklik: 'Güneş ışığında sıcak, gölgede dondurucu uzay soğuğu',
    yapi: 'Aşırı seyrek hidrojen ve helyum atomları',
    basinc: 'Uzay boşluğuna kesintisiz geçiş',
    ozet: 'Dünya atmosferinin en dış ve en geniş katmanıdır. Atomlar birbirine neredeyse hiç çarpmadan yüzlerce kilometre uçar; yeterince hızlı olanlar Dünya\'nın yerçekiminden kurtulup uzaya kaçar.',
    nelerVar: 'Hava durumu uyduları, haberleşme uyduları, Starlink ve GPS uydularına (20.200 km) giden uzay otoyolu.',
    sasirtici: 'Ekzosferin en uç hidrojen bulutu (jeokorona) aslında Ay\'ın yörüngesinin bile ötesine (630.000 km!) kadar uzanır — yani teknik olarak Ay bile Dünya atmosferinin en ince nefesinin içinde döner!'
  }
];
