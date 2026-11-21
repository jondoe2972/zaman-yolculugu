// Çin: Şang'dan bugüne.
// Yıl: MÖ pozitif, MS negatif. Sahne (wx): batıdan doğuya
//   Dunhuang 700 · Seddin batı ucu (Jiayuguan) 1000 · Xi'an (Chang'an) 2200 · Luoyang 2900 · Anyang 3300 · Kaifeng 3600
//   Pekin 4400 · Nanjing 5400 · Hangzhou 6000 · Şanghay 6500 · Guangzhou 7400 · Hong Kong 7700
// Kaynaklar: Ebrey, "The Cambridge Illustrated History of China" (2010); Keay, "China: A History" (2009);
//   Lewis, "The Early Chinese Empires" (2007); Spence, "The Search for Modern China" (2013).
(() => {
  window.PLACES = window.PLACES || [];

  // ================= 1. İLK HANEDANLAR VE QİN-HAN =================
  window.PLACES.push({
    id: 'cin-antik', sira: 1, kisa: 'Şang, Zhou, Qin ve Han', aralikAd: 'MÖ 2070 – MS 220',
    baslik: 'Kehanet kemikleri · Konfüçyüs · ilk imparator · Terracotta Ordusu · İpek Yolu',
    ulkeAlt: 'İlk hanedanlardan Konfüçyüs\'e, Qin Shi Huang\'ın birleştirmesinden Han İmparatorluğu\'na (MÖ 2070 – MS 220)',
    from: 2070, to: -220, start: 210,
    not: 'Xia hanedanı söylenceseldir; MÖ 841 öncesi tarihler yaklaşıktır. Sonrası Çin kayıtlarına göre kesindir.', baskent: 'Anyang, Hao, Luoyang, Xianyang, Chang\'an',
    sahne: { kizak: false, araba: [1250, 100], katipYok: false, giyim: 'antik' },
    dynasties: [
      { from: 2070, to: 1600, ad: 'Xia (söylencesel)', renk: '#6a6a4a' }, { from: 1600, to: 1046, ad: 'Şang hanedanı', renk: '#8a5a2a' },
      { from: 1046, to: 771, ad: 'Batı Zhou', renk: '#5a7a3a' }, { from: 771, to: 221, ad: 'Doğu Zhou: İlkbahar-Sonbahar ve Savaşan Devletler', renk: '#4a6a5a' },
      { from: 221, to: 206, ad: 'Qin hanedanı', renk: '#1a1a1a' }, { from: 206, to: -220, ad: 'Han hanedanı', renk: '#a8322e' }
    ],
    rulers: [
      { from: 2070, to: 1600, ad: 'Xia kralları (Büyük Yu, söylence)', kisa: '?', kim: 'Geleneğe göre Büyük Yu Sarı Irmak\'ın sellerini dizginledi. Erlitou kazıları bu döneme ait bir saray kültürünü gösteriyor.' },
      { from: 1600, to: 1046, ad: 'Şang kralları (Wu Ding)', kisa: 'Wu Ding', kim: 'Kral Wu Ding\'in eşi Fu Hao bir ordu komutanıydı. Kehanet kemikleri Çin yazısının bilinen en eski örnekleri.' },
      { from: 1046, to: 771, ad: 'Batı Zhou kralları', kisa: 'Zhou', kim: 'Zhou, Şang\'ı devirdi ve "Gök Buyruğu" fikrini getirdi: kötü yöneten hükümdar göğün desteğini kaybeder.' },
      { from: 771, to: 479, ad: 'İlkbahar-Sonbahar dönemi', kisa: 'Konfüçyüs', kim: 'Zhou kralları güçsüz; beylikler kendi başına. Konfüçyüs (MÖ 551-479) ve Laozi bu çağda yaşadı.' },
      { from: 479, to: 246, ad: 'Savaşan Devletler', kisa: 'Savaşan Devletler', kim: 'Yedi büyük devlet. Sunzi\'nin Savaş Sanatı, Mencius ve hukukçular (legalistler).' },
      { from: 246, to: 210, ad: 'Qin Shi Huang', kisa: 'Qin Shi Huang', kim: 'Qin kralı Ying Zheng altı devleti yenip Çin\'i birleştirdi (MÖ 221) ve kendine "İlk İmparator" dedi. Yazıyı, paraları ve ölçüleri birleştirdi.' },
      { from: 210, to: 202, ad: 'Qin\'in çöküşü ve iç savaş', kisa: '?', kim: 'İlk imparatorun ölümünden sonra isyanlar; Liu Bang rakibi Xiang Yu\'yu yendi.' },
      { from: 202, to: 141, ad: 'Han Gaozu ve ilk Han imparatorları', kisa: 'Gaozu', kim: 'Köylü kökenli Liu Bang Han hanedanını kurdu; Hunlara karşı barış ve evlilik politikası.' },
      { from: 141, to: 87, ad: 'Han Wudi', kisa: 'Wudi', kim: 'Hunlara karşı büyük seferler; Zhang Qian\'ı batıya gönderdi, İpek Yolu açıldı. Konfüçyüsçülük devlet öğretisi oldu.' },
      { from: 87, to: -9, ad: 'Batı Han\'ın son imparatorları', kisa: 'Han', kim: 'Saray entrikaları; Wang Mang tahtı ele geçirdi (MS 9).' },
      { from: -9, to: -25, ad: 'Wang Mang (Xin hanedanı)', kisa: 'Wang Mang', kim: 'Toprak reformu denedi; Sarı Irmak taşkını ve Kızıl Kaşlar isyanıyla düştü.' },
      { from: -25, to: -220, ad: 'Doğu Han', kisa: 'Doğu Han', kim: 'Başkent Luoyang. Cai Lun kâğıdı geliştirdi (105). Sarı Sarıklılar isyanı (184) ve savaş beyleri hanedanı bitirdi.' }
    ],
    eras: [
      { from: 2070, to: 771, puan: { eko: 3, ordu: 3, istikrar: 3 }, baskent: 'Erlitou, Anyang (Yin), Hao',
        gundem: 'Sarı Irmak vadisinde tunç döken krallıklar. Şang kralları kaplumbağa kabuklarını ve öküz kürek kemiklerini ateşle çatlatıp atalarına soru soruyor; cevaplar kemiklere yazılıyor. Zhou\'lar Gök Buyruğu fikrini getirdi.',
        savas: 'Tunç baltalar, savaş arabaları ve okçular. Şang\'ın sonu Muye Savaşı (MÖ 1046).',
        ekonomi: 'Darı, sonra buğday ve pirinç; ipek böcekçiliği. Dev tunç törensel kaplar.',
        din: 'Ata ruhlarına ve yüce tanrı Di\'ye kurbanlar; insan kurbanı Şang döneminde de vardı.',
        yasam: 'Sıkıştırılmış toprak duvarlı şehirler; Fu Hao mezarında 1.600 eşya bulundu.',
        bilgi: 'Bugün kullanılan Çince karakterlerin bazıları 3.200 yıllık kehanet kemiklerindeki işaretlerden doğrudan geliyor.' },
      { from: 771, to: 221, puan: { eko: 4, ordu: 4, istikrar: 1 }, baskent: 'Luoyang (adı kalan Zhou krallığı) ve beylik başkentleri',
        gundem: 'Zhou krallığı parçalandı; beylikler yüzyıllarca savaştı. Ama bu karışıklık düşünce çağını doğurdu: Konfüçyüs düzeni ve erdemi, Laozi Tao\'yu, Sunzi savaşı anlattı. Demir aletler ve sikke kullanılmaya başlandı.',
        savas: 'Yüz binlerce kişilik piyade orduları, arbalet (tatar yayı), surlar ve ilk set duvarları.',
        ekonomi: 'Demir sabanlar, sulama kanalları; bıçak ve kürek biçiminde sikkeler.',
        din: 'Konfüçyüsçülük, Taoizm, Mohizm ve legalizm: "Yüz Düşünce Okulu".',
        yasam: 'Bambu şeritlere yazılan kitaplar; çay henüz ilaç olarak içiliyor.',
        bilgi: 'Konfüçyüs\'ün öğrencilerinin derlediği "Konuşmalar" bugün de Çin\'de okullarda okunuyor.' },
      { from: 221, to: -220, puan: { eko: 5, ordu: 5, istikrar: 4 }, baskent: 'Xianyang, Chang\'an, Luoyang',
        gundem: 'Qin Shi Huang Çin\'i birleştirdi, Seddin parçalarını birleştirdi ve kendisi için 8.000 pişmiş topraktan askeri olan bir mezar yaptırdı. Han hanedanı 400 yıl yönetti: Çinlilerin büyük kısmı bugün kendilerine "Han" der. İpek Yolu açıldı; kâğıt geliştirildi.',
        savas: 'Hunlarla yüzyıllık mücadele; Han Wudi\'nin seferleri. Arbalet ve demir kılıç.',
        ekonomi: 'Tuz ve demir devlet tekeli; ipek Roma\'ya kadar ulaştı.',
        din: 'Konfüçyüsçülük devlet öğretisi; Budizm MS 1. yüzyılda geldi.',
        yasam: 'Memur sınavlarının ilk biçimi; Sima Qian\'ın "Tarih Kayıtları". Sismograf (Zhang Heng, 132).',
        bilgi: 'Terracotta Ordusu\'ndaki askerlerin her birinin yüzü farklı; başlangıçta parlak renklerle boyanmışlardı.' }
    ],
    nufus: [[2070, 5], [1000, 10], [500, 20], [221, 40], [2, 58], [-150, 50], [-220, 30]],
    nufusNot: 'Han dönemi rakamları nüfus sayımlarından (MS 2: ~57,7 milyon); öncesi kaba tahmindir.',
    dunyaOzet: { eko: 'Han Çini ve Roma dünyanın iki büyük imparatorluğu; İpek Yolu dolaylı olarak ikisini bağlıyor.', askeri: 'Tunç, sonra demir silahlar; arbalet; bozkır atlılarına karşı seddler.' },
    events: [
      { y: 1250, t: 'Kehanet kemikleri (Wu Ding)', k: 'm' }, { y: 1046, t: 'Zhou Şang\'ı devirdi', k: 'm' }, { y: 771, t: 'Zhou başkenti doğuya taşındı', k: 'm' }, { y: 551, t: 'Konfüçyüs doğdu', k: 'm' },
      { y: 500, t: 'Sunzi\'nin Savaş Sanatı', k: 'm' }, { y: 221, t: 'Çin birleşti: İlk İmparator', k: 'm' }, { y: 213, t: 'Kitap yakma', k: 'm' }, { y: 210, t: 'Terracotta Ordusu', k: 'm' },
      { y: 206, t: 'Han hanedanı', k: 'm' }, { y: 138, t: 'Zhang Qian batıya', k: 'm' }, { y: -105, t: 'Cai Lun\'un kâğıdı', k: 'm' }, { y: -132, t: 'Zhang Heng\'in sismografı', k: 'm' }, { y: -184, t: 'Sarı Sarıklılar isyanı', k: 'm' },
      { y: 2560, t: 'Büyük Piramit', k: 'w' }, { y: 209, t: 'Mete Han', k: 'w' }, { y: 44, t: 'Sezar öldürüldü', k: 'w' }
    ],
    world: [
      { from: 2600, to: 1900, yer: 'Hindistan', t: 'İndus uygarlığı.' }, { from: 550, to: 330, yer: 'İran', t: 'Pers İmparatorluğu.' }, { from: 209, to: -155, yer: 'Bozkır', t: 'Asya Hunları.' },
      { from: 27, to: -220, yer: 'Roma', t: 'Roma İmparatorluğu; Çinliler ona "Daqin" diyordu.' }
    ],
    sites: [{ ad: 'DUNHUANG', wx: 700 }, { ad: 'XİANYANG', wx: 2100 }, { ad: 'CHANG\'AN', wx: 2200 }, { ad: 'LUOYANG', wx: 2900 }, { ad: 'ANYANG (YİN)', wx: 3300 }, { ad: 'QUFU (KONFÜÇYÜS)', wx: 4000 }],
    cliffs: [{ wx: 1000, w: 700, h: 120, peak: 0.5 }],
    monuments: [
      { id: 'yinxu', ad: 'Yin (Anyang) Şang başkenti', yer: 'Henan', wx: 3300, type: 'city', wall: true, b: 260, n: 22, hk: 0.28, start: 1300, end: 1250, vol: 5e4, ruin: 1046 },
      { id: 'terracotta', ad: 'İlk İmparator\'un mezarı ve Terracotta Ordusu', yer: 'Xi\'an yakını', wx: 2300, type: 'mound', b: 160, h: 40, start: 246, end: 208, vol: 2e5 },
      { id: 'seddqin', ad: 'Çin Seddi (Qin ve Han)', yer: 'Kuzey Çin', wx: 1100, type: 'sur', b: 520, h: 34, renk: '#b8a888', start: 221, end: 200, vol: 2e5 }
    ],
    hizli: [{ ad: 'Şang', y: 1250 }, { ad: 'Zhou', y: 1000 }, { ad: 'Konfüçyüs', y: 500 }, { ad: 'Savaşan Devletler', y: 300 }, { ad: 'İlk İmparator', y: 221 }, { ad: 'Han Wudi', y: 120 }, { ad: 'Kâğıt', y: -105 }, { ad: 'Han\'ın sonu', y: -200 }],
    bilgi: {
      yinxu: { ikon: '🦴', yaptiran: 'Şang kralı Pan Geng', donem: 'MÖ ~1300-1046', mimar: '—', sure: '—', neden: 'Şang\'ın son başkenti.', onem: 'Çin yazısının ve tunç döküm sanatının en eski büyük merkezi.', teknik: [['Kehanet kemiği', '~150.000 parça'], ['Houmuwu tunç kazanı', '~833 kg']], nasil: 'Sıkıştırılmış topraktan saray temelleri, kral mezarları.', bugun: 'UNESCO Dünya Mirası (2006).', ilginc: 'Kehanet kemikleri 1899\'da "ejderha kemiği" adıyla eczanelerde ilaç olarak satılırken yazıları fark edildi.' },
      terracotta: { ikon: '🗿', yaptiran: 'Qin Shi Huang', donem: 'MÖ 246-208', mimar: '—', sure: '~38 yıl, 700.000 işçi (Sima Qian\'a göre)', neden: 'İlk imparatorun öbür dünyadaki ordusu ve sarayı.', onem: '20. yüzyılın en büyük arkeolojik buluşlarından.', teknik: [['Asker', '~8.000'], ['At', '~670'], ['Höyük', '~76 m (bugün ~50 m)']], nasil: 'Askerler kalıplarla seri üretildi, sonra yüzleri tek tek işlendi.', bugun: 'UNESCO Dünya Mirası (1987). İmparatorun mezar odası hiç açılmadı.', ilginc: 'Ordu 1974\'te kuyu kazan köylüler tarafından bulundu. Sima Qian, mezarda cıvadan nehirler olduğunu yazar; toprakta gerçekten yüksek cıva ölçüldü.' },
      seddqin: { ikon: '🧱', yaptiran: 'Qin Shi Huang (eski setleri birleştirdi); Han uzattı', donem: 'MÖ 221 ve sonrası', mimar: 'General Meng Tian', sure: '—', neden: 'Bozkır atlılarını (Hunlar) durdurmak.', onem: 'Çin Seddi\'nin ilk büyük birleşik hâli.', teknik: [['Malzeme', 'Sıkıştırılmış toprak ve taş']], nasil: 'Bugün görülen tuğla ve taş sur çoğunlukla Ming dönemine ait.', bugun: 'Qin-Han dönemi kalıntıları Gansu ve İç Moğolistan\'da.', ilginc: 'Seddin uzaydan çıplak gözle görüldüğü bir efsanedir; çok uzun ama çok dardır.' }
    },
    ulke: [
      { ad: 'Genel bakış', ikon: '🧭', html: '<p>Çin uygarlığı <b>Sarı Irmak</b> ve <b>Yangtze</b> vadilerinde doğdu. Şang yazıyı, Zhou "Gök Buyruğu" fikrini, Konfüçyüs ahlak ve düzen öğretisini getirdi. MÖ 221\'de <b>Qin Shi Huang</b> Çin\'i birleştirdi; <b>Han</b> hanedanı 400 yıl sürdü ve Çin kimliğini biçimlendirdi.</p>' },
      { ad: 'Düşünce okulları', ikon: '☯️', html: '<ul><li><b>Konfüçyüsçülük:</b> aileye saygı, erdemli yönetici</li><li><b>Taoizm:</b> doğayla uyum, yin-yang</li><li><b>Legalizm:</b> sert yasalarla güçlü devlet</li><li><b>Mohizm:</b> evrensel sevgi</li></ul>' }
    ]
  });

  // ================= 2. TANG VE SONG =================
  window.PLACES.push({
    id: 'cin-tang', sira: 2, kisa: 'Sui, Tang ve Song', aralikAd: 'MS 220 – 1279',
    baslik: 'Büyük Kanal · Chang\'an · Tang şiiri · matbaa · barut · pusula',
    ulkeAlt: 'Üç Krallık\'tan Sui ve Tang\'ın kozmopolit çağına, Song\'un icatlarına (MS 220 – 1279)',
    from: -220, to: -1279, start: -750,
    not: 'Tarihler kesindir.', baskent: 'Luoyang, Nanjing, Chang\'an, Kaifeng, Hangzhou',
    sahne: { kizak: false, araba: false, deve: [-600, -900], giyim: 'cubbe' },
    dynasties: [
      { from: -220, to: -581, ad: 'Üç Krallık ve bölünme', renk: '#5a5a6a' }, { from: -581, to: -618, ad: 'Sui', renk: '#6a4a2a' },
      { from: -618, to: -907, ad: 'Tang', renk: '#c87a2a' }, { from: -907, to: -960, ad: 'Beş Hanedan', renk: '#5a5a5a' },
      { from: -960, to: -1127, ad: 'Kuzey Song', renk: '#2a7a8a' }, { from: -1127, to: -1279, ad: 'Güney Song', renk: '#2a5a7a' }
    ],
    rulers: [
      { from: -220, to: -280, ad: 'Üç Krallık (Wei, Shu, Wu)', kisa: 'Üç Krallık', kim: 'Cao Cao, Liu Bei ve Sun Quan\'ın krallıkları; Kızıl Kayalıklar Savaşı (208). "Üç Krallık Romansı"nın konusu.' },
      { from: -280, to: -581, ad: 'Jin ve Kuzey-Güney hanedanları', kisa: '?', kim: 'Kuzeyde bozkır kökenli hanedanlar (Tabgaçlar / Kuzey Wei), güneyde Çin hanedanları. Budizm yayıldı: Longmen ve Yungang mağaraları.' },
      { from: -581, to: -618, ad: 'Sui hanedanı (Wen, Yang)', kisa: 'Sui', kim: 'Çin yeniden birleşti; Büyük Kanal kazıldı. Kore seferleri hanedanı tüketti.' },
      { from: -618, to: -649, ad: 'Tang Taizong', kisa: 'Taizong', kim: 'Göktürkleri yendi, "Gök Kağan" unvanını aldı. Xuanzang Hindistan\'a gitti.' },
      { from: -649, to: -705, ad: 'Gaozong ve İmparatoriçe Wu Zetian', kisa: 'Wu Zetian', kim: 'Wu Zetian Çin tarihinde kendi adına imparator olan tek kadın (690-705).' },
      { from: -705, to: -756, ad: 'Xuanzong', kisa: 'Xuanzong', kim: 'Tang\'ın parlak çağı: şairler Li Bai ve Du Fu. Talas yenilgisi (751) ve An Lushan isyanı (755).' },
      { from: -756, to: -907, ad: 'Geç Tang', kisa: 'Geç Tang', kim: 'Askeri valiler güçlendi; Budizme baskı (845); Huang Chao isyanı Chang\'an\'ı yıktı.' },
      { from: -907, to: -960, ad: 'Beş Hanedan ve On Krallık', kisa: '?', kim: 'Kuzeyde kısa ömürlü hanedanlar; kuzeyde Kitanlar (Liao) güçlendi.' },
      { from: -960, to: -1067, ad: 'Song Taizu ve ilk Song imparatorları', kisa: 'Taizu', kim: 'Komutanları emekliye ayırıp sivil memur yönetimi kurdu. Kitanlara yıllık haraçla barış (1005).' },
      { from: -1067, to: -1127, ad: 'Shenzong ve Huizong', kisa: 'Huizong', kim: 'Wang Anshi reformları; ressam imparator Huizong. Jürçenler Kaifeng\'i aldı (1127).' },
      { from: -1127, to: -1279, ad: 'Güney Song (Hangzhou)', kisa: 'Güney Song', kim: 'Song sarayı güneye kaçtı. Kubilay\'ın Moğolları 1279\'da Yamen deniz savaşında son Song imparatorunu yendi.' }
    ],
    eras: [
      { from: -220, to: -581, puan: { eko: 3, ordu: 3, istikrar: 1 }, baskent: 'Luoyang, Nanjing (Jiankang), Pingcheng',
        gundem: 'Han\'ın çöküşünden sonra 360 yıllık bölünme. Kuzeyde Tabgaç gibi bozkır kökenli hanedanlar Çin kültürünü benimsedi. Budizm geniş halk kitlelerine yayıldı; dev Buda heykelleri kayalara oyuldu.',
        savas: 'Ağır zırhlı süvari ve üzengi (4. yy, Çin\'de ilk kez belgelendi).',
        ekonomi: 'Kuzeyden güneye göç: Yangtze bölgesi pirinçle zenginleşti.',
        din: 'Budizm, Taoizm ve Konfüçyüsçülük yan yana; Çinli hacılar Hindistan\'a gidiyor.',
        yasam: 'Çay içmek yaygınlaşıyor. Hattat Wang Xizhi.',
        bilgi: 'Bilinen en eski üzengi tasvirleri 4. yüzyıl Çin mezarlarından geliyor.' },
      { from: -581, to: -907, puan: { eko: 5, ordu: 5, istikrar: 4 }, baskent: 'Chang\'an (Xi\'an), Luoyang',
        gundem: 'Tang Chang\'an\'ı dünyanın en büyük şehirlerinden: belki 1 milyon kişi, Soğdlu tüccarlar, Arap, Pers ve Japon elçiler. Altın çağ şiiri, Budist tapınakları ve memur sınavları. 755 An Lushan isyanı ve 751 Talas yenilgisi dönüm noktası.',
        savas: 'Göktürklere karşı zaferler; Tang ordusunda Türk komutanlar. An Lushan isyanında milyonlarca kayıp.',
        ekonomi: 'Büyük Kanal güneyin pirincini kuzeye taşıyor; İpek Yolu ve deniz ticareti (Guangzhou).',
        din: 'Budizm zirvede; Nesturi Hristiyanlar, Maniheistler, Zerdüştler ve Müslümanlar Chang\'an\'da.',
        yasam: 'Polo, şarap, Orta Asya müziği ve dansları moda. Tahta kalıpla basılmış dünyanın en eski tarihli kitabı (Elmas Sutra, 868).',
        bilgi: 'Tang şiirlerinden 48.900\'den fazlası günümüze ulaştı; Li Bai\'nin "Sessiz Gece Düşüncesi"ni Çin\'de neredeyse herkes ezbere bilir.' },
      { from: -907, to: -1279, puan: { eko: 5, ordu: 3, istikrar: 3 }, baskent: 'Kaifeng, sonra Hangzhou',
        gundem: 'Song Çini dünyanın en ileri ekonomisi: kâğıt para, hareketli harfli matbaa (Bi Sheng, 1040\'lar), barut silahları, deniz pusulası. Kaifeng ve Hangzhou\'da milyonluk nüfus. Ama kuzeyde Kitanlar, Jürçenler ve sonra Moğollar baskı yapıyor.',
        savas: 'Barutlu oklar, el bombaları ve ateş mızrakları; dünyanın ilk daimî donanmalarından biri.',
        ekonomi: 'Kâğıt para (jiaozi), pirinç çeşitleri, porselen ve ipek ihracatı; Quanzhou dünyanın en büyük limanlarından.',
        din: 'Yeni-Konfüçyüsçülük (Zhu Xi). Zen (Chan) Budizmi.',
        yasam: 'Çay evleri, lokantalar, tiyatrolar; "Qingming Bayramında Nehir Boyu" tablosu Kaifeng\'in canlı sokaklarını gösterir.',
        bilgi: 'Kâğıt para ilk kez 11. yüzyılda Song Çini\'nde devlet tarafından basıldı; Marco Polo bunu Avrupalılara şaşkınlıkla anlattı.' }
    ],
    nufus: [[-220, 30], [-600, 46], [-750, 55], [-1000, 60], [-1100, 100], [-1279, 90]],
    nufusNot: 'Sayımlara ve tahminlere dayanır; Song döneminde nüfus ilk kez 100 milyonu aştı.',
    dunyaOzet: { eko: 'Tang ve Song Çini dünyanın en büyük ekonomisi; Abbasî Bağdadı ile İpek Yolu ve deniz yolu üzerinden ticaret.', askeri: 'Ağır süvari, arbalet, sonra barut silahları.' },
    events: [
      { y: -493, t: 'Longmen mağaraları başladı', k: 'm' }, { y: -589, t: 'Sui Çin\'i birleştirdi', k: 'm' }, { y: -605, t: 'Büyük Kanal', k: 'm' },
      { y: -618, t: 'Tang hanedanı', k: 'm' }, { y: -645, t: 'Xuanzang Hindistan\'dan döndü', k: 'm' }, { y: -690, t: 'Wu Zetian imparator', k: 'm' }, { y: -751, t: 'Talas', k: 'm' },
      { y: -755, t: 'An Lushan isyanı', k: 'm' }, { y: -868, t: 'Elmas Sutra basıldı', k: 'm' }, { y: -960, t: 'Song hanedanı', k: 'm' }, { y: -1040, t: 'Hareketli harfli matbaa', k: 'm' },
      { y: -1044, t: 'Barut formülü yazıldı', k: 'm' }, { y: -1127, t: 'Jürçenler Kaifeng\'i aldı', k: 'm' }, { y: -1279, t: 'Yamen: Song\'un sonu', k: 'm' },
      { y: -622, t: 'Hicret', k: 'w' }, { y: -800, t: 'Şarlman', k: 'w' }, { y: -1206, t: 'Cengiz Han', k: 'w' }
    ],
    world: [
      { from: -552, to: -744, yer: 'Bozkır', t: 'Göktürk Kağanlığı.' }, { from: -750, to: -1258, yer: 'Bağdat', t: 'Abbasîler.' }, { from: -794, to: -1185, yer: 'Japonya', t: 'Heian dönemi; Tang etkisi.' },
      { from: -1206, to: -1279, yer: 'Moğolistan', t: 'Moğollar.' }
    ],
    sites: [{ ad: 'DUNHUANG', wx: 700 }, { ad: 'CHANG\'AN', wx: 2200 }, { ad: 'LUOYANG', wx: 2900 }, { ad: 'KAİFENG', wx: 3600 }, { ad: 'BÜYÜK KANAL', wx: 5000 }, { ad: 'HANGZHOU', wx: 6000 }, { ad: 'QUANZHOU', wx: 7000 }, { ad: 'GUANGZHOU', wx: 7400 }],
    monuments: [
      { id: 'mogao', ad: 'Mogao mağaraları', yer: 'Dunhuang, Gansu', wx: 700, type: 'rocktemple', b: 120, h: 40, start: -366, end: -700, vol: 6e4 },
      { id: 'yabanikazpagoda', ad: 'Büyük Yaban Kazı Pagodası', yer: 'Xi\'an', wx: 2200, type: 'pagoda', kat: 7, renk: '#c8a878', cati: '#8a7a5a', b: 50, h: 64, start: -652, end: -704, vol: 5e4 },
      { id: 'changan', ad: 'Chang\'an', yer: 'Xi\'an', wx: 2350, type: 'city', wall: true, b: 380, n: 34, hk: 0.3, start: -582, end: -620, vol: 1.2e5, ruin: -904 }
    ],
    hizli: [{ ad: 'Üç Krallık', y: -230 }, { ad: 'Büyük Kanal', y: -605 }, { ad: 'Tang', y: -640 }, { ad: 'Wu Zetian', y: -690 }, { ad: 'Li Bai', y: -740 }, { ad: 'An Lushan', y: -755 }, { ad: 'Song', y: -1000 }, { ad: 'Matbaa', y: -1040 }, { ad: 'Hangzhou', y: -1200 }],
    bilgi: {
      mogao: { ikon: '🪷', yaptiran: 'Budist rahipler ve hacılar', donem: '366\'dan 14. yy\'a', mimar: '—', sure: '~1.000 yıl', neden: 'İpek Yolu üzerindeki Budist tapınak mağaraları.', onem: '~45.000 m² duvar resmi; dünyanın en zengin Budist sanatı hazinelerinden.', teknik: [['Mağara', '~735 (492\'si resimli)']], nasil: 'Çöl uçurumuna oyulmuş mağaralar, içinde heykeller ve freskler.', bugun: 'UNESCO Dünya Mirası (1987).', ilginc: '1900\'de bulunan "Kütüphane Mağarası"ndaki 50.000 belge arasında dünyanın en eski tarihli basılı kitabı (868) çıktı.' },
      yabanikazpagoda: { ikon: '🛕', yaptiran: 'Tang imparatoru Gaozong, hacı Xuanzang için', donem: '652; 704\'te yeniden', mimar: '—', sure: '—', neden: 'Xuanzang\'ın Hindistan\'dan getirdiği sutraları korumak.', onem: 'Tang Chang\'an\'ından ayakta kalan en ünlü yapı.', teknik: [['Yükseklik', '~64 m'], ['Kat', '7']], nasil: 'Tuğla; içinden merdivenle tepeye çıkılır.', bugun: 'Xi\'an\'ın simgesi.', ilginc: 'Pagoda yüzyıllar içinde batıya doğru ~1 metre eğildi.' },
      changan: { ikon: '🏯', yaptiran: 'Sui ve Tang imparatorları', donem: '582-904', mimar: 'Yuwen Kai', sure: '—', neden: 'İmparatorluk başkenti.', onem: '8. yüzyılda dünyanın en büyük şehri.', teknik: [['Sur', '~9,7 × 8,6 km'], ['Ana cadde', '~150 m genişlik']], nasil: 'Satranç tahtası gibi 108 mahalle; Batı ve Doğu pazarları.', bugun: 'Xi\'an şehri; surların bugünkü hâli Ming dönemi.', ilginc: 'Japonların Nara ve Kyoto\'su Chang\'an\'ın planı örnek alınarak kuruldu.' }
    },
    ulke: [
      { ad: 'Genel bakış', ikon: '🧭', html: '<p>Han\'dan sonra Çin 360 yıl bölündü. <b>Sui</b> ve <b>Tang</b> onu yeniden birleştirdi; Tang Chang\'an\'ı Asya\'nın kalbi oldu. <b>Song</b> hanedanı askeri olarak zayıf ama ekonomik ve teknolojik olarak dünyanın en ileri devletiydi.</p>' },
      { ad: 'Dört büyük icat', ikon: '💡', html: '<ul><li><b>Kâğıt</b> (Han, MS 105 civarı geliştirildi)</li><li><b>Matbaa</b> (tahta kalıp Tang; hareketli harf Song)</li><li><b>Barut</b> (Tang simyacıları; Song silahları)</li><li><b>Pusula</b> (Song denizcileri)</li></ul>' }
    ]
  });

  // ================= 3. YUAN, MİNG VE QİNG =================
  window.PLACES.push({
    id: 'cin-ming', sira: 3, kisa: 'Yuan, Ming ve Qing', aralikAd: 'MS 1279 – 1912',
    baslik: 'Kubilay · Marco Polo · Zheng He · Yasak Şehir · Ming Seddi · Qing · Afyon Savaşları',
    ulkeAlt: 'Moğol Yuan\'dan Ming\'in seferlerine, Mançu Qing\'den 1912 devrimine (MS 1279 – 1912)',
    from: -1279, to: -1912, start: -1420,
    not: 'Tarihler kesindir.', baskent: 'Hanbalık (Pekin), Nanjing, Pekin',
    sahne: { kizak: false, araba: false, deve: [-1279, -1400], buhar: -1880, giyim: 'cubbe' },
    dynasties: [{ from: -1279, to: -1368, ad: 'Yuan (Moğol)', renk: '#3a5a8a' }, { from: -1368, to: -1644, ad: 'Ming', renk: '#c83a2a' }, { from: -1644, to: -1912, ad: 'Qing (Mançu)', renk: '#d8a83a' }],
    rulers: [
      { from: -1279, to: -1294, ad: 'Kubilay Han', kisa: 'Kubilay', kim: 'Cengiz\'in torunu; bütün Çin\'i yöneten ilk yabancı hükümdar. Başkenti Hanbalık (Pekin). Marco Polo sarayında hizmet ettiğini yazdı.' },
      { from: -1294, to: -1368, ad: 'Son Yuan imparatorları', kisa: 'Yuan', kim: 'Sel, kıtlık ve veba; Kızıl Sarıklılar isyanı.' },
      { from: -1368, to: -1398, ad: 'Hongwu (Zhu Yuanzhang)', kisa: 'Hongwu', kim: 'Yoksul bir köylü ve eski keşiş; Moğolları kovup Ming hanedanını kurdu.' },
      { from: -1402, to: -1424, ad: 'Yongle', kisa: 'Yongle', kim: 'Başkenti Pekin\'e taşıyıp Yasak Şehir\'i yaptırdı; Zheng He\'nin dev filolarını Afrika\'ya kadar gönderdi.' },
      { from: -1398, to: -1402, ad: 'Jianwen', kisa: 'Jianwen', kim: 'Amcası Yongle tarafından devrildi.' },
      { from: -1424, to: -1572, ad: 'Ming imparatorları (Xuande\'den Longqing\'e)', kisa: 'Ming', kim: 'Deniz seferleri durduruldu; Moğol tehdidine karşı Seddin bugünkü taş hâli yapıldı. Portekizliler Makao\'ya yerleşti (1557).' },
      { from: -1572, to: -1620, ad: 'Wanli', kisa: 'Wanli', kim: '48 yıl tahtta kaldı ama yıllarca saraya kapandı. Cizvit Matteo Ricci Pekin\'e geldi.' },
      { from: -1620, to: -1644, ad: 'Son Ming imparatorları (Chongzhen)', kisa: 'Chongzhen', kim: 'Kıtlık ve isyanlar; asi Li Zicheng Pekin\'i aldı, son imparator kendini astı.' },
      { from: -1644, to: -1661, ad: 'Shunzhi', kisa: 'Shunzhi', kim: 'Mançular Pekin\'e girdi; erkeklere örgülü saç (kuyruk) zorunlu oldu.' },
      { from: -1661, to: -1722, ad: 'Kangxi', kisa: 'Kangxi', kim: 'Çin tarihinin en uzun hüküm süren imparatoru (61 yıl). Tayvan\'ı aldı, Rusya ile Nerçinsk Antlaşması (1689).' },
      { from: -1722, to: -1735, ad: 'Yongzheng', kisa: 'Yongzheng', kim: 'Çalışkan ve sert; maliyeyi düzeltti.' },
      { from: -1735, to: -1796, ad: 'Qianlong', kisa: 'Qianlong', kim: 'Qing\'in en geniş sınırları: Doğu Türkistan ve Tibet. İngiliz elçi Macartney\'i geri çevirdi (1793).' },
      { from: -1796, to: -1861, ad: 'Jiaqing ve Daoguang; Xianfeng', kisa: 'Daoguang', kim: 'Afyon Savaşları (1839-1842, 1856-1860): Hong Kong İngiltere\'ye verildi. Taiping isyanı (1850-1864).' },
      { from: -1861, to: -1908, ad: 'Tongzhi ve Guangxu; İmparatoriçe Dul Cixi', kisa: 'Cixi', kim: 'Cixi 47 yıl perde arkasından yönetti. Japonya\'ya yenilgi (1895), Boksör Ayaklanması (1900).' },
      { from: -1908, to: -1912, ad: 'Puyi', kisa: 'Puyi', kim: 'Son imparator; 1912\'de 6 yaşında tahttan indirildi.' }
    ],
    eras: [
      { from: -1279, to: -1368, puan: { eko: 4, ordu: 5, istikrar: 3 }, baskent: 'Hanbalık (Dadu, bugünkü Pekin)',
        gundem: 'Moğol Yuan hanedanı Çin\'i Avrasya\'ya bağladı: Marco Polo ve İbn Battuta Çin\'e geldi. Kubilay\'ın Japonya seferleri tayfunlarla battı. Yüzyıl sonunda sel, veba ve isyanlar.',
        savas: 'Moğol süvarisi, Çin donanması ve barutlu toplar (bilinen en eski tarihli top: 1298).',
        ekonomi: 'Kâğıt para tek resmî para; Büyük Kanal Pekin\'e uzatıldı.',
        din: 'Tibet Budizmi sarayda güçlü; Müslüman yöneticiler ve astronomlar.',
        yasam: 'Yuan tiyatrosu (zaju) gelişti; mavi-beyaz porselen doğdu.',
        bilgi: 'Ünlü mavi-beyaz Çin porseleninin kobalt mavisi İran\'dan getiriliyordu.' },
      { from: -1368, to: -1644, puan: { eko: 5, ordu: 4, istikrar: 4 }, baskent: 'Nanjing, 1421\'den Pekin',
        gundem: 'Ming Çini Yasak Şehir\'i, Seddin bugün gördüğümüz taş hâlini ve dünyanın en büyük filolarını yaptı. Zheng He 7 seferle Hindistan, Arabistan ve Doğu Afrika\'ya gitti. Amerikan gümüşü Manila üzerinden Çin\'e aktı.',
        savas: 'Ateşli silahlar, Japon korsanları (wokou) ve Japonya\'nın Kore istilasına karşı savaş (1592-1598).',
        ekonomi: 'Porselen (Jingdezhen), ipek ve çay; dünyanın gümüşünün büyük kısmı Çin\'e gidiyordu.',
        din: 'Yeni-Konfüçyüsçülük devlet sınavlarının temeli. Cizvitler bilim getirdi.',
        yasam: 'Romanlar: "Batıya Yolculuk", "Su Kenarı". Mısır, patates ve tatlı patates Amerika\'dan geldi.',
        bilgi: 'Zheng He\'nin "hazine gemilerinin" bazı kaynaklara göre ~120 m uzunlukta olduğu yazılır; bu, Kolomb\'un Santa Maria\'sının yaklaşık 5 katı (tarihçiler bu ölçüyü tartışıyor).' },
      { from: -1644, to: -1912, puan: { eko: 4, ordu: 3, istikrar: 3 }, baskent: 'Pekin',
        gundem: 'Mançu Qing hanedanı Çin\'i en geniş sınırlarına ulaştırdı ve nüfusu 400 milyona çıkardı. 19. yüzyılda Batılı güçler Afyon Savaşları\'yla limanları zorla açtı; Taiping isyanında ~20-30 milyon kişi öldü. 1911 Devrimi imparatorluğu sona erdirdi.',
        savas: 'Sancak orduları; İngiliz buharlı savaş gemileri karşısında yenilgi. Japonya\'ya yenilgi (1895).',
        ekonomi: 'Çay ihracatı İngiltere\'yi zorlayınca İngilizler Hindistan\'dan afyon sattı.',
        din: 'Konfüçyüs, Budizm, Taoizm; Taiping önderi kendini İsa\'nın kardeşi sayıyordu.',
        yasam: 'Kızıl Köşkün Rüyası romanı; Pekin operası.',
        bilgi: 'Qianlong imparatoru İngiliz Kralı III. George\'a yazdığı mektupta "Ülkemizde her şey bol, sizin mallarınıza ihtiyacımız yok" dedi.' }
    ],
    nufus: [[-1279, 90], [-1393, 65], [-1600, 160], [-1750, 225], [-1850, 430], [-1912, 430]],
    nufusNot: 'Tahminler; Yuan döneminde nüfus savaş ve veba yüzünden düştü.',
    dunyaOzet: { eko: 'Ming ve Qing Çini 1800\'e kadar dünyanın en büyük ekonomisi; Avrupa Sanayi Devrimi\'nden sonra geride kaldı.', askeri: 'Barut ve top; 19. yüzyılda Batı\'nın buharlı gemileri.' },
    events: [
      { y: -1281, t: 'Kubilay\'ın Japonya seferi battı', k: 'm' }, { y: -1368, t: 'Ming hanedanı', k: 'm' }, { y: -1405, t: 'Zheng He\'nin ilk seferi', k: 'm' },
      { y: -1420, t: 'Yasak Şehir', k: 'm' }, { y: -1557, t: 'Portekizliler Makao\'da', k: 'm' }, { y: -1601, t: 'Matteo Ricci Pekin\'de', k: 'm' }, { y: -1644, t: 'Mançular Pekin\'de', k: 'm' },
      { y: -1689, t: 'Nerçinsk Antlaşması', k: 'm' }, { y: -1793, t: 'Macartney elçiliği', k: 'm' }, { y: -1842, t: 'Nanjing Antlaşması; Hong Kong', k: 'm' }, { y: -1850, t: 'Taiping isyanı', k: 'm' },
      { y: -1860, t: 'Yazlık Saray yakıldı', k: 'm' }, { y: -1895, t: 'Japonya\'ya yenilgi', k: 'm' }, { y: -1900, t: 'Boksör Ayaklanması', k: 'm' }, { y: -1911, t: 'Xinhai Devrimi', k: 'm' },
      { y: -1453, t: 'İstanbul\'un fethi', k: 'w' }, { y: -1492, t: 'Kolomb', k: 'w' }, { y: -1789, t: 'Fransız İhtilali', k: 'w' }
    ],
    world: [
      { from: -1299, to: -1912, yer: 'Osmanlı', t: 'Osmanlı İmparatorluğu.' }, { from: -1526, to: -1857, yer: 'Hindistan', t: 'Babürler.' }, { from: -1603, to: -1868, yer: 'Japonya', t: 'Tokugawa.' },
      { from: -1760, to: -1900, yer: 'Avrupa', t: 'Sanayi Devrimi.' }
    ],
    sites: [{ ad: 'JİAYUGUAN', wx: 1000 }, { ad: 'Xİ\'AN', wx: 2200 }, { ad: 'PEKİN', wx: 4400 }, { ad: 'BADALİNG', wx: 4200 }, { ad: 'NANJİNG', wx: 5400 }, { ad: 'JİNGDEZHEN', wx: 5800 }, { ad: 'ŞANGHAY', wx: 6500 }, { ad: 'KANTON', wx: 7400 }, { ad: 'MAKAO', wx: 7600 }],
    monuments: [
      { id: 'yasaksehir', ad: 'Yasak Şehir', yer: 'Pekin', wx: 4400, type: 'pagoda', kat: 1, renk: '#b8322a', cati: '#d8a83a', b: 170, h: 40, start: -1406, end: -1420, vol: 1.5e5 },
      { id: 'seddming', ad: 'Ming Seddi (Badaling)', yer: 'Pekin kuzeyi', wx: 3900, type: 'sur', b: 560, h: 40, start: -1504, end: -1570, vol: 2e5 },
      { id: 'gokyuzutapinagi', ad: 'Gök Tapınağı', yer: 'Pekin', wx: 4650, type: 'pagoda', kat: 3, renk: '#b8322a', cati: '#2a4a8a', b: 50, h: 38, start: -1406, end: -1420, vol: 4e4 },
      { id: 'porselenkule', ad: 'Nanjing Porselen Kulesi', yer: 'Nanjing', wx: 5400, type: 'pagoda', kat: 9, renk: '#f0ece0', cati: '#3a7a4a', b: 36, h: 79, start: -1412, end: -1431, vol: 4e4, ruin: -1856 }
    ],
    hizli: [{ ad: 'Kubilay', y: -1280 }, { ad: 'Ming', y: -1368 }, { ad: 'Zheng He', y: -1405 }, { ad: 'Yasak Şehir', y: -1420 }, { ad: 'Sed', y: -1570 }, { ad: 'Qing', y: -1644 }, { ad: 'Kangxi', y: -1700 }, { ad: 'Afyon Savaşı', y: -1840 }, { ad: 'Taiping', y: -1855 }, { ad: 'Boksörler', y: -1900 }],
    bilgi: {
      yasaksehir: { ikon: '🏯', yaptiran: 'Ming imparatoru Yongle', donem: '1406-1420', mimar: 'Kuai Xiang ve diğerleri', sure: '14 yıl, ~1 milyon işçi', neden: 'İmparatorların sarayı; halka kapalı olduğu için "yasak".', onem: 'Dünyanın en büyük ahşap saray yapıları topluluğu.', teknik: [['Alan', '~72 hektar'], ['Bina', '~980'], ['Yönetim', '24 imparator, 1420-1912']], nasil: 'Sarı sırlı kiremit yalnızca imparatora aitti; taşlar kışın buzlu yollar üzerinde kızakla çekildi.', bugun: 'Saray Müzesi; UNESCO Dünya Mirası (1987).', ilginc: 'Çatı uçlarındaki hayvan heykelciklerinin sayısı binanın önemini gösterir; en önemli salonda 10 tane var.' },
      seddming: { ikon: '🧱', yaptiran: 'Ming imparatorları', donem: 'Başlıca 1500\'ler', mimar: 'General Qi Jiguang (bazı kesimler)', sure: '~200 yıl', neden: 'Moğol akınlarını durdurmak.', onem: 'Bugün "Çin Seddi" denince akla gelen taş ve tuğla sur.', teknik: [['Ming seddi uzunluğu', '~8.850 km'], ['Bütün seddler', '~21.000 km']], nasil: 'Dağ sırtlarını izleyen tuğla sur ve binlerce gözetleme kulesi; harcına yapışkan pirinç unu katıldı.', bugun: 'UNESCO Dünya Mirası (1987).', ilginc: 'Harçta yapışkan pirinç ile kirecin karışımı kullanıldı; bu karışım çok dayanıklı.' },
      gokyuzutapinagi: { ikon: '🔵', yaptiran: 'Yongle', donem: '1406-1420', mimar: '—', sure: '—', neden: 'İmparatorun iyi hasat için Gök\'e dua ettiği tapınak.', onem: 'Çin kozmolojisinin mimarisi: yuvarlak gök, kare yer.', teknik: [['Hasat Duaları Salonu', '38 m, çivisiz ahşap']], nasil: 'Mavi kiremit göğü simgeler; ahşap sütunlar yılın ay ve saatlerini temsil eder.', bugun: 'UNESCO Dünya Mirası (1998).', ilginc: 'Bugünkü salon 1889\'da yıldırımla yanınca birebir yeniden yapıldı.' },
      porselenkule: { ikon: '🏮', yaptiran: 'Yongle', donem: '1412-1431', mimar: '—', sure: '~19 yıl', neden: 'Annesinin anısına Budist pagoda.', onem: 'Avrupalı gezginlerin "dünyanın harikası" saydığı beyaz porselen kaplı kule.', teknik: [['Yükseklik', '~79 m'], ['Kat', '9']], nasil: 'Beyaz porselen tuğlalarla kaplı; geceleri 140 kandille aydınlatılırdı.', bugun: 'Taiping isyanında yıkıldı (1856); 2015\'te modern bir kopyası yapıldı.', ilginc: 'Hans Christian Andersen bir masalında bu kuleden söz eder.' }
    },
    ulke: [
      { ad: 'Genel bakış', ikon: '🧭', html: '<p><b>Yuan</b> döneminde Çin Moğol İmparatorluğu\'nun parçası oldu. <b>Ming</b> Yasak Şehir\'i, Seddi ve Zheng He\'nin filolarını yarattı. Mançu <b>Qing</b> hanedanı Çin\'i en geniş hâline getirdi ama 19. yüzyılda Batı ve Japonya karşısında güç kaybetti.</p>' }
    ]
  });

  // ================= 4. CUMHURİYETTEN BUGÜNE =================
  window.PLACES.push({
    id: 'cin-modern', sira: 4, modern: true, kisa: 'Cumhuriyetten bugüne', aralikAd: 'MS 1912 – bugün',
    baslik: 'Sun Yat-sen · iç savaş · Mao · Kültür Devrimi · Deng · süper güç',
    ulkeAlt: 'Çin Cumhuriyeti\'nden Halk Cumhuriyeti\'ne, reformlardan bugünkü Çin\'e (MS 1912 – bugün)',
    from: -1912, to: -2026, start: -1949,
    not: 'Tarihler kesindir.', baskent: 'Nanjing, Pekin',
    sahne: { kizak: false, buhar: [-1912, -1990], oto: -1930, ucak: -1935, turist: -1990, giyim: 'modern' },
    dynasties: [{ from: -1912, to: -1949, ad: 'Çin Cumhuriyeti', renk: '#2a4a9a' }, { from: -1949, to: -1978, ad: 'Mao dönemi', renk: '#c81a1a' }, { from: -1978, to: -2026, ad: 'Reform ve yükseliş', renk: '#e04a2a' }],
    rulers: [
      { from: -1912, to: -1916, ad: 'Sun Yat-sen ve Yuan Shikai', kisa: 'Sun Yat-sen', kim: 'Sun Yat-sen ilk geçici cumhurbaşkanı; Yuan Shikai kendini imparator ilan etmeye kalktı.' },
      { from: -1916, to: -1928, ad: 'Savaş beyleri dönemi', kisa: 'Savaş beyleri', kim: 'Ülke parçalandı; 4 Mayıs Hareketi (1919), Çin Komünist Partisi (1921).' },
      { from: -1928, to: -1949, ad: 'Çan Kay-şek (Milliyetçiler)', kisa: 'Çan Kay-şek', kim: 'Japon işgali (1937-1945) ve komünistlerle iç savaş; 1949\'da Tayvan\'a çekildi.' },
      { from: -1949, to: -1976, ad: 'Mao Zedong', kisa: 'Mao', kim: 'Halk Cumhuriyeti\'ni ilan etti. Büyük İleri Atılım kıtlığında on milyonlarca kişi öldü; Kültür Devrimi (1966-1976).' },
      { from: -1976, to: -1978, ad: 'Hua Guofeng', kisa: 'Hua', kim: 'Dörtlü Çete tutuklandı.' },
      { from: -1978, to: -1992, ad: 'Deng Xiaoping', kisa: 'Deng', kim: '"Reform ve dışa açılma": özel girişim ve özel ekonomik bölgeler. Tiananmen (1989).' },
      { from: -1992, to: -2012, ad: 'Jiang Zemin ve Hu Jintao', kisa: 'Jiang-Hu', kim: 'Hong Kong geri döndü (1997); Dünya Ticaret Örgütü (2001); Pekin Olimpiyatları (2008).' },
      { from: -2012, to: -2026, ad: 'Şi Cinping', kisa: 'Şi', kim: 'Kuşak ve Yol Girişimi; Çin dünyanın en büyük ikinci ekonomisi ve teknoloji gücü.' }
    ],
    eras: [
      { from: -1912, to: -1949, puan: { eko: 2, ordu: 2, istikrar: 1 }, baskent: 'Pekin, Nanjing, savaşta Chongqing',
        gundem: 'İmparatorluk bitti ama barış gelmedi: savaş beyleri, milliyetçiler ile komünistler arasında iç savaş ve Japon işgali. Uzun Yürüyüş (1934-35) Mao\'yu önder yaptı. Nanjing katliamı (1937).',
        savas: 'Çin-Japon Savaşı\'nda 15-20 milyon Çinli öldü.',
        ekonomi: 'Şanghay Asya\'nın finans merkezi; köyler yoksul.',
        din: 'Geleneksel inançlar, Budizm; Batı fikirleri ve Marksizm.',
        yasam: 'Lu Xun\'un öyküleri; konuşma diliyle yazılan yeni edebiyat.',
        bilgi: 'Uzun Yürüyüş\'te Kızıl Ordu bir yılda ~10.000 km yürüdü; yola çıkan ~86.000 kişiden ~8.000\'i vardı.' },
      { from: -1949, to: -1978, puan: { eko: 2, ordu: 4, istikrar: 2 }, baskent: 'Pekin',
        gundem: 'Halk Cumhuriyeti kuruldu. Toprak reformu, kolektif çiftlikler, Büyük İleri Atılım (1958-1962) ve tarihin en ölümcül kıtlıklarından biri. Kültür Devrimi\'nde Kızıl Muhafızlar okulları ve tapınakları kapattı.',
        savas: 'Kore Savaşı (1950-1953); ilk atom bombası (1964).',
        ekonomi: 'Planlı ekonomi, ağır sanayi.',
        din: 'Din baskı altında; Mao kişi kültü.',
        yasam: 'Herkes benzer mavi-gri giysiler; "demir pirinç kasesi" (ömür boyu iş).',
        bilgi: 'Kültür Devrimi\'nde yaklaşık 17 milyon genç "köylülerden öğrenmek" için kırsala gönderildi.' },
      { from: -1978, to: -2026, puan: { eko: 5, ordu: 5, istikrar: 4 }, baskent: 'Pekin',
        gundem: 'Deng Xiaoping\'in reformlarıyla Çin "dünyanın fabrikası" oldu; 800 milyondan fazla kişi yoksulluktan kurtuldu. Hızlı tren ağı, uzay istasyonu, dev şehirler. Tayvan, Hong Kong ve Sincan\'daki Uygurlara yönelik politikalar uluslararası gerilim yaratıyor.',
        savas: 'Dünyanın en büyük ordusu ve hızla büyüyen donanma.',
        ekonomi: 'Satın alma gücüne göre dünyanın en büyük ekonomisi; elektrikli otomobil ve güneş paneli lideri.',
        din: 'Resmî olarak ateist devlet; Budizm, Taoizm, Hristiyanlık ve İslam kontrollü biçimde var.',
        yasam: 'Tek çocuk politikası (1980-2015); bugün nüfus azalmaya başladı.',
        bilgi: 'Çin\'in hızlı tren ağı 45.000 km\'yi aştı: dünyanın geri kalanının toplamından fazla.' }
    ],
    nufus: [[-1912, 430], [-1949, 540], [-1978, 960], [-2000, 1260], [-2021, 1412], [-2026, 1405]],
    nufusNot: 'Çin Halk Cumhuriyeti (Tayvan hariç); nüfus 2022\'den beri azalıyor.',
    dunyaOzet: { eko: 'Çin 1978\'den sonra dünyanın en hızlı büyüyen ekonomisi oldu.', askeri: 'Nükleer güç; dünyanın en büyük ordusu.' },
    events: [
      { y: -1912, t: 'Çin Cumhuriyeti', k: 'm' }, { y: -1919, t: '4 Mayıs Hareketi', k: 'm' }, { y: -1934, t: 'Uzun Yürüyüş', k: 'm' }, { y: -1937, t: 'Japon işgali; Nanjing katliamı', k: 'm' },
      { y: -1949, t: 'Halk Cumhuriyeti', k: 'm' }, { y: -1958, t: 'Büyük İleri Atılım', k: 'm' }, { y: -1966, t: 'Kültür Devrimi', k: 'm' }, { y: -1978, t: 'Reform ve dışa açılma', k: 'm' },
      { y: -1989, t: 'Tiananmen', k: 'm' }, { y: -1997, t: 'Hong Kong geri döndü', k: 'm' }, { y: -2003, t: 'İlk Çinli astronot', k: 'm' }, { y: -2008, t: 'Pekin Olimpiyatları', k: 'm' },
      { y: -1945, t: 'İkinci Dünya Savaşı bitti', k: 'w' }, { y: -1991, t: 'SSCB dağıldı', k: 'w' }
    ],
    world: [{ from: -1945, to: -1991, yer: 'Dünya', t: 'Soğuk Savaş.' }, { from: -1991, to: -2026, yer: 'Dünya', t: 'Küreselleşme.' }],
    sites: [{ ad: 'SİNCAN', wx: 600 }, { ad: 'Xİ\'AN', wx: 2200 }, { ad: 'PEKİN', wx: 4400 }, { ad: 'NANJİNG', wx: 5400 }, { ad: 'ŞANGHAY', wx: 6500 }, { ad: 'SHENZHEN', wx: 7500 }, { ad: 'HONG KONG', wx: 7700 }],
    monuments: [
      { id: 'sanghay', ad: 'Şanghay Pudong', yer: 'Şanghay', wx: 6500, type: 'modcity', b: 440, h: 190, n: 48, start: -1990, end: -2016, vol: 1.2e5 },
      { id: 'ucbogaz', ad: 'Üç Boğaz Barajı', yer: 'Hubei', wx: 3000, type: 'dam', b: 300, h: 40, start: -1994, end: -2006, vol: 1e5 }
    ],
    hizli: [{ ad: 'Cumhuriyet', y: -1912 }, { ad: 'Uzun Yürüyüş', y: -1934 }, { ad: 'Japon işgali', y: -1937 }, { ad: '1949', y: -1949 }, { ad: 'Kültür Devrimi', y: -1966 }, { ad: 'Reformlar', y: -1978 }, { ad: 'Hong Kong', y: -1997 }, { ad: 'Olimpiyat', y: -2008 }, { ad: 'Bugün', y: -2026 }],
    bilgi: {
      sanghay: { ikon: '🏙️', yaptiran: '—', donem: '1990\'dan', mimar: 'Şanghay Kulesi: Gensler', sure: '—', neden: 'Pirinç tarlalarından finans merkezine.', onem: 'Çin\'in en büyük şehri (~25 milyon).', teknik: [['Şanghay Kulesi', '632 m, 2015']], nasil: '1990\'da tarla olan Pudong 30 yılda gökdelen ormanına dönüştü.', bugun: 'Dünyanın en işlek konteyner limanı.', ilginc: 'Şanghay Kulesi\'nin asansörleri saatte 74 km hızla çıkar.' },
      ucbogaz: { ikon: '💧', yaptiran: 'Çin Halk Cumhuriyeti', donem: '1994-2006 (santral 2012)', mimar: '—', sure: '~18 yıl', neden: 'Elektrik ve Yangtze sellerini kontrol.', onem: 'Dünyanın en büyük kurulu güçlü hidroelektrik santrali.', teknik: [['Uzunluk', '2.335 m'], ['Yükseklik', '181 m'], ['Güç', '22.500 MW']], nasil: 'Beton ağırlık barajı; 1,3 milyon kişi yer değiştirdi.', bugun: 'Çalışıyor.', ilginc: 'NASA hesaplarına göre biriken su kütlesi Dünya\'nın dönüşünü çok küçük bir miktar yavaşlattı.' }
    },
    ulke: [
      { ad: 'Genel bakış', ikon: '🧭', html: '<p>1912\'de imparatorluk bitti; iç savaş ve Japon işgali yaşandı. 1949\'da <b>Mao</b> Halk Cumhuriyeti\'ni kurdu. 1978\'den sonra <b>Deng Xiaoping</b>\'in reformlarıyla Çin dünyanın en büyük ekonomilerinden biri oldu. Tayvan\'da Çin Cumhuriyeti ayrı bir yönetim olarak sürüyor.</p>' }
    ]
  });

  window.BOLGE_TASI('cin');

  window.MISIR = {
    coords: { yinxu: [36.1286, 114.3175], terracotta: [34.3853, 109.2785], seddqin: [40.36, 109.9], mogao: [40.0425, 94.8092], yabanikazpagoda: [34.2196, 108.9594], changan: [34.26, 108.94], yasaksehir: [39.9163, 116.3972], seddming: [40.3588, 116.0201], gokyuzutapinagi: [39.8822, 116.4066], porselenkule: [32.0094, 118.776], sanghay: [31.2397, 121.4998], ucbogaz: [30.8233, 111.0036] },
    wiki: { yinxu: 'Yinxu', terracotta: 'Terracotta Army', seddqin: 'Great Wall of China', mogao: 'Mogao Caves', yabanikazpagoda: 'Giant Wild Goose Pagoda', changan: "Chang'an", yasaksehir: 'Forbidden City', seddming: 'Badaling', gokyuzutapinagi: 'Temple of Heaven', porselenkule: 'Porcelain Tower of Nanjing', sanghay: 'Pudong', ucbogaz: 'Three Gorges Dam' },
    bilgi: {}, alt: {},
    kureAdlari: [[35, 105, 'ÇİN', 'misir', 2.4], [30, 125, 'DOĞU ÇİN DENİZİ', 'deniz', 3.0], [15, 114, 'GÜNEY ÇİN DENİZİ', 'deniz', 2.8], [32, 88, 'TİBET', 'bolge', 2.8], [41, 85, 'SİNCAN', 'bolge', 2.8],
      [44, 125, 'MANÇURYA', 'bolge', 3.2], [36, 114, 'Sarı Irmak', 'nehir', 5], [30.6, 114.3, 'Yangtze', 'nehir', 5]],
    sehirler: [
      { ad: 'Anyang (Yin)', ll: [36.1, 114.39], from: 1300, to: -2026, b: [[1300, 1046]], not: 'Şang başkenti.' },
      { ad: 'Xi\'an (Chang\'an)', ll: [34.3416, 108.9398], from: 1046, to: -2026, b: [[1046, 771], [202, -25], [-582, -904]], not: 'Zhou, Qin, Han ve Tang başkenti.' },
      { ad: 'Luoyang', ll: [34.6197, 112.454], from: 1036, to: -2026, b: [[770, 256], [-25, -190], [-493, -534]], not: 'Doğu Zhou ve Doğu Han başkenti.' },
      { ad: 'Kaifeng', ll: [34.7972, 114.3076], from: 364, to: -2026, b: [[-960, -1127]], not: 'Kuzey Song başkenti.' },
      { ad: 'Hangzhou', ll: [30.2741, 120.1551], from: -589, to: -2026, b: [[-1138, -1276]], not: 'Güney Song başkenti; Marco Polo\'ya göre dünyanın en güzel şehri.' },
      { ad: 'Nanjing', ll: [32.0603, 118.7969], from: 472, to: -2026, b: [[-229, -589], [-1368, -1421], [-1927, -1949]], not: '"Güney başkenti".' },
      { ad: 'Pekin', ll: [39.9042, 116.4074], from: 1045, to: -2026, b: [[-1272, -1368], [-1421, -1928], [-1949, -2026]], not: 'Yuan, Ming, Qing ve bugünkü Çin\'in başkenti.' },
      { ad: 'Şanghay', ll: [31.2304, 121.4737], from: -1291, to: -2026, not: 'Çin\'in en büyük şehri.' },
      { ad: 'Guangzhou (Kanton)', ll: [23.1291, 113.2644], from: 214, to: -2026, not: 'Deniz ticaretinin kapısı.' },
      { ad: 'Dunhuang', ll: [40.1421, 94.6618], from: 111, to: -2026, not: 'İpek Yolu vahası; Mogao mağaraları.' },
      { ad: 'Hong Kong', ll: [22.3193, 114.1694], from: -1842, to: -2026, not: '1842-1997 İngiliz yönetiminde.' }
    ],
    nil: { ikon: '🌊', title: 'Sarı Irmak ve Yangtze', sub: '"Çin\'in kederi" ve "Uzun Nehir"', foto: 'Yellow River', tabs: [{ ad: '🌊 Nehirler', html: '<ul class="hap"><li><b>Sarı Irmak</b> (~5.460 km) taşıdığı sarı lösten adını alır. Çin uygarlığının beşiğidir ama yüzlerce kez yatağını değiştirip milyonlarca kişiyi boğduğu için "Çin\'in kederi" denir.</li><li><b>Yangtze</b> (~6.300 km) Asya\'nın en uzun nehri; pirinç tarımının ve bugün Şanghay\'ın nehri.</li><li><b>Büyük Kanal</b> (~1.800 km) iki nehri birbirine bağlar: dünyanın en uzun yapay su yolu.</li></ul>' }] },
    simgeler: [
      { id: 'cn-kemik', ad: 'Kehanet kemikleri', ikon: '🦴', wiki: 'Oracle bone', git: { place: 'cin-antik', y: 1250, id: 'yinxu' }, ozet: 'Çin yazısının başlangıcı.', hap: ['MÖ ~1250.', 'Anyang.'] },
      { id: 'cn-konfucyus', ad: 'Konfüçyüs', ikon: '📜', wiki: 'Confucius', git: { place: 'cin-antik', y: 500 }, ozet: 'Çin düşüncesinin ustası.', hap: ['MÖ 551-479.', 'Konuşmalar.'] },
      { id: 'cn-terracotta', ad: 'Terracotta Ordusu', ikon: '🗿', wiki: 'Terracotta Army', git: { place: 'cin-antik', y: 210, id: 'terracotta' }, ozet: '8.000 pişmiş topraktan asker.', hap: ['MÖ 210.', '1974\'te bulundu.'] },
      { id: 'cn-sed', ad: 'Çin Seddi', ikon: '🧱', wiki: 'Great Wall of China', git: { place: 'cin-ming', y: -1570, id: 'seddming' }, ozet: 'Bozkıra karşı dev sur.', hap: ['MÖ 7. yy - MS 17. yy.', 'Ming hâli ~8.850 km.'] },
      { id: 'cn-kagit', ad: 'Kâğıt ve matbaa', ikon: '📄', wiki: 'Paper', git: { place: 'cin-tang', y: -868 }, ozet: 'Bilginin yayılması.', hap: ['Kâğıt MS ~105.', 'Elmas Sutra 868.'] },
      { id: 'cn-yasak', ad: 'Yasak Şehir', ikon: '🏯', wiki: 'Forbidden City', git: { place: 'cin-ming', y: -1420, id: 'yasaksehir' }, ozet: 'İmparatorların sarayı.', hap: ['1420.', '~980 bina.'] },
      { id: 'cn-porselen', ad: 'Porselen', ikon: '🏺', wiki: 'Chinese ceramics', git: { place: 'cin-ming', y: -1500 }, ozet: 'İngilizcede adı "china".', hap: ['Jingdezhen.', 'Mavi-beyaz: Yuan.'] },
      { id: 'cn-sanghay', ad: 'Şanghay', ikon: '🏙️', wiki: 'Shanghai', git: { place: 'cin-modern', y: -2015, id: 'sanghay' }, ozet: 'Yeni Çin\'in vitrini.', hap: ['~25 milyon.', '632 m kule.'] }
    ],
    bugun: '<p><b>Çin Halk Cumhuriyeti</b> ~1,4 milyar nüfusuyla dünyanın en kalabalık ikinci ülkesi ve en büyük ikinci ekonomisi.</p><ul class="hap"><li><b>Dil:</b> Mandarin Çincesi; Kantonca, Wu ve diğer Çin dilleri; Uygurca, Tibetçe, Moğolca.</li><li><b>Şehirler:</b> Şanghay, Pekin, Chongqing, Guangzhou, Shenzhen.</li><li><b>UNESCO:</b> 59 Dünya Mirası alanı (dünyada ilk sıralarda).</li><li><b>Tayvan</b> ayrı bir yönetim altında; Hong Kong ve Makao özel yönetim bölgeleri.</li></ul>'
  };

  window.SEHIR_BILGI = {
    'Pekin': { bugun: 'Pekin, Çin', kurulus: 'MÖ ~1045 (Ji şehri)', wiki: 'Beijing', onem: '700 yıldır Çin\'in başkenti.', ilginc: 'Pekin hem Yaz (2008) hem Kış (2022) Olimpiyatları\'nı düzenleyen ilk şehir.' },
    'Xi\'an (Chang\'an)': { bugun: 'Şaanşi, Çin', kurulus: 'MÖ ~1046', wiki: "Xi'an", onem: '13 hanedanın başkenti; İpek Yolu\'nun doğu ucu.', ilginc: 'Ming döneminden kalma 14 km\'lik şehir surunun üstünde bisiklet sürülebilir.' },
    'Hangzhou': { bugun: 'Zhejiang, Çin', kurulus: '589', wiki: 'Hangzhou', onem: 'Güney Song başkenti; Batı Gölü.', ilginc: 'Çinliler "Yukarıda cennet, aşağıda Suzhou ve Hangzhou" der.' }
  };
  window.KULTUR = { tanrilar: [], olumler: [], roller: [], mumyalama: '', ic: { eslesme: {}, sahneler: {} }, bilim: { genel: '', cag: {} } };
  window.SINIRLAR = [];

  window.OLAYLAR = [
    { id: 'muye', tur: 'savas', ad: 'Muye Savaşı', y: 1046, ll: [35.3, 114.0], onem: 4, wiki: 'Battle of Muye', taraflar: ['Zhou (Wu)', 'Şang (Di Xin)'], kazanan: 'Zhou', sonuc: 'Şang hanedanı sona erdi.' },
    { id: 'changping', tur: 'savas', ad: 'Changping Savaşı', y: 260, ll: [35.8, 112.9], onem: 4, wiki: 'Battle of Changping', taraflar: ['Qin', 'Zhao'], kazanan: 'Qin', sonuc: 'Qin\'in Çin\'i birleştirmesinin yolu açıldı; kaynaklara göre yüz binlerce esir öldürüldü.' },
    { id: 'kizilkayalik', tur: 'savas', ad: 'Kızıl Kayalıklar Savaşı', y: -208, ll: [29.87, 113.62], onem: 4, wiki: 'Battle of Red Cliffs', taraflar: ['Sun Quan ve Liu Bei', 'Cao Cao'], kazanan: 'Sun Quan ve Liu Bei', sonuc: 'Çin üç krallığa bölündü.' },
    { id: 'anlushan', tur: 'savas', ad: 'An Lushan isyanı', y: -755, ll: [34.27, 108.95], onem: 5, wiki: 'An Lushan rebellion', taraflar: ['An Lushan (Soğd-Türk kökenli general)', 'Tang hanedanı'], kazanan: 'Tang (zorlukla)', sonuc: 'Tang bir daha eski gücüne kavuşamadı; nüfus sayımları büyük düşüş gösterdi.' },
    { id: 'yamen', tur: 'savas', ad: 'Yamen Deniz Savaşı', y: -1279, ll: [22.3, 113.07], onem: 4, wiki: 'Battle of Yamen', taraflar: ['Yuan (Moğollar)', 'Güney Song'], kazanan: 'Yuan', sonuc: 'Son Song imparatoru öldü; bütün Çin Moğolların oldu.' },
    { id: 'afyon1', tur: 'savas', ad: 'Birinci Afyon Savaşı', y: -1839, ll: [23.13, 113.26], onem: 5, wiki: 'First Opium War', taraflar: ['İngiltere', 'Qing Çini'], kazanan: 'İngiltere', sonuc: 'Nanjing Antlaşması (1842): Hong Kong verildi, limanlar açıldı; "aşağılanma yüzyılı" başladı.' },
    { id: 'taiping', tur: 'savas', ad: 'Taiping isyanı', y: -1850, ll: [32.06, 118.8], onem: 5, wiki: 'Taiping Rebellion', taraflar: ['Taiping Göksel Krallığı (Hong Xiuquan)', 'Qing'], kazanan: 'Qing', sonuc: '~20-30 milyon ölü: 19. yüzyılın en kanlı savaşı.' },
    { id: 'zhenghe', tur: 'olay', ad: 'Zheng He\'nin seferleri', y: -1405, ll: [32.0, 118.7], onem: 5, wiki: 'Ming treasure voyages', sonuc: '1405-1433 arası 7 sefer; Hindistan, Hürmüz, Mekke çevresi ve Doğu Afrika\'ya ulaşıldı.' },
    { id: 'halkcumhuriyeti', tur: 'olay', ad: 'Halk Cumhuriyeti ilan edildi', y: -1949, ll: [39.9, 116.39], onem: 5, wiki: 'Proclamation of the People\'s Republic of China', sonuc: 'Mao Zedong Tiananmen\'de ilan etti.' },
    { id: 'reform1978', tur: 'olay', ad: 'Reform ve dışa açılma', y: -1978, ll: [22.54, 114.06], onem: 5, wiki: 'Chinese economic reform', sonuc: 'Shenzhen gibi özel ekonomik bölgeler; Çin dünyanın fabrikası oldu.' },
    { id: 'sarisel1931', tur: 'afet', alt: 'sel', ad: '1931 Çin selleri', y: -1931, ll: [30.6, 114.3], onem: 5, wiki: '1931 China floods', sonuc: 'Yangtze ve Sarı Irmak taştı; tahminen 1-4 milyon ölü: kayıtlı en ölümcül doğal afetlerden.' },
    { id: 'tangshan', tur: 'afet', alt: 'deprem', ad: 'Tangshan depremi', y: -1976, ll: [39.63, 118.18], onem: 4, wiki: '1976 Tangshan earthquake', sonuc: 'Resmî rakamlara göre ~242.000 ölü.' },
    { id: 'buyukkitlik', tur: 'afet', alt: 'kuraklik', ad: 'Büyük Çin Kıtlığı', y: -1959, ll: [32.0, 112.0], onem: 5, wiki: 'Great Chinese Famine', sonuc: 'Büyük İleri Atılım politikaları sonucu; tahminler 15-45 milyon ölü.' }
  ];

  window.ULKE_SAYFA = window.ULKE_SAYFA || {};
  window.ULKE_SAYFA.cin = {
    id: 'cin', ad: 'Çin', ikon: '🐉', kw: ['çin', 'china', 'han', 'tang', 'song', 'ming', 'qing', 'konfüçyüs', 'çin seddi', 'pekin', 'şanghay', 'mao', 'terracotta', 'yasak şehir'],
    altBaslik: 'MÖ ~2070 – bugün · kehanet kemiklerinden Şanghay\'a', kapakWiki: 'Forbidden City', kapakAd: 'Yasak Şehir', merkez: [33.5, 110], merkezZ: 3.6,
    ozet: ['<b>Çin</b> dünyanın en uzun kesintisiz uygarlıklarından biridir. Yazısı 3.200 yıldır aynı kökten gelir.', 'Hanedanlar yükselip düştü ama imparatorluk fikri 2.000 yıl sürdü. Kâğıt, matbaa, barut ve pusula Çin\'de icat edildi. 20. yüzyılda devrimlerden sonra Çin yeniden dünyanın büyük güçlerinden biri oldu.'],
    bilgiKutusu: [['Tarih', 'MÖ ~2070 – bugün'], ['Önemli başkentler', 'Anyang, Chang\'an, Luoyang, Kaifeng, Hangzhou, Nanjing, Pekin'], ['Dil', 'Çince (Mandarin ve diğerleri)'], ['Bugün', '~1,4 milyar kişi']],
    donemler: { 'cin-antik': 'Şang, Zhou, Konfüçyüs, Qin ve Han.', 'cin-tang': 'Sui, Tang ve Song: icatlar çağı.', 'cin-ming': 'Moğol Yuan, Ming ve Mançu Qing.', 'cin-modern': 'Cumhuriyet, Mao ve reform çağı.' },
    kultur: [{ baslik: 'Yazı', ikon: '✍️', html: '<p>Çince binlerce karakterle yazılır; okuma yazma için ~3.000 karakter bilmek gerekir. Konuşma dilleri çok farklı olsa da yazı ortaktır.</p>' }, { baslik: 'İnanç', ikon: '☯️', html: '<p>Ata saygısı, Konfüçyüsçülük, Taoizm ve Budizm iç içe yaşar.</p>' }],
    figurler: [
      { id: 'yasaksehir', ad: 'Yasak Şehir', tur: 'yapı', wiki: 'Forbidden City', ll: [39.9163, 116.3972], z: 80, yapim: '1406-1420', kim: 'Yongle', durum: 'ayakta', durumYazi: 'Müze.', nerede: 'Pekin', metin: 'İmparatorların sarayı.', git: { place: 'cin-ming', y: -1420, id: 'yasaksehir' } },
      { id: 'terracotta', ad: 'Terracotta Ordusu', tur: 'yapı', wiki: 'Terracotta Army', ll: [34.3853, 109.2785], z: 75, yapim: 'MÖ 246-208', kim: 'Qin Shi Huang', durum: 'ayakta', durumYazi: 'Kazı sürüyor.', nerede: 'Xi\'an', metin: 'Pişmiş topraktan ordu.', git: { place: 'cin-antik', y: 210, id: 'terracotta' } }
    ],
    kisiler: [
      { ad: 'Konfüçyüs', wiki: 'Confucius', yil: 'MÖ 551-479', ozet: 'Düşünür.', y: 500 }, { ad: 'Qin Shi Huang', wiki: 'Qin Shi Huang', yil: 'MÖ 259-210', ozet: 'İlk imparator.', y: 221 },
      { ad: 'Wu Zetian', wiki: 'Wu Zetian', yil: '624-705', ozet: 'Tek kadın imparator.', y: -690 }, { ad: 'Li Bai', wiki: 'Li Bai', yil: '701-762', ozet: 'Tang şairi.', y: -740 },
      { ad: 'Kubilay Han', wiki: 'Kublai Khan', yil: '1215-1294', ozet: 'Yuan imparatoru.', y: -1280 }, { ad: 'Zheng He', wiki: 'Zheng He', yil: '1371-1433', ozet: 'Müslüman amiral.', y: -1405 },
      { ad: 'Kangxi', wiki: 'Kangxi Emperor', yil: '1654-1722', ozet: '61 yıl hüküm sürdü.', y: -1700 }, { ad: 'Sun Yat-sen', wiki: 'Sun Yat-sen', yil: '1866-1925', ozet: 'Cumhuriyetin babası.', y: -1912 },
      { ad: 'Mao Zedong', wiki: 'Mao Zedong', yil: '1893-1976', ozet: 'Halk Cumhuriyeti\'nin kurucusu.', y: -1949 }, { ad: 'Deng Xiaoping', wiki: 'Deng Xiaoping', yil: '1904-1997', ozet: 'Reformların mimarı.', y: -1980 }
    ],
    biliyorMuydunuz: ['Çin tek saat dilimi kullanır; batıdaki Sincan\'da güneş öğlen saat 15:00\'te tepeye çıkar.', 'Çay 2.000 yıldan uzun süre önce Çin\'de ilaç olarak içilmeye başlandı.', 'Erişte (noodle) bilinen en eski kalıntısı 4.000 yıllık ve Çin\'de bulundu.', 'İngilizcede porselene "china" denmesi Çin porseleninin ününden gelir.']
  };
})();
