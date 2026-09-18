# BACKLOG

## Byggt

- Sorterbar källtabell med 41 texter, APA 7-referenser och kopieringsknappar, live på orgutveckling.se/konflikt/ (2026-09-18).
- `build.py` med datavalidering, strikt typkontroll av `app.js`, webbläsarkontroll i `check_page.js`.

## Källkontroll före 2026-09-21

- [ ] `[P1]` DeChurch m.fl. (2013): de 13 % står i abstractet, de 2 % är bara belagda via O'Neill & McLarnon (2018). Hämta artikeln via universitetsbiblioteket och kontrollera stället. Filen med det namnet i arbetsmappen är i själva verket Yuan m.fl. (2026). **Kontrollerat 2026-09-18 kl. 16:10:** rätt artikel ligger nu i `artiklar\` (namnkontrollerad). Stället står på s. 564: hanteringen förklarar 15 % av prestationen, konflikttyp ytterligare 2 %, men 19 % av trivseln i gruppen. Kvar för Patrik: föra in i v3 och byta "refererad i" mot direkt hänvisning.
- [ ] `[P1]` Påståendet "en enstaka timme ger liten effekt utan övning" (talarmanus bild 22 och 26) saknar källa. Hitta den eller stryk. **Förslag 2026-09-18:** ingen exakt källa finns. McEwan m.fl. (2017, https://doi.org/10.1371/journal.pone.0169604, tabell 3, fulltext läst) bär en försiktigare formulering: ren föreläsning gav ingen säkerställd effekt på samarbetet (d = 0,19, 4 insatser), workshop 0,50, simulering 0,78, men skillnaden mellan metoderna var inte säkerställd (p = 0,10). Taylor m.fl. (2009, https://doi.org/10.1037/a0013006, abstract): överföringen var störst när utbildningen innehöll övning.
- [ ] `[P1]` Talarmanus bild 13 nämner bara förbehållet hos Scheppa-Lahyani & Zapf (2023). Deras abstract säger också att studierna ger stöd åt Glasls modell. Förslag på tillägg lämnat, väntar på ja eller nej.
- [ ] `[P2]` Juncadella (2013): kontrollera att det är en översikt med 14 studier, så som manuset på bild 21 säger.
- [ ] `[P2]` Jordans arbetsblad: källbild 28 säger 2006, läslistan och manuset 2014. Avgör och rätta den som har fel.
- [ ] `[P2]` Jordan (2006) som källa till pyramiden och de tre förändringarna i A-hörnet (dolda bilder 30 och 34): PDF:en saknar textlager, kontrollera vid läsning.
- [ ] `[P3]` Hao m.fl. (2022): antal studier okänt, abstractet gick inte att hämta öppet. Fyll i `n` i `sources.json`.
- [ ] `[P3]` de Wit m.fl. (2012) saknas i arbetsmappen (filen med det namnet är Behfar m.fl. 2008).

## Presentationen (ligger utanför repot)

- [ ] `[P2]` Prova en länk i talarmanuset i PowerPoint (Ctrl+klick i anteckningsfönstret). Länkarna finns i filen men ingen är klickad.
- [ ] `[P2]` Generatorn `deck3.js` saknar ändringen på bild 8 och APA-manuset. Ombyggnad är `node deck3.js`, `tri.py`, `apa_notes.py`, plus bild 8 för hand. Synka när ändringsrundan är klar.
- [ ] `[P3]` Rubrikerna är textrutor, inte rubrikplatshållare: PowerPoints tillgänglighetskontroll kan klaga.
- [ ] `[P3]` Roboto Condensed hittades inte som installerat typsnitt. Kontrollera på presentationsdatorn.

## Sidan

- [ ] `[P3]` Filter per grupp (A till D) om tabellen börjar användas mer än som referens. Sortering på gruppkolumnen räcker i dag.
