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
      ["Een MOOC volgen", "Een MOOC is een gratis online cursus van een universiteit. Elke module bevat video’s, teksten en een quiz. Volg de modules in volgorde. Plan zelf je tempo. Noteer na elke module je score.",
        CSF.lk.fig('<svg viewBox="0 0 440 120" role="img" aria-label="Een module: video, tekst, quiz, score noteren"><g font-size="13" text-anchor="middle"><rect x="10" y="35" width="90" height="44" rx="8" fill="#3BC1C5"/><text x="55" y="62" fill="#fff" font-weight="700">▶ video</text><rect x="120" y="35" width="90" height="44" rx="8" fill="#3BC1C5"/><text x="165" y="62" fill="#fff" font-weight="700">tekst</text><rect x="230" y="35" width="90" height="44" rx="8" fill="#FCAF17"/><text x="275" y="62" fill="#fff" font-weight="700">quiz</text><rect x="340" y="35" width="90" height="44" rx="8" fill="#1d1d1b"/><text x="385" y="55" fill="#fff" font-weight="700">score</text><text x="385" y="71" fill="#fff">noteren</text></g><g stroke="#1d1d1b" stroke-width="2"><line x1="100" y1="57" x2="118" y2="57"/><line x1="210" y1="57" x2="228" y2="57"/><line x1="320" y1="57" x2="338" y2="57"/></g><text x="220" y="105" font-size="12" text-anchor="middle" fill="#555">Zo ziet elke module eruit. Daarna begin je aan de volgende.</text></svg>') +
CSF.lk.punten(['<b>MOOC</b> = Massive Open Online Course: een open online cursus voor heel veel mensen tegelijk.', 'Je hebt een account nodig. Gebruik je schoolaccount als dat kan.', 'Je bepaalt zelf je tempo. Een planning helpt je om niet achter te raken.']) +
CSF.lk.vb('<p>Lesuur 1: module 1 · Lesuur 2: module 2 en 3 · Lesuur 3: module 4 en herhaling.</p>', 'Voorbeeld van een planning') +
CSF.lk.tip('Haal je minder dan de helft op de quiz? Bekijk dan het moeilijkste stuk van de video opnieuw voor je verder gaat.')],
      ["Engels leren uit de context", "Lees of beluister een zin twee keer. Raad de betekenis van een onbekend woord uit de zin. Controleer je gok met een woordenboek. Noteer het woord in je leerdagboek.",
        CSF.lk.fig('<svg viewBox="0 0 440 130" role="img" aria-label="Vier stappen bij een onbekend woord"><g font-size="12" text-anchor="middle"><circle cx="55" cy="55" r="38" fill="#eef9f9" stroke="#3BC1C5" stroke-width="2"/><text x="55" y="50" font-weight="700">1. lees</text><text x="55" y="66">2 keer</text><circle cx="165" cy="55" r="38" fill="#eef9f9" stroke="#3BC1C5" stroke-width="2"/><text x="165" y="50" font-weight="700">2. raad</text><text x="165" y="66">uit de zin</text><circle cx="275" cy="55" r="38" fill="#fff4e0" stroke="#FCAF17" stroke-width="2"/><text x="275" y="50" font-weight="700">3. controleer</text><text x="275" y="66">woordenboek</text><circle cx="385" cy="55" r="38" fill="#fff4e0" stroke="#FCAF17" stroke-width="2"/><text x="385" y="50" font-weight="700">4. noteer</text><text x="385" y="66">leerdagboek</text></g><g stroke="#1d1d1b" stroke-width="2"><line x1="93" y1="55" x2="125" y2="55"/><line x1="203" y1="55" x2="235" y2="55"/><line x1="313" y1="55" x2="345" y2="55"/></g><text x="220" y="118" font-size="12" text-anchor="middle" fill="#555">Eerst zelf denken, dan pas opzoeken.</text></svg>') +
CSF.lk.vb('<p><i>The telescope <b>gathers</b> light from faint stars.</i></p><p>Wat doet een telescoop met licht? Hij vangt het op. Dus <b>gathers</b> betekent ongeveer ‘verzamelt’ of ‘vangt op’.</p>') +
CSF.lk.punten(['Kijk naar woorden die op het Nederlands lijken: <i>planet</i>, <i>galaxy</i>, <i>orbit</i>.', 'Kijk naar de tekening of de video bij de zin.', 'Een woord dat vaak terugkomt, is belangrijk. Zoek dat zeker op.']) +
CSF.lk.tip('Noteer in je leerdagboek ook de zin waarin je het woord vond. Zo onthoud je het beter.')],
      ["Notities bij een video", "Zet de ondertiteling aan. Pauzeer na elk belangrijk stuk. Noteer kernwoorden, geen volzinnen. Vat de video daarna samen in 3 zinnen.",
        CSF.lk.fig('<svg viewBox="0 0 420 200" role="img" aria-label="Een notitieblad in drie vakken"><rect x="60" y="10" width="300" height="180" fill="#fff" stroke="#1d1d1b" stroke-width="2"/><line x1="150" y1="10" x2="150" y2="140" stroke="#1d1d1b" stroke-width="2"/><line x1="60" y1="140" x2="360" y2="140" stroke="#1d1d1b" stroke-width="2"/><g font-size="12"><text x="105" y="30" text-anchor="middle" font-weight="700" fill="#17808a">kernwoorden</text><text x="70" y="55">telescope</text><text x="70" y="75">light</text><text x="70" y="95">mirror</text><text x="255" y="30" text-anchor="middle" font-weight="700" fill="#17808a">notities</text><text x="160" y="55">• vangt licht op</text><text x="160" y="75">• grotere spiegel = meer licht</text><text x="160" y="95">• 2:35 tekening van de buis</text><text x="210" y="160" text-anchor="middle" font-weight="700" fill="#b37400">samenvatting in 3 zinnen</text><text x="210" y="178" text-anchor="middle" fill="#555">Een telescoop … Hoe groter … Daarom …</text></g></svg>', 'Links de kernwoorden, rechts korte notities, onderaan je samenvatting.') +
CSF.lk.stappen(['Zet de ondertiteling aan, in het Engels.', 'Pauzeer na elk stuk. Noteer kernwoorden en korte zinnetjes.', 'Noteer de tijd in de video bij een belangrijke tekening. Zo vind je ze terug.', 'Schrijf onderaan je samenvatting in 3 zinnen, zonder te kijken.']) +
CSF.lk.tip('Kan je de samenvatting niet schrijven zonder te kijken? Bekijk dan dat ene stuk opnieuw.')],
      ["Een minicollege geven", "Kies één onderwerp. Begin met een vraag of een verrassend weetje. Leg daarna stap voor stap uit. Gebruik een tekening of een vergelijking uit het dagelijks leven. Eindig met een korte samenvatting.",
        CSF.lk.fig('<svg viewBox="0 0 440 110" role="img" aria-label="Opbouw van een minicollege"><g font-size="12" text-anchor="middle"><rect x="5" y="25" width="100" height="56" rx="8" fill="#FCAF17"/><text x="55" y="50" fill="#fff" font-weight="700">1. Haakje</text><text x="55" y="66" fill="#fff">vraag of weetje</text><rect x="113" y="25" width="100" height="56" rx="8" fill="#3BC1C5"/><text x="163" y="50" fill="#fff" font-weight="700">2. Uitleg</text><text x="163" y="66" fill="#fff">stap voor stap</text><rect x="221" y="25" width="100" height="56" rx="8" fill="#3BC1C5"/><text x="271" y="50" fill="#fff" font-weight="700">3. Beeld</text><text x="271" y="66" fill="#fff">tekening</text><rect x="329" y="25" width="100" height="56" rx="8" fill="#1d1d1b"/><text x="379" y="50" fill="#fff" font-weight="700">4. Samenvatting</text><text x="379" y="66" fill="#fff">in 2 zinnen</text></g><text x="220" y="102" font-size="12" text-anchor="middle" fill="#555">± 3 à 5 minuten</text></svg>') +
CSF.lk.vb('<p><b>Haakje</b>: ‘Wist je dat je naar het verleden kijkt als je naar de sterren kijkt?’</p><p><b>Vergelijking</b>: ‘Een ster is zoals een verre vriend die een brief stuurt. Als de brief aankomt, is je vriend al ouder geworden.’</p>', 'Voorbeeld') +
CSF.lk.tip('Oefen één keer luidop met een timer. Te lang? Schrap eerst details, nooit je haakje of je samenvatting.')],
      ["Een infographic maken", "Een infographic vertelt een verhaal met beeld, cijfers en korte teksten. Kies één boodschap. Gebruik een duidelijke titel. Zet de belangrijkste informatie het grootst.",
        CSF.lk.fig('<svg viewBox="0 0 420 210" role="img" aria-label="Schets van een infographic"><rect x="110" y="5" width="200" height="200" fill="#fff" stroke="#1d1d1b" stroke-width="2"/><rect x="120" y="15" width="180" height="30" fill="#3BC1C5"/><text x="210" y="35" font-size="13" text-anchor="middle" fill="#fff" font-weight="700">TITEL = boodschap</text><text x="210" y="80" font-size="34" text-anchor="middle" font-weight="700" fill="#FCAF17">123</text><text x="210" y="98" font-size="11" text-anchor="middle">groot cijfer + korte uitleg</text><circle cx="150" cy="135" r="18" fill="#eef9f9" stroke="#3BC1C5"/><circle cx="210" cy="135" r="18" fill="#eef9f9" stroke="#3BC1C5"/><circle cx="270" cy="135" r="18" fill="#eef9f9" stroke="#3BC1C5"/><text x="210" y="170" font-size="11" text-anchor="middle">pictogrammen met 3 korte feiten</text><text x="210" y="196" font-size="10" text-anchor="middle" fill="#555">bron: …</text></svg>', 'Van boven naar onder: titel, het belangrijkste cijfer, enkele korte feiten, de bron.') +
CSF.lk.punten(['Eén boodschap. Alles op de infographic helpt die boodschap.', 'Hoe belangrijker, hoe groter.', 'Maximaal 3 kleuren. Gebruik dezelfde kleur voor dezelfde soort informatie.', 'Vermeld onderaan je bron.']) +
CSF.lk.tip('Laat iemand 10 seconden naar je infographic kijken. Kan hij daarna je boodschap zeggen? Dan is ze goed.')]
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
