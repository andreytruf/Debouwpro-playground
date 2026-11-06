// Distinct editorial compositions; shared specifications and contact remain in templates.mjs.
const arrow =
  '<svg class="arrow" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 19 19 5M5 5h14v14"/></svg>';
export const aiNote =
  "AI-sfeerbeeld · geen eigen project of exacte productweergave";
const notes = {
  tesla: "AI-architectuurconcept met Model Y · geen eigen installatie",
  ecoflow: aiNote,
  goodwe: aiNote,
  peblar: "Peblar Home, Business en Dual",
  samsung:
    "AI-architectuurconcept · getoonde unit is geen Samsung-productweergave",
  whspr: "Productrender uit Whspr-brochure · © Whspr · geen eigen installatie",
};
const alt = {
  tesla: "AI-concept van een moderne villa met witte Model Y bij avondlicht",
  ecoflow: "AI-sfeerbeeld van een lichte technische ruimte met eiken afwerking",
  goodwe: "AI-sfeerbeeld van een moderne woning met zonnepanelen",
  peblar:
    "Peblar-laadpunt aan een lichte bakstenen gevel naast een elektrische auto; fabrikantfoto",
  samsung:
    "AI-architectuurconcept van een woning met generieke buitenunit, geen Samsung-model",
  whspr:
    "Whspr hybride warmtepomp met verticale lamellen en open onderstel; productrender van de fabrikant",
};
export const socialPhoto = (slug) =>
  slug === "whspr"
    ? "/assets/energy/photo/whspr-product-640.webp"
    : `/assets/energy/photo/${slug}-1600.webp`;
export const photo = (slug, priority = false, cls = "") => {
  const whspr = slug === "whspr";
  const small = whspr ? 480 : 720;
  const large = whspr ? 640 : 1600;
  const base = whspr ? "whspr-product" : slug;
  const height = whspr ? 640 : slug === "peblar" ? 1067 : 900;
  return `<img class="${cls}" src="${socialPhoto(slug)}" srcset="/assets/energy/photo/${base}-${small}.webp ${small}w, /assets/energy/photo/${base}-${large}.webp ${large}w" sizes="${whspr ? "(max-width:760px) calc(100vw - 40px), 45vw" : "100vw"}" width="${large}" height="${height}" ${priority ? 'fetchpriority="high"' : 'loading="lazy" decoding="async"'} alt="${alt[slug]}">`;
};
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
<section class="section shell goodwe-system" id="mogelijkheden"><div>${label("01 / Twee rollen, één ontwerp")}<h2>Omzetten.<br>Opslaan. <em>Afstemmen.</em></h2></div><div class="two-products"><article><span class="eyebrow">A / Hybride omvormer</span><h3>De schakel in het systeem.</h3><p>Een geschikte hybride omvormer zet zonnestroom om voor de woning en verzorgt de koppeling met een compatibele batterij. Model, fase-uitvoering en firmware tellen mee.</p>${link("Bekijk GoodWe-opslagsystemen", "https://en.goodwe.com/energy-storage-solutions")}</article><article><span class="eyebrow">B / Lynx Home F Plus+</span><h3>Modulair energie bewaren.</h3><p>De F Plus+-serie gebruikt stapelbare LFP-modules. Kies de batterij niet los van de omvormer: de compatibiliteitslijst bepaalt welke combinatie is toegestaan.</p>${link("Originele Lynx-productbeelden", b.sources[0][1])}</article></div></section>
<section class="section goodwe-diagram"><div class="shell">${label("02 / Begrijpelijk verbonden")}<h2>Elk onderdeel<br>zijn eigen <em>rol.</em></h2><ol class="system-blueprint"><li><span>01</span><strong>Zonnepanelen</strong><p>Wekken gelijkstroom op.</p></li><li><span>02</span><strong>Hybride omvormer</strong><p>Zet om en koppelt passende opslag.</p></li><li><span>03</span><strong>Lynx-batterij</strong><p>Bewaart energie voor later.</p></li><li><span>04</span><strong>Woning</strong><p>Gebruikt energie via de meterkast.</p></li></ol><p class="design-caption">Principeschema, geen elektrisch aansluitschema. Meting, beveiliging en toegestane productcombinaties worden per installatie bepaald.</p></div></section>`;
}

function peblarOptions(model, options) {
  const initial = options[0][0];
  const href = (option) =>
    `mailto:hello@debouwpro.nl?subject=${encodeURIComponent(`Peblar ${model} — ${option}`)}`;
  return `<div class="peblar-options"><p class="variant-available">Uitvoeringen: ${options.map(([name]) => name).join(" · ")}</p><div class="peblar-variant-buttons" role="group" aria-label="Uitvoering Peblar ${model}" hidden>${options.map(([name, image], i) => `<button type="button" data-peblar-variant="${name}" data-variant-image-file="${image}" aria-pressed="${i === 0}">${name}</button>`).join("")}</div><p class="peblar-selected" aria-live="polite">Peblar ${model} · ${initial}</p><a class="text-link" data-variant-advice href="${href(initial)}">Vraag advies over ${model} <span aria-hidden="true">${arrow}</span></a></div>`;
}

function peblar(b) {
  return `
