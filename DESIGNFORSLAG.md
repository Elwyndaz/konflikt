# DESIGNFÖRSLAG

Oberoende förslag på hur ett system för rangordnade påståenden inom arbets- och
organisationspsykologi borde byggas. Ingen kod skriven, inget byggt.

**Om källmarkeringen i det här dokumentet:** i den miljö förslaget skrevs i var all
utgående nättrafik blockerad utom söktjänsten. Jag har därför **inte kunnat öppna en enda
källa**. Ingenting är markerat `[kontrollerad]`, eftersom det vore osant. Där jag har sett
titel, tidskrift, DOI eller webbadress i ett sökresultat, men inte öppnat texten, står
`[söktjänstträff, ej öppnad]`. Allt annat står `[ur minnet, ej kontrollerad]`. Varje siffra
i dokumentet är antingen markerad så, eller uttryckligen utpekad som något som måste
kontrolleras i originalet innan den får stå på en sida. Se §11.

---

## 0. Sammanfattning

Då hade jag byggt en **levande, versionsstyrd påståendedatabas som syntetiserar
andrahandsforskning** (metaanalyser och systematiska översikter, inte primärstudier),
där varje påstående är en formaliserad relation mellan två konstrukt som klassas i en
**förhandsdefinierad evidensklass A–E med mekaniska kriterier**, och där rangordningen
räknas fram av ett byggskript i stället för att sättas för hand — **därför att** (x) styrkan
i "forskningen visar" sitter i att lägga aggregat på aggregat, inte i att läsa fler
artiklar; (y) en rangordning som inte kommer ur kriterier som skrevs ned *innan* påståendena
lästes är bara mina åsikter i tabellform; och (z) ett sådant här system är värdelöst om det
inte kalibreras mot vad riktiga A&O-forskare faktiskt svarar, så **expertpanelen är inte
en kvalitetsstämpel på slutet utan själva mätinstrumentet** och måste byggas in från dag ett.

---

## 1. Hur jag tolkar uppdraget

Uppdraget låter som ett litteraturuppdrag men är i själva verket ett **mätproblem**.
Du vill kunna säga "forskningen visar att…" med större säkerhet än den som citerar en
enskild studie. Den säkerheten kan inte komma ur mängden lästa artiklar. Den måste komma
ur att det finns en **uttalad, kontrollerbar regel** för vad som krävs för att något ska
få stå högst upp — och att regeln är densamma för alla påståenden.

De fyra svåraste delarna, i stigande svårighetsgrad:

**1.1 Jämförbarhet.** En rangordning kräver en gemensam ordinal skala över påståenden som
vilar på helt olika sorters bevis: en korrelation ur 200 tvärsnittsstudier, en
interventionseffekt ur 30 randomiserade fältförsök, ett longitudinellt samband ur 12
panelstudier. Att lägga dem på en linje är själva uppgiften, och det finns ingen naturlig
måttenhet. Lösningen kan bara bli en **explicit, godtyckligt vald men öppet redovisad
kriterietrappa** — inte ett uträknat tal som låtsas vara objektivt.

**1.2 Konstruktdjungeln (jingle–jangle).** Samma ord betyder olika saker (jingle:
"engagemang" är minst tre konstrukt; "psykologisk trygghet" mäts både som gruppklimat och
som individuell upplevelse), och olika ord betyder samma sak (jangle: transformativt
ledarskap, karismatiskt ledarskap och delar av LMX överlappar kraftigt empiriskt).
Ett påstående som bygger på en metaanalys som slagit ihop icke-jämförbara mått är ett
felaktigt påstående oavsett hur många studier som ligger bakom.
[jingle–jangle som begrepp: ur minnet, ej kontrollerad]

**1.3 Att kunna säga "nej".** Kravet på icke-samband är det som skiljer det här från en
vanlig kunskapsöversikt, och det är tekniskt sett det svåraste. Vanlig statistik kan inte
belägga en nollhypotes. Det kräver **ekvivalenstestning mot en i förväg satt minsta
intressanta effekt** — och litteraturen är systematiskt underförsörjd på just den sortens
resultat, eftersom nollresultat publiceras sämre.

**1.4 Det som inte går att lösa tekniskt: valideringen.** "Ett rum fullt av A&O-forskare
nickar" är ett empiriskt påstående om människor, inte om litteratur. Det finns inget facit
att räkna mot. Antingen frågar man dem, eller så gissar man. Alla system av den här typen
jag känner till gissar. **Det är här jag skulle lägga oproportionerligt mycket av arbetet**,
och det är den punkt där mitt förslag skiljer sig mest från vad som redan finns.

En femte svårighet som inte är metodologisk men avgör om projektet överlever:
**litteraturen rör sig**. Sackett m.fl. (2022) reviderade ned stora delar av
personalurvalsforskningens metaanalytiska facit genom att peka på systematisk
överkorrigering för range restriction. [söktjänstträff, ej öppnad] Ett påstående som var
klass A 2021 kunde vara klass C 2023. Systemet måste vara byggt för att **flytta saker
nedåt**, synligt och med datum, annars blir det en tryckt bok med webbadress.

---

## 2. Befintliga lösningar och metoder

Jag utgår inte från att det här är ogjort. Det är det inte. Här är vad som finns, och hur
det förändrar förslaget.

**2.1 metaBUS.** Det närmaste en färdig motor för just det du vill ha. En manuellt kurerad
databas med över en miljon forskningsfynd (korrelationer) ur tillämpad psykologi från 1980
och framåt, med en konstruktaxonomi, där man kan fråga på ett konstruktpar och få en
metaanalys på plats. [söktjänstträff, ej öppnad — Bosco m.fl. (2020), *Advances in Methods
and Practices in Psychological Science*] **Konsekvens för förslaget:** jag skulle inte bygga
en egen extraktionspipeline över primärlitteraturen. Det är tio personår som redan är
gjorda. Jag skulle i stället undersöka licens och åtkomst och använda metaBUS som
*kandidatgenerator* — vilka konstruktpar har överhuvudtaget en evidensmassa? — och låta den
frågan styra vilka påståenden som skrivs.

**2.2 CEBMa (Center for Evidence-Based Management).** Barends, Rousseau och Briner har
publicerat riktlinjer för Rapid Evidence Assessments och Critically Appraised Topics
specifikt för management och organisation, inklusive en nivåindelning av evidens.
[söktjänstträff, ej öppnad — domänen cebma.org var blockerad i den här miljön, jag kunde
inte läsa kriterierna] **Konsekvens:** deras vokabulär och granskningsmall är det jag skulle
låna för den *kvalitativa* delen av bedömningen. Men en CAT svarar på en fråga i taget och
är inte en rangordnad lista — det är där uppdraget går utanför vad som finns.

