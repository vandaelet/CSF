/* digiwijs · Vince en Vinie komen tot leven
   Bron: de opdracht ‘Breng jouw eigen Vince of Vinie tot leven’ van de werkgroep, uitgewerkt tot 3 lesuren.
   Accent voor digiwijs: een AI-tool doelgericht en veilig gebruiken. */
(function () {
  var h = CSF.h;

  // Eigen tekening: goede en foute houding (stokfiguren)
  function houding(goed) {
    var c = goed ? "#2e8b57" : "#d64545", s = '<svg width="150" height="190" viewBox="0 0 150 190">';
    s += '<circle cx="75" cy="30" r="18" fill="none" stroke="#111" stroke-width="3"/><line x1="75" y1="48" x2="75" y2="115" stroke="#111" stroke-width="3"/>';
    if (goed) s += '<line x1="75" y1="62" x2="30" y2="105" stroke="#111" stroke-width="3"/><line x1="75" y1="62" x2="120" y2="105" stroke="#111" stroke-width="3"/>' +
      '<line x1="75" y1="115" x2="50" y2="175" stroke="#111" stroke-width="3"/><line x1="75" y1="115" x2="100" y2="175" stroke="#111" stroke-width="3"/>';
    else s += '<line x1="75" y1="62" x2="68" y2="112" stroke="#111" stroke-width="3"/><line x1="75" y1="62" x2="82" y2="112" stroke="#111" stroke-width="3"/>' +
      '<line x1="75" y1="115" x2="98" y2="175" stroke="#111" stroke-width="3"/><line x1="75" y1="115" x2="52" y2="175" stroke="#111" stroke-width="3"/>';
    s += '<text x="75" y="188" font-family="Arial" font-size="13" font-weight="700" text-anchor="middle" fill="' + c + '">' + (goed ? "✓ zo werkt het" : "✗ zo niet") + "</text>";
    return s + "</svg>";
  }

  CSF.project({
    id: "digiwijs-vince-en-vinie",
    soort: "vak",
    vak: "digiwijs",
    jaar: "1e en 2e jaar",
    tijd: "3 lesuren",
    sterren: 1,
    voorWie: "Voor creatieve leerlingen met de durf om een stap verder te gaan.",
    naam: "Vince en Vinie komen tot leven",
    kort: "Teken je eigen figuur. Laat hem bewegen met een AI-tool.",
    omschrijving: "Laat jij Vince of Vinie tot leven komen? 🏃 Teken een eigen jongen of meisje. Maak er een foto van. Een AI-tool laat je tekening dansen, springen en wandelen. Pas je tekening aan tot de bewegingen echt lijken. Zo leer je een nieuwe digitale tool slim en veilig gebruiken.",
    doel: "Je tekent een figuur volgens vaste regels. Je gebruikt een AI-tool om de tekening te animeren. Je verbetert je tekening op basis van het resultaat. Je denkt na over wat er met je beelden gebeurt online.",
    bereikt: ["Een figuur tekenen in vooraanzicht", "Een foto maken en bewaren als bestand", "Een AI-tool gebruiken: uploaden, gewrichten plaatsen, animeren", "Een ontwerp bijsturen na een test", "Online veilig omgaan met eigen beelden"],
    toepassen: ["Nauwkeurig werken: de tekenregels volgen", "Flexibel denken: je tekening aanpassen", "Doorzetten tot de beweging klopt", "Plannen: drie lesuren goed verdelen"],
    materiaal: ["Werkbundel", "Potlood, gom, zwarte fineliner, kleurpotloden of stiften", "Een wit A4-blad", "Een Chromebook of tablet met camera en internet"],
    oplossing: "Je animatie heeft geen vaste oplossing. Controleer je tekening met de checklist. Je coach beoordeelt je werk met het rooster.",
    product: "Een ingekleurde tekening van Vince of Vinie en drie animaties ervan (video's of schermopnames)",
    links: [["Animated Drawings (Meta AI): tekeningen animeren", "https://sketch.metademolab.com/"]],
    leerkaarten: [
      ["Tekenregels voor een animatie", "Teken de figuur in vooraanzicht. Laat de armen los van het lichaam hangen. Laat de benen uit elkaar staan. Laat ze niet kruisen. Teken een duidelijk hoofd, lichaam, armen, benen en schoenen. Teken met een dikke, zwarte lijn op wit papier."],
      ["Hoe werkt Animated Drawings?", "Je uploadt een foto van je tekening. De AI zoekt de figuur. Jij duidt de omtrek aan. Daarna plaats je de gewrichten: schouders, ellebogen, polsen, heupen, knieën en enkels. De tool verbindt je tekening met een skelet. Dat skelet volgt een bewegingsopname."],
      ["Een goede foto", "Leg je tekening plat op tafel. Fotografeer recht van boven. Zorg voor veel licht zonder schaduw. Laat geen vingers of andere voorwerpen op de foto staan."],
      ["Digiwijs: jouw beelden online", "Lees altijd wat een website met je beelden doet. Upload enkel je eigen tekening. Upload nooit een foto van jezelf of van iemand anders. Zet geen naam of adres op je tekening. Vraag je coach om hulp bij twijfel."]
    ],
    invalshoek: { intro: "Kies in lesuur 1 de stijl van je figuur.", keuzes: [
      ["Sportief", "Vince of Vinie in sportkledij, klaar om te springen."],
      ["Feestelijk", "Een outfit om te dansen op een feestje."],
      ["Op weg naar school", "Met rugzak en uurwerk, klaar voor een nieuwe schooldag."]] },
    nogTijd: "Maak een tweede figuur. Laat beide figuren in één filmpje naast elkaar bewegen met een eenvoudige videobewerker.",
    test: [
      ["Hoe hangen de armen van je figuur?", ["Los van het lichaam", "Tegen het lichaam", "Gekruist voor de buik"], 0, "De AI moet de armen apart kunnen herkennen."],
      ["Welke foto werkt het best?", ["Recht van boven, veel licht, geen schaduw", "Schuin genomen met flits", "In het donker met je hand erbij"], 0, "Een rechte, heldere foto geeft de beste herkenning."],
      ["Wat upload je zeker niet in een AI-tool?", ["Een foto van een klasgenoot", "Je eigen tekening", "Een tekening zonder naam"], 0, "Je hebt geen toestemming om iemand anders zijn foto te delen."]
    ],
    controle: [
      ["In welk aanzicht teken je je figuur?", "tekst", ["vooraanzicht", "het vooraanzicht", "van voren"], "Je kijkt recht naar de voorkant van de figuur."],
      ["Hoeveel gewrichten heeft een arm in Animated Drawings? (schouder, elleboog, pols)", "getal", [3, 0], "Tel de punten van schouder tot hand."],
      ["Mogen de benen van je figuur elkaar kruisen? (ja of nee)", "tekst", ["nee", "neen"], "Gekruiste benen verwarren de AI."]
    ],
    criteria: ["Logboek elk lesuur ingevuld", "Tekening volgt de tekenregels (vooraanzicht, armen los, benen niet gekruist)", "Figuur heeft hoofd, lichaam, armen, benen, schoenen, rugzak en uurwerk", "Tekening is verbeterd na de eerste test", "Definitieve tekening is verzorgd ingekleurd", "Drie animaties bewaard en getoond"],

    lessen: CSF.lessenN({
      t1: "Ontwerp je figuur",
      weet: "Noteer welke tekenprogramma's of animatie-apps je al kent.",
      opdracht: "Lees de opdracht. Lees de tekenregels op de leerkaart.",
      ideeen: "Bedenk 3 outfits voor je figuur. Kies de stijl die je het meest aanspreekt.",
      start: "Werkblad 1: teken je figuur in potlood. Controleer de tekenregels. Trek daarna je lijnen over met zwarte fineliner.",
      midden: [
        { titel: "Foto en eerste animatie", werk: "Werkblad 2: fotografeer je tekening. Open Animated Drawings via de link bij het project. Upload de foto. Duid de omtrek en de gewrichten aan. Test drie bewegingen. Noteer wat niet natuurlijk lijkt." }
      ],
      laatste: { titel: "Inkleuren en tot leven brengen", werk: "Werkblad 3: pas je tekening aan. Kleur ze verzorgd in. Fotografeer opnieuw en maak drie animaties. Bewaar ze als video of schermopname.", presenteer: "Toon je drie animaties aan een medeleerling. Leg uit wat je aan je tekening veranderde en waarom." }
    }),

    werkbundel: [
      { les: 1, html: `
        ${h.kader("De opdracht", "Teken je eigen <b>Vince</b> of <b>Vinie</b>. Maak er een foto van. Breng je figuur tot leven met de AI-tool <b>Animated Drawings</b>. Pas je tekening aan tot de bewegingen natuurlijk lijken. Kleur je definitieve tekening in. Laat je figuur bewegen.")}
        ${h.leerkaart("Leerkaart · Tekenregels voor een animatie", "<ul><li>Teken in <b>vooraanzicht</b>: je kijkt recht naar de voorkant.</li><li>Laat de <b>armen los</b> van het lichaam hangen.</li><li>Laat de <b>benen uit elkaar</b> staan. Kruis ze niet.</li><li>Teken een hoofd, een lichaam, armen, benen en schoenen.</li><li>Geef je figuur een <b>rugzak</b> en een <b>uurwerk</b>.</li><li>Trek de lijnen over met een dikke, zwarte lijn.</li></ul>")}
        <div class="twee" style="align-items:center;text-align:center"><div>${houding(true)}</div><div>${houding(false)}</div></div>
        <h3>Wat weet ik al? Tekenprogramma's en animatie-apps die ik ken</h3>${h.lijnen(2)}
        <h3>Drie outfits voor mijn figuur</h3>
        ${h.tabel(["Outfit", "Wat draagt mijn figuur?"], 3, 30)}` },
      { les: 1, html: `
        <h2>Werkblad 1 · Mijn ontwerp</h2>
        <p>Teken eerst in potlood. Controleer de checklist. Trek daarna de lijnen over met zwarte fineliner. Teken je definitieve versie op een wit A4-blad.</p>
        ${h.vak("Ontwerp van Vince of Vinie (vooraanzicht)", 560)}
        <table>${["Ik tekende in vooraanzicht.", "De armen hangen los van het lichaam.", "De benen kruisen elkaar niet.", "Mijn figuur heeft schoenen, een rugzak en een uurwerk.", "Ik trok de lijnen over met zwart."].map(function (x) { return '<tr><td style="width:7%;text-align:center;font-size:13pt">&#9744;</td><td>' + x + "</td></tr>"; }).join("")}</table>` },
      { les: 2, html: `
        <h2>Werkblad 2 · Foto en eerste animatie</h2>
        ${h.leerkaart("Leerkaart · Een goede foto", "<p>Leg je tekening plat op tafel. Fotografeer <b>recht van boven</b>. Zorg voor veel licht zonder schaduw. Laat geen vingers of voorwerpen op de foto staan. Bewaar de foto als bestand.</p>")}
        ${h.leerkaart("Leerkaart · Stappen in Animated Drawings", "<ol><li>Open de tool via de link bij het project.</li><li>Lees de toestemming. Upload je foto.</li><li>Sleep het kader rond je figuur.</li><li>Verbeter de omtrek: vul aan of gom uit.</li><li>Sleep de gewrichten naar de juiste plaats.</li><li>Kies een beweging en bekijk het resultaat.</li></ol>")}
        <h3>Mijn test: drie bewegingen</h3>
        <table><tr><th style="width:28%">Beweging</th><th>Wat lijkt niet natuurlijk?</th><th style="width:30%">Oorzaak in mijn tekening</th></tr>
        ${[1, 2, 3].map(function () { return '<tr><td style="height:52px"></td><td></td><td></td></tr>'; }).join("")}</table>
        <h3>Dit pas ik aan in mijn tekening</h3>${h.lijnen(3)}` },
      { les: 3, html: `
        <h2>Werkblad 3 · Tot leven brengen</h2>
        ${h.leerkaart("Leerkaart · Digiwijs: jouw beelden online", "<p>Lees altijd wat een website met je beelden doet. Upload enkel je <b>eigen tekening</b>. Upload nooit een foto van jezelf of van iemand anders. Zet geen naam of adres op je tekening.</p>")}
        <p><b>Wat doet Animated Drawings met je tekening? Lees de toestemming en noteer.</b></p>${h.lijnen(2)}
        <h3>Mijn drie animaties</h3>
        <table><tr><th style="width:8%">Nr.</th><th>Beweging</th><th style="width:34%">Bestandsnaam</th><th style="width:10%">Klaar</th></tr>
        ${[1, 2, 3].map(function (n) { return '<tr><td style="text-align:center">' + n + '</td><td style="height:34px"></td><td></td><td style="text-align:center;font-size:13pt">&#9744;</td></tr>'; }).join("")}</table>
        <h3>Wat veranderde ik aan mijn tekening? Waarom?</h3>${h.lijnen(3)}
        <p><b>Presenteren (2 min):</b> toon je drie animaties · leg je aanpassing uit · vertel wat je leerde over AI-tools.</p>` }
    ]
  });
})();
