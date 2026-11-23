// ⏳🔥 "Tarihte Hayatta Kalabilir misin?" Oyun Motoru (#3 Viral Challenge)
'use strict';
(() => {
  const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  let box = null, sen = null, adim = 0, puan = 0, oldu = null, gecmis = [], aktifSec = [];

  function kur() {
    if (box) return;
    box = document.createElement('div');
    box.id = 'hayatta-kal';
    box.className = 'hk-ov';
    box.hidden = true;
    box.setAttribute('role', 'dialog');
    box.setAttribute('aria-label', 'Tarihte Hayatta Kalabilir misin?');
    box.innerHTML = `<div class="hk-kutu">
      <header class="hk-ust">
        <div><h2>🔥 Tarihte Hayatta Kalabilir misin?</h2><small>3 hızlı karar ver, tarihî karneni al ve arkadaşlarına meydan oku!</small></div>
        <button type="button" class="hk-x" title="Kapat">✕</button>
      </header>
      <div id="hk-govde" class="hk-govde"></div>
    </div>`;
    document.body.appendChild(box);
    box.querySelector('.hk-x').addEventListener('click', kapat);
    box.addEventListener('click', ev => {
      if (ev.target === box) { kapat(); return; }
      const bSec = ev.target.closest('[data-hk-sen]');
      if (bSec) { baslat(bSec.dataset.hkSen); return; }
      if (ev.target.closest('[data-hk-rast]')) {
        const L = window.HAYATTA_KAL || [];
        const aday = L.filter(x => !sen || x.id !== sen.id);
        const s = (aday.length ? aday : L)[Math.floor(Math.random() * (aday.length || L.length))];
        if (s) baslat(s.id);
        return;
      }
      const bKarar = ev.target.closest('[data-hk-karar]');
      if (bKarar) { kararVer(+bKarar.dataset.hkKarar); return; }
      if (ev.target.closest('[data-hk-menu]')) { menuCiz(); return; }
      if (ev.target.closest('[data-hk-story]')) { storyIndir(); return; }
      if (ev.target.closest('[data-hk-paylas]')) { metinPaylas(); return; }
    });
    window.addEventListener('keydown', ev => { if (ev.key === 'Escape' && box && !box.hidden) kapat(); });
  }

  function menuCiz() {
    const L = window.HAYATTA_KAL || [];
    const g = box.querySelector('#hk-govde');
    g.innerHTML = `
      <div class="hk-hero">
        <button type="button" class="phbtn icbtn" data-hk-rast="1" style="font-size:14px;padding:10px 18px">🎲 Rastgele Bir Çağa Düş &amp; Hayatta Kal!</button>
        <p class="note" style="margin-top:8px">Ya da aşağıdaki tarihî felaket ve çağlardan birini kendin seç:</p>
      </div>
      <div class="hk-grid">
        ${L.map(s => `<button type="button" class="hk-kart" data-hk-sen="${esc(s.id)}">
          <span class="hk-ik">${s.ik}</span>
          <div><b>${esc(s.ad)}</b><small>${esc(s.yil)} · ${esc(s.yer)}</small></div>
        </button>`).join('')}
      </div>`;
  }

  function baslat(id) {
    sen = (window.HAYATTA_KAL || []).find(x => x.id === id);
    if (!sen) return;
    adim = 0; puan = 0; oldu = null; gecmis = [];
    adimCiz();
  }

  function adimCiz() {
    const a = sen.adimlar[adim];
    // Şıkları her seferinde karıştır ki doğru cevap hep ilk sırada olmasın!
    aktifSec = a.sec.slice().sort(() => Math.random() - 0.5);
    const g = box.querySelector('#hk-govde');
    const onceki = gecmis.length ? `<div class="hk-geri">${esc(gecmis[gecmis.length - 1])}</div>` : '';
    g.innerHTML = `
      <div class="hk-bilgi">
        <span class="pill">${sen.ik} ${esc(sen.yil)} · ${esc(sen.yer)}</span>
        <span class="pill">Karar ${adim + 1} / ${sen.adimlar.length}</span>
      </div>
      <h3>${esc(sen.ad)}</h3>
      ${adim === 0 ? `<p class="hk-giris">${esc(sen.giris)}</p>` : onceki}
      <div class="hk-soru"><b>${esc(a.soru)}</b></div>
      <div class="hk-secenekler">
        ${aktifSec.map((s, i) => `<button type="button" class="hk-sec" data-hk-karar="${i}">${esc(s.t)}</button>`).join('')}
      </div>`;
  }

  function kararVer(idx) {
    const s = aktifSec[idx];
    if (!s) return;
    puan += s.puan;
    gecmis.push(s.sonuc);
    if (s.puan < 0) {
      oldu = { sure: s.sure || '37 dakika', sonuc: s.sonuc };
      sonucCiz();
      return;
    }
    adim++;
    if (adim >= sen.adimlar.length) sonucCiz();
    else adimCiz();
  }

  function sonucBilgi() {
    const kurtuldu = !oldu;
    const mukemmel = kurtuldu && puan >= 6;
    const baslik = mukemmel ? '🏆 Efsanevi Kurtulan!' : kurtuldu ? '✅ Hayatta Kaldın!' : `💀 ${oldu.sure} Hayatta Kaldın!`;
    const dilim = mukemmel ? 'İlk %8' : kurtuldu ? 'İlk %24' : adim === 0 ? 'Son %15' : adim === 1 ? 'Orta %45' : 'İlk %35';
    const ozet = kurtuldu
      ? gecmis[gecmis.length - 1]
      : `${oldu.sonuc}`;
    return { kurtuldu, mukemmel, baslik, dilim, ozet };
  }

  function sonucCiz() {
    const sb = sonucBilgi();
    if (sb.kurtuldu && window.ZY && window.ZY.xpEkle) window.ZY.xpEkle(sb.mukemmel ? 30 : 20, 'hayattakal');
    const g = box.querySelector('#hk-govde');
    g.innerHTML = `
      <div class="hk-sonuc ${sb.kurtuldu ? 'iyi' : 'kotu'}">
        <div class="hk-son-ik">${sb.kurtuldu ? '🏆' : '💀'}</div>
        <span class="pill">${sen.ik} ${esc(sen.ad)} · ${esc(sen.yil)}</span>
        <h3>${esc(sb.baslik)}</h3>
        <p class="hk-son-metin">${esc(sb.ozet)}</p>
        <div class="hk-stat">
          <div><small>📊 Başarı Dilimi</small><b>${sb.dilim}</b></div>
          <div><small>⚡ Karar Puanı</small><b>${Math.max(0, puan)} / 6</b></div>
          <div><small>🎯 Sonuç</small><b>${sb.kurtuldu ? 'Kurtuldu!' : oldu.sure}</b></div>
        </div>
        <div class="did" style="text-align:left"><b>📜 Gerçek Tarihte Ne Oldu?</b><p>${esc(sen.gercek)}</p></div>
        <div class="gos" style="justify-content:center;margin-top:12px">
          <button type="button" class="phbtn icbtn" data-hk-story="1">📸 Instagram Hikâye Kartı İndir (PNG)</button>
          <button type="button" class="phbtn" data-hk-paylas="1">📋 X / WhatsApp'ta Paylaş</button>
        </div>
        <div class="gos" style="justify-content:center;margin-top:6px">
          <button type="button" class="phbtn" data-hk-rast="1">🎲 Başka Bir Çağda Dene</button>
          <button type="button" class="phbtn" data-hk-menu="1">📋 Tüm Senaryolar</button>
        </div>
      </div>`;
  }

  function paylasMetni() {
    const sb = sonucBilgi();
    return `${sen.ik} Zaman Yolculuğu · ${sen.ad} (${sen.yil})\n${sb.baslik} (${sb.dilim})\n"${sb.ozet}"\nSen bu çağda hayatta kalabilir misin? 👇\nhttps://jondoe2972.github.io/zaman-yolculugu/`;
  }

  function storyIndir() {
    if (!window.KartPaylas) return;
    const sb = sonucBilgi();
    window.KartPaylas.indirStory({
      tema: sb.kurtuldu ? 'zafer' : 'olum',
      etiket: `TARİHTE HAYATTA KALABİLİR MİSİN? · ${sen.yil}`,
      ikon: sen.ik,
      baslik: sb.baslik,
      alt: sen.ad,
      vurgular: [
        { etiket: 'Başarı Dilimi', deger: sb.dilim },
        { etiket: 'Karar Puanı', deger: `${Math.max(0, puan)} / 6` },
        { etiket: 'Durum', deger: sb.kurtuldu ? 'Kurtuldu' : oldu.sure }
      ],
      not: sb.ozet,
      cta: 'Sen bu çağda kaç dakika yaşardın? 👇',
      dosya: 'hayatta-kal-' + sen.id,
      paylasMetin: paylasMetni()
    });
  }

  function metinPaylas() {
    if (!window.KartPaylas) return;
    window.KartPaylas.kopyalaMetin(paylasMetni()).then(ok => {
      if (ok && window.ZY && window.ZY.toast) window.ZY.toast('📋 <b>Hayatta kalma karnen kopyalandı!</b> X, Instagram veya WhatsApp\'ta yapıştırıp meydan oku.');
    });
  }

  function ac() { kur(); box.hidden = false; menuCiz(); }
  function kapat() { if (box) box.hidden = true; }
  window.HayattaKal = { ac, kapat };
})();
