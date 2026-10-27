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
    kader: function (titel, html) { return '<div class="kader"><div class="titel">' + titel + "</div>" + html + "</div>"; },
    // Een afbeelding uit de projectmap. Ontbreekt het bestand nog, dan verschijnt een kader "tekening volgt".
    beeld: function (bestand, uitleg, hoogte) {
      var hgt = hoogte || 220;
      return '<figure class="beeld" style="min-height:' + hgt + 'px"><img src="' + bestand + '" alt="' + (uitleg || "") + '" style="max-height:' + hgt + 'px" onerror="this.parentNode.classList.add(\'ontbreekt\');this.remove()">' +
        '<span class="volgt">Tekening volgt: ' + (uitleg || bestand) + "</span></figure>";
    }
  };

  /* Lesplanning met een vrij aantal lesuren. o.midden = [{ titel, werk }, …] */
  CSF.lessenN = function (o) {
    var logStart = "Vul het begin van je logboek in. Lees je notities van de vorige keer. Kies je eerste taak voor vandaag.";
    var eind = "Beoordeel je werk van vandaag. Vat je werk samen in 3 zinnen, voor een medeleerling of op papier. Vul je logboek in.";
    var out = [{ titel: o.t1, stappen: [
      ["5'", "Logboek", "Vul de opstart en het begin van je logboek in: voorziene tijd, motivatie en afgesproken evaluatie (laatste blad)."],
      ["10'", "Wat weet ik?", o.weet], ["5'", "Wat is de opdracht?", o.opdracht], ["10'", "Ideeën en het beste idee", o.ideeen],
      ["15'", "Uitwerking", o.start], ["5'", "Resultaat en logboek", "Kijk terug op dit lesuur. Noteer je geslaagde stappen en je problemen. Schat in je logboek de duur van je project."]] }];
    (o.midden || []).forEach(function (m) { out.push({ titel: m.titel, stappen: [["5'", "Logboek", logStart], ["35'", "Uitwerking", m.werk], ["10'", "Resultaat en logboek", eind]] }); });
    out.push({ titel: o.laatste.titel, stappen: [["5'", "Logboek", logStart], ["20'", "Uitwerking en resultaat", o.laatste.werk], ["10'", "Presenteren!", o.laatste.presenteer],
      ["15'", "Wat heb ik geleerd?", "Vul het evaluatierooster op het laatste blad in. Vul daarna in je logboek de evaluatie en de reflectie in."]] });
    return out;
  };

  /* Standaard lesplanning van 3 lesuren. Elk lesuur doorloopt de TASC-stappen. */
  CSF.lessen3 = function (o) {
    return CSF.lessenN({ t1: o.t1, weet: o.weet, opdracht: o.opdracht, ideeen: o.ideeen, start: o.start,
      midden: [{ titel: o.t2, werk: o.werk2 }], laatste: { titel: o.t3, werk: o.werk3, presenteer: o.presenteer } });
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
  /* Vaknamen: talen met een hoofdletter (Nederlands, Engels …), afkortingen zoals STEM blijven, alle andere vakken met een kleine letter. */
  var TALEN = ["nederlands", "engels", "frans", "duits", "spaans", "italiaans", "latijn", "grieks"];
  function vakNaam(s) {
    s = String(s || "").trim(); if (!s) return s;
    if (/[A-Z]/.test(s) && s === s.toUpperCase()) return s;
    var eerste = s.toLowerCase().split(/[\s·]/)[0];
    return TALEN.indexOf(eerste) >= 0 ? s.charAt(0).toUpperCase() + s.slice(1) : s.charAt(0).toLowerCase() + s.slice(1);
  }
  function label(p) { return vakNaam(p.soort === "vak" ? p.vak : p.domein); }
  function sterren(p) { var n = +p.sterren || 0; return n ? '<span class="sterren" aria-label="Uitdagingsniveau ' + n + ' op 5">' + "★".repeat(n) + '<span class="leeg-ster">' + "★".repeat(5 - n) + "</span></span>" : ""; }
  function isFiche(p) { return p.status === "fiche" || !(p.werkbundel && p.werkbundel.length); }
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
    }).join("") + '<li class="split">Doorloop deze stappen elk lesuur opnieuw. Start met je voorkennis en je plan voor vandaag. Eindig met je resultaat, een korte samenvatting en je leerpunten. Vul bij het begin en op het einde van elk lesuur je logboek in via ‘Mijn logboek’.</li></ol></div>';
  }
  function kaart(p) {
    var delen = p.naam.split(":"), naam = delen[0], sub = delen.slice(1).join(":").trim();
    return '<a class="kies" href="#p-' + p.id + '" style="--h:var(' + kleur(p) + ')"><span class="dom">' + esc(label(p)) + '</span><span class="pn">' + esc(naam) +
      '</span><span class="pk">' + esc(sub) + "</span>" + (p.kort ? '<span class="pp">' + p.kort + "</span>" : "") + (p.voorWie ? '<span class="pw">' + p.voorWie + "</span>" : "") +
      '<span class="pj">' + sterren(p) + "<span>" + esc(p.tijd) + "</span>" + (isFiche(p) ? '<span class="status">werkbundel volgt</span>' : "") + "</span></a>";
  }

  /* ---------- Wat wordt van mij verwacht? (één keer, op de startpagina) ---------- */
  function verwachtBlok() {
    return '<div class="vel" id="verwacht"><h2 class="banner">Wat wordt van mij verwacht?</h2><p class="hint">Deze afspraken gelden voor elk CSF-project.</p><div class="verwachtingen">' +
      (CSF.verwachtingen || []).map(function (v) { return '<div class="verw"><h3>' + esc(v.titel) + "</h3><ol>" + v.punten.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + "</ol></div>"; }).join("") + "</div></div>";
  }

  /* ---------- Leerkaarten: eerst lezen, dan pas de werkbundel ---------- */
  function gelezen(p) { try { return JSON.parse(store.get("lk-" + p.id) || "[]"); } catch (e) { return []; } }
  function magAfdrukken(p) {
    var n = (p.leerkaarten || []).length, g = gelezen(p);
    if (!n) return true;
    if (CSF.portaal && CSF.portaal.isCoach && CSF.portaal.isCoach()) return true;
    try { if (sessionStorage.getItem("csf-coach")) return true; } catch (e) {}
    for (var i = 0; i < n; i++) if (g.indexOf(i) < 0) return false;
    return true;
  }

  /* ---------- Weergaven ---------- */
  function vStart() {
    var oef = oefen();
    return '<div class="wrap">' + kop() + kruimel([["Start"]]) +
      '<div class="vel"><h2 class="banner">Welkom</h2><p>' + esc(CSF.welkom) + '</p><div class="poort">' +
      '<a class="deur" href="#oefenproject"><span class="dt">Oefenproject</span><span class="wie">1e jaar · stap 1</span><span class="dd">Kies één van de korte oefenprojecten (3 lesuren). Leer zo de aanpak van een CSF-project.</span><span class="doms">' +
      oef.map(function (p) { return '<span style="--h:var(' + kleur(p) + ')">' + esc(label(p)) + "</span>"; }).join("") + '</span><span class="pijl">Naar de oefenprojecten →</span></a>' +
      '<a class="deur" href="#overzicht"><span class="dt">Projectenoverzicht</span><span class="wie">1e en 2e jaar · stap 2</span><span class="dd">Alle CSF-projecten van de werkgroep, per vak. Elk project heeft dezelfde opbouw: projectfiche, lesplanning en werkbundel.</span><span class="pijl">Naar het overzicht →</span></a>' +
      "</div>" + (CSF.portaal && CSF.portaal.actief ? '<p class="lb-start"><a class="btn" href="#logboek">Mijn logboek</a> <span class="hint">Meld je aan met je schoolaccount. Vul je logboek in bij het begin en op het einde van elk lesuur.</span></p>' : "") +
      "</div>" + verwachtBlok() + tascBlok("Elk project volgt de acht TASC-stappen") + footer() + "</div>";
  }

  function vOefen() {
    var kt = (CSF.kiestest || []).map(function (v, i) {
      return '<fieldset class="vraag"><legend>' + esc(v[0]) + "</legend>" + v[1].map(function (o, j) {
        return '<label for="q' + i + "-" + j + '"><input type="radio" name="q' + i + '" value="' + o[1] + '" id="q' + i + "-" + j + '"> ' + esc(o[0]) + "</label>";
      }).join("") + "</fieldset>";
    }).join("");
    return '<div class="wrap">' + kop() + kruimel([["Start", "#start"], ["Oefenproject"]]) +
      '<div class="vel"><h2 class="banner">Oefenproject · 1e jaar</h2>' +
      '<p><span class="kw">Kies één oefenproject.</span> Elk project duurt 3 lesuren van 50 minuten. Lees de opdracht hier op het scherm. Werk op papier in je werkbundel. Druk je werkbundel af met de knop bij je project.</p>' +
      '<p>Kies in lesuur 1 je eigen <span class="kw">invalshoek</span>: jouw draai aan het project, zonder extra werk.</p>' +
      '<div class="ritme"><div><b>Start van elk lesuur</b><span>Vul het begin van je logboek in. Noteer je voorkennis en je plan voor vandaag.</span></div><div><b>Tijdens het lesuur</b><span>Volg het stappenplan bovenaan het lesuur in je werkbundel.</span></div><div><b>Einde van elk lesuur</b><span>Beoordeel je werk. Vertel kort over je werk. Noteer je leerpunten. Vul je logboek in.</span></div></div></div>' +
      '<div class="vel"><h2 class="banner">Kies je oefenproject</h2><div class="kiezen">' + oefen().map(kaart).join("") + "</div>" +
      (kt ? '<details class="inklap" style="margin-top:14px"><summary>Twijfel je? Doe de kiestest</summary><form id="kiestest">' + kt + '<div id="advies" aria-live="polite"></div></form></details>' : "") +
      "</div>" + footer() + "</div>";
  }

  function vOverzicht() {
    var vk = vakken(), lijstVakken = [], jaren = ["1e", "2e"];
    vk.forEach(function (p) { p.vak = vakNaam(p.vak); if (lijstVakken.indexOf(p.vak) < 0) lijstVakken.push(p.vak); });
    lijstVakken.sort(function (a, b) { return a.localeCompare(b, "nl"); });
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

  function vFiche(p) {
    var terug = p.soort === "vak" ? ["Projectenoverzicht", "#overzicht"] : ["Oefenproject", "#oefenproject"];
    return '<div class="wrap">' + kop() + kruimel([["Start", "#start"], terug, [label(p)]]) +
      '<section class="vel" style="--hc:var(' + kleur(p) + ')"><h2 class="banner groot">' + esc(p.naam) + "</h2>" +
      '<div class="tags"><span class="tag dom">' + esc(label(p)) + '</span><span class="tag">' + esc(p.jaar) + '</span><span class="tag">' + esc(p.tijd) + "</span>" + (p.sterren ? '<span class="tag">Uitdaging ' + sterren(p) + "</span>" : "") + "</div>" +
      (p.kort ? '<p class="lead">' + p.kort + "</p>" : "") +
      '<div class="kiesuit"><div><b>Inhoud</b><span>' + (p.kort || "–") + "</span></div><div><b>Uitdagingsniveau</b><span>" + (sterren(p) || "–") + "</span></div><div><b>Voorziene tijd</b><span>" + esc(p.tijd) + "</span></div></div>" +
      '<div class="blok"><h3 class="banner">Over dit project</h3>' + (p.voorWie ? '<p><span class="kw">Voor wie?</span> ' + p.voorWie + "</p>" : "") + "<p>" + (p.omschrijving || "") + "</p></div>" +
      '<div class="leeg"><b>De werkbundel van dit project volgt nog.</b><span>Wil je dit project kiezen? Bespreek het met je CSF-coach. Je coach bezorgt je het materiaal.</span></div>' +
      '<p style="margin-top:22px"><a href="' + terug[1] + '">← ' + terug[0] + "</a></p></section>" + footer() + "</div>";
  }

  function vProject(p) {
    if (isFiche(p)) return vFiche(p);
    var terug = p.soort === "vak" ? ["Projectenoverzicht", "#overzicht"] : ["Oefenproject", "#oefenproject"];
    var test = (p.test || []).map(function (q, i) {
      return '<div class="tvraag" data-uitleg="' + esc(q[3]) + '"><p class="tq"><span class="tn">Vraag ' + (i + 1) + " van " + p.test.length + "</span>" + q[0] + '</p><div class="opties">' +
        q[1].map(function (o, j) { return '<button type="button" class="optie" data-ok="' + (j === q[2] ? 1 : 0) + '">' + o + "</button>"; }).join("") + '</div><p class="fb" aria-live="polite"></p></div>';
    }).join("");
    /* quizzen per fragment (bv. luisterquiz per filmclip) */
    var quizzen = (p.quizzen || []).map(function (qz) {
      return '<details class="kaart quiz"><summary>' + esc(qz.titel) + '</summary>' + (qz.link ? '<p><a href="' + esc(qz.link) + '" target="_blank" rel="noopener">Bekijk het fragment ↗</a></p>' : "") + '<div class="test" data-soort="quiz">' +
        qz.vragen.map(function (q, i) {
          return '<div class="tvraag" data-uitleg="' + esc(q[3] || "") + '"><p class="tq"><span class="tn">Vraag ' + (i + 1) + " van " + qz.vragen.length + "</span>" + q[0] + '</p><div class="opties">' +
            q[1].map(function (o, j) { return '<button type="button" class="optie" data-ok="' + (j === q[2] ? 1 : 0) + '">' + o + "</button>"; }).join("") + '</div><p class="fb" aria-live="polite"></p></div>';
        }).join("") + '<p class="score" aria-live="polite"></p></div></details>';
    }).join("");
    var controle = (p.controle || []).map(function (c, i) {
      var data = c[1] === "getal" ? 'data-n="' + esc(JSON.stringify(c[2])) + '"' : 'data-a="' + esc(JSON.stringify(c[2])) + '"';
      return '<div class="check" ' + data + ' data-h="' + esc(c[3]) + '"><label for="c-' + i + '">' + c[0] + '</label><div class="crij"><input type="text" id="c-' + i +
        '" autocomplete="off" spellcheck="false"><button type="button" class="btn licht cknop">Controleer</button></div><p class="fb" aria-live="polite"></p></div>';
    }).join("");
    var inv = p.invalshoek ? '<div class="blok"><h3 class="banner">Kies je invalshoek</h3><p class="hint">' + p.invalshoek.intro + ' Je invalshoek is geen extra werk. Het is jouw eigen draai aan het project. Noteer je keuze in je logboek bij motivatie.</p><div class="invs">' +
      p.invalshoek.keuzes.map(function (k) { return '<div class="inv"><b>' + k[0] + "</b><span>" + k[1] + "</span></div>"; }).join("") + "</div>" +
      (p.nogTijd ? '<h4 class="sub">Klaar en nog tijd over?</h4><p>' + p.nogTijd + "</p>" : "") + "</div>" : "";
    var lessen = (p.lessen || []).map(function (l, i) {
      var id = "klaar-" + p.id + "-" + (i + 1);
      return '<div class="les" data-les="' + (i + 1) + '"><h4><span class="lesnr">Lesuur ' + (i + 1) + "</span>" + l.titel + '</h4><ol class="stappen">' + l.stappen.map(function (s) {
        return '<li class="' + (s[1].indexOf("Logboek") >= 0 ? "lb" : "") + '"><span class="t">' + s[0] + '</span><span class="s">' + s[1] + '</span><span class="w">' + s[2] + "</span></li>";
      }).join("") + '</ol><label class="klaar" for="' + id + '"><input type="checkbox" id="' + id + '" data-p="' + p.id + '"> Dit lesuur is af</label></div>';
    }).join("");
    var links = (p.links || []).map(function (l) { return '<a class="btn licht" href="' + esc(l[1]) + '" target="_blank" rel="noopener">' + esc(l[0]) + " ↗</a>"; }).join("");
    var lk = p.leerkaarten || [], g = gelezen(p), nGel = lk.filter(function (_, i) { return g.indexOf(i) >= 0; }).length, open = magAfdrukken(p);
    var kaarten = lk.map(function (k, i) {
      var ok = g.indexOf(i) >= 0;
      return '<details class="kaart lk' + (ok ? " gelezen" : "") + '" data-i="' + i + '"><summary><span class="lk-vink" aria-hidden="true">' + (ok ? "✓" : (i + 1)) + "</span>" + k[0] + "</summary><p>" + k[1] + '</p><p class="lk-knop">' +
        (ok ? '<span class="hint">✓ Gelezen</span>' : '<button type="button" class="btn licht lb-klein" data-lees="' + i + '">Ik heb deze leerkaart gelezen</button>') + "</p></details>";
    }).join("");
    var tabs = [["start", "1. Start: leerkaarten"], ["fiche", "Projectfiche"], ["leidraad", "Leidraad per lesuur"]]
      .concat(quizzen || controle ? [["controle", "Controleer je oplossing"]] : []).concat([["evaluatie", "Evaluatie"], ["werkbundel", (open ? "🖨 " : "🔒 ") + "Werkbundel"]]);
    var actief = "start"; try { actief = sessionStorage.getItem("tab-" + p.id) || "start"; } catch (e) {}
    if (!tabs.some(function (t) { return t[0] === actief; })) actief = "start";
    var paneel = function (id, inhoud) { return '<div class="tabpaneel" id="tp-' + id + '" role="tabpanel"' + (actief === id ? "" : " hidden") + ">" + inhoud + "</div>"; };
    return '<div class="wrap">' + kop() + kruimel([["Start", "#start"], terug, [label(p)]]) +
      '<section class="vel" style="--hc:var(' + kleur(p) + ')"><h2 class="banner groot">' + esc(p.naam) + "</h2>" +
      '<div class="tags"><span class="tag dom">' + esc(label(p)) + '</span><span class="tag">' + esc(p.jaar) + '</span><span class="tag">' + esc(p.tijd) + "</span>" + (p.sterren ? '<span class="tag">Uitdaging ' + sterren(p) + "</span>" : "") + '<span class="tag">uitwerking op papier</span></div>' +
      '<p class="lead">' + p.kort + "</p>" + (p.voorWie ? '<p class="hint" style="margin-top:6px"><span class="kw">Voor wie?</span> ' + p.voorWie + "</p>" : "") +
      '<div id="logboek-blok"></div>' +
      '<div class="ptabs" role="tablist">' + tabs.map(function (t) { return '<button type="button" class="ptab' + (t[0] === "werkbundel" && !open ? " slot" : "") + '" role="tab" data-tab="' + t[0] + '" aria-selected="' + (actief === t[0]) + '">' + t[1] + "</button>"; }).join("") + "</div>" +
      paneel("start", '<div class="blok"><h3 class="banner">Start hier: lees de leerkaarten</h3><p>De leerkaarten geven je de nieuwe leerstof die je nodig hebt voor dit project. Open elke leerkaart. Lees ze aandachtig. Klik daarna op <b>‘Ik heb deze leerkaart gelezen’</b>. Pas als je alle leerkaarten gelezen hebt, kan je de werkbundel afdrukken.</p>' +
        '<div class="lk-stand' + (open ? " klaar" : "") + '" aria-live="polite"><div class="balk"><span style="width:' + (lk.length ? 100 * nGel / lk.length : 100) + '%"></span></div><span>' + (lk.length ? nGel + " van " + lk.length + " leerkaarten gelezen" : "Dit project heeft geen leerkaarten.") + (open ? ' · <a href="#wb-' + p.id + '">Naar de werkbundel →</a>' : "") + "</span></div>" + kaarten + "</div>" +
        (test ? '<div class="blok"><h3 class="banner">Test jezelf</h3><p class="hint">Begrijp je de leerkaarten? Test het hier.</p><div class="test">' + test + '<p class="score" aria-live="polite"></p></div></div>' : "") +
        (links ? '<div class="blok"><h3 class="banner">Handige links</h3><div class="acties">' + links + "</div></div>" : "")) +
      paneel("fiche", '<div class="blok"><h3 class="banner">Projectfiche</h3><dl>' +
        "<dt>Omschrijving project</dt><dd>" + p.omschrijving + "</dd><dt>Doel van het project</dt><dd>" + p.doel + "</dd>" +
        "<dt>Bereikte vaardigheden</dt><dd>" + lijst(p.bereikt) + "</dd><dt>Vaardigheden die ik moet toepassen</dt><dd>" + lijst(p.toepassen) + "</dd>" +
        "<dt>Materiële benodigdheden</dt><dd>" + lijst(p.materiaal) + "</dd><dt>Waar kan ik de oplossing vinden?</dt><dd>" + p.oplossing + "</dd><dt>Voorziene tijd</dt><dd>" + esc(p.tijd) + "</dd><dt>Eindproduct</dt><dd>" + p.product + "</dd></dl></div>") +
      paneel("leidraad", inv + '<div class="blok"><h3 class="banner">Leidraad per lesuur</h3><p class="hint">Dit is een leidraad, geen strak schema. Doorloop elk lesuur de TASC-stappen. Bovenaan elk lesuur in je werkbundel staat hetzelfde stappenplan. Gele regels zijn logboekmomenten: vul dan je logboek in via ‘Mijn logboek’.</p>' +
        '<div class="voortgang" aria-live="polite"><div class="balk"><span></span></div><span class="vtekst"></span></div><div class="lessen">' + lessen + "</div></div>") +
      (quizzen || controle ? paneel("controle", (quizzen ? '<div class="blok"><h3 class="banner">' + esc(p.quizTitel || "Quiz per fragment") + '</h3><p class="hint">' + (p.quizUitleg || "Bekijk het fragment. Beantwoord daarna de vragen. Je ziet meteen of je antwoord juist is.") + "</p>" + quizzen + "</div>" : "") +
        (controle ? '<div class="blok"><h3 class="banner">Controleer je oplossing</h3><p class="hint">Schrijf je antwoord eerst in je werkbundel. Tik het daarna hier in. Na 3 pogingen kan je het antwoord bekijken.</p>' + controle + "</div>" : "")) : "") +
      paneel("evaluatie", '<div class="blok"><h3 class="banner">Afgesproken evaluatie</h3><p class="hint">Noteer deze criteria in lesuur 1 in je logboek bij ‘afgesproken evaluatie’. Je coach beoordeelt je project met deze criteria.</p>' + lijst(p.criteria) + "</div>") +
      paneel("werkbundel", '<div class="blok"><h3 class="banner">Werkbundel</h3>' + (open
        ? '<p>Je las alle leerkaarten. Bekijk de werkbundel en druk hem af op A4.</p><p><a class="btn" href="#wb-' + p.id + '">🖨 Bekijk en druk de werkbundel af</a></p>'
        : '<div class="lb-melding oranje">🔒 <b>Lees eerst alle leerkaarten.</b> Je las er ' + nGel + " van " + lk.length + '. Ga naar het tabblad <a href="#" data-naartab="start">1. Start: leerkaarten</a>.</div>') + "</div>") +
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
      f("Waar kan ik de oplossing vinden?", p.oplossing) + f("Voorziene tijd", esc(p.tijd)) + (p.sterren ? f("Uitdagingsniveau", "★".repeat(p.sterren) + "☆".repeat(5 - p.sterren)) : "") + (p.voorWie ? f("Voor wie?", p.voorWie) : "") + f("Eindproduct", p.product) + "</table>" +
      (p.invalshoek ? "<h2>Kies je invalshoek</h2><p>" + p.invalshoek.intro + " Kruis aan en noteer je keuze in je logboek bij motivatie.</p><table>" +
        p.invalshoek.keuzes.map(function (k) { return '<tr><td style="width:7%;text-align:center;font-size:13pt">&#9744;</td><td style="width:24%"><b>' + k[0] + "</b></td><td>" + k[1] + "</td></tr>"; }).join("") + "</table>" : ""));
    var gezien = {};
    (p.werkbundel || []).forEach(function (b) {
      var s = hoofding(p, b.les ? "Lesuur " + b.les : (b.titel || ""));
      if (b.les && !gezien[b.les]) { gezien[b.les] = 1; s += stappenplan(p, b.les); }
      out.push(s + b.html);
    });
    out.push(hoofding(p, "Evaluatie") + "<h2>Afgesproken evaluatie</h2><p>Noteer deze criteria in lesuur 1 in je logboek bij ‘afgesproken evaluatie’. Kruis in de laatste les zelf je niveau aan met potlood. Je coach kijkt het daarna na.</p>" +
      '<table><tr><th>Criterium</th><th style="width:13%">Nog niet</th><th style="width:13%">Op weg</th><th style="width:13%">Gelukt</th><th style="width:13%">Uitblinker</th></tr>' +
      (p.criteria || []).map(function (c) { return "<tr><td>" + c + "</td><td></td><td></td><td></td><td></td></tr>"; }).join("") + "</table>" +
      "<p><b>Wat wil ik zelf zeker bereiken in dit project?</b></p>" + CSF.h.lijnen(2) +
      (p.nogTijd ? '<div class="uitdaging"><b>Klaar en nog tijd over?</b> ' + p.nogTijd + "</div>" : ""));
    return out;
  }
  function vWerkbundel(p) {
    return '<div class="wrap afdruk">' + kop() + kruimel([["Start", "#start"], [label(p), "#p-" + p.id], ["Werkbundel"]]) +
      '<div class="wb-balk"><h2>Werkbundel · ' + esc(p.naam) + '</h2><button type="button" class="btn" id="druk">Afdrukken</button><a class="btn donker" href="#p-' + p.id + '">Terug naar het project</a></div>' +
      '<p class="wb-uitleg hint">Klik op <b>Afdrukken</b>. Kies A4. Zet ‘Achtergrondafbeeldingen’ of ‘Achtergrondkleuren’ aan voor de kleuren. Kies eventueel ‘Opslaan als PDF’.</p>' +
      '<div class="wb-bladen">' + bladen(p).map(function (b) { return '<div class="blad">' + b + "</div>"; }).join("") + "</div></div>";
  }

  function footer() {
    return '<footer>Je werkt zelfstandig. Alles staat in je werkbundel en op deze site. Controleer je antwoorden bij ‘Controleer je oplossing’ in elk project.' +
      '<span class="voor-coach">' + (CSF.portaal && CSF.portaal.actief ? '<a class="btn licht" href="#logboek">Mijn logboek</a> <a class="btn donker" href="#dashboard">Dashboard coaches</a> ' : "") +
      '<a class="btn donker" href="#coach">Coachfiches (enkel voor coaches)</a></span></footer>';
  }

  /* ---------- Coachfiches: versleuteld, enkel te openen met de coachcode ---------- */
  var coachInhoud = null;
  function vCoach() {
    var kop0 = '<div class="wrap afdruk">' + kop() + kruimel([["Start", "#start"], ["Coachfiches"]]);
    if (!coachInhoud && CSF.portaal && CSF.portaal.actief) {
      return kop0 + '<div class="vel"><h2 class="banner">Coachfiches</h2><p>Deze pagina is enkel voor de CSF-coaches. Meld je aan met je schoolaccount.</p><div id="coach-poort"><p class="hint">Even geduld …</p></div></div>' + footer() + "</div>";
    }
    if (!coachInhoud) {
      return kop0 + '<div class="vel"><h2 class="banner">Coachfiches</h2><p>Deze pagina is enkel voor de CSF-coaches. Typ de coachcode. Zo open je de coachfiches met voorbereiding, oplossingen en begeleidingstips.</p>' +
        '<form id="coach-form" class="crij" style="max-width:520px"><label for="coach-code" class="hint" style="flex-basis:100%;margin:0">Coachcode</label><input type="password" id="coach-code" autocomplete="off" required>' +
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

  if (CSF.portaal) CSF.portaal.testCode = function (c) { return ontsleutel(c).then(function () { return true; }, function () { return false; }); };

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
        out.textContent = top.length === 1 ? "Tip: bekijk eerst het project ‘" + top[0] + "’." : "Je twijfelt tussen " + top.join(" en ") + ". Lees de projectfiches. Kies het meest uitdagende project voor jou.";
      });
    }
    if (view === "overzicht") {
      app.querySelectorAll("[data-fv]").forEach(function (b) { b.addEventListener("click", function () { store.set("csf-fv", b.dataset.fv); teken(); }); });
      app.querySelectorAll("[data-fj]").forEach(function (b) { b.addEventListener("click", function () { store.set("csf-fj", b.dataset.fj); teken(); }); });
    }
    if (view === "project") {
      if (CSF.portaal && CSF.portaal.project) CSF.portaal.project(p, app);
      var tabKies = function (id) {
        app.querySelectorAll(".ptab").forEach(function (b) { b.setAttribute("aria-selected", String(b.dataset.tab === id)); });
        app.querySelectorAll(".tabpaneel").forEach(function (x) { x.hidden = x.id !== "tp-" + id; });
        try { sessionStorage.setItem("tab-" + p.id, id); } catch (e) {}
      };
      app.querySelectorAll(".ptab").forEach(function (b) { b.addEventListener("click", function () { tabKies(b.dataset.tab); }); });
      app.querySelectorAll("[data-naartab]").forEach(function (a) { a.addEventListener("click", function (e) { e.preventDefault(); tabKies(a.dataset.naartab); }); });
      app.querySelectorAll("[data-lees]").forEach(function (b) { b.addEventListener("click", function () {
        var g = gelezen(p), i = Number(b.dataset.lees); if (g.indexOf(i) < 0) g.push(i);
        store.set("lk-" + p.id, JSON.stringify(g));
        var y = window.scrollY; teken(); window.scrollTo(0, y);
        var vlg = app.querySelector('details.lk:not(.gelezen)'); if (vlg) vlg.open = true;
      }); });
      app.querySelectorAll(".optie").forEach(function (o) { o.addEventListener("click", function () {
        var v = o.closest(".tvraag"); if (v.dataset.klaar) return; v.dataset.klaar = "1";
        var ok = o.dataset.ok === "1";
        v.querySelectorAll(".optie").forEach(function (x) { if (x.dataset.ok === "1") x.classList.add("juist"); });
        if (!ok) o.classList.add("fout");
        v.dataset.goed = ok ? "1" : "0";
        v.querySelector(".fb").textContent = (ok ? "Juist! " : "Niet helemaal. ") + (v.dataset.uitleg || "");
        var t = v.closest(".test"), all = t.querySelectorAll(".tvraag").length, done = t.querySelectorAll(".tvraag[data-klaar]").length, goed = t.querySelectorAll('.tvraag[data-goed="1"]').length, rest = all - done;
        t.querySelector(".score").textContent = rest > 0 ? "Nog " + rest + (rest > 1 ? " vragen" : " vraag") + " te gaan." : "Score: " + goed + " van " + all + " juist." + (t.dataset.soort === "quiz" ? " Noteer je score op je luisterblad." : goed < all ? " Lees de leerkaart nog eens na." : " Je bent klaar om te starten.");
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
            b.addEventListener("click", function () { fb.textContent = "Antwoord: " + juist + ". Zoek de fout in je werkbundel. Noteer die fout in je logboek."; }); fb.appendChild(b); }
        }
        c.querySelector(".cknop").addEventListener("click", test);
        inp.addEventListener("keydown", function (e) { if (e.key === "Enter") test(); });
      });
      if (!app.querySelector(".balk")) return;
      var boxes = Array.prototype.slice.call(app.querySelectorAll(".klaar input"));
      var vg = function () { var n = boxes.filter(function (b) { return b.checked; }).length;
        app.querySelector(".balk span").style.width = (boxes.length ? 100 * n / boxes.length : 0) + "%";
        app.querySelector(".vtekst").textContent = n + " van " + boxes.length + " lesuren af"; };
      boxes.forEach(function (b) { b.checked = store.get(b.id) === "1"; b.addEventListener("change", function () { store.set(b.id, b.checked ? "1" : "0"); vg(); }); });
      vg();
    }
    if (view === "coach") {
      var poort = document.getElementById("coach-poort");
      if (poort) CSF.portaal.coachfiches(poort, function (code) {
        return ontsleutel(code).then(function (inh) { coachInhoud = inh; teken(); });
      });
      var form = document.getElementById("coach-form");
      if (form) form.addEventListener("submit", function (e) {
        e.preventDefault();
        var fb = document.getElementById("coach-fb"), code = document.getElementById("coach-code").value.trim();
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

  /* ---------- Hulpstukken voor het portaal (assets/portaal.js) ---------- */
  CSF.ui = { kop: kop, kruimel: kruimel, footer: footer, esc: esc, label: label, zoek: zoek, isFiche: isFiche, herteken: function () { teken(); } };

  /* ---------- Router ---------- */
  function teken() {
    var h = (location.hash || "#start").slice(1), app = document.getElementById("app"), p;
    if (h.indexOf("p-") === 0 && (p = zoek(h.slice(2)))) { app.innerHTML = vProject(p); koppel("project", p); document.title = p.naam + " · " + CSF.titel; }
    else if (h.indexOf("wb-") === 0 && (p = zoek(h.slice(3))) && isFiche(p)) { location.replace("#p-" + p.id); return; }
    else if (h.indexOf("wb-") === 0 && (p = zoek(h.slice(3))) && !magAfdrukken(p)) { try { sessionStorage.setItem("tab-" + p.id, "werkbundel"); } catch (e) {} location.replace("#p-" + p.id); return; }
    else if (h.indexOf("wb-") === 0 && (p = zoek(h.slice(3)))) { app.innerHTML = vWerkbundel(p); koppel("werkbundel", p); document.title = "Werkbundel · " + p.naam; }
    else if (h === "oefenproject") { app.innerHTML = vOefen(); koppel("oefen"); document.title = "Oefenproject · " + CSF.titel; }
    else if (h === "coach") {
      var bewaard = null; try { bewaard = sessionStorage.getItem("csf-coach"); } catch (x) {}
      if (!coachInhoud && bewaard) { ontsleutel(bewaard).then(function (inh) { coachInhoud = inh; teken(); }).catch(function () { try { sessionStorage.removeItem("csf-coach"); } catch (x) {} }); }
      app.innerHTML = vCoach(); koppel("coach"); document.title = "Coachfiches · " + CSF.titel;
    }
    else if (h === "overzicht") { app.innerHTML = vOverzicht(); koppel("overzicht"); document.title = "Projectenoverzicht · " + CSF.titel; }
    else if (CSF.portaal && CSF.portaal.route && CSF.portaal.route(h, app)) { /* logboek of dashboard */ }
    else { app.innerHTML = vStart(); document.title = CSF.titel + " " + CSF.school; }
  }
  function start() {
    CSF.gestart = true;
    if (CSF.portaal && CSF.portaal.pasToe) CSF.portaal.pasToe();   // aanpassingen van coaches (sterren, tijd, inleiding)
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
