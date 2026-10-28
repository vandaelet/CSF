/* Oefenproject Wetenschappen · Forensisch lab
   Alles van dit project staat in dit ene bestand: de projectfiche, de leerkaarten,
   de lesplanning, de controlevragen en de werkbundel (onderaan). */
(function () {
  var h = CSF.h;

  /* --- Tekeningen (je hoeft hier niets aan te veranderen) --- */
  function vingerafdruk(type, w, hgt) {
    var cx = w / 2, cy = hgt / 2, rx = w / 2 - 4, ry = hgt / 2 - 4, id = "c" + type + w + Math.round(Math.random() * 1e6), l = [];
    if (type === "boog") for (var i = 0; i < 16; i++) { var y = 20 + i * hgt / 18; l.push('<path d="M -5 ' + (y + 18) + " Q " + cx + " " + (y - 22) + " " + (w + 5) + " " + (y + 18) + '"/>'); }
    else if (type === "lus") {
      for (var j = 0; j < 10; j++) { var r = 5 + j * w / 26, x0 = cx + 6; l.push('<path d="M ' + (x0 - r) + " " + (hgt + 5) + " L " + (x0 - r) + " " + cy + " A " + r + " " + r + " 0 0 1 " + (x0 + r) + " " + cy + " L " + (x0 + r) + " " + (cy + 12 + j * 3) + " Q " + (x0 + r) + " " + (hgt - 6) + " -5 " + (hgt + 20 - j) + '"/>'); }
      for (var k = 0; k < 6; k++) { var yy = 8 + k * 6; l.push('<path d="M -5 ' + (yy + 28) + " Q " + cx + " " + (yy - 16) + " " + (w + 5) + " " + (yy + 28) + '"/>'); }
    } else for (var m = 0; m < 14; m++) l.push('<ellipse cx="' + cx + '" cy="' + (cy + 4) + '" rx="' + (3 + m * w / 26) + '" ry="' + (5 + m * hgt / 26) + '"/>');
    return '<svg viewBox="0 0 ' + w + " " + hgt + '" width="' + w + '" height="' + hgt + '"><defs><clipPath id="' + id + '"><ellipse cx="' + cx + '" cy="' + cy + '" rx="' + rx + '" ry="' + ry + '"/></clipPath></defs>' +
      '<g clip-path="url(#' + id + ')" fill="none" stroke="#111" stroke-width="1.6">' + l.join("") + '</g><ellipse cx="' + cx + '" cy="' + cy + '" rx="' + rx + '" ry="' + ry + '" fill="none" stroke="#111"/></svg>';
  }
  // Chromatogrammen op ware grootte (millimeter)
  var STROKEN = [["B · briefje", 60, [["blauw", 15, "#3b6fd8"], ["paars", 33, "#8a4fc4"], ["geel", 51, "#f2c200"]]],
                 ["P · Peeters", 70, [["zwart", 7, "#333"], ["blauw", 35, "#3b6fd8"]]],
                 ["C · Claes", 50, [["paars", 20, "#8a4fc4"], ["geel", 40, "#f2c200"]]],
                 ["J · Jonas", 60, [["blauw", 15, "#3b6fd8"], ["rood", 27, "#d8432e"], ["geel", 51, "#f2c200"]]],
                 ["R · Robin", 80, [["blauw", 20, "#3b6fd8"], ["paars", 44, "#8a4fc4"], ["geel", 68, "#f2c200"]]]];
  function chromatogram() {
    var sw = 16, gap = 12, H = 8 + 80 + 6 + 8, W = STROKEN.length * (sw + gap) + gap, g = [];
    STROKEN.forEach(function (s, i) {
      var x = gap + i * (sw + gap), y0 = H - 16, f = s[1];
      g.push('<rect x="' + x + '" y="' + (y0 - f - 4) + '" width="' + sw + '" height="' + (f + 12) + '" fill="#fff" stroke="#000" stroke-width="0.3"/>');
      g.push('<line x1="' + x + '" y1="' + y0 + '" x2="' + (x + sw) + '" y2="' + y0 + '" stroke="#000" stroke-width="0.25" stroke-dasharray="1 0.8"/>');
      g.push('<line x1="' + x + '" y1="' + (y0 - f) + '" x2="' + (x + sw) + '" y2="' + (y0 - f) + '" stroke="#1f6fd1" stroke-width="0.35"/>');
      g.push('<circle cx="' + (x + sw / 2) + '" cy="' + y0 + '" r="1.1" fill="#222"/>');
      s[2].forEach(function (v) {
        g.push('<ellipse cx="' + (x + sw / 2) + '" cy="' + (y0 - v[1]) + '" rx="4.2" ry="1.6" fill="' + v[2] + '" stroke="#000" stroke-width="0.2"/>');
        g.push('<text x="' + (x + sw + 0.8) + '" y="' + (y0 - v[1] + 0.9) + '" font-size="2.4" font-family="Arial">' + v[0] + "</text>");
      });
      g.push('<text x="' + (x + sw / 2) + '" y="' + (H - 2) + '" font-size="3.6" font-family="Arial" font-weight="700" text-anchor="middle">' + s[0] + "</text>");
    });
    return '<svg width="' + W + 'mm" height="' + H + 'mm" viewBox="0 0 ' + W + " " + H + '">' + g.join("") + "</svg>";
  }

  CSF.project({
    id: "wetenschappen",
    soort: "oefen",
    domein: "Wetenschappen",
    jaar: "1e jaar",
    tijd: "3 lesuren",
    sterren: 2,
    voorWie: "Voor leerlingen met plezier in puzzelen met bewijs en nauwkeurig meten.",
    naam: "Forensisch lab: de zaak van de verdwenen trofee",
    kort: "Los een diefstal op met chromatogrammen, vingerafdrukken en alibi’s.",
    omschrijving: "De trofee van de schoolquiz is verdwenen. In de kast ligt een briefje. Op het glas staat een vingerafdruk. Vier verdachten hebben elk een zwarte stift. Jij bent de forensisch expert. Meet de chromatogrammen van het politielabo. Herken de vingerafdrukken. Controleer de alibi’s. Verdedig daarna je besluit.",
    doel: "Je leert werken met bewijs zoals een wetenschapper: meten, rekenen, sporen combineren en eerlijk zijn over je twijfels.",
    bereikt: ["De werking van papierchromatografie uitleggen", "Een R<sub>f</sub>-waarde berekenen (vlek ÷ waterfront)", "Vingerafdrukken herkennen als boog, lus of werveling", "Het verschil tussen een aanwijzing en een bewijs uitleggen"],
    toepassen: ["Nauwkeurig werken: meten in millimeter en alles noteren", "Eerst nadenken, dan besluiten", "Sporen uit verschillende onderzoeken onthouden en combineren", "Mijn tijd goed verdelen over de drie lesuren"],
    materiaal: ["Werkbundel", "Liniaal met millimeters, potlood, gom (rekenmachine mag)", "Een toestel met internet voor deze site"],
    oplossing: "Op deze site, bij ‘Controleer je oplossing’. Schrijf je antwoord eerst in je werkbundel. Vul het daarna op de site in.",
    product: "Een kort forensisch rapport (vorm naar keuze) en een getuigenis van 2 minuten",
    leerkaarten: [
      ["Chromatografie", "Zwarte inkt is een mengsel van kleurstoffen. Water kruipt omhoog in papier. Het water neemt de kleurstoffen mee. Elke kleurstof reist een ander stuk ver. Zo krijgt elke stift een eigen streepjescode.",
        CSF.lk.fig('<svg viewBox="0 0 420 240" role="img" aria-label="Chromatogram: een papierstrook in een glas water"><path d="M120 60 L120 220 Q120 230 130 230 L290 230 Q300 230 300 220 L300 60" fill="none" stroke="#1d1d1b" stroke-width="2"/><rect x="122" y="185" width="176" height="43" fill="#cdeef0"/><rect x="185" y="20" width="50" height="195" fill="#fff" stroke="#1d1d1b"/><rect x="186" y="70" width="48" height="144" fill="#e8f7f8"/><line x1="185" y1="70" x2="235" y2="70" stroke="#3BC1C5" stroke-width="2" stroke-dasharray="4 3"/><line x1="185" y1="170" x2="235" y2="170" stroke="#555" stroke-width="1.5"/><circle cx="210" cy="170" r="4" fill="#333"/><ellipse cx="210" cy="148" rx="9" ry="6" fill="#f2c94c"/><ellipse cx="210" cy="122" rx="9" ry="6" fill="#d9363e"/><ellipse cx="210" cy="96" rx="9" ry="6" fill="#2f6fd0"/><text x="245" y="74" font-size="12" fill="#17808a">waterfront</text><text x="245" y="174" font-size="12">startlijn (potlood)</text><text x="245" y="200" font-size="12" fill="#17808a">water</text><text x="20" y="100" font-size="12">elke kleurstof</text><text x="20" y="114" font-size="12">stopt op een</text><text x="20" y="128" font-size="12">andere hoogte</text><line x1="100" y1="112" x2="196" y2="112" stroke="#999" stroke-dasharray="3 3"/></svg>', 'Eén zwarte stip wordt een rij gekleurde vlekken: de streepjescode van de stift.') +
CSF.lk.stappen(['Trek met potlood een startlijn, 2 cm boven de onderrand.', 'Zet een stip met de stift op de startlijn.', 'Zet de strook in een laagje water. Het water blijft ónder de startlijn.', 'Wacht tot het water bijna bovenaan is. Haal de strook eruit en duid het waterfront aan.']) +
CSF.lk.let('Trek de startlijn met potlood. Potlood lost niet op in water, stiftinkt wel.') +
CSF.lk.tip('Een kleurstof die goed oplost in water en weinig aan het papier blijft hangen, reist het verst.')],
      ["R<sub>f</sub>-waarde", "R<sub>f</sub> = afstand startlijn → vlek ÷ afstand startlijn → waterfront. De uitkomst ligt tussen 0 en 1. Dezelfde kleurstof geeft altijd dezelfde R<sub>f</sub>. Dat geldt ook bij een andere waterhoogte.",
        CSF.lk.fig('<svg viewBox="0 0 420 220" role="img" aria-label="Afstanden meten voor de Rf-waarde"><rect x="150" y="15" width="60" height="195" fill="#fff" stroke="#1d1d1b"/><line x1="150" y1="40" x2="210" y2="40" stroke="#3BC1C5" stroke-width="2" stroke-dasharray="4 3"/><line x1="150" y1="180" x2="210" y2="180" stroke="#555" stroke-width="1.5"/><ellipse cx="180" cy="110" rx="10" ry="7" fill="#2f6fd0"/><line x1="235" y1="180" x2="235" y2="110" stroke="#2f6fd0" stroke-width="2"/><path d="M230 116 L235 108 L240 116" fill="#2f6fd0"/><text x="245" y="150" font-size="13" fill="#2f6fd0" font-weight="700">a = afstand tot de vlek</text><line x1="125" y1="180" x2="125" y2="40" stroke="#17808a" stroke-width="2"/><path d="M120 46 L125 38 L130 46" fill="#17808a"/><text x="115" y="100" font-size="13" fill="#17808a" font-weight="700" text-anchor="end">b = afstand</text><text x="115" y="116" font-size="13" fill="#17808a" font-weight="700" text-anchor="end">tot het waterfront</text><text x="300" y="60" font-size="18" font-weight="700">R<tspan font-size="12" dy="4">f</tspan><tspan dy="-4"> = a ÷ b</tspan></text></svg>', 'Meet allebei vanaf de startlijn, niet vanaf de rand van het papier.') +
CSF.lk.vb('<p>Een rode vlek staat 3 cm boven de startlijn. Het waterfront staat 8 cm boven de startlijn.</p><p>R<sub>f</sub> = 3 ÷ 8 = <b>0,375 ≈ 0,38</b></p>') +
CSF.lk.punten(['Meet tot het <b>midden</b> van de vlek.', 'Gebruik voor a en b dezelfde eenheid (allebei in cm of allebei in mm).', 'Een R<sub>f</sub> groter dan 1 kan niet: dan heb je verkeerd gemeten.']) +
CSF.lk.tip('Vergelijk de R<sub>f</sub>-waarden, niet de centimeters. Zo kan je ook strookjes vergelijken die langer of korter in het water stonden.')],
      ["Vingerafdrukken", "Er zijn drie hoofdtypes: lus (ongeveer 60 à 65% van de mensen), werveling (30 à 35%) en boog (ongeveer 5%). Het type alleen wijst dus nooit één persoon aan.",
        CSF.lk.fig('<svg viewBox="0 0 420 170" role="img" aria-label="Drie types vingerafdrukken: lus, werveling en boog"><g fill="none" stroke="#1d1d1b" stroke-width="2"><path d="M30 120 Q30 40 70 40 Q110 40 110 120"/><path d="M42 120 Q42 54 70 54 Q98 54 98 120"/><path d="M54 120 Q54 68 70 68 Q86 68 86 120"/><path d="M20 130 Q70 128 120 130"/><circle cx="210" cy="80" r="45"/><circle cx="210" cy="80" r="32"/><circle cx="210" cy="80" r="19"/><circle cx="210" cy="80" r="7"/><path d="M300 110 Q345 50 390 110"/><path d="M300 122 Q345 70 390 122"/><path d="M300 98 Q345 30 390 98"/><path d="M300 134 Q345 92 390 134"/></g><text x="70" y="158" font-size="13" text-anchor="middle" font-weight="700">lus · 60 à 65%</text><text x="210" y="158" font-size="13" text-anchor="middle" font-weight="700">werveling · 30 à 35%</text><text x="345" y="158" font-size="13" text-anchor="middle" font-weight="700">boog · ± 5%</text></svg>', 'Lus: lijnen keren terug. Werveling: cirkels of een spiraal. Boog: lijnen gaan van links naar rechts over een heuvel.') +
CSF.lk.stappen(['Wrijf met een zacht potlood een zwart vlakje op papier.', 'Druk je vingertop erop en rol hem één keer van links naar rechts.', 'Druk een stuk plakband op je vinger en plak het op wit papier.', 'Bekijk de afdruk met een vergrootglas. Zoek het type.']) +
CSF.lk.let('Het type zegt niet wie het is. Van 10 mensen hebben er ongeveer 6 een lus. Speurders vergelijken daarom ook kleine details, zoals een lijn die splitst of stopt.')],
      ["Aanwijzing of bewijs?", "Een aanwijzing maakt iets waarschijnlijker. Een sterk besluit vraagt meer. Verschillende sporen wijzen dan naar dezelfde persoon. Andere verklaringen vallen weg.",
        CSF.lk.fig('<svg viewBox="0 0 420 170" role="img" aria-label="Drie sporen wijzen naar dezelfde persoon"><g font-size="13" text-anchor="middle"><rect x="10" y="15" width="120" height="36" rx="8" fill="#eef9f9" stroke="#3BC1C5"/><text x="70" y="38">inkt van de stift</text><rect x="150" y="15" width="120" height="36" rx="8" fill="#eef9f9" stroke="#3BC1C5"/><text x="210" y="38">vingerafdruk</text><rect x="290" y="15" width="120" height="36" rx="8" fill="#eef9f9" stroke="#3BC1C5"/><text x="350" y="38">alibi klopt niet</text><rect x="150" y="120" width="120" height="40" rx="8" fill="#FCAF17"/><text x="210" y="145" fill="#fff" font-weight="700">één verdachte</text></g><g stroke="#1d1d1b" stroke-width="2"><line x1="70" y1="51" x2="190" y2="118"/><line x1="210" y1="51" x2="210" y2="118"/><line x1="350" y1="51" x2="230" y2="118"/></g></svg>', 'Eén spoor is een aanwijzing. Pas als verschillende sporen naar dezelfde persoon wijzen, wordt het een sterk besluit.') +
CSF.lk.tabel(['Aanwijzing', 'Sterk besluit'], [['Eén spoor', 'Meerdere sporen wijzen naar dezelfde persoon'], ['Er zijn nog andere verklaringen', 'Je hebt de andere verklaringen weerlegd'], ['“Het kan zijn dat …”', '“Het moet wel … omdat …”']]) +
CSF.lk.vb('<p>Iemand heeft dezelfde stift als op het briefje. Dat is een aanwijzing: misschien hebben drie leerlingen die stift. Klopt ook zijn alibi niet en past zijn vingerafdruk? Dan wordt het besluit sterk.</p>') +
CSF.lk.tip('Schrijf in je rapport bij elk spoor: wat zegt het wél en wat zegt het níét?')]
    ],
    invalshoek: { intro: "Kies in lesuur 1 de vorm van je rapport. De inhoud is voor iedereen dezelfde.", keuzes: [
      ["Rapport", "Een echt politierapport met kopjes en een tabel."], ["Krantenartikel", "Een artikel voor de schoolkrant met titel en tussenkopjes."], ["Strip", "Zes vakjes met tekstballonnen: van het briefje tot je besluit."]] },
    nogTijd: "Iemand meet per ongeluk vanaf de onderrand van de strook (8 mm onder de startlijn). Bereken opnieuw de R<sub>f</sub> van de blauwe vlek van het briefje en van Robin. Klopt je besluit nog?",
    test: [
      ["Het water steeg 10 cm. Een vlek staat op 4 cm. Wat is de R<sub>f</sub>-waarde?", ["0,4", "2,5", "4"], 0, "4 ÷ 10 = 0,4. De R<sub>f</sub> ligt altijd tussen 0 en 1."],
      ["Welk type vingerafdruk komt het vaakst voor?", ["Lus", "Werveling", "Boog"], 0, "Ongeveer 60 à 65% van de mensen heeft een lus."],
      ["Twee chromatogrammen zijn precies hetzelfde. Wat weet je dan?", ["Het is dezelfde stift", "Het is dezelfde soort inkt", "We kennen de dader"], 1, "Je kent alleen de soort inkt."]
    ],
    controle: [
      ["R<sub>f</sub> van de blauwe vlek op het briefje", "getal", [0.25, 0.02], "Deel de hoogte van de vlek door de hoogte van het waterfront. Meet allebei vanaf de startlijn."],
      ["Welke stift past bij het briefje? (naam)", "tekst", ["robin"], "Vergelijk de R<sub>f</sub>-waarden, niet de hoogtes."],
      ["Wie is de dader?", "tekst", ["robin"], "Welke persoon past bij álle sporen tegelijk?"]
    ],
    criteria: ["Logboek elk lesuur ingevuld", "Chromatogrammen nauwkeurig gemeten, R<sub>f</sub> juist berekend", "Besluit steunt op minstens 3 sporen", "Grenzen van het bewijs benoemd", "Getuigenis: begin, midden en einde"],

    lessen: CSF.lessen3({
      t1: "Opstart: het dossier",
      weet: "Noteer je voorkennis over sporenonderzoek (vingerafdrukken, inkt, alibi’s).",
      opdracht: "Lees het dossier. Noteer je onderzoeksvraag en je eindproduct.",
      ideeen: "Bedenk minstens 4 manieren om de dader te vinden. Kies je eerste vermoeden. Kies de vorm van je rapport.",
      start: "Lees de leerkaarten van het forensisch labo.",
      t2: "Het labo",
      werk2: "Meet de chromatogrammen. Bereken de R<sub>f</sub>-waarden. Controleer ze op de site. Klasseer de vingerafdrukken.",
      t3: "Besluit en getuigenis",
      werk3: "Vul de tijdlijn en de bewijsmatrix in. Schrijf je rapport. Controleer je besluit op de site.",
      presenteer: "Getuig 2 minuten voor een medeleerling of via een opname op Smartschool."
    }),

    /* --- WERKBUNDEL: één item = één A4-blad. 'les' zet automatisch het stappenplan bovenaan. --- */
    werkbundel: [
      { les: 1, html: `
        ${h.kader("DOSSIER 2026-T01 · De verdwenen trofee", "<p>Woensdag tussen <b>10.05 en 10.20 uur</b> verdween de trofee van de schoolquiz uit de glazen kast naast het secretariaat. In de lege kast lag een briefje in zwarte stift: <b>“De trofee is in veilige handen. Zoek maar!”</b> Op de kastdeur stond één duidelijke vingerafdruk. Vier personen waren in de buurt. Elk van hen had een zwarte stift bij zich.</p>")}
        <table><tr><th>Verdachte</th><th>Verklaring</th><th>Wat zegt iemand anders?</th></tr>
        <tr><td><b>Mevr. Peeters</b>, leerkracht</td><td>“Ik zat alleen in de leraarskamer.”</td><td>Niemand heeft haar gezien.</td></tr>
        <tr><td><b>Dhr. Claes</b>, conciërge, heeft een sleutel</td><td>“Ik stond aan de poort voor een levering.”</td><td>Leverbon door hem getekend om 10.12 uur.</td></tr>
        <tr><td><b>Jonas</b>, leerling</td><td>“Ik had turnen.”</td><td>Turnleerkracht: aanwezig van 10.00 tot 10.50 uur.</td></tr>
        <tr><td><b>Robin</b>, leerling</td><td>“Ik was even naar het toilet.”</td><td>Klasagenda: weg om 10.04 uur, terug om 10.22 uur.</td></tr></table>
        <h3>Wat weet ik al over sporenonderzoek?</h3>${h.lijnen(2)}
        <h3>Hoe kan ik de dader vinden? (minstens 4 manieren)</h3>${h.lijnen(3)}
        <p><b>Mijn eerste vermoeden:</b> ____________________ &nbsp; <b>Mijn rapport wordt een:</b> rapport / krantenartikel / strip</p>` },
      { les: 1, html: `
        <h2>Leerkaarten van het forensisch labo</h2>
        ${h.leerkaart("Chromatografie en de R<sub>f</sub>-waarde", "<p>Zwarte stiftinkt is bijna altijd een <b>mengsel</b> van kleurstoffen. Hang een strook papier met een stip inkt in water. Het water kruipt omhoog. Het neemt de kleurstoffen mee. Elke kleurstof reist een ander stuk. Zo ontstaat een <b>chromatogram</b>.</p><p>Niet elke strook blijft even lang in het water. Vergelijk daarom de <b>R<sub>f</sub>-waarde</b>: <b>afstand startlijn → vlek ÷ afstand startlijn → waterfront</b>. Voorbeeld: water 80 mm, vlek 60 mm → R<sub>f</sub> = 0,75.</p>")}
        ${h.leerkaart("Vingerafdrukken lezen", '<div class="drie" style="text-align:center"><div>' + vingerafdruk("boog", 90, 115) + "<br><b>Boog</b> · ± 5%</div><div>" + vingerafdruk("lus", 90, 115) + "<br><b>Lus</b> · ± 60–65%</div><div>" + vingerafdruk("werveling", 90, 115) + "<br><b>Werveling</b> · ± 30–35%</div></div>")}
        ${h.leerkaart("Aanwijzing of bewijs?", "<p>Een <b>aanwijzing</b> maakt iets waarschijnlijker. Stel: op de kastdeur staat een werveling. Dan blijven alle verdachten met een werveling over. Een sterk besluit vraagt meerdere sporen naar dezelfde persoon.</p>")}
        <h3>Wat lukte vandaag? Wat nog niet?</h3>${h.lijnen(2)}` },
      { les: 2, html: `
        <h2>Bewijsstuk 1 · De chromatogrammen (ware grootte)</h2>
        <div style="text-align:center">${chromatogram()}</div>
        <p class="klein">Stippellijn = startlijn · blauwe lijn = waterfront. Meet in millimeter vanaf de startlijn tot het midden van elke vlek.</p>
        <table style="text-align:center"><tr><th>Strook</th><th>Waterfront (mm)</th><th>Vlek 1: kleur · mm · R<sub>f</sub></th><th>Vlek 2</th><th>Vlek 3</th></tr>
        ${["B", "P", "C", "J", "R"].map(function (n) { return '<tr><td><b>' + n + "</b></td><td></td><td></td><td></td><td></td></tr>"; }).join("")}</table>` },
      { les: 2, html: `
        <table><tr><td style="width:55%"><b>1.</b> Vergelijk alleen de <b>hoogtes</b>. Welke stift lijkt op het briefje?</td><td></td></tr>
        <tr><td><b>2.</b> Vergelijk de <b>R<sub>f</sub>-waarden</b>. Welke stift past? Controleer je antwoord op de site.</td><td></td></tr>
        <tr><td><b>3.</b> Waarom verschillen de antwoorden op vraag 1 en 2?</td><td style="height:34px"></td></tr></table>
        <h2>Bewijsstuk 2 · Vingerafdrukken</h2>
        <div class="twee"><div style="text-align:center">${vingerafdruk("werveling", 90, 115)}<br><b>Afdruk op de kastdeur</b> · type: ________</div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;text-align:center">
        <div>${vingerafdruk("lus", 60, 76)}<br>Peeters: ______</div><div>${vingerafdruk("boog", 60, 76)}<br>Claes: ______</div>
        <div>${vingerafdruk("werveling", 60, 76)}<br>Jonas: ______</div><div>${vingerafdruk("werveling", 60, 76)}<br>Robin: ______</div></div></div>
        <p><b>Wie valt af door de vingerafdruk? Wie blijft over?</b></p>${h.lijnen(2)}
        <h3>Wat lukte vandaag? Wat leerde ik?</h3>${h.lijnen(2)}` },
      { les: 3, html: `
        <h2>Bewijsstuk 3 · Tijdlijn en bewijsmatrix</h2>
        <p>Kleur per verdachte de tijdvakken met een <b>zeker</b> alibi. De diefstal gebeurde tussen 10.05 en 10.20 uur.</p>
        <table style="text-align:center"><tr><th>Verdachte</th>${[0, 3, 6, 9, 12, 15, 18, 21, 24].map(function (m) { return "<th>10." + (m < 10 ? "0" : "") + m + "</th>"; }).join("")}</tr>
        ${["Peeters", "Claes", "Jonas", "Robin"].map(function (n) { return "<tr><td><b>" + n + "</b></td>" + '<td style="height:22px"></td>'.repeat(9) + "</tr>"; }).join("")}</table>
        <p>Zet per spoor een <b>+</b> (wijst naar deze persoon), <b>–</b> (pleit vrij) of <b>?</b> (zegt niets).</p>
        <table style="text-align:center"><tr><th>Spoor</th><th>Peeters</th><th>Claes</th><th>Jonas</th><th>Robin</th></tr>
        ${["Chromatogram", "Vingerafdruk", "Alibi / tijdlijn", "Sleutel van de kast"].map(function (x) { return "<tr><td>" + x + "</td><td></td><td></td><td></td><td></td></tr>"; }).join("")}</table>` },
      { titel: "Eindproduct", html: `
        <h2>Mijn rapport · eindproduct</h2>
        <p>Gebruik je gekozen vorm uit lesuur 1. Zet er zeker deze vier dingen in: de dader · je drie sterkste sporen met de R<sub>f</sub>-waarden · de grenzen van het bewijs · een terugblik op je eerste vermoeden.</p>
        ${h.vak("Mijn rapport · krantenartikel · strip (gebruik ook de achterkant)", 520)}
        <p><b>Getuigenis (2 min):</b> begin = jezelf en de zaak · midden = drie sporen · einde = je besluit en je zekerheid.</p>` }
    ]
  });
})();
