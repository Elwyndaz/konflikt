# CONTEXT

## Vad det här är

En olänkad arbetssida på https://orgutveckling.se/konflikt/ : en sorterbar tabell över de 41 källorna bakom ett föredrag om konflikter på jobbet (2026-09-21). Per källa: läsnivå, kortnamn, klickbar titel (länkar till DOI eller webbadress), år, citeringar, undersökt population, antal studier (för översikter och metaanalyser), APA 7-referens, hänvisning i löptext och inom parentes. Någon egen länkkolumn finns inte: länken sitter i titeln och sist i APA-referensen. Referenserna har en kopieringsknapp som tar med kursiven.

Repot är också minnet inför nästa liknande uppdrag: arbetssättet står i `AGENTS.md`.

## Vad som INTE ligger här, och varför

GitHub Pages på gratisnivån kräver ett publikt repo. Därför ligger bara sådant som tål att vara offentligt här. Presentationen, talarmanuset, läslistan och alla PDF:er (upphovsrättsskyddade) ligger i en arbetsmapp utanför `C:\dev`. Sökvägen står i valvets dagsnot 2026-09-18.

## Filer

| Fil | Roll |
|---|---|
| `sources.json` | Enda källan till datat. En post per text, i läsordning. |
| `template.html` | Sidan med platshållare (`{{rows}}` med flera) och tabellens CSS. |
| `build.py` | `sources.json` + `template.html` -> `index.html`. Validerar datat med `assert`. |
| `index.html` | Byggd fil, incheckad eftersom Pages serverar repot rakt av. Redigera aldrig för hand. |
| `app.js` | Sortering och kopiering, ren JS med `// @ts-check`. |
| `check_page.js` | Prövar den byggda sidan i Chromium: sortering, kopiering, mobilbredd. |
| `.nojekyll` | Stänger av Jekyll på Pages, så filerna serveras som de är. |

## Datamodell (`sources.json`)

`grupp` (A läs hela, B abstract plus ett ställe, C bara abstract, D hoppa över), `kort` (visningsnamn), `cite` (författardelen i en hänvisning, med `&`), `ar` (heltal eller `null` för u.å.), `cit` (Crossref-citeringar eller `null`), `pop`, `studier` (visad text eller `null`), `n` (tal att sortera antal studier på, valfritt), `apa` (referensen utan länk, `*kursiv*`), `url`.

Löptext och parentes räknas fram i `build.py` ur `cite` och `ar`: `&` blir `och` i löptext. Titeln läses ur `apa` (kursiven direkt efter året, annars texten fram till tidskriften). Fältet `titel` går före och behövs bara där regeln inte räcker, i dag bokkapitlet av Glasl. Radnumret är postens plats i filen, alltså läsordningen.

## Design

Sidan länkar `/style.css` från orgutveckling.se (repot `elwyndaz.github.io`) och ärver färger, typsnitt, sidhuvud och `.page-head`. Bara tabellen stilas lokalt, i `template.html`. Ändras sajtens tokens följer sidan med av sig själv. Sorteringsmönstret (`aria-sort` på `th`, knapp i rubriken) kommer från `CellarTable` i repot `flaskor`.

## Hosting och synlighet

Projektrepo under `Elwyndaz`, Pages från `main` och roten. Eftersom `elwyndaz.github.io` har domänen orgutveckling.se hamnar repot på `/konflikt/` utan egen DNS. Sidan har `noindex, nofollow` och är inte länkad från sajten eller sitemap. Den får inte spärras i `robots.txt`: då läser Google aldrig `noindex`.
