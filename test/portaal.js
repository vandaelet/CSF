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
  'gezien/kobe@svsl.be': { dagen:['2026-10-13', '2026-10-21'] },
  'leerlingen/zonderklas@svsl.be': { naam:'Klas Zonder' }
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
  await p.selectOption('#m-dag-0', 'MA'); await p.selectOption('#m-uur-0', '3'); await p.fill('#m-vak-0', 'wiskunde'); await p.fill('#m-lk-0', 'meneer Peeters'); await p.fill('#motivatie', 'Ik hou van speurwerk.'); await p.check('#evaluatieGelezen-0');
  await p.click('#lb-opstart button[type=submit]');
  await p.waitForSelector('#lb-begin');
  d = await fakedb(p);
  const LB = 'logboeken/peeters.lien@svsl.be__wetenschappen';
  check(d[LB] && d[LB].opstart.dag === 'MA' && d[LB].opstart.coach === 'Van Huffel E.', 'opstart bewaard');
  check(JSON.stringify(d[LB].kijkers) === '["an@svsl.be"]', 'vakleerkracht mag meelezen');
  check(await p.locator('.lb-stappen').count() === 0, 'stappenplan nog niet zichtbaar voor het begin-logboek');
  await p.goto(B + '#p-wetenschappen'); await p.waitForSelector('.lb-projectblok a'); await wacht(300);
  await p.click('#tp-start [data-stap="fiche"]'); await wacht(300);
  check(!(await p.locator('#tp-fiche').isHidden()) && await p.locator('#tp-start').isHidden() && await p.locator('.ptab[data-tab="fiche"][aria-selected="true"]').count() === 1, 'knop onderaan de leerkaarten leidt naar de volgende stap');
  check((await p.textContent('#tp-fiche .stapnav')).includes('Volgende stap: Leidraad per lesuur'), 'elke stap heeft een knop naar de volgende stap');
  await p.click('#tp-fiche [data-stap="start"]'); await wacht(200);
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

  console.log('5c. Aanmeldpoort, klas, zichtbaarheid, één project, resultaten en goedkeuring');
  const MO = { uid:'m', email:'mo@svsl.be', displayName:'Mo Claes' };
  await p.evaluate(() => sessionStorage.removeItem('fake_user')); await p.goto(B + '#overzicht'); await p.reload(); await p.waitForSelector('#loginBtn');
  check(await p.locator('.kies').count() === 0, 'niet aangemeld: eerst aanmelden, geen projecten');
  await aanmelden(p, '#start', { uid:'z', email:'zonderklas@svsl.be', displayName:'Zonder Klas' }); await p.waitForSelector('#jaar-1', { state: 'attached' });
  await p.check('#jaar-1'); await p.selectOption('#klas-keuze', '1E'); await p.click('#lb-klas button[type=submit]'); await p.waitForSelector('.afspraken');
  d = await fakedb(p); check(d['leerlingen/zonderklas@svsl.be'].klas === '1E', 'leerling kiest eerst het jaar, dan de klas (1D–1J of 2D–2J)');
  check((await p.textContent('.afspraken-kop')).trim() === 'CSF-afspraken', 'kader heet CSF-afspraken');
  await aanmelden(p, '#start', LIEN); await p.waitForSelector('.afspraken'); await wacht(500);
  check(await p.locator('.deur[href="#oefenproject"]').count() === 0 && await p.locator('.deur[href="#overzicht"]').count() === 1, '2e jaar (Lien, 2A): enkel alle projecten');
  await p.goto(B + '#oefenproject'); await wacht(300);
  check((await p.textContent('#app')).includes('niet open voor jou'), '2e jaar: oefenprojecten afgeschermd');
  await aanmelden(p, '#start', MO); await p.waitForSelector('.afspraken'); await wacht(500);
  if (await p.locator('.lb-modaal').count()) await p.click('#lb-m-nee');
  check(await p.locator('.deur[href="#oefenproject"]').count() === 1 && await p.locator('.deur[href="#overzicht"]').count() === 1, '1e jaar (Mo, 1B): oefenprojecten eerste jaar en alle projecten');
  check(await p.locator('.afspraken').evaluate(e => e.getBoundingClientRect().top) < await p.locator('.poort').evaluate(e => e.getBoundingClientRect().top), 'afspraken staan vóór de projecten');
  check((await p.textContent('.mijnproject')).includes('Taalbouwers'), 'logboek meteen gekoppeld: startpagina toont mijn project');
  await p.goto(B + '#p-wetenschappen'); await p.waitForSelector('.ptabs'); await wacht(300);
  check(await p.locator('.ptab').count() === 1 && (await p.textContent('.lb-projectblok')).includes('Je werkt aan'), 'ander project: enkel de projectfiche');
  await p.goto(B + '#logboek-wetenschappen'); await p.waitForSelector('.lb-melding');
  check((await p.textContent('#lb-inhoud')).includes('Je werkt al aan het project'), 'geen tweede project zolang het eerste niet goedgekeurd is');
  await p.goto(B + '#p-talen'); await p.waitForSelector('.ptabs'); await wacht(800);
  check(await p.locator('.ptab').count() > 3, 'eigen project: alle tabbladen');
  await p.click('.ptab[data-tab="start"]'); const lk0 = p.locator('details.lk').first(); await lk0.locator('summary').click(); await lk0.locator('[data-lees]').click(); await wacht(600);
  await p.locator('.test .tvraag').first().locator('.optie[data-ok="0"]').first().click(); await wacht(500);
  d = await fakedb(p); const R = d['resultaten/mo@svsl.be__talen'] || {};
  check(R.lk_0 && R.t_0 && R.t_0.ok === false, 'leerkaart en testantwoord in het logboek bewaard');
  await p.reload(); await p.waitForSelector('.ptabs'); await wacht(900);
  check(await p.locator('.test .tvraag').first().locator('.optie.fout[disabled]').count() === 1, 'antwoord blijft staan en kan niet gewijzigd worden');
  await aanmelden(p, '#dashboard', TOM); await p.waitForSelector('[data-tab="zicht"]');
  await p.click('[data-tab="zicht"]'); await p.selectOption('#zj-1', 'oefen'); await p.click('#zicht-bewaar'); await wacht(500);
  d = await fakedb(p); check(d['instellingen/zichtbaarheid'].jaar['1'] === 'oefen', 'coach zet het 1e jaar op enkel oefenprojecten');
  await p.click('[data-tab="vak"]'); await p.waitForSelector('#vk-lijst'); await p.fill('#vk-lijst', 'An Peeters\nTim van Besien\nMaeté Basslé\nBert Claes ; bert@svsl.be'); await p.click('#vk-bewaar'); await wacht(500);
  d = await fakedb(p); const VK = d['instellingen/vakleerkrachten'].lijst;
  check(VK.map(v => v.naam).join() === 'Maeté Basslé,Bert Claes,An Peeters,Tim van Besien', 'beheerder bewaart de lijst van vakleerkrachten');
  check(VK.find(v => v.naam === 'Tim van Besien').email === 'vanbesien.tim@svsl.be' && VK.find(v => v.naam === 'Maeté Basslé').email === 'bassle.maete@svsl.be' && VK.find(v => v.naam === 'Bert Claes').email === 'bert@svsl.be', 'e-mailadres familienaam.voornaam, aan elkaar en zonder accenten');
  await p.click('[data-tab="overzicht"]'); await p.selectOption('#db-coach', 'alle'); await p.waitForSelector('.db-rij[data-ll="mo@svsl.be"]');
  await p.click('.db-rij[data-ll="mo@svsl.be"]'); await p.waitForSelector('.lb-detail');
  check((await p.textContent('.lb-detail')).includes('Leerkaarten 1/'), 'coach ziet de resultaten van de leerkaarten en vragen');
  await p.click('.db-rij[data-ll="peeters.lien@svsl.be"]'); await p.waitForSelector('.lb-detail [data-keur]');
  await p.click('.lb-detail [data-keur]'); await wacht(500);
  d = await fakedb(p); check(d[LB].goedgekeurd === true, 'coach keurt het project goed');
  await aanmelden(p, '#start', MO); await p.waitForSelector('.afspraken'); await wacht(500);
  check(await p.locator('.deur[href="#overzicht"]').count() === 0 && await p.locator('.deur[href="#oefenproject"]').count() === 1, 'zichtbaarheid per jaar werkt');
  await aanmelden(p, '#logboek', LIEN); await p.waitForSelector('#lb-nieuw');
  check((await p.textContent('#lb-inhoud')).includes('Mijn portfolio') && await p.locator('.lb-kaart .lb-pill.groen').count() >= 1, 'goedgekeurd project staat in het portfolio');
  const keuze = await p.locator('#lb-nieuw option').first().getAttribute('value');
  await p.click('#lb-start'); await p.waitForSelector('#lb-opstart');
  await p.selectOption('#m-dag-0', 'DI'); await p.selectOption('#m-uur-0', '3'); await p.fill('#m-vak-0', 'wiskunde');
  await p.fill('#m-zoek-0', 'bes'); await p.waitForSelector('.vk-hit'); check((await p.textContent('.moment .vk-resultaten')).includes('Tim van Besien'), 'zoeken op familienaam toont de leerkracht');
  await p.fill('#m-zoek-0', 'pee'); await p.click('.vk-hit');
  await p.click('#moment-plus'); await p.waitForSelector('#m-dag-1');
  await p.selectOption('#m-dag-1', 'DO'); await p.selectOption('#m-uur-1', '5'); await p.fill('#m-vak-1', 'Frans'); await p.fill('#m-zoek-1', 'besien'); await p.click('.moment[data-i="1"] .vk-hit'); await p.fill('#motivatie', 'Nieuw project.'); await p.check('#evaluatieGelezen-0');
  await p.click('#lb-opstart button[type=submit]'); await p.waitForSelector('#lb-begin');
  d = await fakedb(p); const NL = d['logboeken/peeters.lien@svsl.be__' + keuze];
  check(NL && JSON.stringify(NL.kijkers) === '["peeters.an@svsl.be","vanbesien.tim@svsl.be"]' && NL.opstart.vakleerkracht === 'An Peeters, Tim van Besien', 'nieuw project met vakleerkrachten uit de lijst');
  check(NL.opstart.momenten.length === 2 && NL.opstart.momenten[1].dag === 'DO' && NL.opstart.momenten[1].lesuur === '5' && NL.opstart.vak === 'wiskunde, Frans', 'met + een tweede les verlaten (andere dag, lesuur, vak en leerkracht)');

  console.log('5d. Testleerling van een coach');
  await aanmelden(p, '#dashboard', ELS); await p.waitForSelector('[data-tab="test"]');
  await p.click('[data-tab="test"]'); await p.click('#test-start'); await p.waitForSelector('#jaar-1', { state: 'attached' });
  check(await p.locator('#csf-testband').count() === 1, 'testmodus: oranje balk bovenaan');
  await p.check('#jaar-1'); await p.selectOption('#klas-keuze', '1E'); await p.click('#lb-klas button[type=submit]'); await p.waitForSelector('.afspraken');
  d = await fakedb(p); check(!!d['leerlingen/test--els@svsl.be'].klas && d['leerlingen/test--els@svsl.be'].test === true, 'testleerling kiest een klas zoals een leerling');
  await p.goto(B + '#logboek'); await p.waitForSelector('#lb-start'); await p.click('#lb-start'); await p.waitForSelector('#lb-opstart');
  await p.selectOption('#m-dag-0', 'DI'); await p.selectOption('#m-uur-0', '3'); await p.fill('#m-vak-0', 'wiskunde'); await p.fill('#m-zoek-0', 'pee'); await p.click('.vk-hit'); await p.fill('#motivatie', 'Test.'); await p.check('#evaluatieGelezen-0');
  await p.click('#lb-opstart button[type=submit]'); await p.waitForSelector('#lb-begin');
  d = await fakedb(p); const TL = Object.keys(d).filter(k => k.startsWith('logboeken/test--els@svsl.be__'));
  check(TL.length === 1 && d[TL[0]].leerling === 'test--els@svsl.be', 'testleerling start een project met een logboek');
  await p.click('#tb-coach'); await p.waitForSelector('.lb-detail');
  check(await p.locator('#csf-testband').count() === 0 && (await p.textContent('.db-rij.open')).includes('test'), 'bekijk als coach: detail van de testleerling met label test');
  await p.click('[data-tab="test"]'); await p.click('#test-wis'); await wacht(800);
  d = await fakedb(p); check(!Object.keys(d).some(k => k.startsWith('logboeken/test--')) && d['leerlingen/test--els@svsl.be'].klas === '', 'testleerling terug op nul');

  console.log('6. Coachfiches via de rol en export');
  await aanmelden(p, '#coach', LIEN); await p.waitForSelector('#coach-poort .lb-melding');
  check((await p.textContent('#coach-poort')).includes('enkel voor de CSF-coaches'), 'leerling kan de coachfiches niet openen');
  await aanmelden(p, '#coach', ELS); await p.waitForSelector('#coach-poort .lb-melding');
  check((await p.textContent('#coach-poort')).includes('beheerder'), 'coach: wacht op de coachcode van de beheerder');
  await aanmelden(p, '#dashboard', TOM); await p.waitForSelector('#db-csv');
  const [dl] = await Promise.all([p.waitForEvent('download'), p.click('#db-csv')]);
  const csv = require('fs').readFileSync(await dl.path(), 'utf8');
  check(dl.suggestedFilename().startsWith('csf-overzicht-') && csv.includes('Peeters Lien') && csv.includes('Status') && !csv.includes('test--'), 'overzicht als CSV gedownload');
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
  await q.goto(B + '#p-wetenschappen'); await q.waitForSelector('.les', { state: 'attached' }); await wacht(300);
  check(await q.locator('.les.lb-slot').count() === 0, 'projectpagina blijft open zonder koppeling');
  await q.goto(B + '#p-engels-all-about-movies'); await q.waitForSelector('.ptabs');
  check(await q.locator('.ptab[data-tab="werkbundel"].slot').count() === 1, 'werkbundel vergrendeld tot de leerkaarten gelezen zijn');
  await q.goto(B + '#wb-engels-all-about-movies'); await wacht(500);
  check(q.url().endsWith('#p-engels-all-about-movies') && await q.locator('#tp-werkbundel:not([hidden]) .lb-melding').count() === 1, 'rechtstreekse link naar de werkbundel brengt je terug naar de leerkaarten');
  await q.click('.ptab[data-tab="start"]');
  const nLk = await q.locator('details.lk').count();
  for (let i = 0; i < nLk; i++) {
    const d = q.locator('details.lk:not(.gelezen)').first();
    if (!(await d.evaluate(e => e.open))) await d.locator('summary').click();
    await d.locator('[data-lees]').click(); await wacht(100);
  }
  check(await q.locator('details.lk.gelezen').count() === nLk && await q.locator('.ptab[data-tab="werkbundel"].slot').count() === 0, 'na alle leerkaarten is de werkbundel open');
  await q.goto(B + '#wb-engels-all-about-movies'); await q.waitForSelector('.blad');
  check(true, 'werkbundel kan nu afgedrukt worden');
  await q.goto(B + '#p-engels-all-about-movies'); await q.waitForSelector('.ptabs');
  await q.waitForSelector('#tp-start details.quiz');
  check(await q.locator('details.quiz').count() === 8, 'Engels: luisterquiz voor elk van de 8 clips');
  await q.click('details.quiz summary'); await q.click('details.quiz .optie[data-ok="1"]');
  check((await q.textContent('details.quiz .fb')).startsWith('Juist'), 'luisterquiz verbetert meteen');
  if (q.fouten.length) fout('fouten zonder koppeling: ' + q.fouten.join(' | '));
  await z.b.close();
  console.log(ok ? 'ALLES OK' : 'ER ZIJN FOUTEN'); process.exit(ok ? 0 : 1);
})().catch(e => { console.error(e); process.exit(1); });
