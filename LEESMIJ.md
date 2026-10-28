# CSF-projecten · Campus Lievegem

Dit is de website met de CSF-projecten. Het is een gewone websitemap zonder bouwstap: je past een bestand aan en de site is bijgewerkt.

## Wat zit waar?

| Bestand of map | Wat staat erin? | Aanpassen? |
|---|---|---|
| `index.html` | De lege pagina die alles laadt | Nooit |
| `assets/` | Logo, opmaak (`style.css`) en de motor van de site (`app.js`) | Normaal niet |
| `site.js` | Algemene teksten: welkom, **Wat wordt van mij verwacht?**, TASC-stappen, kiestest | Ja |
| `projecten/lijst.js` | Welke projecten op de site staan, in welke volgorde | Ja |
| `projecten/oefen/` | De oefenprojecten (één bestand per project) | Ja |
| `projecten/vakken/` | De echte projecten, ingedeeld per vak | Ja |
| `projecten/_sjabloon.js` | Een leeg project om te kopiëren | Kopiëren |
| `coach/coachfiches.js` | De coachfiches, **versleuteld** | Enkel vervangen via het hulpscherm |
| `tools/coach-versleutelen.html` | Hulpscherm om de coachfiches te versleutelen | Gebruiken, niet aanpassen |
| `tools/bundel.py` | Maakt één losse HTML-pagina (voorbeeldweergave) | Niet nodig voor GitHub |
| `portaal-config.js` | Koppeling met Firebase voor het digitale logboek en het dashboard | Eén keer invullen |
| `assets/portaal.js` | Aanmelden, digitaal logboek en dashboard voor coaches | Normaal niet |
| `firestore.rules` | Toegangsregels voor Firebase (plakken in Firestore → Rules) | Na elke wijziging opnieuw publiceren |
| `test/` | Automatische tests met een nep-Firebase (zie ‘Testen’) | Normaal niet |

Elk projectbestand bevat **alles** van dat project: de projectfiche, leerkaarten, test, controlevragen, lesplanning én de werkbundel. De werkbundel wordt in de browser opgebouwd en afgedrukt via de knop **Afdrukken**. Er zijn dus geen PDF's meer om bij te houden.

## De site online zetten met GitHub Pages (eenmalig)

1. Maak een gratis account op **github.com** (bijvoorbeeld met je schooladres).
2. Klik rechtsboven op **+** → **New repository**. Naam: `CSF`. Kies **Public**. Klik **Create repository**.
3. Klik op **uploading an existing file**. Sleep de **inhoud** van deze map in het venster (`index.html`, `site.js`, `assets`, `coach`, `projecten`, `tools`, `LEESMIJ.md`). Sleep de mappen zelf mee, niet de map erboven. Klik **Commit changes**.
4. Ga naar **Settings** → **Pages**. Kies bij *Source* **Deploy from a branch**, kies de branch **main** en de map **/ (root)**. Klik **Save**.
5. Na een minuut of twee staat de site op `https://<jouw-gebruikersnaam>.github.io/CSF/`.

**Let op:** uploaden vervangt bestanden, maar verwijdert nooit oude bestanden. Verwijder een hernoemd of overbodig bestand zelf (bestand openen → prullenbakje).

Collega's van de werkgroep kan je toegang geven via **Settings** → **Collaborators**.

## Iets aanpassen

1. Open op github.com het bestand dat je wil wijzigen (bijvoorbeeld `projecten/oefen/talen.js`).
2. Klik op het **potloodje** (Edit).
3. Pas de tekst aan. Laat aanhalingstekens `"…"`, komma's en haakjes staan.
4. Klik **Commit changes**. Na een minuut of twee is de site bijgewerkt (vernieuw de pagina).

Ging er iets mis? Elk bestand heeft een **History**: daar kan je een vorige versie terugzetten.

## Een nieuw project toevoegen