**2.3 Campbell Collaboration, med en egen samordningsgrupp för Business & Management,**
och deras *evidence and gap maps* (riktlinje av White m.fl., 2020, i *Campbell Systematic
Reviews*). [söktjänstträff, ej öppnad] **Konsekvens:** gap-kartan är exakt rätt format för
kravet i §5 om att skilja "inget samband" från "ingen forskning". Jag skulle bygga en sådan
karta som en egen vy, inte bara som en fotnot.

**2.4 Metapsy.** Levande, versionsstyrda metaanalytiska databaser för psykoterapiforskning
(*meta-analytic research domains*), öppna data, årliga systematiska uppdateringar,
DOI-versionering enligt FAIR, R-paket och ett Shiny-gränssnitt ovanpå.
[söktjänstträff, ej öppnad] **Konsekvens:** det här är arkitekturmallen. Inte ämnet, utan
formen: en domän hålls levande, versioneras, och kan citeras som den såg ut ett visst datum.
Ett påstående måste kunna citeras med version.

**2.5 Umbrella reviews och trovärdighetsklassning (Class I–IV).** Inom epidemiologi finns
ett etablerat system för att gradera *metaanalyser av observationsstudier*: Klass I
(övertygande) kräver bland annat p < 10⁻⁶, fler än 1000 fall, signifikans även i den största
enskilda studien, I² under 50 %, ett prediktionsintervall som utesluter noll, och inga tecken
på bias; Klass II (starkt antydande), III (antydande) och IV (svag) trappar ned därifrån.
[söktjänstträff, ej öppnad — sammanfattningen kommer från söktjänstens referat av Khalil
m.fl. (2026) i *Journal of Evidence-Based Medicine* och en översikt i *PLOS ONE* (2022);
de exakta tröskelvärdena måste läsas i original innan de används] **Konsekvens:** det här är
stommen i mitt bedömningssystem i §4, med tröskelvärdena omsatta till A&O-litteraturens
verklighet (korrelationer och k-antal i stället för fall-kontroll-tal).

**2.6 GRADE.** Den dominerande standarden för att gradera evidensvisshet. Byggd för
interventionsfrågor: randomiserade studier startar högt, observationsstudier startar lågt
och kan uppgraderas vid stora effekter utan uppenbar bias. [söktjänstträff, ej öppnad]
**Konsekvens: jag väljer bort GRADE som skala** (se §8), men behåller dess fyra
nedgraderingsdomäner — risk för bias, inkonsistens, indirekthet, oprecishet — som
checklista. Skälet är att nästan hela A&O-litteraturen är observationell, så GRADE skulle
trycka ned i stort sett varje påstående till "låg visshet" och göra rangordningen
informationslös. Det är ett riktigt svar på fel fråga.

**2.7 Standarder för syntes:** PRISMA 2020 för rapportering av systematiska översikter,
APA:s MARS för metaanalysrapportering, AMSTAR 2 för att bedöma kvaliteten i en befintlig
översikt. [samtliga: ur minnet, ej kontrollerad] **Konsekvens:** AMSTAR 2 blir ett
obligatoriskt fält på varje översikt som citeras. Det är den billigaste kvalitetsspärren
som finns: den flyttar bedömningen från "är den här metaanalysen bra?" till en ifylld mall.

**2.8 Andra ordningens metaanalys** (metaanalys av metaanalyser, Schmidt och Oh) och
publikationsbiasmetodik i management (Kepes m.fl.). [ur minnet, ej kontrollerad]
**Konsekvens:** det är den statistiska operation systemet faktiskt utför, och den har ett
namn och en litteratur — jag skulle inte uppfinna en egen.

**2.9 Populariseringar som redan gör ungefär det här.** Utbildningssektorns *Teaching and
Learning Toolkit* (EEF) rangordnar insatser efter evidensstyrka, effekt och kostnad;
What Works-nätverket i Storbritannien gör motsvarande för flera politikområden;
*Psychological Science in the Public Interest* och National Academies konsensusrapporter är
genrens tyngsta form; sajter som Science for Work har gjort CAT-liknande
sammanfattningar för HR-publik. I ett sökresultat dök också "umbrella summaries" från
QIC-WD upp, som gör korta evidenssammanfattningar per arbetslivsämne.
[EEF, What Works, PSPI, National Academies, Science for Work: ur minnet, ej kontrollerad.
QIC-WD: söktjänstträff, ej öppnad] **Konsekvens:** presentationsformatet är löst. Kopiera
EEF:s greppbarhet — en rad per påstående, färgad evidensstyrka, allt utvecklingsbart — och
lägg till det de saknar: den öppna kriterietabellen per påstående.

**Vad som inte finns, så vitt jag vet:** en rangordnad, publik, levande lista över
*påståenden* inom A&O-psykologi med öppna kriterier och redovisad expertkalibrering.
Delarna finns. Sammansättningen verkar inte göra det. Jag är inte säker — särskilt inte på
om något nordiskt initiativ finns, och det bör kontrolleras innan något byggs.

---

## 3. Hur påståenden bildas

### 3.1 Påståendeenheten

Ett påstående är **inte** en mening. Det är en post med en mening som visningsyta. Formellt:

> En **riktad relation mellan två specificerade konstrukt**, på en angiven analysnivå, i en
> angiven population, med en angiven form, buren av en angiven evidensbas.

Fälten som konstituerar enheten:

| Fält | Innebörd | Exempel |
|---|---|---|
| `x` | prediktor/insats, som konstrukt-ID, inte som ord | `mal_specificitet_svarighet` |
| `y` | utfall, som konstrukt-ID | `uppgiftsprestation_objektiv` |
| `niva` | individ / dyad / grupp / organisation | `grupp` |
| `population` | var evidensen kommer ifrån | `arbetsgrupper i fält, blandade branscher` |
| `riktning` | positiv / negativ / ingen | `positiv` |
| `form` | linjär / kurvilinjär / villkorad | `linjär, avtagande vid hög uppgiftskomplexitet` |
| `anspraksniva` | samvariation / prediktion över tid / orsak | `orsak` |
| `evidensbas` | vilka syntesarbeten som bär det | referenser till `kalla/`-poster |

