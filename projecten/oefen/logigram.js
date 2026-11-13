/* Oefenproject wiskunde · Breinbrekers (2 lesuren)
   Oefent: stap voor stap redeneren, controleren, testen bij een ander.
   De drie logigrammen zijn nagerekend: elk heeft precies één oplossing. */
(function () {
  var h = CSF.h;
  function fiche(l) { return '<table class="fiche">' + l.map(function (v) { return '<tr><td class="lbl">' + v[0] + '</td><td style="height:' + (v[1] || 28) + 'px">' + (v[2] || "") + "</td></tr>"; }).join("") + "</table>"; }
  /* rooster: personen als rijen, per categorie een blok kolommen */
  function rooster(personen, cats) {
    var kop = "<tr><th></th>" + cats.map(function (c) { return c[1].map(function (w, i) { return '<th style="font-size:8.5pt;' + (i === 0 ? "border-left:2px solid #333;" : "") + '">' + w + "</th>"; }).join(""); }).join("") + "</tr>";
    return '<table style="text-align:center;width:auto;margin:6px 0">' + kop + personen.map(function (p) { return "<tr><td><b>" + p + "</b></td>" + cats.map(function (c) { return c[1].map(function (w, i) { return '<td style="width:44px;height:26px;' + (i === 0 ? "border-left:2px solid #333;" : "") + '"></td>'; }).join(""); }).join("") + "</tr>"; }).join("") + "</table>";
  }

  CSF.project({
    id: "oefen-logigram",
    soort: "oefen",
    domein: "wiskunde",
    jaar: "1e jaar",
    tijd: "2 lesuren",
    sterren: 3,
    naam: "Breinbrekers: los een logigram op en ontwerp er zelf één",
    kort: "Kraak drie logigrammen die steeds moeilijker worden. Ontwerp daarna een puzzel voor een klasgenoot.",
    voorWie: "Voor wie graag puzzelt en niet opgeeft als het moeilijk wordt.",
    omschrijving: "Wie heeft de kat? Wie zit op woensdag in de toneelclub? 🧩 Een logigram is een puzzel waarin je met een paar aanwijzingen alles kan ontdekken, zonder te gokken. Je lost er drie op, telkens een stapje moeilijker. Daarna draai je de rollen om: jij ontwerpt een logigram met precies één oplossing. Kan je klasgenoot hem kraken?",
    doel: "Je redeneert stap voor stap, je controleert of je antwoord klopt en je ontwerpt een puzzel die eerlijk is: met precies één oplossing.",
    bereikt: ["Een rooster gebruiken om aanwijzingen te verwerken", "Uit twee aanwijzingen samen iets nieuws besluiten", "Een puzzel ontwerpen met precies één oplossing", "Je puzzel laten testen en verbeteren"],
    toepassen: ["Doorzetten als het vastloopt", "Nauwkeurig werken: elk vakje telt", "Feedback van een klasgenoot gebruiken"],
    materiaal: ["Werkbundel", "Potlood en gom"],
    oplossing: "Controleer de oplossingen van de drie logigrammen op deze site bij ‘Controleer je oplossing’.",
    product: "Een eigen logigram met een oplossingsblad, getest door een klasgenoot",
    leerkaarten: [
      ["Zo los je een logigram op", "Zet de aanwijzingen in een <b>rooster</b>. Een ✗ betekent ‘kan niet’, een ✓ betekent ‘zeker’. Staat er een ✓ in een vakje? Dan komen er ✗ in de rest van die rij en die kolom. Lees de aanwijzingen telkens opnieuw: vaak leert een oude aanwijzing je iets nieuws.",
        CSF.lk.fig('<svg viewBox="0 0 440 150" role="img" aria-label="Een rooster met kruisjes en een vinkje"><g font-size="13" text-anchor="middle"><text x="175" y="22" font-weight="700">fiets</text><text x="235" y="22" font-weight="700">step</text><text x="295" y="22" font-weight="700">bus</text><text x="95" y="62" font-weight="700">Ella</text><text x="95" y="97" font-weight="700">Finn</text><text x="95" y="132" font-weight="700">Gust</text></g><g fill="none" stroke="#1d1d1b"><rect x="145" y="35" width="180" height="105"/><path d="M205 35 V140 M265 35 V140 M145 70 H325 M145 105 H325"/></g><g font-size="22" text-anchor="middle" font-weight="700"><text x="175" y="62" fill="#c0392b">✗</text><text x="235" y="62" fill="#2e8b4e">✓</text><text x="295" y="62" fill="#c0392b">✗</text><text x="235" y="97" fill="#c0392b">✗</text><text x="235" y="132" fill="#c0392b">✗</text></g><text x="335" y="62" font-size="12" fill="#17808a">← ✓ dus de rest ✗</text></svg>', 'Ella komt met de step: dus niet met de fiets of de bus, en niemand anders komt met de step.') +
        CSF.lk.stappen(['Teken het rooster en zet de namen erin.', 'Verwerk eerst de aanwijzingen die iets zeker maken (✓).', 'Zet de ✗ in de rest van die rij en kolom.', 'Blijft er in een rij één vakje over? Dan is dat een ✓.', 'Lees alle aanwijzingen opnieuw tot alles klopt.']) +
        CSF.lk.tip('Controleer op het einde elke aanwijzing met je oplossing. Klopt er één niet? Dan zit er ergens een foutje.')],
      ["Zo ontwerp je een logigram", "Begin bij de <b>oplossing</b>: kies eerst wie wat heeft. Schrijf daarna aanwijzingen die naar die oplossing leiden. Test je puzzel zelf: kan je alles vinden zonder te gokken? Dan heeft hij precies één oplossing.",
        CSF.lk.stappen(['Kies 3 personen en 1 of 2 categorieën (huisdier, sport, kleur …).', 'Schrijf de oplossing op een apart blad.', 'Schrijf aanwijzingen: ‘X heeft geen …’, ‘Wie … doet, heeft ook …’.', 'Los je eigen puzzel op met een leeg rooster. Moet je gokken? Voeg een aanwijzing toe.', 'Is er een aanwijzing die je niet nodig had? Schrap ze.']) +
        CSF.lk.let('Een puzzel met twee mogelijke oplossingen is oneerlijk. Een puzzel zonder oplossing ook. Test hem dus altijd zelf.') +
        CSF.lk.tip('Moeilijker maken? Gebruik aanwijzingen die je moet combineren: ‘De persoon met de rode fiets zwemt.’')]
    ],
    invalshoek: { intro: "Kies in lesuur 1 het thema van je eigen logigram.", keuzes: [["Dieren", "Wie heeft welk huisdier, en hoe heet het?"], ["Sport en hobby", "Wie doet welke sport, op welke dag?"], ["Fantasie", "Welke tovenaar heeft welke toverstaf en welk huisdier?"]] },
    nogTijd: "Maak je logigram groter: 4 personen en 2 categorieën. Laat hem testen door een tweede klasgenoot.",
    test: [
      ["Er staat een ✓ in een vakje. Wat weet je dan?", ["De rest van die rij en kolom krijgt een ✗", "De hele tabel is klaar", "Het vakje ernaast krijgt ook een ✓"], 0, "Elke persoon heeft één ding, en elk ding hoort bij één persoon."],
      ["Wanneer is een logigram eerlijk?", ["Als er precies één oplossing is", "Als er minstens twee oplossingen zijn", "Als je moet gokken"], 0, "Zonder te gokken moet je tot één oplossing komen."],
      ["Waar begin je als je zelf een logigram ontwerpt?", ["Bij de oplossing", "Bij de moeilijkste aanwijzing", "Bij de titel"], 0, "Eerst de oplossing, dan de aanwijzingen."]
    ],
    controle: [
      ["Logigram 1: wie heeft de hond?", "tekst", ["cas"], "Ali heeft geen hond, Bo heeft de kat."],
      ["Logigram 2: welke kleur heeft de fiets van Noor?", "tekst", ["rood", "rode", "een rode fiets", "rood fiets"], "Begin bij Lien en bij Mats."],
      ["Logigram 3: op welke dag gaat Chloé naar haar club?", "tekst", ["donderdag", "do"], "Zoek eerst de club van Chloé. Welke club is op woensdag?"]
    ],
    criteria: ["Logboek elk lesuur ingevuld", "De drie logigrammen opgelost met een ingevuld rooster", "Eigen logigram met precies één oplossing", "Getest door een klasgenoot en verbeterd"],
    lessen: CSF.lessen2({
      t1: "Logigrammen kraken",
      opdracht: "Lees de projectfiche. Wat is je eindproduct?",
      ideeen: "Los logigram 1 en 2 op. Kies het thema van je eigen logigram.",
      start: "Los logigram 3 op. Begin aan de oplossing van je eigen logigram.",
      t2: "Mijn eigen logigram",
      werk: "Schrijf de aanwijzingen van je logigram. Los hem zelf op met een leeg rooster. Verbeter hem.",
      presenteer: "Laat een klasgenoot je logigram oplossen. Lukt het zonder te gokken? Noteer wat hij moeilijk vond."
    }),
    werkbundel: [
      { les: 1, html: `
        ${h.kader("De opdracht", "Los drie logigrammen op. Ontwerp daarna zelf een logigram met precies één oplossing en laat een klasgenoot het oplossen.")}
        <h2>Logigram 1 · Huisdieren</h2>
        <p>Ali, Bo en Cas hebben elk één huisdier: een hond, een kat of een vis.</p>
        <ol><li>Ali heeft geen hond.</li><li>Bo heeft de kat.</li></ol>
        ${rooster(["Ali", "Bo", "Cas"], [["dier", ["hond", "kat", "vis"]]])}
        <p><b>Wie heeft de hond?</b> ____________________</p>
        <h2>Logigram 2 · Sport en fiets</h2>
        <p>Lien, Mats en Noor doen elk één sport (voetbal, zwemmen, judo) en hebben elk een fiets (rood, blauw, groen).</p>
        <ol><li>Mats zwemt niet en heeft geen rode fiets.</li><li>Wie judo doet, heeft een groene fiets.</li><li>Lien voetbalt.</li><li>Noor heeft geen blauwe fiets.</li></ol>
        ${rooster(["Lien", "Mats", "Noor"], [["sport", ["voetbal", "zwemmen", "judo"]], ["fiets", ["rood", "blauw", "groen"]]])}
        <p><b>Welke kleur heeft de fiets van Noor?</b> ____________________</p>` },
      { les: 1, html: `
        <h2>Logigram 3 · De clubs</h2>
        <p>Amira, Bram, Chloé en Daan gaan elk naar één club (schaak, toneel, robotica, koor), elk op een andere dag (maandag, dinsdag, woensdag, donderdag).</p>
        <ol><li>Bram zit in de robotclub.</li><li>De toneelclub is op woensdag.</li><li>Amira gaat op maandag.</li><li>Daan gaat de dag na Bram.</li><li>Chloé zingt niet en houdt niet van toneel.</li></ol>
        ${rooster(["Amira", "Bram", "Chloé", "Daan"], [["club", ["schaak", "toneel", "robot", "koor"]], ["dag", ["ma", "di", "wo", "do"]]])}
        <p><b>Op welke dag gaat Chloé naar haar club?</b> ____________________</p>
        <h3>Wat hielp jou het meest bij het oplossen?</h3>${h.lijnen(2)}` },
      { les: 2, html: `
        <h2>Mijn eigen logigram</h2>
        ${fiche([["Thema", 26], ["Personen (3 of 4)", 26], ["Categorieën", 26]])}
        <h3>De oplossing (geheim!)</h3>${h.vak("", 70)}
        <h3>De aanwijzingen</h3>${h.lijnen(6)}
        <h3>Leeg rooster voor de tester</h3>${h.vak("", 130)}
        ${fiche([["Tester", 24], ["Lukte het zonder te gokken?", 26, "ja / nee"], ["Wat vond de tester moeilijk? Wat heb ik verbeterd?", 44]])}` }
    ]
  });
})();