1. Open `projecten/_sjabloon.js` en kopieer de volledige inhoud.
2. Ga naar de map `projecten/vakken`, klik **Add file** → **Create new file**, geef een naam zoals `wiskunde-fractals.js` en plak de inhoud.
3. Vul alles in. Kies bij `vak:` het vak (bijvoorbeeld `"wiskunde"`): het project verschijnt dan in het Projectenoverzicht onder dat vak. Talen schrijf je met een hoofdletter (`"Nederlands"`, `"Engels"`, `"Frans"`, `"Latijn"`), alle andere vakken met een kleine letter. Een uniek `id` is verplicht.
   Schrijfregels: enkelvoudige zinnen, en elke opdracht begint met een gebiedende wijs.
4. Open `projecten/lijst.js` en voeg een regel toe: `"projecten/vakken/wiskunde-fractals.js",`
5. **Commit changes**.

Een project tijdelijk verbergen: zet `//` voor de regel in `projecten/lijst.js`.

## Afdrukken van een werkbundel

Open een project → **Bekijk en druk de werkbundel af** → **Afdrukken**. Kies A4 en zet *Achtergrondafbeeldingen* (of *Achtergrondkleuren*) aan. Via *Opslaan als PDF* krijg je een PDF om op Smartschool te zetten.

## Coachfiches

Onderaan elke pagina staat de knop **Coachfiches (enkel voor coaches)**. Een coach meldt zich aan met zijn schoolaccount en ziet meteen alle coachfiches (zolang Firebase niet gekoppeld is, vraagt de site de coachcode), met per project ook de antwoorden van ‘Controleer je oplossing’ en de lesplanning, en kan je alles afdrukken.

De coachfiches staan **versleuteld** op de site (AES-256). Zonder de code zijn ze onleesbaar, ook in de broncode. De code zelf staat nergens op de site: deel ze enkel mondeling of via Smartschool met de coaches.

**Een coachfiche aanpassen of toevoegen, of de code veranderen:**
1. Open de leesbare bron **coach-bron.js** (privé, bewaard bij de werkgroep, nooit op GitHub zetten).
2. Pas de tekst aan. Een nieuw project krijgt een blok met als naam het `id` van het project.
3. Open op de site `tools/coach-versleutelen.html` (bv. `https://vandaelet.github.io/CSF/tools/coach-versleutelen.html`).
4. Kies coach-bron.js, typ de coachcode twee keer (of een nieuwe code) en klik **Versleutelen**.
5. Upload het gedownloade **coachfiches.js** in de map `coach/` op GitHub (vervang het oude) en **Commit changes**.

Wie de code vergeten is, kan niets terughalen uit het versleutelde bestand: versleutel dan opnieuw vanuit coach-bron.js met een nieuwe code.

## Opbouw van een projectpagina

Elke projectpagina heeft genummerde tabbladen: **1. Projectfiche**, **2. Leerkaarten en oefeningen** (leerkaarten, Test jezelf, de quizzen en Controleer je oplossing), **3. Leidraad per lesuur**, **4. Evaluatie** en **5. Werkbundel**. Onderaan elk tabblad leidt een knop naar de volgende stap. De werkbundel gaat pas open als de leerling de stappen 1 tot 4 bekeek en alle leerkaarten las; het tabblad Werkbundel toont welke stappen nog ontbreken. Bij het eigen project komt ‘bekeken’ in de resultaten van de leerling (geldt op elke Chromebook). In het logboek kan de leerling bij het begin en het einde van een lesuur een vraag aan de coach stellen (komt bij ‘Open vragen’) en schrijft hij eigen feedback bij geslaagd of niet geslaagd.
- De leerling opent elke leerkaart en klikt op ‘Ik heb deze leerkaart gelezen’. Pas als alle leerkaarten gelezen zijn, opent de werkbundel om af te drukken. Dat wordt per browser onthouden. Coaches (aangemeld of met de coachcode) kunnen de werkbundel altijd openen.
- De afspraken van CSF staan in een kader bovenaan de startpagina, vóór de projecten (pas de tekst aan in `site.js`, bij `verwachtingen`).
- De oefenprojecten zijn enkel zichtbaar voor leerlingen van het 1e jaar (afgeleid uit hun klas, bv. 1B) en voor coaches. Tweedejaars zien het tabblad niet. Wie niet aangemeld is, ziet de oefenprojecten pas na aanmelden.

