/* astronomie · Reis door het heelal (project B: zonder account)
   Een eigen cursus in zeven stops met gratis Engelstalige bronnen van NASA. Geen account nodig.
   Alternatief voor ‘To the stars and back’ (Coursera, vanaf 13 jaar). */
(function () {
  var h = CSF.h;

  function stop(n, titel, bronnen, leer, woorden, vragen, doe, doeHoogte) {
    return `
        <h2>Stop ${n} · ${titel}</h2>
        <p class="klein"><b>Lees in het Engels:</b> ${bronnen.join(" · ")}</p>
        ${h.leerkaart("Leerkaart · " + titel, "<p>" + leer + "</p>")}
        <table><tr><th style="width:30%">Engels woord</th><th>Betekenis in het Nederlands</th></tr>
        ${woorden.map(function (w) { return "<tr><td><b>" + w + '</b></td><td style="height:22px"></td></tr>'; }).join("")}</table>
        ${vragen.map(function (v, i) { return "<p><b>" + (i + 1) + ". " + v + "</b></p>" + h.lijnen(2); }).join("")}
        ${h.vak(doe, doeHoogte || 150)}`;
  }

  CSF.project({
    id: "astronomie-reis-door-het-heelal",
    soort: "vak",
    vak: "astronomie",
    jaar: "1e en 2e jaar",
    tijd: "10 lesuren",
    sterren: 4,
    voorWie: "Voor leerlingen met een grote interesse in het heelal en zin om Engelse teksten te lezen. Een account is niet nodig.",
    naam: "Reis door het heelal: een cursus in zeven stops",
    kort: "Reis in zeven stops door het heelal met Engelstalige bronnen van NASA. Leg daarna één onderwerp uit aan anderen.",
    omschrijving: "Stap aan boord voor een reis door het heelal. 🚀 Elke stop is een les over een ander onderwerp: afstanden, planeten, de maan, sterren, sterrenstelsels, buitenaards leven en ruimtevaart. Lees bij elke stop een Engelse tekst van NASA. Leer nieuwe woorden. Reken en teken. Kies tot slot je favoriete onderwerp. Leg het uit aan anderen.",
    doel: "Je leert de basis van de astronomie uit Engelstalige bronnen. Je rekent met echte afstanden in het heelal. Je legt een moeilijk onderwerp eenvoudig uit.",
    bereikt: ["Afstanden in het heelal begrijpen en berekenen", "De bouw van ons zonnestelsel, sterren en sterrenstelsels uitleggen", "Engelstalige wetenschappelijke teksten begrijpen", "Een moeilijk onderwerp eenvoudig uitleggen"],
    toepassen: ["Plannen: één stop per lesuur", "Volhouden bij moeilijke teksten", "Nauwkeurig rekenen met grote getallen", "Mijn eigen leren opvolgen"],
    materiaal: ["Werkbundel", "Een toestel met internet en eigen oortjes", "Rekenmachine, potlood, kleurpotloden"],
    oplossing: "Op deze site, bij ‘Controleer je oplossing’. Schrijf eerst je antwoord in je werkbundel.",
    product: "Een minicollege van 3 minuten (met A4 of PowerPoint) of een infographic over één onderwerp van de reis",
    links: [["NASA Space Place", "https://spaceplace.nasa.gov/"], ["NASA Science", "https://science.nasa.gov/"]],
    leerkaarten: [
      ["Stop 1 · Afstanden in het heelal", "Licht reist ongeveer 300 000 km per seconde. Een lichtjaar is de afstand die licht in één jaar aflegt. Dat is ongeveer 9,5 biljoen km. Een lichtjaar is dus een afstand en geen tijd. De aarde staat ongeveer 150 miljoen km van de zon.",
        CSF.lk.fig('<svg viewBox="0 0 440 130" role="img" aria-label="Hoe lang licht onderweg is"><line x1="30" y1="60" x2="420" y2="60" stroke="#1d1d1b" stroke-width="2"/><circle cx="30" cy="60" r="12" fill="#3b82c4"/><circle cx="90" cy="60" r="5" fill="#aaa"/><circle cx="250" cy="60" r="16" fill="#FCAF17"/><circle cx="410" cy="60" r="6" fill="#fff" stroke="#1d1d1b"/><g font-size="12" text-anchor="middle"><text x="30" y="35">aarde</text><text x="90" y="35">maan</text><text x="90" y="90">± 1,3 s</text><text x="250" y="35">zon</text><text x="250" y="90">enkele minuten</text><text x="425" y="35" text-anchor="end">dichtste ster</text><text x="425" y="90" text-anchor="end">± 4 jaar</text></g><text x="220" y="120" font-size="11" text-anchor="middle" fill="#555">Hoelang het licht onderweg is. Niet op schaal: de ster zou kilometers verder liggen.</text></svg>') +
CSF.lk.vb('<p>De maan staat ongeveer 384 000 km van de aarde. Licht doet daar 384 000 : 300 000 = <b>1,28 seconden</b> over.</p>', 'Rekenvoorbeeld') +
CSF.lk.punten(['tijd = afstand : snelheid', 'Hoe verder iets staat, hoe langer het licht onderweg is.', 'Je ziet een ster dus zoals ze er jaren geleden uitzag.']) +
CSF.lk.let('Een lichtjaar meet een afstand, zoals een kilometer. Het is geen tijd.')],
      ["Stop 2 · Ons zonnestelsel", "Ons zonnestelsel telt acht planeten. Mercurius, Venus, Aarde en Mars zijn rotsachtige planeten. Jupiter, Saturnus, Uranus en Neptunus zijn reuzenplaneten. Jupiter is de grootste planeet. Er zijn ook dwergplaneten, manen, planetoïden en kometen.",
        CSF.lk.fig('<svg viewBox="0 0 460 130" role="img" aria-label="De acht planeten in volgorde, met hun grootte"><circle cx="-60" cy="60" r="90" fill="#FCAF17"/><g><circle cx="48" cy="60" r="3" fill="#9e9e9e"/><circle cx="66" cy="60" r="6" fill="#e3c27a"/><circle cx="86" cy="60" r="6" fill="#3b82c4"/><circle cx="104" cy="60" r="4" fill="#c1440e"/><circle cx="160" cy="60" r="36" fill="#d8a46b"/><circle cx="262" cy="60" r="30" fill="#e6cf8f"/><ellipse cx="262" cy="60" rx="52" ry="9" fill="none" stroke="#b9a06a" stroke-width="4"/><circle cx="350" cy="60" r="13" fill="#8fd3d8"/><circle cx="405" cy="60" r="13" fill="#4a6fd1"/></g><g font-size="10" text-anchor="middle"><text x="48" y="112">Me</text><text x="66" y="112">V</text><text x="86" y="112">A</text><text x="104" y="112">Ma</text><text x="160" y="112">Jupiter</text><text x="262" y="112">Saturnus</text><text x="350" y="112">Uranus</text><text x="405" y="112">Neptunus</text></g></svg>', 'Grootte ongeveer op schaal, de afstanden niet. Links: een stukje van de zon.') +
CSF.lk.tabel(['Rotsachtige planeten', 'Reuzenplaneten'], [['klein, vaste bodem', 'groot, vooral gas of ijs'], ['Mercurius, Venus, Aarde, Mars', 'Jupiter, Saturnus, Uranus, Neptunus'], ['weinig of geen manen', 'veel manen en ringen']]) +
CSF.lk.vb('<p><b>M</b>ijn <b>V</b>riendin <b>A</b>at <b>M</b>aakt <b>J</b>am <b>S</b>amen <b>U</b>it <b>N</b>oten.</p>', 'Ezelsbruggetje voor de volgorde') +
CSF.lk.tip('Pluto heet sinds 2006 een dwergplaneet. Daarom telt hij niet mee als planeet.')],
      ["Stop 3 · Aarde, maan en zon", "De aardas staat scheef. Daardoor krijgen wij seizoenen. De maan geeft zelf geen licht. Wij zien het deel dat de zon verlicht. Een volledige reeks schijngestalten duurt ongeveer 29,5 dagen.",
        CSF.lk.fig('<svg viewBox="0 0 440 210" role="img" aria-label="Seizoenen door de scheve aardas en de schijngestalten van de maan"><circle cx="220" cy="65" r="22" fill="#FCAF17"/><ellipse cx="220" cy="65" rx="170" ry="40" fill="none" stroke="#9fb7b8" stroke-dasharray="4 4"/><g><circle cx="60" cy="65" r="14" fill="#3b82c4"/><line x1="54" y1="45" x2="66" y2="85" stroke="#1d1d1b" stroke-width="2"/><circle cx="380" cy="65" r="14" fill="#3b82c4"/><line x1="374" y1="45" x2="386" y2="85" stroke="#1d1d1b" stroke-width="2"/></g><g font-size="11" text-anchor="middle"><text x="60" y="18">noorden weg van</text><text x="60" y="30">de zon: winter</text><text x="380" y="18">noorden naar de</text><text x="380" y="30">zon: zomer</text></g><g transform="translate(0 140)"><circle cx="60" cy="20" r="14" fill="#2b2d4a"/><path d="M110 6 A14 14 0 0 1 110 34 A7 14 0 0 0 110 6Z" fill="#f6e7a1"/><circle cx="110" cy="20" r="14" fill="none" stroke="#2b2d4a"/><path d="M160 6 A14 14 0 0 1 160 34 Z" fill="#f6e7a1"/><circle cx="160" cy="20" r="14" fill="none" stroke="#2b2d4a"/><circle cx="210" cy="20" r="14" fill="#f6e7a1" stroke="#2b2d4a"/><path d="M260 6 A14 14 0 0 0 260 34 Z" fill="#f6e7a1"/><circle cx="260" cy="20" r="14" fill="none" stroke="#2b2d4a"/><path d="M310 6 A14 14 0 0 0 310 34 A7 14 0 0 1 310 6Z" fill="#f6e7a1"/><circle cx="310" cy="20" r="14" fill="none" stroke="#2b2d4a"/><circle cx="360" cy="20" r="14" fill="#2b2d4a"/><g font-size="10" text-anchor="middle"><text x="60" y="50">nieuwe maan</text><text x="160" y="50">eerste kwartier</text><text x="210" y="64">volle maan</text><text x="260" y="50">laatste kwartier</text><text x="360" y="50">nieuwe maan</text></g></g></svg>', 'Boven: de scheve aardas zorgt voor seizoenen. Onder: wat we van de maan zien in ongeveer 29,5 dagen.') +
CSF.lk.punten(['In de zomer valt het zonlicht steiler op ons. Het verwarmt meer en de dagen zijn langer.', 'Seizoenen komen niet doordat de aarde dichter bij de zon staat.', 'De maan draait rond de aarde. Daardoor zien we telkens een ander stuk van haar verlichte kant.']) +
CSF.lk.tip('Neem een bal en een lamp in een donkere kamer. Draai de bal rond je hoofd. Zo zie je zelf de schijngestalten.')],
      ["Stop 4 · Sterren", "Een ster is een gloeiende bol gas. Sterren ontstaan in wolken van gas en stof. Onze zon is een gemiddelde ster. Blauwe sterren zijn het heetst. Rode sterren zijn het koelst. Onze zon wordt later een rode reus en daarna een witte dwerg.",
        CSF.lk.fig('<svg viewBox="0 0 440 170" role="img" aria-label="Kleur en temperatuur van sterren en het leven van de zon"><defs><linearGradient id="astr-kl" x1="0" x2="1"><stop offset="0" stop-color="#d9363e"/><stop offset=".5" stop-color="#FCAF17"/><stop offset="1" stop-color="#4a6fd1"/></linearGradient></defs><rect x="40" y="20" width="360" height="24" rx="12" fill="url(#astr-kl)"/><g font-size="11" text-anchor="middle"><text x="50" y="62">rood ± 3 000 °C</text><text x="220" y="62">geel ± 5 500 °C (zon)</text><text x="385" y="62">blauw &gt; 10 000 °C</text><text x="220" y="80" fill="#555">koeler ← → heter</text></g><g transform="translate(0 100)"><circle cx="50" cy="30" r="22" fill="#c9c3e0" opacity=".8"/><circle cx="150" cy="30" r="14" fill="#FCAF17"/><circle cx="260" cy="30" r="30" fill="#e8743b"/><circle cx="370" cy="30" r="6" fill="#fff" stroke="#1d1d1b"/><g stroke="#1d1d1b"><line x1="75" y1="30" x2="132" y2="30"/><line x1="167" y1="30" x2="227" y2="30"/><line x1="293" y1="30" x2="360" y2="30"/></g><g font-size="10" text-anchor="middle"><text x="50" y="68">wolk van gas</text><text x="150" y="68">de zon nu</text><text x="260" y="68">rode reus</text><text x="370" y="68">witte dwerg</text></g></g></svg>', 'Boven: de kleur verraadt de temperatuur. Onder: het leven van een ster zoals de zon, over miljarden jaren.') +
CSF.lk.punten(['Een ster maakt licht en warmte in haar kern, waar heel kleine deeltjes samensmelten.', 'Zware sterren leven korter en eindigen soms met een enorme ontploffing: een supernova.']) +
CSF.lk.tip('Je kent het van een vuur of een gasvlam: het blauwe deel is heter dan het rode.')],
      ["Stop 5 · Melkweg en oerknal", "Een sterrenstelsel bestaat uit miljarden sterren, gas en stof. De zwaartekracht houdt alles bij elkaar. Ons zonnestelsel ligt in de Melkweg. In het midden zit een superzwaar zwart gat. Het heelal ontstond ongeveer 13,8 miljard jaar geleden met de oerknal.",
        CSF.lk.fig('<svg viewBox="0 0 420 200" role="img" aria-label="Schets van de Melkweg met onze plek"><rect x="60" y="0" width="300" height="200" fill="#14163a"/><g fill="none" stroke="#c9d6ff" stroke-width="9" stroke-linecap="round" opacity=".8"><path d="M210 100 q40 -50 90 -20 q30 30 0 70"/><path d="M210 100 q-40 50 -90 20 q-30 -30 0 -70"/><path d="M210 100 q50 40 20 80"/><path d="M210 100 q-50 -40 -20 -80"/></g><circle cx="210" cy="100" r="16" fill="#fff6c9"/><circle cx="210" cy="100" r="4" fill="#1d1d1b"/><circle cx="265" cy="152" r="5" fill="#FCAF17"/><text x="275" y="170" font-size="12" fill="#FCAF17" font-weight="700">wij zijn hier</text><text x="210" y="190" font-size="11" text-anchor="middle" fill="#c9d6ff">midden: superzwaar zwart gat</text></svg>', 'Een schets van bovenaf. Wij liggen in een van de armen, ver van het midden.') +
CSF.lk.punten(['De Melkweg telt honderden miljarden sterren.', 'Licht doet er ongeveer 100 000 jaar over om de Melkweg over te steken.', 'In een donkere nacht zie je de Melkweg als een lichte band aan de hemel: je kijkt dan door de arm heen.']) +
CSF.lk.vb('<p>13,8 miljard = 13 800 000 000. Tel de nullen: negen. Een miljard heeft er negen.</p>', 'Grote getallen') +
CSF.lk.tip('Schrijf grote getallen in groepjes van drie: 13 800 000 000. Dan lees je ze makkelijker.')],
      ["Stop 6 · Leven buiten de aarde", "Een exoplaneet is een planeet buiten ons zonnestelsel. Leven zoals wij het kennen heeft vloeibaar water nodig. Dat kan alleen op de juiste afstand van een ster: de leefbare zone.",
        CSF.lk.fig('<svg viewBox="0 0 440 130" role="img" aria-label="De leefbare zone rond een ster"><circle cx="40" cy="65" r="30" fill="#FCAF17"/><rect x="80" y="20" width="110" height="90" fill="#f9c9b6"/><rect x="190" y="20" width="90" height="90" fill="#cfe8c4"/><rect x="280" y="20" width="140" height="90" fill="#cde3f5"/><g font-size="12" text-anchor="middle" font-weight="700"><text x="135" y="60">te heet</text><text x="235" y="60">leefbare</text><text x="235" y="76">zone</text><text x="350" y="60">te koud</text></g><g font-size="11" text-anchor="middle"><text x="135" y="95">water verdampt</text><text x="235" y="95">vloeibaar water</text><text x="350" y="95">water bevriest</text></g></svg>', 'Niet te dicht bij de ster, niet te ver: dan kan water vloeibaar blijven.') +
CSF.lk.punten(['Bij een hete, grote ster ligt de leefbare zone verder weg. Bij een kleine, koele ster dichterbij.', 'Een planeet in de leefbare zone heeft niet zeker leven. Ze heeft ook een atmosfeer en de juiste stoffen nodig.', 'Astronomen vonden al duizenden exoplaneten.']) +
CSF.lk.tip('Zoek in de NASA-bronnen naar het woord <i>habitable zone</i>. Zo vind je de plekken waar ze naar leven zoeken.')],
      ["Stop 7 · Ruimtevaart", "Het internationaal ruimtestation (ISS) draait rond de aarde. Astronauten uit verschillende landen wonen en werken er. Het ruimtestation vliegt ongeveer 250 mijl hoog. 1 mijl is ongeveer 1,609 km.",
        CSF.lk.fig('<svg viewBox="0 0 420 170" role="img" aria-label="Het ISS in een baan rond de aarde"><circle cx="210" cy="95" r="60" fill="#3b82c4"/><path d="M180 70 q15 -12 30 0 q8 15 -6 22 q-20 4 -24 -22Z" fill="#5fae5a"/><circle cx="210" cy="95" r="80" fill="none" stroke="#9fb7b8" stroke-dasharray="5 4"/><g transform="translate(282 55)"><rect x="-4" y="-3" width="8" height="6" fill="#ddd" stroke="#1d1d1b"/><rect x="-18" y="-8" width="12" height="16" fill="#2f5aa0"/><rect x="6" y="-8" width="12" height="16" fill="#2f5aa0"/></g><text x="305" y="45" font-size="12" font-weight="700">ISS</text><text x="210" y="165" font-size="11" text-anchor="middle" fill="#555">Niet op schaal: het ISS vliegt in werkelijkheid veel dichter bij de aarde.</text></svg>') +
CSF.lk.vb('<p>Een vliegtuig vliegt 6 mijl hoog. Hoeveel km is dat?</p><p>6 × 1,609 = <b>9,654 km</b>, dus bijna 10 km.</p>', 'Van mijl naar km') +
CSF.lk.punten(['mijl → km: vermenigvuldig met 1,609', 'km → mijl: deel door 1,609', 'Amerikaanse bronnen zoals NASA gebruiken vaak mijlen.']) +
CSF.lk.tip('Het ISS kan je soms zien als een heldere stip die snel en zonder knipperen over de hemel schuift.')]
    ],
    invalshoek: { intro: "Kies in lesuur 1 de vorm van je eindproduct. Kies het onderwerp pas na de zeven stops.", keuzes: [
      ["Minicollege met A4", "Leg in 3 minuten één onderwerp uit in het Nederlands. Gebruik één A4 met tekeningen en kernwoorden."],
      ["Minicollege met PowerPoint", "Leg in 3 minuten één onderwerp uit in het Nederlands. Gebruik maximaal 5 dia’s."],
      ["Infographic of poster", "Vat één onderwerp samen op één A4 of A3 met beeld, cijfers en korte teksten."]] },
    nogTijd: "Lees op NASA Space Place een tekst naar keuze in het menu ‘Universe’. Vat hem samen in 5 zinnen.",
    test: [
      ["Wat is een lichtjaar?", ["Een afstand", "Een tijdsduur", "Een snelheid"], 0, "Een lichtjaar is de afstand die licht in één jaar aflegt."],
      ["Waarom hebben wij seizoenen?", ["De aardas staat scheef", "De aarde staat soms dichter bij de zon", "De zon schijnt soms harder"], 0, "Door de scheve as krijgt ons halfrond in de zomer meer direct zonlicht."],
      ["Welke sterren zijn het heetst?", ["Blauwe sterren", "Rode sterren", "Gele sterren"], 0, "Rode sterren zijn het koelst."]
    ],
    controle: [
      ["Stop 1: hoeveel seconden doet zonlicht over de reis naar de aarde?", "getal", [500, 0], "Deel 150 000 000 km door 300 000 km per seconde."],
      ["Stop 1: de zon is een bal van 10 cm. Hoeveel meter ligt de aarde verder in je model?", "getal", [10.8, 0.3], "De afstand zon–aarde is ongeveer 108 keer de diameter van de zon."],
      ["Stop 2: welke planeet is het heetst?", "tekst", ["venus"], "Het is niet de planeet die het dichtst bij de zon staat."],
      ["Stop 4: wat is volgens NASA Space Place bijzonder aan onze zon?", "tekst", ["geen begeleidende ster", "ze heeft geen begeleidende ster", "geen partnerster", "ze staat alleen", "alleen", "geen tweelingster", "geen andere ster"], "Lees het stuk over ‘companion stars’."],
      ["Stop 5: met welk sterrenstelsel botst de Melkweg over ongeveer 5 miljard jaar?", "tekst", ["andromeda", "het andromedastelsel", "andromedastelsel", "andromedanevel"], "Lees ‘What Is a Galaxy?’ op NASA Space Place."],
      ["Stop 5: het heelal is één jaar oud. De mens bestaat 300 000 jaar. Hoeveel minuten is dat op die kalender?", "getal", [11, 1], "Bereken 300 000 ÷ 13 800 000 000 × 525 600 minuten."],
      ["Stop 7: hoeveel km hoog vliegt het ISS? (250 mijl)", "getal", [402, 3], "Vermenigvuldig 250 met 1,609."],
      ["Stop 7: hoeveel minuten duurt één rondje van het ISS rond de aarde?", "getal", [91, 3], "Deel de omtrek van de baan door de snelheid in km per uur. Reken om naar minuten."],
      ["Stop 7: noem een Belgische astronaut.", "tekst", ["frank de winne", "de winne", "dirk frimout", "frimout", "raphael liegeois", "liegeois"], "Zoek ‘Belgische astronaut’ op."]
    ],
    criteria: ["Logboek elk lesuur ingevuld", "Zeven stops volledig ingevuld", "Berekeningen juist, met tussenstappen", "Eindproduct inhoudelijk juist en in eigen woorden", "Uitleg helder voor leeftijdsgenoten"],

    lessen: CSF.lessenN({
      t1: "Opstart: klaar voor vertrek",
      weet: "Noteer je voorkennis over het heelal. Noteer ook drie vragen over de ruimte.",
      opdracht: "Lees de opdracht. Noteer de onderdelen van je eindproduct.",
      ideeen: "Blader door NASA Space Place. Noteer minstens 4 onderwerpen die je boeien. Kies de vorm van je eindproduct.",
      start: "Werkblad 1: maak je reisplan. Begin aan stop 1.",
      midden: [
        { titel: "Stop 1 · Afstanden in het heelal", werk: "Werk stop 1 af. Bouw in gedachten het schaalmodel van de zon en de aarde. Controleer je antwoorden op de site." },
        { titel: "Stop 2 · Ons zonnestelsel", werk: "Lees de bronnen van stop 2. Vul de planetentabel in. Bedenk een ezelsbruggetje." },
        { titel: "Stop 3 · Aarde, maan en zon", werk: "Lees de bronnen van stop 3. Teken de schijngestalten van de maan. Verklaar de seizoenen." },
        { titel: "Stop 4 · Sterren", werk: "Lees de bronnen van stop 4. Teken het leven van een ster als strip." },
        { titel: "Stop 5 · Melkweg en oerknal", werk: "Lees de bronnen van stop 5. Reken met de kosmische kalender. Controleer je antwoorden op de site." },
        { titel: "Stop 6 · Leven buiten de aarde", werk: "Lees de bron van stop 6. Ontwerp een levensvorm voor een exoplaneet." },
        { titel: "Stop 7 · Ruimtevaart", werk: "Lees de bron van stop 7. Reken de gegevens van het ISS om. Kies het onderwerp van je eindproduct." },
        { titel: "Mijn eindproduct", werk: "Werkblad 3: plan je eindproduct. Maak je A4, je dia’s of je infographic." }
      ],
      laatste: { titel: "Presenteren en evalueren", werk: "Werk je eindproduct af. Oefen je uitleg twee keer luidop.", presenteer: "Geef je minicollege of stel je infographic voor aan een medeleerling, je coach of via een opname op Smartschool." }
    }),

    werkbundel: [
      { les: 1, html: `
        ${h.kader("De opdracht", "Maak een reis door het heelal in <b>zeven stops</b>. Lees bij elke stop een Engelse tekst van NASA. Leer nieuwe woorden. Reken en teken. Kies tot slot je favoriete onderwerp. Leg het uit in een <b>minicollege</b> of een <b>infographic</b>.")}
        <p><b>Wat weet ik al over het heelal?</b></p>${h.lijnen(2)}
        <p><b>Drie vragen die ik heb over de ruimte:</b></p>${h.lijnen(3)}
        <h2>Werkblad 1 · Mijn reisplan</h2>
        <table><tr><th style="width:12%">Lesuur</th><th>Stop</th><th style="width:9%">Klaar</th></tr>
        ${[["2", "Stop 1 · Afstanden in het heelal"], ["3", "Stop 2 · Ons zonnestelsel"], ["4", "Stop 3 · Aarde, maan en zon"], ["5", "Stop 4 · Sterren"], ["6", "Stop 5 · Melkweg en oerknal"], ["7", "Stop 6 · Leven buiten de aarde"], ["8", "Stop 7 · Ruimtevaart"], ["9", "Mijn eindproduct maken"], ["10", "Presenteren en evalueren"]].map(function (r) { return "<tr><td>" + r[0] + "</td><td>" + r[1] + '</td><td style="text-align:center;font-size:13pt">&#9744;</td></tr>'; }).join("")}</table>
        <p><b>Mijn eindproduct:</b> minicollege met A4 / minicollege met PowerPoint / infographic</p>` },
      { les: 2, html: stop(1, "Afstanden in het heelal", ["spaceplace.nasa.gov/light-year/en"],
          "Licht reist ongeveer <b>300 000 km per seconde</b>. Een <b>lichtjaar</b> is de afstand die licht in één jaar aflegt: ongeveer 9,5 biljoen km. Een lichtjaar is dus een afstand en geen tijd. De aarde staat ongeveer <b>150 miljoen km</b> van de zon. De zon heeft een diameter van ongeveer 1,39 miljoen km. Dat is 109 keer de diameter van de aarde.",
          ["light-year", "distance", "speed of light", "trillion", "unit"],
          ["Hoeveel seconden doet zonlicht over de reis naar de aarde? Reken om naar minuten en seconden."],
          "Schaalmodel: de zon is een bal van 10 cm. Bereken de grootte van de aarde (109 keer kleiner). Bereken de afstand zon–aarde (ongeveer 108 keer de diameter van de zon). Zoek in de school een plek met die lengte.", 170) },
      { les: 3, html: stop(2, "Ons zonnestelsel", ["spaceplace.nasa.gov/menu/solar-system", "science.nasa.gov/solar-system"],
          "Ons zonnestelsel telt <b>acht planeten</b>. Mercurius, Venus, Aarde en Mars zijn <b>rotsachtige planeten</b>. Jupiter, Saturnus, Uranus en Neptunus zijn <b>reuzenplaneten</b> van gas en ijs. Jupiter is de grootste planeet. Er zijn ook dwergplaneten, manen, planetoïden en kometen.",
          ["dwarf planet", "moon", "asteroid", "comet", "gas giant"],
          ["Welke planeet is het heetst? Waarom is dat niet Mercurius?"],
          "Vul aan: planeet · rotsachtig of reus · één weetje. Bedenk daarna een ezelsbruggetje voor de volgorde van de planeten.", 220) },
      { les: 4, html: stop(3, "Aarde, maan en zon", ["spaceplace.nasa.gov/seasons/en", "spaceplace.nasa.gov/moon-phases/en"],
          "De aardas staat <b>scheef</b>. Daardoor krijgen wij seizoenen. In onze zomer helt het noordelijk halfrond naar de zon. De maan geeft zelf geen licht. Wij zien het deel dat de zon verlicht. Een volledige reeks <b>schijngestalten</b> duurt ongeveer 29,5 dagen.",
          ["axis", "tilt", "season", "phase", "full moon"],
          ["Waarom is het in de zomer warmer? Leg uit zonder de afstand tot de zon te gebruiken."],
          "Teken de schijngestalten: nieuwe maan · eerste kwartier · volle maan · laatste kwartier. Kleur het verlichte deel.", 170) },
      { les: 5, html: stop(4, "Sterren", ["spaceplace.nasa.gov/sun-compare/en", "science.nasa.gov/universe/stars"],
          "Een ster is een gloeiende bol gas. Sterren ontstaan in wolken van gas en stof: <b>nevels</b>. Onze zon is een gemiddelde ster. <b>Blauwe</b> sterren zijn het heetst. <b>Rode</b> sterren zijn het koelst. Zware sterren eindigen met een supernova. Onze zon wordt later een rode reus en daarna een witte dwerg.",
          ["nebula", "white dwarf", "supernova", "companion star", "average"],
          ["Wat is volgens NASA Space Place bijzonder aan onze zon?"],
          "Strip in 4 vakjes: het leven van onze zon, van nevel tot witte dwerg.", 170) },
      { les: 6, html: stop(5, "Melkweg en oerknal", ["spaceplace.nasa.gov/galaxy/en", "spaceplace.nasa.gov/big-bang/en"],
          "Een <b>sterrenstelsel</b> bestaat uit miljarden sterren, gas en stof. De zwaartekracht houdt alles bij elkaar. Ons zonnestelsel ligt in de <b>Melkweg</b>. In het midden zit een superzwaar zwart gat. Het heelal ontstond ongeveer <b>13,8 miljard jaar</b> geleden met de oerknal.",
          ["galaxy", "gravity", "black hole", "Big Bang", "collide"],
          ["Met welk sterrenstelsel botst de Melkweg over ongeveer 5 miljard jaar?"],
          "Kosmische kalender: het heelal is één jaar oud (525 600 minuten). De mens bestaat 300 000 jaar. Bereken hoeveel minuten dat is op die kalender. Schrijf je berekening op.", 170) },
      { les: 7, html: stop(6, "Leven buiten de aarde", ["science.nasa.gov/exoplanets"],
          "Een <b>exoplaneet</b> is een planeet buiten ons zonnestelsel. Wetenschappers vonden er al duizenden. Leven zoals wij het kennen heeft <b>vloeibaar water</b> nodig. Dat kan alleen op de juiste afstand van een ster: de <b>leefbare zone</b>. Te dichtbij is het te heet. Te ver weg is het te koud.",
          ["exoplanet", "habitable zone", "liquid water", "rogue planet", "telescope"],
          ["Wat is een ‘rogue planet’ volgens NASA?"],
          "Ontwerp een levensvorm voor een exoplaneet. Kies zelf de omstandigheden: warm of koud, licht of donker. Teken je wezen. Leg in 3 zinnen uit hoe het aangepast is.", 200) },
      { les: 8, html: stop(7, "Ruimtevaart", ["nasa.gov/international-space-station"],
          "Het <b>internationaal ruimtestation</b> (ISS) draait rond de aarde. Astronauten uit verschillende landen wonen en werken er. Het ISS vliegt ongeveer <b>250 mijl</b> hoog, met een snelheid van <b>17 500 mijl per uur</b>. 1 mijl is ongeveer 1,609 km. De straal van de aarde is ongeveer 6371 km.",
          ["orbit", "crew", "mile", "altitude", "spacewalk"],
          ["Noem een Belgische astronaut. Wanneer ging hij de ruimte in?"],
          "Reken om: de hoogte van het ISS in km · de snelheid in km per uur · de tijd voor één rondje (omtrek = 2 × 3,14 × (6371 + hoogte)). Schrijf je berekeningen op.", 170) },
      { les: 9, html: `
        <h2>Werkblad 3 · Mijn eindproduct plannen</h2>
        <table class="fiche"><tr><td class="lbl">Mijn onderwerp (stop …)</td><td style="height:30px"></td></tr>
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
        <p><b>Welke stop vond ik het boeiendst? Waarom?</b></p>${h.lijnen(3)}
        <p><b>Kan ik nu mijn drie vragen van lesuur 1 beantwoorden?</b></p>${h.lijnen(3)}` }
    ]
  });
})();
