/* =====================================================================
   CSF-portaal · wekelijks Smartschoolbericht aan de vakleerkrachten
   Eén keer per week krijgt elke vakleerkracht één Smartschoolbericht met
   de leerstof die zijn CSF-leerlingen in zijn les misten, hoe ze die
   inhalen en aan welk project ze werken.
   - Bron: het begin van lesuur 2, 3, … in het logboek (gemiste leerstof).
   - Welke leerkracht: de les die de leerling verliet op de dag van zijn
     vorige CSF-lesuur (uit de opstart van zijn logboek).
   - ‘Niets’ gemist: geen bericht.
   - Een leerkracht kan de berichten uitzetten in het CSF-dashboard.
   - De beheerder zet alles aan of uit via Dashboard → Coaches en instellingen.
   Installeren: zie LEESMIJ.md, deel ‘Wekelijks Smartschoolbericht’.
   Het wachtwoord van de Smartschool-webservices staat NIET in deze code,
   maar in de scripteigenschap SMARTSCHOOL_CODE (Projectinstellingen).
   ===================================================================== */

/* ---------- vul dit één keer in ---------- */
var SCHOOL = "";                 // het eerste deel van jullie Smartschool-adres, bv. "svsl" voor https://svsl.smartschool.be
var AFZENDER = "Null";           // Smartschool-gebruikersnaam van de afzender, of "Null" (zonder afzender)
var AFWIJKEND = {                // enkel nodig als een Smartschool-gebruikersnaam niet gelijk is aan het deel vóór @ van het e-mailadres
  // "peeters.an@svsl.be": "an.peeters",
};
var DAG = "FRIDAY", UUR = 15;   // wanneer het weekbericht vertrekt (MONDAY … FRIDAY, uur 0–23)

var PROJECT = "campus-lievegem-csf";
var SITE = "https://vandaelet.github.io/CSF/";
var DAGCODES = ["", "MA", "DI", "WOE", "DO", "VRIJ", ""];   // zondag = 0

/* Voer dit één keer uit: maakt de wekelijkse taak. */
function installeer() {
  ScriptApp.getProjectTriggers().forEach(function (t) { if (t.getHandlerFunction() === "stuurWeekberichten") ScriptApp.deleteTrigger(t); });
  ScriptApp.newTrigger("stuurWeekberichten").timeBased().onWeekDay(ScriptApp.WeekDay[DAG]).atHour(UUR).nearMinute(10).inTimezone("Europe/Brussels").create();
  Logger.log("Het weekbericht vertrekt voortaan elke week op de gekozen dag rond " + UUR + " uur.");
}

/* Proef: er vertrekt NIETS naar Smartschool. Je krijgt zelf één e-mail met alle berichten zoals ze zouden vertrekken. */
function proef() { stuurWeekberichten(true); }

/* Test van de Smartschool-koppeling: stuurt één kort bericht naar jezelf. Vul je eigen Smartschool-gebruikersnaam in. */
function testSmartschool() {
  var ik = "";   // ← jouw Smartschool-gebruikersnaam
  if (!ik) throw new Error("Vul eerst je eigen Smartschool-gebruikersnaam in bij ‘var ik’.");
  var r = smartschool("sendMsg", { userIdentifier: ik, title: "CSF · test van de koppeling", body: "<p>De koppeling tussen het CSF-portaal en Smartschool werkt.</p>", senderIdentifier: AFZENDER });
  Logger.log(r.ok ? "Gelukt: kijk in je Smartschool-berichten." : "Mislukt: " + r.fout);
}

