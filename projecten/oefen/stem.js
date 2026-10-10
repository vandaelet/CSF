/* Oefenproject STEM · Overleven op Mars */
(function () {
  var h = CSF.h;
  var raster = '<div style="display:grid;grid-template-columns:repeat(20,1fr);border:1.5px solid #000">' + '<div style="border:0.5px solid #aaa;aspect-ratio:1"></div>'.repeat(20 * 14) + "</div>";
  CSF.project({
    id: "stem",
    soort: "oefen",
    domein: "STEM",
    jaar: "1e jaar",
    tijd: "3 lesuren",
    naam: "Overleven op Mars: plan een basis voor vier astronauten",
    kort: "Reken uit hoeveel zuurstof, water, voedsel en energie vier astronauten nodig hebben en ontwerp hun basis.",
    omschrijving: "Mars is koud, heeft bijna geen zuurstof en ligt maanden reizen van de aarde. Vier astronauten moeten er 30 dagen overleven. Jij bent de missieplanner: je vergelijkt Mars met de aarde, je rekent de voorraden uit en je tekent een basis op schaal. Je eindproduct is een missieposter.",
    doel: "Je leert hoe wetenschap, wiskunde en techniek samenwerken om een echt probleem op te lossen: eerst begrijpen, dan rekenen, dan ontwerpen.",
    bereikt: ["Mars en de aarde vergelijken (zwaartekracht, lucht, temperatuur, licht)", "Voorraden berekenen per persoon, per dag en voor een hele missie", "Uitleggen waarom recyclage op Mars zo belangrijk is", "Een plattegrond op schaal tekenen"],
    toepassen: ["Stap voor stap rekenen en mijn tussenstappen noteren", "Kiezen: niet alles past in de basis", "Informatie onthouden en gebruiken in mijn ontwerp", "Mijn tijd verdelen tussen rekenen en tekenen"],
    materiaal: ["Werkbundel (met ruitjesplan)", "Liniaal, potlood, gom, kleurpotloden, rekenmachine", "Een toestel met internet voor deze site"],
    oplossing: "Op deze site, bij ‘Controleer je oplossing’. Tik je uitkomsten pas in als je berekening in je werkbundel staat.",
    product: "Een missieposter (A4): plattegrond van de basis, voorraadlijst en één probleem met jouw oplossing",
    leerkaarten: [
      ["Mars in cijfers", "Mars staat 55 tot 400 miljoen km van de aarde; de reis duurt ongeveer 7 maanden. De zwaartekracht is 38% van die op aarde. De gemiddelde temperatuur is ongeveer −60 °C. Een dag (een ‘sol’) duurt ongeveer 24 uur en 40 minuten."],
      ["Lucht en water", "De lucht op Mars bestaat voor ongeveer 95% uit koolstofdioxide en is meer dan 100 keer ijler dan op aarde. Ademen kan dus niet. Water zit er als ijs, vooral aan de polen en onder de grond."],
      ["Wat heeft een astronaut nodig?", "Per dag ongeveer 0,84 kg zuurstof, 3 liter water (drinken en eten klaarmaken) en 1,8 kg voedsel met verpakking. Het ruimtestation ISS hergebruikt bijna al zijn water."],
      ["Energie", "Op Mars valt ongeveer 43% van het zonlicht dat op aarde valt. Een zonnepaneel levert er dus minder op. Stofstormen kunnen de zon wekenlang verduisteren."]
    ],
    invalshoek: { intro: "In lesuur 1 kies je welke specialist jij bent. Op je poster los jij één probleem uit jouw vak op.", keuzes: [
      ["Ingenieur", "Energie en bouwen: hoe hou je de basis warm en draaiend tijdens een stofstorm?"], ["Bioloog", "Voedsel: wat kweek je in de serre en waarom?"], ["Arts", "Gezondheid: wat doen lage zwaartekracht, kou en straling met je lichaam?"]] },
    nogTijd: "De missie wordt verlengd tot 500 dagen. Bereken de zuurstof en het voedsel opnieuw. Waarom is een serre dan geen luxe meer?",
    test: [
      ["Hoe sterk is de zwaartekracht op Mars, vergeleken met de aarde?", ["38%", "100%", "10%"], 0, "Een rugzak van 20 kg voelt op Mars als 7,6 kg."],
      ["Waarom kan je op Mars niet ademen?", ["De lucht is vooral koolstofdioxide en heel ijl", "Er is helemaal geen lucht", "Het is te warm"], 0, "Ongeveer 95% koolstofdioxide, en meer dan 100 keer ijler dan op aarde."],
      ["Hoe lang duurt een dag op Mars?", ["Ongeveer 24 uur en 40 minuten", "Ongeveer 12 uur", "Ongeveer 7 dagen"], 0, "Een Marsdag heet een sol."]
    ],
    controle: [
      ["Een rugzak weegt op aarde 20 kg. Hoeveel kg voelt dat op Mars?", "getal", [7.6, 0.05], "Neem 38% van 20: 20 × 0,38."],
      ["Zuurstof voor 4 astronauten, 30 dagen (kg)", "getal", [100.8, 0.2], "0,84 kg × 4 personen × 30 dagen."],
      ["Water zonder recyclage, 4 astronauten, 30 dagen (liter)", "getal", [360, 1], "3 liter × 4 × 30."],
      ["Water met 90% recyclage: hoeveel liter moet je meenemen?", "getal", [36, 1], "Je verliest maar 10% van 360 liter."],
      ["Aantal zonnepanelen (afgerond naar boven)", "getal", [94, 0.1], "40 kWh ÷ 0,43 kWh per paneel, en rond naar boven af."]
    ],
    criteria: ["Logboek elk lesuur ingevuld", "Mars en aarde juist vergeleken", "Voorraden juist berekend, met tussenstappen", "Plattegrond op schaal met alle nodige ruimtes", "Poster duidelijk en verzorgd"],

    lessen: CSF.lessen3({
      t1: "Opstart: welkom op Mars",
      weet: "Noteer wat je al weet over Mars en over ruimtereizen.",
      opdracht: "Lees de missie: wat moet er op je missieposter?",
      ideeen: "Noteer minstens 4 gevaren voor astronauten op Mars en kies je specialisme.",
      start: "Werkblad 1: vergelijk Mars met de aarde.",
      t2: "Rekenen en ontwerpen",
      werk2: "Werkblad 2: bereken de voorraden en de zonnepanelen (controleer op de site). Werkblad 3: teken je basis op schaal.",
      t3: "De missieposter",
      werk3: "Werk je missieposter af: plattegrond, voorraadlijst en jouw probleem met oplossing.",
      presenteer: "Stel je missie in 2 minuten voor aan een medeleerling, of neem jezelf op voor Smartschool."
    }),

    werkbundel: [
      { les: 1, html: `
        ${h.kader("De missie", "Vier astronauten landen op Mars en blijven er <b>30 dagen</b>. Jij plant hun basis. Je eindproduct is een <b>missieposter</b> met de plattegrond van de basis, een voorraadlijst en één probleem uit jouw specialisme (ingenieur, bioloog of arts) met jouw oplossing.")}
        <p><b>Wat weet ik al over Mars?</b></p>${h.lijnen(2)}
        <p><b>Welke gevaren wachten de astronauten? (minstens 4)</b></p>${h.lijnen(2)}
        <p><b>Mijn specialisme:</b> ingenieur / bioloog / arts, omdat ______________________________</p>
        <h2>Werkblad 1 · Mars en de aarde</h2>
        <table><tr><th style="width:26%"></th><th>Aarde</th><th>Mars</th><th style="width:32%">Wat betekent dat voor de astronauten?</th></tr>
        <tr><td>Zwaartekracht</td><td>100%</td><td></td><td></td></tr><tr><td>Gemiddelde temperatuur</td><td>ongeveer 15 °C</td><td></td><td></td></tr>
        <tr><td>Lucht</td><td>21% zuurstof</td><td></td><td></td></tr><tr><td>Lengte van een dag</td><td>24 uur</td><td></td><td></td></tr><tr><td>Zonlicht</td><td>100%</td><td></td><td></td></tr></table>
        <p>Een rugzak weegt op aarde 20 kg. Op Mars voelt die als: 20 × 0,38 = ______ kg</p>` },
      { les: 1, html: `
        ${h.leerkaart("Leerkaart · Mars in cijfers", "<ul><li>Afstand tot de aarde: <b>55 tot 400 miljoen km</b>. De reis duurt ongeveer <b>7 maanden</b>.</li><li>Zwaartekracht: <b>38%</b> van die op aarde.</li><li>Gemiddelde temperatuur: ongeveer <b>−60 °C</b>.</li><li>Lucht: ongeveer <b>95% koolstofdioxide</b> en meer dan 100 keer ijler dan op aarde.</li><li>Een dag (een <b>sol</b>) duurt ongeveer <b>24 uur en 40 minuten</b>.</li><li>Zonlicht: ongeveer <b>43%</b> van wat op aarde valt. Stofstormen kunnen de zon wekenlang verduisteren.</li><li>Water zit er als <b>ijs</b>, vooral aan de polen en onder de grond.</li></ul>")}
        <p><b>Het grootste gevaar volgens mij is … omdat …</b></p>${h.lijnen(3)}
        <h3>Wat lukte vandaag? Wat nog niet?</h3>${h.lijnen(2)}` },
      { les: 2, html: `
        <h2>Werkblad 2 · Voorraden berekenen</h2>
        <p class="klein">Per astronaut per dag: 0,84 kg zuurstof · 3 liter water · 1,8 kg voedsel. Missie: 4 astronauten, 30 dagen. Schrijf je berekening op.</p>
        <table><tr><th style="width:30%">Wat?</th><th>Berekening</th><th style="width:18%">Uitkomst</th></tr>
        <tr><td>Zuurstof (kg)</td><td style="height:30px"></td><td></td></tr><tr><td>Water zonder recyclage (liter)</td><td style="height:30px"></td><td></td></tr>
        <tr><td>Water met 90% recyclage (liter)<br><span class="klein">je verliest maar 10%</span></td><td style="height:30px"></td><td></td></tr><tr><td>Voedsel (kg)</td><td style="height:30px"></td><td></td></tr>
        <tr><td>Zonnepanelen<br><span class="klein">de basis heeft 40 kWh per dag nodig; een paneel geeft op aarde 1 kWh per dag, op Mars 43% daarvan</span></td><td style="height:40px"></td><td></td></tr></table>
        <p><b>Waarom is recyclage op Mars zo belangrijk?</b></p>${h.lijnen(2)}` },
      { les: 2, html: `
        <h2>Werkblad 3 · De basis op schaal</h2>
        <p>1 hokje = 1 meter. Teken deze ruimtes en geef ze een kleur. Zet een deur tussen ruimtes die bij elkaar moeten.</p>
        <p class="klein"><b>Moet erin:</b> slaapruimte (minstens 4 × 3 m) · keuken en eetplaats (3 × 3 m) · luchtsluis (2 × 2 m, aan de buitenkant) · opslag voor de voorraden (3 × 2 m) · technische ruimte voor energie en water (3 × 2 m) · <b>jouw ruimte</b> (serre, labo of dokterspost).</p>
        ${raster}
        <p><b>Waarom ligt de luchtsluis waar hij ligt?</b></p>${h.lijnen(1)}` },
      { les: 3, html: `
        <h2>Mijn missieposter · eindproduct</h2>
        ${h.vak("Naam van de missie en de basis:", 34)}
        <div class="twee">${h.vak("Plattegrond (overtekenen of uitknippen van werkblad 3)", 280)}${h.vak("Voorraadlijst voor 30 dagen", 280)}</div>
        ${h.vak("Mijn specialisme: ______ · Het probleem: … · Mijn oplossing: …", 140)}
        <p><b>Presentatie (2 min):</b> begin = wie zijn we en waar landen we · midden = de basis en de voorraden · einde = het grootste gevaar en jouw oplossing.</p>` }
    ]
  });
})();
