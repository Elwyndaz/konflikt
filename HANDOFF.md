---
schemaVersion: 1
status: active
currentGoal: Källtabellen ska stämma och vara användbar inför föredraget 2026-09-21.
nextAction: Patrik granskar källkontrollen 2026-11-04 (PR #3) och för över ändringarna i bildspelet till arbetsmappens v3.
blockers: []
reviewedAt: 2026-10-07
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

## Källkontroll 2026-11-04, grenen `claude/kallor-2026-11-04` (PR #3, inte mergad)

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

## Förbättringsrunda 2026-11-04, grenen `claude/forbattringar-2026-11-04` (PR #1, inte mergad)

Bara tillgänglighet och buggar. `sources.json` och bildspelet är orörda.

- Tryckytor 44 px: kopieringsknapparna (36 px synligt, `::before` når ut till cellens hörn) och nedladdningslänken (utfyllnad med negativ marginal, rutan växer inte). Svarar på UX-raden 2026-10-30 (Fitts-mål).
- `app.js`: när urklippet inte går att nå kastades ett ohanterat fel och inget hände. Nu säger statusraden "Kunde inte kopiera. Markera texten och kopiera för hand." Statusraden töms före varje ny text, så att två likadana kopieringar i rad läses upp båda gångerna.
- `check_page.js` prövar båda: tryckytorna och sidan utan urklipp. Båda testerna fäller på den gamla koden.

Verifierat: `build.py` PASS (41 rader), `tsc --strict` PASS, `check_page.js` PASS, axe-core 0 fel vid 390 och 1280 px. `check_page.js` kördes mot en kopia av live-sajtens `/style.css`, syskonrepot fanns inte i sessionen. Inget deployat. P1-punkterna i `BACKLOG.md` är orörda, de kräver Patrik.
