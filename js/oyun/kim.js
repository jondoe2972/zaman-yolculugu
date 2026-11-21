// 🎭 Ben kimim? (Doğ): tarihten ünlü biri olarak doğarsın, hayatın kart kart anlatılır, kim olduğunu tahmin edersin.
// Önce zorluk seçilir (kolay: çok tanınanlar, zor: az tanınanlar). Her kartta ipucu resmi (döneme göre çizim tarzı),
// ne olduğu ve o dönemde hayatın nasıl olduğu yazar; "Bu yıla ve yere git" küreyi o yıla ve yere götürür.
// Erken bilen çok puan alır. 3 yanlış hakkı var. Veri: data/oyun/kim.js, resimler: js/oyun/cizimler.js
'use strict';
window.Hayat = window.BenKimim = (() => {
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const sade = s => s.toLocaleLowerCase('tr').normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/ı/g, 'i').replace(/[^a-z0-9 ]/g, ' ').replace(/\s+/g, ' ').trim();
  const KIM = () => window.KIM || [];
  const SEVIYE = { 1: { ad: 'Kolay', ikon: '🟢', alt: 'Herkesin bildiği ünlüler · doğum yeri, alanı ve ilk harfi ipucu olarak verilir', kat: 1 }, 2: { ad: 'Orta', ikon: '🟡', alt: 'Tarih meraklılarının bildikleri · doğum yeri ve alanı ipucu olarak verilir', kat: 1.5 }, 3: { ad: 'Zor', ikon: '🔴', alt: 'Az tanınan ama iz bırakmış kişiler · ek ipucu yok', kat: 2 } };
  // ek ipuçları: [hangi karttan itibaren görünür] (kolayda daha çok, zorda hiç)
  const EK = { 1: { ulke: 0, alan: 0, harf: 2 }, 2: { ulke: 0, alan: 2 }, 3: {} };
  const PUAN = [100, 75, 50, 30, 15], HAK = 3, KABA = [3, 2, 2, 1, 1], BASLANGIC = Date.UTC(2026, 10, 21);
  let el = null, s = null;
  const oku = (k, v) => { try { return JSON.parse(localStorage[k] || 'null') || v; } catch (e) { return v; } };
  const yaz = (k, v) => { try { localStorage[k] = JSON.stringify(v); } catch (e) { } };
  const gunNo = () => { const t = new Date(); return Math.max(0, Math.floor((Date.UTC(t.getFullYear(), t.getMonth(), t.getDate()) - BASLANGIC) / 864e5)); };
  const karistir = (n, tohum) => { const a = [...Array(n).keys()]; let st = tohum * 2654435761 >>> 0; const r = () => ((st = (st * 1664525 + 1013904223) >>> 0) / 4294967296); for (let i = n - 1; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const gununKisisi = g => { const L = KIM(); if (!L.length) return null; const tur = Math.floor(g / L.length); return L[karistir(L.length, tur + 13)[((g % L.length) + L.length) % L.length]]; };
  const gunAnahtar = g => 'zy-kim-gun-' + g;
  const gunIst = () => oku('zy-kim-gun-ist', { oyun: 0, kazan: 0, seri: 0, enSeri: 0, son: null });
  const bugunBitti = () => !!oku(gunAnahtar(gunNo()), null)?.bitti;
  const yasYazi = (p, y) => { const a = p.dogum - y; return a <= 0 ? 'doğum' : a > 150 ? `ölümünden ${Math.round(-(p.olum - y))} yıl sonra` : `${a} yaşında`; };

  function kutu() {
    if (!el) { el = document.createElement('div'); el.id = 'hayat'; el.className = 'hayat bk'; el.setAttribute('role', 'dialog'); el.setAttribute('aria-label', 'Ben kimim?'); document.querySelector('.stage').appendChild(el); el.addEventListener('click', tikla); el.addEventListener('keydown', tus); el.addEventListener('input', ev => { if (ev.target.matches('.bk-gir input')) oneri(); }); window.addEventListener('keydown', ev => { if (ev.key === 'Escape' && el && !el.hidden) kapat(); }); }
    el.hidden = false; yukseklik(); return el;
  }
  // kart yıl kartının altında kalsın, üst üste binmesin
  function yukseklik() { if (!el || el.hidden) return; const st = el.parentElement.getBoundingClientRect(), yc = document.querySelector('.yearcard'), alt = yc ? yc.getBoundingClientRect().bottom - st.top : 0; el.style.maxHeight = Math.max(260, st.height - alt - 26) + 'px'; }
  window.addEventListener('resize', yukseklik);
  // ---------- 1. zorluk seçimi ----------
  function secim() {
    s = null;
    const I = oku('zy-kim-ist', { puan: 0, oyun: 0, bilinen: 0 });
    const g = gunNo(), gKay = oku(gunAnahtar(g), null), GI = gunIst();
    const gAlt = gKay && gKay.bitti
      ? (gKay.bildi ? `✓ Bugünkü kişi bilindi (${gKay.puan} puan) · sonucu ve paylaşım kartını gör` : '✓ Bugünkü bulmaca tamamlandı · cevabı ve paylaşım kartını gör')
      : `Herkese aynı gün aynı ünlü · günlük serini koru${GI.seri ? ` (🔥 ${GI.seri} seri)` : ''}`;
    kutu().innerHTML = `<button class="hy-x" title="Kapat">✕</button>
      <div class="bk-bas"><b>🎭 Ben kimim?</b><small>Tarihten ünlü biri olarak doğacaksın</small></div>
      <p class="bk-aciklama">Kartlar hayatını baştan sona anlatır; her kartta bir ipucu resmi var. <b>Kim olduğunu tahmin et.</b> Ne kadar erken bilirsen o kadar çok puan alırsın; 3 yanlış hakkın var.</p>
      <div class="bk-seviye">
        <button data-bk="gunluk" class="bk-gunluk"><span>📅</span><b>Günün Kişisi · #${g + 1}</b><small>${gAlt}</small></button>
        ${[1, 2, 3].map(z => `<button data-bk="seviye" data-z="${z}"><span>${SEVIYE[z].ikon}</span><b>${SEVIYE[z].ad}</b><small>${SEVIYE[z].alt} · puan ×${SEVIYE[z].kat}</small></button>`).join('')}
      </div>
      ${I.oyun ? `<small class="bk-ist">Şimdiye kadar ${I.oyun} hayat · ${I.bilinen} doğru · toplam ${I.puan} puan</small>` : ''}`;
  }
  // ---------- 2. oyun ----------
  function kisiSec(z) {
    const L = KIM().filter(p => p.z === z), gor = oku('zy-kim-gor', []);
    let aday = L.filter(p => !gor.includes(p.id)); if (!aday.length) { yaz('zy-kim-gor', gor.filter(id => !L.some(p => p.id === id))); aday = L; }
    const p = aday[Math.floor(Math.random() * aday.length)]; yaz('zy-kim-gor', [...oku('zy-kim-gor', []), p.id]); return p;
  }
  function gunKaydet() {
    if (!s || !s.gunluk) return;
    yaz(gunAnahtar(s.g), { i: s.i, yanlis: s.yanlis, izler: s.izler, bitti: s.bitti, bildi: s.bildi, puan: s.puan, denenen: s.denenen || [] });
  }
  function baslaGun() {
    const g = gunNo(), p = gununKisisi(g);
    if (!p) return secim();
    const kay = oku(gunAnahtar(g), null);
    s = {
      z: 2, p, gunluk: true, g,
      i: kay ? Math.min(kay.i || 0, p.k.length - 1) : 0,
      yanlis: kay ? kay.yanlis || 0 : 0,
      izler: kay && kay.izler && kay.izler.length === p.k.length ? kay.izler : p.k.map(() => '⬜'),
      bitti: !!(kay && kay.bitti),
      bildi: !!(kay && kay.bildi),
      puan: kay ? kay.puan || 0 : 0,
      denenen: kay ? kay.denenen || [] : []
    };
    kutu().innerHTML = `<button class="hy-x" title="Kapat">✕</button><div class="bk-ust"></div><div class="bk-sahne"><div class="bk-kart"></div></div><div class="bk-alt"></div>`;
    kartCiz(false); altCiz();
  }
  function basla(z) {
    if (!z) return secim();
    s = { z, p: kisiSec(z), gunluk: false, i: 0, yanlis: 0, izler: [], bitti: false, bildi: false, puan: 0 };
    s.izler = s.p.k.map(() => '⬜');
    kutu().innerHTML = `<button class="hy-x" title="Kapat">✕</button><div class="bk-ust"></div><div class="bk-sahne"><div class="bk-kart"></div></div><div class="bk-alt"></div>`;
    kartCiz(false); altCiz();
  }
  const kart = () => s.p.k[s.i];
  function ustCiz() {
    const k = kart(), y = k[0];
    const roz = s.gunluk ? `📅 Günün Kişisi #${s.g + 1}` : `${SEVIYE[s.z].ikon} ${SEVIYE[s.z].ad}`;
    el.querySelector('.bk-ust').innerHTML = `<span class="bk-rozet z${s.z}">${roz}</span><b>Kart ${s.i + 1}</b><span>📅 ${YIL.fmt(y)} · ${yasYazi(s.p, y)}</span><span class="bk-izler" aria-label="İlerleme">${s.izler.map((x, i) => i === s.i && x === '⬜' ? '🔳' : x).join('')}</span>${ipucuHTML()}`;
  }
  function ipucuHTML() {
    const e = EK[s.z], p = s.p, L = [];
    if (e.ulke != null && (s.i >= e.ulke || s.bitti)) L.push(`📍 Doğduğu yer: <b>${esc(p.ulke)}</b>`);
    if (e.alan != null && (s.i >= e.alan || s.bitti)) L.push(`🧭 Alanı: <b>${esc(p.alan)}</b>`);
    if (e.harf != null && (s.i >= e.harf || s.bitti)) L.push(`🔤 Adının ilk harfi: <b>${esc(p.ad[0])}</b>`);
    return L.length ? `<div class="bk-ekip">${L.map(x => `<span>${x}</span>`).join('')}</div>` : '';
  }
  function kartHTML() {
    const k = kart(), [y, r, t, h] = k, ll = k[4] || s.p.ll, OC = window.OyunCizim, tz = OC ? OC.tarz(y, ll) : '';
    return `<figure class="bk-resim"><canvas aria-label="İpucu resmi"></canvas><figcaption>${OC ? OC.TARZ_AD[tz] : ''}</figcaption></figure>
      <div class="bk-metin"><p>${esc(t)}</p>${h ? `<div class="bk-hayat"><b>🏠 O zaman hayat</b>${esc(h)}</div>` : ''}
      <div class="bk-git"><button data-bk="git" class="ikincil">🌍 Bu yıla ve yere git</button><span class="bk-devlet"></span></div></div>`;
  }
  function kartCiz(anim) {
    const ka = el.querySelector('.bk-kart'), yap = () => {
      ka.innerHTML = kartHTML(); ka.classList.remove('cik'); if (anim) { ka.classList.remove('gir'); void ka.offsetWidth; ka.classList.add('gir'); }
      const k = kart(); if (window.OyunCizim) window.OyunCizim.ciz(ka.querySelector('canvas'), k[1], k[0], k[4] || s.p.ll, s.bitti ? 1 : KABA[s.i] || 1, true);
      ustCiz(); el.scrollTop = 0;
    };
    if (anim && !matchMedia('(prefers-reduced-motion: reduce)').matches) { ka.classList.add('cik'); setTimeout(yap, 260); } else yap();
  }
  function altCiz(hata) {
    const son = s.i >= s.p.k.length - 1, alt = el.querySelector('.bk-alt');
    if (s.bitti) { alt.innerHTML = sonucHTML(); return; }
    alt.innerHTML = `<div class="bk-gir"><input type="text" placeholder="Ben kimim? Bir ad yaz…" autocomplete="off" aria-label="Tahmin"><button data-bk="tahmin" class="ana">Tahmin et</button><ul class="bk-oneri" hidden></ul></div>
      ${hata ? `<p class="bk-hata" role="alert">${hata}</p>` : ''}
      <div class="bk-dugmeler"><span>❤️ ${HAK - s.yanlis} hak · bu kartta bilirsen <b>${Math.round(PUAN[s.i] * SEVIYE[s.z].kat)}</b> puan</span>${son ? '<button data-bk="pes" class="ikincil">🏳️ Pes et</button>' : '<button data-bk="sonraki" class="ikincil">Sonraki ipucu ›</button>'}</div>`;
  }
  // ---------- tahmin ----------
  function adaylar(q) {
    const t = sade(q); if (t.length < 2) return [];
    const K = KIM().map(p => ({ ad: p.ad, ara: [p.ad, ...(p.alt || [])] })), var_ = new Set(K.flatMap(x => x.ara.map(sade)));
    const L = [...K, ...(window.KIM_SASIRTMA || []).filter(a => !var_.has(sade(a))).map(a => ({ ad: a, ara: [a] }))];
    const kul = new Set(s.denenen || []), gor = new Set();
    return L.filter(x => !kul.has(x.ad) && x.ara.some(a => sade(a).split(' ').some(w => w.startsWith(t)) || sade(a).startsWith(t) || (t.includes(' ') && sade(a).includes(t))))
      .filter(x => !gor.has(x.ad) && gor.add(x.ad)).sort((a, b) => a.ad.localeCompare(b.ad, 'tr')).slice(0, 6);
  }
  let secili = 0;
  function oneri() {
    const inp = el.querySelector('.bk-gir input'), ul = el.querySelector('.bk-oneri'); if (!inp) return; const A = adaylar(inp.value); secili = 0;
    ul.hidden = !A.length; ul.innerHTML = A.map((x, i) => `<li data-ad="${esc(x.ad)}" class="${i ? '' : 'on'}">${esc(x.ad)}</li>`).join('');
    const h = el.querySelector('.bk-hata'); if (h) h.remove();
  }
  function tus(ev) {
    if (!ev.target.matches('.bk-gir input')) { if (ev.key === 'Escape') kapat(); return; }
    const li = [...el.querySelectorAll('.bk-oneri li')];
    if (ev.key === 'ArrowDown' || ev.key === 'ArrowUp') { if (!li.length) return; ev.preventDefault(); secili = (secili + (ev.key === 'ArrowDown' ? 1 : -1) + li.length) % li.length; li.forEach((x, i) => x.classList.toggle('on', i === secili)); }
    else if (ev.key === 'Enter') { ev.preventDefault(); tahminDugme(); }
    else if (ev.key === 'Escape') kapat();
  }
  function tahminDugme() {
    const inp = el.querySelector('.bk-gir input'); if (!inp) return;
    const li = el.querySelector('.bk-oneri li.on') || el.querySelector('.bk-oneri li');
    if (li) return tahmin(li.dataset.ad);
    const q = sade(inp.value); if (!q) return altCiz('Önce bir ad yaz.');
    const tam = KIM().find(p => [p.ad, ...(p.alt || [])].some(a => sade(a) === q)); if (tam) return tahmin(tam.ad);
    altCiz('Bu adı listede bulamadım. Yazmaya başlayınca çıkan önerilerden birini seç.');
  }
  function tahmin(ad) {
    if (s.bitti) return; s.denenen = [...(s.denenen || []), ad];
    if (ad === s.p.ad) { s.izler[s.i] = '🟩'; s.bildi = true; s.puan = Math.max(0, Math.round(PUAN[s.i] * SEVIYE[s.z].kat) - s.yanlis * 10); return bitir(); }
    s.yanlis++; s.izler[s.i] = '🟥'; gunKaydet(); ustCiz();
    const ka = el.querySelector('.bk-kart'); ka.classList.remove('salla'); void ka.offsetWidth; ka.classList.add('salla');
    if (s.yanlis >= HAK) return bitir();
    altCiz(`${esc(ad)} değilsin. ${HAK - s.yanlis} hakkın kaldı.`); el.querySelector('.bk-gir input').focus();
  }
  function sonraki() { if (!s || s.bitti || s.i >= s.p.k.length - 1) return; if (s.izler[s.i] === '⬜') s.izler[s.i] = '⬛'; s.i++; gunKaydet(); kartCiz(true); altCiz(); }
  function bitir() {
    s.bitti = true; for (let i = s.i + 1; i < s.izler.length; i++) s.izler[i] = '⬜';
    const I = oku('zy-kim-ist', { puan: 0, oyun: 0, bilinen: 0 }); I.oyun++; if (s.bildi) I.bilinen++; I.puan += s.puan; yaz('zy-kim-ist', I);
    if (s.gunluk) {
      gunKaydet();
      const GI = gunIst();
      if (GI.son !== s.g) {
        GI.oyun++;
        if (s.bildi) { GI.kazan++; GI.seri = GI.son === s.g - 1 ? GI.seri + 1 : 1; GI.enSeri = Math.max(GI.enSeri, GI.seri); }
        else GI.seri = 0;
        GI.son = s.g;
        yaz('zy-kim-gun-ist', GI);
      }
    }
    const k = kart(), cv = el.querySelector('.bk-kart canvas'); if (cv && window.OyunCizim) window.OyunCizim.ciz(cv, k[1], k[0], k[4] || s.p.ll, 1, false);
    ustCiz(); altCiz(); el.querySelector('.bk-alt').classList.add('gir');
  }
  function sonucHTML() {
    const p = s.p;
    let gunEk = '';
    if (s.gunluk) {
      const GI = gunIst(), yarin = new Date(); yarin.setHours(24, 0, 0, 0);
      const kalan = Math.max(0, yarin - new Date()), sa = Math.floor(kalan / 36e5), dk = Math.floor(kalan / 6e4) % 60;
      gunEk = `<div class="sb-ist"><span><b>${GI.oyun}</b> gün</span><span><b>%${GI.oyun ? Math.round(100 * GI.kazan / GI.oyun) : 0}</b> başarı</span><span><b>🔥 ${GI.seri}</b> seri</span><span><b>🏆 ${GI.enSeri}</b> en iyi</span></div>
        <small class="bk-geri-say">Yeni Günün Kişisi ${sa} sa ${dk} dk sonra</small>`;
    }
    return `<div class="bk-sonuc ${s.bildi ? 'iyi' : ''}"><small>${s.bildi ? `🎉 Bildin! ${s.i + 1}. kartta` : '🙈 Bu sefer olmadı'}</small><b>${esc(p.ad)}</b><span>${esc(p.kim)} · ${YIL.aralik(p.dogum, p.olum)}</span>${s.bildi ? `<em>+${s.puan} puan</em>` : ''}<div class="bk-sonuc-iz">${s.izler.join('')}</div></div>
      ${gunEk}
      <details class="bk-hayatin"><summary>📜 Bütün hayatı (${p.k.length} kart)</summary><ol>${p.k.map(k => `<li><b>${YIL.fmt(k[0])}</b> ${esc(k[2])}</li>`).join('')}</ol></details>
      <button data-bk="tani" class="bk-tani">🔎 ${esc(p.ad)} kimdi? Fotoğraflar ve ayrıntılar</button>
      <div class="bk-dugmeler son"><button data-bk="paylas" class="${s.gunluk ? 'ana' : ''}">📋 Skoru Paylaş</button><button data-bk="${s.gunluk ? 'seviyeler' : 'yeni'}" class="${s.gunluk ? '' : 'ana'}">${s.gunluk ? '🎲 Serbest Oyna' : '🎲 Yeni hayat'}</button><a href="https://tr.wikipedia.org/wiki/Special:Search?search=${encodeURIComponent(p.ad)}" target="_blank" rel="noopener">📖 Vikipedi</a>${s.gunluk ? '' : '<button data-bk="seviyeler" class="ikincil">Zorluk</button>'}</div>`;
  }
  function paylasMetni() {
    if (s.gunluk) {
      const GI = gunIst();
      return `🎭 Ben kimim? #${s.g + 1} · Günün Kişisi\n${s.izler.join('')} · ${s.bildi ? `${s.i + 1}. kartta bildim (${s.puan} puan)` : 'bilemedim'}${GI.seri > 1 ? `\n🔥 Günlük seri: ${GI.seri}` : ''}\n${location.origin}${location.pathname}?oyun=kim`;
    }
    return `🎭 Ben kimim? · ${SEVIYE[s.z].ad}\n${s.izler.join('')} ${s.bildi ? `${s.i + 1}. kartta bildim · ${s.puan} puan` : 'bilemedim'}\n${location.origin}${location.pathname}?dog=1`;
  }
  // ---------- küreye git ----------
  async function git() {
    const k = kart(), y = k[0], ll = k[4] || s.p.ll;
    if (window.ZY) { window.ZY.setView('dunya'); window.ZY.setYear(y); }
    if (window.Dunya) { window.Dunya.goTo(ll[0], ll[1], 6); if (window.Dunya.pin) window.Dunya.pin(ll[0], ll[1], s.bitti ? s.p.ad : '?'); }
    const yer = el.querySelector('.bk-devlet'); if (!yer || !window.Dunya || !window.Dunya.nerede) return;
    yer.textContent = '…'; const d = await window.Dunya.nerede(ll[0], ll[1], y); if (!s || kart()[0] !== y) return;
    s.devlet = d; yer.innerHTML = d ? `🏛️ O zaman burası: <button data-bk="devlet" class="lnk">${esc(d.tr || d.n)}</button>` : '🏛️ Bu yıl için burada kayıtlı bir devlet sınırı yok';
  }
  function tikla(ev) {
    const b = ev.target.closest('[data-bk], .hy-x, .bk-oneri li'); if (!b) return;
    if (b.classList.contains('hy-x')) return kapat();
    if (b.dataset.ad) return tahmin(b.dataset.ad);
    const k = b.dataset.bk;
    if (k === 'gunluk') baslaGun();
    else if (k === 'seviye') basla(+b.dataset.z);
    else if (k === 'tahmin') tahminDugme();
    else if (k === 'sonraki') sonraki();
    else if (k === 'pes') { s.izler[s.i] = '⬛'; bitir(); }
    else if (k === 'git') git();
    else if (k === 'devlet' && s.devlet && window.ZY && window.ZY.openDevlet) window.ZY.openDevlet(s.devlet);
    else if (k === 'tani') kisiAc(s.p);
    else if (k === 'yeni') basla(s.z);
    else if (k === 'seviyeler') secim();
    else if (k === 'paylas') { const t = paylasMetni(); (navigator.clipboard ? navigator.clipboard.writeText(t) : Promise.reject()).then(() => { b.textContent = '✓ Kopyalandı'; }, () => { b.textContent = 'Kopyalanamadı'; }); }
  }
  // ---------- oyun bitince: kişiyi yakından tanı (Vikipedi özeti, gerçek fotoğraflar, hayatı) ----------
  async function ozet(w) {
    const api = 'https://en.wikipedia.org/w/api.php?format=json&origin=*&redirects=1&action=query&prop=langlinks&lllang=tr&titles=' + encodeURIComponent(w);
    const j = await fetch(api).then(r => r.json()), pg = Object.values(j.query?.pages || {})[0] || {}, tr = pg.langlinks?.[0]?.['*'];
    const u = tr ? 'https://tr.wikipedia.org/api/rest_v1/page/summary/' + encodeURIComponent(tr.replace(/ /g, '_')) : 'https://en.wikipedia.org/api/rest_v1/page/summary/' + encodeURIComponent(w.replace(/ /g, '_'));
    const o = await fetch(u).then(r => r.json());
    return { metin: o.extract || '', foto: o.thumbnail?.source, link: o.content_urls?.desktop?.page, tr: !!tr };
  }
  function kisiAc(p) {
    const ZY = window.ZY; if (!ZY || !ZY.showModal) return;
    const satir = (a, b) => `<tr><th>${a}</th><td>${b}</td></tr>`;
    const hakkinda = `<div class="kisi-ust"><div class="kisi-foto"></div><table class="tech">${satir('Kim', esc(p.kim))}${satir('Yaşadığı yıllar', YIL.aralik(p.dogum, p.olum))}${satir('Doğduğu yer (bugün)', esc(p.ulke))}${satir('Alanı', esc(p.alan))}</table></div>
      <div class="kisi-ozet"><p class="note">Vikipedi'den özet yükleniyor…</p></div>`;
    const hayat = `<ol class="kisi-hayat">${p.k.map(k => `<li><b>${YIL.fmt(k[0])}</b> ${esc(k[2])}${k[3] ? `<small>🏠 ${esc(k[3])}</small>` : ''}<button class="phbtn" data-go="${k[0]}">🌍 Bu yıla git</button></li>`).join('')}</ol>`;
    ZY.showModal({ ikon: '🎭', title: p.ad, sub: `${esc(p.kim)} · ${YIL.aralik(p.dogum, p.olum)}`, tabs: [
      { ad: '👤 Hakkında', html: hakkinda, onShow: async body => {
        const kutu = body.querySelector('.kisi-ozet'), fk = body.querySelector('.kisi-foto');
        try {
          const o = await ozet(p.w); if (!body.contains(kutu)) return;
          if (o.foto) fk.innerHTML = `<img src="${esc(o.foto)}" alt="${esc(p.ad)}">`;
          kutu.innerHTML = `<p>${esc(o.metin)}</p>${o.tr ? '' : '<p class="note">Türkçe Vikipedi\'de özet bulunamadı; İngilizce özet gösteriliyor.</p>'}<p><a href="${esc(o.link || 'https://en.wikipedia.org/wiki/' + encodeURIComponent(p.w))}" target="_blank" rel="noopener">Vikipedi'de devamını oku ↗</a></p>`;
        } catch (e) { kutu.innerHTML = '<p class="note">Özet yüklenemedi. İnternet bağlantısını kontrol edip tekrar dene.</p>'; }
      } },
      ZY.photoTab ? ZY.photoTab(p.w, 16, true) : null,
      { ad: '📜 Hayatı', html: hayat }
    ].filter(Boolean) });
  }
  function kapat() { if (el) el.hidden = true; }
  return { basla: () => secim(), gunluk: baslaGun, bugunBitti, kapat, oyna: basla, tani: id => { const p = KIM().find(x => x.id === id); if (p) kisiAc(p); } };
})();
