// Distinct editorial compositions; shared specifications and contact remain in templates.mjs.
const arrow =
  '<svg class="arrow" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 19 19 5M5 5h14v14"/></svg>';
export const aiNote =
  "AI-sfeerbeeld · geen eigen project of exacte productweergave";
const notes = {
  tesla: "AI-architectuurconcept met Model Y · geen eigen installatie",
  ecoflow: aiNote,
  goodwe: aiNote,
  peblar: aiNote,
  samsung:
    "AI-architectuurconcept · getoonde unit is geen Samsung-productweergave",
  whspr: "AI-architectuurconcept · getoonde unit is geen Whspr-productweergave",
};
const alt = {
  tesla: "AI-concept van een moderne villa met witte Model Y bij avondlicht",
  ecoflow: "AI-sfeerbeeld van een lichte technische ruimte met eiken afwerking",
  goodwe: "AI-sfeerbeeld van een moderne woning met zonnepanelen",
  peblar: "AI-concept van een houten carport met elektrische auto",
  samsung:
    "AI-architectuurconcept van een woning met generieke buitenunit, geen Samsung-model",
  whspr:
    "AI-architectuurconcept bij een Nederlandse rijwoning, geen Whspr-productfoto",
};
export const photo = (slug, priority = false, cls = "") =>
  `<img class="${cls}" src="/assets/energy/photo/${slug}-1600.webp" srcset="/assets/energy/photo/${slug}-720.webp 720w, /assets/energy/photo/${slug}-1600.webp 1600w" sizes="(max-width:760px) 100vw, 100vw" width="1600" height="900" ${priority ? 'fetchpriority="high"' : 'loading="lazy" decoding="async"'} alt="${alt[slug]}">`;
export const photoNote = (slug) => notes[slug];
const actions = () =>
  `<div class="energy-actions"><a class="button button-dark" href="#contact">Vraag advies aan <span>${arrow}</span></a><a class="button energy-outline" href="#mogelijkheden">Ontdek de mogelijkheden <span>${arrow}</span></a></div>`;
const label = (t) => `<p class="eyebrow">${t}</p>`;
const link = (t, url) =>
  `<a class="text-link" href="${url}" target="_blank" rel="noopener noreferrer">${t} ${arrow}<span class="sr-only"> (nieuw tabblad)</span></a>`;
const caption = (slug) =>
  `<figcaption class="photo-credit">${notes[slug]}</figcaption>`;
const picture = (slug, cls = "") =>
  `<figure class="editorial-photo ${cls}">${photo(slug)}${caption(slug)}</figure>`;
const steps = (items) =>
  `<ol class="design-steps">${items.map(([t, p], i) => `<li><span>0${i + 1}</span><div><h3>${t}</h3><p>${p}</p></div></li>`).join("")}</ol>`;
const proof = (items) =>
  `<div class="product-proof">${items.map(([v, t]) => `<div><strong>${v}</strong><span>${t}</span></div>`).join("")}</div>`;

function tesla(b) {
  return `
<section class="cinema-hero showcase-hero" aria-labelledby="brand-title">${photo("tesla", true)}<div class="shell cinema-content">${label("PRO ENERGY / Tesla")}<h1 id="brand-title">Thuis begint<br>je <em>energie.</em></h1><p>Powerwall. Wall Connector. Een energieplan dat past bij de manier waarop je woont en rijdt.</p>${actions()}</div><span class="hero-image-credit">${notes.tesla}</span></section>
${proof([
  ["13,5 kWh", "Powerwall · per unit"],
  ["Type 2", "Wall Connector · Europese uitvoering"],
  ["Tot 22 kW", "AC-laden · aansluiting en auto bepalend"],
])}
<section class="section shell product-duet" id="mogelijkheden"><figure class="authentic-photo"><img src="/assets/energy/photo/tesla-powerwall3.webp" width="1200" height="1218" loading="lazy" decoding="async" alt="Twee echte Tesla Powerwall 3-units in een woning, foto door Rsparks3"><figcaption>Powerwall 3 referentie · Rsparks3 / Wikimedia Commons · <a href="https://creativecommons.org/publicdomain/zero/1.0/" target="_blank" rel="noopener">CC0</a>. Geen DE BOUW PRO-project; Nederlandse uitvoering apart te bevestigen.</figcaption></figure><div>${label("01 / Powerwall")}<h2>Vandaag opgewekt.<br>Later <em>gebruikt.</em></h2><p class="design-lead">Opslag maakt energie ook op een ander moment beschikbaar. De juiste capaciteit begint bij je eigen verbruik.</p>${steps(
    [
      [
        "Bewaren",
        "Neem zonnepanelen, pieken en dagelijks gebruik samen mee in het batterijontwerp.",
      ],
      [
        "Inzicht houden",
        "Ondersteunde functies zijn via de Tesla-app te volgen en te bedienen.",
      ],
      [
        "Back-up bewust kiezen",
        "Benodigde schakeling, vermogen en ondersteunde verbruikers worden apart ontworpen.",
      ],
    ],
  )}${link("Bekijk Powerwall bij Tesla", b.sources[0][1])}</div></section>
<section class="section energy-dark connector-story"><div class="shell connector-layout"><div>${label("02 / Wall Connector")}<h2>Aansluiten.<br>En weer <em>verder.</em></h2><p class="design-lead">Een eigen laadplek zonder losse eindjes. Van de meterkast tot de plek waar je de kabel pakt.</p><p>Wall Connector ondersteunt Type 2. Het maximale laadvermogen is afhankelijk van je auto en aansluiting; dynamische vermogensregeling vraagt een geschikte, afzonderlijke meter.</p>${link("Originele Wall Connector-productbeelden", b.sources[1][1])}</div><div class="charging-typography"><span>THUIS</span><div class="charge-line" aria-hidden="true"></div><span>ONDERWEG</span><p>Auto + huisaansluiting + meting.<br>Eerst afstemmen, dan aansluiten.</p><small>Principeschema · geen productafbeelding</small></div></div></section>`;
}

