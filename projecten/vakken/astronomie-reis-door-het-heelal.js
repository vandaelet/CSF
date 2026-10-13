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
      ["Stop 1 · Afstanden in het heelal", "Licht reist ongeveer 300 000 km per seconde. Een lichtjaar is de afstand die licht in één jaar aflegt. Dat is ongeveer 9,5 biljoen km. Een lichtjaar is dus een afstand en geen tijd. De aarde staat ongeveer 150 miljoen km van de zon."],
      ["Stop 2 · Ons zonnestelsel", "Ons zonnestelsel telt acht planeten. Mercurius, Venus, Aarde en Mars zijn rotsachtige planeten. Jupiter, Saturnus, Uranus en Neptunus zijn reuzenplaneten. Jupiter is de grootste planeet. Er zijn ook dwergplaneten, manen, planetoïden en kometen."],
      ["Stop 3 · Aarde, maan en zon", "De aardas staat scheef. Daardoor krijgen wij seizoenen. De maan geeft zelf geen licht. Wij zien het deel dat de zon verlicht. Een volledige reeks schijngestalten duurt ongeveer 29,5 dagen."],
      ["Stop 4 · Sterren", "Een ster is een gloeiende bol gas. Sterren ontstaan in wolken van gas en stof. Onze zon is een gemiddelde ster. Blauwe sterren zijn het heetst. Rode sterren zijn het koelst. Onze zon wordt later een rode reus en daarna een witte dwerg."],
      ["Stop 5 · Melkweg en oerknal", "Een sterrenstelsel bestaat uit miljarden sterren, gas en stof. De zwaartekracht houdt alles bij elkaar. Ons zonnestelsel ligt in de Melkweg. In het midden zit een superzwaar zwart gat. Het heelal ontstond ongeveer 13,8 miljard jaar geleden met de oerknal."],
      ["Stop 6 · Leven buiten de aarde", "Een exoplaneet is een planeet buiten ons zonnestelsel. Leven zoals wij het kennen heeft vloeibaar water nodig. Dat kan alleen op de juiste afstand van een ster: de leefbare zone."],
      ["Stop 7 · Ruimtevaart", "Het internationaal ruimtestation (ISS) draait rond de aarde. Astronauten uit verschillende landen wonen en werken er. Het ruimtestation vliegt ongeveer 250 mijl hoog. 1 mijl is ongeveer 1,609 km."]
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
