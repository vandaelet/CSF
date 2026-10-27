/* lichamelijke opvoeding · Een gezonde geest in een gezond lichaam
   Bron: de opdracht ‘SPORT – een gezonde geest in een gezond lichaam’ van de werkgroep en de tekst
   ‘Sport en mentaal welbevinden’ (naar allesoversport.nl), herschreven en uitgewerkt tot 5 lesuren.
   De concentratietest en de stemmingsmeter zijn eigen materiaal. */
(function () {
  var h = CSF.h;
  // Concentratietest: vaste reeks cijfers (zelfde blad voor iedereen), schrap elke 7
  function cijferblad(zaad) {
    var x = zaad, r = "";
    for (var i = 0; i < 12; i++) {
      r += "<tr>";
      for (var j = 0; j < 20; j++) { x = (x * 9301 + 49297) % 233280; r += '<td style="text-align:center;padding:2px 0;font-size:11pt">' + Math.floor(x / 233280 * 10) + "</td>"; }
      r += "</tr>";
    }
    return '<table style="font-family:monospace">' + r + "</table>";
  }
  function telZevens(zaad) { var x = zaad, n = 0; for (var i = 0; i < 240; i++) { x = (x * 9301 + 49297) % 233280; if (Math.floor(x / 233280 * 10) === 7) n++; } return n; }
  var SMILEYS = ["😞", "🙁", "😐", "🙂", "😄"];
  function meter(vraag) { return "<tr><td>" + vraag + "</td>" + SMILEYS.map(function (s) { return '<td style="text-align:center;font-size:14pt">' + s + "</td>"; }).join("") + "</tr>"; }
  function vragen(lijst, hoogte) { return '<table class="fiche">' + lijst.map(function (v) { return '<tr><td class="lbl">' + v + '</td><td style="height:' + (hoogte || 34) + 'px"></td></tr>'; }).join("") + "</table>"; }

  CSF.project({
    id: "lichamelijke-opvoeding-een-gezonde-geest",
    soort: "vak",
    vak: "lichamelijke opvoeding",
    jaar: "1e en 2e jaar",
    tijd: "5 lesuren",
    sterren: 3,
    naam: "Een gezonde geest in een gezond lichaam",
    kort: "Ga op zoek naar de vele voordelen van lichaamsbeweging.",
    voorWie: "Voor leerlingen met interesse in de wisselwerking tussen lichaam en geest.",
    omschrijving: "Sporten geeft je sterkere been-, arm-, buik- en bilspieren. Dat is algemeen bekend. 🤸🏻‍♀️ Sporten geeft je ook sterkere hersenen. Wist je dat al? Ontdek de vele voordelen van beweging voor je lichaam en je geest! Bedenk daarna zelf een onderzoek en test het uit.",
    doel: "Je ontdekt wat sport en beweging doen voor je mentale gezondheid en je denkwerk. Je stelt zelf bewegingsrichtlijnen op. Je ontwerpt een eigen onderzoek naar het effect van bewegen op je stemming en je concentratie. Je voert het uit en trekt een besluit.",
    bereikt: ["Een informatieve tekst lezen en de kern samenvatten in een schema", "De effecten van beweging op lichaam en geest uitleggen", "Bewegingsrichtlijnen opstellen per leeftijd en niveau", "Een eenvoudig onderzoek ontwerpen: onderzoeksvraag, voorspelling, meting", "Resultaten verwerken in een tabel en een besluit trekken"],
    toepassen: ["Plannen en organiseren: een eigen onderzoek opzetten", "Kritisch denken: is mijn onderzoek eerlijk?", "Doorzetten tijdens het meten", "Zelfreflectie: wat doet beweging met mij?"],
    materiaal: ["Werkbundel", "Een Chromebook met internet", "Een stopwatch of gsm-timer", "Sportkledij of makkelijke kledij voor 10 minuten bewegen"],
    oplossing: "Op deze site, bij ‘Controleer je oplossing’. Je coach of de leerkracht lichamelijke opvoeding bekijkt je onderzoek.",
    product: "Een uitgevoerd mini-onderzoek met resultaten, besluit en een poster of korte presentatie",
    links: [["Filmpje bij de opdracht (YouTube)", "https://www.youtube.com/watch?v=wzl02CGs5nY"], ["Sport en mentaal welbevinden (allesoversport.nl)", "https://www.allesoversport.nl"], ["Bewegingsrichtlijnen van de Wereldgezondheidsorganisatie", "https://www.who.int/news-room/fact-sheets/detail/physical-activity"], ["Gezond Leven: bewegen (Vlaams Instituut Gezond Leven)", "https://www.gezondleven.be/themas/beweging-sedentair-gedrag"]],
    leerkaarten: [
      ["Bewegen en je lichaam", "Wie beweegt, leeft langer en gezonder. De kans op overgewicht, diabetes en hart- en vaatziekten daalt."],
      ["Bewegen en je gevoel", "Bij bewegen maakt je lichaam stoffen aan die je een goed gevoel geven: endorfine en serotonine. Endorfine dempt pijn. Serotonine helpt je stemming, je geheugen en je zelfvertrouwen. Wie regelmatig beweegt, voelt minder angst en somberheid. Plezier is de belangrijkste reden om te blijven sporten."],
      ["Bewegen en slaap", "Na het bewegen herstelt je lichaam kleine schade in je spieren. Dat gebeurt in de diepe slaap. Bij bewegen komt adenosine vrij. Die stof geeft je ‘slaapdruk’. Serotonine is een bouwstof van melatonine, het slaaphormoon. Wie beweegt, slaapt sneller in, langer en dieper."],
      ["Bewegen en je brein", "Bij bewegen stroomt er meer bloed naar je hersenen. Je kan je beter concentreren, beter onthouden en creatiever denken. Veel sporten vragen bovendien denkwerk: inschatten, plannen, snel beslissen."],
      ["Bewegen en stress", "Bij stress maakt je lichaam stresshormonen aan. Matig bewegen, zoals fietsen of stevig wandelen, helpt die af te voeren. Heel intensief sporten, zoals HIIT, kan net een extra stressprikkel zijn."],
      ["Een eerlijk onderzoek", "Stel een duidelijke onderzoeksvraag. Doe een voorspelling. Meet vóór en na. Verander maar één ding tegelijk: dat is je variabele. Hou de rest gelijk. Test bij meer dan één persoon. Noteer alles in een tabel."]
    ],
    invalshoek: { intro: "Kies in lesuur 3 wat je in je onderzoek meet.", keuzes: [
      ["Stemming", "Hoe voel je je vóór en na 10 minuten bewegen?"],
      ["Concentratie", "Hoeveel zevens vind je in 1 minuut, vóór en na het bewegen?"],
      ["Allebei", "Meet stemming én concentratie bij minstens drie personen."]] },
    nogTijd: "Ontwerp een ‘beweegpauze’ van 3 minuten voor je klas. Beschrijf de oefeningen. Leg uit waarom ze helpen om beter te leren.",
    test: [
      ["Welke stof zorgt voor ‘slaapdruk’?", ["Adenosine", "Endorfine", "Adrenaline"], 0, "Adenosine maakt je slaperig."],
      ["Welke stof dempt pijn en geeft een plezierig gevoel?", ["Endorfine", "Melatonine", "Adenosine"], 0, "Endorfine gaat pijnprikkels tegen."],
      ["Je hebt stress. Welke beweging helpt het best?", ["Matig: fietsen of stevig wandelen", "Een zware HIIT-training", "Helemaal niet bewegen"], 0, "Te intensief sporten geeft een extra stressprikkel."],
      ["Wat is volgens onderzoek de belangrijkste reden om te sporten?", ["Plezier", "Winnen", "Afvallen"], 0, "Plezier houdt je gemotiveerd."],
      ["Waarom kan je je beter concentreren na het bewegen?", ["Er stroomt meer bloed naar je hersenen", "Je spieren worden sterker", "Je wordt moe"], 0, "Meer bloed stimuleert je hersenwerking."]
    ],
    controle: [
      ["Hoeveel minuten per dag beweegt een jongere van 12 jaar best, volgens de Wereldgezondheidsorganisatie?", "getal", [60, 0], "Gemiddeld een uur per dag."],
      ["Welk slaaphormoon wordt gemaakt uit serotonine?", "tekst", ["melatonine"], "Kijk op de leerkaart ‘Bewegen en slaap’."],
      ["Hoe heet het ene ding dat je in een eerlijk onderzoek verandert?", "tekst", ["variabele", "de variabele"], "Kijk op de leerkaart ‘Een eerlijk onderzoek’."],
      ["Hoeveel zevens staan er op het cijferblad A (werkblad 4)?", "getal", [telZevens(11), 0], "Tel rustig rij per rij."]
    ],
    criteria: ["Logboek elk lesuur ingevuld", "Tekst gelezen: begrippenschema volledig en correct", "Bewegingsrichtlijnen per leeftijd en niveau, met een verantwoording", "Drie voorbeelden van denkwerk bij sport", "Onderzoek ontworpen: vraag, voorspelling, werkwijze, meting", "Onderzoek uitgevoerd, resultaten in een tabel en een besluit", "Poster of presentatie duidelijk en verzorgd"],

    lessen: CSF.lessenN({
      t1: "Verkennen: wat doet sport met je hoofd?",
      weet: "Noteer hoe jij je voelt na het sporten. Noteer wat je al weet over sport en gezondheid.",
      opdracht: "Lees de opdracht. Lees de drie onderzoeksvragen goed door.",
      ideeen: "Welke informatie heb je nodig? Brainstorm op werkblad 1.",
      start: "Werkblad 1: bekijk het filmpje via de link bij het project. Lees de tekst ‘Sport en mentaal welbevinden’ (deel 1).",
      midden: [
        { titel: "Lezen en ordenen", werk: "Werkblad 2: lees deel 2 van de tekst. Maak een begrippenschema. Werk vraag 1 uit: bedenk bewegingsrichtlijnen per leeftijd en niveau." },
        { titel: "Denkwerk en onderzoek ontwerpen", werk: "Werkblad 3: werk vraag 2 uit: denkwerk bij het sporten. Ontwerp daarna je eigen onderzoek: vraag, voorspelling en werkwijze." },
        { titel: "Onderzoek uitvoeren", werk: "Werkblad 4: voer je onderzoek uit bij jezelf en minstens twee medeleerlingen. Meet vóór en na 10 minuten bewegen. Noteer alles in de tabel." }
      ],
      laatste: { titel: "Besluit en presentatie", werk: "Werkblad 5: verwerk je resultaten. Trek een besluit. Maak een poster of een korte presentatie.", presenteer: "Stel je onderzoek in 2 minuten voor aan je coach of de leerkracht lichamelijke opvoeding." }
    }),

    werkbundel: [
      { les: 1, html: `
        ${h.kader("De opdracht", "Ontdek wat sport en beweging doen voor je hoofd: je gevoel, je slaap, je concentratie en je stress. Lees de tekst en bekijk het filmpje. Beantwoord drie onderzoeksvragen. Ontwerp daarna zelf een onderzoek. Voer het uit bij jezelf en bij medeleerlingen.")}
        <h3>De drie onderzoeksvragen</h3>
        <ol><li><b>Bewegingsrichtlijnen.</b> Om je mentaal goed te voelen, heb je beweging nodig. Hoeveel? Dat hangt af van je leeftijd en je niveau. Bedenk zelf richtlijnen.</li>
        <li><b>Denkwerk bij sport.</b> In veel sporten draait je brein op volle toeren. Zoek drie voorbeelden.</li>
        <li><b>Eigen onderzoek.</b> Bedenk een manier om het effect van bewegen op je mentaal welbevinden te onderzoeken. Voer het uit.</li></ol>
        <h2>Werkblad 1 · Verkennen</h2>
        <h3>Wat weet ik al? Hoe voel ik me na het sporten?</h3>${h.lijnen(3)}
        <h3>Brainstorm: welke informatie heb ik nodig?</h3>
        ${h.vak("Mijn brainstorm", 200)}` },
      { les: 1, html: `
        <h2>Sport en mentaal welbevinden (deel 1)</h2>
        <p class="klein">Herschreven naar een tekst van allesoversport.nl.</p>
        <p>Bewegen heeft veel positieve effecten. Wetenschappers hebben die effecten aangetoond. Wie beweegt, leeft langer en gezonder. De kans op overgewicht, diabetes en hart- en vaatziekten daalt. Bewegen doet ook iets met je hoofd: je zit beter in je vel en je gelooft meer in jezelf.</p>
        <p><b>1. Zelfvertrouwen.</b> Sport geeft vooral je <b>fysieke eigenwaarde</b> een duw: je gelooft meer in je lichaam en in je eigen kunnen. Toch werkt het niet altijd zo. Bij een nieuwe sport moet je de vaardigheden nog leren. Dan kan je je net onzeker voelen. Omgekeerd sporten mensen met meer zelfvertrouwen ook meer. Sport en zelfvertrouwen versterken elkaar dus.</p>
        <p><b>2. Stemming en emoties.</b> Je <b>stemming</b> is hoe je je dagelijks voelt. Dat duurt uren tot weken. Een <b>emotie</b> is je gevoel in één situatie. Dat duurt minuten tot uren. Wie regelmatig beweegt, voelt zich vaker goed. Hij voelt minder angst en somberheid. Een goed gevoel na het sporten helpt je om vol te houden. Bij wie sporten niet leuk vindt, of bij heel intensieve trainingen zoals HIIT, is dat effect kleiner.</p>
        <p><b>3. Plezier.</b> Plezier is voor kinderen en volwassenen de belangrijkste reden om te sporten. Bij bewegen maakt je lichaam <b>endorfine</b> en <b>serotonine</b> aan. Endorfine dempt pijn en geeft een plezierig gevoel. Serotonine helpt je stemming, je geheugen en je zelfvertrouwen. Samen sporten met vrienden geeft een extra boost.</p>
        <p><b>4. Vermoeidheid en slaap.</b> Wie regelmatig beweegt, heeft meer energie. Hij slaapt sneller in, langer en dieper. Na het bewegen herstelt je lichaam kleine schade in je spieren, en dat gebeurt in de diepe slaap. Bovendien komt er <b>adenosine</b> vrij. Die stof geeft je slaapdruk: je lichaam wil slapen. Serotonine is ook een bouwstof van <b>melatonine</b>, het hormoon dat je slaperig maakt als het donker wordt.</p>` },
      { les: 2, html: `
        <h2>Sport en mentaal welbevinden (deel 2)</h2>
        <p><b>5. Denkwerk (cognitie).</b> Cognitie is je dagelijkse denkwerk: problemen oplossen, opletten, onthouden, nieuwe dingen leren en beslissen. Vooral bij jongeren en ouderen helpt bewegen daarbij.</p>
        <p><b>6. Jongeren.</b> Bij bewegen stroomt er meer bloed door je lichaam, ook naar je hersenen. Dat stimuleert je hersenwerking. Je concentreert je beter, je onthoudt beter en je bent creatiever. Jongeren die bewegen, halen vaak betere resultaten op school.</p>
        <p><b>7. Volwassenen en ouderen.</b> Bewegen remt het achteruitgaan van het denkvermogen af. Volwassenen die bewegen, werken productiever. Ouderen die bewegen, hebben een beter geheugen. Wie veel beweegt, heeft ook minder kans op dementie.</p>
        <p><b>8. Stress.</b> Bij stress maakt je lichaam stresshormonen aan. Bewegen helpt om die af te voeren. Zo herstel je van een stressvolle situatie. Daarna kan je beter met nieuwe stress omgaan. Kies dan wel voor matig bewegen, zoals fietsen of stevig wandelen. Een heel zware training kan net een extra stressprikkel zijn.</p>
        <p><b>9. Breng beweging in je dag.</b> Beweging hangt samen met veel kanten van je mentale gezondheid. Dus: elke beweging telt!</p>
        <h2>Werkblad 2 · Mijn begrippenschema</h2>
        <p>Noteer de belangrijke begrippen uit de tekst in een schema. Zet ‘bewegen’ in het midden. Verbind de begrippen met pijlen.</p>
        ${h.vak("Begrippenschema", 300)}` },
      { les: 2, html: `
        <h2>Vraag 1 · Bewegingsrichtlijnen</h2>
        ${h.leerkaart("Leerkaart · Wat raadt de Wereldgezondheidsorganisatie aan?", "<ul><li><b>5 tot 17 jaar:</b> gemiddeld 60 minuten per dag matig tot intensief bewegen. Minstens 3 keer per week iets voor sterke spieren en botten.</li><li><b>Volwassenen:</b> 150 tot 300 minuten matig bewegen per week, of 75 tot 150 minuten intensief. 2 keer per week spierversterkende oefeningen.</li><li><b>65 plussers:</b> zoals volwassenen, plus 3 keer per week oefeningen voor het evenwicht.</li><li><b>Voor iedereen:</b> zit minder lang stil. Elke beweging telt.</li></ul>")}
        <p>Bedenk zelf een bewegingsrichtlijn per leeftijd en per niveau. Voorbeelden: 10 000 stappen per dag, elke week 10 km fietsen, 1 uur wandelen per dag.</p>
        <table><tr><th style="width:16%">Leeftijd</th><th>Basisniveau</th><th>Gevorderd</th><th>Topniveau</th></tr>
        ${["jonger dan 30", "30 tot 60 jaar", "ouder dan 60"].map(function (x) { return "<tr><td><b>" + x + '</b></td><td style="height:78px"></td><td></td><td></td></tr>'; }).join("")}</table>
        <p><b>Waarom kies je voor ouderen andere richtlijnen dan voor jongeren?</b></p>${h.lijnen(3)}` },
      { les: 3, html: `
        <h2>Vraag 2 · Denkwerk bij het sporten</h2>
        <p>In veel sporten draait je werkgeheugen op volle toeren. Zoek drie voorbeelden. Welk denkwerk gebeurt er in je brein?</p>
        <table><tr><th style="width:40%">Sport</th><th>Brein</th></tr><tr><td><i>Kogelstoten</i></td><td><i>De beste hoek inschatten (wiskunde)</i></td></tr>
        ${[1, 2, 3].map(function () { return '<tr><td style="height:40px"></td><td></td></tr>'; }).join("")}</table>
        <h2>Vraag 3 · Mijn onderzoek ontwerpen</h2>
        ${h.leerkaart("Leerkaart · Een eerlijk onderzoek", "<p>Stel een duidelijke <b>onderzoeksvraag</b>. Doe een <b>voorspelling</b>. Meet <b>vóór en na</b>. Verander maar één ding tegelijk: dat is je <b>variabele</b>. Hou de rest gelijk. Test bij meer dan één persoon. Noteer alles in een tabel.</p>")}
        ${vragen(["Mijn onderzoeksvraag", "Mijn voorspelling", "Wat meet ik? (stemming, concentratie, beide)", "Hoe meet ik het? (zie werkblad 4)", "Welke beweging? Hoe lang? (bv. 10 min trappen lopen of jumping jacks)", "Wie test ik? (minstens 3 personen)", "Wat hou ik gelijk?"], 34)}` },
      { les: 4, html: `
        <h2>Werkblad 4 · Onderzoek uitvoeren (1)</h2>
        <p><b>Werkwijze.</b> Vul de stemmingsmeter in. Doe de concentratietest met blad A: schrap in 1 minuut zoveel mogelijk zevens. Beweeg daarna 10 minuten. Vul opnieuw de stemmingsmeter in. Doe de test met blad B. Beweeg veilig: drink water en stop als je je niet goed voelt.</p>
        <h3>Stemmingsmeter (omcirkel)</h3>
        <table><tr><th></th>${SMILEYS.map(function () { return "<th></th>"; }).join("")}</tr>${meter("Hoe voel ik me nu?")}${meter("Hoeveel energie heb ik?")}${meter("Hoe rustig ben ik in mijn hoofd?")}</table>
        <h3>Concentratietest · blad A (vóór het bewegen)</h3>
        <p class="klein">Schrap in 1 minuut zoveel mogelijk zevens. Werk rij per rij.</p>
        ${cijferblad(11)}
        <p>Aantal geschrapte zevens: ______ &nbsp; Fouten: ______</p>` },
      { les: 4, html: `
        <h2>Werkblad 4 · Onderzoek uitvoeren (2)</h2>
        <h3>Concentratietest · blad B (na het bewegen)</h3>
        ${cijferblad(29)}
        <p>Aantal geschrapte zevens: ______ &nbsp; Fouten: ______</p>
        <h3>Mijn resultaten</h3>
        <table><tr><th>Persoon</th><th>Stemming vóór (1–5)</th><th>Stemming na (1–5)</th><th>Zevens vóór</th><th>Zevens na</th></tr>
        ${["ik", "", "", ""].map(function (x) { return "<tr><td style=\"height:32px\">" + x + "</td><td></td><td></td><td></td><td></td></tr>"; }).join("")}</table>
        <p class="klein">Tip: kopieer werkblad 4 of maak de test op een blad met de rijen afgedekt, zodat elke persoon opnieuw kan starten. Wissel blad A en B om bij de volgende persoon.</p>
        <h3>Wat viel me op tijdens het meten?</h3>${h.lijnen(3)}` },
      { les: 5, html: `
        <h2>Werkblad 5 · Besluit en presentatie</h2>
        ${vragen(["Wat is gemiddeld het verschil in stemming (na – vóór)?", "Wat is gemiddeld het verschil in zevens (na – vóór)?", "Klopt mijn voorspelling?", "Welke uitleg uit de tekst past bij mijn resultaat?", "Was mijn onderzoek eerlijk? Wat kon beter?"], 44)}
        <h3>Mijn besluit</h3>${h.lijnen(4)}
        <h3>Poster of presentatie</h3>
        <p>Kies: een poster (A3) of een korte presentatie. Zet erop: je onderzoeksvraag, je werkwijze, een tabel of grafiek, je besluit en één tip om meer te bewegen.</p>
        <p><b>Heb je inhoudelijke vragen voor de leerkracht lichamelijke opvoeding?</b> Stel ze via ‘Vraag aan je coach’ in je logboek, of noteer ze hier.</p>${h.lijnen(2)}` }
    ]
  });
})();
