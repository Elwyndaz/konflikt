# BACKLOG

## Byggt

- Sorterbar källtabell med 41 texter, APA 7-referenser och kopieringsknappar, live på orgutveckling.se/konflikt/ (2026-09-18).
- `build.py` med datavalidering, strikt typkontroll av `app.js`, webbläsarkontroll i `check_page.js`.

## Källkontroll före 2026-09-21

- [ ] `[P1]` DeChurch m.fl. (2013): de 13 % står i abstractet, de 2 % är bara belagda via O'Neill & McLarnon (2018). Hämta artikeln via universitetsbiblioteket och kontrollera stället. Filen med det namnet i arbetsmappen är i själva verket Yuan m.fl. (2026). **Kontrollerat 2026-09-18 kl. 16:10:** rätt artikel ligger nu i `artiklar\` (namnkontrollerad). Stället står på s. 564: hanteringen förklarar 15 % av prestationen, konflikttyp ytterligare 2 %, men 19 % av trivseln i gruppen. Kvar för Patrik: föra in i v3 och byta "refererad i" mot direkt hänvisning.
- [ ] `[P1]` Påståendet "en enstaka timme ger liten effekt utan övning" (talarmanus bild 22 och 26) saknar källa. Hitta den eller stryk. **Förslag 2026-09-18:** ingen exakt källa finns. McEwan m.fl. (2017, https://doi.org/10.1371/journal.pone.0169604, tabell 3, fulltext läst) bär en försiktigare formulering: ren föreläsning gav ingen säkerställd effekt på samarbetet (d = 0,19, 4 insatser), workshop 0,50, simulering 0,78, men skillnaden mellan metoderna var inte säkerställd (p = 0,10). Taylor m.fl. (2009, https://doi.org/10.1037/a0013006, abstract): överföringen var störst när utbildningen innehöll övning.
- [ ] `[P1]` Talarmanus bild 13 nämner bara förbehållet hos Scheppa-Lahyani & Zapf (2023). Deras abstract säger också att studierna ger stöd åt Glasls modell. Förslag på tillägg lämnat, väntar på ja eller nej.
- [x] `[P2]` Juncadella (2013): kontrollera att det är en översikt med 14 studier, så som manuset på bild 21 säger. **Kontrollerat 2026-10-06 i fulltext** (PDF:en på postens länk, författarnamnet står på s. 1 och 2): abstractet (s. 5 i filen) kallar arbetet "systematic review" och säger "From 2634 citations, fourteen studies were identified, citing thirteen experiments". Samma uppgift i metodkapitlet (s. 28 i filen). Manuset stämmer. Infört i `sources.json` som `14 (13 försök)*`.
- [x] `[P2]` Jordans arbetsblad: källbild 28 säger 2006, läslistan och manuset 2014. Avgör och rätta den som har fel. **Avgjort 2026-10-06: 2014.** Instruktionens egen sidfot (s. 1 i PDF:en på postens länk, läst som renderad bild) lyder "Thomas Jordan, [...], 2014". I den publicerade filen stod 2006 bara i källraden på bild 24 (källbilden, manuset och `sources.json` hade redan 2014). Rättat i `konfliktkompetens.pptx` här i repot: en zip-del ändrad, övriga byte för byte orörda. Arbetsmappens v3 är inte rörd, se punkten under Presentationen.
- [x] `[P2]` Jordan (2006) som källa till pyramiden och de tre förändringarna i A-hörnet (dolda bilder 30 och 34): PDF:en saknar textlager, kontrollera vid läsning. **Kontrollerat 2026-10-06** mot PDF:en på postens länk, sidorna lästa som renderade bilder (bilderna har i dag nummer 31 och 35). Pyramiden: avsnittet Isbergsprincipen, s. 9 till 10, figur 3, med nivåerna presenterat problem, dold agenda och omedvetet. Manuset följer texten. A-hörnet: s. 12, styckena Kognition, Känslor och Motivation. Bildens punkter står där. Två nyanser: källan skriver "de mest komplexa förändringarna", bilden "de mest genomgripande", och källan kallar de tre styckena "några exempel", manuset "sammanfattar tre förändringar". "Utan att vi märker det" står inte på s. 12. Årtalet är en egen punkt nedan.
- [ ] `[P1]` **Nytt 2026-10-06:** Konfliktkunskapens ABC är daterad 2013, inte 2006. PDF:en på postens länk har sidhuvudet "Jordan, T. (2013). Konfliktkunskapens ABC, version 2, Institutionen för sociologi och arbetsvetenskap, Göteborgs universitet" och rubriken "(version 2, 2013)". Materialet skriver Jordan (2006) i `sources.json`, på bilderna 4 till 10, 15, 28, 31 och 35 och i deras manus. Förslag: `Jordan, T. (2013). *Konfliktkunskapens ABC* (version 2). Göteborgs universitet.` och Jordan (2013) i alla hänvisningar. Inte ändrat: det rör hela bildspelet och är Patriks beslut. Kontrollera först om filen i arbetsmappen är en äldre utgåva från 2006.
- [x] `[P3]` Hao m.fl. (2022): antal studier okänt, abstractet gick inte att hämta öppet. Fyll i `n` i `sources.json`. **Ifyllt 2026-10-06:** abstractet står i klartext i metataggen `dc.description` på förlagets artikelsida (link.springer.com, DOI kontrollerad mot `citation_doi`): k = 168 oberoende urval, N = 63 134 anställda. OpenAlex och Semantic Scholar saknar abstractet.
- [ ] `[P3]` de Wit m.fl. (2012) saknas i arbetsmappen (filen med det namnet är Behfar m.fl. 2008).

## Presentationen (ligger utanför repot)

- [ ] `[P2]` Prova en länk i talarmanuset i PowerPoint (Ctrl+klick i anteckningsfönstret). Länkarna finns i filen men ingen är klickad.
- [ ] `[P2]` Generatorn `deck3.js` saknar ändringen på bild 8 och APA-manuset. Ombyggnad är `node deck3.js`, `tri.py`, `apa_notes.py`, plus bild 8 för hand. Synka när ändringsrundan är klar.
- [ ] `[P3]` Rubrikerna är textrutor, inte rubrikplatshållare: PowerPoints tillgänglighetskontroll kan klaga.
- [ ] `[P3]` Roboto Condensed hittades inte som installerat typsnitt. Kontrollera på presentationsdatorn.
- [ ] `[P2]` Arbetsmappens v3 har kvar "Arbetsblad: Jordan (2006)" i källraden på bild 24. Byt till 2014 där också, annars skrivs rättelsen i repots `konfliktkompetens.pptx` över nästa gång filen kopieras hit.

## Sidan

- [ ] `[P3]` Filter per grupp (A till D) om tabellen börjar användas mer än som referens. Sortering på gruppkolumnen räcker i dag.

## Granskning 2026-10-06

Fynd från den automatiska sviten (aifabriken `tools/audit-suite.ts`: headers, npm audit, secrets, Actions, markup, axe). Mätvärdena står som `(automated)`-rader under `## Audits` i CONTEXT.md.

- [x] `[P2]` WCAG: `.hamta > .eyebrow` har kontrast 4,04:1 (#6b675c på #dfdacd, 11 px). Kravet är 4,5:1. **Rättat 2026-10-06:** `.hamta .eyebrow` får `--brod` i `template.html`, och `check_page.js` räknar kontrasten och fäller under 4,5:1. Inte live förrän grenen `batch/2026-10-06` är sammanfogad med `main`.
