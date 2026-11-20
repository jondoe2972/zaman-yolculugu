// Antik Mısır, Eski Krallık: Büyük Piramit'ten 100 yıl önce ve 100 yıl sonra (MÖ 2660 - 2460)
// Yıllar "MÖ" olarak pozitif sayı: büyük sayı = daha eski.
// Tarihler yaklaşık: Shaw (ed.), The Oxford History of Ancient Egypt (2000) kronolojisi. Kaynaklar: KAYNAKLAR.md
(window.PLACES = window.PLACES || []).push({
  id: 'misir-eski-krallik', sira: 2, kisa: 'Eski Krallık', aralikAd: 'MÖ 2660-2460', sahne: {},
  ulke: 'Antik Mısır',
  baslik: 'Eski Krallık · Piramitler Çağı',
  from: 2660, to: 2460, start: 2577,
  not: 'Tarihler yaklaşıktır (Oxford kronolojisi, Shaw 2000). Eski Krallık tarihlerinde ±50 yıl sapma olabilir.',
  baskent: 'Memfis (Men-nefer, "Beyaz Duvarlar")',
  bakis: 'Nil\'in doğu kıyısından batıya bakış: solda güney, sağda kuzey. Nil sağa, kuzeye doğru akar.',

  dynasties: [
    { from: 2686, to: 2613, ad: '3. Hanedan', renk: '#8a6fb3' },
    { from: 2613, to: 2494, ad: '4. Hanedan', renk: '#d08a2e' },
    { from: 2494, to: 2345, ad: '5. Hanedan', renk: '#3f8fb0' }
  ],

  rulers: [
    { from: 2667, to: 2648, ad: 'Djoser (Zoser)', kisa: 'Djoser', kim: 'Taht adı Netjerihet. Basamaklı Piramit\'i yaptıran firavun.' },
    { from: 2648, to: 2640, ad: 'Sekhemkhet', kisa: 'Sekh.', kim: 'Djoser\'in ardılı; piramidi yarım kaldı.' },
    { from: 2640, to: 2637, ad: 'Khaba', kisa: 'Kh.', kim: 'Kısa süre hüküm sürdü; hakkında çok az şey biliniyor.' },
    { from: 2637, to: 2613, ad: 'Huni', kisa: 'Huni', kim: '3. Hanedan\'ın son firavunu.' },
    { from: 2613, to: 2589, ad: 'Snefru', kisa: 'Snefru', kim: '4. Hanedan\'ın kurucusu. Üç büyük piramit yaptırdı.' },
    { from: 2589, to: 2566, ad: 'Keops (Hufu)', kisa: 'Keops', kim: 'Snefru\'nun oğlu. Gize\'deki Büyük Piramit onun mezarı.' },
    { from: 2566, to: 2558, ad: 'Cedefre (Radjedef)', kisa: 'Cedefre', kim: 'Keops\'un oğlu. "Ra\'nın oğlu" unvanını kullanan ilk firavun.' },
    { from: 2558, to: 2532, ad: 'Kefren (Hafre)', kisa: 'Kefren', kim: 'Keops\'un oğlu. Gize\'nin ikinci piramidi ve büyük olasılıkla Sfenks.' },
    { from: 2532, to: 2503, ad: 'Mikerinos (Menkaure)', kisa: 'Mikerinos', kim: 'Kefren\'in oğlu. Gize\'nin üçüncü piramidi.' },
    { from: 2503, to: 2498, ad: 'Şepseskaf', kisa: 'Şeps.', kim: '4. Hanedan\'ın son büyük firavunu; piramit yerine mastaba yaptırdı.' },
    { from: 2498, to: 2494, ad: 'Belirsiz dönem', kisa: '?', kim: 'Kaynaklar burada belirsiz; Manethon bir "Tamftis" adı veriyor.' },
    { from: 2494, to: 2487, ad: 'Userkaf', kisa: 'Userkaf', kim: '5. Hanedan\'ın kurucusu. İlk güneş tapınağını yaptırdı.' },
    { from: 2487, to: 2475, ad: 'Sahure', kisa: 'Sahure', kim: 'Denizci firavun: Punt\'a ve Lübnan\'a gemi seferleri.' },
    { from: 2475, to: 2455, ad: 'Neferirkare Kakai', kisa: 'Neferirkare', kim: 'Abusir\'in en büyük piramidine başladı.' }
  ],

  // Gündem ve durum: firavun dönemlerine, bazen daha ince parçalara göre
  // puan: eko(nomi) / ordu / istikrar, 1-5 arası kabaca bir değerlendirme (yorum)
  eras: [
    {
      from: 2667, to: 2648, puan: { eko: 3, ordu: 2, istikrar: 4 },
      gundem: 'Basamaklı Piramit yükseliyor. Mimar ve vezir İmhotep, kerpiç yerine ilk kez tamamen taştan anıtsal bir yapı kuruyor. Mezar önce düz bir mastabaydı; üst üste eklenen katlarla 6 basamaklı, 62 m\'lik bir piramide dönüştü.',
      savas: 'Kayda geçmiş büyük bir savaş yok. Sina\'daki turkuaz ve bakır madenlerine (Vadi Mağara) korumalı seferler gidiyor. Güney sınırı Asuan\'daki Birinci Çağlayan.',
      ekonomi: 'Para yok. Ekonomi devletin topladığı ve dağıttığı tahıla dayanıyor. Vergi tahıl, hayvan ve emekle ödeniyor. Her iki yılda bir yapılan "sığır sayımı" hem vergi hem takvim işi görüyor.',
      din: 'Firavun yeryüzündeki tanrı Horus sayılıyor. Öldükten sonra yıldızlara yükseleceğine inanılıyor; piramit bu yolculuğun merdiveni.',
      yasam: 'Halkın çoğu Nil kıyısında çiftçi. Arpa ve buğday ekiliyor; ekmek ve bira temel besin. Evler kerpiçten ve düz damlı.',
      bilgi: 'İmhotep o kadar ünlendi ki 2.000 yıl sonra Mısırlılar ona tıp ve bilgelik tanrısı olarak tapmaya başladı.'
    },
    {
      from: 2648, to: 2637, puan: { eko: 3, ordu: 2, istikrar: 3 },
      gundem: 'Kısa saltanatlar. Sekhemkhet, Djoser\'inkinden de büyük bir basamaklı piramide başladı ama yapı ancak birkaç metre yükselebildi. Ardılı Khaba\'nın Zaviyet el-Aryan\'daki "katmanlı piramidi" de yarım kaldı.',
      savas: 'Kayda geçmiş büyük bir savaş yok. Sina\'da Sekhemkhet\'in kaya kabartması var: madenlere seferler sürüyor.',
      ekonomi: 'Djoser\'den kalan devlet düzeni sürüyor. Büyük şantiyeler yarım kalınca işçiler tarlalarına dönüyor.',
      din: 'Firavun Horus\'un yeryüzündeki temsilcisi. Krallar ölümden sonraki hayat için büyük mezarlara yatırım yapıyor.',
      yasam: 'Nil\'in yıllık taşkını tarımın kalbi: su çekilince tarlalara bereketli kara çamur kalıyor.',
      bilgi: 'Sekhemkhet\'in piramidi ancak 1951\'de bulundu. İçindeki mühürlü kaymaktaşı lahit açıldığında boş çıktı.'
    },
    {
      from: 2637, to: 2613, puan: { eko: 3, ordu: 2, istikrar: 4 },
      gundem: '3. Hanedan\'ın son firavunu Huni, ülkenin dört bir yanına (Elephantine\'den Seyla\'ya) küçük basamaklı piramitler diktiriyor. Bunlar mezar değil; kraliyet gücünün ve vergi toplamanın taşradaki simgeleri sayılıyor. Meydum\'daki büyük basamaklı piramide onun döneminde başlandığı düşünülüyor (tartışmalı).',
      savas: 'Güney sınırında, Elephantine adasında bir kale var. Büyük bir savaş kaydı yok.',
      ekonomi: 'Taşra yönetimi (nomoslar) düzenleniyor; tahıl ambarları devletin elinde.',
      din: 'Güneş tanrısı Ra\'nın önemi yavaş yavaş artıyor.',
      yasam: 'Köylerde kerpiç evler, kubbeli tahıl ambarları ve sığır ağılları var. Eşek en önemli yük hayvanı.',
      bilgi: 'Bu çağda Mısır\'da at, deve ve tekerlekli araba yok. Yükler eşekle, kızakla ve Nil\'de gemiyle taşınıyor.'
    },
    {
      from: 2613, to: 2600, puan: { eko: 4, ordu: 4, istikrar: 5 },
      gundem: 'Yeni hanedan, yeni hırs. 4. Hanedan\'ı kuran Snefru, Meydum\'daki basamaklı piramidi büyütüyor ve Dahşur\'da ilk düz yüzlü "gerçek" piramide başlıyor.',
      savas: 'Palermo Taşı\'na göre Nubya\'ya büyük bir sefer yapıldı: 7.000 esir ve 200.000 baş sığır getirildi. Libya\'ya da bir sefer düzenlendi. Sina madenleri güvence altında.',
      ekonomi: 'Lübnan\'dan (Biblos) 40 gemi dolusu sedir ağacı geldi; büyük gemiler ve saray kapıları bu keresteden yapılıyor. Nubya\'dan gelen hayvanlar ve insan gücü devlet çiftliklerine dağıtılıyor.',
      din: 'Ra (güneş) inancı güçleniyor. Düz yüzlü piramit, bulutların arasından yere inen güneş ışınlarını andırıyor.',
      yasam: 'Devlet çiftlikleri ve yeni köyler kuruluyor; şantiyeler için ülke çapında tahıl ve emek toplanıyor.',
      bilgi: 'Snefru tarihte en çok taş taşıtan firavun: üç büyük piramidi toplamda Büyük Piramit\'ten daha fazla taş içeriyor.'
    },
    {
      from: 2600, to: 2589, puan: { eko: 5, ordu: 4, istikrar: 5 },
      gundem: 'Eğik Piramit\'te sorun çıktı: zemin oturdu, duvarlarda çatlaklar belirdi ve yapının eğimi yarı yolda 54°\'den 43°\'ye düşürüldü. Snefru vazgeçmedi; kuzeyde 43°\'lik Kızıl Piramit\'i yaptırdı. Bu, tamamlanan ilk gerçek piramit.',
      savas: 'Ülke güvende; seferler Nubya, Libya ve Sina\'ya kaynak getirmek için. Ayrı, sürekli bir ordu yok: gerektiğinde köylerden adam toplanıyor.',
      ekonomi: 'Arka arkaya üç dev şantiye: devlet bütün ülkenin emeğini ve tahılını organize edebiliyor. Kalıcı taş ocakları, tersaneler ve işçi köyleri kuruluyor.',
      din: 'Piramit, ölen kralın göğe yükselip güneşle birleşmesini sağlayan kutsal bir yapı.',
      yasam: 'Nil taşınca tarlalar suyla kaplanıyor; çiftçilerin bir kısmı bu aylarda şantiyelerde çalışıyor.',
      bilgi: 'Kızıl Piramit adını iç taşlarının kızılımsı renginden alıyor. Bu renk, beyaz dış kaplama sonradan sökülünce ortaya çıktı.'
    },
    {
      from: 2589, to: 2570, puan: { eko: 5, ordu: 3, istikrar: 5 },
      gundem: 'Gize\'de Büyük Piramit yükseliyor. Hedef 146 m yükseklik ve yaklaşık 2,3 milyon taş blok. Devletin bütün gücü bu tek şantiyede: taş ocakları, Nil\'de taş taşıyan gemiler, ekmek fırınları ve binlerce işçi. Mimarın, Keops\'un yeğeni ve veziri Hemiunu olduğu düşünülüyor.',
      savas: 'Büyük bir savaş kaydı yok. Ordu daha çok sefer ve şantiye için toplanan işçi-asker ekiplerinden oluşuyor. Kızıldeniz kıyısındaki Vadi el-Cerf limanından Sina madenlerine gemiler gidiyor.',
      ekonomi: 'İşçilere ekmek, bira, et ve keten ile ödeme yapılıyor. Kaplama için Tura\'dan beyaz kireçtaşı, iç odalar için Asuan\'dan granit, aletler için Sina\'dan bakır geliyor. Bütün ekonomi şantiyeye çalışıyor.',
      din: 'Firavun Horus\'un ve Ra\'nın temsilcisi. Piramit, ölen kralın güneşle birlikte göğe yükselmesini sağlayan bir "diriliş makinesi" sayılıyor.',
      yasam: 'İşçiler köle değil. Gize\'de fırınları, bira atölyeleri, balık ve et depoları ve kendi mezarlığı olan bir işçi kasabası var. Ekipler dönüşümlü çalışıyor.',
      bilgi: 'Büyük Piramit, MS 1311\'de İngiltere\'deki Lincoln Katedrali bitene kadar yaklaşık 3.800 yıl dünyanın en yüksek insan yapımı yapısı olarak kaldı.'
    },
    {
      from: 2570, to: 2566, puan: { eko: 5, ordu: 3, istikrar: 5 },
      gundem: 'Büyük Piramit tamamlanıyor. Dış yüzeyi parlak beyaz Tura kireçtaşıyla kaplanıp yukarıdan aşağı düzeltiliyor. Yanına kraliçeler için üç küçük piramit, doğusuna soyluların mastaba mezarları yapılıyor.',
      savas: 'Büyük bir savaş kaydı yok. Doğu Çölü ve Sina\'ya maden seferleri sürüyor.',
      ekonomi: 'Merer\'in Günlüğü (bilinen en eski yazılı papirüsler): Merer adlı bir müfettiş, ekibiyle Tura\'dan Gize\'ye teknelerle kireçtaşı taşıdığını yazıyor. Liman müdürü Keops\'un üvey kardeşi Ankhhaf. (Günlüğün tarihi Keops\'un 27. yılı civarı; bizim kronolojide saltanatın sonuna denk geliyor.)',
      din: 'Piramidin çevresinde firavunun kültü için tapınaklar ve rahip örgütü kuruluyor.',
      yasam: 'Büyük şantiye bitince işçilerin bir kısmı köylerine, bir kısmı yeni projelere dağılıyor.',
      bilgi: 'Keops\'un 43 m\'lik sedir ağacından "güneş gemisi" sökülerek piramidin dibindeki bir çukura gömüldü. 1954\'te bulundu.'
    },
    {
      from: 2566, to: 2558, puan: { eko: 4, ordu: 3, istikrar: 4 },
      gundem: 'Keops\'un oğlu Cedefre, Gize yerine kuzeydeki Ebu Ruvaş\'ta piramit yaptırıyor. "Ra\'nın oğlu" unvanını kullanan ilk firavun: güneş tanrısı Ra\'nın önemi artıyor. Babasının güneş gemisini gömdüren de o.',
      savas: 'Büyük bir savaş kaydı yok.',
      ekonomi: 'Şantiye küçülüyor; Gize\'deki iş gücünün bir kısmı serbest kalıyor.',
      din: 'Firavun artık hem Horus hem de "Ra\'nın oğlu".',
      yasam: 'Gize\'de soyluların mastaba mezarları çoğalıyor; mezar duvarlarında gündelik hayat sahneleri resmediliyor.',
      bilgi: 'Ebu Ruvaş piramidinin tamamlanıp tamamlanmadığı tartışmalı. Roma çağından beri taş ocağı gibi kullanıldı ve bugün yalnızca birkaç sıra taşı kaldı.'
    },
    {
      from: 2558, to: 2532, puan: { eko: 5, ordu: 3, istikrar: 4 },
      gundem: 'Kefren, babası Keops\'un yanına neredeyse aynı büyüklükte (143,5 m) bir piramit yaptırıyor. Daha yüksek bir kaya zemine oturduğu için uzaktan daha uzun görünüyor. Büyük Sfenks de büyük olasılıkla bu dönemde, piramide giden yolun yanındaki kaya kütlesinden oyuldu.',
      savas: 'Büyük bir savaş kaydı yok. Nubya çölündeki Gebel el-Asr taş ocaklarına seferler gidiyor; Kefren\'in ünlü oturan heykelinin taşı oradan.',
      ekonomi: 'Devlet hâlâ çok güçlü. Ama bir görüşe göre her şeyi tek bir dev şantiyeye yatırmak giderek zorlaşıyor.',
      din: 'Sfenks, aslan gövdesi ve kral başıyla firavunun gücünü ve güneşle bağını simgeliyor.',
      yasam: 'Gize bir "ölüler şehri" ama aynı zamanda rahiplerin, zanaatkârların ve işçilerin yaşadığı canlı bir bölge.',
      bilgi: 'Kefren piramidinin tepesinde orijinal beyaz kaplamanın bir parçası bugün hâlâ duruyor.'
    },
    {
      from: 2532, to: 2503, puan: { eko: 4, ordu: 3, istikrar: 4 },
      gundem: 'Gize\'nin üçüncü piramidi: Mikerinos\'unki çok daha küçük (65 m), ama alt sıraları pahalı kırmızı Asuan granitiyle kaplandı. Firavun öldüğünde granit kaplamanın düzeltilmesi ve tapınaklar bitmemişti.',
      savas: 'Büyük bir savaş kaydı yok.',
      ekonomi: 'Piramitlerin küçülmesi, kaynakların tapınaklara, soyluların mezarlarına ve taşraya dağılmaya başladığını gösteriyor (bir yorum).',
      din: 'Tanrıça Hathor ve taşra tanrılarıyla kralı birlikte gösteren heykeller yapılıyor.',
      yasam: 'Heykelcilik zirvede: kral ve kraliçe heykelleri çok ince işçilikle yapılıyor.',
      bilgi: 'Herodot\'a göre Mikerinos adil ve dindar bir kraldı. Ünlü "Mikerinos ve kraliçesi" heykeli bugün Boston\'da.'
    },
    {
      from: 2503, to: 2494, puan: { eko: 3, ordu: 3, istikrar: 2 },
      gundem: '4. Hanedan\'ın sonu. Şepseskaf, Mikerinos\'un yarım kalan tapınağını kerpiçle bitiriyor ve kendisi için piramit değil, dev bir sanduka biçiminde mastaba yaptırıyor (Mastabat el-Firavun). Ardından yaklaşık dört yıllık belirsiz bir dönem geliyor.',
      savas: 'Büyük bir savaş kaydı yok.',
      ekonomi: 'Dev piramitler çağı kapanıyor.',
      din: 'Bazı araştırmacılara göre piramitten vazgeçmek güçlenen Ra rahiplerinden uzaklaşma anlamına geliyor; kesin değil.',
      yasam: 'Gündelik hayat büyük ölçüde aynı; değişen saraydaki güç dengeleri.',
      bilgi: 'Mastabat el-Firavun 100 m uzunluğunda, 18 m yüksekliğinde dev bir taş sandukaya benziyor.'
    },
    {
      from: 2494, to: 2487, puan: { eko: 4, ordu: 3, istikrar: 4 },
      gundem: '5. Hanedan başlıyor. Userkaf Sakkara\'da, Djoser\'in piramidinin yanında küçük bir piramit; Abusir\'de ise ilk güneş tapınağını yaptırıyor. Güneş tanrısı Ra devletin en önemli tanrısı oluyor.',
      savas: 'Büyük bir savaş kaydı yok. Ege ile ilişki var: Userkaf adını taşıyan bir taş kap Yunanistan\'daki Kythera adasında bulundu.',
      ekonomi: 'Tapınaklara toprak ve gelir bağışlanıyor; rahipler ve memurlar zenginleşiyor.',
      din: 'Güneş tapınaklarının ortasında, ucu güneşi yakalayan iri ve basık bir dikilitaş yükseliyor.',
      yasam: 'Memurların sayısı artıyor; yazıcılık (katiplik) en saygın mesleklerden biri.',
      bilgi: 'Piramitler küçüldü ama tapınak duvarlarındaki kabartmalar zenginleşti: avcılık, balıkçılık, pazar ve gemi sahneleri.'
    },
    {
      from: 2487, to: 2475, puan: { eko: 5, ordu: 4, istikrar: 5 },
      gundem: 'Denizlere açılma. Sahure, Punt\'a (bugünkü Eritre ve Somali kıyıları) bilinen ilk deniz seferini gönderiyor; dönüşte mür, tütsü ve elektrum getiriliyor. Lübnan kıyılarına da gemiler gidiyor. Abusir\'de piramidini yaptırıyor.',
      savas: 'Tapınak kabartmalarında Libyalılara karşı bir zafer ve Asya\'ya bir sefer anlatılıyor. Mısır gemilerinin en eski ayrıntılı tasvirlerinden bazıları bu kabartmalarda.',
      ekonomi: 'Dış ticaret canlanıyor: Punt\'tan tütsü ve mür, Biblos\'tan sedir, Sina\'dan bakır ve turkuaz.',
      din: 'Güneş tapınakları devlet dininin merkezinde.',
      yasam: 'Gemicilik ve dış seferler yeni meslekler ve zenginlik getiriyor.',
      bilgi: 'Sahure\'nin tapınağında yaklaşık 380 m uzunluğunda bakır borulardan bir drenaj sistemi vardı.'
    },
    {
      from: 2475, to: 2455, puan: { eko: 4, ordu: 3, istikrar: 4 },
      gundem: 'Neferirkare Kakai, Abusir\'de bölgenin en büyük piramidine başlıyor (planlanan yükseklik ~72 m). Yapı önce basamaklı tasarlandı; sonra düz yüzlü piramide çevrilmesi planlandı ama kaplaması hiç bitmedi.',
      savas: 'Büyük bir savaş kaydı yok.',
      ekonomi: 'Yönetim büyüyor: unvanlar, memurlar ve tapınak kayıtları çoğalıyor. Daha sonra yazılan Abusir papirüsleri, tapınağının nöbet çizelgelerini ve erzak hesaplarını gösteriyor.',
      din: 'Güneş tapınakları yapılmaya devam ediyor.',
      yasam: 'Taşra valileri ve soylu aileler giderek güçleniyor.',
      bilgi: 'Palermo Taşı (Mısır\'ın en eski yıllık kayıtları) bilinen hâliyle Neferirkare dönemine kadar geliyor.'
    }
  ],

  // Tahmini nüfus (milyon); ara yıllar doğrusal tahmin
  nufus: [[2700, 1.1], [2600, 1.35], [2500, 1.55], [2400, 1.6]],
  nufusNot: 'Tahmin aralığı 1-1,6 milyon (Butzer 1976 ve sonrası). Kesin sayım yok.',

  events: [
    { y: 2667, t: 'Djoser tahta çıktı; Basamaklı Piramit başladı', k: 'm' },
    { y: 2650, t: 'Basamaklı Piramit tamamlandı (yaklaşık)', k: 'm' },
    { y: 2648, t: 'Sekhemkhet\'in piramidi başladı; yarım kalacak', k: 'm' },
    { y: 2637, t: 'Huni tahta çıktı', k: 'm' },
    { y: 2613, t: '4. Hanedan: Snefru tahta çıktı', k: 'm' },
    { y: 2606, t: 'Nubya seferi: 7.000 esir, 200.000 sığır (Palermo Taşı)', k: 'm' },
    { y: 2604, t: 'Biblos\'tan 40 gemi dolusu sedir geldi', k: 'm' },
    { y: 2608, t: 'Dahşur\'da Eğik Piramit başladı', k: 'm' },
    { y: 2597, t: 'Kızıl Piramit başladı: ilk gerçek piramit', k: 'm' },
    { y: 2589, t: 'Keops tahta çıktı', k: 'm' },
    { y: 2587, t: 'Büyük Piramit\'in inşaatı başladı', k: 'm' },
    { y: 2567, t: 'Büyük Piramit tamamlandı (yaklaşık 20 yılda)', k: 'm' },
    { y: 2568, t: 'Merer\'in Günlüğü yazıldı (tarih yaklaşık)', k: 'm' },
    { y: 2566, t: 'Cedefre: ilk "Ra\'nın oğlu" unvanı', k: 'm' },
    { y: 2558, t: 'Kefren tahta çıktı', k: 'm' },
    { y: 2550, t: 'Büyük Sfenks oyuluyor (yaklaşık)', k: 'm' },
    { y: 2532, t: 'Mikerinos tahta çıktı', k: 'm' },
    { y: 2503, t: 'Şepseskaf: piramit yerine mastaba', k: 'm' },
    { y: 2494, t: '5. Hanedan: Userkaf tahta çıktı', k: 'm' },
    { y: 2490, t: 'İlk güneş tapınağı (Abusir)', k: 'm' },
    { y: 2487, t: 'Sahure tahta çıktı', k: 'm' },
    { y: 2480, t: 'Punt\'a bilinen ilk deniz seferi (yaklaşık)', k: 'm' },
    { y: 2475, t: 'Neferirkare tahta çıktı', k: 'm' },
    { y: 2650, t: 'Dünya: Sümer\'de Gılgamış\'ın Uruk\'u (yarı efsanevi)', k: 'w' },
    { y: 2600, t: 'Dünya: İndus Vadisi\'nde Harappa şehirleri yükseliyor', k: 'w' },
    { y: 2595, t: 'Dünya: Kiş kralı Mesilim Sümer\'de hakem', k: 'w' },
    { y: 2575, t: 'Dünya: Peru\'da Caral\'ın piramit-platformları', k: 'w' },
    { y: 2550, t: 'Dünya: Ur Kraliyet Mezarlığı; Anadolu\'da Troya II', k: 'w' },
    { y: 2500, t: 'Dünya: Stonehenge\'in dev sarsen taşları dikiliyor', k: 'w' },
    { y: 2470, t: 'Dünya: Lagaş ile Umma arasında sınır savaşı', k: 'w' }
  ],

  // Dünyada aynı dönemde: [from, to] aralığında görünür
  world: [
    { from: 2900, to: 2350, yer: 'Sümer (Irak)', t: 'Uruk, Ur, Kiş, Lagaş ve Umma gibi şehir devletleri su ve toprak için birbirleriyle savaşıyor. Tek bir krallık yok.' },
    { from: 2700, to: 2580, yer: 'Kiş (Sümer)', t: 'Kiş en güçlü şehir. "Kiş kralı" unvanı bütün Sümer\'de üstünlük anlamına geliyor; Kral Mesilim, Lagaş ile Umma arasında sınır hakemliği yapıyor.' },
    { from: 2600, to: 2450, yer: 'Ur (Sümer)', t: 'Ur Kraliyet Mezarlığı: altın başlıklar, lirler ve savaş arabalarını gösteren "Ur Sancağı" bu döneme ait.' },
    { from: 2500, to: 2350, yer: 'Lagaş (Sümer)', t: 'Ur-Nanşe hanedanı kuruluyor; Lagaş ile Umma arasındaki sınır savaşı alevleniyor.' },
    { from: 2700, to: 2600, yer: 'İndus Vadisi', t: 'Erken Harappa: köyler kasabalara dönüşüyor.' },
    { from: 2600, to: 1900, yer: 'İndus Vadisi', t: 'Harappa ve Mohenjo-daro gibi planlı, kanalizasyonlu büyük şehirler yükseliyor.' },
    { from: 2920, to: 2550, yer: 'Anadolu', t: 'Troya I: Çanakkale kıyısında surlu küçük bir kale-kasaba. Tunç Çağı ticareti başlıyor.' },
    { from: 2550, to: 2250, yer: 'Anadolu', t: 'Troya II: daha büyük surlar ve saray yapıları; Ege ile Anadolu arasında zengin bir ticaret merkezi.' },
    { from: 2700, to: 2400, yer: 'Biblos (Lübnan)', t: 'Mısır\'ın en önemli ticaret ortağı: sedir ağacı ve reçine buradan geliyor.' },
    { from: 2600, to: 1800, yer: 'Peru', t: 'Caral (Norte Chico): Amerika kıtasının ilk şehirleri ve basamaklı platform-piramitleri, Mısır piramitleriyle aynı çağda.' },
    { from: 2560, to: 2400, yer: 'Britanya', t: 'Stonehenge\'in dev sarsen taşları dikiliyor (yaklaşık MÖ 2500).' },
    { from: 3000, to: 1900, yer: 'Çin', t: 'Longşan kültürü: surlu köyler, incecik siyah çömlekler. Henüz bir devlet yok.' },
    { from: 2700, to: 2400, yer: 'Elam (İran)', t: 'Sümer\'in doğu komşusu; Sümer şehirleriyle sık sık savaşıyor.' },
    { from: 3000, to: 2000, yer: 'Girit', t: 'Erken Minos dönemi: saraylar henüz yok, deniz ticareti gelişiyor.' }
  ],
  dunyaOzet: {
    eko: 'Dünya nüfusu yaklaşık 15-25 milyon. Para yok; ticaret takasla ve ağırlık ölçüleriyle (gümüş, tahıl) yapılıyor. Bakır ve tunç en değerli teknoloji.',
    askeri: 'Dünyanın en büyük ve en birleşik devleti Mısır. Mezopotamya şehir devletlerine bölünmüş. Ordular yaya askerlerden oluşuyor; atlı savaş arabası henüz yok (Sümer\'de eşek çekişli ağır arabalar var).'
  },

  // Haritada yerler (wx: güneyden kuzeye metre, sanatsal olarak sıkıştırılmış)
  sites: [
    { ad: 'MEYDUM', wx: 0 },
    { ad: 'DAHŞUR', wx: 1950 },
    { ad: 'GÜNEY SAKKARA', wx: 2950 },
    { ad: 'SAKKARA', wx: 3800 },
    { ad: 'ABUSİR', wx: 5100 },
    { ad: 'ZAVİYET EL-ARYAN', wx: 5900 },
    { ad: 'GİZE', wx: 6850 },
    { ad: 'EBU RUVAŞ', wx: 8700 }
  ],
  memfis: { wx: 3650, ad: 'MEMFİS (başkent)' },
  tura: { wx: 6150, ad: 'TURA TAŞ OCAĞI (beyaz kireçtaşı)' },
  liman: { wx: 7050, from: 2592, to: 2555, ad: 'GİZE LİMANI' },

  // Anıtlar. type: step | true | bent | mastaba | sphinx | suntemple
  // start/end: inşaat başı/sonu (MÖ). stop + maxP: yarım kalan yapılar
  monuments: [
    { id: 'djoser', ad: 'Basamaklı Piramit (Djoser)', yer: 'Sakkara', wx: 3800, dz: 0, type: 'step', steps: 6, b: 121, h: 62.5, start: 2667, end: 2648 },
    { id: 'sekhemkhet', ad: 'Sekhemkhet Piramidi', yer: 'Sakkara', wx: 3600, dz: 0.35, type: 'step', steps: 7, b: 120, h: 70, start: 2648, stop: 2640, maxP: 0.1 },
    { id: 'khaba', ad: 'Katmanlı Piramit (Khaba)', yer: 'Zaviyet el-Aryan', wx: 5900, dz: 0.1, type: 'step', steps: 5, b: 84, h: 42, start: 2640, stop: 2637, maxP: 0.45 },
    { id: 'meidum1', ad: 'Meydum Piramidi (basamaklı)', yer: 'Meydum', wx: 0, dz: 0, type: 'step', steps: 7, b: 120, h: 85, start: 2625, end: 2606 },
    { id: 'meidum2', ad: 'Meydum Piramidi (düz yüzlü kaplama)', yer: 'Meydum', wx: 0, dz: -0.02, type: 'true', mantle: true, b: 144, h: 92, start: 2600, end: 2590 },
    { id: 'bent', ad: 'Eğik Piramit (Snefru)', yer: 'Dahşur', wx: 1650, dz: 0, type: 'bent', b: 188.6, h: 101, bz: 47, bhw: 60, start: 2608, end: 2598 },
    { id: 'red', ad: 'Kızıl Piramit (Snefru)', yer: 'Dahşur', wx: 2250, dz: 0.2, type: 'true', b: 220, h: 105, start: 2597, end: 2589 },
    { id: 'khufu', ad: 'Büyük Piramit (Keops)', yer: 'Gize', wx: 7150, dz: 0, type: 'true', b: 230.3, h: 146.6, start: 2587, end: 2567, blocks: 2300000, isci: 'Tahminen 20.000-25.000 işçi, dönüşümlü ekipler hâlinde' },
    { id: 'kralice1', ad: 'Kraliçe piramidi (Keops)', yer: 'Gize', wx: 7330, dz: -0.25, type: 'true', b: 46, h: 30, start: 2578, end: 2571, minor: true },
    { id: 'kralice2', ad: 'Kraliçe piramidi (Keops)', yer: 'Gize', wx: 7390, dz: -0.27, type: 'true', b: 46, h: 30, start: 2576, end: 2569, minor: true },
    { id: 'kralice3', ad: 'Kraliçe piramidi (Keops)', yer: 'Gize', wx: 7450, dz: -0.29, type: 'true', b: 46, h: 30, start: 2574, end: 2567, minor: true },
    { id: 'djedefre', ad: 'Cedefre Piramidi', yer: 'Ebu Ruvaş', wx: 8700, dz: 0, type: 'true', b: 106, h: 67, start: 2566, stop: 2558, maxP: 0.85 },
    { id: 'khafre', ad: 'Kefren Piramidi', yer: 'Gize', wx: 6820, dz: 0.45, lift: 10, type: 'true', b: 215.3, h: 143.5, start: 2558, end: 2536 },
    { id: 'sphinx', ad: 'Büyük Sfenks', yer: 'Gize', wx: 6980, dz: -0.5, type: 'sphinx', start: 2556, end: 2540 },
    { id: 'menkaure', ad: 'Mikerinos Piramidi', yer: 'Gize', wx: 6520, dz: 0.75, type: 'true', b: 102.2, h: 65, granite: 0.25, start: 2530, end: 2505 },
    { id: 'shepseskaf', ad: 'Mastabat el-Firavun (Şepseskaf)', yer: 'Güney Sakkara', wx: 2950, dz: 0, type: 'mastaba', b: 100, h: 18, start: 2502, end: 2496 },
    { id: 'userkaf', ad: 'Userkaf Piramidi', yer: 'Sakkara', wx: 3990, dz: -0.15, type: 'true', b: 73.3, h: 49, start: 2493, end: 2487 },
    { id: 'gunes', ad: 'Userkaf Güneş Tapınağı', yer: 'Abusir', wx: 5330, dz: 0.15, type: 'suntemple', start: 2492, end: 2484 },
    { id: 'sahure', ad: 'Sahure Piramidi', yer: 'Abusir', wx: 4950, dz: 0, type: 'true', b: 78.75, h: 47, start: 2486, end: 2476 },
    { id: 'neferirkare', ad: 'Neferirkare Piramidi', yer: 'Abusir', wx: 5120, dz: 0.2, type: 'step', steps: 6, b: 105, h: 72, start: 2474, end: 2450 },
    { id: 'unas', ad: 'Unas Piramidi', yer: 'Sakkara', wx: 3890, dz: 0.15, type: 'true', b: 57.75, h: 43, start: 2365, end: 2350 },
    { id: 'pepi2', ad: 'II. Pepi Piramidi', yer: 'Güney Sakkara', wx: 3030, dz: 0.1, type: 'true', b: 78.75, h: 52.5, start: 2275, end: 2250 }
  ],
  // Gize'de soyluların mastaba mezarları (yıllar içinde çoğalıyor)
  mastabaField: { wx0: 7260, wx1: 7640, n: 16, from: 2582, to: 2470 },

  hizli: [
    { ad: 'Basamaklı Piramit', y: 2655 },
    { ad: 'Eğik Piramit', y: 2601 },
    { ad: 'Büyük Piramit başlıyor', y: 2585 },
    { ad: 'Büyük Piramit yarıda', y: 2577 },
    { ad: 'Büyük Piramit bitti', y: 2560 },
    { ad: 'Sfenks', y: 2545 },
    { ad: 'Punt seferi', y: 2480 }
  ]
});
