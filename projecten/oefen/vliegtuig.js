/* Oefenproject natuurwetenschappen · Vlieg verder (2 lesuren)
   Oefent: een eerlijke proef opzetten, meten, besluiten. */
(function () {
  var h = CSF.h;
  function fiche(l) { return '<table class="fiche">' + l.map(function (v) { return '<tr><td class="lbl">' + v[0] + '</td><td style="height:' + (v[1] || 28) + 'px">' + (v[2] || "") + "</td></tr>"; }).join("") + "</table>"; }
  function meetrij(naam) { return "<tr><td><b>" + naam + '</b></td><td style="height:30px"></td><td></td><td></td><td></td></tr>'; }

  CSF.project({
    id: "oefen-vliegtuig",
    soort: "oefen",
    domein: "natuurwetenschappen",
    jaar: "1e jaar",
    tijd: "2 lesuren",
    sterren: 2,
    naam: "Vlieg verder: het perfecte papieren vliegtuig",
    kort: "Bouw een papieren vliegtuig en ontdek met een eerlijke proef welke aanpassing het verst vliegt.",
    voorWie: "Voor wie graag test, meet en wil weten waarom iets werkt.",
    omschrijving: "Iedereen heeft al eens een papieren vliegtuig gegooid. Maar wie weet echt waarom het ene verder vliegt dan het andere? ✈️ Jij gaat het onderzoeken zoals een wetenschapper: je bouwt een vliegtuig, je meet hoe ver het vliegt, en je verandert telkens maar één ding. Grotere vleugels? Een paperclip op de neus? Jouw metingen beslissen.",
    doel: "Je zet een eerlijke proef op: je verandert één ding, je houdt de rest gelijk, je meet drie keer en je trekt een besluit.",
    bereikt: ["Een onderzoeksvraag en een voorspelling opschrijven", "Een eerlijke proef opzetten", "Een gemiddelde berekenen", "Een besluit trekken uit je metingen"],
    toepassen: ["Nauwkeurig meten en alles noteren", "Je tijd verdelen over twee lesuren", "Eerlijk zijn als je voorspelling niet klopt"],
    materiaal: ["Werkbundel", "Een paar A4-blaadjes", "Een meetlint of een meterlat", "Een paperclip (mag)"],
    oplossing: "Controleer je rekenoefeningen op deze site bij ‘Controleer je oplossing’.",
    product: "Een onderzoeksfiche met meettabel en besluit, en je winnende vliegtuig",
    leerkaarten: [
      ["Een eerlijke proef", "In een eerlijke proef verander je <b>één ding</b> tegelijk. Alles wat je niet onderzoekt, hou je <b>gelijk</b>: dezelfde werper, dezelfde plek, dezelfde kracht. Je meet <b>drie keer</b> en berekent het gemiddelde. Zo weet je zeker dat het verschil komt door wat je veranderde.",
        CSF.lk.tabel(['Wat?', 'Voorbeeld'], [['Onderzoeksvraag', 'Vliegt mijn vliegtuig verder met een paperclip op de neus?'], ['Wat verander ik?', 'wel of geen paperclip'], ['Wat hou ik gelijk?', 'het vliegtuig, de werper, de plek, de kracht'], ['Wat meet ik?', 'de afstand in meter, drie keer']]) +
        CSF.lk.vb('<p>Drie worpen: 3 m, 5 m en 4 m.</p><p>Gemiddelde = (3 + 5 + 4) : 3 = 12 : 3 = <b>4 m</b>.</p>', 'Het gemiddelde') +
        CSF.lk.let('Verander je twee dingen tegelijk, bv. grotere vleugels én een paperclip? Dan weet je niet welke van de twee het verschil maakte.')],
      ["Zo vliegt een vliegtuig", "Op een vliegtuig werken vier krachten. Jouw worp geeft <b>stuwkracht</b>. De vleugels geven <b>lift</b>: ze houden het vliegtuig in de lucht. De <b>zwaartekracht</b> trekt het naar beneden. De <b>luchtweerstand</b> remt het af.",
        CSF.lk.fig('<svg viewBox="0 0 440 170" role="img" aria-label="Vier krachten op een papieren vliegtuig"><path d="M150 85 L290 85 L170 60 Z" fill="#eef9f9" stroke="#17808a" stroke-width="2"/><path d="M150 85 L290 85 L175 105 Z" fill="#cdeef0" stroke="#17808a" stroke-width="2"/><g stroke-width="4" fill="none"><path d="M220 60 L220 22" stroke="#3BC1C5"/><path d="M220 110 L220 148" stroke="#1d1d1b"/><path d="M300 85 L360 85" stroke="#FCAF17"/><path d="M140 85 L80 85" stroke="#c0392b"/></g><g font-size="13" text-anchor="middle" font-weight="700"><text x="220" y="16" fill="#17808a">lift</text><text x="220" y="164">zwaartekracht</text><text x="395" y="90" fill="#b37400">stuwkracht</text><text x="45" y="80" fill="#c0392b">lucht-</text><text x="45" y="96" fill="#c0392b">weerstand</text></g></svg>') +
        CSF.lk.punten(['<b>Brede vleugels</b> geven meer lift, maar ook meer weerstand.', '<b>Een zware neus</b> (paperclip) houdt het vliegtuig stabiel: het duikt minder en draait minder.', '<b>Scherpe vouwen</b> maken het vliegtuig stevig en recht.']) +
        CSF.lk.tip('Vouw je basismodel heel zorgvuldig. Een scheef vliegtuig vliegt elke keer anders, en dan is je proef niet eerlijk.')]
    ],
    invalshoek: { intro: "Kies in lesuur 1 wat je onderzoekt.", keuzes: [["De neus", "Wel of geen paperclip, of één tegen twee paperclips."], ["De vleugels", "Smalle of brede vleugels, of opgeplooide vleugelpunten."], ["Het papier", "Gewoon papier tegen dikker papier."]] },
    nogTijd: "Onderzoek een tweede aanpassing. Combineer daarna de twee beste aanpassingen. Vliegt je vliegtuig nu nog verder?",
    test: [
      ["Wat doe je in een eerlijke proef?", ["Je verandert één ding en houdt de rest gelijk", "Je verandert zoveel mogelijk tegelijk", "Je meet één keer"], 0, "Zo weet je wat het verschil maakte."],
      ["Welke kracht houdt het vliegtuig in de lucht?", ["Lift", "Zwaartekracht", "Luchtweerstand"], 0, "De vleugels geven lift."],
      ["Waarom meet je drie keer?", ["Eén worp kan toevallig goed of slecht zijn", "Omdat drie een mooi getal is", "Zo word je sneller moe"], 0, "Het gemiddelde is betrouwbaarder."]
    ],
    controle: [
      ["Werkblad 2, oef. 1: drie worpen van 4,2 m, 3,8 m en 4,6 m. Wat is het gemiddelde (in m)?", "getal", [4.2, 0.01], "Tel op en deel door 3."],
      ["Werkblad 2, oef. 2: Sara gooit haar vliegtuig met en zonder paperclip. Wat verandert ze?", "tekst", ["het gewicht", "gewicht", "de paperclip", "paperclip", "het gewicht van de neus"], "Wat is er anders aan het vliegtuig?"],
      ["Werkblad 2, oef. 3: hoeveel dingen verander je tegelijk in een eerlijke proef?", "getal", [1, 0], "Kijk op leerkaart 1."]
    ],
    criteria: ["Logboek elk lesuur ingevuld", "Onderzoeksvraag en voorspelling opgeschreven", "Eerlijke proef: één ding veranderd", "Drie metingen per vliegtuig en het gemiddelde juist berekend", "Besluit gebaseerd op de metingen"],
    lessen: CSF.lessen2({
      t1: "Plannen en bouwen",
      opdracht: "Lees de projectfiche. Wat ga je onderzoeken en wat is je eindproduct?",
      ideeen: "Kies wat je verandert (je invalshoek). Schrijf je onderzoeksvraag en je voorspelling in werkblad 1.",
      start: "Vouw je basismodel. Meet drie worpen en noteer ze in werkblad 1.",
      t2: "Meten en besluiten",
      werk: "Maak je aangepaste vliegtuig. Meet opnieuw drie keer. Bereken de gemiddelden en vul je besluit in.",
      presenteer: "Laat je twee vliegtuigen vliegen voor een klasgenoot. Vertel in één minuut je onderzoeksvraag, je resultaat en je besluit."
    }),
    werkbundel: [
      { les: 1, html: `
        ${h.kader("De opdracht", "Onderzoek welke aanpassing je papieren vliegtuig verder laat vliegen. Werk zoals een wetenschapper: verander één ding, meet drie keer en trek een besluit.")}
        <h2>Werkblad 1 · Mijn onderzoek</h2>
        ${fiche([["Mijn onderzoeksvraag", 44, "Vliegt mijn vliegtuig verder als …"], ["Wat verander ik?", 30], ["Wat hou ik gelijk? (minstens 3 dingen)", 44], ["Mijn voorspelling, en waarom", 44]])}
        <h3>Mijn metingen (in meter)</h3>
        <table style="text-align:center"><tr><th>Vliegtuig</th><th>Worp 1</th><th>Worp 2</th><th>Worp 3</th><th>Gemiddelde</th></tr>${meetrij("Basismodel")}${meetrij("Aangepast")}${meetrij("Extra (mag)")}</table>
        <h3>Wat lukte vandaag? Wat nog niet?</h3>${h.lijnen(2)}` },
      { les: 2, html: `
        <h2>Werkblad 2 · Rekenen en besluiten</h2>
        ${fiche([["1. Drie worpen: 4,2 m, 3,8 m en 4,6 m. Wat is het gemiddelde?", 36, "………… m"], ["2. Sara gooit haar vliegtuig met en zonder paperclip. Wat verandert ze?", 32], ["3. Hoeveel dingen verander je tegelijk in een eerlijke proef?", 28]])}
        <h3>Mijn resultaat in een staafdiagram</h3>
        <p class="klein">Teken voor elk vliegtuig een staaf met het gemiddelde.</p>
        ${h.vak("", 170)}
        ${fiche([["Mijn besluit: welk vliegtuig vloog het verst? Hoeveel meter verschil?", 44], ["Klopte mijn voorspelling?", 32], ["Wat zou ik een volgende keer anders doen?", 40]])}` }
    ]
  });
})();
