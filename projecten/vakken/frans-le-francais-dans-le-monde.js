/* Frans · Le français dans le monde
   Bron: de opdracht ‘Approfondissement de français · Le français dans le monde’ van de werkgroep,
   uitgewerkt tot 8 lesuren. De lesbrief van de uitgeverij is vervangen door een eigen infotekst.
   Teksten, oefeningen, tekeningen en vlaggen zijn eigen materiaal. */
(function () {
  var h = CSF.h;
  var S = function (w, hh, inh) { return '<svg width="' + w + '" height="' + hh + '" viewBox="0 0 ' + w + " " + hh + '">' + inh + "</svg>"; };

  // ---------- eigen tekeningen bij ‘Décris les photos’ ----------
  var foto = {
    A: S(200, 140, '<rect width="200" height="140" fill="#fde9c4"/><rect x="10" y="20" width="180" height="16" fill="#d64545"/><rect x="10" y="20" width="180" height="16" fill="url(#st)"/>' +
      '<defs><pattern id="st" width="20" height="16" patternUnits="userSpaceOnUse"><rect width="10" height="16" fill="#fcaf17"/></pattern></defs>' +
      [30, 60, 90, 120, 150, 175].map(function (x, i) { var c = ["#d64545", "#3bc1c5", "#fcaf17", "#2e8b57", "#7b4fa0", "#e2732b"][i]; return '<path d="M' + (x - 10) + " 40 Q" + x + " 90 " + (x + 10) + ' 40" fill="none" stroke="' + c + '" stroke-width="4" stroke-dasharray="4 2"/>'; }).join("") +
      '<rect x="10" y="100" width="180" height="34" fill="#8a5a2b"/><ellipse cx="45" cy="100" rx="22" ry="8" fill="#d9a441"/><ellipse cx="100" cy="100" rx="22" ry="8" fill="#3bc1c5"/><ellipse cx="155" cy="100" rx="22" ry="8" fill="#d64545"/>'),
    B: S(200, 140, '<rect width="200" height="140" fill="#dff1fb"/><polygon points="0,95 45,30 80,80 115,20 160,85 200,50 200,95" fill="#7d8b99"/><polygon points="45,30 35,45 55,45" fill="#fff"/><polygon points="115,20 103,38 127,38" fill="#fff"/>' +
      '<polygon points="0,95 25,70 40,95" fill="#2e6b3f"/><polygon points="165,95 185,62 200,95" fill="#2e6b3f"/><rect y="95" width="200" height="45" fill="#3bc1c5"/><path d="M0 110 Q50 105 100 112 T200 108" stroke="#fff" stroke-width="2" fill="none" opacity=".7"/>' +
      '<circle cx="150" cy="78" r="5" fill="#e8e0d0"/><rect x="146" y="83" width="8" height="12" fill="#3d6b3a"/>'),
    C: S(200, 140, '<rect width="200" height="140" fill="#f3f3f3"/>' + [70, 80, 90, 100, 110, 120, 130].map(function (x, i) { return '<rect x="' + x + '" y="' + (25 + (i % 3) * 6) + '" width="8" height="60" rx="2" fill="#f2c14e" transform="rotate(' + ((i - 3) * 5) + " " + (x + 4) + ' 85)"/>'; }).join("") +
      '<polygon points="60,70 140,70 115,130 85,130" fill="#d64545"/><polygon points="60,70 140,70 135,82 65,82" fill="#b83232"/><circle cx="100" cy="100" r="9" fill="#fff"/>'),
    D: S(200, 140, '<rect width="200" height="140" fill="#f3f3f3"/><rect x="45" y="30" width="110" height="80" rx="10" fill="#e3a74a"/>' +
      [0, 1, 2, 3].map(function (r) { return [0, 1, 2, 3, 4].map(function (c) { return '<rect x="' + (53 + c * 20) + '" y="' + (38 + r * 17) + '" width="14" height="11" rx="2" fill="#c7852f"/>'; }).join(""); }).join("") +
      [60, 85, 115, 140].map(function (x) { return '<circle cx="' + x + '" cy="34" r="3" fill="#fff"/>'; }).join(""))
  };
  // ---------- eigen vlaggen (vereenvoudigd) ----------
  var vlag = {
    1: S(120, 80, '<rect width="120" height="80" fill="#d52b1e"/><rect x="50" y="15" width="20" height="50" fill="#fff"/><rect x="35" y="30" width="50" height="20" fill="#fff"/>'),
    2: S(120, 80, '<rect width="60" height="80" fill="#006233"/><rect x="60" width="60" height="80" fill="#fff"/><circle cx="62" cy="40" r="18" fill="#d21034"/><circle cx="68" cy="40" r="15" fill="#fff"/><polygon points="76,34 78,39 83,39 79,42 81,47 76,44 72,47 73,42 69,39 74,39" fill="#d21034"/>'),
    3: S(120, 80, '<rect width="120" height="40" fill="#00209f"/><rect y="40" width="120" height="40" fill="#d21034"/><rect x="45" y="27" width="30" height="26" fill="#fff"/><rect x="56" y="36" width="8" height="10" fill="#016a16"/>'),
    4: S(120, 80, '<rect width="40" height="80" fill="#00853f"/><rect x="40" width="40" height="80" fill="#fdef42"/><rect x="80" width="40" height="80" fill="#e31b23"/><polygon points="60,28 63,37 72,37 65,42 68,51 60,46 52,51 55,42 48,37 57,37" fill="#00853f"/>'),
    5: S(120, 80, '<rect width="120" height="80" fill="#fff"/><rect width="120" height="20" fill="#ed1c24"/><rect y="60" width="120" height="20" fill="#ed1c24"/><polygon points="60,24 78,56 42,56" fill="#00a651"/><rect x="57" y="54" width="6" height="5" fill="#00a651"/>')
  };
  function vf(lijst) {
    return '<table><tr><th style="width:7%">Nr.</th><th>Phrase</th><th style="width:9%">Vrai</th><th style="width:9%">Faux</th></tr>' +
      lijst.map(function (x, i) { return '<tr><td style="text-align:center">' + String.fromCharCode(97 + i) + "</td><td>" + x + '</td><td style="text-align:center">&#9744;</td><td style="text-align:center">&#9744;</td></tr>'; }).join("") + "</table>";
  }
  function vink(lijst) { return "<table>" + lijst.map(function (x) { return '<tr><td style="width:7%;text-align:center;font-size:13pt">&#9744;</td><td>' + x + "</td></tr>"; }).join("") + "</table>"; }
  var PAYS = ["le Sénégal", "la Guadeloupe", "le Québec", "La Réunion", "la Martinique", "la France", "la Suisse", "le Congo"];

  CSF.project({
    id: "frans-le-francais-dans-le-monde",
    soort: "vak",
    vak: "Frans",
    jaar: "1e en 2e jaar",
    tijd: "8 lesuren",
    sterren: 3,
    naam: "Le français dans le monde",
    kort: "Scherp je Frans aan via de culturele en geografische kanten van de taal.",
    voorWie: "Voor leerlingen met zin om het Frans in andere landen en culturen te ontdekken.",
    omschrijving: "Ontdek het Frans buiten het klaslokaal! Reis naar andere landen en culturen. Gebruik je vaardigheden bij lees- en luisterfragmenten. Stel zelf een Franstalig land voor. Hoe goed scoor jij op de eindquiz? 🤔😉",
    doel: "Je ontdekt waar ter wereld Frans gesproken wordt. Je begrijpt korte Franse berichten en een Frans filmpje. Je gebruikt de betrekkelijke voornaamwoorden qui, que en où. Je stelt een Franstalig land voor in het Frans, schriftelijk en mondeling.",
    bereikt: ["De francophonie situeren op de wereldkaart", "Korte Franse berichten begrijpen: kaartje, e-mail, sms", "Een Frans filmpje globaal en in detail begrijpen", "De betrekkelijke voornaamwoorden qui, que en où gebruiken", "Informatie opzoeken en de bronnen vermelden", "Een land voorstellen in het Frans, schriftelijk en mondeling"],
    toepassen: ["Plannen: acht lesuren goed verdelen", "Informatie ordenen in een duidelijke fiche", "Volhouden bij een moeilijk luisterfragment", "Spreekangst overwinnen bij de presentatie"],
    materiaal: ["Werkbundel", "Een Chromebook met hoofdtelefoon", "Google Presentaties of PowerPoint", "Een woordenboek of een online vertaalwoordenboek"],
    oplossing: "Op deze site, bij ‘Controleer je oplossing’. Je coach verbetert het luisterfragment en je presentatie.",
    product: "Een schriftelijke voorstelling en een presentatie (3 minuten) van een Franstalig land",
    links: [["Compréhension orale: filmpje over de francophonie", "https://www.youtube.com/watch?v=Mnq9-BhdSvw"], ["TV5MONDE: Franstalige tv en oefeningen", "https://www.tv5monde.com"], ["Organisation internationale de la Francophonie", "https://www.francophonie.org"], ["Google Presentaties", "https://docs.google.com/presentation"]],
    leerkaarten: [
      ["La francophonie", "De francophonie is het geheel van landen en mensen die Frans spreken. Bijna 400 miljoen mensen spreken Frans. Twee op de drie wonen in Afrika. In ongeveer 29 landen is Frans een officiële taal. Op 20 maart is het de Internationale Dag van de Francophonie."],
      ["Le vocabulaire du pays", "le pays · la capitale · l’habitant · la langue maternelle · la langue officielle · le drapeau · la monnaie · le climat · le relief · la superficie · le plat national · une attraction touristique · se trouver (Le Sénégal se trouve en Afrique.)"],
      ["Les pronoms relatifs qui, que, où", "<b>Qui</b> vervangt het onderwerp. Er volgt een werkwoord: <i>le pays qui est grand</i>. <b>Que</b> vervangt het lijdend voorwerp. Er volgt een onderwerp: <i>le pays que j’aime</i>. <b>Où</b> vervangt een plaats: <i>la ville où j’habite</i>. Voor een klinker wordt que <b>qu’</b>."],
      ["Slim luisteren", "Kijk het filmpje eerst één keer helemaal. Let op de grote lijn. Kijk daarna opnieuw en pauzeer. Let op getallen, namen van landen en sleutelwoorden. Je hoeft niet elk woord te begrijpen."],
      ["Een land voorstellen", "Gebruik vaste zinnen: <i>Je vais vous présenter …</i> · <i>… se trouve en …</i> · <i>La capitale est …</i> · <i>Il y a … habitants.</i> · <i>On y parle …</i> · <i>Il fait chaud / froid.</i> · <i>À voir: …</i> · <i>On mange …</i> · <i>Merci de votre attention!</i>"]
    ],
    invalshoek: { intro: "Kies in lesuur 1 het land dat je in lesuur 5 tot 8 voorstelt.", keuzes: [
      ["Afrika", "Le Sénégal of le Congo: markten, savanne en muziek."],
      ["Amerika en de Caraïben", "Le Québec, la Guadeloupe of la Martinique: sneeuw of tropische eilanden."],
      ["Europa en de Indische Oceaan", "La France, la Suisse of La Réunion. Of een ander land na overleg met je coach."]] },
    nogTijd: "Ontdek het programma van TV5MONDE. Kies een programma dat je zou willen bekijken. Leg in drie Franse zinnen uit waarom.",
    test: [
      ["Wat is de francophonie?", ["Het geheel van landen en mensen die Frans spreken", "De vrouwelijke vorm van francophone", "Een soort Franse muziek"], 0, "Francophone = Franstalig."],
      ["Op welk continent spreken de meeste mensen Frans?", ["Afrika", "Europa", "Zuid-Amerika"], 0, "Twee op de drie Franstaligen wonen in Afrika."],
      ["Hoeveel mensen spreken ongeveer Frans?", ["400 miljoen", "40 miljoen", "4 miljard"], 0, "Volgens de OIF zijn het er bijna 400 miljoen."],
      ["Op welke dag is het de Internationale Dag van de Francophonie?", ["20 maart", "20 mei", "20 november"], 0, "Op 20 maart."],
      ["In welke stad is Frans geen officiële taal?", ["New Orleans", "Brussel", "Dakar"], 0, "New Orleans ligt in de Verenigde Staten. Frans is er geen officiële taal."],
      ["In Québec doe je ‘de la fleur’ in een taart. Wat is dat?", ["Bloem (meel)", "Boter", "Suiker"], 0, "In Québec betekent fleur ook ‘bloem’ om te bakken. In Frankrijk zeg je farine."],
      ["Een Belg zegt: ‘Il fait de son nez.’ Hoe is die persoon?", ["Hij doet stoer of arrogant", "Hij is verkouden", "Hij is moeilijk"], 0, "Een typisch Belgische uitdrukking."]
    ],
    controle: [
      ["Le Sénégal est un pays ___ se trouve en Afrique.", "tekst", ["qui"], "Er volgt een werkwoord: je vervangt het onderwerp."],
      ["La Belgique est un pays ___ j'aime beaucoup.", "tekst", ["que"], "Er volgt een onderwerp (j’): je vervangt het lijdend voorwerp."],
      ["Le Canada est un pays ___ il neige beaucoup.", "tekst", ["où", "ou"], "Het gaat om een plaats."],
      ["Quelle est la capitale du Sénégal?", "tekst", ["dakar"], "Lou kocht er souvenirs."],
      ["Vertaal: ‘C'est une bonne nouvelle pour la France.’", "tekst", ["dat is goed nieuws voor frankrijk", "het is goed nieuws voor frankrijk", "dit is goed nieuws voor frankrijk"], "une bonne nouvelle = goed nieuws"],
      ["Welke vlag hoort bij la Suisse? Geef het nummer (werkblad 4).", "getal", [1, 0], "Een wit kruis op een rode achtergrond."],
      ["Welke vlag hoort bij le Sénégal? Geef het nummer (werkblad 4).", "getal", [4, 0], "Groen, geel en rood met een groene ster."]
    ],
    criteria: ["Logboek elk lesuur ingevuld", "Leesopdrachten en grammatica correct gemaakt", "Luisteropdracht volledig ingevuld", "Fiche van het land volledig, met bronnen", "Schriftelijke voorstelling in correct Frans", "Presentatie van 3 minuten met beelden, vlot en verstaanbaar"],

    lessen: CSF.lessenN({
      t1: "La francophonie",
      weet: "Noteer welke Franstalige landen of steden je al kent.",
      opdracht: "Lees de opdracht. Kies het land dat je later voorstelt.",
      ideeen: "Bedenk waarom zoveel mensen buiten Frankrijk Frans spreken.",
      start: "Werkblad 1: lees de infotekst over de francophonie. Vul de tabel per continent in. Leer de woordenlijst.",
      midden: [
        { titel: "Compréhension écrite", werk: "Werkblad 2: lees de drie berichten. Beantwoord de vragen. Beschrijf de tekeningen in het Frans." },
        { titel: "Grammaire: qui, que, où", werk: "Werkblad 3 en 4: lees de leerkaart. Vul qui, que of où in. Zoek het land en de vlag. Controleer je antwoorden op de site." },
        { titel: "Compréhension orale", werk: "Werkblad 5: bekijk het filmpje via de link bij het project. Beantwoord eerst de globale vragen. Bekijk het opnieuw voor de detailvragen." },
        { titel: "Mon pays: recherche", werk: "Werkblad 6: zoek informatie over je land. Vul de fiche in het Frans in. Noteer je bronnen." },
        { titel: "Mon pays: texte", werk: "Werkblad 7: schrijf je voorstelling in het Frans. Gebruik de vaste zinnen van de leerkaart." },
        { titel: "Mon pays: présentation", werk: "Maak je presentatie in Google Presentaties of PowerPoint. Toon de vlag, een kaart en foto's. Oefen je tekst luidop." }
      ],
      laatste: { titel: "Présentation et quiz", werk: "Stel je land voor in 3 minuten. Maak daarna de quiz ‘Test jezelf’ op de site.", presenteer: "Presenteer je land in het Frans aan een medeleerling of via een opname op Smartschool." }
    }),

    werkbundel: [
      { les: 1, html: `
        ${h.kader("De opdracht", "Ontdek waar ter wereld Frans gesproken wordt. Lees en beluister Franse teksten. Oefen de betrekkelijke voornaamwoorden <b>qui</b>, <b>que</b> en <b>où</b>. Stel daarna zelf een Franstalig land voor, schriftelijk en mondeling. Sluit af met een quiz.")}
        <h2>Werkblad 1 · La francophonie</h2>
        <p>Frans is een wereldtaal. Bijna 400 miljoen mensen spreken Frans. Frans is een officiële taal van de Verenigde Naties en van de Europese Unie. Je hoort Frans op vijf continenten.</p>
        <p><b>In Europa</b> spreken ze Frans in Frankrijk, in Wallonië en Brussel, in het westen van Zwitserland, in Luxemburg en in Monaco. <b>In Amerika</b> is Québec in Canada de grootste Franstalige regio. Ook in Haïti en op de Caraïbische eilanden Guadeloupe en Martinique spreken ze Frans. <b>In Afrika</b> wonen de meeste Franstaligen. Frans is er een officiële taal in onder meer Senegal, Congo, Ivoorkust en Mali. In Marokko, Algerije en Tunesië is Frans een belangrijke tweede taal. <b>In Azië en Oceanië</b> vind je Frans in Libanon, op La Réunion en in Frans-Polynesië.</p>
        <p>Waarom? Frankrijk en België hadden vroeger kolonies. De taal bleef. Sommige gebieden horen nog altijd bij Frankrijk. Ze heten de <b>DROM-COM</b>. De inwoners zijn Fransen en betalen met de euro.</p>
        <h3>Vul de tabel in. Gebruik de tekst.</h3>
        ${h.tabel(["Continent", "Franstalige landen of gebieden"], 5, 26)}
        <h3>Wat weet ik al? Franstalige landen of steden die ik ken</h3>${h.lijnen(1)}` },
      { les: 1, html: `
        ${h.leerkaart("Leerkaart · Le vocabulaire du pays", '<table style="width:100%"><tr><td>le pays · het land</td><td>la capitale · de hoofdstad</td></tr><tr><td>l’habitant · de inwoner</td><td>la langue maternelle · de moedertaal</td></tr><tr><td>la langue officielle · de officiële taal</td><td>le drapeau · de vlag</td></tr><tr><td>la monnaie · de munteenheid</td><td>le climat · het klimaat</td></tr><tr><td>le relief · het reliëf</td><td>la superficie · de oppervlakte</td></tr><tr><td>le plat national · het nationale gerecht</td><td>une attraction touristique · een toeristische attractie</td></tr><tr><td>se trouver · liggen</td><td>il fait chaud / froid · het is warm / koud</td></tr></table>')}
        <h3>Mijn keuze: dit land stel ik voor</h3>
        ${vink(PAYS.map(function (p) { return p.charAt(0).toUpperCase() + p.slice(1); }).concat(["Een ander land, na overleg met mijn coach: ______________________"]))}
        <h3>Waarom kies ik dit land?</h3>${h.lijnen(2)}` },
      { les: 2, html: `
        <h2>Werkblad 2 · Compréhension écrite</h2>
        <div class="twee" style="align-items:start;gap:10px">
        <div style="border:1.5px solid #333;padding:8px 10px;font-size:9.5pt"><b>Carte postale</b><br>Salut! Cet été, j’ai pris le train pour Bruxelles. Bruxelles se trouve au centre de la Belgique, à deux heures de Paris. On y boit beaucoup de bières. On mange des frites et des gaufres. À Bruxelles, on voit aussi la statue célèbre d’un petit garçon.<br>Bisous, Mélanie<br><i>À: Jennifer, Paris</i></div>
        <div style="border:1.5px solid #333;padding:8px 10px;font-size:9.5pt"><b>E-mail</b><br>Salut! Tu connais le Canada? C’est un pays d’Amérique du Nord où il fait très froid. Il neige beaucoup et il y a du vent. Au Canada, on parle l’anglais et le français. Dans la région du Québec, les gens parlent surtout français. J’ai visité de grands parcs et des montagnes. Avec mes amis, j’ai fait une randonnée près d’un grand lac. C’était magnifique!<br>Paul<br><i>À: Marie-Charlotte</i></div></div>
        <div style="border:1.5px solid #333;border-radius:14px;padding:8px 12px;margin-top:8px;font-size:9.5pt;background:#eef3f8"><b>SMS de Lou</b> · L’année dernière, j’ai visité le Sénégal. C’est un pays en Afrique. Il fait très chaud. Au Sénégal, on parle français et wolof. Les gens sont très gentils. J’ai visité beaucoup de marchés. J’ai acheté des souvenirs à Dakar, la capitale. C’est un pays que j’aime beaucoup!</div>
        <h3>1. Qui écrit? À qui?</h3>
        ${h.tabel(["Message", "Qui écrit?", "À qui?"], 3, 22)}
        <h3>2. Vrai ou faux?</h3>
        ${vf(["Le Sénégal est une ville en Afrique.", "Paul a aimé la nature au Canada.", "Au Canada, il fait très froid en hiver.", "Mélanie a mangé des frites à Bruxelles.", "Lou n’a rien acheté au Sénégal."])}` },
      { les: 2, html: `
        <h3>3. Décris les dessins. C’est où?</h3>
        <p>Schrijf bij elke tekening een Franse zin. Gebruik de berichten. Voorbeeld: <i>C’est une gaufre. C’est en Belgique.</i></p>
        <table><tr>${["A", "B"].map(function (k) { return '<td style="text-align:center;width:50%"><b>' + k + "</b><br>" + foto[k] + "</td>"; }).join("")}</tr><tr><td style="height:46px"></td><td></td></tr>
        <tr>${["C", "D"].map(function (k) { return '<td style="text-align:center"><b>' + k + "</b><br>" + foto[k] + "</td>"; }).join("")}</tr><tr><td style="height:46px"></td><td></td></tr></table>
        <h3>Wat lukte vandaag? Welke woorden ken ik nu?</h3>${h.lijnen(2)}` },
      { les: 3, html: `
        <h2>Werkblad 3 · Grammaire: qui, que, où</h2>
        ${h.leerkaart("Leerkaart · Les pronoms relatifs", '<table style="width:100%"><tr><td style="width:22%"><b>qui</b> + werkwoord</td><td>vervangt het onderwerp</td><td><i>Le pays <b>qui</b> est grand s’appelle le Canada.</i></td></tr><tr><td><b>que</b> + onderwerp</td><td>vervangt het lijdend voorwerp</td><td><i>Le pays <b>que</b> j’aime s’appelle le Sénégal.</i></td></tr><tr><td><b>où</b> + onderwerp</td><td>vervangt een plaats (à, dans, en)</td><td><i>La ville <b>où</b> j’habite est petite.</i></td></tr></table><p>Voor een klinker wordt que <b>qu’</b>: <i>le pays qu’il aime</i>.</p>')}
        <h3>1. Complète avec qui, que (qu’) ou où.</h3>
        <ol style="line-height:2.1">
        <li>Port-au-Prince est la capitale d’un pays ______ se trouve dans la mer des Caraïbes. C’est un pays ______ on parle créole et français.</li>
        <li>C’est un petit pays ______ les touristes adorent pour ses montagnes. Genève est une ville ______ on parle français.</li>
        <li>Le cèdre est l’arbre ______ est sur le drapeau de ce pays. Beyrouth est la ville ______ habitent beaucoup de francophones.</li>
        <li>C’est le pays ______ Lou a visité. Dakar est la ville ______ elle a acheté des souvenirs.</li>
        <li>C’est le plus grand pays d’Afrique. Le Sahara est un désert ______ les touristes aiment visiter.</li></ol>` },
      { les: 3, html: `
        <h2>Werkblad 4 · Quel pays? Quel drapeau?</h2>
        <p>Zoek bij elke zin van werkblad 3 het land. Kies uit: <b>l’Algérie, Haïti, le Liban, le Sénégal, la Suisse</b>. Zoek daarna de vlag.</p>
        <div style="display:flex;flex-wrap:wrap;gap:14px;justify-content:center;margin:8px 0">${[1, 2, 3, 4, 5].map(function (n) { return '<div style="text-align:center"><div style="border:1px solid #999;display:inline-block;line-height:0">' + vlag[n] + "</div><br><b>" + n + "</b></div>"; }).join("")}</div>
        <table><tr><th style="width:10%">Zin</th><th>Le pays</th><th style="width:20%">Drapeau nr.</th></tr>${[1, 2, 3, 4, 5].map(function (n) { return '<tr><td style="text-align:center">' + n + '</td><td style="height:30px"></td><td></td></tr>'; }).join("")}</table>
        <h3>2. Écris toi-même une devinette.</h3>
        <p>Schrijf twee zinnen over een Franstalig land. Gebruik qui, que of où. Laat een medeleerling het land raden.</p>${h.lijnen(3)}
        <p class="klein">Controleer je antwoorden op de site, bij ‘Controleer je oplossing’.</p>` },
      { les: 4, html: `
        <h2>Werkblad 5 · Compréhension orale</h2>
        ${h.leerkaart("Leerkaart · Slim luisteren", "<p>Kijk het filmpje eerst één keer helemaal. Let op de grote lijn. Kijk daarna opnieuw en pauzeer. Let op getallen, namen van landen en sleutelwoorden. Je hoeft niet elk woord te begrijpen.</p>")}
        <h3>1. Globaal luisteren</h3>
        <p>Bekijk het filmpje één keer helemaal. Gaat het filmpje over het verleden, het heden of de toekomst van het Frans? Kruis aan.</p>
        <p>&#9744; het verleden &nbsp;&nbsp; &#9744; het heden &nbsp;&nbsp; &#9744; de toekomst</p>
        <p><b>Welke onderwerpen hoor je? Noteer er drie.</b></p>${h.lijnen(3)}
        <h3>2. Detail luisteren</h3>
        <p>Bekijk het filmpje opnieuw. Pauzeer gerust. Antwoord in het Nederlands.</p>
        <table class="fiche"><tr><td class="lbl">Welke getallen hoor je? Wat betekenen ze?</td><td style="height:56px"></td></tr>
        <tr><td class="lbl">Wat verwacht men van de toekomst van het Frans?</td><td style="height:56px"></td></tr>
        <tr><td class="lbl">Vertaal: ‘C’est une bonne nouvelle pour la France.’</td><td style="height:34px"></td></tr>
        <tr><td class="lbl">Waarom is dat zo?</td><td style="height:44px"></td></tr>
        <tr><td class="lbl">Noteer twee maatregelen om Frans wereldwijd te leren.</td><td style="height:56px"></td></tr></table>` },
      { les: 5, html: `
        <h2>Werkblad 6 · Mon pays: recherche</h2>
        <p>Zoek informatie over je land. Noteer kort, in het Frans. Noteer ook je bronnen.</p>
        <table class="fiche"><tr><td class="lbl">Le pays</td><td style="height:24px"></td></tr>
        <tr><td class="lbl">La situation: où? les pays voisins? le relief? la superficie?</td><td style="height:52px"></td></tr>
        <tr><td class="lbl">Le climat: les températures, les saisons</td><td style="height:40px"></td></tr>
        <tr><td class="lbl">L’origine du nom</td><td style="height:32px"></td></tr>
        <tr><td class="lbl">La population: le nombre et la composition</td><td style="height:40px"></td></tr>
        <tr><td class="lbl">Les langues officielles</td><td style="height:26px"></td></tr>
        <tr><td class="lbl">Le drapeau et la monnaie</td><td style="height:32px"></td></tr>
        <tr><td class="lbl">Des souvenirs typiques</td><td style="height:32px"></td></tr>
        <tr><td class="lbl">À visiter (minimum 3)</td><td style="height:44px"></td></tr>
        <tr><td class="lbl">À faire: activités (minimum 3)</td><td style="height:44px"></td></tr>
        <tr><td class="lbl">Le plat national et la gastronomie</td><td style="height:40px"></td></tr>
        <tr><td class="lbl">Mes sources (sites, livres)</td><td style="height:44px"></td></tr></table>` },
      { les: 6, html: `
        <h2>Werkblad 7 · Mon pays: texte</h2>
        ${h.leerkaart("Leerkaart · Présenter un pays", "<p><i>Je vais vous présenter …</i> · <i>… se trouve en …</i> · <i>La capitale est …</i> · <i>Il y a … habitants.</i> · <i>On y parle …</i> · <i>Il fait chaud / froid.</i> · <i>À voir: …</i> · <i>On mange …</i> · <i>Merci de votre attention!</i></p>")}
        <p>Schrijf je voorstelling in het Frans. Gebruik je fiche. Schrijf minstens 12 zinnen. Gebruik minstens één keer qui, que of où.</p>
        ${h.lijnen(16)}
        <p class="klein">&#9744; Alle onderdelen van de fiche staan erin. &nbsp; &#9744; Ik gebruikte qui, que of où. &nbsp; &#9744; Ik controleerde de spelling.</p>` },
      { les: 7, html: `
        <h2>Ma présentation</h2>
        <h3>Mijn dia's</h3>
        ${vink(["Dia 1: de naam van het land, de vlag en mijn naam", "Dia 2: une carte: où se trouve le pays?", "Dia 3: le climat et la population", "Dia 4: les langues, la monnaie, l’origine du nom", "Dia 5: à visiter et à faire, met foto’s", "Dia 6: la gastronomie et des souvenirs", "Dia 7: mes sources"])}
        <h3>Tips voor een goede presentatie</h3>
        ${vink(["Zet weinig tekst op een dia. Vertel de rest zelf.", "Gebruik grote, duidelijke foto’s.", "Oefen je tekst luidop. Neem jezelf eens op.", "Spreek langzaam en duidelijk. Kijk naar je publiek.", "Hou het bij 3 minuten."])}
        <h3>Moeilijke woorden: zo spreek ik ze uit</h3>
        ${h.tabel(["Mot", "Uitspraak", "Betekenis"], 4, 26)}` },
      { les: 8, html: `
        <h2>Présentation et quiz</h2>
        <h3>Feedback op mijn presentatie</h3>
        <table style="text-align:center"><tr><th style="text-align:left">Hoe ging het?</th><th>☆</th><th>☆☆</th><th>☆☆☆</th><th>☆☆☆☆</th></tr>
        ${["Ik sprak vlot en verstaanbaar Frans.", "Alle onderdelen kwamen aan bod.", "Mijn dia's waren duidelijk.", "Ik bleef binnen 3 minuten."].map(function (x) { return '<tr><td style="text-align:left">' + x + "</td><td></td><td></td><td></td><td></td></tr>"; }).join("")}</table>
        <table class="fiche"><tr><td class="lbl">Tip van mijn medeleerling of coach</td><td style="height:60px"></td></tr></table>
        <h3>Quiz</h3>
        <p>Maak de quiz ‘Test jezelf’ op de site. Weet je een antwoord niet? Zoek het op internet. Noteer je score: ____ / 7</p>
        <h3>Wat leerde ik over de francophonie? Wat wil ik ooit bezoeken?</h3>${h.lijnen(4)}` }
    ]
  });
})();
