/* Oefenproject vakoverschrijdend · Tijdcapsule voor 2050 (2 lesuren)
   Oefent: keuzes maken en verantwoorden, reflecteren. */
(function () {
  var h = CSF.h;
  function fiche(l) { return '<table class="fiche">' + l.map(function (v) { return '<tr><td class="lbl">' + v[0] + '</td><td style="height:' + (v[1] || 28) + 'px">' + (v[2] || "") + "</td></tr>"; }).join("") + "</table>"; }

  CSF.project({
    id: "oefen-tijdcapsule",
    soort: "oefen",
    domein: "vakoverschrijdend",
    jaar: "1e jaar",
    tijd: "2 lesuren",
    sterren: 2,
    naam: "Tijdcapsule voor 2050",
    kort: "Kies vijf voorwerpen die tonen hoe jongeren nu leven. Schrijf een brief aan jezelf in 2050.",
    voorWie: "Voor wie nadenkt over de toekomst en graag schrijft.",
    omschrijving: "Stel je voor: in 2050 graaft iemand een doos op met spullen van nu. ⏳ Wat moet erin zitten, zodat die persoon begrijpt hoe jongeren in 2026 leefden? Je mag maar vijf voorwerpen kiezen, dus elke keuze telt. Daarna schrijf je een brief aan jezelf: hoe ziet jouw leven er over 24 jaar uit? Wat hoop je, wat voorspel je?",
    doel: "Je maakt keuzes en verantwoordt ze, en je kijkt na over jezelf, je tijd en de toekomst.",
    bereikt: ["Uitleggen wat een voorwerp vertelt over een tijd", "Keuzes maken uit veel mogelijkheden en ze verantwoorden", "Een persoonlijke brief schrijven met een duidelijke opbouw"],
    toepassen: ["Kiezen en schrappen", "Eerlijk nadenken over jezelf", "Je keuzes uitleggen aan anderen"],
    materiaal: ["Werkbundel", "Een envelop (mag): je brief gaat dicht tot het einde van het schooljaar"],
    oplossing: "Controleer de oefeningen op deze site bij ‘Controleer je oplossing’. Je keuzes en je brief hebben geen vaste oplossing.",
    product: "Een inhoudslijst van je tijdcapsule met uitleg, en een brief aan jezelf in 2050",
    leerkaarten: [
      ["Wat zegt een voorwerp?", "Historici leren veel uit <b>voorwerpen</b>. Een voorwerp uit het verleden is een <b>bron</b>: het vertelt hoe mensen leefden, wat ze belangrijk vonden en wat ze konden. Een goed voorwerp voor je tijdcapsule is <b>typisch voor nu</b> en <b>zegt iets</b> wat je niet meteen in een boek leest.",
        CSF.lk.tabel(['Voorwerp uit 1990', 'Wat vertelt het?'], [['een cassettebandje', 'zo luisterden jongeren naar muziek, en ze namen liedjes op van de radio'], ['een telefoonkaart', 'gsm\'s waren zeldzaam: je belde vanuit een telefooncel'], ['een papieren wegenkaart', 'er was geen gps: je zocht zelf je weg']]) +
        CSF.lk.stappen(['Schrijf twintig voorwerpen op die je elke dag gebruikt of ziet.', 'Vraag bij elk: bestaat dit over 25 jaar nog? Is het typisch voor nu?', 'Kies vijf voorwerpen die samen een zo volledig mogelijk beeld geven: school, vrije tijd, technologie, eten, mode …']) +
        CSF.lk.tip('Kies niet vijf keer technologie. Een tijdcapsule met variatie vertelt meer.')],
      ["Een brief aan je toekomstige ik", "Een brief heeft een vaste opbouw: <b>plaats en datum</b>, een <b>aanspreking</b>, een <b>kern</b> en een <b>slot</b> met je naam. In een brief aan jezelf vertel je hoe je nu leeft, wat je hoopt en wat je <b>voorspelt</b>. Stel ook vragen: je toekomstige ik kan ze lezen en glimlachen.",
        CSF.lk.punten(['<b>Nu</b>: wie zijn je vrienden, wat doe je graag, waar maak je je zorgen over?', '<b>Hopen</b>: welk werk, waar wonen, wat wil je bereikt hebben?', '<b>Voorspellen</b>: hoe gaan mensen zich in 2050 verplaatsen, leren, communiceren?', '<b>Vragen</b>: ‘Speel je nog altijd gitaar?’']) +
        CSF.lk.vb('<p>Lievegem, 13 november 2026<br>Beste ik van later,<br>…<br>Tot over een paar jaar!<br>Jezelf, in het eerste jaar</p>', 'Opbouw') +
        CSF.lk.let('Je brief is persoonlijk. Je beslist zelf wat je deelt bij de presentatie.')]
    ],
    invalshoek: { intro: "Kies in lesuur 1 voor wie je tijdcapsule bedoeld is.", keuzes: [["Voor mezelf", "Ik open hem zelf in 2050."], ["Voor een leerling in 2050", "Een leerling van 12 jaar, die nooit van onze spullen hoorde."], ["Voor een museum", "Een tentoonstelling over ‘jong zijn in 2026’."]] },
    nogTijd: "Kies één voorwerp en schrijf er een museumbordje bij: naam, jaar, wat het is en waarom het belangrijk was.",
    test: [
      ["Hoe noemen historici een voorwerp dat iets vertelt over vroeger?", ["Een bron", "Een fossiel", "Een bewijsstuk"], 0, "Een voorwerp is een bron."],
      ["Welk voorwerp past het best in een tijdcapsule?", ["Iets typisch voor nu dat misschien verdwijnt", "Een steen uit de tuin", "Iets wat al 100 jaar bestaat"], 0, "Het moet iets zeggen over deze tijd."],
      ["Wat hoort zeker in een brief?", ["Plaats en datum, aanspreking, kern en slot", "Alleen je naam", "Een tekening"], 0, "Dat is de vaste opbouw."]
    ],
    controle: [
      ["Werkblad 1, oef. 1: hoeveel jaar zit er tussen 2026 en 2050?", "getal", [24, 0], "2050 − 2026."],
      ["Werkblad 1, oef. 2: hoe oud ben je in 2050 als je geboren bent in 2013?", "getal", [37, 0], "2050 − 2013."],
      ["Werkblad 1, oef. 3: hoe noemen historici een voorwerp dat iets over vroeger vertelt?", "tekst", ["bron", "een bron", "historische bron"], "Kijk op leerkaart 1."]
    ],
    criteria: ["Logboek elk lesuur ingevuld", "Vijf gevarieerde voorwerpen", "Bij elk voorwerp een duidelijke uitleg", "Brief met plaats en datum, aanspreking, kern en slot", "Nu, hopen, voorspellen en vragen in je brief"],
    lessen: CSF.lessen2({
      t1: "Mijn tijdcapsule",
      opdracht: "Lees de projectfiche. Wat moet er in je tijdcapsule en in je brief?",
      ideeen: "Schrijf in werkblad 1 twintig voorwerpen op. Kies er vijf.",
      start: "Schrijf bij elk van je vijf voorwerpen wat het over 2026 vertelt. Los de oefeningen op.",
      t2: "Mijn brief aan 2050",
      werk: "Schrijf je brief aan jezelf in 2050 in werkblad 2. Lees hem na: staan alle delen erin?",
      presenteer: "Stel je tijdcapsule voor aan een klasgenoot: welk voorwerp koos je als eerste, en waarom? Je brief hou je voor jezelf als je dat wil."
    }),
    werkbundel: [
      { les: 1, html: `
        ${h.kader("De opdracht", "Kies vijf voorwerpen die tonen hoe jongeren in 2026 leven, en leg uit waarom. Schrijf een brief aan jezelf in 2050.")}
        <h2>Werkblad 1 · Wat gaat erin?</h2>
        ${fiche([["1. Hoeveel jaar zit er tussen 2026 en 2050?", 24], ["2. Hoe oud ben je in 2050 als je geboren bent in 2013?", 24], ["3. Hoe noemen historici een voorwerp dat iets over vroeger vertelt?", 24], ["En ik? Hoe oud ben ik in 2050?", 24]])}
        <h3>Twintig voorwerpen</h3>
        <table>${[0, 1, 2, 3, 4].map(function (r) { return "<tr>" + [1, 2, 3, 4].map(function (c) { return '<td style="height:24px;width:25%"><span class="klein">' + (r * 4 + c) + "</span></td>"; }).join("") + "</tr>"; }).join("")}</table>
        <h3>Mijn vijf voorwerpen</h3>
        <table><tr><th style="width:26%">Voorwerp</th><th>Wat vertelt het over 2026?</th></tr>${[1, 2, 3, 4, 5].map(function (n) { return "<tr><td><b>" + n + '.</b></td><td style="height:36px"></td></tr>'; }).join("")}</table>` },
      { les: 2, html: `
        <h2>Werkblad 2 · Brief aan mezelf in 2050</h2>
        ${h.lijnen(18)}
        <p class="klein">Controleer: plaats en datum · aanspreking · nu · hopen · voorspellen · een vraag · slot met je naam</p>` }
    ]
  });
})();
