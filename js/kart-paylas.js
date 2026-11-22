// 📸 Instagram Hikâye (9:16 PNG) & X / WhatsApp Paylaşım Kartı Üreticisi
// Keşif Karnesi (#5), Tarihte Hayatta Kal (#3) ve Arkadaşına Hazine Düellosu (#4) için ortak görsel motor.
'use strict';
(() => {
  function sar(ctx, metin, maxW, maxSatir = 4) {
    const kelimeler = String(metin || '').split(/\s+/);
    const satirlar = [];
    let cur = '';
    for (const k of kelimeler) {
      const deneme = cur ? cur + ' ' + k : k;
      if (ctx.measureText(deneme).width > maxW && cur) {
        satirlar.push(cur);
        cur = k;
        if (satirlar.length >= maxSatir - 1) break;
      } else cur = deneme;
    }
    if (cur) satirlar.push(cur);
    return satirlar;
  }

  function yuvarlakKutu(ctx, x, y, w, h, r) {
    ctx.beginPath();
    ctx.roundRect(x, y, w, h, r);
  }

  function storyCiz(opts) {
    const W = 1080, H = 1920;
    const cv = document.createElement('canvas');
    cv.width = W; cv.height = H;
    const g = cv.getContext('2d');

    // Arka plan teması
    const tema = opts.tema || 'altin';
    const palet = {
      altin: ['#1a130c', '#0d0906', '#ffd666', 'rgba(255,214,102,0.16)'],
      zafer: ['#0f2218', '#08130d', '#4ade80', 'rgba(74,222,128,0.16)'],
      olum:  ['#261010', '#120707', '#fb7185', 'rgba(251,113,133,0.18)'],
      duello:['#101a2e', '#080d18', '#38bdf8', 'rgba(56,189,248,0.18)']
    }[tema] || ['#1a130c', '#0d0906', '#ffd666', 'rgba(255,214,102,0.16)'];

    const bg = g.createRadialGradient(W * 0.5, H * 0.28, 60, W * 0.5, H * 0.5, H * 0.72);
    bg.addColorStop(0, palet[0]);
    bg.addColorStop(1, palet[1]);
    g.fillStyle = bg;
    g.fillRect(0, 0, W, H);

    // İnce yıldız parıltıları
    for (let i = 0; i < 85; i++) {
      const sx = (Math.sin(i * 127.1) * 43758.5 % 1 + 1) % 1 * W;
      const sy = (Math.sin(i * 311.7) * 23421.3 % 1 + 1) % 1 * H;
      const sr = 1 + (i % 3) * 1.1;
      g.fillStyle = `rgba(255,245,220,${0.12 + (i % 5) * 0.08})`;
      g.beginPath(); g.arc(sx, sy, sr, 0, 7); g.fill();
    }

    // Dış dekoratif çerçeve
    g.strokeStyle = palet[2];
    g.globalAlpha = 0.35;
    g.lineWidth = 4;
    yuvarlakKutu(g, 48, 48, W - 96, H - 96, 44);
    g.stroke();
    g.globalAlpha = 1;

    // Üst marka rozeti
    g.fillStyle = palet[3];
    yuvarlakKutu(g, W / 2 - 230, 110, 460, 66, 33);
    g.fill();
    g.strokeStyle = palet[2]; g.lineWidth = 2; g.stroke();
    g.fillStyle = palet[2];
    g.font = '800 30px system-ui, sans-serif';
    g.textAlign = 'center'; g.textBaseline = 'middle';
    g.fillText('⏳ ZAMAN YOLCULUĞU', W / 2, 144);

    // Etiket
    let y = 240;
    if (opts.etiket) {
      g.fillStyle = 'rgba(255,255,255,0.72)';
      g.font = '700 28px system-ui, sans-serif';
      g.fillText(opts.etiket.toUpperCase(), W / 2, y);
      y += 66;
    }

    // Dev ikon
    g.font = '145px system-ui, sans-serif';
    g.fillText(opts.ikon || '🧭', W / 2, y + 60);
    y += 175;

    // Ana başlık
    g.fillStyle = '#fff9eb';
    g.font = '800 58px Georgia, serif';
    const basSatir = sar(g, opts.baslik || 'Zaman Kâşifi', W - 160, 3);
    for (const s of basSatir) { g.fillText(s, W / 2, y); y += 72; }

    // Alt başlık
    if (opts.alt) {
      y += 6;
      g.fillStyle = palet[2];
      g.font = '700 34px system-ui, sans-serif';
      const altSatir = sar(g, opts.alt, W - 170, 2);
      for (const s of altSatir) { g.fillText(s, W / 2, y); y += 46; }
    }

    // İstatistik kutuları (2 veya 3 sütun)
    y += 38;
    const vList = (opts.vurgular || []).slice(0, 3);
    if (vList.length) {
      const gap = 24, totW = W - 160, cw = (totW - gap * (vList.length - 1)) / vList.length;
      const sx0 = 80;
      vList.forEach((v, idx) => {
        const bx = sx0 + idx * (cw + gap);
        g.fillStyle = 'rgba(255,255,255,0.06)';
        g.strokeStyle = 'rgba(255,255,255,0.16)';
        g.lineWidth = 2;
        yuvarlakKutu(g, bx, y, cw, 162, 26);
        g.fill(); g.stroke();
        g.fillStyle = palet[2];
        g.font = '800 44px system-ui, sans-serif';
        g.fillText(String(v.deger), bx + cw / 2, y + 64);
        g.fillStyle = 'rgba(255,245,225,0.75)';
        g.font = '600 24px system-ui, sans-serif';
        g.fillText(String(v.etiket), bx + cw / 2, y + 118);
      });
      y += 210;
    }

    // İlerleme çubukları (Keşif Karnesi veya Düello mesafeleri için)
    const bList = (opts.barlar || []).slice(0, 5);
    if (bList.length) {
      const bx = 96, bw = W - 192;
      for (const b of bList) {
        g.textAlign = 'left';
        g.fillStyle = '#fff5df';
        g.font = '700 28px system-ui, sans-serif';
        g.fillText(b.ad, bx, y);
        g.textAlign = 'right';
        g.fillStyle = palet[2];
        g.fillText(b.yazi || `%${b.pct}`, bx + bw, y);
        y += 24;
        g.fillStyle = 'rgba(255,255,255,0.12)';
        yuvarlakKutu(g, bx, y, bw, 22, 11); g.fill();
        g.fillStyle = palet[2];
        yuvarlakKutu(g, bx, y, Math.max(18, bw * Math.max(0, Math.min(100, b.pct || 0)) / 100), 22, 11); g.fill();
        y += 58;
      }
      g.textAlign = 'center';
      y += 16;
    }

    // Esprili karar / özet kutusu
    if (opts.not) {
      g.fillStyle = 'rgba(255,255,255,0.06)';
      g.strokeStyle = palet[2];
      g.lineWidth = 2;
      const notSatir = sar(g, opts.not, W - 240, 5);
      const nh = Math.max(150, 76 + notSatir.length * 46);
      yuvarlakKutu(g, 88, y, W - 176, nh, 28);
      g.fill(); g.stroke();
      g.fillStyle = '#fff8ea';
      g.font = '600 32px Georgia, serif';
      g.textAlign = 'center';
      notSatir.forEach((s, i) => g.fillText(s, W / 2, y + 60 + i * 46));
      y += nh + 40;
    }

    // Alt davet şeridi
    g.fillStyle = palet[3];
    yuvarlakKutu(g, 110, H - 245, W - 220, 128, 32);
    g.fill();
    g.strokeStyle = palet[2]; g.lineWidth = 2; g.stroke();
    g.fillStyle = '#fff9eb';
    g.font = '800 32px system-ui, sans-serif';
    g.textAlign = 'center';
    g.fillText(opts.cta || 'Sen beni geçebilir misin? 👇', W / 2, H - 196);
    g.fillStyle = palet[2];
    g.font = '700 26px system-ui, sans-serif';
    g.fillText('jondoe2972.github.io/zaman-yolculugu', W / 2, H - 148);

    return cv;
  }

  async function indirStory(opts) {
    const cv = storyCiz(opts);
    const dosyaAd = (opts.dosya || 'zaman-yolculugu-kart') + '.png';
    return new Promise(resolve => {
      cv.toBlob(async blob => {
        if (!blob) { resolve(false); return; }
        // Mobilde yerel paylaşım penceresi (Instagram Hikâye / WhatsApp) destekliyse kullan
        try {
          const f = new File([blob], dosyaAd, { type: 'image/png' });
          if (navigator.canShare && navigator.canShare({ files: [f] })) {
            await navigator.share({ files: [f], title: opts.baslik || 'Zaman Yolculuğu', text: opts.paylasMetin || '' });
            resolve(true); return;
          }
        } catch (e) { /* iptal edilirse indirmeye düşsün */ }
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url; a.download = dosyaAd;
        document.body.appendChild(a); a.click(); a.remove();
        setTimeout(() => URL.revokeObjectURL(url), 4000);
        resolve(true);
      }, 'image/png');
    });
  }

  function kopyalaMetin(metin) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      return navigator.clipboard.writeText(metin).then(() => true).catch(() => false);
    }
    try {
      const ta = document.createElement('textarea');
      ta.value = metin; document.body.appendChild(ta); ta.select();
      document.execCommand('copy'); ta.remove();
      return Promise.resolve(true);
    } catch (e) { return Promise.resolve(false); }
  }

  window.KartPaylas = { indirStory, kopyalaMetin };
})();
