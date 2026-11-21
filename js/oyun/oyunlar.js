// 🎮 Oyunlar menüsü ve isteğe bağlı (lazy) oyun yükleyici:
// Oyun verileri ve motorları (data/oyun/*, js/oyun/*) sayfa açılışında değil,
// kullanıcı 🎮 Oyunlar sekmesine tıkladığında (veya ilgili bağlantı/pencere istediğinde) yüklenir.
'use strict';
(() => {
  const PAKET = {
    kim: [
      'data/oyun/kim.js?v=2',
      'data/oyun/kim-kolay.js?v=1',
      'data/oyun/kim-orta.js?v=1',
      'data/oyun/kim-zor.js?v=1',
      'data/oyun/kim-dunya.js?v=1',
      'js/oyun/cizimler.js?v=4',
      'js/oyun/kim.js?v=5'
    ],
    sinir: [
      'data/oyun/sinir-bil.js?v=1',
      'js/oyun/sinir-bil.js?v=2'
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

  function sinirBugunBitti() {
    if (window.SinirBil) return window.SinirBil.bugunBitti();
    try {
      const t = new Date(), g = Math.floor((Date.UTC(t.getFullYear(), t.getMonth(), t.getDate()) - Date.UTC(2026, 10, 21)) / 864e5);
      return !!JSON.parse(localStorage['zy-sinir-' + g] || 'null')?.b;
    } catch (e) { return false; }
  }

  const btn = document.querySelector('[data-mod="oyun"]');
  const DUNYA = !!(window.BOLGE && window.BOLGE.dunya);
  const OYUNLAR = [
    {
      id: 'dog', ikon: '🎭', ad: 'Ben kimim?',
      alt: 'Ünlü biri olarak doğ; hayatından ipuçlarıyla kim olduğunu bil', yeni: true,
      ac: async () => {
        if (!DUNYA) { location.href = location.pathname + '?dog=1'; return; }
        await paketYukle('kim');
        if (window.Hayat) window.Hayat.basla();
      }
    },
    {
      id: 'sinir', ikon: '🗺️', ad: 'Sınırdan Bil',
      alt: () => sinirBugunBitti() ? '✓ Bugünkü bulmaca çözüldü · serbest oyna' : 'Günlük bulmaca: sınırı gör, devleti bil', yeni: true,
      ac: async () => {
        await paketYukle('sinir');
        if (window.SinirBil) window.SinirBil.ac();
      }
    },
    {
      id: 'aa', ikon: '⏳', ad: 'Biliyor muydun?',
      alt: `Tarihten ${window.AYNI_ANDA ? window.AYNI_ANDA.length : 'yüzlerce'} şaşırtıcı bilgi; tek tıkla o zamana git`,
      ac: () => window.AyniAnda && window.AyniAnda.ac()
    }
  ];

  let pop = null;
  function ciz() {
    if (!pop) return;
    pop.innerHTML = '<b class="op-bas">🎮 Oyunlar</b>' + OYUNLAR.map(o => `<button data-oyun="${o.id}" role="menuitem"><span class="op-ik">${o.ikon}</span><span><b>${o.ad}${o.yeni ? ' <i>yeni</i>' : ''}</b><small>${typeof o.alt === 'function' ? o.alt() : o.alt}</small></span></button>`).join('');
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
      paketYukle('kim').catch(() => {});
      paketYukle('sinir').catch(() => {});
    } else {
      pop.hidden = true;
    }
    btn.classList.toggle('on', ac);
    btn.setAttribute('aria-expanded', String(ac));
  }

  window.OyunYukle = Object.assign(ad => paketYukle(ad), {
    hepsi: () => Promise.all(['kim', 'sinir'].map(paketYukle)),
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
      for (const id of ['sinirbil', 'hayat']) {
        const e = document.getElementById(id);
        if (e && id !== { dog: 'hayat', sinir: 'sinirbil' }[o.id]) e.hidden = true;
      }
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
  if (qs.get('oyun') === 'sinir') {
    setTimeout(() => paketYukle('sinir').then(() => window.SinirBil && window.SinirBil.ac()).catch(() => {}), 500);
  } else if (qs.get('dog') && DUNYA) {
    setTimeout(() => paketYukle('kim').then(() => window.Hayat && window.Hayat.basla()).catch(() => {}), 500);
  }
})();
