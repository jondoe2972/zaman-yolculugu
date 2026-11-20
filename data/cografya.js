// Bölgelerin coğrafyası: insanlar neyle geçinirdi, toprakların artıları ve eksileri, neden çok savaşıldı.
// gecim: yıl aralıklarına göre (MÖ pozitif, MS negatif). "📖 Bu yıl" panelinde gösterilir.
'use strict';
window.COGRAFYA = {
  misir: {
    arti: [
      'Nil her yaz taşıp tarlalara bereketli kara balçık bırakır; gübresiz, iki kat ürün alınabilir.',
      'Doğuda ve batıda çöl, güneyde çağlayanlar: ülke doğal bir kale gibi korunur.',
      'Nil kuzeye akar, rüzgâr güneye eser: kayıkla iki yöne de kolay ulaşım.',
      'Taş bol (kireçtaşı, granit), Nubya\'da altın, Sina\'da bakır ve turkuaz.',
      'Hem Akdeniz\'e hem Kızıldeniz\'e kıyı: Avrupa, Arabistan ve Hindistan ile ticaret.'
    ],
    eksi: [
      'Her şey Nil\'e bağlı: taşkın az gelirse kıtlık, çok gelirse sel.',
      'Kereste yok denecek kadar az; gemi ve tapınak için sedir Lübnan\'dan alınır.',
      'Kalay, gümüş ve demir azdır, dışarıdan gelir.',
      'Halk dar bir yeşil şeritte sıkışık yaşar; ülkenin %95\'i çöldür.',
      'Kuzeydoğudaki Sina köprüsü ve düz Delta, Asya\'dan gelen ordulara açık kapıdır.'
    ],
    savas: 'Mısır tarih boyunca hep istenen bir ülke oldu, çünkü: (1) Akdeniz\'in tahıl ambarıydı; Roma\'yı ve İstanbul\'u yüzyıllarca Mısır buğdayı besledi. (2) Asya ile Afrika arasındaki tek kara köprüsü (Sina) buradan geçer; Kızıldeniz üzerinden Hindistan ticareti, sonra da Süveyş Kanalı onu dünyanın en önemli kavşaklarından biri yaptı. (3) Nubya altını. Firavunlar ise sınırı korumak için Levant\'ta tampon bölge isterdi: Kadeş Savaşı Suriye\'ye kimin hükmedeceği içindi.',
    gecim: [
      { from: 3150, to: 1070, t: 'Halkın onda dokuzu çiftçiydi: buğday (emmer), arpa ve keten ekilir; ekmek ve bira temel besindi. Taşkın aylarında tarla su altındayken köylüler devlet inşaatlarında çalışırdı. Vergi tahılla ödenirdi; para yoktu, takas vardı.' },
      { from: 1070, to: 30, t: 'Tarım hâlâ her şeydi. Ptolemaioslar döneminde sikke ve para ekonomisi yayıldı; İskenderiye Akdeniz\'in en büyük ticaret limanı oldu. Papirüs ve keten kumaş ihraç edilirdi.' },
      { from: 30, to: -641, t: 'Mısır Roma\'nın tahıl ambarıydı: her yıl yüz binlerce ton buğday Roma\'ya, sonra Konstantinopolis\'e gönderildi. Köylü toprağa ve ağır vergiye bağlıydı; İskenderiye cam, papirüs ve kumaş üretirdi.' },
      { from: -641, to: -1517, t: 'Tarım (buğday, sonra şeker kamışı) ve ticaret: Hindistan baharatı Kızıldeniz\'den gelip Kahire ve İskenderiye üzerinden Avrupa\'ya satılırdı. Memlükler bu geçiş ticaretinin gümrüğüyle zenginleşti. Kahire, dokumacılarıyla ve çarşılarıyla ünlüydü.' },
      { from: -1517, to: -1805, t: 'Osmanlı eyaleti olarak tarım ve vergi; Kahire, Yemen kahvesinin dünyaya dağıldığı büyük pazardı. Baharat ticareti Ümit Burnu yolu yüzünden azaldı.' },
      { from: -1805, to: -1952, t: 'Pamuk dönemi: Mehmed Ali Paşa uzun lifli pamuğu yaygınlaştırdı. Amerikan İç Savaşı sırasında (1861-65) pamuk fiyatları patladı; Süveyş Kanalı (1869) ülkeyi dünya ticaretine bağladı ama borçlar İngiliz işgaline yol açtı.' },
      { from: -1952, to: -2026, t: 'Süveyş Kanalı geçiş ücretleri, turizm, yurt dışında çalışanların gönderdiği para, doğalgaz ve tarım (pamuk, pirinç, meyve). Nüfusun çoğu hâlâ Nil kıyısındaki dar şeritte yaşar.' }
    ]
  },
  anadolu: {
    arti: [
      'Asya ile Avrupa arasında köprü; üç tarafı denizlerle çevrili.',
      'Maden zengini: bakır, gümüş, demir, bugün bor ve krom.',
      'Verimli ovalar (Konya, Çukurova, Ege ovaları) ve çok çeşitli iklim: zeytinden fındığa her şey yetişir.',
      'Boğazlar: Karadeniz ile Akdeniz arasındaki tek deniz yolu.',
      'Dağlarda bol su, yaylalarda geniş otlaklar.'
    ],
    eksi: [
      'Büyük deprem kuşağı üzerinde.',
      'İç Anadolu kurak, kışları sert; kuraklık yılları kıtlık getirir.',
      'Sıradağlar bölgeleri birbirinden ayırır; tek bir devlet kurmak ve tutmak zordur.',
      'Tam bir kavşak olduğu için her çağda göç ve istila yolu olmuştur.'
    ],
    savas: 'Anadolu bir geçit ve bir kale: (1) Asya\'dan Avrupa\'ya ya da Avrupa\'dan Asya\'ya giden her ordu buradan geçti: Persler, İskender, Haçlılar, Moğollar. (2) Boğazları tutan, Karadeniz ticaretini ve donanmaların geçişini denetler; bu yüzden Rusya ile Osmanlı on iki kez savaştı ve Çanakkale\'de dünya savaşının kaderi belirlendi. (3) Madenler (Hitit gümüşü, Lidya altını) ve verimli ovalar. (4) İpek ve baharat kervan yollarının batı ucu.',
    gecim: [
      { from: 12000, to: 6000, t: 'Avcı-toplayıcılıktan çiftçiliğe geçiş burada yaşandı: yabani buğday, arpa, nohut ve mercimek ekilmeye başlandı; koyun ve keçi evcilleştirildi. Kapadokya obsidyeni uzaklara takas edilirdi.' },
      { from: 6000, to: 1200, t: 'Tarım ve hayvancılık; Tunç Çağı\'nda madencilik ve metal ticareti. Asurlu tüccarlar kalay ve kumaş getirip gümüş ve altın götürürdü. Hitit devleti büyük ölçüde köylülerin tahılına ve madenlere dayanıyordu.' },
      { from: 1200, to: 30, t: 'Tarım (tahıl, zeytin, üzüm), yünlü dokuma ve madencilik. Ege kıyısındaki liman şehirleri deniz ticaretiyle zenginleşti; Lidyalılar sikkeyi icat edince pazar ve para ekonomisi yayıldı.' },
      { from: 30, to: -1071, t: 'Roma ve Bizans döneminde zeytinyağı, şarap, tahıl; şehirlerde zanaat. 6. yüzyıldan itibaren Bizans ipeği yetiştirildi. Konstantinopolis dünyanın en zengin pazarlarından biriydi.' },
      { from: -1071, to: -1453, t: 'Selçuklularda kervan ticareti: devlet yollara kervansaraylar yaptırdı, soyulan tüccarın zararını öderdi. Türkmen göçerler hayvancılık yaptı; halı ve kilim dokumacılığı yayıldı. Köylerde tarım sürdü.' },
      { from: -1453, to: -1923, t: 'Osmanlı köylüsü timar sistemiyle toprağı işleyip vergi verirdi. Şehirlerde lonca zanaatları, Bursa ipeği, kervan ticareti. 19. yüzyılda tütün, pamuk, kuru üzüm, incir ve fındık ihracatı arttı.' },
      { from: -1923, to: -2026, t: 'Cumhuriyetin ilk yıllarında nüfusun dörtte üçü köylüydü. Zamanla sanayiye geçildi: tekstil, otomotiv, inşaat, beyaz eşya ve turizm. Bugün halkın büyük çoğunluğu şehirlerde yaşar.' }
    ]
  },
  avrupa: {
    arti: [
      'Ilıman ve yağışlı iklim: sulama gerekmeden tarım yapılır.',
      'Uzun, girintili kıyılar ve uzun nehirler (Ren, Tuna, Elbe) ticareti kolaylaştırır.',
      'Verimli Kuzey Avrupa Ovası.',
      'Zengin kömür ve demir yatakları: Sanayi Devrimi\'nin yakıtı.',
      'Atlantik\'e açılış: okyanus ticareti ve keşifler.'
    ],
    eksi: [
      'Kuzeyde kısa yazlar ve sert kışlar; kötü hasat yılları kıtlık getirirdi.',
      'Akdeniz kıyısında yağış az, toprak kayalık.',
      'Dağlar ve denizler kıtayı pek çok küçük ülkeye böldü.',
      'Doğal sınırı olmayan geniş ovalar (Polonya, Almanya) sürekli el değiştirdi.',
      'Baharat, ipek, şeker gibi istenen mallar çok uzaktaydı.'
    ],
    savas: 'Parçalı coğrafya çok sayıda rakip devlet doğurdu ve hiçbiri tek başına kıtaya hükmedemedi. Kavga konuları: (1) Kömür ve demir bölgeleri (Alsas-Loren, Ruhr, Silezya). (2) Nehir ağızları ve limanlar (Anvers, Danzig, İstanbul Boğazı). (3) Deniz yolları ve sömürgeler. (4) Reform\'dan sonraki din savaşları. (5) Kraliyet aileleri arasındaki taht kavgaları. Bu rekabet aynı zamanda Avrupa\'yı silah, gemi ve bilimde hızla ilerletti.',
    gecim: [
      { from: 4500, to: 800, t: 'Tarım ve hayvancılık; Tunç Çağı\'nda kalay, bakır ve kehribar ticareti uzak bölgeleri bağladı. Ege\'de saray ekonomileri (Girit, Miken) zeytinyağı ve şarap üretirdi.' },
      { from: 800, to: -476, t: 'Akdeniz\'de zeytin, üzüm (şarap) ve tahıl; deniz ticareti ve sikke. Roma döneminde büyük çiftliklerde köle emeği, madenler ve yollar. Kuzeyde köylüler tarım ve hayvancılıkla geçinirdi.' },
      { from: -476, to: -1000, t: 'Feodal düzen: köylülerin çoğu bir senyörün toprağına bağlı serflerdi. Malikâneler kendi kendine yeterdi; şehirler küçüldü, uzak ticaret azaldı.' },
      { from: -1000, to: -1500, t: 'Tarımda yenilikler (ağır pulluk, üç tarla sistemi, su değirmeni) nüfusu artırdı. Yün ve kumaş (Flandre, Floransa) en büyük sanayiydi; şehirlerde loncalar, Hansa ve Venedik ticareti, bankacılık doğdu.' },
      { from: -1500, to: -1800, t: 'Okyanus ticareti ve sömürgeler: Amerika gümüşü, şeker, tütün, baharat. Bankalar ve anonim şirketler kuruldu. Ama halkın büyük çoğunluğu hâlâ köylüydü.' },
      { from: -1800, to: -1950, t: 'Sanayi Devrimi: fabrikalar, kömür madenleri, demir-çelik ve demiryolları. Köylüler şehirlere göç edip işçi oldu; çocuk işçiliği ve uzun çalışma saatleri yaygındı.' },
      { from: -1950, to: -2026, t: 'Hizmetler, sanayi ve teknoloji. Tarımda çalışanlar nüfusun yalnızca birkaç yüzdesi. Avrupa Birliği\'nin ortak pazarı ve ortak para birimi (euro).' }
    ]
  }
};
