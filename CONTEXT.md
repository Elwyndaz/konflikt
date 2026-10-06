# CONTEXT

## Vad det här är

En olänkad arbetssida på https://orgutveckling.se/konflikt/ : en sorterbar tabell över de 41 källorna bakom ett föredrag om konflikter på jobbet (2026-09-21). Per källa: läsnivå, kortnamn, klickbar titel (länkar till DOI eller webbadress), år, citeringar, undersökt population, antal studier (för översikter och metaanalyser), APA 7-referens, hänvisning i löptext och inom parentes. Någon egen länkkolumn finns inte: länken sitter i titeln och sist i APA-referensen. Referenserna har en kopieringsknapp som tar med kursiven.

Sidan har också en nedladdningsruta överst: deltagarna hämtar bildspelet därifrån.

Repot är också minnet inför nästa liknande uppdrag: arbetssättet står i `AGENTS.md`.

## Vad som INTE ligger här, och varför

GitHub Pages på gratisnivån kräver ett publikt repo. Därför ligger bara sådant som tål att vara offentligt här. Talarmanuset, läslistan och alla PDF:er (upphovsrättsskyddade) ligger i en arbetsmapp utanför `C:\dev`. Sökvägen står i valvets dagsnot 2026-09-18.

Bildspelet låg tidigare bara i arbetsmappen. Patrik beslöt 2026-09-21 att publicera det här, i sin helhet, så att deltagarna kan ladda ner det. Det betyder att talarstödet i anteckningsfältet är offentligt, inklusive de egna förbehållen om enskilda studier. Vill man ta bort dem behövs en separat deltagarversion utan anteckningar.

## Filer

| Fil | Roll |
|---|---|
| `sources.json` | Enda källan till datat. En post per text, i läsordning. |
| `template.html` | Sidan med platshållare (`{{rows}}` med flera) och tabellens CSS. |
| `build.py` | `sources.json` + `template.html` -> `index.html`. Validerar datat med `assert`. |
| `index.html` | Byggd fil, incheckad eftersom Pages serverar repot rakt av. Redigera aldrig för hand. |
| `app.js` | Sortering och kopiering, ren JS med `// @ts-check`. |
| `check_page.js` | Prövar den byggda sidan i Chromium: sortering, kopiering, mobilbredd. |
| `konfliktkompetens.pptx` | Bildspelet som deltagarna laddar ner. Kopia av arbetsmappens `Konfliktkompetens_f_r_ABF_Sverige_v3.pptx`, byt ut den filen här när den ändras. |
| `.nojekyll` | Stänger av Jekyll på Pages, så filerna serveras som de är. |

## Datamodell (`sources.json`)

`grupp` (A läs hela, B abstract plus ett ställe, C bara abstract, D hoppa över), `kort` (visningsnamn), `cite` (författardelen i en hänvisning, med `&`), `ar` (heltal eller `null` för u.å.), `cit` (Crossref-citeringar eller `null`), `pop`, `studier` (visad text eller `null`), `n` (tal att sortera antal studier på, valfritt), `apa` (referensen utan länk, `*kursiv*`), `url`.

Löptext och parentes räknas fram i `build.py` ur `cite` och `ar`: `&` blir `och` i löptext. Titeln läses ur `apa` (kursiven direkt efter året, annars texten fram till tidskriften). Fältet `titel` går före och behövs bara där regeln inte räcker, i dag bokkapitlet av Glasl. Radnumret är postens plats i filen, alltså läsordningen.

## Design

Sidan länkar `/style.css` från orgutveckling.se (repot `elwyndaz.github.io`) och ärver färger, typsnitt, sidhuvud och `.page-head`. Bara tabellen stilas lokalt, i `template.html`. Ändras sajtens tokens följer sidan med av sig själv. Sorteringsmönstret (`aria-sort` på `th`, knapp i rubriken) kommer från `CellarTable` i repot `flaskor`.

## Hosting och synlighet

Projektrepo under `Elwyndaz`, Pages från `main` och roten. Eftersom `elwyndaz.github.io` har domänen orgutveckling.se hamnar repot på `/konflikt/` utan egen DNS. Sidan har `noindex, nofollow` och är inte länkad från sajten eller sitemap. Den får inte spärras i `robots.txt`: då läser Google aldrig `noindex`.

## Audits
- Headers (automated): 2026-10-06, fail, 1 targets; 1 failed, 0 blocked; evidence C:/dev/aifabriken/.runs/audits/2026-10-06-batch-a/konflikt.json
- npm audit (automated): 2026-10-06, n/a, No package.json in repository; evidence C:/dev/aifabriken/.runs/audits/2026-10-06-batch-a/konflikt.json
- Secrets (automated): 2026-10-06, pass, 2 targets; 0 failed, 0 blocked; evidence C:/dev/aifabriken/.runs/audits/2026-10-06-batch-a/konflikt.json
- Actions (automated): 2026-10-06, n/a, no GitHub Actions workflows; evidence C:/dev/aifabriken/.runs/audits/2026-10-06-batch-a/konflikt.json
- Markup (automated): 2026-10-06, blocked, 1 targets; 0 failed, 1 blocked; evidence C:/dev/aifabriken/.runs/audits/2026-10-06-batch-a2/konflikt.json
- WCAG 2.2 AA (automated): 2026-10-06, fail, 1 targets; 1 failed, 0 blocked; evidence C:/dev/aifabriken/.runs/audits/2026-10-06-batch-a2/konflikt.json

