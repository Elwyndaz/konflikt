// @ts-check
// Sortering och kopiering för källtabellen. Mönstret (aria-sort på th, knapp i rubriken)
// kommer från flaskors CellarTable, här utan ramverk: raderna finns redan i HTML:en.

const table = /** @type {HTMLTableElement} */ (document.querySelector('table.kallor'));
const head = /** @type {HTMLTableSectionElement} */ (table.tHead);
const body = table.tBodies[0];
const kvitto = /** @type {HTMLElement} */ (document.getElementById('status'));

head.addEventListener('click', (e) => {
  const th = /** @type {Element} */ (e.target).closest('th');
  if (!th || !th.querySelector('button')) return;
  const dir = th.getAttribute('aria-sort') === 'ascending' ? 'descending' : 'ascending';
  for (const h of head.rows[0].cells) h.removeAttribute('aria-sort');
  th.setAttribute('aria-sort', dir);

  const i = /** @type {HTMLTableCellElement} */ (th).cellIndex;
  const numeric = /** @type {HTMLElement} */ (th).dataset.type === 'num';
  const sign = dir === 'ascending' ? 1 : -1;
  /** @param {HTMLTableRowElement} r */
  const key = (r) => r.cells[i].dataset.sort ?? r.cells[i].textContent ?? '';
  const rows = [...body.rows].sort((a, b) => {
    const x = key(a), y = key(b);
    // Tomma värden hamnar sist åt båda hållen, annars fyller de toppen vid fallande sortering.
    if (x === '' || y === '') return Number(x === '') - Number(y === '');
    return sign * (numeric ? Number(x) - Number(y) : x.localeCompare(y, 'sv'));
  });
  body.append(...rows);
});

body.addEventListener('click', async (e) => {
  const btn = /** @type {Element} */ (e.target).closest('button.kopiera');
  const ref = btn?.closest('td')?.querySelector('.ref');
  if (!btn || !ref) return;
  const text = ref.textContent ?? '';
  try {
    // text/html följer med så att kursiven överlever inklistring i Word.
    await navigator.clipboard.write([new ClipboardItem({
      'text/plain': new Blob([text], { type: 'text/plain' }),
      'text/html': new Blob([ref.innerHTML], { type: 'text/html' }),
    })]);
  } catch {
    await navigator.clipboard.writeText(text);
  }
  kvitto.textContent = 'Kopierat: ' + text;
  btn.classList.add('klar');
  setTimeout(() => btn.classList.remove('klar'), 1500);
});
