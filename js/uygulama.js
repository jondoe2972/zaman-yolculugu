// Arayüz: zaman çizelgesi, bilgi paneli, oynatma, kamera, harita, bilgi kartları.
'use strict';
(() => {
  const S = window.Sahne, M = window.Harita, MIS = window.MISIR || {};
  const BG = window.BOLGE || { id: 'misir', ad: 'Mısır', ikon: '🏺', hakkinda: 'Bu çağda Mısır', simgeAd: "Mısır'ın simgeleri", bugunAd: 'Bugünkü Mısır', antikAd: 'Antik Mısır', kultur: true };
  // bölge seçici (Mısır / Anadolu): sayfa o bölgenin verileriyle yeniden açılır
  { const bs = document.querySelector('#bolge'); if (bs) { const BL = window.BOLGELER || {}; if (window.KITALAR) bs.innerHTML = '<option value="dunya">🌍 Tüm Dünya</option>' + window.KITALAR.map(k => `<optgroup label="${k.ikon} ${k.ad}">${k.b.filter(b => BL[b]).map(b => `<option value="${b}">${BL[b].ikon} ${BL[b].ad}</option>`).join('')}</optgroup>`).join(''); bs.value = BG.id; bs.addEventListener('change', () => { location.href = location.pathname + (bs.value === 'dunya' ? '' : '?bolge=' + bs.value); }); } }
  { const ai = document.querySelector('#about-ikon'), at = document.querySelector('#about-tx'); if (ai) ai.textContent = BG.ikon; if (at) at.textContent = ' ' + BG.ad + ' hakkında'; }
  if (BG.mevsimler) document.querySelectorAll('[data-season]').forEach(b => { const v = BG.mevsimler[b.dataset.season]; if (v) { b.textContent = v[0]; b.title = v[1]; } });
  // Tüm Dünya: bütün bölgeler birlikte; sahne yerine küre, panelde bölgelerin o yılki özeti
  const DUNYA = !!BG.dunya, BSIRA = window.BOLGE_SIRA || [], BLR = window.BOLGELER || {};
  if (DUNYA) document.body.classList.add('dunyamod');
  const QS = new URLSearchParams(location.search);
  const gitBolge = (b, ek = '') => { location.href = location.pathname + '?bolge=' + b + '&yil=' + Math.round(Y) + ek; };
  const $ = q => document.querySelector(q);
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
  const fmt = n => Math.round(n).toLocaleString('tr-TR');
  const pick = (arr, y) => arr.find(a => y <= a.from && y > a.to) || (y > arr[0].from ? arr[0] : arr[arr.length - 1]);
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  // ---------- çağlar ve "Tüm Antik Mısır" ----------
  const PARTS = window.PLACES.slice().sort((a, b) => a.sira - b.sira);
  function buildAll() {
    const ad = MIS.araDonem || {};
    const cat = k => [...PARTS.flatMap(p => p[k] || []), ...(ad[k] || [])];
    const byFrom = (a, b) => b.from - a.from;
    const mons = []; const seen = new Set();
    for (const p of PARTS) for (const m of p.monuments) if (!m.eski && !seen.has(m.id)) { seen.add(m.id); mons.push(m); }
    const nuf = cat('nufus').sort((a, b) => b[0] - a[0]);
    const TB = BG.tum || {}, F0 = Math.max(...PARTS.map(p => p.from)), T0 = Math.min(...PARTS.map(p => p.to));
    return {
      id: BG.id + '-tum', sira: 0, kisa: TB.kisa || 'Tüm Mısır tarihi', aralikAd: YIL.aralik(F0, T0), composite: true,
      baslik: TB.baslik || 'Mısır · Bütün çağlar (MÖ 3150 – bugün)', from: F0, to: T0, start: TB.start || 2560,
      dynasties: cat('dynasties').sort(byFrom), rulers: cat('rulers').sort(byFrom), eras: cat('eras').sort(byFrom),
      events: cat('events').sort((a, b) => b.y - a.y), world: cat('world'), nufus: nuf, monuments: mons,
      hizli: TB.hizli || [{ ad: 'Birleşme', y: 3100 }, { ad: 'Büyük Piramit', y: 2577 }, { ad: 'Orta Krallık', y: 1880 }, { ad: 'Hatşepsut', y: 1465 }, { ad: 'Tutankamon', y: 1330 }, { ad: 'Kadeş', y: 1274 }, { ad: 'İskender', y: 331 }, { ad: 'Kleopatra', y: 40 }, { ad: 'Roma', y: -120 }, { ad: 'Arap fethi', y: -641 }, { ad: 'Kahire kuruldu', y: -970 }, { ad: 'Selahaddin', y: -1180 }, { ad: 'Osmanlı', y: -1517 }, { ad: 'Napolyon', y: -1798 }, { ad: 'Süveyş Kanalı', y: -1869 }, { ad: 'Bugün', y: -2026 }]
    };
  }
  const ALL = buildAll();
  const PLACES = [ALL, ...PARTS];
  const fromHash = PLACES.find(p => '#' + p.id === location.hash);
  let P = fromHash || ALL;
  // Sahnenin çizdiği çağ (Tüm Mısır seçiliyken yıla göre değişir)
  function partFor(y) {
    if (!P.composite) return P;
    return PARTS.find(p => y <= p.from && y >= p.to) || PARTS.filter(p => p.to >= y).sort((a, b) => a.to - b.to)[0] || PARTS[0];
  }
  let SP = partFor(QS.get('yil') && !isNaN(+QS.get('yil')) ? clamp(+QS.get('yil'), P.to, P.from) : P.start);
  const bilgiOf = id => { for (const p of PARTS) if (p.bilgi && p.bilgi[id]) return p.bilgi[id]; return (MIS.bilgi || {})[id] || null; };
  const monOf = id => SP.monuments.find(m => m.id === id) || P.monuments.find(m => m.id === id) || PARTS.flatMap(p => p.monuments).find(m => m.id === id && !m.eski);

  const cv = $('#scene'), g = cv.getContext('2d');
  const mcv = $('#map'), mg = mcv.getContext('2d');
  const gcv = $('#globe'), gg = gcv.getContext('2d');
  const tcv = $('#timeline'), tg = tcv.getContext('2d');
  let W = 0, H = 0, TW = 0, TH = 0, DPR = 1, tlSonAn = '';
  let Y = QS.get('yil') && !isNaN(+QS.get('yil')) ? clamp(+QS.get('yil'), P.to, P.from) : P.start, playing = false, speed = P.composite ? 10 : 2, shown = null;
  let camX = 0, camHedef = null, follow = true, last = performance.now();
  let hoverEv = null, view = 'sahne';

  S.prepare(SP); S.initAgents();
  camX = S.focus(Y).wx;
  const camRange = () => { const xs = SP.sites.map(s => s.wx); return [Math.min(...xs) - 800, Math.max(...xs) + 800]; };
  function syncScenePart() {
    const np = partFor(Y);
    if (np !== SP) {
      // çağ değişti: kullanıcı bir yerde duruyorsa yeni çağın sahnesinde aynı yere (gerçek konuma en yakın noktaya) geçilir
      const SH = window.SahneHarita, co = MIS.coords || {}, eski = !follow && SH ? SH.yol(SP, co) : null, ll = eski ? SH.wxLL(eski, camX) : null;
      SP = np; S.prepare(SP); S.initAgents(); camX = S.focus(Y).wx; follow = true; camHedef = null;
      const yeni = ll ? SH.yol(SP, co) : null, r = yeni ? SH.llWx(yeni, ll[0], ll[1]) : null;
      if (r && r.km < 40) { camX = r.wx; follow = false; }
    }
  }

  // ---------- çağ seçimi ----------
  const eraSel = $('#era');
  const eraOpt = p => `<option value="${p.id}">${p.kisa} (${p.aralikAd})</option>`;
  eraSel.innerHTML = DUNYA ? eraOpt(ALL) + BSIRA.map(b => `<optgroup label="${BLR[b].ikon} ${BLR[b].ad}">${PARTS.filter(p => p.bolge === b).map(eraOpt).join('')}</optgroup>`).join('') : PLACES.map(eraOpt).join('');
  eraSel.value = P.id;
  eraSel.addEventListener('change', () => switchPlace(eraSel.value));
  function switchPlace(id, year) {
    const np = PLACES.find(p => p.id === id); if (!np) return;
    if (DUNYA && np.bolge) { location.href = location.pathname + '?bolge=' + np.bolge + '#' + np.id; return; }
    P = np; Y = year ?? P.start; SP = partFor(Y); S.prepare(SP); S.initAgents();
    playing = false; updPlay(); follow = true; shown = null;
    camX = S.focus(Y).wx;
    speed = P.composite ? 10 : 2; $('#speed').value = String(speed);
    history.replaceState(null, '', '#' + P.id);
    document.title = DUNYA && P.composite ? '⏳ Zaman Yolculuğu: Tarihin Derinliklerinde Kaybolmaya Hazır Mısın?' : `Zaman Yolculuğu · ${BG.ad} · ${P.kisa}`;
    if (eraSel.value !== id) eraSel.value = id;
    $('#panel').scrollTop = 0;
  }
  if (!DUNYA || !P.composite) document.title = `Zaman Yolculuğu · ${BG.ad} · ${P.kisa}`;

  // ---------- boyut ----------
  function resize() {
    const r = cv.parentElement.getBoundingClientRect();
    // Büyük masaüstü ekranlarda DPR'ı 1.5 ile sınırlamak piksel yükünü ~%44 azaltır; telefonlarda tam 2x korunur
    DPR = Math.min(r.width * r.height > 900000 ? 1.5 : 2, window.devicePixelRatio || 1);
    W = r.width; H = r.height;
    for (const c of [cv, mcv, gcv]) { c.width = Math.round(W * DPR); c.height = Math.round(H * DPR); }
    const t = tcv.getBoundingClientRect();
    TW = t.width; TH = t.height; tcv.width = Math.round(TW * DPR); tcv.height = Math.round(TH * DPR);
    tlSonAn = '';
  }
  window.addEventListener('resize', resize);
  resize();

  // ---------- zaman ----------
  // Yıl değişince kamera yerinde kalır: kullanıcı sahnede bir yer seçtiyse (follow = false) orada durur;
  // şantiyeye yalnızca "🎯 Şantiyeye dön" ile döner. (Eskiden her yıl değişiminde şantiyeye atlıyordu.)
  function setYear(y, kaydet) { Y = clamp(y === 0 ? -1 : y, P.to, P.from); if (DUNYA && kaydet && typeof kitaYilKaydet === 'function') kitaYilKaydet(aktifKita(), Y); }
  // zaman çizelgesinin görünen aralığı: tlA (eski uç, MÖ +) – tlB (yeni uç); null = bütün tarih (yakınlaştırma için)
  let tlA = null, tlB = null;
  const vA = () => tlA ?? P.from, vB = () => tlB ?? P.to;
  const yearX = y => 14 + (vA() - y) / (vA() - vB()) * (TW - 28);
  const xYear = x => vA() - (x - 14) / (TW - 28) * (vA() - vB());
  function tlAralik(a, b) {
    const tam = P.from - P.to, s = Math.max(10, a - b);
    if (s >= tam) { tlA = tlB = null; } else { a = Math.min(P.from, Math.max(P.to + s, a)); tlA = a; tlB = a - s; }
    $('#tlztum').hidden = tlA == null;
  }
  function tlZoom(f, x) { const m = x != null ? xYear(x) : clamp(Y, vB(), vA()); tlAralik(m + (vA() - m) * f, m - (m - vB()) * f); }

  // ---------- panel ----------
  const popAt = y => {
    const n = P.nufus; for (let i = 1; i < n.length; i++) if (y <= n[i - 1][0] && y >= n[i][0]) return n[i - 1][1] + (n[i][1] - n[i - 1][1]) * (n[i - 1][0] - y) / (n[i - 1][0] - n[i][0]);
    return y > n[0][0] ? n[0][1] : n[n.length - 1][1];
  };
  const bar = (ad, v) => `<div class="bar"><span>${ad}</span><i><b style="width:${v / 5 * 100}%"></b></i></div>`;
  const card = (ikon, baslik, body, cls = '') => `<section class="card ${cls}"><h3><span>${ikon}</span>${baslik}</h3>${body}</section>`;

  // ---------- coğrafya, ticaret yolları, yolculuklar ----------
  const COG = window.COGRAFYA || {};
  // sınır yılı (ör. 1453) yeni döneme sayılır
  const gecimOf = (b, y) => { const a = (COG[b] || {}).gecim || []; return a.find(q => y <= q.from && y > q.to) || a.find(q => y <= q.from && y >= q.to); };
  function topraklarHTML(b, y) {
    const c = COG[b]; if (!c) return '';
    const gc = gecimOf(b, y), li = a => `<ul>${a.map(x => `<li>${x}</li>`).join('')}</ul>`;
    return `<div class="topraklar">${gc ? `<h4>🌾 İnsanlar neyle geçinirdi?</h4><p>${gc.t}</p>` : ''}<h4>👍 Bu toprakların artıları</h4>${li(c.arti)}<h4>👎 Eksileri</h4>${li(c.eksi)}<h4>⚔️ Neden bu kadar savaşıldı?</h4><p>${c.savas}</p></div>`;
  }
  const ilkCumle = t => (t.match(/^.*?[.:](\s|$)/) || [t])[0].trim();
  const kmYol = pts => { let t = 0; for (let i = 1; i < pts.length; i++) { const [a, b] = [pts[i - 1], pts[i]], r = Math.PI / 180, h = Math.sin((b[0] - a[0]) * r / 2) ** 2 + Math.cos(a[0] * r) * Math.cos(b[0] * r) * Math.sin((b[1] - a[1]) * r / 2) ** 2; t += 12742 * Math.asin(Math.sqrt(h)); } return t; };
  const ticaretAktif = y => (window.TICARET_YOLLARI || []).filter(t => y <= t.from && y >= t.to);
  const yakinYolculuk = (y, n) => (window.YOLCULUKLAR || []).slice().sort((a, b) => Math.abs(a.y - y) - Math.abs(b.y - y)).slice(0, n);
  function yollarHTML(y) {
    const tr = ticaretAktif(y), yj = yakinYolculuk(y, 3);
    return `${tr.length ? `<ul class="evs">${tr.map(t => `<li data-yol="${t.id}">${t.tur === 'deniz' ? '⛵' : '🐪'} <b>${t.ad}</b><br><small>${t.cikis} → ${t.varis} · ${t.mal}</small></li>`).join('')}</ul>` : '<p><small>Bu yıl için kayıtlı bir ticaret yolu yok.</small></p>'}
      <h4 class="alt-baslik">⏱ O zaman yolculuk ne kadar sürerdi?</h4><ul class="evs">${yj.map(j => `<li data-yolculuk="${j.id}"><b>${j.ad}</b><br><small>${YIL.fmt(j.y)} · ${j.sure}</small></li>`).join('')}</ul>`;
  }
  const yolOrta = pts => pts[Math.floor(pts.length / 2)];
  function yolHaritada(pts, uz, y) {
    if (y != null) setYear(y, true);
    panelAc(false); closeModal(); setView('dunya'); const m = yolOrta(pts); DN.goTo(m[0], m[1], clamp(4500 / Math.max(uz, 30), 1, 40));
  }
  function openYol(t) {
    const uz = kmYol(t.pts);
    showModal({ ikon: t.tur === 'deniz' ? '⛵' : '🐪', title: t.ad, sub: `${t.cikis} → ${t.varis}`, tabs: [{ ad: 'Genel', html: `${rowsHTML([['Nereden nereye', `${t.cikis} → ${t.varis}`], ['Kullanıldığı yıllar', `${YIL.fmt(t.from)} – ${t.to <= -2026 ? 'bugün' : YIL.fmt(t.to)} (yaklaşık)`], ['Taşınan mallar', t.mal], ['Yol', `${t.tur === 'deniz' ? 'Deniz' : 'Kara'} · yaklaşık ${fmt(Math.round(uz / 100) * 100)} km`]])}<p>${t.not}</p><div class="gos"><button class="phbtn" data-yolharita="${t.id}">🌍 Haritada göster</button></div>` }] });
  }
  // ---------- devlet penceresi: kürede bir devlete (adına, ⓘ düğmesine ya da sınırlarının içine) tıklayınca ----------
  // Elle yazılmış notlar (data/devlet-notlari.js) + Wikidata (başkent, dil, din, öncül, ardıl, kişiler, olaylar) + Vikipedi özeti ve fotoğraflar
  const WD = 'https://www.wikidata.org/w/api.php?format=json&origin=*&action=wbgetentities&languages=tr|en&ids=';
  const wdCache = new Map();
  const wdGet = (ids, props) => { const key = props + ids.join('|'); if (!wdCache.has(key)) wdCache.set(key, fetch(WD + ids.join('|') + '&props=' + props).then(r => r.json()).then(j => j.entities || {}).catch(() => ({}))); return wdCache.get(key); };
  const sparql = q => { const key = 'sp' + q; if (!wdCache.has(key)) wdCache.set(key, fetch('https://query.wikidata.org/sparql?format=json&query=' + encodeURIComponent(q)).then(r => r.json()).then(j => j.results.bindings).catch(() => [])); return wdCache.get(key); };
  const wdYil = t => { if (!t) return null; const m = /^([+-]?)0*(\d+)/.exec(String(t)); if (!m) return null; return m[1] === '-' ? +m[2] : -(+m[2]); };
  const qId = u => (u || '').split('/').pop();
  const resim = (u, w = 160) => u ? u.replace(/^http:/, 'https:') + '?width=' + w : '';
  async function devletVeri(k) {
    if (!k.q) return null;
    const ent = (await wdGet([k.q], 'claims|sitelinks'))[k.q]; if (!ent) return null;
    const C = ent.claims || {}, it = p => (C[p] || []).map(c => c.mainsnak.datavalue && c.mainsnak.datavalue.value && c.mainsnak.datavalue.value.id).filter(Boolean);
    const zaman = p => { const c = (C[p] || [])[0]; return c && c.mainsnak.datavalue ? wdYil(c.mainsnak.datavalue.value.time) : null; };
    const qy = (c, p) => { const v = ((c.qualifiers || {})[p] || [])[0]; return v && v.datavalue ? wdYil(v.datavalue.value.time) : null; }, yy = Math.round(Y);
    const bk = (C.P36 || []).filter(c => { const a = qy(c, 'P580'), b = qy(c, 'P582'); return (a == null || a >= yy) && (b == null || b <= yy); }).map(c => c.mainsnak.datavalue && c.mainsnak.datavalue.value.id).filter(Boolean);
    const alan = { baskent: (bk.length ? bk : it('P36')).slice(0, 4), dil: it('P37').slice(0, 4), din: it('P140').slice(0, 3), para: it('P38').slice(0, 2), yonetim: it('P122').slice(0, 2),
      onceki: [...new Set([...it('P1365'), ...it('P155')])].slice(0, 6), sonraki: [...new Set([...it('P1366'), ...it('P156')])].slice(0, 6) };
    const hepsi = [...new Set(Object.values(alan).flat())];
    const lab = hepsi.length ? await wdGet(hepsi, 'labels') : {};
    const ad = q => { const l = (lab[q] || {}).labels || {}; return (l.tr || l.en || {}).value || null; };
    const out = {}; for (const [k2, v] of Object.entries(alan)) out[k2] = v.map(ad).filter(Boolean);
    out.kurulus = zaman('P571'); out.yikilis = zaman('P576');
    out.trwiki = ((ent.sitelinks || {}).trwiki || {}).title; out.enwiki = ((ent.sitelinks || {}).enwiki || {}).title;
    return out;
  }
  // Aynı devletin ardışık sınır kayıtları (her biri yalnızca kendi yıllarında geçerli)
  function kayitZinciri(k) { let a = k; for (let i = 0; a.once && i < 500; i++) a = a.once; const L = []; for (let i = 0; a && i < 500; i++, a = a.sonra) L.push(a); return L; }
  // y yılında (ll) noktası bu devletin topraklarında mıydı? O yılın sınır kaydının çokgenine bakılır.
  const oZamanBurada = (k, y, ll) => y != null && kayitZinciri(k).some(r => y <= r.y1 + 0.5 && y >= r.y0 - 0.5 && DN.icerir(r, ll[0], ll[1]));
  function openDevlet(k) {
    const N = (window.DEVLET_NOT || {})[k.n] || {}, ad = DN.sinirAd(k, Math.round(Y)), bit = k.y0 <= -2024 ? 'bugün' : YIL.fmt(k.y0);
    const veri = devletVeri(k);
    const cipler = L => L && L.length ? `<div class="dv-cip">${L.map(x => `<span>${esc(x)}</span>`).join('')}</div>` : '';
    const genel = `<div class="kisi-ust"><div class="kisi-foto dv-foto"></div><div>${rowsHTML([['Ad', ad !== k.n ? `${esc(ad)} <small>(${esc(k.n)})</small>` : esc(ad)], [k.y1 === k.y0 ? 'Bu harita' : 'Bu sınırların yılları', k.y1 === k.y0 ? `${YIL.fmt(k.y1)} yılının sınırları` : `${YIL.fmt(k.y1)} – ${bit}`], ['Yüzölçümü', `yaklaşık ${fmt(k.a)} km²`]])}</div></div>
      ${N.koken ? `<h4>🧭 Kökeni</h4><p>${N.koken}</p>` : ''}${N.halk ? `<h4>👥 Halklar</h4><p>${N.halk}</p>` : ''}
      <div class="dv-wd"><p class="note">Ayrıntılar yükleniyor…</p></div>
      <div class="dv-ozetk"><h4>📖 Kısaca</h4><div class="dv-ozet"><p class="note">Vikipedi\'den özet yükleniyor…</p></div></div>`;
    // Kişiler ve olaylar pencere açılırken birlikte aranır; hiçbir şey çıkmayan sekme gizlenir ("bulunamadı" yazısı yok).
    // Yalnızca o anda bu devletin toprağı olan yerdekiler sayılır: her kişi/olay kendi yılındaki sınır kaydına göre denetlenir.
    const kisiP = (async () => {
      if (!window.KIM && window.OyunYukle) try { await window.OyunYukle('kim'); } catch (e) { /* */ }
      const yerel = (window.KIM || []).filter(p => p.ll && oZamanBurada(k, p.dogum, p.ll));
      let wd = [];
      if (k.q) try {
        const r = await sparql(`SELECT ?p ?pLabel ?img ?b ?d ?sl ?trw WHERE { ?p wdt:P27 wd:${k.q}; wdt:P31 wd:Q5; wikibase:sitelinks ?sl. OPTIONAL{?p wdt:P18 ?img} OPTIONAL{?p wdt:P569 ?b} OPTIONAL{?p wdt:P570 ?d} OPTIONAL{?trw schema:about ?p; schema:isPartOf <https://tr.wikipedia.org/>} SERVICE wikibase:label { bd:serviceParam wikibase:language "tr,en". } } ORDER BY DESC(?sl) LIMIT 40`);
        const gor = new Set(); wd = r.filter(x => !gor.has(x.p.value) && gor.add(x.p.value)).slice(0, 16);
      } catch (e) { /* çevrimdışı: yalnızca yerel liste */ }
      return { yerel, wd };
    })();
    const olayP = (async () => {
      const yerel = (window.OLAYLAR || []).filter(e => e.ll && oZamanBurada(k, e.y, e.ll)).sort((a, b2) => b2.y - a.y);
      let wd = [];
      if (k.q) try {
        const r = await sparql(`SELECT ?e ?eLabel ?t ?t2 ?sl ?trw WHERE { ?e wdt:P710 wd:${k.q}; wikibase:sitelinks ?sl. OPTIONAL{?e wdt:P585 ?t} OPTIONAL{?e wdt:P580 ?t2} OPTIONAL{?trw schema:about ?e; schema:isPartOf <https://tr.wikipedia.org/>} SERVICE wikibase:label { bd:serviceParam wikibase:language "tr,en". } } ORDER BY DESC(?sl) LIMIT 40`);
        const gor = new Set(); wd = r.filter(x => !gor.has(x.e.value) && gor.add(x.e.value)).slice(0, 15).map(x => ({ ...x, yil: wdYil((x.t || x.t2 || {}).value) })).sort((a, b2) => (b2.yil ?? -9999) - (a.yil ?? -9999));
      } catch (e) { /* */ }
      return { yerel, wd };
    })();
    const sekmeGizle = (i, bos) => { if (!bos || modal.hidden || modal.querySelector('h2').textContent !== ad) return; const bt = modal.querySelector(`.tabs [data-tab="${i}"]`); if (bt && !bt.classList.contains('on')) bt.hidden = true; };
    kisiP.then(r => sekmeGizle(1, !r.yerel.length && !r.wd.length && !(N.kisi || []).length));
    olayP.then(r => sekmeGizle(2, !r.yerel.length && !r.wd.length));
    const tabs = [
      { ad: '🏛️ Genel', html: genel, onShow: async b => {
        const v = await veri, kutu = b.querySelector('.dv-wd'); if (!b.contains(kutu)) return;
        const sat = [];
        const dil = N.dil || (v && v.dil.join(', ')), din = N.din || (v && v.din.join(', '));
        if (v && (v.kurulus != null || v.yikilis != null)) sat.push(['Devletin ömrü', `${v.kurulus != null ? YIL.fmt(v.kurulus) : '?'} – ${v.yikilis != null ? YIL.fmt(v.yikilis) : (k.y0 <= -2024 ? 'bugün' : '?')}`]);
        if (v && v.baskent.length) sat.push(['Başkent', esc(v.baskent.join(', '))]);
        if (dil) sat.push(['Dil', esc(dil)]); if (din) sat.push(['Din', esc(din)]);
        if (v && v.yonetim.length) sat.push(['Yönetim', esc(v.yonetim.join(', '))]); if (v && v.para.length) sat.push(['Para', esc(v.para.join(', '))]);
        const onc = N.onceki || (v && v.onceki), son = N.sonraki || (v && v.sonraki);
        kutu.innerHTML = (sat.length ? rowsHTML(sat) : '') + (onc && onc.length ? `<h4>⬅️ Hangi devletin devamı?</h4>${cipler(onc)}` : '') + (son && son.length ? `<h4>➡️ Yerini kim aldı?</h4>${cipler(son)}` : '');
        const oz = b.querySelector('.dv-ozet'), ozk = b.querySelector('.dv-ozetk'), fk = b.querySelector('.dv-foto');
        try {
          const u = v && v.trwiki ? 'https://tr.wikipedia.org/api/rest_v1/page/summary/' + encodeURIComponent(v.trwiki.replace(/ /g, '_')) : k.w ? 'https://en.wikipedia.org/api/rest_v1/page/summary/' + encodeURIComponent(k.w.replace(/ /g, '_')) : null;
          if (!u) { ozk.remove(); return; }
          const o = await fetch(u).then(r => r.json()); if (!b.contains(oz)) return;
          if (o.thumbnail) fk.innerHTML = `<img src="${esc(o.thumbnail.source)}" alt="${esc(ad)}">`;
          if (!o.extract) { ozk.remove(); return; }
          oz.innerHTML = `<p>${esc(o.extract)}</p>${o.content_urls ? `<p><a href="${esc(o.content_urls.desktop.page)}" target="_blank" rel="noopener">Vikipedi\'de devamını oku ↗</a></p>` : ''}`;
        } catch (e) { if (ozk.isConnected) ozk.remove(); }
      } },
      { ad: '👥 Kişiler', html: '<div class="dv-kisiler"><p class="note">Kişiler yükleniyor…</p></div>', onShow: async b => {
        const kutu = b.querySelector('.dv-kisiler'), r = await kisiP; if (!kutu.isConnected) return;
        let h = '';
        if (N.kisi && N.kisi.length) h += `<h4>⭐ Önemli kişiler</h4>${cipler(N.kisi)}`;
        if (r.yerel.length) h += `<h4>🎭 Bu devletin topraklarında doğmuş ünlüler</h4><div class="dv-grid">${r.yerel.map(p => `<button class="dv-kisi" data-tani="${p.id}"><b>${esc(p.ad)}</b><small>${YIL.aralik(p.dogum, p.olum)} · ${esc(p.alan || '')}</small></button>`).join('')}</div>`;
        if (r.wd.length) h += `<h4>🌐 Bu devletin vatandaşı olarak kayıtlı en tanınmış kişiler</h4><div class="dv-grid">${r.wd.map(x => { const by = wdYil(x.b && x.b.value), dy = wdYil(x.d && x.d.value), url = x.trw ? x.trw.value : 'https://www.wikidata.org/wiki/' + qId(x.p.value);
          return `<a class="dv-kisi" href="${esc(url)}" target="_blank" rel="noopener">${x.img ? `<img src="${esc(resim(x.img.value, 96))}" alt="" loading="lazy">` : '<i>👤</i>'}<b>${esc(x.pLabel.value)}</b><small>${by != null ? YIL.fmt(by) : '?'}${dy != null ? ' – ' + YIL.fmt(dy) : ''}</small></a>`; }).join('')}</div><p class="note">Kaynak: Wikidata (vatandaşlık kaydı olan kişiler, tanınırlığa göre).</p>`;
        kutu.innerHTML = h;
        kutu.querySelectorAll('[data-tani]').forEach(x => x.addEventListener('click', () => window.BenKimim && window.BenKimim.tani(x.dataset.tani)));
      } },
      { ad: '⚔️ Olaylar', html: '<div class="dv-olaylar"><p class="note">Olaylar yükleniyor…</p></div>', onShow: async b => {
        const kutu = b.querySelector('.dv-olaylar'), r = await olayP; if (!kutu.isConnected) return;
        let h = '';
        if (r.yerel.length) h += `<h4>📍 Bu devletin topraklarında yaşanan olaylar</h4><ul class="evs olaylist">${r.yerel.map(e => `<li data-dvolay="${e.id}">${{ savas: '⚔️', deniz: '⚓', afet: '🌋', antlasma: '📜', olay: '🏛️' }[e.tur] || '📌'} <b>${YIL.fmt(e.y)}</b> ${esc(e.ad)}</li>`).join('')}</ul>`;
        if (r.wd.length) h += `<h4>🌐 Bu devletin katıldığı savaş ve olaylar</h4><ul class="evs">${r.wd.map(x => `<li><a href="${esc(x.trw ? x.trw.value : 'https://www.wikidata.org/wiki/' + qId(x.e.value))}" target="_blank" rel="noopener"><b>${x.yil != null ? YIL.fmt(x.yil) : ''}</b> ${esc(x.eLabel.value)}</a></li>`).join('')}</ul>`;
        kutu.innerHTML = h;
        kutu.querySelectorAll('[data-dvolay]').forEach(x => x.addEventListener('click', () => { const e = (window.OLAYLAR || []).find(o => o.id === x.dataset.dvolay); if (e) openEvent(e); }));
      } }
    ];
    // 👘 Kültür ve Yaşam sekmesi (data/atlas/kultur.js — döneme ve devlete göre giyim, mutfak, gelenek)
    const ku = (window.DEVLET_KULTUR || []).find(x => x.esles && (x.esles.test(k.n || '') || x.esles.test(ad || '')));
    if (ku) {
      tabs.splice(1, 0, {
        ad: '👘 Kültür ve Yaşam',
        html: `<h4>✨ ${esc(ku.baslik)}</h4>
          <h4>👥 Toplum ve Karakter</h4><p>${esc(ku.halk)}</p>
          <h4>👘 Giyim ve Kuşam</h4><p>${esc(ku.giyim)}</p>
          <h4>🍲 Mutfak ve İçecekler</h4><p>${esc(ku.mutfak)}</p>
          <h4>🎭 Gelenekler ve Günlük Yaşam</h4><p>${esc(ku.adet)}</p>
          <div class="did"><b>💡 Biliyor muydun?</b><p>${esc(ku.ilginc)}</p></div>`,
        onShow: () => kesifKaydet('kultur', ku.id)
      });
    }
    // 💰 Dönemsel Ekonomi ve Geçim Kaynağı sekmesi (data/atlas/ekonomi.js)
    const ek = window.ekonomiBul ? window.ekonomiBul(ad, k.n, Math.round(Y)) : null;
    if (ek) {
      const ekIdx = ku ? 2 : 1;
      tabs.splice(ekIdx, 0, {
        ad: '💰 Ekonomi',
        html: `<h4>💰 ${esc(ek.baslik)} <small style="font-weight:500;opacity:.75">(${YIL.fmt(Math.round(Y))})</small></h4>
          <div class="ek-etiketler">${(ek.kaynaklar || []).map(x => `<span class="pill">🪙 ${esc(x)}</span>`).join('')}</div>
          <h4>🚢 Başlıca Ticaret ve İhraç Ürünleri</h4><p>${esc(ek.ihracat)}</p>
          <h4>🏦 Nasıl Para Kazanıyordu?</h4><p>${esc(ek.nasil)}</p>
          <div class="did"><b>💡 Biliyor muydun?</b><p>${esc(ek.ilginc)}</p></div>`,
        onShow: () => kesifKaydet('ekonomi', ek.id)
      });
    }
    if (k.w) tabs.push(photoTab(k.w, 12, true));
    showModal({ ikon: '🗺️', title: ad, sub: k.y1 === k.y0 ? `${YIL.fmt(k.y1)} yılının sınırları` : `${YIL.fmt(k.y1)} – ${bit} sınırları`, tabs });
  }
  // ---------- 🧭 Keşif Defteri (XP, Seviye, Kilitli Sürprizler) & 🌊🐾🏔️ Dünya Atlası Kartları ----------
  const KESIF_KAT = [
    ['okyanus', '🌊 Okyanuslar ve Denizler', () => (window.ATLAS_OKYANUS?.okyanuslar || []).length],
    ['akinti', '🌀 Akıntılar, Girdaplar ve Fırtınalar', () => (window.ATLAS_OKYANUS?.akintilar || []).length + (window.ATLAS_OKYANUS?.olaylar || []).length],
    ['hayvan', '🐾 Bölge ve Okyanus Hayvanları', () => (window.ATLAS_HAYVANLAR || []).length],
    ['bitki', '🌿 Yöreye Özgü Bitkiler ve Ağaçlar', () => (window.ATLAS_BITKILER || []).length],
    ['cografya', '🏔️ Dağlar, Çöller ve Tarihî Havzalar', () => (window.ATLAS_COGRAFYA || []).length],
    ['dogabolge', '🪨 Jeolojik Bölgeler, Çöller ve Kıtalar', () => ((window.ATLAS_DOGA_BOLGELER?.ozel || []).length + (window.ATLAS_DOGA_BOLGELER?.kitalar || []).length)],
    ['nehir', '🏞️ Dünya Nehirleri', () => (window.ATLAS_NEHIRLER || []).length],
    ['hayvangoc', '🐋 Hayvan Göç Döngüleri', () => (window.ATLAS_HAYVAN_GOC || []).length],
    ['liman', '⚓ Dünya Limanları', () => (window.ATLAS_LIMANLAR || []).length],
    ['volkan', '🌋 Yanardağlar ve Ateş Çemberi', () => (window.ATLAS_VOLKANLAR?.volkanlar || []).length],
    ['yasamdoga', '🐾🌿 Hayvan ve Bitki Yaşamları', () => ((window.YASAM_DOGA?.hayvanlar || []).length + (window.YASAM_DOGA?.bitkiler || []).length)],
    ['magara', '🪨 Tarihöncesi Mağaralar ve Kazılar', () => (window.ATLAS_MAGARALAR || []).length],
    ['donum', '⚡ Dünyayı Değiştiren Büyük Olaylar', () => (window.DONUM_NOKTALARI || []).length],
    ['kultur', '👘 Uygarlık ve Ülke Kültürleri', () => (window.DEVLET_KULTUR || []).length],
    ['ekonomi', '💰 Dönemsel Ülke Ekonomileri', () => (window.ATLAS_EKONOMI || []).length],
    ['kaynak', '⛏️ Dünya Madenleri ve Kaynaklar', () => (window.KAYNAKLAR || []).length],
    ['yayilis', '🍵 Yemek ve İcatların Yolculuğu', () => (window.ATLAS_YAYILIS || []).length],
    ['surpriz', '🎁 Gizli Sürprizler (Easter Eggs)', () => (window.ATLAS_SURPRIZLER || []).length]
  ];
  function kesifOku() {
    try { return JSON.parse(localStorage.getItem('zy-kesif') || 'null') || {}; } catch (e) { return {}; }
  }
  function kesifYaz(d) {
    try { localStorage.setItem('zy-kesif', JSON.stringify(d)); } catch (e) { /* gizli mod */ }
  }
  function kesifXP(d) {
    const o = d || kesifOku();
    let baz = 0;
    for (const [k] of KESIF_KAT) baz += (o[k] || []).length * (k === 'surpriz' ? 35 : 10);
    return Math.max(baz, o.xp || 0);
  }
  function kesifSayi() {
    const d = kesifOku(); let g = 0, t = 0;
    for (const [k, , tot] of KESIF_KAT) { g += (d[k] || []).length; t += tot(); }
    return { g, t, d, xp: kesifXP(d) };
  }
  function kesifRozetGuncelle() {
    const el = $('#kesif-say'); if (!el) return;
    const { g, t, xp } = kesifSayi();
    el.textContent = t ? `${g}/${t} · ${xp} XP` : '';
  }
  function surprizBulunduMu(id) {
    const d = kesifOku();
    return Array.isArray(d.surpriz) && d.surpriz.includes(id);
  }
  function xpEkle(miktar, kaynak) {
    if (!miktar || miktar <= 0) return 0;
    const d = kesifOku();
    const once = kesifXP(d);
    d.xp = once + miktar;
    if (kaynak) { d.oyun = d.oyun || {}; d.oyun[kaynak] = (d.oyun[kaynak] || 0) + 1; }
    kesifYaz(d);
    kesifRozetGuncelle();
    // Yeni bir gizli sürpriz ipucunun kilidi açıldı mı?
    const yeniAcilan = (window.ATLAS_SURPRIZLER || []).find(s => s.xpKilit > once && s.xpKilit <= d.xp && !surprizBulunduMu(s.id));
    if (yeniAcilan) toast(`🔓 <b>Yeni gizli sürpriz ipucu açıldı!</b> Keşif Defterim → 🎁 Gizli Sürprizler'e bak.`);
    return d.xp;
  }
  function kesifKaydet(tur, id) {
    if (!tur || !id) return false;
    const d = kesifOku();
    if (!Array.isArray(d[tur])) d[tur] = [];
    if (!d[tur].includes(id)) {
      const once = kesifXP(d);
      d[tur].push(id);
      d.xp = once + (tur === 'surpriz' ? 35 : 10);
      kesifYaz(d);
      kesifRozetGuncelle();
      const yeniAcilan = (window.ATLAS_SURPRIZLER || []).find(s => s.xpKilit > once && s.xpKilit <= d.xp && !d.surpriz?.includes(s.id));
      if (yeniAcilan && tur !== 'surpriz') toast(`🔓 <b>Yeni gizli sürpriz ipucunun kilidi açıldı!</b> Keşif Defterim'e göz at.`);
      return true;
    }
    return false;
  }
  function openKesif(acSekme) {
    const { g, t, d, xp } = kesifSayi();
    const pct = t ? Math.round(100 * g / t) : 0;
    const sev = Math.floor(xp / 60) + 1, sevIc = xp % 60, sevPct = Math.round(100 * sevIc / 60);
    const rutbe = xp >= 400 ? '🏆 Büyük Atlas Ustası' : xp >= 200 ? '🥇 Doğa & Tarih Bilgini' : xp >= 80 ? '🥈 Denizler ve Kıtalar Kâşifi' : xp >= 10 ? '🥉 Meraklı Gezgin' : '🧭 Yolculuğa Yeni Başladı';
    const satirlar = KESIF_KAT.map(([k, ad, tot]) => {
      const n = (d[k] || []).length, mx = tot(), w = mx ? Math.round(100 * n / mx) : 0;
      return `<div class="kf-sat"><div class="kf-ust"><span>${ad}</span><b>${n} / ${mx}</b></div><div class="kf-bar"><i style="width:${w}%"></i></div></div>`;
    }).join('');
    const ilerlemeHtml = `<div class="kf-rozet"><span>${rutbe} · Seviye ${sev}</span><b>${xp} XP · ${g} / ${t} keşif (%${pct})</b>
        <div class="kf-bar" style="margin:6px 0 4px"><i style="width:${sevPct}%"></i></div>
        <small>Sonraki seviyeye ${60 - sevIc} XP kaldı. Haritada keşif yaptıkça ve oyunları oynadıkça XP kazanır, yeni gizli sürpriz ipuçlarının kilidini açarsın!</small></div>
      <div class="kf-list">${satirlar}</div>
      <div class="gos">
        <button class="phbtn icbtn" data-kf="doga">🌿 Doğa Atlası'nı Aç</button>
        <button class="phbtn" data-kf="paylas">📋 Keşif Karnemi Paylaş</button>
      </div>`;
    const spList = (window.ATLAS_SURPRIZLER || []).map(sp => {
      const bul = surprizBulunduMu(sp.id), acik = bul || xp >= sp.xpKilit;
      if (bul) {
        return `<div class="sp-kart sp-bul"><div class="sp-ust"><b>${sp.ik} ${esc(sp.ad)}</b><span class="pill">✓ Bulundu</span></div><p>${esc(sp.yer)}</p><button class="phbtn" data-surprizoku="${sp.id}">📖 Hikâyesini Oku</button></div>`;
      }
      if (acik) {
        return `<div class="sp-kart sp-acik"><div class="sp-ust"><b>✨ Gizli Sürpriz (İpucu Açık)</b><span class="pill">🔓 Açık</span></div><p>🔎 <i>${esc(sp.ipucu)}</i></p></div>`;
      }
      return `<div class="sp-kart sp-kilit"><div class="sp-ust"><b>🔒 Kilitli Sürpriz</b><span class="pill">${sp.xpKilit} XP gerekir</span></div><p>Keşif yaparak veya oyun oynayarak <b>${sp.xpKilit - xp} XP</b> daha kazanınca ipucu açılır (ya da haritada şans eseri kendin bulabilirsin!).</p></div>`;
    }).join('');
    const bulSay = (d.surpriz || []).length, totSp = (window.ATLAS_SURPRIZLER || []).length;
    const spHtml = `<p class="note">Dünyanın (ve uzayın!) gizli köşelerine <b>${totSp} sürpriz</b> sakladık (${bulSay}/${totSp} bulundu). Haritada ipucundaki yere yaklaşıp altın parıltıya tıkla!</p><div class="sp-list">${spList}</div>`;
    showModal({ ikon: '🧭', title: 'Keşif Defterim', sub: `Seviye ${sev} · ${xp} XP`, open: acSekme === 'surpriz' ? 1 : 0, tabs: [
      { ad: '🧭 İlerleme', html: ilerlemeHtml },
      { ad: `🎁 Gizli Sürprizler (${bulSay}/${totSp})`, html: spHtml }
    ] });
  }
  function okyanusBul(la, lo) {
    const list = window.ATLAS_OKYANUS?.okyanuslar || [];
    const byId = id => list.find(x => x.id === id);
    // 1. Önce kapalı denizler (dar sınırlayıcı kutular)
    for (const o of list) {
      if (o.tur !== 'deniz') continue;
      const [a0, a1, o0, o1] = o.bb;
      if (la >= a0 && la <= a1 && lo >= o0 && lo <= o1) return o;
    }
    // 2. Kutup okyanusları
    if (la >= 66.5) return byId('arktik');
    if (la <= -58) return byId('guney');
    // 3. Hint Okyanusu (Malakka Boğazı ~103°D kuzeyde, Tazmanya ~146°D güneyde)
    if (lo >= 20 && ((la <= -8 && lo <= 146) || (la > -8 && lo <= 103))) return byId('hint');
    // 4. Atlas Okyanusu (Panama ~9°K / Horn Burnu ~68°B batı sınırı)
    if (la >= 9 && lo >= -98 && lo < 20 && !(la < 22 && lo < -82 - (la - 9) * 1.1)) return byId('atlas');
    if (la < 9 && lo >= -68 && lo < 20) return byId('atlas');
    // 5. Büyük (Pasifik) Okyanus
    return byId('pasifik') || list[list.length - 1] || null;
  }
  function openOkyanus(o) {
    if (!o) return;
    kesifKaydet('okyanus', o.id);
    const genel = `<div class="kapak" data-kapak="${esc(o.w)}"></div>
      ${rowsHTML([['Tür', o.tur === 'deniz' ? 'Deniz' : 'Okyanus'], ['Yüzölçümü', o.yuzolcum], ['Derinlik', o.derinlik], ['Su sıcaklığı', o.sicaklik]])}
      <h4>🐋 Canlı Yaşamı</h4><p>${esc(o.canlilar)}</p>
      <h4>🌀 Akıntılar ve Su Hareketi</h4><p>${esc(o.akintiOzet)}</p>
      <h4>📜 Tarihteki Rolü</h4><p>${esc(o.tarih)}</p>
      <div class="did"><b>💡 Biliyor muydun?</b><p>${esc(o.ilginc)}</p></div>
      <div class="gos"><button class="phbtn icbtn" data-atlas-ac="akinti">🌊 Akıntılar ve girdapları haritada aç</button></div>`;
    showModal({ ikon: o.ik || '🌊', title: o.ad, sub: o.tur === 'deniz' ? 'Deniz · Dünya Atlası' : 'Okyanus · Dünya Atlası', tabs: [
      { ad: '🌊 Genel', html: genel, onShow: b => kapakYukle(b.querySelector('.kapak')) },
      ...(o.w ? [photoTab(o.w, 8)] : [])
    ] });
  }
  function openAkinti(a) {
    if (!a) return;
    kesifKaydet('akinti', a.id);
    const sicak = a.tip === 'sicak', mid = a.pts[Math.floor(a.pts.length / 2)];
    const genel = `<div class="kapak" data-kapak="${esc(a.w)}"></div>
      <span class="pill">${sicak ? '🔥 Sıcak Okyanus Akıntısı' : '❄️ Soğuk Okyanus Akıntısı'}</span>
      ${rowsHTML([['Akış Hızı', a.hiz]])}
      <h4>🧭 Nasıl Oluşur?</h4><p>${esc(a.neden)}</p>
      <h4>🌦️ İklime Etkisi</h4><p>${esc(a.etki)}</p>
      ${a.dogaOnemi ? `<h4>🌿 Doğa ve Canlılar İçin Önemi</h4><p>${esc(a.dogaOnemi)}</p>` : ''}
      <div class="did"><b>💡 Biliyor muydun?</b><p>${esc(a.ilginc)}</p></div>
      <div class="gos"><button class="phbtn icbtn" data-atlaskure="akinti|${mid[0]}|${mid[1]}|${esc((sicak ? '🔥 ' : '❄️ ') + a.ad)}">🌍 Kürede göster</button></div>`;
    showModal({ ikon: sicak ? '🔥' : '❄️', title: a.ad, sub: sicak ? 'Sıcak su akıntısı' : 'Soğuk su akıntısı', tabs: [
      { ad: '🌊 Akıntı', html: genel, onShow: b => kapakYukle(b.querySelector('.kapak')) },
      ...(a.w ? [photoTab(a.w, 6, true)] : [])
    ] });
  }
  function openDenizOlay(o) {
    if (!o) return;
    kesifKaydet('akinti', o.id);
    const gir = o.tip === 'girdap';
    const genel = `<div class="kapak" data-kapak="${esc(o.w)}"></div>
      <span class="pill">${gir ? '🌀 Deniz Girdabı / Okyanus Döngüsü' : '🌪️ Fırtına ve Kasırga Kuşağı'}</span>
      ${rowsHTML([['Konum', o.yer]])}
      <h4>⚙️ Nasıl Oluşur?</h4><p>${esc(o.neden)}</p>
      <h4>⛵ Denizciliğe ve Doğaya Etkisi</h4><p>${esc(o.etki)}</p>
      <div class="did"><b>💡 Biliyor muydun?</b><p>${esc(o.ilginc)}</p></div>
      <div class="gos"><button class="phbtn icbtn" data-atlaskure="akinti|${o.ll[0]}|${o.ll[1]}|${esc((gir ? '🌀 ' : '🌪️ ') + o.ad)}">🌍 Kürede göster</button></div>`;
    showModal({ ikon: gir ? '🌀' : '🌪️', title: o.ad, sub: o.yer, tabs: [
      { ad: gir ? '🌀 Girdap' : '🌪️ Fırtına', html: genel, onShow: b => kapakYukle(b.querySelector('.kapak')) },
      ...(o.w ? [photoTab(o.w, 6)] : [])
    ] });
  }
  function openHayvan(h) {
    if (!h) return;
    kesifKaydet('hayvan', h.id);
    const tuk = h.durum === 'Nesli Tükendi';
    const rozRenk = tuk ? '⏳ Nesli Tükendi' : h.durum === 'Kritik' ? '🔴 Kritik Tehlike Altında' : h.durum === 'Tehlikede' ? '🟠 Tehlikede' : h.durum === 'Hassas' ? '🟡 Hassas' : '🟢 Yaygın';
    const genel = `<div class="kapak" data-kapak="${esc(h.w)}"></div>
      <span class="pill">${rozRenk}</span>
      ${rowsHTML([['Yaşadığı Bölge', `${h.bolge} (${h.kita})`], ['Yaşam Alanı', h.habitat], ['Beslenme', h.beslenme], ['Tahmini Sayı', h.sayi]])}
      <div class="did"><b>✨ İlgi Çekici Özelliği</b><p>${esc(h.ozellik)}</p></div>
      <div class="gos">
        <button class="phbtn icbtn" data-hayvangit="${esc(h.id)}">🌍 Kürede yaşam alanına git</button>
        ${tuk && h.to != null ? `<button class="phbtn" data-go="${Math.min(P.from, Math.max(P.to, h.to + 200))}">⏳ Yaşadığı döneme git</button>` : ''}
      </div>`;
    showModal({ ikon: h.ik || '🐾', title: h.ad, sub: `${h.bolge} · ${h.durum}`, tabs: [
      { ad: '🐾 Hakkında', html: genel, onShow: b => kapakYukle(b.querySelector('.kapak')) },
      ...(h.w ? [photoTab(h.w, 8)] : [])
    ] });
  }
  function hayvanKurede(id) {
    const h = (window.ATLAS_HAYVANLAR || []).find(x => x.id === id); if (!h) return;
    closeModal(); if (view !== 'dunya') setView('dunya');
    DN.setLayer('hayvan', true); renderOlayPanel();
    if (h.to != null && Y < h.to) setYear(h.to + 200, true);
    DN.goTo(h.ll[0], h.ll[1], 4.2); DN.pin(h.ll[0], h.ll[1], `${h.ik} ${h.ad}`);
  }
  function openCografya(cg) {
    if (!cg) return;
    kesifKaydet('cografya', cg.id);
    const turAd = { harika: '✨ Eşsiz Doğa Harikası', dag: '🏔️ Dağ / Sıradağ', col: '🏜️ Çöl / Bozkır', havza: '🌿 Tarihî Havza', nehir: '🌊 Büyük Nehir' }[cg.tur] || '🗺️ Coğrafya';
    const satirlar = [['Konum', cg.konum]];
    if (cg.yukseklik) satirlar.push(['🏔️ Yükseklik / Rakım', cg.yukseklik]);
    satirlar.push(['Ölçü / Özellik', cg.olcu]);
    const genel = `<div class="kapak" data-kapak="${esc(cg.w)}"></div>
      <span class="pill">${turAd}</span>
      ${rowsHTML(satirlar)}
      <h4>🌍 Coğrafi Özellikleri</h4><p>${esc(cg.ozet)}</p>
      <h4>📜 Tarihî Önemi — Neden Eşsiz?</h4><p>${esc(cg.tarihOnemi)}</p>
      <div class="did"><b>💡 Biliyor muydun?</b><p>${esc(cg.ilginc)}</p></div>
      <div class="gos"><button class="phbtn icbtn" data-coggoster="${esc(cg.id)}">🌍 Kürede göster</button></div>`;
    showModal({ ikon: turAd.split(' ')[0], title: cg.ad, sub: cg.yukseklik ? `${cg.yukseklik} · ${cg.konum}` : cg.konum, tabs: [
      { ad: '🗺️ Genel ve Tarih', html: genel, onShow: b => kapakYukle(b.querySelector('.kapak')) },
      ...(cg.w ? [photoTab(cg.w, 8)] : [])
    ] });
  }
  function cografyaKurede(id) {
    const cg = (window.ATLAS_COGRAFYA || []).find(x => x.id === id); if (!cg) return;
    closeModal(); if (view !== 'dunya') setView('dunya');
    DN.setLayer('cografya', true); renderOlayPanel();
    DN.goTo(cg.ll[0], cg.ll[1], 3.8); DN.pin(cg.ll[0], cg.ll[1], cg.ad);
  }
  function openDonum(d) {
    if (!d) return;
    kesifKaydet('donum', d.id);
    const inRange = d.y <= P.from && d.y >= P.to;
    const genel = `<div class="kapak" data-kapak="${esc(d.w)}"></div>
      <span class="pill">⚡ Dünyanın Seyrini Değiştiren Büyük Olay</span>
      ${rowsHTML([['Tarih', d.yilYazi], ['Yer', d.yer]])}
      <h4>📜 Ne Oldu?</h4><p>${esc(d.ozet)}</p>
      <h4>🌍 Dünyayı Nasıl Değiştirdi?</h4><p>${esc(d.etki)}</p>
      <div class="did"><b>💡 Biliyor muydun?</b><p>${esc(d.ilginc)}</p></div>
      <div class="gos">
        ${inRange ? `<button class="phbtn icbtn" data-go="${d.y}">⏩ O yıla git (${YIL.fmt(d.y)})</button>` : ''}
        <button class="phbtn" data-donumkure="${esc(d.id)}">🌍 Kürede göster</button>
      </div>`;
    showModal({ ikon: '⚡', title: d.ad, sub: `${d.yilYazi} · ${d.yer}`, tabs: [
      { ad: '⚡ Dönüm Noktası', html: genel, onShow: b => kapakYukle(b.querySelector('.kapak')) },
      ...(d.w ? [photoTab(d.w, 8, true)] : [])
    ] });
  }
  function openHatYapi(hy) {
    if (!hy) return;
    const ik = hy.tip === 'sur' ? '🧱' : hy.tip === 'kanal' ? '🚢' : '🛣️';
    const genel = `<div class="kapak" data-kapak="${esc(hy.w)}"></div>
      <span class="pill">${ik} Gerçek Hattı Boyunca Dev Yapı</span>
      ${rowsHTML([['Uzandığı Hat', hy.yer], ['Uzunluk', hy.uzunluk], ['Başlangıç', YIL.fmt(hy.from)]])}
      <h4>📜 Tarihçesi ve Önemi</h4><p>${esc(hy.ozet)}</p>
      <div class="did"><b>💡 Biliyor muydun?</b><p>${esc(hy.ilginc)}</p></div>`;
    showModal({ ikon: ik, title: hy.ad, sub: `${hy.yer}`, tabs: [
      { ad: 'Genel', html: genel, onShow: b => kapakYukle(b.querySelector('.kapak')) },
      ...(hy.w ? [photoTab(hy.w, 8, true)] : [])
    ] });
  }
  function openMagara(m) {
    if (!m) return;
    kesifKaydet('magara', m.id);
    const genel = `<div class="kapak" data-kapak="${esc(m.w)}"></div>
      <span class="pill">🪨 Tarihöncesi Yaşam ve Kazı Alanı</span>
      ${rowsHTML([['Konum', m.yer], ['Dönem', m.donem], ['Tahmini Nüfus / Topluluk', m.nufus]])}
      <h4>🦴 Arkeoloji Kazılarında Neler Bulundu?</h4>
      <ul class="hap">${(m.buluntular || []).map(x => `<li>${esc(x)}</li>`).join('')}</ul>
      <h4>🔥 Yaşam ve Tarihî Önemi</h4><p>${esc(m.ozet)}</p>
      <div class="did"><b>💡 Biliyor muydun?</b><p>${esc(m.ilginc)}</p></div>
      <div class="gos"><button class="phbtn" data-magarakure="${m.id}">🌍 Kürede göster</button></div>`;
    showModal({ ikon: '🪨', title: m.ad, sub: `${m.yer} · ${m.donem}`, tabs: [
      { ad: '🪨 Kazı & Yaşam', html: genel, onShow: b => kapakYukle(b.querySelector('.kapak')) },
      ...(m.w ? [photoTab(m.w, 8, true)] : [])
    ] });
  }
  function openSurpriz(sp) {
    if (!sp) return;
    const ilk = kesifKaydet('surpriz', sp.id);
    if (ilk) toast(`🎉 <b>Gizli Sürpriz Bulundu!</b> ${sp.ik} ${esc(sp.ad)} (+35 XP)`);
    const genel = `<div class="kapak" data-kapak="${esc(sp.w)}"></div>
      <span class="pill">🎁 Gizli Sürpriz (Easter Egg)${ilk ? ' · +35 XP!' : ' · Keşfedildi ✓'}</span>
      ${rowsHTML([['Konum', sp.yer]])}
      <h4>✨ Hikâyesi ve Gerçeği</h4><p>${esc(sp.ozet)}</p>
      <div class="did"><b>💡 Biliyor muydun?</b><p>${esc(sp.ilginc)}</p></div>
      <div class="gos"><button class="phbtn icbtn" data-kf="surpriz">🎁 Tüm Gizli Sürprizlere Bak</button></div>`;
    showModal({ ikon: sp.ik || '🎁', title: sp.ad, sub: `${sp.yer} · Gizli Sürpriz`, tabs: [
      { ad: '🎁 Sürpriz', html: genel, onShow: b => kapakYukle(b.querySelector('.kapak')) },
      ...(sp.w ? [photoTab(sp.w, 8, true)] : [])
    ] });
  }
  function openLiman(lm) {
    if (!lm) return;
    kesifKaydet('liman', lm.id);
    const genel = `<div class="kapak" data-kapak="${esc(lm.w)}"></div>
      <span class="pill">⚓ ${esc(lm.rol)}</span>
      ${rowsHTML([['Ülke', lm.ulke], ['Tarihçe', lm.kurulus]])}
      <h4>🌍 Önemi</h4><p>${esc(lm.ozet)}</p>
      <h4>📦 Ticaret ve Taşımacılık</h4><p>${esc(lm.ticaret)}</p>
      <div class="did"><b>💡 Biliyor muydun?</b><p>${esc(lm.ilginc)}</p></div>
      <div class="gos"><button class="phbtn icbtn" data-atlaskure="liman|${lm.ll[0]}|${lm.ll[1]}|${esc('⚓ ' + lm.ad)}">🌍 Kürede göster</button></div>`;
    showModal({ ikon: '⚓', title: lm.ad, sub: `${lm.ulke} · ${lm.rol}`, tabs: [
      { ad: '⚓ Liman', html: genel, onShow: b => kapakYukle(b.querySelector('.kapak')) },
      ...(lm.w ? [photoTab(lm.w, 8, true)] : [])
    ] });
  }
  function openNehir(nr) {
    if (!nr) return;
    kesifKaydet('nehir', nr.id);
    const genel = `<div class="kapak" data-kapak="${esc(nr.w)}"></div>
      <span class="pill">🏞️ ${nr.boy === 3 ? 'Dev Dünya Nehri' : nr.boy === 2 ? 'Büyük Bölgesel Nehir' : 'Önemli Tarihî & Doğal Nehir'}</span>
      ${rowsHTML([['Uzunluk', nr.uzunluk], ['Havza', nr.havza]])}
      <h4>🌿 Doğa ve Canlı Yaşamı</h4><p>${esc(nr.doga)}</p>
      <h4>📜 Tarihteki Yeri</h4><p>${esc(nr.tarih)}</p>
      <div class="gos"><button class="phbtn icbtn" data-atlaskure="nehir|${nr.ll[0]}|${nr.ll[1]}|${esc('🏞️ ' + nr.ad)}">🌍 Kürede göster</button></div>`;
    showModal({ ikon: '🏞️', title: nr.ad, sub: `${nr.uzunluk} · ${nr.havza}`, tabs: [
      { ad: '🏞️ Nehir', html: genel, onShow: b => kapakYukle(b.querySelector('.kapak')) },
      ...(nr.w ? [photoTab(nr.w, 8, true)] : [])
    ] });
  }
  function openHayvanGoc(hg) {
    if (!hg) return;
    kesifKaydet('hayvangoc', hg.id);
    const mid = hg.pts[Math.floor(hg.pts.length / 2)];
    const genel = `<div class="kapak" data-kapak="${esc(hg.w)}"></div>
      <span class="pill">${hg.ik} Yıllık Hayvan Göç Döngüsü</span>
      ${rowsHTML([['Yıllık Mesafe', hg.mesafe]])}
      <h4>🔄 Mevsimsel Göç Döngüsü</h4><p>${esc(hg.dongu)}</p>
      <h4>🌍 Neden Göç Ederler?</h4><p>${esc(hg.neden)}</p>
      <h4>🧭 Yönlerini Nasıl Bulurlar?</h4><p>${esc(hg.pusula)}</p>
      <div class="did"><b>💡 Biliyor muydun?</b><p>${esc(hg.ilginc)}</p></div>
      <div class="gos"><button class="phbtn icbtn" data-atlaskure="hayvangoc|${mid[0]}|${mid[1]}|${esc(hg.ik + ' ' + hg.ad)}">🌍 Rotayı kürede göster</button></div>`;
    showModal({ ikon: hg.ik || '🐋', title: hg.ad, sub: hg.mesafe, tabs: [
      { ad: '🔄 Göç Döngüsü', html: genel, onShow: b => kapakYukle(b.querySelector('.kapak')) },
      ...(hg.w ? [photoTab(hg.w, 8, true)] : [])
    ] });
  }
  function openDogaBolge(b) {
    if (!b) return;
    kesifKaydet('dogabolge', b.id);
    const genel = `<div class="kapak" data-kapak="${esc(b.w)}"></div>
      <span class="pill">${b.ik || '🌍'} ${esc(b.tur)}</span>
      ${rowsHTML([['Canlılık Düzeyi', b.canlilik]])}
      <h4>🪨 Jeolojik Oluşumu ve Yaşı</h4><p>${esc(b.jeoloji)}</p>
      <h4>🐾 Canlılar ve Yaşam</h4><p>${esc(b.ekosistem)}</p>
      <h4>🌦️ İklim ve Doğa Koşulları</h4><p>${esc(b.iklim)}</p>
      <div class="did"><b>💡 Biliyor muydun?</b><p>${esc(b.ilginc)}</p></div>`;
    showModal({ ikon: b.ik || '🌍', title: b.ad, sub: `${b.tur} · Doğa & Jeoloji Atlası`, tabs: [
      { ad: '🪨 Jeoloji & Yaşam', html: genel, onShow: el => kapakYukle(el.querySelector('.kapak')) },
      ...(b.w ? [photoTab(b.w, 8, true)] : [])
    ] });
  }
  function openBitki(bt) {
    if (!bt) return;
    kesifKaydet('bitki', bt.id);
    const genel = `<div class="kapak" data-kapak="${esc(bt.w)}"></div>
      <span class="pill">${bt.ik} Yöreye Özgü Bitki / Ağaç</span>
      ${rowsHTML([['Yöre / Anavatan', bt.bolge], ['Meyvesi / Ürünü', bt.meyve]])}
      <h4>🛠️ Ne İçin Kullanılır?</h4><p>${esc(bt.kullanim)}</p>
      <h4>🌿 Özellikleri ve Yetişme Ortamı</h4><p>${esc(bt.ozellik)}</p>
      <div class="did"><b>💡 Biliyor muydun?</b><p>${esc(bt.ilginc)}</p></div>
      <div class="gos"><button class="phbtn icbtn" data-atlaskure="bitki|${bt.ll[0]}|${bt.ll[1]}|${esc(bt.ik + ' ' + bt.ad)}">🌍 Kürede göster</button></div>`;
    showModal({ ikon: bt.ik || '🌿', title: bt.ad, sub: bt.bolge, tabs: [
      { ad: '🌿 Bitki', html: genel, onShow: b => kapakYukle(b.querySelector('.kapak')) },
      ...(bt.w ? [photoTab(bt.w, 8, true)] : [])
    ] });
  }
  function openYayilis(yy) {
    if (!yy) return;
    kesifKaydet('yayilis', yy.id);
    const turAd = yy.kat === 'icat' ? '💡 İcat & Kelime Yolculuğu' : '🍽️ Yemek & İçecek Yolculuğu';
    const genel = `<div class="kapak" data-kapak="${esc(yy.w)}"></div>
      <span class="pill">${yy.ik || '🧭'} ${turAd}</span>
      ${rowsHTML([['📍 İlk Çıkış / Anavatan', yy.koken]])}
      <h4>🗣️ Neden İsmi Böyle Oldu?</h4><p>${esc(yy.isim)}</p>
      <h4>🌍 Dünyaya Nasıl Yayıldı?</h4><p>${esc(yy.yolculuk)}</p>
      <div class="did"><b>💡 Biliyor muydun?</b><p>${esc(yy.ilginc)}</p></div>
      <div class="gos"><button class="phbtn icbtn" data-yy-kure="${esc(yy.id)}">🌍 Yolculuğunu Kürede İzle</button><button class="phbtn" data-yy-galeri="1">← Tüm Yolculuklar</button></div>`;
    showModal({ ikon: yy.ik || '🍵', title: yy.ad, sub: yy.koken, tabs: [
      { ad: '🧭 Hikâyesi', html: genel, onShow: el => kapakYukle(el.querySelector('.kapak')) },
      ...(yy.w ? [photoTab(yy.w, 8, true)] : [])
    ] });
  }
  function openYayilisGaleri() {
    const L = window.ATLAS_YAYILIS || [];
    const kartlar = arr => `<div class="yd-grid">${arr.map(yy => `<button type="button" class="yd-kart" data-yy-ac="${esc(yy.id)}"><span class="yd-ik">${yy.ik || '🧭'}</span><b>${esc(yy.ad)}</b><small>${esc(yy.koken)}</small></button>`).join('')}</div>`;
    const yemek = L.filter(x => x.kat !== 'icat');
    const icat = L.filter(x => x.kat === 'icat');
    showModal({
      ikon: '🍵', title: 'Yemek, Kelime ve İcatların Dünya Yolculuğu',
      sub: 'Çay neden "Çay/Tea" oldu? Günlük hayatımızdaki her şey nereden geldi?',
      tabs: [
        { ad: '🍽️ Yemek & İçecek', html: `<p class="mnot">Birine tıkla: adının nereden geldiğini oku ve dünyaya yayılış rotasını kürede canlı izle.</p>${kartlar(yemek)}` },
        { ad: '💡 İcat & Kelime', html: `<p class="mnot">Kâğıt, sıfır, pusula, barut, matbaa, ipek ve sabunun insanlığı değiştiren yolculuğu:</p>${kartlar(icat)}` }
      ]
    });
  }
  function openVolkan(v) {
    if (!v) return;
    kesifKaydet('volkan', v.id);
    const genel = `<div class="kapak" data-kapak="${esc(v.w)}"></div>
      <span class="pill">🌋 ${esc(v.durum)} · ${esc(v.yukseklik)}</span>
      ${rowsHTML([['Ülke / Bölge', v.ulke], ['En Son Patlama', v.sonPatlama], ['Patlama Sıklığı', v.siklik], ['Tarihî Büyük Patlama', v.patlama]])}
      <h4>🔥 Jeolojik Önemi</h4><p>${esc(v.ozet)}</p>
      <div class="did"><b>💡 Biliyor muydun?</b><p>${esc(v.ilginc)}</p></div>
      <div class="gos"><button class="phbtn icbtn" data-atlaskure="volkan|${v.ll[0]}|${v.ll[1]}|${esc('🌋 ' + v.ad)}">🌍 Kürede göster</button></div>`;
    showModal({ ikon: '🌋', title: v.ad, sub: `${v.ulke} · ${v.yukseklik}`, tabs: [
      { ad: '🌋 Yanardağ', html: genel, onShow: b => kapakYukle(b.querySelector('.kapak')) },
      ...(v.w ? [photoTab(v.w, 8, true)] : [])
    ] });
  }
  function openFay(f) {
    if (!f) return;
    showModal({ ikon: '🔥', title: f.ad, sub: 'Tektonik Plaka ve Deprem Kuşağı', tabs: [
      { ad: '🔥 Fay Kuşağı', html: `<span class="pill">🌋 Tektonik Kuşak</span><p style="margin-top:8px">${esc(f.ozet)}</p>` }
    ] });
  }
  const AY_AD = ['', 'Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'];
  function openTarihteBugun(ozelOlay) {
    const res = ozelOlay ? { tam: true, ay: ozelOlay.ay, gun: ozelOlay.gun, olaylar: [ozelOlay] } : (window.tarihteBugunBul ? window.tarihteBugunBul() : null);
    if (!res || !res.olaylar.length) return;
    const baslikTarih = `${res.gun} ${AY_AD[res.ay] || ''}`;
    const kartlar = res.olaylar.map(o => `<div class="tb-kart">
        <div class="tb-ust"><span class="pill">📅 ${o.gun} ${AY_AD[o.ay]} · ${YIL.fmt(o.y)}</span><small>📍 ${esc(o.yer)}</small></div>
        <h4>${esc(o.ad)}</h4>
        <p>${esc(o.ozet)}</p>
        <button class="phbtn icbtn" data-tbgun="${o.y}|${o.ll[0]}|${o.ll[1]}|${esc(o.ad)}">⏩ O güne ve yere git</button>
      </div>`).join('');
    const html = `${res.tam ? '' : `<p class="note">Bugün (${baslikTarih}) için en yakın tarihî dönüm noktaları:</p>`}${kartlar}
      <div class="gos"><button class="phbtn" data-tbrastgele="1">🎲 Başka bir gün gör</button></div>`;
    showModal({ ikon: '📅', title: `Tarihte Bugün · ${baslikTarih}`, sub: 'Takvimde bugüne damga vuran olaylar', tabs: [{ ad: '📅 Bugün', html }] });
  }
  function kpSekmeSec(sek) {
    const el = $('#katman'); if (!el) return;
    el.querySelectorAll('[data-kpsek]').forEach(b => b.classList.toggle('on', b.dataset.kpsek === sek));
    el.querySelectorAll('[data-kpgrup]').forEach(g => { g.hidden = g.dataset.kpgrup !== sek; });
  }
  function atlasModUygula(mod) {
    const doga = mod === 'doga';
    DN.setLayer('yapi', !doga);
    DN.setLayer('sehir', !doga);
    DN.setLayer('sinir', !doga);
    DN.setLayer('ticaret', !doga);
    DN.setLayer('goc', !doga);
    DN.setLayer('magara', !doga);
    if (doga) {
      for (const k of ['savas', 'deniz', 'antlasma', 'afet', 'olay', 'kaynak', 'yolculuk', 'donum', 'liman', 'yayilis', 'gece']) DN.setLayer(k, false);
      if (DN.setYayilis) DN.setYayilis(null);
    }
    const gb = $('#gecebtn'); if (gb) gb.hidden = doga;
    DN.setLayer('akinti', doga);
    DN.setLayer('hayvan', doga);
    DN.setLayer('bitki', doga);
    DN.setLayer('cografya', doga);
    DN.setLayer('nehir', doga);
    document.querySelectorAll('[data-atlas]').forEach(b => b.classList.toggle('on', b.dataset.atlas === mod));
    kpSekmeSec(doga ? 'doga' : 'tarih');
    renderOlayPanel();
    toast(doga ? '🌿 <b>Doğa Atlası</b> açıldı: yapılar gizlendi; akıntılar, hayvanlar, bitkiler, dağlar ve nehirler görünüyor.' : '🏛️ <b>Tarih Atlası</b> açıldı: devlet sınırları, yapılar ve ticaret yolları görünüyor.');
  }
  // ---------- 🧬 insanlığın yolculuğu (data/goc.js) ----------
  function openGoc(bolum) {
    const G = window.GOC; if (!G) return;
    const baslangic = `<p>Bugün yaşayan bütün insanlar tek bir türe aittir: <b>Homo sapiens</b> («akıllı insan»). Fosiller ve DNA çalışmaları, türümüzün <b>Afrika</b>'da ortaya çıktığını gösteriyor.</p>
      <ul class="hap"><li><b>~7-6 milyon yıl önce:</b> İnsanlara giden soy, şempanzelerle ortak atasından Afrika'da ayrıldı.</li>
      <li><b>~3,2 milyon yıl önce:</b> «Lucy» adı verilen Australopithecus iskeleti (Etiyopya): iki ayak üstünde yürüyordu.</li>
      <li><b>~1,8 milyon yıl önce:</b> Homo erectus Afrika'dan çıkan ilk insan türü oldu; Gürcistan'daki Dmanisi'de bu yaşta kafatasları bulundu.</li>
      <li><b>~300.000 yıl önce:</b> Bilinen en eski Homo sapiens fosilleri (Cebel İrhud, Fas).</li>
      <li><b>~70-60 bin yıl önce:</b> Bugün Afrika dışında yaşayan insanların atalarının büyük göçü başladı.</li>
      <li><b>~12.000 yıl önce:</b> Buzul çağı bitti; insanlar tarıma başladı.</li></ul>
      <div class="gos"><button class="phbtn" data-gocgit="cikis">🌍 Kürede göster</button></div>
      <p class="note">Tarihler fosil, arkeoloji ve DNA çalışmalarına dayanır; yaklaşıktır ve yeni bulgularla değişebilir. Küredeki yollar, haritada MÖ 3000'den önceki bir yıl seçilince görünür.</p>`;
    const yollar = G.yollar.map(r => `<div class="goc-yol"><h4>${esc(r.ad)} <small>· ${esc(r.etiket)}</small></h4><p>${esc(r.not)}</p><button class="phbtn" data-gocgit="${r.id}">🌍 Kürede göster</button></div>`).join('');
    const tarim = `<p>Buzul çağı yaklaşık 12 bin yıl önce bitince iklim ısındı. İnsanlar birbirinden habersiz, dünyanın en az 7-8 farklı yerinde bitkileri ve hayvanları evcilleştirdi. Avcı-toplayıcılıktan köy hayatına geçiş böyle başladı.</p>
      ${G.tarim.map(m => `<div class="goc-yol"><h4>🌾 ${esc(m.ad)} <small>· MÖ ~${m.y.toLocaleString('tr-TR')}</small></h4><p><b>${esc(m.urun)}.</b> ${esc(m.not)}</p></div>`).join('')}
      <div class="gos"><button class="phbtn" data-gocgit="tarim">🌍 Kürede göster</button></div>`;
    const kuzen = `<p>Homo sapiens Afrika'dan çıktığında dünya boş değildi: Avrupa ve Batı Asya'da <b>Neandertaller</b>, Asya'da <b>Denisovalılar</b> yaşıyordu.</p>
      <ul class="hap"><li>Afrika dışındaki insanların DNA'sının yaklaşık <b>%1-2'si</b> Neandertallerden gelir: iki tür karşılaştı ve çocuk sahibi oldu.</li>
      <li>Yeni Gine ve Avustralya yerlilerinin DNA'sında Denisovalı izleri de bulunur.</li>
      <li>Neandertaller yaklaşık <b>40 bin yıl önce</b> yok oldu; nedenleri (iklim, rekabet, küçük nüfus) hâlâ tartışılıyor.</li>
      <li>Endonezya'nın Flores adasında «Hobbit» denen küçük boylu bir insan türü (Homo floresiensis) ~50 bin yıl öncesine kadar yaşadı.</li></ul>`;
    const ac = bolum === 'tarim' ? 2 : bolum ? 1 : 0;
    showModal({ ikon: '🧬', title: 'İnsanlığın yolculuğu', sub: 'Afrika\'dan bütün dünyaya', open: ac, tabs: [
      { ad: '🧬 Başlangıç', html: baslangic }, { ad: '🗺️ Yollar', html: yollar, onShow: b => { if (bolum && bolum !== 'tarim') { const el = b.querySelector(`[data-gocgit="${bolum}"]`); if (el) el.closest('.goc-yol').classList.add('on'); } } },
      { ad: '🌾 Tarımın doğuşu', html: tarim }, { ad: '👥 Kuzenlerimiz', html: kuzen }, photoTab('Early human migrations', 8, true)] });
  }
  function gocGit(id) {
    const G = window.GOC; if (!G) return;
    closeModal(); playingBeforeModal = false; playing = false; updPlay();
    DN.setLayer('goc', true); if (view !== 'dunya') setView('dunya');
    if (id === 'tarim') { setYear(Math.min(5000, P.from), true); DN.goTo(25, 40, 1.15); return; }
    const r = G.yollar.find(x => x.id === id); if (!r) return;
    if (r.son != null) setYear(r.id === 'lapita' ? 1000 : -1300, true); else if (Y < 3400) setYear(P.from, true);
    const m = r.pts[Math.floor(r.pts.length / 2)]; DN.goTo(m[0], ((m[1] + 540) % 360) - 180, r.id === 'amerika' ? 1.1 : 1.6);
  }
  function openYolculuk(j) {
    showModal({ ikon: '🧭', title: j.ad, sub: `${YIL.fmt(j.y)} · ${j.sure}`, tabs: [{ ad: 'Hikâyesi', html: `${rowsHTML([['Ne zaman', YIL.fmt(j.y)], ['Kim', j.kim], ['Nasıl', j.nasil], ['Ne kadar sürdü', `<b>${j.sure}</b>`], ['Mesafe', `yaklaşık ${fmt(j.km)} km`]])}<p>${j.not}</p><div class="gos"><button class="phbtn" data-yolcugoster="${j.id}">🌍 Haritada göster (${YIL.fmt(j.y)})</button></div>` }] });
  }

  function buildStatus(y) {
    const rows = [];
    for (const m of P.monuments) {
      if (m.minor || m.eski) continue;
      const p = S.progress(m, y); if (p < 0) continue;
      const active = (m.stop && y > m.stop) || (!m.stop && p < 1);
      if (active) {
        let z = m.h * (1 - Math.cbrt(1 - Math.min(1, p / 0.88)));
        if (m.type === 'mastaba') z = m.h * p;
        let extra = '';
        if (m.blocks) extra += ` · ~${fmt(m.blocks * p)} blok`;
        if (m.isci) extra += `<br><small>${m.isci}</small>`;
        const pct = Math.round(p * 100);
        const isPyr = ['true', 'bent', 'step', 'mastaba'].includes(m.type);
        const phase = p > 0.88 && (m.type === 'true' || m.type === 'bent') ? 'dış kaplama düzeltiliyor' : (m.type === 'sphinx' || m.type === 'rocktemple' ? 'kayadan oyuluyor' : (isPyr ? `yükseklik ~${Math.round(z)} m` : 'inşaat sürüyor'));
        rows.unshift(`<li class="act" data-info="${m.id}"><b>${m.ad}</b> <span class="yer">${m.yer}</span><div class="prog"><i style="width:${pct}%"></i></div><small>%${pct} · ${phase}${extra}</small></li>`);
      } else if (m.stop && y <= m.stop) {
        if (m.stop - y < 12) rows.push(`<li class="half" data-info="${m.id}"><b>${m.ad}</b> <span class="yer">${m.yer}</span><small>Yarım kaldı (${YIL.fmt(m.stop)})</small></li>`);
      } else if (m.end - y < 25) {
        rows.push(`<li class="done" data-info="${m.id}"><b>${m.ad}</b> <span class="yer">${m.yer}</span><small>Tamamlandı (${YIL.fmt(m.end)})${m.h && m.type !== 'city' ? ' · ' + String(m.h).replace('.', ',') + ' m' : ''}</small></li>`);
      }
    }
    return rows.length ? `<ul class="build">${rows.join('')}</ul>` : '<p>Şu an büyük bir anıt inşaatı yok.</p>';
  }

  function buildPanel(y) {
    if (DUNYA) return buildPanelDunya(y);
    const r = pick(P.rulers, y), e = pick(P.eras, y), d = pick(P.dynasties, y);
    const ry = Math.max(1, r.from - y + 1);
    const pop = popAt(y);
    const act = S.activity(y);
    const evs = P.events.filter(ev => ev.k === 'm' && ev.y <= r.from && ev.y > r.to).sort((a, b) => b.y - a.y);
    const near = P.events.filter(ev => Math.abs(ev.y - y) <= (P.composite ? 4 : 2));
    const world = P.world.filter(w => y <= w.from && y > w.to);
    const Q = SP;
    let h = '';
    h += `<div class="head"><div class="dyn" style="--c:${d.renk}">${d.ad} · ${Q.kisa}</div>
      <div class="ruler"><span class="crown">👑</span><div><b>${r.ad}</b><small>${YIL.aralik(r.from, r.to)} · saltanatının ${ry}. yılı</small></div></div>
      <p class="kim">${r.kim}</p>
      <div class="headbtns"><button class="aboutbtn">${BG.ikon} ${BG.hakkinda} <small>(${BG.kultur ? 'din, tanrılar, bilim…' : 'halklar, din, yaşam…'})</small></button><button class="symbtn">⭐ ${BG.simgeAd}</button><button class="symbtn lifebtn">🎭 Bu dönemde yaşasaydım…</button></div></div>`;
    for (const o of olumYakin(y)) h += `<div class="now death">⚱️ <b>${YIL.fmt(o.y)}:</b> ${o.kim} öldü. <button class="phbtn" data-mumya="${o.id}">Mumyasını ve lahdini gör</button></div>`;
    if (near.length) h += `<div class="now">${near.map(ev => `<div>📌 <b>${YIL.fmt(ev.y)}:</b> ${ev.t}</div>`).join('')}</div>`;
    h += card('📣', 'Ülkenin gündemi', `<p>${e.gundem}</p>`, 'big');
    if (COG[BG.id]) h += card('🗺️', 'Bu topraklar', topraklarHTML(BG.id, y));
    h += card('🐪', 'Ticaret yolları ve yolculuklar', yollarHTML(y));
    h += card('🏗️', 'Şantiyeler', buildStatus(y));
    h += card('⚔️', 'Savaş ve ordu', `<p>${e.savas}</p>`);
    h += card('🌾', 'Ekonomi', `<p>${e.ekonomi}</p>`);
    h += card('👥', 'Nüfus ve başkent', `<p><b>Tahmini nüfus: ~${pop.toFixed(2).replace('.', ',')} milyon</b><br><small>${Q.nufusNot}</small></p><p>Başkent: ${e.baskent || Q.baskent}</p>`);
    h += card('📊', 'Genel durum <small>(kabaca değerlendirme)</small>',
      bar('Ekonomi', e.puan.eko) + bar('Askeri güç', e.puan.ordu) + bar('İstikrar', e.puan.istikrar) + bar('İnşaat yoğunluğu', Math.max(0.2, act * 5)));
    h += card('☀️', 'Din ve inanç', `<p>${e.din}</p>`);
    h += card('🏠', 'Gündelik hayat', `<p>${e.yasam}</p>`);
    h += card('🌍', 'Aynı yıllarda dünyada', `<ul class="world">${world.map(w => `<li><b>${w.yer}:</b> ${w.t}</li>`).join('')}</ul>
      <p><b>Ekonomi:</b> ${Q.dunyaOzet.eko}</p><p><b>Askeri durum:</b> ${Q.dunyaOzet.askeri}</p>`);
    h += card('💡', 'Biliyor muydun?', `<p>${e.bilgi}</p>`, 'tip');
    if (evs.length) h += card('🗓️', `${r.kisa === '?' ? 'Bu dönemde' : r.ad + ' döneminde'} olanlar`, `<ul class="evs">${evs.map(ev => `<li data-y="${ev.y}" class="${Math.abs(ev.y - y) <= 2 ? 'on' : ''}"><b>${YIL.fmt(ev.y)}</b> ${ev.t}</li>`).join('')}</ul>`);
    h += card('⏩', 'Hızlı git', `<div class="chips">${P.hizli.map(q => `<button data-y="${q.y}">${q.ad}</button>`).join('')}</div>`);
    h += `<p class="src">${Q.not} Kaynaklar: KAYNAKLAR.md</p>`;
    $('#pnic').innerHTML = h;
    renderOlayPanel();
  }
  const tam = (arr, y) => (arr || []).find(a => y <= a.from && y > a.to);
  function bolgeAn(b, y) {
    const parts = PARTS.filter(p => p.bolge === b); if (!parts.length) return null;
    const ad = b === 'misir' ? (MIS.araDonem || {}) : {};
    const p = parts.find(q => y <= q.from && y >= q.to);
    const r = tam([...parts.flatMap(q => q.rulers), ...(ad.rulers || [])], y), e = tam([...parts.flatMap(q => q.eras), ...(ad.eras || [])], y);
    return { parts, p, r, e, from: Math.max(...parts.map(q => q.from)), to: Math.min(...parts.map(q => q.to)) };
  }
  function buildPanelDunya(y) {
    const tek = new Set(), near = P.events.filter(ev => Math.abs(ev.y - y) <= 4).sort((a, b) => b.y - a.y).filter(ev => { const k = ev.y + '|' + ev.t.replace(/^Dünya:s*/, '').split(/[s:(,]/)[0].toLocaleLowerCase('tr'); return !tek.has(k) && tek.add(k); });
    let h = `<div class="head"><div class="dyn" style="--c:#2f6fa8">🌍 Tüm Dünya · ${YIL.fmt(y)}</div>
      <p class="kim">Bütün bölgeler aynı zaman çizelgesinde. Bir bölgenin canlı sahnesine girmek için kartındaki düğmeye bas, ya da yukarıdan bölge seç.</p>
      <div class="headbtns"><button class="symbtn">⭐ ${BG.simgeAd}</button></div></div>`;
    if (near.length) h += `<div class="now">${near.slice(0, 5).map(ev => `<div>📌 <b>${YIL.fmt(ev.y)}:</b> ${ev.t}</div>`).join('')}</div>`;
    const KT = window.KITALAR || [{ id: 'hepsi', ad: 'Bölgeler', ikon: '🌍', b: BSIRA }];
    for (const kt of KT) {
      const bl = kt.b.filter(b => BSIRA.includes(b) && bolgeAn(b, y)); if (!bl.length) continue;
      const disari = bl.filter(b => { const a = bolgeAn(b, y); return y > a.from || y < a.to; });
      h += `<h3 class="kitabas">${kt.ikon} ${kt.ad}</h3>`;
    for (const b of bl) {
      const Bb = BLR[b], a = bolgeAn(b, y); if (!a) continue;
      const btn = `<div class="gos"><button class="phbtn" data-gitbolge="${b}">🎬 Sahnesine git</button><button class="phbtn" data-kurebolge="${b}">🌍 Küreden yaklaş</button></div>`;
      if (y > a.from || y < a.to) continue;
      const ins = (a.p ? a.p.monuments : []).filter(m => !m.minor && !m.eski && S.progress(m, y) >= 0 && ((m.stop && y > m.stop) || (!m.stop && S.progress(m, y) < 1))).map(m => m.ad);
      const kim = a.r && a.r.kisa !== '?' ? `👑 <b>${a.r.ad}</b> <small>${YIL.aralik(a.r.from, a.r.to)}</small>` : '👑 <small>Bilinen bir hükümdar yok</small>';
      h += card(Bb.ikon, `${Bb.ad} <small>· ${a.p ? a.p.kisa : 'Ara dönem'}</small>`, `<p>${kim}</p>${a.e ? `<p>${a.e.gundem}</p>` : ''}${ins.length ? `<p>🏗️ <b>Süren inşaat:</b> ${ins.slice(0, 4).join(', ')}${ins.length > 4 ? '…' : ''}</p>` : ''}${gecimOf(b, y) ? `<p>🌾 <b>Geçim:</b> ${ilkCumle(gecimOf(b, y).t)}</p>` : ''}${btn.replace('</div>', `${COG[b] ? `<button class="phbtn" data-topraklar="${b}">🗺️ Bu topraklar</button>` : ''}</div>`)}`);
    }
      if (disari.length) h += `<p class="kitadisi"><small>Bu yıl için anlatımı olmayan: ${disari.map(b => { const a = bolgeAn(b, y); return `<button class="phbtn" data-y="${y > a.from ? a.from : a.to}" title="${YIL.aralik(a.from, a.to)}">${BLR[b].ikon} ${BLR[b].ad}</button>`; }).join(' ')}</small></p>`;
    }
    h += card('🐪', 'Ticaret yolları ve yolculuklar', yollarHTML(y));
    h += card('⏩', 'Hızlı git', `<div class="chips">${P.hizli.map(q => `<button data-y="${q.y}">${q.ad}</button>`).join('')}</div>`);
    h += '<p class="src">Kaynaklar: KAYNAKLAR.md</p>';
    $('#pnic').innerHTML = h;
    renderOlayPanel();
  }
  $('#panel').addEventListener('click', ev => {
    const gb = ev.target.closest('[data-gitbolge]'); if (gb) return gitBolge(gb.dataset.gitbolge, gb.dataset.yapi ? '&yapi=' + gb.dataset.yapi : '');
    const kb = ev.target.closest('[data-kurebolge]'); if (kb) { const Bb = BLR[kb.dataset.kurebolge]; panelAc(false); setView('dunya'); DN.goEgypt(Bb.merkez, Bb.merkezZ); return; }
    const yl = ev.target.closest('[data-yol]'); if (yl) return openYol(TICARET_YOLLARI.find(t => t.id === yl.dataset.yol));
    const yc = ev.target.closest('[data-yolculuk]'); if (yc) return openYolculuk(YOLCULUKLAR.find(j => j.id === yc.dataset.yolculuk));
    const tp = ev.target.closest('[data-topraklar]'); if (tp) { const b = tp.dataset.topraklar; return showModal({ ikon: BLR[b].ikon, title: `${BLR[b].ad}: bu topraklar`, sub: YIL.fmt(Math.round(Y)), tabs: [{ ad: 'Coğrafya', html: topraklarHTML(b, Math.round(Y)) }] }); }
    if (ev.target.closest('.aboutbtn')) return openCountry();
    if (ev.target.closest('.lifebtn')) return openYasam();
    const mu = ev.target.closest('[data-mumya]'); if (mu) return openMummy(mu.dataset.mumya);
    if (ev.target.closest('.symbtn')) return openSymbols();
    const inf = ev.target.closest('[data-info]'); if (inf) return openInfo(inf.dataset.info);
    const b = ev.target.closest('[data-y]'); if (!b) return;
    setYear(+b.dataset.y, true); playing = false; updPlay();
  });

  function yearCard(y) {
    $('#tl-ac-yil').textContent = YIL.fmt(y); // çizelge gizliyken görünen küçük düğme
    if (DUNYA) {
      $('#yc-year').textContent = YIL.fmt(y); $('#yc-ago').textContent = YIL.once(y);
      // küre hangi bölgeye bakıyorsa önce o bölgeler (en yakın 3)
      const v = window.Dunya && window.Dunya.view, uz = b => { const m = BLR[b].isaret || BLR[b].merkez; if (!v || !m) return 0; const dl = ((m[1] - v.lon + 540) % 360) - 180; return (m[0] - v.lat) ** 2 + (dl * Math.cos(v.lat * Math.PI / 180)) ** 2; };
      const L = BSIRA.map(b => { const a = bolgeAn(b, y); return a && a.p ? [uz(b), BLR[b].ikon + ' ' + a.p.kisa] : null; }).filter(Boolean).sort((a, b) => a[0] - b[0]);
      $('#yc-ruler').textContent = L.slice(0, 3).map(x => x[1]).join(' · ') + (L.length > 3 ? ` · +${L.length - 3} bölge` : '');
      // MÖ 3000 öncesinde haritada devlet azdır: insanlığın yolculuğuna bağlantı
      $('#yc-goc').hidden = !(y >= 3000 && window.GOC);
      $('#yc-site').textContent = '🌍 Tüm Dünya'; $('#yc-city').hidden = true; return;
    }
    const r = pick(P.rulers, y);
    $('#yc-goc').hidden = !(y >= 3000 && window.GOC && view === 'dunya');
    $('#yc-year').textContent = `${YIL.fmt(y)}`;
    $('#yc-ago').textContent = YIL.once(y);
    $('#yc-ruler').textContent = r.kisa === '?' ? 'Belirsiz dönem' : `${r.ad} · ${Math.max(1, r.from - y + 1)}. yıl`;
    const f = S.focus(y);
    if (follow) cityFocus = null;
    $('#yc-site').textContent = view === 'dunya' ? `🌍 ${SP.kisa}` : cityFocus ? `📍 ${cityFocus} · bu yıl` : `📍 ${f.yer}: ${f.ad}`;
    $('#yc-city').textContent = view === 'sahne' && cityFocus ? cityFocus : ''; $('#yc-city').hidden = !(view === 'sahne' && cityFocus);
  }

  // ---------- olay bildirimleri ----------
  let toastT = 0;
  function toast(t) {
    const el = $('#toast'); el.innerHTML = t; el.classList.add('show'); clearTimeout(toastT);
    toastT = setTimeout(() => el.classList.remove('show'), 4200);
  }

  // ---------- 🌍 Kıta Zaman Hafızası (her kıta kendi bıraktığın yılı hatırlar) ----------
  const KITA_MERKEZ = { afrika: [8, 22, 2.2], asya: [34, 96, 2.3], avrupa: [49, 14, 2.8], amerika: [14, -84, 1.9], okyanusya: [-22, 138, 2.4] };
  let kitaYil = (() => { try { return JSON.parse(localStorage.getItem('zy-kita-yil') || 'null') || {}; } catch (e) { return {}; } })();
  let tlKitaKutular = [], hoverKita = null;
  function aktifKita() {
    const v = DN && DN.view ? DN.view : { lat: 24, lon: 22 };
    let en = 'afrika', bd = 1e9;
    for (const [id, [la, lo]] of Object.entries(KITA_MERKEZ)) {
      let dl = Math.abs(v.lon - lo); if (dl > 180) dl = 360 - dl;
      const d = (v.lat - la) * (v.lat - la) + dl * dl;
      if (d < bd) { bd = d; en = id; }
    }
    return en;
  }
  function kitaYilKaydet(id, y) {
    if (!id) return;
    kitaYil[id] = Math.round(y);
    try { localStorage.setItem('zy-kita-yil', JSON.stringify(kitaYil)); } catch (e) { /* gizli mod */ }
    tlSonAn = '';
  }
  function kitaGec(kt) {
    if (!kt || !KITA_MERKEZ[kt.id]) return;
    const eskiId = aktifKita();
    const eskiY = Math.round(Y);
    if (eskiId !== kt.id) kitaYilKaydet(eskiId, eskiY);
    const hedefY = kitaYil[kt.id];
    const [la, lo, z] = KITA_MERKEZ[kt.id];
    if (view !== 'dunya') setView('dunya');
    DN.goTo(la, lo, z);
    if (hedefY != null && hedefY !== eskiY) {
      setYear(hedefY, false);
      const eskiAd = ((window.KITALAR || []).find(x => x.id === eskiId) || {}).ad || '';
      toast(`${kt.ikon} <b>${kt.ad}</b> · ${YIL.fmt(hedefY)} yılına geçildi${eskiAd && eskiId !== kt.id ? ` (${eskiAd} · ${YIL.fmt(eskiY)} hatırlandı)` : ''}`);
    } else {
      kitaYilKaydet(kt.id, eskiY);
      toast(`${kt.ikon} <b>${kt.ad}</b> · ${YIL.fmt(eskiY)} — bu kıtada yılı değiştirip başka kıtaya geçince burası hatırlanır.`);
    }
    tlSonAn = '';
  }

  // ---------- zaman çizelgesi ----------
  function drawTL() {
    // yakınlaştırılmışken seçili yıl görünen aralıktan çıkarsa çizelge onu ortaya alacak biçimde kayar (oynatırken de)
    if (tlA != null && (Y > vA() || Y < vB())) { const s = vA() - vB(); tlAralik(Y + s / 2, Y - s / 2); }
    const ak = DUNYA ? aktifKita() : '';
    const an = `${Math.round(Y * 2)}|${tlA}|${tlB}|${hoverEv ? hoverEv.y + hoverEv.t : ''}|${hoverKita ? hoverKita.id : ''}|${ak}|${kitaYil[ak] ?? ''}|${TW}|${TH}|${DPR}|${P.id}`;
    if (an === tlSonAn) return;
    tlSonAn = an;
    tg.setTransform(DPR, 0, 0, DPR, 0, 0); tg.clearRect(0, 0, TW, TH);
    tg.textBaseline = 'middle'; tg.textAlign = 'center';
    const x0 = yearX(P.from);
    tlKitaKutular = [];
    if (DUNYA) {
      // her kıta bir sıra; sol etikette hatırlanan yıl gösterilir, tıklayınca o kıtanın yılına geçilir
      const KT = window.KITALAR || [{ id: 'hepsi', ad: '', ikon: '', b: BSIRA }], RENK = { afrika: ['#9a6a2e', '#b8843e'], asya: ['#8e3b32', '#ad5446'], avrupa: ['#2f5a8a', '#4a76a8'], amerika: ['#2e7a4e', '#46966a'], okyanusya: ['#2a8a9a', '#46a8b8'], hepsi: ['#6a5a4a', '#8a7a6a'] };
      const rh = Math.min(13, Math.floor(40 / KT.length)), fs = Math.min(9.5, rh + 0.5);
      KT.forEach((kt, i) => {
        const y0 = 4 + i * rh, bl = kt.b.filter(b => BSIRA.includes(b)), lh = (rh - 1) / Math.max(1, bl.length), rk = RENK[kt.id] || RENK.hepsi;
        tg.fillStyle = 'rgba(255,255,255,0.05)'; tg.fillRect(0, y0, TW, rh - 1);
        bl.forEach((b, k) => PARTS.filter(p => p.bolge === b).forEach((p, j) => {
          const a = yearX(Math.min(p.from, P.from)), bb = yearX(Math.max(p.to, P.to)); if (bb <= a) return;
          tg.fillStyle = rk[(j + k) % 2]; tg.fillRect(a, y0 + k * lh, bb - a, Math.max(1, lh - 0.6));
        }));
        const ky = kitaYil[kt.id], isAk = kt.id === ak, isHov = hoverKita && hoverKita.id === kt.id;
        tg.font = `700 ${fs}px system-ui`;
        const t = `${kt.ikon} ${kt.ad}${ky != null ? ' · ' + YIL.fmt(ky) : ''}`, w = tg.measureText(t).width + 12;
        tg.fillStyle = isHov ? 'rgba(62,44,20,0.96)' : isAk ? 'rgba(42,30,14,0.92)' : 'rgba(25,18,12,0.82)';
        tg.fillRect(2, y0, w, rh - 1);
        if (isAk || isHov) { tg.fillStyle = '#ffd666'; tg.fillRect(2, y0, 2.5, rh - 1); }
        tg.fillStyle = isAk || isHov ? '#ffe89c' : '#f5e6c8'; tg.textAlign = 'left'; tg.fillText(t, 8, y0 + rh / 2); tg.textAlign = 'center';
        tlKitaKutular.push({ kt, x0: 2, x1: 2 + w, y0, y1: y0 + rh - 1 });
      });
    }
    else for (const d of P.dynasties) {
      const a = yearX(Math.min(d.from, P.from)), b = yearX(Math.max(d.to, P.to)); if (b <= a) continue;
      tg.fillStyle = d.renk; tg.globalAlpha = 0.85; tg.fillRect(a, 4, b - a, 14); tg.globalAlpha = 1;
      tg.fillStyle = '#fff'; tg.font = '700 10px system-ui'; if (tg.measureText(d.ad).width < b - a - 6) tg.fillText(d.ad, (a + b) / 2, 11.5);
    }
    if (!DUNYA) P.rulers.forEach((r, i) => {
      const a = yearX(Math.min(r.from, P.from)), b = yearX(Math.max(r.to, P.to)); if (b <= a) return;
      tg.fillStyle = i % 2 ? '#3b2e22' : '#4a3a2b'; tg.fillRect(a, 21, b - a, 22);
      tg.fillStyle = '#f5e6c8'; tg.font = '600 11px system-ui';
      const name = tg.measureText(r.kisa).width < b - a - 4 ? r.kisa : (b - a > 14 ? r.kisa[0] : '');
      tg.fillText(name, (a + b) / 2, 32.5);
    });
    for (const m of P.monuments) {
      if (m.minor || m.eski) continue;
      const a = yearX(Math.min(m.start, P.from)), b = yearX(Math.max(m.stop || m.end, P.to)); if (b <= a) continue;
      tg.fillStyle = m.id === 'khufu' ? '#f2c94c' : (m.stop ? '#9b8a70' : '#c9a45c'); tg.fillRect(a, 46, Math.max(2, b - a), 5);
    }
    for (const ev of P.events) {
      if (ev.y > P.from || ev.y < P.to) continue;
      const x = yearX(ev.y), w = ev.k === 'w';
      tg.fillStyle = hoverEv === ev ? '#fff' : (w ? '#6bb6e0' : '#f2c94c');
      tg.beginPath(); if (w) tg.arc(x, 60, 3.6, 0, 7); else { tg.moveTo(x, 55); tg.lineTo(x + 4.5, 63); tg.lineTo(x - 4.5, 63); tg.closePath(); } tg.fill();
    }
    tg.fillStyle = '#b9a88c'; tg.strokeStyle = '#7d6b52'; tg.font = '10px system-ui';
    const pxYr = (TW - 28) / (vA() - vB());
    const step = [1, 2, 5, 10, 20, 25, 50, 100, 200, 250, 500, 1000, 2000, 5000].find(v => v * pxYr >= 64) || 5000;
    const tick = [1, 2, 5, 10, 20, 25, 50, 100, 250, 500, 1000].find(v => v * pxYr >= 7) || 1000;
    for (let y = Math.ceil(vB() / tick) * tick; y <= vA(); y += tick) {
      if (y === 0) continue; // 0 yılı yok: MÖ 1'den MS 1'e geçilir
      const x = yearX(y), big = y % step === 0; tg.beginPath(); tg.moveTo(x, 68); tg.lineTo(x, big ? 76 : 72); tg.stroke();
      if (big) tg.fillText(`${YIL.fmt(y)}`, x, 84);
    }
    const cx = yearX(Y);
    tg.fillStyle = 'rgba(242,201,76,0.18)'; tg.fillRect(x0, 4, cx - x0, 2);
    tg.strokeStyle = '#ffd666'; tg.lineWidth = 2; tg.beginPath(); tg.moveTo(cx, 2); tg.lineTo(cx, 77); tg.stroke();
    tg.fillStyle = '#ffd666'; tg.beginPath(); tg.arc(cx, 2, 5, 0, 7); tg.fill();
    tg.beginPath(); tg.arc(cx, 72, 7, 0, 7); tg.fill(); tg.strokeStyle = '#3a2414'; tg.lineWidth = 2; tg.stroke();
  }
  let dragTL = false;
  const tlPos = ev => { const r = tcv.getBoundingClientRect(); return [ev.clientX - r.left, ev.clientY - r.top]; };
  const evAt = (x, y) => {
    if (y < 50 || y > 70) return null;
    let best = null, bd = 8;
    for (const ev of P.events) { const d = Math.abs(yearX(ev.y) - x); if (d < bd) { bd = d; best = ev; } }
    return best;
  };
  const ktAt = (x, y) => {
    for (const k of tlKitaKutular) if (x >= k.x0 && x <= k.x1 && y >= k.y0 && y <= k.y1) return k.kt;
    return null;
  };
  // iki parmakla sıkıştırma: çizelgeyi yakınlaştırır; parmakların ortasındaki yıl yerinde kalır
  const tlPar = new Map(); let tlSik = null;
  const tlSikBilgi = () => { const [a, b] = [...tlPar.values()]; return { d: Math.max(20, Math.abs(a - b)), m: (a + b) / 2 }; };
  tcv.addEventListener('pointerdown', ev => {
    const [x, y] = tlPos(ev); tlPar.set(ev.pointerId, x);
    if (tlPar.size === 2) { dragTL = false; const s = tlSikBilgi(); tlSik = { d0: s.d, span: vA() - vB(), m0: xYear(s.m) }; tcv.setPointerCapture(ev.pointerId); return; }
    const kt = DUNYA ? ktAt(x, y) : null;
    if (kt) { playing = false; updPlay(); kitaGec(kt); return; }
    const e = evAt(x, y);
    playing = false; updPlay();
    if (e) { setYear(e.y, true); toast(`<b>${YIL.fmt(e.y)}</b> ${e.t}`); return; }
    dragTL = true; tcv.setPointerCapture(ev.pointerId); setYear(Math.round(xYear(x)), true);
  });
  tcv.addEventListener('pointermove', ev => {
    const [x, y] = tlPos(ev);
    if (tlPar.has(ev.pointerId)) tlPar.set(ev.pointerId, x);
    if (tlSik && tlPar.size === 2) { const s = tlSikBilgi(), span = tlSik.span * tlSik.d0 / s.d, A = tlSik.m0 + (s.m - 14) / (TW - 28) * span; tlAralik(A, A - span); return; }
    if (dragTL) { setYear(Math.round(xYear(x)), true); return; }
    hoverKita = DUNYA ? ktAt(x, y) : null;
    hoverEv = hoverKita ? null : evAt(x, y);
    tcv.style.cursor = hoverKita || hoverEv ? 'pointer' : '';
    const tip = $('#tip');
    if (hoverKita) {
      const ky = kitaYil[hoverKita.id];
      tip.style.display = 'block';
      tip.innerHTML = `${hoverKita.ikon} <b>${hoverKita.ad}</b>${ky != null ? ` · son yıl: <b>${YIL.fmt(ky)}</b>` : ''} — tıkla: bu kıtaya ve yılına geç`;
      tip.style.left = clamp(x - 10, 4, TW - 260) + 'px';
    } else if (hoverEv) { tip.style.display = 'block'; tip.innerHTML = `<b>${YIL.fmt(hoverEv.y)}</b> ${hoverEv.t}`; tip.style.left = clamp(x - 120, 4, TW - 244) + 'px'; }
    else tip.style.display = 'none';
  });
  const tlBirak = ev => { tlPar.delete(ev.pointerId); if (tlPar.size < 2) tlSik = null; dragTL = false; };
  tcv.addEventListener('pointerup', tlBirak); tcv.addEventListener('pointercancel', tlBirak);
  // fare tekerleği: yakınlaştır/uzaklaştır (imlecin altındaki yıl sabit); Shift ya da yatay kaydırma: sağa-sola kaydır
  tcv.addEventListener('wheel', ev => {
    ev.preventDefault(); const [x] = tlPos(ev);
    if (ev.shiftKey || Math.abs(ev.deltaX) > Math.abs(ev.deltaY)) { if (tlA == null) return; const dy = -(ev.deltaX || ev.deltaY) / (TW - 28) * (vA() - vB()); tlAralik(vA() + dy, vB() + dy); }
    else tlZoom(Math.exp(clamp(ev.deltaY, -200, 200) * 0.0025), x);
  }, { passive: false });
  $('#tlzin').addEventListener('click', () => tlZoom(0.4));
  $('#tlzout').addEventListener('click', () => tlZoom(2.5));
  $('#tlztum').addEventListener('click', () => tlAralik(P.from, P.to));
  tcv.addEventListener('pointerleave', () => { hoverEv = null; $('#tip').style.display = 'none'; });

  // ---------- sahnede sürükleme ve tıklama ----------
  let dragS = null;
  const cvPos = (el, ev) => { const r = el.getBoundingClientRect(); return [ev.clientX - r.left, ev.clientY - r.top]; };
  cv.addEventListener('pointerdown', ev => { camHedef = null; ysListe(false); dragS = { x: ev.clientX, c: camX, moved: false }; cv.setPointerCapture(ev.pointerId); });
  cv.addEventListener('pointermove', ev => {
    if (!dragS) { const h = S.hitTest(...cvPos(cv, ev)); S.setHover(h ? h.id : null); cv.style.cursor = h ? 'pointer' : 'grab'; return; }
    const dx = ev.clientX - dragS.x;
    if (Math.abs(dx) > 6) { dragS.moved = true; follow = false; const [c0, c1] = camRange(); camX = clamp(dragS.c - dx / S.scale(H), c0, c1); }
  });
  cv.addEventListener('pointerup', ev => {
    if (dragS && !dragS.moved) { const h = S.hitTest(...cvPos(cv, ev)); if (h) openInfo(h.id, h.ad); }
    dragS = null;
  });
  cv.addEventListener('pointerleave', () => S.setHover(null));

  // ---------- sahnede yer şeridi: neredesin, solunda ve sağında ne var ----------
  // Sahne bir panorama: yerler bir çizgi boyunca dizili (wx). Hangi yönün sağa düştüğü bölgeden bölgeye değişir;
  // anıtların gerçek konumlarından (MIS.coords) hesaplanır: wx büyüdükçe enlem/boylam nereye gidiyor?
  const YON = ['DOĞU', 'KUZEYDOĞU', 'KUZEY', 'KUZEYBATI', 'BATI', 'GÜNEYBATI', 'GÜNEY', 'GÜNEYDOĞU'];
  const yonAd = a => YON[((Math.round(a / (Math.PI / 4)) % 8) + 8) % 8];
  const yonOnb = new WeakMap();
  function sahneYonu(sp) {
    if (yonOnb.has(sp)) return yonOnb.get(sp);
    const co = MIS.coords || {}, n = [];
    for (const m of sp.monuments || []) { const c = co[m.id]; if (c && typeof m.wx === 'number') n.push([m.wx, c[0], c[1]]); }
    let yon = null;
    if (n.length >= 3) {
      const o0 = n[0][2]; n.forEach(p => { p[2] = o0 + ((p[2] - o0 + 540) % 360) - 180; });
      const ort = i => n.reduce((t, p) => t + p[i], 0) / n.length, mw = ort(0), ml = ort(1), mo = ort(2), cs = Math.cos(ml * Math.PI / 180);
      let a = 0, b = 0, v = 0;
      for (const [w, la, lo] of n) { const d = w - mw; v += d * d; a += d * (la - ml); b += d * (lo - mo) * cs; }
      if (v > 0 && Math.hypot(a, b) > 0) { const t = Math.atan2(a, b); yon = { sag: yonAd(t), sol: yonAd(t + Math.PI) }; }
    }
    yonOnb.set(sp, yon); return yon;
  }
  const ys = $('#yerserit'), ysCubuk = ys.querySelector('.ys-cubuk'), ysPen = ys.querySelector('.ys-pen'), ysL = ys.querySelector('.ys-liste');
  let ysSP = null, ysYer = [], ysAralik = [0, 1], ysDurum = '';
  const ysAd = s => s.ad; // sahnedeki yazıyla aynı (büyük harf), aranan yer kolay tanınsın
  const YON_EK = { 'DOĞU': ['doğudan', 'doğuya'], 'KUZEYDOĞU': ['kuzeydoğudan', 'kuzeydoğuya'], 'KUZEY': ['kuzeyden', 'kuzeye'], 'KUZEYBATI': ['kuzeybatıdan', 'kuzeybatıya'], 'BATI': ['batıdan', 'batıya'], 'GÜNEYBATI': ['güneybatıdan', 'güneybatıya'], 'GÜNEY': ['güneyden', 'güneye'], 'GÜNEYDOĞU': ['güneydoğudan', 'güneydoğuya'] };
  function ysHazirla() {
    ysSP = SP; const gor = new Set();
    ysYer = [...(SP.sites || [])].sort((a, b) => a.wx - b.wx).filter(s => !gor.has(s.ad) && gor.add(s.ad));
    ysAralik = camRange(); const [c0, c1] = ysAralik;
    ysCubuk.querySelectorAll('.ys-n').forEach(e => e.remove());
    ysYer.forEach((s, i) => { const e = document.createElement('i'); e.className = 'ys-n'; e.dataset.i = i; e.style.left = ((s.wx - c0) / (c1 - c0) * 100) + '%'; ysCubuk.appendChild(e); });
    ysDurum = ''; ysListe(false);
  }
  function ysGit(wx) { follow = false; camHedef = wx; ysListe(false); }
  function ysSimdi() { let b = 0; ysYer.forEach((s, i) => { if (Math.abs(s.wx - camX) < Math.abs(ysYer[b].wx - camX)) b = i; }); return b; }
  function ysGuncelle() {
    if (ysSP !== SP) ysHazirla();
    if (!ysYer.length) { ys.hidden = true; return; }
    ys.hidden = false;
    const [c0, c1] = ysAralik, vw = W / S.scale(H), sp = c1 - c0;
    ysPen.style.left = clamp((camX - vw / 2 - c0) / sp * 100, 0, 100) + '%';
    ysPen.style.width = clamp(vw / sp * 100, 4, 100) + '%';
    const i = ysSimdi(), yon = sahneYonu(SP), d = i + '|' + (yon ? yon.sag : '');
    if (d === ysDurum) return; ysDurum = d;
    const sol = ysYer[i - 1], sag = ysYer[i + 1];
    ys.querySelector('.ys-ad b').textContent = ysAd(ysYer[i]);
    const yan = (el, s, ok, yn) => { el.disabled = !s; el.querySelector('small').textContent = ok === '◀' ? `◀ ${yn || 'SOL'}` : `${yn || 'SAĞ'} ▶`; el.querySelector('b').textContent = s ? ysAd(s) : 'sahnenin sonu'; };
    yan(ys.querySelector('.ys-sol'), sol, '◀', yon && yon.sol); yan(ys.querySelector('.ys-sag'), sag, '▶', yon && yon.sag);
    ysCubuk.querySelectorAll('.ys-n').forEach(e => e.classList.toggle('on', +e.dataset.i === i));
  }
  ys.querySelector('.ys-sol').addEventListener('click', () => { const s = ysYer[ysSimdi() - 1]; if (s) ysGit(s.wx); });
  ys.querySelector('.ys-sag').addEventListener('click', () => { const s = ysYer[ysSimdi() + 1]; if (s) ysGit(s.wx); });
  function ysListe(ac) {
    if (!ysL) return;
    if (ac == null) ac = ysL.hidden;
    ysL.hidden = !ac; ys.querySelector('.ys-ad').setAttribute('aria-expanded', String(ac));
    if (!ac) return;
    const yon = sahneYonu(SP), i = ysSimdi(), f = S.focus(Y);
    ysL.innerHTML = `<div class="ys-bas">${yon ? `Soldan sağa, <b>${YON_EK[yon.sol][0]}</b> <b>${YON_EK[yon.sag][1]}</b>` : 'Soldan sağa'}</div>`
      + (skYol() ? '<button data-harita="1"><span>🗺️</span>Haritada gör</button>' : '')
      + `<button data-sant="1"><span>🎯</span>Bu yılın şantiyesi: ${esc(f.ad || '')}</button>`
      + ysYer.map((s, j) => `<button data-i="${j}" class="${j === i ? 'on' : ''}"><span>${j === i ? '📍' : '·'}</span>${esc(ysAd(s))}</button>`).join('');
  }
  ys.querySelector('.ys-ad').addEventListener('click', ev => { ev.stopPropagation(); ysListe(); });
  ysL.addEventListener('click', ev => {
    const b = ev.target.closest('button'); if (!b) return;
    if (b.dataset.harita) { skbAc(); return; }
    if (b.dataset.sant) { follow = true; camHedef = null; cityFocus = null; ysListe(false); return; }
    const s = ysYer[+b.dataset.i]; if (s) ysGit(s.wx);
  });
  let ysSurukle = false;
  const ysCubukGit = ev => { const r = ysCubuk.getBoundingClientRect(), f = clamp((ev.clientX - r.left) / r.width, 0, 1); follow = false; camHedef = null; camX = ysAralik[0] + f * (ysAralik[1] - ysAralik[0]); };
  ysCubuk.addEventListener('pointerdown', ev => { ysSurukle = true; ysListe(false); ysCubuk.setPointerCapture(ev.pointerId); ysCubukGit(ev); });
  ysCubuk.addEventListener('pointermove', ev => { if (ysSurukle) ysCubukGit(ev); });
  const ysBirak = () => { ysSurukle = false; };
  ysCubuk.addEventListener('pointerup', ysBirak); ysCubuk.addEventListener('pointercancel', ysBirak);
  document.addEventListener('click', ev => { if (!ev.target.closest('#yerserit')) ysListe(false); });

  // ---------- sahnenin haritası (js/sahne-harita.js) ----------
  // Masaüstünde sağ üstte küçük harita: tıklanan yere sahne gider, ⤢ büyütür. Telefonda küçük harita bir düğme: dokununca büyük harita açılır.
  const SH = window.SahneHarita, skh = $('#skharita'), skhCv = $('#skh-cv'), skb = $('#skbuyuk'), skbCv = $('#skb-cv');
  const telefon = () => matchMedia('(max-width: 860px)').matches;
  let skhO = null, skhHits = [], skhHover = null, skhAn = '', skbV = null, skbO = null, skbHits = [], skbHover = null, skbFit = 1;
  const skYol = () => SH ? SH.yol(SP, MIS.coords || {}) : null;
  const skBurada = () => ysYer.length ? ysYer[ysSimdi()] : null;
  const skCam = () => { const vw = W / S.scale(H); return [camX - vw / 2, camX, camX + vw / 2]; };
  function skYapilar() {
    const co = MIS.coords || {}, out = [];
    for (const m of SP.monuments) {
      if (!co[m.id] || m.minor || m.gen) continue;
      const pr = S.progress(m, Y); if (pr < 0) continue;
      const harabe = m.ruin && Y <= m.ruin, ins = (m.stop && Y > m.stop) || (!m.stop && pr < 1);
      out.push({ id: m.id, ad: m.ad, tip: m.type, ll: co[m.id], wx: m.wx, st: harabe ? 'harabe' : ins ? 'ins' : (m.stop && Y <= m.stop ? 'harabe' : 'bitti') });
    }
    return out;
  }
  const tuvalBoy = (c, w, h) => { const a = Math.round(w * DPR), b = Math.round(h * DPR); if (c.width !== a || c.height !== b) { c.width = a; c.height = b; } const x = c.getContext('2d'); x.setTransform(DPR, 0, 0, DPR, 0, 0); return x; };
  // Küçük harita bulunduğun yere odaklanır ve seninle kayar: genişliği ekranda gördüğün kısmın yaklaşık 5 katı (en az 30 km).
  // (Bütün sahneyi sığdırınca yakın yerler, ör. Gize ile Ebu Ruvaş, üst üste biniyordu.) Bütün sahne büyük haritada.
  function skhGorunum(yl, w, h) {
    const fit = SH.sigdir(yl, w, h, w < 120 ? 0.1 : 0.13), p = yl.pts;
    let km = 0; for (let i = 1; i < p.length; i++) km += Math.hypot(p[i].la - p[i - 1].la, (p[i].lo - p[i - 1].lo) * Math.cos(p[i].la * Math.PI / 180)) * 111;
    const kmWx = km / Math.max(1, p[p.length - 1].wx - p[0].wx), gorKm = Math.max(30, (W / S.scale(H)) * kmWx * 5);
    const s = clamp(w / (gorKm / 111), fit.s, fit.s * 30), [la, lo] = SH.wxLL(yl, clamp(camX, p[0].wx, p[p.length - 1].wx));
    return s <= fit.s * 1.15 ? fit : { la, lo, s };
  }
  function skhCiz() {
    const yl = skYol(); skh.hidden = !yl; if (!yl) return;
    const w = skhCv.clientWidth, h = skhCv.clientHeight; if (!w || !h) return;
    const T = performance.now(), an = [w, h, DPR, Math.round(camX), Math.round(Y), skhHover, SP.id, Math.floor(T / 90)].join('|');
    if (an === skhAn) return; skhAn = an;
    skhO = { yl, v: skhGorunum(yl, w, h), yapilar: skYapilar(), yerler: ysYer, burada: skBurada(), cam: skCam(), hover: skhHover, T: T / 1000 };
    skhHits = SH.ciz(tuvalBoy(skhCv, w, h), 'mini', w, h, DPR, skhO);
  }
  function skbCiz() {
    const yl = skYol(); if (!yl) { skbKapat(); return; }
    const w = skbCv.clientWidth, h = skbCv.clientHeight; if (!w || !h) return;
    if (!skbV || skbV.sp !== SP || skbV.w !== w || skbV.h !== h) { skbV = { ...SH.sigdir(yl, w, h, 0.08), sp: SP, w, h }; skbFit = skbV.s; }
    skbO = { yl, v: skbV, yapilar: skYapilar(), yerler: ysYer, burada: skBurada(), cam: skCam(), buyuk: true, hover: skbHover, T: performance.now() / 1000 };
    skbHits = SH.ciz(tuvalBoy(skbCv, w, h), 'buyuk', w, h, DPR, skbO);
    const alt = `${YIL.fmt(Y)} · ${SP.kisa || SP.baslik || ''}`; if ($('#skb-alt').textContent !== alt) $('#skb-alt').textContent = alt;
  }
  function skbAc() { skbV = null; skbHover = null; skb.hidden = false; ysListe(false); }
  function skbKapat() { skb.hidden = true; }
  const skGit = hit => { if (hit) ysGit(hit.wx); };
  // küçük harita
  skhCv.addEventListener('click', ev => {
    if (telefon()) { skbAc(); return; }
    if (!skhO) return; const [x, y] = cvPos(skhCv, ev);
    skGit(SH.sec(skhO, skhHits, skhCv.clientWidth, skhCv.clientHeight, x, y, 22));
  });
  skhCv.addEventListener('pointermove', ev => {
    if (telefon() || !skhO) return; const [x, y] = cvPos(skhCv, ev);
    const h = SH.sec(skhO, skhHits, skhCv.clientWidth, skhCv.clientHeight, x, y, 22);
    skhHover = h && h.tur === 'yapi' ? h.id : null; skhCv.style.cursor = h ? 'pointer' : 'default';
  });
  skhCv.addEventListener('pointerleave', () => { skhHover = null; });
  $('#skh-buyut').addEventListener('click', ev => { ev.stopPropagation(); skbAc(); });
  // büyük harita: sürükle, tekerlek / iki parmakla yakınlaş, dokun ve git
  const skbZoom = (f, x, y) => {
    const v = skbV, w = skbV.w, h = skbV.h; if (x == null) { x = w / 2; y = h / 2; }
    const [la, lo] = SH.ters(v, w, h, x, y); v.s = clamp(v.s * f, skbFit / 25, skbFit * 12);
    const cs = Math.cos(v.la * Math.PI / 180); v.la = la + (y - h / 2) / v.s; v.lo = lo - (x - w / 2) / (cs * v.s);
  };
  const skbKaydir = (dx, dy) => { const v = skbV, cs = Math.cos(v.la * Math.PI / 180); v.la += dy / v.s; v.lo -= dx / (cs * v.s); };
  const skbP = new Map(); let skbS = null;
  skbCv.addEventListener('pointerdown', ev => {
    skbP.set(ev.pointerId, [ev.clientX, ev.clientY]); try { skbCv.setPointerCapture(ev.pointerId); } catch (e) { /* */ }
    if (skbP.size >= 2 && skbS) { skbS.moved = true; skbS.d0 = null; skbS.m = null; return; }
    skbS = { x: ev.clientX, y: ev.clientY, moved: false, d0: null };
  });
  skbCv.addEventListener('pointermove', ev => {
    if (skbP.has(ev.pointerId)) skbP.set(ev.pointerId, [ev.clientX, ev.clientY]);
    if (!skbV) return;
    if (skbP.size >= 2 && skbS) {
      const [a, b] = [...skbP.values()], d = Math.hypot(a[0] - b[0], a[1] - b[1]), r = skbCv.getBoundingClientRect(), m = [(a[0] + b[0]) / 2 - r.left, (a[1] + b[1]) / 2 - r.top];
      if (skbS.d0 && d > 10) { skbKaydir(m[0] - skbS.m[0], m[1] - skbS.m[1]); skbZoom(clamp(d / skbS.d0, 0.8, 1.25), m[0], m[1]); }
      skbS.d0 = d; skbS.m = m; return;
    }
    if (!skbS || !skbP.has(ev.pointerId)) { if (!telefon() && skbO) { const [x, y] = cvPos(skbCv, ev), h = SH.sec(skbO, skbHits, skbV.w, skbV.h, x, y); skbHover = h && h.tur === 'yapi' ? h.id : null; skbCv.style.cursor = h ? 'pointer' : 'grab'; } return; }
    const dx = ev.clientX - skbS.x, dy = ev.clientY - skbS.y;
    if (skbS.moved || Math.hypot(dx, dy) > 6) { skbS.moved = true; skbKaydir(dx, dy); skbS.x = ev.clientX; skbS.y = ev.clientY; }
  });
  const skbBirak = ev => {
    if (skbS && !skbS.moved && skbP.size <= 1 && skbO && ev.type === 'pointerup') {
      const [x, y] = cvPos(skbCv, ev), hit = SH.sec(skbO, skbHits, skbV.w, skbV.h, x, y);
      if (hit) { skGit(hit); skbKapat(); }
    }
    skbP.delete(ev.pointerId);
    if (!skbP.size) skbS = null; else if (skbS) { const [k] = [...skbP.values()]; skbS.x = k[0]; skbS.y = k[1]; skbS.d0 = null; skbS.m = null; }
  };
  skbCv.addEventListener('pointerup', skbBirak); skbCv.addEventListener('pointercancel', skbBirak);
  skbCv.addEventListener('wheel', ev => { ev.preventDefault(); if (!skbV) return; const [x, y] = cvPos(skbCv, ev); skbZoom(ev.deltaY < 0 ? 1.2 : 1 / 1.2, x, y); }, { passive: false });
  skb.querySelector('.skb-ctl').addEventListener('click', ev => { const b = ev.target.closest('[data-skb]'); if (!b || !skbV) return; const k = b.dataset.skb; if (k === 'fit') skbV = null; else skbZoom(k === 'in' ? 1.5 : 1 / 1.5); });
  skb.querySelector('.skb-x').addEventListener('click', skbKapat);
  document.addEventListener('keydown', ev => { if (ev.key === 'Escape' && !skb.hidden) skbKapat(); });

  // ---------- harita ----------
  // kure: küre için ünlü yapılar (data/yapilar) da eklenir; o yıl ayakta olanlar, önemlerine göre farklı yakınlıkta belirir
  const YP_Z = { 5: 2.6, 4: 3.6, 3: 5.5, 2: 8, 1: 12 }, YP_W = { 5: 5e6, 4: 2e6, 3: 6e5, 2: 2e5, 1: 6e4 };
  let miAn = '', miKureOnb = [], miHarOnb = [], mcAn = '', mcOnb = [];
  function mapItems(kure) {
    const an = `${Math.round(Y)}|${SP.id}|${kure ? 1 : 0}`;
    if (kure && an === miAn) return miKureOnb;
    if (!kure && an === miAn) return miHarOnb;
    const out = [], seen = new Set(), co = MIS.coords || {};
    if (kure) for (const y of window.YAPILAR || []) {
      if (!y.ll || Y > y.y || (y.yik != null && Y <= y.yik)) continue;
      out.push({ id: 'yp:' + y.id, lm: y, ad: y.ad, type: y.t, ll: y.ll, p: 1, w: YP_W[y.o] || 1e5, st: 'bitti', zmin: YP_Z[y.o] || 8, o: y.o });
    }
    for (const p of [SP, ...PARTS]) for (const m of p.monuments) {
      if (seen.has(m.id) || !co[m.id] || m.minor) continue;
      const pr = S.progress(m, Y); if (pr < 0) continue;
      seen.add(m.id);
      const ruined = m.ruin && Y <= m.ruin;
      const ins = (m.stop && Y > m.stop) || (!m.stop && pr < 1);
      out.push({ id: m.id, ad: m.ad, type: m.type, ll: co[m.id], p: pr, w: S.vol(m), st: ruined ? 'harabe' : ins ? 'ins' : (m.stop && Y <= m.stop ? 'harabe' : 'bitti') });
    }
    miAn = an;
    if (kure) miKureOnb = out; else miHarOnb = out;
    return out;
  }
  function mapCities() {
    const an = `${Math.round(Y)}|${SP.id}`;
    if (an === mcAn) return mcOnb;
    mcAn = an;
    mcOnb = (MIS.sehirler || []).filter(c => Y <= c.from && Y >= c.to).map(c => ({ ...c, cap: (c.b || []).some(([a, b]) => Y <= a && Y >= b) }));
    return mcOnb;
  }
  let dragM = null; const pts = new Map();
  mcv.addEventListener('pointerdown', ev => {
    pts.set(ev.pointerId, [ev.clientX, ev.clientY]); mcv.setPointerCapture(ev.pointerId);
    if (pts.size >= 2 && dragM) { dragM.moved = true; dragM.d0 = null; dragM.m = null; return; }
    dragM = { x: ev.clientX, y: ev.clientY, moved: false, d0: null };
  });
  mcv.addEventListener('pointermove', ev => {
    if (pts.has(ev.pointerId)) pts.set(ev.pointerId, [ev.clientX, ev.clientY]);
    if (pts.size >= 2 && dragM) {
      const [a, b] = [...pts.values()], d = Math.hypot(a[0] - b[0], a[1] - b[1]), r = mcv.getBoundingClientRect();
      const m = [(a[0] + b[0]) / 2 - r.left, (a[1] + b[1]) / 2 - r.top];
      if (dragM.d0 && d > 10) { M.pan(m[0] - dragM.m[0], m[1] - dragM.m[1]); M.zoomAt(m[0], m[1], clamp(d / dragM.d0, 0.8, 1.25)); }
      dragM.d0 = d; dragM.m = m; dragM.moved = true; return;
    }
    if (!dragM) { const h = M.hitTest(...cvPos(mcv, ev)); M.setHover(h); mcv.style.cursor = h ? 'pointer' : 'grab'; return; }
    if (!pts.has(ev.pointerId)) return;
    const dx = ev.clientX - dragM.x, dy = ev.clientY - dragM.y;
    if (dragM.moved || Math.hypot(dx, dy) > 5) { dragM.moved = true; M.pan(dx, dy); dragM.x = ev.clientX; dragM.y = ev.clientY; }
  });
  const endM = ev => {
    if (dragM && !dragM.moved && pts.size <= 1) {
      const h = M.hitTest(...cvPos(mcv, ev));
      if (h && h.kind === 'yapi') openInfo(h.it.id, h.it.ad);
      else if (h && h.kind === 'kume') M.zoomAt(h.cx, h.cy, 3);
      else if (h && h.kind === 'sehir') toast(`<b>${esc(h.c.ad)}</b> ${esc(h.c.not || '')}`);
    }
    pts.delete(ev.pointerId);
    if (!pts.size) dragM = null;
    else if (dragM) { const [k] = [...pts.values()]; dragM.x = k[0]; dragM.y = k[1]; dragM.d0 = null; dragM.m = null; }
  };
  mcv.addEventListener('pointerup', endM); mcv.addEventListener('pointercancel', endM);
  mcv.addEventListener('wheel', ev => { ev.preventDefault(); const [x, y] = cvPos(mcv, ev); M.zoomAt(x, y, ev.deltaY < 0 ? 1.18 : 1 / 1.18); }, { passive: false });
  document.querySelectorAll('[data-mapgo]').forEach(b => b.addEventListener('click', () => {
    const v = { tum: null, delta: [30.3, 31.1, 4.2], memfis: [29.88, 31.2, 16], teb: [25.72, 32.62, 22], nubya: [21.5, 31.8, 1.6] }[b.dataset.mapgo];
    if (!v) M.reset(); else M.go(...v);
  }));
  $('#mzin').addEventListener('click', () => M.zoomAt(W / 2, H / 2, 1.5));
  $('#mzout').addEventListener('click', () => M.zoomAt(W / 2, H / 2, 1 / 1.5));

  // ---------- dünya küresi ----------
  const DN = window.Dunya; let dragG = null; const gpts = new Map();
  // İki parmak: parmakların ortası sabit kalacak biçimde yakınlaşır. Bir parmak kalkınca sürükleme kalan parmağın
  // o anki yerinden yeniden başlar (eskiden eski konuma göre hesaplandığı için küre bir anda başka yere kayıyordu).
  gcv.addEventListener('pointerdown', ev => {
    DN.hold(); gpts.set(ev.pointerId, [ev.clientX, ev.clientY]); gcv.setPointerCapture(ev.pointerId);
    if (gpts.size >= 2 && dragG) { dragG.moved = true; dragG.d0 = null; dragG.m = null; dragG.iki = true; return; }
    dragG = { x: ev.clientX, y: ev.clientY, moved: false, d0: null };
  });
  gcv.addEventListener('pointermove', ev => {
    if (gpts.has(ev.pointerId)) gpts.set(ev.pointerId, [ev.clientX, ev.clientY]);
    if (gpts.size >= 2 && dragG) {
      const [a, b] = [...gpts.values()], d = Math.hypot(a[0] - b[0], a[1] - b[1]), r = gcv.getBoundingClientRect();
      const m = [(a[0] + b[0]) / 2 - r.left, (a[1] + b[1]) / 2 - r.top];
      if (dragG.d0 && d > 10) { DN.drag(m[0] - dragG.m[0], m[1] - dragG.m[1]); DN.zoom(clamp(d / dragG.d0, 0.8, 1.25), m[0], m[1]); DN.hold(); }
      dragG.d0 = d; dragG.m = m; dragG.moved = true; return;
    }
    if (!dragG) { const h = DN.hitTest(...cvPos(gcv, ev)); DN.setHover(h); gcv.style.cursor = h ? 'pointer' : 'grab'; return; }
    if (!gpts.has(ev.pointerId)) return;
    const dx = ev.clientX - dragG.x, dy = ev.clientY - dragG.y;
    if (dragG.moved || Math.hypot(dx, dy) > 4) { dragG.moved = true; DN.drag(dx, dy); dragG.x = ev.clientX; dragG.y = ev.clientY; }
    if (dragG.iki) DN.hold(); // iki parmaktan sonra kalan parmakla savrulma olmasın
  });
  const endG = ev => {
    if (dragG && !dragG.moved && gpts.size <= 1) {
      if (typeof window.__kureSec === 'function') { const cb = window.__kureSec; window.__kureSec = null; cb(DN.llAt(...cvPos(gcv, ev))); }
      else { const h = DN.hitTest(...cvPos(gcv, ev)); if (h && (h.kind === 'goc' || h.kind === 'besik' || h.kind === 'tarim')) openGoc(h.kind === 'goc' ? h.r.id : h.kind === 'tarim' ? 'tarim' : null); else if (h && h.kind === 'donum') openDonum(h.d); else if (h && h.kind === 'hatyapi') openHatYapi(h.hy); else if (h && h.kind === 'magara') openMagara(h.m); else if (h && h.kind === 'surpriz') openSurpriz(h.sp); else if (h && h.kind === 'liman') openLiman(h.lm); else if (h && h.kind === 'nehir') openNehir(h.nr); else if (h && h.kind === 'hayvangoc') openHayvanGoc(h.hg); else if (h && h.kind === 'volkan') openVolkan(h.v); else if (h && h.kind === 'fay') openFay(h.f); else if (h && h.kind === 'akinti') openAkinti(h.a); else if (h && h.kind === 'denizolay') openDenizOlay(h.o); else if (h && h.kind === 'hayvan') openHayvan(h.h); else if (h && h.kind === 'bitki') openBitki(h.bt); else if (h && h.kind === 'yayilis') { DN.setYayilis(h.yy.id); openYayilis(h.yy); } else if (h && h.kind === 'cografya') openCografya(h.cg); else if (h && h.kind === 'med') DN.goEgypt(h.b ? h.b.merkez : BG.merkez, h.b ? h.b.merkezZ : BG.merkezZ); else if (h && h.kind === 'yapi') { if (h.it.lm) openYapi(h.it.id, h.kids); else showMonument(h.it.id, h.kids, h); } else if (h && h.kind === 'kume') DN.zoomTo(h.cx, h.cy, 2.6); else if (h && h.kind === 'sehir') openCity(h.c); else if (h && h.kind === 'olay') openEvent(h.e); else if (h && h.kind === 'kaynak') openKaynak(h.k); else if (h && h.kind === 'yol') openYol(h.t); else if (h && h.kind === 'devlet') openDevlet(h.k); else if (h && h.kind === 'yolculuk') openYolculuk(h.j); else if (!h) { const ll = DN.llAt(...cvPos(gcv, ev)); if (ll) { if (DN.karaMi && !DN.karaMi(ll[0], ll[1])) { const ok = okyanusBul(ll[0], ll[1]); if (ok) openOkyanus(ok); } else { let yakinCg = null; if ((DN.layers.cografya || !DN.sinirAcik) && window.ATLAS_COGRAFYA) { const tol = Math.max(0.65, 2.4 / Math.max(1, (DN.view && DN.view.z) || 1)); let enYakin = tol * tol; for (const cg of window.ATLAS_COGRAFYA) { if (cg.tur !== 'harika' && cg.tur !== 'dag') continue; const d2 = (cg.ll[0] - ll[0]) ** 2 + (cg.ll[1] - ll[1]) ** 2; if (d2 < enYakin) { enYakin = d2; yakinCg = cg; } } } if (yakinCg) openCografya(yakinCg); else if (DN.sinirAcik) { DN.nerede(ll[0], ll[1], Math.round(Y)).then(k => { if (k) openDevlet(k); }); } else { const db = window.dogaBolgeBul && window.dogaBolgeBul(ll[0], ll[1]); if (db) openDogaBolge(db); } } } } }
    }
    gpts.delete(ev.pointerId);
    if (!gpts.size) dragG = null;
    else if (dragG) { const [k] = [...gpts.values()]; dragG.x = k[0]; dragG.y = k[1]; dragG.d0 = null; dragG.m = null; DN.hold(); }
  };
  gcv.addEventListener('pointerup', endG); gcv.addEventListener('pointercancel', endG);
  gcv.addEventListener('wheel', ev => { ev.preventDefault(); const [x, y] = cvPos(gcv, ev); DN.zoom(ev.deltaY < 0 ? 1.2 : 1 / 1.2, x, y); }, { passive: false });
  gcv.addEventListener('dblclick', ev => { const [x, y] = cvPos(gcv, ev); DN.zoom(2, x, y); });
  $('#gzin').addEventListener('click', () => DN.zoom(1.5)); $('#gzout').addEventListener('click', () => DN.zoom(1 / 1.5));

  // ================= şehirler ve olaylar (Dünya küresinden) =================
  let cityFocus = null;
  const capText = c => (c.b || []).map(([a, b]) => YIL.aralik(a, b)).join(', ');
  function cityHTML(c, kisa) {
    const sb = (window.SEHIR_BILGI || {})[c.ad] || {};
    const capNow = (c.b || []).some(([a, b]) => Y <= a && Y >= b);
    const yakin = SP.monuments.filter(m => !m.gen && MIS.coords[m.id] && Math.hypot(MIS.coords[m.id][0] - c.ll[0], MIS.coords[m.id][1] - c.ll[1]) < 0.6 && S.progress(m, Y) >= 0).slice(0, 5).map(m => m.ad);
    return `${rowsHTML([
      ['Bugün', sb.bugun || '-'], ['Kuruluş', sb.kurulus || '-'],
      ['Başkent mi?', capNow ? `<b>Evet, ${YIL.fmt(Math.round(Y))}'de başkent</b>` : (c.b && c.b.length ? 'Bu yılda değil' : 'Hiç başkent olmadı')],
      ...(c.b && c.b.length ? [['Başkent olduğu dönemler', capText(c)]] : []),
      ...(yakin.length ? [['Bu yıl çevresindeki yapılar', yakin.join(', ')]] : [])])}
      <h4>Önemi</h4><p>${sb.onem || c.not || ''}</p>${!kisa && sb.ilginc ? `<div class="did"><b>💡 Biliyor muydun?</b><p>${sb.ilginc}</p></div>` : ''}`;
  }
  function openCityModal(c) {
    const sb = (window.SEHIR_BILGI || {})[c.ad] || {};
    showModal({ ikon: '🏙️', title: c.ad, sub: sb.bugun || '', tabs: [{ ad: 'Hap bilgi', html: cityHTML(c) }, ...(sb.wiki ? [photoTab(sb.wiki, 8)] : [])] });
  }
  function openCity(c) {
    if (DUNYA) { openCityModal(c); return; }
    const co = MIS.coords || {};
    let best = null, bd = 1.3;
    const yakin = SP.monuments.filter(m => !m.gen && co[m.id]).map(m => ({ m, d: Math.hypot(co[m.id][0] - c.ll[0], co[m.id][1] - c.ll[1]), p: S.progress(m, Y) })).filter(o => o.d < 0.7);
    const aktif = yakin.filter(o => o.p >= 0 && (o.m.stop ? Y > o.m.stop : o.p < 1)).sort((a, b) => S.vol(b.m) - S.vol(a.m))[0];
    const var_ = yakin.filter(o => o.p >= 0).sort((a, b) => a.d - b.d)[0];
    best = (aktif || var_ || yakin.sort((a, b) => a.d - b.d)[0] || {}).m || null; void bd;
    const card = $('#citycard');
    card.querySelector('.cc-title').textContent = c.ad;
    card.querySelector('.cc-body').innerHTML = cityHTML(c, true);
    card.dataset.city = c.ad; card.querySelector('.cc-more').hidden = false;
    if (best) {
      setView('sahne'); follow = false; camHedef = null; camX = best.wx; cityFocus = c.ad; shown = null;
      kartGoster();
      toast(`📍 <b>${esc(c.ad)}</b> · ${YIL.fmt(Math.round(Y))}: şehrin o yılki görünümü`);
    } else {
      toast(`<b>${esc(c.ad)}</b> bu çağın sahnesinde yer almıyor; bilgi kartı açıldı.`);
      openCityModal(c);
    }
  }
  $('#citycard').addEventListener('click', e => {
    if (e.target.closest('.cc-x')) { $('#citycard').hidden = true; return; }
    if (e.target.closest('.cc-more')) { const c = (MIS.sehirler || []).find(x => x.ad === $('#citycard').dataset.city); if (c) openCityModal(c); }
  });
  const OLAY_TUR = { savas: '⚔️ Savaş', deniz: '⚓ Deniz savaşı', afet: '🌋 Doğal afet', antlasma: '📜 Antlaşma', olay: '🏛️ Önemli olay' };
  const AFET_TUR = { deprem: 'Deprem', tsunami: 'Deprem ve dev dalga', sel: 'Sel', yangin: 'Yangın', yanardag: 'Yanardağ patlaması', kuraklik: 'Kuraklık', salgin: 'Salgın hastalık' };
  function openEvent(e) {
    const rows = [['Tarih', `${YIL.fmt(e.y)}${e.y < 100 ? '' : ' (yaklaşık)'}`], ['Tür', e.tur === 'afet' ? AFET_TUR[e.alt] || 'Doğal afet' : OLAY_TUR[e.tur]], ['Tarihî önemi', '★'.repeat(e.onem) + '☆'.repeat(Math.max(0, 5 - e.onem))]];
    if (e.taraflar) rows.push(['Taraflar', e.taraflar.join(' <b>vs</b> ').replace(/ <b>vs<\/b> /g, e.tur === 'antlasma' ? ' · ' : ' <b>vs</b> ')]);
    if (e.kazanan) rows.push(['Kazanan', `<b>${e.kazanan}</b>`]);
    if (e.kuvvetler) rows.push(['Kuvvetler', e.kuvvetler]);
    const inRange = e.y <= P.from && e.y >= P.to;
    showModal({ ikon: { savas: '⚔️', deniz: '⚓', afet: '🌋', antlasma: '📜', olay: '🏛️' }[e.tur], title: e.ad, sub: `${YIL.fmt(e.y)}`, tabs: [
      { ad: 'Genel', html: `${rowsHTML(rows)}${e.ozet ? `<p>${e.ozet}</p>` : ''}${e.sonuc ? `<h4>Sonuç</h4><p>${e.sonuc}</p>` : ''}${inRange ? `<div class="gos"><button class="phbtn" data-go="${e.y}">⏩ Zaman çizelgesini ${YIL.fmt(e.y)}'e götür</button></div>` : ''}<p class="note">Antik kaynaklardaki asker sayıları çoğu zaman abartılıdır; rakamlar yaklaşıktır.</p>` },
      ...(e.wiki ? [photoTab(e.wiki, 8)] : [])] });
  }
  function openKaynak(k) {
    if (!k) return;
    kesifKaydet('kaynak', k.id);
    const t = (window.KAYNAK_TUR || {})[k.tur] || {};
    const rows = [['Maden / Kaynak', `${t.ad || k.tur} (${t.sem || '⛏️'})`], ['İşletildiği yıllar', `${YIL.fmt(k.from)} – ${k.to <= -2026 ? 'bugün' : YIL.fmt(k.to)} (yaklaşık)`]];
    const html = `${rowsHTML(rows)}<p>${esc(k.not)}</p>
      <div class="gos"><button class="phbtn icbtn" data-atlaskure="kaynak|${k.ll[0]}|${k.ll[1]}|${esc('⛏️ ' + k.ad)}">🌍 Kürede göster</button></div>`;
    showModal({ ikon: '⛏️', title: k.ad, sub: t.ad || 'Dünya Madeni', tabs: [{ ad: '⛏️ Maden Bilgisi', html }] });
  }
  const kaynakAktif = () => (window.KAYNAKLAR || []).filter(k => Y <= k.from && Y >= k.to);
  function olayListesi() {
    const evs = (window.OLAYLAR || []).filter(e => DN.layers[e.tur] && Math.abs(Y - e.y) <= DN.aralik).sort((a, b) => b.y - a.y);
    if (!evs.length) return '<p>Bu yıla ±100 yıl uzaklıkta kayıtlı bir savaş, afet ya da antlaşma yok.</p>';
    return `<ul class="evs olaylist">${evs.map(e => `<li data-olay="${e.id}" class="${Math.abs(e.y - Y) <= 5 ? 'on' : ''}">${e.tur === 'savas' ? '⚔️' : e.tur === 'deniz' ? '⚓' : e.tur === 'afet' ? '🌋' : '📜'} <b>${YIL.fmt(e.y)}</b> ${e.ad} ${'★'.repeat(e.onem)}</li>`).join('')}</ul>`;
  }
  $('#panel').addEventListener('click', ev => {
    const o = ev.target.closest('[data-olay]'); if (!o) return;
    const e = (window.OLAYLAR || []).find(x => x.id === o.dataset.olay); if (!e) return;
    if (view !== 'dunya') setView('dunya');
    DN.goTo(e.ll[0], e.ll[1], 7); openEvent(e);
  });
  // ---------- katman menüsü (sağ üstte 🗂️) ----------
  const KATLAR = ['savas', 'deniz', 'antlasma', 'afet', 'olay', 'kaynak', 'ticaret', 'yolculuk', 'akinti', 'hayvan', 'bitki', 'cografya', 'nehir', 'hayvangoc', 'liman', 'volkan', 'donum', 'magara', 'yayilis', 'gece'];
  const katSay = k => k === 'kaynak' ? kaynakAktif().length : k === 'ticaret' ? (window.TICARET_YOLLARI || []).filter(t => Y <= t.from && Y >= t.to).length
    : k === 'yolculuk' ? (window.YOLCULUKLAR || []).filter(j => Math.abs(Y - j.y) <= DN.aralik).length
    : k === 'akinti' ? ((window.ATLAS_OKYANUS?.akintilar || []).length + (window.ATLAS_OKYANUS?.olaylar || []).length)
    : k === 'hayvan' ? (window.ATLAS_HAYVANLAR || []).filter(h => (h.from == null || Y <= h.from) && (h.to == null || Y >= h.to)).length
    : k === 'bitki' ? (window.ATLAS_BITKILER || []).length
    : k === 'cografya' ? (window.ATLAS_COGRAFYA || []).length
    : k === 'nehir' ? (window.ATLAS_NEHIRLER || []).length
    : k === 'hayvangoc' ? (window.ATLAS_HAYVAN_GOC || []).length
    : k === 'liman' ? (window.ATLAS_LIMANLAR || []).length
    : k === 'volkan' ? (window.ATLAS_VOLKANLAR?.volkanlar || []).length
    : k === 'donum' ? (window.DONUM_NOKTALARI || []).length
    : k === 'magara' ? (Y >= 3000 ? (window.ATLAS_MAGARALAR || []).length : 0)
    : k === 'yayilis' ? (window.ATLAS_YAYILIS || []).length
    : k === 'gece' ? ''
    : (window.OLAYLAR || []).filter(e => e.tur === k && Math.abs(Y - e.y) <= DN.aralik).length;
  function renderOlayPanel() {
    const gb = $('#gecebtn'); if (gb) gb.classList.toggle('on', !!DN.layers.gece);
    const el = $('#katman'); if (!el) return;
    kesifRozetGuncelle();
    if (el.hidden) return;
    el.querySelectorAll('[data-kat]').forEach(inp => {
      const k = inp.dataset.kat; inp.checked = !!DN.layers[k];
      const c = inp.parentElement.querySelector('i'); if (c) c.textContent = k === 'sinir' ? '' : (katSay(k) || '');
    });
    // Her kategori sekmesinde kaç katmanın açık olduğunu göster
    el.querySelectorAll('[data-kpsek]').forEach(b => {
      const grp = el.querySelector(`[data-kpgrup="${b.dataset.kpsek}"]`);
      const acik = grp ? [...grp.querySelectorAll('[data-kat]')].filter(x => x.checked).length : 0;
      const roz = b.querySelector('em'); if (roz) roz.textContent = acik ? ` ${acik}` : '';
    });
  }
  $('#katman').addEventListener('change', ev => { const k = ev.target.dataset && ev.target.dataset.kat; if (k) { DN.setLayer(k, ev.target.checked); renderOlayPanel(); } });
  $('#katman').addEventListener('click', ev => {
    const sk = ev.target.closest('[data-kpsek]'); if (sk) { kpSekmeSec(sk.dataset.kpsek); return; }
    const am = ev.target.closest('[data-atlas]'); if (am) { atlasModUygula(am.dataset.atlas); return; }
    if (ev.target.closest('#kesif-ac')) { kartlariKapat(); openKesif(); }
  });
  $('#katbtn').addEventListener('click', () => { const el = $('#katman'), ac = el.hidden; if (ac) kartlariKapat('katman'); el.hidden = !ac; $('#katbtn').classList.toggle('on', ac); renderOlayPanel(); });
  for (const k of KATLAR) DN.setLayer(k, false);
  DN.setLayer('ticaret', true);
  DN.setLayer('magara', true);
  kesifRozetGuncelle();
  $('#aralik').addEventListener('change', e => { DN.setAralik(+e.target.value); renderOlayPanel(); shown = null; });

  // ---------- aynı anda tek kart ----------
  function kartlariKapat(haric) {
    if (haric !== 'kart') $('#citycard').hidden = true;
    if (haric !== 'katman') { $('#katman').hidden = true; $('#katbtn').classList.remove('on'); }
    if (haric !== 'panel' && haric !== 'modal') panelAc(false);
  }
  function kartGoster() { kartlariKapat('kart'); $('#citycard').hidden = false; }
  // ---------- 📖 Bu yıl paneli ----------
  function panelAc(ac) {
    document.body.classList.toggle('panelacik', ac); $('#buyil').classList.toggle('on', ac); $('#buyil').setAttribute('aria-expanded', ac);
    if (ac) { shown = null; }
  }
  $('#buyil').addEventListener('click', () => { const ac = !document.body.classList.contains('panelacik'); if (ac) kartlariKapat('panel'); panelAc(ac); });
  $('#panel').addEventListener('click', ev => { if (ev.target.closest('.pn-x')) panelAc(false); });

  // ---------- küredeki yapıya tıklayınca: sahneye geç ----------
  // küredeki simgeye tıklanınca: o yapının kartı hemen açılır; aynı simgede toplanan yakın yapılar kartta düğme olur
  function showMonument(id, kids, hit) {
    if (/^yp:/.test(id)) { openYapi(id, kids); return; }
    showMonument0(id);
    const card = $('#citycard'), m = monOf(id) || PARTS.flatMap(p => p.monuments).find(x => x.id === id);
    if (!kids || !kids.length || card.hidden || !m || card.querySelector('.cc-title').textContent !== m.ad) return;
    const ks = kids.map(o => o.it).filter(it => it.id !== id);
    card.querySelector('.cc-body').insertAdjacentHTML('beforeend', `<div class="yakin"><small>📍 Aynı yerde ${ks.length} yapı daha:</small><div class="chips">${ks.slice(0, 8).map(it => `<button data-ccyakin="${it.id}">${esc(it.ad)}</button>`).join('')}</div>${view === 'dunya' && hit ? `<button class="phbtn" data-ccyaklas="${hit.cx},${hit.cy}">🔍 Küreden yaklaş</button>` : ''}</div>`);
  }
  function showMonument0(id) {
    if (DUNYA) {
      const p = PARTS.find(q => q.monuments.some(m => m.id === id && !m.eski)) || PARTS.find(q => q.monuments.some(m => m.id === id)); if (!p) { openInfo(id); return; }
      const m = p.monuments.find(x => x.id === id), pr = S.progress(m, Y), co = (MIS.coords || {})[id];
      if (view !== 'dunya') setView('dunya'); if (co && DN.view.z < 8) DN.goTo(co[0], co[1], 12);
      const durum = pr < 0 ? 'henüz başlanmadı' : m.ruin && Y <= m.ruin ? 'harabe' : m.stop && Y <= m.stop ? 'yarım kaldı' : pr >= 1 ? 'tamamlanmış' : `inşaat sürüyor, %${Math.round(pr * 100)}`;
      const b0 = bilgiOf(id), bi = b0 && b0.ref ? bilgiOf(b0.ref) : b0, card = $('#citycard');
      card.querySelector('.cc-title').textContent = m.ad;
      const wt = (MIS.wiki || {})[id];
      card.querySelector('.cc-body').innerHTML = `${wt ? `<div class="kapak kucuk" data-kapak="${esc(wt)}"></div>` : ''}<p><small>${BLR[p.bolge].ikon} ${BLR[p.bolge].ad} · ${m.yer || ''}</small></p><p><b>${YIL.fmt(Math.round(Y))}:</b> ${durum}</p>${bi && bi.neden ? `<p>${bi.neden}</p>` : ''}
        <div class="gos"><button class="phbtn" data-ccinfo="${id}">ℹ️ Bilgi kartı</button><button class="phbtn icbtn" data-ccgit="${p.bolge}" data-ccyapi="${id}">🎬 Sahnede gör</button></div>`;
      card.dataset.city = ''; card.querySelector('.cc-more').hidden = true; kartGoster();
      kapakYukle(card.querySelector('.kapak'));
      return;
    }
    const m = SP.monuments.find(x => x.id === id);
    if (!m) { openInfo(id); return; }
    setView('sahne'); follow = false; camHedef = null; camX = m.wx; cityFocus = m.ad.replace(/ \(.*\)$/, ''); shown = null;
    const b0 = bilgiOf(id), b = b0 && b0.ref ? bilgiOf(b0.ref) : b0, p = S.progress(m, Y);
    const durum = p < 0 ? 'henüz başlanmadı' : m.ruin && Y <= m.ruin ? 'harabe' : m.stop && Y <= m.stop ? 'yarım kaldı' : p >= 1 ? 'tamamlanmış' : `inşaat sürüyor, %${Math.round(p * 100)}`;
    const card = $('#citycard');
    card.querySelector('.cc-title').textContent = m.ad;
    const wt = (MIS.wiki || {})[id];
    card.querySelector('.cc-body').innerHTML = `${wt ? `<div class="kapak kucuk" data-kapak="${esc(wt)}"></div>` : ''}<p><b>${YIL.fmt(Math.round(Y))}:</b> ${durum}</p>${b ? `<p>${b.neden}</p>` : ''}
      <div class="gos"><button class="phbtn" data-ccinfo="${id}">ℹ️ Bilgi kartı</button>${K.ic.eslesme[id] ? `<button class="phbtn icbtn" data-ccic="${id}">🔍 İçine gir</button>` : ''}</div>`;
    card.dataset.city = ''; card.querySelector('.cc-more').hidden = true;
    kartGoster(); kapakYukle(card.querySelector('.kapak'));
  }
  $('#citycard').addEventListener('click', e => {
    const yk = e.target.closest('[data-ccyakin]'); if (yk) return showMonument(yk.dataset.ccyakin);
    const ya = e.target.closest('[data-ccyaklas]'); if (ya) { const [x, y] = ya.dataset.ccyaklas.split(',').map(Number); $('#citycard').hidden = true; DN.zoomTo(x, y, 3); return; }
    const cg = e.target.closest('[data-ccgit]'); if (cg) return gitBolge(cg.dataset.ccgit, '&yapi=' + cg.dataset.ccyapi);
    const a = e.target.closest('[data-ccinfo]'); if (a) return openInfo(a.dataset.ccinfo);
    const b = e.target.closest('[data-ccic]'); if (b) return zoomInto(b.dataset.ccic);
  });

  function setView(v) {
    if (DUNYA && v !== 'dunya') v = 'dunya';
    view = v; shown = null;
    document.body.classList.toggle('maponly', v === 'harita');
    document.body.classList.toggle('globeonly', v === 'dunya');
    if (v !== 'sahne' && !DUNYA) $('#citycard').hidden = true;
    if (v !== 'sahne') $('#skbuyuk').hidden = true;
    // tek bölge modunda küre ilk açıldığında o bölgeye döner (Amerika ve Okyanusya başlangıç görünümünün arkasında kalıyor)
    if (v === 'dunya' && !DUNYA && !setView.kureGitti && BG.merkez && window.Dunya) { setView.kureGitti = true; window.Dunya.goEgypt(BG.merkez, Math.min(BG.merkezZ || 3, 3)); }
    modGuncelle();
  }
  function modGuncelle() { document.querySelectorAll('[data-mod]').forEach(b => b.classList.toggle('on', (b.dataset.mod === 'kesfet' && view === 'dunya') || (b.dataset.mod === 'sahne' && view === 'sahne'))); }
  function sahneSec() {
    showModal({ ikon: '🎬', title: 'Hangi bölgenin sahnesi?', sub: `${YIL.fmt(Math.round(Y))} yılına gidilir`, tabs: [{ ad: 'Bölge seç', html: `<p>Canlı sahnede yapılar yılına göre yükselir, insanlar ve gemiler dönemine göre değişir.</p><div class="secim">${BSIRA.map(b => `<button data-gitbolge2="${b}">${BLR[b].ikon} <b>${BLR[b].ad}</b><small>${BLR[b].ad} sahnesini aç</small></button>`).join('')}</div>` }] });
  }
  // ---------- Yaşa: bu yılda ve bölgede seçilebilecek roller ----------
  const misirAntik = () => DUNYA ? (Y <= 3150 && Y >= 30) : (BG.id === 'misir' && BG.kultur && !SP.modern);
  function rolListesi() {
    const y = Math.round(Y), bolgeler = DUNYA ? BSIRA : [BG.id];
    const guc = (window.ROLLER || []).filter(r => bolgeler.includes(r.bolge) && y <= r.from && y >= r.to);
    const halk = misirAntik() && K.roller ? K.roller.map(r => ({ ...r, bolge: 'misir', tema: 'misir', giyim: 'antik', halk: true })) : [];
    return { guc, halk };
  }
  const rolBul = id => { const { guc, halk } = rolListesi(); return [...guc, ...halk].find(r => r.id === id); };
  const yasaVar = () => { const { guc, halk } = rolListesi(); return guc.length + halk.length > 0; };
  function yasaYok() {
    const oneri = (window.ROLLER || []).map(r => ({ r, y: r.to <= -2026 ? -2000 : Math.round((r.from + r.to) / 2) }));
    showModal({ ikon: '🧑‍🌾', title: 'O dönemde yaşasaydın…', sub: `${YIL.fmt(Math.round(Y))} için henüz rol yok`, tabs: [{ ad: 'Nereye gidelim?', html: `<p>Bu yıl ve bölge için hazır bir rol yok. Bir hayat seç, seni o yıla götüreyim:</p><div class="secim">${oneri.map(({ r, y }) => `<button data-yasagit="${r.bolge}|${y}">${r.ikon} <b>${r.ad}</b><small>${BLR[r.bolge] ? BLR[r.bolge].ad : r.bolge} · ${YIL.fmt(y)}</small></button>`).join('')}<button data-yasagit="misir|2560">🌾 <b>Çiftçi, kâtip, piramit işçisi…</b><small>Mısır · ${YIL.fmt(2560)}</small></button></div>` }] });
  }
  // ---------- Yaşa (yeni): kıta → dönem → hayat (data/yasam*.js) ----------
  const SINIF = { lider: '👑 Lider', ciftci: '🌾 Çiftçi', isci: '⚒️ İşçi', tuccar: '⚖️ Tüccar', asker: '⚔️ Asker', alim: '📜 Bilgin', zanaat: '🛠️ Meslek' };
  const yasamBul = id => { for (const k of window.YASAM || []) for (const d of k.donemler) { const r = d.roller.find(x => x.id === id); if (r) return { k, d, r }; } return null; };
  const yasamOpt = (d, r) => ({ tapinak: true, tema: d.tema || 'avrupa', giyim: d.giyim || 'antik', tac: r.sinif === 'lider' ? (d.giyim === 'modern' ? 'yok' : 'tac') : r.sinif === 'asker' && d.giyim !== 'modern' ? 'migfer' : 'yok' });
  // Yaşa yılı: Yaşa penceresinde seçilen yıl (genel zamanı değiştirmeden başka yıllar denenebilsin); ±YASA_PAY yıl içindeki hayatlar gösterilir
  const YASA_PAY = 100, YASA_EN_ESKI = 3000;
  let yasaYil = null;
  const yasaCiz = b => b.querySelectorAll('[data-yrolcv]').forEach(cvEl => { const o = yasamBul(cvEl.dataset.yrolcv); if (o) liveCanvas(cvEl, (ctx, w, h, t) => S.drawOn(ctx, A => C.drawLife(ctx, w, h, o.r.gun[Math.min(1, o.r.gun.length - 1)], t, A, yasamOpt(o.d, o.r))), false); });
  // MÖ/MS sınırında 0 yılı yok: MÖ 1'den sonra MS 1 gelir
  const yilKaydir = (y, d) => { let n = y - d; if (y > 0 && n <= 0) n -= 1; else if (y <= 0 && n > 0) n += 1; return clamp(n, -YIL.BUGUN, YASA_EN_ESKI + YASA_PAY); };
  function yasaPencereHTML(yy, kart) {
    const KT = window.YASAM || [], a = yy + YASA_PAY, b = Math.max(-YIL.BUGUN, yy - YASA_PAY);
    const kita = BG.kita || (DUNYA ? 'asya' : 'avrupa');
    const sira = [...KT].sort((p, q) => (q.kita === kita) - (p.kita === kita));
    let n = 0;
    const gruplar = sira.map(k => {
      const ds = k.donemler.filter(d => d.from >= b && d.to <= a); if (!ds.length) return '';
      return `<h3 class="ysm-kita">${k.ikon} ${k.ad}</h3>` + ds.map(d => {
        n += d.roller.length;
        const icinde = yy <= d.from && yy >= d.to;
        const not = icinde ? '<span class="ysm-rozet">bu yıllarda</span>' : d.to > yy ? `<span class="ysm-rozet soluk">${YIL.ek(d.to, 'e')} kadar sürdü</span>` : `<span class="ysm-rozet soluk">${YIL.ek(d.from, 'den')} itibaren</span>`;
        return `<div class="ysm-donem${icinde ? ' simdi' : ''}"><h4>${d.ad} ${not}<small>${d.aralik} · ${d.yer}</small></h4><div class="rolegrid">${d.roller.map(r => kart(d, r)).join('')}</div></div>`;
      }).join('');
    }).join('');
    const guc = (window.ROLLER || []).filter(r => r.from >= b && r.to <= a);
    const gucHTML = guc.length ? `<h3 class="ysm-kita">👑 Bu yıllarda güç sahibi olsaydın</h3><div class="secim">${guc.map(r => { const gy = clamp(yy, r.to, r.from); return `<button data-yasagit="${r.bolge}|${gy}">${r.ikon} <b>${r.ad}</b><small>${BLR[r.bolge] ? BLR[r.bolge].ad : r.bolge} · ${YIL.fmt(gy)}</small></button>`; }).join('')}</div>` : '';
    const ust = `<div class="ysm-yil">
      <div class="ysm-yil-bas">Seçtiğin yıl <b>${YIL.fmt(yy)}</b><small>${YIL.fmt(a)} ile ${YIL.fmt(b)} arasında, yani ${YASA_PAY} yıl önce ve sonra yaşanabilecek hayatlar</small></div>
      <div class="ysm-yil-sat"><button class="phbtn" data-yyil="${yilKaydir(yy, -YASA_PAY)}">◀ −${YASA_PAY} yıl</button><button class="phbtn" data-yyil="rastgele">🎲 Rastgele</button><button class="phbtn" data-yyil="${yilKaydir(yy, YASA_PAY)}">+${YASA_PAY} yıl ▶</button></div>
      <form class="ysm-yil-form" data-yform="1"><span>Başka bir yıl dene:</span><input type="number" min="1" step="1" inputmode="numeric" placeholder="ör. 1500" aria-label="Yıl" value="${Math.max(1, Math.abs(yy))}"><select aria-label="Çağ"><option value="ms"${yy <= 0 ? ' selected' : ''}>MS</option><option value="mo"${yy > 0 ? ' selected' : ''}>MÖ</option></select><button class="phbtn" type="submit">Bak</button></form>
    </div>`;
    const bos = n ? '' : `<p class="note">Bu yıllar için henüz hazır bir hayat yok. En eski hayatlar ${YIL.fmt(YASA_EN_ESKI)} civarından başlıyor.</p><div class="gos"><button class="phbtn" data-yyil="${YASA_EN_ESKI - 500}">${YIL.ek(YASA_EN_ESKI - 500, 'e')} bak</button></div>`;
    return ust + bos + gruplar + gucHTML;
  }
  function openYasam(yil) {
    yasaYil = Math.round(yil ?? Y);
    const y = Math.round(Y), yy = yasaYil, { guc, halk } = rolListesi(), KT = window.YASAM || [];
    const kart = (d, r) => `<button class="rolecard" data-yrol="${r.id}"><canvas data-yrolcv="${r.id}"></canvas><b>${r.ikon} ${r.ad}</b><small><i class="ysm-sinif">${SINIF[r.sinif] || ''}</i> ${r.kim}</small></button>`;
    const tabs = KT.map(k => ({ ad: `${k.ikon} ${k.ad}`, html: `<p class="note">Bir dönem ve bir hayat seç: o insanın bir gününü, ne yediğini, nasıl bir evde yaşadığını ve hangi koşullarda çalıştığını gör.</p>${k.donemler.map(d => {
        const simdi = yy <= d.from && yy >= d.to;
        return `<div class="ysm-donem${simdi ? ' simdi' : ''}"><h4>${d.ad} <small>${d.aralik} · ${d.yer}</small>${simdi ? '<span class="ysm-rozet">seçili yıl bu dönemde</span>' : ''}</h4><div class="rolegrid">${d.roller.map(r => kart(d, r)).join('')}</div></div>`; }).join('')}`,
      onShow: yasaCiz }));
    tabs.unshift({ ad: `📅 ${YIL.fmt(yy)} ±${YASA_PAY}`, html: yasaPencereHTML(yy, kart), onShow: yasaCiz });
    if (guc.length + halk.length && yy === y) {
      const eski = r => `<button class="rolecard${r.guc ? ' guc' : ''}" data-role="${r.id}"><canvas data-rolecv="${r.id}"></canvas><b>${r.ikon} ${r.ad}</b><small>${fill(r.kim, rolDegisken(r))}</small></button>`, tum = [...guc, ...halk];
      tabs.splice(1, 0, { ad: `⭐ ${BG.ad || 'Bu bölge'}`, html: `<p class="note">Seçili yıl ve bölge için özel, ayrıntılı hayatlar.</p>${guc.length ? `<h4 class="rolbas">👑 Güç sahibi hayatlar</h4><div class="rolegrid">${guc.map(eski).join('')}</div>` : ''}${halk.length ? `<h4 class="rolbas">🌾 Sıradan hayatlar</h4><div class="rolegrid">${halk.map(eski).join('')}</div>` : ''}`,
        onShow: b => b.querySelectorAll('[data-rolecv]').forEach(cvEl => { const r = tum.find(x => x.id === cvEl.dataset.rolecv); liveCanvas(cvEl, (ctx, w, h, t) => S.drawOn(ctx, A => C.drawLife(ctx, w, h, r.adimlar[1], t, A, rolCizimOpt(r))), false); }) });
    }
    // 🐾 Hayvan Olarak Yaşa ve 🌿 Bitki / Ağaç Olarak Yaşa sekmeleri (data/yasam-doga.js)
    const YD = window.YASAM_DOGA;
    if (YD) {
      const ydKart = x => `<button class="yd-kart" data-yd="${x.id}"><span class="yd-ik">${x.ik}</span><div><b>${esc(x.ad)}</b><small>⏳ ${esc(x.omur)}</small><p>${esc(x.beslenme)}</p></div></button>`;
      const ekIdx = (guc.length + halk.length && yy === y) ? 2 : 1;
      tabs.splice(ekIdx, 0,
        { ad: '🐾 Hayvan Olarak Yaşa', html: `<p class="note">Yaşayan veya nesli tükenmiş bir hayvan seç: ömrünü, nasıl beslendiğini, yaşam alanını ve bir gününü keşfet!</p><div class="yd-grid">${(YD.hayvanlar || []).map(ydKart).join('')}</div>` },
        { ad: '🌿 Bitki Olarak Yaşa', html: `<p class="note">Bir ağaç, çöl kaktüsü, etçil bitki ya da orman mantar ağı ol: yüzlerce yıllık yaşamı ve hayatta kalma stratejilerini keşfet!</p><div class="yd-grid">${(YD.bitkiler || []).map(ydKart).join('')}</div>` }
      );
    }
    // açılış sekmesi: seçili yılın ±100 yılındaki hayatlar (bütün kıtalar, seçili bölgenin kıtası önce)
    showModal({ ikon: '🧑‍🌾', title: 'Yaşa: insan, hayvan ya da bitki olarak…', sub: `${YIL.fmt(yy)} civarında veya doğanın kalbinde nasıl bir hayatın olurdu?`, tabs, open: 0 });
  }
  function openYasamDoga(id) {
    const YD = window.YASAM_DOGA || {};
    const o = [...(YD.hayvanlar || []), ...(YD.bitkiler || [])].find(x => x.id === id);
    if (!o) return;
    kesifKaydet('yasamdoga', o.id);
    const bitki = o.tur === 'bitki';
    const donguHTML = (o.dongu || []).map(([bas, met]) => `<div class="yd-adim"><b>${esc(bas)}</b><p>${esc(met)}</p></div>`).join('');
    const html = `<div class="kapak" data-kapak="${esc(o.w)}"></div>
      <span class="pill">${bitki ? '🌿 Bitki / Ağaç Yaşamı' : '🐾 Hayvan Yaşamı'} · ⏳ ${esc(o.omur)}</span>
      ${rowsHTML([['Ömür', o.omur], ['Beslenme', o.beslenme], ['Yaşam Alanı', o.alan], ['Süper Güç', o.superguc], ['Başlıca Tehditler', o.tehdit]])}
      <h4>🔄 ${bitki ? 'Yaşam Döngüsü ve Mevsimler' : 'Bir Günün ve Yaşam Döngün'}</h4>
      <div class="yd-adimlar">${donguHTML}</div>
      <div class="gos">
        ${o.ll ? `<button class="phbtn icbtn" data-yd-kure="${o.ll[0]}|${o.ll[1]}|${esc(o.ik + ' ' + o.ad)}">🌍 Yaşam Alanını Kürede Gör</button>` : ''}
        <button class="phbtn" data-yasa="1">← Yaşa Menüsüne Dön</button>
      </div>`;
    showModal({ ikon: o.ik, title: `${o.ad} Olarak Yaşa`, sub: `${o.omur} · ${o.alan}`, tabs: [
      { ad: `${o.ik} Yaşam`, html, onShow: b => kapakYukle(b.querySelector('.kapak')) },
      ...(o.w ? [photoTab(o.w, 8, true)] : [])
    ] });
  }
  function openYasamRol(id) {
    const o = yasamBul(id); if (!o) return; const { k, d, r } = o, opt = yasamOpt(d, r), n = r.gun.length;
    // Yaşa penceresinde seçilen yıl bu dönemdeyse o yıla, değilse dönemin ortasına götürülür
    const secili = yasaYil != null && yasaYil <= d.from && yasaYil >= d.to;
    const orta = secili ? yasaYil : d.to <= -2026 ? -2000 : Math.round((d.from + d.to) / 2), icinde = Math.round(Y) === orta;
    const tabs = r.gun.map((st, i) => ({ ad: `${i + 1}. ${st.saat}`, html: `<canvas class="lifecv"></canvas><p class="lifetext">${st.metin}</p><div class="gos"><button class="phbtn" data-next="${i + 1}">${i + 1 < n ? 'Sonraki ▶' : 'Ne yerdin, nasıl yaşardın? ▶'}</button></div>`,
      onShow: b => liveCanvas(b.querySelector('.lifecv'), (ctx, w, h, t) => S.drawOn(ctx, A => C.drawLife(ctx, w, h, st, t, A, opt)), true) }));
    tabs.push({ ad: '🍲 Yemek ve ev', html: `<h4>🍲 Ne yerdin?</h4><p>${r.yemek}</p><h4>🏠 Nasıl bir evde yaşardın?</h4><p>${r.ev}</p><div class="gos"><button class="phbtn" data-next="${n + 1}">Koşulların nasıldı? ▶</button></div>` });
    tabs.push({ ad: '⚖️ Koşullar', html: `<h4>⚖️ Çalışma, haklar, sağlık</h4><ul class="hap">${r.sartlar.map(s => `<li>${s.replace(/^([^:]+):/, '<b>$1:</b>')}</li>`).join('')}</ul><div class="gos"><button class="phbtn" data-next="${n + 2}">Ne hissederdin? ▶</button></div>` });
    tabs.push({ ad: '💭 Ne hissederdin?', html: `<h4>💭 Ne hissederdin?</h4><p>${r.his}</p><h4>📌 Gerçekler</h4><ul class="hap">${r.gercek.map(x => `<li>${x}</li>`).join('')}</ul>
      <div class="gos">${icinde ? '' : `<button class="phbtn" data-ygit="${orta}">⏩ Zamanı oraya götür (${YIL.fmt(orta)})</button>`}<button class="phbtn" data-yasa="1">🧑‍🌾 Başka bir hayat seç</button></div>` });
    showModal({ ikon: r.ikon, title: `${r.ad} olarak bir gün`, sub: `${k.ikon} ${secili ? `${YIL.fmt(yasaYil)} civarı · ` : ''}${d.ad} · ${d.aralik} · ${d.yer}`, tabs });
  }
  function yasaAc() { openYasam(); }
  document.querySelectorAll('[data-mod]').forEach(b => b.addEventListener('click', () => {
    const m = b.dataset.mod;
    if (m === 'kesfet') { kartlariKapat(); setView('dunya'); }
    else if (m === 'sahne') { if (DUNYA) sahneSec(); else { kartlariKapat(); setView('sahne'); } }
    else if (m === 'yasa') yasaAc();
    else if (m === 'dog') { if (!DUNYA) { location.href = location.pathname + '?dog=1'; return; } kartlariKapat(); closeModal(); (window.OyunYukle ? window.OyunYukle('kim') : Promise.resolve()).then(() => { if (window.Hayat) window.Hayat.basla(); }).catch(() => {}); }
  }));

  // ---------- bilgi penceresi (sekmeli) ----------
  const modal = $('#modal');
  // Yaşa penceresinde "Başka bir yıl dene" formu
  modal.addEventListener('submit', e => {
    const f = e.target.closest('[data-yform]'); if (!f) return; e.preventDefault();
    const n = Math.round(+f.querySelector('input').value); if (!n || n < 1) return;
    openYasam(clamp(f.querySelector('select').value === 'mo' ? n : -n, -YIL.BUGUN, 100000));
  });
  let playingBeforeModal = false;
  function showModal(o) {
    modal.querySelector('.mi').textContent = o.ikon || 'ℹ️';
    modal.querySelector('h2').textContent = o.title;
    modal.querySelector('.msub').innerHTML = o.sub || '';
    const nav = modal.querySelector('.tabs'), body = modal.querySelector('.mbody');
    nav.innerHTML = o.tabs.map((t, i) => `<button data-tab="${i}" class="${i ? '' : 'on'}">${t.ad}</button>`).join('');
    const show = i => {
      body.innerHTML = o.tabs[i].html || ''; body.scrollTop = 0;
      nav.querySelectorAll('button').forEach((b, j) => b.classList.toggle('on', i === j));
      if (o.tabs[i].onShow) o.tabs[i].onShow(body);
    };
    nav.onclick = e => { const b = e.target.closest('[data-tab]'); if (b) show(+b.dataset.tab); };
    if (modal.hidden) { playingBeforeModal = playing; playing = false; updPlay(); }
    kartlariKapat('modal');
    modal.hidden = false;
    show(o.open || 0);
  }
  function closeModal() { modal.hidden = true; if (playingBeforeModal) { playing = true; updPlay(); } }
  modal.addEventListener('click', e => {
    if (e.target === modal || e.target.closest('.x')) return closeModal();
    const go = e.target.closest('[data-go]');
    if (go) { setYear(+go.dataset.go, true); playingBeforeModal = false; closeModal(); return; }
    const sh = e.target.closest('[data-show]');
    if (sh) { playingBeforeModal = false; closeModal(); showInScene(JSON.parse(sh.dataset.show)); return; }
    const gg0 = e.target.closest('[data-gocgit]'); if (gg0) { gocGit(gg0.dataset.gocgit); return; }
    const hg0 = e.target.closest('[data-hayvangit]'); if (hg0) { playingBeforeModal = false; hayvanKurede(hg0.dataset.hayvangit); return; }
    const cg0 = e.target.closest('[data-coggoster]'); if (cg0) { playingBeforeModal = false; cografyaKurede(cg0.dataset.coggoster); return; }
    const dn0 = e.target.closest('[data-donumkure]'); if (dn0) { const d = (window.DONUM_NOKTALARI || []).find(x => x.id === dn0.dataset.donumkure); if (d) { playingBeforeModal = false; closeModal(); if (view !== 'dunya') setView('dunya'); DN.setLayer('donum', true); renderOlayPanel(); DN.goTo(d.ll[0], d.ll[1], 3.8); DN.pin(d.ll[0], d.ll[1], '⚡ ' + d.ad); } return; }
    const mg0 = e.target.closest('[data-magarakure]'); if (mg0) { const m = (window.ATLAS_MAGARALAR || []).find(x => x.id === mg0.dataset.magarakure); if (m) { playingBeforeModal = false; closeModal(); if (view !== 'dunya') setView('dunya'); DN.setLayer('magara', true); if (Y < 3000) setYear(5000, true); renderOlayPanel(); DN.goTo(m.ll[0], m.ll[1], 4.2); DN.pin(m.ll[0], m.ll[1], '🪨 ' + m.ad); } return; }
    const sp0 = e.target.closest('[data-surprizoku]'); if (sp0) { const sp = (window.ATLAS_SURPRIZLER || []).find(x => x.id === sp0.dataset.surprizoku); if (sp) openSurpriz(sp); return; }
    const tb0 = e.target.closest('[data-tbgun]'); if (tb0) { const [ty, la, lo, tad] = tb0.dataset.tbgun.split('|'); playingBeforeModal = false; closeModal(); if (view !== 'dunya') setView('dunya'); setYear(+ty, true); DN.goTo(+la, +lo, 4.5); DN.pin(+la, +lo, '📅 ' + tad); return; }
    const ak0 = e.target.closest('[data-atlaskure]'); if (ak0) { const [kat, la, lo, ad] = ak0.dataset.atlaskure.split('|'); playingBeforeModal = false; closeModal(); if (view !== 'dunya') setView('dunya'); if (kat) DN.setLayer(kat, true); renderOlayPanel(); DN.goTo(+la, +lo, kat === 'hayvangoc' ? 2.6 : 5.2); DN.pin(+la, +lo, ad); return; }
    const yya = e.target.closest('[data-yy-ac]'); if (yya) { const yy = (window.ATLAS_YAYILIS || []).find(x => x.id === yya.dataset.yyAc); if (yy) openYayilis(yy); return; }
    const yyk = e.target.closest('[data-yy-kure]'); if (yyk) { const yy = (window.ATLAS_YAYILIS || []).find(x => x.id === yyk.dataset.yyKure); if (yy) { playingBeforeModal = false; closeModal(); if (view !== 'dunya') setView('dunya'); DN.setLayer('yayilis', true); if (DN.setYayilis) DN.setYayilis(yy.id); renderOlayPanel(); const mid = yy.pts && yy.pts.length ? yy.pts[Math.floor(yy.pts.length / 2)] : yy.ll; DN.goTo(mid[0], mid[1], 2.2); DN.pin(yy.ll[0], yy.ll[1], (yy.ik || '🧭') + ' ' + yy.ad); toast(`${yy.ik || '🧭'} <b>${esc(yy.ad)}</b> · Yayılış rotası kürede canlı gösteriliyor.`); } return; }
    if (e.target.closest('[data-yy-galeri]')) { openYayilisGaleri(); return; }
    if (e.target.closest('[data-tbrastgele]')) { const L = window.TARIHTE_BUGUN || []; if (L.length) openTarihteBugun(L[Math.floor(Math.random() * L.length)]); return; }
    const aa0 = e.target.closest('[data-atlas-ac]'); if (aa0) { playingBeforeModal = false; closeModal(); if (view !== 'dunya') setView('dunya'); DN.setLayer(aa0.dataset.atlasAc, true); renderOlayPanel(); toast('🌊 Akıntılar, girdaplar ve fırtına alanları açıldı.'); return; }
    const kf0 = e.target.closest('[data-kf]'); if (kf0) {
      if (kf0.dataset.kf === 'doga') { closeModal(); if (view !== 'dunya') setView('dunya'); atlasModUygula('doga'); }
      else if (kf0.dataset.kf === 'surpriz') { openKesif('surpriz'); }
      else if (kf0.dataset.kf === 'paylas') {
        const { g, t, xp } = kesifSayi(), met = `🧭 Zaman Yolculuğu · Keşif Defterim\n⭐ ${xp} XP · 🌍 ${g} / ${t} dünya keşfi tamamlandı!\n${location.origin}${location.pathname}`;
        (navigator.clipboard ? navigator.clipboard.writeText(met) : Promise.reject()).then(() => { kf0.textContent = '✓ Kopyalandı'; }, () => { kf0.textContent = 'Kopyalanamadı'; });
      }
      return;
    }
    const yg0 = e.target.closest('[data-yapigit]'); if (yg0) { playingBeforeModal = false; yapiKurede(yg0.dataset.yapigit); return; }
    const yy0 = e.target.closest('[data-yakinyapi]'); if (yy0) { const i = yy0.dataset.yakinyapi; if (/^yp:/.test(i)) openYapi(i); else showMonument(i); return; }
    const ph = e.target.closest('[data-photos]');
    if (ph) { const box = ph.parentElement.querySelector('.ph-box'); ph.remove(); loadPhotos(ph.dataset.photos, box, 6); return; }
    const icb = e.target.closest('[data-ic]'); if (icb) { zoomInto(icb.dataset.ic); return; }
    const gb = e.target.closest('[data-god]'); if (gb) { openGod(gb.dataset.god); return; }
    const mb = e.target.closest('[data-mumya]'); if (mb) { openMummy(mb.dataset.mumya); return; }
    const rb = e.target.closest('[data-role]'); if (rb) { openRole(rb.dataset.role); return; }
    if (e.target.closest('[data-yasa]')) { openYasam(yasaYil ?? undefined); return; }
    if (e.target.closest('.lifebtn')) { openYasam(); return; }
    const yyb = e.target.closest('[data-yyil]'); if (yyb) { const v = yyb.dataset.yyil; openYasam(v === 'rastgele' ? Math.round(YASA_EN_ESKI - Math.random() * (YASA_EN_ESKI + YIL.BUGUN)) : +v); return; }
    const yr = e.target.closest('[data-yrol]'); if (yr) { openYasamRol(yr.dataset.yrol); return; }
    const yd = e.target.closest('[data-yd]'); if (yd) { openYasamDoga(yd.dataset.yd); return; }
    const yds = e.target.closest('[data-yd-sec]'); if (yds) {
      const [yid, sec] = yds.dataset.ydSec.split('|');
      const YD = window.YASAM_DOGA || {};
      const o = [...(YD.hayvanlar || []), ...(YD.bitkiler || [])].find(x => x.id === yid);
      if (o && o.karar && o.karar[sec]) {
        const k = o.karar[sec], kutu = yds.closest('.yd-karar'), son = kutu && kutu.querySelector('.yd-sonuc');
        kutu.querySelectorAll('[data-yd-sec]').forEach(b => { b.disabled = true; b.classList.toggle('on', b === yds); });
        if (son) {
          son.hidden = false;
          son.className = 'yd-sonuc ' + (k.dogru ? 'iyi' : 'uyari');
          son.innerHTML = `<b>${k.dogru ? '✅ Doğru Hayatta Kalma Kararı! (+10 XP)' : '⚠️ Zorlu Seçim!'}</b><p>${esc(k.sonuc)}</p>`;
        }
        if (k.dogru) xpEkle(10, 'yasamdoga');
      }
      return;
    }
    const ydk = e.target.closest('[data-yd-kure]'); if (ydk) {
      const [la, lo, ad] = ydk.dataset.ydKure.split('|');
      playingBeforeModal = false; closeModal(); if (view !== 'dunya') setView('dunya');
      DN.goTo(+la, +lo, 3.8); DN.pin(+la, +lo, ad);
      return;
    }
    const yy = e.target.closest('[data-ygit]'); if (yy) { setYear(+yy.dataset.ygit, true); playingBeforeModal = false; closeModal(); return; }
    const yh = e.target.closest('[data-yolharita]'); if (yh) { const t = TICARET_YOLLARI.find(x => x.id === yh.dataset.yolharita); DN.setLayer('ticaret', true); playingBeforeModal = false; yolHaritada(t.pts, kmYol(t.pts)); return; }
    const yg2 = e.target.closest('[data-yolcugoster]'); if (yg2) { const j = YOLCULUKLAR.find(x => x.id === yg2.dataset.yolcugoster); DN.setLayer('yolculuk', true); playingBeforeModal = false; yolHaritada(j.pts, j.km, j.y); return; }
    const g2 = e.target.closest('[data-gitbolge2]'); if (g2) { gitBolge(g2.dataset.gitbolge2); return; }
    const yg = e.target.closest('[data-yasagit]'); if (yg) { const [b, y] = yg.dataset.yasagit.split('|'); location.href = location.pathname + '?bolge=' + b + '&yil=' + y + '&yasa=1'; return; }
    const nx = e.target.closest('[data-next]'); if (nx) { const btn = modal.querySelector(`.tabs [data-tab="${nx.dataset.next}"]`); if (btn) btn.click(); return; }
    const sy = e.target.closest('[data-sym]');
    if (sy) { openSymbol(sy.dataset.sym); return; }
    const inf = e.target.closest('[data-info]');
    if (inf) { openInfo(inf.dataset.info); }
  });
  window.addEventListener('keydown', e => { if (e.key === 'Escape' && !modal.hidden) closeModal(); });

  // Sahnede göster: gerekirse çağ değiştirir, yılı ayarlar, kamerayı yapıya götürür
  function showInScene(t) {
    if (DUNYA) { const p = t.place && PARTS.find(q => q.id === t.place); if (t.y != null) setYear(t.y, true); if (p) gitBolge(p.bolge, t.id ? '&yapi=' + t.id : ''); return; }
    if (t.nil) { openNile(); return; }
    if (t.place && !P.composite && P.id !== t.place) switchPlace(t.place, t.y);
    else if (t.y != null) setYear(t.y, true);
    syncScenePart();
    setView('sahne');
    if (t.id) {
      const m = SP.monuments.find(x => x.id === t.id);
      if (m) { follow = false; camHedef = null; camX = m.wx; }
    }
  }

  // ---------- gerçek fotoğraflar (Vikipedi / Wikimedia Commons) ----------
  const photoCache = new Map();
  const API = 'https://en.wikipedia.org/w/api.php?format=json&origin=*&';
  const strip = h => { const d = document.createElement('div'); d.innerHTML = h || ''; return (d.textContent || '').trim().replace(/\s+/g, ' ').slice(0, 80); };
  // harita: kişiler için haritalar, planlar ve SVG çizimler de gösterilir (sefer haritaları gibi)
  async function fetchPhotos(title, harita) {
    const ck = title + (harita ? '|h' : '');
    if (photoCache.has(ck)) return photoCache.get(ck);
    const q = API + 'action=query&redirects=1&generator=images&gimlimit=60&prop=imageinfo&iiprop=url|mime|size|extmetadata&iiurlwidth=900&titles=' + encodeURIComponent(title);
    const lead = API + 'action=query&redirects=1&prop=pageimages&piprop=name&titles=' + encodeURIComponent(title);
    const [j, lj] = await Promise.all([fetch(q).then(r => r.json()), fetch(lead).then(r => r.json()).catch(() => ({}))]);
    const leadName = Object.values(lj.query?.pages || {})[0]?.pageimage;
    const bad = /(logo|icon|map|karte|locator|location|flag|symbol|commons|wiki|edit|question|plan|diagram|chart|graph|sign|coa|seal|\.svg|stub|disambig|pictogram|hiero_|hieroglyph_)/i;
    const badH = /(logo|icon|locator|location|flag|symbol|commons|wiki|edit|question|sign|coa|seal|stub|disambig|pictogram|signature|imza|wappen|emblem|lock|padlock|silhouette|placeholder|allah|calligraph|audio|speaker|portal|crystal_clear|nuvola|red_pog|blank)/i;
    const haritaAd = /(map|karte|carte|harita|mapa|campaign|battle|empire|conquest|territor|expansion|route|voyage|journey|invasion|siege)/i;
    let list = Object.values(j.query?.pages || {}).map(p => ({ t: p.title, i: (p.imageinfo || [])[0] })).filter(o => o.i && (harita ? !badH.test(o.t) && ((/svg/.test(o.i.mime) && haritaAd.test(o.t)) || (/jpe?g|png/.test(o.i.mime) && o.i.width >= 400)) : /jpe?g|png/.test(o.i.mime) && o.i.width >= 500 && !bad.test(o.t)));
    list.sort((a, b) => (b.t.replace(/ /g, '_').endsWith(leadName || '#') ? 1 : 0) - (a.t.replace(/ /g, '_').endsWith(leadName || '#') ? 1 : 0));
    const out = list.map(o => {
      const md = o.i.extmetadata || {};
      return { src: o.i.thumburl || o.i.url, page: o.i.descriptionurl, by: strip(md.Artist?.value) || 'bilinmiyor', lic: md.LicenseShortName?.value || '', cap: strip(md.ImageDescription?.value) };
    });
    photoCache.set(ck, out);
    return out;
  }
  async function loadPhotos(title, box, n = 8, harita) {
    box.innerHTML = '<p class="note">Fotoğraflar yükleniyor…</p>';
    try {
      const ph = (await fetchPhotos(title, harita)).slice(0, n);
      if (!ph.length) { box.innerHTML = '<p class="note">Bu konu için uygun fotoğraf bulunamadı.</p>'; return; }
      box.innerHTML = `<div class="photos">${ph.map(p => `<figure><a href="${esc(p.page)}" target="_blank" rel="noopener"><img loading="lazy" src="${esc(p.src)}" alt="${esc(p.cap || title)}"></a>
        <figcaption>${p.cap ? esc(p.cap) + '<br>' : ''}<span>Fotoğraf: ${esc(p.by)}${p.lic ? ' · ' + esc(p.lic) : ''} · Wikimedia Commons</span></figcaption></figure>`).join('')}</div>
        <p class="note">Fotoğraflar Vikipedi'deki "${esc(title)}" sayfasından, Wikimedia Commons lisanslarıyla gösteriliyor. Büyütmek ve lisans ayrıntıları için fotoğrafa tıkla.</p>`;
    } catch (err) {
      box.innerHTML = '<p class="note">Fotoğraflar yüklenemedi. İnternet bağlantısını kontrol edip tekrar dene.</p>';
    }
  }
  const photoTab = (title, n, harita) => ({ ad: '📷 Fotoğraflar', html: '<div class="ph-box"></div>', onShow: body => loadPhotos(title, body.querySelector('.ph-box'), n, harita) });

  // ---------- kapak fotoğrafı: Vikipedi sayfasının ana görseli (yalnızca özgür lisanslı), çekeni ve lisansıyla ----------
  const kapakCache = new Map();
  async function kapakFoto(title) {
    if (kapakCache.has(title)) return kapakCache.get(title);
    const j = await fetch(API + 'action=query&redirects=1&prop=pageimages&piprop=name|thumbnail&pithumbsize=1000&titles=' + encodeURIComponent(title)).then(r => r.json());
    const p = Object.values(j.query?.pages || {})[0] || {};
    let o = null;
    if (p.thumbnail && p.pageimage) {
      const f = await fetch(API + 'action=query&prop=imageinfo&iiprop=url|extmetadata&titles=' + encodeURIComponent('File:' + p.pageimage)).then(r => r.json()).catch(() => ({}));
      const ii = ((Object.values(f.query?.pages || {})[0] || {}).imageinfo || [])[0] || {}, md = ii.extmetadata || {};
      o = { src: p.thumbnail.source, page: ii.descriptionurl || 'https://commons.wikimedia.org/wiki/File:' + encodeURIComponent(p.pageimage), by: strip(md.Artist?.value) || 'bilinmiyor', lic: md.LicenseShortName?.value || '' };
    }
    kapakCache.set(title, o);
    return o;
  }
  async function kapakYukle(box) {
    if (!box || !box.dataset.kapak) return;
    box.innerHTML = '<div class="kapak-bos">📷</div>';
    try {
      const o = await kapakFoto(box.dataset.kapak);
      if (!box.isConnected) return;
      if (!o) { box.remove(); return; }
      box.innerHTML = `<a href="${esc(o.page)}" target="_blank" rel="noopener"><img src="${esc(o.src)}" alt=""></a><small>Fotoğraf: ${esc(o.by)}${o.lic ? ' · ' + esc(o.lic) : ''} · Wikimedia Commons</small>`;
    } catch (e) { if (box.isConnected) box.remove(); }
  }
  // Vikipedi özeti: Türkçe sayfası varsa onun, yoksa İngilizce sayfanın giriş paragrafı
  const ozetCache = new Map();
  async function vikiOzet(w) {
    if (ozetCache.has(w)) return ozetCache.get(w);
    const j = await fetch(API + 'action=query&redirects=1&prop=langlinks&lllang=tr&titles=' + encodeURIComponent(w)).then(r => r.json());
    const tr = (Object.values(j.query?.pages || {})[0] || {}).langlinks?.[0]?.['*'];
    const u = tr ? 'https://tr.wikipedia.org/api/rest_v1/page/summary/' + encodeURIComponent(tr.replace(/ /g, '_')) : 'https://en.wikipedia.org/api/rest_v1/page/summary/' + encodeURIComponent(w.replace(/ /g, '_'));
    const s = await fetch(u).then(r => r.json());
    const o = { metin: s.extract || '', link: s.content_urls?.desktop?.page, tr: !!tr };
    ozetCache.set(w, o);
    return o;
  }

  // ---------- 🏛️ ünlü yapı kartı (data/yapilar): açılır açılmaz fotoğraf, kısa bilgi, Vikipedi özeti ----------
  const YAPI = new Map((window.YAPILAR || []).map(y => [y.id, y]));
  const YP_IKON = { mosque: '🕌', kabe: '🕋', church: '⛪', citadel: '🏰', saray: '🏯', tower: '🗼', eyfel: '🗼', gokdelen: '🏙️', modcity: '🏙️', kopru: '🌉', museum: '🏛️', kolonad: '🏛️', arena: '🏟️', heykel: '🗿', anit: '🗿', kemer: '🏛️', torii: '⛩️', pagoda: '🛕', prang: '🛕', stupa: '☸️', turbe: '🕌', tac: '🕌', sahel: '🕌', city: '🏛️', rocktemple: '⛰️', sur: '🧱', dam: '🌊', lighthouse: '🗼', opera: '🎭', obelisk: '🗿', step: '🛕', terrace: '⛰️', mastaba: '⛰️', temple: '🛕', ziggurat: '🛕' };
  const YP_ONEM = { 5: 'Dünyaca ünlü', 4: 'Çok ünlü', 3: 'Ülke çapında ünlü', 2: 'Bölgesinde ünlü', 1: 'Yerel halkın sevdiği' };
  function openYapi(id, kids) {
    const y = YAPI.get(String(id).replace(/^yp:/, '')); if (!y) return;
    const yilYazi = y.yil || YIL.fmt(y.y);
    const yakin = (kids || []).map(o => o.it).filter(it => it.id !== 'yp:' + y.id);
    const ayakta = Y <= y.y && (y.yik == null || Y > y.yik);
    const icindeyil = v => v <= P.from && v >= P.to;
    const rows = [['Yer', `${esc(y.sehir)}, ${esc(y.ulke)}`], ['Yapım', esc(yilYazi)], ...(y.yik != null ? [['Yıkıldı', YIL.fmt(y.yik)]] : []), ['Ünü', YP_ONEM[y.o] || '']];
    const genel = `<div class="kapak" data-kapak="${esc(y.w)}"></div>
      ${ayakta ? '' : `<span class="pill">${YIL.fmt(Math.round(Y))}: ${Y > y.y ? 'henüz yapılmadı' : 'artık yok'}</span>`}
      <p class="yp-k">${esc(y.k)}</p>${rowsHTML(rows)}
      ${y.i ? `<div class="did"><b>💡 Biliyor muydun?</b><p>${esc(y.i)}</p></div>` : ''}
      <h4>📖 Vikipedi'den</h4><div class="yp-ozet"><p class="note">Özet yükleniyor…</p></div>
      <div class="gos"><button class="phbtn" data-yapigit="${y.id}">🌍 Kürede göster</button>${icindeyil(y.y) && Y > y.y ? `<button class="phbtn" data-go="${y.y}">⏩ Yapıldığı yıla git</button>` : ''}</div>
      ${yakin.length ? `<div class="yakin"><small>📍 Aynı yerde ${yakin.length} yapı daha:</small><div class="chips">${yakin.slice(0, 10).map(it => `<button data-yakinyapi="${esc(it.id)}">${esc(it.ad)}</button>`).join('')}</div></div>` : ''}`;
    const tabs = [
      { ad: 'Genel', html: genel, onShow: async body => {
        kapakYukle(body.querySelector('.kapak'));
        const kutu = body.querySelector('.yp-ozet');
        try {
          const o = await vikiOzet(y.w); if (!kutu.isConnected) return;
          kutu.innerHTML = o.metin ? `<p>${esc(o.metin)}</p>${o.tr ? '' : '<p class="note">Türkçe Vikipedi\'de bu yapının sayfası yok; İngilizce özet gösteriliyor.</p>'}<p><a href="${esc(o.link || 'https://en.wikipedia.org/wiki/' + encodeURIComponent(y.w))}" target="_blank" rel="noopener">Vikipedi\'de devamını oku ↗</a></p>` : '<p class="note">Özet bulunamadı.</p>';
        } catch (e) { if (kutu.isConnected) kutu.innerHTML = '<p class="note">Özet yüklenemedi. İnternet bağlantısını kontrol edip tekrar dene.</p>'; }
      } },
      ...(y.d || []).map(([ad, html]) => ({ ad, html })),
      photoTab(y.w, 8)
    ];
    showModal({ ikon: YP_IKON[y.t] || '🏛️', title: y.ad, sub: `${esc(y.sehir)}, ${esc(y.ulke)} · ${esc(yilYazi)}`, tabs });
  }
  function yapiKurede(id) {
    const y = YAPI.get(id); if (!y) return;
    closeModal(); if (view !== 'dunya') setView('dunya');
    DN.goTo(y.ll[0], y.ll[1], Math.max(DN.view.z, YP_Z[y.o] + 4, 8)); DN.pin(y.ll[0], y.ll[1], y.ad);
  }

  const rowsHTML = rows => `<table class="tech">${rows.map(([k, v]) => `<tr><th>${k}</th><td>${v}</td></tr>`).join('')}</table>`;
  function altTab(id) {
    const a = (MIS.alt || {})[id]; if (!a) return null;
    return { ad: (id === 'krallar' ? '⚱️ ' : '🔎 ') + a.baslik, html: `<div class="alt">${a.items.map(it => `<details class="altit">
      <summary><b>${it.kod}</b> · ${it.ad} <small>${it.yil !== '-' ? '· ' + it.yil : ''}</small></summary>
      <table class="tech"><tr><th>Bulan</th><td>${it.bulan}</td></tr><tr><th>Yıl</th><td>${it.yil}</td></tr><tr><th>İçinden çıkanlar</th><td>${it.icinden}</td></tr></table>
      <p>${it.not}</p><button class="phbtn" data-photos="${esc(it.wiki)}">📷 Fotoğraflarını göster</button><div class="ph-box"></div></details>`).join('')}</div>` };
  }
  function openInfo(id, fallbackName) {
    if (id === 'nil') return openNile();
    if ((id === 'gunes' || id === 'ay') && !BG.kultur) { const gk = (MIS.gokyuzu || {})[id]; if (gk) showModal({ ikon: gk.ikon, title: gk.title, sub: gk.sub, tabs: gk.tabs }); return; }
    if (id === 'gunes') return openSun();
    if (id === 'ay') return openMoon();
    const b0 = bilgiOf(id); if (!b0) return;
    const b = b0.ref ? bilgiOf(b0.ref) : b0;
    const m = monOf(id);
    const y = Math.round(Y);
    let durum = '';
    if (m) {
      const p = S.progress(m, y), fin = m.stop || m.end;
      if (p < 0) durum = `${YIL.fmt(y)}: henüz başlanmadı (başlangıç ${YIL.fmt(m.start)})`;
      else if (m.ruin && y <= m.ruin) durum = `${YIL.fmt(y)}: terk edilmiş / harabe`;
      else if (m.stop && y <= m.stop) durum = `${YIL.fmt(y)}: yarım kaldı (${YIL.fmt(m.stop)}'te durdu)`;
      else if (p >= 1) durum = `${YIL.fmt(y)}: tamamlanmış (${YIL.fmt(m.end)})`;
      else durum = `${YIL.fmt(y)}: inşaat sürüyor, %${Math.round(p * 100)} tamam`;
      const inRange = v => v <= P.from && v >= P.to;
      durum = `<span class="pill">${durum}</span><span class="gos">
        ${inRange(m.start) ? `<button data-go="${m.start}">⏮ Başlangıca git (${YIL.fmt(m.start)})</button>` : ''}
        ${inRange(fin) ? `<button data-go="${fin}">⏭ ${m.stop ? 'Durduğu' : 'Bittiği'} yıla git (${YIL.fmt(fin)})</button>` : ''}
        ${view === 'dunya' ? `<button data-show='${JSON.stringify({ id: m.id })}'>🎬 Sahnede göster</button>` : ''}
        ${icOf(id) ? `<button class="icbtn" data-ic="${id}">🔍 Yakınlaş: içine gir</button>` : ''}</span>`;
    }
    const isMon = !!m || /mastaba/.test(id);
    const tabs = [
      { ad: 'Genel', html: `${durum}${rowsHTML([['Dönem', b.donem], [b.yaptiran ? 'Yaptıran' : 'Firavun', b.yaptiran || b.firavun], ...(m ? [['Yer', m.yer]] : []), ...(isMon ? [['Yapım süresi', b.sure]] : [])])}
          <h4>Neden yapıldı?</h4><p>${b.neden}</p><h4>Tarihsel önemi</h4><p>${b.onem}</p>` },
      { ad: isMon ? 'Teknik özellikler' : 'Özellikler', html: rowsHTML(b.teknik) + (isMon ? '<p class="note">Ölçüler yaklaşıktır.</p>' : '') },
      { ad: isMon ? 'Nasıl yapıldı?' : 'Nasıl işliyordu?', html: `${isMon ? rowsHTML([['Mimar', b.mimar], ['Süre', b.sure]]) : ''}<p>${b.nasil}</p>` },
      { ad: 'Bugün', html: `<h4>Bugün</h4><p>${b.bugun}</p><div class="did"><b>💡 Biliyor muydun?</b><p>${b.ilginc}</p></div>` }
    ];
    const at = altTab(b0.ref || id); if (at) tabs.splice(1, 0, at);
    if (icOf(id)) { const sc = K.ic.sahneler[icOf(id)]; tabs.splice(1, 0, { ad: '🖼️ Duvar resimleri', html: `<h4>${sc.ad}</h4><p>${sc.alt}.</p><p>İçeri girince duvardaki resimlerin ve yazıtların ne anlama geldiğini numaralara tıklayarak öğrenebilirsin.</p><button class="phbtn icbtn" data-ic="${id}">🔍 Yakınlaş: içine gir</button><p class="note">${sc.not}</p>` }); }
    const wt = (MIS.wiki || {})[id]; if (wt) tabs.push(photoTab(wt, 8));
    // kart açılır açılmaz yapının gerçek bir fotoğrafı (Vikipedi sayfasının ana görseli)
    if (wt) { tabs[0].html = `<div class="kapak" data-kapak="${esc(wt)}"></div>` + tabs[0].html; tabs[0].onShow = body => kapakYukle(body.querySelector('.kapak')); }
    showModal({ ikon: b.ikon, title: m ? m.ad.replace(/ \((basamaklı|düz yüzlü kaplama)\)/, '') : fallbackName, sub: `${m ? m.yer + ' · ' : ''}${b.donem}`, tabs });
  }
  function openNile() {
    const n = MIS.nil; if (!n) return;
    showModal({ ikon: n.ikon, title: n.title, sub: n.sub, tabs: [...n.tabs, photoTab(n.foto || 'Nile', 8)] });
  }
  function openCountry() {
    const Q = SP;
    showModal({ ikon: BG.ikon, title: `${Q.modern || !BG.kultur ? BG.ad : BG.antikAd} hakkında · ${Q.kisa}`, sub: Q.ulkeAlt || Q.baslik,
      tabs: [...Q.ulke.map(t => ({ ad: `${t.ikon} ${t.ad}`, html: t.html })), ...(BG.kultur ? [pantheonTab(), bilimTab()] : []), { ad: '⭐ Simgeler', html: '', onShow: b => { b.innerHTML = symbolsGrid(); fillThumbs(b); } }, { ad: '🌍 ' + BG.bugunAd, html: MIS.bugun || '' }] });
  }
  // ---------- Mısır'ın simgeleri ----------
  function symbolsGrid() {
    return `<p>${BG.simgeGiris || 'Antik Mısır\'ı "Antik Mısır" yapan şeyler.'} Bir karta tıkla.</p><div class="symgrid">${(MIS.simgeler || []).map(s => `
      <button class="sym" data-sym="${s.id}"><span class="thumb" data-wiki="${esc(s.wiki)}">${s.ikon}</span><b>${s.ad}</b><small>${s.ozet}</small></button>`).join('')}</div>`;
  }
  const thumbCache = new Map();
  async function fillThumbs(root) {
    const els = [...root.querySelectorAll('[data-wiki]')], titles = [...new Set(els.map(e => e.dataset.wiki))].filter(t => !thumbCache.has(t));
    try {
      if (titles.length) {
        const j = await fetch(API + 'action=query&redirects=1&prop=pageimages&piprop=thumbnail&pithumbsize=360&titles=' + encodeURIComponent(titles.join('|'))).then(r => r.json());
        const map = {}; for (const r of j.query?.redirects || []) map[r.from] = r.to; for (const r of j.query?.normalized || []) map[r.from] = r.to;
        const byT = {}; for (const p of Object.values(j.query?.pages || {})) if (p.thumbnail) byT[p.title] = p.thumbnail.source;
        for (const t of titles) { let tt = t; for (let i = 0; i < 3 && map[tt]; i++) tt = map[tt]; thumbCache.set(t, byT[tt] || null); }
      }
      for (const e of els) { const src = thumbCache.get(e.dataset.wiki); if (src) e.innerHTML = `<img src="${esc(src)}" alt="">`; }
    } catch (err) { /* çevrimdışı: emojiler kalır */ }
  }
  function openSymbols() {
    showModal({ ikon: '⭐', title: BG.simgeAd, sub: BG.simgeAlt || 'Antik Mısır\'ı Antik Mısır yapan şeyler · bugünkü Mısır',
      tabs: [{ ad: '⭐ Simgeler', html: '', onShow: b => { b.innerHTML = symbolsGrid(); fillThumbs(b); } }, { ad: '🌍 ' + BG.bugunAd, html: MIS.bugun || '' }] });
  }
  function openSymbol(id) {
    const s = (MIS.simgeler || []).find(x => x.id === id); if (!s) return;
    const git = s.git ? `<button class="phbtn" data-show='${JSON.stringify(s.git)}'>${s.git.nil ? '🌊 Nil kartını aç' : '🎬 Sahnede göster'}</button>` : '';
    const info = (s.git && s.git.id && bilgiOf(s.git.id) ? `<button class="phbtn" data-info="${s.git.id}">ℹ️ Bilgi kartı</button>` : '') + (s.id === 'mumya' || s.id === 'tutankamon' ? `<button class="phbtn" data-mumya="tutankamon">⚱️ Tutankamon'un mumyası ve tabutları</button>` : '') + (s.id === 'mumya' ? `<button class="phbtn" data-ic="deyrelmedine">⚖️ Kalbin tartılması (duvar resmi)</button>` : '');
    showModal({ ikon: s.ikon, title: s.ad, sub: s.ozet, tabs: [
      { ad: 'Hap bilgiler', html: `<ul class="hap">${s.hap.map(h => `<li>${h}</li>`).join('')}</ul><div class="gos">${git}${info}</div>`,
        onShow: b => { const back = document.createElement('button'); back.className = 'phbtn'; back.textContent = '⬅ Bütün simgeler'; back.onclick = openSymbols; b.querySelector('.gos').appendChild(back); } },
      photoTab(s.wiki, 8)
    ] });
  }
  $('#follow').addEventListener('click', () => { follow = true; cityFocus = null; $('#citycard').hidden = true; shown = null; });

  // ================= KÜLTÜR: tanrılar, içi, mumyalar, yaşam, bilim =================
  const K = window.KULTUR || { tanrilar: [], olumler: [], roller: [], ic: { eslesme: {}, sahneler: {} }, bilim: { genel: '', cag: {} } };
  const C = window.Cizim;
  const godOf = id => K.tanrilar.find(g => g.id === id);
  const amarna = () => Y <= 1352 && Y >= 1332;
  // canvas'ı sekme içinde boyutlandırıp çizen yardımcı (anim: her karede yeniden çiz)
  function liveCanvas(cvEl, drawFn, anim) {
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    const fit = () => { const r = cvEl.getBoundingClientRect(); cvEl.width = Math.round(r.width * dpr); cvEl.height = Math.round(r.height * dpr); return [r.width, r.height]; };
    let [w, h] = fit(); const t0 = performance.now();
    const step = () => {
      if (!cvEl.isConnected) return;
      const ctx = cvEl.getContext('2d'); ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      drawFn(ctx, w, h, (performance.now() - t0) / 1000);
      if (anim) requestAnimationFrame(step);
    };
    step();
    return { restart: () => { [w, h] = fit(); } };
  }
  function godHTML(gd) {
    return `<div class="godwrap"><canvas class="godcv" data-godcv="${gd.id}"></canvas><div>
      ${rowsHTML([['Görünüşü', gd.gorunum], ['Görevi', gd.gorev], ['Kült merkezi', gd.merkez]])}
      <h4>Mit</h4><p>${gd.mit}</p><div class="did"><b>💡 Biliyor muydun?</b><p>${gd.ilginc}</p></div></div></div>`;
  }
  const paintGods = body => body.querySelectorAll('[data-godcv]').forEach(cv => { const gd = godOf(cv.dataset.godcv); liveCanvas(cv, (ctx, w, h) => C.drawGod(ctx, gd, w, h), false); });
  function pantheonHTML() {
    return `<p>Mısırlılar yüzlerce tanrıya inanırdı. Tapınaklarda tanrının altın kaplı <b>kült heykeli</b> en içteki karanlık odada durur, rahipler onu her gün yıkar, giydirir ve "beslerdi". Heykel tanrının kendisi değil, tanrının ruhunun yeryüzünde konakladığı yer sayılırdı. Bir karta tıkla.</p>
      <div class="godgrid">${K.tanrilar.map(gd => `<button class="godcard" data-god="${gd.id}"><canvas data-godcv="${gd.id}"></canvas><b>${gd.ad}</b><small>${gd.unvan}</small></button>`).join('')}</div>`;
  }
  const pantheonTab = () => ({ ad: '🙏 Bütün tanrılar', html: pantheonHTML(), onShow: paintGods });
  function openGod(id) {
    const gd = godOf(id); if (!gd) return;
    showModal({ ikon: '🙏', title: gd.ad, sub: gd.unvan, tabs: [{ ad: gd.ad, html: godHTML(gd), onShow: paintGods }, pantheonTab(), photoTab(gd.wiki, 8)] });
  }
  function openSun() {
    const ra = godOf('ra'), at = godOf('aton'), kh = godOf('khepri');
    const yol = `<p>Mısırlılara göre güneş her gün bir yolculuk yapar:</p><ul class="hap">
      <li>🌅 <b>Sabah:</b> bok böceği <b>Khepri</b> güneşi ufuktan gökyüzüne yuvarlar; gökyüzü tanrıçası <b>Nut</b> onu yeniden doğurur.</li>
      <li>☀️ <b>Öğle:</b> şahin başlı <b>Ra</b>, "Milyonların Kayığı" ile gökyüzünde yol alır.</li>
      <li>🌇 <b>Akşam:</b> yaşlı <b>Atum</b> olarak batıda batar; Nut onu yutar.</li>
      <li>🌙 <b>Gece:</b> koç başlı olarak yeraltı dünyasının 12 saatini geçer; kaos yılanı <b>Apep</b>'i yener ve sabah yeniden doğar.</li></ul>
      <p>Bu yüzden mezarlar ve piramitler güneşin battığı <b>batı yakasındadır</b>: ölüler de güneş gibi yeniden doğmayı umardı.</p>`;
    const tabs = [{ ad: '☀️ Ra', html: godHTML(ra), onShow: paintGods }, { ad: '🌅 Güneşin yolculuğu', html: `<div class="godwrap"><canvas class="godcv" data-godcv="khepri"></canvas><div>${yol}</div></div>`, onShow: paintGods }, { ad: '🌞 Aton', html: godHTML(at), onShow: paintGods }, pantheonTab(), photoTab('Ra', 8)];
    showModal({ ikon: '☀️', title: amarna() ? 'Güneş: Aton (Akhenaton dönemi)' : 'Güneş: tanrı Ra', sub: amarna() ? 'Bu yıllarda Akhenaton yalnızca güneş kursu Aton\'a tapınılmasını istiyor' : 'Mısırlıların en önemli tanrılarından', tabs, open: amarna() ? 2 : 0 });
    void kh;
  }
  function openMoon() {
    const takvim = `<p>Mısırlılar ayı da yakından izledi:</p><ul class="hap">
      <li>Tapınak bayramları çoğu zaman <b>ay takvimine</b> göre kutlanırdı; günlük hayatta ise 365 günlük güneş takvimi kullanıldı.</li>
      <li>Ay, <b>Horus'un sol gözü</b> sayılırdı (sağ göz güneş). Ayın küçülüp büyümesi, Seth'in yaraladığı gözün iyileşmesi olarak anlatılırdı.</li>
      <li>Ay tanrıları: gece gökte "gezen" <b>Khonsu</b> ve zamanı ölçen, yazının tanrısı <b>Thot</b>.</li></ul>`;
    showModal({ ikon: '🌙', title: 'Ay: Khonsu ve Thot', sub: 'Ay tanrıları', tabs: [{ ad: '🌙 Khonsu', html: godHTML(godOf('khonsu')), onShow: paintGods }, { ad: '📜 Thot', html: godHTML(godOf('thot')), onShow: paintGods }, { ad: '🗓️ Ay ve takvim', html: takvim }, pantheonTab(), photoTab('Khonsu', 8)] });
  }

  // ---------- yapıların içi (yakınlaşma) ----------
  const icOf = id => K.ic.eslesme[id];
  const icEl = $('#ic'), iccv = $('#iccv');
  let icState = null;
  function zoomInto(id) {
    const sid = icOf(id); if (!sid) return;
    closeModal(); playingBeforeModal = false; playing = false; updPlay();
    const h = view === 'sahne' ? S.findHit(id) : null;
    if (h) {
      const x = (h.x0 + h.x1) / 2, y = (h.y0 + h.y1) / 2;
      cv.style.transformOrigin = `${x}px ${y}px`; cv.classList.add('zooming');
      requestAnimationFrame(() => { cv.style.transform = 'scale(5)'; cv.style.opacity = '0.2'; });
      setTimeout(() => { openInterior(id, sid); cv.classList.remove('zooming'); cv.style.transform = ''; cv.style.opacity = ''; }, 850);
    } else openInterior(id, sid);
  }
  function openInterior(id, sid) {
    const sc = K.ic.sahneler[sid]; if (!sc) return;
    const m = monOf(id);
    icState = { id, sid, sc, sel: null, pts: {}, t0: performance.now(), hover: null };
    icEl.querySelector('.ictitle').textContent = sc.ad + (m ? ' · ' + m.ad : '');
    icEl.querySelector('.icsub').textContent = sc.alt;
    icEl.querySelector('.iclist').innerHTML = sc.noktalar.map((n, i) => `<button data-spot="${n.id}"><span>${i + 1}</span>${n.ad}</button>`).join('');
    icEl.querySelector('.icnote').textContent = sc.not;
    selectSpot(null);
    icEl.hidden = false; icEl.classList.remove('show'); requestAnimationFrame(() => icEl.classList.add('show'));
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    const loop = () => {
      if (icEl.hidden || !icState) return;
      const r = iccv.getBoundingClientRect(); if (iccv.width !== Math.round(r.width * dpr)) { iccv.width = Math.round(r.width * dpr); iccv.height = Math.round(r.height * dpr); }
      const ctx = iccv.getContext('2d'); ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const t = (performance.now() - icState.t0) / 1000;
      icState.pts = C.drawIc(ctx, sid, r.width, r.height, t) || {};
      sc.noktalar.forEach((n, i) => {
        const p = icState.pts[n.id]; if (!p) return;
        const on = icState.sel === n.id || icState.hover === n.id, rr = 11 + (on ? 3 : Math.sin(t * 3 + i) * 2);
        ctx.fillStyle = on ? '#ffd666' : 'rgba(255,214,102,0.85)'; ctx.strokeStyle = '#2a1a0e'; ctx.lineWidth = 2;
        ctx.beginPath(); ctx.arc(p[0], p[1], rr, 0, 7); ctx.fill(); ctx.stroke();
        ctx.fillStyle = '#2a1a0e'; ctx.font = '800 12px system-ui'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText(i + 1, p[0], p[1] + 1); ctx.textBaseline = 'alphabetic';
      });
      requestAnimationFrame(loop);
    };
    loop();
  }
  function selectSpot(sid) {
    if (!icState) return;
    icState.sel = sid;
    const n = icState.sc.noktalar.find(x => x.id === sid);
    icEl.querySelector('.ictext').innerHTML = n ? `<h4>${n.ad}</h4><p>${n.metin}</p>` : `<p>Duvardaki <b>sarı numaralara</b> ya da listedeki başlıklara tıkla: her birinin ne anlattığını öğren.</p>`;
    icEl.querySelectorAll('[data-spot]').forEach(b => b.classList.toggle('on', b.dataset.spot === sid));
  }
  const spotAt = (x, y) => { if (!icState) return null; let best = null, bd = 28; for (const [k, p] of Object.entries(icState.pts)) { const d = Math.hypot(p[0] - x, p[1] - y); if (d < bd) { bd = d; best = k; } } return best; };
  iccv.addEventListener('pointermove', ev => { const [x, y] = cvPos(iccv, ev); const s = spotAt(x, y); if (icState) icState.hover = s; iccv.style.cursor = s ? 'pointer' : 'default'; });
  iccv.addEventListener('click', ev => { const s = spotAt(...cvPos(iccv, ev)); if (s) selectSpot(s); });
  icEl.addEventListener('click', ev => {
    const b = ev.target.closest('[data-spot]'); if (b) return selectSpot(b.dataset.spot);
    if (ev.target.closest('.icback')) { icEl.hidden = true; icState = null; }
  });
  window.addEventListener('keydown', e => { if (e.key === 'Escape' && !icEl.hidden) { icEl.hidden = true; icState = null; } });

  // ---------- firavunların ölümleri: mumya ve lahit ----------
  const olumYakin = y => K.olumler.filter(o => Math.abs(o.y - y) <= (P.composite ? 5 : 3));
  function openMummy(id) {
    const o = K.olumler.find(x => x.id === id); if (!o) return;
    showModal({ ikon: '⚱️', title: `${o.kim}: mumya ve lahit`, sub: `Ölümü: ${YIL.fmt(o.y)}`, tabs: [
      { ad: '🎬 Canlandırma', html: '<canvas class="mumcv"></canvas><p class="note">Basitleştirilmiş bir canlandırma: taş lahit açılıyor, içindeki tabut ve mumya görünüyor.</p>', onShow: b => liveCanvas(b.querySelector('.mumcv'), (ctx, w, h, t) => C.drawMummy(ctx, w, h, t, o.tabut), true) },
      { ad: '⚱️ Mumya ve lahit', html: `<h4>Mumyası</h4><p>${o.mumya}</p><h4>Lahdi ve tabutu</h4><p>${o.lahit}</p><div class="did"><b>💡 Biliyor muydun?</b><p>${o.ilginc}</p></div>` },
      { ad: '🧪 Mumyalama nasıl yapılırdı?', html: K.mumyalama },
      photoTab(o.wiki, 8)
    ] });
  }

  // ---------- "o dönemde yaşasaydım" ----------
  function lifeVars() {
    const r = pick(P.rulers, Y), e = pick(P.eras, Y), f = S.focus(Y);
    const act = f && S.progress(f, Y) >= 0 && S.progress(f, Y) < 1;
    const tanri = amarna() ? 'Aton' : ({ 'misir-erken': 'Horus', 'misir-eski-krallik': 'Ra ve Ptah', 'misir-orta-krallik': 'Amon ve Osiris', 'misir-yeni-krallik': 'Amon-Ra', 'misir-gec-donem': 'İsis ve Serapis' })[SP.id] || 'Ra';
    return { yil: Math.round(Y), firavun: r.ad, baskent: (e.baskent || SP.baskent || '').split(' (')[0], tanri, santiye: act ? f.ad : 'tapınak, kanal ve set yapımı' };
  }
  // rol metinlerindeki {tarih}, {hukumdar}, {baskent} ve Mısır'a özgü değişkenler
  function rolDegisken(rol) {
    const y = Math.round(Y);
    let v;
    if (!DUNYA) { v = BG.id === 'misir' && BG.kultur ? lifeVars() : {}; const r = pick(P.rulers, Y), e = pick(P.eras, Y); v.hukumdar = r && r.kisa !== '?' ? r.ad : ''; v.baskent = v.baskent || ((e && e.baskent) || SP.baskent || '').split(' (')[0]; }
    else { const a = bolgeAn(rol.bolge, Y) || {}; const hk = a.r && a.r.kisa !== '?' ? a.r.ad : ''; v = { yil: y, hukumdar: hk, firavun: hk || 'firavun', baskent: ((a.e && a.e.baskent) || (a.p && a.p.baskent) || '').split(' (')[0], tanri: 'Amon-Ra', santiye: 'tapınak, kanal ve set yapımı' }; }
    v.tarih = YIL.fmt(y); return v;
  }
  const fill = (s, v) => s.replace(/\{(\w+)\}/g, (_, k) => v[k] ?? '');
  const rolCizimOpt = r => ({ tapinak: DUNYA || !['misir-erken', 'misir-eski-krallik', 'misir-orta-krallik'].includes(SP.id), tema: r.tema || 'misir', giyim: r.giyim || 'antik', tac: r.tac });
  function openLife() {
    const { guc, halk } = rolListesi(), y = Math.round(Y);
    const kart = r => `<button class="rolecard${r.guc ? ' guc' : ''}" data-role="${r.id}"><canvas data-rolecv="${r.id}"></canvas><b>${r.ikon} ${r.ad}</b><small>${fill(r.kim, rolDegisken(r))}</small></button>`;
    const tum = [...guc, ...halk];
    showModal({ ikon: '🎭', title: `${YIL.fmt(y)}'de yaşasaydın…`, sub: 'Bir hayat seç, şafaktan geceye bir gününü yaşa', tabs: [{ ad: '🎭 Rolünü seç',
      html: `${guc.length ? `<h4 class="rolbas">👑 Güç sahibi hayatlar</h4><div class="rolegrid">${guc.map(kart).join('')}</div>` : ''}${halk.length ? `<h4 class="rolbas">🌾 Sıradan hayatlar</h4><div class="rolegrid">${halk.map(kart).join('')}</div>` : ''}`,
      onShow: b => b.querySelectorAll('[data-rolecv]').forEach(cvEl => { const r = tum.find(x => x.id === cvEl.dataset.rolecv); liveCanvas(cvEl, (ctx, w, h, t) => S.drawOn(ctx, A => C.drawLife(ctx, w, h, r.adimlar[1], t, A, rolCizimOpt(r))), false); }) }] });
  }
  function openRole(id) {
    const r = rolBul(id); if (!r) return; const v = rolDegisken(r);
    const n = r.adimlar.length;
    const tabs = r.adimlar.map((st, i) => ({ ad: `${i + 1}. ${st.saat}`, html: `<canvas class="lifecv"></canvas><p class="lifetext">${fill(st.metin, v)}</p>
      <div class="gos"><button class="phbtn" data-next="${i + 1}">${i + 1 < n ? 'Sonraki ▶' : 'Günün sonu: ne hissederdin? ▶'}</button></div>`,
      onShow: b => liveCanvas(b.querySelector('.lifecv'), (ctx, w, h, t) => S.drawOn(ctx, A => C.drawLife(ctx, w, h, st, t, A, rolCizimOpt(r))), true) }));
    tabs.push({ ad: '💭 Ne hissederdin?', html: `<h4>Ne hissederdin?</h4><p>${fill(r.his, v)}</p><h4>Gerçekler</h4><ul class="hap">${r.gercekler.map(x => `<li>${x}</li>`).join('')}</ul>
      <div class="gos"><button class="phbtn lifebtn">🎭 Başka bir hayat seç</button></div>` });
    showModal({ ikon: r.ikon, title: `${r.ad} olarak bir gün`, sub: `${v.tarih}${v.hukumdar && !r.guc ? ' · ' + v.hukumdar : ''}`, tabs });
  }
  // ---------- bilim sekmesi ----------
  const bilimTab = () => ({ ad: '🔬 Bilim ve teknoloji', html: `<div class="did"><b>${SP.kisa}</b><p>${K.bilim.cag[SP.id] || ''}</p></div>${K.bilim.genel}` });

  // ---------- kontroller ----------
  function updPlay() { $('#play').textContent = playing ? '⏸' : '▶'; $('#play').title = playing ? 'Durdur' : 'Oynat'; $('#tl-ac-oyna').textContent = playing ? '⏸' : '▶'; }

  // ---------- kartları gizleme: yıl kartı (üst) ve zaman çizelgesi (alt) ayrı ayrı ya da birlikte (⛶ tam ekran) ----------
  const GIZ = (() => { try { return JSON.parse(localStorage.getItem('zy-gizli') || '{}'); } catch (e) { return {}; } })();
  function gizliUygula() {
    document.body.classList.toggle('ust-gizli', !!GIZ.ust); document.body.classList.toggle('alt-gizli', !!GIZ.alt);
    $('#tl-ac').hidden = !GIZ.alt; $('#yc-gizle').textContent = GIZ.ust ? '▾' : '▴';
    $('#yc-gizle').title = GIZ.ust ? 'Yıl kartını aç' : 'Yıl kartını küçült'; $('#tamekran').classList.toggle('on', !!(GIZ.ust && GIZ.alt));
    if (GIZ.alt) $('#tarihpop').hidden = true;
    try { localStorage.setItem('zy-gizli', JSON.stringify(GIZ)); } catch (e) { /* */ }
    requestAnimationFrame(resize);
  }
  $('#yc-gizle').addEventListener('click', ev => { ev.stopPropagation(); GIZ.ust = !GIZ.ust; gizliUygula(); });
  $('.yearcard').addEventListener('click', ev => { if (GIZ.ust && !ev.target.closest('button, a')) { GIZ.ust = false; gizliUygula(); } });
  $('#yc-goc').addEventListener('click', ev => { ev.stopPropagation(); openGoc(); });
  $('#tl-gizle').addEventListener('click', () => { GIZ.alt = true; gizliUygula(); });
  $('#tl-ac').addEventListener('click', ev => { if (ev.target.closest('#tl-ac-oyna')) { $('#play').click(); return; } GIZ.alt = false; gizliUygula(); });
  $('#tamekran').addEventListener('click', () => { const hepsi = !!(GIZ.ust && GIZ.alt); GIZ.ust = GIZ.alt = !hepsi; gizliUygula(); });
  const geceBtn = $('#gecebtn');
  if (geceBtn) geceBtn.addEventListener('click', () => {
    const ac = !DN.layers.gece;
    DN.setLayer('gece', ac);
    renderOlayPanel();
    toast(ac ? '🌓 Canlı gece / gündüz ve şehir ışıkları açıldı (şu anki dünya saati).' : '☀️ Canlı gece / gündüz kapatıldı.');
  });
  gizliUygula();

  // ---------- 📅 tarihe git ----------
  $('#tarihgit').addEventListener('click', () => {
    const p = $('#tarihpop'), ac = p.hidden; p.hidden = !ac; $('#tarihgit').classList.toggle('on', ac);
    if (ac) { const y = Math.round(Y); $('#tp-yil').value = Math.abs(y) || 1; $('#tp-cag').value = y > 0 ? 'mo' : 'ms'; $('#tp-not').textContent = `Bu çizelge ${YIL.fmt(P.from)} – ${P.to <= -2026 ? 'bugün' : YIL.fmt(P.to)} arasını kapsıyor.`; setTimeout(() => { $('#tp-yil').focus(); $('#tp-yil').select(); }, 30); }
  });
  $('#tp-form').addEventListener('submit', ev => {
    ev.preventDefault();
    const raw = $('#tp-yil').value.trim();
    if (raw === '' || isNaN(Number(raw))) { $('#tp-not').textContent = 'Bir yıl yaz (ör. 1453).'; return; }
    let n = Math.abs(parseInt(raw, 10));
    let sifirNot = false;
    if (n === 0) { n = 1; sifirNot = true; }
    const y = $('#tp-cag').value === 'mo' ? n : -n;
    if (y > P.from || y < P.to) { $('#tp-not').textContent = `${YIL.fmt(y)} bu çizelgenin dışında: ${YIL.fmt(P.from)} – ${P.to <= -2026 ? 'bugün' : YIL.fmt(P.to)} arasında bir yıl seç.`; return; }
    playing = false; updPlay(); setYear(y, true);
    if (tlA != null) { const s = vA() - vB(); tlAralik(y + s / 2, y - s / 2); }
    $('#tarihpop').hidden = true; $('#tarihgit').classList.remove('on');
    toast(sifirNot ? `📅 <b>${YIL.fmt(y)}</b> · Tarihte 0 yılı olmadığı için ${YIL.ek(y, 'e')} yönlendirildi.` : `📅 <b>${YIL.fmt(y)}</b>`);
  });
  const yilAdim = (y, d) => { let r = Math.round(y) + d; if (r === 0) r = d < 0 ? -1 : 1; return r; };
  $('#play').addEventListener('click', () => { if (Y <= P.to) Y = P.from; playing = !playing; updPlay(); });
  $('#back').addEventListener('click', () => { setYear(yilAdim(Y, 1), true); });
  $('#fwd').addEventListener('click', () => { setYear(yilAdim(Y, -1), true); });
  $('#speed').value = String(speed);
  $('#speed').addEventListener('change', e => { speed = +e.target.value; });
  document.querySelectorAll('[data-season]').forEach(b => b.addEventListener('click', () => {
    S.setSeason(b.dataset.season); document.querySelectorAll('[data-season]').forEach(x => x.classList.toggle('on', x === b));
  }));
  const KUTU_IDS = ['modal', 'hosgeldin', 'arama', 'wiki', 'tarihpop', 'skbuyuk', 'ic', 'hayat', 'sinirbil', 'eski-oyun', 'topraklar', 'sasirt', 'hayvan-oyun', 'foto-oyun'];
  const kutuAcikMi = () => KUTU_IDS.some(id => { const e = document.getElementById(id); return e && !e.hidden; });
  window.addEventListener('keydown', e => {
    const t = e.target;
    if ((t && (/^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName) || t.isContentEditable)) || kutuAcikMi()) return;
    if (e.key === 'ArrowLeft') setYear(yilAdim(Y, e.shiftKey ? 10 : 1), true);
    else if (e.key === 'ArrowRight') setYear(yilAdim(Y, e.shiftKey ? -10 : -1), true);
    else if (e.key === ' ') { e.preventDefault(); $('#play').click(); }
  });

  // ---------- döngü ----------
  let sonArkaCiz = 0;
  function frame(now) {
    // Oyun ya da pencere açıkken ve zaman akmıyorken arka plan küresini ~10 FPS'e düşür (masaüstü CPU/GPU rahatlasın)
    if (!playing && kutuAcikMi() && now - sonArkaCiz < 100) {
      requestAnimationFrame(frame);
      return;
    }
    sonArkaCiz = now;
    const dt = Math.min(0.05, (now - last) / 1000); last = now;
    if (playing) {
      const before = Y;
      Y -= speed * dt;
      if (Y <= P.to) { Y = P.to; playing = false; updPlay(); }
      for (const ev of P.events) if (before > ev.y && Y <= ev.y) toast(`<b>${YIL.fmt(ev.y)}</b> ${ev.t}`);
      if (!DUNYA) for (const r of P.rulers) if (before > r.from && Y <= r.from && r.kisa !== '?') toast(`👑 <b>Yeni ${BG.hukumdar || 'firavun'}:</b> ${r.ad}`);
      for (const o of K.olumler) if (before > o.y && Y <= o.y) toast(`⚱️ <b>${YIL.fmt(o.y)}:</b> ${o.kim} öldü. Paneldeki düğmeden mumyasını gör.`);
    }
    syncScenePart();
    const iy = Math.round(Y);
    if (iy !== shown) { shown = iy; buildPanel(iy); yearCard(iy); }
    if (view === 'sahne') {
      if (follow) { camHedef = null; const tx = S.focus(Y).wx, d = tx - camX, k = 1 - Math.exp(-dt * (Math.abs(d) > 1500 ? 1.2 : 1.8)); camX += d * k; }
      else if (camHedef != null) { const d = camHedef - camX; if (Math.abs(d) < 2) { camX = camHedef; camHedef = null; } else camX += d * (1 - Math.exp(-dt * 3.5)); }
      $('#follow').style.display = follow ? 'none' : 'block';
      S.draw(g, W, H, DPR, Y, dt, camX);
      ysGuncelle(); skhCiz(); if (!skb.hidden) skbCiz();
    } else if (view === 'dunya') {
      $('#follow').style.display = 'none';
      window.Dunya.draw(gg, W, H, DPR, dt, Y, mapItems(true), mapCities());
    } else {
      $('#follow').style.display = 'none';
      M.draw(mg, W, H, DPR, dt, mapItems(), mapCities(), `${YIL.fmt(iy)} · ${SP.kisa}`);
    }
    drawTL();
    requestAnimationFrame(frame);
  }
  // arama ve ülke sayfaları (js/ara.js) için dış arayüz
  window.ZY = {
    get Y() { return Y; }, setYear: y => setYear(y, true), setView, showInScene: t => showInScene(t),
    showOnMap: (la, lo, z, ad) => { setView('dunya'); DN.goTo(la, lo, z || 60); if (DN.pin) DN.pin(la, lo, ad); },
    showMonument: id => showMonument(id), openInfo: id => openInfo(id), openGod: id => openGod(id), openDevlet: k => openDevlet(k), showModal: o => showModal(o), photoTab: (title, n, harita) => photoTab(title, n, harita),
    openCity: ad => { const c = (MIS.sehirler || []).find(x => x.ad === ad); if (c) openCity(c); },
    openEvent: id => { const e = (window.OLAYLAR || []).find(x => x.id === id); if (e) { setView('dunya'); DN.goTo(e.ll[0], e.ll[1], 7); openEvent(e); } },
    monuments: () => P.monuments || SP.monuments, cities: () => MIS.sehirler || [], coords: id => MIS.coords[id], hasInfo: id => !!bilgiOf(id),
    openYapi: id => openYapi(id), yapiKurede: id => yapiKurede(id),
    openOkyanus: id => { const o = (window.ATLAS_OKYANUS?.okyanuslar || []).find(x => x.id === id); if (o) openOkyanus(o); },
    openHayvan: id => { const h = (window.ATLAS_HAYVANLAR || []).find(x => x.id === id); if (h) openHayvan(h); },
    openBitki: id => { const b = (window.ATLAS_BITKILER || []).find(x => x.id === id); if (b) openBitki(b); },
    openYayilis: id => { const yy = (window.ATLAS_YAYILIS || []).find(x => x.id === id); if (yy) openYayilis(yy); },
    openYayilisGaleri,
    openDogaBolge: id => { const DB = window.ATLAS_DOGA_BOLGELER || {}; const b = [...(DB.ozel || []), ...(DB.kitalar || [])].find(x => x.id === id); if (b) openDogaBolge(b); },
    hayvanKurede: id => hayvanKurede(id),
    openCografya: id => { const cg = (window.ATLAS_COGRAFYA || []).find(x => x.id === id); if (cg) openCografya(cg); },
    openDonum: id => { const d = (window.DONUM_NOKTALARI || []).find(x => x.id === id); if (d) openDonum(d); },
    openMagara: id => { const m = (window.ATLAS_MAGARALAR || []).find(x => x.id === id); if (m) openMagara(m); },
    openLiman: id => { const l = (window.ATLAS_LIMANLAR || []).find(x => x.id === id); if (l) openLiman(l); },
    openNehir: id => { const n = (window.ATLAS_NEHIRLER || []).find(x => x.id === id); if (n) openNehir(n); },
    openHayvanGoc: id => { const h = (window.ATLAS_HAYVAN_GOC || []).find(x => x.id === id); if (h) openHayvanGoc(h); },
    openVolkan: id => { const v = (window.ATLAS_VOLKANLAR?.volkanlar || []).find(x => x.id === id); if (v) openVolkan(v); },
    openFay: id => { const f = (window.ATLAS_VOLKANLAR?.faylar || []).find(x => x.id === id); if (f) openFay(f); },
    openAkinti: id => { const a = (window.ATLAS_OKYANUS?.akintilar || []).find(x => x.id === id); if (a) openAkinti(a); },
    openDenizOlay: id => { const o = (window.ATLAS_OKYANUS?.olaylar || []).find(x => x.id === id); if (o) openDenizOlay(o); },
    openHatYapi: id => { const hy = (window.HAT_YAPILAR || []).find(x => x.id === id); if (hy) openHatYapi(hy); },
    openYol: id => { const t = (window.TICARET_YOLLARI || []).find(x => x.id === id); if (t) openYol(t); },
    openYolculuk: id => { const j = (window.YOLCULUKLAR || []).find(x => x.id === id); if (j) openYolculuk(j); },
    openKaynak: id => { const k = (window.KAYNAKLAR || []).find(x => x.id === id); if (k) openKaynak(k); },
    openYasamDoga,
    openTarihteBugun,
    openSurpriz: id => { const s = (window.ATLAS_SURPRIZLER || []).find(x => x.id === id); if (s) openSurpriz(s); },
    xpEkle, surprizBulunduMu, openKesif,
    openKesif: () => openKesif(),
    rehberAc: () => hgAc(0)
  };
  window.__zy = { get Y() { return Y; }, get camX() { return camX; }, get follow() { return follow; }, setYear: y => setYear(y, true), snap: wx => { follow = false; camHedef = null; camX = wx ?? S.focus(Y).wx; }, setView, switchPlace, openInfo, openCity: ad => openCity((MIS.sehirler || []).find(c => c.ad === ad)), showMonument: id => showMonument(id) };
  updPlay();
  if (DUNYA) { setView('dunya'); DN.goEgypt(BG.merkez, BG.merkezZ); }
  else if (QS.get('yapi')) { const id = QS.get('yapi'); syncScenePart(); setTimeout(() => showMonument(id), 50); }
  modGuncelle();
  if (QS.get('yasa')) { syncScenePart(); setTimeout(yasaAc, 80); }
  // ---------- ilk ziyaret: 6 sahnelik animasyonlu interaktif intro / rehber ----------
  const hg = $('#hosgeldin'), hgIc = $('#hg-icerik'), hgNk = $('#hg-noktalar');
  const HG_SAHNELER = [
    {
      rozet: '1 / 7 · Dünya Atlası',
      baslik: 'Dünyayı ve Okyanusları Keşfet',
      metin: 'Küreyi sürükleyip döndür, yakınlaş. <b>Devletlere</b> tıklayınca kültürünü, ekonomisini ve tarihini; <b>okyanuslara</b> dokununca canlılarını ve akıntılarını okuyabilirsin.',
      sahne: '<div class="hgs-kure"><i class="hgs-orb"></i><span class="hgs-pin p1">🏛️</span><span class="hgs-pin p2">🌊</span><span class="hgs-pin p3">🏔️</span></div>'
    },
    {
      rozet: '2 / 7 · Zaman Makinesi',
      baslik: 'Alttaki Çizelgeyle 11.000 Yıl Gez',
      metin: 'Alt çubuğu kaydır, <b>▶ Oynat</b> ile sınırların yayılışını canlı izle, sol taraftaki kıta adlarına tıklayarak her kıtada bıraktığın yıla anında geri dön.',
      sahne: '<div class="hgs-zaman"><div class="hgs-bar"><span>MÖ 3000</span><span>MS 1</span><span>1453</span><span>Bugün</span></div><i class="hgs-imlec"></i><div class="hgs-etiket">⏳ Tarih akıyor…</div></div>'
    },
    {
      rozet: '3 / 7 · Katmanlar (Dosyalar)',
      baslik: 'Tarih Atlası ve Doğa Atlası Tek Tıkla',
      metin: 'Sağ üstteki <b>🗂️ Katmanlar</b> menüsünden <b>🌊 akıntıları ve göç yollarını</b>, <b>🐾 bölge hayvanlarını</b>, <b>🌋 yanardağları</b> ve <b>⚓ dünya limanlarını</b> açabilirsin.',
      sahne: '<div class="hgs-katlar"><span>🌊 Akıntılar</span><span>🐋 Göçler</span><span>🐾 Hayvanlar</span><span>🌋 Yanardağlar</span><span>⚓ Limanlar</span></div>'
    },
    {
      rozet: '4 / 7 · Canlı Sahne & Yaşa',
      baslik: 'O Dönemde Bir Gününü Yaşa',
      metin: '<b>🎬 Sahne</b> modunda yapıların yılına göre yükselişini izle; <b>🧑‍🌾 Yaşa</b> modunda seçtiğin çağdan bir insan olup şafaktan geceye bir gününü deneyimle.',
      sahne: '<div class="hgs-yasa"><span>🏺 MÖ 2560</span><i>→</i><span>⚔️ MS 1453</span><i>→</i><span>🧑‍🌾 Farklı Hayatlar</span></div>'
    },
    {
      rozet: '5 / 7 · Oyunlar & Yarışmalar',
      baslik: 'Tarih ve Doğa Oyunlarıyla Kendini Dene',
      metin: '<b>🎭 Ben Kimim?</b>, <b>📸 Burası Neresi & Hangi Çağ?</b>, <b>⚖️ Hangisi Daha Eski?</b>, <b>🗺️ Sınırdan Bil</b>, <b>🐾 Hayvanlar Alemi</b> ve <b>📅 Tarihte Bugün</b> seni bekliyor.',
      sahne: '<div class="hgs-oyunlar"><span>🎭</span><span>📸</span><span>⚖️</span><span>🗺️</span><span>🐾</span><span>📅</span></div>'
    },
    {
      rozet: '6 / 7 · 🎁 Gizli Sürprizler',
      baslik: 'Sürpriz Yumurtaları Bulabilecek misin?',
      metin: 'Dünyanın ve uzay boşluğunun gizli köşelerine <b>sürpriz yumurtalar (Easter Eggs)</b> sakladık! Yalnızca doğru yere <b>iyice yaklaşınca</b> beliren minik altın parıltıyı yakala; keşif yaptıkça ve oyun oynadıkça kazandığın <b>XP</b> ile <b>🧭 Keşif Defterim</b>\'de yeni ipuçlarının kilidi açılır.',
      sahne: '<div class="hgs-katlar"><span>🛰️ Uzayda</span><span>🏛️ Kayıp Kıta</span><span>⚙️ Antik Sır</span><span>🤿 Derinlikler</span><span>✨ +Daha Fazlası</span></div>'
    },
    {
      rozet: '7 / 7 · Hazırsın!',
      baslik: 'Yolculuğa Nereden Başlayalım?',
      metin: 'İstediğin zaman sağ üstteki <b>?</b> düğmesinden bu rehberi tekrar açabilirsin.',
      son: true
    }
  ];
  let hgIdx = 0;
  function hgCiz() {
    if (!hg || !hgIc || !hgNk) return;
    const sc = HG_SAHNELER[hgIdx];
    const sonHTML = sc.son ? `<div class="hg-sec">
      <button class="hg-btn" data-hg="kesfet"><span class="hg-ik">🌍</span><span><b>Tarihi Keşfet</b><small>Dünya küresini döndür, uygarlıkları ve okyanusları keşfet</small></span></button>
      <button class="hg-btn" data-hg="doga"><span class="hg-ik">🌿</span><span><b>Doğa Atlası'nı Aç</b><small>Okyanus akıntıları, girdaplar, hayvanlar ve dağlar anında açılsın</small></span></button>
      <button class="hg-btn" data-hg="oyun"><span class="hg-ik">🎮</span><span><b>Eğlenceli Oyunlar Oyna</b><small>6 tarih & doğa oyunuyla serini başlat</small></span></button>
      <button class="hg-btn" data-hg="yasa"><span class="hg-ik">🧑‍🌾</span><span><b>O Dönemde Yaşa</b><small>Başka bir çağdan bir hayat seç, bir gününü yaşa</small></span></button>
    </div>` : `<div class="hg-sahne">${sc.sahne}</div>`;
    hgIc.innerHTML = `<div class="hg-adim gir">
      <span class="hg-rozet">${sc.rozet}</span>
      <h1 id="hg-baslik">${sc.baslik}</h1>
      <p>${sc.metin}</p>
      ${sonHTML}
    </div>`;
    hgNk.innerHTML = HG_SAHNELER.map((_, i) => `<button type="button" class="${i === hgIdx ? 'on' : ''}" data-hg-git="${i}" aria-label="Adım ${i + 1}"></button>`).join('');
    const geri = hg.querySelector('.hg-geri'), ileri = hg.querySelector('.hg-ileri'), gec = hg.querySelector('.hg-gec-kucuk');
    if (geri) geri.hidden = hgIdx === 0;
    if (ileri) { ileri.textContent = hgIdx === HG_SAHNELER.length - 1 ? 'Başla ✓' : 'İleri ›'; ileri.dataset.hg = hgIdx === HG_SAHNELER.length - 1 ? 'kapat' : 'ileri'; }
    if (gec) gec.hidden = hgIdx === HG_SAHNELER.length - 1;
  }
  function hgAc(idx = 0) {
    if (!hg) return;
    hgIdx = clamp(idx, 0, HG_SAHNELER.length - 1);
    hg.hidden = false;
    hgCiz();
  }
  function hgKapat() {
    if (!hg) return;
    hg.hidden = true;
    try { localStorage.setItem('zy-hosgeldin', '2'); } catch (e) { /* gizli mod */ }
  }
  const rehberBtn = $('#rehber-ac');
  if (rehberBtn) rehberBtn.addEventListener('click', () => { kartlariKapat(); hgAc(0); });
  if (hg) {
    hg.addEventListener('click', ev => {
      if (ev.target === hg || ev.target.closest('.hg-x')) return hgKapat();
      const nk = ev.target.closest('[data-hg-git]');
      if (nk) { hgIdx = +nk.dataset.hgGit; hgCiz(); return; }
      const b = ev.target.closest('[data-hg]'); if (!b) return;
      const sec = b.dataset.hg;
      ev.stopPropagation();
      if (sec === 'ileri') { if (hgIdx < HG_SAHNELER.length - 1) { hgIdx++; hgCiz(); } else hgKapat(); return; }
      if (sec === 'geri') { if (hgIdx > 0) { hgIdx--; hgCiz(); } return; }
      hgKapat();
      if (sec === 'kesfet') { kartlariKapat(); setView('dunya'); }
      else if (sec === 'doga') { kartlariKapat(); setView('dunya'); atlasModUygula('doga'); }
      else if (sec === 'oyun') { kartlariKapat(); if (window.OyunYukle) window.OyunYukle.menuAc(); }
      else if (sec === 'yasa') { yasaAc(); }
    });
    window.addEventListener('keydown', ev => {
      if (hg.hidden) return;
      if (ev.key === 'Escape') hgKapat();
      else if (ev.key === 'ArrowRight') { if (hgIdx < HG_SAHNELER.length - 1) { hgIdx++; hgCiz(); } }
      else if (ev.key === 'ArrowLeft') { if (hgIdx > 0) { hgIdx--; hgCiz(); } }
    });
    let ilk = false; try { ilk = localStorage.getItem('zy-hosgeldin') !== '2'; } catch (e) { /* gizli mod */ }
    if (ilk && !QS.get('yasa') && !QS.get('dog') && !QS.get('oyun') && !QS.get('yapi')) {
      hgAc(0);
    }
  }
  requestAnimationFrame(frame);
})();
