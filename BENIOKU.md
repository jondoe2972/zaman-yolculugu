# Zaman Yolculuğu

Alttaki zaman çizelgesini kaydırdıkça seçilen ülkenin o yıldaki hâli canlı bir sahnede görünür. Yanındaki panelde de o yılın gündemi, firavunu, savaşları, ekonomisi, nüfusu ve dünyadaki durum yazar.

**Antik Mısır** (üstteki seçiciden değiştirilir). Açılışta **Tüm Antik Mısır** (MÖ 3150-30) seçili: tek zaman çizgisinde bütün çağlar; sahne yıla göre ilgili çağa geçer.
| Çağ | Aralık | Öne çıkanlar |
|---|---|---|
| Erken Hanedanlar | MÖ 3150-2667 | Birleşme, Narmer, Memfis'in kuruluşu, Abidos kral mezarları, Şunet el-Zebib |
| Eski Krallık | MÖ 2660-2460 | Basamaklı Piramit, Snefru'nun piramitleri, Büyük Piramit, Sfenks, güneş tapınakları |
| Orta Krallık | MÖ 2100-1550 | Yeniden birleşme, Lişt-Lahun-Hawara piramitleri, Labirent, Hiksoslar, kurtuluş savaşı |
| Yeni Krallık | MÖ 1550-1069 | Karnak, Luksor, Hatşepsut, Krallar Vadisi, Amarna, Kadeş, Ebu Simbel, Deniz Kavimleri |
| Geç Dönem ve Ptolemaioslar | MÖ 1069-30 | Kuşlu firavunlar, Sais, Persler, İskender, İskenderiye, Pharos, Edfu, Kleopatra |

Adres sonuna `#misir-yeni-krallik` gibi çağın adı eklenince doğrudan o çağ açılır.

## Nasıl açılır
Dosyayı çift tıklayınca tarayıcı bazı parçaları yüklemeyebilir. Küçük bir yerel sunucuyla aç:

```bash
python -m http.server 8765   (zaman-yolculugu klasörünün içinde)
```

Sonra tarayıcıda `http://localhost:8765` adresini aç. İnternete yüklendiğinde (Cloudflare Pages, Netlify gibi) bu adıma gerek kalmaz.

## Kullanım
- **Zaman çizelgesi:** sürükle ya da tıkla. Sarı üçgenler Mısır'daki olaylar, mavi noktalar dünyadaki olaylar; üzerine gelince ya da tıklayınca açıklaması çıkar.
- **▶** zamanı akıtır (1-10 yıl/sn). **‹ ›** birer yıl, klavyede ← → (Shift ile 10 yıl), boşluk tuşu oynat/durdur.
- **Sahneyi sürükle:** Nil boyunca gezersin (Meydum, Dahşur, Sakkara, Abusir, Gize, Ebu Ruvaş). "Şantiyeye dön" kamerayı o yılın inşaatına geri götürür.
- **Yapı kartları:** ⓘ işaretli yapılara (piramitler, Sfenks, güneş tapınağı, Memfis, Tura taş ocağı, Gize limanı, mastabalar) ya da paneldeki şantiye adlarına tıkla. Sekmeler: Genel (dönem, firavun, neden yapıldı, tarihsel önemi), Teknik özellikler, Nasıl yapıldı, Bugün.
- **Mısır hakkında:** üstteki düğme ülke hakkında sekmeli genel bilgi açar: genel bakış, din, yönetim ve toplum, ekonomi, gündelik hayat, yazı ve bilim, coğrafya.
- **Fotoğraflar:** yapı kartlarındaki "📷 Fotoğraflar" sekmesi, İngilizce Vikipedi sayfasındaki gerçek fotoğrafları (Wikimedia Commons) fotoğrafçı ve lisans bilgisiyle gösterir. İnternet bağlantısı gerekir.
- **Krallar Vadisi:** kartındaki "Önemli mezarlar" sekmesinde KV62 (Tutankamon), KV17, KV5, KV20, KV34, KV35, KV46, KV55, KV9, KV63, TT320 ve 2025'te bulunan II. Thutmose mezarı; her birinde kim, ne zaman buldu, içinden ne çıktı. Büyük Piramit ve Amarna kartlarında "Önemli keşifler".
- **Nil:** sahnede nehre tıklayınca Nil kartı açılır (önemi, inançlar, bugün).
- **Simgeler:** üstteki ⭐ düğmesi: Büyük Piramit, Sfenks, Nil, Tutankamon, II. Ramses, Kleopatra, Nefertiti, Rosetta Taşı, mumyalar… ve "Bugünkü Mısır" (turist sayısı, müzeler).
- **Güneş ve ay:** sahnede güneşe tıklayınca Ra (Akhenaton döneminde Aton), aya tıklayınca Khonsu ve Thot kartı açılır; "Bütün tanrılar" sekmesinde 18 tanrı kodla çizilmiş figürleriyle.
- **Yakınlaş, içine gir:** bazı yapıların kartında "🔍 Yakınlaş" düğmesi var (Büyük Piramit, Krallar Vadisi, Unas, mastabalar, Hatşepsut, Ebu Simbel, Karnak, Luksor, Edfu…). Kamera yapıya dalar ve duvar resimleri açılır; numaralara tıklayınca resmin ve yazıtların anlamı yazar. Çizimler gerçek eserlerden esinlenen basitleştirilmiş canlandırmalardır.
- **Mumyalar:** zaman çizgisi bir firavunun ölüm yılına gelince (Tutankamon, II. Ramses, I. Seti, Hatşepsut…) panelde düğme çıkar: lahdin açıldığı canlandırma, mumya ve tabut bilgisi, mumyalama adımları, fotoğraflar.
- **Bu dönemde yaşasaydım:** paneldeki 🎭 düğmesi. 7 rol (çiftçi, kâtip, inşaat işçisi, ev hanımı, rahip, asker, çocuk); şafaktan akşama çizimli adımlar, seçili yılın firavunu ve şantiyesiyle.
- **Bilim:** "Bu çağda Mısır" penceresinde 🔬 Bilim sekmesi (matematik, geometri, astronomi, tıp, kimya) ve o çağın öne çıkanları.
- **🌍 Dünya:** Google Earth benzeri küre (gerçek kıyılar ve nehirler: Natural Earth). Sürükle döndür, tekerlek/iki parmakla yaklaş. Yaklaştıkça Mısır'ın ayrıntıları belirir: seçili yılın sınırları (siyasi harita gibi), başkent yıldızı, şehirler, Aşağı/Yukarı Mısır, Nil, çağlayanlar. Yapılar yalnızca o yılda varsa görünür: inşaatta (aşağıdan dolan simge, vinç, turuncu halka), tamamlanmış ya da harabe. Her yapının kendi simgesi var (piramit, tapınak, dikilitaş, taçlı kral mezarları…).
- **🧊 3D:** yapı kartlarında "3D'de gör". Yapı ve 4 km çevresindeki yapılar gerçek ölçü ve konumda, seçili yıldaki hâliyle (inşaat, rampa, işçiler). Sürükle, yaklaş; yıl düğmeleriyle inşaatı izle. three.js r159 (MIT) `vendor/three/`.
- **Mevsimler:** Taşkın (Nil taşar, tarlalar çamurlu suyla kaplanır), Ekim (saban ve tohum), Hasat (orak ve demetler).

