// Arayüz: zaman çizelgesi, bilgi paneli, oynatma, kamera, harita, bilgi kartları.
'use strict';
(() => {
  const S = window.Sahne, M = window.Harita, MIS = window.MISIR || {};
  const BG = window.BOLGE || { id: 'misir', ad: 'Mısır', ikon: '🏺', hakkinda: 'Bu çağda Mısır', simgeAd: "Mısır'ın simgeleri", bugunAd: 'Bugünkü Mısır', antikAd: 'Antik Mısır', uc3: true, kultur: true };
  // bölge seçici (Mısır / Anadolu): sayfa o bölgenin verileriyle yeniden açılır
  { const bs = document.querySelector('#bolge'); if (bs) { const BL = window.BOLGELER || {}; if (window.KITALAR) bs.innerHTML = '<option value="dunya">🌍 Tüm Dünya</option>' + window.KITALAR.map(k => `<optgroup label="${k.ikon} ${k.ad}">${k.b.filter(b => BL[b]).map(b => `<option value="${b}">${BL[b].ikon} ${BL[b].ad}</option>`).join('')}</optgroup>`).join(''); bs.value = BG.id; bs.addEventListener('change', () => { location.href = location.pathname + (bs.value === 'dunya' ? '' : '?bolge=' + bs.value); }); } }
  { const ai = document.querySelector('#about-ikon'), at = document.querySelector('#about-tx'); if (ai) ai.textContent = BG.ikon; if (at) at.textContent = ' ' + BG.ad + ' hakkında'; }
  if (BG.mevsimler) document.querySelectorAll('[data-season]').forEach(b => { const v = BG.mevsimler[b.dataset.season]; if (v) { b.textContent = v[0]; b.title = v[1]; } });
  if (!BG.uc3) document.body.classList.add('uc3yok');
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
  let W = 0, H = 0, TW = 0, TH = 0, DPR = 1;
  let Y = QS.get('yil') && !isNaN(+QS.get('yil')) ? clamp(+QS.get('yil'), P.to, P.from) : P.start, playing = false, speed = P.composite ? 10 : 2, shown = null;
  let camX = 0, follow = true, last = performance.now();
  let hoverEv = null, view = 'sahne';

  S.prepare(SP); S.initAgents();
  camX = S.focus(Y).wx;
  const camRange = () => { const xs = SP.sites.map(s => s.wx); return [Math.min(...xs) - 800, Math.max(...xs) + 800]; };
  function syncScenePart() {
    const np = partFor(Y);
    if (np !== SP) { SP = np; S.prepare(SP); S.initAgents(); camX = S.focus(Y).wx; follow = true; }
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
    document.title = `Zaman Yolculuğu · ${BG.ad} · ${P.kisa}`;
    if (eraSel.value !== id) eraSel.value = id;
    $('#panel').scrollTop = 0;
  }
  document.title = `Zaman Yolculuğu · ${BG.ad} · ${P.kisa}`;

  // ---------- boyut ----------
  function resize() {
    DPR = Math.min(2, window.devicePixelRatio || 1);
    const r = cv.parentElement.getBoundingClientRect();
    W = r.width; H = r.height;
    for (const c of [cv, mcv, gcv]) { c.width = Math.round(W * DPR); c.height = Math.round(H * DPR); }
    const t = tcv.getBoundingClientRect();
    TW = t.width; TH = t.height; tcv.width = Math.round(TW * DPR); tcv.height = Math.round(TH * DPR);
  }
  window.addEventListener('resize', resize);
  resize();

  // ---------- zaman ----------
  function setYear(y, fromUser) { Y = clamp(y, P.to, P.from); if (fromUser) follow = true; }
  const yearX = y => 14 + (P.from - y) / (P.from - P.to) * (TW - 28);
  const xYear = x => P.from - (x - 14) / (TW - 28) * (P.from - P.to);

  // ---------- panel ----------
  const popAt = y => {
    const n = P.nufus; for (let i = 1; i < n.length; i++) if (y <= n[i - 1][0] && y >= n[i][0]) return n[i - 1][1] + (n[i][1] - n[i - 1][1]) * (n[i - 1][0] - y) / (n[i - 1][0] - n[i][0]);
    return y > n[0][0] ? n[0][1] : n[n.length - 1][1];
  };
  const bar = (ad, v) => `<div class="bar"><span>${ad}</span><i><b style="width:${v / 5 * 100}%"></b></i></div>`;
  const card = (ikon, baslik, body, cls = '') => `<section class="card ${cls}"><h3><span>${ikon}</span>${baslik}</h3>${body}</section>`;

  // ---------- 3D şehir ----------
  const s3Var = () => !!(window.Sehir3D && window.Sehir3D.var('istanbul')) && (DUNYA || BG.id === 'anadolu');
  function sehir3dAc(ad = 'istanbul') {
    if (!window.Sehir3D) return; closeModal(); playingBeforeModal = false; playing = false; updPlay(); kartlariKapat();
    window.Sehir3D.open(ad, { Y: () => Y, setYear: y => setYear(y, true), onClose: () => { shown = null; } });
  }
  { const b = document.querySelector('#s3hizli'); if (b) { b.hidden = !s3Var(); b.addEventListener('click', () => sehir3dAc()); } }
  const s3Dugme = () => s3Var() ? '<button class="symbtn s3btn">🧊 İstanbul\'u 3D gez</button>' : '';

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
  function openDevlet(k) {
    const bit = k.y0 <= -2024 ? 'bugün' : YIL.fmt(k.y0);
    const rows = [['Ad', k.tr && k.tr !== k.n ? `${k.tr} <small>(${esc(k.n)})</small>` : esc(k.n)], ['Bu sınırların geçerli olduğu yıllar', `${YIL.fmt(k.y1)} – ${bit}`], ['Yüzölçümü', `yaklaşık ${fmt(k.a)} km²`]];
    showModal({ ikon: '🗺️', title: k.tr || k.n, sub: `${YIL.fmt(k.y1)} – ${bit}`, tabs: [{ ad: 'Genel', html: `${rowsHTML(rows)}${k.w ? `<p><a href="https://en.wikipedia.org/wiki/${encodeURIComponent(k.w.replace(/ /g, '_'))}" target="_blank" rel="noopener">Vikipedi'de oku ↗</a></p>` : ''}<p class="note">Sınırlar: Cliopatria (Seshat Global History Databank, CC BY 4.0). Sadeleştirilmiştir; kıyılar kara haritasına kırpılır. Tarihî sınırlar çoğu zaman kesin değildir.</p>` }] });
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
      <div class="headbtns"><button class="aboutbtn">${BG.ikon} ${BG.hakkinda} <small>(${BG.kultur ? 'din, tanrılar, bilim…' : 'halklar, din, yaşam…'})</small></button><button class="symbtn">⭐ ${BG.simgeAd}</button>${s3Dugme()}${yasaVar() ? '<button class="symbtn lifebtn">🎭 Bu dönemde yaşasaydım…</button>' : ''}</div></div>`;
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
      <div class="headbtns"><button class="symbtn">⭐ ${BG.simgeAd}</button>${s3Dugme()}</div></div>`;
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
    if (ev.target.closest('.s3btn')) return sehir3dAc();
    if (ev.target.closest('.lifebtn')) return openLife();
    const mu = ev.target.closest('[data-mumya]'); if (mu) return openMummy(mu.dataset.mumya);
    if (ev.target.closest('.symbtn')) return openSymbols();
    const inf = ev.target.closest('[data-info]'); if (inf) return openInfo(inf.dataset.info);
    const b = ev.target.closest('[data-y]'); if (!b) return;
    setYear(+b.dataset.y, true); playing = false; updPlay();
  });

  function yearCard(y) {
    if (DUNYA) {
      $('#yc-year').textContent = YIL.fmt(y); $('#yc-ago').textContent = YIL.once(y);
      // küre hangi bölgeye bakıyorsa önce o bölgeler (en yakın 3)
      const v = window.Dunya && window.Dunya.view, uz = b => { const m = BLR[b].isaret || BLR[b].merkez; if (!v || !m) return 0; const dl = ((m[1] - v.lon + 540) % 360) - 180; return (m[0] - v.lat) ** 2 + (dl * Math.cos(v.lat * Math.PI / 180)) ** 2; };
      const L = BSIRA.map(b => { const a = bolgeAn(b, y); return a && a.p ? [uz(b), BLR[b].ikon + ' ' + a.p.kisa] : null; }).filter(Boolean).sort((a, b) => a[0] - b[0]);
      $('#yc-ruler').textContent = L.slice(0, 3).map(x => x[1]).join(' · ') + (L.length > 3 ? ` · +${L.length - 3} bölge` : '');
      $('#yc-site').textContent = '🌍 Tüm Dünya'; $('#yc-city').hidden = true; return;
    }
    const r = pick(P.rulers, y);
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

  // ---------- zaman çizelgesi ----------
  function drawTL() {
    tg.setTransform(DPR, 0, 0, DPR, 0, 0); tg.clearRect(0, 0, TW, TH);
    tg.textBaseline = 'middle'; tg.textAlign = 'center';
    const x0 = yearX(P.from);
    if (DUNYA) {
      // her kıta bir sıra; içinde her bölge ince bir şerit (bölgenin çağları iki tonla)
      const KT = window.KITALAR || [{ id: 'hepsi', ad: '', ikon: '', b: BSIRA }], RENK = { afrika: ['#9a6a2e', '#b8843e'], asya: ['#8e3b32', '#ad5446'], avrupa: ['#2f5a8a', '#4a76a8'], amerika: ['#2e7a4e', '#46966a'], okyanusya: ['#2a8a9a', '#46a8b8'], hepsi: ['#6a5a4a', '#8a7a6a'] };
      const rh = Math.min(13, Math.floor(40 / KT.length)), fs = Math.min(9.5, rh + 0.5);
      KT.forEach((kt, i) => {
        const y0 = 4 + i * rh, bl = kt.b.filter(b => BSIRA.includes(b)), lh = (rh - 1) / Math.max(1, bl.length), rk = RENK[kt.id] || RENK.hepsi;
        tg.fillStyle = 'rgba(255,255,255,0.05)'; tg.fillRect(0, y0, TW, rh - 1);
        bl.forEach((b, k) => PARTS.filter(p => p.bolge === b).forEach((p, j) => {
          const a = yearX(Math.min(p.from, P.from)), bb = yearX(Math.max(p.to, P.to)); if (bb <= a) return;
          tg.fillStyle = rk[(j + k) % 2]; tg.fillRect(a, y0 + k * lh, bb - a, Math.max(1, lh - 0.6));
        }));
        tg.font = `700 ${fs}px system-ui`; const t = `${kt.ikon} ${kt.ad} · ${bl.length}`, w = tg.measureText(t).width + 10;
        tg.fillStyle = 'rgba(25,18,12,0.82)'; tg.fillRect(2, y0, w, rh - 1); tg.fillStyle = '#f5e6c8'; tg.textAlign = 'left'; tg.fillText(t, 7, y0 + rh / 2); tg.textAlign = 'center';
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
    const pxYr = (TW - 28) / (P.from - P.to);
    const step = [10, 20, 25, 50, 100, 200, 250, 500, 1000, 2000].find(v => v * pxYr >= 64) || 2000;
    const tick = [5, 10, 20, 25, 50, 100, 250, 500].find(v => v * pxYr >= 7) || 500;
    for (let y = Math.ceil(P.to / tick) * tick; y <= P.from; y += tick) {
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
  tcv.addEventListener('pointerdown', ev => {
    const [x, y] = tlPos(ev); const e = evAt(x, y);
    playing = false; updPlay();
    if (e) { setYear(e.y, true); toast(`<b>${YIL.fmt(e.y)}</b> ${e.t}`); return; }
    dragTL = true; tcv.setPointerCapture(ev.pointerId); setYear(Math.round(xYear(x)), true);
  });
  tcv.addEventListener('pointermove', ev => {
    const [x, y] = tlPos(ev);
    if (dragTL) { setYear(Math.round(xYear(x)), true); return; }
    hoverEv = evAt(x, y);
    const tip = $('#tip');
    if (hoverEv) { tip.style.display = 'block'; tip.innerHTML = `<b>${YIL.fmt(hoverEv.y)}</b> ${hoverEv.t}`; tip.style.left = clamp(x - 120, 4, TW - 244) + 'px'; }
    else tip.style.display = 'none';
  });
  tcv.addEventListener('pointerup', () => { dragTL = false; });
  tcv.addEventListener('pointerleave', () => { hoverEv = null; $('#tip').style.display = 'none'; });

  // ---------- sahnede sürükleme ve tıklama ----------
  let dragS = null;
  const cvPos = (el, ev) => { const r = el.getBoundingClientRect(); return [ev.clientX - r.left, ev.clientY - r.top]; };
  cv.addEventListener('pointerdown', ev => { dragS = { x: ev.clientX, c: camX, moved: false }; cv.setPointerCapture(ev.pointerId); });
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

  // ---------- harita ----------
  function mapItems() {
    const out = [], seen = new Set(), co = MIS.coords || {};
    for (const p of [SP, ...PARTS]) for (const m of p.monuments) {
      if (seen.has(m.id) || !co[m.id] || m.minor) continue;
      const pr = S.progress(m, Y); if (pr < 0) continue;
      seen.add(m.id);
      const ruined = m.ruin && Y <= m.ruin;
      const ins = (m.stop && Y > m.stop) || (!m.stop && pr < 1);
      out.push({ id: m.id, ad: m.ad, type: m.type, ll: co[m.id], p: pr, w: S.vol(m), st: ruined ? 'harabe' : ins ? 'ins' : (m.stop && Y <= m.stop ? 'harabe' : 'bitti') });
    }
    return out;
  }
  function mapCities() {
    return (MIS.sehirler || []).filter(c => Y <= c.from && Y >= c.to).map(c => ({ ...c, cap: (c.b || []).some(([a, b]) => Y <= a && Y >= b) }));
  }
  let dragM = null; const pts = new Map();
  mcv.addEventListener('pointerdown', ev => { pts.set(ev.pointerId, [ev.clientX, ev.clientY]); dragM = { x: ev.clientX, y: ev.clientY, moved: false, d0: null }; mcv.setPointerCapture(ev.pointerId); });
  mcv.addEventListener('pointermove', ev => {
    if (pts.has(ev.pointerId)) pts.set(ev.pointerId, [ev.clientX, ev.clientY]);
    if (pts.size === 2) {
      const [a, b] = [...pts.values()], d = Math.hypot(a[0] - b[0], a[1] - b[1]);
      if (dragM.d0) { const r = mcv.getBoundingClientRect(); M.zoomAt((a[0] + b[0]) / 2 - r.left, (a[1] + b[1]) / 2 - r.top, d / dragM.d0); }
      dragM.d0 = d; dragM.moved = true; return;
    }
    if (!dragM) { const h = M.hitTest(...cvPos(mcv, ev)); M.setHover(h); mcv.style.cursor = h ? 'pointer' : 'grab'; return; }
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
    pts.delete(ev.pointerId); if (!pts.size) dragM = null;
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
  gcv.addEventListener('pointerdown', ev => { DN.hold(); gpts.set(ev.pointerId, [ev.clientX, ev.clientY]); dragG = { x: ev.clientX, y: ev.clientY, moved: false, d0: null }; gcv.setPointerCapture(ev.pointerId); });
  gcv.addEventListener('pointermove', ev => {
    if (gpts.has(ev.pointerId)) gpts.set(ev.pointerId, [ev.clientX, ev.clientY]);
    if (gpts.size === 2) { const [a, b] = [...gpts.values()], d = Math.hypot(a[0] - b[0], a[1] - b[1]); if (dragG.d0) DN.zoom(d / dragG.d0); dragG.d0 = d; dragG.moved = true; return; }
    if (!dragG) { const h = DN.hitTest(...cvPos(gcv, ev)); DN.setHover(h); gcv.style.cursor = h ? 'pointer' : 'grab'; return; }
    const dx = ev.clientX - dragG.x, dy = ev.clientY - dragG.y;
    if (dragG.moved || Math.hypot(dx, dy) > 4) { dragG.moved = true; DN.drag(dx, dy); dragG.x = ev.clientX; dragG.y = ev.clientY; }
  });
  const endG = ev => {
    if (dragG && !dragG.moved && gpts.size <= 1) { const h = DN.hitTest(...cvPos(gcv, ev)); if (h && h.kind === 'med') DN.goEgypt(h.b ? h.b.merkez : BG.merkez, h.b ? h.b.merkezZ : BG.merkezZ); else if (h && h.kind === 'yapi') showMonument(h.it.id, h.kids, h); else if (h && h.kind === 'kume') DN.zoomTo(h.cx, h.cy, 2.6); else if (h && h.kind === 'sehir') openCity(h.c); else if (h && h.kind === 'olay') openEvent(h.e); else if (h && h.kind === 'kaynak') openKaynak(h.k); else if (h && h.kind === 'yol') openYol(h.t); else if (h && h.kind === 'devlet') openDevlet(h.k); else if (h && h.kind === 'yolculuk') openYolculuk(h.j); }
    gpts.delete(ev.pointerId); if (!gpts.size) dragG = null;
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
      ${/^İstanbul/.test(c.ad) && window.Sehir3D ? '<div class="gos"><button class="phbtn" data-s3="istanbul">🧊 Şehri 3D gez</button></div>' : ''}<h4>Önemi</h4><p>${sb.onem || c.not || ''}</p>${!kisa && sb.ilginc ? `<div class="did"><b>💡 Biliyor muydun?</b><p>${sb.ilginc}</p></div>` : ''}`;
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
      setView('sahne'); follow = false; camX = best.wx; cityFocus = c.ad; shown = null;
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
  const OLAY_TUR = { savas: '⚔️ Savaş', afet: '🌋 Doğal afet', antlasma: '📜 Antlaşma', olay: '🏛️ Önemli olay' };
  const AFET_TUR = { deprem: 'Deprem', tsunami: 'Deprem ve dev dalga', sel: 'Sel', yangin: 'Yangın', yanardag: 'Yanardağ patlaması', kuraklik: 'Kuraklık', salgin: 'Salgın hastalık' };
  function openEvent(e) {
    const rows = [['Tarih', `${YIL.fmt(e.y)}${e.y < 100 ? '' : ' (yaklaşık)'}`], ['Tür', e.tur === 'afet' ? AFET_TUR[e.alt] || 'Doğal afet' : OLAY_TUR[e.tur]], ['Tarihî önemi', '★'.repeat(e.onem) + '☆'.repeat(Math.max(0, 5 - e.onem))]];
    if (e.taraflar) rows.push(['Taraflar', e.taraflar.join(' <b>vs</b> ').replace(/ <b>vs<\/b> /g, e.tur === 'antlasma' ? ' · ' : ' <b>vs</b> ')]);
    if (e.kazanan) rows.push(['Kazanan', `<b>${e.kazanan}</b>`]);
    if (e.kuvvetler) rows.push(['Kuvvetler', e.kuvvetler]);
    const inRange = e.y <= P.from && e.y >= P.to;
    showModal({ ikon: { savas: '⚔️', afet: '🌋', antlasma: '📜', olay: '🏛️' }[e.tur], title: e.ad, sub: `${YIL.fmt(e.y)}`, tabs: [
      { ad: 'Genel', html: `${rowsHTML(rows)}${e.ozet ? `<p>${e.ozet}</p>` : ''}${e.sonuc ? `<h4>Sonuç</h4><p>${e.sonuc}</p>` : ''}${inRange ? `<div class="gos"><button class="phbtn" data-go="${e.y}">⏩ Zaman çizelgesini ${YIL.fmt(e.y)}'e götür</button></div>` : ''}<p class="note">Antik kaynaklardaki asker sayıları çoğu zaman abartılıdır; rakamlar yaklaşıktır.</p>` },
      ...(e.wiki ? [photoTab(e.wiki, 8)] : [])] });
  }
  function openKaynak(k) {
    const t = (window.KAYNAK_TUR || {})[k.tur] || {};
    const rows = [['Kaynak', `${t.ad} (${t.sem})`], ['İşletildiği yıllar', `${YIL.fmt(k.from)} – ${k.to <= -2026 ? 'bugün' : YIL.fmt(k.to)} (yaklaşık)`]];
    showModal({ ikon: '⛏️', title: k.ad, sub: t.ad, tabs: [{ ad: 'Genel', html: `${rowsHTML(rows)}<p>${k.not}</p>` }] });
  }
  const kaynakAktif = () => (window.KAYNAKLAR || []).filter(k => Y <= k.from && Y >= k.to);
  function olayListesi() {
    const evs = (window.OLAYLAR || []).filter(e => DN.layers[e.tur] && Math.abs(Y - e.y) <= DN.aralik).sort((a, b) => b.y - a.y);
    if (!evs.length) return '<p>Bu yıla ±100 yıl uzaklıkta kayıtlı bir savaş, afet ya da antlaşma yok.</p>';
    return `<ul class="evs olaylist">${evs.map(e => `<li data-olay="${e.id}" class="${Math.abs(e.y - Y) <= 5 ? 'on' : ''}">${e.tur === 'savas' ? '⚔️' : e.tur === 'afet' ? '🌋' : '📜'} <b>${YIL.fmt(e.y)}</b> ${e.ad} ${'★'.repeat(e.onem)}</li>`).join('')}</ul>`;
  }
  $('#panel').addEventListener('click', ev => {
    const o = ev.target.closest('[data-olay]'); if (!o) return;
    const e = (window.OLAYLAR || []).find(x => x.id === o.dataset.olay); if (!e) return;
    if (view !== 'dunya') setView('dunya');
    DN.goTo(e.ll[0], e.ll[1], 7); openEvent(e);
  });
  // ---------- katman menüsü (sağ üstte 🗂️) ----------
  const KATLAR = ['savas', 'antlasma', 'afet', 'olay', 'kaynak', 'ticaret', 'yolculuk'];
  const katSay = k => k === 'kaynak' ? kaynakAktif().length : k === 'ticaret' ? (window.TICARET_YOLLARI || []).filter(t => Y <= t.from && Y >= t.to).length
    : k === 'yolculuk' ? (window.YOLCULUKLAR || []).filter(j => Math.abs(Y - j.y) <= DN.aralik).length : (window.OLAYLAR || []).filter(e => e.tur === k && Math.abs(Y - e.y) <= DN.aralik).length;
  function renderOlayPanel() {
    const el = $('#katman'); if (!el || el.hidden) return;
    el.querySelectorAll('[data-kat]').forEach(inp => {
      const k = inp.dataset.kat; inp.checked = !!DN.layers[k];
      const c = inp.parentElement.querySelector('i'); if (c) c.textContent = k === 'sinir' ? '' : (katSay(k) || '');
    });
  }
  $('#katman').addEventListener('change', ev => { const k = ev.target.dataset && ev.target.dataset.kat; if (k) { DN.setLayer(k, ev.target.checked); renderOlayPanel(); } });
  $('#katbtn').addEventListener('click', () => { const el = $('#katman'), ac = el.hidden; if (ac) kartlariKapat('katman'); el.hidden = !ac; $('#katbtn').classList.toggle('on', ac); renderOlayPanel(); });
  for (const k of KATLAR) DN.setLayer(k, false);
  DN.setLayer('ticaret', true);
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

  // ---------- 3D görünüm ----------
  function open3D(id) {
    if (!window.UcBoyut) return;
    closeModal(); playingBeforeModal = false;
    window.UcBoyut.open(id, {
      Y: () => Y, setYear: y => setYear(y, true), coords: MIS.coords || {}, progress: S.progress, openInfo,
      monuments: () => { const out = [...SP.monuments], seen = new Set(out.map(m => m.id)); for (const p of PARTS) for (const m of p.monuments) if (!seen.has(m.id)) { seen.add(m.id); out.push(m); } return out; }
    });
  }
  const has3D = id => !!(BG.uc3 && window.UcBoyut && (MIS.coords || {})[id]);

  // ---------- küredeki yapıya tıklayınca: sahneye geç ----------
  // küredeki simgeye tıklanınca: o yapının kartı hemen açılır; aynı simgede toplanan yakın yapılar kartta düğme olur
  function showMonument(id, kids, hit) {
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
      card.querySelector('.cc-body').innerHTML = `<p><small>${BLR[p.bolge].ikon} ${BLR[p.bolge].ad} · ${m.yer || ''}</small></p><p><b>${YIL.fmt(Math.round(Y))}:</b> ${durum}</p>${bi && bi.neden ? `<p>${bi.neden}</p>` : ''}
        <div class="gos"><button class="phbtn" data-ccinfo="${id}">ℹ️ Bilgi kartı</button><button class="phbtn icbtn" data-ccgit="${p.bolge}" data-ccyapi="${id}">🎬 Sahnede gör</button></div>`;
      card.dataset.city = ''; card.querySelector('.cc-more').hidden = true; kartGoster();
      return;
    }
    const m = SP.monuments.find(x => x.id === id);
    if (!m) { openInfo(id); return; }
    setView('sahne'); follow = false; camX = m.wx; cityFocus = m.ad.replace(/ \(.*\)$/, ''); shown = null;
    const b0 = bilgiOf(id), b = b0 && b0.ref ? bilgiOf(b0.ref) : b0, p = S.progress(m, Y);
    const durum = p < 0 ? 'henüz başlanmadı' : m.ruin && Y <= m.ruin ? 'harabe' : m.stop && Y <= m.stop ? 'yarım kaldı' : p >= 1 ? 'tamamlanmış' : `inşaat sürüyor, %${Math.round(p * 100)}`;
    const card = $('#citycard');
    card.querySelector('.cc-title').textContent = m.ad;
    card.querySelector('.cc-body').innerHTML = `<p><b>${YIL.fmt(Math.round(Y))}:</b> ${durum}</p>${b ? `<p>${b.neden}</p>` : ''}
      <div class="gos">${has3D(id) ? `<button class="phbtn icbtn" data-cc3d="${id}">🧊 3D'de gör</button>` : ''}<button class="phbtn" data-ccinfo="${id}">ℹ️ Bilgi kartı</button>${K.ic.eslesme[id] ? `<button class="phbtn icbtn" data-ccic="${id}">🔍 İçine gir</button>` : ''}</div>`;
    card.dataset.city = ''; card.querySelector('.cc-more').hidden = true;
    kartGoster();
  }
  $('#citycard').addEventListener('click', e => {
    const s3b = e.target.closest('[data-s3]'); if (s3b) return sehir3dAc(s3b.dataset.s3);
    const d3 = e.target.closest('[data-cc3d]'); if (d3) return open3D(d3.dataset.cc3d);
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
    // tek bölge modunda küre ilk açıldığında o bölgeye döner (Amerika ve Okyanusya başlangıç görünümünün arkasında kalıyor)
    if (v === 'dunya' && !DUNYA && !setView.kureGitti && BG.merkez && window.Dunya) { setView.kureGitti = true; window.Dunya.goEgypt(BG.merkez, Math.min(BG.merkezZ || 3, 3)); }
    modGuncelle();
  }
  function modGuncelle() { document.querySelectorAll('[data-mod]').forEach(b => b.classList.toggle('on', (b.dataset.mod === 'kesfet' && view === 'dunya') || (b.dataset.mod === 'sahne' && view === 'sahne'))); }
  function sahneSec() {
    showModal({ ikon: '🎬', title: 'Hangi bölgenin sahnesi?', sub: `${YIL.fmt(Math.round(Y))} yılına gidilir`, tabs: [{ ad: 'Bölge seç', html: `<p>Canlı sahnede yapılar yılına göre yükselir, insanlar ve gemiler dönemine göre değişir.</p><div class="secim">${window.Sehir3D ? '<button data-s3="istanbul">🧊 <b>İstanbul · 3D</b><small>Surlar, Ayasofya, camiler ve mahalleler yıl yıl değişir</small></button>' : ''}${BSIRA.map(b => `<button data-gitbolge2="${b}">${BLR[b].ikon} <b>${BLR[b].ad}</b><small>${BLR[b].ad} sahnesini aç</small></button>`).join('')}</div>` }] });
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
  function yasaAc() { if (yasaVar()) openLife(); else yasaYok(); }
  document.querySelectorAll('[data-mod]').forEach(b => b.addEventListener('click', () => {
    const m = b.dataset.mod;
    if (m === 'kesfet') { kartlariKapat(); setView('dunya'); }
    else if (m === 'sahne') { if (DUNYA) sahneSec(); else { kartlariKapat(); setView('sahne'); } }
    else if (m === 'yasa') yasaAc();
    else if (m === 'dog') { if (!DUNYA) { location.href = location.pathname + '?dog=1'; return; } kartlariKapat(); closeModal(); if (window.Hayat) window.Hayat.basla(); }
  }));

  // ---------- bilgi penceresi (sekmeli) ----------
  const modal = $('#modal');
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
    const ph = e.target.closest('[data-photos]');
    if (ph) { const box = ph.parentElement.querySelector('.ph-box'); ph.remove(); loadPhotos(ph.dataset.photos, box, 6); return; }
    const u3 = e.target.closest('[data-u3]'); if (u3) { open3D(u3.dataset.u3); return; }
    const icb = e.target.closest('[data-ic]'); if (icb) { zoomInto(icb.dataset.ic); return; }
    const gb = e.target.closest('[data-god]'); if (gb) { openGod(gb.dataset.god); return; }
    const mb = e.target.closest('[data-mumya]'); if (mb) { openMummy(mb.dataset.mumya); return; }
    const rb = e.target.closest('[data-role]'); if (rb) { openRole(rb.dataset.role); return; }
    if (e.target.closest('.lifebtn')) { openLife(); return; }
    const s3m = e.target.closest('[data-s3]'); if (s3m) { sehir3dAc(s3m.dataset.s3); return; }
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
      if (m) { follow = false; camX = m.wx; }
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
        ${icOf(id) ? `<button class="icbtn" data-ic="${id}">🔍 Yakınlaş: içine gir</button>` : ''}
        ${has3D(id) ? `<button class="icbtn" data-u3="${id}">🧊 3D'de gör</button>` : ''}</span>`;
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
  function updPlay() { $('#play').textContent = playing ? '⏸' : '▶'; $('#play').title = playing ? 'Durdur' : 'Oynat'; }
  $('#play').addEventListener('click', () => { if (Y <= P.to) Y = P.from; playing = !playing; follow = true; updPlay(); });
  $('#back').addEventListener('click', () => { setYear(Math.round(Y) + 1, true); });
  $('#fwd').addEventListener('click', () => { setYear(Math.round(Y) - 1, true); });
  $('#speed').value = String(speed);
  $('#speed').addEventListener('change', e => { speed = +e.target.value; });
  document.querySelectorAll('[data-season]').forEach(b => b.addEventListener('click', () => {
    S.setSeason(b.dataset.season); document.querySelectorAll('[data-season]').forEach(x => x.classList.toggle('on', x === b));
  }));
  window.addEventListener('keydown', e => {
    if (e.target.tagName === 'SELECT' || !modal.hidden) return;
    if (e.key === 'ArrowLeft') setYear(Math.round(Y) + (e.shiftKey ? 10 : 1), true);
    else if (e.key === 'ArrowRight') setYear(Math.round(Y) - (e.shiftKey ? 10 : 1), true);
    else if (e.key === ' ') { e.preventDefault(); $('#play').click(); }
  });

  // ---------- döngü ----------
  function frame(now) {
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
      if (follow) { const tx = S.focus(Y).wx, d = tx - camX, k = 1 - Math.exp(-dt * (Math.abs(d) > 1500 ? 1.2 : 1.8)); camX += d * k; }
      $('#follow').style.display = follow ? 'none' : 'block';
      S.draw(g, W, H, DPR, Y, dt, camX);
    } else if (view === 'dunya') {
      $('#follow').style.display = 'none';
      window.Dunya.draw(gg, W, H, DPR, dt, Y, mapItems(), mapCities());
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
    monuments: () => P.monuments || SP.monuments, cities: () => MIS.sehirler || [], coords: id => MIS.coords[id], hasInfo: id => !!bilgiOf(id)
  };
  window.__zy = { get Y() { return Y; }, get camX() { return camX; }, get follow() { return follow; }, setYear: y => setYear(y, true), snap: wx => { follow = false; camX = wx ?? S.focus(Y).wx; }, setView, switchPlace, openInfo, openCity: ad => openCity((MIS.sehirler || []).find(c => c.ad === ad)), showMonument: id => showMonument(id), open3D: id => open3D(id) };
  updPlay();
  if (DUNYA) { setView('dunya'); DN.goEgypt(BG.merkez, BG.merkezZ); }
  else if (QS.get('yapi')) { const id = QS.get('yapi'); syncScenePart(); setTimeout(() => showMonument(id), 50); }
  modGuncelle();
  if (QS.get('yasa')) { syncScenePart(); setTimeout(yasaAc, 80); }
  // ---------- ilk ziyarette bir kez: üç kısa ipucu ----------
  const IPUCLARI = [
    '⏳ <b>Alttaki zaman çizelgesini sürükle</b>: yıllar arasında gezersin. ▶ ile zaman akmaya başlar.',
    '🌍 <b>Keşfet</b> küreyi, 🎬 <b>Sahne</b> bir bölgenin canlı görüntüsünü açar. 🧑‍🌾 <b>Yaşa</b>: o yılda bir meslek seçip bir gününü yaşarsın.',
    '📖 <b>Bu yıl</b>: o yılın özeti (hükümdar, geçim, savaşlar). 🗂️ <b>Katmanlar</b>: haritada ticaret yollarını, savaşları, madenleri aç ya da kapat.'
  ];
  let ipN = 0;
  function ipucuGoster() {
    const el = $('#ipucu');
    if (ipN >= IPUCLARI.length) { el.hidden = true; try { localStorage.setItem('zy-ipucu', '1'); } catch (e) { /* gizli mod */ } return; }
    el.innerHTML = `<p>${IPUCLARI[ipN]}</p><div class="ip-alt"><small>${ipN + 1} / ${IPUCLARI.length}</small><button class="ip-gec">Geç</button><button class="ip-ok">${ipN + 1 < IPUCLARI.length ? 'Sonraki' : 'Anladım'}</button></div>`;
    el.hidden = false;
  }
  $('#ipucu').addEventListener('click', e => { if (e.target.closest('.ip-gec')) { ipN = IPUCLARI.length; ipucuGoster(); } else if (e.target.closest('.ip-ok')) { ipN++; ipucuGoster(); } });
  let ilk = false; try { ilk = !localStorage.getItem('zy-ipucu'); } catch (e) { /* gizli mod */ }
  if (ilk && !QS.get('yasa') && !QS.get('dog')) setTimeout(ipucuGoster, 900);
  if (QS.get('dog') && DUNYA) setTimeout(() => { if (window.Hayat) window.Hayat.basla(); }, 700);
  requestAnimationFrame(frame);
})();
