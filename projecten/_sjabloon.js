/* =====================================================================
   SJABLOON VOOR EEN NIEUW CSF-PROJECT
   1. Kopieer dit bestand naar projecten/vakken/<korte-naam>.js
      (bijvoorbeeld projecten/vakken/wiskunde-fractals.js).
   2. Vul alles tussen de aanhalingstekens in. Laat komma's en haakjes staan.
   3. Voeg in projecten/lijst.js een regel toe:
        "projecten/vakken/wiskunde-fractals.js",
   Klaar: het project verschijnt in het Projectenoverzicht onder zijn vak.

   Schrijfregels: gebruik enkelvoudige zinnen (één persoonsvorm per zin).
   Begin elke opdracht met een gebiedende wijs: "Lees …", "Noteer …", "Kies …".
   Spelling: minitentoonstelling, escaperoom, minitaal (zonder koppelteken).

   Opmaak in teksten: <b>vet</b>, <br> nieuwe regel, <sub>klein</sub>.
   Hulpjes in de werkbundel:
     ${h.lijnen(3)}                    3 schrijflijnen
     ${h.vak("Label", 200)}            leeg kader van 200 pixels hoog
     ${h.tabel(["Kop 1","Kop 2"], 4)}  tabel met 4 lege rijen
     ${h.kader("Titel", "tekst")}      kader met titel
     ${h.leerkaart("Titel", "tekst")}  turquoise leerkaart
     ${h.beeld("projecten/afbeeldingen/naam.png", "uitleg", 300)}   afbeelding (300 px hoog)

   Nog geen werkbundel? Zet  status: "fiche"  en laat lessen/werkbundel weg:
   dan toont de site enkel de projectfiche met ‘werkbundel volgt’.
   ===================================================================== */
(function () {
  var h = CSF.h;
  CSF.project({
    id: "kies-een-unieke-korte-naam",        // zonder spaties, bv. "wiskunde-fractals"
    soort: "vak",                            // "vak" = Projectenoverzicht · "oefen" = oefenproject
    vak: "Wiskunde",                         // het vak waaronder het project verschijnt
    jaar: "1e en 2e jaar",                   // "1e jaar", "2e jaar" of "1e en 2e jaar"
    tijd: "3 lesuren",
    sterren: 3,                              // uitdagingsniveau van 1 tot 5
    voorWie: "Voor leerlingen met interesse in …",
    naam: "Titel van het project: korte ondertitel",
    kort: "Ontdek … Maak …",                  // korte opdrachtzinnen
    omschrijving: "Waar gaat het project over? (3 à 4 zinnen)",
    doel: "Wat leert de leerling?",
    bereikt: ["Vaardigheid 1", "Vaardigheid 2", "Vaardigheid 3"],
    toepassen: ["Executieve functie 1 (zie het reflectieblad)", "Executieve functie 2"],
    materiaal: ["Werkbundel", "Potlood, gom", "Een toestel met internet"],
    oplossing: "Op deze site, bij ‘Controleer je oplossing’.",
    product: "Wat levert de leerling af?",
    links: [["Naam van een website", "https://..."]],          // mag leeg: []

    leerkaarten: [
      ["Titel leerkaart 1", "Uitleg in 2 à 4 zinnen."],
      ["Titel leerkaart 2", "Uitleg in 2 à 4 zinnen."]
    ],

    invalshoek: { intro: "Kies in lesuur 1 …", keuzes: [
      ["Keuze 1", "Korte uitleg"], ["Keuze 2", "Korte uitleg"], ["Keuze 3", "Korte uitleg"]] },
    nogTijd: "Een kleine extra opdracht voor wie klaar is.",

    // Test jezelf: [vraag, [antwoorden], nummer van het juiste antwoord (0 = eerste), uitleg]
    test: [
      ["Vraag 1?", ["juist antwoord", "fout", "fout"], 0, "Waarom het juist is."]
    ],
    // Controleer je oplossing: [vraag, "tekst" of "getal", antwoord(en), tip]
    //   tekst: ["antwoord", "ander goed antwoord"]     getal: [waarde, toegestane marge]
    controle: [
      ["Wat is de uitkomst van …?", "getal", [42, 0.5], "Tip als het fout is."],
      ["Hoe heet …?", "tekst", ["antwoord", "variant"], "Tip als het fout is."]
    ],
    criteria: ["Logboek elk lesuur ingevuld", "Criterium 2", "Criterium 3", "Criterium 4"],

    // Lesplanning: elk lesuur volgt dezelfde TASC-opbouw. Vul enkel de teksten in.
    // Meer of minder dan 3 lesuren? Gebruik CSF.lessenN (zie projecten/vakken/natuurwetenschappen-botten.js).
    lessen: CSF.lessen3({
      t1: "Titel lesuur 1",
      weet: "Noteer je voorkennis over …",
      opdracht: "Lees de opdracht. Noteer …",
      ideeen: "Bedenk minstens … Kies er één.",
      start: "Werkblad 1: …",
      t2: "Titel lesuur 2",
      werk2: "Werkblad 2: …",
      t3: "Titel lesuur 3",
      werk3: "Werk je eindproduct af.",
      presenteer: "Stel je werk in 2 minuten voor aan een medeleerling."
    }),

    // Werkbundel: één item = één A4-blad. Met 'les: 1' komt het stappenplan van lesuur 1 automatisch bovenaan.
    werkbundel: [
      { les: 1, html: `
        ${h.kader("De opdracht", "Beschrijf hier de opdracht.")}
        <p><b>Wat weet ik al?</b></p>${h.lijnen(3)}
        <h2>Werkblad 1</h2>
        <p>…</p>` },
      { les: 2, html: `
        <h2>Werkblad 2</h2>
        ${h.tabel(["Vraag", "Antwoord"], 5, 30)}` },
      { les: 3, html: `
        <h2>Eindproduct</h2>
        ${h.vak("Mijn eindproduct", 500)}` }
    ]
  });
})();
