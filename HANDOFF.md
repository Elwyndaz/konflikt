---
schemaVersion: 1
status: active
currentGoal: Källtabellen ska stämma och vara användbar inför föredraget 2026-09-21.
nextAction: Patrik för över ändringarna i bildspelet till arbetsmappens v3 (P1 under Presentationen i BACKLOG.md).
blockers: []
reviewedAt: 2026-11-25
---

# HANDOFF

Bildspelet ligger sedan 2026-09-21 i repot som `konfliktkompetens.pptx`, med en nedladdningsruta överst på sidan. Filstorleken står i klartext i `template.html`: byts filen ut måste siffran följa med. Beslutet att publicera hela filen, talarstöd och allt, står i `CONTEXT.md`.

Sidan byggdes och publicerades 2026-09-18. Citeringar och abstract hämtades samma dag (datumet står som `CHECKED` i `build.py`, ändra det när siffrorna hämtas om).

En oberoende omkörning av hela uppdraget (analys, läslista med 38 källor, 28 bilder, metod) ligger i arbetsmappens undermapp `claude\` sedan 2026-09-18 kl. 16:30. Den svarar på två av P1-punkterna, se `BACKLOG.md`. Inget därifrån är infört i v3 eller i `sources.json`.

Efter föredraget: sätt `status: done` när P1-punkterna är avgjorda. Repot stannar kvar som mall och minne: `AGENTS.md` är det som ska läsas först vid nästa liknande uppdrag.

## Mutationstest 2026-11-04, grenen `claude/mutation-2026-11-04`

Audit-kolumnen Mutation bedömd, inte körd: repot har ingen ren logik att mutera. `app.js` är 48 rader händelsehanterare mot DOM (sortering och kopiering) som `check_page.js` redan prövar i en riktig webbläsare, och `build.py` är en generator vars kontroller gäller datat i `sources.json`. Ett Stryker-varv mot UI-kod med `check_page.js` som enda test skulle ge en siffra utan värde. Raden under `## Audits` i `CONTEXT.md` säger `n/a` med motivering. Ingen kod ändrad.

## Automated audit batch, 2026-10-06

Cross-project run from elwyn-dash with aifabriken `tools/audit-suite.ts` (headers, npm audit, secrets, Actions, markup, axe at one mobile viewport; TLS and Lighthouse not run). Results are the `(automated)` lines under `## Audits` in CONTEXT.md, findings under `## Granskning 2026-10-06` in BACKLOG.md. axe fail (one contrast violation); markup 0 findings, 41 external links outside the suite's scope; headers fail because the orgutveckling.se CSP allows `script-src 'unsafe-inline'` (item in elwyndaz.github.io). No application code or deployment changed. `reviewedAt` was left alone: the goal and next action above were not reviewed.

## Källkontroll 2026-11-04, grenen `claude/kallor-2026-11-04` (PR #3, mergad i `main` 2026-11-05)

De fyra P1-punkterna om källor är avgjorda, med citat och sidor i `BACKLOG.md`. Ändringarna ligger i repots `konfliktkompetens.pptx`, `sources.json`, `og.png` och den byggda sidan. Arbetsmappens v3 är inte rörd, så den skiljer sig nu på fler ställen (ny P1-punkt under Presentationen).

- DeChurch m.fl. (2013) läst i fulltext: 13 % på s. 563, 2 % på s. 564. Bild 15 hänvisar direkt, utan O'Neill och McLarnon som mellanled.
- "En enstaka timme ger liten effekt utan övning" omformulerat på bild 22 och 26 med Lacerenza m.fl. (2017) som källa. Ny rad i `sources.json`, 42 texter, `og.png` omtagen.
- Bild 13: stödet för Glasls modell hos Scheppa-Lahyani och Zapf (2023) tillagt i manuset. Källraden på bildytan ("inte en statistiskt prövad modell") är inte ändrad, förslag i `BACKLOG.md`.
- Konfliktkunskapens ABC: 2006 bytt mot 2013 överallt (24 förekomster i bildspelet, år och APA-post i `sources.json`).
- de Wit m.fl. (2012): abstractet kontrollerat, siffrorna i manuset inte. Öppen kopia finns i Leidens arkiv men gick inte att hämta från sessionen.

Varje ändring i bildspelet är ett strängbyte i XML-delen med krav på exakt träffantal, övriga zip-delar byte för byte orörda. Inte renderat i PowerPoint. `build.py`, `tsc --strict` och `check_page.js` PASS. Inget deployat.

## Nattbatch 2026-10-06, grenen `batch/2026-10-06`

Fyra commits, sammanfogade med `main` och live på Pages 2026-10-07 på Patriks order. Pages serverar `main`, så sidan och den nedladdade filen är nu de nya.

