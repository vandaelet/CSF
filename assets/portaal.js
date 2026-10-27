/* =====================================================================
   CSF-PORTAAL: aanmelden met het schoolaccount, digitaal logboek en coachdashboard.
   Werkt enkel als portaal-config.js een Firebase-koppeling bevat.
   - #logboek               overzicht van mijn projecten (leerling)
   - #logboek-<project-id>  logboek van één project: opstart, begin en einde per lesuur, evaluatie en reflectie
   - #dashboard             coaches: overzicht, leerlingen, feedback, export · beheerder: coaches en coachcode
   Gegevens (Firestore): leerlingen/<e-mail> (CSF-leerlingen), klaslijst/<naamsleutel> (alle leerlingen van de school),
   coaches/<e-mail>, beheerders/<e-mail>, logboeken/<e-mail>__<project-id>, feedback/<id>, aanmeldingen/<e-mail>,
   instellingen/coachfiches en instellingen/schooljaar.
   ===================================================================== */
(function () {
  "use strict";
  var P = CSF.portaal = { actief: !!CSF.firebaseConfig };
  var DOMEIN = CSF.domein || "svsl.be", V = "10.12.2";
  var A, F, auth, db, gereed = null, gebruiker = null;
  var rol = { beheerder: false, coach: false, leerling: null, vak: [], fout: null };
  /* instellingen die ook leerlingen lezen: zichtbaarheid, klassen, lijst van vakleerkrachten */
  var INST = { zicht: { jaar: {}, klas: {} }, klassen: [], vakleerkrachten: [] };
  var MIJN = { lbs: [], geladen: false };   /* logboeken van de aangemelde leerling */
  var RES = {};                             /* resultaten per project: leerkaarten, test, controle, quiz */

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
          bepaalRol(u).then(function () { gevraagd = false; if (eerste) { eerste = false; ok(); } else { herteken(); vraagBegin(); } });
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
    MIJN = { lbs: [], geladen: false }; RES = {};
    return Promise.all([veilig(haal("beheerders/" + m)), veilig(haal("coaches/" + m)), veilig(haal("leerlingen/" + m)),
      veilig(lijst("leerlingen", ["vakleerkrachten", "array-contains", m])),
      veilig(haal("instellingen/zichtbaarheid")), veilig(haal("instellingen/klassen")), veilig(haal("instellingen/vakleerkrachten"))]).then(function (r) {
      var z = r[4] && r[4].exists() ? r[4].data() : {};
      INST.zicht = { jaar: z.jaar || {}, klas: z.klas || {} };
      INST.klassen = r[5] && r[5].exists() ? r[5].data().lijst || [] : [];
      INST.vakleerkrachten = r[6] && r[6].exists() ? r[6].data().lijst || [] : [];
      rol.beheerder = !!(r[0] && r[0].exists());
      rol.coach = rol.beheerder || !!(r[1] && r[1].exists());
      rol.coachNaam = r[1] && r[1].exists() ? r[1].data().naam || "" : "";
      var ll = r[2] && r[2].exists() ? r[2].data() : null;
      rol.leerling = ll && ll.actief !== false ? ll : null;
      rol.gestopt = !!(ll && ll.actief === false);
      rol.vak = (r[3] || []).filter(function (x) { return x.actief !== false; });
      /* niet op de CSF-lijst? Bewaar de aanmeldpoging, zodat een coach het adres kan koppelen */
      /* bijhouden op welke dagen de leerling online was (voor het uitroepteken bij de coach) */
      if (rol.leerling) F.setDoc(ref("gezien/" + m), { tijd: nu(), dagen: F.arrayUnion(vandaag()) }, { merge: true }).catch(function () {});
      if (!rol.leerling && !rol.coach && !rol.vak.length) F.setDoc(ref("aanmeldingen/" + m), { naam: gebruiker.displayName || "", tijd: nu() }, { merge: true }).catch(function () {});
      /* het persoonlijke logboek meteen koppelen */
      if (rol.leerling) return lijst("logboeken", ["leerling", "==", m]).then(function (lbs) { MIJN = { lbs: lbs, geladen: true }; }).catch(function () {});
    });
  }
  function aanmelden() {
    var prov = new A.GoogleAuthProvider();
    prov.setCustomParameters({ hd: DOMEIN, prompt: "select_account" });
    return A.signInWithPopup(auth, prov);
  }
  P.afmelden = function () { return A.signOut(auth).then(function () { location.hash = "#start"; }); };

  /* ---------- huidig project, portfolio en zichtbaarheid ---------- */
  function lu(n) { return n + (n === 1 ? " lesuur" : " lesuren"); }
  function lopend(lbs) { return (lbs || []).filter(function (lb) { return lb.status !== "geannuleerd" && !lb.goedgekeurd; })[0] || null; }
  function portfolio(lbs) { return (lbs || []).filter(function (lb) { return lb.goedgekeurd; }); }
  P.huidig = function () { var lb = lopend(MIJN.lbs); return lb ? lb.project : null; };
  /* "oefen" = enkel oefenprojecten · "alle" = enkel het projectenoverzicht · "beide" */
  var STANDAARD = { 1: "beide", 2: "alle" };
  P.zicht = function () {
    if (!P.actief || !rol.leerling) return "beide";
    var L = rol.leerling, j = P.leerjaar();
    return L.zicht || INST.zicht.klas[L.klas] || INST.zicht.jaar[j] || STANDAARD[j] || "beide";
  };
  P.ziet = function (p) { var z = P.zicht(); return p.soort === "vak" ? z !== "oefen" : z !== "alle"; };
  /* hoe ziet de aangemelde gebruiker een projectpagina? "vol" of "fiche" */
  P.projectModus = function (p) {
    if (!P.actief || !rol.leerling) return "vol";
    if (P.huidig() === p.id) return "vol";
    return "fiche";
  };
  P.isLeerling = function () { return !!rol.leerling; };

  /* ---------- aanmeldpoort voor de hele site ---------- */
  P.poortNodig = function (h) {
    if (!P.actief) return false;
    if (h === "logboek" || h.indexOf("logboek-") === 0 || h === "dashboard" || h === "coach") return false;
    if (!P.rolBekend) return true;
    if (!gebruiker || rol.fout) return true;
    if (rol.coach || rol.vak.length) return false;
    if (!rol.leerling) return true;
    if (!rol.leerling.klas) return true;
    return false;
  };
  P.poort = function (app) {
    var ui = CSF.ui, inh;
    if (!P.rolBekend) inh = '<p class="hint">Even geduld …</p>';
    else if (!gebruiker) inh = poort("Welkom bij CSF! Meld je aan met je SVSL-account om de projecten en je logboek te openen.");
    else if (rol.fout === "domein") inh = '<div class="lb-melding rood">Meld je aan met je schoolaccount (@' + esc(DOMEIN) + ').</div>';
    else if (!rol.leerling) inh = '<div class="lb-melding oranje">' + (rol.gestopt ? "Je staat niet meer op de CSF-lijst." : "Je staat nog niet op de CSF-lijst.") + " Vraag je coach om je toe te voegen. Je coach ziet dat je je aanmeldde met <b>" + esc(mail()) + "</b>.</div>";
    else inh = klasKiezen();
    app.innerHTML = '<div class="wrap">' + ui.kop() + '<div class="vel lb-vel"><h2 class="banner">CSF · aanmelden</h2><div id="lb-account"></div><div id="lb-inhoud">' + inh + "</div></div>" + ui.footer() + "</div>";
    koppelLogin(app); accountBalk();
    var kf = app.querySelector("#lb-klas");
    if (kf) kf.addEventListener("submit", function (e) {
      e.preventDefault();
      var k = (kf.querySelector("#klas-keuze").value || "").trim().toUpperCase(), fb = kf.querySelector(".fb");
      if (!/^[1-6]/.test(k)) { fb.textContent = "Kies je klas."; return; }
      fb.textContent = "Bezig met bewaren …";
      F.setDoc(ref("leerlingen/" + mail()), { klas: k }, { merge: true }).then(function () { rol.leerling.klas = k; herteken(); })
        .catch(function (err) { fb.textContent = "Bewaren lukte niet. (" + (err.code || err.message) + ")"; });
    });
  };
  function klasKiezen() {
    var lijstK = INST.klassen.slice().sort(function (a, b) { return a.localeCompare(b, "nl", { numeric: true }); });
    return '<div class="lb-melding">Welkom, <b>' + esc(rol.leerling.naam || gebruiker.displayName || "") + "</b>! Duid één keer je klas aan. Daarna open je de projecten en je logboek.</div>" +
      '<form id="lb-klas" class="lb-form" novalidate><div class="lb-veld"><label for="klas-keuze">Mijn klas</label>' +
      (lijstK.length ? '<select id="klas-keuze"><option value="">– kies je klas –</option>' + lijstK.map(function (k) { return '<option value="' + esc(k) + '">' + esc(k) + "</option>"; }).join("") + "</select>"
        : '<input type="text" id="klas-keuze" placeholder="bv. 1B" maxlength="12">') +
      '</div><div class="lb-acties"><button type="submit" class="btn">Bewaar mijn klas</button><span class="fb" aria-live="polite"></span></div></form>';
  }

  /* ---------- resultaten: leerkaarten gelezen, test, controle en quiz (enkel toevoegen) ---------- */
  P.res = function (pid) { return RES[pid] || null; };
  P.laadRes = function (pid) {
    if (!P.actief || !rol.leerling) return Promise.resolve(null);
    if (RES[pid]) return Promise.resolve(RES[pid]);
    return haal("resultaten/" + mail() + "__" + pid).then(function (s) { RES[pid] = s.exists() ? s.data() : {}; return RES[pid]; }).catch(function () { RES[pid] = {}; return RES[pid]; });
  };
  P.registreer = function (pid, sleutel, waarde) {
    if (!P.actief || !rol.leerling || P.huidig() !== pid) return Promise.resolve(false);
    var r = RES[pid] || (RES[pid] = {});
    if (r[sleutel] != null) return Promise.resolve(false);
    var data = {}; data[sleutel] = Object.assign({ tijd: nu() }, waarde || {}); r[sleutel] = data[sleutel];
    if (!r.leerling) { data.leerling = mail(); data.project = pid; r.leerling = mail(); r.project = pid; }
    return F.setDoc(ref("resultaten/" + mail() + "__" + pid), data, { merge: true }).then(function () { return true; }).catch(function () { delete r[sleutel]; return false; });
  };
  function scores(p, r) {
    r = r || {};
    var nlk = (p.leerkaarten || []).length, lk = 0, t = 0, tg = 0, c = 0, cg = 0, cp = 0, q = 0, qg = 0;
    for (var i = 0; i < nlk; i++) if (r["lk_" + i]) lk++;
    (p.test || []).forEach(function (_, i) { var x = r["t_" + i]; if (x) { t++; if (x.ok) tg++; } });
    (p.controle || []).forEach(function (_, i) { var n = 0, ok = false; for (var k = 1; r["c_" + i + "_" + k]; k++) { n++; if (r["c_" + i + "_" + k].ok) ok = true; } if (n) { c++; cp += n; if (ok) cg++; } });
    (p.quizzen || []).forEach(function (qz, a) { qz.vragen.forEach(function (_, i) { var x = r["q_" + a + "_" + i]; if (x) { q++; if (x.ok) qg++; } }); });
    return { lk: lk, nlk: nlk, t: t, tg: tg, nt: (p.test || []).length, c: c, cg: cg, cp: cp, nc: (p.controle || []).length, q: q, qg: qg,
      nq: (p.quizzen || []).reduce(function (s2, qz) { return s2 + qz.vragen.length; }, 0) };
  }
  function scoreHtml(p, r) {
    var s2 = scores(p, r);
    return '<div class="lb-scores">' +
      '<span class="lb-pill ' + (s2.lk === s2.nlk ? "groen" : "oranje") + '">Leerkaarten ' + s2.lk + "/" + s2.nlk + "</span>" +
      (s2.nt ? ' <span class="lb-pill turkoois">Test jezelf ' + s2.tg + "/" + s2.nt + " juist" + (s2.t < s2.nt ? " (" + s2.t + " beantwoord)" : "") + "</span>" : "") +
      (s2.nc ? ' <span class="lb-pill turkoois">Controle ' + s2.cg + "/" + s2.nc + " juist · " + s2.cp + " pogingen</span>" : "") +
      (s2.nq ? ' <span class="lb-pill turkoois">Quiz ' + s2.qg + "/" + s2.nq + " juist</span>" : "") + "</div>";
  }
  function antwoordenHtml(p, r) {
    r = r || {};
    var rijen = [];
    (p.test || []).forEach(function (q, i) { var x = r["t_" + i]; rijen.push("<tr><td>Test " + (i + 1) + "</td><td>" + q[0] + "</td><td>" + (x ? esc(q[1][x.keuze]) + (x.ok ? " ✓" : " ✗") : "–") + "</td></tr>"); });
    (p.controle || []).forEach(function (q, i) { var a = []; for (var k = 1; r["c_" + i + "_" + k]; k++) a.push(esc(r["c_" + i + "_" + k].antwoord) + (r["c_" + i + "_" + k].ok ? " ✓" : " ✗")); rijen.push("<tr><td>Controle " + (i + 1) + "</td><td>" + q[0] + "</td><td>" + (a.join(" · ") || "–") + "</td></tr>"); });
    (p.quizzen || []).forEach(function (qz, a) { var g = 0, n = 0; qz.vragen.forEach(function (_, i) { var x = r["q_" + a + "_" + i]; if (x) { n++; if (x.ok) g++; } }); if (n) rijen.push("<tr><td>Quiz</td><td>" + esc(qz.titel) + "</td><td>" + g + "/" + qz.vragen.length + " juist</td></tr>"); });
    return rijen.length ? '<table class="lb-tabel lb-antw"><tr><th>Wat</th><th>Vraag</th><th>Antwoord</th></tr>' + rijen.join("") + "</table>" : "";
  }

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
  /* vakleerkrachten: "Voornaam Familienaam" → familienaam.voornaam@svsl.be (familienaam aan elkaar, zonder accenten) */
  function plat(t) { return String(t || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase(); }
  function vkMail(voornaam, familienaam) { return plat(familienaam).replace(/[^a-z0-9-]/g, "") + "." + plat(voornaam).replace(/[^a-z0-9-]/g, "") + "@" + DOMEIN; }
  function vkDelen(naam) { var w = String(naam).trim().split(/\s+/); return { voornaam: w[0] || "", familienaam: w.slice(1).join(" ") }; }
  function vkRegel(r) {
    var dl = r.split(";"), naam = dl[0].trim().replace(/\s+/g, " "), x = vkDelen(naam);
    var e = dl.length > 1 ? String(dl[1]).trim().toLowerCase() : (x.familienaam ? vkMail(x.voornaam, x.familienaam) : "");
    return { naam: naam, voornaam: x.voornaam, familienaam: x.familienaam, email: e };
  }
  function vkFam(v) { return v.familienaam || vkDelen(v.naam).familienaam || v.naam; }
  function vkPast(v, q) {
    q = plat(q).replace(/\s+/g, " ").trim(); if (q.length < 2) return false;
    var f = plat(vkFam(v));
    return f.indexOf(q) === 0 || f.replace(/\s/g, "").indexOf(q.replace(/\s/g, "")) === 0 || f.split(" ").some(function (w) { return w.indexOf(q) === 0; });
  }
  function vkZoeker(label) {
    return '<fieldset class="lb-keuze vk-zoeker" data-verplicht="1"><legend>' + label + ' <span class="lb-ster">*</span></legend>' +
      '<input type="text" id="vk-zoek" autocomplete="off" placeholder="Typ de familienaam" aria-label="Zoek een leerkracht op familienaam">' +
      '<div class="vk-resultaten lb-chips" id="vk-resultaten" aria-live="polite"></div><div class="lb-chips" id="vk-gekozen"></div></fieldset>';
  }
  function vkKoppel(form) {
    var zoek = form.querySelector("#vk-zoek"), res = form.querySelector("#vk-resultaten"), gek = form.querySelector("#vk-gekozen");
    if (!zoek) return;
    function gekozen() { return [].map.call(gek.querySelectorAll("input"), function (i) { return i.value; }); }
    function toon() {
      var q = zoek.value, al = gekozen(), hits = INST.vakleerkrachten.filter(function (v) { return al.indexOf(v.email) < 0 && vkPast(v, q); }).slice(0, 8);
      res.innerHTML = plat(q).trim().length < 2 ? "" : hits.length ? hits.map(function (v) { return '<button type="button" class="lb-chip vk-hit" data-mail="' + esc(v.email) + '">+ ' + esc(v.naam) + "</button>"; }).join("")
        : '<span class="hint">Geen leerkracht gevonden. Controleer de familienaam.</span>';
    }
    zoek.addEventListener("input", toon);
    zoek.addEventListener("keydown", function (e) { if (e.key === "Enter") { e.preventDefault(); var b = res.querySelector(".vk-hit"); if (b) b.click(); } });
    res.addEventListener("click", function (e) {
      var b = e.target.closest(".vk-hit"); if (!b) return;
      var v = INST.vakleerkrachten.filter(function (x) { return x.email === b.dataset.mail; })[0]; if (!v) return;
      gek.insertAdjacentHTML("beforeend", '<label class="lb-chip vk-gekozen" title="Klik om te verwijderen"><input type="checkbox" name="vkLijst" value="' + esc(v.email) + '" checked><span>' + esc(v.naam) + " ✕</span></label>");
      zoek.value = ""; toon(); zoek.focus();
    });
    gek.addEventListener("change", function (e) { if (!e.target.checked) { e.target.closest("label").remove(); toon(); } });
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
    melding(doel, (rol.gestopt ? "Je staat niet meer op de CSF-lijst." : "Je staat nog niet op de CSF-lijst.") + " Vraag je coach om je toe te voegen. Je coach ziet dat je je aanmeldde met <b>" + esc(mail()) + "</b>. Daarna kan je je logboek invullen.", "oranje");
  }
  function hub(doel) {
    if (!rol.leerling) return nietOpLijst(doel);
    Promise.all([lijst("logboeken", ["leerling", "==", mail()]), lijst("feedback", ["leerling", "==", mail()], ["gelezen", "==", false]), lijst("vragen", ["leerling", "==", mail()]).catch(function () { return []; })]).then(function (r) {
      var lbs = r[0], fbOpen = r[1].length, antw = r[2].filter(function (v) { return !v.open && !v.gelezen; });
      MIJN = { lbs: lbs, geladen: true };
      var hu = lopend(lbs), pf = portfolio(lbs), hp = hu ? project(hu.project) : null;
      return (hp ? P.laadRes(hp.id) : Promise.resolve(null)).then(function (res) {
        var st = hu ? status(hu, rol.leerling) : null;
        var gedaan = lbs.filter(function (lb) { return lb.status !== "geannuleerd"; }).map(function (lb) { return lb.project; });
        var opties = CSF.projecten.filter(function (p) { return P.ziet(p) && gedaan.indexOf(p.id) < 0 && !CSF.ui.isFiche(p); }).sort(function (a, b) { return (a.soort === "vak") - (b.soort === "vak") || CSF.ui.label(a).localeCompare(CSF.ui.label(b), "nl"); }).map(function (p) {
          return '<option value="' + esc(p.id) + '">' + esc((p.soort === "vak" ? CSF.ui.label(p) : "oefenproject") + " · " + p.naam.split(":")[0]) + "</option>"; }).join("");
        var vergeten = hu && st[0] === "rood";
        doel.innerHTML = (vergeten ? '<div class="lb-melding rood"><b>Vergeet niet tijdig je logboek aan te vullen.</b> Vul eerst het einde van je vorige lesuur in.</div>' : "") +
          (antw.length ? '<div class="lb-melding groen">Je coach beantwoordde je vraag. Open <a href="#logboek-' + esc(antw[0].project) + '">je project</a> om het antwoord te lezen.</div>' : "") +
          (fbOpen ? '<div class="lb-melding oranje">Je hebt ' + fbOpen + " nieuwe feedback van je coach. Open je project om ze te lezen.</div>" : "") +
          "<p>Coach: <b>" + esc(rol.leerling.coachNaam || "nog niet toegewezen") + "</b> · Klas: <b>" + esc(rol.leerling.klas || "–") + "</b></p>" +
          "<h3>Mijn project</h3>" +
          (hu ? '<a class="lb-kaart lb-huidig" href="#logboek-' + esc(hu.project) + '"><b>' + esc(hu.projectnaam) + '</b><span class="hint">' + lu((hu.lessen || []).length) + " · gestart op " + datum(hu.gestart) + '</span><span class="lb-pill ' + st[0] + '">' + st[1] + "</span>" +
              (hp ? scoreHtml(hp, res) : "") + "</a>" +
              (hp ? '<p><a class="btn licht" href="#p-' + esc(hp.id) + '">Naar de projectpagina</a></p>' : "") +
              (hu.status === "afgerond" ? '<p class="hint">Je kan een nieuw project kiezen zodra je coach dit project goedkeurt.</p>' : "")
            : '<p>Je hebt nog geen project. Kies hieronder je project. Daarna is dit het enige project waaraan je werkt, tot je coach het goedkeurt.</p><div class="crij"><select id="lb-nieuw" aria-label="Kies een project">' + opties + '</select><button type="button" class="btn" id="lb-start">Kies dit project</button></div>') +
          "<h3>Mijn portfolio</h3>" + (pf.length ? '<div class="lb-kaarten">' + pf.map(function (lb) {
            return '<a class="lb-kaart" href="#logboek-' + esc(lb.project) + '"><b>' + esc(lb.projectnaam) + '</b><span class="hint">' + lu((lb.lessen || []).length) + " · goedgekeurd op " + datum(lb.goedgekeurdOp) + '</span><span class="lb-pill groen">goedgekeurd</span></a>'; }).join("") + "</div>"
            : '<p class="hint">Hier komen je afgewerkte en goedgekeurde projecten.</p>');
        var b2 = doel.querySelector("#lb-start");
        if (b2) b2.addEventListener("click", function () { location.hash = "#logboek-" + doel.querySelector("#lb-nieuw").value; });
      });
    }).catch(function (e) { melding(doel, "Je logboek kon niet laden. (" + esc(e && e.message) + ")", "rood"); });
  }

  /* ---------- leerling: logboek van één project ---------- */
  function logboek(doel, pid) {
    var p = project(pid);
    if (!p) return melding(doel, "Dit project bestaat niet. Kies een project in <a href=\"#logboek\">Mijn logboek</a>.", "rood");
    if (!rol.leerling) return nietOpLijst(doel);
    if (doel.id !== "lb-hoofd") {
      doel.innerHTML = '<div id="lb-hoofd"></div><div id="lb-vragen" class="lb-vragen"></div>';
      vragenBlok(doel.querySelector("#lb-vragen"), p);
      doel = doel.querySelector("#lb-hoofd");
    }
    var id = mail() + "__" + pid;
    Promise.all([haal("logboeken/" + id), lijst("feedback", ["leerling", "==", mail()], ["gelezen", "==", false]), lijst("feedback", ["leerling", "==", mail()]), lijst("logboeken", ["leerling", "==", mail()]), P.laadRes(pid)]).then(function (r) {
      var lb = r[0].exists() ? r[0].data() : null, open = r[1], alle = r[2].filter(function (f) { return f.project === pid; });
      MIJN = { lbs: r[3], geladen: true };
      var hu = lopend(r[3]);
      var kopje = '<p class="lb-projectnaam">' + esc(p.naam) + "</p>" + (lb && lb.status !== "geannuleerd" ? scoreHtml(p, r[4]) : "");
      if (lb && lb.status === "geannuleerd") lb = null;
      if (!lb && hu && hu.project !== pid) return melding(doel, "Je werkt al aan het project <b>" + esc(hu.projectnaam) + '</b>. Je kan pas een nieuw project kiezen als je coach dat project goedkeurt. <a href="#logboek">Naar mijn logboek</a>.', "oranje");
      if (!lb && !P.ziet(p)) return melding(doel, 'Dit project staat niet open voor jou. Kies een project in <a href="#logboek">Mijn logboek</a>.', "oranje");
      if (open.length) return feedbackPoort(doel, open, kopje);
      if (!lb) return opstart(doel, p, id, kopje);
      var ls = lb.lessen || [], laatste = ls[ls.length - 1], n = ls.length;
      var geschiedenis = (ls.length ? '<details class="lb-hist"><summary>Mijn ingevulde lesuren (' + ls.length + ")</summary>" + ls.slice().reverse().map(lesHtml).join("") + "</details>" : "") +
        '<details class="lb-hist"><summary>Mijn opstart</summary>' + opstartHtml(lb.opstart || {}) + "</details>" +
        (alle.length ? '<details class="lb-hist"><summary>Feedback van mijn coach (' + alle.length + ")</summary>" + feedbackLijst(alle) + "</details>" : "");
      if (lb.status === "afgerond") {
        doel.innerHTML = kopje + (lb.goedgekeurd ? '<div class="lb-melding groen">Je coach keurde dit project goed op ' + datum(lb.goedgekeurdOp) + '. Het staat in je portfolio. Proficiat!</div>' : '<div class="lb-melding groen">Je project is afgerond. Proficiat! Je coach moet het nog goedkeuren. Daarna kies je een nieuw project.</div>') + '<h3>Evaluatie en reflectie</h3>' + afsluitingHtml(lb.afsluiting || {}) + geschiedenis;
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
        (INST.vakleerkrachten.length ? vkZoeker("Ik ga uit de les van (typ de familienaam en klik op de leerkracht; meer dan één mag)")
          : veld("vakleerkracht", "Ik ga uit de les van mevrouw/meneer", { verplicht: true })) +
        keuze("dag", "Op welke dag?", DAGEN, { verplicht: true }) + keuze("lesuur", "Tijdens welk lesuur?", LESUREN, { verplicht: true }) +
        '<p class="lb-vast">Mijn CSF-coach: <b>' + esc(L.coachNaam || "nog niet toegewezen") + "</b> · Project: <b>" + esc(p.naam) + "</b></p>" +
        veld("voorzieneTijd", "Voorziene tijd", { waarde: p.tijd, verplicht: true }) +
        veld("motivatie", "Motivatie: ik koos voor dit project omdat …", { lang: true, verplicht: true }) +
        crit + keuze("evaluatieGelezen", "Afgesproken evaluatie", ["Ik heb de afgesproken evaluatie gelezen en genoteerd."], { meer: true, verplicht: true }) +
        veld("evaluatieExtra", "Extra afspraken met mijn coach", { lang: true, rijen: 2 }) +
        veld("link", "Link naar mijn project (als je online werkt)", { hint: "Zet de link openbaar of geef je coach toegang." }),
        "Bewaar mijn opstart");
    vkKoppel(doel.querySelector("#lb-opstart"));
    bij(doel.querySelector("#lb-opstart"), function (d) {
      d.coach = L.coachNaam || "";
      var kijkers = L.vakleerkrachten || [], eerst = Promise.resolve();
      if (d.vkLijst) {
        var gekozen = INST.vakleerkrachten.filter(function (v) { return d.vkLijst.indexOf(v.email) >= 0; });
        d.vakleerkracht = gekozen.map(function (v) { return v.naam; }).join(", ");
        kijkers = gekozen.map(function (v) { return String(v.email || "").toLowerCase(); }).filter(Boolean);
        delete d.vkLijst;
        eerst = F.setDoc(ref("leerlingen/" + mail()), { vakleerkrachten: kijkers }, { merge: true }).then(function () { L.vakleerkrachten = kijkers; });
      }
      var data = { leerling: mail(), naam: gebruiker.displayName || L.naam || "", project: p.id, projectnaam: p.naam, gestart: nu(), status: "bezig", opstart: d, lessen: [], kijkers: kijkers };
      return eerst.then(function () { return F.setDoc(ref("logboeken/" + id), data); }).then(function () { MIJN.lbs = MIJN.lbs.filter(function (x) { return x.project !== p.id; }).concat([data]); });
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
      var hu = lopend(MIJN.lbs);
      if (!hu || hu.project !== p.id) {
        var inPf = portfolio(MIJN.lbs).some(function (x) { return x.project === p.id; });
        vak.innerHTML = inPf ? '<p><b>Dit project staat in je portfolio.</b> <a href="#logboek-' + esc(p.id) + '">Bekijk je logboek</a>.</p>'
          : hu ? '<p><b>Je werkt aan ‘' + esc(String(hu.projectnaam).split(":")[0]) + '’.</b> Van andere projecten zie je enkel de projectfiche. <a href="#p-' + esc(hu.project) + '">Naar mijn project</a>.</p>'
          : P.ziet(p) ? '<p><b>Wil je dit project doen?</b> Kies het in je logboek. Daarna openen de leerkaarten, de leidraad en de werkbundel.</p><a class="btn" href="#logboek-' + esc(p.id) + '">Kies dit project</a>'
          : '<p>Dit project staat niet open voor jou.</p>';
        return;
      }
      haal("logboeken/" + mail() + "__" + p.id).then(function (s) {
        var lb = s.exists() ? s.data() : null, ls = lb ? lb.lessen || [] : [], laatste = ls[ls.length - 1];
        var tekst = !lb ? "Je logboek voor dit project is nog niet gestart." : lb.status === "afgerond" ? "Je project is afgerond." :
          laatste && !laatste.einde ? "Lesuur " + laatste.nr + " loopt. Vul op het einde van het lesuur je logboek in." : "Vul bij het begin van het lesuur je logboek in. Daarna verschijnt het stappenplan.";
        var bezig = lb && lb.status !== "afgerond" && laatste && !laatste.einde;
        vak.innerHTML = "<p><b>Mijn logboek.</b> " + tekst + "</p>" + (bezig ? '<a class="btn" href="#logboek-' + esc(p.id) + '">Logboek einde les invullen</a>' : '<a class="btn" href="#logboek-' + esc(p.id) + '">Open mijn logboek</a>');
        if (bezig) { var z = document.createElement("a"); z.className = "btn lb-zweef"; z.href = "#logboek-" + p.id; z.textContent = "Logboek einde les invullen"; blok.appendChild(z); }
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

  /* ---------- bij het aanmelden: vul je begin-logboek in? (één keer per dag) ---------- */
  var gevraagd = false;
  function vraagBegin() {
    if (gevraagd || !rol.leerling || !rol.leerling.klas || document.querySelector(".lb-modaal")) return;
    if (/^#?logboek/.test(location.hash)) return;
    gevraagd = true;
    var dag = vandaag();
    Promise.all([haal("gezien/" + mail()).catch(function () { return null; }), lijst("logboeken", ["leerling", "==", mail()])]).then(function (r) {
      var g = r[0] && r[0].exists() ? r[0].data() : {}, lbs = r[1];
      if ((g.antwoorden || {})[dag]) return;
      var lopend = lbs.filter(function (lb) { return lb.status !== "afgerond" && lb.status !== "geannuleerd"; });
      if (!lopend.length) return;   /* nog geen project: de leerling kiest eerst een project in zijn logboek */
      if (lopend.some(function (lb) { return (lb.lessen || []).some(function (l) { return l.datum === dag; }); })) return;
      var doel = lopend.length === 1 ? "#logboek-" + lopend[0].project : "#logboek";
      var m = document.createElement("div");
      m.className = "lb-modaal";
      m.innerHTML = '<div class="lb-modaalvak" role="dialog" aria-modal="true" aria-labelledby="lb-mtitel"><h2 id="lb-mtitel">Vul je logboek in</h2>' +
        "<p>Heb je vandaag CSF? Vul dan nu het begin van je logboek in." + (lopend.length === 1 ? " Je project: <b>" + esc(String(lopend[0].projectnaam).split(":")[0]) + "</b>." : "") + "</p>" +
        '<div class="lb-acties"><button type="button" class="btn" id="lb-m-ja">Ja, ik vul het nu in</button><button type="button" class="btn licht" id="lb-m-nee">Neen, ik moet mijn logboek niet aanvullen deze les</button></div></div>';
      document.body.appendChild(m);
      var antw = function (w) { var a = {}; a[dag] = w; return F.setDoc(ref("gezien/" + mail()), { antwoorden: a, tijd: nu() }, { merge: true }).catch(function () {}); };
      var sluit = function () { m.remove(); };
      m.querySelector("#lb-m-ja").addEventListener("click", function () { antw("ja"); sluit(); location.hash = doel; });
      m.querySelector("#lb-m-nee").addEventListener("click", function () { antw("nee"); sluit(); });
      m.querySelector("#lb-m-ja").focus();
    }).catch(function () {});
  }

  /* ---------- leerling: vraag aan de coach (onderaan het projectvenster) ---------- */
  function vragenBlok(el, p) {
    lijst("vragen", ["leerling", "==", mail()]).then(function (alle) {
      var mijn = alle.filter(function (v) { return v.project === p.id; }).sort(function (a, b) { return String(b.datum).localeCompare(String(a.datum)); });
      el.innerHTML = "<h3>Vraag aan je coach</h3>" + (mijn.length ? '<div class="lb-feedback">' + mijn.map(function (v) {
        return '<div class="lb-fbitem"><p class="hint">Jouw vraag · ' + datum(v.datum) + " · " + (v.open ? '<span class="lb-pill oranje">wacht op antwoord</span>' : '<span class="lb-pill groen">beantwoord</span>') + "</p><p>" + esc(v.tekst).replace(/\n/g, "<br>") + "</p>" +
          (v.open ? "" : '<p class="lb-antwoord"><b>' + esc(v.antwoordDoor || "Je coach") + "</b> · " + datum(v.antwoordOp) + "<br>" + esc(v.antwoord || "").replace(/\n/g, "<br>") + "</p>") + "</div>";
      }).join("") + "</div>" : "") +
        '<form id="lb-vraag" class="lb-form" novalidate><div class="lb-veld"><label for="lb-vraag-tekst">Stel een vraag over dit project. Je coach ziet ze in zijn dashboard.</label><textarea id="lb-vraag-tekst" rows="3" maxlength="1000"></textarea></div>' +
        '<div class="lb-acties"><button type="submit" class="btn">Verstuur je vraag</button><span class="fb" aria-live="polite"></span></div></form>';
      /* beantwoorde vragen zijn nu gelezen */
      mijn.filter(function (v) { return !v.open && !v.gelezen; }).forEach(function (v) { F.updateDoc(ref("vragen/" + v._id), { gelezen: true }).catch(function () {}); });
      el.querySelector("#lb-vraag").addEventListener("submit", function (e) {
        e.preventDefault();
        var t = el.querySelector("#lb-vraag-tekst").value.trim(), fb = el.querySelector("#lb-vraag .fb");
        if (!t) { fb.textContent = "Typ eerst je vraag."; return; }
        fb.textContent = "Bezig met versturen …";
        var ll = rol.leerling;
        F.setDoc(ref("vragen/" + nieuwId()), { leerling: mail(), naam: ll.naam || (gebruiker.displayName || ""), klas: ll.klas || "", coach: ll.coach || "", coachNaam: ll.coachNaam || "",
          project: p.id, projectnaam: p.naam, tekst: t, datum: nu(), open: true, antwoord: "", gelezen: false })
          .then(function () { vragenBlok(el, p); }).catch(function (err) { fb.textContent = "Versturen lukte niet. (" + (err.code || err.message) + ")"; });
      });
    }).catch(function () { el.innerHTML = ""; });
  }

  /* ---------- status van een logboek ---------- */
  function status(lb, ll) {
    if (!lb) return ["grijs", "Nog niet gestart"];
    if (lb.status === "afgerond") return lb.goedgekeurd ? ["groen", "Goedgekeurd"] : ["oranje", "Afgerond · wacht op goedkeuring"];
    var ls = lb.lessen || [], l = ls[ls.length - 1];
    if (!l) return ["turkoois", "Opstart ingevuld"];
    if (!l.einde) return l.datum >= vandaag() ? ["oranje", "Lesuur " + l.nr + " bezig"]
      : ll && ll.herinnering === false ? ["oranje", "Einde-logboek niet ingevuld (lesuur " + l.nr + ")"] : ["rood", "Einde-logboek ontbreekt (lesuur " + l.nr + ")"];
    return ["groen", "In orde · " + lu(ls.length)];
  }
  var RANG = { rood: 0, oranje: 1, turkoois: 2, groen: 3, grijs: 4 };

  /* ---------- dashboard ---------- */
  /* vrije dagen schooljaar 2026-2027 (Vlaanderen), voorstel voor de herinneringen */
  var VRIJ_2026 = "2026-11-02 2026-11-08\n2026-11-11\n2026-12-21 2027-01-03\n2027-02-08 2027-02-14\n2027-03-29 2027-04-11\n2027-05-06 2027-05-07\n2027-05-17\n2027-07-01 2027-08-31";
  var D = { tab: "overzicht", coachFilter: "alle", zoek: "", open: null, data: null };
  function dashboard(doel) {
    if (!rol.coach && !rol.vak.length) {
      return melding(doel, "Het dashboard is enkel voor CSF-coaches en vakleerkrachten van CSF-leerlingen." + (rol.leerling ? ' Ga naar <a href="#logboek">Mijn logboek</a>.' : ""), "oranje");
    }
    var leeg = Promise.resolve([]), niets = Promise.resolve(null), opt = function (p) { return p.catch(function () { return null; }); };
    /* nieuwere collecties: lukt het lezen niet (oude regels), dan laadt de rest van het dashboard toch */
    var geweigerd = [], zacht = function (naam) { return lijst(naam).catch(function () { geweigerd.push(naam); return []; }); };
    var taken = rol.coach
      ? [lijst("leerlingen"), lijst("logboeken"), lijst("feedback"), lijst("coaches"), rol.beheerder ? opt(haal("instellingen/coachfiches")) : niets,
         zacht("klaslijst"), zacht("aanmeldingen"), opt(haal("instellingen/schooljaar")), rol.beheerder ? opt(haal("instellingen/herinnering")) : niets, zacht("gezien"), zacht("vragen"), zacht("resultaten")]
      : [Promise.resolve(rol.vak.map(function (x) { return x; })), lijst("logboeken", ["kijkers", "array-contains", mail()]), leeg, leeg, niets, leeg, leeg, niets, niets, leeg, leeg, leeg];
    Promise.all(taken).then(function (r) {
      D.data = { leerlingen: r[0], logboeken: r[1], feedback: r[2], coaches: r[3], codeIngesteld: !!(r[4] && r[4].exists && r[4].exists() && r[4].data().code),
        klaslijst: r[5], aanmeldingen: r[6], schooljaar: r[7] && r[7].exists && r[7].exists() ? r[7].data().jaar || "" : "",
        herinnering: r[8] && r[8].exists && r[8].exists() ? r[8].data() : { aan: false, vrij: VRIJ_2026 }, gezien: r[9], vragen: r[10], resultaten: r[11] || [] };
      /* een coach ziet eerst zijn eigen leerlingen */
      if (!D.filterGezet) { D.filterGezet = true; if (rol.coach && r[0].some(function (l) { return l.coach === mail() && l.actief !== false; })) D.coachFilter = mail(); }
      if (!rol.coach) D.tab = "overzicht";
      D.geweigerd = geweigerd; D.data.zicht = { jaar: Object.assign({}, INST.zicht.jaar), klas: Object.assign({}, INST.zicht.klas) }; D.data.vakleerkrachtenLijst = INST.vakleerkrachten.slice();
      tekenDashboard(doel);
    }).catch(function (e) { melding(doel, "Het dashboard kon niet laden. (" + esc(e && (e.code || e.message)) + ")", "rood"); });
  }
  function ververs(doel) { dashboard(doel); }
  function leerlingId(l) { return l._id; }
  function rijen() {
    var d = D.data, perLl = {};
    d.logboeken.forEach(function (lb) { (perLl[lb.leerling] = perLl[lb.leerling] || []).push(lb); });
    return d.leerlingen.filter(function (l) { return l.actief !== false; }).map(function (l) {
      var lbs = (perLl[l._id] || []).filter(function (lb) { return lb.status !== "geannuleerd"; }).sort(function (a, b) { return (!!a.goedgekeurd) - (!!b.goedgekeurd) || String(b.gestart).localeCompare(String(a.gestart)); });
      var hoofd = lbs[0] || null, st = status(hoofd, l);
      var laatste = hoofd && (hoofd.lessen || []).length ? hoofd.lessen[hoofd.lessen.length - 1].datum : hoofd ? hoofd.gestart : "";
      var fbOpen = d.feedback.filter(function (f) { return f.leerling === l._id && !f.gelezen; }).length;
      var vragen = d.vragen.filter(function (v) { return v.leerling === l._id && v.open; }).length;
      return { l: l, lbs: lbs, hoofd: hoofd, st: st, laatste: laatste, fbOpen: fbOpen, vragen: vragen, teken: teken(l, hoofd, st) };
    });
  }
  /* ✓ = logboek in orde · ! = online geweest op de CSF-dag zonder logboek, of einde-logboek ontbreekt */
  var DAGCODE = ["", "MA", "DI", "WOE", "DO", "VRIJ", ""];
  function teken(l, lb, st) {
    var gz = D.data.gezien.filter(function (x) { return x._id === l._id; })[0] || {}, nee = gz.antwoorden || {};
    var g = (gz.dagen || []).filter(function (d) { return nee[d] !== "nee"; });
    var ls = lb ? lb.lessen || [] : [], laatste = ls[ls.length - 1], csfDag = lb && lb.opstart ? lb.opstart.dag : "";
    var sinds = lb ? String(lb.gestart || "").slice(0, 10) : "", datums = ls.map(function (x) { return x.datum; });
    var bezoek = g.filter(function (d) { return d >= sinds && (!csfDag || DAGCODE[new Date(d + "T12:00:00").getDay()] === csfDag); }).sort().pop();
    if (lb && lb.status === "afgerond") return ["ok", "Project afgerond"];
    if (st[0] === "rood") return ["uit", st[1]];
    if (bezoek && datums.indexOf(bezoek) < 0 && (!laatste || bezoek > laatste.datum))
      return ["uit", "Online geweest op " + datum(bezoek) + " zonder logboek"];
    if (laatste && laatste.einde) return ["ok", "Logboek ingevuld op " + datum(laatste.datum)];
    return ["", ""];
  }
  function tekenHtml(t) { return t[0] === "ok" ? '<span class="lb-teken ok" title="' + esc(t[1]) + '" aria-label="' + esc(t[1]) + '">✓</span>' : t[0] === "uit" ? '<span class="lb-teken uit" title="' + esc(t[1]) + '" aria-label="' + esc(t[1]) + '">!</span>' : ""; }

  function tekenDashboard(doel) {
    var nVragen = D.data.vragen.filter(function (v) { return v.open; }).length;
    var tabs = rol.coach ? [["overzicht", "Overzicht"], ["vragen", "Open vragen" + (nVragen ? " (" + nVragen + ")" : "")], ["leerlingen", "CSF-leerlingen"], ["klaslijst", "Klaslijsten"], ["zicht", "Zichtbaarheid"], ["projecten", "Projecten"]].concat(rol.beheerder ? [["beheer", "Coaches en instellingen"]] : []) : [["overzicht", "Mijn CSF-leerlingen"]];
    doel.innerHTML = (D.geweigerd && D.geweigerd.length ? '<div class="lb-melding rood"><b>De toegangsregels in Firebase zijn niet up-to-date.</b> ' + (rol.beheerder ? "Plak de volledige inhoud van <code>firestore.rules</code> uit GitHub in Firebase → Firestore Database → Rules en klik op Publish." : "Vraag de beheerder om de regels opnieuw te publiceren.") + ' <span class="hint">(geen toegang tot: ' + esc(D.geweigerd.join(", ")) + ")</span></div>" : "") +
      '<div class="chips lb-tabs" role="tablist">' + tabs.map(function (t) { return '<button type="button" class="chip" role="tab" data-tab="' + t[0] + '" aria-pressed="' + (D.tab === t[0]) + '">' + t[1] + "</button>"; }).join("") +
      '</div><div id="db-inhoud"></div>';
    doel.querySelectorAll("[data-tab]").forEach(function (b) { b.addEventListener("click", function () { D.tab = b.dataset.tab; D.open = null; tekenDashboard(doel); }); });
    var z = doel.querySelector("#db-inhoud");
    if (D.tab === "leerlingen" && rol.coach) return tabLeerlingen(z, doel);
    if (D.tab === "klaslijst" && rol.coach) return tabKlaslijst(z, doel);
    if (D.tab === "vragen" && rol.coach) return tabVragen(z, doel);
    if (D.tab === "projecten" && rol.coach) return tabProjecten(z, doel);
    if (D.tab === "zicht" && rol.coach) return tabZicht(z, doel);
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
    var uit = r.filter(function (x) { return x.teken[0] === "uit"; }).length;
    z.innerHTML = '<p class="hint lb-legende"><span class="lb-item"><span class="lb-teken ok">✓</span> logboek in orde</span><span class="lb-item"><span class="lb-teken uit">!</span> online geweest op de CSF-dag zonder logboek, of einde-logboek ontbreekt</span>' + (uit ? "<b>" + uit + " met een uitroepteken</b>" : "") + "</p>" +
      (rood ? '<div class="lb-melding rood">' + rood + (rood > 1 ? " leerlingen hebben" : " leerling heeft") + " een ontbrekend logboek.</div>" : "") + filters +
      (rol.coach ? '<div class="crij lb-export"><button type="button" class="btn licht lb-klein" id="db-kopieer">Kopieer overzicht voor Google Sheets</button><button type="button" class="btn licht lb-klein" id="db-csv">Download overzicht (CSV)</button><button type="button" class="btn licht lb-klein" id="db-csv-les">Download alle lesuren (CSV)</button><span class="fb" id="db-exportfb" aria-live="polite"></span></div>' : "") +
      '<div class="lb-tabelwrap"><table class="lb-overzicht"><thead><tr><th><span class="sr">Teken</span></th><th>Leerling</th><th>Klas</th><th>Coach</th><th>Project</th><th>Lesuren</th><th>Laatste logboek</th><th>Status</th><th>Feedback en vragen</th></tr></thead><tbody>' +
      (r.length ? r.map(function (x) {
        return '<tr class="db-rij' + (D.open === x.l._id ? " open" : "") + '" data-ll="' + esc(x.l._id) + '" tabindex="0"><td class="lb-tekencel">' + tekenHtml(x.teken) + '</td><td><b>' + esc(x.l.naam || x.l._id) + '</b><br><span class="hint">' + esc(x.l._id) + "</span></td><td>" + esc(x.l.klas || "–") +
          "</td><td>" + esc(x.l.coachNaam || "–") + "</td><td>" + (x.hoofd ? esc(x.hoofd.projectnaam.split(":")[0]) : "–") + "</td><td>" + (x.hoofd ? (x.hoofd.lessen || []).length : 0) +
          "</td><td>" + datum(x.laatste) + '</td><td><span class="lb-pill ' + x.st[0] + '">' + esc(x.st[1]) + "</span></td><td>" + (x.fbOpen ? '<span class="lb-pill oranje">' + x.fbOpen + " ongelezen</span>" : "") + (x.vragen ? ' <span class="lb-pill turkoois">' + x.vragen + (x.vragen > 1 ? " vragen" : " vraag") + "</span>" : "") + "</td></tr>";
      }).join("") : '<tr><td colspan="9" class="hint">Geen leerlingen gevonden.' + (rol.coach ? " Voeg leerlingen toe in het tabblad Leerlingen." : "") + "</td></tr>") +
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
  /* ---------- open vragen van leerlingen ---------- */
  function tabVragen(z, doel) {
    var d = D.data, eigen = D.vraagFilter !== "alle";
    var open = d.vragen.filter(function (v) { return v.open && (!eigen || v.coach === mail()); }).sort(function (a, b) { return String(a.datum).localeCompare(String(b.datum)); });
    var klaar = d.vragen.filter(function (v) { return !v.open && (!eigen || v.coach === mail()); }).sort(function (a, b) { return String(b.antwoordOp).localeCompare(String(a.antwoordOp)); }).slice(0, 20);
    var kop = function (v) { return "<p><b>" + esc(v.naam || v.leerling) + '</b> <span class="hint">· ' + esc(v.klas || "") + " · " + esc(String(v.projectnaam || v.project).split(":")[0]) + " · " + datum(v.datum) + " · coach: " + esc(v.coachNaam || "–") + "</span></p>"; };
    z.innerHTML = '<div class="crij lb-filters"><label class="lb-chip" for="vr-eigen"><input type="checkbox" id="vr-eigen"' + (eigen ? " checked" : "") + "><span>Enkel mijn leerlingen</span></label></div>" +
      (open.length ? open.map(function (v) {
        return '<div class="lb-vraagkaart" data-v="' + esc(v._id) + '">' + kop(v) + '<p class="lb-vraagtekst">' + esc(v.tekst).replace(/\n/g, "<br>") + "</p>" +
          '<div class="lb-veld"><label for="vr-antw-' + esc(v._id) + '">Antwoord</label><textarea id="vr-antw-' + esc(v._id) + '" rows="3"></textarea></div>' +
          '<div class="lb-acties"><button type="button" class="btn" data-antw="1">Verstuur antwoord</button><span class="fb" aria-live="polite"></span></div></div>';
      }).join("") : '<div class="lb-melding groen">Er zijn geen open vragen.</div>') +
      (klaar.length ? '<details class="lb-hist"><summary>Beantwoorde vragen (' + klaar.length + ")</summary>" + klaar.map(function (v) {
        return '<div class="lb-vraagkaart">' + kop(v) + '<p class="lb-vraagtekst">' + esc(v.tekst).replace(/\n/g, "<br>") + '</p><p class="lb-antwoord"><b>' + esc(v.antwoordDoor || "") + "</b> · " + datum(v.antwoordOp) + (v.gelezen ? " · gelezen" : " · nog niet gelezen") + "<br>" + esc(v.antwoord || "").replace(/\n/g, "<br>") + "</p></div>";
      }).join("") + "</details>" : "");
    z.querySelector("#vr-eigen").addEventListener("change", function (e) { D.vraagFilter = e.target.checked ? "eigen" : "alle"; tabVragen(z, doel); });
    z.querySelectorAll("[data-antw]").forEach(function (b) {
      b.addEventListener("click", function () {
        var kaart = b.closest(".lb-vraagkaart"), id = kaart.dataset.v, t = kaart.querySelector("textarea").value.trim(), fb = kaart.querySelector(".fb");
        if (!t) { fb.textContent = "Typ eerst je antwoord."; return; }
        var p = { open: false, antwoord: t, antwoordDoor: rol.coachNaam || (gebruiker.displayName || mail()), antwoordOp: nu(), gelezen: false };
        F.updateDoc(ref("vragen/" + id), p).then(function () { lokaal("vragen", id, p); tekenDashboard(doel); })
          .catch(function (err) { fb.textContent = "Versturen lukte niet. (" + (err.code || err.message) + ")"; });
      });
    });
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
    var ant = (d.gezien.filter(function (x) { return x._id === l._id; })[0] || {}).antwoorden || {};
    var neeDagen = Object.keys(ant).filter(function (k) { return ant[k] === "nee"; }).sort();
    el.innerHTML = '<div class="lb-detail"><h3>' + esc(l.naam || l._id) + ' <span class="hint">· ' + esc(l.klas || "") + " · coach: " + esc(l.coachNaam || "–") + "</span></h3>" +
      (neeDagen.length ? '<p class="hint">Volgens de leerling geen logboek nodig op: ' + neeDagen.map(datum).join(", ") + ".</p>" : "") +
      (lbs.length ? lbs.map(function (lb) {
        var st = status(lb, l), pr = project(lb.project), res = (d.resultaten.filter(function (x) { return x._id === lb.leerling + "__" + lb.project; })[0]) || {};
        return '<details class="lb-hist" open><summary>' + esc(lb.projectnaam) + ' <span class="lb-pill ' + st[0] + '">' + esc(st[1]) + "</span></summary>" +
          (rol.coach ? '<div class="lb-acties lb-goedkeur" data-lb="' + esc(lb.leerling + "__" + lb.project) + '">' + (lb.goedgekeurd ? '<span class="lb-pill groen">goedgekeurd door ' + esc(lb.goedgekeurdDoor || "") + " op " + datum(lb.goedgekeurdOp) + "</span>"
            : '<button type="button" class="btn lb-klein" data-keur="1">Keur project goed</button>') + ' <button type="button" class="btn donker lb-klein" data-annuleer="1">' + (lb.goedgekeurd ? "Haal uit portfolio" : "Annuleer: leerling kiest opnieuw") + '</button><span class="fb" aria-live="polite"></span></div>' : "") +
          (pr ? "<h4>Leerkaarten en vragen</h4>" + scoreHtml(pr, res) + antwoordenHtml(pr, res) : "") +
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
    el.querySelectorAll(".lb-goedkeur").forEach(function (rij) {
      var id = rij.dataset.lb, out = rij.querySelector(".fb"), kb = rij.querySelector("[data-keur]");
      if (kb) kb.addEventListener("click", function () {
        var p2 = { goedgekeurd: true, goedgekeurdDoor: rol.coachNaam || (gebruiker.displayName || mail()), goedgekeurdOp: nu() };
        F.updateDoc(ref("logboeken/" + id), p2).then(function () { lokaal("logboeken", id, p2); detail(el, z, doel); }).catch(function (err) { out.textContent = "Lukte niet. (" + (err.code || err.message) + ")"; });
      });
      rij.querySelector("[data-annuleer]").addEventListener("click", function () {
        if (!window.confirm("Dit logboek verwijderen? De leerling kiest daarna een nieuw project. Wat hij invulde, gaat verloren.")) return;
        F.deleteDoc(ref("logboeken/" + id)).then(function () { D.data.logboeken = D.data.logboeken.filter(function (x) { return x._id !== id; }); tekenDashboard(doel); }).catch(function (err) { out.textContent = "Lukte niet. (" + (err.code || err.message) + ")"; });
      });
    });
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
    var data = { naam: d.naam, klas: d.klas, coach: d.coach || "", coachNaam: d.coach ? coachNaam(d.coach) : "", vakleerkrachten: d.vakleerkrachten || [], actief: true };
    return F.setDoc(ref("leerlingen/" + email), data, { merge: true }).then(function () {
      /* vakleerkrachten mogen meelezen: zet ze ook bij de logboeken van deze leerling */
      return Promise.all(D.data.logboeken.filter(function (lb) { return lb.leerling === email; }).map(function (lb) { return F.updateDoc(ref("logboeken/" + lb._id), { kijkers: data.vakleerkrachten }); }));
    });
  }

  function tabLeerlingen(z, doel) {
    var d = D.data, ll = d.leerlingen.filter(function (l) { return l.actief !== false; }).sort(function (a, b) { return String(a.klas + a.naam).localeCompare(String(b.klas + b.naam), "nl"); });
    z.innerHTML = '<p class="hint">Wijs elke leerling toe aan een coach. Dit kan je doorheen het jaar wijzigen. Vul bij ‘Vakleerkracht’ het e-mailadres in van de leerkracht wiens les de leerling verlaat: die leerkracht kan dan het logboek lezen. Nieuwe CSF-leerlingen vink je aan in het tabblad <b>Klaslijsten</b>.</p><p class="hint">Staat ‘Logboek elke les’ aangevinkt, dan krijgt de leerling een e-mail als hij na zijn CSF-les het logboek niet heeft ingevuld. Een ontbrekend logboek staat dan in het rood. Vink je het uit, dan vult de leerling zijn logboek nog in, maar krijgt hij geen herinnering.</p>' +
      '<div class="lb-tabelwrap"><table class="lb-overzicht lb-bewerk"><thead><tr><th>Leerling</th><th>Klas</th><th>Coach</th><th>Vakleerkracht (e-mail)</th><th>Logboek elke les</th><th>Ziet</th><th></th></tr></thead><tbody>' +
      (ll.length ? ll.map(function (l, i) {
        return '<tr data-ll="' + esc(l._id) + '"><td><input type="text" id="ll-naam-' + i + '" value="' + esc(l.naam || "") + '" aria-label="Naam"><br><span class="hint">' + esc(l._id) + '</span></td><td><input type="text" id="ll-klas-' + i + '" value="' + esc(l.klas || "") + '" aria-label="Klas" size="5"></td><td>' +
          coachSelect("ll-coach-" + i, l.coach) + '</td><td><input type="text" id="ll-vak-' + i + '" value="' + esc((l.vakleerkrachten || []).join(", ")) + '" aria-label="Vakleerkracht" placeholder="naam@' + esc(DOMEIN) + '"></td><td><label class="lb-chip" for="ll-her-' + i + '"><input type="checkbox" id="ll-her-' + i + '" data-her="1"' + (l.herinnering === false ? "" : " checked") + '><span>herinnering</span></label></td><td>' + zichtSelect("ll-zicht-" + i, l.zicht || "", true) + '</td><td class="lb-knoppen"><button type="button" class="btn lb-klein" data-bewaar="' + i + '">Bewaar</button> <button type="button" class="btn donker lb-klein" data-wis="' + i + '">Stopt met CSF</button></td></tr>';
      }).join("") : '<tr><td colspan="7" class="hint">Nog geen leerlingen. Voeg ze hieronder toe.</td></tr>') + '</tbody></table></div><p class="fb" id="ll-fb" aria-live="polite"></p>' +
      '<h3>Leerling toevoegen</h3><div class="lb-twee">' + veld("nieuw-mail", "E-mailadres", { hint: "naam@" + DOMEIN }) + veld("nieuw-naam", "Naam") + "</div><div class=\"lb-twee\">" + veld("nieuw-klas", "Klas") +
      '<div class="lb-veld"><label for="nieuw-coach">Coach</label>' + coachSelect("nieuw-coach", "") + '</div></div><p class="hint">Enkel nodig voor een leerling die niet op de klaslijst staat.</p><button type="button" class="btn" id="nieuw-voegtoe">Voeg toe</button>';
    var fb = z.querySelector("#ll-fb");
    z.querySelectorAll("[data-bewaar]").forEach(function (b) {
      b.addEventListener("click", function () {
        var i = b.dataset.bewaar, email = b.closest("tr").dataset.ll;
        fb.textContent = "Bezig met bewaren …";
        bewaarLeerling(email, { naam: z.querySelector("#ll-naam-" + i).value.trim(), klas: z.querySelector("#ll-klas-" + i).value.trim(), coach: z.querySelector("#ll-coach-" + i).value, vakleerkrachten: mails(z.querySelector("#ll-vak-" + i).value) })
          .then(function () { fb.textContent = "Bewaard."; ververs(doel); }).catch(function (e) { fb.textContent = "Bewaren lukte niet. (" + (e.code || e.message) + ")"; });
      });
    });
    z.querySelectorAll("select[id^='ll-zicht-']").forEach(function (sel) {
      sel.addEventListener("change", function () {
        var email = sel.closest("tr").dataset.ll;
        F.setDoc(ref("leerlingen/" + email), { zicht: sel.value }, { merge: true }).then(function () { lokaal("leerlingen", email, { zicht: sel.value }); fb.textContent = "Zichtbaarheid bewaard."; })
          .catch(function (e) { fb.textContent = "Bewaren lukte niet. (" + (e.code || e.message) + ")"; });
      });
    });
    z.querySelectorAll("[data-her]").forEach(function (v) {
      v.addEventListener("change", function () {
        var email = v.closest("tr").dataset.ll;
        F.setDoc(ref("leerlingen/" + email), { herinnering: v.checked }, { merge: true })
          .then(function () { lokaal("leerlingen", email, { herinnering: v.checked }); fb.textContent = v.checked ? "Herinnering aan." : "Herinnering uit."; })
          .catch(function (e) { fb.textContent = "Bewaren lukte niet. (" + (e.code || e.message) + ")"; });
      });
    });
    z.querySelectorAll("[data-wis]").forEach(function (b) {
      b.addEventListener("click", function () {
        var email = b.closest("tr").dataset.ll;
        if (!window.confirm(email + " stopt met CSF? De leerling en zijn logboeken blijven bewaard. Je kan hem later opnieuw aanvinken.")) return;
        var l = D.data.leerlingen.filter(function (x) { return x._id === email; })[0] || {};
        Promise.all([F.setDoc(ref("leerlingen/" + email), { actief: false }, { merge: true })].concat(l.sleutel ? [F.setDoc(ref("klaslijst/" + l.sleutel), { csf: false }, { merge: true })] : []))
          .then(function () { ververs(doel); }).catch(function (e) { fb.textContent = "Verwijderen lukte niet. (" + (e.code || e.message) + ")"; });
      });
    });
    z.querySelector("#nieuw-voegtoe").addEventListener("click", function () {
      var email = z.querySelector("#nieuw-mail").value.trim().toLowerCase();
      if (!/^[^@\s]+@/.test(email) || email.slice(-(DOMEIN.length + 1)) !== "@" + DOMEIN) { fb.textContent = "Vul een geldig schooladres in (…@" + DOMEIN + ")."; return; }
      bewaarLeerling(email, { naam: z.querySelector("#nieuw-naam").value.trim(), klas: z.querySelector("#nieuw-klas").value.trim(), coach: z.querySelector("#nieuw-coach").value, vakleerkrachten: [] })
        .then(function () { ververs(doel); }).catch(function (e) { fb.textContent = "Toevoegen lukte niet. (" + (e.code || e.message) + ")"; });
    });
  }

  /* ---------- klaslijsten: alle leerlingen van de school, CSF-leerlingen aanvinken ---------- */
  function normNaam(s) { return String(s || "").normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase(); }
  /* naamsleutel: woorden zonder accenten, alfabetisch (zo is ‘Peeters Lien’ dezelfde als ‘Lien Peeters’) */
  function sleutel(naam) { return normNaam(naam).replace(/['’`]/g, "").replace(/[^a-z0-9\s-]/g, " ").split(/[\s-]+/).filter(Boolean).sort().join("_"); }
  function mailDeel(s) { return normNaam(s).replace(/[\s'’`]+/g, "").replace(/[^a-z0-9.-]/g, ""); }
  /* voorstel volgens het schoolpatroon familienaam.voornaam@domein (de klaslijst zet de familienaam eerst) */
  function voorstelMail(fam, voor) {
    if (voor == null) { var w = String(fam).trim().split(/\s+/); if (w.length < 2) return ""; voor = w.pop(); fam = w.join(" "); }
    return mailDeel(fam) + "." + mailDeel(voor) + "@" + DOMEIN;
  }
  function huidigSchooljaar() { var d = new Date(), j = d.getFullYear() - (d.getMonth() < 7 ? 1 : 0); return j + "-" + (j + 1); }

  /* Excel (.xlsx) lezen in de browser, zonder externe bibliotheek */
  function leesXlsx(buf) {
    var u8 = new Uint8Array(buf), dv = new DataView(buf), eocd = -1;
    for (var i = u8.length - 22; i >= Math.max(0, u8.length - 66000); i--) if (dv.getUint32(i, true) === 0x06054b50) { eocd = i; break; }
    if (eocd < 0) return Promise.reject(new Error("Dit is geen Excel-bestand (.xlsx)."));
    var n = dv.getUint16(eocd + 10, true), p = dv.getUint32(eocd + 16, true), files = {}, td = new TextDecoder();
    for (var k = 0; k < n; k++) {
      var nl = dv.getUint16(p + 28, true), el = dv.getUint16(p + 30, true), cl = dv.getUint16(p + 32, true), off = dv.getUint32(p + 42, true);
      var start = off + 30 + dv.getUint16(off + 26, true) + dv.getUint16(off + 28, true);
      files[td.decode(u8.subarray(p + 46, p + 46 + nl))] = { methode: dv.getUint16(p + 10, true), data: u8.subarray(start, start + dv.getUint32(p + 20, true)) };
      p += 46 + nl + el + cl;
    }
    function tekst(naam) {
      var f = files[naam]; if (!f) return Promise.resolve(null);
      if (f.methode === 0) return Promise.resolve(td.decode(f.data));
      return new Response(new Blob([f.data]).stream().pipeThrough(new DecompressionStream("deflate-raw"))).text();
    }
    var xml = function (s) { return new DOMParser().parseFromString(s, "application/xml"); };
    var alle = function (el, tag) { return [].slice.call(el.getElementsByTagName(tag)); };
    return Promise.all([tekst("xl/workbook.xml"), tekst("xl/_rels/workbook.xml.rels"), tekst("xl/sharedStrings.xml")]).then(function (r) {
      if (!r[0]) throw new Error("Dit is geen Excel-bestand (.xlsx).");
      var rels = {}, gedeeld = [];
      alle(xml(r[1] || "<x/>"), "Relationship").forEach(function (x) { rels[x.getAttribute("Id")] = x.getAttribute("Target"); });
      if (r[2]) alle(xml(r[2]), "si").forEach(function (si) { gedeeld.push(alle(si, "t").map(function (t) { return t.textContent; }).join("")); });
      var bladen = alle(xml(r[0]), "sheet").map(function (s) {
        var t = (rels[s.getAttribute("r:id")] || "").replace(/^\//, ""); if (t.indexOf("xl/") !== 0) t = "xl/" + t;
        return { naam: s.getAttribute("name"), pad: t };
      });
      return Promise.all(bladen.map(function (b) {
        return tekst(b.pad).then(function (s) {
          var rijen = [];
          if (s) alle(xml(s), "row").forEach(function (row) {
            var rij = [];
            alle(row, "c").forEach(function (c) {
              var m = (c.getAttribute("r") || "").match(/^[A-Z]+/), kol = 0;
              if (m) { for (var j = 0; j < m[0].length; j++) kol = kol * 26 + m[0].charCodeAt(j) - 64; kol--; } else kol = rij.length;
              var t = c.getAttribute("t"), v = c.getElementsByTagName("v")[0], w;
              if (t === "s") w = gedeeld[Number(v && v.textContent)] || "";
              else if (t === "inlineStr") w = alle(c, "t").map(function (x) { return x.textContent; }).join("");
              else w = v ? v.textContent : "";
              rij[kol] = String(w).trim();
            });
            var nr = Number(row.getAttribute("r")) - 1;
            rijen[nr >= 0 ? nr : rijen.length] = Array.from(rij, function (x) { return x == null ? "" : x; });
          });
          return { naam: b.naam, rijen: Array.from(rijen, function (x) { return x || []; }) };
        });
      }));
    });
  }
  /* twee vormen: (1) een blad per klas zoals de Smartschool-klaslijst (‘Klaslijst 1B’, kolommen Nr. en Leerling);
     (2) één tabel met kolommen Klas, Familienaam, Voornaam en eventueel E-mail */
  function leesKlaslijsten(bladen) {
    var uit = [], fouten = [];
    bladen.forEach(function (b) {
      var rijen = b.rijen, kop = -1, kol = {};
      for (var i = 0; i < Math.min(rijen.length, 15); i++) {
        var r = rijen[i].map(function (c) { return String(c || "").toLowerCase(); });
        if (r.some(function (c) { return c.indexOf("familienaam") === 0; }) && r.some(function (c) { return c.indexOf("voornaam") === 0; })) {
          kop = i;
          r.forEach(function (c, j) { if (c.indexOf("familienaam") === 0) kol.fam = j; else if (c.indexOf("voornaam") === 0) kol.voor = j; else if (/^(e-?mail|mail)/.test(c)) kol.mail = j; else if (c.indexOf("klas") === 0) kol.klas = j; });
          break;
        }
      }
      if (kop >= 0) {
        rijen.slice(kop + 1).forEach(function (r) {
          var fam = r[kol.fam] || "", voor = r[kol.voor] || ""; if (!fam && !voor) return;
          var m = kol.mail != null ? String(r[kol.mail] || "").trim().toLowerCase() : "";
          uit.push({ naam: (fam + " " + voor).trim(), klas: (kol.klas != null && r[kol.klas]) || b.naam, email: m || voorstelMail(fam, voor), zeker: !!m });
        });
        return;
      }
      var titel = rijen.map(function (r) { return r[0] || ""; }).filter(function (c) { return /^klaslijst\s+/i.test(c); })[0];
      var klas = titel ? titel.replace(/^klaslijst\s+/i, "").trim() : b.naam, start = -1;
      rijen.some(function (r, i) { if (/^nr/i.test(r[0] || "") && /leerling|naam/i.test(r[1] || "")) { start = i; return true; } return false; });
      if (start < 0) { fouten.push(b.naam); return; }
      rijen.slice(start + 1).forEach(function (r) { var naam = r[1] || ""; if (naam) uit.push({ naam: naam, klas: klas, email: voorstelMail(naam), zeker: false }); });
    });
    return { rijen: uit, fouten: fouten };
  }
  function schrijfAlles(ops) {
    var stukken = []; for (var i = 0; i < ops.length; i += 400) stukken.push(ops.slice(i, i + 400));
    return stukken.reduce(function (pr, stuk) {
      return pr.then(function () { var b = F.writeBatch(db); stuk.forEach(function (o) { b.set(ref(o[0]), o[1], { merge: true }); }); return b.commit(); });
    }, Promise.resolve());
  }
  function importeer(gelezen, jaar) {
    var bestaand = {}, gezien = {}, ops = [], csf = 0, klassen = {};
    D.data.klaslijst.forEach(function (k) { bestaand[k._id] = k; });
    gelezen.rijen.forEach(function (r) {
      var s = sleutel(r.naam) || "leerling", id = s, i = 2;
      while (gezien[id]) id = s + "_" + i++;
      gezien[id] = 1; klassen[r.klas] = 1;
      var oud = bestaand[id] || {}, email = oud.emailZeker ? oud.email : (r.zeker ? r.email : (oud.email || r.email));
      ops.push(["klaslijst/" + id, { naam: r.naam, klas: r.klas, schooljaar: jaar, email: email || "", emailZeker: !!(oud.emailZeker || r.zeker), csf: !!oud.csf }]);
      if (oud.csf && email) { var kl = {}; kl[jaar] = r.klas; ops.push(["leerlingen/" + email, { klas: r.klas, klassen: kl }]); csf++; }
    });
    ops.push(["instellingen/schooljaar", { jaar: jaar }]);
    ops.push(["instellingen/klassen", { lijst: Object.keys(klassen).sort(function (a, b) { return a.localeCompare(b, "nl", { numeric: true }); }) }]);
    var weg = Object.keys(bestaand).filter(function (id) { return !gezien[id]; }).length;
    return schrijfAlles(ops).then(function () { return { aantal: gelezen.rijen.length, klassen: Object.keys(klassen).length, csf: csf, weg: weg }; });
  }
  function lokaal(col, id, patch) {
    var l = D.data[col], o = l.filter(function (x) { return x._id === id; })[0];
    if (!o) { o = { _id: id }; l.push(o); }
    Object.keys(patch).forEach(function (k) { o[k] = patch[k] && typeof patch[k] === "object" && !Array.isArray(patch[k]) && o[k] && typeof o[k] === "object" ? Object.assign({}, o[k], patch[k]) : patch[k]; });
    return o;
  }
  function geldigMail(e) { return /^[^@\s]+@/.test(e) && e.slice(-(DOMEIN.length + 1)) === "@" + DOMEIN; }
  /* een leerling op CSF zetten of eraf halen; leerling en logboeken blijven altijd bewaard */
  function zetCsf(k, aan, email) {
    var schrijf = [], kl = {}; kl[k.schooljaar || huidigSchooljaar()] = k.klas;
    if (aan) {
      var oud = D.data.leerlingen.filter(function (x) { return x._id === email; })[0] || {};
      var p1 = { csf: true, email: email, emailZeker: true }, p2 = { naam: k.naam, klas: k.klas, klassen: kl, actief: true, sleutel: k._id, coach: oud.coach || "", coachNaam: oud.coachNaam || "", vakleerkrachten: oud.vakleerkrachten || [] };
      if (k.email && k.email !== email && k.csf) { schrijf.push(F.setDoc(ref("leerlingen/" + k.email), { actief: false }, { merge: true })); lokaal("leerlingen", k.email, { actief: false }); }
      schrijf.push(F.setDoc(ref("klaslijst/" + k._id), p1, { merge: true }), F.setDoc(ref("leerlingen/" + email), p2, { merge: true }));
      lokaal("klaslijst", k._id, p1); lokaal("leerlingen", email, p2);
    } else {
      schrijf.push(F.setDoc(ref("klaslijst/" + k._id), { csf: false }, { merge: true })); lokaal("klaslijst", k._id, { csf: false });
      if (k.email) { schrijf.push(F.setDoc(ref("leerlingen/" + k.email), { actief: false }, { merge: true })); lokaal("leerlingen", k.email, { actief: false }); }
    }
    return Promise.all(schrijf);
  }

  function tabKlaslijst(z, doel) {
    var d = D.data, jaar = d.schooljaar, KS = D.ks || (D.ks = { klas: "", zoek: "", enkelCsf: false });
    var klassen = []; d.klaslijst.forEach(function (k) { if ((!jaar || k.schooljaar === jaar) && klassen.indexOf(k.klas) < 0) klassen.push(k.klas); });
    klassen.sort(function (a, b) { return a.localeCompare(b, "nl", { numeric: true }); });
    var actief = {}; d.leerlingen.forEach(function (l) { if (l.actief !== false) actief[l._id] = 1; });
    var pogingen = d.aanmeldingen.filter(function (a) { return !actief[a._id]; });
    var r = d.klaslijst.filter(function (k) {
      if (KS.klas && k.klas !== KS.klas) return false;
      if (KS.enkelCsf && !k.csf) return false;
      var q = KS.zoek.toLowerCase(); return !q || (k.naam + " " + (k.email || "")).toLowerCase().indexOf(q) >= 0;
    }).sort(function (a, b) { return String(a.klas).localeCompare(String(b.klas), "nl", { numeric: true }) || String(a.naam).localeCompare(String(b.naam), "nl"); });
    var html = "";
    if (rol.beheerder) html += '<details class="lb-hist"' + (d.klaslijst.length ? "" : " open") + '><summary>Klaslijsten importeren of bijwerken (één keer per schooljaar)</summary>' +
      '<p class="hint">Kies het Excel-bestand met de klaslijsten uit Smartschool (één blad per klas), of een export met de kolommen Klas, Familienaam, Voornaam en E-mail. Bestaande leerlingen krijgen hun nieuwe klas. Wie CSF volgt, blijft aangevinkt. Wie niet meer op de lijst staat, blijft bewaard.</p>' +
      '<div class="lb-twee"><div class="lb-veld"><label for="kl-jaar">Schooljaar</label><input type="text" id="kl-jaar" value="' + esc(jaar || huidigSchooljaar()) + '"></div>' +
      '<div class="lb-veld"><label for="kl-bestand">Excel-bestand</label><input type="file" id="kl-bestand" accept=".xlsx"></div></div>' +
      '<div class="lb-acties"><button type="button" class="btn" id="kl-import">Importeer</button><span class="fb" id="kl-fb" aria-live="polite"></span></div></details>';
    else if (!d.klaslijst.length) html += '<div class="lb-melding">De beheerder importeert de klaslijsten één keer per schooljaar.</div>';
    if (pogingen.length) html += '<div class="lb-melding oranje"><b>Aanmeldingen van leerlingen die niet op de CSF-lijst staan</b>' + pogingen.map(function (a) {
      var s = sleutel(a.naam), match = d.klaslijst.filter(function (k) { return s && (k._id === s || k._id.indexOf(s + "_") === 0); })[0];
      return '<div class="lb-poging" data-mail="' + esc(a._id) + '"><span><b>' + esc(a.naam || "?") + "</b> · " + esc(a._id) + " · " + datum(a.tijd) + "</span>" +
        (match ? '<button type="button" class="btn lb-klein" data-koppel="' + esc(match._id) + '">Zet ' + esc(match.naam) + " (" + esc(match.klas) + ") op CSF met dit adres</button>" : '<span class="hint">Geen leerling met deze naam op de klaslijst.</span>') +
        ' <button type="button" class="btn donker lb-klein" data-negeer="1">Negeer</button></div>';
    }).join("") + "</div>";
    html += (d.klaslijst.length ? '<div class="crij lb-filters"><label for="kl-klas" class="hint">Klas</label><select id="kl-klas"><option value="">Alle klassen</option>' +
      klassen.map(function (k) { return '<option value="' + esc(k) + '"' + (KS.klas === k ? " selected" : "") + ">" + esc(k) + "</option>"; }).join("") +
      '</select><input type="search" id="kl-zoek" placeholder="Zoek een leerling" value="' + esc(KS.zoek) + '" aria-label="Zoek een leerling"><label class="lb-chip" for="kl-enkel"><input type="checkbox" id="kl-enkel"' + (KS.enkelCsf ? " checked" : "") + "><span>Enkel CSF</span></label></div>" +
      '<p class="hint">Vink aan wie CSF volgt. Controleer het e-mailadres: een <span class="lb-pill oranje">voorstel</span> is afgeleid van de naam (familienaam.voornaam@' + esc(DOMEIN) + ").</p>" +
      '<div class="lb-tabelwrap"><table class="lb-overzicht lb-bewerk"><thead><tr><th>CSF</th><th>Leerling</th><th>Klas</th><th>E-mail</th><th>Coach</th></tr></thead><tbody>' +
      (r.length ? r.map(function (k, i) {
        var weg = jaar && k.schooljaar !== jaar;
        return '<tr data-k="' + esc(k._id) + '"' + (k.csf ? ' class="lb-csf"' : "") + '><td><input type="checkbox" id="kl-csf-' + i + '" aria-label="' + esc(k.naam) + ' volgt CSF"' + (k.csf ? " checked" : "") + "></td><td>" + esc(k.naam) +
          (weg ? '<br><span class="lb-pill grijs">niet op de klaslijst van ' + esc(jaar) + "</span>" : "") + "</td><td>" + esc(k.klas) +
          '</td><td><input type="text" id="kl-mail-' + i + '" value="' + esc(k.email || "") + '" aria-label="E-mailadres">' + (k.emailZeker ? "" : ' <span class="lb-pill oranje">voorstel</span>') +
          "</td><td>" + (k.csf ? coachSelect("kl-coach-" + i, (d.leerlingen.filter(function (l) { return l._id === k.email; })[0] || {}).coach) : "") + "</td></tr>";
      }).join("") : '<tr><td colspan="5" class="hint">Geen leerlingen voor deze keuze.</td></tr>') + '</tbody></table></div><p class="fb" id="kl-rijfb" aria-live="polite"></p>' : "");
    z.innerHTML = html;
    var her = function () { tabKlaslijst(z, doel); };
    var imp = z.querySelector("#kl-import");
    if (imp) imp.addEventListener("click", function () {
      var fb = z.querySelector("#kl-fb"), f = z.querySelector("#kl-bestand").files[0], j = z.querySelector("#kl-jaar").value.trim();
      if (!/^\d{4}-\d{4}$/.test(j)) { fb.textContent = "Vul het schooljaar in zoals 2026-2027."; return; }
      if (!f) { fb.textContent = "Kies eerst het Excel-bestand."; return; }
      fb.textContent = "Bestand lezen …";
      f.arrayBuffer().then(leesXlsx).then(function (bladen) {
        var g = leesKlaslijsten(bladen);
        if (!g.rijen.length) throw new Error("Geen leerlingen gevonden in dit bestand.");
        fb.textContent = "Bezig met bewaren (" + g.rijen.length + " leerlingen) …";
        return importeer(g, j).then(function (res) {
          D.ks.klas = "";
          ververs(doel);
          setTimeout(function () { var x = document.querySelector("#kl-fb"); if (x) x.textContent = res.aantal + " leerlingen in " + res.klassen + " klassen bewaard. " + res.csf + " CSF-leerlingen kregen hun nieuwe klas." + (res.weg ? " " + res.weg + " leerlingen staan niet meer op de lijst en blijven bewaard." : "") + (g.fouten.length ? " Overgeslagen bladen: " + g.fouten.join(", ") + "." : ""); }, 900);
        });
      }).catch(function (e) { fb.textContent = "Importeren lukte niet: " + (e.code || e.message); });
    });
    var sel = z.querySelector("#kl-klas"); if (sel) sel.addEventListener("change", function () { KS.klas = sel.value; her(); });
    var zk = z.querySelector("#kl-zoek"); if (zk) zk.addEventListener("input", function () { KS.zoek = zk.value; var pos = zk.selectionStart; her(); var n = z.querySelector("#kl-zoek"); n.focus(); n.setSelectionRange(pos, pos); });
    var en = z.querySelector("#kl-enkel"); if (en) en.addEventListener("change", function () { KS.enkelCsf = en.checked; her(); });
    var rfb = z.querySelector("#kl-rijfb");
    z.querySelectorAll("tr[data-k]").forEach(function (tr) {
      var k = d.klaslijst.filter(function (x) { return x._id === tr.dataset.k; })[0];
      var vak = tr.querySelector('input[type=checkbox]'), mailIn = tr.querySelector('input[type=text]'), cs = tr.querySelector("select");
      vak.addEventListener("change", function () {
        var e = mailIn.value.trim().toLowerCase();
        if (vak.checked && !geldigMail(e)) { vak.checked = false; rfb.textContent = "Vul eerst een geldig schooladres in voor " + k.naam + " (…@" + DOMEIN + ")."; mailIn.focus(); return; }
        rfb.textContent = "Bezig met bewaren …";
        zetCsf(k, vak.checked, e).then(function () { rfb.textContent = k.naam + (vak.checked ? " volgt CSF." : " volgt geen CSF meer."); her(); setTimeout(function () { var x = z.querySelector("#kl-rijfb"); if (x) x.textContent = k.naam + (vak.checked ? " volgt CSF." : " volgt geen CSF meer."); }, 0); })
          .catch(function (err) { rfb.textContent = "Bewaren lukte niet. (" + (err.code || err.message) + ")"; });
      });
      mailIn.addEventListener("change", function () {
        var e = mailIn.value.trim().toLowerCase();
        if (!geldigMail(e)) { rfb.textContent = "Dit is geen schooladres (…@" + DOMEIN + ")."; return; }
        rfb.textContent = "Bezig met bewaren …";
        (k.csf ? zetCsf(k, true, e) : F.setDoc(ref("klaslijst/" + k._id), { email: e, emailZeker: true }, { merge: true }).then(function () { lokaal("klaslijst", k._id, { email: e, emailZeker: true }); }))
          .then(function () { her(); var x = z.querySelector("#kl-rijfb"); if (x) x.textContent = "E-mailadres van " + k.naam + " bewaard."; })
          .catch(function (err) { rfb.textContent = "Bewaren lukte niet. (" + (err.code || err.message) + ")"; });
      });
      if (cs) cs.addEventListener("change", function () {
        var p = { coach: cs.value, coachNaam: cs.value ? coachNaam(cs.value) : "" };
        F.setDoc(ref("leerlingen/" + k.email), p, { merge: true }).then(function () { lokaal("leerlingen", k.email, p); rfb.textContent = "Coach van " + k.naam + " bewaard."; })
          .catch(function (err) { rfb.textContent = "Bewaren lukte niet. (" + (err.code || err.message) + ")"; });
      });
    });
    z.querySelectorAll(".lb-poging").forEach(function (rij) {
      var email = rij.dataset.mail, kb = rij.querySelector("[data-koppel]");
      if (kb) kb.addEventListener("click", function () {
        var k = d.klaslijst.filter(function (x) { return x._id === kb.dataset.koppel; })[0];
        zetCsf(k, true, email).then(function () { return F.deleteDoc(ref("aanmeldingen/" + email)); }).then(function () {
          d.aanmeldingen = d.aanmeldingen.filter(function (a) { return a._id !== email; }); her();
        }).catch(function (err) { rij.insertAdjacentHTML("beforeend", ' <span class="fb">Koppelen lukte niet. (' + esc(err.code || err.message) + ")</span>"); });
      });
      rij.querySelector("[data-negeer]").addEventListener("click", function () {
        F.deleteDoc(ref("aanmeldingen/" + email)).then(function () { d.aanmeldingen = d.aanmeldingen.filter(function (a) { return a._id !== email; }); her(); });
      });
    });
  }

  /* ---------- zichtbaarheid: wat ziet een leerling? per jaar, per klas, per leerling ---------- */
  var ZICHT = [["beide", "oefenprojecten + alle projecten"], ["oefen", "enkel oefenprojecten"], ["alle", "enkel alle projecten"]];
  function zichtSelect(id, waarde, volg) {
    return '<select id="' + id + '">' + (volg ? '<option value="">' + (volg === true ? "– volgt klas/jaar –" : volg) + "</option>" : "") +
      ZICHT.map(function (z2) { return '<option value="' + z2[0] + '"' + (waarde === z2[0] ? " selected" : "") + ">" + z2[1] + "</option>"; }).join("") + "</select>";
  }
  function tabZicht(z, doel) {
    var d = D.data, zi = d.zicht || { jaar: {}, klas: {} };
    var klassen = []; d.leerlingen.forEach(function (l) { if (l.actief !== false && l.klas && klassen.indexOf(l.klas) < 0) klassen.push(l.klas); });
    klassen.sort(function (a, b) { return a.localeCompare(b, "nl", { numeric: true }); });
    z.innerHTML = '<p class="hint">Bepaal wat leerlingen op de startpagina zien. Een instelling per leerling (tabblad CSF-leerlingen) gaat voor op de klas. De klas gaat voor op het jaar.</p>' +
      "<h3>Per jaar</h3>" + '<table class="lb-overzicht"><tr><th>1e jaar</th><td>' + zichtSelect("zj-1", zi.jaar[1] || "beide") + "</td></tr><tr><th>2e jaar</th><td>" + zichtSelect("zj-2", zi.jaar[2] || "alle") + "</td></tr></table>" +
      "<h3>Per klas</h3>" + (klassen.length ? '<table class="lb-overzicht">' + klassen.map(function (k, i) { return "<tr><th>" + esc(k) + '</th><td data-klas="' + esc(k) + '">' + zichtSelect("zk-" + i, zi.klas[k] || "", "– volgt het jaar –") + "</td></tr>"; }).join("") + "</table>" : '<p class="hint">Nog geen CSF-leerlingen met een klas.</p>') +
      '<div class="lb-acties"><button type="button" class="btn" id="zicht-bewaar">Bewaar</button><span class="fb" id="zicht-fb" aria-live="polite"></span></div>';
    z.querySelector("#zicht-bewaar").addEventListener("click", function () {
      var nieuw = { jaar: { 1: z.querySelector("#zj-1").value, 2: z.querySelector("#zj-2").value }, klas: {} };
      z.querySelectorAll("td[data-klas]").forEach(function (td) { var v = td.querySelector("select").value; if (v) nieuw.klas[td.dataset.klas] = v; });
      var out = z.querySelector("#zicht-fb"); out.textContent = "Bezig met bewaren …";
      F.setDoc(ref("instellingen/zichtbaarheid"), nieuw).then(function () { d.zicht = nieuw; out.textContent = "Bewaard. Leerlingen zien dit bij hun volgende aanmelding."; })
        .catch(function (e) { out.textContent = "Bewaren lukte niet. (" + (e.code || e.message) + ")"; });
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
      '<div class="crij"><input type="password" id="code-in" autocomplete="off" aria-label="Coachcode" placeholder="Coachcode"><button type="button" class="btn" id="code-bewaar">Bewaar de coachcode</button><span class="fb" id="code-fb" aria-live="polite"></span></div>' +
      "<h3>Herinnering per e-mail</h3><p class=\"hint\">Elke schooldag om 16 uur krijgt een leerling een e-mail als hij die dag CSF had en zijn logboek niet volledig invulde. Dat geldt enkel voor leerlingen met ‘Logboek elke les’ aangevinkt. Het script staat in de map <code>herinnering</code> (zie LEESMIJ.md).</p>" +
      '<label class="lb-chip" for="her-aan"><input type="checkbox" id="her-aan"' + (d.herinnering.aan ? " checked" : "") + "><span>Herinneringen versturen</span></label>" +
      '<div class="lb-veld"><label for="her-vrij">Vrije dagen en vakanties</label><textarea id="her-vrij" rows="5" placeholder="2026-11-02 2026-11-08&#10;2026-11-11">' + esc(d.herinnering.vrij || "") + '</textarea><span class="hint">Eén dag of periode per regel: een datum, of een begin- en einddatum. Op die dagen vertrekt geen herinnering.</span></div>' +
      '<div class="lb-acties"><button type="button" class="btn" id="her-bewaar">Bewaar</button><span class="fb" id="her-fb" aria-live="polite"></span></div>' +
      "<h3>Vakleerkrachten</h3><p class=\"hint\">Leerlingen kiezen hieruit de leerkracht(en) van wie ze de les verlaten. Die leerkrachten kunnen dan het logboek lezen. Eén leerkracht per regel: Voornaam Familienaam. Het e-mailadres maakt het portaal zelf: familienaam.voornaam@" + DOMEIN + " (familienaam aan elkaar, zonder accenten). Wijkt een adres af? Schrijf dan: Voornaam Familienaam ; e-mailadres.</p>" +
      '<div class="lb-veld"><label for="vk-lijst">Lijst van vakleerkrachten</label><textarea id="vk-lijst" rows="6" rows="12" placeholder="An Peeters&#10;Tim van Besien">' + esc((d.vakleerkrachtenLijst || []).map(function (v) { var x = vkRegel(v.naam); return v.naam + (x.email === v.email ? "" : " ; " + v.email); }).join("\n")) + "</textarea></div>" +
      '<div class="lb-acties"><button type="button" class="btn" id="vk-bewaar">Bewaar de lijst</button> <button type="button" class="btn licht" id="vk-kopieer">Kopieer alle e-mailadressen</button><span class="fb" id="vk-fb" aria-live="polite"></span></div>' +
      '<details class="vk-mails"><summary>Toon de e-mailadressen</summary><textarea id="vk-mails" rows="6" readonly aria-label="E-mailadressen van de vakleerkrachten">' + esc((d.vakleerkrachtenLijst || []).map(function (v) { return v.email; }).join("; ")) + "</textarea></details>";
    z.querySelector("#vk-kopieer").addEventListener("click", function () {
      var out = z.querySelector("#vk-fb"), t = (d.vakleerkrachtenLijst || []).map(function (v) { return v.email; }).join("; ");
      if (!t) { out.textContent = "Bewaar eerst de lijst."; return; }
      var ok = function () { out.textContent = "Gekopieerd: " + (d.vakleerkrachtenLijst || []).length + " adressen. Plak ze in het veld ‘Aan’ of ‘Bcc’ van een e-mail."; };
      (navigator.clipboard ? navigator.clipboard.writeText(t) : Promise.reject()).then(ok, function () { var ta = z.querySelector("#vk-mails"); ta.parentNode.open = true; ta.select(); out.textContent = "Kopiëren lukte niet automatisch. Selecteer de adressen hieronder en kopieer ze."; });
    });
    z.querySelector("#vk-bewaar").addEventListener("click", function () {
      var out = z.querySelector("#vk-fb"), fout = [], lijstV = z.querySelector("#vk-lijst").value.split(/\n/).map(function (r) { return r.trim(); }).filter(Boolean).map(function (r) {
        var v = vkRegel(r);
        if (!v.familienaam || v.email.slice(-(DOMEIN.length + 1)) !== "@" + DOMEIN || !/^[^@\s;]+@/.test(v.email)) fout.push(r);
        return v;
      }).sort(function (a, b) { return plat(vkFam(a)).replace(/\s/g, "").localeCompare(plat(vkFam(b)).replace(/\s/g, "")) || plat(a.voornaam).localeCompare(plat(b.voornaam)); });
      if (fout.length) { out.textContent = "Deze regel klopt niet: " + fout[0] + ". Schrijf: Voornaam Familienaam (of: Voornaam Familienaam ; naam@" + DOMEIN + ")."; return; }
      var dubbel = lijstV.filter(function (v, i) { return lijstV.some(function (w, j) { return j < i && w.email === v.email; }); });
      if (dubbel.length) { out.textContent = "Dit e-mailadres staat er twee keer: " + dubbel[0].email + ". Schrijf het juiste adres achter een ; bij één van beide."; return; }
      F.setDoc(ref("instellingen/vakleerkrachten"), { lijst: lijstV }).then(function () { d.vakleerkrachtenLijst = lijstV; INST.vakleerkrachten = lijstV; z.querySelector("#vk-mails").value = lijstV.map(function (v) { return v.email; }).join("; "); out.textContent = "Bewaard (" + lijstV.length + " leerkrachten)."; })
        .catch(function (e) { out.textContent = "Bewaren lukte niet. (" + (e.code || e.message) + ")"; });
    });
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
    z.querySelector("#her-bewaar").addEventListener("click", function () {
      var out = z.querySelector("#her-fb"), vrij = z.querySelector("#her-vrij").value.trim();
      var fout = vrij.split(/\n/).filter(function (r) { return r.trim() && !/^\s*\d{4}-\d{2}-\d{2}(\s+(t\/m|tot|-)?\s*\d{4}-\d{2}-\d{2})?\s*$/.test(r); });
      if (fout.length) { out.textContent = "Deze regel begrijp ik niet: " + fout[0] + ". Schrijf bv. 2026-12-21 2027-01-03."; return; }
      var data = { aan: z.querySelector("#her-aan").checked, vrij: vrij };
      F.setDoc(ref("instellingen/herinnering"), data).then(function () { d.herinnering = data; out.textContent = "Bewaard."; })
        .catch(function (e) { out.textContent = "Bewaren lukte niet. (" + (e.code || e.message) + ")"; });
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
  /* ---------- aanpassingen van coaches aan sterren, tijd en inleiding (openbaar leesbaar) ---------- */
  var VELDEN = [["kort", "Korte inhoud (onder de titel)"], ["voorWie", "Voor wie?"], ["omschrijving", "Omschrijving project"], ["doel", "Doel van het project"]];
  P.over = {};
  function platteTekst(html) { var d = document.createElement("div"); d.innerHTML = String(html || "").replace(/<br\s*\/?>/gi, "\n"); return d.textContent; }
  function alsHtml(t) { return esc(t).replace(/\n/g, "<br>"); }
  P.pasToe = function () {
    (CSF.projecten || []).forEach(function (p) {
      if (!p._orig) p._orig = { sterren: p.sterren, tijd: p.tijd, kort: p.kort, voorWie: p.voorWie, omschrijving: p.omschrijving, doel: p.doel };
      var o = P.over[p.id] || {}, g = p._orig;
      p.sterren = o.sterren ? Number(o.sterren) : g.sterren;
      p.tijd = o.tijd || g.tijd;
      VELDEN.forEach(function (v) { var k = v[0]; p[k] = o[k] != null && o[k] !== "" && o[k] !== platteTekst(g[k]) ? alsHtml(o[k]) : g[k]; });
    });
  };
  function laadAanpassingen() {
    return lijst("projectinfo").then(function (r) {
      var o = {}; r.forEach(function (x) { o[x._id] = x; }); P.over = o;
      if (CSF.gestart) { P.pasToe(); if (!/^#?(logboek|dashboard)/.test(location.hash)) herteken(); }
    }).catch(function () {});
  }

  function tabProjecten(z, doel) {
    var lijstP = (CSF.projecten || []).slice().sort(function (a, b) { return (a.soort === "vak") - (b.soort === "vak") || CSF.ui.label(a).localeCompare(CSF.ui.label(b), "nl") || a.naam.localeCompare(b.naam, "nl"); });
    if (!D.projId || !lijstP.some(function (p) { return p.id === D.projId; })) D.projId = lijstP.length ? lijstP[0].id : "";
    var p = lijstP.filter(function (x) { return x.id === D.projId; })[0], g = p ? p._orig || p : {}, o = (p && P.over[p.id]) || {};
    var waarde = function (k) { return o[k] != null && o[k] !== "" ? o[k] : (k === "sterren" ? g.sterren : k === "tijd" ? g.tijd : platteTekst(g[k])); };
    var sterOpties = [1, 2, 3, 4, 5].map(function (n) { return '<option value="' + n + '"' + (Number(waarde("sterren")) === n ? " selected" : "") + ">" + "★".repeat(n) + "☆".repeat(5 - n) + " (" + n + ")</option>"; }).join("");
    z.innerHTML = '<p class="hint">Pas de sterren, de voorziene tijd en de inleidende teksten van een project aan. De site toont meteen de nieuwe versie. De werkbundel en de lesplanning blijven ongewijzigd.</p>' +
      '<div class="lb-veld"><label for="pr-kies">Project</label><select id="pr-kies">' + lijstP.map(function (x) {
        return '<option value="' + esc(x.id) + '"' + (x.id === D.projId ? " selected" : "") + ">" + esc((x.soort === "vak" ? CSF.ui.label(x) : "oefenproject " + CSF.ui.label(x)) + " · " + x.naam.split(":")[0]) + (P.over[x.id] ? " ✎" : "") + "</option>"; }).join("") + "</select></div>" +
      (p ? '<form id="pr-form" class="lb-form" novalidate>' + (o.door ? '<p class="hint">Laatst aangepast door ' + esc(o.door) + " op " + datum(o.op) + ".</p>" : "") +
        '<div class="lb-twee"><div class="lb-veld"><label for="pr-sterren">Uitdagingsniveau</label><select id="pr-sterren">' + sterOpties + '</select></div>' +
        '<div class="lb-veld"><label for="pr-tijd">Voorziene tijd</label><input type="text" id="pr-tijd" maxlength="40" value="' + esc(waarde("tijd") || "") + '"><span class="hint">bv. 3 lesuren</span></div></div>' +
        VELDEN.map(function (v) { return '<div class="lb-veld"><label for="pr-' + v[0] + '">' + v[1] + '</label><textarea id="pr-' + v[0] + '" rows="' + (v[0] === "omschrijving" ? 5 : 2) + '" maxlength="1500">' + esc(waarde(v[0]) || "") + "</textarea></div>"; }).join("") +
        '<div class="lb-acties"><button type="submit" class="btn">Bewaar</button>' + (P.over[p.id] ? '<button type="button" class="btn licht" id="pr-herstel">Zet terug naar het origineel</button>' : "") +
        ' <a class="btn licht" href="#p-' + esc(p.id) + '" target="_blank" rel="noopener">Bekijk het project</a><span class="fb" id="pr-fb" aria-live="polite"></span></div></form>' : "");
    z.querySelector("#pr-kies").addEventListener("change", function (e) { D.projId = e.target.value; tabProjecten(z, doel); });
    if (!p) return;
    var fb = z.querySelector("#pr-fb");
    z.querySelector("#pr-form").addEventListener("submit", function (e) {
      e.preventDefault();
      var tijd = z.querySelector("#pr-tijd").value.trim();
      if (!tijd) { fb.textContent = "Vul de voorziene tijd in."; return; }
      var data = { sterren: Number(z.querySelector("#pr-sterren").value), tijd: tijd, door: rol.coachNaam || (gebruiker.displayName || mail()), op: nu() };
      VELDEN.forEach(function (v) { data[v[0]] = z.querySelector("#pr-" + v[0]).value.trim(); });
      fb.textContent = "Bezig met bewaren …";
      F.setDoc(ref("projectinfo/" + p.id), data).then(function () { P.over[p.id] = data; P.pasToe(); tabProjecten(z, doel); var x = z.querySelector("#pr-fb"); if (x) x.textContent = "Bewaard. De site toont de nieuwe versie."; })
        .catch(function (err) { fb.textContent = "Bewaren lukte niet. (" + (err.code || err.message) + ")"; });
    });
    var hs = z.querySelector("#pr-herstel");
    if (hs) hs.addEventListener("click", function () {
      if (!window.confirm("Zet de sterren, de tijd en de teksten van dit project terug naar het origineel?")) return;
      F.deleteDoc(ref("projectinfo/" + p.id)).then(function () { delete P.over[p.id]; P.pasToe(); tabProjecten(z, doel); var x = z.querySelector("#pr-fb"); if (x) x.textContent = "Teruggezet naar het origineel."; })
        .catch(function (err) { fb.textContent = "Terugzetten lukte niet. (" + (err.code || err.message) + ")"; });
    });
  }

  /* op elke pagina: aanpassingen van coaches laden; is een leerling aangemeld, vraag dan naar het begin-logboek */
  if (P.actief) laad().then(function () {
    P.rolBekend = true;
    if (CSF.gestart) herteken();   /* de rol is gekend: teken opnieuw (aanmeldpoort, zichtbaarheid, eigen project) */
    laadAanpassingen(); vraagBegin();
  }).catch(function () { P.rolBekend = true; if (CSF.gestart) herteken(); });
  P.rolBekend = false;
  P.isAangemeld = function () { return !!gebruiker; };
  /* leerjaar uit de klas van de leerling (‘1B’ → 1, ‘2C-E&O’ → 2) */
  P.leerjaar = function () { var k = rol && rol.leerling && String(rol.leerling.klas || ""); var m = k && k.match(/^\s*(\d)/); return m ? Number(m[1]) : null; };
  P.isCoach = function () { return !!(rol && (rol.coach || (rol.vak && rol.vak.length))); };
  /* app.js vult P.testCode in (ontsleutelen van coach/coachfiches.js) */
  P.testCode = function () { return Promise.resolve(true); };
})();
