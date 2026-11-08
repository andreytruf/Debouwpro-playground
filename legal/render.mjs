import { articles, company, version, status } from "./voorwaarden.mjs";
export const esc = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
export const pdfPath =
  "/assets/legal/de-bouw-pro-algemene-voorwaarden-concept-2026-11-08.pdf";
export const formsPath =
  "/assets/legal/de-bouw-pro-projectformulieren-concept-2026-11-08.pdf";
export const articleHtml = () =>
  articles
    .map(
      ([title, paragraphs], i) =>
        `<section class="legal-article" id="artikel-${i + 1}"><h2><span>${String(i + 1).padStart(2, "0")}</span> ${esc(title)}</h2>${paragraphs.map((p, j) => `<p><strong class="clause-number">${i + 1}.${j + 1}</strong> ${esc(p)}</p>`).join("")}</section>`,
    )
    .join("");
export function renderLegal(home) {
  const header = home
    .match(/<header\b[\s\S]*?<\/header>/)[0]
    .replaceAll('href="#', 'href="/#');
  const footer = home
    .match(/<footer\b[\s\S]*?<\/footer>/)[0]
    .replaceAll('href="#home"', 'href="/#home"');
  return `<!doctype html><html lang="nl-NL"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="robots" content="noindex, nofollow"><meta name="theme-color" content="#F2F0EC"><title>Algemene voorwaarden — concept | DE BOUW PRO</title><meta name="description" content="Concept algemene voorwaarden voor renovatie en energie-installaties van DE BOUW PRO. Lees de artikelen en download de PDF voor beoordeling."><link rel="icon" href="/assets/favicon.svg" type="image/svg+xml"><link rel="stylesheet" href="/assets/styles.css"><link rel="stylesheet" href="/assets/legal.css"><script src="/assets/site.js" defer></script></head><body class="legal-page"><a class="skip-link" href="#main">Ga naar inhoud</a>${header}<main id="main"><section class="legal-hero shell"><nav class="legal-breadcrumb" aria-label="Broodkruimel"><a href="/">DE BOUW PRO</a><span aria-hidden="true">/</span><span>Algemene voorwaarden</span></nav><p class="eyebrow">Duidelijkheid voor ieder project</p><h1>Heldere afspraken.<br>Goed <em>geregeld.</em></h1><p class="legal-lead">Algemene voorwaarden voor renovatie, aanneming en energie-installaties.</p><div class="legal-status"><strong>Concept voor beoordeling</strong><p>Versie ${esc(version)}. Deze tekst is nog niet vastgesteld voor gebruik bij offertes of overeenkomsten. Publicatie in deze Playground wijzigt geen bestaande afspraken.</p></div><div class="legal-downloads"><a class="button button-dark" href="${pdfPath}" download>Download voorwaarden · PDF <svg class="arrow" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 19 19 5M5 5h14v14" /></svg></a><a class="text-link" href="${formsPath}" download>Projectformulieren · PDF <svg class="arrow" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 19 19 5M5 5h14v14" /></svg></a></div><p class="legal-meta">${esc(company.name)} · KvK ${company.kvk}<br>${esc(company.address)} · <a href="mailto:${company.email}">${company.email}</a></p></section><div class="shell legal-layout"><aside class="legal-index"><nav aria-label="Inhoud voorwaarden"><h2>Inhoud</h2><ol>${articles.map(([title], i) => `<li><a href="#artikel-${i + 1}">${esc(title)}</a></li>`).join("")}</ol></nav></aside><div class="legal-content">${articleHtml()}<section class="legal-article" id="contact"><p class="eyebrow">Een afspraak bespreken?</p><h2>Neem contact <em>op.</em></h2><p>We leggen de scope, prijs en uitvoering vast in een voorstel voor jouw project.</p><div class="legal-downloads"><a class="button button-dark" href="mailto:${company.email}">Stel je vraag <svg class="arrow" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 19 19 5M5 5h14v14" /></svg></a><a class="text-link" href="tel:+31612350850">${company.phone}</a></div></section></div></div></main>${footer}</body></html>`;
}
export const printCss = `@page{size:A4;margin:20mm 18mm 19mm}*{box-sizing:border-box}body{font:10pt/1.48 Arial,Helvetica,sans-serif;color:#1a1a1a;margin:0}h1{font-size:29pt;line-height:1.05;letter-spacing:-1pt;margin:8mm 0 5mm}h2{font-size:14pt;line-height:1.2;margin:7mm 0 3mm;break-after:avoid}h3{font-size:11pt;break-after:avoid}p,li{orphans:3;widows:3}p{margin:0 0 3mm}a{color:#87421f}ul,ol{padding-left:5mm}.print-brand{font-size:14pt;font-weight:bold;letter-spacing:-.5pt}.print-brand span{color:#a94f28;font-weight:normal}.print-kicker{text-transform:uppercase;letter-spacing:1.6pt;font-size:8pt;margin-top:7mm}.print-status{padding:4mm;border:1px solid #a94f28;margin:5mm 0;font-size:9pt}.print-meta{font-size:9pt;color:#555}.legal-article h2 span,.clause-number{color:#555;font-size:9pt}.print-new-page{break-before:page}.field{min-height:10mm;border-bottom:1px solid #aaa;margin:0 0 4mm}.field.big{min-height:22mm}.box{border:1px solid #bbb;padding:4mm;margin:4mm 0}.checks p{padding-left:5mm;text-indent:-5mm}table{border-collapse:collapse;width:100%;font-size:9pt;margin:4mm 0}th,td{border:1px solid #bbb;padding:3mm;text-align:left;vertical-align:top}td{height:12mm} .signature{margin-top:8mm;display:flex;gap:10mm}.signature p{width:50%;border-top:1px solid #777;padding-top:2mm} .print-toc{columns:2;font-size:9pt}.print-toc li{break-inside:avoid;margin-bottom:2mm}`;
export const printShell = (title, body) =>
  `<!doctype html><html lang="nl-NL"><head><meta charset="utf-8"><title>${esc(title)} | DE BOUW PRO | ${esc(version)}</title><style>${printCss}</style></head><body><div class="print-brand">DE BOUW <span>PRO</span></div>${body}</body></html>`;
export function renderTermsPrint() {
  return printShell(
    "Algemene voorwaarden — concept",
    `<p class="print-kicker">Renovatie · Aanneming · Energy</p><h1>Algemene<br>voorwaarden</h1><p>${esc(company.name)} · KvK ${company.kvk}<br>${esc(company.address)}<br>${company.email} · ${company.phone}</p><div class="print-status"><strong>${status}</strong><p>Versie ${version}. Dit is een inhoudelijk voorstel, geen juridisch goedgekeurde of reeds toepasselijk verklaarde set. Eerst controle van contractspartij, verzekering en juridische toepasbaarheid; daarna vaststelling en verstrekking vóór contractsluiting.</p></div><h2>Inhoud</h2><ol class="print-toc">${articles.map(([t]) => `<li>${esc(t)}</li>`).join("")}</ol><p class="print-meta">De afzonderlijke projectformulieren horen bij de praktische voorbereiding. Een websiteverwijzing alleen vervangt de vereiste verstrekking en contractafspraken niet.</p><div class="print-new-page">${articleHtml()}</div>`,
  );
}
