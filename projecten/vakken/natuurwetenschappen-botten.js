/* natuurwetenschappen · Over beentjes en botten
   Bron: project ‘Skeletten vergelijken’ (pootskeletten) van de werkgroep, herwerkt zonder methodebladen.
   Tekeningen: projecten/afbeeldingen/botten-*.png (zolang ze ontbreken, staat er een kader ‘tekening volgt’). */
(function () {
  var h = CSF.h;
  var IMG = "projecten/afbeeldingen/";
  var KLEUREN = [["Schedel en bovenkaak", "geel"], ["Onderkaak", "rood"], ["Wervelkolom", "oranje"], ["Schouderblad", "bruin"],
                 ["Opperarmbeen", "paars"], ["Ellepijp en spaakbeen", "blauw"], ["Botten van de hand", "oranje"], ["Ribben en borstbeen", "groen"],
                 ["Heupbeen", "bruin"], ["Dijbeen", "paars"], ["Scheenbeen en kuitbeen", "blauw"], ["Botten van de voet", "oranje"]];
  var kleurcode = '<table class="klein"><tr><th>Bot</th><th>Kleur</th><th>Bot</th><th>Kleur</th></tr>' +
    [0, 2, 4, 6, 8, 10].map(function (i) { return "<tr><td>" + KLEUREN[i][0] + "</td><td><b>" + KLEUREN[i][1] + "</b></td><td>" + KLEUREN[i + 1][0] + "</td><td><b>" + KLEUREN[i + 1][1] + "</b></td></tr>"; }).join("") + "</table>";
  var DIEREN = ["ijsbeer", "kat", "paard", "chimpansee", "wolf", "schaap", "mens", "leeuw", "varken", "hond", "egel", "giraf"];

  CSF.project({
    id: "natuur-botten",
    soort: "vak",
    vak: "natuurwetenschappen",
    jaar: "1e en 2e jaar",
    tijd: "4 lesuren",
    sterren: 2,
    voorWie: "Voor leerlingen zonder angst voor een skelet van dichtbij.",
    naam: "Over beentjes en botten: skeletten vergelijken",
    kort: "Ontdek de verschillende loopstijlen van een beer, een kat en een paard. Zoek de gemeenschappelijke botten van alle gewervelde dieren.",
    omschrijving: "Een beer, een kat en een paard hebben dezelfde botten in hun poten. Toch lopen ze heel anders. Bekijk een video. Onderzoek de skeletten van een krokodil, een havik en een wolf. Ontdek de gelijkenis tussen jouw arm en een vleermuisvleugel. Onderzoek tot slot zelf drie dieren naar keuze. Maak een vergelijkende poster.",
    doel: "Je leert skeletten vergelijken. Je legt het verband uit tussen de bouw van een skelet en de leefwijze en beweging van een dier.",
    bereikt: ["Zoolgangers, teengangers en topgangers herkennen en uitleggen", "De belangrijkste botten van arm en been benoemen",
              "Het skelet van een reptiel, een vogel en een zoogdier vergelijken met dat van de mens", "Homologe ledematen uitleggen",
              "Een verband leggen tussen de bouw van een skelet en de leefwijze van een dier"],
    toepassen: ["Nauwkeurig kijken en vergelijken", "Informatie opzoeken en controleren in een betrouwbare bron", "Kiezen: drie dieren voor mijn eigen onderzoek", "Mijn tijd verdelen over vier lesuren"],
    materiaal: ["Werkbundel", "Kleurpotloden: geel, rood, oranje, bruin, paars, blauw, groen", "Een toestel met internet en eigen oortjes (video en skelet van de mens)"],
    oplossing: "Op deze site, bij ‘Controleer je oplossing’. Je poster heeft geen juiste oplossing. Je coach beoordeelt ze met het rooster.",
    product: "Een vergelijkende poster (A4) over drie dieren en een presentatie van 2 minuten",
    links: [["Video: zoolgangers, teengangers en topgangers", "https://schooltv.nl/video/zoolgangers-teengangers-en-topgangers-hoe-zijn-poten-van-dieren-aangepast-aan-hun-omgeving/#q=zoolganger"],
            ["Verken het skelet van de mens", "https://www.ntr.nl/html/micrio/schooltv/botten/"]],
    leerkaarten: [
      ["Zoolgangers", "Zoolgangers lopen op hun hele voetzool. De hiel raakt de grond. Voorbeelden: mens, beer, chimpansee, egel. Voordeel: een stevige stand. Je zakt ook minder weg in zachte grond."],
      ["Teengangers", "Teengangers lopen op hun tenen. De hiel staat los van de grond. Voorbeelden: kat, hond, wolf, leeuw. Hun poten worden zo langer. Ze lopen sneller en stiller."],
      ["Topgangers of hoefgangers", "Topgangers lopen op de toppen van hun tenen. Die toppen zijn bedekt met hoeven. Daarom heten ze ook hoefgangers. Voorbeelden: paard, schaap, varken, giraf. Hun hielbeen staat het verst van de grond. Hun poten zijn extra lang."],
      ["Hetzelfde bouwplan", "Alle gewervelde dieren hebben een schedel en een wervelkolom. In een arm, een vleugel, een vin en een voorpoot zitten dezelfde botten: opperarmbeen, spaakbeen en ellepijp, handwortelbeentjes, middenhandsbeentjes en vingerkootjes. Zulke ledematen heten homoloog. Ze hebben hetzelfde bouwplan. Hun functie verschilt."]
    ],
    invalshoek: { intro: "Kies in lesuur 3 de drie dieren voor je poster.", keuzes: [
      ["Snelle lopers", "Bijvoorbeeld cheeta, paard en struisvogel: wat maakt hen snel?"],
      ["Vliegers en zwemmers", "Bijvoorbeeld vleermuis, pinguïn en dolfijn: dezelfde botten, een totaal andere taak."],
      ["Eén leefgebied", "Drie dieren uit het bos, de savanne of het poolgebied: welk verband zie je tussen skelet en omgeving?"]] },
    nogTijd: "Onderzoek de loopstijl van een olifant. Loopt hij op zijn hele voet of op zijn tenen? Wat zit er verstopt in zijn voet?",
    test: [
      ["Op welk deel van de voet loopt een teenganger?", ["Op zijn tenen", "Op zijn hele voetzool", "Op de toppen van zijn tenen"], 0, "De hiel van een teenganger raakt de grond niet."],
      ["Waarom heten topgangers ook hoefgangers?", ["De toppen van hun tenen zijn bedekt met hoeven", "Ze lopen op hun hielen", "Ze hebben geen tenen"], 0, "Paarden, schapen en giraffen lopen op hoeven."],
      ["Wat zijn homologe ledematen?", ["Ledematen met dezelfde botten en een andere functie", "Ledematen met precies hetzelfde uitzicht", "Ledematen zonder botten"], 0, "Jouw arm en een vleermuisvleugel zijn homoloog."]
    ],
    controle: [
      ["Is de mens een zoolganger, een teenganger of een topganger?", "tekst", ["zoolganger", "een zoolganger"], "Kijk naar je eigen voet tijdens het lopen. Raakt je hiel de grond?"],
      ["Bij welk type staat het hielbeen het verst van de grond?", "tekst", ["topganger", "topgangers", "hoefganger", "hoefgangers", "de topganger", "de topgangers"], "Lees de leerkaart ‘Topgangers of hoefgangers’."],
      ["Welk dier uit de lijst van werkblad 2 is een topganger: wolf, egel, giraf of leeuw?", "tekst", ["giraf", "de giraf"], "Welk dier loopt op hoeven?"],
      ["Welke twee botten zitten in je onderarm?", "tekst", ["spaakbeen en ellepijp", "ellepijp en spaakbeen", "spaakbeen ellepijp", "ellepijp spaakbeen"], "Lees de leerkaart ‘Hetzelfde bouwplan’."],
      ["Hoe noem je ledematen met dezelfde botten en een andere functie?", "tekst", ["homoloog", "homologe ledematen", "homologe"], "Het woord begint met ‘homo-’. Dat betekent ‘gelijk’."]
    ],
    criteria: ["Logboek elk lesuur ingevuld", "Werkbladen 1 en 2 juist ingevuld", "Skeletten nauwkeurig gekleurd volgens de kleurcode", "Homologe ledematen juist uitgelegd", "Poster vergelijkt drie dieren met juiste info en bron"],

    lessen: CSF.lessenN({
      t1: "Opstart: hoe lopen dieren?",
      weet: "Noteer de botten in je geheugen. Beschrijf de stand van je voet tijdens het lopen.",
      opdracht: "Lees de opdracht. Noteer de onderdelen van je poster.",
      ideeen: "Bekijk met oortjes de video over zoolgangers, teengangers en topgangers. Noteer per groep minstens 3 dieren.",
      start: "Werkblad 1: kleur het hielbeen. Beantwoord de vragen. Controleer je antwoorden op de site.",
      midden: [
        { titel: "Dieren indelen en skeletten kleuren", werk: "Werkblad 2: deel twaalf dieren in. Werkblad 3: kleur de skeletten van de krokodil, de havik en de wolf volgens de kleurcode." },
        { titel: "Hetzelfde bouwplan", werk: "Werkblad 4: vergelijk een arm, een vleermuisvleugel, een vin en een poot. Verken het skelet van de mens op de NTR-site. Kies je drie dieren voor je eigen onderzoek." }
      ],
      laatste: { titel: "Eigen onderzoek en poster", werk: "Zoek informatie over je drie dieren. Maak je vergelijkende poster.", presenteer: "Stel je poster in 2 minuten voor aan een medeleerling of via een opname op Smartschool." }
    }),

    werkbundel: [
      { les: 1, html: `
        ${h.kader("De opdracht", "Onderzoek de verschillen en gelijkenissen tussen skeletten van dieren. Je eindproduct is een <b>vergelijkende poster</b> over <b>drie dieren naar keuze</b>. Beschrijf hun manier van lopen. Noteer opvallende kenmerken van hun skelet. Leg het verband met hun leefomgeving.")}
        <p><b>Welke botten ken ik al? Welk deel van mijn voet raakt de grond tijdens het lopen?</b></p>${h.lijnen(3)}
        <h2>Video · zoolgangers, teengangers en topgangers</h2>
        <p>Bekijk met oortjes de video op schooltv.nl. De link staat bij het project op de site. Noteer per groep minstens 3 dieren.</p>
        ${h.tabel(["Zoolgangers", "Teengangers", "Topgangers (hoefgangers)"], 4, 26)}
        ${h.leerkaart("Leerkaart · drie manieren om te lopen", "<p><b>Zoolgangers</b> lopen op hun hele voetzool. <b>Teengangers</b> lopen op hun tenen. Hun hiel raakt de grond niet. <b>Topgangers</b> lopen op de toppen van hun tenen. Die toppen zijn bedekt met hoeven. Daarom heten ze ook <b>hoefgangers</b>.</p>")}` },
      { les: 1, html: `
        <h2>Werkblad 1 · Poten vergelijken</h2>
        ${h.beeld(IMG + "botten-1-poten.png", "achterpoot van een mens, een beer, een kat en een paard", 300)}
        <p class="klein">Van links naar rechts: mens · beer · kat · paard. <b>Kleur in elke tekening het hielbeen rood.</b></p>
        <table><tr><td style="width:46%">1. Op welk deel van de voet loopt een zoolganger?</td><td></td></tr>
        <tr><td>2. Op welk deel van de voet loopt een teenganger?</td><td></td></tr>
        <tr><td>3. Op welk deel van de voet loopt een topganger?</td><td></td></tr>
        <tr><td>4. Waarom heten topgangers ook hoefgangers?</td><td style="height:34px"></td></tr>
        <tr><td>5. Is de mens een zoolganger, een teenganger of een topganger? Hoe weet je dat?</td><td style="height:34px"></td></tr>
        <tr><td>6. Welk voordeel heeft lopen op de hele voetzool?</td><td style="height:34px"></td></tr>
        <tr><td>7. Bij welk type staat het hielbeen het verst van de grond?</td><td></td></tr>
        <tr><td>8. Welk voordeel heeft dat voor de lengte van de poten en voor het lopen?</td><td style="height:34px"></td></tr></table>` },
      { les: 2, html: `
        <h2>Werkblad 2 · Dieren indelen</h2>
        <p>Schrijf elk dier in de juiste kolom. Twijfel je? Zoek een foto of filmpje van het lopende dier. Kijk naar zijn hiel.</p>
        <p class="mono" style="letter-spacing:.02em">${DIEREN.join(" · ")}</p>
        ${h.tabel(["Zoolganger", "Teenganger", "Topganger (hoefganger)"], 5, 26)}
        ${h.kader("Denkvraag · de kameel", "<p>Een kameel loopt op twee tenen met een groot, zacht eeltkussen eronder. Hij heeft geen echte hoeven. Hij heeft wel kleine nagels. Sommige boeken noemen hem een topganger. Andere boeken doen dat niet. Wat vind jij? Zoek het op. Leg je antwoord uit.</p>" + h.lijnen(2))}
        <h2>Werkblad 3 · Kleurcode voor de skeletten</h2>
        <p>Kleur de botten van de krokodil (reptiel), de havik (vogel) en de wolf (zoogdier) in deze kleuren. Vergelijk met het skelet van de mens op de NTR-site.</p>
        ${kleurcode}` },
      { les: 2, html: `
        <h2>Werkblad 3 · Krokodil (reptiel)</h2>
        ${h.beeld(IMG + "botten-2-krokodil.png", "skelet van een krokodil, zijaanzicht", 300)}
        <h2>Havik (vogel) en wolf (zoogdier)</h2>
        <div class="twee">${h.beeld(IMG + "botten-3-havik.png", "skelet van een havik, zijaanzicht", 330)}${h.beeld(IMG + "botten-4-wolf.png", "skelet van een wolf, zijaanzicht", 330)}</div>
        <p><b>Welke botten vind je bij alle drie de dieren terug?</b></p>${h.lijnen(2)}` },
      { les: 3, html: `
        <h2>Werkblad 4 · Hetzelfde bouwplan</h2>
        ${h.beeld(IMG + "botten-5-voorpoten.png", "arm van een mens, vleugel van een vleermuis, vin van een walvis en voorpoot van een paard", 228)}
        <p class="klein">Van links naar rechts: arm van een mens · vleugel van een vleermuis · vin van een walvis · voorpoot van een paard. Kleur in elke tekening: <b>opperarmbeen paars</b> · <b>spaakbeen en ellepijp blauw</b> · <b>botten van de hand oranje</b>.</p>
        <table><tr><td style="width:46%">1. Welke botten vind je in alle vier de tekeningen terug?</td><td style="height:34px"></td></tr>
        <tr><td>2. Welke taak heeft het ledemaat bij elk dier (grijpen, vliegen, zwemmen, lopen)? Zoek ook de bouw van een vogelvleugel op. Wat is daar anders?</td><td style="height:34px"></td></tr>
        <tr><td>3. Wat zijn homologe ledematen? Leg het uit in je eigen woorden.</td><td style="height:34px"></td></tr></table>
        <h2>Verken het skelet van de mens</h2>
        <p>Open het skelet op de NTR-site via de link bij het project. Zoek deze botten op. Noteer hun plaats: hielbeen · dijbeen · spaakbeen · schouderblad · borstbeen.</p>
        ${h.tabel(["Bot", "Plaats in het lichaam"], 5, 19)}
        <p><b>Mijn drie dieren voor de poster:</b> ________________ · ________________ · ________________ &nbsp; <b>Invalshoek:</b> snelle lopers / vliegers en zwemmers / één leefgebied</p>` },
      { les: 4, html: `
        <h2>Mijn vergelijkende poster · eindproduct</h2>
        <p>Vul per dier de kolom in. Gebruik betrouwbare bronnen. Noteer die bronnen.</p>
        <table><tr><th style="width:22%"></th><th>Dier 1: ____________</th><th>Dier 2: ____________</th><th>Dier 3: ____________</th></tr>
        <tr><td><b>Zool-, teen- of topganger?</b><br><span class="klein">of: vliegt of zwemt</span></td><td style="height:40px"></td><td></td><td></td></tr>
        <tr><td><b>Schets van de poot, vleugel of vin</b></td><td style="height:150px"></td><td></td><td></td></tr>
        <tr><td><b>Opvallend aan het skelet</b></td><td style="height:70px"></td><td></td><td></td></tr>
        <tr><td><b>Verband met de leefomgeving</b></td><td style="height:70px"></td><td></td><td></td></tr>
        <tr><td><b>Bron</b></td><td style="height:30px"></td><td></td><td></td></tr></table>
        <p><b>Besluit: de gelijkenissen en verschillen tussen mijn drie dieren</b></p>${h.lijnen(3)}
        <p><b>Presentatie (2 min):</b> je dieren en je keuze · één opvallend verschil · één gelijkenis</p>` }
    ]
  });
})();
