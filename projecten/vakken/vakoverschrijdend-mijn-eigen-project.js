/* vakoverschrijdend · Mijn eigen project
   Bron: de Bookwidget ‘MIJN EIGEN PROJECT UITWERKEN’ van de werkgroep, uitgewerkt tot 8 lesuren
   met een projectvoorstel, een planning en zelf gekozen criteria. Enkel voor het 2e jaar. */
(function () {
  var h = CSF.h;
  function vink(lijst) { return "<table>" + lijst.map(function (x) { return '<tr><td style="width:7%;text-align:center;font-size:13pt">&#9744;</td><td>' + x + "</td></tr>"; }).join("") + "</table>"; }
  function fiche(lijst) { return '<table class="fiche">' + lijst.map(function (v) { return '<tr><td class="lbl">' + v[0] + '</td><td style="height:' + (v[1] || 30) + 'px">' + (v[2] || "") + "</td></tr>"; }).join("") + "</table>"; }

  CSF.project({
    id: "vakoverschrijdend-mijn-eigen-project",
    soort: "vak",
    vak: "vakoverschrijdend",
    jaar: "2e jaar",
    tijd: "8 lesuren",
    sterren: 4,
    naam: "Mijn eigen project",
    kort: "Bedenk, plan en maak je eigen project van A tot Z.",
    voorWie: "Voor leerlingen van het 2e jaar met een eigen idee en de durf om het zelf te plannen.",
    omschrijving: "Heb jij een idee dat in geen enkel project past? Wil je iets bouwen, schrijven, onderzoeken, programmeren of ontwerpen? 💡 Dan is dit jouw kans! Kies zelf je onderwerp en je doelgroep. Maak een plan. Laat het goedkeuren door je coach. Werk het daarna helemaal zelf uit. Jij bent de projectleider!",
    doel: "Je bedenkt een eigen project voor een doelgroep naar keuze. Je schrijft een projectvoorstel met doel, eindproduct, materiaal en planning. Je kiest zelf je evaluatiecriteria. Je werkt je project zelfstandig uit en stelt het voor.",
    bereikt: ["Een haalbaar projectidee kiezen", "Een duidelijk doel en eindproduct formuleren", "Een planning maken en bijsturen", "Zelfstandig informatie zoeken en bronnen vermelden", "Een eindproduct afwerken en voorstellen"],
    toepassen: ["Plannen en organiseren: jij bent de projectleider", "Taakinitiatie: zelf starten zonder dat iemand het vraagt", "Flexibel denken: bijsturen als iets niet lukt", "Zelfreflectie: je eigen werk eerlijk beoordelen"],
    materiaal: ["Werkbundel", "Een Chromebook met internet", "Het materiaal dat je zelf kiest in je projectvoorstel (bij voorkeur kosteloos)"],
    oplossing: "Je project heeft geen vaste oplossing. Je coach keurt je voorstel goed en beoordeelt je eindproduct met de criteria die je samen afspreekt.",
    product: "Een zelf gekozen eindproduct en een korte voorstelling ervan",
    links: [],
    leerkaarten: [
      ["Een goed projectidee", "Een goed idee boeit jou. Het past in 8 lesuren. Je kan het zelf maken, zonder aankopen. Het heeft een duidelijk eindproduct. Je leert er iets nieuws mee."],
      ["Een SMART doel", "Maak je doel <b>S</b>pecifiek: wat maak je precies? <b>M</b>eetbaar: wanneer is het klaar? <b>A</b>cceptabel: wil je coach het goedkeuren? <b>R</b>ealistisch: lukt het in 8 lesuren? <b>T</b>ijdgebonden: wanneer is elk deel af?"],
      ["Een planning maken", "Werk achteruit: begin bij het eindproduct. Wat moet er klaar zijn in lesuur 7? En in lesuur 5? Verdeel je project in kleine taken. Hou een reserve-uur voor als iets tegenvalt."],
      ["Zelf criteria kiezen", "Een goed criterium zegt wat je coach kan nakijken. Niet ‘mooi’, maar ‘verzorgd: geen spelfouten, alles netjes uitgeknipt’. Kies minstens vier criteria: over de inhoud, de afwerking, de planning en de voorstelling."],
      ["Vastgelopen?", "Kijk terug naar je doel. Wat is het kleinste stapje dat je nu kan zetten? Zoek een voorbeeld of een filmpje. Vraag raad aan je coach via ‘Vraag aan je coach’ in je logboek. Pas je planning aan: dat is geen falen, dat is projectwerk."]
    ],
    invalshoek: { intro: "Kies in lesuur 1 de soort project.", keuzes: [
      ["Maken", "Iets bouwen, knutselen, koken of ontwerpen."],
      ["Onderzoeken", "Een vraag uitzoeken en je resultaten tonen."],
      ["Digitaal", "Een website, een filmpje, een spel of een programma maken."],
      ["Iets voor anderen", "Een activiteit, een les of een product voor een doelgroep."]] },
    nogTijd: "Maak een korte handleiding of een filmpje waarmee een ander jouw project kan namaken.",
    test: [
      ["Welk doel is het best?", ["Ik maak een stripverhaal van 6 bladzijden voor kinderen van het 1e leerjaar.", "Ik maak iets leuks.", "Ik doe iets met tekenen."], 0, "Een goed doel is specifiek en meetbaar."],
      ["Wat doe je als je planning niet lukt?", ["Je planning bijsturen en je coach verwittigen", "Stoppen", "Niets zeggen"], 0, "Bijsturen hoort bij projectwerk."],
      ["Welk criterium kan je coach het best nakijken?", ["Mijn tekst bevat geen spelfouten.", "Mijn project is mooi.", "Ik deed mijn best."], 0, "Een goed criterium is controleerbaar."]
    ],
    controle: [
      ["Waar staat de S van SMART voor?", "tekst", ["specifiek"], "Wat maak je precies?"],
      ["Waar staat de R van SMART voor?", "tekst", ["realistisch"], "Lukt het in 8 lesuren?"],
      ["Hoeveel criteria kies je minstens zelf?", "getal", [4, 0], "Inhoud, afwerking, planning en voorstelling."]
    ],
    criteria: ["Logboek elk lesuur ingevuld", "Projectvoorstel volledig en goedgekeurd door de coach", "Planning gemaakt en bijgestuurd", "Eindproduct volgens de zelf gekozen criteria", "Zelfstandig gewerkt", "Duidelijke voorstelling"],

    lessen: CSF.lessenN({
      t1: "Ideeën en keuze",
      weet: "Noteer wat je graag doet en waar je goed in bent.",
      opdracht: "Lees de opdracht. Kies je doelgroep.",
      ideeen: "Brainstorm minstens 5 ideeën voor een eigen project.",
      start: "Werkblad 1: test je ideeën met de checklist. Kies je beste idee.",
      midden: [
        { titel: "Projectvoorstel", werk: "Werkblad 2: schrijf je projectvoorstel met een SMART doel, je eindproduct, je materiaal en je criteria. Laat het goedkeuren door je coach." },
        { titel: "Planning en start", werk: "Werkblad 3: maak je planning per lesuur. Start met de eerste taak." },
        { titel: "Uitwerken (1)", werk: "Werk je project uit volgens je planning. Noteer in je logboek wat lukte." },
        { titel: "Uitwerken (2)", werk: "Werk verder. Vergelijk met je planning. Stuur bij als het nodig is." },
        { titel: "Uitwerken (3) en tussentijdse feedback", werk: "Werkblad 4: laat een medeleerling of je coach je werk bekijken. Verwerk de feedback." },
        { titel: "Afwerken", werk: "Werk je eindproduct af. Controleer het met je eigen criteria. Bereid je voorstelling voor." }
      ],
      laatste: { titel: "Voorstellen en terugblikken", werk: "Werkblad 5: stel je project voor. Beoordeel jezelf met je criteria.", presenteer: "Stel je eigen project in 3 minuten voor aan je coach, je klas of je doelgroep." }
    }),

    werkbundel: [
      { les: 1, html: `
        ${h.kader("De opdracht", "Werk een <b>eigen project</b> uit. Kies zelf je onderwerp en je doelgroep. Schrijf een projectvoorstel en laat het goedkeuren door je coach. Maak een planning. Werk je project zelfstandig uit. Stel het voor.")}
        ${h.leerkaart("Leerkaart · Een goed projectidee", "<p>Een goed idee boeit jou. Het past in 8 lesuren. Je kan het zelf maken, zonder aankopen. Het heeft een duidelijk eindproduct. Je leert er iets nieuws mee.</p>")}
        <h3>Wat weet ik al over mezelf? Wat doe ik graag? Waar ben ik goed in?</h3>${h.lijnen(3)}
        <h2>Werkblad 1 · Mijn brainstorm</h2>
        <table><tr><th style="width:6%">Nr.</th><th>Idee</th>${["Boeit me", "Past in 8 u.", "Zonder aankopen", "Duidelijk eindproduct"].map(function (x) { return '<th style="width:11%" class="klein">' + x + "</th>"; }).join("")}</tr>
        ${[1, 2, 3, 4, 5].map(function (n) { return '<tr><td style="text-align:center">' + n + '</td><td style="height:36px"></td>' + "<td style=\"text-align:center\">&#9744;</td>".repeat(4) + "</tr>"; }).join("")}</table>
        ${fiche([["Dit idee is mijn keuze", 40], ["Mijn doelgroep", 30, "kinderen lagere school / klasgenoten / leeftijdsgenoten / …"]])}` },
      { les: 2, html: `
        <h2>Werkblad 2 · Mijn projectvoorstel</h2>
        ${h.leerkaart("Leerkaart · Een SMART doel", "<p><b>S</b>pecifiek: wat maak je precies? <b>M</b>eetbaar: wanneer is het klaar? <b>A</b>cceptabel: wil je coach het goedkeuren? <b>R</b>ealistisch: lukt het in 8 lesuren? <b>T</b>ijdgebonden: wanneer is elk deel af?</p>")}
        ${fiche([["Titel van mijn project", 30], ["Mijn doel (SMART)", 60], ["Mijn eindproduct", 44], ["Inhoud: wat moet ik leren of uitzoeken?", 54], ["Benodigdheden (materiaal)", 44], ["Programma’s of apps", 34], ["Bronnen of hulp (websites, personen)", 44]])}
        ${h.leerkaart("Leerkaart · Zelf criteria kiezen", "<p>Een goed criterium kan je coach nakijken. Niet ‘mooi’, maar ‘verzorgd: geen spelfouten, alles netjes uitgeknipt’. Kies er minstens vier.</p>")}
        <table><tr><th style="width:6%">Nr.</th><th>Mijn criteria</th></tr>${["inhoud", "afwerking", "planning", "voorstelling"].map(function (x, i) { return '<tr><td style="text-align:center">' + (i + 1) + '</td><td style="height:30px"><span class="klein">' + x + ":</span></td></tr>"; }).join("")}</table>
        <p><b>Goedgekeurd door mijn coach:</b> ______________________ &nbsp; Datum: ____ / ____</p>` },
      { les: 3, html: `
        <h2>Werkblad 3 · Mijn planning</h2>
        ${h.leerkaart("Leerkaart · Een planning maken", "<p>Werk achteruit: begin bij het eindproduct. Wat moet er klaar zijn in lesuur 7? En in lesuur 5? Verdeel je project in kleine taken. Hou een reserve-uur voor als iets tegenvalt.</p>")}
        <table><tr><th style="width:10%">Lesuur</th><th>Taken</th><th style="width:12%">Klaar</th><th style="width:28%">Bijsturing</th></tr>
        ${["3", "4", "5", "6", "7", "8"].map(function (x) { return "<tr><td style=\"text-align:center\">" + x + '</td><td style="height:52px"></td><td style="text-align:center">&#9744;</td><td></td></tr>'; }).join("")}</table>` },
      { les: 6, html: `
        <h2>Werkblad 4 · Tussentijdse feedback</h2>
        ${fiche([["Wie gaf feedback?", 28], ["Dit is al sterk", 60], ["Dit kan beter", 60], ["Dit pas ik aan", 60]])}
        ${h.leerkaart("Leerkaart · Vastgelopen?", "<p>Kijk terug naar je doel. Wat is het kleinste stapje dat je nu kan zetten? Zoek een voorbeeld of een filmpje. Vraag raad via ‘Vraag aan je coach’ in je logboek. Pas je planning aan: dat is geen falen, dat is projectwerk.</p>")}
        <h3>Problemen en oplossingen</h3>
        <table><tr><th>Probleem</th><th style="width:50%">Oplossing</th></tr>${[1, 2, 3].map(function () { return '<tr><td style="height:40px"></td><td></td></tr>'; }).join("")}</table>` },
      { les: 8, html: `
        <h2>Werkblad 5 · Voorstellen en terugblikken</h2>
        <h3>Zelfbeoordeling met mijn criteria</h3>
        <table style="text-align:center"><tr><th style="text-align:left">Criterium</th><th>Nog niet</th><th>Op weg</th><th>Gelukt</th><th>Uitblinker</th></tr>${[1, 2, 3, 4].map(function (n) { return '<tr><td style="text-align:left;height:30px">' + n + ".</td><td></td><td></td><td></td><td></td></tr>"; }).join("")}</table>
        ${fiche([["Haalde ik mijn doel? Waarom (niet)?", 60], ["Wat leerde ik over plannen?", 54], ["Waar ben ik het meest trots op?", 54], ["Wat doe ik bij een volgend project anders?", 54]])}
        <p><b>Presenteren (3 min):</b> stel je project voor aan je coach, je klas of je doelgroep.</p>` }
    ]
  });
})();
