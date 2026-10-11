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
    sterren: 3,
    voorWie: "Voor leerlingen met plezier in rekenen aan een echt probleem.",
    naam: "Overleven op Mars: plan een basis voor vier astronauten",
    kort: "Bereken de zuurstof, het water, het voedsel en de energie voor vier astronauten. Ontwerp hun basis.",
    omschrijving: "Mars is koud. Er is bijna geen zuurstof. De reis naar Mars duurt maanden. Vier astronauten moeten er 30 dagen overleven. Jij bent de missieplanner. Vergelijk Mars met de aarde. Bereken de voorraden. Teken een basis op schaal. Je eindproduct is een missieposter.",
    doel: "Je leert de samenwerking van wetenschap, wiskunde en techniek bij een echt probleem: eerst begrijpen, dan rekenen, dan ontwerpen.",
    bereikt: ["Mars en de aarde vergelijken (zwaartekracht, lucht, temperatuur, licht)", "Voorraden berekenen per persoon, per dag en voor een hele missie", "Het belang van recyclage op Mars uitleggen", "Een plattegrond op schaal tekenen"],
    toepassen: ["Stap voor stap rekenen en mijn tussenstappen noteren", "Kiezen: niet alles past in de basis", "Informatie onthouden en gebruiken in mijn ontwerp", "Mijn tijd verdelen tussen rekenen en tekenen"],
    materiaal: ["Werkbundel (met ruitjesplan)", "Liniaal, potlood, gom, kleurpotloden, rekenmachine", "Een toestel met internet voor deze site"],
    oplossing: "Op deze site, bij ‘Controleer je oplossing’. Schrijf eerst je berekening in je werkbundel. Tik daarna je uitkomsten in.",
    product: "Een missieposter (A4): plattegrond van de basis, voorraadlijst en één probleem met jouw oplossing",
    leerkaarten: [
      ["Mars in cijfers", "Mars staat 55 tot 400 miljoen km van de aarde. De reis duurt ongeveer 7 maanden. De zwaartekracht is 38% van die op aarde. De gemiddelde temperatuur is ongeveer −60 °C. Een dag (een ‘sol’) duurt ongeveer 24 uur en 40 minuten."],
      ["Lucht en water", "De lucht op Mars bestaat voor ongeveer 95% uit koolstofdioxide. Ze is meer dan 100 keer ijler dan op aarde. Ademen kan dus niet. Water zit er als ijs, vooral aan de polen en onder de grond."],
      ["Wat heeft een astronaut nodig?", "Per dag ongeveer 0,84 kg zuurstof, 3 liter water (drinken en eten klaarmaken) en 1,8 kg voedsel met verpakking. Het ruimtestation ISS hergebruikt bijna al zijn water."],
      ["Energie", "Op Mars valt ongeveer 43% van het zonlicht op aarde. Een zonnepaneel levert er dus minder op. Stofstormen kunnen de zon wekenlang verduisteren."]
    ],
    invalshoek: { intro: "Kies in lesuur 1 je specialisme. Los op je poster één probleem uit jouw vakgebied op.", keuzes: [
      ["Ingenieur", "Energie en bouwen: hoe blijft de basis warm en werkend tijdens een stofstorm?"], ["Bioloog", "Voedsel: welke gewassen kweek je in de serre? Waarom?"], ["Arts", "Gezondheid: wat doen lage zwaartekracht, kou en straling met je lichaam?"]] },
    nogTijd: "De missie wordt verlengd tot 500 dagen. Bereken de zuurstof en het voedsel opnieuw. Waarom is een serre dan geen luxe meer?",
    test: [
      ["Hoe sterk is de zwaartekracht op Mars, vergeleken met de aarde?", ["38%", "100%", "10%"], 0, "Een rugzak van 20 kg voelt op Mars als 7,6 kg."],
      ["Waarom kan je op Mars niet ademen?", ["De lucht is vooral koolstofdioxide en heel ijl", "Er is helemaal geen lucht", "Het is te warm"], 0, "Ongeveer 95% koolstofdioxide. Meer dan 100 keer ijler dan op aarde."],
      ["Hoe lang duurt een dag op Mars?", ["Ongeveer 24 uur en 40 minuten", "Ongeveer 12 uur", "Ongeveer 7 dagen"], 0, "Een Marsdag heet een sol."]
    ],
    controle: [
      ["Een rugzak weegt op aarde 20 kg. Hoeveel kg voelt dat op Mars?", "getal", [7.6, 0.05], "Neem 38% van 20: 20 × 0,38."],
      ["Zuurstof voor 4 astronauten, 30 dagen (kg)", "getal", [100.8, 0.2], "0,84 kg × 4 personen × 30 dagen."],
      ["Water zonder recyclage, 4 astronauten, 30 dagen (liter)", "getal", [360, 1], "3 liter × 4 × 30."],
      ["Water met 90% recyclage: hoeveel liter moet je meenemen?", "getal", [36, 1], "Je verliest maar 10% van 360 liter."],
      ["Aantal zonnepanelen (afgerond naar boven)", "getal", [94, 0.1], "Deel 40 kWh door 0,43 kWh per paneel. Rond naar boven af."]
    ],
    criteria: ["Logboek elk lesuur ingevuld", "Mars en aarde juist vergeleken", "Voorraden juist berekend, met tussenstappen", "Plattegrond op schaal met alle nodige ruimtes", "Poster duidelijk en verzorgd"],

    lessen: CSF.lessen3({
      t1: "Opstart: welkom op Mars",
      weet: "Noteer je voorkennis over Mars en over ruimtereizen.",
      opdracht: "Lees de missie. Noteer de onderdelen van je missieposter.",
      ideeen: "Noteer minstens 4 gevaren voor astronauten op Mars. Kies je specialisme.",
      start: "Werkblad 1: vergelijk Mars met de aarde.",
      t2: "Rekenen en ontwerpen",
      werk2: "Werkblad 2: bereken de voorraden en de zonnepanelen. Controleer je uitkomsten op de site. Werkblad 3: teken je basis op schaal.",
      t3: "De missieposter",
      werk3: "Werk je missieposter af: plattegrond, voorraadlijst en jouw probleem met oplossing.",
      presenteer: "Stel je missie in 2 minuten voor aan een medeleerling of via een opname op Smartschool."
    }),

    werkbundel: [
      { les: 1, html: `
        ${h.kader("De missie", "Vier astronauten landen op Mars en blijven er <b>30 dagen</b>. Plan hun basis. Je eindproduct is een <b>missieposter</b> met de plattegrond van de basis, een voorraadlijst en één probleem uit jouw specialisme (ingenieur, bioloog of arts) met jouw oplossing.")}
        <p><b>Wat weet ik al over Mars?</b></p>${h.lijnen(2)}
        <p><b>Welke gevaren wachten de astronauten? (minstens 4)</b></p>${h.lijnen(2)}
        <p><b>Mijn specialisme:</b> ingenieur / bioloog / arts. Mijn reden: ______________________________</p>
        <h2>Werkblad 1 · Mars en de aarde</h2>
        <table><tr><th style="width:26%"></th><th>Aarde</th><th>Mars</th><th style="width:32%">Gevolg voor de astronauten</th></tr>
        <tr><td>Zwaartekracht</td><td>100%</td><td></td><td></td></tr><tr><td>Gemiddelde temperatuur</td><td>ongeveer 15 °C</td><td></td><td></td></tr>
        <tr><td>Lucht</td><td>21% zuurstof</td><td></td><td></td></tr><tr><td>Lengte van een dag</td><td>24 uur</td><td></td><td></td></tr><tr><td>Zonlicht</td><td>100%</td><td></td><td></td></tr></table>
        <p>Een rugzak weegt op aarde 20 kg. Op Mars voelt hij als: 20 × 0,38 = ______ kg</p>` },
      { les: 1, html: `
        ${h.leerkaart("Leerkaart · Mars in cijfers", "<ul><li>Afstand tot de aarde: <b>55 tot 400 miljoen km</b>. De reis duurt ongeveer <b>7 maanden</b>.</li><li>Zwaartekracht: <b>38%</b> van die op aarde.</li><li>Gemiddelde temperatuur: ongeveer <b>−60 °C</b>.</li><li>Lucht: ongeveer <b>95% koolstofdioxide</b>, meer dan 100 keer ijler dan op aarde.</li><li>Een dag (een <b>sol</b>) duurt ongeveer <b>24 uur en 40 minuten</b>.</li><li>Zonlicht: ongeveer <b>43%</b> van het zonlicht op aarde. Stofstormen kunnen de zon wekenlang verduisteren.</li><li>Water zit er als <b>ijs</b>, vooral aan de polen en onder de grond.</li></ul>")}
        <p><b>Het grootste gevaar volgens mij en mijn reden:</b></p>${h.lijnen(3)}
        <h3>Wat lukte vandaag? Wat nog niet?</h3>${h.lijnen(2)}` },
      { les: 2, html: `
        <h2>Werkblad 2 · Voorraden berekenen</h2>
        <p class="klein">Per astronaut per dag: 0,84 kg zuurstof · 3 liter water · 1,8 kg voedsel. Missie: 4 astronauten, 30 dagen. Schrijf je berekening op.</p>
        <table><tr><th style="width:30%">Wat?</th><th>Berekening</th><th style="width:18%">Uitkomst</th></tr>
        <tr><td>Zuurstof (kg)</td><td style="height:30px"></td><td></td></tr><tr><td>Water zonder recyclage (liter)</td><td style="height:30px"></td><td></td></tr>
        <tr><td>Water met 90% recyclage (liter)<br><span class="klein">je verliest maar 10%</span></td><td style="height:30px"></td><td></td></tr><tr><td>Voedsel (kg)</td><td style="height:30px"></td><td></td></tr>
        <tr><td>Zonnepanelen<br><span class="klein">de basis verbruikt 40 kWh per dag · een paneel geeft op aarde 1 kWh per dag · op Mars is dat 43% daarvan</span></td><td style="height:40px"></td><td></td></tr></table>
        <p><b>Waarom is recyclage op Mars zo belangrijk?</b></p>${h.lijnen(2)}` },
      { les: 2, html: `
        <h2>Werkblad 3 · De basis op schaal</h2>
        <p>1 hokje = 1 meter. Teken deze ruimtes. Geef ze een kleur. Zet een deur tussen samenhorende ruimtes.</p>
        <p class="klein"><b>Moet erin:</b> slaapruimte (minstens 4 × 3 m) · keuken en eetplaats (3 × 3 m) · luchtsluis (2 × 2 m, aan de buitenkant) · opslag voor de voorraden (3 × 2 m) · technische ruimte voor energie en water (3 × 2 m) · <b>jouw ruimte</b> (serre, labo of dokterspost).</p>
        ${raster}
        <p><b>Verklaar de plaats van je luchtsluis.</b></p>${h.lijnen(1)}` },
      { les: 3, html: `
        <h2>Mijn missieposter · eindproduct</h2>
        ${h.vak("Naam van de missie en de basis:", 34)}
        <div class="twee">${h.vak("Plattegrond (overtekenen of uitknippen van werkblad 3)", 280)}${h.vak("Voorraadlijst voor 30 dagen", 280)}</div>
        ${h.vak("Mijn specialisme: ______ · Het probleem: … · Mijn oplossing: …", 140)}
        <p><b>Presentatie (2 min):</b> begin = de bemanning en de landingsplaats · midden = de basis en de voorraden · einde = het grootste gevaar en jouw oplossing.</p>` }
    ]
  });
})();
