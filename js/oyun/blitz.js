// ⚡ 60 Saniye Küre Blitz'i (Hız Meydan Okuması)
// 60 saniyede kürede en çok isabeti yakala: Tam isabette +3 sn bonus, kombo çarpanı, Story PNG ve meydan okuma!
'use strict';
(() => {
  const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const D = Math.PI / 180;
  const kmMesafe = (a, b) => {
    const la1 = a[0] * D, la2 = b[0] * D;
    const h = Math.sin((la2 - la1) / 2) ** 2 + Math.cos(la1) * Math.cos(la2) * Math.sin((b[1] - a[1]) * D / 2) ** 2;
    return Math.round(12742 * Math.asin(Math.min(1, Math.sqrt(h))));
  };
  const oku = (k, v) => { try { return JSON.parse(localStorage[k] || 'null') || v; } catch (e) { return v; } };
  const yaz = (k, v) => { try { localStorage[k] = JSON.stringify(v); } catch (e) { } };
  const karistir = arr => { const a = [...arr]; for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };

  const KOLAY_H = new Set(['devpanda', 'bengalkaplani', 'asyafili', 'aslan', 'zurafa', 'kutupayisi', 'penguen', 'kanguru', 'koala', 'komodo', 'orangutan', 'caretta', 'vankedisi', 'lama', 'jaguar', 'goril', 'afrikafili']);
  const KOLAY_B = new Set(['zeytin', 'kahve', 'kakao', 'cay', 'papirus', 'sekoya', 'baobab', 'bambu', 'kaucuk', 'palmiye', 'sedir', 'sakura', 'okaliptus', 'kaktus', 'lale']);

  function havuz(alan) {
    const out = [];
    if (alan === 'tarih' || alan === 'karma') {
      for (const y of window.YAPILAR || []) {
        if (!y.ll) continue;
        out.push({ id: 'y:' + y.id, ad: y.ad, ik: '🏛️', ll: y.ll, z: y.o >= 5 ? 1 : y.o >= 4 ? 2 : 3, soru: `"${y.ad}" yapısı nerede?` });
      }
      const KEK = window.ATLAS_KULTUR_EK || {};
      for (const ic of KEK.icatlar || []) if (ic.ll) out.push({ id: 'ic:' + ic.id, ad: ic.ad.split(' (')[0], ik: ic.ik || '💡', ll: ic.ll, z: 2, soru: `"${ic.ad.split(' (')[0]}" nerede icat edildi?` });
      for (const bi of KEK.insanlar || []) if (bi.ll) out.push({ id: 'bi:' + bi.id, ad: bi.ad.split(' (')[0], ik: bi.ik || '👑', ll: bi.ll, z: 2, soru: `"${bi.ad.split(' (')[0]}" nerede yaşadı?` });
    }
    if (alan === 'doga' || alan === 'karma') {
      for (const h of window.ATLAS_HAYVANLAR || []) {
        if (!h.ll) continue;
        out.push({ id: 'h:' + h.id, ad: h.ad, ik: h.ik || '🐾', ll: h.ll, z: KOLAY_H.has(h.id) ? 1 : h.from != null ? 3 : 2, soru: `"${h.ad}" nerede yaşar?` });
      }
      for (const b of window.ATLAS_BITKILER || []) {
        if (!b.ll) continue;
        out.push({ id: 'b:' + b.id, ad: b.ad, ik: b.ik || '🌿', ll: b.ll, z: KOLAY_B.has(b.id) ? 1 : 2, soru: `"${b.ad}" nerede yetişir?` });
      }
      const DEK = window.ATLAS_DOGA_EK || {};
      for (const gl of DEK.golSelale || []) if (gl.ll) out.push({ id: 'gl:' + gl.id, ad: gl.ad.split(' (')[0], ik: gl.ik || '💧', ll: gl.ll, z: 2, soru: `"${gl.ad.split(' (')[0]}" nerede?` });
      for (const kr of DEK.kraterler || []) if (kr.ll) out.push({ id: 'kr:' + kr.id, ad: kr.ad.split(' (')[0], ik: '☄️', ll: kr.ll, z: 3, soru: `"${kr.ad.split(' (')[0]}" krateri nerede?` });
    }
    return out;
  }

  const MOD_AD = { karma: '⚡ Tarih + Doğa Karma', tarih: '🏛️ Sadece Tarih', doga: '🌿 Sadece Doğa' };
  const ist = () => oku('zy-blitz-ist', { karma: 0, tarih: 0, doga: 0, enIsabet: 0, oyun: 0 });
  const istKaydet = fn => { const d = ist(); fn(d); yaz('zy-blitz-ist', d); return d; };

  let box = null, bar = null, st = null, timer = null;

  function kur() {
    if (!box) {
      box = document.createElement('div');
      box.id = 'blitz-kutu';
      box.className = 'hk-ov';
      box.hidden = true;
      box.setAttribute('role', 'dialog');
      box.setAttribute('aria-label', '60 Saniye Küre Blitz');
      box.innerHTML = `<div class="hk-kutu">
        <header class="hk-ust">
          <div><h2>⚡ 60 Saniye Küre Blitz'i</h2><small>Süre dolmadan kürede en çok isabeti yakala! Tam isabette +3 sn bonus ve kombo çarpanı!</small></div>
          <button type="button" class="hk-x" title="Kapat">✕</button>
        </header>
        <div id="blitz-govde" class="hk-govde"></div>
      </div>`;
      document.body.appendChild(box);
      box.querySelector('.hk-x').addEventListener('click', kapat);
      box.addEventListener('click', ev => {
        if (ev.target === box) { kapat(); return; }
        const m = ev.target.closest('[data-bz-mod]');
        if (m) { baslat(m.dataset.bzMod); return; }
        if (ev.target.closest('[data-bz-menu]')) { menuCiz(); return; }
        if (ev.target.closest('[data-bz-story]')) { storyIndir(); return; }
        if (ev.target.closest('[data-bz-paylas]')) { skorPaylas(); return; }
      });
    }
    if (!bar) {
      bar = document.createElement('div');
      bar.id = 'bz-bar';
      bar.className = 'dl-bar';
      bar.hidden = true;
      document.body.appendChild(bar);
      bar.addEventListener('click', ev => {
        if (ev.target.closest('[data-bz-iptal]')) { durdur(); return; }
        if (ev.target.closest('[data-bz-pas]')) {
          if (!st) return;
          st.bitisMs -= 3000;
          st.kombo = 0;
          st.sonNot = '⏭️ Pas geçildi (-3 sn)';
          siradakiHedef();
        }
      });
    }
  }

  function menuCiz() {
    const I = ist();
    const g = box.querySelector('#blitz-govde');
    g.innerHTML = `
      <div class="hk-grid">
        <button type="button" class="hk-kart" data-bz-mod="karma">
          <span class="hk-ik">⚡</span>
          <div><b>Tarih + Doğa Karma Blitz</b><small>Yapılar, icatlar, büyük insanlar, hayvanlar, bitkiler ve göller${I.karma ? ` · 🏆 ${I.karma.toLocaleString('tr-TR')}` : ''}</small></div>
        </button>
        <button type="button" class="hk-kart" data-bz-mod="tarih">
          <span class="hk-ik">🏛️</span>
          <div><b>Sadece Tarih Blitz</b><small>Ünlü yapıtlar, büyük icatlar ve tarihe iz bırakan insanlar${I.tarih ? ` · 🏆 ${I.tarih.toLocaleString('tr-TR')}` : ''}</small></div>
        </button>
        <button type="button" class="hk-kart" data-bz-mod="doga">
          <span class="hk-ik">🌿</span>
          <div><b>Sadece Doğa Blitz</b><small>Yaban hayvanları, yöre bitkileri, şelaleler ve göktaşı kraterleri${I.doga ? ` · 🏆 ${I.doga.toLocaleString('tr-TR')}` : ''}</small></div>
        </button>
      </div>
      <div class="did" style="margin-top:12px">
        <b>🎯 Puan ve Bonus Kuralları</b>
        <p><b>≤ 650 km:</b> 🎯 Tam İsabet (+300 × çarpan + <b>+3 sn bonus!</b>) · <b>≤ 1.600 km:</b> ✅ İsabet (+150 × çarpan + <b>+1 sn</b>) · <b>≤ 2.600 km:</b> 🟡 Yakın (+75). Üst üste isabetlerde çarpan <b>×3</b>'e kadar çıkar!</p>
      </div>`;
  }

  function carpan(k) { return k >= 6 ? 3 : k >= 4 ? 2 : k >= 2 ? 1.5 : 1; }

  function baslat(alan) {
    kur();
    kapat();
    const H = havuz(alan);
    if (!H.length) return;
    st = {
      alan,
      h1: karistir(H.filter(x => x.z === 1)),
      h2: karistir(H.filter(x => x.z === 2)),
      h3: karistir(H.filter(x => x.z === 3)),
      gorulen: new Set(),
      hedef: null,
      puan: 0,
      isabet: 0,
      toplam: 0,
      kombo: 0,
      maxKombo: 0,
      kayitlar: [],
      sonNot: 'Kürede hedefi en hızlı şekilde işaretle!',
      bitisMs: performance.now() + 60000
    };
    if (window.ZY && window.ZY.setView) window.ZY.setView('dunya');
    if (window.Dunya) window.Dunya.goTo(25, 20, 1.05);
    bar.hidden = false;
    siradakiHedef();
    if (timer) clearInterval(timer);
    timer = setInterval(tick, 200);
  }

  function kalanSn() { return st ? Math.max(0, Math.ceil((st.bitisMs - performance.now()) / 1000)) : 0; }

  function tick() {
    if (!st) return;
    const sn = kalanSn();
    const elS = bar && bar.querySelector('#bz-sure');
    if (elS) {
      elS.textContent = `⏱️ ${sn} sn`;
      elS.style.color = sn <= 10 ? '#fda4af' : sn <= 20 ? '#fde047' : '';
    }
    if (sn <= 0) bitir();
  }

  function siradakiHedef() {
    if (!st) return;
    const sira = st.isabet < 3 ? ['h1', 'h2', 'h3'] : st.isabet < 7 ? ['h2', 'h1', 'h3'] : ['h3', 'h2', 'h1'];
    let sec = null;
    for (const k of sira) {
      while (st[k].length) {
        const aday = st[k].pop();
        if (!st.gorulen.has(aday.id)) { sec = aday; break; }
      }
      if (sec) break;
    }
    if (!sec) {
      st.gorulen.clear();
      const H = havuz(st.alan);
      st.h1 = karistir(H);
      sec = st.h1.pop();
    }
    if (!sec) return;
    st.gorulen.add(sec.id);
    st.hedef = sec;
    barCiz();
    window.__kureSec = ll => {
      if (!ll || !st || !st.hedef) return;
      const h = st.hedef;
      const km = kmMesafe(ll, h.ll);
      st.toplam++;
      let pts = 0, bonus = 0, durum = 'iska';
      if (km <= 650) {
        st.kombo++; st.isabet++;
        pts = Math.round(300 * carpan(st.kombo)); bonus = 3; durum = 'tam';
        st.sonNot = `🎯 TAM İSABET! ${h.ad} (${km} km) · +${pts} puan · +3 sn!`;
      } else if (km <= 1600) {
        st.kombo++; st.isabet++;
        pts = Math.round(150 * carpan(st.kombo)); bonus = 1; durum = 'isabet';
        st.sonNot = `✅ İsabet! ${h.ad} (${km.toLocaleString('tr-TR')} km) · +${pts} puan · +1 sn!`;
      } else if (km <= 2600) {
        st.kombo = 0; st.isabet++;
        pts = 75; durum = 'yakin';
        st.sonNot = `🟡 Yakın! ${h.ad} (${km.toLocaleString('tr-TR')} km) · +75 puan`;
      } else {
        st.kombo = 0;
        st.sonNot = `❌ Iska! ${h.ad} (${km.toLocaleString('tr-TR')} km uzak)`;
      }
      if (st.kombo > st.maxKombo) st.maxKombo = st.kombo;
      st.puan += pts;
      if (bonus) st.bitisMs = Math.min(performance.now() + 75000, st.bitisMs + bonus * 1000);
      st.kayitlar.push({ h, km, pts, durum });
      if (window.Dunya && window.Dunya.pin) window.Dunya.pin(h.ll[0], h.ll[1], `${h.ik} ${h.ad}`);
      if (kalanSn() <= 0) bitir();
      else siradakiHedef();
    };
  }

  function barCiz() {
    if (!st || !st.hedef) return;
    const h = st.hedef, sn = kalanSn(), c = carpan(st.kombo);
    bar.innerHTML = `
      <div class="dl-bar-ic">
        <span class="pill">${MOD_AD[st.alan]} · ⭐ ${st.puan.toLocaleString('tr-TR')} · 🎯 ${st.isabet}${st.kombo >= 2 ? ` · 🔥 ×${c}` : ''}</span>
        <b>${h.ik} ${esc(h.soru)} Kürede tıkla!</b>
        <small>${esc(st.sonNot)}</small>
      </div>
      <div class="dl-bar-sag">
        <b id="bz-sure" style="font-size:15px;${sn <= 10 ? 'color:#fda4af' : sn <= 20 ? 'color:#fde047' : ''}">⏱️ ${sn} sn</b>
        <button type="button" class="phbtn" data-bz-pas="1" title="3 saniye karşılığında pas geç">⏭️ Pas (-3s)</button>
        <button type="button" class="phbtn" data-bz-iptal="1">✕ Çık</button>
      </div>`;
  }

  function durdur() {
    if (timer) { clearInterval(timer); timer = null; }
    window.__kureSec = null;
    if (bar) bar.hidden = true;
    st = null;
  }

  let sonSonuc = null;
  function bitir() {
    if (!st) return;
    const sonuc = { alan: st.alan, puan: st.puan, isabet: st.isabet, toplam: st.toplam, maxKombo: st.maxKombo, kayitlar: st.kayitlar.slice() };
    durdur();
    const I = ist();
    const yeniRekor = sonuc.puan > (I[sonuc.alan] || 0);
    istKaydet(d => {
      d.oyun++;
      if (sonuc.puan > (d[sonuc.alan] || 0)) d[sonuc.alan] = sonuc.puan;
      if (sonuc.isabet > (d.enIsabet || 0)) d.enIsabet = sonuc.isabet;
    });
    if (sonuc.puan > 0 && window.ZY && window.ZY.xpEkle) window.ZY.xpEkle(Math.min(60, Math.max(15, Math.round(sonuc.puan / 70))), 'blitz');
    sonSonuc = sonuc;
    const ort = sonuc.toplam ? Math.round(100 * sonuc.isabet / sonuc.toplam) : 0;
    box.hidden = false;
    const g = box.querySelector('#blitz-govde');
    g.innerHTML = `
      <div class="hk-sonuc ${sonuc.isabet >= 5 ? 'iyi' : 'kotu'}">
        <div class="hk-son-ik">⚡</div>
        <span class="pill">${MOD_AD[sonuc.alan]}${yeniRekor && sonuc.puan > 0 ? ' · 🏆 YENİ REKOR!' : ''}</span>
        <h3>${sonuc.puan.toLocaleString('tr-TR')} Puan</h3>
        <div class="hk-stat">
          <div><small>🎯 İsabet</small><b>${sonuc.isabet} / ${sonuc.toplam}</b></div>
          <div><small>📊 Başarı</small><b>%${ort}</b></div>
          <div><small>🔥 En İyi Kombo</small><b>${sonuc.maxKombo}</b></div>
        </div>
        ${sonuc.kayitlar.length ? `<div class="dl-ozet-list" style="max-height:170px;overflow:auto">
          ${sonuc.kayitlar.slice(-10).map(r => `<div><span>${r.durum === 'tam' ? '🎯' : r.durum === 'isabet' ? '✅' : r.durum === 'yakin' ? '🟡' : '❌'} ${r.h.ik} ${esc(r.h.ad)}</span><b>${r.km.toLocaleString('tr-TR')} km · +${r.pts}</b></div>`).join('')}
        </div>` : ''}
        <div class="gos" style="justify-content:center;margin-top:12px">
          <button type="button" class="phbtn icbtn" data-bz-story="1">📸 Instagram Hikâye Kartı (PNG)</button>
          <button type="button" class="phbtn" data-bz-paylas="1">🔗 Arkadaşına Meydan Oku</button>
        </div>
        <div class="gos" style="justify-content:center;margin-top:6px">
          <button type="button" class="phbtn icbtn" data-bz-mod="${sonuc.alan}">🔁 Hemen Tekrar Oyna</button>
          <button type="button" class="phbtn" data-bz-menu="1">📋 Mod Seç</button>
        </div>
      </div>`;
  }

  function paylasMetni() {
    if (!sonSonuc) return '';
    return `⚡ Zaman Yolculuğu · 60 Saniye Küre Blitz'i (${MOD_AD[sonSonuc.alan]})\n🏆 ${sonSonuc.puan.toLocaleString('tr-TR')} Puan · 🎯 ${sonSonuc.isabet} İsabet · 🔥 ${sonSonuc.maxKombo} Kombo\n60 saniyede beni geçebilir misin? 👇\nhttps://jondoe2972.github.io/zaman-yolculugu/?oyun=blitz`;
  }

  function storyIndir() {
    if (!window.KartPaylas || !sonSonuc) return;
    window.KartPaylas.indirStory({
      tema: 'duello',
      etiket: `60 SANİYE KÜRE BLİTZ'İ · ${MOD_AD[sonSonuc.alan].toUpperCase()}`,
      ikon: '⚡',
      baslik: `${sonSonuc.puan.toLocaleString('tr-TR')} Puan`,
      alt: `🎯 ${sonSonuc.isabet} isabet · 🔥 En iyi kombo: ${sonSonuc.maxKombo}`,
      vurgular: [
        { etiket: 'İsabet', deger: `${sonSonuc.isabet}/${sonSonuc.toplam}` },
        { etiket: 'Kombo', deger: `🔥 ${sonSonuc.maxKombo}` },
        { etiket: 'Mod', deger: sonSonuc.alan.toUpperCase() }
      ],
      cta: '60 saniyede benim skorumu geçebilir misin? 👇',
      dosya: 'kure-blitz-60sn',
      paylasMetin: paylasMetni()
    });
  }

  function skorPaylas() {
    if (!window.KartPaylas) return;
    window.KartPaylas.kopyalaMetin(paylasMetni()).then(ok => {
      if (ok && window.ZY && window.ZY.toast) window.ZY.toast('🔗 <b>Blitz skorun kopyalandı!</b> WhatsApp veya X\'te yapıştırıp arkadaşlarına meydan oku!');
    });
  }

  function ac() { kur(); box.hidden = false; menuCiz(); }
  function kapat() { if (box) box.hidden = true; }

  window.KureBlitz = { ac, kapat };
})();
