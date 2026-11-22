// ⏳🔥 Tarihte Hayatta Kalabilir misin? — 12 Gerçek Tarihî & Tarihöncesi Hayatta Kalma Senaryosu
'use strict';
window.HAYATTA_KAL = [
  {
    id: 'hk-pompeii', ad: 'Pompeii: Vezüv Patlaması', ik: '🌋', yil: 'MS 79', yer: 'Pompeii, Roma İmparatorluğu',
    giris: 'Öğleden sonra 13:00. Vezüv Dağı\'ndan 30 km yüksekliğinde dev bir kül sütunu fırladı ve gökyüzü kapkaranlık oldu. Taş yağmuru başlamak üzere!',
    adimlar: [
      {
        soru: '1. Karar: İlk 10 dakikada ne yapıyorsun?',
        sec: [
          { t: '🏃 Altınları bırak, hemen güney kapısından limana koş!', puan: 2, sonuc: 'Doğru hamle! Pomza taşları henüz küçükken açık alana çıktın.' },
          { t: '💰 Evdeki altın keseni ve değerli vazoları toplamaya dön.', puan: 0, sonuc: '20 dakika kaybettin! Sokaklar diz boyu sıcak külle dolmaya başladı.' },
          { t: '🏠 Sağlam taş mahzene inip fırtınanın geçmesini bekle.', puan: -1, sure: '42 dakika', sonuc: 'Tarihî tuzak! Kül ağırlığı çatıları çökertti ve zehirli gaz mahzene doldu.' }
        ]
      },
      {
        soru: '2. Karar: Gökyüzünden yumruk büyüklüğünde sıcak taşlar yağıyor!',
        sec: [
          { t: '🛏️ Başına kalın bir yastık bağlayıp koşmaya devam et.', puan: 2, sonuc: 'Birebir Yaşlı Plinius\'un taktiği! Taş darbelerinden kurtuldun.' },
          { t: '🏛️ Tapınak sütunlarının altında durup bekle.', puan: 0, sonuc: 'Sarsıntıyla sütunlar çatladı; nefes almak giderek zorlaşıyor.' },
          { t: '👀 Dağın zirvesine daha yakından bakmak için tepeye çık.', puan: -1, sure: '1 saat 15 dakika', sonuc: 'Merak kediyi de Romalıyı da yaktı! İlk piroklastik dalga yamacı yuttu.' }
        ]
      },
      {
        soru: '3. Karar: Limana ulaştın ama deniz dev dalgalarla kaynıyor. Son hamlen?',
        sec: [
          { t: '⛵ Misenum\'dan gelen Roma donanma sandallarına atla ve batıya açıl!', puan: 2, sonuc: 'Efsanevi kurtuluş! Ertesi sabahki 500 °C\'lik kül bulutundan kurtulan azınlıktasın!' },
          { t: '🏖️ Kıyıdaki taş kayıkhaneye saklanıp sabahı bekle.', puan: -1, sure: '11 saat', sonuc: 'Herculaneum kayıkhanelerindeki 300 kişi gibi geceki dev sıcak gaz bulutuna yakalandın!' },
          { t: '🐎 At bulup kuzeye, tam dağın eteklerine doğru sür.', puan: -1, sure: '2 saat 10 dakika', sonuc: 'Yanlış yön! Dağın etekleri ilk tamamen gömülen yer oldu.' }
        ]
      }
    ],
    gercek: 'MS 79 patlamasında ilk 18 saatte şehri hemen terk edenler kurtuldu; "evim sağlam" deyip bekleyenler ertesi sabahki 500 °C\'lik piroklastik dalgaya yakalandı.'
  },
  {
    id: 'hk-kretase', ad: '66 My Önce: Asteroit Günü', ik: '☄️', yil: '66 Milyon Yıl Önce', yer: 'Kuzey Amerika, Kretase Çağı',
    giris: 'Gökyüzünde Güneş\'ten 10 kat parlak ikinci bir ateş topu belirdi! 10 km çapındaki Chicxulub asteroiti Meksika\'ya çarpmak üzere.',
    adimlar: [
      {
        soru: '1. Karar: Çarpma anına 30 saniye var!',
        sec: [
          { t: '🕳️ Derin bir yeraltı kovuğuna / dere yatağı mağarasına dal!', puan: 2, sonuc: 'Zekice! Tıpkı ilk memeliler gibi yeraltı seni ısı dalgasından korudu.' },
          { t: '🌲 Dev bir çam ağacının tepesine tırman.', puan: -1, sure: '48 saniye', sonuc: 'Şok dalgası tüm ormanı kibrit çöpü gibi devirdi!' },
          { t: '🦖 Bir Triceratops sürüsünün arkasına saklan.', puan: 0, sonuc: 'Sürü panikle koşmaya başladı; toz bulutunun içinde zar zor kaldın.' }
        ]
      },
      {
        soru: '2. Karar: 1 saat sonra gökyüzünden kızgın cam damlacıkları (tektit) yağıyor!',
        sec: [
          { t: '💧 Nemli mağaranın derinliğinde kalıp girişi taşla ört.', puan: 2, sonuc: 'Harika! Dışarıda 300 °C fırın sıcaklığı varken içeride serin kaldın.' },
          { t: '🏃 Yağmur bitti sanıp dışarı çık ve su ara.', puan: -1, sure: '1 saat 12 dakika', sonuc: 'Küresel orman yangınları gökyüzünü alevle kapladı!' },
          { t: '🌊 Sığ kıyı denizine girip yüz.', puan: 0, sonuc: '100 metrelik mega-tsunami seni karaya fırlattı ama mucize eseri hayattasın.' }
        ]
      },
      {
        soru: '3. Karar: Aylar süren karanlık "Toz Kışı" başladı. Bitkiler öldü!',
        sec: [
          { t: '🍄 Toprak altındaki kökler, tohumlar, mantarlar ve böceklerle beslen.', puan: 2, sonuc: 'Tebrikler! Tıpkı küçük memeliler ve kuşların ataları gibi Kretase yok oluşunu atlattın!' },
          { t: '🦕 Dev otçul dinozorları takip edip onların yediğini ye.', puan: -1, sure: '3 hafta', sonuc: 'Dev dinozorlar günde 300 kg yaprak bulamadığı için açlıktan tükendi!' },
          { t: '❄️ Hiç hareket etmeden açık alanda Güneş\'i bekle.', puan: -1, sure: '6 gün', sonuc: 'Güneş ışığı 2 yıl boyunca neredeyse hiç görünmedi!' }
        ]
      }
    ],
    gercek: '66 My asteroit çarpmasından 25 kg\'dan ağır hiçbir kara hayvanı sağ çıkamadı; yeraltında saklanan ve tohum/böcek yiyen küçük memeliler dünyayı devraldı!'
  },
  {
    id: 'hk-titanik', ad: 'Titanik: Buzdağı Gecesi', ik: '🚢', yil: '14 Nisan 1912', yer: 'Kuzey Atlas Okyanusu (-2 °C)',
    giris: 'Saat 23:40. Geminin sağ yanından boğuk bir sürtünme sesi geldi ve motorlar durdu. Güvertede buz parçaları var!',
    adimlar: [
      {
        soru: '1. Karar: Çoğu yolcu "Bu gemi batmaz" deyip uyumaya devam ediyor. Sen?',
        sec: [
          { t: '🧥 En kalın yün paltonu ve can yeleğini giyip hemen üst güverteye çık!', puan: 2, sonuc: 'Altın karar! İlk filikalar yarı boş kalkarken sen en öndesin.' },
          { t: '☕ Salonda sıcak çay içip kaptanın anonsunu bekle.', puan: 0, sonuc: '45 dakika kaybettin; güvertede artık büyük kalabalık var.' },
          { t: '😴 "Batmaz gemi bu" deyip kamaranda uyumaya devam et.', puan: -1, sure: '1 saat 50 dakika', sonuc: 'Uyandığında koridorlar buz gibi Atlantik suyuyla dolmuştu!' }
        ]
      },
      {
        soru: '2. Karar: İlk filika yarı boş indiriliyor, insanlar korkup binmiyor.',
        sec: [
          { t: '🚣 Hemen görevlilere yardım edip filikaya bin ve kürek çekmeye gönüllü ol!', puan: 2, sonuc: 'Büyük akıl! Kürek çekebilen yolculara ihtiyaç vardı — filikada yerini aldın.' },
          { t: '💎 Kamarandaki mücevher kutusunu almak için aşağı in.', puan: -1, sure: '1 saat 18 dakika', sonuc: 'Geri döndüğünde tüm filikalar çoktan suya indirilmişti!' },
          { t: '🎻 Güvertede orkestrayı dinleyip sıranın gelmesini bekle.', puan: 0, sonuc: 'Son katlanır filika için sadece dakikaların kaldı.' }
        ]
      },
      {
        soru: '3. Karar: -2 °C Atlantik karanlığında kurtarma gemisi Carpathia\'yı bekliyorsun.',
        sec: [
          { t: '🔦 Filikada ıslak kıyafetlerden uzak durup kürek çekerek vücut ısını koru.', puan: 2, sonuc: 'Sabah 04:10! RMS Carpathia\'nın ışıkları göründü — hayatta kaldın!' },
          { t: '🏊 "Yakında gemi ışığı var" deyip suya atlayıp yüzmeye çalış.', puan: -1, sure: '14 dakika', sonuc: '-2 °C suda hipotermi birkaç dakikada kasları kilitler!' },
          { t: '🧊 Dev buzdağının üstüne çıkıp orada bekle.', puan: -1, sure: '35 dakika', sonuc: 'Buzdağı kaygan ve dondurucu; kurtarma gemisi seni karanlıkta göremedi!' }
        ]
      }
    ],
    gercek: 'Titanik\'te ilk indirilen filikalar 65 kişilik kapasiteye rağmen sadece 20–28 kişiyle suya bırakıldı; ilk 30 dakikada harekete geçenlerin kurtulma şansı 3 kat yüksekti.'
  },
  {
    id: 'hk-veba', ad: '1348 Floransa: Kara Veba', ik: '😷', yil: 'MS 1348', yer: 'Floransa, İtalya',
    giris: 'Limandan gelen gemilerle şehre gizemli bir salgın girdi. Doktorlar gaga maskeleri takıp güzel kokular yakıyor ama hastalık hızla yayılıyor!',
    adimlar: [
      {
        soru: '1. Karar: Hastalıktan korunmak için ne yapıyorsun?',
        sec: [
          { t: '🏔️ Şehri hemen terk edip yüksek, tenha bir dağ köyüne çekil!', puan: 2, sonuc: 'Boccaccio\'nun Dekameron taktiği! Kalabalık ve pirelerden uzaklaştın.' },
          { t: '🩸 Dönemin doktoruna gidip kan aldır (hacamat) ve cıva sürdür.', puan: -1, sure: '4 gün', sonuc: 'Orta Çağ tıbbı seni virüsten önce zayıf düşürdü!' },
          { t: '🔔 Şehir meydanında toplanıp kalabalıkla dua alayına katıl.', puan: -1, sure: '6 gün', sonuc: 'Kalabalıkta pireler ve damlacıklar hızla yayıldı!' }
        ]
      },
      {
        soru: '2. Karar: Kaldığın evde bolca fare ve pire fark ettin.',
        sec: [
          { t: '🔥 Suyu kaynat, elbiselerini sıkça yıka ve eve kedi al!', puan: 2, sonuc: 'Tarihin önüne geçtin! Kediler fareleri, temizlik ise pireleri uzak tuttu.' },
          { t: '🐱 "Kediler uğursuzdur" söylentisine inanıp kedileri kov.', puan: -1, sure: '11 gün', sonuc: 'Kediler gidince fare nüfusu patladı — tam 14. yüzyıl hatası!' },
          { t: '💐 Sadece pencereyi kapatıp lavanta yak.', puan: 0, sonuc: 'Güzel kokuyor ama pireler hâlâ halıda bekliyor.' }
        ]
      },
      {
        soru: '3. Karar: 40 gün sonra şehirden tüccarlar kapına kumaş satmaya geldi.',
        sec: [
          { t: '⏳ Venedik kuralı (Quaranta = 40 gün): Malları içeri almadan beklet ve uzak dur!', puan: 2, sonuc: 'Bravo! "Karantina" kelimesini icat eden Venedikliler gibi salgını sağ salim atlattın!' },
          { t: '🧵 Ucuz diye ölen zenginlerin ipek elbiselerini satın al.', puan: -1, sure: '2 hafta', sonuc: 'Kumaş kıvrımlarında saklanan veba pireleri seni yakaladı!' },
          { t: '🤝 Tüccarları akşam yemeğine eve davet et.', puan: -1, sure: '9 gün', sonuc: 'Misafirperverliğin salgını dağ köyüne kadar taşıdı!' }
        ]
      }
    ],
    gercek: '"Karantina" kelimesi İtalyanca "40 gün" (quaranta giorni) demektir — 1377\'de Dubrovnik ve Venedik, veba gemilerini 40 gün açıkta bekleterek salgını durdurmayı başardı.'
  },
  {
    id: 'hk-buzul', ad: 'Buzul Çağı Sibirya: -35 °C', ik: '🦣', yil: '40.000 Yıl Önce', yer: 'Sibirya Mamut Bozkırı',
    giris: 'Buzul Çağı\'nın zirvesindesin. Kar fırtınası yaklaşıyor, elinde çakmaktaşı mızrak ve sırtında ren geyiği postu var.',
    adimlar: [
      {
        soru: '1. Karar: Gece -40 °C olacak. Nerede barınacaksın?',
        sec: [
          { t: '🦴 Rüzgâra kapalı vadide mamut kemikleri ve postlardan kubbe çadır kur!', puan: 2, sonuc: 'Gerçek Buzul Çağı mimarisi! Rüzgârı kestin ve içeriyi sıcak tuttun.' },
          { t: '🕳️ Derin karanlık bir mağaraya hiç kontrol etmeden gir.', puan: -1, sure: '20 dakika', sonuc: 'İçeride kış uykusundan uyanan dev bir mağara ayısı vardı!' },
          { t: '❄️ Açık ovada yürümeye devam et ki ısınasın.', puan: -1, sure: '3 saat', sonuc: 'Tipide yönünü kaybedip donma tehlikesine girdin!' }
        ]
      },
      {
        soru: '2. Karar: Karşında 6 tonluk yetişkin bir Tüylü Mamut sürüsü var!',
        sec: [
          { t: '🔥 Kabileni toplayıp meşalelerle sürüyü bataklığa / uçurum kıyısına yönlendir.', puan: 2, sonuc: 'Ekip işi! Tek başına saldırmak yerine zekâyla tüm kış yetecek et kazandın.' },
          { t: '🗡️ Tek başına mızrakla dev lider mamuta koş!', puan: -1, sure: '12 saniye', sonuc: '4 metrelik kıvrık fildişi seni 10 metre havaya fırlattı!' },
          { t: '🍖 Kılıç dişli kaplanın yeni avladığı leşi elinden almaya çalış.', puan: 0, sonuc: 'Meşale sallayarak onu korkuttun ama çok riskliydi!' }
        ]
      },
      {
        soru: '3. Karar: Ateşin sönmek üzere ve etrafta hiç ağaç yok (tundra bozkırı)!',
        sec: [
          { t: '🔥 Kurumuş mamut kemikleri ve yağını yakıt olarak kullan!', puan: 2, sonuc: 'Gerçek arkeolojik deha! Sibirya insanları odunsuz tundrada kemik yağı yakarak hayatta kaldı!' },
          { t: '🧊 Ateşsiz uyuyup sabah güneşini bekle.', puan: -1, sure: '5 saat', sonuc: '-40 °C\'de ateşsiz geceyi çıkarmak imkânsız!' },
          { t: '🐺 Yakındaki kurt sürüsünün yanına sokulup ısın.', puan: 0, sonuc: 'Şanslısın — bir yavru kurt elinden kemik yedi; insanlığın ilk köpeğini evcilleştirdin!' }
        ]
      }
    ],
    gercek: 'Arkeologlar Sibirya ve Ukrayna\'da (Mezhirich) 15.000 yıl öncesine ait mamut kemiklerinden yapılmış gerçek evler ve yakıt olarak kullanılmış kemik ocakları buldu!'
  },
  {
    id: 'hk-ipekyolu', ad: 'İpek Yolu: Taklamakan Çölü', ik: '🐪', yil: 'MS 1275', yer: 'Taklamakan Çölü, Orta Asya',
    giris: 'Adı "Giren Çıkamaz" anlamına gelen Taklamakan Çölü\'nde 50 develik ipek kervanındasın. Kum fırtınası ufku kararttı!',
    adimlar: [
      {
        soru: '1. Karar: Gündüz +46 °C sıcak var. Ne zaman yol alacaksın?',
        sec: [
          { t: '🌙 Gündüz çadırda dinlen, gece yıldızların altında serin havada yürü!', puan: 2, sonuc: 'Usta kervancı kararı! Su tüketimini yarıya indirdin.' },
          { t: '☀️ Öğle güneşinde hızlanıp bir an önce çölden çıkmaya çalış.', puan: -1, sure: '6 saat', sonuc: 'Güneş çarpması ve su kaybı kervanı ilk günde çökertti!' },
          { t: '💧 Suyu daha ilk gün bolca içip güç topla.', puan: 0, sonuc: 'Kırbalar yarıya indi; sonraki vahaya 3 gün var.' }
        ]
      },
      {
        soru: '2. Karar: Dev kum fırtınası bastırdı, göz gözü görmüyor!',
        sec: [
          { t: '🐪 Develeri rüzgâra sırtları dönük çöktür, yüzünü sarıp aralarına sığın.', puan: 2, sonuc: 'Mükemmel! Çift hörgüçlü develer canlı duvar olup seni fırtınadan korudu.' },
          { t: '🏃 Kervandan ayrılıp ufukta gördüğün göle (serap!) doğru koş.', puan: -1, sure: '4 saat', sonuc: 'O bir seraptı! Çölde tek başına yönünü tamamen kaybettin.' },
          { t: '🥁 Davul çalıp fırtınada yürümeye devam et.', puan: 0, sonuc: 'Birkaç balya ipek kaybettin ama kervan dağılmadı.' }
        ]
      },
      {
        soru: '3. Karar: Gece çölde garip ıslık ve uğultu sesleri duyuyorsun ("Şarkı Söyleyen Kumlar")!',
        sec: [
          { t: '⭐ Kutup Yıldızı\'ndan ve kervan zilinden hiç ayrılma — o sadece rüzgârın kum sesi!', puan: 2, sonuc: 'Tebrikler! Kaşgar kervansarayının ışıkları göründü; ipekleri 5 kat kârla sattın!' },
          { t: '👻 Sesin geldiği kum tepesine tek başına tırman.', puan: -1, sure: '1 gece', sonuc: 'Marco Polo\'nun uyardığı gibi kervandan kopan bir daha iz bulamadı!' },
          { t: '🎒 Ağır su kırbalarını atıp sadece altınları taşı.', puan: -1, sure: '18 saat', sonuc: 'Çölde 1 kırba su 100 altından değerlidir!' }
        ]
      }
    ],
    gercek: 'Marco Polo 1270\'lerde bu çölden geçerken kumulların rüzgârla çıkardığı ürkütücü uğultuyu ("çöl ruhlarının sesi") ve gece yıldızlarla yürüyen kervanları ayrıntıyla yazmıştır.'
  },
  {
    id: 'hk-macellan', ad: 'Macellan: Pasifik\'i İlk Geçiş', ik: '⛵', yil: 'MS 1521', yer: 'Büyük Okyanus\'un Ortası',
    giris: '90 gündür tek bir kara parçası görmediniz! Gemide taze yiyecek bitti, denizciler iskorbüt hastalığından dişlerini kaybediyor.',
    adimlar: [
      {
        soru: '1. Karar: Gemide ne yiyerek hayatta kalmaya çalışacaksın?',
        sec: [
          { t: '🍋 Kaptanın gizli stokundaki kurutulmuş ayva reçeli, sirke ve yağmur suyunu paylaş!', puan: 2, sonuc: 'C vitamini seni iskorbütten kurtardı! Çoğu denizci bilmeden hasta oldu.' },
          { t: '🧂 Sadece tuzlu kurutulmuş et ve kurtlu peksimet ye.', puan: 0, sonuc: 'Karnın doydu ama diş etlerin kanamaya başladı (iskorbüt!).' },
          { t: '🌊 Susuzluktan deniz suyu iç!', puan: -1, sure: '3 gün', sonuc: 'Tuzlu okyanus suyu böbrekleri hızla çökertip halüsinasyona yol açtı!' }
        ]
      },
      {
        soru: '2. Karar: Ekvator\'da rüzgâr günlerce tamamen kesildi (Durgunluk Kuşağı).',
        sec: [
          { t: '🌧️ Yelkenleri gerip tropik sağanak yağmur suyunu fıçılarda biriktir!', puan: 2, sonuc: 'Mürettebatın kahramanı oldun! Tatlı su stoğu yeniden doldu.' },
          { t: '⚔️ Kaptana isyan çıkarıp gemiyi geri çevirmeye çalış.', puan: -1, sure: '2 saat', sonuc: 'Macellan isyanları acımasızca bastırmasıyla ünlüydü!' },
          { t: '🎣 Gemi kenarından uçan balıkları ve yağmuru izle.', puan: 0, sonuc: 'İki uçan balık yakaladın ama günler zor geçiyor.' }
        ]
      },
      {
        soru: '3. Karar: 99. günde ufukta Guam Adası göründü! Son hamlen?',
        sec: [
          { t: '🥥 Yerli halkla barışçıl takas yapıp taze hindistan cevizi, muz ve tatlı su al!', puan: 2, sonuc: 'Tarihe geçtin! Victoria gemisiyle Dünya\'nın çevresini ilk kez dolaşan 18 kişiden biri oldun!' },
          { t: '🏝️ Gemiden kaçıp ıssız mercan adasında tek başına kal.', puan: -1, sure: '2 hafta', sonuc: 'Tatlı su kaynağı olmayan mercan adasında mahsur kaldın!' },
          { t: '⚔️ Silah zoruyla adaya çıkıp her yeri yağmala.', puan: -1, sure: '1 gün', sonuc: 'Yerli savaşçılarla çatışmada ağır yenilgi aldın!' }
        ]
      }
    ],
    gercek: 'Macellan\'ın 1519\'da 5 gemi ve 270 denizciyle başlattığı ilk dünya turunu 1522\'de sadece 1 gemi (Victoria) ve 18 kişi tamamlayabildi!'
  },
  {
    id: 'hk-giza', ad: 'MÖ 2560: Büyük Piramit Şantiyesi', ik: '🔺', yil: 'MÖ 2560', yer: 'Giza Platosu, Antik Mısır',
    giris: 'Firavun Khufu\'nun 146 metrelik Büyük Piramidi\'nde taş taşıma ekibindesin. 2,5 tonluk kireçtaşı bloğu kızakta bekliyor!',
    adimlar: [
      {
        soru: '1. Karar: 2,5 tonluk taşı kızgın çöl kumunda nasıl çekeceksiniz?',
        sec: [
          { t: '💧 Kızağın önündeki kuma tam kıvamında Nil suyu döküp kayganlaştır!', puan: 2, sonuc: 'Gerçek Mısır fiziği! Islak kum sürtünmeyi tam YARIYA düşürdü!' },
          { t: '💪 Kuru kumda 50 kişi bütün gücünüzle asılın.', puan: 0, sonuc: 'Kızak kuma saplandı; güneşin altında bitkin düştünüz.' },
          { t: '🪨 Taşı tepeden aşağı yuvarlayarak götürmeye çalış.', puan: -1, sure: '15 dakika', sonuc: 'Blok parçalandı; başmimar Hemiunu seni şantiyeden kovdu!' }
        ]
      },
      {
        soru: '2. Karar: Öğle sıcağı +42 °C. İşçi köyünde ne yiyip içeceksin?',
        sec: [
          { t: '🧄 Arpa ekmeği, sarımsak, soğan ve besleyici koyu arpa içeceği (heket) tüket!', puan: 2, sonuc: 'Tam gerçek piramit işçisi diyeti! Enerjin ve direncin tavan yaptı.' },
          { t: '☀️ Su içmeden mesaiyi bitirmeye çalış.', puan: -1, sure: '4 saat', sonuc: 'Giza çölünde susuz 4 saatte bayıldın!' },
          { t: '🐊 Serinlemek için Nil\'in sazlık kıyısına tek başına dal.', puan: -1, sure: '10 dakika', sonuc: 'Antik Nil\'de su aygırları ve timsahlar şaka yapmaz!' }
        ]
      },
      {
        soru: '3. Karar: Ahet (Taşkın) mevsimi geldi, Nil suları yükseldi!',
        sec: [
          { t: '⛵ Taşkın kanallarını kullanıp Asvan\'dan gelen granitleri doğrudan piramit limanına indir!', puan: 2, sonuc: 'Başusta unvanı kazandın! Adın piramidin iç odasına ekip yazıtı olarak kazındı!' },
          { t: '🧱 Çamur tuğlaları nehir kenarında açıkta bırak.', puan: 0, sonuc: 'Taşkın hepsini eritti ama taş bloklar güvende.' },
          { t: '🏃 Şantiyeden kaçıp çölde tek başına yaşamaya çalış.', puan: -1, sure: '2 gün', sonuc: 'Sahra çölünde kervansız hayatta kalmak imkânsız!' }
        ]
      }
    ],
    gercek: 'Büyük Piramit\'i köleler değil, iyi beslenen, tıbbi bakım alan ve kendi adını duvarlara "Khufu\'nun Dostları" diye yazan maaşlı Mısırlı ustalar inşa etti!'
  }
];
