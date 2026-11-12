/* Nederlands · Mijn eigen boek
   Een lang schrijfproject (16 lesuren, verlengen kan) in het eigen schrijfatelier van de CSF-site (schrijfatelier/index.html).
   Het atelier vervangt Scrivener: dat programma werkt niet op de Chromebooks van de school.
   De leerling kiest zelf de lengte van zijn boek en spreekt die af met zijn coach. */
(function () {
  var h = CSF.h;
  var ATELIER = "schrijfatelier/";
  function vink(lijst) { return "<table>" + lijst.map(function (x) { return '<tr><td style="width:7%;text-align:center;font-size:13pt">&#9744;</td><td>' + x + "</td></tr>"; }).join("") + "</table>"; }
  function fiche(lijst) { return '<table class="fiche">' + lijst.map(function (v) { return '<tr><td class="lbl">' + v[0] + '</td><td style="height:' + (v[1] || 30) + 'px">' + (v[2] || "") + "</td></tr>"; }).join("") + "</table>"; }
  function verhaalberg() {
    var pt = [[80, 150, "1. Begin"], [175, 105, "2. Probleem"], [280, 30, "3. Spanning"], [385, 105, "4. Oplossing"], [480, 150, "5. Slot"]];
    return '<svg width="100%" height="190" viewBox="0 -10 560 190" font-family="Arial" font-size="12">' +
      '<path d="M20 150 L120 150 L280 30 L440 150 L540 150" fill="none" stroke="#3bc1c5" stroke-width="5" stroke-linejoin="round"/>' +
      pt.map(function (p, i) { var ty = i === 2 ? p[1] - 12 : p[1] + 22; return '<circle cx="' + p[0] + '" cy="' + p[1] + '" r="7" fill="#fcaf17"/><text x="' + p[0] + '" y="' + ty + '" text-anchor="middle" font-weight="700">' + p[2] + "</text>"; }).join("") + "</svg>";
  }
  var schrijven = function (extra) { return "Open het schrijfatelier. Bekijk je doelen en je prikbord. Schrijf je volgende scène. Haal je dagdoel." + (extra ? " " + extra : ""); };

  CSF.project({
    id: "nederlands-mijn-eigen-boek",
    soort: "vak",
    vak: "Nederlands",
    jaar: "2e jaar",
    tijd: "16 lesuren (verlengen kan)",
    sterren: 5,
    naam: "Mijn eigen boek",
    kort: "Schrijf een echt boek in je eigen schrijfatelier: van het eerste idee tot een gedrukt exemplaar.",
    voorWie: "Voor wie droomt van een eigen boek en het volhoudt om weken aan één verhaal te werken.",
    omschrijving: "Heb je ooit een boek gelezen en gedacht: dat kan ik ook? ✍️ Dan is dit je kans. In je eigen <b>schrijfatelier</b> werk je zoals echte schrijvers: met hoofdstukken en scènes, een prikbord, fiches voor je personages en een verhaalberg. Je kiest zelf hoe dik je boek wordt. Een schrijfcoach tipt je over je zinnen en je coach leest mee. Op het einde druk je je boek af, met cover en flaptekst. Het grootste schrijfproject van CSF: het vraagt doorzetting. Maar straks kan jij zeggen dat je een boek schreef!",
    doel: "Je schrijft een lang verhaal met een duidelijke opbouw. Je maakt personages die iets willen en veranderen. Je schrijft scènes met dialogen en je toont in plaats van te vertellen. Je herschrijft je tekst met feedback. Je plant een groot project en houdt het vol.",
    bereikt: ["Een idee uitwerken tot een verhaalplan", "Levende personages bedenken", "Een verhaal opbouwen met scènes", "Tonen in plaats van vertellen", "Dialogen juist schrijven", "Herschrijven met feedback"],
    toepassen: ["Doorzetten en plannen: weken aan één boek werken", "Feedback vragen en verwerken", "Kritisch kijken naar je eigen tekst"],
    materiaal: ["Werkbundel", "Een Chromebook met je schoolaccount", "Het schrijfatelier (link bij het project)"],
    oplossing: "De schrijfcoach in het atelier, je coach en je proeflezers geven feedback. De kennisvragen controleer je bij ‘Controleer je oplossing’.",
    product: "Een eigen boek met cover, hoofdstukken en flaptekst, afgedrukt of als PDF",
    links: [["Schrijfatelier", ATELIER]],
    atelier: ATELIER,   /* het dashboard toont bij de leerling een knop naar zijn boek */

    leerkaarten: [
      ["Van idee tot verhaal", "Elk verhaal begint met een vraag: <b>wat als …?</b> Wat als een jongen ontdekt dat zijn buurman nooit slaapt? Kies de vraag die jou het nieuwsgierigst maakt. Schrijf daarna je boek in één zin: <b>wie</b> wil <b>wat</b>, wat staat er <b>in de weg</b>, en wat staat er <b>op het spel</b>?",
        CSF.lk.fig('<svg viewBox="0 0 440 120" role="img" aria-label="Van wat als-vraag naar boek in één zin"><g font-size="12" text-anchor="middle"><rect x="5" y="30" width="120" height="60" rx="10" fill="#FCAF17"/><text x="65" y="56" font-weight="700">wat als …?</text><text x="65" y="74">veel ideeën</text><path d="M128 60 L158 60" stroke="#1d1d1b" stroke-width="2"/><path d="M152 55 L160 60 L152 65" fill="#1d1d1b"/><rect x="162" y="30" width="120" height="60" rx="10" fill="#3BC1C5"/><text x="222" y="56" fill="#fff" font-weight="700">het beste idee</text><text x="222" y="74" fill="#fff">waar ik zin in heb</text><path d="M285 60 L315 60" stroke="#1d1d1b" stroke-width="2"/><path d="M309 55 L317 60 L309 65" fill="#1d1d1b"/><rect x="319" y="30" width="116" height="60" rx="10" fill="#17808a"/><text x="377" y="56" fill="#fff" font-weight="700">één zin</text><text x="377" y="74" fill="#fff">wie, wat, hindernis</text></g></svg>') +
        CSF.lk.vb('<p><b>Wat als</b> een meisje een oude gsm vindt die berichten krijgt uit de toekomst?</p><p><b>In één zin:</b> Noor (13) wil haar broer redden van een ongeluk dat de gsm voorspelt, maar niemand gelooft haar, en ze heeft maar drie dagen.</p>', 'Voorbeeld') +
        CSF.lk.tip('Schrijf minstens vijf ‘wat als’-vragen. De eerste is zelden de beste.')],
      ["Personages die leven", "Een levend personage <b>wil</b> iets, is <b>bang</b> voor iets en heeft een <b>zwakte</b>. Tijdens het verhaal <b>verandert</b> het. Geef het één opvallend kenmerk dat de lezer onthoudt: een gewoonte, een voorwerp, een manier van praten.",
        CSF.lk.tabel(['Vlak personage ✗', 'Levend personage ✓'], [['Tom is aardig en sportief.', 'Tom wil de beste keeper van de club worden, maar hij durft niet te duiken sinds hij zijn pols brak.'], ['Ze is gemeen.', 'Ze lacht anderen uit omdat ze bang is dat iemand haar geheim ontdekt.'], ['Hij is grappig.', 'Hij maakt een grap als het spannend wordt: dan hoeft hij niet te zeggen wat hij voelt.']]) +
        CSF.lk.punten(['<b>Wil</b>: het doel dat het verhaal vooruit duwt.', '<b>Angst en zwakte</b>: wat het moeilijk maakt.', '<b>Geheim</b>: iets wat de lezer pas later ontdekt.', '<b>Verandering</b>: wat leert je personage?']) +
        CSF.lk.tip('Vul in het atelier bij ‘Personages’ een fiche in. Zo blijven de ogen van je hoofdpersonage op bladzijde 40 dezelfde kleur als op bladzijde 2.')],
      ["De verhaalberg en scènes", "Je verhaal klimt een berg op: <b>begin</b>, <b>probleem</b>, <b>spanning</b> tot het hoogtepunt, <b>oplossing</b> en <b>slot</b>. Je schrijft het in kleine stukjes: <b>scènes</b>. Een scène is één moment op één plek. In elke scène wil je personage iets, er is een hindernis, en er verandert iets.",
        CSF.lk.fig('<svg viewBox="0 0 440 150" role="img" aria-label="De verhaalberg met scènes als kaartjes"><path d="M15 125 L80 125 L220 25 L360 125 L425 125" fill="none" stroke="#3BC1C5" stroke-width="4" stroke-linejoin="round"/><g fill="#fffef6" stroke="#e8c97a"><rect x="30" y="100" width="34" height="22" rx="3"/><rect x="95" y="88" width="34" height="22" rx="3"/><rect x="135" y="62" width="34" height="22" rx="3"/><rect x="175" y="38" width="34" height="22" rx="3"/><rect x="232" y="38" width="34" height="22" rx="3"/><rect x="290" y="72" width="34" height="22" rx="3"/><rect x="375" y="100" width="34" height="22" rx="3"/></g><g font-size="11" text-anchor="middle" fill="#17808a" font-weight="700"><text x="47" y="145">begin</text><text x="125" y="145">probleem</text><text x="220" y="16">spanning</text><text x="310" y="145">oplossing</text><text x="392" y="145">slot</text></g></svg>', 'Elk kaartje is een scène. De meeste scènes horen bij de spanning.') +
        CSF.lk.stappen(['<b>Doel</b>: wat wil je personage in deze scène?', '<b>Hindernis</b>: wie of wat staat in de weg?', '<b>Uitkomst</b>: lukt het, mislukt het, of wordt het erger?']) +
        CSF.lk.tip('Leg je scènes als kaartjes op het prikbord van het atelier. Verschuif ze tot de volgorde klopt. Pas dan begin je te schrijven.')],
      ["Wie vertelt, en wanneer?", "Kies wie je verhaal vertelt. Een <b>ik-verteller</b> speelt zelf mee: de lezer weet alleen wat ‘ik’ weet. Een <b>hij- of zij-verteller</b> staat er een beetje naast. Kies ook een tijd: <b>verleden tijd</b> (‘hij liep’) of <b>tegenwoordige tijd</b> (‘hij loopt’). Blijf erbij in je hele boek.",
        CSF.lk.tabel(['', 'Zo klinkt het', 'Voordeel'], [['ik, verleden tijd', 'Ik draaide me om. Achter me stond niemand.', 'dicht bij het personage'], ['zij, verleden tijd', 'Lien draaide zich om. Achter haar stond niemand.', 'je kan wisselen tussen personages'], ['ik, tegenwoordige tijd', 'Ik draai me om. Achter me staat niemand.', 'het voelt alsof het nu gebeurt']]) +
        CSF.lk.let('Wissel niet zomaar van tijd midden in een scène. Lees je tekst na: staat alles in dezelfde tijd?') +
        CSF.lk.tip('Twijfel je? Schrijf je eerste bladzijde twee keer: één keer met ‘ik’ en één keer met ‘hij’ of ‘zij’. Welke voelt beter?')],
      ["Tonen, niet vertellen", "Zeg niet letterlijk wat je personage voelt. <b>Toon</b> het: wat doet het, wat zegt het, wat voelt het in zijn lijf? Gebruik je <b>zintuigen</b>: wat zie, hoor, ruik, proef en voel je? Zo beleeft de lezer het verhaal mee.",
        CSF.lk.tabel(['Vertellen ✗', 'Tonen ✓'], [['Sam was zenuwachtig.', 'Sam trommelde met zijn vingers op de bank. Hij keek voor de derde keer op de klok.'], ['Het was een eng huis.', 'De trap kraakte bij elke stap. Het rook naar natte kranten.'], ['Ze was blij.', 'Ze sprong op en sloeg haar armen om haar zus.']]) +
        CSF.lk.punten(['👁️ zien · 👂 horen · 👃 ruiken · 👅 proeven · ✋ voelen', 'Twee zintuigen per plek is vaak genoeg.']) +
        CSF.lk.tip('De schrijfcoach in het atelier duidt zinnen als ‘hij was bang’ aan. Probeer ze om te zetten.')],
      ["Dialogen schrijven", "Een dialoog maakt je personages levendig. Zet wat iemand zegt tussen <b>aanhalingstekens</b>. Begin een <b>nieuwe alinea</b> als iemand anders spreekt. ‘Zei’ en ‘vroeg’ zijn prima werkwoorden: de lezer let vooral op wat er gezegd wordt.",
        CSF.lk.tabel(['Zo schrijf je het', 'Let op'], [['“Kom je mee?” vroeg Lisa.', 'het vraagteken staat binnen de aanhalingstekens'], ['“Nee,” zei Bram, “ik blijf hier.”', 'de zin loopt door: komma en kleine letter'], ['Lisa zuchtte. “Dan ga ik alleen.”', 'een handeling in plaats van ‘zei’']]) +
        CSF.lk.punten(['Echte mensen praten in korte zinnen en onderbreken elkaar.', 'Laat niet iedereen hetzelfde klinken: geef elk personage een eigen stem.', 'Een dialoog zonder doel kan weg. Elk gesprek brengt iets aan het licht of zet iets in gang.']) +
        CSF.lk.tip('Lees je dialogen hardop. Klinkt het zoals mensen echt praten?')],
      ["Herschrijven", "Een eerste versie mag slecht zijn: schrijven en verbeteren zijn twee aparte klussen. Herschrijf in drie rondes. Eerst het <b>verhaal</b>: klopt de opbouw? Dan de <b>scènes</b>: is elke scène nodig? Pas op het einde de <b>zinnen</b>: woordkeuze, herhaling en spelling.",
        CSF.lk.fig('<svg viewBox="0 0 440 110" role="img" aria-label="Drie rondes herschrijven"><g font-size="12" text-anchor="middle"><circle cx="75" cy="55" r="44" fill="#3BC1C5"/><text x="75" y="50" fill="#fff" font-weight="700">1. verhaal</text><text x="75" y="68" fill="#fff">opbouw</text><circle cx="220" cy="55" r="44" fill="#17808a"/><text x="220" y="50" fill="#fff" font-weight="700">2. scènes</text><text x="220" y="68" fill="#fff">nodig? juiste volgorde?</text><circle cx="365" cy="55" r="44" fill="#FCAF17"/><text x="365" y="50" font-weight="700">3. zinnen</text><text x="365" y="68">woorden, spelling</text></g></svg>') +
        CSF.lk.stappen(['Bewaar eerst een versie van je scène in het atelier.', 'Lees de scène hardop. Waar struikel je?', 'Bekijk de tips van de schrijfcoach.', 'Schrap wat niets toevoegt. Een kortere scène is vaak een betere scène.']) +
        CSF.lk.tip('Laat je tekst een dag liggen voor je herschrijft. Dan zie je meer.')],
      ["Van manuscript tot boek", "Een boek is meer dan tekst. Het heeft een <b>titel</b> die nieuwsgierig maakt, een <b>cover</b>, een <b>titelblad</b> en een <b>flaptekst</b> op de achterkant. Laat je boek eerst lezen door <b>proeflezers</b>: zij zien wat jij niet meer ziet.",
        CSF.lk.punten(['<b>Titel</b>: kort, beeldend, met een vraag of een geheim.', '<b>Flaptekst</b>: stel je hoofdpersonage en het probleem voor. Eindig met een vraag. Verklap het einde niet!', '<b>Proeflezers</b>: vraag twee tops en twee tips. Wat begrepen ze niet? Waar verveelden ze zich?']) +
        CSF.lk.vb('<p><i>Noor vindt een oude gsm in de kast van haar oma. Er komen berichten op binnen. Van volgende week. Eén bericht zegt dat haar broer een ongeluk krijgt. Maar wie stuurt ze? En kan je de toekomst veranderen als je weet wat er komt?</i></p>', 'Een flaptekst') +
        CSF.lk.tip('In het atelier maak je bij ‘Boek maken’ je cover en je flaptekst. Druk een proefexemplaar af en lees het op papier na.')]
    ],
    invalshoek: { intro: "Kies in lesuur 1 de lengte van je boek. Spreek ze af met je coach.", keuzes: [
      ["Kort verhaal (± 3 000 woorden)", "Haalbaar in 16 lesuren."],
      ["Kort boek (6 000 tot 10 000 woorden)", "Schrijf ook thuis of verleng."],
      ["Roman (20 000 woorden of meer)", "Spreek extra lesuren af."]] },
    nogTijd: "Schrijf een extra verhaal vanuit een ander personage, of een proloog die de lezer meteen in het verhaal zuigt.",
    test: [
      ["Wat is een scène?", ["Eén moment op één plek, waarin je personage iets wil", "Een hoofdstuk van minstens tien bladzijden", "De tekst op de achterkant van het boek"], 0, "Een boek bestaat uit veel kleine scènes."],
      ["Wat maakt een personage levend?", ["Het wil iets, is ergens bang voor en verandert", "Het heeft een mooie naam", "Het is altijd vriendelijk"], 0, "Wil, angst, zwakte, verandering."],
      ["Welke zin toont in plaats van te vertellen?", ["Haar knieën knikten toen ze de zaal binnenstapte.", "Ze was heel zenuwachtig.", "Ze voelde zich zenuwachtig."], 0, "Je ziet wat haar lijf doet."],
      ["Welke dialoog is juist geschreven?", ["“Kom je mee?” vroeg Lisa.", "“Kom je mee” vroeg Lisa?", "Kom je mee? “vroeg Lisa.”"], 0, "Het vraagteken staat binnen de aanhalingstekens."],
      ["Wat doe je als eerste bij het herschrijven?", ["Kijken of de opbouw van het verhaal klopt", "Spelfouten verbeteren", "Een cover kiezen"], 0, "Eerst het verhaal, dan de scènes, dan de zinnen."],
      ["Wat hoort niet in een flaptekst?", ["Het einde van het verhaal", "Het hoofdpersonage", "Het probleem"], 0, "Maak nieuwsgierig, verklap niets."]
    ],
    controle: [
      ["Werkblad 5, vraag 1: hoe heet een verteller die zelf meespeelt en ‘ik’ zegt?", "tekst", ["ik-verteller", "een ik-verteller", "de ik-verteller", "ikverteller", "ik verteller"], "Kijk op leerkaart 4."],
      ["Werkblad 5, vraag 2: wat begin je als een ander personage spreekt?", "tekst", ["een nieuwe alinea", "nieuwe alinea", "alinea", "een alinea"], "Kijk op leerkaart 6."],
      ["Werkblad 5, vraag 3: hoe heet de tekst op de achterkant van een boek?", "tekst", ["flaptekst", "de flaptekst", "een flaptekst"], "Kijk op leerkaart 8."],
      ["Werkblad 5, vraag 4: met hoeveel zintuigen kan je een plek beschrijven?", "getal", [5, 0], "Zien, horen, …"],
      ["Werkblad 5, vraag 5: in hoeveel rondes herschrijf je volgens de leerkaart?", "getal", [3, 0], "Verhaal, scènes, zinnen."]
    ],
    criteria: ["Logboek elk lesuur ingevuld, met je woorden van die dag", "Woorddoel gehaald of eerlijk bijgestuurd met de coach", "Duidelijke opbouw volgens de verhaalberg", "Personages die iets willen en veranderen", "Dialogen juist geschreven", "Tonen in plaats van vertellen", "Herschreven met feedback van coach en proeflezers", "Boek afgewerkt: cover, titelblad, hoofdstukken, flaptekst", "Verzorgde spelling"],

    lessen: CSF.lessenN({
      t1: "Wat voor boek ga ik schrijven?",
      weet: "Noteer in werkblad 1 welke boeken jij graag las. Wat maakte ze goed?",
      opdracht: "Lees de opdracht. Kies de lengte van je boek en een einddatum. Bespreek ze met je coach.",
      ideeen: "Lees leerkaart 1. Schrijf minstens vijf ‘wat als’-vragen in werkblad 2.",
      start: "Kies je beste idee. Schrijf je boek in één zin.",
      midden: [
        { titel: "Het schrijfatelier", werk: "Open het schrijfatelier (link bij het project). Maak je boek aan met je woorddoel en je einddatum. Vul bij ‘Verhaalplan’ je ‘wat als’-vraag en je boek in één zin in. Lees de hulp in het atelier." },
        { titel: "Mijn personages", werk: "Lees leerkaart 2. Werkblad 3: interview je hoofdpersonage. Maak in het atelier een fiche voor je hoofdpersonage, een tegenstander en een helper." },
        { titel: "Mijn verhaalberg en scènes", werk: "Lees leerkaart 3. Werkblad 4: zet je verhaal op de verhaalberg. Maak in het atelier per hoofdstuk scènekaartjes op het prikbord, met een korte samenvatting." },
        { titel: "Wie vertelt? Mijn eerste scène", werk: "Lees leerkaart 4. Kies je verteller en je tijd. Schrijf je eerste scène in het atelier." },
        { titel: "Schrijven", werk: schrijven("Bewaar een versie van je eerste scène.") },
        { titel: "Tonen, niet vertellen", werk: "Lees leerkaart 5. Werkblad 5, deel 1: zet drie zinnen om. " + schrijven() },
        { titel: "Dialogen", werk: "Lees leerkaart 6. Werkblad 5, deel 2 en de kennisvragen. Schrijf een scène met een gesprek." },
        { titel: "Tussenstand", werk: "Werkblad 6: tussenstand. Bespreek met je coach: haal je je woorddoel en je einddatum? Stuur bij in het atelier bij ‘Doelen’. " + schrijven() },
        { titel: "Schrijven", werk: schrijven("Kijk op de verhaalberg: heeft de spanning genoeg scènes? Loop je vast? Klik op 💡 of doe een sprint van 10 minuten.") },
        { titel: "Het einde schrijven", werk: "Schrijf je hoogtepunt, je oplossing en je slot. Is je verhaal nog niet af? Spreek met je coach extra lesuren af: na lesuur 16 kan je gewoon verder." },
        { titel: "Herschrijven: het verhaal", werk: "Lees leerkaart 7. Bewaar een versie van al je scènes. Lees je boek van begin tot einde in het atelier. Klopt de opbouw? Schrap of verschuif scènes op het prikbord." },
        { titel: "Herschrijven: de zinnen", werk: "Gebruik de schrijfcoach bij elke scène: lange zinnen, opvulwoorden, herhaling, tonen. Lees de feedback van je coach in het atelier en verwerk ze." },
        { titel: "Proeflezers", werk: "Werkblad 7: laat twee proeflezers een stuk lezen. Noteer hun tops en tips. Verwerk de belangrijkste tip." },
        { titel: "Van manuscript tot boek", werk: "Lees leerkaart 8. Werkblad 8: checklist en flaptekst. Kies in het atelier bij ‘Boek maken’ je cover, titel en flaptekst. Druk een proefexemplaar af of bewaar het als PDF." }
      ],
      laatste: { titel: "Mijn boek voorstellen", werk: "Werk de laatste puntjes af. Druk je boek af of bewaar het als PDF.", presenteer: "Stel je boek voor: toon de cover, lees de flaptekst en een spannend fragment van één minuut voor." }
    }),
    extraLes: { titel: "Extra lesuur: verder schrijven", stappen: [
      ["5'", "Logboek", "Vul het begin van je logboek in. Kijk in het atelier bij ‘Doelen’ hoeveel woorden je nog moet schrijven."],
      ["35'", "Uitwerking", "Schrijf verder aan je boek. Is je verhaal af? Herschrijf dan, laat proeflezers lezen en werk je boek af zoals in lesuur 12 tot 16."],
      ["10'", "Resultaat en logboek", "Noteer hoeveel woorden je vandaag schreef. Vul je logboek in. Is je boek af? Spreek met je coach een moment af om het voor te stellen."]] },

    werkbundel: [
      { les: 1, html: `
        ${h.kader("De opdracht", "Schrijf je <b>eigen boek</b> in het schrijfatelier op de CSF-site. Je kiest zelf hoe lang het wordt. Je bouwt het op met hoofdstukken en scènes, personages en een verhaalberg. Je herschrijft het met feedback. Op het einde druk je het af met een cover en een flaptekst. Het project duurt 16 lesuren. Heb je meer tijd nodig? Dan spreek je extra lesuren af met je coach.")}
        <h2>Werkblad 1 · Ik als lezer en als schrijver</h2>
        ${fiche([["Drie boeken die ik graag las", 54], ["Wat maakte die boeken goed?", 54], ["Welk genre wil ik schrijven? Waarom?", 44]])}
        <h3>Mijn afspraak met mijn coach</h3>
        ${fiche([["Mijn woorddoel", 30, "………………… woorden"], ["Klaar tegen", 30], ["Hoeveel woorden per lesuur moet ik dan schrijven?", 30], ["Schrijf ik ook thuis?", 30, "ja / nee / soms"], ["Handtekening van mijn coach", 40]])}
        <p class="klein">Ter vergelijking: een bladzijde in een boek telt ongeveer 250 woorden. In een lesuur schrijf je er ongeveer 300 tot 500.</p>` },
      { les: 1, html: `
        <h2>Werkblad 2 · Mijn idee</h2>
        ${h.leerkaart("Leerkaart · Van idee tot verhaal", "<p>Elk verhaal begint met een vraag: <b>wat als …?</b> Schrijf daarna je boek in één zin: wie wil wat, wat staat er in de weg, en wat staat er op het spel?</p>")}
        <h3>Vijf ‘wat als’-vragen</h3>
        <table><tr><th style="width:7%">Nr.</th><th>Wat als …?</th><th style="width:16%">Zin in? ★</th></tr>${[1, 2, 3, 4, 5].map(function (n) { return '<tr><td style="text-align:center">' + n + '</td><td style="height:40px"></td><td></td></tr>'; }).join("")}</table>
        ${fiche([["Mijn beste idee", 44], ["Mijn boek in één zin: wie wil wat? Wat staat in de weg? Wat staat op het spel?", 80], ["Mijn werktitel", 30]])}` },
      { les: 3, html: `
        <h2>Werkblad 3 · Interview met mijn hoofdpersonage</h2>
        ${h.leerkaart("Leerkaart · Personages die leven", "<p>Een levend personage <b>wil</b> iets, is <b>bang</b> voor iets en heeft een <b>zwakte</b>. Tijdens het verhaal <b>verandert</b> het.</p>")}
        <p>Stel je voor dat je hoofdpersonage tegenover je zit. Antwoord zoals hij of zij zou antwoorden.</p>
        ${fiche([["Hoe heet je, en hoe oud ben je?", 30], ["Wat zie ik als eerste als ik naar je kijk?", 36], ["Wat wil je het allerliefst?", 40], ["Waar ben je bang voor?", 40], ["Wat is je grootste zwakte?", 36], ["Welk geheim vertel je aan niemand?", 40], ["Wie is je beste vriend, en wie je grootste vijand?", 40], ["Wat zeg je vaak?", 30], ["Hoe ben je veranderd op het einde van het boek?", 44]])}` },
      { les: 4, html: `
        <h2>Werkblad 4 · Mijn verhaal op de verhaalberg</h2>
        ${h.leerkaart("Leerkaart · De verhaalberg en scènes", "<p>Begin, probleem, spanning tot het hoogtepunt, oplossing en slot. In elke scène wil je personage iets, er is een hindernis en er verandert iets.</p>")}
        ${verhaalberg()}
        ${fiche([["1. Begin: wie, waar, wanneer?", 46], ["2. Probleem: wat gaat er mis?", 46], ["3. Spanning: hoe wordt het moeilijker? Wat is het hoogtepunt?", 70], ["4. Oplossing: hoe en door wie?", 46], ["5. Slot: wat is er veranderd?", 40]])}` },
      { les: 7, html: `
        <h2>Werkblad 5 · Tonen, dialogen en kennis</h2>
        <h3>Deel 1 · Tonen, niet vertellen</h3>
        <p>Herschrijf elke zin zo dat je het gevoel <b>toont</b>. Gebruik minstens één zintuig.</p>
        ${fiche([["De kat was bang.", 44], ["Opa was heel moe.", 44], ["Het bos was griezelig.", 44]])}
        <h3>Deel 2 · Een gesprek</h3>
        <p>Schrijf een kort gesprek van zes beurten tussen twee personages uit je boek. Begin een nieuwe regel als iemand anders spreekt. Let op de aanhalingstekens.</p>
        ${h.lijnen(7)}
        <h3>Kennisvragen</h3>
        ${fiche([["1. Hoe heet een verteller die zelf meespeelt en ‘ik’ zegt?", 28], ["2. Wat begin je als een ander personage spreekt?", 28], ["3. Hoe heet de tekst op de achterkant van een boek?", 28], ["4. Met hoeveel zintuigen kan je een plek beschrijven?", 28], ["5. In hoeveel rondes herschrijf je volgens de leerkaart?", 28]])}` },
      { les: 9, html: `
        <h2>Werkblad 6 · Tussenstand</h2>
        ${fiche([["Mijn woorden nu", 30, "………… van ………… woorden"], ["Mijn beste scène tot nu toe, en waarom", 54], ["Waar loop ik vast?", 54], ["Welke feedback kreeg ik van mijn coach in het atelier?", 54]])}
        <h3>Gesprek met mijn coach</h3>
        <p>Haal ik mijn woorddoel tegen mijn einddatum?</p>
        ${vink(["Ja, ik ben op schema.", "Ik schrijf thuis extra om het te halen.", "Ik maak mijn woorddoel kleiner.", "Ik krijg extra lesuren. Nieuwe einddatum: ……………………"])}
        ${fiche([["Mijn nieuwe afspraak", 44], ["Handtekening van mijn coach", 40]])}` },
      { les: 14, html: `
        <h2>Werkblad 7 · Proeflezers</h2>
        <p>Laat twee proeflezers een stuk van je boek lezen (minstens één hoofdstuk). Vraag hen deze vragen te beantwoorden.</p>
        ${[1, 2].map(function (n) { return '<h3>Proeflezer ' + n + '</h3>' + fiche([["Naam en welk stuk gelezen", 28], ["Top 1 en top 2: wat is sterk?", 50], ["Tip 1 en tip 2: wat kan beter?", 50], ["Wat begreep je niet? Waar verveelde je je?", 44]]); }).join("")}
        ${fiche([["Deze tip verwerk ik, en zo", 54]])}` },
      { les: 15, html: `
        <h2>Werkblad 8 · Klaar voor de drukker?</h2>
        ${h.leerkaart("Leerkaart · Van manuscript tot boek", "<p>Een boek heeft een titel die nieuwsgierig maakt, een cover, een titelblad en een flaptekst. Verklap het einde niet!</p>")}
        ${vink(["Mijn verhaal heeft een begin, een probleem, spanning, een oplossing en een slot.", "Elke scène is nodig. Saaie stukken heb ik geschrapt.", "Mijn verteller en mijn tijd blijven overal dezelfde.", "Mijn dialogen hebben juiste aanhalingstekens en een nieuwe alinea per spreker.", "Ik verwerkte de feedback van mijn coach en mijn proeflezers.", "Ik keek elke scène na met de schrijfcoach.", "Ik controleerde de spelling (rode golflijn, dt, hoofdletters).", "Alle scènes staan op ‘klaar’.", "Mijn boek heeft een titel, een cover en een flaptekst."])}
        <h3>Klad van mijn flaptekst</h3>
        ${h.lijnen(6)}` }
    ]
  });
})();
