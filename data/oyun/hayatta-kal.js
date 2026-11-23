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
  },
  {
    id: 'hk-buzul', ad: 'MÖ 18.000: Buzul Çağı & Dev Mamut', ik: '🦣', yil: 'MÖ 18.000', yer: 'Sibirya Bozkırı',
    giris: 'Hava -25 °C, cebinde telefon yok ama elinde sivriltilmiş bir çakmaktaşı var. Tam karşında 6 tonluk yünlü bir mamut sana "hayırdır?" bakışı atıyor!',
    adimlar: [
      {
        soru: '1. Karar: Mamut sürüsü yaklaşıyor. Kabile seni izliyor!',
        sec: [
          { t: '🔥 Meşale yakıp kabileyle birlikte sürüyü dar vadiye yönlendir!', puan: 2, sonuc: 'Tam Paleolitik takım oyunu! Kabile şefi omzuna vurup "bu çocukta iş var" dedi.' },
          { t: '🤳 "Mamutla yakın çekim yapayım" deyip tek başına önüne atla.', puan: -1, sure: '43 saniye', sonuc: 'Mamut seni hortumuyla nazikçe 12 metre uzağa park etti. Buzul Çağı\'nda sigorta da yoktu!' },
          { t: '🧘 Göz teması kurma, kar adamı taklidi yap.', puan: 0, sonuc: 'Mamut seni kardan adam sanıp geçti ama ayak parmakların donmaya başladı.' }
        ]
      },
      {
        soru: '2. Karar: Gece bastırdı, kar fırtınası koptu. Nerede uyuyacaksın?',
        sec: [
          { t: '🦴 Mamut kemikleri ve postlarından yapılan kubbe çadırda ateşin dibine kıvrıl!', puan: 2, sonuc: 'Sıcacık! Buzul Çağı\'nın 5 yıldızlı otelinde horlayarak sabahladın.' },
          { t: '🐻 "Şu sıcak mağara boş gibi duruyor" deyip karanlığa dal.', puan: -1, sure: '4 dakika', sonuc: 'Mağara boş değilmiş — 500 kiloluk Mağara Ayısı uykusunu böldüğün için pek memnun olmadı!' },
          { t: '🥶 Açık havada zıplayarak ısınmaya çalış.', puan: 0, sonuc: 'Sabaha kadar 4.000 kez zıpladın, hayattasın ama bacakların taş kesildi.' }
        ]
      },
      {
        soru: '3. Karar: Sabah oldu, Beringia kara köprüsü önünde uzanıyor. Yeni kıta mı, kabile mi?',
        sec: [
          { t: '🧭 Kabileyle birlikte postları giyip geyik sürülerini izleyerek Amerika\'ya geç!', puan: 2, sonuc: 'Efsanesin! Amerika kıtasına ayak basan ilk öncülerden biri oldun — üstelik pasaportsuz!' },
          { t: '🧊 "Ben şuradan buzun üstünde kestirme gideyim" deyip ince buza bas.', puan: -1, sure: '12 saniye', sonuc: 'Buzul Çağı\'nın en hızlı buz banyosunu yaptın!' },
          { t: '🎨 Mağara duvarına 3 saat el izi basıp kabileye yetişmeye çalış.', puan: 0, sonuc: 'Kabile gitti ama 20.000 yıl sonra arkeologlar el izine "şaheser" deyip müzeye koydu!' }
        ]
      }
    ],
    gercek: 'Buzul Çağı insanları Ukrayna ve Sibirya\'da (Mezhirich) gerçekten mamut kemiklerinden ve postlarından sıcak kubbe evler inşa ediyordu!'
  },
  {
    id: 'hk-atina', ad: 'MÖ 410: Atina Agorası & Sokrates', ik: '🏛️', yil: 'MÖ 410', yer: 'Atina, Antik Yunan',
    giris: 'Toga giydin, zeytin ağaçlarının altında yürüyorsun. Tam o sırada yalınayak bir adam (Sokrates!) yolunu kesip "Dostum, sence adalet nedir?" diye sordu!',
    adimlar: [
      {
        soru: '1. Karar: Sokrates seni felsefi köşeye sıkıştırdı. Ne diyorsun?',
        sec: [
          { t: '🤔 "Bilmediğim tek şey hiçbir şey bilmediğimdir üstat, anlat dinleyeyim!"', puan: 2, sonuc: 'Sokrates gözleri parlayarak "Aha, sonunda akıllı bir genç!" deyip seni akşam ziyafetine davet etti.' },
          { t: '🗣️ "Kardeşim uzatma, benim işim gücüm var!" deyip tartışmaya gir.', puan: 0, sonuc: 'Sokrates 6 saat boyunca sana 47 soru sordu; akşam olduğunda kendi adını bile sorgulamaya başladın.' },
          { t: '⚡ "Senin tanrılar da biraz abartı sanki" diye meydanda yüksek sesle bağır.', puan: -1, sure: '18 dakika', sonuc: 'Atina meclisi anında oy topladı, 10 yıllığına "ostrakismos"la (çömlek oyuyla) şehirden sürgün edildin!' }
        ]
      },
      {
        soru: '2. Karar: Akşam Sempozyum ziyafetindesin. Önüne şarap kâsesi geldi.',
        sec: [
          { t: '💧 Antik Yunan âdeti gereği şarabı bol suyla (3\'e 1) karıştırıp iç!', puan: 2, sonuc: 'Tam bir Atinalı beyefendi/hanımefendi! Herkes görgüne hayran kaldı.' },
          { t: '🍷 "Su mu? Ben sek içerim!" deyip su katmadan dik.', puan: -1, sure: '35 dakika', sonuc: 'Antik Yunan\'da sek şarap içmek "barbarlık" sayılırdı; üstüne başın dönüp mermer sütuna kafa attın!' },
          { t: '🫒 Sadece zeytin ve incir yiyip felsefe konuş.', puan: 0, sonuc: 'Karnın doydu ama herkes seni biraz fazla ciddi buldu.' }
        ]
      },
      {
        soru: '3. Karar: Peloponez Savaşı kapıda, Sparta ordusu surlara dayandı!',
        sec: [
          { t: '⚓ Pire Limanı\'ndaki güçlü Atina donanmasına katılıp erzak hattını koru!', puan: 2, sonuc: 'Atina\'nın uzun surları ve donanması sayesinde sağ çıktın; adın tarihe akıllı stratejist olarak geçti!' },
          { t: '⚔️ "Spartalıları tek başıma ikna ederim" deyip sur dışına çık.', puan: -1, sure: '9 saniye', sonuc: 'Spartalılar felsefi ikna pek sevmezmiş — bunu çok hızlı öğrendin!' },
          { t: '🎭 Tiyatroda Aristofanes\'in komedisini izleyip moral topla.', puan: 0, sonuc: 'Çok güldün ama kuşatma hâlâ sürüyor!' }
        ]
      }
    ],
    gercek: 'Antik Yunanlılar şarabı asla sek içmezdi; suyla karıştırmadan içenlere "kaba barbar" derlerdi. Ayrıca Atina\'da sevilmeyen politikacılar çömlek parçalarına isim yazılarak 10 yıl sürgüne gönderilirdi!'
  },
  {
    id: 'hk-viking', ad: 'MS 865: Viking Uzun Gemisinde', ik: '🛡️', yil: 'MS 865', yer: 'Kuzey Denizi',
    giris: 'Koca bir ejderha başlı Viking uzun gemisinde kürek başındasın. Deniz dev dalgalarla çalkalanıyor, Kaptan Björn ise baltasını bileyliyor!',
    adimlar: [
      {
        soru: '1. Karar: Kaptan Björn "Sis çöktü, İngiltere hangi tarafta?!" diye kükredi.',
        sec: [
          { t: '💎 Viking "Güneş Taşı" (kalsit kristali) ile bulutun arkasındaki Güneş\'i bul!', puan: 2, sonuc: 'Gerçek Viking teknolojisi! Björn seni baş kılavuz ilan etti ve bir maşrapa bal şarabı ikram etti.' },
          { t: '☝️ Parmağını yalayıp havaya kaldır, "şu taraf gibi" diye salla.', puan: -1, sure: '2 saat', sonuc: 'Gemiyi yanlışlıkla İzlanda yerine Kuzey Kutbu buzullarına sürdün; mürettebat seni soğuk suya indirdi!' },
          { t: '🐦 Kuşların uçtuğu yöne bakıp kıyı tahmini yap.', puan: 0, sonuc: 'İyi taktik ama martı balık peşindeymiş, 4 saat daire çizdiniz.' }
        ]
      },
      {
        soru: '2. Karar: Karaya çıktınız, akşam uzun evde ziyafet var. Kaptanın sakalı çorbasına değiyor.',
        sec: [
          { t: '🎶 Kaptanın cesaretini öven bir "Skald" (ozan) şiiri uydurup söyle!', puan: 2, sonuc: 'Tüm salon kalkanlarına vurup seni alkışladı; en iyi kürk pelerini sana verdiler!' },
          { t: '😂 "Kaptan sakalın çorbada yüzüyor" diye kahkaha at.', puan: -1, sure: '6 saniye', sonuc: 'Viking kültüründe sakal şakası ölümcül bir hobiymiş!' },
          { t: '🍖 Hiç konuşmadan kurutulmuş morina balığını kemir.', puan: 0, sonuc: 'Balık tahta kadar sertti ama en azından sağ salim akşamı atlattın.' }
        ]
      },
      {
        soru: '3. Karar: Önünde iki rota var: Yağma mı, yoksa "Miklagard" (İstanbul) ticareti mi?',
        sec: [
          { t: '⛵ Dinyeper Nehri\'nden aşağı inip İstanbul\'da Bizans\'ın Vareg Muhafızı ol!', puan: 2, sonuc: 'Dehasın! Altın maaşla Ayasofya\'da nöbet tuttun, hatta mermer korkuluğa rünik harflerle "Halvdan buradaydı" kazıdın!' },
          { t: '⛈️ "Ben fırtınada tek başıma Grönland\'a yüzerim" diye inat et.', puan: -1, sure: '3 dakika', sonuc: 'Kuzey Atlantik\'in +2 °C suyu bu iddiayı anında çürüttü!' },
          { t: '🐑 İzlanda\'da sakin bir koyun çiftliği kur.', puan: 0, sonuc: 'Huzurlu bir hayat ama komşun 40 km uzakta!' }
        ]
      }
    ],
    gercek: 'Ayasofya\'nın üst galerisindeki mermer korkulukta gerçekten 9. yüzyıldan kalma Viking rünik grafitisi ("Halvdan buradaydı") hâlâ durmaktadır!'
  },
  {
    id: 'hk-1453', ad: '1453: İstanbul Kuşatması & Şahi Topu', ik: '🏰', yil: '1453', yer: 'Konstantinopolis / İstanbul',
    giris: 'Mayıs 1453! Genç Sultan II. Mehmed\'in ordugâhındasın. Karşında 1.000 yıldır geçilemeyen dev surlar, yanında ise 8 metrelik Şahi topu duruyor!',
    adimlar: [
      {
        soru: '1. Karar: Haliç\'in ağzı dev bir zincirle kapalı. Gemiler içeri nasıl girecek?',
        sec: [
          { t: '🪵 Yağlanmış kızaklar döşeyip gemileri gece Kasımpaşa sırtlarından karadan yürüt!', puan: 2, sonuc: 'Sabah Bizans nöbetçileri Haliç\'te Osmanlı gemilerini görünce gözlerini ovuşturup "Biz rüya mı görüyoruz?!" dedi!' },
          { t: '✂️ "Ben koca demir zinciri testereyle keseyim" deyip sandalla yaklaş.', puan: -1, sure: '4 dakika', sonuc: 'Surlardan atılan Rum Ateşi sandalını anında mangala çevirdi!' },
          { t: '🏊 Gece yüzerek zincirin altından geçmeye çalış.', puan: 0, sonuc: 'Karşıya geçtin ama tek başına koca şehri alamadın, geri yüzdün.' }
        ]
      },
      {
        soru: '2. Karar: Dev Şahi topu ateşlendi, namlusu alev gibi kızgın! Sıradaki hamlen?',
        sec: [
          { t: '🫒 Namlu çatlamasın diye zeytinyağı sürüp 3 saat soğumasını bekle!', puan: 2, sonuc: 'Usta Urban bile seni tebrik etti! Top çatlamadı, ikinci atışta surda gedik açıldı.' },
          { t: '🪣 "Hemen soğusun" deyip kızgın tunç namluya buz gibi su dök!', puan: -1, sure: '2 saniye', sonuc: 'Termal şok! Dev tunç top karpuz gibi yarıldı — fizik dersini zor yoldan öğrendin!' },
          { t: '👂 Kulaklarını tıkamadan topun tam yanında bekle.', puan: 0, sonuc: 'Hayattasın ama önümüzdeki 3 hafta herkesi dudak okuyarak anlayacaksın.' }
        ]
      },
      {
        soru: '3. Karar: 29 Mayıs şafağı! Surlarda gedik açıldı. Görevin?',
        sec: [
          { t: '🚩 Disiplinli yeniçeri safıyla gedikten girip şehri ve Ayasofya\'yı koru!', puan: 2, sonuc: 'Ortaçağ kapandı, Yeniçağ açıldı! Sultan seni İstanbul\'un imar ekibine aldı!' },
          { t: '📱 "Şu anı hikâye atayım" deyip cebinden parlayan telefon çıkar.', puan: -1, sure: '15 saniye', sonuc: '"Büyücü! Elinde ışık kutusu var!" diye hem Osmanlı hem Bizans tarafı seni kovaladı!' },
          { t: '🍲 Ordugâhta kazanın başında kalıp askerlere sıcak çorba dağıt.', puan: 0, sonuc: 'Savaşa girmedin ama herkesin duasını aldın, güvenle hayattasın!' }
        ]
      }
    ],
    gercek: 'Şahi topu o kadar ağırdı ki 60 öküz ve 200 askerle çekiliyordu; her atıştan sonra çatlamaması için gerçekten zeytinyağıyla yağlanıp saatlerce soğutulurdu!'
  },
  {
    id: 'hk-ronesans', ad: '1504: Floransa\'da Leonardo\'nun Çırağı', ik: '🎨', yil: '1504', yer: 'Floransa, İtalya',
    giris: 'Leonardo da Vinci\'nin atölyesinde çıraksın! Bir köşede Mona Lisa gülümsüyor, diğer köşede ise "bununla uçacağız evlat" dediği ahşap kanat makinesi duruyor!',
    adimlar: [
      {
        soru: '1. Karar: Leonardo "Fiesole tepesinden şu kanatları sen bir dene bakalım!" dedi.',
        sec: [
          { t: '📐 "Üstat önce rüzgâr hızını ölçelim, şu kanada kuyruk ve paraşüt ekleyelim!"', puan: 2, sonuc: 'Leonardo defterine ayna yazısıyla "Bu çırak zehir gibi!" diye not düştü; güvenli iniş yaptın!' },
          { t: '🦅 "Ben kartal gibiyim üstat!" deyip kontrolsüzce uçurumdan atla.', puan: -1, sure: '7 saniye', sonuc: 'Newton yerçekimini henüz icat etmemişti ama yerçekimi yine de eksiksiz çalıştı!' },
          { t: '🎨 "Benim boya ezmem lazım üstat" deyip sıranı başka çırağa sal.', puan: 0, sonuc: 'Hayatta kaldın ama diğer çırak zeytin ağacına takılıp sana 3 ay küs kaldı.' }
        ]
      },
      {
        soru: '2. Karar: Mona Lisa tablosunun yanından geçerken elindeki ceviz yağı şişesi kaydı!',
        sec: [
          { t: '🤸 Refleksle havada şişeyi yakala, tuvale tek damla bile sıçratma!', puan: 2, sonuc: 'Sanat tarihini kurtardın! Mona Lisa bile sana hafifçe gülümsedi.' },
          { t: '🖌️ "Bıyık çizsem çok komik olur" deyip fırçayı tabloya dokundur.', puan: -1, sure: '12 saniye', sonuc: 'Leonardo elindeki pergelle seni Floransa sınırına kadar kovaladı — 400 yıl erken Marcel Duchamp oldun!' },
          { t: '😅 "Ben yapmadım Michelangelo yaptı" diye suçu rakip atölyeye at.', puan: 0, sonuc: 'İki dahi meydanda 2 saat tartıştı, sen arada sıvıştın.' }
        ]
      },
      {
        soru: '3. Karar: Medici ailesi akşam sarayda ziyafet veriyor. Dikkat et, Rönesans İtalya\'sında zehir modası var!',
        sec: [
          { t: '🍞 Sadece taze pişmiş ekmek, kabuklu meyve ve herkesin içtiği sürahiden su iç!', puan: 2, sonuc: 'Rönesans\'ın entrikalarından çiziksiz çıktın; kendi atölyeni açacak kadar altın kazandın!' },
          { t: '🍷 Borgia ailesinin "sana özel hazırladık" dediği mor kadehi tek dikişte bitir.', puan: -1, sure: '4 dakika', sonuc: 'Tarih dersinden hatırlamalıydın: Borgia ailesinden gelen "özel ikram" asla masum olmaz!' },
          { t: '🎵 Yemek yemeyip lavta çalarak geceyi geçir.', puan: 0, sonuc: 'Aç kaldın ama zehirlenmeden eve döndün.' }
        ]
      }
    ],
    gercek: 'Leonardo da Vinci\'nin 1485\'te çizdiği piramit paraşüt tasarımı, 2000 yılında modern malzemelerle test edildi ve gerçekten kusursuz biçimde yumuşak iniş yaptı!'
  },
  {
    id: 'hk-mogol', ad: '1240: Moğol Bozkırı & Örtoo Posta Ağı', ik: '🐎', yil: '1240', yer: 'Orta Asya Bozkırı',
    giris: 'Cengiz Han\'ın imparatorluğunda "Yam" (Örtoo) hızlı posta ulağısın! Boynunda altın Paiza (geçiş tableti) var; mesajı 3 günde Karakurum\'a yetiştirmen şart!',
    adimlar: [
      {
        soru: '1. Karar: Atın 40 km koştuktan sonra yoruldu. Bozkırda ileride bir Yam menzil istasyonu var.',
        sec: [
          { t: '🏅 Altın Paiza\'yı gösterip 10 saniyede taze at ve kurutulmuş et (borts) değiştir!', puan: 2, sonuc: 'Moğol Express! Günde 300 km hızla dünyanın ilk "aynı gün kargo" rekorunu kırdın!' },
          { t: '😴 "Biraz kestireyim, yarın giderim" deyip çimenlere uzan.', puan: -1, sure: '6 saat', sonuc: 'İmparatorluk mesajını geciktirmek Moğol yasasında (Yasa) affedilmezdi!' },
          { t: '🐎 Aynı yorgun atla yavaş yavaş yürüyerek devam et.', puan: 0, sonuc: 'At sana sitemkâr bakışlar attı, bir gün geç kaldın ama yırttın.' }
        ]
      },
      {
        soru: '2. Karar: Gece soğuk çöktü, bir Moğol obasına (yurt/çadır) misafir oldun. İçeri girerken neye dikkat edersin?',
        sec: [
          { t: '👣 Çadırın ahşap eşiğine ASLA basmadan üzerinden atlayıp geç!', puan: 2, sonuc: 'Gelenekleri biliyorsun! Ev sahibi sana sıcak kımız ikram edip en iyi keçeyi serdi.' },
          { t: '🥾 Tam kapı eşiğinin üstünde zıplayıp çizmelerinin çamurunu silkele.', puan: -1, sure: '15 saniye', sonuc: 'Moğol geleneğinde çadır eşiğine basmak ağır hakaretti — dışarıda -15 °C\'de geceledin!' },
          { t: '🥛 İkram edilen kımızı tek yudumda dikip yüzünü ekşit.', puan: 0, sonuc: 'Hafif ekşi geldi ama en azından kimseyi kızdırmadın.' }
        ]
      },
      {
        soru: '3. Karar: Büyük Han\'ın huzuruna çıktın. Mesajı teslim etme anı!',
        sec: [
          { t: '📜 İki elinle saygıyla mühürlü fermanı sunup net ve kısa rapor ver!', puan: 2, sonuc: 'Mükemmel! Han seni baş ulak yaptı ve sana 50 bozkır atı hediye etti!' },
          { t: '💬 "Hanım biraz uzun hikâye, otur anlatayım" diye muhabbete gir.', puan: -1, sure: '1 dakika', sonuc: 'Han\'ın sabrı bozkır fırtınasından kısaydı!' },
          { t: '🙇 Sessizce mektubu bırakıp geri geri çık.', puan: 0, sonuc: 'Biraz utangaçtın ama görev başarıyla tamamlandı!' }
        ]
      }
    ],
    gercek: 'Moğol İmparatorluğu\'nun "Yam" posta sisteminde her 30–40 km\'de bir taze at istasyonu vardı; ulaklar günde 300–400 km yol alarak 19. yüzyıl telgrafına kadar dünyanın en hızlı haberleşme ağını kurdu!'
  },
  {
    id: 'hk-titanik', ad: '1912: Titanik\'in İlk ve Son Gecesi', ik: '🚢', yil: '14 Nisan 1912', yer: 'Kuzey Atlantik',
    giris: 'Saat 23:40! "Asla batmaz" denen dev gemi Titanik\'in güvertesindesin. Az önce hafif bir sarsıntı oldu ve koridorda buz parçaları yuvarlanıyor!',
    adimlar: [
      {
        soru: '1. Karar: Yanındaki zengin beyefendi "Canım ufak bir buz, viskimi bitireyim" diyor. Sen?',
        sec: [
          { t: '🧥 Anında en kalın paltonu ve can yeleğini kapıp ÜST GÜVERTEYE filikalara koş!', puan: 2, sonuc: 'İlk filikalar yarı boş kalkıyordu — erken davrandığın için anında yer buldun!' },
          { t: '🎻 "Müzik çok güzel, 20 dakika daha dinleyeyim" deyip salonda otur.', puan: -1, sure: '45 dakika', sonuc: 'Gemi 2 saat 40 dakikada battı; son dakikada filika kalmamıştı!' },
          { t: '🧳 "Bavulumu ve tüm ayakkabılarımı almadan çıkmam" deyip kamaraya dön.', puan: 0, sonuc: 'Kamaraya su dolmuştu; ayakkabıları bırakıp son anda güverteye fırladın.' }
        ]
      },
      {
        soru: '2. Karar: Filikaya binmek üzeresin ama su sıcaklığı -2 °C. Ne yapıyorsun?',
        sec: [
          { t: '🛶 Görevlinin talimatıyla filikaya oturup kürek çekmeye yardım et, gemiden uzaklaş!', puan: 2, sonuc: 'Gemi batarken oluşan girdaptan uzaklaştınız! Uzakta Carpathia gemisinin ışıkları belirdi!' },
          { t: '🏊 "Ben yüzme şampiyonuyum, buzdağına kadar yüzerim" deyip suya atla.', puan: -1, sure: '8 dakika', sonuc: '-2 °C Kuzey Atlantik suyunda Olimpiyat şampiyonu olsan bile hipotermi şaka yapmaz!' },
          { t: '🚪 Yüzen büyük bir ahşap kapı aramaya koyul.', puan: 0, sonuc: 'Kapıyı buldun, üstüne de sığdın — hem de İKİ KİŞİLİK yer varmış meğer!' }
        ]
      },
      {
        soru: '3. Karar: Filikada soğuktan titriyorsun, sabah olmak üzere.',
        sec: [
          { t: '🔦 Cep feneriyle veya ıslıkla kurtarma gemisi Carpathia\'ya işaret ver!', puan: 2, sonuc: 'New York\'a sağ salim ulaştın! Tarihin en ünlü deniz kazasından akıllıca kurtuldun!' },
          { t: '🧊 Hatıra olsun diye buzdağından parça koparmaya çalış.', puan: -1, sure: '20 saniye', sonuc: 'Filika devrildi — hatıra koleksiyonculuğunun en yanlış zamanıydı!' },
          { t: '🧣 Filikadakilerle yan yana sokulup vücut ısısını koru.', puan: 0, sonuc: 'Üşüdün ama sabaha sağlam çıktın!' }
        ]
      }
    ],
    gercek: 'Titanik\'te 2.224 kişi vardı ama filikalar sadece 1.178 kişilikti — üstelik ilk başta kimse geminin batacağına inanmadığı için ilk filikalar yarı boş indirildi!'
  },
  {
    id: 'hk-londra', ad: '1854: Sanayi Devrimi Londra\'sı', ik: '🏭', yil: '1854', yer: 'Soho, Londra',
    giris: 'Buharlı trenler gürlüyor, kömür dumanından gökyüzü gri! Soho mahallesinde gizemli bir kolera salgını patlak verdi ve doktorlar "kötü kokudan bulaşıyor" diyor!',
    adimlar: [
      {
        soru: '1. Karar: Çok susadın. Sokakta meşhur Broad Street su tulumbası var, yanında da çay ocağı.',
        sec: [
          { t: '🫖 Suyu en az 5 dakika kaynatıp çay yap, asla çiğ tulumba suyu içme!', puan: 2, sonuc: 'Kaynar su bakterileri öldürdü! Modern hijyen bilginle 1854 Londra\'sında şov yaptın.' },
          { t: '🚰 "Buz gibi tulumba suyu oh mis!" deyip iki maşrapa dik.', puan: -1, sure: '14 saat', sonuc: 'Dr. John Snow\'un meşhur kirli su tulumbasından içtin — haritadaki kırmızı noktalardan biri oldun!' },
          { t: '🥛 Sokakta açıkta satılan ılık sütten iç.', puan: 0, sonuc: 'Pastörizasyon henüz 10 yıl uzaktaydı; miden biraz isyan etti ama atlattın.' }
        ]
      },
      {
        soru: '2. Karar: Sokakta Dr. John Snow elinde haritayla dolaşıyor ve tulumbanın kolunu sökmek istiyor!',
        sec: [
          { t: '🗺️ Haritayı incele, tüm hastaların bu tulumbadan su içtiğini doğrulayıp kolu sökmeye yardım et!', puan: 2, sonuc: 'Tıp tarihine geçtin! Modern epidemiyoloji (salgın bilimi) tam o gün doğdu!' },
          { t: '🦨 "Doktor boş ver, burunlara lavanta tıkayalım koku geçsin!" de.', puan: 0, sonuc: 'Güzel koktun ama salgın devam etti; neyse ki sen çay içiyordun.' },
          { t: '🌫️ Thames Nehri\'nin kenarında derin nefes egzersizi yap.', puan: -1, sure: '1 gün', sonuc: '1850\'lerde Thames "Büyük Koku" dönemindeydi; su değil çorba gibiydi!' }
        ]
      },
      {
        soru: '3. Karar: Londra\'da geçimini nasıl sağlayacaksın?',
        sec: [
          { t: '⚙️ Yeni açılan demiryolu mühendislik atölyesinde telgraf ve buhar ustası ol!', puan: 2, sonuc: 'Sanayi Devrimi\'nin parlayan yıldızı oldun! 1863\'te açılan dünyanın ilk metrosuna bile ilk günden bindin!' },
          { t: '🧹 14 saatlik dumandan göz gözü görmeyen baca temizliği işine gir.', puan: -1, sure: '2 hafta', sonuc: 'Kömür isi ciğerlerini mahvetti — Charles Dickens romanına konu oldun!' },
          { t: '📰 Sokakta "Son Dakika!" diye gazete sat.', puan: 0, sonuc: 'Sesin kısıldı ama kira parası çıktı!' }
        ]
      }
    ],
    gercek: '1854\'te Dr. John Snow ölümleri Londra haritasına işaretleyip hepsinin Broad Street tulumbası etrafında toplandığını kanıtladı ve tulumbanın kolunu söktürerek salgını durdurdu!'
  },
  {
    id: 'hk-sumer', ad: 'MÖ 2100: Sümer Okulu (Edubba) & İlk Tablet', ik: '🪵', yil: 'MÖ 2100', yer: 'Ur / Uruk, Mezopotamya',
    giris: 'Sümer\'de "Tablet Evi" (Edubba) okulundasın! Öğretmenin elinde kamış değnek, önünde ıslak kil tablet var. Bugün çivi yazısı sınavındasın!',
    adimlar: [
      {
        soru: '1. Karar: Öğretmen "30 çuval arpanın hesabını kile kazı!" dedi ama yazım hatası yaptın.',
        sec: [
          { t: '💧 Kil henüz ıslakken parmağınla düzeltip yeniden düzgünce bas!', puan: 2, sonuc: 'İşte Sümer "Ctrl+Z"si! Öğretmen düzgün yazını görünce sana "Başkâtip adayı" dedi.' },
          { t: '🔥 "Kuruyunca belli olmaz" deyip yamuk tableti hemen güneşte pişir.', puan: -1, sure: '20 dakika', sonuc: 'Tablette 30 çuval yerine 3.000 çuval yazmışsın; tapınak vergi memuru seni arıyor!' },
          { t: '🐶 "Tabletimi köpek yedi hocam" bahanesini uydur.', puan: 0, sonuc: 'Tarihin ilk "ödevimi köpek yedi" bahanesini icat ettin ama öğretmen yemedi — akşama kadar 50 tablet kopyaladın!' }
        ]
      },
      {
        soru: '2. Karar: Tüccar Ea-nasir sana "1. kalite bakır külçe" satmak istiyor. Ne yaparsın?',
        sec: [
          { t: '🔍 Önce bakırı kazıyıp rengini ve ağırlığını kontrol et, kalitesizse kil tablete şikâyet yaz!', puan: 2, sonuc: 'Tebrikler! Tarihin bilinen en eski müşteri şikâyet mektubunu yazdın — 3.750 yıl sonra British Museum\'da sergilenecek!' },
          { t: '💰 "İyi adama benziyor" deyip bakmadan bütün gümüşünü peşin ver.', puan: -1, sure: '1 saat', sonuc: 'Ea-nasir sana bakır diye boyalı taş sattı! Sümer\'de "iade politikası" yoktu!' },
          { t: '🏺 Bakır yerine 5 küp arpa birası takas et.', puan: 0, sonuc: 'Zarardan döndün, üstelik akşam komşularla ziyafet çektin.' }
        ]
      },
      {
        soru: '3. Karar: Okuldan mezun oldun! Kariyer seçimin?',
        sec: [
          { t: '⭐ Ziggurat\'ın tepesinde yıldızları ve 60\'lık sayı sistemini kaydeden astronom-kâtip ol!', puan: 2, sonuc: 'Harika! 1 saatin 60 dakika, 1 dairenin 360 derece olması tam da senin tuttuğun tabletlerin mirası!' },
          { t: '🐊 Fırat\'ta yüzme yarışı düzenle.', puan: -1, sure: '5 dakika', sonuc: 'Bahar taşkınında Fırat\'ın akıntısı seni doğrudan Basra Körfezi\'ne postaladı!' },
          { t: '🍺 Kendi arpa ekmeği fırınını aç.', puan: 0, sonuc: 'Zengin olmadın ama bütün mahalle seni çok seviyor!' }
        ]
      }
    ],
    gercek: 'MÖ 1750\'de Nanni adlı bir müşterinin tüccar Ea-nasir\'e "Bana kalitesiz bakır sattın, paramı iade et!" diye yazdığı kil tablet, insanlık tarihinin bilinen en eski müşteri şikâyetidir ve British Museum\'dadır!'
  },
  {
    id: 'hk-apollo', ad: '1969: Apollo 11 Ay\'a İniş (Son 30 Saniye!)', ik: '🚀', yil: '20 Temmuz 1969', yer: 'Sükûnet Denizi, Ay',
    giris: 'Ay Modülü Eagle\'ın içindesin! Yüzeye 150 metre kaldı, yakıt bitmek üzere ve bilgisayarda kırmızı "ALARM 1202!" ışığı yanıp sönüyor!',
    adimlar: [
      {
        soru: '1. Karar: Bilgisayar "1202" alarmı veriyor, yakıt 60 saniyelik! Ne yapıyorsun?',
        sec: [
          { t: '🎧 Houston\'a sor: "1202 önemli değil, bilgisayar öncelikli işleri sürdürüyor — İNİŞE DEVAM!"', puan: 2, sonuc: 'Margaret Hamilton\'ın efsanevi yazılımı çalıştı! Bilgisayar gereksiz görevleri atıp inişi kurtardı!' },
          { t: '🔌 "Bir açıp kapayayım düzelir" deyip ana bilgisayarı kapat.', puan: -1, sure: '9 saniye', sonuc: 'Ay\'a inerken Windows yeniden başlatması yapmak pek iyi fikir değilmiş!' },
          { t: '🎲 Rastgele iki düğmeye basıp dua et.', puan: 0, sonuc: 'Kabinin ışıkları disko gibi yanıp söndü ama motorlar hâlâ çalışıyor!' }
        ]
      },
      {
        soru: '2. Karar: Tam inecekken aşağıda futbol sahası büyüklüğünde kayalık krater gördün! 25 saniye yakıt kaldı!',
        sec: [
          { t: '🕹️ Manuel kontrole geç, kraterin üstünden süzülüp 100 metre ilerideki düzlüğe yumuşakça in!', puan: 2, sonuc: '"Houston, Sükûnet Üssü burası. Kartal indi!" — Depoda tam 17 saniyelik yakıt kalmıştı!' },
          { t: '🪨 "Kayaların üstüne park ederiz ya, ne olacak" deyip dikine in.', puan: -1, sure: '5 saniye', sonuc: 'Ay Modülü yan yattı — Ay\'dan çekici çağırmak 384.000 km olduğu için biraz pahalı!' },
          { t: '🔄 Hemen iptal düğmesine basıp Dünya\'ya dön.', puan: 0, sonuc: 'Hayatta kaldın ama 600 milyon izleyici ekran başında "tam inecektik be!" diye iç çekti.' }
        ]
      },
      {
        soru: '3. Karar: Merdivenden indin, Ay tozuna ilk adımı atıyorsun. Tarihe geçecek ilk sözün?',
        sec: [
          { t: '🌕 "Bir insan için küçük, insanlık için dev bir adım!" deyip numune topla ve güvenle dön!', puan: 2, sonuc: 'Efsane! 21,5 kg Ay taşıyla Dünya\'ya döndün, tarihin en büyük keşif görevini tamamladın!' },
          { t: '💨 "Şu kaskı bir açayım da Ay havası nasıl kokuyor bakayım."', puan: -1, sure: '1 saniye', sonuc: 'Ay\'da hava yok! Neyse ki astronot eğitiminde bunu ilk derste anlatıyorlardı!' },
          { t: '⛳ Cebinden golf topu çıkarıp Ay\'da 300 metrelik vuruş yap.', puan: 0, sonuc: 'Gerçekten de Apollo 14\'te Alan Shepard bunu yaptı — top hâlâ Ay\'da duruyor!' }
        ]
      }
    ],
    gercek: 'Apollo 11 Ay\'a inerken gerçekten "1202" bilgisayar aşırı yük alarmı çaldı; yazılım mühendisi Margaret Hamilton\'ın tasarladığı önceliklendirme sistemi sayesinde iniş sadece 25 saniye yakıt kalmışken başarıyla tamamlandı!'
  }
];
