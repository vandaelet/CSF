/* Nederlands · Gezelschapsspel
   Bron: de Bookwidget ‘GEZELSCHAPSSPEL’ van de werkgroep, aangevuld tot een project van 5 lesuren.
   Accent voor Nederlands: heldere spelregels schrijven (instructieve tekst). */
(function () {
  var h = CSF.h;

  // Bouwplaat dobbelsteen op ware grootte (vlakken van 30 mm). Tegenover elkaar: 1-6, 2-5, 3-4.
  function dobbelsteen() {
    var z = 30, ogen = {
      1: [[.5, .5]], 2: [[.25, .25], [.75, .75]], 3: [[.25, .25], [.5, .5], [.75, .75]],
      4: [[.25, .25], [.75, .25], [.25, .75], [.75, .75]], 5: [[.25, .25], [.75, .25], [.5, .5], [.25, .75], [.75, .75]],
      6: [[.25, .22], [.75, .22], [.25, .5], [.75, .5], [.25, .78], [.75, .78]] };
    var vlakken = [[1, 0, 1], [1, 1, 2], [0, 1, 3], [2, 1, 4], [1, 2, 6], [1, 3, 5]];
    var s = '<svg width="' + (3 * z + 2) + 'mm" height="' + (4 * z + 2) + 'mm" viewBox="-1 -1 ' + (3 * z + 2) + " " + (4 * z + 2) + '">';
    vlakken.forEach(function (v) {
      var x = v[0] * z, y = v[1] * z;
      s += '<rect x="' + x + '" y="' + y + '" width="' + z + '" height="' + z + '" fill="#fff" stroke="#111" stroke-width="0.4"/>';
      ogen[v[2]].forEach(function (o) { s += '<circle cx="' + (x + o[0] * z) + '" cy="' + (y + o[1] * z) + '" r="2.6" fill="#111"/>'; });
    });
    return s + "</svg>";
  }
  // Vier pionnen om te plooien tot een driehoekje (ware grootte)
  function pionnen() {
    var s = '<svg width="128mm" height="64mm" viewBox="0 0 128 64">';
    for (var i = 0; i < 4; i++) {
      var x = 2 + i * 32;
      s += '<rect x="' + x + '" y="2" width="26" height="60" fill="#fff" stroke="#111" stroke-width="0.4"/>' +
        '<line x1="' + x + '" y1="22" x2="' + (x + 26) + '" y2="22" stroke="#17808a" stroke-width="0.4" stroke-dasharray="1.5 1"/>' +
        '<line x1="' + x + '" y1="42" x2="' + (x + 26) + '" y2="42" stroke="#17808a" stroke-width="0.4" stroke-dasharray="1.5 1"/>' +
        '<text x="' + (x + 13) + '" y="58" font-size="3.4" font-family="Arial" text-anchor="middle" fill="#888">plakrand</text>';
    }
    return s + "</svg>";
  }
  // Lege speelkaartjes (60 × 40 mm)
  function kaartjes(n) {
    var s = '<svg width="186mm" height="' + (Math.ceil(n / 3) * 42 + 2) + 'mm" viewBox="0 0 186 ' + (Math.ceil(n / 3) * 42 + 2) + '">';
    for (var i = 0; i < n; i++) s += '<rect x="' + (1 + (i % 3) * 62) + '" y="' + (1 + Math.floor(i / 3) * 42) + '" width="60" height="40" rx="3" fill="#fff" stroke="#111" stroke-width="0.4" stroke-dasharray="2 1"/>';
    return s + "</svg>";
  }
  function regelvak(titel, hoogte, hint) {
    return '<table><tr><th>' + titel + (hint ? ' <span class="klein" style="font-weight:400">· ' + hint + "</span>" : "") + '</th></tr><tr><td style="height:' + hoogte + 'px"></td></tr></table>';
  }

  CSF.project({
    id: "nederlands-gezelschapsspel",
    soort: "vak",
    vak: "Nederlands",
    jaar: "1e en 2e jaar",
    tijd: "5 lesuren",
    sterren: 1,
    voorWie: "Voor creatieve taalgebruikers met een voorliefde voor spelletjes.",
    naam: "Gezelschapsspel: ontwerp je eigen spel",
    kort: "Ontwikkel zelf een gezelschapsspel van A tot Z.",
    omschrijving: "We spelen vanavond een spel! En JIJ ontwerpt het! 🎲 Ga de uitdaging aan. Bedenk een eigen gezelschapsspel. Kies zelf je thema. Verzin de zotste spelregels. Schrijf ze helder en duidelijk uit. Wie wint jouw spel: de eerlijke speler of de grootste valsspeler? Jij beslist!",
    doel: "Je ontwerpt een eigen gezelschapsspel. Je schrijft heldere spelregels voor een doelgroep naar keuze. Je test je spel en verbetert je regels.",
    bereikt: ["Soorten gezelschapsspellen herkennen", "Een instructieve tekst schrijven: duidelijke spelregels", "Taal afstemmen op een doelgroep", "Feedback verwerken in een herschreven tekst"],
    toepassen: ["Creatief denken: een eigen thema en eigen regels", "Plannen: vijf lesuren goed verdelen", "Nauwkeurig formuleren: geen enkele regel laat twijfel", "Doorzetten na een mislukte testronde"],
    materiaal: ["Werkbundel (met bouwplaat voor een dobbelsteen, pionnen en kaartjes)", "Potlood, gom, stiften, kleurpotloden, schaar, lijm of plakband", "Kosteloos materiaal: karton, papier, doppen", "Een toestel met internet"],
    oplossing: "Je spel heeft geen vaste oplossing. Laat je spel testen. Je coach beoordeelt het met het rooster.",
    product: "Een speelklaar gezelschapsspel met spelbord of kaarten en een spelregelboekje",
    links: [["Stappenplan: je eigen bordspel maken (wikiHow)", "https://nl.wikihow.com/Je-eigen-bordspel-maken"]],
    leerkaarten: [
      ["Soorten gezelschapsspellen", "Bij een bordspel verplaats je pionnen over een spelbord, zoals bij Ganzenbord. Bij een kaartspel draait alles om kaarten, zoals bij Uno. Bij een quizspel beantwoord je vragen, zoals bij Triviant. Bij een woordspel bouw of raad je woorden, zoals bij Scrabble. Bij een coöperatief spel winnen of verliezen alle spelers samen."],
      ["De onderdelen van een spel", "Elk spel heeft een doel. Elk spel heeft materiaal. De spelregels leggen het verloop van een beurt uit. Het einde van het spel en de winnaar staan vast."],
      ["Goede spelregels schrijven", "Spelregels zijn een instructieve tekst. Schrijf korte zinnen. Begin elke instructie met een werkwoord: ‘Gooi de dobbelsteen.’ Nummer de stappen. Gebruik telkens hetzelfde woord voor hetzelfde ding. Leg een moeilijke regel uit met een voorbeeld."],
      ["Een spelregelboekje", "Een spelregelboekje heeft vaste delen: het doel van het spel, de inhoud van de doos, de voorbereiding, het verloop van een beurt, de speciale vakken of kaarten en het einde van het spel."],
      ["Een testronde", "Laat anderen je spel spelen met alleen je spelregels. Zeg zelf niets. Noteer elke vraag van de spelers. Elke vraag wijst op een onduidelijke regel."]
    ],
    invalshoek: { intro: "Kies in lesuur 1 je doelgroep.", keuzes: [
      ["Kinderen van de lagere school", "Eenvoudige regels, veel kleur en een korte speelduur."],
      ["Klasgenoten", "Een spel voor je eigen klas, met een knipoog naar de school."],
      ["Leeftijdsgenoten", "Een spannend spel voor jongeren van 12 tot 14 jaar."]] },
    nogTijd: "Ontwerp een doos voor je spel. Schrijf op de achterkant een wervende tekst van 3 zinnen.",
    test: [
      ["Met welk woord begint een goede instructie?", ["Een werkwoord: ‘Gooi …’", "Een lidwoord: ‘De …’", "Een vraagwoord: ‘Wie …’"], 0, "Spelregels zijn instructies. Begin met de gebiedende wijs."],
      ["Wat hoort zeker in elk spelregelboekje?", ["Het einde van het spel en de winnaar", "De prijs van het spel", "Het adres van de maker"], 0, "De spelers moeten weten wanneer het spel stopt."],
      ["Een testspeler stelt een vraag over een regel. Wat betekent dat?", ["De regel is onduidelijk", "De speler let niet op", "De regel is te kort"], 0, "Elke vraag wijst op een regel om te herschrijven."]
    ],
    controle: [
      ["Herschrijf als instructie: ‘Je moet de dobbelsteen gooien.’", "tekst", ["gooi de dobbelsteen"], "Begin met het werkwoord in de gebiedende wijs."],
      ["Twee tegenover elkaar liggende vlakken van een dobbelsteen tellen samen altijd …", "getal", [7, 0], "Kijk naar de 1 en de 6."],
      ["Hoeveel ogen staan er in totaal op een dobbelsteen?", "getal", [21, 0], "Tel 1 + 2 + 3 + 4 + 5 + 6."]
    ],
    criteria: ["Logboek elk lesuur ingevuld", "Spel past bij de gekozen doelgroep", "Spelregelboekje volledig: doel, inhoud, voorbereiding, verloop, einde", "Spelregels in korte instructies met een gebiedende wijs", "Spel getest en regels herschreven", "Spel verzorgd en speelklaar"],

    lessen: CSF.lessenN({
      t1: "Opstart: inspiratie en doelgroep",
      weet: "Noteer je favoriete gezelschapsspellen en hun sterke punten.",
      opdracht: "Lees de opdracht. Noteer de onderdelen van je eindproduct.",
      ideeen: "Brainstorm minstens 5 ideeën voor een spel. Kies je doelgroep.",
      start: "Werkblad 1: vul je brainstorm aan. Kies je beste idee.",
      midden: [
        { titel: "Het spelontwerp", werk: "Volg het stappenplan van wikiHow bij het project. Werkblad 2: bepaal het doel, het thema, de spelers en het materiaal. Schets je spelbord of je kaarten." },
        { titel: "Spelbord en materiaal", werk: "Werk je spelbord of je kaarten uit. Knip en plak de dobbelsteen en de pionnen van de bouwplaat. Gebruik kosteloos materiaal." },
        { titel: "De spelregels", werk: "Werkblad 4: schrijf je spelregelboekje. Controleer elke regel met de checklist." }
      ],
      laatste: { titel: "Testen en presenteren", werk: "Werkblad 5: laat je spel testen zonder uitleg. Noteer de vragen van de spelers. Herschrijf de onduidelijke regels.", presenteer: "Stel je spel in 2 minuten voor aan een medeleerling of via een opname op Smartschool." }
    }),

    werkbundel: [
      { les: 1, html: `
        ${h.kader("De opdracht", "Ontwerp een eigen <b>gezelschapsspel</b> voor een doelgroep naar keuze. Kies zelf het thema en de soort spel. Maak het spelbord of de kaarten. Schrijf een <b>spelregelboekje</b> met heldere instructies. Laat je spel testen. Verbeter daarna je regels.")}
        <h3>Wat weet ik al? Mijn favoriete gezelschapsspellen</h3>
        ${h.tabel(["Spel", "Soort spel", "Sterk punt"], 3, 26)}
        ${h.leerkaart("Leerkaart · Soorten gezelschapsspellen", "<ul><li><b>Bordspel:</b> verplaats pionnen over een spelbord, zoals bij Ganzenbord.</li><li><b>Kaartspel:</b> alles draait om kaarten, zoals bij Uno.</li><li><b>Quizspel:</b> beantwoord vragen, zoals bij Triviant.</li><li><b>Woordspel:</b> bouw of raad woorden, zoals bij Scrabble.</li><li><b>Coöperatief spel:</b> alle spelers winnen of verliezen samen.</li></ul>")}
        <h2>Werkblad 1 · Brainstorm</h2>
        <p>Bedenk minstens 5 ideeën. Combineer gerust een thema met een soort spel.</p>
        <table><tr><th style="width:7%">Nr.</th><th>Mijn idee</th><th style="width:24%">Thema</th><th style="width:22%">Soort spel</th></tr>
        ${[1, 2, 3, 4, 5].map(function (n) { return '<tr><td style="text-align:center">' + n + '</td><td style="height:30px"></td><td></td><td></td></tr>'; }).join("")}</table>` },
      { les: 1, html: `
        <h2>Mijn keuze</h2>
        <table class="fiche"><tr><td class="lbl">Dit idee is mijn keuze</td><td style="height:44px"></td></tr>
        <tr><td class="lbl">Mijn doelgroep</td><td>kinderen van de lagere school / klasgenoten / leeftijdsgenoten</td></tr>
        <tr><td class="lbl">Mijn reden</td><td style="height:60px"></td></tr></table>
        ${h.leerkaart("Leerkaart · De onderdelen van een spel", "<p>Elk spel heeft een <b>doel</b>. Elk spel heeft <b>materiaal</b>. De <b>spelregels</b> leggen het verloop van een beurt uit. Het <b>einde</b> van het spel en de <b>winnaar</b> staan vast.</p>")}
        <p><b>Wat maakt mijn spel anders dan een bestaand spel?</b></p>${h.lijnen(3)}
        <h3>Wat lukte vandaag? Wat nog niet?</h3>${h.lijnen(2)}` },
      { les: 2, html: `
        <h2>Werkblad 2 · Het spelontwerp</h2>
        <p>Open het stappenplan van wikiHow via de link bij het project. Gebruik het als leidraad. Vul deze fiche in.</p>
        <table class="fiche"><tr><td class="lbl">Naam van het spel</td><td style="height:28px"></td></tr>
        <tr><td class="lbl">Thema of verhaal</td><td style="height:40px"></td></tr>
        <tr><td class="lbl">Doel: zo win je</td><td style="height:40px"></td></tr>
        <tr><td class="lbl">Aantal spelers · speelduur</td><td style="height:28px"></td></tr>
        <tr><td class="lbl">Materiaal</td><td style="height:40px"></td></tr></table>
        ${h.vak("Schets van mijn spelbord of mijn kaarten", 330)}
        <h3>Wat lukte vandaag? Wat leerde ik?</h3>${h.lijnen(2)}` },
      { les: 3, html: `
        <h2>Werkblad 3 · Bouwplaat</h2>
        <p>Knip de dobbelsteen uit. Plooi langs de lijnen. Plak de randen met plakband of lijm. Tegenover elkaar tellen de ogen samen altijd 7.</p>
        <div class="twee" style="align-items:start"><div style="text-align:center">${dobbelsteen()}<br><span class="klein">dobbelsteen · ware grootte</span></div>
        <div><p class="klein">Teken op elke pion een figuur. Plooi langs de stippellijnen tot een driehoekje. Plak de plakrand vast.</p><div style="text-align:center">${pionnen()}</div></div></div>
        <h3>Lege kaartjes</h3>
        <p class="klein">Schrijf op elk kaartje een opdracht, een vraag of een kans. Knip ze daarna uit.</p>
        <div style="text-align:center">${kaartjes(6)}</div>` },
      { les: 3, html: `
        <h2>Mijn spelmateriaal</h2>
        <p>Vink af wat klaar is. Gebruik kosteloos materiaal: karton, papier, doppen.</p>
        <table><tr><th>Onderdeel</th><th style="width:34%">Materiaal</th><th style="width:9%">Klaar</th></tr>
        ${["Spelbord of speelkaarten", "Pionnen", "Dobbelsteen", "Kaartjes met opdrachten of vragen", "Doos of zakje", ""].map(function (x) { return '<tr><td style="height:30px">' + x + '</td><td></td><td style="text-align:center;font-size:13pt">&#9744;</td></tr>'; }).join("")}</table>
        ${h.vak("Ruimte voor extra kaartjes of een ontwerp", 360)}
        <h3>Wat lukte vandaag? Wat nog niet?</h3>${h.lijnen(2)}` },
      { les: 4, html: `
        <h2>Werkblad 4 · Mijn spelregelboekje (1)</h2>
        ${h.leerkaart("Leerkaart · Goede spelregels schrijven", "<ul><li>Schrijf korte zinnen.</li><li>Begin elke instructie met een werkwoord: <b>‘Gooi de dobbelsteen.’</b></li><li>Nummer de stappen.</li><li>Gebruik telkens hetzelfde woord voor hetzelfde ding.</li><li>Leg een moeilijke regel uit met een voorbeeld.</li></ul>")}
        ${regelvak("1. Doel van het spel", 70, "zo win je")}
        ${regelvak("2. Inhoud van de doos", 70, "som al het materiaal op")}
        ${regelvak("3. Voorbereiding", 110, "wat doen de spelers voor de start?")}` },
      { les: 4, html: `
        <h2>Werkblad 4 · Mijn spelregelboekje (2)</h2>
        ${regelvak("4. Verloop van een beurt", 190, "nummer de stappen")}
        ${regelvak("5. Speciale vakken of kaarten", 110, "")}
        ${regelvak("6. Einde van het spel en winnaar", 80, "")}
        <h3>Checklist</h3>
        <table>${["Elke instructie begint met een werkwoord.", "Elke zin is kort.", "De stappen zijn genummerd.", "Hetzelfde ding heeft telkens dezelfde naam.", "Het einde en de winnaar staan erin.", "De taal past bij mijn doelgroep.", "Ik heb mijn spelling nagekeken."].map(function (x) { return '<tr><td style="width:7%;text-align:center;font-size:13pt">&#9744;</td><td>' + x + "</td></tr>"; }).join("")}</table>` },
      { les: 5, html: `
        <h2>Werkblad 5 · De testronde</h2>
        <p>Laat 2 tot 4 spelers je spel spelen met alleen je spelregels. Zeg zelf niets. Noteer elke vraag of elk probleem.</p>
        <p><b>Mijn testspelers:</b> ______________________________ &nbsp; <b>Speelduur:</b> ______ min &nbsp; <b>Winnaar:</b> ____________</p>
        <table><tr><th>Vraag of probleem van de spelers</th><th style="width:12%">Regel nr.</th><th style="width:38%">Mijn verbetering</th></tr>
        ${[1, 2, 3, 4, 5].map(function () { return '<tr><td style="height:44px"></td><td></td><td></td></tr>'; }).join("")}</table>
        <h3>Score van de spelers</h3>
        <table style="text-align:center"><tr><th style="text-align:left">Hoe vonden de spelers …</th><th>☆</th><th>☆☆</th><th>☆☆☆</th><th>☆☆☆☆</th></tr>
        ${["het plezier?", "de duidelijkheid van de regels?", "de moeilijkheid voor de doelgroep?"].map(function (x) { return '<tr><td style="text-align:left">' + x + "</td><td></td><td></td><td></td><td></td></tr>"; }).join("")}</table>
        <p><b>Presenteren (2 min):</b> je spel en je doelgroep · een beurt uitgelegd · je beste verbetering na de test.</p>` }
    ]
  });
})();
