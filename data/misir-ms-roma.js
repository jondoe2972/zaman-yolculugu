// Mısır: Roma ve Bizans dönemi (MÖ 30 – MS 641)
// Yıl sayıları: MÖ yıllar pozitif, MS yıllar negatif (MS 641 = -641). Bkz. js/yil.js
// Kaynaklar: Bagnall ve Rathbone, "Egypt from Alexander to the Copts" (2004); Bowman, "Egypt after the Pharaohs" (1986).
(() => {
  // önceki çağların yapılarını bu çağda da göstermek için kopyalar (eski: true)
  window.MISIR_ESKI = (ids, ek = {}) => {
    const out = [];
    for (const id of ids) {
      let m = null;
      for (const p of window.PLACES || []) { const f = (p.monuments || []).find(x => x.id === id && !x.eski); if (f) { m = f; break; } }
      if (!m) for (const p of window.PLACES || []) { const f = (p.monuments || []).find(x => x.id === id); if (f) { m = f; break; } }
      if (m) out.push({ ...m, eski: true, ...(ek[id] || {}) });
    }
    return out;
  };
  const ESKI = window.MISIR_ESKI;
  window.PLACES.push({
    id: 'misir-roma', sira: 6, modern: true, kisa: 'Roma ve Bizans Mısırı', aralikAd: 'MÖ 30 – MS 641',
    baslik: 'Roma eyaleti · Hristiyanlık · Bizans',
    ulkeAlt: 'Roma ve Bizans dönemi (MÖ 30 – MS 641)',
    from: 30, to: -641, start: -130,
    not: 'Tarihler MS 1. yüzyıldan itibaren genellikle kesindir. Nüfus tahminleri yaklaşıktır.',
    baskent: 'İskenderiye (Roma valisinin merkezi)',
    sahne: { deve: true, saduf: true, kizak: false, katipYok: -300, giyim: [[30, 'antik'], [-300, 'cubbe']] },
    dynasties: [
      { from: 30, to: -395, ad: 'Roma İmparatorluğu', renk: '#9a3a3a' },
      { from: -395, to: -619, ad: 'Doğu Roma (Bizans)', renk: '#6a3a8a' },
      { from: -619, to: -629, ad: 'Sasani', renk: '#5a7a3a' },
      { from: -629, to: -641, ad: 'Bizans', renk: '#6a3a8a' }
    ],
    rulers: [
      { from: 30, to: -14, ad: 'Augustus', kisa: 'Augustus', kim: `İlk Roma imparatoru. Mısır'ı kendi özel eyaleti yaptı; senatörlerin izinsiz Mısır'a girmesini bile yasakladı.` },
      { from: -14, to: -68, ad: 'Julius-Claudius hanedanı (Tiberius, Caligula, Claudius, Neron)', kisa: 'Julius-Claudius', kim: `Mısır bir vali (praefectus) eliyle yönetiliyor; tahıl gemileri her yıl Roma'ya gidiyor.` },
      { from: -68, to: -117, ad: 'Flavius hanedanı ve Traianus', kisa: 'Flavius · Traianus', kim: `Vespasianus imparatorluğa İskenderiye'de ilan edildi. Traianus, Babilon kalesini ve Nil-Kızıldeniz kanalını yeniletti.` },
      { from: -117, to: -138, ad: 'Hadrianus', kisa: 'Hadrianus', kim: `Mısır'ı gezen gezgin imparator (MS 130). Nil'de boğulan sevgilisi Antinous için Antinoopolis şehrini kurdu.` },
      { from: -138, to: -193, ad: 'Antoninuslar (Antoninus Pius, Marcus Aurelius, Commodus)', kisa: 'Antoninuslar', kim: `Uzun bir barış dönemi; sonunda veba (MS 165-180) Mısır'ı da vurdu.` },
      { from: -193, to: -235, ad: 'Severuslar (Septimius Severus, Caracalla)', kisa: 'Severuslar', kim: `Caracalla MS 212'de imparatorluktaki tüm özgür insanlara Roma vatandaşlığı verdi; MS 215'te İskenderiye'de katliam yaptırdı.` },
      { from: -235, to: -284, ad: '3. yüzyıl bunalımı', kisa: 'Bunalım', kim: `Sık sık değişen imparatorlar; Palmira kraliçesi Zenobia Mısır'ı kısa bir süre ele geçirdi (MS 270-272).` },
      { from: -284, to: -305, ad: 'Diocletianus', kisa: 'Diocletianus', kim: `İmparatorluğu yeniden düzenledi, İskenderiye isyanını kuşatmayla bastırdı (MS 298) ve Hristiyanlara karşı "Büyük Zulüm"ü başlattı.` },
      { from: -305, to: -337, ad: 'I. Konstantin', kisa: 'Konstantin', kim: `Hristiyanlığı serbest bırakan ve kendisi de Hristiyan olan imparator; Konstantinopolis'i kurdu.` },
      { from: -337, to: -395, ad: 'Konstantin\'in ardılları ve I. Theodosius', kisa: 'Theodosius', kim: `Theodosius Hristiyanlığı devlet dini yaptı ve eski tapınakları kapattırdı (MS 391).` },
      { from: -395, to: -527, ad: 'Erken Bizans imparatorları', kisa: 'Bizans', kim: `Roma ikiye ayrıldı; Mısır Doğu Roma'nın (Bizans) en zengin eyaleti.` },
      { from: -527, to: -565, ad: 'I. Justinianus', kisa: 'Justinianus', kim: `Büyük Bizans imparatoru; Ayasofya'yı yaptırdı, File'deki son İsis tapınağını kapattırdı.` },
      { from: -565, to: -610, ad: 'Geç Bizans imparatorları', kisa: 'Geç Bizans', kim: `İmparatorluk Perslerle ve Avarlarla uğraşıyor; Mısır'da dinî ayrılık derinleşiyor.` },
      { from: -610, to: -641, ad: 'Herakleios', kisa: 'Herakleios', kim: `Sasani işgalinden sonra Mısır'ı geri aldı; ama birkaç yıl sonra Arap ordularına kaybetti.` }
    ],
    eras: [
      { from: 30, to: -14, puan: { eko: 4, ordu: 2, istikrar: 4 }, baskent: 'İskenderiye',
        gundem: `Kleopatra öldü; Mısır artık Roma'nın bir eyaleti. Augustus Mısır'ı imparatorun kişisel malı gibi yönetiyor: başında bir Romalı vali (praefectus Aegypti) var. Ordunun kazdırdığı sulama kanalları temizleniyor ve Mısır tahılı her yıl dev gemilerle Roma'ya taşınıyor.`,
        savas: `Güneyde Meroe Krallığı (Kuş) ile sınır savaşları (MÖ 25-22); Romalılar Napata'ya kadar ilerledi. Mısır'da üç Roma lejyonu konuşlu.`,
        ekonomi: `Mısır "Roma'nın ekmek sepeti": Roma şehrinin yıllık tahılının yaklaşık üçte biri Mısır'dan geliyor. Vergiler ağır; toprak kayıtları papirüslere titizlikle yazılıyor.`,
        din: `Eski Mısır tanrıları yaşıyor; Augustus tapınak duvarlarında firavun gibi tasvir ediliyor. Dendera tapınağı bu yıllarda tamamlanıyor.`,
        yasam: `Yunanca konuşan kentliler, Mısırca konuşan köylüler ve büyük bir Yahudi topluluğu yan yana yaşıyor.`,
        bilgi: `Augustus, Kleopatra'nın ve Antonius'un mezarını ziyaret ettiği gibi İskender'in mumyasını da gördü; rivayete göre dokunurken onun burnunu kırdı.` },
      { from: -14, to: -117, puan: { eko: 4, ordu: 2, istikrar: 3 }, baskent: 'İskenderiye',
        gundem: `İskenderiye, Roma'dan sonra imparatorluğun ikinci büyük şehri. Geleneğe göre Aziz Markos burada ilk Hristiyan topluluğunu kurdu (MS ~42-60). Şehirde Yunanlar ile Yahudiler arasında gerilimler sert çatışmalara dönüşüyor (MS 38, 66). MS 115-117'deki büyük Yahudi isyanı İskenderiye'nin bir kısmını yıktı.`,
        savas: `MS 69'da Vespasianus İskenderiye'de imparator ilan edildi; Mısır'ın tahılını kontrol eden Roma'yı kontrol ediyordu.`,
        ekonomi: `Kızıldeniz limanlarından (Berenike, Myos Hormos) Hindistan'a her yıl 100'den fazla gemi gidiyor; biber ve baharat İskenderiye üzerinden Roma'ya akıyor.`,
        din: `Hristiyanlık İskenderiye'nin Yahudi ve Yunan mahallelerinde yavaş yavaş yayılıyor.`,
        yasam: `İskenderiyeli mucit Heron, buharla dönen bir küre (aeolipil) ve kendiliğinden açılan tapınak kapıları tasarladı.`,
        bilgi: `Heron'un buhar küresi, bilinen ilk buhar makinesi sayılır; ama yaklaşık 1.700 yıl boyunca bir oyuncak olarak kaldı.` },
      { from: -117, to: -235, puan: { eko: 4, ordu: 2, istikrar: 3 }, baskent: 'İskenderiye',
        gundem: `İmparator Hadrianus MS 130'da Mısır'ı gezdi; Memnon heykellerinin şafakta "şarkı söylemesini" dinledi. Sevgilisi Antinous Nil'de boğulunca onun adına Antinoopolis şehrini kurdurdu. Astronom Batlamyus (Ptolemaios) İskenderiye'de Almagest'i yazıyor (MS ~150).`,
        savas: `MS 172'de deltada "Bukoloi" denen çobanların büyük isyanı. MS 165-180 arası "Antoninus vebası" nüfusu azalttı.`,
        ekonomi: `Fayum vahası verimli ve kalabalık; köylerden binlerce papirüs (vergi listeleri, mektuplar, alışveriş kayıtları) bugüne ulaştı.`,
        din: `Ölüleri mumyalayıp yüzlerine gerçekçi portreler koyma geleneği: "Fayum portreleri", sanat tarihinin en canlı yüzleri.`,
        yasam: `MS 212'de Caracalla, imparatorluktaki bütün özgür erkeklere Roma vatandaşlığı verdi; Mısırlılar da artık Romalı.`,
        bilgi: `Memnon heykelleri MS 27'deki bir depremden sonra her sabah ıslık benzeri bir ses çıkarmaya başladı; turistler onu dinlemeye gelir, bacaklarına şiir kazırdı. Severus onları onarınca ses kesildi.` },
      { from: -235, to: -313, puan: { eko: 2, ordu: 2, istikrar: 1 }, baskent: 'İskenderiye',
        gundem: `İmparatorluk bunalımda: imparatorlar birbirini deviriyor, para değer kaybediyor. Palmira kraliçesi Zenobia Mısır'ı ele geçirdi (MS 270); Aurelianus geri aldı. Diocletianus İskenderiye'deki isyanı sekiz ay süren bir kuşatmayla bastırdı (MS 298) ve Hristiyanlara karşı en sert zulmü başlattı (MS 303).`,
        savas: `İskenderiye kuşatması (MS 297-298). Şehrin bir kısmı, Ptolemaios saray mahallesi Brukheion ile birlikte yıkıldı.`,
        ekonomi: `Enflasyon çok yüksek; Diocletianus fiyatlara tavan koyan bir ferman çıkardı (MS 301), ama işe yaramadı.`,
        din: `Kıpti kilisesi takvimini Diocletianus'un tahta çıktığı yıldan (MS 284) başlatır: "Şehitler Çağı". Aziz Antonius çöle çekilerek Hristiyan keşişliğini başlattı.`,
        yasam: `Hristiyan keşişler (münzeviler) Mısır çöllerinde mağaralarda yaşamaya başladı; manastır geleneği dünyaya buradan yayıldı.`,
        bilgi: `İskenderiye'deki dev "Pompeius Sütunu" aslında Pompeius ile ilgili değil: Diocletianus için MS ~298'de dikildi. 27 m yüksekliğinde, tek parça granitten.` },
      { from: -313, to: -451, puan: { eko: 3, ordu: 2, istikrar: 2 }, baskent: 'İskenderiye',
        gundem: `Hristiyanlık önce serbest (MS 313), sonra devlet dini (MS 380) oldu. İskenderiye piskoposları imparatorluğun en güçlü din adamları arasında. MS 391'de Serapis tapınağı (Serapeum) yıkıldı. MS 415'te kadın matematikçi ve filozof Hypatia bir kalabalık tarafından öldürüldü.`,
        savas: `Büyük dış savaş yok; şehirlerde din kavgaları zaman zaman sokak çatışmalarına dönüşüyor.`,
        ekonomi: `Tahıl artık Roma'ya değil, yeni başkent Konstantinopolis'e gidiyor.`,
        din: `Pakhomios ilk ortak manastırları kurdu; Beyaz Manastır'da (Sohag) Şenute binlerce keşişi yönetiyor. Bilinen son hiyeroglif yazıt MS 394'te File'de kazındı.`,
        yasam: `Kıpti dili (Yunan harfleriyle yazılan son aşama Mısırca) gelişiyor; İncil ve dua kitapları Kıpticeye çevriliyor.`,
        bilgi: `Hiyeroglifleri okuyabilen son insanlar bu dönemde yaşadı; sonraki 1.400 yıl boyunca kimse onları okuyamadı.` },
      { from: -451, to: -619, puan: { eko: 3, ordu: 2, istikrar: 2 }, baskent: 'İskenderiye',
        gundem: `MS 451 Kadıköy (Kalkedon) Konsili'nde Mısır kilisesi, Hz. İsa'nın doğası konusunda Bizans'tan ayrıldı: bugünkü Kıpti Ortodoks Kilisesi doğdu. Bizans'ın atadığı piskoposlarla halkın piskoposları arasında yüzyıllarca süren bir çekişme başladı. Justinianus File'deki son İsis tapınağını kapattırdı (MS ~537).`,
        savas: `Güneyde Blemmyeler ve Nobatlar'ın akınları; Nubya krallıkları Hristiyanlığı kabul ediyor.`,
        ekonomi: `MS 541'de "Justinianus vebası" Mısır'ın Pelusium limanında başladı ve bütün Akdeniz'e yayıldı; nüfus büyük ölçüde azaldı.`,
        din: `Kıpti Hristiyanlığı halkın dini; Yunanca konuşan Bizans memurlarıyla Kıptice konuşan halk arasında derin bir ayrılık var.`,
        yasam: `Büyük toprak sahipleri (Apion ailesi gibi) köylerin neredeyse sahibi; köylüler toprağa bağlı yaşıyor.`,
        bilgi: `Justinianus vebası, Kara Ölüm'e (1347) benzer şekilde vebanın (Yersinia pestis) neden olduğu bilinen ilk büyük salgın.` },
      { from: -619, to: -641, puan: { eko: 2, ordu: 1, istikrar: 1 }, baskent: 'İskenderiye',
        gundem: `Sasani Persleri Mısır'ı işgal etti (MS 619-629); Herakleios geri aldı. Ama MS 639'da Amr ibn el-As komutasındaki küçük bir Arap ordusu Sina'dan girdi; Babilon kalesi MS 641'de düştü ve İskenderiye antlaşmayla teslim edildi.`,
        savas: `Ayn Şems (Heliopolis) Savaşı (MS 640) ve Babilon kalesi kuşatması (MS 640-641).`,
        ekonomi: `Savaşlar ve vergiler ülkeyi yordu; birçok Kıpti, Bizans'ın baskısından kurtulmak için yeni gelenlere karşı direnmedi.`,
        din: `Kıpti patriği Benyamin, Bizans'tan kaçıp çölde saklanıyor; Arap fethinden sonra geri döndü.`,
        yasam: `Arap ordusu, Babilon kalesinin yanında çadırlarla bir ordugâh kurdu: burası birkaç yıl içinde Fustat şehrine dönüşecekti.`,
        bilgi: `Rivayete göre Amr'ın çadırına bir güvercin yuva yapmıştı; Amr çadırı söktürmedi ve şehir oraya kuruldu. "Fustat" adı "çadır" anlamına gelen bir kelimeden gelir.` }
    ],
    nufus: [[30, 5.5], [-150, 6.5], [-300, 5], [-540, 4.5], [-641, 3.5]],
    nufusNot: 'Roma dönemi için 4-8 milyon arası tahminler var; salgınlar nüfusu birkaç kez azalttı.',
    events: [
      { y: 30, t: 'Mısır Roma eyaleti oldu', k: 'm' },
      { y: 25, t: 'Roma ordusu Meroe\'ye (Kuş) karşı sefer yaptı', k: 'm' },
      { y: -50, t: 'Geleneğe göre Aziz Markos İskenderiye kilisesini kurdu (yaklaşık)', k: 'm' },
      { y: -69, t: 'Vespasianus İskenderiye\'de imparator ilan edildi', k: 'm' },
      { y: -116, t: 'Büyük Yahudi isyanı İskenderiye\'yi harap etti', k: 'm' },
      { y: -130, t: 'Hadrianus Mısır\'ı gezdi; Antinoopolis kuruldu', k: 'm' },
      { y: -150, t: 'Batlamyus Almagest\'i yazdı (yaklaşık)', k: 'm' },
      { y: -212, t: 'Caracalla fermanı: herkes Roma vatandaşı', k: 'm' },
      { y: -270, t: 'Zenobia Mısır\'ı ele geçirdi', k: 'm' },
      { y: -284, t: 'Kıpti "Şehitler Takvimi"nin başlangıcı', k: 'm' },
      { y: -298, t: 'Diocletianus İskenderiye\'yi kuşattı', k: 'm' },
      { y: -303, t: 'Hristiyanlara karşı Büyük Zulüm', k: 'm' },
      { y: -313, t: 'Milano Fermanı: Hristiyanlık serbest', k: 'm' },
      { y: -391, t: 'Serapeum yıkıldı; tapınaklar kapatıldı', k: 'm' },
      { y: -394, t: 'Bilinen son hiyeroglif yazıt (File)', k: 'm' },
      { y: -415, t: 'Hypatia öldürüldü', k: 'm' },
      { y: -451, t: 'Kadıköy Konsili: Kıpti kilisesi ayrıldı', k: 'm' },
      { y: -537, t: 'File\'deki İsis tapınağı kapatıldı', k: 'm' },
      { y: -541, t: 'Justinianus vebası Pelusium\'da başladı', k: 'm' },
      { y: -619, t: 'Sasani Persleri Mısır\'ı işgal etti', k: 'm' },
      { y: -629, t: 'Herakleios Mısır\'ı geri aldı', k: 'm' },
      { y: -639, t: 'Amr ibn el-As komutasında Arap ordusu Mısır\'a girdi', k: 'm' },
      { y: -641, t: 'Babilon kalesi düştü; İskenderiye teslim oldu', k: 'm' },
      { y: -1, t: 'Dünya: Geleneksel olarak Hz. İsa\'nın doğumu (yaklaşık)', k: 'w' },
      { y: -79, t: 'Dünya: Vezüv patladı, Pompeii gömüldü', k: 'w' },
      { y: -105, t: 'Dünya: Çin\'de kâğıt geliştirildi (Cai Lun)', k: 'w' },
      { y: -330, t: 'Dünya: Konstantinopolis başkent oldu', k: 'w' },
      { y: -395, t: 'Dünya: Roma İmparatorluğu ikiye bölündü', k: 'w' },
      { y: -476, t: 'Dünya: Batı Roma İmparatorluğu yıkıldı', k: 'w' },
      { y: -537, t: 'Dünya: Ayasofya tamamlandı', k: 'w' },
      { y: -552, t: 'Dünya: Göktürk Kağanlığı kuruldu', k: 'w' },
      { y: -622, t: 'Dünya: Hicret; İslam takviminin başlangıcı', k: 'w' }
    ],
    world: [
      { from: 30, to: -180, yer: 'Roma İmparatorluğu', t: 'Pax Romana: Britanya\'dan Mezopotamya\'ya uzanan 200 yıllık göreli barış.' },
      { from: 30, to: -220, yer: 'Çin', t: 'Han Hanedanı: İpek Yolu, kâğıt, Konfüçyüsçü devlet memurluğu.' },
      { from: 30, to: -224, yer: 'İran', t: 'Partlar: Roma\'nın doğudaki büyük rakibi.' },
      { from: -224, to: -641, yer: 'İran', t: 'Sasani İmparatorluğu: Roma ve Bizans ile yüzyıllarca savaştı.' },
      { from: -30, to: -375, yer: 'Hindistan ve Orta Asya', t: 'Kuşan İmparatorluğu; ardından Gupta altın çağı (sıfır kavramı, satranç).' },
      { from: -100, to: -641, yer: 'Etiyopya', t: 'Aksum Krallığı: Kızıldeniz ticareti, dev dikili taşlar, MS 4. yüzyılda Hristiyanlık.' },
      { from: -375, to: -470, yer: 'Avrupa', t: 'Kavimler Göçü: Hunlar, Gotlar, Vandallar; Attila (ö. 453).' },
      { from: -395, to: -641, yer: 'Bizans', t: 'Konstantinopolis merkezli Doğu Roma; Justinianus\'un hukuk kitabı ve Ayasofya.' },
      { from: -552, to: -641, yer: 'Orta Asya', t: 'Göktürk Kağanlığı: "Türk" adını taşıyan ilk büyük devlet.' },
      { from: -610, to: -641, yer: 'Arabistan', t: 'İslam\'ın doğuşu; Hz. Muhammed\'in ölümünden (632) sonra Arap orduları Suriye, Irak ve Mısır\'a ilerliyor.' }
    ],
    dunyaOzet: {
      eko: 'Akdeniz tek bir pazar: Roma parası her yerde geçiyor. İpek Yolu ve Hint Okyanusu ticareti Roma\'yı Çin ve Hindistan\'a bağlıyor. Dünya nüfusu yaklaşık 200-250 milyon.',
      askeri: 'Roma (sonra Bizans) ile İran (Part, sonra Sasani) dünyanın iki büyük gücü. 7. yüzyılda ikisi de birbirini yıpratmışken Arap orduları ortaya çıkıyor.'
    },
    sites: [
      { ad: 'FİLE', wx: 1500 }, { ad: 'KOM OMBO', wx: 2200 }, { ad: 'EDFU', wx: 2800 }, { ad: 'TEB', wx: 3800 },
      { ad: 'BEYAZ MANASTIR', wx: 4600 }, { ad: 'DENDERA', wx: 4900 }, { ad: 'ANTİNOOPOLİS', wx: 5300 },
      { ad: 'GİZE', wx: 6300 }, { ad: 'BABİLON', wx: 6480 }, { ad: 'İSKENDERİYE', wx: 8700 }
    ],
    cliffs: [{ wx: 3900, w: 1100, h: 95, peak: 0.6 }],
    monuments: [
      { id: 'babilon', ad: 'Babilon Kalesi', yer: 'Eski Kahire', wx: 6470, bank: 'near', type: 'citadel', b: 110, h: 22, start: -98, end: -110, vol: 8e4 },
      { id: 'antinoopolis', ad: 'Antinoopolis', yer: 'Orta Mısır', wx: 5300, bank: 'near', type: 'city', b: 220, n: 18, hk: 0.3, start: -130, end: -140, vol: 6e4, ruin: -1000 },
      { id: 'pompeius', ad: 'Pompeius Sütunu', yer: 'İskenderiye', wx: 8780, bank: 'near', type: 'obelisk', b: 6, h: 27, start: -297, end: -302, vol: 3e4 },
      { id: 'beyazmanastir', ad: 'Beyaz Manastır (Deyr el-Abyad)', yer: 'Sohag', wx: 4600, type: 'church', b: 75, h: 22, kule: true, start: -440, end: -455, vol: 7e4 },
      ...ESKI(['menkaure', 'khafre', 'khufu', 'sphinx', 'karnak', 'luksor', 'hatsepsut', 'memnon', 'ramesseum', 'medinethabu', 'phile', 'edfu', 'komombo', 'dendera', 'iskenderiye', 'pharos', 'kutuphane'],
        { kutuphane: { ruin: -272 }, phile: { ruin: -537 }, ramesseum: { ruin: -100 } })
    ],
    hizli: [
      { ad: 'Augustus', y: 25 }, { ad: 'Hadrianus', y: -130 }, { ad: 'Caracalla', y: -212 }, { ad: 'Diocletianus', y: -298 },
      { ad: 'Serapeum', y: -391 }, { ad: 'Kalkedon', y: -451 }, { ad: 'Veba', y: -541 }, { ad: 'Arap ordusu', y: -640 }
    ],
    bilgi: {
      babilon: { ikon: '🏰', yaptiran: 'Traianus (yeniden yapan: Diocletianus)', donem: 'MS ~98-117, MS ~300', mimar: 'Roma ordu mühendisleri', sure: 'Birkaç yıl',
        neden: `Nil'in en dar geçidini, Memfis ile delta arasındaki yolu ve Kızıldeniz'e giden kanalın ağzını korumak.`,
        onem: `Arap fethi sırasında Bizans'ın Mısır'daki son büyük kalesiydi; düşmesiyle Mısır el değiştirdi. Bugünkü Kahire'nin çekirdeği bu kalenin çevresinde büyüdü.`,
        teknik: [['Duvarlar', 'Tuğla ve taş sıraları, yuvarlak kuleler'], ['Yer', 'Bugünkü "Kıpti Kahire" mahallesi']],
        nasil: `Roma tarzı kalın duvarlar; kanal suyunun girebildiği su kapıları vardı.`,
        bugun: `Kuleleri ve duvarlarının bir kısmı Kıpti Müzesi'nin yanında ayakta; Asma Kilise kalenin güney kapısının üstüne yapılmıştır.`,
        ilginc: `Adının Mezopotamya'daki Babil'le bir ilgisi olabilir: antik yazarlar burada Babilli esirlerin yerleştirildiğini anlatır.` },
      antinoopolis: { ikon: '🏛️', yaptiran: 'İmparator Hadrianus', donem: 'MS 130', mimar: '-', sure: '-',
        neden: `Hadrianus'un sevgilisi Antinous Nil'de boğulunca, onun anısına ve tanrılaştırılmasına adanmış yeni bir Yunan şehri.`,
        onem: `Roma döneminde Orta Mısır'ın en önemli şehirlerinden; Kızıldeniz'e giden "Via Hadriana" yolunun başlangıcı.`,
        teknik: [['Plan', 'Izgara sokaklar, sütunlu caddeler, tiyatro, hipodrom'], ['Bugün', 'Şeyh İbade köyü yakınında']],
        nasil: `Yunan şehir planıyla, Hadrianus'un özel ayrıcalıklarıyla kuruldu.`,
        bugun: `Çok az kalıntı kaldı; 19. yüzyılda taşları şeker fabrikalarında kullanıldı.`,
        ilginc: `Antinous, ölümünden sonra bütün imparatorlukta tanrı gibi tapınılan bir gence dönüştü; yüzlerce heykeli bulundu.` },
      pompeius: { ikon: '🗿', yaptiran: 'Diocletianus için (Vali Postumus)', donem: 'MS ~298-302', mimar: 'Bilinmiyor', sure: '-',
        neden: `Diocletianus'un İskenderiye'yi kuşatıp aldıktan sonra şehre tahıl yardımı yapmasının anısına.`,
        onem: `Roma döneminden kalan, tek parça taştan yapılmış en büyük sütunlardan biri.`,
        teknik: [['Yükseklik', '~27 m (kaidesiyle)'], ['Malzeme', 'Asuan pembe graniti, tek parça gövde'], ['Ağırlık', '~285 ton']],
        nasil: `Asuan'dan Nil'le İskenderiye'ye taşındı ve eski Serapeum tapınağının alanına dikildi.`,
        bugun: `Ayakta; İskenderiye'nin en ünlü antik anıtı.`,
        ilginc: `Orta Çağ'da Haçlılar ve gezginler yanlışlıkla onu Pompeius'un mezarı sandı; adı oradan kaldı.` },
      beyazmanastir: { ikon: '⛪', yaptiran: 'Başrahip Şenute', donem: 'MS ~440-455', mimar: 'Bilinmiyor', sure: '-',
        neden: `Binlerce keşiş ve rahibenin yaşadığı büyük bir manastır topluluğunun kilisesi.`,
        onem: `Kıpti Hristiyanlığının en önemli merkezlerinden; Şenute'nin Kıptice yazıları Kıpti edebiyatının temeli sayılır.`,
        teknik: [['Boyut', '~75 × 37 m'], ['Malzeme', 'Beyaz kireçtaşı; taşların bir kısmı eski Mısır tapınaklarından'], ['Plan', 'Bazilika; üç yarım kubbeli apsis']],
        nasil: `Dışı bir firavun tapınağı gibi eğimli kalın duvarlarla, içi bir Roma bazilikası gibi yapıldı.`,
        bugun: `Hâlâ kullanılan bir kilise; kubbeli apsislerindeki duvar resimleri 2000'lerde restore edildi.`,
        ilginc: `Manastırın kütüphanesi binlerce Kıptice el yazmasıyla doluydu; bugün sayfaları dünyadaki 20'den fazla müzeye dağılmış durumda.` }
    },
    ulke: [
      { ad: 'Genel bakış', ikon: '🧭', html: `
        <p>Kleopatra'nın ölümüyle (MÖ 30) Mısır, <b>Roma İmparatorluğu'nun en zengin eyaleti</b> oldu. Augustus onu kendi kişisel malı gibi bir vali eliyle yönetti; Mısır'ın tahılı Roma şehrini besliyordu.</p>
        <p>Sonraki 670 yılda Mısır'da iki büyük değişim yaşandı: halk <b>Hristiyanlığı</b> kabul etti ve eski Mısır dini, tapınaklarıyla ve hiyeroglif yazısıyla birlikte sona erdi.</p>
        <p>MS 395'te Roma ikiye bölününce Mısır <b>Doğu Roma'nın (Bizans)</b> parçası oldu. Dönem, MS 639-641'de Arap ordularının ülkeyi fethetmesiyle bitti.</p>` },
      { ad: 'Din: Hristiyanlık ve Kıptiler', ikon: '✝️', html: `
        <p>Geleneğe göre Hristiyanlığı İskenderiye'ye <b>Aziz Markos</b> getirdi. İskenderiye kilisesi, Roma ve Antakya ile birlikte Hristiyan dünyasının en önemli üç merkezinden biriydi.</p>
        <p><b>Manastırcılık Mısır'da doğdu:</b> Aziz Antonius çöle çekilen ilk keşişlerden; Pakhomios ilk ortak manastırları kurdu. Bu gelenek Avrupa'ya buradan yayıldı.</p>
        <p>MS 451'den sonra Mısır kilisesi Bizans kilisesinden ayrıldı; bugünkü <b>Kıpti Ortodoks Kilisesi</b> bu ayrılıktan doğdu. "Kıpti" kelimesi, Yunanca "Aigyptos" (Mısırlı) kelimesinden gelir.</p>` },
      { ad: 'Ekonomi ve yönetim', ikon: '🌾', html: `
        <p>Mısır'dan her yıl Roma'ya (sonra Konstantinopolis'e) giden tahıla <b>annona</b> denirdi. Dev tahıl gemileri İskenderiye'den kalkar, şehri beslerdi.</p>
        <p>Kızıldeniz limanlarından <b>Hindistan'a</b> giden gemiler biber, baharat, inci ve ipek getirirdi.</p>
        <p>Mısır'ın kuru toprağı on binlerce <b>papirüs</b> belgeyi korudu: vergi listeleri, mektuplar, okul ödevleri, hatta bir çocuğun babasına yazdığı "beni de İskenderiye'ye götür" mektubu.</p>` },
      { ad: 'Bilim ve kültür', ikon: '📐', html: `
        <ul><li><b>Batlamyus (Ptolemaios):</b> Almagest ve Coğrafya; 1.400 yıl kullanılan Dünya merkezli evren modeli.</li>
        <li><b>Heron:</b> buhar küresi, otomatik kapılar, para ile çalışan ilk otomat.</li>
        <li><b>Hypatia:</b> matematikçi ve filozof; MS 415'te öldürüldü.</li>
        <li><b>Fayum portreleri:</b> mumyaların üstüne konulan gerçekçi yüz resimleri.</li></ul>` }
    ]
  });
})();
