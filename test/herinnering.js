/* Test van de keuze wie een herinneringsmail krijgt (herinnering/Code.gs), zonder Google. */
const vm = require('vm'), fs = require('fs');
const ctx = {}; vm.createContext(ctx); vm.runInContext(fs.readFileSync(__dirname + '/../herinnering/Code.gs', 'utf8'), ctx);
let ok = true; const check = (v, m) => { console.log((v ? '  ok   ' : '  FOUT: ') + m); if (!v) ok = false; };
const L = [
  { _id:'a@svsl.be', naam:'Peeters Lien' },                     // DI, vandaag niets ingevuld
  { _id:'b@svsl.be', naam:'Claes Mo' },                         // DI, einde ingevuld
  { _id:'c@svsl.be', naam:'Mertens Noor', herinnering:false },  // DI, uitgevinkt
  { _id:'d@svsl.be', naam:'Çelik Emir' },                       // DO
  { _id:'e@svsl.be', naam:'Janssens Kobe', actief:false },      // gestopt
  { _id:'f@svsl.be', naam:'De Smet Febe' },                     // DI, enkel begin
  { _id:'g@svsl.be', naam:'Bauwens Liam' },                     // DI, project afgerond
  { _id:'test--tom@svsl.be', naam:'Testleerling' }              // testleerling van een coach: nooit mailen
];
const lb = (l, dag, lessen, status) => ({ leerling:l, project:'wetenschappen', projectnaam:'Wetenschappen', opstart:{ dag }, lessen, status: status || 'bezig' });
const LB = [lb('a@svsl.be','DI',[{ datum:'2026-10-20', einde:{} }]), lb('b@svsl.be','DI',[{ datum:'2026-10-27', begin:{}, einde:{} }]), lb('c@svsl.be','DI',[]),
  lb('d@svsl.be','DO',[]), lb('e@svsl.be','DI',[]), lb('f@svsl.be','DI',[{ datum:'2026-10-27', begin:{} }]), lb('g@svsl.be','DI',[], 'afgerond'), lb('test--tom@svsl.be','DI',[])];
const r = ctx.wieKrijgtHerinnering(L, LB, '2026-10-27', 'DI').map(x => x.email).sort();
check(JSON.stringify(r) === '["a@svsl.be","f@svsl.be"]', 'dinsdag: enkel wie CSF had en het logboek niet afwerkte (' + r + ')');
check(ctx.wieKrijgtHerinnering(L, LB, '2026-10-27', 'DI').find(x => x.email === 'a@svsl.be').voornaam === 'Lien', 'voornaam uit ‘Familienaam Voornaam’');
check(ctx.wieKrijgtHerinnering(L, LB, '2026-10-29', 'DO').map(x => x.email).join() === 'd@svsl.be', 'donderdag: andere leerling');
check(ctx.wieKrijgtHerinnering(L, LB, '2026-10-31', '').length === 0, 'weekend: niemand');
check(ctx.wieKrijgtHerinnering(L, LB, '2026-10-27', 'DI', [{ _id:'a@svsl.be', antwoorden:{ '2026-10-27':'nee' } }]).map(x => x.email).join() === 'f@svsl.be', 'wie ‘Neen’ antwoordde, krijgt geen mail');
const vrij = '2026-11-02 2026-11-08\n2026-11-11';
check(ctx.isVrij('2026-11-05', vrij) && ctx.isVrij('2026-11-11', vrij) && !ctx.isVrij('2026-11-10', vrij), 'vrije dagen en vakanties');
console.log(ok ? 'ALLES OK' : 'ER ZIJN FOUTEN'); process.exit(ok ? 0 : 1);