## Sahnede neler var
- Piramitler yıl yıl yükselir: taş sıraları, rampa, rampada blok taşıyan işçiler. Kaplama yukarıdan aşağı beyazlar. Yarım kalan piramitler yarım kalır.
- Nil'de güneye giden gemiler yelkenli (rüzgâr kuzeyden eser), kuzeye gidenler kürekli (akıntıyla). İnşaat sürerken taş yüklü gemiler ve kızakla blok çeken ekipler görünür.
- Tura taş ocağı, Memfis (başkent), Keops döneminde Gize limanı, Sfenks, soyluların mastabaları, Userkaf'ın güneş tapınağı.
- **Çağa göre değişenler:** savaş arabası ve atlar MÖ ~1600'den, şaduf (su kaldıracı) MÖ ~1400'den, deve kervanları MÖ ~500'den sonra görünür. Eski yapılar (Gize piramitleri gibi) sonraki çağlarda bitmiş hâliyle durur.
- **Yapı türleri:** piramit, basamaklı piramit, mastaba, teraslı tapınak, pilonlu tapınak, dikilitaş, dev heykel, kaya tapınağı, deniz feneri, şehir, kaya mezarları vadisi.

## Dosyalar
| Dosya | Ne |
|---|---|
| `index.html` | Sayfa |
| `css/stil.css` | Görünüm (masaüstü + telefon) |
| `js/sahne.js` | Sahne motoru: anıtlar, insanlar, hayvanlar, gemiler, mevsimler |
| `js/uygulama.js` | Zaman çizelgesi, panel, oynatma, kamera |
| `data/misir-erken.js` | Erken Hanedanlar çağı |
| `data/misir-genel.js` | Nil kartı, simgeler, mezarlar ve keşifler, Vikipedi sayfa adları, harita konumları ve şehirler, MÖ 2460-2100 arası |
| `js/harita.js` | Harita görünümü |
| `js/dunya.js` | Dünya küresi (kaba kıta çizgileri elle girildi) |
| `js/cizim.js` | Tanrı figürleri, hiyeroglifler, duvar resimleri, mumya canlandırması, günlük hayat sahneleri |
| `data/misir-kultur.js` | Tanrılar, bilim, firavun ölümleri ve mumyalar, roller, duvar resmi açıklamaları |
| `data/misir-bilgi.js` | Yapı kartlarının ve "Mısır hakkında" penceresinin metinleri |
| `data/misir-orta-krallik.js`, `misir-yeni-krallik.js`, `misir-gec-donem.js` | Diğer çağlar: veriler, yapı kartları ve "Mısır hakkında" sekmeleri tek dosyada |
| `data/misir-eski-krallik.js` | Bütün bilgiler: firavunlar, dönem metinleri, olaylar, dünya, anıtların ölçüleri ve yılları |
| `KAYNAKLAR.md` | Bilgilerin kaynakları ve hangi kısımların yorum olduğu |

## Yeni dönem ya da ülke eklemek
Her yer için `data/` altına aynı biçimde yeni bir veri dosyası yazılır: firavunlar/yöneticiler, dönem metinleri, olaylar ve sahne nesneleri. Sahne motoru ortak kalır. Sonraki adımlar:
- Eksik aralıklar: Erken Hanedanlar (MÖ ~3100-2686) ve Eski Krallık'ın son 280 yılı (MÖ 2460-2181).
- Başka ülkeler için yer seçme menüsü.
