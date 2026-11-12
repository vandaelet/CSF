/* Test van het schrijfatelier (schrijfatelier/index.html) met de nep-Firebase:
   leerling maakt een boek, schrijft, versies, schrijfcoach, prikbord, personages, doelen, downloads,
   herladen, coach geeft feedback, leerling niet op de lijst, en de lokale modus zonder Firebase.
   Gebruik: test/serve.sh && node test/schrijfatelier.js */
const { B, context, pagina, fakedb, wacht } = require('./helpers');
const fs = require('fs');
let fouten = 0; const ok = (v, t) => { console.log((v ? '  ok   ' : '  FOUT ') + t); if (!v) fouten++; };
const JAN = { uid: 'u1', email: 'jan.peeters@svsl.be', displayName: 'Jan Peeters' };
const COACH = { uid: 'c1', email: 'coach.anna@svsl.be', displayName: 'Anna Coach' };
async function login(p, u) {
  await p.evaluate(() => sessionStorage.removeItem('fake_user'));
  await p.goto(B + 'schrijfatelier/'); await p.waitForSelector('#loginBtn:not([hidden])', { state: 'visible' });
  await p.evaluate(u => { window.__nextUser = u; }, u); await p.click('#loginBtn'); await p.waitForTimeout(600);
}
(async () => {
  const { b, ctx } = await context();
  const p = await pagina(ctx, { 'leerlingen/jan.peeters@svsl.be': { naam: 'Jan Peeters', actief: true, klas: '2D' }, 'coaches/coach.anna@svsl.be': { naam: 'Anna Coach' } });

  /* ---- leerling: een nieuw boek ---- */
  await login(p, JAN);
  ok(await p.isVisible('#wizard'), 'wizard voor een nieuw boek');
  await p.fill('#w-titel', 'Het geheim van de vuurtoren');
  await p.check('input[name=wdoel][value=eigen]'); await p.fill('#w-eigen', '4000');
  await p.click('#w-start'); await p.waitForTimeout(300);
  ok(await p.isVisible('#app'), 'atelier open');
  ok((await p.locator('.knoop.map').count()) === 5, 'verhaalberg: 5 hoofdstukken');
  ok((await p.textContent('#k-woorden')).includes('4.000'), 'eigen woorddoel 4 000');

  /* ---- schrijven ---- */
  await p.click('#tekst');
  const zin = 'Noor liep naar de vuurtoren. Het was heel donker en ze was bang. De vuurtoren stond op de rots en de vuurtoren was oud. Ze hoorde de golven tegen de stenen slaan en rook het zout. ';
  await p.keyboard.type(zin.repeat(3) + 'Toen ging de deur open en stapte ze naar binnen zonder om te kijken, ook al wist ze dat iemand haar al de hele avond volgde vanaf het strand tot hier bij de oude rotsen.');
  await p.waitForTimeout(2600);
  let db = await fakedb(p);
  const tk = Object.keys(db).filter(k => k.startsWith('teksten/jan.peeters@svsl.be__'));
  ok(tk.length === 1 && db[tk[0]].woorden > 100, 'tekst bewaard in Firestore (' + (tk[0] && db[tk[0]].woorden) + ' woorden)');
  ok(db['boeken/jan.peeters@svsl.be'] && db['boeken/jan.peeters@svsl.be'].titel === 'Het geheim van de vuurtoren', 'boek bewaard');
  const sc = db['boeken/jan.peeters@svsl.be'].binder[0].kinderen[0];
  ok(sc.woorden > 100 && sc.status === 'klad', 'woorden en status ‘eerste versie’ in de binder');
  ok(Object.values(db['boeken/jan.peeters@svsl.be'].dagen)[0] > 100, 'woorden van vandaag geteld');
  ok(!/<(span|font|div)/.test(db[tk[0]].html), 'opgekuiste HTML');

  /* ---- schrijfcoach ---- */
  await p.click('[data-insp=coach]'); await p.waitForTimeout(200);
  const coachTekst = await p.textContent('#insp');
  ok(/lange zin/.test(coachTekst) && /Opvulwoorden/.test(coachTekst) && /Herhaling/.test(coachTekst) && /Vertellen of tonen/.test(coachTekst), 'schrijfcoach vindt lange zin, opvulwoorden, herhaling en vertellen');
  await p.click('#c-mark'); await p.waitForTimeout(200);
  ok(await p.locator('#tekst mark.lang').count() >= 1 && await p.locator('#tekst mark.vertel').count() >= 1 && await p.locator('#tekst mark.herh').count() >= 1, 'markeringen in de tekst');
  ok(!(await p.getAttribute('#tekst', 'contenteditable')), 'gemarkeerde tekst is niet bewerkbaar');
  await p.screenshot({ path: process.env.SHOT_DIR ? process.env.SHOT_DIR + '/atelier-coach.png' : '/dev/null' }).catch(() => {});
  await p.click('#mk-uit'); await p.waitForTimeout(200);
  ok(await p.getAttribute('#tekst', 'contenteditable') === 'true', 'terug naar schrijven');

  /* ---- versies ---- */
  await p.click('[data-insp=versies]'); await p.fill('#v-naam', 'eerste poging'); await p.click('#v-maak'); await p.waitForTimeout(1800);
  db = await fakedb(p); ok((db[tk[0]].versies || []).some(v => v.naam === 'eerste poging'), 'versie bewaard');

  /* ---- scène toevoegen, hernoemen via titel ---- */
  await p.click('#b-scene'); await p.waitForTimeout(200);
  ok((await p.locator('.knoop.scene').count()) === 6, 'scène toegevoegd');

  /* ---- prikbord, overzicht, personages, plan, doelen ---- */
  await p.click('[data-view=prikbord]'); ok((await p.locator('#v-prikbord .idx[data-id]').count()) === 6, 'prikbord toont 6 kaartjes');
  await p.locator('#v-prikbord .idx[data-id] textarea').first().fill('Noor gaat naar de vuurtoren.');
  await p.click('[data-view=overzicht]'); ok((await p.locator('#v-overzicht tr[data-id]').count()) === 6, 'overzicht toont 6 scènes');
  ok((await p.textContent('#v-overzicht')).includes('Noor gaat naar de vuurtoren.'), 'samenvatting van het prikbord in het overzicht');
  await p.click('[data-view=personages]'); await p.click('[data-nieuw=personages]'); await p.fill('#v-personages .fiche[data-i="0"] input', 'Noor');
  await p.fill('#v-personages .fiche[data-i="0"] textarea[data-veld=wil]', 'Haar broer redden');
  await p.click('[data-view=plan]'); ok((await p.locator('#v-plan .fase').count()) === 5, 'verhaalplan met 5 fasen');
  await p.click('[data-view=doelen]'); ok((await p.textContent('#v-doelen')).includes('dagen na elkaar') || (await p.textContent('#v-doelen')).includes('1 dag'), 'schrijfreeks');
  await p.click('[data-view=boek]');
  await p.fill('#bk-flap', 'Wie stuurt de berichten?');
  const [dl] = await Promise.all([p.waitForEvent('download'), p.click('#bk-html')]);
  const html = fs.readFileSync(await dl.path(), 'utf8');
  ok(html.includes('Het geheim van de vuurtoren') && html.includes('Noor liep naar de vuurtoren') && html.includes('Wie stuurt de berichten?'), 'boek als webpagina met tekst en flaptekst');
  const [dj] = await Promise.all([p.waitForEvent('download'), p.click('#bk-json')]);
  const rk = JSON.parse(fs.readFileSync(await dj.path(), 'utf8')); ok(rk.schrijfatelier === 1 && rk.boek.personages[0].naam === 'Noor', 'reservekopie met personage');
  await p.waitForTimeout(1600);

  /* ---- verhaalcheck en volgende stap ---- */
  await p.click('[data-view=check]'); await p.waitForSelector('#v-check .check');
  const ch = await p.textContent('#v-check');
  ok(/Verhaalberg/.test(ch) && /Personages/.test(ch) && /Tijd en verteller/.test(ch) && /Afwerking/.test(ch), 'verhaalcheck toont vier onderdelen');
  ok(/verleden tijd/.test(ch), 'verhaalcheck herkent de verleden tijd');
  ok(/lege scène/.test(ch), 'verhaalcheck vindt lege scènes');
  ok(/Schrijf eerst een paar scènes/.test(ch), 'personagecheck wacht tot er meer scènes zijn');
  await p.click('[data-view=schrijven]'); await p.waitForTimeout(1500);
  ok((await p.textContent('#stap')).includes('Jouw volgende stap') && await p.locator('#stap .fasen-stap span.nu').count() === 1, 'kaart ‘Jouw volgende stap’ met de huidige fase');
  /* ---- herladen: alles is er nog ---- */
  await p.reload(); await p.waitForSelector('#app:not([hidden])'); await p.waitForTimeout(400);
  ok((await p.textContent('#tekst')).includes('Noor liep naar de vuurtoren'), 'na herladen staat de tekst er nog');
  db = await fakedb(p); ok(db['boeken/jan.peeters@svsl.be'].personages[0].wil === 'Haar broer redden', 'personage bewaard');

  /* ---- coach: lijst, lezen en feedback ---- */
  await login(p, COACH);
  ok(await p.isVisible('#coach'), 'coach ziet het coachscherm');
  ok((await p.textContent('#coach-lijst')).includes('Het geheim van de vuurtoren'), 'boek van de leerling in de lijst');
  await p.click('[data-open="jan.peeters@svsl.be"]'); await p.waitForTimeout(400);
  ok(await p.getAttribute('#tekst', 'contenteditable') === null, 'coach kan de tekst niet bewerken');
  await p.click('[data-insp=feedback]'); await p.fill('#f-tekst', 'Sterk begin! Toon nog meer hoe bang Noor is.'); await p.click('#f-stuur'); await p.waitForTimeout(300);
  db = await fakedb(p); const fb = db['boeken/jan.peeters@svsl.be'].feedback;
  ok(fb && Object.values(fb)[0][0].tekst.includes('Sterk begin'), 'feedback bewaard bij de scène');
  ok(db['boeken/jan.peeters@svsl.be'].titel === 'Het geheim van de vuurtoren', 'coach veranderde niets anders aan het boek');

  /* ---- leerling ziet de feedback ---- */
  await login(p, JAN); await p.waitForSelector('#app:not([hidden])');
  ok((await p.textContent('#fb-badge')).includes('1'), 'leerling ziet 1 nieuwe feedback');
  await p.click('[data-insp=feedback]'); ok((await p.textContent('#insp')).includes('Sterk begin'), 'feedback zichtbaar bij de scène');
  await p.click('#f-gelezen'); await p.waitForTimeout(300); ok((await p.textContent('#fb-badge')).trim() === '', 'feedback gelezen');
  db = await fakedb(p); ok(Object.values(db['boeken/jan.peeters@svsl.be'].feedback)[0][0].gelezen === true, 'gelezen bewaard');

  /* ---- een leerling die niet op de CSF-lijst staat ---- */
  await login(p, { uid: 'u9', email: 'piet.vreemd@svsl.be', displayName: 'Piet' });
  ok((await p.textContent('#login-melding')).includes('niet op de CSF-lijst'), 'niet op de lijst: melding');
  ok(p.fouten.length === 0, 'geen JavaScript-fouten (' + p.fouten.join(' | ') + ')');
  await b.close();

  /* ---- lokale modus zonder Firebase ---- */
  const L = await context({ zonderPortaal: true }); const q = await pagina(L.ctx, {});
  await q.goto(B + 'schrijfatelier/'); await q.waitForSelector('#wizard:not([hidden])');
  await q.fill('#w-titel', 'Lokaal boek'); await q.click('#w-start'); await q.click('#tekst'); await q.keyboard.type('Een korte test zonder internet.'); await q.waitForTimeout(1800);
  await q.reload(); await q.waitForSelector('#app:not([hidden])'); await q.waitForTimeout(300);
  ok((await q.textContent('#tekst')).includes('zonder internet'), 'lokale modus bewaart in de browser');
  ok(q.fouten.length === 0, 'lokaal: geen JavaScript-fouten (' + q.fouten.join(' | ') + ')');
  await L.b.close();

  console.log(fouten ? 'MISLUKT: ' + fouten + ' fout(en)' : 'ALLES OK'); process.exit(fouten ? 1 : 0);
})();