<section class="peblar-hero showcase-hero shell" aria-labelledby="brand-title"><figure>${photo("peblar", true)}</figure><div>${label("PRO ENERGY / Peblar")}<h1 id="brand-title">Thuis. Op het werk.<br>Altijd <em>verbonden.</em></h1><p>Van één auto op je oprit tot twee laadplekken op het werk. Ontdek Home, Business en Dual — zorgvuldig gekozen en geïnstalleerd door DE BOUW PRO.</p>${actions()}<p class="peblar-training">Peblar Certified Installer-training afgerond · mei 2026</p></div></section>
<nav class="shell peblar-product-nav" aria-label="Peblar-modellen"><a href="#mogelijkheden">01 / Home</a><a href="#peblar-business">02 / Business</a><a href="#peblar-dual">03 / Dual</a></nav><section class="section peblar-product" id="mogelijkheden" data-peblar-config="Home"><div class="shell peb-product-layout"><div>${label("01 / Peblar Home")}<h2>Alle aandacht<br>voor het <em>dagelijkse.</em></h2><p class="design-lead">Een vaste Type 2-kabel, een heldere status en bediening op je eigen netwerk.</p>${proof(
    [
      ["Tot 11 kW", "Home · drie fasen"],
      ["5 / 7,5 m", "Vaste Type 2-kabel"],
      ["Wifi / LAN", "Lokale webinterface"],
    ],
  )}<p>Op één fase laadt Home met maximaal 3,7 kW. Je auto, netaansluiting en instellingen bepalen het werkelijke laadvermogen.</p>${peblarOptions(
    "Home",
    [
      ["Kabel 5 m", ""],
      ["Kabel 7,5 m", ""],
    ],
  )}</div><figure class="peblar-hardware"><img src="/assets/energy/photo/peblar-front.webp" width="1100" height="1100" loading="lazy" decoding="async" alt="Officiële Peblar Home productrender met vaste laadkabel" data-product-image><div class="hardware-angle-buttons" role="group" aria-label="Productaanzicht"><button type="button" data-product-view="front" aria-pressed="true">Vooraanzicht</button><button type="button" data-product-view="side" aria-pressed="false">Zijaanzicht</button></div></figure></div></section>

