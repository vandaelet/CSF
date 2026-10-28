/* digiwijs · Mijn blog in Google Sites
   Bron: de opdracht ‘Blog in Google Sites’ van de werkgroep, uitgewerkt tot 6 lesuren.
   Namen van leerkrachten en interne links zijn weggelaten: de site is openbaar. */
(function () {
  var h = CSF.h;
  function vink(lijst) { return "<table>" + lijst.map(function (x) { return '<tr><td style="width:7%;text-align:center;font-size:13pt">&#9744;</td><td>' + x + "</td></tr>"; }).join("") + "</table>"; }
  // Eigen schets: opbouw van een Google Site (wireframe)
  function wireframe() {
    var s = '<svg width="100%" height="190" viewBox="0 0 600 230" font-family="Arial" font-size="13">';
    s += '<rect x="1" y="1" width="598" height="228" fill="#fff" stroke="#111" stroke-width="1.5"/>';
    s += '<rect x="1" y="1" width="598" height="34" fill="#e8f7f7" stroke="#111"/><circle cx="24" cy="18" r="10" fill="#fcaf17"/><text x="42" y="23">logo · naam van de site</text><text x="430" y="23">menu: pagina\'s</text>';
    s += '<rect x="1" y="35" width="598" height="70" fill="#3bc1c5" opacity=".35" stroke="#111"/><text x="300" y="66" text-anchor="middle" font-size="16" font-weight="700">BANNER (koptype) met titel</text><text x="300" y="86" text-anchor="middle">achtergrondafbeelding</text>';
    s += '<rect x="20" y="118" width="270" height="68" fill="none" stroke="#888" stroke-dasharray="4 3"/><text x="155" y="156" text-anchor="middle" fill="#555">tekstvak</text>';
    s += '<rect x="310" y="118" width="270" height="68" fill="none" stroke="#888" stroke-dasharray="4 3"/><text x="445" y="156" text-anchor="middle" fill="#555">afbeelding</text>';
    s += '<rect x="1" y="198" width="598" height="30" fill="#f2f2f2" stroke="#111"/><text x="300" y="218" text-anchor="middle">VOETTEKST: Voornaam Familienaam - Campus Lievegem + schoollogo</text>';
    return s + "</svg>";
  }

  CSF.project({
    id: "digiwijs-blog",
    soort: "vak",
    vak: "digiwijs",
    jaar: "1e en 2e jaar",
    tijd: "6 lesuren",
    sterren: 2,
    voorWie: "Voor leerlingen die graag iets ontwerpen en hun werk willen tonen.",
    naam: "Mijn blog: bouw je eigen website",
    kort: "Bouw een blog in Google Sites. Stel jezelf en je CSF-projecten voor.",
    omschrijving: "Word jij de webdesigner van je eigen blog? 💻 Bouw een website in Google Sites. Stel jezelf voor op de eerste pagina. Toon op de andere pagina's je projecten van de andere vakken. Kies zelf je logo, banner en thema. Publiceer je blog veilig binnen de school.",
    doel: "Je bouwt een website in Google Sites. Je kiest een overzichtelijke opmaak. Je stelt jezelf en je projecten voor met tekst en beeld. Je deelt online enkel wat veilig is. Je publiceert je site en deelt de link via een correct bericht.",
    bereikt: ["Aanmelden in Chrome met je schoolaccount", "Een website maken en instellen in Google Sites", "Een overzichtelijke opmaak kiezen: thema, kleuren, lettertypes", "Tekst en beeld combineren op een webpagina", "Veilig en correct omgaan met persoonlijke gegevens en afbeeldingen", "Een datum noteren volgens de NBN-norm", "Een bericht schrijven volgens de netiquette"],
    toepassen: ["Plannen: zes lesuren goed verdelen", "Organiseren: een duidelijke structuur voor je site", "Nauwkeurig werken: opmaak en spelling", "Zelfstandig problemen oplossen met instructievideo's"],
    materiaal: ["Werkbundel", "Een Chromebook met je SVSL-account", "Foto's of video's van je projecten bij andere vakken"],
    oplossing: "Je blog heeft geen vaste oplossing. Controleer elke pagina met de checklist. Je coach beoordeelt je blog met het rooster.",
    product: "Een gepubliceerde blog in Google Sites met een voorstellingspagina en een pagina per vak",
    links: [["Google Sites", "https://sites.google.com/new"], ["Hulp bij Google Sites (Google)", "https://support.google.com/sites"]],
    leerkaarten: [
      ["Wat is een blog?", "Een blog is een website waarop je regelmatig iets vertelt. Je toont er je werk en je ervaringen. Een blog heeft een vaste opmaak. Elke pagina heeft een duidelijke titel.",
        CSF.lk.fig('<svg viewBox="0 0 420 180" role="img" aria-label="Een blogbericht: titel, datum, foto en tekst"><rect x="90" y="10" width="240" height="160" rx="6" fill="#fff" stroke="#1d1d1b" stroke-width="2"/><text x="105" y="36" font-size="15" font-weight="700">Mijn eerste CSF-project</text><text x="105" y="54" font-size="11" fill="#555">2025-10-14 · door Sam</text><rect x="105" y="64" width="90" height="60" fill="#cdeef0"/><polygon points="110,120 140,90 160,110 175,98 190,120" fill="#3BC1C5"/><g stroke="#9fb7b8" stroke-width="5"><line x1="205" y1="70" x2="315" y2="70"/><line x1="205" y1="84" x2="300" y2="84"/><line x1="205" y1="98" x2="315" y2="98"/><line x1="205" y1="112" x2="280" y2="112"/><line x1="105" y1="140" x2="315" y2="140"/><line x1="105" y1="154" x2="260" y2="154"/></g></svg>', 'Elk bericht heeft een titel, een datum, een beeld en een korte tekst.') +
CSF.lk.punten(['Een blog groeit: je voegt telkens een nieuw bericht toe.', 'Het nieuwste bericht staat meestal bovenaan.', 'Je schrijft in de ik-vorm, over wat jij deed en leerde.']) +
CSF.lk.tip('Schrijf na elk CSF-project een kort bericht: wat maakte je, wat lukte goed, wat zou je anders doen?')],
      ["De onderdelen van een website", "Het logo en de naam staan linksboven. De banner is de brede strook bovenaan met de titel. Het menu toont alle pagina's. De voettekst staat helemaal onderaan.",
        CSF.lk.fig('<svg viewBox="0 0 420 220" role="img" aria-label="De onderdelen van een website"><rect x="60" y="10" width="300" height="200" fill="#fff" stroke="#1d1d1b" stroke-width="2"/><rect x="60" y="10" width="300" height="24" fill="#eef9f9"/><circle cx="76" cy="22" r="8" fill="#FCAF17"/><text x="90" y="26" font-size="11" font-weight="700">Naam</text><g font-size="10"><text x="230" y="26">Home · Projecten · Contact</text></g><rect x="60" y="34" width="300" height="56" fill="#3BC1C5"/><text x="210" y="68" font-size="16" fill="#fff" text-anchor="middle" font-weight="700">BANNER met titel</text><g stroke="#9fb7b8" stroke-width="6"><line x1="80" y1="110" x2="340" y2="110"/><line x1="80" y1="126" x2="320" y2="126"/><line x1="80" y1="142" x2="340" y2="142"/><line x1="80" y1="158" x2="290" y2="158"/></g><rect x="60" y="184" width="300" height="26" fill="#1d1d1b"/><text x="210" y="201" font-size="11" fill="#fff" text-anchor="middle">voettekst</text><g font-size="11" fill="#b37400" font-weight="700"><text x="370" y="26">← menu</text><text x="8" y="26">logo →</text><text x="370" y="135">← inhoud</text></g></svg>') +
CSF.lk.tabel(['Onderdeel', 'Wat staat erin?'], [['logo en naam', 'wie de site maakt'], ['menu', 'een knop naar elke pagina'], ['banner', 'een groot beeld met de titel van de pagina'], ['inhoud', 'je teksten en beelden'], ['voettekst', 'contact, jaartal, bronnen']]) +
CSF.lk.tip('Kijk naar de site van je school of van een club. Zoek alle vijf de onderdelen.')],
      ["Een overzichtelijke opmaak", "Gebruik maximaal 3 kleuren. Gebruik maximaal 3 lettertypes. Zet bij elke tekst een passende afbeelding. Lijn alles netjes uit. Laat witruimte tussen de blokken.",
        CSF.lk.fig('<svg viewBox="0 0 440 170" role="img" aria-label="Een rommelige en een overzichtelijke pagina"><rect x="10" y="10" width="200" height="140" fill="#fff" stroke="#1d1d1b" stroke-width="2"/><rect x="20" y="20" width="80" height="20" fill="#ff4fa3"/><rect x="110" y="18" width="90" height="34" fill="#7ed957"/><rect x="25" y="50" width="70" height="40" fill="#4a6fd1"/><rect x="105" y="62" width="95" height="16" fill="#FCAF17"/><rect x="40" y="96" width="150" height="16" fill="#8e44ad"/><rect x="15" y="118" width="60" height="26" fill="#d9363e"/><text x="140" y="138" font-size="14" font-style="italic" font-family="serif">Tekst!!</text><rect x="230" y="10" width="200" height="140" fill="#fff" stroke="#1d1d1b" stroke-width="2"/><rect x="240" y="20" width="180" height="26" fill="#3BC1C5"/><rect x="240" y="58" width="85" height="55" fill="#eef9f9" stroke="#3BC1C5"/><rect x="335" y="58" width="85" height="55" fill="#eef9f9" stroke="#3BC1C5"/><g stroke="#9fb7b8" stroke-width="5"><line x1="240" y1="126" x2="420" y2="126"/><line x1="240" y1="138" x2="380" y2="138"/></g><text x="110" y="166" font-size="12" text-anchor="middle" fill="#b23b3b" font-weight="700">✗ te veel kleuren, scheef</text><text x="330" y="166" font-size="12" text-anchor="middle" fill="#2e7d4a" font-weight="700">✓ 2 kleuren, netjes uitgelijnd</text></svg>') +
CSF.lk.punten(['Kies één hoofdkleur en één accentkleur. Wit telt niet mee.', 'Eén lettertype voor titels, één voor tekst is genoeg.', 'Laat de blokken op dezelfde lijn beginnen.', 'Witruimte is niet leeg: ze geeft rust.']) +
CSF.lk.tip('Twijfel je? Haal iets weg in plaats van iets toe te voegen.')],
      ["Digiwijs: wat deel je online?", "Vermeld je gemeente, niet je straat of huisnummer. Deel geen telefoonnummer. Toon enkel foto's van anderen met hun toestemming. Gebruik eigen foto's of vrije afbeeldingen. Vermeld de bron van een afbeelding.",
        CSF.lk.tabel(['Mag online ✓', 'Hou je voor jezelf ✗'], [['je voornaam', 'je straat en huisnummer'], ['je gemeente', 'je telefoonnummer'], ['je hobby’s en projecten', 'wachtwoorden en codes'], ['foto’s van je werk', 'foto’s van anderen zonder hun toestemming']]) +
CSF.lk.vb('<p>Een vrije afbeelding mag je gebruiken als je de bron vermeldt. Zet onder het beeld bijvoorbeeld: <i>Foto: Pixabay</i> of <i>Afbeelding: Wikimedia Commons</i>.</p>', 'Bronvermelding') +
CSF.lk.tip('Een afbeelding uit Google Afbeeldingen is niet zomaar vrij. Gebruik liever je eigen foto’s.')],
      ["Datum volgens de NBN-norm", "Schrijf eerst het jaar, dan de maand, dan de dag. Gebruik koppeltekens. Zet een nul voor een getal onder de tien. Voorbeeld: 30 januari 2023 schrijf je als 2023-01-30.",
        CSF.lk.fig('<svg viewBox="0 0 420 110" role="img" aria-label="Een datum volgens de NBN-norm: jaar, maand, dag"><g font-size="22" font-weight="700" text-anchor="middle"><rect x="60" y="20" width="110" height="44" rx="8" fill="#3BC1C5"/><text x="115" y="50" fill="#fff">2025</text><text x="185" y="50">-</text><rect x="200" y="20" width="60" height="44" rx="8" fill="#FCAF17"/><text x="230" y="50" fill="#fff">09</text><text x="275" y="50">-</text><rect x="290" y="20" width="60" height="44" rx="8" fill="#1d1d1b"/><text x="320" y="50" fill="#fff">07</text></g><g font-size="12" text-anchor="middle"><text x="115" y="84">jaar (4 cijfers)</text><text x="230" y="84">maand (2)</text><text x="320" y="84">dag (2)</text></g><text x="210" y="104" font-size="12" text-anchor="middle" fill="#555">7 september 2025</text></svg>', 'Van groot naar klein: jaar, maand, dag.') +
CSF.lk.punten(['Zo sorteren bestanden en berichten vanzelf in de juiste volgorde.', 'Gebruik koppeltekens, geen schuine strepen.', 'Maanden en dagen krijgen altijd 2 cijfers: september = 09.']) +
CSF.lk.tip('Geef ook je bestanden zo een naam: 2025-09-07-blogbericht. Dan staan ze altijd op volgorde.')],
      ["Netiquette in een bericht", "Begin met een aanspreking: ‘Beste …’. Schrijf een duidelijk onderwerp. Leg in een paar zinnen uit wat je stuurt. Sluit beleefd af met een groet en je naam. Lees je bericht na voor je het verstuurt.",
        CSF.lk.vb('<p><b>Onderwerp:</b> Link naar mijn blog</p><p>Beste mevrouw Peeters,</p><p>Hierbij stuur ik u de link naar mijn blog over mijn CSF-projecten. U vindt er ook mijn eerste bericht.</p><p>Met vriendelijke groeten<br>Sam (1C)</p>', 'Voorbeeldbericht') +
CSF.lk.punten(['Een leerkracht spreek je aan met ‘u’.', 'Schrijf niet alles in hoofdletters. DAT LIJKT OP ROEPEN.', 'Geen smileys in een bericht aan een leerkracht.', 'Lees na: is je onderwerp duidelijk? Staat je naam onderaan?']) +
CSF.lk.tip('Voeg de link toe vóór je op ‘verzenden’ klikt. Een vergeten bijlage is de bekendste fout.')]
    ],
    invalshoek: { intro: "Kies in lesuur 1 de stijl van je blog.", keuzes: [
      ["Strak en zakelijk", "Weinig kleuren, rustige lettertypes, veel witruimte."],
      ["Kleurrijk en speels", "Opvallende kleuren, een vrolijk logo en veel beeld."],
      ["Rond een thema", "Een blog in de stijl van je hobby: sport, muziek, natuur …"]] },
    nogTijd: "Voeg een pagina ‘Mijn leerproces’ toe. Vertel welke executieve functie je het meest oefende in CSF. Geef een voorbeeld.",
    test: [
      ["Hoeveel kleuren gebruik je maximaal voor een overzichtelijke site?", ["3", "5", "Zoveel als je wil"], 0, "Weinig kleuren geven rust en overzicht."],
      ["Wat zet je op je voorstellingspagina bij ‘Waar woon ik?’", ["Enkel je gemeente", "Je straat en huisnummer", "Je adres en telefoonnummer"], 0, "Persoonlijke gegevens deel je niet online."],
      ["Waar staat de voettekst?", ["Helemaal onderaan de pagina", "In de banner", "In het menu"], 0, "De voettekst sluit elke pagina af."],
      ["Wie kan je blog bekijken na het publiceren?", ["Enkel mensen van Campus Lievegem", "Iedereen op het internet", "Enkel jij"], 0, "De site is beperkt tot het domein van de school."]
    ],
    controle: [
      ["Schrijf 30 januari 2023 volgens de NBN-norm.", "tekst", ["2023-01-30"], "Jaar-maand-dag, met koppeltekens en een nul voor getallen onder de tien."],
      ["Schrijf 5 maart 2026 volgens de NBN-norm.", "tekst", ["2026-03-05"], "Zet een nul voor de maand en voor de dag."],
      ["Welke titel krijgt je eerste pagina?", "tekst", ["voorstelling"], "Kijk bij de instellingen in lesuur 2."],
      ["Hoeveel lettertypes gebruik je maximaal?", "getal", [3, 0], "Kijk op de leerkaart over opmaak."]
    ],
    criteria: ["Logboek elk lesuur ingevuld", "Site correct ingesteld: naam, logo, banner, voettekst, thema", "Voorstellingspagina volledig met passende afbeeldingen", "Minstens 3 vakpagina's met datum (NBN), taken, gevoel, beeld en opmerkingen", "Overzichtelijke opmaak: max. 3 kleuren en 3 lettertypes", "Geen persoonlijke gegevens; bronnen van afbeeldingen vermeld", "Blog gepubliceerd en link gedeeld volgens de netiquette"],

    lessen: CSF.lessenN({
      t1: "Verkennen en ontwerpen",
      weet: "Noteer welke websites of blogs je vaak bekijkt. Wat vind je er goed aan?",
      opdracht: "Lees de opdracht. Noteer de onderdelen van je eindproduct.",
      ideeen: "Bedenk een naam, een stijl en 3 kleuren voor je blog.",
      start: "Meld je aan in Chrome met je SVSL-account. Bekijk de instructievideo's over Google Sites op de ICT-website van de school (via Smartschool). Werkblad 1: schets je blog.",
      midden: [
        { titel: "Site aanmaken en instellen", werk: "Werkblad 2: maak een lege site. Geef je site een naam. Stel het logo, de banner, de voettekst en het thema in." },
        { titel: "Pagina 1: wie ben ik?", werk: "Werkblad 3: schrijf je voorstelling. Kies passende afbeeldingen. Controleer wat je veilig online zet." },
        { titel: "Pagina's per vak", werk: "Werkblad 4: maak een pagina per vak. Stel er je project voor met datum, taken, gevoel, beeld en opmerkingen." },
        { titel: "Afwerken en opmaak", werk: "Werk je vakpagina's af. Controleer de opmaak van elke pagina met de checklist. Vermeld de bron van elke afbeelding." }
      ],
      laatste: { titel: "Publiceren en delen", werk: "Werkblad 5: publiceer je blog binnen de school. Kopieer de link. Stuur hem in een Smartschoolbericht naar je coach volgens de netiquette.", presenteer: "Toon je blog in 2 minuten aan een medeleerling. Vertel welke pagina je het mooist vindt en waarom." }
    }),

    werkbundel: [
      { les: 1, html: `
        ${h.kader("De opdracht", "Bouw je eigen <b>blog</b> in Google Sites. Stel jezelf voor op de eerste pagina. Toon op de andere pagina's je projecten van de andere vakken. Kies een overzichtelijke opmaak. Publiceer je blog binnen de school. Deel de link met je coach.")}
        ${h.leerkaart("Leerkaart · De onderdelen van een website", "<p>Het <b>logo</b> en de <b>naam</b> staan linksboven. De <b>banner</b> is de brede strook bovenaan met de titel. Het <b>menu</b> toont alle pagina's. De <b>voettekst</b> staat helemaal onderaan.</p>")}
        ${wireframe()}
        <h3>Wat weet ik al? Websites of blogs die ik vaak bekijk</h3>
        ${h.tabel(["Website", "Wat vind ik er goed aan?"], 3, 28)}
` },
      { les: 1, html: `
        <h2>Werkblad 1 · Het ontwerp van mijn blog</h2>
        ${vink(["Ik meldde me in Chrome rechtsboven aan met mijn SVSL-adres en aanvaardde de synchronisatie.", "Ik bekeek de video's over Google Sites op de ICT-website (via Smartschool)."])}
        <table class="fiche"><tr><td class="lbl">Naam van mijn site</td><td>Blog ____________________ ____________________</td></tr>
        <tr><td class="lbl">Mijn stijl</td><td>strak en zakelijk / kleurrijk en speels / rond een thema: __________</td></tr>
        <tr><td class="lbl">Mijn 3 kleuren</td><td style="height:30px"></td></tr>
        <tr><td class="lbl">Mijn logo</td><td style="height:30px">bitmoji / avatar / icoon: </td></tr>
        <tr><td class="lbl">Vakken met een pagina</td><td style="height:44px"></td></tr></table>
        ${h.leerkaart("Leerkaart · Een overzichtelijke opmaak", "<ul><li>Gebruik maximaal <b>3 kleuren</b>.</li><li>Gebruik maximaal <b>3 lettertypes</b>.</li><li>Zet bij elke tekst een passende afbeelding.</li><li>Lijn alles netjes uit.</li><li>Laat witruimte tussen de blokken.</li></ul>")}
        ${h.vak("Schets van mijn homepage", 250)}` },
      { les: 2, html: `
        <h2>Werkblad 2 · Site aanmaken en instellen</h2>
        <h3>Aanmaken</h3>
        ${vink(["Open een nieuw tabblad in Chrome.", "Kies bij de Google-apps voor <b>Sites</b>.", "Kies het kleurrijke plusje <b>Leeg</b>."])}
        <h3>Instellen</h3>
        ${vink(["Wijzig ‘Naamloze site’ in <b>Blog Voornaam Familienaam</b>.", "Geef de eerste pagina de titel <b>Voorstelling</b>.", "Kies <b>Logo toevoegen</b>: een bitmoji, een avatar of een icoon.", "Kies een banner bij <b>Koptype</b>.", "Stel een achtergrondafbeelding in voor je banner. Pas zo nodig de kleur van je titel aan.", "Zet in de voettekst: <b>Voornaam Familienaam - Campus Lievegem</b>.", "Plaats het schoollogo in de voettekst (in kleur of grijswaarden).", "Lijn de voettekst netjes uit. Kies het lettertype.", "Kies rechtsboven een <b>thema</b> dat past bij je ontwerp."])}
        <h3>Probleem opgelost?</h3>
        <table><tr><th>Mijn probleem</th><th style="width:45%">Zo loste ik het op</th></tr>${[1, 2, 3].map(function () { return '<tr><td style="height:40px"></td><td></td></tr>'; }).join("")}</table>` },
      { les: 3, html: `
        <h2>Werkblad 3 · Pagina 1: Voorstelling</h2>
        ${h.leerkaart("Leerkaart · Digiwijs: wat deel je online?", "<ul><li>Vermeld je <b>gemeente</b>, niet je straat of huisnummer.</li><li>Deel geen telefoonnummer.</li><li>Toon enkel foto's van anderen met hun toestemming.</li><li>Gebruik eigen foto's of vrije afbeeldingen. Vermeld de bron.</li></ul>")}
        <p>Kies minstens 10 vragen. Noteer kort je antwoord. Gebruik een korte titel op je site, bv. ‘Leeftijd’.</p>
        <table><tr><th style="width:8%">&#10003;</th><th style="width:42%">Vraag</th><th>Mijn antwoord</th></tr>
        ${["Wie ben ik? (naam voluit)", "Hoe oud ben ik?", "In welke gemeente woon ik?", "Heb ik broers of zussen? Zitten ze op Campus Lievegem?", "Heb ik huisdieren? Welke?", "Wat is mijn lievelingsdier?", "Wat doe ik in mijn vrije tijd?", "Welke muziek beluister ik graag?", "Wat is mijn lievelingskleur?", "Wat zijn mijn goede eigenschappen?", "Wat zijn mijn minder goede eigenschappen?", "Wat wil ik later worden?", "Wat is mijn grootste droom?", "Een weetje over mezelf"].map(function (x) { return '<tr><td style="text-align:center;font-size:13pt">&#9744;</td><td>' + x + '</td><td style="height:24px"></td></tr>'; }).join("")}</table>
        <p class="klein">&#9744; Bij elke vraag staat een passende afbeelding. &nbsp; &#9744; Geen adres of telefoonnummer. &nbsp; &#9744; De opmaak is verzorgd.</p>` },
      { les: 4, html: `
        <h2>Werkblad 4 · Pagina's per vak</h2>
        ${vink(["Klik rechts op <b>Pagina's</b>.", "Klik op het plusje voor een nieuwe pagina.", "Geef de pagina de naam van het vak, bv. Wiskunde of techniek. Gebruik dezelfde naam als hoofdtitel."])}
        ${h.leerkaart("Leerkaart · Datum volgens de NBN-norm", "<p>Schrijf eerst het <b>jaar</b>, dan de <b>maand</b>, dan de <b>dag</b>. Gebruik koppeltekens. Zet een nul voor een getal onder de tien. <b>30 januari 2023 → 2023-01-30</b></p>")}
        <p>Bereid elke vakpagina voor. Vermeld telkens deze vijf onderdelen.</p>
        <table><tr><th style="width:15%">Vak</th><th style="width:15%">Startdatum (NBN)</th><th>Uitgevoerde taken</th><th style="width:15%">Hoe voelde ik me?</th><th style="width:15%">Beeld of video</th></tr>
        ${[1, 2, 3, 4].map(function () { return '<tr><td style="height:70px"></td><td></td><td></td><td></td><td></td></tr>'; }).join("")}</table>
        <h3>Opmerkingen: wat vond ik van mijn projecten? Wat leerde ik?</h3>${h.lijnen(4)}` },
      { les: 5, html: `
        <h2>Checklist per pagina</h2>
        <p>Werk je vakpagina's af. Controleer elke pagina. Vink af per pagina.</p>
        <table style="text-align:center"><tr><th style="text-align:left">Controle</th><th>Voorstelling</th><th>Vak 1</th><th>Vak 2</th><th>Vak 3</th><th>Vak 4</th></tr>
        ${["De paginanaam en de hoofdtitel kloppen.", "De datum staat in NBN-notatie.", "Taken, gevoel en opmerkingen staan erin.", "Er staat minstens één afbeelding of video.", "Bij elke afbeelding staat de bron.", "Maximaal 3 kleuren en 3 lettertypes.", "Alles is netjes uitgelijnd.", "Ik las de tekst na op spelling."].map(function (x) { return '<tr><td style="text-align:left">' + x + "</td>" + "<td>&#9744;</td>".repeat(5) + "</tr>"; }).join("")}</table>
        <h3>Feedback van een medeleerling</h3>
        <table class="fiche"><tr><td class="lbl">Dit is sterk</td><td style="height:60px"></td></tr><tr><td class="lbl">Dit kan beter</td><td style="height:60px"></td></tr></table>
        <h3>Wat pas ik nog aan?</h3>${h.lijnen(3)}` },
      { les: 6, html: `
        <h2>Werkblad 5 · Publiceren en delen</h2>
        <h3>Publiceren</h3>
        ${vink(["Klik rechtsboven op <b>Publiceren</b>.", "Controleer het webadres. Lees dat enkel mensen van Campus Lievegem je site kunnen bekijken.", "Klik nogmaals op <b>Publiceren</b>."])}
        <h3>Delen</h3>
        ${vink(["Klik rechtsboven op <b>Link naar gepubliceerde website kopiëren</b>.", "Plak de link in een Smartschoolbericht aan je coach."])}
        ${h.leerkaart("Leerkaart · Netiquette in een bericht", "<p>Begin met een aanspreking: ‘Beste …’. Schrijf een duidelijk onderwerp. Leg kort uit wat je stuurt. Sluit beleefd af met een groet en je naam. Lees je bericht na.</p>")}
        <table class="fiche"><tr><td class="lbl">Onderwerp</td><td style="height:28px"></td></tr><tr><td class="lbl">Mijn bericht (klad)</td><td style="height:170px"></td></tr></table>
        <p><b>Presenteren (2 min):</b> toon je blog · vertel welke pagina je het mooist vindt · vertel wat je leerde over veilig online delen.</p>` }
    ]
  });
})();
