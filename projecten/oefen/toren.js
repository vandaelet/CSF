/* Oefenproject techniek · Toren van tien blaadjes (2 lesuren)
   Oefent: de ontwerpcyclus: plannen, maken, testen, verbeteren. */
(function () {
  var h = CSF.h;
  function fiche(l) { return '<table class="fiche">' + l.map(function (v) { return '<tr><td class="lbl">' + v[0] + '</td><td style="height:' + (v[1] || 28) + 'px">' + (v[2] || "") + "</td></tr>"; }).join("") + "</table>"; }

  CSF.project({
    id: "oefen-toren",
    soort: "oefen",
    domein: "techniek",
    jaar: "1e jaar",
    tijd: "2 lesuren",
    sterren: 2,
    naam: "Toren van tien blaadjes",
    kort: "Bouw de hoogste toren met tien A4-blaadjes. Hij moet ook nog een gom dragen.",
    voorWie: "Voor wie graag bouwt, test en niet opgeeft als iets omvalt.",
    omschrijving: "Tien blaadjes papier, een stuk plakband en een schaar. Meer niet. 🏗️ Daarmee bouw je de hoogste toren van de klas. Maar opgelet: bovenaan moet hij een gom dragen, minstens tien seconden lang. Een plat blad zakt meteen in elkaar. Hoe maak je papier sterk? Je schetst, bouwt, test en verbetert, net zoals ingenieurs dat doen.",
    doel: "Je doorloopt de ontwerpcyclus: je plant met een schets, bouwt, test, ontdekt wat beter kan en verbetert je ontwerp.",
    bereikt: ["Papier sterk maken met buizen, vouwen en driehoeken", "Een ontwerpschets maken", "Een test eerlijk uitvoeren en noteren", "Een ontwerp verbeteren na een test"],
    toepassen: ["Plannen voor je begint", "Leren van wat misloopt", "Zuinig zijn met materiaal"],
    materiaal: ["Werkbundel", "10 A4-blaadjes, 1 meter plakband, een schaar", "Een meetlat of meetlint", "Een gom"],
    oplossing: "Controleer de oefeningen op deze site bij ‘Controleer je oplossing’.",
    product: "Een toren die een gom draagt, een ontwerpschets en een testverslag",
    leerkaarten: [
      ["Sterke vormen", "Een plat blad papier is slap. Maar <b>rol</b> je het tot een buis, of <b>vouw</b> je het tot een balk, dan wordt het veel sterker. Een <b>driehoek</b> vervormt niet als je erop duwt, een vierkant wel. En een toren met een <b>brede basis</b> valt minder snel om.",
        CSF.lk.fig('<svg viewBox="0 0 440 150" role="img" aria-label="Plat blad, buis, driehoek en vierkant"><g stroke="#1d1d1b" stroke-width="2" fill="#eef9f9"><path d="M20 110 Q60 70 100 110" fill="none"/><ellipse cx="160" cy="50" rx="18" ry="7"/><path d="M142 50 V115 M178 50 V115"/><path d="M142 115 A18 7 0 0 0 178 115"/><path d="M250 115 L290 45 L330 115 Z"/><path d="M370 55 L420 55 L428 115 L362 115 Z" fill="#fff4e0"/></g><g font-size="12" text-anchor="middle"><text x="60" y="135">plat blad: slap</text><text x="160" y="135">buis: sterk</text><text x="290" y="135">driehoek: stevig</text><text x="390" y="135" fill="#c0392b">vierkant: zakt</text></g></svg>') +
        CSF.lk.punten(['Rol een blad rond een potlood voor een stevige, dunne buis.', 'Verbind drie buizen tot een driehoek: dat geeft een stevig geraamte.', 'Maak de basis breder dan de top.']) +
        CSF.lk.tip('Test een onderdeel apart voor je verder bouwt. Draagt één buis de gom al?')],
      ["De ontwerpcyclus", "Ingenieurs bouwen niet meteen het eindproduct. Ze doorlopen een <b>cyclus</b>: ze bedenken ideeën, schetsen, bouwen een eerste versie, testen en verbeteren. Daarna begint het opnieuw. Elke ronde wordt het ontwerp beter.",
        CSF.lk.fig('<svg viewBox="0 0 440 170" role="img" aria-label="De ontwerpcyclus in vijf stappen"><g font-size="12" text-anchor="middle" font-weight="700"><circle cx="220" cy="85" r="62" fill="none" stroke="#3BC1C5" stroke-width="3" stroke-dasharray="8 6"/><rect x="180" y="4" width="80" height="28" rx="14" fill="#FCAF17"/><text x="220" y="23">1. ideeën</text><rect x="290" y="45" width="80" height="28" rx="14" fill="#3BC1C5"/><text x="330" y="64" fill="#fff">2. schetsen</text><rect x="275" y="120" width="80" height="28" rx="14" fill="#17808a"/><text x="315" y="139" fill="#fff">3. bouwen</text><rect x="85" y="120" width="80" height="28" rx="14" fill="#17808a"/><text x="125" y="139" fill="#fff">4. testen</text><rect x="62" y="45" width="96" height="28" rx="14" fill="#3BC1C5"/><text x="110" y="64" fill="#fff">5. verbeteren</text></g></svg>') +
        CSF.lk.vb('<p>Versie 1 is 60 cm, maar zakt in elkaar met de gom erop. <b>Test:</b> de bovenste buis knikt. <b>Verbetering:</b> een driehoek van drie korte buizen bovenaan. Versie 2: 55 cm en ze draagt de gom.</p>', 'Voorbeeld') +
        CSF.lk.let('Hou wat papier achter de hand voor je verbeteringen. Gebruik niet meteen alle tien de blaadjes.')]
    ],
    invalshoek: { intro: "Kies in lesuur 1 je bouwstrategie.", keuzes: [["Buizen", "Een toren uit opgerolde buizen."], ["Driehoeken", "Een geraamte van driehoeken, zoals een elektriciteitsmast."], ["Gevouwen", "Gevouwen balken en kokers, zonder rollen."]] },
    nogTijd: "Hoeveel gommen draagt je toren? Test voorzichtig. Noteer de maximale last.",
    test: [
      ["Welke vorm vervormt niet als je erop duwt?", ["Een driehoek", "Een vierkant", "Een plat blad"], 0, "Een driehoek is stevig."],
      ["Wat doe je na een test die mislukt?", ["Je zoekt wat misliep en verbetert je ontwerp", "Je begint met een heel ander project", "Je bouwt precies hetzelfde opnieuw"], 0, "Dat is de ontwerpcyclus."],
      ["Waarom maak je de basis breed?", ["Zo valt de toren minder snel om", "Zo wordt hij hoger", "Zo gebruik je minder plakband"], 0, "Een brede basis geeft stabiliteit."]
    ],
    controle: [
      ["Werkblad 2, oef. 1: welke vorm vervormt niet als je erop duwt?", "tekst", ["driehoek", "een driehoek", "de driehoek"], "Kijk op leerkaart 1."],
      ["Werkblad 2, oef. 2: hoeveel A4-blaadjes mag je gebruiken?", "getal", [10, 0], "Kijk naar de naam van het project."],
      ["Werkblad 2, oef. 3: jouw toren is 84 cm. Het record van de klas is 1,12 m. Hoeveel cm is jouw toren korter?", "getal", [28, 0], "Zet eerst alles in centimeter."]
    ],
    criteria: ["Logboek elk lesuur ingevuld", "Ontwerpschets voor het bouwen", "Toren draagt de gom minstens 10 seconden", "Minstens twee tests met een verbetering ertussen", "Testverslag ingevuld"],
    lessen: CSF.lessen2({
      t1: "Plannen en eerste versie",
      opdracht: "Lees de projectfiche. Wat zijn de regels van de uitdaging?",
      ideeen: "Kies je bouwstrategie. Maak twee schetsen in werkblad 1 en kies de beste.",
      start: "Bouw je eerste versie. Test ze met de gom en noteer het resultaat.",
      t2: "Testen en verbeteren",
      werk: "Verbeter je toren na je eerste test. Test opnieuw. Meet de hoogte en vul het testverslag in.",
      presenteer: "Zet je toren op de testtafel. Toon de gom tien seconden. Vertel in één minuut welke verbetering het verschil maakte."
    }),
    werkbundel: [
      { les: 1, html: `
        ${h.kader("De opdracht", "Bouw de hoogste toren met <b>10 A4-blaadjes</b>, <b>1 meter plakband</b> en een schaar. Bovenaan moet hij <b>minstens 10 seconden een gom</b> dragen. Plak niet vast aan de tafel.")}
        <h2>Werkblad 1 · Mijn ontwerp</h2>
        ${fiche([["Mijn bouwstrategie", 26, "buizen / driehoeken / gevouwen"], ["Hoe hoog denk ik te komen?", 26, "………… cm"]])}
        <div class="twee">${h.vak("schets 1", 210)}${h.vak("schets 2", 210)}</div>
        ${fiche([["Ik kies schets … omdat", 44]])}
        <h3>Test van versie 1</h3>
        ${fiche([["Hoogte", 26, "………… cm"], ["Draagt de gom 10 s?", 26, "ja / nee"], ["Wat ging er mis? Wat verbeter ik?", 50]])}` },
      { les: 2, html: `
        <h2>Werkblad 2 · Testverslag</h2>
        <table><tr><th>Versie</th><th>Hoogte (cm)</th><th>Gom 10 s?</th><th>Wat veranderde ik?</th></tr>${[1, 2, 3].map(function (n) { return "<tr><td><b>" + n + '</b></td><td style="height:34px"></td><td></td><td></td></tr>'; }).join("")}</table>
        ${fiche([["Welke verbetering maakte het grootste verschil?", 44], ["Wat zou ik nog veranderen met 10 extra blaadjes?", 44]])}
        <h3>Oefeningen</h3>
        ${fiche([["1. Welke vorm vervormt niet als je erop duwt?", 26], ["2. Hoeveel A4-blaadjes mag je gebruiken?", 26], ["3. Jouw toren is 84 cm, het record is 1,12 m. Hoeveel cm korter?", 26, "………… cm"]])}` }
    ]
  });
})();
