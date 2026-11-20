// Yıl biçimi: iç sayılarda Y > 0 = MÖ (milattan önce), Y <= 0 = MS (milattan sonra, MS yılı = -Y).
// Örn. Y = 2560 → "MÖ 2560", Y = -1869 → "MS 1869".
'use strict';
window.YIL = (() => {
  const BUGUN = 2026;
  const fmt = y => { y = Math.round(y); return y > 0 ? `MÖ ${y}` : `MS ${Math.max(1, -y)}`; };
  const aralik = (a, b) => { a = Math.round(a); b = Math.round(b); if (a > 0 && b > 0) return `MÖ ${a}-${b}`; if (a <= 0 && b <= 0) return `MS ${Math.max(1, -a)}-${Math.max(1, -b)}`; return `${fmt(a)} – ${fmt(b)}`; };
  const once = y => { y = Math.round(y); const n = y > 0 ? y + BUGUN - 1 : BUGUN + y; return n <= 0 ? 'bu yıl' : `≈ ${n.toLocaleString('tr-TR')} yıl önce`; };
  const msYil = ms => -ms; // MS yılını iç sayıya çevirir
  return { fmt, aralik, once, msYil, BUGUN };
})();