**Två regler som gör enheten användbar:**

*En relation per post.* "Bra ledarskap ger bättre resultat" är inte ett påstående, det är
ett forskningsfält. Om formuleringen innehåller "och" eller "genom att" ska den delas.

*Anspråksnivån styr verbet.* `samvariation` → "hänger ihop med". `prediktion` → "förutsäger".
`orsak` → "leder till", och det kräver experimentell eller stark longitudinell evidens,
annars underkänns posten i bygget. Det här är den enskilt viktigaste spärren i hela systemet,
för det är precis där populärlitteraturen går sönder.

### 3.2 Från litteratur till formulerade påståenden

Uttryckligen **nedifrån och upp** — områdena ska växa fram, inte väljas i förväg:

1. **Kandidatskörd.** Hämta alla konstruktpar inom A&O som överhuvudtaget har ett
   syntesarbete bakom sig (metaanalys eller systematisk översikt). Källor: metaBUS
   taxonomi och träffmängd, sökning i PsycINFO/Web of Science på syntesfilter, samt
   referenslistorna i fältets handböcker. Resultatet är en **lista över par, inte en modell**.
2. **Kartläggning.** Bygg grafen: konstrukt som noder, par med evidens som kanter.
   Områdena definieras som **kluster i den grafen** (vanlig community-detektion), inte av
   mig. Det är den konkreta mekanismen bakom ditt krav att områdena ska växa fram ur
   forskningen. Klustren får arbetsnamn, och namnen får ändras när grafen ändras.
3. **Prioritering.** Ett par går vidare om det (a) har minst en metaanalys, och (b) har en
   **praktikkoppling**: någon chef eller organisation gör faktiskt något som bygger på det.
   Krav (b) är din egen avgränsning och den är klok — den stänger ute halva den
   akademiska litteraturen och gör listan användbar.
4. **Utdrag.** För varje par läses syntesarbetena, och kriteriefälten i §4 fylls i,
   **var för sig, innan klassen räknas fram**. Ingen får titta på klassen och justera
   fälten bakåt. Varje fält får en läsnivå: fulltext / abstract / andrahand.
5. **Formulering.** Meningen skrivs sist, ur de ifyllda fälten, av en människa. Regel:
   den får inte bära mer än fälten tillåter.
6. **Invändningsjakt.** Sök aktivt efter det starkaste publicerade motargumentet och
   citera det på påståendets sida. Ett påstående utan ett ifyllt `invandningar`-fält
   får inte nå klass A.

### 3.3 Konstruktregistret — mot jingle och jangle

