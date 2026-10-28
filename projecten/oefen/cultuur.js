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
      ["Iconografie", "Vroeger konden de meeste mensen niet lezen. Schilders gebruikten daarom vaste symbolen. Een lam stond voor Jezus. Een duif stond voor de Heilige Geest. Een open boek stond voor wijsheid. Iconografie is de kunst van het lezen van die symbolen.",
        CSF.lk.tabel(['Symbool', 'Betekenis'], [['lam', 'Jezus, die zich opoffert'], ['witte duif', 'de Heilige Geest'], ['witte lelie', 'zuiverheid, vaak bij Maria'], ['palmtak', 'een martelaar: iemand die stierf voor zijn geloof'], ['sleutels', 'de apostel Petrus'], ['schedel', 'de mens is sterfelijk'], ['open boek', 'wijsheid, het woord van God']]) +
CSF.lk.vb('<p>Zie je een vrouw met een witte lelie? Dan is het waarschijnlijk Maria, ook als haar naam er niet bij staat.</p>') +
CSF.lk.stappen(['Kijk eerst: wat zie je precies? Een dier, een voorwerp, een kleur?', 'Zoek het symbool op in een lijst.', 'Vraag je af: waarom staat het juist hier?']) +
CSF.lk.tip('Kleuren zijn ook symbolen. Rood staat vaak voor liefde of bloed, blauw voor de hemel en voor Maria.')],
      ["Het Lam Gods", "Het Lam Gods is een veelluik van twaalf panelen. Het kan open en dicht. Jan van Eyck werkte het in 1432 af. Volgens een opschrift begon zijn broer Hubert eraan. Het is olieverf op eikenhouten panelen. Bij het inzoomen vind je nog steeds nieuwe details.",
        CSF.lk.fig('<svg viewBox="0 0 440 210" role="img" aria-label="Schema van het geopende Lam Gods: zeven panelen boven, vijf onder"><g stroke="#1d1d1b" stroke-width="1.5" font-size="10" text-anchor="middle"><rect x="10" y="10" width="40" height="95" fill="#f4e3c3"/><rect x="52" y="10" width="62" height="95" fill="#eef9f9"/><rect x="116" y="10" width="62" height="95" fill="#d6e6f5"/><rect x="180" y="10" width="80" height="95" fill="#f6d58a"/><rect x="262" y="10" width="62" height="95" fill="#d6e6f5"/><rect x="326" y="10" width="62" height="95" fill="#eef9f9"/><rect x="390" y="10" width="40" height="95" fill="#f4e3c3"/><rect x="10" y="108" width="52" height="92" fill="#e8f2df"/><rect x="64" y="108" width="50" height="92" fill="#e8f2df"/><rect x="116" y="108" width="208" height="92" fill="#cfe8c4"/><rect x="326" y="108" width="52" height="92" fill="#e8f2df"/><rect x="380" y="108" width="50" height="92" fill="#e8f2df"/></g><g font-size="10" text-anchor="middle"><text x="30" y="60">Adam</text><text x="83" y="55">zingende</text><text x="83" y="67">engelen</text><text x="147" y="60">Maria</text><text x="220" y="55">God</text><text x="220" y="67">(of Christus)</text><text x="293" y="55">Johannes</text><text x="293" y="67">de Doper</text><text x="357" y="55">musicerende</text><text x="357" y="67">engelen</text><text x="410" y="60">Eva</text><text x="36" y="144">Rechtvaar-</text><text x="36" y="156">dige</text><text x="36" y="168">Rechters</text><text x="89" y="150">Christus-</text><text x="89" y="162">ridders</text><text x="220" y="150">Aanbidding van het Lam</text><text x="352" y="150">Kluize-</text><text x="352" y="162">naars</text><text x="405" y="156">Pelgrims</text></g></svg>', 'Het geopende veelluik: 7 panelen boven, 5 onder. Dicht zie je de buitenkant van de luiken.') +
CSF.lk.punten(['<b>Veelluik</b>: een schilderij uit meerdere panelen die open en dicht kunnen.', '<b>Olieverf</b>: Van Eyck legde laagjes verf over elkaar. Zo glanst het en zie je heel kleine details.', 'Het hangt in de Sint-Baafskathedraal in Gent.']) +
CSF.lk.tip('Online kan je op heel kleine details inzoomen. Zoek zelf een detail dat bijna niemand ziet.')],
      ["De diefstal van 1934", "In de nacht van 10 op 11 april 1934 verdwenen De Rechtvaardige Rechters en Johannes de Doper. De dief eiste één miljoen frank. Johannes de Doper kwam terug. De Rechters bleven verdwenen. Sinds 1945 hangt er een kopie van Jef Van der Veken.",
        CSF.lk.fig('<svg viewBox="0 0 440 110" role="img" aria-label="Tijdlijn van het Lam Gods"><line x1="20" y1="50" x2="420" y2="50" stroke="#1d1d1b" stroke-width="2"/><g fill="#3BC1C5"><circle cx="40" cy="50" r="8"/><circle cx="210" cy="50" r="8" fill="#d9363e"/><circle cx="290" cy="50" r="8"/><circle cx="400" cy="50" r="8"/></g><g font-size="12" text-anchor="middle"><text x="40" y="30" font-weight="700">1432</text><text x="40" y="78">afgewerkt</text><text x="210" y="30" font-weight="700">1934</text><text x="210" y="78">twee panelen</text><text x="210" y="92">gestolen</text><text x="290" y="30" font-weight="700">1945</text><text x="290" y="78">kopie</text><text x="290" y="92">hangt er</text><text x="400" y="30" font-weight="700">2012</text><text x="400" y="78">grote</text><text x="400" y="92">restauratie</text></g></svg>') +
CSF.lk.punten(['De dief stuurde brieven en eiste losgeld.', 'Eén paneel kwam terug als teken dat hij het meende.', 'Het andere paneel is nooit teruggevonden. Er bestaan nog altijd theorieën over waar het zou zijn.']) +
CSF.lk.tip('Een spannend verhaal trekt bezoekers aan. Gebruik het in je tentoonstelling, maar vertel alleen wat zeker is.')],
      ["Een zaaltekst schrijven", "Een museum gebruikt korte teksten van 40 à 60 woorden. Begin bij een zichtbaar detail. Vertel één verrassend weetje. Eindig met een kijkvraag.",
        CSF.lk.stappen(['<b>Kijk</b>: begin bij iets wat de bezoeker meteen ziet.', '<b>Verras</b>: vertel één weetje dat hij nog niet kende.', '<b>Vraag</b>: eindig met een vraag die hem opnieuw doet kijken.']) +
CSF.lk.vb('<p><i>Kijk naar de voet van Adam. Het lijkt alsof hij uit het schilderij stapt. Van Eyck schilderde hem alsof je er van onderen naar kijkt. Zo leek Adam in de kerk echt naast je te staan. Zie jij nog andere plekken waar het schilderij de ruimte in komt?</i></p><p class="hint">48 woorden</p>', 'Voorbeeldtekst') +
CSF.lk.punten(['Korte zinnen. Geen moeilijke woorden zonder uitleg.', 'Spreek de bezoeker aan met ‘je’.', 'Tel je woorden: 40 à 60 is genoeg.'])]
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
