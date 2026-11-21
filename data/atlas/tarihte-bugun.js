// 📅 Tarihte Bugün (Günün Olayı — her gün farklı, haritada konumuna ve yılına tek tıkla gidilir)
// Yıl kuralı: MÖ pozitif, MS negatif (ör. MS 1497 = -1497).
'use strict';
window.TARIHTE_BUGUN = [
  { ay: 1, gun: 1, y: -45, ad: 'Jülyen Takvimi Yürürlüğe Girdi', yer: 'Roma', ll: [41.90, 12.49], ozet: 'Jül Sezar, Mısırlı astronom Sosigenes\'in hesaplarıyla 365 gün + 4 yılda bir artık gün sistemini başlattı; bugün kullandığımız takvimin temelini attı.' },
  { ay: 1, gun: 7, y: -1610, ad: 'Galileo Jüpiter\'in Uydularını Keşfetti', yer: 'Padova, İtalya', ll: [45.41, 11.88], ozet: 'Galileo Galilei kendi yaptığı teleskopla Jüpiter\'in çevresinde dönen 4 uyduyu gördü; her şeyin Dünya\'nın etrafında dönmediğini kanıtladı.' },
  { ay: 1, gun: 24, y: -1848, ad: 'Kaliforniya Altına Hücumu Başladı', yer: 'Sutter\'s Mill, ABD', ll: [38.80, -120.89], ozet: 'Bir kereste fabrikasında altın kırıntılarının bulunmasıyla 300.000 kişi Kaliforniya\'ya akın etti ve San Francisco dev bir kente dönüştü.' },
  { ay: 2, gun: 11, y: -1990, ad: 'Nelson Mandela Özgürlüğüne Kavuştu', yer: 'Cape Town, Güney Afrika', ll: [-33.92, 18.42], ozet: '27 yıl süren hapis hayatının ardından serbest kalan Mandela, Güney Afrika\'da apartheid rejimini barışçıl biçimde sona erdiren sürecin sembolü oldu.' },
  { ay: 2, gun: 23, y: -1455, ad: 'Gutenberg İncili Basıldı', yer: 'Mainz, Almanya', ll: [49.99, 8.27], ozet: 'Hareketli metal harfli matbaayla basılan ilk büyük kitap, bilginin Avrupa\'da ve dünyada ışık hızıyla yayılmasını başlattı.' },
  { ay: 3, gun: 10, y: -1876, ad: 'İlk Telefon Görüşmesi Yapıldı', yer: 'Boston, ABD', ll: [42.36, -71.06], ozet: 'Alexander Graham Bell yardımcısına "Bay Watson, buraya gelin, sizi görmek istiyorum" diyerek sesin tel üzerinden iletildiği yeni çağı açtı.' },
  { ay: 3, gun: 15, y: 44, ad: 'Jül Sezar Suikastı', yer: 'Roma', ll: [41.89, 12.48], ozet: 'Roma Senatosu\'nda öldürülen Sezar\'ın ardından Roma Cumhuriyeti sona erdi ve Roma İmparatorluğu dönemi başladı.' },
  { ay: 3, gun: 18, y: -1915, ad: 'Çanakkale Deniz Zaferi', yer: 'Çanakkale Boğazı, Türkiye', ll: [40.15, 26.40], ozet: 'İtilaf donanmasının boğazı geçme girişimi Nusret Mayın Gemisi ve kıyı tabyalarının direnişiyle durduruldu.' },
  { ay: 4, gun: 12, y: -1961, ad: 'Yuri Gagarin Uzaya Çıkan İlk İnsan Oldu', yer: 'Baykonur, Kazakistan', ll: [45.96, 63.30], ozet: 'Vostok 1 kapsülüyle Dünya yörüngesinde 108 dakikalık tur atan Gagarin, insanlığın uzay çağını başlattı.' },
  { ay: 4, gun: 15, y: -1912, ad: 'Titanik Atlas Okyanusu\'nda Battı', yer: 'Kuzey Atlas Okyanusu', ll: [41.73, -49.95], ozet: 'Labrador Akıntısı\'nın getirdiği bir buzdağına çarpan dev geminin batışı, uluslararası deniz güvenliği ve cankurtaran kurallarını kökten değiştirdi.' },
  { ay: 4, gun: 23, y: -1920, ad: 'Türkiye Büyük Millet Meclisi Açıldı', yer: 'Ankara, Türkiye', ll: [39.94, 32.85], ozet: 'Millî egemenlik ilkesiyle Ankara\'da açılan Meclis, modern Türkiye Cumhuriyeti\'nin temelini attı ve bu gün dünya çocuklarına armağan edildi.' },
  { ay: 5, gun: 20, y: -1498, ad: 'Vasco da Gama Hindistan\'a Ulaştı', yer: 'Kalküta (Kozhikode), Hindistan', ll: [11.25, 75.78], ozet: 'Ümit Burnu\'nu dolaşıp Hindistan\'a ulaşan ilk Avrupalı denizci, baharat ticaretini kara kervanlarından okyanuslara taşıdı.' },
  { ay: 5, gun: 29, y: -1453, ad: 'İstanbul\'un Fethi', yer: 'İstanbul, Türkiye', ll: [41.01, 28.97], ozet: 'Fatih Sultan Mehmet\'in 53 günlük kuşatmasının ardından Konstantinopolis fethedildi; Orta Çağ kapandı, Yeni Çağ açıldı.' },
  { ay: 6, gun: 15, y: -1215, ad: 'Magna Carta İmzalandı', yer: 'Runnymede, İngiltere', ll: [51.44, -0.56], ozet: 'Kralın yetkilerini ilk kez yazılı hukukla sınırlayan bu belge, modern anayasa ve insan hakları düşüncesinin temel taşlarından sayılır.' },
  { ay: 7, gun: 14, y: -1789, ad: 'Bastille Baskını (Fransız İhtilali)', yer: 'Paris, Fransa', ll: [48.85, 2.37], ozet: 'Paris halkının Bastille Kalesi\'ni ele geçirmesiyle mutlak monarşi yıkıldı; özgürlük ve eşitlik fikirleri dünyaya yayıldı.' },
  { ay: 7, gun: 15, y: -1799, ad: 'Rosetta Taşı Bulundu', yer: 'Reşit (Rosetta), Mısır', ll: [31.40, 30.42], ozet: 'Üç ayrı yazıyla kazınmış bu bazalt taş sayesinde Mısır hiyeroglifleri çözüldü ve 3.000 yıllık antik tarih yeniden okunabildi.' },
  { ay: 7, gun: 20, y: -1969, ad: 'Apollo 11 Ay\'a İndi', yer: 'Houston / Cape Canaveral, ABD', ll: [28.57, -80.65], ozet: 'Neil Armstrong ve Buzz Aldrin Ay yüzeyine ayak basan ilk insanlar oldu; 650 milyon kişi canlı izledi.' },
  { ay: 8, gun: 24, y: -79, ad: 'Vezüv Patladı, Pompeii Kül Altında Kaldı', yer: 'Pompeii, İtalya', ll: [40.75, 14.49], ozet: 'Vezüv Yanardağı\'nın dev kül sütunu Pompeii ve Herculaneum\'u saatler içinde gömerek Roma hayatını dondurdu.' },
  { ay: 8, gun: 26, y: -1071, ad: 'Malazgirt Meydan Muharebesi', yer: 'Malazgirt, Muş (Türkiye)', ll: [39.14, 42.54], ozet: 'Sultan Alparslan\'ın zaferi Anadolu\'nun kapılarını Türklere açtı ve bölgenin tarihini kalıcı biçimde değiştirdi.' },
  { ay: 9, gun: 20, y: -1519, ad: 'Macellan Dünya Turuna Çıktı', yer: 'Sanlúcar, İspanya', ll: [36.78, -6.35], ozet: 'Beş gemiyle yola çıkan sefer 3 yıl sonra tek gemiyle dönerek Dünya\'nın yuvarlak olduğunu ve okyanusların birbirine bağlı olduğunu kanıtladı.' },
  { ay: 9, gun: 28, y: -1928, ad: 'Alexander Fleming Penisilini Keşfetti', yer: 'Londra, Birleşik Krallık', ll: [51.52, -0.17], ozet: 'Laboratuvarda unutulan bir petri kabındaki küfün bakterileri yok etmesiyle ilk antibiyotik doğdu ve yüz milyonlarca hayat kurtuldu.' },
  { ay: 10, gun: 4, y: -1957, ad: 'İlk Yapay Uydu Sputnik 1 Fırlatıldı', yer: 'Baykonur, Kazakistan', ll: [45.92, 63.34], ozet: 'Dünya yörüngesinde "bip-bip" radyo sinyali yayan ilk insan yapımı uydu, uzay yarışını ve modern uydu çağını başlattı.' },
  { ay: 10, gun: 12, y: -1492, ad: 'Kolomb Amerika Kıtasına Ulaştı', yer: 'San Salvador, Bahamalar', ll: [24.06, -74.53], ozet: 'Eski Dünya ile Yeni Dünya arasındaki binlerce yıllık kopukluk sona erdi; tarım ürünleri, kültürler ve haritalar kökten değişti.' },
  { ay: 10, gun: 29, y: -1923, ad: 'Türkiye Cumhuriyeti İlan Edildi', yer: 'Ankara, Türkiye', ll: [39.93, 32.86], ozet: 'Mustafa Kemal Atatürk\'ün öncülüğünde TBMM\'de Cumhuriyet ilan edildi ve modernleşme dönemi başladı.' },
  { ay: 11, gun: 9, y: -1989, ad: 'Berlin Duvarı Yıkıldı', yer: 'Berlin, Almanya', ll: [52.52, 13.38], ozet: '28 yıl boyunca şehri ve dünyayı ikiye bölen duvarın açılmasıyla Soğuk Savaş\'ın sonu ve Avrupa\'nın yeniden birleşmesi başladı.' },
  { ay: 11, gun: 17, y: -1869, ad: 'Süveyş Kanalı Açıldı', yer: 'Port Said, Mısır', ll: [31.26, 32.31], ozet: 'Akdeniz ile Kızıldeniz\'i doğrudan bağlayan kanal, Avrupa–Asya deniz yolunu 7.000 kilometre kısalttı.' },
  { ay: 11, gun: 22, y: -1497, ad: 'Vasco da Gama Ümit Burnu\'nu Aştı', yer: 'Ümit Burnu, Güney Afrika', ll: [-34.36, 18.47], ozet: 'Portekizli denizci Vasco da Gama, 22 Kasım 1497\'de Afrika\'nın güney ucunu dolaşarak Hint Okyanusu\'na giden deniz yolunu dünyaya açtı.' },
  { ay: 11, gun: 22, y: -1906, ad: 'SOS Uluslararası İmdat Sinyali Kabul Edildi', yer: 'Berlin, Almanya', ll: [52.52, 13.40], ozet: 'Berlin Uluslararası Telsiz Konferansı\'nda Mors alfabesindeki en kolay tanınan sinyal olan "... --- ..." (SOS) tüm denizciler için ortak yardım çağrısı seçildi.' },
  { ay: 11, gun: 24, y: -1859, ad: 'Darwin "Türlerin Kökeni"ni Yayımladı', yer: 'Londra, Birleşik Krallık', ll: [51.51, -0.13], ozet: 'Charles Darwin\'in doğal seçilim kuramını anlattığı eser, modern biyoloji ve doğa biliminin temelini attı.' },
  { ay: 12, gun: 10, y: -1948, ad: 'İnsan Hakları Evrensel Beyannamesi Kabul Edildi', yer: 'Paris, Fransa', ll: [48.86, 2.29], ozet: 'Birleşmiş Milletler, tüm insanların doğuştan özgür ve eşit haklara sahip olduğunu ilan eden tarihî belgeyi kabul etti.' },
  { ay: 12, gun: 17, y: -1903, ad: 'Wright Kardeşler İlk Motorlu Uçuşu Yaptı', yer: 'Kitty Hawk, ABD', ll: [36.02, -75.67], ozet: '12 saniye süren 36 metrelik ilk kontrollü motorlu uçuş, insanlığın gökyüzüne açılan kapısı oldu.' }
];

window.tarihteBugunBul = function (tarih) {
  const dt = tarih || new Date();
  const ay = dt.getMonth() + 1, gun = dt.getDate();
  const L = window.TARIHTE_BUGUN || [];
  const tam = L.filter(x => x.ay === ay && x.gun === gun);
  if (tam.length) return { tam: true, ay, gun, olaylar: tam };
  // Aynı günden kayıt yoksa takvimde en yakın tarihli olayı deterministik seç
  const gunYil = ay * 31 + gun;
  const sirali = [...L].sort((a, b) => Math.abs((a.ay * 31 + a.gun) - gunYil) - Math.abs((b.ay * 31 + b.gun) - gunYil));
  return { tam: false, ay, gun, olaylar: sirali.slice(0, 2) };
};