function ecoflow(b) {
  return `
<section class="ecoflow-hero showcase-hero shell" aria-labelledby="brand-title"><div>${label("PRO ENERGY / EcoFlow PowerOcean")}<h1 id="brand-title">Begin passend.<br>Groei <em>doordacht.</em></h1><p>Modulaire thuisopslag en helder energie-inzicht. Een systeem dat je niet groter maakt dan nodig.</p>${actions()}</div><figure>${photo("ecoflow", true)}${caption("ecoflow")}<span class="editorial-stamp">POWER<br>OCEAN</span></figure></section>
<section class="section energy-wash" id="mogelijkheden"><div class="shell modular-layout"><div>${label("01 / Modulaire thuisopslag")}<h2>Een volgende stap.<br>Geen nieuw <em>begin.</em></h2><p class="design-lead">PowerOcean driefase begint bij één batterijmodule van 5 kWh. Bekijk hieronder drie mogelijke capaciteitsstappen.</p><p>Dit is een opbouwvoorbeeld. Je woning, omvormer, opwek en verbruik bepalen de passende configuratie. De beschreven driefase-oplossing is onder voorwaarden uitbreidbaar tot 45 kWh.</p>${link("Originele PowerOcean-productbeelden", b.sources[0][1])}</div><div class="module-explorer" data-module-explorer><p class="eyebrow">Verken de opbouw · geen configuratieadvies</p><div class="module-choices" role="group" aria-label="Voorbeeldcapaciteit">${[1, 2, 3].map((n) => `<button type="button" data-modules="${n}" aria-pressed="${n === 1}">${n * 5} kWh</button>`).join("")}</div><div class="abstract-stack" aria-hidden="true"><div class="stack-head"></div>${[1, 2, 3].map((n) => `<div class="stack-layer ${n === 1 ? "is-active" : ""}" data-layer="${n}"></div>`).join("")}</div><p class="module-result" aria-live="polite">1 module · 5 kWh voorbeeldcapaciteit</p><small>Opbouwschema, geen productweergave. Alleen PowerOcean driefase; uitvoering en uitbreidingsvoorwaarden te controleren.</small></div></div></section>
<section class="section shell monitoring-story">${label("02 / Inzicht zonder ruis")}<h2>Weten wat er stroomt.<br>Begrijpen wat je <em>gebruikt.</em></h2><div class="monitoring-grid"><p class="design-lead">In de EcoFlow-app en het webportaal volg je ondersteunde gegevens over opwek, opslag en verbruik. Welke regeling wordt ingericht, leggen we vast in het voorstel.</p><div class="energy-rhythm"><span>OPWEKKEN</span><span>BEWAREN</span><span>GEBRUIKEN</span><small>Energieprincipe · geen live meetgegevens</small></div></div></section>`;
}

