// Anadolu: Tarih öncesi ve Tunç Çağı (MÖ 9600 – 1650) ve Hititler (MÖ 1650 – 1180)
// Yıl sayıları: MÖ yıllar pozitif, MS yıllar negatif (MS 1453 = -1453). Bkz. js/yil.js
// Sahne yerleşimi (wx): doğudan batıya bir Anadolu yolculuğu
//   Urfa 1000 · Nemrut 1700 · Van 2400 · Kayseri 3300 · Hattuşa 3900 · Ankara 4500 · Konya 5200 · Gordion 5700
//   Sardes 6500 · Efes 7000 · Bergama 7500 · Truva 8000 · İstanbul 8800 · Edirne 9400
// Kaynaklar: Schmidt, "Göbekli Tepe" (2006); Hodder, "Çatalhöyük: The Leopard's Tale" (2006);
// Bryce, "The Kingdom of the Hittites" (2005); Kulakoğlu ve Kangal (ed.), "Anadolu'nun Önsözü: Kültepe Kaniş-Karumu" (2010).
(() => {
  window.PLACES = window.PLACES || [];
  // önceki çağların yapılarını sonraki çağda da göstermek için kopyalar (eski: true)
  window.ANADOLU_ESKI = (ids, ek = {}) => {
    const out = [];
    for (const id of ids) {
      let m = null;
      for (const p of window.PLACES) { const f = (p.monuments || []).find(x => x.id === id && !x.eski); if (f) { m = f; break; } }
      if (m) out.push({ ...m, eski: true, ...(ek[id] || {}) });
    }
    return out;
  };

  // ================= 1. TARİH ÖNCESİ VE TUNÇ ÇAĞI =================
  window.PLACES.push({
    id: 'anadolu-tarihoncesi', sira: 1, kisa: 'İlk köyler ve Tunç Çağı', aralikAd: 'MÖ 9600 – 1650',
    baslik: 'Göbekli Tepe · Çatalhöyük · Hattiler · Asur ticaret kolonileri',
    ulkeAlt: 'Tarih öncesi ve Tunç Çağı Anadolu (MÖ 9600 – 1650)',
    from: 9600, to: 1650, start: 9400,
    not: 'MÖ 2000 öncesi tarihler arkeolojik (radyokarbon) tahminlerdir; yüzlerce yıl kayabilir. Yazı Anadolu\'ya MÖ ~1950\'de Asurlu tüccarlarla geldi.',
    baskent: 'Henüz devlet yok; köyler ve küçük beylikler',
    sahne: { kizak: false, katipYok: true, araba: false, giyim: 'antik' },
    dynasties: [
      { from: 9600, to: 8200, ad: 'Avcı-toplayıcı topluluklar (Çanak çömleksiz Neolitik)', renk: '#7a6a4a' },
      { from: 8200, to: 5500, ad: 'İlk çiftçi köyleri (Neolitik)', renk: '#6a8a3a' },
      { from: 5500, to: 3000, ad: 'Bakır Çağı (Kalkolitik) toplulukları', renk: '#a0603a' },
      { from: 3000, to: 1950, ad: 'Erken Tunç Çağı beylikleri · Hattiler', renk: '#8a5a8a' },
      { from: 1950, to: 1650, ad: 'Asur Ticaret Kolonileri Çağı', renk: '#3a6a9a' }
    ],
    rulers: [
      { from: 9600, to: 8200, ad: 'Avcı-toplayıcı klanlar', kisa: '?', kim: 'Kral ya da devlet yok. Onlarca kilometre uzaktaki gruplar, Göbekli Tepe gibi ortak kutsal yerlerde toplanıp birlikte dev taşlar dikiyor.' },
      { from: 8200, to: 5500, ad: 'Köy toplulukları', kisa: '?', kim: 'Çatalhöyük\'te 5.000-8.000 kişi yan yana yaşıyor; ama ne saray ne tapınak var. Belirgin bir yönetici sınıfı görünmüyor: evler hemen hemen eşit büyüklükte.' },
      { from: 5500, to: 3000, ad: 'Köy beyleri', kisa: '?', kim: 'Bakır işçiliği ve ticaretle zenginleşen ailelerden ilk "beyler" çıkıyor. Hacılar ve Mersin-Yumuktepe gibi yerlerde surlu köyler yapılıyor.' },
      { from: 3000, to: 2300, ad: 'Erken Tunç Çağı beyleri (Truva I-II, Alacahöyük)', kisa: 'Beylikler', kim: 'Surlu kale kentlerin beyleri. Truva\'da "Priamos\'un hazinesi" denen altınları, Alacahöyük\'te güneş kursları ve geyik heykelcikleriyle gömülen beyler bu dönemden.' },
      { from: 2300, to: 1950, ad: 'Hatti beyleri', kisa: 'Hatti beyleri', kim: 'Anadolu\'nun bilinen en eski yerli halkı Hattiler. Dilleri hiçbir dile benzemiyor; tanrıları ve törenleri sonra Hititlere geçecek.' },
      { from: 1950, to: 1750, ad: 'Kaniş beyleri ve Asurlu tüccarlar', kisa: 'Kaniş', kim: 'Kaniş (Kültepe) beyinin sarayının dibinde Asurlu tüccarların pazarı (karum) var. Tüccarlar beye vergi ödüyor, karşılığında koruma alıyor.' },
      { from: 1750, to: 1650, ad: 'Anitta ve Kuşşara krallığı', kisa: 'Anitta', kim: 'Kuşşaralı Anitta, Hattuşa dahil Orta Anadolu şehirlerini birleştirdi ve Kaniş\'i başkent yaptı. Kendi zaferlerini anlatan "Anitta Metni", Anadolu\'da yazılmış bilinen en eski tarih metni.' }
    ],
    eras: [
      { from: 9600, to: 8200, puan: { eko: 1, ordu: 1, istikrar: 3 }, baskent: 'Yok (Göbekli Tepe ortak buluşma yeri)',
        gundem: 'Buzul Çağı bitti; iklim ısınıyor ve Bereketli Hilal\'de yabani buğday ve arpa tarlaları yayılıyor. Urfa yakınlarındaki Göbekli Tepe\'de avcı-toplayıcılar, üzeri hayvan kabartmalı 5-6 metrelik T biçimli dikili taşlarla daire biçiminde yapılar kuruyor. Bunlar Stonehenge\'den yaklaşık 6.000 yıl, Mısır piramitlerinden 7.000 yıl daha eski.',
        savas: 'Örgütlü ordu yok. Gruplar arası çatışmalar olsa da Göbekli Tepe gibi yerler, yüzlerce insanın barış içinde bir araya geldiğini gösteriyor.',
        ekonomi: 'Ceylan, yaban eşeği ve yaban koyunu avı; yabani tahıl, mercimek, fıstık toplama. Doğu Anadolu\'dan (Nemrut ve Bingöl dağları) çıkan obsidyen (volkan camı) en değerli ticaret malı.',
        din: 'Dikili taşlar insan biçimli: T\'nin başı kafa, gövdesinde kollar, eller ve kemer var. Tilki, yaban domuzu, yılan, akbaba kabartmaları; belki ataların ya da ruhların simgesi.',
        yasam: 'İnsanlar ilk kez yerleşik yaşamaya başlıyor. Büyük toplantılarda yabani tahıldan yapılmış bira benzeri içecekler içildiği sanılıyor; dev taş tekneler bulundu.',
        bilgi: 'Göbekli Tepe bilinçli olarak toprakla doldurulup gömüldü; bu sayede 11.000 yıl bozulmadan kaldı. 1994\'te Klaus Schmidt ve Şanlıurfa Müzesi kazıya başladı.' },
      { from: 8200, to: 6500, puan: { eko: 2, ordu: 1, istikrar: 3 }, baskent: 'Yok (en büyük yerleşim: Çatalhöyük)',
        gundem: 'Tarım Devrimi: buğday, arpa, mercimek ekiliyor; koyun ve keçi evcilleştirildi. Konya Ovası\'nda Çatalhöyük kuruldu (MÖ ~7400). Evler bitişik; sokak yok, damlardan merdivenle giriliyor.',
        savas: 'Çatalhöyük\'ün surları yok; bitişik evler duvar gibi koruma sağlıyor. Mızrak ve ok uçları avda ve savunmada kullanılıyor.',
        ekonomi: 'Çiftçilik ve hayvancılık. Kapadokya\'nın Hasandağı obsidyeninden aynalar, bıçaklar ve ok uçları yapılıp Levant\'a, Kıbrıs\'a kadar gönderiliyor.',
        din: 'Evlerin duvarları boğa başları, boynuzlar, leopar kabartmaları ve av sahneleriyle süslü. Ölüler evin tabanının altına, aile ile birlikte gömülüyor.',
        yasam: 'Evler her 60-80 yılda bir yıkılıp eskisinin üstüne yenisi yapılıyor; böylece höyük (yapay tepe) 20 metreye kadar yükseldi. Kadınla erkek arasında beslenme ve çalışma bakımından büyük fark görülmüyor.',
        bilgi: 'Çatalhöyük duvarındaki bir resim, arkasında iki tepeli bir yanardağ (belki Hasandağı) ile köyün planını gösteriyor: bilinen en eski "harita" olabilir.' },
      { from: 6500, to: 3000, puan: { eko: 3, ordu: 2, istikrar: 3 }, baskent: 'Yok (Hacılar, Mersin-Yumuktepe, Değirmentepe…)',
        gundem: 'Çanak çömlek yaygınlaştı, bakır eritilmeye başlandı. Burdur\'daki Hacılar\'da boyalı kaplar ve tanrıça heykelcikleri, Mersin-Yumuktepe\'de surlu bir kale (MÖ ~5000) var. Malatya Arslantepe\'de bilinen ilk saray benzeri yönetim binaları kuruluyor (MÖ ~3300).',
        savas: 'İlk surlar ve metal silahlar. Arslantepe\'de bulunan arsenikli bakır kılıçlar (MÖ ~3300) dünyanın bilinen en eski kılıçları arasında.',
        ekonomi: 'Bakır madenciliği (Ergani), dokumacılık, çömlekçilik. Mezopotamya ile ticaret artıyor.',
        din: 'Bereket tanrıçası heykelcikleri; Çatalhöyük\'teki "oturan kadın" heykelciği gibi örnekler bu geleneği sürdürüyor.',
        yasam: 'Köyler büyüyor, ilk zanaatkâr sınıfı (çömlekçi, demirci değil henüz bakırcı) ortaya çıkıyor.',
        bilgi: 'Arslantepe\'de MÖ ~3300\'den kalma binlerce kil mühür baskısı bulundu: mallar depoya girip çıkarken mühürlenmiş. Bu, yazıdan önceki bir "muhasebe" sistemiydi.' },
      { from: 3000, to: 1950, puan: { eko: 3, ordu: 3, istikrar: 3 }, baskent: 'Truva, Alacahöyük, Kültepe gibi beylik merkezleri',
        gundem: 'Erken Tunç Çağı: kalay ile bakır karıştırılıp tunç yapılıyor. Batıda Truva surlu bir kale kenti oldu; Orta Anadolu\'da Hattilerin beylikleri var. Alacahöyük kral mezarlarında altın, gümüş ve tunçtan güneş kursları ve geyik heykelcikleri çıktı.',
        savas: 'Surlu kale kentler ve tunç silahlar. Beylikler arasında ticaret yolları ve madenler için çekişme.',
        ekonomi: 'Tunç için gereken kalay uzaklardan (belki Orta Asya\'dan) geliyor. Anadolu altın, gümüş ve bakır bakımından zengin; Truva Boğaz ticaretini denetliyor.',
        din: 'Hatti tanrıları: güneş tanrıçası Eştan (Arinna), fırtına tanrısı Taru. Alacahöyük\'ün geyikli ve boğalı "güneş kursları" törenlerde taşınıyordu.',
        yasam: 'Çömlekçi çarkı Anadolu\'ya geldi. Truva\'da kerpiç ve taş evler, saray benzeri "megaron" yapıları var.',
        bilgi: 'Heinrich Schliemann 1873\'te Truva\'da bulduğu altınlara "Priamos\'un Hazinesi" dedi; ama bu eserler Homeros\'un Truva Savaşı\'ndan ~1.000 yıl daha eski çıktı. Hazine bugün Moskova\'daki Puşkin Müzesi\'nde.' },
      { from: 1950, to: 1650, puan: { eko: 5, ordu: 3, istikrar: 4 }, baskent: 'Kaniş (Kültepe), sonra Anitta döneminde de Kaniş/Neşa',
        gundem: 'Asurlu tüccarlar Kayseri yakınlarındaki Kaniş\'te bir ticaret merkezi (karum) kurdu. Eşek kervanlarıyla Asur\'dan kalay ve kumaş getirip Anadolu gümüşü ve altınıyla takas ediyorlar. Yazı (çivi yazısı) Anadolu\'ya bu tüccarlarla geldi: Kültepe\'de 23.000\'den fazla kil tablet bulundu.',
        savas: 'Anadolu beylikleri (Kaniş, Hattuş, Zalpa, Puruşhanda) birbiriyle savaşıyor. Sonunda Kuşşaralı Pithana ve oğlu Anitta Kaniş\'i ve Hattuşa\'yı ele geçirdi (MÖ ~1750).',
        ekonomi: 'Dünyanın ilk "uluslararası ticaret hukuku" burada: sözleşmeler, faiz, ortaklık, borç senetleri, mahkeme kararları tabletlere yazılıyor. Kervanlar 1.000 km\'lik yolu ~6 haftada alıyor.',
        din: 'Asurlu tüccarlar kendi tanrıları Aşur\'a, Anadolulular Hatti ve Nesili (Hitit öncesi) tanrılara tapıyor. Anitta, Hattuşa\'yı yıkıp üstüne yabani ot ektiğini ve lanetlediğini yazdı.',
        yasam: 'Asurlu tüccarlar yerel kadınlarla evleniyor; tabletlerde eşlerin kocalarına yazdığı mektuplar var: "Kumaşlarımı sattın mı, neden para göndermiyorsun?"',
        bilgi: 'Kültepe tabletlerinde geçen "Neşa" dilinden Hititçe çıktı. Hititler kendi dillerine "Nesili" yani "Neşa dili" diyordu: bilinen en eski Hint-Avrupa dili.' }
    ],
    nufus: [[9600, 0.1], [7000, 0.3], [5000, 0.8], [3000, 1.5], [2000, 2], [1650, 2.2]],
    nufusNot: 'Tarih öncesi nüfus için kesin rakam yok; bu sayılar bugünkü Türkiye topraklarının tamamı için kaba tahminlerdir.',
    dunyaOzet: { eko: 'Dünya genelinde avcılık-toplayıcılıktan tarıma geçiş yaşanıyor; MÖ 3000\'den sonra Mezopotamya ve Mısır\'da ilk devletler ve yazı doğdu.', askeri: 'MÖ 3000\'e kadar örgütlü ordular yok; sonra Sümer şehir devletleri ve Akad İmparatorluğu tunç silahlı ordular kurdu.' },
    events: [
      { y: 9600, t: 'Göbekli Tepe\'de ilk dikili taşlı yapılar (yaklaşık)', k: 'm' },
      { y: 8200, t: 'Göbekli Tepe kullanımdan çıktı ve toprakla örtüldü (yaklaşık)', k: 'm' },
      { y: 8500, t: 'Koyun ve keçi evcilleştirildi; Bereketli Hilal\'de tarım başladı', k: 'm' },
      { y: 7400, t: 'Konya Ovası\'nda Çatalhöyük kuruldu', k: 'm' },
      { y: 6000, t: 'Çatalhöyük terk edilmeye başladı', k: 'm' },
      { y: 5000, t: 'Mersin-Yumuktepe\'de surlu kale', k: 'm' },
      { y: 3300, t: 'Arslantepe\'de ilk saray benzeri yönetim binası ve kılıçlar', k: 'm' },
      { y: 3000, t: 'Truva I kurulduğu (yaklaşık); Tunç Çağı başladı', k: 'm' },
      { y: 2500, t: 'Alacahöyük kral mezarları', k: 'm' },
      { y: 1950, t: 'Asurlu tüccarlar Kaniş\'te ticaret kolonisi (karum) kurdu', k: 'm' },
      { y: 1750, t: 'Anitta, Hattuşa\'yı yıktı ve Kaniş\'i başkent yaptı', k: 'm' },
      { y: 3100, t: 'Mısır birleşti (Narmer)', k: 'w' },
      { y: 2560, t: 'Mısır\'da Büyük Piramit tamamlandı', k: 'w' },
      { y: 2334, t: 'Akad İmparatorluğu kuruldu', k: 'w' },
      { y: 1754, t: 'Hammurabi Kanunları (Babil)', k: 'w' }
    ],
    world: [
      { from: 9600, to: 7000, yer: 'Bereketli Hilal', t: 'Eriha (Jericho) ve Levant\'ta ilk köyler; tarım burada da başlıyor.' },
      { from: 9600, to: 3000, yer: 'Avrupa', t: 'Avcı-toplayıcılar; MÖ 6500\'den sonra tarım Anadolu\'dan Balkanlar\'a ve Avrupa\'ya yayıldı.' },
      { from: 7000, to: 3000, yer: 'Çin', t: 'Sarı Irmak boyunca darı, Yangtze\'de pirinç tarımı.' },
      { from: 4000, to: 2000, yer: 'Mezopotamya', t: 'Sümer şehirleri: Uruk, Ur; çivi yazısı icat edildi (MÖ ~3300).' },
      { from: 3100, to: 1650, yer: 'Mısır', t: 'Firavunlar Mısır\'ı: piramitler, hiyeroglifler.' },
      { from: 3000, to: 2000, yer: 'Britanya', t: 'Stonehenge dikiliyor.' },
      { from: 2600, to: 1900, yer: 'İndus vadisi', t: 'Harappa ve Mohenjo-daro şehirleri.' },
      { from: 1900, to: 1650, yer: 'Babil', t: 'Hammurabi\'nin krallığı.' }
    ],
    sites: [{ ad: 'GÖBEKLİ TEPE · URFA', wx: 1000 }, { ad: 'ARSLANTEPE · MALATYA', wx: 1900 }, { ad: 'KANİŞ · KAYSERİ', wx: 3300 }, { ad: 'ALACAHÖYÜK', wx: 3750 }, { ad: 'HATTUŞ', wx: 3950 }, { ad: 'ÇATALHÖYÜK · KONYA', wx: 5200 }, { ad: 'HACILAR · BURDUR', wx: 6000 }, { ad: 'TRUVA', wx: 8000 }],
    cliffs: [{ wx: 2400, w: 1400, h: 120, peak: 0.45 }],
    monuments: [
      { id: 'gobeklitepe', ad: 'Göbekli Tepe', yer: 'Şanlıurfa', wx: 1000, type: 'pillars', b: 60, h: 6, n: 12, start: 9600, end: 9000, vol: 9e4, ruin: 8200 },
      { id: 'catalhoyuk', ad: 'Çatalhöyük', yer: 'Konya Ovası', wx: 5200, type: 'mound', evler: true, b: 220, h: 20, start: 7400, end: 6400, vol: 1.2e5, ruin: 5900 },
      { id: 'arslantepe', ad: 'Arslantepe sarayı', yer: 'Malatya', wx: 1900, type: 'mound', evler: true, renk: '#c9a679', b: 120, h: 14, start: 3400, end: 3200, vol: 5e4 },
      { id: 'alacahoyuk', ad: 'Alacahöyük kral mezarları', yer: 'Çorum', wx: 3750, type: 'mound', b: 80, h: 8, start: 2550, end: 2450, vol: 4e4 },
      { id: 'truva', ad: 'Truva (Troia)', yer: 'Çanakkale', wx: 8000, bank: 'near', type: 'citadel', tepe: true, b: 120, h: 30, start: 3000, end: 2900, vol: 8e4 },
      { id: 'kanis', ad: 'Kaniş karumu (Kültepe)', yer: 'Kayseri', wx: 3300, bank: 'near', type: 'city', b: 240, n: 20, hk: 0.32, wall: true, start: 1950, end: 1920, vol: 7e4 }
    ],
    hizli: [{ ad: 'Göbekli Tepe', y: 9500 }, { ad: 'Gömüldü', y: 8150 }, { ad: 'Çatalhöyük', y: 7000 }, { ad: 'Arslantepe', y: 3300 }, { ad: 'Truva I', y: 2950 }, { ad: 'Alacahöyük', y: 2500 }, { ad: 'Kaniş', y: 1900 }, { ad: 'Anitta', y: 1740 }],
    bilgi: {
      gobeklitepe: { ikon: '🗿', yaptiran: 'Avcı-toplayıcı topluluklar', donem: 'MÖ ~9600-8200 (Çanak çömleksiz Neolitik)', mimar: 'Bilinmiyor', sure: 'Yüzyıllar boyunca katman katman',
        neden: 'Büyük olasılıkla bölgedeki toplulukların toplanıp tören yaptığı, ziyafet verdiği ortak bir kutsal alan. Son kazılarda yakınlarda konutlar da bulundu; yani yalnızca tapınak değil, yerleşim de olabilir.',
        onem: 'İnsanlığın bilinen en eski anıtsal yapılarından biri. "Önce tarım, sonra tapınak" fikrini tersine çevirdi: insanlar tarımdan önce dev taşları dikecek kadar örgütlenebiliyordu. 2018\'de UNESCO Dünya Mirası oldu.',
        teknik: [['Dikili taşlar', 'T biçimli, 3-6 m, en ağırı ~10 ton'], ['Yapılar', 'Çapı 10-30 m daire biçimli alanlar (A, B, C, D)'], ['Kabartmalar', 'Tilki, yaban domuzu, yılan, akbaba, akrep, aslan'], ['Yer', 'Örencik köyü yakını, Urfa\'nın 15 km kuzeydoğusu']],
        nasil: 'Taşlar yakındaki kalker yataklarından çakmaktaşı aletlerle oyulup çıkarıldı; yarım kalmış 7 metrelik bir taş hâlâ ocakta duruyor. Taşınmaları için onlarca kişinin iplerle ve kaldıraçlarla çalışması gerekiyordu.',
        bugun: 'Üstü dev bir koruma çatısıyla örtüldü ve ziyarete açık. Buluntular Şanlıurfa Arkeoloji Müzesi\'nde. Yakındaki Karahantepe ve "Taş Tepeler" alanlarında benzer yapılar kazılıyor.',
        ilginc: 'D yapısının orta taşlarından birinin üstünde, akbaba ve akreplerin arasında bir "güneş" ve "yıldız" figürü var; bazı araştırmacılar bunun bir gök olayını (belki bir kuyruklu yıldızı) anlattığını öne sürdü, ama bu tartışmalı.' },
      catalhoyuk: { ikon: '🏘️', yaptiran: 'Neolitik çiftçiler', donem: 'MÖ ~7400-6000', mimar: '—', sure: '~1.400 yıl, 18 yapı katı',
        neden: 'Verimli Çarşamba çayı deltasında, kil ve su bol bir yerde büyük bir köy.',
        onem: 'Dünyanın bilinen en eski ve en büyük köy-kentlerinden biri. Tarımın ilk dönemini, ev içi resimlerini ve toplumsal eşitliği bu kadar ayrıntılı gösteren başka yer yok. UNESCO Dünya Mirası (2012).',
        teknik: [['Nüfus', '3.500-8.000 kişi'], ['Alan', '~13 hektar, 21 m yüksekliğinde höyük'], ['Evler', 'Kerpiç, bitişik, kapısız; damdan merdivenle giriş'], ['Kazı', 'James Mellaart (1961-65), Ian Hodder (1993-2017)']],
        nasil: 'Evler güneşte kurutulmuş kerpiçten yapılıp beyaz kille sıvandı. Her ev eskiyince içi doldurulup aynı plan üzerine yenisi yapıldı; bu yüzden höyük yükseldi.',
        bugun: 'Konya\'nın Çumra ilçesinde, koruma çatıları altında ziyarete açık. Duvar resimleri ve heykelcikler Ankara Anadolu Medeniyetleri Müzesi\'nde.',
        ilginc: 'Ünlü "leoparlı tahtta oturan kadın" heykelciği aslında bir tahıl ambarında bulundu.' },
      arslantepe: { ikon: '🏛️', yaptiran: 'Erken yöneticiler', donem: 'MÖ ~3400-3200', mimar: '—', sure: '—',
        neden: 'Tahıl ve malların toplanıp dağıtıldığı bir yönetim merkezi.', onem: 'Bilinen en eski "saray" yapılarından biri ve en eski kılıçlar. UNESCO Dünya Mirası (2021).',
        teknik: [['Yer', 'Malatya, Battalgazi'], ['Buluntu', '9 arsenikli tunç kılıç, binlerce mühür baskısı']], nasil: 'Kerpiç duvarlar, kırmızı-siyah duvar resimleri.', bugun: 'Açık hava müzesi olarak ziyarete açık.', ilginc: 'Sonraki çağda burası Geç Hitit krallığı Melid\'in başkenti oldu; ünlü aslan heykelleri ona adını verdi: Arslantepe.' },
      alacahoyuk: { ikon: '☀️', yaptiran: 'Hatti beyleri', donem: 'MÖ ~2500', mimar: '—', sure: '—',
        neden: 'Beylerin ve ailelerinin hazineleriyle gömüldüğü kral mezarları.', onem: 'Altın, gümüş ve tunç eserleriyle Tunç Çağı Anadolu\'sunun ne kadar zengin olduğunu gösterdi. Sonra Hitit kenti oldu: Sfenksli Kapı.',
        teknik: [['Mezar', '14 kral mezarı'], ['Buluntu', 'Güneş kursları, geyik heykelcikleri, altın diadem']], nasil: 'Taşla örülmüş dikdörtgen çukur mezarlar, üstü ahşap kirişlerle örtüldü; kurban edilen öküzlerin başları üstüne kondu.', bugun: 'Çorum Alaca ilçesinde ören yeri ve müze. Güneş kursu bugün Ankara\'nın simgelerinden.', ilginc: 'Ankara\'daki Sıhhiye Hitit Anıtı aslında Alacahöyük\'ün Tunç Çağı geyikli güneş kursundan esinlendi; yani "Hitit" değil, ondan ~1.000 yıl eski.' },
      truva: { ikon: '🏰', yaptiran: 'Truva beyleri', donem: 'MÖ ~3000 (Truva I) – MS ~500 (9 katman)', mimar: '—', sure: '3.500 yıl, 9 şehir üst üste',
        neden: 'Çanakkale Boğazı\'nın girişini gören bir tepede; Ege ile Karadeniz arasındaki ticareti denetlemek için.',
        onem: 'Homeros\'un İlyada destanındaki Truva Savaşı\'nın geçtiği yer kabul edilir. Dokuz yapı katıyla Anadolu ve Ege tarihinin bir "zaman sütunu". UNESCO Dünya Mirası (1998).',
        teknik: [['Katmanlar', 'Truva I-IX (MÖ 3000 – MS 500)'], ['Destan katmanı', 'Truva VI-VIIa (MÖ ~1300-1180)'], ['Kazı', 'Schliemann (1871), Dörpfeld, Blegen, Korfmann']], nasil: 'Taş temeller üzerinde kerpiç duvarlar; Truva VI\'nın eğimli kesme taş surları çok güçlüydü.', bugun: 'Tevfikiye köyünde ören yeri, yanında 2018\'de açılan Troya Müzesi. Girişte 1975\'te yapılan dev tahta at durur.', ilginc: 'Hitit belgelerinde geçen "Wiluşa" kenti büyük olasılıkla Truva\'dır (Yunanca İlion). Hitit kralı II. Muvatalli, Wiluşa kralı Alakšandu ile antlaşma yaptı.' },
      kanis: { ikon: '🐪', yaptiran: 'Kaniş beyleri ve Asurlu tüccarlar', donem: 'MÖ ~1950-1750', mimar: '—', sure: '—',
        neden: 'Asur ile Anadolu arasındaki kalay-kumaş / gümüş-altın ticaretinin merkezi.', onem: 'Anadolu\'da yazının başladığı yer: 23.000\'den fazla çivi yazılı tablet. Bunlar Anadolu tarihinin ilk yazılı belgeleri.',
        teknik: [['Yer', 'Kültepe, Kayseri\'nin 20 km kuzeydoğusu'], ['Kısımlar', 'Yukarı şehir (saray), aşağı şehir (karum)'], ['Kazı', 'Tahsin Özgüç (1948-2005), Fikri Kulakoğlu']], nasil: 'Taş temelli kerpiç evler; tüccarlar arşivlerini evlerinin odalarındaki çömleklerde saklıyordu.', bugun: 'Ören yeri ziyarete açık; tabletler Ankara ve Kayseri müzelerinde.', ilginc: 'Tabletlerden biri bir kadının kocasına "Kızın büyüdü, gel ve onu tanrıya adayalım" diye yazdığı mektup. Başka biri dünyanın bilinen en eski "boşanma belgelerinden".' }
    },
    ulke: [
      { ad: 'Genel bakış', ikon: '🧭', html: `<p>Anadolu (Yunanca <b>Anatolia</b>: "güneşin doğduğu yer"), Asya ile Avrupa arasında bir köprü. Tarihin en eski köylerinden bazıları burada kuruldu: <b>Göbekli Tepe</b> (MÖ ~9600) ve <b>Çatalhöyük</b> (MÖ ~7400).</p>
        <p>Tarım Bereketli Hilal\'den, yani Güneydoğu Anadolu\'dan yayıldı; buğdayın ilk evcilleştirildiği yerlerden biri Diyarbakır\'daki <b>Karacadağ</b>.</p>
        <p>Tunç Çağı\'nda Hattiler ve Truva gibi kale kentler ortaya çıktı. MÖ ~1950\'de Asurlu tüccarlar yazıyı getirdi ve Anadolu tarih çağına girdi.</p>` },
      { ad: 'Halklar', ikon: '👥', html: `<ul><li><b>Neolitik çiftçiler:</b> Avrupa\'nın ilk çiftçileri genetik olarak büyük ölçüde Anadolu\'dan göç etti.</li><li><b>Hattiler:</b> Orta Anadolu\'nun yerli halkı.</li><li><b>Luviler:</b> Güney ve Batı Anadolu\'da, Hint-Avrupa dili konuşan halk.</li><li><b>Nesililer (Hititler):</b> Kaniş çevresinde.</li><li><b>Hurriler:</b> Güneydoğuda; dilleri Urartucaya akraba.</li><li><b>Asurlu tüccarlar:</b> Mezopotamya\'dan gelen konuklar.</li></ul>` },
      { ad: 'Coğrafya', ikon: '⛰️', html: `<p>Ortada yüksek bir yayla (Orta Anadolu), çevresinde Karadeniz ve Toros dağları. Kızılırmak (1.355 km), Fırat ve Dicle\'nin kaynakları burada. Yanardağlar (Hasandağı, Erciyes, Nemrut, Ağrı) obsidyen ve verimli toprak sağladı.</p>` }
    ]
  });

  // ================= 2. HİTİTLER =================
  window.PLACES.push({
    id: 'anadolu-hitit', sira: 2, kisa: 'Hitit İmparatorluğu', aralikAd: 'MÖ 1650 – 1180',
    baslik: 'Hattuşa · Kadeş · Bin tanrılı halk',
    ulkeAlt: 'Hitit Krallığı ve İmparatorluğu (MÖ ~1650 – 1180)',
    from: 1650, to: 1180, start: 1600,
    not: 'Hitit kral tarihleri "orta kronolojiye" göredir ve 10-50 yıl kayabilir.',
    baskent: 'Hattuşa (bugün Çorum, Boğazkale)',
    sahne: { kizak: false, katipYok: false, araba: true, giyim: 'antik' },
    dynasties: [
      { from: 1650, to: 1400, ad: 'Hitit Eski Krallığı', renk: '#9a4a2a' },
      { from: 1400, to: 1180, ad: 'Hitit İmparatorluğu', renk: '#b8742a' }
    ],
    rulers: [
      { from: 1650, to: 1620, ad: 'I. Hattuşili (Labarna)', kisa: 'I. Hattuşili', kim: 'Başkenti Kuşşara\'dan Hattuşa\'ya taşıdı ve adını şehirden aldı ("Hattuşalı"). Kuzey Suriye\'ye seferler yaptı.' },
      { from: 1620, to: 1590, ad: 'I. Murşili', kisa: 'I. Murşili', kim: 'Halep\'i aldı ve MÖ 1595\'te 2.000 km yürüyüp Babil\'i yağmaladı; Hammurabi hanedanını yıktı. Dönüşte bir saray suikastıyla öldürüldü.' },
      { from: 1590, to: 1500, ad: 'Taht kavgaları ve Telipinu', kisa: 'Telipinu', kim: 'Suikastlarla geçen yıllardan sonra Telipinu (MÖ ~1525) tahta geçiş kurallarını yazan "Telipinu Fermanı"nı çıkardı: anayasaya benzeyen ilk metinlerden.' },
      { from: 1500, to: 1350, ad: 'I. Tuthaliya, Arnuvanda ve diğerleri', kisa: 'Orta dönem', kim: 'Hitit krallığı Mitanni ve Kaşkalarla boğuşuyor; Hattuşa bir ara Kaşkalar tarafından yakıldı.' },
      { from: 1350, to: 1322, ad: 'I. Şuppiluliuma', kisa: 'Şuppiluliuma', kim: 'Hititleri imparatorluk yapan büyük kral. Mitanni\'yi yıktı, Suriye\'yi aldı. Tutankamon\'un dul eşi ona mektup yazıp oğullarından biriyle evlenmek istedi.' },
      { from: 1322, to: 1295, ad: 'II. Murşili', kisa: 'II. Murşili', kim: 'Batı Anadolu\'daki Arzava\'yı yendi. Salgın sırasında tanrılara yazdığı "Veba Duaları" ünlüdür.' },
      { from: 1295, to: 1272, ad: 'II. Muvatalli', kisa: 'Muvatalli', kim: 'Başkenti geçici olarak güneydeki Tarhuntaşşa\'ya taşıdı. MÖ 1274\'te Kadeş\'te Mısır firavunu II. Ramses ile savaştı.' },
      { from: 1272, to: 1267, ad: 'III. Murşili (Urhi-Teşup)', kisa: 'Urhi-Teşup', kim: 'Amcası Hattuşili tarafından tahttan indirilip sürgüne gönderildi; sonunda Mısır\'a sığındı.' },
      { from: 1267, to: 1237, ad: 'III. Hattuşili ve Kraliçe Puduhepa', kisa: 'III. Hattuşili', kim: 'MÖ 1259\'da II. Ramses ile bilinen en eski yazılı barış antlaşmasını imzaladı. Eşi Puduhepa kendi mührü olan, yabancı krallarla yazışan güçlü bir kraliçeydi.' },
      { from: 1237, to: 1209, ad: 'IV. Tuthaliya', kisa: 'IV. Tuthaliya', kim: 'Yazılıkaya açık hava tapınağını son şeklini verdi; Hattuşa\'nın yukarı şehrinde onlarca tapınak yaptırdı. Asur\'a karşı Nihriya\'da yenildi.' },
      { from: 1209, to: 1180, ad: 'II. Şuppiluliuma', kisa: 'II. Şuppiluliuma', kim: 'Son Hitit büyük kralı. Kıbrıs önlerinde bilinen ilk deniz savaşlarından birini kazandı; ama kıtlık ve "Deniz Kavimleri" göçleri sırasında imparatorluk çöktü.' }
    ],
    eras: [
      { from: 1650, to: 1590, puan: { eko: 3, ordu: 4, istikrar: 3 }, baskent: 'Hattuşa',
        gundem: 'I. Hattuşili, Anitta\'nın lanetlediği Hattuşa\'yı başkent yaptı. Hititler Hatti kültürünü, tanrılarını ve törenlerini benimsedi; ama kendi Hint-Avrupa dillerini (Nesili) korudu. Kral "Tabarna" ve kraliçe "Tavananna" unvanlarını kullanıyor.',
        savas: 'Hafif, altı kollu tekerlekli savaş arabaları (üç kişilik: sürücü, mızrakçı, kalkancı) Hitit ordusunun en güçlü silahı. I. Murşili Halep\'i ve Babil\'i (MÖ 1595) yağmaladı.',
        ekonomi: 'Tarım (buğday, arpa), hayvancılık ve madencilik. Hitit kanunlarında bir tarlanın, bir öküzün, bir günlük işçinin fiyatı tek tek yazılı.',
        din: '"Hatti\'nin bin tanrısı": Arinna\'nın Güneş Tanrıçası ve Fırtına Tanrısı Tarhunna en büyükleri. Hititler fethettikleri halkların tanrılarını da kendi tanrıları arasına aldı.',
        yasam: 'Hitit kanunları dönemine göre yumuşak: çoğu suç için ölüm cezası yerine tazminat ödeniyor. Kadınlar mülk sahibi olabiliyor ve boşanabiliyor.',
        bilgi: 'Hititçe çivi yazısıyla yazıldı ama yaklaşık 3.000 yıl unutuldu. 1915\'te Çek dilbilimci Bedřich Hrozný, "nu ninda-an ezzatteni vatar-ma ekutteni" (ekmek yiyeceksiniz, su içeceksiniz) cümlesini çözerek Hititçenin Hint-Avrupa dili olduğunu kanıtladı.' },
      { from: 1590, to: 1350, puan: { eko: 3, ordu: 2, istikrar: 2 }, baskent: 'Hattuşa (bir ara Şapinuva)',
        gundem: 'Taht kavgaları ve suikastlar krallığı zayıflattı. Telipinu Fermanı tahta kimin geçeceğini kurala bağladı ve krallar meclisi "Panku" krala bile yargı yetkisine sahip oldu. Hurri kültürü (tanrılar, büyü, dil) Hitit sarayına giriyor.',
        savas: 'Güneydoğuda Hurri-Mitanni Krallığı, kuzeyde Karadeniz dağlarındaki Kaşkalar en büyük düşmanlar. Kaşkalar bir ara Hattuşa\'yı yakıp yıktı.',
        ekonomi: 'Kuzey Suriye ticaret yollarının bir bölümü kaybedildi; ekonomi içe döndü. Devlet tahıl ambarlarında büyük stoklar tutuluyor: Hattuşa\'daki silolarda 6.000 ton tahıl saklanabiliyordu.',
        din: 'Kral aynı zamanda baş rahip: bayramlarda şehir şehir dolaşıp törenlere katılmak zorunda; bazen savaşı yarıda bırakıp bayram için başkente döndüğü oluyordu.',
        yasam: 'Kâtipler Babil çivi yazısını Hititçeye uyarlıyor; resmi yazışmalarda Akadca kullanılıyor (dönemin diplomasi dili).',
        bilgi: 'Hitit kralları dünyanın ilk "devlet arşivlerinden" birini tuttu: Hattuşa\'da 30.000\'den fazla tablet bulundu.' },
      { from: 1350, to: 1260, puan: { eko: 5, ordu: 5, istikrar: 4 }, baskent: 'Hattuşa (Muvatalli döneminde Tarhuntaşşa)',
        gundem: 'I. Şuppiluliuma Mitanni\'yi yıkıp Suriye\'yi aldı; Hititler Mısır, Babil ve Asur ile aynı düzeyde bir "büyük krallık" oldu. Krallar birbirine "kardeşim" diye mektup yazıyor. MÖ 1274\'te II. Muvatalli Kadeş\'te II. Ramses\'in ordusunu pusuya düşürdü.',
        savas: 'Kadeş Savaşı (MÖ 1274): tarihin en büyük savaş arabası savaşı; Hititlerin ~2.500-3.500 arabası vardı. Mısır duvarlarında zafer olarak anlatılsa da Kadeş Hitit elinde kaldı.',
        ekonomi: 'Suriye ticaret kentleri (Karkamış, Halep, Ugarit) Hitit vasalı; liman kenti Ugarit, Akdeniz ticaretinin kapısı. Hititler demiri işleyebiliyor ama çok az ve çok değerli.',
        din: 'II. Murşili\'nin Veba Duaları: kral, babasının bir yeminini bozduğu için tanrıların salgın gönderdiğine inanıp halkı adına özür diliyor.',
        yasam: 'Hitit sarayında Hurrice şarkılar ve müzik notaları: Ugarit\'te bulunan "Hurri İlahisi" dünyanın bilinen en eski müzik notalarından.',
        bilgi: 'Tutankamon\'un dul eşi (büyük olasılıkla Ankesenamon) Şuppiluliuma\'ya "Kocam öldü, oğlum yok; bana oğullarından birini gönder, kocam olsun" diye yazdı. Gönderilen prens Zannanza yolda öldürüldü.' },
      { from: 1260, to: 1180, puan: { eko: 3, ordu: 3, istikrar: 2 }, baskent: 'Hattuşa',
        gundem: 'Kadeş Antlaşması (MÖ 1259): III. Hattuşili ile II. Ramses arasında bilinen en eski yazılı barış antlaşması; bir kopyası bugün New York\'taki Birleşmiş Milletler binasında asılı. IV. Tuthaliya Yazılıkaya\'yı tamamladı. Ama yüzyılın sonunda kuraklık, kıtlık ve göçler başladı.',
        savas: 'Asur\'a karşı Nihriya yenilgisi (MÖ ~1237). II. Şuppiluliuma Kıbrıs\'ı denizden aldı. MÖ ~1180\'de Hattuşa terk edildi ve yakıldı; imparatorluk dağıldı.',
        ekonomi: 'Kıtlık o kadar ağır ki Mısır Hititlere gemilerle tahıl gönderiyor. Ugarit\'ten bir mektup: "Bu bir ölüm kalım meselesi!"',
        din: 'Yazılıkaya\'da 12 yeraltı tanrısı, Teşup ve Hepat önderliğinde tanrılar alayı kabartmaları.',
        yasam: 'Kraliçe Puduhepa yabancı kraliçelerle yazışıyor, mahkemelerde hüküm veriyor ve dinî reformlar yapıyor.',
        bilgi: 'Hitit İmparatorluğu çökünce güneydoğuda "Geç Hitit" krallıkları (Karkamış, Malatya, Sam\'al) 500 yıl daha yaşadı; bunlar Luvi hiyeroglifleri kullandı. İncil\'deki "Hititler" de aslında bu krallıklardır.' }
    ],
    nufus: [[1650, 2.2], [1400, 2.5], [1300, 3], [1200, 2.5], [1180, 2]],
    nufusNot: 'Hitit devletinin nüfusu için kesin bilgi yok; Hattuşa\'nın en kalabalık döneminde 10.000-15.000 kişi yaşadığı sanılıyor.',
    dunyaOzet: { eko: 'Geç Tunç Çağı\'nın uluslararası düzeni: Mısır, Hitit, Babil, Asur ve Mitanni krallarının hediye ve evlilikle bağlı olduğu bir "büyük güçler kulübü". Ugarit ve Miken gemileri Akdeniz\'de bakır, kalay, zeytinyağı taşıyor.', askeri: 'Savaş arabası çağı. MÖ 1200 civarında "Tunç Çağı çöküşü": Hitit, Miken ve birçok kent yıkıldı; Mısır zor da olsa ayakta kaldı.' },
    events: [
      { y: 1650, t: 'I. Hattuşili Hattuşa\'yı başkent yaptı', k: 'm' },
      { y: 1595, t: 'I. Murşili Babil\'i yağmaladı', k: 'm' },
      { y: 1590, t: 'I. Murşili suikastla öldürüldü', k: 'm' },
      { y: 1525, t: 'Telipinu Fermanı: tahta geçiş kuralları', k: 'm' },
      { y: 1400, t: 'Kaşkalar Hattuşa\'yı yaktı (yaklaşık)', k: 'm' },
      { y: 1344, t: 'I. Şuppiluliuma Mitanni\'yi yendi', k: 'm' },
      { y: 1324, t: 'Tutankamon\'un dul eşinin mektubu; prens Zannanza öldürüldü', k: 'm' },
      { y: 1274, t: 'Kadeş Savaşı: II. Muvatalli – II. Ramses', k: 'm' },
      { y: 1259, t: 'Kadeş Barış Antlaşması imzalandı', k: 'm' },
      { y: 1245, t: 'II. Ramses bir Hitit prensesiyle evlendi', k: 'm' },
      { y: 1237, t: 'Nihriya Savaşı: Asur\'a yenilgi', k: 'm' },
      { y: 1220, t: 'Yazılıkaya kabartmaları tamamlandı (yaklaşık)', k: 'm' },
      { y: 1190, t: 'Kıtlık; Mısır\'dan tahıl gemileri', k: 'm' },
      { y: 1180, t: 'Hattuşa terk edildi ve yandı; Truva VIIa yıkıldı', k: 'm' },
      { y: 1550, t: 'Mısır\'da Yeni Krallık başladı', k: 'w' },
      { y: 1353, t: 'Mısır\'da Akhenaton', k: 'w' },
      { y: 1177, t: 'Deniz Kavimleri Mısır\'a saldırdı', k: 'w' }
    ],
    world: [
      { from: 1650, to: 1180, yer: 'Mısır', t: 'Yeni Krallık: Hatşepsut, Tutankamon, II. Ramses.' },
      { from: 1600, to: 1200, yer: 'Yunanistan', t: 'Miken saraylı krallıkları (Akhaialılar; Hititçe "Ahhiyava").' },
      { from: 1600, to: 1350, yer: 'Kuzey Mezopotamya', t: 'Hurri-Mitanni Krallığı: Hititlerin büyük rakibi.' },
      { from: 1400, to: 1180, yer: 'Asur', t: 'Orta Asur Krallığı güçleniyor.' },
      { from: 1600, to: 1180, yer: 'Çin', t: 'Şang Hanedanı: kemik yazıtları, tunç döküm.' }
    ],
    sites: [{ ad: 'KARKAMIŞ', wx: 1300 }, { ad: 'MALATYA', wx: 1900 }, { ad: 'KANİŞ', wx: 3300 }, { ad: 'ALACAHÖYÜK', wx: 3720 }, { ad: 'HATTUŞA', wx: 3950 }, { ad: 'YAZILIKAYA', wx: 4180 }, { ad: 'ARZAVA (Apaşa/Efes)', wx: 7000 }, { ad: 'WİLUŞA (TRUVA)', wx: 8000 }],
    cliffs: [{ wx: 4150, w: 600, h: 70, peak: 0.5 }],
    monuments: [
      { id: 'hattusa', ad: 'Hattuşa: surlar ve Büyük Tapınak', yer: 'Boğazkale (Çorum)', wx: 3950, type: 'citadel', tepe: true, b: 220, h: 40, start: 1650, end: 1550, vol: 2e5, ruin: 1180 },
      { id: 'aslanlikapi', ad: 'Aslanlı Kapı ve Yerkapı', yer: 'Hattuşa', wx: 3950, bank: 'near', type: 'citadel', b: 90, h: 18, start: 1300, end: 1260, vol: 6e4, ruin: 1180 },
      { id: 'yazilikaya', ad: 'Yazılıkaya açık hava tapınağı', yer: 'Hattuşa yakını', wx: 4180, type: 'mound', renk: '#b9ab94', b: 90, h: 16, start: 1250, end: 1220, vol: 4e4, ruin: 1180 },
      { id: 'sfenkslikapi', ad: 'Alacahöyük Sfenksli Kapı', yer: 'Alacahöyük (Çorum)', wx: 3720, bank: 'near', type: 'citadel', b: 70, h: 14, start: 1400, end: 1380, vol: 3e4, ruin: 1180 },
      { id: 'truva6', ad: 'Truva VI surları (Wiluşa)', yer: 'Çanakkale', wx: 8000, bank: 'near', type: 'citadel', tepe: true, b: 150, h: 34, start: 1700, end: 1650, vol: 9e4, ruin: 1180 },
      ...window.ANADOLU_ESKI(['catalhoyuk', 'gobeklitepe'])
    ],
    hizli: [{ ad: 'Hattuşa', y: 1640 }, { ad: 'Babil yağması', y: 1595 }, { ad: 'Telipinu', y: 1525 }, { ad: 'Şuppiluliuma', y: 1340 }, { ad: 'Kadeş', y: 1274 }, { ad: 'Barış', y: 1259 }, { ad: 'Yazılıkaya', y: 1225 }, { ad: 'Çöküş', y: 1182 }],
    bilgi: {
      hattusa: { ikon: '🏰', yaptiran: 'I. Hattuşili; genişleten IV. Tuthaliya ve II. Şuppiluliuma', donem: 'MÖ ~1650-1180', mimar: 'Hitit saray ustaları', sure: '~470 yıl boyunca büyüdü',
        neden: 'Kuzey Anadolu\'nun dağlık, sulu ve kolay savunulan bir vadisinde; Kaşkalara ve güneydeki düşmanlara karşı.',
        onem: 'Hitit İmparatorluğu\'nun başkenti; Mısır\'dan Babil\'e uzanan dünyanın yönetildiği şehirlerden biri. 30.000 tabletlik arşivi Tunç Çağı tarihinin en büyük kaynaklarından. UNESCO Dünya Mirası (1986).',
        teknik: [['Alan', '~180 hektar'], ['Surlar', '~6 km, kuleli çifte duvar'], ['Tapınaklar', 'Büyük Tapınak (Fırtına Tanrısı ve Güneş Tanrıçası) ve yukarı şehirde ~30 tapınak'], ['Kapılar', 'Aslanlı Kapı, Kral Kapısı, Sfenksli Kapı, Yerkapı tüneli']],
        nasil: 'Dev, düzensiz kesilmiş taşlardan (bazıları 10 tondan ağır) temeller; üstünde kerpiç duvarlar ve ahşap kirişler. Yerkapı\'nın altında 70 m\'lik bindirme tonozlu taş tünel var.',
        bugun: 'Boğazkale\'de ören yeri. 2005\'te 65 m\'lik sur parçası eski tekniklerle (kerpiç) yeniden yapıldı. Tabletler Ankara Anadolu Medeniyetleri Müzesi ve İstanbul Arkeoloji Müzesi\'nde.',
        ilginc: 'Hattuşa\'nın bulunduğu Büyükkale\'de, Kadeş Antlaşması\'nın Hititçe-Akadca kil tablet kopyası bulundu. Mısırca kopyası Karnak tapınağının duvarında kazılı.' },
      aslanlikapi: { ikon: '🦁', yaptiran: 'Hitit kralları (MÖ 13. yy)', donem: 'MÖ ~1300', mimar: '—', sure: '—', neden: 'Şehrin batı girişini korumak ve kötü ruhları uzak tutmak.', onem: 'Hitit sanatının en tanınan eseri. İki aslan, kemerli kapının iki yanında taştan oyulmuş.', teknik: [['Aslanlar', 'Tek taştan, ~2 m'], ['Yerkapı', 'Sfenksli kapı ve 70 m\'lik tünel']], nasil: 'Aslanlar kapı söveleri ile tek parça oyuldu.', bugun: 'Yerinde duruyor (biri onarılmış).', ilginc: 'Yerkapı\'nın sfenksleri 1917\'de Almanya\'ya götürüldü; 2011\'de Türkiye\'ye geri döndü ve bugün Boğazkale Müzesi\'nde.' },
      yazilikaya: { ikon: '🪨', yaptiran: 'III. Hattuşili ve IV. Tuthaliya', donem: 'MÖ ~1250-1220', mimar: '—', sure: '—', neden: 'Yılbaşı (bahar) bayramının yapıldığı kutsal açık hava tapınağı.', onem: 'Hitit dinini en iyi gösteren eser: 64 tanrı ve tanrıça bir alay hâlinde kayaya oyulmuş.', teknik: [['Büyük oda', 'Tanrılar ve tanrıçalar alayı, ortada Teşup ve Hepat'], ['Küçük oda', 'Kılıç tanrısı, 12 yeraltı tanrısı, IV. Tuthaliya']], nasil: 'Doğal kaya yarıklarının duvarlarına kabartma.', bugun: 'Hattuşa\'nın 2 km kuzeydoğusunda ziyarete açık.', ilginc: '12 yeraltı tanrısının koşar adım yürüyüşü o kadar düzenlidir ki bazıları bunu bir "takvim" olarak yorumladı.' },
      sfenkslikapi: { ikon: '🗿', yaptiran: 'Hitit kralları', donem: 'MÖ ~1400', mimar: '—', sure: '—', neden: 'Alacahöyük kentinin tören kapısı.', onem: 'Mısır sfenkslerinden esinlenmiş ama Hitit tarzında iki dev sfenks ve kabartmalar (kral ve kraliçe bir boğaya tapınıyor).', teknik: [['Sfenksler', '~2,5 m']], nasil: 'Andezit taşından.', bugun: 'Yerinde; kabartmaların orijinalleri Ankara\'da.', ilginc: 'Kabartmalarda hokkabazlar, bir kılıç yutucu ve çalgıcılar da var.' },
      truva6: { ikon: '🐴', yaptiran: 'Wiluşa kralları', donem: 'MÖ ~1700-1180', mimar: '—', sure: '—', neden: 'Boğaz\'ı denetleyen zengin kale.', onem: 'Homeros\'un anlattığı Truva büyük olasılıkla Truva VI ya da VIIa. Hititler Wiluşa ile antlaşmalar yaptı.', teknik: [['Sur', 'Eğimli kesme taş, 5 m kalınlık'], ['Aşağı şehir', 'Korfmann\'a göre ~27 hektar, 5.000-10.000 kişi']], nasil: 'Düzgün kesme taş surlar ve kuleler.', bugun: 'Ören yerinde en etkileyici kalıntılar.', ilginc: 'Truva VIIa MÖ ~1180\'de yangınla yıkıldı; kalıntılarda ok uçları ve gömülmemiş cesetler bulundu.' }
    },
    ulke: [
      { ad: 'Genel bakış', ikon: '🧭', html: `<p><b>Hititler</b>, Anadolu\'da kurulan ilk büyük devlet. Başkentleri <b>Hattuşa</b>, bugünkü Çorum\'un Boğazkale ilçesi. Kendilerine "Hatti ülkesinin halkı" diyorlardı; "Hitit" adı İncil\'den gelir.</p>
        <p>En güçlü dönemlerinde Ege\'den Fırat\'a, Karadeniz\'den Şam\'a kadar uzandılar ve Mısır ile eşit bir "büyük güç" oldular. <b>Kadeş Antlaşması</b> (MÖ 1259) bilinen en eski yazılı barış antlaşmasıdır.</p>` },
      { ad: 'Din: bin tanrı', ikon: '⛈️', html: `<p>Hititler fethettikleri halkların tanrılarını da kabul etti; bu yüzden kendilerine "bin tanrılı Hatti ülkesi" dediler. En büyükleri <b>Fırtına Tanrısı</b> (Tarhunna, Hurrice Teşup) ve <b>Arinna\'nın Güneş Tanrıçası</b>. Kral, tanrıların yeryüzündeki rahibiydi ve öldüğünde "tanrı oldu" denirdi.</p>` },
      { ad: 'Yönetim ve kanun', ikon: '⚖️', html: `<p>Kralın yanında soylulardan oluşan bir meclis (Panku) vardı. Hitit kanunları ~200 madde: hırsızlıkta ölüm yerine tazminat, kadınlara boşanma ve mülk hakkı. Krallar vasal krallarla tek tek antlaşma yaptı; antlaşmalarda tanrılar şahit tutuldu.</p>` },
      { ad: 'Yazı ve bilim', ikon: '📜', html: `<p>İki yazı kullandılar: Babil\'den alınan <b>çivi yazısı</b> (kil tabletler) ve yerli <b>Luvi hiyeroglifleri</b> (mühürler, kaya yazıtları). Kikkuli adlı Mitannili bir at terbiyecisinin 214 günlük at eğitim kılavuzu, dünyanın bilinen en eski "spor antrenman programı".</p>` }
    ]
  });
})();
