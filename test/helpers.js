/* Gemeenschappelijk voor de testscripts: een browsercontext waarin Firebase vervangen is door test/fake/
   (nep-Firebase, overgenomen van het wiskundeportaal: alles blijft in localStorage '__fakedb'). */
const { chromium } = require('playwright'); const fs = require('fs'); const path = require('path');
const B = 'http://localhost:8765/';
const CONFIG = 'CSF.firebaseConfig = { apiKey: "test", authDomain: "test.firebaseapp.com", projectId: "test", appId: "test" }; CSF.domein = "svsl.be";';
async function context(opts = {}){
  const b = await chromium.launch(); const ctx = await b.newContext({ viewport:{ width:opts.breedte || 1280, height:1000 }, acceptDownloads:true });
  const fake = n => fs.readFileSync(path.join(__dirname, 'fake', n + '.js'), 'utf8');
  await ctx.route(/gstatic\.com\/firebasejs\/.*\/firebase-(app|auth|firestore)\.js/, r=>{ const m = r.request().url().match(/firebase-(app|auth|firestore)/)[1]; r.fulfill({ contentType:'text/javascript', body:fake({ app:'app', auth:'auth', firestore:'fs' }[m]) }); });
  if(!opts.zonderPortaal) await ctx.route(/portaal-config\.js/, r=>r.fulfill({ contentType:'text/javascript', body:CONFIG }));
  await ctx.route(/fonts\.(googleapis|gstatic)/, r=>r.fulfill({ contentType:'text/css', body:'' }));
  return { b, ctx };
}
/* nieuwe pagina met een nep-database (optioneel met startdocumenten) */
async function pagina(ctx, db = {}){
  const p = await ctx.newPage(); p.fouten = []; p.on('pageerror', e=>p.fouten.push(e.message)); p.on('dialog', d=>d.accept());
  await p.goto(B); await p.evaluate(d=>{ localStorage.clear(); sessionStorage.clear(); localStorage.setItem('__fakedb', JSON.stringify(d)); }, db);
  return p;
}
/* aanmelden als een gekozen gebruiker op een pagina (url zonder B, bv. '#logboek') */
async function aanmelden(p, url, gebruiker){
  await p.evaluate(()=>sessionStorage.removeItem('fake_user'));
  await p.goto(B + url); await p.reload(); await p.waitForSelector('#loginBtn');
  await p.evaluate(u=>{ window.__nextUser = u; }, gebruiker); await p.click('#loginBtn'); await p.waitForTimeout(700);
}
const fakedb = p => p.evaluate(()=>JSON.parse(localStorage.getItem('__fakedb') || '{}'));
const wacht = ms => new Promise(r=>setTimeout(r, ms));
module.exports = { B, context, pagina, aanmelden, fakedb, wacht };
