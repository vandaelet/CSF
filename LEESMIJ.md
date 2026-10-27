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

## Digitaal logboek en dashboard

Leerlingen en leerkrachten melden zich aan met hun schoolaccount (@svsl.be). De projecten blijven openbaar; het logboek, het dashboard en de coachfiches vragen aanmelden.

**Leerling** (`Mijn logboek`, of de knop op een projectpagina):
1. **Opstart** (één keer per project): klas, vak, vakleerkracht, dag, lesuur, voorziene tijd, motivatie en afgesproken evaluatie.
2. **Begin van elk lesuur**: TASC-stappen en plan. Pas daarna verschijnt het stappenplan van dat lesuur. Op de projectpagina blijven de volgende lesuren vergrendeld.
3. **Einde van elk lesuur**: in lesuur 1 de uitwerking en de evaluatie, daarna de ingehaalde leerstof. Een nieuw lesuur start pas als het einde van het vorige ingevuld is.
4. **Afsluiting**: evaluatie en reflectie (met de executieve functies om aan te vinken).
5. **Feedback**: heeft de coach feedback gegeven, dan ziet de leerling die bij de volgende aanmelding. Hij kan pas verder als hij bevestigt dat hij ze gelezen heeft.

**Coach** (`Dashboard coaches`):
- **Overzicht** van alle leerlingen. Een ontbrekend einde-logboek staat in het **rood**. Klik op een leerling om het volledige logboek te lezen en feedback te geven.
- **Kopieer overzicht voor Google Sheets** (plakken met Ctrl+V) of download het overzicht of alle lesuren als CSV.
- **Leerlingen**: voeg leerlingen toe (of plak een lijst uit Excel of Smartschool: e-mail, naam, klas), wijs een coach toe en vul het e-mailadres van de vakleerkracht in. Dat kan je doorheen het jaar wijzigen.
- **Coachfiches**: een coach opent ze zonder code.

**Vakleerkracht**: staat zijn e-mailadres bij een leerling, dan leest hij via het dashboard het logboek van die leerling (zonder iets te kunnen wijzigen).

**Beheerder** (tabblad `Coaches en instellingen`): coaches toevoegen en verwijderen, en de coachcode één keer bewaren zodat coaches de coachfiches zonder code openen.

## Firebase koppelen (één keer)

1. Ga met je schoolaccount naar **console.firebase.google.com** en klik **Create a project** (of **Add project**). Naam: `campus-lievegem-csf`. Google Analytics mag uit.
2. **Build → Authentication → Get started → Sign-in method → Google**: zet aan, kies je e-mailadres als ondersteuningsadres en klik **Save**.
3. **Authentication → Settings → Authorized domains → Add domain**: `vandaelet.github.io`.
4. **Build → Firestore Database → Create database**: kies locatie **europe-west1 (Belgium)** en **Start in production mode**.
5. **Firestore Database → Rules**: plak de volledige inhoud van `firestore.rules` en klik **Publish**.
6. **Firestore Database → Data → Start collection**: naam `beheerders`, Document ID = jouw schooladres in kleine letters (bv. `voornaam.naam@svsl.be`). Voeg één veld toe (bv. `naam`, tekst, je naam) en klik **Save**. Nu ben je beheerder.
7. **Projectinstellingen (tandwiel) → General → Your apps → Web (`</>`)**: bijnaam `csf-site`, geen hosting. Kopieer het blok `firebaseConfig`.
8. Plak dat blok in `portaal-config.js` op de plaats van `CSF.firebaseConfig = null;` (of geef het aan Claude). Na een paar minuten werkt het logboek.
9. Open de site → **Dashboard coaches** → **Coaches en instellingen**: voeg de coaches toe en bewaar de coachcode. Voeg daarna in **Leerlingen** de CSF-leerlingen toe.

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