<section class="section shell peblar-family" id="peblar-business" data-peblar-config="Business"><div class="peblar-family-copy">${label("02 / Peblar Business")}<h2>Zakelijk laden.<br>Helder <em>verrekenen.</em></h2><p class="design-lead">Een laadpunt voor de leaseauto thuis, een werkplek of een gedeelde parkeerplaats. Met MID-meting en een backoffice die bij je situatie past.</p>${proof(
    [
      ["Tot 22 kW", "Drie fasen · 7,4 kW op één fase"],
      ["MID", "Energiemeting voor verrekening"],
      ["OCPP", "Wifi, ethernet of mobiel netwerk"],
    ],
  )}<p>Kies een vaste Type 2-kabel van 5 of 7,5 meter, een socket voor je eigen losse kabel of een socket met shutter. Een Eichrecht-uitvoering is beschikbaar voor situaties die dat vereisen.</p>${peblarOptions(
    "Business",
    [
      ["Kabel 5 m", "peblar-front.webp"],
      ["Kabel 7,5 m", "peblar-front.webp"],
      ["Socket", "peblar-business.webp"],
      ["Socket met shutter", "peblar-business.webp"],
    ],
  )}</div><figure class="peblar-family-image"><img src="/assets/energy/photo/peblar-front.webp" width="1100" height="1100" loading="lazy" decoding="async" alt="Peblar Business met vaste laadkabel" data-variant-image></figure></section>
<section class="peblar-dual-banner"><img src="/assets/energy/photo/peblar-dual-parking-1600.webp" srcset="/assets/energy/photo/peblar-dual-parking-720.webp 720w, /assets/energy/photo/peblar-dual-parking-1600.webp 1600w" sizes="100vw" width="1600" height="908" loading="lazy" decoding="async" alt="Peblar Dual-laadpunten in een parkeergarage"><div class="shell"><p class="eyebrow">Meer laadplekken. Eén doordacht plan.</p><h2>Twee aansluitpunten.<br>Eén <em>verbinding.</em></h2><a class="button" href="#peblar-dual">Ontdek Dual <span aria-hidden="true">${arrow}</span></a></div></section>
<section class="section shell peblar-family peblar-dual-family" id="peblar-dual" data-peblar-config="Dual"><figure class="peblar-family-image peblar-dual-image"><img src="/assets/energy/photo/peblar-dual.webp" width="721" height="900" loading="lazy" decoding="async" alt="Peblar Dual met twee Type 2-sockets"></figure><div class="peblar-family-copy">${label("03 / Peblar Dual")}<h2>Meer laden.<br>Minder <em>ruimtebeslag.</em></h2><p class="design-lead">Twee aansluitpunten in één laadstation. Voor zakelijke parkeerplaatsen, bezoekers en locaties waar meerdere auto's laden.</p>${proof(
    [
      ["2 × Type 2", "Twee sockets"],
      ["1 × 22 kW", "Of 2 × 11 kW op drie fasen"],
      ["Wifi 6 / LAN", "Mobiele verbinding via LTE Cat 1"],
    ],
  )}<p>De beschikbare capaciteit wordt tussen de aansluitpunten verdeeld. Kies de standaard MID-uitvoering, de Eichrecht-variant of de uitvoering met shuttered sockets. Wand- of paalmontage wordt afgestemd op de locatie.</p>${peblarOptions(
    "Dual",
    [
      ["Dual · MID", ""],
      ["Dual · Eichrecht", ""],
      ["Dual · Shutter", ""],
    ],
  )}<p class="design-caption">Maximumvermogen volgens de gekozen fase- en netconfiguratie. Functies die Peblar voor toekomstige hardware of firmware noemt, nemen we pas op als ze beschikbaar zijn voor de aangeboden uitvoering.</p></div></section>
