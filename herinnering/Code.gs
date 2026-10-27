/* =====================================================================
   CSF-portaal · herinnering per e-mail
   Elke schooldag om 16 uur: een leerling die vandaag CSF had (dag uit zijn
   opstart) en zijn logboek niet volledig invulde, krijgt een e-mail.
   Enkel voor leerlingen met ‘Logboek elke les’ aangevinkt.
   Aan/uit en vrije dagen stel je in via Dashboard → Coaches en instellingen.
   Installeren: zie LEESMIJ.md, deel ‘Herinnering per e-mail’.
   ===================================================================== */
var PROJECT = "campus-lievegem-csf";
var SITE = "https://vandaelet.github.io/CSF/";
var DAGCODES = ["", "MA", "DI", "WOE", "DO", "VRIJ", ""];   // zondag = 0

/* Voer dit één keer uit: maakt de dagelijkse taak om 16 uur. */
function installeer() {
  ScriptApp.getProjectTriggers().forEach(function (t) { if (t.getHandlerFunction() === "stuurHerinneringen") ScriptApp.deleteTrigger(t); });
  ScriptApp.newTrigger("stuurHerinneringen").timeBased().everyDays(1).atHour(16).nearMinute(5).inTimezone("Europe/Brussels").create();
  Logger.log("De herinnering vertrekt voortaan elke schooldag rond 16 uur.");
}

/* Test zonder e-mails te versturen: toont wie vandaag een herinnering zou krijgen. */
function proef() { stuurHerinneringen(true); }

function stuurHerinneringen(enkelTonen) {
  var nu = new Date(), vandaag = Utilities.formatDate(nu, "Europe/Brussels", "yyyy-MM-dd");
  var weekdag = Number(Utilities.formatDate(nu, "Europe/Brussels", "u")) % 7;   // 1 = maandag … 7 = zondag
  var inst = haalDoc("instellingen/herinnering") || {};
  if (inst.aan !== true && enkelTonen !== true) { Logger.log("Herinneringen staan uit in het dashboard."); return; }
  if (isVrij(vandaag, inst.vrij)) { Logger.log(vandaag + " is een vrije dag."); return; }
  var lijst = wieKrijgtHerinnering(haalAlles("leerlingen"), haalAlles("logboeken"), vandaag, DAGCODES[weekdag]);
  lijst.forEach(function (x) {
    if (enkelTonen === true) { Logger.log("zou mailen naar " + x.email + " (" + x.projectnaam + ")"); return; }
    MailApp.sendEmail({
      to: x.email,
      subject: "CSF: vergeet niet tijdig je logboek aan te vullen",
      body: "Dag " + x.voornaam + ",\n\nVergeet niet tijdig je logboek aan te vullen.\nJe had vandaag CSF voor je project ‘" + x.projectnaam + "’.\nVul het einde van je lesuur nog in.\n\n" +
            SITE + "#logboek-" + x.project + "\n\nJe CSF-coach",
      name: "CSF Campus Lievegem"
    });
  });
  Logger.log(lijst.length + " herinnering(en) " + (enkelTonen === true ? "gevonden" : "verstuurd") + " op " + vandaag + ".");
}

/* Wie krijgt vandaag een herinnering? (zuivere functie, ook getest in test/herinnering.js) */
function wieKrijgtHerinnering(leerlingen, logboeken, vandaag, dagcode) {
  if (!dagcode) return [];
  var uit = [];
  leerlingen.forEach(function (l) {
    if (l.actief === false || l.herinnering === false) return;
    var lopend = logboeken.filter(function (lb) { return lb.leerling === l._id && lb.status !== "afgerond"; });
    var vandaagCsf = lopend.filter(function (lb) { return lb.opstart && lb.opstart.dag === dagcode; });
    if (!vandaagCsf.length) return;
    var inOrde = lopend.some(function (lb) {
      return (lb.lessen || []).some(function (les) { return les.datum === vandaag && les.einde; });
    });
    if (inOrde) return;
    var lb = vandaagCsf[0], naam = String(l.naam || "");
    uit.push({ email: l._id, voornaam: naam.split(/\s+/).pop() || naam, project: lb.project, projectnaam: lb.projectnaam || lb.project });
  });
  return uit;
}

function isVrij(dag, tekst) {
  return String(tekst || "").split(/\n/).some(function (r) {
    var d = r.match(/\d{4}-\d{2}-\d{2}/g); if (!d) return false;
    return d.length === 1 ? dag === d[0] : dag >= d[0] && dag <= d[1];
  });
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
