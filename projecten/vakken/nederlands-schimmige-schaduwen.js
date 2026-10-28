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
      ["Inspiratie: Kunstelaar", "Dit project is geïnspireerd op ‘Kunstelaar’ van de kunstenares Angela Vissers. Bekijk haar website voor ideeën. Je mag haar contacteren met je vragen. Schrijf een beleefd bericht: stel jezelf voor, leg uit dat het om een schoolproject gaat en stel je vraag kort en duidelijk.",
        CSF.lk.vb('<p><b>Onderwerp:</b> Vraag over schaduwtheater voor een schoolproject</p><p>Beste mevrouw Vissers,</p><p>Ik ben Lotte, ik zit in het eerste jaar van Campus Lievegem. Voor een schoolproject maak ik een schaduwtheater. Uw website gaf me veel ideeën.</p><p>Ik heb één vraag: welk papier of karton gebruikt u voor uw figuren?</p><p>Alvast bedankt voor uw antwoord.<br>Met vriendelijke groeten<br>Lotte</p>', 'Voorbeeldbericht') +
CSF.lk.punten(['Spreek een volwassene aan met ‘u’.', 'Stel één vraag, of hoogstens twee. Hou het kort.', 'Laat je bericht nalezen door je coach voor je het verstuurt.']) +
CSF.lk.tip('Een kunstenaar krijgt veel berichten. Een kort, beleefd bericht krijgt sneller antwoord.')],
      ["Een sterk verhaal", "Een verhaal heeft een <b>begin</b>: wie, waar, wanneer. Daarna komt een <b>probleem</b>. In het <b>midden</b> proberen de personages het op te lossen. Het <b>slot</b> toont de oplossing. Hou het kort: een schaduwtheater duurt 3 tot 5 minuten.",
        CSF.lk.fig('<svg viewBox="0 0 440 140" role="img" aria-label="De vier delen van een verhaal"><g font-size="12" text-anchor="middle"><rect x="5" y="30" width="100" height="70" rx="10" fill="#3BC1C5"/><text x="55" y="58" fill="#fff" font-weight="700">begin</text><text x="55" y="78" fill="#fff">wie, waar,</text><text x="55" y="92" fill="#fff">wanneer</text><rect x="113" y="30" width="100" height="70" rx="10" fill="#d9363e"/><text x="163" y="58" fill="#fff" font-weight="700">probleem</text><text x="163" y="78" fill="#fff">er gaat iets</text><text x="163" y="92" fill="#fff">mis</text><rect x="221" y="30" width="100" height="70" rx="10" fill="#FCAF17"/><text x="271" y="58" fill="#fff" font-weight="700">midden</text><text x="271" y="78" fill="#fff">ze proberen</text><text x="271" y="92" fill="#fff">het op te lossen</text><rect x="329" y="30" width="100" height="70" rx="10" fill="#1d1d1b"/><text x="379" y="58" fill="#fff" font-weight="700">slot</text><text x="379" y="78" fill="#fff">zo loopt</text><text x="379" y="92" fill="#fff">het af</text></g><text x="220" y="125" font-size="12" text-anchor="middle" fill="#555">± 3 à 5 minuten in totaal</text></svg>') +
CSF.lk.vb('<p><b>Begin</b>: een kleine vos woont in een donker bos. <b>Probleem</b>: de maan is verdwenen. <b>Midden</b>: de vos vraagt hulp aan een uil en een vleermuis. <b>Slot</b>: samen vinden ze de maan, verstopt achter een wolk.</p>', 'Voorbeeld') +
CSF.lk.tip('Hou het aantal personages klein: 2 of 3. Elk personage is een figuur die je moet knippen en bewegen.')],
      ["Een toneeltekst schrijven", "Zet de naam van het personage voor elke zin die het zegt. Schrijf <b>regieaanwijzingen</b> tussen haakjes en schuin: (de draak vliegt naar links). Een <b>verteller</b> kan uitleggen wat je niet ziet. Hou de zinnen kort.",
        CSF.lk.vb('<p>VERTELLER: Het was een stille nacht in het bos.</p><p><i>(De vos sluipt van links naar het midden.)</i></p><p>VOS: Waar is de maan gebleven?</p><p>UIL: <i>(landt op een tak)</i> Oehoe! Ik zag haar achter de heuvel verdwijnen.</p>', 'Zo ziet een toneeltekst eruit') +
CSF.lk.punten(['Namen van personages in hoofdletters, gevolgd door een dubbelpunt.', 'Regieaanwijzingen tussen haakjes en schuin: ze worden niet uitgesproken.', 'Een verteller vertelt wat je niet kan tonen: tijd, gedachten, wat er gebeurde.']) +
CSF.lk.tip('Lees de tekst luidop met je groep. Duurt het te lang? Schrap zinnen van de verteller, niet de actie.')],
      ["Een goed silhouet", "Het publiek ziet enkel de omtrek. Teken dus een duidelijke vorm in zijaanzicht. Overdrijf wat typisch is: een lange neus, een hoed, een staart. Knip gaatjes voor ogen of ramen: daar schijnt licht door. Gebruik een splitpen voor een arm of een kaak die beweegt.",
        CSF.lk.fig('<svg viewBox="0 0 420 160" role="img" aria-label="Een goed en een minder goed silhouet"><g fill="#1d1d1b"><path d="M40 120 L50 80 Q55 60 80 60 L140 60 Q150 40 160 45 L165 30 L172 45 L180 35 L182 55 Q195 60 190 72 L175 75 Q165 90 160 120 L150 120 L148 95 L80 95 L72 120 L62 120 L64 100 L52 120 Z"/><path d="M50 80 Q20 70 25 45 Q30 60 52 70Z"/><ellipse cx="300" cy="80" rx="50" ry="45"/></g><circle cx="175" cy="55" r="3" fill="#fff"/><text x="110" y="148" font-size="13" text-anchor="middle" fill="#2e7d4a" font-weight="700">✓ zijaanzicht: je herkent het dier</text><text x="300" y="148" font-size="13" text-anchor="middle" fill="#b23b3b" font-weight="700">✗ vooraanzicht: een vlek</text></svg>', 'Het publiek ziet alleen de omtrek. Van opzij zie je het meest.') +
CSF.lk.stappen(['Teken je figuur van opzij op stevig karton.', 'Overdrijf wat typisch is: oren, staart, neus, hoed.', 'Knip uit. Prik met een prikpen gaatjes voor het oog.', 'Moet een deel bewegen? Knip het apart en maak het vast met een splitpen.', 'Plak een satéstokje aan de achterkant om de figuur vast te houden.']) +
CSF.lk.tip('Hou je figuur even tegen het licht voor je verder gaat. Herken je het meteen? Dan is het een goed silhouet.')],
      ["Licht en schaduw", "Zet de lamp achter de figuren. Het scherm staat tussen de figuren en het publiek. Hou een figuur dicht bij het scherm voor een scherpe schaduw. Hou hem dichter bij de lamp voor een grote, vage schaduw. Verduister het lokaal.",
        CSF.lk.fig('<svg viewBox="0 0 440 170" role="img" aria-label="Lamp, figuur, scherm en publiek"><g><circle cx="40" cy="80" r="16" fill="#FCAF17"/><path d="M52 66 L80 52 M52 94 L80 108" stroke="#FCAF17" stroke-width="3"/><rect x="250" y="20" width="8" height="120" fill="#eee" stroke="#1d1d1b"/><path d="M200 70 l12 -14 l10 14 z" fill="#1d1d1b"/><path d="M110 80 l18 -22 l16 22 z" fill="#1d1d1b"/><path d="M258 40 l34 -0" stroke="none"/><g fill="#555"><circle cx="350" cy="70" r="10"/><rect x="340" y="82" width="20" height="30" rx="6"/><circle cx="395" cy="70" r="10"/><rect x="385" y="82" width="20" height="30" rx="6"/></g></g><g font-size="12" text-anchor="middle"><text x="40" y="125">lamp</text><text x="211" y="95">dicht bij scherm</text><text x="211" y="109">= scherp, klein</text><text x="127" y="95">dicht bij lamp</text><text x="127" y="109">= groot, vaag</text><text x="254" y="158">scherm</text><text x="373" y="135">publiek</text></g></svg>', 'De lamp schijnt door het scherm. Het publiek ziet de schaduw aan de andere kant.') +
CSF.lk.punten(['Een wit laken of bakpapier in een kader is een goed scherm.', 'Eén sterke lamp werkt beter dan veel zwakke lampen.', 'Wil je een reus laten groeien? Beweeg de figuur langzaam van het scherm naar de lamp.']) +
CSF.lk.tip('Gekleurd transparant papier in een gat van je figuur geeft gekleurde vlekjes op het scherm.')]
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
