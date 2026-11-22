// 🍵🧭 Yemek, Kelime ve İcatların Dünya Yolculuğu — Genişleme Paketi (+36 yeni hikâye → toplam 72!)
'use strict';
(() => {
  const L = window.ATLAS_YAYILIS;
  if (!L) return;
  L.push(
    // ---- +18 Yeni Yemek & İçecek ----
    {
      id: 'yy-baklava', ad: 'Baklava', ik: '🍯', kat: 'yemek', ll: [37.06, 37.38],
      koken: 'Orta Asya Yufka Geleneği & Osmanlı Sarayı / Gaziantep',
      isim: 'Eski Türkçede "kat kat yufka / bağlamak" anlamına gelen "baklağu / baklağı" sözcüğünden gelir; Osmanlı saray mutfağında (Topkapı!) 40 kat incecik açılan bugünkü şahesere dönüştü.',
      yolculuk: 'Osmanlı topraklarından Yunanistan, Balkanlar, Levant, Mısır ve Avrupa\'ya yayıldı; Gaziantep\'in fıstıklı baklavası AB tescili alan ilk Türk ürünü oldu.',
      ilginc: 'Osmanlı\'da Ramazan\'ın 15. günü Yeniçerilere tepsi tepsi baklava dağıtılan "Baklava Alayı" adlı görkemli bir tören düzenlenirdi!',
      pts: [[41.0, 69.0], [37.06, 37.38], [41.0, 29.0], [37.9, 23.7], [48.2, 16.3]],
      w: 'Baklava'
    },
    {
      id: 'yy-kebap', ad: 'Kebap ve Döner', ik: '🥙', kat: 'yemek', ll: [40.18, 29.06],
      koken: 'Anadolu (Bursa — Döner, 19. yy) & Orta Doğu',
      isim: 'Arapça "kebab" (ateşte kızartılmış et) ve Türkçe "dönmek" fiilinden "döner"! Yunanistan\'da "gyros" (dönen!), Meksika\'da Lübnanlı göçmenlerin taşıdığı "tacos al pastor" aynı dikey şişten doğdu!',
      yolculuk: '19. yüzyılda Bursa\'da İskender Efendi ve Kastamonu\'da Hamdi Usta\'nın yatay şişi dikey çevirmesiyle doğan döner, 1970\'lerde Berlin üzerinden tüm Avrupa\'nın en popüler sokak lezzeti oldu.',
      ilginc: 'Meksika\'nın dünyaca ünlü "Tacos al Pastor"u, 1920\'lerde Osmanlı/Lübnan göçmenlerinin dikey döner şişini Meksika\'ya götürmesiyle icat edilmiştir!',
      pts: [[39.9, 41.2], [40.18, 29.06], [41.0, 29.0], [52.5, 13.4], [19.4, -99.1]],
      w: 'Doner kebab'
    },
    {
      id: 'yy-pizza', ad: 'Pizza', ik: '🍕', kat: 'yemek', ll: [40.85, 14.27],
      koken: 'Napoli, İtalya (18. – 19. yy)',
      isim: 'Latince "pinsa" (bastırılmış yassı ekmek) ve Yunanca "pitta" (pide!) ile aynı ailedendir. 1889\'da Kraliçe Margherita için İtalyan bayrağının renkleriyle (domates-mozzarella-fesleğen) "Pizza Margherita" yapıldı.',
      yolculuk: 'Napoli\'nin fakir liman işçilerinin sokak yemeğiydi; 1900\'lerde İtalyan göçmenlerle New York ve Chicago\'ya taşınıp oradan tüm gezegene yayıldı.',
      ilginc: 'Amerika kıtası keşfedilip domates İtalya\'ya gelmeden önce Napoli\'de domates soslu pizza diye bir şey yoktu — pizza aslında iki kıtanın buluşmasıdır!',
      pts: [[40.85, 14.27], [40.71, -74.0], [41.87, -87.6], [51.5, -0.1], [35.6, 139.7]],
      w: 'History of pizza'
    },
    {
      id: 'yy-susi', ad: 'Suşi', ik: '🍣', kat: 'yemek', ll: [35.68, 139.76],
      koken: 'Güneydoğu Asya (Mekong) → Japonya (Edo / Tokyo)',
      isim: 'Japonca "suşi" aslında "çiğ balık" değil, "ekşi pirinç" demektir! Başlangıçta balığı bozulmadan saklamak için tuzlu fermente pirince sararlardı ve pirinci atıp sadece balığı yerlerdi.',
      yolculuk: '1820\'lerde Tokyo\'da (Edo) Hanaya Yohei pirinci sirkeyle hızla tatlandırıp taze balıkla birleştirerek bugünkü hızlı "nigiri suşi"yi icat etti; 1960\'larda Kaliforniya\'dan dünyaya yayıldı.',
      ilginc: 'Ünlü "California Roll" (avokadolu ve pirinci dışta suşi), 1960\'larda yosun görünümüne alışamayan Amerikalılar için Los Angeles\'ta icat edilip Japonya\'ya geri ihraç edilmiştir!',
      pts: [[15.0, 105.0], [35.0, 135.7], [35.68, 139.76], [34.05, -118.2], [51.5, -0.1]],
      w: 'History of sushi'
    },
    {
      id: 'yy-kori', ad: 'Köri (Curry)', ik: '🍛', kat: 'yemek', ll: [13.08, 80.27],
      koken: 'Güney Hindistan (Tamil Nadu)',
      isim: 'Tamil dilindeki "kari" (sos / baharatlı yemek) sözcüğünü 17. yüzyılda İngiliz tüccarlar "curry" diye yazdı ve tüm Hint baharat karışımlarının ortak adına dönüştürdü.',
      yolculuk: 'İngiliz donanması köri tozunu 19. yüzyılda Japonya\'ya götürdü; Japonlar bunu tatlı-kıvamlı "Kare Raisu"ya çevirip ulusal yemeklerinden biri yaptı!',
      ilginc: 'İngiltere\'de "Chicken Tikka Masala" o kadar popülerleşti ki 2001\'de İngiltere Dışişleri Bakanı onu resmen "Britanya\'nın gerçek ulusal yemeği" ilan etti!',
      pts: [[13.08, 80.27], [19.0, 72.8], [51.5, -0.1], [35.6, 139.7], [13.7, 100.5]],
      w: 'Curry'
    },
    {
      id: 'yy-avokado', ad: 'Avokado', ik: '🥑', kat: 'yemek', ll: [18.5, -97.4],
      koken: 'Meksika — Puebla (~MÖ 5000)',
      isim: 'Azteklerin Nahuatl dilindeki "āhuacatl" sözcüğü İspanyolcaya "aguacate", İngilizceye "avocado" olarak geçti. Sosu "guacamole" de Aztekçe "āhuacamolli" (avokado sosu) demektir!',
      yolculuk: 'Meksika ve Orta Amerika\'dan 19. yüzyılda Kaliforniya, Güney Afrika, İsrail ve Akdeniz\'e (Alanya / Gazipaşa!) yayıldı.',
      ilginc: 'Avokadonun devasa çekirdeği aslında Buzul Çağı\'nda yaşayan DEV TEMBEL HAYVANLARIN ve mamutların meyveyi bütün yutup çekirdeğini dağıtması için evrimleşmiştir — onlar tükenince avokadoyu insanlar kurtardı!',
      pts: [[18.5, -97.4], [34.0, -118.2], [-12.0, -77.0], [36.5, 32.0], [36.7, -4.4]],
      w: 'Avocado'
    },
    {
      id: 'yy-karpuz', ad: 'Karpuz', ik: '🍉', kat: 'yemek', ll: [15.5, 32.5],
      koken: 'Kuzeydoğu Afrika / Sudan & Kalahari (~MÖ 3000)',
      isim: 'Farsça "xarbūza" (eşek hıyarı / iri kavun!) sözcüğü Türkçeye "karpuz" olarak geçti. Antik Mısır mezar duvarlarında 4.000 yıllık karpuz resimleri ve Tutankamon\'un mezarında karpuz çekirdekleri bulundu!',
      yolculuk: 'Nil Vadisi\'nden Akdeniz\'e, 10. yüzyılda Çin\'e (bugün dünyanın en büyük karpuz üreticisi!), Anadolu\'ya (Diyarbakır!) ve 16. yüzyılda Amerika\'ya yayıldı.',
      ilginc: '5.000 yıl önceki ilk karpuzlar bugünkü gibi kırmızı ve tatlı değil, bembeyaz, acı ve sertti — çöl yolcuları onu tatlı olduğu için değil, aylarca bozulmayan doğal SU MATARASI olarak taşırdı!',
      pts: [[15.5, 32.5], [25.7, 32.6], [37.9, 40.2], [35.0, 114.0], [33.7, -84.4]],
      w: 'Watermelon'
    },
    {
      id: 'yy-uzum', ad: 'Üzüm ve Pekmez', ik: '🍇', kat: 'yemek', ll: [41.7, 44.8],
      koken: 'Güney Kafkasya & Doğu Anadolu (~MÖ 6000)',
      isim: 'Eski Türkçede "üz-" (koparmak/salkım) kökünden "üzüm" gelir. Gürcistan ve Anadolu\'da 8.000 yıllık dev toprak küplerde bilinen en eski üzüm şırası ve fermantasyon izleri bulundu!',
      yolculuk: 'Kafkasya ve Anadolu\'dan Fenike ve Yunan gemileriyle İtalya, Fransa, İspanya\'ya; 16. yüzyılda İspanyollarla Şili, Arjantin ve Kaliforniya\'ya taşındı.',
      ilginc: 'Anadolu, 1.200\'den fazla yerli üzüm çeşidiyle dünyanın en zengin asma gen merkezlerinden biridir!',
      pts: [[41.7, 44.8], [38.6, 34.8], [37.9, 23.7], [44.8, -0.5], [-33.4, -70.6]],
      w: 'Grape'
    },
    {
      id: 'yy-cilek', ad: 'Çilek (İki Kıtanın Melezi)', ik: '🍓', kat: 'yemek', ll: [48.4, -4.5],
      koken: 'Fransa — Brest (1750\'ler: Şili + Kuzey Amerika çileğinin melezi!)',
      isim: 'Bugün yediğimiz iri bahçe çileği doğada kendiliğinden yoktu! 1714\'te Fransız casus Amédée Frézier Şili\'den iri beyaz çilek getirdi; Fransa\'da Kuzey Amerika çileğiyle yan yana ekilince doğal melezleme oldu!',
      yolculuk: 'Brest (Fransa) bahçelerinden 18. yüzyılda tüm Avrupa\'ya, Osmanlı bahçelerine (Osmanlı çileği!) ve dünyaya yayıldı.',
      ilginc: 'Çilek, çekirdeklerini (yaklaşık 200 minik gerçek meyve!) içinde değil DIŞ YÜZEYİNDE taşıyan neredeyse tek meyvedir!',
      pts: [[-36.8, -73.0], [37.5, -77.4], [48.4, -4.5], [41.0, 29.0], [35.6, 139.7]],
      w: 'Strawberry'
    },
    {
      id: 'yy-sarimsak', ad: 'Sarımsak', ik: '🧄', kat: 'yemek', ll: [42.0, 72.0],
      koken: 'Orta Asya — Kırgızistan / Tanrı Dağları (~MÖ 4000)',
      isim: 'Eski Türkçede "sarmusak" olan adı bugünkü "sarımsak"a dönüştü. İngilizce "garlic" ise Eski İngilizcede "mızrak pırasası" (gar-leac) demektir!',
      yolculuk: 'Orta Asya\'dan Sümer\'e ve Antik Mısır\'a ulaştı; piramit işçilerine güç vermesi için her gün sarımsak dağıtılırdı — hatta tarihteki ilk işçi grevlerinden biri sarımsak tayını kesilince çıktı!',
      ilginc: 'Antik Yunan\'da Olimpiyat atletleri yarıştan önce enerji ve dayanıklılık için çiğ sarımsak çiğnerdi — tarihin bilinen ilk doğal "performans artırıcısı"ydı!',
      pts: [[42.0, 72.0], [31.3, 45.6], [30.0, 31.2], [37.9, 23.7], [41.4, 33.8]],
      w: 'Garlic'
    },
    {
      id: 'yy-sogan', ad: 'Soğan', ik: '🧅', kat: 'yemek', ll: [38.5, 68.8],
      koken: 'Orta Asya & İran Platosu (~MÖ 5000)',
      isim: 'İngilizce "onion" Latince "unio" (tek parça/inci) sözcüğünden gelir. Antik Mısırlılar soğanı iç içe geçmiş halkaları yüzünden SONSUZLUĞUN sembolü sayıp yemin ederken ellerinde tutarlardı!',
      yolculuk: 'Orta Asya\'dan tüm Avrasya\'ya, Roma mutfaklarıyla Avrupa\'ya ve Kolomb\'la 1493\'te Amerika\'ya yayıldı.',
      ilginc: 'Soğanı keserken gözümüzün yaşarması aslında bitkinin kendisini kemirgenlerden korumak için salgıladığı sülfürlü bir savunma gazıdır!',
      pts: [[38.5, 68.8], [30.0, 31.2], [41.9, 12.5], [48.8, 2.3], [19.4, -99.1]],
      w: 'Onion'
    },
    {
      id: 'yy-mercimek', ad: 'Mercimek (Merceğin Babası)', ik: '🥣', kat: 'yemek', ll: [37.2, 38.8],
      koken: 'Güneydoğu Anadolu & Suriye (~MÖ 9000)',
      isim: 'Biliyor muydun: Gözlük ve teleskoptaki **"MERCEK" (İngilizce "lens")** kelimesi adını Latince mercimek ("lenticula") tanesinin dışbükey şeklinden alır!',
      yolculuk: 'Tarımın en ilk günlerinde buğdayla birlikte evcilleştirildi; Antik Mısır, Yunan, Roma ve Hindistan (dal!) mutfaklarının protein temeli oldu.',
      ilginc: 'Arkeologlar Göbekli Tepe ve Çayönü çevresinde 10.000 yıllık yanmış mercimek taneleri buldu — yani mercimek çorbası insanlığın en eski sıcak yemeklerinden biridir!',
      pts: [[37.2, 38.8], [30.0, 31.2], [37.9, 23.7], [28.6, 77.2], [41.9, 12.5]],
      w: 'Lentil'
    },
    {
      id: 'yy-bal', ad: 'Bal', ik: '🍯', kat: 'yemek', ll: [39.5, -0.8],
      koken: 'İspanya (8.000 yıllık kaya resmi) & Anadolu / Mısır',
      isim: 'Şeker kamışı bilinmeden önce 10.000 yıl boyunca insanlığın tek tatlı kaynağı baldı! İspanya\'daki Örümcek Mağarası\'nda 8.000 yıl önce ağaçtan bal toplayan insan resmi vardır.',
      yolculuk: 'Antik Mısır\'da kovanlar Nil Nehri boyunca teknelerle çiçeklerin açtığı yerlere taşınırdı — tarihin ilk gezgin arıcılığı!',
      ilginc: 'Bal, doğru saklandığında ASLA BOZULMAYAN tek doğal gıdadır: 3.000 yıllık Antik Mısır mezarlarından çıkarılan kapalı bal küpleri bugün bile yenebilir durumdaydı!',
      pts: [[39.5, -0.8], [30.0, 31.2], [37.2, 28.4], [37.9, 23.7], [48.8, 2.3]],
      w: 'Honey'
    },
    {
      id: 'yy-tarcin', ad: 'Tarçın', ik: '🪵', kat: 'yemek', ll: [7.8, 80.7],
      koken: 'Sri Lanka / Seylan (~MÖ 2000)',
      isim: 'Farsça "dâr-çînî" (Çin ağacı!) Türkçeye "tarçın" oldu. Antik Mısır\'da mumyalamada, Roma\'da ise cenaze tütsüsünde altından değerli bir lükstü.',
      yolculuk: 'Arap tüccarlar tarçının Sri Lanka\'dan geldiğini 2.000 yıl boyunca Avrupa\'dan gizledi; 1505\'te Portekizliler adayı bulunca baharat savaşları başladı.',
      ilginc: 'İmparator Neron\'un eşinin cenazesinde Roma\'nın 1 yıllık tüm tarçın stoğunu yaktığı anlatılır!',
      pts: [[7.8, 80.7], [12.8, 45.0], [30.0, 31.2], [41.9, 12.5], [38.7, -9.1]],
      w: 'Cinnamon'
    },
    {
      id: 'yy-karabiber', ad: 'Karabiber', ik: '🫑', kat: 'yemek', ll: [11.2, 75.8],
      koken: 'Güney Hindistan — Malabar Kıyısı (~MÖ 2000)',
      isim: 'Sanskritçe "pippali" sözcüğü Yunanca "peperi", Latince "piper", Türkçe "biber" ve İngilizce "pepper" olarak neredeyse tüm dilleri fethetti!',
      yolculuk: 'Hindistan\'dan Kızıldeniz ve İskenderiye yoluyla Roma\'ya, Venedik\'e ve tüm Avrupa\'ya taşındı; Osmanlı geçiş vergileri Avrupalıları Ümit Burnu\'nu keşfetmeye itti.',
      ilginc: 'MS 408\'de Vizigot Kralı Alarik Roma\'yı kuşattığında şehri yakmamak için fidye olarak altın ve gümüşün yanında tam 1.360 KİLOGRAM KARABİBER istedi!',
      pts: [[11.2, 75.8], [31.2, 29.9], [45.4, 12.3], [38.7, -9.1], [52.3, 4.9]],
      w: 'Black pepper'
    },
    {
      id: 'yy-vanilya', ad: 'Vanilya', ik: '🍨', kat: 'yemek', ll: [20.4, -97.3],
      koken: 'Meksika — Totonak & Aztekler',
      isim: 'İspanyolca "vainilla" (küçük kın / küçük fasulye kabuğu) sözcüğünden gelir. Aztekler sıcak çikolatalarına tat vermek için hep vanilya eklerdi!',
      yolculuk: '300 yıl boyunca Meksika dışında yetiştirilemedi (çünkü onu tozlaştıran arı sadece Meksika\'daydı!). 1841\'de 12 yaşındaki Edmond Albius elle tozlaştırmayı bulunca Madagaskar dünya lideri oldu.',
      ilginc: 'Bugün safrandan sonra dünyanın en pahalı 2. baharatıdır — her bir çiçek yılda sadece birkaç saat açar!',
      pts: [[20.4, -97.3], [40.4, -3.7], [-21.1, 55.5], [-18.9, 47.5], [48.8, 2.3]],
      w: 'Vanilla'
    },
    {
      id: 'yy-incir', ad: 'İncir', ik: '🍈', kat: 'yemek', ll: [31.8, 35.4],
      koken: 'Ürdün Vadisi & Batı Anadolu (~MÖ 9400)',
      isim: 'Farsça "encîr" Türkçeye "incir" diye geçti. Eriha yakınlarında 11.400 yıllık çekirdeksiz incir kalıntıları bulundu — buğdaydan bile önce evcilleştirilen ilk meyve olabilir!',
      yolculuk: 'Yakın Doğu\'dan Ege ve Aydın\'a (bugün kuru incirde dünya lideri!), Antik Yunan ve Roma\'ya, 18. yüzyılda İspanyollarla Kaliforniya\'ya ulaştı.',
      ilginc: 'Antik Atina\'da incir o kadar kıymetliydi ki şehirden izinsiz incir ihraç edenleri ihbar edenlere "sykophantes" (incir gösterici) denirdi — İngilizcedeki "sycophant" (dalkavuk) kelimesi buradan gelir!',
      pts: [[31.8, 35.4], [37.8, 27.8], [37.9, 23.7], [41.9, 12.5], [36.7, -119.7]],
      w: 'Fig'
    },
    {
      id: 'yy-corba', ad: 'Çorba (Sıcak Kâsenin Tarihi)', ik: '🍲', kat: 'yemek', ll: [35.0, 110.0],
      koken: 'Doğu Asya (20.000 yıllık ilk çömlek) & Orta Doğu',
      isim: 'Farsça "şorbâ" (tuzlu/sulu aş) Türkçeye "çorba", Balkan dillerine "čorba", Rusçaya "shurpa" olarak geçti! İngilizce "soup" ise ekmeği suyuna banmak ("sop") fiilinden gelir.',
      yolculuk: 'Çin\'de 20.000 yıl önce ateşe dayanıklı ilk kil çömleklerin icadıyla insanlar kemik ve tahılı kaynatıp çorba içmeye başladı; Osmanlı\'da şafakta açılan çorbacılar şehir kültürünün kalbi oldu.',
      ilginc: '"Restoran" (restaurant) kelimesi 18. yüzyıl Paris\'inde "güç tazeleyen et suyu çorbası" (bouillon restaurant) satan dükkânlardan doğmuştur!',
      pts: [[35.0, 110.0], [37.5, 40.0], [41.0, 29.0], [44.8, 20.4], [48.8, 2.3]],
      w: 'Soup'
    },

    // ---- +18 Yeni İcat & Kelime ----
    {
      id: 'yy-yazi', ad: 'Yazı (Çivi Yazısı)', ik: '📜', kat: 'icat', ll: [31.3, 45.6],
      koken: 'Uruk, Antik Sümer / Mezopotamya (~MÖ 3400)',
      isim: 'İlk yazılar şiir ya da tarih için değil, MUHASEBE için (kaç çuval arpa, kaç koyun teslim edildi!) ıslak kil tabletlere kamış ucuyla basılan çivi benzeri işaretlerle başladı.',
      yolculuk: 'Sümer\'den Elam, Akad, Babil, Asur ve Hititlere yayıldı; aynı yüzyıllarda Mısır\'da hiyeroglif, ardından Çin ve Maya yazıları bağımsız olarak doğdu.',
      ilginc: 'Yazı sayesinde insanlık bilgisi beyinlerin ömrünü aştı — tarihte adını bildiğimiz ilk insan bir kral değil, bir kil tabletteki "Kuşim" adlı arpa muhasebecisidir!',
      pts: [[31.3, 45.6], [30.0, 31.2], [40.0, 34.6], [36.1, 114.3], [17.2, -89.6]],
      w: 'History of writing'
    },
    {
      id: 'yy-asi', ad: 'Aşı (Çiçek Aşısı)', ik: '💉', kat: 'icat', ll: [41.0, 29.0],
      koken: 'Çin (~1000) → Osmanlı İstanbul (1717) → İngiltere (Jenner, 1796)',
      isim: 'İngilizce "vaccine" Latince inek ("vacca") sözcüğünden gelir (Edward Jenner 1796\'da inek çiçeğiyle modern aşıyı geliştirdi). Ama aşı fikrini Avrupa\'ya ilk tanıtan, 1717\'de İstanbul\'da Türk kadınlarının yaptığı çiçek aşısını görüp Londra\'ya yazan Lady Mary Wortley Montagu oldu!',
      yolculuk: 'Çin ve Osmanlı\'daki "variolasyon" uygulamasından İngiltere\'ye, 1885\'te Pasteur\'ün kuduz aşısına ve 1980\'de çiçek hastalığının yeryüzünden tamamen silinmesine ulaştı.',
      ilginc: 'Çiçek hastalığı, insanlığın aşı sayesinde Dünya\'dan %100 silmeyi başardığı tarihteki ilk ve en ölümcül hastalıktır!',
      pts: [[35.0, 110.0], [41.0, 29.0], [51.5, -0.1], [48.8, 2.3], [40.7, -74.0]],
      w: 'History of vaccination'
    },
    {
      id: 'yy-penisilin', ad: 'Penisilin (İlk Antibiyotik)', ik: '💊', kat: 'icat', ll: [51.5, -0.17],
      koken: 'Londra — Alexander Fleming (1928) & Oxford (1941)',
      isim: 'Küfün mikroskop altında boya fırçasına benzeyen şeklinden (Latince "penicillus" = fırça) adını aldı. Fleming\'in tatil dönüşü unuttuğu deney kabındaki tesadüfle keşfedildi!',
      yolculuk: '1941\'de Oxford\'da saflaştırılıp 2. Dünya Savaşı\'nda ABD fabrikalarında seri üretildi; basit bir çizikten bile ölünen çağı kapatıp insan ömrünü 20+ yıl uzattı.',
      ilginc: 'Fleming 1945\'te Nobel Ödülü\'nü alırken bile "antibiyotikleri gereksiz kullanırsanız bakteriler direnç geliştirir" diye dünyayı şimdiden uyarmıştı!',
      pts: [[51.5, -0.17], [51.75, -1.25], [40.7, -89.6], [48.8, 2.3], [35.6, 139.7]],
      w: 'History of penicillin'
    },
    {
      id: 'yy-rontgen', ad: 'Röntgen (X-Işınları)', ik: '🩻', kat: 'icat', ll: [49.79, 9.93],
      koken: 'Würzburg, Almanya — Wilhelm Röntgen (1895)',
      isim: 'Ne olduğunu bilmediği gizemli ışına matematikteki bilinmeyen harf "X" adını (X-ray) verdi; Türkçede ve Almancada ise mucidinin soyadı "Röntgen" yerleşti!',
      yolculuk: 'Röntgen\'in eşinin yüzüklü el kemiklerinin fotoğrafı haftalar içinde tüm dünya gazetelerine çıktı; 1 yıl içinde hastanelerde kırık ve kurşun tespiti için kullanılmaya başlandı.',
      ilginc: 'Wilhelm Röntgen insanlığa hizmet etsin diye X-ışınlarının patentini ALMADI ve 1901\'de tarihteki ilk Nobel Fizik Ödülü\'nü kazandı!',
      pts: [[49.79, 9.93], [48.8, 2.3], [51.5, -0.1], [41.0, 29.0], [40.7, -74.0]],
      w: 'X-ray'
    },
    {
      id: 'yy-ampul', ad: 'Elektrik Ampulü', ik: '💡', kat: 'icat', ll: [40.56, -74.33],
      koken: 'Menlo Park, ABD — Thomas Edison & Joseph Swan (1879)',
      isim: 'Fransızca "ampoule" (küçük cam şişecik) sözcüğünden Türkçeye "ampul" geçti. Edison uzun ömürlü tel (filaman) bulmak için kömürleşmiş bambudan 6.000\'den fazla malzeme denedi!',
      yolculuk: '1882\'de New York Pearl Street\'te ilk elektrik santraliyle sokaklar aydınlandı; birkaç on yılda geceyi gündüze çevirip tüm şehirlerin uyku ve çalışma düzenini değiştirdi.',
      ilginc: 'Edison\'un ünlü sözü: "Başarısız olmadım, sadece çalışmayan 10.000 yol buldum!"',
      pts: [[40.56, -74.33], [51.5, -0.1], [48.8, 2.3], [41.0, 29.0], [35.6, 139.7]],
      w: 'Incandescent light bulb'
    },
    {
      id: 'yy-telefon', ad: 'Telefon', ik: '☎️', kat: 'icat', ll: [42.36, -71.06],
      koken: 'Boston, ABD — Alexander Graham Bell (1876)',
      isim: 'Yunanca "tele" (uzak) + "phone" (ses) = "Uzaktan Ses"! Bell\'in 10 Mart 1876\'da yan odadaki asistanına söylediği ilk cümle: "Bay Watson, buraya gelin, sizi görmek istiyorum."',
      yolculuk: 'Sabit hatlardan kıtalararası okyanus altı kablolara, 1973\'te ilk cep telefonuna ve bugün cebimizdeki akıllı bilgisayarlara dönüştü.',
      ilginc: 'Bell telefonu açarken "Ahoy!" (denizci selamı) denmesini önermişti; bugün tüm dünyanın kullandığı "Alo / Hello!" sözcüğünü ise rakibi Thomas Edison yaygınlaştırdı!',
      pts: [[42.36, -71.06], [40.7, -74.0], [51.5, -0.1], [48.8, 2.3], [35.6, 139.7]],
      w: 'History of the telephone'
    },
    {
      id: 'yy-ucak', ad: 'Uçak', ik: '✈️', kat: 'icat', ll: [36.01, -75.67],
      koken: 'Kitty Hawk, ABD — Wright Kardeşler (17 Aralık 1903)',
      isim: 'İki bisiklet tamircisi kardeşin 12 saniye süren ve sadece 36 metre giden ilk motorlu uçuşu, insanlığın binlerce yıllık uçma hayalini gerçeğe dönüştürdü!',
      yolculuk: 'İlk uçuştan yalnızca 66 yıl sonra (1969!) insanlık Ay\'a ayak bastı — bugün her gün 100.000\'den fazla yolcu uçağı kıtaları saatler içinde birbirine bağlıyor.',
      ilginc: 'Wright kardeşlerin ilk uçtuğu mesafe (36 metre), bugün dev bir Boeing 747 yolcu uçağının kanat açıklığının yarısından bile kısaydı!',
      pts: [[36.01, -75.67], [48.8, 2.3], [51.5, -0.1], [41.0, 29.0], [35.6, 139.7]],
      w: 'Wright brothers'
    },
    {
      id: 'yy-araba', ad: 'Otomobil', ik: '🚗', kat: 'icat', ll: [49.49, 8.46],
      koken: 'Mannheim, Almanya — Karl Benz (1886)',
      isim: 'Yunanca "autos" (kendi) + Latince "mobilis" (hareket eden) = "Kendi kendine giden"! 1888\'de Karl Benz\'in eşi Bertha Benz eşine haber vermeden 106 km yol giderek otomobili tüm dünyaya kanıtladı.',
      yolculuk: 'Almanya\'daki ilk üç tekerlekli araçtan 1908\'de Henry Ford\'un seri üretim bandına (Model T) ve günümüzün elektrikli otonom araçlarına uzandı.',
      ilginc: 'Bertha Benz 1888\'deki o ilk uzun yolculukta yakıtı bitince bir eczaneden benzin aldı — o eczane tarihteki ilk "benzin istasyonu" oldu ve yolculuk sırasında fren balatasını da bizzat icat etti!',
      pts: [[49.49, 8.46], [48.8, 2.3], [42.33, -83.05], [35.6, 139.7], [31.2, 121.5]],
      w: 'History of the automobile'
    },
    {
      id: 'yy-fotograf', ad: 'Fotoğraf Makinesi', ik: '📷', kat: 'icat', ll: [46.78, 4.85],
      koken: 'Fransa — Niépce (1826) & Daguerre (1839) · İbnü\'l-Heysem (Karanlık Oda)',
      isim: 'Yunanca "photos" (ışık) + "graphe" (çizmek) = "Işıkla Çizmek"! Optik temeli 11. yüzyılda İbnü\'l-Heysem\'in "Kamera Obscura" (Karanlık Oda) deneylerine dayanır.',
      yolculuk: 'İlk fotoğrafın pozlanması tam 8 SAAT sürmüştü! 1888\'de Kodak\'ın "Siz düğmeye basın, gerisini biz hallederiz" sloganıyla her eve girdi.',
      ilginc: 'İbnü\'l-Heysem\'in Arapça "Qamara" (karanlık oda) sözcüğü Latinceye "Camera" diye geçti — bugün cebimizdeki "kamera" kelimesi 1.000 yıl önceki bu optik deneyden gelir!',
      pts: [[30.0, 31.2], [46.78, 4.85], [48.8, 2.3], [43.15, -77.6], [35.6, 139.7]],
      w: 'History of photography'
    },
    {
      id: 'yy-sinema', ad: 'Sinema', ik: '🎬', kat: 'icat', ll: [45.75, 4.85],
      koken: 'Lyon & Paris, Fransa — Lumière Kardeşler (1895)',
      isim: 'Yunanca "kinema" (hareket) sözcüğünden "Sinematograf" ve "Sinema" doğdu. 28 Aralık 1895\'te Paris\'te bir kafenin bodrumunda ilk biletli film gösterimi yapıldı!',
      yolculuk: 'Paris\'ten birkaç yıl içinde İstanbul\'a (1896!), Hollywood\'a, Hindistan\'a (Bollywood) ve tüm dünyaya yayılıp 7. sanat oldu.',
      ilginc: '1896\'da "Bir Trenin La Ciotat Garı\'na Varışı" filmi gösterilirken perdedeki trenin üzerlerine geldiğini sanan bazı seyircilerin panikle sandalyelerinden fırladığı anlatılır!',
      pts: [[45.75, 4.85], [48.8, 2.3], [41.0, 29.0], [34.09, -118.32], [19.07, 72.87]],
      w: 'History of film'
    },
    {
      id: 'yy-pil', ad: 'Elektrik Pili (Batarya)', ik: '🔋', kat: 'icat', ll: [45.81, 9.08],
      koken: 'Como, İtalya — Alessandro Volta (1800)',
      isim: 'Volta\'nın çinko ve bakır diskleri tuzlu bezle üst üste dizdiği ilk pile "Volta Pili" dendi; bugün elektrik gerilim birimi olan **"Volt"** onun soyadıdır!',
      yolculuk: '1800\'deki ilk sürekli elektrik akımı, telgrafı, radyoyu, cep telefonunu ve 21. yüzyılın lityum-iyon elektrikli araç devrimini mümkün kıldı.',
      ilginc: 'Pil icat edilmeden önce bilim insanları elektriği sadece yıldırım veya sürtünmeyle anlık kıvılcım olarak görebiliyordu — Volta pili modern elektrik çağını başlatan anahtardır!',
      pts: [[45.81, 9.08], [51.5, -0.1], [40.7, -74.0], [35.6, 139.7], [31.2, 121.5]],
      w: 'History of the battery'
    },
    {
      id: 'yy-mikroskop', ad: 'Mikroskop (Görünmeyen Dünya)', ik: '🔬', kat: 'icat', ll: [52.01, 4.35],
      koken: 'Delft, Hollanda — Antonie van Leeuwenhoek (1670\'ler)',
      isim: 'Yunanca "mikros" (küçük) + "skopein" (bakmak)! Kumaş tüccarı Leeuwenhoek kumaş ipliklerini incelemek için kendi minicik cam merceklerini yaptı ve bir damla göl suyuna bakınca bakterileri keşfetti!',
      yolculuk: 'Hollanda\'dan Londra Kraliyet Cemiyeti\'ne gönderilen mektuplarla mikrobiyoloji doğdu; mikrop teorisi sayesinde modern tıp ve hijyen devrimi başladı.',
      ilginc: 'Leeuwenhoek tek damla yağmur suyunda yüzen bakterileri ilk gördüğünde şaşkınlıkla onlara "minik hayvancıklar" (animalcules) adını vermişti!',
      pts: [[52.01, 4.35], [51.5, -0.1], [48.8, 2.3], [52.5, 13.4], [40.7, -74.0]],
      w: 'Microscope'
    },
    {
      id: 'yy-radyo', ad: 'Radyo (Kablosuz Dalgalar)', ik: '📻', kat: 'icat', ll: [44.49, 11.34],
      koken: 'İtalya & İngiltere — Marconi / Tesla / Hertz (1895 – 1901)',
      isim: 'Latince "radius" (ışın/dalga) sözcüğünden gelir. 1901\'de Marconi Atlantik Okyanusu\'nun ötesine ilk kablosuz "S" harfini gönderdiğinde tüm dünya şaşkına döndü!',
      yolculuk: 'Gemi kurtarma sinyallerinden (Titanic\'ten kurtulanlar radyo sayesinde kurtuldu!) evlerdeki haber/müzik yayınlarına, Wi-Fi ve uydu iletişimine dönüştü.',
      ilginc: 'Bugün kullandığımız Wi-Fi, Bluetooth ve cep telefonu sinyallerinin tamamı aslında yüksek frekanslı radyo dalgalarıdır!',
      pts: [[44.49, 11.34], [50.0, -5.2], [47.56, -52.7], [40.7, -74.0], [35.6, 139.7]],
      w: 'History of radio'
    },
    {
      id: 'yy-harita', ad: 'Dünya Haritası ve Atlas', ik: '🗺️', kat: 'icat', ll: [31.2, 29.9],
      koken: 'Babil (~MÖ 600) → İskenderiye (Batlamyus) → Pîrî Reis (1513) → Mercator',
      isim: '1595\'te Flaman haritacı Gerardus Mercator harita kitabının kapağına gökyüzünü omuzlarında taşıyan Yunan Titanı "Atlas"ı çizdiği için tüm harita kitaplarına "Atlas" dendi!',
      yolculuk: 'Babil\'in kil tablet haritasından El-İdrisi\'ye, 1513\'te Amerika kıyılarını çizen Osmanlı denizcisi Pîrî Reis\'e ve bugünün GPS uydu haritalarına uzandı.',
      ilginc: 'Orta Çağ İslam haritalarının çoğunda (El-İdrisi gibi) GÜNEY haritanın üstünde, KUZEY ise altında çizilirdi — kuzeyin üstte olması sadece sonradan yerleşen bir alışkanlıktır!',
      pts: [[32.5, 44.4], [31.2, 29.9], [38.1, 13.3], [40.4, 26.6], [51.2, 4.4]],
      w: 'History of cartography'
    },
    {
      id: 'yy-satranc', ad: 'Satranç', ik: '♟️', kat: 'icat', ll: [26.8, 80.9],
      koken: 'Kuzey Hindistan — Çaturanga (~MS 600)',
      isim: 'Sanskritçe "Çaturanga" (ordunun 4 kolu: piyade, süvari, fil, savaş arabası) Farsçaya "Şatranc", Türkçeye "Satranç" oldu. "Şah Mat" ise Farsça **"Şah öldü / çaresiz kaldı"** (Şah Mât) demektir — İngilizce "Checkmate" buradan gelir!',
      yolculuk: 'Hindistan\'dan Sasani İran\'ına, İslam dünyasına, Endülüs ve İpek Yolu üzerinden Avrupa\'ya yayıldı; 15. yüzyılda İspanya\'da Vezir (Kraliçe) en güçlü taş hâline getirildi.',
      ilginc: 'Bir satranç oyunundaki olası hamle sayısı ($10^{120}$), gözlemlenebilir evrendeki tüm atomların sayısından ($10^{80}$) çok daha fazladır!',
      pts: [[26.8, 80.9], [33.3, 44.3], [37.9, -4.7], [48.8, 2.3], [55.7, 37.6]],
      w: 'History of chess'
    },
    {
      id: 'yy-kagitpara', ad: 'Kâğıt Para (Banknot)', ik: '💵', kat: 'icat', ll: [30.65, 104.06],
      koken: 'Çin — Tang & Song Hanedanı (MS ~800 – 1024)',
      isim: 'Tüccarlar ağır bakır sikkeleri taşımak yerine devlet kasasına bırakıp kâğıt makbuz ("uçan para") almaya başladı! Marco Polo 1290\'da Çin\'den dönüp "dut ağacı kabuğundan para yapıyorlar" deyince kimse ona inanmadı!',
      yolculuk: 'Çin\'den Moğol İlhanlılara (1294), 1661\'de İsveç\'te Avrupa\'nın ilk banknotuna ve bugünün dijital/kağıt küresel finans sistemine dönüştü.',
      ilginc: 'İsveç 1661\'de kâğıt parayı bastığında sebebi çok pratikti: o dönemki İsveç bakır paralarından tek bir büyük sikke tam 19 KİLOGRAM ağırlığındaydı!',
      pts: [[30.65, 104.06], [38.0, 46.3], [59.3, 18.0], [51.5, -0.1], [40.7, -74.0]],
      w: 'Banknote'
    },
    {
      id: 'yy-anestezi', ad: 'Anestezi (Ağrısız Ameliyat)', ik: '🩺', kat: 'icat', ll: [42.36, -71.07],
      koken: 'Boston, ABD — William Morton (16 Ekim 1846)',
      isim: 'Yunanca "an-" (yok) + "aisthesis" (his) = "Hissizlik"! 1846\'ya kadar tüm ameliyatlar hastalar uyanıkken yapıldığı için cerrahların en önemli yeteneği hızdı.',
      yolculuk: 'Boston\'daki "Eter Kubbesi"nde eter gazıyla yapılan ilk ağrısız ameliyat haberi gemilerle haftalar içinde Londra, Paris ve İstanbul tıbbiyelerine ulaştı.',
      ilginc: 'Anestezi icat edilmeden önce cerrahlar acıyı kısa tutmak için bir bacağı 30 saniyeden kısa sürede kesmekle övünürdü — anestezi modern cerrahiyi mümkün kılan dönüm noktasıdır!',
      pts: [[42.36, -71.07], [51.5, -0.1], [48.8, 2.3], [41.0, 29.0], [35.6, 139.7]],
      w: 'History of general anesthesia'
    },
    {
      id: 'yy-futbol', ad: 'Futbol', ik: '⚽', kat: 'icat', ll: [51.51, -0.12],
      koken: 'Antik Çin (Cuju) & Modern Kurallar: Londra, İngiltere (1863)',
      isim: 'Antik Çin\'de MÖ 200\'de "Cuju" (topa ayakla vurma) oynanırdı. Modern kurallar ise 26 Ekim 1863\'te Londra\'da bir handa toplanan kulüplerin "elle oynamayı yasaklamasıyla" doğdu!',
      yolculuk: 'İngiliz denizciler, demiryolu işçileri ve öğrenciler aracılığıyla 1890\'larda Güney Amerika\'ya (Brezilya, Arjantin), İzmir ve İstanbul\'a, oradan tüm dünyaya yayıldı.',
      ilginc: 'Dünya nüfusunun yarısından fazlası (4 milyara yakın insan!) Dünya Kupası finallerini izleyerek futbolu insanlık tarihinin en büyük ortak dili hâline getirdi!',
      pts: [[34.2, 108.9], [51.51, -0.12], [38.4, 27.1], [-23.5, -46.6], [-34.6, -58.4]],
      w: 'History of association football'
    }
  );
})();
