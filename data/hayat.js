// "Rastgele doğ": rastgele bir yılda, o yıl var olan rastgele bir devlette doğup bir hayat yaşamak.
// Dönemler: antik (MS 500'e kadar), orta (500-1450), yeni (1450-1850), modern (1850 sonrası). Yıllar site kuralında (MÖ pozitif).
// Etkiler: sag (sağlık), ser (servet), mut (mutluluk), bil (bilgi); 0-100 arası.
'use strict';
window.HAYAT = {
  // ad bölgeleri: [kuzey, güney, batı, doğu] kutusu ve döneme göre ad listeleri (erkek | kadın)
  adlar: [
    { kutu: [32, 22, 24, 36], d: { antik: ['Amenemhat Sobekhotep Neferhotep Pahery Senenmut Khaemwaset | Nefertari Merit Tiye Hatnefer Nebet Iset'], orta: ['Ahmed Ali Hasan Yusuf Ömer Mahmud | Fatıma Zeynep Aişe Hadice Meryem Sitt'] }, sinir: 641 },
    { kutu: [43, 35, 25, 45], d: { antik: ['Nikias Demetrios Philon Attalos Mithridates Theodoros | Eirene Sophia Theodora Antonia Kleopatra Zoe'], orta: ['Mehmed Ali Osman Hasan Hüseyin İbrahim | Ayşe Fatma Emine Hatice Zeynep Rabia'] }, sinir: -1071 },
    { kutu: [38, 12, -18, 60], d: { antik: ['Abdu Hadad Zabdas Malku Bar-Hadad Yarhai | Zenobia Shalma Ammaya Bat-Shamash Aqmat Taymi'], orta: ['Muhammed Ahmed Ali Hasan Halid Yusuf | Fatıma Aişe Hadice Leyla Zeynep Meryem'] }, sinir: -632 },
    { kutu: [42, 25, 44, 63], d: { antik: ['Dariush Artabanos Mithradat Farnbag Ardaşir Bahram | Atossa Roxana Parisatis Shirin Azarmidukht Purandokht'], orta: ['Hüseyin Rıza Cafer Abbas Kâzım Mehdi | Fatıma Zehra Leyla Şirin Mehri Gülnar'] }, sinir: -651 },
    { kutu: [72, 35, -12, 45], d: { antik: ['Marcus Lucius Gaius Quintus Titus Publius | Julia Livia Claudia Cornelia Aurelia Octavia'], orta: ['Johannes Pierre Heinrich Giovanni Willem Jan | Maria Agnes Catherine Isabella Margarete Elena'], modern: ['Jean Hans Giovanni Pavel Jan Carlos | Marie Anna Sofia Elena Katarzyna Lucia'] }, sinir: -500 },
    { kutu: [56, 20, 95, 150], d: { antik: ['Liu Bang Zhang Wei Li Ming Wang Fang Chen Yu Zhao Lin | Mei Hua Lan Xiu Jing Yan'], orta: ['Hiroshi Takeshi Kenji Wei Jun Hao | Yuki Hana Mei Lian Akiko Xiu'] }, sinir: -600 },
    { kutu: [35, 5, 63, 95], d: { antik: ['Arjun Chandra Ashoka Vikram Rajan Devraj | Sita Lakshmi Gauri Priya Kamala Savitri'] } },
    { kutu: [12, -35, -18, 52], d: { antik: ['Kwame Ade Musa Sundiata Mensah Kofi | Amina Nzinga Ayo Adaeze Makeda Fola'] } },
    { kutu: [56, 35, 45, 95], d: { antik: ['Bumin İstemi Tonyukuk Bilge Kutlug Alp | Ay Börte Bilge Altun Tümen Saruca'], orta: ['Temür Arslan Batu Kubilay Toktamış Berke | Börte Sorgagtani Altan Gülbahar Saray Ayşe'] } },
    { kutu: [72, -56, -170, -30], d: { antik: ['Itzcoatl Tupac Pachacuti Huitzil Manco Tecun | Xochitl Ixchel Citlali Quilla Nayeli Ayelen'], yeni: ['Juan José Francisco John Thomas Pedro | María Juana Ana Mary Elizabeth Isabel'] }, sinir: -1550 }
  ],
  yedekAd: 'Can Deniz Umut Arda Ege Kaan | Elif Defne Zeynep Ada Su Nil',
  // aile: dönem ağırlıkları (antik, orta, yeni, modern)
  siniflar: [
    { id: 'koylu', ad: 'çiftçi bir köylü ailesine', w: [62, 68, 60, 28], ser: 15 },
    { id: 'kole', ad: 'köle bir aileye', w: [12, 6, 4, 0], ser: 2 },
    { id: 'zanaat', ad: 'bir zanaatkâr ailesine', w: [10, 11, 13, 18], ser: 30 },
    { id: 'tuccar', ad: 'bir tüccar ailesine', w: [5, 6, 9, 10], ser: 50 },
    { id: 'asker', ad: 'bir asker ailesine', w: [4, 4, 5, 6], ser: 30 },
    { id: 'din', ad: 'bir din adamı ailesine', w: [3, 3, 3, 2], ser: 35 },
    { id: 'isci', ad: 'bir fabrika işçisi ailesine', w: [0, 0, 2, 28], ser: 18 },
    { id: 'memur', ad: 'bir memur ailesine', w: [0, 0, 1, 7], ser: 45 },
    { id: 'soylu', ad: 'soylu ve zengin bir aileye', w: [3, 2, 2, 1], ser: 85 },
    { id: 'saray', ad: 'hükümdar ailesine', w: [1.4, 1.4, 1.4, 0.4], ser: 98 }
  ],
  // yaş aşamaları: her birinde bir kart
  asamalar: [6, 10, 14, 17, 20, 24, 28, 32, 36, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90],
  // yıllık ölüm olasılığı: [bu yaşa kadar, olasılık]. Oyun dengesi için gerçeğin yaklaşık yarısı:
  // gerçekte eski çağlarda doğanların aşağı yukarı üçte biri 5 yaşına varamazdı (çocuk ölümünde kartta bu söylenir).
  olumYillik: {
    eski: [[5, 0.035], [15, 0.005], [30, 0.008], [45, 0.011], [60, 0.02], [70, 0.042], [80, 0.09], [999, 0.18]],
    sanayi: [[5, 0.022], [15, 0.003], [30, 0.005], [45, 0.007], [60, 0.014], [70, 0.032], [80, 0.075], [999, 0.16]],
    bugun: [[5, 0.008], [15, 0.0004], [30, 0.001], [45, 0.002], [60, 0.006], [70, 0.015], [80, 0.04], [999, 0.12]]
  },
  unvanlar: { usta: 'Usta', subay: 'Subay', komutan: 'Komutan', kadi: 'Kadı', vezir: 'Vezir', kaptan: 'Kaptan', kethuda: 'Köy kethüdası', sarraf: 'Sarraf', veliaht: 'Şehzade', mudur: 'Müdür' },
  // 14 yaşında meslek seçimi: sınıfa ve döneme göre
  meslekler: [
    { id: 'ciftci', ad: '🌾 Tarlada çalış', sinif: ['koylu', 'kole'], donem: ['antik', 'orta', 'yeni', 'modern'] },
    { id: 'zanaat', ad: '🔨 Bir ustanın yanına çırak gir', sinif: ['koylu', 'zanaat', 'isci', 'tuccar'], donem: ['antik', 'orta', 'yeni', 'modern'] },
    { id: 'asker', ad: '⚔️ Orduya yazıl', sinif: ['koylu', 'asker', 'zanaat', 'soylu', 'isci'], donem: ['antik', 'orta', 'yeni', 'modern'] },
    { id: 'tuccar', ad: '🐪 Kervanlara ya da gemilere katıl, ticaret öğren', sinif: ['tuccar', 'zanaat', 'soylu'], donem: ['antik', 'orta', 'yeni'] },
    { id: 'alim', ad: '📜 Okuma yazma öğren: kâtip, din adamı ya da âlim ol', sinif: ['din', 'tuccar', 'soylu', 'zanaat', 'saray'], donem: ['antik', 'orta', 'yeni'] },
    { id: 'denizci', ad: '⛵ Denize açıl', sinif: ['koylu', 'zanaat', 'tuccar', 'isci'], donem: ['antik', 'orta', 'yeni', 'modern'] },
    { id: 'saray', ad: '👑 Sarayda devlet işlerine gir', sinif: ['soylu', 'saray'], donem: ['antik', 'orta', 'yeni'] },
    { id: 'isci', ad: '🏭 Fabrikada çalışmaya başla', sinif: ['koylu', 'isci', 'zanaat'], donem: ['modern'] },
    { id: 'okul', ad: '🎓 Okula devam et, meslek sahibi ol', sinif: ['isci', 'memur', 'tuccar', 'zanaat', 'koylu', 'soylu', 'din', 'saray', 'asker'], donem: ['modern'] }
  ],
  // olaylar ve bulmacalar: data/hayat-olaylar.js ve data/hayat-bulmaca.js
  olaylar: [],
  // her aşamada bir "biliyor muydun"
  bilgiler: {
    antik: ['Antik çağda dünya nüfusu 200-300 milyon kadardı; bugünkünün yirmide biri.', 'İnsanların çoğu doğduğu yerden 20-30 km uzağa hiç gitmeden ölürdü.', 'Doğumda beklenen yaşam süresi 25-30 yıldı; ama çocukluğu atlatan 50-60 yaşına ulaşabilirdi.'],
    orta: ['Orta Çağ\'da insanların büyük çoğunluğu köylüydü ve toprağa bağlıydı.', 'Kara Ölüm (1347-1351) Avrupa\'nın yaklaşık üçte birini öldürdü.', 'Kâğıt Çin\'den İslam dünyasına 8. yüzyılda, oradan Avrupa\'ya geçti.'],
    yeni: ['Matbaa (1450) kitapları ucuzlattı; okuma yazma yavaşça yayıldı.', 'Patates, mısır ve domates Amerika\'dan geldi; Avrupa ve Asya mutfağını değiştirdi.', '18. yüzyılda bile dünyanın büyük kısmında insanların %90\'ı tarımla geçinirdi.'],
    modern: ['1900\'de dünya nüfusu 1,6 milyardı; bugün 8 milyarı aştı.', 'Antibiyotikler 1940\'larda yaygınlaştı ve milyonlarca hayat kurtardı.', 'Bugün doğumda beklenen yaşam süresi dünya ortalamasında 70 yılı aşıyor.']
  }
};
