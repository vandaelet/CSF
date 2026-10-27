/* Controleert elke werkbundel: elk A4-blad op het scherm moet precies één afgedrukte pagina zijn (geen overloop).
   Gebruik: test/serve.sh && node test/werkbundels.js */
const { B, context, pagina } = require('./helpers');
(async () => {
  const { b, ctx } = await context({ zonderPortaal: true }); const p = await pagina(ctx, {});
  await p.goto(B + '#overzicht'); await p.waitForSelector('.kies');
  const ids = await p.evaluate(() => CSF.projecten.filter(x => x.werkbundel && x.werkbundel.length && x.status !== 'fiche').map(x => x.id));
  let ok = true;
  for (const id of ids) {
    await p.evaluate(id => { const q = CSF.ui.zoek(id); localStorage.setItem('lk-' + id, JSON.stringify((q.leerkaarten || []).map((_, i) => i))); }, id);
    await p.goto(B + '#wb-' + id); await p.waitForSelector('.blad');
    const bladen = await p.locator('.blad').count();
    const pdf = (await p.pdf({ format: 'A4', printBackground: true })).toString('latin1');
    const paginas = (pdf.match(/\/Type\s*\/Page[^s]/g) || []).length;
    const goed = bladen === paginas; if (!goed) ok = false;
    console.log((goed ? '  ok   ' : '  FOUT ') + id + ': ' + bladen + ' bladen, ' + paginas + ' pagina’s');
  }
  if (p.fouten.length) { ok = false; console.log('  FOUT in de pagina: ' + p.fouten.join(' | ')); }
  await b.close(); console.log(ok ? 'ALLES OK' : 'ER ZIJN FOUTEN'); process.exit(ok ? 0 : 1);
})().catch(e => { console.error(e); process.exit(1); });
