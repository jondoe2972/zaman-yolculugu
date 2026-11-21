// 🐾 Hayvanlar Alemi Oyunu:
// 1) 📍 Nerede Yaşar? (fotoğraf ve yaşam ipuçlarından hayvanın kıtasını/okyanusunu tahmin et, seri yap!)
// 2) 🧠 Doğa Bilgini (Kolay / Orta / Zor seviyeli geniş doğa, göç, okyanus ve yaban hayatı yarışması)
// Adres: ?oyun=hayvan · Veri: window.ATLAS_HAYVANLAR, ATLAS_HAYVAN_GOC, ATLAS_OKYANUS
'use strict';
window.HayvanOyunu = (() => {
  const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const API = 'https://en.wikipedia.org/w/api.php?format=json&origin=*&action=query&redirects=1&prop=pageimages&piprop=thumbnail&pithumbsize=480&titles=';
  const oku = (k, v) => { try { return JSON.parse(localStorage[k] || 'null') || v; } catch (e) { return v; } };
  const yaz = (k, v) => { try { localStorage[k] = JSON.stringify(v); } catch (e) { } };
  const karistir = arr => { const a = [...arr]; for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };

  const KITA_GRUPLARI = {
    'Asya': '🌏 Asya',
    'Afrika': '🌍 Afrika',
    'Avrupa': '🏰 Avrupa',
    'Amerika': '🌎 Amerika',
    'Okyanusya': '🏝️ Okyanusya',
    'Okyanus': '🌊 Okyanuslar',
    'Arktik': '🧊 Kutuplar',
    'Antarktika': '🧊 Kutuplar'
  };
  const kitaEtiket = h => KITA_GRUPLARI[h.kita] || '🌍 Dünya';

  // Zorluğa göre ayrılmış zengin Doğa Bilgini soru bankası
  const SORU_BANKASI = {
    kolay: [
      { s: 'Dünya üzerinde yaşamış bilinen en büyük hayvan hangisidir?', d: 'Mavi Balina', y: ['Afrika Fili', 'Balina Köpekbalığı', 'T-Rex'], a: 'Mavi balina 30 metre boya ve 180 tona ulaşarak tüm dinozorlardan bile büyüktür.' },
      { s: 'Hangi kuş uçamaz ama saatte 70 km hızla koşabilir?', d: 'Devekuşu', y: ['İmparator Penguen', 'Kivi', 'Flamingo'], a: 'Devekuşu dünyanın en büyük ve karada en hızlı koşan kuşudur.' },
      { s: 'Yavrularını karnındaki kesede büyüten ve yalnızca Avustralya\'da doğal yaşayan memeli hangisidir?', d: 'Kanguru', y: ['Dev Panda', 'Lama', 'Su Aygırı'], a: 'Kangurular, koalalar ve vombatlar Avustralya\'nın ünlü keseli memelileridir.' },
      { s: 'Günde yaklaşık 12-14 saat yalnızca bambu yiyerek beslenen ünlü hayvan hangisidir?', d: 'Dev Panda', y: ['Koala', 'Tembel Hayvan', 'Kutup Ayısı'], a: 'Dev pandalar Çin\'in dağlık bambu ormanlarında yaşar ve diyetlerinin %99\'u bambudur.' },
      { s: 'Hangi hayvanın boynu tüm kara hayvanlarından uzundur ama insanla aynı sayıda (7) boyun omuru vardır?', d: 'Zürafa', y: ['Deve', 'Lama', 'Flamingo'], a: 'Zürafanın her bir boyun omuru yaklaşık 25 cm uzunluğundadır.' },
      { s: 'Kışın göç etmek yerine aylarca derin uykuya (kış uykusu) yatan hayvan hangisidir?', d: 'Boz Ayı', y: ['Beyaz Leylek', 'Kambur Balina', 'Afrika Aslanı'], a: 'Boz ayılar sonbaharda bolca yağ depolayıp kış boyunca inlerinde kalp atışlarını yavaşlatarak uyur.' },
      { s: 'Hem karada hem suda yaşayabilen, geceleri avlanan ve "nehir atı" anlamına gelen Afrika hayvanı hangisidir?', d: 'Su Aygırı', y: ['Gergedan', 'Timsah', 'Mors'], a: 'Su aygırı (Hippopotamus) gündüzleri sıcaktan korunmak için nehirde kalır, gece kıyıda otlar.' },
      { s: 'Hangi kuş türü soğuk Antarktika kışında yumurtasını ayaklarının üstünde sıcak tutar?', d: 'İmparator Penguen', y: ['Albatros', 'Kutup Baykuşu', 'Kuzey Sumrusu'], a: 'Erkek imparator penguenler -40 °C fırtınada iki ay boyunca yemeden yumurtayı ayaklarında ısıtır.' },
      { s: 'Hangi kara hayvanı kısa mesafede saatte 110 km hıza ulaşarak en hızlı koşucudur?', d: 'Çita', y: ['Leopar', 'Ceylan', 'Bozkurt'], a: 'Çita 0\'dan 100 km/s hıza yalnızca 3 saniyede çıkabilir.' },
      { s: 'Renk değiştirerek ortama gizlenebilen ve gözlerini birbirinden bağımsız döndürebilen sürüngen hangisidir?', d: 'Bukalemun', y: ['Komodo Ejderi', 'İguana', 'Geko'], a: 'Bukalemunlar hem kamuflaj hem de ruh hâllerini göstermek için deri rengini değiştirir.' }
    ],
    orta: [
      { s: 'Her yıl Kuzey Kutbu ile Antarktika arasında ~80.000 km uçarak dünya göç rekorunu elinde tutan kuş hangisidir?', d: 'Kuzey Sumrusu', y: ['Beyaz Leylek', 'Albatros', 'Kaya Kartalı'], a: 'Kuzey sumrusu her yıl iki yarımkürenin yaz mevsimini birden yaşar ve ömrü boyunca Ay\'a 3 kez gidip gelecek kadar uçar.' },
      { s: 'Hangi memeli hayvan, yavrularını doğurmak yerine yumurtlayarak dünyaya getirir?', d: 'Ornitorenk', y: ['Koala', 'Kunduz', 'Su Samuru'], a: 'Ornitorenk ve ekidne, dünyada yumurtlayan tek memeli grubudur (tek delikliler).' },
      { s: 'Üç kalbi, dokuz beyni (her kolda mini sinir ağı) ve bakır bazlı mavi kanı olan deniz canlısı hangisidir?', d: 'Ahtapot', y: ['Manta Vatozu', 'Denizanası', 'Balina Köpekbalığı'], a: 'Ahtapotun iki kalbi solungaçlara, bir kalbi vücuda kan pompalar; kanındaki hemosiyanin ona mavi renk verir.' },
      { s: 'Kanada\'dan Meksika\'daki çam ormanlarına uzanan göçü tek bir birey değil, 4 nesil hâlinde tamamlayan canlı hangisidir?', d: 'Kral (Monark) Kelebeği', y: ['Yusufçuk', 'Bal Arısı', 'Ateş Böceği'], a: 'Kış için Meksika\'ya uçan kelebekler oraya hiç gitmemiştir; genetik pusulayla atalarının ağaçlarını bulur.' },
      { s: 'Ekvator çizgisine çok yakın olan Galápagos Adaları\'nda penguenlerin yaşayabilmesini hangi soğuk okyanus akıntısı sağlar?', d: 'Humboldt (Peru) Akıntısı', y: ['Gulf Stream', 'Kuroshio Akıntısı', 'Brezilya Akıntısı'], a: 'Antarktika\'dan gelen soğuk Humboldt Akıntısı, Galápagos sularını serin ve balıkça zengin tutar.' },
      { s: 'Yaşamının çoğunu açık okyanusta geçirip yumurtlamak için koku duyusuyla tam doğduğu dağ deresine dönen balık hangisidir?', d: 'Pasifik Somonu', y: ['Orkinos', 'Kılıç Balığı', 'Morina'], a: 'Somonlar okyanusta manyetik alanla kıyıya ulaşır, nehirde ise doğdukları derenin eşsiz kokusunu izler.' },
      { s: 'Dünyadaki en büyük kertenkele türü olup yalnızca Endonezya\'nın birkaç adasında yaşayan etçil sürüngen hangisidir?', d: 'Komodo Ejderi', y: ['Yeşil İguana', 'Gila Canavarı', 'Nil Varanı'], a: 'Komodo ejderi 3 metre boya ve 70 kg ağırlığa ulaşabilir; zehirli ısırığıyla büyük avları indirebilir.' },
      { s: 'Kışın karanlık Arktik gecelerinde daha fazla ışık toplayabilmek için göz dokusu altından maviye dönen hayvan hangisidir?', d: 'Ren Geyiği (Karibu)', y: ['Kutup Tilkisi', 'Kar Leoparı', 'Kutup Ayısı'], a: 'Ren geyiğinin gözündeki tapetum tabakası yazın altın, kışın derin mavi renge dönüşerek gece görüşünü 1000 kat güçlendirir.' },
      { s: '17. yüzyılda Mauritius Adası\'nda insanlar ve getirilen hayvanlar yüzünden yalnızca 80 yılda nesli tükenen uçamayan kuş hangisidir?', d: 'Dodo Kuşu', y: ['Büyük Auk', 'Göçmen Güvercin', 'Moa'], a: 'Yırtıcısız adada evrimleşen dodo insanlardan korkmadığı için 1681 civarında tamamen yok oldu.' },
      { s: 'Hangi nehir, okyanusa akan tüm tatlı suyun yaklaşık %20\'sini tek başına taşır ve pembe nehir yunuslarına ev sahipliği yapar?', d: 'Amazon Nehri', y: ['Nil Nehri', 'Kongo Nehri', 'Yangtze Nehri'], a: 'Amazon\'un debisi kendisinden sonraki en büyük 7 nehrin toplamından fazladır.' },
      { s: 'Her sonbaharda 500.000\'den fazla bireyle İstanbul Boğazı ve Hatay üzerinden Afrika\'ya süzülerek geçen göçmen kuş hangisidir?', d: 'Beyaz Leylek', y: ['Flamingo', 'Pelikan', 'Kuğu'], a: 'Leylekler açık denizde termal hava akımı olmadığı için İstanbul Boğazı ve Cebelitarık gibi kara köprülerini seçer.' },
      { s: 'Kutup ayısının tüyleri beyaz görünse de aslında şeffaftır; peki altındaki derisi ne renktir?', d: 'Siyah', y: ['Pembe', 'Beyaz', 'Gri'], a: 'Siyah deri, içi boş şeffaf kıllardan geçen güneş ışığını ve ısıyı maksimum düzeyde emer.' }
    ],
    zor: [
      { s: 'Avrupa yılan balıkları (Anguilla anguilla) Avrupa nehirlerinden çıkıp yumurtlamak için hangi uzak deniz bölgesine göç eder?', d: 'Sargasso Denizi', y: ['Kuzey Denizi', 'Akdeniz', 'Bering Denizi'], a: 'Avrupa yılan balıkları 5.000 km yüzüp Bermuda yakınındaki Sargasso Denizi\'nde yumurtlar; yavrular Gulf Stream ile Avrupa\'ya döner.' },
      { s: '1936 yılında Tazmanya\'daki Hobart Hayvanat Bahçesi\'nde "Benjamin" adlı son bireyinin ölmesiyle nesli tükenen keseli yırtıcı hangisidir?', d: 'Tazmanya Kaplanı (Thylacine)', y: ['Tazmanya Canavarı', 'Quagga', 'Kılıç Dişli Kaplan'], a: 'Sırtındaki çizgiler yüzünden kaplana benzetilen Thylacine aslında etçil bir keseli memeliydi.' },
      { s: '220 metreyi aşan derinliğiyle dünyanın en derin nehri olan ve Ekvator çizgisini iki kez kesen nehir hangisidir?', d: 'Kongo Nehri', y: ['Amazon Nehri', 'Yangtze Nehri', 'Mekong Nehri'], a: 'Kongo Nehri\'nin derin kanyonları o kadar akıntılıdır ki nehrin iki yakasındaki balık türleri bile birbirinden ayrı evrimleşmiştir.' },
      { s: 'Hangi okyanus akıntısı saniyede ~130 milyon m³ su taşır (dünyadaki tüm nehirlerin 100 katı) ve Antarktika\'yı sıcak sulardan yalıtır?', d: 'Antarktika Çevresi Akıntısı (ACC)', y: ['Gulf Stream', 'Agulhas Akıntısı', 'Labrador Akıntısı'], a: 'ACC, üç büyük okyanusu birbirine bağlayan ve küresel derin deniz besin dolaşımını çalıştıran ana motordur.' },
      { s: 'Kışın vücudundaki suyun %60\'ı donmasına rağmen kanını yüksek glikozla doğal antifrize çevirip baharda yeniden canlanan canlı hangisidir?', d: 'Alaska Orman Kurbağası', y: ['Axolotl', 'İmparator Penguen', 'Kutup Ayısı'], a: 'Orman kurbağasının (Lithobates sylvaticus) kalbi kışın tamamen durur, baharda güneşle çözülüp zıplayarak uyanır.' },
      { s: 'Güney Amerika\'da Casiquiare Kanalı aracılığıyla doğal olarak Amazon Nehri\'ne bağlanan ve Angel Şelalesi\'ni barındıran nehir hangisidir?', d: 'Orinoco Nehri', y: ['Paraná Nehri', 'São Francisco', 'Magdalena'], a: 'İki dev nehir havzasının doğal bir kanalla birbirine bağlanması (bifürkasyon) dünyada son derece nadir bir coğrafya olayıdır.' },
      { s: 'Yaklaşık 400 yıla kadar yaşayabilen ve bilinen en uzun ömürlü omurgalı hayvan kabul edilen deniz canlısı hangisidir?', d: 'Grönland Köpekbalığı', y: ['Galápagos Kaplumbağası', 'Mavi Balina', 'Dev Kalamar'], a: 'Arktik\'in buzlu derinliklerinde çok yavaş metabolizmayla yaşayan Grönland köpekbalığı 150 yaşında erişkinliğe ulaşır.' },
      { s: 'Bütün yetişkin yaşamı boyunca hiç su içmeden, yalnızca yediği kuru tohumları metabolize ederek ürettiği suyla yaşayan çöl memelisi hangisidir?', d: 'Kanguru Faresi', y: ['Çöl Tilkisi (Fennek)', 'Tek Hörgüçlü Deve', 'Mirket'], a: 'Kuzey Amerika çöllerindeki kanguru faresinin böbrekleri idrarı kristalleşecek kadar yoğunlaştırıp tek damla su kaybetmez.' },
      { s: '19. yüzyılda Kuzey Amerika\'da 3 ila 5 milyarlık sürülerle gökyüzünü karartan ama aşırı avlanma yüzünden 1914\'te tamamen yok olan kuş hangisidir?', d: 'Göçmen Güvercin', y: ['Dodo Kuşu', 'Karolina Papağanı', 'Büyük Auk'], a: '"Martha" adlı son göçmen güvercin 1914\'te öldü; bir türün milyarlarca bireyden sıfıra nasıl inebileceğinin en çarpıcı örneğidir.' },
      { s: 'Namib Çölü\'nün kurak kalmasına yol açarken aynı zamanda kıyıya taşıdığı soğuk sisle çöl böceklerine su ve penguenlere balık sağlayan akıntı hangisidir?', d: 'Benguela Akıntısı', y: ['Agulhas Akıntısı', 'Kanarya Akıntısı', 'Doğu Avustralya Akıntısı'], a: 'Benguela Akıntısı\'nın soğuttuğu kıyı sisi, Namib böceklerinin sırtında damlacık olarak birikip çöl yaşamını besler.' },
      { s: 'Hangi derin deniz balığı yaklaşık 400 milyon yıldır neredeyse hiç değişmeden yaşadığı için "yaşayan fosil" olarak bilinir ve 1938\'de yeniden keşfedilmiştir?', d: 'Sölakant (Coelacanth)', y: ['Fener Balığı', 'Mersin Balığı', 'Vatoz'], a: '66 milyon yıl önce dinozorlarla birlikte yok olduğu sanılan sölakant, 1938\'de Güney Afrika açıklarında canlı yakalandı.' },
      { s: 'Avustralya\'nın Doğu kıyısı boyunca güneye akıp Büyük Set Resifi\'ndeki mercan larvalarını ve deniz kaplumbağalarını taşıyan sıcak akıntı hangisidir?', d: 'Doğu Avustralya Akıntısı', y: ['Kuroshio Akıntısı', 'Humboldt Akıntısı', 'Agulhas Akıntısı'], a: 'Mercan Denizi\'nden Sidney\'e akan bu sıcak akıntı, Kayıp Balık Nemo filmindeki ünlü kaplumbağa otoyoluna ilham vermiştir.' },
      { s: 'Hangi memeli hayvan, uzuvlarını, omuriliğini ve hatta kalp dokusunu yara izi olmadan tamamen yenileyebilen Meksika semenderi ile karıştırılsa da aslında bir amfibidir?', d: 'Axolotl (Meksika Semenderi)', y: ['Tardigrad', 'Bukalemun', 'Ornitorenk'], a: 'Yalnızca Meksiko City yakınındaki Xochimilco kanallarında doğal yaşayan Axolotl, yaşam boyu solungaçlı larva formunda kalır.' },
      { s: 'Mariana Çukuru\'nun yaklaşık 11 km derinliğindeki tabanında su basıncı deniz seviyesinin kaç katından fazladır?', d: '1.000 katından fazla', y: ['50 katı', '150 katı', '300 katı'], a: '10.994 metre derinlikte basınç ~1.086 bar\'a ulaşır; buna rağmen orada şeffaf salyangoz balıkları ve amfipodlar yaşar.' }
    ]
  };

  const fotoCache = new Map();
  async function fotoYukle(titles) {
    const eksik = [...new Set(titles.filter(w => w && !fotoCache.has(w)))];
    if (!eksik.length) return;
    try {
      const j = await fetch(API + encodeURIComponent(eksik.slice(0, 20).join('|'))).then(r => r.json());
      const map = {};
      for (const r of [...(j.query?.normalized || []), ...(j.query?.redirects || [])]) map[r.from] = r.to;
      const byT = {};
      for (const p of Object.values(j.query?.pages || {})) if (p.thumbnail) byT[p.title] = p.thumbnail.source;
      for (const t of eksik.slice(0, 20)) {
        let tt = t;
        for (let k = 0; k < 3 && map[tt]; k++) tt = map[tt];
        fotoCache.set(t, byT[tt] || null);
      }
    } catch (e) { /* çevrimdışı */ }
  }

  let el = null, s = null, zorluk = 'orta';
  const ZORLUK = {
    kolay: { ad: 'Kolay', sik: 3, ipucu: true, xp: 5 },
    orta:  { ad: 'Orta',  sik: 4, ipucu: false, xp: 8 },
    zor:   { ad: 'Zor',   sik: 5, ipucu: false, xp: 12 }
  };
  const ist = () => oku('zy-hayvan-ist', { seriRekor: 0, testRekor: 0, oyun: 0 });
  const istKaydet = fn => { const I = ist(); fn(I); yaz('zy-hayvan-ist', I); return I; };

  function kutu() {
    if (!el) {
      el = document.createElement('div');
      el.id = 'hayvan-oyun';
      el.className = 'hayvan-oyun';
      el.setAttribute('role', 'dialog');
      el.setAttribute('aria-label', 'Hayvanlar Alemi Oyunu');
      document.querySelector('.stage').appendChild(el);
      el.addEventListener('click', tikla);
      window.addEventListener('keydown', ev => { if (ev.key === 'Escape' && el && !el.hidden) kapat(); });
    }
    el.hidden = false;
    return el;
  }

  function secim() {
    s = null;
    const I = ist();
    kutu().innerHTML = `
      <div class="ho-ust">
        <div><b>🐾 Hayvanlar Alemi</b><small>Dünya canlıları, göçler ve doğa bilgisiyle kendini dene</small></div>
        <button class="ho-x" title="Kapat" aria-label="Kapat">✕</button>
      </div>
      <div class="oz-bar">${Object.entries(ZORLUK).map(([k, v]) => `<button type="button" class="oz-btn${zorluk === k ? ' on' : ''}" data-ho-zor="${k}">${v.ad}</button>`).join('')}</div>
      <div class="ho-modlar">
        <button data-ho="nerede" class="ho-mod">
          <span>📍</span>
          <div><b>Bu Hayvan Nerede Yaşar?</b><small>Fotoğrafı ve ipucunu gör, doğal yaşam bölgesini tahmin et · seri yap!${I.seriRekor ? ` (🏆 Rekor: ${I.seriRekor})` : ''}</small></div>
        </button>
        <button data-ho="test" class="ho-mod alt">
          <span>🧠</span>
          <div><b>Doğa Bilgini</b><small>Hayvanlar, göç döngüleri, akıntılar ve şaşırtıcı adaptasyonlar (${ZORLUK[zorluk].ad})${I.testRekor ? ` · 🏆 Rekor: ${I.testRekor}` : ''}</small></div>
        </button>
      </div>`;
  }

  // ---------- Mod 1: 📍 Nerede Yaşar? (Seri) ----------
  function neredeBasla() {
    const tum = window.ATLAS_HAYVANLAR || [];
    const L = karistir(zorluk === 'kolay' ? tum.filter(x => x.durum !== 'Nesli Tükendi') : tum);
    if (!L.length) return;
    s = { mod: 'nerede', havuz: L, idx: 0, seri: 0, izler: [], secim: null, bitti: false, secenekler: [] };
    neredeTur();
  }
  function neredeTur() {
    if (s.idx >= s.havuz.length) { s.havuz = karistir(window.ATLAS_HAYVANLAR || []); s.idx = 0; }
    const h = s.havuz[s.idx];
    const dogru = kitaEtiket(h);
    const z = ZORLUK[zorluk] || ZORLUK.orta;
    const diger = karistir([...new Set(Object.values(KITA_GRUPLARI))].filter(x => x !== dogru)).slice(0, z.sik - 1);
    s.hedef = h;
    s.dogru = dogru;
    s.secenekler = karistir([dogru, ...diger]);
    s.secim = null;
    fotoYukle([h.w, s.havuz[s.idx + 1]?.w, s.havuz[s.idx + 2]?.w]).then(() => {
      if (el && !el.hidden && s && s.mod === 'nerede' && s.hedef === h) {
        const box = el.querySelector('.ho-foto[data-ho-w]');
        if (box && !box.querySelector('img') && fotoCache.get(h.w)) {
          box.innerHTML = `<img src="${esc(fotoCache.get(h.w))}" alt="${esc(h.ad)}">`;
        }
      }
    });
    neredeCiz();
  }
  function neredeCiz() {
    const h = s.hedef, I = ist(), acik = s.secim != null, src = fotoCache.get(h.w), z = ZORLUK[zorluk] || ZORLUK.orta;
    const dogruMu = acik && s.secim === s.dogru;
    const ip = zorluk === 'zor' ? `🛡️ ${h.durum}` : z.ipucu ? `🌿 ${h.habitat} · 🍽️ ${h.beslenme}` : `🍽️ ${h.beslenme} · 🛡️ ${h.durum}`;
    kutu().innerHTML = `
      <div class="ho-ust">
        <div><b>📍 Bu Hayvan Nerede Yaşar?</b><small>${z.ad} seviye · Doğal yaşam bölgesini seç</small></div>
        <div class="eo-sayac"><span>🔥 <b>${s.seri}</b></span><span>🏆 <b>${Math.max(I.seriRekor, s.seri)}</b></span></div>
        <button class="ho-x" title="Kapat" aria-label="Kapat">✕</button>
      </div>
      <div class="ho-kart">
        <div class="ho-foto" data-ho-w="${esc(h.w || '')}">${src ? `<img src="${esc(src)}" alt="${esc(h.ad)}">` : `<span class="ho-ik">${h.ik}</span>`}</div>
        <div class="ho-kbilgi">
          <h3>${h.ik} ${esc(h.ad)}</h3>
          <small>${esc(ip)}</small>
          ${acik ? `<p><b>📍 ${esc(h.bolge)}</b> — ${esc(h.ozellik)}</p>` : `<p>Bu tür dünyanın hangi bölgesine / okyanusuna özgüdür?</p>`}
        </div>
      </div>
      <div class="ho-siklar">
        ${s.secenekler.map(op => {
          let cls = '';
          if (acik) { if (op === s.dogru) cls = 'dogru'; else if (op === s.secim) cls = 'yanlis'; else cls = 'soluk'; }
          return `<button class="ho-sik ${cls}" data-ho-op="${esc(op)}" ${acik ? 'disabled' : ''}>${esc(op)}</button>`;
        }).join('')}
      </div>
      ${acik ? (dogruMu ? `<div class="eo-sonuc iyi">
          <b>🎉 Doğru! ${esc(h.bolge)} (${esc(s.dogru)})</b>
          <div class="eo-btns">
            <button data-ho="sonraki" class="ana">Sonraki Hayvan ›</button>
            <button data-ho="kure">🌍 Kürede Gör</button>
          </div>
        </div>` : `<div class="eo-sonuc bitti">
          <b>🙈 Yanlış! Doğru cevap: ${esc(s.dogru)} (${esc(h.bolge)})</b>
          <div class="eo-skor"><span><b>🔥 ${s.seri}</b> seri</span><span><b>🏆 ${I.seriRekor}</b> rekor</span></div>
          <div class="eo-izler">${s.izler.slice(-14).join('')}</div>
          <div class="eo-btns">
            <button data-ho="nerede" class="ana">🔁 Tekrar Oyna</button>
            <button data-ho="paylas">📋 Paylaş</button>
            <button data-ho="kure">🌍 Kürede Gör</button>
            <button data-ho="menu">Modlar</button>
          </div>
        </div>`) : ''}`;
  }

  // ---------- Mod 2: 🧠 Doğa Bilgini (Zorluk Seviyeli + Zengin Çeşitlilik, soru sayısı gösterilmez) ----------
  function soruUret() {
    const havuz = [];
    // 1) Seçilen zorluk seviyesine özel hazırlanmış sorular
    const banka = SORU_BANKASI[zorluk] || SORU_BANKASI.orta;
    for (const q of karistir(banka)) {
      havuz.push({
        soru: q.s,
        dogru: q.d,
        siklar: karistir([q.d, ...q.y]),
        aciklama: q.a
      });
    }
    // 2) Dinamik göç ve tür soruları (çeşitliliği daha da artırır)
    const L = karistir(window.ATLAS_HAYVANLAR || []);
    const adGizle = (metin, ad) => {
      let out = metin;
      for (const w of ad.split(/[\s()]+/).filter(x => x.length >= 4)) {
        out = out.replace(new RegExp(w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi'), '___');
      }
      return out;
    };
    const dinamikAdet = zorluk === 'zor' ? 3 : 4;
    for (const h of L.slice(0, dinamikAdet)) {
      const ayniKita = zorluk === 'zor' ? L.filter(x => x.id !== h.id && x.kita === h.kita) : [];
      const hav = ayniKita.length >= 3 ? ayniKita : L.filter(x => x.id !== h.id);
      const yanlis = karistir(hav).slice(0, 3).map(x => `${x.ik} ${x.ad}`);
      const dStr = `${h.ik} ${h.ad}`;
      havuz.push({
        soru: zorluk === 'kolay'
          ? `Doğal yaşam alanı "${h.habitat}" olan hayvan hangisidir?`
          : `Bu özellik hangi canlıya aittir?\n"${adGizle(h.ozellik, h.ad)}"`,
        dogru: dStr,
        siklar: karistir([dStr, ...yanlis]),
        aciklama: `${dStr} (${h.bolge}) — ${h.ozellik}`
      });
    }
    return karistir(havuz);
  }

  function testBasla() {
    const sorular = soruUret();
    if (!sorular.length) return;
    s = { mod: 'test', sorular, idx: 0, dogruSayi: 0, seri: 0, izler: [], secim: null, bitti: false };
    testCiz();
  }
  function testCiz() {
    const z = ZORLUK[zorluk] || ZORLUK.orta;
    if (s.bitti) {
      const I = ist();
      const baslik = s.dogruSayi >= 8 ? 'Muhteşem! Gerçek bir Doğa Bilginisin 🏆' : s.dogruSayi >= 4 ? 'Harika gidiyorsun! 🌟' : 'Güzel deneme, yeni bilgiler öğrendin 🐾';
      kutu().innerHTML = `
        <div class="ho-ust">
          <div><b>🧠 Doğa Bilgini · ${z.ad}</b><small>Tur özeti</small></div>
          <button class="ho-x" title="Kapat" aria-label="Kapat">✕</button>
        </div>
        <div class="eo-sonuc iyi">
          <b>${baslik}</b>
          <div class="eo-skor"><span><b>🔥 ${s.seri}</b> seri</span><span><b>🏆 ${I.testRekor}</b> rekor</span></div>
          <div class="eo-izler">${s.izler.slice(-14).join('')}</div>
          <div class="eo-btns">
            <button data-ho="test" class="ana">🔁 Tekrar Oyna</button>
            <button data-ho="paylas">📋 Skoru Paylaş</button>
            <button data-ho="menu">Modlar</button>
          </div>
        </div>`;
      return;
    }
    const q = s.sorular[s.idx], acik = s.secim != null;
    const dogruMu = acik && s.secim === q.dogru;
    const I = ist();
    kutu().innerHTML = `
      <div class="ho-ust">
        <div><b>🧠 Doğa Bilgini</b><small>${z.ad} seviye · Doğru bildikçe devam eder</small></div>
        <div class="eo-sayac"><span>🔥 <b>${s.seri}</b></span><span>🏆 <b>${Math.max(I.testRekor, s.seri)}</b></span></div>
        <button class="ho-x" title="Kapat" aria-label="Kapat">✕</button>
      </div>
      <div class="oz-bar">${Object.entries(ZORLUK).map(([k, v]) => `<button type="button" class="oz-btn${zorluk === k ? ' on' : ''}" data-ho-tzor="${k}">${v.ad}</button>`).join('')}</div>
      <div class="ho-soru">${esc(q.soru).replace(/\n/g, '<br>')}</div>
      <div class="ho-siklar">
        ${q.siklar.map(op => {
          let cls = '';
          if (acik) { if (op === q.dogru) cls = 'dogru'; else if (op === s.secim) cls = 'yanlis'; else cls = 'soluk'; }
          return `<button class="ho-sik ${cls}" data-ho-tid="${esc(op)}" ${acik ? 'disabled' : ''}>${esc(op)}</button>`;
        }).join('')}
      </div>
      ${acik ? `<div class="eo-sonuc ${dogruMu ? 'iyi' : 'bitti'}">
        <b>${dogruMu ? '🎉 Doğru!' : '🙈 Yanlış!'}</b>
        <small>${esc(q.aciklama)}</small>
        <div class="eo-btns">
          ${dogruMu ? `<button data-ho="test-sonraki" class="ana">Sonraki Soru ›</button>` : `<button data-ho="test" class="ana">🔁 Tekrar Oyna</button><button data-ho="paylas">📋 Paylaş</button><button data-ho="menu">Modlar</button>`}
        </div>
      </div>` : ''}`;
  }

  function paylasMetni() {
    if (!s) return '';
    const I = ist();
    if (s.mod === 'nerede') {
      return `🐾 Hayvanlar Alemi · Nerede Yaşar? (${ZORLUK[zorluk].ad})\n${s.izler.slice(-15).join('')}\n🔥 Seri: ${s.seri} · 🏆 Rekor: ${I.seriRekor}\n${location.origin}${location.pathname}?oyun=hayvan`;
    }
    return `🧠 Doğa Bilgini (${ZORLUK[zorluk].ad})\n${s.izler.slice(-15).join('')}\n🔥 Seri: ${s.seri} · 🏆 Rekor: ${I.testRekor}\n${location.origin}${location.pathname}?oyun=hayvan`;
  }

  function tikla(ev) {
    if (ev.target.closest('.ho-x')) return kapat();
    const zr = ev.target.closest('[data-ho-zor]');
    if (zr) { zorluk = zr.dataset.hoZor; secim(); return; }
    const tzr = ev.target.closest('[data-ho-tzor]');
    if (tzr) { zorluk = tzr.dataset.hoTzor; testBasla(); return; }
    const op = ev.target.closest('[data-ho-op]');
    if (op && s && s.mod === 'nerede' && s.secim == null) {
      s.secim = op.dataset.hoOp;
      if (s.secim === s.dogru) {
        s.seri++;
        s.izler.push('🟩');
        istKaydet(I => { if (s.seri > I.seriRekor) I.seriRekor = s.seri; });
        if (window.ZY && window.ZY.xpEkle) window.ZY.xpEkle((ZORLUK[zorluk] || ZORLUK.orta).xp, 'hayvan');
      } else {
        s.izler.push('🟥');
        s.bitti = true;
        istKaydet(I => { I.oyun++; });
      }
      neredeCiz();
      return;
    }
    const tid = ev.target.closest('[data-ho-tid]');
    if (tid && s && s.mod === 'test' && s.secim == null) {
      s.secim = tid.dataset.hoTid;
      const dogru = s.secim === s.sorular[s.idx].dogru;
      if (dogru) {
        s.dogruSayi++;
        s.seri++;
        istKaydet(I => { if (s.seri > I.testRekor) I.testRekor = s.seri; });
        if (window.ZY && window.ZY.xpEkle) window.ZY.xpEkle((ZORLUK[zorluk] || ZORLUK.orta).xp, 'hayvan');
      } else {
        istKaydet(I => { I.oyun++; });
      }
      s.izler.push(dogru ? '🟩' : '🟥');
      testCiz();
      return;
    }
    const b = ev.target.closest('[data-ho]');
    if (!b) return;
    const k = b.dataset.ho;
    if (k === 'nerede') neredeBasla();
    else if (k === 'test') testBasla();
    else if (k === 'menu') secim();
    else if (k === 'sonraki') { s.idx++; neredeTur(); }
    else if (k === 'test-sonraki') {
      s.idx++;
      s.secim = null;
      if (s.idx >= s.sorular.length) {
        // Havuz biterse taze karıştırıp devam et
        s.sorular = soruUret();
        s.idx = 0;
      }
      testCiz();
    } else if (k === 'kure' && s && s.hedef) {
      const h = s.hedef;
      kapat();
      if (window.ZY && window.ZY.hayvanKurede) window.ZY.hayvanKurede(h.id);
    } else if (k === 'paylas') {
      const t = paylasMetni();
      (navigator.clipboard ? navigator.clipboard.writeText(t) : Promise.reject()).then(
        () => { b.textContent = '✓ Kopyalandı'; },
        () => { b.textContent = 'Kopyalanamadı'; }
      );
    }
  }

  function ac() { secim(); }
  function kapat() { if (el) el.hidden = true; }
  function rekor() { return Math.max(ist().seriRekor, ist().testRekor); }

  return { ac, kapat, rekor };
})();
