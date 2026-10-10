"""Maakt van de sitemap één losse HTML-pagina (voor een voorbeeldweergave of om te mailen).
Gebruik:  python3 tools/bundel.py  →  maakt csf-projecten-gebundeld.html naast index.html.
Voor GitHub Pages heb je dit NIET nodig."""
import base64, os, re

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
lees = lambda p: open(os.path.join(ROOT, p), encoding="utf-8").read()

lijst = re.findall(r'^\s*"(projecten/[^"]+\.js)"', lees("projecten/lijst.js"), re.M)
logo = "data:image/png;base64," + base64.b64encode(open(os.path.join(ROOT, "assets/logo.png"), "rb").read()).decode()
safe = lambda js: js.replace("</script", "<\\/script")

delen = ["<title>CSF-projecten Campus Lievegem</title>",
         '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Play:wght@400;700&family=Varela+Round&display=swap">',
         "<style>" + lees("assets/style.css") + "</style>",
         '<div id="app"><p style="padding:24px">De CSF-projecten worden geladen …</p></div>',
         "<script>" + safe(lees("site.js")) + "\nCSF.ingebouwd = true; CSF.logo = '" + logo + "';</script>",
         "<script>" + safe(lees("assets/app.js")) + "</script>"]
delen += ["<script>" + safe(lees(p)) + "</script>" for p in lijst]
if os.path.exists(os.path.join(ROOT, "coach/coachfiches.js")):
    delen.append("<script>" + safe(lees("coach/coachfiches.js")) + "</script>")
delen.append("<script>CSF.start();</script>")
uit = os.path.join(ROOT, "csf-projecten-gebundeld.html")
open(uit, "w", encoding="utf-8").write("\n".join(delen))
print("klaar:", uit, len(lijst), "projecten")
