// 🐾 Hayvanlar Alemi Oyunu:
// 1) 📍 Nerede Yaşar? (fotoğraf ve yaşam ipuçlarından hayvanın kıtasını/okyanusunu tahmin et, seri yap!)
// 2) 🧠 Doğa Bilgini (8 soruluk hızlı hayvan bilgisi yarışması + emojili skor paylaşımı)
// Adres: ?oyun=hayvan · Veri: window.ATLAS_HAYVANLAR (data/atlas/hayvanlar.js)
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

  let el = null, s = null;
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
    const I = ist(), L = window.ATLAS_HAYVANLAR || [];
    kutu().innerHTML = `
      <div class="ho-ust">
        <div><b>🐾 Hayvanlar Alemi</b><small>${L.length} bölge ve okyanus canlısıyla kendini dene</small></div>
        <button class="ho-x" title="Kapat" aria-label="Kapat">✕</button>
      </div>
      <div class="ho-modlar">
        <button data-ho="nerede" class="ho-mod">
          <span>📍</span>
          <div><b>Bu Hayvan Nerede Yaşar?</b><small>Fotoğrafı ve ipucunu gör, doğal yaşam bölgesini tahmin et · seri yap!${I.seriRekor ? ` (🏆 Rekor: ${I.seriRekor})` : ''}</small></div>
        </button>
        <button data-ho="test" class="ho-mod alt">
          <span>🧠</span>
          <div><b>Doğa Bilgini (8 Soru)</b><small>Şaşırtıcı özellikler, nesli tükenen türler ve okyanus canlıları${I.testRekor ? ` (🏆 En iyi: ${I.testRekor}/8)` : ''}</small></div>
        </button>
      </div>`;
  }

  // ---------- Mod 1: 📍 Nerede Yaşar? (Seri) ----------
  function neredeBasla() {
    const L = karistir(window.ATLAS_HAYVANLAR || []);
    if (!L.length) return;
    s = { mod: 'nerede', havuz: L, idx: 0, seri: 0, izler: [], secim: null, bitti: false, secenekler: [] };
    neredeTur();
  }
  function neredeTur() {
    if (s.idx >= s.havuz.length) { s.havuz = karistir(window.ATLAS_HAYVANLAR || []); s.idx = 0; }
    const h = s.havuz[s.idx];
    const dogru = kitaEtiket(h);
    const diger = karistir([...new Set(Object.values(KITA_GRUPLARI))].filter(x => x !== dogru)).slice(0, 3);
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
    const h = s.hedef, I = ist(), acik = s.secim != null, src = fotoCache.get(h.w);
    const dogruMu = acik && s.secim === s.dogru;
    // İpucunda kıta/ülke adını direkt vermeden yaşam ortamı + beslenme göster
    const ip = `🍽️ ${h.beslenme} · 🛡️ ${h.durum}`;
    kutu().innerHTML = `
      <div class="ho-ust">
        <div><b>📍 Bu Hayvan Nerede Yaşar?</b><small>Doğal yaşam bölgesini seç</small></div>
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

  // ---------- Mod 2: 🧠 Doğa Bilgini (8 Soru) ----------
  function soruUret() {
    const L = window.ATLAS_HAYVANLAR || [];
    const sorular = [];
    const adGizle = (metin, ad) => {
      let out = metin;
      for (const w of ad.split(/[\s()]+/).filter(x => x.length >= 4)) {
        out = out.replace(new RegExp(w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi'), '___');
      }
      return out;
    };
    const kar = karistir(L);
    // 4 adet "Bu özellik hangi hayvana ait?" sorusu
    for (const h of kar.slice(0, 4)) {
      const yanlis = karistir(L.filter(x => x.id !== h.id)).slice(0, 3);
      sorular.push({
        soru: `Bu şaşırtıcı özellik hangi hayvana ait?\n"${adGizle(h.ozellik, h.ad)}"`,
        dogru: h,
        siklar: karistir([h, ...yanlis]),
        aciklama: `${h.ik} ${h.ad} (${h.bolge})`
      });
    }
    // 1 adet nesli tükenen tür sorusu
    const tukenen = karistir(L.filter(x => x.durum === 'Nesli Tükendi'));
    const yasayan = karistir(L.filter(x => x.durum !== 'Nesli Tükendi'));
    if (tukenen.length && yasayan.length >= 3) {
      const h = tukenen[0];
      sorular.push({
        soru: 'Aşağıdaki hayvanlardan hangisinin nesli artık tükenmiştir?',
        dogru: h,
        siklar: karistir([h, ...yasayan.slice(0, 3)]),
        aciklama: `${h.ik} ${h.ad}: ${h.sayi}.`
      });
    }
    // 1 adet okyanus canlısı sorusu
    const deniz = karistir(L.filter(x => x.kita === 'Okyanus'));
    const kara = karistir(L.filter(x => x.kita !== 'Okyanus'));
    if (deniz.length && kara.length >= 3) {
      const h = deniz[0];
      sorular.push({
        soru: 'Hangisi ömrünü okyanuslarda ve denizlerde geçiren bir canlıdır?',
        dogru: h,
        siklar: karistir([h, ...kara.slice(0, 3)]),
        aciklama: `${h.ik} ${h.ad} — ${h.habitat}.`
      });
    }
    // 2 adet daha özellik/habitat sorusu (toplam 8)
    for (const h of kar.slice(4, 10)) {
      if (sorular.length >= 8) break;
      const yanlis = karistir(L.filter(x => x.id !== h.id && x.kita !== h.kita)).slice(0, 3);
      if (yanlis.length < 3) continue;
      sorular.push({
        soru: `Yaşam alanı "${h.habitat}" olan hayvan hangisidir?`,
        dogru: h,
        siklar: karistir([h, ...yanlis]),
        aciklama: `${h.ik} ${h.ad} (${h.bolge}) — ${h.ozellik}`
      });
    }
    return karistir(sorular).slice(0, 8);
  }

  function testBasla() {
    const sorular = soruUret();
    if (!sorular.length) return;
    s = { mod: 'test', sorular, idx: 0, dogruSayi: 0, izler: [], secim: null, bitti: false };
    testCiz();
  }
  function testCiz() {
    if (s.bitti) {
      const I = ist();
      const baslik = s.dogruSayi >= 7 ? 'Muhteşem! Doğa Bilginisin 🏆' : s.dogruSayi >= 5 ? 'Harika gidiyorsun! 🌟' : 'Güzel deneme, yeni türler öğrendin 🐾';
      kutu().innerHTML = `
        <div class="ho-ust">
          <div><b>🧠 Doğa Bilgini · Sonuç</b><small>${s.sorular.length} soru tamamlandı</small></div>
          <button class="ho-x" title="Kapat" aria-label="Kapat">✕</button>
        </div>
        <div class="eo-sonuc iyi">
          <b>${baslik}</b>
          <div class="eo-skor"><span><b>${s.dogruSayi} / ${s.sorular.length}</b> doğru</span><span><b>🏆 ${I.testRekor} / 8</b> en iyi</span></div>
          <div class="eo-izler">${s.izler.join('')}</div>
          <div class="eo-btns">
            <button data-ho="test" class="ana">🔁 Yeni 8 Soru</button>
            <button data-ho="paylas">📋 Skoru Paylaş</button>
            <button data-ho="menu">Modlar</button>
          </div>
        </div>`;
      return;
    }
    const q = s.sorular[s.idx], acik = s.secim != null;
    const dogruMu = acik && s.secim === q.dogru.id;
    kutu().innerHTML = `
      <div class="ho-ust">
        <div><b>🧠 Doğa Bilgini</b><small>Soru ${s.idx + 1} / ${s.sorular.length}</small></div>
        <div class="eo-sayac"><span>✅ <b>${s.dogruSayi}</b></span></div>
        <button class="ho-x" title="Kapat" aria-label="Kapat">✕</button>
      </div>
      <div class="ho-soru">${esc(q.soru).replace(/\n/g, '<br>')}</div>
      <div class="ho-siklar">
        ${q.siklar.map(h => {
          let cls = '';
          if (acik) { if (h.id === q.dogru.id) cls = 'dogru'; else if (h.id === s.secim) cls = 'yanlis'; else cls = 'soluk'; }
          return `<button class="ho-sik ${cls}" data-ho-id="${esc(h.id)}" ${acik ? 'disabled' : ''}>${h.ik} ${esc(h.ad)}</button>`;
        }).join('')}
      </div>
      ${acik ? `<div class="eo-sonuc ${dogruMu ? 'iyi' : 'bitti'}">
        <b>${dogruMu ? '🎉 Doğru!' : '🙈 Yanlış!'}</b>
        <small>${esc(q.aciklama)}</small>
        <button data-ho="test-sonraki" class="ana">${s.idx + 1 < s.sorular.length ? 'Sonraki Soru ›' : 'Sonucu Gör 🏆'}</button>
      </div>` : ''}`;
  }

  function paylasMetni() {
    if (!s) return '';
    if (s.mod === 'nerede') {
      const I = ist();
      return `🐾 Hayvanlar Alemi · Nerede Yaşar?\n${s.izler.slice(-15).join('')}\n🔥 Seri: ${s.seri} · 🏆 Rekor: ${I.seriRekor}\n${location.origin}${location.pathname}?oyun=hayvan`;
    }
    return `🐾 Hayvanlar Alemi · Doğa Bilgini\n${s.izler.join('')} · ${s.dogruSayi}/${s.sorular.length} doğru!\n${location.origin}${location.pathname}?oyun=hayvan`;
  }

  function tikla(ev) {
    if (ev.target.closest('.ho-x')) return kapat();
    const op = ev.target.closest('[data-ho-op]');
    if (op && s && s.mod === 'nerede' && s.secim == null) {
      s.secim = op.dataset.hoOp;
      if (s.secim === s.dogru) {
        s.seri++;
        s.izler.push('🟩');
        istKaydet(I => { if (s.seri > I.seriRekor) I.seriRekor = s.seri; });
      } else {
        s.izler.push('🟥');
        s.bitti = true;
        istKaydet(I => { I.oyun++; });
      }
      neredeCiz();
      return;
    }
    const idBtn = ev.target.closest('[data-ho-id]');
    if (idBtn && s && s.mod === 'test' && s.secim == null) {
      s.secim = idBtn.dataset.hoId;
      const dogru = s.secim === s.sorular[s.idx].dogru.id;
      if (dogru) s.dogruSayi++;
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
        s.bitti = true;
        istKaydet(I => { I.oyun++; if (s.dogruSayi > I.testRekor) I.testRekor = s.dogruSayi; });
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
  function rekor() { return ist().seriRekor; }

  return { ac, kapat, rekor };
})();
