/* Oefenproject muziek · Filmmuziek-detective (2 lesuren)
   Oefent: een opdracht in stappen uitvoeren, je werk tonen en uitleggen. */
(function () {
  var h = CSF.h;
  function fiche(l) { return '<table class="fiche">' + l.map(function (v) { return '<tr><td class="lbl">' + v[0] + '</td><td style="height:' + (v[1] || 28) + 'px">' + (v[2] || "") + "</td></tr>"; }).join("") + "</table>"; }
  var SONGMAKER = "https://musiclab.chromeexperiments.com/Song-Maker/";

  CSF.project({
    id: "oefen-filmmuziek",
    soort: "oefen",
    domein: "muziek",
    jaar: "1e jaar",
    tijd: "2 lesuren",
    sterren: 2,
    naam: "Filmmuziek-detective",
    kort: "Ontdek hoe muziek een gevoel maakt. Componeer 30 seconden muziek voor een filmscène.",
    voorWie: "Voor wie graag naar films kijkt en wil weten waarom muziek je kippenvel geeft.",
    omschrijving: "Zet een spannende film eens zonder geluid op. Plots is hij veel minder spannend. 🎬 Muziek vertelt je wat je moet voelen, nog voor er iets gebeurt. Jij wordt muziekdetective: je ontdekt welke trucjes componisten gebruiken. Daarna componeer je zelf 30 seconden muziek voor een filmscène, in Song Maker. Raden je klasgenoten welke scène het is?",
    doel: "Je legt uit hoe tempo, toonhoogte, volume en sfeer een gevoel maken, en je gebruikt dat in een eigen compositie.",
    bereikt: ["Tempo, toonhoogte en volume herkennen en benoemen", "Muziek koppelen aan een gevoel of een scène", "Een korte compositie maken in Song Maker", "Je muzikale keuzes uitleggen"],
    toepassen: ["Een opdracht in stappen uitvoeren", "Bewust kiezen en uitproberen", "Je werk tonen en uitleggen"],
    materiaal: ["Werkbundel", "Een Chromebook met oortjes", "Song Maker (link bij het project)"],
    oplossing: "Controleer de koppeloefening op deze site bij ‘Controleer je oplossing’.",
    product: "Een eigen soundtrack van 30 seconden in Song Maker, met een korte uitleg",
    links: [["Song Maker (Chrome Music Lab)", SONGMAKER]],
    leerkaarten: [
      ["Muziek maakt gevoel", "Componisten gebruiken een paar vaste trucjes. Het <b>tempo</b>: snel geeft actie, traag geeft rust of verdriet. De <b>toonhoogte</b>: hoge tonen klinken licht of vrolijk, lage tonen zwaar of dreigend. Het <b>volume</b>: steeds luider bouwt spanning op. En de <b>sfeer</b> van de melodie: vrolijk of droevig.",
        CSF.lk.tabel(['Gevoel', 'Tempo', 'Toonhoogte', 'Volume'], [['actie', 'snel', 'midden', 'luid, harde tikken'], ['dreiging', 'traag', 'laag', 'stil, af en toe plots luid'], ['vrolijk', 'midden of snel', 'hoog', 'midden'], ['verdriet', 'heel traag', 'midden of laag', 'zacht']]) +
        CSF.lk.punten(['<b>Herhaling</b> die steeds luider of sneller wordt, maakt spanning.', '<b>Stilte</b> kan ook spannend zijn: net voor het grote moment.']) +
        CSF.lk.tip('Luister bij een film eens alleen naar de muziek. Welk gevoel wil de componist je geven?')],
      ["Componeren in Song Maker", "Song Maker is een gratis website van Chrome Music Lab. Je klikt vakjes aan in een <b>raster</b>: hoe hoger het vakje, hoe hoger de toon. Onderaan maak je een <b>ritme</b> met drums. Je kiest een <b>instrument</b> en het <b>tempo</b>. Met ‘Save’ krijg je een link naar je muziek.",
        CSF.lk.stappen(['Open Song Maker via de link bij het project.', 'Kies bij ‘Settings’ het aantal maten en de toonsoort.', 'Kies het tempo dat bij je scène past (onderaan).', 'Klik een melodie aan. Klik onderaan een ritme aan.', 'Speel af, luister, verbeter. Bewaar met ‘Save’ en kopieer de link in je logboek.']) +
        CSF.lk.let('Bewaar je link zeker in je logboek. Zonder link is je muziek weg als je het venster sluit.')]
    ],
    invalshoek: { intro: "Kies in lesuur 1 je filmscène.", keuzes: [["Achtervolging", "Een dief rent over de daken, de politie erachter."], ["Spookhuis", "Iemand sluipt een donker kasteel binnen."], ["Feest", "Een verrassingsfeest in het park."]] },
    nogTijd: "Maak een tweede versie van je muziek voor een heel andere scène, met dezelfde melodie. Wat moest je veranderen?",
    test: [
      ["Welk tempo past het best bij een achtervolging?", ["Snel", "Heel traag", "Het tempo maakt niet uit"], 0, "Snel geeft actie."],
      ["Wat geven lage, trage tonen meestal?", ["Dreiging", "Vrolijkheid", "Haast"], 0, "Laag en traag klinkt zwaar en dreigend."],
      ["Hoe bewaar je je muziek in Song Maker?", ["Met ‘Save’: je krijgt een link", "Het gaat vanzelf", "Met een schermafbeelding"], 0, "Bewaar de link in je logboek."]
    ],
    controle: [
      ["Werkblad 1: welke muziek (A, B, C of D) past bij scène 1, het afscheid op het perron?", "tekst", ["d"], "Heel traag en zacht."],
      ["Werkblad 1: welke muziek past bij scène 2, de dief op de daken?", "tekst", ["a"], "Snel en luid."],
      ["Werkblad 1: welke muziek past bij scène 3, het donkere kasteel?", "tekst", ["b"], "Laag, traag en stil."],
      ["Werkblad 1: welke muziek past bij scène 4, het verjaardagsfeest?", "tekst", ["c"], "Hoog en huppelend."]
    ],
    criteria: ["Logboek elk lesuur ingevuld", "Koppeloefening gemaakt en gecontroleerd", "Compositie van ongeveer 30 seconden die bij de scène past", "Tempo, toonhoogte en volume bewust gekozen", "Link bewaard en keuzes uitgelegd"],
    lessen: CSF.lessen2({
      t1: "Detective en plan",
      opdracht: "Lees de projectfiche. Wat ga je maken?",
      ideeen: "Maak de koppeloefening in werkblad 1. Kies daarna je filmscène.",
      start: "Plan je muziek in werkblad 2: tempo, toonhoogte, volume. Open Song Maker en probeer uit.",
      t2: "Componeren en tonen",
      werk: "Componeer je muziek van 30 seconden in Song Maker. Bewaar met ‘Save’ en zet de link in je logboek. Vul je uitleg in.",
      presenteer: "Laat je muziek horen aan twee klasgenoten zonder te zeggen welke scène het is. Laten ze raden. Leg daarna je keuzes uit."
    }),
    werkbundel: [
      { les: 1, html: `
        ${h.kader("De opdracht", "Ontdek hoe muziek een gevoel maakt. Componeer daarna in Song Maker 30 seconden muziek voor een filmscène en leg je keuzes uit.")}
        <h2>Werkblad 1 · Welke muziek past bij welke scène?</h2>
        <table><tr><th style="width:8%"></th><th>Muziek</th></tr>
        <tr><td><b>A</b></td><td>Snel tempo, korte harde noten, veel drums. Een herhaling die steeds luider wordt.</td></tr>
        <tr><td><b>B</b></td><td>Traag, lage noten, heel stil. Af en toe een vreemde hoge toon.</td></tr>
        <tr><td><b>C</b></td><td>Middelmatig tempo, een hoge vrolijke melodie, een huppelend ritme.</td></tr>
        <tr><td><b>D</b></td><td>Heel traag, zachte lange noten, een droevige melodie.</td></tr></table>
        <table><tr><th>Scène</th><th style="width:22%">Muziek (A–D)</th></tr>
        ${["1. Twee vrienden nemen afscheid op het perron.", "2. Een dief rent over de daken, de politie erachter.", "3. Iemand sluipt een donker kasteel binnen.", "4. Een verjaardagsfeest in het park."].map(function (s) { return "<tr><td>" + s + '</td><td style="height:30px"></td></tr>'; }).join("")}</table>
        ${fiche([["Welke muziek viel het meest op? Waarom?", 44], ["Mijn gekozen filmscène", 30]])}` },
      { les: 1, html: `
        <h2>Werkblad 2 · Mijn soundtrack</h2>
        ${fiche([["Welk gevoel wil ik geven?", 30], ["Tempo", 26, "traag / midden / snel"], ["Toonhoogte", 26, "laag / midden / hoog"], ["Volume en opbouw", 34], ["Instrument in Song Maker", 26]])}
        ${h.vak("Schets van mijn melodie en ritme (zoals het raster van Song Maker)", 200)}
        <h3>Na het componeren</h3>
        ${fiche([["Link van mijn muziek (ook in je logboek)", 30], ["Waarom past mijn muziek bij de scène?", 60], ["Raadden mijn klasgenoten de scène?", 26, "ja / nee"], ["Wat zou ik nog veranderen?", 40]])}` }
    ]
  });
})();
