/* aardrijkskunde · 3D rondom je
   Bron: opdracht ‘2D en 3D · schaal · symmetrie · van ontwerp naar werkelijkheid’ van de werkgroep,
   herwerkt met eigen opgaven en eigen tekeningen (geen methodebladen of foto’s). */
(function () {
  var h = CSF.h;

  // Ontwerp van een wandmeubel op schaal 1 : 25 (ware grootte in mm: werkelijke cm × 0,4)
  var S = 0.4;
  function vooraanzicht() {
    var W = 300 * S, H = 220 * S, y = function (cm) { return 6 + H - cm * S; };
    var s = '<svg width="' + (W + 12) + 'mm" height="' + (H + 22) + 'mm" viewBox="-6 0 ' + (W + 12) + " " + (H + 22) + '" font-family="Arial">';
    s += '<rect x="0" y="6" width="' + W + '" height="' + H + '" fill="#fff" stroke="#111" stroke-width="0.4"/>';
    s += '<line x1="0" y1="' + y(50) + '" x2="' + W + '" y2="' + y(50) + '" stroke="#111" stroke-width="0.3"/>';
    s += '<line x1="0" y1="' + y(180) + '" x2="' + W + '" y2="' + y(180) + '" stroke="#111" stroke-width="0.3"/>';
    [50, 100, 150, 200, 250].forEach(function (x) { s += '<line x1="' + x * S + '" y1="' + y(50) + '" x2="' + x * S + '" y2="' + y(0) + '" stroke="#111" stroke-width="0.2"/><line x1="' + x * S + '" y1="' + y(220) + '" x2="' + x * S + '" y2="' + y(180) + '" stroke="#111" stroke-width="0.2"/>'; });
    s += '<line x1="' + 180 * S + '" y1="' + y(180) + '" x2="' + 180 * S + '" y2="' + y(50) + '" stroke="#111" stroke-width="0.3"/>';
    s += '<rect x="' + 30 * S + '" y="' + y(110) + '" width="' + 120 * S + '" height="' + 50 * S + '" fill="#f9b000" fill-opacity="0.35" stroke="#111" stroke-width="0.3"/>';
    s += '<text x="' + 90 * S + '" y="' + (y(85) + 1.2) + '" font-size="3.2" text-anchor="middle">gashaard</text>';
    s += '<rect x="' + 190 * S + '" y="' + y(160) + '" width="' + 100 * S + '" height="' + 70 * S + '" fill="#e6f5f6" stroke="#111" stroke-width="0.3"/>';
    s += '<text x="' + 240 * S + '" y="' + (y(125) + 1.2) + '" font-size="3.2" text-anchor="middle">tv-nis</text>';
    s += '<line x1="0" y1="' + (H + 13) + '" x2="' + W + '" y2="' + (H + 13) + '" stroke="#111" stroke-width="0.25"/><line x1="0" y1="' + (H + 10) + '" x2="0" y2="' + (H + 16) + '" stroke="#111" stroke-width="0.25"/><line x1="' + W + '" y1="' + (H + 10) + '" x2="' + W + '" y2="' + (H + 16) + '" stroke="#111" stroke-width="0.25"/>';
    s += '<text x="' + W / 2 + '" y="' + (H + 19.5) + '" font-size="3.4" text-anchor="middle">300 cm</text>';
    return s + "</svg>";
  }
  function bovenaanzicht() {
    var W = 300 * S, D = 40 * S;
    return '<svg width="' + (W + 12) + 'mm" height="' + (D + 12) + 'mm" viewBox="-6 0 ' + (W + 12) + " " + (D + 12) + '" font-family="Arial">' +
      '<line x1="-4" y1="4" x2="' + (W + 4) + '" y2="4" stroke="#111" stroke-width="0.8"/><text x="' + W / 2 + '" y="2.8" font-size="2.8" text-anchor="middle" fill="#666">muur</text>' +
      '<rect x="0" y="4" width="' + W + '" height="' + D + '" fill="#fff" stroke="#111" stroke-width="0.4"/>' +
      '<line x1="' + 180 * S + '" y1="4" x2="' + 180 * S + '" y2="' + (4 + D) + '" stroke="#111" stroke-width="0.2" stroke-dasharray="1 0.8"/>' +
      '<text x="' + W / 2 + '" y="' + (D + 10) + '" font-size="2.8" text-anchor="middle" fill="#666">voorkant</text></svg>';
  }
  // Figuren om symmetrieassen in te tekenen
  function figuren() {
    var f = [
      '<rect x="15" y="15" width="50" height="50"/>',
      '<rect x="5" y="25" width="70" height="30"/>',
      '<polygon points="40,10 69,60 11,60"/>',
      '<polygon points="40,8 70,25 70,55 40,72 10,55 10,25"/>',
      '<text x="40" y="66" font-size="64" font-family="Arial" font-weight="700" text-anchor="middle" fill="#ddd" stroke="#111">H</text>',
      '<text x="40" y="66" font-size="64" font-family="Arial" font-weight="700" text-anchor="middle" fill="#ddd" stroke="#111">S</text>'
    ];
    var namen = ["vierkant", "rechthoek", "gelijkzijdige driehoek", "regelmatige zeshoek", "letter H", "letter S"];
    return '<div style="display:grid;grid-template-columns:repeat(6,1fr);gap:4px;text-align:center">' + f.map(function (x, i) {
      return '<div><svg viewBox="0 0 80 80" width="88" height="88"><g fill="#e6f5f6" stroke="#111" stroke-width="1.6">' + x + '</g></svg><div class="klein">' + namen[i] + '</div><div class="klein">assen: ____</div></div>';
    }).join("") + "</div>";
  }
  // Ruitjesraster met een halve figuur om symmetrisch af te werken
  function halveFiguur() {
    var r = 6, n = 20, m = 12, s = '<svg width="' + n * r + 'mm" height="' + m * r + 'mm" viewBox="0 0 ' + n * r + " " + m * r + '">';
    for (var i = 0; i <= n; i++) s += '<line x1="' + i * r + '" y1="0" x2="' + i * r + '" y2="' + m * r + '" stroke="#bbb" stroke-width="0.2"/>';
    for (var j = 0; j <= m; j++) s += '<line x1="0" y1="' + j * r + '" x2="' + n * r + '" y2="' + j * r + '" stroke="#bbb" stroke-width="0.2"/>';
    s += '<line x1="' + 10 * r + '" y1="0" x2="' + 10 * r + '" y2="' + m * r + '" stroke="#111" stroke-width="0.6"/>';
    var p = [[10, 1], [7, 3], [7, 5], [4, 5], [2, 8], [6, 8], [6, 11], [10, 11]].map(function (q) { return q[0] * r + "," + q[1] * r; }).join(" ");
    s += '<polyline points="' + p + '" fill="none" stroke="#17808a" stroke-width="0.8"/>';
    return s + "</svg>";
  }
  function ruitjes(hoogteMm) {
    var r = 5, n = 36, m = Math.floor(hoogteMm / r), s = '<svg width="' + n * r + 'mm" height="' + m * r + 'mm" viewBox="0 0 ' + n * r + " " + m * r + '">';
    for (var i = 0; i <= n; i++) s += '<line x1="' + i * r + '" y1="0" x2="' + i * r + '" y2="' + m * r + '" stroke="#bbb" stroke-width="0.2"/>';
    for (var j = 0; j <= m; j++) s += '<line x1="0" y1="' + j * r + '" x2="' + n * r + '" y2="' + j * r + '" stroke="#bbb" stroke-width="0.2"/>';
    return s + "</svg>";
  }
  function lijnschaal() {
    return '<svg width="90mm" height="14mm" viewBox="0 0 90 14" font-family="Arial" font-size="3.2">' +
      [0, 1, 2, 3].map(function (i) { return '<rect x="' + (5 + i * 20) + '" y="2" width="20" height="4" fill="' + (i % 2 ? "#fff" : "#17808a") + '" stroke="#111" stroke-width="0.3"/>'; }).join("") +
      [0, 1, 2, 3, 4].map(function (i) { return '<text x="' + (5 + i * 20) + '" y="11" text-anchor="middle">' + i * 10 + "</text>"; }).join("") + '<text x="88" y="11" text-anchor="end">km</text></svg>';
  }

  CSF.project({
    id: "aardrijkskunde-3d-rondom-je",
    soort: "vak",
    vak: "aardrijkskunde",
    jaar: "1e en 2e jaar",
    tijd: "5 lesuren",
    sterren: 3,
    voorWie: "Voor leerlingen met interesse in perspectief en de wereld.",
    naam: "3D rondom je: van kaart tot ontwerp",
    kort: "Verken de wereld in 2D en 3D. Ontwerp daarna een meubel op schaal.",
    omschrijving: "Laat het Pegmannetje je meenemen op tocht naar het Atomium! Zoek daarna de mooiste uitzichten vanop de Eiffeltoren. Onderweg leer je een heleboel leuke weetjes. Wat hebben vlinders gemeen met de kunstwerken van Escher? Tip: het begint met een S. 😉 Pas daarna je nieuwe kennis toe. Ontwerp als architect een eigen meubel op schaal. Deze opdracht is erg gevarieerd. Je vindt er zeker je gading!",
    doel: "Je leert het verschil tussen 2D en 3D. Je rekent met schaal. Je herkent symmetrie. Je zet een ontwerp om in aanzichten op schaal.",
    bereikt: ["Een 2D-kaart en een 3D-beeld vergelijken", "Rekenen met een breukschaal en een lijnschaal", "Symmetrieassen herkennen en tekenen", "Een vooraanzicht en een bovenaanzicht lezen en tekenen"],
    toepassen: ["Nauwkeurig meten en tekenen", "Ruimtelijk denken: van 3D naar 2D en terug", "Plannen: een ontwerp stap voor stap uitwerken", "Keuzes verantwoorden"],
    materiaal: ["Werkbundel (met ruitjespapier)", "Liniaal, potlood, gom, kleurpotloden, rekenmachine", "Een toestel met internet"],
    oplossing: "Op deze site, bij ‘Controleer je oplossing’. Je eigen ontwerp heeft geen vaste oplossing. Je coach beoordeelt het met het rooster.",
    product: "Een eigen meubelontwerp op schaal 1 : 20: vooraanzicht, bovenaanzicht en 3D-schets",
    links: [["Google Maps en Street View", "https://www.google.be/maps"]],
    leerkaarten: [
      ["2D en 3D", "Een kaart toont de wereld plat, van bovenaf: 2D. Je ziet lengte en breedte. Een foto of Street View toont ook de hoogte: 3D. Sleep in Google Maps Pegman, het gele poppetje, op de kaart. Zo open je Street View."],
      ["Het Atomium", "Het Atomium staat in Brussel. Het werd gebouwd voor de wereldtentoonstelling van 1958. Het stelt een ijzerkristal voor, 165 miljard keer vergroot. Het telt 9 bollen."],
      ["Schaal", "Een schaal toont hoeveel keer kleiner een kaart is dan de werkelijkheid. Bij een breukschaal 1 : 2 500 000 is 1 cm op de kaart 2 500 000 cm in werkelijkheid. Dat is 25 km. Een lijnschaal toont dat met een balkje."],
      ["Symmetrie", "Een symmetrische figuur bestaat uit twee gelijke helften. De ene helft is het spiegelbeeld van de andere. De vouwlijn heet de symmetrieas. Een vierkant heeft 4 symmetrieassen. Een cirkel heeft er oneindig veel."],
      ["Escher", "De Nederlandse kunstenaar M.C. Escher vulde vlakken met figuren zonder gaten of overlappingen. Vogels, vissen en hagedissen passen precies in elkaar. Dat heet een regelmatige vlakvulling."],
      ["Aanzichten", "Een vooraanzicht toont een voorwerp recht van voren. Een bovenaanzicht toont het recht van boven. Een zijaanzicht toont het van opzij. Een ontwerper noteert alle maten in cm."]
    ],
    invalshoek: { intro: "Kies in lesuur 4 het meubel van je eigen ontwerp.", keuzes: [
      ["Wandmeubel met gashaard", "Een wand met een haard, een tv-nis en kasten."],
      ["Boekenkast met leeshoek", "Rekken, een zitbank en een leeslamp."],
      ["Bureau met kast", "Een werkplek of gamehoek met opbergruimte."]] },
    nogTijd: "Ontwerp een vlakvulling zoals Escher. Teken een vierkant. Knip aan één kant een stuk weg. Plak dat stuk aan de overkant. Teken de nieuwe figuur een paar keer naast en onder elkaar.",
    test: [
      ["Welke voorstelling is 3D?", ["Street View", "Een plattegrond", "Een wegenkaart"], 0, "Street View toont ook de hoogte."],
      ["Schaal 1 : 100 000. Hoeveel is 1 cm op de kaart in werkelijkheid?", ["1 km", "100 m", "10 km"], 0, "100 000 cm = 1000 m = 1 km."],
      ["Hoeveel symmetrieassen heeft een vierkant?", ["4", "2", "1"], 0, "Twee assen door de middens van de zijden en twee langs de diagonalen."]
    ],
    controle: [
      ["Welke rivier stroomt langs de Eiffeltoren?", "tekst", ["seine", "de seine"], "Kijk in Google Maps naar het water naast de toren."],
      ["Hoeveel bollen telt het Atomium?", "getal", [9, 0], "Tel ook de bol in het midden."],
      ["Brussel–Parijs is 320 km. Op de kaart is dat 8 cm. Schaal 1 : …", "getal", [4000000, 0], "Reken 320 km om naar cm. Deel door 8."],
      ["Kaart op schaal 1 : 50 000. Hoeveel km is 6 cm op die kaart?", "getal", [3, 0], "6 × 50 000 cm = 300 000 cm. Reken om naar km."],
      ["Werkblad 2, vraag 4: wat is de breukschaal van de lijnschaal? 1 : …", "getal", [500000, 0], "Meet hoeveel cm 10 km is. Reken uit hoeveel km 1 cm is."],
      ["Hoeveel symmetrieassen heeft een gelijkzijdige driehoek?", "getal", [3, 0], "Teken een as vanuit elke hoek naar het midden van de overstaande zijde."],
      ["Werkblad 4: op welke schaal is het wandmeubel getekend? 1 : …", "getal", [25, 0], "Meet de totale breedte op de tekening. Vergelijk met 300 cm."],
      ["Werkblad 4: hoe breed is de gashaard in werkelijkheid (cm)?", "getal", [120, 3], "Meet de gashaard op de tekening. Vermenigvuldig met de schaal."],
      ["Werkblad 4: hoe diep is het wandmeubel in werkelijkheid (cm)?", "getal", [40, 3], "Meet de diepte in het bovenaanzicht."]
    ],
    criteria: ["Logboek elk lesuur ingevuld", "2D en 3D juist vergeleken", "Schaalberekeningen juist, met tussenstappen", "Symmetrieassen juist getekend", "Ontwerp op schaal 1 : 20 met juiste maten", "Vooraanzicht, bovenaanzicht en 3D-schets passen bij elkaar"],

    lessen: CSF.lessenN({
      t1: "Opstart: van 2D naar 3D",
      weet: "Noteer je voorkennis over kaarten, Google Maps en Street View.",
      opdracht: "Lees de opdracht. Noteer de onderdelen van je eindproduct.",
      ideeen: "Noteer minstens 4 verschillen tussen een kaart en een foto.",
      start: "Werkblad 1: verken het Atomium en de Eiffeltoren in 2D en in 3D.",
      midden: [
        { titel: "Schaal", werk: "Werkblad 2: reken met de breukschaal en de lijnschaal. Controleer je antwoorden op de site." },
        { titel: "Symmetrie", werk: "Werkblad 3: teken de symmetrieassen. Werk de figuur symmetrisch af. Bekijk vlakvullingen van Escher op het internet." },
        { titel: "Aanzichten", werk: "Werkblad 4: lees het ontwerp van het wandmeubel. Meet en reken met de schaal. Kies het meubel voor je eigen ontwerp." }
      ],
      laatste: { titel: "Mijn ontwerp op schaal", werk: "Teken je meubel op schaal 1 : 20 in vooraanzicht en bovenaanzicht. Maak een 3D-schets.", presenteer: "Stel je ontwerp in 2 minuten voor aan een medeleerling of via een opname op Smartschool." }
    }),

    werkbundel: [
      { les: 1, html: `
        ${h.kader("De opdracht", "Verken bekende plekken in 2D en in 3D. Reken met schaal. Ontdek symmetrie. Lees het ontwerp van een wandmeubel. Ontwerp tot slot zelf een meubel op schaal 1 : 20.")}
        <p><b>Wat weet ik al over kaarten, Google Maps en Street View?</b></p>${h.lijnen(2)}
        ${h.leerkaart("Leerkaart · 2D en 3D", "<p>Een kaart toont de wereld plat, van bovenaf: <b>2D</b>. Je ziet lengte en breedte. Een foto of Street View toont ook de hoogte: <b>3D</b>.</p><p>Sleep in Google Maps <b>Pegman</b>, het gele poppetje rechtsonder, op de kaart. Laat hem los op een blauwe lijn. Zo open je Street View.</p>")}
        <h2>Werkblad 1 · Het Atomium</h2>
        <p>Open Google Maps. Zoek ‘Atomium Brussel’. Bekijk eerst de kaart. Sleep daarna Pegman naar het Atomium.</p>
        <table><tr><th style="width:50%">Op de kaart (2D) zie ik …</th><th>In Street View (3D) zie ik …</th></tr><tr><td style="height:90px"></td><td></td></tr></table>
        <p><b>Hoeveel bollen telt het Atomium?</b> ______ &nbsp; <b>Vier verschillen tussen een kaart en een foto:</b></p>${h.lijnen(2)}` },
      { les: 1, html: `
        <h2>Werkblad 1 · De Eiffeltoren</h2>
        <p>Zoek ‘Eiffeltoren Parijs’ in Google Maps.</p>
        <p><b>Welke rivier stroomt langs de toren?</b> ______________________</p>
        <p>Sleep Pegman op de Eiffeltoren. Kies rechtsonder een verdieping. Draai helemaal rond. Bekijk het uitzicht.</p>
        <table><tr><th style="width:20%">Verdieping</th><th>Wat zie ik?</th></tr><tr><td>2</td><td style="height:44px"></td></tr><tr><td>3</td><td style="height:44px"></td></tr></table>
        <p><b>Op welke verdieping is het uitzicht het mooist? Waarom?</b></p>${h.lijnen(2)}
        ${h.leerkaart("Leerkaart · Het Atomium", "<p>Het Atomium staat in Brussel. Het werd gebouwd voor de wereldtentoonstelling van <b>1958</b>. Het stelt een <b>ijzerkristal</b> voor, 165 miljard keer vergroot. Het telt <b>9 bollen</b>.</p>")}
        <p><b>Zoek zelf twee weetjes over de Eiffeltoren op.</b></p>${h.lijnen(2)}
        <h3>Wat lukte vandaag? Wat nog niet?</h3>${h.lijnen(2)}` },
      { les: 2, html: `
        <h2>Werkblad 2 · Schaal</h2>
        ${h.leerkaart("Leerkaart · Schaal", "<p>Een schaal toont hoeveel keer kleiner een kaart is dan de werkelijkheid.</p><p><b>Breukschaal</b> 1 : 2 500 000: 1 cm op de kaart is 2 500 000 cm in werkelijkheid. Dat is 25 km.</p><p><b>Omrekenen:</b> 1 km = 1000 m = 100 000 cm.</p>")}
        <p><b>1.</b> Brussel–Parijs is in werkelijkheid 320 km. Op een kaart is dat 8 cm. Vul de verhoudingstabel in.</p>
        <table style="text-align:center"><tr><th style="width:36%;text-align:left">Afstand op de kaart (cm)</th><td>8</td><td>1</td></tr><tr><th style="text-align:left">Afstand in werkelijkheid (cm)</th><td style="height:30px"></td><td></td></tr></table>
        <p>De kaart is getekend op schaal 1 : ______________</p>
        <p><b>2.</b> Een wandelkaart heeft schaal 1 : 50 000. Op de kaart is een pad 6 cm lang. Hoeveel km is dat?</p>${h.lijnen(2)}
        <p><b>3.</b> Een kaart heeft schaal 1 : 250 000. Twee dorpen liggen 15 km uit elkaar. Hoeveel cm is dat op de kaart?</p>${h.lijnen(2)}
        <p><b>4.</b> Dit is een lijnschaal. Hoeveel km is 1 cm? Wat is de breukschaal?</p>
        <div style="text-align:center">${lijnschaal()}</div>${h.lijnen(1)}
        <p><b>5.</b> Meet in Google Maps de afstand van je school tot Gent. Klik met de rechtermuisknop en kies ‘Afstand meten’.</p>${h.lijnen(1)}` },
      { les: 3, html: `
        <h2>Werkblad 3 · Symmetrie</h2>
        ${h.leerkaart("Leerkaart · Symmetrie", "<p>Een symmetrische figuur bestaat uit twee gelijke helften. De ene helft is het spiegelbeeld van de andere. De vouwlijn heet de <b>symmetrieas</b>. Sommige figuren hebben meer dan één as. Een cirkel heeft er oneindig veel.</p>")}
        <p><b>1.</b> Teken alle symmetrieassen. Noteer het aantal.</p>
        ${figuren()}
        <p><b>2.</b> Werk de figuur af. Spiegel ze over de zwarte as.</p>
        <div style="text-align:center">${halveFiguur()}</div>
        <p><b>3.</b> Zoek in de natuur of in een gebouw 2 voorbeelden van symmetrie.</p>${h.lijnen(2)}` },
      { les: 3, html: `
        <h2>Escher en vlakvulling</h2>
        ${h.leerkaart("Leerkaart · Escher", "<p>De Nederlandse kunstenaar <b>M.C. Escher</b> vulde vlakken met figuren zonder gaten of overlappingen. Vogels, vissen en hagedissen passen precies in elkaar. Dat heet een <b>regelmatige vlakvulling</b>.</p>")}
        <p>Zoek op het internet ‘Escher vlakvulling’. Kies één werk.</p>
        <table class="fiche"><tr><td class="lbl">Titel of onderwerp</td><td style="height:28px"></td></tr><tr><td class="lbl">Welke figuur herhaalt zich?</td><td style="height:40px"></td></tr><tr><td class="lbl">Zie je symmetrie? Waar?</td><td style="height:50px"></td></tr></table>
        ${h.vak("Schets van de figuur die zich herhaalt", 330)}
        <h3>Wat lukte vandaag? Wat leerde ik?</h3>${h.lijnen(2)}` },
      { les: 4, html: `
        <h2>Werkblad 4 · Van ontwerp naar werkelijkheid</h2>
        ${h.leerkaart("Leerkaart · Aanzichten", "<p>Een <b>vooraanzicht</b> toont een voorwerp recht van voren. Een <b>bovenaanzicht</b> toont het recht van boven. Een <b>zijaanzicht</b> toont het van opzij. Een ontwerper noteert alle maten in cm.</p>")}
        <p>Een ontwerper tekende een wandmeubel. Meet met je liniaal in deze tekeningen. <span class="klein">Druk dit blad af op ware grootte (100 %).</span></p>
        <p class="klein"><b>Vooraanzicht</b></p><div style="text-align:center">${vooraanzicht()}</div>
        <p class="klein"><b>Bovenaanzicht</b></p><div style="text-align:center">${bovenaanzicht()}</div>
        <p class="klein">Lees de leerkaart ‘Aanzichten’. Beantwoord de vragen op het volgende blad.</p>` },
      { les: 4, html: `
        <h2>Werkblad 4 · Vragen bij het ontwerp</h2>
        <table><tr><td style="width:62%">1. Op welke schaal is het meubel getekend?</td><td>1 : ______</td></tr>
        <tr><td>2. Hoe breed is de gashaard in werkelijkheid?</td><td>______ cm</td></tr>
        <tr><td>3. Hoe breed mag de tv maximaal zijn?</td><td>______ cm</td></tr>
        <tr><td>4. Hoe diep is het wandmeubel?</td><td>______ cm</td></tr>
        <tr><td>5. Is het vooraanzicht symmetrisch? Waarom?</td><td style="height:34px"></td></tr></table>
        <p><b>Mijn eigen meubel:</b> wandmeubel met gashaard / boekenkast met leeshoek / bureau met kast</p>
        <table class="fiche"><tr><td class="lbl">Breedte · hoogte · diepte in werkelijkheid</td><td style="height:30px"></td></tr><tr><td class="lbl">Wat komt erin? (kasten, rekken, nissen …)</td><td style="height:60px"></td></tr></table>
        ${h.vak("Eerste ruwe schets van mijn meubel", 260)}
        <h3>Wat lukte vandaag? Wat leerde ik?</h3>${h.lijnen(2)}` },
      { les: 5, html: `
        <h2>Mijn ontwerp · eindproduct</h2>
        <p>Teken je meubel op schaal <b>1 : 20</b>. 1 hokje van 5 mm = 10 cm in werkelijkheid. Noteer alle maten in cm.</p>
        <p class="klein"><b>Vooraanzicht</b></p><div style="text-align:center">${ruitjes(115)}</div>
        <p class="klein"><b>Bovenaanzicht</b></p><div style="text-align:center">${ruitjes(35)}</div>` },
      { les: 5, html: `
        <h2>Mijn ontwerp in 3D</h2>
        ${h.vak("3D-schets van mijn meubel", 420)}
        <p><b>Waar zit symmetrie in mijn ontwerp? Of waarom koos ik voor geen symmetrie?</b></p>${h.lijnen(2)}
        <p><b>Wat vind ik het sterkste punt van mijn ontwerp?</b></p>${h.lijnen(2)}
        <p><b>Presenteren (2 min):</b> je meubel en je keuze · de maten en de schaal · het sterkste punt van je ontwerp.</p>` }
    ]
  });
})();
