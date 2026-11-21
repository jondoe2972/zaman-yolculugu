// Mezoamerika ve Karayipler (bugünkü Meksika, Guatemala, Belize, Honduras, El Salvador, Nikaragua, Kosta Rika, Panama, Küba, Haiti, Dominik, Jamaika...).
// Yıl: MÖ pozitif, MS negatif. Sahne (wx): kuzeybatıdan güneydoğuya, sonra Karayipler
//   Kuzey Meksika 600 · Guadalajara 1400 · Tula 2300 · Teotihuacan 2700 · Tenochtitlan 2900 · Cholula 3200 · Monte Albán 3600
//   La Venta 4300 · Palenque 4800 · Chichén Itzá 5200 · Tikal 5600 · Copán 6000 · Panama 6700 · Havana 7200 · Hispaniola 7700
// Kaynaklar: Coe & Houston, "The Maya" (2015); Martin & Grube, "Chronicle of the Maya Kings and Queens" (2008);
//   Townsend, "Fifth Sun: A New History of the Aztecs" (2019); Restall, "When Montezuma Met Cortés" (2018); Meyer vd., "The Course of Mexican History" (2017).
(() => {
  window.PLACES = window.PLACES || [];

  // ================= 1. OLMEKLER, TEOTİHUACAN VE KLASİK MAYA =================
  window.PLACES.push({
    id: 'mezoamerika-antik', sira: 1, kisa: 'Olmekler, Teotihuacan ve Mayalar', aralikAd: 'MÖ 2000 – MS 900',
    baslik: 'Dev taş başlar · Monte Albán · Teotihuacan · Tikal · Pakal · Maya yazısı ve takvimi',
    ulkeAlt: 'Mısırı evcilleştiren köylerden Olmeklere, Teotihuacan\'dan klasik Maya şehir devletlerine (MÖ 2000 – MS 900)',
    from: 2000, to: -900, start: -683,
    not: 'Olmek tarihleri arkeolojik tahmindir; Maya kral tarihleri çözülen yazıtlara göre çoğunlukla gününe kadar kesindir.', baskent: 'San Lorenzo, La Venta, Monte Albán, Teotihuacan, Tikal, Calakmul, Palenque, Copán',
    sahne: { kizak: false, araba: false, katipYok: true, giyim: 'antik' },
    dynasties: [{ from: 2000, to: 1200, ad: 'Erken mısır köyleri', renk: '#7a7a4a' }, { from: 1200, to: 400, ad: 'Olmekler', renk: '#5a6a4a' }, { from: 400, to: -378, ad: 'Monte Albán ve Teotihuacan', renk: '#a8742e' }, { from: -378, to: -900, ad: 'Klasik Maya', renk: '#2a7a6a' }],
    rulers: [
      { from: 2000, to: 1200, ad: 'Erken mısır köyleri', kisa: '?', kim: 'Mısır (teosinte bitkisinden) binlerce yılda evcilleştirildi; köyler ve çömlekçilik yayıldı.' },
      { from: 1200, to: 400, ad: 'Olmek önderleri (San Lorenzo, La Venta)', kisa: 'Olmekler', kim: 'Mezoamerika\'nın "ana kültürü": dev bazalt başlar, jaguar tanrıları, top oyunu ve belki ilk yazı.' },
      { from: 400, to: -100, ad: 'Zapotekler (Monte Albán) ve erken Maya kralları', kisa: 'Monte Albán', kim: 'Oaxaca\'da bir dağın tepesi düzlenip Monte Albán kuruldu; Mayaların ilk büyük şehri El Mirador.' },
      { from: -100, to: -378, ad: 'Teotihuacan\'ın yöneticileri', kisa: 'Teotihuacan', kim: 'Yöneticilerinin adları bilinmeyen Teotihuacan Amerika\'nın en büyük şehri oldu (~100.000 kişi).' },
      { from: -378, to: -426, ad: 'Siyah Ateş Doğdu (Sihyaj K\'ahk\') ve Tikal', kisa: 'Siyah Ateş', kim: 'Teotihuacan\'dan gelen bir komutan 378\'de Tikal\'e vardı; aynı gün Tikal kralı öldü ve yeni bir hanedan başladı.' },
      { from: -426, to: -615, ad: 'Klasik Maya kralları (Copán\'da Yax K\'uk\' Mo\')', kisa: 'Maya kralları', kim: 'Tikal ile Calakmul arasında yüzyıllık rekabet; Copán hanedanı 426\'da kuruldu.' },
      { from: -615, to: -683, ad: 'K\'inich Janaab Pakal (Palenque)', kisa: 'Pakal', kim: '12 yaşında tahta çıktı ve 68 yıl yönetti; Yazıtlar Tapınağı\'ndaki lahdi 1952\'de bulundu.' },
      { from: -683, to: -734, ad: 'Tikal kralı Jasaw Chan K\'awiil', kisa: 'Jasaw', kim: 'Calakmul\'u yendi (695) ve Tikal\'in I. Tapınağı onun mezarı olarak yapıldı.' },
      { from: -734, to: -900, ad: 'Geç Klasik Maya ve çöküş', kisa: 'Maya', kim: 'Kuraklık, savaşlar ve aşırı nüfusla güney ova şehirleri terk edildi.' }
    ],
    eras: [
      { from: 2000, to: 400, puan: { eko: 3, ordu: 2, istikrar: 3 }, baskent: 'San Lorenzo, La Venta',
        gundem: 'Mısır, fasulye, kabak, acı biber ve kakao tarımı. Körfez kıyısındaki Olmekler törensel merkezler kurdu ve 20 tona varan bazalt başlar oydu. Top oyunu, jaguar inancı ve takvimin kökleri Olmeklere dayanır.',
        savas: 'Küçük çaplı çatışmalar; obsidyen bıçaklar ve mızraklar.',
        ekonomi: 'Yeşim, obsidyen ve kakao ticareti.',
        din: 'Jaguar-insan karışımı tanrılar; şamanlar.',
        yasam: 'Kauçuk ağacından top: kelime olarak "Olmek" Nahuatlca "kauçuk ülkesinin insanları" demek.',
        bilgi: 'Kauçuğu ilk kullananlar Mezoamerikalılardı: Olmekler 3.500 yıl önce kauçuk toplar yapıyordu.' },
      { from: 400, to: -378, puan: { eko: 4, ordu: 3, istikrar: 4 }, baskent: 'Monte Albán, Teotihuacan, El Mirador',
        gundem: 'Teotihuacan dev piramitleri ve Ölüler Caddesi ile Mezoamerika\'nın en büyük şehri oldu; etkisi Maya ülkesine kadar uzandı. Zapotekler Monte Albán\'da yazı ve takvim kullandı. Mayaların ilk büyük şehirleri El Mirador ve Nakbe.',
        savas: 'Teotihuacan\'ın tüylü yılan ve savaş kültü.',
        ekonomi: 'Teotihuacan obsidyen atölyeleri; uzak ticaret.',
        din: 'Tüylü Yılan (Quetzalcoatl) ve yağmur tanrısı.',
        yasam: 'Teotihuacan\'da çok aileli apartman siteleri; yabancı mahalleler.',
        bilgi: '"Teotihuacan" adını şehir terk edildikten yüzlerce yıl sonra Aztekler verdi: "tanrıların doğduğu yer". Gerçek adı bilinmiyor.' },
      { from: -378, to: -683, puan: { eko: 5, ordu: 4, istikrar: 3 }, baskent: 'Tikal, Calakmul, Palenque, Copán',
        gundem: 'Klasik Maya şehir devletleri zirvede: piramit tapınaklar, saraylar, yazıtlı steller. Mayalar sıfırı kullanan, gökyüzünü çok iyi izleyen ve 800\'den fazla işaretli bir yazıyla kitaplar yazan bir uygarlık kurdu. Teotihuacan 550 civarı yandı.',
        savas: 'Tikal ve Calakmul "süper güçleri" arasındaki savaşlar; esir krallar kurban edildi.',
        ekonomi: 'Kakao çekirdekleri para gibi kullanıldı; mısır ve kakao tarlaları.',
        din: 'Kral, tanrılar ve atalar arasında aracı; kan sunma törenleri.',
        yasam: 'Top oyunu sahaları her şehirde; çikolata içeceği soyluların içeceği.',
        bilgi: 'Mayalar Venüs\'ün döngüsünü 584 gün olarak hesapladı; gerçek değer 583,92 gün.' },
      { from: -683, to: -900, puan: { eko: 4, ordu: 4, istikrar: 1 }, baskent: 'Tikal, Copán, Calakmul',
        gundem: 'Son büyük tapınaklar yapıldı; sonra 800-900 arasında güney Maya şehirleri birer birer terk edildi. Son tarihli stel 909 tarihli. Kuzeyde Yucatán şehirleri (Chichén Itzá, Uxmal) yükseldi.',
        savas: 'Şehirler arası savaşlar yoğunlaştı.',
        ekonomi: 'Ormansızlaşma ve tekrarlanan kuraklıklar tarımı çökertti.',
        din: 'Kralların otoritesi sarsıldı.',
        yasam: 'Bonampak duvar resimleri saray hayatını ve savaşları gösteriyor (~790).',
        bilgi: 'Göl dibi tortuları 9. yüzyılda bölgenin son 7.000 yılın en kurak dönemlerinden birini yaşadığını gösteriyor.' }
    ],
    nufus: [[2000, 0.5], [1000, 1], [1, 4], [-500, 8], [-750, 10], [-900, 7]],
    nufusNot: 'Mezoamerika için kaba arkeolojik tahminler.',
    dunyaOzet: { eko: 'Mezoamerika dünyanın geri kalanından bağımsız gelişti; mısır, kakao, domates ve acı biber burada evcilleştirildi.', askeri: 'Obsidyen kılıçlar (macuahuitl), mızrak atıcılar; at ve demir yok.' },
    events: [
      { y: 1200, t: 'San Lorenzo: Olmek başları', k: 'm' }, { y: 900, t: 'La Venta', k: 'm' }, { y: 500, t: 'Monte Albán kuruldu', k: 'm' }, { y: 300, t: 'El Mirador', k: 'm' },
      { y: -200, t: 'Teotihuacan\'ın Güneş Piramidi', k: 'm' }, { y: -378, t: 'Siyah Ateş Tikal\'e geldi', k: 'm' }, { y: -426, t: 'Copán hanedanı', k: 'm' }, { y: -550, t: 'Teotihuacan yandı', k: 'm' },
      { y: -615, t: 'Pakal tahta çıktı', k: 'm' }, { y: -695, t: 'Tikal Calakmul\'u yendi', k: 'm' }, { y: -790, t: 'Bonampak resimleri', k: 'm' }, { y: -810, t: 'Tikal\'in son steli', k: 'm' },
      { y: 2560, t: 'Büyük Piramit', k: 'w' }, { y: 221, t: 'Çin birleşti', k: 'w' }, { y: -476, t: 'Batı Roma\'nın sonu', k: 'w' }
    ],
    world: [{ from: 2000, to: 400, yer: 'Güney Amerika', t: 'Caral, Chavín.' }, { from: 27, to: -476, yer: 'Roma', t: 'Roma İmparatorluğu.' }, { from: -618, to: -900, yer: 'Çin', t: 'Tang.' }],
    sites: [{ ad: 'TEOTİHUACAN', wx: 2700 }, { ad: 'MONTE ALBÁN', wx: 3600 }, { ad: 'SAN LORENZO', wx: 4100 }, { ad: 'LA VENTA', wx: 4300 }, { ad: 'PALENQUE', wx: 4800 }, { ad: 'CALAKMUL', wx: 5400 }, { ad: 'TİKAL', wx: 5600 }, { ad: 'COPÁN', wx: 6000 }],
    monuments: [
      { id: 'laventa', ad: 'La Venta Büyük Piramidi', yer: 'Tabasco, Meksika', wx: 4300, type: 'mound', b: 120, h: 34, renk: '#7a9a5a', start: 900, end: 800, vol: 6e4, ruin: 400 },
      { id: 'montealban', ad: 'Monte Albán', yer: 'Oaxaca, Meksika', wx: 3600, type: 'terrace', b: 220, h: 26, start: 500, end: 300, vol: 8e4, ruin: -850 },
      { id: 'teotihuacan', ad: 'Teotihuacan: Güneş Piramidi', yer: 'Meksika Vadisi', wx: 2700, type: 'step', b: 220, h: 65, start: -100, end: -200, vol: 2e5, ruin: -550 },
      { id: 'palenque', ad: 'Palenque: Yazıtlar Tapınağı', yer: 'Chiapas, Meksika', wx: 4800, type: 'step', b: 60, h: 27, start: -675, end: -690, vol: 3e4, ruin: -800 },
      { id: 'tikal', ad: 'Tikal: Büyük Jaguar Tapınağı (I. Tapınak)', yer: 'Petén, Guatemala', wx: 5600, type: 'step', b: 50, h: 47, start: -732, end: -740, vol: 4e4, ruin: -900 }
    ],
    hizli: [{ ad: 'Olmekler', y: 1000 }, { ad: 'Monte Albán', y: 500 }, { ad: 'Teotihuacan', y: -200 }, { ad: 'Siyah Ateş', y: -378 }, { ad: 'Pakal', y: -650 }, { ad: 'Tikal', y: -740 }, { ad: 'Maya çöküşü', y: -850 }],
    bilgi: {
      laventa: { ikon: '🗿', yaptiran: 'Olmekler', donem: 'MÖ ~900-400', mimar: '—', sure: '—', neden: 'Olmeklerin törensel merkezi.', onem: 'Mezoamerika\'nın en eski piramitlerinden; dev taş başların bulunduğu yer.', teknik: [['Yükseklik', '~34 m'], ['Taş başlar', '20 tona kadar']], nasil: 'Kil ve topraktan konik höyük.', bugun: 'Taş başlar Villahermosa\'daki Parque-Museo La Venta\'da.', ilginc: 'Bazalt başlar 80 km ötedeki dağlardan, muhtemelen salla nehir yoluyla getirildi.' },
      montealban: { ikon: '⛰️', yaptiran: 'Zapotekler', donem: 'MÖ ~500 – MS 850', mimar: '—', sure: '—', neden: 'Zapotek başkenti.', onem: 'Amerika\'nın ilk şehirlerinden; erken yazı.', teknik: [['Meydan', '~300 × 200 m']], nasil: 'Bir dağın tepesi düzlenerek kuruldu.', bugun: 'UNESCO Dünya Mirası (1987).', ilginc: '"Dansçılar" taş kabartmaları aslında esir alınmış ve işkence görmüş düşmanları gösteriyor olabilir.' },
      teotihuacan: { ikon: '☀️', yaptiran: 'Teotihuacan halkı', donem: 'MS ~100-200', mimar: '—', sure: '—', neden: 'Şehrin merkezindeki dev tapınak.', onem: 'Amerika\'nın en büyük piramitlerinden.', teknik: [['Taban', '~225 × 222 m'], ['Yükseklik', '~65 m']], nasil: 'Toprak ve moloz dolgu, taş ve sıva kaplama.', bugun: 'UNESCO Dünya Mirası (1987).', ilginc: 'Piramidin altında, bir mağaraya inen 100 metrelik bir tünel bulundu.' },
      palenque: { ikon: '📜', yaptiran: 'K\'inich Janaab Pakal ve oğlu', donem: '~675-690', mimar: '—', sure: '—', neden: 'Pakal\'in mezar tapınağı.', onem: 'En uzun Maya yazıtlarından biri; Pakal\'in lahdi.', teknik: [['Yazıt', '617 glif']], nasil: 'Piramidin içinde gizli merdiven lahit odasına iner.', bugun: 'UNESCO Dünya Mirası (1987).', ilginc: 'Lahit kapağındaki kabartmaya bakıp Pakal\'in "uzay gemisi" kullandığını iddia edenler oldu; aslında dünya ağacından öbür dünyaya düşen kralı gösterir.' },
      tikal: { ikon: '🐆', yaptiran: 'Kral Yik\'in Chan K\'awiil (babası Jasaw\'ın mezarı olarak)', donem: '~732-740', mimar: '—', sure: '—', neden: 'Jasaw Chan K\'awiil\'in mezar tapınağı.', onem: 'Tikal\'in simgesi.', teknik: [['Yükseklik', '~47 m']], nasil: 'Dokuz basamaklı piramit; tepede tapınak ve süslü çatı.', bugun: 'UNESCO Dünya Mirası (1979).', ilginc: 'Tikal\'in tapınakları "Yıldız Savaşları" (1977) filminde Asi üssü olarak görüldü.' }
    },
    ulke: [
      { ad: 'Genel bakış', ikon: '🧭', html: '<p><b>Mezoamerika</b>, bugünkü orta ve güney Meksika ile Orta Amerika\'nın kuzeyini kapsayan kültür bölgesidir. Burada mısır evcilleştirildi; Olmekler, Zapotekler, Teotihuacan ve Mayalar piramitler, takvimler ve yazı sistemleri geliştirdi.</p>' },
      { ad: 'Maya bilimi', ikon: '🔭', html: '<ul><li>Sıfırı kullanan 20 tabanlı sayı sistemi</li><li>365 günlük güneş yılı ve 260 günlük kutsal takvim</li><li>Uzun Sayım takvimi (başlangıcı MÖ 3114)</li><li>Venüs ve tutulma tabloları (Dresden Kodeksi)</li><li>Amerika\'nın tam olarak çözülmüş tek eski yazısı</li></ul>' }
    ]
  });

  // ================= 2. TOLTEKLER, CHİCHÉN İTZÁ VE AZTEKLER =================
  window.PLACES.push({
    id: 'mezoamerika-aztek', sira: 2, kisa: 'Toltekler ve Aztekler', aralikAd: 'MS 900 – 1521',
    baslik: 'Chichén Itzá · Tula · Tenochtitlan · Moctezuma · Kolomb · Cortés',
    ulkeAlt: 'Tolteklerden Yucatán Mayalarına, Aztek İmparatorluğu\'ndan İspanyol fethine (MS 900 – 1521)',
    from: -900, to: -1521, start: -1487,
    not: 'Aztek tarihleri yerli kodekslere ve İspanyol kaynaklarına dayanır; erken dönem tarihleri yaklaşıktır.', baskent: 'Tula, Chichén Itzá, Mayapán, Tenochtitlan',
    sahne: { kizak: false, araba: false, giyim: 'antik' },
    dynasties: [{ from: -900, to: -1200, ad: 'Toltekler ve Chichén Itzá', renk: '#7a5a3a' }, { from: -1200, to: -1428, ad: 'Mayapán ve şehir devletleri', renk: '#5a6a5a' }, { from: -1428, to: -1521, ad: 'Aztek Üçlü İttifakı', renk: '#2a7a8a' }],
    rulers: [
      { from: -900, to: -1000, ad: 'Chichén Itzá önderleri', kisa: 'Chichén', kim: 'Yucatán\'da Chichén Itzá kuzey Mayalarının en güçlü şehri oldu.' },
      { from: -1000, to: -1150, ad: 'Tula\'nın Tolteka kralları', kisa: 'Toltekler', kim: 'Aztekler Toltekleri ideal ataları olarak görürdü; Tula\'nın taş savaşçı heykelleri.' },
      { from: -1150, to: -1325, ad: 'Şehir devletleri; Mexica göçü', kisa: '?', kim: 'Kuzeyden gelen Mexica (Aztek) kabilesi Meksika Vadisi\'ne ulaştı.' },
      { from: -1325, to: -1428, ad: 'Tenochtitlan\'ın ilk hükümdarları (Acamapichtli)', kisa: 'Mexica', kim: 'Söylenceye göre Mexica, kaktüs üstünde yılan yiyen kartalı görünce Texcoco gölündeki adaya Tenochtitlan\'ı kurdu.' },
      { from: -1428, to: -1440, ad: 'Itzcoatl', kisa: 'Itzcoatl', kim: 'Texcoco ve Tlacopan ile Üçlü İttifak\'ı kurdu: Aztek İmparatorluğu doğdu.' },
      { from: -1440, to: -1469, ad: 'I. Moctezuma', kisa: 'I. Moctezuma', kim: 'İmparatorluğu Körfez kıyısına genişletti; su kemerleri ve setler.' },
      { from: -1469, to: -1502, ad: 'Axayacatl, Tizoc, Ahuitzotl', kisa: 'Ahuitzotl', kim: 'Templo Mayor genişletildi (1487); imparatorluk Guatemala sınırına kadar uzandı.' },
      { from: -1502, to: -1520, ad: 'II. Moctezuma', kisa: 'Moctezuma', kim: 'Cortés\'i başkentte konuk etti; İspanyolların elinde rehin öldü.' },
      { from: -1520, to: -1521, ad: 'Cuitláhuac ve Cuauhtémoc', kisa: 'Cuauhtémoc', kim: 'Son Aztek hükümdarı; Tenochtitlan 13 Ağustos 1521\'de düştü.' }
    ],
    eras: [
      { from: -900, to: -1200, puan: { eko: 4, ordu: 4, istikrar: 3 }, baskent: 'Tula, Chichén Itzá',
        gundem: 'Klasik Maya\'nın çöküşünden sonra kuzeyde Chichén Itzá parladı: El Castillo piramidi, dev top oyunu sahası, Kutsal Cenote. Orta Meksika\'da Toltekler Tula\'yı kurdu.',
        savas: 'Savaşçı tarikatları: jaguar ve kartal savaşçıları.',
        ekonomi: 'Tuz, kakao ve pamuk ticareti; deniz yolu ile Yucatán çevresi.',
        din: 'Tüylü Yılan (Kukulkan / Quetzalcoatl) kültü.',
        yasam: 'Chichén Itzá\'nın top oyunu sahası 168 metre uzunluğunda.',
        bilgi: 'El Castillo\'nun dört yüzündeki 91\'er basamak ve tepedeki platform toplam 365 eder: yıldaki gün sayısı.' },
      { from: -1200, to: -1428, puan: { eko: 4, ordu: 3, istikrar: 2 }, baskent: 'Mayapán, Azcapotzalco, Tenochtitlan',
        gundem: 'Yucatán\'da Mayapán, Orta Meksika\'da birbiriyle savaşan şehir devletleri. Mexica kabilesi 1325\'te göl ortasındaki bataklık adada Tenochtitlan\'ı kurdu ve yüzer bahçelerle (chinampa) çoğaldı.',
        savas: 'Paralı asker olarak çalışan Mexica savaşçıları.',
        ekonomi: 'Chinampa: göl üzerinde yapay tarla adaları; yılda birkaç hasat.',
        din: 'Güneş tanrısı Huitzilopochtli; dünyanın sürmesi için kurban gerektiği inancı.',
        yasam: 'Okullar: soylular için calmecac, halk için telpochcalli; Aztek çocukları okula gidiyordu.',
        bilgi: 'Meksika bayrağındaki kaktüs üstünde yılan yiyen kartal, Tenochtitlan\'ın kuruluş söylencesinden gelir.' },
      { from: -1428, to: -1492, puan: { eko: 5, ordu: 5, istikrar: 4 }, baskent: 'Tenochtitlan',
        gundem: 'Aztek Üçlü İttifakı Mezoamerika\'nın büyük bölümünü haraca bağladı. Tenochtitlan 200.000 kişiyle o çağın dünyanın en büyük şehirlerinden biri: kanallar, setler, su kemerleri, Templo Mayor. Tlatelolco pazarına günde on binlerce kişi geliyordu.',
        savas: '"Çiçek savaşları": kurban için esir almak amaçlı törensel savaşlar.',
        ekonomi: 'Haraç sistemi: kakao, pamuklu kumaş, tüy, yeşim, altın.',
        din: 'Templo Mayor\'un tepesinde iki tapınak: Huitzilopochtli ve yağmur tanrısı Tlaloc.',
        yasam: 'Çikolata, domates, avokado, hindi; Nahuatlca şiirler (Nezahualcóyotl).',
        bilgi: '"Çikolata", "domates", "avokado" ve "şili" kelimeleri Aztek dili Nahuatlcadan gelir.' },
      { from: -1492, to: -1521, puan: { eko: 4, ordu: 4, istikrar: 1 }, baskent: 'Tenochtitlan; Karayipler\'de Santo Domingo',
        gundem: 'Kolomb 1492\'de Bahamalar\'a ve Küba\'ya, sonra Hispaniola\'ya ulaştı. Karayip yerlileri (Tainolar) çiçek hastalığı ve zorla çalıştırmayla birkaç on yılda neredeyse yok oldu. 1519\'da Cortés Meksika\'ya çıktı; Tlaxcala gibi yerli müttefiklerle ve çiçek salgınının yardımıyla Tenochtitlan\'ı aldı (1521).',
        savas: 'Çelik kılıç, at, top ve on binlerce yerli müttefik; çiçek hastalığı en ölümcül "silah" oldu.',
        ekonomi: 'Altın arayışı; encomienda sistemiyle yerlilerin zorla çalıştırılması.',
        din: 'İspanyol rahipler Hristiyanlığı yaymaya başladı.',
        yasam: 'Malintzin (La Malinche) Cortés\'in tercümanı ve danışmanı oldu.',
        bilgi: 'İspanyollar Tenochtitlan\'ı ilk gördüklerinde, Bernal Díaz\'a göre, bunun bir rüya olup olmadığını sordular.' }
    ],
    nufus: [[-900, 7], [-1200, 9], [-1400, 14], [-1500, 20], [-1521, 18]],
    nufusNot: 'Mezoamerika ve Karayipler için çok tartışmalı tahminler (1519\'da Orta Meksika için 5-25 milyon).',
    dunyaOzet: { eko: 'Mezoamerika 1492\'ye kadar Eski Dünya\'dan ayrıydı; Kolomb\'dan sonra "Kolomb Değişimi" başladı: mısır, domates, kakao Avrupa\'ya; at, buğday ve hastalıklar Amerika\'ya.', askeri: 'Obsidyen kılıçlar ve pamuk zırhlar; 1519\'dan sonra çelik, at ve barut.' },
    events: [
      { y: -987, t: 'Chichén Itzá yükseliyor', k: 'm' }, { y: -1000, t: 'Tula\'nın Toltekleri', k: 'm' }, { y: -1150, t: 'Tula çöktü', k: 'm' }, { y: -1220, t: 'Mayapán', k: 'm' },
      { y: -1325, t: 'Tenochtitlan kuruldu', k: 'm' }, { y: -1428, t: 'Üçlü İttifak', k: 'm' }, { y: -1487, t: 'Templo Mayor genişletildi', k: 'm' }, { y: -1492, t: 'Kolomb Karayipler\'de', k: 'm' },
      { y: -1496, t: 'Santo Domingo kuruldu', k: 'm' }, { y: -1502, t: 'II. Moctezuma', k: 'm' }, { y: -1519, t: 'Cortés Meksika\'da', k: 'm' }, { y: -1520, t: 'Hüzünlü Gece; çiçek salgını', k: 'm' }, { y: -1521, t: 'Tenochtitlan düştü', k: 'm' },
      { y: -1071, t: 'Malazgirt', k: 'w' }, { y: -1206, t: 'Cengiz Han', k: 'w' }, { y: -1453, t: 'İstanbul\'un fethi', k: 'w' }
    ],
    world: [{ from: -1050, to: -1350, yer: 'Kuzey Amerika', t: 'Cahokia.' }, { from: -1438, to: -1521, yer: 'Güney Amerika', t: 'İnka İmparatorluğu.' }, { from: -1299, to: -1521, yer: 'Osmanlı', t: 'Osmanlı yükselişi.' }],
    sites: [{ ad: 'TULA', wx: 2300 }, { ad: 'TEXCOCO', wx: 3000 }, { ad: 'TLAXCALA', wx: 3150 }, { ad: 'CHOLULA', wx: 3200 }, { ad: 'VERACRUZ', wx: 3800 }, { ad: 'CHİCHÉN İTZÁ', wx: 5200 }, { ad: 'MAYAPÁN', wx: 5300 }, { ad: 'TULUM', wx: 5500 }, { ad: 'KÜBA', wx: 7200 }, { ad: 'HİSPANİOLA', wx: 7700 }],
    monuments: [
      { id: 'chichenitza', ad: 'Chichén Itzá: El Castillo', yer: 'Yucatán, Meksika', wx: 5200, type: 'step', b: 55, h: 30, start: -1000, end: -1100, vol: 4e4 },
      { id: 'tenochtitlan', ad: 'Tenochtitlan', yer: 'Meksika Vadisi', wx: 2900, type: 'city', wall: false, b: 360, n: 34, hk: 0.3, start: -1325, end: -1400, vol: 1.2e5, ruin: -1521 },
      { id: 'templomayor', ad: 'Templo Mayor', yer: 'Tenochtitlan', wx: 2980, type: 'step', b: 80, h: 45, start: -1390, end: -1487, vol: 8e4, ruin: -1521 }
    ],
    hizli: [{ ad: 'Chichén Itzá', y: -1000 }, { ad: 'Toltekler', y: -1100 }, { ad: 'Tenochtitlan', y: -1325 }, { ad: 'Üçlü İttifak', y: -1428 }, { ad: 'Templo Mayor', y: -1487 }, { ad: 'Kolomb', y: -1492 }, { ad: 'Cortés', y: -1519 }, { ad: 'Fetih', y: -1521 }],
    bilgi: {
      chichenitza: { ikon: '🐍', yaptiran: 'Chichén Itzá\'nın Mayaları', donem: '~9-12. yy', mimar: '—', sure: '—', neden: 'Kukulkan (Tüylü Yılan) tapınağı.', onem: 'Dünyanın Yeni Yedi Harikası.', teknik: [['Yükseklik', '~30 m (tapınakla)'], ['Basamak', '4 × 91 + 1 = 365']], nasil: 'Eski bir piramidin üstüne yapıldı; içinde daha küçük bir piramit var.', bugun: 'UNESCO Dünya Mirası (1988).', ilginc: 'Ekinoks günlerinde güneş, merdivenin kenarında aşağı inen bir yılan gibi görünen üçgen gölgeler oluşturur.' },
      tenochtitlan: { ikon: '🦅', yaptiran: 'Mexica (Aztekler)', donem: '1325-1521', mimar: '—', sure: '—', neden: 'Göl ortasındaki adada kuruldu.', onem: 'Aztek İmparatorluğu\'nun başkenti; 1519\'da dünyanın en büyük şehirlerinden.', teknik: [['Nüfus', '~200.000'], ['Set yolları', '3 (kara ile bağlantı)']], nasil: 'Chinampa adaları, kanallar, Chapultepec\'ten su kemeri.', bugun: 'Mexico City\'nin altında; göl kurutuldu.', ilginc: 'Mexico City bugün eski göl yatağı yüzünden bazı yerlerde yılda 30-50 cm çöküyor.' },
      templomayor: { ikon: '🛕', yaptiran: 'Aztek hükümdarları', donem: '1390\'dan 1487\'ye 7 genişletme', mimar: '—', sure: '~100 yıl', neden: 'Huitzilopochtli ve Tlaloc\'un çift tapınağı.', onem: 'Aztek evreninin merkezi.', teknik: [['Yükseklik', '~45 m (son hâli)']], nasil: 'Her yeni hükümdar eskisinin üstüne daha büyüğünü yaptırdı: soğan katmanları gibi.', bugun: '1978\'de bir elektrik işçisinin bulduğu Coyolxauhqui taşından sonra kazıldı; müze.', ilginc: 'İspanyollar yıktığı tapınağın taşlarıyla hemen yanına Mexico City Katedrali\'ni yaptı.' }
    },
    ulke: [
      { ad: 'Genel bakış', ikon: '🧭', html: '<p>Klasik Maya\'dan sonra kuzeyde <b>Chichén Itzá</b> ve <b>Toltekler</b> öne çıktı. 1325\'te kurulan <b>Tenochtitlan</b> bir asırda Aztek İmparatorluğu\'nun başkenti oldu. 1492\'de Kolomb Karayipler\'e ulaştı; 1521\'de Cortés ve yerli müttefikleri Tenochtitlan\'ı aldı.</p>' },
      { ad: 'Kolomb Değişimi', ikon: '🌽', html: '<ul><li><b>Amerika\'dan dünyaya:</b> mısır, patates, domates, kakao, acı biber, hindi, vanilya, tütün, kauçuk</li><li><b>Dünyadan Amerika\'ya:</b> at, inek, koyun, buğday, şeker kamışı, kahve, demir; ve çiçek, kızamık gibi salgınlar</li></ul>' }
    ]
  });

  // ================= 3. YENİ İSPANYA'DAN BUGÜNE =================
  window.PLACES.push({
    id: 'mezoamerika-modern', sira: 3, modern: true, kisa: 'Yeni İspanya\'dan bugüne', aralikAd: 'MS 1521 – bugün',
    baslik: 'Yeni İspanya · Guadalupe · Haiti Devrimi · Hidalgo · Juárez · Meksika Devrimi · Panama Kanalı',
    ulkeAlt: 'İspanyol sömürgesinden bağımsızlığa, devrimlerden bugünkü Meksika, Orta Amerika ve Karayipler\'e (MS 1521 – bugün)',
    from: -1521, to: -2026, start: -1821,
    not: 'Tarihler kesindir. Hükümdar şeridi Meksika\'yı izler.', baskent: 'Mexico City; Guatemala, Havana, Santo Domingo, Port-au-Prince ve diğerleri',
    sahne: { kizak: false, araba: true, buhar: -1873, oto: -1920, ucak: -1935, turist: -1970, giyim: [[-1521, 'cubbe'], [-1910, 'modern']] },
    dynasties: [{ from: -1521, to: -1821, ad: 'Yeni İspanya ve Karayip sömürgeleri', renk: '#a8822a' }, { from: -1821, to: -1910, ad: 'Bağımsız Meksika', renk: '#2a7a4a' }, { from: -1910, to: -2026, ad: 'Devrim ve modern çağ', renk: '#a82a2a' }],
    rulers: [
      { from: -1521, to: -1535, ad: 'Hernán Cortés ve ilk yöneticiler', kisa: 'Cortés', kim: 'Tenochtitlan\'ın yıkıntıları üzerine Mexico City kuruldu.' },
      { from: -1535, to: -1810, ad: 'Yeni İspanya genel valileri', kisa: 'Genel valiler', kim: 'Mexico City\'den bugünkü Meksika, Orta Amerika, Karayipler ve Filipinler yönetildi. Gümüş madenleri dünyayı değiştirdi.' },
      { from: -1810, to: -1821, ad: 'Bağımsızlık Savaşı (Hidalgo, Morelos)', kisa: 'Hidalgo', kim: 'Rahip Miguel Hidalgo 16 Eylül 1810\'da "Dolores Çığlığı" ile ayaklanmayı başlattı.' },
      { from: -1821, to: -1855, ad: 'İmparator Iturbide ve Santa Anna dönemi', kisa: 'Santa Anna', kim: 'Meksika bağımsız oldu. Teksas ayrıldı (1836); ABD ile savaşta topraklarının yarısını kaybetti (1848).' },
      { from: -1855, to: -1876, ad: 'Benito Juárez ve Reform', kisa: 'Juárez', kim: 'Zapotek kökenli ilk devlet başkanı. Fransız müdahalesine ve İmparator Maximilian\'a direndi (1862-1867).' },
      { from: -1876, to: -1911, ad: 'Porfirio Díaz', kisa: 'Díaz', kim: 'Demiryolları ve yabancı yatırım; ama köylüler topraksız ve yoksul.' },
      { from: -1911, to: -1940, ad: 'Devrim ve Lázaro Cárdenas', kisa: 'Cárdenas', kim: 'Zapata ve Pancho Villa\'nın devrimi; 1917 anayasası. Cárdenas petrolü millîleştirdi (1938).' },
      { from: -1940, to: -2000, ad: 'PRI dönemi', kisa: 'PRI', kim: 'Tek partinin 71 yıllık iktidarı; "Meksika mucizesi"; 1968 Olimpiyatları.' },
      { from: -2000, to: -2026, ad: 'Demokratik dönem', kisa: 'Demokrasi', kim: 'İktidar seçimle el değiştirdi; 2024\'te Claudia Sheinbaum ilk kadın devlet başkanı oldu.' }
    ],
    eras: [
      { from: -1521, to: -1700, puan: { eko: 4, ordu: 3, istikrar: 3 }, baskent: 'Mexico City, Santo Domingo, Havana',
        gundem: 'Salgınlar yerli nüfusun yaklaşık %90\'ını öldürdü: tarihin en büyük demografik felaketlerinden. Zacatecas ve Guanajuato\'nun gümüşü İspanya\'yı zenginleştirdi; Manila kalyonları gümüşü Çin\'e taşıdı. Karayipler\'de şeker plantasyonları için Afrikalı köleler getirildi.',
        savas: 'Korsanlar Karayipler\'de; İspanyol hazine filolarına saldırılar.',
        ekonomi: 'Gümüş, şeker, kakao, kırmız böceği boyası.',
        din: 'Guadalupe Meryem Ana görünümü (1531) Meksika Katolikliğinin simgesi oldu.',
        yasam: 'Mestizo kültürü: yerli, İspanyol ve Afrika karışımı. Amerika\'nın ilk matbaası (1539) ve üniversitesi (1551) Mexico City\'de.',
        bilgi: '16-18. yüzyıllar arasında dünyada çıkarılan gümüşün yaklaşık %80\'i İspanyol Amerikası\'ndan geldi.' },
      { from: -1700, to: -1821, puan: { eko: 4, ordu: 3, istikrar: 2 }, baskent: 'Mexico City, Havana, Cap-Français',
        gundem: 'Fransız Saint-Domingue (Haiti) dünyanın en zengin sömürgesi oldu: dünya şekerinin ve kahvesinin büyük kısmı. 1791\'de köleler Toussaint Louverture önderliğinde ayaklandı; 1804\'te Haiti, kölelerin kurduğu ilk bağımsız devlet oldu. Meksika\'da bağımsızlık savaşı 1810\'da başladı.',
        savas: 'Haiti Devrimi Napolyon\'un ordusunu yendi.',
        ekonomi: 'Şeker, kahve, gümüş.',
        din: 'Rahipler Hidalgo ve Morelos bağımsızlığın önderleri.',
        yasam: 'Sor Juana İnés de la Cruz\'un şiirleri (17. yy sonu).',
        bilgi: 'Haiti, 1825\'te tanınmak için Fransa\'ya tazminat ödemek zorunda bırakıldı; borç 1947\'ye kadar sürdü.' },
      { from: -1821, to: -1910, puan: { eko: 3, ordu: 3, istikrar: 1 }, baskent: 'Mexico City, Guatemala, Havana',
        gundem: 'Meksika ve Orta Amerika bağımsız oldu (1821). Meksika ABD\'ye Teksas\'ı ve Kaliforniya dahil topraklarının yarısını kaybetti. Fransa Avusturyalı Maximilian\'ı imparator yaptı ama Juárez kazandı. Küba 1898\'e kadar İspanyol kaldı.',
        savas: 'Meksika-Amerika Savaşı (1846-1848); 5 Mayıs (Puebla) zaferi (1862).',
        ekonomi: 'Demiryolları, madenler, muz ve kahve plantasyonları.',
        din: 'Reform yasaları kilise ile devleti ayırdı.',
        yasam: 'Mariachi müziği, charro kültürü.',
        bilgi: '"Cinco de Mayo" Meksika\'nın bağımsızlık günü değildir; 1862\'deki Puebla zaferinin yıldönümüdür. Bağımsızlık günü 16 Eylül.' },
      { from: -1910, to: -1960, puan: { eko: 3, ordu: 3, istikrar: 2 }, baskent: 'Mexico City, Havana, Panama',
        gundem: 'Meksika Devrimi (1910-1920): Zapata\'nın "Toprak ve Özgürlük" sloganı. Panama Kanalı açıldı (1914). Diego Rivera ve Frida Kahlo; duvar resmi hareketi. 1959\'da Fidel Castro Küba\'da iktidara geldi.',
        savas: 'Devrimde ~1 milyon ölü; Küba Devrimi.',
        ekonomi: 'Petrol millîleştirildi (1938); Panama Kanalı dünya ticaretini değiştirdi.',
        din: 'Cristero Savaşı (1926-29): kilise ile devlet arasında.',
        yasam: 'Meksika sinemasının altın çağı.',
        bilgi: 'Panama Kanalı\'nın yapımında ~5.600 işçi öldü; çoğu Karayipli işçiydi.' },
      { from: -1960, to: -2026, puan: { eko: 4, ordu: 2, istikrar: 3 }, baskent: 'Mexico City, Havana, Guatemala, Panama',
        gundem: 'Küba füze krizi (1962). Orta Amerika\'da iç savaşlar (Guatemala, El Salvador, Nikaragua). Meksika NAFTA ile ABD ekonomisine bağlandı (1994); turizm Karayipler\'i dönüştürdü. Haiti 2010 depremiyle yıkıldı.',
        savas: 'Guatemala iç savaşı (1960-1996); uyuşturucu kartelleriyle mücadele.',
        ekonomi: 'Otomobil, petrol, turizm; Panama Kanalı genişletildi (2016).',
        din: 'Katolik çoğunluk; Protestan kiliseleri hızla büyüyor.',
        yasam: 'Ölüler Günü UNESCO listesinde; Meksika mutfağı UNESCO somut olmayan mirası.',
        bilgi: 'Mexico City yaklaşık 2.240 m yükseklikte: 1968 Olimpiyatları\'nda ince hava atletizm rekorlarını etkiledi.' }
    ],
    nufus: [[-1521, 18], [-1600, 3], [-1700, 4], [-1800, 9], [-1900, 22], [-1950, 50], [-2000, 175], [-2026, 227]],
    nufusNot: 'Meksika (~131 milyon), Orta Amerika ve Karayipler toplamı; 16. yüzyıldaki dev düşüş salgınlar yüzünden.',
    dunyaOzet: { eko: 'Amerika gümüşü dünyanın ilk küresel ekonomisini doğurdu; Karayip şekeri Avrupa\'yı zenginleştirdi.', askeri: 'İspanyol, Fransız, İngiliz ve ABD müdahaleleri; devrimler.' },
    events: [
      { y: -1521, t: 'Mexico City kuruldu', k: 'm' }, { y: -1531, t: 'Guadalupe', k: 'm' }, { y: -1546, t: 'Zacatecas gümüşü', k: 'm' }, { y: -1565, t: 'Manila kalyonları', k: 'm' },
      { y: -1791, t: 'Haiti Devrimi başladı', k: 'm' }, { y: -1804, t: 'Haiti bağımsız', k: 'm' }, { y: -1810, t: 'Dolores Çığlığı', k: 'm' }, { y: -1821, t: 'Meksika bağımsız', k: 'm' },
      { y: -1848, t: 'Guadalupe Hidalgo Antlaşması', k: 'm' }, { y: -1862, t: 'Puebla zaferi', k: 'm' }, { y: -1867, t: 'Maximilian idam edildi', k: 'm' }, { y: -1898, t: 'Küba İspanya\'dan ayrıldı', k: 'm' },
      { y: -1910, t: 'Meksika Devrimi', k: 'm' }, { y: -1914, t: 'Panama Kanalı açıldı', k: 'm' }, { y: -1959, t: 'Küba Devrimi', k: 'm' }, { y: -1962, t: 'Küba füze krizi', k: 'm' }, { y: -2010, t: 'Haiti depremi', k: 'm' },
      { y: -1789, t: 'Fransız İhtilali', k: 'w' }, { y: -1865, t: 'ABD İç Savaşı bitti', k: 'w' }, { y: -1945, t: 'İkinci Dünya Savaşı bitti', k: 'w' }
    ],
    world: [{ from: -1521, to: -1821, yer: 'İspanya', t: 'İspanyol İmparatorluğu.' }, { from: -1776, to: -2026, yer: 'ABD', t: 'Kuzey\'deki güçlü komşu.' }, { from: -1945, to: -1991, yer: 'Dünya', t: 'Soğuk Savaş.' }],
    sites: [{ ad: 'ZACATECAS', wx: 1600 }, { ad: 'GUANAJUATO', wx: 2000 }, { ad: 'MEXİCO CİTY', wx: 2900 }, { ad: 'PUEBLA', wx: 3200 }, { ad: 'VERACRUZ', wx: 3800 }, { ad: 'GUATEMALA', wx: 5800 }, { ad: 'PANAMA', wx: 6700 }, { ad: 'HAVANA', wx: 7200 }, { ad: 'PORT-AU-PRİNCE', wx: 7700 }],
    monuments: [
      { id: 'mexicokatedral', ad: 'Mexico City Metropolitan Katedrali', yer: 'Zócalo, Mexico City', wx: 2900, type: 'church', kule: true, buyukKubbe: true, b: 120, h: 67, renk: '#d8c8a8', start: -1573, end: -1813, vol: 1.2e5 },
      { id: 'panamakanali', ad: 'Panama Kanalı: Miraflores Havuzları', yer: 'Panama', wx: 6700, type: 'dam', b: 260, h: 25, start: -1904, end: -1914, vol: 1.2e5 },
      { id: 'mexicocity', ad: 'Mexico City', yer: 'Meksika', wx: 2800, type: 'modcity', b: 440, h: 110, n: 46, start: -1950, end: -2020, vol: 1e5 }
    ],
    hizli: [{ ad: 'Mexico City', y: -1521 }, { ad: 'Gümüş', y: -1600 }, { ad: 'Haiti', y: -1804 }, { ad: 'Bağımsızlık', y: -1821 }, { ad: 'Juárez', y: -1862 }, { ad: 'Devrim', y: -1910 }, { ad: 'Panama Kanalı', y: -1914 }, { ad: 'Küba', y: -1959 }, { ad: 'Bugün', y: -2026 }],
    bilgi: {
      mexicokatedral: { ikon: '⛪', yaptiran: 'İspanyol taç ve kilise', donem: '1573-1813', mimar: 'Claudio de Arciniega ve sonrakiler', sure: '~240 yıl', neden: 'Yeni İspanya\'nın ana katedrali.', onem: 'Amerika\'nın en büyük ve en eski katedrallerinden.', teknik: [['Boyut', '~110 × 59 m'], ['Çan', '25']], nasil: 'Aztek tapınağının taşları da kullanıldı; uzun yapım süresi yüzünden Gotik, Barok ve Neoklasik üsluplar bir arada.', bugun: 'UNESCO (Mexico City tarihî merkezi, 1987).', ilginc: 'Yumuşak göl zemini yüzünden katedral yamuk çöküyor; içinde eğikliği gösteren bir sarkaç asılı.' },
      panamakanali: { ikon: '🚢', yaptiran: 'ABD (önce Fransızlar denedi)', donem: '1904-1914', mimar: 'John Stevens, George Goethals', sure: '10 yıl', neden: 'Atlas ve Pasifik okyanuslarını birleştirmek.', onem: 'Dünyanın en önemli su yollarından; New York-San Francisco yolunu ~13.000 km kısalttı.', teknik: [['Uzunluk', '~82 km'], ['Havuz', '3 set, gemileri 26 m yükseltir']], nasil: 'Gatún Gölü barajla yapıldı; gemiler havuzlarla göle çıkıp öbür tarafa iner.', bugun: '1999\'dan beri Panama\'nın.', ilginc: 'Kanaldan geçen bir gemi ortalama ~200 milyon litre tatlı su kullanır.' },
      mexicocity: { ikon: '🏙️', yaptiran: '—', donem: '1521\'den (Tenochtitlan\'ın üstünde)', mimar: '—', sure: '—', neden: 'Yeni İspanya\'nın ve Meksika\'nın başkenti.', onem: 'Amerika\'nın en kalabalık metropollerinden (~22 milyon).', teknik: [['Rakım', '~2.240 m']], nasil: 'Kurutulmuş Texcoco gölünün üstünde.', bugun: 'Meksika\'nın başkenti.', ilginc: 'Şehirde 150\'den fazla müze var: dünyanın en çok müzeli şehirlerinden.' }
    },
    ulke: [
      { ad: 'Genel bakış', ikon: '🧭', html: '<p>1521\'den sonra bölge <b>Yeni İspanya</b> oldu; salgınlar yerli nüfusu çökertti, gümüş ve şeker dünyayı değiştirdi. <b>Haiti</b> 1804\'te ilk siyahi cumhuriyet oldu; Meksika ve Orta Amerika 1821\'de bağımsızlığını kazandı. 20. yüzyılda Meksika Devrimi, Panama Kanalı ve Küba Devrimi bölgeyi biçimlendirdi.</p>' },
      { ad: 'Bugünkü ülkeler', ikon: '🗺️', html: '<ul><li><b>Meksika</b> (~131 milyon)</li><li>Orta Amerika: Guatemala, Belize, Honduras, El Salvador, Nikaragua, Kosta Rika, Panama</li><li>Karayipler: Küba, Haiti, Dominik Cumhuriyeti, Jamaika, Porto Riko (ABD) ve küçük adalar</li></ul>' }
    ]
  });

  window.BOLGE_TASI('mezoamerika');

  window.MISIR = {
    coords: { laventa: [18.1047, -94.0414], montealban: [17.0436, -96.7678], teotihuacan: [19.6925, -98.8438], palenque: [17.4838, -92.0464], tikal: [17.2221, -89.6237], chichenitza: [20.6829, -88.5686], tenochtitlan: [19.4326, -99.1332], templomayor: [19.4352, -99.1313], mexicokatedral: [19.4345, -99.1331], panamakanali: [9.0156, -79.5928], mexicocity: [19.4326, -99.1332] },
    wiki: { laventa: 'La Venta', montealban: 'Monte Albán', teotihuacan: 'Pyramid of the Sun', palenque: 'Temple of the Inscriptions', tikal: 'Tikal Temple I', chichenitza: 'El Castillo, Chichen Itza', tenochtitlan: 'Tenochtitlan', templomayor: 'Templo Mayor', mexicokatedral: 'Mexico City Metropolitan Cathedral', panamakanali: 'Panama Canal', mexicocity: 'Mexico City' },
    bilgi: {}, alt: {},
    kureAdlari: [[23.5, -102, 'MEKSİKA', 'misir', 2.8], [24.5, -90, 'MEKSİKA KÖRFEZİ', 'deniz', 2.8], [15, -75, 'KARAYİP DENİZİ', 'deniz', 2.8], [13, -100, 'PASİFİK OKYANUSU', 'deniz', 2.6],
      [20, -89, 'YUCATÁN', 'bolge', 3.8], [14.5, -87, 'ORTA AMERİKA', 'bolge', 3.4], [21.8, -79, 'KÜBA', 'kucuk', 4], [18.9, -71, 'HİSPANİOLA', 'kucuk', 4.5]],
    sehirler: [
      { ad: 'San Lorenzo', ll: [17.75, -94.76], from: 1500, to: 900, b: [[1200, 900]], not: 'Olmeklerin ilk büyük merkezi.' },
      { ad: 'Monte Albán', ll: [17.0436, -96.7678], from: 500, to: -850, not: 'Zapotek başkenti.' },
      { ad: 'Teotihuacan', ll: [19.6925, -98.8438], from: 100, to: -650, not: 'Amerika\'nın en büyük antik şehri.' },
      { ad: 'Tikal', ll: [17.2221, -89.6237], from: 600, to: -900, not: 'Klasik Maya\'nın büyük şehri.' },
      { ad: 'Calakmul', ll: [18.105, -89.81], from: 400, to: -900, not: 'Yılan krallığının başkenti.' },
      { ad: 'Palenque', ll: [17.4838, -92.0464], from: 100, to: -800, not: 'Pakal\'in şehri.' },
      { ad: 'Copán', ll: [14.8378, -89.1422], from: -426, to: -820, not: 'Maya sanatının başkenti.' },
      { ad: 'Chichén Itzá', ll: [20.6843, -88.5678], from: -600, to: -1250, not: 'Yucatán\'ın büyük şehri.' },
      { ad: 'Tula', ll: [20.0645, -99.3405], from: -900, to: -1150, not: 'Tolteklerin başkenti.' },
      { ad: 'Tenochtitlan / Mexico City', ll: [19.4326, -99.1332], from: -1325, to: -2026, b: [[-1428, -1521], [-1821, -2026]], not: 'Aztek ve Meksika başkenti.' },
      { ad: 'Santo Domingo', ll: [18.4861, -69.9312], from: -1496, to: -2026, not: 'Amerika\'daki en eski Avrupa şehri.' },
      { ad: 'Havana', ll: [23.1136, -82.3666], from: -1519, to: -2026, not: 'Küba\'nın başkenti.' },
      { ad: 'Panama', ll: [8.9824, -79.5199], from: -1519, to: -2026, not: 'İki okyanus arasındaki şehir.' }
    ],
    nil: { ikon: '🌊', title: 'Göller, cenoteler ve denizler', sub: 'Nehirsiz Yucatán ve göl şehri Tenochtitlan', foto: 'Cenote', tabs: [{ ad: '💧 Su', html: '<ul class="hap"><li><b>Yucatán</b>\'da hiç yerüstü nehri yoktur: su, kireçtaşının çökmesiyle oluşan doğal kuyulardan (<b>cenote</b>) alınır. Chichén Itzá\'nın Kutsal Cenote\'sine sunular atılırdı.</li><li><b>Texcoco Gölü</b> Aztek başkentini çevreliyordu; İspanyollar onu kuruttu.</li><li><b>Usumacinta</b> ve <b>Grijalva</b> nehirleri Maya ve Olmek ülkesinin su yolları.</li><li>Karayipler kasırgaların yoludur: "hurricane" kelimesi Taino dilindeki "hurakán"dan gelir.</li></ul>' }] },
    simgeler: [
      { id: 'mz-olmek', ad: 'Olmek taş başları', ikon: '🗿', wiki: 'Olmec colossal heads', git: { place: 'mezoamerika-antik', y: 900, id: 'laventa' }, ozet: 'Dev bazalt portreler.', hap: ['MÖ 1200-400.', '17 baş bulundu.'] },
      { id: 'mz-teotihuacan', ad: 'Teotihuacan', ikon: '☀️', wiki: 'Teotihuacan', git: { place: 'mezoamerika-antik', y: -200, id: 'teotihuacan' }, ozet: 'Tanrıların şehri.', hap: ['~100.000 kişi.', 'Güneş ve Ay piramitleri.'] },
      { id: 'mz-tikal', ad: 'Tikal', ikon: '🐆', wiki: 'Tikal', git: { place: 'mezoamerika-antik', y: -740, id: 'tikal' }, ozet: 'Ormandaki Maya başkenti.', hap: ['Klasik Maya.', 'Guatemala.'] },
      { id: 'mz-maya', ad: 'Maya yazısı ve takvimi', ikon: '📅', wiki: 'Maya script', git: { place: 'mezoamerika-antik', y: -683, id: 'palenque' }, ozet: 'Sıfır ve Uzun Sayım.', hap: ['800+ işaret.', '20 tabanlı sayılar.'] },
      { id: 'mz-chichen', ad: 'Chichén Itzá', ikon: '🐍', wiki: 'Chichen Itza', git: { place: 'mezoamerika-aztek', y: -1100, id: 'chichenitza' }, ozet: 'Kukulkan piramidi.', hap: ['365 basamak.', 'Ekinoks yılanı.'] },
      { id: 'mz-tenochtitlan', ad: 'Tenochtitlan', ikon: '🦅', wiki: 'Tenochtitlan', git: { place: 'mezoamerika-aztek', y: -1500, id: 'tenochtitlan' }, ozet: 'Göl üstündeki Aztek başkenti.', hap: ['1325-1521.', '~200.000 kişi.'] },
      { id: 'mz-panama', ad: 'Panama Kanalı', ikon: '🚢', wiki: 'Panama Canal', git: { place: 'mezoamerika-modern', y: -1914, id: 'panamakanali' }, ozet: 'İki okyanusu birleştiren kanal.', hap: ['1914.', '82 km.'] }
    ],
    bugun: '<p><b>Meksika</b> (~131 milyon), Orta Amerika (~53 milyon) ve Karayipler (~44 milyon).</p><ul class="hap"><li><b>Diller:</b> İspanyolca; Nahuatl, Maya dilleri (6 milyondan fazla konuşan); Karayipler\'de İngilizce, Fransızca, Haiti Kreolü.</li><li><b>Ekonomi:</b> otomobil, petrol, turizm, kahve, muz; Panama Kanalı.</li><li><b>Kültür:</b> Ölüler Günü, mariachi, salsa, reggae.</li></ul>'
  };
  window.SEHIR_BILGI = {
    'Tenochtitlan / Mexico City': { bugun: 'Mexico City, Meksika', kurulus: '1325 (Tenochtitlan)', wiki: 'Mexico City', onem: 'Aztek ve Meksika başkenti; Amerika\'nın en büyük şehirlerinden.', ilginc: 'Zócalo meydanı dünyanın en büyük kent meydanlarından biri; altında Aztek tapınakları var.' },
    'Tikal': { bugun: 'Petén, Guatemala', kurulus: 'MÖ ~600', wiki: 'Tikal', onem: 'Klasik Maya\'nın en büyük şehirlerinden.', ilginc: 'Şehrin Maya dilindeki adı "Yax Mutal"dı.' },
    'Havana': { bugun: 'Küba', kurulus: '1519', wiki: 'Havana', onem: 'İspanyol hazine filolarının toplandığı liman.', ilginc: 'Sokaklarında 1950\'lerin Amerikan arabaları hâlâ taksi olarak çalışıyor.' }
  };
  window.KULTUR = { tanrilar: [], olumler: [], roller: [], mumyalama: '', ic: { eslesme: {}, sahneler: {} }, bilim: { genel: '', cag: {} } };
  window.SINIRLAR = [];

  window.OLAYLAR = [
    { id: 'tikalcalakmul', tur: 'savas', ad: 'Tikal-Calakmul savaşı', y: -695, ll: [17.22, -89.62], onem: 3, wiki: 'Jasaw Chan K\'awiil I', taraflar: ['Tikal (Jasaw Chan K\'awiil)', 'Calakmul (Yuknoom Yich\'aak K\'ahk\')'], kazanan: 'Tikal', sonuc: 'Tikal yeniden yükseldi; Calakmul\'un gücü zayıfladı.' },
    { id: 'tenochtitlan1521', tur: 'savas', ad: 'Tenochtitlan kuşatması', y: -1521, ll: [19.43, -99.13], onem: 5, wiki: 'Fall of Tenochtitlan', taraflar: ['İspanyollar (Cortés) ve Tlaxcala gibi yerli müttefikler', 'Aztekler (Cuauhtémoc)'], kazanan: 'İspanyollar ve müttefikleri', sonuc: 'Aztek İmparatorluğu sona erdi; Yeni İspanya kuruldu.' },
    { id: 'haitidevrimi', tur: 'savas', ad: 'Haiti Devrimi', y: -1791, ll: [19.76, -72.2], onem: 5, wiki: 'Haitian Revolution', taraflar: ['Köleleştirilmiş Afrikalılar (Toussaint Louverture, Dessalines)', 'Fransa'], kazanan: 'Haitililer', sonuc: '1804\'te Haiti bağımsız oldu; tarihin tek başarılı köle devrimi.' },
    { id: 'puebla1862', tur: 'savas', ad: 'Puebla Savaşı', y: -1862, ll: [19.04, -98.21], onem: 3, wiki: 'Battle of Puebla', taraflar: ['Meksika (Zaragoza)', 'Fransa'], kazanan: 'Meksika', sonuc: '5 Mayıs (Cinco de Mayo) kutlamasının kaynağı.' },
    { id: 'guadalupehidalgo', tur: 'antlasma', ad: 'Guadalupe Hidalgo Antlaşması', y: -1848, ll: [19.48, -99.12], onem: 4, wiki: 'Treaty of Guadalupe Hidalgo', taraflar: ['ABD', 'Meksika'], sonuc: 'Meksika bugünkü Kaliforniya, Arizona, Nevada, Utah ve diğer bölgeleri ABD\'ye verdi.' },
    { id: 'kolomb1492', tur: 'olay', ad: 'Kolomb Karayipler\'de', y: -1492, ll: [24.05, -74.53], onem: 5, wiki: 'Voyages of Christopher Columbus', sonuc: '12 Ekim 1492\'de Bahamalar\'a ulaştı; iki dünya arasında kalıcı temas başladı.' },
    { id: 'dolores', tur: 'olay', ad: 'Dolores Çığlığı', y: -1810, ll: [21.16, -100.93], onem: 4, wiki: 'Cry of Dolores', sonuc: 'Meksika bağımsızlık savaşı başladı (16 Eylül).' },
    { id: 'fuzekrizi', tur: 'olay', ad: 'Küba füze krizi', y: -1962, ll: [22.0, -80.0], onem: 5, wiki: 'Cuban Missile Crisis', sonuc: 'Dünya nükleer savaşın eşiğinden döndü; Türkiye\'deki Jüpiter füzeleri de pazarlığın parçasıydı.' },
    { id: 'cicek1520', tur: 'afet', alt: 'salgin', ad: 'Çiçek salgını', y: -1520, ll: [19.43, -99.13], onem: 5, wiki: '1520 Mexico smallpox epidemic', sonuc: 'Avrupa\'dan gelen salgınlar yerli nüfusun büyük kısmını öldürdü; fethi kolaylaştırdı.' },
    { id: 'haiti2010', tur: 'afet', alt: 'deprem', ad: 'Haiti depremi', y: -2010, ll: [18.46, -72.53], onem: 5, wiki: '2010 Haiti earthquake', sonuc: '7,0 büyüklüğünde; ~100.000-300.000 ölü.' },
    { id: 'mexico1985', tur: 'afet', alt: 'deprem', ad: 'Mexico City depremi', y: -1985, ll: [18.19, -102.53], onem: 4, wiki: '1985 Mexico City earthquake', sonuc: 'Göl zemini sarsıntıyı büyüttü; ~5.000-10.000 ölü.' }
  ];

  window.ULKE_SAYFA = window.ULKE_SAYFA || {};
  window.ULKE_SAYFA.mezoamerika = {
    id: 'mezoamerika', ad: 'Mezoamerika ve Karayipler', ikon: '🌽', kw: ['meksika', 'mexico', 'maya', 'aztek', 'olmek', 'teotihuacan', 'tikal', 'chichen itza', 'tenochtitlan', 'karayip', 'küba', 'haiti', 'panama', 'guatemala', 'orta amerika', 'kolomb', 'cortés'],
    altBaslik: 'MÖ ~2000 – bugün · Olmeklerden Mayalara, Azteklerden bugünkü Meksika\'ya', kapakWiki: 'Chichen Itza', kapakAd: 'Chichén Itzá', merkez: [18, -90], merkezZ: 4.2,
    ozet: ['<b>Mezoamerika</b>, Olmekler, Mayalar ve Azteklerin uygarlıklarını doğuran kültür bölgesidir. Mısır, kakao ve domates burada evcilleştirildi; Mayalar sıfırı kullanan bir takvim ve yazı geliştirdi.', '1492\'den sonra Kolomb Karayipler\'e, 1519\'da Cortés Meksika\'ya geldi. Yeni İspanya üç yüzyıl sürdü; 19. yüzyılda Haiti, Meksika ve Orta Amerika bağımsız oldu.'],
    bilgiKutusu: [['Tarih', 'MÖ ~2000 – bugün'], ['Önemli şehirler', 'La Venta, Monte Albán, Teotihuacan, Tikal, Palenque, Chichén Itzá, Tenochtitlan, Havana'], ['Diller', 'İspanyolca, Nahuatl, Maya dilleri, Haiti Kreolü'], ['Bugün', '~227 milyon kişi']],
    donemler: { 'mezoamerika-antik': 'Olmekler, Teotihuacan ve klasik Maya.', 'mezoamerika-aztek': 'Toltekler, Chichén Itzá ve Aztekler.', 'mezoamerika-modern': 'Yeni İspanya, bağımsızlık ve bugün.' },
    kultur: [{ baslik: 'Diller', ikon: '🗣️', html: '<p>Nahuatl (Aztek dili), 30\'dan fazla Maya dili, Zapotek, Mixtek; İspanyolca; Karayipler\'de İngilizce, Fransızca ve Kreol diller.</p>' }, { baslik: 'Din', ikon: '⛪', html: '<p>Mezoamerika tanrıları (Quetzalcoatl, Tlaloc, Huitzilopochtli); bugün Katoliklik, yerli inançlarla karışık (Ölüler Günü).</p>' }],
    figurler: [
      { id: 'chichenitza', ad: 'Chichén Itzá', tur: 'yapı', wiki: 'El Castillo, Chichen Itza', ll: [20.6829, -88.5686], z: 85, yapim: '~9-12. yy', kim: 'Mayalar', durum: 'ayakta', durumYazi: 'Ayakta.', nerede: 'Yucatán', metin: 'Kukulkan piramidi.', git: { place: 'mezoamerika-aztek', y: -1100, id: 'chichenitza' } },
      { id: 'teotihuacan', ad: 'Güneş Piramidi', tur: 'yapı', wiki: 'Pyramid of the Sun', ll: [19.6925, -98.8438], z: 80, yapim: '~100-200', kim: 'Teotihuacan', durum: 'ayakta', durumYazi: 'Ayakta.', nerede: 'Meksika', metin: 'Teotihuacan\'ın dev piramidi.', git: { place: 'mezoamerika-antik', y: -200, id: 'teotihuacan' } }
    ],
    kisiler: [
      { ad: 'K\'inich Janaab Pakal', wiki: 'K\'inich Janaab\' Pakal', yil: '603-683', ozet: 'Palenque kralı.', y: -650 }, { ad: 'Nezahualcóyotl', wiki: 'Nezahualcoyotl (tlatoani)', yil: '1402-1472', ozet: 'Şair kral.', y: -1440 },
      { ad: 'II. Moctezuma', wiki: 'Moctezuma II', yil: '~1466-1520', ozet: 'Aztek hükümdarı.', y: -1519 }, { ad: 'Malintzin', wiki: 'La Malinche', yil: '~1500-1529', ozet: 'Tercüman ve danışman.', y: -1519 },
      { ad: 'Sor Juana İnés de la Cruz', wiki: 'Juana Inés de la Cruz', yil: '1648-1695', ozet: 'Şair rahibe.', y: -1690 }, { ad: 'Toussaint Louverture', wiki: 'Toussaint Louverture', yil: '1743-1803', ozet: 'Haiti Devrimi önderi.', y: -1795 },
      { ad: 'Benito Juárez', wiki: 'Benito Juárez', yil: '1806-1872', ozet: 'Zapotek kökenli devlet başkanı.', y: -1862 }, { ad: 'Emiliano Zapata', wiki: 'Emiliano Zapata', yil: '1879-1919', ozet: 'Devrimin köylü önderi.', y: -1914 },
      { ad: 'Frida Kahlo', wiki: 'Frida Kahlo', yil: '1907-1954', ozet: 'Ressam.', y: -1940 }
    ],
    biliyorMuydunuz: ['Mısır yaklaşık 9.000 yıl önce güney Meksika\'da teosinte adlı yabani bir otten evcilleştirildi.', 'Aztek pazarlarında kakao çekirdekleri para olarak kullanılıyordu: bir hindi ~100 çekirdek ederdi.', 'Mayalar hâlâ yaşıyor: Meksika ve Guatemala\'da 6 milyondan fazla kişi Maya dili konuşuyor.', 'Haiti, Latin Amerika\'da bağımsızlığını kazanan ilk ülkedir (1804).']
  };
})();
