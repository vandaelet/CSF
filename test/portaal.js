/* Test van het portaal met de nep-Firebase: leerlingen importeren, coach toewijzen, logboek (opstart, begin en einde,
   afsluiting), poorten, feedback bevestigen, vakleerkracht, coachfiches via de rol, export en zonder koppeling.
   Klaslijsten: enkel fictieve namen (test/voorbeeld-*.xlsx).
   Gebruik: test/serve.sh && node test/portaal.js   (coachfiches openen wordt enkel getest met CSF_COACHCODE=…) */
const { B, context, pagina, aanmelden, fakedb, wacht } = require('./helpers');
let ok = true; const fout = m => { ok = false; console.log('  FOUT: ' + m); }; const goed = m => console.log('  ok   ' + m);
const check = (v, m) => v ? goed(m) : fout(m);

const TOM = { uid:'t', email:'tom@svsl.be', displayName:'Tom Van Daele' };
const ELS = { uid:'e', email:'els@svsl.be', displayName:'Els Van Huffel' };
const LIEN = { uid:'l', email:'peeters.lien@svsl.be', displayName:'Lien Peeters' };
const AN = { uid:'a', email:'an@svsl.be', displayName:'An Vakleerkracht' };
const DB = {
  'beheerders/tom@svsl.be': {},
  'coaches/tom@svsl.be': { naam:'Van Daele T.' },
  'coaches/els@svsl.be': { naam:'Van Huffel E.' },
  'leerlingen/mo@svsl.be': { naam:'Mo Claes', klas:'1B', coach:'els@svsl.be', coachNaam:'Van Huffel E.', vakleerkrachten:[] },
  'logboeken/mo@svsl.be__talen': { leerling:'mo@svsl.be', naam:'Mo Claes', project:'talen', projectnaam:'Taalbouwers: ontwerp je eigen taal', gestart:'2026-10-01T08:00:00Z', status:'bezig',
    opstart:{ klas:'1B' }, lessen:[{ nr:1, datum:'2026-10-01', begin:{ stappen:['Wat is de opdracht?'], minuten:50 } }], kijkers:[] },
  // Noor: dinsdag CSF, online op dinsdag 20 oktober zonder logboek → uitroepteken
  'leerlingen/noor@svsl.be': { naam:'Mertens Noor', klas:'1C', coach:'tom@svsl.be', coachNaam:'Van Daele T.', vakleerkrachten:[] },
  'logboeken/noor@svsl.be__talen': { leerling:'noor@svsl.be', naam:'Mertens Noor', project:'talen', projectnaam:'Taalbouwers', gestart:'2026-10-01T08:00:00Z', status:'bezig',
    opstart:{ dag:'DI' }, lessen:[{ nr:1, datum:'2026-10-13', begin:{}, einde:{} }], kijkers:[] },
  'gezien/noor@svsl.be': { dagen:['2026-10-13', '2026-10-20'] },
  // Kobe: dinsdag CSF, enkel online op een woensdag → vinkje
  'leerlingen/kobe@svsl.be': { naam:'Janssens Kobe', klas:'1C', coach:'tom@svsl.be', coachNaam:'Van Daele T.', vakleerkrachten:[] },
  'logboeken/kobe@svsl.be__talen': { leerling:'kobe@svsl.be', naam:'Janssens Kobe', project:'talen', projectnaam:'Taalbouwers', gestart:'2026-10-01T08:00:00Z', status:'bezig',
    opstart:{ dag:'DI' }, lessen:[{ nr:1, datum:'2026-10-13', begin:{}, einde:{} }], kijkers:[] },
  'gezien/kobe@svsl.be': { dagen:['2026-10-13', '2026-10-21'] }
};

