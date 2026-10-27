/* techniek · Kraak de knikkercode
   Werkt met het spel Turing Tumble en het Nederlandstalige puzzelboek dat erbij hoort
   (© Upper Story Ltd., CC BY-NC-SA 4.0). De werkbladen, de niveaus en de binaire oefeningen zijn eigen materiaal.
   Uitgewerkt tot 8 lesuren met vijf uitdagingsniveaus. */
(function () {
  var h = CSF.h;
  function vink(lijst) { return "<table>" + lijst.map(function (x) { return '<tr><td style="width:7%;text-align:center;font-size:13pt">&#9744;</td><td>' + x + "</td></tr>"; }).join("") + "</table>"; }
  function fiche(lijst) { return '<table class="fiche">' + lijst.map(function (v) { return '<tr><td class="lbl">' + v[0] + '</td><td style="height:' + (v[1] || 30) + 'px">' + (v[2] || "") + "</td></tr>"; }).join("") + "</table>"; }
  function log(n) {
    return '<table><tr><th style="width:14%">Uitdaging</th><th style="width:12%">Gelukt</th><th style="width:16%">Aantal onderdelen</th><th>Hoe loste ik het op? Wat was de truc?</th></tr>' +
      Array.from({ length: n }, function () { return '<tr><td style="height:40px"></td><td style="text-align:center">&#9744;</td><td></td><td></td></tr>'; }).join("") + "</table>";
  }
  var NIVEAUS = [["★", "Startniveau", "uitdaging 1 tot 10", "Hellingen, kruisingen en je eerste bits."], ["★★", "Gevorderd", "uitdaging 11 tot 20", "Opvangbakjes en patronen met bits."], ["★★★", "Expert", "uitdaging 21 tot 30", "Registers en tandwielbits."], ["★★★★", "Ingenieur", "uitdaging 31 tot 45", "Tellen, optellen en logische poorten."], ["★★★★★", "Ruimtevaartingenieur", "uitdaging 46 tot 60", "De moeilijkste machines uit het boek."]];

  CSF.project({
    id: "techniek-kraak-de-knikkercode",
    soort: "vak",
    vak: "techniek",
    jaar: "1e en 2e jaar",
    tijd: "8 lesuren",
    sterren: 5,
    naam: "Kraak de knikkercode",
    kort: "Bouw een knikkercomputer. Ontdek hoe een computer denkt.",
    voorWie: "Voor sterke puzzelaars die willen weten hoe een computer werkt.",
    omschrijving: "Vergeet alles over knikkerbanen. Deze Turing Tumble is onvergelijkbaar! Spring in een futuristisch stripverhaal. Bouw eigenhandig een knikkercomputer. Help jij Alia verder tijdens haar ruimteavontuur? 🚀 Kies je niveau: van één tot vijf sterren.",
    doel: "Je bouwt machines met Turing Tumble die een opdracht uitvoeren. Je ontdekt hoe een computer werkt met schakelaars (bits), registers en tandwielen. Je rekent met binaire getallen. Je ontwerpt zelf een uitdaging.",
    bereikt: ["Een machine bouwen die een doel bereikt", "Uitleggen wat een bit en een register zijn", "Tellen en rekenen in het binaire talstelsel", "Systematisch een fout zoeken en verbeteren", "Een oplossing vereenvoudigen met minder onderdelen"],
    toepassen: ["Doorzetten bij moeilijke uitdagingen", "Plannen: je niveau kiezen en opbouwen", "Flexibel denken: een andere aanpak proberen", "Nauwkeurig werken"],
    materiaal: ["Werkbundel", "Het spel Turing Tumble met het Nederlandstalige puzzelboek", "Thuis of zonder spel: een online simulator"],
    oplossing: "Een machine die het doel bereikt, is juist. Het puzzelboek toont het doel van elke uitdaging. De binaire oefeningen controleer je op deze site.",
    product: "Een uitdagingslog met je opgeloste uitdagingen, je binaire oefeningen en een zelf ontworpen uitdaging",
    links: [["Turing Tumble: lesmateriaal en downloads (Upper Story)", "https://upperstory.com/turingtumble/edu/resources/"], ["Online simulator (community, Engels)", "https://jessecrossen.github.io/ttsim/"]],
    leerkaarten: [
      ["De spelregels", "Elke uitdaging heeft een doel. Bouw een machine die dat doel bereikt. Duw één keer op de startknop. Raak de machine daarna niet meer aan. Balletjes mogen niet vrij vallen: ze gaan rechtstreeks van het ene onderdeel naar het andere."],
      ["De onderdelen", "Een <b>helling</b> stuurt een balletje één kant op. Een <b>kruising</b> laat balletjes kruisen. Een <b>bit</b> is een schakelaar: hij kantelt bij elk balletje naar de andere kant. Een <b>opvangbakje</b> houdt een balletje tegen en stopt de machine. <b>Tandwielen</b> laten tandwielbits samen draaien."],
      ["Een bit: 0 of 1", "Een computer werkt met schakelaars die maar twee standen hebben. Bij Turing Tumble kantelt een bit naar links (0) of naar rechts (1). Met een rij bits, een <b>register</b>, kan je getallen bewaren."],
      ["Binair tellen", "Wij tellen met tien cijfers: het tiendelig stelsel. Een computer telt met twee cijfers: 0 en 1. Elke plaats is dubbel zoveel waard als de vorige: 1, 2, 4, 8, 16 … Zo is 101 binair = 4 + 0 + 1 = 5."],
      ["Vastgelopen?", "Kijk opnieuw naar het doel. Volg met je vinger de weg van één balletje. Waar gaat het mis? Verander één onderdeel tegelijk. Neem even pauze en probeer later opnieuw. Probeer daarna je oplossing met minder onderdelen."]
    ],
    invalshoek: { intro: "Kies in lesuur 1 je startniveau. Je mag altijd een niveau hoger gaan.", keuzes: NIVEAUS.map(function (n) { return [n[0] + " " + n[1], n[2]]; }) },
    nogTijd: "Los een uitdaging die je al kon opnieuw op met zo weinig mogelijk onderdelen. Vergelijk met een medeleerling.",
    test: [
      ["Wat mag je niet meer doen na het starten van de machine?", ["De machine aanraken", "Kijken", "Tellen"], 0, "De machine moet het alleen doen."],
      ["Wat doet een bit als er een balletje over rolt?", ["Hij kantelt naar de andere kant", "Hij houdt het balletje tegen", "Hij laat het balletje kruisen"], 0, "Een bit is een schakelaar met twee standen."],
      ["Wat is 11 binair in ons talstelsel?", ["3", "11", "2"], 0, "2 + 1 = 3."],
      ["Wat stopt de machine?", ["Een opvangbakje", "Een kruising", "Een helling"], 0, "Het houdt een balletje tegen."]
    ],
    controle: [
      ["Schrijf 101 (binair) in ons talstelsel.", "getal", [5, 0], "4 + 0 + 1"],
      ["Schrijf 1010 (binair) in ons talstelsel.", "getal", [10, 0], "8 + 0 + 2 + 0"],
      ["Schrijf 1111 (binair) in ons talstelsel.", "getal", [15, 0], "8 + 4 + 2 + 1"],
      ["Schrijf 6 binair.", "tekst", ["110", "0110"], "6 = 4 + 2"],
      ["Schrijf 13 binair.", "tekst", ["1101", "01101"], "13 = 8 + 4 + 1"],
      ["Hoeveel verschillende getallen kan je bewaren met 3 bits?", "getal", [8, 0], "Van 000 tot 111."]
    ],
    criteria: ["Logboek elk lesuur ingevuld", "Uitdagingslog volledig bijgehouden", "Minstens één niveau volledig afgewerkt", "Binaire oefeningen correct", "Werking van een bit en een register uitgelegd", "Eigen uitdaging ontworpen, getest en door een medeleerling opgelost"],

    lessen: CSF.lessenN({
      t1: "Het verhaal en de spelregels",
      weet: "Noteer wat je al weet over hoe een computer werkt.",
      opdracht: "Lees de opdracht en de spelregels. Lees het begin van het stripverhaal in het puzzelboek.",
      ideeen: "Kies je startniveau.",
      start: "Werkblad 1: leer de onderdelen kennen. Los de eerste uitdagingen van je niveau op. Vul je uitdagingslog in.",
      midden: [
        { titel: "Uitdagingen (1)", werk: "Los de volgende uitdagingen op. Lees bij elke uitdaging eerst het doel. Vul je log in." },
        { titel: "Bits en registers", werk: "Werkblad 2: ontdek hoe een bit en een register werken. Maak de oefeningen op binair tellen." },
        { titel: "Uitdagingen (2)", werk: "Ga verder met je niveau. Afgewerkt? Ga naar het volgende niveau." },
        { titel: "Minder is meer", werk: "Werkblad 3: los een opgeloste uitdaging opnieuw op met minder onderdelen. Ga verder met nieuwe uitdagingen." },
        { titel: "Mijn eigen uitdaging", werk: "Werkblad 4: ontwerp een eigen uitdaging. Bepaal het doel en de beschikbare onderdelen. Test je oplossing." },
        { titel: "Uitdagingen (3)", werk: "Laat een medeleerling je uitdaging oplossen. Ga verder met je niveau." }
      ],
      laatste: { titel: "Terugblik", werk: "Werkblad 5: blik terug op je niveaus en je uitdagingen. Leg uit hoe een knikkercomputer denkt.", presenteer: "Toon je moeilijkste machine aan een medeleerling. Leg uit hoe ze werkt." }
    }),

    werkbundel: [
      { les: 1, html: `
        ${h.kader("De opdracht", "Bouw machines met <b>Turing Tumble</b>. Volg het stripverhaal van Alia in het puzzelboek. Elke uitdaging heeft een doel. Kies je niveau: van één tot vijf sterren. Hou een uitdagingslog bij. Ontdek hoe een computer denkt. Ontwerp tot slot zelf een uitdaging.")}
        <h3>De vijf niveaus</h3>
        <table><tr><th style="width:15%">Niveau</th><th style="width:22%"></th><th style="width:22%">Uitdagingen</th><th>Wat leer je?</th><th style="width:8%">&#10003;</th></tr>
        ${NIVEAUS.map(function (n) { return "<tr><td>" + n[0] + "</td><td>" + n[1] + "</td><td>" + n[2] + "</td><td>" + n[3] + '</td><td style="text-align:center">&#9744;</td></tr>'; }).join("")}</table>
        ${h.leerkaart("Leerkaart · De spelregels", "<p>Elke uitdaging heeft een doel. Bouw een machine die dat doel bereikt. Duw één keer op de startknop. Raak de machine daarna niet meer aan. Balletjes mogen niet vrij vallen.</p>")}
        ${h.leerkaart("Leerkaart · De onderdelen", "<p><b>Helling:</b> stuurt een balletje één kant op. <b>Kruising:</b> laat balletjes kruisen. <b>Bit:</b> een schakelaar die bij elk balletje kantelt. <b>Opvangbakje:</b> houdt een balletje tegen en stopt de machine. <b>Tandwielen:</b> laten tandwielbits samen draaien.</p>")}
        <h3>Wat weet ik al over hoe een computer werkt?</h3>${h.lijnen(2)}` },
      { les: 1, html: `<h2>Werkblad 1 · Mijn uitdagingslog (1)</h2><p>Mijn startniveau: ______</p>${log(12)}` },
      { les: 2, html: `<h2>Mijn uitdagingslog (2)</h2>${log(14)}` },
      { les: 3, html: `
        <h2>Werkblad 2 · Bits, registers en binair tellen</h2>
        ${h.leerkaart("Leerkaart · Een bit: 0 of 1", "<p>Een computer werkt met schakelaars met twee standen. Een bit kantelt naar links (0) of naar rechts (1). Een rij bits, een <b>register</b>, bewaart een getal.</p>")}
        ${h.leerkaart("Leerkaart · Binair tellen", "<p>Elke plaats is dubbel zoveel waard als de vorige: 1, 2, 4, 8, 16 … <b>101</b> binair = 4 + 0 + 1 = <b>5</b>.</p>")}
        <h3>1. Van binair naar ons talstelsel</h3>
        <table><tr><th>Binair</th><th>8</th><th>4</th><th>2</th><th>1</th><th>Getal</th></tr>${["11", "101", "1010", "1111", "1001"].map(function (b) { return "<tr><td><b>" + b + '</b></td><td></td><td></td><td></td><td></td><td style="height:26px"></td></tr>'; }).join("")}</table>
        <h3>2. Van ons talstelsel naar binair</h3>
        <table><tr><th>Getal</th><th>Binair</th><th>Getal</th><th>Binair</th></tr><tr><td>6</td><td style="height:26px"></td><td>9</td><td></td></tr><tr><td>13</td><td style="height:26px"></td><td>14</td><td></td></tr></table>
        <h3>3. Bouw een teller</h3>
        <p>Zoek in het puzzelboek de uitdaging met een register. Laat de machine tellen. Noteer na elk balletje de stand van de bits.</p>
        <table><tr><th>Balletjes</th><th>Stand van de bits</th><th>Getal</th></tr>${[1, 2, 3, 4, 5].map(function (n) { return "<tr><td>" + n + '</td><td style="height:24px"></td><td></td></tr>'; }).join("")}</table>` },
      { les: 5, html: `
        <h2>Werkblad 3 · Minder is meer</h2>
        ${h.leerkaart("Leerkaart · Vastgelopen?", "<p>Kijk opnieuw naar het doel. Volg met je vinger de weg van één balletje. Waar gaat het mis? Verander één onderdeel tegelijk. Neem even pauze. Probeer daarna je oplossing met minder onderdelen.</p>")}
        <p>Kies drie uitdagingen die je al oploste. Bouw ze opnieuw met minder onderdelen.</p>
        <table><tr><th>Uitdaging</th><th>Eerst: onderdelen</th><th>Nu: onderdelen</th><th>Wat liet ik weg?</th></tr>${[1, 2, 3].map(function () { return '<tr><td style="height:46px"></td><td></td><td></td><td></td></tr>'; }).join("")}</table>
        <h2>Mijn uitdagingslog (3)</h2>${log(7)}` },
      { les: 6, html: `
        <h2>Werkblad 4 · Mijn eigen uitdaging</h2>
        ${fiche([["Naam van mijn uitdaging", 30], ["Doel (wat moet de machine doen?)", 54], ["Welke onderdelen mag je gebruiken? Hoeveel?", 54], ["Startsituatie: hoeveel blauwe en rode balletjes?", 34]])}
        ${h.vak("Tekening van het speelbord met de vaste onderdelen", 260)}
        ${fiche([["Mijn oplossing werkt? Met hoeveel onderdelen?", 34], ["Opgelost door (medeleerling) · tijd", 34], ["Zijn feedback", 54]])}` },
      { les: 7, html: `<h2>Mijn uitdagingslog (4)</h2>${log(14)}` },
      { les: 8, html: `
        <h2>Werkblad 5 · Terugblik</h2>
        <h3>Mijn niveaus</h3><p>Volledig afgewerkt: &nbsp; &#9744; ★ &nbsp; &#9744; ★★ &nbsp; &#9744; ★★★ &nbsp; &#9744; ★★★★ &nbsp; &#9744; ★★★★★ &nbsp; · &nbsp; Aantal opgeloste uitdagingen: ______</p>
        ${fiche([["Mijn moeilijkste uitdaging en hoe ik ze oploste", 70], ["Leg uit: wat is een bit? Wat is een register?", 70], ["Waarin lijkt een knikkercomputer op een echte computer?", 70], ["Wat leerde ik over mezelf als ik vastliep?", 60]])}
        <p><b>Presenteren:</b> toon je moeilijkste machine aan een medeleerling. Leg uit hoe ze werkt.</p>` }
    ]
  });
})();
