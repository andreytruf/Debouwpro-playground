import { readFile, mkdir, writeFile } from "node:fs/promises";
import { renderLanding } from "../energy/templates.mjs";
export async function buildComparison() {
  const light = (await readFile("design/reference-light/index.html", "utf8"))
    .replaceAll('href="assets/', 'href="/assets/')
    .replaceAll('src="assets/', 'src="/assets/');
  await mkdir("dist/vergelijk/licht", { recursive: true });
  await writeFile("dist/vergelijk/licht/index.html", light);
  const original = await readFile("design/reference-test/index.html", "utf8");
  const home = original
    .replaceAll('href="assets/', 'href="/assets/')
    .replaceAll('src="assets/', 'src="/assets/')
    .replaceAll(
      "https://debouwpro-test.andrey-57c.workers.dev",
      "https://debouwpro-playground.andrey-57c.workers.dev",
    )
    .replaceAll('href="/energy"', 'href="/vergelijk/test/energy/"');
  await mkdir("dist/vergelijk/test/energy", { recursive: true });
  await writeFile("dist/vergelijk/test/index.html", home);
  const energy = renderLanding(original)
    .replace('<link rel="stylesheet" href="/assets/concept-v3.css">', "")
    .replaceAll('href="/#', 'href="/vergelijk/test/#')
    .replaceAll('href="/energy"', 'href="/vergelijk/test/energy/"');
  await writeFile("dist/vergelijk/test/energy/index.html", energy);
  await writeFile(
    "dist/vergelijk/index.html",
    `<!doctype html><html lang="nl-NL"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex,nofollow"><title>Vergelijk de concepten | DE BOUW PRO</title><link rel="stylesheet" href="/assets/styles.css"><link rel="stylesheet" href="/assets/legal.css"></head><body><main class="shell section legal-hero"><p class="eyebrow">Playground · conceptvergelijking</p><h1>Naast elkaar.<br>Rustig vergelijken.</h1><p class="legal-lead">Test-referentie ee2bcad en de nieuwe Playground-uitwerking. De Test-website is niet gewijzigd.</p><div class="legal-document-grid"><section class="legal-document-card"><h2>Test-referentie</h2><p>Vastgelegde weergave van de aangeleverde Test-versie.</p><p><a href="/vergelijk/test/">Bekijk de oorspronkelijke hoofdpagina</a></p><p><a href="/vergelijk/test/energy/">Bekijk de oorspronkelijke Energy-pagina</a></p><p><a href="https://debouwpro-test.andrey-57c.workers.dev/" target="_blank" rel="noopener noreferrer">Open de actuele Test-website</a></p></section><section class="legal-document-card"><h2>Nieuw concept</h2><p>Warm eerste scherm, iconen of foto’s, compacte projecten en een donkere footer.</p><p><a href="/">Bekijk de nieuwe hoofdpagina</a></p><p><a href="/energy/">Bekijk de nieuwe Energy-pagina</a></p><p><a href="/vergelijk/licht/">Bekijk ook het lichte eerste scherm</a></p></section></div></main></body></html>`,
  );
}