<section class="section peblar-lineup"><div class="shell"><div class="section-heading"><div>${label("De modellen naast elkaar")}<h2>Welke Peblar<br>past bij <em>jouw plek?</em></h2></div><p>Drie productlijnen. Verschillende uitvoeringen. Wij helpen je kiezen op basis van gebruik, aansluiting en gewenste verrekening.</p></div><p class="peblar-scroll-hint">Veeg opzij om alle modellen te vergelijken.</p><div class="peblar-compare-wrap" tabindex="0" role="region" aria-label="Vergelijk Peblar Home, Business en Dual"><table class="peblar-compare"><caption class="sr-only">Vergelijking van Peblar-laadoplossingen</caption><thead><tr><th scope="col">Kenmerk</th><th scope="col">Home</th><th scope="col">Business</th><th scope="col">Dual</th></tr></thead><tbody><tr><th scope="row">Laadpunten</th><td>1</td><td>1</td><td>2</td></tr><tr><th scope="row">Uitvoering</th><td>Kabel 5 / 7,5 m</td><td>Kabel 5 / 7,5 m, socket of shutter</td><td>2 sockets; MID, Eichrecht of Shutter</td></tr><tr><th scope="row">Vermogen op drie fasen</th><td>Tot 11 kW</td><td>Tot 22 kW</td><td>1 × 22 / 2 × 11 kW</td></tr><tr><th scope="row">Energiemeting</th><td>Indicatief</td><td>MID; Eichrecht-variant</td><td>MID; Eichrecht-variant</td></tr><tr><th scope="row">Netwerk</th><td>Wifi / ethernet</td><td>Wifi / ethernet / mobiel</td><td>Wifi 6 / ethernet / LTE Cat 1</td></tr><tr><th scope="row">Plaatsing</th><td>Wand of paal</td><td>Wand of paal</td><td>Wand of passende zuil</td></tr></tbody></table></div><p class="design-caption">Laadvermogen, meting en ondersteunde integraties worden afgestemd op je auto, aansluiting en gekozen uitvoering.</p></div></section>
<section class="section peblar-install-story"><div class="shell peblar-install-grid"><figure><img src="/assets/energy/photo/peblar-detail-1200.webp" srcset="/assets/energy/photo/peblar-detail-640.webp 640w, /assets/energy/photo/peblar-detail-1200.webp 1200w" sizes="(max-width:760px) calc(100vw - 40px), 42vw" width="1200" height="1800" loading="lazy" decoding="async" alt="Detail van een Peblar-laadpunt met opgerolde kabel aan een houten gevel"></figure><div>${label("03 / Meer dan een laadpunt")}<h2>Ook de route<br>moet <em>kloppen.</em></h2><p class="design-lead">Van meterkast tot parkeerplek. Met aandacht voor wat je ziet én wat erachter zit.</p>${steps(
    [
      [
        "Eerst de woning",
        "We bekijken aansluiting, dagelijks verbruik en de gewenste plek. Zo begint het plan bij jouw situatie.",
      ],
      [
        "Dan de verbinding",
        "Kabelroute, beveiliging en meetkoppeling worden samen ontworpen. Voor zonne-laden en load balancing controleren we de vereiste accessoires.",
      ],
      [
        "Tot aan de afwerking",
        "We stemmen doorvoeren en bevestiging af op gevel en interieur. Na installatie nemen we instellingen en bediening met je door.",
      ],
    ],
  )}</div></div></section>
