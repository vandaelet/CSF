/* Oefenproject Creatief · beeld · Zelfportret in vijf stijlen */
(function () {
  var h = CSF.h;

  // Hulptekening: verhoudingen van het gezicht
  function gezicht(hulplijnen, w, hgt) {
    var cx = w / 2, top = 8, bot = hgt - 8, cy = (top + bot) / 2, rx = w * 0.36, ogen = cy, neus = cy + (bot - cy) / 2, mond = neus + (bot - neus) / 3;
    var s = '<svg viewBox="0 0 ' + w + " " + hgt + '" width="' + w + '" height="' + hgt + '"><ellipse cx="' + cx + '" cy="' + cy + '" rx="' + rx + '" ry="' + (bot - top) / 2 + '" fill="none" stroke="#111" stroke-width="1.5"/>';
    if (hulplijnen) {
      var l = function (y, t) { return '<line x1="' + (cx - rx - 10) + '" y1="' + y + '" x2="' + (cx + rx + 10) + '" y2="' + y + '" stroke="#17808a" stroke-dasharray="4 3"/><text x="' + (cx + rx + 12) + '" y="' + (y + 4) + '" font-size="10" font-family="Arial" fill="#17808a">' + t + "</text>"; };
      s += '<line x1="' + cx + '" y1="' + (top - 4) + '" x2="' + cx + '" y2="' + (bot + 4) + '" stroke="#17808a" stroke-dasharray="4 3"/>' + l(ogen, "ogen") + l(neus, "neus") + l(mond, "mond");
      var e = rx * 2 / 5;
      [-1, 1].forEach(function (k) { s += '<ellipse cx="' + (cx + k * e) + '" cy="' + ogen + '" rx="' + e / 2.4 + '" ry="' + e / 5 + '" fill="none" stroke="#111"/>'; });
      s += '<path d="M ' + (cx - e / 3) + " " + neus + " q " + e / 3 + " " + e / 4 + " " + (2 * e / 3) + ' 0" fill="none" stroke="#111"/>';
      s += '<path d="M ' + (cx - e * 0.6) + " " + mond + " q " + e * 0.6 + " " + e / 3 + " " + e * 1.2 + ' 0" fill="none" stroke="#111"/>';
    }
    return s + "</svg>";
  }

  CSF.project({
    id: "beeld",
    soort: "oefen",
    domein: "Creatief · beeld",
    jaar: "1e jaar",
    tijd: "3 lesuren",
    sterren: 2,
    voorWie: "Voor leerlingen met plezier in tekenen en zin om naar kunst te leren kijken.",
    naam: "Zelfportret in vijf stijlen: word een kunstenaar",
    kort: "Ontdek vijf kunststromingen. Teken een gezicht in de juiste verhoudingen. Maak een zelfportret in jouw stijl.",
    omschrijving: "Monet, Ensor, Picasso, Magritte en Warhol schilderden allemaal mensen. Elk van hen deed dat op een totaal andere manier. Word een stijldetective. Ontdek de typische kenmerken van elke stroming. Leer de verhoudingen van een gezicht. Maak daarna een zelfportret in je favoriete stijl.",
    doel: "Je leert kijken naar kunst zoals een kunstenaar. Je herkent de kenmerken van een stijl. Je gebruikt die kennis voor een eigen creatie.",
    bereikt: ["Vijf kunststromingen herkennen aan hun kenmerken", "Een gezicht tekenen in de juiste verhoudingen", "Kenmerken van een stijl bewust gebruiken in eigen werk", "Je eigen kunstwerk voorstellen met een kunstenaarsbordje"],
    toepassen: ["Nauwkeurig kijken en vergelijken", "Durven proberen en opnieuw beginnen", "Kiezen uit meerdere schetsen", "Netjes en geconcentreerd werken"],
    materiaal: ["Werkbundel", "Potlood (liefst ook een zacht potlood), gom, kleurpotloden of stiften", "Een toestel met internet (kunstwerken opzoeken en de camera als spiegel)"],
    oplossing: "Op deze site, bij ‘Controleer je oplossing’. Je zelfportret heeft geen juiste oplossing. Je coach beoordeelt het met het rooster.",
    product: "Een zelfportret (A4) in de stijl van jouw keuze en een kunstenaarsbordje",
    leerkaarten: [
      ["Impressionisme", "Claude Monet schilderde in 1872 ‘Impressie, opkomende zon’. Die titel gaf de stroming haar naam. Kenmerken: losse, zichtbare penseelstreken. Licht en kleur zijn belangrijker dan details.",
        CSF.lk.fig('<svg viewBox="0 0 420 190" role="img" aria-label="Een landschap met losse penseelstreken"><rect x="60" y="10" width="300" height="170" fill="#f7e9c8"/><g stroke-width="7" stroke-linecap="round"><path d="M80 40 l14 -4" stroke="#f2a65a"/><path d="M110 30 l12 3" stroke="#f6d365"/><path d="M140 44 l14 -2" stroke="#f2a65a"/><path d="M175 28 l12 4" stroke="#fbe7a1"/><path d="M210 40 l14 -3" stroke="#f6d365"/><path d="M250 30 l12 2" stroke="#f2a65a"/><path d="M290 42 l14 -3" stroke="#fbe7a1"/><path d="M320 30 l12 3" stroke="#f6d365"/><path d="M90 70 l14 2" stroke="#a7c7e7"/><path d="M130 64 l12 -2" stroke="#c9a7e7"/><path d="M170 72 l14 1" stroke="#a7c7e7"/><path d="M290 66 l12 2" stroke="#c9a7e7"/><path d="M330 72 l12 -3" stroke="#a7c7e7"/><path d="M80 130 l16 -2" stroke="#4f8fbf"/><path d="M110 140 l16 2" stroke="#6fa8dc"/><path d="M150 128 l16 -1" stroke="#4f8fbf"/><path d="M190 142 l16 2" stroke="#9fc5e8"/><path d="M230 130 l16 -2" stroke="#4f8fbf"/><path d="M270 140 l16 1" stroke="#6fa8dc"/><path d="M310 128 l16 2" stroke="#4f8fbf"/><path d="M100 160 l16 0" stroke="#3d6f99"/><path d="M160 162 l16 -2" stroke="#3d6f99"/><path d="M240 160 l16 1" stroke="#3d6f99"/><path d="M300 162 l16 -1" stroke="#3d6f99"/><path d="M200 138 l10 0" stroke="#f28c28"/><path d="M204 150 l10 0" stroke="#f28c28"/></g><circle cx="230" cy="92" r="18" fill="#f28c28"/></svg>', 'Geen scherpe lijnen: losse toetsen kleur. Van dichtbij zie je vlekjes, van ver een zonsopgang.') +
CSF.lk.punten(['Schilders gingen naar buiten en schilderden snel, voor het licht veranderde.', 'Ze zetten kleuren náást elkaar in plaats van ze te mengen.', 'Schaduwen zijn niet grijs, maar blauw of paars.']) +
CSF.lk.tip('Teken je zelfportret met korte streepjes in drie of vier kleuren. Kijk naar waar het licht op je gezicht valt.')],
      ["Expressionisme", "De Oostendse schilder James Ensor schilderde mensen met maskers en felle kleuren. Kenmerken: kleuren en vormen tonen een gevoel, geen echt uitzicht. Een gezicht mag groen of paars zijn.",
        CSF.lk.fig('<svg viewBox="0 0 420 200" role="img" aria-label="Een gezicht in felle, onechte kleuren"><rect x="110" y="10" width="200" height="180" fill="#2b2d6e"/><path d="M150 40 Q210 0 270 40 Q290 120 250 170 Q210 190 170 170 Q130 120 150 40Z" fill="#6fcf73" stroke="#1d1d1b" stroke-width="4"/><path d="M175 85 q12 -14 24 0" fill="none" stroke="#d9363e" stroke-width="6"/><path d="M222 85 q12 -14 24 0" fill="none" stroke="#d9363e" stroke-width="6"/><circle cx="187" cy="92" r="6" fill="#1d1d1b"/><circle cx="234" cy="92" r="6" fill="#1d1d1b"/><path d="M210 100 l-8 30 l14 0" fill="none" stroke="#8e44ad" stroke-width="5"/><path d="M180 148 Q210 135 240 148" fill="none" stroke="#8e44ad" stroke-width="6"/><path d="M120 30 q10 20 0 40 q-10 20 0 40" fill="none" stroke="#FCAF17" stroke-width="5"/><path d="M300 30 q-10 20 0 40 q10 20 0 40" fill="none" stroke="#FCAF17" stroke-width="5"/></svg>', 'De kleuren kloppen niet met de werkelijkheid. Ze tonen een gevoel: onrustig, bang of boos.') +
CSF.lk.tabel(['Gevoel', 'Kleuren en lijnen'], [['boos', 'rood en zwart, scherpe hoeken'], ['verdrietig', 'blauw en grijs, lijnen die naar beneden lopen'], ['onrustig', 'felle tegenkleuren naast elkaar, golvende lijnen']]) +
CSF.lk.tip('Kies eerst één gevoel. Kies daarna de kleuren die dat gevoel tonen, niet de kleuren die je in de spiegel ziet.')],
      ["Kubisme", "Pablo Picasso en Georges Braque begonnen rond 1907 met het kubisme. Kenmerken: een gezicht in hoekige vlakken, van voren en opzij tegelijk.",
        CSF.lk.fig('<svg viewBox="0 0 420 200" role="img" aria-label="Een gezicht in hoekige vlakken"><polygon points="140,30 260,20 290,110 250,185 160,180 125,100" fill="#e5c39b" stroke="#1d1d1b" stroke-width="3"/><polygon points="200,25 260,20 290,110 210,100" fill="#c99b6d" stroke="#1d1d1b" stroke-width="3"/><polygon points="160,70 195,62 195,88 162,92" fill="#fff" stroke="#1d1d1b" stroke-width="3"/><circle cx="178" cy="77" r="7" fill="#1d1d1b"/><polygon points="235,70 262,78 240,92" fill="#fff" stroke="#1d1d1b" stroke-width="3"/><circle cx="246" cy="80" r="5" fill="#1d1d1b"/><polygon points="210,95 245,140 210,140" fill="#b07d4f" stroke="#1d1d1b" stroke-width="3"/><polygon points="175,155 230,150 220,166 185,168" fill="#c0392b" stroke="#1d1d1b" stroke-width="3"/></svg>', 'Het linkeroog kijkt je aan. Het rechteroog en de neus zie je van opzij.') +
CSF.lk.stappen(['Teken je gezicht van voren.', 'Teken de neus of één oog zoals je het van opzij ziet.', 'Zet alles samen in één gezicht.', 'Verdeel het gezicht in hoekige vlakken. Kleur elk vlak licht of donker.']) +
CSF.lk.tip('Gebruik een lat. Rechte lijnen maken het meteen kubistisch.')],
      ["Surrealisme", "De Belgische schilder René Magritte zette in ‘De mensenzoon’ (1964) een groene appel voor een gezicht. Kenmerken: een droomwereld, heel realistisch geschilderd, met onmogelijke dingen.",
        CSF.lk.fig('<svg viewBox="0 0 420 200" role="img" aria-label="Een droombeeld: een vis zwemt in de lucht boven een huis"><rect x="60" y="10" width="300" height="180" fill="#9fd3f0"/><rect x="60" y="150" width="300" height="40" fill="#7fb36b"/><rect x="170" y="95" width="80" height="60" fill="#f4e3c3" stroke="#1d1d1b" stroke-width="2"/><polygon points="160,95 210,60 260,95" fill="#b5523b" stroke="#1d1d1b" stroke-width="2"/><rect x="200" y="120" width="20" height="35" fill="#6b4226"/><g transform="translate(250 40)"><ellipse cx="0" cy="0" rx="40" ry="16" fill="#FCAF17" stroke="#1d1d1b" stroke-width="2"/><polygon points="38,0 60,-14 60,14" fill="#FCAF17" stroke="#1d1d1b" stroke-width="2"/><circle cx="-24" cy="-4" r="3" fill="#1d1d1b"/></g><circle cx="110" cy="40" r="16" fill="#fff"/></svg>', 'Alles is netjes en echt geschilderd, maar het kan niet: een vis zwemt in de lucht.') +
CSF.lk.punten(['Surrealisten schilderden dromen en vreemde gedachten.', 'Ze zetten gewone dingen op een plek waar ze niet horen.', 'Het geheim: het onmogelijke ziet er heel echt uit.']) +
CSF.lk.vb('<p>Een wolk in een kopje, een sleutel als neus, een raam in je voorhoofd met een stukje lucht erin.</p>', 'Ideeën') +
CSF.lk.tip('Kies één gewoon voorwerp dat bij jou past. Zet het op een onmogelijke plek in je portret.')],
      ["Pop-art", "Andy Warhol herhaalde in 1962 het portret van Marilyn Monroe in felle kleuren. Kenmerken: vlakke, felle kleuren, dikke lijnen, herhaling, soms puntjes zoals in een strip.",
        CSF.lk.fig('<svg viewBox="0 0 420 210" role="img" aria-label="Hetzelfde eenvoudige gezicht vier keer in felle kleuren"><defs><pattern id="beeld-pt" width="8" height="8" patternUnits="userSpaceOnUse"><circle cx="4" cy="4" r="1.6" fill="#1d1d1b" opacity=".35"/></pattern></defs><g stroke="#1d1d1b" stroke-width="4"><rect x="110" y="5" width="100" height="100" fill="#ff4fa3"/><rect x="210" y="5" width="100" height="100" fill="#3BC1C5"/><rect x="110" y="105" width="100" height="100" fill="#FCAF17"/><rect x="210" y="105" width="100" height="100" fill="#7ed957"/></g><g id="beeld-gz"><circle cx="160" cy="55" r="32" fill="#ffe08a" stroke="#1d1d1b" stroke-width="4"/><circle cx="160" cy="55" r="32" fill="url(#beeld-pt)"/><circle cx="149" cy="50" r="4" fill="#1d1d1b"/><circle cx="171" cy="50" r="4" fill="#1d1d1b"/><path d="M147 66 q13 10 26 0" fill="#d9363e" stroke="#1d1d1b" stroke-width="3"/></g><use href="#beeld-gz" x="100"/><use href="#beeld-gz" y="100"/><use href="#beeld-gz" x="100" y="100"/></svg>', 'Eén eenvoudig portret, vier keer herhaald in andere felle kleuren. De puntjes lijken op een stripdruk.') +
CSF.lk.stappen(['Teken je portret met dikke, zwarte omlijnde vormen.', 'Laat details weg: geen schaduw, geen fijne lijnen.', 'Kopieer het portret 2 of 4 keer.', 'Kleur elk portret in andere, felle vlakke kleuren.']) +
CSF.lk.tip('Puntjes maak je makkelijk met de achterkant van een potlood en een stempelkussen, of met een fijne stift.')]
    ],
    invalshoek: { intro: "Kies in lesuur 2 de stijl van je zelfportret.", keuzes: [
      ["Impressionisme", "Losse streepjes kleur en veel licht."], ["Expressionisme", "Kleuren als spiegel van jouw gevoel."], ["Kubisme", "Jouw gezicht in hoekige vlakken, van voren en opzij."],
      ["Surrealisme", "Jouw gezicht in een droomwereld met één onmogelijk detail."], ["Pop-art", "Jouw portret twee of vier keer, telkens in andere felle kleuren."]] },
    nogTijd: "Maak een tweede, kleine versie van je zelfportret in een totaal andere stijl. Wat verandert er aan je uitstraling?",
    test: [
      ["Welke stroming kreeg haar naam van een schilderij van Monet?", ["Impressionisme", "Kubisme", "Pop-art"], 0, "‘Impressie, opkomende zon’ (1872)."],
      ["In welke stijl zie je een gezicht van voren en opzij tegelijk?", ["Kubisme", "Impressionisme", "Surrealisme"], 0, "Picasso en Braque toonden meerdere standpunten tegelijk."],
      ["Welke stijl gebruikt felle vlakke kleuren en herhaling, zoals Warhol?", ["Pop-art", "Expressionisme", "Impressionisme"], 0, "Warhol herhaalde het portret van Marilyn Monroe in andere kleuren."]
    ],
    controle: [
      ["Op welke hoogte van het hoofd staan de ogen?", "tekst", ["halverwege", "in het midden", "midden", "op de helft", "de helft", "in de helft", "halfweg"], "Meet van de kruin tot de kin. Waar ligt het midden?"],
      ["Hoeveel ogen passen er naast elkaar in de breedte van een gezicht?", "getal", [5, 0], "Tussen de twee ogen past nog één oog. Aan elke kant past ook één oog."],
      ["Welke Belgische schilder zette een appel voor een gezicht?", "tekst", ["magritte", "rene magritte"], "Lees de leerkaart ‘Surrealisme’."]
    ],
    criteria: ["Logboek elk lesuur ingevuld", "Stijldetective: vijf stijlen onderzocht", "Gezicht in de juiste verhoudingen", "Minstens 3 kenmerken van de gekozen stijl zichtbaar", "Kunstenaarsbordje volledig en verzorgd"],

    lessen: CSF.lessen3({
      t1: "Opstart: stijldetective",
      weet: "Noteer de schilders of kunstwerken in je geheugen.",
      opdracht: "Lees de opdracht. Noteer de vereisten voor je eindwerk.",
      ideeen: "Zoek per stijl één werk op. Noteer je waarnemingen. Duid je favoriete stijlen aan.",
      start: "Vul de tabel van de stijldetective verder in met de leerkaarten.",
      t2: "Het gezicht en je stijl",
      werk2: "Leer de verhoudingen van het gezicht. Teken jezelf met de camera als spiegel. Maak 3 kleine schetsen in 3 stijlen. Kies er één.",
      t3: "Mijn zelfportret",
      werk3: "Werk je zelfportret uit in je gekozen stijl. Vul het kunstenaarsbordje in.",
      presenteer: "Toon je werk aan een medeleerling of in een kort filmpje op Smartschool. Vertel over je stijl, de kenmerken en je keuze."
    }),

    werkbundel: [
      { les: 1, html: `
        ${h.kader("De opdracht", "Maak een <b>zelfportret op A4</b> in de stijl van één kunststroming. Gebruik minstens <b>3 kenmerken</b> van die stijl. Zet een <b>kunstenaarsbordje</b> naast je werk, zoals in een museum.")}
        <p><b>Welke schilders of kunstwerken ken ik al?</b></p>${h.lijnen(2)}
        <h2>Stijldetective</h2>
        <p>Zoek elk werk op het internet op. Noteer 3 zichtbare kenmerken. Geef elke stijl een score van 1 tot 3 voor je eigen voorkeur.</p>
        <table><tr><th style="width:17%">Stijl</th><th style="width:27%">Zoek op</th><th>3 zichtbare kenmerken</th><th style="width:10%">Score</th></tr>
        <tr><td><b>Impressionisme</b></td><td>Monet · Impressie, opkomende zon</td><td style="height:54px"></td><td></td></tr>
        <tr><td><b>Expressionisme</b></td><td>James Ensor · De intrede van Christus in Brussel</td><td style="height:54px"></td><td></td></tr>
        <tr><td><b>Kubisme</b></td><td>Picasso · Portret van Dora Maar</td><td style="height:54px"></td><td></td></tr>
        <tr><td><b>Surrealisme</b></td><td>Magritte · De mensenzoon</td><td style="height:54px"></td><td></td></tr>
        <tr><td><b>Pop-art</b></td><td>Andy Warhol · Marilyn Diptych</td><td style="height:54px"></td><td></td></tr></table>` },
      { les: 1, html: `
        <h2>Leerkaarten · vijf stijlen</h2>
        ${h.leerkaart("Impressionisme", "Monet schilderde in 1872 ‘Impressie, opkomende zon’. Losse, zichtbare streepjes. Licht en kleur zijn belangrijker dan details.")}
        ${h.leerkaart("Expressionisme", "De Oostendse schilder James Ensor schilderde maskers in felle kleuren. Kleur en vorm tonen een gevoel. Een gezicht mag groen zijn.")}
        ${h.leerkaart("Kubisme", "Picasso en Braque (vanaf ongeveer 1907): een gezicht in hoekige vlakken, van voren en opzij tegelijk.")}
        ${h.leerkaart("Surrealisme", "Magritte zette in ‘De mensenzoon’ (1964) een appel voor een gezicht. Realistisch geschilderd, met iets onmogelijks.")}
        ${h.leerkaart("Pop-art", "Andy Warhol herhaalde het portret van Marilyn Monroe in felle kleuren (1962). Vlakke kleuren, dikke lijnen, herhaling.")}
        <p><b>De stijlen die mij het meest aanspreken:</b></p>${h.lijnen(1)}
        <h3>Wat lukte vandaag? Wat nog niet?</h3>${h.lijnen(2)}` },
      { les: 2, html: `
        <h2>De verhoudingen van een gezicht</h2>
        <div class="twee"><div style="text-align:center">${gezicht(true, 230, 290)}</div>
        <div>${h.leerkaart("Een gezicht tekenen", "<ul><li>De <b>ogen</b> staan <b>halverwege</b> het hoofd, niet bovenaan.</li><li>In de breedte passen <b>5 ogen</b> naast elkaar.</li><li>De onderkant van de <b>neus</b> ligt halverwege de ogen en de kin.</li><li>De <b>mond</b> ligt op een derde tussen neus en kin.</li><li>De <b>oren</b> lopen van de wenkbrauwen tot de neuspunt.</li></ul>")}
        <p>Gebruik de camera van je toestel als spiegel. Teken jezelf in het ovaal hiernaast. Teken eerst de hulplijnen licht met potlood.</p></div></div>
        <div style="text-align:center">${gezicht(false, 230, 290)}</div>` },
      { les: 2, html: `
        <h2>Drie schetsen in drie stijlen</h2>
        <p>Maak drie kleine schetsen van je gezicht, elk in een andere stijl. Werk snel en los. Dit zijn proefjes.</p>
        <div class="drie">${h.vak("Stijl: ________", 300)}${h.vak("Stijl: ________", 300)}${h.vak("Stijl: ________", 300)}</div>
        <p><b>Mijn gekozen stijl en mijn reden:</b></p>${h.lijnen(2)}
        <p><b>Deze 3 kenmerken van mijn stijl gebruik ik zeker:</b></p>${h.lijnen(3)}
        <h3>Wat lukte vandaag? Wat leerde ik?</h3>${h.lijnen(2)}` },
      { les: 3, html: `
        <h2>Kunstenaarsbordje</h2>
        <table class="fiche"><tr><td class="lbl">Titel van mijn werk</td><td style="height:28px"></td></tr><tr><td class="lbl">Kunstenaar</td><td style="height:28px"></td></tr>
        <tr><td class="lbl">Stijl</td><td style="height:28px"></td></tr><tr><td class="lbl">Techniek</td><td style="height:28px"></td></tr>
        <tr><td class="lbl">3 kenmerken van de stijl in mijn werk</td><td style="height:70px"></td></tr><tr><td class="lbl">Reden voor deze stijl</td><td style="height:56px"></td></tr></table>
        <p>Maak je zelfportret op het volgende blad of op een apart A4-blad.</p>
        <p><b>Presenteren (2 min):</b> je stijl · de zichtbare kenmerken · je boodschap over jezelf</p>` },
      { titel: "Eindproduct", html: `
        <h2>Mijn zelfportret</h2>${h.vak("", 900)}` }
    ]
  });
})();
