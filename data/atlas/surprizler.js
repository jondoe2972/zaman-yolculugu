// 🎁 Dünya Çevresinde Gizli Sürprizler (Easter Eggs)
// Haritada yaklaştıkça (veya uzay boşluğunda) beliren gizli keşifler; Keşif Defterim'de XP kazandıkça ipuçlarının kilidi açılır!
'use strict';
window.ATLAS_SURPRIZLER = [
  {
    id: 'voyager', ad: 'Voyager Altın Plağı', ik: '🛰️', uzay: true, minZ: 0, xpKilit: 0,
    ipucu: 'Kürenin dışındaki karanlık uzay boşluğuna bak! Yıldızların arasında Dünya\'nın etrafında süzülen küçük bir altın uydu göreceksin.',
    yer: 'Yıldızlararası Uzay (1977\'den beri)',
    ozet: '1977\'de fırlatılan Voyager 1 ve 2 uzay sondaları, insanlığın başka uygarlıklara gönderdiği bir "zaman kapsülü" taşır: 55 dilde selam (Türkçe: "Sayın Türkçe bilen arkadaşlarımız, sabah şerifleriniz hayrolsun!"), Bach\'tan Azeri muğamına müzikler, balina sesleri ve Dünya fotoğrafları.',
    ilginc: 'Voyager 1 şu an Dünya\'dan 24 milyar kilometreden fazla uzakta, insan elinden çıkıp Güneş Sistemi dışına ulaşan en uzak nesnedir.',
    w: 'Voyager Golden Record'
  },
  {
    id: 'atlantis', ad: 'Kayıp Kıta Atlantis Efsanesi', ik: '🏛️', ll: [35.90, -9.20], minZ: 3.8, xpKilit: 0,
    ipucu: 'Platon\'un tarifine göre "Herkül Sütunları\'nın (Cebelitarık Boğazı) hemen ötesinde", Atlas Okyanusu\'nda suların içine yakından bak!',
    yer: 'Cebelitarık Açıkları (Atlas Okyanusu)',
    ozet: 'Filozof Platon\'un MÖ 360 civarında yazdığı diyaloglarda anlattığı, tek bir gün ve gecede sulara gömüldüğü söylenen efsanevi ada uygarlığı. Tarihçiler bunun Santorini\'deki dev MÖ 1600 yanardağ patlamasından ve Minos uygarlığından esinlendiğini düşünür.',
    ilginc: 'Platon\'dan önce hiçbir antik metinde Atlantis adı geçmez; yine de 2.400 yıldır haritacıları ve kâşifleri peşinden koşturuyor.',
    w: 'Atlantis'
  },
  {
    id: 'bermuda', ad: 'Bermuda Şeytan Üçgeni', ik: '🔺', ll: [25.50, -71.00], minZ: 3.2, xpKilit: 30,
    ipucu: 'Florida, Bermuda ve Porto Riko arasındaki Atlas Okyanusu sularına yaklaş.',
    yer: 'Kuzey Atlas Okyanusu',
    ozet: '20. yüzyılda kaybolan birkaç uçak ve gemi yüzünden gizemli efsanelerle anılan deniz bölgesi. Bilimsel veriler buradaki kaza oranının dünyanın diğer yoğun deniz yollarından farklı olmadığını, ancak güçlü Gulf Stream akıntısı ve ani tropikal fırtınaların navigasyonu zorlaştırdığını gösterir.',
    ilginc: 'Kristof Kolomb 1492\'de bu bölgeden geçerken pusulasının sapma yaptığını ve denizde garip parıltılar gördüğünü seyir defterine yazmıştı.',
    w: 'Bermuda Triangle'
  },
  {
    id: 'antikythera', ad: 'Antikythera Düzeneği (Antik Bilgisayar)', ik: '⚙️', ll: [35.88, 23.30], minZ: 4.8, xpKilit: 60,
    ipucu: 'Yunanistan ile Girit arasındaki küçük Antikythera adasının sularına iyice yaklaş!',
    yer: 'Ege / Girit Boğazı, Yunanistan',
    ozet: '1901\'de bir Roma batığından çıkarılan, MÖ 2. yüzyıla ait 30\'dan fazla hassas bronz dişli çarktan oluşan el yapımı astronomik hesap makinesi. Güneş-Ay tutulmalarını, gezegen hareketlerini ve Olimpiyat oyunlarının tarihlerini hesaplayabiliyordu.',
    ilginc: 'Bu kadar karmaşık dişli çark mekanizması Avrupa\'da ancak 1.400 yıl sonra mekanik saatlerle yeniden yapılabildi.',
    w: 'Antikythera mechanism'
  },
  {
    id: 'nazca', ad: 'Nazca Çizgileri', ik: '🦅', ll: [-14.74, -75.13], minZ: 4.5, xpKilit: 100,
    ipucu: 'Güney Amerika\'da Peru\'nun güneyindeki kurak kıyı çölüne tepeden yaklaş — dev bir sinekkuşu ve örümcek seni bekliyor!',
    yer: 'Nazca Çölü, Peru',
    ozet: 'MÖ 500 – MS 500 arasında Nazca kültürü tarafından çöl yüzeyindeki koyu çakıllar sıyrılıp alttaki açık renkli toprak ortaya çıkarılarak çizilmiş, ancak havadan bakıldığında tam görülebilen yüzlerce dev hayvan ve geometrik şekil.',
    ilginc: 'Bölge neredeyse hiç yağmur almadığı ve rüzgâr az olduğu için bu devasa çizgiler 2.000 yıldır bozulmadan kalmıştır.',
    w: 'Nazca Lines'
  },
  {
    id: 'troya', ad: 'Troya Atı', ik: '🐴', ll: [39.96, 26.24], minZ: 5.0, xpKilit: 140,
    ipucu: 'Çanakkale Boğazı\'nın güney girişine, antik Troya (Hisarlık) tepesine iyice yaklaş!',
    yer: 'Çanakkale, Türkiye',
    ozet: 'Homeros\'un İlyada ve Odysseia destanlarında anlatılan, 10 yıllık Troya kuşatmasını bitirmek için içine savaşçıların saklandığı efsanevi dev tahta at. Arkeologlar Troya\'da üst üste 9 farklı antik kent katmanı ortaya çıkarmıştır.',
    ilginc: 'Modern bilgisayar güvenliğinde kendini zararsız bir dosya gibi gösterip içeri sızan zararlı yazılımlara bu efsaneden dolayı "Truva Atı (Trojan)" adı verilir.',
    w: 'Trojan Horse'
  },
  {
    id: 'eldorado', ad: 'Altın Efsanesi: El Dorado', ik: '👑', ll: [4.97, -73.77], minZ: 4.8, xpKilit: 180,
    ipucu: 'Kolombiya\'nın And Dağları\'ndaki kutsal Guatavita Gölü çevresine yaklaş.',
    yer: 'Guatavita Gölü, Kolombiya',
    ozet: 'Avrupalı kâşiflerin yüzyıllarca aradığı "Altın Şehir" efsanesi aslında bir şehirden değil, Muisca kabilesinin yeni liderini altın tozuyla kaplayıp kutsal Guatavita Gölü\'ne altın sunular attığı törenden ("El Dorado" = Altın Adam) doğmuştur.',
    ilginc: 'Gölün dibinde gerçekten çok sayıda Muisca altın salı ve mücevheri bulundu; en ünlüsü bugün Bogota Altın Müzesi\'nde sergileniyor.',
    w: 'El Dorado'
  },
  {
    id: 'lochness', ad: 'Loch Ness Gölü Efsanesi', ik: '🐉', ll: [57.32, -4.42], minZ: 5.2, xpKilit: 230,
    ipucu: 'İskoçya\'nın kuzeyindeki derin ve sisli vadi gölüne iyice yaklaş.',
    yer: 'İskoçya Yaylaları, Birleşik Krallık',
    ozet: '230 metre derinliğindeki karanlık Loch Ness Gölü\'nde yaşadığı söylenen "Nessie" efsanesi 6. yüzyıla kadar uzanır. 2019\'da göl suyundan alınan çevresel DNA (eDNA) örnekleri canavara rastlamadı ancak gölde çok büyük yılan balıkları olabileceğini gösterdi.',
    ilginc: 'Loch Ness o kadar derindir ki tek başına İngiltere ve Galler\'deki tüm göllerin toplamından daha fazla tatlı su barındırır.',
    w: 'Loch Ness Monster'
  },
  {
    id: 'mariana', ad: 'Mariana Çukuru (Dünya\'nın En Derini)', ik: '🤿', ll: [11.37, 142.59], minZ: 4.0, xpKilit: 290,
    ipucu: 'Batı Pasifik\'te Guam Adası\'nın hemen güneybatısındaki en derin okyanus yarığına yaklaş!',
    yer: 'Challenger Deep, Büyük Okyanus',
    ozet: '10.994 metre derinliğiyle okyanusların en derin noktasıdır. 1960\'ta Jacques Piccard ve Don Walsh "Trieste" batiskafıyla buraya indiğinde, Everest Dağı\'nı ters çevirip içine koysanız bile zirvenin üstünde 2 km daha su kalacak derinlikte yaşayan canlılar buldular.',
    ilginc: 'Mariana Çukuru\'nun tabanındaki su basıncı, deniz seviyesindekinin 1.000 katından fazladır — parmağınızın ucunda 50 jumbo jetin ağırlığına denk!',
    w: 'Mariana Trench'
  },
  {
    id: 'kutup', ad: 'Kuzey Kutbu Keşif Noktası', ik: '🧭', ll: [88.50, 0.0], minZ: 2.2, xpKilit: 360,
    ipucu: 'Kürenin en tepesine, 90° Kuzey enlemindeki buzulların tam zirvesine çevir!',
    yer: '90° Kuzey, Arktik Okyanusu',
    ozet: 'Altında kara değil, 4.000 metre derinliğindeki Arktik Okyanusu\'nun üzerinde sürüklenen deniz buzları bulunur. Burada tüm boylamlar birleşir ve hangi yöne adım atarsanız atın güneye gitmiş olursunuz!',
    ilginc: 'Kuzey Kutbu\'nda Güneş yılda sadece bir kez doğar (Mart) ve bir kez batar (Eylül); yani 6 ay kesintisiz gündüz, 6 ay gece yaşanır.',
    w: 'North Pole'
  }
];
