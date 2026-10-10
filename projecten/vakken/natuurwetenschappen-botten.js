/* Natuurwetenschappen · Over beentjes en botten
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
    vak: "Natuurwetenschappen",
    jaar: "1e en 2e jaar",
    tijd: "4 lesuren",
    sterren: 2,
    voorWie: "Voor leerlingen die niet bang zijn om een skelet van dichtbij te onderzoeken.",
    naam: "Over beentjes en botten: skeletten vergelijken",
    kort: "Ontdek waarom een beer, een kat en een paard elk anders lopen en welke botten alle gewervelde dieren delen.",
    omschrijving: "Een beer, een kat en een paard hebben dezelfde botten in hun poten, en toch lopen ze heel anders. Je bekijkt een video, onderzoekt de skeletten van een krokodil, een havik en een wolf en ontdekt dat jouw arm en een vleermuisvleugel uit dezelfde botten bestaan. Tot slot onderzoek je zelf drie dieren naar keuze en maak je een vergelijkende poster.",
    doel: "Je leert skeletten vergelijken en uitleggen hoe de bouw van een skelet past bij de manier waarop een dier leeft en beweegt.",
    bereikt: ["Zoolgangers, teengangers en topgangers herkennen en uitleggen", "De belangrijkste botten van arm en been benoemen",
              "Het skelet van een reptiel, een vogel en een zoogdier vergelijken met dat van de mens", "Uitleggen wat homologe ledematen zijn",
              "Een verband leggen tussen de bouw van een skelet en de leefwijze van een dier"],
    toepassen: ["Nauwkeurig kijken en vergelijken", "Informatie opzoeken en controleren in een betrouwbare bron", "Kiezen: drie dieren voor mijn eigen onderzoek", "Mijn tijd verdelen over vier lesuren"],
    materiaal: ["Werkbundel", "Kleurpotloden: geel, rood, oranje, bruin, paars, blauw, groen", "Een toestel met internet en eigen oortjes (video en skelet van de mens)"],
    oplossing: "Op deze site, bij ‘Controleer je oplossing’. Je poster heeft geen juiste oplossing: je coach beoordeelt ze met het rooster.",
    product: "Een vergelijkende poster (A4) over drie dieren + een presentatie van 2 minuten",
    links: [["Video: zoolgangers, teengangers en topgangers", "https://schooltv.nl/video/zoolgangers-teengangers-en-topgangers-hoe-zijn-poten-van-dieren-aangepast-aan-hun-omgeving/#q=zoolganger"],
            ["Verken het skelet van de mens", "https://www.ntr.nl/html/micrio/schooltv/botten/"]],
    leerkaarten: [
      ["Zoolgangers", "Zoolgangers lopen op hun hele voetzool: de hiel raakt de grond. Voorbeelden: mens, beer, chimpansee, egel. Voordeel: je staat stevig en zakt minder weg in zachte grond."],
      ["Teengangers", "Teengangers lopen op hun tenen; de hiel staat los van de grond. Voorbeelden: kat, hond, wolf, leeuw. Hun poten worden zo langer: ze lopen sneller en stiller."],
      ["Topgangers of hoefgangers", "Topgangers lopen op de toppen van hun tenen. Die zijn bedekt met hoeven, daarom heten ze ook hoefgangers. Voorbeelden: paard, schaap, varken, giraf. Hun hielbeen staat het verst van de grond: hun poten zijn extra lang."],
      ["Hetzelfde bouwplan", "Alle gewervelde dieren hebben een schedel en een wervelkolom. In een arm, een vleugel, een vin en een voorpoot zitten dezelfde botten: opperarmbeen, spaakbeen en ellepijp, handwortelbeentjes, middenhandsbeentjes en vingerkootjes. Zulke ledematen heten homoloog: ze hebben hetzelfde bouwplan, maar een andere functie."]
    ],
    invalshoek: { intro: "In lesuur 3 kies je welke drie dieren je onderzoekt voor je poster.", keuzes: [
      ["Snelle lopers", "Bijvoorbeeld cheeta, paard en struisvogel: wat maakt hen snel?"],
      ["Vliegers en zwemmers", "Bijvoorbeeld vleermuis, pinguïn en dolfijn: dezelfde botten, een totaal andere taak."],
      ["Eén leefgebied", "Drie dieren uit het bos, de savanne of het poolgebied: hoe past hun skelet bij hun omgeving?"]] },
    nogTijd: "Zoek uit hoe een olifant loopt: op zijn hele voet of op zijn tenen? Wat zit er verstopt in zijn voet?",
    test: [
      ["Op welk deel van de voet loopt een teenganger?", ["Op zijn tenen", "Op zijn hele voetzool", "Op de toppen van zijn tenen"], 0, "De hiel van een teenganger raakt de grond niet."],
      ["Waarom heten topgangers ook hoefgangers?", ["De toppen van hun tenen zijn bedekt met hoeven", "Ze lopen op hun hielen", "Ze hebben geen tenen"], 0, "Paarden, schapen en giraffen lopen op hoeven."],
      ["Wat zijn homologe ledematen?", ["Ledematen met dezelfde botten maar een andere functie", "Ledematen die er precies hetzelfde uitzien", "Ledematen zonder botten"], 0, "Jouw arm en een vleermuisvleugel zijn homoloog."]
    ],
    controle: [
      ["Is de mens een zoolganger, een teenganger of een topganger?", "tekst", ["zoolganger", "een zoolganger"], "Kijk naar je eigen voet als je loopt: raakt je hiel de grond?"],
      ["Bij welk type staat het hielbeen het verst van de grond?", "tekst", ["topganger", "topgangers", "hoefganger", "hoefgangers", "de topganger", "de topgangers"], "Lees de leerkaart ‘Topgangers of hoefgangers’."],
      ["Welk dier uit de lijst van werkblad 2 is géén zoolganger en géén teenganger, maar wel een topganger: wolf, egel, giraf of leeuw?", "tekst", ["giraf", "de giraf"], "Welk dier loopt op hoeven?"],
      ["Welke twee botten zitten in je onderarm?", "tekst", ["spaakbeen en ellepijp", "ellepijp en spaakbeen", "spaakbeen ellepijp", "ellepijp spaakbeen"], "Lees de leerkaart ‘Hetzelfde bouwplan’."],
      ["Hoe noem je ledematen met dezelfde botten maar een andere functie?", "tekst", ["homoloog", "homologe ledematen", "homologe"], "Het woord begint met ‘homo-’, wat ‘gelijk’ betekent."]
    ],
    criteria: ["Logboek elk lesuur ingevuld", "Werkbladen 1 en 2 juist ingevuld", "Skeletten nauwkeurig gekleurd volgens de kleurcode", "Homologe ledematen juist uitgelegd", "Poster vergelijkt drie dieren met juiste info en bron"],

    lessen: CSF.lessenN({
      t1: "Opstart: hoe lopen dieren?",
      weet: "Noteer welke botten je al kent en hoe jouw voet de grond raakt als je loopt.",
      opdracht: "Lees de opdracht: wat moet er op je poster?",
      ideeen: "Bekijk de video over zoolgangers, teengangers en topgangers (met oortjes). Noteer per groep minstens 3 dieren.",
      start: "Werkblad 1: kleur het hielbeen en beantwoord de vragen. Controleer op de site.",
      midden: [
        { titel: "Dieren indelen en skeletten kleuren", werk: "Werkblad 2: deel twaalf dieren in. Werkblad 3: kleur de skeletten van de krokodil, de havik en de wolf volgens de kleurcode." },
        { titel: "Hetzelfde bouwplan", werk: "Werkblad 4: vergelijk een arm, een vleermuisvleugel, een vin en een poot. Verken het skelet van de mens op de NTR-site. Kies je drie dieren voor je eigen onderzoek." }
      ],
      laatste: { titel: "Eigen onderzoek en poster", werk: "Zoek informatie over je drie dieren en maak je vergelijkende poster.", presenteer: "Stel je poster in 2 minuten voor aan een medeleerling, of neem jezelf op voor Smartschool." }
    }),

    werkbundel: [
      { les: 1, html: `
        ${h.kader("De opdracht", "Je onderzoekt hoe de skeletten van dieren verschillen en wat ze gemeen hebben. Je eindproduct is een <b>vergelijkende poster</b> over <b>drie dieren naar keuze</b>: hoe lopen ze, wat valt op aan hun skelet en hoe past dat bij hun leefomgeving?")}
        <p><b>Welke botten ken ik al? Hoe raakt mijn voet de grond als ik loop?</b></p>${h.lijnen(3)}
        <h2>Video · zoolgangers, teengangers en topgangers</h2>
        <p>Bekijk met oortjes de video op schooltv.nl (de link staat bij het project op de site). Noteer per groep minstens 3 dieren.</p>
        ${h.tabel(["Zoolgangers", "Teengangers", "Topgangers (hoefgangers)"], 4, 26)}
        ${h.leerkaart("Leerkaart · drie manieren om te lopen", "<p><b>Zoolgangers</b> lopen op hun hele voetzool. <b>Teengangers</b> lopen op hun tenen, hun hiel raakt de grond niet. <b>Topgangers</b> lopen op de toppen van hun tenen, die bedekt zijn met hoeven: daarom heten ze ook <b>hoefgangers</b>.</p>")}` },
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
        <p>Schrijf elk dier in de juiste kolom. Twijfel je? Zoek een foto of filmpje van het dier dat loopt en kijk naar zijn hiel.</p>
        <p class="mono" style="letter-spacing:.02em">${DIEREN.join(" · ")}</p>
        ${h.tabel(["Zoolganger", "Teenganger", "Topganger (hoefganger)"], 5, 26)}
        ${h.kader("Denkvraag · de kameel", "<p>Een kameel loopt op twee tenen met een groot, zacht eeltkussen eronder. Hij heeft geen echte hoeven, maar kleine nagels. Sommige boeken noemen hem een topganger, andere niet. Wat vind jij? Zoek op en leg uit.</p>" + h.lijnen(2))}
        <h2>Werkblad 3 · Kleurcode voor de skeletten</h2>
        <p>Kleur in de skeletten van de krokodil (reptiel), de havik (vogel) en de wolf (zoogdier) de botten in deze kleuren. Vergelijk met het skelet van de mens op de NTR-site.</p>
        ${kleurcode}` },
      { les: 2, html: `
        <h2>Werkblad 3 · Krokodil (reptiel)</h2>
        ${h.beeld(IMG + "botten-2-krokodil.png", "skelet van een krokodil, zijaanzicht", 300)}
        <h2>Havik (vogel) en wolf (zoogdier)</h2>
        <div class="twee">${h.beeld(IMG + "botten-3-havik.png", "skelet van een havik, zijaanzicht", 330)}${h.beeld(IMG + "botten-4-wolf.png", "skelet van een wolf, zijaanzicht", 330)}</div>
        <p><b>Welke botten vind je bij alle drie de dieren terug?</b></p>${h.lijnen(2)}` },
      { les: 3, html: `
        <h2>Werkblad 4 · Hetzelfde bouwplan</h2>
        ${h.beeld(IMG + "botten-5-voorpoten.png", "arm van een mens, vleugel van een vleermuis, vin van een walvis en voorpoot van een paard", 240)}
        <p class="klein">Van links naar rechts: arm van een mens · vleugel van een vleermuis · vin van een walvis · voorpoot van een paard. Kleur in elke tekening: <b>opperarmbeen paars</b> · <b>spaakbeen en ellepijp blauw</b> · <b>botten van de hand oranje</b>.</p>
        <table><tr><td style="width:46%">1. Welke botten vind je in alle vier de tekeningen terug?</td><td style="height:34px"></td></tr>
        <tr><td>2. Welke taak heeft het ledemaat bij elk dier (grijpen, vliegen, zwemmen, lopen)? Zoek ook op hoe een vogelvleugel gebouwd is: wat is daar anders?</td><td style="height:34px"></td></tr>
        <tr><td>3. Wat zijn homologe ledematen? Leg uit in je eigen woorden.</td><td style="height:34px"></td></tr></table>
        <h2>Verken het skelet van de mens</h2>
        <p>Open het skelet op de NTR-site (link bij het project). Zoek deze botten op en schrijf waar ze zitten: hielbeen · dijbeen · spaakbeen · schouderblad · borstbeen.</p>
        ${h.tabel(["Bot", "Waar zit het?"], 5, 22)}
        <p><b>Mijn drie dieren voor de poster:</b> ________________ · ________________ · ________________ &nbsp; <b>Invalshoek:</b> snelle lopers / vliegers en zwemmers / één leefgebied</p>` },
      { les: 4, html: `
        <h2>Mijn vergelijkende poster · eindproduct</h2>
        <p>Vul per dier de kolom in. Gebruik betrouwbare bronnen en noteer ze.</p>
        <table><tr><th style="width:22%"></th><th>Dier 1: ____________</th><th>Dier 2: ____________</th><th>Dier 3: ____________</th></tr>
        <tr><td><b>Zool-, teen- of topganger?</b><br><span class="klein">of: vliegt of zwemt</span></td><td style="height:40px"></td><td></td><td></td></tr>
        <tr><td><b>Schets van de poot, vleugel of vin</b></td><td style="height:150px"></td><td></td><td></td></tr>
        <tr><td><b>Wat valt op aan het skelet?</b></td><td style="height:70px"></td><td></td><td></td></tr>
        <tr><td><b>Hoe past dat bij de leefomgeving?</b></td><td style="height:70px"></td><td></td><td></td></tr>
        <tr><td><b>Bron</b></td><td style="height:30px"></td><td></td><td></td></tr></table>
        <p><b>Besluit: wat hebben mijn drie dieren gemeen en wat verschilt?</b></p>${h.lijnen(3)}
        <p><b>Presentatie (2 min):</b> welke dieren en waarom · één opvallend verschil · wat hebben ze gemeen?</p>` }
    ]
  });
})();
