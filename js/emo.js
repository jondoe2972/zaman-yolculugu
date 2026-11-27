// Sayfadaki emojileri cihazın kendi emoji yazı tipiyle değil, sitenin kendi resimleriyle (img/emo/, Google Noto Emoji)
// gösterir: Windows, Android ve iOS'ta herkes aynı simgeyi görür.
// - Yazının içindeki her emoji <emo-s> öğesine sarılır; karakter içeride kalır (kopyalama, ekran okuyucu ve textContent
//   okuyan kodlar bozulmaz), resmi yüklenince görünmez olup yerine arka plan resmi çizilir (stil: css/stil.css, emo-s.on).
// - Resmi olmayan ya da henüz yüklenmemiş emoji olduğu gibi (cihaz emojisi olarak) kalır.
// - Dokunulmayanlar: <select>/<option>, giriş kutuları, SVG ve tuval içleri, [data-emo-yok] işaretli öğeler.
// Hangi emojilerin resmi var: js/emo-liste.js (üretim: node araclar/emo-indir.js).
(() => {
  'use strict';
  const L = window.EMO_LISTE;
  if (!L || !window.MutationObserver || typeof Intl === 'undefined' || !Intl.Segmenter) return;
  const VAR = new Set(L.split(' ')), SURUM = '1';
  const HIZLI = /[\p{Extended_Pictographic}\p{Regional_Indicator}]/u, SUNUM = /^\p{Emoji_Presentation}/u;
  const seg = new Intl.Segmenter(undefined, { granularity: 'grapheme' });
  const ATLA = 'script,style,textarea,input,select,option,title,noscript,code,pre,svg,canvas,[contenteditable],emo-s,[data-emo-yok]';

  // Emoji sayılanlar: renkli gösterimi varsayılan olanlar, FE0F ile emoji yapılmış olanlar, U+1F000 üstü resim simgeleri,
  // bayraklar. ▶ ↗ © gibi yazı simgelerine dokunulmaz (araclar/emo-indir.js aynı kuralı kullanır).
  const anahtarlar = new Map();
  function anahtar(g) {
    let k = anahtarlar.get(g); if (k !== undefined) return k;
    k = null;
    if (g.includes('️') || SUNUM.test(g) || g.codePointAt(0) >= 0x1F000) {
      const a = Array.from(g, c => c.codePointAt(0)).filter(c => c !== 0xFE0F).map(c => c.toString(16)).join('_');
      if (VAR.has(a)) k = a;
    }
    anahtarlar.set(g, k); return k;
  }

  const durum = new Map();   // anahtar -> 'bekle' | 'ok' | 'yok'
  const adres = k => 'img/emo/' + k + '.png?v=' + SURUM;
  const ac = el => { el.style.backgroundImage = 'url(' + adres(el.dataset.e) + ')'; el.classList.add('on'); };
  function yukle(k) {
    if (durum.has(k)) return; durum.set(k, 'bekle');
    const im = new Image();
    im.onload = () => { durum.set(k, 'ok'); document.querySelectorAll('emo-s[data-e="' + k + '"]:not(.on)').forEach(ac); };
    im.onerror = () => { durum.set(k, 'yok'); };
    im.src = adres(k);
  }

  function metinIsle(n) {
    const t = n.data; if (!t || !HIZLI.test(t)) return;
    const ust = n.parentElement; if (!ust || ust.closest(ATLA)) return;
    let parca = null, son = 0, baskaYazi = false;
    for (const { segment, index } of seg.segment(t)) {
      const k = HIZLI.test(segment) ? anahtar(segment) : null; if (!k) continue;
      if (!parca) parca = document.createDocumentFragment();
      if (index > son) { parca.appendChild(document.createTextNode(t.slice(son, index))); baskaYazi = true; }
      const s = document.createElement('emo-s'); s.dataset.e = k; s.textContent = segment;
      if (durum.get(k) === 'ok') ac(s); else yukle(k);
      parca.appendChild(s); son = index + segment.length;
    }
    if (!parca) return;
    if (son < t.length) { parca.appendChild(document.createTextNode(t.slice(son))); baskaYazi = true; }
    // Yazıyla karışık emoji tek bir sarmalayıcıda tutulur: esnek (flex/grid) kutularda yazı ile emoji ayrı öğelere bölünmesin.
    if (baskaYazi || parca.childNodes.length > 1) { const w = document.createElement('emo-w'); w.appendChild(parca); n.replaceWith(w); }
    else n.replaceWith(parca);
  }
  function agacIsle(kok) {
    if (kok.nodeType === 3) { metinIsle(kok); return; }
    if (kok.nodeType !== 1 || kok.localName === 'emo-s' || kok.localName === 'emo-w') return;
    const w = document.createTreeWalker(kok, NodeFilter.SHOW_TEXT), liste = []; let n;
    while ((n = w.nextNode())) if (HIZLI.test(n.data)) liste.push(n);
    for (const m of liste) metinIsle(m);
  }

  const gozcu = new MutationObserver(kayitlar => {
    for (const k of kayitlar) {
      if (k.type === 'characterData') metinIsle(k.target);
      else for (const n of k.addedNodes) if (n.isConnected) agacIsle(n);
    }
  });
  agacIsle(document.body);
  gozcu.observe(document.body, { childList: true, subtree: true, characterData: true });
})();
