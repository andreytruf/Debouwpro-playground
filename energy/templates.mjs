import { renderShowcase, photo, photoNote } from "./showcase.mjs";
import { renovations } from "./renovations.mjs";
import { brands, landingFAQ } from "./content.mjs";
const arrow =
  '<svg class="arrow" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 19 19 5M5 5h14v14"/></svg>';
const esc = (text) =>
  String(text)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll('"', "&quot;");
const line = (text) => text.split("\n").map(esc).join("<br>");
const button = (text, href = "#contact", secondary = false) =>
  `<a class="button ${secondary ? "energy-outline" : "button-dark"}" href="${href}">${text}<span aria-hidden="true">${arrow}</span></a>`;
const image = (brand, priority = false) => photo(brand.slug, priority);
const head = (eyebrow, title, text = "") =>
  `<div class="section-heading"><div><p class="eyebrow">${eyebrow}</p><h2>${title}</h2></div>${text ? `<p>${text}</p>` : ""}</div>`;
const faqs = (items, title = "Goed om<br>te weten.") =>
  `<section class="section shell faq" aria-labelledby="faq-title"><div><p class="eyebrow">Jouw vragen, helder beantwoord</p><h2 id="faq-title">${title}</h2></div><div class="faq-list">${items.map(([q, a]) => `<details><summary>${esc(q)}</summary><p>${esc(a)}</p></details>`).join("")}</div></section>`;

function card(b) {
  return `<article class="energy-card theme-${b.slug}" data-category="${b.filter.join(" ")}"><a href="/energy/${b.slug}" aria-label="Ontdek ${esc(b.name)} — ${esc(b.kicker)}"><figure><div class="card-visual">${image(b)}</div><figcaption class="visual-disclaimer">${photoNote(b.slug)}</figcaption></figure><div class="card-body"><p class="eyebrow">${esc(b.category)}</p><div class="card-title"><h3>${b.name}</h3><span aria-hidden="true">${arrow}</span></div><p class="card-products">${esc(b.kicker)}</p><p>${esc(b.card)}</p><span class="card-link">Ontdek ${b.name} <span aria-hidden="true">↗</span></span></div></a></article>`;
}

function contact(brand) {
  const subject = `PRO ENERGY — ${brand ? brand.name : "adviesaanvraag"}`;
  const mail = `mailto:hello@debouwpro.nl?subject=${encodeURIComponent(subject)}&amp;body=${encodeURIComponent("Woonplaats: \n\nMijn woning en plannen: \n\nBestaande installatie: \n\nGewenste periode: ")}`;
  return `<section class="contact section energy-contact" id="contact" aria-labelledby="contact-title"><div class="shell contact-grid"><div><p class="eyebrow">DE BOUW PRO Energy · Utrecht & omgeving</p><h2 id="contact-title">Jouw woning.<br>Een helder <em>energieplan.</em></h2><p class="contact-intro">${brand ? `Benieuwd of ${esc(brand.name)} bij jouw woning past?` : "Een eerste stap of een compleet systeem?"} Vertel ons je plannen. We denken mee over een passende oplossing.</p></div><div class="contact-options">${button("Vraag advies aan", mail)}<a class="contact-phone" href="tel:+31612350850"><span>Liever even bellen?</span><strong>+31 6 12350850 <span aria-hidden="true">${arrow}</span></strong></a><a class="text-link" href="mailto:hello@debouwpro.nl">hello@debouwpro.nl ${arrow}</a><p class="contact-tip">Stuur je woonplaats, je huidige installatie en je wensen mee. De mailknop opent je eigen mailprogramma.</p></div></div></section>`;
}

function flow(heat = false) {
  const nodes = heat
    ? [
        ["01 / Bron", "Buitenlucht"],
        ["02 / Techniek", "Warmtepomp"],
        ["03 / Afgifte", "Warmte in huis"],
      ]
    : [
        ["01 / Opwek", "Zonnepanelen"],
        ["02 / Omzetting", "Omvormer"],
        ["03 / Opslag", "Thuisbatterij"],
        ["04 / Gebruik", "Woning & auto"],
      ];
  return `<figure class="energy-flow"><ol>${nodes.map(([small, big]) => `<li><span>${small}</span><strong>${big}</strong></li>`).join("")}</ol><figcaption>Schematisch principe. ${heat ? "Regeling, cv-koppeling en warm tapwater verschillen per ontwerp." : "De meterkast verbindt de onderdelen. Meting en regeling sturen het gebruik; compatibiliteit wordt per combinatie gecontroleerd."}</figcaption></figure>`;
}

