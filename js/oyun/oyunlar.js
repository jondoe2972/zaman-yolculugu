// 🎮 Oyunlar menüsü ve isteğe bağlı (lazy) oyun yükleyici:
// Oyun verileri ve motorları (data/oyun/*, js/oyun/*) sayfa açılışında değil,
// kullanıcı 🎮 Oyunlar sekmesine tıkladığında (veya ilgili bağlantı/pencere istediğinde) yüklenir.
'use strict';
(() => {
  const PAKET = {
    kim: [
      'data/oyun/kim.js?v=2',
      'data/oyun/kim-kolay.js?v=2',
      'data/oyun/kim-orta.js?v=1',
      'data/oyun/kim-zor.js?v=2',
      'data/oyun/kim-dunya.js?v=1',
      'js/oyun/cizimler.js?v=4',
      'js/oyun/kim.js?v=8'
    ],
    sinir: [
      'data/oyun/sinir-bil.js?v=1',
      'js/oyun/sinir-bil.js?v=4'
    ],
    eski: [
      'js/oyun/hangisi-eski.js?v=1'
    ],
    toprak: [
      'js/oyun/topraklar.js?v=3'
    ],
    hayvan: [
      'js/oyun/hayvan-oyun.js?v=1'
    ]
  };
  const dosyaSoz = new Map();
  const paketSoz = new Map();
  function yukleTek(src) {
    if (dosyaSoz.has(src)) return dosyaSoz.get(src);
    const p = new Promise((ok, red) => {
      const s = document.createElement('script');
      s.src = src;
      s.onload = ok;
      s.onerror = () => { dosyaSoz.delete(src); red(new Error('Yüklenemedi: ' + src)); };
      document.head.appendChild(s);
    });
    dosyaSoz.set(src, p);
    return p;
  }
  function paketYukle(ad) {
    if (!PAKET[ad]) return Promise.resolve();
    if (paketSoz.has(ad)) return paketSoz.get(ad);
    const p = (async () => {
      for (const src of PAKET[ad]) await yukleTek(src);
    })().catch(err => { paketSoz.delete(ad); throw err; });
    paketSoz.set(ad, p);
    return p;
  }

  const gunNo = () => {
    const t = new Date();
    return Math.max(0, Math.floor((Date.UTC(t.getFullYear(), t.getMonth(), t.getDate()) - Date.UTC(2026, 10, 21)) / 864e5));
  };
  function sinirBugunBitti() {
    if (window.SinirBil) return window.SinirBil.bugunBitti();
    try { return !!JSON.parse(localStorage['zy-sinir-' + gunNo()] || 'null')?.b; } catch (e) { return false; }
  }
  function kimBugunBitti() {
    if (window.BenKimim && window.BenKimim.bugunBitti) return window.BenKimim.bugunBitti();
    try { return !!JSON.parse(localStorage['zy-kim-gun-' + gunNo()] || 'null')?.bitti; } catch (e) { return false; }
  }
  function eskiRekor() {
    if (window.HangisiEski && window.HangisiEski.rekor) return window.HangisiEski.rekor();
    try { return JSON.parse(localStorage['zy-eski-ist'] || 'null')?.rekor || 0; } catch (e) { return 0; }
  }
  function hayvanRekor() {
    if (window.HayvanOyunu && window.HayvanOyunu.rekor) return window.HayvanOyunu.rekor();
    try { return JSON.parse(localStorage['zy-hayvan-ist'] || 'null')?.seriRekor || 0; } catch (e) { return 0; }
  }

  const OYUN_KUTULARI = ['sinirbil', 'hayat', 'eski-oyun', 'topraklar', 'sasirt', 'hayvan-oyun'];
  function digerleriniKapat(haricId) {
    for (const id of OYUN_KUTULARI) {
      if (id === haricId) continue;
      const e = document.getElementById(id);
      if (e) e.hidden = true;
    }
    const sb = document.getElementById('tt-secbar');
    if (sb) sb.hidden = true;
    window.__kureSec = null;
  }

  const btn = document.querySelector('[data-mod="oyun"]');
  const DUNYA = !!(window.BOLGE && window.BOLGE.dunya);
  const OYUNLAR = [
    {
      id: 'dog', kutu: 'hayat', ikon: '🎭', ad: 'Ben kimim?',
      alt: () => kimBugunBitti() ? '✓ Günün Kişisi çözüldü · serbest oyna' : '📅 Günün Kişisi + 3 zorluk · ipuçlarıyla ünlüyü bil',
      ac: async () => {
        if (!DUNYA) { location.href = location.pathname + '?dog=1'; return; }
        await paketYukle('kim');
        if (window.Hayat) window.Hayat.basla();
      }
    },
    {
      id: 'eski', kutu: 'eski-oyun', ikon: '⚖️', ad: 'Hangisi Daha Eski?', yeni: true,
      alt: () => { const r = eskiRekor(); return r ? `İki ünlü yapıdan hangisi daha eski? · 🏆 Rekor: ${r}` : 'İki ünlü yapıdan hangisi daha önce yapıldı? Seri yap!'; },
      ac: async () => {
        await paketYukle('eski');
        if (window.HangisiEski) window.HangisiEski.ac();
      }
    },
    {
      id: 'sinir', kutu: 'sinirbil', ikon: '🗺️', ad: 'Sınırdan Bil',
      alt: () => sinirBugunBitti() ? '✓ Bugünkü bulmaca çözüldü · serbest oyna' : 'Günlük bulmaca: sınırı gör, devleti bil',
      ac: async () => {
        await paketYukle('sinir');
        if (window.SinirBil) window.SinirBil.ac();
      }
    },
    {
      id: 'hayvan', kutu: 'hayvan-oyun', ikon: '🐾', ad: 'Hayvanlar Alemi', yeni: true,
      alt: () => { const r = hayvanRekor(); return r ? `Bu hayvan nerede yaşar? + Doğa Bilgini · 🏆 Seri: ${r}` : 'Fotoğraftan yaşam bölgesini bil + 8 soruluk doğa testi'; },
      ac: async () => {
        await paketYukle('hayvan');
        if (window.HayvanOyunu) window.HayvanOyunu.ac();
      }
    },
    {
      id: 'toprak', kutu: 'topraklar', ikon: '📍', ad: 'Bu Toprakların Tarihi',
      alt: 'Bir şehir ya da küreden nokta seç: 5.000 yıllık devlet şeridi',
      ac: async () => {
        await paketYukle('toprak');
        if (window.ToprakTarihi) window.ToprakTarihi.ac();
      }
    },
    {
      id: 'aa', kutu: 'sasirt', ikon: '🤯', ad: 'Şaşırt Beni',
      alt: 'Tarihten şaşırtıcı bilgiler; tek tıkla haritada gör ve paylaş',
      ac: () => window.AyniAnda && window.AyniAnda.sasirt(true)
    },
    {
      id: 'kesif', kutu: 'modal', ikon: '🧭', ad: 'Keşif Defterim',
      alt: 'Okyanuslar, hayvanlar, dağlar ve kültürlerdeki ilerlemen',
      ac: () => window.ZY && window.ZY.openKesif && window.ZY.openKesif()
    },
    {
      id: 'rehber', kutu: 'hosgeldin', ikon: '❓', ad: 'Hızlı Rehber',
      alt: '6 sahnelik animasyonlu tanıtımı tekrar izle',
      ac: () => window.ZY && window.ZY.rehberAc && window.ZY.rehberAc()
    }
  ];

  let pop = null;
  function ciz() {
    if (!pop) return;
    pop.innerHTML = '<b class="op-bas">🎮 Oyunlar ve Keşif</b>' + OYUNLAR.map(o => `<button data-oyun="${o.id}" role="menuitem"><span class="op-ik">${o.ikon}</span><span><b>${o.ad}${o.yeni ? ' <i>yeni</i>' : ''}</b><small>${typeof o.alt === 'function' ? o.alt() : o.alt}</small></span></button>`).join('');
  }
  function konum() {
    if (!pop || !btn) return;
    const r = btn.getBoundingClientRect();
    pop.style.top = (r.bottom + 6) + 'px';
    pop.style.left = Math.max(8, Math.min(window.innerWidth - pop.offsetWidth - 8, r.left + r.width / 2 - pop.offsetWidth / 2)) + 'px';
  }
  function goster(ac) {
    if (!pop || !btn) return;
    if (ac) {
      ciz();
      pop.hidden = false;
      konum();
      // Menü açıldığında oyun paketlerini arka planda sessizce hazırlamaya başla
      for (const ad of Object.keys(PAKET)) paketYukle(ad).catch(() => {});
    } else {
      pop.hidden = true;
    }
    btn.classList.toggle('on', ac);
    btn.setAttribute('aria-expanded', String(ac));
  }

  window.OyunYukle = Object.assign(ad => paketYukle(ad), {
    hepsi: () => Promise.all(Object.keys(PAKET).map(paketYukle)),
    menuAc: () => goster(true)
  });

  if (btn) {
    pop = document.createElement('div');
    pop.className = 'oyunpop';
    pop.hidden = true;
    pop.setAttribute('role', 'menu');
    document.body.appendChild(pop);

    btn.addEventListener('click', ev => { ev.stopPropagation(); goster(pop.hidden); });
    pop.addEventListener('click', async ev => {
      const b = ev.target.closest('[data-oyun]'); if (!b) return;
      const o = OYUNLAR.find(x => x.id === b.dataset.oyun); if (!o) return;
      goster(false);
      digerleriniKapat(o.kutu);
      try {
        await o.ac();
      } catch (err) {
        const toast = document.getElementById('toast');
        if (toast) { toast.textContent = 'Oyun yüklenemedi. Bağlantını kontrol edip tekrar dene.'; toast.classList.add('show'); setTimeout(() => toast.classList.remove('show'), 3500); }
      }
    });
    document.addEventListener('click', ev => { if (!pop.hidden && !pop.contains(ev.target)) goster(false); });
    document.addEventListener('keydown', ev => { if (ev.key === 'Escape') goster(false); });
    window.addEventListener('resize', () => { if (!pop.hidden) konum(); });
  }

  const qs = new URLSearchParams(location.search);
  const oyunQ = qs.get('oyun');
  if (oyunQ === 'sinir') {
    setTimeout(() => paketYukle('sinir').then(() => window.SinirBil && window.SinirBil.ac()).catch(() => {}), 500);
  } else if (oyunQ === 'kim' && DUNYA) {
    setTimeout(() => paketYukle('kim').then(() => window.BenKimim && window.BenKimim.gunluk()).catch(() => {}), 500);
  } else if (oyunQ === 'eski') {
    setTimeout(() => paketYukle('eski').then(() => window.HangisiEski && window.HangisiEski.ac()).catch(() => {}), 500);
  } else if (oyunQ === 'toprak') {
    setTimeout(() => paketYukle('toprak').then(() => window.ToprakTarihi && window.ToprakTarihi.ac()).catch(() => {}), 500);
  } else if (oyunQ === 'hayvan') {
    setTimeout(() => paketYukle('hayvan').then(() => window.HayvanOyunu && window.HayvanOyunu.ac()).catch(() => {}), 500);
  } else if (oyunQ === 'sasirt') {
    setTimeout(() => window.AyniAnda && window.AyniAnda.sasirt(true), 400);
  } else if (qs.get('dog') && DUNYA) {
    setTimeout(() => paketYukle('kim').then(() => window.Hayat && window.Hayat.basla()).catch(() => {}), 500);
  }
})();
