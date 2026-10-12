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

Onderaan elke pagina staat de knop **Coachfiches (enkel voor coaches)**. Na het intikken van de coachcode zie je alle coachfiches, met per project ook de antwoorden van ‘Controleer je oplossing’ en de lesplanning, en kan je alles afdrukken.

De coachfiches staan **versleuteld** op de site (AES-256). Zonder de code zijn ze onleesbaar, ook in de broncode. De code zelf staat nergens op de site: deel ze enkel mondeling of via Smartschool met de coaches.

**Een coachfiche aanpassen of toevoegen, of de code veranderen:**
1. Open de leesbare bron **coach-bron.js** (privé, bewaard bij de werkgroep, nooit op GitHub zetten).
2. Pas de tekst aan. Een nieuw project krijgt een blok met als naam het `id` van het project.
3. Open op de site `tools/coach-versleutelen.html` (bv. `https://<gebruikersnaam>.github.io/csf-projecten/tools/coach-versleutelen.html`).
4. Kies coach-bron.js, typ de coachcode twee keer (of een nieuwe code) en klik **Versleutelen**.
5. Upload het gedownloade **coachfiches.js** in de map `coach/` op GitHub (vervang het oude) en **Commit changes**.

Wie de code vergeten is, kan niets terughalen uit het versleutelde bestand: versleutel dan opnieuw vanuit coach-bron.js met een nieuwe code.

## Goed om te weten

- Een publieke GitHub-site is voor iedereen te bekijken. Zet er dus geen leerlinggegevens op.
- De antwoorden van ‘Controleer je oplossing’ staan leesbaar in de projectbestanden. Een handige leerling kan ze daar vinden. De coachfiches zelf zijn versleuteld.
- Test een wijziging altijd even op de site zelf: een vergeten komma kan een project doen verdwijnen. Dan staat er in de browserconsole welk bestand niet laadt.