## Aanmelden, zichtbaarheid en één project tegelijk

- **Aanmelden is verplicht.** Wie de site opent, meldt zich eerst aan met zijn SVSL-account. Enkel CSF-leerlingen (aangevinkt in de klaslijst) en coaches komen binnen. Kent het portaal de klas van een leerling niet, dan duidt de leerling ze één keer zelf aan.
- **Startpagina:** bovenaan de CSF-afspraken, daaronder ‘Projectenoverzicht’ en ‘Oefenprojecten eerste jaar’. Wat een leerling ziet, stel je in via Dashboard → **Zichtbaarheid** (per jaar en per klas) en Dashboard → **CSF-leerlingen** (kolom ‘Ziet’, per leerling). Standaard: 1e jaar ziet beide, 2e jaar enkel alle projecten.
- **Eén project tegelijk.** De leerling kiest zijn project in ‘Mijn logboek’, samen met de vakleerkracht(en) van wie hij de les verlaat (hij typt de familienaam en klikt op de leerkracht; de lijst staat in Dashboard → tabblad Vakleerkrachten, voor elke coach, één ‘Voornaam Familienaam’ per regel; het portaal maakt zelf het adres familienaam.voornaam@svsl.be, met ‘Kopieer alle e-mailadressen’ om iedereen te mailen). Van andere projecten ziet hij enkel de projectfiche.
- **Goedkeuren.** Een afgewerkt project keurt de coach goed in het dashboard (klik op de leerling → ‘Keur project goed’). Pas dan kiest de leerling een nieuw project. Goedgekeurde projecten staan in zijn **portfolio**. Met ‘Annuleer’ wis je een logboek; de leerling kiest dan opnieuw.
- **Resultaten.** Welke leerkaarten de leerling las en wat hij antwoordde bij ‘Test jezelf’, ‘Controleer je oplossing’ en de quizzen, komt in zijn logboek. De leerling kan een antwoord niet meer wijzigen. De coach ziet de scores en de antwoorden in het dashboard.

## Leidraad en feedback in het logboek

- Na het begin van een lesuur staat de **leidraad van vandaag** als afvinklijst in het logboek. Afvinken wordt meteen bewaard. Wat niet afgevinkt is (behalve de vaste logboekstappen), komt automatisch in de volgende les, met het label *nog af te werken*. Pas als alles af is, komt het volgende lesuur van de leidraad. De leerling kan het volgende lesuur ook zelf toevoegen (‘Alles af? Voeg lesuur … toe’). De coach ziet per lesuur wat afgevinkt is.
- **Feedback** staat bovenaan, zowel bij de leerling als in het detail van het dashboard, met de status gelezen of nog niet gelezen. De leerling kan op elke feedback antwoorden. Een nieuw antwoord verschijnt in het overzicht als *nieuw antwoord op feedback*.
- Lesuren staan met het laatste lesuur bovenaan; de opstart staat onderaan.

## Aanpassingen aan de site vragen

Coaches noteren fouten en wensen in Dashboard → **Aanpassingen aan de site** (of met de knop ‘Vraag een aanpassing aan dit project’ op een projectpagina). Ze kiezen een soort, waar het over gaat en of het dringend is. De beheerder zet de status op *in behandeling*, *opgelost* of *niet mogelijk* en kan een antwoord geven. ‘Kopieer de open vragen als lijst’ geeft een genummerde lijst om in één keer af te werken.

## Projectlink en ander project

Bovenaan het logboek staat de link naar het project. De leerling voegt hem toe of wijzigt hem op elk moment. Zolang het project niet afgerond is, kan de leerling er ook een **ander project** kiezen: zijn opstart en ingevulde lesuren gaan mee, het oude logboek krijgt de status geannuleerd.

