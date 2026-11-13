/* Oefenproject Nederlands · Mysterie in 100 woorden (2 lesuren)
   Oefent: kladversie, feedback vragen, herschrijven, afwerken. */
(function () {
  var h = CSF.h;
  function fiche(l) { return '<table class="fiche">' + l.map(function (v) { return '<tr><td class="lbl">' + v[0] + '</td><td style="height:' + (v[1] || 28) + 'px">' + (v[2] || "") + "</td></tr>"; }).join("") + "</table>"; }
  function woordrooster() { var r = ""; for (var i = 0; i < 10; i++) { r += "<tr>"; for (var j = 0; j < 10; j++) r += '<td style="height:30px;width:10%;font-size:6.5pt;vertical-align:top;color:#999">' + (i * 10 + j + 1) + "</td>"; r += "</tr>"; } return '<table style="table-layout:fixed">' + r + "</table>"; }

  CSF.project({
    id: "oefen-mysterie",
    soort: "oefen",
    domein: "Nederlands",
    jaar: "1e jaar",
    tijd: "2 lesuren",
    sterren: 3,
    naam: "Mysterie in 100 woorden",
    kort: "Schrijf een spannend verhaal van precies 100 woorden, met een einde dat niemand ziet aankomen.",
    voorWie: "Voor wie graag schrijft en het een uitdaging vindt om met weinig woorden veel te zeggen.",
    omschrijving: "Honderd woorden. Niet één meer, niet één minder. 🔍 Daarin moet een heel verhaal passen: een begin dat meteen spannend is, een mysterie en een einde dat je lezer doet schrikken of glimlachen. Dat lukt alleen als je kiest, schrapt en herschrijft. Precies wat echte schrijvers doen. Op het einde lees je je verhaal voor. Krijgt je klas kippenvel?",
    doel: "Je schrijft een kladversie, vraagt feedback, herschrijft en werkt je tekst af tot precies 100 woorden.",
    bereikt: ["Een verhaal opbouwen met begin, mysterie en verrassend einde", "Overbodige woorden schrappen", "Sterke werkwoorden kiezen", "Feedback geven en gebruiken"],
    toepassen: ["Durven schrappen in je eigen tekst", "Feedback vragen aan een klasgenoot", "Voorlezen voor een groep"],
    materiaal: ["Werkbundel", "Een Chromebook mag (om woorden te tellen)"],
    oplossing: "Controleer de oefeningen op deze site bij ‘Controleer je oplossing’. Je verhaal zelf heeft geen vaste oplossing.",
    product: "Een mysterieverhaal van precies 100 woorden met een titel, voorgelezen in de klas",
    leerkaarten: [
      ["Een verhaal in 100 woorden", "In 100 woorden is er geen tijd voor een lange inleiding. Begin <b>midden in de actie</b>. Kies <b>één</b> hoofdpersonage, <b>één</b> plek en <b>één</b> moment. Bouw een mysterie op en eindig met een <b>verrassing</b>: een zin die alles anders doet lijken. De titel telt niet mee.",
        CSF.lk.tabel(['Deel', 'Ongeveer', 'Wat?'], [['Begin', '20 woorden', 'Wie, waar? Meteen iets vreemds.'], ['Midden', '60 woorden', 'Het mysterie wordt groter. Spanning!'], ['Slot', '20 woorden', 'De verrassing. Liefst in de laatste zin.']]) +
        CSF.lk.punten(['Een woord is alles tussen twee spaties: ‘de’ is één woord, ‘schrijfopdracht’ ook.', 'Getallen in cijfers tellen als één woord.']) +
        CSF.lk.tip('Schrijf je slot eerst. Dan weet je naar welke verrassing je toewerkt.')],
      ["Schrappen en herschrijven", "Je eerste versie is bijna altijd te lang. Dat is goed: nu ga je <b>schrappen</b>. Haal woorden weg die niets toevoegen. Vervang een zwak werkwoord met een bijwoord door één <b>sterk werkwoord</b>. Lees je tekst hardop: waar struikel je?",
        CSF.lk.tabel(['Te lang ✗', 'Krachtig ✓'], [['Hij liep heel erg snel weg.', 'Hij vluchtte.'], ['Ze keek heel goed en lang naar het raam.', 'Ze staarde naar het raam.'], ['Op dat moment, plotseling, ging de deur open.', 'De deur zwaaide open.']]) +
        CSF.lk.stappen(['Tel je woorden.', 'Schrap opvulwoorden: heel, echt, plotseling, eigenlijk.', 'Vervang zwakke werkwoorden door sterke.', 'Tel opnieuw. Nog te veel? Schrap een zin die het verhaal niet verder helpt.', 'Te weinig? Voeg één detail toe dat de spanning vergroot.']) +
        CSF.lk.let('Vraag een klasgenoot om je verhaal te lezen voor je het afwerkt. Snapt hij de verrassing?')]
    ],
    invalshoek: { intro: "Kies in lesuur 1 je soort mysterie.", keuzes: [["Griezel", "Iets of iemand is niet wat het lijkt."], ["Detective", "Wie heeft het gedaan? Het antwoord staat in de laatste zin."], ["Sciencefiction", "De verrassing: het speelt zich ergens anders af dan je dacht."]] },
    nogTijd: "Schrijf hetzelfde verhaal nog eens in precies 50 woorden. Wat moest er nu nog weg?",
    test: [
      ["Hoe begin je een verhaal van 100 woorden het best?", ["Midden in de actie", "Met een lange beschrijving van het weer", "Met de geboorte van je hoofdpersonage"], 0, "Er is geen plaats voor een lange inleiding."],
      ["Welke zin is het krachtigst?", ["Ze staarde naar het raam.", "Ze keek heel goed en lang naar het raam.", "Ze keek eigenlijk naar het raam."], 0, "Eén sterk werkwoord zegt meer dan vier zwakke woorden."],
      ["Telt de titel mee bij de 100 woorden?", ["Nee", "Ja", "Alleen als hij lang is"], 0, "De titel telt niet mee."]
    ],
    controle: [
      ["Werkblad 2, oef. 1: tel de woorden van deze zin: ‘Om middernacht ging de deur van de zolder vanzelf open.’", "getal", [10, 0], "Tel alles tussen twee spaties."],
      ["Werkblad 2, oef. 2: telt de titel mee bij je 100 woorden? (ja of nee)", "tekst", ["nee"], "Kijk op leerkaart 1."],
      ["Werkblad 2, oef. 3: ‘Hij liep heel erg snel weg.’ Hoeveel woorden schrap je als je alleen ‘heel erg’ weglaat?", "getal", [2, 0], "‘heel’ en ‘erg’ zijn twee woorden."]
    ],
    criteria: ["Logboek elk lesuur ingevuld", "Precies 100 woorden (zonder titel)", "Begin in de actie, een mysterie en een verrassend slot", "Feedback van een klasgenoot gebruikt", "Verzorgd en vlot voorgelezen"],
    lessen: CSF.lessen2({
      t1: "Idee en kladversie",
      opdracht: "Lees de projectfiche. Wat moet je verhaal zeker hebben?",
      ideeen: "Kies je soort mysterie. Schrijf in werkblad 1 drie ideeën voor een verrassend slot. Kies het beste.",
      start: "Schrijf je kladversie. Te lang mag: tel daarna je woorden.",
      t2: "Schrappen, feedback en voorlezen",
      werk: "Laat een klasgenoot je klad lezen en noteer zijn feedback. Schrap en herschrijf tot precies 100 woorden. Schrijf je eindversie in het woordrooster.",
      presenteer: "Lees je verhaal voor in de klas of in een groepje. Laat je luisteraars raden hoe het afloopt voor je de laatste zin leest."
    }),
    werkbundel: [
      { les: 1, html: `
        ${h.kader("De opdracht", "Schrijf een mysterieverhaal van <b>precies 100 woorden</b> (zonder titel), met een verrassend einde. Schrijf een klad, vraag feedback, schrap en herschrijf.")}
        <h2>Werkblad 1 · Mijn idee</h2>
        ${fiche([["Soort mysterie", 26, "griezel / detective / sciencefiction"], ["Hoofdpersonage", 26], ["Plek en moment", 26], ["Drie ideeën voor een verrassend slot", 66, "1.<br>2.<br>3."], ["Mijn beste slot", 36]])}
        <h3>Mijn kladversie</h3>${h.lijnen(10)}
        <p><b>Aantal woorden in mijn klad:</b> ________</p>` },
      { les: 2, html: `
        <h2>Werkblad 2 · Schrappen en tellen</h2>
        ${fiche([["1. Tel de woorden: ‘Om middernacht ging de deur van de zolder vanzelf open.’", 28], ["2. Telt de titel mee bij je 100 woorden? (ja of nee)", 26], ["3. ‘Hij liep heel erg snel weg.’ Hoeveel woorden schrap je als je ‘heel erg’ weglaat?", 26]])}
        ${fiche([["Feedback van", 24], ["Wat vond hij sterk?", 34], ["Wat snapte hij niet?", 34]])}
        <h3>Mijn eindversie · titel: ______________________________</h3>
        <p class="klein">Eén woord per vakje. Zo zie je meteen of je op 100 uitkomt.</p>
        ${woordrooster()}` }
    ]
  });
})();
