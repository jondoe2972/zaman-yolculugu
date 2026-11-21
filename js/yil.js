// Yıl biçimi: iç sayılarda Y > 0 = MÖ (milattan önce), Y <= 0 = MS (milattan sonra, MS yılı = -Y).
// Örn. Y = 2560 → "MÖ 2560", Y = -1869 → "MS 1869".
'use strict';
window.YIL = (() => {
  const BUGUN = 2026;
  const fmt = y => { y = Math.round(y); return y > 0 ? `MÖ ${y}` : `MS ${Math.max(1, -y)}`; };
  const aralik = (a, b) => { a = Math.round(a); b = Math.round(b); if (a > 0 && b > 0) return `MÖ ${a}-${b}`; if (a <= 0 && b <= 0) return `MS ${Math.max(1, -a)}-${Math.max(1, -b)}`; return `${fmt(a)} – ${fmt(b)}`; };
  const once = y => { y = Math.round(y); const n = y > 0 ? y + BUGUN - 1 : BUGUN + y; return n <= 0 ? 'bu yıl' : `≈ ${n.toLocaleString('tr-TR')} yıl önce`; };
  const msYil = ms => -ms; // MS yılını iç sayıya çevirir
  // Türkçe ek: sayının okunuşundaki son kelimeye göre. ek(y, 'e') → "MS 476'ya", ek(y, 'den') → "MS 476'dan"
  const SON = { 1: 'bir', 2: 'iki', 3: 'üç', 4: 'dört', 5: 'beş', 6: 'altı', 7: 'yedi', 8: 'sekiz', 9: 'dokuz' };
  const ONLAR = { 1: 'on', 2: 'yirmi', 3: 'otuz', 4: 'kırk', 5: 'elli', 6: 'altmış', 7: 'yetmiş', 8: 'seksen', 9: 'doksan' };
  const sonKelime = n => n % 10 ? SON[n % 10] : n % 100 ? ONLAR[(n % 100) / 10] : n % 1000 ? 'yüz' : n % 1e6 ? 'bin' : 'milyon';
  const ek = (y, tur) => {
    const n = Math.abs(Math.round(y)) || 1, s = fmt(y), k = sonKelime(y > 0 ? n : Math.max(1, n));
    const unlu = [...k].reverse().find(c => 'aeıioöuü'.includes(c)), kalin = 'aıou'.includes(unlu), sonUnlu = 'aeıioöuü'.includes(k.slice(-1));
    if (tur === 'e') return `${s}'${sonUnlu ? 'y' : ''}${kalin ? 'a' : 'e'}`;
    const sert = 'fstkçşhp'.includes(k.slice(-1));
    return `${s}'${sert ? 't' : 'd'}${kalin ? 'a' : 'e'}n`;
  };
  return { fmt, aralik, once, msYil, ek, BUGUN };
})();
