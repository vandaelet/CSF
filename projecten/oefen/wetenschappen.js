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
    voorWie: "Voor leerlingen die graag puzzelen met bewijs en nauwkeurig meten.",
    naam: "Forensisch lab: de zaak van de verdwenen trofee",
    kort: "Los een diefstal op: meet chromatogrammen, lees vingerafdrukken en trek een besluit uit bewijs.",
    omschrijving: "De trofee van de schoolquiz is verdwenen. In de kast ligt een briefje en op het glas staat een vingerafdruk. Vier verdachten, vier zwarte stiften. Jij bent de forensisch expert: je meet de chromatogrammen van het politielabo, je herkent vingerafdrukken en je controleert de alibi’s. Daarna verdedig je je besluit.",
    doel: "Je leert hoe wetenschappers met bewijs werken: meten, rekenen, sporen combineren en eerlijk zeggen wat je niet zeker weet.",
    bereikt: ["Uitleggen hoe papierchromatografie werkt", "Een R<sub>f</sub>-waarde berekenen (vlek ÷ waterfront)", "Vingerafdrukken herkennen als boog, lus of werveling", "Het verschil uitleggen tussen een aanwijzing en een bewijs"],
    toepassen: ["Nauwkeurig werken: meten in millimeter en alles noteren", "Nadenken voor ik iets besluit", "Sporen uit verschillende onderzoeken onthouden en combineren", "Mijn tijd goed indelen over de drie lesuren"],
    materiaal: ["Werkbundel", "Liniaal met millimeters, potlood, gom (rekenmachine mag)", "Een toestel met internet voor deze site"],
    oplossing: "Op deze site, bij ‘Controleer je oplossing’. Vul daar je antwoord in nadat het in je werkbundel staat.",
    product: "Een kort forensisch rapport (vorm naar keuze) + een getuigenis van 2 minuten",
    leerkaarten: [
      ["Chromatografie", "Zwarte inkt is een mengsel van kleurstoffen. Water kruipt omhoog in papier en neemt de kleurstoffen mee. Elke kleurstof reist een ander stuk ver. Zo krijgt elke stift een eigen streepjescode."],
      ["R<sub>f</sub>-waarde", "R<sub>f</sub> = afstand startlijn → vlek ÷ afstand startlijn → waterfront. De uitkomst ligt tussen 0 en 1. Dezelfde kleurstof geeft dezelfde R<sub>f</sub>, ook als het water niet even hoog kwam."],
      ["Vingerafdrukken", "Er zijn drie hoofdtypes: lus (ongeveer 60 à 65% van de mensen), werveling (30 à 35%) en boog (ongeveer 5%). Het type alleen wijst dus nooit één persoon aan."],
      ["Aanwijzing of bewijs?", "Een aanwijzing maakt iets waarschijnlijker. Pas als verschillende sporen naar dezelfde persoon wijzen en andere verklaringen wegvallen, wordt je besluit sterk."]
    ],
    invalshoek: { intro: "In lesuur 1 kies je de vorm van je rapport. De inhoud is voor iedereen dezelfde.", keuzes: [
      ["Rapport", "Een echt politierapport met kopjes en een tabel."], ["Krantenartikel", "Een artikel voor de schoolkrant met titel en tussenkopjes."], ["Strip", "Zes vakjes met tekstballonnen: van het briefje tot je besluit."]] },
    nogTijd: "Iemand meet per ongeluk vanaf de onderrand van de strook (8 mm onder de startlijn). Bereken de R<sub>f</sub> van de blauwe vlek van het briefje en van Robin opnieuw. Klopt je besluit nog?",
    test: [
      ["Het water steeg 10 cm. Een vlek staat op 4 cm. Wat is de R<sub>f</sub>-waarde?", ["0,4", "2,5", "4"], 0, "4 ÷ 10 = 0,4. De R<sub>f</sub> ligt altijd tussen 0 en 1."],
      ["Welk type vingerafdruk komt het vaakst voor?", ["Lus", "Werveling", "Boog"], 0, "Ongeveer 60 à 65% van de mensen heeft een lus."],
      ["Twee chromatogrammen zijn precies hetzelfde. Wat weet je dan?", ["Het is dezelfde stift", "Het is dezelfde soort inkt", "We kennen de dader"], 1, "Je weet alleen dat de inkt van dezelfde soort is."]
    ],
    controle: [
      ["R<sub>f</sub> van de blauwe vlek op het briefje", "getal", [0.25, 0.02], "Deel de hoogte van de vlek door de hoogte van het waterfront, allebei vanaf de startlijn."],
      ["Welke stift past bij het briefje? (naam)", "tekst", ["robin"], "Vergelijk de R<sub>f</sub>-waarden, niet de hoogtes."],
      ["Wie is de dader?", "tekst", ["robin"], "Welke persoon past bij álle sporen tegelijk?"]
    ],
    criteria: ["Logboek elk lesuur ingevuld", "Chromatogrammen nauwkeurig gemeten, R<sub>f</sub> juist berekend", "Besluit steunt op minstens 3 sporen", "Ik zeg wat het bewijs níét bewijst", "Getuigenis: begin, midden en einde"],

    lessen: CSF.lessen3({
      t1: "Opstart: het dossier",
      weet: "Noteer wat je al weet over sporenonderzoek (vingerafdrukken, inkt, alibi’s).",
      opdracht: "Lees het dossier. Wat moet je uitzoeken en wat is je eindproduct?",
      ideeen: "Bedenk minstens 4 manieren om de dader te vinden. Kies je eerste vermoeden en de vorm van je rapport.",
      start: "Lees de leerkaarten van het forensisch labo.",
      t2: "Het labo",
      werk2: "Meet de chromatogrammen en bereken de R<sub>f</sub>-waarden (controleer op de site). Klasseer de vingerafdrukken.",
      t3: "Besluit en getuigenis",
      werk3: "Vul de tijdlijn en de bewijsmatrix in en schrijf je rapport. Controleer je besluit op de site.",
      presenteer: "Getuig 2 minuten voor een medeleerling, of neem je getuigenis op en zet ze op Smartschool."
    }),

    /* --- WERKBUNDEL: één item = één A4-blad. 'les' zet automatisch het stappenplan bovenaan. --- */
    werkbundel: [
      { les: 1, html: `
        ${h.kader("DOSSIER 2026-T01 · De verdwenen trofee", "<p>Woensdag tussen <b>10.05 en 10.20 uur</b> verdween de trofee van de schoolquiz uit de glazen kast naast het secretariaat. In de lege kast lag een briefje, geschreven met zwarte stift: <b>“De trofee is in veilige handen. Zoek maar!”</b> Op de kastdeur stond één duidelijke vingerafdruk. Vier personen waren in de buurt, en elk had een zwarte stift bij zich.</p>")}
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
        ${h.leerkaart("Chromatografie en de R<sub>f</sub>-waarde", "<p>Zwarte stiftinkt is bijna altijd een <b>mengsel</b> van kleurstoffen. Hang je een strook papier met een stip inkt in water, dan kruipt het water omhoog en neemt het de kleurstoffen mee. Elke kleurstof reist een ander stuk: een <b>chromatogram</b>.</p><p>Niet elke strook blijft even lang in het water. Daarom vergelijk je de <b>R<sub>f</sub>-waarde</b>: <b>afstand startlijn → vlek ÷ afstand startlijn → waterfront</b>. Voorbeeld: water 80 mm, vlek 60 mm → R<sub>f</sub> = 0,75.</p>")}
        ${h.leerkaart("Vingerafdrukken lezen", '<div class="drie" style="text-align:center"><div>' + vingerafdruk("boog", 90, 115) + "<br><b>Boog</b> · ± 5%</div><div>" + vingerafdruk("lus", 90, 115) + "<br><b>Lus</b> · ± 60–65%</div><div>" + vingerafdruk("werveling", 90, 115) + "<br><b>Werveling</b> · ± 30–35%</div></div>")}
        ${h.leerkaart("Aanwijzing of bewijs?", "<p>Een <b>aanwijzing</b> maakt iets waarschijnlijker. Een werveling op de kastdeur? Dan blijven alle verdachten met een werveling over. Pas als verschillende sporen naar dezelfde persoon wijzen, wordt je besluit sterk.</p>")}
        <h3>Wat lukte vandaag? Wat nog niet?</h3>${h.lijnen(2)}` },
      { les: 2, html: `
        <h2>Bewijsstuk 1 · De chromatogrammen (ware grootte)</h2>
        <div style="text-align:center">${chromatogram()}</div>
        <p class="klein">Stippellijn = startlijn · blauwe lijn = waterfront. Meet in millimeter vanaf de startlijn tot het midden van elke vlek.</p>
        <table style="text-align:center"><tr><th>Strook</th><th>Waterfront (mm)</th><th>Vlek 1: kleur · mm · R<sub>f</sub></th><th>Vlek 2</th><th>Vlek 3</th></tr>
        ${["B", "P", "C", "J", "R"].map(function (n) { return '<tr><td><b>' + n + "</b></td><td></td><td></td><td></td><td></td></tr>"; }).join("")}</table>` },
      { les: 2, html: `
        <table><tr><td style="width:55%"><b>1.</b> Vergelijk alleen de <b>hoogtes</b>. Welke stift lijkt op het briefje?</td><td></td></tr>
        <tr><td><b>2.</b> Vergelijk de <b>R<sub>f</sub>-waarden</b>. Welke stift past? (Controleer op de site.)</td><td></td></tr>
        <tr><td><b>3.</b> Waarom verschillen vraag 1 en 2?</td><td style="height:34px"></td></tr></table>
        <h2>Bewijsstuk 2 · Vingerafdrukken</h2>
        <div class="twee"><div style="text-align:center">${vingerafdruk("werveling", 90, 115)}<br><b>Afdruk op de kastdeur</b> · type: ________</div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;text-align:center">
        <div>${vingerafdruk("lus", 60, 76)}<br>Peeters: ______</div><div>${vingerafdruk("boog", 60, 76)}<br>Claes: ______</div>
        <div>${vingerafdruk("werveling", 60, 76)}<br>Jonas: ______</div><div>${vingerafdruk("werveling", 60, 76)}<br>Robin: ______</div></div></div>
        <p><b>Wie valt af door de vingerafdruk? Wie blijft over?</b></p>${h.lijnen(2)}
        <h3>Wat lukte vandaag? Wat leerde ik?</h3>${h.lijnen(2)}` },
      { les: 3, html: `
        <h2>Bewijsstuk 3 · Tijdlijn en bewijsmatrix</h2>
        <p>Kleur voor elke verdachte wanneer we <b>zeker</b> weten waar die was. De diefstal gebeurde tussen 10.05 en 10.20 uur.</p>
        <table style="text-align:center"><tr><th>Verdachte</th>${[0, 3, 6, 9, 12, 15, 18, 21, 24].map(function (m) { return "<th>10." + (m < 10 ? "0" : "") + m + "</th>"; }).join("")}</tr>
        ${["Peeters", "Claes", "Jonas", "Robin"].map(function (n) { return "<tr><td><b>" + n + "</b></td>" + '<td style="height:22px"></td>'.repeat(9) + "</tr>"; }).join("")}</table>
        <p>Zet per spoor een <b>+</b> (wijst naar deze persoon), <b>–</b> (pleit vrij) of <b>?</b> (zegt niets).</p>
        <table style="text-align:center"><tr><th>Spoor</th><th>Peeters</th><th>Claes</th><th>Jonas</th><th>Robin</th></tr>
        ${["Chromatogram", "Vingerafdruk", "Alibi / tijdlijn", "Sleutel van de kast"].map(function (x) { return "<tr><td>" + x + "</td><td></td><td></td><td></td><td></td></tr>"; }).join("")}</table>` },
      { titel: "Eindproduct", html: `
        <h2>Mijn rapport · eindproduct</h2>
        <p>Gebruik de vorm die je in lesuur 1 koos. Deze vier dingen moeten er zeker in staan: wie is de dader · je drie sterkste sporen met de R<sub>f</sub>-waarden · wat het bewijs <b>níét</b> bewijst · klopte je eerste vermoeden?</p>
        ${h.vak("Mijn rapport · krantenartikel · strip (gebruik ook de achterkant)", 520)}
        <p><b>Getuigenis (2 min):</b> begin = wie ben ik en welke zaak · midden = drie sporen · einde = besluit en hoe zeker ik ben.</p>` }
    ]
  });
})();
