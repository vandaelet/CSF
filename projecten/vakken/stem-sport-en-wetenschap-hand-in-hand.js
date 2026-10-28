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
      ["Gewicht", "Hoe lichter het materiaal, hoe minder kracht je nodig hebt om te versnellen of te klimmen. Carbon is sterk en heel licht. Daarom zijn racefietsen en spikes vaak van carbon.",
        CSF.lk.tabel(['Materiaal', 'Gewicht', 'Sterkte', 'Voorbeeld'], [['staal', 'zwaar', 'heel sterk', 'stadsfiets'], ['aluminium', 'licht', 'sterk', 'sportfiets'], ['carbon (koolstofvezel)', 'heel licht', 'heel sterk', 'racefiets, hockeystick'], ['hout', 'licht', 'minder sterk', 'oude tennisracket']]) +
CSF.lk.vb('<p>Een renner rijdt een berg op. Hij moet zichzelf én zijn fiets omhoog trekken. Een fiets die 3 kg lichter is, scheelt hem bij elke trap een beetje kracht. Op een lange klim wordt dat veel.</p>') +
CSF.lk.tip('Lichter is niet altijd beter. Een te lichte fiets kan breken of minder stevig sturen. Ingenieurs zoeken het evenwicht.')],
      ["Luchtweerstand en waterweerstand", "Lucht en water remmen je af. Hoe groter en ruwer het oppervlak dat je naar voren richt, hoe meer weerstand. Een gestroomlijnde vorm, een gladde stof en een kleine houding helpen. Denk aan een tijdritfiets, een aerodynamische helm of een zwempak.",
        CSF.lk.fig('<svg viewBox="0 0 440 150" role="img" aria-label="Luchtstroom rond een platte en een gestroomlijnde vorm"><rect x="90" y="45" width="20" height="60" fill="#1d1d1b"/><g fill="none" stroke="#3BC1C5" stroke-width="2"><path d="M10 40 L80 40 Q100 30 120 30 L190 35"/><path d="M10 75 L80 75 Q85 40 100 38"/><path d="M10 110 L80 110 Q100 120 120 120 L190 115"/><path d="M120 60 q12 -8 20 4 q-4 12 -16 6"/><path d="M125 85 q14 -6 18 8 q-6 10 -16 2"/></g><path d="M300 75 Q300 45 340 45 Q400 50 420 75 Q400 100 340 105 Q300 105 300 75Z" fill="#1d1d1b"/><g fill="none" stroke="#3BC1C5" stroke-width="2"><path d="M230 40 Q300 30 340 38 Q400 45 430 60"/><path d="M230 75 L296 75"/><path d="M230 110 Q300 120 340 112 Q400 105 430 90"/></g><g font-size="12" text-anchor="middle"><text x="100" y="140">plat: wervelingen, veel weerstand</text><text x="340" y="140">gestroomlijnd: weinig weerstand</text></g></svg>', 'Hoe vloeiender de lucht rond een vorm stroomt, hoe minder ze remt.') +
CSF.lk.punten(['Hoe sneller je gaat, hoe sterker de luchtweerstand. Bij fietsen boven 30 km/u is ze je grootste tegenstander.', 'Een fietser die laag op zijn stuur ligt, zet een kleiner oppervlak in de wind.', 'In water is de weerstand nog veel groter dan in lucht.']) +
CSF.lk.tip('Steek je hand uit het raam van een rijdende auto (veilig, met een volwassene). Draai je hand plat of rechtop: je voelt het verschil.')],
      ["Wrijving en grip", "Wrijving houdt je vast op de grond. Spikes en het profiel van een bergschoen geven grip. Op andere plaatsen wil je net weinig wrijving, zoals bij een kajak in het water.",
        CSF.lk.tabel(['Veel wrijving nodig', 'Weinig wrijving nodig'], [['spikes op een atletiekpiste', 'de onderkant van een ski of een kajak'], ['de zool van een bergschoen', 'de ketting van een fiets (daarom smeren)'], ['de handschoen van een keeper', 'de bal in een kogellager'], ['magnesium op de handen van een turner', 'het pak van een zwemmer']]) +
CSF.lk.vb('<p>Op ijs glijd je weg met gewone schoenen. Met schaatsen glij je vooruit, maar zijwaarts snijdt het ijzer in het ijs. Zo kies je zelf waar je grip hebt.</p>') +
CSF.lk.tip('Kijk naar het profiel onder je eigen schoenen. Waar zit het diepst? Daar heb je de meeste grip nodig.')],
      ["Demping en terugvering", "Schuim in loopschoenen vangt de klap van elke stap op. Nieuwe schuimen en een carbonplaat geven een deel van die energie terug. Zo loop je zuiniger.",
        CSF.lk.fig('<svg viewBox="0 0 440 150" role="img" aria-label="Een bal stuitert hoger op een veerkrachtige ondergrond"><line x1="20" y1="130" x2="200" y2="130" stroke="#1d1d1b" stroke-width="3"/><rect x="240" y="122" width="180" height="10" fill="#3BC1C5"/><g fill="#FCAF17"><circle cx="70" cy="30" r="10"/><circle cx="150" cy="95" r="10"/><circle cx="290" cy="30" r="10"/><circle cx="370" cy="45" r="10"/></g><g fill="none" stroke="#999" stroke-dasharray="4 4"><path d="M70 40 L110 120 L150 85"/><path d="M290 40 L330 112 L370 55"/></g><g font-size="12" text-anchor="middle"><text x="110" y="148">zachte, dode ondergrond</text><text x="330" y="148">veerkrachtig schuim</text></g></svg>', 'Een goede demping vangt de klap op én geeft een deel van de energie terug.') +
CSF.lk.punten(['Bij elke stap komt een kracht van 2 à 3 keer je lichaamsgewicht op je voet.', 'Schuim dat te zacht is, slorpt energie op. Je loopt dan vermoeiender.', 'Schuim slijt: na honderden kilometers dempt een loopschoen minder.']) +
CSF.lk.tip('Laat een tennisbal vallen op tegels, op een tapijt en op een loopschoen. Waar stuitert hij het hoogst?')],
      ["Isoleren en ademen", "Een goede jas houdt regen buiten en laat zweetdamp naar buiten. Dat doet een membraan met piepkleine gaatjes: groot genoeg voor damp, te klein voor waterdruppels. Wol en dons houden lucht vast en isoleren zo.",
        CSF.lk.fig('<svg viewBox="0 0 480 160" role="img" aria-label="Een ademend membraan laat damp door maar geen druppels"><rect x="40" y="70" width="340" height="16" fill="#FCAF17"/><g fill="#fff"><rect x="80" y="70" width="4" height="16"/><rect x="140" y="70" width="4" height="16"/><rect x="200" y="70" width="4" height="16"/><rect x="260" y="70" width="4" height="16"/><rect x="320" y="70" width="4" height="16"/></g><g fill="#3b82c4"><path d="M100 20 q10 14 0 24 q-10 -10 0 -24Z"/><path d="M230 25 q10 14 0 24 q-10 -10 0 -24Z"/><path d="M300 15 q10 14 0 24 q-10 -10 0 -24Z"/></g><g fill="#9fb7b8"><circle cx="82" cy="110" r="2.5"/><circle cx="82" cy="98" r="2.5"/><circle cx="82" cy="55" r="2.5"/><circle cx="202" cy="112" r="2.5"/><circle cx="202" cy="52" r="2.5"/><circle cx="322" cy="105" r="2.5"/><circle cx="322" cy="58" r="2.5"/></g><g font-size="12"><text x="330" y="40">regen: te groot</text><text x="330" y="130">zweetdamp: klein genoeg</text><text x="40" y="150" fill="#555">buiten boven · lichaam onder</text></g></svg>') +
CSF.lk.punten(['Een waterdruppel is duizenden keren groter dan een dampdeeltje.', 'Dons en wol houden kleine luchtzakjes vast. Stilstaande lucht isoleert goed.', 'Nat dons isoleert bijna niet meer. Daarom heeft een donsjas vaak een waterafstotend laagje.']) +
CSF.lk.tip('Draag bij sporten in de kou meerdere dunne laagjes. Zo kan je er eentje uittrekken als je het warm krijgt.')],
      ["Wetenschap of reclame?", "Fabrikanten beloven veel. Zoek bewijs: een test, een cijfer, een onderzoek. Vergelijk met andere bronnen. Soms is een regel strenger dan de techniek: sommige superpakken en schoenen werden verboden.",
        CSF.lk.vb('<p><b>Reclame:</b> “Met deze schoen loop je 4% zuiniger!”</p><p><b>Vragen die je stelt:</b> Wie deed die test? Hoeveel lopers deden mee? Testte een onafhankelijk labo het ook? Wat zeggen andere bronnen?</p>', 'Een belofte controleren') +
CSF.lk.punten(['<b>Bewijs</b>: een meting, een test met veel deelnemers, een wetenschappelijk artikel.', '<b>Geen bewijs</b>: een bekende sporter die het product draagt, mooie woorden zoals ‘revolutionair’.', 'Een bron die het product zelf verkoopt, is nooit helemaal neutraal.']) +
CSF.lk.tip('Zoek ook naar regels van de sportbond. Wat verboden is, werkte vaak té goed.')]
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
