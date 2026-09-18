// check_page.js: öppnar den byggda sidan i en riktig webbläsare och prövar sortering, kopiering och mobilbredd.
// Kör: node check_page.js [skärmdump.png]   Krav: playwright (npm i -g playwright)
// Ger: en rad PASS eller FAIL med det som skilde, exit 1 vid fel.
// Ingen server: alla anrop fångas och besvaras från en fast lista filer, så inget utanför listan går att läsa.
const fs = require('fs');
const path = require('path');

function loadPlaywright() {
  for (const p of ['playwright', path.join(process.env.APPDATA || '', 'npm/node_modules/playwright')]) {
    try { return require(p); } catch (_) {}
  }
  console.error('playwright saknas. Installera med: npm i -g playwright');
  process.exit(2);
}

const FILES = {
  '/konflikt/': [path.join(__dirname, 'index.html'), 'text/html'],
  '/konflikt/app.js': [path.join(__dirname, 'app.js'), 'text/javascript'],
  '/style.css': [path.join(__dirname, '..', 'elwyndaz.github.io', 'style.css'), 'text/css'],
};

(async () => {
  const { chromium } = loadPlaywright();
  const browser = await chromium.launch();
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, permissions: ['clipboard-read', 'clipboard-write'] });
  const page = await ctx.newPage();
  const errors = [];
  page.on('pageerror', (e) => errors.push('js-fel: ' + e.message));
  await page.route('**/*', (route) => {
    const hit = FILES[new URL(route.request().url()).pathname];
    return hit ? route.fulfill({ body: fs.readFileSync(hit[0]), contentType: hit[1] }) : route.abort();
  });
  await page.goto('http://localhost/konflikt/');

  const sortBy = (name) => page.locator('thead').getByRole('button', { name, exact: true });
  const first = () => page.locator('tbody tr').first().locator('td.text').innerText();
  const lastYear = () => page.locator('tbody tr').last().locator('td').nth(3).innerText();
  const expect = (what, got, want) => { if (got !== want) errors.push(`${what}: fick ${JSON.stringify(got)}, väntade ${JSON.stringify(want)}`); };

  expect('antal rader', await page.locator('tbody tr').count(), JSON.parse(fs.readFileSync(path.join(__dirname, 'sources.json'), 'utf8')).length);
  expect('startordning', await first(), 'Jordan, Konfliktkunskapens ABC');

  const cit = sortBy('Citeringar');
  await cit.click();
  expect('citeringar stigande', await first(), 'Scheppa-Lahyani & Zapf');
  await cit.click();
  expect('citeringar fallande', await first(), 'de Wit m.fl.');
  expect('aria-sort', await page.locator('th[aria-sort]').count(), 1);

  const ar = sortBy('År');
  await ar.click();
  expect('år stigande', await first(), 'Glasl');
  expect('tomt år sist (stigande)', await lastYear(), 'u.å.');
  await ar.click();
  expect('tomt år sist (fallande)', await lastYear(), 'u.å.');

  await sortBy('Text').click();
  expect('svensk bokstavsordning, Å sist', await page.locator('tbody tr').last().locator('td.text').innerText(), 'Ågotnes m.fl.');

  const row = page.locator('tbody tr', { hasText: 'Yuan m.fl.' });
  // Klicket returnerar innan den asynkrona skrivningen är klar: vänta på klassen som sätts efteråt.
  const copy = async (label) => {
    await row.getByRole('button', { name: label }).click();
    await row.locator(`button.klar[aria-label="${label}"]`).waitFor();
  };
  await copy('Kopiera hänvisningen inom parentes');
  expect('kopierad parentes', await page.evaluate(() => navigator.clipboard.readText()), '(Yuan m.fl., 2026)');
  await copy('Kopiera APA-referensen');
  const html = await page.evaluate(async () => {
    const [item] = await navigator.clipboard.read();
    return (await item.getType('text/html')).text();
  });
  if (!html.includes('<i>Journal of Applied Psychology, 111</i>')) errors.push('kursiven följde inte med i kopian: ' + html.slice(0, 120));

  await sortBy('#').click();
  await page.evaluate(() => { scrollTo(0, 0); document.querySelector('.tabellram')?.scrollTo(0, 0); });
  if (process.argv[2]) await page.screenshot({ path: process.argv[2] });
  // På en bred skärm ska hela tabellen rymmas: ingen sidrullning i ramen. 1440 px får rulla, 1920 får inte.
  for (const width of [1920, 2560]) {
    await page.setViewportSize({ width, height: 1080 });
    const extra = await page.evaluate(() => { const r = document.querySelector('.tabellram'); return r ? r.scrollWidth - r.clientWidth : -1; });
    if (extra !== 0) errors.push(`tabellen rullar i sidled vid ${width}px (${extra}px för bred)`);
    if (process.argv[2]) await page.screenshot({ path: process.argv[2].replace('.png', `-${width}.png`) });
  }
  await page.setViewportSize({ width: 375, height: 800 });
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
  if (overflow > 0) errors.push(`sidan är ${overflow}px bredare än skärmen i mobilvy`);
  if (process.argv[2]) await page.screenshot({ path: process.argv[2].replace('.png', '-mobil.png') });

  await browser.close();
  console.log(errors.length ? 'FAIL\n  ' + errors.join('\n  ') : 'PASS: sortering, kopiering och mobilbredd');
  process.exit(errors.length ? 1 : 0);
})();
