// 📍 Bu Toprakların Tarihi: bir şehir seç ya da küreden herhangi bir noktaya dokun;
// o toprağın 5.000 yıl boyunca hangi devletlerin elinden geçtiğini kronolojik zaman şeridi olarak gör ve paylaş.
// Adres: ?oyun=toprak · Sınır motoru: window.Dunya.nerede (Cliopatria, CC BY 4.0)
'use strict';
window.ToprakTarihi = (() => {
  const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const sade = s => String(s || '').toLocaleLowerCase('tr').normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/ı/g, 'i').replace(/[^a-z0-9 ]/g, ' ').replace(/\s+/g, ' ').trim();

  // MÖ 3000'den bugüne tarihin kırılma noktalarını tarayan örneklem yılları
  const YILLAR = [3000, 2500, 2000, 1500, 1200, 1000, 750, 550, 450, 325, 200, 50, -1, -117, -250, -400, -550, -700, -850, -1000, -1085, -1150, -1210, -1280, -1350, -1420, -1450, -1475, -1550, -1650, -1750, -1820, -1880, -1914, -1924, -1942, -1965, -1992, -2024];

  const SEHIRLER = [
    ['İstanbul', 'Türkiye', 41.01, 28.97, 1],
    ['Ankara', 'Türkiye', 39.93, 32.86, 1],
    ['İzmir', 'Türkiye', 38.42, 27.14, 1],
    ['Bursa', 'Türkiye', 40.19, 29.06, 0],
    ['Antalya', 'Türkiye', 36.89, 30.71, 0],
    ['Konya', 'Türkiye', 37.87, 32.49, 0],
    ['Trabzon', 'Türkiye', 41.00, 39.72, 0],
    ['Diyarbakır', 'Türkiye', 37.91, 40.23, 0],
    ['Erzurum', 'Türkiye', 39.90, 41.27, 0],
    ['Gaziantep', 'Türkiye', 37.07, 37.38, 0],
    ['Kayseri', 'Türkiye', 38.73, 35.49, 0],
    ['Şanlıurfa', 'Türkiye', 37.17, 38.79, 0],
    ['Mardin', 'Türkiye', 37.31, 40.74, 0],
    ['Van', 'Türkiye', 38.50, 43.38, 0],
    ['Adana', 'Türkiye', 37.00, 35.32, 0],
    ['Edirne', 'Türkiye', 41.68, 26.56, 0],
    ['Samsun', 'Türkiye', 41.29, 36.33, 0],
    ['Çanakkale', 'Türkiye', 40.15, 26.41, 0],
    ['Eskişehir', 'Türkiye', 39.78, 30.52, 0],
    ['Sivas', 'Türkiye', 39.75, 37.02, 0],
    ['Kahire', 'Mısır', 30.04, 31.24, 1],
    ['Roma', 'İtalya', 41.90, 12.50, 1],
    ['Kudüs', 'Kudüs', 31.78, 35.23, 1],
    ['Bağdat', 'Irak', 33.31, 44.37, 1],
    ['Semerkant', 'Özbekistan', 39.65, 66.96, 1],
    ['Atina', 'Yunanistan', 37.98, 23.73, 0],
    ['Şam', 'Suriye', 33.51, 36.29, 0],
    ['Mekke', 'Suudi Arabistan', 21.42, 39.83, 0],
    ['Tahran', 'İran', 35.69, 51.39, 0],
    ['İsfahan', 'İran', 32.65, 51.67, 0],
    ['Bakü', 'Azerbaycan', 40.41, 49.87, 0],
    ['Tiflis', 'Gürcistan', 41.72, 44.79, 0],
    ['Selanik', 'Yunanistan', 40.64, 22.94, 0],
    ['Saraybosna', 'Bosna-Hersek', 43.86, 18.41, 0],
    ['Paris', 'Fransa', 48.86, 2.35, 1],
    ['Londra', 'Birleşik Krallık', 51.51, -0.13, 0],
    ['Madrid', 'İspanya', 40.42, -3.70, 0],
    ['Berlin', 'Almanya', 52.52, 13.41, 0],
    ['Viyana', 'Avusturya', 48.21, 16.37, 0],
    ['Moskova', 'Rusya', 55.76, 37.62, 0],
    ['Kiev', 'Ukrayna', 50.45, 30.52, 0],
    ['Pekin', 'Çin', 39.90, 116.41, 1],
    ['Tokyo', 'Japonya', 35.68, 139.69, 0],
    ['Delhi', 'Hindistan', 28.61, 77.21, 0],
    ['Meksiko', 'Meksika', 19.43, -99.13, 0],
    ['Cusco', 'Peru', -13.53, -71.97, 0],
    ['New York', 'ABD', 40.71, -74.01, 0],
    ['Timbuktu', 'Mali', 16.77, -3.01, 0],
    ['Sidney', 'Avustralya', -33.87, 151.21, 0]
  ];

  function tumSehirler() {
    const gor = new Set();
    const out = [];
    for (const [ad, ulke, la, lo, one] of SEHIRLER) {
      const k = sade(ad);
      if (gor.has(k)) continue;
      gor.add(k);
      out.push({ ad, ulke, ll: [la, lo], one: !!one });
    }
    for (const c of (window.ZY && window.ZY.cities ? window.ZY.cities() : [])) {
      if (!c || !c.ad || !c.ll) continue;
      const k = sade(c.ad);
      if (gor.has(k)) continue;
      gor.add(k);
      out.push({ ad: c.ad, ulke: (window.SEHIR_BILGI || {})[c.ad]?.bugun || 'Tarihî şehir', ll: c.ll, one: false });
    }
    return out;
  }

  function yakinSehir(la, lo) {
    let en = null, minD = 0.55;
    for (const c of tumSehirler()) {
      const d = Math.hypot(c.ll[0] - la, (c.ll[1] - lo) * Math.cos(la * Math.PI / 180));
      if (d < minD) { minD = d; en = c; }
    }
    return en;
  }

  const koordYazi = (la, lo) => `${Math.abs(la).toFixed(1).replace('.', ',')}°${la >= 0 ? 'K' : 'G'}, ${Math.abs(lo).toFixed(1).replace('.', ',')}°${lo >= 0 ? 'D' : 'B'}`;

  let el = null, secBar = null, aktif = null, istekNo = 0;

  function kutu() {
    if (!el) {
      el = document.createElement('div');
      el.id = 'topraklar';
      el.className = 'topraklar-mod';
      el.setAttribute('role', 'dialog');
      el.setAttribute('aria-label', 'Bu Toprakların Tarihi');
      document.querySelector('.stage').appendChild(el);
      el.addEventListener('click', tikla);
      el.addEventListener('input', ev => { if (ev.target.matches('.tt-ara input')) oneriCiz(); });
      el.addEventListener('keydown', tus);
      window.addEventListener('keydown', ev => { if (ev.key === 'Escape' && el && !el.hidden) kapat(); });
    }
    el.hidden = false;
    return el;
  }

  function iskelet() {
    const hizli = tumSehirler().filter(c => c.one);
    kutu().innerHTML = `
      <div class="tt-ust">
        <div><b>📍 Bu Toprakların Tarihi</b><small>5.000 yılda hangi devletlerin elinden geçti?</small></div>
        <button class="tt-x" title="Kapat" aria-label="Kapat">✕</button>
      </div>
      <div class="tt-kont">
        <div class="tt-ara">
          <input type="search" placeholder="Şehir yaz… (ör. İstanbul, Konya, Roma, Semerkant)" autocomplete="off" aria-label="Şehir ara">
          <ul class="tt-oneri" hidden></ul>
        </div>
        <button class="tt-kuresec" data-tt="kuresec" title="Kürede istediğin bir noktaya dokun">🌍 Küreden Seç</button>
      </div>
      <div class="tt-cipler">${hizli.map(c => `<button data-tt-sehir="${esc(c.ad)}">${esc(c.ad)}</button>`).join('')}</div>
      <div class="tt-sonuc"></div>`;
  }

  let oneriIdx = 0;
  function oneriCiz() {
    const inp = el.querySelector('.tt-ara input'), ul = el.querySelector('.tt-oneri');
    if (!inp || !ul) return;
    const q = sade(inp.value);
    if (!q) { ul.hidden = true; ul.innerHTML = ''; return; }
    const A = tumSehirler().filter(c => {
      const a = sade(c.ad), u = sade(c.ulke);
      return a.includes(q) || u.includes(q);
    }).sort((a, b) => (sade(a.ad).startsWith(q) ? 0 : 1) - (sade(b.ad).startsWith(q) ? 0 : 1) || a.ad.localeCompare(b.ad, 'tr')).slice(0, 7);
    oneriIdx = 0;
    ul.hidden = !A.length;
    ul.innerHTML = A.map((c, i) => `<li data-tt-sehir="${esc(c.ad)}" class="${i === 0 ? 'on' : ''}"><b>${esc(c.ad)}</b><small>${esc(c.ulke)}</small></li>`).join('');
  }

  async function incele(ad, alt, ll) {
    const no = ++istekNo;
    aktif = { ad, alt, ll, donemler: [] };
    const box = el.querySelector('.tt-sonuc');
    if (!box) return;
    el.querySelectorAll('.tt-cipler button').forEach(b => b.classList.toggle('on', b.dataset.ttSehir === ad));
    box.innerHTML = `<div class="tt-yukle"><span>⏳</span><b>${esc(ad)}</b> için 5.000 yıllık sınır kayıtları taranıyor…</div>`;

    const DN = window.Dunya;
    if (!DN || !DN.nerede) {
      box.innerHTML = '<p class="tt-bos">Dünya sınır motoru hazır değil.</p>';
      return;
    }
    const [la, lo] = ll;
    const KIYI_KAY = [[0, 0], [0.08, 0], [-0.08, 0], [0, 0.08], [0, -0.08]];
    const sonuclar = await Promise.all(YILLAR.map(async y => {
      try {
        let k = null;
        for (const [da, do_] of KIYI_KAY) {
          k = await DN.nerede(la + da, lo + do_, y);
          if (k) break;
        }
        return { y, k, ad: k ? DN.sinirAd(k, y) : null };
      } catch (e) {
        return { y, k: null, ad: null };
      }
    }));
    if (no !== istekNo || !el || el.hidden) return;

    // Ardışık aynı devletleri tek dönem olarak birleştir
    const donemler = [];
    for (const r of sonuclar) {
      if (!r.ad) continue;
      const son = donemler[donemler.length - 1];
      if (son && son.ad === r.ad) {
        son.sonY = r.y;
        son.k = r.k;
      } else {
        donemler.push({ ad: r.ad, k: r.k, ilkY: r.y, sonY: r.y });
      }
    }
    aktif.donemler = donemler;

    if (!donemler.length) {
      box.innerHTML = `<div class="tt-ozet"><b>📍 ${esc(ad)}</b><small>${esc(alt || koordYazi(la, lo))}</small></div>
        <p class="tt-bos">Bu koordinat (ör. açık deniz veya kutup bölgesi) için kayıtlı bir devlet sınırı bulunamadı. Başka bir şehir ya da kara noktası dene.</p>`;
      return;
    }

    const benzersiz = new Set(donemler.map(d => d.ad)).size;
    const tarihYazi = d => d.ilkY === d.sonY
      ? (d.sonY <= -2024 ? 'Bugün' : `${YIL.fmt(d.ilkY)} civarı`)
      : `${YIL.fmt(d.ilkY)} – ${d.sonY <= -2024 ? 'Bugün' : YIL.fmt(d.sonY)}`;

    box.innerHTML = `
      <div class="tt-ozet">
        <div>
          <b>📍 ${esc(ad)}</b>
          <small>${esc(alt || koordYazi(la, lo))} · <b>${benzersiz} farklı devlet</b> izi bulundu</small>
        </div>
        <button class="ana" data-tt="paylas">📋 Paylaş</button>
      </div>
      <ol class="tt-serit">
        ${donemler.map((d, i) => `
          <li class="${d.sonY <= -2024 ? 'bugun' : ''}">
            <span class="tt-nokta"></span>
            <div class="tt-satir">
              <button class="tt-git" data-tt-git="${i}" title="Küreyi bu yıla ve yere götür">
                <small>${tarihYazi(d)}</small>
                <b>${esc(d.ad)}</b>
              </button>
              <button class="tt-bilgi" data-tt-devlet="${i}" title="Devlet hakkında ayrıntılar">ⓘ</button>
            </div>
          </li>`).join('')}
      </ol>
      <p class="tt-not">Bir döneme tıkla: küre o yıla gider. ⓘ düğmesi devletin ayrıntı kartını açar. (Kaynak: Cliopatria, CC BY 4.0)</p>`;
  }

  function paylasMetni() {
    if (!aktif || !aktif.donemler.length) return '';
    const satirlar = aktif.donemler.map(d => {
      const t = d.ilkY === d.sonY ? (d.sonY <= -2024 ? 'Bugün' : YIL.fmt(d.ilkY)) : `${YIL.fmt(d.ilkY)}–${d.sonY <= -2024 ? 'Bugün' : YIL.fmt(d.sonY)}`;
      return `⏳ ${t}: ${d.ad}`;
    });
    return `📍 ${aktif.ad} — 5.000 Yılda Kimlerin Elindeydi?\n${satirlar.join('\n')}\n${location.origin}${location.pathname}?oyun=toprak`;
  }

  function kureSecBaslat() {
    if (el) el.hidden = true;
    if (window.ZY) window.ZY.setView('dunya');
    if (!secBar) {
      secBar = document.createElement('div');
      secBar.id = 'tt-secbar';
      secBar.className = 'tt-secbar';
      secBar.innerHTML = '<span>📍 <b>Kürede bir noktaya dokun:</b> o toprağın 5.000 yıllık tarihini çıkarayım</span><button type="button">İptal</button>';
      secBar.querySelector('button').addEventListener('click', () => kureSecIptal(false));
      document.querySelector('.stage').appendChild(secBar);
    }
    secBar.hidden = false;
    window.__kureSec = ll => {
      kureSecIptal(true);
      if (!ll) { if (el) el.hidden = false; return; }
      const [la, lo] = ll;
      const yak = yakinSehir(la, lo);
      if (window.Dunya && window.Dunya.pin) window.Dunya.pin(la, lo, yak ? yak.ad : 'Seçilen nokta');
      if (el) el.hidden = false;
      incele(yak ? `${yak.ad} çevresi` : 'Seçilen Nokta', koordYazi(la, lo), [la, lo]);
    };
  }

  function kureSecIptal(sessiz) {
    window.__kureSec = null;
    if (secBar) secBar.hidden = true;
    if (!sessiz && el) el.hidden = false;
  }

  function tikla(ev) {
    if (ev.target.closest('.tt-x')) return kapat();
    const sh = ev.target.closest('[data-tt-sehir]');
    if (sh) {
      const c = tumSehirler().find(x => x.ad === sh.dataset.ttSehir);
      if (c) {
        const inp = el.querySelector('.tt-ara input'), ul = el.querySelector('.tt-oneri');
        if (inp) inp.value = '';
        if (ul) ul.hidden = true;
        incele(c.ad, c.ulke, c.ll);
      }
      return;
    }
    const git = ev.target.closest('[data-tt-git]');
    if (git && aktif) {
      const d = aktif.donemler[+git.dataset.ttGit];
      if (d) {
        kapat();
        if (window.ZY) { window.ZY.setView('dunya'); window.ZY.setYear(d.ilkY); }
        if (window.Dunya) { window.Dunya.goTo(aktif.ll[0], aktif.ll[1], 4.8); window.Dunya.pin(aktif.ll[0], aktif.ll[1], `${aktif.ad} · ${d.ad}`); }
      }
      return;
    }
    const dv = ev.target.closest('[data-tt-devlet]');
    if (dv && aktif) {
      const d = aktif.donemler[+dv.dataset.ttDevlet];
      if (d && d.k && window.ZY && window.ZY.openDevlet) {
        window.ZY.setYear(d.ilkY);
        window.ZY.openDevlet(d.k);
      }
      return;
    }
    const act = ev.target.closest('[data-tt]');
    if (!act) return;
    if (act.dataset.tt === 'kuresec') kureSecBaslat();
    else if (act.dataset.tt === 'paylas') {
      const t = paylasMetni();
      (navigator.clipboard ? navigator.clipboard.writeText(t) : Promise.reject()).then(
        () => { act.textContent = '✓ Kopyalandı'; setTimeout(() => { act.textContent = '📋 Paylaş'; }, 1800); },
        () => { act.textContent = 'Kopyalanamadı'; }
      );
    }
  }

  function tus(ev) {
    if (!ev.target.matches('.tt-ara input')) return;
    const ul = el.querySelector('.tt-oneri'), li = [...ul.querySelectorAll('li')];
    if (ev.key === 'ArrowDown' || ev.key === 'ArrowUp') {
      if (!li.length) return;
      ev.preventDefault();
      oneriIdx = (oneriIdx + (ev.key === 'ArrowDown' ? 1 : -1) + li.length) % li.length;
      li.forEach((x, i) => x.classList.toggle('on', i === oneriIdx));
    } else if (ev.key === 'Enter' && li[oneriIdx]) {
      ev.preventDefault();
      li[oneriIdx].click();
    }
  }

  function ac(sehirAd) {
    kureSecIptal(true);
    iskelet();
    const hedef = (sehirAd && tumSehirler().find(x => sade(x.ad) === sade(sehirAd))) || tumSehirler()[0];
    if (hedef) incele(hedef.ad, hedef.ulke, hedef.ll);
  }

  function kapat() {
    kureSecIptal(true);
    if (el) el.hidden = true;
  }

  return { ac, kapat };
})();
