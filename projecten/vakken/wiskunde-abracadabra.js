/* wiskunde · Abracadabra
   Eigen uitwerking (6 lesuren) van het CSF-project wiskunde rond goocheltrucs, Fibonacci en raadsels.
   De module uit de methode van de school staat niet op de openbare site: alle trucs, tabellen,
   tekeningen en raadsels hieronder zijn eigen materiaal of klassieke, vrij bekende wiskundetrucs. */
(function () {
  var h = CSF.h;
  function vink(lijst) { return "<table>" + lijst.map(function (x) { return '<tr><td style="width:7%;text-align:center;font-size:13pt">&#9744;</td><td>' + x + "</td></tr>"; }).join("") + "</table>"; }
  function fiche(lijst) { return '<table class="fiche">' + lijst.map(function (v) { return '<tr><td class="lbl">' + v[0] + '</td><td style="height:' + (v[1] || 30) + 'px">' + (v[2] || "") + "</td></tr>"; }).join("") + "</table>"; }
  // Goocheltabel: cel = rijgetal + kolomgetal, dus elke keuze van één getal per rij en kolom geeft dezelfde som
  function goocheltabel(r, c, kop) {
    return '<table style="width:auto;margin:6px auto;font-size:14pt;text-align:center">' + (kop ? '<tr><th style="width:44px">+</th>' + c.map(function (x, j) { return '<th style="width:44px">' + (j === 0 ? x : "") + "</th>"; }).join("") + "</tr>" : "") +
      r.map(function (ri, i) { return "<tr>" + (kop ? "<th>" + (i === 0 ? ri : "") + "</th>" : "") + c.map(function (cj) { return '<td style="width:44px;height:36px">' + (ri + cj) + "</td>"; }).join("") + "</tr>"; }).join("") + "</table>";
  }
  // Symbolentabel 10–99: alle veelvouden van 9 krijgen hetzelfde symbool
  function symbolen() {
    var sym = ["♣", "♦", "♥", "♠", "●", "▲", "■", "◆", "✿", "☀", "☾", "✚"], x = 7, r = "";
    for (var rij = 1; rij < 10; rij++) {
      r += "<tr>";
      for (var k = 0; k < 10; k++) {
        var g = rij * 10 + k; x = (x * 9301 + 49297) % 233280;
        var s = g % 9 === 0 ? "★" : sym[Math.floor(x / 233280 * sym.length)];
        r += '<td style="text-align:center;padding:1px 0"><span class="klein">' + g + '</span><br><span style="font-size:13pt">' + s + "</span></td>";
      }
      r += "</tr>";
    }
    return "<table>" + r + "</table>";
  }
  // Het verdwenen vierkantje: 8 × 8 = 64 wordt 5 × 13 = 65 (schaal 1 cm = 1 cm)
  function puzzel() {
    var g = 10, rooster = function (w, hh) { var s = ""; for (var i = 0; i <= w; i++) s += '<line x1="' + i * g + '" y1="0" x2="' + i * g + '" y2="' + hh * g + '" stroke="#ccc" stroke-width="0.3"/>'; for (var j = 0; j <= hh; j++) s += '<line x1="0" y1="' + j * g + '" x2="' + w * g + '" y2="' + j * g + '" stroke="#ccc" stroke-width="0.3"/>'; return s; };
    var st = 'fill="none" stroke="#111" stroke-width="0.8"';
    return '<div style="text-align:center"><svg width="82mm" height="82mm" viewBox="-1 -1 82 82">' + rooster(8, 8) +
      '<rect x="0" y="0" width="80" height="80" ' + st + '/><line x1="0" y1="50" x2="80" y2="50" ' + st + '/>' +
      '<line x1="0" y1="80" x2="80" y2="50" ' + st + '/><line x1="30" y1="0" x2="50" y2="50" ' + st + '/>' +
      '<g font-family="Arial" font-size="5" fill="#e2732b"><text x="10" y="30">A</text><text x="58" y="30">B</text><text x="18" y="74">C</text><text x="64" y="62">D</text></g></svg><br><span class="klein">8 cm × 8 cm · knip langs de dikke lijnen</span></div>';
  }

  CSF.project({
    id: "wiskunde-abracadabra",
    soort: "vak",
    vak: "wiskunde",
    jaar: "1e en 2e jaar",
    tijd: "6 lesuren",
    sterren: 5,
    naam: "Abracadabra",
    kort: "Ontsluier de geheimen van kaart- en goocheltrucs met wiskunde.",
    voorWie: "Voor sterke rekenaars die graag puzzelen en anderen verbazen.",
    omschrijving: "Vingervlugge kaarttrucs en verdwijnacts zijn spectaculair. Het publiek roept OOOOOH en AAAAH! Werp nu zelf een blik achter de schermen. Ontdek de berekeningen achter de trucs van een goochelaar. Is dat iets voor jou? Dan is deze opdracht op jouw maat! Misschien tover jij op het volgende familiefeest een konijn uit je hoed. 🪄🐇",
    doel: "Je voert goocheltrucs uit en ontdekt de wiskunde erachter. Je leert de rij van Fibonacci kennen. Je kraakt in groep een code met vraagstukken. Je lost raadsels op met een passende strategie. Je voert zelf een truc op en legt hem uit.",
    bereikt: ["Een verband ontdekken in een tabel", "Een wiskundige uitleg geven met letters (10a + b)", "De rij van Fibonacci herkennen en voortzetten", "Vraagstukken oplossen: evenredigheid, procenten, combinaties, kansen", "Een probleemoplossende strategie kiezen", "Samenwerken in een groep"],
    toepassen: ["Doorzetten bij een moeilijk raadsel", "Flexibel denken: een andere strategie proberen", "Samenwerken en luisteren naar groepsleden", "Durven presenteren"],
    materiaal: ["Werkbundel", "Een kaartspel (21 kaarten volstaan)", "Schaar, lat, potlood", "Een rekenmachine en een toestel met internet"],
    oplossing: "Op deze site, bij ‘Controleer je oplossing’. Je coach heeft de oplossingen van de code en de raadsels.",
    product: "Een uitgevoerde goocheltruc met wiskundige uitleg, de gekraakte code en de opgeloste raadsels",
    links: [["Rij van Fibonacci (Wikipedia)", "https://nl.wikipedia.org/wiki/Rij_van_Fibonacci"], ["Google Maps (voor de code)", "https://www.google.com/maps"]],
    leerkaarten: [
      ["Waarom werkt de goocheltabel?", "Elk getal in de tabel is de som van een getal boven de kolom en een getal voor de rij. Kies je uit elke rij en elke kolom precies één getal, dan gebruik je elk randgetal precies één keer. De som is dus altijd de som van alle randgetallen."],
      ["Een getal min de som van zijn cijfers", "Een getal van twee cijfers schrijf je als 10a + b. De som van de cijfers is a + b. Trek je af, dan krijg je 10a + b − a − b = 9a. De uitkomst is dus altijd een veelvoud van 9."],
      ["De rij van Fibonacci", "1, 1, 2, 3, 5, 8, 13, 21, 34, 55 … Elk getal is de som van de twee vorige. Leonardo van Pisa schreef erover in 1202. Hij kreeg later de bijnaam Fibonacci: zoon (filius) van Bonacci. De getallen duiken op in de natuur: de spiralen van een zonnebloem en van een romanesco."],
      ["Snel rekenen met Fibonacci", "Maak een rij zoals Fibonacci met twee eigen startgetallen. Tel de eerste tien getallen op. De som is altijd 11 keer het zevende getal."],
      ["Strategieën voor raadsels", "1. Maak een tekening, tabel of lijst. 2. Probeer alle mogelijkheden. 3. Zoek een patroon. 4. Splits het probleem op. 5. Maak een boomdiagram. 6. Werk van achter naar voor."]
    ],
    invalshoek: { intro: "Kies in lesuur 1 de truc die je op het einde opvoert.", keuzes: [
      ["De goocheltabel", "Je publiek vindt altijd jouw geheime getal."],
      ["De 21-kaartentruc", "Je vindt de gekozen kaart na drie keer delen."],
      ["Snel rekenen met Fibonacci", "Je telt tien getallen sneller op dan een rekenmachine."]] },
    nogTijd: "Maak zelf een goocheltabel van 5 op 5 die altijd jouw geboortejaar of je huisnummer geeft.",
    test: [
      ["Wat is het volgende getal: 1, 1, 2, 3, 5, 8, 13, …?", ["21", "18", "26"], 0, "8 + 13 = 21."],
      ["Wat krijg je altijd als je van een getal van twee cijfers de som van de cijfers aftrekt?", ["Een veelvoud van 9", "Een even getal", "Een veelvoud van 10"], 0, "10a + b − (a + b) = 9a."],
      ["Welke strategie past bij ‘Hoeveel combinaties kan je maken?’", ["Een boomdiagram", "Van achter naar voor werken", "Een patroon zoeken"], 0, "Een boomdiagram toont alle combinaties."],
      ["Waar werd Fibonacci geboren?", ["Pisa", "Rome", "Venetië"], 0, "Daarom heet hij ook Leonardo van Pisa."]
    ],
    controle: [
      ["Wat is de som van de goocheltabel van werkblad 1?", "getal", [12, 0], "Tel de getallen bovenaan en vooraan op."],
      ["Het zevende getal van je rij is 29. Wat is de som van de eerste tien getallen?", "getal", [319, 0], "11 × het zevende getal."],
      ["8 × 8 = 64 en 5 × 13 = …", "getal", [65, 0], "Waar komt dat extra vierkantje vandaan?"],
      ["Raadsel 1 van de code: hoeveel km in een uur?", "getal", [34, 0], "Een half uur is de helft van een uur."],
      ["Op welke positie ligt de gekozen kaart na drie keer delen bij de 21-kaartentruc?", "getal", [11, 0], "De middelste kaart van 21."]
    ],
    criteria: ["Logboek elk lesuur ingevuld", "Trucs uitgevoerd en de wiskunde erachter uitgelegd", "Rij van Fibonacci begrepen en toegepast", "Code gekraakt met correcte berekeningen", "Raadsels opgelost met een passende strategie", "Truc vlot opgevoerd en uitgelegd", "Goed samengewerkt in groep"],

    lessen: CSF.lessenN({
      t1: "Goochelen met tabellen",
      weet: "Noteer een goocheltruc die je kent. Weet je hoe hij werkt?",
      opdracht: "Lees de opdracht. Kies de truc die je op het einde opvoert.",
      ideeen: "Probeer de goocheltabel. Bedenk waarom het werkt.",
      start: "Werkblad 1: doe de truc met de goocheltabel. Zoek het verband met de tip. Maak een eigen tabel.",
      midden: [
        { titel: "Goochelen met kaarten en symbolen", werk: "Werkblad 2: doe de 21-kaartentruc in duo. Zoek waarom de kaart altijd in het midden belandt. Doe de truc met de symbolen en verklaar hem." },
        { titel: "Fibonacci", werk: "Werkblad 3: knip de puzzel en zoek het verdwenen vierkantje. Ontdek de rij van Fibonacci. Reken snel met Fibonacci." },
        { titel: "Kraak de code (groep)", werk: "Werkblad 4: los in groepjes van 2 tot 4 de zes raadsels op. Kraak de code en vind de echte naam van Fibonacci." },
        { titel: "Raadsels oplossen", werk: "Werkblad 5: los de raadsels op. Noteer telkens welke strategie je gebruikte." }
      ],
      laatste: { titel: "Showtime en evaluatie", werk: "Oefen je truc. Voer hem op voor een publiek. Leg daarna de wiskunde uit. Vul de evaluatie in.", presenteer: "Voer je goocheltruc op en ontmasker hem met wiskunde." }
    }),

    werkbundel: [
      { les: 1, html: `
        ${h.kader("De opdracht", "Voer goocheltrucs uit en ontdek de <b>wiskunde</b> erachter. Leer de rij van <b>Fibonacci</b> kennen. Kraak in groep een <b>code</b>. Los <b>raadsels</b> op. Voer op het einde zelf een truc op en ontmasker hem.")}
        <h2>Werkblad 1 · Goochelen met tabellen</h2>
        <ol><li>Omcirkel een getal in de tabel.</li><li>Schrap alle andere getallen in dezelfde rij en dezelfde kolom.</li><li>Omcirkel een getal dat nog niet geschrapt is. Schrap opnieuw zijn rij en kolom.</li><li>Herhaal tot alle getallen omcirkeld of geschrapt zijn.</li><li>Tel de omcirkelde getallen op. Abracadabra: is dat jouw leeftijd?</li></ol>
        ${goocheltabel([2, 0, 1, 3], [1, 2, 0, 3], false)}
        <p>Probeer het nog twee keer met andere keuzes. <b>Wat stel je vast?</b></p>${h.lijnen(2)}
        <p><b>Tip:</b> zet een getal boven elke kolom en voor elke rij. Elk getal in de tabel is de som van zijn rijgetal en kolomgetal. Twee randgetallen staan er al.</p>
        ${goocheltabel([2, 0, 1, 3], [1, 2, 0, 3], true)}` },
      { les: 1, html: `
        ${h.leerkaart("Leerkaart · Waarom werkt de goocheltabel?", "<p>Elk getal is de som van een rijgetal en een kolomgetal. Kies je uit elke rij en kolom precies één getal, dan gebruik je elk randgetal precies één keer. De som is dus altijd de som van alle randgetallen.</p>")}
        <h3>Leg met je eigen woorden uit waarom de truc altijd werkt</h3>${h.lijnen(3)}
        <h3>Maak je eigen goocheltabel</h3>
        <p>Kies 4 rijgetallen en 4 kolomgetallen die samen jouw geheime getal geven. Vul de tabel in. Laat een medeleerling de truc doen.</p>
        <table style="width:auto;margin:auto;text-align:center"><tr><th style="width:46px">+</th>${[1, 2, 3, 4].map(function () { return '<th style="width:46px;height:30px"></th>'; }).join("")}</tr>${[1, 2, 3, 4].map(function () { return '<tr><th style="height:40px"></th>' + [1, 2, 3, 4].map(function () { return "<td></td>"; }).join("") + "</tr>"; }).join("")}</table>
        <p>Mijn geheime getal: ______ &nbsp; = som van de rijgetallen ______ + som van de kolomgetallen ______</p>` },
      { les: 2, html: `
        <h2>Werkblad 2 · Goochelen met kaarten: de 21-kaartentruc</h2>
        <p>Werk in duo. De goochelaar neemt 21 kaarten.</p>
        <ol><li>Leg de kaarten open in 3 kolommen van 7 kaarten: rij per rij, van links naar rechts.</li><li>Je tegenspeler kiest in gedachten één kaart. Hij zegt enkel in welke kolom ze ligt.</li><li>Raap de kolommen op. Leg de gekozen kolom <b>tussen</b> de twee andere.</li><li>Leg de kaarten opnieuw uit in 3 kolommen, rij per rij. Vraag opnieuw welke kolom.</li><li>Herhaal stap 3 en 4 nog één keer. Raap op zoals in stap 3.</li><li>Tel 11 kaarten af. De elfde kaart is de gekozen kaart!</li></ol>
        <h3>Waarom werkt het? Volg de positie van de gekozen kaart.</h3>
        <p>Na het oprapen ligt de gekozen kolom in het midden: op plaats 8 tot 14. Waar komen die kaarten bij het uitleggen terecht? Vul de tabel in.</p>
        <table><tr><th>Ronde</th><th>Mogelijke posities van de kaart na het oprapen</th></tr><tr><td>na ronde 1</td><td>8, 9, 10, 11, 12, 13, 14</td></tr><tr><td>na ronde 2</td><td style="height:30px"></td></tr><tr><td>na ronde 3</td><td style="height:30px"></td></tr></table>
        ${h.lijnen(2)}` },
      { les: 2, html: `
        <h2>Goochelen met symbolen</h2>
        <ol><li>Kies een getal van twee cijfers.</li><li>Tel de twee cijfers op.</li><li>Trek die som af van je getal.</li><li>Zoek het symbool bij je uitkomst in de tabel. Ik voorspel jouw symbool: ★</li></ol>
        ${symbolen()}
        <p>Probeer het met vijf andere getallen. Omcirkel elke ★ in de tabel. <b>Wat valt je op?</b></p>${h.lijnen(2)}
        ${h.leerkaart("Leerkaart · Een getal min de som van zijn cijfers", "<p>Een getal van twee cijfers schrijf je als <b>10a + b</b>. De som van de cijfers is a + b. Trek je af: 10a + b − a − b = <b>9a</b>. De uitkomst is altijd een veelvoud van 9.</p>")}` },
      { les: 3, html: `
        <h2>Werkblad 3 · Het verdwenen vierkantje</h2>
        <p>Knip het vierkant uit langs de dikke lijnen: twee trapezia (A en B) en twee driehoeken (C en D).</p>
        ${puzzel()}
        ${fiche([["Oppervlakte van het vierkant", 26, "8 cm × 8 cm = ______ cm²"], ["Leg met de vier stukken een rechthoek van 5 cm op 13 cm. Oppervlakte?", 34, "5 cm × 13 cm = ______ cm²"], ["Waar komt het extra vierkantje vandaan? Kijk heel goed naar de schuine lijn.", 60]])}
        <h3>De getallen 3, 5, 8 en 13</h3>
        <p>Vul de rij aan: 1, 1, 2, 3, 5, 8, 13, ____, ____, ____, ____</p>
        <p><b>Hoe vind je het volgende getal?</b></p>${h.lijnen(1)}` },
      { les: 3, html: `
        ${h.leerkaart("Leerkaart · De rij van Fibonacci", "<p>Elk getal is de som van de twee vorige. Leonardo schreef erover in 1202. Hij kreeg later de bijnaam Fibonacci: zoon (<i>filius</i>) van Bonacci. Je vindt de getallen in de natuur: een romanesco heeft 8 spiralen in de ene richting en 13 in de andere. Zijn echte familienaam ontdek je in de code van lesuur 4.</p>")}
        <h2>Snel rekenen met Fibonacci</h2>
        <ol><li>Kies twee getallen kleiner dan 10. Zet ze onder elkaar.</li><li>Tel ze op. Zet de som eronder.</li><li>Tel telkens de twee laatste getallen op, tot je tien getallen hebt.</li><li>Laat een medeleerling de som berekenen. Jij bent sneller!</li></ol>
        <table><tr><th>Nr.</th><th>Rij 1</th><th>Rij 2</th><th>Rij 3</th><th>Nr.</th><th>Rij 1</th><th>Rij 2</th><th>Rij 3</th></tr>${[1, 2, 3, 4, 5].map(function (n) { return '<tr><td>' + n + '</td><td style="height:26px"></td><td></td><td></td><td>' + (n + 5) + "</td><td></td><td></td><td></td></tr>"; }).join("")}<tr><th>Som</th><td colspan="3"></td><th>7e getal × 11</th><td colspan="3"></td></tr></table>
        <p><b>Wat stel je vast? Probeer het te verklaren:</b> noem de startgetallen a en b en schrijf de tien getallen met a en b.</p>${h.lijnen(3)}` },
      { les: 4, html: `
        <h2>Werkblad 4 · Kraak de code (groep)</h2>
        <p>Werk in groepjes van 2 tot 4. Welk groepje kraakt als eerste de code? Fibonacci heette eigenlijk Leonardo. Maar wat was zijn familienaam? <b>Tip: elk antwoord is een getal uit de rij van Fibonacci.</b></p>
        <ol style="line-height:1.5">
        <li><b>Fietsen.</b> Een fietser rijdt 17 km in een half uur. Hoeveel km rijdt hij in een uur aan hetzelfde tempo? ______</li>
        <li><b>Schilders.</b> Met 4 schilders duurt een klus 10 dagen. Hoeveel dagen duurt hij met 5 schilders? ______</li>
        <li><b>Leerlingen.</b> Vorig jaar telde de school 800 leerlingen, dit jaar 808. Met hoeveel procent groeide de school? ______ %</li>
        <li><b>IJsjes.</b> Je kiest één soort ijs uit 3 en één topping uit 7. Hoeveel combinaties zijn er? Maak een boomdiagram. ______</li>
        <li><b>Kaars.</b> Een kaars van 20 cm brandt 3 cm per uur korter. Na hoeveel uur is ze nog 14 cm? ______</li>
        <li><b>Kortingsballen.</b> In een bak zitten 30 ballen: 9 zwarte (geen korting), 5 blauwe (5 %), 3 paarse (10 %), 8 oranje (20 %), 4 groene (30 %) en 1 rode (alles gratis). Hoeveel ballen geven meer dan 10 % korting? ______ op 30</li></ol>
        <h3>De code</h3>
        <table><tr><th></th><th>graden</th><th>minuten</th><th>seconden</th></tr>
        <tr><td><b>Breedtegraad (N)</b></td><td class="klein">raadsel 1 + 2 + 3</td><td class="klein">raadsel 1 + 2 + 3</td><td class="klein">raadsel 4 + 5</td></tr><tr><td></td><td style="height:30px"></td><td></td><td></td></tr>
        <tr><td><b>Lengtegraad (O)</b></td><td class="klein">raadsel 2 + 5</td><td class="klein">raadsel 4 + 5</td><td class="klein">raadsel 1 + 3 + 6</td></tr><tr><td></td><td style="height:30px"></td><td></td><td></td></tr></table>
        <p>Typ de coördinaten in Google Maps, bijvoorbeeld 43°43'23"N 10°23'48"E (met jouw getallen). Welk gebouw vind je? In welke stad? Nu ken je de familienaam van Fibonacci: Leonardo ______________</p>` },
      { les: 5, html: `
        <h2>Werkblad 5 · Raadsels oplossen</h2>
        ${h.leerkaart("Leerkaart · Strategieën", "<p>1. Maak een tekening, tabel of lijst. 2. Probeer alle mogelijkheden. 3. Zoek een patroon. 4. Splits het probleem op. 5. Maak een boomdiagram. 6. Werk van achter naar voor.</p>")}
        <p><b>Raadsel 1 · Handen schudden.</b> Vijf vrienden geven elkaar allemaal één keer een hand. Hoeveel handdrukken zijn dat?</p>
        <p class="klein">Strategie nr. ____ &nbsp; Oplossing:</p>${h.vak("", 70)}
        <p><b>Raadsel 2 · Op restaurant.</b> Er zijn 3 voorgerechten, 4 hoofdgerechten en 2 desserts. Hoeveel verschillende menu’s kan je samenstellen?</p>
        <p class="klein">Strategie nr. ____ &nbsp; Oplossing:</p>${h.vak("", 70)}
        <p><b>Raadsel 3 · Snoepjes raden.</b> Lien denkt dat er 45 snoepjes in de pot zitten. ‘Neen, het zijn er 4 meer of 4 minder.’ Tom denkt 47. ‘Neen, het zijn er 6 meer of 6 minder.’ Hoeveel snoepjes zitten er in de pot?</p>
        <p class="klein">Strategie nr. ____ &nbsp; Oplossing:</p>${h.vak("", 60)}
        <p><b>Raadsel 4 · Het geheime getal.</b> Ik denk aan een getal. Ik verdubbel het. Ik tel er 6 bij. Ik deel door 2. Ik krijg 11. Aan welk getal dacht ik?</p>
        <p class="klein">Strategie nr. ____ &nbsp; Oplossing:</p>${h.vak("", 60)}` },
      { les: 6, html: `
        <h2>Showtime en evaluatie</h2>
        ${fiche([["Mijn truc", 30], ["Zo voer ik hem op (stappen)", 80], ["Zo ontmasker ik hem met wiskunde", 80]])}
        <h3>Zelfevaluatie en evaluatie van mijn groepsleden</h3>
        <p class="klein">OV = onvoldoende · VO = voldoende · GO = goed · ZG = zeer goed</p>
        <table style="text-align:center"><tr><th style="text-align:left"></th><th>Ik</th><th>Groepslid 1</th><th>Groepslid 2</th><th>Groepslid 3</th></tr>
        ${["Ik herken de rij van Fibonacci.", "Ik kan de wiskunde achter een truc uitleggen.", "Ik breng correcte informatie aan in de groep.", "Ik toon inzet.", "Ik respecteer de mening van anderen.", "Ik kan omgaan met kritiek.", "Ik spreek Standaardnederlands tijdens het groepswerk."].map(function (x) { return '<tr><td style="text-align:left">' + x + "</td>" + '<td class="klein">OV VO GO ZG</td>'.repeat(4) + "</tr>"; }).join("")}</table>
        ${fiche([["Hoe verliep het groepswerk? Wat kan beter?", 60]])}` }
    ]
  });
})();
