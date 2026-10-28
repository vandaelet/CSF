/* STEM · Biomimicry
   Bron: de Bookwidget ‘CSF biomimicry’ van de werkgroep, uitgewerkt tot 8 lesuren.
   De koppeloefening en de werkbladen zijn eigen materiaal. */
(function () {
  var h = CSF.h;
  function vink(lijst) { return "<table>" + lijst.map(function (x) { return '<tr><td style="width:7%;text-align:center;font-size:13pt">&#9744;</td><td>' + x + "</td></tr>"; }).join("") + "</table>"; }
  function fiche(lijst) { return '<table class="fiche">' + lijst.map(function (v) { return '<tr><td class="lbl">' + v[0] + '</td><td style="height:' + (v[1] || 30) + 'px">' + (v[2] || "") + "</td></tr>"; }).join("") + "</table>"; }
  var VOORBEELDEN = [
    "Wieken van windturbines, geïnspireerd op een lichaamsdeel van een dier.", "Een kever leerde de mens water winnen in de woestijn.", "Een ‘dierenhotel’ inspireerde slimme ventilatiesystemen.",
    "Kleine insecten zijn een voorbeeld voor betere naalden.", "Dolfijnen inspireren onderwatercommunicatie.", "Een wandeling met een hond leidde tot klittenband.",
    "Herbruikbare tape, afgekeken van een reptiel.", "De helikopter, geïnspireerd op een zaadje.", "Een roofvogel inspireerde de vleugels van vliegtuigen.",
    "De neus van een hogesnelheidstrein, naar een klein vogeltje.", "Een vis als voorbeeld voor de vorm van een auto.", "Een zwempak dat alle wereldrecords deed sneuvelen.",
    "Duikers hebben het niet koud dankzij een knaagdier.", "Het blad van een bloem houdt water uit je schoenen en je tent.", "Een vogel inspireerde de fietshelm."];
  var NATUUR = ["arend", "bever", "bultrugwalvis", "dolfijn", "esdoornzaadje", "gekko", "haai", "ijsvogel", "klis", "koffervis", "lotusbloem", "mug", "specht", "termieten", "woestijnkever"];

  CSF.project({
    id: "stem-biomimicry",
    soort: "vak",
    vak: "STEM",
    jaar: "1e en 2e jaar",
    tijd: "8 lesuren",
    sterren: 4,
    naam: "Biomimicry",
    kort: "Natuur en wetenschap gaan hand in hand.",
    voorWie: "Voor leerlingen met verwondering voor de natuur en interesse in wetenschap.",
    omschrijving: "De mens kijkt vaak naar de natuur voor slimme oplossingen. Veel alledaagse voorwerpen zijn nagemaakt van iets uit de natuur. Ontdek de vele vormen van biomimicry. Verdiep je daarna in één kopie uit de natuur. Maak er een presentatie en een creatief werkstuk over. 🦎",
    doel: "Je ontdekt wat biomimicry is. Je onderzoekt één voorbeeld in detail: het natuurelement, de uitvinding, de werking en de geschiedenis. Je maakt een presentatie met een logische opbouw en een creatief werkstuk. Je stelt je onderwerp voor aan een publiek.",
    bereikt: ["Uitleggen wat biomimicry is", "Gericht informatie zoeken en bronnen noteren", "De werking van een uitvinding uitleggen aan de hand van de natuur", "Een presentatie logisch en verhalend opbouwen", "Een schaalmodel, proef, filmpje of affiche maken", "Een correcte e-mail schrijven aan een bedrijf"],
    toepassen: ["Plannen: acht lesuren goed verdelen", "Organiseren: informatie ordenen in een map en een tijdlijn", "Creatief denken: een eigen werkstuk bedenken", "Spreken voor een publiek"],
    materiaal: ["Werkbundel", "Een Chromebook met internet en je schoolaccount (Google Drive)", "Kosteloos materiaal voor je creatieve opdracht", "De Biomimicry-kaarten in de Future Classroom (als extra inspiratie)"],
    oplossing: "Controleer de koppeloefening op deze site, bij ‘Controleer je oplossing’. Je coach beoordeelt je presentatie en je werkstuk met het rooster.",
    product: "Een presentatie over één voorbeeld van biomimicry en een creatief werkstuk (schaalmodel, proef, filmpje, affiche …)",
    links: [["AskNature: voorbeelden van biomimicry (Engels)", "https://asknature.org"], ["Biomimicry (Wikipedia)", "https://nl.wikipedia.org/wiki/Biomimicry"], ["Google Drive", "https://drive.google.com"], ["Google Presentaties", "https://docs.google.com/presentation"]],
    leerkaarten: [
      ["Wat is biomimicry?", "Biomimicry komt van het Griekse <i>bios</i> (leven) en <i>mimesis</i> (nabootsen). Mensen kijken naar slimme oplossingen in de natuur en bootsen ze na. De natuur heeft miljoenen jaren kunnen ‘uittesten’ wat werkt.",
        CSF.lk.fig('<svg viewBox="0 0 440 120" role="img" aria-label="Van natuur naar uitvinding"><g font-size="12" text-anchor="middle"><rect x="10" y="25" width="120" height="60" rx="10" fill="#7fb36b"/><text x="70" y="50" fill="#fff" font-weight="700">1. kijk</text><text x="70" y="68" fill="#fff">naar de natuur</text><rect x="160" y="25" width="120" height="60" rx="10" fill="#3BC1C5"/><text x="220" y="50" fill="#fff" font-weight="700">2. begrijp</text><text x="220" y="68" fill="#fff">hoe het werkt</text><rect x="310" y="25" width="120" height="60" rx="10" fill="#FCAF17"/><text x="370" y="50" fill="#fff" font-weight="700">3. boots na</text><text x="370" y="68" fill="#fff">in een product</text></g><g stroke="#1d1d1b" stroke-width="2"><line x1="130" y1="55" x2="158" y2="55"/><line x1="280" y1="55" x2="308" y2="55"/></g></svg>') +
CSF.lk.vb('<p>Op wegen zie je ’s nachts kleine lichtjes in het midden van de rijbaan. Die reflectoren werken zoals de ogen van een kat: ze kaatsen het licht van de koplampen terug.</p>', 'Voorbeeld') +
CSF.lk.tip('Kijk eens naar je eigen omgeving. Welk dier of welke plant lost iets slim op?')],
      ["Drie niveaus", "Je kan een <b>vorm</b> nabootsen, zoals de snavel van een ijsvogel. Je kan een <b>werking</b> nabootsen, zoals de haakjes van een klis. Je kan een heel <b>systeem</b> nabootsen, zoals de luchtstroom in een termietenheuvel.",
        CSF.lk.tabel(['Niveau', 'Wat boots je na?', 'Voorbeeld'], [['vorm', 'hoe iets eruitziet', 'De vinnen van een bultrug hebben bobbels. Windturbines met zulke bobbels draaien rustiger.'], ['werking', 'hoe iets werkt', 'Een kattenoog kaatst licht terug: zo werkt een reflector.'], ['systeem', 'hoe alles samenwerkt', 'In een bos is afval voedsel voor iets anders. Een fabriek kan haar afval ook laten hergebruiken.']]) +
CSF.lk.p('Hoe hoger het niveau, hoe moeilijker, maar vaak ook hoe slimmer de oplossing.') +
CSF.lk.tip('Twijfel je welk niveau? Vraag je af: neem ik de vorm over, het trucje of de hele samenwerking?')],
      ["Goede informatie zoeken", "Zoek met de woorden ‘biomimicry’ en de naam van je dier of plant. Vergelijk minstens drie bronnen. Noteer van elke bron de volledige link. Bekijk ook filmpjes. Je mag een bedrijf mailen met een vraag.",
        CSF.lk.tabel(['Bron', 'Wat?', 'Betrouwbaar?'], [['website van een museum of universiteit', 'uitleg van specialisten', '✓ meestal goed'], ['krant of nieuwssite', 'een artikel over de uitvinding', '✓ vergelijk met een andere bron'], ['site van het bedrijf', 'hoe zij het product maakten', '± ze willen ook verkopen'], ['forum of sociale media', 'meningen', '✗ controleer altijd']]) +
CSF.lk.vb('<p>Zoekwoorden: <i>biomimicry bultrug windturbine</i>. Probeer ook in het Engels: <i>biomimicry humpback whale turbine</i>.</p>', 'Zoeken') +
CSF.lk.tip('Kopieer de link meteen in je bronnenlijst. Achteraf vind je een site vaak niet meer terug.')],
      ["Een e-mail aan een bedrijf", "Schrijf een duidelijk onderwerp. Begin met ‘Geachte mevrouw, geachte heer’. Stel jezelf voor en zeg dat het om een schoolproject gaat. Stel je vraag kort en duidelijk. Sluit af met ‘Met vriendelijke groeten’ en je naam en school. Laat je mail eerst nalezen door je coach.",
        CSF.lk.vb('<p><b>Onderwerp:</b> Vraag voor een schoolproject over biomimicry</p><p>Geachte mevrouw, geachte heer</p><p>Ik ben Yasmine en ik zit in het tweede jaar van Campus Lievegem. Voor een schoolproject onderzoek ik hoe uw bedrijf de natuur nabootst.</p><p>Mijn vraag: hoe kwamen jullie op het idee om de natuur na te bootsen?</p><p>Met vriendelijke groeten<br>Yasmine, 2B, Campus Lievegem</p>', 'Voorbeeldmail') +
CSF.lk.punten(['Gebruik je schoolmail.', 'Eén of twee vragen is genoeg.', 'Krijg je na een week geen antwoord? Dan werk je verder met je andere bronnen.']) +
CSF.lk.tip('Zoek op de website naar ‘contact’ of ‘pers’. Daar vind je het juiste e-mailadres.')],
      ["Een boeiende presentatie", "Vertel een verhaal: begin met een verrassende vraag of een weetje. Gebruik korte titels en veel beeld. Eén idee per dia. Toon hoe de natuur het doet en hoe de mens het nabootst. Sluit af met een samenvatting en je bronnen.",
        CSF.lk.fig('<svg viewBox="0 0 440 150" role="img" aria-label="Een volle en een goede dia"><rect x="10" y="10" width="200" height="120" fill="#fff" stroke="#1d1d1b" stroke-width="2"/><g stroke="#9fb7b8" stroke-width="4"><line x1="20" y1="30" x2="200" y2="30"/><line x1="20" y1="42" x2="195" y2="42"/><line x1="20" y1="54" x2="200" y2="54"/><line x1="20" y1="66" x2="190" y2="66"/><line x1="20" y1="78" x2="200" y2="78"/><line x1="20" y1="90" x2="185" y2="90"/><line x1="20" y1="102" x2="200" y2="102"/><line x1="20" y1="114" x2="170" y2="114"/></g><rect x="230" y="10" width="200" height="120" fill="#fff" stroke="#1d1d1b" stroke-width="2"/><text x="330" y="32" font-size="13" text-anchor="middle" font-weight="700">Natuur → techniek</text><rect x="245" y="45" width="80" height="60" fill="#cfe8c4"/><rect x="335" y="45" width="80" height="60" fill="#cdeef0"/><text x="285" y="120" font-size="10" text-anchor="middle">dier</text><text x="375" y="120" font-size="10" text-anchor="middle">uitvinding</text><text x="110" y="145" font-size="12" text-anchor="middle" fill="#b23b3b" font-weight="700">✗ alleen tekst</text><text x="330" y="145" font-size="12" text-anchor="middle" fill="#2e7d4a" font-weight="700">✓ korte titel, twee beelden</text></svg>') +
CSF.lk.stappen(['Dia 1: een verrassende vraag. “Wat heeft een walvis met windenergie te maken?”', 'Dia 2: het dier of de plant en wat er bijzonder aan is.', 'Dia 3: hoe de mens het nabootst.', 'Dia 4: waarom dat beter is.', 'Dia 5: samenvatting en bronnen.']) +
CSF.lk.tip('Zet op je dia’s alleen kernwoorden. De uitleg vertel je zelf.')]
    ],
    invalshoek: { intro: "Kies in lesuur 2 je creatieve opdracht.", keuzes: [
      ["Schaalmodel", "Bouw de uitvinding of het natuurelement na met kosteloos materiaal."],
      ["Proefje of filmpje", "Toon de werking met een eenvoudige proef of een kort filmpje."],
      ["Affiche of infographic", "Vat je onderwerp samen in één sterk beeld."]] },
    nogTijd: "Bedenk zelf een nieuwe uitvinding, geïnspireerd op een dier of plant. Teken ze en leg uit hoe ze werkt.",
    test: [
      ["Wat betekent biomimicry?", ["De natuur nabootsen", "De natuur beschermen", "Leven in de natuur"], 0, "Bios = leven, mimesis = nabootsen."],
      ["Welke plant leidde tot klittenband?", ["De klis", "De lotus", "De brandnetel"], 0, "De haakjes van de klis bleven in de vacht van een hond hangen."],
      ["Welk dier inspireerde herbruikbare plakband?", ["De gekko", "De slak", "De kikker"], 0, "Gekko’s hebben piepkleine haartjes onder hun poten."],
      ["Wat is een goede start van een presentatie?", ["Een verrassende vraag of een weetje", "Je bronnenlijst", "Een dia vol tekst"], 0, "Maak je publiek nieuwsgierig."]
    ],
    controle: [
      ["Welk vogeltje inspireerde de neus van de Japanse hogesnelheidstrein?", "tekst", ["ijsvogel", "de ijsvogel"], "Hij duikt zonder spatten in het water."],
      ["Welk zaadje lijkt op een draaiende helikopterwiek?", "tekst", ["esdoorn", "esdoornzaadje", "esdoornzaad", "het esdoornzaadje"], "Een ‘neusje’ dat ronddraait als het valt."],
      ["Welke bloem houdt water af? (het …-effect)", "tekst", ["lotus", "lotusbloem", "lotuseffect"], "Waterdruppels rollen eraf."],
      ["Welk dier zorgde voor het zwempak dat wereldrecords deed sneuvelen?", "tekst", ["haai", "de haai", "haaienhuid"], "Kijk naar zijn huid."],
      ["Welk dier bouwt het ‘dierenhotel’ met slimme ventilatie?", "tekst", ["termiet", "termieten", "de termieten"], "Een hoge heuvel in Afrika."]
    ],
    criteria: ["Logboek elk lesuur ingevuld", "Alle onderzoeksvragen beantwoord, met bronnen", "Presentatie met logische, verhalende opbouw", "Werking van natuur en uitvinding correct uitgelegd", "Creatieve opdracht sluit aan bij de presentatie", "Vlot en duidelijk gepresenteerd"],

    lessen: CSF.lessenN({
      t1: "Wat is biomimicry?",
      weet: "Noteer uitvindingen die volgens jou op de natuur lijken.",
      opdracht: "Lees de opdracht. Maak de koppeloefening met de 15 voorbeelden.",
      ideeen: "Duid de drie voorbeelden aan die jou het meest boeien.",
      start: "Werkblad 1: maak in Google Drive de map CSF met daarin de map biomimicry_jouwnaam. Deel ze met je coach.",
      midden: [
        { titel: "Kiezen en voorkennis", werk: "Werkblad 2: kies één voorbeeld. Noteer in een Google-document alles wat je er al over weet. Kies je creatieve opdracht." },
        { titel: "Informatie zoeken (1)", werk: "Werkblad 3: zoek informatie over het natuurelement. Noteer de links van je bronnen." },
        { titel: "Informatie zoeken (2)", werk: "Zoek informatie over de uitvinding, de werking en de geschiedenis. Schrijf eventueel een mail aan een bedrijf. Verzamel foto’s en filmpjes in je map." },
        { titel: "Tijdlijn van je presentatie", werk: "Werkblad 4: maak een logische tijdlijn voor je dia’s. Controleer of alle vragen beantwoord zijn." },
        { titel: "De presentatie", werk: "Maak je presentatie: korte titels, veel beeld, een logische opbouw." },
        { titel: "De creatieve opdracht", werk: "Werk je schaalmodel, proef, filmpje of affiche uit. Zorg dat het je presentatie ondersteunt." }
      ],
      laatste: { titel: "Presenteren", werk: "Werkblad 5: oefen je presentatie. Stel je onderwerp voor aan een publiek. Evalueer.", presenteer: "Presenteer je onderwerp en je creatieve werkstuk aan een publiek." }
    }),

    werkbundel: [
      { les: 1, html: `
        ${h.kader("De opdracht", "De natuur inspireert ons voortdurend. Veel uitvindingen ontstonden door goed naar de natuur te kijken. Leg <b>één voorbeeld van biomimicry</b> in detail uit. <b>Deel 1:</b> maak een presentatie. <b>Deel 2:</b> maak een creatief werkstuk: een schaalmodel, een proefje, een filmpje, een affiche of iets anders.")}
        <h2>Werkblad 1 · Welk natuurelement hoort erbij?</h2>
        <p>Zoek bij elk voorbeeld het dier of de plant. Kies uit: <b>${NATUUR.join(", ")}</b>.</p>
        <table><tr><th style="width:6%">Nr.</th><th>Voorbeeld</th><th style="width:24%">Natuurelement</th></tr>
        ${VOORBEELDEN.map(function (v, i) { return '<tr><td style="text-align:center">' + (i + 1) + "</td><td>" + v + "</td><td></td></tr>"; }).join("")}</table>` },
      { les: 1, html: `
        ${h.leerkaart("Leerkaart · Wat is biomimicry?", "<p>Biomimicry komt van het Griekse <i>bios</i> (leven) en <i>mimesis</i> (nabootsen). Mensen kijken naar slimme oplossingen in de natuur en bootsen ze na. Je kan een <b>vorm</b>, een <b>werking</b> of een heel <b>systeem</b> nabootsen.</p>")}
        <h3>Wat weet ik al? Uitvindingen die op de natuur lijken</h3>${h.lijnen(2)}
        <h3>Mijn map in Google Drive</h3>
        ${vink(["Ik maakte in Google Drive een map <b>CSF</b>.", "Ik maakte in de map CSF een map <b>biomimicry_jouwnaam</b>.", "Ik deelde die map met mijn coach."])}
        <h3>Deze drie voorbeelden boeien mij het meest</h3>
        <table><tr><th style="width:7%">Nr.</th><th>Voorbeeld</th><th style="width:44%">Waarom?</th></tr>${[1, 2, 3].map(function (n) { return '<tr><td style="text-align:center">' + n + '</td><td style="height:40px"></td><td></td></tr>'; }).join("")}</table>
        <p class="klein">Meer voorbeelden? Bekijk de Biomimicry-kaarten in de Future Classroom of de site AskNature (link bij het project).</p>
        <h3>Wat lukte vandaag? Wat nog niet?</h3>${h.lijnen(2)}` },
      { les: 2, html: `
        <h2>Werkblad 2 · Mijn keuze en mijn voorkennis</h2>
        ${fiche([["Mijn voorbeeld", 34], ["Natuurelement (plant of dier)", 34], ["Uitvinding", 34], ["Wat weet ik er al over? (ook in mijn Google-document)", 110]])}
        ${h.leerkaart("Leerkaart · Drie niveaus", "<p>Je kan een <b>vorm</b> nabootsen (de snavel van een ijsvogel), een <b>werking</b> (de haakjes van een klis) of een heel <b>systeem</b> (de luchtstroom in een termietenheuvel). Wat bootst jouw uitvinding na?</p>")}
        <p><b>Mijn uitvinding bootst na:</b> &#9744; een vorm &nbsp; &#9744; een werking &nbsp; &#9744; een systeem</p>
        <h3>Mijn creatieve opdracht</h3>
        <p>&#9744; schaalmodel &nbsp; &#9744; proefje &nbsp; &#9744; filmpje &nbsp; &#9744; affiche &nbsp; &#9744; iets anders: ______________________</p>
        ${h.lijnen(2)}` },
      { les: 3, html: `
        <h2>Werkblad 3 · Informatie zoeken</h2>
        ${h.leerkaart("Leerkaart · Goede informatie zoeken", "<p>Zoek met ‘biomimicry’ en de naam van je dier of plant. Vergelijk minstens drie bronnen. Noteer de volledige link. Bekijk ook filmpjes. Je mag een bedrijf mailen met een vraag.</p>")}
        <p>Beantwoord elke vraag kort. Noteer de uitgebreide informatie in je Google-document.</p>
        ${fiche([["Wat is biomimicry?", 40], ["Welk natuurelement inspireerde de mens?", 30], ["Achtergrond: waar leeft het? Hoe ziet het eruit?", 50], ["Wat vond de mens zo slim aan dit natuurelement?", 50], ["Wat maakte de mens ermee?", 40], ["Hoe werkt het?", 56], ["Geschiedenis: wie, wanneer, hoe evolueerde het?", 56], ["Extra weetje", 40]])}` },
      { les: 4, html: `
        <h3>Mijn bronnen</h3>
        <table><tr><th style="width:7%">Nr.</th><th>Link of titel</th><th style="width:28%">Wat vond ik er?</th></tr>${[1, 2, 3, 4, 5].map(function (n) { return '<tr><td style="text-align:center">' + n + '</td><td style="height:32px"></td><td></td></tr>'; }).join("")}</table>
        ${h.leerkaart("Leerkaart · Een e-mail aan een bedrijf", "<p>Schrijf een duidelijk onderwerp. Begin met ‘Geachte mevrouw, geachte heer’. Stel jezelf voor en zeg dat het om een schoolproject gaat. Stel je vraag kort en duidelijk. Sluit af met ‘Met vriendelijke groeten’, je naam en je school. Laat je mail eerst nalezen door je coach.</p>")}
        <h3>Mijn e-mail (klad)</h3>
        ${fiche([["Aan (bedrijf)", 28], ["Onderwerp", 28], ["Bericht", 150]])}
        <h3>Foto’s en filmpjes in mijn map</h3>${vink(["Minstens 5 foto’s met bron", "Minstens 1 filmpje of link naar een filmpje"])}` },
      { les: 5, html: `
        <h2>Werkblad 4 · De tijdlijn van mijn presentatie</h2>
        ${h.leerkaart("Leerkaart · Een boeiende presentatie", "<p>Vertel een verhaal: begin met een verrassende vraag of een weetje. Gebruik korte titels en veel beeld. Eén idee per dia. Toon hoe de natuur het doet en hoe de mens het nabootst. Sluit af met een samenvatting en je bronnen.</p>")}
        <p>Volg niet blindelings de vragen. Bedenk een logische, verhalende volgorde.</p>
        <table><tr><th style="width:8%">Dia</th><th style="width:30%">Titel</th><th>Inhoud en beeld</th></tr>${[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(function (n) { return '<tr><td style="text-align:center">' + n + '</td><td style="height:34px"></td><td></td></tr>'; }).join("")}</table>
        ${vink(["Alle onderzoeksvragen van werkblad 3 komen aan bod.", "Mijn eerste dia maakt nieuwsgierig.", "Mijn laatste dia toont mijn bronnen."])}` },
      { les: 7, html: `
        <h2>Mijn creatieve opdracht</h2>
        ${h.vak("Schets of plan van mijn werkstuk", 250)}
        ${fiche([["Materiaal (kosteloos)", 50], ["Stappen", 90], ["Hoe ondersteunt het mijn presentatie?", 60]])}
        <h3>Problemen en oplossingen</h3>
        <table><tr><th>Probleem</th><th style="width:50%">Oplossing</th></tr>${[1, 2].map(function () { return '<tr><td style="height:40px"></td><td></td></tr>'; }).join("")}</table>` },
      { les: 8, html: `
        <h2>Werkblad 5 · Presenteren en evalueren</h2>
        <h3>Oefenen</h3>${vink(["Ik oefende mijn presentatie luidop.", "Mijn presentatie duurt 5 tot 8 minuten.", "Ik kijk naar mijn publiek, niet naar mijn dia’s.", "Mijn creatieve werkstuk is klaar om te tonen."])}
        <h3>Feedback van het publiek</h3>
        <table style="text-align:center"><tr><th style="text-align:left">Hoe vond je …</th><th>☆</th><th>☆☆</th><th>☆☆☆</th><th>☆☆☆☆</th></tr>
        ${["de uitleg over de natuur en de uitvinding?", "de opbouw: logisch en boeiend?", "de dia’s: kort en beeldend?", "het creatieve werkstuk?", "de manier van presenteren?"].map(function (x) { return '<tr><td style="text-align:left">' + x + "</td><td></td><td></td><td></td><td></td></tr>"; }).join("")}</table>
        ${fiche([["Wat leerde ik bij?", 60], ["Waar ben ik trots op?", 50], ["Wat doe ik een volgende keer anders?", 50]])}` }
    ]
  });
})();
