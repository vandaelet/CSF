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
    voorWie: "Voor leerlingen met nieuwsgierigheid naar de bouw van talen.",
    naam: "Taalbouwers: ontwerp je eigen taal",
    kort: "Kraak een onbekende taal. Bouw daarna een minitaal met eigen klanken, woorden en regels.",
    omschrijving: "Klingon, Elfs en Esperanto zijn bedachte talen. Kraak eerst een onbekende taal met alleen vijf voorbeeldzinnen. Bouw daarna zelf een minitaal voor een volk of wezen naar keuze. Werkt je taal? Bewijs het met de Babel-test.",
    doel: "Je ontdekt de bouwstenen van een taal: klanken, woordvolgorde en woordvorming. Je leert regels zoeken. Je bouwt ook zelf een logisch systeem.",
    bereikt: ["Regels ontdekken in een onbekende taal", "Woordvolgorde uitleggen (onderwerp – voorwerp – werkwoord)", "Woorden bouwen met voor- en achtervoegsels", "Een klein, logisch taalsysteem ontwerpen en testen"],
    toepassen: ["Geordend werken: regels en woorden overzichtelijk noteren", "Regels onthouden en consequent toepassen", "Bijsturen bij problemen", "Kiezen en mijn planning volgen"],
    materiaal: ["Werkbundel", "Potlood, gom, kleurpotloden", "Een toestel met internet voor deze site"],
    oplossing: "Op deze site, bij ‘Controleer je oplossing’. Schrijf eerst je regels en vertalingen in je werkbundel. Kijk daarna de taalpuzzel na.",
    product: "Een taalkaart (A4) met klanken, 12 woorden, 3 regels en 3 vertaalde zinnen en de Babel-test",
    leerkaarten: [
      ["Gebouwde talen", "Esperanto (Zamenhof, 1887) moest mensen van alle landen verbinden. Tolkien bouwde Elfse talen voor zijn verhalen. Klingon en Dothraki werden voor film en tv ontworpen.",
        CSF.lk.tabel(['Taal', 'Wie bouwde ze?', 'Waarvoor?'], [['Esperanto', 'L. Zamenhof, 1887', 'Een makkelijke tweede taal voor iedereen'], ['Elfentalen (Quenya, Sindarin)', 'J.R.R. Tolkien', 'Voor de volkeren in zijn boeken'], ['Klingon', 'Marc Okrand, 1984', 'Voor de buitenaardse wezens in Star Trek'], ['Dothraki', 'David J. Peterson, 2011', 'Voor een ruitervolk in de tv-reeks Game of Thrones']]) +
CSF.lk.vb('<p>Esperanto heeft vaste regels zonder uitzonderingen. <b>bona</b> = goed. Zet er <b>mal-</b> voor en je krijgt het tegendeel: <b>malbona</b> = slecht. Zo maak je ook <b>malgranda</b> (klein) uit <b>granda</b> (groot).</p>') +
CSF.lk.p('Een gebouwde taal heeft dus altijd een <b>doel</b>. Bedenk eerst voor wie jouw taal is: een volk in een verhaal, een geheime clubtaal of een makkelijke taal voor iedereen.')],
      ["Klanken", "Elke taal kiest uit de mogelijke klanken van een menselijke mond. Het Hawaïaans schrijft zich met amper 13 letters. Veel l, m, n en klinkers klinkt zacht. Veel k, g, r en t klinkt hard.",
        CSF.lk.fig('<svg viewBox="0 0 420 150" role="img" aria-label="Zachte en harde klanken"><rect x="10" y="15" width="190" height="120" rx="12" fill="#eef9f9" stroke="#3BC1C5"/><rect x="220" y="15" width="190" height="120" rx="12" fill="#fff4e0" stroke="#FCAF17"/><text x="105" y="40" font-size="15" text-anchor="middle" font-weight="700" fill="#17808a">zacht</text><text x="105" y="70" font-size="18" text-anchor="middle">l · m · n · w</text><text x="105" y="96" font-size="18" text-anchor="middle">a · o · u · ee</text><text x="105" y="124" font-size="14" text-anchor="middle" font-style="italic">Lumina wela</text><text x="315" y="40" font-size="15" text-anchor="middle" font-weight="700" fill="#b37400">hard</text><text x="315" y="70" font-size="18" text-anchor="middle">k · g · r · t · d</text><text x="315" y="96" font-size="18" text-anchor="middle">veel medeklinkers</text><text x="315" y="124" font-size="14" text-anchor="middle" font-style="italic">Kragtor dûk</text></svg>', 'Klanken geven een taal een gevoel. Lees beide voorbeelden luidop.') +
CSF.lk.punten(['Het Hawaïaans gebruikt maar 13 letters: a, e, i, o, u, h, k, l, m, n, p, w en een teken voor een korte stop.', 'Een taal met veel klinkers klinkt zangerig, zoals het Italiaans.', 'Een taal met veel medeklinkers na elkaar klinkt stoer of streng.']) +
CSF.lk.tip('Kies voor je minitaal 8 tot 12 klanken. Schrijf ze op een klankkaart. Gebruik dan alleen die klanken in al je woorden. Zo klinkt je taal echt als één taal.')],
      ["Woordvolgorde", "Talen zetten onderwerp (O), voorwerp (V) en werkwoord (W) in een vaste volgorde. Japans en Turks: O-V-W. Engels: O-W-V. Die twee volgordes komen in de wereld het vaakst voor.",
        CSF.lk.fig('<svg viewBox="0 0 440 150" role="img" aria-label="Woordvolgorde in het Engels en het Japans"><g font-size="14" text-anchor="middle"><text x="10" y="35" text-anchor="start" font-weight="700">Engels O-W-V</text><rect x="140" y="15" width="80" height="32" rx="6" fill="#3BC1C5"/><text x="180" y="36" fill="#fff">Tom</text><rect x="228" y="15" width="80" height="32" rx="6" fill="#FCAF17"/><text x="268" y="36" fill="#fff">eats</text><rect x="316" y="15" width="110" height="32" rx="6" fill="#1d1d1b"/><text x="371" y="36" fill="#fff">an apple</text><text x="10" y="95" text-anchor="start" font-weight="700">Japans O-V-W</text><rect x="140" y="75" width="80" height="32" rx="6" fill="#3BC1C5"/><text x="180" y="96" fill="#fff">Tom wa</text><rect x="228" y="75" width="110" height="32" rx="6" fill="#1d1d1b"/><text x="283" y="96" fill="#fff">ringo o</text><rect x="346" y="75" width="80" height="32" rx="6" fill="#FCAF17"/><text x="386" y="96" fill="#fff">tabemasu</text><text x="220" y="140" fill="#555">turkoois = onderwerp · zwart = voorwerp · oranje = werkwoord</text></g></svg>', 'In het Japans staat het werkwoord achteraan: ‘Tom appel eet’.') +
CSF.lk.vb('<p>Het Nederlands wisselt zelfs. In een hoofdzin: <i>Ik <b>eet</b> een appel</i> (O-W-V). In een bijzin: <i>… omdat ik een appel <b>eet</b></i> (O-V-W).</p>') +
CSF.lk.tip('Kies één volgorde voor je minitaal en hou je eraan. Schrijf de regel bovenaan je woordenlijst.')],
      ["Woordbouw", "Het Turks plakt stukjes achter elkaar: ev = huis, evler = huizen, evlerim = mijn huizen, evlerimde = in mijn huizen.",
        CSF.lk.fig('<svg viewBox="0 0 420 110" role="img" aria-label="Het Turkse woord evlerimde in stukjes"><g font-size="18" text-anchor="middle" font-weight="700"><rect x="20" y="15" width="80" height="44" rx="8" fill="#3BC1C5"/><text x="60" y="44" fill="#fff">ev</text><rect x="108" y="15" width="90" height="44" rx="8" fill="#FCAF17"/><text x="153" y="44" fill="#fff">ler</text><rect x="206" y="15" width="80" height="44" rx="8" fill="#1d1d1b"/><text x="246" y="44" fill="#fff">im</text><rect x="294" y="15" width="80" height="44" rx="8" fill="#d9363e"/><text x="334" y="44" fill="#fff">de</text></g><g font-size="13" text-anchor="middle"><text x="60" y="80">huis</text><text x="153" y="80">meervoud</text><text x="246" y="80">mijn</text><text x="334" y="80">in</text></g><text x="210" y="102" font-size="13" text-anchor="middle" fill="#555">ev + ler + im + de = in mijn huizen</text></svg>', 'Elk blokje heeft één betekenis. Je leest ze van links naar rechts.') +
CSF.lk.p('Zo’n taal noem je een <b>plaktaal</b>. Met een paar blokjes maak je heel veel woorden.') +
CSF.lk.vb('<p>Stel: in je minitaal is <b>tor</b> = berg, <b>-sa</b> = meervoud en <b>-ki</b> = groot. Dan is <b>torsa</b> = bergen en <b>torkisa</b> = grote bergen.</p>') +
CSF.lk.tip('Hou een lijst bij van al je blokjes en hun betekenis. Gebruik altijd dezelfde volgorde van blokjes.')]
    ],
    invalshoek: { intro: "Kies in lesuur 1 de sprekers van je taal. Die keuze bepaalt de klank van je taal.", keuzes: [
      ["Een volk", "Bergreuzen, zeevaarders, een ijsvolk …"], ["Dieren of wezens", "Draken, mieren, robots, onderwaterwezens …"], ["Een geheime club", "Een taal voor jou en je vrienden, met eigen woorden voor school en vrije tijd."]] },
    nogTijd: "Ontwerp een eigen schrift: één teken per klank. Schrijf er je naam en één zin mee.",
    test: [
      ["Wat betekent de woordvolgorde O-V-W?", ["Onderwerp – voorwerp – werkwoord", "Onderwerp – werkwoord – voorwerp", "Werkwoord – onderwerp – voorwerp"], 0, "Zoals in het Japans: ‘Ik appel eet.’"],
      ["In het Turks is ev ‘huis’ en evlerim ‘mijn huizen’. Wat betekent evim?", ["mijn huis", "huizen", "in het huis"], 0, "-ler maakt een meervoud. -im betekent ‘mijn’."],
      ["Welke bedachte taal moest mensen van alle landen verbinden?", ["Esperanto", "Klingon", "Dothraki"], 0, "Zamenhof publiceerde Esperanto in 1887."]
    ],
    controle: [
      ["Welk achtervoegsel maakt in het Marunees een meervoud?", "tekst", ["ni", "-ni"], "Vergelijk mire (kat) en mireni (katten)."],
      ["Opgave 6 · Mireni tolu urosata.", "tekst", ["de katten aten de vis niet"], "Let op het meervoud, de verleden tijd en de ontkenning."],
      ["Opgave 7 · De katten zagen het meisje.", "tekst", ["mireni anu velata"], "Gebruik de volgorde onderwerp – voorwerp – werkwoord. Vergeet de verleden tijd niet."]
    ],
    criteria: ["Logboek elk lesuur ingevuld", "Taalpuzzel: regels gevonden en toegepast", "Klanken en woorden passen bij het volk of wezen", "3 regels, consequent gebruikt", "Babel-test gedaan en taal bijgestuurd"],

    lessen: CSF.lessen3({
      t1: "Opstart: een onbekende taal",
      weet: "Noteer de talen in je hoofd. Noteer ook een bedachte taal uit een boek, film of game.",
      opdracht: "Lees de opdracht. Noteer de onderdelen van je taalkaart.",
      ideeen: "Bedenk minstens 4 volkeren of wezens voor je taal. Kies er één.",
      start: "Kraak het Marunees (werkblad 1). Controleer op de site.",
      t2: "Klanken, woorden en regels",
      werk2: "Kies je klanken. Maak 12 woorden. Leg 3 regels vast.",
      t3: "Taalkaart en Babel-test",
      werk3: "Vertaal 3 zinnen. Maak je taalkaart. Doe de Babel-test.",
      presenteer: "Stel je taal in 2 minuten voor aan een medeleerling of via een opname op Smartschool. Spreek een zin uit."
    }),

    werkbundel: [
      { les: 1, html: `
        ${h.kader("De opdracht", "Bouw een minitaal voor een volk of wezen naar keuze. Je eindproduct is een <b>taalkaart op één A4</b> met: de naam en de sprekers · je klanken · 12 woorden · 3 regels · 3 zinnen met vertaling. Een ander vertaalt een nieuwe zin met alleen jouw taalkaart: de <b>Babel-test</b>.")}
        <p><b>Voor wie kan mijn taal zijn? (minstens 4 ideeën)</b></p>${h.lijnen(2)}
        <p><b>Mijn keuze en mijn reden:</b></p>${h.lijnen(1)}
        <h2>Werkblad 1 · Kraak het Marunees</h2>
        <table><tr><th style="width:45%">Marunees</th><th>Nederlands</th></tr>
        <tr><td class="mono">1. Kaso tolu rosa.</td><td>De hond eet de vis.</td></tr>
        <tr><td class="mono">2. Anu mireni vela.</td><td>Het meisje ziet de katten.</td></tr>
        <tr><td class="mono">3. Bekoni kaso velata.</td><td>De jongens zagen de hond.</td></tr>
        <tr><td class="mono">4. Mire tolu urosa.</td><td>De kat eet de vis niet.</td></tr>
        <tr><td class="mono">5. Anuni beko kumita.</td><td>De meisjes hoorden de jongen.</td></tr></table>
        <p class="klein">Tip: zoek een woord in twee verschillende zinnen. Vergelijk de twee Nederlandse zinnen. Wat hebben ze gemeen?</p>` },
      { les: 1, html: `
        <div class="twee"><div><h3>A · Woordenlijst</h3>${h.tabel(["Marunees", "Nederlands"], 8, 20)}</div>
        <div><h3>B · Regels</h3><table><tr><td style="width:55%">Meervoud?</td><td></td></tr><tr><td>Verleden tijd?</td><td></td></tr><tr><td>‘Niet’?</td><td></td></tr><tr><td>Volgorde onderwerp, voorwerp, werkwoord?</td><td></td></tr></table></div></div>
        <h3>C · Vertaal</h3>
        <p class="mono">6. Mireni tolu urosata. → ______________________________</p>
        <p>7. De katten zagen het meisje. → ______________________________</p>
        ${h.leerkaart("Leerkaart · Hoe talen werken", "<p><b>Klanken.</b> Het Hawaïaans schrijft zich met amper 13 letters. Veel l, m, n en klinkers klinkt zacht. Veel k, g, r en t klinkt hard.</p><p><b>Woordvolgorde.</b> Japans en Turks zeggen ‘Ik appel eet’ (O-V-W). Het Engels zegt ‘I eat an apple’ (O-W-V).</p><p><b>Woordbouw.</b> Turks: ev = huis · ev-ler = huizen · ev-ler-im = mijn huizen.</p>")}` },
      { les: 2, html: `
        <h2>Werkblad 2 · Mijn klanken en woorden</h2>
        <p>Omcirkel de klanken van je taal. Schrap er minstens 6: <span class="mono">a e i o u oe · p b m f v w · t d n s z l r · k g ch ng h</span></p>
        <p>Mijn taal klinkt zacht / hard / zangerig / ______. Mijn reden: ______________________________</p>
        <table><tr><th>Nederlands</th><th>Mijn taal</th><th>Nederlands</th><th>Mijn taal</th></tr>
        ${[["ik", "water"], ["jij", "huis"], ["zien", "vriend"], ["eten", "groot"], ["gaan", "klein"], ["", ""]].map(function (r) { return '<tr><td style="height:24px">' + r[0] + "</td><td></td><td>" + r[1] + "</td><td></td></tr>"; }).join("")}</table>
        <h2>Werkblad 3 · Mijn drie regels</h2>
        <table><tr><th style="width:24%">Onderwerp</th><th>Mijn regel</th><th style="width:34%">Voorbeeld + vertaling</th></tr>
        <tr><td><b>Woordvolgorde</b></td><td style="height:50px"></td><td></td></tr><tr><td><b>Meervoud</b></td><td style="height:50px"></td><td></td></tr>
        <tr><td><b>Kies: verleden tijd, ‘niet’ of een vraag</b></td><td style="height:50px"></td><td></td></tr></table>
        <h3>Wat lukte vandaag? Wat leerde ik?</h3>${h.lijnen(2)}` },
      { les: 3, html: `
        <h2>Mijn taalkaart · eindproduct</h2>
        <table class="fiche"><tr><td class="lbl">Naam van de taal · de sprekers</td><td style="height:30px"></td></tr></table>
        <div class="twee"><div>${h.vak("Klanken", 60)}${h.vak("3 regels met voorbeeld", 160)}</div><div>${h.vak("12 woorden", 160)}${h.vak("3 zinnen + vertaling", 60)}</div></div>
        ${h.kader("Babel-test", "<ol><li>Schrijf een <b>nieuwe</b> zin in je taal: ______________________________</li><li>Geef die zin en je taalkaart aan een andere leerling of aan iemand thuis. Zeg zelf niets. Werk je alleen? Leg je taalkaart even weg. Vertaal je zin daarna terug met alleen je taalkaart.</li><li>Vertaling van de tester: ______________________________ &nbsp; Juist? JA / NEEN</li><li>Wat liep mis? Welke regel pas ik aan?</li></ol>" + h.lijnen(2))}
        <p><b>Presentatie (2 min):</b> de sprekers van mijn taal · de klank (spreek een zin uit) · de les uit de Babel-test</p>` }
    ]
  });
})();
