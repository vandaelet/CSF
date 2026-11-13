/* Oefenproject geschiedenis · Wapenschild met een verhaal (2 lesuren)
   Oefent: regels uit een leerkaart toepassen, ontwerpen, keuzes uitleggen. */
(function () {
  var h = CSF.h;
  function fiche(l) { return '<table class="fiche">' + l.map(function (v) { return '<tr><td class="lbl">' + v[0] + '</td><td style="height:' + (v[1] || 28) + 'px">' + (v[2] || "") + "</td></tr>"; }).join("") + "</table>"; }
  var SCHILD = "M10 8 H110 V70 Q110 120 60 142 Q10 120 10 70 Z";
  var KL = { goud: "#f2c200", zilver: "#ffffff", rood: "#d23a2f", blauw: "#2a5db0", groen: "#2e8b4e", zwart: "#222222", paars: "#7d3c98" };
  function schild(veld, figuur, kleur, label) {
    var f = figuur === "ster" ? '<path d="M60 40 L67 62 L90 62 L71 75 L78 97 L60 84 L42 97 L49 75 L30 62 L53 62 Z" fill="' + KL[kleur] + '" stroke="#333"/>'
      : figuur === "kruis" ? '<path d="M50 25 H70 V60 H100 V80 H70 V125 H50 V80 H20 V60 H50 Z" fill="' + KL[kleur] + '" stroke="#333"/>'
      : figuur === "balk" ? '<path d="M10 55 H110 V85 H10 Z" fill="' + KL[kleur] + '" stroke="#333"/>'
      : '<circle cx="60" cy="70" r="28" fill="' + KL[kleur] + '" stroke="#333"/>';
    return '<div style="text-align:center"><svg viewBox="0 0 120 150" width="100" height="125"><path d="' + SCHILD + '" fill="' + KL[veld] + '" stroke="#333" stroke-width="2"/>' + f + '</svg><br><span class="klein">' + label + "</span></div>";
  }

  CSF.project({
    id: "oefen-wapenschild",
    soort: "oefen",
    domein: "geschiedenis",
    jaar: "1e jaar",
    tijd: "2 lesuren",
    sterren: 2,
    naam: "Wapenschild met een verhaal",
    kort: "Ontdek de geheime regels van ridders en steden. Ontwerp een wapenschild dat iets over jou vertelt.",
    voorWie: "Voor wie graag tekent en houdt van symbolen en geheime betekenissen.",
    omschrijving: "Ridders, steden en families hadden een wapenschild. 🛡️ Het was hun visitekaartje: wie het zag, wist meteen wie er aankwam. Maar je mocht niet zomaar wat tekenen. De heraldiek, de kunst van de wapenschilden, heeft strenge regels. Je leert ze kennen en je ontwerpt een eigen wapenschild. Elke kleur en elk symbool vertelt iets over jou.",
    doel: "Je past de regels van de heraldiek toe op een eigen ontwerp en je legt uit waarom je elke kleur en elk symbool koos.",
    bereikt: ["De kleurregel van de heraldiek toepassen", "Verdelingen van een schild herkennen", "Symbolen kiezen die iets betekenen", "Je ontwerp uitleggen"],
    toepassen: ["Regels uit een leerkaart nauwkeurig toepassen", "Eerst schetsen, dan afwerken", "Je keuzes verantwoorden"],
    materiaal: ["Werkbundel", "Potlood, gom en kleurpotloden"],
    oplossing: "Controleer de oefeningen over de kleurregel op deze site bij ‘Controleer je oplossing’.",
    product: "Een getekend wapenschild met een wapenspreuk en een uitleg van elk symbool",
    leerkaarten: [
      ["De kleurregel", "Een wapenschild gebruikt twee soorten kleuren. De <b>metalen</b> zijn goud (geel) en zilver (wit). De <b>kleuren</b> zijn onder meer rood, blauw, groen, zwart en paars. De belangrijkste regel: leg nooit <b>metaal op metaal</b> of <b>kleur op kleur</b>. Zo blijft een schild van ver goed zichtbaar.",
        CSF.lk.fig('<svg viewBox="0 0 440 150" role="img" aria-label="Twee schilden die de kleurregel volgen en twee die hem breken"><g stroke="#333" stroke-width="2"><path d="M20 15 H90 V60 Q90 100 55 118 Q20 100 20 60 Z" fill="#2a5db0"/><path d="M40 45 H70 V75 H40 Z" fill="#f2c200"/><path d="M125 15 H195 V60 Q195 100 160 118 Q125 100 125 60 Z" fill="#ffffff"/><path d="M145 45 H175 V75 H145 Z" fill="#d23a2f"/><path d="M245 15 H315 V60 Q315 100 280 118 Q245 100 245 60 Z" fill="#2e8b4e"/><path d="M265 45 H295 V75 H265 Z" fill="#d23a2f"/><path d="M350 15 H420 V60 Q420 100 385 118 Q350 100 350 60 Z" fill="#f2c200"/><path d="M370 45 H400 V75 H370 Z" fill="#ffffff"/></g><g font-size="12" text-anchor="middle"><text x="55" y="138" fill="#2e8b4e">✓ goud op blauw</text><text x="160" y="138" fill="#2e8b4e">✓ rood op zilver</text><text x="280" y="138" fill="#c0392b">✗ rood op groen</text><text x="385" y="138" fill="#c0392b">✗ zilver op goud</text></g></svg>') +
        CSF.lk.tabel(['Kleur', 'Betekenis die vaak gebruikt wordt'], [['goud', 'rijkdom, edelmoedigheid'], ['zilver', 'eerlijkheid, vrede'], ['rood', 'moed, kracht'], ['blauw', 'trouw'], ['groen', 'hoop, natuur'], ['zwart', 'standvastigheid']]) +
        CSF.lk.tip('De betekenissen verschillen per bron. Kies wat bij jou past, en leg het uit.')],
      ["Verdelingen en stukken", "Een schild kan je <b>verdelen</b>: in twee helften naast elkaar (gedeeld), boven elkaar (doorsneden) of in vier vakken (gevierendeeld). Daarop zet je <b>stukken</b>: een balk, een kruis of een figuur zoals een dier. Onderaan komt vaak een <b>wapenspreuk</b>: een korte zin die je motto is.",
        CSF.lk.fig('<svg viewBox="0 0 440 150" role="img" aria-label="Drie verdelingen van een schild"><g stroke="#333" stroke-width="2"><path d="M40 15 H110 V60 Q110 100 75 118 Q40 100 40 60 Z" fill="#fff"/><path d="M75 15 V118" /><path d="M75 15 H110 V60 Q110 100 75 118 Z" fill="#d23a2f"/><path d="M185 15 H255 V60 Q255 100 220 118 Q185 100 185 60 Z" fill="#2a5db0"/><path d="M185 60 H255 V60 Q255 100 220 118 Q185 100 185 60 Z" fill="#f2c200"/><path d="M330 15 H400 V60 Q400 100 365 118 Q330 100 330 60 Z" fill="#fff"/><path d="M330 15 H365 V60 H330 Z" fill="#2e8b4e"/><path d="M365 60 H400 Q400 100 365 118 Z" fill="#2e8b4e"/></g><g font-size="13" text-anchor="middle"><text x="75" y="140">gedeeld</text><text x="220" y="140">doorsneden</text><text x="365" y="140">gevierendeeld</text></g></svg>') +
        CSF.lk.tabel(['Figuur', 'Betekenis die vaak gebruikt wordt'], [['leeuw', 'moed'], ['adelaar', 'macht, vrijheid'], ['boom', 'groei, familie'], ['sleutel', 'vertrouwen'], ['ster', 'hoop, een doel']]) +
        CSF.lk.let('Hou het eenvoudig. Een goed wapenschild herken je ook van ver: twee of drie kleuren en één of twee figuren.')]
    ],
    invalshoek: { intro: "Kies in lesuur 1 voor wie je wapenschild is.", keuzes: [["Voor mezelf", "Wat zegt het schild over wie jij bent?"], ["Voor mijn familie", "Waar komt je familie vandaan, wat is typisch voor jullie?"], ["Voor onze klas", "Een schild voor je klas, met een wapenspreuk die past."]] },
    nogTijd: "Ontwerp een tweede versie in een andere verdeling. Welke is beter van ver te herkennen? Leg uit waarom.",
    test: [
      ["Welke kleuren zijn metalen in de heraldiek?", ["Goud en zilver", "Rood en blauw", "Zwart en wit"], 0, "Goud (geel) en zilver (wit)."],
      ["Welk schild breekt de kleurregel?", ["Een blauwe ster op een groen veld", "Een gouden ster op een blauw veld", "Een rode ster op een zilveren veld"], 0, "Blauw op groen is kleur op kleur."],
      ["Wat is een wapenspreuk?", ["Een korte zin die je motto is", "De naam van de tekenaar", "Een regel over kleuren"], 0, "Ze staat vaak onder het schild."]
    ],
    controle: [
      ["Werkblad 1: hoeveel van de vier schilden breken de kleurregel?", "getal", [2, 0], "Zoek metaal op metaal of kleur op kleur."],
      ["Werkblad 1: welk schild volgt de regel en heeft een zwarte figuur? (nummer)", "getal", [4, 0], "Zwart is een kleur. Waarop mag het dan staan?"],
      ["Werkblad 1: mag een groene draak op een blauw veld? (ja of nee)", "tekst", ["nee"], "Groen en blauw zijn allebei kleuren."]
    ],
    criteria: ["Logboek elk lesuur ingevuld", "Kleurregel overal gevolgd", "Verdeling en figuren gekozen met een reden", "Wapenspreuk die past", "Uitleg bij elk symbool"],
    lessen: CSF.lessen2({
      t1: "De regels en mijn schets",
      opdracht: "Lees de projectfiche. Wat moet je wapenschild zeker hebben?",
      ideeen: "Kies voor wie je schild is. Noteer in werkblad 1 drie dingen die iets over jou (of je familie of klas) vertellen.",
      start: "Los de oefening over de kleurregel op. Maak twee schetsen van je schild.",
      t2: "Ontwerpen en uitleggen",
      werk: "Kies je beste schets. Teken en kleur je wapenschild in het grote schild. Schrijf je wapenspreuk en de uitleg bij elk symbool.",
      presenteer: "Toon je wapenschild aan een klasgenoot. Laat hem eerst raden wat het over jou zegt. Leg daarna uit."
    }),
    werkbundel: [
      { les: 1, html: `
        ${h.kader("De opdracht", "Ontwerp een wapenschild volgens de regels van de heraldiek. Elke kleur en elk symbool vertelt iets over jou, je familie of je klas.")}
        <h2>Werkblad 1 · De kleurregel</h2>
        <p>Welke schilden volgen de regel? Zet ✓ of ✗.</p>
        <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:8px">
          ${schild("rood", "ster", "goud", "1 · gouden ster op rood")}${schild("blauw", "balk", "rood", "2 · rode balk op blauw")}${schild("goud", "kruis", "zilver", "3 · zilveren kruis op goud")}${schild("zilver", "cirkel", "zwart", "4 · zwarte schijf op zilver")}
        </div>
        ${fiche([["Hoeveel schilden breken de regel?", 26], ["Welk schild volgt de regel en heeft een zwarte figuur?", 26], ["Mag een groene draak op een blauw veld? Waarom?", 34]])}
        <h3>Wat wil ik vertellen met mijn schild?</h3>
        ${fiche([["Voor wie?", 24], ["Drie dingen die typisch zijn", 54, "1.<br>2.<br>3."]])}
        <h3>Twee schetsen</h3>
        <div class="twee">${h.vak("schets 1", 150)}${h.vak("schets 2", 150)}</div>` },
      { les: 2, html: `
        <h2>Mijn wapenschild</h2>
        <div style="text-align:center"><svg viewBox="0 0 240 290" width="300" height="360"><path d="M15 12 H225 V140 Q225 240 120 280 Q15 240 15 140 Z" fill="#fff" stroke="#333" stroke-width="3"/></svg></div>
        <p style="text-align:center"><b>Wapenspreuk:</b> ________________________________________</p>
        <table><tr><th>Kleur of symbool</th><th>Wat betekent het voor mij?</th></tr>${[1, 2, 3, 4].map(function () { return '<tr><td style="height:30px"></td><td></td></tr>'; }).join("")}</table>
        <p><b>Volgt mijn schild overal de kleurregel?</b> ja / nee</p>` }
    ]
  });
})();
