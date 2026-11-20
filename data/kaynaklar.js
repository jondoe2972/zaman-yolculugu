// Yeraltı kaynakları: maden, taş ocağı, tuz, kömür, petrol ve doğalgaz.
// from/to: işletildiği yıllar (MÖ pozitif, MS negatif; -2026 = bugün de sürüyor). Yıllar yaklaşıktır.
// Küre, seçili yıl bu aralıktaysa simgeyi gösterir.
'use strict';
window.KAYNAK_TUR = {
  altin:   { ad: 'Altın',            sem: 'Au', renk: '#e8b923', yazi: '#3a2a00' },
  gumus:   { ad: 'Gümüş',            sem: 'Ag', renk: '#cfd5dd', yazi: '#2a3038' },
  bakir:   { ad: 'Bakır',            sem: 'Cu', renk: '#c8743a', yazi: '#fff' },
  kalay:   { ad: 'Kalay',            sem: 'Sn', renk: '#8fa0ab', yazi: '#fff' },
  demir:   { ad: 'Demir',            sem: 'Fe', renk: '#8a4f3a', yazi: '#fff' },
  krom:    { ad: 'Krom',             sem: 'Cr', renk: '#5f8a77', yazi: '#fff' },
  bor:     { ad: 'Bor',              sem: 'B',  renk: '#9d7cc9', yazi: '#fff' },
  komur:   { ad: 'Kömür',            sem: 'C',  renk: '#2e2e2e', yazi: '#fff' },
  petrol:  { ad: 'Petrol',           sem: '🛢', renk: '#151515', yazi: '#fff' },
  gaz:     { ad: 'Doğalgaz',         sem: 'CH₄', renk: '#3c8fcf', yazi: '#fff' },
  tuz:     { ad: 'Tuz',              sem: 'NaCl', renk: '#f4f1ea', yazi: '#4a3a2a' },
  tas:     { ad: 'Taş ocağı',        sem: '▦',  renk: '#d8c8a8', yazi: '#4a3a2a' },
  mucevher:{ ad: 'Değerli taş',      sem: '◆',  renk: '#2fb3ad', yazi: '#fff' }
};
window.KAYNAKLAR = [
  // ---- Mısır ve çevresi ----
  { id: 'nubya-altin', ad: 'Nubya altın madenleri (Vadi Allaki)', tur: 'altin', ll: [22.4, 33.3], from: 3000, to: -1000, not: 'Firavunların zenginliğinin kaynağı. "Nubya" adının eski Mısırcadaki "nub" (altın) sözcüğünden geldiği düşünülür. Mısır, eski dünyanın en büyük altın üreticisiydi.' },
  { id: 'hammamat', ad: 'Vadi Hammamat', tur: 'altin', ll: [26.0, 33.6], from: 3000, to: -400, not: 'Hem altın hem de heykellerde kullanılan koyu yeşil "bekhen" taşı çıkarılırdı. Dünyanın bilinen en eski jeoloji haritalarından biri (Torino Papirüsü, MÖ 1150) bu bölgeyi gösterir.' },
  { id: 'sina-turkuaz', ad: 'Sina turkuaz ve bakır madenleri (Serabit el-Hadim)', tur: 'mucevher', ll: [29.03, 33.46], from: 2700, to: 1100, not: 'Firavunların seferleri turkuaz ve bakır için buraya gelirdi. Madencilerin kayalara kazıdığı yazılar, alfabenin atası sayılan Proto-Sina yazısının bilinen en eski örnekleridir.' },
  { id: 'timna', ad: 'Timna bakır madenleri', tur: 'bakir', ll: [29.78, 34.98], from: 1400, to: 900, not: 'Yeni Krallık döneminde Mısır denetiminde işletildi. Ocakların yanında Mısırlıların tanrıça Hathor\'a adadığı küçük bir tapınak bulundu.' },
  { id: 'asvan-granit', ad: 'Asvan granit ocakları', tur: 'tas', ll: [24.08, 32.89], from: 2600, to: -400, not: 'Dikilitaşlar, lahitler ve Büyük Piramit\'in Kral Odası\'ndaki dev granit bloklar buradan Nil\'le taşındı. Ocakta yarım kalmış, 40 metrelik çatlak bir dikilitaş hâlâ yatıyor.' },
  { id: 'tura', ad: 'Tura kireçtaşı ocakları', tur: 'tas', ll: [29.93, 31.28], from: 2600, to: -1900, not: 'Piramitlerin parlak beyaz dış kaplama taşları buradan geldi. Bu kaplamanın çoğu Orta Çağ\'da Kahire\'nin binalarında yeniden kullanıldı.' },
  { id: 'natrun', ad: 'Vadi Natrun natron gölleri', tur: 'tuz', ll: [30.4, 30.3], from: 3000, to: -1900, not: 'Natron, mumyalamada bedeni kurutmak için kullanılan doğal tuzdur. Cam ve sabun yapımında da kullanıldı.' },
  { id: 'misir-petrol', ad: 'Süveyş Körfezi petrolü (Ras Garib)', tur: 'petrol', ll: [28.35, 33.08], from: -1908, to: -2026, not: 'Mısır\'da ticari petrol 1908\'de Cemse\'de, 1938\'de Ras Garib\'de bulundu. Bugün ülkenin en eski petrol bölgesidir.' },
  { id: 'zohr', ad: 'Zohr doğalgaz sahası', tur: 'gaz', ll: [32.7, 32.2], from: -2015, to: -2026, not: '2015\'te bulunan, Akdeniz\'in en büyük doğalgaz sahalarından biri. Mısır\'ı yeniden gaz ihracatçısı yaptı.' },
  { id: 'olu-deniz', ad: 'Ölü Deniz: bitüm ve tuz', tur: 'tuz', ll: [31.5, 35.5], from: 4000, to: -2026, not: 'Yüzeye çıkan doğal asfalt (bitüm) gemi kalafatında ve bazı Mısır mumyalarında kullanıldı. Bugün potas ve tuz çıkarılıyor.' },

  // ---- Anadolu ----
  { id: 'gollu-dag', ad: 'Göllüdağ obsidyeni (Kapadokya)', tur: 'mucevher', ll: [38.25, 34.55], from: 10000, to: 3000, not: 'Volkanik cam. Taş Devri\'nin "çeliği": bıçak, ok ucu ve ayna yapıldı. Kapadokya obsidyeni Kıbrıs\'a ve Levant\'a kadar ticareti yapılan ilk mallardan biri.' },
  { id: 'ergani', ad: 'Ergani bakır madeni', tur: 'bakir', ll: [38.27, 39.75], from: 8000, to: -2026, not: 'Yakındaki Çayönü\'nde insanlar 10.000 yıl önce doğal bakırı dövmeye başladı: dünyada metal işlemenin en eski izlerinden. Maden bugün de işletiliyor.' },
  { id: 'kestel', ad: 'Kestel kalay madeni (Niğde)', tur: 'kalay', ll: [37.92, 34.9], from: 3000, to: 1800, not: 'Tunç (bronz) bakır ile kalaydan yapılır; kalay ise çok nadirdir. Kestel, Yakın Doğu\'da Tunç Çağı\'na ait bilinen birkaç kalay madeninden biri.' },
  { id: 'bolkar', ad: 'Bolkardağ gümüş ve kurşun madenleri', tur: 'gumus', ll: [37.45, 34.6], from: 3000, to: 1000, not: 'Asurlu tüccarlar Kaniş\'te (Kültepe) gümüşle ticaret yapardı. Hitit hazinesinin gümüşü büyük ölçüde Toroslar\'dan geldi.' },
  { id: 'paktolos', ad: 'Paktolos (Sart Çayı) altını', tur: 'altin', ll: [38.48, 28.04], from: 700, to: 300, not: 'Çayın kumundan elektron (altın-gümüş karışımı) toplanırdı. Lidyalılar bununla dünyanın ilk madeni paralarını bastı. Kral Midas ve Karun (Kroisos) efsaneleri buraya bağlanır.' },
  { id: 'prokonnesos', ad: 'Marmara Adası mermeri (Prokonnesos)', tur: 'tas', ll: [40.62, 27.6], from: 600, to: -2026, not: 'Ayasofya\'dan Roma saraylarına kadar Akdeniz\'in her yerinde kullanılan beyaz-gri damarlı mermer. Marmara Denizi adını bu mermerden (Yunanca marmaros) alır.' },
  { id: 'cankiri-tuz', ad: 'Çankırı kaya tuzu', tur: 'tuz', ll: [40.6, 33.6], from: 1800, to: -2026, not: 'Hitit döneminden beri işletildiği düşünülen tuz yatağı. Mağara biçimindeki galeriler bugün ziyaret edilebiliyor.' },
  { id: 'tuz-golu', ad: 'Tuz Gölü', tur: 'tuz', ll: [38.8, 33.4], from: 3000, to: -2026, not: 'Türkiye\'nin ikinci büyük gölü; yazın büyük bölümü kurur ve tuz tabakası kalır. Ülkede kullanılan tuzun çoğu buradan çıkar.' },
  { id: 'gumushane', ad: 'Gümüşhane gümüş madenleri', tur: 'gumus', ll: [40.46, 39.48], from: -1100, to: -1900, not: 'Şehir adını gümüşten alır; Bizans döneminde adı Argyropolis (Gümüş Şehir) idi. Osmanlı darphanelerine gümüş buradan gitti.' },
  { id: 'zonguldak', ad: 'Zonguldak taşkömürü', tur: 'komur', ll: [41.45, 31.79], from: -1848, to: -2026, not: '1829\'da Uzun Mehmet tarafından bulunduğu anlatılır. Osmanlı donanmasının ve Türkiye\'nin ilk sanayisinin yakıtı. Galeriler denizin altına kadar uzanır.' },
  { id: 'divrigi', ad: 'Divriği demir madeni', tur: 'demir', ll: [39.37, 38.11], from: -1938, to: -2026, not: 'Karabük Demir Çelik Fabrikası\'nın cevheri buradan gitti. Türkiye\'nin en büyük demir yataklarından biri.' },
  { id: 'guleman', ad: 'Guleman krom madeni', tur: 'krom', ll: [38.38, 39.5], from: -1936, to: -2026, not: 'Krom paslanmaz çelik için gereklidir. 2. Dünya Savaşı\'nda Türk kromu hem Almanya\'nın hem Müttefiklerin almak istediği stratejik bir madendi.' },
  { id: 'raman', ad: 'Raman ve Batman petrolü', tur: 'petrol', ll: [37.8, 41.1], from: -1940, to: -2026, not: 'Türkiye\'de ticari petrol ilk kez 1940\'ta Raman Dağı\'nda bulundu. Batman rafinerisi 1955\'te açıldı.' },
  { id: 'bor', ad: 'Kırka, Emet ve Bigadiç bor yatakları', tur: 'bor', ll: [39.29, 30.52], from: -1865, to: -2026, not: 'Dünyadaki bilinen bor rezervlerinin yaklaşık %70\'i Türkiye\'dedir. Balıkesir\'de 1865\'te işletilmeye başlandı. Bor cam, seramik, temizlik ürünleri ve roket yakıtında kullanılır.' },
  { id: 'sakarya-gaz', ad: 'Sakarya doğalgaz sahası', tur: 'gaz', ll: [42.2, 31.3], from: -2020, to: -2026, not: '2020\'de Karadeniz\'in derinliklerinde bulundu, 2023\'te Filyos\'tan karaya ilk gaz verildi.' },
  { id: 'kibris-bakir', ad: 'Kıbrıs bakır madenleri (Trodos)', tur: 'bakir', ll: [35.0, 33.0], from: 2500, to: -400, not: 'Latincede bakır "cuprum" sözcüğü, "Kıbrıs metali" (aes Cyprium) deyiminden gelir. Mısır\'a ve Hititlere bakır külçeleri buradan gitti.' },

  // ---- Avrupa ----
  { id: 'laurion', ad: 'Laurion gümüş madenleri', tur: 'gumus', ll: [37.72, 24.05], from: 600, to: 100, not: 'MÖ 483\'te bulunan zengin damar sayesinde Atina 200 savaş gemisi yaptı ve Salamis\'te Persleri yendi. Madenlerde binlerce köle çalıştırıldı.' },
  { id: 'pangaion', ad: 'Pangaion Dağı altını', tur: 'altin', ll: [40.9, 24.0], from: 600, to: 300, not: 'Makedonya Kralı II. Filip bu madenleri ele geçirdi. Gelirleri, oğlu Büyük İskender\'in ordusunu besledi.' },
  { id: 'rio-tinto', ad: 'Rio Tinto bakır madenleri', tur: 'bakir', ll: [37.7, -6.6], from: 3000, to: -2026, not: '5000 yıldır işletilen maden; nehir, çözünmüş metallerden dolayı kırmızı akar. Fenikeliler ve Romalılar burada çalıştı. Dünyanın en büyük madencilik şirketlerinden biri adını buradan alır.' },
  { id: 'las-medulas', ad: 'Las Médulas altın madeni', tur: 'altin', ll: [42.47, -6.77], from: 25, to: -200, not: 'Romalılar dağları kanallarla getirdikleri suyla çökertip altını yıkadı (ruina montium). Geriye kızıl, sivri tepelerden oluşan bir manzara kaldı.' },
  { id: 'cornwall', ad: 'Cornwall kalay madenleri', tur: 'kalay', ll: [50.2, -5.3], from: 2000, to: -1998, not: 'Tunç Çağı\'ndan beri Akdeniz\'e kalay sağlayan bölge. Sanayi Devrimi\'nde dünyanın kalay merkeziydi; son maden 1998\'de kapandı.' },
  { id: 'hallstatt', ad: 'Hallstatt tuz madeni', tur: 'tuz', ll: [47.56, 13.65], from: 1500, to: -2026, not: 'Dünyanın bilinen en eski tuz madenlerinden biri. Tuz ticareti o kadar zengin bir kültür doğurdu ki Erken Demir Çağı Avrupası "Hallstatt kültürü" olarak anılır.' },
  { id: 'carrara', ad: 'Carrara mermeri', tur: 'tas', ll: [44.08, 10.1], from: 50, to: -2026, not: 'Roma\'daki Trajan Sütunu\'ndan Michelangelo\'nun Davut heykeline kadar. Bembeyaz mermeri hâlâ dünyanın en ünlüsüdür.' },
  { id: 'freiberg', ad: 'Freiberg gümüş madenleri (Saksonya)', tur: 'gumus', ll: [50.9, 13.34], from: -1168, to: -1913, not: 'Saksonya\'yı zenginleştiren gümüş. 1765\'te kurulan Freiberg Maden Akademisi dünyanın en eski maden okuludur.' },
  { id: 'kutna-hora', ad: 'Kutná Hora gümüş madenleri', tur: 'gumus', ll: [49.95, 15.27], from: -1290, to: -1726, not: 'Orta Çağ\'da Avrupa gümüşünün önemli bir kısmı buradan çıktı. Bohemya kralları "Prag groşu"nu burada bastı.' },
  { id: 'wieliczka', ad: 'Wieliczka tuz madeni', tur: 'tuz', ll: [49.98, 20.06], from: -1250, to: -1996, not: 'Madenciler 300 metre derinlikte tuzdan şapeller, heykeller ve avizeler oydu. UNESCO\'nun ilk Dünya Mirası listesinde yer aldı.' },
  { id: 'falun', ad: 'Falun bakır madeni', tur: 'bakir', ll: [60.6, 15.63], from: -1000, to: -1992, not: '17. yüzyılda dünya bakırının üçte ikisini veren maden İsveç\'i büyük güç yaptı. İsveç evlerinin meşhur kırmızı boyası bu madenin artığından yapılır.' },
  { id: 'kiruna', ad: 'Kiruna demir madeni', tur: 'demir', ll: [67.85, 20.2], from: -1898, to: -2026, not: 'Dünyanın en büyük yeraltı demir madeni. Maden genişledikçe şehir çöküyor; bu yüzden bütün kasaba birkaç kilometre öteye taşınıyor.' },
  { id: 'ruhr', ad: 'Ruhr kömür havzası', tur: 'komur', ll: [51.5, 7.2], from: -1800, to: -2018, not: 'Almanya\'nın sanayi kalbi. İki dünya savaşının da silah üretimi buraya dayandı. Son taşkömürü ocağı 2018\'de kapandı.' },
  { id: 'galler', ad: 'Güney Galler kömür havzası', tur: 'komur', ll: [51.65, -3.45], from: -1850, to: -1990, not: '1913\'te dünyanın en büyük kömür ihracat limanı Cardiff\'ti. Buhar gemilerinin yakıtı bu kömürdü.' },
  { id: 'silezya', ad: 'Silezya kömür havzası', tur: 'komur', ll: [50.25, 19.0], from: -1780, to: -2026, not: 'Prusya, Avusturya ve Polonya arasında defalarca el değiştiren zengin havza. Bugün Polonya\'nın elektriğinin büyük kısmı hâlâ kömürden.' },
  { id: 'lorraine', ad: 'Lorraine demir yatakları', tur: 'demir', ll: [49.3, 6.0], from: -1870, to: -1997, not: 'Fransa ile Almanya\'nın 1871\'den 1945\'e kadar paylaşamadığı topraklar; kömür ve demir bu çekişmenin önemli nedenlerinden biriydi.' },
  { id: 'kuzey-denizi', ad: 'Kuzey Denizi petrolü', tur: 'petrol', ll: [58.0, 2.0], from: -1969, to: -2026, not: '1969\'da Ekofisk sahası bulundu. Norveç bu gelirle dünyanın en büyük devlet varlık fonunu kurdu.' },
  { id: 'groningen', ad: 'Groningen doğalgaz sahası', tur: 'gaz', ll: [53.25, 6.75], from: -1959, to: -2024, not: 'Avrupa\'nın en büyük gaz sahasıydı. Çıkarım bölgede depremlere yol açınca 2024\'te kalıcı olarak kapatıldı.' },

  // ---- Orta Doğu ve Asya ----
  { id: 'baku', ad: 'Bakü petrolü', tur: 'petrol', ll: [40.4, 49.9], from: -1846, to: -2026, not: 'Yerden kendiliğinden çıkan petrol ve gaz yüzyıllardır biliniyordu ("ateşler ülkesi"). 1846\'da ilk sanayi petrol kuyularından biri burada açıldı; 1900\'de dünya petrolünün yarısı Bakü\'dendi.' },
  { id: 'kerkuk', ad: 'Kerkük petrolü (Baba Gurgur)', tur: 'petrol', ll: [35.53, 44.35], from: -1927, to: -2026, not: 'Yerden sızan gazın yaktığı "ebedi ateş" binlerce yıldır yanıyor. 1927\'de büyük bir fışkırmayla petrol bulundu.' },
  { id: 'mescid-suleyman', ad: 'Mescid-i Süleyman petrolü', tur: 'petrol', ll: [31.93, 49.3], from: -1908, to: -2026, not: 'Orta Doğu\'da bulunan ilk büyük petrol sahası (1908). Bugünkü BP şirketinin kökeni buradadır.' },
  { id: 'dammam', ad: 'Dammam petrolü', tur: 'petrol', ll: [26.3, 50.1], from: -1938, to: -2026, not: 'Suudi Arabistan\'da 1938\'de ilk ticari petrol bu kuyudan çıktı ve çöl krallığını dünyanın en zengin ülkelerinden biri yaptı.' },
  { id: 'sar-i-sang', ad: 'Sar-i Sang lapis lazuli madeni', tur: 'mucevher', ll: [36.2, 70.8], from: 6000, to: -2026, not: 'Tutankamon\'un maskesindeki lacivert taş, binlerce kilometre öteden, Afganistan\'daki bu dağ madeninden geldi. 6000 yıldır işletiliyor.' }
];
