// Terrarium karolarını (Web Mercator) eş-dikdörtgen yükseklik ızgarasına çevirir, 8 bit gri PNG yazar.
// Kullanım: node yukselti.js <karo_klasoru> <cikti_klasoru>
'use strict';
const fs = require('fs'), path = require('path'), zlib = require('zlib');
const [, , TD, OUT] = process.argv;

function decodePNG(buf) {
  let o = 8, w, h, ct, bd; const idat = [];
  while (o < buf.length) {
    const len = buf.readUInt32BE(o), type = buf.toString('ascii', o + 4, o + 8), d = buf.subarray(o + 8, o + 8 + len);
    if (type === 'IHDR') { w = d.readUInt32BE(0); h = d.readUInt32BE(4); bd = d[8]; ct = d[9]; if (d[12]) throw new Error('interlace'); }
    else if (type === 'IDAT') idat.push(d); else if (type === 'IEND') break;
    o += 12 + len;
  }
  if (bd !== 8 || (ct !== 2 && ct !== 6)) throw new Error('desteklenmeyen PNG ' + ct + '/' + bd);
  const bpp = ct === 2 ? 3 : 4, raw = zlib.inflateSync(Buffer.concat(idat)), stride = w * bpp, out = Buffer.alloc(h * stride);
  for (let y = 0; y < h; y++) {
    const f = raw[y * (stride + 1)], src = raw.subarray(y * (stride + 1) + 1, (y + 1) * (stride + 1)), row = out.subarray(y * stride, (y + 1) * stride), up = y ? out.subarray((y - 1) * stride, y * stride) : null;
    for (let i = 0; i < stride; i++) {
      const a = i >= bpp ? row[i - bpp] : 0, b = up ? up[i] : 0, c = up && i >= bpp ? up[i - bpp] : 0; let v = src[i];
      if (f === 1) v += a; else if (f === 2) v += b; else if (f === 3) v += (a + b) >> 1;
      else if (f === 4) { const p = a + b - c, pa = Math.abs(p - a), pb = Math.abs(p - b), pc = Math.abs(p - c); v += pa <= pb && pa <= pc ? a : pb <= pc ? b : c; }
      row[i] = v & 255;
    }
  }
  const el = new Float32Array(w * h);
  for (let i = 0; i < w * h; i++) el[i] = out[i * bpp] * 256 + out[i * bpp + 1] + out[i * bpp + 2] / 256 - 32768;
  return { w, h, el };
}
const crcT = new Int32Array(256).map((_, n) => { let c = n; for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1; return c; });
const crc = b => { let c = -1; for (const x of b) c = crcT[(c ^ x) & 255] ^ (c >>> 8); return (c ^ -1) >>> 0; };
function chunk(t, d) { const l = Buffer.alloc(4); l.writeUInt32BE(d.length); const td = Buffer.concat([Buffer.from(t), d]); const c = Buffer.alloc(4); c.writeUInt32BE(crc(td)); return Buffer.concat([l, td, c]); }
function encodeGray(w, h, px) {
  const raw = Buffer.alloc(h * (w + 1));
  for (let y = 0; y < h; y++) { raw[y * (w + 1)] = 2; for (let x = 0; x < w; x++) raw[y * (w + 1) + 1 + x] = (px[y * w + x] - (y ? px[(y - 1) * w + x] : 0)) & 255; }
  const ih = Buffer.alloc(13); ih.writeUInt32BE(w, 0); ih.writeUInt32BE(h, 4); ih[8] = 8; ih[9] = 0;
  return Buffer.concat([Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]), chunk('IHDR', ih), chunk('IDAT', zlib.deflateSync(raw, { level: 9 })), chunk('IEND', Buffer.alloc(0))]);
}
// yükseklik → 8 bit: kara 128-255 (karekök ölçek, 6000 m), deniz 0-127 (karekök ölçek, 8000 m)
const enc = e => e >= 0 ? 128 + Math.round(127 * Math.sqrt(Math.min(e, 6000) / 6000)) : 127 - Math.round(127 * Math.sqrt(Math.min(-e, 8000) / 8000));

function build(z, xs, ys, box, step, name) {
  const T = 256, nx = xs[1] - xs[0] + 1, ny = ys[1] - ys[0] + 1, MW = nx * T, MH = ny * T, M = new Float32Array(MW * MH);
  for (let tx = xs[0]; tx <= xs[1]; tx++) for (let ty = ys[0]; ty <= ys[1]; ty++) {
    const t = decodePNG(fs.readFileSync(path.join(TD, `t${z}_${tx}_${ty}.png`)));
    for (let y = 0; y < T; y++) for (let x = 0; x < T; x++) M[((ty - ys[0]) * T + y) * MW + (tx - xs[0]) * T + x] = t.el[y * T + x];
  }
  const n = 2 ** z, [lat0, lat1, lon0, lon1] = box, W = Math.round((lon1 - lon0) / step), H = Math.round((lat1 - lat0) / step), px = new Uint8Array(W * H);
  for (let j = 0; j < H; j++) {
    const lat = Math.max(-85.05, Math.min(85.05, lat1 - (j + 0.5) * step)), lr = lat * Math.PI / 180;
    const gy = (1 - Math.log(Math.tan(lr) + 1 / Math.cos(lr)) / Math.PI) / 2 * n * T - ys[0] * T - 0.5;
    for (let i = 0; i < W; i++) {
      const lon = lon0 + (i + 0.5) * step, gx = (lon + 180) / 360 * n * T - xs[0] * T - 0.5;
      const x0 = Math.max(0, Math.min(MW - 2, Math.floor(gx))), y0 = Math.max(0, Math.min(MH - 2, Math.floor(gy))), fx = Math.min(1, Math.max(0, gx - x0)), fy = Math.min(1, Math.max(0, gy - y0));
      const e = (M[y0 * MW + x0] * (1 - fx) + M[y0 * MW + x0 + 1] * fx) * (1 - fy) + (M[(y0 + 1) * MW + x0] * (1 - fx) + M[(y0 + 1) * MW + x0 + 1] * fx) * fy;
      px[j * W + i] = enc(e);
    }
  }
  const png = encodeGray(W, H, px); fs.writeFileSync(path.join(OUT, name), png);
  console.log(name, W + 'x' + H, (png.length / 1024).toFixed(0) + ' KB', 'kutu', box.join(','));
}
build(3, [0, 7], [0, 7], [-90, 90, -180, 180], 0.25, 'yukselti-dunya.png');
build(5, [13, 22], [7, 15], [5, 70, -20, 75], 0.05, 'yukselti-bolge.png');
