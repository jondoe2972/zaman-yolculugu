// Yapı kartları ve ülke hakkında genel bilgiler (Antik Mısır, Eski Krallık).
// Kaynaklar: KAYNAKLAR.md. Ölçüler yaklaşık; "bugün" bilgileri 2026 itibarıyla.
Object.assign(window.PLACES.find(p => p.id === 'misir-eski-krallik'), {
  bilgi: {
    djoser: {
      ikon: '🪜', firavun: 'Djoser (Netjerihet)', donem: '3. Hanedan, MÖ 2667-2648', mimar: 'İmhotep (vezir ve mimar)', sure: 'Yaklaşık 20 yıl',
      neden: 'Firavunun mezarı ve öbür dünyadaki sonsuz hayatının merkezi. Basamaklar, ölen kralın yıldızlara ve göğe tırmanacağı bir merdiven olarak düşünülmüş olabilir.',
      onem: 'Dünyanın bilinen en eski büyük kesme taş yapısı. Daha önce krallar kerpiçten mastaba mezarlara gömülüyordu; burada ilk kez her şey taştan yapıldı. Piramitler çağını başlatan yapı bu.',
      teknik: [['Yükseklik', '62,5 m'], ['Taban', '121 × 109 m (dikdörtgen)'], ['Biçim', '6 basamak, üst üste konmuş mastabalar'], ['Malzeme', 'Yerel kireçtaşı, dışı ince beyaz kireçtaşı'], ['Yeraltı', 'Kilometrelerce dehliz ve oda'], ['Kompleks', 'Çevresi 1,6 km, 10,5 m yüksekliğinde duvar']],
      nasil: 'Yapı önce düz, kare bir mastaba olarak başladı. Sonra en az iki kez genişletildi ve üstüne katlar eklenerek 4, ardından 6 basamaklı bir piramide dönüştü. Taşlar küçük bloklardı: taş işçiliği yeni öğreniliyordu.',
      bugun: 'Ayakta. 2006-2020 arasında büyük bir restorasyondan geçti ve iç dehlizleri 2020\'de ziyarete açıldı.',
      ilginc: 'Çevre duvarında 14 kapı var ama yalnızca biri gerçek. Diğerleri taştan oyulmuş sahte kapılar.'
    },
    sekhemkhet: {
      ikon: '🧱', firavun: 'Sekhemkhet', donem: '3. Hanedan, MÖ 2648-2640', mimar: 'Belki İmhotep (çevre duvarında adı yazılı)', sure: 'Yarım kaldı',
      neden: 'Djoser\'in yolundan giden bir kral mezarı. Plan Djoser\'inkinden de büyüktü: 7 basamak, yaklaşık 70 m.',
      onem: 'Firavun erken ölünce yapı yalnızca birkaç metre yükselebildi. Bu, piramitlerin ne kadar büyük bir emek ve zaman istediğini gösteriyor.',
      teknik: [['Planlanan yükseklik', '~70 m (7 basamak)'], ['Ulaşılan yükseklik', '~7-8 m'], ['Taban', '~120 × 120 m'], ['Malzeme', 'Kireçtaşı']],
      nasil: 'Djoser\'in yapısı gibi içe eğik katmanlarla başlandı. Firavunun ölümüyle şantiye durdu.',
      bugun: 'Kumlar altında kalmıştı; 1951\'de Zakaria Goneim tarafından bulundu. Bugün alçak bir kalıntı.',
      ilginc: 'İçinde mühürlü bir kaymaktaşı lahit bulundu. 1954\'te açıldığında boş çıktı; firavunun nereye gömüldüğü hâlâ bilinmiyor.'
    },
    khaba: {
      ikon: '🧱', firavun: 'Khaba (büyük olasılıkla)', donem: '3. Hanedan, MÖ 2640-2637', mimar: 'Bilinmiyor', sure: 'Yarım kaldı',
      neden: 'Kral mezarı olarak planlanmış basamaklı bir piramit.',
      onem: 'Katman katman örülmüş yapısıyla Djoser ile Snefru arasındaki geçiş döneminin örneği.',
      teknik: [['Taban', '~84 × 84 m'], ['Planlanan yükseklik', '~42-45 m (5 basamak)'], ['Bugünkü yükseklik', '~17 m'], ['Malzeme', 'Yerel kireçtaşı']],
      nasil: 'İçe eğik taş katmanlar (bu yüzden "katmanlı piramit" deniyor). Kısa saltanat yüzünden bitmedi.',
      bugun: 'Zaviyet el-Aryan\'da askeri bölge içinde kalıyor, ziyarete kapalı.',
      ilginc: 'Kime ait olduğu, yakınındaki mezarlarda bulunan Khaba adlı taş kaplardan tahmin ediliyor.'
    },
    meidum1: { ref: 'meidum' }, meidum2: { ref: 'meidum' },
    meidum: {
      ikon: '🏜️', firavun: 'Huni (başlatan, tartışmalı) ve Snefru (bitiren)', donem: '3. Hanedan sonu – 4. Hanedan başı, ~MÖ 2625-2590', mimar: 'Bilinmiyor', sure: 'İki evrede ~30 yıl',
      neden: 'Önce basamaklı bir kral mezarı olarak yapıldı. Snefru sonradan basamakların arasını doldurup dışını düz yüzlü bir piramide çevirtti.',
      onem: 'Basamaklı piramitten "gerçek" piramide geçişin ilk denemesi.',
      teknik: [['Son hâliyle yükseklik', '~92 m'], ['Taban', '~144 × 144 m'], ['Eğim', '~51,8°'], ['Evreler', 'Önce 7, sonra 8 basamak; en son düz kaplama']],
      nasil: 'Dış kaplama, alttaki basamaklara iyi bağlanmadan eklendi. Bu zayıf nokta yapının sonradan çökmesine yol açtı.',
      bugun: 'Dış kaplama ve katmanların bir kısmı çökmüş; bugün kum yığınının üstünde yükselen bir kuleye benziyor (~65 m). Çöküşün ne zaman olduğu tartışmalı.',
      ilginc: 'Yöredeki adı "el-Haram el-Kaddab", yani "Sahte Piramit".'
    },
    bent: {
      ikon: '📐', firavun: 'Snefru', donem: '4. Hanedan, ~MÖ 2608-2598', mimar: 'Bilinmiyor', sure: 'Yaklaşık 10 yıl',
      neden: 'Snefru\'nun mezarı olarak, baştan düz yüzlü piramit diye tasarlandı.',
      onem: 'Gerçek piramit yapma çabasının "hata yaparak öğrenme" anı. Mühendislerin sorun çıkınca planı değiştirdiğini gösteriyor.',
      teknik: [['Yükseklik', '~105 m (bugün ~101 m)'], ['Taban', '188,6 × 188,6 m'], ['Eğim', 'Altta ~54,5°, üstte ~43,4°'], ['Girişler', 'İki giriş (kuzey ve batı), nadir bir özellik']],
      nasil: 'Yumuşak zemin ve dik açı yüzünden iç odalarda çatlaklar oluştu. Yapı 47 m civarına gelince eğim azaltıldı, böylece üst kısmın ağırlığı düştü.',
      bugun: 'Ayakta. Orijinal beyaz kaplaması en iyi korunmuş piramitlerden biri. 2019\'dan beri içi ziyarete açık.',
      ilginc: 'Kırık açılı silueti yüzünden "Eğik" ya da "Bükük Piramit" deniyor.'
    },
    red: {
      ikon: '🔺', firavun: 'Snefru', donem: '4. Hanedan, ~MÖ 2597-2589', mimar: 'Bilinmiyor', sure: 'Yaklaşık 10 yıl',
      neden: 'Eğik Piramit\'teki sorunlardan sonra Snefru için yapılan yeni mezar.',
      onem: 'Başarıyla tamamlanan ilk düz yüzlü "gerçek" piramit. Büyük Piramit\'in doğrudan öncüsü.',
      teknik: [['Yükseklik', '~105 m'], ['Taban', '~220 × 220 m'], ['Eğim', '~43,4° (Eğik Piramit\'in üst açısı)'], ['Sıralama', 'Mısır\'ın en büyük üçüncü piramidi']],
      nasil: 'Mühendisler baştan güvenli, düşük bir açı seçti. Yük daha iyi dağıldığı için iç odalar sağlam kaldı.',
      bugun: 'Ayakta, içi ziyarete açık. Beyaz dış kaplaması sökülmüş.',
      ilginc: 'Adını, kaplama sökülünce ortaya çıkan kızılımsı iç taşlarından alıyor.'
    },
    khufu: {
      ikon: '👑', firavun: 'Keops (Hufu)', donem: '4. Hanedan, ~MÖ 2587-2567', mimar: 'Hemiunu (Keops\'un veziri ve yeğeni, olası)', sure: 'Yaklaşık 20 yıl',
      neden: 'Keops\'un mezarı ve kültünün merkezi. Piramit, ölen kralın güneşle birlikte göğe yükselip tanrılaşmasını sağlayan kutsal bir yapı olarak düşünülüyordu.',
      onem: 'Antik Dünyanın Yedi Harikası\'ndan bugün ayakta kalan tek yapı. MS 1311\'e kadar, yaklaşık 3.800 yıl dünyanın en yüksek insan yapımı yapısıydı. Eski Mısır devletinin örgütlenme gücünün zirvesi.',
      teknik: [['Yükseklik', '146,6 m (bugün ~138,5 m)'], ['Taban', '230,3 × 230,3 m'], ['Eğim', '~51,8°'], ['Hacim', '~2,6 milyon m³'], ['Blok sayısı', '~2,3 milyon, ortalama ~2,5 ton'], ['En ağır taşlar', 'Kral Odası\'nın granit kirişleri, onlarca ton'], ['Malzeme', 'Yerel kireçtaşı, Tura\'dan beyaz kaplama, Asuan\'dan granit'], ['Yön', 'Kenarlar ana yönlere birkaç açı dakikası hassasiyetle hizalı']],
      nasil: 'Taşlar bakır aletlerle kesildi, kızaklarla çekildi; kızağın önü kayganlaşsın diye kum ıslatıldı. Uzak taşlar Nil\'den ve kanallardan gemiyle getirildi. Blokları yukarı çıkarmak için rampalar kullanıldı; rampanın biçimi (düz, zikzak ya da piramidin etrafına sarılan) hâlâ tartışılıyor. İşçiler köle değil, ücretini ekmek, bira ve et olarak alan dönüşümlü ekiplerdi.',
      bugun: 'Ayakta. Dış kaplaması Orta Çağ\'da, büyük ölçüde Kahire\'deki yapılar için sökülmüş. 2023\'te giriş koridorunun üstünde gizli bir koridor görüntülendi.',
      ilginc: 'İçinde Kral Odası, Kraliçe Odası (adına rağmen kraliçe için değil) ve 8,6 m yüksekliğinde, 47 m uzunluğunda Büyük Galeri var.'
    },
    kralice1: { ref: 'kralice' }, kralice2: { ref: 'kralice' }, kralice3: { ref: 'kralice' },
    kralice: {
      ikon: '👸', firavun: 'Keops', donem: '4. Hanedan, ~MÖ 2578-2567', mimar: 'Bilinmiyor', sure: 'Her biri birkaç yıl',
      neden: 'Keops\'un ailesinden kadınlar, büyük olasılıkla eşleri ve annesi için yapılmış küçük piramitler.',
      onem: 'Kraliyet ailesinin ölümden sonra da kralın yanında olması gerektiği inancını gösteriyor.',
      teknik: [['Yükseklik', '~30 m'], ['Taban', '~46 × 46 m'], ['Sayı', '3 piramit, Büyük Piramit\'in doğusunda']],
      nasil: 'Büyük Piramit\'le aynı yöntemlerle, ana şantiye sürerken yapıldı.',
      bugun: 'Üçü de ayakta ama aşınmış; kaplamaları büyük ölçüde gitmiş.',
      ilginc: 'Bir kısmının Keops\'un annesi Hetepheres\'e ait olduğu düşünülüyor (tartışmalı). Hetepheres\'in mezar eşyaları 1925\'te yakındaki bir kuyuda bulundu.'
    },
    djedefre: {
      ikon: '☀️', firavun: 'Cedefre (Radjedef)', donem: '4. Hanedan, MÖ 2566-2558', mimar: 'Bilinmiyor', sure: 'Kısa saltanat; bitip bitmediği tartışmalı',
      neden: 'Keops\'un oğlunun mezarı. Gize yerine kuzeydeki yüksek bir tepe seçildi.',
      onem: 'Cedefre "Ra\'nın oğlu" unvanını kullanan ilk firavun; güneş inancının yükselişinin işareti.',
      teknik: [['Taban', '~106 × 106 m'], ['Planlanan yükseklik', '~67 m'], ['Eğim', '~52° (tahmini)'], ['Malzeme', 'Kireçtaşı, alt kısımlarda granit']],
      nasil: 'Doğal bir kaya tepesi çekirdek olarak kullanıldı, üstüne taş örüldü.',
      bugun: 'Roma çağından beri taş ocağı gibi kullanıldığı için yalnızca alt sıralar kaldı.',
      ilginc: 'Louvre Müzesi\'ndeki kuvarsit Cedefre başı buradan çıktı.'
    },
    khafre: {
      ikon: '🔺', firavun: 'Kefren (Hafre)', donem: '4. Hanedan, ~MÖ 2558-2536', mimar: 'Bilinmiyor', sure: 'Yaklaşık 20 yıl',
      neden: 'Kefren\'in mezarı. Babası Keops\'un yanına, neredeyse aynı büyüklükte yapıldı.',
      onem: 'Gize\'nin ikinci büyük piramidi. Vadi tapınağı, yol ve Sfenks ile birlikte en eksiksiz piramit kompleksi.',
      teknik: [['Yükseklik', '143,5 m (bugün ~136,4 m)'], ['Taban', '215,3 × 215,3 m'], ['Eğim', '~53,2° (Keops\'unkinden dik)'], ['Malzeme', 'Kireçtaşı, en alt sıra granit, beyaz Tura kaplaması']],
      nasil: 'Plato eğimli olduğu için bir taraf kayadan kesildi, öbür taraf taşla dolduruldu.',
      bugun: 'Ayakta. Tepesinde orijinal kaplamanın bir parçası hâlâ duruyor.',
      ilginc: 'Keops\'unkinden 3 m kısa ama 10 m daha yüksek bir zemine oturduğu ve daha dik olduğu için uzaktan daha uzun görünüyor.'
    },
    sphinx: {
      ikon: '🦁', firavun: 'Kefren (Egiptologların çoğuna göre)', donem: '4. Hanedan, ~MÖ 2556-2540', mimar: 'Bilinmiyor', sure: 'Birkaç yıl (tahmini)',
      neden: 'Kralın gücünü ve güneş tanrısıyla bağını gösteren koruyucu bir anıt. Aslan gövdesi güç, insan başı firavun demek.',
      onem: 'Mısır\'ın en büyük tek parça heykeli ve bilinen en büyük antik heykellerden biri.',
      teknik: [['Uzunluk', '~73 m'], ['Yükseklik', '~20 m'], ['Malzeme', 'Platonun kendi kireçtaşı; ayrı taşlardan değil, kayadan oyuldu'], ['Yönü', 'Doğuya, doğan güneşe bakıyor']],
      nasil: 'Kefren\'in vadi yolunun yanındaki kaya kütlesinin çevresi oyularak çıkarıldı. Çıkarılan bloklar yanındaki tapınakta kullanıldı.',
      bugun: 'Ayakta; tarih boyunca kumlara gömülüp defalarca temizlendi. Burnu ve sakalı kırık.',
      ilginc: 'Burnunu Napolyon\'un askerlerinin kırdığı bir efsane: 1737\'deki çizimlerde Sfenks zaten burunsuz.'
    },
    menkaure: {
      ikon: '🔺', firavun: 'Mikerinos (Menkaure)', donem: '4. Hanedan, ~MÖ 2530-2505', mimar: 'Bilinmiyor', sure: 'Firavun öldüğünde bitmemişti',
      neden: 'Mikerinos\'un mezarı. Gize\'nin üçüncü ve en küçük büyük piramidi.',
      onem: 'Piramitlerin küçülmeye başladığı dönemi gösteriyor. Buradan çıkan heykeller Eski Mısır sanatının başyapıtları arasında.',
      teknik: [['Yükseklik', '~65 m (bugün ~61 m)'], ['Taban', '~102 × 105 m'], ['Eğim', '~51,3°'], ['Kaplama', 'Alt 16 sıra kırmızı Asuan graniti']],
      nasil: 'Granit kaplama yerine kondu ama yüzeyi düzeltilmeden kaldı. Tapınakları ardılı Şepseskaf kerpiçle tamamladı.',
      bugun: 'Ayakta. Kuzey yüzündeki büyük yarık, MS 1196\'da onu yıkmaya çalışan Sultan el-Aziz Osman\'ın işçilerinden kaldı; 8 ay sonra vazgeçtiler.',
      ilginc: 'Kral ile kraliçesinin yan yana duran ünlü heykeli (Boston Müzesi) bu piramidin vadi tapınağında bulundu.'
    },
    shepseskaf: {
      ikon: '⚰️', firavun: 'Şepseskaf', donem: '4. Hanedan sonu, ~MÖ 2502-2496', mimar: 'Bilinmiyor', sure: 'Birkaç yıl',
      neden: 'Şepseskaf\'ın mezarı. Piramit yerine dev bir taş sandukaya benzeyen bir mastaba seçildi.',
      onem: 'Piramit geleneğinden bilinçli bir kopuş. Nedeni tartışmalı: kaynak sıkıntısı ya da güneş rahiplerinden uzaklaşma olabilir.',
      teknik: [['Boyut', '~100 × 74 m'], ['Yükseklik', '~18 m'], ['Biçim', 'Kubbemsi uçlu dev bir lahit (sanduka)']],
      nasil: 'Kireçtaşından bloklar; dışı beyaz kireçtaşı, alt sırası granitle kaplandı.',
      bugun: 'Güney Sakkara\'da ayakta, kaplaması büyük ölçüde sökülmüş. Yöredeki adı "Mastabat el-Firavun" (Firavunun Sekisi).',
      ilginc: 'Ondan sonraki 5. Hanedan firavunları yeniden piramide döndü, ama çok daha küçük boyutlarda.'
    },
    userkaf: {
      ikon: '🔺', firavun: 'Userkaf', donem: '5. Hanedan, ~MÖ 2493-2487', mimar: 'Bilinmiyor', sure: 'Birkaç yıl',
      neden: 'Yeni hanedanın kurucusunun mezarı; bilerek Djoser\'in piramidinin hemen yanına yapıldı.',
      onem: '5. Hanedan\'ın yeni, küçük ama tapınakları süslü piramit tarzının ilk örneği.',
      teknik: [['Yükseklik', '~49 m'], ['Taban', '~73 × 73 m'], ['Eğim', '~53°'], ['Çekirdek', 'Kaba taş ve moloz; dışı ince kireçtaşı']],
      nasil: 'Hızlı ve ucuz bir yöntem: içi düzensiz taş dolgu, yalnızca dışı düzgün bloklarla kaplı.',
      bugun: 'Kaplaması sökülünce iç dolgu çöktü; bugün bir taş yığını gibi görünüyor.',
      ilginc: 'Tapınağından kalan dev Userkaf başı bugün Kahire Mısır Müzesi\'nde.'
    },
    gunes: {
      ikon: '🌞', firavun: 'Userkaf', donem: '5. Hanedan, ~MÖ 2492-2484', mimar: 'Bilinmiyor', sure: 'Birkaç yıl',
      neden: 'Güneş tanrısı Ra\'ya tapınmak için. Firavunun ölümden sonra güneşle birleşmesine de hizmet ediyordu.',
      onem: 'Bilinen ilk güneş tapınağı. 5. Hanedan\'da Ra\'nın devletin en önemli tanrısı olduğunu gösteriyor.',
      teknik: [['Merkez', 'Bir platform üstünde iri, basık bir dikilitaş'], ['Adı', 'Nekhen-Re ("Ra\'nın kalesi")'], ['Yer', 'Abusir']],
      nasil: 'Bir vadi tapınağı, yükselen bir yol ve açık havada bir avlu. Güneş tapınaklarında kapalı bir heykel odası yerine gökyüzüne açık bir sunak var.',
      bugun: 'Kalıntı hâlinde; temelleri ve bazı duvarlar duruyor.',
      ilginc: 'Kayıtlarda altı güneş tapınağının adı geçiyor ama bugüne kadar yalnızca ikisi bulundu.'
    },
    sahure: {
      ikon: '⛵', firavun: 'Sahure', donem: '5. Hanedan, ~MÖ 2486-2476', mimar: 'Bilinmiyor', sure: 'Yaklaşık 10 yıl',
      neden: 'Sahure\'nin mezarı ve kült tapınağı.',
      onem: 'Tapınağı Eski Krallık\'ın en zengin kabartmalarıyla süslüydü: gemiler, Punt seferi, Libya zaferi. Sonraki 5. ve 6. Hanedan tapınaklarına örnek oldu.',
      teknik: [['Yükseklik', '~47 m'], ['Taban', '~79 × 79 m'], ['Eğim', '~50,2°'], ['Tapınak', 'Granit sütunlar, bazalt zemin, bakır borulu drenaj']],
      nasil: 'Userkaf\'ınki gibi kaba taş çekirdek ve ince kireçtaşı kaplama.',
      bugun: 'Piramit büyük ölçüde çökmüş; tapınak kalıntıları ve kabartma parçaları müzelerde.',
      ilginc: 'Tapınağın drenaj sistemi için yaklaşık 380 m uzunluğunda bakır boru kullanıldı.'
    },
    neferirkare: {
      ikon: '📜', firavun: 'Neferirkare Kakai', donem: '5. Hanedan, ~MÖ 2474 – 2450 (bitmedi)', mimar: 'Bilinmiyor', sure: 'Kaplaması hiç bitmedi',
      neden: 'Neferirkare\'nin mezarı; Abusir\'in en büyük piramidi olarak planlandı.',
      onem: 'Tapınağında bulunan Abusir papirüsleri, Eski Krallık\'ta bir tapınağın gündelik işleyişini (nöbetler, erzak, envanter) anlatan en önemli belgeler.',
      teknik: [['Taban', '~105 × 105 m'], ['Planlanan yükseklik', '~72 m'], ['Biçim', 'Önce basamaklı yapıldı, sonra düz yüzlü olacaktı']],
      nasil: 'Önce 6 basamaklı bir çekirdek kuruldu. Düz kaplamaya geçilmesi planlandı, ama firavunun ölümüyle iş yarım kaldı.',
      bugun: 'Basamaklı çekirdek hâlinde ayakta, aşınmış.',
      ilginc: 'Papirüsler 1893\'te kaçak kazıcılar tarafından bulundu; parçaları bugün dünyanın birçok müzesine dağılmış durumda.'
    },
    mastabalar: {
      ikon: '🏛️', firavun: 'Keops ve ardılları', donem: '4.-5. Hanedan', mimar: '-', sure: 'Yıllar içinde çoğaldı',
      neden: 'Soyluların, prenslerin ve yüksek memurların mezarları. Kralın yanına gömülmek büyük bir onurdu.',
      onem: 'Duvarlarındaki resimler ve yazılar, Eski Mısır\'da gündelik hayatı (tarım, zanaat, pazar, eğlence) anlatan en zengin kaynak.',
      teknik: [['Biçim', 'Dikdörtgen, eğik duvarlı, düz damlı taş yapı'], ['Mezar', 'Altta, bir kuyunun dibinde mezar odası'], ['Üstte', 'Sunu için sahte kapılı bir şapel']],
      nasil: 'Keops döneminde düzenli sıralar hâlinde, sokaklarla ayrılmış bir "ölüler şehri" olarak planlandı.',
      bugun: 'Gize\'nin doğu ve batı mezarlıklarında yüzlercesi duruyor.',
      ilginc: '"Mastaba" Arapça bir kelime: köy evlerinin önündeki taş sekiye benzediği için bu ad verildi.'
    },
    memfis: {
      ikon: '🏙️', firavun: 'Geleneğe göre Menes (Narmer) kurdu', donem: '~MÖ 3100\'den itibaren', mimar: '-', sure: '-',
      neden: 'Yukarı (güney) ve Aşağı (kuzey, delta) Mısır\'ın birleştiği noktada kurulan başkent.',
      onem: 'Eski Krallık boyunca yönetimin, sarayın ve yaratıcı tanrı Ptah\'ın tapınağının merkezi.',
      teknik: [['Eski adı', 'İneb-hedj ("Beyaz Duvarlar")'], ['Sonraki adı', 'Men-nefer; Yunanca "Memfis"'], ['Ana tapınak', 'Ptah tapınağı']],
      nasil: 'Kerpiç saraylar, tapınaklar ve evler; beyaz badanalı surlar. Nil yatağı yer değiştirdikçe şehir de kaydı.',
      bugun: 'Mit Rahina köyü yakınında kalıntılar ve açık hava müzesi; II. Ramses\'in dev heykeli orada.',
      ilginc: '"Mısır" kelimesinin Batı dillerindeki karşılığı (Egypt) Ptah tapınağının adından (Hut-ka-Ptah) geliyor.'
    },
    tura: {
      ikon: '⛏️', firavun: '-', donem: 'Eski Krallık\'tan itibaren', mimar: '-', sure: '-',
      neden: 'Piramitlerin parlak beyaz dış kaplaması için en kaliteli kireçtaşı buradan çıkarıldı.',
      onem: 'Büyük Piramit\'in kaplama taşlarının kaynağı. Merer\'in Günlüğü bu ocaktan Gize\'ye taş taşımayı anlatıyor.',
      teknik: [['Yer', 'Nil\'in doğu kıyısı, bugünkü Kahire\'nin güneyi'], ['Taş', 'İnce taneli, bembeyaz kireçtaşı'], ['Yöntem', 'Kayaya tüneller açılarak en iyi katman çıkarıldı']],
      nasil: 'Bloklar bakır keski ve tokmakla, ahşap kamalarla ayrıldı; kızakla nehre, oradan gemiyle Gize\'ye taşındı.',
      bugun: 'Ocak bölgesi hâlâ duruyor; sonraki çağlarda da kullanıldı.',
      ilginc: 'Merer\'in ekibi on günde iki-üç sefer yaparak Nil taşkını sırasında kanallardan Gize\'ye kadar gidiyordu.'
    },
    liman: {
      ikon: '⚓', firavun: 'Keops', donem: '~MÖ 2590-2555', mimar: 'Liman müdürü Ankhhaf (Keops\'un üvey kardeşi)', sure: '-',
      neden: 'Taşları, erzakı ve işçileri gemilerle doğrudan şantiyenin dibine getirmek için kazılmış liman ve kanallar.',
      onem: 'Büyük Piramit\'in "lojistik merkezi". Nil taşkını kanalları doldurunca gemiler platonun eteğine kadar gelebiliyordu.',
      teknik: [['Bağlantı', 'Nil\'e açılan kanallar'], ['Yük', 'Tura kireçtaşı, Asuan graniti, erzak'], ['Kaynak', 'Merer\'in Günlüğü ve yeni sondajlar']],
      nasil: 'Taşkın mevsiminde su yükselince gemiler kanallardan limana girip yük boşaltıyordu.',
      bugun: 'Kumlar ve şehir altında; varlığı belgeler ve jeolojik sondajlarla anlaşıldı.',
      ilginc: 'Merer\'in Günlüğü, bu limandan söz eden ve Keops dönemine ait bilinen en eski papirüs.'
    }
  },

  ulke: [
    { ad: 'Genel bakış', ikon: '🧭', html: `
      <p><b>Eski Krallık</b> (yaklaşık MÖ 2686-2181), Mısır'ın ilk büyük altın çağı. Ülke yaklaşık 400 yıldır tek bir kral altında birleşik. Bu yüzden ona <b>"Piramitler Çağı"</b> deniyor.</p>
      <p>Mısır aslında ince uzun bir ülke: Nil'in iki yanındaki birkaç kilometrelik verimli şerit ve kuzeyde delta. Geri kalanı çöl. İnsanlar "Kemet" (kara toprak, yani verimli Nil çamuru) ile "Deşret" (kızıl toprak, çöl) diye ayırıyordu.</p>
      <p>Ülke iki parçadan oluşuyordu: güneyde <b>Yukarı Mısır</b> (vadi) ve kuzeyde <b>Aşağı Mısır</b> (delta). Firavunun çift tacı bu birliği simgeliyordu. Başkent iki bölgenin birleştiği yerdeki <b>Memfis</b>.</p>
      <ul><li>Nüfus: yaklaşık 1-1,6 milyon</li><li>Dil: Eski Mısırca; yazı: hiyeroglif ve el yazısı (hiyeratik)</li><li>Komşular: güneyde Nubya, batıda Libyalılar, doğuda Sina ve Levant (Lübnan kıyıları)</li></ul>` },
    { ad: 'Din ve inanç', ikon: '☀️', html: `
      <p>Mısırlılar çok tanrılıydı. Her şehrin kendi tanrısı vardı, ama bazı tanrılar bütün ülkede önemliydi:</p>
      <ul><li><b>Ra:</b> güneş tanrısı, her sabah doğup her akşam ölen ve yeniden doğan güneş. 4. ve 5. Hanedan'da en önemli tanrı oldu.</li>
      <li><b>Horus:</b> şahin başlı gök tanrısı. Yaşayan firavun Horus'un yeryüzündeki hâli sayılıyordu.</li>
      <li><b>Ptah:</b> Memfis'in yaratıcı tanrısı, zanaatkârların koruyucusu.</li>
      <li><b>Osiris:</b> ölüler ve yeniden doğuş tanrısı. Eski Krallık'ın sonlarına doğru önemi hızla arttı.</li>
      <li><b>Hathor:</b> sevgi, müzik ve annelik tanrıçası; çoğu zaman inek olarak gösterilir.</li></ul>
      <p><b>Maat</b> (düzen, doğruluk, denge) en önemli kavramdı. Firavunun asıl görevi, kaosu uzak tutup Maat'ı korumaktı.</p>
      <p><b>Ölümden sonra hayat:</b> İnsanın ruhunun parçaları (ka, ba) ölümden sonra yaşamaya devam ediyordu, ama bunun için bedenin korunması ve mezara yiyecek-içecek sunulması gerekiyordu. Mumyalama ve büyük mezarlar bu yüzden yapıldı. Eski Krallık'ta öbür dünyada kesin bir yer en çok kral için garantiliydi; sıradan insanlar ise kralın sonsuz hayatına hizmet ederek pay almayı umuyordu.</p>` },
    { ad: 'Yönetim ve toplum', ikon: '👑', html: `
      <p><b>Firavun</b> hem kral hem de tanrısal bir varlıktı. Bütün toprak teorik olarak onundu.</p>
      <p><b>Vezir</b> en yüksek memurdu: vergileri, mahkemeleri, depoları ve büyük inşaatları yönetirdi. 4. Hanedan'da vezirler genellikle kral ailesinden prenslerdi (örneğin Hemiunu). 5. Hanedan'dan itibaren aile dışından memurlar da bu makama gelmeye başladı.</p>
      <p>Ülke <b>nomos</b> denen yaklaşık 40 eyalete bölünmüştü; her birini kralın atadığı bir vali yönetiyordu.</p>
      <p><b>Toplum piramidi:</b> en üstte kral ve ailesi; sonra soylular, rahipler ve yüksek memurlar; sonra kâtipler (yazmayı bilen az sayıda kişi); zanaatkârlar; ve en altta nüfusun büyük çoğunluğu olan çiftçiler. Kölelik vardı ama yaygın değildi; piramitleri köleler değil, ücretli ve zorunlu çalışan Mısırlılar yaptı.</p>
      <p>Kadınlar mülk sahibi olabiliyor, mahkemeye çıkabiliyor ve bazı rahiplik görevlerini üstlenebiliyordu; bu, aynı çağdaki pek çok toplumdan daha geniş haklar demekti.</p>` },
    { ad: 'Ekonomi ve ticaret', ikon: '🌾', html: `
      <p><b>Para yoktu.</b> Değer tahıl, bakır ağırlığı ya da keten bezi gibi ölçülerle hesaplanıyordu. Ücretler ekmek, bira, et ve kumaş olarak ödeniyordu.</p>
      <p>Ekonomi <b>Nil'in yıllık taşkınına</b> bağlıydı. Taşkın iyi gelirse bol hasat, kötü gelirse kıtlık olurdu. Su seviyeleri her yıl kaydediliyordu.</p>
      <p><b>Devlet ekonomisi:</b> Devlet hasattan pay alıyor, büyük ambarlarda saklıyor ve şantiyelere, tapınaklara, memurlara dağıtıyordu. Vergi ayrıca emekle de ödeniyordu: köylüler yılın bir kısmında devlet işlerinde çalışmak zorundaydı. İki yılda bir yapılan sığır sayımı, vergi için ülkenin zenginliğini ölçüyordu.</p>
      <p><b>Dış ticaret ve seferler:</b></p>
      <ul><li>Biblos (Lübnan): sedir ağacı, reçine</li><li>Sina: bakır ve turkuaz</li><li>Nubya: altın, fildişi, abanoz, sığır</li><li>Punt (Kızıldeniz'in güneyi): tütsü, mür, egzotik hayvanlar</li></ul>` },
    { ad: 'Gündelik hayat', ikon: '🏠', html: `
      <p><b>Evler</b> Nil çamurundan yapılmış kerpiçten, düz damlıydı. Sıcak yaz gecelerinde damda uyunurdu.</p>
      <p><b>Yemek:</b> ekmek ve bira temel besindi (bira koyu ve besleyiciydi). Soğan, sarımsak, mercimek, bakla, hurma, incir ve Nil balığı yaygındı. Et daha çok bayramlarda ve zenginlerin sofrasındaydı.</p>
      <p><b>Giyim:</b> keten. Erkekler kısa beyaz etek (şendit), kadınlar uzun düz elbise giyerdi. Sıcak yüzünden çocuklar çoğu zaman çıplak gezerdi; kafaları traşlı, yanda tek bir örgüyle ("gençlik buklesi").</p>
      <p><b>Takvim:</b> Yıl üç mevsimdi: <b>Ahet</b> (taşkın), <b>Peret</b> (ekim, suların çekilmesi), <b>Şemu</b> (hasat). Her mevsim dört ay, her ay 30 gündü; sonuna 5 gün eklenerek 365 gün tamamlanıyordu.</p>
      <p><b>Eğlence:</b> müzik, dans, güreş ve "senet" adlı bir masa oyunu. Mezar resimlerinde kuş avı ve balık tutma sahneleri çok sevilir.</p>
      <p><b>Ulaşım:</b> Nil ana yoldu. Bu çağda at, deve ve tekerlekli araba yoktu: yük eşekle, kızakla ve gemiyle taşınıyordu.</p>` },
    { ad: 'Yazı, bilim ve sanat', ikon: '📜', html: `
      <p><b>Hiyeroglif</b> anıtlarda kullanılan resimli yazıydı. Gündelik işler için daha hızlı bir el yazısı (hiyeratik) kullanılıyor, papirüse kamış kalemle yazılıyordu. Okuma-yazma bilenler nüfusun belki yüzde biri kadardı; <b>kâtip</b> olmak saygın ve ayrıcalıklı bir meslekti.</p>
      <p><b>Matematik ve mühendislik:</b> Arazi ölçümü (taşkından sonra tarla sınırlarını yeniden çizmek için), hacim ve eğim hesapları çok gelişmişti. Piramitlerin kenarları ana yönlere hayret verici bir hassasiyetle hizalandı; bunun için yıldızların izlendiği düşünülüyor.</p>
      <p><b>Tıp:</b> İmhotep gibi isimler sonradan tıbbın babası sayıldı. Kırık sarma, yara tedavisi ve bitkisel ilaçlar biliniyordu.</p>
      <p><b>Sanat:</b> Heykel ve kabartmalarda katı kurallar vardı: kişiler yandan, ama gözü ve omuzları önden gösterilirdi. Kefren ve Mikerinos heykelleri bu sanatın zirvesi sayılıyor.</p>` },
    { ad: 'Coğrafya ve Nil', ikon: '🌊', html: `
      <p>Herodot'un dediği gibi Mısır <b>"Nil'in armağanı"</b>. Nehir güneyden kuzeye, Akdeniz'e akar. Rüzgâr ise çoğunlukla kuzeyden eser. Bu sayede gemiler güneye yelkenle, kuzeye akıntıyla gidebilirdi; sahnede yelkenli gemiler bu yüzden sola (güneye), kürekliler sağa (kuzeye) gidiyor.</p>
      <p><b>Taşkın:</b> Her yaz Etiyopya yaylalarına yağan musonlar Nil'i kabartır, temmuzdan ekime kadar vadi suyla kaplanırdı. Sular çekilince geride bereketli kara çamur kalırdı.</p>
      <p><b>Doğal sınırlar:</b> batıda ve doğuda çöller, kuzeyde deniz, güneyde Asuan'daki Birinci Çağlayan (geçilmesi zor kayalık akıntılar). Bu sınırlar Mısır'ı uzun süre dış saldırılardan korudu.</p>
      <p><b>Neden batı yakası?</b> Güneş batıda batar; Mısırlılar için batı ölüler diyarıydı. Bu yüzden piramitler ve mezarlıklar Nil'in batı yakasındaki çöl platosunda.</p>` }
  ]
});
