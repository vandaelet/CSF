/* aardrijkskunde · Geocaching
   Bron: opdracht ‘Kraak de code’ van de werkgroep, herwerkt met eigen opgaven (geen methodebladen).
   De codes A tot H leiden samen naar het Gravensteen in Gent: 51,057222° N · 3,720833° O. */
(function () {
  var h = CSF.h;

  function codevakken(leeg) {
    var vak = function (l) { return '<span style="display:inline-block;text-align:center;margin:0 2px"><span class="klein" style="display:block;color:#17808a;font-weight:700">' + l + '</span><span style="display:inline-block;width:38px;height:30px;border:1.5px solid #111;background:#fff"></span></span>'; };
    return '<table style="text-align:center"><tr><th>Breedtegraad</th><th>Lengtegraad</th></tr><tr><td style="padding:10px 4px">' +
      vak("A") + ' <b style="font-size:16pt">,</b> ' + vak("C") + vak("D") + vak("E") + ' <b>°</b></td><td style="padding:10px 4px">' +
      vak("B") + ' <b style="font-size:16pt">,</b> ' + vak("F") + vak("G") + vak("H") + " <b>°</b></td></tr></table>";
  }
  function wereldbol() {
    return '<svg viewBox="0 0 200 200" width="170" height="170" font-family="Arial" font-size="10">' +
      '<circle cx="100" cy="100" r="80" fill="#e6f5f6" stroke="#111" stroke-width="1.5"/>' +
      '<ellipse cx="100" cy="100" rx="80" ry="16" fill="none" stroke="#f9b000" stroke-width="2"/>' +
      '<ellipse cx="100" cy="62" rx="70" ry="13" fill="none" stroke="#999" stroke-dasharray="3 2"/><ellipse cx="100" cy="138" rx="70" ry="13" fill="none" stroke="#999" stroke-dasharray="3 2"/>' +
      '<ellipse cx="100" cy="100" rx="22" ry="80" fill="none" stroke="#17808a" stroke-width="2"/>' +
      '<text x="183" y="104">evenaar 0°</text><text x="104" y="14">N</text><text x="104" y="194">Z</text>' +
      '<text x="112" y="40" fill="#17808a">nulmeridiaan</text><text x="20" y="58" fill="#666">breedtegraad</text></svg>';
  }
  var ALFABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  CSF.project({
    id: "aardrijkskunde-geocaching",
    soort: "vak",
    vak: "aardrijkskunde",
    jaar: "1e en 2e jaar",
    tijd: "4 lesuren",
    sterren: 3,
    voorWie: "Voor leerlingen met zin om wiskunde en aardrijkskunde creatief te gebruiken.",
    naam: "Geocaching: kraak de code",
    kort: "Vind de verborgen cache door codes te kraken.",
    omschrijving: "Laat de piraat in je los! 🏴‍☠️ Spoor de verborgen schat op. Coördinaten geven je stap voor stap de nodige gegevens. Ontcijfer de codes. Zo kom je steeds dichter bij je doel. Vind jij de eindbestemming? Verstop daarna zelf een plek in een reeks codes.",
    doel: "Je leert werken met gps-coördinaten. Je zet decimale graden om in graden, minuten en seconden. Je verstopt zelf een plek in een reeks codes.",
    bereikt: ["Breedtegraad en lengtegraad uitleggen", "Decimale graden omzetten naar graden, minuten en seconden", "Graden, minuten en seconden omzetten naar decimale graden", "Coördinaten opzoeken en controleren op een kaart"],
    toepassen: ["Nauwkeurig rekenen met veel cijfers na de komma", "Stap voor stap werken en tussenstappen noteren", "Volhouden bij een lange puzzel", "Logisch denken bij het ontwerpen van codes"],
    materiaal: ["Werkbundel", "Potlood, gom, rekenmachine", "Een toestel met internet"],
    oplossing: "Op deze site, bij ‘Controleer je oplossing’. Schrijf eerst je berekening in je werkbundel.",
    product: "Een eigen mystery cache: een puzzelblad met 8 codes en een oplossingsblad",
    links: [["Coördinaten omzetten en opzoeken", "https://www.gps-coordinaten.nl/gps-coordinaten-converteren"], ["Google Maps", "https://www.google.be/maps"]],
    leerkaarten: [
      ["Breedtegraad en lengtegraad", "Elke plek op aarde heeft twee coördinaten. De breedtegraad geeft de afstand tot de evenaar: van 0° tot 90° noord of zuid. De lengtegraad geeft de afstand tot de nulmeridiaan van Greenwich: van 0° tot 180° oost of west. België ligt rond 51° noorderbreedte en 4° oosterlengte."],
      ["Geocaching", "Geocaching is een wereldwijde schattenjacht met gps. Iemand verstopt een doosje: de cache. Anderen zoeken de cache met de coördinaten. Bij een mystery cache zitten de coördinaten eerst verstopt in puzzels."],
      ["Van decimale graden naar graden, minuten en seconden", "1° = 60′ (minuten). 1′ = 60″ (seconden). Stap 1: het getal vóór de komma zijn de graden. Stap 2: vermenigvuldig het deel na de komma met 60. Dat zijn de minuten. Stap 3: vermenigvuldig het nieuwe deel na de komma met 60. Dat zijn de seconden."],
      ["Van graden, minuten en seconden naar decimale graden", "Stap 1: deel de seconden door 3600. Stap 2: deel de minuten door 60. Stap 3: tel beide uitkomsten op bij de graden. Voorbeeld: 2° 15′ 18″ = 2 + 15 : 60 + 18 : 3600 = 2,255°."],
      ["Letters als getallen", "Geef elke letter haar plaats in het alfabet: A = 1, B = 2, C = 3 … Z = 26. Zo verander je een woord in getallen."]
    ],
    invalshoek: { intro: "Kies in lesuur 1 de plek van je eigen cache.", keuzes: [
      ["Je school", "Verstop de coördinaten van een plek op of rond de campus."],
      ["Je gemeente", "Kies een kerk, een kasteel of een park in je buurt."],
      ["Een wereldmonument", "Leid je speler naar een bekend monument ver weg."]] },
    nogTijd: "Zoek de coördinaten van je favoriete vakantieplek. Zet ze om naar graden, minuten en seconden.",
    test: [
      ["Wat geeft de breedtegraad aan?", ["De afstand tot de evenaar", "De afstand tot Greenwich", "De hoogte boven de zeespiegel"], 0, "De evenaar ligt op 0°. De polen liggen op 90°."],
      ["Hoeveel minuten telt één graad?", ["60", "100", "360"], 0, "1° = 60′."],
      ["Hoeveel seconden telt één graad?", ["3600", "60", "100"], 0, "60 minuten × 60 seconden = 3600 seconden."]
    ],
    controle: [
      ["Code A: het aantal minuten van 4,8562°", "getal", [51, 0], "Vermenigvuldig 0,8562 met 60. Neem het getal vóór de komma."],
      ["Code F: hoeveel minuten is 1,2°?", "getal", [72, 0], "Vermenigvuldig 1,2 met 60."],
      ["Breedtegraad van de cache (decimale graden)", "getal", [51.057222, 0.0000005], "Schrijf A, zet een komma en schrijf C, D en E erachter."],
      ["Lengtegraad van de cache (decimale graden)", "getal", [3.720833, 0.0000005], "Schrijf B, zet een komma en schrijf F, G en H erachter."],
      ["Welk monument vind je op die plek?", "tekst", ["gravensteen", "het gravensteen", "gravensteen gent", "het gravensteen in gent"], "Zoek de coördinaten op de site bij het project. Kijk ook in Street View."],
      ["Breedtegraad van de cache in graden, minuten, seconden: hoeveel seconden?", "getal", [26, 0.5], "Vermenigvuldig 0,057222 met 60. Vermenigvuldig het deel na de komma opnieuw met 60."]
    ],
    criteria: ["Logboek elk lesuur ingevuld", "Omzettingen juist berekend, met tussenstappen", "Code gekraakt en monument gevonden", "Eigen cache: 8 logische puzzels met juiste getallen", "Oplossingsblad volledig en getest"],

    lessen: CSF.lessenN({
      t1: "Opstart: coördinaten lezen",
      weet: "Noteer je voorkennis over gps, kaarten en coördinaten.",
      opdracht: "Lees de opdracht. Noteer de onderdelen van je eindproduct.",
      ideeen: "Bedenk minstens 3 plekken voor je eigen cache. Kies je invalshoek.",
      start: "Werkblad 1: zet coördinaten om. Vind code A en code B.",
      midden: [
        { titel: "Kraak de code", werk: "Werkblad 2: vind de codes C tot H. Werkblad 3: zet de codes samen. Zoek de plek op. Controleer je antwoorden op de site." },
        { titel: "Mijn eigen mystery cache", werk: "Werkblad 4: kies je plek. Zoek de coördinaten op. Verstop elk getal in een puzzel. Schrijf het oplossingsblad." }
      ],
      laatste: { titel: "Testen en presenteren", werk: "Werkblad 5: laat een medeleerling je cache kraken. Noteer de struikelblokken. Verbeter je puzzels.", presenteer: "Stel je cache in 2 minuten voor aan een medeleerling of via een opname op Smartschool." }
    }),

    werkbundel: [
      { les: 1, html: `
        ${h.kader("De opdracht", "Kraak de code van een mystery cache. Elke opdracht levert één getal op: de codes A tot H. Samen vormen ze de coördinaten van een bekend monument. Ontwerp daarna zelf een mystery cache voor een medeleerling.")}
        ${codevakken()}
        <p><b>Wat weet ik al over gps, kaarten en coördinaten?</b></p>${h.lijnen(2)}
        ${h.leerkaart("Leerkaart · Breedtegraad en lengtegraad", '<div class="twee"><div><p>Elke plek op aarde heeft twee coördinaten.</p><p>De <b>breedtegraad</b> geeft de afstand tot de evenaar: van 0° tot 90° noord of zuid.</p><p>De <b>lengtegraad</b> geeft de afstand tot de nulmeridiaan van Greenwich: van 0° tot 180° oost of west.</p><p>België ligt rond 51° noorderbreedte en 4° oosterlengte.</p></div><div style="text-align:center">' + wereldbol() + "</div></div>")}
        <p><b>Mogelijke plekken voor mijn eigen cache (minstens 3):</b></p>${h.lijnen(2)}` },
      { les: 1, html: `
        <h2>Werkblad 1 · Coördinaten omzetten</h2>
        ${h.leerkaart("Leerkaart · Van decimale graden naar graden, minuten en seconden", "<p>1° = 60′ (minuten) · 1′ = 60″ (seconden)</p><ol><li>Het getal vóór de komma zijn de <b>graden</b>.</li><li>Vermenigvuldig het deel na de komma met 60. Dat zijn de <b>minuten</b>.</li><li>Vermenigvuldig het nieuwe deel na de komma met 60. Dat zijn de <b>seconden</b>.</li></ol><p>Voorbeeld: 50,25° = 50° + 0,25 × 60′ = <b>50° 15′ 0″</b></p>")}
        <p><b>Zet 4,8562° om naar graden, minuten en seconden.</b></p>
        <table><tr><td style="width:18%">Stap 1</td><td style="height:30px"></td></tr><tr><td>Stap 2</td><td style="height:30px"></td></tr><tr><td>Stap 3</td><td style="height:30px"></td></tr></table>
        <p><b>Code A</b> = het aantal minuten: ________</p>
        ${h.leerkaart("Leerkaart · Van graden, minuten en seconden naar decimale graden", "<ol><li>Deel de seconden door 3600.</li><li>Deel de minuten door 60.</li><li>Tel beide uitkomsten op bij de graden.</li></ol><p>Voorbeeld: 2° 15′ 18″ = 2 + 15 : 60 + 18 : 3600 = <b>2,255°</b></p>")}
        <p><b>Zet 3° 30′ 36″ om naar decimale graden.</b></p>
        <table><tr><td style="width:18%">Stap 1</td><td style="height:30px"></td></tr><tr><td>Stap 2</td><td style="height:30px"></td></tr><tr><td>Stap 3</td><td style="height:30px"></td></tr></table>
        <p><b>Code B</b> = het getal vóór de komma: ________</p>
        <h3>Wat lukte vandaag? Wat nog niet?</h3>${h.lijnen(2)}` },
      { les: 2, html: `
        <h2>Werkblad 2 · Monumenten en letters</h2>
        <p>Zoek bij elk monument de stad op het internet. Schrijf de stad in de laatste kolom.</p>
        <table><tr><th style="width:7%">Nr.</th><th style="width:24%">Monument</th><th>Hint</th><th style="width:22%">Stad</th></tr>
        <tr><td style="text-align:center">1</td><td>Big Ben</td><td class="klein">een klokkentoren naast het parlement, aan de Theems</td><td></td></tr>
        <tr><td style="text-align:center">2</td><td>Colosseum</td><td class="klein">een reusachtig amfitheater uit de Romeinse tijd</td><td></td></tr>
        <tr><td style="text-align:center">3</td><td>Eiffeltoren</td><td class="klein">een ijzeren toren uit 1889, aan de Seine</td><td></td></tr>
        <tr><td style="text-align:center">4</td><td>Sagrada Família</td><td class="klein">een basiliek van Gaudí, nog altijd in aanbouw</td><td></td></tr>
        <tr><td style="text-align:center">5</td><td>Taj Mahal</td><td class="klein">een wit marmeren praalgraf aan de rivier Yamuna</td><td></td></tr></table>
        ${h.leerkaart("Leerkaart · Letters als getallen", '<table style="text-align:center;font-size:9.5pt"><tr>' + ALFABET.slice(0, 13).map(function (l) { return "<th>" + l + "</th>"; }).join("") + "</tr><tr>" + ALFABET.slice(0, 13).map(function (l, i) { return "<td>" + (i + 1) + "</td>"; }).join("") + '</tr><tr>' + ALFABET.slice(13).map(function (l) { return "<th>" + l + "</th>"; }).join("") + "</tr><tr>" + ALFABET.slice(13).map(function (l, i) { return "<td>" + (i + 14) + "</td>"; }).join("") + "</tr></table>")}
        <table><tr><th style="width:9%">Code</th><th>Opdracht</th><th style="width:16%">Getal</th></tr>
        <tr><td><b>C</b></td><td>Zoek het volgnummer van de 5e letter van stad 1. Plaats een nul voor dit getal.</td><td></td></tr>
        <tr><td><b>D</b></td><td>Tel de volgnummers van alle letters van stad 3 op. Laat de A weg.</td><td></td></tr>
        <tr><td><b>E</b></td><td>Tel de volgnummers van de 2e, 3e en 4e letter van stad 4 op.</td><td></td></tr>
        <tr><td><b>F</b></td><td>Zet 1,2° om naar minuten.</td><td></td></tr>
        <tr><td><b>G</b></td><td>Tel de volgnummers van de 1e en 2e letter van stad 5 op. Plaats een nul voor dit getal.</td><td></td></tr>
        <tr><td><b>H</b></td><td>Tel de volgnummers van de 1e en 2e letter van stad 2 op.</td><td></td></tr></table>` },
      { les: 2, html: `
        <h2>Werkblad 3 · Kraak de code!</h2>
        <p>Vul elke code in. Elke code bestaat uit twee cijfers, behalve B.</p>
        ${codevakken()}
        <p>Geef de coördinaten in op de site bij het project. Gebruik een punt in plaats van een komma.</p>
        <p><b>Welk monument vind je? In welke stad?</b></p>${h.lijnen(1)}
        <p><b>Zet de breedtegraad van de cache om naar graden, minuten en seconden.</b></p>
        <table><tr><td style="width:18%">Stap 1</td><td style="height:28px"></td></tr><tr><td>Stap 2</td><td style="height:28px"></td></tr><tr><td>Stap 3</td><td style="height:28px"></td></tr></table>
        <p><b>Sleep Pegman in Google Maps naar het monument. Beschrijf 3 dingen in Street View.</b></p>${h.lijnen(3)}
        <h3>Wat lukte vandaag? Wat leerde ik?</h3>${h.lijnen(2)}` },
      { les: 3, html: `
        <h2>Werkblad 4 · Mijn eigen mystery cache</h2>
        <table class="fiche"><tr><td class="lbl">Mijn plek</td><td style="height:30px"></td></tr>
        <tr><td class="lbl">Coördinaten in decimale graden<br><span class="klein">6 cijfers na de komma</span></td><td style="height:34px"></td></tr>
        <tr><td class="lbl">Coördinaten in graden, minuten en seconden</td><td style="height:34px"></td></tr></table>
        <p>Splits je coördinaten in 8 getallen, zoals in de code die je kraakte. Bedenk voor elk getal een puzzel. Gebruik een omzetting, letters als getallen of een eigen idee.</p>
        <table><tr><th style="width:8%">Code</th><th style="width:11%">Getal</th><th style="width:20%">Soort puzzel</th><th>Mijn puzzel</th></tr>
        ${["A", "B", "C", "D", "E", "F", "G", "H"].map(function (l) { return "<tr><td><b>" + l + '</b></td><td style="height:52px"></td><td></td><td></td></tr>'; }).join("")}</table>` },
      { les: 3, html: `
        <h2>Mijn puzzelblad voor de speler</h2>
        <p>Schrijf je puzzels netjes over. Zet je oplossingen <b>niet</b> op dit blad.</p>
        ${h.vak("", 640)}
        <h3>Wat lukte vandaag? Wat nog niet?</h3>${h.lijnen(2)}` },
      { les: 4, html: `
        <h2>Werkblad 5 · De testronde</h2>
        <p>Laat een medeleerling je cache kraken. Help niet. Noteer elk probleem.</p>
        <p><b>Mijn tester:</b> ______________________ &nbsp; <b>Tijd nodig:</b> ______ min &nbsp; <b>Plek gevonden?</b> JA / NEEN</p>
        <table><tr><th style="width:9%">Code</th><th>Probleem van de tester</th><th style="width:40%">Mijn verbetering</th></tr>
        ${[1, 2, 3, 4, 5].map(function () { return '<tr><td style="height:46px"></td><td></td><td></td></tr>'; }).join("")}</table>
        <p><b>Welke puzzel was het leukst? Welke was te moeilijk?</b></p>${h.lijnen(3)}
        <p><b>Presenteren (2 min):</b> je plek en je keuze · je beste puzzel · de reactie van je tester.</p>` }
    ]
  });
})();
