// Avrupa: Tarih öncesi ve Antik Yunan (MÖ 3000 – 146) ve Roma (MÖ 146 – MS 476)
// Yıl: MÖ pozitif, MS negatif. Sahne (wx): batıdan doğuya bir Avrupa yolculuğu
//   Lizbon 1000 · Madrid 1600 · Stonehenge/Londra 2200 · Paris 2900 · Amsterdam 3300 · Berlin 3800
//   Floransa 4400 · Roma 4800 · Viyana 5300 · Atina 6300 · Knossos 6700 · Moskova 7600
// Kaynaklar: Cunliffe, "Europe Between the Oceans" (2008); Pomeroy vd., "Ancient Greece" (2012); Beard, "SPQR" (2015).
(() => {
  window.PLACES = window.PLACES || [];
  window.AVRUPA_ESKI = (ids, ek = {}) => {
    const out = [];
    for (const id of ids) { let m = null; for (const p of window.PLACES) { const f = (p.monuments || []).find(x => x.id === id && !x.eski); if (f) { m = f; break; } } if (m) out.push({ ...m, eski: true, ...(ek[id] || {}) }); }
    return out;
  };
  const ESKI = window.AVRUPA_ESKI;

  // ================= 1. TARİH ÖNCESİ VE ANTİK YUNAN =================
  window.PLACES.push({
    id: 'avrupa-yunan', sira: 1, kisa: 'Megalitler ve Antik Yunan', aralikAd: 'MÖ 3000 – 146',
    baslik: 'Stonehenge · Knossos · Atina demokrasisi · İskender',
    ulkeAlt: 'Tarih öncesi Avrupa, Minos, Miken ve Klasik Yunan (MÖ 3000 – 146)',
    from: 3000, to: 146, start: 440,
    not: 'MÖ 800 öncesi tarihler arkeolojik tahminlerdir.', baskent: 'Tek başkent yok: Knossos, Miken, Atina, Sparta, Makedonya',
    sahne: { kizak: true, araba: [1600, 300], katipYok: true, giyim: 'antik' },
    dynasties: [
      { from: 3000, to: 2000, ad: 'Megalit kurucuları ve ilk çiftçiler', renk: '#6a7a5a' },
      { from: 2000, to: 1450, ad: 'Minos uygarlığı (Girit)', renk: '#2a7a9a' },
      { from: 1450, to: 1100, ad: 'Miken krallıkları', renk: '#9a6a2a' },
      { from: 1100, to: 800, ad: 'Yunan Karanlık Çağı', renk: '#5a5a5a' },
      { from: 800, to: 480, ad: 'Arkaik Yunanistan', renk: '#3a6aaa' },
      { from: 480, to: 323, ad: 'Klasik Yunanistan', renk: '#2a5ab0' },
      { from: 323, to: 146, ad: 'Helenistik krallıklar', renk: '#6a3aa0' }
    ],
    rulers: [
      { from: 3000, to: 2000, ad: 'Kabile şefleri ve rahipler', kisa: '?', kim: 'Britanya\'dan Malta\'ya dev taş (megalit) anıtlar dikiliyor. Krallık yok; topluluklar güneşin ve ayın döngülerine göre törenler yapıyor.' },
      { from: 2000, to: 1450, ad: 'Knossos\'un "Minos" kralları', kisa: 'Minos', kim: 'Girit\'teki saray şehirlerinin yöneticileri. Söylencedeki Kral Minos ve labirentteki Minotor bu saraylardan esinlenir.' },
      { from: 1450, to: 1100, ad: 'Miken kralları (wanax)', kisa: 'Agamemnon', kim: 'Miken, Pylos ve Tiryns saraylarının kralları. Homeros\'un Agamemnon\'u bu dünyanın kralıdır; Hitit belgelerinde "Ahhiyava".' },
      { from: 1100, to: 800, ad: 'Köy beyleri (basileus)', kisa: '?', kim: 'Saraylar yıkıldı, yazı unutuldu. Küçük topluluklar beyler tarafından yönetiliyor.' },
      { from: 800, to: 594, ad: 'Aristokratlar ve tiranlar', kisa: 'Aristokratlar', kim: 'Şehir devletleri (polis) doğuyor. MÖ 776\'da ilk Olimpiyat Oyunları. Akdeniz ve Karadeniz kıyılarına koloniler.' },
      { from: 594, to: 490, ad: 'Solon ve Kleisthenes (Atina)', kisa: 'Kleisthenes', kim: 'Solon borç köleliğini kaldırdı (MÖ 594). Kleisthenes MÖ 508\'de Atina demokrasisini kurdu.' },
      { from: 490, to: 461, ad: 'Pers Savaşları dönemi (Miltiades, Themistokles, Leonidas)', kisa: 'Themistokles', kim: 'Marathon (490), Thermopylai ve Salamis (480): Yunan şehirleri Pers ordusunu durdurdu.' },
      { from: 461, to: 429, ad: 'Perikles (Atina)', kisa: 'Perikles', kim: 'Atina\'nın altın çağı: Parthenon, tiyatro, felsefe. Peloponez Savaşı başladı ve Perikles vebadan öldü.' },
      { from: 429, to: 359, ad: 'Peloponez Savaşı ve Sparta-Teb üstünlüğü', kisa: 'Sparta', kim: 'Atina Sparta\'ya yenildi (MÖ 404). Sokrates MÖ 399\'da idam edildi.' },
      { from: 359, to: 336, ad: 'II. Filip (Makedonya)', kisa: 'II. Filip', kim: 'Makedonya\'yı güçlü bir krallık yaptı ve Yunan şehirlerini yendi (Khaironeia, MÖ 338).' },
      { from: 336, to: 323, ad: 'Büyük İskender', kisa: 'İskender', kim: 'Pers İmparatorluğu\'nu yıktı; Mısır\'dan Hindistan\'a uzanan bir imparatorluk kurdu. 32 yaşında Babil\'de öldü.' },
      { from: 323, to: 146, ad: 'Antigonos hanedanı (Makedonya) ve Yunan birlikleri', kisa: 'Antigonoslar', kim: 'İskender\'in komutanlarının krallıkları. Roma MÖ 168\'de Makedonya\'yı, MÖ 146\'da Korint\'i yıkıp Yunanistan\'ı aldı.' }
    ],
    eras: [
      { from: 3000, to: 2000, puan: { eko: 2, ordu: 1, istikrar: 3 }, baskent: 'Yok',
        gundem: 'Neolitik çiftçiler Avrupa\'nın her yerinde. Britanya\'da Stonehenge dikiliyor (MÖ ~3000-2000): dev taşlar yaz gündönümünde güneşin doğduğu yöne hizalı. Bretanya\'da Carnac\'ın 3.000 dikili taşı, Malta\'da tapınaklar.',
        savas: 'Örgütlü ordular yok; ama bakır balta ve oklarla çatışmalar var. MÖ ~3300\'de Alpler\'de ölen "Buz Adam Ötzi"nin sırtında bir ok ucu bulundu.',
        ekonomi: 'Tarım, hayvancılık; çakmaktaşı ve bakır ticareti. MÖ ~2500\'den sonra tunç ve "Çan Biçimli Kap" kültürü.',
        din: 'Güneş ve ölüler için törenler; büyük toplu mezarlar (dolmenler).',
        yasam: 'Ahşap uzun evler, ilk tekerlekli arabalar (MÖ ~3500).',
        bilgi: 'Stonehenge\'in 3-4 tonluk "mavi taşları" Galler\'deki Preseli tepelerinden ~250 km uzaktan getirildi; Altar Stone ise İskoçya\'dan, 700 km öteden.' },
      { from: 2000, to: 1100, puan: { eko: 4, ordu: 3, istikrar: 3 }, baskent: 'Knossos, sonra Miken',
        gundem: 'Girit\'te Minos uygarlığı: Knossos sarayı, boğa atlama oyunları, renkli freskler, ilk Avrupa yazısı (Lineer A). MÖ ~1450\'den sonra anakaradaki Mikenliler Girit\'i aldı. MÖ ~1200\'de Tunç Çağı çöküşüyle saraylar yandı.',
        savas: 'Miken savaşçıları tunç zırhlar ve savaş arabaları kullanıyor. Truva Savaşı (söylence, MÖ ~1180).',
        ekonomi: 'Deniz ticareti: Mısır, Kıbrıs, Anadolu ile; zeytinyağı, şarap, bakır külçeleri.',
        din: 'Minos\'ta tanrıça ve boğa kültü; Mikenlerde Zeus, Poseidon, Hera gibi sonraki Yunan tanrılarının adları ilk kez yazıldı (Lineer B).',
        yasam: 'Knossos\'ta akan sulu tuvaletler ve kanalizasyon vardı.',
        bilgi: 'Santorini (Thera) yanardağı MÖ ~1600\'de patladı; bazı araştırmacılar Atlantis efsanesinin buradan çıktığını düşünüyor.' },
      { from: 1100, to: 480, puan: { eko: 3, ordu: 3, istikrar: 3 }, baskent: 'Atina, Sparta, Korint…',
        gundem: 'Karanlık Çağ\'dan sonra Yunanlar Fenike alfabesinden kendi alfabelerini yaptı (MÖ ~800). Homeros\'un destanları, Olimpiyatlar (MÖ 776), polis (şehir devleti) ve koloniler doğdu. Atina\'da MÖ 508\'de demokrasi kuruldu. Roma MÖ 753\'te kuruldu (söylence).',
        savas: 'Hoplit falanksı: kalkanlı ağır piyadeler. MÖ 490\'da Marathon\'da Atinalılar Persleri yendi.',
        ekonomi: 'Koloniler: Marsilya, Napoli, Siraküza; sikke kullanımı Lidya\'dan yayıldı.',
        din: 'Olimpos tanrıları; Delfi Kâhini en ünlü kehanet merkezi.',
        yasam: 'Sparta\'da çocuklar 7 yaşından itibaren askerî eğitim alıyor.',
        bilgi: 'İlk Olimpiyat\'ta tek bir yarış vardı: ~192 m\'lik stadion koşusu. Kazanan Elisli bir aşçı, Koroibos\'tu.' },
      { from: 480, to: 323, puan: { eko: 5, ordu: 4, istikrar: 3 }, baskent: 'Atina',
        gundem: 'Salamis zaferinden sonra Atina\'nın altın çağı: Perikles Akropolis\'i yeniden yaptırdı; Parthenon MÖ 432\'de bitti. Sokrates, Platon, Aristoteles felsefeyi; Hippokrates tıbbı; Herodotos ve Thukydides tarihi kurdu. Sonra Atina ile Sparta arasında Peloponez Savaşı (MÖ 431-404).',
        savas: 'Thermopylai (300 Spartalı), Salamis deniz savaşı, Peloponez Savaşı, Makedonya\'nın yükselişi.',
        ekonomi: 'Atina\'nın Laurion gümüş madenleri ve donanması; Pire limanı Akdeniz\'in en büyüğü.',
        din: 'Panathenaia bayramında Athena\'ya yeni bir elbise (peplos) götürülür.',
        yasam: 'Tiyatro: Aiskhylos, Sophokles, Euripides, Aristophanes. Demokraside yalnızca yetişkin özgür erkekler oy kullanabiliyordu.',
        bilgi: 'Atinalılar sevmedikleri bir politikacıyı çanak çömlek kırıklarına (ostrakon) adını yazarak 10 yıl sürgüne gönderebiliyordu: "ostrakizm".' },
      { from: 323, to: 146, puan: { eko: 4, ordu: 3, istikrar: 2 }, baskent: 'Pella (Makedonya)',
        gundem: 'İskender\'den sonra Helenistik çağ: Yunan dili ve kültürü Mısır\'dan Afganistan\'a yayıldı. Avrupa\'da Makedonya ve Yunan birlikleri güçsüzleşirken Roma yükseliyor: Kartaca\'yı yenip (Pön Savaşları) MÖ 146\'da Korint\'i yıktı.',
        savas: 'Hannibal fillerle Alpleri aştı (MÖ 218) ve Cannae\'de Roma\'yı ezdi (MÖ 216); ama sonunda Zama\'da yenildi (MÖ 202).',
        ekonomi: 'Rodos ve Delos ticaret merkezleri.',
        din: 'Stoacılık ve Epikürcülük gibi yeni felsefeler.',
        yasam: 'Siraküzalı Arşimet (öl. MÖ 212) kaldıraç, kaldırma kuvveti ve "Eureka!".',
        bilgi: 'Rodos Heykeli (MÖ 280) Yedi Harika\'dan biriydi; 54 yıl sonra bir depremde yıkıldı.' }
    ],
    nufus: [[3000, 5], [2000, 10], [1000, 15], [500, 25], [146, 30]],
    nufusNot: 'Bütün Avrupa (Rusya\'nın Avrupa kısmı dahil) için kaba tahminler.',
    dunyaOzet: { eko: 'Mısır, Mezopotamya ve sonra Pers dünyanın en zengin bölgeleri; Akdeniz ticareti Fenikeliler ve Yunanlarla büyüdü.', askeri: 'Tunç, sonra demir silahlar; Yunan falanksı, Makedon sarisası, Roma lejyonu.' },
    events: [
      { y: 3000, t: 'Stonehenge\'in ilk çevre hendeği kazıldı', k: 'm' }, { y: 2500, t: 'Stonehenge\'in büyük taşları dikildi', k: 'm' },
      { y: 1900, t: 'Knossos sarayı yapıldı', k: 'm' }, { y: 1600, t: 'Thera (Santorini) yanardağı patladı', k: 'm' }, { y: 1450, t: 'Mikenliler Girit\'i aldı', k: 'm' },
      { y: 1200, t: 'Tunç Çağı çöküşü: Miken sarayları yandı', k: 'm' }, { y: 800, t: 'Yunan alfabesi', k: 'm' }, { y: 776, t: 'İlk Olimpiyat Oyunları', k: 'm' },
      { y: 753, t: 'Roma kuruldu (söylence)', k: 'm' }, { y: 508, t: 'Atina\'da demokrasi', k: 'm' }, { y: 490, t: 'Marathon Savaşı', k: 'm' }, { y: 480, t: 'Thermopylai ve Salamis', k: 'm' },
      { y: 432, t: 'Parthenon tamamlandı', k: 'm' }, { y: 431, t: 'Peloponez Savaşı başladı', k: 'm' }, { y: 399, t: 'Sokrates idam edildi', k: 'm' }, { y: 387, t: 'Platon Akademia\'yı kurdu', k: 'm' },
      { y: 336, t: 'İskender Makedonya kralı oldu', k: 'm' }, { y: 218, t: 'Hannibal Alpleri aştı', k: 'm' }, { y: 146, t: 'Roma Korint ve Kartaca\'yı yıktı', k: 'm' },
      { y: 2560, t: 'Mısır\'da Büyük Piramit', k: 'w' }, { y: 1274, t: 'Kadeş Savaşı', k: 'w' }, { y: 550, t: 'Pers İmparatorluğu kuruldu', k: 'w' }, { y: 221, t: 'Çin birleşti', k: 'w' }
    ],
    world: [
      { from: 3000, to: 1069, yer: 'Mısır', t: 'Firavunlar: piramitler ve tapınaklar.' }, { from: 1650, to: 1180, yer: 'Anadolu', t: 'Hitit İmparatorluğu.' },
      { from: 550, to: 330, yer: 'İran', t: 'Pers İmparatorluğu.' }, { from: 1046, to: 256, yer: 'Çin', t: 'Zhou Hanedanı; Konfüçyüs.' }, { from: 563, to: 146, yer: 'Hindistan', t: 'Buda\'nın öğretisi; Maurya İmparatorluğu.' }
    ],
    sites: [{ ad: 'STONEHENGE', wx: 2200 }, { ad: 'CARNAC', wx: 2600 }, { ad: 'MARSİLYA (MASSALİA)', wx: 3700 }, { ad: 'ROMA', wx: 4800 }, { ad: 'SİRAKÜZA', wx: 5100 }, { ad: 'DELFİ', wx: 6000 }, { ad: 'OLİMPİA', wx: 6100 }, { ad: 'ATİNA', wx: 6300 }, { ad: 'MİKEN', wx: 6450 }, { ad: 'KNOSSOS (GİRİT)', wx: 6700 }],
    cliffs: [{ wx: 6000, w: 600, h: 90, peak: 0.5 }],
    monuments: [
      { id: 'stonehenge', ad: 'Stonehenge', yer: 'Wiltshire, İngiltere', wx: 2200, type: 'pillars', b: 60, h: 7, n: 10, start: 2600, end: 2400, vol: 9e4 },
      { id: 'knossos', ad: 'Knossos Sarayı', yer: 'Girit', wx: 6700, bank: 'near', type: 'citadel', renk: '#e8c89a', b: 160, h: 20, start: 1900, end: 1850, vol: 1e5, ruin: 1375 },
      { id: 'miken', ad: 'Miken kalesi ve Aslanlı Kapı', yer: 'Mora', wx: 6450, type: 'citadel', tepe: true, b: 140, h: 30, start: 1350, end: 1250, vol: 8e4, ruin: 1200 },
      { id: 'delfi', ad: 'Delfi Apollon Tapınağı', yer: 'Delfi', wx: 6000, type: 'greek', b: 60, h: 18, sutun: 6, start: 370, end: 330, vol: 5e4 },
      { id: 'parthenon', ad: 'Parthenon (Akropolis)', yer: 'Atina', wx: 6300, type: 'greek', b: 70, h: 20, sutun: 8, start: 447, end: 432, vol: 1.6e5 },
      { id: 'atinatiyatro', ad: 'Dionysos Tiyatrosu', yer: 'Atina', wx: 6370, bank: 'near', type: 'theater', b: 100, h: 24, start: 340, end: 330, vol: 5e4 },
      { id: 'atina', ad: 'Atina', yer: 'Attika', wx: 6250, bank: 'near', type: 'city', wall: true, b: 260, n: 24, hk: 0.32, start: 900, end: 700, vol: 6e4 }
    ],
    hizli: [{ ad: 'Stonehenge', y: 2500 }, { ad: 'Knossos', y: 1700 }, { ad: 'Miken', y: 1300 }, { ad: 'Olimpiyat', y: 776 }, { ad: 'Demokrasi', y: 508 }, { ad: 'Salamis', y: 480 }, { ad: 'Parthenon', y: 435 }, { ad: 'Sokrates', y: 399 }, { ad: 'İskender', y: 334 }, { ad: 'Hannibal', y: 218 }],
    bilgi: {
      stonehenge: { ikon: '🪨', yaptiran: 'Neolitik ve Tunç Çağı toplulukları', donem: 'MÖ ~3000-1500 (büyük taşlar MÖ ~2500)', mimar: '—', sure: '~1.500 yıl, aşamalar hâlinde', neden: 'Güneş takvimi, tören ve gömü alanı; yaz ve kış gündönümüne hizalı.', onem: 'Avrupa\'nın en ünlü tarih öncesi anıtı. UNESCO Dünya Mirası (1986).', teknik: [['Sarsen taşları', '~25 ton, 7 m'], ['Mavi taşlar', 'Galler\'den, ~250 km'], ['Çap', '~33 m']], nasil: 'Taşlar kızaklar ve kütükler üzerinde çekildi; üstteki lento taşları ahşap birleşimlere benzer zıvanalarla oturtuldu.', bugun: 'Wiltshire\'da; gündönümlerinde binlerce kişi güneşin doğuşunu izliyor.', ilginc: 'Yakındaki Durrington Walls\'ta binlerce domuz kemiği bulundu: Stonehenge\'i yapanlar kış gündönümünde büyük ziyafetler veriyordu.' },
      knossos: { ikon: '🐂', yaptiran: 'Minos kralları', donem: 'MÖ ~1900-1375', mimar: 'Söylenceye göre Daidalos', sure: '—', neden: 'Girit\'in en büyük saray-şehri.', onem: 'Avrupa\'nın ilk büyük uygarlığının merkezi; labirent efsanesinin kaynağı.', teknik: [['Oda', '~1.300'], ['Alan', '~20.000 m²']], nasil: 'Çok katlı, ışıklıklı, kırmızı sütunlu yapılar; freskler.', bugun: 'Arthur Evans\'ın 1900\'lerde betonla "yeniden yaptığı" bölümleriyle ziyaret ediliyor.', ilginc: 'Sarayın karmaşık planı ve her yerdeki çift başlı balta (labrys) sembolü, "labirent" kelimesinin kaynağı olabilir.' },
      miken: { ikon: '🦁', yaptiran: 'Miken kralları', donem: 'MÖ ~1350-1200', mimar: '—', sure: '—', neden: 'Kraliyet kalesi.', onem: 'Agamemnon\'un kenti; Schliemann\'ın bulduğu altın "Agamemnon maskesi".', teknik: [['Surlar', '"Kiklop" duvarları: dev düzensiz taşlar']], nasil: 'Taşlar o kadar büyük ki sonraki Yunanlar onları devlerin (Kikloplar) yaptığını sandı.', bugun: 'Ören yeri; maske Atina Ulusal Arkeoloji Müzesi\'nde.', ilginc: '"Agamemnon maskesi" aslında Truva Savaşı\'ndan ~300 yıl daha eski.' },
      delfi: { ikon: '🔮', yaptiran: 'Delfililer ve Yunan şehirleri', donem: 'MÖ ~370-330 (son hâli)', mimar: '—', sure: '—', neden: 'Apollon\'un kâhini Pythia\'nın kehanet verdiği yer.', onem: 'Antik Yunan\'ın "dünyanın göbeği" (omphalos).', teknik: [['Sütun', '6 × 15 Dor sütunu']], nasil: 'Parnassos Dağı yamacına teraslar.', bugun: 'UNESCO Dünya Mirası.', ilginc: 'Tapınağın girişinde "Kendini bil" yazıyordu.' },
      parthenon: { ikon: '🏛️', yaptiran: 'Perikles ve Atina halkı', donem: 'MÖ 447-432', mimar: 'İktinos ve Kallikrates; heykeltıraş Fidias', sure: '15 yıl', neden: 'Athena Parthenos\'a adanmış tapınak ve Atina hazinesi.', onem: 'Klasik mimarinin simgesi; Batı mimarisinin ölçüsü.', teknik: [['Boyut', '69,5 × 30,9 m'], ['Sütun', '8 × 17 Dor sütunu'], ['Malzeme', 'Pentelikon mermeri']], nasil: 'Hiçbir çizgisi tam düz değil: zemin ortada hafifçe yükselir, sütunlar hafifçe içe eğiktir; uzaktan kusursuz düz görünsün diye.', bugun: 'Restorasyon sürüyor. Frizlerinin bir bölümü Londra\'da (Elgin Mermerleri).', ilginc: '1687\'de Osmanlı barut deposu olarak kullanılırken Venedik topları vurdu; patlama çatıyı yıktı.' },
      atinatiyatro: { ikon: '🎭', yaptiran: 'Atinalılar', donem: 'MÖ 6. yy; taş hâli MÖ ~340', mimar: 'Lykurgos (taş hâli)', sure: '—', neden: 'Dionysos bayramında oyunlar.', onem: 'Tiyatronun doğduğu yer: tragedya ve komedya burada sahnelendi.', teknik: [['Kapasite', '~17.000']], nasil: 'Akropolis yamacına.', bugun: 'Ören yeri.', ilginc: 'Oyunlar bir yarışmaydı; her yıl en iyi oyun yazarına ödül verilirdi.' },
      atina: { ikon: '🏙️', yaptiran: 'Atinalılar', donem: 'MÖ ~900\'den', mimar: '—', sure: '—', neden: 'Attika\'nın merkezi.', onem: 'Demokrasinin ve felsefenin şehri.', teknik: [['Nüfus (MÖ 430)', '~250.000-300.000 (Attika)']], nasil: '—', bugun: 'Yunanistan\'ın başkenti.', ilginc: 'Şehrin adı, Poseidon\'la yarışı kazanan Athena\'dan gelir: Athena halka zeytin ağacını hediye etti.' }
    },
    ulke: [
      { ad: 'Genel bakış', ikon: '🧭', html: '<p>Avrupa\'nın ilk büyük anıtları megalitlerdir: Stonehenge, Carnac. İlk saraylı uygarlık Girit\'teki <b>Minos</b>, sonra anakaradaki <b>Miken</b>. MÖ 8. yüzyıldan itibaren <b>Yunan şehir devletleri</b> demokrasi, felsefe, tiyatro ve Olimpiyatları doğurdu.</p>' },
      { ad: 'Halklar', ikon: '👥', html: '<ul><li><b>Yunanlar</b> (İyonlar, Dorlar, Aiollar)</li><li><b>Keltler</b>: Orta ve Batı Avrupa</li><li><b>Etrüskler ve Latinler</b>: İtalya</li><li><b>İberler</b>: İspanya</li><li><b>İskitler, Trakyalılar</b>: Doğu</li><li><b>Fenikeliler ve Kartacalılar</b>: Akdeniz kıyıları</li></ul>' },
      { ad: 'Bilim ve felsefe', ikon: '📐', html: '<ul><li>Pisagor, Öklid, Arşimet: matematik</li><li>Sokrates, Platon, Aristoteles: felsefe</li><li>Hippokrates: tıp ("Önce zarar verme")</li><li>Eratosthenes: Dünya\'nın çevresini ölçtü</li></ul>' }
    ]
  });

  // ================= 2. ROMA =================
  window.PLACES.push({
    id: 'avrupa-roma', sira: 2, kisa: 'Roma İmparatorluğu', aralikAd: 'MÖ 146 – MS 476',
    baslik: 'Sezar · Augustus · Kolezyum · Batı Roma\'nın düşüşü',
    ulkeAlt: 'Roma Cumhuriyeti ve İmparatorluğu (MÖ 146 – MS 476)',
    from: 146, to: -476, start: -80,
    not: 'Tarihler kesindir. Nüfus tahminleri yaklaşıktır.', baskent: 'Roma (MS 330\'dan sonra doğuda Konstantinopolis, batıda Milano ve Ravenna)',
    sahne: { kizak: true, araba: [146, -476], giyim: 'antik' },
    dynasties: [{ from: 146, to: 27, ad: 'Roma Cumhuriyeti', renk: '#9a3a3a' }, { from: 27, to: -235, ad: 'Roma İmparatorluğu: Principatus', renk: '#b0402a' }, { from: -235, to: -476, ad: 'Geç Roma İmparatorluğu', renk: '#7a3a5a' }],
    rulers: [
      { from: 146, to: 49, ad: 'Senato ve konsüller (Gracchuslar, Marius, Sulla, Pompeius)', kisa: 'Senato', kim: 'Cumhuriyet iç savaşlarla sarsılıyor. Spartaküs\'ün köle isyanı (MÖ 73-71).' },
      { from: 49, to: 44, ad: 'Julius Sezar', kisa: 'Sezar', kim: 'Galya\'yı fethetti (MÖ 58-50), Rubicon\'u geçip iktidarı aldı; MÖ 44\'te Senato\'da bıçaklanarak öldürüldü.' },
      { from: 44, to: 27, ad: 'II. Triumvirlik (Octavianus, Antonius)', kisa: 'Octavianus', kim: 'Octavianus, Antonius ve Kleopatra\'yı Aktium\'da yendi (MÖ 31).' },
      { from: 27, to: -14, ad: 'Augustus', kisa: 'Augustus', kim: 'İlk imparator. "Roma\'yı tuğladan buldum, mermerden bıraktım." Pax Romana başladı.' },
      { from: -14, to: -68, ad: 'Tiberius, Caligula, Claudius, Neron', kisa: 'Neron', kim: 'Claudius Britanya\'yı aldı (MS 43). Neron döneminde Roma yangını (MS 64).' },
      { from: -68, to: -96, ad: 'Flavius hanedanı (Vespasianus, Titus, Domitianus)', kisa: 'Vespasianus', kim: 'Kolezyum\'u yaptırdılar. MS 79\'da Vezüv Pompeii\'yi gömdü.' },
      { from: -96, to: -180, ad: 'Beş İyi İmparator (Traianus, Hadrianus, Marcus Aurelius…)', kisa: 'Hadrianus', kim: 'İmparatorluk en geniş hâlinde (Traianus, MS 117). Hadrianus Britanya\'ya sur yaptırdı, Pantheon\'u yeniden yaptı.' },
      { from: -180, to: -284, ad: 'Commodus, Severuslar ve 3. yüzyıl bunalımı', kisa: 'Bunalım', kim: '50 yılda 26 imparator; salgınlar, enflasyon, Got ve Pers saldırıları.' },
      { from: -284, to: -337, ad: 'Diocletianus ve I. Konstantin', kisa: 'Konstantin', kim: 'Konstantin Hristiyanlığı serbest bıraktı (313) ve Konstantinopolis\'i kurdu (330).' },
      { from: -337, to: -395, ad: 'Konstantin\'in ardılları ve I. Theodosius', kisa: 'Theodosius', kim: 'Hristiyanlık devlet dini oldu (380); 395\'te imparatorluk ikiye ayrıldı.' },
      { from: -395, to: -476, ad: 'Son Batı Roma imparatorları', kisa: 'Romulus Augustulus', kim: 'Vizigotlar Roma\'yı yağmaladı (410), Hunlar (Attila) Galya ve İtalya\'ya girdi. MS 476\'da Odoaker son imparatoru tahttan indirdi.' }
    ],
    eras: [
      { from: 146, to: 27, puan: { eko: 4, ordu: 5, istikrar: 2 }, baskent: 'Roma',
        gundem: 'Roma Akdeniz\'in efendisi; ama zenginlik eşitsizliği ve iktidar kavgaları Cumhuriyet\'i yıkıyor. Sezar Galya\'yı fethetti, Rubicon\'u geçti ve MÖ 44 Mart\'ın 15\'inde öldürüldü.',
        savas: 'Galya Savaşları (Vercingetorix\'in Alesia\'da teslimi, MÖ 52), iç savaşlar, Aktium (MÖ 31).', ekonomi: 'Fethedilen eyaletlerin vergileri ve köle emeği; büyük çiftlikler (latifundia).',
        din: 'Jüpiter, Juno, Minerva; Yunan tanrıları Roma adlarıyla.', yasam: 'Cicero\'nun söylevleri; Forum siyasetin kalbi.', bilgi: 'Sezar\'ın Jülyen takvimi (MÖ 46) 1582\'ye kadar kullanıldı; Temmuz ayı (July) onun adını taşır.' },
      { from: 27, to: -180, puan: { eko: 5, ordu: 5, istikrar: 5 }, baskent: 'Roma',
        gundem: 'Pax Romana: İskoçya\'dan Mısır\'a 200 yıllık barış. Roma ~1 milyon nüfusla dünyanın en büyük şehri. Kolezyum (MS 80), Pantheon (MS 126), su kemerleri ve 80.000 km yol. Hristiyanlık imparatorlukta yayılıyor.',
        savas: 'Teutoburg yenilgisi (MS 9) Germania\'yı Roma dışında bıraktı. Hadrianus Duvarı (MS 122) Britanya\'da sınır oldu.', ekonomi: 'Ortak para (denarius), Akdeniz "bizim deniz" (mare nostrum): tahıl, şarap, zeytinyağı ticareti.',
        din: 'İmparator kültü; Hristiyanlara zaman zaman zulüm (Neron, MS 64).', yasam: 'Ekmek ve sirk: ücretsiz tahıl ve gladyatör oyunları. Hamamlar herkese açık.', bilgi: 'Roma betonu (volkan külü + kireç) deniz suyuyla daha da sertleşir; Pantheon\'un kubbesi 1.900 yıldır dünyanın en büyük donatısız beton kubbesi.' },
      { from: -180, to: -476, puan: { eko: 2, ordu: 3, istikrar: 1 }, baskent: 'Roma, Milano, Ravenna; doğuda Konstantinopolis',
        gundem: 'Bunalımlar, salgınlar ve göçler. Konstantin Hristiyanlığı serbest bıraktı; Theodosius devlet dini yaptı. 395\'te imparatorluk ikiye bölündü. Hunların baskısıyla Germen kavimleri (Gotlar, Vandallar, Franklar) imparatorluğa girdi: "Kavimler Göçü". 476\'da Batı Roma sona erdi; Doğu Roma (Bizans) 1453\'e kadar yaşadı.',
        savas: 'Adrianopolis (378): Gotlar Roma ordusunu yendi. Alarik Roma\'yı yağmaladı (410). Katalaun Ovaları (451): Attila durduruldu.', ekonomi: 'Enflasyon, kentlerden kırsala göç; büyük toprak sahipleri.',
        din: 'Hristiyanlık devlet dini (380); eski tapınaklar kapatıldı.', yasam: 'Kentler surlarla çevrildi; Roma\'nın nüfusu 100.000\'in altına düştü.', bilgi: 'Hun hükümdarı Attila\'yı 452\'de Roma kapılarından Papa I. Leo\'nun geri çevirdiği anlatılır.' }
    ],
    nufus: [[146, 30], [1, 40], [-165, 45], [-300, 38], [-476, 30]],
    nufusNot: 'Roma İmparatorluğu\'nun tamamı MS 1. yüzyılda ~60 milyon; burada yalnızca Avrupa kısmı.',
    dunyaOzet: { eko: 'Roma ve Han Çini dünyanın iki büyük imparatorluğu; İpek Yolu ikisini dolaylı olarak bağlıyor.', askeri: 'Roma lejyonları; sonra Hun ve Germen atlıları.' },
    events: [
      { y: 73, t: 'Spartaküs isyanı', k: 'm' }, { y: 52, t: 'Alesia: Galya fethedildi', k: 'm' }, { y: 49, t: 'Sezar Rubicon\'u geçti', k: 'm' }, { y: 44, t: 'Sezar öldürüldü', k: 'm' },
      { y: 27, t: 'Augustus ilk imparator oldu', k: 'm' }, { y: -9, t: 'Teutoburg Ormanı yenilgisi', k: 'm' }, { y: -43, t: 'Britanya fethi', k: 'm' }, { y: -64, t: 'Roma yangını', k: 'm' },
      { y: -79, t: 'Vezüv Pompeii\'yi gömdü', k: 'm' }, { y: -80, t: 'Kolezyum açıldı', k: 'm' }, { y: -117, t: 'İmparatorluk en geniş hâlinde', k: 'm' }, { y: -122, t: 'Hadrianus Duvarı', k: 'm' },
      { y: -126, t: 'Pantheon tamamlandı', k: 'm' }, { y: -313, t: 'Milano Fermanı', k: 'm' }, { y: -330, t: 'Konstantinopolis kuruldu', k: 'm' }, { y: -375, t: 'Hunlar Avrupa\'ya girdi; Kavimler Göçü', k: 'm' },
      { y: -395, t: 'İmparatorluk ikiye ayrıldı', k: 'm' }, { y: -410, t: 'Vizigotlar Roma\'yı yağmaladı', k: 'm' }, { y: -451, t: 'Katalaun Savaşı: Attila', k: 'm' }, { y: -476, t: 'Batı Roma İmparatorluğu sona erdi', k: 'm' },
      { y: -105, t: 'Çin\'de kâğıt', k: 'w' }, { y: -224, t: 'Sasani İmparatorluğu', k: 'w' }
    ],
    world: [{ from: 146, to: -220, yer: 'Çin', t: 'Han Hanedanı.' }, { from: 30, to: -476, yer: 'Mısır', t: 'Roma eyaleti.' }, { from: -224, to: -476, yer: 'İran', t: 'Sasaniler.' }, { from: 146, to: -476, yer: 'Amerika', t: 'Teotihuacan ve Maya şehirleri.' }],
    sites: [{ ad: 'HİSPANİA', wx: 1400 }, { ad: 'LONDİNİUM', wx: 2300 }, { ad: 'HADRİANUS DUVARI', wx: 2000 }, { ad: 'LUTETİA (PARİS)', wx: 2900 }, { ad: 'NEMAUSUS · PONT DU GARD', wx: 3600 }, { ad: 'POMPEİİ', wx: 5050 }, { ad: 'ROMA', wx: 4800 }, { ad: 'RAVENNA', wx: 4500 }, { ad: 'ATİNA', wx: 6300 }],
    monuments: [
      { id: 'kolezyum', ad: 'Kolezyum', yer: 'Roma', wx: 4800, type: 'arena', b: 188, h: 48, start: -70, end: -80, vol: 2.2e5, ruin: -1349 },
      { id: 'pantheon', ad: 'Pantheon', yer: 'Roma', wx: 4720, bank: 'near', type: 'church', buyukKubbe: true, kubbe: '#b8b0a0', renk: '#e0d6c0', b: 58, h: 43, start: -113, end: -126, vol: 1e5 },
      { id: 'pontdugard', ad: 'Pont du Gard su kemeri', yer: 'Nîmes, Fransa', wx: 3600, type: 'bridge', b: 275, h: 49, start: -40, end: -60, vol: 6e4 },
      { id: 'hadrianusduvari', ad: 'Hadrianus Duvarı', yer: 'Kuzey İngiltere', wx: 2000, type: 'citadel', b: 260, h: 10, start: -122, end: -128, vol: 9e4 },
      { id: 'pompeii', ad: 'Pompeii', yer: 'Napoli yakını', wx: 5050, bank: 'near', type: 'city', wall: true, b: 220, n: 22, hk: 0.3, start: 150, end: 100, vol: 6e4, ruin: -79 },
      ...ESKI(['parthenon', 'stonehenge', 'atinatiyatro'])
    ],
    hizli: [{ ad: 'Spartaküs', y: 73 }, { ad: 'Sezar', y: 44 }, { ad: 'Augustus', y: 20 }, { ad: 'Vezüv', y: -79 }, { ad: 'Kolezyum', y: -80 }, { ad: 'Hadrianus', y: -125 }, { ad: 'Konstantin', y: -313 }, { ad: 'Hunlar', y: -375 }, { ad: 'Roma yağması', y: -410 }, { ad: 'Son', y: -476 }],
    bilgi: {
      kolezyum: { ikon: '🏟️', yaptiran: 'Vespasianus ve Titus', donem: 'MS 70-80', mimar: 'Bilinmiyor', sure: '~10 yıl', neden: 'Gladyatör dövüşleri, hayvan avları ve halk gösterileri.', onem: 'Antik dünyanın en büyük amfitiyatrosu; Roma\'nın simgesi.', teknik: [['Boyut', '188 × 156 m, 48 m yükseklik'], ['Kapasite', '50.000-80.000'], ['Kapı', '80 giriş']], nasil: 'Travertin taş, tuğla ve Roma betonu; seyirciler numaralı biletlerle 15 dakikada boşaltılabiliyordu. Güneşe karşı dev tente (velarium).', bugun: 'Yılda ~7 milyon ziyaretçi; 1349 depreminde güney yarısı yıkıldı, taşları başka yapılarda kullanıldı.', ilginc: 'Açılış oyunları 100 gün sürdü ve 9.000 hayvan öldürüldü. Arenanın altında asansörlü hayvan kafesleri (hipojeum) vardı.' },
      pantheon: { ikon: '🏛️', yaptiran: 'Hadrianus', donem: 'MS ~113-126', mimar: 'Belki Şamlı Apollodoros', sure: '~13 yıl', neden: 'Bütün tanrılara adanmış tapınak.', onem: 'Dünyanın en büyük donatısız beton kubbesi; 609\'dan beri kilise olduğu için sağlam kaldı.', teknik: [['Kubbe çapı', '43,3 m (yüksekliği de 43,3 m)'], ['Göz (oculus)', '8,2 m açıklık']], nasil: 'Beton yukarı çıktıkça hafif volkanik taşlarla karıştırıldı; kubbenin iç yüzü kasetlerle hafifletildi.', bugun: 'Kilise; Rafael\'in mezarı burada.', ilginc: 'Tepedeki açıklıktan yağmur yağar; tabandaki küçük delikler suyu tahliye eder.' },
      pontdugard: { ikon: '🌉', yaptiran: 'Roma (Nemausus kenti)', donem: 'MS ~40-60', mimar: '—', sure: '—', neden: 'Nîmes\'e 50 km\'lik su kanalı.', onem: 'En yüksek Roma su kemeri; UNESCO Dünya Mirası.', teknik: [['Yükseklik', '49 m'], ['Eğim', '50 km\'de yalnızca 12,6 m']], nasil: 'Harçsız, 6 tonluk taşlar.', bugun: 'Gard Nehri üzerinde ziyaret ediliyor.', ilginc: 'Kanal öylesine az eğimliydi ki su, 1 km\'de yalnızca 25 cm alçalıyordu.' },
      hadrianusduvari: { ikon: '🧱', yaptiran: 'Hadrianus', donem: 'MS 122-128', mimar: 'Roma lejyonları', sure: '~6 yıl', neden: 'Britanya\'da Roma sınırı; Piktlere karşı.', onem: 'Roma\'nın en kuzeydeki sınırı.', teknik: [['Uzunluk', '117 km'], ['Kale', 'Her mil başına bir küçük kale']], nasil: 'Askerler taş ve çimle ördü.', bugun: 'Yürüyüş yolu; UNESCO.', ilginc: 'Vindolanda kalesinde bulunan tahta tabletlerde bir komutanın eşinin doğum günü davetiyesi var: Latince yazılmış bilinen en eski kadın el yazısı.' },
      pompeii: { ikon: '🌋', yaptiran: 'Osklar, sonra Romalılar', donem: 'MÖ 7. yy – MS 79', mimar: '—', sure: '—', neden: 'Napoli Körfezi\'nde ticaret kenti.', onem: 'Vezüv\'ün küllerinin altında donmuş bir Roma kenti.', teknik: [['Nüfus', '~11.000']], nasil: '—', bugun: 'Kazılar sürüyor; yılda ~4 milyon ziyaretçi.', ilginc: 'Duvarlarda seçim afişleri, şakalar ve "burada fırıncı Modestus oturur" gibi yazılar okunuyor.' }
    },
    ulke: [
      { ad: 'Genel bakış', ikon: '🧭', html: '<p><b>Roma</b>, İtalya\'daki küçük bir şehir devletiyken Akdeniz\'in tamamını yöneten bir imparatorluğa dönüştü. Latince, hukuk, yollar, takvim, kemerler ve Hristiyanlık Roma\'dan bütün Avrupa\'ya yayıldı. Batı Roma 476\'da yıkıldı; Doğu Roma 1453\'e kadar yaşadı.</p>' },
      { ad: 'Yönetim ve hukuk', ikon: '⚖️', html: '<p>Senato, konsüller, sonra imparatorlar. Roma hukuku (On İki Levha, sonra Justinianus kodu) bugünkü Avrupa hukukunun temeli.</p>' },
      { ad: 'Gündelik hayat', ikon: '🏠', html: '<p>Apartmanlar (insula), hamamlar, hızlı yemek dükkânları (thermopolium), gladyatör ve araba yarışları (Circus Maximus: 150.000 kişi).</p>' }
    ]
  });
})();
