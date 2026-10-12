/* =====================================================================
   COACHFICHES · LEESBARE BRON (PRIVÉ)
   Zet dit bestand NIET op GitHub. Bewaar het bij de werkgroep (bv. op Smartschool).

   Aanpassen:
   1. Wijzig hieronder de tekst (gewone HTML: <p>, <b>, <ul><li>, <table>).
   2. Open op de CSF-site de pagina  tools/coach-versleutelen.html
   3. Kies dit bestand, typ de coachcode en klik op Versleutelen.
   4. Upload het gedownloade bestand  coachfiches.js  naar de map  coach/  op GitHub
      (vervang het oude bestand).
   Een nieuw project? Voeg een blok toe met als sleutel het id van het project.
   ===================================================================== */
CSF_COACH = {
  algemeen: `
    <p>Leerlingen werken <b>zelfstandig</b> aan de oefenprojecten in een ander lokaal. Aankopen of klaarleggen is niet nodig. Leerlingen controleren hun antwoorden op de site bij ‘Controleer je oplossing’.</p>
    <ul><li>Elk lesuur start met de datumbalk in het logboek. Elk lesuur eindigt met een korte terugblik (TASC-volgorde). Het stappenplan staat bovenaan elk lesuur in de werkbundel.</li>
    <li>Geef feedback in het logboek op Smartschool. De leerling plaatst daar ook een opgenomen presentatie of een link.</li>
    <li>Beoordeel met het rooster op het laatste blad van de werkbundel (nog niet · op weg · gelukt · uitblinker).</li></ul>`,

  wetenschappen: `
    <h3>Voorbereiding</h3><p><b>Geen.</b> Werkbundel, liniaal en een toestel met internet volstaan.</p>
    <h3>Oplossing chromatogrammen</h3>
    <table><tr><th>Strook</th><th>Waterfront</th><th>Vlekken (mm → R<sub>f</sub>)</th></tr>
    <tr><td><b>B · briefje</b></td><td>60 mm</td><td>blauw 15 → 0,25 · paars 33 → 0,55 · geel 51 → 0,85</td></tr>
    <tr><td>P · Peeters</td><td>70 mm</td><td>zwart 7 → 0,10 · blauw 35 → 0,50</td></tr>
    <tr><td>C · Claes</td><td>50 mm</td><td>paars 20 → 0,40 · geel 40 → 0,80</td></tr>
    <tr><td>J · Jonas</td><td>60 mm</td><td>blauw 15 → 0,25 · rood 27 → 0,45 · geel 51 → 0,85</td></tr>
    <tr><td><b>R · Robin</b></td><td>80 mm</td><td>blauw 20 → 0,25 · paars 44 → 0,55 · geel 68 → 0,85</td></tr></table>
    <p><b>De val:</b> op hoogte lijkt Jonas te passen. Blauw en geel staan op dezelfde hoogte. Alleen de R<sub>f</sub> wijst Robin aan. Kleine meetfouten (± 1 mm) zijn normaal.</p>
    <h3>Oplossing van de zaak</h3>
    <table><tr><th>Verdachte</th><th>Vingerafdruk</th><th>Alibi</th><th>Chromatogram</th></tr>
    <tr><td>Peeters</td><td>lus: vrij</td><td>zwak</td><td>past niet</td></tr>
    <tr><td>Claes</td><td>boog: vrij</td><td>leverbon 10.12 u (dekt niet alles)</td><td>past niet</td></tr>
    <tr><td>Jonas</td><td>werveling</td><td>sterk: turnen</td><td>zelfde hoogtes, andere R<sub>f</sub></td></tr>
    <tr><td><b>Robin</b></td><td>werveling</td><td>gat van 10.04 tot 10.22 u</td><td><b>R<sub>f</sub> past</b></td></tr></table>
    <p><b>Sterke leerlingen</b> benoemen de grenzen van het bewijs. Dezelfde soort inkt betekent niet dezelfde stift. Ongeveer 1 op 3 mensen heeft een werveling.</p>
    <p><b>Klaar en nog tijd:</b> vanaf de onderrand gemeten wordt blauw bij het briefje (15+8)/(60+8) ≈ 0,34. Bij Robin wordt dat (20+8)/(80+8) ≈ 0,32. Ze lijken niet meer gelijk. Een vaste startlijn is dus essentieel.</p>
    <h3>Begeleidingstips</h3><ul><li>Meten kost leerlingen vaak meer tijd dan verwacht. Bespreek de tijdsinschatting in het logboek.</li><li>Vraag bij een opgenomen getuigenis: “Hoe zeker ben je? Wat zou een advocaat van Robin zeggen?”</li></ul>`,

  talen: `
    <h3>Voorbereiding</h3><p><b>Geen.</b> De Babel-test gebeurt met een andere CSF-leerling, thuis of als uitgestelde zelftest.</p>
    <h3>Oplossing Marunees</h3>
    <p>kaso = hond · tolu = vis · anu = meisje · mire = kat · beko = jongen · rosa = eten · vela = zien · kumi = horen</p>
    <ul><li>Meervoud: <b>-ni</b> · verleden tijd: <b>-ta</b> · ontkenning: <b>u-</b> voor het werkwoord · volgorde: onderwerp – voorwerp – werkwoord.</li>
    <li>6. Mireni tolu urosata = De katten aten de vis niet.</li><li>7. De katten zagen het meisje = <b>Mireni anu velata.</b></li></ul>
    <h3>Begeleidingstips</h3><ul><li>12 woorden en 3 regels is een bewuste beperking. De kwaliteit zit in de consequente toepassing van de regels.</li><li>Vraag in je feedback: “Is je regel altijd geldig? Wat gebeurt er bij twee meervouden in één zin?”</li></ul>`,

  beeld: `
    <h3>Voorbereiding</h3><p><b>Geen.</b> Kleurpotloden en een toestel met internet (kunstwerken opzoeken, camera als spiegel).</p>
    <h3>Antwoorden</h3>
    <table><tr><th>Vraag</th><th>Antwoord</th></tr>
    <tr><td>Ogen op welke hoogte?</td><td>Halverwege het hoofd (van kruin tot kin).</td></tr>
    <tr><td>Hoeveel ogen in de breedte?</td><td>5</td></tr>
    <tr><td>Belgische schilder met een appel voor een gezicht</td><td>René Magritte, De mensenzoon (1964)</td></tr></table>
    <h3>Kenmerken per stijl (stijldetective)</h3>
    <table><tr><th>Stijl</th><th>Te verwachten kenmerken</th></tr>
    <tr><td>Impressionisme (Monet)</td><td>losse zichtbare toetsen, licht en kleur, weinig details</td></tr>
    <tr><td>Expressionisme (Ensor)</td><td>felle, onnatuurlijke kleuren, maskers, gevoel boven werkelijkheid</td></tr>
    <tr><td>Kubisme (Picasso)</td><td>hoekige vlakken, voor- en zijaanzicht tegelijk</td></tr>
    <tr><td>Surrealisme (Magritte)</td><td>realistisch geschilderd, onmogelijke combinatie, droomsfeer</td></tr>
    <tr><td>Pop-art (Warhol)</td><td>vlakke felle kleuren, dikke contouren, herhaling, rasterpuntjes</td></tr></table>
    <h3>Begeleidingstips</h3><ul><li>Beoordeel niet het ‘mooi tekenen’. Beoordeel het bewuste gebruik en het benoemen van de stijlkenmerken (kunstenaarsbordje).</li><li>Ogen bovenaan het hoofd is een veelgemaakte fout. Dat is een goed feedbackpunt.</li></ul>`,

  muziek: `
    <h3>Voorbereiding</h3><p><b>Geen.</b> De leerling gebruikt eigen oortjes en Chrome Music Lab. Bodypercussie gebeurt zacht, met de vingertoppen. De sessie blijft stil.</p>
    <h3>Antwoorden</h3>
    <table><tr><th>Vraag</th><th>Antwoord</th></tr>
    <tr><td>20 tellen in 15 seconden</td><td>80 BPM</td></tr><tr><td>Achtste noten in een 4/4-maat</td><td>8</td></tr>
    <tr><td>We Will Rock You, tel 2</td><td>klap</td></tr><tr><td>Notenwaarden</td><td>hele 4 · halve 2 · kwart 1 · achtste ½ tel</td></tr>
    <tr><td>Kwartnoten in 4/4</td><td>4</td></tr><tr><td>Ritme C, tel 3</td><td>klap</td></tr></table>
    <h3>Begeleidingstips</h3><ul><li>Wijs bij de start op de afspraak ‘werk in stilte’: oefenen met oortjes, zacht tikken.</li><li>De naspeeltest is het hart van het project. Een goede partituur is ondubbelzinnig.</li><li>Laat de leerling de link van Song Maker in het logboek plakken.</li></ul>`,

  stem: `
    <h3>Voorbereiding</h3><p><b>Geen.</b> Alle gegevens staan in de werkbundel. Een rekenmachine mag.</p>
    <h3>Oplossingen</h3>
    <table><tr><th>Vraag</th><th>Antwoord</th></tr>
    <tr><td>Rugzak 20 kg</td><td>20 × 0,38 = <b>7,6 kg</b></td></tr>
    <tr><td>Zuurstof</td><td>0,84 × 4 × 30 = <b>100,8 kg</b></td></tr>
    <tr><td>Water zonder recyclage</td><td>3 × 4 × 30 = <b>360 liter</b></td></tr>
    <tr><td>Water met 90% recyclage</td><td>10% van 360 = <b>36 liter</b> (vereenvoudigd model)</td></tr>
    <tr><td>Voedsel</td><td>1,8 × 4 × 30 = <b>216 kg</b></td></tr>
    <tr><td>Zonnepanelen</td><td>40 ÷ 0,43 = 93,02 → <b>94 panelen</b></td></tr>
    <tr><td>Tabel Mars</td><td>38% · ongeveer −60 °C · vooral koolstofdioxide, geen ademlucht · 24 u 40 min · 43%</td></tr></table>
    <p><b>Klaar en nog tijd (500 dagen):</b> zuurstof 1680 kg, voedsel 3600 kg. Zoveel meenemen is bijna onmogelijk. Zelf kweken en zuurstof maken wordt noodzakelijk.</p>
    <h3>Begeleidingstips</h3><ul><li>De luchtsluis hoort aan de buitenkant, bij voorkeur bij de opslag of de technische ruimte.</li><li>De cijfers zijn afgeronde NASA-richtwaarden. Echte missies plannen extra reserve.</li></ul>`,

  cultuur: `
    <h3>Voorbereiding</h3><p><b>Geen.</b> De leerling heeft een toestel met internet nodig voor closertovaneyck.kikirpa.be.</p>
    <h3>Antwoorden symbolenzoektocht</h3>
    <ul><li>Het Lam: bloed stroomt uit de borst in een kelk. Symbool van het offer van Christus.</li><li>Boven het Lam: een duif in een stralenkrans. Symbool van de Heilige Geest.</li>
    <li>Voorgrond: de fontein des levens. Symbool van leven en redding.</li><li>Uiterst links en rechts boven: Adam en Eva.</li>
    <li>Engelen rechts: een orgel.</li><li>Reus tussen de pelgrims: de heilige Christoffel, beschermheilige van reizigers.</li>
    <li>Kopie: De Rechtvaardige Rechters (Jef Van der Veken, 1945).</li></ul>
    <h3>Begeleidingstips</h3><ul><li>Vraag bij elke interpretatie: “Hoe weet je dat?”</li><li>Woorden tellen is een goede oefening in kiezen. Een zaaltekst van 90 woorden is te lang.</li></ul>`,
  "natuur-botten": `
    <h3>Voorbereiding</h3><p><b>Geen.</b> Kleurpotloden, eigen oortjes en een toestel met internet (video schooltv en het skelet op de NTR-site). De tekeningen zijn met AI gemaakt en nagekeken. De vogelvleugel is weggelaten wegens anatomische fouten.</p>
    <h3>Werkblad 1</h3>
    <ol><li>Op de hele voetzool.</li><li>Op de tenen.</li><li>Op de toppen van de tenen.</li><li>De toppen van hun tenen zijn bedekt met hoeven.</li><li>Zoolganger: de hiel raakt de grond.</li>
    <li>Je staat stevig en zakt minder weg in de bodem.</li><li>Bij de topgangers. De oude antwoordsleutel vermeldde verkeerdelijk ‘teentopgangers’.</li><li>De poten worden langer: grotere passen, sneller lopen.</li></ol>
    <h3>Werkblad 2</h3>
    <table><tr><th>Zoolganger</th><th>Teenganger</th><th>Topganger</th></tr>
    <tr><td>ijsbeer, chimpansee, mens, egel</td><td>kat, wolf, leeuw, hond</td><td>paard, schaap, varken, giraf</td></tr></table>
    <p><b>Kameel:</b> de methode rekent hem bij de topgangers. Kamelen hebben echter geen echte hoeven. Ze lopen op twee tenen met een groot eeltkussen. Veel bronnen noemen kamelen daarom eerder teengangers. Elk goed onderbouwd antwoord is juist. Het gaat om de redenering.</p>
    <h3>Werkblad 3 · kleurcode</h3><p>Schedel en bovenkaak geel · onderkaak rood · wervelkolom oranje · schouderblad bruin · opperarmbeen paars · ellepijp en spaakbeen blauw · hand oranje · ribben en borstbeen groen · heupbeen bruin · dijbeen paars · scheenbeen en kuitbeen blauw · voet oranje. Alle drie de dieren hebben een schedel, een wervelkolom, ribben, schouderblad, heupbeen en dezelfde reeks botten in de ledematen.</p>
    <h3>Werkblad 4</h3><ol><li>Opperarmbeen, spaakbeen en ellepijp, handwortel-, middenhandsbeentjes en vingerkootjes.</li><li>Mens grijpen · vleermuis vliegen · walvis zwemmen · paard lopen. Vogelvleugel (opzoekvraag): dezelfde arm- en onderarmbotten. De handbotten zijn grotendeels vergroeid. Er blijven maar drie kleine vingers over.</li><li>Ledematen met hetzelfde bouwplan (dezelfde botten) en een andere functie.</li></ol>
    <p><b>Klaar en nog tijd:</b> een olifant loopt op zijn tenen, met een groot vetkussen onder de hiel. Er zit zelfs een extra ‘zesde teen’ in de voet. Dat stuk verbenend kraakbeen steunt het kussen.</p>
    <h3>Begeleidingstips</h3><ul><li>Lesuur 3: laat de leerling de keuze van de drie dieren in het logboek motiveren.</li><li>Kijk op de poster vooral naar het verband tussen bouw en leefwijze. Kijk ook naar de bronvermelding.</li></ul>`,
  "vakoverschrijdend-escaperoom": `
    <h3>Voorbereiding</h3><p>Zorg voor de Chrono Decoder met 16 sleutels in het CSF-lokaal. Controleer de batterijen (3 × AA). Verder is er geen voorbereiding nodig. Leerlingen knutselen met kosteloos materiaal.</p>
    <h3>Sleutels per ronde</h3>
    <table><tr><th>Ronde</th><th>Sleutels van links naar rechts</th></tr>
    <tr><td>Ronde 1</td><td><b>6 · 2 · 5 · 1</b></td></tr>
    <tr><td>Ronde 2</td><td><b>5 · 2 · 1 · 6</b></td></tr>
    <tr><td>Ronde 3</td><td><b>5 · 1 · 5 · 6</b></td></tr></table>
    <p>De sleutels staan ook in de werkbundel. Aanpassen kan bovenaan het projectbestand (regel SLEUTELS).</p>
    <h3>Antwoord Caesarcode</h3><p>SLOT met 3 plaatsen wordt <b>VORW</b>.</p>
    <h3>Begeleidingstips</h3><ul><li>Lesuur 2: controleer of de vragen oplosbaar zijn voor de gekozen doelgroep.</li><li>Lesuur 4: laat de leerling bij elk antwoord de weg naar de sleutel uitleggen. Daar zitten de meeste fouten.</li><li>Lesuur 7: speel zelf mee als testspeler. Geef geen hints. Noteer de struikelblokken.</li><li>Het filmpje als inleiding is een uitdaging voor wie klaar is.</li></ul>`,
  "nederlands-gezelschapsspel": `
    <h3>Voorbereiding</h3><p><b>Geen.</b> De bouwplaat voor de dobbelsteen, de pionnen en de kaartjes zit in de werkbundel. Leerlingen gebruiken kosteloos materiaal: karton, papier, doppen.</p>
    <h3>Antwoorden</h3>
    <table><tr><th>Vraag</th><th>Antwoord</th></tr>
    <tr><td>‘Je moet de dobbelsteen gooien.’ als instructie</td><td>Gooi de dobbelsteen.</td></tr>
    <tr><td>Tegenover elkaar liggende vlakken</td><td>samen 7</td></tr>
    <tr><td>Ogen op een dobbelsteen</td><td>21</td></tr></table>
    <h3>Begeleidingstips</h3><ul><li>Het accent voor Nederlands ligt op de spelregels als instructieve tekst. Kijk vooral naar korte zinnen, de gebiedende wijs, nummering en vaste woorden.</li><li>Lesuur 2: een spel dat te groot wordt, past niet in 5 lesuren. Stuur bij naar één spelbord of één set kaarten.</li><li>Lesuur 5: elke vraag van een testspeler is een regel om te herschrijven. Vraag naar de verbeterde versie.</li></ul>`,
};
