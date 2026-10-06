---
schemaVersion: 1
status: active
currentGoal: Källtabellen ska stämma och vara användbar inför föredraget 2026-09-21.
nextAction: Patrik granskar grenen batch/2026-10-06 och slår ihop den med main (då går ändringarna live på Pages). Sedan P1-punkterna i BACKLOG.md, först årtalet för Konfliktkunskapens ABC (2013 enligt PDF:en, 2006 i materialet).
blockers: []
reviewedAt: 2026-10-06
---

# HANDOFF

Bildspelet ligger sedan 2026-09-21 i repot som `konfliktkompetens.pptx`, med en nedladdningsruta överst på sidan. Filstorleken står i klartext i `template.html`: byts filen ut måste siffran följa med. Beslutet att publicera hela filen, talarstöd och allt, står i `CONTEXT.md`.

Sidan byggdes och publicerades 2026-09-18. Citeringar och abstract hämtades samma dag (datumet står som `CHECKED` i `build.py`, ändra det när siffrorna hämtas om).

En oberoende omkörning av hela uppdraget (analys, läslista med 38 källor, 28 bilder, metod) ligger i arbetsmappens undermapp `claude\` sedan 2026-09-18 kl. 16:30. Den svarar på två av P1-punkterna, se `BACKLOG.md`. Inget därifrån är infört i v3 eller i `sources.json`.

Efter föredraget: sätt `status: done` när P1-punkterna är avgjorda. Repot stannar kvar som mall och minne: `AGENTS.md` är det som ska läsas först vid nästa liknande uppdrag.

## Automated audit batch, 2026-10-06

Cross-project run from elwyn-dash with aifabriken `tools/audit-suite.ts` (headers, npm audit, secrets, Actions, markup, axe at one mobile viewport; TLS and Lighthouse not run). Results are the `(automated)` lines under `## Audits` in CONTEXT.md, findings under `## Granskning 2026-10-06` in BACKLOG.md. axe fail (one contrast violation); markup 0 findings, 41 external links outside the suite's scope; headers fail because the orgutveckling.se CSP allows `script-src 'unsafe-inline'` (item in elwyndaz.github.io). No application code or deployment changed. `reviewedAt` was left alone: the goal and next action above were not reviewed.

## Nattbatch 2026-10-06, grenen `batch/2026-10-06`

Fyra commits ovanpå `main`, inget sammanfogat och inget live. Pages serverar `main`, så sidan och den nedladdade filen ändras först vid sammanslagning.

- Kontrasten i nedladdningsrutan rättad, `check_page.js` fäller under 4,5:1.
- `sources.json`: Hao m.fl. har 168 urval, Juncadella 14 studier kontrollerat i fulltext. De två uppgifterna hämtades 2026-10-06, sidfoten och `CHECKED` säger fortfarande 2026-09-18 eftersom citeringarna inte hämtades om.
- `konfliktkompetens.pptx`: källraden på bild 24 säger nu Jordan (2014). Filen skiljer sig därmed från arbetsmappens v3 på det stället, och sidan anger 277 kB.
- Källkontroll av Jordan (pyramiden, A-hörnet) antecknad i `BACKLOG.md`, tillsammans med ett nytt fynd: Konfliktkunskapens ABC är daterad 2013 i PDF:en.

Orörda eftersom de kräver Patrik eller arbetsmappen: de tre P1-punkterna om manuset, de Wit-PDF:en, punkterna under Presentationen och gruppfiltret (villkoret "används mer än som referens" är inte uppfyllt).
