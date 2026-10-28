/* Nederlands · Start to podcast
   Bron: de Bookwidget ‘PODCAST’ van de werkgroep, uitgewerkt tot 8 lesuren.
   Stappenplan: de handleiding ‘How to: podcast’ van Nieuws in de Klas. */
(function () {
  var h = CSF.h;
  function vink(lijst) { return "<table>" + lijst.map(function (x) { return '<tr><td style="width:7%;text-align:center;font-size:13pt">&#9744;</td><td>' + x + "</td></tr>"; }).join("") + "</table>"; }
  function fiche(lijst) { return '<table class="fiche">' + lijst.map(function (v) { return '<tr><td class="lbl">' + v[0] + '</td><td style="height:' + (v[1] || 30) + 'px">' + (v[2] || "") + "</td></tr>"; }).join("") + "</table>"; }

  CSF.project({
    id: "nederlands-start-to-podcast",
    soort: "vak",
    vak: "Nederlands",
    jaar: "1e en 2e jaar",
    tijd: "8 lesuren",
    sterren: 5,
    naam: "Start to podcast",
    kort: "Ontwikkel zelf een podcast van A tot Z.",
    voorWie: "Voor leerlingen met een vlotte babbel over een zelfgekozen onderwerp.",
    omschrijving: "Het aantal podcasts groeit al jaren sterk. Podcasts over de meest uiteenlopende onderwerpen schieten als paddenstoelen uit de grond. Voeg jij binnenkort je eigen podcast toe aan dat rijtje? Kies een onderwerp. Doe research. Nodig misschien zelfs een expert uit. Jouw podcast, jouw regels! Wij luisteren alvast mee… 🎙️",
    doel: "Je maakt een eigen podcastaflevering voor een doelgroep naar keuze. Je kiest een soort podcast. Je doet research en schrijft een script. Je neemt je podcast op, monteert hem en laat hem beluisteren.",
    bereikt: ["Soorten podcasts herkennen en vergelijken", "Informatie opzoeken en ordenen", "Een script schrijven voor een doelgroep", "Goede vragen stellen voor een interview", "Duidelijk en boeiend spreken", "Een audio-opname maken en monteren"],
    toepassen: ["Plannen: acht lesuren goed verdelen", "Organiseren: een script met een vaste opbouw", "Flexibel denken: bijsturen na een proefopname", "Spreekangst overwinnen"],
    materiaal: ["Werkbundel", "Een Chromebook of gsm met microfoon en hoofdtelefoon", "Een gratis opname- en montage-app (bijvoorbeeld BandLab, met je schoolaccount)", "Een rustig lokaal om op te nemen"],
    oplossing: "Je podcast heeft geen vaste oplossing. Laat hem beluisteren door een testluisteraar. Je coach beoordeelt hem met het rooster.",
    product: "Een podcastaflevering van 5 tot 8 minuten met intro, inhoud en outro",
    links: [["Stappenplan: How to podcast (Nieuws in de Klas, pdf)", "https://www.nieuwsindeklas.be/wp-content/uploads/2022/02/NIK_HowTo_Podcast_handleiding_A4_LR.pdf"], ["Met welke apps kan je gratis podcasts beluisteren?", "https://podcast-fabriek.nl/blog/met-welke-apps-kan-ik-gratis-podcasts-luisteren"], ["BandLab: gratis opnemen en monteren in je browser", "https://www.bandlab.com"]],
    leerkaarten: [
      ["Soorten podcasts", "Een <b>tafelgesprek</b>: twee of meer mensen praten over een onderwerp. Een <b>interview</b>: je stelt vragen aan iemand. Een <b>reportage</b>: je gaat op pad en laat geluiden en mensen horen. Een <b>expert aan het woord</b>: iemand vertelt wat hij weet. Een <b>hoorspel</b>: een verhaal met stemmen en geluiden. Je kan ook combineren.",
        CSF.lk.tabel(['Soort', 'Wie hoor je?', 'Voorbeeldidee'], [['tafelgesprek', '2 of 3 vrienden', 'Wat vinden we van de nieuwe schoolregels?'], ['interview', 'jij + een gast', 'Een gesprek met de conciërge van de school'], ['reportage', 'jij op pad, met geluiden', 'Een ochtend op de markt'], ['expert aan het woord', 'iemand die veel weet', 'Een imker vertelt over bijen'], ['hoorspel', 'personages en geluiden', 'Een spookverhaal in het oude kasteel']]) +
CSF.lk.vb('<p>Een reportage over de dierentuin, met een kort interview met een verzorger. Twee soorten in één aflevering.</p>', 'Combineren') +
CSF.lk.tip('Kies een onderwerp waar jij echt nieuwsgierig naar bent. Dat hoort je publiek.')],
      ["De opbouw van een aflevering", "Een <b>intro</b> met een herkenbaar muziekje (een jingle). Je stelt jezelf en het onderwerp voor. Daarna volgt de <b>inhoud</b> in een paar duidelijke delen. Je sluit af met een <b>outro</b>: een korte samenvatting, een bedanking en een vooruitblik.",
        CSF.lk.fig('<svg viewBox="0 0 440 110" role="img" aria-label="De opbouw van een aflevering op een tijdlijn"><rect x="20" y="30" width="60" height="36" fill="#FCAF17"/><rect x="80" y="30" width="280" height="36" fill="#3BC1C5"/><line x1="173" y1="30" x2="173" y2="66" stroke="#fff" stroke-width="2"/><line x1="266" y1="30" x2="266" y2="66" stroke="#fff" stroke-width="2"/><rect x="360" y="30" width="60" height="36" fill="#1d1d1b"/><g font-size="12" text-anchor="middle" fill="#fff" font-weight="700"><text x="50" y="53">intro</text><text x="126" y="53">deel 1</text><text x="219" y="53">deel 2</text><text x="313" y="53">deel 3</text><text x="390" y="53">outro</text></g><g font-size="11" text-anchor="middle"><text x="50" y="86">± 30 s</text><text x="220" y="86">de inhoud</text><text x="390" y="86">± 30 s</text></g><text x="220" y="20" font-size="11" text-anchor="middle" fill="#555">♪ jingle aan het begin · samenvatting en bedanking op het einde</text></svg>') +
CSF.lk.vb('<p><i>“Hallo en welkom bij ‘Achter de schermen’, de podcast van klas 1C. Ik ben Noor, en vandaag ontdekken we wat er ’s nachts gebeurt in een bakkerij.”</i></p>', 'Een intro') +
CSF.lk.tip('Zeg in de intro altijd wie je bent en waar de aflevering over gaat. Dan blijven luisteraars hangen.')],
      ["Een goed script", "Een script is je draaiboek. Noteer per deel wie spreekt, wat er gezegd wordt en hoe lang het duurt. Schrijf de intro en de outro woord voor woord. Noteer voor de rest kernwoorden. Zo klink je natuurlijk.",
        CSF.lk.tabel(['Deel', 'Wie?', 'Wat?', 'Tijd'], [['intro', 'Noor', '<i>volledig uitgeschreven</i> “Hallo en welkom bij …”', '0:30'], ['deel 1', 'Noor + bakker', 'kernwoorden: om 3 uur op, deeg, oven', '2:00'], ['deel 2', 'Sam', 'kernwoorden: favoriete brood, weetje', '1:30'], ['outro', 'Noor', '<i>volledig uitgeschreven</i> “Dat was het voor vandaag …”', '0:30']]) +
CSF.lk.punten(['Kernwoorden in plaats van volzinnen: zo klink je niet alsof je voorleest.', 'Tel de tijden op. Zo weet je hoe lang je aflevering wordt.', 'Noteer ook waar je een geluid of muziek wil.']) +
CSF.lk.tip('Lees je script één keer hardop met een timer. Pas de tijden aan.')],
      ["Goede interviewvragen", "Stel open vragen: wie, wat, waar, wanneer, waarom, hoe. Vermijd ja-neevragen. Begin met een makkelijke vraag. Luister goed en stel een vervolgvraag. Vraag eerst toestemming om op te nemen.",
        CSF.lk.tabel(['Gesloten vraag ✗', 'Open vraag ✓'], [['Vind je je werk leuk?', 'Wat vind je het leukste aan je werk?'], ['Sta je vroeg op?', 'Hoe ziet een gewone werkdag eruit?'], ['Was het moeilijk?', 'Wat was het moeilijkste moment, en hoe loste je het op?']]) +
CSF.lk.vb('<p>Gast: <i>“Het moeilijkste was mijn eerste dag.”</i></p><p>Jij: <i>“Wat gebeurde er die dag precies?”</i></p>', 'Een vervolgvraag') +
CSF.lk.stappen(['Vraag toestemming om op te nemen.', 'Begin met een makkelijke vraag om op te warmen.', 'Luister echt. Stel een vervolgvraag als iets interessant is.', 'Bedank je gast aan het einde.']) +
CSF.lk.tip('Schrijf meer vragen op dan je nodig hebt. Sommige vragen worden al beantwoord voor je ze stelt.')],
      ["Je stem", "Spreek rustig en duidelijk. Glimlach: dat hoor je. Wissel van toon. Pauzeer na een belangrijke zin. Hou je microfoon op een handbreedte van je mond. Neem op in een rustige ruimte met zachte spullen rond je.",
        CSF.lk.fig('<svg viewBox="0 0 420 130" role="img" aria-label="De juiste afstand tot de microfoon"><circle cx="90" cy="60" r="40" fill="#f2d3b0" stroke="#1d1d1b" stroke-width="2"/><path d="M118 70 q8 4 10 12" stroke="#1d1d1b" stroke-width="2" fill="none"/><circle cx="105" cy="48" r="4" fill="#1d1d1b"/><rect x="230" y="40" width="30" height="46" rx="15" fill="#555"/><line x1="245" y1="86" x2="245" y2="115" stroke="#555" stroke-width="5"/><g stroke="#FCAF17" stroke-width="2"><line x1="135" y1="72" x2="225" y2="72"/><line x1="135" y1="66" x2="135" y2="78"/><line x1="225" y1="66" x2="225" y2="78"/></g><text x="180" y="62" font-size="12" text-anchor="middle" font-weight="700">± 10 cm</text><text x="320" y="55" font-size="12">te dicht: ploffen</text><text x="320" y="72" font-size="12">te ver: galm</text></svg>') +
CSF.lk.punten(['Een kast vol kleren, een bed of gordijnen dempen galm. Een lege klas of badkamer galmt.', 'Spreek iets trager dan normaal en articuleer.', 'Drink een slokje water voor je begint.']) +
CSF.lk.tip('Neem 10 seconden proef op en luister met oortjes. Hoor je galm of geruis? Zoek een andere plek.')],
      ["Muziek en geluid", "Gebruik enkel muziek en geluiden die je mag gebruiken: zelf gemaakt of rechtenvrij. Vermeld de bron in je outro. Zet de muziek zachter als er iemand praat.",
        CSF.lk.fig('<svg viewBox="0 0 440 130" role="img" aria-label="De muziek gaat zachter als iemand praat"><line x1="20" y1="100" x2="420" y2="100" stroke="#1d1d1b"/><path d="M20 30 L90 30 L110 75 L330 75 L350 30 L420 30" fill="none" stroke="#FCAF17" stroke-width="4"/><rect x="115" y="85" width="210" height="10" fill="#3BC1C5"/><g font-size="12"><text x="25" y="22">muziek luid</text><text x="160" y="68">muziek zacht</text><text x="175" y="120">iemand praat</text><text x="355" y="22">muziek luid</text></g></svg>', 'Als er gesproken wordt, zet je de muziek zacht. Zo blijft de stem verstaanbaar.') +
CSF.lk.tabel(['Mag ✓', 'Mag niet ✗'], [['muziek die je zelf maakte', 'een liedje van de radio of Spotify'], ['rechtenvrije muziek, met bron', 'muziek van YouTube zonder vrije licentie']]) +
CSF.lk.vb('<p><i>“De muziek in deze aflevering is ‘Zonnige dag’ van … via de YouTube Audio Library.”</i></p>', 'Bron vermelden in je outro') +
CSF.lk.tip('Geluiden kan je zelf opnemen: een deur, voetstappen, regen. Dat klinkt vaak het echtst.')]
    ],
    invalshoek: { intro: "Kies in lesuur 1 je doelgroep.", keuzes: [
      ["Kinderen van de lagere school", "Een vrolijke, eenvoudige podcast. Korte delen en veel afwisseling."],
      ["Klasgenoten of leeftijdsgenoten", "Een podcast over wat jongeren bezighoudt."],
      ["Senioren", "Een rustige podcast. Duidelijk spreken en meer uitleg."]] },
    nogTijd: "Ontwerp een coverafbeelding voor je podcast. Schrijf er een korte beschrijving bij van drie zinnen, zoals in een podcastapp.",
    test: [
      ["Welke soort podcast vertelt een verhaal met stemmen en geluiden?", ["Een hoorspel", "Een tafelgesprek", "Een interview"], 0, "Een hoorspel is een verhaal om naar te luisteren."],
      ["Welke vraag is een open vraag?", ["Waarom koos je voor dit beroep?", "Vind je je werk leuk?", "Werk je hier al lang?"], 0, "Een open vraag kan je niet met ja of nee beantwoorden."],
      ["Wat hoort in een outro?", ["Een samenvatting en een bedanking", "Een nieuw onderwerp", "Een lange uitleg"], 0, "De outro sluit af."],
      ["Welke muziek mag je gebruiken?", ["Zelfgemaakte of rechtenvrije muziek", "Elk liedje van Spotify", "Muziek van de radio"], 0, "Muziek is beschermd door auteursrecht."]
    ],
    controle: [
      ["Hoe heet het herkenbare muziekje aan het begin van een podcast?", "tekst", ["jingle", "een jingle", "de jingle"], "Kijk op de leerkaart ‘De opbouw van een aflevering’."],
      ["Hoe heet het draaiboek van je podcast?", "tekst", ["script", "het script", "een script"], "Kijk op de leerkaart ‘Een goed script’."],
      ["Op welke afstand hou je de microfoon van je mond? (een …)", "tekst", ["handbreedte", "een handbreedte"], "Kijk op de leerkaart ‘Je stem’."]
    ],
    criteria: ["Logboek elk lesuur ingevuld", "Podcast past bij de gekozen doelgroep", "Volledig script met intro, inhoud en outro", "Inhoud correct en goed onderzocht, met bronnen", "Duidelijk en boeiend gesproken", "Opname verzorgd: verstaanbaar, gemonteerd, muziek rechtenvrij", "Lengte 5 tot 8 minuten"],

    lessen: CSF.lessenN({
      t1: "Inspiratie: soorten podcasts",
      weet: "Noteer welke podcasts je kent of beluistert.",
      opdracht: "Lees de opdracht. Kies je doelgroep.",
      ideeen: "Brainstorm minstens 5 onderwerpen voor je podcast.",
      start: "Werkblad 1: beluister twee korte podcasts van een verschillende soort. Vergelijk ze.",
      midden: [
        { titel: "Mijn concept", werk: "Werkblad 2: kies je onderwerp en je soort podcast. Bedenk een naam. Verdeel de rollen als je met meer bent." },
        { titel: "Research", werk: "Werkblad 3: zoek informatie over je onderwerp. Noteer je bronnen. Bereid je interviewvragen voor." },
        { titel: "Het script (1)", werk: "Werkblad 4: open het stappenplan van Nieuws in de Klas. Schrijf de intro en de opbouw van je aflevering." },
        { titel: "Het script (2) en je stem", werk: "Werk je script af met de outro. Oefen je tekst luidop. Zoek rechtenvrije muziek voor je jingle." },
        { titel: "Opnemen", werk: "Werkblad 5: maak een proefopname. Luister ze na. Neem daarna je podcast op." },
        { titel: "Monteren", werk: "Knip fouten en lange stiltes weg. Voeg je jingle en geluiden toe. Laat een testluisteraar luisteren." }
      ],
      laatste: { titel: "Publiceren en evalueren", werk: "Werkblad 6: verwerk de feedback. Bewaar je podcast als mp3. Deel hem met je coach via Smartschool.", presenteer: "Laat je coach of je doelgroep naar je podcast luisteren. Vertel wat je het moeilijkst vond." }
    }),

    werkbundel: [
      { les: 1, html: `
        ${h.kader("De opdracht", "Maak een eigen <b>podcastaflevering</b> van 5 tot 8 minuten. Kies je doelgroep en je soort podcast. Doe research en schrijf een script. Neem je podcast op en monteer hem. Laat hem beluisteren.")}
        ${h.leerkaart("Leerkaart · Soorten podcasts", "<ul><li><b>Tafelgesprek:</b> twee of meer mensen praten over een onderwerp.</li><li><b>Interview:</b> je stelt vragen aan iemand.</li><li><b>Reportage:</b> je gaat op pad en laat geluiden en mensen horen.</li><li><b>Expert aan het woord:</b> iemand vertelt wat hij weet.</li><li><b>Hoorspel:</b> een verhaal met stemmen en geluiden.</li></ul>")}
        <h3>Wat weet ik al? Podcasts die ik ken</h3>${h.lijnen(2)}
        <h2>Werkblad 1 · Luister en vergelijk</h2>
        <p>Beluister twee korte podcasts van een verschillende soort, bijvoorbeeld via Spotify of de app van je gsm.</p>
        <table><tr><th style="width:30%"></th><th>Podcast 1</th><th>Podcast 2</th></tr>
        ${["Naam", "Soort podcast", "Doelgroep", "Hoe begint hij?", "Wat spreekt me aan?", "Wat zou ik anders doen?"].map(function (x) { return '<tr><td><b>' + x + '</b></td><td style="height:32px"></td><td></td></tr>'; }).join("")}</table>` },
      { les: 1, html: `
        <h3>Brainstorm: onderwerpen voor mijn podcast</h3>
        <table><tr><th style="width:7%">Nr.</th><th>Onderwerp</th><th style="width:30%">Soort podcast</th></tr>
        ${[1, 2, 3, 4, 5].map(function (n) { return '<tr><td style="text-align:center">' + n + '</td><td style="height:30px"></td><td></td></tr>'; }).join("")}</table>
        <h3>Wat heb ik allemaal nodig?</h3>
        <p class="klein">Bij een interview: vragen en een gast. Bij een hoorspel: een leuk verhaal en stemmen. Bij een reportage: geluiden van buiten. Altijd: een opname- en montage-app.</p>
        ${h.lijnen(4)}
        <h3>Wat lukte vandaag? Wat nog niet?</h3>${h.lijnen(2)}` },
      { les: 2, html: `
        <h2>Werkblad 2 · Mijn concept</h2>
        ${fiche([["Naam van mijn podcast", 30], ["Doelgroep", 30, "kinderen lagere school / klasgenoten / leeftijdsgenoten / senioren"], ["Soort podcast", 30], ["Onderwerp van deze aflevering", 40], ["Waarom past dit bij mijn doelgroep?", 54], ["Wie spreekt er? Welke rol?", 54], ["Gast of expert (als je die uitnodigt)", 40]])}
        ${h.leerkaart("Leerkaart · De opbouw van een aflevering", "<p>Een <b>intro</b> met een herkenbare <b>jingle</b>: je stelt jezelf en het onderwerp voor. Daarna de <b>inhoud</b> in een paar duidelijke delen. Tot slot een <b>outro</b>: samenvatting, bedanking en vooruitblik.</p>")}
        ${h.vak("Schets: de delen van mijn aflevering", 170)}` },
      { les: 3, html: `
        <h2>Werkblad 3 · Research</h2>
        <p>Zoek informatie over je onderwerp. Noteer de belangrijkste weetjes en je bronnen.</p>
        <table><tr><th>Wat leerde ik?</th><th style="width:36%">Bron (website, boek, persoon)</th></tr>${[1, 2, 3, 4, 5, 6].map(function () { return '<tr><td style="height:36px"></td><td></td></tr>'; }).join("")}</table>
        ${h.leerkaart("Leerkaart · Goede interviewvragen", "<p>Stel <b>open vragen</b>: wie, wat, waar, wanneer, waarom, hoe. Vermijd ja-neevragen. Begin met een makkelijke vraag. Luister goed en stel een vervolgvraag. Vraag eerst toestemming om op te nemen.</p>")}
        <h3>Mijn vragen (voor een interview of als rode draad)</h3>
        <ol style="line-height:2.2">${[1, 2, 3, 4, 5, 6].map(function () { return "<li>____________________________________________________________________________</li>"; }).join("")}</ol>` },
      { les: 4, html: `
        <h2>Werkblad 4 · Mijn script</h2>
        ${h.leerkaart("Leerkaart · Een goed script", "<p>Noteer per deel wie spreekt, wat er gezegd wordt en hoe lang het duurt. Schrijf de intro en de outro woord voor woord. Noteer voor de rest kernwoorden. Zo klink je natuurlijk.</p>")}
        <h3>Intro (woord voor woord)</h3>${h.lijnen(4)}
        <h3>Opbouw</h3>
        <table><tr><th style="width:12%">Tijd</th><th style="width:16%">Wie?</th><th>Wat? (kernwoorden)</th><th style="width:18%">Geluid of muziek</th></tr>
        ${["0:00", "", "", "", "", ""].map(function (t) { return '<tr><td style="height:40px">' + t + "</td><td></td><td></td><td></td></tr>"; }).join("")}</table>
        <h3>Outro (woord voor woord)</h3>${h.lijnen(3)}` },
      { les: 5, html: `
        <h2>Je stem en je muziek</h2>
        ${h.leerkaart("Leerkaart · Je stem", "<p>Spreek rustig en duidelijk. Glimlach: dat hoor je. Wissel van toon. Pauzeer na een belangrijke zin. Hou je microfoon op een <b>handbreedte</b> van je mond. Neem op in een rustige ruimte met zachte spullen rond je.</p>")}
        ${h.leerkaart("Leerkaart · Muziek en geluid", "<p>Gebruik enkel muziek die je mag gebruiken: zelf gemaakt of <b>rechtenvrij</b>. Vermeld de bron in je outro. Zet de muziek zachter als er iemand praat.</p>")}
        ${fiche([["Mijn jingle (titel en bron)", 40], ["Andere geluiden (en bron)", 54]])}
        <h3>Oefenen: lees je intro luidop</h3>
        ${vink(["Ik sprak rustig en duidelijk.", "Ik hield pauzes na belangrijke zinnen.", "Ik wisselde van toon.", "Een medeleerling begreep alles."])}
        <h3>Tips van mijn medeleerling</h3>${h.lijnen(3)}` },
      { les: 6, html: `
        <h2>Werkblad 5 · Opnemen en monteren</h2>
        <h3>Proefopname (30 seconden)</h3>
        ${vink(["De ruimte is rustig.", "Het volume is goed: niet te stil, niet te luid.", "Ik ben goed verstaanbaar.", "Er is geen storend achtergrondlawaai."])}
        <h3>Opname</h3>
        <table><tr><th style="width:8%">Nr.</th><th>Deel</th><th style="width:20%">Bestandsnaam</th><th style="width:12%">Goed?</th></tr>${[1, 2, 3, 4, 5].map(function (n) { return '<tr><td style="text-align:center">' + n + '</td><td style="height:30px"></td><td></td><td style="text-align:center">&#9744;</td></tr>'; }).join("")}</table>
        <h3>Monteren</h3>
        ${vink(["Ik knipte fouten en lange stiltes weg.", "Ik zette mijn jingle aan het begin en het einde.", "De muziek staat zachter als er iemand praat.", "Mijn podcast duurt 5 tot 8 minuten: ____ min.", "Ik bewaarde mijn podcast als mp3."])}` },
      { les: 7, html: `
        <h2>De testluisteraar</h2>
        <p>Laat iemand uit je doelgroep (of een medeleerling) je podcast beluisteren. Laat hem dit invullen.</p>
        <table style="text-align:center"><tr><th style="text-align:left">Hoe vond je …</th><th>☆</th><th>☆☆</th><th>☆☆☆</th><th>☆☆☆☆</th></tr>
        ${["de inhoud?", "de verstaanbaarheid?", "de afwisseling en het tempo?", "de muziek en de geluiden?", "de lengte?"].map(function (x) { return '<tr><td style="text-align:left">' + x + "</td><td></td><td></td><td></td><td></td></tr>"; }).join("")}</table>
        ${fiche([["Dit vond ik sterk", 60], ["Dit kan beter", 60]])}
        <h3>Dit pas ik nog aan</h3>${h.lijnen(4)}` },
      { les: 8, html: `
        <h2>Werkblad 6 · Publiceren en terugblikken</h2>
        ${vink(["Ik verwerkte de feedback van mijn testluisteraar.", "Mijn podcast staat als mp3 in mijn Google Drive.", "Ik deelde de link met mijn coach via Smartschool.", "In mijn outro staan de bronnen van mijn muziek."])}
        ${fiche([["Waar ben ik het meest trots op?", 60], ["Wat was het moeilijkst? Hoe loste ik het op?", 70], ["Wat zou ik bij een volgende aflevering anders doen?", 70]])}
        <p><b>Presenteren:</b> laat je coach of je doelgroep naar je podcast luisteren. Vertel wat je het moeilijkst vond.</p>` }
    ]
  });
})();