## Uitgewerkte leerkaarten

Elke leerkaart heeft een korte kern (bovenaan, in een kader) en een uitwerking: een eigen tekening (SVG), een uitgewerkt voorbeeld, een tip of een waarschuwing. De bouwstenen staan in `CSF.lk` (zie `projecten/_sjabloon.js`). De voorbeelden geven nooit een antwoord uit de werkbundel of uit ‘Controleer je oplossing’ weg.

‘Controleer je oplossing’ is stap 6, na de werkbundel. De leerling bevestigt eerst dat hij de oefeningen in zijn werkbundel oploste.

## Testleerling voor coaches

Elke coach heeft een eigen testleerling (`test--<e-mail van de coach>`). Open Dashboard → **Testleerling** → ‘Maak mijn testleerling en start’. Je ziet de site dan precies zoals een leerling: klas kiezen, project kiezen, leerkaarten, vragen, logboek, vragen aan de coach. Een oranje balk bovenaan wisselt naar ‘Bekijk als coach’ (detail van de testleerling in het overzicht) of stopt de testmodus. ‘Zet de testleerling terug op nul’ wist alle logboeken, antwoorden, feedback en vragen. De testleerling staat in het overzicht met het label *test*, komt niet in de export en krijgt geen herinneringsmails. Kies jezelf als vakleerkracht, dan ziet geen collega de testleerling.

## Digitaal logboek en dashboard

Leerlingen en leerkrachten melden zich aan met hun schoolaccount (@svsl.be). De projecten blijven openbaar; het logboek, het dashboard en de coachfiches vragen aanmelden.

**Leerling** (`Mijn logboek`, of de knop op een projectpagina):
0. **Bij het aanmelden** (één keer per dag): de vraag ‘Vul je logboek in’. ‘Ja, ik vul het nu in’ brengt de leerling naar zijn logboek. ‘Neen, ik moet mijn logboek niet aanvullen deze les’ wordt bewaard: de coach ziet die dagen in het logboek, en die dag volgt geen uitroepteken en geen herinneringsmail. Op de projectpagina staat tijdens een lesuur de knop ‘Logboek einde les invullen’.
1. **Opstart** (één keer per project): klas, vak, vakleerkracht, dag, lesuur, voorziene tijd, motivatie en afgesproken evaluatie.
2. **Begin van elk lesuur**: TASC-stappen en plan. Pas daarna verschijnt het stappenplan van dat lesuur. Op de projectpagina blijven de volgende lesuren vergrendeld.
3. **Einde van elk lesuur**: in lesuur 1 de uitwerking en de evaluatie, daarna de ingehaalde leerstof. Een nieuw lesuur start pas als het einde van het vorige ingevuld is.
4. **Afsluiting**: evaluatie en reflectie (met de executieve functies om aan te vinken).
5. **Feedback**: heeft de coach feedback gegeven, dan ziet de leerling die bij de volgende aanmelding. Hij kan pas verder als hij bevestigt dat hij ze gelezen heeft.

**Coach** (`Dashboard coaches`):
- **Tekens in het overzicht**: een groen vinkje ✓ betekent dat het logboek in orde is. Een rood uitroepteken ! betekent dat de leerling online was op zijn CSF-dag zonder logboek in te vullen, of dat een einde-logboek ontbreekt. Een coach ziet eerst zijn eigen leerlingen. Kies ‘Alle coaches’ om iedereen te zien.
- **Projecten**: pas per project de sterren, de voorziene tijd en de inleidende teksten aan (korte inhoud, voor wie, omschrijving, doel). De site toont meteen de nieuwe versie. Met ‘Zet terug naar het origineel’ geldt weer de tekst uit het projectbestand. De werkbundel en de lesplanning veranderen niet.
- **Open vragen**: een leerling stelt onderaan zijn projectvenster een vraag aan zijn coach. De coach beantwoordt ze in het tabblad Open vragen. De leerling ziet het antwoord bij zijn volgende aanmelding.
- **Overzicht** van alle leerlingen. Een ontbrekend einde-logboek staat in het **rood**. Klik op een leerling om het volledige logboek te lezen en feedback te geven.
- **Kopieer overzicht voor Google Sheets** (plakken met Ctrl+V) of download het overzicht of alle lesuren als CSV.
- **Klaslijsten**: vink aan wie CSF volgt en kies een coach (zie hieronder).
- **CSF-leerlingen**: zet ‘Logboek elke les’ aan of uit (herinnering per e-mail), wijzig de coach en vul het e-mailadres van de vakleerkracht in. Dat kan je doorheen het jaar wijzigen. Een leerling die niet op de klaslijst staat, voeg je hier met de hand toe.
- **Coachfiches**: een coach opent ze zonder code.

