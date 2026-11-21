// 🎲 Rastgele doğ: rastgele bir yılda, o yıl var olan rastgele bir devlette doğ; hayatını aşama aşama yaşa.
// Konum: Cliopatria sınırlarından (Dunya.devletler). Kartlar: data/oyun/hayat-olaylar.js, bulmacalar: data/oyun/hayat-bulmaca.js.
// Bayraklar (evli, cocuk, toprak…) ve unvanlar (usta, kadı, komutan, vezir, hükümdar…) hayatın yolunu belirler.
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
  const tabloOf = y => y > -1850 ? H.olumYillik.eski : y > -1950 ? H.olumYillik.sanayi : H.olumYillik.bugun;
  const qYil = (yas, y) => tabloOf(y).find(([lim]) => yas < lim)[1];
  const UNVAN_PUAN = { hukumdar: 45, vezir: 22, komutan: 18, kadi: 14, sarraf: 12, kaptan: 10, usta: 8, subay: 8, kethuda: 6, veliaht: 10, mudur: 6, surgun: 4 };
  let s = null, el = null;

  // ---------- adlar ve unvanlar ----------
  function adSec(ll, y, kadin) {
    const z = H.adlar.find(a => ll[0] <= a.kutu[0] && ll[0] >= a.kutu[1] && ll[1] >= a.kutu[2] && ll[1] <= a.kutu[3]);
    let liste = H.yedekAd;
    if (z) { const k = Object.keys(z.d); let anahtar = k[0]; if (k.length > 1 && z.sinir != null && y <= z.sinir) anahtar = k[1]; if (z.d.modern && y <= -1850) anahtar = 'modern'; liste = z.d[anahtar][0]; }
    const [e, k] = liste.split('|').map(p => p.trim().split(/\s+/));
    return sec(kadin ? k : e);
  }
  function hukumdarAdi() {
    const d = s.devlet + ' ' + s.devletEn, [la, lo] = s.ll, y = s.y0 - s.yas;
    let u = 'Kral';
    if (/Osmanlı|Ottoman/i.test(d)) u = 'Padişah';
    else if (la < 32 && la > 22 && lo > 24 && lo < 36 && y > 30) u = 'Firavun';
    else if (/Roma|Roman|Bizans|Byzant|Empire|İmparatorluğu/i.test(d) && lo > -10 && lo < 45) u = 'İmparator';
    else if (lo > 95) u = 'İmparator';
    else if (lo > 44 && lo < 63 && la > 25 && la < 42) u = y <= -651 ? 'Şah' : 'Şahanşah';
    else if (la > 38 && lo > 45 && lo < 95) u = 'Han';
    else if (la < 35 && lo > 63 && lo < 95) u = 'Raca';
    else if (la > 12 && la < 42 && lo > -18 && lo < 63 && y <= -632) u = 'Sultan';
    if (s.kadin) u = { Kral: 'Kraliçe', 'İmparator': 'İmparatoriçe', Padişah: 'Valide Sultan', Firavun: 'Firavun' }[u] || u;
    return u;
  }
  // İslam dünyasında kadı ve vezir, başka yerlerde yargıç ve baş danışman
  const islami = () => { const [la, lo] = s.ll, y = s.y0 - s.yas; return /Osmanlı|Ottoman|Sultan|Hilafet|Halifel|Emevi|Abbasi|Memlük|Mamluk|Selçuklu|Seljuk|Caliph/i.test(s.devlet + ' ' + s.devletEn) || (la > 12 && la < 42 && lo > -18 && lo < 63 && y <= -632) || (la > 35 && la < 43 && lo > 25 && lo < 45 && y <= -1071); };
  const YEREL = { kadi: ['Kadı', 'Yargıç'], vezir: ['Vezir', 'Baş danışman'], kethuda: ['Köy kethüdası', 'Köy muhtarı'] };
  const unvanAdi = () => !s.unvan ? '' : YEREL[s.unvan] ? YEREL[s.unvan][islami() ? 0 : 1] : s.unvan === 'hukumdar' ? hukumdarAdi() : s.unvan === 'veliaht' ? (/Osmanlı|Ottoman/i.test(s.devlet + s.devletEn) ? 'Şehzade' : s.kadin ? 'Prenses' : 'Prens') : s.unvan === 'surgun' ? 'Sürgündeki Prens' : (H.unvanlar[s.unvan] || '');

  // ---------- kart ----------
  // bulmaca metinlerindeki örnek adları o bölgenin adlarıyla değiştir
  const ORNEK_AD = ['Yakub', 'Selim', 'Hasan', 'Musa', 'Mehmed', 'Ali', 'İbrahim', 'Osman', 'Kerim', 'Yusuf', 'Halil', 'Davud', 'Bekir'];
  function yerellestir(metin) {
    if (!s.adMap) { s.adMap = {}; const kul = new Set([s.ad]); for (const a of ORNEK_AD) { let n = a; for (let i = 0; i < 12; i++) { n = adSec(s.ll, s.y0, false); if (!kul.has(n)) break; } kul.add(n); s.adMap[a] = n; } }
    return metin.replace(new RegExp('(' + ORNEK_AD.join('|') + ')(?=[\\s\'’".,;:!?<]|$)', 'g'), m => s.adMap[m] || m);
  }
  function kart(html) {
    if (!el) { el = document.createElement('div'); el.id = 'hayat'; el.className = 'hayat'; document.querySelector('.stage').appendChild(el); el.addEventListener('click', tikla); }
    el.hidden = false; el.innerHTML = `<button class="hy-x" title="Kapat">✕</button>${s ? durumHTML() : ''}${html}`; el.scrollTop = 0;
  }
  const bar = (ad, v, ik) => `<div class="hy-bar"><span>${ik} ${ad}</span><i><b style="width:${clamp(v, 0, 100)}%"></b></i></div>`;
  function durumHTML() {
    const st = s.st, u = unvanAdi();
    return `<div class="hy-bas"><b>${u ? `<em>${esc(u)}</em> ` : ''}${esc(s.ad)}</b><small>${s.yas} yaşında · ${YIL.fmt(s.y0 - s.yas)} · ${esc(s.devlet)}${s.meslekAd ? ' · ' + esc(s.meslekAd) : ''}</small></div>
      <div class="hy-st">${bar('Sağlık', st.sag, '❤️')}${bar('Servet', st.ser, '💰')}${bar('Mutluluk', st.mut, '😊')}${bar('Bilgi', st.bil, '📚')}${bar('İtibar', st.iti, '🏅')}</div>`;
  }
  const baslik = (ad, alt) => `<h3>${ad}</h3><div class="hy-alt">${alt || `${s.yas} yaşındasın`}</div>`;
  function etki(e) { for (const [k, v] of Object.entries(e || {})) if (k in s.st) s.st[k] = clamp(s.st[k] + v, 0, 100); }
  const bilgi = () => `<p class="hy-bilgi">💡 ${sec(H.bilgiler[donem(s.y0 - s.yas)])}</p>`;
  function yilaGit() { const y = s.y0 - s.yas; if (window.ZY) window.ZY.setYear(y); }

  // ---------- doğum ----------
  async function basla() {
    s = null; kart('<p class="hy-yukle">🎲 Kader zarı atılıyor… bir yıl ve bir yer seçiliyor.</p>');
    let y = 0, devlet = null;
    for (let deneme = 0; deneme < 6 && !devlet; deneme++) {
      const cal = Math.random() < 0.55 ? 1000 + Math.random() * 1000 : -3000 + Math.random() * 4000; y = -Math.round(cal);
      const L = await window.Dunya.devletler(y); if (L.length) devlet = agirlikli(L, d => Math.sqrt(d.a));
    }
    if (!devlet) { kart('<p>Sınır verisi yüklenemedi. Bağlantını kontrol edip yeniden dene.</p><div class="hy-sec"><button data-hy="yeni">🎲 Yeniden dene</button></div>'); return; }
    const dn = donem(y), sinif = agirlikli(H.siniflar.filter(c => c.w[DI[dn]] > 0), c => c.w[DI[dn]]), kadin = Math.random() < 0.5;
    const ll = [devlet.e[0] + (Math.random() - 0.5) * Math.min(2, (devlet.bb[1] - devlet.bb[0]) * 0.3), devlet.e[1] + (Math.random() - 0.5) * Math.min(2, (devlet.bb[3] - devlet.bb[2]) * 0.3)];
    s = { y0: y, yas: 0, ad: adSec(ll, y, kadin), kadin, devlet: devlet.ad, devletEn: devlet.n || '', ll, sinif, meslek: null, meslekAd: '', unvan: null, bayrak: new Set(), asama: 0, log: [], nadir: 0,
      st: { sag: 55 + Math.random() * 35 | 0, ser: clamp(sinif.ser + (Math.random() * 20 - 10), 0, 100) | 0, mut: 50, bil: ['din', 'soylu', 'saray', 'memur'].includes(sinif.id) ? 25 : 8, iti: sinif.id === 'saray' ? 60 : sinif.id === 'soylu' ? 40 : sinif.id === 'kole' ? 5 : 20 }, goruldu: new Set() };
    s.log.push(`${YIL.fmt(y)} yılında ${s.devlet} topraklarında ${sinif.ad} ${kadin ? 'kız' : 'erkek'} çocuk olarak doğdun.`);
    if (window.ZY) window.ZY.setView('dunya');
    yilaGit(); window.Dunya.goTo(ll[0], ll[1], 6); if (window.Dunya.pin) window.Dunya.pin(ll[0], ll[1], s.ad);
    const kraliyet = sinif.id === 'saray' ? '<p class="hy-nadir">✨ Nadir doğum! Hükümdar ailesinin bir çocuğusun; ama taht yolunda kardeşlerin de var.</p>' : '';
    kart(`${baslik('👶 Doğdun!', 'Kader zarı atıldı')}<p><b>${YIL.fmt(y)}</b> yılında, <b>${esc(s.devlet)}</b> topraklarında, ${sinif.ad} ${kadin ? 'kız' : 'erkek'} çocuk olarak dünyaya geldin. Adın: <b>${esc(s.ad)}</b>.</p>${kraliyet}${bilgi()}<div class="hy-sec"><button data-hy="ilerle">Büyü ▶</button></div>`);
  }

  // ---------- ölüm ----------
  function oldu(neden) {
    s.olu = true; s.log.push(`${s.yas} yaşında ${neden} öldün (${YIL.fmt(s.y0 - s.yas)}).`); yilaGit();
    const dunya = (window.OLAYLAR || []).filter(e => e.y <= s.y0 && e.y >= s.y0 - s.yas && e.onem >= 4).sort((a, b) => b.onem - a.onem).slice(0, 4);
    const st = s.st, puan = Math.round((st.sag + st.ser + st.mut + st.bil + st.iti) / 5 + s.yas / 2 + (UNVAN_PUAN[s.unvan] || 0) + s.nadir * 5);
    const u = unvanAdi();
    s.ozet = `${u ? u + ' ' : ''}${s.ad}: ${s.log.join(' ')}`; s.puan = puan;
    kart(`${baslik('🕯️ Hayatın sona erdi', `${s.yas} yaşında, ${YIL.fmt(s.y0 - s.yas)}`)}<p>${u ? esc(u) + ' ' : ''}${esc(s.ad)}, ${s.yas} yaşında ${neden} öldü.</p>
      <ul class="hy-log">${s.log.map(l => `<li>${esc(l)}</li>`).join('')}</ul>
      ${dunya.length ? `<h4>Sen yaşarken dünyada</h4><ul class="hy-log">${dunya.map(e => `<li><b>${YIL.fmt(e.y)}</b> ${esc(e.ad)}</li>`).join('')}</ul>` : ''}
      ${s.yas < 15 && s.y0 - s.yas > -1900 ? '<p class="hy-bilgi">💡 Gerçekte bu çağda doğan çocukların aşağı yukarı üçte biri 5 yaşına, neredeyse yarısı 15 yaşına varamazdı. Oyunda bu oran yarıya indirildi.</p>' : ''}
      <p class="hy-puan">Hayat puanın: <b>${puan}</b>${s.nadir ? ` · ✨ ${s.nadir} nadir olay` : ''}${u ? ` · Unvanın: ${esc(u)}` : ''}</p>
      <div class="hy-sec"><button data-hy="yeni">🎲 Yeniden doğ</button><button data-hy="paylas" class="ikincil">📋 Hayatımı kopyala</button><button data-hy="kapat" class="ikincil">🌍 Haritada gez</button></div>`);
  }
  function olumNedeni() {
    if (s.yas < 1) return 'bebekken, bir hastalıktan';
    if (s.yas < 6) return 'bir çocukluk hastalığından';
    if (s.yas >= 65) return sec(['yaşlılıktan', 'yaşlılıktan', 'uykusunda, huzur içinde', 'bir kış hastalığından']);
    if (s.kadin && s.yas >= 18 && s.yas <= 40 && Math.random() < 0.3) return 'doğum sırasında';
    if (s.meslek === 'asker' || s.unvan === 'komutan') return sec(['bir çarpışmada', 'kamp salgınında', 'aldığı bir yaradan']);
    if (s.meslek === 'denizci') return sec(['bir fırtınada denizde', 'gemide yayılan bir hastalıktan']);
    return sec(['bir salgında', 'ateşli bir hastalıktan', 'bir kazada', 'zatürreden']);
  }

  // ---------- ilerleme ----------
  function tarihOlayi(y1, y2) {
    return (window.OLAYLAR || []).filter(e => e.y <= y1 && e.y > y2 && !s.goruldu.has(e.id) && ['savas', 'afet', 'olay'].includes(e.tur) && km(e.ll, s.ll) < 1200).sort((a, b) => b.onem - a.onem)[0];
  }
  const uygunMu = (o, yas, y, dn) => yas >= o.yas[0] && yas <= o.yas[1] && !s.goruldu.has(o.id)
    && (!o.donem || o.donem.includes(dn)) && (!o.meslek || o.meslek.includes(s.meslek)) && (!o.sinif || o.sinif.includes(s.sinif.id))
    && (!o.unvan || o.unvan.includes(s.unvan)) && (!o.ister || o.ister.every(b => s.bayrak.has(b))) && (!o.yok || !o.yok.some(b => s.bayrak.has(b)))
    && (!o.yil || (y <= o.yil[0] && y >= o.yil[1]));
  const agirlik = o => (o.w ?? 1) * (o.unvan ? 4 : 1) * (o.meslek ? 2.5 : 1) * (o.sinif ? 2 : 1) * (o.tip ? 1.5 : 1);
  function ilerle() {
    if (!s || s.olu) return;
    if (s.asama >= H.asamalar.length) return oldu('yaşlılıktan');
    const hedef = H.asamalar[s.asama], onceki = s.yas, sagCarpan = clamp(1.7 - s.st.sag / 90, 0.45, 1.9);
    for (let a = onceki; a < hedef; a++) if (Math.random() < qYil(a, s.y0 - a) * sagCarpan) { s.yas = a; return oldu(olumNedeni()); }
    s.yas = hedef; s.asama++; yilaGit();
    const y1 = s.y0 - onceki, y2 = s.y0 - s.yas, dn = donem(y2);
    if (s.yas === 14 && !s.meslek) {
      const M = H.meslekler.filter(m => m.sinif.includes(s.sinif.id) && m.donem.includes(dn));
      return kart(`${baslik('🧭 Yol Ayrımı')}<p>Çağında çocukluk erken biterdi. Hayatını nasıl kazanacaksın?</p><div class="hy-sec dikey">${M.map(m => `<button data-hy="meslek" data-m="${m.id}">${m.ad}</button>`).join('')}</div>${bilgi()}`);
    }
    const t = tarihOlayi(y1, y2);
    if (t && Math.random() < 0.75) { s.goruldu.add(t.id); s.olay = t; return tarihKart(t); }
    const uygun = H.olaylar.filter(o => uygunMu(o, s.yas, y2, dn));
    if (!uygun.length) return kart(`${baslik('🍃 Sakin Yıllar')}<p>Birkaç yıl sakin geçti; hayat kendi akışında sürüyor.</p>${bilgi()}<div class="hy-sec"><button data-hy="ilerle">Devam ▶</button></div>`);
    const o = agirlikli(uygun, agirlik); s.goruldu.add(o.id); s.olay = o;
    if (o.varyant) { s.vary = sec(o.varyant); const ik = o.tip === 'dava' ? '⚖️ ' : o.tip === 'harp' ? '🗺️ ' : '🧩 ';
      return kart(`${baslik(ik + o.ad, o.tip === 'dava' ? `${s.yas} yaşında · mahkemedesin` : o.tip === 'harp' ? `${s.yas} yaşında · savaş konseyi` : null)}${yerellestir(s.vary.metin)}<p class="hy-ipucu">İpuçlarını dikkatle oku: doğru cevap her seferinde değişebilir.</p><div class="hy-sec dikey">${s.vary.sec.map((c, j) => `<button data-hy="bulmaca" data-j="${j}">${c.t}</button>`).join('')}</div>`); }
    kart(`${baslik(o.ad)}<p>${o.metin}</p><div class="hy-sec dikey">${o.sec.map((c, j) => `<button data-hy="secim" data-j="${j}">${c.t}</button>`).join('')}</div>`);
  }
  function tarihKart(e) {
    const ac = e.ozet ? `<p class="hy-tarih">${esc(e.ozet.slice(0, 240))}${e.ozet.length > 240 ? '…' : ''}</p>` : '';
    if (e.tur === 'savas') s.tsec = [
      { t: '⚔️ Savaşa katıl', s: [[0.5, 'Savaşa katılmayı seçtin; sağ döndün ve köyünde kahraman gibi karşılandın.', { mut: 10, ser: 5, iti: 12 }], [0.35, 'Savaşa katıldın ve ağır yaralandın.', { sag: -40, iti: 5 }], [0.15, '', {}, { olum: `${e.ad} sırasında savaşta` }]] },
      { t: '🏃 Aileni al, kaç', s: [[1, 'Kaçmayı seçtin; her şeyini bırakıp güvenli bir yere sığındın.', { ser: -20, mut: -5 }]] },
      { t: '🏠 Kal ve saklan', s: [[0.6, 'Kalmayı seçtin; ordular geçti gitti, evin sağlam kaldı.', {}], [0.4, 'Kalmayı seçtin ama evin yağmalandı.', { ser: -30, mut: -10 }]] }];
    else if (e.tur === 'afet') s.tsec = [
      { t: '🤝 Yardıma koş', s: [[0.7, 'Yardıma koşmayı seçtin; enkazdan / hastalardan insanları kurtardın.', { mut: 15, sag: -10, iti: 15 }], [0.3, 'Yardıma koştun ama sen de yaralandın / hastalandın.', { sag: -35, iti: 10 }]] },
      { t: '🏃 Uzaklaş', s: [[0.8, 'Uzaklaşmayı seçtin; tehlikeden kurtuldun.', { ser: -10 }], [0.2, 'Kaçarken her şeyini kaybettin.', { ser: -30 }]] }];
    else s.tsec = [{ t: '👂 Haberi dinle', s: [[1, 'Bu olay hayatına da dokundu; çocuklarına yıllarca anlattın.', { bil: 8 }]] }];
    kart(`${baslik(`📜 ${esc(e.ad)}`, `${s.yas} yaşında · ${YIL.fmt(e.y)} · gerçek bir olay`)}<p>Yaşadığın yerin yakınında tarih yazılıyor.</p>${ac}<div class="hy-sec dikey">${s.tsec.map((c, j) => `<button data-hy="tsecim" data-j="${j}">${c.t}</button>`).join('')}</div>`);
  }
  function uygula(so, aciklama) {
    const [, metin, et, ek = {}] = so;
    if (ek.olum) return oldu(ek.olum);
    etki(et);
    if (ek.b) for (const b of [].concat(ek.b)) s.bayrak.add(b);
    if (ek.u) s.unvan = ek.u;
    if (ek.nadir) s.nadir++;
    s.log.push(`${s.yas} yaşında: ${metin.replace(/^✨\s*/, '')}`);
    if (s.st.sag <= 0) return oldu('aldığı yaralar ve hastalık yüzünden');
    const yeniUnvan = ek.u ? `<p class="hy-nadir">🎖️ Yeni unvan: <b>${esc(unvanAdi())}</b></p>` : '';
    kart(`${baslik(ek.nadir ? '✨ Nadir bir olay!' : '↪ Sonuç')}<p class="hy-sonuc">${metin}</p>${yeniUnvan}${aciklama ? `<p class="hy-cozum">🔎 <b>Çözüm:</b> ${aciklama}</p>` : ''}${bilgi()}<div class="hy-sec"><button data-hy="ilerle">Devam ▶</button></div>`);
  }
  function olasilikla(c) { const r = Math.random(); let top = 0; for (const x of c.s) { top += x[0]; if (r <= top) return x; } return c.s[c.s.length - 1]; }
  function bulmacaSonuc(j) {
    const o = s.olay, c = s.vary.sec[j], tur = c.dogru === true ? 'dogru' : c.dogru === 'yarim' ? 'yarim' : 'yanlis', [metin, et, olumP] = o.sonuc[tur];
    s.log.push(`${s.yas} yaşında: ${o.ad}: ${tur === 'dogru' ? 'doğru karar' : tur === 'yarim' ? 'kararsız kaldı' : 'yanlış karar'}.`);
    if (olumP && Math.random() < olumP) return oldu(o.tip === 'harp' ? 'kaybedilen savaşta' : o.id === 'zehir' ? 'zehirlenerek' : 'yanlış bir kararın bedelini ödeyerek');
    etki(et); if (s.st.sag <= 0) return oldu('aldığı yaralar yüzünden');
    kart(`${baslik(tur === 'dogru' ? '✅ Doğru karar' : tur === 'yarim' ? '➖ Ne kazandın ne kaybettin' : '❌ Yanlış karar')}<p class="hy-sonuc">${metin}</p><p class="hy-cozum">🔎 <b>Çözüm:</b> ${yerellestir(s.vary.aciklama)}</p><div class="hy-sec"><button data-hy="ilerle">Devam ▶</button></div>`);
  }
  function tikla(ev) {
    const b = ev.target.closest('button'); if (!b) return;
    if (b.classList.contains('hy-x')) { el.hidden = true; return; }
    const k = b.dataset.hy;
    if (k === 'ilerle') ilerle();
    else if (k === 'yeni') basla();
    else if (k === 'kapat') el.hidden = true;
    else if (k === 'meslek') { const m = H.meslekler.find(x => x.id === b.dataset.m); s.meslek = m.id; s.meslekAd = m.ad.replace(/^\S+\s/, ''); s.log.push(`14 yaşında yolunu seçtin: ${s.meslekAd}.`); kart(`${baslik('🧭 Yolunu seçtin')}<p>${m.ad}</p>${bilgi()}<div class="hy-sec"><button data-hy="ilerle">Devam ▶</button></div>`); }
    else if (k === 'secim') uygula(olasilikla(s.olay.sec[+b.dataset.j]));
    else if (k === 'tsecim') uygula(olasilikla(s.tsec[+b.dataset.j]));
    else if (k === 'bulmaca') bulmacaSonuc(+b.dataset.j);
    else if (k === 'paylas') { const t = `🎲 Zaman Yolculuğu'nda rastgele doğdum! ${s.ozet} Hayat puanım: ${s.puan}. ${location.origin}${location.pathname}?dog=1`; (navigator.clipboard ? navigator.clipboard.writeText(t) : Promise.reject()).then(() => { b.textContent = '✓ Kopyalandı'; }, () => { b.textContent = 'Kopyalanamadı'; }); }
  }
  return { basla, get acik() { return !!(el && !el.hidden); }, get durum() { return s; } };
})();
