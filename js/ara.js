// Arama motoru ve Vikipedi tarzı ülke sayfaları.
// Arama: ülkeler, önemli yerler ve eserler, kişiler, yapılar, şehirler, olaylar, tanrılar ve dönemler.
'use strict';
(() => {
  const $ = s => document.querySelector(s);
  const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const fold = s => String(s || '').toLocaleLowerCase('tr').replace(/[ıİ]/g, 'i').replace(/ş/g, 's').replace(/ğ/g, 'g').replace(/ü/g, 'u').replace(/ö/g, 'o').replace(/ç/g, 'c').replace(/[âàá]/g, 'a').replace(/[îí]/g, 'i').replace(/[ûú]/g, 'u').replace(/[^a-z0-9 ]+/g, ' ').replace(/\s+/g, ' ').trim();
  const PAGES = window.ULKE_SAYFA || {};
  const ZY = () => window.ZY;

  // ---------- arama dizini ----------
  let INDEX = null;
  function buildIndex() {
    const out = [], seen = new Set();
    const add = (o) => { const k = o.tur + ':' + o.ad; if (seen.has(k)) return; seen.add(k); o.f = fold([o.ad, ...(o.kw || [])].join(' ')); o.kwf = (o.kw || []).map(fold); out.push(o); };
    for (const pg of Object.values(PAGES)) {
      add({ tur: 'Ülke', ikon: pg.ikon, ad: pg.ad, alt: pg.altBaslik, kw: pg.kw, oncelik: 10, act: () => openPage(pg.id) });
      for (const f of pg.figurler) add({ tur: 'Önemli yer / eser', ikon: ({ cami: '🕌', kale: '🏰', kanal: '🚢', baraj: '🌊', 'müze': '🏛️' })[f.tur] || (f.tur === 'eser' ? '🏺' : f.tur === 'tapınak' ? '🏛️' : f.tur === 'heykel' ? '🦁' : f.tur === 'mezarlık' ? '⛰️' : '🔺'), ad: f.ad, alt: `${f.yapim} · ${pg.ad}`, kw: [f.wiki, f.nerede, f.id], oncelik: 6, act: () => openPage(pg.id, 'fig-' + f.id) });
      for (const k of pg.kisiler) add({ tur: 'Kişi', ikon: '👤', ad: k.ad, alt: `${k.yil} · ${k.ozet}`, kw: [k.wiki], oncelik: 5, act: () => openPage(pg.id, 'kisiler') });
    }
    for (const p of window.PLACES || []) if (p.kisa) add({ tur: 'Dönem', ikon: '⏳', ad: p.kisa, alt: `${p.aralikAd || ''} · ${((p.bolge && (window.BOLGELER || {})[p.bolge]) || window.BOLGE || {}).antikAd || 'Antik Mısır'}`, kw: [p.baslik], oncelik: 4, act: () => { ZY().setYear(p.start || p.from); ZY().setView('sahne'); } });
    const mons = (ZY() && ZY().monuments()) || [];
    for (const m of mons) if (!m.gen && ZY().coords(m.id)) add({ tur: 'Yapı', ikon: '🏗️', ad: m.ad, alt: `${m.yer || ''} · ${YIL.fmt(m.start)}`, kw: [m.yer, m.id], oncelik: 3, act: () => ZY().showMonument(m.id) });
    for (const y of window.YAPILAR || []) add({ tur: 'Ünlü yapı', ikon: '🏛️', ad: y.ad, alt: `${y.sehir}, ${y.ulke} · ${y.yil || YIL.fmt(y.y)}`, kw: [y.w, y.sehir, y.ulke], oncelik: 2 + Math.min(y.o, 4), act: () => ZY().openYapi(y.id) });
    for (const c of (ZY() && ZY().cities()) || []) add({ tur: 'Şehir', ikon: c.cap ? '⭐' : '🏙️', ad: c.ad, alt: (window.SEHIR_BILGI || {})[c.ad]?.bugun || 'Antik şehir', kw: [(window.SEHIR_BILGI || {})[c.ad]?.bugun], oncelik: 4, act: () => ZY().openCity(c.ad) });
    for (const e of window.OLAYLAR || []) add({ tur: ({ savas: 'Savaş', deniz: 'Deniz savaşı', antlasma: 'Antlaşma', afet: 'Afet', olay: 'Önemli olay' })[e.tur] || 'Olay', ikon: ({ savas: '⚔️', antlasma: '📜', afet: '🌋', olay: '🏛️' })[e.tur] || '•', ad: e.ad, alt: `${YIL.fmt(e.y)}`, kw: e.taraflar || [], oncelik: 2, act: () => ZY().openEvent(e.id) });
    for (const t of (window.KULTUR || {}).tanrilar || []) add({ tur: 'Tanrı', ikon: '🙏', ad: t.ad, alt: t.unvan, kw: [t.wiki, t.id], oncelik: 3, act: () => ZY().openGod(t.id) });
    for (const o of (window.ATLAS_OKYANUS || {}).okyanuslar || []) add({ tur: o.tur === 'deniz' ? 'Deniz' : 'Okyanus', ikon: o.ik || '🌊', ad: o.ad, alt: o.yuzolcum, kw: [o.w], oncelik: 5, act: () => ZY().openOkyanus(o.id) });
    for (const h of window.ATLAS_HAYVANLAR || []) add({ tur: 'Hayvan', ikon: h.ik || '🐾', ad: h.ad, alt: `${h.bolge} · ${h.durum}`, kw: [h.bolge, h.kita, h.w], oncelik: 4, act: () => ZY().openHayvan(h.id) });
    for (const bt of window.ATLAS_BITKILER || []) add({ tur: 'Bitki', ikon: bt.ik || '🌿', ad: bt.ad, alt: `${bt.bolge} · ${bt.kullanim.slice(0, 56)}…`, kw: [bt.bolge, bt.kullanim, bt.meyve, bt.w, 'bitki', 'ağaç'], oncelik: 5, act: () => ZY().openBitki(bt.id) });
    for (const cg of window.ATLAS_COGRAFYA || []) add({ tur: ({ dag: 'Dağ', col: 'Çöl / Bozkır', havza: 'Tarihî Havza', nehir: 'Nehir' })[cg.tur] || 'Coğrafya', ikon: ({ dag: '🏔️', col: '🏜️', havza: '🌿', nehir: '🌊' })[cg.tur] || '🗺️', ad: cg.ad, alt: cg.konum, kw: [cg.konum, cg.w], oncelik: 5, act: () => ZY().openCografya(cg.id) });
    for (const db of [...((window.ATLAS_DOGA_BOLGELER || {}).ozel || []), ...((window.ATLAS_DOGA_BOLGELER || {}).kitalar || [])]) add({ tur: 'Jeoloji & Bölge', ikon: db.ik || '🪨', ad: db.ad, alt: `${db.tur} · Canlılık: ${db.canlilik}`, kw: [db.tur, db.w, 'jeoloji', 'kıta'], oncelik: 4, act: () => ZY().openDogaBolge(db.id) });
    for (const d of window.DONUM_NOKTALARI || []) add({ tur: 'Büyük Olay', ikon: '⚡', ad: d.ad, alt: `${d.yilYazi} · ${d.yer}`, kw: [d.yer, d.w], oncelik: 6, act: () => ZY().openDonum(d.id) });
    for (const m of window.ATLAS_MAGARALAR || []) add({ tur: 'Tarihöncesi Kazı', ikon: '🪨', ad: m.ad, alt: `${m.donem} · ${m.yer}`, kw: [m.yer, m.w], oncelik: 5, act: () => ZY().openMagara(m.id) });
    for (const lm of window.ATLAS_LIMANLAR || []) add({ tur: 'Liman', ikon: '⚓', ad: lm.ad, alt: `${lm.ulke} · ${lm.rol}`, kw: [lm.ulke, lm.w], oncelik: 5, act: () => ZY().openLiman(lm.id) });
    for (const nr of window.ATLAS_NEHIRLER || []) add({ tur: 'Nehir', ikon: '🏞️', ad: nr.ad, alt: `${nr.uzunluk} · ${nr.havza}`, kw: [nr.havza, nr.w], oncelik: 5, act: () => ZY().openNehir(nr.id) });
    for (const hg of window.ATLAS_HAYVAN_GOC || []) add({ tur: 'Göç Döngüsü', ikon: hg.ik || '🐋', ad: hg.ad, alt: hg.mesafe, kw: [hg.w], oncelik: 5, act: () => ZY().openHayvanGoc(hg.id) });
    for (const v of (window.ATLAS_VOLKANLAR || {}).volkanlar || []) add({ tur: 'Yanardağ', ikon: '🌋', ad: v.ad, alt: `${v.ulke} · ${v.yukseklik}`, kw: [v.ulke, v.w], oncelik: 5, act: () => ZY().openVolkan(v.id) });
    for (const f of (window.ATLAS_VOLKANLAR || {}).faylar || []) add({ tur: 'Fay Kuşağı', ikon: '🔥', ad: f.ad, alt: 'Tektonik deprem ve volkan kuşağı', kw: ['deprem', 'fay', 'ateş çemberi'], oncelik: 4, act: () => ZY().openFay(f.id) });
    for (const a of (window.ATLAS_OKYANUS || {}).akintilar || []) add({ tur: 'Akıntı', ikon: a.tip === 'sicak' ? '🔥' : '❄️', ad: a.ad, alt: `${a.tip === 'sicak' ? 'Sıcak' : 'Soğuk'} okyanus akıntısı · ${a.hiz}`, kw: ['akıntı', 'okyanus', a.w], oncelik: 5, act: () => ZY().openAkinti(a.id) });
    for (const o of (window.ATLAS_OKYANUS || {}).olaylar || []) add({ tur: o.tip === 'girdap' ? 'Girdap' : 'Fırtına', ikon: o.tip === 'girdap' ? '🌀' : '🌪️', ad: o.ad, alt: o.yer, kw: [o.yer, 'girdap', 'fırtına', 'kasırga', o.w], oncelik: 5, act: () => ZY().openDenizOlay(o.id) });
    for (const hy of window.HAT_YAPILAR || []) add({ tur: 'Dev Yapı', ikon: hy.tip === 'sur' ? '🧱' : hy.tip === 'kanal' ? '🚢' : '🛣️', ad: hy.ad, alt: `${hy.yer} · ${hy.uzunluk}`, kw: [hy.yer, hy.w], oncelik: 6, act: () => ZY().openHatYapi(hy.id) });
    for (const t of window.TICARET_YOLLARI || []) add({ tur: 'Ticaret Yolu', ikon: t.tur === 'deniz' ? '⛵' : '🐪', ad: t.ad, alt: `${t.cikis} → ${t.varis}`, kw: [t.cikis, t.varis, t.mal], oncelik: 4, act: () => ZY().openYol(t.id) });
    for (const j of window.YOLCULUKLAR || []) add({ tur: 'Ünlü Yolculuk', ikon: '🧭', ad: j.ad, alt: `${YIL.fmt(j.y)} · ${j.sure}`, kw: [j.nasil], oncelik: 4, act: () => ZY().openYolculuk(j.id) });
    for (const k of window.KAYNAKLAR || []) add({ tur: 'Kaynak', ikon: '⛏️', ad: k.ad, alt: `${YIL.fmt(k.from)} – ${k.to <= -2026 ? 'bugün' : YIL.fmt(k.to)}`, kw: [k.tur], oncelik: 3, act: () => ZY().openKaynak(k.id) });
    for (const h of (window.YASAM_DOGA || {}).hayvanlar || []) add({ tur: 'Yaşa · Hayvan', ikon: h.ik || '🐾', ad: h.ad, alt: `Ömür: ${h.omur} · ${h.alan}`, kw: [h.alan, h.w, 'yaşa'], oncelik: 4, act: () => ZY().openYasamDoga(h.id) });
    for (const b of (window.YASAM_DOGA || {}).bitkiler || []) add({ tur: 'Yaşa · Bitki', ikon: b.ik || '🌿', ad: b.ad, alt: `Ömür: ${b.omur} · ${b.alan}`, kw: [b.alan, b.w, 'bitki', 'ağaç', 'yaşa'], oncelik: 4, act: () => ZY().openYasamDoga(b.id) });
    return out;
  }
  function search(q) {
    INDEX = INDEX || buildIndex();
    const f = fold(q); if (!f) return [];
    const words = f.split(' ');
    const res = [];
    for (const o of INDEX) {
      let sc = 0; const name = fold(o.ad);
      if (name === f) sc = 100; else if (name.startsWith(f)) sc = 60; else if (name.split(' ').some(w => w.startsWith(f))) sc = 40;
      else if (words.every(w => o.f.includes(w))) sc = 20; else continue;
      if (o.kwf.some(k => k === f || k.startsWith(f))) sc = Math.max(sc, 70);
      res.push({ o, sc: sc + o.oncelik * 4 });
    }
    return res.sort((a, b) => b.sc - a.sc).slice(0, 12).map(r => r.o);
  }

  // ---------- arama kutusu ----------
  const box = $('#arama'), inp = $('#ara-in'), list = $('#ara-list');
  let sel = 0, cur = [];
  function openSearch() { box.hidden = false; inp.value = ''; render(''); setTimeout(() => inp.focus(), 30); }
  function closeSearch() { box.hidden = true; }
  function render(q) {
    cur = q ? search(q) : Object.values(PAGES).map(pg => ({ tur: 'Ülke', ikon: pg.ikon, ad: pg.ad, alt: pg.altBaslik, act: () => openPage(pg.id) }));
    sel = 0;
    if (!cur.length) { list.innerHTML = `<p class="ara-yok">"${esc(q)}" için sonuç yok. Şimdilik yalnızca Antik Mısır var; yeni ülkeler yakında.</p>`; return; }
    list.innerHTML = (q ? '' : '<p class="ara-ipucu">Bir ülke, yapı, kişi, şehir, savaş ya da tanrı yaz…</p>') + cur.map((o, i) => `<button class="ara-s${i === sel ? ' on' : ''}" data-i="${i}"><span class="ik">${o.ikon}</span><span class="tx"><b>${esc(o.ad)}</b><small>${esc(o.alt || '')}</small></span><em>${esc(o.tur)}</em></button>`).join('');
  }
  function pick(i) { const o = cur[i]; if (!o) return; closeSearch(); o.act(); }
  $('#ara').addEventListener('click', openSearch);
  inp.addEventListener('input', () => render(inp.value));
  inp.addEventListener('keydown', e => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') { e.preventDefault(); sel = (sel + (e.key === 'ArrowDown' ? 1 : -1) + cur.length) % Math.max(1, cur.length); list.querySelectorAll('.ara-s').forEach((b, i) => { b.classList.toggle('on', i === sel); if (i === sel) b.scrollIntoView({ block: 'nearest' }); }); }
    else if (e.key === 'Enter') pick(sel);
    else if (e.key === 'Escape') closeSearch();
  });
  list.addEventListener('click', e => { const b = e.target.closest('[data-i]'); if (b) pick(+b.dataset.i); });
  box.addEventListener('click', e => { if (e.target === box) closeSearch(); });
  window.addEventListener('keydown', e => {
    const typing = /INPUT|TEXTAREA|SELECT/.test(document.activeElement?.tagName || '');
    if ((e.key === 'k' && (e.ctrlKey || e.metaKey)) || (e.key === '/' && !typing)) { e.preventDefault(); openSearch(); }
    else if (e.key === 'Escape' && !$('#wiki').hidden && box.hidden) closePage();
  });

  // ---------- Vikipedi fotoğrafları (küçük resim + dosya adı) ----------
  const API = 'https://en.wikipedia.org/w/api.php?format=json&origin=*&';
  const thumbs = new Map();
  async function loadThumbs(titles, size = 640) {
    const need = [...new Set(titles)].filter(t => t && !thumbs.has(t));
    for (let i = 0; i < need.length; i += 40) {
      const part = need.slice(i, i + 40);
      try {
        const j = await fetch(API + `action=query&redirects=1&prop=pageimages&piprop=thumbnail|name&pithumbsize=${size}&titles=` + encodeURIComponent(part.join('|'))).then(r => r.json());
        const map = {}; for (const r of [...(j.query?.normalized || []), ...(j.query?.redirects || [])]) map[r.from] = r.to;
        const byT = {}; for (const p of Object.values(j.query?.pages || {})) if (p.thumbnail) byT[p.title] = { src: p.thumbnail.source, file: p.pageimage };
        for (const t of part) { let tt = t; for (let k = 0; k < 3 && map[tt]; k++) tt = map[tt]; thumbs.set(t, byT[tt] || null); }
      } catch (e) { /* çevrimdışı: simgeler kalır */ }
    }
  }
  async function fillPhotos(root) {
    const els = [...root.querySelectorAll('[data-foto]')];
    await loadThumbs(els.map(e => e.dataset.foto));
    for (const e of els) {
      const t = thumbs.get(e.dataset.foto); if (!t) continue;
      e.querySelectorAll('img').forEach(im => { im.src = t.src; });
      e.classList.add('yuklu');
      const cr = e.parentElement.querySelector('.foto-kredi');
      if (cr && t.file) cr.innerHTML = `Fotoğraf: <a href="https://commons.wikimedia.org/wiki/File:${encodeURIComponent(t.file)}" target="_blank" rel="noopener">Wikimedia Commons</a>`;
    }
  }
  // manyetik alanda süzülüp kendi etrafında dönen fotoğraf
  const spin = (wiki, ikon, cls = '') => `<div class="spin3d ${cls}" data-foto="${esc(wiki)}"><div class="spin-card"><img class="on" alt=""><img class="arka" alt=""><span class="yer">${ikon}</span></div><div class="spin-alan"></div>${'<i></i>'.repeat(6)}</div><small class="foto-kredi"></small>`;

  // ---------- ülke sayfası ----------
  const wiki = $('#wiki'), body = $('#wiki-body');
  const DURUM = { ayakta: ['✅', 'Ayakta'], kismen: ['⚠️', 'Kısmen ayakta'], yok: ['❌', 'Yıkıldı'], muzede: ['🏛️', 'Müzede'] };
  function pageHTML(pg) {
    const places = (window.PLACES || []).filter(p => pg.donemler[p.id]);
    const span = [3200, -2030];
    const bar = places.map(p => { const l = (span[0] - p.from) / (span[0] - span[1]) * 100, w = (p.from - p.to) / (span[0] - span[1]) * 100; return `<button class="w-bar" style="left:${l}%;width:${w}%" data-yil="${p.start || p.from}" title="${esc(p.kisa)} · ${esc(p.aralikAd || '')}">${esc(p.kisa)}</button>`; }).join('');
    const toc = [['ozet', 'Genel bakış'], ['tarih', 'Tarih'], ['kultur', 'Kültür ve din'], ['figurler', 'Önemli yerler ve eserler'], ['kisiler', 'Önemli kişiler'], ['biliyor', 'Bunu biliyor muydunuz?']];
    return `
    <article class="w-art">
      <header class="w-hero">
        <div class="w-hero-tx"><span class="w-kat">Uygarlık · ${pg.ikon}</span><h1>${esc(pg.ad)}</h1><p>${esc(pg.altBaslik)}</p>
          <div class="w-btns"><button class="w-b" data-harita="${pg.merkez.join(',')},${pg.merkezZ}" data-ad="${esc(pg.ad)}">📍 Haritada göster</button><button class="w-b alt" data-goto="toc">📑 İçindekiler</button></div></div>
        <figure class="w-kapak">${spin(pg.kapakWiki, pg.ikon, 'buyuk')}<figcaption>${esc(pg.kapakAd)}</figcaption></figure>
      </header>
      <div class="w-grid">
        <div class="w-main">
          <nav class="w-toc" id="w-toc"><b>İçindekiler</b>${toc.map(([id, ad], i) => `<a data-goto="${id}">${i + 1}. ${ad}</a>`).join('')}</nav>
          <section id="w-ozet"><h2>Genel bakış</h2>${pg.ozet.map(p => `<p>${p}</p>`).join('')}</section>
          <section id="w-tarih"><h2>Tarih</h2>
            <div class="w-zaman"><div class="w-track">${bar}</div><div class="w-ölç"><span>MÖ 3200</span><span>MÖ 1500</span><span>MS 1</span><span>MS 1000</span><span>bugün</span></div></div>
            ${places.map(p => `<div class="w-donem"><h3>${esc(p.kisa)} <small>${esc(p.aralikAd || '')}</small></h3><p>${pg.donemler[p.id]}</p><button class="w-link" data-yil="${p.start || p.from}">⏩ Bu döneme git</button></div>`).join('')}
          </section>
          <section id="w-kultur"><h2>Kültür ve din</h2>
            ${pg.kultur.map(k => `<div class="w-kul"><h3>${k.ikon} ${esc(k.baslik)}</h3>${k.html}${k.tanrilar ? `<div class="w-tanri">${((window.KULTUR || {}).tanrilar || []).map(t => `<button data-god="${t.id}" title="${esc(t.unvan)}">${esc(t.ad)}</button>`).join('')}</div>` : ''}</div>`).join('')}
          </section>
          <section id="w-figurler"><h2>Önemli yerler ve eserler</h2>
            <p class="w-not">📍 ile dünya haritasında yerini, ⏩ ile o yıldaki hâlini görebilirsin.</p>
            ${pg.figurler.map((f, i) => { const [di, dy] = DURUM[f.durum] || ['', '']; return `
            <div class="w-fig${i % 2 ? ' ters' : ''}" id="w-fig-${f.id}">
              <div class="w-fig-foto">${spin(f.wiki, '🏺')}</div>
              <div class="w-fig-tx">
                <h3>${esc(f.ad)} <span class="w-tur">${esc(f.tur)}</span></h3>
                <p>${f.metin}</p>
                <table class="w-tab"><tr><th>Yapım</th><td>${esc(f.yapim)}</td></tr><tr><th>Kimin için / kim</th><td>${esc(f.kim)}</td></tr>
                  <tr><th>Bugün</th><td><span class="w-durum d-${f.durum}">${di} ${dy}</span> ${esc(f.durumYazi)}</td></tr><tr><th>Yer</th><td>${esc(f.nerede)}</td></tr></table>
                <div class="w-btns"><button class="w-b" data-harita="${f.ll.join(',')},${f.z}" data-ad="${esc(f.ad)}">📍 Haritada göster</button>
                  ${f.git ? `<button class="w-b alt" data-git='${esc(JSON.stringify(f.git))}'>⏩ O yıla git</button>` : ''}
                  ${f.git && f.git.id && ZY().hasInfo(f.git.id) ? `<button class="w-b alt" data-bilgi="${f.git.id}">ℹ️ Ayrıntılar</button>` : ''}</div>
              </div>
            </div>`; }).join('')}
          </section>
          <section id="w-kisiler"><h2>Önemli kişiler</h2>
            <div class="w-kisi-grid">${pg.kisiler.map(k => `<button class="w-kisi" data-yil="${k.y}"><span class="w-kisi-f" data-foto="${esc(k.wiki)}"><img alt=""><span class="yer">👤</span></span><b>${esc(k.ad)}</b><small>${esc(k.yil)}</small><em>${esc(k.ozet)}</em></button>`).join('')}</div>
          </section>
          <section id="w-biliyor"><h2>Bunu biliyor muydunuz?</h2><ul class="w-bil">${pg.biliyorMuydunuz.map(b => `<li>${esc(b)}</li>`).join('')}</ul></section>
          <p class="w-not">Tarihler yaklaşıktır (Oxford kronolojisi, Shaw 2000). Fotoğraflar İngilizce Vikipedi'deki sayfaların ana görsellerinden, Wikimedia Commons lisanslarıyla gösterilir.</p>
        </div>
        <aside class="w-kutu"><div class="w-kutu-in"><h4>${esc(pg.ad)}</h4>${spin(pg.kapakWiki, pg.ikon, 'kucuk')}<table>${pg.bilgiKutusu.map(([k, v]) => `<tr><th>${esc(k)}</th><td>${esc(v)}</td></tr>`).join('')}</table></div></aside>
      </div>
    </article>`;
  }
  function openPage(id, anchor) {
    const pg = PAGES[id]; if (!pg) return;
    $('#wiki-baslik').textContent = pg.ad;
    body.innerHTML = pageHTML(pg); wiki.hidden = false; body.scrollTop = 0;
    fillPhotos(body);
    if (anchor) setTimeout(() => { const t = body.querySelector('#w-' + anchor); if (t) { t.scrollIntoView({ behavior: 'smooth', block: 'start' }); t.classList.add('vurgu'); setTimeout(() => t.classList.remove('vurgu'), 2200); } }, 120);
  }
  function closePage() { wiki.hidden = true; }
  $('#wiki-geri').addEventListener('click', closePage);
  body.addEventListener('click', e => {
    const t = e.target;
    const h = t.closest('[data-harita]'); if (h) { const [la, lo, z] = h.dataset.harita.split(',').map(Number); closePage(); ZY().showOnMap(la, lo, z, h.dataset.ad); return; }
    const g = t.closest('[data-git]'); if (g) { closePage(); ZY().showInScene(JSON.parse(g.dataset.git)); return; }
    const y = t.closest('[data-yil]'); if (y) { closePage(); ZY().setYear(+y.dataset.yil); ZY().setView('sahne'); return; }
    const b = t.closest('[data-bilgi]'); if (b) { ZY().openInfo(b.dataset.bilgi); return; }
    const gd = t.closest('[data-god]'); if (gd) { ZY().openGod(gd.dataset.god); return; }
    const go = t.closest('[data-goto]'); if (go) { const el = body.querySelector('#w-' + go.dataset.goto); if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
  });

  window.Ara = { openSearch, openPage, search };
})();