**Vakleerkracht**: staat zijn e-mailadres bij een leerling, dan leest hij via het dashboard het logboek van die leerling (zonder iets te kunnen wijzigen).

**Beheerder** (tabblad `Coaches en instellingen`): coaches toevoegen en verwijderen, en de coachcode één keer bewaren zodat coaches de coachfiches zonder code openen.

## Klaslijsten en CSF-leerlingen

De klaslijsten staan enkel in Firebase, nooit op GitHub. Zet een echte klaslijst dus nooit in deze map.

1. **Importeren** (beheerder, één keer per schooljaar): Dashboard → **Klaslijsten** → vul het schooljaar in (bv. `2026-2027`) → kies het Excel-bestand → **Importeer**.
   - Een Smartschool-klaslijst met één blad per klas (`Klaslijst 1B`, kolommen Nr. en Leerling) werkt.
   - Een export met de kolommen Klas, Familienaam, Voornaam en E-mail werkt ook. Die is beter: dan zijn de e-mailadressen zeker.
2. **Aanvinken** (elke coach): filter op klas en vink de CSF-leerlingen aan. Kies meteen een coach.
   - Zonder e-mailkolom stelt het portaal `familienaam.voornaam@svsl.be` voor (oranje label **voorstel**). Controleer dat adres en pas het aan als het niet klopt.
3. **Nieuw schooljaar**: importeer de nieuwe klaslijsten met het nieuwe schooljaar. Elke leerling wordt herkend aan zijn naam.
   - Wie CSF volgt, blijft aangevinkt en krijgt zijn nieuwe klas. De klas van vorig jaar blijft bewaard, net als coach en logboeken.
   - Wie niet meer op de lijst staat, blijft bewaard met het grijze label **niet op de klaslijst van …**.
   - Vink daarna de nieuwe CSF-leerlingen aan.
4. **Stoppen met CSF**: vink de leerling uit. Hij en zijn logboeken blijven bewaard, maar hij kan geen logboek meer invullen. Je kan hem later opnieuw aanvinken.
5. **Aanmeldingen**: meldt een leerling zich aan met een adres dat niet op de CSF-lijst staat, dan verschijnt hij bovenaan in het oranje. Klik op de knop om hem met dat adres op CSF te zetten, of op **Negeer**.

## Herinnering per e-mail

Een leerling met **Logboek elke les** aangevinkt (tabblad CSF-leerlingen) krijgt een e-mail als hij na zijn CSF-les het logboek niet volledig invulde. De mail vertrekt elke schooldag rond 16 uur. De CSF-dag komt uit de opstart van zijn logboek. Op de Chromebook verschijnt de mail als melding van Gmail. In de site ziet hij bovendien een rode melding tot zijn logboek in orde is.

Vink je ‘Logboek elke les’ uit, dan vult de leerling zijn logboek nog in. Hij krijgt dan geen herinnering en een ontbrekend logboek staat niet in het rood.

