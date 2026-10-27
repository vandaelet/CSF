/* STEM · Sport en wetenschap hand in hand
   Bron: de opdracht ‘Project SPORT en WETENSCHAP’ van de werkgroep, uitgewerkt tot 5 lesuren.
   De proef met vallende bladen is eigen materiaal. */
(function () {
  var h = CSF.h;
  function vink(lijst) { return "<table>" + lijst.map(function (x) { return '<tr><td style="width:7%;text-align:center;font-size:13pt">&#9744;</td><td>' + x + "</td></tr>"; }).join("") + "</table>"; }
  function fiche(lijst) { return '<table class="fiche">' + lijst.map(function (v) { return '<tr><td class="lbl">' + v[0] + '</td><td style="height:' + (v[1] || 30) + 'px">' + (v[2] || "") + "</td></tr>"; }).join("") + "</table>"; }

  CSF.project({
    id: "stem-sport-en-wetenschap-hand-in-hand",
    soort: "vak",
    vak: "STEM",
    jaar: "1e en 2e jaar",
    tijd: "5 lesuren",
    sterren: 4,
    naam: "Sport en wetenschap hand in hand",
    kort: "Onderzoek de invloed van wetenschap op sportieve prestaties.",
    voorWie: "Voor leerlingen met interesse in het verband tussen wetenschap, natuur en sport.",
    omschrijving: "De otter glijdt door het water. De wesp doorklieft de lucht. De geit klautert de berg op. Atleten proberen dat al jaren na te doen. 🏃🏻‍♂️‍➡️ Veel spectaculaire sportprestaties danken we aan de wetenschap. Sommige zijn zelfs afgekeken van de dierenwereld. Heb je zin om je hierin te verdiepen?",
    doel: "Je toont aan dat wetenschappelijk onderzoek toegepast wordt in de sport. Je legt uit hoe sporters dankzij de wetenschap steeds beter presteren. Je doet een eenvoudige proef over luchtweerstand. Je maakt een verslag met voorblad, uitleg, foto’s en bronnen.",
    bereikt: ["Informatie zoeken in verschillende bronnen", "Wetenschappelijke begrippen toepassen: gewicht, luchtweerstand, wrijving, demping, isolatie", "Een oorzaak-gevolgverband uitleggen", "Een eenvoudige proef uitvoeren en besluiten", "Een verzorgd verslag met bronvermelding maken"],
    toepassen: ["Plannen: vijf lesuren goed verdelen", "Organiseren: informatie ordenen per materiaal", "Nauwkeurig werken: correcte bronvermelding", "Kritisch denken: reclame of wetenschap?"],
    materiaal: ["Werkbundel", "Een Chromebook met internet en je schoolaccount", "Twee A4-bladen en een stopwatch (gsm) voor de proef", "Folders of tijdschriften van sportwinkels (als je die hebt)"],
    oplossing: "Op deze site, bij ‘Controleer je oplossing’. Je coach beoordeelt je verslag met het rooster.",
    product: "Een verslag met voorblad, uitleg, foto’s en bronnen (en eventueel een presentatie)",
    links: [["Google Documenten", "https://docs.google.com/document"], ["Google Presentaties", "https://docs.google.com/presentation"]],
    leerkaarten: [
      ["Gewicht", "Hoe lichter het materiaal, hoe minder kracht je nodig hebt om te versnellen of te klimmen. Carbon is sterk en heel licht. Daarom zijn racefietsen en spikes vaak van carbon."],
      ["Luchtweerstand en waterweerstand", "Lucht en water remmen je af. Hoe groter en ruwer het oppervlak dat je naar voren richt, hoe meer weerstand. Een gestroomlijnde vorm, een gladde stof en een kleine houding helpen. Denk aan een tijdritfiets, een aerodynamische helm of een zwempak."],
      ["Wrijving en grip", "Wrijving houdt je vast op de grond. Spikes en het profiel van een bergschoen geven grip. Op andere plaatsen wil je net weinig wrijving, zoals bij een kajak in het water."],
      ["Demping en terugvering", "Schuim in loopschoenen vangt de klap van elke stap op. Nieuwe schuimen en een carbonplaat geven een deel van die energie terug. Zo loop je zuiniger."],
      ["Isoleren en ademen", "Een goede jas houdt regen buiten en laat zweetdamp naar buiten. Dat doet een membraan met piepkleine gaatjes: groot genoeg voor damp, te klein voor waterdruppels. Wol en dons houden lucht vast en isoleren zo."],
      ["Wetenschap of reclame?", "Fabrikanten beloven veel. Zoek bewijs: een test, een cijfer, een onderzoek. Vergelijk met andere bronnen. Soms is een regel strenger dan de techniek: sommige superpakken en schoenen werden verboden."]
    ],
    invalshoek: { intro: "Kies in lesuur 1 je thema.", keuzes: [
      ["Wielrennen", "Ossenkopsturen, carbon frames, helmen, kledij …"],
      ["Watersport", "Zwem- en waterpolopakken, zeilen, kajak …"],
      ["Atletiek", "Speciale loopschoenen, spikes, kledij …"],
      ["Wandelen en trekking", "Bergschoenen, sokken, regenkledij, slaapzakken, tenten, rugzakken …"]] },
    nogTijd: "Maak een presentatie over je onderwerp. Stel ze voor aan een medeleerling of aan je coach.",
    test: [
      ["Waarom zijn racefietsen vaak van carbon?", ["Carbon is sterk en heel licht", "Carbon is goedkoop", "Carbon is zacht"], 0, "Minder gewicht = minder kracht nodig."],
      ["Welk vel papier valt het snelst?", ["Een verfrommeld vel", "Een plat vel", "Ze vallen altijd even snel"], 0, "Een prop heeft minder luchtweerstand."],
      ["Wat doet een ademend membraan in een regenjas?", ["Regen buiten houden en zweetdamp doorlaten", "Warmte maken", "De jas zwaarder maken"], 0, "De gaatjes zijn te klein voor druppels."],
      ["Wat geeft een spike aan een atleet?", ["Meer grip", "Minder gewicht", "Meer demping"], 0, "Spikes haken in de baan."]
    ],
    controle: [
      ["Hoe heet de kracht van lucht die een fietser afremt?", "tekst", ["luchtweerstand", "de luchtweerstand"], "Kijk op de leerkaart."],
      ["Welk licht en sterk materiaal gebruikt men voor racefietsen?", "tekst", ["carbon", "koolstofvezel"], "Kijk op de leerkaart ‘Gewicht’."],
      ["Wat vangt in een loopschoen de klap van elke stap op?", "tekst", ["schuim", "het schuim", "demping"], "Kijk op de leerkaart ‘Demping en terugvering’."]
    ],
    criteria: ["Logboek elk lesuur ingevuld", "Creatief voorblad met naam, klas, datum, schooljaar, titel en thema", "Duidelijke uitleg: wetenschap → materiaal → betere prestatie", "Proef uitgevoerd en verwerkt", "Passende foto’s met bron", "Correcte bronvermelding"],

    lessen: CSF.lessenN({
      t1: "Thema kiezen en verkennen",
      weet: "Noteer welke sportmaterialen jij gebruikt. Waarom zijn ze goed?",
      opdracht: "Lees de opdracht. Kies je thema.",
      ideeen: "Som minstens 5 materialen of kledingstukken op uit je thema.",
      start: "Werkblad 1: kies drie materialen. Zoek bij elk welke wetenschap erachter zit. Gebruik de leerkaarten.",
      midden: [
        { titel: "Informatie zoeken", werk: "Werkblad 2: zoek informatie in boeken, op internet, in folders of in een sportwinkel. Noteer je bronnen." },
        { titel: "Proef: luchtweerstand", werk: "Werkblad 3: doe de proef met vallende bladen. Leg het verband met je thema." },
        { titel: "Het verslag", werk: "Werkblad 4: schrijf je verslag in Google Documenten: voorblad, uitleg, foto’s en bronnen." }
      ],
      laatste: { titel: "Afwerken en voorstellen", werk: "Werk je verslag af met de checklist. Deel het met je coach. Maak eventueel een presentatie.", presenteer: "Stel je onderwerp in 2 minuten voor aan een medeleerling of aan je coach." }
    }),

    werkbundel: [
      { les: 1, html: `
        ${h.kader("De opdracht", "Toon aan dat <b>wetenschappelijk onderzoek</b> gebruikt wordt in de sport. Leg uit hoe sporters dankzij de wetenschap steeds beter presteren. Kies een thema: wielrennen, watersport, atletiek of wandelen en trekking. Maak een verslag met een creatief voorblad, uitleg, foto’s en bronnen.")}
        <p><b>Voorbeeld:</b> door een carbon frame weegt de fiets minder. Daardoor kan de wielrenner sneller fietsen.</p>
        <h3>Wat weet ik al? Mijn sportmateriaal</h3>${h.lijnen(2)}
        <h2>Werkblad 1 · Mijn thema</h2>
        <p>&#9744; wielrennen &nbsp; &#9744; watersport &nbsp; &#9744; atletiek &nbsp; &#9744; wandelen en trekking</p>
        <h3>Materialen en kledij in mijn thema</h3>${h.lijnen(3)}
        <h3>Drie materialen en de wetenschap erachter</h3>
        <table><tr><th style="width:24%">Materiaal</th><th style="width:26%">Wetenschap (leerkaart)</th><th>Waardoor presteert de sporter beter?</th></tr>${[1, 2, 3].map(function () { return '<tr><td style="height:60px"></td><td class="klein">gewicht · weerstand · wrijving · demping · isolatie</td><td></td></tr>'; }).join("")}</table>` },
      { les: 2, html: `
        <h2>Werkblad 2 · Informatie zoeken</h2>
        <p>Zoek informatie in boeken, op internet, in folders, kranten of tijdschriften. Je kan ook in een sportwinkel vragen stellen.</p>
        ${fiche([["Materiaal 1: wat is nieuw? Hoe werkt het? Welk effect?", 90], ["Materiaal 2", 90], ["Materiaal 3", 90], ["Een cijfer of een record dat de verbetering toont", 50]])}
        ${h.leerkaart("Leerkaart · Wetenschap of reclame?", "<p>Fabrikanten beloven veel. Zoek bewijs: een test, een cijfer, een onderzoek. Vergelijk met andere bronnen. Soms werden superpakken of schoenen zelfs verboden.</p>")}
        <h3>Mijn bronnen</h3>
        <table><tr><th style="width:7%">Nr.</th><th>Website (volledige link), boek of folder</th></tr>${[1, 2, 3, 4].map(function (n) { return '<tr><td style="text-align:center">' + n + '</td><td style="height:30px"></td></tr>'; }).join("")}</table>` },
      { les: 3, html: `
        <h2>Werkblad 3 · Proef: luchtweerstand</h2>
        ${h.leerkaart("Leerkaart · Luchtweerstand", "<p>Lucht remt je af. Hoe groter het oppervlak dat je naar voren richt, hoe meer weerstand. Een gestroomlijnde vorm en een kleine houding helpen.</p>")}
        <p><b>Onderzoeksvraag:</b> valt een verfrommeld blad sneller dan een plat blad?</p>
        <p><b>Mijn voorspelling:</b> ________________________________________________________________</p>
        <p><b>Werkwijze:</b> neem twee gelijke A4-bladen. Frommel er één tot een prop. Laat ze tegelijk vallen van dezelfde hoogte (bijvoorbeeld 2 meter). Meet de valtijd met een stopwatch. Doe het drie keer.</p>
        <table><tr><th>Poging</th><th>Plat blad (s)</th><th>Verfrommeld blad (s)</th></tr>${["1", "2", "3", "Gemiddelde"].map(function (x) { return '<tr><td>' + x + '</td><td style="height:30px"></td><td></td></tr>'; }).join("")}</table>
        ${fiche([["Mijn besluit", 50], ["Welk verband zie ik met mijn thema? (houding, helm, pak, vorm)", 70]])}` },
      { les: 4, html: `
        <h2>Werkblad 4 · Mijn verslag</h2>
        <p>Schrijf je verslag in Google Documenten. Gebruik deze opbouw.</p>
        ${vink(["<b>Voorblad:</b> naam, klas, datum, schooljaar, titel en thema. Maak het creatief.", "<b>Inleiding:</b> waarom koos ik dit thema?", "<b>Uitleg per materiaal:</b> wat is nieuw, welke wetenschap zit erachter, hoe presteert de sporter beter?", "<b>Mijn proef:</b> vraag, werkwijze, resultaten en besluit.", "<b>Foto’s:</b> minstens één per materiaal, met bron.", "<b>Besluit:</b> hoe helpt de wetenschap de sport vooruit?", "<b>Bronvermelding:</b> volledige links van de websites."])}
        <h3>Schets van mijn voorblad</h3>
        ${h.vak("Voorblad", 260)}` },
      { les: 5, html: `
        <h2>Afwerken en voorstellen</h2>
        <h3>Checklist</h3>
        ${vink(["Mijn voorblad is volledig en creatief.", "Bij elk materiaal leg ik het verband: wetenschap → betere prestatie.", "Ik gebruik de juiste begrippen: gewicht, weerstand, wrijving, demping, isolatie.", "Elke foto heeft een bron.", "Mijn bronnenlijst is volledig.", "Ik las mijn tekst na op spelling.", "Ik deelde mijn verslag met mijn coach."])}
        <h3>Extra: mijn presentatie</h3>
        <table><tr><th style="width:8%">Dia</th><th>Inhoud</th></tr>${[1, 2, 3, 4, 5, 6].map(function (n) { return '<tr><td style="text-align:center">' + n + '</td><td style="height:28px"></td></tr>'; }).join("")}</table>
        ${fiche([["Wat leerde ik bij?", 54], ["Welk materiaal verraste mij het meest? Waarom?", 54]])}` }
    ]
  });
})();