<section class="section shell charging-modes">${label("04 / Slim laden begint bij meten")}<h2>Eén laadpunt.<br>Verschillende <em>ritmes.</em></h2><div class="mode-picker" data-mode-picker><div role="group" aria-label="Bekijk laadstrategie"><button type="button" data-mode="normaal" aria-pressed="true">Dagelijks laden</button><button type="button" data-mode="zon" aria-pressed="false">Laden op zon</button><button type="button" data-mode="balans" aria-pressed="false">Load balancing</button></div><div class="mode-copy"><article data-mode-panel="normaal"><h3>Klaar voor de volgende rit.</h3><p>Stel laadmomenten en stroomlimieten in binnen de mogelijkheden van je laadpunt. De beschikbare capaciteit en je auto bepalen het resultaat.</p></article><article data-mode-panel="zon"><h3>Je eigen opwek benutten.</h3><p>De ondersteunde solar-modus kan laden afstemmen op gemeten zonne-overschot. Dat vraagt geschikte meting, firmware en correcte configuratie.</p></article><article data-mode-panel="balans"><h3>Ruimte laten voor de woning.</h3><p>Een ondersteunde P1-, CT- of Modbus-koppeling meet het huisverbruik. De regeling past de laadstroom daarop aan binnen de ingestelde aansluitgrenzen.</p></article></div></div>${link("Actuele Peblar-functies en documentatie", b.sources[0][1])}</section>`;
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
<section class="whspr-hero whspr-brochure-hero showcase-hero" aria-labelledby="brand-title"><figure>${photo("whspr", true)}${caption("whspr")}</figure><div class="shell whspr-hero-copy">${label("PRO ENERGY / Whspr")}<h1 id="brand-title">Compact buiten.<br>Comfort <em>binnen.</em></h1><p>Hybride warmte voor je rijwoning. Een compacte buitenunit, een eigen thermostaat en je bestaande cv-ketel.</p>${actions()}</div></section>
${proof([
  ["4 kW", "Gepubliceerd warmtevermogen"],
  ["1,7 kW", "Maximaal elektrisch vermogen"],
  ["Hybride", "Met je bestaande cv-ketel"],
])}
<section class="section shell whspr-size" id="mogelijkheden"><div class="dimension-editorial whspr-measurements"><p class="eyebrow">Het formaat / zonder opstelruimte</p><div class="whspr-dimensions"><div><strong>59,2</strong><span>cm breed</span></div><div><strong>59,2</strong><span>cm diep</span></div><div><strong>82,3</strong><span>cm hoog</span></div></div><p>Inclusief BigFoot-opstelvoeten:<br><strong>59,2 × 60,0 × 92,2 cm.</strong><br>Vrije lucht, onderhoud en veiligheidsruimte komen daar nog bij.</p></div><div>${label("01 / Klein is pas het begin")}<h2>Ruimte voor warmte.<br>Ruimte om te <em>wonen.</em></h2><p class="design-lead">Een compacte buitenunit maakt een zorgvuldig gekozen plek mogelijk. De woning bepaalt of het geheel past.</p><p>We bekijken de tuin, leidingroute, radiatoren of vloerverwarming en de bestaande ketel. Whspr is bedoeld voor ruimteverwarming; warm tapwater blijft bij de cv-ketel.</p><p class="design-caption">Afmetingen volgens brochure 24 september 2026 en installatiehandleiding v1.2 (voor review). Exacte uitvoering en actuele voorschriften bevestigen we bij het voorstel.</p>${link("Bekijk Whspr bij de fabrikant", b.sources[0][1])}</div></section>
<section class="section whspr-quiet"><div class="shell whspr-acoustic-layout"><figure><img src="/assets/energy/photo/whspr-detail-725.webp" srcset="/assets/energy/photo/whspr-detail-480.webp 480w, /assets/energy/photo/whspr-detail-725.webp 725w" sizes="(max-width:760px) calc(100vw - 40px), 35vw" width="725" height="1088" loading="lazy" decoding="async" alt="Detail van de bovenzijde en verticale lamellen van Whspr uit de fabrikantbrochure"><figcaption>Detailbeeld uit Whspr-brochure · © Whspr</figcaption></figure><div>${label("02 / Geluid verdient aandacht")}<h2>Ontworpen voor rust.<br>Beoordeeld op de <em>plek.</em></h2><p class="design-lead">Stille werking is een ontwerpfocus. Wat je hoort in jouw tuin hangt ook af van de plaatsing en omgeving.</p>${steps(
    [
      [
        "Vermogen is geen perceelmeting",
        "De handleiding noemt een maximaal geluidsvermogen van 51 dB(A). Dit is een bronwaarde, geen geluidsdruk bij de buren.",
      ],
      [
        "Nachtmodus heeft een eigen werking",
        "De handleiding vermeldt 45 dB(A) maximaal geluidsvermogen en 2 kW thermisch vermogen in nachtmodus. De geschikte instelling volgt uit je warmtebehoefte.",
      ],
      [
        "De opstelplek telt mee",
        "Wanden, hoeken, ramen en de situatie bij de buren nemen we mee. We beloven geen algemene plaatsing direct aan iedere erfgrens.",
      ],
    ],
  )}</div></div></section>
<section class="section shell whspr-controls"><div>${label("03 / Een eigen thermostaat")}<h2>De temperatuur kiezen.<br>De regeling doet <em>mee.</em></h2><p class="design-lead">Whspr wordt aangestuurd met de bijgeleverde thermostaat. Die verbindt de warmtepomp met je bestaande cv-ketel.</p><p>De beschreven regeling kiest tussen warmtepomp en ketel op basis van de situatie. Een OpenTherm- of aan/uit-koppeling wordt volgens de ketel en de actuele Whspr-instructie ingericht.</p><ol class="whspr-control-flow" aria-label="Principe van de hybride regeling"><li>Thermostaat</li><li>Whspr óf cv-ketel</li><li>Warmte in huis</li></ol><p class="design-caption">Principeschema, geen installatie-instructie. Warm tapwater via de cv-ketel; ketelcompatibiliteit vooraf controleren.</p></div><figure><img src="/assets/energy/photo/whspr-thermostat-1280.webp" srcset="/assets/energy/photo/whspr-thermostat-640.webp 640w, /assets/energy/photo/whspr-thermostat-1280.webp 1280w" sizes="(max-width:760px) calc(100vw - 40px), 45vw" width="1280" height="720" loading="lazy" decoding="async" alt="Whspr-thermostaat, met voorbeeldtemperaturen op het scherm; fabrikantbeeld"><figcaption>Thermostaat uit Whspr-brochure · © Whspr · schermwaarden zijn voorbeelden</figcaption></figure></section>
<section class="section whspr-in-context"><div class="shell whspr-context-grid"><figure><img src="/assets/energy/photo/whspr-garden-800.webp" srcset="/assets/energy/photo/whspr-garden-480.webp 480w, /assets/energy/photo/whspr-garden-800.webp 800w" sizes="(max-width:760px) calc(100vw - 40px), 42vw" width="800" height="1200" loading="lazy" decoding="async" alt="Whspr bij een bakstenen tuinmuur, voorbeeld uit de fabrikantbrochure"><figcaption>Voorbeeld uit Whspr-brochure · © Whspr · geen DE BOUW PRO-project</figcaption></figure><div>${label("04 / Van afbeelding naar jouw woning")}<h2>Een passende plek.<br>Een compleet <em>plan.</em></h2><p class="design-lead">Een brochure laat het product zien. Een opname laat zien wat jouw woning nodig heeft.</p>${steps(
    [
      [
        "De warmtebehoefte",
        "We beoordelen het afgiftesysteem en de rol van de cv-ketel. Een compact apparaat is geen automatische match voor iedere woning.",
      ],
      [
        "Lucht en veiligheid",
        "We controleren vrije luchtstroom, onderhoudstoegang en de R290-veiligheidszone rond openingen, afvoeren en ontstekingsbronnen volgens de actuele voorschriften.",
      ],
      [
        "Elektra en waterzijdige aansluiting",
        "Aansluiting, beveiliging, vorstbescherming en leidingroute horen bij het ontwerp. De plaatsingstijd en eventuele aanpassingen leggen we vooraf vast.",
      ],
    ],
  )}<a class="button button-dark" href="#contact">Bespreek Whspr voor jouw woning <span aria-hidden="true">${arrow}</span></a></div></div></section>`;
}

const designs = { tesla, ecoflow, goodwe, peblar, samsung, whspr };
export function renderShowcase(brand) {
  return designs[brand.slug](brand);
}