function goodwe(b) {
  return `
<section class="goodwe-hero showcase-hero" aria-labelledby="brand-title"><div class="shell">${label("PRO ENERGY / GoodWe")}<h1 id="brand-title">De verbinding tussen<br>zon en <em>thuis.</em></h1><p>Een hybride omvormer. Passende Lynx-opslag.<br>Techniek die als systeem wordt geselecteerd.</p>${actions()}</div><figure>${photo("goodwe", true)}${caption("goodwe")}</figure></section>
<section class="section shell goodwe-system" id="mogelijkheden"><div>${label("01 / Twee rollen, één ontwerp")}<h2>Omzetten.<br>Opslaan. <em>Afstemmen.</em></h2></div><div class="two-products"><article><span class="eyebrow">A / Hybride omvormer</span><h3>De schakel in het systeem.</h3><p>Een geschikte hybride omvormer zet zonnestroom om voor de woning en verzorgt de koppeling met een compatibele batterij. Model, fase-uitvoering en firmware tellen mee.</p>${link("Bekijk GoodWe-opslagsystemen", "https://en.goodwe.com/energy-storage-products")}</article><article><span class="eyebrow">B / Lynx Home F Plus+</span><h3>Modulair energie bewaren.</h3><p>De F Plus+-serie gebruikt stapelbare LFP-modules. Kies de batterij niet los van de omvormer: de compatibiliteitslijst bepaalt welke combinatie is toegestaan.</p>${link("Originele Lynx-productbeelden", b.sources[0][1])}</article></div></section>
<section class="section goodwe-diagram"><div class="shell">${label("02 / Begrijpelijk verbonden")}<h2>Elk onderdeel<br>zijn eigen <em>rol.</em></h2><ol class="system-blueprint"><li><span>01</span><strong>Zonnepanelen</strong><p>Wekken gelijkstroom op.</p></li><li><span>02</span><strong>Hybride omvormer</strong><p>Zet om en koppelt passende opslag.</p></li><li><span>03</span><strong>Lynx-batterij</strong><p>Bewaart energie voor later.</p></li><li><span>04</span><strong>Woning</strong><p>Gebruikt energie via de meterkast.</p></li></ol><p class="design-caption">Principeschema, geen elektrisch aansluitschema. Meting, beveiliging en toegestane productcombinaties worden per installatie bepaald.</p></div></section>`;
}

function peblar(b) {
  return `
<section class="peblar-hero showcase-hero shell" aria-labelledby="brand-title"><figure>${photo("peblar", true)}${caption("peblar")}</figure><div>${label("PRO ENERGY / Peblar Home")}<h1 id="brand-title">Een vaste plek.<br>Een slimme <em>routine.</em></h1><p>Thuiskomen en aansluiten. Een laadpunt dat past bij je parkeerplek én de capaciteit van je woning.</p>${actions()}</div></section>
<section class="section peblar-product" id="mogelijkheden"><div class="shell peb-product-layout"><div>${label("01 / Peblar Home")}<h2>Alle aandacht<br>voor het <em>dagelijkse.</em></h2><p class="design-lead">Een vaste Type 2-kabel, een heldere status en bediening op je eigen netwerk.</p>${proof(
    [
      ["Tot 11 kW", "Home · drie fasen"],
      ["5 / 7,5 m", "Vaste Type 2-kabel"],
      ["Wifi / LAN", "Lokale webinterface"],
    ],
  )}<p>Op één fase noemt de huidige Home-productpagina 3,7 kW. Het werkelijke laadvermogen volgt uit de auto, netaansluiting en instellingen.</p></div><figure class="peblar-hardware"><img src="/assets/energy/photo/peblar-front.webp" width="1100" height="1100" loading="lazy" decoding="async" alt="Officiële Peblar Home productrender met vaste laadkabel" data-product-image><div class="hardware-angle-buttons" role="group" aria-label="Productaanzicht"><button type="button" data-product-view="front" aria-pressed="true">Vooraanzicht</button><button type="button" data-product-view="side" aria-pressed="false">Zijaanzicht</button></div><figcaption>Peblar Home · © Peblar · <a href="https://peblar.com/downloads" target="_blank" rel="noopener noreferrer">officieel media pack</a>.</figcaption></figure></div></section>
<section class="section shell charging-modes">${label("02 / Slim laden begint bij meten")}<h2>Eén laadpunt.<br>Verschillende <em>ritmes.</em></h2><div class="mode-picker" data-mode-picker><div role="group" aria-label="Bekijk laadstrategie"><button type="button" data-mode="normaal" aria-pressed="true">Dagelijks laden</button><button type="button" data-mode="zon" aria-pressed="false">Laden op zon</button><button type="button" data-mode="balans" aria-pressed="false">Load balancing</button></div><div class="mode-copy"><article data-mode-panel="normaal"><h3>Klaar voor de volgende rit.</h3><p>Stel laadmomenten en stroomlimieten in binnen de mogelijkheden van je laadpunt. De beschikbare capaciteit en je auto bepalen het resultaat.</p></article><article data-mode-panel="zon"><h3>Je eigen opwek benutten.</h3><p>De ondersteunde solar-modus kan laden afstemmen op gemeten zonne-overschot. Dat vraagt geschikte meting, firmware en correcte configuratie.</p></article><article data-mode-panel="balans"><h3>Ruimte laten voor de woning.</h3><p>Een ondersteunde P1-, CT- of Modbus-koppeling meet het huisverbruik. De regeling past de laadstroom daarop aan binnen de ingestelde aansluitgrenzen.</p></article></div></div>${link("Actuele Peblar-functies en documentatie", b.sources[0][1])}</section>`;
}

