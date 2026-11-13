/* Oefenproject digiwijs · Echt of nep? Word factchecker (2 lesuren)
   Oefent: werken met een stappenplan, bronnen controleren, een besluit onderbouwen.
   Alle berichten, sites en bronnen zijn verzonnen voor deze oefening. */
(function () {
  var h = CSF.h;
  function fiche(l) { return '<table class="fiche">' + l.map(function (v) { return '<tr><td class="lbl">' + v[0] + '</td><td style="height:' + (v[1] || 28) + 'px">' + (v[2] || "") + "</td></tr>"; }).join("") + "</table>"; }
  function bericht(nr, bron, tekst, extra) { return '<div style="border:1.5px solid #ccc;border-radius:8px;padding:6px 10px;margin-bottom:6px;break-inside:avoid"><b>Bericht ' + nr + "</b> · <span class=\"klein\">" + bron + "</span><br>" + tekst + (extra ? '<br><span class="klein">' + extra + "</span>" : "") + "</div>"; }

  CSF.project({
    id: "oefen-factcheck",
    soort: "oefen",
    domein: "digiwijs",
    jaar: "1e jaar",
    tijd: "2 lesuren",
    sterren: 3,
    naam: "Echt of nep? Word factchecker",
    kort: "Onderzoek zes berichten met het stappenplan van een factchecker. Ontmasker de nepberichten.",
    voorWie: "Voor wie niet zomaar alles gelooft en graag speurt.",
    omschrijving: "Elke dag zie je berichten, foto's en filmpjes voorbijkomen. Maar welke kloppen? 🕵️ Factcheckers zoeken het uit, met een vast stappenplan. Jij krijgt zes berichten en een map met bronnen. Onderzoek ze één voor één: wie schreef het, wanneer, en zeggen andere bronnen hetzelfde? Daarna maak je een tipkaart, zodat je klasgenoten niet meer in nepnieuws trappen.",
    doel: "Je werkt met een stappenplan, je vergelijkt bronnen en je onderbouwt je besluit: echt, nep of twijfel.",
    bereikt: ["Het stappenplan van een factchecker gebruiken", "Vijf soorten nep herkennen", "Bronnen met elkaar vergelijken", "Een besluit onderbouwen met bewijs"],
    toepassen: ["Kritisch lezen voor je iets deelt", "Nauwkeurig werken met een stappenplan", "Je besluit uitleggen aan anderen"],
    materiaal: ["Werkbundel (met de berichten en de bronnenmap)"],
    oplossing: "Controleer je besluiten op deze site bij ‘Controleer je oplossing’.",
    product: "Zes factcheckfiches en een tipkaart tegen nepnieuws",
    leerkaarten: [
      ["Het stappenplan van een factchecker", "Een factchecker gelooft niets zomaar. Hij stelt bij elk bericht dezelfde vragen. <b>Wie</b> zegt het? <b>Wanneer</b>? Zeggen <b>andere bronnen</b> hetzelfde? Klopt de <b>foto</b> bij het verhaal? En: wil het bericht vooral dat je <b>boos of bang</b> wordt?",
        CSF.lk.stappen(['<b>Wie?</b> Is de afzender bekend en betrouwbaar? Of anoniem?', '<b>Wanneer?</b> Staat er een datum? Is het nieuws of oud?', '<b>Waar nog?</b> Brengen andere, betrouwbare bronnen hetzelfde?', '<b>De foto</b>: verscheen ze vroeger al bij een ander verhaal? Is ze bewerkt?', '<b>Gevoel</b>: veel uitroeptekens en hoofdletters? Dan wil iemand je vooral opjutten.']) +
        CSF.lk.tip('Twijfel je? Deel het niet. ‘Twijfel’ is ook een eerlijk besluit.')],
      ["Vijf soorten nep", "Niet alle nep is hetzelfde. Soms is een bericht helemaal <b>verzonnen</b>. Soms is een <b>oude foto</b> gebruikt bij een nieuw verhaal. Soms is een foto <b>bewerkt</b>. Een <b>satirische</b> site maakt grappige nepberichten met opzet. En een bericht kan <b>misleidend</b> zijn: een stukje klopt, maar de rest niet.",
        CSF.lk.tabel(['Soort', 'Hoe herken je het?'], [['verzonnen', 'geen enkele betrouwbare bron brengt het'], ['oude foto', 'dezelfde foto verscheen jaren eerder bij ander nieuws'], ['bewerkte foto', 'er is een originele foto zonder het vreemde detail'], ['satire', 'de site maakt bewust grappen, vaak staat dat bij ‘over ons’'], ['misleidend', 'het klopt half: een klein of betaald onderzoek wordt opgeblazen']]) +
        CSF.lk.let('Satire is niet bedoeld om te bedriegen. Maar wie alleen de titel leest, kan zich toch vergissen.')]
    ],
    invalshoek: { intro: "Kies in lesuur 2 de vorm van je tipkaart.", keuzes: [["Affiche", "Een affiche voor in de klas."], ["Strip", "Een korte strip van vier vakjes."], ["Bericht", "Een bericht voor sociale media, met de vijf vragen."]] },
    nogTijd: "Zoek thuis (met toestemming) een echt bericht dat je twijfel geeft. Doorloop het stappenplan. Wat besluit je?",
    test: [
      ["Wat is de eerste vraag van een factchecker?", ["Wie zegt het?", "Hoeveel likes heeft het?", "Is het grappig?"], 0, "De afzender zegt veel over de betrouwbaarheid."],
      ["Een foto van een overstroming van gisteren verscheen al in 2016. Welke soort nep is dat?", ["Oude foto, nieuw verhaal", "Satire", "Bewerkte foto"], 0, "De foto is echt, maar hoort bij ander nieuws."],
      ["Je twijfelt na het stappenplan. Wat doe je?", ["Niet delen", "Toch delen", "Doorsturen naar iedereen"], 0, "Twijfel is een eerlijk besluit."]
    ],
    controle: [
      ["Welk bericht is echt? (nummer)", "getal", [3, 0], "Welk bericht wordt door een tweede, betrouwbare bron bevestigd?"],
      ["Welke soort nep is bericht 2?", "tekst", ["oude foto", "een oude foto", "oude foto nieuw verhaal", "oude foto, nieuw verhaal"], "Kijk in de bronnenmap bij het fotoarchief."],
      ["Welke soort nep is bericht 6?", "tekst", ["satire", "satirisch", "een satirische site"], "Lees de pagina ‘over ons’ van de site."],
      ["Welke soort nep is bericht 4?", "tekst", ["misleidend", "misleiding", "misleidend bericht"], "Wie betaalde het onderzoek, en met hoeveel mensen?"]
    ],
    criteria: ["Logboek elk lesuur ingevuld", "Bij elk bericht het stappenplan gevolgd", "Besluit onderbouwd met een bron uit de map", "Soort nep juist benoemd", "Duidelijke tipkaart"],
    lessen: CSF.lessen2({
      t1: "Berichten onderzoeken",
      opdracht: "Lees de projectfiche. Welke vragen stel je bij elk bericht?",
      leer: "Lees de twee leerkaarten. Maak de korte test. Alle berichten in je werkbundel zijn verzonnen voor deze oefening.",
      ideeen: "Lees de zes berichten. Schrijf bij elk je eerste gevoel: echt, nep of twijfel?",
      start: "Onderzoek bericht 1 tot 3 met het stappenplan en de bronnenmap.",
      t2: "Besluiten en tipkaart",
      werk: "Onderzoek bericht 4 tot 6. Vul bij elk bericht je besluit en de soort nep in. Kies de vorm van je tipkaart en maak ze.",
      presenteer: "Toon je tipkaart aan een klasgenoot. Leg met één bericht uit hoe je het ontmaskerde."
    }),
    werkbundel: [
      { les: 1, html: `
        ${h.kader("De opdracht", "Onderzoek zes berichten met het stappenplan van een factchecker. Gebruik de bronnenmap. Besluit telkens: echt, nep of twijfel? Benoem de soort nep. Maak daarna een tipkaart. <i>Alle berichten, sites en bronnen zijn verzonnen voor deze oefening.</i>")}
        <h2>De zes berichten</h2>
        ${bericht(1, "anoniem account @schoolnieuws_echt · geen datum", "‘BREAKING!!! Vanaf 1 januari moeten ALLE leerlingen ook op zaterdag naar school!!! Deel dit!!!’", "link: zaterdagschool-nieuws.biz")}
        ${bericht(2, "gedeeld in een chatgroep · ‘gisteren’", "Foto van straten onder water: ‘Zo zag Lievebeek er gisteren uit na het noodweer!’")}
        ${bericht(3, "website van de gemeente Lievebeek · 4 november", "‘De gemeente plant deze winter 200 nieuwe bomen in het stadspark.’", "contact: dienst groen, met naam en telefoonnummer")}
        ${bericht(4, "website van chocolademerk Chocomix · 2 november", "‘Wetenschappers bewijzen: wie elke dag chocolade eet, wordt slimmer!’")}
        ${bericht(5, "sociale media · 3 november", "Foto van een haai die over de snelweg zwemt: ‘Ongelooflijk! Na de storm zwemt er een haai op de E40!’")}
        ${bericht(6, "website Het Klapblad · 1 november", "‘Pinguïns mogen voortaan stemmen bij de gemeenteraadsverkiezingen.’")}` },
      { les: 1, html: `
        <h2>De bronnenmap</h2>
        <table><tr><th style="width:28%">Bron</th><th>Wat vind je er?</th></tr>
        <tr><td>Persbericht van de onderwijsminister · 5 november</td><td>‘Er zijn geen plannen voor lessen op zaterdag.’</td></tr>
        <tr><td>Fotoarchief van een krant</td><td>Dezelfde foto van de straten onder water verscheen in <b>2016</b>, bij een overstroming in een ander land.</td></tr>
        <tr><td>Regionale krant · 5 november</td><td>‘Lievebeek plant 200 bomen in het stadspark. Schepen van groen: “De eerste komen er in december.”’</td></tr>
        <tr><td>Het onderzoek over chocolade</td><td>12 volwassenen deden een week lang een puzzeltest. Het onderzoek werd <b>betaald door Chocomix</b>. Andere onderzoekers vonden geen verband.</td></tr>
        <tr><td>Fotograaf · site met originele foto's</td><td>De haai komt van een foto uit zee uit 2011. Een foto van de lege snelweg is van een andere fotograaf. Iemand plakte ze samen.</td></tr>
        <tr><td>Het Klapblad · pagina ‘over ons’</td><td>‘Het Klapblad brengt grappig verzonnen nieuws. Niets op deze site is echt gebeurd.’</td></tr></table>
        <h3>Mijn eerste gevoel</h3>
        <table style="text-align:center"><tr><th>Bericht</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th></tr><tr><td>echt / nep / twijfel</td>${'<td style="height:30px"></td>'.repeat(6)}</tr></table>` },
      { les: 2, html: `
        <h2>Mijn factcheckfiches</h2>
        <table><tr><th>Bericht</th><th>Wie? Wanneer?</th><th>Wat zegt de bronnenmap?</th><th>Besluit</th><th>Soort nep</th></tr>${[1, 2, 3, 4, 5, 6].map(function (n) { return "<tr><td><b>" + n + '</b></td><td style="height:52px"></td><td></td><td></td><td></td></tr>'; }).join("")}</table>
        <h3>Mijn tipkaart · affiche, strip of bericht</h3>
        ${h.vak("", 250)}` }
    ]
  });
})();
