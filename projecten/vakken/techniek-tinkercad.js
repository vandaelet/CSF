/* techniek · Tinkercad
   Bron: de fiche ‘Werken met TINKERCAD – digitaal bouwen’ van de werkgroep, uitgewerkt tot 3 lesuren. */
(function () {
  var h = CSF.h;
  function vink(lijst) { return "<table>" + lijst.map(function (x) { return '<tr><td style="width:7%;text-align:center;font-size:13pt">&#9744;</td><td>' + x + "</td></tr>"; }).join("") + "</table>"; }
  function fiche(lijst) { return '<table class="fiche">' + lijst.map(function (v) { return '<tr><td class="lbl">' + v[0] + '</td><td style="height:' + (v[1] || 30) + 'px">' + (v[2] || "") + "</td></tr>"; }).join("") + "</table>"; }
  // Eigen tekening: overhang tot 45° kan, meer niet
  function overhang() {
    return '<svg width="100%" height="120" viewBox="0 0 520 120" font-family="Arial" font-size="12">' +
      '<rect x="0" y="100" width="520" height="4" fill="#888"/>' +
      '<polygon points="40,100 120,100 120,40 80,40" fill="#3bc1c5"/><text x="80" y="118" text-anchor="middle" fill="#2e8b57">✓ schuin (45°)</text>' +
      '<polygon points="210,100 250,100 250,40 300,40 300,55 265,55 265,100" fill="#3bc1c5"/><text x="255" y="118" text-anchor="middle" fill="#d64545">✗ zwevend uitsteeksel</text>' +
      '<polygon points="380,100 470,100 470,90 380,90" fill="#3bc1c5"/><polygon points="390,90 460,90 425,40" fill="#3bc1c5"/><text x="425" y="118" text-anchor="middle" fill="#2e8b57">✓ brede, vlakke bodem</text></svg>';
  }

  CSF.project({
    id: "techniek-tinkercad",
    soort: "vak",
    vak: "techniek",
    jaar: "1e en 2e jaar",
    tijd: "3 lesuren",
    sterren: 3,
    naam: "Tinkercad",
    kort: "Ontwerp je eigen 3D-vormen voor de 3D-printer.",
    voorWie: "Voor leerlingen die graag ontwerpen en ruimtelijk kunnen denken.",
    omschrijving: "Wou jij altijd al je eigen speelgoed ontwerpen? 🏰 Grijp je kans met het programma Tinkercad! Bekijk de online instructievideo’s. Ontwerp daarna zelf nieuwe creaties. Gebruik de juiste berekeningen en tools in het programma. Zo test je de stevigheid van je bouwsel. Stort het in? Of beleef je er nog jaren plezier aan?",
    doel: "Je leert de basis van Tinkercad. Je ontwerpt een eigen voorwerp met de juiste maten. Je houdt rekening met de regels voor 3D-printen. Je bewaart je ontwerp als bestand voor de 3D-printer.",
    bereikt: ["Werken met basisvormen: plaatsen, verschalen, draaien", "Vormen groeperen en gaten maken", "Werken met maten in millimeter", "Een ontwerp printbaar maken", "Een technische schets maken"],
    toepassen: ["Ruimtelijk denken", "Nauwkeurig werken met maten", "Zelfstandig leren met instructiefilmpjes", "Doorzetten tot het ontwerp klopt"],
    materiaal: ["Werkbundel", "Een Chromebook met internet en een muis", "Een lat en een potlood voor je schets"],
    oplossing: "Op deze site, bij ‘Controleer je oplossing’. Je coach controleert je ontwerp met de checklist.",
    product: "Een eigen 3D-ontwerp in Tinkercad, klaar om te printen (STL-bestand)",
    links: [["Tinkercad: aanmelden in de klas", "https://www.tinkercad.com/joinclass/GQAMB1S9B"], ["Instructiefilmpjes (YouTube-afspeellijst)", "https://www.youtube.com/playlist?list=PL5K4kDJA7DovtEdvsVyrga6Zka8OmJ_xY"]],
    leerkaarten: [
      ["Aanmelden in Tinkercad", "Surf naar de link ‘Tinkercad: aanmelden in de klas’ bij het project. Kies ‘Leerlingen’. Vul je gegevens in. Ben je ingelogd? Ga naar ‘Ontwerpen’. Daar maak je een nieuw ontwerp."],
      ["De basis", "Sleep een vorm op het werkvlak. Versleep de witte blokjes om de maten te veranderen. Draai met de gebogen pijl. Til op met het zwarte kegeltje. Maak van een vorm een ‘gat’ en groepeer: zo snijd je een stuk weg."],
      ["Maten", "Tinkercad werkt in millimeter. Klik op een blokje om een maat in te typen. Gebruik de liniaal voor nauwkeurige afstanden. Hou een voorwerp kleiner dan 10 cm: zo blijft de printtijd kort."],
      ["Printbaar ontwerpen", "Geef je voorwerp een vlakke, brede bodem. Maak wanden minstens 2 mm dik. Vermijd zwevende delen: een uitsteeksel mag maximaal 45 graden schuin lopen. Laat alle delen elkaar raken of groepeer ze."]
    ],
    invalshoek: { intro: "Kies in lesuur 1 wat je ontwerpt.", keuzes: [
      ["Speelgoed", "Een kasteel, een auto, een figuurtje …"],
      ["Iets nuttigs", "Een gsm-houder, een sleutelhanger, een pennenbakje …"],
      ["Een naamplaatje", "Je naam in 3D-letters op een plaatje."]] },
    nogTijd: "Ontwerp een tweede voorwerp dat in je eerste past, zoals een deksel op een doosje.",
    test: [
      ["In welke eenheid werkt Tinkercad?", ["Millimeter", "Centimeter", "Meter"], 0, "Typ je maten in mm."],
      ["Hoe snijd je een stuk uit een vorm?", ["Maak er een gat van en groepeer", "Druk op delete", "Maak de vorm doorzichtig"], 0, "Een ‘gat’ wordt weggesneden bij het groeperen."],
      ["Welk ontwerp print het best?", ["Een voorwerp met een vlakke, brede bodem", "Een voorwerp op een punt", "Een voorwerp met zwevende delen"], 0, "De printer bouwt laag per laag van onder naar boven."]
    ],
    controle: [
      ["Hoe dik moet een wand minstens zijn? (in mm)", "getal", [2, 0], "Kijk op de leerkaart ‘Printbaar ontwerpen’."],
      ["Hoeveel graden mag een uitsteeksel maximaal schuin lopen?", "getal", [45, 0], "Kijk op de tekening."],
      ["Een blokje is 3 cm breed. Wat typ je in Tinkercad?", "getal", [30, 0], "1 cm = 10 mm."]
    ],
    criteria: ["Logboek elk lesuur ingevuld", "Instructiefilmpjes bekeken en oefeningen gemaakt", "Schets met maten", "Ontwerp met minstens 5 vormen, een gat en een groep", "Ontwerp printbaar: vlakke bodem, wanden ≥ 2 mm, geen zwevende delen", "STL-bestand bewaard en gedeeld"],

    lessen: CSF.lessenN({
      t1: "Aanmelden en de basis",
      weet: "Noteer wat je al weet over 3D-printen of tekenprogramma’s.",
      opdracht: "Lees de opdracht. Meld je aan in Tinkercad via de link bij het project.",
      ideeen: "Bedenk drie voorwerpen die je zou willen ontwerpen.",
      start: "Werkblad 1: bekijk de eerste instructiefilmpjes. Oefen elke techniek in een nieuw ontwerp.",
      midden: [
        { titel: "Schetsen en ontwerpen", werk: "Werkblad 2: maak een schets met maten. Bouw je ontwerp in Tinkercad." }
      ],
      laatste: { titel: "Printklaar maken", werk: "Werkblad 3: controleer je ontwerp met de checklist. Bewaar het als STL-bestand. Deel het met je coach.", presenteer: "Toon je ontwerp aan een medeleerling. Leg uit waarom het printbaar is." }
    }),

    werkbundel: [
      { les: 1, html: `
        ${h.kader("De opdracht", "Ontwerp je eigen 3D-voorwerp in <b>Tinkercad</b>. Leer de basis met de instructiefilmpjes. Maak een schets met maten. Bouw je ontwerp en maak het klaar voor de 3D-printer.")}
        ${h.leerkaart("Leerkaart · Aanmelden in Tinkercad", "<ol><li>Surf naar de link ‘Tinkercad: aanmelden in de klas’ bij het project.</li><li>Kies <b>Leerlingen</b>. Vul je gegevens in.</li><li>Ben je ingelogd? Ga naar <b>Ontwerpen</b>.</li><li>Maak een nieuw ontwerp.</li></ol>")}
        ${h.leerkaart("Leerkaart · De basis", "<p>Sleep een vorm op het werkvlak. Versleep de witte blokjes om de maten te veranderen. Draai met de gebogen pijl. Til op met het zwarte kegeltje. Maak van een vorm een <b>gat</b> en <b>groepeer</b>: zo snijd je een stuk weg.</p>")}
        <h2>Werkblad 1 · Oefenen met de filmpjes</h2>
        ${vink(["Een vorm plaatsen en verschalen", "Een vorm draaien en optillen", "Vormen uitlijnen", "Een gat maken en groeperen", "Tekst toevoegen", "Een vorm kopiëren en spiegelen"])}
        <h3>Drie voorwerpen die ik zou willen ontwerpen</h3>${h.lijnen(3)}` },
      { les: 2, html: `
        <h2>Werkblad 2 · Mijn schets met maten</h2>
        ${h.leerkaart("Leerkaart · Maten", "<p>Tinkercad werkt in <b>millimeter</b>. Klik op een blokje om een maat te typen. Gebruik de liniaal. Hou je voorwerp kleiner dan 10 cm: zo blijft de printtijd kort.</p>")}
        ${fiche([["Mijn voorwerp", 30], ["Waarvoor dient het?", 40]])}
        <table><tr><td style="width:50%;height:250px;vertical-align:top"><b>Vooraanzicht</b> (met maten in mm)</td><td style="vertical-align:top"><b>Bovenaanzicht</b> (met maten in mm)</td></tr></table>
        <h3>Mijn vormen</h3>
        <table><tr><th>Vorm</th><th>Lengte (mm)</th><th>Breedte (mm)</th><th>Hoogte (mm)</th><th>Gat?</th></tr>${[1, 2, 3, 4, 5, 6].map(function () { return '<tr><td style="height:26px"></td><td></td><td></td><td></td><td style="text-align:center">&#9744;</td></tr>'; }).join("")}</table>` },
      { les: 3, html: `
        <h2>Werkblad 3 · Printklaar maken</h2>
        ${h.leerkaart("Leerkaart · Printbaar ontwerpen", "<p>Geef je voorwerp een <b>vlakke, brede bodem</b>. Maak wanden minstens <b>2 mm</b> dik. Vermijd zwevende delen: een uitsteeksel mag maximaal <b>45 graden</b> schuin lopen. Laat alle delen elkaar raken of groepeer ze.</p>")}
        ${overhang()}
        <h3>Checklist</h3>
        ${vink(["Mijn voorwerp heeft een vlakke bodem op het werkvlak.", "Alle wanden zijn minstens 2 mm dik.", "Er zijn geen zwevende delen.", "Alle delen zijn gegroepeerd tot één geheel.", "Mijn voorwerp is kleiner dan 10 cm.", "Ik bewaarde mijn ontwerp als STL-bestand (Exporteren → .STL).", "Ik deelde mijn ontwerp met mijn coach."])}
        ${fiche([["Wat was het moeilijkst?", 50], ["Waar ben ik trots op?", 50]])}` }
    ]
  });
})();
