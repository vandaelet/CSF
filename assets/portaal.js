/* =====================================================================
   CSF-PORTAAL: aanmelden met het schoolaccount, digitaal logboek en coachdashboard.
   Werkt enkel als portaal-config.js een Firebase-koppeling bevat.
   - #logboek               overzicht van mijn projecten (leerling)
   - #logboek-<project-id>  logboek van één project: opstart, begin en einde per lesuur, evaluatie en reflectie
   - #dashboard             coaches: overzicht, leerlingen, feedback, export · beheerder: coaches en coachcode
   Gegevens (Firestore): leerlingen/<e-mail>, coaches/<e-mail>, beheerders/<e-mail>,
   logboeken/<e-mail>__<project-id>, feedback/<id>, instellingen/coachfiches.
   ===================================================================== */
(function () {
  "use strict";
  var P = CSF.portaal = { actief: !!CSF.firebaseConfig };
  var DOMEIN = CSF.domein || "svsl.be", V = "10.12.2";
  var A, F, auth, db, gereed = null, gebruiker = null;
  var rol = { beheerder: false, coach: false, leerling: null, vak: [], fout: null };

  var TASC1 = ["Wat weet ik van dit onderwerp?", "Wat is de opdracht?", "Hoeveel ideeën kan ik bedenken?", "Wat is het beste idee?"];
  var TASC2 = ["Uitwerking", "Wat vind ik van het resultaat?", "Presenteren!", "Wat heb ik geleerd?"];
  var DAGEN = ["MA", "DI", "WOE", "DO", "VRIJ"], LESUREN = ["1", "2", "3", "4", "5", "6", "7", "8"];
  var TIJD = ["genoeg tijd", "te veel tijd", "te weinig tijd"];
  var EF = ["Ik schat mijn tijd goed in.", "Ik deel mijn tijd goed in.", "Ik start mijn taak zoals gepland.", "Ik pas me aan veranderingen aan.",
    "Ik was geconcentreerd.", "Ik denk na voordat ik iets zeg of doe.", "Ik hou mijn emoties onder controle.", "Ik zet info in mijn geheugen vast en gebruik die info.",
    "Ik werk door tot mijn taak af is.", "Ik volg mijn planning.", "Ik werk geordend en ruim op.", "Ik denk na over mijn aanpak."];

  /* ---------- kleine hulpjes ---------- */
  function esc(s) { return String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"); }
  function mail() { return gebruiker ? gebruiker.email.toLowerCase() : ""; }
  function nu() { return new Date().toISOString(); }
  function vandaag() { var d = new Date(); return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0"); }
  function datum(s) { if (!s) return "–"; var d = new Date(s.length === 10 ? s + "T12:00:00" : s); return isNaN(d) ? s : d.toLocaleDateString("nl-BE", { day: "numeric", month: "short", year: "numeric" }); }
  function nieuwId() { return Date.now().toString(36) + Math.random().toString(36).slice(2, 8); }
  function ref(pad) { return F.doc.apply(null, [db].concat(pad.split("/"))); }
  function haal(pad) { return F.getDoc(ref(pad)); }
  function lijst(col) { var w = [].slice.call(arguments, 1).map(function (x) { return F.where(x[0], x[1], x[2]); });
    return F.getDocs(F.query.apply(null, [F.collection(db, col)].concat(w))).then(function (s) { return s.docs.map(function (d) { var o = d.data(); o._id = d.id; return o; }); }); }
  function herteken() { if (CSF.ui) CSF.ui.herteken(); }
  function project(pid) { return CSF.ui.zoek(pid); }
  function lid(id) { return id.split("__"); }

  /* ---------- Firebase laden en de rol bepalen ---------- */
  function laad() {
    if (gereed) return gereed;
    var u = "https://www.gstatic.com/firebasejs/" + V + "/firebase-";
    gereed = Promise.all([import(u + "app.js"), import(u + "auth.js"), import(u + "firestore.js")]).then(function (m) {
      A = m[1]; F = m[2];
      var app = m[0].initializeApp(CSF.firebaseConfig);
      auth = A.getAuth(app); db = F.getFirestore(app);
      return new Promise(function (ok) {
        var eerste = true;
        A.onAuthStateChanged(auth, function (u) {
          bepaalRol(u).then(function () { if (eerste) { eerste = false; ok(); } else herteken(); });
        });
      });
    });
    return gereed;
  }
  function bepaalRol(u) {
    gebruiker = u && u.email ? u : null;
    rol = { beheerder: false, coach: false, coachNaam: "", leerling: null, vak: [], fout: null };
    if (!gebruiker) return Promise.resolve();
    var m = mail();
    if (m.slice(-(DOMEIN.length + 1)) !== "@" + DOMEIN) { rol.fout = "domein"; return Promise.resolve(); }
    var veilig = function (p) { return p.catch(function () { return null; }); };
    return Promise.all([veilig(haal("beheerders/" + m)), veilig(haal("coaches/" + m)), veilig(haal("leerlingen/" + m)),
      veilig(lijst("leerlingen", ["vakleerkrachten", "array-contains", m]))]).then(function (r) {
      rol.beheerder = !!(r[0] && r[0].exists());
      rol.coach = rol.beheerder || !!(r[1] && r[1].exists());
      rol.coachNaam = r[1] && r[1].exists() ? r[1].data().naam || "" : "";
      rol.leerling = r[2] && r[2].exists() ? r[2].data() : null;
      rol.vak = r[3] || [];
    });
  }
  function aanmelden() {
    var prov = new A.GoogleAuthProvider();
    prov.setCustomParameters({ hd: DOMEIN, prompt: "select_account" });
    return A.signInWithPopup(auth, prov);
  }
  P.afmelden = function () { return A.signOut(auth).then(function () { location.hash = "#start"; }); };

  /* ---------- gemeenschappelijke stukken ---------- */
  function schil(titel, inhoud) {
    var ui = CSF.ui;
    return '<div class="wrap">' + ui.kop() + ui.kruimel([["Start", "#start"], [titel]]) +
      '<div class="vel lb-vel"><h2 class="banner">' + esc(titel) + '</h2><div id="lb-account"></div><div id="lb-inhoud">' + inhoud + "</div></div>" + ui.footer() + "</div>";
  }
  function poort(tekst) {
    return '<div class="lb-poort"><p>' + tekst + '</p><button type="button" class="btn" id="loginBtn">Aanmelden met je schoolaccount</button>' +
      '<p class="hint">Gebruik je account @' + esc(DOMEIN) + '. Lukt het niet in de app van Smartschool? Open de site in Chrome of Safari.</p><p class="fb" id="login-fb" aria-live="polite"></p></div>';
  }
  function koppelLogin(root) {
    var b = root.querySelector("#loginBtn");
    if (b) b.addEventListener("click", function () {
      var fb = root.querySelector("#login-fb"); if (fb) fb.textContent = "";
      aanmelden().catch(function (e) { if (fb) fb.textContent = "Aanmelden lukte niet (" + (e && e.code ? e.code : "onbekende fout") + "). Probeer opnieuw."; });
    });
  }
  function accountBalk() {
    var el = document.getElementById("lb-account"); if (!el || !gebruiker) return;
    var r = rol.beheerder ? "beheerder" : rol.coach ? "coach" : rol.leerling ? "leerling" : rol.vak.length ? "vakleerkracht" : "";
    el.innerHTML = '<div class="lb-account"><span>Aangemeld als <b>' + esc(gebruiker.displayName || mail()) + "</b>" + (r ? ' <span class="lb-pill grijs">' + r + "</span>" : "") +
      '</span><button type="button" class="btn donker lb-klein" id="lb-afmelden">Afmelden</button></div>';
    el.querySelector("#lb-afmelden").addEventListener("click", P.afmelden);
  }
  function melding(el, tekst, soort) { el.innerHTML = '<div class="lb-melding ' + (soort || "") + '">' + tekst + "</div>"; }

  /* ---------- formulieren ---------- */
  function veld(id, label, o) {
    o = o || {}; var v = esc(o.waarde == null ? "" : o.waarde), ster = o.verplicht ? ' <span class="lb-ster">*</span>' : "";
    var inp = o.lang ? '<textarea id="' + id + '" name="' + id + '" rows="' + (o.rijen || 3) + '"' + (o.verplicht ? " required" : "") + ">" + v + "</textarea>"
      : '<input type="' + (o.type || "text") + '" id="' + id + '" name="' + id + '" value="' + v + '"' + (o.verplicht ? " required" : "") + (o.type === "number" ? ' min="0" max="600"' : "") + ">";
    return '<div class="lb-veld"><label for="' + id + '">' + label + ster + "</label>" + inp + (o.hint ? '<span class="hint">' + o.hint + "</span>" : "") + "</div>";
  }
  function keuze(naam, label, opties, o) {
    o = o || {}; var type = o.meer ? "checkbox" : "radio", gekozen = [].concat(o.waarde || []);
    return '<fieldset class="lb-keuze"' + (o.verplicht ? ' data-verplicht="1"' : "") + "><legend>" + label + (o.verplicht ? ' <span class="lb-ster">*</span>' : "") + '</legend><div class="lb-chips' + (o.lijst ? " lijst" : "") + '">' +
      opties.map(function (x, i) { var id = naam + "-" + i; return '<label class="lb-chip" for="' + id + '"><input type="' + type + '" id="' + id + '" name="' + naam + '" value="' + esc(x) + '"' + (gekozen.indexOf(x) >= 0 ? " checked" : "") + "><span>" + esc(x) + "</span></label>"; }).join("") +
      "</div></fieldset>";
  }
  function formulier(id, inhoud, knop) {
    return '<form id="' + id + '" class="lb-form" novalidate>' + inhoud + '<p class="lb-legende"><span class="lb-ster">*</span> verplicht</p><div class="lb-acties"><button type="submit" class="btn">' + knop + '</button><span class="fb" aria-live="polite"></span></div></form>';
  }
  function lees(form) {
    var d = {};
    form.querySelectorAll("input,textarea,select").forEach(function (el) {
      if (!el.name) return;
      if (el.type === "checkbox") { d[el.name] = d[el.name] || []; if (el.checked) d[el.name].push(el.value); }
      else if (el.type === "radio") { if (el.checked) d[el.name] = el.value; else if (!(el.name in d)) d[el.name] = ""; }
      else d[el.name] = el.value.trim();
    });
    return d;
  }
  function controleer(form) {
    form.querySelectorAll(".lb-mist").forEach(function (x) { x.classList.remove("lb-mist"); });
    var mist = [];
    form.querySelectorAll("[required]").forEach(function (el) { if (!el.value.trim()) mist.push(el); });
    form.querySelectorAll("fieldset[data-verplicht]").forEach(function (fs) { if (!fs.querySelector("input:checked")) mist.push(fs); });
    mist.forEach(function (x) { x.classList.add("lb-mist"); });
    if (mist.length) { mist[0].scrollIntoView({ block: "center" }); if (mist[0].focus) mist[0].focus(); }
    return !mist.length;
  }
  function bij(form, bewaar) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var fb = form.querySelector(".fb"), knop = form.querySelector("button[type=submit]");
      if (!controleer(form)) { fb.textContent = "Vul eerst alle verplichte vragen in (*)."; return; }
      knop.disabled = true; fb.textContent = "Bezig met bewaren …";
      Promise.resolve().then(function () { return bewaar(lees(form)); }).then(function () { herteken(); window.scrollTo(0, 0); })
        .catch(function (err) { knop.disabled = false; fb.textContent = "Bewaren lukte niet. Controleer je internet en probeer opnieuw. (" + (err && (err.code || err.message) || "fout") + ")"; });
    });
  }

  /* ---------- weergave van ingevulde stukken ---------- */
  function rij(label, waarde) {
    if (waarde == null || waarde === "" || (Array.isArray(waarde) && !waarde.length)) return "";
    return "<tr><th>" + label + "</th><td>" + (Array.isArray(waarde) ? waarde.map(esc).join("<br>") : esc(waarde).replace(/\n/g, "<br>")) + "</td></tr>";
  }
  function tabel(rijen) { var r = rijen.join(""); return r ? '<table class="lb-tabel">' + r + "</table>" : ""; }
  function opstartHtml(o) {
    return tabel([rij("Klas", o.klas), rij("Uit de les van", o.vakleerkracht), rij("Vak", o.vak), rij("Moment", (o.dag || "") + (o.lesuur ? " · lesuur " + o.lesuur : "")),
      rij("Coach", o.coach), rij("Voorziene tijd", o.voorzieneTijd), rij("Motivatie", o.motivatie), rij("Afgesproken evaluatie", o.evaluatieExtra || (o.evaluatieGelezen && o.evaluatieGelezen.length ? "criteria van het project genoteerd" : "")), rij("Link naar het project", o.link)]);
  }
  function lesHtml(l) {
    var b = l.begin || {}, e = l.einde || {};
    return '<div class="lb-les"><h4>Lesuur ' + l.nr + ' <span class="hint">· ' + datum(l.datum) + "</span>" + (l.einde ? "" : ' <span class="lb-pill oranje">einde ontbreekt</span>') + "</h4>" +
      tabel([rij("Stappen", b.stappen), rij("Voorziene tijd (min)", b.minuten), rij("Wat ga ik vandaag doen?", b.plan),
        rij("Wat weet ik van dit onderwerp?", e.weet), rij("Wat is de opdracht?", e.opdracht), rij("Mijn ideeën", e.ideeen), rij("Het beste idee", e.besteIdee),
        rij("Nodig om te starten", e.nodig), rij("Wat doe ik eerst?", e.eerst), rij("Totaalproject geschat op", e.schatting),
        rij("Tijd", e.tijd), rij("Reden", e.reden), rij("Moeilijk", e.moeilijk), rij("Eerste sessie", e.verloop),
        rij("Gemiste leerstof", e.gemist), rij("Zo ingehaald", e.ingehaald), rij("Nog vragen", e.vragen), rij("Vragen gesteld", e.via), rij("Mijn manier van werken", e.geslaagd)]) + "</div>";
  }
  function afsluitingHtml(a) {
    return tabel([rij("Tijd", a.tijd), rij("Reden", a.reden), rij("Moeilijk", a.moeilijk), rij("Het project vind ik", a.oordeel), rij("Tip voor de volgende leerling", a.aanrader),
      rij("Feedback voor de coach", a.feedbackCoach), rij("Hoe heb ik gewerkt?", a.ef), rij("Mijn presentatie", a.presentatie), rij("Duidelijke structuur", a.structuur),
      rij("Netjes en verzorgd", a.verzorgd), rij("Wat ik nu weet", a.nuWeet), rij("Over mezelf geleerd", a.overMezelf), rij("Goed en beter", a.goedBeter),
      rij("Volgende keer anders", a.volgendeKeer), rij("Gemiste leerstof verwerken", a.inhalen)]);
  }
  function stappenHtml(p, n) {
    var les = p && p.lessen && p.lessen.length ? p.lessen[Math.min(n, p.lessen.length) - 1] : null;
    if (!les) return '<p class="hint">Dit project heeft nog geen stappenplan per lesuur. Volg de afspraken met je coach.</p>';
    return '<div class="lb-stappen"><h4>Stappenplan · lesuur ' + n + " · " + les.titel + '</h4><ol class="stappen">' + les.stappen.map(function (s) {
      return '<li class="' + (s[1].indexOf("Logboek") >= 0 ? "lb" : "") + '"><span class="t">' + s[0] + '</span><span class="s">' + s[1] + '</span><span class="w">' + s[2] + "</span></li>";
    }).join("") + "</ol>" + (p.werkbundel && p.werkbundel.length ? '<p><a class="btn licht" href="#wb-' + p.id + '">Open de werkbundel</a> <a class="btn licht" href="#p-' + p.id + '">Naar het project</a></p>' : "") + "</div>";
  }
  function feedbackLijst(fb) {
    if (!fb.length) return "";
    return '<div class="lb-feedback">' + fb.map(function (f) {
      return '<div class="lb-fbitem"><p class="hint">' + esc(f.coachNaam || f.coach) + " · " + datum(f.datum) + (f.les ? " · lesuur " + f.les : "") + " · " +
        (f.gelezen ? "gelezen op " + datum(f.gelezenOp) : '<b class="lb-rood">nog niet gelezen</b>') + "</p><p>" + esc(f.tekst).replace(/\n/g, "<br>") + "</p></div>";
    }).join("") + "</div>";
  }

  /* ---------- router: #logboek, #logboek-<id>, #dashboard ---------- */
  P.route = function (h, app) {
    var isLb = h === "logboek" || h.indexOf("logboek-") === 0, isDb = h === "dashboard";
    if (!isLb && !isDb) return false;
    var titel = isDb ? "Dashboard coaches" : "Mijn logboek";
    document.title = titel + " · " + CSF.titel;
    if (!P.actief) { app.innerHTML = schil(titel, '<div class="lb-melding">Het digitale logboek is nog niet gekoppeld. Vul je logboek voorlopig in zoals je coach afsprak.</div>'); return true; }
    app.innerHTML = schil(titel, '<p class="hint">Even geduld …</p>');
    laad().then(function () {
      if ((location.hash || "").slice(1) !== h) return;
      var doel = document.getElementById("lb-inhoud"); if (!doel) return;
      if (!gebruiker) { doel.innerHTML = poort(isDb ? "Meld je aan als CSF-coach." : "Meld je aan om je logboek in te vullen."); koppelLogin(doel); return; }
      accountBalk();
      if (rol.fout === "domein") return melding(doel, "Meld je aan met je schoolaccount (@" + esc(DOMEIN) + "). Klik op Afmelden en probeer opnieuw.", "rood");
      if (isDb) return dashboard(doel);
      if (h === "logboek") return hub(doel);
      return logboek(doel, h.slice(8));
    }).catch(function (e) { var d = document.getElementById("lb-inhoud"); if (d) melding(d, "Het portaal kon niet laden. Controleer je internet. (" + esc(e && e.message) + ")", "rood"); });
    return true;
  };

  /* ---------- leerling: overzicht van mijn projecten ---------- */
  function nietOpLijst(doel) {
    if (rol.coach || rol.vak.length) return melding(doel, 'Je bent aangemeld als leerkracht. Open het <a href="#dashboard">dashboard</a>.');
    melding(doel, "Je staat nog niet op de CSF-lijst. Vraag je coach om je toe te voegen. Daarna kan je je logboek invullen.", "oranje");
  }
  function hub(doel) {
    if (!rol.leerling) return nietOpLijst(doel);
    Promise.all([lijst("logboeken", ["leerling", "==", mail()]), lijst("feedback", ["leerling", "==", mail()], ["gelezen", "==", false])]).then(function (r) {
      var lbs = r[0], fbOpen = r[1].length;
      var kaarten = lbs.map(function (lb) {
        var st = status(lb);
        return '<a class="lb-kaart" href="#logboek-' + esc(lb.project) + '"><b>' + esc(lb.projectnaam) + '</b><span class="hint">' + (lb.lessen || []).length + " lesuren · gestart op " + datum(lb.gestart) + '</span><span class="lb-pill ' + st[0] + '">' + st[1] + "</span></a>";
      }).join("");
      var opties = CSF.projecten.filter(function (p) { return !lbs.some(function (l) { return l.project === p.id; }); }).map(function (p) {
        return '<option value="' + esc(p.id) + '">' + esc((p.soort === "vak" ? CSF.ui.label(p) : "oefenproject") + " · " + p.naam.split(":")[0]) + "</option>"; }).join("");
      doel.innerHTML = (fbOpen ? '<div class="lb-melding oranje">Je hebt ' + fbOpen + " nieuwe feedback van je coach. Open je project om ze te lezen.</div>" : "") +
        "<p>Coach: <b>" + esc(rol.leerling.coachNaam || "nog niet toegewezen") + "</b> · Klas: <b>" + esc(rol.leerling.klas || "–") + "</b></p>" +
        "<h3>Mijn projecten</h3>" + (kaarten ? '<div class="lb-kaarten">' + kaarten + "</div>" : '<p class="hint">Je hebt nog geen project gestart.</p>') +
        '<h3>Start een nieuw project</h3><div class="crij"><select id="lb-nieuw" aria-label="Kies een project">' + opties + '</select><button type="button" class="btn" id="lb-start">Start het logboek</button></div>';
      doel.querySelector("#lb-start").addEventListener("click", function () { location.hash = "#logboek-" + doel.querySelector("#lb-nieuw").value; });
    }).catch(function (e) { melding(doel, "Je logboek kon niet laden. (" + esc(e && e.message) + ")", "rood"); });
  }

  /* ---------- leerling: logboek van één project ---------- */
  function logboek(doel, pid) {
    var p = project(pid);
    if (!p) return melding(doel, "Dit project bestaat niet. Kies een project in <a href=\"#logboek\">Mijn logboek</a>.", "rood");
    if (!rol.leerling) return nietOpLijst(doel);
    var id = mail() + "__" + pid;
    Promise.all([haal("logboeken/" + id), lijst("feedback", ["leerling", "==", mail()], ["gelezen", "==", false]), lijst("feedback", ["leerling", "==", mail()])]).then(function (r) {
      var lb = r[0].exists() ? r[0].data() : null, open = r[1], alle = r[2].filter(function (f) { return f.project === pid; });
      var kopje = '<p class="lb-projectnaam">' + esc(p.naam) + "</p>";
      if (open.length) return feedbackPoort(doel, open, kopje);
      if (!lb) return opstart(doel, p, id, kopje);
      var ls = lb.lessen || [], laatste = ls[ls.length - 1], n = ls.length;
      var geschiedenis = (ls.length ? '<details class="lb-hist"><summary>Mijn ingevulde lesuren (' + ls.length + ")</summary>" + ls.slice().reverse().map(lesHtml).join("") + "</details>" : "") +
        '<details class="lb-hist"><summary>Mijn opstart</summary>' + opstartHtml(lb.opstart || {}) + "</details>" +
        (alle.length ? '<details class="lb-hist"><summary>Feedback van mijn coach (' + alle.length + ")</summary>" + feedbackLijst(alle) + "</details>" : "");
      if (lb.status === "afgerond") {
        doel.innerHTML = kopje + '<div class="lb-melding groen">Je project is afgerond. Proficiat!</div><h3>Evaluatie en reflectie</h3>' + afsluitingHtml(lb.afsluiting || {}) + geschiedenis;
        return;
      }
      if (laatste && !laatste.einde) return einde(doel, p, id, ls, kopje, geschiedenis);
      begin(doel, p, id, ls, kopje, geschiedenis, lb);
    }).catch(function (e) { melding(doel, "Je logboek kon niet laden. (" + esc(e && e.message) + ")", "rood"); });
  }

  function feedbackPoort(doel, open, kopje) {
    doel.innerHTML = kopje + '<div class="lb-melding oranje">Je coach gaf je feedback. Lees ze en bevestig dat je ze gelezen hebt. Daarna kan je verder.</div>' +
      open.map(function (f) {
        var pr = project(f.project);
        return '<div class="lb-fbpoort" data-id="' + esc(f._id) + '"><p class="hint">' + esc(f.coachNaam || f.coach) + " · " + datum(f.datum) + (pr ? " · " + esc(pr.naam.split(":")[0]) : "") + (f.les ? " · lesuur " + f.les : "") +
          "</p><p>" + esc(f.tekst).replace(/\n/g, "<br>") + '</p><label class="lb-chip"><input type="checkbox" class="lb-gelezen"> <span>Ik heb deze feedback gelezen.</span></label></div>';
      }).join("") + '<div class="lb-acties"><button type="button" class="btn" id="lb-bevestig">Bevestig en ga verder</button><span class="fb" aria-live="polite"></span></div>';
    doel.querySelector("#lb-bevestig").addEventListener("click", function () {
      var fb = doel.querySelector(".lb-acties .fb"), vakjes = doel.querySelectorAll(".lb-gelezen");
      if ([].some.call(vakjes, function (v) { return !v.checked; })) { fb.textContent = "Vink bij elke feedback aan dat je ze gelezen hebt."; return; }
      fb.textContent = "Bezig met bewaren …";
      Promise.all([].map.call(doel.querySelectorAll(".lb-fbpoort"), function (k) { return F.updateDoc(ref("feedback/" + k.dataset.id), { gelezen: true, gelezenOp: nu() }); }))
        .then(herteken).catch(function (e) { fb.textContent = "Bewaren lukte niet. (" + (e.code || e.message) + ")"; });
    });
  }

  function opstart(doel, p, id, kopje) {
    var L = rol.leerling;
    var crit = (p.criteria || []).length ? '<div class="lb-veld"><span class="lb-label">Afgesproken evaluatie</span><ul class="vink">' + p.criteria.map(function (c) { return "<li>" + c + "</li>"; }).join("") + "</ul></div>" : "";
    doel.innerHTML = kopje + '<div class="lb-melding">Dit is de <b>opstart</b> van je logboek. Je vult dit één keer in. Daarna vul je bij elk lesuur een begin en een einde in.</div>' +
      formulier("lb-opstart",
        '<div class="lb-twee">' + veld("klas", "Ik zit in klas", { waarde: L.klas, verplicht: true }) + veld("vak", "Ik ga uit de les voor het vak", { verplicht: true }) + "</div>" +
        veld("vakleerkracht", "Ik ga uit de les van mevrouw/meneer", { verplicht: true }) +
        keuze("dag", "Op welke dag?", DAGEN, { verplicht: true }) + keuze("lesuur", "Tijdens welk lesuur?", LESUREN, { verplicht: true }) +
        '<p class="lb-vast">Mijn CSF-coach: <b>' + esc(L.coachNaam || "nog niet toegewezen") + "</b> · Project: <b>" + esc(p.naam) + "</b></p>" +
        veld("voorzieneTijd", "Voorziene tijd", { waarde: p.tijd, verplicht: true }) +
        veld("motivatie", "Motivatie: ik koos voor dit project omdat …", { lang: true, verplicht: true }) +
        crit + keuze("evaluatieGelezen", "Afgesproken evaluatie", ["Ik heb de afgesproken evaluatie gelezen en genoteerd."], { meer: true, verplicht: true }) +
        veld("evaluatieExtra", "Extra afspraken met mijn coach", { lang: true, rijen: 2 }) +
        veld("link", "Link naar mijn project (als je online werkt)", { hint: "Zet de link openbaar of geef je coach toegang." }),
        "Bewaar mijn opstart");
    bij(doel.querySelector("#lb-opstart"), function (d) {
      d.coach = L.coachNaam || "";
      return F.setDoc(ref("logboeken/" + id), { leerling: mail(), naam: gebruiker.displayName || L.naam || "", project: p.id, projectnaam: p.naam,
        gestart: nu(), status: "bezig", opstart: d, lessen: [], kijkers: L.vakleerkrachten || [] });
    });
  }

  function begin(doel, p, id, ls, kopje, geschiedenis) {
    var n = ls.length + 1, eerste = n === 1;
    var inhoud = '<p class="lb-vast">Datum: <b>' + datum(vandaag()) + "</b></p>" + (eerste
      ? keuze("stappen", "Deze stappen zet ik vandaag (TASC)", TASC1, { meer: true, verplicht: true, waarde: TASC1, lijst: true }) +
        veld("minuten", "Ik voorzie hiervoor (minuten)", { type: "number", waarde: 50, verplicht: true })
      : keuze("stappen", "Aan deze TASC-stappen werk ik vandaag", TASC2, { meer: true, verplicht: true, lijst: true }) +
        veld("minuten", "Projecttijd voor deze stappen (minuten)", { type: "number", waarde: 50, verplicht: true }) +
        veld("plan", "Wat ga ik vandaag doen?", { lang: true, verplicht: true }));
    doel.innerHTML = kopje + '<div class="lb-stap"><span class="lb-pill turkoois">Begin van lesuur ' + n + '</span><p>Vul dit in bij het <b>begin</b> van het lesuur. Daarna verschijnt het stappenplan van vandaag.</p></div>' +
      formulier("lb-begin", inhoud, "Start lesuur " + n) +
      (ls.length ? '<div class="lb-afsluiten"><h3>Is je project af?</h3><p>Vul dan je evaluatie en je reflectie in.</p><button type="button" class="btn licht" id="lb-naar-afsluiten">Mijn project is af</button></div>' : "") +
      geschiedenis;
    bij(doel.querySelector("#lb-begin"), function (d) {
      var nieuw = ls.concat([{ nr: n, datum: vandaag(), begin: { tijd: nu(), stappen: d.stappen, minuten: Number(d.minuten) || 0, plan: d.plan || "" } }]);
      return F.updateDoc(ref("logboeken/" + id), { lessen: nieuw });
    });
    var na = doel.querySelector("#lb-naar-afsluiten");
    if (na) na.addEventListener("click", function () { afsluiten(doel, p, id, kopje); });
  }

  function einde(doel, p, id, ls, kopje, geschiedenis) {
    var l = ls[ls.length - 1], n = l.nr, eerste = n === 1;
    var inhoud = eerste
      ? "<h4>Uitwerking van de stappen</h4>" + veld("weet", "Wat weet ik van dit onderwerp?", { lang: true, verplicht: true }) + veld("opdracht", "Wat is de opdracht?", { lang: true, verplicht: true }) +
        veld("ideeen", "Hoeveel ideeën kan ik bedenken? Noteer ze.", { lang: true, verplicht: true }) + veld("besteIdee", "Wat is het beste idee?", { lang: true, verplicht: true }) +
        veld("nodig", "Wat heb ik nodig om te kunnen starten?", { lang: true, rijen: 2 }) + veld("eerst", "Wat doe ik eerst?", { lang: true, rijen: 2 }) +
        veld("schatting", "Ik schat dat ik mijn totaalproject kan afwerken in … (uur/minuten)", { verplicht: true }) +
        "<h4>Evaluatie</h4>" + keuze("tijd", "Ik had … om deze opdracht vandaag uit te voeren.", TIJD, { verplicht: true }) +
        veld("reden", "De reden hiervoor is:", { lang: true, rijen: 2, verplicht: true }) + veld("moeilijk", "Dit was voor mij moeilijk:", { lang: true, rijen: 2 }) +
        veld("verloop", "Zo verliep mijn eerste CSF-sessie:", { lang: true, rijen: 2, verplicht: true })
      : "<h4>Ingehaalde leerstof</h4>" + veld("gemist", "Ik miste deze leerstof:", { lang: true, rijen: 2, verplicht: true }) +
        veld("ingehaald", "Ik haalde deze zelfstandig in op deze manier:", { lang: true, rijen: 2, verplicht: true }) +
        keuze("vragen", "Ik had nog vragen.", ["JA", "NEEN"], { verplicht: true }) + keuze("via", "Ik stelde mijn vragen aan mijn vakleerkracht", ["via mail", "mondeling", "niet nodig"]) +
        keuze("geslaagd", "Mijn manier van werken lijkt me dus", ["GESLAAGD", "NIET GESLAAGD"], { verplicht: true });
    doel.innerHTML = kopje + '<div class="lb-stap"><span class="lb-pill oranje">Lesuur ' + n + ' loopt</span><p>Werk met het stappenplan hieronder. Vul het <b>einde</b> van je logboek in op het einde van het lesuur.</p></div>' +
      stappenHtml(p, n) + '<h3 class="lb-eindekop">Einde van lesuur ' + n + "</h3>" + formulier("lb-einde", inhoud, "Bewaar het einde van lesuur " + n) + geschiedenis;
    bij(doel.querySelector("#lb-einde"), function (d) {
      d.tijdstip = nu();
      var nieuw = ls.slice(); nieuw[nieuw.length - 1] = Object.assign({}, l, { einde: d });
      return F.updateDoc(ref("logboeken/" + id), { lessen: nieuw });
    });
  }

  function afsluiten(doel, p, id, kopje) {
    var inhoud = "<h4>Evaluatie</h4>" + keuze("tijd", "Ik had hiervoor …", TIJD, { verplicht: true }) + veld("reden", "De reden hiervoor is:", { lang: true, rijen: 2, verplicht: true }) +
      veld("moeilijk", "Dit was voor mij moeilijk:", { lang: true, rijen: 2 }) +
      "<h4>Reflectie · het project zelf</h4>" + keuze("oordeel", "Ik vind het project", ["makkelijk", "te doen", "moeilijk"], { verplicht: true }) +
      veld("aanrader", "Ik raad de volgende leerling aan om:", { lang: true, rijen: 2 }) + veld("feedbackCoach", "Deze feedback geef ik aan mijn CSF-coach over het project:", { lang: true, rijen: 2 }) +
      keuze("ef", "Hoe heb ik gewerkt? Vink aan wat past.", EF, { meer: true, lijst: true }) +
      "<h4>De presentatie</h4>" + veld("presentatie", "Hoe heb ik mijn project laten zien?", { lang: true, rijen: 2, verplicht: true }) +
      keuze("structuur", "Zit er een duidelijke structuur in: een begin, een midden en een einde?", ["ja", "gedeeltelijk", "nee"], { verplicht: true }) +
      keuze("verzorgd", "Ziet mijn presentatie of eindproduct er netjes en verzorgd uit?", ["ja", "gedeeltelijk", "nee"], { verplicht: true }) +
      "<h4>Nadenken over mezelf</h4>" + veld("nuWeet", "Wat weet ik nu over het onderwerp dat ik eerst niet wist?", { lang: true, rijen: 2, verplicht: true }) +
      veld("overMezelf", "Wat heb ik over mezelf geleerd tijdens dit project? Wat kan ik goed?", { lang: true, rijen: 2, verplicht: true }) +
      veld("goedBeter", "Wat ging er goed en wat kon er beter?", { lang: true, rijen: 2, verplicht: true }) +
      veld("volgendeKeer", "Wat zou ik de volgende keer anders aanpakken?", { lang: true, rijen: 2 }) +
      veld("inhalen", "Hoe lukte het zelfstandig verwerken van de gemiste leerstof?", { lang: true, rijen: 2 });
    doel.innerHTML = kopje + '<div class="lb-stap"><span class="lb-pill groen">Afsluiting</span><p>Je werkte dit project af. Tijd om te reflecteren!</p></div>' +
      formulier("lb-afsluit", inhoud, "Bewaar en sluit mijn project af") + '<p><button type="button" class="btn donker lb-klein" id="lb-terug">Terug: mijn project is nog niet af</button></p>';
    bij(doel.querySelector("#lb-afsluit"), function (d) { d.tijdstip = nu(); return F.updateDoc(ref("logboeken/" + id), { afsluiting: d, status: "afgerond" }); });
    doel.querySelector("#lb-terug").addEventListener("click", herteken);
    window.scrollTo(0, 0);
  }

  /* ---------- projectpagina: logboekstatus en vergrendelde lesuren ---------- */
  P.project = function (p, app) {
    var blok = app.querySelector("#logboek-blok"); if (!blok || !P.actief) return;
    blok.innerHTML = '<div class="lb-projectblok"><p class="hint">Logboek laden …</p></div>';
    laad().then(function () {
      if (!document.body.contains(blok)) return;
      var vak = blok.firstChild;
      if (!gebruiker) { vak.innerHTML = "<p><b>Mijn logboek.</b> Meld je aan om je logboek in te vullen. Het stappenplan van elk lesuur verschijnt na je begin-logboek.</p>" + '<button type="button" class="btn" id="loginBtn">Aanmelden met je schoolaccount</button><span class="fb" id="login-fb"></span>'; koppelLogin(vak); return; }
      if (rol.coach || rol.vak.length) { vak.innerHTML = '<p><b>Je bent aangemeld als leerkracht.</b> <a href="#dashboard">Open het dashboard</a>.</p>'; return; }
      if (!rol.leerling) { vak.innerHTML = "<p>Je staat nog niet op de CSF-lijst. Vraag je coach om je toe te voegen.</p>"; return; }
      haal("logboeken/" + mail() + "__" + p.id).then(function (s) {
        var lb = s.exists() ? s.data() : null, ls = lb ? lb.lessen || [] : [], laatste = ls[ls.length - 1];
        var tekst = !lb ? "Je logboek voor dit project is nog niet gestart." : lb.status === "afgerond" ? "Je project is afgerond." :
          laatste && !laatste.einde ? "Lesuur " + laatste.nr + " loopt. Vul op het einde van het lesuur je logboek in." : "Vul bij het begin van het lesuur je logboek in. Daarna verschijnt het stappenplan.";
        vak.innerHTML = "<p><b>Mijn logboek.</b> " + tekst + '</p><a class="btn" href="#logboek-' + esc(p.id) + '">Open mijn logboek</a>';
        if (lb && lb.status === "afgerond") return;
        app.querySelectorAll(".les[data-les]").forEach(function (el) {
          if (Number(el.dataset.les) > ls.length) {
            el.classList.add("lb-slot");
            var ol = el.querySelector(".stappen"); if (ol) ol.outerHTML = '<p class="lb-slotmelding">🔒 Dit stappenplan verschijnt na je begin-logboek van lesuur ' + el.dataset.les + ".</p>";
          }
        });
      });
    });
  };

  /* ---------- coachfiches via de rol coach ---------- */
  P.coachfiches = function (el, open) {
    laad().then(function () {
      if (!gebruiker) { el.innerHTML = poort("Meld je aan als CSF-coach."); koppelLogin(el); return; }
      if (!rol.coach) { el.innerHTML = '<div class="lb-melding rood">De coachfiches zijn enkel voor de CSF-coaches.</div>'; return; }
      haal("instellingen/coachfiches").then(function (s) {
        var code = s.exists() ? s.data().code : "";
        if (code) return open(code).catch(function () { el.innerHTML = '<div class="lb-melding rood">De bewaarde coachcode klopt niet. Vraag de beheerder om ze opnieuw te bewaren in het dashboard.</div>'; });
        el.innerHTML = rol.beheerder ? '<div class="lb-melding oranje">Bewaar de coachcode eenmalig in het <a href="#dashboard">dashboard</a>, tabblad ‘Coaches en instellingen’.</div>'
          : '<div class="lb-melding oranje">De beheerder moet de coachcode nog eenmalig bewaren in het dashboard.</div>';
      });
    }).catch(function () { el.innerHTML = '<div class="lb-melding rood">Het portaal kon niet laden.</div>'; });
  };

  /* ---------- status van een logboek ---------- */
  function status(lb) {
    if (!lb) return ["grijs", "Nog niet gestart"];
    if (lb.status === "afgerond") return ["groen", "Afgerond"];
    var ls = lb.lessen || [], l = ls[ls.length - 1];
    if (!l) return ["turkoois", "Opstart ingevuld"];
    if (!l.einde) return l.datum < vandaag() ? ["rood", "Einde-logboek ontbreekt (lesuur " + l.nr + ")"] : ["oranje", "Lesuur " + l.nr + " bezig"];
    return ["groen", "In orde · " + ls.length + " lesuren"];
  }
  var RANG = { rood: 0, oranje: 1, turkoois: 2, groen: 3, grijs: 4 };

  /* ---------- dashboard ---------- */
  var D = { tab: "overzicht", coachFilter: "alle", zoek: "", open: null, data: null };
  function dashboard(doel) {
    if (!rol.coach && !rol.vak.length) {
      return melding(doel, "Het dashboard is enkel voor CSF-coaches en vakleerkrachten van CSF-leerlingen." + (rol.leerling ? ' Ga naar <a href="#logboek">Mijn logboek</a>.' : ""), "oranje");
    }
    var taken = rol.coach
      ? [lijst("leerlingen"), lijst("logboeken"), lijst("feedback"), lijst("coaches"), rol.beheerder ? haal("instellingen/coachfiches").catch(function () { return null; }) : Promise.resolve(null)]
      : [Promise.resolve(rol.vak.map(function (x) { return x; })), lijst("logboeken", ["kijkers", "array-contains", mail()]), Promise.resolve([]), Promise.resolve([]), Promise.resolve(null)];
    Promise.all(taken).then(function (r) {
      D.data = { leerlingen: r[0], logboeken: r[1], feedback: r[2], coaches: r[3], codeIngesteld: !!(r[4] && r[4].exists && r[4].exists() && r[4].data().code) };
      if (!rol.coach) D.tab = "overzicht";
      tekenDashboard(doel);
    }).catch(function (e) { melding(doel, "Het dashboard kon niet laden. (" + esc(e && (e.code || e.message)) + ")", "rood"); });
  }
  function ververs(doel) { dashboard(doel); }
  function leerlingId(l) { return l._id; }
  function rijen() {
    var d = D.data, perLl = {};
    d.logboeken.forEach(function (lb) { (perLl[lb.leerling] = perLl[lb.leerling] || []).push(lb); });
    return d.leerlingen.map(function (l) {
      var lbs = (perLl[l._id] || []).sort(function (a, b) { return (a.status === "afgerond") - (b.status === "afgerond") || String(b.gestart).localeCompare(String(a.gestart)); });
      var hoofd = lbs[0] || null, st = status(hoofd);
      var laatste = hoofd && (hoofd.lessen || []).length ? hoofd.lessen[hoofd.lessen.length - 1].datum : hoofd ? hoofd.gestart : "";
      var fbOpen = d.feedback.filter(function (f) { return f.leerling === l._id && !f.gelezen; }).length;
      return { l: l, lbs: lbs, hoofd: hoofd, st: st, laatste: laatste, fbOpen: fbOpen };
    });
  }
  function tekenDashboard(doel) {
    var tabs = rol.coach ? [["overzicht", "Overzicht"], ["leerlingen", "Leerlingen"]].concat(rol.beheerder ? [["beheer", "Coaches en instellingen"]] : []) : [["overzicht", "Mijn CSF-leerlingen"]];
    doel.innerHTML = '<div class="chips lb-tabs" role="tablist">' + tabs.map(function (t) { return '<button type="button" class="chip" role="tab" data-tab="' + t[0] + '" aria-pressed="' + (D.tab === t[0]) + '">' + t[1] + "</button>"; }).join("") +
      '</div><div id="db-inhoud"></div>';
    doel.querySelectorAll("[data-tab]").forEach(function (b) { b.addEventListener("click", function () { D.tab = b.dataset.tab; D.open = null; tekenDashboard(doel); }); });
    var z = doel.querySelector("#db-inhoud");
    if (D.tab === "leerlingen" && rol.coach) return tabLeerlingen(z, doel);
    if (D.tab === "beheer" && rol.beheerder) return tabBeheer(z, doel);
    tabOverzicht(z, doel);
  }

  function tabOverzicht(z, doel) {
    var d = D.data, alle = rijen();
    var r = alle.filter(function (x) {
      if (D.coachFilter === "zonder" && x.l.coach) return false;
      if (D.coachFilter !== "alle" && D.coachFilter !== "zonder" && x.l.coach !== D.coachFilter) return false;
      var q = D.zoek.toLowerCase(); return !q || (x.l.naam + " " + x.l._id + " " + (x.l.klas || "")).toLowerCase().indexOf(q) >= 0;
    }).sort(function (a, b) { return RANG[a.st[0]] - RANG[b.st[0]] || String(a.l.naam).localeCompare(String(b.l.naam), "nl"); });
    var rood = alle.filter(function (x) { return x.st[0] === "rood"; }).length;
    var filters = rol.coach ? '<div class="crij lb-filters"><label for="db-coach" class="hint">Coach</label><select id="db-coach"><option value="alle">Alle coaches</option>' +
      d.coaches.map(function (c) { return '<option value="' + esc(c._id) + '"' + (D.coachFilter === c._id ? " selected" : "") + ">" + esc(c.naam || c._id) + "</option>"; }).join("") +
      '<option value="zonder"' + (D.coachFilter === "zonder" ? " selected" : "") + '>Zonder coach</option></select><input type="search" id="db-zoek" placeholder="Zoek een leerling" value="' + esc(D.zoek) + '" aria-label="Zoek een leerling"></div>' : "";
    z.innerHTML = (rood ? '<div class="lb-melding rood">' + rood + (rood > 1 ? " leerlingen hebben" : " leerling heeft") + " een ontbrekend logboek.</div>" : "") + filters +
      (rol.coach ? '<div class="crij lb-export"><button type="button" class="btn licht lb-klein" id="db-kopieer">Kopieer overzicht voor Google Sheets</button><button type="button" class="btn licht lb-klein" id="db-csv">Download overzicht (CSV)</button><button type="button" class="btn licht lb-klein" id="db-csv-les">Download alle lesuren (CSV)</button><span class="fb" id="db-exportfb" aria-live="polite"></span></div>' : "") +
      '<div class="lb-tabelwrap"><table class="lb-overzicht"><thead><tr><th>Leerling</th><th>Klas</th><th>Coach</th><th>Project</th><th>Lesuren</th><th>Laatste logboek</th><th>Status</th><th>Feedback</th></tr></thead><tbody>' +
      (r.length ? r.map(function (x) {
        return '<tr class="db-rij' + (D.open === x.l._id ? " open" : "") + '" data-ll="' + esc(x.l._id) + '" tabindex="0"><td><b>' + esc(x.l.naam || x.l._id) + '</b><br><span class="hint">' + esc(x.l._id) + "</span></td><td>" + esc(x.l.klas || "–") +
          "</td><td>" + esc(x.l.coachNaam || "–") + "</td><td>" + (x.hoofd ? esc(x.hoofd.projectnaam.split(":")[0]) : "–") + "</td><td>" + (x.hoofd ? (x.hoofd.lessen || []).length : 0) +
          "</td><td>" + datum(x.laatste) + '</td><td><span class="lb-pill ' + x.st[0] + '">' + esc(x.st[1]) + "</span></td><td>" + (x.fbOpen ? '<span class="lb-pill oranje">' + x.fbOpen + " ongelezen</span>" : "") + "</td></tr>";
      }).join("") : '<tr><td colspan="8" class="hint">Geen leerlingen gevonden.' + (rol.coach ? " Voeg leerlingen toe in het tabblad Leerlingen." : "") + "</td></tr>") +
      '</tbody></table></div><div id="db-detail"></div>';
    var cs = z.querySelector("#db-coach"); if (cs) cs.addEventListener("change", function () { D.coachFilter = cs.value; tabOverzicht(z, doel); });
    var zk = z.querySelector("#db-zoek"); if (zk) zk.addEventListener("input", function () { D.zoek = zk.value; var pos = zk.selectionStart; tabOverzicht(z, doel); var n = z.querySelector("#db-zoek"); n.focus(); n.setSelectionRange(pos, pos); });
    z.querySelectorAll(".db-rij").forEach(function (tr) {
      var open = function () { D.open = D.open === tr.dataset.ll ? null : tr.dataset.ll; tabOverzicht(z, doel); var det = z.querySelector("#db-detail"); if (D.open && det) det.scrollIntoView({ behavior: "smooth", block: "start" }); };
      tr.addEventListener("click", open); tr.addEventListener("keydown", function (e) { if (e.key === "Enter") open(); });
    });
    if (rol.coach) {
      z.querySelector("#db-kopieer").addEventListener("click", function () {
        var tsv = exportRijen(alle).map(function (rr) { return rr.map(function (c) { return String(c).replace(/[\t\n]+/g, " "); }).join("\t"); }).join("\n");
        var fb = z.querySelector("#db-exportfb");
        navigator.clipboard.writeText(tsv).then(function () { fb.textContent = "Gekopieerd. Plak in Google Sheets met Ctrl+V."; }, function () { fb.textContent = "Kopiëren lukte niet. Gebruik de CSV-download."; });
      });
      z.querySelector("#db-csv").addEventListener("click", function () { download("csf-overzicht-" + vandaag() + ".csv", exportRijen(alle)); });
      z.querySelector("#db-csv-les").addEventListener("click", function () { download("csf-lesuren-" + vandaag() + ".csv", lesRijen()); });
    }
    if (D.open) detail(z.querySelector("#db-detail"), z, doel);
  }
  function exportRijen(alle) {
    return [["Leerling", "E-mail", "Klas", "Coach", "Project", "Lesuren", "Laatste logboek", "Status", "Ongelezen feedback"]].concat(alle.map(function (x) {
      return [x.l.naam || "", x.l._id, x.l.klas || "", x.l.coachNaam || "", x.hoofd ? x.hoofd.projectnaam : "", x.hoofd ? (x.hoofd.lessen || []).length : 0, x.laatste ? String(x.laatste).slice(0, 10) : "", x.st[1], x.fbOpen];
    }));
  }
  function lesRijen() {
    var kop = ["Leerling", "E-mail", "Project", "Lesuur", "Datum", "Stappen", "Minuten", "Plan", "Einde ingevuld", "Tijd", "Reden", "Moeilijk", "Gemiste leerstof", "Zo ingehaald", "Nog vragen", "Werkwijze"];
    var out = [kop];
    D.data.logboeken.forEach(function (lb) {
      (lb.lessen || []).forEach(function (l) {
        var b = l.begin || {}, e = l.einde || {};
        out.push([lb.naam || "", lb.leerling, lb.projectnaam, l.nr, l.datum, (b.stappen || []).join(" | "), b.minuten || "", b.plan || "", l.einde ? "ja" : "nee", e.tijd || "", e.reden || "", e.moeilijk || "", e.gemist || "", e.ingehaald || "", e.vragen || "", e.geslaagd || ""]);
      });
    });
    return out;
  }
  function download(naam, rr) {
    var csv = "﻿" + rr.map(function (r) { return r.map(function (c) { c = String(c == null ? "" : c); return /[",;\n]/.test(c) ? '"' + c.replace(/"/g, '""') + '"' : c; }).join(","); }).join("\r\n");
    var a = document.createElement("a"); a.href = URL.createObjectURL(new Blob([csv], { type: "text/csv;charset=utf-8" })); a.download = naam;
    document.body.appendChild(a); a.click(); setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 500);
  }

  function detail(el, z, doel) {
    var d = D.data, l = d.leerlingen.filter(function (x) { return x._id === D.open; })[0]; if (!l) return;
    var lbs = d.logboeken.filter(function (lb) { return lb.leerling === l._id; });
    var fb = d.feedback.filter(function (f) { return f.leerling === l._id; }).sort(function (a, b) { return String(b.datum).localeCompare(String(a.datum)); });
    el.innerHTML = '<div class="lb-detail"><h3>' + esc(l.naam || l._id) + ' <span class="hint">· ' + esc(l.klas || "") + " · coach: " + esc(l.coachNaam || "–") + "</span></h3>" +
      (lbs.length ? lbs.map(function (lb) {
        var st = status(lb);
        return '<details class="lb-hist" open><summary>' + esc(lb.projectnaam) + ' <span class="lb-pill ' + st[0] + '">' + esc(st[1]) + "</span></summary>" +
          "<h4>Opstart</h4>" + opstartHtml(lb.opstart || {}) + ((lb.lessen || []).length ? (lb.lessen || []).slice().reverse().map(lesHtml).join("") : '<p class="hint">Nog geen lesuren.</p>') +
          (lb.afsluiting ? "<h4>Evaluatie en reflectie</h4>" + afsluitingHtml(lb.afsluiting) : "") + "</details>";
      }).join("") : '<p class="hint">Deze leerling heeft nog geen logboek gestart.</p>') +
      (rol.coach ? "<h4>Feedback</h4>" + (feedbackLijst(fb) || '<p class="hint">Nog geen feedback gegeven.</p>') +
        (lbs.length ? '<form id="db-fb" class="lb-form" novalidate><div class="lb-twee"><div class="lb-veld"><label for="db-fb-project">Project</label><select id="db-fb-project">' +
          lbs.map(function (lb) { return '<option value="' + esc(lb.project) + '">' + esc(lb.projectnaam.split(":")[0]) + "</option>"; }).join("") +
          '</select></div><div class="lb-veld"><label for="db-fb-les">Bij lesuur</label><select id="db-fb-les"><option value="">algemeen</option>' +
          (lbs[0].lessen || []).map(function (x) { return '<option value="' + x.nr + '">lesuur ' + x.nr + "</option>"; }).join("") + "</select></div></div>" +
          veld("db-fb-tekst", "Feedback voor de leerling", { lang: true, verplicht: true, hint: "De leerling ziet dit bij de volgende aanmelding en moet bevestigen dat hij het las." }) +
          '<div class="lb-acties"><button type="submit" class="btn">Verstuur feedback</button><span class="fb" aria-live="polite"></span></div></form>' : "") : "") + "</div>";
    var f = el.querySelector("#db-fb");
    if (f) f.addEventListener("submit", function (e) {
      e.preventDefault();
      var tekst = f.querySelector("#db-fb-tekst").value.trim(), out = f.querySelector(".fb");
      if (!tekst) { out.textContent = "Schrijf eerst je feedback."; return; }
      var pid = f.querySelector("#db-fb-project").value, les = f.querySelector("#db-fb-les").value, pr = project(pid);
      out.textContent = "Bezig met versturen …";
      F.setDoc(ref("feedback/" + nieuwId()), { leerling: l._id, project: pid, projectnaam: pr ? pr.naam : pid, les: les ? Number(les) : null, tekst: tekst,
        coach: mail(), coachNaam: rol.coachNaam || (gebruiker.displayName || mail()), datum: nu(), gelezen: false })
        .then(function () { ververs(doel); }).catch(function (err) { out.textContent = "Versturen lukte niet. (" + (err.code || err.message) + ")"; });
    });
  }

  function coachNaam(email) { var c = D.data.coaches.filter(function (x) { return x._id === email; })[0]; return c ? c.naam || c._id : ""; }
  function coachSelect(id, waarde) {
    return '<select id="' + id + '"><option value="">– geen coach –</option>' + D.data.coaches.map(function (c) { return '<option value="' + esc(c._id) + '"' + (c._id === waarde ? " selected" : "") + ">" + esc(c.naam || c._id) + "</option>"; }).join("") + "</select>";
  }
  function mails(s) { return String(s || "").split(/[\s,;]+/).map(function (x) { return x.trim().toLowerCase(); }).filter(function (x) { return x.indexOf("@") > 0; }); }
  function bewaarLeerling(email, d) {
    var data = { naam: d.naam, klas: d.klas, coach: d.coach || "", coachNaam: d.coach ? coachNaam(d.coach) : "", vakleerkrachten: d.vakleerkrachten || [] };
    return F.setDoc(ref("leerlingen/" + email), data, { merge: true }).then(function () {
      /* vakleerkrachten mogen meelezen: zet ze ook bij de logboeken van deze leerling */
      return Promise.all(D.data.logboeken.filter(function (lb) { return lb.leerling === email; }).map(function (lb) { return F.updateDoc(ref("logboeken/" + lb._id), { kijkers: data.vakleerkrachten }); }));
    });
  }

  function tabLeerlingen(z, doel) {
    var d = D.data, ll = d.leerlingen.slice().sort(function (a, b) { return String(a.klas + a.naam).localeCompare(String(b.klas + b.naam), "nl"); });
    z.innerHTML = '<p class="hint">Wijs elke leerling toe aan een coach. Dit kan je doorheen het jaar wijzigen. Vul bij ‘Vakleerkracht’ het e-mailadres in van de leerkracht wiens les de leerling verlaat: die leerkracht kan dan het logboek lezen.</p>' +
      '<div class="lb-tabelwrap"><table class="lb-overzicht lb-bewerk"><thead><tr><th>Leerling</th><th>Klas</th><th>Coach</th><th>Vakleerkracht (e-mail)</th><th></th></tr></thead><tbody>' +
      (ll.length ? ll.map(function (l, i) {
        return '<tr data-ll="' + esc(l._id) + '"><td><input type="text" id="ll-naam-' + i + '" value="' + esc(l.naam || "") + '" aria-label="Naam"><br><span class="hint">' + esc(l._id) + '</span></td><td><input type="text" id="ll-klas-' + i + '" value="' + esc(l.klas || "") + '" aria-label="Klas" size="5"></td><td>' +
          coachSelect("ll-coach-" + i, l.coach) + '</td><td><input type="text" id="ll-vak-' + i + '" value="' + esc((l.vakleerkrachten || []).join(", ")) + '" aria-label="Vakleerkracht" placeholder="naam@' + esc(DOMEIN) + '"></td><td class="lb-knoppen"><button type="button" class="btn lb-klein" data-bewaar="' + i + '">Bewaar</button> <button type="button" class="btn donker lb-klein" data-wis="' + i + '">Verwijder</button></td></tr>';
      }).join("") : '<tr><td colspan="5" class="hint">Nog geen leerlingen. Voeg ze hieronder toe.</td></tr>') + '</tbody></table></div><p class="fb" id="ll-fb" aria-live="polite"></p>' +
      '<h3>Leerling toevoegen</h3><div class="lb-twee">' + veld("nieuw-mail", "E-mailadres", { hint: "naam@" + DOMEIN }) + veld("nieuw-naam", "Naam") + "</div><div class=\"lb-twee\">" + veld("nieuw-klas", "Klas") +
      '<div class="lb-veld"><label for="nieuw-coach">Coach</label>' + coachSelect("nieuw-coach", "") + '</div></div><button type="button" class="btn" id="nieuw-voegtoe">Voeg toe</button>' +
      '<h3>Een lijst plakken</h3><p class="hint">Kopieer de kolommen uit Excel of Smartschool: e-mail, naam, klas (en eventueel het e-mailadres van de coach). Eén leerling per regel.</p>' +
      '<textarea id="plak-lijst" rows="6" placeholder="lien.peeters@' + esc(DOMEIN) + '\tLien Peeters\t1A"></textarea><div class="lb-acties"><button type="button" class="btn" id="plak-import">Importeer de lijst</button><span class="fb" id="plak-fb" aria-live="polite"></span></div>';
    var fb = z.querySelector("#ll-fb");
    z.querySelectorAll("[data-bewaar]").forEach(function (b) {
      b.addEventListener("click", function () {
        var i = b.dataset.bewaar, email = b.closest("tr").dataset.ll;
        fb.textContent = "Bezig met bewaren …";
        bewaarLeerling(email, { naam: z.querySelector("#ll-naam-" + i).value.trim(), klas: z.querySelector("#ll-klas-" + i).value.trim(), coach: z.querySelector("#ll-coach-" + i).value, vakleerkrachten: mails(z.querySelector("#ll-vak-" + i).value) })
          .then(function () { fb.textContent = "Bewaard."; ververs(doel); }).catch(function (e) { fb.textContent = "Bewaren lukte niet. (" + (e.code || e.message) + ")"; });
      });
    });
    z.querySelectorAll("[data-wis]").forEach(function (b) {
      b.addEventListener("click", function () {
        var email = b.closest("tr").dataset.ll;
        if (!window.confirm("Verwijder " + email + " van de CSF-lijst? De logboeken blijven bewaard.")) return;
        F.deleteDoc(ref("leerlingen/" + email)).then(function () { ververs(doel); }).catch(function (e) { fb.textContent = "Verwijderen lukte niet. (" + (e.code || e.message) + ")"; });
      });
    });
    z.querySelector("#nieuw-voegtoe").addEventListener("click", function () {
      var email = z.querySelector("#nieuw-mail").value.trim().toLowerCase();
      if (!/^[^@\s]+@/.test(email) || email.slice(-(DOMEIN.length + 1)) !== "@" + DOMEIN) { fb.textContent = "Vul een geldig schooladres in (…@" + DOMEIN + ")."; return; }
      bewaarLeerling(email, { naam: z.querySelector("#nieuw-naam").value.trim(), klas: z.querySelector("#nieuw-klas").value.trim(), coach: z.querySelector("#nieuw-coach").value, vakleerkrachten: [] })
        .then(function () { ververs(doel); }).catch(function (e) { fb.textContent = "Toevoegen lukte niet. (" + (e.code || e.message) + ")"; });
    });
    z.querySelector("#plak-import").addEventListener("click", function () {
      var out = z.querySelector("#plak-fb"), regels = z.querySelector("#plak-lijst").value.split(/\r?\n/), ok = [], fout = [];
      regels.forEach(function (r) {
        if (!r.trim()) return;
        var k = r.split(/\t|;/).map(function (x) { return x.trim(); }); if (k.length === 1) k = r.split(",").map(function (x) { return x.trim(); });
        var email = (k[0] || "").toLowerCase();
        if (email.slice(-(DOMEIN.length + 1)) !== "@" + DOMEIN) { fout.push(r.trim()); return; }
        var coach = (k[3] || "").toLowerCase(), bestaand = D.data.leerlingen.filter(function (x) { return x._id === email; })[0] || {};
        ok.push(bewaarLeerling(email, { naam: k[1] || bestaand.naam || "", klas: k[2] || bestaand.klas || "", coach: coach && D.data.coaches.some(function (c) { return c._id === coach; }) ? coach : bestaand.coach || "", vakleerkrachten: bestaand.vakleerkrachten || [] }));
      });
      if (!ok.length) { out.textContent = fout.length ? "Geen geldige regels. Elke regel begint met een schooladres (…@" + DOMEIN + ")." : "Plak eerst een lijst."; return; }
      out.textContent = "Bezig met importeren …";
      Promise.all(ok).then(function () { out.textContent = ok.length + " leerlingen bewaard." + (fout.length ? " Overgeslagen: " + fout.length + "." : ""); setTimeout(function () { ververs(doel); }, 600); })
        .catch(function (e) { out.textContent = "Importeren lukte niet. (" + (e.code || e.message) + ")"; });
    });
  }

  function tabBeheer(z, doel) {
    var d = D.data;
    z.innerHTML = "<h3>Coaches</h3><p class=\"hint\">Alleen wie hier staat, kan het dashboard en de coachfiches openen. Elke coach ziet alle leerlingen.</p>" +
      '<div class="lb-tabelwrap"><table class="lb-overzicht"><thead><tr><th>Naam</th><th>E-mail</th><th></th></tr></thead><tbody>' +
      d.coaches.map(function (c) { return '<tr><td>' + esc(c.naam || "") + "</td><td>" + esc(c._id) + '</td><td><button type="button" class="btn donker lb-klein" data-coachwis="' + esc(c._id) + '">Verwijder</button></td></tr>'; }).join("") +
      '</tbody></table></div><div class="lb-twee">' + veld("coach-mail", "E-mailadres van de coach", { hint: "naam@" + DOMEIN }) + veld("coach-naam", "Naam zoals in het logboek", { hint: "bv. Van Daele T." }) +
      '</div><div class="lb-acties"><button type="button" class="btn" id="coach-voegtoe">Voeg coach toe</button><span class="fb" id="coach-fb2" aria-live="polite"></span></div>' +
      "<h3>Coachfiches</h3><p>" + (d.codeIngesteld ? '<span class="lb-pill groen">ingesteld</span> Coaches openen de coachfiches zonder code.' : '<span class="lb-pill oranje">nog niet ingesteld</span> Bewaar de coachcode één keer. Daarna openen coaches de coachfiches zonder code.') + "</p>" +
      '<div class="crij"><input type="password" id="code-in" autocomplete="off" aria-label="Coachcode" placeholder="Coachcode"><button type="button" class="btn" id="code-bewaar">Bewaar de coachcode</button><span class="fb" id="code-fb" aria-live="polite"></span></div>';
    var fb = z.querySelector("#coach-fb2");
    z.querySelector("#coach-voegtoe").addEventListener("click", function () {
      var email = z.querySelector("#coach-mail").value.trim().toLowerCase(), naam = z.querySelector("#coach-naam").value.trim();
      if (email.slice(-(DOMEIN.length + 1)) !== "@" + DOMEIN) { fb.textContent = "Vul een geldig schooladres in (…@" + DOMEIN + ")."; return; }
      F.setDoc(ref("coaches/" + email), { naam: naam || email }).then(function () { ververs(doel); }).catch(function (e) { fb.textContent = "Bewaren lukte niet. (" + (e.code || e.message) + ")"; });
    });
    z.querySelectorAll("[data-coachwis]").forEach(function (b) {
      b.addEventListener("click", function () {
        if (!window.confirm("Verwijder coach " + b.dataset.coachwis + "?")) return;
        F.deleteDoc(ref("coaches/" + b.dataset.coachwis)).then(function () { ververs(doel); });
      });
    });
    z.querySelector("#code-bewaar").addEventListener("click", function () {
      var code = z.querySelector("#code-in").value.trim(), out = z.querySelector("#code-fb");
      if (!code) { out.textContent = "Typ eerst de coachcode."; return; }
      out.textContent = "Controleren …";
      /* eerst nagaan of de code de coachfiches echt opent */
      P.testCode(code).then(function (ok) {
        if (!ok) { out.textContent = "Deze code opent de coachfiches niet. Controleer de code."; return; }
        return F.setDoc(ref("instellingen/coachfiches"), { code: code }).then(function () { out.textContent = "Bewaard."; ververs(doel); });
      }).catch(function (e) { out.textContent = "Bewaren lukte niet. (" + (e.code || e.message) + ")"; });
    });
  }
  /* app.js vult P.testCode in (ontsleutelen van coach/coachfiches.js) */
  P.testCode = function () { return Promise.resolve(true); };
})();
