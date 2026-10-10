/* =====================================================================
   CSF-site · motor van de site
   Dit bestand hoef je normaal niet aan te passen. Projecten staan in
   projecten/…, algemene teksten in site.js.
   ===================================================================== */
(function () {
  "use strict";
  var CSF = window.CSF;

  /* ---------- Hulpjes die projectbestanden mogen gebruiken ---------- */
  CSF.h = {
    // Schrijflijnen
    lijnen: function (n) { var s = ""; for (var i = 0; i < (n || 1); i++) s += '<div class="lijn"></div>'; return s; },
    // Een leeg kader met een label, hoogte in pixels
    vak: function (label, hoogte) { return '<div class="vak" style="min-height:' + (hoogte || 80) + 'px"><div class="vl">' + (label || "") + '</div></div>'; },
    // Een tabel met lege rijen: kolommen = ["Kop 1", "Kop 2"], rijen = aantal, hoogte = px
    tabel: function (kolommen, rijen, hoogte) {
      var s = "<table><tr>" + kolommen.map(function (k) { return "<th>" + k + "</th>"; }).join("") + "</tr>";
      for (var i = 0; i < rijen; i++) s += "<tr>" + kolommen.map(function () { return '<td style="height:' + (hoogte || 26) + 'px"></td>'; }).join("") + "</tr>";
      return s + "</table>";
    },
    // Een leerkaart-kader
    leerkaart: function (titel, html) { return '<div class="kader leer"><div class="titel">' + titel + "</div>" + html + "</div>"; },
    kader: function (titel, html) { return '<div class="kader"><div class="titel">' + titel + "</div>" + html + "</div>"; }
  };

  /* Standaard lesplanning van 3 lesuren. Elk lesuur doorloopt de TASC-stappen. */
  CSF.lessen3 = function (o) {
    var logStart = "Vul de datumbalk in je logboek in. Lees wat je vorige keer deed en kies wat je vandaag eerst doet.";
    return [
      { titel: o.t1, stappen: [
        ["5'", "Logboek", "Vul de bovenkant van je logboek in: projectnaam, voorziene tijd, motivatie en afgesproken evaluatie (zie het laatste blad)."],
        ["10'", "Wat weet ik?", o.weet],
        ["5'", "Wat is de opdracht?", o.opdracht],
        ["10'", "Ideeën en het beste idee", o.ideeen],
        ["15'", "Uitwerking", o.start],
        ["5'", "Resultaat en logboek", "Kijk terug: wat lukte al, wat nog niet? Schat in je logboek hoe lang je project duurt."]
      ]},
      { titel: o.t2, stappen: [
        ["5'", "Logboek", logStart],
        ["35'", "Uitwerking", o.werk2],
        ["10'", "Resultaat en logboek", "Ben je tevreden over je werk van vandaag? Vertel in 3 zinnen aan een medeleerling (of schrijf het op) wat je deed. Vul je logboek in."]
      ]},
      { titel: o.t3, stappen: [
        ["5'", "Logboek", logStart],
        ["20'", "Uitwerking en resultaat", o.werk3],
        ["10'", "Presenteren!", o.presenteer],
        ["15'", "Wat heb ik geleerd?", "Vul het evaluatierooster in (laatste blad) en daarna in je logboek de evaluatie en het reflectieblad."]
      ]}
    ];
  };

  /* ---------- Kleine hulpfuncties ---------- */
  var KLEUREN = ["--d1", "--d2", "--d3", "--d4", "--d5", "--d6"];
  var DOMKLEUR = { "Wetenschappen": "--d1", "Talen": "--d2", "Creatief · beeld": "--d3", "Creatief · muziek": "--d6", "STEM": "--d4", "Cultuur": "--d5" };
  function kleur(p) {
    if (p.soort !== "vak" && DOMKLEUR[p.domein]) return DOMKLEUR[p.domein];
    var s = p.vak || p.domein || "", h = 0;
    for (var i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0;
    return KLEUREN[h % KLEUREN.length];
  }
  function logo() { return CSF.logo || "assets/logo.png"; }
  function esc(s) { return String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"); }
  function lijst(xs) { return '<ul class="vink">' + (xs || []).map(function (x) { return "<li>" + x + "</li>"; }).join("") + "</ul>"; }
  function label(p) { return p.soort === "vak" ? p.vak : p.domein; }
  var store = {
    get: function (k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set: function (k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  };
  function zoek(id) { for (var i = 0; i < CSF.projecten.length; i++) if (CSF.projecten[i].id === id) return CSF.projecten[i]; return null; }
  function oefen() { return CSF.projecten.filter(function (p) { return p.soort !== "vak"; }); }
  function vakken() { return CSF.projecten.filter(function (p) { return p.soort === "vak"; }); }
  function norm(x) { return String(x).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[.,!?;:'"’‘()]/g, " ").replace(/\s+/g, " ").trim(); }

  /* ---------- Gedeelde stukken ---------- */
  function kop() {
    return '<header class="top"><img src="' + logo() + '" alt="' + esc(CSF.school) + '"><div><div class="k">' + esc(CSF.werkgroep) +
      '</div><h1><a href="#start">' + esc(CSF.titel) + "</a></h1></div></header>";
  }
  function kruimel(stukken) {
    return '<nav class="kruimel" aria-label="Je bent hier">' + stukken.map(function (s, i) {
      var last = i === stukken.length - 1;
      return (i ? '<span class="sep">›</span>' : "") + (last ? "<b>" + esc(s[0]) + "</b>" : '<a href="' + s[1] + '">' + esc(s[0]) + "</a>");
    }).join("") + "</nav>";
  }
  function tascBlok(titel) {
    return '<div class="vel tasc"><h2 class="banner">' + titel + "</h2><ol>" + CSF.tasc.map(function (t, i) {
      return '<li><span class="n">' + (i + 1) + '</span><span class="q">' + t[0] + '</span><span class="k">' + t[1] + "</span></li>";
    }).join("") + '<li class="split">Elk lesuur doorloop je deze stappen opnieuw: je start met wat je al weet en wat je vandaag doet, en je eindigt met je resultaat, kort vertellen wat je deed en wat je leerde. Je logboek vul je zelf in op Smartschool.</li></ol></div>';
  }
  function kaart(p) {
    var delen = p.naam.split(":"), naam = delen[0], sub = delen.slice(1).join(":").trim();
    return '<a class="kies" href="#p-' + p.id + '" style="--h:var(' + kleur(p) + ')"><span class="dom">' + esc(label(p)) + '</span><span class="pn">' + esc(naam) +
      '</span><span class="pk">' + esc(sub) + '</span><span class="pp">' + p.kort + '</span><span class="pj">' + esc(p.jaar) + " · " + esc(p.tijd) + "</span></a>";
  }

  /* ---------- Weergaven ---------- */
  function vStart() {
    var oef = oefen();
    return '<div class="wrap">' + kop() + kruimel([["Start"]]) +
      '<div class="vel"><h2 class="banner">Welkom</h2><p>' + esc(CSF.welkom) + '</p><div class="poort">' +
      '<a class="deur" href="#oefenproject"><span class="dt">Oefenproject</span><span class="wie">1e jaar · stap 1</span><span class="dd">Kies één van de korte oefenprojecten (3 lesuren). Je leert hoe je een CSF-project aanpakt.</span><span class="doms">' +
      oef.map(function (p) { return '<span style="--h:var(' + kleur(p) + ')">' + esc(p.domein) + "</span>"; }).join("") + '</span><span class="pijl">Naar de oefenprojecten →</span></a>' +
      '<a class="deur" href="#overzicht"><span class="dt">Projectenoverzicht</span><span class="wie">1e en 2e jaar · stap 2</span><span class="dd">Alle CSF-projecten van de werkgroep, per vak. Elk project heeft dezelfde opbouw: projectfiche, lesplanning en werkbundel.</span><span class="pijl">Naar het overzicht →</span></a>' +
      "</div></div>" + tascBlok("Elk project volgt de acht TASC-stappen") + footer() + "</div>";
  }

  function vOefen() {
    var kt = (CSF.kiestest || []).map(function (v, i) {
      return '<fieldset class="vraag"><legend>' + esc(v[0]) + "</legend>" + v[1].map(function (o, j) {
        return '<label for="q' + i + "-" + j + '"><input type="radio" name="q' + i + '" value="' + o[1] + '" id="q' + i + "-" + j + '"> ' + esc(o[0]) + "</label>";
      }).join("") + "</fieldset>";
    }).join("");
    return '<div class="wrap">' + kop() + kruimel([["Start", "#start"], ["Oefenproject"]]) +
      '<div class="vel"><h2 class="banner">Oefenproject · 1e jaar</h2>' +
      '<p><span class="kw">Je kiest één oefenproject.</span> Elk project duurt 3 lesuren van 50 minuten. Je leest de opdracht hier op het scherm en werkt op papier in je werkbundel. Die bekijk en druk je af met de knop bij je project.</p>' +
      '<p>In lesuur 1 kies je je eigen <span class="kw">invalshoek</span>: jouw draai aan het project, zonder extra werk.</p>' +
      '<div class="ritme"><div><b>Start van elk lesuur</b><span>Datumbalk in je logboek. Wat weet ik al, wat doe ik vandaag?</span></div><div><b>Tijdens het lesuur</b><span>Volg het stappenplan bovenaan het lesuur in je werkbundel.</span></div><div><b>Einde van elk lesuur</b><span>Ben ik tevreden? Vertel kort wat je deed. Wat heb ik geleerd? Vul je logboek in.</span></div></div></div>' +
      '<div class="vel"><h2 class="banner">Kies je oefenproject</h2><div class="kiezen">' + oefen().map(kaart).join("") + "</div>" +
      (kt ? '<details class="inklap" style="margin-top:14px"><summary>Twijfel je? Doe de kiestest</summary><form id="kiestest">' + kt + '<div id="advies" aria-live="polite"></div></form></details>' : "") +
      "</div>" + footer() + "</div>";
  }

  function vOverzicht() {
    var vk = vakken(), lijstVakken = [], jaren = ["1e", "2e"];
    vk.forEach(function (p) { if (lijstVakken.indexOf(p.vak) < 0) lijstVakken.push(p.vak); });
    lijstVakken.sort();
    var fv = store.get("csf-fv") || "alle", fj = store.get("csf-fj") || "alle";
    if (fv !== "alle" && lijstVakken.indexOf(fv) < 0) fv = "alle";
    var chips = '<div class="chips" role="group" aria-label="Filter op vak"><button type="button" class="chip" data-fv="alle" aria-pressed="' + (fv === "alle") + '">Alle vakken</button>' +
      lijstVakken.map(function (v) { return '<button type="button" class="chip" data-fv="' + esc(v) + '" aria-pressed="' + (fv === v) + '">' + esc(v) + "</button>"; }).join("") + "</div>" +
      '<div class="chips" role="group" aria-label="Filter op jaar"><button type="button" class="chip" data-fj="alle" aria-pressed="' + (fj === "alle") + '">Beide jaren</button>' +
      jaren.map(function (j) { return '<button type="button" class="chip" data-fj="' + j + '" aria-pressed="' + (fj === j) + '">' + j + " jaar</button>"; }).join("") + "</div>";
    var groepen = lijstVakken.filter(function (v) { return fv === "alle" || v === fv; }).map(function (v) {
      var ps = vk.filter(function (p) { return p.vak === v && (fj === "alle" || String(p.jaar).indexOf(fj) >= 0); });
      return ps.length ? '<div class="vakgroep"><h3>' + esc(v) + '</h3><div class="kiezen">' + ps.map(kaart).join("") + "</div></div>" : "";
    }).join("");
    return '<div class="wrap">' + kop() + kruimel([["Start", "#start"], ["Projectenoverzicht"]]) +
      '<div class="vel"><h2 class="banner">Projectenoverzicht · 1e en 2e jaar</h2><p>Alle CSF-projecten van de werkgroep, ingedeeld per vak. Elk project heeft dezelfde opbouw als de oefenprojecten.</p>' +
      (vk.length ? chips : "") + groepen +
      (groepen ? "" : '<div class="leeg"><b>Hier komen de projecten van de werkgroep.</b><span>' + (vk.length ? "Geen projecten voor deze keuze." : "Er staan nog geen projecten in dit overzicht.") + ' Begin intussen met een <a href="#oefenproject">oefenproject</a>.</span></div>') +
      "</div>" + footer() + "</div>";
  }

  function vProject(p) {
    var terug = p.soort === "vak" ? ["Projectenoverzicht", "#overzicht"] : ["Oefenproject", "#oefenproject"];
    var test = (p.test || []).map(function (q, i) {
      return '<div class="tvraag" data-uitleg="' + esc(q[3]) + '"><p class="tq"><span class="tn">Vraag ' + (i + 1) + " van " + p.test.length + "</span>" + q[0] + '</p><div class="opties">' +
        q[1].map(function (o, j) { return '<button type="button" class="optie" data-ok="' + (j === q[2] ? 1 : 0) + '">' + o + "</button>"; }).join("") + '</div><p class="fb" aria-live="polite"></p></div>';
    }).join("");
    var controle = (p.controle || []).map(function (c, i) {
      var data = c[1] === "getal" ? 'data-n="' + esc(JSON.stringify(c[2])) + '"' : 'data-a="' + esc(JSON.stringify(c[2])) + '"';
      return '<div class="check" ' + data + ' data-h="' + esc(c[3]) + '"><label for="c-' + i + '">' + c[0] + '</label><div class="crij"><input type="text" id="c-' + i +
        '" autocomplete="off" spellcheck="false"><button type="button" class="btn licht cknop">Controleer</button></div><p class="fb" aria-live="polite"></p></div>';
    }).join("");
    var inv = p.invalshoek ? '<div class="blok"><h3 class="banner">Kies je invalshoek</h3><p class="hint">' + p.invalshoek.intro + ' Je invalshoek is geen extra werk: het is jouw eigen draai aan het project. Noteer je keuze in je logboek bij motivatie.</p><div class="invs">' +
      p.invalshoek.keuzes.map(function (k) { return '<div class="inv"><b>' + k[0] + "</b><span>" + k[1] + "</span></div>"; }).join("") + "</div>" +
      (p.nogTijd ? '<h4 class="sub">Klaar en nog tijd over?</h4><p>' + p.nogTijd + "</p>" : "") + "</div>" : "";
    var lessen = (p.lessen || []).map(function (l, i) {
      var id = "klaar-" + p.id + "-" + (i + 1);
      return '<div class="les"><h4><span class="lesnr">Lesuur ' + (i + 1) + "</span>" + l.titel + '</h4><ol class="stappen">' + l.stappen.map(function (s) {
        return '<li class="' + (s[1].indexOf("Logboek") >= 0 ? "lb" : "") + '"><span class="t">' + s[0] + '</span><span class="s">' + s[1] + '</span><span class="w">' + s[2] + "</span></li>";
      }).join("") + '</ol><label class="klaar" for="' + id + '"><input type="checkbox" id="' + id + '" data-p="' + p.id + '"> Dit lesuur is af</label></div>';
    }).join("");
    var links = (p.links || []).map(function (l) { return '<a class="btn licht" href="' + esc(l[1]) + '" target="_blank" rel="noopener">' + esc(l[0]) + " ↗</a>"; }).join("");
    return '<div class="wrap">' + kop() + kruimel([["Start", "#start"], terug, [label(p)]]) +
      '<section class="vel" style="--hc:var(' + kleur(p) + ')"><h2 class="banner groot">' + esc(p.naam) + "</h2>" +
      '<div class="tags"><span class="tag dom">' + esc(label(p)) + '</span><span class="tag">' + esc(p.jaar) + '</span><span class="tag">' + esc(p.tijd) + '</span><span class="tag">uitwerking op papier</span></div>' +
      '<p class="lead">' + p.kort + "</p>" +
      '<div class="acties"><button type="button" class="btn donker" id="verwacht-knop">Wat wordt van mij verwacht?</button><a class="btn" href="#wb-' + p.id + '">Bekijk en druk de werkbundel af</a>' + links + "</div>" +
      '<div class="voortgang" aria-live="polite"><div class="balk"><span></span></div><span class="vtekst"></span></div>' +
      '<div class="grid2"><div class="blok"><h3 class="banner">Projectfiche</h3><dl>' +
      "<dt>Omschrijving project</dt><dd>" + p.omschrijving + "</dd><dt>Doel van het project</dt><dd>" + p.doel + "</dd>" +
      "<dt>Bereikte vaardigheden</dt><dd>" + lijst(p.bereikt) + "</dd><dt>Vaardigheden die ik moet toepassen</dt><dd>" + lijst(p.toepassen) + "</dd>" +
      "<dt>Materiële benodigdheden</dt><dd>" + lijst(p.materiaal) + "</dd><dt>Waar kan ik de oplossing vinden?</dt><dd>" + p.oplossing + "</dd><dt>Eindproduct</dt><dd>" + p.product + "</dd></dl></div>" +
      '<div><div class="blok"><h3 class="banner">Leerkaarten</h3><p class="hint">Nieuwe leerstof, buiten de gewone lessen.</p>' +
      (p.leerkaarten || []).map(function (k) { return '<details class="kaart"><summary>' + k[0] + "</summary><p>" + k[1] + "</p></details>"; }).join("") + "</div>" +
      (test ? '<div class="blok"><h3 class="banner">Test jezelf</h3><div class="test">' + test + '<p class="score" aria-live="polite"></p></div></div>' : "") + "</div></div>" +
      inv +
      (controle ? '<div class="blok"><h3 class="banner">Controleer je oplossing</h3><p class="hint">Schrijf je antwoord eerst in je werkbundel. Tik het daarna hier in. Na 3 pogingen kan je het antwoord bekijken.</p>' + controle + "</div>" : "") +
      '<div class="blok"><h3 class="banner">Zo verloopt je project</h3><p class="hint">Elk lesuur doorloop je de TASC-stappen. In je werkbundel staat bovenaan elk lesuur een eenvoudig stappenplan. Gele regels zijn logboekmomenten op Smartschool.</p><div class="lessen">' + lessen + "</div></div>" +
      '<div class="blok"><h3 class="banner">Afgesproken evaluatie</h3><p class="hint">Noteer deze criteria in lesuur 1 in je logboek bij ‘afgesproken evaluatie’. Je coach beoordeelt je project ermee.</p>' + lijst(p.criteria) + "</div>" +
      '<p style="margin-top:22px"><a href="' + terug[1] + '">← ' + terug[0] + "</a></p></section>" + footer() + "</div>";
  }

  /* ---------- Werkbundel (A4) ---------- */
  function hoofding(p, sub) {
    return '<div class="hoofding"><img src="' + logo() + '" alt="' + esc(CSF.school) + '"><div><div class="k">CSF-project · ' + esc(p.jaar) + (sub ? " · " + esc(sub) : "") +
      '</div><div class="t">' + esc(p.naam) + '</div></div><div class="velden">Naam: ______________________<br>Klas: ______ Datum: ____ / ____</div></div>';
  }
  function stappenplan(p, n) {
    var les = p.lessen[n - 1];
    return '<div class="stappenplan"><div class="stap-kop">Stappenplan · lesuur ' + n + " · " + les.titel + "</div><ol>" + les.stappen.map(function (s) {
      return "<li><span>" + s[2] + ' <span class="tijd">(' + s[0].replace("'", " min") + ")</span></span></li>";
    }).join("") + "</ol></div>";
  }
  function bladen(p) {
    var f = function (lbl, v) { return '<tr><td class="lbl">' + lbl + "</td><td>" + v + "</td></tr>"; };
    var ul = function (xs) { return "<ul>" + (xs || []).map(function (x) { return "<li>" + x + "</li>"; }).join("") + "</ul>"; };
    var out = [];
    out.push(hoofding(p, "Werkbundel") + '<div class="domein">' + esc(label(p)) + "</div><h1>" + esc(p.naam) + "</h1><p>" + p.kort + "</p>" +
      '<table class="fiche">' + f("Projectnaam", "<b>" + esc(p.naam) + "</b>") + f("Omschrijving project", p.omschrijving) + f("Doel van het project", p.doel) +
      f("Bereikte vaardigheden", ul(p.bereikt)) + f("Vaardigheden die ik moet toepassen", ul(p.toepassen)) + f("Materiële benodigdheden", ul(p.materiaal)) +
      f("Waar kan ik de oplossing vinden?", p.oplossing) + f("Voorziene tijd", esc(p.tijd)) + f("Eindproduct", p.product) + "</table>" +
      (p.invalshoek ? "<h2>Kies je invalshoek</h2><p>" + p.invalshoek.intro + " Kruis aan en noteer je keuze in je logboek bij motivatie.</p><table>" +
        p.invalshoek.keuzes.map(function (k) { return '<tr><td style="width:7%;text-align:center;font-size:13pt">&#9744;</td><td style="width:24%"><b>' + k[0] + "</b></td><td>" + k[1] + "</td></tr>"; }).join("") + "</table>" : ""));
    var gezien = {};
    (p.werkbundel || []).forEach(function (b) {
      var s = hoofding(p, b.les ? "Lesuur " + b.les : (b.titel || ""));
      if (b.les && !gezien[b.les]) { gezien[b.les] = 1; s += stappenplan(p, b.les); }
      out.push(s + b.html);
    });
    out.push(hoofding(p, "Evaluatie") + "<h2>Afgesproken evaluatie</h2><p>Noteer deze criteria in lesuur 1 in je logboek bij ‘afgesproken evaluatie’. In de laatste les kruis je zelf aan waar je staat (potlood). Je coach kijkt het daarna na.</p>" +
      '<table><tr><th>Criterium</th><th style="width:13%">Nog niet</th><th style="width:13%">Op weg</th><th style="width:13%">Gelukt</th><th style="width:13%">Uitblinker</th></tr>' +
      (p.criteria || []).map(function (c) { return "<tr><td>" + c + "</td><td></td><td></td><td></td><td></td></tr>"; }).join("") + "</table>" +
      "<p><b>Wat wil ik zelf zeker bereiken in dit project?</b></p>" + CSF.h.lijnen(2) +
      (p.nogTijd ? '<div class="uitdaging"><b>Klaar en nog tijd over?</b> ' + p.nogTijd + "</div>" : ""));
    return out;
  }
  function vWerkbundel(p) {
    return '<div class="wrap afdruk">' + kop() + kruimel([["Start", "#start"], [label(p), "#p-" + p.id], ["Werkbundel"]]) +
      '<div class="wb-balk"><h2>Werkbundel · ' + esc(p.naam) + '</h2><button type="button" class="btn" id="druk">Afdrukken</button><a class="btn donker" href="#p-' + p.id + '">Terug naar het project</a></div>' +
      '<p class="wb-uitleg hint">Klik op <b>Afdrukken</b>. Kies A4 en zet ‘Achtergrondafbeeldingen’ (of ‘Achtergrondkleuren’) aan voor de kleuren. Je kan ook ‘Opslaan als PDF’ kiezen.</p>' +
      '<div class="wb-bladen">' + bladen(p).map(function (b) { return '<div class="blad">' + b + "</div>"; }).join("") + "</div></div>";
  }

  function footer() {
    return '<footer>Je werkt zelfstandig: alles wat je nodig hebt, staat in je werkbundel en op deze site. Je antwoorden controleer je bij ‘Controleer je oplossing’ in elk project.' +
      '<span class="voor-coach"><a class="btn donker" href="#coach">Coachfiches (enkel voor coaches)</a></span></footer>';
  }

  /* ---------- Coachfiches: versleuteld, enkel te openen met de coachcode ---------- */
  var coachInhoud = null;
  function vCoach() {
    var kop0 = '<div class="wrap afdruk">' + kop() + kruimel([["Start", "#start"], ["Coachfiches"]]);
    if (!coachInhoud) {
      return kop0 + '<div class="vel"><h2 class="banner">Coachfiches</h2><p>Deze pagina is enkel voor de CSF-coaches. Typ de coachcode om de coachfiches met voorbereiding, oplossingen en begeleidingstips te openen.</p>' +
        '<form id="coach-form" class="crij" style="max-width:520px"><label for="coach-code" class="hint" style="flex-basis:100%;margin:0">Coachcode</label><input type="password" id="coach-code" autocomplete="current-password" required>' +
        '<button type="submit" class="btn">Openen</button></form><p class="fb" id="coach-fb" aria-live="polite"></p></div>' + footer() + "</div>";
    }
    var gezien = {}, fiches = [];
    CSF.projecten.forEach(function (p) { if (coachInhoud[p.id] != null) { gezien[p.id] = 1; fiches.push(p); } });
    var blad = function (p) {
      var ctl = (p.controle || []).map(function (c) { var a = c[1] === "getal" ? String(c[2][0]).replace(".", ",") + (c[2][1] ? " (± " + String(c[2][1]).replace(".", ",") + ")" : "") : c[2][0]; return "<tr><td>" + c[0] + "</td><td><b>" + esc(a) + "</b></td></tr>"; }).join("");
      var les = (p.lessen || []).map(function (l, i) { return "<tr><td><b>Lesuur " + (i + 1) + "</b><br>" + l.titel + "</td><td>" + l.stappen.map(function (s) { return s[0] + " " + s[2]; }).join("<br>") + "</td></tr>"; }).join("");
      return '<div class="blad"><div class="coachband">COACHFICHE · NIET VOOR LEERLINGEN</div><div class="domein">' + esc(label(p)) + " · " + esc(p.jaar) + "</div><h1>" + esc(p.naam) + "</h1>" +
        coachInhoud[p.id] + (ctl ? "<h2>Antwoorden ‘Controleer je oplossing’</h2><table>" + ctl + "</table>" : "") + (les ? "<h2>Lesplanning</h2><table>" + les + "</table>" : "") + "</div>";
    };
    var lijstKnoppen = fiches.map(function (p) { return '<a class="chip" href="#coach" data-spring="cf-' + p.id + '">' + esc(p.naam.split(":")[0]) + "</a>"; }).join("");
    return kop0 + '<div class="wb-balk"><h2>Coachfiches</h2><button type="button" class="btn" id="druk">Alles afdrukken</button><button type="button" class="btn donker" id="coach-uit">Afsluiten</button></div>' +
      '<div class="vel wb-uitleg"><h2 class="banner">Voor de coaches</h2>' + (coachInhoud.algemeen || "") + '<div class="chips">' + lijstKnoppen + "</div></div>" +
      '<div class="wb-bladen">' + fiches.map(function (p) { return '<div id="cf-' + p.id + '" style="width:100%;display:flex;justify-content:center">' + blad(p) + "</div>"; }).join("") + "</div></div>";
  }
  function b64buf(s) { var b = atob(s), u = new Uint8Array(b.length); for (var i = 0; i < b.length; i++) u[i] = b.charCodeAt(i); return u; }
  function laadCoachData() {
    return new Promise(function (ok, nok) {
      if (CSF.coachData) return ok(CSF.coachData);
      var s = document.createElement("script"); s.src = "coach/coachfiches.js";
      s.onload = function () { CSF.coachData ? ok(CSF.coachData) : nok(new Error("leeg")); };
      s.onerror = function () { nok(new Error("ontbreekt")); };
      document.body.appendChild(s);
    });
  }
  function ontsleutel(code) {
    if (!window.crypto || !crypto.subtle) return Promise.reject(new Error("crypto"));
    return laadCoachData().then(function (d) {
      return crypto.subtle.importKey("raw", new TextEncoder().encode(code), "PBKDF2", false, ["deriveKey"]).then(function (basis) {
        return crypto.subtle.deriveKey({ name: "PBKDF2", salt: b64buf(d.salt), iterations: d.iter, hash: "SHA-256" }, basis, { name: "AES-GCM", length: 256 }, false, ["decrypt"]);
      }).then(function (k) { return crypto.subtle.decrypt({ name: "AES-GCM", iv: b64buf(d.iv) }, k, b64buf(d.data)); })
        .then(function (buf) { return JSON.parse(new TextDecoder().decode(buf)); });
    });
  }

  /* ---------- Venster: Wat wordt van mij verwacht? ---------- */
  function openVerwacht() {
    var m = document.createElement("div");
    m.className = "modal"; m.setAttribute("role", "dialog"); m.setAttribute("aria-modal", "true"); m.setAttribute("aria-labelledby", "verw-titel");
    m.innerHTML = '<div class="modal-doos"><div class="modal-kop"><h2 id="verw-titel">Wat wordt van mij verwacht?</h2><button type="button" class="btn donker" id="verw-sluit">Sluiten</button></div><div class="modal-inhoud">' +
      CSF.verwachtingen.map(function (v) { return '<div class="verw"><h3>' + esc(v.titel) + "</h3><ol>" + v.punten.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + "</ol></div>"; }).join("") + "</div></div>";
    document.body.appendChild(m);
    var sluit = function () { m.remove(); document.removeEventListener("keydown", esc2); };
    var esc2 = function (e) { if (e.key === "Escape") sluit(); };
    document.addEventListener("keydown", esc2);
    m.addEventListener("click", function (e) { if (e.target === m) sluit(); });
    m.querySelector("#verw-sluit").addEventListener("click", sluit);
    m.querySelector("#verw-sluit").focus();
  }

  /* ---------- Interactie na het tekenen ---------- */
  function koppel(view, p) {
    var app = document.getElementById("app");
    if (view === "oefen") {
      var form = document.getElementById("kiestest");
      if (form) form.addEventListener("change", function () {
        var score = {}, n = 0;
        form.querySelectorAll("input:checked").forEach(function (i) { score[i.value] = (score[i.value] || 0) + 1; n++; });
        var out = document.getElementById("advies"), tot = CSF.kiestest.length;
        if (n < tot) { out.textContent = "Nog " + (tot - n) + (tot - n > 1 ? " vragen" : " vraag") + " te gaan."; return; }
        var best = Object.keys(score).sort(function (a, b) { return score[b] - score[a]; });
        var top = best.filter(function (k) { return score[k] === score[best[0]]; }).map(function (k) { var q = zoek(k); return q ? q.naam.split(":")[0] : k; });
        out.textContent = top.length === 1 ? "Tip: bekijk eerst het project ‘" + top[0] + "’." : "Je twijfelt tussen " + top.join(" en ") + ". Lees de projectfiches en kies wat jou het meest uitdaagt.";
      });
    }
    if (view === "overzicht") {
      app.querySelectorAll("[data-fv]").forEach(function (b) { b.addEventListener("click", function () { store.set("csf-fv", b.dataset.fv); teken(); }); });
      app.querySelectorAll("[data-fj]").forEach(function (b) { b.addEventListener("click", function () { store.set("csf-fj", b.dataset.fj); teken(); }); });
    }
    if (view === "project") {
      document.getElementById("verwacht-knop").addEventListener("click", openVerwacht);
      app.querySelectorAll(".optie").forEach(function (o) { o.addEventListener("click", function () {
        var v = o.closest(".tvraag"); if (v.dataset.klaar) return; v.dataset.klaar = "1";
        var ok = o.dataset.ok === "1";
        v.querySelectorAll(".optie").forEach(function (x) { if (x.dataset.ok === "1") x.classList.add("juist"); });
        if (!ok) o.classList.add("fout");
        v.dataset.goed = ok ? "1" : "0";
        v.querySelector(".fb").textContent = (ok ? "Juist! " : "Niet helemaal. ") + v.dataset.uitleg;
        var t = v.closest(".test"), all = t.querySelectorAll(".tvraag").length, done = t.querySelectorAll(".tvraag[data-klaar]").length, goed = t.querySelectorAll('.tvraag[data-goed="1"]').length, rest = all - done;
        t.querySelector(".score").textContent = rest > 0 ? "Nog " + rest + (rest > 1 ? " vragen" : " vraag") + " te gaan." : "Score: " + goed + " van " + all + " juist." + (goed < all ? " Lees de leerkaart nog eens na." : " Je bent klaar om te starten.");
      }); });
      app.querySelectorAll(".check").forEach(function (c) {
        var inp = c.querySelector("input"), fb = c.querySelector(".fb"), pogingen = 0;
        function test() {
          var v = inp.value.trim(); if (!v) { fb.textContent = "Vul eerst een antwoord in."; return; }
          var ok = false, juist = "";
          if (c.dataset.n) { var wm = JSON.parse(c.dataset.n), g = parseFloat(v.replace(",", ".")); ok = !isNaN(g) && Math.abs(g - wm[0]) <= wm[1] + 1e-9; juist = String(wm[0]).replace(".", ","); }
          else { var a = JSON.parse(c.dataset.a); ok = a.some(function (x) { return norm(x) === norm(v); }); juist = a[0]; }
          pogingen++; c.classList.toggle("ok", ok);
          if (ok) { fb.textContent = "Juist! Goed gedaan."; return; }
          fb.textContent = "Nog niet. Tip: " + c.dataset.h.replace(/<[^>]+>/g, "") + " ";
          if (pogingen >= 3) { var b = document.createElement("button"); b.type = "button"; b.className = "toon"; b.textContent = "Toon het antwoord";
            b.addEventListener("click", function () { fb.textContent = "Antwoord: " + juist + ". Zoek in je werkbundel waar het misliep en noteer dat in je logboek."; }); fb.appendChild(b); }
        }
        c.querySelector(".cknop").addEventListener("click", test);
        inp.addEventListener("keydown", function (e) { if (e.key === "Enter") test(); });
      });
      var boxes = Array.prototype.slice.call(app.querySelectorAll(".klaar input"));
      var vg = function () { var n = boxes.filter(function (b) { return b.checked; }).length;
        app.querySelector(".balk span").style.width = (boxes.length ? 100 * n / boxes.length : 0) + "%";
        app.querySelector(".vtekst").textContent = n + " van " + boxes.length + " lesuren af"; };
      boxes.forEach(function (b) { b.checked = store.get(b.id) === "1"; b.addEventListener("change", function () { store.set(b.id, b.checked ? "1" : "0"); vg(); }); });
      vg();
    }
    if (view === "coach") {
      var form = document.getElementById("coach-form");
      if (form) form.addEventListener("submit", function (e) {
        e.preventDefault();
        var fb = document.getElementById("coach-fb"), code = document.getElementById("coach-code").value;
        fb.textContent = "Even geduld …";
        ontsleutel(code).then(function (inh) {
          coachInhoud = inh; try { sessionStorage.setItem("csf-coach", code); } catch (x) {}
          teken();
        }).catch(function (err) {
          fb.textContent = err.message === "ontbreekt" ? "De coachfiches staan nog niet op de site (map coach/)." : err.message === "crypto" ? "Deze browser kan de coachfiches niet openen. Gebruik een recente browser via https." : "Deze code klopt niet.";
        });
      });
      var uit = document.getElementById("coach-uit");
      if (uit) uit.addEventListener("click", function () { coachInhoud = null; try { sessionStorage.removeItem("csf-coach"); } catch (x) {} location.hash = "#start"; });
      var dr = document.getElementById("druk");
      if (dr) dr.addEventListener("click", function () { window.print(); });
      app.querySelectorAll("[data-spring]").forEach(function (a) { a.addEventListener("click", function (e) { e.preventDefault(); document.getElementById(a.dataset.spring).scrollIntoView({ behavior: "smooth" }); }); });
    }
    if (view === "werkbundel") {
      document.getElementById("druk").addEventListener("click", function () { window.print(); });
    }
  }

  /* ---------- Router ---------- */
  function teken() {
    var h = (location.hash || "#start").slice(1), app = document.getElementById("app"), p;
    if (h.indexOf("p-") === 0 && (p = zoek(h.slice(2)))) { app.innerHTML = vProject(p); koppel("project", p); document.title = p.naam + " · " + CSF.titel; }
    else if (h.indexOf("wb-") === 0 && (p = zoek(h.slice(3)))) { app.innerHTML = vWerkbundel(p); koppel("werkbundel", p); document.title = "Werkbundel · " + p.naam; }
    else if (h === "oefenproject") { app.innerHTML = vOefen(); koppel("oefen"); document.title = "Oefenproject · " + CSF.titel; }
    else if (h === "coach") {
      var bewaard = null; try { bewaard = sessionStorage.getItem("csf-coach"); } catch (x) {}
      if (!coachInhoud && bewaard) { ontsleutel(bewaard).then(function (inh) { coachInhoud = inh; teken(); }).catch(function () { try { sessionStorage.removeItem("csf-coach"); } catch (x) {} }); }
      app.innerHTML = vCoach(); koppel("coach"); document.title = "Coachfiches · " + CSF.titel;
    }
    else if (h === "overzicht") { app.innerHTML = vOverzicht(); koppel("overzicht"); document.title = "Projectenoverzicht · " + CSF.titel; }
    else { app.innerHTML = vStart(); document.title = CSF.titel + " " + CSF.school; }
  }
  function start() {
    teken();
    window.addEventListener("hashchange", function () { teken(); window.scrollTo(0, 0); });
  }

  /* ---------- Projectbestanden laden (in volgorde van projecten/lijst.js) ---------- */
  if (CSF.ingebouwd) { CSF.start = start; return; }  // gebundelde versie: projecten zitten al in de pagina
  var rest = (CSF.lijst || []).slice();
  (function volgende() {
    if (!rest.length) return start();
    var bestand = rest.shift(), s = document.createElement("script");
    s.src = bestand;
    s.onload = volgende;
    s.onerror = function () { console.warn("Kon projectbestand niet laden: " + bestand); volgende(); };
    document.body.appendChild(s);
  })();
})();