- Kontrasten i nedladdningsrutan rättad, `check_page.js` fäller under 4,5:1.
- `sources.json`: Hao m.fl. har 168 urval, Juncadella 14 studier kontrollerat i fulltext. De två uppgifterna hämtades 2026-10-06, sidfoten och `CHECKED` säger fortfarande 2026-09-18 eftersom citeringarna inte hämtades om.
- `konfliktkompetens.pptx`: källraden på bild 24 säger nu Jordan (2014). Filen skiljer sig därmed från arbetsmappens v3 på det stället, och sidan anger 277 kB.
- Källkontroll av Jordan (pyramiden, A-hörnet) antecknad i `BACKLOG.md`, tillsammans med ett nytt fynd: Konfliktkunskapens ABC är daterad 2013 i PDF:en.

Orörda eftersom de kräver Patrik eller arbetsmappen: de tre P1-punkterna om manuset, de Wit-PDF:en, punkterna under Presentationen och gruppfiltret (villkoret "används mer än som referens" är inte uppfyllt).

## Förbättringsrunda 2026-11-04, grenen `claude/forbattringar-2026-11-04` (PR #1, mergad i `main` 2026-11-04)

Bara tillgänglighet och buggar. `sources.json` och bildspelet är orörda.

- Tryckytor 44 px: kopieringsknapparna (36 px synligt, `::before` når ut till cellens hörn) och nedladdningslänken (utfyllnad med negativ marginal, rutan växer inte). Svarar på UX-raden 2026-10-30 (Fitts-mål).
- `app.js`: när urklippet inte går att nå kastades ett ohanterat fel och inget hände. Nu säger statusraden "Kunde inte kopiera. Markera texten och kopiera för hand." Statusraden töms före varje ny text, så att två likadana kopieringar i rad läses upp båda gångerna.
- `check_page.js` prövar båda: tryckytorna och sidan utan urklipp. Båda testerna fäller på den gamla koden.

Verifierat: `build.py` PASS (41 rader), `tsc --strict` PASS, `check_page.js` PASS, axe-core 0 fel vid 390 och 1280 px. `check_page.js` kördes mot en kopia av live-sajtens `/style.css`, syskonrepot fanns inte i sessionen. Inget deployat. P1-punkterna i `BACKLOG.md` är orörda, de kräver Patrik.

## Funktionsrunda 2026-11-24, grenen `feat/2026-11-24`

Ingen öppen punkt i `BACKLOG.md` var en funktion eller användarbugg som går att bygga utan Patrik: P1- och P2-punkterna under Presentationen gäller arbetsmappens v3 och PowerPoint, de Wit-kapitlet kräver en manuell nedladdning, och gruppfiltret (P3) har villkoret "används mer än som referens". Sidan prövad live vid 390 och 1440 px: inga JS-fel, inga misslyckade anrop, ingen sidrullning.

- PR #1 till #4 är mergade i `main` (2026-11-04 och 2026-11-05) och live: `index.html` på orgutveckling.se/konflikt/ är byte för byte lika med `main`, och bildspelet har samma storlek (283 694 byte) live som i repot. Raderna ovan som sa "inte mergad" är rättade.
- `check_page.js` läste `/style.css` från `../elwyndaz.github.io`, som inte finns bredvid en worktree under `C:\dev\_wt`. Miljövariabeln `STYLE_CSS` pekar nu ut filen, se `AGENTS.md`.

Verifierat: `build.py` PASS (42 rader), `tsc --strict` PASS, `check_page.js` PASS.

## Buggjakt 2026-11-24, grenen `hunt/2026-11-24`

Sidan genomgången som deltagare vid 390 och 1440 px: första besök, sortering med mus och tangentbord, omladdning, tabbning framåt och bakåt genom tabellen, nedladdningen (283 694 byte live, samma som repot). Inga JS-fel eller misslyckade anrop live. Två buggar rättade, båda med test i `check_page.js` som fäller på den gamla koden, se `BACKLOG.md`:

- Tabbat fokus doldes bakom den klistrade textkolumnen (1440 px) och utanför ramen (390 px). `app.js` rullar fram fokus vid `:focus-visible`.
- Datumet i överraden bröts vid bindestrecket i mobil.

Verifierat: `build.py` PASS (42 rader), `tsc --strict` PASS, `check_page.js` PASS. Pushat till `main` (a090175), Pages-bygget gröna, live på https://orgutveckling.se/konflikt/: tabbning framåt och bakåt 0 dolda stopp vid 390 och 1440 px, datumet på en rad vid 390 px.

## Buggjakt 2 2026-11-24, grenen `hunt2/2026-11-24`

Det batch 6 inte gick: 404 under /konflikt/, alla länkar, Crossref-metadata mot tabellen, bildspelets siffror, sidan utan stilmall, skript eller typsnitt, andra besöket. Två fynd rättade, se `BACKLOG.md`: egen `404.html` (GitHubs engelska sida kom förut) och `og:description` plus sidfotens datum. Inga parkerade småbuggar från batch 5 eller 6 fanns kvar: öppna punkter kräver Patrik eller PowerPoint.

