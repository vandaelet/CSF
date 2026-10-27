/* Nederlands (met beeld) · Schimmige schaduwen
   Bron: de Bookwidget ‘SCHADUWTHEATER’ van de werkgroep, geïnspireerd op ‘Kunstelaar’ van Angela Vissers.
   Uitgewerkt tot 8 lesuren. De tekening van de scharnierfiguur is eigen materiaal. */
(function () {
  var h = CSF.h;
  function vink(lijst) { return "<table>" + lijst.map(function (x) { return '<tr><td style="width:7%;text-align:center;font-size:13pt">&#9744;</td><td>' + x + "</td></tr>"; }).join("") + "</table>"; }
  function fiche(lijst) { return '<table class="fiche">' + lijst.map(function (v) { return '<tr><td class="lbl">' + v[0] + '</td><td style="height:' + (v[1] || 30) + 'px">' + (v[2] || "") + "</td></tr>"; }).join("") + "</table>"; }
  // Eigen tekening: opstelling van een schaduwtheater (zijaanzicht)
  function opstelling() {
    return '<svg width="100%" height="170" viewBox="0 0 560 170" font-family="Arial" font-size="12">' +
      '<rect x="0" y="150" width="560" height="4" fill="#888"/>' +
      '<circle cx="60" cy="80" r="16" fill="#fcaf17"/><rect x="52" y="96" width="16" height="54" fill="#555"/><text x="60" y="168" text-anchor="middle">lamp</text>' +
      '<path d="M76 80 L340 30 M76 80 L340 130" stroke="#fcaf17" stroke-width="2" stroke-dasharray="5 4"/>' +
      '<path d="M200 60 q8 -20 16 0 l0 30 l-16 0 z" fill="#222"/><line x1="208" y1="90" x2="208" y2="150" stroke="#8a5a2b" stroke-width="3"/><text x="208" y="168" text-anchor="middle">figuur op stokje</text>' +
      '<rect x="340" y="20" width="8" height="130" fill="#eee" stroke="#555"/><text x="344" y="168" text-anchor="middle">scherm (bakpapier of wit laken)</text>' +
      '<path d="M348 50 q14 -36 30 0 l0 56 l-30 0 z" fill="#555" opacity=".55"/><text x="470" y="80" text-anchor="middle">publiek ziet</text><text x="470" y="96" text-anchor="middle">de schaduw</text>' +
      '<text x="140" y="20" fill="#e2732b">dichter bij de lamp = grotere, vagere schaduw</text></svg>';
  }
  // Eigen tekening: figuur met een beweegbare arm (splitpen)
  function scharnier() {
    return '<svg width="100%" height="190" viewBox="0 0 420 190" font-family="Arial" font-size="12">' +
      '<path d="M90 30 a18 18 0 1 1 0.1 0 M78 62 L102 62 L112 130 L68 130 Z" fill="#222"/><rect x="70" y="130" width="10" height="40" fill="#222"/><rect x="100" y="130" width="10" height="40" fill="#222"/>' +
      '<rect x="100" y="66" width="44" height="10" rx="5" fill="#555" transform="rotate(25 104 71)"/><circle cx="104" cy="71" r="4" fill="#fcaf17"/>' +
      '<line x1="132" y1="98" x2="200" y2="150" stroke="#8a5a2b" stroke-width="3"/><line x1="90" y1="170" x2="90" y2="188" stroke="#8a5a2b" stroke-width="3"/>' +
      '<text x="230" y="40">1. Teken romp en arm apart op karton.</text><text x="230" y="62">2. Prik een gaatje in schouder en arm.</text><text x="230" y="84">3. Verbind ze met een splitpen (geel).</text><text x="230" y="106">4. Plak een stokje aan de romp.</text><text x="230" y="128">5. Plak een tweede stokje aan de hand:</text><text x="244" y="146">daarmee beweeg je de arm.</text><text x="230" y="168">6. Knip oogjes uit: licht schijnt erdoor.</text></svg>';
  }

  CSF.project({
    id: "nederlands-schimmige-schaduwen",
    soort: "vak",
    vak: "Nederlands",
    jaar: "1e en 2e jaar",
    tijd: "8 lesuren",
    sterren: 5,
    naam: "Schimmige schaduwen",
    kort: "Werk je eigen schaduwtheater uit.",
    voorWie: "Voor creatieve leerlingen met een voorliefde voor toneel en theater.",
    omschrijving: "Romeo, oh Romeo! To be or not to be… Sta jij binnenkort naast grote toneelschrijvers als Shakespeare? Ontwikkel je eigen schaduwtheater. Gebruik je creativiteit voor de tekst. Ga ook praktisch aan de slag. Maak zelf schaduwfiguren. Zij spelen jouw toneelstuk als echte acteurs. 🎭",
    doel: "Je schrijft een kort toneelstuk voor een doelgroep naar keuze. Je maakt schaduwfiguren, een decor en een schaduwtheater. Je speelt je voorstelling voor publiek.",
    bereikt: ["Een verhaal opbouwen met begin, midden en slot", "Een toneeltekst schrijven met dialogen en regieaanwijzingen", "Taal afstemmen op een doelgroep", "Silhouetten ontwerpen en bewegende figuren bouwen", "Licht en schaduw doelgericht gebruiken", "Expressief voorlezen en spelen"],
    toepassen: ["Creatief denken: een eigen verhaal en eigen figuren", "Plannen: tekst, bouw en repetitie verdelen over acht lesuren", "Nauwkeurig knippen en bouwen", "Doorzetten tijdens de repetities"],
    materiaal: ["Werkbundel", "Karton of stevig papier (dozen, ontbijtgranendozen)", "Bakpapier of een wit laken als scherm", "Een zaklamp of de lamp van een gsm", "Satéstokjes of rietjes, splitpennen, plakband, schaar", "Een Chromebook met internet"],
    oplossing: "Je voorstelling heeft geen vaste oplossing. Laat je stuk testen tijdens een repetitie. Je coach beoordeelt het met het rooster.",
    product: "Een schaduwtheater met figuren en decor, een toneeltekst en een voorstelling van 3 tot 5 minuten",
    links: [["Kunstelaar: Angela Vissers", "https://www.kunstelaar.nl/angela-vissers/"], ["YouTube: ideeën via ‘DIY schaduwtheater maken’", "https://www.youtube.com/results?search_query=DIY+schaduwtheater+maken"], ["Pinterest: kant-en-klare schaduwfiguren", "https://www.pinterest.com/search/pins/?q=schaduwtheater%20figuren"]],
    leerkaarten: [
      ["Inspiratie: Kunstelaar", "Dit project is geïnspireerd op ‘Kunstelaar’ van de kunstenares Angela Vissers. Bekijk haar website voor ideeën. Je mag haar contacteren met je vragen. Schrijf een beleefd bericht: stel jezelf voor, leg uit dat het om een schoolproject gaat en stel je vraag kort en duidelijk."],
      ["Een sterk verhaal", "Een verhaal heeft een <b>begin</b>: wie, waar, wanneer. Daarna komt een <b>probleem</b>. In het <b>midden</b> proberen de personages het op te lossen. Het <b>slot</b> toont de oplossing. Hou het kort: een schaduwtheater duurt 3 tot 5 minuten."],
      ["Een toneeltekst schrijven", "Zet de naam van het personage voor elke zin die het zegt. Schrijf <b>regieaanwijzingen</b> tussen haakjes en schuin: (de draak vliegt naar links). Een <b>verteller</b> kan uitleggen wat je niet ziet. Hou de zinnen kort."],
      ["Een goed silhouet", "Het publiek ziet enkel de omtrek. Teken dus een duidelijke vorm in zijaanzicht. Overdrijf wat typisch is: een lange neus, een hoed, een staart. Knip gaatjes voor ogen of ramen: daar schijnt licht door. Gebruik een splitpen voor een arm of een kaak die beweegt."],
      ["Licht en schaduw", "Zet de lamp achter de figuren. Het scherm staat tussen de figuren en het publiek. Hou een figuur dicht bij het scherm voor een scherpe schaduw. Hou hem dichter bij de lamp voor een grote, vage schaduw. Verduister het lokaal."]
    ],
    invalshoek: { intro: "Kies in lesuur 1 je doelgroep.", keuzes: [
      ["Kinderen van de lagere school", "Een sprookje of een grappig dierenverhaal."],
      ["Klasgenoten", "Een spannend of grappig verhaal dat bij jullie past."],
      ["Leeftijdsgenoten", "Een verhaal met een twist of een boodschap."]] },
    nogTijd: "Ontwerp een affiche voor je voorstelling met de titel, het uur en een silhouet van je hoofdpersonage.",
    test: [
      ["Waar staat de lamp bij een schaduwtheater?", ["Achter de figuren", "Bij het publiek", "Boven het scherm"], 0, "Het licht valt van achter de figuren op het scherm."],
      ["Je wil een grote, vage schaduw. Wat doe je?", ["De figuur dichter bij de lamp houden", "De figuur tegen het scherm houden", "De lamp uitdoen"], 0, "Hoe dichter bij de lamp, hoe groter de schaduw."],
      ["Hoe schrijf je een regieaanwijzing?", ["Tussen haakjes en schuin", "In hoofdletters", "Onderaan de bladzijde"], 0, "Zo zie je meteen dat het niet uitgesproken wordt."],
      ["Wat ziet het publiek van een figuur?", ["Enkel de omtrek", "De kleuren", "De voorkant en de achterkant"], 0, "Een silhouet moet een duidelijke vorm hebben."]
    ],
    controle: [
      ["Hoe heet het gedeelte van een verhaal waarin het probleem opgelost wordt?", "tekst", ["slot", "het slot", "einde", "het einde"], "Begin, midden en …"],
      ["Waarmee maak je een beweegbare arm vast aan de romp?", "tekst", ["splitpen", "een splitpen", "splitpennen"], "Kijk op de leerkaart ‘Een goed silhouet’."],
      ["Hoe heet de persoon die in een toneelstuk uitlegt wat je niet ziet?", "tekst", ["verteller", "de verteller"], "Kijk op de leerkaart ‘Een toneeltekst schrijven’."]
    ],
    criteria: ["Logboek elk lesuur ingevuld", "Verhaal met begin, probleem, midden en slot", "Toneeltekst met dialogen en regieaanwijzingen, in correct Nederlands", "Taal en verhaal passen bij de doelgroep", "Figuren met duidelijke silhouetten en minstens één beweegbaar deel", "Schaduwtheater werkt: scherm, licht, decor", "Voorstelling van 3 tot 5 minuten, vlot gespeeld"],

    lessen: CSF.lessenN({
      t1: "Inspiratie en doelgroep",
      weet: "Noteer wat je al weet over toneel of schaduwtheater.",
      opdracht: "Lees de opdracht. Kies je doelgroep.",
      ideeen: "Brainstorm minstens 5 ideeën voor een verhaal.",
      start: "Werkblad 1: bekijk de website van Angela Vissers en filmpjes via ‘DIY schaduwtheater maken’. Noteer wat je wil gebruiken. Kies je idee.",
      midden: [
        { titel: "Het verhaal", werk: "Werkblad 2: werk je verhaal uit met begin, probleem, midden en slot. Kies je personages." },
        { titel: "De toneeltekst", werk: "Werkblad 3: schrijf je toneeltekst met dialogen en regieaanwijzingen. Laat een medeleerling hem nalezen." },
        { titel: "Figuren ontwerpen", werk: "Werkblad 4: ontwerp de silhouetten van je personages en je decor. Bedenk welk deel beweegt." },
        { titel: "Bouwen", werk: "Knip je figuren uit karton. Maak de scharnieren met splitpennen. Bouw je theater met een doos en bakpapier." },
        { titel: "Licht en klank", werk: "Werkblad 5: test je lamp en je scherm. Zoek de beste afstand. Bedenk geluiden of muziek." },
        { titel: "Generale repetitie", werk: "Speel je volledige voorstelling. Laat iemand kijken en feedback geven. Pas aan." }
      ],
      laatste: { titel: "Voorstelling", werk: "Speel je voorstelling voor je doelgroep. Film ze eventueel.", presenteer: "Speel je schaduwtheater voor publiek. Vertel daarna hoe je het maakte." }
    }),

    werkbundel: [
      { les: 1, html: `
        ${h.kader("De opdracht", "Maak een eigen <b>schaduwtheater</b> voor een doelgroep naar keuze. Schrijf een kort toneelstuk. Maak schaduwfiguren en een decor. Bouw een theater met een scherm en een lamp. Speel je voorstelling voor publiek.")}
        ${h.leerkaart("Leerkaart · Inspiratie: Kunstelaar", "<p>Dit project is geïnspireerd op <b>‘Kunstelaar’</b> van de kunstenares <b>Angela Vissers</b>. Bekijk haar website voor ideeën (link bij het project). Je mag haar contacteren met je vragen. Schrijf een beleefd bericht: stel jezelf voor, leg uit dat het om een schoolproject gaat en stel je vraag kort en duidelijk.</p>")}
        ${opstelling()}
        <h3>Wat weet ik al over toneel of schaduwtheater?</h3>${h.lijnen(2)}
        <h2>Werkblad 1 · Inspiratie</h2>
        <p>Bekijk de website van Angela Vissers en enkele filmpjes via ‘DIY schaduwtheater maken’. Noteer wat je wil gebruiken.</p>
        ${h.lijnen(3)}` },
      { les: 1, html: `
        <h3>Mijn brainstorm over mijn ideeën</h3>
        <table><tr><th style="width:7%">Nr.</th><th>Idee voor een verhaal</th><th style="width:28%">Personages</th></tr>${[1, 2, 3, 4, 5].map(function (n) { return '<tr><td style="text-align:center">' + n + '</td><td style="height:34px"></td><td></td></tr>'; }).join("")}</table>
        ${fiche([["Dit idee is mijn keuze", 44], ["Mijn doelgroep", 30, "kinderen lagere school / klasgenoten / leeftijdsgenoten"], ["Waarom past dit idee bij mijn doelgroep?", 60]])}
        <h3>Mijn vraag aan Angela Vissers (klad)</h3>
        <p class="klein">Stel jezelf voor. Leg uit dat het om een schoolproject gaat. Stel je vraag kort en duidelijk. Sluit beleefd af.</p>
        ${h.lijnen(5)}` },
      { les: 2, html: `
        <h2>Werkblad 2 · Mijn verhaal</h2>
        ${h.leerkaart("Leerkaart · Een sterk verhaal", "<p>Een <b>begin</b>: wie, waar, wanneer. Een <b>probleem</b>. In het <b>midden</b> proberen de personages het op te lossen. Het <b>slot</b> toont de oplossing. Hou het kort: 3 tot 5 minuten.</p>")}
        ${fiche([["Titel", 30], ["Begin: wie, waar, wanneer?", 60], ["Het probleem", 50], ["Midden: wat gebeurt er?", 80], ["Slot: hoe loopt het af?", 50]])}
        <h3>Mijn personages</h3>
        <table><tr><th style="width:26%">Naam</th><th>Hoe ziet het eruit? Wat is typisch?</th><th style="width:22%">Wat beweegt?</th></tr>${[1, 2, 3, 4].map(function () { return '<tr><td style="height:36px"></td><td></td><td></td></tr>'; }).join("")}</table>` },
      { les: 3, html: `
        <h2>Werkblad 3 · Mijn toneeltekst</h2>
        ${h.leerkaart("Leerkaart · Een toneeltekst schrijven", "<p>Zet de naam van het personage voor elke zin die het zegt. Schrijf <b>regieaanwijzingen</b> tussen haakjes en schuin: <i>(de draak vliegt naar links)</i>. Een <b>verteller</b> kan uitleggen wat je niet ziet. Hou de zinnen kort.</p>")}
        <p class="klein"><b>Voorbeeld:</b> VERTELLER: Diep in het bos woonde een kleine draak. <i>(De draak stapt op.)</i> DRAAK: Waarom wil niemand met mij spelen?</p>
        ${h.lijnen(17)}
        <p class="klein">Te weinig plaats? Schrijf verder op een los blad of in een Google-document.</p>
        ${vink(["Elke zin heeft de naam van een personage.", "Regieaanwijzingen staan tussen haakjes.", "Een medeleerling las mijn tekst na op spelling."])}` },
      { les: 4, html: `
        <h2>Werkblad 4 · Figuren en decor ontwerpen</h2>
        ${h.leerkaart("Leerkaart · Een goed silhouet", "<p>Het publiek ziet enkel de <b>omtrek</b>. Teken een duidelijke vorm in zijaanzicht. Overdrijf wat typisch is: een lange neus, een hoed, een staart. Knip gaatjes voor ogen of ramen. Gebruik een <b>splitpen</b> voor een arm of een kaak die beweegt.</p>")}
        ${scharnier()}
        <p class="klein">Tip: op Pinterest staan ook kant-en-klare figuren (link bij het project).</p>
        <table><tr><td style="width:50%;height:200px;vertical-align:top"><b>Personage 1</b></td><td style="vertical-align:top"><b>Personage 2</b></td></tr><tr><td style="height:160px;vertical-align:top"><b>Decor 1</b></td><td style="vertical-align:top"><b>Decor 2</b></td></tr></table>` },
      { les: 5, html: `
        <h2>Bouwen: mijn materiaal</h2>
        <p>Gebruik kosteloos materiaal. Vink af wat klaar is.</p>
        <table><tr><th>Onderdeel</th><th style="width:34%">Materiaal</th><th style="width:9%">Klaar</th></tr>
        ${["Theater: een doos met een venster", "Scherm: bakpapier of een wit laken", "Lamp: zaklamp of gsm-lamp", "Personage 1", "Personage 2", "Personage 3", "Decor", "Stokjes om de figuren te bewegen"].map(function (x) { return '<tr><td style="height:30px">' + x + '</td><td></td><td style="text-align:center;font-size:13pt">&#9744;</td></tr>'; }).join("")}</table>
        <h3>Problemen tijdens het bouwen en mijn oplossing</h3>
        <table><tr><th>Probleem</th><th style="width:50%">Oplossing</th></tr>${[1, 2, 3].map(function () { return '<tr><td style="height:44px"></td><td></td></tr>'; }).join("")}</table>` },
      { les: 6, html: `
        <h2>Werkblad 5 · Licht en klank</h2>
        ${h.leerkaart("Leerkaart · Licht en schaduw", "<p>Zet de lamp achter de figuren. Hou een figuur dicht bij het scherm voor een scherpe schaduw. Hou hem dichter bij de lamp voor een grote, vage schaduw. Verduister het lokaal.</p>")}
        <h3>Mijn lichtproef</h3>
        <table><tr><th>Afstand figuur – scherm</th><th>Hoe ziet de schaduw eruit?</th></tr>${["tegen het scherm", "10 cm", "30 cm", "dicht bij de lamp"].map(function (x) { return "<tr><td>" + x + '</td><td style="height:30px"></td></tr>'; }).join("")}</table>
        <h3>Geluiden en muziek</h3>
        <table><tr><th style="width:30%">Moment in het stuk</th><th>Geluid of muziek</th><th style="width:26%">Hoe maak ik het?</th></tr>${[1, 2, 3, 4].map(function () { return '<tr><td style="height:34px"></td><td></td><td></td></tr>'; }).join("")}</table>` },
      { les: 7, html: `
        <h2>Generale repetitie</h2>
        <p>Speel je volledige voorstelling. Laat een medeleerling kijken en dit invullen.</p>
        <table style="text-align:center"><tr><th style="text-align:left">Hoe vond je …</th><th>☆</th><th>☆☆</th><th>☆☆☆</th><th>☆☆☆☆</th></tr>
        ${["het verhaal?", "de schaduwen: duidelijk en scherp?", "de stemmen: verstaanbaar en expressief?", "de bewegingen van de figuren?", "de geluiden en de muziek?"].map(function (x) { return '<tr><td style="text-align:left">' + x + "</td><td></td><td></td><td></td><td></td></tr>"; }).join("")}</table>
        ${fiche([["Dit was sterk", 60], ["Dit kan beter", 60]])}
        <h3>Dit pas ik aan voor de voorstelling</h3>${h.lijnen(3)}
        <p><b>Duur van mijn voorstelling:</b> ____ minuten</p>` },
      { les: 8, html: `
        <h2>Voorstelling en terugblik</h2>
        ${fiche([["Voor wie speelde ik?", 34], ["Hoe reageerde het publiek?", 60], ["Waar ben ik het meest trots op?", 60], ["Wat was het moeilijkst? Hoe loste ik het op?", 60], ["Wat leerde ik over toneel en schaduw?", 60]])}
        <p><b>Presenteren:</b> speel je schaduwtheater voor publiek. Vertel daarna in 2 minuten hoe je het maakte.</p>` }
    ]
  });
})();
