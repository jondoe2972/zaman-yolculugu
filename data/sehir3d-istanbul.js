// 3D İstanbul: tarihi yarımada, Haliç, Galata ve Üsküdar kıyısı. Koordinatlar [enlem, boylam], yaklaşık.
// Yıllar sitedeki kurala göre: MÖ pozitif, MS negatif. from: yapıldığı yıl, to: yıkıldığı/kaybolduğu yıl (yoksa bugün).
// Mahalleler (bolgeler) nüfus eğrisine göre dolar ve boşalır; eski evler 1950'den sonra yavaş yavaş apartmana döner.
'use strict';
window.SEHIR3D = window.SEHIR3D || {};
window.SEHIR3D.istanbul = {
  ad: 'İstanbul', merkez: [41.017, 28.972], baslangic: 667,
  kara: [
    // tarihi yarımada ve surların dışı (Trakya)
    [[41.0160, 28.9860], [41.0175, 28.9800], [41.0180, 28.9760], [41.0175, 28.9720], [41.0195, 28.9670], [41.0225, 28.9600], [41.0265, 28.9545], [41.0300, 28.9505], [41.0340, 28.9465], [41.0390, 28.9420], [41.0425, 28.9390], [41.0470, 28.9340], [41.0530, 28.9330], [41.0590, 28.9330], [41.0620, 28.8900], [40.9850, 28.8900], [40.9905, 28.9050], [40.9930, 28.9230], [40.9965, 28.9330], [41.0000, 28.9420], [41.0025, 28.9500], [41.0035, 28.9600], [41.0040, 28.9680], [41.0045, 28.9760], [41.0055, 28.9820], [41.0090, 28.9855], [41.0130, 28.9875]],
    // Galata, Beyoğlu, Beşiktaş
    [[41.0640, 28.9420], [41.0540, 28.9440], [41.0420, 28.9500], [41.0350, 28.9620], [41.0260, 28.9700], [41.0225, 28.9770], [41.0270, 28.9835], [41.0320, 28.9900], [41.0360, 28.9940], [41.0395, 29.0000], [41.0420, 29.0060], [41.0470, 29.0260], [41.0750, 29.0400], [41.0750, 28.9450]],
    // Üsküdar ve Kadıköy
    [[40.9800, 29.0300], [40.9900, 29.0230], [40.9970, 29.0170], [41.0050, 29.0130], [41.0150, 29.0090], [41.0230, 29.0110], [41.0280, 29.0160], [41.0350, 29.0300], [41.0450, 29.0400], [41.0750, 29.0600], [41.0750, 29.0950], [40.9800, 29.0950]],
    // Kız Kulesi adacığı
    [[41.0208, 29.0038], [41.0214, 29.0038], [41.0214, 29.0045], [41.0208, 29.0045]]
  ],
  // mahalleler: nüfusla dolan bölgeler. merkez: ilk yerleşilen yer (oradan dışa doğru dolar). dolu: [yıl, doluluk 0-1]
  bolgeler: [
    { ad: 'Surlar içi', poly: [[41.0160, 28.9860], [41.0175, 28.9800], [41.0180, 28.9760], [41.0175, 28.9720], [41.0195, 28.9670], [41.0225, 28.9600], [41.0265, 28.9545], [41.0300, 28.9505], [41.0340, 28.9465], [41.0390, 28.9420], [41.0415, 28.9400], [41.0335, 28.9395], [41.0295, 28.9375], [41.0240, 28.9295], [41.0185, 28.9222], [41.0105, 28.9203], [41.0035, 28.9187], [40.9975, 28.9197], [40.9942, 28.9232], [40.9965, 28.9330], [41.0000, 28.9420], [41.0025, 28.9500], [41.0035, 28.9600], [41.0040, 28.9680], [41.0045, 28.9760], [41.0055, 28.9820], [41.0090, 28.9855], [41.0130, 28.9875]],
      merkez: [41.0125, 28.9815], aci: 0.18, modern: 0.55,
      dolu: [[667, 0.015], [300, 0.03], [100, 0.05], [-200, 0.07], [-330, 0.12], [-400, 0.4], [-540, 0.8], [-560, 0.6], [-700, 0.35], [-850, 0.4], [-1000, 0.6], [-1150, 0.75], [-1204, 0.7], [-1261, 0.42], [-1400, 0.3], [-1453, 0.22], [-1480, 0.42], [-1550, 0.85], [-1600, 0.95], [-2026, 1]] },
    { ad: 'Galata', poly: [[41.0225, 28.9770], [41.0260, 28.9700], [41.0350, 28.9620], [41.0420, 28.9500], [41.0470, 28.9560], [41.0400, 28.9820], [41.0320, 28.9900], [41.0270, 28.9835]],
      merkez: [41.0240, 28.9750], aci: -0.35, modern: 0.75,
      dolu: [[-300, 0], [-600, 0.03], [-1000, 0.05], [-1270, 0.08], [-1350, 0.14], [-1500, 0.22], [-1600, 0.38], [-1800, 0.65], [-1900, 0.88], [-2026, 1]] },
    { ad: 'Beşiktaş', poly: [[41.0320, 28.9900], [41.0400, 28.9820], [41.0470, 28.9560], [41.0600, 28.9600], [41.0650, 29.0300], [41.0470, 29.0260], [41.0420, 29.0060], [41.0395, 29.0000], [41.0360, 28.9940]],
      merkez: [41.0420, 29.0040], aci: -0.5, modern: 0.85,
      dolu: [[-1400, 0], [-1550, 0.06], [-1700, 0.2], [-1850, 0.45], [-1920, 0.6], [-1970, 0.9], [-2026, 1]] },
    { ad: 'Üsküdar ve Kadıköy', poly: [[40.9830, 29.0290], [40.9900, 29.0230], [40.9970, 29.0170], [41.0050, 29.0130], [41.0150, 29.0090], [41.0230, 29.0110], [41.0280, 29.0160], [41.0350, 29.0300], [41.0400, 29.0360], [41.0400, 29.0700], [40.9830, 29.0700]],
      merkez: [41.0240, 29.0150], aci: 0.3, modern: 0.85,
      dolu: [[667, 0.003], [-330, 0.01], [-1000, 0.015], [-1400, 0.02], [-1550, 0.07], [-1700, 0.14], [-1850, 0.28], [-1950, 0.45], [-1990, 0.9], [-2026, 1]] },
    { ad: 'Surların dışı', poly: [[41.0420, 28.9380], [41.0470, 28.9340], [41.0590, 28.9330], [41.0600, 28.8950], [40.9870, 28.8950], [40.9910, 28.9060], [40.9935, 28.9215], [40.9975, 28.9185], [41.0035, 28.9170], [41.0105, 28.9188], [41.0185, 28.9205], [41.0240, 28.9280], [41.0295, 28.9360], [41.0335, 28.9382]],
      merkez: [41.0470, 28.9360], aci: 0.1, modern: 0.9,
      dolu: [[-1453, 0.01], [-1600, 0.05], [-1800, 0.08], [-1900, 0.12], [-1950, 0.3], [-1975, 0.75], [-2026, 1]] }
  ],
  // modern apartman oranı (bölgenin "modern" katsayısıyla çarpılır)
  modern: [[-1900, 0], [-1935, 0.04], [-1960, 0.3], [-1985, 0.75], [-2026, 1]],
  yollar: [
    { ad: 'Mese (ana cadde) / Divanyolu', from: -330, pts: [[41.0084, 28.9767], [41.0086, 28.9713], [41.0103, 28.9640], [41.0128, 28.9565], [41.0165, 28.9520], [41.0195, 28.9496], [41.0250, 28.9430], [41.0295, 28.9375]] },
    { ad: 'Mese güney kolu', from: -330, pts: [[41.0128, 28.9565], [41.0080, 28.9520], [41.0040, 28.9400], [40.9990, 28.9300], [40.9948, 28.9235]] },
    { ad: 'İstiklal Caddesi (Cadde-i Kebir)', from: -1500, pts: [[41.0270, 28.9740], [41.0300, 28.9770], [41.0335, 28.9810], [41.0370, 28.9855]] }
  ],
  yapilar: [
    // --- surlar ---
    { id: 'byz-sur', ad: 'Byzantion surları', tip: 'sur', from: 667, to: -196, h: 9, kule: 60, pts: [[41.0178, 28.9785], [41.0140, 28.9772], [41.0100, 28.9790], [41.0078, 28.9835]], not: 'Megaralı göçmenlerin MÖ 667 civarında kurduğu Byzantion, bugünkü Sarayburnu\'ndaki tepeye kurulmuş küçük bir Yunan kentiydi.' },
    { id: 'severus-sur', ad: 'Severus surları', tip: 'sur', from: -196, to: -400, h: 10, kule: 70, pts: [[41.0180, 28.9735], [41.0130, 28.9725], [41.0080, 28.9735], [41.0055, 28.9760]], not: 'Roma imparatoru Septimius Severus, kendisine karşı direnen şehri 196\'da yıktırdı, sonra daha geniş surlarla yeniden kurdu.' },
    { id: 'konstantin-sur', ad: 'Konstantin surları', tip: 'sur', from: -330, to: -1000, yikik: -800, h: 11, kule: 90, pts: [[41.0255, 28.9555], [41.0200, 28.9505], [41.0130, 28.9470], [41.0060, 28.9442], [41.0020, 28.9450]], not: 'I. Konstantin 330\'da şehri Roma\'nın yeni başkenti yaptı ve sınırlarını batıya taşıdı. Bu surlar sonradan yapılan Theodosius surları yüzünden önemini yitirip kayboldu.' },
    { id: 'theodosius-sur', ad: 'Theodosius surları', tip: 'sur', cift: true, from: -413, yikik: -1500, h: 13, kule: 55, kuleH: 22, pts: [[41.0425, 28.9395], [41.0395, 28.9397], [41.0335, 28.9392], [41.0295, 28.9372], [41.0240, 28.9292], [41.0185, 28.9217], [41.0105, 28.9198], [41.0035, 28.9182], [40.9975, 28.9192], [40.9938, 28.9228]],
      not: 'II. Theodosius döneminde 413\'te tamamlanan 5,7 km\'lik kara surları: hendek, alçak dış sur ve 96 kuleli iç sur. Bin yıl boyunca neredeyse hiç aşılamadı; 1453\'te Osmanlı topları karşısında düştü.' },
    { id: 'deniz-sur', ad: 'Deniz surları', tip: 'sur', from: -439, to: -1880, yikik: -1871, h: 9, kule: 120, kuleH: 14, pts: [[41.0418, 28.9400], [41.0388, 28.9428], [41.0338, 28.9470], [41.0298, 28.9510], [41.0262, 28.9550], [41.0222, 28.9605], [41.0193, 28.9672], [41.0172, 28.9722], [41.0176, 28.9762], [41.0171, 28.9800], [41.0157, 28.9852], [41.0128, 28.9868], [41.0090, 28.9848], [41.0057, 28.9815], [41.0047, 28.9760], [41.0042, 28.9680], [41.0037, 28.9600], [41.0027, 28.9500], [41.0002, 28.9420], [40.9967, 28.9330], [40.9940, 28.9240]],
      not: 'Haliç ve Marmara kıyısını çeviren surlar. 1871\'de Marmara kıyısındaki kesimin bir kısmı demiryolu için yıkıldı.' },
    { id: 'galata-sur', ad: 'Galata (Ceneviz) surları', tip: 'sur', from: -1349, to: -1864, h: 9, kule: 70, pts: [[41.0222, 28.9705], [41.0262, 28.9712], [41.0278, 28.9748], [41.0262, 28.9795], [41.0232, 28.9805]], not: 'Cenevizliler Galata\'yı 1267\'den itibaren bir ticaret kolonisi olarak yönetti ve surlarla çevirdi. Surların büyük kısmı 1860\'larda yıkıldı; Galata Kulesi ayakta kaldı.' },
    // --- Bizans ---
    { id: 'hipodrom', ad: 'Hipodrom (At Meydanı)', tip: 'hipodrom', ll: [41.0058, 28.9752], aci: 0.62, uz: 440, en: 125, from: -203, yikik: -1500, not: 'Araba yarışlarının yapıldığı, 100.000 kişilik dev stadyum. Ortasındaki Dikilitaş (390) ve Yılanlı Sütun bugün hâlâ yerinde; Osmanlı döneminde At Meydanı oldu.' },
    { id: 'buyuk-saray', ad: 'Büyük Saray', tip: 'saray', ll: [41.0040, 28.9772], aci: 0.62, from: -330, to: -1453, yikik: -1204, parca: [[0, 0, 140, 60, 16], [-90, 40, 70, 50, 12], [80, 60, 60, 40, 14], [10, 110, 120, 30, 10], [-40, -70, 90, 40, 12]], renk: '#e2cfa8', not: 'Bizans imparatorlarının 700 yıl kullandığı, Hipodrom\'dan denize inen teraslı saray. 12. yüzyılda imparatorlar Blahernai\'ye taşındı; 1204 yağmasından sonra harabeye döndü.' },
    { id: 'ayasofya', ad: 'Ayasofya', tip: 'kubbe', ll: [41.0086, 28.9802], aci: 0.45, from: -537, w: 78, d: 70, h: 22, kubbeR: 16, kubbeH: 55, yarim: true, renk: '#d9a17e', kubbeRenk: '#8d989f', minare: [[-1453, 1], [-1500, 2], [-1574, 4]],
      not: 'Justinianus\'un 532-537 arasında 5 yılda yaptırdığı kilise; 31 m çaplı kubbesiyle bin yıl dünyanın en büyük kapalı mekânı oldu. 1453\'te camiye çevrildi; minareler sonradan eklendi.' },
    { id: 'aya-irini', ad: 'Aya İrini', tip: 'kubbe', ll: [41.0094, 28.9813], aci: 0.45, from: -548, w: 55, d: 32, h: 16, kubbeR: 8, kubbeH: 35, renk: '#c98a6a', kubbeRenk: '#8d989f', not: 'Ayasofya\'nın yanındaki kilise; 532\'de yandıktan sonra Justinianus yeniden yaptırdı. Osmanlı döneminde cephanelik olarak kullanıldı.' },
    { id: 'cemberlitas', ad: 'Çemberlitaş (Konstantin Sütunu)', tip: 'sutun', ll: [41.0086, 28.9713], from: -330, h: 35, r: 1.6, not: 'I. Konstantin\'in 330\'da diktiği porfir sütun; tepesinde imparatorun heykeli vardı. Yangınlarda çatladığı için demir çemberlerle sarıldı.' },
    { id: 'dikilitas', ad: 'Dikilitaş', tip: 'sutun', ll: [41.0062, 28.9750], from: -390, h: 25, r: 1.4, kare: true, renk: '#c98a7a', not: 'Firavun III. Thutmose\'un Karnak\'ta diktirdiği dikilitaş; I. Theodosius 390\'da Hipodrom\'a getirtti. 3500 yaşında.' },
    { id: 'bozdogan', ad: 'Bozdoğan Kemeri (Valens Su Kemeri)', tip: 'kemer', from: -368, h: 26, pts: [[41.0157, 28.9535], [41.0160, 28.9575], [41.0163, 28.9640]], renk: '#c9a27a', not: 'İmparator Valens döneminde 368\'de tamamlanan su kemeri; şehre Trakya\'dan su taşıyan yüzlerce kilometrelik sistemin parçasıydı. Osmanlılar da kullanmaya devam etti.' },
    { id: 'blahernai', ad: 'Blahernai Sarayı', tip: 'saray', ll: [41.0365, 28.9410], aci: 0.2, from: -1081, to: -1453, parca: [[0, 0, 80, 40, 18], [40, 40, 40, 30, 14]], renk: '#d8c39a', not: 'Komnenos hanedanından itibaren imparatorların oturduğu, kara surlarının dibindeki saray. Tekfur Sarayı onun bir parçasıdır.' },
    { id: 'galata-kulesi', ad: 'Galata Kulesi', tip: 'kule', ll: [41.0256, 28.9741], from: -1348, r: 9, h: 52, koni: 15, renk: '#cfc3ad', not: 'Cenevizlilerin 1348\'de "İsa Kulesi" adıyla yaptığı gözetleme kulesi. 67 metre yüksekliğiyle yüzyıllarca şehrin en yüksek yapılarından biri oldu.' },
    { id: 'kiz-kulesi', ad: 'Kız Kulesi', tip: 'kule', ll: [41.0211, 29.0041], from: -1110, r: 5, h: 18, koni: 8, renk: '#efe9de', not: 'Bizans imparatoru I. Manuel\'in Boğaz\'a zincir germek için yaptırdığı kulenin yerinde duran yapı; bugünkü hâli 18. yüzyıldan.' },
    // --- Osmanlı ---
    { id: 'topkapi', ad: 'Topkapı Sarayı', tip: 'saray', ll: [41.0118, 28.9838], aci: 0.45, from: -1478, parca: [[-120, -30, 60, 30, 10], [-40, -10, 90, 20, 9], [40, 10, 60, 24, 9], [100, 30, 50, 30, 12], [20, -60, 140, 16, 8], [150, 0, 30, 20, 14]], kubbeler: [[-40, -10, 9], [100, 30, 8]], bahce: 260, renk: '#efe6d2', kuleH: 25, kuleXZ: [-150, -10],
      not: 'Fatih Sultan Mehmed\'in 1478 civarında tamamladığı saray; Osmanlı padişahları 400 yıl burada yaşadı ve devleti buradan yönetti.' },
    { id: 'carsi', ad: 'Kapalıçarşı', tip: 'carsi', ll: [41.0107, 28.9681], aci: 0.25, from: -1461, w: 200, d: 150, not: 'Fatih\'in 1461\'de yaptırdığı bedestenle başlayan, zamanla 60\'tan fazla sokak ve binlerce dükkândan oluşan dünyanın en eski kapalı çarşılarından biri.' },
    { id: 'fatih', ad: 'Fatih Camii', tip: 'kubbe', ll: [41.0195, 28.9496], aci: 0.9, from: -1470, w: 60, d: 60, h: 18, kubbeR: 13, kubbeH: 44, cami: true, minare: [[-1470, 2]], not: 'Fatih\'in yaptırdığı ilk büyük selatin camisi ve külliyesi (1470). 1766 depreminde yıkıldı, 1771\'de yeniden yapıldı.' },
    { id: 'bayezid', ad: 'Bayezid Camii', tip: 'kubbe', ll: [41.0103, 28.9645], aci: 0.9, from: -1506, w: 50, d: 50, h: 16, kubbeR: 9, kubbeH: 37, cami: true, minare: [[-1506, 2]], not: 'II. Bayezid\'in yaptırdığı, şehrin bugün ayakta kalan en eski selatin camisi (1506). Bizans\'ın Theodosius Forumu\'nun yerindedir.' },
    { id: 'suleymaniye', ad: 'Süleymaniye Camii', tip: 'kubbe', ll: [41.0161, 28.9640], aci: 0.9, from: -1557, w: 69, d: 63, h: 20, kubbeR: 13.3, kubbeH: 53, yarim: true, cami: true, minare: [[-1557, 4]], avlu: 60,
      not: 'Mimar Sinan\'ın Kanuni Sultan Süleyman için yaptığı külliye (1550-1557). Haliç\'e bakan tepede, şehrin siluetinin simgesi.' },
    { id: 'sultanahmet', ad: 'Sultanahmet Camii', tip: 'kubbe', ll: [41.0054, 28.9768], aci: 0.15, from: -1616, w: 64, d: 72, h: 20, kubbeR: 11.7, kubbeH: 43, yarim: true, cami: true, minare: [[-1616, 6]], avlu: 64, renk: '#e8e3d8', kubbeRenk: '#7f99a8',
      not: 'I. Ahmed\'in Mimar Sedefkâr Mehmed Ağa\'ya yaptırdığı cami (1609-1616); altı minaresi ve içindeki mavi çinileriyle "Mavi Cami" diye de bilinir.' },
    { id: 'yeni-cami', ad: 'Yeni Cami', tip: 'kubbe', ll: [41.0171, 28.9712], aci: 0.8, from: -1665, w: 41, d: 41, h: 16, kubbeR: 8.7, kubbeH: 36, yarim: true, cami: true, minare: [[-1665, 2]], not: 'Eminönü\'ndeki cami: yapımına 1597\'de başlandı, 1665\'te tamamlandı. Yanındaki Mısır Çarşısı da külliyenin parçasıdır.' },
    { id: 'dolmabahce', ad: 'Dolmabahçe Sarayı', tip: 'saray', ll: [41.0392, 29.0002], aci: -0.62, from: -1856, parca: [[0, 0, 280, 40, 18], [-180, 10, 80, 30, 14], [180, 10, 80, 30, 14]], kubbeler: [[0, 0, 12]], renk: '#f4f1ea', not: 'Abdülmecid\'in yaptırdığı Avrupa tarzı saray (1856). Padişahlar Topkapı\'dan buraya taşındı; Atatürk 1938\'de burada öldü.' },
    { id: 'selimiye', ad: 'Selimiye Kışlası', tip: 'saray', ll: [41.0040, 29.0140], aci: 0.3, from: -1828, parca: [[0, -90, 200, 22, 16], [0, 90, 200, 22, 16], [-90, 0, 22, 200, 16], [90, 0, 22, 200, 16]], renk: '#efe7d6', not: 'III. Selim\'in Nizam-ı Cedid ordusu için yaptırdığı kışla, II. Mahmud döneminde taşa çevrildi (1828). Kırım Savaşı\'nda Florence Nightingale\'in hastanesi oldu.' },
    // --- modern ---
    { id: 'galata-koprusu', ad: 'Galata Köprüsü', tip: 'kopru', from: -1845, pts: [[41.0228, 28.9744], [41.0178, 28.9718]], en: 25, not: 'Haliç\'in iki yakasını bağlayan köprü ilk kez 1845\'te ahşap olarak yapıldı; bugünkü köprü 1994\'ten.' },
    { id: 'unkapani', ad: 'Unkapanı (Atatürk) Köprüsü', tip: 'kopru', from: -1836, pts: [[41.0245, 28.9585], [41.0290, 28.9625]], en: 20, not: 'Haliç\'in ilk köprüsü 1836\'da Unkapanı\'nda kuruldu; bugünkü köprü 1940\'tan.' },
    { id: 'sirkeci', ad: 'Sirkeci Garı', tip: 'saray', ll: [41.0153, 28.9768], aci: 0.6, from: -1890, parca: [[0, 0, 110, 25, 14]], renk: '#d9b38a', not: 'Doğu Ekspresi\'nin son durağı (1890). Avrupa\'dan gelen trenler bu garda biterdi.' },
    { id: 'haydarpasa', ad: 'Haydarpaşa Garı', tip: 'saray', ll: [40.9968, 29.0190], aci: 0.3, from: -1908, parca: [[0, 0, 80, 35, 28]], renk: '#d7b48c', not: 'Bağdat Demiryolu\'nun başlangıç istasyonu (1908); denize kazıklar üzerine yapıldı.' },
    { id: 'bogazici-koprusu', ad: '15 Temmuz Şehitler (Boğaziçi) Köprüsü', tip: 'asma', from: -1973, pts: [[41.0480, 29.0250], [41.0455, 29.0420]], h: 165, not: '1973\'te açılan, Avrupa ile Asya\'yı karayoluyla bağlayan ilk köprü. Kuleleri 165 metre.' }
  ],
  donemler: [
    { from: 667, to: -195, t: 'Byzantion: Megaralı göçmenlerin kurduğu küçük Yunan kenti. Akropol bugünkü Sarayburnu\'nda; Boğaz\'dan geçen gemilerden vergi alarak zenginleşti.' },
    { from: -196, to: -329, t: 'Roma imparatoru Septimius Severus şehri yıktırıp yeniden kurdu, Hipodrom\'un yapımına başladı.' },
    { from: -330, to: -531, t: 'Konstantinopolis: Roma İmparatorluğu\'nun yeni başkenti. Mese caddesi, forumlar, Büyük Saray; 413\'te dev kara surları tamamlandı.' },
    { from: -532, to: -564, t: 'Nika isyanında şehrin merkezi yandı; Justinianus Ayasofya\'yı 5 yılda yeniden yaptırdı. 541\'deki veba salgını nüfusu çok azalttı.' },
    { from: -565, to: -1203, t: 'Orta Çağ\'ın en büyük Hristiyan şehri. Arap kuşatmaları (674-678, 717-718) surlarda durduruldu; Haliç\'in ağzına zincir gerilirdi.' },
    { from: -1204, to: -1260, t: 'Dördüncü Haçlı Seferi şehri yağmaladı; Latin işgali. Pek çok mahalle boşaldı, saraylar harabeye döndü.' },
    { from: -1261, to: -1452, t: 'Bizans geri döndü ama şehir yarı boş ve yoksul; mahalleler arasında tarlalar ve bostanlar vardı. Galata Cenevizlilerin elindeydi.' },
    { from: -1453, to: -1519, t: 'Fatih Sultan Mehmed şehri aldı. Ayasofya camiye çevrildi; Topkapı Sarayı, Kapalıçarşı ve Fatih Camii yapıldı; şehre Anadolu ve Balkanlar\'dan halk getirildi.' },
    { from: -1520, to: -1699, t: 'Kanuni ve Mimar Sinan dönemi: Süleymaniye, ardından Sultanahmet. Nüfus 500 bini geçti; ahşap evlerle dolu mahalleler tepeleri kapladı.' },
    { from: -1700, to: -1838, t: 'Lale Devri, Boğaz kıyısında yalılar. Ahşap şehir sık sık büyük yangınlarla mahalle mahalle yandı.' },
    { from: -1839, to: -1922, t: 'Tanzimat ve modernleşme: Galata Köprüsü, Dolmabahçe Sarayı, tren garları, tramvay ve vapurlar.' },
    { from: -1923, to: -1949, t: 'Başkent Ankara\'ya taşındı; şehrin nüfusu bir süre azaldı.' },
    { from: -1950, to: -2026, t: 'Hızlı göç ve apartmanlaşma: şehir surların dışına, Boğaz\'ın iki yakasına yayıldı. Boğaziçi Köprüsü 1973\'te açıldı; bugün nüfus 15 milyonu aşıyor.' }
  ],
  // şehrin (bütün çevresiyle) yaklaşık nüfusu, bin kişi
  nufus: [[667, 5], [300, 20], [-200, 30], [-330, 50], [-400, 200], [-540, 450], [-560, 250], [-750, 70], [-1000, 300], [-1200, 350], [-1261, 100], [-1453, 45], [-1478, 80], [-1550, 450], [-1600, 700], [-1800, 550], [-1885, 870], [-1914, 1000], [-1927, 690], [-1950, 1000], [-1980, 2800], [-2000, 10000], [-2026, 15700]],
  kameralar: [
    { ad: 'Genel bakış', hedef: [41.014, 28.962], th: -0.55, ph: 0.9, dist: 4800 },
    { ad: 'Ayasofya ve Hipodrom', hedef: [41.0072, 28.9778], th: -0.9, ph: 0.85, dist: 900 },
    { ad: 'Kara surları', hedef: [41.0170, 28.9230], th: 0.9, ph: 0.9, dist: 1800 },
    { ad: 'Haliç ve Galata', hedef: [41.0230, 28.9690], th: -2.4, ph: 0.95, dist: 1700 },
    { ad: 'Süleymaniye', hedef: [41.0161, 28.9640], th: -2.0, ph: 0.9, dist: 700 }
  ],
  hizli: [{ ad: 'Byzantion', y: 400 }, { ad: 'Konstantinopolis', y: -330 }, { ad: 'Justinianus', y: -540 }, { ad: 'Haçlı yağması', y: -1204 }, { ad: 'Fetih', y: -1453 }, { ad: 'Kanuni', y: -1560 }, { ad: '1700', y: -1700 }, { ad: '1900', y: -1900 }, { ad: 'Bugün', y: -2026 }]
};
