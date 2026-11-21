// Hindistan (Hint Alt Kıtası: bugünkü Hindistan, Pakistan, Bangladeş, Nepal, Sri Lanka).
// Yıl: MÖ pozitif, MS negatif. Sahne (wx): İndus'tan Ganj'a, sonra güneye
//   Mohenjo-daro 700 · Harappa 1100 · Lahor 1400 · Delhi 2200 · Agra 2600 · Sanchi 3300 · Sarnath/Varanasi 3900
//   Bodh Gaya 4300 · Pataliputra 4500 · Kalküta 5300 · Mumbai 5000 · Hampi 6200 · Tancavur 6800 · Sri Lanka 7600
// Kaynaklar: Thapar, "Early India" (2002); Keay, "India: A History" (2010); Eaton, "India in the Persianate Age" (2019);
//   Richards, "The Mughal Empire" (1993); Guha, "India After Gandhi" (2007).
(() => {
  window.PLACES = window.PLACES || [];

  // ================= 1. İNDUS, VEDALAR, BUDA VE MAURYA =================
  window.PLACES.push({
    id: 'hindistan-antik', sira: 1, kisa: 'İndus, Vedalar ve Maurya', aralikAd: 'MÖ 3300 – MS 320',
    baslik: 'Mohenjo-daro · Vedalar · Buda · Aşoka · Sanchi',
    ulkeAlt: 'İndus uygarlığından Vedik çağa, Buda\'dan Maurya İmparatorluğu\'na ve Kuşanlara (MÖ 3300 – MS 320)',
    from: 3300, to: -320, start: 2500,
    not: 'İndus yazısı henüz çözülemedi; MÖ 600 öncesi tarihler arkeolojik tahminlerdir. Buda\'nın tarihleri tartışmalıdır (MÖ ~563-483 ya da ~480-400).', baskent: 'Mohenjo-daro ve Harappa; sonra Pataliputra',
    sahne: { kizak: false, araba: [1500, 200], katipYok: true, giyim: 'antik' },
    dynasties: [
      { from: 3300, to: 1900, ad: 'İndus (Harappa) uygarlığı', renk: '#9a6a2a' }, { from: 1900, to: 600, ad: 'Vedik çağ', renk: '#6a7a3a' },
      { from: 600, to: 322, ad: 'Mahacanapadalar ve Magadha', renk: '#8a5a2a' }, { from: 322, to: 185, ad: 'Maurya İmparatorluğu', renk: '#a8742e' },
      { from: 185, to: -320, ad: 'Bölünmüş krallıklar ve Kuşanlar', renk: '#6a4a7a' }
    ],
    rulers: [
      { from: 3300, to: 2600, ad: 'Erken Harappa köyleri', kisa: '?', kim: 'İndus vadisinde çiftçi köyleri büyüyüp kasabalara dönüşüyor.' },
      { from: 2600, to: 1900, ad: 'İndus şehirleri (yöneticileri bilinmiyor)', kisa: '?', kim: 'Mohenjo-daro ve Harappa gibi planlı şehirler. Saray ya da kral mezarı bulunamadı; nasıl yönetildikleri bilinmiyor.' },
      { from: 1900, to: 1500, ad: 'Geç Harappa', kisa: '?', kim: 'Şehirler terk edildi; olasılıkla iklim değişikliği ve nehirlerin yön değiştirmesi yüzünden.' },
      { from: 1500, to: 600, ad: 'Vedik racalar ve kabile reisleri', kisa: 'Racalar', kim: 'Hint-Aryan dilli topluluklar Pencap\'tan Ganj ovasına yayıldı. Rigveda ilahileri sözlü olarak aktarıldı.' },
      { from: 600, to: 322, ad: '16 mahacanapada; Magadha (Bimbisara, Nandalar)', kisa: 'Magadha', kim: 'Ganj ovasında 16 büyük krallık. Buda ve Mahavira bu dönemde öğretilerini yaydı. İskender Pencap\'a geldi (MÖ 326).' },
      { from: 322, to: 298, ad: 'Çandragupta Maurya', kisa: 'Çandragupta', kim: 'Nanda hanedanını devirip Maurya İmparatorluğu\'nu kurdu; danışmanı Kautilya\'nın Arthashastra\'sı devlet yönetimi kitabıdır.' },
      { from: 298, to: 268, ad: 'Bindusara', kisa: 'Bindusara', kim: 'İmparatorluğu güneye genişletti; Selevkoslarla elçi değiş tokuşu.' },
      { from: 268, to: 232, ad: 'Aşoka', kisa: 'Aşoka', kim: 'Kalinga savaşındaki kıyımdan pişman olup Budizmi benimsedi. Fermanlarını kayalara ve sütunlara kazıttı; Budizmi Sri Lanka\'ya ve ötesine yaydı.' },
      { from: 232, to: 185, ad: 'Son Mauryalar', kisa: 'Mauryalar', kim: 'İmparatorluk zayıfladı; son Maurya kralı komutanı Puşyamitra Şunga tarafından öldürüldü.' },
      { from: 185, to: -320, ad: 'Şungalar, Hint-Yunanlar, Kuşanlar ve Satavahanalar', kisa: 'Kuşanlar', kim: 'Kuzeybatıda Kuşan kralı Kanişka Budizmin koruyucusu oldu; Gandhara\'da ilk Buda heykelleri. Güneyde Roma ile baharat ticareti.' }
    ],
    eras: [
      { from: 3300, to: 1900, puan: { eko: 5, ordu: 1, istikrar: 5 }, baskent: 'Mohenjo-daro, Harappa',
        gundem: 'İndus vadisinde dünyanın en geniş ilk uygarlığı: 1 milyondan fazla km². Izgara planlı sokaklar, evlerde tuvalet ve kapalı kanalizasyon, standart tuğlalar ve ağırlıklar. Mühürler üzerindeki yazı hâlâ okunamıyor.',
        savas: 'Büyük orduların ya da savaşların izi neredeyse yok; silah buluntusu çok az.',
        ekonomi: 'Pamuk tarımı ve dokuma (dünyanın ilk pamuklu kumaşları), boncuk atölyeleri. Mezopotamya ile deniz ticareti: Sümer metinlerinde "Meluhha".',
        din: 'Ana tanrıça figürinleri, "Büyük Hamam" (belki arınma töreni), boynuzlu oturan figürlü mühürler.',
        yasam: 'Çocuk oyuncakları, zar, tartı ağırlıkları. Şehirlerde 30-40 bin kişi.',
        bilgi: 'Mohenjo-daro\'nun tuğlaları 1:2:4 oranında standarttı; aynı oran yüzlerce kilometre uzaktaki şehirlerde de kullanıldı.' },
      { from: 1900, to: 600, puan: { eko: 3, ordu: 3, istikrar: 3 }, baskent: 'Kabile merkezleri; sonra Hastinapura, Kauşambi',
        gundem: 'İndus şehirleri terk edildi. Hint-Aryan dilli göçmenler Sanskritçenin atası olan dili getirdi; dört Veda sözlü olarak aktarıldı. Toplum varnalara (rahip, savaşçı, tüccar-çiftçi, işçi) ayrılmaya başladı.',
        savas: 'Atlı savaş arabaları; Rigveda\'daki "On Kral Savaşı".',
        ekonomi: 'Sığır zenginlik ölçüsü; demir (MÖ ~1000\'den) Ganj ormanlarını açtı ve pirinç tarımı yayıldı.',
        din: 'Vedik tanrılar: Indra, Agni, Varuna. Ateş kurbanları; sonra Upanişadlar\'da ruh (atman) ve evren (brahman) fikirleri.',
        yasam: 'Köyler, sürüler, at yarışları; soma içeceğiyle yapılan törenler.',
        bilgi: 'Rigveda yazıya geçirilmeden önce yaklaşık 3.000 yıl boyunca harfi harfine ezberlenerek aktarıldı.' },
      { from: 600, to: 185, puan: { eko: 4, ordu: 5, istikrar: 4 }, baskent: 'Racagriha, sonra Pataliputra',
        gundem: 'Ganj ovasında şehirler ve krallıklar. Siddhartha Gautama (Buda) ve Mahavira (Caynizm) yeni öğretiler yaydı. Maurya İmparatorluğu neredeyse bütün alt kıtayı birleştirdi; Aşoka şiddetten vazgeçip barış ve hoşgörü fermanları yayımladı.',
        savas: 'Maurya ordusunda fil birlikleri; Kalinga savaşında (MÖ ~261) yüz binden fazla ölü.',
        ekonomi: 'Damgalı gümüş sikkeler, yollar ve vergi teşkilatı. Pataliputra\'nın ahşap surları 14 km.',
        din: 'Budizm ve Caynizm doğdu; Aşoka Budizmi Asya\'ya yaydı.',
        yasam: 'Panini Sanskrit dilbilgisini yazdı. Yunan elçi Megasthenes Hindistan\'ı anlattı.',
        bilgi: 'Hindistan\'ın bugünkü devlet arması, Aşoka\'nın Sarnath\'taki sütununun tepesindeki dört aslandan alındı.' },
      { from: 185, to: -320, puan: { eko: 5, ordu: 3, istikrar: 2 }, baskent: 'Pataliputra, Puruşapura (Peşaver), Mathura',
        gundem: 'Bölünmüş krallıklar ama canlı bir ticaret çağı. Gandhara\'da Yunan ve Hint sanatı birleşti: Buda ilk kez insan biçiminde heykelleştirildi. Güney limanlarından Roma\'ya karabiber ve inci gidiyor.',
        savas: 'Hint-Yunan krallıkları, Sakalar ve Kuşanlar kuzeybatıdan geldi.',
        ekonomi: 'Roma altın sikkeleri güney Hindistan\'da binlerce bulundu. Muson rüzgârları Kızıldeniz\'den Hindistan\'a deniz yolunu açtı.',
        din: 'Mahayana Budizmi gelişti; Bhagavad Gita yazıldı.',
        yasam: 'Sanchi stupasının kapıları taş oymalarla süslendi; Tamil Sangam şiiri.',
        bilgi: 'Romalı yazar Yaşlı Plinius, Roma\'nın her yıl Hindistan\'a 50 milyon sesterslik altın gönderdiğinden yakınır.' }
    ],
    nufus: [[3300, 1], [2500, 4], [1500, 8], [600, 20], [250, 40], [1, 60], [-320, 65]],
    nufusNot: 'Bütün Hint Alt Kıtası için kaba tahminler.',
    dunyaOzet: { eko: 'İndus Mezopotamya ile ticaret yapıyor; sonra Hindistan Roma ve Çin arasında baharat ve kumaş merkezi.', askeri: 'Savaş arabaları, sonra fil birlikleri ve okçular.' },
    events: [
      { y: 2600, t: 'İndus şehirleri büyüdü', k: 'm' }, { y: 2500, t: 'Mohenjo-daro\'nun Büyük Hamamı', k: 'm' }, { y: 1900, t: 'İndus şehirleri terk edilmeye başladı', k: 'm' }, { y: 1500, t: 'Rigveda', k: 'm' },
      { y: 1000, t: 'Ganj ovasında demir', k: 'm' }, { y: 528, t: 'Buda\'nın aydınlanması (geleneksel tarih)', k: 'm' }, { y: 326, t: 'İskender İndus\'ta', k: 'm' }, { y: 322, t: 'Maurya İmparatorluğu', k: 'm' },
      { y: 261, t: 'Kalinga savaşı', k: 'm' }, { y: 250, t: 'Sanchi stupası ve Aşoka sütunları', k: 'm' }, { y: 185, t: 'Mauryaların sonu', k: 'm' }, { y: -127, t: 'Kanişka tahta çıktı', k: 'm' },
      { y: 2560, t: 'Büyük Piramit', k: 'w' }, { y: 1754, t: 'Hammurabi', k: 'w' }, { y: 221, t: 'Çin birleşti', k: 'w' }, { y: -117, t: 'Roma en geniş sınırlarında', k: 'w' }
    ],
    world: [
      { from: 3100, to: 1069, yer: 'Mısır', t: 'Firavunlar.' }, { from: 2900, to: 1595, yer: 'Mezopotamya', t: 'Sümer ve Babil; İndus ile ticaret.' }, { from: 550, to: 330, yer: 'İran', t: 'Pers İmparatorluğu İndus\'a kadar uzandı.' },
      { from: 206, to: -220, yer: 'Çin', t: 'Han hanedanı; Budizm Çin\'e ulaştı.' }, { from: 27, to: -320, yer: 'Roma', t: 'Roma İmparatorluğu; baharat ticareti.' }
    ],
    sites: [{ ad: 'MOHENJO-DARO', wx: 700 }, { ad: 'HARAPPA', wx: 1100 }, { ad: 'TAKŞAŞİLA', wx: 1300 }, { ad: 'MATHURA', wx: 2400 }, { ad: 'SANCHİ', wx: 3300 }, { ad: 'SARNATH', wx: 3900 }, { ad: 'BODH GAYA', wx: 4300 }, { ad: 'PATALİPUTRA', wx: 4500 }, { ad: 'ANURADHAPURA', wx: 7600 }],
    monuments: [
      { id: 'mohenjodaro', ad: 'Mohenjo-daro', yer: 'Sind, Pakistan', wx: 700, type: 'city', wall: false, b: 300, n: 30, hk: 0.26, start: 2600, end: 2500, vol: 8e4, ruin: 1800 },
      { id: 'sanchi', ad: 'Büyük Sanchi Stupası', yer: 'Madhya Pradeş', wx: 3300, type: 'stupa', b: 70, h: 30, start: 250, end: 240, vol: 6e4 },
      { id: 'asokasutun', ad: 'Aşoka\'nın Sarnath sütunu', yer: 'Sarnath, Varanasi yakını', wx: 3900, type: 'obelisk', b: 6, h: 16, start: 250, end: 248, vol: 5e3 }
    ],
    hizli: [{ ad: 'Mohenjo-daro', y: 2500 }, { ad: 'İndus\'un sonu', y: 1800 }, { ad: 'Rigveda', y: 1400 }, { ad: 'Buda', y: 528 }, { ad: 'İskender', y: 326 }, { ad: 'Çandragupta', y: 320 }, { ad: 'Aşoka', y: 255 }, { ad: 'Kanişka', y: -127 }],
    bilgi: {
      mohenjodaro: { ikon: '🧱', yaptiran: 'İndus halkı', donem: 'MÖ ~2600-1900', mimar: '—', sure: '—', neden: 'İndus kıyısında bir ticaret ve zanaat merkezi.', onem: 'Dünyanın en eski planlı şehirlerinden; Pakistan\'ın simgesi.', teknik: [['Nüfus', '~40.000'], ['Büyük Hamam', '12 × 7 m, 2,4 m derin']], nasil: 'Pişmiş tuğla; ızgara planlı caddeler; her evde kuyu ve tuvalet.', bugun: 'UNESCO Dünya Mirası (1980); tuz ve su baskını tehdidi altında.', ilginc: 'Adı Sindçe "ölüler tepesi" demek; asıl adı bilinmiyor.' },
      sanchi: { ikon: '☸️', yaptiran: 'Aşoka; kapılar Satavahanalar döneminde', donem: 'MÖ 3. yy; genişletme MÖ 2-1. yy', mimar: '—', sure: '—', neden: 'Buda\'nın kalıntıları için anıt.', onem: 'Hindistan\'ın en eski taş yapılarından; Budist sanatının başyapıtı.', teknik: [['Çap', '~36,6 m'], ['Yükseklik', '~16,5 m'], ['Kapı (torana)', '4']], nasil: 'Tuğla çekirdek taşla kaplandı; dört yönde oymalı taş kapılar.', bugun: 'UNESCO Dünya Mirası (1989).', ilginc: 'Kapılardaki oymalarda Buda hiç insan olarak gösterilmez: bir ayak izi, boş bir taht ya da bir ağaçla simgelenir.' },
      asokasutun: { ikon: '🦁', yaptiran: 'Aşoka', donem: 'MÖ ~250', mimar: '—', sure: '—', neden: 'Buda\'nın ilk vaazını verdiği yeri işaretlemek.', onem: 'Tepesindeki dört aslan Hindistan\'ın devlet arması.', teknik: [['Malzeme', 'Tek parça cilalı kumtaşı']], nasil: 'Taş o kadar cilalı ki uzun süre metal sanıldı.', bugun: 'Aslan başlığı Sarnath Müzesi\'nde.', ilginc: 'Hindistan bayrağının ortasındaki çark (Aşoka çakrası) da bu sütundan alındı.' }
    },
    ulke: [
      { ad: 'Genel bakış', ikon: '🧭', html: '<p>Hint Alt Kıtası\'nın ilk uygarlığı <b>İndus</b> (Harappa) şehirleridir. Ardından gelen <b>Vedik çağ</b> Hinduizmin temellerini attı. MÖ 6. yüzyılda <b>Buda</b> ve <b>Mahavira</b> yeni yollar gösterdi. <b>Maurya</b> İmparatorluğu ve Aşoka alt kıtayı ilk kez büyük ölçüde birleştirdi.</p>' },
      { ad: 'Dinler', ikon: '🕉️', html: '<ul><li><b>Vedik din → Hinduizm:</b> Vedalar, Upanişadlar, karma ve yeniden doğuş</li><li><b>Budizm:</b> Dört Yüce Gerçek, orta yol</li><li><b>Caynizm:</b> canlılara zarar vermeme (ahimsa)</li></ul>' }
    ]
  });

  // ================= 2. GUPTALAR VE HİNDU KRALLIKLARI =================
  window.PLACES.push({
    id: 'hindistan-klasik', sira: 2, kisa: 'Guptalar ve Hindu krallıkları', aralikAd: 'MS 320 – 1206',
    baslik: 'Gupta altın çağı · sıfır · Nalanda · Çolalar · Racputlar',
    ulkeAlt: 'Gupta altın çağından Harşa\'ya, güneyde Çola İmparatorluğu\'na ve Gazneli-Gurlu akınlarına (MS 320 – 1206)',
    from: -320, to: -1206, start: -450,
    not: 'Tarihler büyük ölçüde kesindir; bazı krallık tarihleri yazıtlara göre birkaç yıl oynayabilir.', baskent: 'Pataliputra, Kannauj, Tancavur ve bölgesel başkentler',
    sahne: { kizak: false, araba: false, deve: false, giyim: 'antik' },
    dynasties: [
      { from: -320, to: -550, ad: 'Gupta İmparatorluğu', renk: '#a8742e' }, { from: -550, to: -750, ad: 'Harşa ve bölgesel krallıklar', renk: '#6a7a4a' },
      { from: -750, to: -985, ad: 'Pala, Pratihara ve Raştrakuta', renk: '#7a4a5a' }, { from: -985, to: -1206, ad: 'Çolalar ve Racput krallıkları', renk: '#9a3a2a' }
    ],
    rulers: [
      { from: -320, to: -335, ad: 'I. Çandragupta', kisa: 'I. Çandragupta', kim: 'Gupta hanedanının kurucusu; Licchavi prensesiyle evlenerek güçlendi.' },
      { from: -335, to: -375, ad: 'Samudragupta', kisa: 'Samudragupta', kim: 'Kuzey Hindistan\'ı fethetti; müzisyen kral olarak sikkelerinde lir çalarken gösterilir.' },
      { from: -375, to: -415, ad: 'II. Çandragupta (Vikramaditya)', kisa: 'Vikramaditya', kim: 'Gupta altın çağı: şair Kalidasa sarayında. Çinli hacı Faxian ülkeyi barışçıl ve zengin buldu.' },
      { from: -415, to: -550, ad: 'Kumaragupta, Skandagupta ve son Guptalar', kisa: 'Guptalar', kim: 'Nalanda manastır üniversitesi kuruldu. Akhun (Eftalit) akınları imparatorluğu zayıflattı.' },
      { from: -550, to: -606, ad: 'Bölünmüş krallıklar', kisa: '?', kim: 'Gupta sonrası kuzeyde küçük krallıklar.' },
      { from: -606, to: -647, ad: 'Harşa', kisa: 'Harşa', kim: 'Kannauj\'dan kuzeyi birleştirdi; oyun yazarı kral. Çinli hacı Xuanzang sarayını ziyaret etti.' },
      { from: -647, to: -750, ad: 'Pallava ve Çalukya krallıkları; Arapların Sind fethi', kisa: 'Pallavalar', kim: 'Güneyde Pallavalar Mamallapuram\'ın taş tapınaklarını yaptı. Muhammed bin Kasım Sind\'i aldı (712).' },
      { from: -750, to: -985, ad: 'Pala, Pratihara ve Raştrakuta krallıkları', kisa: 'Palalar', kim: 'Kannauj için üç büyük krallığın 200 yıllık mücadelesi. Bengal\'de Budist Palalar.' },
      { from: -985, to: -1014, ad: 'Racaraca Çola', kisa: 'Racaraca', kim: 'Güney Hindistan ve Sri Lanka\'nın kuzeyini fethetti; Tancavur\'da dev Brihadişvara tapınağını yaptırdı.' },
      { from: -1014, to: -1044, ad: 'Racendra Çola', kisa: 'Racendra', kim: 'Donanmasıyla Malaya ve Sumatra\'daki Srivicaya limanlarına sefer yaptı (1025).' },
      { from: -1044, to: -1206, ad: 'Çolalar ve Racputlar; Gazneli ve Gurlu akınları', kisa: 'Racputlar', kim: 'Gazneli Mahmud Somnath\'ı yağmaladı (1025). Gurlu Muhammed Tarain\'de Racput Prithviraj\'ı yendi (1192).' }
    ],
    eras: [
      { from: -320, to: -550, puan: { eko: 5, ordu: 4, istikrar: 4 }, baskent: 'Pataliputra',
        gundem: 'Gupta altın çağı: matematikte sıfır ve onluk konum sistemi, Aryabhata\'nın astronomisi, Kalidasa\'nın oyunları, Ajanta\'nın duvar resimleri. Nalanda binlerce öğrencinin okuduğu bir manastır üniversitesi.',
        savas: 'Fil birlikleri ve atlı okçular. 5. yüzyıl sonunda Akhun akınları.',
        ekonomi: 'Altın sikkeler; pamuk, baharat ve değerli taş ihracatı. Güneydoğu Asya ile deniz ticareti.',
        din: 'Hinduizmin klasik biçimi: Vişnu ve Şiva tapınakları. Budizm ve Caynizm hâlâ güçlü.',
        yasam: 'Satrancın atası "çaturanga" oyunu. Ayurveda tıbbı.',
        bilgi: 'Aryabhata 499\'da Dünya\'nın kendi ekseni etrafında döndüğünü ve π sayısını 3,1416 olarak yazdı.' },
      { from: -550, to: -985, puan: { eko: 4, ordu: 4, istikrar: 2 }, baskent: 'Kannauj, Kanchipuram, Badami, Pala başkentleri',
        gundem: 'Kuzeyde Harşa\'dan sonra büyük krallıklar Kannauj için savaşıyor. Güneyde Pallavalar ve Çalukyalar taş tapınaklar yapıyor. Hint rakamları Bağdat\'a ulaştı ve oradan dünyaya yayıldı.',
        savas: 'Kalabalık fil ve piyade orduları; Racput savaşçı klanlarının doğuşu.',
        ekonomi: 'Tapınaklar toprak sahibi ve banka; Arap tüccarlar Malabar kıyısında.',
        din: 'Bhakti (sevgiyle bağlılık) hareketi Tamil şairleriyle başladı; Şankara Advaita felsefesini yaydı.',
        yasam: 'Mamallapuram\'da kayadan oyulmuş tapınaklar; Ellora\'da Kailasa tapınağı tek bir kayadan oyuldu.',
        bilgi: 'Bugün "Arap rakamları" dediğimiz sayılar aslında Hint rakamlarıdır; Araplar onlara "Hint rakamları" der.' },
      { from: -985, to: -1206, puan: { eko: 5, ordu: 4, istikrar: 3 }, baskent: 'Tancavur, Gangaikonda Çolapuram; kuzeyde Racput başkentleri',
        gundem: 'Güneyde Çola İmparatorluğu Hint Okyanusu\'nun deniz gücü oldu. Kuzeyde Racput krallıkları Gazneli Mahmud\'un ve sonra Gurlu Muhammed\'in akınlarıyla karşılaştı. Hacuraho tapınakları yapıldı.',
        savas: 'Çola donanması; Racput süvarisi. Tarain\'de (1192) Gurlu Türk-Afgan atlı okçuları kazandı.',
        ekonomi: 'Çola tüccar loncaları Çin\'e kadar elçi ve mal gönderdi. Tapınak şehirleri zengin.',
        din: 'Dev Hindu tapınakları: Brihadişvara, Hacuraho, Konark (1250). Budizm Hindistan\'da zayıflıyor.',
        yasam: 'Çola tunç heykelleri: dans eden Şiva (Nataraca).',
        bilgi: 'Brihadişvara tapınağının tepesindeki tek parça taşın ~80 ton olduğu ve kilometrelerce uzunluktaki bir rampayla yukarı çekildiği anlatılır.' }
    ],
    nufus: [[-320, 65], [-500, 70], [-800, 70], [-1000, 75], [-1206, 85]],
    nufusNot: 'Bütün Hint Alt Kıtası için kaba tahminler.',
    dunyaOzet: { eko: 'Hindistan dünya ekonomisinin büyük payını üretiyor: pamuk, baharat, değerli taşlar. Hint Okyanusu ticareti Arap ve Çin limanlarını birbirine bağlıyor.', askeri: 'Fil birlikleri, Racput süvarisi, Çola donanması; kuzeybatıdan Türk atlı okçular.' },
    events: [
      { y: -320, t: 'Gupta hanedanı', k: 'm' }, { y: -405, t: 'Faxian Hindistan\'da', k: 'm' }, { y: -427, t: 'Nalanda kuruldu', k: 'm' }, { y: -499, t: 'Aryabhata\'nın kitabı', k: 'm' },
      { y: -606, t: 'Harşa tahta çıktı', k: 'm' }, { y: -630, t: 'Xuanzang Nalanda\'da', k: 'm' }, { y: -712, t: 'Araplar Sind\'de', k: 'm' }, { y: -760, t: 'Ellora\'da Kailasa tapınağı', k: 'm' },
      { y: -1010, t: 'Brihadişvara tapınağı', k: 'm' }, { y: -1025, t: 'Somnath yağması; Çola deniz seferi', k: 'm' }, { y: -1192, t: 'İkinci Tarain Savaşı', k: 'm' }, { y: -1193, t: 'Nalanda yakıldı (~1193)', k: 'm' },
      { y: -476, t: 'Batı Roma\'nın sonu', k: 'w' }, { y: -622, t: 'Hicret', k: 'w' }, { y: -1071, t: 'Malazgirt', k: 'w' }
    ],
    world: [
      { from: -320, to: -651, yer: 'İran', t: 'Sasaniler.' }, { from: -618, to: -907, yer: 'Çin', t: 'Tang hanedanı; Xuanzang Hindistan\'a geldi.' }, { from: -750, to: -1258, yer: 'Bağdat', t: 'Abbasîler; Hint rakamları ve satranç batıya.' },
      { from: -802, to: -1206, yer: 'Kamboçya', t: 'Khmer İmparatorluğu; Hint etkili tapınaklar.' }
    ],
    sites: [{ ad: 'SİND', wx: 700 }, { ad: 'SOMNATH', wx: 1000 }, { ad: 'TARAİN', wx: 2000 }, { ad: 'KANNAUJ', wx: 2900 }, { ad: 'HACURAHO', wx: 3100 }, { ad: 'AJANTA', wx: 3500 }, { ad: 'NALANDA', wx: 4400 }, { ad: 'ELLORA', wx: 3600 }, { ad: 'MAMALLAPURAM', wx: 6500 }, { ad: 'TANCAVUR', wx: 6800 }],
    monuments: [
      { id: 'mahabodhi', ad: 'Mahabodhi Tapınağı', yer: 'Bodh Gaya, Bihar', wx: 4300, type: 'prang', b: 60, h: 55, renk: '#c8a878', start: -450, end: -500, vol: 5e4 },
      { id: 'nalanda', ad: 'Nalanda Mahavihara', yer: 'Bihar', wx: 4400, type: 'city', wall: true, b: 220, n: 18, hk: 0.24, start: -427, end: -450, vol: 5e4, ruin: -1193 },
      { id: 'brihadisvara', ad: 'Brihadişvara Tapınağı', yer: 'Tancavur, Tamil Nadu', wx: 6800, type: 'prang', b: 90, h: 66, renk: '#c4a070', start: -1003, end: -1010, vol: 1e5 }
    ],
    hizli: [{ ad: 'Guptalar', y: -320 }, { ad: 'Vikramaditya', y: -400 }, { ad: 'Nalanda', y: -427 }, { ad: 'Aryabhata', y: -499 }, { ad: 'Harşa', y: -630 }, { ad: 'Ellora', y: -760 }, { ad: 'Brihadişvara', y: -1010 }, { ad: 'Çola seferi', y: -1025 }, { ad: 'Tarain', y: -1192 }],
    bilgi: {
      mahabodhi: { ikon: '🪷', yaptiran: 'Gupta dönemi (Aşoka\'nın ilk tapınağının yerine)', donem: 'MS 5-6. yy; sonraki onarımlar', mimar: '—', sure: '—', neden: 'Buda\'nın aydınlandığı Bodhi ağacının yanında.', onem: 'Budizmin en kutsal yeri; Hindistan\'ın tuğladan yapılmış en eski tapınaklarından.', teknik: [['Yükseklik', '~55 m']], nasil: 'Tuğla piramit biçimli kule (şikhara).', bugun: 'UNESCO Dünya Mirası (2002).', ilginc: 'Bugünkü Bodhi ağacı, Sri Lanka\'ya götürülen asıl ağacın bir fidanından yetiştirildi.' },
      nalanda: { ikon: '📚', yaptiran: 'Gupta kralı Kumaragupta', donem: '~427-1193', mimar: '—', sure: '~800 yıl eğitim', neden: 'Budist manastır üniversitesi.', onem: 'Dünyanın ilk yatılı üniversitelerinden; Asya\'nın her yerinden öğrenci.', teknik: [['Öğrenci', '~10.000 (Xuanzang\'a göre)'], ['Öğretmen', '~1.500']], nasil: 'Avlulu manastırlar, tapınaklar ve 9 katlı olduğu yazılan kütüphane.', bugun: 'UNESCO Dünya Mirası (2016); yakınında 2014\'te yeni Nalanda Üniversitesi açıldı.', ilginc: 'Kütüphanesinin yakıldıktan sonra aylarca yandığı anlatılır.' },
      brihadisvara: { ikon: '🛕', yaptiran: 'Racaraca Çola', donem: '1003-1010', mimar: 'Kunjara Mallan Raja Raja Perunthachan', sure: '~7 yıl', neden: 'Şiva\'ya adanmış imparatorluk tapınağı.', onem: 'Dünyanın tamamen granitten yapılmış ilk büyük tapınaklarından.', teknik: [['Kule (vimana)', '~66 m'], ['Granit', '~130.000 ton']], nasil: 'Bölgede granit yokken taşlar 50 km uzaktan getirildi.', bugun: 'UNESCO Dünya Mirası (1987); hâlâ ibadet ediliyor.', ilginc: 'Tapınak 1.000 yılı aşkın sürede 6 büyük depremi atlattı.' }
    },
    ulke: [
      { ad: 'Genel bakış', ikon: '🧭', html: '<p><b>Gupta</b> çağı Hindistan\'ın klasik dönemidir: sıfır, onluk sayı sistemi, satranç, Ayurveda tıbbı ve Sanskrit edebiyatı. Ardından kuzeyde ve güneyde güçlü bölgesel krallıklar çıktı; güneydeki <b>Çolalar</b> Hint Okyanusu\'na hâkim oldu.</p>' },
      { ad: 'Hindistan\'ın dünyaya armağanları', ikon: '🎁', html: '<ul><li>Sıfır ve 0-9 rakamları</li><li>Satranç (çaturanga)</li><li>Pamuklu kumaş ve basma</li><li>Yoga ve meditasyon</li><li>Şeker kristali (khanda → "kand", "şeker")</li></ul>' }
    ]
  });

  // ================= 3. DELHİ SULTANLIĞI VE VİJAYANAGARA =================
  window.PLACES.push({
    id: 'hindistan-sultan', sira: 3, kisa: 'Delhi Sultanlığı', aralikAd: 'MS 1206 – 1526',
    baslik: 'Kutub Minar · Raziye Sultan · Tuğluklar · İbn Battuta · Vijayanagara',
    ulkeAlt: 'Türk-Afgan Delhi sultanlarından güneyde Vijayanagara İmparatorluğu\'na (MS 1206 – 1526)',
    from: -1206, to: -1526, start: -1220,
    not: 'Tarihler kesindir. Hükümdar şeridi Delhi Sultanlığı\'nı izler.', baskent: 'Delhi, Devletabad; güneyde Hampi (Vijayanagara)',
    sahne: { kizak: false, araba: false, deve: true, giyim: 'cubbe' },
    dynasties: [
      { from: -1206, to: -1290, ad: 'Memlük (Köle) sultanları', renk: '#2a6a4a' }, { from: -1290, to: -1320, ad: 'Halaçlar', renk: '#4a6a2a' },
      { from: -1320, to: -1414, ad: 'Tuğluklar', renk: '#6a4a2a' }, { from: -1414, to: -1526, ad: 'Seyyidler ve Lodiler', renk: '#3a5a6a' }
    ],
    rulers: [
      { from: -1206, to: -1210, ad: 'Kutbüddin Aybek', kisa: 'Aybek', kim: 'Gurlu Muhammed\'in Türk kölesi ve komutanı. Delhi Sultanlığı\'nı kurdu, Kutub Minar\'ı başlattı.' },
      { from: -1210, to: -1236, ad: 'Şemseddin İltutmış', kisa: 'İltutmış', kim: 'Sultanlığı sağlamlaştırdı; Cengiz Han\'ın peşindeki Harezmşah Celaleddin\'e sığınma vermedi ve Moğolları Hindistan\'dan uzak tuttu.' },
      { from: -1236, to: -1240, ad: 'Raziye Sultan', kisa: 'Raziye', kim: 'Delhi tahtına oturan ilk ve tek kadın hükümdar. Peçesiz ata binip orduya komuta etti.' },
      { from: -1240, to: -1290, ad: 'Balaban ve son Memlük sultanları', kisa: 'Balaban', kim: 'Balaban sert bir yönetimle Moğol akınlarına karşı sınırı korudu.' },
      { from: -1290, to: -1320, ad: 'Halaçlar (Alaeddin Halaç)', kisa: 'Alaeddin', kim: 'Alaeddin Moğol akınlarını defalarca püskürttü, Dekken\'e sefer yaptı ve pazarlara fiyat kontrolü getirdi.' },
      { from: -1320, to: -1351, ad: 'Tuğluklar (Muhammed bin Tuğluk)', kisa: 'Tuğluk', kim: 'Başkenti Devletabad\'a taşıyıp geri getirdi; bakır "itibari para" denedi. İbn Battuta onun sarayında kadı oldu.' },
      { from: -1351, to: -1398, ad: 'Firuz Şah Tuğluk ve halefleri', kisa: 'Firuz Şah', kim: 'Kanallar, şehirler ve Aşoka sütunlarını Delhi\'ye taşıtması.' },
      { from: -1398, to: -1414, ad: 'Timur\'un yağması ve dağılma', kisa: 'Timur', kim: 'Timur 1398\'de Delhi\'yi yağmaladı; sultanlık bölgesel devletlere bölündü.' },
      { from: -1414, to: -1451, ad: 'Seyyidler', kisa: 'Seyyidler', kim: 'Timur\'un temsilcisi olarak başlayan küçük bir hanedan.' },
      { from: -1451, to: -1526, ad: 'Lodiler (Behlül, Sikender, İbrahim)', kisa: 'Lodiler', kim: 'Afgan Lodi hanedanı; Sikender Lodi Agra şehrini kurdu (1504). İbrahim Lodi Panipat\'ta Babür\'e yenildi.' }
    ],
    eras: [
      { from: -1206, to: -1320, puan: { eko: 4, ordu: 5, istikrar: 3 }, baskent: 'Delhi',
        gundem: 'Türk kökenli köle komutanlar Delhi\'de bir sultanlık kurdu. Moğollar Orta Asya ve İran\'ı yıkarken Delhi onlara karşı direndi ve İslam dünyasından kaçan âlimlerin, şairlerin sığınağı oldu. Kutub Minar yükseliyor.',
        savas: 'Türk atlı okçuları ve fil birlikleri; Moğol akınlarına karşı sınır kaleleri.',
        ekonomi: 'Toprak vergisi (ikta sistemi); Dekken seferlerinden getirilen hazineler.',
        din: 'Çiştî tarikatı (Nizameddin Evliya) halk arasında sevildi. Hindu ve Müslüman kültürleri karışmaya başladı.',
        yasam: 'Emir Hüsrev Farsça ve Hindavi şiirler yazdı; Hindustani müziğin ve kavvalinin öncüsü sayılır.',
        bilgi: 'Emir Hüsrev\'in, sitarın ve tablanın icadıyla ilişkilendirilmesi bir söylencedir; ama kavvali müziğinin babası sayılır.' },
      { from: -1320, to: -1414, puan: { eko: 4, ordu: 4, istikrar: 2 }, baskent: 'Delhi (1327-1335 Devletabad)',
        gundem: 'Muhammed bin Tuğluk alt kıtanın büyük bölümünü yönetti ama tuhaf deneyleri isyanlara yol açtı. Güneyde 1336\'da Hindu Vijayanagara İmparatorluğu ve Müslüman Behmenî Sultanlığı kuruldu. Timur 1398\'de Delhi\'yi yağmaladı.',
        savas: 'Vijayanagara ile Behmenîler arasında bitmeyen savaşlar. Timur\'un ordusu Delhi önünde sultanın fillerini yendi.',
        ekonomi: 'Bakır sikke deneyi: herkes evinde sahte para basınca sistem çöktü.',
        din: 'Sufî dergâhları; Kabir\'in (15. yy) Hindu ve Müslüman inançlarını birleştiren şiirleri.',
        yasam: 'İbn Battuta Delhi\'yi "İslam dünyasının en büyük şehirlerinden" diye anlattı.',
        bilgi: 'Muhammed bin Tuğluk başkenti taşırken Delhi halkının neredeyse tamamını 1.100 km güneye, Devletabad\'a göç ettirdi; birkaç yıl sonra herkes geri döndü.' },
      { from: -1414, to: -1526, puan: { eko: 4, ordu: 3, istikrar: 2 }, baskent: 'Delhi, Agra; güneyde Hampi',
        gundem: 'Kuzey bölünmüş: Delhi\'de Seyyidler ve Lodiler, Bengal, Gucerat ve Malva\'da bağımsız sultanlıklar. Güneyde Vijayanagara zirvede: Hampi dünyanın en büyük şehirlerinden. Vasco da Gama Kalikut\'a ulaştı (1498).',
        savas: 'Vijayanagara\'nın Portekizlilerden at alıp kurduğu süvari. Babür 1526\'da toplarla Panipat\'ı kazandı.',
        ekonomi: 'Hampi pazarlarında elmas, at ve baharat. Portekizliler Goa\'yı aldı (1510).',
        din: 'Guru Nanak Sihizmi kurdu (15. yy sonu). Bhakti şairleri Mirabai ve Kabir.',
        yasam: 'İranlı elçi Abdürrezzak, Hampi\'nin yedi sur halkasını anlattı.',
        bilgi: 'Hampi 1500\'de belki 500.000 nüfusla Pekin\'den sonra dünyanın en büyük ikinci şehriydi.' }
    ],
    nufus: [[-1206, 85], [-1300, 95], [-1400, 95], [-1526, 110]],
    nufusNot: 'Bütün Hint Alt Kıtası için kaba tahminler.',
    dunyaOzet: { eko: 'Moğollar Asya\'yı birleştirdi; Hindistan pamuk ve baharatıyla zengin. 1498\'den sonra Portekizliler deniz yolunu açtı.', askeri: 'Türk süvarisi, filler; 1526\'dan sonra top ve tüfek.' },
    events: [
      { y: -1206, t: 'Delhi Sultanlığı kuruldu', k: 'm' }, { y: -1220, t: 'Kutub Minar yükseliyor', k: 'm' }, { y: -1236, t: 'Raziye Sultan', k: 'm' }, { y: -1250, t: 'Konark Güneş Tapınağı', k: 'm' },
      { y: -1306, t: 'Alaeddin Moğolları püskürttü', k: 'm' }, { y: -1327, t: 'Başkent Devletabad\'a taşındı', k: 'm' }, { y: -1334, t: 'İbn Battuta Delhi\'de', k: 'm' }, { y: -1336, t: 'Vijayanagara kuruldu', k: 'm' },
      { y: -1398, t: 'Timur Delhi\'yi yağmaladı', k: 'm' }, { y: -1469, t: 'Guru Nanak doğdu', k: 'm' }, { y: -1498, t: 'Vasco da Gama Kalikut\'ta', k: 'm' }, { y: -1504, t: 'Agra kuruldu', k: 'm' }, { y: -1510, t: 'Portekizliler Goa\'da', k: 'm' },
      { y: -1258, t: 'Bağdat\'ın düşüşü', k: 'w' }, { y: -1453, t: 'İstanbul\'un fethi', k: 'w' }, { y: -1492, t: 'Kolomb', k: 'w' }
    ],
    world: [
      { from: -1206, to: -1368, yer: 'Moğolistan', t: 'Moğol İmparatorluğu.' }, { from: -1370, to: -1507, yer: 'Orta Asya', t: 'Timurlular.' }, { from: -1299, to: -1526, yer: 'Anadolu', t: 'Osmanlı.' },
      { from: -1368, to: -1526, yer: 'Çin', t: 'Ming hanedanı.' }
    ],
    sites: [{ ad: 'MULTAN', wx: 900 }, { ad: 'LAHOR', wx: 1400 }, { ad: 'PANİPAT', wx: 2050 }, { ad: 'DELHİ', wx: 2200 }, { ad: 'AGRA', wx: 2600 }, { ad: 'DEVLETABAD', wx: 4000 }, { ad: 'KONARK', wx: 5300 }, { ad: 'KALİKUT', wx: 5800 }, { ad: 'HAMPİ', wx: 6200 }],
    monuments: [
      { id: 'kutubminar', ad: 'Kutub Minar ve Kuvvetü\'l-İslam Camii', yer: 'Delhi', wx: 2200, type: 'mosque', minare: 1, b: 80, h: 73, kubbe: '#b8704a', renk: '#b8704a', start: -1199, end: -1220, vol: 7e4 },
      { id: 'konark', ad: 'Konark Güneş Tapınağı', yer: 'Odişa', wx: 5300, type: 'prang', b: 80, h: 40, renk: '#8a7a6a', start: -1244, end: -1255, vol: 6e4 },
      { id: 'hampi', ad: 'Hampi (Vijayanagara)', yer: 'Karnataka', wx: 6200, type: 'city', wall: true, b: 340, n: 32, hk: 0.3, start: -1336, end: -1420, vol: 9e4, ruin: -1565 }
    ],
    hizli: [{ ad: 'Aybek', y: -1206 }, { ad: 'Kutub Minar', y: -1220 }, { ad: 'Raziye', y: -1237 }, { ad: 'Alaeddin', y: -1306 }, { ad: 'İbn Battuta', y: -1334 }, { ad: 'Vijayanagara', y: -1336 }, { ad: 'Timur', y: -1398 }, { ad: 'Vasco da Gama', y: -1498 }, { ad: 'Panipat', y: -1526 }],
    bilgi: {
      kutubminar: { ikon: '🗼', yaptiran: 'Kutbüddin Aybek, İltutmış; sonra Firuz Şah Tuğluk', donem: '1199-1220 (üst katlar 1369)', mimar: '—', sure: '~20 yıl', neden: 'Zafer kulesi ve camiye bağlı minare.', onem: 'Dünyanın en yüksek tuğla minaresi.', teknik: [['Yükseklik', '72,5 m'], ['Basamak', '379'], ['Kat', '5']], nasil: 'Kırmızı ve kahverengi kumtaşı; Kuran ayetleri ve Hint motifleri iç içe.', bugun: 'UNESCO Dünya Mirası (1993).', ilginc: 'Avlusunda 1.600 yıllık ve paslanmayan bir demir sütun var; Gupta döneminden kalma.' },
      konark: { ikon: '☀️', yaptiran: 'Doğu Ganga kralı I. Narasimhadeva', donem: '~1250', mimar: '—', sure: '~12 yıl', neden: 'Güneş tanrısı Surya\'ya adanmış.', onem: 'Taştan dev bir güneş arabası biçiminde tapınak.', teknik: [['Tekerlek', '24 oymalı taş tekerlek'], ['At', '7']], nasil: 'Tapınak 12 çift tekerlekli ve 7 atın çektiği bir araba gibi tasarlandı.', bugun: 'UNESCO Dünya Mirası (1984); ana kulesi yıkık.', ilginc: 'Tekerleklerin parmaklıkları güneş saati gibi çalışır: gölgeye bakarak saat okunabilir.' },
      hampi: { ikon: '🐘', yaptiran: 'Vijayanagara kralları (Harihara, Bukka, Krişnadevaraya)', donem: '1336-1565', mimar: '—', sure: '—', neden: 'Tungabhadra kıyısında dev bir başkent.', onem: 'Güney Hindistan\'ın son büyük Hindu imparatorluğunun başkenti.', teknik: [['Nüfus (1500)', '~500.000'], ['Alan', '~26 km²']], nasil: 'Granit kayalar arasına kurulmuş tapınaklar, saraylar ve fil ahırları.', bugun: 'UNESCO Dünya Mirası (1986).', ilginc: 'Talikota yenilgisinden (1565) sonra şehir aylarca yağmalandı ve bir daha toparlanamadı.' }
    },
    ulke: [
      { ad: 'Genel bakış', ikon: '🧭', html: '<p>1206\'da Türk kökenli köle komutanlar <b>Delhi Sultanlığı</b>nı kurdu; beş hanedan 320 yıl yönetti. Sultanlık Moğollara direndi ve Hint-İslam kültürünü doğurdu: Urdu dili, kavvali müziği, yeni mimari. Güneyde <b>Vijayanagara</b> İmparatorluğu Hindu kültürünü yaşattı.</p>' }
    ]
  });

  // ================= 4. BABÜRLERDEN BUGÜNE =================
  window.PLACES.push({
    id: 'hindistan-modern', sira: 4, modern: true, kisa: 'Babürlerden bugüne', aralikAd: 'MS 1526 – bugün',
    baslik: 'Babür · Ekber · Tac Mahal · Doğu Hindistan Şirketi · Gandi · bağımsızlık',
    ulkeAlt: 'Babür İmparatorluğu\'ndan İngiliz yönetimine, 1947 bölünmesinden bugüne (MS 1526 – bugün)',
    from: -1526, to: -2026, start: -1648,
    not: 'Tarihler kesindir. 1947\'den sonra hükümdar şeridi Hindistan başbakanlarını izler.', baskent: 'Agra, Fatehpur Sikri, Lahor, Delhi; 1858-1911 Kalküta; bugün Yeni Delhi, İslamabad, Dakka',
    sahne: { kizak: false, deve: [-1526, -1900], buhar: -1853, oto: -1920, ucak: -1935, turist: -1980, giyim: [[-1526, 'cubbe'], [-1947, 'modern']] },
    dynasties: [
      { from: -1526, to: -1707, ad: 'Büyük Babürler', renk: '#2a7a4a' }, { from: -1707, to: -1858, ad: 'Babürlerin çöküşü ve Şirket', renk: '#7a5a2a' },
      { from: -1858, to: -1947, ad: 'Britanya Hindistanı (Raj)', renk: '#a82a2a' }, { from: -1947, to: -2026, ad: 'Hindistan, Pakistan, Bangladeş', renk: '#e07a1a' }
    ],
    rulers: [
      { from: -1526, to: -1530, ad: 'Babür', kisa: 'Babür', kim: 'Timur\'un ve Cengiz\'in soyundan. Panipat\'ta toplarla İbrahim Lodi\'yi yendi. Anılarını (Babürname) Çağatay Türkçesiyle yazdı.' },
      { from: -1530, to: -1556, ad: 'Hümayun (arada Şir Şah Suri)', kisa: 'Hümayun', kim: 'Şir Şah\'a yenilip İran\'a sığındı (1540); 1555\'te tahtını geri aldı ve bir yıl sonra kütüphanesinin merdiveninden düşüp öldü.' },
      { from: -1556, to: -1605, ad: 'Ekber', kisa: 'Ekber', kim: '13 yaşında tahta çıktı. Hinduları yönetime aldı, cizyeyi kaldırdı, dinler arası tartışmalar düzenledi. Okuma yazma bilmeyen ama dev bir kütüphane kuran imparator.' },
      { from: -1605, to: -1627, ad: 'Cihangir', kisa: 'Cihangir', kim: 'Sanata ve doğaya meraklı; eşi Nur Cihan devleti fiilen yönetti. İngiliz elçisi Thomas Roe sarayına geldi.' },
      { from: -1627, to: -1658, ad: 'Şah Cihan', kisa: 'Şah Cihan', kim: 'Eşi Mümtaz Mahal için Tac Mahal\'i, Delhi\'de Kızıl Kale\'yi yaptırdı. Oğlu Evrengzib onu Agra\'da hapsetti.' },
      { from: -1658, to: -1707, ad: 'Evrengzib', kisa: 'Evrengzib', kim: 'İmparatorluğu en geniş sınırlarına ulaştırdı ama Maratha savaşları onu tüketti. Cizyeyi geri getirdi.' },
      { from: -1707, to: -1757, ad: 'Babürlerin zayıflaması; Marathalar', kisa: 'Marathalar', kim: 'Eyalet valileri bağımsızlaştı; Marathalar yükseldi. Nadir Şah Delhi\'yi yağmaladı (1739).' },
      { from: -1757, to: -1858, ad: 'İngiliz Doğu Hindistan Şirketi', kisa: 'Şirket', kim: 'Plassey\'de (1757) Bengal\'i aldı; bir ticaret şirketi devlet gibi yönetmeye başladı. 1857 büyük ayaklanmasından sonra son Babür imparatoru sürgüne gönderildi.' },
      { from: -1858, to: -1947, ad: 'Britanya Hindistanı (Raj)', kisa: 'Raj', kim: 'İngiliz tacına bağlandı; Kraliçe Victoria "Hindistan İmparatoriçesi" (1877). Gandi\'nin şiddetsiz direnişi: Tuz Yürüyüşü (1930).' },
      { from: -1947, to: -1964, ad: 'Cevaharlal Nehru', kisa: 'Nehru', kim: 'Bağımsız Hindistan\'ın ilk başbakanı. Bölünmede milyonlarca kişi göç etti; Pakistan kuruldu.' },
      { from: -1964, to: -1984, ad: 'Lal Bahadur Şastri ve İndira Gandi', kisa: 'İndira', kim: 'Yeşil Devrim tahıl açığını kapattı. 1971\'de Bangladeş bağımsız oldu. İndira Gandi 1984\'te öldürüldü.' },
      { from: -1984, to: -2014, ad: 'Racif Gandi\'den Manmohan Singh\'e', kisa: 'Reformlar', kim: '1991 ekonomik reformları; Bangalore yazılım merkezi oldu.' },
      { from: -2014, to: -2026, ad: 'Narendra Modi', kisa: 'Modi', kim: 'Hindistan 2023\'te Çin\'i geçerek dünyanın en kalabalık ülkesi oldu; Ay\'ın güney kutbuna ilk iniş (Çandrayan-3).' }
    ],
    eras: [
      { from: -1526, to: -1707, puan: { eko: 5, ordu: 5, istikrar: 4 }, baskent: 'Agra, Fatehpur Sikri, Lahor, Delhi',
        gundem: 'Babür İmparatorluğu dünyanın en zengin devletlerinden: dünya üretiminin yaklaşık dörtte biri. Ekber hoşgörülü bir yönetim kurdu; Şah Cihan Tac Mahal\'i yaptırdı. Fars, Türk ve Hint kültürleri birleşti: minyatür, Urdu, bahçeler.',
        savas: 'Toplar, tüfekler ve savaş filleri; Babür ordusu yüz binlerce kişi.',
        ekonomi: 'Hint pamuklusu (basma, muslin) bütün dünyaya satılıyor; Avrupalılar gümüşle ödüyor.',
        din: 'Ekber\'in "Din-i İlahi" denemesi; Sihizm güçlendi. Evrengzib daha katı bir Sünnî yönetim kurdu.',
        yasam: 'Babür bahçeleri (çarbağ), minyatür atölyeleri, biryani ve kebap mutfağı.',
        bilgi: 'Babür Hindistan\'ı sevmedi; anılarında en çok Semerkant\'ın kavunlarını ve akan sularını özlediğini yazar.' },
      { from: -1707, to: -1858, puan: { eko: 4, ordu: 3, istikrar: 2 }, baskent: 'Delhi (adı kalan Babürler), Kalküta (Şirket)',
        gundem: 'Babürler zayıflarken Marathalar, Sihler ve eyalet valileri güçlendi. İngiliz Doğu Hindistan Şirketi Plassey\'den (1757) sonra Bengal\'i, sonra alt kıtanın çoğunu aldı. 1857\'de Hint askerlerinin (sipahi) ayaklanması bastırıldı.',
        savas: 'Şirketin Hintli askerlerden (sipahi) oluşan ordusu; Maysur kralı Tipu Sultan\'ın roketleri.',
        ekonomi: 'Bengal kıtlığı (1770). İngiliz makine kumaşları Hint dokumacılığını çökertti.',
        din: 'Raja Ram Mohan Roy\'un reform hareketi; dul yakma geleneği (sati) yasaklandı (1829).',
        yasam: 'İngilizce eğitim, demiryolu (1853) ve telgraf.',
        bilgi: '"Bungalov", "pijama", "şampuan", "veranda" ve "dungaree" kelimeleri İngilizceye Hint dillerinden geçti.' },
      { from: -1858, to: -1947, puan: { eko: 3, ordu: 3, istikrar: 3 }, baskent: 'Kalküta, 1911\'den Yeni Delhi',
        gundem: 'İngiliz Raj\'ı: demiryolları, kanallar ve üniversiteler ama aynı zamanda kıtlıklar ve yoksulluk. Hindistan Ulusal Kongresi (1885), sonra Gandi\'nin şiddetsiz direnişi: Tuz Yürüyüşü (1930), "Hindistan\'ı Terk Edin" (1942).',
        savas: 'İki dünya savaşında 2,5 milyondan fazla Hintli asker İngiltere için savaştı. Amritsar katliamı (1919).',
        ekonomi: 'Pamuk, çay, çivit ve afyon ihracatı. Bengal kıtlığı (1943).',
        din: 'Hindu-Müslüman ayrılığı derinleşti; Müslüman Birliği (1906) ayrı bir devlet istedi.',
        yasam: 'Rabindranath Tagore Nobel Edebiyat Ödülü\'nü aldı (1913); kriket ve sinema yayıldı.',
        bilgi: 'Gandi Tuz Yürüyüşü\'nde 24 günde 385 km yürüdü ve deniz kıyısında bir avuç tuz alarak İngiliz tuz tekelini çiğnedi.' },
      { from: -1947, to: -2026, puan: { eko: 4, ordu: 4, istikrar: 3 }, baskent: 'Yeni Delhi, İslamabad (Karaçi), Dakka',
        gundem: '1947\'de bağımsızlık ve bölünme: Hindistan ve Pakistan kuruldu, yaklaşık 15 milyon kişi göç etti, yüz binlerce kişi öldü. 1971\'de Bangladeş ayrıldı. Hindistan dünyanın en kalabalık demokrasisi; yazılım, uzay ve film endüstrisiyle yükselen bir güç.',
        savas: 'Hindistan-Pakistan savaşları (1947, 1965, 1971, 1999 Kargil); her iki ülke de nükleer güç (1974, 1998).',
        ekonomi: '1991 reformlarından sonra hızlı büyüme; Hindistan dünyanın en büyük 5 ekonomisi arasında.',
        din: 'Hindistan\'da Hindu çoğunluk ve ~200 milyon Müslüman; Pakistan ve Bangladeş Müslüman çoğunluklu.',
        yasam: 'Bollywood dünyada en çok film üreten sinema; kriket bir tutku.',
        bilgi: 'Hindistan 2023\'te Ay\'ın güney kutbu yakınına iniş yapan ilk ülke oldu (Çandrayan-3).' }
    ],
    nufus: [[-1526, 110], [-1600, 130], [-1700, 160], [-1800, 180], [-1900, 285], [-1947, 400], [-1980, 900], [-2000, 1350], [-2026, 1930]],
    nufusNot: 'Hindistan, Pakistan, Bangladeş, Nepal, Sri Lanka toplamı (bugün ~1,9 milyar); eski rakamlar kaba tahmindir.',
    dunyaOzet: { eko: 'Babür Hindistanı ve Ming Çini dünyanın en büyük ekonomileri; 19. yüzyılda Avrupa sanayisi öne geçti.', askeri: 'Tüfek ve top; sonra İngiliz Hint ordusu; bugün nükleer güçler.' },
    events: [
      { y: -1526, t: 'Panipat: Babür İmparatorluğu', k: 'm' }, { y: -1571, t: 'Fatehpur Sikri', k: 'm' }, { y: -1600, t: 'Doğu Hindistan Şirketi kuruldu (Londra)', k: 'm' }, { y: -1632, t: 'Tac Mahal başladı', k: 'm' },
      { y: -1648, t: 'Kızıl Kale', k: 'm' }, { y: -1707, t: 'Evrengzib öldü', k: 'm' }, { y: -1739, t: 'Nadir Şah Delhi\'de', k: 'm' }, { y: -1757, t: 'Plassey Savaşı', k: 'm' },
      { y: -1853, t: 'İlk tren (Bombay)', k: 'm' }, { y: -1857, t: 'Büyük Ayaklanma', k: 'm' }, { y: -1885, t: 'Hindistan Ulusal Kongresi', k: 'm' }, { y: -1930, t: 'Tuz Yürüyüşü', k: 'm' },
      { y: -1947, t: 'Bağımsızlık ve bölünme', k: 'm' }, { y: -1971, t: 'Bangladeş bağımsız', k: 'm' }, { y: -1991, t: 'Ekonomik reformlar', k: 'm' }, { y: -2023, t: 'Çandrayan-3 Ay\'da', k: 'm' },
      { y: -1683, t: 'Viyana Kuşatması', k: 'w' }, { y: -1789, t: 'Fransız İhtilali', k: 'w' }, { y: -1945, t: 'İkinci Dünya Savaşı bitti', k: 'w' }
    ],
    world: [
      { from: -1501, to: -1736, yer: 'İran', t: 'Safevîler.' }, { from: -1526, to: -1918, yer: 'Osmanlı', t: 'Osmanlı İmparatorluğu.' }, { from: -1644, to: -1912, yer: 'Çin', t: 'Qing hanedanı.' },
      { from: -1760, to: -1900, yer: 'İngiltere', t: 'Sanayi Devrimi ve imparatorluk.' }, { from: -1947, to: -2026, yer: 'Dünya', t: 'Sömürgelerin bağımsızlığı.' }
    ],
    sites: [{ ad: 'KARAÇİ', wx: 700 }, { ad: 'LAHOR', wx: 1400 }, { ad: 'AMRİTSAR', wx: 1600 }, { ad: 'DELHİ', wx: 2200 }, { ad: 'AGRA', wx: 2600 }, { ad: 'FATEHPUR SİKRİ', wx: 2750 }, { ad: 'VARANASİ', wx: 3900 }, { ad: 'MUMBAİ', wx: 5000 }, { ad: 'KALKÜTA', wx: 5300 }, { ad: 'BANGALORE', wx: 6300 }, { ad: 'DAKKA', wx: 5600 }],
    monuments: [
      { id: 'tacmahal', ad: 'Tac Mahal', yer: 'Agra', wx: 2600, type: 'mosque', minare: 4, b: 120, h: 73, kubbe: '#f6f2ea', renk: '#f2ede2', start: -1632, end: -1648, vol: 1.6e5 },
      { id: 'kizilkale', ad: 'Kızıl Kale', yer: 'Delhi', wx: 2250, type: 'citadel', b: 220, h: 34, start: -1639, end: -1648, vol: 1e5 },
      { id: 'cst', ad: 'Chhatrapati Shivaji Garı (Victoria Terminus)', yer: 'Mumbai', wx: 4900, type: 'gothic', b: 120, h: 50, renk: '#d8c8a0', start: -1878, end: -1888, vol: 5e4 },
      { id: 'mumbai', ad: 'Mumbai', yer: 'Maharaştra', wx: 5050, type: 'modcity', b: 420, h: 120, n: 46, start: -1960, end: -2020, vol: 9e4 }
    ],
    hizli: [{ ad: 'Panipat', y: -1526 }, { ad: 'Ekber', y: -1580 }, { ad: 'Tac Mahal', y: -1648 }, { ad: 'Evrengzib', y: -1690 }, { ad: 'Plassey', y: -1757 }, { ad: '1857', y: -1857 }, { ad: 'Tuz Yürüyüşü', y: -1930 }, { ad: 'Bağımsızlık', y: -1947 }, { ad: 'Reformlar', y: -1991 }, { ad: 'Bugün', y: -2026 }],
    bilgi: {
      tacmahal: { ikon: '🤍', yaptiran: 'Şah Cihan', donem: '1632-1648 (bütün külliye 1653)', mimar: 'Ustad Ahmed Lahorî', sure: '~21 yıl, ~20.000 işçi', neden: 'Doğumda ölen eşi Mümtaz Mahal\'in türbesi.', onem: 'Dünyanın en ünlü yapılarından; Dünyanın Yeni Yedi Harikası.', teknik: [['Yükseklik', '~73 m'], ['Minare', '4 (dışa doğru hafif eğik)'], ['Malzeme', 'Beyaz Makrana mermeri, 28 çeşit değerli taş']], nasil: 'Mermer içine değerli taş kakma (pietra dura); malzemeyi 1.000 filin taşıdığı anlatılır.', bugun: 'UNESCO Dünya Mirası (1983); yılda 6-8 milyon ziyaretçi.', ilginc: 'Minareler hafifçe dışa eğik yapıldı: bir deprem olursa türbenin üstüne değil, dışarı yıkılsınlar diye.' },
      kizilkale: { ikon: '🏰', yaptiran: 'Şah Cihan', donem: '1639-1648', mimar: 'Ustad Ahmed Lahorî', sure: '~9 yıl', neden: 'Yeni başkent Şahcihanabad\'ın sarayı.', onem: 'Bağımsız Hindistan\'ın simgesi: başbakan her 15 Ağustos\'ta burada bayrak çeker.', teknik: [['Sur', '~2,4 km, kırmızı kumtaşı']], nasil: 'Babür, Fars ve Hint mimarisinin karışımı; içinden kanal geçen saray bahçeleri.', bugun: 'UNESCO Dünya Mirası (2007).', ilginc: 'Ünlü Tavus Tahtı buradaydı; Nadir Şah 1739\'da onu İran\'a götürdü.' },
      cst: { ikon: '🚉', yaptiran: 'Great Indian Peninsula Railway', donem: '1878-1888', mimar: 'Frederick William Stevens', sure: '10 yıl', neden: 'Bombay\'ın ana tren garı.', onem: 'Viktorya Gotik ve Hint mimarisinin birleşimi.', teknik: [['Günlük yolcu', '~3 milyon (banliyö dahil)']], nasil: 'Gotik kuleler, kubbe ve Hint oyma süslemeleri.', bugun: 'UNESCO Dünya Mirası (2004).', ilginc: 'Hindistan\'ın en kalabalık garlarından biri; Slumdog Millionaire filminin dans sahnesi burada çekildi.' },
      mumbai: { ikon: '🏙️', yaptiran: '—', donem: '17. yy\'dan liman', mimar: '—', sure: '—', neden: 'Yedi adanın birleştirilmesiyle büyüyen liman.', onem: 'Hindistan\'ın finans ve film başkenti (~21 milyon metropol).', teknik: [['Nüfus (1900)', '~800.000']], nasil: '1660\'larda Portekiz\'den İngiltere\'ye çeyiz olarak geçti; adalar doldurularak birleştirildi.', bugun: 'Bollywood\'un merkezi.', ilginc: 'Dharavi, Asya\'nın en büyük gecekondu mahallelerinden biri; içinde binlerce küçük atölye çalışır.' }
    },
    ulke: [
      { ad: 'Genel bakış', ikon: '🧭', html: '<p>1526\'da <b>Babür</b> Hindistan\'a geldi; torunları Ekber, Şah Cihan ve Evrengzib dünyanın en zengin imparatorluklarından birini yönetti. 18. yüzyılda <b>İngiliz Doğu Hindistan Şirketi</b> güç kazandı; 1858\'de Hindistan İngiliz tacına bağlandı. <b>Gandi</b>\'nin önderliğinde 1947\'de bağımsızlık geldi ama alt kıta Hindistan ve Pakistan olarak bölündü.</p>' },
      { ad: 'Bugünkü ülkeler', ikon: '🗺️', html: '<ul><li><b>Hindistan</b> (~1,45 milyar, Yeni Delhi)</li><li><b>Pakistan</b> (~250 milyon, İslamabad)</li><li><b>Bangladeş</b> (~175 milyon, Dakka)</li><li><b>Nepal</b> (~30 milyon), <b>Sri Lanka</b> (~22 milyon), <b>Bhutan</b>, <b>Maldivler</b></li></ul>' }
    ]
  });

  window.BOLGE_TASI('hindistan');

  // ================= ORTAK VERİLER =================
  window.MISIR = {
    coords: { mohenjodaro: [27.3242, 68.1358], sanchi: [23.4793, 77.7398], asokasutun: [25.3811, 83.0225], mahabodhi: [24.6959, 84.9911], nalanda: [25.1357, 85.4434], brihadisvara: [10.7828, 79.1318], kutubminar: [28.5245, 77.1855], konark: [19.8876, 86.0945], hampi: [15.335, 76.46], tacmahal: [27.1751, 78.0421], kizilkale: [28.6562, 77.241], cst: [18.9398, 72.8355], mumbai: [19.076, 72.8777] },
    wiki: { mohenjodaro: 'Mohenjo-daro', sanchi: 'Sanchi', asokasutun: 'Lion Capital of Ashoka', mahabodhi: 'Mahabodhi Temple', nalanda: 'Nalanda mahavihara', brihadisvara: 'Brihadisvara Temple, Thanjavur', kutubminar: 'Qutb Minar', konark: 'Konark Sun Temple', hampi: 'Hampi', tacmahal: 'Taj Mahal', kizilkale: 'Red Fort', cst: 'Chhatrapati Shivaji Terminus', mumbai: 'Mumbai' },
    bilgi: {}, alt: {},
    kureAdlari: [[15, 64, 'ARAP DENİZİ', 'deniz', 2.6], [15, 88, 'BENGAL KÖRFEZİ', 'deniz', 2.6], [5, 78, 'HİNT OKYANUSU', 'deniz', 2.0], [22.5, 79, 'HİNDİSTAN', 'misir', 2.4],
      [29, 84, 'HİMALAYALAR', 'kucuk', 3.2], [17, 77, 'DEKKEN', 'bolge', 3.4], [26.5, 70.5, 'THAR ÇÖLÜ', 'kucuk', 4], [7.8, 80.7, 'SRİ LANKA', 'bolge', 4.2], [25.6, 84, 'Ganj', 'nehir', 5], [27, 68.2, 'İndus', 'nehir', 5]],
    sehirler: [
      { ad: 'Mohenjo-daro', ll: [27.3242, 68.1358], from: 2600, to: 1800, not: 'İndus uygarlığının en büyük şehri.' },
      { ad: 'Harappa', ll: [30.6283, 72.8636], from: 3300, to: 1300, not: 'İndus uygarlığına adını veren şehir.' },
      { ad: 'Pataliputra (Patna)', ll: [25.5941, 85.1376], from: 490, to: -2026, b: [[490, 185], [-320, -550]], not: 'Maurya ve Gupta başkenti.' },
      { ad: 'Varanasi', ll: [25.3176, 82.9739], from: 1200, to: -2026, not: 'Hinduizmin en kutsal şehri; dünyanın en eski yaşayan şehirlerinden.' },
      { ad: 'Takşaşila', ll: [33.7462, 72.8397], from: 1000, to: -500, not: 'Antik çağın ünlü öğrenim merkezi.' },
      { ad: 'Kannauj', ll: [27.07, 79.92], from: 600, to: -2026, b: [[-606, -1018]], not: 'Harşa\'nın başkenti.' },
      { ad: 'Tancavur', ll: [10.787, 79.1378], from: -850, to: -2026, b: [[-850, -1025]], not: 'Çola başkenti.' },
      { ad: 'Delhi', ll: [28.6139, 77.209], from: -1052, to: -2026, b: [[-1206, -1526], [-1648, -1857], [-1911, -2026]], not: 'Sultanların, Babürlerin ve bugün Hindistan\'ın başkenti.' },
      { ad: 'Agra', ll: [27.1767, 78.0081], from: -1504, to: -2026, b: [[-1526, -1648]], not: 'Babür başkenti; Tac Mahal.' },
      { ad: 'Hampi', ll: [15.335, 76.46], from: -1336, to: -1565, b: [[-1336, -1565]], not: 'Vijayanagara başkenti.' },
      { ad: 'Lahor', ll: [31.5204, 74.3587], from: -1000, to: -2026, b: [[-1586, -1598]], not: 'Babürlerin ve Sihlerin şehri; bugün Pakistan.' },
      { ad: 'Kalküta', ll: [22.5726, 88.3639], from: -1690, to: -2026, b: [[-1772, -1911]], not: 'Britanya Hindistanı\'nın başkenti.' },
      { ad: 'Mumbai', ll: [19.076, 72.8777], from: -1500, to: -2026, not: 'Hindistan\'ın finans başkenti.' },
      { ad: 'Anuradhapura', ll: [8.3114, 80.4037], from: 400, to: -1017, b: [[377, -1017]], not: 'Sri Lanka\'nın eski başkenti.' }
    ],
    nil: { ikon: '🌊', title: 'Ganj ve İndus', sub: 'Kutsal nehirler ve muson', foto: 'Ganges', tabs: [{ ad: '🌊 Nehirler', html: '<ul class="hap"><li><b>İndus</b> (~3.180 km) Tibet\'ten doğup Pakistan\'dan Arap Denizi\'ne akar: ilk uygarlık onun kıyısında doğdu.</li><li><b>Ganj</b> (~2.500 km) Himalayalar\'dan Bengal Körfezi\'ne akar; Hindular için tanrıça Ganga\'dır. Varanasi\'de milyonlarca hacı nehirde yıkanır.</li><li><b>Muson:</b> Haziran-Eylül arası güneybatıdan gelen yağmurlar yıllık yağışın ~%75\'ini getirir. Muson geç kalırsa kıtlık olur.</li><li>Himalayalar\'ın buzulları bu nehirlerin kaynağıdır; iklim değişikliği onları eritiyor.</li></ul>' }] },
    simgeler: [
      { id: 'hn-indus', ad: 'Mohenjo-daro', ikon: '🧱', wiki: 'Mohenjo-daro', git: { place: 'hindistan-antik', y: 2500, id: 'mohenjodaro' }, ozet: 'Kanalizasyonlu ilk şehir.', hap: ['MÖ ~2500.', 'Yazısı çözülemedi.'] },
      { id: 'hn-buda', ad: 'Buda ve Budizm', ikon: '☸️', wiki: 'The Buddha', git: { place: 'hindistan-antik', y: 528 }, ozet: 'Aydınlanmış olan.', hap: ['MÖ 6-5. yy.', 'Bodh Gaya.'] },
      { id: 'hn-asoka', ad: 'Aşoka\'nın aslanları', ikon: '🦁', wiki: 'Lion Capital of Ashoka', git: { place: 'hindistan-antik', y: 250, id: 'asokasutun' }, ozet: 'Hindistan\'ın arması.', hap: ['MÖ ~250.', 'Sarnath.'] },
      { id: 'hn-sifir', ad: 'Sıfır', ikon: '0️⃣', wiki: '0', git: { place: 'hindistan-klasik', y: -499 }, ozet: 'Matematiğin en büyük icatlarından.', hap: ['Gupta çağı.', 'Brahmagupta 628.'] },
      { id: 'hn-brihadisvara', ad: 'Brihadişvara Tapınağı', ikon: '🛕', wiki: 'Brihadisvara Temple, Thanjavur', git: { place: 'hindistan-klasik', y: -1010, id: 'brihadisvara' }, ozet: 'Çolaların granit dağı.', hap: ['1010.', '66 m.'] },
      { id: 'hn-kutub', ad: 'Kutub Minar', ikon: '🗼', wiki: 'Qutb Minar', git: { place: 'hindistan-sultan', y: -1220, id: 'kutubminar' }, ozet: 'En yüksek tuğla minare.', hap: ['1199-1220.', '72,5 m.'] },
      { id: 'hn-tac', ad: 'Tac Mahal', ikon: '🤍', wiki: 'Taj Mahal', git: { place: 'hindistan-modern', y: -1648, id: 'tacmahal' }, ozet: 'Sevginin anıtı.', hap: ['1632-1648.', 'Beyaz mermer.'] },
      { id: 'hn-gandi', ad: 'Gandi ve bağımsızlık', ikon: '🕊️', wiki: 'Mahatma Gandhi', git: { place: 'hindistan-modern', y: -1930 }, ozet: 'Şiddetsiz direniş.', hap: ['Tuz Yürüyüşü 1930.', 'Bağımsızlık 1947.'] }
    ],
    bugun: '<p>Hint Alt Kıtası bugün ~1,9 milyar kişiyle dünyanın en kalabalık bölgesi. <b>Hindistan</b> 2023\'te Çin\'i geçerek dünyanın en kalabalık ülkesi oldu.</p><ul class="hap"><li><b>Diller:</b> Hindistan\'da 22 resmî dil; Hintçe, Bengalce, Telugu, Tamilce, Urduca, Pencapça.</li><li><b>Din:</b> Hinduizm, İslam, Sihizm, Budizm, Caynizm, Hristiyanlık.</li><li><b>Ekonomi:</b> yazılım, ilaç, tekstil; Bollywood.</li><li><b>Uzay:</b> Mars\'a (2014) ve Ay\'ın güney kutbuna (2023) ulaştı.</li></ul>'
  };

  window.SEHIR_BILGI = {
    'Varanasi': { bugun: 'Uttar Pradeş, Hindistan', kurulus: 'MÖ ~1200 (belki daha eski)', wiki: 'Varanasi', onem: 'Hinduizmin en kutsal şehri; Ganj kıyısındaki merdivenli iskeleler (ghat).', ilginc: 'Hindular burada ölüp yakılmanın yeniden doğuş döngüsünden kurtardığına inanır; bazı yakma yerlerinde ateş binlerce yıldır hiç sönmedi deniyor.' },
    'Delhi': { bugun: 'Delhi, Hindistan', kurulus: 'Çok eski; tarihî olarak 11. yy\'dan', wiki: 'Delhi', onem: 'Yedi ayrı tarihî şehrin üst üste kurulduğu başkent.', ilginc: 'Delhi metropol alanı ~33 milyonla dünyanın en kalabalık ikinci şehir bölgesi.' },
    'Agra': { bugun: 'Uttar Pradeş, Hindistan', kurulus: '1504 (Sikender Lodi)', wiki: 'Agra', onem: 'Babür başkenti; Tac Mahal ve Agra Kalesi.', ilginc: 'Şah Cihan son yıllarını Agra Kalesi\'nde hapis olarak geçirdi; penceresinden Tac Mahal\'i izlerdi.' },
    'Mohenjo-daro': { bugun: 'Sind, Pakistan', kurulus: 'MÖ ~2600', wiki: 'Mohenjo-daro', onem: 'İndus uygarlığının en büyük şehri.', ilginc: '"Dans eden kız" adlı küçük tunç heykel 4.500 yıllık ve hâlâ insanları büyülüyor.' }
  };
  window.KULTUR = { tanrilar: [], olumler: [], roller: [], mumyalama: '', ic: { eslesme: {}, sahneler: {} }, bilim: { genel: '', cag: {} } };
  window.SINIRLAR = [];

  window.OLAYLAR = [
    { id: 'hydaspes', tur: 'savas', ad: 'Hydaspes (Ceylum) Savaşı', y: 326, ll: [32.94, 73.73], onem: 4, wiki: 'Battle of the Hydaspes', taraflar: ['Makedonya (İskender)', 'Paurava (Kral Porus)'], kazanan: 'Makedonya', sonuc: 'İskender kazandı ama askerleri daha doğuya gitmeyi reddetti.' },
    { id: 'kalinga', tur: 'savas', ad: 'Kalinga Savaşı', y: 261, ll: [20.25, 85.83], onem: 4, wiki: 'Kalinga War', taraflar: ['Maurya (Aşoka)', 'Kalinga'], kazanan: 'Maurya', sonuc: 'Kıyımdan pişman olan Aşoka Budizmi benimsedi.' },
    { id: 'tarain', tur: 'savas', ad: 'İkinci Tarain Savaşı', y: -1192, ll: [29.83, 76.92], onem: 4, wiki: 'Second Battle of Tarain', taraflar: ['Gurlular (Muhammed)', 'Racputlar (Prithviraj Çauhan)'], kazanan: 'Gurlular', sonuc: 'Kuzey Hindistan\'da Türk-Afgan yönetiminin yolu açıldı.' },
    { id: 'panipat1526', tur: 'savas', ad: 'Birinci Panipat Savaşı', y: -1526, ll: [29.39, 76.97], onem: 5, wiki: 'First Battle of Panipat', taraflar: ['Babür', 'Delhi Sultanlığı (İbrahim Lodi)'], kazanan: 'Babür', kuvvetler: '~12.000-15.000 Babür askeri; ~100.000 Lodi askeri ve 1.000 fil.', sonuc: 'Babür İmparatorluğu kuruldu; Hindistan\'da top ilk kez belirleyici oldu.' },
    { id: 'talikota', tur: 'savas', ad: 'Talikota Savaşı', y: -1565, ll: [16.47, 76.31], onem: 4, wiki: 'Battle of Talikota', taraflar: ['Dekken sultanlıkları', 'Vijayanagara'], kazanan: 'Dekken sultanlıkları', sonuc: 'Hampi yağmalandı; Vijayanagara çöktü.' },
    { id: 'plassey', tur: 'savas', ad: 'Plassey Savaşı', y: -1757, ll: [23.8, 88.25], onem: 5, wiki: 'Battle of Plassey', taraflar: ['İngiliz Doğu Hindistan Şirketi (Robert Clive)', 'Bengal Navabı (Siraceddevle) ve Fransızlar'], kazanan: 'Şirket', sonuc: 'İngiliz yönetiminin başlangıcı.' },
    { id: 'ayaklanma1857', tur: 'savas', ad: '1857 Büyük Ayaklanması', y: -1857, ll: [28.66, 77.23], onem: 5, wiki: 'Indian Rebellion of 1857', taraflar: ['Hint sipahileri ve yerel hükümdarlar', 'Doğu Hindistan Şirketi'], kazanan: 'İngilizler', sonuc: 'Şirket kaldırıldı; Hindistan doğrudan İngiliz tacına bağlandı; Babür hanedanı sona erdi.' },
    { id: 'tuzyuruyusu', tur: 'olay', ad: 'Tuz Yürüyüşü', y: -1930, ll: [21.0, 72.63], onem: 5, wiki: 'Salt March', sonuc: 'Gandi Dandi\'de deniz tuzu toplayarak İngiliz tuz yasasını çiğnedi; şiddetsiz direniş dünyaya örnek oldu.' },
    { id: 'bagimsizlik1947', tur: 'olay', ad: 'Bağımsızlık ve bölünme', y: -1947, ll: [28.61, 77.21], onem: 5, wiki: 'Partition of India', sonuc: 'Hindistan ve Pakistan kuruldu; ~15 milyon kişi yer değiştirdi.' },
    { id: 'sifirolay', tur: 'olay', ad: 'Brahmagupta ve sıfır', y: -628, ll: [25.75, 71.39], onem: 4, wiki: 'Brahmagupta', sonuc: 'Sıfırla işlem kurallarını yazan ilk matematikçi.' },
    { id: 'bengal1943', tur: 'afet', alt: 'kuraklik', ad: 'Bengal kıtlığı', y: -1943, ll: [22.57, 88.36], onem: 4, wiki: 'Bengal famine of 1943', sonuc: '~2-3 milyon kişi öldü.' },
    { id: 'bhopal', tur: 'afet', alt: 'kaza', ad: 'Bhopal felaketi', y: -1984, ll: [23.28, 77.41], onem: 4, wiki: 'Bhopal disaster', sonuc: 'Bir pestisit fabrikasından sızan gaz binlerce kişiyi öldürdü; tarihin en büyük endüstriyel kazası.' },
    { id: 'tsunami2004', tur: 'afet', alt: 'tsunami', ad: 'Hint Okyanusu tsunamisi', y: -2004, ll: [8.0, 80.0], onem: 5, wiki: '2004 Indian Ocean earthquake and tsunami', sonuc: 'Endonezya\'dan Sri Lanka ve Hindistan\'a ~230.000 ölü.' }
  ];

  window.ULKE_SAYFA = window.ULKE_SAYFA || {};
  window.ULKE_SAYFA.hindistan = {
    id: 'hindistan', ad: 'Hindistan', ikon: '🐘', kw: ['hindistan', 'hint', 'india', 'pakistan', 'bangladeş', 'indus', 'buda', 'aşoka', 'gupta', 'babür', 'tac mahal', 'delhi', 'gandi', 'ganj'],
    altBaslik: 'MÖ ~3300 – bugün · İndus\'tan Tac Mahal\'e, Buda\'dan Gandi\'ye', kapakWiki: 'Taj Mahal', kapakAd: 'Tac Mahal', merkez: [23, 79], merkezZ: 4.0,
    ozet: ['<b>Hint Alt Kıtası</b> Himalayalar ile Hint Okyanusu arasında kalan, Avrupa kadar geniş bir bölgedir. İndus uygarlığı, Vedalar, Budizm, sıfır ve satranç burada doğdu.', 'Maurya, Gupta, Çola, Delhi Sultanlığı ve Babür gibi büyük devletlerden sonra İngiliz yönetimi geldi; 1947\'de bağımsızlık ve bölünme yaşandı. Bugün dünyanın en kalabalık bölgesi.'],
    bilgiKutusu: [['Tarih', 'MÖ ~3300 – bugün'], ['Önemli başkentler', 'Mohenjo-daro, Pataliputra, Kannauj, Tancavur, Delhi, Agra, Hampi, Kalküta'], ['Diller', 'Sanskritçe, Hintçe, Urduca, Bengalce, Tamilce ve yüzlercesi'], ['Bugün', '~1,9 milyar kişi']],
    donemler: { 'hindistan-antik': 'İndus, Vedalar, Buda, Maurya ve Aşoka.', 'hindistan-klasik': 'Gupta altın çağı, Harşa, Çolalar ve Racputlar.', 'hindistan-sultan': 'Delhi Sultanlığı ve Vijayanagara.', 'hindistan-modern': 'Babürler, İngiliz yönetimi, bağımsızlık ve bugün.' },
    kultur: [{ baslik: 'Diller', ikon: '🗣️', html: '<p>Hint-Aryan diller (Sanskritçe, Hintçe, Urduca, Bengalce, Pencapça) kuzeyde; Dravid diller (Tamilce, Telugu, Kannada, Malayalam) güneyde.</p>' }, { baslik: 'Din', ikon: '🕉️', html: '<p>Hinduizm, Budizm, Caynizm ve Sihizm burada doğdu. İslam 8. yüzyıldan itibaren yayıldı; bugün dünyanın en büyük Müslüman nüfuslarından biri alt kıtada.</p>' }],
    figurler: [
      { id: 'tacmahal', ad: 'Tac Mahal', tur: 'yapı', wiki: 'Taj Mahal', ll: [27.1751, 78.0421], z: 85, yapim: '1632-1648', kim: 'Şah Cihan', durum: 'ayakta', durumYazi: 'Ayakta.', nerede: 'Agra', metin: 'Beyaz mermer türbe.', git: { place: 'hindistan-modern', y: -1648, id: 'tacmahal' } },
      { id: 'sanchi', ad: 'Sanchi Stupası', tur: 'yapı', wiki: 'Sanchi', ll: [23.4793, 77.7398], z: 70, yapim: 'MÖ 3. yy', kim: 'Aşoka', durum: 'ayakta', durumYazi: 'Ayakta.', nerede: 'Madhya Pradeş', metin: 'En eski taş Budist anıtlarından.', git: { place: 'hindistan-antik', y: 250, id: 'sanchi' } }
    ],
    kisiler: [
      { ad: 'Buda', wiki: 'The Buddha', yil: 'MÖ ~5. yy', ozet: 'Budizmin kurucusu.', y: 528 }, { ad: 'Aşoka', wiki: 'Ashoka', yil: 'MÖ ~304-232', ozet: 'Barışçı Maurya imparatoru.', y: 260 },
      { ad: 'Aryabhata', wiki: 'Aryabhata', yil: '476-550', ozet: 'Astronom ve matematikçi.', y: -499 }, { ad: 'Kalidasa', wiki: 'Kālidāsa', yil: '5. yy', ozet: 'Sanskrit edebiyatının büyük şairi.', y: -400 },
      { ad: 'Raziye Sultan', wiki: 'Razia Sultana', yil: '1205-1240', ozet: 'Delhi\'nin kadın sultanı.', y: -1237 }, { ad: 'Babür', wiki: 'Babur', yil: '1483-1530', ozet: 'Babür İmparatorluğu\'nun kurucusu.', y: -1526 },
      { ad: 'Ekber', wiki: 'Akbar', yil: '1542-1605', ozet: 'Hoşgörülü imparator.', y: -1580 }, { ad: 'Şah Cihan', wiki: 'Shah Jahan', yil: '1592-1666', ozet: 'Tac Mahal\'in yaptıranı.', y: -1640 },
      { ad: 'Mahatma Gandi', wiki: 'Mahatma Gandhi', yil: '1869-1948', ozet: 'Şiddetsiz direniş.', y: -1930 }, { ad: 'Rabindranath Tagore', wiki: 'Rabindranath Tagore', yil: '1861-1941', ozet: 'Nobel ödüllü şair.', y: -1913 }
    ],
    biliyorMuydunuz: ['Satranç Hindistan\'da "çaturanga" olarak doğdu: dört kol (piyade, süvari, fil, araba).', 'Şampuan kelimesi Hintçe "çampo" (masaj yap) kelimesinden gelir.', 'Hindistan\'da 19.500\'den fazla ana dil konuşuluyor.', 'Tac Mahal güneşin konumuna göre sabah pembe, öğlen beyaz, akşam altın rengi görünür.']
  };
})();
