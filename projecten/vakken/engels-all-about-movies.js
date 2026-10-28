/* Engels · All about movies
   Bron: de opdracht ‘CSF English · All about movies’ van de werkgroep, uitgewerkt tot 8 lesuren.
   Per clip: een eigen luisterblad en een luisterquiz die meteen verbetert (vragen in eigen woorden naar de
   opdracht en de verbetersleutel van de werkgroep). De eigen filmquiz maakt de leerling in Google Forms. */
(function () {
  var h = CSF.h;
  var CLIPS = [
    ["The Great Gatsby", "https://youtu.be/1bbRITl23TA"], ["The Hummingbird Project", "https://youtu.be/5MIsUhaA7ZQ"],
    ["Silver Linings Playbook", "https://youtu.be/bbWguEIrmJE"], ["Away We Go", "https://youtu.be/nQwcXgB-DCI"],
    ["Bolt", "https://youtu.be/-JkGe0vTXGE"], ["Tinker Tailor Soldier Spy", "https://youtu.be/dAXL9X15ae8"],
    ["Adventureland", "https://youtu.be/4shn5SeSSOM"], ["The Royal Tenenbaums", "https://youtu.be/k_dBRtaPliM"]];
  var QUIZCLIPS = [
    ["The Social Network", "https://youtu.be/2RB3edZyeYw"], ["Little Miss Sunshine", "https://youtu.be/oabGaaCLZ5g"],
    ["Sharkwater", "https://youtu.be/ggtxA4wuXzY"], ["A Beautiful Mind", "https://youtu.be/aS_d0Ayjw4o"],
    ["Marley and Me", "https://youtu.be/lShipoEMI6Q"], ["Anger Management", "https://youtu.be/3AR394US0lE"],
    ["The Simpsons (clip 1)", "https://youtu.be/65-_GpJtfpQ"], ["The Simpsons (clip 2)", "https://youtu.be/YoptLoEj_tk"]];

  function keuzelijst(l) {
    var vak = function (c, i) { return '<td style="width:5%;text-align:center;font-size:13pt">&#9744;</td><td>' + (i + 1) + ". " + c[0] + "</td>"; }, r = "";
    for (var i = 0; i < l.length; i += 2) r += "<tr>" + vak(l[i], i) + (l[i + 1] ? vak(l[i + 1], i + 1) : "<td></td><td></td>") + "</tr>";
    return "<table>" + r + "</table>";
  }
  // Eén luisterblad per clip (eigen opbouw: kijken zonder en met ondertitels)
  function luisterblad(nr) {
    return `<h2>Werkblad ${nr + 1} · Listening sheet · clip ${nr}</h2>
      <table class="fiche"><tr><td class="lbl">Title of the clip</td><td style="height:26px"></td></tr><tr><td class="lbl">Genre</td><td style="height:26px"></td></tr></table>
      <h3>1. Watch without subtitles</h3>
      <p>Bekijk de clip één keer zonder ondertitels. Noteer in het Engels waar de clip over gaat.</p>${h.lijnen(2)}
      <h3>2. Watch with English subtitles</h3>
      <p>Bekijk de clip opnieuw met Engelse ondertitels. Pauzeer gerust. Beantwoord de vragen in het Engels.</p>
      <table class="fiche"><tr><td class="lbl">Who are the characters?</td><td style="height:36px"></td></tr>
      <tr><td class="lbl">Where are they?</td><td style="height:30px"></td></tr>
      <tr><td class="lbl">What is the problem or the topic?</td><td style="height:44px"></td></tr>
      <tr><td class="lbl">How does the clip end?</td><td style="height:36px"></td></tr></table>
      <h3>3. New words</h3>
      ${h.tabel(["English word or expression", "Meaning in Dutch"], 3, 26)}
      <h3>4. My favourite line</h3>${h.lijnen(1)}
      <p><b>How much did I understand?</b> &nbsp; without subtitles: ____ % &nbsp; · &nbsp; with subtitles: ____ % &nbsp; · &nbsp; <b>Score luisterquiz (site):</b> ____ / 5</p>`;
  }

  CSF.project({
    id: "engels-all-about-movies",
    soort: "vak",
    vak: "Engels",
    jaar: "1e en 2e jaar",
    tijd: "8 lesuren",
    sterren: 4,
    naam: "All about movies",
    kort: "Verdiep je in films van alle genres en test je begrip in het Engels.",
    voorWie: "Voor leerlingen die cognitief sterk zijn en graag films kijken, van avontuur tot romantiek.",
    omschrijving: "Kijk jij het liefst films onder een dekentje met warme choco? Of zit je liever in de bioscoop met een zak popcorn? Verdiep je in een heleboel films, van avontuur tot romantiek. Test jezelf na elk fragment. Hoeveel heb je begrepen? Stel daarna een echte filmquiz op voor anderen! Lights, camera, ACTION! 🎬",
    doel: "Je begrijpt authentieke Engelse filmfragmenten. Je gebruikt ondertitels slim als hulpmiddel. Je stelt zelf correcte Engelse vragen van verschillende soorten. Je maakt een filmquiz in Google Forms. Je verwoordt je mening over een film in het Engels.",
    bereikt: ["Luisteren naar authentiek Engels: de grote lijn en details", "Nieuwe woorden en uitdrukkingen afleiden uit de context", "Vragen stellen: meerkeuzevragen, vragen met inversie en vraagwoordvragen", "Een digitale quiz maken in Google Forms", "Een mening en een aanbeveling schrijven in het Engels"],
    toepassen: ["Plannen: acht lesuren goed verdelen", "Volhouden bij moeilijk verstaanbaar Engels", "Nauwkeurig werken: correcte vragen en antwoordopties", "Zelfreflectie: je begrip inschatten met en zonder ondertitels"],
    materiaal: ["Werkbundel", "Een Chromebook met hoofdtelefoon", "Je SVSL-account voor Google Forms"],
    oplossing: "Op deze site: de luisterquiz per clip verbetert meteen. Controleer de grammatica van je eigen vragen bij ‘Controleer je oplossing’.",
    product: "Vier ingevulde luisterbladen, een eigen filmquiz in Google Forms en een korte filmrecensie in het Engels",
    links: CLIPS.map(function (c) { return ["Clip (deel A): " + c[0], c[1]]; }).concat(QUIZCLIPS.map(function (c) { return ["Quizclip (deel B): " + c[0], c[1]]; }))
      .concat([["Google Forms", "https://docs.google.com/forms"], ["Hulp: een video toevoegen in Google Forms", "https://support.google.com/docs/answer/7322334"]]),
    quizTitel: "Listening quiz per clip (deel A)",
    quizUitleg: "Kijk eerst de clip en vul je luisterblad in. Open daarna de quiz van die clip. Je ziet meteen of je antwoord juist is. Noteer je score onderaan je luisterblad.",
    quizzen: [
      { titel: "1. The Great Gatsby", link: CLIPS[0][1], vragen: [
        ["What does the woman remember about the man at the start?", ["his name", "his favourite drink", "where he lives"], 2],
        ["The man says the party is like …", ["a park full of reporters", "an amusement park", "a museum"], 1],
        ["Who got an invitation to the party?", ["only the woman", "the woman and the man", "only the man"], 2],
        ["What can we guess about Nick at this moment?", ["He doesn’t really know Gatsby.", "He is Gatsby’s friend.", "He doesn’t like Gatsby at all."], 0],
        ["Which story about Gatsby is NOT one of the rumours?", ["He killed someone.", "He spies for Germany.", "He won his money by gambling."], 2]] },
      { titel: "2. The Hummingbird Project", link: CLIPS[1][1], vragen: [
        ["In the example, what does the woman want to buy?", ["a broker’s office in New York", "a house in Kansas", "a lemon company in Zimbabwe"], 2],
        ["How many shares does she want in the example?", ["10,000", "1,000", "10"], 1],
        ["How long does the process take now?", ["16 milliseconds", "15 milliseconds", "17 milliseconds"], 2],
        ["How much money a day can the new line make?", ["500 million dollars", "50 million dollars", "5 million dollars"], 0],
        ["How long is one wing flap of a hummingbird?", ["17 milliseconds", "16 milliseconds", "15 milliseconds"], 1]] },
      { titel: "3. Silver Linings Playbook", link: CLIPS[2][1], vragen: [
        ["What do the two people talk about first?", ["the medicine they have taken", "films they have seen", "food they can cook"], 0],
        ["When she says she is tired, the woman …", ["asks him to drive her home", "asks him to walk her home", "asks her sister for a lift"], 1],
        ["According to the man, the woman …", ["is crazy", "frightens people", "isn’t good with people"], 2],
        ["The sister tells her husband to …", ["drive the woman home", "drive both of them home", "walk the woman home"], 1],
        ["The standing woman asks her sister to stop …", ["talking about her as if she isn’t there", "talking about her in front of others", "calling her a bad person"], 0]] },
      { titel: "4. Away We Go", link: CLIPS[3][1], vragen: [
        ["When are the parents moving to Antwerp?", ["in July", "in January", "in June"], 2],
        ["Why is the young man upset?", ["They will leave before the baby arrives.", "They will still be there when the baby arrives.", "He finds Antwerp boring."], 0],
        ["How long did the parents talk about moving?", ["5 years", "10 years", "15 years"], 2],
        ["How far from their grandchild will they live?", ["3,000 miles", "more than 3,000 miles", "a bit less than 3,000 miles"], 0],
        ["What does the father call Antwerp?", ["exciting", "the city of light", "June"], 1]] },
      { titel: "5. Bolt", link: CLIPS[4][1], vragen: [
        ["How often does Bolt leave the film set, according to the black cat?", ["twice a week", "never", "once a month"], 1],
        ["Are the cats really evil?", ["No, they pretend so they can tease Bolt.", "Yes.", "Only the thin one."], 0],
        ["Who is the cats’ boss?", ["the ‘green man’", "the ‘green-eyed man’", "Bolt"], 1],
        ["The black cat thinks Bolt’s message is …", ["too long", "not very nice", "not needed"], 0],
        ["‘She’s a goner’ means …", ["she isn’t here", "you can’t trust her", "she is lost / doomed"], 2]] },
      { titel: "6. Tinker Tailor Soldier Spy", link: CLIPS[5][1], vragen: [
        ["What does the man in the office ask the man with the bike first?", ["if everything is clear", "if his bike has clearance", "if he can ride a bike"], 1],
        ["As a joke, he calls the people in the office …", ["cut-throats", "blondes", "a boring bunch"], 0],
        ["Why does the man with the bike come in?", ["to park his bike", "to have a look at the new girl", "to talk business"], 1],
        ["Has Bland seen the new girl yet?", ["yes", "no", "we don’t know"], 0],
        ["‘To pop down’ means about the same as …", ["to get angry", "to get off", "to come by"], 2]] },
      { titel: "7. Adventureland", link: CLIPS[6][1], vragen: [
        ["How many giant pandas may James give away?", ["two a day", "none", "three a day"], 1],
        ["In which department does James want to work?", ["rides", "games", "food"], 0],
        ["‘You look more like a games guy’ means James …", ["plays a lot of video games", "would fit better in the games section", "plays mind games"], 1],
        ["What is the main rule in the park?", ["Nothing is free.", "Friends may ride for free.", "Family may ride for free."], 0],
        ["What does the man think of James’ CV?", ["He is a little interested.", "He wants to read it.", "He doesn’t care about it."], 2]] },
      { titel: "8. The Royal Tenenbaums", link: CLIPS[7][1], vragen: [
        ["What does the man ask first?", ["how long she will stay", "how long she has been there", "how long they have known each other"], 0],
        ["Her answer is that …", ["she doesn’t know", "she hasn’t decided", "she will stay three months"], 0],
        ["Will she ever come home?", ["probably", "certainly not", "maybe not"], 2],
        ["What does ‘You’re joking’ mean here?", ["He finds her funny.", "He doesn’t want to believe her.", "He thinks it’s a game."], 1],
        ["What does the man feel like doing?", ["eating some bread", "dying", "talking"], 1]] }
    ],
    leerkaarten: [
      ["Film genres", "An <i>action film</i> has fights and chases. A <i>comedy</i> makes you laugh. A <i>drama</i> shows serious problems of real people. A <i>thriller</i> keeps you tense. An <i>animated film</i> is drawn or made with a computer. A <i>romantic comedy</i> mixes love and humour. A <i>documentary</i> shows real facts.",
        CSF.lk.tabel(['Genre', 'You can recognise it by …', 'Typical words'], [['action film', 'fights, chases, explosions', '<i>hero, escape, fight</i>'], ['comedy', 'funny situations, jokes', '<i>funny, silly, laugh</i>'], ['drama', 'serious problems, strong feelings', '<i>family, sad, choice</i>'], ['thriller', 'danger, secrets, tension', '<i>suspect, chase, secret</i>'], ['animated film', 'drawings or computer images', '<i>cartoon, character</i>'], ['romantic comedy', 'love story with funny moments', '<i>date, fall in love</i>'], ['documentary', 'real people, real facts', '<i>true, facts, interview</i>']]) +
CSF.lk.vb('<p><i>Two friends find an old map in their grandfather’s attic. They follow it and end up in one silly situation after another.</i></p><p>Funny situations and an adventure: this sounds like a <b>comedy</b> (with some action).</p>', 'Which genre?') +
CSF.lk.tip('Many films mix two genres. Say which genre is the strongest.')],
      ["Slim luisteren", "Bekijk de clip eerst zonder ondertitels. Let op de grote lijn: wie, waar, wat. Bekijk de clip daarna met Engelse ondertitels. Pauzeer bij een moeilijke zin. Raad de betekenis van een nieuw woord uit de context. Zoek het pas daarna op.",
        CSF.lk.fig('<svg viewBox="0 0 440 130" role="img" aria-label="Twee keer kijken: eerst de grote lijn, dan de details"><g font-size="12" text-anchor="middle"><rect x="10" y="15" width="190" height="80" rx="10" fill="#eef9f9" stroke="#3BC1C5" stroke-width="2"/><text x="105" y="38" font-weight="700" fill="#17808a">1e keer · zonder ondertitels</text><text x="105" y="60">Wie? Waar? Wat gebeurt er?</text><text x="105" y="80">Noteer 3 kernwoorden.</text><rect x="240" y="15" width="190" height="80" rx="10" fill="#fff4e0" stroke="#FCAF17" stroke-width="2"/><text x="335" y="38" font-weight="700" fill="#b37400">2e keer · Engelse ondertitels</text><text x="335" y="60">Pauzeer bij moeilijke zinnen.</text><text x="335" y="80">Raad, dan pas opzoeken.</text></g><path d="M200 55 L238 55" stroke="#1d1d1b" stroke-width="2"/><path d="M232 50 L240 55 L232 60" fill="#1d1d1b"/><text x="220" y="120" font-size="12" text-anchor="middle" fill="#555">Eerst het geheel, dan de details.</text></svg>') +
CSF.lk.vb('<p>You hear: <i>“I’m <b>starving</b>. Let’s grab a pizza.”</i></p><p>He wants pizza right away. So <b>starving</b> must mean ‘heel veel honger hebben’.</p>', 'Raden uit de context') +
CSF.lk.tip('Kijk ook naar gezichten en geluiden. Muziek en een boos gezicht vertellen al veel, zonder één woord.')],
      ["Three types of questions", "A <i>multiple-choice question</i> has one correct answer and two or three wrong options. An <i>inversion question</i> starts with a verb: <i>Is she angry? Does he like the job? Can they win?</i> The answer is yes or no. A <i>question-word question</i> starts with <i>who, what, where, when, why</i> or <i>how</i>. The answer is a short written sentence.",
        CSF.lk.tabel(['Type', 'Begint met …', 'Antwoord'], [['multiple choice', 'een vraag + opties a, b, c', 'één juiste optie'], ['inversion question', 'een werkwoord: <i>is, are, can, do, does …</i>', '<i>yes</i> of <i>no</i>'], ['question-word question', '<i>who, what, where, when, why, how</i>', 'een korte zin']]) +
CSF.lk.vb('<p><i>You <b>are</b> hungry.</i> → <i><b>Are</b> you hungry?</i> (zet het werkwoord vooraan)</p><p><i>We <b>can</b> swim.</i> → <i><b>Can</b> we swim?</i></p><p><i>You <b>play</b> football.</i> → <i><b>Do</b> you play football?</i></p><p><i>She <b>has</b> a dog.</i> → <i><b>Does</b> she <b>have</b> a dog?</i> (na <i>does</i> geen -s meer)</p>', 'Inversion questions maken') +
CSF.lk.tabel(['Question word', 'asks about …'], [['who', 'a person'], ['what', 'a thing or action'], ['when', 'a time'], ['how', 'the way something happens']]) +
CSF.lk.let('Staat er geen <i>is, are, can …</i> in de zin? Gebruik dan <i>do</i> of <i>does</i>.')],
      ["Goede antwoordopties", "Maak één optie zeker juist. Maak de foute opties geloofwaardig. Geef alle opties ongeveer dezelfde lengte. Vermijd ‘all of the above’. Vraag naar iets wat echt in de clip te zien of te horen is.",
        CSF.lk.vb('<p><b>Not good</b> ✗</p><p><i>What colour is the car?</i> a) red · b) a banana · c) all of the above</p><p>Optie b is te gek, en ‘all of the above’ kan niet bij één auto.</p>', 'Vergelijk') +
CSF.lk.vb('<p><b>Good</b> ✓</p><p><i>Why does the girl run away?</i> a) She is late for school. · b) She sees a dog. · c) She hears her phone.</p><p>Alle opties zijn mogelijk. Alleen wie goed keek, weet het antwoord.</p>', 'Beter') +
CSF.lk.stappen(['Kies een moment dat je duidelijk ziet of hoort in de clip.', 'Schrijf eerst het juiste antwoord.', 'Bedenk twee foute antwoorden die ook hadden kunnen gebeuren.', 'Maak alle opties ongeveer even lang.']) +
CSF.lk.tip('Laat een klasgenoot je vraag beantwoorden zonder de clip te zien. Raadt hij het juiste antwoord? Dan is je vraag te makkelijk.')],
      ["Giving your opinion", "Use: <i>I chose this clip because …</i> · <i>I felt … when …</i> · <i>The best part was …</i> · <i>I have / haven't seen the full movie.</i> · <i>I would recommend this movie to … because …</i> · <i>I wouldn't recommend it, because …</i>",
        CSF.lk.vb('<p><i>I chose this clip because I love films about animals. I felt nervous when the bear came closer. The best part was the end, when the little bear found its mother. I haven’t seen the full movie yet. I would recommend it to my little brother, because it is exciting but not too scary.</i></p>', 'Voorbeeld') +
CSF.lk.tabel(['Feelings', 'Opinion words'], [['<i>happy, sad, nervous, scared, surprised, bored</i>', '<i>exciting, funny, boring, beautiful, scary, strange</i>']]) +
CSF.lk.tip('Geef altijd een reden met <i>because</i>. Een mening zonder reden is maar een halve mening.')]
    ],
    invalshoek: { intro: "Kies in lesuur 1 vier clips uit deel A. Wil je meer uitdaging? Kies er zes of acht.", keuzes: [
      ["Vier clips", "De basis: één clip per lesuur."],
      ["Zes clips", "Extra luisteroefening: twee lesuren met twee clips."],
      ["Acht clips", "Topniveau: alle clips, in een sneller tempo."]] },
    nogTijd: "Zoek de trailer van je favoriete film. Schrijf er drie quizvragen bij voor je klasgenoten.",
    test: [
      ["Wat doe je best bij de eerste keer kijken?", ["Let op de grote lijn: wie, waar, wat", "Schrijf elk woord op", "Zoek meteen elk woord op"], 0, "Eerst de grote lijn, daarna de details."],
      ["Which question is an inversion question?", ["Does Bolt live on a movie set?", "Where does Bolt live?", "Bolt lives on a movie set."], 0, "An inversion question starts with a verb and has a yes/no answer."],
      ["Which question is a question-word question?", ["Why is the young man upset?", "Is the young man upset?", "The young man is upset, isn't he?"], 0, "It starts with why."],
      ["What makes good wrong options in a multiple-choice question?", ["They are believable", "They are funny", "They are much longer"], 0, "Wrong options must look possible."]
    ],
    controle: [
      ["Make an inversion question: ‘She is tired.’", "tekst", ["is she tired?", "is she tired"], "Put the verb ‘is’ first."],
      ["Make an inversion question: ‘They can win the game.’", "tekst", ["can they win the game?", "can they win the game"], "Put ‘can’ first."],
      ["Make an inversion question: ‘He works at the park.’", "tekst", ["does he work at the park?", "does he work at the park"], "Use ‘does’ and the base form ‘work’."],
      ["Which question word asks about a place?", "tekst", ["where"], "Think of ‘Where are they?’"],
      ["Which question word asks for a reason?", "tekst", ["why"], "The answer often starts with ‘because’."]
    ],
    criteria: ["Logboek elk lesuur ingevuld", "Minstens vier luisterbladen volledig in het Engels", "Nieuwe woorden met correcte betekenis", "Quiz met 5 meerkeuzevragen, 1 inversievraag en 2 vraagwoordvragen", "Correct Engels in vragen en antwoordopties", "Quiz in Google Forms getest door een medeleerling", "Recensie in het Engels met mening en aanbeveling"],

    lessen: CSF.lessenN({
      t1: "Opstart en clip 1",
      weet: "Noteer je favoriete films en hun genre in het Engels.",
      opdracht: "Lees de opdracht. Kies vier clips uit deel A.",
      ideeen: "Bedenk hoe je Engels het best begrijpt: met of zonder ondertitels, één of meer keer kijken.",
      start: "Werkblad 2: bekijk je eerste clip via de link bij het project. Vul het luisterblad in. Maak daarna de luisterquiz op de site.",
      midden: [
        { titel: "Clip 2", werk: "Werkblad 3: bekijk je tweede clip. Vul het luisterblad in. Maak de luisterquiz op de site." },
        { titel: "Clip 3", werk: "Werkblad 4: bekijk je derde clip. Vul het luisterblad in. Vergelijk je begrip met clip 1." },
        { titel: "Clip 4", werk: "Werkblad 5: bekijk je vierde clip. Vul het luisterblad in. Lever je luisterbladen in bij je coach." },
        { titel: "Deel B: kies je quizclip", werk: "Werkblad 6: kies een clip uit deel B. Bekijk hem meerdere keren. Noteer wat er gebeurt, met de tijd erbij." },
        { titel: "Deel B: schrijf je vragen", werk: "Werkblad 7: schrijf 5 meerkeuzevragen, 1 inversievraag en 2 vraagwoordvragen. Controleer je grammatica op de site." },
        { titel: "Deel B: quiz in Google Forms", werk: "Werkblad 8: maak je quiz in Google Forms. Voeg de clip toe. Laat een medeleerling je quiz testen. Verbeter onduidelijke vragen." }
      ],
      laatste: { titel: "Deel C: recensie en presentatie", werk: "Werkblad 9: schrijf je recensie in het Engels. Deel de link van je quiz met je coach.", presenteer: "Laat een medeleerling je quiz spelen. Vertel in het Engels waarom je deze clip koos." }
    }),

    werkbundel: [
      { les: 1, html: `
        ${h.kader("De opdracht", "<b>Deel A.</b> Bekijk minstens vier filmclips. Vul per clip een luisterblad in. <b>Deel B.</b> Kies een andere clip. Maak er een eigen filmquiz over in Google Forms. <b>Deel C.</b> Schrijf in het Engels waarom je die clip koos en wat je ervan vond.")}
        ${h.leerkaart("Leerkaart · Film genres", "<p>An <i>action film</i> has fights and chases. A <i>comedy</i> makes you laugh. A <i>drama</i> shows serious problems of real people. A <i>thriller</i> keeps you tense. An <i>animated film</i> is drawn or made with a computer. A <i>romantic comedy</i> mixes love and humour. A <i>documentary</i> shows real facts.</p>")}
        <h3>Wat weet ik al? My favourite movies</h3>
        ${h.tabel(["Movie", "Genre", "Why I like it"], 2, 24)}
        <h2>Werkblad 1 · Mijn clips voor deel A</h2>
        <p>Vink minstens vier clips aan. De links staan bij het project op de site.</p>
        ${keuzelijst(CLIPS)}` },
      { les: 1, html: `${h.leerkaart("Leerkaart · Slim luisteren", "<ol><li>Bekijk de clip eerst <b>zonder</b> ondertitels. Let op de grote lijn: wie, waar, wat.</li><li>Bekijk de clip daarna <b>met Engelse</b> ondertitels. Pauzeer bij een moeilijke zin.</li><li>Raad de betekenis van een nieuw woord uit de context. Zoek het pas daarna op.</li></ol>")}${luisterblad(1)}` },
      { les: 2, html: luisterblad(2) },
      { les: 3, html: luisterblad(3) },
      { les: 4, html: luisterblad(4) },
      { les: 5, html: `
        <h2>Werkblad 6 · Mijn quizclip (deel B)</h2>
        <p>Kies één clip. Je kiest een andere clip dan in deel A.</p>
        ${keuzelijst(QUIZCLIPS)}
        <h3>What happens in the clip?</h3>
        <p>Bekijk de clip meerdere keren. Noteer wat er gebeurt, met de tijd erbij. Deze notities gebruik je voor je vragen.</p>
        <table><tr><th style="width:16%">Time</th><th>What happens? What is said?</th></tr>
        ${[1, 2, 3, 4, 5, 6, 7, 8].map(function () { return '<tr><td style="height:34px"></td><td></td></tr>'; }).join("")}</table>` },
      { les: 6, html: `
        <h2>Werkblad 7 · My quiz questions (1)</h2>
        ${h.leerkaart("Leerkaart · Three types of questions", "<ul><li><b>Multiple choice:</b> one correct answer and two wrong options.</li><li><b>Inversion question:</b> starts with a verb. <i>Is she angry? Does he like the job? Can they win?</i> The answer is yes or no.</li><li><b>Question-word question:</b> starts with <i>who, what, where, when, why</i> or <i>how</i>. The answer is a short written sentence.</li></ul>")}
        <h3>a. Five multiple-choice questions</h3>
        <p class="klein">Omcirkel telkens de juiste optie.</p>
        ${[1, 2, 3].map(function (n) { return '<table><tr><th style="width:8%">' + n + '</th><td style="height:26px" colspan="1"></td></tr><tr><td style="text-align:center">A</td><td style="height:22px"></td></tr><tr><td style="text-align:center">B</td><td style="height:22px"></td></tr><tr><td style="text-align:center">C</td><td style="height:22px"></td></tr></table>'; }).join("")}` },
      { les: 6, html: `
        <h2>Werkblad 7 · My quiz questions (2)</h2>
        ${[4, 5].map(function (n) { return '<table><tr><th style="width:8%">' + n + '</th><td style="height:26px"></td></tr><tr><td style="text-align:center">A</td><td style="height:22px"></td></tr><tr><td style="text-align:center">B</td><td style="height:22px"></td></tr><tr><td style="text-align:center">C</td><td style="height:22px"></td></tr></table>'; }).join("")}
        ${h.leerkaart("Leerkaart · Goede antwoordopties", "<p>Maak één optie zeker juist. Maak de foute opties geloofwaardig. Geef alle opties ongeveer dezelfde lengte. Vraag naar iets wat echt in de clip te zien of te horen is.</p>")}
        <h3>b. One inversion question (yes or no)</h3>
        <table class="fiche"><tr><td class="lbl">Question</td><td style="height:30px"></td></tr><tr><td class="lbl">Answer</td><td>yes / no</td></tr></table>
        <h3>c. Two question-word questions (written answer)</h3>
        <table class="fiche">${[1, 2].map(function (n) { return '<tr><td class="lbl">Question ' + n + '</td><td style="height:30px"></td></tr><tr><td class="lbl">Correct answer</td><td style="height:30px"></td></tr>'; }).join("")}</table>
        <p class="klein">&#9744; Elke vraag eindigt op een vraagteken. &nbsp; &#9744; Ik controleerde mijn grammatica op de site. &nbsp; &#9744; Mijn coach of een medeleerling las mee.</p>` },
      { les: 7, html: `
        <h2>Werkblad 8 · My quiz in Google Forms</h2>
        <table>${["Open Google Forms met je SVSL-account. Kies een leeg formulier.", "Geef je quiz een titel: <i>Movie quiz: titel van de clip</i>.", "Klik op het tandwiel <b>Instellingen</b>. Zet <b>Er een quiz van maken</b> aan.", "Klik op het icoon <b>Video toevoegen</b>. Plak de link van je clip.", "Maak de 5 meerkeuzevragen met het type <b>Meerkeuze</b>. Duid bij <b>Antwoordsleutel</b> het juiste antwoord aan.", "Maak de inversievraag met het type <b>Meerkeuze</b> en de opties <i>yes</i> en <i>no</i>.", "Maak de 2 vraagwoordvragen met het type <b>Kort antwoord</b>. Vul het juiste antwoord in.", "Klik op het oog <b>Voorbeeld</b>. Speel je quiz zelf één keer.", "Klik op <b>Verzenden</b>. Kopieer de link. Deel hem met je coach."].map(function (x) { return '<tr><td style="width:7%;text-align:center;font-size:13pt">&#9744;</td><td>' + x + "</td></tr>"; }).join("")}</table>
        <h3>Testronde</h3>
        <table class="fiche"><tr><td class="lbl">Tester</td><td style="height:26px"></td></tr><tr><td class="lbl">Score</td><td style="height:26px">____ / 8</td></tr>
        <tr><td class="lbl">Welke vraag was onduidelijk?</td><td style="height:50px"></td></tr><tr><td class="lbl">Zo verbeterde ik ze</td><td style="height:50px"></td></tr></table>` },
      { les: 8, html: `
        <h2>Werkblad 9 · My review (deel C)</h2>
        ${h.leerkaart("Leerkaart · Giving your opinion", "<p><i>I chose this clip because …</i> · <i>I felt … when …</i> · <i>The best part was …</i> · <i>I have / haven't seen the full movie.</i> · <i>I would recommend this movie to … because …</i></p>")}
        <p>Schrijf in het Engels. Beantwoord de vier vragen in volzinnen.</p>
        <table class="fiche"><tr><td class="lbl">Why did you choose this clip?</td><td style="height:66px"></td></tr>
        <tr><td class="lbl">How did you feel about the movie clip?</td><td style="height:66px"></td></tr>
        <tr><td class="lbl">Have you seen the full movie?</td><td style="height:44px"></td></tr>
        <tr><td class="lbl">Would you recommend the movie to your friends? Why (not)?</td><td style="height:66px"></td></tr></table>
        <h3>What did I learn about my English?</h3>${h.lijnen(3)}
        <p><b>Presenteren (2 min):</b> laat een medeleerling je quiz spelen · vertel in het Engels waarom je deze clip koos.</p>` }
    ]
  });
})();