Ett eget register, `konstrukt/`, är inte ett bihang utan systemets hårdaste del.
Per konstrukt: kanoniskt ID, svenskt och engelskt namn, alias, avgränsning ("detta är
*inte*…"), och — avgörande — **listan över de mätinstrument som faktiskt använts**.

Tre principer:

- **Identitet avgörs av instrument, inte av etikett.** Två litteraturer beskriver samma sak
  om deras dominerande instrument mäter samma sak; de gör det inte bara för att de använder
  samma ord. Där det finns publicerade korrelationer mellan instrumenten noteras de.
- **Slå aldrig ihop tyst.** Varje beslut att behandla två etiketter som ett konstrukt, eller
  att dela ett, skrivs som en daterad, motiverad post i registret. Besluten är data.
- **Varningsflagga i stället för tvångsval.** Där ett påstående vilar på en metaanalys som
  slagit ihop instrument som inte konvergerar, får påståendet ett synligt
  `jangle`-förbehåll och **kan inte nå klass A**. Transformativt ledarskap är standardfallet:
  där måttet delvis innehåller utfallet (medarbetare som presterar väl beskriver sin chef mer
  positivt), är höga samband delvis inbyggda. [kritiken av transformativt ledarskaps
  mätning, van Knippenberg och Sitkin: ur minnet, ej kontrollerad]

---

## 4. Hur säkerhet bedöms och rangordnas

### 4.1 Grundvalet: tre axlar som aldrig slås ihop

Varje påstående bär tre separata omdömen, och de visas alltid bredvid varandra:

1. **Evidensklass (A–E)** — hur säkert stödet är. **Det är den som rangordnar listan.**
2. **Effektstorlek** — hur stort sambandet är. Rangordnar *inte*.
3. **Praktisk räckvidd** — hur mycket av det chefer faktiskt gör som berörs.

Att hålla isär 1 och 2 är hela poängen med din fråga. Ett påstående kan vara extremt väl
belagt och praktiskt oviktigt (små effekter, 300 studier), och ett annat kan ha en enorm
skattad effekt på tunt underlag (fyra studier, alla från samma grupp). Den första hör hemma
högst upp. Den andra hör hemma långt ned, hur lockande siffran än är.

**Effekten redovisas dessutom mot fältets egen fördelning, inte mot Cohens tumregler.**
I A&O-litteraturen ligger den typiska korrelationen betydligt lägre än vad Cohens
"medelstor = .30" antyder; empiriskt härledda referensvärden ur fältets egen
effektstorleksfördelning finns publicerade. [Bosco m.fl. (2015), effektstorleksriktmärken:
ur minnet, ej kontrollerad — percentilvärdena måste hämtas ur originalet innan de visas]
Ett samband presenteras alltså som "r = .21, vilket är större än ungefär X % av publicerade
samband i fältet", inte som "svagt enligt Cohen".

### 4.2 Evidensklasserna, med konkreta kriterier

Eget system, men lånat i delar: trappans *logik* från trovärdighetsklassningen i umbrella
reviews (§2.5), *nedgraderingsdomänerna* från GRADE (§2.6), *granskningsmallen* från
AMSTAR 2 och CEBMa. Alla trösklar nedan är förslag som ska fastställas **innan** det första
påståendet skrivs, och sedan inte ändras utan att hela listan räknas om och versioneras.

**Klass A — samstämmigt belagt** ("rummet nickar"). Samtliga krav:
- Minst **två oberoende syntesarbeten** från olika författargrupper, med högst 50 % överlapp
  i primärstudier, som pekar åt samma håll.
- Sammanlagt **k ≥ 50** oberoende urval och **N ≥ 10 000**.
- **95 % prediktionsintervallet utesluter noll** (inte bara konfidensintervallet — kravet är
  att nästa studie sannolikt pekar åt samma håll, inte att medelvärdet skiljer sig från noll).
- **Heterogeniteten är antingen låg (I² < 50 %) eller förklarad** av moderatorer som var
  specificerade i förväg.
- **Publikationsbiasanalys utförd** (minst två av: trim-and-fill, PET-PEESE, selektionsmodell,
  jämförelse mot förregistrerade studier) och den korrigerade skattningen ligger kvar över
  den i förväg satta minsta intressanta effekten.
- **Ingen misslyckad storskalig replikation** eller motsägande registrerad rapport som inte
  är besvarad.
- Om anspråksnivån är `orsak`: minst en **experimentell eller longitudinell evidenslinje**,
  inte bara tvärsnitt.
- **Ingen aktiv jangle-flagga** på något av konstrukten.
- Minst en **namngiven invändning** är dokumenterad och bemött.

**Klass B — väl belagt, med förbehåll.** Minst en metaanalys av hög eller måttlig
AMSTAR 2-kvalitet, k ≥ 20, riktningen stabil — men **ett** A-krav brister. Vilket som
brister skrivs ut i klartext på påståendets sida. Typfall: bara tvärsnittsdata, så
anspråksnivån får inte vara `orsak`; eller biaskorrektionen halverar effekten men vänder
den inte.

**Klass C — omtvistat.** Det finns en betydande evidensmassa, men fältet är oenigt på ett
sätt som inte går att skriva bort. Minst ett av:
- Metaanalyser från olika författargrupper ger **väsentligt olika skattningar**.
- Effekten **försvinner vid objektiva utfallsmått** men finns vid skattade.
- Effekten är **helt moderatorberoende** — huvudeffekten betyder ingenting i sig.
- En **pågående metodstrid** om korrigeringar avgör svaret.
Klass C-poster har ett obligatoriskt fält: *vem hävdar vad, och på vilken grund*. De här
påståendena är listans mest lärorika del och ska inte gömmas.

**Klass D — tunt.** Enstaka primärstudier, ingen syntes, eller k < 10, eller mycket breda
intervall. Med på listan, längst ned, uttryckligen som "vet inte ännu".

**Klass E — belagt frånvarande samband.** Egen klass, egna kriterier, se §5. **Sorteras inte
under D utan visas i en egen kolumn/vy**, eftersom ett väl belagt icke-samband kan ha
lika starkt stöd som ett klass A-samband och är minst lika användbart.

### 4.3 Hur rangordningen räknas fram

**Lexikografiskt, av byggskriptet, aldrig för hand:**

1. Evidensklass (A före B före C före D).
2. Inom klassen: antal uppfyllda A-kriterier (8 av 9 före 6 av 9).
3. Därefter: k, alltså bredden i underlaget.
4. Därefter: praktisk räckvidd.

Ingen sammanvägd poäng. Den ordning som blir resultatet ska gå att härleda av en läsare
från de synliga fälten — kan man inte det, är systemet trasigt. Varje påstående bär också
ett fält `falsifieringsvillkor`: **vad som skulle få det att flytta nedåt.** Det kostar en
mening att skriva och är den bästa markören för om påståendet är genomtänkt.

---

## 5. Hur icke-samband hanteras

Tre tillstånd som ser lika ut i en vanlig litteraturöversikt måste hållas synligt isär:

**E — belagt frånvarande samband.** Krav:
- En i förväg fastställd **minsta intressanta effekt** (SESOI) för utfallsfamiljen, till
  exempel |r| < .10. Tröskeln sätts per utfallstyp *innan* skattningarna läses, och motiveras
  på metodsidan.
- Den metaanalytiska skattningens **90 % konfidensintervall ligger helt inom
  ±SESOI** (ekvivalenstestning, TOST-logik).
- **k och N minst på klass B-nivå**, helst A — ett nollresultat kräver *mer* underlag än ett
  positivt, inte mindre.
- Prediktionsintervallet redovisas alltid. Ligger det brett utanför SESOI är det inte E
  utan C: "i genomsnitt noll, men varierar kraftigt" är ett annat påstående än "inget samband".
- **Obligatorisk praktikkoppling**: E-påståenden tas bara in när de gäller något chefer och
  organisationer faktiskt gör. Ditt krav, och det är det som gör klassen värd att ha.

Formuleringen blir aldrig "det finns inget samband" utan **"sambandet är, om det finns,
för litet för att motivera det man gör med det"**. Det är vad data kan bära.

**D — nollresultat utan precision.** Skattningen ligger nära noll men intervallet täcker
även effekter som vore praktiskt viktiga. Det här är *frånvaro av evidens* och sorteras
under D, aldrig E. Det är den vanligaste sammanblandningen i populär återgivning och
systemets viktigaste pedagogiska poäng.

**G — ingen forskning.** Egen vy, en **gap-karta** i Campbells mening (§2.3): konstruktpar
som är praktiskt viktiga men där evidensmassan saknas eller är för tunn för att ens
placeras. En tom ruta i den kartan är information, och den skyddar läsaren från att tolka
"finns inte på listan" som "är motbevisat".

**Ett strukturellt problem som måste erkännas på metodsidan:** publikationsbias gör
E-påståenden systematiskt svårare att hitta än A-påståenden. Därför måste E-klassen
**jagas aktivt**, inte inväntas: genom registrerade rapporter, replikationsprojekt,
metaanalyser med uttalad nollhypotesprövning, och artiklar vars titel signalerar att de går
emot konventionen. Att E-listan är kort är en egenskap hos litteraturen, inte hos världen,
och det ska stå på sidan.

---

## 6. Hur det valideras

Ingen del av förslaget är viktigare, och det är här jag skulle lägga mest tid.
Måttet på om rangordningen stämmer **är** forskarnas omdöme — alltså måste det mätas,
inte antas.

**6.1 Dubbelkodning med publicerad samstämmighet.** Två kodare fyller oberoende i
kriteriefälten för ett slumpmässigt urval om 20 % av påståendena. Överensstämmelsen
redovisas per fält (Cohens κ eller Gwets AC₁) öppet på metodsidan. Faller ett fält under en
i förväg satt gräns är fältet illa definierat och ska skrivas om — inte kodarna tillrättavisas.

**6.2 Expertpanel, två rundor (Delphi-liknande).** 15–30 A&O-forskare, rekryterade för
**bredd och för meningsskiljaktighet**: olika länder, olika skolor, och uttryckligen några
kända kritiker av de teorier som hamnar högt. Varje deltagare bedömer ett urval påståenden
på två frågor: (a) *Skulle ett rum av A&O-forskare godta det här?* (1–7), och (b) *Vilken
klass hör det hemma i?* Andra rundan visar gruppens svar och låter var och en ompröva.
**Oenighet medelvärdesberäknas inte bort utan publiceras bredvid påståendet.**

**6.3 Kalibreringsprov — det egentliga testet.** Ge panelen påståenden med klassen dold
och låt dem klassa. Jämför med systemets klassning. **Publicera träffsäkerheten som en
siffra på sajten** ("experter och systemet placerade 71 % av påståendena i samma klass,
n = 40"). Det är det enda hederliga svaret på "hur vet man att rangordningen stämmer", och
det gör sajtens egen osäkerhet till ett synligt mätvärde i stället för en brasklapp.

**6.4 Motpartsgranskning.** För varje klass A- och varje klass E-påstående bjuds en namngiven
forskare som sannolikt invänder in för att skriva ett kort motinlägg som publiceras på
påståendets sida, osaxat. Det kostar lite och köper mycket trovärdighet.

**6.5 Öppen invändningskanal.** Vem som helst kan anmäla en invändning mot ett påstående
(i praktiken ett ärende i repot). Anmälningarna är publika, även de som avslås, och
avslagen motiveras.

**6.6 Kalibrering över tid.** Klassningsdatum loggas. När ett nytt syntesarbete eller en
stor replikation publiceras kontrolleras om påståendet flyttar. **Systemets egen
träffhistorik publiceras**: hur många klass A-påståenden har fallit, och hur snabbt? Ett
system vars toppåståenden ofta faller är felkalibrerat, och det ska synas utifrån.

**Ärlig begränsning:** ingen av de här punkterna ger ett facit. De ger *samstämmighet* och
*kalibrering över tid*. Det är det bästa som finns att få, och det är fortfarande mycket mer
än vad en populärbok eller en enskild studie erbjuder — vilket är exakt det anspråk du sa att
du ville kunna göra.

---

## 7. Arkitektur och teknikval

### 7.1 Grundval: statisk sajt, data i git, allt byggt

Samma mönster som `konflikt`-repot redan kör, och det passar av tre skäl: korpusen är
liten (hundratals poster, inte miljoner), läses mycket mer än den skrivs, och **behöver
historik mer än den behöver ett redigeringsgränssnitt**. Git ger diff, granskning,
återställning och citerbara versioner gratis. En databas ger inget av det utan att man
bygger det.

### 7.2 Datamodell

Fyra kataloger med JSON, en post per fil (en post per fil, inte en stor fil — diffarna blir
läsbara och två personer kan arbeta samtidigt):

- **`konstrukt/<id>.json`** — kanoniskt namn (sv/en), alias, avgränsning, instrumentlista,
  jangle-noter, daterade identitetsbeslut.
- **`pastaende/<id>.json`** — fälten i §3.1, plus: `klass`, `kriterier` (varje A-kriterium
  som `uppfyllt` / `ej_uppfyllt` / `okant` med kommentar och läsnivå), `effekt`
  (r, KI, prediktionsintervall, percentil i fältet), `k`, `N`, `biasanalys`,
  `anspraksniva`, `praktikkoppling`, `falsifieringsvillkor`, `invandningar[]`,
  `panel` (n, median, spridning), `senast_granskad`, `nasta_granskning`.
- **`kalla/<doi>.json`** — DOI, APA 7-referens, typ (metaanalys / systematisk översikt /
  primärstudie), AMSTAR 2-omdöme, **läsnivå** (fulltext / abstract / andrahand) — samma
  konvention som `konflikt` redan använder, och den bör behållas oförändrad.
- **`beslut/`** — daterade metodbeslut: trösklar, SESOI per utfallsfamilj, panelens
  sammansättning. Ändras en tröskel byggs hela listan om och den gamla versionen bevaras.

**Rangordningen lagras aldrig.** Den räknas fram vid bygge ur `klass` och `kriterier`.
Det är omöjligt att flytta ett påstående uppåt utan att ändra ett kriteriefält, och den
ändringen syns i diffen.

### 7.3 Bygget som kvalitetsspärr

Byggskriptet är inte bara en renderare, det är granskningen. Det ska **vägra bygga** när:
- ett påstående i klass A/B saknar ifyllda kriteriefält eller en namngiven invändning,
- anspråksnivån är `orsak` men ingen experimentell eller longitudinell evidenslinje finns,
- en siffra saknar källa med läsnivå, eller vilar bara på andrahand,
- ett konstrukt-ID inte finns i registret,
- ett E-påstående saknar SESOI, ekvivalenstest eller praktikkoppling,
- ett påstående inte granskats på 24 månader (då degraderas det synligt till "ogranskad"
  i stället för att tyst se aktuellt ut).

Det är i den här listan systemets verkliga stränghet sitter. En wiki kan inte vägra publicera
ett halvfärdigt påstående. Ett byggskript kan.

### 7.4 Automatiskt kontra manuellt

**Automatiskt:** metadata från DOI (Crossref, OpenAlex — utan e-postadress i anropen, enligt
repots egen regel), sortering och klassuträkning *givet ifyllda fält*, prediktionsintervall
och biasmått ur k och varians, döda länkar, konsistenskontroller, omgranskningsköer,
sitemap och robotsdirektiv.

**Manuellt, av människa, alltid:** att läsa syntesarbetena, att fylla i kriterierna, att
formulera meningen, att avgöra konstruktidentitet, att sätta klass E. En språkmodell får
**föreslå** kandidatpar, sammanfatta abstract och skriva utkast — men varje fält som påverkar
klassen bär en mänsklig signatur och en läsnivå. Skälet är precis det som redan står i
repots AGENTS.md: ett fabricerat k eller en felläst korrelation ser exakt likadan ut som en
riktig, och felet upptäcks inte av den som litar på texten.

### 7.5 Gränssnitt

- **`/` — listan.** En rad per påstående, klassfärgad, sorterbar, med effekt och k synliga.
  Samma sorteringsmönster som källtabellen i `konflikt` redan använder.
- **`/pastaende/<id>/` — en sida per påstående.** Meningen, klassen, **hela kriterietabellen
  öppen**, effekten mot fältets fördelning, källorna med läsnivå, invändningarna,
  panelens spridning, falsifieringsvillkoret, ändringsloggen.
- **`/icke-samband/`** — E-klassen för sig. Troligen sajtens mest användbara sida.
- **`/luckor/`** — gap-kartan.
- **`/metod/`** — trösklar, SESOI, panelens sammansättning, kalibreringssiffran, versionshistorik.
  Utan den här sidan är resten inte värd något.

Ärver `/style.css` från orgutveckling.se, som `konflikt` gör. `noindex` tills listan
validerats mot panelen minst en gång.

### 7.6 Publikt, halvpublikt och privat — arbetsfilerna

Tre nivåer, och skillnaden mellan de två sista är den du efterfrågade:

1. **Serveras på webben:** allt under `docs/` (eller `site/`). **Pages pekas mot den mappen,
   inte mot repots rot.** Det är mekanismen som gör att resten av repot kan finnas i git
   utan att hamna på orgutveckling.se.
2. **I repot, men aldrig serverat:** `arbete/` — läslistor, utdragsanteckningar, utkast,
   avkodningsprotokoll, panelens frågeformulär. Ligger i git (historik, diff, granskning)
   men utanför `docs/` och därmed utanför sajten. Observera: i ett publikt repo är det
   fortfarande **läsbart på GitHub**. Det är rätt nivå för arbetsmaterial du inte skäms för
   men inte vill publicera.
3. **Aldrig i repot:** upphovsrättsskyddade fulltexter och PDF:er, panelens råsvar med namn,
   allt personuppgiftskänsligt. Ligger i arbetsmappen utanför repot, precis som `konflikt`
   redan gör, och spärras i `.gitignore` så att det inte kan checkas in av misstag.

Behövs verklig sekretess för nivå 2 är alternativet ett privat repo plus ett separat publikt
publiceringsrepo — dyrare i underhåll, och jag skulle inte göra det förrän det behövs.

### 7.7 Omfattning — var ärlig mot dig själv

En seriös version av det här är inte en helg. Jag skulle stega:

- **Steg 0 (litet och äkta):** ett kluster, tio påståenden varav minst ett klass E, hela
  metodsidan skriven först, panel om tre personer. Syftet är att se om kriterierna
  överhuvudtaget går att fylla i.
- **Steg 1:** tre till fyra kluster, 40 påståenden, full panelrunda, kalibreringssiffran
  publicerad.
- **Steg 2:** öppen invändningskanal, årlig uppdateringscykel, versionerade utgåvor med datum.

Om steg 0 visar att kriterierna inte går att fylla i på rimlig tid — det är ett fullt möjligt
utfall — är rätt slutsats att krympa ambitionen till ett område, inte att sänka kraven.

---

## 8. Alternativ som jag valt bort

**8.1 Språkmodell som läser fulltextkorpus och extraherar påståenden automatiskt.**
Lockande, och tekniskt görbart i dag. Bortvalt av tre skäl: felen är **osynliga** (ett
uppfunnet k eller en felläst korrelation ser exakt ut som en riktig siffra, och ingen
läsare kan skilja dem åt); de är **korrelerade** (samma systematiska feltolkning drabbar
hundratals poster samtidigt); och fulltextkorpusar får oftast inte hanteras så juridiskt.
Behålls som *förslagsmotor* i §7.4, aldrig som källa.

**8.2 Egen metaanalys från primärstudier.** Skulle ge störst kontroll. Bortvalt eftersom
arbetsmängden är fel proportionerad mot vinsten — syntesarbetena finns redan, och en
metaanalys gjord av en icke-specialist **sänker** trovärdigheten i stället för att höja
den. Vad jag behåller är den lättare operationen: att kombinera redan publicerade
metaanalytiska skattningar (andra ordningens syntes, §2.8), uttryckligen deklarerad som just det.

**8.3 GRADE rakt av som skala.** Det etablerade valet, och jag väljer bort det medvetet:
GRADE utgår från interventionsfrågor och startar observationell evidens lågt. A&O-fältet är
till helt övervägande del observationellt, så nästan hela listan skulle hamna på "låg
visshet" och rangordningen — själva uppdraget — skulle bli informationslös. Jag lånar GRADE:s
nedgraderingsdomäner som checklista och bygger trappan på trovärdighetsklassningen från
umbrella reviews, som är gjord för exakt den här sortens evidens.

**8.4 Databas med redigeringsgränssnitt (wiki, Notion, Airtable, Supabase).**
Bekvämare att fylla i. Bortvalt eftersom korpusen är liten och dess värde ligger i
**granskningsbarheten**: diff, historik, återställning, och framför allt en byggtidsspärr som
vägrar publicera ett påstående som inte uppfyller sina egna krav. En wiki kan inte vägra.
Om inmatningen visar sig vara flaskhalsen är rätt åtgärd ett litet formulär som skriver
JSON till en gren — inte att byta lagring.

**8.5 En sammanvägd poäng per påstående (0–100).** Snyggast att visa. Bortvalt eftersom en
sådan poäng gömmer sina vikter: ordningen skulle bestämmas av hur jag råkat vikta k mot
heterogenitet mot effektstorlek, och det skulle se ut som om forskningen bestämt den.
Lexikografisk sortering på klass, med alla delfält öppet redovisade, är fulare och ärligare.

**8.6 Expertpanel först, litteratur sedan** (fråga 30 forskare vad som är väl belagt och
rangordna svaren). Snabbt, billigt, och skulle nog ge en lista som *ser* rimlig ut.
Bortvalt eftersom det gör listan till en åsiktsmätning med citat — då finns inget oberoende
att validera *mot*, och just det anspråk du vill kunna göra faller. Panelen ska mäta
systemet, inte ersätta det.

---

## 9. Största riskerna och vad jag är osäker på

**Att listan blir mitt omdöme med vetenskaplig fasad.** Den allvarligaste risken, och den
går inte att bygga bort — bara att göra synlig. Motmedel: trösklarna skrivs och publiceras
innan påståendena läses, kriterierna visas öppet per påstående, panelen kalibrerar, och
kalibreringssiffran publiceras även när den är dålig.

**Att underlaget självt är snedvridet.** Publikationsbias, p-hackning och låg
replikerbarhet i managementforskning gör att även ett korrekt utfört klass A kan vara fel.
Sackett m.fl. (2022) visar hur mycket som kan flytta sig när en korrigeringsmetod omprövas.
[söktjänstträff, ej öppnad] Systemet ska därför bygga för nedflyttning, med datum.

**Att konstruktproblemet inte går att lösa i vissa hörn.** Ledarskapsstilar är det tydligaste
fallet: det kan hända att flera av fältets mest kända påståenden helt enkelt inte kan nå
klass A, eftersom mätningen inte tillåter det. Det vore ett obekvämt men korrekt resultat,
och systemet måste tåla att leverera det.

**Att panelen väljs så att den håller med.** Urvalet avgör svaret. Motmedel: publicera
rekryteringskriterierna och bortfallet, och bjud aktivt in kritiker. Jag kan inte garantera
att det räcker.

**Att läsaren kausaltolkar en samvariation i klass A.** Det är den vanligaste skadan
populärlitteraturen gör, och listan kan lätt göra samma sak snabbare. Motmedel:
anspråksnivån styr verbet, och byggskriptet upprätthåller det maskinellt.

**Att projektet tystnar.** Ett levande system som slutar uppdateras är **sämre än inget**,
eftersom det ser aktuellt ut. Motmedel: automatisk degradering till "ogranskad" efter 24
månader — hellre en sida som visar sitt förfall än en som döljer det.

**Rättsligt och praktiskt:** fulltexter och panelens råsvar får inte ligga i ett publikt repo
(§7.6).

**Det jag faktiskt inte vet:**
- Om metaBUS data får användas på det här sättet, och i vilken form. Måste utredas först;
  svaret kan ändra hela §3.2.
- Exakt hur CEBMa graderar evidens — domänen var blockerad här och jag har inte läst
  riktlinjerna.
- De exakta tröskelvärdena i trovärdighetsklassningen och hur väl de översätts från
  epidemiologins fall-kontroll-tal till korrelationer och k-antal. Det kräver en
  metodkunnig läsning innan något fastställs.
- Om det redan finns ett nordiskt eller svenskt initiativ som gör det här. Jag har inte
  kunnat kontrollera det.
- Hur många forskare som faktiskt går att rekrytera till en panel av det här slaget.
  Hela valideringen hänger på den siffran, och jag har ingen grund att gissa den.

---

## 10. Tre exempelpåståenden

Avsedda att hamna på olika nivåer. **Klasserna nedan är gissningar om var de skulle hamna,
inte klassningar** — ingen av dem har gått igenom kriterierna i §4, och ingen källa är öppnad.

### 10.1 Kandidat för klass A

> **Specifika och svåra mål leder till högre prestation än uppmaningen "gör ditt bästa",
> för uppgifter som inte är alltför komplexa.**

Anspråksnivå: `orsak` — den ovanliga styrkan här är att stödet i hög grad kommer från
experiment, inte bara tvärsnitt. Evidensmassan omfattar enligt gängse beskrivningar flera
hundra laboratorie- och fältstudier, och uppgiftskomplexitet är den moderator som är
starkast etablerad.

- Locke, E. A., & Latham, G. P. (2002). Building a practically useful theory of goal setting
  and task motivation. *American Psychologist*. [söktjänstträff, ej öppnad — titeln och en
  PDF-adress hos Stanford syntes i sökresultaten]
- Locke, E. A., Shaw, K. N., Saari, L. M., & Latham, G. P. (1981). Goal setting and task
  performance. *Psychological Bulletin*. [ur minnet, ej kontrollerad]

*Måste kontrolleras innan publicering:* varje effektstorlek. Söktjänstens referat angav
intervall som d ≈ .4–.8, men den siffran har jag inte sett i någon originalkälla och den
får inte visas förrän den är läst i fulltext.

### 10.2 Kandidat för klass B eller C

> **I arbetsgrupper hänger psykologisk trygghet ihop med lärandebeteende, arbetsattityder
> och prestation.**

Anspråksnivå: `samvariation`, inte `orsak` — och det är hela skillnaden mot hur påståendet
brukar användas i ledarskapslitteraturen, där det återges som "skapa trygghet så presterar
gruppen bättre".

- Frazier, M. L., Fainshmidt, S., Klinger, R. L., Pezeshkan, A., & Vracheva, V. (2017).
  Psychological safety: A meta-analytic review and extension. *Personnel Psychology*.
  DOI 10.1111/peps.12183. [söktjänstträff, ej öppnad]

Söktjänstens sammanfattning angav 136 oberoende urval, drygt 22 000 individer och nära
5 000 grupper, och starkare samband med attityder än med uppgiftsprestation. [uppgift ur
söktjänstens referat, ej kontrollerad i artikeln]

*Varför troligen inte klass A:* övervägande tvärsnittsdata, ofta med samma källa för både
prediktor och utfall (samma person skattar både tryggheten och prestationen), och en trolig
jangle-flagga eftersom konstruktet mäts både på individ- och gruppnivå med mått som inte
utan vidare är samma sak.

### 10.3 Kandidat för klass E — belagt frånvarande samband

> **Demografisk mångfald i sig — kön, ålder, etnicitet — har inget påvisbart genomsnittligt
> samband med en arbetsgrupps prestation.**

Praktikkopplingen är uppenbar: grupper sätts samman med hänvisning till att blandning i sig
skulle höja prestationen.

- Bell, S. T., Villado, A. J., Lukasik, M. A., Belau, L., & Briggs, A. L. (2011). Getting
  specific about demographic diversity variable and team performance relationships:
  A meta-analysis. *Journal of Management, 37*(3), 709–743. DOI 10.1177/0149206310365001.
  [söktjänstträff, ej öppnad]
- van Dijk, H., van Engen, M. L., & van Knippenberg, D. (2012). Defying conventional wisdom:
  A meta-analytical examination of the differences between demographic and job-related
  diversity relationships with performance. *Organizational Behavior and Human Decision
  Processes, 119*, 38–53. [söktjänstträff, ej öppnad]

Den andra artikeln är intressant just för att den enligt söktjänstens referat visar att
skillnaden mellan demografisk och uppgiftsrelaterad mångfald till stor del uppträder vid
**skattade** men inte vid **objektiva** prestationsmått — alltså exakt den sortens
utfallsberoende som enligt §4.2 skulle kunna trycka påståendet till klass C i stället för E.

**Tre förbehåll som systemet skulle tvinga ut på sidan:**
1. Det är en genomsnittlig huvudeffekt. "Inget genomsnittligt samband med prestation" är
   inte "spelar ingen roll" — det säger ingenting om rättvisa, legitimitet,
   rekryteringsbas eller andra utfall, och inte heller om vad som händer under olika villkor.
2. Ett sökresultat visade en nyare registrerad metaanalys på området (*Journal of Business
   and Psychology*, 2024, "Reconciling promise and reality") [söktjänstträff, ej öppnad].
   **Den måste läsas innan påståendet publiceras**, och den kan mycket väl flytta det.
3. Ingen av de här skattningarna har prövats mot en i förväg satt SESOI. Utan
   ekvivalenstestet enligt §5 är det här i dag formellt ett **D**, inte ett **E** — och den
   skillnaden är precis vad systemet finns till för att upprätthålla.

---

## 11. Källor

**Ingenting i den här listan är markerat `[kontrollerad]`.** All utgående nättrafik utom
söktjänsten var blockerad i miljön där förslaget skrevs: både webbhämtning och de öppna
metadata-API:erna (Crossref, OpenAlex) avvisades av utgångsproxyn. Jag har alltså inte
öppnat en enda av texterna nedan.

`[söktjänstträff, ej öppnad]` betyder att titel, tidskrift och i förekommande fall DOI eller
webbadress återgavs i ett sökresultat som jag såg, men att jag inte har läst texten — varken
fulltext eller abstract i original. Det är **svagare än abstractnivå** i repots egen
tregradiga läsnivåskala.

### Metod, standarder och befintliga system

| Källa | Markering |
|---|---|
| Bosco, F. A., Field, J. G., Larsen, K. R., Chang, Y., & Uggerslev, K. L. (2020). Advancing meta-analysis with knowledge-management platforms: Using metaBUS in psychology. *Advances in Methods and Practices in Psychological Science*. | [söktjänstträff, ej öppnad] |
| metaBUS-projektets egna sidor (metabus.org) | [söktjänstträff, ej öppnad] |
| Barends, E., Rousseau, D. M., & Briner, R. B. (red.). *CEBMa Guideline for Critically Appraised Topics in Management and Organizations*; samt *CEBMa Guideline for Rapid Evidence Assessments*. | [söktjänstträff, ej öppnad — domänen blockerad, kriterierna olästa] |
| Metapsy — meta-analytiska databaser för psykoterapiforskning, med R-paketen metapsyData och metapsyTools (VU Amsterdam) | [söktjänstträff, ej öppnad] |
| White, H., m.fl. (2020). Guidance for producing a Campbell evidence and gap map. *Campbell Systematic Reviews*. | [söktjänstträff, ej öppnad] |
| Campbell Collaboration, samordningsgruppen för Business & Management | [söktjänstträff, ej öppnad] |
| Khalil, H., m.fl. (2026). Guidance for grading the evidence in quantitative umbrella reviews. *Journal of Evidence-Based Medicine*. DOI 10.1111/jebm.70137 | [söktjänstträff, ej öppnad] |
| Methodological approaches for assessing certainty of the evidence in umbrella reviews: A scoping review. *PLOS ONE* (2022). DOI 10.1371/journal.pone.0269009 | [söktjänstträff, ej öppnad] |
| GRADE-metodiken (GRADE Handbook / Cochrane Handbook kap. 14) | [söktjänstträff, ej öppnad] |
| metaumbrella (R-paket som implementerar trovärdighetsklassningen) | [söktjänstträff, ej öppnad] |
| QIC-WD "umbrella summaries" (bl.a. om psykologisk trygghet) | [söktjänstträff, ej öppnad] |
| PRISMA 2020; APA:s MARS; AMSTAR 2 | [ur minnet, ej kontrollerad] |
| Schmidt, F. L., & Oh, I.-S., om andra ordningens metaanalys | [ur minnet, ej kontrollerad] |
| Kepes, S., m.fl., om publikationsbias i management | [ur minnet, ej kontrollerad] |
| Lakens, D., om ekvivalenstestning och SESOI (TOST) | [ur minnet, ej kontrollerad] |
| Bosco, F. A., m.fl. (2015), empiriskt härledda effektstorleksriktmärken i tillämpad psykologi | [ur minnet, ej kontrollerad] |
| EEF Teaching and Learning Toolkit; What Works-nätverket; *Psychological Science in the Public Interest*; National Academies konsensusrapporter; Science for Work | [ur minnet, ej kontrollerad] |
| van Knippenberg, D., & Sitkin, S. B., kritiken av mätningen av transformativt ledarskap | [ur minnet, ej kontrollerad] |
| Jingle–jangle-problemet som begrepp | [ur minnet, ej kontrollerad] |

### Sakpåståenden i §10

| Källa | Markering |
|---|---|
| Locke, E. A., & Latham, G. P. (2002). Building a practically useful theory of goal setting and task motivation. *American Psychologist*. | [söktjänstträff, ej öppnad] |
| Locke, E. A., Shaw, K. N., Saari, L. M., & Latham, G. P. (1981). Goal setting and task performance. *Psychological Bulletin*. | [ur minnet, ej kontrollerad] |
| Frazier, M. L., Fainshmidt, S., Klinger, R. L., Pezeshkan, A., & Vracheva, V. (2017). Psychological safety: A meta-analytic review and extension. *Personnel Psychology*. DOI 10.1111/peps.12183 | [söktjänstträff, ej öppnad] |
| Bell, S. T., Villado, A. J., Lukasik, M. A., Belau, L., & Briggs, A. L. (2011). Getting specific about demographic diversity variable and team performance relationships: A meta-analysis. *Journal of Management, 37*(3), 709–743. DOI 10.1177/0149206310365001 | [söktjänstträff, ej öppnad] |
| van Dijk, H., van Engen, M. L., & van Knippenberg, D. (2012). Defying conventional wisdom… *Organizational Behavior and Human Decision Processes, 119*, 38–53. | [söktjänstträff, ej öppnad] |
| Sackett, P. R., Zhang, C., Berry, C. M., & Lievens, F. (2022). Revisiting meta-analytic estimates of validity in personnel selection. *Journal of Applied Psychology, 107*(11), 2040–2068. DOI 10.1037/apl0000994 | [söktjänstträff, ej öppnad] |
| "Reconciling promise and reality" — registrerad metaanalys om teammångfald, *Journal of Business and Psychology* (2024). DOI 10.1007/s10869-024-09977-0 | [söktjänstträff, ej öppnad] |

**Första åtgärden om förslaget går vidare:** öppna var och en av källorna ovan i en miljö med
nätåtkomst, fastställ läsnivå enligt repots tregradiga skala, och ta bort eller korrigera
varje uppgift som inte håller. Ingen siffra i det här dokumentet får flyttas till en
publicerad sida innan dess.
