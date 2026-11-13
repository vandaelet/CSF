/* Oefenproject economie · Pitch je uitvinding in 60 seconden (2 lesuren)
   Oefent: een idee kiezen, uitwerken, kort en overtuigend presenteren. */
(function () {
  var h = CSF.h;
  function fiche(l) { return '<table class="fiche">' + l.map(function (v) { return '<tr><td class="lbl">' + v[0] + '</td><td style="height:' + (v[1] || 28) + 'px">' + (v[2] || "") + "</td></tr>"; }).join("") + "</table>"; }

  CSF.project({
    id: "oefen-pitch",
    soort: "oefen",
    domein: "economie",
    jaar: "1e jaar",
    tijd: "2 lesuren",
    sterren: 3,
    naam: "Pitch je uitvinding in 60 seconden",
    kort: "Los een probleem op school op met een eigen uitvinding. Overtuig de jury in één minuut.",
    voorWie: "Voor wie vol ideeën zit en graag anderen overtuigt.",
    omschrijving: "Een rugzak die altijd te zwaar is. Een rij aan de microgolf die nooit korter wordt. Een gsm die in de les afgaat. 💡 Op school zijn er genoeg kleine problemen. Jij bedenkt een uitvinding die er één oplost. Je maakt een schets, berekent een prijs en bereidt een pitch voor: een presentatie van precies één minuut. Kan jij de jury overtuigen om in jouw idee te investeren?",
    doel: "Je kiest een idee, werkt het uit tot een product met een prijs, en presenteert het kort en overtuigend.",
    bereikt: ["Een probleem omzetten in een oplossing", "Een kostprijs, verkoopprijs en winst berekenen", "Een pitch opbouwen in vijf delen", "Overtuigend spreken in 60 seconden"],
    toepassen: ["Uit veel ideeën het beste kiezen", "Kort en duidelijk zijn", "Je tijd bewaken"],
    materiaal: ["Werkbundel", "Een timer of de klok van je Chromebook"],
    oplossing: "Controleer de rekenoefeningen op deze site bij ‘Controleer je oplossing’.",
    product: "Een productfiche met schets en prijs, en een pitch van 60 seconden",
    leerkaarten: [
      ["Van probleem naar uitvinding", "Een goede uitvinding begint bij een <b>probleem</b> dat mensen echt hebben. Vraag je af: <b>voor wie</b> is het een probleem? Hoe lossen ze het nu op? Waarom is jouw oplossing <b>beter</b>? Reken ook: wat kost het om te maken, en voor hoeveel verkoop je het?",
        CSF.lk.stappen(['Zoek vijf problemen op school. Kies het probleem dat het meest mensen stoort.', 'Bedenk drie oplossingen. Kies de eenvoudigste die werkt.', 'Geef je uitvinding een naam en maak een schets.', 'Bereken de winst: verkoopprijs − kostprijs.']) +
        CSF.lk.vb('<p>Een sleutelhanger die piept als je je sleutels kwijt bent.</p><p>Kostprijs: € 2,00 · verkoopprijs: € 5,00 · winst per stuk: 5 − 2 = <b>€ 3,00</b>.</p><p>Hoeveel moet je er verkopen voor € 60 winst? 60 : 3 = <b>20 stuks</b>.</p>', 'Rekenvoorbeeld') +
        CSF.lk.tip('Hoe eenvoudiger je uitvinding, hoe sneller de jury ze snapt.')],
      ["Pitchen in 60 seconden", "Een pitch is een korte presentatie die moet <b>overtuigen</b>. In 60 seconden zeg je ongeveer 130 woorden. Bouw je pitch op in vijf delen en eindig met een duidelijke vraag aan de jury.",
        CSF.lk.fig('<svg viewBox="0 0 440 90" role="img" aria-label="De vijf delen van een pitch"><g font-size="12" text-anchor="middle"><rect x="2" y="20" width="82" height="50" rx="8" fill="#FCAF17"/><text x="43" y="42" font-weight="700">1. haak</text><text x="43" y="58">10 s</text><rect x="90" y="20" width="82" height="50" rx="8" fill="#3BC1C5"/><text x="131" y="42" fill="#fff" font-weight="700">2. probleem</text><text x="131" y="58" fill="#fff">10 s</text><rect x="178" y="20" width="82" height="50" rx="8" fill="#17808a"/><text x="219" y="42" fill="#fff" font-weight="700">3. oplossing</text><text x="219" y="58" fill="#fff">20 s</text><rect x="266" y="20" width="82" height="50" rx="8" fill="#3BC1C5"/><text x="307" y="42" fill="#fff" font-weight="700">4. prijs</text><text x="307" y="58" fill="#fff">10 s</text><rect x="354" y="20" width="82" height="50" rx="8" fill="#FCAF17"/><text x="395" y="42" font-weight="700">5. vraag</text><text x="395" y="58">10 s</text></g></svg>') +
        CSF.lk.punten(['<b>Haak</b>: een vraag of een verrassend feit. ‘Wie stond deze week al tien minuten aan de microgolf?’', '<b>Vraag</b>: wat wil je van de jury? ‘Investeer in mijn idee!’', 'Kijk de jury aan. Spreek rustig. Oefen met een timer.']) +
        CSF.lk.let('Over de minuut? Dan stopt de jury je. Schrap liever een zin dan sneller te praten.')]
    ],
    invalshoek: { intro: "Kies in lesuur 1 waar je probleem zich afspeelt.", keuzes: [["In de klas", "Boeken, bank, bord, de les zelf."], ["Op de speelplaats en in de refter", "Pauze, eten, spelletjes."], ["Op weg naar school", "Fiets, bus, boekentas, weer."]] },
    nogTijd: "Maak een kleine reclameaffiche voor je uitvinding: een naam, een slogan en een tekening.",
    test: [
      ["Waarmee begin je een pitch?", ["Met een haak: een vraag of verrassend feit", "Met de prijs", "Met je naam en je klas, en verder niets"], 0, "Een haak trekt meteen de aandacht."],
      ["Hoe bereken je de winst per stuk?", ["Verkoopprijs − kostprijs", "Kostprijs − verkoopprijs", "Verkoopprijs + kostprijs"], 0, "Wat je ontvangt min wat het kost."],
      ["Je pitch duurt 75 seconden. Wat doe je?", ["Een zin schrappen", "Sneller praten", "Niets, dat is goed"], 0, "Schrappen werkt beter dan sneller praten."]
    ],
    controle: [
      ["Werkblad 1, oef. 1: kostprijs € 3,50, verkoopprijs € 6,00. Hoeveel winst per stuk (in euro)?", "getal", [2.5, 0.001], "Verkoopprijs min kostprijs."],
      ["Werkblad 1, oef. 2: hoeveel stuks moet je verkopen voor € 100 winst?", "getal", [40, 0], "Deel de winst die je wil door de winst per stuk."],
      ["Werkblad 1, oef. 3: hoe heet het eerste deel van een pitch?", "tekst", ["haak", "de haak", "een haak"], "Kijk op leerkaart 2."]
    ],
    criteria: ["Logboek elk lesuur ingevuld", "Een echt probleem en een haalbare oplossing", "Prijs en winst juist berekend", "Pitch met de vijf delen", "Binnen de 60 seconden, verstaanbaar en met oogcontact"],
    lessen: CSF.lessen2({
      t1: "Probleem en uitvinding",
      opdracht: "Lees de projectfiche. Wat moet je op het einde tonen?",
      ideeen: "Noteer in werkblad 1 vijf problemen op school. Kies er één. Bedenk drie oplossingen en kies de beste.",
      start: "Maak de schets en de productfiche van je uitvinding. Los de rekenoefeningen op.",
      t2: "Mijn pitch",
      werk: "Schrijf je pitch in vijf delen in werkblad 2. Oefen hem twee keer met een timer. Schrap tot je onder de minuut blijft.",
      presenteer: "Pitch je uitvinding voor een jury van drie klasgenoten. De jury vult het juryblad in."
    }),
    werkbundel: [
      { les: 1, html: `
        ${h.kader("De opdracht", "Bedenk een uitvinding die een probleem op school oplost. Maak een productfiche met schets en prijs, en overtuig een jury in een pitch van 60 seconden.")}
        <h2>Werkblad 1 · Mijn uitvinding</h2>
        ${fiche([["Vijf problemen op school", 70, "1.<br>2.<br>3.<br>4.<br>5."], ["Mijn gekozen probleem: voor wie?", 30], ["Drie oplossingen", 54, "1.<br>2.<br>3."]])}
        <div class="twee">${h.vak("Schets van mijn uitvinding (met naam)", 170)}<div>${fiche([["Naam", 26], ["Kostprijs", 26, "€"], ["Verkoopprijs", 26, "€"], ["Winst per stuk", 26, "€"]])}</div></div>
        <h3>Rekenen</h3>
        ${fiche([["1. Kostprijs € 3,50, verkoopprijs € 6,00. Winst per stuk?", 26, "€"], ["2. Hoeveel stuks verkopen voor € 100 winst?", 26], ["3. Hoe heet het eerste deel van een pitch?", 26]])}` },
      { les: 2, html: `
        <h2>Werkblad 2 · Mijn pitch</h2>
        <table><tr><th style="width:24%">Deel</th><th>Wat zeg ik?</th></tr>
        ${[["1. Haak (10 s)", 44], ["2. Probleem (10 s)", 44], ["3. Oplossing (20 s)", 70], ["4. Prijs (10 s)", 40], ["5. Vraag (10 s)", 40]].map(function (r) { return '<tr><td><b>' + r[0] + '</b></td><td style="height:' + r[1] + 'px"></td></tr>'; }).join("")}</table>
        <p><b>Oefening 1:</b> ______ seconden &nbsp;·&nbsp; <b>Oefening 2:</b> ______ seconden</p>
        <h3>Juryblad (in te vullen door de jury)</h3>
        <table><tr><th>Criterium</th><th>😀</th><th>🙂</th><th>😐</th></tr>${["Ik snap meteen het probleem", "De uitvinding is slim en haalbaar", "De prijs is logisch", "Binnen de minuut, duidelijk gesproken"].map(function (r) { return "<tr><td>" + r + '</td><td style="width:9%"></td><td style="width:9%"></td><td style="width:9%"></td></tr>'; }).join("")}</table>
        ${fiche([["Tip van de jury", 40]])}` }
    ]
  });
})();
