// Güneydoğu Asya (bugünkü Myanmar, Tayland, Kamboçya, Laos, Vietnam, Malezya, Singapur, Endonezya, Filipinler, Brunei, Doğu Timor).
// Yıl: MÖ pozitif, MS negatif. Sahne (wx): batıdan doğuya
//   Pagan 900 · Yangon 1200 · Ayutthaya 2200 · Bangkok 2300 · Angkor 3200 · Hanoi 4000 · Hue 4300 · Oc Eo 4600 · Saigon 4700
//   Malakka 5300 · Kuala Lumpur 5400 · Singapur 5600 · Palembang 6000 · Borobudur 6700 · Prambanan 6800 · Bali 7200 · Manila 7800
// Kaynaklar: Osborne, "Southeast Asia: An Introductory History" (2013); Coedès, "The Indianized States of Southeast Asia" (1968);
//   Ricklefs vd., "A New History of Southeast Asia" (2010); Higham, "The Civilization of Angkor" (2001).
(() => {
  window.PLACES = window.PLACES || [];

  // ================= 1. DONG SON, FUNAN VE SRİVİCAYA =================
  window.PLACES.push({
    id: 'gdasya-antik', sira: 1, kisa: 'Dong Son, Funan ve Srivicaya', aralikAd: 'MÖ 1000 – MS 800',
    baslik: 'Tunç davullar · Hint Okyanusu ticareti · Funan · Trung kardeşler · Srivicaya',
    ulkeAlt: 'Dong Son tunç davullarından Funan liman krallığına, deniz imparatorluğu Srivicaya\'ya (MÖ 1000 – MS 800)',
    from: 1000, to: -800, start: -250,
    not: 'MS 500 öncesi bilgiler büyük ölçüde arkeolojiye ve Çin kayıtlarına dayanır.', baskent: 'Oc Eo ve Vyadhapura (Funan), Palembang (Srivicaya)',
    sahne: { kizak: false, araba: false, katipYok: true, giyim: 'antik' },
    dynasties: [{ from: 1000, to: 1, ad: 'Dong Son ve erken pirinç toplulukları', renk: '#7a6a3a' }, { from: 1, to: -550, ad: 'Funan', renk: '#a8742e' }, { from: -550, to: -800, ad: 'Çenla, Çampa ve Srivicaya', renk: '#3a7a6a' }],
    rulers: [
      { from: 1000, to: 1, ad: 'Dong Son ve köy önderleri', kisa: '?', kim: 'Kuzey Vietnam\'da Dong Son kültürü süslü tunç davullar döktü. Han Çini kuzey Vietnam\'ı aldı (MÖ 111).' },
      { from: 1, to: -550, ad: 'Funan kralları', kisa: 'Funan', kim: 'Mekong deltasında Hint ve Çin arasında liman krallığı. Söylenceye göre bir Hintli Brahman ile yerel kraliçe Soma\'nın evliliğinden doğdu. Vietnam\'da Trung kardeşler Çin\'e karşı ayaklandı (MS 40).' },
      { from: -550, to: -650, ad: 'Çenla ve Çampa krallıkları', kisa: 'Çenla', kim: 'Khmerlerin atası Çenla Funan\'ı ele geçirdi. Orta Vietnam kıyısında Hindu Çam krallığı.' },
      { from: -650, to: -800, ad: 'Srivicaya ve Şailendralar', kisa: 'Srivicaya', kim: 'Sumatra\'daki Palembang\'dan Malakka Boğazı\'nı denetleyen deniz krallığı; Budist öğrenim merkezi.' }
    ],
    eras: [
      { from: 1000, to: 1, puan: { eko: 2, ordu: 1, istikrar: 3 }, baskent: 'Köy toplulukları',
        gundem: 'Pirinç tarlaları, tunç ve demir. Dong Son\'un dev tunç davulları bütün bölgeye, Endonezya adalarına kadar yayıldı. Avustronezyalı denizciler kanolarla adalar arasında dolaşıyor.',
        savas: 'Tunç baltalar ve mızraklar; kuzeyde Çin\'e karşı direniş.',
        ekonomi: 'Sulu pirinç, tunç döküm, deniz ticareti; Hindistan\'dan cam boncuklar.',
        din: 'Atalar ve doğa ruhları.',
        yasam: 'Direkler üzerinde ahşap evler; çiçek bezemeli davullarda kayık yarışları.',
        bilgi: 'Bir Dong Son davulunun üzerinde kuş tüyü başlıklı insanlar ve kayıklar tasvir edilir; bugün de törenlerde benzer davullar çalınır.' },
      { from: 1, to: -550, puan: { eko: 4, ordu: 2, istikrar: 3 }, baskent: 'Oc Eo / Vyadhapura (Funan)',
        gundem: 'Muson rüzgârları Hindistan ile Çin arasındaki deniz yolunu açtı; gemiler Funan limanlarında rüzgârın dönmesini bekledi. Hinduizm, Budizm, Sanskritçe ve Hint yazısı bölgeye yayıldı.',
        savas: 'Funan\'ın donanması komşu kıyıları haraca bağladı.',
        ekonomi: 'Oc Eo\'da Roma sikkeleri, Hint mühürleri ve Çin aynaları bulundu.',
        din: 'Hinduizm (Şiva, Vişnu) ve Budizm saraylarda; köylerde ata ruhları.',
        yasam: 'Kanallarla çevrili liman şehirleri.',
        bilgi: 'Vietnam\'daki Oc Eo\'da Roma imparatoru Antoninus Pius adına basılmış (MS 152) altın bir madalyon bulundu.' },
      { from: -550, to: -800, puan: { eko: 4, ordu: 3, istikrar: 3 }, baskent: 'Palembang, İsanapura (Çenla)',
        gundem: 'Srivicaya Malakka ve Sunda boğazlarını kontrol ederek Hint Okyanusu ile Güney Çin Denizi ticaretinin bekçisi oldu. Çinli hacı Yijing Sanskritçe öğrenmek için Palembang\'da altı ay kaldı (671).',
        savas: 'Deniz akınları ve korsanlıkla mücadele.',
        ekonomi: 'Baharat, kâfur, sandal ağacı, altın; geçen gemilerden gümrük.',
        din: 'Mahayana Budizmi; Cava\'da Şailendralar Budist anıtlar yapmaya başladı.',
        yasam: 'Malay dili deniz ticaretinin ortak dili oldu.',
        bilgi: 'Bugünkü Endonezce ve Malayca, Srivicaya döneminde yazıtlarda görülen Eski Malaycadan gelişti.' }
    ],
    nufus: [[1000, 2], [1, 5], [-500, 7], [-800, 9]],
    nufusNot: 'Bütün Güneydoğu Asya için çok kaba tahminler.',
    dunyaOzet: { eko: 'Roma, Hindistan ve Çin arasında deniz ticareti Güneydoğu Asya limanlarından geçiyor.', askeri: 'Küçük krallıklar; kuzeyde Çin orduları.' },
    events: [
      { y: 500, t: 'Dong Son tunç davulları', k: 'm' }, { y: 111, t: 'Han Çini kuzey Vietnam\'ı aldı', k: 'm' }, { y: -40, t: 'Trung kardeşler ayaklandı', k: 'm' }, { y: -152, t: 'Oc Eo\'da Roma madalyonu', k: 'm' },
      { y: -550, t: 'Çenla Funan\'ı aldı', k: 'm' }, { y: -671, t: 'Yijing Srivicaya\'da', k: 'm' }, { y: -683, t: 'Kedukan Bukit yazıtı', k: 'm' },
      { y: 221, t: 'Çin birleşti', k: 'w' }, { y: -320, t: 'Guptalar', k: 'w' }, { y: -622, t: 'Hicret', k: 'w' }
    ],
    world: [{ from: 322, to: -550, yer: 'Hindistan', t: 'Maurya ve Gupta; Hint kültürü yayılıyor.' }, { from: 206, to: -220, yer: 'Çin', t: 'Han hanedanı.' }, { from: -618, to: -800, yer: 'Çin', t: 'Tang.' }],
    sites: [{ ad: 'PYU ŞEHİRLERİ', wx: 1000 }, { ad: 'DVARAVATİ', wx: 2200 }, { ad: 'DONG SON', wx: 4000 }, { ad: 'ÇAMPA', wx: 4400 }, { ad: 'OC EO (FUNAN)', wx: 4600 }, { ad: 'PALEMBANG', wx: 6000 }, { ad: 'CAVA', wx: 6700 }],
    monuments: [
      { id: 'oceo', ad: 'Oc Eo liman şehri (Funan)', yer: 'An Giang, Vietnam', wx: 4600, type: 'city', wall: true, b: 260, n: 22, hk: 0.26, start: -50, end: -150, vol: 5e4, ruin: -650 }
    ],
    hizli: [{ ad: 'Dong Son', y: 500 }, { ad: 'Han Vietnam\'da', y: 111 }, { ad: 'Trung kardeşler', y: -40 }, { ad: 'Funan', y: -250 }, { ad: 'Çenla', y: -600 }, { ad: 'Srivicaya', y: -683 }],
    bilgi: {
      oceo: { ikon: '⚓', yaptiran: 'Funan krallığı', donem: 'MS 1-7. yy', mimar: '—', sure: '—', neden: 'Hint-Çin deniz yolunun limanı.', onem: 'Güneydoğu Asya\'nın en eski büyük ticaret limanlarından.', teknik: [['Alan', '~450 hektar']], nasil: 'Kanallarla bağlı, surlu bir kıyı şehri.', bugun: 'Ören yeri; Vietnam ulusal anıtı.', ilginc: 'Buluntular arasında Roma, Hint, Pers ve Çin malları bir arada.' }
    },
    ulke: [
      { ad: 'Genel bakış', ikon: '🧭', html: '<p><b>Güneydoğu Asya</b>, Hindistan ile Çin\'in arasında, muson rüzgârlarının yönettiği bir dünyadır. Pirinç tarlaları, tunç davullar ve denizcilik burada gelişti. MS ilk yüzyıllarda Hint kültürü (Hinduizm, Budizm, Sanskritçe) limanlar yoluyla yayıldı; Vietnam ise bin yıl Çin\'in etkisinde kaldı.</p>' }
    ]
  });

  // ================= 2. ANGKOR, BOROBUDUR VE MAJAPAHİT =================
  window.PLACES.push({
    id: 'gdasya-klasik', sira: 2, kisa: 'Angkor, Borobudur ve Pagan', aralikAd: 'MS 800 – 1511',
    baslik: 'Borobudur · Angkor Wat · Pagan\'ın tapınakları · Dai Viet · Majapahit · Malakka',
    ulkeAlt: 'Tapınak krallıklarının altın çağı: Khmer, Pagan, Cava ve Malakka (MS 800 – 1511)',
    from: -800, to: -1511, start: -1150,
    not: 'Tarihler büyük ölçüde yazıtlara dayanır ve birkaç yıl oynayabilir.', baskent: 'Angkor, Pagan, Thang Long (Hanoi), Trowulan (Majapahit), Ayutthaya, Malakka',
    sahne: { kizak: false, araba: false, giyim: 'antik' },
    dynasties: [{ from: -800, to: -1000, ad: 'Şailendra Cavası ve erken Khmer', renk: '#6a5a3a' }, { from: -1000, to: -1300, ad: 'Angkor ve Pagan\'ın zirvesi', renk: '#a8742e' }, { from: -1300, to: -1511, ad: 'Majapahit, Ayutthaya ve Malakka', renk: '#2a6a7a' }],
    rulers: [
      { from: -800, to: -850, ad: 'II. Cayavarman', kisa: 'Cayavarman', kim: '802\'de Kulen Dağı\'nda kendini "evrensel hükümdar" ilan etti; Khmer İmparatorluğu\'nun kurucusu.' },
      { from: -850, to: -1113, ad: 'Khmer kralları (I. Yasovarman, II. Racendravarman)', kisa: 'Yasovarman', kim: 'Angkor şehri ve dev su hazneleri (baray). Cava\'da Borobudur ve Prambanan tamamlandı.' },
      { from: -1113, to: -1150, ad: 'II. Suryavarman', kisa: 'Suryavarman', kim: 'Angkor Wat\'ı Vişnu\'ya adanmış bir tapınak-mezar olarak yaptırdı.' },
      { from: -1150, to: -1181, ad: 'Çam savaşları', kisa: '?', kim: 'Çamlar 1177\'de nehir yoluyla gelip Angkor\'u yağmaladı.' },
      { from: -1181, to: -1218, ad: 'VII. Cayavarman', kisa: 'VII. Cayavarman', kim: 'Çamları kovdu; Angkor Thom\'u ve gülümseyen yüzlü Bayon tapınağını yaptırdı; 102 hastane kurdurdu.' },
      { from: -1218, to: -1293, ad: 'Geç Khmer; Pagan\'ın düşüşü', kisa: 'Khmer', kim: 'Moğollar Pagan\'a saldırdı (1287); Vietnam üç Moğol istilasını püskürttü.' },
      { from: -1293, to: -1350, ad: 'Majapahit: Raden Vicaya', kisa: 'Majapahit', kim: 'Cava\'ya gelen Moğol ordusunu kendi rakiplerine karşı kullanıp sonra kovdu ve Majapahit\'i kurdu.' },
      { from: -1350, to: -1389, ad: 'Hayam Vuruk ve vezir Gajah Mada', kisa: 'Hayam Vuruk', kim: 'Majapahit takımadaların büyük bölümünü etkisi altına aldı.' },
      { from: -1389, to: -1511, ad: 'Ayutthaya kralları ve Malakka sultanları', kisa: 'Malakka', kim: 'Ayutthaya Angkor\'u aldı (1431). Malakka sultanlığı İslam\'ı benimsedi ve boğazın büyük limanı oldu; Zheng He filoları uğradı.' }
    ],
    eras: [
      { from: -800, to: -1000, puan: { eko: 4, ordu: 3, istikrar: 4 }, baskent: 'Cava (Medang), Hariharalaya ve Angkor',
        gundem: 'Cava\'da Şailendralar dünyanın en büyük Budist anıtı Borobudur\'u, Sancayalar Hindu Prambanan tapınaklarını yaptı. Kamboçya\'da Khmer İmparatorluğu kuruldu. Vietnam 938\'de Bach Dang zaferiyle Çin\'den bağımsızlığını kazandı.',
        savas: 'Fil birlikleri ve nehir kayıkları.',
        ekonomi: 'Pirinç fazlası ve dev sulama haznelerine dayalı tapınak devletleri.',
        din: 'Hinduizm ve Mahayana Budizmi; tanrı-kral (devaraca) fikri.',
        yasam: 'Ramayana ve Mahabharata kabartmalara, dansa ve gölge oyununa (wayang) dönüştü.',
        bilgi: 'Borobudur\'un kabartma panelleri yan yana dizilseydi ~6 km uzunluğunda olurdu.' },
      { from: -1000, to: -1300, puan: { eko: 5, ordu: 4, istikrar: 3 }, baskent: 'Angkor, Pagan, Thang Long',
        gundem: 'Angkor 1 milyona yakın nüfusuyla sanayi öncesi dünyanın en büyük şehir bölgesi. Pagan\'da 250 yılda 10.000\'den fazla tapınak yapıldı. Vietnam\'da Ly ve Tran hanedanları Moğolları üç kez geri püskürttü.',
        savas: 'Khmer-Çam savaşları; Vietnamlıların Bach Dang nehrine çaktığı kazıklar Moğol filosunu batırdı (1288).',
        ekonomi: 'Angkor\'un su ağı yılda birkaç pirinç hasadı sağladı. Çin ile seramik ticareti.',
        din: 'Theravada Budizmi Sri Lanka\'dan Pagan\'a ve sonra bütün anakaraya yayıldı.',
        yasam: 'Çinli elçi Zhou Daguan Angkor\'daki günlük hayatı ayrıntıyla anlattı (1296).',
        bilgi: 'Uydu ve lidar taramaları Angkor\'un orman altında Paris\'ten büyük bir alana yayılan şehir planını ortaya çıkardı.' },
      { from: -1300, to: -1511, puan: { eko: 5, ordu: 4, istikrar: 3 }, baskent: 'Trowulan, Ayutthaya, Malakka, Pegu',
        gundem: 'Majapahit Cava\'dan adalara uzanan bir deniz imparatorluğu oldu. Angkor terk edildi; Tay krallığı Ayutthaya yükseldi. Malakka bir İslam sultanlığı ve dünyanın en kalabalık limanlarından biri: Tomé Pires burada 84 dil konuşulduğunu yazdı.',
        savas: 'Tay ve Birman krallıkları arasında savaşlar; Majapahit donanması.',
        ekonomi: 'Baharat (karanfil, muskat) Moluk adalarından Malakka üzerinden Hindistan, Arabistan, Çin ve Avrupa\'ya.',
        din: 'İslam tüccarlar ve sufîler aracılığıyla adalarda yayıldı; anakarada Theravada Budizmi.',
        yasam: 'Malakka\'da Gucerat, Arap, Çin, Cava tüccar mahalleleri.',
        bilgi: 'Bir kilo muskat Moluk adalarında birkaç kuruşa alınıp Londra\'da yüzlerce katına satılabiliyordu.' }
    ],
    nufus: [[-800, 9], [-1000, 11], [-1200, 15], [-1400, 18], [-1511, 22]],
    nufusNot: 'Bütün Güneydoğu Asya için kaba tahminler.',
    dunyaOzet: { eko: 'Hint Okyanusu ve Güney Çin Denizi ticareti baharat, ipek ve porselenle büyüyor.', askeri: 'Filler, nehir donanmaları; Moğol istilaları püskürtüldü.' },
    events: [
      { y: -802, t: 'Khmer İmparatorluğu kuruldu', k: 'm' }, { y: -825, t: 'Borobudur tamamlanıyor', k: 'm' }, { y: -856, t: 'Prambanan', k: 'm' }, { y: -938, t: 'Bach Dang: Vietnam bağımsız', k: 'm' },
      { y: -1044, t: 'Pagan krallığı (Anavrahta)', k: 'm' }, { y: -1113, t: 'Angkor Wat başladı', k: 'm' }, { y: -1177, t: 'Çamlar Angkor\'u yağmaladı', k: 'm' }, { y: -1190, t: 'Bayon', k: 'm' },
      { y: -1288, t: 'Bach Dang: Moğollar yenildi', k: 'm' }, { y: -1293, t: 'Majapahit kuruldu', k: 'm' }, { y: -1351, t: 'Ayutthaya kuruldu', k: 'm' }, { y: -1400, t: 'Malakka kuruldu', k: 'm' },
      { y: -1431, t: 'Ayutthaya Angkor\'u aldı', k: 'm' }, { y: -1405, t: 'Zheng He Malakka\'da', k: 'm' },
      { y: -1071, t: 'Malazgirt', k: 'w' }, { y: -1206, t: 'Cengiz Han', k: 'w' }, { y: -1453, t: 'İstanbul\'un fethi', k: 'w' }
    ],
    world: [{ from: -960, to: -1279, yer: 'Çin', t: 'Song hanedanı.' }, { from: -985, to: -1279, yer: 'Hindistan', t: 'Çolalar Srivicaya\'ya sefer yaptı (1025).' }, { from: -1271, to: -1368, yer: 'Çin', t: 'Yuan (Moğol).' }],
    sites: [{ ad: 'PAGAN', wx: 900 }, { ad: 'SUKHOTHAİ', wx: 1900 }, { ad: 'AYUTTHAYA', wx: 2200 }, { ad: 'ANGKOR', wx: 3200 }, { ad: 'THANG LONG (HANOİ)', wx: 4000 }, { ad: 'ÇAMPA', wx: 4400 }, { ad: 'MALAKKA', wx: 5300 }, { ad: 'BOROBUDUR', wx: 6700 }, { ad: 'TROWULAN (MAJAPAHİT)', wx: 7000 }],
    monuments: [
      { id: 'borobudur', ad: 'Borobudur', yer: 'Orta Cava, Endonezya', wx: 6700, type: 'stupa', teras: 6, b: 190, h: 35, renk: '#9a9080', start: -780, end: -833, vol: 1.5e5 },
      { id: 'prambanan', ad: 'Prambanan', yer: 'Yogyakarta, Endonezya', wx: 6850, type: 'prang', b: 110, h: 47, renk: '#8a8070', start: -850, end: -856, vol: 8e4 },
      { id: 'pagan', ad: 'Pagan: Şvezigon Pagodası', yer: 'Bagan, Myanmar', wx: 900, type: 'stupa', altin: true, b: 70, h: 46, start: -1059, end: -1102, vol: 5e4 },
      { id: 'angkorwat', ad: 'Angkor Wat', yer: 'Siem Reap, Kamboçya', wx: 3200, type: 'prang', b: 220, h: 65, renk: '#a79c86', start: -1113, end: -1150, vol: 2e5 },
      { id: 'bayon', ad: 'Bayon (Angkor Thom)', yer: 'Angkor', wx: 3350, type: 'prang', b: 120, h: 43, renk: '#9a9080', start: -1190, end: -1220, vol: 9e4 }
    ],
    hizli: [{ ad: 'Khmer', y: -802 }, { ad: 'Borobudur', y: -825 }, { ad: 'Bach Dang', y: -938 }, { ad: 'Pagan', y: -1100 }, { ad: 'Angkor Wat', y: -1150 }, { ad: 'Bayon', y: -1200 }, { ad: 'Majapahit', y: -1350 }, { ad: 'Malakka', y: -1450 }],
    bilgi: {
      borobudur: { ikon: '☸️', yaptiran: 'Şailendra hanedanı', donem: '~780-833', mimar: 'Söylenceye göre Gunadharma', sure: '~50 yıl', neden: 'Budist evren düzenini taştan bir dağ olarak göstermek.', onem: 'Dünyanın en büyük Budist anıtı.', teknik: [['Taban', '~123 × 123 m'], ['Kabartma paneli', '2.672'], ['Buda heykeli', '504'], ['Taş', '~55.000 m³ andezit']], nasil: 'Harçsız, birbirine geçmeli taşlar; tepeye spiral yürüyüşle çıkılır.', bugun: 'UNESCO Dünya Mirası (1991).', ilginc: 'Anıt yüzyıllarca yanardağ külü ve orman altında kaldı; 1814\'te Raffles\'ın ekibi yeniden buldu.' },
      prambanan: { ikon: '🛕', yaptiran: 'Sancaya hanedanı (Rakai Pikatan)', donem: '~850-856', mimar: '—', sure: '—', neden: 'Hindu üçlüsü Brahma, Vişnu ve Şiva\'ya adanmış.', onem: 'Endonezya\'nın en büyük Hindu tapınağı.', teknik: [['Ana kule', '47 m'], ['Tapınak', '240 (ilk hâli)']], nasil: 'Sivri, ince kuleler; Ramayana kabartmaları.', bugun: 'UNESCO Dünya Mirası (1991); 2006 depreminde hasar gördü.', ilginc: 'Söylenceye göre bir prens, prensese bir gecede 1.000 tapınak yapacağına söz verdi; 999\'da kaldı.' },
      pagan: { ikon: '🟡', yaptiran: 'Kral Anavrahta ve Kyanzittha', donem: '1059-1102', mimar: '—', sure: '—', neden: 'Buda\'nın kalıntılarını korumak.', onem: 'Birman stupalarının örneği.', teknik: [['Pagan\'daki tapınaklar', '10.000+ (bugün ~2.200)']], nasil: 'Tuğla, altın varak kaplı çan biçimli stupa.', bugun: 'Bagan UNESCO Dünya Mirası (2019).', ilginc: 'Bagan ovasında gün doğumunda sıcak hava balonlarıyla binlerce tapınak izlenir.' },
      angkorwat: { ikon: '🛕', yaptiran: 'II. Suryavarman', donem: '1113-1150', mimar: 'Divakarapandita (danışman)', sure: '~35 yıl', neden: 'Vişnu tapınağı ve kralın mezarı.', onem: 'Dünyanın en büyük dinî yapısı; Kamboçya bayrağında.', teknik: [['Alan', '~162 hektar'], ['Ana kule', '65 m'], ['Hendek', '190 m genişlik']], nasil: 'Kumtaşı bloklar 40 km uzaktaki Kulen dağlarından kanallarla getirildi; 5 kule Meru Dağı\'nı simgeler.', bugun: 'UNESCO Dünya Mirası (1992); 12. yüzyıldan beri kesintisiz ibadet yeri.', ilginc: 'Batıya bakan tek büyük Khmer tapınağı; ilkbahar ekinoksunda güneş tam ana kulenin üstünden doğar.' },
      bayon: { ikon: '🙂', yaptiran: 'VII. Cayavarman', donem: '12. yy sonu – 13. yy başı', mimar: '—', sure: '—', neden: 'Angkor Thom\'un merkezindeki Budist tapınak.', onem: '200\'den fazla gülümseyen taş yüz.', teknik: [['Yüz kulesi', '~49']], nasil: 'Her kulede dört yöne bakan dev yüzler.', bugun: 'Angkor Arkeoloji Parkı.', ilginc: 'Yüzlerin kralın kendisini Bodhisattva olarak gösterdiği düşünülüyor.' }
    },
    ulke: [
      { ad: 'Genel bakış', ikon: '🧭', html: '<p>800-1500 arası Güneydoğu Asya\'nın <b>tapınak krallıkları</b> çağıdır. Cava\'da Borobudur, Kamboçya\'da Angkor, Myanmar\'da Pagan yükseldi. Vietnam Çin\'den bağımsızlığını kazandı. 14-15. yüzyıllarda <b>Majapahit</b> ve <b>Malakka</b> deniz ticaretine hükmetti; İslam adalara yayıldı.</p>' }
    ]
  });

  // ================= 3. SÖMÜRGELER VE BAĞIMSIZLIK =================
  window.PLACES.push({
    id: 'gdasya-modern', sira: 3, modern: true, kisa: 'Sömürgelerden bağımsızlığa', aralikAd: 'MS 1511 – bugün',
    baslik: 'Portekiz Malakka\'sı · Hollanda Doğu Hindistan Şirketi · Siam · Vietnam Savaşı · Singapur',
    ulkeAlt: 'Baharat için gelen Avrupalılardan sömürge yönetimine, bağımsızlık savaşlarından bugünkü ASEAN\'a (MS 1511 – bugün)',
    from: -1511, to: -2026, start: -1700,
    not: 'Tarihler kesindir.', baskent: 'Ayutthaya, Bangkok, Hue, Batavia, Manila; bugün Bangkok, Hanoi, Cakarta, Manila, Kuala Lumpur, Singapur',
    sahne: { kizak: false, buhar: -1870, oto: -1920, ucak: -1935, turist: -1980, giyim: [[-1511, 'cubbe'], [-1940, 'modern']] },
    dynasties: [{ from: -1511, to: -1800, ad: 'Avrupa ticaret kolonileri', renk: '#7a5a2a' }, { from: -1800, to: -1945, ad: 'Sömürge çağı', renk: '#5a4a6a' }, { from: -1945, to: -1975, ad: 'Bağımsızlık savaşları', renk: '#a82a2a' }, { from: -1975, to: -2026, ad: 'ASEAN çağı', renk: '#2a7aa8' }],
    rulers: [
      { from: -1511, to: -1571, ad: 'Portekiz Malakka\'sı ve yerel sultanlar', kisa: 'Portekiz', kim: 'Afonso de Albuquerque Malakka\'yı aldı (1511). Magellan\'ın gemileri Filipinler\'e ulaştı (1521).' },
      { from: -1571, to: -1619, ad: 'İspanyol Manila\'sı; Ayutthaya', kisa: 'Manila', kim: 'Manila kuruldu (1571); kalyonlar Meksika gümüşünü Çin ipeğiyle takas etti: ilk küresel ticaret ağı.' },
      { from: -1619, to: -1767, ad: 'Hollanda Doğu Hindistan Şirketi (VOC) ve Ayutthaya', kisa: 'VOC', kim: 'Hollandalılar Batavia\'yı (Cakarta) kurdu ve baharat tekeli için Banda adalarında kıyım yaptı. Birmanlar Ayutthaya\'yı yıktı (1767).' },
      { from: -1767, to: -1868, ad: 'Siam\'da Çakri, Vietnam\'da Nguyen hanedanı', kisa: 'Çakri', kim: 'Bangkok kuruldu (1782). Singapur İngiliz limanı oldu (1819).' },
      { from: -1868, to: -1910, ad: 'Kral V. Rama (Çulalongkorn)', kisa: 'V. Rama', kim: 'Reformlarla Siam\'ı modernleştirdi; Tayland bölgede hiç sömürge olmayan tek ülke kaldı.' },
      { from: -1910, to: -1945, ad: 'Sömürge yönetimleri ve Japon işgali', kisa: 'Sömürgeler', kim: 'Fransız Çinhindi, İngiliz Malaya ve Birmanya, Hollanda Doğu Hint Adaları, ABD Filipinleri; 1941-45 Japon işgali.' },
      { from: -1945, to: -1975, ad: 'Bağımsızlık önderleri (Sukarno, Ho Chi Minh, Aung San)', kisa: 'Ho Chi Minh', kim: 'Endonezya (1945), Filipinler (1946), Birmanya (1948), Malaya (1957). Vietnam\'da Fransa\'ya (1954) ve ABD\'ye karşı savaş (1975\'e kadar).' },
      { from: -1975, to: -2026, ad: 'ASEAN ülkeleri', kisa: 'ASEAN', kim: 'Kızıl Kmerler kıyımı (1975-1979); sonra hızlı büyüme: Singapur, Malezya, Vietnam ekonomileri.' }
    ],
    eras: [
      { from: -1511, to: -1800, puan: { eko: 4, ordu: 3, istikrar: 3 }, baskent: 'Ayutthaya, Pegu, Batavia, Manila, Malakka',
        gundem: 'Avrupalılar baharat için geldi: önce Portekizliler, sonra İspanyollar ve Hollandalılar. Anakarada Ayutthaya Asya\'nın büyük ticaret şehirlerinden; Birman ve Tay krallıkları savaşıyor. Filipinler Katolik oldu.',
        savas: 'Avrupa topları ve kaleleri; Birman orduları Ayutthaya\'yı yıktı (1767).',
        ekonomi: 'Karanfil, muskat, biber; Manila kalyonları gümüşü Çin\'e taşıdı.',
        din: 'Adalarda İslam, Filipinler\'de Katoliklik, anakarada Theravada Budizmi.',
        yasam: 'Ayutthaya\'da Japon, Portekiz, Fars ve Çin mahalleleri.',
        bilgi: 'Hollandalılar 1667\'de Banda adalarından Run\'u alıp İngilizlere Manhattan\'ı (Yeni Amsterdam) verdiler: muskat o kadar değerliydi.' },
      { from: -1800, to: -1945, puan: { eko: 3, ordu: 2, istikrar: 2 }, baskent: 'Bangkok, Hue, Batavia, Manila, Rangun, Singapur',
        gundem: 'Avrupalı güçler Tayland dışındaki her yeri sömürge yaptı. Kauçuk, kalay, şeker, kahve plantasyonları; Hollandalıların "zorunlu ekim sistemi". 1941\'de Japonya bölgeyi işgal etti.',
        savas: 'Aceh Savaşı (1873-1904); Filipin-Amerikan Savaşı (1899-1902).',
        ekonomi: 'Malaya dünyanın kauçuk ve kalayının önemli kısmını üretti.',
        din: 'Misyoner okulları; İslami reform hareketleri.',
        yasam: 'Milliyetçi aydınlar: José Rizal\'ın romanları (1887).',
        bilgi: 'Krakatau yanardağı 1883\'te patladığında sesi 4.800 km ötede duyuldu: kayıtlı tarihin en yüksek sesi sayılıyor.' },
      { from: -1945, to: -1975, puan: { eko: 2, ordu: 3, istikrar: 1 }, baskent: 'Cakarta, Hanoi, Saigon, Manila, Rangun, Kuala Lumpur',
        gundem: 'Japonya\'nın yenilgisinden sonra bağımsızlık savaşları. Endonezya Hollanda\'yla dört yıl savaştı. Vietnam Fransızları Dien Bien Phu\'da yendi (1954), sonra ikiye bölündü; Vietnam Savaşı ABD\'nin çekilmesi ve Saigon\'un düşüşüyle bitti (1975).',
        savas: 'Vietnam Savaşı\'nda 2-3 milyon ölü; Laos tarihin en çok bombalanan ülkelerinden.',
        ekonomi: 'Savaşlar ve darbelerle sarsılan ekonomiler; ASEAN kuruldu (1967).',
        din: 'Endonezya dünyanın en kalabalık Müslüman ülkesi.',
        yasam: 'Singapur 1965\'te Malezya\'dan ayrıldı.',
        bilgi: 'Laos\'a 1964-1973 arasında ~2 milyon ton bomba atıldı; patlamamış bombalar hâlâ temizleniyor.' },
      { from: -1975, to: -2026, puan: { eko: 5, ordu: 3, istikrar: 3 }, baskent: 'Bangkok, Hanoi, Cakarta, Manila, Kuala Lumpur, Singapur',
        gundem: 'Kamboçya\'da Kızıl Kmerler yaklaşık 1,5-2 milyon kişinin ölümüne yol açtı. 1990\'lardan sonra bölge hızla büyüdü: Singapur dünyanın en zengin ülkelerinden, Vietnam bir üretim merkezi. Endonezya başkentini Borneo\'daki Nusantara\'ya taşıyor.',
        savas: 'Myanmar\'da 2021 darbesinden sonra iç savaş.',
        ekonomi: 'Elektronik, tekstil, turizm; Singapur ve Malakka Boğazı dünya deniz ticaretinin kalbi.',
        din: 'Budizm, İslam, Hristiyanlık, Hinduizm (Bali).',
        yasam: 'Sokak yemekleri, mega şehirler: Cakarta, Manila, Bangkok.',
        bilgi: 'Dünyada taşınan malların yaklaşık dörtte biri Malakka Boğazı\'ndan geçiyor.' }
    ],
    nufus: [[-1511, 22], [-1700, 28], [-1800, 32], [-1900, 83], [-1950, 180], [-2000, 520], [-2026, 690]],
    nufusNot: 'Bütün Güneydoğu Asya (Endonezya ~285 milyon, Filipinler ~117, Vietnam ~101, Tayland ~72).',
    dunyaOzet: { eko: 'Baharat Avrupa\'yı okyanuslara çıkardı; 20. yüzyılda kauçuk, petrol ve sonra elektronik.', askeri: 'Sömürge orduları; Vietnam Savaşı.' },
    events: [
      { y: -1511, t: 'Portekizliler Malakka\'yı aldı', k: 'm' }, { y: -1521, t: 'Magellan Filipinler\'de öldü', k: 'm' }, { y: -1571, t: 'Manila kuruldu', k: 'm' }, { y: -1619, t: 'Batavia kuruldu', k: 'm' },
      { y: -1767, t: 'Ayutthaya yıkıldı', k: 'm' }, { y: -1782, t: 'Bangkok kuruldu', k: 'm' }, { y: -1819, t: 'Singapur limanı', k: 'm' }, { y: -1883, t: 'Krakatau patladı', k: 'm' },
      { y: -1887, t: 'Fransız Çinhindi', k: 'm' }, { y: -1941, t: 'Japon işgali', k: 'm' }, { y: -1945, t: 'Endonezya bağımsızlığını ilan etti', k: 'm' }, { y: -1954, t: 'Dien Bien Phu', k: 'm' },
      { y: -1967, t: 'ASEAN kuruldu', k: 'm' }, { y: -1975, t: 'Saigon\'un düşüşü; Kızıl Kmerler', k: 'm' }, { y: -2004, t: 'Hint Okyanusu tsunamisi', k: 'm' },
      { y: -1492, t: 'Kolomb', k: 'w' }, { y: -1945, t: 'İkinci Dünya Savaşı bitti', k: 'w' }, { y: -1991, t: 'SSCB dağıldı', k: 'w' }
    ],
    world: [{ from: -1526, to: -1857, yer: 'Hindistan', t: 'Babürler.' }, { from: -1644, to: -1912, yer: 'Çin', t: 'Qing.' }, { from: -1945, to: -1991, yer: 'Dünya', t: 'Soğuk Savaş.' }],
    sites: [{ ad: 'YANGON', wx: 1200 }, { ad: 'AYUTTHAYA', wx: 2200 }, { ad: 'BANGKOK', wx: 2300 }, { ad: 'PHNOM PENH', wx: 3400 }, { ad: 'HANOİ', wx: 4000 }, { ad: 'HUE', wx: 4300 }, { ad: 'SAİGON', wx: 4700 }, { ad: 'MALAKKA', wx: 5300 }, { ad: 'SİNGAPUR', wx: 5600 }, { ad: 'CAKARTA (BATAVİA)', wx: 6400 }, { ad: 'BALİ', wx: 7200 }, { ad: 'MANİLA', wx: 7800 }],
    monuments: [
      { id: 'shwedagon', ad: 'Şwedagon Pagodası', yer: 'Yangon, Myanmar', wx: 1200, type: 'stupa', altin: true, b: 80, h: 99, start: -1453, end: -1472, vol: 7e4 },
      { id: 'buyuksaray', ad: 'Bangkok Büyük Saray ve Zümrüt Buda Tapınağı', yer: 'Bangkok', wx: 2300, type: 'pagoda', kat: 3, renk: '#e8d8a0', cati: '#c84a2a', b: 120, h: 40, start: -1782, end: -1784, vol: 6e4 },
      { id: 'singapur', ad: 'Singapur', yer: 'Singapur', wx: 5600, type: 'modcity', b: 400, h: 140, n: 44, start: -1965, end: -2015, vol: 1e5 },
      { id: 'kualalumpur', ad: 'Kuala Lumpur ve Petronas Kuleleri', yer: 'Malezya', wx: 5400, type: 'modcity', b: 360, h: 180, n: 36, start: -1985, end: -1998, vol: 8e4 }
    ],
    hizli: [{ ad: 'Malakka', y: -1511 }, { ad: 'Manila', y: -1571 }, { ad: 'Batavia', y: -1619 }, { ad: 'Ayutthaya', y: -1700 }, { ad: 'Bangkok', y: -1782 }, { ad: 'Singapur', y: -1819 }, { ad: 'Krakatau', y: -1883 }, { ad: 'Bağımsızlık', y: -1945 }, { ad: 'Vietnam Savaşı', y: -1968 }, { ad: 'Bugün', y: -2026 }],
    bilgi: {
      shwedagon: { ikon: '🟡', yaptiran: 'Mon ve Birman kralları; bugünkü hâli 15. yy (Kraliçe Şin Savbu)', donem: 'Söylenceye göre 2.500 yıllık; bugünkü hâli 15. yy', mimar: '—', sure: '—', neden: 'Buda\'nın saç tellerinin saklandığına inanılan stupa.', onem: 'Myanmar\'ın en kutsal Budist mabedi.', teknik: [['Yükseklik', '~99 m'], ['Tepedeki elmas', '76 karat']], nasil: 'Tuğla stupa binlerce altın levhayla kaplı.', bugun: 'Yangon\'un simgesi.', ilginc: 'Kraliçe Şin Savbu stupayı kendi ağırlığı kadar altınla kaplattı.' },
      buyuksaray: { ikon: '👑', yaptiran: 'I. Rama', donem: '1782\'den', mimar: '—', sure: '—', neden: 'Yeni başkent Bangkok\'un sarayı.', onem: 'Tayland\'ın en kutsal Buda heykeli (Zümrüt Buda) burada.', teknik: [['Alan', '~218.000 m²']], nasil: 'Tay, Çin ve Avrupa mimarisi; altın ve çini mozaik süslemeler.', bugun: 'Törenlerde kullanılıyor; müze.', ilginc: 'Zümrüt Buda aslında yeşil yeşimden; kral onun giysisini yılda üç kez mevsime göre değiştirir.' },
      singapur: { ikon: '🦁', yaptiran: '—', donem: '1819 İngiliz limanı; 1965 bağımsız', mimar: '—', sure: '—', neden: 'Malakka Boğazı\'nın ucunda serbest liman.', onem: 'Dünyanın en işlek limanlarından ve en zengin ülkelerinden.', teknik: [['Nüfus', '~6 milyon'], ['Alan', '~735 km²']], nasil: 'Denizden toprak kazanılarak %25 büyüdü.', bugun: 'Şehir devleti.', ilginc: 'Singapur\'da sakız satmak 1992\'den beri yasak (tıbbi sakız hariç).' },
      kualalumpur: { ikon: '🏙️', yaptiran: '—', donem: '1857 kalay madenci kasabası', mimar: 'Petronas: César Pelli', sure: '—', neden: 'Kalay madenleri.', onem: 'Malezya\'nın başkenti.', teknik: [['Petronas Kuleleri', '452 m, 1998']], nasil: 'İki nehrin birleştiği yerde; adı "çamurlu kavşak" demek.', bugun: '~2 milyon (metropol ~8 milyon).', ilginc: 'Petronas Kuleleri 1998-2004 arası dünyanın en yüksek binasıydı; kat planı İslami sekiz köşeli yıldıza dayanır.' }
    },
    ulke: [
      { ad: 'Genel bakış', ikon: '🧭', html: '<p>1511\'de Portekizliler Malakka\'yı aldı; ardından İspanyollar, Hollandalılar, İngilizler ve Fransızlar geldi. 20. yüzyıl başında <b>Tayland</b> dışındaki bütün bölge sömürgeydi. İkinci Dünya Savaşı\'ndan sonra bağımsızlık savaşları ve <b>Vietnam Savaşı</b> yaşandı. Bugün bölge 690 milyon kişiyle hızla büyüyen bir ekonomi.</p>' },
      { ad: 'Bugünkü ülkeler', ikon: '🗺️', html: '<ul><li>Anakara: Myanmar, Tayland, Laos, Kamboçya, Vietnam</li><li>Denizler: Malezya, Singapur, Endonezya, Brunei, Filipinler, Doğu Timor</li></ul>' }
    ]
  });

  window.BOLGE_TASI('gdasya');

  window.MISIR = {
    coords: { oceo: [10.25, 105.15], borobudur: [-7.6079, 110.2038], prambanan: [-7.752, 110.4915], pagan: [21.1942, 94.894], angkorwat: [13.4125, 103.867], bayon: [13.4412, 103.8591], shwedagon: [16.7983, 96.1497], buyuksaray: [13.75, 100.4913], singapur: [1.2834, 103.8607], kualalumpur: [3.1579, 101.7116] },
    wiki: { oceo: 'Óc Eo', borobudur: 'Borobudur', prambanan: 'Prambanan', pagan: 'Shwezigon Pagoda', angkorwat: 'Angkor Wat', bayon: 'Bayon', shwedagon: 'Shwedagon Pagoda', buyuksaray: 'Grand Palace', singapur: 'Singapore', kualalumpur: 'Petronas Towers' },
    bilgi: {}, alt: {},
    kureAdlari: [[12, 113, 'GÜNEY ÇİN DENİZİ', 'deniz', 2.8], [5, 95, 'ANDAMAN DENİZİ', 'deniz', 3.4], [-5, 112, 'CAVA DENİZİ', 'deniz', 3.4], [14, 102, 'ÇİNHİNDİ', 'bolge', 3.0], [-2, 115, 'ENDONEZYA', 'misir', 2.8], [12.5, 122, 'FİLİPİNLER', 'bolge', 3.2], [2.5, 101.5, 'Malakka Boğazı', 'kucuk', 4.2], [12, 105.8, 'Mekong', 'nehir', 5]],
    sehirler: [
      { ad: 'Angkor', ll: [13.4125, 103.867], from: -889, to: -1431, b: [[-889, -1431]], not: 'Khmer İmparatorluğu\'nun başkenti.' },
      { ad: 'Pagan (Bagan)', ll: [21.1717, 94.8585], from: -849, to: -2026, b: [[-1044, -1287]], not: 'Pagan krallığının başkenti.' },
      { ad: 'Ayutthaya', ll: [14.3532, 100.5689], from: -1351, to: -2026, b: [[-1351, -1767]], not: 'Siam krallığının başkenti.' },
      { ad: 'Bangkok', ll: [13.7563, 100.5018], from: -1400, to: -2026, b: [[-1782, -2026]], not: 'Tayland\'ın başkenti.' },
      { ad: 'Hanoi (Thang Long)', ll: [21.0278, 105.8342], from: -1010, to: -2026, b: [[-1010, -1802], [-1945, -2026]], not: 'Vietnam\'ın başkenti.' },
      { ad: 'Hue', ll: [16.4637, 107.5909], from: -1307, to: -2026, b: [[-1802, -1945]], not: 'Nguyen hanedanının başkenti.' },
      { ad: 'Malakka', ll: [2.1896, 102.2501], from: -1400, to: -2026, b: [[-1400, -1511]], not: 'Malakka Sultanlığı.' },
      { ad: 'Palembang', ll: [-2.9761, 104.7754], from: -650, to: -2026, b: [[-670, -1025]], not: 'Srivicaya başkenti.' },
      { ad: 'Cakarta (Batavia)', ll: [-6.2088, 106.8456], from: -1527, to: -2026, b: [[-1619, -1942], [-1949, -2024]], not: 'Endonezya\'nın başkenti.' },
      { ad: 'Manila', ll: [14.5995, 120.9842], from: -1258, to: -2026, b: [[-1571, -2026]], not: 'Filipinler\'in başkenti.' },
      { ad: 'Singapur', ll: [1.3521, 103.8198], from: -1299, to: -2026, b: [[-1965, -2026]], not: 'Şehir devleti.' },
      { ad: 'Yangon', ll: [16.8409, 96.1735], from: -1028, to: -2026, b: [[-1885, -2005]], not: 'Myanmar\'ın en büyük şehri.' }
    ],
    nil: { ikon: '🌊', title: 'Mekong ve muson', sub: 'Pirinç, yağmur ve denizler', foto: 'Mekong', tabs: [{ ad: '🌊 Sular', html: '<ul class="hap"><li><b>Mekong</b> (~4.900 km) Tibet\'ten doğup altı ülkeden geçerek Vietnam\'da denize ulaşır; dünyanın en büyük tatlı su balıkçılığı.</li><li>Kamboçya\'daki <b>Tonle Sap</b> gölü muson mevsiminde 5 kat büyür; nehir yönünü tersine çevirir.</li><li>Endonezya 17.000\'den fazla adadan oluşur; "Ateş Çemberi" üzerindedir.</li><li>Muson yağmurları pirinci besler: bölgenin temel besini.</li></ul>' }] },
    simgeler: [
      { id: 'ga-davul', ad: 'Dong Son davulları', ikon: '🥁', wiki: 'Dong Son drums', git: { place: 'gdasya-antik', y: 500 }, ozet: 'Tunç törensel davullar.', hap: ['MÖ ~600 - MS 200.', 'Kuzey Vietnam.'] },
      { id: 'ga-borobudur', ad: 'Borobudur', ikon: '☸️', wiki: 'Borobudur', git: { place: 'gdasya-klasik', y: -825, id: 'borobudur' }, ozet: 'En büyük Budist anıt.', hap: ['9. yy.', '504 Buda.'] },
      { id: 'ga-angkor', ad: 'Angkor Wat', ikon: '🛕', wiki: 'Angkor Wat', git: { place: 'gdasya-klasik', y: -1150, id: 'angkorwat' }, ozet: 'Dünyanın en büyük dinî yapısı.', hap: ['1113-1150.', 'Kamboçya bayrağında.'] },
      { id: 'ga-pagan', ad: 'Bagan', ikon: '🟡', wiki: 'Bagan', git: { place: 'gdasya-klasik', y: -1100, id: 'pagan' }, ozet: 'Binlerce tapınaklı ova.', hap: ['11-13. yy.', '~2.200 tapınak.'] },
      { id: 'ga-baharat', ad: 'Baharat ticareti', ikon: '🌶️', wiki: 'Spice trade', git: { place: 'gdasya-modern', y: -1619 }, ozet: 'Dünyayı keşfe çıkaran baharatlar.', hap: ['Karanfil, muskat.', 'Moluk adaları.'] },
      { id: 'ga-singapur', ad: 'Singapur', ikon: '🦁', wiki: 'Singapore', git: { place: 'gdasya-modern', y: -2015, id: 'singapur' }, ozet: 'Aslan şehir.', hap: ['1965 bağımsız.', 'Dünya limanı.'] }
    ],
    bugun: '<p>Güneydoğu Asya\'da 11 ülke ve ~690 milyon kişi yaşıyor. <b>Endonezya</b> (~285 milyon) dünyanın en kalabalık dördüncü ülkesi ve en büyük Müslüman nüfusu.</p><ul class="hap"><li><b>ASEAN:</b> 10 üye ülkelik birlik (1967).</li><li><b>Ekonomi:</b> elektronik, palmiye yağı, kauçuk, turizm.</li><li><b>Din:</b> İslam, Budizm, Hristiyanlık (Filipinler), Hinduizm (Bali).</li><li><b>Biyoçeşitlilik:</b> dünyanın en zengin yağmur ormanlarından ve mercan resiflerinden.</li></ul>'
  };
  window.SEHIR_BILGI = {
    'Angkor': { bugun: 'Siem Reap, Kamboçya', kurulus: '~889 (Yasodharapura)', wiki: 'Angkor', onem: 'Sanayi öncesi dünyanın en büyük şehir bölgesi.', ilginc: 'Angkor\'un terk edilmesinde 14-15. yüzyıldaki uzun kuraklıklar ve şiddetli musonların su sistemini bozmasının rolü olduğu düşünülüyor.' },
    'Bangkok': { bugun: 'Bangkok, Tayland', kurulus: '1782 (başkent)', wiki: 'Bangkok', onem: 'Tayland\'ın başkenti.', ilginc: 'Şehrin tam Tayca adı dünyanın en uzun yer adlarından: 168 harf.' },
    'Malakka': { bugun: 'Malakka, Malezya', kurulus: '~1400 (Parameswara)', wiki: 'Malacca City', onem: 'Baharat yolunun anahtarı.', ilginc: 'Kurucusu Parameswara söylenceye göre bir fare geyiğinin avcı köpeğini yendiğini görüp burayı uğurlu saydı.' }
  };
  window.KULTUR = { tanrilar: [], olumler: [], roller: [], mumyalama: '', ic: { eslesme: {}, sahneler: {} }, bilim: { genel: '', cag: {} } };
  window.SINIRLAR = [];

  window.OLAYLAR = [
    { id: 'bachdang938', tur: 'savas', ad: 'Bach Dang Savaşı (938)', y: -938, ll: [20.9, 106.75], onem: 4, wiki: 'Battle of Bạch Đằng (938)', taraflar: ['Vietnamlılar (Ngô Quyền)', 'Güney Han (Çin)'], kazanan: 'Vietnamlılar', sonuc: 'Vietnam bin yıllık Çin yönetiminden kurtuldu.' },
    { id: 'bachdang1288', tur: 'savas', ad: 'Bach Dang Savaşı (1288)', y: -1288, ll: [20.9, 106.75], onem: 4, wiki: 'Battle of Bạch Đằng (1288)', taraflar: ['Dai Viet (Tran Hung Dao)', 'Yuan (Moğollar)'], kazanan: 'Dai Viet', sonuc: 'Nehre çakılan kazıklar Moğol filosunu batırdı.' },
    { id: 'malakka1511', tur: 'savas', ad: 'Malakka\'nın fethi', y: -1511, ll: [2.19, 102.25], onem: 4, wiki: 'Capture of Malacca (1511)', taraflar: ['Portekiz (Albuquerque)', 'Malakka Sultanlığı'], kazanan: 'Portekiz', sonuc: 'Avrupa sömürge çağı Güneydoğu Asya\'da başladı.' },
    { id: 'dienbienphu', tur: 'savas', ad: 'Dien Bien Phu', y: -1954, ll: [21.39, 103.02], onem: 5, wiki: 'Battle of Dien Bien Phu', taraflar: ['Viet Minh (Vo Nguyen Giap)', 'Fransa'], kazanan: 'Viet Minh', sonuc: 'Fransız Çinhindi sona erdi; Vietnam ikiye bölündü.' },
    { id: 'vietnamsavasi', tur: 'savas', ad: 'Vietnam Savaşı', y: -1965, ll: [16.0, 107.5], onem: 5, wiki: 'Vietnam War', taraflar: ['Kuzey Vietnam ve Viet Cong', 'Güney Vietnam ve ABD'], kazanan: 'Kuzey Vietnam', sonuc: '1975\'te Saigon düştü; Vietnam birleşti.' },
    { id: 'aseankurulus', tur: 'antlasma', ad: 'ASEAN Bildirgesi', y: -1967, ll: [13.75, 100.5], onem: 4, wiki: 'ASEAN Declaration', taraflar: ['Endonezya, Malezya, Filipinler, Singapur, Tayland'], sonuc: 'Güneydoğu Asya Ülkeleri Birliği kuruldu.' },
    { id: 'tambora', tur: 'afet', alt: 'yanardag', ad: 'Tambora patlaması', y: -1815, ll: [-8.25, 118.0], onem: 5, wiki: '1815 eruption of Mount Tambora', sonuc: 'Kayıtlı tarihin en büyük patlaması; 1816 Avrupa ve Amerika\'da "yazsız yıl" oldu.' },
    { id: 'krakatau', tur: 'afet', alt: 'yanardag', ad: 'Krakatau patlaması', y: -1883, ll: [-6.1, 105.42], onem: 5, wiki: '1883 eruption of Krakatoa', sonuc: 'Tsunamiler ~36.000 kişiyi öldürdü; gökyüzü yıllarca kızıl gün batımlarıyla renklendi.' },
    { id: 'kizilkmer', tur: 'olay', ad: 'Kızıl Kmer rejimi', y: -1975, ll: [11.56, 104.92], onem: 5, wiki: 'Khmer Rouge', sonuc: 'Şehirler boşaltıldı; 1975-1979 arası ~1,5-2 milyon kişi öldü.' },
    { id: 'angkorkuruldu', tur: 'olay', ad: 'Khmer İmparatorluğu kuruldu', y: -802, ll: [13.48, 104.07], onem: 4, wiki: 'Jayavarman II', sonuc: 'II. Cayavarman Kulen Dağı\'nda evrensel hükümdar ilan edildi.' }
  ];

  window.ULKE_SAYFA = window.ULKE_SAYFA || {};
  window.ULKE_SAYFA.gdasya = {
    id: 'gdasya', ad: 'Güneydoğu Asya', ikon: '🛕', kw: ['güneydoğu asya', 'tayland', 'vietnam', 'kamboçya', 'endonezya', 'malezya', 'singapur', 'filipinler', 'myanmar', 'angkor', 'borobudur', 'bagan', 'cava', 'malakka'],
    altBaslik: 'MÖ ~1000 – bugün · tunç davullardan Angkor\'a, baharattan Singapur\'a', kapakWiki: 'Angkor Wat', kapakAd: 'Angkor Wat', merkez: [10, 108], merkezZ: 3.8,
    ozet: ['<b>Güneydoğu Asya</b> Hindistan ile Çin\'in arasındaki yarımada ve adalardır. Hint kültürü limanlar yoluyla yayıldı; Angkor, Borobudur ve Bagan gibi dev tapınaklar yapıldı.', 'Baharat Avrupalıları buraya çekti; 20. yüzyıl başında Tayland dışında her yer sömürgeydi. Bağımsızlık savaşlarından sonra bölge hızla büyüdü.'],
    bilgiKutusu: [['Tarih', 'MÖ ~1000 – bugün'], ['Önemli başkentler', 'Oc Eo, Palembang, Angkor, Pagan, Ayutthaya, Malakka, Batavia, Bangkok'], ['Diller', 'Malayca/Endonezce, Tayca, Vietnamca, Birmanca, Khmer, Tagalogca'], ['Bugün', '11 ülke, ~690 milyon kişi']],
    donemler: { 'gdasya-antik': 'Dong Son, Funan, Srivicaya.', 'gdasya-klasik': 'Angkor, Borobudur, Pagan, Majapahit, Malakka.', 'gdasya-modern': 'Sömürgeler, bağımsızlık, ASEAN.' },
    kultur: [{ baslik: 'Diller', ikon: '🗣️', html: '<p>Avustronezya dilleri (Malayca, Cava dili, Tagalogca), Tay-Kadai (Tayca, Laoca), Avustroasya (Vietnamca, Khmerce), Tibet-Birman (Birmanca).</p>' }, { baslik: 'Din', ikon: '🛕', html: '<p>Hinduizm ve Budizm Hindistan\'dan geldi; anakarada Theravada Budizmi, adalarda İslam, Filipinler\'de Katoliklik, Bali\'de Hinduizm.</p>' }],
    figurler: [
      { id: 'angkorwat', ad: 'Angkor Wat', tur: 'yapı', wiki: 'Angkor Wat', ll: [13.4125, 103.867], z: 80, yapim: '1113-1150', kim: 'II. Suryavarman', durum: 'ayakta', durumYazi: 'Ayakta.', nerede: 'Kamboçya', metin: 'Dev Khmer tapınağı.', git: { place: 'gdasya-klasik', y: -1150, id: 'angkorwat' } },
      { id: 'borobudur', ad: 'Borobudur', tur: 'yapı', wiki: 'Borobudur', ll: [-7.6079, 110.2038], z: 80, yapim: '~780-833', kim: 'Şailendralar', durum: 'ayakta', durumYazi: 'Ayakta.', nerede: 'Cava', metin: 'En büyük Budist anıt.', git: { place: 'gdasya-klasik', y: -825, id: 'borobudur' } }
    ],
    kisiler: [
      { ad: 'Trung kardeşler', wiki: 'Trưng sisters', yil: '~12-43', ozet: 'Çin\'e karşı ayaklanan Vietnamlı kardeşler.', y: -40 }, { ad: 'VII. Cayavarman', wiki: 'Jayavarman VII', yil: '~1122-1218', ozet: 'Bayon\'un kralı.', y: -1190 },
      { ad: 'Gajah Mada', wiki: 'Gajah Mada', yil: '~1290-1364', ozet: 'Majapahit veziri.', y: -1340 }, { ad: 'José Rizal', wiki: 'José Rizal', yil: '1861-1896', ozet: 'Filipin milliyetçisi yazar.', y: -1887 },
      { ad: 'V. Rama', wiki: 'Chulalongkorn', yil: '1853-1910', ozet: 'Siam\'ı modernleştiren kral.', y: -1890 }, { ad: 'Ho Chi Minh', wiki: 'Ho Chi Minh', yil: '1890-1969', ozet: 'Vietnam bağımsızlık önderi.', y: -1945 },
      { ad: 'Sukarno', wiki: 'Sukarno', yil: '1901-1970', ozet: 'Endonezya\'nın ilk cumhurbaşkanı.', y: -1945 }, { ad: 'Lee Kuan Yew', wiki: 'Lee Kuan Yew', yil: '1923-2015', ozet: 'Modern Singapur\'un kurucusu.', y: -1965 }
    ],
    biliyorMuydunuz: ['"Amok koşmak" deyimi Malayca "amok" kelimesinden gelir.', 'Komodo ejderi yalnızca Endonezya\'nın birkaç adasında yaşar.', 'Vietnam dünyanın en büyük kahve üreticilerinden biri.', 'Kamboçya bayrağında bir binanın (Angkor Wat) bulunduğu az sayıdaki bayraklardan biri.']
  };
})();
