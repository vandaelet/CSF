/* Latijn · Het ontstaan van het alfabet
   Bron: de opdracht ‘CSF: de geschiedenis van het alfabet’ van de werkgroep (leerpad van relicta.org),
   uitgewerkt tot 3 lesuren met eigen werkbladen en tekeningen. */
(function () {
  var h = CSF.h;
  // Eigen tekening: van ossenkop tot A (vier stappen)
  function ossenkop() {
    var st = 'fill="none" stroke="#111" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"';
    var stap = function (x, inh, label) { return '<g transform="translate(' + x + ',0)">' + inh + '<text x="45" y="118" font-family="Arial" font-size="12" text-anchor="middle">' + label + "</text></g>"; };
    return '<svg width="100%" height="130" viewBox="0 0 560 130">' +
      stap(0, '<path d="M20 30 Q45 85 70 30" ' + st + '/><path d="M20 30 Q8 14 18 6 M70 30 Q82 14 72 6" ' + st + '/><circle cx="36" cy="48" r="3" fill="#111"/><circle cx="54" cy="48" r="3" fill="#111"/>', "proto-Sinaïtisch: ossenkop") +
      stap(150, '<path d="M15 30 L75 30 M15 30 L45 85 L75 30" ' + st + '/><path d="M15 30 L8 12 M75 30 L82 12" ' + st + '/>', "Fenicisch: alef") +
      stap(300, '<path d="M30 15 L65 50 L30 85 M47 33 L47 67" ' + st + '/>', "Fenicisch, gedraaid") +
      stap(450, '<path d="M20 90 L45 15 L70 90 M30 62 L60 62" ' + st + '/>', "Grieks en Latijn: A") +
      '<g font-family="Arial" font-size="22" fill="#e2732b"><text x="112" y="58">→</text><text x="262" y="58">→</text><text x="412" y="58">→</text></g></svg>';
  }
  function huisje() {
    var st = 'fill="none" stroke="#111" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"';
    return '<svg width="100%" height="120" viewBox="0 0 420 120"><path d="M20 50 L60 15 L100 50 L100 95 L20 95 Z" ' + st + '/><path d="M150 25 L200 25 L200 60 L160 60" ' + st + '/><path d="M260 15 L260 95 M260 15 Q300 15 300 35 Q300 55 260 55 Q305 55 305 75 Q305 95 260 95" ' + st + '/><g font-family="Arial" font-size="12" text-anchor="middle"><text x="60" y="114">bet: huis</text><text x="180" y="114">Fenicisch</text><text x="282" y="114">Grieks β, Latijn B</text></g><g font-family="Arial" font-size="22" fill="#e2732b"><text x="115" y="60">→</text><text x="222" y="60">→</text></g></svg>';
  }
  var GRIEKS = [["Α α", "alfa", "a"], ["Β β", "bèta", "b"], ["Γ γ", "gamma", "g"], ["Δ δ", "delta", "d"], ["Ε ε", "epsilon", "e"], ["Ζ ζ", "dzèta", "dz"], ["Η η", "èta", "è"], ["Θ θ", "thèta", "th"], ["Ι ι", "jota", "i"], ["Κ κ", "kappa", "k"], ["Λ λ", "lambda", "l"], ["Μ μ", "mu", "m"], ["Ν ν", "nu", "n"], ["Ξ ξ", "ksi", "ks"], ["Ο ο", "omikron", "o"], ["Π π", "pi", "p"], ["Ρ ρ", "rho", "r"], ["Σ σ ς", "sigma", "s"], ["Τ τ", "tau", "t"], ["Υ υ", "upsilon", "u"], ["Φ φ", "phi", "f"], ["Χ χ", "chi", "ch"], ["Ψ ψ", "psi", "ps"], ["Ω ω", "omega", "oo"]];

  CSF.project({
    id: "latijn-het-ontstaan-van-het-alfabet",
    soort: "vak",
    vak: "Latijn",
    jaar: "1e en 2e jaar",
    tijd: "3 lesuren",
    sterren: 2,
    naam: "Het ontstaan van het alfabet",
    kort: "Verdiep je in de oorsprong van ons alfabet. Volg de weg van ossenkop tot @penstaart.",
    voorWie: "Voor leerlingen met interesse in het ontstaan van onze taal.",
    omschrijving: "De Romeinen kenden geen woorden als breedbeeldtelevisie, aquarobic of leaseauto. Dat weet iedereen. Hoe groeiden de proto-Sinaïtische inscripties uit tot ons huidige alfabet? Welke plaats hebben #hashtags en @penstaartjes in dat verhaal? Haal je tijdmachine van onder het stof. Onderzoek de beginselen van het schrift!",
    doel: "Je volgt de geschiedenis van ons alfabet: van de proto-Sinaïtische tekens via het Fenicische en het Griekse alfabet tot het Latijnse alfabet. Je ontdekt waar tekens als &, @ en # vandaan komen. Je schrijft zelf woorden in het Griekse alfabet.",
    bereikt: ["De grote stappen in de geschiedenis van het alfabet ordenen", "Uitleggen hoe een prentje een letter wordt", "Het Griekse alfabet lezen en schrijven", "Zelfstandig een digitaal leerpad doorlopen"],
    toepassen: ["Zelfstandig werken met een leerpad", "Plannen: de modules over drie lesuren verdelen", "Nauwkeurig werken bij het overschrijven van tekens"],
    materiaal: ["Werkbundel", "Een Chromebook met internet", "Potlood, gom en kleurpotloden"],
    oplossing: "Op deze site, bij ‘Controleer je oplossing’. Je coach bekijkt de oefeningen van het leerpad.",
    product: "Een ingevulde tijdlijn van het alfabet, je naam in drie schriften en een eigen letterverhaal",
    links: [["Leerpad: de geschiedenis van het alfabet (relicta.org)", "https://www.relicta.org/pedalion/alfabet/leerling/leerpad.html"], ["Proto-Sinaïtisch schrift (Wikipedia)", "https://nl.wikipedia.org/wiki/Proto-Sina%C3%AFtisch_schrift"], ["Grieks alfabet (Wikipedia)", "https://nl.wikipedia.org/wiki/Grieks_alfabet"]],
    leerkaarten: [
      ["Van prentje naar letter", "De eerste letters waren prentjes. Een ossenkop heette ‘alef’. Een huis heette ‘bet’. Het prentje kreeg de klank van de eerste letter van het woord. Dat heet het acrofonisch principe. Zo werd de ossenkop de klank ‘a’ en het huisje de klank ‘b’."],
      ["De grote stappen", "Rond 1800 voor Christus ontstonden de proto-Sinaïtische tekens. De Feniciërs maakten er een alfabet van 22 medeklinkers van. De Grieken namen het over rond 800 voor Christus. Zij voegden klinkers toe. Via de Etrusken kwam het alfabet bij de Romeinen. Ons alfabet is het Latijnse alfabet."],
      ["Het Latijnse alfabet", "De Romeinen schreven met hoofdletters. De G is een C met een streepje. De Y en de Z namen ze over voor Griekse woorden. De J, de U en de W kwamen er pas in de middeleeuwen en later bij."],
      ["&, @ en #", "Het teken & is een samengesmolten Latijns ‘et’ (en). Het teken @ dook al eeuwen geleden op in handelsdocumenten. Sinds 1971 staat het in elk e-mailadres. Het teken # komt mogelijk van ‘lb’, de afkorting van het Latijnse libra (pond). Sinds 2007 maakt het van een woord een hashtag."]
    ],
    invalshoek: { intro: "Kies in lesuur 1 hoe diep je gaat.", keuzes: [
      ["Basistraject", "Doorloop de modules van het leerpad in volgorde."],
      ["Basis + verdieping A", "Doe ook de verdiepingsmodules met een A."],
      ["Basis + verdieping B, C of D", "Voor wie al Latijn of Grieks kent."]] },
    nogTijd: "Ontwerp een eigen geheimschrift met prentjes, zoals de eerste letters. Schrijf er een korte zin mee. Laat een medeleerling hem ontcijferen.",
    test: [
      ["Welk dier zit er verstopt in de letter A?", ["Een os", "Een paard", "Een vis"], 0, "De letter A komt van ‘alef’, een ossenkop."],
      ["Wat voegden de Grieken toe aan het alfabet?", ["Klinkers", "Cijfers", "Leestekens"], 0, "Het Fenicische alfabet had enkel medeklinkers."],
      ["Waar komt het teken & vandaan?", ["Van het Latijnse woord et", "Van het Engelse and", "Van een oude Griekse letter"], 0, "& = et = en."],
      ["Welke letter kenden de Romeinen nog niet?", ["W", "C", "S"], 0, "De W kwam pas in de middeleeuwen."]
    ],
    controle: [
      ["Welke letter komt van ‘bet’, het huisje?", "tekst", ["b"], "Kijk naar het tweede prentje."],
      ["Uit hoeveel tekens bestond het Fenicische alfabet?", "getal", [22, 0], "Enkel medeklinkers."],
      ["Lees in het Grieks: ΡΩΜΗ", "tekst", ["rome", "roomè", "romè"], "Ρ = r, Ω = oo, Μ = m, Η = è."],
      ["Lees in het Grieks: ΑΛΦΑΒΗΤΟΣ", "tekst", ["alfabetos", "alfabètos"], "Je kent dit woord!"],
      ["Welk Latijns woord zit er in het teken &?", "tekst", ["et"], "Het betekent ‘en’."]
    ],
    criteria: ["Logboek elk lesuur ingevuld", "Leerpad doorlopen met de oefeningen", "Tijdlijn correct ingevuld", "Naam correct in het Griekse alfabet", "Eigen letterverhaal duidelijk uitgelegd"],

    lessen: CSF.lessenN({
      t1: "Van prentje naar letter",
      weet: "Noteer welke schriften of alfabetten je al kent.",
      opdracht: "Lees de opdracht. Open het leerpad via de link bij het project.",
      ideeen: "Bedenk hoe mensen zonder letters een boodschap konden doorgeven.",
      start: "Werkblad 1: doorloop de eerste modules van het leerpad. Open de oefeningen altijd als pdf. Vul de tijdlijn aan.",
      midden: [
        { titel: "Van Feniciërs tot Grieken", werk: "Werkblad 2: doorloop de volgende modules. Leer het Griekse alfabet lezen. Schrijf je naam in het Grieks." }
      ],
      laatste: { titel: "Het Latijnse alfabet en onze tekens", werk: "Werkblad 3: rond het basistraject af. Ontdek waar &, @ en # vandaan komen. Schrijf je eigen letterverhaal.", presenteer: "Vertel in 2 minuten het verhaal van één letter aan een medeleerling." }
    }),

    werkbundel: [
      { les: 1, html: `
        ${h.kader("De opdracht", "Duik in de geschiedenis van ons alfabet. Doorloop het <b>leerpad</b> van relicta.org in volgorde. Maak bij elke module de oefening. Open die oefening altijd als pdf, anders zijn sommige tekens onleesbaar. Wil je meer? Kies dan ook een verdiepingsmodule.")}
        <p>Het alfabet is een van de meest succesvolle uitvindingen van de mens. Elke dag versturen we miljarden berichtjes met letters. Toch is het alfabet pas zo’n 4000 jaar oud. Dat is heel jong in de geschiedenis van de mens.</p>
        ${h.leerkaart("Leerkaart · Van prentje naar letter", "<p>De eerste letters waren prentjes. Een ossenkop heette <b>alef</b>. Een huis heette <b>bet</b>. Het prentje kreeg de klank van de eerste letter van het woord. Zo werd de ossenkop de klank ‘a’ en het huisje de klank ‘b’.</p>")}
        ${ossenkop()}
        ${huisje()}
        <h3>Wat weet ik al? Schriften of alfabetten die ik ken</h3>${h.lijnen(2)}` },
      { les: 1, html: `
        <h2>Werkblad 1 · De tijdlijn van het alfabet</h2>
        <p>Vul de tijdlijn aan met wat je in het leerpad leest.</p>
        <table><tr><th style="width:20%">Wanneer?</th><th style="width:24%">Wie of welk schrift?</th><th>Wat is er nieuw?</th></tr>
        ${["± 3200 v.Chr.", "± 1800 v.Chr.", "± 1050 v.Chr.", "± 800 v.Chr.", "± 700 v.Chr.", "middeleeuwen", "vandaag"].map(function (x) { return '<tr><td>' + x + '</td><td style="height:46px"></td><td></td></tr>'; }).join("")}</table>
        <h3>Mijn modules</h3>
        <table><tr><th>Module van het leerpad</th><th style="width:16%">Oefening gemaakt</th><th style="width:30%">Wat onthoud ik?</th></tr>${[1, 2, 3, 4, 5].map(function () { return '<tr><td style="height:34px"></td><td style="text-align:center">&#9744;</td><td></td></tr>'; }).join("")}</table>` },
      { les: 2, html: `
        <h2>Werkblad 2 · Het Griekse alfabet</h2>
        <p>De Grieken namen het Fenicische alfabet over. Ze voegden klinkers toe. De eerste twee letters, alfa en bèta, gaven ons het woord <b>alfabet</b>.</p>
        <table><tr>${[0, 1, 2].map(function () { return '<th>Letter</th><th>Naam</th><th>Klank</th>'; }).join("")}</tr>
        ${[0, 1, 2, 3, 4, 5, 6, 7].map(function (r) { return "<tr>" + [0, 1, 2].map(function (c) { var g = GRIEKS[c * 8 + r]; return '<td style="font-size:12pt">' + g[0] + "</td><td>" + g[1] + "</td><td>" + g[2] + "</td>"; }).join("") + "</tr>"; }).join("")}</table>
        <h3>1. Lees deze Griekse woorden. Schrijf ze in ons alfabet.</h3>
        <table><tr><td style="width:30%;font-size:12pt">ΑΘΗΝΑ</td><td style="height:28px"></td><td style="width:30%;font-size:12pt">ΠΛΑΤΩΝ</td><td></td></tr><tr><td style="font-size:12pt">ΔΕΛΤΑ</td><td style="height:28px"></td><td style="font-size:12pt">ΟΛΥΜΠΙΑ</td><td></td></tr></table>
        <h3>2. Schrijf je voornaam en je familienaam in Griekse hoofdletters.</h3>
        ${h.vak("Mijn naam in het Grieks", 70)}
        <h3>3. Welke Griekse letters ken je uit de wiskunde of de wetenschappen?</h3>${h.lijnen(2)}` },
      { les: 3, html: `
        <h2>Werkblad 3 · Het Latijnse alfabet en onze tekens</h2>
        ${h.leerkaart("Leerkaart · Het Latijnse alfabet", "<p>De Romeinen schreven met hoofdletters. De <b>G</b> is een C met een streepje. De <b>Y</b> en de <b>Z</b> namen ze over voor Griekse woorden. De <b>J</b>, de <b>U</b> en de <b>W</b> kwamen er pas in de middeleeuwen en later bij.</p>")}
        ${h.leerkaart("Leerkaart · &, @ en #", "<p><b>&</b> is een samengesmolten Latijns <i>et</i> (en). <b>@</b> dook al eeuwen geleden op in handelsdocumenten. Sinds 1971 staat het in elk e-mailadres. <b>#</b> komt mogelijk van <i>lb</i>, de afkorting van het Latijnse <i>libra</i> (pond). Sinds 2007 maakt het van een woord een hashtag.</p>")}
        <h3>1. Schrijf deze zin zoals een Romein hem zou schrijven: enkel hoofdletters, geen J, U of W.</h3>
        <p><i>Julius wil water uit de put.</i></p>${h.lijnen(1)}
        <h3>2. Mijn letterverhaal</h3>
        <p>Kies één letter. Vertel zijn verhaal: welk prentje was het, hoe veranderde hij bij de Feniciërs, de Grieken en de Romeinen? Teken de vier stappen.</p>
        <table><tr>${["Prentje", "Fenicisch", "Grieks", "Latijn"].map(function (x) { return '<th style="width:25%">' + x + "</th>"; }).join("")}</tr><tr>${[1, 2, 3, 4].map(function () { return '<td style="height:110px"></td>'; }).join("")}</tr></table>
        ${h.lijnen(4)}
        <p><b>Presenteren (2 min):</b> vertel het verhaal van je letter aan een medeleerling.</p>` }
    ]
  });
})();