function stuurWeekberichten(enkelProef) {
  var proefRun = enkelProef === true, props = PropertiesService.getScriptProperties();
  var inst = haalDoc("instellingen/weekbericht") || {};
  if (!proefRun && inst.aan !== true) { Logger.log("Het weekbericht staat uit in het dashboard."); return; }
  var tot = new Date(), van = props.getProperty("LAATSTE") ? new Date(props.getProperty("LAATSTE")) : new Date(tot.getTime() - 7 * 864e5);
  var uit = verzamel(haalAlles("leerlingen"), haalAlles("logboeken"), haalAlles("voorkeuren"), van.toISOString(), tot.toISOString());
  var verslag = [], fouten = [];
  uit.groepen.forEach(function (g) {
    var wie = gebruikersnaam(g.email), titel = "CSF · gemiste leerstof van je leerlingen (" + Utilities.formatDate(tot, "Europe/Brussels", "dd/MM") + ")", body = berichtHtml(g, SITE);
    if (proefRun) { verslag.push("<h3>Aan " + esc(g.naam || g.email) + " · Smartschool: <code>" + esc(wie) + "</code></h3>" + body); return; }
    var r = smartschool("sendMsg", { userIdentifier: wie, title: titel, body: body, senderIdentifier: AFZENDER });
    if (r.ok) verslag.push("✓ " + (g.naam || g.email) + " (" + g.items.length + ")"); else fouten.push("✗ " + (g.naam || g.email) + " · " + wie + " · " + r.fout);
  });
  var zonder = uit.onbekend.map(function (x) { return "• " + x.leerling + " (" + x.klas + ") · " + x.datum + " · " + x.reden; });
  var ik = Session.getEffectiveUser().getEmail();
  if (proefRun) {
    MailApp.sendEmail({ to: ik, subject: "CSF-weekbericht · proef (er vertrok niets)", name: "CSF Campus Lievegem",
      htmlBody: "<p><b>Proef:</b> zo zouden de berichten van deze week eruitzien. Er vertrok niets naar Smartschool.</p>" + (verslag.join("<hr>") || "<p>Deze week is er niets te melden.</p>") +
        (zonder.length ? "<h3>Zonder leerkracht (niet verstuurd)</h3><p>" + zonder.map(esc).join("<br>") + "</p>" : "") + (uit.uitgeschreven.length ? "<p>Uitgeschreven: " + esc(uit.uitgeschreven.join(", ")) + "</p>" : "") });
    Logger.log("Proef: " + uit.groepen.length + " bericht(en) naar je e-mail gestuurd.");
    return;
  }
  props.setProperty("LAATSTE", tot.toISOString());
  if (fouten.length || zonder.length) MailApp.sendEmail({ to: ik, subject: "CSF-weekbericht · verslag", name: "CSF Campus Lievegem",
    body: "Verstuurd:\n" + (verslag.join("\n") || "–") + (fouten.length ? "\n\nMislukt:\n" + fouten.join("\n") : "") + (zonder.length ? "\n\nZonder leerkracht (niet verstuurd):\n" + zonder.join("\n") : "") });
  Logger.log(verslag.length + " bericht(en) verstuurd, " + fouten.length + " mislukt.");
}

