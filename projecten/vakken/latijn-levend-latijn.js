/* Latijn · Levend Latijn
   Bron: de cursus ‘CSF: Latijn · Een introductie in tekst en cultuur’ van de werkgroep (met dank aan D. De Bruyne),
   uitgewerkt tot 8 lesuren. Afbeeldingen uit de cursus zijn vervangen door eigen tekeningen of door links.
   De woordenlijsten van de methode (caput 1–8) staan niet op de site: de leerling oefent ze in Quizlet. */
(function () {
  var h = CSF.h;
  // ---------- eigen kaart van Italië (vereenvoudigd) ----------
  function italie() {
    var P = function (pts) { return pts.map(function (p) { return ((p[0] - 6) * 34).toFixed(1) + "," + ((47.4 - p[1]) * 44).toFixed(1); }).join(" "); };
    var land = [[7.5, 43.8], [8.9, 44.4], [9.8, 44.1], [10.3, 43.5], [10.5, 42.9], [11.8, 42.1], [12.6, 41.45], [13.5, 41.2], [14.25, 40.8], [14.8, 40.6], [15.6, 40.05], [15.9, 38.7], [15.65, 38.1], [16.05, 37.95], [17.1, 38.9], [17.15, 39.1], [16.5, 39.75], [17.2, 40.45], [18.0, 40.05], [18.35, 39.8], [18.5, 40.15], [17.95, 40.65], [16.85, 41.12], [15.9, 41.6], [16.2, 41.9], [15.0, 42.0], [14.2, 42.47], [13.5, 43.6], [12.57, 44.07], [12.3, 44.4], [12.5, 44.95], [12.35, 45.45], [13.75, 45.65], [13.7, 46.5], [12.4, 47.1], [10.5, 46.8], [9.0, 46.5], [8.4, 46.4], [7.0, 45.9], [6.65, 45.1], [7.0, 44.2]];
    var sic = [[12.4, 37.8], [13.3, 38.2], [15.6, 38.3], [15.1, 37.5], [15.1, 36.7], [14.3, 37.0], [12.6, 37.6]];
    var sar = [[8.2, 40.9], [9.2, 41.25], [9.8, 40.9], [9.65, 39.1], [9.0, 39.0], [8.4, 39.0], [8.4, 40.5]];
    var alpen = [[7.2, 45.8], [8.2, 46.2], [9.3, 46.3], [10.4, 46.5], [11.5, 46.7], [12.6, 46.6]].map(function (p) { var x = (p[0] - 6) * 34, y = (47.4 - p[1]) * 44; return '<polygon points="' + (x - 9) + "," + (y + 8) + " " + x + "," + (y - 8) + " " + (x + 9) + "," + (y + 8) + '" fill="#9a8a78"/>'; }).join("");
    var apen = '<polyline points="' + P([[8.6, 44.4], [10.5, 44.1], [12.2, 43.4], [13.4, 42.4], [14.4, 41.5], [15.5, 40.6], [16.2, 39.5], [16.1, 38.5]]) + '" fill="none" stroke="#9a8a78" stroke-width="6" stroke-dasharray="2 5" stroke-linecap="round"/>';
    var rome = (12.5 - 6) * 34, romeY = (47.4 - 41.9) * 44;
    var lab = function (x, y, t) { return '<g><circle cx="' + x + '" cy="' + y + '" r="10" fill="#fff" stroke="#e2732b" stroke-width="2"/><text x="' + x + '" y="' + (y + 4) + '" font-family="Arial" font-size="12" font-weight="700" text-anchor="middle">' + t + "</text></g>"; };
    return '<svg width="100%" height="330" viewBox="0 0 440 470"><rect width="440" height="470" fill="#dff1fb"/>' +
      '<polygon points="' + P(land) + '" fill="#f4ecd8" stroke="#555" stroke-width="1.5"/><polygon points="' + P(sic) + '" fill="#f4ecd8" stroke="#555" stroke-width="1.5"/><polygon points="' + P(sar) + '" fill="#f4ecd8" stroke="#555" stroke-width="1.5"/>' +
      alpen + apen + '<circle cx="' + rome + '" cy="' + romeY + '" r="5" fill="#d64545"/><text x="' + (rome - 8) + '" y="' + (romeY + 18) + '" font-family="Arial" font-size="12" text-anchor="end">Roma</text>' +
      '<rect x="' + (rome - 2) + '" y="' + (romeY - 34) + '" width="58" height="30" fill="none" stroke="#e2732b" stroke-width="1.5" stroke-dasharray="4 3"/><text x="' + (rome + 60) + '" y="' + (romeY - 22) + '" font-family="Arial" font-size="11" fill="#e2732b">Latium</text>' +
      lab(300, 150, "1") + lab(330, 400, "2") + lab(178, 345, "3") + lab(250, 300, "4") + lab(160, 20, "5") + "</svg>";
  }
  function vragen(lijst, hoogte) { return '<table class="fiche">' + lijst.map(function (v) { return '<tr><td class="lbl">' + v + '</td><td style="height:' + (hoogte || 34) + 'px"></td></tr>'; }).join("") + "</table>"; }

  // ---------- onthoudwoordjes bij de tekst over Augustus (eigen lijst van de werkgroep) ----------
  var WOORDEN = [
    ["a(b) + abl.", "vz.", "vanaf, sinds; door", ""], ["ad + acc.", "vz.", "naar, tot, bij", ""], ["amīcitia, amīcitiae", "v. subst.", "vriendschap", "Fr. un ami"],
    ["augēre, augeō, auxī, auctum", "ww.", "uitbreiden", ""], ["Augustus, Augustī", "m. subst.", "Augustus (eerste keizer, 27 v.Chr. – 14 n.Chr.)", ""], ["capere, capiō, cēpī, captum", "ww.", "nemen; innemen", "Eng. a captive"],
    ["classis, classis", "v. subst.", "vloot", ""], ["claudere, claudō, clausī, clausum", "ww.", "sluiten", "Eng. to close"], ["cōgere, cōgō, coēgī, coāctum", "ww.", "samendrijven; dwingen", "Ned. coactief"],
    ["cum + abl.", "vz.", "(samen) met", ""], ["Dānuvius, Dānuviī", "m. subst.", "de Donau", ""], ["dē + abl.", "vz.", "over; vanaf", ""],
    ["dēsīderāre, dēsīderō, dēsīderāvī, dēsīderātum", "ww.", "verlangen", "Ned. desideratum"], ["dūcere, dūcō, dūxī, ductum", "ww.", "leiden, brengen", ""], ["duo, duae, duo", "telw.", "twee", "Ned. een duo"],
    ["et", "voegw. / bw.", "en; ook", "Fr. et"], ["exercitus, exercitūs", "m. subst.", "leger", "Eng. to exercise"], ["fīnis, fīnis", "m. subst.", "einde; grens; mv. (grond)gebied", "Ned. finale"],
    ["Gallia, Galliae", "v. subst.", "Gallië", ""], ["gēns, gentis", "v. subst.", "volk; familie", ""], ["Hispānia, Hispāniae", "v. subst.", "Spanje", ""],
    ["Iānus, Iānī", "m. subst.", "Janus (god van begin en einde)", ""], ["imperātor, imperātōris", "m. subst.", "(opper)bevelhebber; keizer", "Ned. imperatief"], ["imperium, imperiī", "o. subst.", "bevel; heerschappij; rijk", "Ned. imperialisme"],
    ["in + abl.", "vz.", "in, op", ""], ["initium, initiī", "o. subst.", "begin", "Ned. initieel"], ["item", "bw.", "eveneens", ""],
    ["multus, multa, multum", "adj.", "veel", ""], ["oppidum, oppidī", "o. subst.", "vesting, (versterkte) stad", ""], ["Parthī, Parthōrum", "m. mv.", "de Parthen (volk in het huidige Iran en Irak)", ""],
    ["pāx, pācis", "v. subst.", "vrede", "Ned. pacifist"], ["perferre, perferō, pertulī, perlātum", "onr. ww.", "verdragen", ""], ["petere, petō, petīvī, petītum", "ww.", "nastreven; gaan naar; vragen", "Ned. petitie"],
    ["populus, populī", "m. subst.", "volk", "Ned. populatie"], ["reddere, reddō, reddidī, redditum", "ww.", "teruggeven", ""], ["rēgnum, rēgnī", "o. subst.", "koninkrijk; heerschappij", ""],
    ["Rhēnus, Rhēnī", "m. subst.", "de Rijn", ""], ["Rōmānus, Rōmāna, Rōmānum", "adj.", "Romeins", ""], ["signum, signī", "o. subst.", "teken; veldteken; beeld", "Ned. signaal"],
    ["superāre, superō, superāvī, superātum", "ww.", "overtreffen; overwinnen", ""], ["templum, templī", "o. subst.", "tempel", ""], ["trāns + acc.", "vz.", "over, aan de overzijde van", "Ned. transfer"]];
  function woordenlijst(van, tot) {
    return '<table><tr><th style="width:5%">Nr.</th><th style="width:36%">Latijn</th><th style="width:12%">Soort</th><th>Betekenis</th><th style="width:18%">Afleiding</th></tr>' +
      WOORDEN.slice(van, tot).map(function (w, i) { return '<tr><td style="text-align:center">' + (van + i + 1) + "</td><td><b>" + w[0] + "</b></td><td>" + w[1] + "</td><td>" + w[2] + '</td><td class="klein">' + w[3] + "</td></tr>"; }).join("") + "</table>";
  }
  var TEKST = "Augustus fīnēs imperiī Rōmānī auget. Hispāniam et Galliam pācat. Classis Rōmāna ab ōstiō Rhēnī ad fīnēs Cimbrōrum nāvigat. Cimbrī amīcitiam populī Rōmānī petunt. Duo exercitūs in Aethiopiā et in Arabiā multās gentēs superant et multa oppida capiunt. Parthī item amīcitiam populī Rōmānī petunt et signa Rōmāna reddunt. Trāns Dānuvium Augustus exercitum dūcit et Dācōs imperium Rōmānum perferre cōgit. Plūrimae gentēs cum populō Rōmānō amīcitiam dēsīderant. Augustus templum Iānī claudit. Rēgnum Augustī initium ‘pācis Augustae’ significat.";
  var REGELS = TEKST.split(/(?<=\.)\s+/);

  CSF.project({
    id: "latijn-levend-latijn",
    soort: "vak",
    vak: "Latijn",
    jaar: "1e en 2e jaar",
    tijd: "8 lesuren",
    sterren: 4,
    naam: "Levend Latijn",
    kort: "Ontdek de impact van Latijn op de wereld. Lees je eerste Latijnse tekst over keizer Augustus.",
    voorWie: "Voor leerlingen zonder Latijn in hun lessenpakket, met nieuwsgierigheid naar de taal.",
    omschrijving: "Latijn is nog steeds springlevend! Deze ‘dode taal’ baande zich doorheen de geschiedenis een weg tot in onze samenleving. Ontdek de culturele en taalkundige invloed van het Latijn tot vandaag. Lees je eerste echte Latijnse tekst: het testament van keizer Augustus. Breid ten slotte je woordenschat uit met de Latijnse woordenlijst.",
    doel: "Je ontdekt waar het Latijn vandaan komt en hoe het zich verspreidde. Je herkent Latijn in moderne talen, in de wetenschap, de geneeskunde en het recht. Je leest met hulp een Latijnse tekst over keizer Augustus. Je leert Latijnse woorden en hun afleidingen.",
    bereikt: ["Het Romeinse Rijk en Italië situeren op een kaart", "Romaanse en Germaanse talen onderscheiden", "Latijn herkennen in wetenschap, geneeskunde en recht", "Een eenvoudige Latijnse tekst begrijpen met een woordenlijst", "Een digitaal woordenboek gebruiken", "Afleidingen van Latijnse woorden vinden", "Latijnse woorden slim instuderen"],
    toepassen: ["Plannen: acht lesuren goed verdelen", "Zelfstandig informatie opzoeken op het internet", "Doorzetten bij een moeilijke tekst", "Een studiemethode kiezen voor woordjes"],
    materiaal: ["Werkbundel", "Een Chromebook met internet", "Kleurpotloden", "Een woordenboek Nederlands of vandale.nl"],
    oplossing: "Op deze site, bij ‘Controleer je oplossing’. Je coach bekijkt je onderzoeksopdrachten.",
    product: "Een ingevulde werkbundel met je eerste Latijnse leestekst en een geleerde woordenlijst",
    links: [["Digitaal woordenboek Latijn-Nederlands", "https://www.latijnnederlands.nl"], ["Van Dale online", "https://www.vandale.nl"], ["Kaart van het Romeinse Rijk in 117 (Wikipedia)", "https://nl.wikipedia.org/wiki/Romeinse_provincie"], ["Lijst van Latijnse spreekwoorden en uitdrukkingen", "https://nl.wikipedia.org/wiki/Lijst_van_Latijnse_spreekwoorden_en_uitdrukkingen"], ["Res gestae divi Augusti (Wikipedia)", "https://nl.wikipedia.org/wiki/Res_gestae_divi_Augusti"], ["Augustus van Prima Porta (Wikipedia)", "https://nl.wikipedia.org/wiki/Augustus_van_Prima_Porta"], ["De humani corporis fabrica van Vesalius (Wikipedia)", "https://nl.wikipedia.org/wiki/De_humani_corporis_fabrica"], ["Munten zoeken in het British Museum", "https://www.britishmuseum.org/collection"], ["Quizlet-klas 1ste Latijnse: woordenlijsten caput 1–8", "https://quizlet.com/join/Bv7TgFsfh?i=2e22vl&x=1bqt"], ["Quizlet-klas 2de Latijnse: woordenlijsten", "https://quizlet.com/join/US2tKdzwJ?i=2e22vl&x=1bqt"]],
    leerkaarten: [
      ["Van dorp tot wereldrijk", "Het Latijn was eerst de taal van Rome en de streek Latium. Rome was toen een klein dorp aan de Tiber. In de 2de eeuw na Christus beheerste Rome een reusachtig rijk. Het liep van Schotland tot Irak. De Middellandse Zee noemden de Romeinen <i>mare nostrum</i>, ‘onze zee’.",
        CSF.lk.fig('<svg viewBox="-15 0 470 130" role="img" aria-label="Tijdlijn van Rome"><line x1="20" y1="55" x2="420" y2="55" stroke="#1d1d1b" stroke-width="2"/><g fill="#3BC1C5"><circle cx="35" cy="55" r="7"/><circle cx="120" cy="55" r="7"/><circle cx="230" cy="55" r="9" fill="#FCAF17"/><circle cx="320" cy="55" r="7"/><circle cx="405" cy="55" r="7"/></g><g font-size="11" text-anchor="middle"><text x="35" y="35" font-weight="700">753 v.C.</text><text x="35" y="78">stichting</text><text x="35" y="91">(volgens de sage)</text><text x="120" y="35" font-weight="700">509 v.C.</text><text x="120" y="78">republiek</text><text x="230" y="35" font-weight="700">27 v.C.</text><text x="230" y="78">eerste keizer</text><text x="320" y="35" font-weight="700">117 n.C.</text><text x="320" y="78">grootste rijk</text><text x="405" y="35" font-weight="700">476 n.C.</text><text x="405" y="78">einde West-</text><text x="405" y="91">Romeinse Rijk</text></g><text x="220" y="120" font-size="11" text-anchor="middle" fill="#555">v.C. = voor Christus: tel achteruit. n.C. = na Christus: tel vooruit.</text></svg>') +
CSF.lk.punten(['De Romeinen bouwden wegen, steden en bruggen door hun hele rijk.', 'Overal waar soldaten en handelaars kwamen, sprak men Latijn.', 'Zo werd een dorpstaal de taal van een wereldrijk.']) +
CSF.lk.let('Bij jaartallen voor Christus is een groter getal vroeger: 753 v.C. ligt verder terug dan 509 v.C.')],
      ["Romaanse en Germaanse talen", "De Romaanse talen komen rechtstreeks uit het Latijn: Italiaans, Frans, Spaans en Portugees. Ook de Germaanse talen, zoals Nederlands, Duits en Engels, hebben veel Latijnse woorden. Denk aan muur (murus), venster (fenestra), school (schola) en kaas (caseus).",
        CSF.lk.fig('<svg viewBox="0 0 440 160" role="img" aria-label="Uit het Latijn ontstonden de Romaanse talen"><rect x="170" y="10" width="100" height="34" rx="8" fill="#FCAF17"/><text x="220" y="32" font-size="14" text-anchor="middle" fill="#fff" font-weight="700">Latijn</text><g stroke="#1d1d1b" stroke-width="1.5"><line x1="220" y1="44" x2="50" y2="100"/><line x1="220" y1="44" x2="135" y2="100"/><line x1="220" y1="44" x2="220" y2="100"/><line x1="220" y1="44" x2="305" y2="100"/><line x1="220" y1="44" x2="390" y2="100"/></g><g font-size="12" text-anchor="middle"><rect x="10" y="100" width="80" height="30" rx="6" fill="#3BC1C5"/><text x="50" y="120" fill="#fff">Italiaans</text><rect x="95" y="100" width="80" height="30" rx="6" fill="#3BC1C5"/><text x="135" y="120" fill="#fff">Frans</text><rect x="180" y="100" width="80" height="30" rx="6" fill="#3BC1C5"/><text x="220" y="120" fill="#fff">Spaans</text><rect x="265" y="100" width="80" height="30" rx="6" fill="#3BC1C5"/><text x="305" y="120" fill="#fff">Portugees</text><rect x="350" y="100" width="80" height="30" rx="6" fill="#3BC1C5"/><text x="390" y="120" fill="#fff">Roemeens</text></g><text x="220" y="152" font-size="11" text-anchor="middle" fill="#555">Germaanse talen (Nederlands, Duits, Engels) leenden veel Latijnse woorden.</text></svg>') +
CSF.lk.tabel(['Latijn', 'Italiaans', 'Frans', 'Spaans', 'Nederlands'], [['aqua (water)', 'acqua', 'eau', 'agua', 'aquarium'], ['nox (nacht)', 'notte', 'nuit', 'noche', 'nocturne'], ['mater (moeder)', 'madre', 'mère', 'madre', 'maternaal']]) +
CSF.lk.tip('Ken je een woord in het Frans? Grote kans dat je zo ook het Latijnse woord kan raden.')],
      ["Latijn, nog altijd een wereldtaal", "Planten en dieren hebben een wetenschappelijke naam in het Latijn. Dokters gebruiken Latijnse namen voor botten, spieren en organen. Advocaten gebruiken Latijnse uitdrukkingen. Sommige universiteiten ontvangen gasten nog in het Latijn.",
        CSF.lk.tabel(['Waar?', 'Voorbeeld', 'Betekenis'], [['biologie', '<i>Homo sapiens</i>', 'de verstandige mens'], ['biologie', '<i>Bellis perennis</i>', 'het madeliefje (‘altijd mooi’)'], ['geneeskunde', '<i>femur</i>', 'het dijbeen'], ['recht', '<i>alibi</i>', 'elders: je was op een andere plek'], ['dagelijks leven', '<i>pro deo</i>, <i>et cetera</i>, <i>versus</i>', 'gratis, enzovoort, tegen']]) +
CSF.lk.p('Een wetenschappelijke naam is overal ter wereld dezelfde. Een Japanse en een Belgische bioloog weten zo zeker dat ze over dezelfde plant praten.') +
CSF.lk.tip('Zoek op de verpakking van een medicijn of in een plantengids naar Latijnse woorden.')],
      ["Keizer Augustus", "Augustus was de eerste Romeinse keizer (27 v.Chr. – 14 n.Chr.). Met hem begon een lange periode van vrede: de <i>pax Augusta</i>. Hij liet zijn daden op bronzen platen zetten: de <i>Res gestae</i>. Een kopie hangt nog op een tempel in Ankara (Turkije).",
        CSF.lk.fig('<svg viewBox="0 0 440 110" role="img" aria-label="Het leven van Augustus op een tijdlijn"><line x1="20" y1="50" x2="420" y2="50" stroke="#1d1d1b" stroke-width="2"/><g fill="#3BC1C5"><circle cx="40" cy="50" r="7"/><circle cx="150" cy="50" r="7"/><circle cx="250" cy="50" r="9" fill="#FCAF17"/><circle cx="400" cy="50" r="7"/></g><g font-size="11" text-anchor="middle"><text x="40" y="30" font-weight="700">63 v.C.</text><text x="40" y="73">geboren als</text><text x="40" y="86">Octavianus</text><text x="150" y="30" font-weight="700">44 v.C.</text><text x="150" y="73">erfgenaam</text><text x="150" y="86">van Caesar</text><text x="250" y="30" font-weight="700">27 v.C.</text><text x="250" y="73">krijgt de titel</text><text x="250" y="86">Augustus</text><text x="400" y="30" font-weight="700">14 n.C.</text><text x="400" y="73">sterft</text></g></svg>') +
CSF.lk.punten(['<i>Augustus</i> betekent ‘de verhevene’: een eretitel, geen gewone naam.', 'De maand augustus is naar hem genoemd.', '<i>Res gestae</i> betekent ‘de gedane dingen’: zijn daden.']) +
CSF.lk.vb('<p>Augustus was keizer van 27 v.C. tot 14 n.C. Hoe lang is dat?</p><p>Er bestaat geen jaar 0: na 1 v.C. komt meteen 1 n.C. Dus 27 + 14 − 1 = <b>40 jaar</b>.</p>', 'Rekenen met jaartallen') +
CSF.lk.tip('Een tijdlijn over het jaar 0 heen? Tel de jaren voor en na Christus op en trek er 1 af.')],
      ["Julius Caesar en onze streken", "Julius Caesar veroverde onze streken in 57 v.Chr. Hier woonden de Belgae, vooral Kelten. Hij beschreef de oorlog in <i>De bello Gallico</i>. Onze streken werden geromaniseerd. Caesar werd vermoord op 15 maart 44 v.Chr.",
        CSF.lk.vb('<p><i>Horum omnium fortissimi sunt Belgae.</i></p><p>‘Van hen allen zijn de Belgen de dappersten.’ Dat schreef Caesar in <i>De bello Gallico</i> over de volkeren in Gallië.</p>', 'Beroemde zin') +
CSF.lk.punten(['<i>De bello Gallico</i> = ‘over de Gallische oorlog’.', 'Na de verovering kwamen hier Romeinse wegen, villa’s en steden, zoals Tongeren (<i>Atuatuca Tungrorum</i>).', 'Caesar zei na een snelle overwinning: <i>Veni, vidi, vici</i> – ik kwam, ik zag, ik overwon.']) +
CSF.lk.tip('Tongeren is de oudste stad van België. Er staat een groot standbeeld van Ambiorix, de Eburoonse leider die tegen Caesar vocht.')],
      ["Hoe studeer ik woordjes?", "Splits de lijst in kleine delen. Herhaal ze vaak. Duid moeilijke woorden aan. Bedenk een trucje of maak een tekening. Leid de betekenis af uit het Nederlands, Frans of Engels. Oefen online, bijvoorbeeld met Quizlet. Maak woordkaartjes.",
        CSF.lk.fig('<svg viewBox="0 0 420 150" role="img" aria-label="Drie bakjes om woordjes te herhalen"><g stroke="#1d1d1b" stroke-width="2"><rect x="30" y="40" width="100" height="70" fill="#f9c9b6"/><rect x="160" y="40" width="100" height="70" fill="#fff4e0"/><rect x="290" y="40" width="100" height="70" fill="#cfe8c4"/></g><g font-size="12" text-anchor="middle"><text x="80" y="30" font-weight="700">bak 1: elke dag</text><text x="210" y="30" font-weight="700">bak 2: om de 2 dagen</text><text x="340" y="30" font-weight="700">bak 3: elke week</text><text x="80" y="80">nieuw of fout</text><text x="210" y="80">1 keer juist</text><text x="340" y="80">gekend!</text></g><g stroke="#2e7d4a" stroke-width="2" fill="none"><path d="M130 125 Q145 140 160 125"/><path d="M260 125 Q275 140 290 125"/></g><text x="210" y="145" font-size="11" text-anchor="middle" fill="#555">juist → één bak verder · fout → terug naar bak 1</text></svg>', 'Zo herhaal je vaak wat moeilijk is en minder vaak wat je al kent.') +
CSF.lk.vb('<p><b>porta</b> = deur → denk aan een <i>portier</i>, die bij de deur staat.</p><p><b>mater</b> = moeder → denk aan het Engelse <i>mother</i>.</p>', 'Afleiden') +
CSF.lk.tip('Leer 10 woorden per keer, niet 40. Herhaal ze de volgende dag opnieuw.')]
    ],
    invalshoek: { intro: "Kies in lesuur 1 je extra uitdaging voor het einde van het project.", keuzes: [
      ["Woordenschat", "Leer ook de woordenlijsten van caput 1 en 2 in Quizlet."],
      ["Munten en beelden", "Zoek drie extra Romeinse munten. Leg uit wat erop staat."],
      ["Latijn rondom mij", "Fotografeer vijf Latijnse woorden in je omgeving: gebouwen, verpakkingen, logo’s."]] },
    nogTijd: "Zoek vijf merknamen of logo’s met een Latijns woord (bijvoorbeeld Volvo, Audi, Nivea). Zoek wat het Latijnse woord betekent.",
    test: [
      ["Waar werd het Latijn oorspronkelijk gesproken?", ["In Rome en Latium", "In heel Europa", "In Griekenland"], 0, "Latijn komt van Latium."],
      ["Welke taal is een Romaanse taal?", ["Spaans", "Nederlands", "Engels"], 0, "Romaanse talen komen rechtstreeks uit het Latijn."],
      ["Wat betekent mare nostrum?", ["Onze zee", "De grote zee", "De Romeinse zee"], 0, "De Middellandse Zee."],
      ["Wanneer waren de deuren van de tempel van Janus gesloten?", ["In vredestijd", "In oorlogstijd", "Op feestdagen"], 0, "Open deuren = oorlog. Gesloten deuren = vrede."],
      ["Hoe werd Caesar genoemd van 46 tot 44 v.Chr.?", ["Dictator", "Keizer", "Koning"], 0, "Op zijn munten staat DIC, voor dictator."]
    ],
    controle: [
      ["Welke rivier stroomt door Rome?", "tekst", ["tiber", "de tiber", "tiberis"], "Kijk in de leerkaart ‘Van dorp tot wereldrijk’."],
      ["Welke zee ligt ten oosten van Italië?", "tekst", ["adriatische zee", "de adriatische zee", "adriatisch"], "Tussen Italië en de Balkan."],
      ["Welke bergketen loopt van noord naar zuid door Italië?", "tekst", ["apennijnen", "de apennijnen", "appennijnen"], "Niet de Alpen."],
      ["Wat is de Latijnse naam van de Donau?", "tekst", ["danuvius", "dānuvius", "danuvium"], "Kijk in zin 7 van de tekst."],
      ["Vertaal: amīcitia", "tekst", ["vriendschap"], "Fr. un ami."],
      ["Vertaal: pāx", "tekst", ["vrede"], "Ned. pacifist."],
      ["Vertaal: exercitus", "tekst", ["leger", "het leger"], "Eng. to exercise."],
      ["Welk Nederlands woord komt van signum?", "tekst", ["signaal"], "Een teken."]
    ],
    criteria: ["Logboek elk lesuur ingevuld", "Controle- en lectuurvragen volledig beantwoord", "Kaartopdrachten correct", "Onderzoeksopdrachten op internet met vermelding van de bron", "Latijnse tekst begrepen: ‘Hoe zeg je in het Latijn …?’ correct", "Woordenlijst geleerd en getoetst"],

    lessen: CSF.lessenN({
      t1: "De geschiedenis van het Latijn",
      weet: "Noteer wat je al weet over de Romeinen of over het Latijn.",
      opdracht: "Lees de opdracht. Kies je extra uitdaging.",
      ideeen: "Bedenk drie Nederlandse woorden die volgens jou uit het Latijn komen.",
      start: "Werkblad 1: lees ‘Lang geleden’. Vul de kaart van Italië in. Beantwoord de controlevragen.",
      midden: [
        { titel: "De invloed en de verspreiding", werk: "Werkblad 2 en 3: lees ‘De invloed van het Latijn’ en ‘De verspreiding’. Herken de Romaanse talen. Beantwoord de controlevragen." },
        { titel: "Latijn vandaag", werk: "Werkblad 4: ontdek Latijn in de wetenschap, de geneeskunde en het recht. Zoek zelf voorbeelden op het internet." },
        { titel: "De Augusto imperatore (1)", werk: "Werkblad 5: lees de inleiding over Augustus. Lees zin 1 tot 5. Gebruik de woordenlijst. Beantwoord de lectuurvragen." },
        { titel: "De Augusto imperatore (2)", werk: "Werkblad 6: lees zin 6 tot 10. Beantwoord de lectuurvragen. Zoek de Nederlandse afleidingen." },
        { titel: "Julius Caesar", werk: "Werkblad 7: lees over Julius Caesar. Beantwoord de controlevragen. Onderzoek de munten." },
        { titel: "Hoe zeg je in het Latijn …?", werk: "Werkblad 8: zoek in de tekst hoe je de Nederlandse woorden in het Latijn zegt. Onderzoek het beeld van Augustus van Prima Porta." }
      ],
      laatste: { titel: "Latijnse woordjes studeren", werk: "Werkblad 9: lees de studietips. Leer de woordenlijst. Maak tekeningen bij de woorden. Oefen in Quizlet.", presenteer: "Overhoor een medeleerling met je woordkaartjes. Toon je mooiste woordtekening." }
    }),

    werkbundel: [
      { les: 1, html: `
        ${h.kader("De opdracht", "Ontdek waar het Latijn vandaan komt en waar het vandaag nog leeft. Lees daarna je eerste Latijnse tekst: een stuk uit het testament van keizer Augustus. Leer ten slotte de woorden uit die tekst. Gebruik het internet, vandale.nl en het digitale woordenboek latijnnederlands.nl.")}
        <h2>Werkblad 1 · Lang geleden</h2>
        <p>Het Latijn was oorspronkelijk de taal van een klein gebied in Italië: Rome en de omgeving, <b>Latium</b>. Rome was toen eerder een klein dorp aan de Tiber. Maar dat dorp groeide uit tot een reusachtig rijk. In de 2de eeuw na Christus liep het van Schotland langs de Rijn en de Donau tot aan de Zwarte Zee. Alle gebieden rond de Middellandse Zee hoorden erbij. In Azië reikte het tot in het huidige Irak en Iran. De Romeinen noemden de Middellandse Zee <i>mare nostrum</i>: onze zee.</p>
        <div class="twee" style="align-items:start"><div>${italie()}</div>
        <div><p><b>Vul de kaart aan.</b> Schrijf bij elk nummer de juiste naam.</p>
        <table><tr><th style="width:14%">Nr.</th><th>Naam</th></tr>${[1, 2, 3, 4, 5].map(function (n) { return '<tr><td style="text-align:center">' + n + '</td><td style="height:30px"></td></tr>'; }).join("")}</table>
        <p class="klein">Kies uit: de Adriatische Zee, de Ionische Zee, de Tyrrheense Zee, de Apennijnen, de Alpen.</p>
        <p>Italië is een __________________ en wordt begrensd door drie zeeën.</p></div></div>` },
      { les: 1, html: `
        <h3>Controlevragen</h3>
        ${vragen(["Waar werd het Latijn gesproken?", "Welke rivier stroomt door Rome?", "Wat bedoelden de Romeinen met <i>mare nostrum</i>?"])}
        <p><b>Wanneer was het Romeinse Rijk op zijn grootst?</b> &nbsp; &#9744; 1ste eeuw v.Chr. &nbsp; &#9744; 2de eeuw v.Chr. &nbsp; &#9744; 2de eeuw n.Chr.</p>
        <h3>Het Romeinse Rijk op zijn grootst</h3>
        <p>Open de kaart van het Romeinse Rijk in 117 via de link bij het project. Noteer welke huidige landen (helemaal of gedeeltelijk) bij het Romeinse Rijk hoorden. Zoek er minstens tien.</p>
        ${h.tabel(["In Europa", "In Afrika", "In Azië"], 5, 26)}
        <h3>Wat weet ik al? De Romeinen en het Latijn</h3>${h.lijnen(3)}` },
      { les: 2, html: `
        <h2>Werkblad 2 · De invloed van het Latijn</h2>
        ${h.leerkaart("Leerkaart · Romaanse en Germaanse talen", "<p>De taal van Latium, de <i>lingua Latina</i>, was eeuwenlang de officiële taal van het rijk. De <b>Romaanse talen</b> komen er rechtstreeks uit: Italiaans, Frans, Spaans en Portugees. Ook de <b>Germaanse talen</b> (Duits, Nederlands, Engels …) hebben veel Latijnse woorden. Agenda, examen, student en dokter verrassen je niet. Maar ook muur (murus), poort (porta), venster (fenestra), school (schola), tafel (tabula), olie (oleum), azijn (acetum), peper (piper) en kaas (caseus) komen uit het Latijn. Het Engels werd via het Frans sterk door het Latijn beïnvloed.</p>")}
        <h3>Controlevragen</h3>
        ${vragen(["Geef twee voorbeelden van Germaanse talen.", "Geef drie alledaagse woorden die uit het Latijn komen.", "(internet) Zoek nog twee andere Germaanse talen.", "(internet) Waarom noemt men het Engels de <i>lingua franca</i>?"], 40)}
        <h3>Talen herkennen</h3>
        <p>Zoek de woorden op. Omcirkel de taal. Schrijf de betekenis.</p>
        <table><tr><th>Woord</th><th style="width:38%">Taal</th><th style="width:28%">Betekenis</th></tr>
        ${["buongiorno!", "obrigado!", "¿qué tal?", "bon appétit!", "tutto a posto?", "¡gracias!", "muito legal!", "¡hasta luego!"].map(function (w) { return "<tr><td><i>" + w + '</i></td><td class="klein">It. &nbsp; Fr. &nbsp; Port. &nbsp; Sp.</td><td></td></tr>'; }).join("")}</table>` },
      { les: 2, html: `
        <h2>Werkblad 3 · De verspreiding</h2>
        <p>Door de ontdekkingsreizen van de 15de en de 16de eeuw koloniseerden vooral Spanjaarden en Portugezen Zuid- en Midden-Amerika. Zo raakten de Romaanse talen ook daar verspreid. In het oostelijk deel van het rijk hield het Latijn geen stand: daar bleef het Grieks de belangrijkste taal. In het noorden verdrongen de invallen van de Germanen het Latijn grotendeels. In de 5de eeuw vielen de Goten, de Vandalen en andere stammen het rijk binnen. In 476 na Christus zette de Germaanse leider Odoaker de laatste keizer van het West-Romeinse Rijk af.</p>
        <p>Leg met je eigen woorden uit. Gebruik vandale.nl.</p>
        ${vragen(["ko·lo·nie", "ko·lo·ni·se·ren"], 36)}
        <h3>Controlevragen</h3>
        ${vragen(["Welke volkeren koloniseerden Zuid- en Midden-Amerika?", "Wat is het gevolg van die kolonisatie voor de talen?", "Waarom hield het Latijn in het oosten van het rijk geen stand?"], 40)}
        <p><b>(latijnnederlands.nl) Het woord kolonie komt van het Latijnse woord …</b><br>&#9744; collātiō &nbsp; &#9744; collīnus &nbsp; &#9744; colōnia &nbsp; &#9744; color</p>
        <p><b>Hoe spreek je de c uit in het Latijn?</b></p>${h.lijnen(1)}` },
      { les: 3, html: `
        <h2>Werkblad 4 · Latijn vandaag</h2>
        ${h.leerkaart("Leerkaart · Latijn, nog altijd een wereldtaal", "<p>Sommige universiteiten ontvangen buitenlandse gasten nog in het Latijn. Planten hebben een wetenschappelijke naam in het Latijn, zoals <i>Rosmarinus officinalis</i> (rozemarijn). Dokters gebruiken Latijnse namen voor botten, spieren en organen. Ook de taal van het gerecht zit vol Latijn: <i>res ipsa loquitur</i>, de zaak spreekt voor zichzelf.</p>")}
        <p><b>Een grapje van de Romeinse dichter Martialis:</b> <i>Nuper erat medicus, nunc est vespillo Diaulus. Quod vespillo facit, fecerat et medicus.</i><br>Onlangs was Diaulus nog dokter, nu is hij begrafenisondernemer. Wat hij nu doet, deed hij als dokter ook al. <b>Leg het grapje uit.</b></p>${h.lijnen(2)}
        <p><b>Andreas Vesalius</b> schreef in 1543 <i>De humani corporis fabrica</i> over de bouw van het menselijk lichaam. Hij legde de basis van een vak in de geneeskunde. <b>Hoe heet dat vak?</b> ______________________</p>
        <p>Open het boek via de link bij het project. Een plaat heet <i>musculorum tabula</i>, een andere toont de <i>arteriae</i>. Waarover gaan die platen?</p>${h.lijnen(1)}
        <h3>Het Latijn van advocaten</h3>
        ${vragen(["Dūra lēx, sed lēx!", "Ex factō iūs oritur.", "In dubiō prō lībertāte."], 32)}
        <h3>Latijn rondom mij: zoek op het internet twee voorbeelden van …</h3>
        ${vragen(["Latijnse namen van planten of bomen", "Latijnse namen in de geneeskunde", "Latijnse uitdrukkingen in het dagelijks leven", "Strips in het Latijn of over de Romeinen"], 30)}` },
      { les: 4, html: `
        <h2>Werkblad 5 · De Augusto imperatore</h2>
        ${h.leerkaart("Leerkaart · Keizer Augustus", "<p>Augustus was de eerste Romeinse keizer (27 v.Chr. – 14 n.Chr.). Met hem begon het <b>keizerrijk</b> (27 v.Chr. – 476 n.Chr.) en een lange tijd van vrede en welvaart. Augustus liet zijn daden op bronzen platen zetten: de <i>Res gestae</i>. Het origineel is verloren. In 1555 ontdekte de Vlaming Ghislain de Busbecq een kopie op de muren van een tempel in Ankara (Turkije).</p>")}
        <p>Leg met je eigen woorden uit. Gebruik vandale.nl.</p>
        ${vragen(["tes·ta·ment", "kei·zer·rijk", "pro·vin·cie"], 32)}
        <h3>Lees zin 1 tot 5. Gebruik de woordenlijst achteraan (werkblad 9).</h3>
        <ol style="line-height:1.7">${REGELS.slice(0, 5).map(function (r) { return "<li><i>" + r + "</i></li>"; }).join("")}</ol>` },
      { les: 4, html: `
        <h3>Lectuurvragen bij zin 1 tot 5</h3>
        ${vragen(["Wat heeft Augustus uitgebreid?", "In welke gebieden bracht hij vrede?", "Welke Latijnse woorden tonen dat er schepen ingezet werden?", "Welke rivier komt in deze regels voor?", "Welk Frans woord herken je in <i>amīcitiam</i>?", "‘Oefenen’ is in het Engels <i>to exercise</i>. Welk Latijns woord lijkt daarop? Wat betekent het?", "(internet) In welk huidig land woonden de Kimbren?", "Welk volk uit het huidige Irak en Iran komt voor?", "Welk volk komt tweemaal voor?", "Waar waren de Romeinse legers nog?"], 34)}
        <p><b>(internet) Een Romeins legerteken met een adelaar heette een <i>signum</i>. Wat was het nut van zo’n teken?</b></p>${h.lijnen(2)}` },
      { les: 5, html: `
        <h2>Werkblad 6 · De Augusto imperatore (2)</h2>
        <h3>Lees zin 6 tot 10.</h3>
        <ol start="6" style="line-height:1.7">${REGELS.slice(5).map(function (r) { return "<li><i>" + r + "</i></li>"; }).join("")}</ol>
        ${vragen(["Welke rivier heet in het Latijn <i>Dānuvius</i>? (Nederlandse naam)", "Welke andere rivier kwam al voor in de tekst?", "(internet) Wat betekende het als de deuren van de tempel van Janus gesloten waren?", "(internet) Welke stad ligt vandaag aan de monding van de Rijn?", "Over welke werelddelen strekte het rijk zich uit?"], 26)}
        <h3>Levend Latijn: welk Nederlands woord komt van …?</h3>
        <p class="klein">Kies uit: Spanje, tempel, transfer, signaal, Arabië, finale, amicaal, populatie, duo, Ethiopië. Onderlijn de letters die overeenkomen met het Latijn.</p>
        <table><tr><th style="width:22%">Latijn</th><th style="width:26%">Nederlands woord</th><th>Betekenis</th></tr>
        <tr><td>fīnēs</td><td><u>fin</u>ale</td><td>slotgedeelte; beslissende laatste wedstrijd</td></tr>
        ${["Hispāniam", "amīcitia", "populī", "duo", "Aethiopia", "Arabia", "signa", "trāns", "templum"].map(function (w) { return "<tr><td>" + w + '</td><td style="height:19px"></td><td></td></tr>'; }).join("")}</table>` },
      { les: 6, html: `
        <h2>Werkblad 7 · Julius Caesar</h2>
        ${h.leerkaart("Leerkaart · Julius Caesar en onze streken", "<p>Julius Caesar veroverde onze streken in 57 v.Chr. Hier woonden toen de <b>Belgae</b>, vooral Kelten. Later kwamen er Germaanse stammen bij. Caesar beschreef de verovering van Gallië in <i>Commentarii de bello Gallico</i>. Onze streken werden <b>geromaniseerd</b>: de Romeinse gewoonten, levenswijze en taal werden ingevoerd. Augustus noemde ons gebied later <i>Gallia Belgica</i>. Caesar werd op 15 maart 44 v.Chr. met dolken vermoord door een groep rond Brutus en Cassius. Na een burgeroorlog werd Octavianus de baas. Hij werd later keizer Augustus.</p>")}
        ${vragen(["Wanneer veroverde Caesar onze streken?", "Wie waren de Belgae?", "Waarover gaat <i>De bello Gallico</i>?", "Wat betekent romaniseren?", "Hoe kwam Caesar aan zijn einde?"], 32)}
        <h3>Research: Romeinse munten</h3>
        <p>Op een munt van 44 v.Chr. staat <b>CAESAR DIC PERPETVO</b>. Op de andere kant staat het hoofd van een godin. Volgens de familie van Caesar stamde hij van haar af.</p>
        ${vragen(["Welke naam staat op de munt?", "(internet) Welke godin staat erop?", "DIC is een afkorting. Van welk woord? (Het is hetzelfde in het Nederlands.)", "Wat zegt dat over de macht van Caesar?"], 30)}` },
      { les: 6, html: `
        <h3>Zoek zelf een munt van Augustus</h3>
        <p>Zoek in de collectie van het British Museum (link bij het project) een munt met Augustus. Teken de munt of plak een afdruk. Noteer de bron.</p>
        ${h.vak("Munt met Augustus", 230)}
        <p><b>Bron (volledige link):</b> ____________________________________________________________</p>
        <h3>Reclame op een munt</h3>
        <p>Augustus maakte reclame voor zichzelf met gebouwen, opschriften en munten. Op een munt uit 13–14 n.Chr. staat dit opschrift. Vul de ontbrekende letters aan. Gebruik latijnnederlands.nl.</p>
        <p style="font-size:13pt;letter-spacing:2px;text-align:center">C . . SAR &nbsp; A . GV . TVS &nbsp; DIV . &nbsp; F &nbsp; P . TE . &nbsp; PA . R . AE</p>
        <p><b>Wat betekent de boodschap?</b></p>${h.lijnen(2)}` },
      { les: 7, html: `
        <h2>Werkblad 8 · Hoe zeg je in het Latijn …?</h2>
        <p style="line-height:1.6;border:1.5px solid #333;padding:8px 10px"><i>${TEKST}</i></p>
        <p>Hoe staan de onderlijnde woorden in het Latijn? Zoek ze in de tekst.</p>
        <table><tr><th>Nederlands</th><th style="width:42%">Latijn</th></tr>
        ${["<u>Augustus</u> breidt het grondgebied", "van <u>het Romeinse Rijk</u> uit.", "Hij <u>brengt vrede</u> in Spanje en Gallië.", "<u>De Romeinse vloot</u> vaart", "van de monding <u>van de Rijn</u>", "<u>tot aan het gebied</u> van de Kimbren.", "De Kimbren willen <u>vriendschap</u> sluiten", "<u>met het Romeinse volk</u>.", "<u>Twee legers</u> overwinnen veel volkeren", "en ze nemen <u>veel steden</u> in.", "Ze geven <u>de Romeinse veldtekens</u> terug.", "Augustus leidt een leger <u>over de Donau</u>.", "<u>Zeer veel volkeren</u> verlangen vriendschap.", "Augustus <u>sluit</u> de deuren <u>van de tempel van Janus</u>.", "<u>De heerschappij van Augustus</u> betekent", "het begin <u>van de vrede van Augustus</u>."].map(function (z) { return '<tr><td>' + z + '</td><td style="height:24px"></td></tr>'; }).join("")}</table>` },
      { les: 7, html: `
        <h3>Augustus van Prima Porta</h3>
        <p>Open het beeld van Augustus van Prima Porta via de link bij het project.</p>
        <p><b>Hoe wordt Augustus voorgesteld?</b> &nbsp; &#9744; als priester &nbsp; &#9744; als veldheer &nbsp; &#9744; als politicus</p>
        <p><b>Hoe zie je dat?</b></p>${h.lijnen(2)}
        <p><b>Wie is het kindje aan zijn rechterbeen?</b> &nbsp; &#9744; Julius Caesar &nbsp; &#9744; zijn dochter Julia &nbsp; &#9744; Cupido</p>
        <p><b>Waarom liet Augustus zich zo afbeelden, denk je?</b></p>${h.lijnen(3)}
        <h3>Een afbeelding van Augustus</h3>
        <p>Zoek een afbeelding van keizer Augustus. Plak ze hier. Noteer de volledige link als bron.</p>
        ${h.vak("Afbeelding van Augustus", 230)}
        <p><b>Bron:</b> ____________________________________________________________</p>` },
      { les: 8, html: `
        <h2>Werkblad 9 · Latijnse woordjes studeren</h2>
        ${h.leerkaart("Leerkaart · Hoe studeer ik woordjes?", "<ol><li>Splits de lijst in kleine delen. Herhaal ze vaak.</li><li>Controleer of je de Nederlandse betekenis begrijpt.</li><li>Duid moeilijke woorden aan.</li><li>Bedenk een trucje of maak een tekening.</li><li>Leid de betekenis af uit het Nederlands, Frans of Engels.</li><li>Oefen online, bijvoorbeeld met Quizlet.</li><li>Maak woordkaartjes en oefen ermee.</li></ol>")}
        <h3>Onthoudwoordjes bij de tekst over Augustus (1)</h3>
        ${woordenlijst(0, 14)}` },
      { les: 8, html: `<h3>Onthoudwoordjes (2)</h3>${woordenlijst(14, 30)}` },
      { les: 8, html: `<h3>Onthoudwoordjes (3)</h3>${woordenlijst(30, 42)}` },
      { les: 8, html: `
        <h3>Teken de woorden</h3>
        <p>Maak een eenvoudige tekening die het woord duidelijk maakt.</p>
        <table>${[["classis", "claudere", "cōgere", "dēsīderāre"], ["dūcere", "exercitus", "fīnis", "gēns"], ["imperātor", "oppidum", "pāx", "perferre"], ["populus", "reddere", "signum", "templum"]].map(function (r) { return "<tr>" + r.map(function (w) { return '<td style="width:25%;height:120px;vertical-align:top"><b>' + w + "</b></td>"; }).join("") + "</tr>"; }).join("")}</table>
        <p><b>Verder oefenen:</b> sluit aan bij de Quizlet-klas van je coach (links bij het project). Daar staan de woordenlijsten per caput, in aparte lijsten.</p>
        <p><b>Presenteren:</b> overhoor een medeleerling met je woordkaartjes · toon je mooiste woordtekening.</p>` }
    ]
  });
})();
