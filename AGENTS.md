# AGENTS

Det som kostade tid 2026-09-18, skrivet så att nästa föredrag eller litteraturuppdrag går fortare. Vad repot är står i `CONTEXT.md`, öppna punkter i `BACKLOG.md`.

## Verifiera i det här repot

```
uv run python build.py        # PASS eller AssertionError som säger vilken rad
npx -y -p typescript tsc --allowJs --checkJs --strict --noEmit --target es2022 --lib es2022,dom,dom.iterable app.js
node check_page.js            # PASS eller FAIL med det som skilde
```

Ändra data i `sources.json`, aldrig i `index.html`. Bygg, kör alla tre, committa båda filerna.

## Källarbete

- **Filnamn ljuger.** Två nedladdade PDF:er var byte för byte samma fil som en annan artikel. Kör `cmp` mot syskonfilerna eller sök på förstaförfattarens namn i texten innan filnamnet litas på.
- **Tre nivåer av kontroll, antecknade per påstående:** fulltext, abstract, andrahand. En siffra som står på en bild ska vara kontrollerad minst i artikelns eget abstract. Skriv nivån i läslistan när påståendet skrivs, inte efteråt.
- **Läs abstractet även för källor som bara citeras i förbifarten.** Det hittade två saker: en siffra som bara var belagd i andra hand stod ordagrant i originalets abstract, och ett påstående i manuset var snedare än källan (artikeln gav stöd åt modellen, manuset nämnde bara förbehållet).
- **Öppna API:er, i den här ordningen:** Crossref (`api.crossref.org/works/<doi>`) för författare, full titel, volym, sidor och `is-referenced-by-count`. OpenAlex (`api.openalex.org/works/doi:<doi>`, fältet `abstract_inverted_index`) för abstract. Saknas det (vanligt för Elsevier och Springer): Semantic Scholar (`/graph/v1/paper/DOI:<doi>?fields=abstract`), sedan PubMed E-utilities (`esearch` på `<doi>[doi]`, `efetch` med `rettype=abstract`). Förlagens egna sidor svarar med inloggning eller kakruta.
- **Skicka aldrig en e-postadress till ett API.** Crossref och OpenAlex svarar utan `mailto=`. Säg det uttryckligen i varje agentprompt som får webbverktyg.
- **Crossref-citeringar är lägre än Google Scholar** (bara verk med DOI räknas). Jämför inom listan, inte mot Scholar. Lågt tal betyder oftast ny artikel.
- **Databasernas år är ofta nätåret.** APA vill ha tryckåret: ta volym, häfte och år ur Crossref `published-print`.
- **PDF utan textlager går inte att ordsöka.** Säg det och flagga påståendet som okontrollerat i stället för att tillskriva ur minnet.
- **pypdf skriver hundratals kB varningar på stderr.** Kör med `2>/dev/null` och låt skriptet skriva egna korta träffrader.
- **Påstå inte mer än källan bär.** "Konflikt är nyttigt" ströks ur föredraget eftersom metaanalysen visar negativa samband för alla fyra konflikttyper. Samband är inte orsak: skriv "hänger ihop med".

## APA 7 på svenska

- Tre eller fler författare: `m.fl.` från första hänvisningen. Två: `och` i löptext, `&` inom parentes. Komma före årtalet inom parentes.
- Andrahandskälla: `(DeChurch m.fl., 2013, refererad i O'Neill & McLarnon, 2018)`, och bara den lästa källan i referenslistan.
- Utan år: `u.å.`. Artikel utan sidnummer: `Artikel 890`. Titlar i meningsversal, versal efter kolon. Upp till 20 författare skrivs ut.

## PowerPoint med python-pptx