/* ---------- wie krijgt wat? (zuivere functies, ook getest in test/weekbericht.js) ---------- */
function nietsGemist(t) { return !String(t || "").trim() || /^\s*(niets|niks|nee|neen|geen|geen idee|\/|-|\.|x)\s*[.!]?\s*$/i.test(String(t)); }
function dagcode(datum) { var d = new Date(String(datum).slice(0, 10) + "T12:00:00Z"); return isNaN(d) ? "" : DAGCODES[d.getUTCDay()]; }
function verzamel(leerlingen, logboeken, voorkeuren, van, tot) {
  var ll = {}, uitgeschr = {}, groepen = {}, onbekend = [], uitgeschreven = [];
  (leerlingen || []).forEach(function (l) { ll[l._id] = l; });
  (voorkeuren || []).forEach(function (v) { if (v.weekbericht === false) uitgeschr[String(v._id).toLowerCase()] = true; });
  (logboeken || []).forEach(function (lb) {
    var l = ll[lb.leerling];
    if (!l || l.actief === false || l.test || String(lb.leerling).indexOf("test--") === 0 || lb.status === "geannuleerd") return;
    var ls = lb.lessen || [], o = lb.opstart || {}, ms = o.momenten && o.momenten.length ? o.momenten : [];
    ls.forEach(function (les, i) {
      var b = les.begin || {};
      if (i === 0 || !b.tijd || b.tijd < van || b.tijd >= tot || nietsGemist(b.gemist)) return;
      var vorige = ls[i - 1], dc = dagcode(vorige && vorige.datum);
      var hier = ms.filter(function (m) { return m.dag === dc; });
      if (!hier.length && ms.length === 1) hier = ms;
      var item = { leerling: l.naam || lb.naam || lb.leerling, klas: l.klas || (o.klas || ""), datum: vorige ? vorige.datum : "", project: lb.project, projectnaam: lb.projectnaam || lb.project,
        gemist: b.gemist, ingehaald: b.ingehaald || "", vragen: (les.einde || {}).vragen || "" };
      var metMail = hier.filter(function (m) { return m.email; });
      if (!metMail.length) { onbekend.push(Object.assign({ reden: hier.length ? "leerkracht zonder e-mailadres (" + (hier[0].leerkracht || "?") + ")" : "geen les op " + (dc || "?") + " in de opstart" }, item)); return; }
      metMail.forEach(function (m) {
        var e = String(m.email).toLowerCase();
        if (uitgeschr[e]) { if (uitgeschreven.indexOf(e) < 0) uitgeschreven.push(e); return; }
        var g = groepen[e] || (groepen[e] = { email: e, naam: m.leerkracht || "", items: [] });
        g.items.push(Object.assign({ vak: m.vak || "", lesuur: m.lesuur || "" }, item));
      });
    });
  });
  var lijst = Object.keys(groepen).sort().map(function (k) { var g = groepen[k]; g.items.sort(function (a, b) { return String(a.klas).localeCompare(String(b.klas)) || String(a.leerling).localeCompare(String(b.leerling)) || String(a.datum).localeCompare(String(b.datum)); }); return g; });
  return { groepen: lijst, onbekend: onbekend, uitgeschreven: uitgeschreven };
}
function datumNl(d) { var p = String(d || "").slice(0, 10).split("-"); return p.length === 3 ? p[2] + "/" + p[1] + "/" + p[0] : String(d || ""); }
function esc(t) { return String(t == null ? "" : t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"); }
function berichtHtml(g, site) {
  var naam = String(g.naam || "").split(/\s+/)[0];
  return "<p>Beste" + (naam ? " " + esc(naam) : "") + ",</p><p>Deze CSF-leerlingen verlieten de voorbije week jouw les om aan hun CSF-project te werken. Zo halen ze de gemiste leerstof in:</p>" +
    g.items.map(function (x) {
      return '<p style="margin:14px 0 4px"><b>' + esc(x.leerling) + "</b>" + (x.klas ? " (" + esc(x.klas) + ")" : "") + " · " + esc(datumNl(x.datum)) + (x.vak ? " · " + esc(x.vak) : "") + (x.lesuur ? ", " + esc(x.lesuur) + "e lesuur" : "") + "</p>" +
        '<ul style="margin:0 0 8px">' +
        "<li><b>Gemiste leerstof:</b> " + esc(x.gemist) + "</li>" +
        (x.ingehaald ? "<li><b>Zo haalt de leerling ze in:</b> " + esc(x.ingehaald) + "</li>" : "") +
        (x.vragen === "JA" ? "<li><b>De leerling heeft nog vragen</b> over de gemiste leerstof.</li>" : "") +
        '<li><b>Project:</b> <a href="' + esc(site) + "#p-" + esc(x.project) + '">' + esc(x.projectnaam) + "</a></li></ul>";
    }).join("") +
    '<p style="color:#666;font-size:90%">Je krijgt dit bericht één keer per week van de werkgroep CSF. Wil je het niet meer ontvangen? Zet het uit in het <a href="' + esc(site) + '#dashboard">CSF-dashboard</a>.</p>';
}
function gebruikersnaam(email) { var e = String(email).toLowerCase(); return AFWIJKEND[e] || e.split("@")[0]; }

/* ---------- Smartschool-webservices (SOAP) ---------- */
var WSDL = null;
function smartschool(methode, waarden) {
  var code = PropertiesService.getScriptProperties().getProperty("SMARTSCHOOL_CODE");
  if (!SCHOOL) return { ok: false, fout: "SCHOOL is niet ingevuld bovenaan de code." };
  if (!code) return { ok: false, fout: "De scripteigenschap SMARTSCHOOL_CODE ontbreekt." };
  var url = "https://" + SCHOOL + ".smartschool.be/Webservices/V3";
  if (!WSDL) WSDL = UrlFetchApp.fetch(url + "?wsdl", { muteHttpExceptions: true }).getContentText();
  var ns = (WSDL.match(/targetNamespace="([^"]+)"/) || [])[1] || url;
  /* de volgorde van de parameters komt uit de WSDL; lukt dat niet, dan de gekende volgorde van sendMsg */
  var bericht = (WSDL.match(new RegExp('<(?:\\w+:)?message[^>]*name="' + methode + '(?:Request)?"[^>]*>([\\s\\S]*?)</(?:\\w+:)?message>')) || [])[1] || "";
  var delen = []; bericht.replace(/<(?:\w+:)?part\b[^>]*>/g, function (tag) { var n = (tag.match(/name="([^"]+)"/) || [])[1], t = (tag.match(/type="([^"]+)"/) || [])[1] || ""; if (n) delen.push([n, t]); });
  if (!delen.length && methode === "sendMsg") delen = [["accesscode", "string"], ["userIdentifier", "string"], ["title", "string"], ["body", "string"], ["senderIdentifier", "string"], ["attachments", "string"], ["coaccount", "int"], ["copyToLVS", "boolean"]];
  if (!/definitions/.test(WSDL)) return { ok: false, fout: "Smartschool-webservices niet bereikbaar. Staan de webservices aan?" };
  var op = (WSDL.match(new RegExp('<(?:\\w+:)?operation[^>]*name="' + methode + '"[^>]*>\\s*<[^>]*soapAction="([^"]*)"')) || [])[1];
  var actie = op || url + "#" + methode;
  var std = { accesscode: code, coaccount: 0, copyToLVS: false, attachments: "" };
  var xml = '<?xml version="1.0" encoding="UTF-8"?><SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ns1="' + esc(ns) + '" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" SOAP-ENV:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/"><SOAP-ENV:Body><ns1:' + methode + ">" +
    delen.map(function (d) {
      var v = d[0] in waarden ? waarden[d[0]] : d[0] in std ? std[d[0]] : "", t = /int/.test(d[1]) ? "xsd:int" : /bool/.test(d[1]) ? "xsd:boolean" : "xsd:string";
      return "<" + d[0] + ' xsi:type="' + t + '">' + esc(v) + "</" + d[0] + ">";
    }).join("") + "</ns1:" + methode + "></SOAP-ENV:Body></SOAP-ENV:Envelope>";
  var r = UrlFetchApp.fetch(url, { method: "post", contentType: "text/xml; charset=utf-8", headers: { SOAPAction: actie }, payload: xml, muteHttpExceptions: true });
  var tekst = r.getContentText();
  if (r.getResponseCode() !== 200 || /Fault>/.test(tekst)) return { ok: false, fout: "HTTP " + r.getResponseCode() + " " + ((tekst.match(/<faultstring>([\s\S]*?)<\/faultstring>/) || [])[1] || tekst.slice(0, 200)) };
  var body = (tekst.match(/Response[^>]*>([\s\S]*?)<\/[\w:]*\w+Response>/) || [])[1] || "", terug = ((body.match(/>([^<>]*)</) || [])[1] || "").trim();
  if (terug && terug !== "0" && /^\d+$/.test(terug)) return { ok: false, fout: "Smartschool-foutcode " + terug };
  return { ok: true };
}

/* ---------- Firestore lezen met jouw eigen Google-account (eigenaar van het Firebase-project) ---------- */
function api(pad) {
  var r = UrlFetchApp.fetch("https://firestore.googleapis.com/v1/projects/" + PROJECT + "/databases/(default)/documents/" + pad, {
    headers: { Authorization: "Bearer " + ScriptApp.getOAuthToken(), "X-Goog-User-Project": PROJECT },
    muteHttpExceptions: true
  });
  if (r.getResponseCode() === 404) return null;
  if (r.getResponseCode() !== 200) throw new Error("Firestore " + r.getResponseCode() + ": " + r.getContentText());
  return JSON.parse(r.getContentText());
}
function haalDoc(pad) { var d = api(pad); return d ? velden(d.fields || {}) : null; }
function haalAlles(col) {
  var uit = [], token = "";
  do {
    var d = api(col + "?pageSize=300" + (token ? "&pageToken=" + encodeURIComponent(token) : "")) || {};
    (d.documents || []).forEach(function (doc) { var o = velden(doc.fields || {}); o._id = doc.name.split("/").pop(); uit.push(o); });
    token = d.nextPageToken || "";
  } while (token);
  return uit;
}
function waarde(v) {
  if ("stringValue" in v) return v.stringValue;
  if ("booleanValue" in v) return v.booleanValue;
  if ("integerValue" in v) return Number(v.integerValue);
  if ("doubleValue" in v) return v.doubleValue;
  if ("timestampValue" in v) return v.timestampValue;
  if ("nullValue" in v) return null;
  if ("arrayValue" in v) return (v.arrayValue.values || []).map(waarde);
  if ("mapValue" in v) return velden(v.mapValue.fields || {});
  return null;
}
function velden(f) { var o = {}; Object.keys(f).forEach(function (k) { o[k] = waarde(f[k]); }); return o; }