Verifierat: `build.py` PASS (42 rader), `tsc --strict` PASS, `check_page.js` PASS. Pushat till `main` (e0861b7), Pages-bygget klart, live: https://orgutveckling.se/konflikt/bildspel svarar 404 med den svenska sidan, `og:description` och sidfoten nya, 390 och 1440 px utan fel.

## Fartrunda 2026-11-25, grenen `speed/2026-11-25`

Mätt live med headless Playwright vid 390 px (4x CPU, Slow 4G) och 1440 px, sidan och `404.html`. Siffrorna står i `BACKLOG.md` under Sidan och som Performance- och Metadata-rader i `CONTEXT.md`. Inget att vinna på bilder (sidan har inga) eller skript (`app.js` laddas sist i body). Typsnittsraden är samma som på resten av sajten och lämnad orörd. Rättat: `meta description` och canonical saknades. axe-core 0 fel vid båda bredderna.

Verifierat: `build.py` PASS (42 rader), `tsc --strict` PASS, `check_page.js` PASS och FAIL mot den gamla `index.html`.
Pushat till `main` (e905e3c), Pages-bygget klart 02:16. Live på https://orgutveckling.se/konflikt/: description och canonical på plats, efter: LCP 1 864 ms och CLS 0,001 vid 390 px, LCP 228 ms och CLS 0,034 vid 1440 px, 265 kB, axe 0 fel. LCP-skillnaden mot före är brus, ändringen rör bara metadata.

## Scenariojakt 2026-11-25, grenen `p3/2026-11-25`

Scenarier som headless Playwright-skript (upprepad användning, två flikar, flik öppen över en deploy, bredd ändrad mitt i tabbning, 420 rader, nätfel för `app.js`, utskrift). Ett fynd: utskriften klippte tabellen till 7 av 42 rader. Rättat med `@media print` i `template.html`, `check_page.js` fäller på den gamla koden. Övriga scenarier utan fynd, se `BACKLOG.md`. Inga öppna P3-funktioner att bygga: de Wit kräver en manuell nedladdning, presentationspunkterna gäller PowerPoint, CLS-punkten hör till sajtens `style.css` och gruppfiltret har ett villkor som inte är uppfyllt.

Verifierat: `build.py` PASS (42 rader), `tsc --strict` PASS, `check_page.js` PASS. Pushat till `main` (f3d2f7a), Pages-bygget klart. Live på https://orgutveckling.se/konflikt/: utskriftsläget klipper 0 px, PDF:en har alla 42 texter på 5 A4-sidor, sorteringen fungerar, ingen sidrullning vid 390 px, inga JS-fel.

## Webbläsarrunda 2026-11-25, grenen `xb/2026-11-25`

Sidan prövad i WebKit (Playwright, playwright-core 1.64.1, webkit-2370, iPhone 13-profil) och Firefox (firefox-1555, 1440 px) mot Chromium: live för läsning, lokalt med `check_page.js` omkörd i varje motor. Ett fynd rättat: tabbat fokus i översta raden doldes under sidhuvudet i WebKit och Firefox, se `BACKLOG.md`. Utskriftsbredden i WebKit och Firefox lämnad som P3. Ingen riktig iPhone prövad. Livekontrollen visade att Cloudflare cachar `app.js` i 4 timmar, så `build.py` versionerar nu adressen med filens hash.

Verifierat: `build.py` PASS (42 rader), `tsc --strict` PASS, `check_page.js` PASS och FAIL mot den gamla `app.js`, fokuskontrollen 0 dolda i WebKit, Firefox och Chromium.
Pushat till `main` (3d1a11d, 0934522), Pages-bygget klart. Live på https://orgutveckling.se/konflikt/ med `app.js?v=0e6246c1`: översta raden plus 30 tabbstopp 0 dolda vid 390 och 1440 px i WebKit (Playwright), Firefox och Chromium; i WebKit med iPhone 13-profil ger tryck på Citeringar sortering och tryck på kopieringsknappen kvittot, ingen sidrullning.

## Preferensrunda 2026-11-25, grenen `prefs/2026-11-25`

Svensk text genomläst och sidan prövad i headless Chromium med mörkt läge, reducerad rörelse, 200 % zoom vid 1280 och 390 px och tvingade färger, se `BACKLOG.md`. Tre fynd rättade: kopieringskvittot syntes inte i tvingade färger (test i `check_page.js`), `404.html` rullade i sidled vid 200 % zoom i mobil, och sidfotens "och" och "&" är kursiverade så att de läses som exempel. Mörkt läge finns inte på sajten och lades inte till.

Verifierat: `build.py` PASS (42 rader), `tsc --strict` PASS, `check_page.js` PASS och FAIL mot den gamla `index.html`.
Pushat till `main` (d2d1781), Pages-bygget klart. Live på https://orgutveckling.se/konflikt/ och 404-sidan: samma preferenskontroll PASS (mörkt läge, reducerad rörelse, 200 % zoom vid 1280 och 390 px utan sidrullning, fokusringar i tvingade färger), och kopieringskvittot får systemfärgen Highlight i tvingade färger.
