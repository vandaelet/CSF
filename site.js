/* =====================================================================
   ALGEMENE TEKSTEN VAN DE CSF-SITE
   Hier pas je teksten aan die voor alle projecten gelden.
   Tip: laat de aanhalingstekens, komma's en haakjes staan.
   ===================================================================== */

window.CSF = {
  projecten: [],
  project: function (p) { this.projecten.push(p); },   // niet aanpassen

  school: "Campus Lievegem",
  werkgroep: "Werkgroep CSF · 1e en 2e jaar",
  titel: "CSF-projecten",

  welkom: "Hier vind je alle CSF-projecten. Ben je nieuw in CSF? Start met een oefenproject. Daarin leer je de werking van een project. Kies daarna zelf uit alle projecten.",

  /* De knop "Wat wordt van mij verwacht?" (bovenaan elk project).
     Bron: workshop CSF praktisch. */
  verwachtingen: [
    { titel: "Voor de les", punten: [
      "Meld je bij je leerkracht bij de start van de les.",
      "Vraag toestemming om de les te verlaten.",
      "Haal de leerstof zelfstandig in tegen de volgende les.",
      "Toon je aangevulde cursus de volgende les aan je leerkracht.",
      "Zet je coach in CC bij elke mail naar je vakleerkracht."
    ]},
    { titel: "Logboek", punten: [
      "Vul na elke CSF-sessie je logboek nauwkeurig in.",
      "Deel de link naar jouw project met je coach.",
      "Lees de feedback van je coach vóór de start van je CSF-sessie."
    ]},
    { titel: "Attitude tijdens de sessie", punten: [
      "Werk in stilte.",
      "Laat anderen met rust.",
      "Probleem? Meld je aan de balie.",
      "Werk uitsluitend aan het afgesproken project.",
      "Laat je werkplaats netjes achter."
    ]}
  ],

  /* De vaste stappen van elk project (TASC). */
  tasc: [
    ["Wat weet ik van dit onderwerp?", "verzamelen"],
    ["Wat is de opdracht?", "bepalen"],
    ["Hoeveel ideeën kan ik bedenken?", "ideeën"],
    ["Wat is het beste idee?", "kiezen"],
    ["Uitwerking", "doen"],
    ["Wat vind ik van het resultaat?", "evalueren"],
    ["Presenteren!", "communiceren"],
    ["Wat heb ik geleerd?", "leren"]
  ],

  /* Kiestest bij de oefenprojecten: elk antwoord verwijst naar een project-id. */
  kiestest: [
    ["Waar word je het blijst van?", [
      ["Een mysterie oplossen met bewijs", "wetenschappen"],
      ["De bouw van een taal uitzoeken", "talen"],
      ["Tekenen en schilderen", "beeld"],
      ["Ritme en muziek maken", "muziek"],
      ["Rekenen aan een echt probleem", "stem"],
      ["Verhalen achter oude kunst ontdekken", "cultuur"]
    ]],
    ["Wat zou je het liefst in je handen hebben?", [
      ["Een liniaal en een dossier vol bewijs", "wetenschappen"],
      ["Een woordenboek van een taal die niet bestaat", "talen"],
      ["Kleurpotloden en een spiegel", "beeld"],
      ["Oortjes en een eigen beat", "muziek"],
      ["Een rekenmachine en een ruimtepak", "stem"],
      ["Een vergrootglas boven een schilderij", "cultuur"]
    ]]
  ]
};
