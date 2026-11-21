// 🗺️ Sınırdan Bil oyununun devlet listesini üretir ve doğrular: data/oyun/sinir-bil.js
// Her satır: [Cliopatria adı, Türkçe ad, gösterilecek yıl]. Yıl: MÖ pozitif, MS negatif.
// Betik o yılda o adla bir sınır kaydı olduğunu denetler; merkez ve Vikipedi başlığını kayıttan alır.
// Kullanım: node araclar/sinir-bil-uret.js
const fs = require('fs'), path = require('path');
const kok = path.join(__dirname, '..');
const LISTE = [
  ['Mongol Empire', 'Moğol İmparatorluğu', -1259], ['Roman Empire', 'Roma İmparatorluğu', -117], ['Ottoman Empire', 'Osmanlı İmparatorluğu', -1595],
  ['Achaemenid Empire', 'Pers (Ahameniş) İmparatorluğu', 480], ['Macedonian Empire', 'Büyük İskender İmparatorluğu', 323], ['Byzantine Empire', 'Bizans İmparatorluğu', -1050],
  ['Umayyad Caliphate', 'Emevi Halifeliği', -740], ['Abbasid Caliphate', 'Abbasi Halifeliği', -800], ['Great Seljuk Empire', 'Büyük Selçuklu Devleti', -1090],
  ['Sultanate of Rum', 'Anadolu Selçuklu Devleti', -1240], ['Timurid Empire', 'Timur İmparatorluğu', -1405], ['Golden Horde', 'Altın Orda', -1300],
  ['Göktürk Khaganate', 'Göktürk Kağanlığı', -570], ['Uyghur Khaganate', 'Uygur Kağanlığı', -800], ['Hunnic Empire', 'Hun İmparatorluğu (Attila)', -450],
  ['Xiongnu', 'Asya Hunları (Hiung-nu)', 150], ['Han Dynasty', 'Han Hanedanı (Çin)', -100], ['Tang Dynasty', 'Tang Hanedanı (Çin)', -700],
  ['Ming Dynasty', 'Ming Hanedanı (Çin)', -1500], ['Qing Dynasty', 'Qing Hanedanı (Çin)', -1800], ['Yuan Dynasty', 'Yuan Hanedanı (Çin)', -1330],
  ['Qin Dynasty', 'Qin Hanedanı (Çin)', 210], ['Maurya Empire', 'Maurya İmparatorluğu', 250], ['Gupta Empire', 'Gupta İmparatorluğu', -400],
  ['Mughal Empire', 'Babür İmparatorluğu', -1700], ['Safavid Dynasty', 'Safevi Devleti', -1520], ['Sasanian Empire', 'Sasani İmparatorluğu', -600],
  ['Parthian Empire', 'Part İmparatorluğu', -100], ['Seleucid Empire', 'Selevkos İmparatorluğu', 290], ['Ptolemaic Kingdom', 'Ptolemaios Krallığı (Mısır)', 250],
  ['New Kingdom of Egypt', 'Mısır Yeni Krallığı', 1350], ['Old Kingdom of Egypt', 'Mısır Eski Krallığı', 2400], ['Hittites', 'Hitit Krallığı', 1280],
  ['Neo-Assyrian Empire', 'Yeni Asur İmparatorluğu', 650], ['Neo-Babylonian Empire', 'Yeni Babil İmparatorluğu', 570], ['Akkadian Empire', 'Akad İmparatorluğu', 2250],
  ['Lydia', 'Lidya Krallığı', 560], ['Kingdom of Urartu', 'Urartu Krallığı', 610], ['Carthage', 'Kartaca', 220],
  ['Roman Republic', 'Roma Cumhuriyeti', 60], ['Western Roman Empire', 'Batı Roma İmparatorluğu', -400], ['Holy Roman Empire', 'Kutsal Roma Germen İmparatorluğu', -1200],
  ['Kingdom of the Franks', 'Frank Krallığı', -800], ['Kingdom of France', 'Fransa Krallığı', -1700], ['Kingdom of England', 'İngiltere Krallığı', -1500],
  ['Russian Empire', 'Rus İmparatorluğu', -1900], ['Union of Soviet Socialist Republics', 'Sovyetler Birliği', -1960], ['Tsardom of Russia', 'Rusya Çarlığı', -1700],
  ['Polish-Lithuanian Commonwealth', 'Lehistan-Litvanya Birliği', -1620], ['Austria-Hungary', 'Avusturya-Macaristan', -1900], ['German Empire', 'Alman İmparatorluğu', -1900],
  ['Nazi Germany', 'Nazi Almanyası', -1942], ['First French Empire', 'Napolyon Fransası (I. Fransız İmparatorluğu)', -1811], ['Swedish Empire', 'İsveç İmparatorluğu', -1660],
  ['Republic of Venice', 'Venedik Cumhuriyeti', -1450], ["Kievan Rus'", 'Kiev Rus Knezliği', -1050], ['Khazaria', 'Hazar Kağanlığı', -800],
  ['Mamluk Sultanate', 'Memlük Sultanlığı', -1400], ['Fatimid Caliphate', 'Fatımi Halifeliği', -1000], ['Ayyubid Sultanate', 'Eyyubi Devleti', -1190],
  ['Caliphate of Córdoba', 'Endülüs Emevi Devleti', -1000], ['Almohad Caliphate', 'Muvahhidler', -1200], ['Inca Empire', 'İnka İmparatorluğu', -1525],
  ['Aztec Triple Alliance', 'Aztek İmparatorluğu', -1515], ['Mali Empire', 'Mali İmparatorluğu', -1350], ['Songhai Empire', 'Songay İmparatorluğu', -1550],
  ['Ethiopian Empire', 'Habeşistan (Etiyopya İmparatorluğu)', -1900], ['Kingdom of Kush', 'Kuş Krallığı', 700], ['Khmer Empire', 'Khmer İmparatorluğu', -1200],
  ['Srivijaya', 'Srivijaya', -900], ['Majapahit', 'Majapahit', -1380], ['Tokugawa Shogunate', 'Tokugawa Japonyası', -1700],
  ['Joseon', 'Joseon Koresi', -1600], ['Tibetan Empire', 'Tibet İmparatorluğu', -800], ['Chola Empire', 'Çola İmparatorluğu', -1050],
  ['Vijayanagara Empire', 'Vicayanagara İmparatorluğu', -1500], ['Empire of Japan', 'Japon İmparatorluğu', -1942], ['Gran Colombia', 'Büyük Kolombiya', -1825],
  ['Confederate States of America', 'Amerika Konfedere Devletleri', -1862], ['Republic of Texas', 'Teksas Cumhuriyeti', -1840], ['Kushan Empire', 'Kuşan İmparatorluğu', -150],
  ['Ghaznavid Empire', 'Gazneliler', -1030], ['Khwarezmid Empire', 'Harezmşahlar', -1215], ['Ilkhanate', 'İlhanlılar', -1300],
  ['Chagatai Khanate', 'Çağatay Hanlığı', -1310], ['Avar Khaganate', 'Avar Kağanlığı', -600], ['First Bulgarian Empire', 'Birinci Bulgar Devleti', -900],
  ['Kingdom of Hungary', 'Macaristan Krallığı', -1480], ['Dutch Republic', 'Hollanda Cumhuriyeti', -1700], ['Kingdom of Prussia', 'Prusya Krallığı', -1800],
  ['Kingdom of Georgia', 'Gürcistan Krallığı', -1200], ['Republic of Turkey', 'Türkiye Cumhuriyeti', -1950], ['Babylonia', 'Babil', 1750],
  ['Zhou Dynasty', 'Zhou Hanedanı (Çin)', 900], ['Shang Dynasty', 'Shang Hanedanı (Çin)', 1300], ['Kingdom of Kongo', 'Kongo Krallığı', -1500],
  ['Ashanti Empire', 'Aşanti İmparatorluğu', -1800], ['Sokoto Caliphate', 'Sokoto Halifeliği', -1840], ['Durrani Empire', 'Dürrani İmparatorluğu', -1765],
  ['Afsharid Iran', 'Afşar Devleti (Nadir Şah)', -1745], ['Aq Qoyunlu', 'Akkoyunlular', -1480], ['Beylik of Karaman', 'Karamanoğulları', -1400],
  ['Kazakh Khanate', 'Kazak Hanlığı', -1600], ['Maratha Empire', 'Maratha İmparatorluğu', -1770], ['Tughlaq Dynasty', 'Delhi Sultanlığı (Tuğluklular)', -1335],
  ['Palmyrene Empire', 'Palmira İmparatorluğu (Zenobia)', -265], ['Mitanni', 'Mitanni Krallığı', 1450], ['Elam', 'Elam', 1200],
  ['Kingdom of Portugal', 'Portekiz Krallığı', -1500], ['Crown of Castile', 'Kastilya Tacı', -1480], ['Kingdom of Scotland', 'İskoçya Krallığı', -1500],
  ['Grand Duchy of Lithuania', 'Litvanya Büyük Dükalığı', -1400], ['Serbian Empire', 'Sırp İmparatorluğu', -1355], ['Second Bulgarian Empire', 'İkinci Bulgar Devleti', -1240],
  ['Kingdom of Armenia', 'Ermeni Krallığı', 70], ['Emirate of Granada', 'Gırnata Emirliği', -1400], ['Ayutthaya Kingdom', 'Ayutthaya Krallığı (Siyam)', -1600],
  ['Pagan Kingdom', 'Pagan Krallığı (Burma)', -1200], ['Ghana Empire', 'Gana İmparatorluğu', -1000], ['Kara-Khanids', 'Karahanlılar', -1000],
  ['Samanid Empire', 'Samaniler', -920], ['Rouran Khaganate', 'Cücen (Juan-juan) Kağanlığı', -450], ['Dzungar Khanate', 'Cungar Hanlığı', -1690],
  ['Qajar Dynasty', 'Kaçar Devleti', -1850], ['Kingdom of Italy', 'İtalya Krallığı', -1930], ['British Raj', 'Britanya Hindistanı', -1920]
];
const DIL = {};
global.window = { __sinirDilim: (i, v) => { DIL[i] = v.k; } };
eval(fs.readFileSync(path.join(kok, 'data/sinir/sinir-dizin.js'), 'utf8'));
const Z = window.SINIR_DIZIN;
const dilim = y => { const d = Z.find(z => y <= z.y[0] && y >= z.y[1]); const i = d.d; if (!DIL[i]) eval(fs.readFileSync(path.join(kok, `data/sinir/sinir-${i}.js`), 'utf8')); return DIL[i]; };
const out = [], hata = [], adlar = new Set();
for (const [n, ad, y] of LISTE) {
  if (adlar.has(ad)) hata.push('tekrar ad: ' + ad); adlar.add(ad);
  const K = dilim(y).filter(k => k.n === n && y <= k.y1 && y >= k.y0).sort((a, b) => b.a - a.a);
  if (!K.length) { hata.push(`${n} @ ${y} yok`); continue; }
  const k = K[0];
  out.push([n, ad, y, +k.e[0].toFixed(1), +k.e[1].toFixed(1), k.w || '']);
}
if (hata.length) { console.log(hata.join('\n')); process.exit(1); }
fs.writeFileSync(path.join(kok, 'data/oyun/sinir-bil.js'),
  '// 🗺️ Sınırdan Bil: bulmaca devletleri. araclar/sinir-bil-uret.js ile üretildi (Cliopatria, CC BY 4.0).\n// [Cliopatria adı, Türkçe ad, yıl (MÖ +, MS -), merkez enlem, merkez boylam, Vikipedi başlığı]\nwindow.SINIR_BIL=' + JSON.stringify(out).replace(/\],\[/g, '],\n[') + ';\n');
console.log(out.length, 'devlet yazıldı');
