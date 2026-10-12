/* vakoverschrijdend · Maak een escaperoom
   Bron: de Bookwidgets ‘Escape Room’ en ‘Escape1’ tot ‘Escape5’ van de werkgroep, herwerkt tot een project van 8 lesuren.
   Benodigd: de Chrono Decoder met 16 sleutels (Escape Room The Game) in het CSF-lokaal. */
(function () {
  var h = CSF.h;

  /* SLEUTELS PER RONDE: vul hier de 4 sleutels van elke ronde in, van links naar rechts.
     Een onbekende sleutel = null. Die verschijnt in de werkbundel als een leeg vakje. */
  var SLEUTELS = [[6, 2, 5, 1], [5, 2, 1, 6], [5, 1, 5, 6]];

  // Tekening: de vier sleutelgaten van de decoder, van links naar rechts
  function gleuven() {
    var s = '<svg viewBox="0 0 300 70" width="300" height="70" style="max-width:100%">';
    for (var i = 0; i < 4; i++) {
      var x = 18 + i * 70;
      s += '<rect x="' + x + '" y="8" width="54" height="40" rx="6" fill="#fff" stroke="#111" stroke-width="2"/>' +
        '<rect x="' + (x + 22) + '" y="16" width="10" height="24" rx="2" fill="#17808a"/>' +
        '<text x="' + (x + 27) + '" y="64" font-size="12" font-family="Arial" text-anchor="middle">' + (i + 1) + "</text>";
    }
    return s + '<path d="M 18 4 L 280 4" stroke="#f9b000" stroke-width="2" marker-end="url(#pijl)"/><defs><marker id="pijl" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#f9b000"/></marker></defs></svg>';
  }
  function ronde(n) {
    var sl = SLEUTELS[n - 1] || [];
    var rij = function (k) {
      var v = sl[k] == null ? "" : "<b>" + sl[k] + "</b>";
      return '<tr><td style="text-align:center">' + (k + 1) + '</td><td style="height:44px"></td><td></td><td></td><td style="text-align:center;font-size:13pt">' + v + "</td></tr>";
    };
    return "<h3>Ronde " + n + "</h3>" +
      '<table><tr><th style="width:6%">Plaats</th><th style="width:12%">Vraag nr.</th><th>Antwoord</th><th style="width:34%">Zo leidt het antwoord naar de sleutel</th><th style="width:11%">Sleutel</th></tr>' +
      [0, 1, 2, 3].map(rij).join("") + "</table>";
  }
  // Varkenshokcode: vier roosters met letters. Elke letter = de vorm van zijn hokje (met of zonder stip).
  function varkenshok() {
    var L = "ABCDEFGHIJKLMNOPQRSTUVWXYZ", s = '<svg viewBox="0 0 420 110" width="420" height="110" style="max-width:100%" font-family="Arial" font-size="13" text-anchor="middle">';
    [0, 1].forEach(function (g) {
      var x0 = 10 + g * 115;
      s += '<path d="M' + (x0 + 30) + ' 10 V100 M' + (x0 + 60) + ' 10 V100 M' + x0 + ' 40 H' + (x0 + 90) + ' M' + x0 + ' 70 H' + (x0 + 90) + '" stroke="#111" stroke-width="2" fill="none"/>';
      for (var i = 0; i < 9; i++) {
        var cx = x0 + 15 + (i % 3) * 30, cy = 30 + Math.floor(i / 3) * 30;
        s += '<text x="' + cx + '" y="' + cy + '">' + L[g * 9 + i] + "</text>" + (g ? '<circle cx="' + (cx + 9) + '" cy="' + (cy - 12) + '" r="2.2" fill="#17808a"/>' : "");
      }
    });
    [0, 1].forEach(function (g) {
      var x0 = 250 + g * 90, c = x0 + 40;
      s += '<path d="M' + (c - 35) + ' 20 L' + (c + 35) + ' 90 M' + (c + 35) + ' 20 L' + (c - 35) + ' 90" stroke="#111" stroke-width="2"/>';
      [[c, 30], [c - 22, 59], [c + 22, 59], [c, 88]].forEach(function (p, i) {
        s += '<text x="' + p[0] + '" y="' + p[1] + '">' + L[18 + g * 4 + i] + "</text>" + (g ? '<circle cx="' + (p[0] + 9) + '" cy="' + (p[1] - 12) + '" r="2.2" fill="#17808a"/>' : "");
      });
    });
    return s + "</svg>";
  }
  var MORSE = "A·– B–··· C–·–· D–·· E· F··–· G––· H···· I·· J·––– K–·– L·–·· M–– N–· O––– P·––· Q––·– R·–· S··· T– U··– V···– W·–– X–··– Y–·–– Z––··".split(" ");

  function databank(van, tot) {
    var s = '<table><tr><th style="width:7%">Nr.</th><th>Vraag</th><th style="width:26%">Antwoord</th><th style="width:16%">Leerstof</th></tr>';
    for (var i = van; i <= tot; i++) s += '<tr><td style="text-align:center">' + i + '</td><td style="height:34px"></td><td></td><td></td></tr>';
    return s + "</table>";
  }

  CSF.project({
    id: "vakoverschrijdend-escaperoom",
    soort: "vak",
    vak: "vakoverschrijdend",
    jaar: "1e en 2e jaar",
    tijd: "8 lesuren",
    sterren: 4,
    voorWie: "Voor creatieve leerlingen met een voorliefde voor escaperooms en raadsels.",
    naam: "Maak een escaperoom: ontsnap binnen het uur",
    kort: "Bouw van A tot Z je eigen escaperoom.",
    omschrijving: "Hou je van escaperooms? Droom je ervan om er zelf een te bouwen? Kies een vak en een doelgroep. Verzin vragen en raadsels over de leerstof. Koppel elk antwoord aan een sleutel van de decoder. Schrijf een spannend verhaal. Kleed het lokaal aan in jouw thema. Test je escaperoom tot alles klopt.",
    doel: "Je leert leerstof omzetten in raadsels. Je ontwerpt een spel met een duidelijke opbouw. Je test en verbetert je eigen ontwerp.",
    bereikt: ["Leerstof van een vak omzetten in vragen en raadsels", "Een spel logisch opbouwen in drie rondes", "Een spannend verhaal schrijven met inleiding, midden en slot", "Een ontwerp uittesten en bijsturen"],
    toepassen: ["Plannen en organiseren: acht lesuren, drie rondes, twaalf raadsels", "Flexibel denken: elk antwoord naar de juiste sleutel leiden", "Nauwkeurig werken: elke stap controleren", "Zelfkritisch kijken bij het uittesten"],
    materiaal: ["Werkbundel", "De Chrono Decoder met 16 sleutels (in het CSF-lokaal)", "Een toestel met internet", "Kosteloos knutselmateriaal: papier, karton, schaar, lijm, stiften"],
    oplossing: "Je escaperoom heeft geen vaste oplossing. Test je escaperoom zelf uit. Je coach beoordeelt hem met het rooster.",
    product: "Een speelklare escaperoom van 60 minuten: 12 raadsels in 3 rondes, een inleidend verhaal en een aangekleed lokaal",
    links: [["Voorbeeld van een zelfgemaakte escaperoom", "https://www.unicornsandfairytales.be/escape-room-voor-kinderen-maken-tips-eerste-schooldag/"]],
    leerkaarten: [
      ["De decoder", "De decoder telt af vanaf 60 minuten. Het spel heeft 3 rondes. Elke ronde heeft een code van 4 sleutels. Steek de sleutels van links naar rechts in de decoder. Een foute code kost 1 minuut. Kraak eerst de code van een ronde. Start daarna met de volgende ronde. Na 3 juiste codes stopt de tijd."],
      ["Van leerstof naar raadsel", "Een goede vraag is oplosbaar voor je doelgroep. Het antwoord staat soms ook verstopt in het lokaal. Maak van het antwoord een sleutel. Gebruik daarvoor een rekensom, een kleur, een vorm of een geheimschrift."],
      ["Geheimschrift", "Caesarcode: schuif elke letter een vast aantal plaatsen op. Met 3 plaatsen wordt A een D. Varkenshokcode: teken voor elke letter de vorm van zijn hokje. Morse: schrijf elke letter met punten en strepen. Telefooncode: schrijf de toets van elke letter op een gsm. Spiegelschrift: lees de tekst met een spiegel."],
      ["Ideeën voor raadsels", "Verstop een woord in de eerste letters van de zinnen van een brief. Knip een tekening met een code in puzzelstukken. Zet letters in een rooster en geef coördinaten zoals B3. Laat de uitkomst van een som het sleutelnummer zijn. Teken een doolhof met maar één juiste uitgang."],
      ["Van antwoord naar sleutel", "Op elke sleutel staan verschillende symbolen: een getal, een Romeins cijfer, stipjes, een letter of een vorm. Kies per raadsel één soort symbool. Laat het antwoord naar dat symbool wijzen."],
      ["Een cryptex", "Een cryptex is een koker met draaibare letterringen. Alleen het juiste woord opent de koker. Maak er zelf een uit een kartonnen rol en ringen van papier."],
      ["Een spannend verhaal", "Begin met een inleiding: de plaats en de spelers. Vertel in het midden het probleem. Eindig met een dreiging: na 60 minuten gebeurt er iets ergs. Een geloofwaardig verhaal trekt de spelers mee."]
    ],
    invalshoek: { intro: "Kies in lesuur 1 je doelgroep.", keuzes: [
      ["Lagere school", "Eenvoudige raadsels, veel beeld en kleur."],
      ["Eerste graad", "Leerstof uit het 1e of 2e jaar, iets moeilijker."],
      ["Volwassenen", "Ouders of leerkrachten: verras hen met moeilijke weetjes."]] },
    nogTijd: "Neem een filmpje op als inleiding. Spreek je spelers toe voor een aangeklede achtergrond. Maak het heel geloofwaardig.",
    test: [
      ["Hoeveel sleutels telt één code?", ["4", "3", "16"], 0, "Elke code bestaat uit 4 sleutels. Steek ze van links naar rechts in de decoder."],
      ["Wat gebeurt er bij een foute code?", ["Je verliest 1 minuut", "Het spel stopt", "Er gebeurt niets"], 0, "Een foute code kost 1 minuut op de decoder."],
      ["Hoeveel rondes telt een spel?", ["3", "4", "12"], 0, "Na 3 juiste codes stopt de tijd."]
    ],
    controle: [
      ["Hoeveel oplossingen bevat een volledige escaperoom?", "getal", [12, 0], "Reken: 3 rondes × 4 oplossingen."],
      ["De spelers geven 3 foute codes in. Hoeveel minuten verliezen ze?", "getal", [3, 0], "Een foute code kost 1 minuut."],
      ["Versleutel het woord SLOT met de Caesarcode (3 plaatsen).", "tekst", ["vorw"], "Schuif elke letter 3 plaatsen op: S wordt V."]
    ],
    criteria: ["Logboek elk lesuur ingevuld", "Vragendatabank van ongeveer 20 vragen met antwoord", "12 raadsels met een juiste link naar de sleutels", "Verhaal met inleiding, midden en slot", "Lokaal kosteloos en passend aangekleed", "Escaperoom uitgetest en bijgestuurd"],

    lessen: CSF.lessenN({
      t1: "Opstart: thema en voorkennis",
      weet: "Noteer je ervaring met escaperooms. Noteer je voorkennis over je gekozen vak.",
      opdracht: "Lees de spelregels van de decoder. Noteer de onderdelen van je eindproduct.",
      ideeen: "Bedenk minstens 3 mogelijke vakken of thema’s. Kies je doelgroep, je vak en je leerstof.",
      start: "Werkblad 1: vul je doelgroep, je vak, je leerstof en je voorkennis in.",
      midden: [
        { titel: "De vragendatabank", werk: "Werkblad 2: schrijf ongeveer 20 vragen met hun antwoord. Nummer elke vraag. Laat alle leerstofonderdelen aan bod komen." },
        { titel: "Opbouw en ideeën", werk: "Lees de ideeënbank in je werkbundel. Bekijk het voorbeeld bij het project. Werkblad 3: noteer je beste ideeën voor raadsels en verstopplaatsen. Kies per ronde een sfeer." },
        { titel: "Schematische uitwerking", werk: "Werkblad 4: kies 12 vragen uit je databank. Koppel elk antwoord aan de juiste sleutel. Schrijf het volledige stappenplan van het spel. Markeer de nodige attributen." },
        { titel: "Het verhaal", werk: "Werkblad 5: schrijf je inleidend verhaal met inleiding, midden en slot. Maak het spannend en geloofwaardig." },
        { titel: "Aankleding en attributen", werk: "Werkblad 6: plan de aankleding van het lokaal. Knutsel je attributen met kosteloos materiaal. Vink elk attribuut af." },
        { titel: "Uittesten en bijsturen", werk: "Werkblad 7: speel je escaperoom met een leerkracht of een ouder. Noteer elke fout. Pas je raadsels en je stappenplan aan." }
      ],
      laatste: { titel: "Spelen en evalueren", werk: "Werkblad 8: laat je doelgroep of enkele medeleerlingen spelen. Noteer de resterende tijd en de struikelblokken.", presenteer: "Vertel je coach in 2 minuten over je escaperoom en de reactie van je spelers." }
    }),

    werkbundel: [
      { les: 1, html: `
        ${h.kader("De opdracht", "Bouw een <b>escaperoom van 60 minuten</b> voor een doelgroep naar keuze. De spelers lossen <b>3 rondes</b> op. Elke ronde heeft <b>4 raadsels</b>. Elk antwoord wijst naar één sleutel van de decoder. Kies zelf het vak en de leerstof. Schrijf er een spannend verhaal bij. Kleed het lokaal aan in jouw thema.")}
        ${h.leerkaart("Leerkaart · De decoder", '<div class="twee"><div><p>De decoder telt af vanaf <b>60 minuten</b>. Elke ronde heeft een code van <b>4 sleutels</b>. Steek ze van links naar rechts in de decoder. Een foute code kost <b>1 minuut</b>. Na 3 juiste codes stopt de tijd.</p></div><div style="text-align:center">' + gleuven() + '<br><span class="klein">sleutelgat 1 tot 4, van links naar rechts</span></div></div>')}
        <h2>Werkblad 1 · Thema en voorkennis</h2>
        <table class="fiche"><tr><td class="lbl">Mijn doelgroep<br><span class="klein">leeftijd · school · klas</span></td><td style="height:40px"></td></tr>
        <tr><td class="lbl">Mijn vak</td><td style="height:30px"></td></tr>
        <tr><td class="lbl">Mijn leerstofonderdelen</td><td style="height:70px"></td></tr>
        <tr><td class="lbl">Mijn voorkennis over dit thema</td><td style="height:80px"></td></tr>
        <tr><td class="lbl">Belangrijke termen</td><td style="height:50px"></td></tr></table>
        <p class="klein"><b>Tip:</b> vul dit blad aan tijdens het hele project.</p>` },
      { les: 2, html: `
        <h2>Werkblad 2 · Vragendatabank (1)</h2>
        <p>Schrijf ongeveer 20 vragen. Noteer bij elke vraag het antwoord. Kies vragen op het niveau van je doelgroep. Een antwoord mag ook in het lokaal verstopt zitten.</p>
        ${databank(1, 11)}` },
      { les: 2, html: `
        <h2>Werkblad 2 · Vragendatabank (2)</h2>
        ${databank(12, 22)}
        <p><b>Welke leerstofonderdelen ontbreken nog?</b></p>${h.lijnen(1)}
        <h3>Wat lukte vandaag? Wat nog niet?</h3>${h.lijnen(2)}` },
      { les: 3, html: `
        <h2>Ideeënbank · geheimschrift</h2>
        ${h.leerkaart("Caesarcode", "<p>Schuif elke letter een vast aantal plaatsen op in het alfabet. Met 3 plaatsen wordt A een D en Z een C. Geef de spelers het aantal plaatsen als hint.</p>")}
        ${h.leerkaart("Varkenshokcode", '<p>Teken voor elke letter de lijnen rond zijn hokje. Teken in het tweede rooster en het tweede kruis ook de stip. Voorbeeld: A is een hoekje zoals ⌟.</p><div style="text-align:center">' + varkenshok() + "</div>")}
        ${h.leerkaart("Morse", '<p>Schrijf elke letter met punten en strepen. Laat een spatie tussen de letters.</p><p class="mono" style="columns:4;font-size:10.5pt;line-height:1.5">' + MORSE.map(function (m) { return "<b>" + m[0] + "</b> " + m.slice(1); }).join("<br>") + "</p>")}
        <div class="twee">${h.leerkaart("Telefooncode", "<p>Schrijf voor elke letter de toets van een gsm: 2 = ABC · 3 = DEF · 4 = GHI · 5 = JKL · 6 = MNO · 7 = PQRS · 8 = TUV · 9 = WXYZ. Herhaal de toets voor de plaats van de letter: C = 222.</p>")}
        ${h.leerkaart("Spiegelschrift en cijfercode", "<p>Schrijf een tekst in spiegelschrift. Lees hem met een spiegel of een gsm-camera. Of vervang elke letter door haar plaats in het alfabet: A = 1, B = 2, C = 3.</p>")}</div>` },
      { les: 3, html: `
        <h2>Ideeënbank · raadsels</h2>
        <div class="twee">${h.leerkaart("Verstopt woord", "<p>Schrijf een brief. Laat de eerste letters van de zinnen samen een woord vormen.</p>")}
        ${h.leerkaart("Puzzelstukken", "<p>Teken een code op een blad. Knip het blad in stukken. Verstop de stukken in het lokaal.</p>")}
        ${h.leerkaart("Rooster", "<p>Zet letters in een rooster met kolommen A tot E en rijen 1 tot 5. Geef de spelers coördinaten zoals B3.</p>")}
        ${h.leerkaart("Een cryptex", "<p>Een cryptex is een koker met draaibare letterringen. Alleen het juiste woord opent de koker. Maak er zelf een uit een kartonnen rol en ringen van papier.</p>")}</div>
        ${h.leerkaart("Van antwoord naar sleutel", "<p>Op elke sleutel staan verschillende symbolen: een getal, een Romeins cijfer, stipjes, een letter of een vorm. Kies per raadsel één soort symbool. Laat het antwoord naar dat symbool wijzen. Voorbeeld: de uitkomst 6 wijst naar de sleutel met VI.</p>")}
        <h2>Werkblad 3 · Mijn ideeën</h2>
        ${h.tabel(["Soort raadsel", "Mijn idee", "Verstopplaats in het lokaal"], 5, 30)}
        <table><tr><th style="width:18%">Ronde</th><th>Sfeer of plaats in het verhaal</th></tr>
        <tr><td><b>Ronde 1</b></td><td style="height:34px"></td></tr><tr><td><b>Ronde 2</b></td><td style="height:34px"></td></tr><tr><td><b>Ronde 3</b></td><td style="height:34px"></td></tr></table>
        <h3>Wat lukte vandaag? Wat leerde ik?</h3>${h.lijnen(2)}` },
      { les: 4, html: `
        <h2>Werkblad 4 · Schematische uitwerking</h2>
        <p>Kies 12 vragen uit je databank. Zet ze in de juiste ronde. Koppel elk antwoord aan de sleutel in de laatste kolom.</p>
        ${ronde(1)}${ronde(2)}` },
      { les: 4, html: `
        ${ronde(3)}
        <h2>Het stappenplan van het spel</h2>
        <p>Noteer elke stap van de spelers. Controleer elke stap grondig. <b>Markeer</b> elk attribuut met een markeerstift.</p>
        <table><tr><th style="width:7%">Stap</th><th>Wat doen de spelers?</th><th style="width:30%">Nodige attributen</th></tr>
        ${[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(function (n) { return '<tr><td style="text-align:center">' + n + '</td><td style="height:30px"></td><td></td></tr>'; }).join("")}</table>` },
      { les: 5, html: `
        <h2>Werkblad 5 · Mijn inleidend verhaal</h2>
        <p>Giet je raadsels in een meeslepend verhaal. Kies een verhaal bij je thema. Zorg voor een spannende opbouw. Overtuig de spelers: alleen alle raadsels samen redden hen.</p>
        ${h.vak("Inleiding · de plaats en de spelers", 170)}
        ${h.vak("Midden · het probleem en de gevaren", 230)}
        ${h.vak("Slot · de dreiging na 60 minuten", 170)}
        <h3>Wat lukte vandaag? Wat nog niet?</h3>${h.lijnen(2)}` },
      { les: 6, html: `
        <h2>Werkblad 6 · Aankleding en attributen</h2>
        <p>Kleed het lokaal aan bij je verhaal. Wees creatief. Hou het haalbaar en kosteloos.</p>
        <table><tr><th>Wat?</th><th style="width:28%">Kosteloos materiaal</th><th style="width:22%">Plaats in het lokaal</th><th style="width:9%">Klaar</th></tr>
        ${[1, 2, 3, 4, 5, 6, 7, 8].map(function () { return '<tr><td style="height:30px"></td><td></td><td></td><td style="text-align:center;font-size:13pt">&#9744;</td></tr>'; }).join("")}</table>
        ${h.vak("Schets van het lokaal: decoder, verstopplaatsen en aankleding", 300)}` },
      { les: 7, html: `
        <h2>Werkblad 7 · Uittestfase</h2>
        <p>Speel je escaperoom samen met een leerkracht of een ouder. Noteer elk probleem. Pas je raadsels en je stappenplan aan. Herhaal deze stap tot alles klopt.</p>
        <p><b>Mijn testspeler:</b> ______________________ &nbsp; <b>Resterende tijd:</b> ______ minuten</p>
        <table><tr><th style="width:12%">Ronde</th><th>Wat liep mis?</th><th style="width:38%">Mijn aanpassing</th></tr>
        ${[1, 2, 3].map(function (n) { return "<tr><td><b>Ronde " + n + '</b></td><td style="height:70px"></td><td></td></tr>'; }).join("")}</table>
        <p><b>Welk raadsel was te makkelijk of te moeilijk?</b></p>${h.lijnen(2)}
        <h3>Wat lukte vandaag? Wat leerde ik?</h3>${h.lijnen(2)}` },
      { les: 8, html: `
        <h2>Werkblad 8 · De speeldag</h2>
        <p>Laat je doelgroep of enkele medeleerlingen spelen. Kijk toe zonder te helpen. Noteer je waarnemingen.</p>
        <table class="fiche"><tr><td class="lbl">Mijn spelers</td><td style="height:30px"></td></tr>
        <tr><td class="lbl">Ontsnapt? Resterende tijd</td><td style="height:30px"></td></tr>
        <tr><td class="lbl">Grootste struikelblok</td><td style="height:60px"></td></tr>
        <tr><td class="lbl">Reactie van de spelers</td><td style="height:60px"></td></tr>
        <tr><td class="lbl">Dit verander ik nog</td><td style="height:60px"></td></tr></table>
        <p><b>Presenteren (2 min):</b> je thema en je doelgroep · je beste raadsel · de reactie van je spelers.</p>` }
    ]
  });
})();