function samsung(b) {
  return `
<section class="samsung-hero showcase-hero" aria-labelledby="brand-title"><div class="shell samsung-heading">${label("PRO ENERGY / Samsung EHS Mono R290")}<h1 id="brand-title">Warmte, mooi<br><em>geïntegreerd.</em></h1><p>Comfort begint bij de woning.<br>De juiste techniek volgt uit het ontwerp.</p>${actions()}</div><figure>${photo("samsung", true)}${caption("samsung")}</figure></section>
<section class="section shell samsung-range" id="mogelijkheden"><div>${label("01 / EHS Mono R290")}<h2>Eén serie.<br>Een passende <em>uitvoering.</em></h2><p class="design-lead">Monoblock lucht-watertechniek met R290. De warmteverliesberekening bepaalt welk vermogen bij je woning past.</p></div><div class="heat-range">${[5, 8, 12, 16].map((n, i) => `<article><span>0${i + 1} / EHS MONO R290</span><strong>${n}<small>kW</small></strong><p>Nominale warmtecapaciteit<br>bij A7/W35</p></article>`).join("")}</div><p class="design-caption">Seriegegevens uit het Samsung/Ambrava-blad. Beschikbaarheid, fase-uitvoering en condities verschillen per model. Geen automatische vermogenskeuze op basis van woningoppervlak.</p></section>
<section class="section samsung-engineering"><div class="shell engineering-layout"><div>${label("02 / Meer dan de buitenunit")}<h2>Een goed systeem<br>werkt ook <em>binnen.</em></h2>${steps(
    [
      [
        "Afgifte beoordelen",
        "Radiatoren en vloerverwarming moeten voldoende warmte leveren op de ontworpen watertemperatuur.",
      ],
      [
        "Warm water meenemen",
        "ClimateHub of een passend ander boilervat en regelconcept worden in het waterzijdige ontwerp gekozen.",
      ],
      [
        "Buitenruimte afstemmen",
        "Vrije lucht, geluid, vorstbeveiliging en R290-plaatsingsvoorwaarden horen bij de opname.",
      ],
    ],
  )}</div><div class="heat-diagram"><span>BUITENLUCHT</span><span>MONOBLOCK</span><span>WATERGEDRAGEN WARMTE</span><small>Principeschema · exacte opbouw volgens installatieontwerp</small></div></div></section>`;
}

function whspr(b) {
  return `
<section class="whspr-hero showcase-hero" aria-labelledby="brand-title"><figure>${photo("whspr", true)}${caption("whspr")}</figure><div class="shell whspr-hero-copy">${label("PRO ENERGY / Whspr")}<h1 id="brand-title">Rust in de tuin.<br>Comfort <em>in huis.</em></h1><p>Een compacte hybride stap, onderzocht voor de Nederlandse rijwoning. Met je bestaande cv-ketel als onderdeel van het plan.</p>${actions()}</div></section>
<section class="section shell whspr-size" id="mogelijkheden"><div class="dimension-editorial"><span>60 × 60 × 90</span><small>centimeter · gepubliceerde fabrikantmaat</small><p>De benodigde vrije ruimte, leidingroutes en onderhoudstoegang komen daar nog bij.</p></div><div>${label("01 / Compact is pas het begin")}<h2>Niet alleen klein.<br>Goed <em>geplaatst.</em></h2><p class="design-lead">Hoe een warmtepomp in een rijwoning past, gaat verder dan zijn buitenmaten.</p><p>We kijken naar de bestaande cv-ketel, de ligging van de tuin, aangrenzende woningen en de plek van de leidingen. Een rustig ontwerp moet ook in het dagelijks gebruik praktisch blijven.</p>${link("Originele Whspr-productbeelden", b.sources[0][1])}</div></section>
<section class="section whspr-quiet"><div class="shell quiet-layout"><div>${label("02 / Hybride samenspel")}<h2>Een doordachte stap.<br>Met wat er <em>al is.</em></h2></div><div>${steps(
    [
      [
        "Bestaande cv meenemen",
        "De beschreven Whspr is hybride. Ketel en warmtepomp worden samen beoordeeld.",
      ],
      [
        "Geluid in de echte omgeving",
        "Geen algemeen oordeel op basis van één decibelgetal. Opstelplek, instellingen en buren tellen mee.",
      ],
      [
        "Praktische uitvoering",
        "De fabrikant richt het monoblock-concept op eenvoudige plaatsing; de benodigde werkzaamheden en actuele beschikbaarheid bevestigen we apart.",
      ],
    ],
  )}</div></div></section>`;
}

const designs = { tesla, ecoflow, goodwe, peblar, samsung, whspr };
export function renderShowcase(brand) {
  return designs[brand.slug](brand);
}
