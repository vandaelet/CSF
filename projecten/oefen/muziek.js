/* Oefenproject Creatief · muziek · Beatmaker */
(function () {
  var h = CSF.h;

  // Noten tekenen: type = "hele", "halve", "kwart", "achtste"
  function noot(type) {
    var open = type === "hele" || type === "halve", steel = type !== "hele";
    var s = '<svg viewBox="0 0 40 60" width="34" height="52"><ellipse cx="16" cy="46" rx="8" ry="5.5" transform="rotate(-20 16 46)" fill="' + (open ? "#fff" : "#111") + '" stroke="#111" stroke-width="2"/>';
    if (steel) s += '<line x1="23" y1="44" x2="23" y2="6" stroke="#111" stroke-width="2"/>';
    if (type === "achtste") s += '<path d="M 23 6 q 12 10 6 24" fill="none" stroke="#111" stroke-width="2.4"/>';
    return s + "</svg>";
  }
  // Boxnotatie: rijen = [["Stamp", "x.x....."], …]; x = slag, . = stil. 8 vakjes = 1 maat.
  function raster(rijen, maten, leeg) {
    var tel = ["1", "&", "2", "&", "3", "&", "4", "&"], s = '<table style="text-align:center"><tr><th style="text-align:left;width:16%">Klank</th>';
    for (var m = 0; m < maten; m++) tel.forEach(function (t, i) { s += '<th style="padding:3px 0;' + (i === 0 && m ? "border-left:2.5px solid #000" : "") + '">' + t + "</th>"; });
    s += "</tr>";
    rijen.forEach(function (r) {
      s += '<tr><td style="text-align:left"><b>' + r[0] + "</b></td>";
      for (var k = 0; k < maten * 8; k++) s += '<td style="height:24px;padding:0;' + (k % 8 === 0 && k ? "border-left:2.5px solid #000;" : "") + '">' + (!leeg && r[1][k] === "x" ? "●" : "") + "</td>";
      s += "</tr>";
    });
    return s + "</table>";
  }

  CSF.project({
    id: "muziek",
    soort: "oefen",
    domein: "Creatief · muziek",
    jaar: "1e jaar",
    tijd: "3 lesuren",
    sterren: 2,
    voorWie: "Voor leerlingen met gevoel voor ritme en zin om zelf muziek te maken.",
    naam: "Beatmaker: componeer je eigen ritme",
    kort: "Ontdek puls, maat en notenschrift. Componeer een eigen beat voor een andere speler.",
    omschrijving: "Elk bekend nummer draait op een beat. Muzikanten schrijven ritme op met noten of met een raster, zoals op een drumcomputer. Lees en speel eerst bekende ritmes. Componeer daarna een beat van vier maten. Bouw hem na in een online beatmaker. Een ander speelt je beat na met alleen jouw partituur.",
    doel: "Je leert de werking van ritme. Je leert muziek opschrijven. Je creëert zelf een werkend stuk muziek.",
    bereikt: ["Puls, tempo (BPM) en maat uitleggen", "Hele, halve, kwart- en achtste noten herkennen en tellen", "Een ritme lezen en schrijven in boxnotatie", "Een eigen beat van 4 maten componeren en uitvoeren"],
    toepassen: ["Geconcentreerd luisteren en tellen", "Doorzetten tot een strak ritme", "Rekening houden met anderen: oortjes en zacht oefenen", "Mijn compositie netjes en leesbaar noteren"],
    materiaal: ["Werkbundel", "Potlood, gom", "Een toestel met internet en eigen oortjes (beatmaker Chrome Music Lab)"],
    oplossing: "Op deze site, bij ‘Controleer je oplossing’. Je eigen beat heeft geen juiste oplossing. De naspeeltest is de proef.",
    product: "Een beat van 4 maten in boxnotatie en je beat in de online beatmaker (link of opname)",
    links: [["Open Chrome Music Lab · Song Maker", "https://musiclab.chromeexperiments.com/Song-Maker/"], ["Chrome Music Lab · Rhythm", "https://musiclab.chromeexperiments.com/Rhythm/"]],
    leerkaarten: [
      ["Puls en tempo", "De puls is de vaste tel voor het meeklappen. Het tempo meet je in BPM: tellen per minuut. Tel 15 seconden lang de tellen. Vermenigvuldig met 4. Rustige muziek zit rond 70 BPM. Dansmuziek zit rond 120 tot 130 BPM."],
      ["De maat", "Tellen vormen samen maten. De meeste popmuziek staat in een 4/4-maat: 4 tellen per maat. Tel 1 voelt het zwaarst. Zeg ‘en’ tussen de tellen: 1 & 2 & 3 & 4 &."],
      ["Notenwaarden", "Een hele noot duurt 4 tellen. Een halve noot duurt 2 tellen. Een kwartnoot duurt 1 tel. Een achtste noot duurt een halve tel. Voor stiltes bestaan rusten met dezelfde lengtes."],
      ["Boxnotatie", "Drummers en beatmakers gebruiken vaak een raster. Elke rij is een klank. Elk vakje is een achtste noot. Een bolletje betekent: speel hier. ‘We Will Rock You’ (Queen, 1977) is steeds opnieuw stamp – stamp – klap – stil."],
      ["Klanken met je lichaam", "Een stamp klinkt laag, zoals een basdrum. Een klets op je dij klinkt midden. Een klap of een vingerknip klinkt hoog, zoals een snaredrum of hi-hat. Beatboxers maken die klanken met hun mond: ‘b’ voor de bas, ‘t’ voor de hi-hat, ‘k’ voor de snare."]
    ],
    invalshoek: { intro: "Kies in lesuur 1 de klanken van je beat.", keuzes: [
      ["Bodypercussie", "Stamp, dijklets, klap en knip."], ["Beatbox", "Je stem: b, t, k en ts."], ["Tafelpercussie", "Je vingertoppen, handpalm en een potlood op de tafel."]] },
    nogTijd: "Voeg in de online beatmaker een melodie van 4 noten toe aan je beat. Past de melodie bij het tempo?",
    test: [
      ["Hoeveel tellen duurt een halve noot?", ["2", "1", "4"], 0, "Een hele noot duurt 4 tellen. Een halve noot duurt de helft: 2 tellen."],
      ["Wat betekent 120 BPM?", ["120 tellen per minuut", "120 noten per maat", "120 seconden muziek"], 0, "BPM staat voor ‘beats per minute’."],
      ["Waar staat de zwaarste tel in een 4/4-maat?", ["Op tel 1", "Op tel 4", "Op elke ‘en’"], 0, "Tel 1 is het begin van de maat. Die tel voelt het zwaarst."]
    ],
    controle: [
      ["Je telt 20 tellen in 15 seconden. Hoeveel BPM is dat?", "getal", [80, 0], "Vermenigvuldig met 4: 15 seconden is een kwart minuut."],
      ["Hoeveel achtste noten passen er in één 4/4-maat?", "getal", [8, 0], "Eén tel = twee achtsten. Een maat heeft 4 tellen."],
      ["Welke klank hoor je in ‘We Will Rock You’ op tel 2?", "tekst", ["klap", "een klap", "handklap", "klappen"], "Stamp – stamp – … Lees de leerkaart ‘Boxnotatie’."]
    ],
    criteria: ["Logboek elk lesuur ingevuld", "Ritmes en noten juist gelezen", "Beat van 4 maten met minstens 3 klanken, netjes genoteerd", "Beat werkt in de online beatmaker", "Beat naspeelbaar door een ander (of foutloos door mezelf)"],

    lessen: CSF.lessen3({
      t1: "Opstart: voel de puls",
      weet: "Noteer je favoriete muziek. Noteer ook de ritme-instrumenten in die muziek.",
      opdracht: "Lees de opdracht. Noteer de onderdelen van je eindproduct.",
      ideeen: "Luister met oortjes naar 3 nummers. Meet het tempo (BPM). Kies je klanken: bodypercussie, beatbox of tafelpercussie.",
      start: "Werkblad 1: lees de ritmes in boxnotatie. Tik ze zacht mee met je vingertoppen.",
      t2: "Componeren",
      werk2: "Oefen noten en tellen. Componeer je beat van 4 maten op papier. Bouw hem met oortjes na in de beatmaker.",
      t3: "Oefenen en opnemen",
      werk3: "Verbeter je beat. Schrijf je partituur netjes uit. Doe de naspeeltest.",
      presenteer: "Laat je beat zacht of via oortjes horen aan een medeleerling. Zet anders de link of opname op Smartschool."
    }),

    werkbundel: [
      { les: 1, html: `
        ${h.kader("De opdracht", "Componeer een <b>beat van 4 maten</b> met minstens <b>3 klanken</b>. Schrijf hem op in <b>boxnotatie</b> en bouw hem na in de online beatmaker. Een ander speelt je beat na met alleen jouw partituur. Werk in stilte. Oefen met oortjes of tik zacht met je vingertoppen.")}
        <p><b>Welke muziek hoor ik graag? Welke instrumenten maken het ritme?</b></p>${h.lijnen(1)}
        <h3>Meet het tempo</h3><p>Luister met oortjes. Tel 15 seconden lang de tellen. Vermenigvuldig met 4.</p>
        ${h.tabel(["Nummer", "Tellen in 15 s", "BPM (× 4)", "Snel of traag?"], 3, 22)}
        <p><b>Mijn klanken:</b> bodypercussie / beatbox / tafelpercussie</p>
        <h2>Werkblad 1 · Ritmes lezen</h2>
        <p>Lees elk ritme. Tik het zacht mee. Tel in je hoofd mee: 1 & 2 & 3 & 4 &.</p>
        <h3>A · We Will Rock You</h3>${raster([["Stamp", "xx..xx.."], ["Klap", "..x...x."]], 1)}
        <h3>B · Rechte rockbeat</h3>${raster([["Stamp", "x...x..."], ["Klap", "..x...x."], ["Knip", "xxxxxxxx"]], 1)}` },
      { les: 1, html: `
        <h3>C · Wat speel je op tel 3?</h3>${raster([["Stamp", "x..x.x.."], ["Klets", "..x....x"], ["Klap", "....x..."]], 1)}
        <p>Op tel 3 speel ik: ______________ &nbsp; Welk ritme vond je het moeilijkst? Waarom?</p>${h.lijnen(1)}
        ${h.leerkaart("Leerkaart · Puls, maat en boxnotatie", "<p>De <b>puls</b> is de vaste tel. Het <b>tempo</b> meet je in BPM (tellen per minuut). In een <b>4/4-maat</b> tel je 1 & 2 & 3 & 4 &. In <b>boxnotatie</b> is elke rij een klank. Elk vakje is een halve tel. Een bolletje = spelen.</p>")}
        ${h.leerkaart("Leerkaart · Klanken met je lichaam", "<p>Laag: <b>stamp</b> (basdrum). Midden: <b>klets</b> op je dij. Hoog: <b>klap</b> of <b>knip</b> (snare, hi-hat). Beatbox: <b>b</b> = bas, <b>t</b> = hi-hat, <b>k</b> = snare.</p>")}
        <h3>Wat lukte vandaag? Wat nog niet?</h3>${h.lijnen(2)}` },
      { les: 2, html: `
        <h2>Noten en tellen</h2>
        <table style="text-align:center"><tr><th>Noot</th><td>${noot("hele")}</td><td>${noot("halve")}</td><td>${noot("kwart")}</td><td>${noot("achtste")}</td></tr>
        <tr><th>Naam</th><td>hele</td><td>halve</td><td>kwart</td><td>achtste</td></tr><tr><th>Aantal tellen</th><td style="height:26px"></td><td></td><td></td><td></td></tr></table>
        <p>Hoeveel kwartnoten passen in één 4/4-maat? ____ &nbsp; Hoeveel achtsten? ____</p>
        <h2>Mijn beat · eerste versie</h2>
        <p>Vul je klanken in de eerste kolom in. Zet een bolletje op elke slag. Tip: begin met de laagste klank op tel 1.</p>
        ${raster([["", ""], ["", ""], ["", ""]], 2, true)}
        ${raster([["", ""], ["", ""], ["", ""]], 2, true)}
        <p><b>Bouw je beat na</b> in Chrome Music Lab (Song Maker of Rhythm) met je oortjes in. Klinkt het volgens plan? Wat verander je?</p>${h.lijnen(2)}
        <h3>Wat lukte vandaag? Wat leerde ik?</h3>${h.lijnen(2)}` },
      { les: 3, html: `
        <h2>Mijn beat · eindversie</h2>
        <table class="fiche"><tr><td class="lbl">Titel van mijn beat</td><td style="height:26px"></td></tr><tr><td class="lbl">Tempo (BPM)</td><td style="height:26px"></td></tr><tr><td class="lbl">Klanken</td><td style="height:26px"></td></tr></table>
        ${raster([["", ""], ["", ""], ["", ""], ["", ""]], 2, true)}
        ${raster([["", ""], ["", ""], ["", ""], ["", ""]], 2, true)}
        ${h.kader("Naspeeltest", "<p>Geef je partituur aan een andere leerling of aan iemand thuis. Zeg niets. Speel niet voor. Werk je alleen? Leg je partituur even weg. Speel daarna je beat van papier, zonder de beatmaker.</p><p>Lukte het? JA / NEEN · Wat was onduidelijk aan mijn partituur?</p>" + h.lijnen(1))}
        <p><b>Link naar mijn beat of opname:</b> ____________________________________________</p>
        <p><b>Presenteren (2 min):</b> laat je beat horen · je klanken · het moeilijkste stuk</p>` }
    ]
  });
})();
