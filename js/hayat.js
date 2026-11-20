// 🎲 Rastgele doğ: rastgele bir yılda, o yıl var olan rastgele bir devlette doğ; hayatını aşama aşama yaşa.
// Konum: Cliopatria sınırlarından (Dunya.devletler). Tarihî olaylar: OLAYLAR (yakınında olan savaş, afet, olay).
// Küre doğduğun yere gider, zaman çizelgesi yaşınla birlikte ilerler.
'use strict';
window.Hayat = (() => {
  const H = window.HAYAT, D2R = Math.PI / 180;
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
  const sec = a => a[Math.floor(Math.random() * a.length)];
  const agirlikli = (a, w) => { const t = a.reduce((s, x) => s + w(x), 0); let r = Math.random() * t; for (const x of a) { r -= w(x); if (r <= 0) return x; } return a[a.length - 1]; };
  const km = (a, b) => { const h = Math.sin((b[0] - a[0]) * D2R / 2) ** 2 + Math.cos(a[0] * D2R) * Math.cos(b[0] * D2R) * Math.sin((b[1] - a[1]) * D2R / 2) ** 2; return 12742 * Math.asin(Math.sqrt(h)); };
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const donem = y => y > -500 ? 'antik' : y > -1450 ? 'orta' : y > -1850 ? 'yeni' : 'modern';
  const DI = { antik: 0, orta: 1, yeni: 2, modern: 3 };
  const olumTablo = y => y > -1850 ? H.olum.eski : y > -1950 ? H.olum.sanayi : H.olum.bugun;
  let s = null, el = null;

  function adSec(ll, y, kadin) {
    const z = H.adlar.find(a => ll[0] <= a.kutu[0] && ll[0] >= a.kutu[1] && ll[1] >= a.kutu[2] && ll[1] <= a.kutu[3]);
    let liste = H.yedekAd;
    if (z) { const k = Object.keys(z.d); let anahtar = k[0]; if (k.length > 1 && z.sinir != null && y <= z.sinir) anahtar = k[1]; if (z.d.modern && y <= -1850) anahtar = 'modern'; liste = z.d[anahtar][0]; }
    const [e, k] = liste.split('|').map(p => p.trim().split(/\s+/));
    return sec(kadin ? k : e);
  }
  function kart(html) {
    if (!el) { el = document.createElement('div'); el.id = 'hayat'; el.className = 'hayat'; document.querySelector('.stage').appendChild(el); el.addEventListener('click', tikla); }
    el.hidden = false; el.innerHTML = `<button class="hy-x" title="Kapat">✕</button>${s ? durumHTML() : ''}${html}`; el.scrollTop = 0;
  }
  const bar = (ad, v, ik) => `<div class="hy-bar"><span>${ik} ${ad}</span><i><b style="width:${clamp(v, 0, 100)}%"></b></i></div>`;
  function durumHTML() {
    const st = s.st;
    return `<div class="hy-bas"><b>${esc(s.ad)}</b><small>${s.yas} yaşında · ${YIL.fmt(s.y0 - s.yas)} · ${esc(s.devlet)}</small></div>
      <div class="hy-st">${bar('Sağlık', st.sag, '❤️')}${bar('Servet', st.ser, '💰')}${bar('Mutluluk', st.mut, '😊')}${bar('Bilgi', st.bil, '📚')}</div>`;
  }
  function etki(e) { for (const [k, v] of Object.entries(e || {})) s.st[k] = clamp(s.st[k] + v, 0, 100); }
  const bilgi = () => `<p class="hy-bilgi">💡 ${sec(H.bilgiler[donem(s.y0 - s.yas)])}</p>`;
  function yilaGit() { const y = s.y0 - s.yas; if (window.ZY) window.ZY.setYear(y); }

  async function basla() {
    el && (el.hidden = false);
    kart('<p class="hy-yukle">🎲 Kader zarı atılıyor… bir yıl ve bir yer seçiliyor.</p>');
    let y = 0, devlet = null;
    for (let deneme = 0; deneme < 6 && !devlet; deneme++) {
      const cal = Math.random() < 0.55 ? 1000 + Math.random() * 1000 : -3000 + Math.random() * 4000; y = -Math.round(cal);
      const L = await window.Dunya.devletler(y); if (L.length) devlet = agirlikli(L, d => Math.sqrt(d.a));
    }
    if (!devlet) { kart('<p>Sınır verisi yüklenemedi. Bağlantını kontrol edip yeniden dene.</p><div class="hy-sec"><button data-hy="yeni">🎲 Yeniden dene</button></div>'); return; }
    const dn = donem(y), sinif = agirlikli(H.siniflar.filter(c => c.w[DI[dn]] > 0), c => c.w[DI[dn]]), kadin = Math.random() < 0.5;
    const ll = [devlet.e[0] + (Math.random() - 0.5) * Math.min(2, (devlet.bb[1] - devlet.bb[0]) * 0.3), devlet.e[1] + (Math.random() - 0.5) * Math.min(2, (devlet.bb[3] - devlet.bb[2]) * 0.3)];
    s = { y0: y, yas: 0, ad: adSec(ll, y, kadin), kadin, devlet: devlet.ad, ll, sinif, meslek: null, asama: 0, log: [], st: { sag: 55 + Math.random() * 35 | 0, ser: clamp(sinif.ser + (Math.random() * 20 - 10), 0, 100) | 0, mut: 50, bil: ['din', 'soylu', 'saray', 'memur'].includes(sinif.id) ? 25 : 8 }, goruldu: new Set(), olaylar: [] };
    s.log.push(`${YIL.fmt(y)} yılında ${s.devlet} topraklarında ${sinif.ad} ${kadin ? 'kız' : 'erkek'} çocuk olarak doğdun.`);
    if (window.ZY) window.ZY.setView('dunya');
    yilaGit(); window.Dunya.goTo(ll[0], ll[1], 6); if (window.Dunya.pin) window.Dunya.pin(ll[0], ll[1], s.ad);
    kart(`<h3>👶 Doğdun!</h3><p><b>${YIL.fmt(y)}</b> yılında, <b>${esc(s.devlet)}</b> topraklarında, ${sinif.ad} ${kadin ? 'kız' : 'erkek'} çocuk olarak dünyaya geldin. Adın: <b>${esc(s.ad)}</b>.</p>${bilgi()}<div class="hy-sec"><button data-hy="ilerle">Büyü ▶</button></div>`);
  }

  // yakındaki tarihî olaylar (son aşamadan bu yana, 1200 km içinde)
  function tarihOlayi(y1, y2) {
    return (window.OLAYLAR || []).filter(e => e.y <= y1 && e.y > y2 && !s.goruldu.has(e.id) && ['savas', 'afet', 'olay'].includes(e.tur) && km(e.ll, s.ll) < 1200).sort((a, b) => b.onem - a.onem)[0];
  }
  function oldu(neden) {
    s.olu = true; s.log.push(`${s.yas} yaşında ${neden} öldün (${YIL.fmt(s.y0 - s.yas)}).`); yilaGit();
    const dunya = (window.OLAYLAR || []).filter(e => e.y <= s.y0 && e.y >= s.y0 - s.yas && e.onem >= 4).sort((a, b) => b.onem - a.onem).slice(0, 4);
    const st = s.st, puan = Math.round((st.sag + st.ser + st.mut + st.bil) / 4 + s.yas / 2);
    const ozet = `${s.ad}: ${s.log.join(' ')}`;
    s.ozet = ozet;
    kart(`<h3>🕯️ Hayatın sona erdi</h3><p>${esc(s.ad)}, ${s.yas} yaşında ${neden} öldü.</p>
      <ul class="hy-log">${s.log.map(l => `<li>${esc(l)}</li>`).join('')}</ul>
      ${dunya.length ? `<h4>Sen yaşarken dünyada</h4><ul class="hy-log">${dunya.map(e => `<li><b>${YIL.fmt(e.y)}</b> ${esc(e.ad)}</li>`).join('')}</ul>` : ''}
      <p class="hy-puan">Hayat puanın: <b>${puan}</b></p>
      <div class="hy-sec"><button data-hy="yeni">🎲 Yeniden doğ</button><button data-hy="paylas" class="ikincil">📋 Hayatımı kopyala</button><button data-hy="kapat" class="ikincil">🌍 Haritada gez</button></div>`);
  }
  function ilerle() {
    if (!s || s.olu) return;
    const i = s.asama; if (i >= H.asamalar.length) return oldu('yaşlılıktan');
    const hedef = H.asamalar[i], onceki = s.yas, p = clamp(olumTablo(s.y0 - s.yas)[i] * (1.6 - s.st.sag / 100), 0.005, 0.97);
    if (Math.random() < p) {
      s.yas = onceki + Math.max(1, Math.floor(Math.random() * (hedef - onceki)));
      const neden = s.yas < 6 ? 'bir çocukluk hastalığından' : s.yas >= 60 ? 'yaşlılıktan' : s.kadin && s.yas >= 18 && s.yas <= 40 && Math.random() < 0.35 ? 'doğum sırasında' : sec(['bir salgında', 'bir hastalıktan', 'bir kazada', 'ateşli bir hastalıktan']);
      return oldu(neden);
    }
    s.yas = hedef; s.asama++; yilaGit();
    const y1 = s.y0 - onceki, y2 = s.y0 - s.yas, dn = donem(y2);
    // 14 yaş: meslek seçimi
    if (s.yas === 14) {
      const M = H.meslekler.filter(m => m.sinif.includes(s.sinif.id) && m.donem.includes(dn));
      return kart(`<h3>🧭 14 yaşındasın</h3><p>Çağında çocukluk erken biterdi. Hayatını nasıl kazanacaksın?</p><div class="hy-sec dikey">${M.map(m => `<button data-hy="meslek" data-m="${m.id}">${m.ad}</button>`).join('')}</div>${bilgi()}`);
    }
    const t = tarihOlayi(y1, y2);
    if (t) { s.goruldu.add(t.id); s.olay = t; return tarihKart(t); }
    const uygun = H.olaylar.filter(o => s.yas >= o.yas[0] && s.yas <= o.yas[1] && (!o.donem || o.donem.includes(dn)) && (!o.meslek || o.meslek.includes(s.meslek)) && (!o.sinif || o.sinif.includes(s.sinif.id)) && !s.goruldu.has(o.id));
    if (!uygun.length) return kart(`<h3>${s.yas} yaşındasın</h3><p>Sakin yıllar geçti. Hayat kendi akışında sürüyor.</p>${bilgi()}<div class="hy-sec"><button data-hy="ilerle">Devam ▶</button></div>`);
    const o = sec(uygun); s.goruldu.add(o.id); s.olay = o;
    kart(`<h3>${s.yas} yaşındasın</h3><p>${o.metin}</p><div class="hy-sec dikey">${o.sec.map((c, j) => `<button data-hy="secim" data-j="${j}">${c.t}</button>`).join('')}</div>`);
  }
  function tarihKart(e) {
    const tur = e.tur, ac = e.ozet ? `<p class="hy-tarih">${esc(e.ozet.slice(0, 220))}${e.ozet.length > 220 ? '…' : ''}</p>` : '';
    const baslik = `📜 ${YIL.fmt(e.y)}: ${esc(e.ad)}`;
    if (tur === 'savas') s.tsec = [
      { t: '⚔️ Savaşa katıl', s: [[0.5, 'Savaştan sağ döndün; köyünde kahraman gibi karşılandın.', { mut: 10, ser: 5 }], [0.35, 'Ağır yaralandın.', { sag: -40 }], [0.15, '!', {}]] },
      { t: '🏃 Aileni al, kaç', s: [[1, 'Her şeyini bırakıp güvenli bir yere sığındın.', { ser: -20, mut: -5 }]] },
      { t: '🏠 Kal ve saklan', s: [[0.6, 'Ordular geçti gitti; evin sağlam kaldı.', {}], [0.4, 'Evin yağmalandı.', { ser: -30, mut: -10 }]] }];
    else if (tur === 'afet') s.tsec = [
      { t: '🤝 Yardıma koş', s: [[0.7, 'Enkazdan / hastalardan insanları kurtardın.', { mut: 15, sag: -10 }], [0.3, 'Sen de yaralandın / hastalandın.', { sag: -35 }]] },
      { t: '🏃 Uzaklaş', s: [[0.8, 'Tehlikeden kurtuldun.', { ser: -10 }], [0.2, 'Kaçarken her şeyini kaybettin.', { ser: -30 }]] }];
    else s.tsec = [{ t: 'Haberi dinle ▶', s: [[1, 'Bu olay hayatına da dokundu; çocuklarına yıllarca anlattın.', { bil: 8 }]] }];
    kart(`<h3>${s.yas} yaşındasın</h3><p><b>${baslik}</b><br>Yaşadığın yere yakın bir yerde tarih yazılıyor.</p>${ac}<div class="hy-sec dikey">${s.tsec.map((c, j) => `<button data-hy="tsecim" data-j="${j}">${c.t}</button>`).join('')}</div>`);
  }
  function sonuc(c, kaynak) {
    const r = Math.random(); let top = 0, so = c.s[c.s.length - 1];
    for (const x of c.s) { top += x[0]; if (r <= top) { so = x; break; } }
    if (so[1] === '!') return oldu(`${kaynak.ad} sırasında savaşta`);
    etki(so[2]); s.log.push(`${s.yas} yaşında: ${so[1]}`);
    if (s.st.sag <= 0) return oldu('aldığı yaralar ve hastalık yüzünden');
    kart(`<h3>${s.yas} yaşındasın</h3><p class="hy-sonuc">${so[1]}</p>${bilgi()}<div class="hy-sec"><button data-hy="ilerle">Devam ▶</button></div>`);
  }
  function tikla(ev) {
    const b = ev.target.closest('button'); if (!b) return;
    if (b.classList.contains('hy-x')) { el.hidden = true; return; }
    const k = b.dataset.hy;
    if (k === 'ilerle') ilerle();
    else if (k === 'yeni') basla();
    else if (k === 'kapat') el.hidden = true;
    else if (k === 'meslek') { const m = H.meslekler.find(x => x.id === b.dataset.m); s.meslek = m.id; s.log.push(`14 yaşında yolunu seçtin: ${m.ad.replace(/^\S+\s/, '')}.`); kart(`<h3>Yolunu seçtin</h3><p>${m.ad}</p>${bilgi()}<div class="hy-sec"><button data-hy="ilerle">Devam ▶</button></div>`); }
    else if (k === 'secim') sonuc(s.olay.sec[+b.dataset.j], s.olay);
    else if (k === 'tsecim') sonuc(s.tsec[+b.dataset.j], s.olay);
    else if (k === 'paylas') { const t = `🎲 Zaman Yolculuğu'nda rastgele doğdum! ${s.ozet} Hayat puanım: ${b.closest('.hayat').querySelector('.hy-puan b').textContent}. ${location.origin}${location.pathname}?dog=1`; (navigator.clipboard ? navigator.clipboard.writeText(t) : Promise.reject()).then(() => { b.textContent = '✓ Kopyalandı'; }, () => { b.textContent = 'Kopyalanamadı'; }); }
  }
  return { basla, get acik() { return !!(el && !el.hidden); } };
})();
