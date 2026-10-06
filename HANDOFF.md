---
schemaVersion: 1
status: active
currentGoal: Källtabellen ska stämma och vara användbar inför föredraget 2026-09-21.
nextAction: Patrik läser grupp A i tabellens ordning och svarar på P1-punkterna i BACKLOG.md. Rättelser förs in i sources.json, sedan build.py, kontrollerna och push.
blockers: []
reviewedAt: 2026-09-21
---

# HANDOFF

Bildspelet ligger sedan 2026-09-21 i repot som `konfliktkompetens.pptx`, med en nedladdningsruta överst på sidan. Filstorleken står i klartext i `template.html`: byts filen ut måste siffran följa med. Beslutet att publicera hela filen, talarstöd och allt, står i `CONTEXT.md`.

Sidan byggdes och publicerades 2026-09-18. Citeringar och abstract hämtades samma dag (datumet står som `CHECKED` i `build.py`, ändra det när siffrorna hämtas om).

En oberoende omkörning av hela uppdraget (analys, läslista med 38 källor, 28 bilder, metod) ligger i arbetsmappens undermapp `claude\` sedan 2026-09-18 kl. 16:30. Den svarar på två av P1-punkterna, se `BACKLOG.md`. Inget därifrån är infört i v3 eller i `sources.json`.

Efter föredraget: sätt `status: done` när P1-punkterna är avgjorda. Repot stannar kvar som mall och minne: `AGENTS.md` är det som ska läsas först vid nästa liknande uppdrag.

## Automated audit batch, 2026-10-06

Cross-project run from elwyn-dash with aifabriken `tools/audit-suite.ts` (headers, npm audit, secrets, Actions, markup, axe at one mobile viewport; TLS and Lighthouse not run). Results are the `(automated)` lines under `## Audits` in CONTEXT.md, findings under `## Granskning 2026-10-06` in BACKLOG.md. axe fail (one contrast violation); markup 0 findings, 41 external links outside the suite's scope; headers fail because the orgutveckling.se CSP allows `script-src 'unsafe-inline'` (item in elwyndaz.github.io). No application code or deployment changed. `reviewedAt` was left alone: the goal and next action above were not reviewed.
