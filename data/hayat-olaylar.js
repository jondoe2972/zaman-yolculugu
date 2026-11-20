// "Rastgele doğ" olay kartları. Her kartın kendi adı var.
// Alanlar: yas [en az, en çok], w (sıklık, varsayılan 1), donem, meslek, sinif, unvan (gereken unvanlar), ister/yok (bayraklar), yil [başlangıç, bitiş].
// Sonuç: [olasılık, metin, etkiler {sag, ser, mut, bil, iti}, ek {b: bayrak(lar), u: unvan, olum: neden, nadir: true}]
'use strict';
window.HAYAT.olaylar.push(
  // ---------------- çocukluk ----------------
  { id: 'kardes', ad: 'Yeni Bir Kardeş', yas: [6, 10], metin: 'Bir kardeşin daha doğdu. Ev kalabalık, yemek az; ailen senden de yardım bekliyor.', sec: [
    { t: '👶 Kardeşine sen bak', s: [[1, 'Kardeşine bakmayı seçtiğin için küçük yaşta sorumluluk öğrendin; annen seni herkese örnek gösteriyor.', { mut: 5, bil: 3, iti: 3 }]] },
    { t: '🏃 Sokağa kaç, oyna', s: [[0.7, 'Kaçıp oynamayı seçtin: mahallenin çocuklarıyla en güzel günlerini geçirdin.', { mut: 10 }], [0.3, 'Kaçtığın için babandan sağlam bir azar işittin; bir hafta evden çıkamadın.', { mut: -6 }]] }] },
  { id: 'mektep', ad: 'Mahalle Mektebi', yas: [6, 10], donem: ['antik', 'orta', 'yeni'], metin: 'Mahallenin hocası birkaç çocuğa okuma yazma öğretiyor. O çağda insanların çoğu hiç okuma yazma öğrenmezdi.', sec: [
    { t: '📖 Derslere git', s: [[0.75, 'Derslere gitmeyi seçtin ve harfleri söktün: etrafında okuma bilen tek çocuk sensin.', { bil: 20 }], [0.2, 'Derslere başladın ama ailenin işte sana ihtiyacı olunca yarım kaldı.', { bil: 6 }], [0.05, '✨ Hoca zekâna hayran kaldı; seni şehrin en iyi medresesine / okuluna tavsiye etti!', { bil: 30, iti: 10 }, { b: 'hami', nadir: true }]] },
    { t: '🌾 Ailene yardım et', s: [[1, 'Ailene yardım etmeyi seçtin: bütün gün iş, akşam yorgunluk. Ama aile sofrası doydu.', { ser: 5, sag: 3 }]] }] },
  { id: 'okul-modern', ad: 'İlk Okul Günü', yas: [6, 6], donem: ['modern'], metin: 'Okul çağına geldin. Zorunlu ilkokul 19. ve 20. yüzyılda yaygınlaştı.', sec: [
    { t: '📚 Sıkı çalış', s: [[0.9, 'Sıkı çalışmayı seçtin; öğretmenin seni sınıfın önüne oturttu.', { bil: 20, mut: 3 }], [0.1, '✨ Okulun en başarılı öğrencisi seçildin; bir burs kazandın!', { bil: 25, ser: 10 }, { b: 'burs', nadir: true }]] },
    { t: '⚽ Arkadaşlarla takıl', s: [[1, 'Arkadaşlarla vakit geçirmeyi seçtin: karnen orta, ama çok arkadaşın oldu.', { mut: 10, bil: 8 }]] }] },
  { id: 'ates', ad: 'Ateşli Hastalık', yas: [6, 14], metin: 'Ateşin çıktı, günlerdir kalkamıyorsun. Çiçek, kızamık, sıtma: modern tıptan önce çocukların büyük kısmı bunlardan ölürdü.', sec: [
    { t: '🌿 Şifacıya götürün', s: [[0.7, 'Şifacının otları ateşini düşürdü; iyileştin ama uzun süre halsiz kaldın.', { sag: -8 }], [0.3, 'Şifacının ilacı işe yaramadı; aylar sonra toparlanabildin.', { sag: -25 }]] },
    { t: '🙏 Evde dinlen, dua edin', s: [[0.6, 'Evde dinlenmek iyi geldi; ateş birkaç günde düştü.', { sag: -4 }], [0.4, 'Hastalık seni çok zayıflattı.', { sag: -28 }]] }] },
  { id: 'kayip', ad: 'Pazarda Kayboldun', yas: [6, 10], metin: 'Kalabalık pazarda annenin elini bıraktın ve kayboldun. Etrafın yabancılarla dolu.', sec: [
    { t: '😢 Olduğun yerde bekle', s: [[0.85, 'Beklemeyi seçtin; annen seni bir saat sonra ağlarken buldu.', { mut: -3 }], [0.15, 'Beklerken bir kervancı seni fark etti, sana bir parça helva verdi ve aileni buldu.', { mut: 5 }]] },
    { t: '🧭 Yolunu kendin bul', s: [[0.6, 'Kendi yolunu bulmayı seçtin ve eve tek başına döndün; mahallede küçük bir kahraman oldun.', { mut: 8, bil: 3 }], [0.4, 'Yanlış sokağa saptın; gece bekçisi seni eve getirdi. Babanın yüzü kıpkırmızıydı.', { mut: -6 }]] },
    { t: '🙋 Bir yabancıya güven', s: [[0.7, 'Yardım isteyen yabancı seni kibarca evine götürdü.', { mut: 3 }], [0.25, 'Yabancı seni kandırdı, ceplerini boşalttı; neyse ki kaçıp kurtuldun.', { mut: -10, sag: -5 }], [0.05, '✨ Yardım ettiğin yabancı şehrin en zengin tüccarıymış; ailene her bayram hediye göndermeye başladı!', { ser: 20, mut: 10 }, { b: 'hami', nadir: true }]] }] },
  { id: 'kopek', ad: 'Sokak Köpeği', yas: [6, 10], metin: 'Kapınızın önüne zayıf bir köpek yavrusu geldi. Ailen beslemek istemiyor.', sec: [
    { t: '🐶 Gizlice besle', s: [[1, 'Yavruyu gizlice beslemeyi seçtin. Yıllarca yanından ayrılmayan bir dostun oldu.', { mut: 12 }, { b: 'kopek' }]] },
    { t: '🚪 Kovala', s: [[1, 'Kovalamayı seçtin; yavru bir daha gelmedi. İçinde bir burukluk kaldı.', { mut: -4 }]] }] },
  { id: 'dede', ad: 'Dedenin Hikâyeleri', yas: [6, 10], metin: 'Dedenin gençliğinde gördüğü savaşları, kıtlıkları ve uzak şehirleri anlattığı uzun kış geceleri.', sec: [
    { t: '👂 Her gece dinle', s: [[1, 'Dinlemeyi seçtin: geçmişin, ailenin ve bu toprakların hikâyesi hafızana kazındı.', { bil: 10, mut: 6 }]] },
    { t: '😴 Uyuyakal', s: [[1, 'Uyumayı seçtin. Yıllar sonra o hikâyeleri hatırlayamadığına çok üzüldün.', { mut: -3 }]] }] },
  { id: 'cocuk-isci', ad: 'Dokuma Tezgâhında', yas: [10, 14], donem: ['yeni', 'modern'], sinif: ['isci', 'koylu', 'kole'], metin: 'Ailen seni bir dokuma atölyesine / fabrikaya işe verdi. 19. yüzyılda milyonlarca çocuk günde 12 saat çalışırdı.', sec: [
    { t: '🧵 Dişini sıkıp çalış', s: [[0.8, 'Çalışmayı seçtin; eve getirdiğin birkaç kuruş ailenin karnını doyurdu.', { ser: 8, sag: -8 }], [0.2, 'Makinenin dişlisine elini kaptırdın.', { sag: -25, ser: 3 }]] },
    { t: '🏫 Akşam okuluna da git', s: [[1, 'Çalışıp bir de akşam okuluna gitmeyi seçtin. Yorgunluktan ölüyorsun ama okumayı öğrendin.', { bil: 15, sag: -10 }]] }] },

  // ---------------- gençlik ----------------
  { id: 'ilk-ask', ad: 'İlk Aşk', yas: [17, 20], yok: ['evli'], metin: 'Çeşme başında gördüğün biri aklını başından aldı. Ama aileler birbirini pek sevmez.', sec: [
    { t: '💌 Gizlice haber yolla', s: [[0.5, 'Haber yollamayı seçtin; cevap geldi! Gizli buluşmalar başladı.', { mut: 15 }, { b: 'ask' }], [0.5, 'Haberini ailesi yakaladı; mahallede dedikodu oldu.', { mut: -10, iti: -5 }]] },
    { t: '🤐 Kalbine göm', s: [[1, 'Susmayı seçtin. Bazı geceler hâlâ o çeşmeyi düşünüyorsun.', { mut: -5 }]] }] },
  { id: 'kavga', ad: 'Meydan Kavgası', yas: [14, 20], metin: 'Meydanda iki grup genç kavgaya tutuştu. Bir taraftakiler senin arkadaşların.', sec: [
    { t: '👊 Arkadaşlarının yanında dövüş', s: [[0.55, 'Dövüşmeyi seçtin ve kazandınız; mahallede sözü geçen biri oldun.', { iti: 8, sag: -5 }], [0.4, 'Dövüşmeyi seçtin ama kafan yarıldı.', { sag: -20 }], [0.05, '✨ Kavgada bir ağanın / soylunun oğlunu bıçaktan kurtardın. Baba sana minnettar; artık bir hamin var!', { iti: 15, ser: 10 }, { b: 'hami', nadir: true }]] },
    { t: '🕊️ Araya gir, ayır', s: [[0.6, 'Ayırmayı seçtin; iki taraf da sana saygı duydu.', { iti: 10, bil: 3 }], [0.4, 'Ayırmaya çalışırken iki taraftan da yumruk yedin.', { sag: -10, mut: -3 }]] },
    { t: '🏃 Uzak dur', s: [[1, 'Uzak durmayı seçtin. Arkadaşların sana "korkak" dedi ama sağlamsın.', { iti: -5 }]] }] },
  { id: 'cirak', ad: 'Ustanın Sırrı', yas: [17, 20], meslek: ['zanaat'], metin: 'Ustan, kimseye göstermediği bir tekniği öğrenmek isteyip istemediğini soruyor. Karşılığında yıllarca ona bağlı kalacaksın.', sec: [
    { t: '🤝 Söz ver, öğren', s: [[0.9, 'Söz verip öğrenmeyi seçtin: ustanın sırrı artık senin de sırrın.', { bil: 15, iti: 5 }, { b: 'sir' }], [0.1, '✨ Ustan seni evlatlık gibi benimsedi; ölünce atölyesini sana bıraktı!', { ser: 30, bil: 15 }, { b: 'sir', u: 'usta', nadir: true }]] },
    { t: '🚶 Başka ustaya git', s: [[1, 'Başka ustaya gitmeyi seçtin; özgürsün ama sıfırdan başlıyorsun.', { mut: 5, bil: 4 }]] }] },
  { id: 'acemi', ad: 'Acemi Talimi', yas: [17, 20], meslek: ['asker'], metin: 'Talimde çavuş, acemilerin en dayanıklısını bulmak için seni ağır bir yürüyüşe çıkarıyor.', sec: [
    { t: '💪 Sonuna kadar dayan', s: [[0.7, 'Dayanmayı seçtin ve birinci geldin; komutanlar adını öğrendi.', { iti: 10, sag: -5 }], [0.3, 'Dayanmayı seçtin ama yolda bayıldın.', { sag: -12 }]] },
    { t: '🧠 Kurnazlık yap, kestirmeden git', s: [[0.5, 'Kestirmeyi seçtin ve kimse fark etmedi.', { mut: 5 }], [0.5, 'Kestirmeyi seçtin ve yakalandın; bir hafta nöbet cezası.', { iti: -8, sag: -5 }]] }] },
  { id: 'medrese-bilmece', ad: 'Hocanın Bilmecesi', yas: [17, 20], meslek: ['alim'], metin: 'Hocan sorar: "Bir adam ölürken 17 devesini üç oğluna bıraktı: en büyüğe yarısı, ortancaya üçte biri, küçüğe dokuzda biri. Deveyi kesmeden nasıl paylaştırırsın?"', sec: [
    { t: '🐪 Bir deve ödünç alır, 18 deveden 9-6-2 verir, ödünç deveyi geri alırım', s: [[1, 'Doğru! 18\'in yarısı 9, üçte biri 6, dokuzda biri 2: toplam 17. Ödünç deve sahibine döner. Hoca seni en iyi öğrencisi ilan etti.', { bil: 20, iti: 10 }]] },
    { t: '⚖️ 8,5 - 5,7 - 1,9 deve; geri kalanını satarız', s: [[1, 'Yanlış: deve bölünmez. Doğrusu bir deve ödünç alıp 18 deveyi 9-6-2 paylaştırmak, sonra ödünç deveyi geri vermekti.', { bil: 5 }]] },
    { t: '🗡️ Develeri satıp parayı bölüştürürüz', s: [[1, 'Hoca güldü: "Mirasın kendisi istenmiş, değeri değil." Doğrusu: bir deve ödünç alıp 18 deveyi 9-6-2 paylaştırmak.', { bil: 5 }]] }] },
  { id: 'ilk-kervan', ad: 'İlk Kervan', yas: [17, 20], meslek: ['tuccar'], metin: 'Babanın ortağı seni ilk kervan yolculuğuna yanına almak istiyor. Yol aylar sürecek.', sec: [
    { t: '🐪 Git, dünyayı gör', s: [[0.8, 'Gitmeyi seçtin: yeni diller, yeni pazarlar, yeni yüzler. Ticaretin inceliklerini sahada öğrendin.', { bil: 15, ser: 8 }], [0.2, 'Gitmeyi seçtin ama yolda sıtmaya yakalandın.', { bil: 10, sag: -20 }]] },
    { t: '🏪 Dükkânda kal', s: [[1, 'Kalmayı seçtin; hesap kitap ve pazarlığı dükkânda öğrendin.', { bil: 8, ser: 5 }]] }] },
  { id: 'enderun', ad: 'Saray Mektebi', yas: [17, 20], meslek: ['saray'], metin: 'Saray mektebine alındın. Burada dil, hat, savaş sanatı ve devlet usulü öğretiliyor; en iyiler büyük makamlara yükselir.', sec: [
    { t: '📜 Devlet usulüne çalış', s: [[1, 'Devlet usulünü seçtin: kanunlar, hazine, yazışma. İleride kalemde yükselebilirsin.', { bil: 18, iti: 5 }, { b: 'kalem' }]] },
    { t: '🏹 Savaş sanatına çalış', s: [[1, 'Savaş sanatını seçtin: ok, kılıç, at. İleride bir eyaletin ya da ordunun başına geçebilirsin.', { sag: 8, iti: 5 }, { b: 'seyfiye' }]] }] },
  { id: 'veliaht', ad: 'Taht Yolunda Eğitim', yas: [14, 17], sinif: ['saray'], metin: 'Hükümdar ailesinin bir çocuğu olarak hocaların, lalaların ve casusların arasında büyüyorsun. Kardeşlerin aynı zamanda rakiplerin.', sec: [
    { t: '📚 Bilgeliğe çalış', s: [[1, 'Bilgeliği seçtin: tarih, hukuk, diller. Hocaların seni övüyor.', { bil: 20, iti: 5 }, { b: 'bilge', u: 'veliaht' }]] },
    { t: '⚔️ Ordunun gözüne gir', s: [[1, 'Orduyu seçtin: askerlerle birlikte avlanıyor, talim yapıyorsun. Askerler seni seviyor.', { sag: 8, iti: 10 }, { b: 'ordu-sever', u: 'veliaht' }]] },
    { t: '🎭 Saraydaki kulisleri öğren', s: [[1, 'Kulisleri seçtin: kim kime bağlı, kim kimin casusu, hepsini biliyorsun.', { bil: 10, iti: 3 }, { b: 'kulis', u: 'veliaht' }]] }] },
  { id: 'fabrika-ilk', ad: 'Fabrikada İlk Gün', yas: [14, 20], meslek: ['isci'], metin: 'Düdük çaldı; makinelerin gürültüsü kulaklarını sağır ediyor. Ustabaşı yeni gelenlere sert davranıyor.', sec: [
    { t: '⚙️ Makineyi öğren', s: [[1, 'Makineyi öğrenmeyi seçtin; kısa sürede en hızlı işçilerden biri oldun.', { ser: 8, bil: 6 }]] },
    { t: '🗣️ Eski işçilerle dostluk kur', s: [[1, 'Dostluk kurmayı seçtin; zor günlerde arkanda duracak bir çevren var.', { mut: 8, iti: 5 }, { b: 'sendika' }]] }] },
  { id: 'buyuk-sinav', ad: 'Büyük Sınav', yas: [17, 20], meslek: ['okul'], metin: 'Üniversite sınavı yaklaşıyor. Bir arkadaşın soruların sızdırıldığını söylüyor.', sec: [
    { t: '📚 Kendi emeğinle çalış', s: [[0.7, 'Kendi emeğini seçtin ve iyi bir bölüme girdin.', { bil: 20, mut: 10 }], [0.3, 'Kendi emeğini seçtin; puanın biraz düşük kaldı ama alnın açık.', { bil: 12, iti: 5 }]] },
    { t: '🕶️ Soruları al', s: [[0.4, 'Soruları almayı seçtin, kimse anlamadı… ama içindeki ses susmadı.', { bil: 5, mut: -5 }], [0.6, 'Sorular sahteymiş! Hem kandırıldın hem de sınavdan geçemedin.', { mut: -15, bil: 3 }]] }] },

  // ---------------- genel yetişkinlik ----------------
  { id: 'gorucu', ad: 'Görücü Usulü', yas: [20, 28], yok: ['evli'], metin: 'Ailen senin için bir eş buldu. Çoğu çağda evlilikleri aileler ayarlardı; aşk ikinci plandaydı.', sec: [
    { t: '💍 Kabul et', s: [[0.7, 'Kabul etmeyi seçtin; zamanla birbirinizi gerçekten sevdiniz.', { mut: 15, ser: 5 }, { b: 'evli' }], [0.3, 'Kabul ettin ama evlilik soğuk geçti.', { mut: -5 }, { b: 'evli' }]] },
    { t: '❤️ Reddet, kendin seç', s: [[0.5, 'Reddetmeyi seçtin ve sevdiğin kişiyle evlendin! Ama ailen bir süre küs kaldı.', { mut: 20, ser: -10 }, { b: 'evli' }], [0.5, 'Reddettin; ailenle aran açıldı ve uzun süre yalnız kaldın.', { mut: -10 }]] }] },
  { id: 'ask-evlilik', ad: 'Kaçarak Evlenmek', yas: [20, 24], ister: ['ask'], yok: ['evli'], metin: 'Gizlice görüştüğün kişiyle aileler hâlâ evlenmenize izin vermiyor. Sevgilin "kaçalım" diyor.', sec: [
    { t: '🌙 Gece kaçın', s: [[0.6, 'Kaçmayı seçtiniz; başka bir kasabada sıfırdan ama mutlu bir hayat kurdunuz.', { mut: 25, ser: -15 }, { b: 'evli' }], [0.4, 'Kaçtınız ama yakalandınız; iki aile arasında kan davası çıkacaktı, araya büyükler girdi ve sonunda evlendiniz.', { mut: 10, iti: -10 }, { b: 'evli' }]] },
    { t: '🙇 Aileleri ikna etmeye çalış', s: [[0.5, 'İkna etmeyi seçtin; aylar süren ricalardan sonra büyük bir düğün yapıldı!', { mut: 20, iti: 5 }, { b: 'evli' }], [0.5, 'İkna edemedin; sevgilin başkasıyla evlendirildi.', { mut: -20 }]] }] },
  { id: 'cocuk', ad: 'İlk Çocuk', yas: [20, 32], ister: ['evli'], yok: ['cocuk'], metin: 'Bir çocuğun oldu! Çağının gerçeği: doğan çocukların aşağı yukarı yarısı yetişkinliğe ulaşamazdı.', sec: [
    { t: '🧒 Mesleğini öğret', s: [[1, 'Ona mesleğini öğretmeyi seçtin; izinden gidiyor.', { mut: 12 }, { b: 'cocuk' }]] },
    { t: '📖 Okutmak için biriktir', s: [[0.6, 'Okutmayı seçtin; çocuğun okuma yazma öğrendi, aile gurur duyuyor.', { ser: -12, mut: 15 }, { b: 'cocuk' }], [0.4, 'Okutmayı seçtin ama para yetmedi.', { ser: -10, mut: -3 }, { b: 'cocuk' }]] }] },
  { id: 'define', ad: 'Toprağın Altındaki Testi', yas: [20, 65], w: 0.25, metin: 'Bahçede / tarlada kazı yaparken küreğin bir şeye çarptı: ağzı mühürlü, ağır bir toprak testi.', sec: [
    { t: '🏛️ Yetkililere bildir', s: [[0.7, 'Bildirmeyi seçtin; testiden eski sikkeler çıktı. Kanun gereği bir kısmı sana verildi.', { ser: 12, iti: 10 }], [0.3, 'Bildirdin ama memurlar hepsine el koydu, sana teşekkür bile etmediler.', { mut: -8, iti: 5 }]] },
    { t: '🤫 Gizlice sakla', s: [[0.55, 'Saklamayı seçtin; içinden bir avuç gümüş çıktı. Kimseye söylemedin.', { ser: 15 }], [0.15, '✨ Testi ağzına kadar altın doluydu! Bir gecede zengin oldun.', { ser: 55, mut: 20 }, { nadir: true }], [0.3, 'Sakladın ama bir komşu gördü ve seni ihbar etti; hepsini kaybettin ve ceza ödedin.', { ser: -15, iti: -15 }]] },
    { t: '⛏️ Kırmadan bırak, belki uğursuzdur', s: [[1, 'Dokunmamayı seçtin. Yıllar sonra o tarlayı alan komşunun birden zenginleştiğini duydun…', { mut: -8 }]] }] },
  { id: 'eski-dost', ad: 'Kapıdaki Eski Dost', yas: [24, 55], metin: 'Çocukluk arkadaşın kapında. Zor durumda; yüklü bir borç istiyor ve "üç ayda öderim" diyor.', sec: [
    { t: '🤝 Ver', s: [[0.55, 'Vermeyi seçtin; söylediği gibi üç ayda ödedi, dostluğunuz pekişti.', { mut: 10, iti: 5 }], [0.35, 'Verdin ama bir daha haber alamadın.', { ser: -15, mut: -10 }], [0.1, '✨ Verdiğin borçla dükkân açtı, zengin oldu ve sana ortaklık verdi!', { ser: 30, mut: 15 }, { nadir: true }]] },
    { t: '🙅 Kibarca reddet', s: [[1, 'Reddetmeyi seçtin; parana dokunulmadı ama aranız soğudu.', { mut: -6 }]] }] },
  { id: 'hac', ad: 'Uzun Bir Ziyaret Yolculuğu', yas: [30, 60], donem: ['antik', 'orta', 'yeni'], metin: 'Bütün ömrünce görmek istediğin kutsal bir yere / büyük bir şehre gitmek için kervana katılabilirsin. Yolculuk bir yıl sürecek.', sec: [
    { t: '🐪 Yola çık', s: [[0.7, 'Yola çıkmayı seçtin; gördüklerin hayatını değiştirdi, döndüğünde herkes seni dinlemeye geldi.', { mut: 20, bil: 12, iti: 10, ser: -15 }], [0.3, 'Yolda hastalandın; dönebildiğine şükrettin.', { sag: -25, ser: -15, bil: 8 }]] },
    { t: '🏠 Ailene kal', s: [[1, 'Kalmayı seçtin; o parayla evine bir oda daha yaptın.', { ser: 5, mut: -3 }]] }] },
  { id: 'salgin', ad: 'Kara Haber: Salgın', yas: [14, 85], donem: ['antik', 'orta', 'yeni'], metin: 'Şehre bir salgın geldi. Hekimler nedenini bilmiyor; insanlar ya kaçıyor ya dua ediyor.', sec: [
    { t: '🏞️ Kırsala kaç', s: [[0.75, 'Kaçmayı seçtin; salgın geçene kadar köyde kaldın ve kurtuldun.', { ser: -10 }], [0.25, 'Kaçtın ama hastalık seni yolda da buldu.', { sag: -40 }]] },
    { t: '🤲 Kal, hastalara yardım et', s: [[0.5, 'Kalıp yardım etmeyi seçtin; mahalle seni hiç unutmadı.', { mut: 15, sag: -15, iti: 15 }], [0.45, 'Kalıp yardım ederken hastalandın.', { sag: -45, iti: 10 }], [0.05, '✨ Hasta yakınları arasında seni gören bir vezir seni ödüllendirdi; şehirde adın efsane oldu.', { iti: 30, ser: 20 }, { nadir: true }]] },
    { t: '🚪 Kapını kapat, kimseyi alma', s: [[0.8, 'Kapını kapatmayı seçtin; ailen sağ kaldı ama komşular sana küs.', { iti: -8 }], [0.2, 'Kapını kapattın ama hastalık yine de girdi.', { sag: -30 }]] }] },
  { id: 'deprem-ev', ad: 'Yıkılan Ev', yas: [20, 80], w: 0.5, metin: 'Gece yer sarsıldı; evinin bir duvarı çöktü. Komşunun evi tamamen yıkıldı, içeriden ses geliyor.', sec: [
    { t: '🧱 Önce komşunu çıkar', s: [[0.7, 'Önce komşunu çıkarmayı seçtin; iki çocuğu kurtardın.', { iti: 20, mut: 15, sag: -10 }], [0.3, 'Enkaz üstüne çöktü; ayağın kırıldı ama komşunu kurtardın.', { sag: -30, iti: 20 }]] },
    { t: '🏠 Önce kendi eşyanı kurtar', s: [[1, 'Kendi eşyanı kurtarmayı seçtin. Komşuyu başkaları çıkardı; sana bakışları değişti.', { ser: 5, iti: -15 }]] }] },
  { id: 'vasiyet', ad: 'Vasiyet', yas: [60, 85], ister: ['cocuk'], metin: 'Yaşlandın. Malını çocukların arasında nasıl paylaştıracağına karar vermelisin.', sec: [
    { t: '⚖️ Eşit böl', s: [[1, 'Eşit bölmeyi seçtin; çocukların sana dua ediyor.', { mut: 10 }]] },
    { t: '🏆 En çalışkana fazla ver', s: [[0.5, 'En çalışkana fazla verdin; o da işi büyüttü.', { mut: 5 }], [0.5, 'En çalışkana fazla verdin; kardeşler birbirine düştü.', { mut: -15 }]] },
    { t: '🕌 Bir kısmını vakfa bağışla', s: [[1, 'Vakfa bağışlamayı seçtin; adın bir çeşmede / okulda yaşayacak.', { iti: 20, mut: 10, ser: -15 }]] }] },
  { id: 'yaslilik', ad: 'Ak Saçlar', yas: [60, 90], metin: 'Saçların ağardı. Torunların etrafında; artık hikâye anlatma sırası sende.', sec: [
    { t: '👴 Torunlarına geçmişi anlat', s: [[1, 'Anlatmayı seçtin; anlattıkların ailenin hafızası oldu.', { mut: 15 }]] },
    { t: '🧳 Son bir kez yolculuğa çık', s: [[0.6, 'Yola çıkmayı seçtin ve hep görmek istediğin yeri gördün.', { mut: 20, sag: -10 }], [0.4, 'Yol seni çok yordu.', { sag: -25, mut: 5 }]] }] },
  { id: 'goc', ad: 'Göç Kararı', yas: [20, 45], donem: ['yeni', 'modern'], metin: 'Okyanusun ötesinde / büyük şehirde iş ve toprak olduğu söyleniyor. Bu dönemde milyonlarca insan göç etti.', sec: [
    { t: '🚢 Göç et', s: [[0.55, 'Göç etmeyi seçtin; yeni yerde zor başladın ama düzen kurdun.', { ser: 20, mut: 5 }], [0.4, 'Göç ettin ama gurbet zor geldi; memleket özlemi hiç geçmedi.', { mut: -15, ser: 5 }], [0.05, '✨ Göç ettiğin yerde açtığın küçük dükkân bir şirkete dönüştü!', { ser: 50, mut: 15 }, { nadir: true }]] },
    { t: '🏡 Kal', s: [[1, 'Kalmayı seçtin; tanıdıklarının arasında yaşamaya devam ettin.', { mut: 5 }]] }] },
  { id: 'kole-azat', ad: 'Azat Umudu', yas: [17, 40], sinif: ['kole'], metin: 'Efendin, iyi çalışırsan bir gün özgürlüğünü satın alabileceğini söylüyor. Bazı toplumlarda köleler para biriktirip azat edilebilirdi.', sec: [
    { t: '💰 Para biriktir', s: [[0.4, 'Biriktirmeyi seçtin; yıllar sonra özgürlüğünü satın aldın!', { mut: 35, ser: -10 }, { b: 'hur' }], [0.6, 'Biriktirdin ama efendin sözünü tutmadı.', { mut: -20 }]] },
    { t: '🌙 Kaçmayı dene', s: [[0.3, 'Kaçmayı seçtin ve uzak bir şehirde yeni bir hayat kurdun.', { mut: 30, ser: -5 }, { b: 'hur' }], [0.7, 'Kaçtın ama yakalandın ve ağır cezalandırıldın.', { sag: -35, mut: -20 }]] }] },

  // ---------------- çiftçi ----------------
  { id: 'kuraklik', ad: 'Kurak Yıl', yas: [20, 65], meslek: ['ciftci'], metin: 'Yağmurlar gelmedi. Hasat zayıf; vergi memuru yine de payını isteyecek.', sec: [
    { t: '🌱 Tohumluğu sakla, az ye', s: [[0.7, 'Tohumluğu saklamayı seçtin; zor bir kış geçirdin ama gelecek yıl ekebildin.', { sag: -10, ser: -5 }], [0.3, 'Sakladın ama kıtlık köyü vurdu; komşuların göç etti.', { sag: -20, mut: -15 }]] },
    { t: '🏙️ Şehre git, iş ara', s: [[0.5, 'Şehre gitmeyi seçtin; hamallık buldun ve aileni geçindirdin.', { ser: 5, mut: -5 }], [0.5, 'Şehre gittin ama orada hastalık kaptın.', { sag: -25 }]] },
    { t: '🍞 Tohumluğu ye, bugünü kurtar', s: [[1, 'Tohumluğu yemeyi seçtin: bu kış doydunuz ama gelecek yıl ekecek tohumun yok; borca girdin.', { ser: -20, sag: 5 }]] }] },
  { id: 'bereket', ad: 'Bereket Yılı', yas: [20, 65], meslek: ['ciftci'], metin: 'Bereketli bir yıl! Ambarların dolu.', sec: [
    { t: '🛒 Fazlasını pazarda sat', s: [[0.9, 'Satmayı seçtin; biriktirdiğin parayla bir çift öküz aldın.', { ser: 20, mut: 8 }], [0.1, '✨ O yıl başka yerlerde kıtlık vardı; tahılın üç katına satıldı!', { ser: 40, mut: 10 }, { nadir: true }]] },
    { t: '🎉 Köyde düğün ve bayram yap', s: [[1, 'Bayram yapmayı seçtin; köy seni yıllarca bu düğünle andı.', { mut: 18, iti: 12, ser: -5 }]] }] },
  { id: 'vergi', ad: 'Vergi Tahsildarı', yas: [20, 65], meslek: ['ciftci'], metin: 'Vergi tahsildarı kapıda. Bu yıl istediği miktar adaletsiz derecede yüksek.', sec: [
    { t: '💰 Öde', s: [[1, 'Ödemeyi seçtin; kış zor geçecek ama başın derde girmedi.', { ser: -15 }]] },
    { t: '🎁 Biraz rüşvet ver', s: [[0.6, 'Rüşvet vermeyi seçtin; tahsildar defterine daha az yazdı.', { ser: -6 }], [0.4, 'Rüşvet verdin ama başka bir memur gördü; şimdi iki kat ödüyorsun.', { ser: -25, iti: -5 }]] },
    { t: '📜 Kadıya / yargıca şikâyet et', s: [[0.45, 'Şikâyet etmeyi seçtin; kadı haklı buldu, vergin düşürüldü. Köy seni bağrına bastı.', { iti: 15, ser: -5 }], [0.55, 'Şikâyet ettin ama tahsildar güçlüydü; sana kin bağladı.', { ser: -20, mut: -10 }]] }] },
  { id: 'tarla-al', ad: 'Satılık Tarla', yas: [24, 55], meslek: ['ciftci'], yok: ['toprak'], metin: 'Komşu köyde verimli bir tarla satılıyor. Bütün birikimini, belki biraz da borcu gerektiriyor.', sec: [
    { t: '🌾 Borçlan, al', s: [[0.65, 'Almayı seçtin; birkaç yılda borcunu ödedin, artık toprak sahibisin.', { ser: 20, iti: 8 }, { b: 'toprak' }], [0.35, 'Aldın ama iki kötü hasat üst üste geldi; borç seni ezdi.', { ser: -25, mut: -10 }, { b: 'toprak' }]] },
    { t: '🙅 Riske girme', s: [[1, 'Riske girmemeyi seçtin; düzenin bozulmadı.', {}]] }] },
  { id: 'kethuda', ad: 'Köyün Kethüdası', yas: [35, 65], meslek: ['ciftci'], sinif: ['koylu', 'zanaat', 'tuccar', 'asker', 'din', 'soylu'], metin: 'Köyün yaşlıları, köyün işlerini yürütmek ve devlete karşı köyü temsil etmek için seni kethüda seçmek istiyor.', sec: [
    { t: '🧓 Kabul et', s: [[1, 'Kabul etmeyi seçtin; artık köyün sözcüsü sensin.', { iti: 20, mut: 8 }, { u: 'kethuda' }]] },
    { t: '🙇 Reddet', s: [[1, 'Reddetmeyi seçtin; başın rahat ama söz hakkın az.', { mut: 3 }]] }] },

  // ---------------- zanaatkâr ----------------
  { id: 'ustalik', ad: 'Ustalık Sınavı', yas: [20, 36], meslek: ['zanaat'], yok: ['usta-oldu'], metin: 'Lonca, ustalık sınavı için senden bir "ustalık eseri" istiyor. Başarırsan kendi dükkânını açabilirsin.', sec: [
    { t: '🎨 Cesur, yeni bir şey yap', s: [[0.5, 'Cesur bir eser yapmayı seçtin; kurul hayran kaldı. Artık ustasın!', { ser: 20, mut: 15, iti: 15 }, { u: 'usta', b: 'usta-oldu' }], [0.5, 'Cesur bir eser yaptın ama kurul geleneğe aykırı buldu; bir yıl daha kalfasın.', { mut: -10 }]] },
    { t: '📏 Geleneğe sadık kal', s: [[0.8, 'Geleneği seçtin; kusursuz bir işle usta oldun.', { ser: 15, iti: 10 }, { u: 'usta', b: 'usta-oldu' }], [0.2, 'Geleneği seçtin ama bir hata yaptın; bir yıl daha bekleyeceksin.', { mut: -8 }]] }] },
  { id: 'saray-siparis', ad: 'Saraydan Gelen Sipariş', yas: [28, 65], unvan: ['usta'], w: 0.35, metin: 'Saraydan bir görevli kapında: hükümdar için özel bir iş istiyorlar. Süre kısa, beklenti çok yüksek.', sec: [
    { t: '🌙 Gece gündüz çalış', s: [[0.6, 'Gece gündüz çalışmayı seçtin; hükümdar eserini beğendi ve sana bir kese altın gönderdi.', { ser: 30, iti: 20, sag: -10 }], [0.3, 'Yetiştirdin ama saray beğenmedi; sana tek kuruş ödenmedi.', { mut: -15, sag: -10 }], [0.1, '✨ Hükümdar eserine o kadar hayran kaldı ki seni saray ustası (hassa mimarı / kuyumcubaşı) yaptı!', { ser: 50, iti: 35 }, { nadir: true, b: 'saray-ustasi' }]] },
    { t: '👥 Kalfalarına dağıt', s: [[0.7, 'İşi bölüştürmeyi seçtin; zamanında teslim edildi, ödeme makul.', { ser: 15, iti: 5 }], [0.3, 'Kalfalardan biri işi bozdu; utanç senin oldu.', { iti: -15 }]] }] },
  { id: 'yangin', ad: 'Mahalle Yangını', yas: [20, 75], meslek: ['zanaat', 'tuccar', 'isci'], metin: 'Mahallende yangın çıktı! Ahşap evler ve dar sokaklar yüzünden şehir yangınları bütün mahalleleri yutardı.', sec: [
    { t: '🪣 Dükkânını kurtarmaya çalış', s: [[0.5, 'Dükkânını kurtarmayı seçtin; malların bir kısmını çıkardın.', { ser: -10, sag: -10 }], [0.5, 'Dükkânına koştun; duman ciğerlerini yaktı, dükkân da gitti.', { ser: -30, sag: -25 }]] },
    { t: '👨‍👩‍👧 Aileni alıp kaç', s: [[1, 'Aileni kurtarmayı seçtin; herkes sağ, ama her şeye sıfırdan başlıyorsun.', { ser: -35, mut: -10 }]] },
    { t: '🧯 Tulumbacılara katıl', s: [[0.6, 'Tulumbacılara katılmayı seçtin; yangının yayılmasını durdurdunuz. Mahalle sana borçlu.', { iti: 25, sag: -10, ser: -15 }], [0.4, 'Tulumbacılara katıldın ama ağır yanıklar aldın.', { sag: -35, iti: 15 }]] }] },
  { id: 'lonca-basi', ad: 'Loncanın Başı', yas: [40, 65], unvan: ['usta'], metin: 'Lonca seni kethüda (başkan) seçmek istiyor. Fiyatları, kaliteyi ve çırakları denetleyeceksin; ama devletle de pazarlık edeceksin.', sec: [
    { t: '⚖️ Kabul et, adil davran', s: [[0.8, 'Kabul edip adil davranmayı seçtin; çarşıda adın güvenle anılıyor.', { iti: 25, ser: 10 }], [0.2, 'Adil davrandın ama zengin ustalar seni devirmeye çalıştı.', { iti: 10, mut: -10 }]] },
    { t: '💼 Kabul et, kendi kesene çalış', s: [[0.6, 'Kendi kesene çalışmayı seçtin; zenginleştin.', { ser: 30, iti: -10 }], [0.4, 'Kendi kesene çalıştın ve yolsuzluğun ortaya çıktı.', { ser: -20, iti: -30 }]] }] },

  // ---------------- tüccar ----------------
  { id: 'kervan', ad: 'Uzak Pazarlar', yas: [20, 55], meslek: ['tuccar'], metin: 'Uzak bir şehre büyük bir kervan / gemi kalkıyor. Mal götürmek büyük kâr demek; ama yollarda eşkıya, fırtına ve hastalık var.', sec: [
    { t: '🎲 Bütün sermayenle katıl', s: [[0.5, 'Bütün sermayeni koymayı seçtin; mallar iki katına satıldı!', { ser: 40, mut: 15, bil: 10 }], [0.45, 'Bütün sermayeni koydun; kervan soyuldu / gemi battı. Her şeyini kaybettin.', { ser: -45, mut: -20 }], [0.05, '✨ Kervanın getirdiği nadir mallar (ipek, baharat) servet ettirdi; şehrin en zengin tüccarlarından birisin!', { ser: 70, iti: 20 }, { nadir: true, b: 'zengin' }]] },
    { t: '🧮 Küçük bir pay al', s: [[0.7, 'Küçük pay almayı seçtin; makul bir kazanç.', { ser: 12, bil: 5 }], [0.3, 'Payın kayboldu ama batmadın.', { ser: -8 }]] },
    { t: '🏪 Dükkânına bak', s: [[1, 'Dükkânda kalmayı seçtin; güvenli ama sıradan bir yıl.', {}]] }] },
  { id: 'korsan', ad: 'Ufukta Korsan Yelkeni', yas: [20, 60], meslek: ['tuccar', 'denizci'], metin: 'Gemide yolculuk ederken ufukta hızla yaklaşan bir korsan gemisi belirdi. Kaptan herkese silah dağıtıyor.', sec: [
    { t: '⚔️ Savaşalım', s: [[0.45, 'Savaşmayı seçtin; korsanlar geri püskürtüldü! Limanda kahraman gibi karşılandın.', { iti: 20, sag: -10 }], [0.4, 'Savaştın ama yaralandın; gemi zor kurtuldu.', { sag: -30 }], [0.15, 'Savaştınız ve kaybettiniz; esir pazarına götürüldün. Ailen yıllarca fidye biriktirdi.', { ser: -40, mut: -30, sag: -15 }]] },
    { t: '🏳️ Teslim olalım, malları verelim', s: [[0.8, 'Teslim olmayı seçtin; korsanlar malları alıp sizi bıraktı.', { ser: -30 }], [0.2, 'Teslim oldunuz ama korsanlar sizi de esir aldı.', { ser: -40, mut: -25 }]] },
    { t: '⛵ Kaçalım, rüzgârı kullanalım', s: [[0.55, 'Kaçmayı seçtin; rüzgâr sizden yanaydı, kurtuldunuz.', { mut: 10 }], [0.45, 'Kaçmaya çalıştınız ama yakalandınız; korsanlar daha da öfkeliydi.', { ser: -35, sag: -15 }]] }] },
  { id: 'sarraf', ad: 'Sarrafın Teklifi', yas: [32, 60], meslek: ['tuccar'], metin: 'Biriktirdiğin parayla sarraflık (para değişimi ve borç verme) yapabilirsin. Devlete borç vermek büyük kazanç, ama devlet bazen borcunu ödemez.', sec: [
    { t: '🏦 Sarraf ol, devlete borç ver', s: [[0.55, 'Sarraflığı seçtin; devlete verdiğin borçlar faiziyle döndü.', { ser: 35, iti: 15 }, { u: 'sarraf' }], [0.45, 'Sarraf oldun ama devlet iflas etti; alacakların buhar oldu.', { ser: -40, mut: -20 }, { u: 'sarraf' }]] },
    { t: '🛍️ Ticarete devam et', s: [[1, 'Ticarette kalmayı seçtin.', { ser: 5 }]] }] },

  // ---------------- denizci ----------------
  { id: 'firtina', ad: 'Açık Denizde Fırtına', yas: [20, 60], meslek: ['denizci'], metin: 'Fırtınaya yakalandınız. Kaptan, limana dönmekle yola devam etmek arasında kararsız ve sana soruyor.', sec: [
    { t: '⚓ Koya sığınalım', s: [[0.8, 'Sığınmayı önerdin; bir koyda fırtınanın geçmesini beklediniz.', { mut: 5 }], [0.2, 'Koya giderken kayalıklara çarptınız; yüzerek kurtuldun.', { sag: -30, ser: -15 }]] },
    { t: '🌊 Devam edelim', s: [[0.5, 'Devam etmeyi önerdin; herkesten önce limana vardınız, kazanç büyük.', { ser: 25, iti: 5 }], [0.5, 'Devam ettiniz; gemi battı. Bir tahtaya tutunup kurtuldun.', { sag: -35, ser: -25 }]] }] },
  { id: 'kaptanlik', ad: 'Dümen Senin', yas: [28, 50], meslek: ['denizci'], metin: 'Kaptanınız yaşlandı ve gemiyi sana bırakmak istiyor.', sec: [
    { t: '🧭 Kaptanlığı al', s: [[1, 'Kaptanlığı almayı seçtin; artık geminin efendisi sensin.', { iti: 15, ser: 15 }, { u: 'kaptan' }]] },
    { t: '🤲 Yaşlı kaptana kal de', s: [[1, 'Ona sadık kalmayı seçtin; tayfa sana saygı duydu.', { iti: 8 }]] }] },
  { id: 'kesif', ad: 'Haritada Olmayan Kıyı', yas: [28, 60], unvan: ['kaptan'], w: 0.4, metin: 'Rüzgâr sizi bilinen rotanın çok dışına sürükledi. Ufukta haritalarda olmayan bir kıyı görünüyor.', sec: [
    { t: '🗺️ Karaya çık, keşfet', s: [[0.55, 'Keşfetmeyi seçtin; yeni bir liman ve ticaret yolu buldun!', { ser: 30, iti: 25, bil: 20 }], [0.35, 'Karaya çıktınız; yerlilerle çatışma çıktı, birkaç tayfayı kaybettin.', { sag: -20, mut: -15 }], [0.1, '✨ Bulduğun kıyı haritalara senin adınla geçti! Hükümdar seni ödüllendirdi.', { ser: 50, iti: 45, bil: 25 }, { nadir: true }]] },
    { t: '↩️ Geri dön, riske girme', s: [[1, 'Geri dönmeyi seçtin. Yıllar sonra o kıyıyı başka bir kaptan buldu ve ünlü oldu.', { mut: -10 }]] }] },

  // ---------------- asker / subay / komutan ----------------
  { id: 'sefer', ad: 'Sefer Emri', yas: [20, 45], meslek: ['asker'], metin: 'Sefer emri geldi. Ordu aylarca yürüyecek; askerlerin çoğu savaşta değil, yolda hastalıktan ölürdü.', sec: [
    { t: '⚔️ Ön saflarda savaş', s: [[0.45, 'Ön safları seçtin; cesaretin fark edildi, ganimet aldın.', { ser: 20, iti: 15 }, { b: 'cesur' }], [0.35, 'Ön saflarda ağır yaralandın.', { sag: -40 }], [0.15, 'Yenildiniz; esir düştün, yıllar sonra fidyeyle kurtuldun.', { sag: -20, mut: -25, ser: -10 }], [0.05, '', {}, { olum: 'savaşın ön saflarında' }]] },
    { t: '📦 İkmal birliğinde kal', s: [[0.8, 'İkmali seçtin; savaşı uzaktan gördün, sağ döndün.', { mut: -3 }], [0.2, 'Kampta salgın çıktı.', { sag: -30 }]] }] },
  { id: 'subaylik', ad: 'Komutanın Teklifi', yas: [24, 40], meslek: ['asker'], metin: 'Komutanın sana küçük bir birliğin komutasını önerdi. Sorumluluk büyük, ama yükselmenin tek yolu bu.', sec: [
    { t: '🎖️ Kabul et', s: [[1, 'Kabul etmeyi seçtin; artık subaysın.', { ser: 15, iti: 12 }, { u: 'subay' }]] },
    { t: '🏡 Emekliliğe hazırlan, toprak iste', s: [[1, 'Toprak istemeyi seçtin; bir parça toprak ve küçük bir gelir aldın.', { ser: 10, mut: 5 }, { b: 'toprak' }]] }] },
  { id: 'komutanlik', ad: 'Ordunun Başına', yas: [32, 55], unvan: ['subay'], metin: 'Ordunun komutanı savaşta öldü. Askerler senin adını fısıldıyor; hükümdar yeni komutanı seçecek.', sec: [
    { t: '🗣️ Adaylığını açıkça bildir', s: [[0.55, 'Açıkça istemeyi seçtin ve komutan atandın!', { iti: 25, ser: 20 }, { u: 'komutan' }], [0.45, 'Açıkça istedin; rakibin seni "hırslı" diye kötüledi ve atanmadın.', { mut: -12, iti: -5 }]] },
    { t: '🙇 Sessiz kal, işini yap', s: [[0.4, 'Sessiz kalmayı seçtin; hükümdar alçakgönüllülüğünü beğendi, komutan oldun.', { iti: 20, ser: 15 }, { u: 'komutan' }], [0.6, 'Sessiz kaldın; makam başkasına gitti.', { mut: -5 }]] }] },
  { id: 'darbe', ad: 'Askerlerin Fısıltısı', yas: [36, 65], unvan: ['komutan'], w: 0.45, metin: 'Hükümdar zayıf ve sevilmiyor. Ordunun ileri gelenleri gece çadırına geldi: "Seni tahta çıkaralım" diyorlar. Tarih boyunca pek çok komutan böyle hükümdar oldu; pek çoğu da idam edildi.', sec: [
    { t: '👑 Kabul et, tahta yürü', s: [[0.4, '✨ Tahta yürümeyi seçtin; saray direnmedi ve hükümdar ilan edildin!', { iti: 40, ser: 50, mut: 20 }, { u: 'hukumdar', nadir: true }], [0.6, '', {}, { olum: 'başarısız bir taht darbesinin ardından idam edilerek' }]] },
    { t: '🛡️ Reddet ve hükümdara haber ver', s: [[0.6, 'Haber vermeyi seçtin; hükümdar sadakatini ödüllendirdi.', { iti: 20, ser: 20 }], [0.4, 'Haber verdin ama askerler seni hain saydı; komutanlıktan alındın.', { iti: -20, mut: -15 }]] },
    { t: '🤐 Reddet, sessiz kal', s: [[1, 'Sessiz kalmayı seçtin. Darbe başkasıyla yapıldı ve yeni hükümdar sana güvenmiyor.', { mut: -10 }]] }] },

  // ---------------- âlim / kadı ----------------
  { id: 'kadilik', ad: 'Kadılık Beratı', yas: [24, 50], meslek: ['alim'], metin: 'Bilgin dillerde dolaşıyor. Devlet sana bir kasabanın kadılığını (yargıçlığını) teklif ediyor: davalara bakacak, adaleti sağlayacaksın.', sec: [
    { t: '⚖️ Kabul et', s: [[1, 'Kabul etmeyi seçtin; artık kadısın. Kararların insanların hayatını değiştirecek.', { iti: 20, ser: 15 }, { u: 'kadi' }]] },
    { t: '📚 Hocalığa devam et', s: [[1, 'Hocalığı seçtin; öğrencilerin her yerden geliyor.', { bil: 15, mut: 8 }]] }] },
  { id: 'kitap', ad: 'Kalemin Mirası', yas: [30, 75], meslek: ['alim', 'okul'], metin: 'Bildiklerini yazıya geçirmek istiyorsun.', sec: [
    { t: '✍️ Bir kitap yaz', s: [[0.4, 'Kitap yazmayı seçtin; kitabın elden ele dolaştı.', { mut: 20, bil: 15, iti: 15 }], [0.55, 'Kitap yazdın; birkaç kopyayla kaldı ama yazmak seni mutlu etti.', { mut: 10, bil: 10 }], [0.05, '✨ Kitabın yüzyıllarca okunan bir başyapıt oldu!', { iti: 50, bil: 25, mut: 20 }, { nadir: true }]] },
    { t: '👩‍🎓 Öğrenci yetiştir', s: [[1, 'Öğrenci yetiştirmeyi seçtin; öğrencilerin bilgini her yere taşıdı.', { mut: 15, iti: 10 }]] }] },
  { id: 'saray-alimi', ad: 'Sarayın Daveti', yas: [30, 65], meslek: ['alim'], w: 0.5, metin: 'Hükümdar seni sarayına çağırıyor: hekimbaşı, müneccimbaşı ya da hoca olarak hizmet edebilirsin. Saray cömerttir ama tehlikelidir.', sec: [
    { t: '🏰 Git', s: [[0.7, 'Saraya gitmeyi seçtin; hükümdarın güvendiği âlimlerden birisin.', { ser: 30, iti: 25 }, { b: 'saray-alimi' }], [0.3, 'Gittin ama verdiğin bir tavsiye yanlış çıktı; gözden düştün.', { iti: -20, mut: -15 }]] },
    { t: '🕯️ Kitaplarının başında kal', s: [[1, 'Kalmayı seçtin; huzurlu bir hayat.', { mut: 10 }]] }] },

  // ---------------- saray: vezir ----------------
  { id: 'vezirlik', ad: 'Vezirlik', yas: [28, 55], meslek: ['saray'], yok: ['vezir-oldu'], metin: 'Hükümdar, devlet işlerindeki başarını gördü ve seni vezirliğe yükseltmek istiyor.', sec: [
    { t: '📜 Kabul et', s: [[1, 'Kabul etmeyi seçtin; artık vezirsin: hazine, eyaletler ve elçiler sende.', { iti: 25, ser: 30 }, { u: 'vezir', b: 'vezir-oldu' }]] },
    { t: '🏛️ Bir eyalet valiliği iste', s: [[1, 'Valiliği seçtin; başkentten uzakta kendi küçük sarayın var.', { ser: 25, iti: 15 }]] }] },
  { id: 'entrika', ad: 'Saray Kulisleri', yas: [24, 65], meslek: ['saray'], metin: 'Sarayda iki grup arasında güç kavgası var. İkisi de seni yanına çekmek istiyor.', sec: [
    { t: '🎯 Güçlü görüneni seç', s: [[0.55, 'Güçlü görüneni seçtin; tarafın kazandı, yüksek bir makama getirildin.', { ser: 25, iti: 15 }], [0.45, 'Güçlü görüneni seçtin ama kaybetti; sürgüne gönderildin.', { ser: -30, mut: -25 }]] },
    { t: '⚖️ Tarafsız kal', s: [[0.7, 'Tarafsız kalmayı seçtin; iki taraf da sana güvenmedi ama dokunmadı.', { mut: -5 }], [0.3, 'Tarafsız kaldın; kazanan taraf seni "hain" ilan etti.', { ser: -25, sag: -10 }]] }] },
  { id: 'sadrazam', ad: 'Mührü Hümayun', yas: [40, 70], unvan: ['vezir'], w: 0.6, metin: 'Baş vezir (sadrazam) azledildi. Hükümdar mührü sana uzatıyor: artık devletin bütün yükü sende olacak. Pek çok baş vezir görevi sırasında idam edildi.', sec: [
    { t: '🔏 Mührü al', s: [[0.6, 'Mührü almayı seçtin; yıllarca devleti yönettin ve adın tarihe geçti.', { iti: 40, ser: 40 }, { b: 'sadrazam' }], [0.4, '', {}, { olum: 'bir savaş yenilgisinin ardından hükümdarın emriyle boğdurularak' }]] },
    { t: '🙏 Yaşımı bahane edip reddet', s: [[1, 'Reddetmeyi seçtin. Hükümdar kırıldı ama seni bağışladı.', { iti: -5, mut: 5 }]] }] },

  // ---------------- hükümdar ailesi ve hükümdar ----------------
  { id: 'taht', ad: 'Taht Kavgası', yas: [20, 36], unvan: ['veliaht'], metin: 'Hükümdar öldü. Kardeşlerin de tahtı istiyor. Kimin önce başkente ve hazineye ulaşacağı her şeyi belirleyecek.', sec: [
    { t: '🏇 Orduyu yanına al, başkente koş', s: [[0.7, 'Orduyu yanına almayı seçtin ve başkente ilk sen vardın: hükümdar ilan edildin!', { iti: 40, ser: 40, mut: 20 }, { u: 'hukumdar', nadir: true }], [0.3, '', {}, { olum: 'taht kavgasında kardeşinin adamlarınca öldürülerek' }]] },
    { t: '🤝 Kardeşlerinle uzlaşmaya çalış', s: [[0.35, 'Uzlaşmayı seçtin; büyükler seni hükümdar seçti, kardeşlerine eyaletler verdin.', { iti: 35, ser: 35, mut: 15 }, { u: 'hukumdar', nadir: true }], [0.65, 'Uzlaşmaya çalıştın ama kardeşin tahtı aldı ve seni uzak bir kaleye sürgün etti.', { mut: -30, ser: -40, iti: -20 }, { u: 'surgun' }]] },
    { t: '🌙 Yabancı bir ülkeye kaç', s: [[1, 'Kaçmayı seçtin; yabancı bir hükümdarın sarayında, onun elinde bir koz olarak yaşadın.', { mut: -20, ser: -30 }, { u: 'surgun' }]] }] },
  { id: 'kitlik-h', ad: 'Ülkede Kıtlık', yas: [20, 90], unvan: ['hukumdar'], metin: 'İki yıldır kuraklık var. Ekmek fiyatı üç katına çıktı; başkentte halk huzursuz.', sec: [
    { t: '🌾 Devlet ambarlarını aç', s: [[0.8, 'Ambarları açmayı seçtin; halk seni "adil" diye anıyor. Hazine zorlandı.', { iti: 25, ser: -15 }], [0.2, 'Ambarları açtın ama yetmedi; yine de halk çabanı gördü.', { iti: 10, ser: -20 }]] },
    { t: '📜 Fiyatlara sınır koy (narh)', s: [[0.5, 'Narh koymayı seçtin; fiyatlar düştü.', { iti: 10 }], [0.5, 'Narh koydun; tüccarlar tahılı sakladı, pazarlar boşaldı. Karaborsa çıktı.', { iti: -15 }]] },
    { t: '🙏 Yağmur duasına çık', s: [[0.3, 'Duaya çıkmayı seçtin; birkaç gün sonra yağmur yağdı! Halk bunu senin kerametin saydı.', { iti: 30 }], [0.7, 'Duaya çıktın ama yağmur gelmedi; halk ekmek istiyor, dua değil. İsyan kıvılcımları başladı.', { iti: -25 }, { b: 'isyan' }]] }] },
  { id: 'isyan-h', ad: 'Eyalette İsyan', yas: [20, 90], unvan: ['hukumdar'], metin: 'Uzak bir eyalette valin isyan etti ve kendi adına para bastırdı.', sec: [
    { t: '⚔️ Ordunun başında üstüne yürü', s: [[0.6, 'Bizzat yürümeyi seçtin; isyan bastırıldı ve otoriten pekişti.', { iti: 25, sag: -10 }], [0.3, 'Yürüdün ama sefer uzadı; hazine boşaldı.', { ser: -25, iti: 5 }], [0.1, '', {}, { olum: 'isyancılara karşı yürüttüğü seferde aldığı yarayla' }]] },
    { t: '🤝 Elçi gönder, af ve unvan teklif et', s: [[0.55, 'Af teklif etmeyi seçtin; vali boyun eğdi, kan dökülmedi.', { iti: 10, ser: -5 }], [0.45, 'Af teklif ettin; vali bunu zayıflık saydı ve isyan büyüdü.', { iti: -20 }]] }] },
  { id: 'eser-h', ad: 'Asırlara Kalacak Eser', yas: [25, 90], unvan: ['hukumdar'], metin: 'Mimarların sana iddialı bir plan sunuyor. Hazine dolu değil ama adının yüzyıllarca anılmasını istiyorsun.', sec: [
    { t: '🕌 Büyük bir mabet / külliye yaptır', s: [[0.85, 'Mabedi seçtin; yıllar sonra tamamlandı ve şehrin simgesi oldu.', { iti: 35, ser: -30, mut: 15 }], [0.15, 'Mabedi seçtin ama inşaat bitmeden hazine tükendi; yarım kaldı.', { ser: -35, iti: -10 }]] },
    { t: '📚 Kütüphane ve okullar aç', s: [[1, 'Okulları seçtin; bir kuşak âlim yetişti, ülkenin bilgisi arttı.', { iti: 25, bil: 20, ser: -15 }]] },
    { t: '🧱 Surları ve yolları onar', s: [[1, 'Surları seçtin; ihtişam yok ama ülke daha güvenli ve ticaret canlandı.', { ser: 10, iti: 10 }]] }] },
  { id: 'varis', ad: 'Varisin Kim?', yas: [45, 90], unvan: ['hukumdar'], ister: ['cocuk'], metin: 'Yaşlandın. Büyük oğlun cesur ve askerler onu seviyor ama öfkesine hâkim olamıyor; küçük oğlun sakin, okumuş ve hazinenin hesabını senden iyi biliyor. Ülke savaşlardan yorgun ve borçlu.', sec: [
    { t: '⚔️ Büyük oğlunu seç', s: [[0.4, 'Büyük oğlunu seçtin; ordu onunla mutlu, sınırlar genişledi.', { iti: 5 }], [0.6, 'Büyük oğlunu seçtin; öfkesiyle yeni bir savaş başlattı ve borç içindeki ülke zorlandı. Ülkenin yorgun ve borçlu olduğunu unutmuştun.', { iti: -15, mut: -10 }]] },
    { t: '📚 Küçük oğlunu seç', s: [[0.75, 'Küçük oğlunu seçtin: ülke borçlu ve savaş yorgunuydu; onun sakinliği ve hesap bilgisi tam da gereken şeydi. Barış ve refah geldi.', { iti: 20, mut: 15 }], [0.25, 'Küçük oğlunu seçtin ama ordu onu tanımadı; senin ölümünden sonra kardeşler çatıştı.', { iti: -10, mut: -15 }]] }] },

  // ---------------- modern ----------------
  { id: 'grev', ad: 'Fabrikada Grev', yas: [17, 50], meslek: ['isci'], metin: 'Fabrikada günde 12-14 saat çalışılıyor. İşçiler sendika kurmak için gizlice toplanıyor.', sec: [
    { t: '✊ Toplantılara katıl', s: [[0.5, 'Katılmayı seçtin; grev başarılı oldu: iş günü kısaldı, ücretler arttı.', { ser: 10, mut: 15, iti: 10 }], [0.5, 'Katıldın; işten atıldın, bir süre iş bulamadın.', { ser: -20, mut: -10 }]] },
    { t: '🙇 Başını eğ, çalış', s: [[0.8, 'Çalışmayı seçtin; ustabaşı oldun.', { ser: 15 }, { u: 'mudur' }], [0.2, 'Çalıştın ama bir makine kazasında elini yaraladın.', { sag: -25, ser: -10 }]] }] },
  { id: 'meslek-modern', ad: 'Mezuniyet', yas: [20, 24], meslek: ['okul'], metin: 'Okulu bitirdin. Hangi işi seçeceksin?', sec: [
    { t: '🩺 Hekim ol', s: [[1, 'Hekimliği seçtin; yıllar süren eğitimden sonra hayat kurtarıyorsun.', { ser: 25, bil: 20, mut: 10, iti: 15 }]] },
    { t: '🧑‍🏫 Öğretmen ol', s: [[1, 'Öğretmenliği seçtin; yüzlerce çocuğun hayatına dokundun.', { mut: 20, bil: 10, iti: 10 }]] },
    { t: '⚙️ Mühendis ol', s: [[1, 'Mühendisliği seçtin: köprüler, makineler, yollar.', { ser: 20, bil: 15 }]] }] },
  { id: 'icat', ad: 'Atölyedeki Fikir', yas: [24, 60], donem: ['modern'], w: 0.4, metin: 'Akşamları uğraştığın bir alet / fikir var. Bir yatırımcı ilgileniyor ama işini bırakmanı istiyor.', sec: [
    { t: '🚀 İşini bırak, fikrine yatır', s: [[0.55, 'Fikrine yatırmayı seçtin ama tutmadı; birikimin eridi.', { ser: -25, mut: -10, bil: 10 }], [0.35, 'Fikrine yatırdın; küçük ama kârlı bir şirketin oldu.', { ser: 30, mut: 15 }], [0.1, '✨ Fikrin bütün dünyaya yayıldı; adın ders kitaplarına girdi!', { ser: 70, iti: 40, mut: 25 }, { nadir: true }]] },
    { t: '🏢 İşinde kal', s: [[1, 'İşinde kalmayı seçtin; güvenli bir hayat.', { ser: 5 }]] }] },
  { id: 'piyango', ad: 'Piyango Bileti', yas: [20, 80], donem: ['modern'], w: 0.3, metin: 'Yılbaşında bir piyango bileti almayı düşünüyorsun.', sec: [
    { t: '🎟️ Al', s: [[0.97, 'Almayı seçtin… amorti bile çıkmadı.', { ser: -1 }], [0.03, '✨ BÜYÜK İKRAMİYE! İnanamadın; hayatın bir gecede değişti.', { ser: 80, mut: 20 }, { nadir: true }]] },
    { t: '🙅 Alma', s: [[1, 'Almamayı seçtin. O yıl büyük ikramiye mahallendeki bakkala çıktı.', {}]] }] },
  { id: 'seferberlik', ad: 'Seferberlik', yas: [18, 45], donem: ['modern'], metin: 'Seferberlik ilan edildi. Yaşıtların cepheye gidiyor.', sec: [
    { t: '🎖️ Gönüllü yazıl', s: [[0.55, 'Gönüllü yazılmayı seçtin; savaştan sağ döndün, ama gördüklerini hiç unutmadın.', { iti: 15, mut: -10 }], [0.3, 'Gönüllü yazıldın ve ağır yaralandın.', { sag: -40, iti: 15 }], [0.15, '', {}, { olum: 'cephede' }]] },
    { t: '🏭 Cephe gerisinde çalış', s: [[1, 'Cephe gerisini seçtin; fabrikalarda, tarlalarda ülkeyi ayakta tuttun.', { ser: 5, mut: -5 }]] }] },
  { id: 'emeklilik', ad: 'Emeklilik', yas: [60, 70], donem: ['modern'], metin: 'Emekli oldun. Önünde yıllar var.', sec: [
    { t: '🌳 Memlekete dön, bahçe ek', s: [[1, 'Memleketi seçtin; domatesler, kahvehane, sabah yürüyüşleri.', { mut: 15, sag: 5 }]] },
    { t: '🧳 Dünyayı gez', s: [[1, 'Gezmeyi seçtin; hiç görmediğin şehirler gördün.', { mut: 18, ser: -10, bil: 10 }]] },
    { t: '🧑‍🏫 Gençlere gönüllü ders ver', s: [[1, 'Ders vermeyi seçtin; bildiklerin yeni kuşaklara geçti.', { mut: 12, iti: 10 }]] }] }
);
