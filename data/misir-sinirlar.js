// Mısır'ın dönemlere göre toprakları (yaklaşık). Antik devletlerin kesin sınırları yoktu;
// burada Nil vadisi boyunca denetlenen bölge ve dış topraklar gösterilir.
// vadi: [güney noktası, kuzey noktası] (Nil üzerindeki adlandırılmış noktalar), delta: true ise delta da dahil.
// poly: ek bölgeler [enlem, boylam]. Kaynak: Shaw (2000), Baines ve Málek "Atlas of Ancient Egypt".
(() => {
  const LEVANT_BUYUK = [[31.3, 34.2], [31.5, 34.45], [32.5, 34.9], [33.5, 35.3], [34.5, 35.8], [35.5, 35.8], [36.5, 36.2], [36.9, 38.0], [36.0, 38.4], [34.5, 37.6], [33.3, 36.6], [32.0, 36.1], [31.0, 35.6], [30.5, 34.9], [30.9, 34.3]];
  const LEVANT_KUCUK = [[31.3, 34.2], [31.5, 34.45], [32.5, 34.9], [33.5, 35.3], [34.5, 35.9], [34.6, 36.6], [33.3, 36.6], [32.0, 36.1], [31.0, 35.6], [30.5, 34.9], [30.9, 34.3]];
  const LEVANT_GUNEY = [[31.3, 34.2], [31.5, 34.45], [32.5, 34.9], [33.4, 35.2], [33.5, 36.3], [32.0, 36.1], [31.0, 35.6], [30.5, 34.9], [30.9, 34.3]];
  const KIRENAYKA = [[32.9, 20.0], [32.6, 21.0], [32.9, 22.0], [32.75, 22.7], [32.0, 24.3], [31.6, 25.1], [31.0, 25.1], [31.0, 22.5], [31.6, 20.2]];
  const KIBRIS = [[35.0, 32.3], [35.4, 33.0], [35.7, 34.6], [35.2, 34.1], [34.6, 33.0], [34.7, 32.4]];
  const SINA = [[31.2, 32.4], [31.1, 33.8], [29.5, 34.9], [27.75, 34.25], [29.9, 32.6]];
  window.SINIRLAR = [
    { from: 3150, to: 3101, ad: 'Yukarı Mısır krallıkları', renk: '#c98a3a', vadi: ['asuan', 'asyut'], etiket: [26.2, 33.0] },
    { from: 3150, to: 3101, ad: 'Aşağı Mısır (delta)', renk: '#7aa04a', vadi: ['memfis', 'kuzey'], delta: true, etiket: [31.1, 29.6] },
    { from: 3100, to: 2182, ad: 'Mısır Krallığı', renk: '#e0a020', vadi: ['asuan', 'kuzey'], delta: true, etiket: [27.9, 28.7] },
    { from: 2181, to: 2056, ad: 'Herakleopolis Krallığı', renk: '#d07a2a', vadi: ['asyut', 'kuzey'], delta: true, etiket: [28.6, 29.6] },
    { from: 2181, to: 2056, ad: 'Teb Krallığı', renk: '#8a6fb3', vadi: ['asuan', 'asyut'], etiket: [25.4, 33.4] },
    { from: 2055, to: 1961, ad: 'Mısır (Orta Krallık)', renk: '#e0a020', vadi: ['asuan', 'kuzey'], delta: true, etiket: [27.9, 28.7] },
    { from: 1960, to: 1651, ad: 'Mısır (Orta Krallık)', renk: '#e0a020', vadi: ['semna', 'kuzey'], delta: true, etiket: [27.9, 28.7] },
    { from: 1650, to: 1551, ad: 'Hiksoslar', renk: '#b0624a', vadi: ['kusae', 'kuzey'], delta: true, etiket: [29.6, 29.2] },
    { from: 1650, to: 1551, ad: 'Teb Krallığı', renk: '#8a6fb3', vadi: ['asuan', 'kusae'], etiket: [25.6, 33.4] },
    { from: 1650, to: 1551, ad: 'Kerma (Kuş)', renk: '#5a7a3a', vadi: ['napata', 'asuan'], etiket: [20.6, 29.2] },
    { from: 1550, to: 1505, ad: 'Mısır (Yeni Krallık)', renk: '#e0a020', vadi: ['semna', 'kuzey'], delta: true, etiket: [27.9, 28.7] },
    { from: 1504, to: 1351, ad: 'Mısır İmparatorluğu', renk: '#e0a020', vadi: ['abuhamad', 'kuzey'], delta: true, poly: [LEVANT_BUYUK, SINA], etiket: [27.9, 28.7], etiket2: [34.6, 37.6], ad2: 'Mısır\'a bağlı Kenan ve Suriye' },
    { from: 1350, to: 1151, ad: 'Mısır İmparatorluğu', renk: '#e0a020', vadi: ['abuhamad', 'kuzey'], delta: true, poly: [LEVANT_KUCUK, SINA], etiket: [27.9, 28.7], etiket2: [33.4, 37.2], ad2: 'Mısır\'a bağlı Kenan' },
    { from: 1150, to: 1070, ad: 'Mısır (Yeni Krallık)', renk: '#e0a020', vadi: ['abuhamad', 'kuzey'], delta: true, etiket: [27.9, 28.7] },
    { from: 1069, to: 748, ad: 'Tanis ve Libyalı krallar', renk: '#d07a2a', vadi: ['elhiba', 'kuzey'], delta: true, etiket: [29.4, 29.4] },
    { from: 1069, to: 748, ad: 'Teb (Amon rahipleri)', renk: '#8a6fb3', vadi: ['asuan', 'elhiba'], etiket: [25.8, 33.4] },
    { from: 747, to: 665, ad: 'Kuş ve Mısır (25. Hanedan)', renk: '#4f7a3a', vadi: ['napata', 'kuzey'], delta: true, etiket: [24.4, 29.0] },
    { from: 664, to: 526, ad: 'Mısır (Sais Hanedanı)', renk: '#e0a020', vadi: ['asuan', 'kuzey'], delta: true, poly: [SINA], etiket: [27.9, 28.7] },
    { from: 525, to: 405, ad: 'Pers İmparatorluğu\'nun Mısır eyaleti', renk: '#9c5a3a', vadi: ['asuan', 'kuzey'], delta: true, poly: [SINA], etiket: [27.9, 28.7] },
    { from: 404, to: 344, ad: 'Mısır (son yerli hanedanlar)', renk: '#e0a020', vadi: ['asuan', 'kuzey'], delta: true, poly: [SINA], etiket: [27.9, 28.7] },
    { from: 343, to: 333, ad: 'Pers İmparatorluğu\'nun Mısır eyaleti', renk: '#9c5a3a', vadi: ['asuan', 'kuzey'], delta: true, poly: [SINA], etiket: [27.9, 28.7] },
    { from: 332, to: 306, ad: 'Makedon yönetimi', renk: '#6a5aa8', vadi: ['asuan', 'kuzey'], delta: true, poly: [SINA], etiket: [27.9, 28.7] },
    { from: 305, to: 201, ad: 'Ptolemaios Krallığı', renk: '#8a6fb3', vadi: ['asuan', 'kuzey'], delta: true, poly: [SINA, KIRENAYKA, KIBRIS, LEVANT_GUNEY], etiket: [27.9, 28.7] },
    { from: 200, to: 97, ad: 'Ptolemaios Krallığı', renk: '#8a6fb3', vadi: ['asuan', 'kuzey'], delta: true, poly: [SINA, KIRENAYKA, KIBRIS], etiket: [27.9, 28.7] },
    { from: 96, to: 30, ad: 'Ptolemaios Krallığı', renk: '#8a6fb3', vadi: ['asuan', 'kuzey'], delta: true, poly: [SINA, KIBRIS], etiket: [27.9, 28.7] }
  ];
  // Nil üzerindeki adlandırılmış noktalar (en yakın Nil noktası bulunur)
  window.NIL_NOKTA = { asuan: [24.09, 32.9], asyut: [27.18, 31.18], memfis: [29.85, 31.25], kuzey: [30.1, 31.22], semna: [21.3, 30.9], kusae: [27.4, 30.85], napata: [18.55, 31.85], abuhamad: [19.53, 33.33], elhiba: [28.6, 30.9] };
})();