function shell(home, { title, description, body, brand }) {
  const originalHeader = home.match(/<header\b[\s\S]*?<\/header>/)[0];
  const originalFooter = home.match(/<footer\b[\s\S]*?<\/footer>/)[0];
  const header = originalHeader
    .replaceAll('href="#', 'href="/#')
    .replace(
      'href="/energy"',
      `href="/energy" aria-current="${brand ? "location" : "page"}"`,
    );
  const footer = originalFooter
    .replaceAll('href="#home"', 'href="/#home"')
    .replace('href="/#home"\n', 'href="/#home"\n');
  const footerWithTop = footer.replace(
    /(<a class="text-link" href=")\/#home/,
    "$1#energy-top",
  );
  return `<!doctype html><html lang="nl-NL"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="theme-color" content="#F2F0EC"><meta name="robots" content="noindex, nofollow"><title>${esc(title)}</title><meta name="description" content="${esc(description)}"><meta property="og:type" content="website"><meta property="og:locale" content="nl_NL"><meta property="og:site_name" content="DE BOUW PRO Energy"><meta property="og:title" content="${esc(title)}"><meta property="og:description" content="${esc(description)}"><meta property="og:image" content="https://debouwpro-playground.andrey-57c.workers.dev${brand ? `/assets/energy/photo/${brand.slug}-1600.webp` : `/assets/images/living-1280.webp`}"><meta property="og:image:alt" content="${brand ? photoNote(brand.slug) : "Architectuurreferentie; geen DE BOUW PRO project"}"><link rel="icon" href="/assets/favicon.svg" type="image/svg+xml"><link rel="stylesheet" href="/assets/styles.css"><link rel="stylesheet" href="/assets/energy.css"><link rel="stylesheet" href="/assets/showcase.css"><script src="/assets/site.js" defer></script><script src="/assets/energy.js" defer></script></head><body class="energy-page ${brand ? "brand-page theme-" + brand.slug : "energy-landing"}"><a class="skip-link" href="#main">Ga naar inhoud</a>${header}<main id="main">${body}</main>${footerWithTop}<div class="mobile-contact" aria-label="Snel contact"><a href="tel:+31612350850">Bel ons <span aria-hidden="true">${arrow}</span></a><a href="#contact">Vraag advies aan <span aria-hidden="true">${arrow}</span></a></div></body></html>`;
}

export function renderLanding(home) {
  const body = `
 <section class="energy-hero" id="energy-top" aria-labelledby="energy-title">
  <img class="energy-hero-photo" src="/assets/images/living-1280.webp" srcset="/assets/images/living-640.webp 640w, /assets/images/living-1280.webp 1280w" sizes="100vw" width="1280" height="870" fetchpriority="high" alt="Lichte architecturale woning als sfeerreferentie; geen eigen project">
  <div class="shell energy-hero-content"><p class="eyebrow">DE BOUW PRO Energy · Utrecht & omgeving</p><h1 id="energy-title">PRO <span>ENERGY</span><span class="energy-title-dot" aria-hidden="true">.</span></h1><p class="energy-tagline">Slimme energie.<br><em>Mooi geïntegreerd.</em></p><p class="energy-hero-intro">Een zorgvuldig gekozen energiesysteem.<br>Van eerste plan tot de laatste aansluiting.</p><div class="energy-actions">${button("Vraag advies aan")}${button("Ontdek de mogelijkheden", "#mogelijkheden", true)}</div></div>
  <div class="shell hero-bottom"><span>Bewust geselecteerd. Vakkundig geïnstalleerd.</span><span>Sfeerbeeld · geen eigen project</span></div>
 </section>
 <div class="energy-subnav"><nav class="shell" aria-label="Op deze pagina"><a href="#mogelijkheden">Mogelijkheden</a><a href="#selectie">Onze selectie</a><a href="#samenspel">Het samenspel</a><a href="#werkwijze">Installatie</a><a href="#contact">Advies ${arrow}</a></nav></div>
 <section class="section shell energy-intro"><div><p class="eyebrow">01 / Een bewuste keuze</p><h2>Niet alles.<br>Alleen wat <em>klopt.</em></h2></div><div class="intro-copy reveal"><p class="lead">Goede energieoplossingen beginnen niet bij een eindeloze catalogus. Ze beginnen bij jouw woning.</p><p>PRO ENERGY is de energiedivisie van DE BOUW PRO. We richten ons op een gerichte selectie systemen voor opslag, laden, opwek en warmte. Met aandacht voor techniek, plaatsing en de uitstraling van je huis.</p><p>We kijken wat samenwerkt, wat je nodig hebt en wat je kunt voorbereiden voor later. Bewust geselecteerd. Vakkundig geïnstalleerd.</p></div></section>
 <section class="section energy-wash" id="mogelijkheden"><div class="shell">${head("02 / Vier richtingen, één woning", "Wat wil je<br><em>verduurzamen?</em>", "Een losse stap mag. Een samenhangend plan maakt de volgende stap eenvoudiger.")}<div class="category-grid">
 ${[
   [
     "01",
     "Thuisbatterijen",
     "Bewaar elektriciteit voor later. De juiste capaciteit volgt uit je opwek en verbruik.",
     "opslag",
   ],
   [
     "02",
     "EV-laden",
     "Een laadpunt op de juiste plek, afgestemd op je auto en huisaansluiting.",
     "laden",
   ],
   [
     "03",
     "Zonne-energie",
     "Van dak en omvormer tot meterkast: een doordacht ontwerp voor eigen opwek.",
     "zon",
   ],
   [
     "04",
     "Warmtepompen",
     "Comfort begint bij warmteverlies, isolatie en een passend afgiftesysteem.",
     "warmte",
   ],
 ]
   .map(
     ([n, title, p, f]) =>
       `<a class="category" href="#selectie" data-category-link="${f}"><span class="eyebrow">${n} / PRO ENERGY</span><h3>${title}</h3><p>${p}</p><span class="text-link">Bekijk de mogelijkheden ${arrow}</span></a>`,
   )
   .join("")}
 </div></div></section>
 <section class="section shell" id="selectie">${head("03 / Onze selectie", "Zes merken.<br>Eén <em>helder vertrekpunt.</em>", "Gekozen om hun plaats in een doordacht woningplan. Het exacte model en de compatibiliteit bepalen we samen.")}<div class="energy-filters" role="group" aria-label="Filter oplossingen" hidden>${[
   ["alles", "Alle oplossingen"],
   ["opslag", "Opslag"],
   ["laden", "Laden"],
   ["zon", "Zon"],
   ["warmte", "Warmte"],
 ]
   .map(
     ([v, t]) =>
       `<button type="button" data-filter="${v}" aria-pressed="${v === "alles"}">${t}</button>`,
   )
   .join(
     "",
   )}</div><p class="filter-status" aria-live="polite" aria-atomic="true"></p><div class="energy-cards">${brands.map(card).join("")}</div><p class="energy-note">Merknamen dienen ter productidentificatie. We claimen geen officiële partner- of installateursstatus. Beschikbaarheid en uitvoeringsvoorwaarden bevestigen we vóór opdracht.</p></section>
 <section class="section energy-dark" id="samenspel"><div class="shell">${head("04 / De kracht van het samenspel", "Je dak. Je batterij.<br>Je auto. <em>Eén plan.</em>", "Overdag opwekken, energie bewaren en laden op een passend moment. Niet als losse apparaten, maar als onderdelen van een zorgvuldig afgestemde installatie.")} ${flow()}<div class="integration-bottom"><p>Een verbinding op papier is nog geen werkend systeem. We controleren omvormer, batterij, meting en laadregeling op hun concrete mogelijkheden. Dezelfde aandacht gaat naar kabelroutes, veiligheid en een rustige afwerking.</p><a class="text-link" href="#contact">Bespreek een geïntegreerd plan ${arrow}</a></div></div></section>
 <section class="section shell">${head("05 / Waarom DE BOUW PRO Energy?", "Techniek die klopt.<br>Ook in je <em>interieur.</em>")}<div class="energy-benefits">${[
   [
     "Gericht geselecteerd",
     "Geen oneindige productlijst. We maken de afweging op basis van jouw woning, gebruik en plannen.",
   ],
   [
     "Installatie in samenhang",
     "Elektra, leidingwerk en afwerking meenemen in één traject voorkomt losse beslissingen.",
   ],
   [
     "Heldere afstemming",
     "Je bespreekt scope, modelkeuze en benodigde aanpassingen voordat het werk begint.",
   ],
 ]
   .map(
     ([t, p], i) =>
       `<article><span class="eyebrow">0${i + 1}</span><h3>${t}</h3><p>${p}</p></article>`,
   )
   .join("")}</div></section>
 <section class="section energy-wash" id="werkwijze"><div class="shell">${head("06 / Van advies naar aansluiting", "Rust in het proces.<br>Precisie in de <em>uitvoering.</em>")}<ol class="steps">${[
   [
     "Woning & wensen",
     "We bespreken je gebruik, bestaande installatie en toekomstplannen.",
   ],
   [
     "Opname & ontwerp",
     "We controleren techniek, ruimte, routes en compatibiliteit.",
   ],
   [
     "Voorstel & installatie",
     "Na akkoord stemmen we uitvoering, elektra en afwerking op elkaar af.",
   ],
   [
     "Instellen & uitleg",
     "We nemen het systeem door, bespreken de bediening en leggen afspraken vast.",
   ],
 ]
   .map(
     ([t, p], i) =>
       `<li class="reveal"><span class="step-number">0${i + 1}<span aria-hidden="true">—</span></span><h3>${t}</h3><p>${p}</p></li>`,
   )
   .join("")}</ol></div></section>
 ${renovations()}
 ${faqs(landingFAQ)}${contact()}`;
  return shell(home, {
    title: "PRO ENERGY · Slimme energie in Utrecht | DE BOUW PRO",
    description:
      "Gerichte energieoplossingen voor jouw woning in Utrecht: thuisbatterijen, EV-laden, zonnepanelen en warmtepompen. Advies en installatie door DE BOUW PRO Energy.",
    body,
  });
}

export function renderBrand(home, b) {
  const heat = b.filter.includes("warmte");
  const body = `<div class="shell breadcrumbs" id="energy-top"><nav aria-label="Kruimelpad"><a href="/">DE BOUW PRO</a><span aria-hidden="true">/</span><a href="/energy">PRO ENERGY</a><span aria-hidden="true">/</span><span aria-current="page">${b.name}</span></nav></div>
 ${renderShowcase(b)}
 <section class="section energy-wash"><div class="shell energy-specs"><div><p class="eyebrow">02 / De juiste uitvoering</p><h2>Van mogelijkheden<br>naar <em>modelkeuze.</em></h2><p class="spec-intro">Dit is een selectie van fabrikantgegevens, geen volledige productspecificatie. In het voorstel leggen we model, configuratie en voorwaarden vast.</p></div><div><dl>${b.specs.map(([t, p]) => `<div><dt>${esc(t)}</dt><dd>${esc(p)}</dd></div>`).join("")}</dl><details class="source-details"><summary>Bronnen & productdocumentatie</summary><div><p>Geraadpleegd op 2 november 2026. Specificaties kunnen wijzigen. Controleer de actuele documentatie voor de gekozen uitvoering.</p><ul>${b.sources.map(([t, u]) => `<li><a href="${esc(u)}" target="_blank" rel="noopener noreferrer">${esc(t)} <span class="sr-only">(opent in een nieuw tabblad)</span>${arrow}</a></li>`).join("")}</ul></div></details></div></div></section>
 <section class="section energy-dark"><div class="shell">${head("03 / Integratie & installatie", "De beste plek.<br>De juiste <em>verbinding.</em>", esc(b.installation))}${flow(heat)}<p class="energy-note dark-note">${heat ? "Een goed verwarmingsplan houdt ook rekening met geluid, vrije ruimte, vorstbeveiliging en onderhoudstoegang." : "Ondersteunde functies en meetaccessoires worden per systeem vastgesteld. Geen automatische compatibiliteit tussen alle merken."}</p></div></section>
 <section class="section shell">${head("04 / Past het bij jou?", "Je woning is<br>het <em>vertrekpunt.</em>")}<div class="energy-benefits">${b.applications.map(([t, p], i) => `<article><span class="eyebrow">0${i + 1}</span><h3>${esc(t)}</h3><p>${esc(p)}</p></article>`).join("")}</div></section>
 ${faqs(b.faq)}${contact(b)}
 <section class="section shell related">${head("Verder kijken", "Ook het overwegen <em>waard.</em>")}<div class="related-links">${b.related
   .map((s) => {
     const r = brands.find((x) => x.slug === s);
     return `<a href="/energy/${s}"><span><small>${r.category}</small><strong>${r.name}</strong></span>${arrow}</a>`;
   })
   .join(
     "",
   )}</div><a class="text-link" href="/energy">Terug naar alle Energy-oplossingen ${arrow}</a></section>`;
  return shell(home, {
    title: `${b.name} ${b.kicker} · Utrecht | DE BOUW PRO Energy`,
    description: `${b.name} voor jouw woning in Utrecht en omgeving. ${b.card} Ontdek mogelijkheden, installatie en advies bij DE BOUW PRO Energy.`,
    body,
    brand: b,
  });
}
