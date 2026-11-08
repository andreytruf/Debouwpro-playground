import { readFileSync } from "node:fs";
import { esc, printShell } from "./render.mjs";
export const documents = JSON.parse(
  readFileSync(new URL("./drive-sources.json", import.meta.url), "utf8"),
).map((d, i) => ({
  ...d,
  label: [
    "Particulieren",
    "Zakelijk / B2B",
    "ZZP / Onderaanneming",
    "Energy",
    "Oplevering & fototoestemming",
    "Privacyverklaring",
  ][i],
  version: i === 0 ? "0.3" : i === 5 ? "0.1" : "0.2",
  pdf: `/assets/legal/drive-${String(i + 1).padStart(2, "0")}-concept-v${i === 0 ? "03" : i === 5 ? "01" : "02"}.pdf`,
}));
export function sourceHtml(d) {
  return d.content
    .split("\n")
    .map((line) =>
      /^Artikel \d+|^Bijlage A|^\d+\. [A-Z]/.test(line)
        ? `<h2>${esc(line)}</h2>`
        : `<p>${esc(line)}</p>`,
    )
    .join("");
}
export function documentPrint(d) {
  return printShell(
    d.label + " — CONCEPT v" + d.version,
    `<div class="print-status"><strong>PLAYGROUND REVIEWKOPIE — CONCEPT v${d.version}</strong><p>Niet juridisch goedgekeurd of in werking getreden. Werkbron: ${esc(d.title)}. Alleen opmaak aangepast; interne publicatiecheck weggelaten. Open invulvelden blijven ter verificatie staan.</p></div>${sourceHtml(d)}`,
  ).replace(
    "2026-11-08 · concept 1.0",
    `2026-11-08 · Drive CONCEPT v${d.version}`,
  );
}
export function renderDocuments(home) {
  const header = home
    .match(/<header\b[\s\S]*?<\/header>/)[0]
    .replaceAll('href="#', 'href="/#');
  const footer = home
    .match(/<footer\b[\s\S]*?<\/footer>/)[0]
    .replaceAll('href="#home"', 'href="/#home"');
  return `<!doctype html><html lang="nl-NL"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="robots" content="noindex, nofollow"><title>Algemene voorwaarden — conceptdocumenten | DE BOUW PRO</title><meta name="description" content="Afzonderlijke conceptdocumenten voor Particulieren, Zakelijk, ZZP en Energy. Alleen ter beoordeling, niet vastgesteld voor contractueel gebruik."><link rel="icon" href="/assets/favicon.svg" type="image/svg+xml"><link rel="stylesheet" href="/assets/styles.css"><link rel="stylesheet" href="/assets/legal.css"><script src="/assets/site.js" defer></script></head><body class="legal-page"><a class="skip-link" href="#main">Ga naar inhoud</a>${header}<main id="main"><section class="legal-hero shell"><p class="eyebrow">Juridische documenten · werkversies</p><h1>De juiste afspraken.<br>Per <em>opdracht.</em></h1><p class="legal-lead">Afzonderlijke documenten voor particuliere klanten, zakelijke opdrachten, onderaanneming en Energy.</p><div class="legal-status"><strong>CONCEPT — uitsluitend voor beoordeling</strong><p>De documenten uit de werkmap van 8 november 2026 zijn nog niet juridisch goedgekeurd of formeel vastgesteld. Downloaden, bezoeken of een adviesvraag versturen maakt ze niet van toepassing. Open partijgegevens en andere invulvelden moeten nog worden gecontroleerd.</p></div><p>De toepasselijke versie en rangorde worden vóór een overeenkomst afzonderlijk vastgelegd. Energy is een aanvulling op de passende hoofdovereenkomst; het is geen vervanging van consumenten- of B2B-voorwaarden.</p></section><section class="shell legal-document-grid" aria-label="Conceptdocumenten">${documents.map((d) => `<article class="legal-document-card"><p class="eyebrow">${String(d.number).padStart(2, "0")} / CONCEPT v${d.version}</p><h2>${esc(d.label)}</h2><p>${esc(["Voor rechtstreeks bestelde particuliere renovatie- en installatiewerkzaamheden.", "Voor professionele opdrachtgevers; partnercontracten worden apart beoordeeld.", "Afzonderlijk model voor zelfstandige onderaannemers, met projectbijlage.", "Aanvulling voor opslag, laden, omvormers en warmtepompen.", "Oplevering en vrijwillige fototoestemming met aparte keuze voor beperkte AI-bewerking.", "Werkversie uit Drive; de website bevat daarnaast feitelijke auditbevindingen en open controlepunten."][d.number - 1])}</p><a class="text-link" href="${d.pdf}" download>Download concept · PDF <span aria-hidden="true">↓</span></a>${d.number === 6 ? '<p><a href="/privacy/">Lees de privacy-pagina</a></p>' : ""}</article>`).join("")}</section><section class="section shell" id="contact"><h2>Een vraag over<br>de <em>afspraken?</em></h2><p>Neem contact op via <a href="mailto:hello@debouwpro.nl">hello@debouwpro.nl</a>.</p><p class="legal-meta">De eerdere gecombineerde tekst met 21 artikelen is referentiemateriaal en wordt hier niet als actuele voorwaarden aangeboden. De genoemde garanties in de conceptdocumenten zijn geen nieuwe, reeds ingegane websitebelofte.</p></section></main>${footer}</body></html>`;
}
