// 🎧 Zaman Yolculuğu Gerçek Ses & Ambiyans Motoru
// Gerçek doğa kayıtları (okyanus dalgaları, nehir akışı, volkan, rüzgâr, kılıç, maden kazısı),
// 5 seçilebilir arka plan müziği (Tarih/Doğa otomatik geçişli) ve 26+ GERÇEK hayvan sesi kaydı.
// Gerçek kaydı olmayan hayvanlarda sahte sentetik ses çalmaz — sessiz geçer.
'use strict';
(() => {
  const KEY = 'zy-ses-ayar';
  const DEF = { sessiz: false, vol: 0.45, muzik: true, parca: 'oto', doga: true, hayvan: true };
  let cfg = { ...DEF };
  try {
    const saved = JSON.parse(localStorage.getItem(KEY) || 'null');
    if (saved && typeof saved === 'object') cfg = { ...DEF, ...saved };
  } catch (e) {}
  const kaydet = () => { try { localStorage.setItem(KEY, JSON.stringify(cfg)); } catch (e) {} };

  const GA = 'https://actions.google.com/sounds/v1/';
  const WC = 'https://upload.wikimedia.org/wikipedia/commons/';

  // ---------- 🎵 7 Seçilebilir Arka Plan Müziği / Ambiyansı (enstrümantal + doğa, hepsi kesintisiz loop!) ----------
  const MUZIKLER = [
    { id: 'tarih', ad: '🏛️ Tarihî Lavta (Rönesans)', url: WC + '7/7f/Ludwig_Senfl_--_Ach_Elslein.opus', baz: 0.38, basla: 0.5 },
    { id: 'arp', ad: '🪕 Sakin Arp & Kelt Ezgisi', url: WC + '2/20/Greensleeves.ogg', baz: 0.36, basla: 0.5 },
    { id: 'keman', ad: '🎻 Barok Keman Sonatı (Telemann)', url: WC + 'a/a8/Telemann_-_2violin_Sonata_1-1.ogg', baz: 0.34, basla: 0.5 },
    { id: 'flut', ad: '🪈 Solo Flüt (Bach — Sarabande)', url: WC + 'd/df/Bach_-_Partita_For_Solo_Flute_-_Modern_Flute_-_3._Sarabande.ogg', baz: 0.36, basla: 0.5 },
    { id: 'doga', ad: '🌿 Bahar Ormanı & Kuşlar (Doğa)', url: GA + 'ambiences/spring_day_forest.ogg', baz: 0.34, basla: 0 },
    { id: 'orman', ad: '🌧️ Yağmurlu Orman & Hafif Rüzgâr', url: GA + 'weather/light_rain.ogg', url2: GA + 'ambiences/jungle_atmosphere_afternoon.ogg', baz: 0.28, baz2: 0.22, basla: 0 },
    { id: 'okyanus', ad: '🌊 Sakin Okyanus Dalgaları', url: GA + 'water/waves_crashing_on_rock_beach.ogg', baz: 0.28, basla: 0 }
  ];
  if (cfg.parca === 'kozmik') { cfg.parca = 'oto'; kaydet(); }
  // "Otomatik" seçimde Doğa Atlası'nın müziği: sakin arp ezgisi + hafif orman ve kuş sesleri (listede ayrıca görünmez).
  // Eskiden yalnızca kuş sesi çalıyordu; kısık olduğu için "Doğa Atlası'nda müzik açılmıyor" izlenimi veriyordu.
  const DOGA_OTO = { id: 'doga-oto', ad: 'Doğa Atlası: arp ezgisi ve orman sesleri', url: WC + '2/20/Greensleeves.ogg', url2: GA + 'ambiences/spring_day_forest.ogg', baz: 0.36, baz2: 0.2, basla: 0.5 };
  // ---------- 🎼 Çağa göre müzik ("Otomatik" seçimde, Tarih Atlası) ----------
  // Zaman çizelgesindeki yıl hangi çağdaysa o çağın bir kaydı çalar. `bas`: çağın başladığı yıl (sitenin kuralı: MÖ artı, MS eksi);
  // liste eskiden yeniye sıralıdır, yıla uyan son kayıt seçilir. Kayıtların hepsi Wikimedia Commons'tandır; lisansları KAYNAKLAR.md'de.
  const CAGLAR = [
    { id: 'cag-tunc', bas: Infinity, ad: 'Tunç Çağı: Hurri ilahisi (Ugarit, MÖ 1400 dolayı; varsayımsal yorum)', url: WC + '4/48/Hurrian_Song_H6.ogg', baz: 0.34 },
    { id: 'cag-antik', bas: 800, ad: 'Antik Çağ: Seikilos Ağıtı (bilinen en eski eksiksiz ezgi)', url: WC + 'b/b6/%CE%9F_%CE%95%CF%80%CE%B9%CF%84%CE%AC%CF%86%CE%B9%CE%BF%CF%82_%CF%84%CE%BF%CF%85_%CE%A3%CE%B5%E1%BF%96%CE%BA%CE%B9%CE%BB%CE%BF%CF%85_-_Epitaph_of_Seikilos.ogg', baz: 0.36 },
    { id: 'cag-orta', bas: -500, ad: 'Orta Çağ: Cantigas de Santa Maria, 100. ezgi (13. yüzyıl)', url: WC + '1/13/Santa_Maria.ogg', baz: 0.34 },
    { id: 'cag-ronesans', bas: -1400, ad: 'Rönesans: lavta (Ludwig Senfl)', url: WC + '7/7f/Ludwig_Senfl_--_Ach_Elslein.opus', baz: 0.38, basla: 0.5 },
    { id: 'cag-barok', bas: -1600, ad: 'Barok: keman sonatı (Telemann)', url: WC + 'a/a8/Telemann_-_2violin_Sonata_1-1.ogg', baz: 0.34, basla: 0.5 },
    { id: 'cag-klasik', bas: -1750, ad: 'Klasik dönem: Mozart, 16. Piyano Sonatı', url: WC + '3/38/Wolfgang_Amadeus_Mozart_-_sonata_no._16_in_c_major%2C_k.545_%27sonata_facile%27_-_i._allegro.ogg', baz: 0.3 },
    { id: 'cag-romantik', bas: -1820, ad: 'Romantik dönem: Chopin, Noktürn Op. 9 No. 2', url: WC + '0/04/Chopin_Nocturne_No._2_in_E_Flat_Major%2C_Op._9.ogg', baz: 0.34 },
    { id: 'cag-modern', bas: -1900, ad: '20. yüzyıl: Debussy, Clair de Lune', url: WC + '6/67/Clair_de_Lune_by_Claude_Debussy_%281905%2C_piano_solo%29.opus', baz: 0.36 }
  ];
  const yilOku = () => { const y = window.ZY && window.ZY.Y; return typeof y === 'number' && isFinite(y) ? y : null; };
  function cagBul(y) {
    if (y == null) return CAGLAR[3];   // yıl henüz bilinmiyorsa eski varsayılan (lavta)
    let c = CAGLAR[0]; for (const k of CAGLAR) if (y <= k.bas) c = k;
    return c;
  }
  const parcaBul = id => id === DOGA_OTO.id ? DOGA_OTO : (CAGLAR.find(m => m.id === id) || MUZIKLER.find(m => m.id === id));

  // ---------- 🌊🏞️⚔️⛏️🌋💨 Gerçek Doğa & Olay Ses Efektleri ----------
  const SFX = {
    okyanus: { url: GA + 'water/waves_crashing_on_rock_beach.ogg', sure: 6500, baz: 0.62 },
    nehir:   { url: GA + 'water/small_stream_flowing.ogg', sure: 5800, baz: 0.65 },
    savas:   { url: GA + 'impacts/crash_metal_sweetener_distant.ogg', sure: 2600, baz: 0.72 },
    savas2:  { url: GA + 'impacts/metal_crash.ogg', sure: 2400, baz: 0.68 },
    maden:   { url: GA + 'tools/digging_with_trowel.ogg', sure: 3800, baz: 0.70 },
    volkan:  { url: WC + '2/2b/385098_morganpurkis_volcano.ogg', sure: 5200, baz: 0.75 },
    ruzgar:  { url: GA + 'weather/wind.ogg', sure: 4800, baz: 0.55 },
    tufek:   { url: WC + 'e/ee/Gunshots_8.ogg', sure: 5200, baz: 0.5 },                       // ateşli silahlar çağının kara savaşları
    top:     { url: GA + 'weapons/big_explosion_distant.ogg', sure: 5200, baz: 0.7 }          // toplu gemiler çağının deniz savaşları
  };

  // ---------- 🐾 Gerçek Hayvan Sesi Kayıtları (yalnızca gerçek kayıt bulunan türler!) ----------
  // Eşleşmeyen hayvanlar sessiz geçer — yapay/benzer bip sesi asla çalınmaz.
  const HAYVAN_SES = [
    // Büyük kediler
    [/aslan|lion/i, WC + 'd/d3/Lionroar.wav', 4800, 0.78],
    [/kaplan|tiger|smilodon|kılıç diş|kilic dis/i, WC + '2/29/439280_schots_angry-tiger.wav', 4500, 0.72],
    [/çita|cita|cheetah/i, WC + 'c/ca/Acoustic-Structure-and-Contextual-Use-of-Calls-by-Captive-Male-and-Female-Cheetahs-%28Acinonyx-pone.0158546.s001.oga', 4500, 0.72],
    [/puma|cougar|jaguar|pars|leopar|kar leoparı|kar leopari/i, WC + '2/2a/Cougar1.ogg', 4200, 0.72],
    [/van kedisi|kedi|vaşak|vasak|karakulak/i, GA + 'animals/cat_purr.ogg', 4200, 0.75],
    // Balinalar & Yunuslar
    [/orka|katil balina|orca/i, WC + '7/79/Killer_whale.ogg', 5500, 0.72],
    [/mavi balina|blue whale/i, WC + '3/3b/Blue_Whale_NE_Pacific.ogg', 5200, 0.78],
    [/ispermeçet|ispermecet|kaşalot|kasalot/i, WC + '3/3c/Sperm_Whale_Creak_2.ogg', 4800, 0.72],
    [/balina|whale/i, WC + '1/13/Humpbackwhale2.ogg', 5800, 0.75],
    [/yunus|dolphin|narval|beluga|beyaz balina/i, WC + '9/9f/Beluga_vocalizations.ogg', 5200, 0.75],
    // Filler & Mamutlar
    [/\bfil\b|afrika fili|asya fili|mamut|mastodon|elephant/i, WC + '4/40/Elephant_voice_-_trumpeting.ogg', 4200, 0.75],
    // Kurtlar, Tilkiler, Köpekler
    [/kurt|wolf|dire wolf|korkunç kurt|korkunc kurt/i, WC + '8/87/Wolf_howls.ogg', 5500, 0.75],
    [/tilki|çakal|cakal|coyote|çöl tilkisi|col tilkisi|kutup tilkisi|sırtlan|sirtlan/i, WC + '6/67/Pack_of_coyotes_howling.ogg', 4800, 0.70],
    [/köpek|kopek|dingo|kangal|akbaş|akbas/i, GA + 'animals/dog_barking.ogg', 3800, 0.68],
    // Primatlar
    [/şempanze|sempanze|goril|orangutan|bonobo|gigantopithecus/i, WC + '5/56/Pant-hoot_call_made_by_a_male_chimpanzee.ogg', 4800, 0.72],
    [/maymun|gibon|lemur|makak|babun|marmoset/i, WC + 'b/b8/Howler_monkey.ogg', 4800, 0.72],
    // Kuşlar
    [/kartal|şahin|sahin|doğan|dogan|atmaca|akbaba|kondor/i, WC + '5/59/Bald_Eagle_Yellowstone_National_Park.ogg', 4600, 0.72],
    [/baykuş|baykus|puhu|owl/i, WC + 'a/a7/BuboBuboMariankaSlovakia2012.ogg', 4800, 0.75],
    [/kuzgun|karga|raven|crow/i, GA + 'animals/crow_call.ogg', 3800, 0.70],
    [/martı|marti|albatros|sumru|pelikan|fırkateyn/i, WC + '4/4b/Yellow-legged_Gull_-_Larus_michahellis_michahellis.ogg', 4500, 0.68],
    [/bülbül|bulbul|kızılgerdan|kizilgerdan|saka|serçe|serce|kırlangıç|kirlangic|sinekkusu|sinek kuşu|cennet kuşu|cennet kusu|tukan|papağan|papagan|kakapo/i, WC + '7/7c/Turdus_merula_2.ogg', 5000, 0.70],
    // Sürüngenler & Amfibiler
    [/timsah|aligatör|aligator|kayman|gaviyal|spinosaurus/i, WC + 'b/bf/27alligator2bellow.ogg', 4800, 0.75],
    [/kurbağa|kurbaga|semender|aksolotl|frog/i, WC + '5/51/Frogs_croak_calling_chorus_at_night.ogg', 5000, 0.70],
    // Çiftlik / Bozkır Memelileri
    [/\bat\b|yılkı|yilki|przewalski|zebra|eşek|esek|mustang/i, WC + 'd/db/Wiehern.ogg', 3800, 0.72],
    [/geyik|ren geyiği|ren geyigi|karibu|sığın|sigin|irlanda geyiği|irlanda geyigi|elk/i, WC + '3/30/DM550106_CervusElaphus_Slovakia_hill_Volovec.ogg', 5000, 0.72],
    [/bizon|manda|inek|öküz|okuz|yaban sığırı|yaban sigiri|yak\b|gnu|bufalo/i, WC + '4/48/Mudchute_cow_1.ogg', 3800, 0.72],
    [/yarasa|bat\b|vampir yarasa/i, WC + '9/94/Pipistrellus.ogg', 4200, 0.70],
    // Böcekler
    [/arı\b|ari\b|bal arısı|bal arisi|yaban arısı|yaban arisi/i, WC + '6/62/Bee_Buzzing_Sound_-_Animal_Sounds.opus', 4500, 0.68],
    [/cırcır|circir|çekirge|cekirge|ağustos böceği|agustos bocegi|peygamber devesi/i, WC + '8/80/Field_cricket_Gryllus_pennsylvanicus.ogg', 4500, 0.68]
  ];

  // Bu dosya uygulama.js'ten sonra yüklenir: sayfa Doğa Atlası'nda açıldıysa (body.atlas-doga) ilk değer oradan okunur.
  // (Eskiden hep 'tarih' başlıyordu; site Doğa Atlası'nda açılınca "Otomatik" seçimi Tarih müziğini çalıyordu.)
  let atlasMod = document.body && document.body.classList.contains('atlas-doga') ? 'doga' : 'tarih';
  let muzikEl = null, muzikEl2 = null, muzikParcaId = null;
  let aktifSfx = null, sfxTimer = null, fadeRaf = null;
  let kilicSira = 0;

  const etkinVol = (baz = 1) => cfg.sessiz ? 0 : Math.max(0, Math.min(1, (+cfg.vol || 0) * baz));

  function aktifParcaBul() {
    if (cfg.parca === 'oto') return atlasMod === 'doga' ? DOGA_OTO : cagBul(yilOku());
    return parcaBul(cfg.parca) || MUZIKLER[0];
  }

  function sesGuncelle() {
    const p = parcaBul(muzikParcaId) || MUZIKLER[0];
    if (muzikEl) {
      const v = cfg.muzik ? etkinVol(p.baz) : 0;
      muzikEl.volume = v;
      if (v <= 0 && !muzikEl.paused) muzikEl.pause();
    }
    if (muzikEl2) {
      const v2 = cfg.muzik && !(ortamId && p.id === DOGA_OTO.id) ? etkinVol(p.baz2 || p.baz) : 0;
      muzikEl2.volume = v2;
      if (v2 <= 0 && !muzikEl2.paused) muzikEl2.pause();
    }
    if (ortamEl) { if (ortamEl.__kis) { clearInterval(ortamEl.__kis); ortamEl.__kis = null; } ortamEl.volume = ortamId ? etkinVol(ORTAM[ortamId].baz) : 0; }
    if (aktifSfx && cfg.sessiz) {
      sfxDurdur();
    }
  }

  function audioKur(url, vol, basla) {
    const el = new Audio(url);
    el.loop = true;
    el.preload = 'auto';
    el.volume = vol;
    if (basla > 0) {
      const atla = () => { try { if (el.currentTime < basla) el.currentTime = basla; } catch (e) {} };
      el.addEventListener('loadedmetadata', atla, { once: true });
    }
    // Bazı tarayıcılarda loop kesilirse diye garanti tekrar dinleyicisi
    el.addEventListener('ended', () => {
      if (cfg.sessiz || !cfg.muzik) return;
      try { el.currentTime = basla || 0; el.play().catch(() => {}); } catch (e) {}
    });
    el.play().catch(() => {});
    return el;
  }

  function muzikBaslat(zorlaYenile) {
    if (cfg.sessiz || !cfg.muzik) { muzikDurdur(); return; }
    const p = aktifParcaBul();
    if (muzikEl && muzikParcaId === p.id && !zorlaYenile) {
      muzikEl.volume = etkinVol(p.baz);
      if (muzikEl.paused) muzikEl.play().catch(() => {});
      if (muzikEl2) {
        muzikEl2.volume = ortamId && p.id === DOGA_OTO.id ? 0 : etkinVol(p.baz2 || p.baz);
        if (muzikEl2.paused) muzikEl2.play().catch(() => {});
      }
      return;
    }
    // eski parça kısılarak susar, yenisi açılarak girer (çağ değişirken müzik birden kesilmesin)
    for (const eski of [muzikEl, muzikEl2]) if (eski) kis(eski, 0, 700, () => { try { eski.pause(); eski.src = ''; } catch (e) {} });
    muzikEl = muzikEl2 = null;
    muzikParcaId = p.id;
    muzikEl = audioKur(p.url, 0, p.basla || 0); kis(muzikEl, etkinVol(p.baz), 900);
    if (p.url2) { muzikEl2 = audioKur(p.url2, 0, 0); kis(muzikEl2, ortamId && p.id === DOGA_OTO.id ? 0 : etkinVol(p.baz2 || p.baz), 900); }
    uiGuncelle();
  }
  // bir ses öğesinin düzeyini `ms` sürede `hedef`e getirir (aynı öğede yeni çağrı eskisini iptal eder)
  function kis(el, hedef, ms, sonra) {
    if (!el) return;
    if (el.__kis) clearInterval(el.__kis);
    const v0 = el.volume, t0 = performance.now();
    el.__kis = setInterval(() => {
      const p = Math.min(1, (performance.now() - t0) / ms);
      try { el.volume = Math.max(0, Math.min(1, v0 + (hedef - v0) * p)); } catch (e) {}
      if (p >= 1) { clearInterval(el.__kis); el.__kis = null; if (sonra) sonra(); }
    }, 60);
  }

  // ---------- 🌴 Bölgeye göre ortam sesi ----------
  // Küreye yaklaşınca (yakınlık en az ORTAM_Z) ekranın ortasındaki yerin sesi kısık ve sürekli çalar: açık denizde dalga,
  // yağmur ormanında orman, çölde ve kutuplarda rüzgâr. "Doğa ve olay sesleri" kutusuna bağlıdır. Öteki yerlerde susar.
  const ORTAM = {
    okyanus: { ad: 'okyanus dalgaları', url: GA + 'water/waves_crashing_on_rock_beach.ogg', baz: 0.3 },
    orman: { ad: 'yağmur ormanı', url: GA + 'ambiences/jungle_atmosphere_afternoon.ogg', baz: 0.36 },
    col: { ad: 'çöl rüzgârı', url: GA + 'weather/wind.ogg', baz: 0.26 },
    kutup: { ad: 'kutup rüzgârı', url: GA + 'weather/wind.ogg', baz: 0.32 }
  };
  const ORTAM_Z = 2.4;
  // tropikal yağmur ormanı kuşakları: [güney, kuzey, batı, doğu]
  const YAGMUR_ORMANI = [[-11, 5, -76, -50], [-5, 4, 9, 28], [4, 7.5, -9, 9], [-9, 7, 95, 150]];
  let ortamId = null, ortamEl = null, ortamAday = null, dokunuldu = false;
  function halkada(h, la, lo) {
    let ic = false;
    for (let i = 0, j = h.length - 1; i < h.length; j = i++) {
      const a = h[i], b = h[j];
      if ((a[0] > la) !== (b[0] > la) && lo < (b[1] - a[1]) * (la - a[0]) / (b[0] - a[0]) + a[1]) ic = !ic;
    }
    return ic;
  }
  function bolgeBul() {
    const DN = window.Dunya, cv = document.getElementById('globe');
    if (!DN || !DN.view || !DN.karaMi || !cv || !cv.getClientRects().length || document.hidden) return null;
    const v = DN.view; if (!(v.z >= ORTAM_Z)) return null;
    const la = v.lat, lo = ((v.lon % 360) + 540) % 360 - 180, S = window.DOGAL_SEKIL || {};
    if (Math.abs(la) >= 66) return 'kutup';
    if (!DN.karaMi(la, lo)) return 'okyanus';
    if ((S.buz || []).some(h => halkada(h, la, lo))) return 'kutup';
    if ((S.col || []).some(h => halkada(h, la, lo))) return 'col';
    if (YAGMUR_ORMANI.some(k => la >= k[0] && la <= k[1] && lo >= k[2] && lo <= k[3])) return 'orman';
    return null;
  }
  function ortamAyarla(id) {
    if (id === ortamId) return;
    if (ortamEl) { const eski = ortamEl; kis(eski, 0, 900, () => { try { eski.pause(); eski.src = ''; } catch (e) {} }); ortamEl = null; }
    ortamId = id;
    if (id) { ortamEl = audioKur(ORTAM[id].url, 0, 0); kis(ortamEl, etkinVol(ORTAM[id].baz), 1200); }
    // Doğa müziğinin orman katmanı, bölgenin kendi sesi çalarken susar
    if (muzikEl2 && muzikParcaId === DOGA_OTO.id) kis(muzikEl2, id || !cfg.muzik ? 0 : etkinVol(DOGA_OTO.baz2), 900);
    uiGuncelle();
  }
  // saniyede bir yoklama: çağ değiştiyse müzik, bölge değiştiyse ortam sesi değişir (iki yoklama üst üste aynıysa: küre dönerken zıplamasın)
  let cagAday = null;
  setInterval(() => {
    if (!dokunuldu) return;
    if (cfg.parca === 'oto' && atlasMod === 'tarih' && cfg.muzik && !cfg.sessiz) {
      const c = cagBul(yilOku());
      if (c.id !== muzikParcaId) { if (cagAday === c.id) { cagAday = null; muzikBaslat(); } else cagAday = c.id; } else cagAday = null;
    }
    // savaş yerine yaklaşınca o savaşın sesi bir kez çalar (uzaklaşıp yeniden yaklaşınca yine çalar)
    if (!cfg.sessiz && cfg.doga) { const sv = yakinSavas(); if (sv && sv !== sonSavas) playSavas(sv); sonSavas = sv; }
    const b = cfg.sessiz || !cfg.doga ? null : bolgeBul();
    if (b !== ortamId) { if (ortamAday === b) ortamAyarla(b); else ortamAday = b; } else ortamAday = b;
  }, 1000);

  function muzikDurdur() {
    if (muzikEl) { try { muzikEl.pause(); } catch (e) {} }
    if (muzikEl2) { try { muzikEl2.pause(); } catch (e) {} }
  }

  function sfxDurdur() {
    if (sfxTimer) { clearTimeout(sfxTimer); sfxTimer = null; }
    if (fadeRaf) { cancelAnimationFrame(fadeRaf); fadeRaf = null; }
    if (aktifSfx) {
      try { aktifSfx.pause(); aktifSfx.src = ''; } catch (e) {}
      aktifSfx = null;
    }
  }

  function playUrl(url, sure = 4800, baz = 0.72) {
    if (cfg.sessiz || !url) return false;
    sfxDurdur();
    const el = new Audio(url);
    el.preload = 'auto';
    const hedefVol = etkinVol(baz);
    el.volume = hedefVol;
    aktifSfx = el;
    el.play().catch(() => {});
    // Belirli süre sonunda yumuşakça kısılıp dursun (rahatsız etmesin)
    const fadeBas = Math.max(900, sure - 900);
    sfxTimer = setTimeout(() => {
      if (aktifSfx !== el) return;
      const t0 = performance.now(), v0 = el.volume;
      const step = now => {
        if (aktifSfx !== el) return;
        const p = Math.min(1, (now - t0) / 850);
        el.volume = Math.max(0, v0 * (1 - p));
        if (p < 1 && !el.paused) fadeRaf = requestAnimationFrame(step);
        else { try { el.pause(); } catch (e) {} if (aktifSfx === el) aktifSfx = null; }
      };
      fadeRaf = requestAnimationFrame(step);
    }, fadeBas);
    return true;
  }

  // ---------- Doğa & Etkinlik SFX Fonksiyonları ----------
  function playOkyanus() { if (cfg.doga) playUrl(SFX.okyanus.url, SFX.okyanus.sure, SFX.okyanus.baz); }
  function playNehir()   { if (cfg.doga) playUrl(SFX.nehir.url, SFX.nehir.sure, SFX.nehir.baz); }
  function playVolkan()  { if (cfg.doga) playUrl(SFX.volkan.url, SFX.volkan.sure, SFX.volkan.baz); }
  function playRuzgar()  { if (cfg.doga) playUrl(SFX.ruzgar.url, SFX.ruzgar.sure, SFX.ruzgar.baz); }
  function playMaden()   { if (cfg.doga) playUrl(SFX.maden.url, SFX.maden.sure, SFX.maden.baz); }
  // Savaşın sesi çağa göre seçilir (e: olay kaydı; yıl sitenin kuralıyla: MÖ artı, MS eksi). Kara savaşlarında MS 1500'den
  // sonra tüfek, deniz savaşlarında MS 1450'den sonra top; daha eski çağlarda kılıç ve metal sesleri.
  function playSavas(e) {
    if (!cfg.doga) return;
    const y = e && typeof e.y === 'number' ? e.y : null, deniz = !!e && e.tur === 'deniz';
    const s = deniz && y != null && y <= -1450 ? SFX.top : !deniz && y != null && y <= -1500 ? SFX.tufek : (kilicSira++ % 2 === 0) ? SFX.savas : SFX.savas2;
    playUrl(s.url, s.sure, s.baz);
  }
  // Savaş ya da deniz savaşı katmanı açıkken küreye yaklaşınca ekranın ortasına en yakın savaşı bulur (yoksa null)
  function yakinSavas() {
    const DN = window.Dunya, cv = document.getElementById('globe'), O = window.OLAYLAR, y = yilOku();
    if (!DN || !DN.view || !DN.layers || !O || y == null || !cv || !cv.getClientRects().length || document.hidden) return null;
    const v = DN.view; if (!(v.z >= 3.2) || (!DN.layers.savas && !DN.layers.deniz)) return null;
    const la = v.lat, lo = ((v.lon % 360) + 540) % 360 - 180, esik = 14 / v.z, ar = DN.aralik || 100, ck = Math.cos(la * Math.PI / 180);
    let en = null, enU = esik;
    for (const e of O) {
      if (!e.ll || (e.tur !== 'savas' && e.tur !== 'deniz') || !DN.layers[e.tur] || Math.abs(y - e.y) > ar) continue;
      const u = Math.hypot(e.ll[0] - la, ((e.ll[1] - lo + 540) % 360 - 180) * ck);
      if (u < enU) { enU = u; en = e; }
    }
    return en;
  }
  let sonSavas = null;

  // ---------- 🐾 Gerçek Hayvan Sesi Eşleyici ----------
  function hayvanKaydiBul(o) {
    if (!o) return null;
    const met = ((o.id || '') + ' ' + (o.ad || '') + ' ' + (o.w || '')).toLocaleLowerCase('tr');
    for (const row of HAYVAN_SES) {
      if (row[0].test(met)) return row;
    }
    return null;
  }

  function hayvanSesiVarMi(o) {
    return !!hayvanKaydiBul(o);
  }

  function playHayvan(o, zorla) {
    if (cfg.sessiz || (!cfg.hayvan && !zorla)) return false;
    const kayit = hayvanKaydiBul(o);
    if (!kayit) return false; // Gerçek kayıt yoksa sessiz geç!
    return playUrl(kayit[1], kayit[2], kayit[3]);
  }

  function setAtlasMod(mod) {
    const yeni = mod === 'doga' ? 'doga' : 'tarih';
    if (atlasMod === yeni) return;
    atlasMod = yeni;
    if (cfg.parca === 'oto' && !cfg.sessiz && cfg.muzik) {
      muzikBaslat(true);
    }
    uiGuncelle();
  }

  // ---------- UI Bağlantısı (#sesbtn + #sespop) ----------
  function uiGuncelle() {
    const btn = document.getElementById('sesbtn');
    if (btn) {
      const kapali = cfg.sessiz || cfg.vol <= 0 || (!cfg.muzik && !cfg.doga && !cfg.hayvan);
      // düğmenin simgesi ayarlar çarkıdır (index.html); ses kapalıyken yalnızca soluklaşır (.sessiz)
      btn.classList.toggle('sessiz', kapali);
      btn.title = kapali ? 'Ayarlar (ses kapalı)' : 'Ayarlar: ses, müzik, renk teması ve küre görünümü';
    }
    const pop = document.getElementById('sespop');
    if (!pop) return;
    const sustur = pop.querySelector('#ses-sessiz');
    if (sustur) {
      sustur.classList.toggle('on', cfg.sessiz);
      sustur.textContent = cfg.sessiz ? '🔊 Sesi Tekrar Aç' : '🔇 Tümünü Sessize Al';
    }
    const vol = pop.querySelector('#ses-vol'), volY = pop.querySelector('#ses-vol-yazi');
    if (vol) vol.value = Math.round(cfg.vol * 100);
    if (volY) volY.textContent = `%${Math.round(cfg.vol * 100)}`;
    const mz = pop.querySelector('#ses-muzik'); if (mz) mz.checked = !!cfg.muzik;
    const dg = pop.querySelector('#ses-doga'); if (dg) dg.checked = !!cfg.doga;
    const hy = pop.querySelector('#ses-hayvan'); if (hy) hy.checked = !!cfg.hayvan;
    const pr = pop.querySelector('#ses-parca'); if (pr) pr.value = cfg.parca || 'oto';
    const cl = pop.querySelector('#ses-calan');
    if (cl) {
      const p = parcaBul(muzikParcaId), calan = [];
      if (p && cfg.muzik && !cfg.sessiz && muzikEl) calan.push('🎵 ' + (p.ad || '').replace(/^[^\p{L}\d]+/u, ''));
      if (ortamId) calan.push('🌍 Bölge sesi: ' + ORTAM[ortamId].ad);
      cl.textContent = calan.join(' · '); cl.hidden = !calan.length;
    }
  }

  function bagla() {
    const pop = document.getElementById('sespop');
    const btn = document.getElementById('sesbtn');
    if (!pop) return;
    if (btn) {
      btn.addEventListener('click', e => {
        e.stopPropagation();
        const acilacak = pop.hidden;
        pop.hidden = !acilacak;
        btn.setAttribute('aria-expanded', String(acilacak));
        if (acilacak) uiGuncelle();
      });
    }
    pop.addEventListener('click', e => e.stopPropagation());
    document.addEventListener('click', e => {
      if (!pop.hidden && !e.target.closest('#sespop') && !e.target.closest('#sesbtn')) {
        pop.hidden = true;
        if (btn) btn.setAttribute('aria-expanded', 'false');
      }
    });
    pop.querySelector('#ses-sessiz')?.addEventListener('click', () => {
      cfg.sessiz = !cfg.sessiz;
      kaydet();
      if (cfg.sessiz) { muzikDurdur(); sfxDurdur(); ortamAyarla(null); }
      else { sesGuncelle(); if (cfg.muzik) muzikBaslat(); }
      uiGuncelle();
    });
    pop.querySelector('#ses-vol')?.addEventListener('input', e => {
      cfg.vol = Math.max(0, Math.min(1, +e.target.value / 100));
      if (cfg.vol > 0 && cfg.sessiz) cfg.sessiz = false;
      kaydet();
      sesGuncelle();
      if (!cfg.sessiz && cfg.muzik) muzikBaslat();
      uiGuncelle();
    });
    pop.querySelector('#ses-muzik')?.addEventListener('change', e => {
      cfg.muzik = e.target.checked;
      kaydet();
      if (cfg.muzik && !cfg.sessiz) muzikBaslat();
      else muzikDurdur();
      uiGuncelle();
    });
    pop.querySelector('#ses-parca')?.addEventListener('change', e => {
      cfg.parca = e.target.value || 'oto';
      if (cfg.sessiz) cfg.sessiz = false;
      if (!cfg.muzik) cfg.muzik = true;
      kaydet();
      muzikBaslat(true);
      uiGuncelle();
    });
    pop.querySelector('#ses-doga')?.addEventListener('change', e => {
      cfg.doga = e.target.checked;
      if (!cfg.doga) { sfxDurdur(); ortamAyarla(null); }
      kaydet(); uiGuncelle();
    });
    pop.querySelector('#ses-hayvan')?.addEventListener('change', e => {
      cfg.hayvan = e.target.checked;
      kaydet(); uiGuncelle();
    });
    uiGuncelle();
  }

  // Tarayıcı kuralı: ilk kullanıcı dokunuşunda müzik açıksa otomatik başlasın
  const ilkDokunus = () => {
    dokunuldu = true;
    if (!cfg.sessiz && cfg.muzik) muzikBaslat();
    window.removeEventListener('pointerdown', ilkDokunus);
    window.removeEventListener('keydown', ilkDokunus);
  };
  window.addEventListener('pointerdown', ilkDokunus, { passive: true });
  window.addEventListener('keydown', ilkDokunus, { passive: true });

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', bagla);
  else bagla();

  window.Ses = {
    playOkyanus, playNehir, playSavas, playMaden, playVolkan, playRuzgar,
    playHayvan, hayvanSesiVarMi, setAtlasMod, uiGuncelle,
    get ayar() { return { ...cfg }; }
  };
})();
