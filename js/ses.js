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

  // ---------- 🎵 5 Seçilebilir Arka Plan Müziği / Ambiyansı ----------
  const MUZIKLER = [
    { id: 'tarih', ad: '🏛️ Tarihî Lavta (Rönesans)', url: WC + '7/7f/Ludwig_Senfl_--_Ach_Elslein.opus', baz: 0.36 },
    { id: 'doga', ad: '🌿 Bahar Ormanı & Kuşlar (Doğa)', url: GA + 'ambiences/spring_day_forest.ogg', baz: 0.34 },
    { id: 'okyanus', ad: '🌊 Sakin Okyanus Dalgaları', url: GA + 'water/waves_crashing_on_rock_beach.ogg', baz: 0.28 },
    { id: 'orman', ad: '🌴 Tropik Yağmur Ormanı', url: GA + 'ambiences/jungle_atmosphere_afternoon.ogg', baz: 0.32 },
    { id: 'kozmik', ad: '🌌 Kozmik Zaman Yolculuğu', url: GA + 'science_fiction/outer_space.ogg', baz: 0.30 }
  ];

  // ---------- 🌊🏞️⚔️⛏️🌋💨 Gerçek Doğa & Olay Ses Efektleri ----------
  const SFX = {
    okyanus: { url: GA + 'water/waves_crashing_on_rock_beach.ogg', sure: 6500, baz: 0.62 },
    nehir:   { url: GA + 'water/small_stream_flowing.ogg', sure: 5800, baz: 0.65 },
    savas:   { url: GA + 'impacts/crash_metal_sweetener_distant.ogg', sure: 2600, baz: 0.72 },
    savas2:  { url: GA + 'impacts/metal_crash.ogg', sure: 2400, baz: 0.68 },
    maden:   { url: GA + 'tools/digging_with_trowel.ogg', sure: 3800, baz: 0.70 },
    volkan:  { url: WC + '2/2b/385098_morganpurkis_volcano.ogg', sure: 5200, baz: 0.75 },
    ruzgar:  { url: GA + 'weather/wind.ogg', sure: 4800, baz: 0.55 }
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

  let atlasMod = 'tarih';
  let muzikEl = null, muzikParcaId = null;
  let aktifSfx = null, sfxTimer = null, fadeRaf = null;
  let kilicSira = 0;

  const etkinVol = (baz = 1) => cfg.sessiz ? 0 : Math.max(0, Math.min(1, (+cfg.vol || 0) * baz));

  function aktifParcaBul() {
    const hedefId = cfg.parca === 'oto' ? (atlasMod === 'doga' ? 'doga' : 'tarih') : cfg.parca;
    return MUZIKLER.find(m => m.id === hedefId) || MUZIKLER[0];
  }

  function sesGuncelle() {
    if (muzikEl) {
      const p = MUZIKLER.find(m => m.id === muzikParcaId) || MUZIKLER[0];
      const v = cfg.muzik ? etkinVol(p.baz) : 0;
      muzikEl.volume = v;
      if (v <= 0 && !muzikEl.paused) muzikEl.pause();
    }
    if (aktifSfx && cfg.sessiz) {
      sfxDurdur();
    }
  }

  function muzikBaslat(zorlaYenile) {
    if (cfg.sessiz || !cfg.muzik) { muzikDurdur(); return; }
    const p = aktifParcaBul();
    if (muzikEl && muzikParcaId === p.id && !zorlaYenile) {
      muzikEl.volume = etkinVol(p.baz);
      if (muzikEl.paused) muzikEl.play().catch(() => {});
      return;
    }
    if (muzikEl) {
      try { muzikEl.pause(); muzikEl.src = ''; } catch (e) {}
    }
    muzikParcaId = p.id;
    muzikEl = new Audio(p.url);
    muzikEl.loop = true;
    muzikEl.preload = 'auto';
    muzikEl.volume = etkinVol(p.baz);
    muzikEl.play().catch(() => {});
  }

  function muzikDurdur() {
    if (muzikEl) {
      try { muzikEl.pause(); } catch (e) {}
    }
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
  function playSavas() {
    if (!cfg.doga) return;
    const s = (kilicSira++ % 2 === 0) ? SFX.savas : SFX.savas2;
    playUrl(s.url, s.sure, s.baz);
  }

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
      btn.textContent = kapali ? '🔇' : (cfg.vol < 0.35 ? '🔉' : '🔊');
      btn.classList.toggle('sessiz', kapali);
      btn.title = kapali ? 'Ses kapalı — açmak için tıkla' : `Ses ve müzik ayarları (%${Math.round(cfg.vol * 100)})`;
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
      if (cfg.sessiz) { muzikDurdur(); sfxDurdur(); }
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
      kaydet();
      if (cfg.muzik && !cfg.sessiz) muzikBaslat(true);
      uiGuncelle();
    });
    pop.querySelector('#ses-doga')?.addEventListener('change', e => {
      cfg.doga = e.target.checked;
      if (!cfg.doga) sfxDurdur();
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
