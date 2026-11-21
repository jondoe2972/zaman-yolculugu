// ⚖️ Hangisi Daha Eski?: 541 ünlü yapı arasından iki kart çıkar; hangisinin daha önce yapıldığını tahmin et.
// Seri (streak), kişisel rekor, Vikipedi kapak fotoğrafları, yıl farkı ve emojili skor paylaşımı.
// Adres: ?oyun=eski · Veri: window.YAPILAR (data/yapilar/*.js)
'use strict';
window.HangisiEski = (() => {
  const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const API = 'https://en.wikipedia.org/w/api.php?format=json&origin=*&action=query&redirects=1&prop=pageimages&piprop=thumbnail&pithumbsize=540&titles=';
  const IKON = { mosque: '🕌', kabe: '🕋', church: '⛪', citadel: '🏰', saray: '🏯', tower: '🗼', eyfel: '🗼', gokdelen: '🏙️', modcity: '🏙️', kopru: '🌉', museum: '🏛️', kolonad: '🏛️', arena: '🏟️', heykel: '🗿', anit: '🗿', kemer: '🏛️', torii: '⛩️', pagoda: '🛕', prang: '🛕', stupa: '☸️', turbe: '🕌', tac: '🕌', sahel: '🕌', city: '🏛️', rocktemple: '⛰️', sur: '🧱', dam: '🌊', lighthouse: '🗼', opera: '🎭', obelisk: '🗿', step: '🛕', terrace: '⛰️', mastaba: '⛰️', temple: '🛕', ziggurat: '🛕' };
  const oku = (k, v) => { try { return JSON.parse(localStorage[k] || 'null') || v; } catch (e) { return v; } };
  const yaz = (k, v) => { try { localStorage[k] = JSON.stringify(v); } catch (e) { } };

  // MÖ (+), MS (-) sisteminde 0 yılı yok: gerçek yıl farkı
  function yilFarki(y1, y2) {
    const a = Math.max(y1, y2), b = Math.min(y1, y2);
    return a > 0 && b < 0 ? a - b - 1 : a - b;
  }

  const havuz = () => (window.YAPILAR || []).filter(y => y && typeof y.y === 'number' && y.y !== 0 && y.ad);
  const fotoCache = new Map();
  let fotoIstek = Promise.resolve();

  async function fotoYukle(list) {
    const eksik = [...new Set(list.map(x => x && x.w).filter(w => w && !fotoCache.has(w)))];
    if (!eksik.length) return;
    fotoIstek = fotoIstek.then(async () => {
      const kalan = eksik.filter(w => !fotoCache.has(w));
      if (!kalan.length) return;
      for (let i = 0; i < kalan.length; i += 20) {
        const parca = kalan.slice(i, i + 20);
        try {
          const j = await fetch(API + encodeURIComponent(parca.join('|'))).then(r => r.json());
          const map = {};
          for (const r of [...(j.query?.normalized || []), ...(j.query?.redirects || [])]) map[r.from] = r.to;
          const byT = {};
          for (const p of Object.values(j.query?.pages || {})) if (p.thumbnail) byT[p.title] = p.thumbnail.source;
          for (const t of parca) {
            let tt = t;
            for (let k = 0; k < 3 && map[tt]; k++) tt = map[tt];
            fotoCache.set(t, byT[tt] || null);
          }
        } catch (e) {
          /* çevrimdışı: simge görünür */
        }
      }
    });
    return fotoIstek;
  }

  const ZORLUK = {
    kolay: { ad: 'Kolay', minOnem: 4, minFark: 400, maxFark: 4500, xp: 5 },
    orta:  { ad: 'Orta',  minOnem: 2, minFark: 80,  maxFark: 1200, xp: 8 },
    zor:   { ad: 'Zor',   minOnem: 1, minFark: 5,   maxFark: 180,  xp: 12 }
  };
  let zorluk = 'orta';

  // Zorluğa ve seriye göre iki yapı seçer
  function ciftSec(seri, gorulen) {
    const tum = havuz();
    if (tum.length < 2) return null;
    const z = ZORLUK[zorluk] || ZORLUK.orta;
    const minOnem = zorluk === 'orta' ? (seri < 3 ? 4 : seri < 7 ? 3 : 2) : z.minOnem;
    let aday = tum.filter(x => (x.o || 1) >= minOnem && !gorulen.has(x.id));
    if (aday.length < 6) aday = tum.filter(x => !gorulen.has(x.id));
    if (aday.length < 2) { gorulen.clear(); aday = tum; }

    const minFark = z.minFark;
    const maxFark = zorluk === 'orta' ? (seri < 3 ? 1600 : seri < 7 ? 900 : 450) : z.maxFark;

    let enIyi = null;
    for (let deneme = 0; deneme < 60; deneme++) {
      const a = aday[Math.floor(Math.random() * aday.length)];
      const b = aday[Math.floor(Math.random() * aday.length)];
      if (!a || !b || a.id === b.id || a.y === b.y) continue;
      const f = yilFarki(a.y, b.y);
      if (f >= minFark && f <= maxFark) { enIyi = [a, b]; break; }
      if (!enIyi && f >= 5) enIyi = [a, b];
    }
    if (!enIyi) {
      const a = aday[0], b = aday.find(x => x.id !== a.id && x.y !== a.y);
      if (!b) return null;
      enIyi = [a, b];
    }
    gorulen.add(enIyi[0].id);
    gorulen.add(enIyi[1].id);
    return enIyi;
  }

  let el = null, s = null;

  function ist() { return oku('zy-eski-ist', { rekor: 0, oyun: 0, dogru: 0 }); }
  function istKaydet(seri, bitti) {
    const I = ist();
    if (seri > I.rekor) I.rekor = seri;
    if (bitti) { I.oyun++; I.dogru += seri; }
    yaz('zy-eski-ist', I);
    return I;
  }

  function sonrakiKuyruk() {
    while (s.kuyruk.length < 3) {
      const c = ciftSec(s.seri + s.kuyruk.length, s.gorulen);
      if (!c) break;
      s.kuyruk.push(c);
    }
    fotoYukle(s.kuyruk.flat()).catch(() => {});
  }

  function kutu() {
    if (!el) {
      el = document.createElement('div');
      el.id = 'eski-oyun';
      el.className = 'eski-oyun';
      el.setAttribute('role', 'dialog');
      el.setAttribute('aria-label', 'Hangisi Daha Eski?');
      document.querySelector('.stage').appendChild(el);
      el.addEventListener('click', tikla);
      window.addEventListener('keydown', tus);
    }
    el.hidden = false;
    return el;
  }

  function kartHTML(item, idx) {
    const acik = s.secim != null;
    const eskiIdx = s.cift[0].y > s.cift[1].y ? 0 : 1;
    const cls = ['eo-kart'];
    if (acik) {
      if (idx === eskiIdx) cls.push('dogru');
      else if (idx === s.secim) cls.push('yanlis');
      else cls.push('soluk');
    }
    const src = fotoCache.get(item.w);
    const ik = IKON[item.t] || '🏛️';
    return `<div class="${cls.join(' ')}" data-eo-sec="${idx}" role="button" tabindex="0">
      <div class="eo-foto" data-eo-w="${esc(item.w || '')}">
        ${src ? `<img src="${esc(src)}" alt="${esc(item.ad)}">` : `<span class="eo-ik">${ik}</span>`}
        ${acik ? `<span class="eo-yil-rozet">${YIL.fmt(item.y)}</span>` : '<span class="eo-yil-rozet gizli">?</span>'}
      </div>
      <div class="eo-bilgi">
        <b>${esc(item.ad)}</b>
        <small>📍 ${esc(item.sehir)}${item.ulke && item.ulke !== item.sehir ? ', ' + esc(item.ulke) : ''}</small>
        ${acik ? `<p class="eo-acik">${esc(item.yil || YIL.fmt(item.y))}</p>` : ''}
      </div>
      ${acik ? `<button type="button" class="eo-kure" data-eo-kure="${esc(item.id)}" title="Bu yapıyı kürede gör">🌍 Kürede gör</button>` : ''}
    </div>`;
  }

  function ciz() {
    const I = ist();
    const acik = s.secim != null;
    const eskiIdx = s.cift[0].y > s.cift[1].y ? 0 : 1;
    const eski = s.cift[eskiIdx], yeni = s.cift[1 - eskiIdx];
    const fark = yilFarki(eski.y, yeni.y);
    const dogru = acik && s.secim === eskiIdx;

    let alt = '';
    if (!acik) {
      alt = `<p class="eo-ipucu">Daha eski olduğunu düşündüğün yapıya tıkla</p>`;
    } else if (dogru) {
      alt = `<div class="eo-sonuc iyi">
        <b>🎉 Doğru! ${esc(eski.ad)}, ${fark.toLocaleString('tr-TR')} yıl daha eski.</b>
        ${eski.k ? `<small>${esc(eski.k)}</small>` : ''}
        <button data-eo="sonraki" class="ana">Sonraki Tur ›</button>
      </div>`;
    } else {
      const iz = s.izler.slice(-14).join('');
      const yeniRekor = s.seri > 0 && s.seri >= I.rekor && s.rekorKirildi;
      alt = `<div class="eo-sonuc bitti">
        <b>🙈 Bu sefer olmadı! ${esc(eski.ad)}, ${fark.toLocaleString('tr-TR')} yıl daha eski.</b>
        <div class="eo-skor">
          <span><b>🔥 ${s.seri}</b> seri</span>
          <span><b>🏆 ${I.rekor}</b> rekor${yeniRekor ? ' (yeni!)' : ''}</span>
        </div>
        ${iz ? `<div class="eo-izler" aria-label="Tur geçmişi">${iz}</div>` : ''}
        <div class="eo-btns">
          <button data-eo="tekrar" class="ana">🔁 Tekrar Oyna</button>
          <button data-eo="paylas">📋 Skoru Paylaş</button>
        </div>
      </div>`;
    }

    kutu().innerHTML = `
      <div class="eo-ust">
        <div class="eo-bas"><b>⚖️ Hangisi Daha Eski?</b><small>İki yapıdan hangisi daha önce yapıldı?</small></div>
        <div class="eo-sayac"><span>🔥 <b>${s.seri}</b></span><span>🏆 <b>${Math.max(I.rekor, s.seri)}</b></span></div>
        <button class="eo-x" title="Kapat" aria-label="Kapat">✕</button>
      </div>
      <div class="oz-bar">${Object.entries(ZORLUK).map(([k, v]) => `<button type="button" class="oz-btn${zorluk === k ? ' on' : ''}" data-eo-zor="${k}">${v.ad}</button>`).join('')}</div>
      <div class="eo-alan">
        ${kartHTML(s.cift[0], 0)}
        <span class="eo-vs" aria-hidden="true">VS</span>
        ${kartHTML(s.cift[1], 1)}
      </div>
      ${alt}`;

    // Fotoğraflar henüz önbellekte değilse arka planda yükleyip yerine koy
    fotoYukle(s.cift).then(() => {
      if (!el || el.hidden || !s) return;
      el.querySelectorAll('.eo-foto[data-eo-w]').forEach(box => {
        if (box.querySelector('img')) return;
        const src = fotoCache.get(box.dataset.eoW);
        if (!src) return;
        const ik = box.querySelector('.eo-ik');
        const img = document.createElement('img');
        img.src = src; img.alt = '';
        if (ik) ik.replaceWith(img); else box.prepend(img);
      });
    }).catch(() => {});
  }

  function sec(idx) {
    if (!s || s.secim != null) return;
    const eskiIdx = s.cift[0].y > s.cift[1].y ? 0 : 1;
    s.secim = idx;
    if (idx === eskiIdx) {
      s.seri++;
      s.izler.push('🟩');
      const I = ist();
      if (s.seri > I.rekor) { s.rekorKirildi = true; istKaydet(s.seri, false); }
      if (window.ZY && window.ZY.xpEkle) window.ZY.xpEkle((ZORLUK[zorluk] || ZORLUK.orta).xp, 'eski');
    } else {
      s.izler.push('🟥');
      s.bitti = true;
      istKaydet(s.seri, true);
    }
    ciz();
  }

  function sonraki() {
    if (!s || s.bitti) return;
    sonrakiKuyruk();
    s.cift = s.kuyruk.shift() || ciftSec(s.seri, s.gorulen);
    s.secim = null;
    if (!s.cift) return basla();
    sonrakiKuyruk();
    ciz();
  }

  function paylasMetni() {
    const I = ist();
    const iz = s.izler.slice(-15).join('');
    return `⚖️ Hangisi Daha Eski?\n${iz}\n🔥 Seri: ${s.seri} · 🏆 Rekor: ${I.rekor}\n${location.origin}${location.pathname}?oyun=eski`;
  }

  function basla() {
    const gorulen = new Set();
    const cift = ciftSec(0, gorulen);
    if (!cift) return;
    s = { seri: 0, cift, secim: null, bitti: false, rekorKirildi: false, izler: [], gorulen, kuyruk: [] };
    sonrakiKuyruk();
    ciz();
  }

  function tikla(ev) {
    if (ev.target.closest('.eo-x')) return kapat();
    const zr = ev.target.closest('[data-eo-zor]');
    if (zr) { zorluk = zr.dataset.eoZor; basla(); return; }
    const kr = ev.target.closest('[data-eo-kure]');
    if (kr) {
      ev.stopPropagation();
      const id = kr.dataset.eoKure;
      kapat();
      if (window.ZY && window.ZY.yapiKurede) window.ZY.yapiKurede(id);
      return;
    }
    const act = ev.target.closest('[data-eo]');
    if (act) {
      const k = act.dataset.eo;
      if (k === 'sonraki') sonraki();
      else if (k === 'tekrar') basla();
      else if (k === 'paylas') {
        const t = paylasMetni();
        (navigator.clipboard ? navigator.clipboard.writeText(t) : Promise.reject()).then(
          () => { act.textContent = '✓ Kopyalandı'; },
          () => { act.textContent = 'Kopyalanamadı'; }
        );
      }
      return;
    }
    const kart = ev.target.closest('[data-eo-sec]');
    if (kart) sec(+kart.dataset.eoSec);
  }

  function tus(ev) {
    if (!el || el.hidden || !s) return;
    if (ev.key === 'Escape') { kapat(); return; }
    if (s.secim == null) {
      if (ev.key === '1' || ev.key === 'ArrowLeft') { ev.preventDefault(); sec(0); }
      else if (ev.key === '2' || ev.key === 'ArrowRight') { ev.preventDefault(); sec(1); }
    } else if (!s.bitti && (ev.key === 'Enter' || ev.key === ' ')) {
      ev.preventDefault(); sonraki();
    } else if (s.bitti && ev.key === 'Enter') {
      ev.preventDefault(); basla();
    }
  }

  function ac() { basla(); }
  function kapat() { if (el) el.hidden = true; }
  function rekor() { return ist().rekor; }

  return { ac, kapat, rekor };
})();