(async () => {
  const { b, ctx } = await context();
  const p = await pagina(ctx, DB);

  console.log('1. Beheerder: klaslijsten importeren en CSF-leerlingen aanvinken');
  await aanmelden(p, '#dashboard', TOM);
  await p.waitForSelector('.lb-overzicht');
  check(await p.locator('.db-rij').count() === 2 && await p.locator('#db-coach').inputValue() === 'tom@svsl.be', 'coach ziet eerst zijn eigen leerlingen');
  check(await p.locator('.db-rij[data-ll="noor@svsl.be"] .lb-teken.uit').count() === 1, 'uitroepteken: online op de CSF-dag zonder logboek');
  check(await p.locator('.db-rij[data-ll="kobe@svsl.be"] .lb-teken.ok').count() === 1, 'vinkje: logboek in orde (online op een andere dag telt niet)');
  await p.selectOption('#db-coach', 'alle'); await wacht(200);
  check(await p.locator('.db-rij[data-ll="mo@svsl.be"] .lb-teken.uit').count() === 1, 'uitroepteken bij een ontbrekend einde-logboek');
  check(await p.locator('.db-rij[data-ll="mo@svsl.be"] .lb-pill.rood').count() === 1, 'ontbrekend einde-logboek staat in het rood');
  await p.click('[data-tab="klaslijst"]'); await p.waitForSelector('#kl-bestand');
  await p.fill('#kl-jaar', '2026-2027');
  await p.setInputFiles('#kl-bestand', __dirname + '/voorbeeld-klaslijst-2026.xlsx');
  await p.click('#kl-import'); await p.waitForSelector('tr[data-k]'); await wacht(1200);
  let d = await fakedb(p);
  const kl = Object.entries(d).filter(([k]) => k.startsWith('klaslijst/'));
  check(kl.length === 7, 'klaslijst ingelezen: 7 leerlingen uit 2 klassen (' + kl.length + ')');
  check(d['klaslijst/lien_peeters'] && d['klaslijst/lien_peeters'].klas === '1A' && d['klaslijst/lien_peeters'].email === 'peeters.lien@svsl.be', 'e-mailvoorstel familienaam.voornaam');
  check(d['klaslijst/lisa_peeters_vandamme'].email === 'vandamme-peeters.lisa@svsl.be' && d['klaslijst/celik_emir'].email === 'celik.emir@svsl.be', 'voorstel zonder accenten, met koppelteken');
  check((await p.textContent('#kl-fb')).includes('7 leerlingen in 2 klassen'), 'melding na het importeren');
  check(!Object.keys(d).some(k => k.startsWith('leerlingen/peeters')), 'nog niemand aangevinkt');
  await p.selectOption('#kl-klas', '1A'); await wacht(200);
  check(await p.locator('tr[data-k]').count() === 4, 'filter op klas');
  await p.locator('tr[data-k="lien_peeters"] input[type=checkbox]').check(); await wacht(700);
  await p.locator('tr[data-k="arthur_hecke_van"] input[type=text]').fill('nietgeldig');
  await p.locator('tr[data-k="arthur_hecke_van"] input[type=checkbox]').click(); await wacht(300);
  check(!(await p.locator('tr[data-k="arthur_hecke_van"] input[type=checkbox]').isChecked()) && (await p.textContent('#kl-rijfb')).includes('geldig schooladres'), 'aanvinken zonder geldig adres wordt geweigerd');
  d = await fakedb(p);
  check(d['klaslijst/lien_peeters'].csf === true && d['leerlingen/peeters.lien@svsl.be'] && d['leerlingen/peeters.lien@svsl.be'].actief === true && d['leerlingen/peeters.lien@svsl.be'].klassen['2026-2027'] === '1A', 'Lien aangevinkt: CSF-leerling met klas');
  await p.selectOption('tr[data-k="lien_peeters"] select', 'els@svsl.be'); await wacht(600);
  d = await fakedb(p);
  check(d['leerlingen/peeters.lien@svsl.be'].coach === 'els@svsl.be' && d['leerlingen/peeters.lien@svsl.be'].coachNaam === 'Van Huffel E.', 'coach toegewezen vanuit de klaslijst');
  await p.click('[data-tab="leerlingen"]');
  await p.waitForSelector('tr[data-ll="peeters.lien@svsl.be"]');
  const rij = p.locator('tr[data-ll="peeters.lien@svsl.be"]');
  await rij.locator('input[aria-label="Vakleerkracht"]').fill('an@svsl.be');
  await rij.locator('[data-bewaar]').click(); await wacht(700);
  d = await fakedb(p);
  check(JSON.stringify(d['leerlingen/peeters.lien@svsl.be'].vakleerkrachten) === '["an@svsl.be"]', 'vakleerkracht bewaard');

  console.log('2. Leerling: opstart en eerste lesuur');
  await aanmelden(p, '#logboek-wetenschappen', LIEN);
  await p.waitForSelector('#lb-opstart');
  await p.click('#lb-opstart button[type=submit]');
  check((await p.textContent('#lb-opstart .fb')).includes('verplichte'), 'opstart zonder antwoorden wordt geweigerd');
  await p.fill('#vak', 'wiskunde'); await p.fill('#vakleerkracht', 'meneer Peeters');
  await p.check('#dag-0'); await p.check('#lesuur-2'); await p.fill('#motivatie', 'Ik hou van speurwerk.'); await p.check('#evaluatieGelezen-0');
  await p.click('#lb-opstart button[type=submit]');
  await p.waitForSelector('#lb-begin');
  d = await fakedb(p);
  const LB = 'logboeken/peeters.lien@svsl.be__wetenschappen';
  check(d[LB] && d[LB].opstart.dag === 'MA' && d[LB].opstart.coach === 'Van Huffel E.', 'opstart bewaard');
  check(JSON.stringify(d[LB].kijkers) === '["an@svsl.be"]', 'vakleerkracht mag meelezen');
  check(await p.locator('.lb-stappen').count() === 0, 'stappenplan nog niet zichtbaar voor het begin-logboek');
  await p.goto(B + '#p-wetenschappen'); await p.waitForSelector('.lb-projectblok a'); await wacht(300);
  check(await p.locator('.les.lb-slot').count() === 3, 'projectpagina: alle 3 lesuren vergrendeld');
  await p.goto(B + '#logboek-wetenschappen'); await p.waitForSelector('#lb-begin');
  await p.click('#lb-begin button[type=submit]'); await p.waitForSelector('#lb-einde');
  check(await p.locator('.lb-stappen').count() === 1, 'stappenplan van lesuur 1 verschijnt na het begin-logboek');
  await p.goto(B + '#p-wetenschappen'); await p.waitForSelector('.lb-projectblok a'); await wacht(300);
  check(await p.locator('.les.lb-slot').count() === 2, 'projectpagina: lesuur 1 open, 2 en 3 vergrendeld');
  check((await p.textContent('.lb-projectblok')).includes('Logboek einde les invullen') && await p.locator('.lb-zweef').count() === 1, 'projectpagina: knop ‘Logboek einde les invullen’');
  check(await p.locator('.lb-modaal').count() === 0, 'geen vraag meer als het begin-logboek van vandaag ingevuld is');
  await p.goto(B + '#logboek-wetenschappen'); await p.waitForSelector('#lb-einde');
  await p.goto(B + '#logboek'); await p.waitForSelector('.lb-kaart');
  check((await p.textContent('.lb-kaart')).includes('bezig'), 'mijn logboek: project staat op bezig');
  await p.goto(B + '#logboek-wetenschappen'); await p.waitForSelector('#lb-einde');
  for (const [id, v] of [['weet', 'Inkt bestaat uit kleurstoffen.'], ['opdracht', 'De dader vinden.'], ['ideeen', 'Chromatografie, vingerafdrukken.'], ['besteIdee', 'Chromatografie'], ['schatting', '3 lesuren'], ['reden', 'Goed gepland.'], ['verloop', 'Vlot.']]) await p.fill('#' + id, v);
  await p.check('#tijd-0');
  await p.click('#lb-einde button[type=submit]'); await p.waitForSelector('#lb-begin');
  check((await p.textContent('#lb-begin button[type=submit]')).includes('lesuur 2'), 'na het einde-logboek start lesuur 2');

  console.log('3. Coach: feedback geven');
  await aanmelden(p, '#dashboard', ELS);
  await p.waitForSelector('.db-rij[data-ll="peeters.lien@svsl.be"]');
  check(await p.locator('[data-tab="beheer"]').count() === 0, 'coach ziet geen beheer');
  check(await p.locator('.db-rij').count() === 2, 'coach ziet eerst zijn eigen leerlingen (Lien en Mo)');
  check(await p.locator('.db-rij[data-ll="peeters.lien@svsl.be"] .lb-teken.ok').count() === 1, 'groen vinkje: Lien vulde haar logboek in');
  await p.click('.db-rij[data-ll="peeters.lien@svsl.be"]'); await p.waitForSelector('#db-fb');
  await p.fill('#db-fb-tekst', 'Mooi begin. Noteer ook je meetwaarden.'); await p.selectOption('#db-fb-les', '1');
  await p.click('#db-fb button[type=submit]'); await wacht(900);
  d = await fakedb(p);
  const fb = Object.entries(d).filter(([k]) => k.startsWith('feedback/'));
  check(fb.length === 1 && fb[0][1].gelezen === false && fb[0][1].les === 1 && fb[0][1].coachNaam === 'Van Huffel E.', 'feedback bewaard');

  console.log('4. Leerling: feedback bevestigen, lesuur 2 en afsluiten');
  await aanmelden(p, '#logboek-wetenschappen', LIEN);
  await p.waitForSelector('.lb-fbpoort');
  check(await p.locator('#lb-begin').count() === 0, 'eerst feedback lezen, dan pas verder');
  await p.click('#lb-bevestig');
  check((await p.textContent('.lb-acties .fb')).includes('Vink'), 'bevestigen zonder vinkje wordt geweigerd');
  await p.check('.lb-gelezen'); await p.click('#lb-bevestig'); await p.waitForSelector('#lb-begin');
  d = await fakedb(p);
  check(Object.entries(d).filter(([k]) => k.startsWith('feedback/'))[0][1].gelezen === true, 'feedback als gelezen bewaard');
  await p.waitForSelector('#lb-vraag');
  await p.click('#lb-vraag button[type=submit]');
  check((await p.textContent('#lb-vraag .fb')).includes('Typ eerst'), 'lege vraag wordt geweigerd');
  await p.fill('#lb-vraag-tekst', 'Mag ik ook rode inkt gebruiken?'); await p.click('#lb-vraag button[type=submit]');
  await p.waitForSelector('.lb-vragen .lb-pill.oranje');
  d = await fakedb(p); const VR = Object.entries(d).filter(([k]) => k.startsWith('vragen/'));
  check(VR.length === 1 && VR[0][1].open === true && VR[0][1].coach === 'els@svsl.be' && VR[0][1].project === 'wetenschappen', 'vraag aan de coach bewaard');
  await p.check('#stappen-0'); await p.fill('#plan', 'Chromatogrammen meten.');
  await p.click('#lb-begin button[type=submit]'); await p.waitForSelector('#lb-einde');
  await p.fill('#gemist', 'Breuken'); await p.fill('#ingehaald', 'Cursus gelezen.'); await p.check('#vragen-1'); await p.check('#geslaagd-0');
  await p.click('#lb-einde button[type=submit]'); await p.waitForSelector('#lb-naar-afsluiten');
  await p.click('#lb-naar-afsluiten'); await p.waitForSelector('#lb-afsluit');
  await p.check('#tijd-0'); await p.fill('#reden', 'Goed gepland.'); await p.check('#oordeel-1'); await p.check('#ef-0');
  await p.fill('#presentatie', 'Getuigenis van 2 minuten.'); await p.check('#structuur-0'); await p.check('#verzorgd-0');
  await p.fill('#nuWeet', 'Rf-waarden.'); await p.fill('#overMezelf', 'Ik meet nauwkeurig.'); await p.fill('#goedBeter', 'Planning kon beter.');
  await p.click('#lb-afsluit button[type=submit]'); await p.waitForSelector('.lb-melding.groen');
  d = await fakedb(p);
  check(d[LB].status === 'afgerond' && d[LB].lessen.length === 2 && d[LB].afsluiting.ef[0] === 'Ik schat mijn tijd goed in.', 'project afgerond met reflectie');

  console.log('4b. Coach beantwoordt de vraag');
  await aanmelden(p, '#dashboard', ELS); await p.waitForSelector('[data-tab="vragen"]');
  check((await p.textContent('[data-tab="vragen"]')).includes('(1)'), 'tabblad open vragen toont het aantal');
  check(await p.locator('.db-rij[data-ll="peeters.lien@svsl.be"] .lb-pill.turkoois').count() === 1, 'overzicht toont de open vraag');
  await p.click('[data-tab="vragen"]'); await p.waitForSelector('.lb-vraagkaart');
  check((await p.textContent('.lb-vraagkaart')).includes('rode inkt'), 'coach ziet de vraag');
  await p.fill('.lb-vraagkaart textarea', 'Ja, vergelijk ze met de blauwe.'); await p.click('[data-antw]'); await wacht(600);
  check((await p.textContent('#db-inhoud')).includes('geen open vragen') && !(await p.textContent('[data-tab="vragen"]')).includes('('), 'vraag beantwoord en gesloten');
  await aanmelden(p, '#logboek', LIEN); await p.waitForSelector('.lb-kaart');
  check((await p.textContent('.lb-melding.groen')).includes('beantwoordde je vraag'), 'leerling ziet dat er een antwoord is');
  await p.goto(B + '#logboek-wetenschappen'); await p.waitForSelector('.lb-antwoord');
  check((await p.textContent('.lb-antwoord')).includes('vergelijk ze met de blauwe'), 'antwoord in het projectvenster'); await wacht(500);
  d = await fakedb(p); check(Object.entries(d).filter(([k]) => k.startsWith('vragen/'))[0][1].gelezen === true, 'antwoord als gelezen bewaard');

  console.log('5. Vakleerkracht, onbekende leerling en ander domein');
  await aanmelden(p, '#dashboard', AN);
  await p.waitForSelector('.lb-overzicht');
  check(await p.locator('.db-rij').count() === 1 && await p.locator('.db-rij[data-ll="peeters.lien@svsl.be"]').count() === 1, 'vakleerkracht ziet enkel zijn leerling');
  check(await p.locator('[data-tab="leerlingen"]').count() === 0, 'vakleerkracht kan geen leerlingen beheren');
  await p.click('.db-rij'); await p.waitForSelector('.lb-detail');
  check(await p.locator('#db-fb').count() === 0 && (await p.textContent('.lb-detail')).includes('Chromatogrammen meten'), 'vakleerkracht leest het logboek zonder feedbackvak');
  await aanmelden(p, '#logboek', { uid:'x', email:'nieuw@svsl.be', displayName:'Nieuwe Leerling' });
  await p.waitForSelector('.lb-melding');
  check((await p.textContent('.lb-melding')).includes('nog niet op de CSF-lijst'), 'leerling zonder lijst krijgt uitleg');
  await aanmelden(p, '#logboek', { uid:'g', email:'iemand@gmail.com', displayName:'Gmail' });
  await p.waitForSelector('.lb-melding');
  check((await p.textContent('.lb-melding')).includes('schoolaccount'), 'ander domein geweigerd');

  await aanmelden(p, '#logboek', { uid:'m', email:'mo@svsl.be', displayName:'Mo Claes' });
  await p.waitForSelector('.lb-kaart');
  check((await p.textContent('.lb-melding.rood')).includes('Vergeet niet tijdig je logboek aan te vullen'), 'leerling met ontbrekend logboek ziet de herinnering in de site');

  console.log('5a. Vraag bij het aanmelden: begin-logboek invullen?');
  const KOBE = { uid:'k', email:'kobe@svsl.be', displayName:'Kobe Janssens' }, NOOR = { uid:'n', email:'noor@svsl.be', displayName:'Noor Mertens' };
  const naarStart = async () => { await p.goto(B + '#start'); await p.reload(); };
  await aanmelden(p, '#logboek', KOBE); await naarStart(); await p.waitForSelector('.lb-modaal');
  check((await p.textContent('.lb-modaal')).includes('Taalbouwers'), 'leerling krijgt de vraag met zijn project');
  await p.click('#lb-m-nee'); await wacht(500);
  d = await fakedb(p);
  const vandaag = await p.evaluate(() => { const x = new Date(); return x.getFullYear() + '-' + String(x.getMonth() + 1).padStart(2, '0') + '-' + String(x.getDate()).padStart(2, '0'); });
  check(d['gezien/kobe@svsl.be'].antwoorden[vandaag] === 'nee' && d['gezien/kobe@svsl.be'].dagen.includes(vandaag), '‘Neen’ wordt bewaard');
  await p.reload(); await wacht(1500);
  check(await p.locator('.lb-modaal').count() === 0, 'dezelfde dag geen tweede keer de vraag');
  await aanmelden(p, '#logboek', NOOR); await naarStart(); await p.waitForSelector('.lb-modaal');
  await p.click('#lb-m-ja'); await p.waitForSelector('#lb-begin');
  check(p.url().endsWith('#logboek-talen'), '‘Ja’ brengt de leerling naar zijn logboek');
  await aanmelden(p, '#dashboard', TOM); await p.waitForSelector('.db-rij[data-ll="kobe@svsl.be"]');
  await p.selectOption('#db-coach', 'alle'); await wacht(200);
  await p.click('.db-rij[data-ll="kobe@svsl.be"]'); await p.waitForSelector('.lb-detail');
  check((await p.textContent('.lb-detail')).includes('geen logboek nodig op'), 'coach ziet de dagen met ‘Neen’ in het logboek');

  console.log('5b. Nieuw schooljaar, export met e-mail, aanmeldpoging en stoppen');
  await aanmelden(p, '#dashboard', TOM); await p.click('[data-tab="klaslijst"]'); await p.waitForSelector('#kl-bestand', { state: 'attached' });
  await p.click('details.lb-hist summary');
  await p.fill('#kl-jaar', '2027-2028');
  await p.setInputFiles('#kl-bestand', __dirname + '/voorbeeld-klaslijst-2027.xlsx');
  await p.click('#kl-import'); await wacht(1500); await p.waitForSelector('tr[data-k]');
  d = await fakedb(p);
  const ll = d['leerlingen/peeters.lien@svsl.be'];
  check(ll.klas === '2A' && ll.klassen['2026-2027'] === '1A' && ll.klassen['2027-2028'] === '2A' && ll.coach === 'els@svsl.be', 'Lien schuift door naar 2A, geschiedenis en coach blijven');
  check(d[LB] && d[LB].status === 'afgerond', 'logboek van vorig jaar blijft bewaard');
  check(d['klaslijst/claes_mo'] && d['klaslijst/claes_mo'].schooljaar === '2026-2027' && d['instellingen/schooljaar'].jaar === '2027-2028', 'leerling die niet meer op de lijst staat blijft bewaard');
  check(await p.locator('tr[data-k="claes_mo"] .lb-pill.grijs').count() === 1, 'gemarkeerd: niet op de klaslijst van 2027-2028');
  if (!(await p.isVisible('#kl-jaar'))) await p.click('details.lb-hist summary');
  await p.fill('#kl-jaar', '2027-2028');
  await p.setInputFiles('#kl-bestand', __dirname + '/voorbeeld-export.xlsx');
  await p.click('#kl-import'); await wacht(1500); await p.waitForSelector('tr[data-k]');
  d = await fakedb(p);
  check(d['klaslijst/dhondt_saar'] && d['klaslijst/dhondt_saar'].email === 'dhondt.saar2@svsl.be' && d['klaslijst/dhondt_saar'].emailZeker === true, 'export: e-mailadres uit het bestand is zeker');
  check(await p.locator('tr[data-k="dhondt_saar"] .lb-pill.oranje').count() === 0 && await p.locator('tr[data-k="celik_emir"] .lb-pill.oranje').count() === 1, 'voorstel enkel bij afgeleide adressen');
  await aanmelden(p, '#logboek', { uid:'c', email:'celik.emir2@svsl.be', displayName:'Emir Çelik' });
  await p.waitForSelector('.lb-melding');
  check((await p.textContent('.lb-melding')).includes('celik.emir2@svsl.be'), 'leerling ziet zijn adres in de melding');
  d = await fakedb(p); check(d['aanmeldingen/celik.emir2@svsl.be'] && d['aanmeldingen/celik.emir2@svsl.be'].naam === 'Emir Çelik', 'aanmeldpoging bewaard');
  await aanmelden(p, '#dashboard', ELS); await p.click('[data-tab="klaslijst"]'); await p.waitForSelector('.lb-poging');
  await p.click('.lb-poging [data-koppel="celik_emir"]'); await wacht(900);
  d = await fakedb(p);
  check(d['leerlingen/celik.emir2@svsl.be'] && d['leerlingen/celik.emir2@svsl.be'].klas === '2C-E&O' && d['klaslijst/celik_emir'].email === 'celik.emir2@svsl.be' && !d['aanmeldingen/celik.emir2@svsl.be'], 'coach koppelt de aanmelding aan de klaslijst');
  await p.locator('tr[data-k="celik_emir"] input[type=checkbox]').uncheck(); await wacht(700);
  d = await fakedb(p);
  check(d['leerlingen/celik.emir2@svsl.be'].actief === false && d['klaslijst/celik_emir'].csf === false, 'uitvinken: leerling blijft bewaard maar is niet actief');
  await aanmelden(p, '#logboek-wetenschappen', { uid:'c', email:'celik.emir2@svsl.be', displayName:'Emir Çelik' });
  await p.waitForSelector('.lb-melding');
  check(await p.locator('#lb-opstart').count() === 0, 'gestopte leerling start geen logboek');

  console.log('6. Coachfiches via de rol en export');
  await aanmelden(p, '#coach', LIEN); await p.waitForSelector('#coach-poort .lb-melding');
  check((await p.textContent('#coach-poort')).includes('enkel voor de CSF-coaches'), 'leerling kan de coachfiches niet openen');
  await aanmelden(p, '#coach', ELS); await p.waitForSelector('#coach-poort .lb-melding');
  check((await p.textContent('#coach-poort')).includes('beheerder'), 'coach: wacht op de coachcode van de beheerder');
  await aanmelden(p, '#dashboard', TOM); await p.waitForSelector('#db-csv');
  const [dl] = await Promise.all([p.waitForEvent('download'), p.click('#db-csv')]);
  const csv = require('fs').readFileSync(await dl.path(), 'utf8');
  check(dl.suggestedFilename().startsWith('csf-overzicht-') && csv.includes('Peeters Lien') && csv.includes('Afgerond'), 'overzicht als CSV gedownload');
  await p.click('[data-tab="beheer"]'); await p.waitForSelector('#code-in');
  await p.fill('#coach-mail', 'kris@svsl.be'); await p.fill('#coach-naam', 'Van Landeghem K.'); await p.click('#coach-voegtoe'); await wacht(700);
  d = await fakedb(p); check(d['coaches/kris@svsl.be'] && d['coaches/kris@svsl.be'].naam === 'Van Landeghem K.', 'beheerder voegt een coach toe');
  check(await p.inputValue('#her-vrij') !== '' && (await p.inputValue('#her-vrij')).includes('2026-12-21 2027-01-03'), 'vrije dagen 2026-2027 staan voorgesteld');
  await p.fill('#her-vrij', 'kerstvakantie'); await p.click('#her-bewaar');
  check((await p.textContent('#her-fb')).includes('begrijp ik niet'), 'onleesbare vrije dag wordt geweigerd');
  await p.fill('#her-vrij', '2026-12-21 2027-01-03\n2026-11-11'); await p.check('#her-aan'); await p.click('#her-bewaar'); await wacht(600);
  d = await fakedb(p); check(d['instellingen/herinnering'] && d['instellingen/herinnering'].aan === true && d['instellingen/herinnering'].vrij.includes('2026-11-11'), 'herinneringen aangezet met vrije dagen');
  await p.click('[data-tab="leerlingen"]'); await p.waitForSelector('tr[data-ll="mo@svsl.be"]');
  await p.uncheck('tr[data-ll="mo@svsl.be"] [data-her]'); await wacht(600);
  d = await fakedb(p); check(d['leerlingen/mo@svsl.be'].herinnering === false, 'herinnering uitgevinkt voor Mo');
  await p.click('[data-tab="overzicht"]'); await p.selectOption('#db-coach', 'alle'); await p.waitForSelector('.db-rij[data-ll="mo@svsl.be"]');
  check(await p.locator('.db-rij[data-ll="mo@svsl.be"] .lb-pill.rood').count() === 0 && await p.locator('.db-rij[data-ll="mo@svsl.be"] .lb-pill.oranje').count() === 1, 'zonder herinnering staat een ontbrekend logboek niet in het rood');
  await p.click('[data-tab="beheer"]'); await p.waitForSelector('#code-in');
  await p.fill('#code-in', 'verkeerde-code'); await p.click('#code-bewaar'); await wacht(2500);
  check((await p.textContent('#code-fb')).includes('opent de coachfiches niet'), 'verkeerde coachcode wordt niet bewaard');
  if (process.env.CSF_COACHCODE) {
    await p.fill('#code-in', process.env.CSF_COACHCODE); await p.click('#code-bewaar'); await wacht(2500);
    await aanmelden(p, '#coach', ELS); await p.waitForSelector('.coachband', { timeout: 15000 }).catch(() => {});
    check(await p.locator('.coachband').count() > 3, 'coach opent de coachfiches zonder code');
  } else console.log('  (coachfiches openen overgeslagen: geef CSF_COACHCODE mee)');
  console.log('6b. Coach past sterren, tijd en inleiding van een project aan');
  await aanmelden(p, '#dashboard', ELS); await p.click('[data-tab="projecten"]'); await p.waitForSelector('#pr-kies');
  await p.selectOption('#pr-kies', 'talen'); await p.waitForSelector('#pr-form');
  const origOms = await p.inputValue('#pr-omschrijving');
  check(origOms.length > 20 && !origOms.includes('<'), 'origineel staat als gewone tekst klaar');
  await p.selectOption('#pr-sterren', '4'); await p.fill('#pr-tijd', '4 lesuren');
  await p.fill('#pr-omschrijving', 'Nieuwe uitleg <b>niet vet</b>.\nTweede regel.');
  await p.click('#pr-form button[type=submit]'); await wacht(700);
  d = await fakedb(p);
  check(d['projectinfo/talen'] && d['projectinfo/talen'].sterren === 4 && d['projectinfo/talen'].tijd === '4 lesuren' && d['projectinfo/talen'].door === 'Van Huffel E.', 'aanpassing bewaard met naam van de coach');
  await p.goto(B + '#p-talen'); await p.reload(); await p.waitForSelector('.tags'); await wacht(1200);
  const tekst = await p.textContent('#app');
  check(tekst.includes('4 lesuren') && tekst.includes('Nieuwe uitleg <b>niet vet</b>.') && await p.locator('.tags .sterren').first().evaluate(e => e.textContent.replace(/[^★]/g, '').length) >= 5, 'projectpagina toont de nieuwe tijd en tekst (HTML blijft tekst)');
  check((await p.locator('.tags .sterren').first().innerHTML()).startsWith('★★★★<span'), 'projectpagina toont 4 sterren');
  await p.goto(B + '#overzicht'); await p.goto(B + '#oefenproject'); await wacht(300);
  check((await p.textContent('#app')).includes('4 lesuren'), 'overzicht toont de nieuwe tijd');
  await p.goto(B + '#dashboard'); await p.waitForSelector('[data-tab="projecten"]'); await p.click('[data-tab="projecten"]'); await p.selectOption('#pr-kies', 'talen'); await p.waitForSelector('#pr-herstel');
  await p.click('#pr-herstel'); await wacht(700);
  d = await fakedb(p); check(!d['projectinfo/talen'], 'terugzetten naar het origineel');
  if (p.fouten.length) fout('fouten in de pagina: ' + p.fouten.join(' | '));
  await b.close();

  console.log('7. Zonder Firebase-koppeling');
  const z = await context({ zonderPortaal: true }); const q = await pagina(z.ctx, {});
  await q.goto(B + '#logboek'); await q.waitForSelector('.lb-melding');
  check((await q.textContent('.lb-melding')).includes('nog niet gekoppeld'), 'logboek meldt dat de koppeling ontbreekt');
  await q.goto(B + '#coach'); await q.waitForSelector('#coach-code');
  check(true, 'coachfiches vallen terug op de code');
  await q.goto(B + '#p-wetenschappen'); await q.waitForSelector('.les'); await wacht(300);
  check(await q.locator('.les.lb-slot').count() === 0, 'projectpagina blijft open zonder koppeling');
  if (q.fouten.length) fout('fouten zonder koppeling: ' + q.fouten.join(' | '));
  await z.b.close();
  console.log(ok ? 'ALLES OK' : 'ER ZIJN FOUTEN'); process.exit(ok ? 0 : 1);
})().catch(e => { console.error(e); process.exit(1); });
