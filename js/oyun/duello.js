// 🎯 Arkadaşına Hazine Düellosu — Yapı · Hayvan · Bitki + Kolay / Orta / Zor + Kademeli İpuçları (%100 sunucusuz link!)
'use strict';
(() => {
  const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const D = Math.PI / 180;
  const kmMesafe = (a, b) => {
    const la1 = a[0] * D, la2 = b[0] * D;
    const h = Math.sin((la2 - la1) / 2) ** 2 + Math.cos(la1) * Math.cos(la2) * Math.sin((b[1] - a[1]) * D / 2) ** 2;
    return Math.round(12742 * Math.asin(Math.min(1, Math.sqrt(h))));
  };

  // Enlem/boylamdan kolay olmayan yarımküre & iklim ipucu üretir
  function yarimkureIpucu(ll) {
    const la = ll[0], lo = ll[1];
    const yk = la >= 8 ? 'Kuzey Yarımküre' : la <= -8 ? 'Güney Yarımküre' : 'Ekvator kuşağı';
    const dogu = lo >= 15 ? 'Doğu Yarımküre' : lo <= -25 ? 'Batı Yarımküre (Amerika tarafı)' : 'Başlangıç Meridyeni çevresi';
    const a = Math.abs(la);
    const ikl = a < 18 ? 'Tropikal / Ekvatoral kuşak' : a < 32 ? 'Dönence / Subtropikal kuşak' : a < 55 ? 'Ilıman kuşak' : 'Kutup / Soğuk kuşak';
    return `${yk} · ${ikl} · ${dogu}`;
  }

  const KOLAY_HAYVAN = new Set(['devpanda', 'bengalkaplani', 'asyafili', 'aslan', 'zurafa', 'kutupayisi', 'penguen', 'kanguru', 'koala', 'komodo', 'orangutan', 'caretta', 'vankedisi', 'lama', 'jaguar', 'anakonda', 'goril', 'afrikafili', 'suaygiri', 'ceylan', 'deve']);
  const KOLAY_BITKI = new Set(['zeytin', 'kahve', 'kakao', 'cay', 'papirus', 'sekoya', 'baobab', 'bambu', 'kaucuk', 'palmiye', 'sedir', 'sakura', 'okaliptus', 'kaktus', 'lale', 'findik', 'incir']);
  const ZOR_ROZET = { kolay: '🟢 Kolay', orta: '🟡 Orta', zor: '🔴 Zor' };
  const KAT_AD = { yapi: '🏛️ Yapı', tarih: '📜 Tarih', hayvan: '🐾 Hayvan', bitki: '🌿 Bitki', doga: '🌍 Doğa' };

  function havuz() {
    const out = [];
    for (const y of window.YAPILAR || []) {
      if (!y.ll) continue;
      const zor = y.o >= 5 ? 'kolay' : y.o >= 4 ? 'orta' : 'zor';
      const ip1 = y.yil ? `Yapım / Dönem: ${y.yil}` : 'Tarihî anıt veya simge yapı';
      const ip2 = yarimkureIpucu(y.ll);
      const ip3 = y.k ? y.k.slice(0, 95) : 'Dünyaca bilinen tarihî / mimari eser';
      out.push({ id: 'y:' + y.id, kat: 'yapi', alan: 'tarih', zor, ad: y.ad, ik: '🏛️', ll: y.ll,
        soru: `"${y.ad}" yapısı nerede bulunur?`,
        ipuclari: [ip1, ip2, ip3] });
    }
    const KEK = window.ATLAS_KULTUR_EK || {};
    for (const ic of KEK.icatlar || []) {
      if (!ic.ll) continue;
      out.push({ id: 'ic:' + ic.id, kat: 'tarih', alan: 'tarih', zor: 'orta', ad: ic.ad.split(' (')[0], ik: ic.ik || '💡', ll: ic.ll,
        soru: `"${ic.ad.split(' (')[0]}" icadı nerede ortaya çıktı?`,
        ipuclari: [`Dönem: ${ic.donem} · Mucit: ${ic.mucit}`, yarimkureIpucu(ic.ll), ic.ozet.slice(0, 95)] });
    }
    for (const bi of KEK.insanlar || []) {
      if (!bi.ll) continue;
      out.push({ id: 'bi:' + bi.id, kat: 'tarih', alan: 'tarih', zor: 'orta', ad: bi.ad.split(' (')[0], ik: bi.ik || '👑', ll: bi.ll,
        soru: `"${bi.ad.split(' (')[0]}" hangi coğrafyada yaşadı?`,
        ipuclari: [`Dönem: ${bi.donem}`, yarimkureIpucu(bi.ll), bi.ozet.slice(0, 95)] });
    }
    for (const h of window.ATLAS_HAYVANLAR || []) {
      if (!h.ll) continue;
      const zor = (h.from != null || h.durum === 'Tükendi') ? 'zor' : KOLAY_HAYVAN.has(h.id) ? 'kolay' : 'orta';
      const ip1 = `Beslenme: ${h.beslenme || 'Yaban hayatı'}${h.durum ? ' · Durum: ' + h.durum : ''}`;
      const ip2 = yarimkureIpucu(h.ll);
      const ip3 = `Yaşam ortamı: ${h.habitat || h.bolge || 'Doğal yaşam alanı'}${h.kita ? ' (' + h.kita + ')' : ''}`;
      out.push({ id: 'h:' + h.id, kat: 'hayvan', alan: 'doga', zor, ad: h.ad, ik: h.ik || '🐾', ll: h.ll,
        soru: `"${h.ad}" doğal olarak nerede yaşar?`,
        ipuclari: [ip1, ip2, ip3] });
    }
    for (const b of window.ATLAS_BITKILER || []) {
      if (!b.ll) continue;
      const zor = KOLAY_BITKI.has(b.id) ? 'kolay' : (b.id.length % 2 === 0 ? 'orta' : 'zor');
      const ip1 = b.meyve ? `Ürün / Meyve: ${b.meyve.slice(0, 88)}` : 'Yöreye özgü bitki veya ağaç';
      const ip2 = yarimkureIpucu(b.ll);
      const ip3 = b.kullanim ? `Kullanım: ${b.kullanim.slice(0, 92)}` : `Yetişme bölgesi: ${b.bolge || ''}`;
      out.push({ id: 'b:' + b.id, kat: 'bitki', alan: 'doga', zor, ad: b.ad, ik: b.ik || '🌿', ll: b.ll,
        soru: `"${b.ad}" doğal olarak nerede yetişir?`,
        ipuclari: [ip1, ip2, ip3] });
    }
    const DEK = window.ATLAS_DOGA_EK || {};
    for (const kr of DEK.kraterler || []) {
      if (!kr.ll) continue;
      out.push({ id: 'kr:' + kr.id, kat: 'doga', alan: 'doga', zor: 'zor', ad: kr.ad.split(' (')[0], ik: '☄️', ll: kr.ll,
        soru: `"${kr.ad.split(' (')[0]}" göktaşı krateri nerede?`,
        ipuclari: [`Çap: ${kr.cap} · Yaş: ${kr.yas}`, yarimkureIpucu(kr.ll), kr.ozet.slice(0, 95)] });
    }
    for (const gl of DEK.golSelale || []) {
      if (!gl.ll) continue;
      out.push({ id: 'gl:' + gl.id, kat: 'doga', alan: 'doga', zor: 'orta', ad: gl.ad.split(' (')[0], ik: gl.ik || '💧', ll: gl.ll,
        soru: `"${gl.ad.split(' (')[0]}" nerede bulunur?`,
        ipuclari: [`Ölçü: ${gl.olcu}`, yarimkureIpucu(gl.ll), gl.ozet.slice(0, 95)] });
    }
    // Eski ?duello= linkleriyle geriye dönük uyumluluk
    for (const cg of window.ATLAS_COGRAFYA || []) {
      if (!cg.ll) continue;
      out.push({ id: 'c:' + cg.id, kat: 'doga', alan: 'doga', zor: 'orta', eski: true, ad: cg.ad, ik: cg.tur === 'dag' ? '🏔️' : cg.tur === 'col' ? '🏜️' : '✨', ll: cg.ll,
        soru: `"${cg.ad}" nerede bulunur?`,
        ipuclari: [cg.yukseklik ? `Özellik: ${cg.yukseklik}` : 'Doğa harikası / coğrafi bölge', yarimkureIpucu(cg.ll), cg.konum || 'Ünlü coğrafi nokta'] });
    }
    return out;
  }

  const kodla = obj => {
    try { return btoa(unescape(encodeURIComponent(JSON.stringify(obj)))).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, ''); }
    catch (e) { return ''; }
  };
  const coz = str => {
    try {
      const s = str.replace(/-/g, '+').replace(/_/g, '/');
      return JSON.parse(decodeURIComponent(escape(atob(s))));
    } catch (e) { return null; }
  };

  let box = null, bar = null;
  let secilenler = [];
  let katFiltre = 'tumu'; // tumu | yapi | hayvan | bitki
  let zorFiltre = 'tumu'; // tumu | kolay | orta | zor
  let aktif = null, t0 = 0, timer = null, sonuclar = [];

  function filtreliHavuz(H) {
    return H.filter(x => !x.eski
      && (katFiltre === 'tumu' || x.kat === katFiltre || x.alan === katFiltre)
      && (zorFiltre === 'tumu' || x.zor === zorFiltre));
  }

  function kur() {
    if (!box) {
      box = document.createElement('div');
      box.id = 'duello-kutu';
      box.className = 'hk-ov';
      box.hidden = true;
      box.setAttribute('role', 'dialog');
      box.setAttribute('aria-label', 'Arkadaşına Hazine Düellosu');
      box.innerHTML = `<div class="hk-kutu">
        <header class="hk-ust">
          <div><h2>🎯 Arkadaşına Hazine Düellosu</h2><small>Yapı, hayvan veya bitki seç (tek tür ya da karma 3 hedef), zorluğu ayarla ve linki gönder!</small></div>
          <button type="button" class="hk-x" title="Kapat">✕</button>
        </header>
        <div id="duello-govde" class="hk-govde"></div>
      </div>`;
      document.body.appendChild(box);
      box.querySelector('.hk-x').addEventListener('click', kapat);
      box.addEventListener('click', ev => {
        if (ev.target === box) { kapat(); return; }
        const kf = ev.target.closest('[data-dl-kat]');
        if (kf) { katFiltre = kf.dataset.dlKat; kurucuCiz(box.querySelector('#dl-ara')?.value || ''); return; }
        const zf = ev.target.closest('[data-dl-zor]');
        if (zf) { zorFiltre = zf.dataset.dlZor; kurucuCiz(box.querySelector('#dl-ara')?.value || ''); return; }
        const ek = ev.target.closest('[data-dl-ekle]');
        if (ek) {
          const id = ek.dataset.dlEkle;
          if (secilenler.includes(id)) secilenler = secilenler.filter(x => x !== id);
          else if (secilenler.length < 3) secilenler.push(id);
          kurucuCiz(box.querySelector('#dl-ara')?.value || '');
          return;
        }
        if (ev.target.closest('[data-dl-rast]')) {
          const H = filtreliHavuz(havuz()), s = new Set();
          while (s.size < 3 && s.size < H.length) s.add(H[Math.floor(Math.random() * H.length)].id);
          secilenler = [...s];
          kurucuCiz(box.querySelector('#dl-ara')?.value || '');
          return;
        }
        if (ev.target.closest('[data-dl-karma]')) {
          const H = havuz().filter(x => !x.eski && (zorFiltre === 'tumu' || x.zor === zorFiltre));
          const sec = [];
          for (const k of ['yapi', 'hayvan', 'bitki']) {
            const sub = H.filter(x => x.kat === k);
            const hav = sub.length ? sub : havuz().filter(x => !x.eski && x.kat === k);
            if (hav.length) sec.push(hav[Math.floor(Math.random() * hav.length)].id);
          }
          secilenler = sec.slice(0, 3);
          kurucuCiz(box.querySelector('#dl-ara')?.value || '');
          return;
        }
        if (ev.target.closest('[data-dl-link]')) { linkKopyala(); return; }
        if (ev.target.closest('[data-dl-test]')) {
          if (secilenler.length !== 3) return;
          const ad = (box.querySelector('#dl-ad')?.value || '').trim() || 'Bir Kâşif';
          kapat();
          duelloBaslat({ ad, ids: secilenler.slice() });
          return;
        }
        if (ev.target.closest('[data-dl-kur]')) { secilenler = []; kurucuCiz(''); return; }
        if (ev.target.closest('[data-dl-story]')) { storyIndir(); return; }
        if (ev.target.closest('[data-dl-paylas]')) { skorPaylas(); return; }
      });
      box.addEventListener('input', ev => {
        if (ev.target && ev.target.id === 'dl-ara') kurucuCiz(ev.target.value);
      });
    }
    if (!bar) {
      bar = document.createElement('div');
      bar.id = 'dl-bar';
      bar.className = 'dl-bar';
      bar.hidden = true;
      document.body.appendChild(bar);
      bar.addEventListener('click', ev => {
        if (ev.target.closest('[data-dl-iptal]')) { duelloDurdur(); return; }
        if (ev.target.closest('[data-dl-ipucu]')) {
          if (!aktif) return;
          if ((aktif.ipucuAcik || 0) < 3) { aktif.ipucuAcik = (aktif.ipucuAcik || 0) + 1; barGuncelle(); }
        }
      });
    }
  }

  function kurucuCiz(filtre) {
    const H = havuz();
    const adVal = box.querySelector('#dl-ad')?.value || '';
    const q = (filtre || '').toLocaleLowerCase('tr').trim();
    const baz = filtreliHavuz(H);
    const liste = (q ? baz.filter(x => x.ad.toLocaleLowerCase('tr').includes(q)) : baz).slice(0, 24);
    const secObj = secilenler.map(id => H.find(x => x.id === id)).filter(Boolean);
    const g = box.querySelector('#duello-govde');
    g.innerHTML = `
      <div class="dl-form">
        <input id="dl-ad" type="text" maxlength="24" placeholder="Adın veya takma adın (ör. Ömer)" value="${esc(adVal)}">
        <button type="button" class="phbtn" data-dl-rast="1">🎲 Rastgele 3</button>
        <button type="button" class="phbtn" data-dl-karma="1" title="1 Yapı + 1 Hayvan + 1 Bitki">🔀 Karma (3 Tür)</button>
      </div>
      <div class="gos" style="margin:6px 0">
        <button type="button" class="phbtn${katFiltre === 'tumu' ? ' icbtn' : ''}" data-dl-kat="tumu">⚡ Tarih + Doğa</button>
        <button type="button" class="phbtn${katFiltre === 'tarih' ? ' icbtn' : ''}" data-dl-kat="tarih">🏛️ Sadece Tarih</button>
        <button type="button" class="phbtn${katFiltre === 'doga' ? ' icbtn' : ''}" data-dl-kat="doga">🌿 Sadece Doğa</button>
        <button type="button" class="phbtn${katFiltre === 'yapi' ? ' icbtn' : ''}" data-dl-kat="yapi">🏰 Yapı</button>
        <button type="button" class="phbtn${katFiltre === 'hayvan' ? ' icbtn' : ''}" data-dl-kat="hayvan">🐾 Hayvan</button>
        <button type="button" class="phbtn${katFiltre === 'bitki' ? ' icbtn' : ''}" data-dl-kat="bitki">🌱 Bitki</button>
      </div>
      <div class="gos" style="margin:4px 0 8px">
        <button type="button" class="phbtn${zorFiltre === 'tumu' ? ' icbtn' : ''}" data-dl-zor="tumu">✨ Her Zorluk</button>
        <button type="button" class="phbtn${zorFiltre === 'kolay' ? ' icbtn' : ''}" data-dl-zor="kolay">🟢 Kolay</button>
        <button type="button" class="phbtn${zorFiltre === 'orta' ? ' icbtn' : ''}" data-dl-zor="orta">🟡 Orta</button>
        <button type="button" class="phbtn${zorFiltre === 'zor' ? ' icbtn' : ''}" data-dl-zor="zor">🔴 Zor</button>
      </div>
      <div class="dl-secilen">
        <b>Seçilen Hedefler (${secObj.length} / 3):</b>
        <div class="dl-cipler">${secObj.length ? secObj.map(o => `<button type="button" class="dl-cip" data-dl-ekle="${esc(o.id)}">${o.ik} ${esc(o.ad)} · ${ZOR_ROZET[o.zor]} ✕</button>`).join('') : '<small>Aşağıdan 3 hedef seç — hepsi aynı türden veya Yapı + Hayvan + Bitki karma olabilir!</small>'}</div>
      </div>
      ${secObj.length === 3 ? `<div class="gos" style="margin:8px 0 12px">
        <button type="button" class="phbtn icbtn" data-dl-link="1">🔗 Meydan Okuma Linkini Kopyala</button>
        <button type="button" class="phbtn" data-dl-test="1">▶ Önce Kendin Çöz</button>
      </div>` : ''}
      <input id="dl-ara" class="dl-ara" type="search" placeholder="🔍 Yapı, hayvan veya bitki ara (ör. Tac Mahal, Panda, Kahve…)" value="${esc(filtre || '')}">
      <div class="hk-grid" style="margin-top:8px">
        ${liste.length ? liste.map(o => `<button type="button" class="hk-kart${secilenler.includes(o.id) ? ' on' : ''}" data-dl-ekle="${esc(o.id)}">
          <span class="hk-ik">${o.ik}</span>
          <div><b>${esc(o.ad)}</b><small>${secilenler.includes(o.id) ? '✓ Seçildi' : `${KAT_AD[o.kat] || ''} · ${ZOR_ROZET[o.zor]}`}</small></div>
        </button>`).join('') : '<p class="note">Bu filtreye uygun sonuç bulunamadı; arama kutusunu temizle veya başka bir zorluk seç.</p>'}
      </div>`;
    const ara = g.querySelector('#dl-ara');
    if (ara && filtre) { ara.focus(); ara.setSelectionRange(filtre.length, filtre.length); }
  }

  function linkUret() {
    const ad = (box.querySelector('#dl-ad')?.value || '').trim() || 'Bir Kâşif';
    const kod = kodla({ ad, ids: secilenler });
    const taban = location.origin + location.pathname;
    return `${taban}?duello=${kod}`;
  }

  function linkKopyala() {
    if (secilenler.length !== 3) return;
    const url = linkUret();
    const ad = (box.querySelector('#dl-ad')?.value || '').trim() || 'Ben';
    const metin = `🎯 ${ad} sana Zaman Yolculuğu Hazine Düellosu gönderdi!\n3 gizli noktayı (yapı / hayvan / bitki) Dünya küresinde en kısa sürede bulabilir misin? 👇\n${url}`;
    if (window.KartPaylas) {
      window.KartPaylas.kopyalaMetin(metin).then(ok => {
        if (ok && window.ZY && window.ZY.toast) window.ZY.toast('🔗 <b>Meydan okuma linki kopyalandı!</b> WhatsApp, X veya Instagram\'dan arkadaşına gönder!');
      });
    }
  }

  function duelloBaslat(veri) {
    kur();
    const H = havuz();
    const hedefler = (veri.ids || []).map(id => H.find(x => x.id === id)).filter(Boolean);
    if (!hedefler.length) return;
    aktif = { ad: veri.ad || 'Bir Kâşif', hedefler, idx: 0, ipucuAcik: 0 };
    sonuclar = [];
    t0 = performance.now();
    if (window.ZY && window.ZY.setView) window.ZY.setView('dunya');
    bar.hidden = false;
    hedefSor();
    if (timer) clearInterval(timer);
    timer = setInterval(sureGuncelle, 500);
  }

  function sureGuncelle() {
    const el = bar && bar.querySelector('#dl-sure');
    if (el) el.textContent = '⏱️ ' + Math.floor((performance.now() - t0) / 1000) + ' sn';
  }

  const IPUCU_CEZA = [0, 70, 150, 260];

  function barGuncelle() {
    if (!aktif) return;
    const h = aktif.hedefler[aktif.idx];
    const sn = Math.floor((performance.now() - t0) / 1000);
    const acik = aktif.ipucuAcik || 0;
    const ipHtml = acik > 0
      ? h.ipuclari.slice(0, acik).map((t, i) => `<small style="display:block;color:#fde68a">💡 İpucu ${i + 1}: ${esc(t)}</small>`).join('')
      : `<small>İpucu açmadan bulursan tam puan! Takılırsan sağdan ipucu iste.</small>`;
    bar.innerHTML = `
      <div class="dl-bar-ic">
        <span class="pill">🎯 ${esc(aktif.ad)}'in Düellosu · ${aktif.idx + 1}/${aktif.hedefler.length} · ${ZOR_ROZET[h.zor]}</span>
        <b>${h.ik} ${esc(h.soru)} Kürede tıkla!</b>
        ${ipHtml}
      </div>
      <div class="dl-bar-sag">
        <b id="dl-sure">⏱️ ${sn} sn</b>
        ${acik < 3 ? `<button type="button" class="phbtn" data-dl-ipucu="1">💡 İpucu (${acik + 1}/3)</button>` : ''}
        <button type="button" class="phbtn" data-dl-iptal="1">✕ Çık</button>
      </div>`;
  }

  function hedefSor() {
    aktif.ipucuAcik = 0;
    barGuncelle();
    const h = aktif.hedefler[aktif.idx];
    window.__kureSec = ll => {
      if (!ll || !aktif) return;
      const km = kmMesafe(ll, h.ll);
      const ceza = IPUCU_CEZA[aktif.ipucuAcik || 0] || 0;
      const ham = Math.round(1000 * Math.exp(-km / (h.zor === 'zor' ? 850 : h.zor === 'kolay' ? 1100 : 950)));
      const pts = Math.max(0, ham - ceza);
      sonuclar.push({ h, km, pts, ipucu: aktif.ipucuAcik || 0 });
      if (window.ZY && window.ZY.toast) window.ZY.toast(`${h.ik} <b>${esc(h.ad)}</b>: ${km.toLocaleString('tr-TR')} km uzaklık · <b>+${pts} puan!</b>${ceza ? ` (-${ceza} ipucu)` : ''}`);
      aktif.idx++;
      if (aktif.idx >= aktif.hedefler.length) duelloBitir();
      else hedefSor();
    };
  }

  function duelloDurdur() {
    if (timer) { clearInterval(timer); timer = null; }
    window.__kureSec = null;
    if (bar) bar.hidden = true;
    aktif = null;
  }

  function duelloBitir() {
    const sureSn = Math.max(1, Math.round((performance.now() - t0) / 1000));
    const toplam = sonuclar.reduce((a, b) => a + b.pts, 0);
    const meydanAd = aktif.ad;
    duelloDurdur();
    aktif = { ad: meydanAd, sureSn, toplam, sonuclar: sonuclar.slice() };
    if (window.ZY && window.ZY.xpEkle) window.ZY.xpEkle(Math.max(15, Math.round(toplam / 80)), 'duello');
    box.hidden = false;
    const g = box.querySelector('#duello-govde');
    g.innerHTML = `
      <div class="hk-sonuc iyi">
        <div class="hk-son-ik">🎯</div>
        <span class="pill">${esc(meydanAd)}'in Hazine Düellosu Tamamlandı!</span>
        <h3>${toplam.toLocaleString('tr-TR')} / 3.000 Puan</h3>
        <div class="hk-stat">
          <div><small>⏱️ Süre</small><b>${sureSn} sn</b></div>
          <div><small>🎯 Ortalama Sapma</small><b>${Math.round(sonuclar.reduce((a, b) => a + b.km, 0) / sonuclar.length).toLocaleString('tr-TR')} km</b></div>
          <div><small>🏆 Derece</small><b>${toplam >= 2500 ? 'Efsane!' : toplam >= 1800 ? 'Usta Kâşif' : 'Gezgin'}</b></div>
        </div>
        <div class="dl-ozet-list">
          ${sonuclar.map(r => `<div><span>${r.h.ik} ${esc(r.h.ad)} <small>(${ZOR_ROZET[r.h.zor]}${r.ipucu ? ` · ${r.ipucu} ipucu` : ''})</small></span><b>${r.km.toLocaleString('tr-TR')} km · +${r.pts}</b></div>`).join('')}
        </div>
        <div class="gos" style="justify-content:center;margin-top:12px">
          <button type="button" class="phbtn icbtn" data-dl-story="1">📸 Instagram Hikâye Kartı İndir (PNG)</button>
          <button type="button" class="phbtn" data-dl-paylas="1">📋 X / WhatsApp'ta Skoru Paylaş</button>
        </div>
        <div class="gos" style="justify-content:center;margin-top:6px">
          <button type="button" class="phbtn" data-dl-kur="1">🎯 Sen de Arkadaşına Düello Kur!</button>
        </div>
      </div>`;
  }

  function skorMetni() {
    if (!aktif || !aktif.sonuclar) return '';
    const barlar = aktif.sonuclar.map(r => `${r.h.ik} ${r.pts >= 800 ? '🟩' : r.pts >= 450 ? '🟨' : '🟥'} (${r.km} km)`).join(' · ');
    return `🎯 Zaman Yolculuğu Hazine Düellosu (${aktif.ad})\n🏆 ${aktif.toplam}/3.000 Puan · ⏱️ ${aktif.sureSn} sn\n${barlar}\nSen de kendi düellonu kur 👇\nhttps://jondoe2972.github.io/zaman-yolculugu/`;
  }

  function storyIndir() {
    if (!window.KartPaylas || !aktif || !aktif.sonuclar) return;
    window.KartPaylas.indirStory({
      tema: 'duello',
      etiket: `${aktif.ad.toUpperCase()}'İN HAZİNE DÜELLOSU`,
      ikon: '🎯',
      baslik: `${aktif.toplam.toLocaleString('tr-TR')} / 3.000 Puan`,
      alt: `⏱️ ${aktif.sureSn} saniyede 3 hedef bulundu`,
      barlar: aktif.sonuclar.map(r => ({ ad: `${r.h.ik} ${r.h.ad}`, pct: Math.round(r.pts / 10), yazi: `${r.km.toLocaleString('tr-TR')} km` })),
      cta: 'Sen bu 3 yeri benden hızlı bulabilir misin? 👇',
      dosya: 'hazine-duellosu',
      paylasMetin: skorMetni()
    });
  }

  function skorPaylas() {
    if (!window.KartPaylas) return;
    window.KartPaylas.kopyalaMetin(skorMetni()).then(ok => {
      if (ok && window.ZY && window.ZY.toast) window.ZY.toast('📋 <b>Düello skorun kopyalandı!</b> Arkadaşına gönderip rövanş iste!');
    });
  }

  function ac(kod) {
    kur();
    if (kod) {
      const veri = coz(kod);
      if (veri && Array.isArray(veri.ids) && veri.ids.length) { duelloBaslat(veri); return; }
    }
    box.hidden = false;
    kurucuCiz('');
  }
  function kapat() { if (box) box.hidden = true; }

  window.HazineDuello = { ac, kapat };
})();
