/* Oefenproject Talen · Taalbouwers */
(function () {
  var h = CSF.h;
  CSF.project({
    id: "talen",
    soort: "oefen",
    domein: "Talen",
    jaar: "1e jaar",
    tijd: "3 lesuren",
    sterren: 3,
    voorWie: "Voor leerlingen die nieuwsgierig zijn naar hoe talen in elkaar zitten.",
    naam: "Taalbouwers: ontwerp je eigen taal",
    kort: "Kraak een onbekende taal en bouw daarna een mini-taal met eigen klanken, woorden en regels.",
    omschrijving: "Klingon, Elfs en Esperanto zijn talen die iemand ooit bedacht heeft. Jij kraakt eerst een onbekende taal met alleen vijf voorbeeldzinnen. Daarna bouw je zelf een mini-taal voor een volk of wezen naar keuze. Werkt je taal? Dat bewijs je met de Babel-test.",
    doel: "Je ontdekt hoe talen in elkaar zitten: klanken, woordvolgorde en woordvorming. Je leert regels zoeken én zelf een logisch systeem bouwen.",
    bereikt: ["Regels ontdekken in een onbekende taal", "Uitleggen wat woordvolgorde is (onderwerp – voorwerp – werkwoord)", "Woorden bouwen met voor- en achtervoegsels", "Een klein, logisch taalsysteem ontwerpen en testen"],
    toepassen: ["Geordend werken: regels en woorden overzichtelijk noteren", "Regels onthouden en consequent toepassen", "Bijsturen als iets niet werkt", "Kiezen en mijn planning volgen"],
    materiaal: ["Werkbundel", "Potlood, gom, kleurpotloden", "Een toestel met internet voor deze site"],
    oplossing: "Op deze site, bij ‘Controleer je oplossing’. Kijk de taalpuzzel pas na als je regels en vertalingen in je werkbundel staan.",
    product: "Een taalkaart (A4) met klanken, 12 woorden, 3 regels en 3 vertaalde zinnen + de Babel-test",
    leerkaarten: [
      ["Gebouwde talen", "Esperanto (Zamenhof, 1887) moest mensen van alle landen verbinden. Tolkien bouwde Elfse talen voor zijn verhalen. Klingon en Dothraki werden voor film en tv ontworpen."],
      ["Klanken", "Elke taal kiest uit de klanken die een mond kan maken. Het Hawaïaans schrijft zich met amper 13 letters. Veel l, m, n en klinkers klinkt zacht; veel k, g, r en t klinkt hard."],
      ["Woordvolgorde", "Talen zetten onderwerp (O), voorwerp (V) en werkwoord (W) in een vaste volgorde. Japans en Turks: O-V-W. Engels: O-W-V. Die twee komen in de wereld het vaakst voor."],
      ["Woordbouw", "Het Turks plakt stukjes achter elkaar: ev = huis, evler = huizen, evlerim = mijn huizen, evlerimde = in mijn huizen."]
    ],
    invalshoek: { intro: "In lesuur 1 kies je voor wie je taal is. Dat bepaalt hoe ze klinkt.", keuzes: [
      ["Een volk", "Bergreuzen, zeevaarders, een ijsvolk …"], ["Dieren of wezens", "Draken, mieren, robots, onderwaterwezens …"], ["Een geheime club", "Een taal voor jou en je vrienden, met eigen woorden voor school en vrije tijd."]] },
    nogTijd: "Ontwerp een eigen schrift: één teken per klank. Schrijf er je naam en één zin mee.",
    test: [
      ["Wat betekent de woordvolgorde O-V-W?", ["Onderwerp – voorwerp – werkwoord", "Onderwerp – werkwoord – voorwerp", "Werkwoord – onderwerp – voorwerp"], 0, "Zoals in het Japans: ‘Ik appel eet.’"],
      ["In het Turks is ev ‘huis’ en evlerim ‘mijn huizen’. Wat betekent evim?", ["mijn huis", "huizen", "in het huis"], 0, "-ler maakt meervoud en -im betekent ‘mijn’."],
      ["Welke taal werd bedacht om mensen van alle landen te verbinden?", ["Esperanto", "Klingon", "Dothraki"], 0, "Zamenhof publiceerde Esperanto in 1887."]
    ],
    controle: [
      ["Welk achtervoegsel maakt in het Marunees een meervoud?", "tekst", ["ni", "-ni"], "Vergelijk mire (kat) en mireni (katten)."],
      ["Opgave 6 · Mireni tolu urosata.", "tekst", ["de katten aten de vis niet"], "Let op het meervoud, de verleden tijd en de ontkenning."],
      ["Opgave 7 · De katten zagen het meisje.", "tekst", ["mireni anu velata"], "Onderwerp – voorwerp – werkwoord, en vergeet de verleden tijd niet."]
    ],
    criteria: ["Logboek elk lesuur ingevuld", "Taalpuzzel: regels gevonden en toegepast", "Klanken en woorden passen bij het volk of wezen", "3 regels, consequent gebruikt", "Babel-test gedaan en taal bijgestuurd"],

    lessen: CSF.lessen3({
      t1: "Opstart: een onbekende taal",
      weet: "Noteer welke talen je kent en welke bedachte taal je kent uit een boek, film of game.",
      opdracht: "Lees de opdracht: wat moet er op je taalkaart?",
      ideeen: "Bedenk minstens 4 volkeren of wezens voor je taal en kies er één.",
      start: "Kraak het Marunees (werkblad 1). Controleer op de site.",
      t2: "Klanken, woorden en regels",
      werk2: "Kies je klanken, maak 12 woorden en leg 3 regels vast.",
      t3: "Taalkaart en Babel-test",
      werk3: "Vertaal 3 zinnen, maak je taalkaart en doe de Babel-test.",
      presenteer: "Stel je taal in 2 minuten voor aan een medeleerling, of neem jezelf op voor Smartschool. Spreek een zin uit."
    }),

    werkbundel: [
      { les: 1, html: `
        ${h.kader("De opdracht", "Bouw een mini-taal voor een volk of wezen naar keuze. Je eindproduct is een <b>taalkaart op één A4</b> met: de naam en wie ze spreekt · je klanken · 12 woorden · 3 regels · 3 zinnen met vertaling. Iemand anders moet een nieuwe zin kunnen vertalen met alleen jouw taalkaart: de <b>Babel-test</b>.")}
        <p><b>Voor wie kan mijn taal zijn? (minstens 4 ideeën)</b></p>${h.lijnen(2)}
        <p><b>Mijn keuze en waarom:</b></p>${h.lijnen(1)}
        <h2>Werkblad 1 · Kraak het Marunees</h2>
        <table><tr><th style="width:45%">Marunees</th><th>Nederlands</th></tr>
        <tr><td class="mono">1. Kaso tolu rosa.</td><td>De hond eet de vis.</td></tr>
        <tr><td class="mono">2. Anu mireni vela.</td><td>Het meisje ziet de katten.</td></tr>
        <tr><td class="mono">3. Bekoni kaso velata.</td><td>De jongens zagen de hond.</td></tr>
        <tr><td class="mono">4. Mire tolu urosa.</td><td>De kat eet de vis niet.</td></tr>
        <tr><td class="mono">5. Anuni beko kumita.</td><td>De meisjes hoorden de jongen.</td></tr></table>
        <p class="klein">Tip: zoek een woord dat in twee zinnen terugkomt. Wat hebben die twee Nederlandse zinnen gemeen?</p>` },
      { les: 1, html: `
        <div class="twee"><div><h3>A · Woordenlijst</h3>${h.tabel(["Marunees", "Nederlands"], 8, 20)}</div>
        <div><h3>B · Regels</h3><table><tr><td style="width:55%">Meervoud?</td><td></td></tr><tr><td>Verleden tijd?</td><td></td></tr><tr><td>‘Niet’?</td><td></td></tr><tr><td>Volgorde onderwerp, voorwerp, werkwoord?</td><td></td></tr></table></div></div>
        <h3>C · Vertaal</h3>
        <p class="mono">6. Mireni tolu urosata. → ______________________________</p>
        <p>7. De katten zagen het meisje. → ______________________________</p>
        ${h.leerkaart("Leerkaart · Hoe talen werken", "<p><b>Klanken.</b> Het Hawaïaans schrijft zich met amper 13 letters. Veel l, m, n en klinkers klinkt zacht. Veel k, g, r en t klinkt hard.</p><p><b>Woordvolgorde.</b> Japans en Turks zeggen ‘Ik appel eet’ (O-V-W), het Engels ‘I eat an apple’ (O-W-V).</p><p><b>Woordbouw.</b> Turks: ev = huis · ev-ler = huizen · ev-ler-im = mijn huizen.</p>")}` },
      { les: 2, html: `
        <h2>Werkblad 2 · Mijn klanken en woorden</h2>
        <p>Omcirkel de klanken die je taal gebruikt en schrap er minstens 6: <span class="mono">a e i o u oe · p b m f v w · t d n s z l r · k g ch ng h</span></p>
        <p>Mijn taal klinkt zacht / hard / zangerig / ______ omdat ______________________________</p>
        <table><tr><th>Nederlands</th><th>Mijn taal</th><th>Nederlands</th><th>Mijn taal</th></tr>
        ${[["ik", "water"], ["jij", "huis"], ["zien", "vriend"], ["eten", "groot"], ["gaan", "klein"], ["", ""]].map(function (r) { return '<tr><td style="height:24px">' + r[0] + "</td><td></td><td>" + r[1] + "</td><td></td></tr>"; }).join("")}</table>
        <h2>Werkblad 3 · Mijn drie regels</h2>
        <table><tr><th style="width:24%">Onderwerp</th><th>Mijn regel</th><th style="width:34%">Voorbeeld + vertaling</th></tr>
        <tr><td><b>Woordvolgorde</b></td><td style="height:50px"></td><td></td></tr><tr><td><b>Meervoud</b></td><td style="height:50px"></td><td></td></tr>
        <tr><td><b>Kies: verleden tijd, ‘niet’ of een vraag</b></td><td style="height:50px"></td><td></td></tr></table>
        <h3>Wat lukte vandaag? Wat leerde ik?</h3>${h.lijnen(2)}` },
      { les: 3, html: `
        <h2>Mijn taalkaart · eindproduct</h2>
        <table class="fiche"><tr><td class="lbl">Naam van de taal · wie spreekt ze?</td><td style="height:30px"></td></tr></table>
        <div class="twee"><div>${h.vak("Klanken", 60)}${h.vak("3 regels met voorbeeld", 160)}</div><div>${h.vak("12 woorden", 160)}${h.vak("3 zinnen + vertaling", 60)}</div></div>
        ${h.kader("Babel-test", "<ol><li>Schrijf een <b>nieuwe</b> zin in je taal: ______________________________</li><li>Geef die zin en je taalkaart aan een andere leerling (of iemand thuis). Jij zegt niets. Werk je alleen? Leg je taalkaart even weg en vertaal je zin daarna terug met alleen je taalkaart.</li><li>Vertaling van de tester: ______________________________ &nbsp; Juist? JA / NEEN</li><li>Wat liep mis? Welke regel pas ik aan?</li></ol>" + h.lijnen(2))}
        <p><b>Presentatie (2 min):</b> voor wie is mijn taal · hoe klinkt ze (spreek een zin uit) · wat leerde de Babel-test mij?</p>` }
    ]
  });
})();
