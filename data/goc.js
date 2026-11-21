// İnsanlığın yayılışı: Homo sapiens'in Afrika'dan dünyaya yayılış yolları ve tarımın bağımsız olarak doğduğu yerler.
// Kaynaklar: Stringer, "Lone Survivors" (2012); Reich, "Who We Are and How We Got Here" (2018); Hublin vd., Nature 546 (2017, Cebel İrhud);
//   Clarkson vd., Nature 547 (2017, Madjedebe); Bennett vd., Science 373 (2021, White Sands); Larson vd., PNAS 111 (2014, evcilleştirme merkezleri).
// Tarihler fosil, arkeoloji ve DNA çalışmalarına dayanır, yaklaşıktır ve yeni bulgularla değişebilir.
// Yollar: pts [enlem, boylam]; tarih çizgisini geçen yollarda boylam kesintisiz yazılır (ör. -150 yerine 210).
// Buzul çağı yolları küre MÖ 3000'den önceki bir yıldayken görünür; Pasifik yolları kendi yıllarında (bas..son, MÖ +, MS -).
window.GOC = {
  besik: { ll: [5.4, 35.9], ad: 'İnsanlığın beşiği: Afrika', not: 'Bilinen en eski Homo sapiens fosilleri Afrika\'da: Cebel İrhud (Fas) ~300.000, Omo Kibiş (Etiyopya) ~230.000 yıl önce.' },
  yollar: [
    { id: 'cikis', ad: 'Afrika\'dan çıkış', etiket: '~70-60 bin yıl önce', lf: 0.5, pts: [[8, 38.5], [12.6, 43.3], [15.5, 49], [17.5, 55], [24.5, 58], [26.5, 56.5]],
      not: 'Bugün Afrika dışında yaşayan herkesin ataları, büyük olasılıkla Kızıldeniz\'in güney ucundaki Babülmendep Boğazı\'ndan Arabistan\'a geçen küçük bir topluluktu. Buzul çağında deniz seviyesi düşük olduğu için boğaz bugünkünden çok daha dardı.' },
    { id: 'guneyasya', ad: 'Güney Asya kıyıları', etiket: '~60-50 bin yıl önce', lf: 0.5, pts: [[26.5, 56.5], [25.2, 62], [24.5, 67], [21, 72.5], [15, 74], [9, 77], [16, 81.5], [21.5, 88], [16, 95], [7, 99], [3, 101.5]],
      not: 'İnsanlar Hint Okyanusu kıyıları boyunca doğuya ilerledi. Kıyı, yiyecek bulmak için kolay bir yoldu: deniz kabukluları ve balık.' },
    { id: 'sahul', ad: 'Avustralya\'ya varış', etiket: '~65-50 bin yıl önce', lf: 0.55, pts: [[3, 101.5], [-2, 106], [-6, 112], [-8.5, 118], [-9.5, 124], [-12.3, 132.9]],
      not: 'Buzul çağında Avustralya ile Yeni Gine "Sahul" adlı tek bir kıtaydı; yine de oraya ulaşmak için en az 70-90 km açık denizi salla ya da kanoyla geçmek gerekti. Bu, insanların bilinen ilk büyük deniz yolculuklarından. Kuzey Avustralya\'daki Madjedebe kaya sığınağındaki izler 65 bin yıl öncesine tarihleniyor.' },
    { id: 'avrupa', ad: 'Avrupa\'ya', etiket: '~45 bin yıl önce', lf: 0.6, pts: [[26.5, 56.5], [31, 47], [33.5, 38], [36.5, 36.5], [38.5, 33], [40.5, 28], [42.6, 25.4], [45, 20], [47.5, 15], [48.5, 8], [46, 2], [43, -1]],
      not: 'Ortadoğu üzerinden Anadolu ve Balkanlar\'a, oradan Avrupa\'ya yayıldılar. Bulgaristan\'daki Bacho Kiro mağarasında ~46 bin yıllık Homo sapiens kalıntıları bulundu. Avrupa\'da onlardan önce Neandertaller yaşıyordu; Neandertaller ~40 bin yıl önce yok oldu.' },
    { id: 'sibirya', ad: 'Orta Asya ve Sibirya', etiket: '~45 bin yıl önce', lf: 0.5, pts: [[33.5, 52], [37, 59], [40, 66], [45, 72], [52, 80], [56, 92], [58, 105], [62, 120], [65, 135]],
      not: 'Bozkırlar ve nehir vadileri boyunca kuzeydoğuya. Sibirya\'daki Ust-İşim\'de bulunan ~45 bin yıllık uyluk kemiğinden, bilinen en eski Homo sapiens DNA\'larından biri elde edildi.' },
    { id: 'doguasya', ad: 'Doğu Asya', etiket: '~45-40 bin yıl önce', lf: 0.5, pts: [[3, 101.5], [13, 103], [21, 106], [26, 110], [32, 113], [39.8, 116]],
      not: 'Güneydoğu Asya\'dan Çin\'e. Pekin yakınındaki Tianyuan mağarasında ~40 bin yıllık bir insan iskeleti bulundu.' },
    { id: 'japonya', ad: 'Japonya', etiket: '~38 bin yıl önce', lf: 0.5, pts: [[39.8, 116], [38.5, 124], [35.5, 129], [34, 131.5], [35.5, 137.5]],
      not: 'Kore yarımadası üzerinden Japon adalarına; adalara ulaşmak için yine deniz geçmek gerekti.' },
    { id: 'amerika', ad: 'Amerika\'ya', etiket: '~23-15 bin yıl önce', lf: 0.32, pts: [[65, 135], [66, 160], [65.5, 190], [62, 210], [57, 225], [50, 232], [41, 236], [32.8, 253.6], [19, 261], [9, 280], [-2, 281], [-12, 283], [-25, 290], [-41.5, 286.9]],
      not: 'Buzul çağında deniz seviyesi düşükken Sibirya ile Alaska arasında bir kara köprüsü (Beringia) vardı. İnsanlar oradan Amerika\'ya geçti ve büyük olasılıkla Pasifik kıyısı boyunca güneye indi. New Mexico\'daki White Sands\'te bulunan ayak izleri ~23-21 bin yıl öncesine tarihleniyor; Şili\'deki Monte Verde köyü ~14.500 yıl önce kurulmuştu.' },
    { id: 'lapita', ad: 'Pasifik\'e açılış (Lapita)', etiket: 'MÖ ~1000', lf: 0.55, bas: 1500, son: -1400, pts: [[-4, 152], [-9.5, 160], [-15, 167], [-18, 178], [-21.2, 184.8]],
      not: 'Lapita denen çömlekleriyle tanınan denizciler, Yeni Gine yakınlarından çıkıp yüzlerce kilometrelik açık denizleri çift gövdeli kanolarla geçerek Fiji, Tonga ve Samoa\'ya ulaştı.' },
    { id: 'polinezya', ad: 'Polinezya\'nın keşfi', etiket: 'MS ~1000-1280', lf: 0.45, bas: 1000, son: -1400, pts: [[-14, 188], [-17.5, 210.5], [-9, 220], [20.8, 203]],
      not: 'Polinezyalı denizciler yıldızlara, dalgalara ve kuşlara bakarak yön buldu. Hawaii\'ye MS ~1000 civarında ulaştılar.' },
    { id: 'rapanui', ad: 'Rapa Nui (Paskalya Adası)', etiket: 'MS ~1200', lf: 0.5, bas: 1000, son: -1400, pts: [[-17.5, 210.5], [-23, 225], [-27.1, 250.6]],
      not: 'Polinezya üçgeninin doğu ucu; dünyanın en ıssız yerleşim yerlerinden. Ünlü moai heykelleri burada.' },
    { id: 'yenizelanda', ad: 'Yeni Zelanda (Aotearoa)', etiket: 'MS ~1280', lf: 0.5, bas: 1000, son: -1400, pts: [[-17.5, 210.5], [-25, 195], [-33, 182], [-38, 176]],
      not: 'İnsanların yerleştiği son büyük kara parçası. Maori atalarının MS ~1280 civarında geldiği düşünülüyor.' }
  ],
  // tarımın bağımsız olarak doğduğu yerler (y: başladığı yıl, MÖ +)
  tarim: [
    { id: 'hilal', ll: [36.5, 40], y: 9500, ad: 'Bereketli Hilal', urun: 'buğday, arpa, mercimek; koyun, keçi', not: 'Tarım dünyada ilk kez burada başladı. Göbekli Tepe ve Çatalhöyük bu dönemin Anadolu\'daki büyük yerleşimleri.' },
    { id: 'cin', ll: [34.5, 112], y: 7000, ad: 'Çin: Sarı Irmak ve Yangtze', urun: 'darı ve pirinç; domuz', not: 'Kuzeyde darı, güneyde Yangtze vadisinde pirinç evcilleştirildi.' },
    { id: 'yenigine', ll: [-5.8, 144.3], y: 7000, ad: 'Yeni Gine dağları', urun: 'taro, muz, şeker kamışı', not: 'Kuk bataklığında binlerce yıllık sulama kanalları bulundu.' },
    { id: 'mezoamerika', ll: [18, -98], y: 7000, ad: 'Mezoamerika', urun: 'mısır, kabak, fasulye', not: 'Mısır, teosinte adlı yabani bir otun binlerce yıl süren seçilimle değişmesiyle ortaya çıktı.' },
    { id: 'and', ll: [-13, -73], y: 6000, ad: 'And Dağları', urun: 'patates, kinoa; lama', not: 'Binlerce patates çeşidi yüksek dağ yamaçlarında geliştirildi.' },
    { id: 'indus', ll: [29.4, 67.6], y: 7000, ad: 'Mehrgarh (İndus batısı)', urun: 'arpa, buğday; zebu sığırı', not: 'Güney Asya\'nın bilinen en eski çiftçi köylerinden; İndus uygarlığının kökleri.' },
    { id: 'sahel', ll: [14, 30], y: 3000, ad: 'Sahel ve Sudan', urun: 'darı, sorgum', not: 'Sahra kuruyunca insanlar nehir ve göl kıyılarına çekildi; sorgum ve darı evcilleştirildi.' },
    { id: 'kuzeyamerika', ll: [37, -87], y: 3000, ad: 'Doğu Kuzey Amerika', urun: 'ayçiçeği, kabak', not: 'Mississippi havzasında yerel bitkilerle bağımsız bir tarım geliştirildi.' }
  ]
};