**Eén keer installeren** (met het schoolaccount dat eigenaar is van het Firebase-project):
1. Ga naar **script.google.com** en klik **Nieuw project**. Geef het de naam `CSF herinnering`.
2. Klik links op het tandwiel (**Projectinstellingen**) en vink **appsscript.json-manifestbestand weergeven in editor** aan.
3. Klik links op **Editor**. Open `Code.gs`, wis alles en plak de inhoud van `herinnering/Code.gs` uit GitHub.
4. Open `appsscript.json`, wis alles en plak de inhoud van `herinnering/appsscript.json`. Klik op het diskette-icoon om te bewaren.
5. Kies bovenaan de functie **proef** en klik **Uitvoeren**. Geef toestemming met je schoolaccount. Het logboek onderaan toont wie vandaag een herinnering zou krijgen. Er vertrekt nog geen mail.
6. Kies de functie **installeer** en klik **Uitvoeren**. Nu vertrekt de herinnering elke dag rond 16 uur.
7. Ga naar het dashboard → **Coaches en instellingen**. Vink **Herinneringen versturen** aan, controleer de vrije dagen en klik **Bewaar**.

De mails vertrekken vanaf jouw schooladres. Vul elk schooljaar de vrije dagen en vakanties opnieuw in.

## Firebase koppelen (één keer)

1. Ga met je schoolaccount naar **console.firebase.google.com** en klik **Create a project** (of **Add project**). Naam: `campus-lievegem-csf`. Google Analytics mag uit.
2. **Build → Authentication → Get started → Sign-in method → Google**: zet aan, kies je e-mailadres als ondersteuningsadres en klik **Save**.
3. **Authentication → Settings → Authorized domains → Add domain**: `vandaelet.github.io`.
4. **Build → Firestore Database → Create database**: kies locatie **europe-west1 (Belgium)** en **Start in production mode**.
5. **Firestore Database → Rules**: plak de volledige inhoud van `firestore.rules` en klik **Publish**.
6. **Firestore Database → Data → Start collection**: naam `beheerders`, Document ID = jouw schooladres in kleine letters (bv. `voornaam.naam@svsl.be`). Voeg één veld toe (bv. `naam`, tekst, je naam) en klik **Save**. Nu ben je beheerder.
7. **Projectinstellingen (tandwiel) → General → Your apps → Web (`</>`)**: bijnaam `csf-site`, geen hosting. Kopieer het blok `firebaseConfig`.
8. Plak dat blok in `portaal-config.js` op de plaats van `CSF.firebaseConfig = null;` (of geef het aan Claude). Na een paar minuten werkt het logboek.
9. Open de site → **Dashboard coaches** → **Coaches en instellingen**: voeg de coaches toe en bewaar de coachcode. Importeer daarna de klaslijsten en vink de CSF-leerlingen aan (zie hierboven).

De gegevens in `firebaseConfig` zijn niet geheim. De beveiliging zit in `firestore.rules`.

**Wijzigt `firestore.rules`?** Plak het bestand dan opnieuw in Firestore → Rules en klik **Publish**. Anders gelden de oude regels.

## Testen

Alles kan lokaal getest worden met een **nep-Firebase** (in `test/fake/`, overgenomen van het wiskundeportaal): niets komt dan in de echte Firebase.

```bash
test/alles.sh               # alle tests (zo draait het ook op GitHub bij elke wijziging)
node test/portaal.js        # leerlingen, logboek, poorten, feedback, vakleerkracht, export
node test/werkbundels.js    # elke werkbundel: één A4-blad = één afgedrukte pagina
```

Benodigd: Node, Python 3 en Playwright met Chromium.

## Goed om te weten

- De projecten op GitHub zijn voor iedereen te bekijken. Leerlinggegevens staan nooit in de bestanden van de site, enkel in Firebase achter de toegangsregels.
- De antwoorden van ‘Controleer je oplossing’ staan leesbaar in de projectbestanden. Een handige leerling kan ze daar vinden. De coachfiches zelf zijn versleuteld.
- Test een wijziging altijd even op de site zelf: een vergeten komma kan een project doen verdwijnen. Dan staat er in de browserconsole welk bestand niet laadt.