- **Har användaren sparat filen i PowerPoint: redigera på plats, bygg inte om från generatorn.** Ombyggnad kastar handgjorda ändringar. Notera generatorns eftersläpning i `BACKLOG.md`.
- **Före varje skrivning:** finns en `~$`-låsfil är filen öppen, avbryt. Kopiera originalet till en tillfällig mapp. Skriv till en kopia, kontrollera, kopiera sedan över.
- **Byt text med `run.text`, inte genom att skapa nya stycken.** Typsnitt, storlek och färg sitter på run-nivå och ärvs då gratis.
- **Patchskript ska kunna misslyckas högt:** `assert text.count(old) == 1` per ersättning, och en vakt som vägrar köra två gånger.
- **Jämför innebörd, inte bytes.** En pptx är en zip med XML som serialiseras om vid varje sparning, så en byte-jämförelse larmar på allt. Jämför form, position, text och dold-flagga per bild.
- **Talarmanus:** pptxgenjs lägger hela manuset i ett stycke med råa radmatningar. Dela upp det i riktiga stycken. Länk sätts med `run.hyperlink.address`. PowerPoints `NotesPage.Hyperlinks` ger 0 ändå: räkna `Run.ActionSettings(1).Hyperlink.Address` per textkörning över COM.
- **Rendera med PowerPoint över COM** (`Presentations.Open(path, $true, $false, $false)`, `Slide.Export(png, "PNG", 1600, 900)`). Det är exakt den bild användaren själv ser. Rendera till en ny tom mapp.
- **Kontrast:** kör en WCAG-kontroll över alla textkörningar efter varje ändring, inte bara de bilder som rördes.

## Sidan

- **Projektrepo på samma domän ärver sajtens `/style.css`.** Ingen kopia av designsystemet behövs. I testet besvaras `/style.css` från syskonrepot.
- **`tsc --checkJs --strict` på ren JS hittade ett riktigt fel:** `const status` på toppnivå krockar med `window.status`. Döp inte toppnivåvariabler efter globala namn (`status`, `name`, `top`, `event`).
- **Urklipp kräver säker kontext.** I testet: `http://localhost/...`, inte ett påhittat värdnamn, annars är `navigator.clipboard` odefinierat. Skrivningen är asynkron: vänta på kvittoklassen innan urklippet läses.
- **`ClipboardItem` med både `text/plain` och `text/html`** gör att kursiven följer med till Word.
- **Pilar i `::after` hamnar i knappens tillgängliga namn.** Skriv `content:"\2195" / ""`, riktningen kommer ändå från `aria-sort`.
- **Klistrade celler kräver `border-collapse:separate`.** Med `collapse` följer kantlinjerna inte med och innehåll lyser igenom. En klistrad kolumn i mobil åt 70 % av bredden: slå bara på den från 760 px.
- **Pröva bredare än den egna testskärmen.** Första versionen testades vid 1440 och 375 px och rullade i sidled på en bred skärm fast allt hade rymts: sajtens `.wrap` är låst till 1440 px och tabellen hade `width:max-content` med fasta kolumnbredder. Nu: `.wrap{max-width:none}` på den här sidan, `width:100%` på tabellen och bara `min-width` på textkolumnerna. `check_page.js` kräver noll sidrullning vid 1920 och 2560 px.
- **Tomma värden sorteras sist åt båda hållen,** annars fyller de toppen vid fallande sortering.
- **`sed` med bakstreck i Git Bash på Windows felar** ("Invalid back reference"). Använd redigeringsverktyget för CSS med `\2195` och liknande.

## Arbetssätt

- **Fråga tidigt var resultatet ska läsas.** Samma lista levererades fyra gånger (punktlista, med länkar, flera tabeller, en tabell) innan det stod klart att den skulle vara sorterbar i en webbläsare. En referenstabell med fler än fem kolumner hör hemma på en sida, inte i en chatt.
- **Tvetydig instruktion, liten och ångerbar ändring:** gör den rimligaste tolkningen, säkerhetskopiera först, säg vilken tolkning som valdes och hur man backar.
- **En kontroll ger en dom, inte en logg:** en rad PASS eller FAIL, vid fel bara det som skilde. En kontroll som skriver ut 80 rader är själv trasig.
- **Hittar du något som motsäger materialet, rätta inte tyst.** Säg vad källan säger, vad materialet säger, och föreslå en formulering.
