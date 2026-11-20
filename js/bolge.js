// Bölge seçimi. Adres: ?bolge=misir | anadolu | avrupa. Parametre yoksa "Tüm Dünya": bütün bölgeler birlikte yüklenir.
// Her bölge kendi veri dosyalarını yükler; sahne, küre ve arayüz motoru ortaktır.
// Veri dosyaları bölgenin ortak bilgilerini window.MISIR adlı nesneye yazar (tarihsel ad; "bölge verisi" demek).
'use strict';
(() => {
  const ORTAK = ['data/dunya-veri.js?v=28'];
  const B = {
    misir: {
      id: 'misir', ad: 'Mısır', ikon: '🏺', merkez: [27.2, 31.0], merkezZ: 6, isaret: [27, 31],
      hakkinda: 'Bu çağda Mısır', simgeAd: "Mısır'ın simgeleri", bugunAd: 'Bugünkü Mısır', antikAd: 'Antik Mısır',
      uc3: true, kultur: true,
      dosyalar: ['data/misir-erken.js?v=28', 'data/misir-eski-krallik.js?v=28', 'data/misir-bilgi.js?v=28', 'data/misir-orta-krallik.js?v=28',
        'data/misir-yeni-krallik.js?v=28', 'data/misir-gec-donem.js?v=28', 'data/misir-genel.js?v=28', 'data/misir-kultur.js?v=28',
        'data/misir-sinirlar.js?v=28', 'data/olaylar.js?v=28', 'data/misir-sehir-bilgi.js?v=28', ...ORTAK,
        'data/misir-ms-roma.js?v=1', 'data/misir-ms-islam.js?v=1', 'data/misir-ms-modern.js?v=1', 'data/misir-ms-dunya.js?v=1', 'data/ulke-sayfalari.js?v=3']
    },
    anadolu: {
      id: 'anadolu', ad: 'Anadolu', ikon: '🏛️', merkez: [39.0, 34.5], merkezZ: 5.5, isaret: [39, 35],
      hakkinda: 'Bu çağda Anadolu', yonelme: "Anadolu'ya", hukumdar: 'hükümdar', simgeGiris: "Anadolu'yu Anadolu yapan yerler, halklar ve eserler.", simgeAlt: '12.000 yıllık Anadolu mirası · bugünkü Türkiye', simgeAd: "Anadolu'nun simgeleri", bugunAd: 'Bugünkü Türkiye', antikAd: 'Anadolu',
      uc3: false, kultur: false,
      tum: { kisa: 'Tüm Anadolu tarihi', baslik: 'Anadolu · Bütün çağlar (MÖ 9600 – bugün)', start: 1300,
        hizli: [{ ad: 'Göbekli Tepe', y: 9500 }, { ad: 'Çatalhöyük', y: 7000 }, { ad: 'Kaniş', y: 1900 }, { ad: 'Hititler', y: 1600 }, { ad: 'Kadeş', y: 1274 }, { ad: 'Truva', y: 1180 },
          { ad: 'Midas', y: 720 }, { ad: 'İlk sikke', y: 620 }, { ad: 'Kroisos', y: 550 }, { ad: 'İskender', y: 334 }, { ad: 'Bergama', y: 180 }, { ad: 'Konstantinopolis', y: -330 }, { ad: 'Ayasofya', y: -537 },
          { ad: 'Malazgirt', y: -1071 }, { ad: 'Mevlana', y: -1260 }, { ad: 'İstanbul fethi', y: -1453 }, { ad: 'Süleymaniye', y: -1557 }, { ad: 'Cumhuriyet', y: -1923 }, { ad: 'Bugün', y: -2026 }] },
      mevsimler: { ahet: ['🌧️ Bahar', 'İlkbahar yağmurları: tarlalar yeşerir'], peret: ['🌱 Ekim', 'Güz ekimi: buğday ve arpa toprağa atılır'], semu: ['🌾 Hasat', 'Yaz hasadı: buğday biçilir, harman yapılır'] },
      sahne: { tema: 'anadolu', kum1: '#9fb3bd', kum2: '#b8b48c', dag: 2.3, plato: '#cdb97e', platoKenar: '#ae9a62', yakin: '#cbb27a', yol: 'rgba(222,205,160,0.6)',
        nehirYazi: 'KIZILIRMAK · Anadolu\'nun en uzun nehri', nehirAd: 'Anadolu\'nun nehirleri', agac: 'karisik', taskin: false, nehirRenk: [70, 128, 150] },
      dosyalar: ['data/anadolu/anadolu-antik.js?v=1', 'data/anadolu/anadolu-klasik.js?v=1', 'data/anadolu/anadolu-ortacag.js?v=1', 'data/anadolu/anadolu-osmanli.js?v=1',
        'data/anadolu/anadolu-genel.js?v=1', 'data/anadolu/anadolu-dunya.js?v=1', ...ORTAK, 'data/anadolu/anadolu-sayfa.js?v=1']
    }
  };
  B.avrupa = {
    id: 'avrupa', ad: 'Avrupa', ikon: '🏰', merkez: [49.5, 12.0], merkezZ: 3.2, isaret: [49, 10],
    hakkinda: 'Bu çağda Avrupa', yonelme: "Avrupa'ya", hukumdar: 'önder', simgeGiris: "Avrupa'yı Avrupa yapan yerler, olaylar ve fikirler.", simgeAlt: '5.000 yıllık Avrupa mirası · bugünkü Avrupa',
    simgeAd: "Avrupa'nın simgeleri", bugunAd: 'Bugünkü Avrupa', antikAd: 'Avrupa', uc3: false, kultur: false,
    tum: { kisa: 'Tüm Avrupa tarihi', baslik: 'Avrupa · Bütün çağlar (MÖ 3000 – bugün)', start: 432,
      hizli: [{ ad: 'Stonehenge', y: 2500 }, { ad: 'Knossos', y: 1700 }, { ad: 'Parthenon', y: 440 }, { ad: 'Sezar', y: 44 }, { ad: 'Kolezyum', y: -80 }, { ad: 'Roma\'nın düşüşü', y: -476 }, { ad: 'Şarlman', y: -800 },
        { ad: 'Notre-Dame', y: -1250 }, { ad: 'Kara Ölüm', y: -1348 }, { ad: 'Matbaa', y: -1450 }, { ad: 'Rönesans', y: -1504 }, { ad: 'Reform', y: -1517 }, { ad: 'Versay', y: -1690 }, { ad: 'Fransız İhtilali', y: -1789 },
        { ad: 'Napolyon', y: -1805 }, { ad: 'Eyfel', y: -1889 }, { ad: '1. Dünya Savaşı', y: -1916 }, { ad: '2. Dünya Savaşı', y: -1942 }, { ad: 'Berlin Duvarı', y: -1989 }, { ad: 'Bugün', y: -2026 }] },
    mevsimler: { ahet: ['🌧️ Bahar', 'İlkbahar yağmurları'], peret: ['🌱 Ekim', 'Güz ekimi'], semu: ['🌾 Hasat', 'Yaz hasadı'] },
    sahne: { tema: 'avrupa', kum1: '#8fa6b8', kum2: '#9fb88a', dag: 2.0, plato: '#a9c27e', platoKenar: '#86a05e', yakin: '#9fbf74', yol: 'rgba(200,190,160,0.6)',
      nehirYazi: 'REN · TUNA · SEN · TİBER: Avrupa\'nın nehirleri', nehirAd: 'Avrupa\'nın nehirleri', agac: 'karisik', taskin: false, nehirRenk: [60, 110, 150] },
    dosyalar: ['data/avrupa/avrupa-antik.js?v=1', 'data/avrupa/avrupa-ortacag.js?v=1', 'data/avrupa/avrupa-modern.js?v=1', 'data/avrupa/avrupa-genel.js?v=1', ...ORTAK]
  };
  const SIRA = ['misir', 'anadolu', 'avrupa'];
  B.dunya = {
    id: 'dunya', ad: 'Tüm Dünya', ikon: '🌍', dunya: true, merkez: [36, 22], merkezZ: 1.9, isaret: null,
    hakkinda: 'Bu yıl dünyada', yonelme: 'bir bölgeye', simgeAd: 'Dünyanın simgeleri', simgeGiris: 'Mısır, Anadolu ve Avrupa\'dan simgeler.', simgeAlt: 'Bütün bölgelerin mirası',
    bugunAd: 'Bugünkü dünya', antikAd: 'Dünya', hukumdar: 'hükümdar', uc3: false, kultur: false,
    tum: { kisa: 'Tüm dünya tarihi', baslik: 'Dünya · Bütün bölgeler (MÖ 9600 – bugün)', start: 1274,
      hizli: [{ ad: 'Göbekli Tepe', y: 9500 }, { ad: 'Çatalhöyük', y: 7000 }, { ad: 'Mısır birleşiyor', y: 3100 }, { ad: 'Büyük Piramit', y: 2577 }, { ad: 'Stonehenge', y: 2500 }, { ad: 'Hititler', y: 1600 },
        { ad: 'Kadeş', y: 1274 }, { ad: 'Truva', y: 1180 }, { ad: 'Parthenon', y: 440 }, { ad: 'İskender', y: 334 }, { ad: 'Sezar', y: 44 }, { ad: 'Kolezyum', y: -80 }, { ad: 'Ayasofya', y: -537 },
        { ad: 'Malazgirt', y: -1071 }, { ad: 'İstanbul fethi', y: -1453 }, { ad: 'Fransız İhtilali', y: -1789 }, { ad: 'Süveyş Kanalı', y: -1869 }, { ad: 'Cumhuriyet', y: -1923 }, { ad: '2. Dünya Savaşı', y: -1942 }, { ad: 'Bugün', y: -2026 }] }
  };
  const q = new URLSearchParams(location.search).get('bolge');
  const id = B[q] ? q : 'dunya';
  window.BOLGELER = B; window.BOLGE_SIRA = SIRA;
  window.BOLGE = B[id];
  // senkron yükleme: sıra korunur, motor dosyaları bunlardan sonra çalışır
  if (id !== 'dunya') { for (const f of B[id].dosyalar) document.write(`<script src="${f}"><\/script>`); return; }

  // ---- Tüm Dünya: bölgeler aynı global adlara yazdığı için sırayla yüklenir; her bölgeden sonra veriler toplanır ----
  const GLB = ['PLACES', 'MISIR', 'SINIRLAR', 'OLAYLAR', 'SEHIR_BILGI', 'KULTUR'];
  const V = window.BOLGE_VERI = {};
  window.__bolgeTopla = b => {
    V[b] = {}; for (const k of GLB) { V[b][k] = window[k]; window[k] = undefined; }
    for (const p of V[b].PLACES || []) p.bolge = b;
    for (const c of (V[b].MISIR || {}).sehirler || []) c.bolge = b;
    for (const s of V[b].SINIRLAR || []) s.bolge = b;
    for (const e of V[b].OLAYLAR || []) e.bolge = e.bolge || b;
  };
  window.__bolgeBirlestir = () => {
    const L = SIRA.map(b => V[b]), MM = L.map(v => v.MISIR || {});
    const sehirAd = new Set(), olayId = new Set();
    window.PLACES = L.flatMap((v, i) => (v.PLACES || []).map(p => { p.sira = i * 100 + (p.sira || 0); return p; }));
    window.MISIR = {
      ...MM[0],
      coords: Object.assign({}, ...MM.map(m => m.coords || {})),
      wiki: Object.assign({}, ...MM.map(m => m.wiki || {})),
      bilgi: Object.assign({}, ...MM.map(m => m.bilgi || {})),
      sehirler: MM.flatMap(m => m.sehirler || []).filter(c => !sehirAd.has(c.ad) && sehirAd.add(c.ad)),
      simgeler: MM.flatMap(m => m.simgeler || []),
      kureAdlari: MM.flatMap(m => m.kureAdlari || []),
      bugun: MM.map((m, i) => `<h4>${B[SIRA[i]].ikon} ${B[SIRA[i]].bugunAd}</h4>${m.bugun || ''}`).join('')
    };
    window.SINIRLAR = L.flatMap(v => v.SINIRLAR || []);
    window.OLAYLAR = L.flatMap(v => v.OLAYLAR || []).filter(e => !olayId.has(e.id) && olayId.add(e.id));
    window.SEHIR_BILGI = Object.assign({}, ...L.map(v => v.SEHIR_BILGI || {}));
    window.KULTUR = { tanrilar: [], olumler: [], roller: [], mumyalama: '', ic: { eslesme: {}, sahneler: {} }, bilim: { genel: '', cag: {} } };
  };
  const yuklendi = new Set();
  for (const b of SIRA) {
    for (const f of B[b].dosyalar) { if (yuklendi.has(f)) continue; yuklendi.add(f); document.write(`<script src="${f}"><\/script>`); }
    document.write(`<script>window.__bolgeTopla('${b}')<\/script>`);
  }
  document.write('<script>window.__bolgeBirlestir()<\/script>');
})();
