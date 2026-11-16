/* Test van het wekelijkse Smartschoolbericht (weekbericht/Code.gs): wie krijgt wat, zonder Google of Smartschool. */
const vm = require('vm'), fs = require('fs');
const ctx = {}; vm.createContext(ctx); vm.runInContext(fs.readFileSync(__dirname + '/../weekbericht/Code.gs', 'utf8'), ctx);
let ok = true; const check = (v, m) => { console.log((v ? '  ok   ' : '  FOUT: ') + m); if (!v) ok = false; };
const L = [{ _id:'a@svsl.be', naam:'Peeters Lien', klas:'1B' }, { _id:'b@svsl.be', naam:'Claes Mo', klas:'1C' }, { _id:'c@svsl.be', naam:'Gestopt', actief:false }, { _id:'test--tom@svsl.be', naam:'Test', test:true }];
const MS = [{ dag:'MA', lesuur:'3', vak:'Frans', leerkracht:'An Peeters', email:'peeters.an@svsl.be' }, { dag:'DO', lesuur:'5', vak:'Wiskunde', leerkracht:'Tim van Besien', email:'vanbesien.tim@svsl.be' }];
const les = (nr, datum, tijd, begin, einde) => ({ nr, datum, begin: Object.assign({ tijd }, begin || {}), einde });
const LB = [
  { leerling:'a@svsl.be', project:'wetenschappen', projectnaam:'Speurneuzen', status:'bezig', opstart:{ momenten: MS }, lessen:[
    les(1, '2026-11-09', '2026-11-09T09:00:00Z'),                                                     // maandag
    les(2, '2026-11-12', '2026-11-12T13:00:00Z', { gemist:'Passé composé', ingehaald:'Cursus p. 12' }, { vragen:'JA' }),   // vorige = maandag → Frans
    les(3, '2026-11-16', '2026-11-16T09:00:00Z', { gemist:'Breuken', ingehaald:'Oefeningen' }),        // vorige = donderdag → Wiskunde
    les(4, '2026-11-19', '2026-11-19T13:00:00Z', { gemist:'niets' }) ] },                            // niets gemist
  { leerling:'b@svsl.be', project:'oefen-toren', projectnaam:'Toren', status:'bezig', opstart:{ momenten:[{ dag:'DI', lesuur:'2', vak:'Engels', leerkracht:'Zonder Mail', email:'' }] }, lessen:[
    les(1, '2026-11-10', '2026-11-10T09:00:00Z'), les(2, '2026-11-17', '2026-11-17T09:00:00Z', { gemist:'Past simple', ingehaald:'Video' }) ] },
  { leerling:'c@svsl.be', project:'x', status:'bezig', opstart:{ momenten: MS }, lessen:[les(1, '2026-11-09', 'x'), les(2, '2026-11-12', '2026-11-12T13:00:00Z', { gemist:'Iets' })] },
  { leerling:'test--tom@svsl.be', project:'x', status:'bezig', opstart:{ momenten: MS }, lessen:[les(1, '2026-11-09', 'x'), les(2, '2026-11-12', '2026-11-12T13:00:00Z', { gemist:'Iets' })] }
];
let r = ctx.verzamel(L, LB, [], '2026-11-10T00:00:00Z', '2026-11-21T00:00:00Z');
const per = Object.fromEntries(r.groepen.map(g => [g.email, g.items.map(x => x.gemist)]));
check(JSON.stringify(per) === JSON.stringify({ 'peeters.an@svsl.be':['Passé composé'], 'vanbesien.tim@svsl.be':['Breuken'] }), 'elke leerkracht krijgt enkel de leerstof uit zijn eigen les (dag van het vorige CSF-lesuur)');
check(!JSON.stringify(r).includes('Iets'), 'gestopte leerlingen en testleerlingen niet');
check(r.onbekend.length === 1 && r.onbekend[0].reden.includes('zonder e-mailadres'), 'leerkracht zonder e-mailadres: in het verslag, niet verstuurd');
check(ctx.nietsGemist('niets') && ctx.nietsGemist('Niets.') && ctx.nietsGemist('') && !ctx.nietsGemist('Breuken'), '‘niets’ gemist: geen bericht');
r = ctx.verzamel(L, LB, [{ _id:'peeters.an@svsl.be', weekbericht:false }], '2026-11-10T00:00:00Z', '2026-11-21T00:00:00Z');
check(r.groepen.length === 1 && r.groepen[0].email === 'vanbesien.tim@svsl.be' && r.uitgeschreven[0] === 'peeters.an@svsl.be', 'wie de berichten uitzette, krijgt niets');
r = ctx.verzamel(L, LB, [], '2026-11-13T00:00:00Z', '2026-11-21T00:00:00Z');
check(r.groepen.length === 1 && r.groepen[0].email === 'vanbesien.tim@svsl.be', 'enkel lesuren sinds het vorige weekbericht');
const html = ctx.berichtHtml(ctx.verzamel(L, LB, [], '2026-11-10T00:00:00Z', '2026-11-21T00:00:00Z').groepen[0], 'https://site/');
check(html.includes('Beste An') && html.includes('Peeters Lien') && html.includes('Passé composé') && html.includes('Cursus p. 12') && html.includes('#p-wetenschappen') && html.includes('nog vragen') && html.includes('#dashboard'), 'bericht: leerling, gemiste leerstof, inhalen, vragen, project en uitschrijven');
check(ctx.gebruikersnaam('Peeters.An@svsl.be') === 'peeters.an', 'Smartschool-gebruikersnaam = deel vóór @ (tenzij afwijkend)');
// SOAP-bericht naar Smartschool (met een nagemaakte WSDL)
const WS = `<?xml version="1.0"?><definitions name="V3" targetNamespace="https://school.smartschool.be:3000/Webservices/V3" xmlns="http://schemas.xmlsoap.org/wsdl/">
<message name="sendMsgRequest"><part name="accesscode" type="xsd:anyType"/><part name="userIdentifier" type="xsd:anyType"/><part name="title" type="xsd:anyType"/><part name="body" type="xsd:anyType"/><part name="senderIdentifier" type="xsd:anyType"/><part name="attachments" type="xsd:anyType"/><part name="coaccount" type="xsd:int"/><part name="copyToLVS" type="xsd:boolean"/></message>
<binding name="b"><operation name="sendMsg"><soap:operation soapAction="https://school.smartschool.be:3000/Webservices/V3#sendMsg" style="rpc"/></operation></binding></definitions>`;
let verstuurd = null, antwoord = '<SOAP-ENV:Envelope><SOAP-ENV:Body><ns1:sendMsgResponse><return xsi:type="xsd:int">0</return></ns1:sendMsgResponse></SOAP-ENV:Body></SOAP-ENV:Envelope>';
ctx.PropertiesService = { getScriptProperties: () => ({ getProperty: k => k === 'SMARTSCHOOL_CODE' ? 'geheim&code' : null }) };
ctx.UrlFetchApp = { fetch: (u, o) => { if (/\?wsdl$/.test(u)) return { getContentText: () => WS }; verstuurd = { u, o }; return { getResponseCode: () => 200, getContentText: () => antwoord }; } };
vm.runInContext('SCHOOL = "school"', ctx);
let s1 = ctx.smartschool('sendMsg', { userIdentifier:'peeters.an', title:'T', body:'<p>Hoi</p>', senderIdentifier:'Null' });
const x = verstuurd.o.payload;
check(s1.ok && verstuurd.u === 'https://school.smartschool.be/Webservices/V3' && verstuurd.o.headers.SOAPAction.endsWith('#sendMsg'), 'Smartschool: bericht naar de webservice V3 (foutcode 0 = gelukt)');
check(x.indexOf('<accesscode') < x.indexOf('<userIdentifier') && x.indexOf('<userIdentifier') < x.indexOf('<title') && x.includes('geheim&amp;code') && x.includes('&lt;p&gt;Hoi') && x.includes('<coaccount xsi:type="xsd:int">0') && x.includes('<copyToLVS xsi:type="xsd:boolean">false'), 'SOAP: parameters in de volgorde van de WSDL, tekst veilig ingepakt');
antwoord = antwoord.replace('>0<', '>12<'); s1 = ctx.smartschool('sendMsg', { userIdentifier:'x' });
check(!s1.ok && s1.fout.includes('12'), 'foutcode van Smartschool komt in het verslag');
console.log(ok ? 'ALLES OK' : 'ER ZIJN FOUTEN'); process.exit(ok ? 0 : 1);
