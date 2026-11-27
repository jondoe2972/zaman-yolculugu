// Aynı anda tek açılır pencere: bir açılır pencere (Katmanlar, ses, oyunlar menüsü, tarihe git, belgesel listesi, yer
// kartı, "Bu yıl" paneli, ☰ menü) açıldığında öteki açık olanlar kapanır; büyük bir pencere (arama, oyun, bilgi kartı…)
// açıldığında da açılır pencerelerin hepsi kapanır. Telefonda ve bilgisayarda aynı çalışır.
// Açılmayı düğmelere bağlanarak değil, öğelerin `hidden` / `class` değişimini izleyerek yakalar: pencere hangi yoldan
// açılırsa açılsın (düğme, kısayol, başka bir kod) kural işler.
(() => {
  'use strict';
  if (!window.MutationObserver) return;
  const $ = s => document.querySelector(s);
  const tikla = s => { const e = $(s); if (e) e.click(); };
  // Açılır pencereler: [ad, açık mı?, kapat]
  const ACILIR = [
    ['katman', () => { const e = $('#katman'); return !!e && !e.hidden; }, () => tikla('#katbtn')],
    ['ses', () => { const e = $('#sespop'); return !!e && !e.hidden; }, () => { const e = $('#sespop'), b = $('#sesbtn'); if (e) e.hidden = true; if (b) b.setAttribute('aria-expanded', 'false'); }],
    ['oyun', () => { const e = $('.oyunpop'); return !!e && !e.hidden; }, () => { const e = $('.oyunpop'), b = $('.modlar [data-mod="oyun"]'); if (e) e.hidden = true; if (b) { b.classList.remove('on'); b.setAttribute('aria-expanded', 'false'); } }],
    ['tarih', () => { const e = $('#tarihpop'); return !!e && !e.hidden; }, () => { const e = $('#tarihpop'), b = $('#tarihgit'); if (e) e.hidden = true; if (b) b.classList.remove('on'); }],
    ['tur', () => { const e = $('#turpop'); return !!e && !e.hidden; }, () => { const e = $('#turpop'); if (e) e.hidden = true; }],
    ['kart', () => { const e = $('#citycard'); return !!e && !e.hidden; }, () => { const e = $('#citycard'); if (e) e.hidden = true; }],
    ['panel', () => document.body.classList.contains('panelacik'), () => tikla('#buyil')],
    ['menu', () => { const e = $('#ustmenu'); return !!e && e.classList.contains('acik'); }, () => tikla('#ustmenu .um-x')]
  ];
  // Büyük pencereler: açıldıklarında açılır pencereler kapanır (kendi aralarındaki üst üste açılma düzenine dokunulmaz)
  const BUYUK = ['modal', 'hosgeldin', 'arama', 'wiki', 'ic', 'hayat', 'sinirbil', 'eski-oyun', 'topraklar', 'sasirt', 'hayvan-oyun', 'foto-oyun', 'derin-zaman', 'katman-ekran', 'hayatta-kal', 'duello-kutu', 'blitz-kutu'];
  const buyukAcik = () => BUYUK.filter(id => { const e = document.getElementById(id); return e && !e.hidden; });

  let onceki = new Set(), oncekiBuyuk = new Set(buyukAcik()), isliyor = false;
  function denetle() {
    if (isliyor) return; isliyor = true;
    try {
      const acik = new Set(ACILIR.filter(a => a[1]()).map(a => a[0])), buyuk = new Set(buyukAcik());
      const yeni = [...acik].filter(a => !onceki.has(a)), yeniBuyuk = [...buyuk].some(b => !oncekiBuyuk.has(b));
      if (yeniBuyuk) { for (const a of ACILIR) if (acik.has(a[0])) a[2](); }
      else if (yeni.length) {
        const kalan = yeni[yeni.length - 1];
        for (const a of ACILIR) if (a[0] !== kalan && acik.has(a[0])) a[2]();
        // büyük pencereler ekranı kapladığı için normalde altlarındaki düğmeye basılamaz; yine de bir açılır pencere
        // başka bir yoldan açılırsa açık büyük pencere de kendi kapat düğmesiyle kapanır
        for (const id of buyuk) { const e = document.getElementById(id), x = e && e.querySelector('.x, #ara-x, .pn-x, [data-kapat]'); if (x) x.click(); else if (e) e.hidden = true; }
      }
      onceki = new Set(ACILIR.filter(a => a[1]()).map(a => a[0])); oncekiBuyuk = new Set(buyukAcik());
    } finally { isliyor = false; }
  }
  const ILGILI = new Set(['katman', 'sespop', 'tarihpop', 'turpop', 'citycard', 'ustmenu', ...BUYUK]);
  new MutationObserver(kayitlar => {
    for (const k of kayitlar) {
      const t = k.target;
      if (t === document.body || ILGILI.has(t.id) || (t.classList && t.classList.contains('oyunpop'))) { denetle(); return; }
    }
  }).observe(document.body, { attributes: true, attributeFilter: ['hidden', 'class'], subtree: true });
  denetle();
})();
