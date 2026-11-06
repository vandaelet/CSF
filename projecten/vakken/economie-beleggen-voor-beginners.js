/* Economie · Beleggen voor beginners
   Bron: Wikifin (video, quiz, lestekst en leerkrachtenbundel), herschreven in korte zinnen voor het 2e jaar.
   Uitgewerkt na feedback van de vakleerkracht (8 lesuren, 2e jaar, 4 sterren, alleen op jeugdbeurs.be).
   Lesuur 5 en 6: de eigen oefenbeurs (oefenbeurs/index.html) met 10 verzonnen bedrijven.
   Na lesuur 6 maken de ouders een account op jeugdbeurs.be (brief in de werkbundel), zodat de leerling in lesuur 7 kan starten. */
(function () {
  var h = CSF.h;
  function vink(lijst) { return "<table>" + lijst.map(function (x) { return '<tr><td style="width:7%;text-align:center;font-size:13pt">&#9744;</td><td>' + x + "</td></tr>"; }).join("") + "</table>"; }
  function fiche(rijen) { return '<table class="fiche">' + rijen.map(function (r) { return '<tr><td class="lbl">' + r[0] + '</td><td style="height:' + (r[1] || 28) + 'px">' + (r[2] || "") + "</td></tr>"; }).join("") + "</table>"; }
  var OEFENBEURS = "oefenbeurs/";
  /* het juiste antwoord staat in de bron telkens eerst; draai de opties zodat het op een andere plaats komt */
  function draai(lijst) { return lijst.map(function (q, i) { var n = (i * 2 + 1) % q[1].length, o = q[1].slice(n).concat(q[1].slice(0, n)); return [q[0], o, (q[2] - n + o.length) % o.length, q[3]]; }); }

  CSF.project({
    id: "economie-beleggen-voor-beginners",
    soort: "vak",
    vak: "economie",
    jaar: "2e jaar",
    tijd: "8 lesuren",
    sterren: 4,
    naam: "Beleggen voor beginners",
    kort: "Leer beleggen met oefengeld en daag je klasgenoten uit op jeugdbeurs.be.",
    voorWie: "Voor wie nieuwsgierig is naar geld, bedrijven en de beurs, en graag rekent met procenten.",
    omschrijving: "Stel: je krijgt € 10.000. Wat doe je ermee? Zet je het op een spaarrekening? Of koop je aandelen van je favoriete gamebedrijf of chocolademaker? Op de beurs kan je geld groeien, maar je kan ook verliezen. In dit project ontdek je hoe beleggen echt werkt. Je leert wat een aandeel, een obligatie en een fonds is. Je speelt twaalf weken op onze oefenbeurs, met echt nieuws én valse geruchten. Daarna begint het echte werk: met oefengeld beheer je je eigen portefeuille op jeugdbeurs.be. Beleg jij straks slimmer dan je klasgenoten? Dan is dit project op jouw maat! 📈",
    doel: "Je legt uit hoe sparen en beleggen werken. Je vergelijkt het risico van beleggingen. Je rekent met winst, verlies en kosten. Je herkent geruchten en hypes. Je maakt een beleggingsplan en volgt het op jeugdbeurs.be.",
    bereikt: ["Sparen en beleggen vergelijken, ook met spaargids.be", "Aandelen, obligaties, fondsen, trackers en crypto herkennen", "Je geld spreiden volgens je risico", "Een koers en een beursindex zoals de BEL20 lezen", "Winst en verlies berekenen in euro en in procent, met kosten"],
    toepassen: ["Plannen: een beleggingsplan maken en volgen", "Geduld: niet elk nieuwsbericht vraagt een actie", "Kritisch denken: geruchten en hypes herkennen", "Eerlijk terugblikken op je eigen keuzes"],
    materiaal: ["Werkbundel", "Een Chromebook", "Een rekenmachine", "Een account op jeugdbeurs.be, gemaakt door je ouders na lesuur 6 (brief in je werkbundel)"],
    oplossing: "Op deze site: de quiz na de leerkaarten verbetert meteen. Controleer je rekenoefeningen bij ‘Controleer je oplossing’, nadat je de werkbundel hebt ingevuld. De oefenbeurs geeft na 12 weken feedback op je keuzes.",
    product: "Een beleggingsplan, het dagboek van de oefenbeurs, een eigen portefeuille op jeugdbeurs.be en een evaluatie van jeugdbeurs.be",
    links: [
      ["Oefenbeurs CSF (12 weken, 10 verzonnen bedrijven)", OEFENBEURS],
      ["Video: Wat weet jij over beleggen? (Wikifin)", "https://www.youtube.com/watch?v=GmUBevhJYCg"],
      ["Quiz beleggen (Wikifin)", "https://www.wikifin.be/nl/quiz-beleggen"],
      ["Spaargids.be: rentes van spaarrekeningen vergelijken", "https://www.spaargids.be"],
      ["Jeugdbeurs.be", "https://jeugdbeurs.be"],
      ["FSMA: waarschuwingen voor beleggingsfraude", "https://www.fsma.be/nl/waarschuwingen"]
    ],

    leerkaarten: [
      ["Sparen of beleggen?", "Sparen is geld opzijzetten op een spaarrekening. Het is veilig, maar levert weinig op. Beleggen is je geld laten werken in bedrijven of leningen. Het kan meer opbrengen, maar je kan ook verliezen. Zorg eerst voor een spaarbuffer. Beleg alleen geld dat je lang kan missen.",
        CSF.lk.fig('<svg viewBox="0 0 440 150" role="img" aria-label="Sparen is een veilige trap, beleggen een bergpad met dalen"><g font-size="12" text-anchor="middle"><text x="110" y="18" font-weight="700" fill="#17808a">sparen</text><text x="330" y="18" font-weight="700" fill="#b37400">beleggen</text><path d="M20 130 L60 130 L60 120 L100 120 L100 110 L140 110 L140 100 L180 100 L180 92 L200 92" fill="none" stroke="#3BC1C5" stroke-width="4"/><path d="M240 130 L260 110 L275 122 L295 90 L310 105 L330 70 L345 95 L365 60 L380 80 L420 35" fill="none" stroke="#FCAF17" stroke-width="4"/><text x="110" y="146" fill="#555">rustig en zeker, maar traag</text><text x="330" y="146" fill="#555">op en neer, maar meestal hoger</text></g><line x1="220" y1="25" x2="220" y2="140" stroke="#d5e8e9" stroke-width="2"/></svg>') +
CSF.lk.tabel(['', 'Spaarrekening', 'Termijnrekening'], [['Wat?', 'Je zet geld opzij en haalt het af wanneer je wil.', 'Je zet geld vast voor een afgesproken tijd, bv. 1 of 3 jaar.'], ['Rente', '<b>basisrente</b> + <b>getrouwheidspremie</b>', 'een vaste rente voor de hele looptijd'], ['Wanneer kan je erbij?', 'altijd', 'pas op het einde (vroeger = boete)'], ['Veilig?', 'ja: tot € 100.000 per persoon per bank beschermd', 'ja: zelfde bescherming']]) +
CSF.lk.p('Bij een <b>gereglementeerde spaarrekening</b> krijg je twee soorten rente. De <b>basisrente</b> krijg je op elke euro. De <b>getrouwheidspremie</b> krijg je pas als je geld <b>12 maanden onafgebroken</b> op de rekening blijft staan. Haal je het eerder af? Dan krijg je die premie niet.') +
CSF.lk.vb('<p>Bank A: basisrente 0,50% + getrouwheidspremie 0,75%. Bank B: basisrente 1,00% + getrouwheidspremie 0,25%.</p><p>Laat je je geld een vol jaar staan? Dan krijg je bij allebei <b>1,25%</b>. Haal je het na 6 maanden af? Dan wint bank B: je krijgt geen premie, alleen de basisrente.</p>', 'Vergelijk twee banken') +
CSF.lk.tip('Op <b>spaargids.be</b> vind je de rentes van alle Belgische banken. Kijk naar de basisrente én naar de getrouwheidspremie.')],

      ["De tijd is je bondgenoot", "Hoe langer je belegt, hoe meer kans op winst. Een slecht jaar wordt vaak goedgemaakt door goede jaren. Je winst brengt zelf ook weer winst op: dat heet samengestelde intrest. Begin dus vroeg en heb geduld.",
        CSF.lk.fig('<svg viewBox="0 0 440 160" role="img" aria-label="Samengestelde intrest: de staafjes worden elk jaar sneller hoger"><g font-size="11" text-anchor="middle"><line x1="30" y1="130" x2="430" y2="130" stroke="#1d1d1b"/><g fill="#3BC1C5"><rect x="45" y="80" width="26" height="50"/><rect x="85" y="77" width="26" height="53"/><rect x="125" y="75" width="26" height="55"/><rect x="165" y="72" width="26" height="58"/><rect x="205" y="69" width="26" height="61"/><rect x="245" y="66" width="26" height="64"/><rect x="285" y="63" width="26" height="67"/><rect x="325" y="59" width="26" height="71"/><rect x="365" y="55" width="26" height="75"/></g><g fill="#FCAF17"><rect x="85" y="77" width="26" height="3"/><rect x="125" y="75" width="26" height="5"/><rect x="165" y="72" width="26" height="8"/><rect x="205" y="69" width="26" height="11"/><rect x="245" y="66" width="26" height="14"/><rect x="285" y="63" width="26" height="17"/><rect x="325" y="59" width="26" height="21"/><rect x="365" y="55" width="26" height="25"/></g><text x="58" y="145">start</text><text x="378" y="145">jaar 8</text><text x="220" y="30" fill="#b37400">oranje = winst bovenop je startbedrag</text><text x="220" y="46" fill="#555">elk jaar komt er een beetje méér bij</text></g></svg>') +
CSF.lk.tabel(['Jaar', 'Begin van het jaar', '+ 5% intrest', 'Einde van het jaar'], [['1', '€ 200,00', '€ 10,00', '€ 210,00'], ['2', '€ 210,00', '€ 10,50', '€ 220,50'], ['3', '€ 220,50', '€ 11,03', '€ 231,53']]) +
CSF.lk.p('Kijk naar de intrest: € 10,00, dan € 10,50, dan € 11,03. Je krijgt ook intrest op de intrest van vorig jaar. Dat is <b>samengestelde intrest</b>. Je rekent elk jaar: bedrag × 1,05.') +
CSF.lk.tip('Na een daling op de beurs: niet meteen verkopen. Wie lang kan wachten, ziet zijn geld meestal terugkomen.')],

      ["Het aandeel", "Met een aandeel word je een klein stukje eigenaar van een bedrijf. Je verdient op twee manieren: met dividend (een deel van de winst) en met koerswinst (je verkoopt duurder dan je kocht). De koers kan ook dalen, zelfs tot nul.",
        CSF.lk.fig('<svg viewBox="0 0 440 150" role="img" aria-label="Een bedrijf verdeeld in stukjes: één stukje is jouw aandeel"><g font-size="12" text-anchor="middle"><g stroke="#fff" stroke-width="2"><rect x="20" y="25" width="160" height="100" fill="#3BC1C5"/><line x1="60" y1="25" x2="60" y2="125"/><line x1="100" y1="25" x2="100" y2="125"/><line x1="140" y1="25" x2="140" y2="125"/><line x1="20" y1="58" x2="180" y2="58"/><line x1="20" y1="92" x2="180" y2="92"/></g><rect x="20" y="25" width="40" height="33" fill="#FCAF17" stroke="#fff" stroke-width="2"/><text x="100" y="142" fill="#555">een bedrijf in 12 aandelen</text><path d="M60 40 L215 40" stroke="#1d1d1b" stroke-dasharray="4 3"/><text x="220" y="44" text-anchor="start">jouw aandeel: jij bent mee-eigenaar</text><rect x="220" y="64" width="200" height="30" rx="8" fill="#e7f5ec"/><text x="320" y="84">💶 dividend: een deel van de winst</text><rect x="220" y="100" width="200" height="30" rx="8" fill="#fff4e0"/><text x="320" y="120">📈 koerswinst: duurder verkopen</text></g></svg>') +
CSF.lk.vb('<p>Je koopt <b>5 aandelen</b> van een Belgisch bedrijf aan <b>€ 48</b>. Je bank rekent <b>€ 5</b> kosten per aankoop of verkoop.</p><table class="lk-tabel"><tr><td>Aankoop: 5 × € 48 + € 5</td><td>− € 245,00</td></tr><tr><td>Dividend: 5 × € 1,20</td><td>+ € 6,00</td></tr><tr><td>Verkoop na een jaar: 5 × € 52 − € 5</td><td>+ € 255,00</td></tr><tr><td><b>Winst</b>: 6 + 255 − 245</td><td><b>€ 16,00</b></td></tr></table><p>Zonder de kosten had je € 26 verdiend. De kosten slokten dus € 10 op.</p>', 'Een realistisch voorbeeld') +
CSF.lk.let('Een dividend is <b>niet zeker</b>. Verdient het bedrijf niets, dan kan het dividend wegvallen.')],

      ["De obligatie", "Met een obligatie leen je geld aan een bedrijf of een overheid. Je krijgt elk jaar een vaste intrest en op het einde je geld terug. Gaat de uitgever failliet, dan kan je je geld kwijt zijn.",
        CSF.lk.fig('<svg viewBox="0 0 440 130" role="img" aria-label="Jij leent geld aan een bedrijf, je krijgt elk jaar intrest en op het einde je geld terug"><g font-size="12" text-anchor="middle"><circle cx="50" cy="60" r="30" fill="#3BC1C5"/><text x="50" y="65" fill="#fff" font-weight="700">jij</text><rect x="330" y="30" width="95" height="60" rx="8" fill="#1d1d1b"/><text x="377" y="65" fill="#fff" font-weight="700">bedrijf</text><path d="M85 45 L325 45" stroke="#1d1d1b" stroke-width="2"/><path d="M318 40 L328 45 L318 50" fill="#1d1d1b"/><text x="205" y="38">1. je leent € 800</text><path d="M325 75 L85 75" stroke="#FCAF17" stroke-width="2"/><path d="M92 70 L82 75 L92 80" fill="#FCAF17"/><text x="205" y="93" fill="#b37400">2. elk jaar 3% intrest = € 24</text><text x="205" y="115" fill="#b37400">3. na 5 jaar: je € 800 terug</text></g></svg>') +
CSF.lk.p('<b>Failliet</b> betekent: het bedrijf kan zijn schulden niet meer betalen. De rechtbank stelt dan een <b>curator</b> aan. Die verkoopt alles wat het bedrijf nog heeft: gebouwen, machines, voorraad. Met dat geld betaalt hij de schulden, in een vaste volgorde.') +
CSF.lk.stappen(['Eerst: de werknemers (loon), de staat (belastingen) en de banken.', 'Dan: wie het bedrijf geld leende, zoals obligatiehouders.', 'Als laatste: de aandeelhouders, de eigenaars.']) +
CSF.lk.p('Meestal is het geld op voor de laatste groep aan de beurt is. Obligatiehouders krijgen soms een deel terug. Aandeelhouders krijgen bijna altijd <b>niets</b>.') +
CSF.lk.tip('Een obligatie van een stevig bedrijf of van de Belgische staat is veiliger, maar geeft minder intrest. Hoge intrest = meer risico.')],

      ["Fondsen, trackers en de BEL20", "Een beleggingsfonds steekt het geld van veel mensen samen en belegt het in veel bedrijven tegelijk. Een tracker volgt een hele beursindex, zoals de BEL20. Zo spreid je met één aankoop.",
        CSF.lk.fig('<svg viewBox="0 0 440 140" role="img" aria-label="Veel beleggers steken geld in een fonds, het fonds koopt aandelen van veel bedrijven"><g font-size="12" text-anchor="middle"><g fill="#3BC1C5"><circle cx="40" cy="30" r="14"/><circle cx="40" cy="70" r="14"/><circle cx="40" cy="110" r="14"/></g><text x="40" y="135" fill="#555">beleggers</text><g stroke="#1d1d1b" stroke-width="2"><line x1="56" y1="30" x2="170" y2="65"/><line x1="56" y1="70" x2="170" y2="70"/><line x1="56" y1="110" x2="170" y2="75"/></g><rect x="172" y="45" width="96" height="50" rx="10" fill="#FCAF17"/><text x="220" y="75" font-weight="700">fonds</text><g stroke="#1d1d1b" stroke-width="2"><line x1="268" y1="62" x2="345" y2="22"/><line x1="268" y1="66" x2="345" y2="52"/><line x1="268" y1="74" x2="345" y2="88"/><line x1="268" y1="78" x2="345" y2="118"/></g><g fill="#eef9f9" stroke="#3BC1C5"><rect x="347" y="10" width="80" height="24" rx="5"/><rect x="347" y="40" width="80" height="24" rx="5"/><rect x="347" y="76" width="80" height="24" rx="5"/><rect x="347" y="106" width="80" height="24" rx="5"/></g><text x="387" y="27">bedrijf 1</text><text x="387" y="57">bedrijf 2</text><text x="387" y="93">…</text><text x="387" y="123">bedrijf 20</text></g></svg>') +
CSF.lk.p('De <b>BEL20</b> is de bekendste Belgische beursindex. Hij volgt de <b>20 grootste bedrijven</b> op de beurs van Brussel (Euronext Brussels), bijvoorbeeld AB InBev (bier), KBC (bank), UCB (medicijnen) en Ageas (verzekeringen).') +
CSF.lk.punten(['<b>Groot telt meer.</b> Een bedrijf met een grote beurswaarde weegt zwaarder in de index dan een klein bedrijf.', '<b>Eén getal.</b> Stijgen de meeste grote bedrijven? Dan stijgt de BEL20. Het is een thermometer voor de Belgische beurs.', '<b>Elk jaar herbekeken.</b> Wordt een bedrijf te klein, dan verdwijnt het uit de BEL20 en neemt een ander zijn plaats in.', '<b>In het buitenland</b> heb je andere indexen: de AEX volgt de grootste Nederlandse bedrijven, zoals ASML en Heineken.']) +
CSF.lk.vb('<p>Je koopt één stuk van een <b>BEL20-tracker</b>. Je bent dan een heel klein beetje eigenaar van alle 20 bedrijven. Zakt één bedrijf fors? Dan voel je dat maar een beetje, want de andere 19 zitten er ook in.</p>', 'Spreiden met één aankoop') +
CSF.lk.tip('Een fonds of tracker kost ook geld: de beheerder rekent elk jaar een klein percentage aan.')],

      ["Risico, spreiden en crypto", "Hoe meer je kan winnen, hoe meer je kan verliezen. Een hoog rendement zonder risico bestaat niet. Leg niet alle eieren in één mand: spreid je geld over meerdere bedrijven, sectoren en landen. Cryptomunten zoals bitcoin zijn heel riskant.",
        CSF.lk.fig('<svg viewBox="0 0 440 120" role="img" aria-label="Van veilig naar riskant: spaarrekening, obligatie, fonds, aandeel, crypto"><defs><linearGradient id="lkrisico" x1="0" x2="1"><stop offset="0" stop-color="#3BC1C5"/><stop offset="0.6" stop-color="#FCAF17"/><stop offset="1" stop-color="#c0392b"/></linearGradient></defs><rect x="20" y="40" width="400" height="18" rx="9" fill="url(#lkrisico)"/><g font-size="11" text-anchor="middle"><text x="40" y="80">spaar-</text><text x="40" y="93">rekening</text><text x="125" y="80">obligatie</text><text x="215" y="80">fonds /</text><text x="215" y="93">tracker</text><text x="310" y="80">één</text><text x="310" y="93">aandeel</text><text x="400" y="80">crypto</text><text x="20" y="28" text-anchor="start" fill="#17808a" font-weight="700">veilig, weinig winst</text><text x="420" y="28" text-anchor="end" fill="#c0392b" font-weight="700">riskant, kans op veel winst</text></g></svg>') +
CSF.lk.p('<b>Wat is crypto?</b> Een cryptomunt is <b>digitaal geld</b> dat alleen op het internet bestaat. Bitcoin is de bekendste. Hij bestaat sinds 2009. Er is geen bank en geen land dat de munt uitgeeft of beschermt.') +
CSF.lk.punten(['<b>Blockchain.</b> Alle betalingen staan in één groot digitaal kasboek. Duizenden computers over de hele wereld bewaren een kopie en controleren elkaar.', '<b>Geen bedrijf erachter.</b> Een bitcoin maakt geen winst en betaalt geen dividend. De koers hangt alleen af van hoeveel mensen ervoor willen betalen.', '<b>Wilde schommelingen.</b> In 2022 verloor bitcoin meer dan de helft van zijn waarde. Soms gaat hij op één dag tientallen procenten op of neer.', '<b>Minder bescherming.</b> Je geld op een spaarrekening is beschermd. Je crypto niet: wordt een platform gehackt of gaat het failliet, dan ben je alles kwijt.', '<b>Oplichting.</b> Oplichters beloven via sociale media snelle winst met crypto. De FSMA, de Belgische toezichthouder, waarschuwt er geregeld voor.']) +
CSF.lk.vb('<p>Lotte belegt € 1.000. Ze verdeelt het over een fonds, drie aandelen uit verschillende sectoren en een klein beetje crypto. Het gamebedrijf in haar portefeuille zakt 30%. Omdat daar maar € 150 in zat, verliest ze € 45, niet € 300.</p>', 'Spreiden in de praktijk') +
CSF.lk.let('Belooft iemand je met een ‘gegarandeerde’ hoge winst? Dan is het bijna zeker oplichting.')],

      ["De beurs en de koers", "Op de beurs worden aandelen gekocht en verkocht. Willen meer mensen een aandeel kopen dan verkopen, dan stijgt de koers. Goed nieuws doet de koers meestal stijgen, slecht nieuws doet hem zakken. Winst of verlies reken je ook in procent.",
        CSF.lk.fig('<svg viewBox="0 0 440 160" role="img" aria-label="Een koersgrafiek met een stijging na goed nieuws en een daling na slecht nieuws"><g font-size="11"><line x1="40" y1="130" x2="430" y2="130" stroke="#1d1d1b"/><line x1="40" y1="20" x2="40" y2="130" stroke="#1d1d1b"/><text x="34" y="34" text-anchor="end">€ 40</text><text x="34" y="82" text-anchor="end">€ 30</text><text x="34" y="128" text-anchor="end">€ 20</text><g text-anchor="middle" fill="#555"><text x="60" y="146">jan</text><text x="160" y="146">mrt</text><text x="260" y="146">mei</text><text x="360" y="146">jul</text></g><path d="M50 85 L90 82 L130 88 L170 80 L190 45 L230 40 L270 48 L300 42 L320 95 L360 90 L400 80 L425 75" fill="none" stroke="#3BC1C5" stroke-width="3"/><circle cx="190" cy="45" r="5" fill="#2e8b4e"/><text x="196" y="36" fill="#2e8b4e">goed nieuws</text><circle cx="320" cy="95" r="5" fill="#c0392b"/><text x="328" y="112" fill="#c0392b">slecht nieuws</text></g></svg>') +
CSF.lk.stappen(['Bereken het verschil: nieuwe koers − oude koers.', 'Deel door de oude koers.', 'Vermenigvuldig met 100. Dan heb je het percentage.']) +
CSF.lk.vb('<p>Een aandeel gaat van € 30 naar € 36.</p><p>Verschil: 36 − 30 = 6. &nbsp; 6 : 30 = 0,2. &nbsp; 0,2 × 100 = <b>20% winst</b>.</p><p>Zakt het daarna van € 36 naar € 27? Verschil: −9. &nbsp; −9 : 36 = −0,25. Dat is <b>25% verlies</b>.</p>', 'Rekenen in procent') +
CSF.lk.let('Reken altijd met de <b>oude</b> koers als basis. En vergeet de kosten niet: elke aan- en verkoop kost geld.')],

      ["Beleggen is geen gokken", "Maak een plan en hou je eraan. Controleer de bron van nieuws. Verkoop niet in paniek en koop niet omdat iedereen het doet. Elke aankoop en verkoop kost geld: niet elk nieuwsbericht vraagt een actie.",
        CSF.lk.tabel(['Tijd voor actie', 'Beter afwachten'], [['Een betrouwbare bron meldt echt slecht nieuws, en je gelooft niet meer in het bedrijf.', 'Het nieuws is een gerucht zonder bron.'], ['Meer dan de helft van je geld zit in één aandeel.', 'De hele beurs zakt een beetje. Dat herstelt vaak.'], ['Je volgt je plan, bv. elke maand een vast bedrag beleggen.', 'Iedereen op sociale media roept dat je nú moet kopen.']]) +
CSF.lk.stappen(['<b>Wie</b> zegt het? Een krant, het bedrijf zelf, of een anoniem account?', '<b>Bewijs?</b> Staan er cijfers of bronnen bij?', '<b>Belang?</b> Heeft de schrijver er zelf voordeel bij als jij koopt?', '<b>Te laat?</b> Staat het al overal? Dan zit het nieuws al in de koers.']) +
CSF.lk.vb('<p>Een filmpje zegt: “Dit aandeel gaat verdubbelen!” Je weet niet wie het maakte. Er staan geen cijfers bij. De maker heeft misschien zelf aandelen die hij duur wil verkopen. → <b>Afwachten</b> en eerst de bron zoeken.</p>', 'Controleer de bron') +
CSF.lk.tip('Schrijf je plan op voor je begint: hoeveel beleg je, in hoeveel bedrijven, en hoeveel cash hou je achter de hand?')]
    ],

    invalshoek: { intro: "Kies in lesuur 7 je strategie op jeugdbeurs.be.", keuzes: [
      ["Voorzichtig", "Veel spreiding, grote bedrijven uit de BEL20, wat cash achter de hand."],
      ["Gemengd", "Een basis van grote bedrijven, aangevuld met enkele bedrijven waarin je echt gelooft."],
      ["Gedurfd", "Minder bedrijven, meer risico. Leg in je plan uit waarom, en hoe je verlies beperkt."]] },
    nogTijd: "Zoek op spaargids.be de hoogste rente voor een termijnrekening van 1 jaar. Vergelijk ze met de hoogste totale rente van een spaarrekening. Welke kies jij voor geld dat je volgend jaar nodig hebt?",

    test: draai([
      ["Wanneer krijg je de getrouwheidspremie op een gereglementeerde spaarrekening?", ["Als je geld 12 maanden onafgebroken op de rekening blijft", "Elke maand", "Als je meer dan € 1.000 spaart"], 0, "De getrouwheidspremie beloont geduld: 12 maanden niet afhalen."],
      ["Wat krijg je als aandeelhouder van een winstgevend bedrijf?", ["Soms een dividend", "Elk jaar een vaste intrest", "Altijd je geld terug"], 0, "Een dividend is een deel van de winst. Het is niet zeker."],
      ["Een bedrijf gaat failliet. Wie krijgt meestal niets terug?", ["De aandeelhouders", "De werknemers", "De banken"], 0, "Aandeelhouders zijn als laatste aan de beurt."],
      ["Wat is de BEL20?", ["Een index met de 20 grootste bedrijven op de beurs van Brussel", "Een Belgische spaarrekening", "Een cryptomunt"], 0, "De BEL20 is een thermometer voor de Belgische beurs."],
      ["Waarom is bitcoin zo riskant?", ["Er zit geen bedrijf of bank achter; de koers hangt alleen af van wat mensen willen betalen", "Omdat de staat de koers vastlegt", "Omdat je er elk jaar intrest op krijgt"], 0, "Geen winst, geen dividend, geen bescherming."],
      ["Een anoniem account schrijft dat een bedrijf failliet gaat. Wat doe je eerst?", ["De bron controleren", "Meteen alles verkopen", "Extra aandelen kopen"], 0, "Een gerucht zonder bron is geen reden om te handelen."]
    ]),
    quizTitel: "Eindquiz: ben je klaar voor jeugdbeurs.be?",
    quizUitleg: "Maak deze quiz in lesuur 6, na de oefenbeurs. Hij is moeilijker dan de quiz van Wikifin. Reken op papier. Noteer je score in je werkbundel.",
    quizzen: [
      { titel: "Eindquiz (10 vragen)", vragen: draai([
        ["Een aandeel stijgt van € 50 naar € 60 en zakt daarna 10%. Wat is het nu waard?", ["€ 54", "€ 50", "€ 55"], 0, "60 − 10% van 60 = 60 − 6 = 54."],
        ["Je koopt 10 aandelen aan € 20 en verkoopt ze aan € 22. Elke transactie kost € 5. Wat is je winst?", ["€ 10", "€ 20", "€ 15"], 0, "Koerswinst 10 × 2 = 20, min 2 × 5 kosten = 10."],
        ["Wat is het verschil tussen dividend en intrest?", ["Dividend is een deel van de winst en niet zeker; intrest is vooraf afgesproken", "Er is geen verschil", "Intrest krijg je alleen bij aandelen"], 0, "Een obligatie geeft intrest, een aandeel soms dividend."],
        ["Waarom is een wereldfonds minder riskant dan één aandeel?", ["Je spreidt je geld over veel bedrijven", "Een fonds kan niet dalen", "De staat betaalt verliezen terug"], 0, "Spreiding: één slecht bedrijf weegt weinig."],
        ["Bank A geeft 0,40% basisrente + 0,80% getrouwheidspremie. Bank B geeft 1% basisrente + 0,10% premie. Je haalt je geld na 4 maanden af. Welke bank is beter?", ["Bank B", "Bank A", "Ze zijn even goed"], 0, "Na 4 maanden krijg je geen getrouwheidspremie, alleen de basisrente."],
        ["Een influencer roept: ‘Koop dit aandeel NU!’ Wat is de slimste reactie?", ["Afwachten en de bron controleren", "Snel kopen voor het te laat is", "Al je geld erin steken"], 0, "Misschien wil hij zelf duur verkopen."],
        ["De hele beurs zakt 5% na nieuws over de rente. Je plan is lang te beleggen. Wat doe je?", ["Afwachten: zulke dalingen herstellen vaak", "Alles verkopen", "Alles in crypto steken"], 0, "Wie in paniek verkoopt, maakt een verlies echt."],
        ["Hoe weegt een bedrijf mee in de BEL20?", ["Hoe groter de beurswaarde, hoe zwaarder het weegt", "Elk bedrijf weegt even zwaar", "Alleen de bank telt mee"], 0, "Groot telt meer."],
        ["Je koopt 4 keer per week aandelen en verkoopt ze weer. Elke transactie kost € 5. Wat is het grootste gevaar?", ["De kosten eten je winst op", "Je krijgt te veel dividend", "Je aandelen worden obligaties"], 0, "Veel handelen kost veel geld."],
        ["Wat gebeurt er met je bitcoins als het platform waar je ze bewaart, gehackt wordt?", ["Je kan ze kwijt zijn: er is geen bescherming zoals bij een spaarrekening", "De bank betaalt alles terug", "De staat koopt ze terug"], 0, "Crypto valt niet onder de bescherming van spaargeld."]
      ]) }
    ],
    controle: [
      ["Werkblad 3, oef. 1: je koopt voor € 500 obligaties aan 4%. Hoeveel intrest krijg je per jaar (in euro)?", "getal", [20, 0], "4% van 500 = 500 × 4 : 100."],
      ["Werkblad 3, oef. 2: € 1.000 staat 2 jaar aan 5% samengestelde intrest. Hoeveel heb je na 2 jaar (in euro)?", "getal", [1102.5, 0.01], "Reken twee keer × 1,05. Schrijf zonder punt: 1102,50."],
      ["Werkblad 3, oef. 3: je koopt 8 aandelen aan € 35. Je krijgt € 1,50 dividend per aandeel. Hoeveel dividend krijg je in totaal (in euro)?", "getal", [12, 0], "8 × 1,50."],
      ["Werkblad 5, oef. 1: je koopt een aandeel aan € 40 en verkoopt het aan € 46. Hoeveel procent winst is dat?", "getal", [15, 0], "Verschil 6, gedeeld door de oude koers 40, × 100."],
      ["Werkblad 5, oef. 2: je koopt 20 aandelen aan € 25. Elke aankoop kost € 5. Wat betaal je in totaal (in euro)?", "getal", [505, 0], "20 × 25 + 5."],
      ["Werkblad 5, oef. 3: een aandeel zakt van € 80 naar € 60. Hoeveel procent verlies is dat?", "getal", [25, 0], "Verschil 20, gedeeld door de oude koers 80, × 100."],
      ["Werkblad 5, oef. 4: hoeveel bedrijven zitten er in de BEL20?", "getal", [20, 0], "De naam zegt het al."]
    ],
    criteria: ["Logboek elk lesuur ingevuld", "Werkbundel volledig ingevuld en verbeterd via ‘Controleer je oplossing’", "Oefenbeurs uitgespeeld, met rustpunt en dagboek in het logboek", "Beleggingsplan voor jeugdbeurs.be met minstens 3 bedrijven en een uitleg", "Bij elke aan- of verkoop een duidelijke reden", "Evaluatie van jeugdbeurs.be met concrete tips voor de maker", "Eerlijke eindreflectie: wat ging goed, wat doe je anders?"],

    lessen: CSF.lessenN({
      t1: "Sparen of beleggen?",
      weet: "Maak de quiz beleggen van Wikifin (link bij het project). Noteer je score in werkblad 1.",
      opdracht: "Lees de opdracht in je werkbundel. Bekijk de video van Wikifin. Beantwoord de kijkvragen.",
      ideeen: "Werkblad 1: noteer een spaardoel. Is het voor binnenkort of voor over tien jaar?",
      start: "Werkblad 2: sparen of beleggen? Beslis bij vijf situaties. Vergelijk spaarrekeningen op spaargids.be.",
      midden: [
        { titel: "Aandeel en obligatie", werk: "Lees leerkaart 2, 3 en 4. Werkblad 3: koppel de woorden aan hun uitleg. Los de rekenoefeningen op." },
        { titel: "Fondsen, risico en crypto", werk: "Lees leerkaart 5 en 6. Werkblad 4: vul je beleggersprofiel in. Rangschik van veilig naar riskant." },
        { titel: "De beurs en de koers", werk: "Lees leerkaart 7. Werkblad 5: lees een koersgrafiek. Reken in procent, met kosten. Zoek drie bedrijven uit de BEL20." },
        { titel: "Oefenbeurs, week 1 tot 6", werk: "Lees leerkaart 8. Werkblad 6: lees de bedrijvengids en maak je plan. Speel de oefenbeurs (link bij het project) tot het rustpunt na week 6." },
        { titel: "Oefenbeurs, week 7 tot 12", werk: "Speel de oefenbeurs uit. Kopieer je dagboek naar je logboek. Werkblad 7: wat leerde je? Maak de eindquiz op de site. Neem de brief voor je ouders mee naar huis." },
        { titel: "Jeugdbeurs.be: mijn plan", werk: "Meld je aan op jeugdbeurs.be met het account dat je ouders maakten. Werkblad 8: onderzoek drie bedrijven. Schrijf je plan. Doe je eerste aankopen." }
      ],
      laatste: { titel: "Jeugdbeurs.be: opvolgen en evalueren", werk: "Werkblad 9: bekijk je portefeuille. Beslis bij elk nieuwsbericht: actie of afwachten? Werkblad 10: evalueer jeugdbeurs.be.", presenteer: "Vergelijk je portefeuille met een klasgenoot. Leg uit welke keuze je het best vond, en waarom." }
    }),

    werkbundel: [
      { les: 1, html: `
        ${h.kader("De opdracht", "Je leert hoe sparen en beleggen werken. In lesuur 5 en 6 speel je twaalf weken op de <b>oefenbeurs</b> met tien verzonnen bedrijven. Daarna beheer je met € 10.000 oefengeld je eigen portefeuille op <b>jeugdbeurs.be</b>. Je sluit af met een evaluatie van jeugdbeurs.be voor de maker van de site.")}
        <h2>Werkblad 1 · Wat weet ik al?</h2>
        ${fiche([["Mijn score op de quiz van Wikifin", 28, "____ / 10"], ["Wat wist ik nog niet?", 50]])}
        <h3>Kijkvragen bij de video van Wikifin</h3>
        ${fiche([["Wat is het verschil tussen sparen en beleggen?", 60], ["Noem twee dingen waarin je kan beleggen.", 40], ["Welk advies uit de video onthoud je?", 50]])}
        <h3>Mijn spaardoel</h3>
        ${fiche([["Waarvoor wil ik geld opzijzetten?", 32], ["Hoeveel heb ik nodig?", 28, "€"], ["Wanneer heb ik het nodig?", 28], ["Sparen of beleggen? Waarom?", 50]])}` },
      { les: 1, html: `
        <h2>Werkblad 2 · Sparen of beleggen?</h2>
        ${h.leerkaart("Leerkaart · Sparen of beleggen?", "<p>Sparen is veilig, maar levert weinig op. Beleggen kan meer opbrengen, maar je kan ook verliezen. Zorg eerst voor een spaarbuffer. Beleg alleen geld dat je lang kan missen.</p>")}
        <p>Kruis aan wat het best past. Schrijf er kort bij waarom.</p>
        <table><tr><th>Situatie</th><th style="width:11%">sparen</th><th style="width:11%">beleggen</th><th style="width:30%">waarom?</th></tr>
        ${["Emma wil over twee maanden een fiets van € 300 kopen.", "Opa wil zijn kleinzoon geld geven voor als hij 25 is.", "Yassin wil een buffer voor als zijn gsm stukgaat.", "Lien wil over 15 jaar een deel van een huis betalen.", "Jonas heeft € 50 en wil volgende week naar een concert."].map(function (s) { return '<tr><td style="height:40px">' + s + '</td><td style="text-align:center">&#9744;</td><td style="text-align:center">&#9744;</td><td></td></tr>'; }).join("")}</table>
        <h3>Op zoek op spaargids.be</h3>
        <p>Open spaargids.be. Zoek twee gereglementeerde spaarrekeningen.</p>
        <table><tr><th>Bank en rekening</th><th>basisrente</th><th>getrouwheidspremie</th><th>samen</th></tr><tr><td style="height:30px"></td><td></td><td></td><td></td></tr><tr><td style="height:30px"></td><td></td><td></td><td></td></tr></table>
        ${fiche([["Je haalt je geld na 6 maanden af. Welke rekening is dan het best? Waarom?", 50], ["Wat is een termijnrekening? Wanneer kies je die?", 50]])}` },
      { les: 2, html: `
        <h2>Werkblad 3 · Aandeel en obligatie</h2>
        ${h.leerkaart("Leerkaart · Het aandeel en de obligatie", "<p>Met een <b>aandeel</b> word je mee-eigenaar van een bedrijf. Je verdient met dividend en koerswinst. Met een <b>obligatie</b> leen je geld uit. Je krijgt elk jaar een vaste intrest en op het einde je geld terug. Bij een faillissement krijgen aandeelhouders meestal niets.</p>")}
        <h3>Koppel de woorden aan de juiste uitleg</h3>
        <table><tr><th style="width:24%">Woord</th><th style="width:10%">letter</th><th>Uitleg</th></tr>
        ${[["aandeel", "A. een deel van de winst voor de eigenaars"], ["obligatie", "B. de prijs van een aandeel op de beurs"], ["dividend", "C. een klein stukje eigenaar van een bedrijf"], ["intrest", "D. iemand die na een faillissement alles verkoopt en schulden betaalt"], ["koers", "E. een lening aan een bedrijf of overheid"], ["curator", "F. een vaste vergoeding voor geld dat je uitleent"]].map(function (r) { return "<tr><td>" + r[0] + "</td><td></td><td>" + r[1] + "</td></tr>"; }).join("")}</table>
        <h3>Reken</h3>
        ${fiche([["1. Je koopt voor € 500 obligaties aan 4%. Hoeveel intrest krijg je per jaar?", 44, "€"], ["2. € 1.000 staat 2 jaar aan 5% samengestelde intrest. Hoeveel heb je na 2 jaar?", 60, "jaar 1: ……… &nbsp; jaar 2: ……… &nbsp; €"], ["3. Je koopt 8 aandelen aan € 35. Je krijgt € 1,50 dividend per aandeel. Hoeveel dividend krijg je in totaal?", 44, "€"], ["4. Een bedrijf gaat failliet. Wie krijgt eerst geld: de obligatiehouders of de aandeelhouders? Waarom?", 54]])}` },
      { les: 3, html: `
        <h2>Werkblad 4 · Mijn beleggersprofiel</h2>
        ${h.leerkaart("Leerkaart · Risico, spreiden en crypto", "<p>Hoe meer je kan winnen, hoe meer je kan verliezen. Leg niet alle eieren in één mand. Crypto heeft geen bedrijf of bank achter zich en schommelt heel sterk.</p>")}
        <p>Omcirkel bij elke vraag het antwoord dat het best bij jou past.</p>
        <table><tr><th>Vraag</th><th>a</th><th>b</th><th>c</th></tr>
        ${[["Je belegging zakt 20% in een maand. Wat doe je?", "alles verkopen", "afwachten", "bijkopen"], ["Hoe lang kan je het geld missen?", "minder dan 1 jaar", "1 tot 5 jaar", "meer dan 5 jaar"], ["Wat vind je het belangrijkst?", "niets verliezen", "een beetje groeien", "zoveel mogelijk winst"], ["Een vriend toont een ‘zekere’ tip op sociale media.", "ik negeer het", "ik zoek eerst de bron", "ik koop meteen"], ["Hoeveel bedrijven wil je kopen?", "één fonds", "3 tot 5", "1 of 2"], ["Hoe vaak wil je je beleggingen bekijken?", "bijna nooit", "elke week", "elke dag"]].map(function (r) { return '<tr><td style="height:34px">' + r[0] + "</td><td>" + r[1] + "</td><td>" + r[2] + "</td><td>" + r[3] + "</td></tr>"; }).join("")}</table>
        <p class="klein">Vooral a = <b>voorzichtig</b> · vooral b = <b>gemengd</b> · vooral c = <b>gedurfd</b>. Opgelet: ‘ik koop meteen’ en ‘1 of 2 bedrijven’ zijn geen moed, maar risico.</p>
        ${fiche([["Mijn profiel en waarom", 44]])}
        <h3>Van veilig naar riskant</h3>
        <p>Zet de vijf producten in de goede volgorde: aandeel van één bedrijf · bitcoin · spaarrekening · BEL20-tracker · obligatie van de Belgische staat.</p>
        <table><tr><th>1 · veiligst</th><th>2</th><th>3</th><th>4</th><th>5 · riskantst</th></tr><tr><td style="height:40px"></td><td></td><td></td><td></td><td></td></tr></table>
        ${fiche([["Waarom is bitcoin het riskantst? Geef twee redenen.", 54]])}` },
      { les: 4, html: `
        <h2>Werkblad 5 · De beurs en de koers</h2>
        <p class="klein"><b>Rekenen in procent:</b> verschil = nieuwe koers − oude koers. Deel door de <b>oude</b> koers. Vermenigvuldig met 100.</p>
        ${CSF.lk.fig('<svg viewBox="0 0 440 150" role="img" aria-label="Koersgrafiek van een verzonnen bedrijf over zes maanden"><g font-size="11"><line x1="40" y1="125" x2="430" y2="125" stroke="#1d1d1b"/><line x1="40" y1="15" x2="40" y2="125" stroke="#1d1d1b"/><g stroke="#d5e8e9"><line x1="41" y1="30" x2="430" y2="30"/><line x1="41" y1="62" x2="430" y2="62"/><line x1="41" y1="94" x2="430" y2="94"/></g><text x="34" y="34" text-anchor="end">€ 60</text><text x="34" y="66" text-anchor="end">€ 50</text><text x="34" y="98" text-anchor="end">€ 40</text><g text-anchor="middle" fill="#555"><text x="70" y="141">jan</text><text x="140" y="141">feb</text><text x="210" y="141">mrt</text><text x="280" y="141">apr</text><text x="350" y="141">mei</text><text x="415" y="141">jun</text></g><path d="M70 94 L140 78 L210 62 L280 46 L350 110 L415 62" fill="none" stroke="#3BC1C5" stroke-width="3"/><g fill="#3BC1C5"><circle cx="70" cy="94" r="4"/><circle cx="140" cy="78" r="4"/><circle cx="210" cy="62" r="4"/><circle cx="280" cy="46" r="4"/><circle cx="350" cy="110" r="4"/><circle cx="415" cy="62" r="4"/></g></g></svg>', "Koers van Fietsfabriek nv (verzonnen) op de eerste dag van elke maand")}
        ${fiche([["a. Wat was de koers in januari? En in april?", 30], ["b. In welke maand was de koers het laagst?", 26], ["c. Je kocht in januari en verkocht in juni. Winst of verlies? Hoeveel procent?", 40]])}
        <h3>Reken</h3>
        ${fiche([["1. Je koopt een aandeel aan € 40 en verkoopt het aan € 46. Hoeveel procent winst?", 40, "%"], ["2. Je koopt 20 aandelen aan € 25. Elke aankoop kost € 5. Wat betaal je in totaal?", 40, "€"], ["3. Een aandeel zakt van € 80 naar € 60. Hoeveel procent verlies?", 40, "%"], ["4. Hoeveel bedrijven zitten er in de BEL20?", 26]])}
        <h3>Drie bedrijven uit de BEL20</h3>
        ${h.tabel(["Bedrijf", "Wat doet het?", "Koers vandaag"], 3, 26)}` },
      { les: 5, html: `
        <h2>Werkblad 6 · Mijn plan voor de oefenbeurs</h2>
        ${h.leerkaart("Leerkaart · Beleggen is geen gokken", "<p>Maak een plan en hou je eraan. Controleer de bron. Verkoop niet in paniek en koop niet omdat iedereen het doet. Niet elk nieuwsbericht vraagt een actie.</p>")}
        <p>Open de oefenbeurs (link bij het project). Lees de bedrijvengids. Vul de tabel in voor je iets koopt.</p>
        <table><tr><th>Bedrijf</th><th>Sector</th><th>Risico</th><th style="width:30%">Wil ik het? Waarom (niet)?</th></tr>
        ${["Zonnig", "PixelPlay", "Choco Belgica", "EuroRail", "Bruisbron", "MediZorg", "Bouwmeester", "BankPlus", "Wereldfonds", "KoeKoin"].map(function (n) { return '<tr><td style="height:28px">' + n + "</td><td></td><td></td><td></td></tr>"; }).join("")}</table>
        <h3>Mijn plan</h3>
        ${fiche([["Hoeveel van de € 10.000 beleg ik in week 1?", 28, "€"], ["In hoeveel bedrijven of fondsen?", 28], ["Hoeveel cash hou ik achter de hand? Waarom?", 40], ["Hoeveel beleg ik hoogstens in KoeKoin?", 28, "€"], ["Wanneer verkoop ik? Wanneer wacht ik af?", 50]])}
        <p class="klein">Elke week kies je in het spel: ‘ik kom in actie’ of ‘ik wacht af’, met een reden. Na week 6 volgt een rustpunt met drie vragen.</p>` },
      { les: 6, html: `
        <h2>Werkblad 7 · Wat leerde ik van de oefenbeurs?</h2>
        ${fiche([["Mijn resultaat na 12 weken", 28, "€ ……………… &nbsp; ( ……… %)"], ["‘Gespreid en geduldig’ haalde", 28, "€ ……………… &nbsp; ( ……… %)"], ["‘Alles in het Wereldfonds’ haalde", 28, "€ ……………… &nbsp; ( ……… %)"]])}
        <h3>Feedback van het spel</h3>
        <p>Vink aan wat het spel bij jou in het groen zette.</p>
        ${vink(["Spreiding", "Crypto beperkt", "Rustig gebleven (geen paniek)", "Geen hype gevolgd", "Weinig kosten", "Geduld"])}
        ${fiche([["Welke week was voor jou het moeilijkst? Waarom?", 54], ["Welk nieuwsbericht was een gerucht? Hoe zag je dat?", 54], ["Welke drie regels neem ik mee naar jeugdbeurs.be?", 70, "1.<br><br>2.<br><br>3."], ["Mijn score op de eindquiz (site)", 26, "____ / 10"]])}
        ${h.kader("Niet vergeten", "Geef de brief op de volgende bladzijde vandaag aan je ouders. Zij maken je account op jeugdbeurs.be. Zonder account kan je in lesuur 7 niet starten.")}` },
      { les: 6, html: `
        <h2>Brief voor je ouders · account op jeugdbeurs.be</h2>
        <p class="klein">Scheur of knip dit blad los en geef het vandaag aan je ouders.</p>
        <div style="border:1.5px solid #3BC1C5;border-radius:10px;padding:14px 18px">
        <p>Beste ouder</p>
        <p>In de CSF-uren werkt uw zoon of dochter aan het project <b>Beleggen voor beginners</b>. Uw kind leerde de voorbije lessen hoe sparen en beleggen werken en oefende op een oefenbeurs van de school.</p>
        <p>In de volgende les stapt uw kind over naar <b>jeugdbeurs.be</b>. Dat is een gratis beursspel voor jongeren. Uw kind belegt er <b>virtueel oefengeld</b> (€ 10.000) in echte aandelen van de BEL20 en de AEX. Er is <b>geen echt geld</b> mee gemoeid en u hoeft niets te betalen.</p>
        <p>Een account op jeugdbeurs.be moet door een ouder gemaakt worden. Wilt u dat <b>vóór de volgende CSF-les</b> samen met uw kind doen?</p>
        <ol><li>Surf samen naar <b>jeugdbeurs.be</b>.</li><li>Maak een account aan en volg de stappen op de site.</li><li>Noteer hieronder de gebruikersnaam. Het wachtwoord onthoudt uw kind zelf: schrijf het niet op dit blad.</li></ol>
        ${fiche([["Gebruikersnaam op jeugdbeurs.be", 30], ["Naam van de leerling en klas", 30], ["Handtekening van een ouder", 46]])}
        <p>Hebt u vragen? Neem gerust contact op met de CSF-coach van uw kind.</p>
        <p>Met vriendelijke groeten<br>De werkgroep CSF, Campus Lievegem</p></div>` },
      { les: 7, html: `
        <h2>Werkblad 8 · Bedrijfsfiches en mijn plan voor jeugdbeurs.be</h2>
        <p>Kies drie bedrijven uit de BEL20 of de AEX. Kies ze uit verschillende sectoren.</p>
        <table><tr><th></th><th>Bedrijf 1</th><th>Bedrijf 2</th><th>Bedrijf 3</th></tr>
        ${["Naam", "Sector", "Wat doet het?", "Koers vandaag", "Recent nieuws (bron?)", "Waarom kies ik het?"].map(function (r, i) { return '<tr><td class="lbl" style="width:22%"><b>' + r + '</b></td><td style="height:' + (i > 1 ? 46 : 28) + 'px"></td><td></td><td></td></tr>'; }).join("")}</table>
        <h3>Mijn beleggingsplan</h3>
        ${fiche([["Mijn strategie (voorzichtig, gemengd of gedurfd) en waarom", 44], ["Hoeveel beleg ik in elk bedrijf?", 40], ["Hoeveel cash hou ik achter de hand?", 28, "€"], ["Wanneer verkoop ik? Wanneer wacht ik af?", 44]])}
        <h3>Mijn eerste aankopen</h3>
        ${h.tabel(["Bedrijf", "Aantal", "Koers", "Totaal (met kosten)", "Reden"], 4, 26)}` },
      { les: 8, html: `
        <h2>Werkblad 9 · Opvolgen: actie of afwachten?</h2>
        ${fiche([["Waarde van mijn portefeuille vandaag", 28, "€ ……………… &nbsp; ( ……… %)"], ["Beste aandeel en hoeveel %", 28], ["Slechtste aandeel en hoeveel %", 28]])}
        <p>Zoek bij elk van je bedrijven een recent nieuwsbericht. Beslis wat je doet.</p>
        <table><tr><th>Bedrijf</th><th>Nieuws</th><th>Bron (betrouwbaar?)</th><th>Actie of afwachten? Waarom?</th></tr>
        ${[1, 2, 3].map(function () { return '<tr><td style="height:56px"></td><td></td><td></td><td></td></tr>'; }).join("")}</table>
        <h3>Eindreflectie</h3>
        ${fiche([["Wat ging goed? Waar ben ik trots op?", 54], ["Wat doe ik de volgende keer anders?", 54], ["Wat leerde ik over mezelf als belegger: geduldig of ongeduldig, voorzichtig of gedurfd?", 54]])}` },
      { les: 8, html: `
        <h2>Werkblad 10 · Evaluatie van jeugdbeurs.be</h2>
        <p>Jeugdbeurs.be werd gemaakt door een opa voor zijn kleinzoon. Hij wil graag weten wat jongeren ervan vinden. Je coach bundelt de beste tips en bezorgt ze aan hem. Wees eerlijk en concreet.</p>
        <table><tr><th style="width:44%">Geef een score</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th></tr>
        ${["Een account maken en aanmelden ging vlot.", "Ik vond snel hoe ik een aandeel koop of verkoop.", "Ik begreep mijn portefeuille en mijn winst of verlies.", "De site werkt goed op een Chromebook.", "De uitleg op de site is duidelijk voor iemand van mijn leeftijd.", "Ik zou jeugdbeurs.be aanraden aan een vriend."].map(function (r) { return '<tr><td style="height:30px">' + r + "</td>" + "<td style=\"text-align:center\">&#9744;</td>".repeat(5) + "</tr>"; }).join("")}</table>
        <p class="klein">1 = helemaal niet akkoord · 5 = helemaal akkoord</p>
        ${fiche([["Wat vond ik het beste aan jeugdbeurs.be?", 56], ["Wat was moeilijk of onduidelijk?", 56], ["Wat zou ik verbeteren of toevoegen? Geef twee concrete ideeën.", 66, "1.<br><br>2."], ["Wat leerde ik op de oefenbeurs dat nuttig zou zijn op jeugdbeurs.be?", 50]])}` }
    ]
  });
})();
