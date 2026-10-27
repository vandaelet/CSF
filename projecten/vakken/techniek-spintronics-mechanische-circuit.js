/* techniek · Spintronics – mechanische circuits draaien door!
   Bron: de fiches ‘ACT ONE’ en ‘ACT TWO – Spintronics’ van de werkgroep, uitgewerkt tot 8 lesuren.
   De bouwdozen en de Engelstalige opdrachtenboekjes zijn van de school. De werkbladen zijn eigen materiaal. */
(function () {
  var h = CSF.h;
  function vink(lijst) { return "<table>" + lijst.map(function (x) { return '<tr><td style="width:7%;text-align:center;font-size:13pt">&#9744;</td><td>' + x + "</td></tr>"; }).join("") + "</table>"; }
  function fiche(lijst) { return '<table class="fiche">' + lijst.map(function (v) { return '<tr><td class="lbl">' + v[0] + '</td><td style="height:' + (v[1] || 30) + 'px">' + (v[2] || "") + "</td></tr>"; }).join("") + "</table>"; }
  function puzzellog(n) {
    return '<table><tr><th style="width:12%">Puzzel</th><th style="width:12%">Sterren</th><th>Wat moest ik bouwen? Hoe loste ik het op?</th><th style="width:12%">Gelukt</th></tr>' +
      Array.from({ length: n }, function () { return '<tr><td style="height:46px"></td><td class="klein">☆☆☆☆☆</td><td></td><td style="text-align:center">&#9744;</td></tr>'; }).join("") + "</table>";
  }

  CSF.project({
    id: "techniek-spintronics-mechanische-circuit",
    soort: "vak",
    vak: "techniek",
    jaar: "1e en 2e jaar",
    tijd: "8 lesuren",
    sterren: 4,
    naam: "Spintronics – mechanische circuits draaien door!",
    kort: "Bouw je eigen mechanische circuits met een Engelstalige handleiding.",
    voorWie: "Voor technisch sterke leerlingen die graag puzzelen en hun Engels willen bijschaven.",
    omschrijving: "Kriebelen je vingers bij het zien van een schroevendraaier? Haal jij thuis graag de broodrooster uit elkaar? Ga aan de slag met onze twee bouwdozen. Klus je eigen mechanische circuits in elkaar. Hou jij het hoofd koel? Of spatten de vonken er al snel af? ⚙️",
    doel: "Je bouwt mechanische circuits met de bouwdozen Spintronics Act One en Act Two. Je volgt een Engelstalige handleiding. Je lost opdrachten op van 1 tot 5 sterren. Je ontdekt hoe een elektrisch circuit werkt via kettingen en tandwielen.",
    bereikt: ["Een Engelstalige technische handleiding begrijpen", "Mechanische circuits bouwen volgens een schema", "De werking van stroom, spanning en weerstand uitleggen met een vergelijking", "Een schakelschema lezen en tekenen", "Systematisch een fout zoeken in een circuit"],
    toepassen: ["Doorzetten bij moeilijke puzzels", "Nauwkeurig werken: kettingen juist spannen", "Plannen: je eigen niveau kiezen en opbouwen", "Flexibel denken: een andere oplossing proberen"],
    materiaal: ["Werkbundel", "De bouwdoos Spintronics Act One (en Act Two voor het vervolg)", "Het Engelstalige opdrachtenboekje van de bouwdoos", "Een woordenboek of online vertaalwoordenboek"],
    oplossing: "Het opdrachtenboekje toont bij elke puzzel of je circuit werkt. Je coach controleert je puzzellog.",
    product: "Een puzzellog met minstens 12 opgeloste opdrachten, een eigen getekend schema en een zelf ontworpen circuit",
    links: [["Spintronics: uitleg van de onderdelen (Upper Story, Engels)", "https://upperstory.com/spintronics/"]],
    leerkaarten: [
      ["Hoe vraag je de bouwdoos aan?", "<b>Act One</b>: vraag de bouwdoos aan je coach. Je krijgt er een woordje uitleg bij. <b>Act Two</b> is de vervolgset: haal de box uit de boekenkast. Je hebt box 1 nodig om met box 2 te werken. Tel na elk lesuur alle onderdelen en leg ze terug op hun plaats."],
      ["Ketting = stroom", "In Spintronics stelt de ketting de elektrische stroom voor. Hoe sneller de ketting beweegt, hoe groter de stroom. De motor duwt de ketting rond zoals een batterij de stroom rondstuurt. Een ammeter (stroommeter) toont hoe snel de ketting draait."],
      ["Spanning en weerstand", "De spanning is hoe hard de ketting getrokken wordt. Een weerstand (resistor) remt de ketting af. Meer weerstand betekent minder stroom bij dezelfde spanning. Dat is de wet van Ohm."],
      ["Knooppunt, schakelaar en knop", "In een knooppunt (junction) komen kettingen samen. Wat erin gaat, gaat er ook weer uit. Een schakelaar (switch) blijft open of dicht. Een drukknop (button) werkt enkel zolang je drukt."],
      ["Opslag van energie", "Een veer (capacitor) slaat energie op en geeft ze daarna terug. Een vliegwiel (inductor) wil blijven draaien en verzet zich tegen snelle veranderingen. In Act Two werk je ook met transistors: een kleine beweging stuurt een grote."],
      ["Engelse sleutelwoorden", "chain = ketting · spool = katrol · resistor = weerstand · junction = knooppunt · switch = schakelaar · button = drukknop · ammeter = stroommeter · capacitor = condensator (veer) · inductor = spoel (vliegwiel) · current = stroom · voltage = spanning · series = in serie · parallel = parallel"]
    ],
    invalshoek: { intro: "Kies in lesuur 1 je startniveau.", keuzes: [
      ["Start bij 1 ster", "Je bouwt rustig op. Je leert elk onderdeel kennen."],
      ["Start bij 2 of 3 sterren", "Je kent al wat van techniek of elektriciteit."],
      ["Act Two", "Je hebt Act One al afgewerkt. Je gaat verder met de vervolgset."]] },
    nogTijd: "Ontwerp een eigen puzzel voor een medeleerling. Teken het schema en beschrijf wat er moet gebeuren. Laat hem je puzzel oplossen.",
    test: [
      ["Wat stelt de ketting voor in Spintronics?", ["De elektrische stroom", "De weerstand", "De schakelaar"], 0, "Hoe sneller de ketting, hoe groter de stroom."],
      ["Wat doet een weerstand?", ["De ketting afremmen", "De ketting versnellen", "Energie opslaan"], 0, "Meer weerstand = minder stroom."],
      ["Wat is het verschil tussen een schakelaar en een drukknop?", ["Een schakelaar blijft in zijn stand, een drukknop werkt enkel zolang je drukt", "Er is geen verschil", "Een drukknop blijft in zijn stand"], 0, "Denk aan een lichtschakelaar en een deurbel."],
      ["Wat betekent ‘junction’?", ["Knooppunt", "Ketting", "Weerstand"], 0, "Daar komen kettingen samen."]
    ],
    controle: [
      ["Vertaal: resistor", "tekst", ["weerstand", "de weerstand"], "Het remt de stroom af."],
      ["Vertaal: current", "tekst", ["stroom", "de stroom", "elektrische stroom"], "In Spintronics: de ketting."],
      ["Vertaal: voltage", "tekst", ["spanning", "de spanning"], "Hoe hard de ketting getrokken wordt."],
      ["Welk onderdeel stelt een vliegwiel voor? (Engels)", "tekst", ["inductor", "an inductor", "the inductor"], "Het wil blijven draaien."],
      ["Welk onderdeel duwt de ketting rond zoals een batterij?", "tekst", ["motor", "de motor"], "Je windt het op."]
    ],
    criteria: ["Logboek elk lesuur ingevuld", "Puzzellog met minstens 12 opgeloste opdrachten", "Moeilijkheid opgebouwd: minstens 3 sterren bereikt", "Engelse sleutelwoorden gekend", "Eigen schema correct getekend en uitgelegd", "Eigen circuit ontworpen en gebouwd", "Bouwdoos volledig en netjes teruggelegd"],

    lessen: CSF.lessenN({
      t1: "Kennismaken met Spintronics",
      weet: "Noteer wat je al weet over elektriciteit: stroom, spanning, schakelaar.",
      opdracht: "Lees de opdracht. Vraag de bouwdoos Act One aan je coach.",
      ideeen: "Kies je startniveau. Lees de Engelse sleutelwoorden.",
      start: "Werkblad 1: tel en herken alle onderdelen. Bouw de eerste opdrachten uit het boekje.",
      midden: [
        { titel: "Stroom en weerstand", werk: "Werkblad 2: los de volgende puzzels op. Vul je puzzellog in. Leg met de ketting uit wat stroom en weerstand zijn." },
        { titel: "Serie en parallel", werk: "Los puzzels op met knooppunten. Vergelijk serie en parallel. Vul je puzzellog aan." },
        { titel: "Schakelaars en knoppen", werk: "Los puzzels op met schakelaars en drukknoppen. Teken één circuit als schema." },
        { titel: "Veer en vliegwiel", werk: "Werkblad 3: ontdek wat een veer en een vliegwiel doen. Ga naar moeilijkere puzzels." },
        { titel: "Moeilijkere uitdagingen of Act Two", werk: "Ga verder tot 4 of 5 sterren. Klaar met Act One? Start met Act Two." },
        { titel: "Mijn eigen circuit", werk: "Werkblad 4: ontwerp een eigen circuit. Teken het schema. Bouw en test het." }
      ],
      laatste: { titel: "Voorstellen en opruimen", werk: "Stel je eigen circuit voor. Tel alle onderdelen en leg ze terug.", presenteer: "Toon je eigen circuit aan een medeleerling. Leg uit wat elk onderdeel doet." }
    }),

    werkbundel: [
      { les: 1, html: `
        ${h.kader("De opdracht", "Bouw <b>mechanische circuits</b> met de bouwdozen Spintronics. De handleiding is volledig in het Engels. De opdrachten gaan van 1 ster tot 5 sterren. <b>Act One</b> vraag je aan je coach. <b>Act Two</b> is de vervolgset: daarvoor heb je ook box 1 nodig. Hou een puzzellog bij. Ontwerp op het einde je eigen circuit.")}
        ${h.leerkaart("Leerkaart · Engelse sleutelwoorden", "<p>chain = ketting · spool = katrol · resistor = weerstand · junction = knooppunt · switch = schakelaar · button = drukknop · ammeter = stroommeter · capacitor = veer · inductor = vliegwiel · current = stroom · voltage = spanning · series = in serie · parallel = parallel</p>")}
        <h3>Wat weet ik al over elektriciteit?</h3>${h.lijnen(3)}
        <h2>Werkblad 1 · De onderdelen</h2>
        <p>Zoek elk onderdeel in de doos. Noteer het aantal en wat het volgens jou doet.</p>
        <table><tr><th style="width:26%">Onderdeel (Engels)</th><th style="width:12%">Aantal</th><th>Wat doet het?</th></tr>${["motor", "chain", "spool", "resistor", "junction", "switch / button", "ammeter", "andere: ______"].map(function (x) { return "<tr><td>" + x + '</td><td style="height:28px"></td><td></td></tr>'; }).join("")}</table>` },
      { les: 1, html: `
        <h3>Mijn startniveau</h3><p>&#9744; 1 ster &nbsp; &#9744; 2 sterren &nbsp; &#9744; 3 sterren &nbsp; &#9744; Act Two</p>
        <h3>Puzzellog (1)</h3>${puzzellog(7)}
        <p class="klein">Tel na elk lesuur alle onderdelen en leg ze terug op hun plaats.</p>` },
      { les: 2, html: `
        <h2>Werkblad 2 · Stroom en weerstand</h2>
        ${h.leerkaart("Leerkaart · Ketting = stroom", "<p>De ketting stelt de <b>stroom</b> voor. De <b>motor</b> duwt de ketting rond zoals een batterij. De <b>spanning</b> is hoe hard de ketting getrokken wordt. Een <b>weerstand</b> remt de ketting af. Meer weerstand = minder stroom (wet van Ohm).</p>")}
        ${fiche([["Wat zie ik als ik een weerstand toevoeg?", 50], ["Wat toont de ammeter?", 40], ["Serie: wat gebeurt er met twee weerstanden na elkaar?", 50], ["Parallel: wat gebeurt er met twee weerstanden naast elkaar?", 50]])}
        <h3>Puzzellog (2)</h3>${puzzellog(5)}` },
      { les: 4, html: `
        <h3>Schakelaars en knoppen: mijn schema</h3>
        <p>Teken één circuit dat je bouwde. Gebruik eenvoudige symbolen: een cirkel voor de motor, een zigzag voor een weerstand, een onderbroken lijn voor een schakelaar.</p>
        ${h.vak("Schema van mijn circuit", 260)}
        ${fiche([["Wat doet dit circuit?", 50], ["Wat gebeurt er als ik de schakelaar open?", 40]])}
        <h3>Puzzellog (3)</h3>${puzzellog(3)}` },
      { les: 5, html: `
        <h2>Werkblad 3 · Veer en vliegwiel</h2>
        ${h.leerkaart("Leerkaart · Opslag van energie", "<p>Een <b>veer</b> (capacitor) slaat energie op en geeft ze daarna terug. Een <b>vliegwiel</b> (inductor) wil blijven draaien en verzet zich tegen snelle veranderingen. In Act Two werk je ook met <b>transistors</b>: een kleine beweging stuurt een grote.</p>")}
        ${fiche([["Wat gebeurt er als ik de motor stop en er zit een veer in het circuit?", 54], ["Wat gebeurt er als ik de motor stop en er zit een vliegwiel in het circuit?", 54], ["Waar vind je een veer of een vliegwiel in het echte leven?", 50]])}
        <h3>Puzzellog (4)</h3>${puzzellog(5)}` },
      { les: 7, html: `
        <h2>Werkblad 4 · Mijn eigen circuit</h2>
        ${fiche([["Wat moet mijn circuit doen?", 50], ["Welke onderdelen gebruik ik?", 50]])}
        ${h.vak("Schema van mijn eigen circuit", 280)}
        <h3>Testen</h3>
        <table><tr><th>Test</th><th>Wat ging er mis?</th><th style="width:34%">Aanpassing</th></tr>${[1, 2, 3].map(function (n) { return '<tr><td style="text-align:center">' + n + '</td><td style="height:40px"></td><td></td></tr>'; }).join("")}</table>` },
      { les: 8, html: `
        <h2>Voorstellen en terugblikken</h2>
        ${vink(["Ik loste minstens 12 puzzels op.", "Ik bereikte minstens 3 sterren.", "Mijn eigen circuit werkt.", "Ik telde alle onderdelen. De bouwdoos is volledig.", "Ik legde de bouwdoos terug op zijn plaats."])}
        ${fiche([["Mijn moeilijkste puzzel en hoe ik hem oploste", 70], ["Wat begrijp ik nu beter over elektriciteit?", 70], ["Welke Engelse woorden leerde ik?", 50]])}
        <p><b>Presenteren:</b> toon je eigen circuit aan een medeleerling. Leg uit wat elk onderdeel doet.</p>` }
    ]
  });
})();
