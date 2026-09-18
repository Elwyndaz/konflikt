"""build.py: sources.json -> index.html. Kör: uv run python build.py
Skriver en rad PASS eller kastar AssertionError med vad som är fel i datat.
Sidan ligger på orgutveckling.se/konflikt och lånar sajtens /style.css direkt.
"""
import json, re, sys
from html import escape
from pathlib import Path

sys.stdout.reconfigure(encoding="utf-8")
ROOT = Path(__file__).parent
CHECKED = "2026-09-18"  # datum då citeringar och abstract hämtades
GROUPS = {"A": "Läs hela", "B": "Abstract plus ett ställe", "C": "Bara abstract", "D": "Hoppa över"}
COPY = ('<button type="button" class="kopiera" aria-label="Kopiera {label}" title="Kopiera">'
        '<svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true"><rect x="5" y="5" width="9" height="9" fill="none" stroke="currentColor" stroke-width="1.4"/>'
        '<path d="M11 5V2H2v9h3" fill="none" stroke="currentColor" stroke-width="1.4"/></svg></button>')


def italics(s):
    parts = s.split("*")
    assert len(parts) % 2 == 1, f"udda antal * i: {s[:50]}"
    return "".join(f"<i>{escape(p)}</i>" if i % 2 else escape(p) for i, p in enumerate(parts))


def nbsp(s):
    return re.sub(r"(?<=\d) (?=\d{3}\b)", " ", s)


def cell_copy(html, label):
    return f'<span class="ref">{html}</span>{COPY.format(label=label)}'


rows = json.loads((ROOT / "sources.json").read_text(encoding="utf-8"))
out = []
for nr, r in enumerate(rows, 1):
    year = str(r["ar"]) if r["ar"] else "u.å."
    assert r["grupp"] in GROUPS, f"rad {nr}: okänd grupp"
    assert r["url"].startswith("https://"), f"rad {nr}: länk utan https"
    assert f"({year})" in r["apa"], f"rad {nr}: året {year} saknas i APA-posten"
    assert "—" not in json.dumps(r, ensure_ascii=False), f"rad {nr}: tankstreck"
    assert r["cite"].split()[0] in r["apa"], f"rad {nr}: cite matchar inte APA-posten"
    lopande = f'{r["cite"].replace(" & ", " och ")} ({year})'
    parentes = f'({r["cite"]}, {year})'
    apa = f'{italics(r["apa"])} <a href="{escape(r["url"])}">{escape(r["url"])}</a>'
    kind = "DOI" if "doi.org" in r["url"] else "Webb"
    g, cit = r["grupp"], r["cit"]
    cit_sort = "" if cit is None else cit
    cit_text = "" if cit is None else nbsp(f"{cit:,}".replace(",", " "))
    out.append(
        f'<tr><td class="num" data-sort="{nr}">{nr}</td>'
        f'<td data-sort="{g}"><span class="grupp grupp-{g.lower()}" title="{GROUPS[g]}">{g}</span></td>'
        f'<td class="text">{escape(r["kort"])}</td>'
        f'<td class="num" data-sort="{r["ar"] or ""}">{year}</td>'
        f'<td class="num" data-sort="{cit_sort}">{cit_text}</td>'
        f'<td class="bred">{escape(nbsp(r["pop"]))}</td>'
        f'<td class="halvbred" data-sort="{r.get("n", "")}">{escape(nbsp(r["studier"] or ""))}</td>'
        f'<td class="apa">{cell_copy(apa, "APA-referensen")}</td>'
        f'<td class="kort">{cell_copy(escape(lopande), "hänvisningen i löptext")}</td>'
        f'<td class="kort">{cell_copy(escape(parentes), "hänvisningen inom parentes")}</td>'
        f'<td><a class="mono-link" href="{escape(r["url"])}" rel="noopener">{kind}&nbsp;&rarr;</a></td></tr>'
    )

HEAD = [("#", "num", "ascending"), ("Grupp", "", ""), ("Text", "", ""), ("År", "num", ""), ("Citeringar", "num", ""),
        ("Undersökt population", "", ""), ("Antal studier", "num", ""), ("APA-referens", "", ""),
        ("I löptext", "", ""), ("Inom parentes", "", ""), ("Länk", None, "")]
ths = "".join(
    f"<th>{name}</th>" if typ is None else
    f'<th data-type="{typ}"' + (f' aria-sort="{sort}"' if sort else "") + f'><button type="button">{name}</button></th>'
    for name, typ, sort in HEAD)
legend = "".join(f'<li><span class="grupp grupp-{k.lower()}">{k}</span> {v}</li>' for k, v in GROUPS.items())

page = (ROOT / "template.html").read_text(encoding="utf-8")
for key, val in {"{{ths}}": ths, "{{rows}}": "\n".join(out), "{{legend}}": legend, "{{n}}": str(len(rows)), "{{checked}}": CHECKED}.items():
    assert key in page, f"mallen saknar {key}"
    page = page.replace(key, val)
assert "{{" not in page, "oersatt platshållare i mallen"
(ROOT / "index.html").write_text(page, encoding="utf-8", newline="\n")
print(f"PASS: {len(rows)} rader skrivna till index.html")
