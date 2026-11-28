// Kürenin kabartmalı zemini (yalnızca "Resimli" ve "Gerçekçi" küre görünümlerinde; varsayılan "Oyun" görünümü bunu kullanmaz): kara (Natural Earth II, gölgeli kabartma + bitki örtüsü) ve okyanus tabanı görselleri
// WebGL ile küreye giydirilir; dunya.js sonucu kendi 2B tuvaline basar (kıyılar, sınırlar, yazılar yine 2B çizilir).
// Görseller: img/zemin-kara-4k.webp (her cihaz), img/zemin-kara-8k.webp (güçlü cihazda, yaklaşınca), img/zemin-deniz.webp.
// Üretim: araclar/zemin-uret.py. WebGL2 yoksa ya da görseller inmediyse KureZemin.hazir false kalır ve dunya.js
// eski düz renkli çizime döner.
(() => {
  'use strict';
  const SURUM = 1;
  const VS = `#version 300 es
in vec2 p; void main() { gl_Position = vec4(p, 0.0, 1.0); }`;
  const FS = `#version 300 es
precision highp float;
uniform sampler2D uT;
uniform vec2 uC;        // küre merkezi (piksel, y yukarı)
uniform float uR;       // küre yarıçapı (piksel)
uniform vec3 uDon;      // cos(enlem0), sin(enlem0), boylam0
uniform int uTur;       // 0 deniz, 1 kara
uniform vec3 uDerin, uOrta, uSig, uGol;
uniform vec3 uAyar;     // karşıtlık, doygunluk, parlaklık
uniform float uGece;    // 0 gündüz … 1 gece
uniform float uStil;    // 0 gerçekçi … 1 resimli (renkler basamaklanır, okyanus derinliği silikleşir)
out vec4 o;
void main() {
  vec2 d = (gl_FragCoord.xy - uC) / uR;
  float r2 = dot(d, d);
  if (r2 > 1.0) { o = vec4(0.0); return; }
  float z = sqrt(1.0 - r2);
  float lat = asin(clamp(d.y * uDon.x + z * uDon.y, -1.0, 1.0));
  float lon = uDon.z + atan(d.x, z * uDon.x - d.y * uDon.y);
  float u = lon / 6.28318530718 + 0.5, v = 0.5 - lat / 3.14159265359;
  // 180° boylamındaki dikişte türev sıçramasın: iki ayrı sarımdan küçük olanı kullan
  float ua = fract(u), ub = fract(u + 0.5) - 0.5;
  vec2 gxa = vec2(dFdx(ua), dFdx(v)), gya = vec2(dFdy(ua), dFdy(v));
  vec2 gxb = vec2(dFdx(ub), dFdx(v)), gyb = vec2(dFdy(ub), dFdy(v));
  bool a = abs(gxa.x) + abs(gya.x) <= abs(gxb.x) + abs(gyb.x);
  vec4 t = textureGrad(uT, vec2(u, v), a ? gxa : gxb, a ? gya : gyb);
  vec3 c;
  if (uTur == 0) {
    float L = t.r;
    c = mix(uDerin, uOrta, smoothstep(0.05, 0.62, L));
    c = mix(c, uSig, smoothstep(0.62, 1.0, L));
    c = mix(c, mix(uOrta, uSig, 0.22 + 0.3 * smoothstep(0.5, 1.0, L)), 0.66 * uStil);
  } else {
    c = t.rgb;
    float su = smoothstep(0.16, 0.25, c.b - c.r);               // iç göller: tema su rengine çek
    float par = dot(c, vec3(0.299, 0.587, 0.114));
    c = mix(c, uGol * (0.82 + 0.5 * (par - 0.5)), su);
    vec3 bas = c * 5.0;                                          // resimli: renkleri yumuşak basamaklara böl
    c = mix(c, (floor(bas) + smoothstep(0.3, 0.7, fract(bas))) / 5.0, 0.7 * uStil);
    par = dot(c, vec3(0.299, 0.587, 0.114));
    c = mix(vec3(par), c, uAyar.y);
    c = (c - 0.5) * uAyar.x + 0.5;
    c *= uAyar.z;
    vec3 gece = vec3(0.150, 0.185, 0.245) * (0.38 + 1.2 * par) + (c - vec3(par)) * 0.3;   // ay ışığında kara: denizden biraz açık, hafif renkli
    gece = mix(gece, uGol * 0.42, su);
    c = mix(c, gece, uGece);
  }
  float kenar = clamp((1.0 - sqrt(r2)) * uR, 0.0, 1.0);
  o = vec4(clamp(c, 0.0, 1.0) * kenar, kenar);
}`;
  // hazir: görseller yüklü, çizilebilir · yok: bu cihazda kullanılamıyor (beklemeye gerek yok) · seviye: 4 ya da 8 (bin piksel)
  // istendi: bir kabartmalı görünüm seçildi, görseller iniyor ya da indi (seçilmedikçe hiçbir şey indirilmez)
  const Z = window.KureZemin = { hazir: false, yok: false, istendi: false, seviye: 0, onDegis: null, ciz, yaklasti, baslat };
  let cv = null, gl = null, prog = null, U = {}, dokuKara = null, dokuDeniz = null, sekizK = 0;   // sekizK: 0 istenmedi, 1 iniyor, 2 yüklü
  const hex = h => { const n = parseInt(h.slice(1), 16); return [(n >> 16) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255]; };

  function kur() {
    cv = document.createElement('canvas'); cv.width = cv.height = 2;
    gl = cv.getContext('webgl2', { alpha: true, premultipliedAlpha: true, antialias: false, depth: false, stencil: false, powerPreference: 'high-performance' });
    if (!gl) return false;
    const derle = (tur, kod) => { const s = gl.createShader(tur); gl.shaderSource(s, kod); gl.compileShader(s); if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(s)); return s; };
    prog = gl.createProgram(); gl.attachShader(prog, derle(gl.VERTEX_SHADER, VS)); gl.attachShader(prog, derle(gl.FRAGMENT_SHADER, FS)); gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) throw new Error(gl.getProgramInfoLog(prog));
    gl.useProgram(prog);
    for (const ad of ['uT', 'uC', 'uR', 'uDon', 'uTur', 'uDerin', 'uOrta', 'uSig', 'uGol', 'uAyar', 'uGece', 'uStil']) U[ad] = gl.getUniformLocation(prog, ad);
    const b = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, b); gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    const k = gl.getAttribLocation(prog, 'p'); gl.enableVertexAttribArray(k); gl.vertexAttribPointer(k, 2, gl.FLOAT, false, 0, 0);
    gl.disable(gl.BLEND); gl.disable(gl.DEPTH_TEST);
    return true;
  }
  async function doku(url, tekKanal) {
    const yanit = await fetch(url); if (!yanit.ok) throw new Error(url + ' ' + yanit.status);
    const bmp = await createImageBitmap(await yanit.blob(), { premultiplyAlpha: 'none', colorSpaceConversion: 'none' });
    const t = gl.createTexture(); gl.bindTexture(gl.TEXTURE_2D, t);
    gl.pixelStorei(gl.UNPACK_ALIGNMENT, 1);
    if (tekKanal) gl.texImage2D(gl.TEXTURE_2D, 0, gl.R8, gl.RED, gl.UNSIGNED_BYTE, bmp);
    else gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB8, gl.RGB, gl.UNSIGNED_BYTE, bmp);
    if (bmp.close) bmp.close();
    gl.generateMipmap(gl.TEXTURE_2D);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    const an = gl.getExtension('EXT_texture_filter_anisotropic');
    if (an) gl.texParameterf(gl.TEXTURE_2D, an.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(4, gl.getParameter(an.MAX_TEXTURE_MAX_ANISOTROPY_EXT)));
    return t;
  }
  async function yukle() {
    try {
      if (!kur()) { Z.yok = true; return; }
      [dokuDeniz, dokuKara] = await Promise.all([doku('img/zemin-deniz.webp?v=' + SURUM, true), doku('img/zemin-kara-4k.webp?v=' + SURUM, false)]);
      Z.hazir = true; Z.seviye = 4; if (Z.onDegis) Z.onDegis();
    } catch (e) { Z.hazir = false; Z.yok = true; if (window.console) console.warn('Kabartmalı zemin yüklenemedi, düz renkli çizim kullanılıyor:', e.message || e); }
  }
  // Yaklaşınca, güçlü cihazda ayrıntılı (8192 px) kara görseli bir kez indirilir
  function yaklasti() {
    if (sekizK || !Z.hazir) return;
    const guclu = gl.getParameter(gl.MAX_TEXTURE_SIZE) >= 8192 && (navigator.deviceMemory || 8) >= 4 && !(window.matchMedia && matchMedia('(pointer: coarse)').matches);
    if (!guclu) { sekizK = 2; return; }
    sekizK = 1;
    doku('img/zemin-kara-8k.webp?v=' + SURUM, false).then(t => { const eski = dokuKara; dokuKara = t; gl.deleteTexture(eski); sekizK = 2; Z.seviye = 8; if (Z.onDegis) Z.onDegis(); }).catch(() => { sekizK = 2; });
  }
  // tur: 0 deniz, 1 kara. pw, ph: tuval pikseli; mx, my, r: küre merkezi ve yarıçapı (piksel, y aşağı); don: [cos, sin, boylam0]
  function ciz(tur, pw, ph, mx, my, r, don, renk, gece) {
    if (!Z.hazir) return null;
    if (cv.width !== pw || cv.height !== ph) { cv.width = pw; cv.height = ph; }
    gl.viewport(0, 0, pw, ph);
    gl.activeTexture(gl.TEXTURE0); gl.bindTexture(gl.TEXTURE_2D, tur ? dokuKara : dokuDeniz);
    gl.uniform1i(U.uT, 0); gl.uniform1i(U.uTur, tur);
    gl.uniform2f(U.uC, mx, ph - my); gl.uniform1f(U.uR, r); gl.uniform3f(U.uDon, don[0], don[1], don[2]);
    gl.uniform3fv(U.uDerin, hex(renk.derin)); gl.uniform3fv(U.uOrta, hex(renk.orta)); gl.uniform3fv(U.uSig, hex(renk.sig)); gl.uniform3fv(U.uGol, hex(renk.gol));
    gl.uniform3f(U.uAyar, renk.karsitlik || 1, renk.doygunluk || 1, renk.parlaklik || 1);
    gl.uniform1f(U.uGece, gece ? 1 : 0); gl.uniform1f(U.uStil, renk.stil || 0);
    gl.drawArrays(gl.TRIANGLES, 0, 3);
    return cv;
  }
  if (!(window.createImageBitmap && window.fetch)) Z.yok = true;
  // Kabartmalı görünüm ilk kez seçilince çağrılır: WebGL kurulur, görseller indirilir
  function baslat() {
    if (Z.istendi || Z.yok) return;
    Z.istendi = true;
    yukle().then(() => {
      if (!cv) return;
      // grafik bağlamı kaybolursa düz çizime dön; geri gelince yeniden kur
      cv.addEventListener('webglcontextlost', e => { e.preventDefault(); Z.hazir = false; Z.seviye = 0; if (Z.onDegis) Z.onDegis(); });
      cv.addEventListener('webglcontextrestored', () => { sekizK = 0; yukle(); });
    });
  }
})();
