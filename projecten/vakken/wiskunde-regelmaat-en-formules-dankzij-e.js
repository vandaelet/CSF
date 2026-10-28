/* wiskunde · Regelmaat en formules: dankzij een duojob naar de top!
   Eigen uitwerking (3 lesuren, duowerk) naar de opdracht ‘Patronen en verbanden’ van de werkgroep.
   Patronen, tekeningen en vragen zijn eigen materiaal. */
(function () {
  var h = CSF.h;
  function fiche(lijst) { return '<table class="fiche">' + lijst.map(function (v) { return '<tr><td class="lbl">' + v[0] + '</td><td style="height:' + (v[1] || 30) + 'px">' + (v[2] || "") + "</td></tr>"; }).join("") + "</table>"; }
  function tabel(kop, n, eerste) { return '<table style="text-align:center"><tr><th style="text-align:left">' + kop[0] + "</th>" + Array.from({ length: n }, function (_, i) { return "<td>" + (eerste ? eerste[i] : i) + "</td>"; }).join("") + '</tr><tr><th style="text-align:left">' + kop[1] + "</th>" + Array.from({ length: n }, function () { return '<td style="height:28px"></td>'; }).join("") + "</tr></table>"; }
  // Lucifers: een rij driehoeken (figuur n heeft n driehoeken, 2n + 1 lucifers)
  function lucifers() {
    var s = '<svg width="100%" height="110" viewBox="0 0 560 110" font-family="Arial" font-size="12">', x0 = 10;
    [1, 2, 3].forEach(function (n) {
      var w = 40;
      for (var i = 0; i < n; i++) {
        var x = x0 + i * w;
        s += '<line x1="' + x + '" y1="80" x2="' + (x + w / 2) + '" y2="45" stroke="#c0392b" stroke-width="3"/><line x1="' + (x + w / 2) + '" y1="45" x2="' + (x + w) + '" y2="80" stroke="#c0392b" stroke-width="3"/>' +
          '<line x1="' + x + '" y1="80" x2="' + (x + w) + '" y2="80" stroke="#c0392b" stroke-width="3"/>';
        if (i < n - 1) s += '<line x1="' + (x + w / 2) + '" y1="45" x2="' + (x + w * 1.5) + '" y2="45" stroke="#c0392b" stroke-width="3"/>';
      }
      s += '<text x="' + (x0 + n * w / 2) + '" y="102" text-anchor="middle">figuur ' + n + "</text>";
      x0 += n * w + 60;
    });
    return s + "</svg>";
  }
  // Vierkanten: figuur n is een vierkant van n op n tegeltjes
  function tegels() {
    var s = '<svg width="100%" height="110" viewBox="0 0 560 110" font-family="Arial" font-size="12">', x0 = 20, g = 18;
    [0, 1, 2, 3].forEach(function (n) {
      for (var i = 0; i < n; i++) for (var j = 0; j < n; j++) s += '<rect x="' + (x0 + i * g) + '" y="' + (80 - (j + 1) * g) + '" width="' + g + '" height="' + g + '" fill="#3bc1c5" stroke="#fff"/>';
      s += '<text x="' + (x0 + Math.max(n, 1) * g / 2) + '" y="102" text-anchor="middle">figuur ' + n + "</text>";
      x0 += Math.max(n, 1) * g + 70;
    });
    return s + "</svg>";
  }

  CSF.project({
    id: "wiskunde-regelmaat-en-formules-dankzij-e",
    soort: "vak",
    vak: "wiskunde",
    jaar: "1e en 2e jaar",
    tijd: "3 lesuren",
    sterren: 2,
    naam: "Regelmaat en formules: dankzij een duojob naar de top!",
    kort: "Leid zelf grafieken en formules af uit cijfermateriaal.",
    voorWie: "Voor leerlingen die graag samen puzzelen met getallen.",
    omschrijving: "Leid samen met je partner grafieken en formules af uit de opgaven. Deze wiskundeoefeningen laten je hersenen kraken! 🧠 Ga samen de uitdaging aan. Vorm een topteam!",
    doel: "Je ontdekt regelmaat in patronen. Je beschrijft die regelmaat met woorden, een tabel, een grafiek en een formule. Je werkt in duo.",
    bereikt: ["Een patroon voortzetten", "Een tabel opstellen en uitbreiden", "Een formule opstellen met letters", "Een grafiek maken in Google Spreadsheets", "Verbanden vergelijken: lineair, kwadratisch, omgekeerd evenredig"],
    toepassen: ["Samenwerken: taken verdelen en elkaar uitleggen", "Redeneren en je redenering opschrijven", "Nauwkeurig werken"],
    materiaal: ["Werkbundel", "Lucifers of satéstokjes", "Een touwtje van iets meer dan 20 cm en ruitjespapier", "Een Chromebook met Google Spreadsheets"],
    oplossing: "Op deze site, bij ‘Controleer je oplossing’.",
    product: "Ingevulde werkbladen met tabellen, formules en drie grafieken",
    links: [["Google Spreadsheets", "https://docs.google.com/spreadsheets"], ["Hulp: een grafiek maken in Google Spreadsheets", "https://support.google.com/docs/answer/63824"]],
    leerkaarten: [
      ["Van patroon naar formule", "Zoek hoeveel er telkens bijkomt. Dat getal staat voor de x. Kijk dan wat er bij figuur 0 is: dat getal tel je erbij. Voorbeeld: elke figuur 3 meer en figuur 0 heeft 2 → y = 3x + 2.",
        CSF.lk.fig('<svg viewBox="0 0 452 130" role="img" aria-label="Tafels met stoelen: elke tafel erbij geeft 2 stoelen meer"><g fill="#c99b6d" stroke="#1d1d1b"><rect x="30" y="45" width="40" height="30"/><rect x="150" y="45" width="40" height="30"/><rect x="190" y="45" width="40" height="30"/><rect x="310" y="45" width="40" height="30"/><rect x="350" y="45" width="40" height="30"/><rect x="390" y="45" width="40" height="30"/></g><g fill="#3BC1C5"><circle cx="50" cy="32" r="7"/><circle cx="50" cy="88" r="7"/><circle cx="18" cy="60" r="7"/><circle cx="82" cy="60" r="7"/><circle cx="170" cy="32" r="7"/><circle cx="210" cy="32" r="7"/><circle cx="170" cy="88" r="7"/><circle cx="210" cy="88" r="7"/><circle cx="138" cy="60" r="7"/><circle cx="242" cy="60" r="7"/><circle cx="330" cy="32" r="7"/><circle cx="370" cy="32" r="7"/><circle cx="410" cy="32" r="7"/><circle cx="330" cy="88" r="7"/><circle cx="370" cy="88" r="7"/><circle cx="410" cy="88" r="7"/><circle cx="298" cy="60" r="7"/></g><circle cx="438" cy="60" r="7" fill="#3BC1C5"/><g font-size="12" text-anchor="middle"><text x="50" y="118">1 tafel: 4</text><text x="190" y="118">2 tafels: 6</text><text x="370" y="118">3 tafels: 8</text></g></svg>') +
CSF.lk.tabel(['tafels (x)', '0', '1', '2', '3', '4'], [['stoelen (y)', '<b>2</b>', '4', '6', '8', '10']]) +
CSF.lk.vb('<p>Er komen telkens <b>2</b> stoelen bij → 2<i>x</i>. Bij 0 tafels blijven de <b>2</b> stoelen aan de uiteinden over → + 2.</p><p>Formule: <b>y = 2x + 2</b>. Controle: 3 tafels → 2 × 3 + 2 = 8 ✓</p>') +
CSF.lk.tip('Controleer je formule altijd met een figuur die je kan tellen. Klopt het daar? Dan klopt het meestal overal.')],
      ["Een grafiek maken", "Zet de getallen in twee kolommen in Google Spreadsheets. Selecteer ze. Kies Invoegen → Diagram. Kies een spreidingsdiagram: je figuurnummers zijn losse punten.",
        CSF.lk.fig('<svg viewBox="0 0 420 180" role="img" aria-label="Een spreidingsdiagram met losse punten"><line x1="50" y1="150" x2="380" y2="150" stroke="#1d1d1b"/><line x1="50" y1="150" x2="50" y2="15" stroke="#1d1d1b"/><g stroke="#e3e3e3"><line x1="50" y1="120" x2="380" y2="120"/><line x1="50" y1="90" x2="380" y2="90"/><line x1="50" y1="60" x2="380" y2="60"/><line x1="50" y1="30" x2="380" y2="30"/></g><g fill="#3BC1C5"><circle cx="110" cy="126" r="6"/><circle cx="170" cy="114" r="6"/><circle cx="230" cy="102" r="6"/><circle cx="290" cy="90" r="6"/><circle cx="350" cy="78" r="6"/></g><g font-size="11" text-anchor="middle"><text x="110" y="166">1</text><text x="170" y="166">2</text><text x="230" y="166">3</text><text x="290" y="166">4</text><text x="350" y="166">5</text><text x="215" y="178">figuurnummer</text><text x="30" y="20">aantal</text></g></svg>', 'Losse punten: er bestaat geen figuur 2,5.') +
CSF.lk.stappen(['Typ in kolom A de figuurnummers, in kolom B de aantallen.', 'Selecteer beide kolommen.', 'Kies <b>Invoegen → Diagram</b>.', 'Kies bij Diagramtype: <b>spreidingsdiagram</b>.', 'Geef je assen een titel: wat staat waar?']) +
CSF.lk.tip('Liggen je punten mooi op een rechte lijn? Dan is het verband lineair.')],
      ["Soorten verbanden", "<b>Lineair:</b> er komt telkens evenveel bij. De punten liggen op een rechte. <b>Kwadratisch:</b> er komt telkens meer bij. De punten liggen op een kromme die steeds steiler wordt. <b>Omgekeerd evenredig:</b> wordt het ene dubbel zo groot, dan wordt het andere half zo groot.",
        CSF.lk.fig('<svg viewBox="0 0 440 150" role="img" aria-label="Drie grafieken: lineair, kwadratisch en omgekeerd evenredig"><g stroke="#1d1d1b"><line x1="20" y1="120" x2="130" y2="120"/><line x1="20" y1="120" x2="20" y2="15"/><line x1="165" y1="120" x2="275" y2="120"/><line x1="165" y1="120" x2="165" y2="15"/><line x1="310" y1="120" x2="420" y2="120"/><line x1="310" y1="120" x2="310" y2="15"/></g><line x1="20" y1="110" x2="125" y2="30" stroke="#3BC1C5" stroke-width="3"/><path d="M165 118 Q215 115 270 20" fill="none" stroke="#FCAF17" stroke-width="3"/><path d="M318 20 Q330 100 415 112" fill="none" stroke="#d9363e" stroke-width="3"/><g font-size="12" text-anchor="middle" font-weight="700"><text x="75" y="142">lineair</text><text x="220" y="142">kwadratisch</text><text x="365" y="142">omgekeerd evenredig</text></g></svg>') +
CSF.lk.vb('<p>Je verdeelt 12 snoepjes eerlijk.</p>' + CSF.lk.tabel(['kinderen', '2', '3', '4', '6'], [['snoepjes per kind', '6', '4', '3', '2']]) + '<p>Dubbel zoveel kinderen → half zoveel snoepjes. Het product blijft altijd 12: <b>omgekeerd evenredig</b>.</p>', 'Omgekeerd evenredig') +
CSF.lk.tabel(['Verband', 'Herken je aan …'], [['lineair', 'er komt telkens evenveel bij'], ['kwadratisch', 'het verschil wordt telkens groter, bijvoorbeeld 1, 4, 9, 16'], ['omgekeerd evenredig', 'x × y blijft altijd hetzelfde']]) +
CSF.lk.tip('Reken bij een tabel altijd de verschillen tussen opeenvolgende getallen uit. Dat verraadt het soort verband.')]
    ],
    invalshoek: { intro: "Verdeel in lesuur 1 de rollen in je duo.", keuzes: [
      ["Schrijver en controleur", "De één schrijft, de ander controleert. Wissel na elk deel."],
      ["Bouwer en rekenaar", "De één legt en tekent, de ander rekent."],
      ["Samen alles", "Jullie doen alles samen en leggen het elkaar uit."]] },
    nogTijd: "Bedenk samen een patroon met een kwadratisch verband. Laat een ander duo de formule zoeken.",
    test: [
      ["Bij een patroon komen er telkens 2 lucifers bij. Figuur 0 heeft 1 lucifer. Welke formule past?", ["y = 2x + 1", "y = x + 2", "y = 2x"], 0, "2 per figuur, plus 1 bij de start."],
      ["Welk verband hoort bij rechthoeken met dezelfde omtrek?", ["Wordt de lengte groter, dan wordt de breedte evenveel kleiner", "Lengte en breedte worden samen groter", "Lengte × breedte blijft gelijk"], 0, "Lengte + breedte blijft gelijk."],
      ["Welk verband hoort bij rechthoeken met dezelfde oppervlakte?", ["Omgekeerd evenredig", "Lineair stijgend", "Kwadratisch"], 0, "Lengte × breedte blijft gelijk."]
    ],
    controle: [
      ["Hoeveel lucifers heeft figuur 10 van de driehoeken?", "getal", [21, 0], "2 × 10 + 1"],
      ["Welk figuurnummer heeft 31 lucifers?", "getal", [15, 0], "2x + 1 = 31"],
      ["Hoeveel tegeltjes heeft figuur 20?", "getal", [400, 0], "20 × 20"],
      ["Een lus van 20 cm: de lengte is 7 cm. Hoe breed is de rechthoek? (cm)", "getal", [3, 0], "lengte + breedte = 10"],
      ["Oppervlakte 12 cm², lengte 8 cm. Hoe breed? (cm)", "getal", [1.5, 0.01], "12 : 8"]
    ],
    criteria: ["Logboek elk lesuur ingevuld", "Tabellen correct ingevuld", "Formules correct opgesteld", "Redeneringen duidelijk opgeschreven", "Drie grafieken in Google Spreadsheets", "Goed samengewerkt in duo"],

    lessen: CSF.lessenN({
      t1: "Lucifers",
      weet: "Noteer wat je al weet over formules met letters.",
      opdracht: "Lees de opdracht. Verdeel de rollen in jullie duo.",
      ideeen: "Bekijk het luciferpatroon. Hoeveel lucifers komen er telkens bij?",
      start: "Werkblad 1: leg de figuren met lucifers. Vul de tabel in. Stel de formule op. Bedenk een eigen patroon.",
      midden: [
        { titel: "Tegels en grafieken", werk: "Werkblad 2: onderzoek het tegelpatroon. Stel de formule op. Maak een grafiek in Google Spreadsheets." }
      ],
      laatste: { titel: "Touwtjes en oppervlakte", werk: "Werkblad 3: meet rechthoeken met een lus van 20 cm. Teken rechthoeken met dezelfde oppervlakte. Stel formules op en maak grafieken.", presenteer: "Leg aan een ander duo uit welke drie soorten verbanden jullie ontdekten." }
    }),

    werkbundel: [
      { les: 1, html: `
        ${h.kader("De opdracht", "Werk in <b>duo</b>. Bekijk patronen met regelmaat. Beschrijf die regelmaat met woorden, een tabel, een grafiek en een formule.")}
        <p><b>Duo:</b> ______________________________ en ______________________________</p>
        <h2>Werkblad 1 · Lucifers</h2>
        <p>Yana legt een rij driehoeken met lucifers.</p>
        ${lucifers()}
        ${fiche([["1. Leg figuur 4 met lucifers. Hoeveel lucifers?", 26], ["2. Hoeveel lucifers komen er telkens bij?", 26]])}
        <p>3. Vul de tabel in. Figuur 0 is één losse lucifer.</p>
        ${tabel(["nummer", "aantal lucifers"], 6)}
        ${fiche([["4. Hoe breid je de tabel uit zonder te leggen?", 40], ["5. Hoeveel lucifers heeft figuur 10?", 26], ["6. Een formule is een recept: aantal lucifers = … Bedenk de formule.", 34, "y = "], ["7. Welk figuurnummer heeft 31 lucifers?", 34]])}` },
      { les: 1, html: `
        ${h.leerkaart("Leerkaart · Van patroon naar formule", "<p>Zoek hoeveel er telkens bijkomt: dat getal staat voor de <b>x</b>. Kijk wat er bij figuur 0 is: dat tel je erbij. Voorbeeld: elke figuur 3 meer en figuur 0 heeft 2 → <b>y = 3x + 2</b>.</p>")}
        <h3>8. Ons eigen luciferpatroon</h3>
        <p>Bedenk samen een patroon met regelmaat. Teken de eerste vier figuren.</p>
        ${h.vak("Figuur 1 tot 4", 200)}
        ${tabel(["nummer", "aantal lucifers"], 6)}
        ${fiche([["9. Onze formule", 30, "y = "], ["Hoeveel lucifers heeft figuur 50?", 30]])}` },
      { les: 2, html: `
        <h2>Werkblad 2 · Tegels</h2>
        <p>Ben legt vierkanten met tegeltjes.</p>
        ${tegels()}
        ${fiche([["10. Schets figuur 4.", 90]])}
        <p>11. Vul de tabel in.</p>
        ${tabel(["nummer", "aantal tegeltjes"], 6)}
        ${fiche([["12. Formule voor het aantal tegeltjes", 30, "y = "], ["13. Hoeveel tegeltjes heeft figuur 20?", 26], ["14. Is er een figuur met 100 tegeltjes? En met 50? Schrijf je redenering op.", 60]])}
        <p>15. Maak een grafiek van de tabel in Google Spreadsheets. Plak hem in jullie document of teken hem hier.</p>
        ${h.vak("Grafiek", 150)}
        ${fiche([["16. Waarom kozen jullie dit type grafiek? Wat lees je eruit?", 50]])}` },
      { les: 3, html: `
        <h2>Werkblad 3 · Touwtjes</h2>
        <p>17. Knoop een touwtje van iets meer dan 20 cm tot een lus van 20 cm. 18. Leg de lus als rechthoek op ruitjespapier. Meet de lengte en de breedte. Vul aan.</p>
        ${tabel(["lengte (cm)", "breedte (cm)"], 7, [1, 2, 3, 4, 5, 6, 7])}
        ${fiche([["19. Formule tussen lengte (x) en breedte (y)", 30, "y = "], ["20. Maak de grafiek in Google Spreadsheets. Wat zie je?", 40], ["21. Hoe verandert de formule bij een lus van 60 cm?", 30, "y = "]])}
        <h2>Oppervlakte</h2>
        <p>22. Teken drie verschillende rechthoeken met een oppervlakte van 12 cm². Vul de tabel aan.</p>
        ${tabel(["lengte (cm)", "breedte (cm)"], 6, [1, 2, 3, 4, 6, 12])}
        ${fiche([["23. Formule tussen lengte (x) en breedte (y)", 30, "y = "], ["24. Maak de grafiek in Google Spreadsheets. Hoe verschilt ze van die bij de touwtjes?", 50]])}
        ${h.leerkaart("Leerkaart · Soorten verbanden", "<p><b>Lineair:</b> telkens evenveel erbij, de punten liggen op een rechte. <b>Kwadratisch:</b> telkens meer erbij, een kromme die steeds steiler wordt. <b>Omgekeerd evenredig:</b> wordt het ene dubbel zo groot, dan wordt het andere half zo groot.</p>")}` }
    ]
  });
})();
