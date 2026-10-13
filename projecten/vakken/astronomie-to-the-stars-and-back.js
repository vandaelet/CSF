/* astronomie · To the stars and back (project A: met een Coursera-cursus, vanaf 13 jaar)
   Bron: opdracht ‘Astronomie’ van de werkgroep (Coursera-cursus naar keuze).
   Let op: Coursera laat geen gebruikers onder de 13 jaar toe. Jongere leerlingen kiezen project B ‘Reis door het heelal’. */
(function () {
  var h = CSF.h;

  function dagboek(nr) {
    return `
        <h2>Werkblad 2 · Leerdagboek · lesuur ${nr}</h2>
        <table class="fiche"><tr><td class="lbl">Module (nummer en titel)</td><td style="height:30px"></td></tr></table>
        <p><b>Wat leerde ik? Schrijf 3 kernideeën in het Nederlands.</b></p>${h.lijnen(3)}
        <table><tr><th style="width:38%">Nieuw Engels woord</th><th>Betekenis in het Nederlands</th></tr>
        ${[1, 2, 3, 4, 5].map(function () { return '<tr><td style="height:24px"></td><td></td></tr>'; }).join("")}</table>
        <p><b>Quizscore van deze module:</b> ______ / ______ &nbsp; <b>Tijd nodig:</b> ______ min</p>
        <p><b>Wat begreep ik niet? Hoe zoek ik het uit?</b></p>${h.lijnen(2)}
        <p><b>Mijn wow-weetje van vandaag:</b></p>${h.lijnen(1)}`;
  }

  CSF.project({
    id: "astronomie-to-the-stars-and-back",
    soort: "vak",
    vak: "astronomie",
    jaar: "1e en 2e jaar",
    tijd: "10 lesuren",
    sterren: 5,
    voorWie: "Voor leerlingen vanaf 13 jaar met een grote interesse in het heelal en een goede kennis van het Engels. Zelfstandig werken is een must.",
    naam: "To the stars and back: een echte online cursus",
    kort: "Volg online een professionele cursus over astronomie. Leg daarna één onderwerp uit aan anderen.",
    omschrijving: "Zit met je hoofd tussen de sterren met een echte online cursus van een universiteit. De cursus is volledig in het Engels. Dat is een extra uitdaging op talig vlak. Elke module behandelt een ander deelonderwerp van de astronomie. Zo verken je tijd en ruimte. Je bezoekt ook planeten met misschien buitenaards leven. 👽 Elke module bevat video’s, teksten en quizzen. Hou elk lesuur een leerdagboek bij. Leg tot slot één onderwerp uit aan anderen.",
    doel: "Je leert zelfstandig een echte online cursus volgen in het Engels. Je verwerkt nieuwe kennis in een leerdagboek. Je legt een moeilijk onderwerp eenvoudig uit.",
    bereikt: ["Een online cursus (MOOC) zelfstandig volgen", "Engelstalige video’s en teksten begrijpen", "Kernideeën samenvatten in het Nederlands", "Een moeilijk onderwerp eenvoudig uitleggen"],
    toepassen: ["Plannen: modules verdelen over de lesuren", "Volhouden bij moeilijke stof", "Zelfstandig problemen oplossen", "Mijn eigen leren opvolgen met een leerdagboek"],
    materiaal: ["Werkbundel", "Een toestel met internet en eigen oortjes", "Een account op Coursera (vanaf 13 jaar, met toestemming)"],
    oplossing: "De quizzen van je cursus geven zelf je score. Op deze site controleer je enkele basisvragen bij ‘Controleer je oplossing’.",
    product: "Een minicollege van 3 minuten (met A4 of PowerPoint) of een infographic over één onderwerp uit de cursus",
    links: [["Zoek een astronomiecursus op Coursera", "https://www.coursera.org/search?query=astronomie"]],
    leerkaarten: [
      ["Een MOOC volgen", "Een MOOC is een gratis online cursus van een universiteit. Elke module bevat video’s, teksten en een quiz. Volg de modules in volgorde. Plan zelf je tempo. Noteer na elke module je score."],
      ["Engels leren uit de context", "Lees of beluister een zin twee keer. Raad de betekenis van een onbekend woord uit de zin. Controleer je gok met een woordenboek. Noteer het woord in je leerdagboek."],
      ["Notities bij een video", "Zet de ondertiteling aan. Pauzeer na elk belangrijk stuk. Noteer kernwoorden, geen volzinnen. Vat de video daarna samen in 3 zinnen."],
      ["Een minicollege geven", "Kies één onderwerp. Begin met een vraag of een verrassend weetje. Leg daarna stap voor stap uit. Gebruik een tekening of een vergelijking uit het dagelijks leven. Eindig met een korte samenvatting."],
      ["Een infographic maken", "Een infographic vertelt een verhaal met beeld, cijfers en korte teksten. Kies één boodschap. Gebruik een duidelijke titel. Zet de belangrijkste informatie het grootst."]
    ],
    invalshoek: { intro: "Kies in lesuur 1 de vorm van je eindproduct. Kies het onderwerp pas later in de cursus.", keuzes: [
      ["Minicollege met A4", "Leg in 3 minuten één onderwerp uit in het Nederlands. Gebruik één A4 met tekeningen en kernwoorden."],
      ["Minicollege met PowerPoint", "Leg in 3 minuten één onderwerp uit in het Nederlands. Gebruik maximaal 5 dia’s."],
      ["Infographic of poster", "Vat één onderwerp samen op één A4 of A3 met beeld, cijfers en korte teksten."]] },
    nogTijd: "Volg een extra module van je cursus. Of maak een woordenlijst Engels–Nederlands met de 20 belangrijkste woorden van je cursus.",
    test: [
      ["Wat is een lichtjaar?", ["Een afstand", "Een tijdsduur", "Een snelheid"], 0, "Een lichtjaar is de afstand die licht in één jaar aflegt."],
      ["Hoeveel planeten telt ons zonnestelsel?", ["8", "9", "12"], 0, "Pluto is sinds 2006 een dwergplaneet."],
      ["Je begrijpt een Engels woord niet. Wat doe je eerst?", ["De betekenis raden uit de zin", "De video stoppen", "Het woord overslaan"], 0, "Raad eerst. Controleer daarna met een woordenboek."]
    ],
    controle: [
      ["Wat betekent ‘light-year’ in het Nederlands?", "tekst", ["lichtjaar", "een lichtjaar"], "Vertaal beide delen van het woord."],
      ["Licht reist 300 000 km per seconde. De zon staat 150 000 000 km ver. Hoeveel seconden doet zonlicht over de reis?", "getal", [500, 0], "Deel 150 000 000 door 300 000."],
      ["Hoeveel planeten telt ons zonnestelsel?", "getal", [8, 0], "Pluto telt niet meer mee."]
    ],
    criteria: ["Logboek elk lesuur ingevuld", "Leerdagboek na elke module volledig", "Minstens 6 modules gevolgd met quizscore", "Eindproduct inhoudelijk juist en in eigen woorden", "Uitleg helder voor leeftijdsgenoten"],

    lessen: CSF.lessenN({
      t1: "Opstart: kies je cursus",
      weet: "Noteer je voorkennis over het heelal. Noteer ook je ervaring met Engelstalige video’s.",
      opdracht: "Lees de opdracht. Noteer de onderdelen van je eindproduct.",
      ideeen: "Vergelijk minstens 3 cursussen op Coursera. Kies één cursus. Kies de vorm van je eindproduct.",
      start: "Werkblad 1: maak je planning. Start met module 1.",
      midden: [
        { titel: "Module volgen", werk: "Volg de volgende module van je cursus. Vul je leerdagboek in. Noteer je quizscore." },
        { titel: "Module volgen", werk: "Volg de volgende module van je cursus. Vul je leerdagboek in. Noteer je quizscore." },
        { titel: "Module volgen", werk: "Volg de volgende module van je cursus. Vul je leerdagboek in. Noteer je quizscore." },
        { titel: "Module volgen", werk: "Volg de volgende module van je cursus. Vul je leerdagboek in. Noteer je quizscore." },
        { titel: "Module volgen", werk: "Volg de volgende module van je cursus. Vul je leerdagboek in. Noteer je quizscore." },
        { titel: "Module volgen en onderwerp kiezen", werk: "Volg de volgende module van je cursus. Vul je leerdagboek in. Kies het onderwerp van je eindproduct." },
        { titel: "Laatste module", werk: "Volg de laatste module. Vul je leerdagboek in. Kijk je planning na." },
        { titel: "Mijn eindproduct", werk: "Werkblad 3: plan je eindproduct. Maak je A4, je dia’s of je infographic." }
      ],
      laatste: { titel: "Presenteren en evalueren", werk: "Werk je eindproduct af. Oefen je uitleg twee keer luidop.", presenteer: "Geef je minicollege of stel je infographic voor aan een medeleerling, je coach of via een opname op Smartschool." }
    }),

    werkbundel: [
      { les: 1, html: `
        ${h.kader("De opdracht", "Volg een echte online cursus astronomie op Coursera. De cursus is in het Engels. Hou na elke module een <b>leerdagboek</b> bij. Kies tot slot één onderwerp. Leg het uit in een <b>minicollege</b> of een <b>infographic</b>.")}
        ${h.kader("Let op", "Coursera laat alleen gebruikers vanaf <b>13 jaar</b> toe. Maak je account met toestemming van je ouders en je coach. Ben je jonger dan 13? Kies dan het project ‘Reis door het heelal’.")}
        <p><b>Wat weet ik al over het heelal?</b></p>${h.lijnen(2)}
        <h2>Werkblad 1 · Mijn cursus kiezen</h2>
        <p>Open de link bij het project. Vergelijk minstens 3 cursussen. Kies cursussen met een gratis optie.</p>
        <table><tr><th>Titel van de cursus</th><th style="width:22%">Universiteit</th><th style="width:12%">Modules</th><th style="width:22%">Spreekt me aan omdat …</th></tr>
        ${[1, 2, 3].map(function () { return '<tr><td style="height:40px"></td><td></td><td></td><td></td></tr>'; }).join("")}</table>
        <p><b>Mijn keuze:</b> ____________________________________ &nbsp; <b>Mijn eindproduct:</b> minicollege met A4 / minicollege met PowerPoint / infographic</p>` },
      { les: 1, html: `
        <h2>Werkblad 1 · Mijn planning</h2>
        <p>Verdeel de modules over lesuur 2 tot 8. Vink af wat klaar is.</p>
        <table><tr><th style="width:14%">Lesuur</th><th>Module (nummer en titel)</th><th style="width:16%">Quizscore</th><th style="width:9%">Klaar</th></tr>
        ${[2, 3, 4, 5, 6, 7, 8].map(function (n) { return "<tr><td>" + n + '</td><td style="height:30px"></td><td></td><td style="text-align:center;font-size:13pt">&#9744;</td></tr>'; }).join("")}
        <tr><td>9</td><td>Mijn eindproduct maken</td><td></td><td style="text-align:center;font-size:13pt">&#9744;</td></tr>
        <tr><td>10</td><td>Presenteren en evalueren</td><td></td><td style="text-align:center;font-size:13pt">&#9744;</td></tr></table>
        ${h.leerkaart("Leerkaart · Een MOOC volgen", "<p>Een MOOC is een gratis online cursus van een universiteit. Elke module bevat video’s, teksten en een quiz. Volg de modules in volgorde. Plan zelf je tempo. Noteer na elke module je score.</p>")}
        ${h.leerkaart("Leerkaart · Engels leren uit de context", "<p>Lees of beluister een zin twee keer. Raad de betekenis van een onbekend woord uit de zin. Controleer je gok met een woordenboek. Noteer het woord in je leerdagboek. Zet bij video’s de ondertiteling aan.</p>")}
        <h3>Wat lukte vandaag? Wat nog niet?</h3>${h.lijnen(2)}` },
      { les: 2, html: dagboek(2) }, { les: 3, html: dagboek(3) }, { les: 4, html: dagboek(4) }, { les: 5, html: dagboek(5) },
      { les: 6, html: dagboek(6) }, { les: 7, html: dagboek(7) }, { les: 8, html: dagboek(8) },
      { les: 9, html: `
        <h2>Werkblad 3 · Mijn eindproduct plannen</h2>
        <table class="fiche"><tr><td class="lbl">Mijn onderwerp</td><td style="height:30px"></td></tr>
        <tr><td class="lbl">Mijn vorm</td><td>minicollege met A4 / minicollege met PowerPoint / infographic</td></tr>
        <tr><td class="lbl">Mijn kernboodschap in één zin</td><td style="height:44px"></td></tr></table>
        <table><tr><th style="width:22%">Deel</th><th>Inhoud</th></tr>
        <tr><td><b>Begin</b><br><span class="klein">een vraag of een verrassend weetje</span></td><td style="height:70px"></td></tr>
        <tr><td><b>Midden</b><br><span class="klein">uitleg in stappen, met een vergelijking</span></td><td style="height:130px"></td></tr>
        <tr><td><b>Slot</b><br><span class="klein">korte samenvatting</span></td><td style="height:60px"></td></tr>
        <tr><td><b>Beeld</b><br><span class="klein">tekening, schema of cijfers</span></td><td style="height:60px"></td></tr></table>
        <p><b>Moeilijke woorden die ik zeker uitleg:</b></p>${h.lijnen(2)}` },
      { les: 10, html: `
        <h2>Feedback op mijn eindproduct</h2>
        <p>Vraag een medeleerling of je coach om feedback.</p>
        <table><tr><th>Vraag</th><th style="width:12%">☺</th><th style="width:12%">😐</th><th style="width:12%">☹</th></tr>
        ${["Begreep je het onderwerp na mijn uitleg?", "Was de opbouw duidelijk?", "Hielp het beeld bij de uitleg?", "Sprak ik duidelijk en rustig?"].map(function (x) { return "<tr><td>" + x + "</td><td></td><td></td><td></td></tr>"; }).join("")}</table>
        <p><b>Tip van mijn luisteraar:</b></p>${h.lijnen(2)}
        <p><b>Wat was het moeilijkste aan een cursus in het Engels? Hoe loste ik dat op?</b></p>${h.lijnen(3)}
        <p><b>Welke module wil ik later nog eens herbekijken? Waarom?</b></p>${h.lijnen(2)}` }
    ]
  });
})();
