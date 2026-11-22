// 🎧 Zaman Yolculuğu Ses & Doğa Ambiyansı Motoru (100% Web Audio API — sıfır harici ses dosyası, tam kalıcı ayarlar)
// Ayrı ayrı kontrol: Ana Sessiz, Ana Ses Seviyesi, Rahatlatıcı Arka Plan Müziği, Okyanus/Nehir Doğa Sesleri, Hayvan Sesleri Eklentisi.
'use strict';
(() => {
  const KEY = 'zy-ses-ayar';
  const DEF = { sessiz: false, vol: 0.45, muzik: true, doga: true, hayvan: true };
  let cfg = { ...DEF };
  try {
    const saved = JSON.parse(localStorage.getItem(KEY) || 'null');
    if (saved && typeof saved === 'object') cfg = { ...DEF, ...saved };
  } catch (e) {}
  const kaydet = () => { try { localStorage.setItem(KEY, JSON.stringify(cfg)); } catch (e) {} };

  let ctx = null, master = null, muzikGain = null, sfxGain = null;
  let noiseBuf = null, muzikTimer = null, muzikCalisiyor = false;
  let aktifDoga = null; // son okyanus/nehir sesi (üst üste binmesin)

  function ac() {
    if (ctx) {
      if (ctx.state === 'suspended') ctx.resume().catch(() => {});
      return ctx;
    }
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return null;
    ctx = new AC();
    master = ctx.createGain();
    muzikGain = ctx.createGain();
    sfxGain = ctx.createGain();
    muzikGain.connect(master);
    sfxGain.connect(master);
    master.connect(ctx.destination);
    sesGuncelle();
    // 3 saniyelik yumuşak pembe/kahverengi gürültü tamponu (okyanus & nehir için)
    const len = ctx.sampleRate * 3;
    noiseBuf = ctx.createBuffer(1, len, ctx.sampleRate);
    const data = noiseBuf.getChannelData(0);
    let last = 0;
    for (let i = 0; i < len; i++) {
      const w = Math.random() * 2 - 1;
      last = (last + 0.04 * w) / 1.04;
      data[i] = last * 3.2;
    }
    return ctx;
  }

  function sesGuncelle() {
    if (!ctx || !master) return;
    const t = ctx.currentTime;
    const v = cfg.sessiz ? 0 : Math.max(0, Math.min(1, +cfg.vol || 0));
    master.gain.setTargetAtTime(v, t, 0.08);
    muzikGain.gain.setTargetAtTime(cfg.muzik ? 0.28 : 0, t, 0.18);
    sfxGain.gain.setTargetAtTime(0.75, t, 0.06);
  }

  // ---------- 🎵 Rahatlatıcı Arka Plan Müziği (sıcak pentatonik ambient pad + nazik arp notaları) ----------
  // Do majör / La minör pentatonik (C3..E5) — sakin, meditatif, huzurlu
  const AKORLAR = [
    [130.81, 196.00, 246.94, 293.66], // Cmaj9
    [110.00, 164.81, 220.00, 261.63], // Am7
    [174.61, 220.00, 261.63, 329.63], // Fmaj7
    [146.83, 220.00, 261.63, 329.63]  // Dm9
  ];
  const NOTALAR = [261.63, 293.66, 329.63, 392.00, 440.00, 523.25, 587.33, 659.25];
  let akorIdx = 0;

  function padCal(frekler, sure) {
    if (!ctx || cfg.sessiz || !cfg.muzik) return;
    const t = ctx.currentTime;
    const flt = ctx.createBiquadFilter();
    flt.type = 'lowpass'; flt.frequency.value = 620;
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.linearRampToValueAtTime(0.11, t + 2.2);
    g.gain.linearRampToValueAtTime(0.08, t + sure - 2.0);
    g.gain.linearRampToValueAtTime(0.0001, t + sure);
    flt.connect(g); g.connect(muzikGain);
    for (const f of frekler) {
      const o = ctx.createOscillator();
      o.type = 'sine';
      o.frequency.value = f;
      o.connect(flt);
      o.start(t); o.stop(t + sure + 0.1);
    }
  }

  function arpNota(gecikme) {
    if (!ctx || cfg.sessiz || !cfg.muzik) return;
    const t = ctx.currentTime + gecikme;
    const f = NOTALAR[Math.floor(Math.random() * NOTALAR.length)];
    const o = ctx.createOscillator(), g = ctx.createGain();
    o.type = 'triangle'; o.frequency.value = f;
    g.gain.setValueAtTime(0.0001, t);
    g.gain.linearRampToValueAtTime(0.08, t + 0.04);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 2.6);
    o.connect(g); g.connect(muzikGain);
    o.start(t); o.stop(t + 2.8);
  }

  function muzikBaslat() {
    if (muzikCalisiyor || cfg.sessiz || !cfg.muzik) return;
    if (!ac()) return;
    muzikCalisiyor = true;
    const adim = () => {
      if (!muzikCalisiyor || cfg.sessiz || !cfg.muzik) { muzikDurdur(); return; }
      padCal(AKORLAR[akorIdx % AKORLAR.length], 7.4);
      akorIdx++;
      arpNota(0.8);
      if (Math.random() < 0.75) arpNota(2.8 + Math.random() * 0.8);
      if (Math.random() < 0.55) arpNota(4.8 + Math.random() * 0.9);
      muzikTimer = setTimeout(adim, 6400);
    };
    adim();
  }

  function muzikDurdur() {
    muzikCalisiyor = false;
    if (muzikTimer) { clearTimeout(muzikTimer); muzikTimer = null; }
  }

  function dogaDurdur() {
    if (aktifDoga) {
      try { aktifDoga.gain.setTargetAtTime(0.0001, ctx.currentTime, 0.12); } catch (e) {}
      aktifDoga = null;
    }
  }

  // ---------- 🌊 Okyanus / Deniz Dalga Sesi (yumuşak, rahatsız etmeyen 2 dalga yükselişi) ----------
  function playOkyanus() {
    if (cfg.sessiz || !cfg.doga) return;
    if (!ac() || !noiseBuf) return;
    dogaDurdur();
    const t = ctx.currentTime;
    const src = ctx.createBufferSource();
    src.buffer = noiseBuf; src.loop = true;
    const flt = ctx.createBiquadFilter();
    flt.type = 'lowpass';
    flt.frequency.setValueAtTime(220, t);
    flt.frequency.linearRampToValueAtTime(580, t + 1.4);
    flt.frequency.linearRampToValueAtTime(200, t + 3.0);
    flt.frequency.linearRampToValueAtTime(520, t + 4.3);
    flt.frequency.linearRampToValueAtTime(160, t + 5.8);
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.linearRampToValueAtTime(0.32, t + 1.3);
    g.gain.linearRampToValueAtTime(0.11, t + 2.9);
    g.gain.linearRampToValueAtTime(0.26, t + 4.2);
    g.gain.linearRampToValueAtTime(0.0001, t + 5.9);
    src.connect(flt); flt.connect(g); g.connect(sfxGain);
    src.start(t); src.stop(t + 6.0);
    aktifDoga = g;
  }

  // ---------- 🏞️ Nehir Akışı / Dere Şırıltısı Sesi (hafif ve huzurlu) ----------
  function playNehir() {
    if (cfg.sessiz || !cfg.doga) return;
    if (!ac() || !noiseBuf) return;
    dogaDurdur();
    const t = ctx.currentTime;
    const src = ctx.createBufferSource();
    src.buffer = noiseBuf; src.loop = true;
    const bp = ctx.createBiquadFilter();
    bp.type = 'bandpass'; bp.frequency.value = 950; bp.Q.value = 1.4;
    const lfo = ctx.createOscillator(), lfoG = ctx.createGain();
    lfo.frequency.value = 2.6; lfoG.gain.value = 280;
    lfo.connect(lfoG); lfoG.connect(bp.frequency);
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.linearRampToValueAtTime(0.24, t + 0.6);
    g.gain.linearRampToValueAtTime(0.20, t + 3.4);
    g.gain.linearRampToValueAtTime(0.0001, t + 4.8);
    src.connect(bp); bp.connect(g); g.connect(sfxGain);
    lfo.start(t); src.start(t); lfo.stop(t + 4.9); src.stop(t + 4.9);
    aktifDoga = g;
  }

  // ---------- 🐾 Hayvan Sesleri Eklentisi (türe özel sentezlenmiş doğal ses profilleri) ----------
  function sesProfilBul(o) {
    const met = ((o && o.id) || '') + ' ' + ((o && o.ad) || '') + ' ' + ((o && o.ik) || '');
    if (/balina|orka|narval|🐋/i.test(met)) return 'balina';
    if (/yunus|🐬/i.test(met)) return 'yunus';
    if (/baykuş|baykus|🦉/i.test(met)) return 'baykus';
    if (/kurt|tilki|köpek|kopek|sırtlan|sirtlan|tilasin|🐺|🦊/i.test(met)) return 'kurt';
    if (/aslan|kaplan|pars|jaguar|leopar|smilodon|ayı|ayi|porsuk|🦁|🐅|🐆|🐻/i.test(met)) return 'kukreme';
    if (/kedi|çita|cita|vaşak|vasak|🐱/i.test(met)) return 'kedi';
    if (/fil|mamut|mastodon|🐘|🦣/i.test(met)) return 'fil';
    if (/kurbağa|kurbaga|🐸/i.test(met)) return 'kurbaga';
    if (/arı|ari|çekirge|cekirge|böcek|bocek|karınca|karinca|kelebek|yusufçuk|yusufcuk|termit|🐝|🦋|🦗|🐜/i.test(met)) return 'bocek';
    if (/yılan|yilan|kobra|anakonda|kertenkele|bukalemun|komodo|iguana|🐍|🦎/i.test(met)) return 'yilan';
    if (/ahtapot|mürekkep|murekkep|balık|balik|köpekbalığı|kopekbaligi|vatoz|kaplumbağa|kaplumbaga|denizatı|denizati|fok|mors|samur|manati|denizanası|denizanasi|🐙|🦈|🐟|🐢|🦭/i.test(met)) return 'su';
    if (/kuş|kus|kartal|şahin|sahin|doğan|dogan|papağan|papagan|leylek|flamingo|pelikan|tavus|kuzgun|akbaba|sumru|albatros|kivi|penguen|dodo|moa|puffin|tukan|🦅|🐦|🦢|🦩|🦜|🐧/i.test(met)) return 'kus';
    return 'memeli';
  }

  function playHayvan(o, zorla) {
    if (cfg.sessiz || (!cfg.hayvan && !zorla)) return;
    if (!ac()) return;
    const p = sesProfilBul(o), t = ctx.currentTime;
    const ton = (tip, f0, f1, d0, sure, amp = 0.22) => {
      const osc = ctx.createOscillator(), g = ctx.createGain();
      osc.type = tip;
      osc.frequency.setValueAtTime(f0, t + d0);
      osc.frequency.exponentialRampToValueAtTime(Math.max(25, f1), t + d0 + sure);
      g.gain.setValueAtTime(0.0001, t + d0);
      g.gain.linearRampToValueAtTime(amp, t + d0 + Math.min(0.08, sure * 0.25));
      g.gain.exponentialRampToValueAtTime(0.0001, t + d0 + sure);
      osc.connect(g); g.connect(sfxGain);
      osc.start(t + d0); osc.stop(t + d0 + sure + 0.05);
    };
    if (p === 'balina') {
      ton('sine', 190, 105, 0, 1.3, 0.24);
      ton('sine', 110, 165, 1.0, 1.1, 0.18);
    } else if (p === 'yunus') {
      ton('sine', 1600, 2900, 0, 0.16, 0.16);
      ton('sine', 2400, 1700, 0.18, 0.14, 0.15);
      ton('sine', 1900, 3100, 0.36, 0.22, 0.16);
    } else if (p === 'baykus') {
      ton('sine', 410, 385, 0, 0.35, 0.22);
      ton('sine', 395, 340, 0.5, 0.65, 0.22);
    } else if (p === 'kurt') {
      ton('triangle', 290, 510, 0, 0.6, 0.18);
      ton('triangle', 510, 340, 0.55, 0.9, 0.16);
    } else if (p === 'kukreme') {
      ton('sawtooth', 120, 62, 0, 0.95, 0.14);
      ton('triangle', 95, 52, 0.05, 1.05, 0.22);
    } else if (p === 'kedi') {
      ton('triangle', 560, 790, 0, 0.24, 0.16);
      ton('triangle', 790, 480, 0.22, 0.36, 0.14);
    } else if (p === 'fil') {
      ton('sawtooth', 260, 590, 0, 0.42, 0.14);
      ton('triangle', 590, 370, 0.4, 0.52, 0.18);
    } else if (p === 'kurbaga') {
      ton('sawtooth', 180, 360, 0, 0.14, 0.14);
      ton('sawtooth', 190, 380, 0.26, 0.16, 0.14);
    } else if (p === 'bocek') {
      for (let i = 0; i < 4; i++) ton('sine', 2800 + (i % 2) * 350, 2600, i * 0.11, 0.07, 0.10);
    } else if (p === 'yilan') {
      if (noiseBuf) {
        const src = ctx.createBufferSource(); src.buffer = noiseBuf;
        const hp = ctx.createBiquadFilter(); hp.type = 'highpass'; hp.frequency.value = 3200;
        const g = ctx.createGain();
        g.gain.setValueAtTime(0.0001, t); g.gain.linearRampToValueAtTime(0.22, t + 0.12); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.95);
        src.connect(hp); hp.connect(g); g.connect(sfxGain); src.start(t); src.stop(t + 1.0);
      }
    } else if (p === 'su') {
      ton('sine', 340, 620, 0, 0.12, 0.15);
      ton('sine', 420, 780, 0.16, 0.14, 0.14);
      ton('sine', 290, 510, 0.34, 0.18, 0.13);
    } else if (p === 'kus') {
      ton('sine', 1400, 2200, 0, 0.14, 0.15);
      ton('sine', 2100, 1500, 0.16, 0.13, 0.14);
      ton('sine', 1650, 2450, 0.34, 0.18, 0.15);
    } else {
      ton('triangle', 240, 170, 0, 0.38, 0.18);
      ton('triangle', 210, 155, 0.42, 0.34, 0.15);
    }
  }

  // ---------- 🎛️ Arayüz Bağlantısı (#sesbtn + #sespop) ----------
  function uiSenkron() {
    const btn = document.getElementById('sesbtn');
    if (btn) {
      btn.textContent = cfg.sessiz ? '🔇' : (cfg.vol < 0.35 ? '🔉' : '🔊');
      btn.classList.toggle('sessiz', !!cfg.sessiz);
      btn.title = cfg.sessiz ? 'Ses kapalı (tıkla: ses ayarları)' : 'Ses ve ambiyans ayarları';
    }
    const pop = document.getElementById('sespop');
    if (!pop) return;
    const ms = pop.querySelector('#ses-sessiz');
    if (ms) {
      ms.textContent = cfg.sessiz ? '🔊 Sesi Aç' : '🔇 Tümünü Sessize Al';
      ms.classList.toggle('on', !!cfg.sessiz);
    }
    const sl = pop.querySelector('#ses-vol');
    if (sl) sl.value = String(Math.round(cfg.vol * 100));
    const sv = pop.querySelector('#ses-vol-yazi');
    if (sv) sv.textContent = `%${Math.round(cfg.vol * 100)}`;
    const cm = pop.querySelector('#ses-muzik'); if (cm) cm.checked = !!cfg.muzik;
    const cd = pop.querySelector('#ses-doga'); if (cd) cd.checked = !!cfg.doga;
    const ch = pop.querySelector('#ses-hayvan'); if (ch) ch.checked = !!cfg.hayvan;
  }

  function uygula() {
    kaydet();
    sesGuncelle();
    if (cfg.sessiz || !cfg.muzik) muzikDurdur();
    else if (ctx) muzikBaslat();
    if (cfg.sessiz || !cfg.doga) dogaDurdur();
    uiSenkron();
  }

  function baslatUI() {
    const btn = document.getElementById('sesbtn'), pop = document.getElementById('sespop');
    if (!btn || !pop) return;
    uiSenkron();
    btn.addEventListener('click', ev => {
      ev.stopPropagation();
      const acik = !pop.hidden;
      pop.hidden = acik;
      btn.classList.toggle('on', !acik);
      if (!cfg.sessiz && cfg.muzik) { ac(); muzikBaslat(); }
    });
    pop.addEventListener('click', ev => ev.stopPropagation());
    document.addEventListener('click', ev => {
      if (!pop.hidden && !ev.target.closest('#sespop, #sesbtn')) { pop.hidden = true; btn.classList.remove('on'); }
    });
    pop.querySelector('#ses-sessiz')?.addEventListener('click', () => {
      cfg.sessiz = !cfg.sessiz;
      if (!cfg.sessiz) ac();
      uygula();
    });
    pop.querySelector('#ses-vol')?.addEventListener('input', ev => {
      cfg.vol = Math.max(0, Math.min(1, +ev.target.value / 100));
      if (cfg.vol > 0 && cfg.sessiz) cfg.sessiz = false;
      ac();
      uygula();
    });
    pop.querySelector('#ses-muzik')?.addEventListener('change', ev => {
      cfg.muzik = ev.target.checked;
      if (cfg.muzik && !cfg.sessiz) ac();
      uygula();
    });
    pop.querySelector('#ses-doga')?.addEventListener('change', ev => {
      cfg.doga = ev.target.checked;
      uygula();
    });
    pop.querySelector('#ses-hayvan')?.addEventListener('change', ev => {
      cfg.hayvan = ev.target.checked;
      uygula();
    });
    // İlk kullanıcı etkileşiminde (sessiz değilse ve müzik açıksa) rahatlatıcı arka plan müziğini başlat
    const ilkDokunus = () => {
      if (!cfg.sessiz && cfg.muzik && !muzikCalisiyor) {
        ac();
        muzikBaslat();
      }
      window.removeEventListener('pointerdown', ilkDokunus);
      window.removeEventListener('keydown', ilkDokunus);
    };
    window.addEventListener('pointerdown', ilkDokunus, { passive: true });
    window.addEventListener('keydown', ilkDokunus, { passive: true });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', baslatUI);
  else baslatUI();

  window.Ses = {
    get ayar() { return { ...cfg }; },
    playOkyanus,
    playNehir,
    playHayvan,
    dogaDurdur,
    sustur: () => { cfg.sessiz = true; uygula(); }
  };
})();
