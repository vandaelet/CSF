/* Oefenproject lichamelijke opvoeding · Ontwerp een nieuwe sport (2 lesuren)
   Oefent: duidelijk en volledig schrijven, testen bij een ander, bijsturen. */
(function () {
  var h = CSF.h;
  function fiche(l) { return '<table class="fiche">' + l.map(function (v) { return '<tr><td class="lbl">' + v[0] + '</td><td style="height:' + (v[1] || 28) + 'px">' + (v[2] || "") + "</td></tr>"; }).join("") + "</table>"; }

  CSF.project({
    id: "oefen-sport",
    soort: "oefen",
    domein: "lichamelijke opvoeding",
    jaar: "1e jaar",
    tijd: "2 lesuren",
    sterren: 2,
    naam: "Ontwerp een nieuwe sport",
    kort: "Bedenk een sport die nog niet bestaat. Schrijf de regels zo duidelijk dat iedereen ze snapt.",
    voorWie: "Voor wie graag sport, spelletjes bedenkt en houdt van eerlijke regels.",
    omschrijving: "Voetbal, basketbal, korfbal: ooit heeft iemand ze allemaal bedacht. ⚽🏀 Nu is het jouw beurt. Je ontwerpt een nieuwe sport: met een veld, materiaal, regels, een puntentelling en tekens voor de scheidsrechter. De grote uitdaging? Je regels zo opschrijven dat een klasgenoot meteen weet hoe hij moet spelen, zonder dat jij iets moet uitleggen.",
    doel: "Je schrijft regels die duidelijk en volledig zijn, je laat ze testen door een klasgenoot en je stuurt ze bij.",
    bereikt: ["De onderdelen van een sport benoemen", "Regels kort en duidelijk opschrijven", "Een puntentelling bedenken en toepassen", "Regels verbeteren na een test"],
    toepassen: ["Volledig en nauwkeurig schrijven", "Feedback vragen en gebruiken", "Denken aan veiligheid en aan iedereen"],
    materiaal: ["Werkbundel", "Potlood en een lat voor de schets van het veld"],
    oplossing: "Controleer de oefeningen met de regels van Kegelbal op deze site bij ‘Controleer je oplossing’.",
    product: "Een regelblad met een schets van het veld, getest door een klasgenoot",
    leerkaarten: [
      ["Wat maakt een sport?", "Elke sport heeft dezelfde onderdelen: een <b>doel</b> (hoe win je?), een <b>veld</b>, <b>materiaal</b>, <b>regels</b> over wat mag en niet mag, een <b>puntentelling</b> en <b>straffen</b> bij een fout. Een goede sport is ook <b>veilig</b> en <b>iedereen</b> kan meedoen.",
        CSF.lk.tabel(['Onderdeel', 'Vraag'], [['Doel', 'Hoe win je?'], ['Veld en materiaal', 'Hoe groot? Wat heb je nodig?'], ['Spelers', 'Hoeveel per team? Wie doet wat?'], ['Regels', 'Wat mag wel, wat niet?'], ['Punten', 'Wanneer scoor je, hoeveel?'], ['Fouten', 'Wat gebeurt er bij een fout?']]) +
        CSF.lk.tip('Combineer twee sporten die je kent tot iets nieuws. Bv. tennis met een frisbee, of voetbal op één been.')],
      ["Regels die iedereen snapt", "Goede regels zijn <b>kort</b>: één regel per zin. Je <b>nummert</b> ze, zodat je naar een regel kan verwijzen. En ze zijn <b>volledig</b>: ook bij rare situaties weet je wat er gebeurt. Daarom laat je ze testen door iemand die je sport nog niet kent.",
        CSF.lk.tabel(['Onduidelijk ✗', 'Duidelijk ✓'], [['Je mag niet te lang de bal hebben.', 'Je mag de bal hoogstens 3 seconden vasthouden.'], ['Als je goed gooit, krijg je punten.', 'Een kegel omgooien = 2 punten.'], ['Bij een fout is de bal voor de anderen.', 'Bij een fout krijgt het andere team de bal op de plaats van de fout.']]) +
        CSF.lk.stappen(['Laat een klasgenoot je regels lezen.', 'Laat hem drie ‘wat als’-vragen stellen: wat als de bal uit gaat? Wat als twee spelers botsen?', 'Kan je regelblad elke vraag beantwoorden? Zo niet, vul aan.']) +
        CSF.lk.let('Denk aan veiligheid: geen regels waarbij spelers hard tegen elkaar of tegen een muur lopen.')]
    ],
    invalshoek: { intro: "Kies in lesuur 1 waar je sport gespeeld wordt.", keuzes: [["In de turnzaal", "Met materiaal dat er altijd ligt: ballen, kegels, matten."], ["Op de speelplaats", "Buiten, met weinig materiaal."], ["In de klas", "Een rustige sport aan tafel of in een kring."]] },
    nogTijd: "Ontwerp tekens voor de scheidsrechter: hoe toont hij een punt, een fout en het einde van de wedstrijd?",
    test: [
      ["Waarom nummer je de regels?", ["Zo kan je naar een regel verwijzen", "Omdat het mooi staat", "Zodat je er meer hebt"], 0, "‘Dat is tegen regel 4.’"],
      ["Welke regel is het duidelijkst?", ["Je mag de bal hoogstens 3 seconden vasthouden.", "Je mag niet te lang de bal hebben.", "Hou de bal niet zo lang vast."], 0, "Een getal maakt het duidelijk."],
      ["Waarom laat je je regels testen door een klasgenoot?", ["Hij kent je sport niet en ziet wat ontbreekt", "Om hem bezig te houden", "Omdat het verplicht is"], 0, "Zo ontdek je wat er nog mist."]
    ],
    controle: [
      ["Werkblad 1, situatie 1: Rood gooit in één worp 2 kegels om en later nog 1 kegel. Hoeveel punten heeft Rood?", "getal", [6, 0], "Elke kegel is 2 punten."],
      ["Werkblad 1, situatie 2: Blauw gooit in één worp alle 3 de kegels om. Hoeveel punten?", "getal", [7, 0], "Lees regel 5 nog eens."],
      ["Werkblad 1, situatie 3: Rood gooit per ongeluk een eigen kegel om. Daarna gooit Blauw 1 kegel van Rood om. Hoeveel punten heeft Blauw?", "getal", [3, 0], "Lees regel 6."],
      ["Werkblad 1, situatie 4: hoeveel minuten wordt er gespeeld in een volledige wedstrijd?", "getal", [10, 0], "Lees regel 7."]
    ],
    criteria: ["Logboek elk lesuur ingevuld", "Alle onderdelen van een sport aanwezig", "Genummerde, korte en duidelijke regels", "Getest door een klasgenoot en aangevuld", "Veilig en voor iedereen speelbaar"],
    lessen: CSF.lessen2({
      t1: "Kegelbal en mijn idee",
      opdracht: "Lees de projectfiche. Wat moet er op je regelblad staan?",
      ideeen: "Lees de regels van Kegelbal in werkblad 1 en los de situaties op. Bedenk daarna drie ideeën voor je eigen sport en kies het beste.",
      start: "Vul de onderdelen van je sport in. Maak een schets van het veld.",
      t2: "Regels schrijven en testen",
      werk: "Schrijf je regelblad met genummerde regels. Laat een klasgenoot het lezen en drie ‘wat als’-vragen stellen. Vul je regels aan.",
      presenteer: "Leg je sport in één minuut uit aan een groepje. Laat hen zeggen of ze zouden kunnen spelen."
    }),
    werkbundel: [
      { les: 1, html: `
        ${h.kader("De opdracht", "Ontwerp een nieuwe sport. Schrijf een regelblad dat zo duidelijk is dat een klasgenoot zonder uitleg kan spelen. Laat het testen en vul aan.")}
        <h2>Werkblad 1 · Voorbeeld: de regels van Kegelbal</h2>
        <ol style="margin:4px 0 8px"><li>Twee teams van 5 spelers. Het veld is 20 m lang en 10 m breed.</li><li>Achter elke achterlijn staan 3 kegels van het eigen team.</li><li>Je gooit de bal. Trappen mag niet.</li><li>Met de bal in je handen mag je niet lopen.</li><li>Een kegel van de tegenstander omgooien = 2 punten. Alle 3 de kegels in één worp = 1 bonuspunt extra.</li><li>Gooi je een kegel van je eigen team om? Dan krijgt de tegenstander 1 punt.</li><li>Een wedstrijd duurt 2 keer 5 minuten.</li></ol>
        ${fiche([["Situatie 1: Rood gooit in één worp 2 kegels om en later nog 1 kegel. Punten van Rood?", 28], ["Situatie 2: Blauw gooit in één worp alle 3 de kegels om. Punten?", 28], ["Situatie 3: Rood gooit een eigen kegel om. Daarna gooit Blauw 1 kegel van Rood om. Punten van Blauw?", 28], ["Situatie 4: hoeveel minuten wordt er gespeeld?", 26]])}
        <h3>Mijn sport</h3>
        ${fiche([["Drie ideeën", 54, "1.<br>2.<br>3."], ["Naam van mijn sport", 26], ["Doel: hoe win je?", 30], ["Spelers en materiaal", 30]])}` },
      { les: 2, html: `
        <h2>Mijn regelblad: ____________________</h2>
        ${h.vak("Schets van het veld (met maten)", 170)}
        <h3>Regels</h3>
        <ol>${[1, 2, 3, 4, 5, 6, 7, 8].map(function () { return '<li><div class="lijn"></div></li>'; }).join("")}</ol>
        ${fiche([["Tester", 24], ["Drie ‘wat als’-vragen van de tester", 66, "1.<br>2.<br>3."], ["Wat heb ik aangevuld?", 40]])}` }
    ]
  });
})();
