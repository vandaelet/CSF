/* Oefenproject Cultuur · Curator voor één dag: het Lam Gods */
(function () {
  var h = CSF.h;
  var URL = "https://closertovaneyck.kikirpa.be/";
  var ZOEK = [["Het Lam op het altaar (midden onder)", "Wat stroomt er uit het Lam? Waarin?"],
              ["Boven het Lam", "Welk dier zie je in een krans van stralen?"],
              ["Voorgrond onder het Lam", "Welk bouwwerk staat daar?"],
              ["Bovenste rij, uiterst links en rechts", "Wie zijn deze twee mensen?"],
              ["Bovenste rij, rechts", "Welk instrument bespelen de engelen?"],
              ["Onderste rij, uiterst rechts", "Wie is de reus tussen de pelgrims?"]];
  CSF.project({
    id: "cultuur",
    soort: "oefen",
    domein: "Cultuur",
    jaar: "1e jaar",
    tijd: "3 lesuren",
    sterren: 2,
    voorWie: "Voor leerlingen met zin om verhalen in kunst te ontdekken.",
    naam: "Curator voor één dag: het Lam Gods ontcijferd",
    kort: "Leer symbolen in een schilderij lezen. Maak een minitentoonstelling over het Lam Gods.",
    omschrijving: "Het Lam Gods (1432) van de gebroeders Van Eyck hangt in de Gentse Sint-Baafskathedraal. Het zit vol verborgen betekenissen. Eén paneel is sinds 1934 spoorloos. Zoom in op het schilderij tot op de penseelstreek. Ontcijfer de symbolen. Word curator. Maak een folder voor een minitentoonstelling.",
    doel: "Je leert kijken als een kunsthistoricus: goed waarnemen, symbolen verklaren en een kunstwerk kort en boeiend uitleggen.",
    bereikt: ["Iconografie uitleggen en symbolen herkennen", "Een kunstwerk beschrijven: waarneming, betekenis en bron", "Een korte zaaltekst schrijven zoals in een museum", "Feiten over de diefstal van 1934 onderscheiden van geruchten"],
    toepassen: ["Geconcentreerd en nauwkeurig kijken", "Kiezen en schrappen: een zaaltekst telt maximaal 60 woorden", "Netjes en verzorgd werken", "Mijn tijd verdelen tussen zoeken en schrijven"],
    materiaal: ["Werkbundel", "Een toestel met internet (zoomsite Closer to Van Eyck en deze site)", "Potlood, fineliner, kleurpotloden"],
    oplossing: "Op deze site, bij ‘Controleer je oplossing’. Controleer daar de antwoorden van de symbolenzoektocht.",
    product: "Een tentoonstellingsfolder (A4 gevouwen): titel, 2 zaalteksten en een iconografisch zelfportret",
    links: [["Open Closer to Van Eyck", URL]],
    leerkaarten: [
      ["Iconografie", "Vroeger konden de meeste mensen niet lezen. Schilders gebruikten daarom vaste symbolen. Een lam stond voor Jezus. Een duif stond voor de Heilige Geest. Een open boek stond voor wijsheid. Iconografie is de kunst van het lezen van die symbolen."],
      ["Het Lam Gods", "Het Lam Gods is een veelluik van twaalf panelen. Het kan open en dicht. Jan van Eyck werkte het in 1432 af. Volgens een opschrift begon zijn broer Hubert eraan. Het is olieverf op eikenhouten panelen. Bij het inzoomen vind je nog steeds nieuwe details."],
      ["De diefstal van 1934", "In de nacht van 10 op 11 april 1934 verdwenen De Rechtvaardige Rechters en Johannes de Doper. De dief eiste één miljoen frank. Johannes de Doper kwam terug. De Rechters bleven verdwenen. Sinds 1945 hangt er een kopie van Jef Van der Veken."],
      ["Een zaaltekst schrijven", "Een museum gebruikt korte teksten van 40 à 60 woorden. Begin bij een zichtbaar detail. Vertel één verrassend weetje. Eindig met een kijkvraag."]
    ],
    invalshoek: { intro: "Kies in lesuur 1 het thema van je tentoonstelling.", keuzes: [
      ["Dieren en natuur", "Het Lam, de duif, de planten in het paradijs …"], ["Het grootste kunstmysterie", "De diefstal van 1934: feiten en geruchten."], ["Mensen en kleren", "Wat vertellen kleren, kronen en voorwerpen over een persoon?"]] },
    nogTijd: "Bekijk het Lam van dichtbij op de zoomsite. Bij de restauratie (2019–2020) kwam het oorspronkelijke, opvallend menselijke gezicht weer tevoorschijn. Waarom schilderde Van Eyck het zo?",
    test: [
      ["Wat is iconografie?", ["Symbolen in kunst lezen", "Schilderen met olieverf", "Kunst restaureren"], 0, "Iconografie verklaart de betekenis van een lam, een duif of een boek in een schilderij."],
      ["Welk paneel is nog altijd verdwenen?", ["De Rechtvaardige Rechters", "Johannes de Doper", "Adam en Eva"], 0, "Johannes de Doper kwam terug. De Rechters bleven verdwenen."],
      ["Hoeveel woorden telt een goede zaaltekst?", ["40 à 60", "10 à 20", "150 à 200"], 0, "Bezoekers lezen staand. Kort en boeiend werkt het best."]
    ],
    controle: [
      ["Welk dier zie je boven het Lam, in een krans van stralen?", "tekst", ["duif", "een duif", "witte duif"], "Kijk boven het altaar."],
      ["Welk bouwwerk staat op de voorgrond onder het Lam?", "tekst", ["fontein", "een fontein", "fontein des levens", "levensfontein", "bron"], "Er stroomt water uit."],
      ["Welk instrument bespelen de engelen rechts boven?", "tekst", ["orgel", "een orgel"], "Zoek een instrument met pijpen."],
      ["Wie is de reus tussen de pelgrims?", "tekst", ["christoffel", "sint-christoffel", "sint christoffel", "de heilige christoffel", "heilige christoffel", "christophorus"], "Hij is de beschermheilige van reizigers."],
      ["Welk paneel is een kopie?", "tekst", ["de rechtvaardige rechters", "rechtvaardige rechters", "de rechters", "rechters"], "Lees de leerkaart over de diefstal van 1934."]
    ],
    criteria: ["Logboek elk lesuur ingevuld", "Symbolenzoektocht nauwkeurig ingevuld", "Zaalteksten volgen de museumregels", "Zelfportret met 3 doordachte symbolen", "Folder is netjes en verzorgd"],

    lessen: CSF.lessen3({
      t1: "Opstart: leren kijken",
      weet: "Kijk 3 minuten stil naar het open Lam Gods op de zoomsite. Noteer je waarnemingen en je voorkennis.",
      opdracht: "Lees de opdracht. Noteer de onderdelen van je folder.",
      ideeen: "Bedenk minstens 3 thema’s voor je tentoonstelling. Kies er één.",
      start: "Lees de leerkaarten. Begin aan de symbolenzoektocht.",
      t2: "Inzoomen en schrijven",
      werk2: "Werk de symbolenzoektocht af. Controleer je antwoorden op de site. Kies 2 details voor je thema. Schrijf je zaalteksten.",
      t3: "De folder",
      werk3: "Maak je folder: titel, 2 zaalteksten en je iconografisch zelfportret.",
      presenteer: "Geef een medeleerling een rondleiding van 2 minuten of via een audiogids op Smartschool."
    }),

    werkbundel: [
      { les: 1, html: `
        <p>Open <b>${URL}</b>. Kies het veelluik in open stand. Kijk <b>3 minuten</b> zonder te zoomen.</p>
        <p><b>Wat zie ik? Wat wist ik al?</b></p>${h.lijnen(2)}
        ${h.kader("De opdracht", "Jij bent curator. Maak een <b>folder</b> (A4, dubbelgevouwen) voor een minitentoonstelling over het Lam Gods. Zet erin: een titel, <b>2 zaalteksten</b> over details bij je thema en een <b>iconografisch zelfportret</b>. Dat is een tekening van jezelf met 3 persoonlijke symbolen.")}
        <p><b>Mogelijke thema’s (minstens 3) · mijn keuze:</b></p>${h.lijnen(2)}
        ${h.leerkaart("Leerkaart · Iconografie", "<p>Vroeger konden de meeste mensen niet lezen. Schilders gebruikten daarom vaste symbolen: een <b>lam</b> = Jezus als offer · een <b>duif</b> = de Heilige Geest · een <b>fontein</b> = leven · een <b>open boek</b> = wijsheid · een <b>kroon</b> = macht.</p>")}
        ${h.leerkaart("Leerkaart · Het Lam Gods en de diefstal van 1934", "<p>Het Lam Gods is een veelluik van twaalf panelen. Het kan open en dicht. Jan van Eyck werkte het in <b>1432</b> af. Volgens een opschrift begon zijn broer Hubert eraan.</p><p>In de nacht van <b>10 op 11 april 1934</b> verdwenen <b>De Rechtvaardige Rechters</b> en <b>Johannes de Doper</b>. De dief eiste één miljoen Belgische frank. Johannes de Doper kwam terug via een bagagebewijs van station Brussel-Noord. De Rechters zijn nooit teruggevonden. Sinds 1945 hangt er een kopie van <b>Jef Van der Veken</b>.</p>")}` },
      { les: 1, html: `
        <h2>Werkblad 1 · Symbolenzoektocht</h2>
        <p>Zoom in op de zoomsite. Noteer je waarneming en de betekenis.</p>
        <table><tr><th style="width:24%">Waar?</th><th style="width:26%">Zoekvraag</th><th>Mijn waarneming</th><th>Betekenis</th></tr>
        ${ZOEK.map(function (z) { return '<tr><td class="klein"><b>' + z[0] + '</b></td><td class="klein">' + z[1] + '</td><td style="height:52px"></td><td></td></tr>'; }).join("")}</table>
        <h3>Wat lukte vandaag? Wat nog niet?</h3>${h.lijnen(2)}` },
      { les: 2, html: `
        <h2>Werkblad 2 · Zaalteksten</h2>
        ${h.leerkaart("Museumregels", "Kopregel: titel · maker · jaar · plaats. &nbsp; 40 à 60 woorden. &nbsp; Begin bij een <b>zichtbaar</b> detail. &nbsp; Vertel één <b>verrassend</b> detail. &nbsp; Eindig met een <b>kijkvraag</b>.")}
        ${[1, 2].map(function (z) { return '<table><tr><th colspan="2">Zaaltekst ' + z + ' · detail: ____________________________</th></tr><tr><td style="width:22%">Kopregel</td><td></td></tr><tr><td>Tekst</td><td style="height:110px"></td></tr><tr><td>Aantal woorden</td><td>____</td></tr></table>'; }).join("")}
        <h3>Wat lukte vandaag? Wat leerde ik?</h3>${h.lijnen(2)}` },
      { les: 3, html: `
        <h2>Mijn iconografisch zelfportret</h2>
        <p>Teken jezelf als een heilige van Van Eyck, met <b>3 persoonlijke symbolen</b>.</p>
        <div class="twee">${h.vak("Schets", 230)}<table><tr><th>Symbool</th><th>Betekenis voor mij</th></tr><tr><td style="height:64px">1</td><td></td></tr><tr><td style="height:64px">2</td><td></td></tr><tr><td style="height:64px">3</td><td></td></tr></table></div>
        <p><b>Folder maken:</b> vouw een A4 dubbel. Voorkant = titel + tekening · binnenkant = 2 zaalteksten · achterkant = je zelfportret.</p>
        <p><b>Rondleiding (2 min):</b> begin = titel en thema · midden = wijs in elk detail één symbool aan · einde = laat de luisteraar de symbolen van je zelfportret raden.</p>` }
    ]
  });
})();
