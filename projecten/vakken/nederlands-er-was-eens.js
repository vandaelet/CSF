/* Nederlands · Er was eens…
   Bron: de opdracht ‘CSF Nederlands – prentenboek in StoryJumper’ van de werkgroep, uitgewerkt tot 8 lesuren.
   De verhaalberg is een eigen tekening. */
(function () {
  var h = CSF.h;
  function vink(lijst) { return "<table>" + lijst.map(function (x) { return '<tr><td style="width:7%;text-align:center;font-size:13pt">&#9744;</td><td>' + x + "</td></tr>"; }).join("") + "</table>"; }
  function fiche(lijst) { return '<table class="fiche">' + lijst.map(function (v) { return '<tr><td class="lbl">' + v[0] + '</td><td style="height:' + (v[1] || 30) + 'px">' + (v[2] || "") + "</td></tr>"; }).join("") + "</table>"; }
  function verhaalberg() {
    var pt = [[80, 150, "1. Begin", "wie, waar?"], [175, 105, "2. Probleem", "er gaat iets mis"], [280, 30, "3. Spanning", "het hoogtepunt"], [385, 105, "4. Oplossing", ""], [480, 150, "5. Slot", "en toen …"]];
    return '<svg width="100%" height="215" viewBox="0 -22 560 215" font-family="Arial" font-size="12">' +
      '<path d="M20 150 L120 150 L280 30 L440 150 L540 150" fill="none" stroke="#3bc1c5" stroke-width="5" stroke-linejoin="round"/>' +
      pt.map(function (p, i) {
        var links = i < 2, x = p[0] + (i === 2 ? 0 : links ? -14 : 14), anch = i === 2 ? "middle" : links ? "end" : "start";
        var ty = i === 2 ? p[1] - 12 : i === 0 || i === 4 ? p[1] + 22 : p[1] - 6;
        if (i === 0) { x = p[0]; anch = "middle"; } if (i === 4) { x = p[0]; anch = "middle"; }
        return '<circle cx="' + p[0] + '" cy="' + p[1] + '" r="7" fill="#fcaf17"/>' + '<text x="' + x + '" y="' + ty + '" text-anchor="' + anch + '" font-weight="700">' + p[2] + '</text>' +
          (p[3] ? '<text x="' + x + '" y="' + (i === 2 ? ty - 14 : ty + 14) + '" text-anchor="' + anch + '" fill="#555">' + p[3] + "</text>" : "");
      }).join("") + "</svg>";
  }

  CSF.project({
    id: "nederlands-er-was-eens",
    soort: "vak",
    vak: "Nederlands",
    jaar: "1e en 2e jaar",
    tijd: "8 lesuren",
    sterren: 3,
    naam: "Er was eens…",
    kort: "Schrijf en illustreer je eigen prentenboek in StoryJumper.",
    voorWie: "Voor leerlingen die graag verhalen schrijven en tekenen.",
    omschrijving: "Weet je nog welk prentenboek je als kind steeds opnieuw wou horen? 📖 Nu ben jij de schrijver én de illustrator! Bedenk een verhaal voor kleuters of kinderen van de lagere school. Maak er een echt prentenboek van in StoryJumper. Lees het daarna zelf voor, of laat het voorlezen. Er was eens… jouw boek!",
    doel: "Je schrijft een verhaal voor jonge kinderen. Je stemt je taal en je beelden af op die doelgroep. Je maakt een digitaal prentenboek in StoryJumper. Je leest je boek expressief voor.",
    bereikt: ["Een verhaal opbouwen met de verhaalberg", "Taal afstemmen op kleuters of kinderen van de lagere school", "Een storyboard maken", "Tekst en beeld laten samenwerken", "Een digitaal boek maken in StoryJumper", "Expressief voorlezen"],
    toepassen: ["Creatief denken: een eigen verhaal en eigen personages", "Plannen: van idee tot boek in acht lesuren", "Nauwkeurig werken: spelling en opmaak", "Feedback vragen en verwerken"],
    materiaal: ["Werkbundel", "Een Chromebook met internet en je schoolaccount", "Potlood, gom en kleurpotloden voor je schetsen"],
    oplossing: "Je boek heeft geen vaste oplossing. Laat het testen door een medeleerling. Je coach beoordeelt het met het rooster.",
    product: "Een digitaal prentenboek van minstens 12 bladzijden in StoryJumper en een voorleesmoment",
    links: [["StoryJumper", "https://www.storyjumper.com/"]],
    leerkaarten: [
      ["Wat maakt een goed prentenboek?", "Een prentenboek heeft weinig tekst en veel beeld. Het beeld vertelt mee. Er is één duidelijk hoofdpersonage. Herhaling maakt het spannend en makkelijk om mee te vertellen. Het einde is fijn of grappig."],
      ["De verhaalberg", "Elk verhaal klimt een berg op en weer af. Het <b>begin</b> stelt het personage voor. Dan komt er een <b>probleem</b>. De <b>spanning</b> stijgt tot het hoogtepunt. Daarna volgt de <b>oplossing</b>. Het <b>slot</b> rondt het verhaal af."],
      ["Schrijven voor jonge kinderen", "Schrijf korte zinnen. Gebruik woorden die kinderen kennen. Herhaal een zin of een rijmpje. Gebruik klanknabootsingen: boem, plons, miauw. Laat het personage praten. Zet maximaal drie zinnen op een bladzijde."],
      ["Een storyboard", "Een storyboard is een plan van je boek. Teken per bladzijde een klein schetsje. Noteer eronder de tekst. Zo zie je of het verhaal goed loopt voor je begint in StoryJumper."],
      ["Voorlezen", "Lees langzaam. Geef elk personage een eigen stem. Pauzeer voor je de bladzijde omdraait. Kijk af en toe naar je publiek. Toon de prenten goed."]
    ],
    invalshoek: { intro: "Kies in lesuur 1 je doelgroep.", keuzes: [
      ["Kleuters (3 tot 6 jaar)", "Heel weinig tekst, veel herhaling en grote, duidelijke prenten."],
      ["Eerste graad lagere school (6 tot 8 jaar)", "Korte zinnen die kinderen zelf kunnen lezen."],
      ["Tweede en derde graad (8 tot 12 jaar)", "Een langer verhaal met meer spanning."]] },
    nogTijd: "Neem in StoryJumper je eigen stem op bij elke bladzijde. Zo wordt je boek een luisterboek.",
    test: [
      ["Hoeveel zinnen zet je best maximaal op één bladzijde?", ["Drie", "Tien", "Een hele alinea"], 0, "Weinig tekst, veel beeld."],
      ["Wat komt er na het probleem op de verhaalberg?", ["De spanning stijgt tot het hoogtepunt", "Het slot", "Het begin"], 0, "Begin, probleem, spanning, oplossing, slot."],
      ["Wat is een klanknabootsing?", ["Boem!", "Snel", "Mooi"], 0, "Een woord dat een geluid nabootst."],
      ["Waarvoor dient een storyboard?", ["Het is een plan van je boek per bladzijde", "Het is de cover", "Het is de laatste bladzijde"], 0, "Je plant tekst en beeld vooraf."]
    ],
    controle: [
      ["Hoe heet het hoogste punt van de verhaalberg?", "tekst", ["hoogtepunt", "het hoogtepunt"], "Daar is de spanning het grootst."],
      ["Hoe heet het plan van je boek met een schetsje per bladzijde?", "tekst", ["storyboard", "een storyboard", "het storyboard"], "Kijk op de leerkaart."],
      ["Uit hoeveel bladzijden bestaat je boek minstens?", "getal", [12, 0], "Kijk bij het eindproduct."]
    ],
    criteria: ["Logboek elk lesuur ingevuld", "Verhaal volgt de verhaalberg", "Taal past bij de doelgroep: korte zinnen, herhaling", "Storyboard volledig", "Boek in StoryJumper: cover, minstens 12 bladzijden, tekst en beeld kloppen", "Correcte spelling", "Expressief voorgelezen"],

    lessen: CSF.lessenN({
      t1: "Prentenboeken ontdekken",
      weet: "Noteer welk prentenboek je als kind graag hoorde. Waarom?",
      opdracht: "Lees de opdracht. Kies je doelgroep.",
      ideeen: "Brainstorm minstens 5 ideeën voor een verhaal.",
      start: "Werkblad 1: bekijk twee prentenboeken (in de bib, thuis of online). Wat maakt ze goed? Kies je idee.",
      midden: [
        { titel: "Mijn verhaal", werk: "Werkblad 2: werk je verhaal uit op de verhaalberg. Bedenk je hoofdpersonage." },
        { titel: "Het storyboard", werk: "Werkblad 3: maak een storyboard van minstens 12 bladzijden. Schrijf de tekst per bladzijde." },
        { titel: "Tekst verbeteren", werk: "Werkblad 4: controleer je tekst met de checklist. Laat een medeleerling hem nalezen." },
        { titel: "Starten in StoryJumper", werk: "Werkblad 5: meld je aan in StoryJumper. Maak een nieuw blanco boek in de map ‘CSF – Nederlands’. Maak de cover en de eerste bladzijden." },
        { titel: "Illustreren", werk: "Werk de bladzijden uit. Gebruik eigen tekeningen, foto’s van je schetsen of de figuren van StoryJumper." },
        { titel: "Afwerken en voorleesproef", werk: "Werk je boek af. Controleer spelling en opmaak. Oefen het voorlezen." }
      ],
      laatste: { titel: "Voorlezen", werk: "Werkblad 6: lees je boek voor aan een medeleerling, een broer of zus, of je doelgroep. Deel je boek met je coach.", presenteer: "Lees je prentenboek voor. Toon de prenten goed." }
    }),

    werkbundel: [
      { les: 1, html: `
        ${h.kader("De opdracht", "Maak een eigen <b>prentenboek</b> voor kleuters of kinderen van de lagere school. Bedenk een verhaal. Maak een storyboard. Maak je boek in <b>StoryJumper</b>. Lees het voor of laat het voorlezen.")}
        ${h.leerkaart("Leerkaart · Wat maakt een goed prentenboek?", "<p>Weinig tekst en veel beeld. Het beeld vertelt mee. Eén duidelijk hoofdpersonage. Herhaling maakt het spannend en makkelijk om mee te vertellen. Het einde is fijn of grappig.</p>")}
        <h3>Wat weet ik al? Mijn lievelingsprentenboek van vroeger</h3>${h.lijnen(2)}
        <h2>Werkblad 1 · Prentenboeken ontdekken</h2>
        <table><tr><th style="width:30%"></th><th>Boek 1</th><th>Boek 2</th></tr>
        ${["Titel", "Doelgroep", "Hoofdpersonage", "Hoeveel tekst per bladzijde?", "Wat vertelt het beeld?", "Wat is er goed aan?"].map(function (x) { return "<tr><td><b>" + x + '</b></td><td style="height:32px"></td><td></td></tr>'; }).join("")}</table>` },
      { les: 1, html: `
        <h3>Brainstorm: ideeën voor mijn verhaal</h3>
        <table><tr><th style="width:7%">Nr.</th><th>Idee</th><th style="width:30%">Hoofdpersonage</th></tr>${[1, 2, 3, 4, 5].map(function (n) { return '<tr><td style="text-align:center">' + n + '</td><td style="height:34px"></td><td></td></tr>'; }).join("")}</table>
        ${fiche([["Dit idee is mijn keuze", 44], ["Mijn doelgroep", 30, "kleuters / 6 tot 8 jaar / 8 tot 12 jaar"], ["Waarom past dit verhaal bij hen?", 60]])}
        <h3>Wat lukte vandaag? Wat nog niet?</h3>${h.lijnen(2)}` },
      { les: 2, html: `
        <h2>Werkblad 2 · Mijn verhaal op de verhaalberg</h2>
        ${verhaalberg()}
        ${fiche([["Titel", 30], ["1. Begin: wie, waar?", 54], ["2. Probleem", 54], ["3. Spanning: wat gebeurt er?", 70], ["4. Oplossing", 54], ["5. Slot", 44]])}
        <h3>Mijn hoofdpersonage</h3>
        <table><tr><td style="width:40%;height:150px;vertical-align:top"><b>Schets</b></td><td style="vertical-align:top"><b>Naam, uiterlijk, karakter, wat wil het?</b></td></tr></table>` },
      { les: 3, html: `
        <h2>Werkblad 3 · Mijn storyboard (1)</h2>
        <p>Teken per bladzijde een klein schetsje. Noteer de tekst eronder.</p>
        <table>${[0, 1, 2].map(function (r) { return "<tr>" + [1, 2, 3].map(function (c) { return '<td style="width:33%;vertical-align:top;height:130px"><b>' + (r * 3 + c) + '</b></td>'; }).join("") + "</tr><tr>" + [1, 2, 3].map(function () { return '<td style="height:62px"></td>'; }).join("") + "</tr>"; }).join("")}</table>` },
      { les: 3, html: `
        <h2>Werkblad 3 · Mijn storyboard (2)</h2>
        <table>${[0, 1, 2].map(function (r) { return "<tr>" + [1, 2, 3].map(function (c) { return '<td style="width:33%;vertical-align:top;height:130px"><b>' + (9 + r * 3 + c) + '</b></td>'; }).join("") + "</tr><tr>" + [1, 2, 3].map(function () { return '<td style="height:62px"></td>'; }).join("") + "</tr>"; }).join("")}</table>
        <p class="klein">Bladzijde 1 is de cover: titel, je naam als schrijver en een prent.</p>` },
      { les: 4, html: `
        <h2>Werkblad 4 · Mijn tekst verbeteren</h2>
        ${h.leerkaart("Leerkaart · Schrijven voor jonge kinderen", "<p>Schrijf korte zinnen. Gebruik woorden die kinderen kennen. Herhaal een zin of een rijmpje. Gebruik klanknabootsingen: <i>boem, plons, miauw</i>. Laat het personage praten. Zet maximaal drie zinnen op een bladzijde.</p>")}
        ${vink(["Mijn zinnen zijn kort.", "Kinderen van mijn doelgroep kennen alle woorden.", "Er is een herhaling of een rijmpje.", "Er staat minstens één klanknabootsing in.", "Op elke bladzijde staan maximaal drie zinnen.", "Ik controleerde de spelling: dt, ei/ij, au/ou, hoofdletters.", "Een medeleerling las mijn tekst na."])}
        <h3>Feedback van mijn medeleerling</h3>
        ${fiche([["Dit is sterk", 60], ["Dit kan beter", 60]])}
        <h3>Mijn herhalende zin of rijmpje</h3>${h.lijnen(2)}` },
      { les: 5, html: `
        <h2>Werkblad 5 · Aan de slag in StoryJumper</h2>
        ${vink(["Surf naar StoryJumper (link bij het project).", "Klik op <b>Sign in with Google</b>. Meld je aan met je schoolaccount.", "Klik op de map <b>‘CSF - Nederlands’</b>.", "Klik op <b>‘+ Create book’</b>.", "Klik op <b>‘+ Individual book’</b>.", "Kies een <b>blanco</b> ontwerp bij ‘Pick type of book’.", "Geef je boek een titel. Zet je naam bij de schrijver.", "Maak de cover en de eerste bladzijden volgens je storyboard."])}
        <h3>Illustraties: zo maak ik mijn prenten</h3>
        <p class="klein">&#9744; eigen tekeningen (fotografeer of scan ze en voeg ze toe) &nbsp; &#9744; figuren en achtergronden van StoryJumper &nbsp; &#9744; een combinatie</p>
        <h3>Mijn planning</h3>
        <table><tr><th>Lesuur</th><th>Bladzijden</th><th style="width:12%">Klaar</th></tr>${["5", "6", "7"].map(function (x) { return "<tr><td>" + x + '</td><td style="height:30px"></td><td style="text-align:center">&#9744;</td></tr>'; }).join("")}</table>
        <h3>Problemen in StoryJumper en mijn oplossing</h3>${h.lijnen(3)}` },
      { les: 7, html: `
        <h2>Afwerken en voorleesproef</h2>
        ${vink(["De cover heeft een titel, mijn naam en een prent.", "Mijn boek telt minstens 12 bladzijden.", "Tekst en prent horen bij elkaar op elke bladzijde.", "De tekst is goed leesbaar: grote letters, genoeg contrast.", "Ik controleerde de spelling opnieuw.", "Ik deelde mijn boek met mijn coach."])}
        ${h.leerkaart("Leerkaart · Voorlezen", "<p>Lees langzaam. Geef elk personage een eigen stem. Pauzeer voor je de bladzijde omdraait. Kijk af en toe naar je publiek. Toon de prenten goed.</p>")}
        <h3>Voorleesproef: feedback van een medeleerling</h3>
        <table style="text-align:center"><tr><th style="text-align:left">Hoe vond je …</th><th>☆</th><th>☆☆</th><th>☆☆☆</th><th>☆☆☆☆</th></tr>
        ${["het tempo?", "de stemmen van de personages?", "het contact met het publiek?"].map(function (x) { return '<tr><td style="text-align:left">' + x + "</td><td></td><td></td><td></td><td></td></tr>"; }).join("")}</table>` },
      { les: 8, html: `
        <h2>Werkblad 6 · Voorlezen en terugblikken</h2>
        ${fiche([["Voor wie las ik voor?", 34], ["Hoe reageerde mijn publiek?", 60], ["Welke bladzijde vind ik het mooist? Waarom?", 60], ["Wat was het moeilijkst?", 60], ["Wat zou ik in een volgend boek anders doen?", 60]])}
        <p><b>Presenteren:</b> lees je prentenboek voor. Toon de prenten goed.</p>` }
    ]
  });
})();
