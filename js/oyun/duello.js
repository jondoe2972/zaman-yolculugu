// 🎯 Arkadaşına Gizli Hazine / Rota Düellosu (#4 Viral Challenge — %100 sunucusuz linkle paylaşım!)
'use strict';
(() => {
  const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const D = Math.PI / 180;
  const kmMesafe = (a, b) => {
    const la1 = a[0] * D, la2 = b[0] * D;
    const h = Math.sin((la2 - la1) / 2) ** 2 + Math.cos(la1) * Math.cos(la2) * Math.sin((b[1] - a[1]) * D / 2) ** 2;
    return Math.round(12742 * Math.asin(Math.min(1, Math.sqrt(h))));
  };

  function havuz() {
    const out = [];
    for (const y of window.YAPILAR || []) {
      if (y.o >= 4 && y.ll) out.push({ id: 'y:' + y.id, ad: y.ad, ik: '🏛️', ipucu: `${y.yil || ''} · ${y.k ? y.k.slice(0, 88) : 'Ünlü dünya yapıtı'}`, ll: y.ll });
    }
    for (const cg of window.ATLAS_COGRAFYA || []) {
      if (cg.ll) out.push({ id: 'c:' + cg.id, ad: cg.ad, ik: cg.tur === 'dag' ? '🏔️' : cg.tur === 'col' ? '🏜️' : '✨', ipucu: cg.yukseklik ? `${cg.yukseklik} · Doğa harikası / coğrafya` : 'Ünlü doğa harikası / bölge', ll: cg.ll });
    }
    for (const h of window.ATLAS_HAYVANLAR || []) {
      if (h.ll) out.push({ id: 'h:' + h.id, ad: h.ad, ik: h.ik || '🐾', ipucu: `${h.habitat || 'Yaban hayatı'} · Bu hayvanın doğal yaşam alanı`, ll: h.ll });
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
  let aktif = null, t0 = 0, timer = null, sonuclar = [];

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
          <div><h2>🎯 Arkadaşına Hazine Düellosu</h2><small>Haritadan 3 hedef seç, linki arkadaşına gönder — bakalım kaç saniyede bulacak!</small></div>
          <button type="button" class="hk-x" title="Kapat">✕</button>
        </header>
        <div id="duello-govde" class="hk-govde"></div>
      </div>`;
      document.body.appendChild(box);
      box.querySelector('.hk-x').addEventListener('click', kapat);
      box.addEventListener('click', ev => {
        if (ev.target === box) { kapat(); return; }
        const ek = ev.target.closest('[data-dl-ekle]');
        if (ek) {
          const id = ek.dataset.dlEkle;
          if (secilenler.includes(id)) secilenler = secilenler.filter(x => x !== id);
          else if (secilenler.length < 3) secilenler.push(id);
          kurucuCiz(box.querySelector('#dl-ara')?.value || '');
          return;
        }
        if (ev.target.closest('[data-dl-rast]')) {
          const H = havuz(), s = new Set();
          while (s.size < 3 && s.size < H.length) s.add(H[Math.floor(Math.random() * H.length)].id);
          secilenler = [...s];
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
        if (ev.target.closest('[data-dl-iptal]')) duelloDurdur();
      });
    }
  }

  function kurucuCiz(filtre) {
    const H = havuz();
    const adVal = box.querySelector('#dl-ad')?.value || '';
    const q = (filtre || '').toLocaleLowerCase('tr').trim();
    const liste = q ? H.filter(x => x.ad.toLocaleLowerCase('tr').includes(q)).slice(0, 24) : H.slice(0, 24);
    const secObj = secilenler.map(id => H.find(x => x.id === id)).filter(Boolean);
    const g = box.querySelector('#duello-govde');
    g.innerHTML = `
      <div class="dl-form">
        <input id="dl-ad" type="text" maxlength="24" placeholder="Adın veya takma adın (ör. Ömer)" value="${esc(adVal)}">
        <button type="button" class="phbtn" data-dl-rast="1">🎲 Rastgele 3 Hedef</button>
      </div>
      <div class="dl-secilen">
        <b>Seçilen Hedefler (${secObj.length} / 3):</b>
        <div class="dl-cipler">${secObj.length ? secObj.map(o => `<button type="button" class="dl-cip" data-dl-ekle="${esc(o.id)}">${o.ik} ${esc(o.ad)} ✕</button>`).join('') : '<small>Aşağıdan 3 yer seç veya "Rastgele 3 Hedef"e tıkla</small>'}</div>
      </div>
      ${secObj.length === 3 ? `<div class="gos" style="margin:8px 0 12px">
        <button type="button" class="phbtn icbtn" data-dl-link="1">🔗 Meydan Okuma Linkini Kopyala</button>
        <button type="button" class="phbtn" data-dl-test="1">▶ Önce Kendin Çöz</button>
      </div>` : ''}
      <input id="dl-ara" class="dl-ara" type="search" placeholder="🔍 Yapıt, dağ veya hayvan ara (ör. Tac Mahal, Eyfel, Aslan…)" value="${esc(filtre || '')}">
      <div class="hk-grid" style="margin-top:8px">
        ${liste.map(o => `<button type="button" class="hk-kart${secilenler.includes(o.id) ? ' on' : ''}" data-dl-ekle="${esc(o.id)}">
          <span class="hk-ik">${o.ik}</span>
          <div><b>${esc(o.ad)}</b><small>${secilenler.includes(o.id) ? '✓ Seçildi' : esc(o.ipucu.slice(0, 48))}</small></div>
        </button>`).join('')}
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
    const metin = `🎯 ${ad} sana Zaman Yolculuğu Hazine Düellosu gönderdi!\n3 gizli noktayı Dünya küresinde en kısa sürede bulabilir misin? 👇\n${url}`;
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
    aktif = { ad: veri.ad || 'Bir Kâşif', hedefler, idx: 0 };
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
    if (el) el.textContent = Math.floor((performance.now() - t0) / 1000) + ' sn';
  }

  function hedefSor() {
    const h = aktif.hedefler[aktif.idx];
    const sn = Math.floor((performance.now() - t0) / 1000);
    bar.innerHTML = `
      <div class="dl-bar-ic">
        <span class="pill">🎯 ${esc(aktif.ad)}'in Düellosu · ${aktif.idx + 1}/${aktif.hedefler.length}</span>
        <b>${h.ik} "${esc(h.ad)}" nerede? Kürede tıkla!</b>
        <small>${esc(h.ipucu)}</small>
      </div>
      <div class="dl-bar-sag">
        <b id="dl-sure">⏱️ ${sn} sn</b>
        <button type="button" class="phbtn" data-dl-iptal="1">✕ Çık</button>
      </div>`;
    window.__kureSec = ll => {
      if (!ll || !aktif) return;
      const km = kmMesafe(ll, h.ll);
      const pts = Math.round(1000 * Math.exp(-km / 950));
      sonuclar.push({ h, km, pts });
      if (window.ZY && window.ZY.toast) window.ZY.toast(`${h.ik} <b>${esc(h.ad)}</b>: ${km.toLocaleString('tr-TR')} km uzaklık · <b>+${pts} puan!</b>`);
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
          ${sonuclar.map(r => `<div><span>${r.h.ik} ${esc(r.h.ad)}</span><b>${r.km.toLocaleString('tr-TR')} km · +${r.pts}</b></div>`).join('')}
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
