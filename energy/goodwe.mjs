const arrow =
  '<svg class="arrow" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 19 19 5M5 5h14v14"/></svg>';
const img = (name, alt, hero = false) =>
  `<img src="/assets/energy/photo/goodwe-${name}-${hero ? 1600 : 900}.webp" srcset="/assets/energy/photo/goodwe-${name}-${hero ? 720 : 480}.webp ${hero ? 720 : 480}w, /assets/energy/photo/goodwe-${name}-${hero ? 1600 : 900}.webp ${hero ? 1600 : 900}w" sizes="${hero ? "100vw" : "(max-width:760px) calc(100vw - 40px), 40vw"}" width="${hero ? 1600 : 900}" height="${hero ? 900 : 1147}" ${hero ? 'fetchpriority="high"' : 'loading="lazy" decoding="async"'} alt="${alt}">`;
export const goodwePackages = [
  {
    id: "compact",
    name: "Compact",
    phase: "1 fase",
    panels: 8,
    pv: "3,60",
    power: "3",
    inverter: "ES G2 · GW3000-ES-20",
    battery: "Lynx U G3 · 1 × 5 kWh",
    energy: 5,
    modules: 1,
    series: "es",
    text: "Een overzichtelijk begin met zonne-energie en opslag voor later.",
  },
  {
    id: "balans",
    name: "Balans",
    phase: "3 fasen",
    panels: 14,
    pv: "6,30",
    power: "6",
    inverter: "ET G2 · GW6000-ET-20",
    battery: "Lynx D G2 · 2 × 5 kWh bruikbaar",
    energy: 10,
    modules: 2,
    series: "et",
    text: "Een driefasige basis voor meer opwek, opslag en dagelijks gebruik.",
  },
  {
    id: "ruimte",
    name: "Ruimte",
    phase: "3 fasen",
    panels: 24,
    pv: "10,80",
    power: "10",
    inverter: "ET G2 · GW10K-ET-20",
    battery: "Lynx D G2 · 3 × 5 kWh bruikbaar",
    energy: 15,
    modules: 3,
    series: "et",
    text: "Meer ruimte voor een grotere dakinstallatie en een hoger energieverbruik.",
  },
];
const inquiry = (name) =>
  `mailto:hello@debouwpro.nl?subject=${encodeURIComponent(`GoodWe ${name} — systeemadvies`)}`;
const cards = () =>
  goodwePackages
    .map(
      (p, i) =>
        `<article class="gw-package" data-goodwe-package="${p.name}"><div class="gw-package-top"><span>0${i + 1} / ${p.phase}</span><h3>${p.name}</h3><p>${p.text}</p></div><div class="gw-kit-visual">${img(p.series, `GoodWe ${p.series === "es" ? "ES G2" : "ET G2"} hybride omvormer`)}<span aria-hidden="true">+</span>${img(p.series === "es" ? "u" : "dg2", p.series === "es" ? "Lynx U G3 batterij" : "Lynx D G2 batterijserie")}</div><dl class="gw-kit-specs"><div><dt>Zonnepanelen · rekenvoorbeeld</dt><dd>${p.panels} × 450 Wp = ${p.pv} kWp</dd></div><div><dt>Omvormer</dt><dd>${p.power} kW · ${p.inverter}</dd></div><div><dt>Bruikbare opslag</dt><dd>${p.energy} kWh · ${p.battery}</dd></div></dl><p class="gw-kit-detail">${p.series === "es" ? "Laagspanning: LXU 5.0-30." : "Hoogspanning: GW5.1-BAT-D-G20 · 5,12 kWh nominaal / 5 kWh bruikbaar per module."}</p><label class="gw-ev-option" hidden><input type="checkbox" data-goodwe-ev> HCA G2-laadpunt meenemen in advies</label><p class="gw-kit-selection" aria-live="polite">${p.name} · zonder laadpunt</p><a class="button button-dark" data-goodwe-inquiry href="${inquiry(p.name)}">Bespreek ${p.name} <span>${arrow}</span></a></article>`,
    )
    .join("");
export function renderGoodWe() {
  return `<section class="gw-hero showcase-hero" aria-labelledby="brand-title"><div class="shell gw-heading"><p class="eyebrow">PRO ENERGY / GoodWe EcoSmart Home</p><h1 id="brand-title">Opwekken. Bewaren.<br>Verder <em>denken.</em></h1><p>Van zonnepanelen naar opslag en thuisladen. Een gerichte selectie GoodWe-systemen, ontworpen rond jouw woning.</p><div class="energy-actions"><a class="button button-dark" href="#mogelijkheden">Ontdek de systemen ${arrow}</a><a class="button energy-outline" href="#contact">Vraag advies aan ${arrow}</a></div></div><figure>${img("hero", "GoodWe EcoSmart Home: woning met zonnepanelen, energieopslag en elektrisch laden", true)}</figure></section>
<nav class="shell gw-nav" aria-label="GoodWe-oplossingen"><a href="#mogelijkheden">Systeemvoorbeelden</a><a href="#goodwe-batterijen">Batterijen</a><a href="#goodwe-laden">Thuisladen</a><a href="#goodwe-samenspel">Het samenspel</a></nav>
<section class="section shell" id="mogelijkheden"><div class="section-heading"><div><p class="eyebrow">01 / Drie startpunten</p><h2>Geen eindeloze lijst.<br>Een passend <em>begin.</em></h2></div><p>Drie systeemvoorbeelden om de mogelijkheden te vergelijken. Het definitieve voorstel volgt uit je dak, aansluiting en verbruik.</p></div><div class="gw-packages">${cards()}</div><p class="gw-package-note">Panelen van 450 Wp zijn hier een rekenvoorbeeld, geen vast paneelmodel of opbrengstgarantie. Aantal panelen, stringspanning, schaduw, netcapaciteit en batterijvermogen worden in het installatieontwerp gecontroleerd. kWp is paneelvermogen, kW is omvormervermogen en kWh is opslagcapaciteit.</p></section>
<section class="section gw-battery-section" id="goodwe-batterijen"><div class="shell"><div class="section-heading"><div><p class="eyebrow">02 / Bewaren op jouw schaal</p><h2>Niet elke batterij<br>is <em>dezelfde.</em></h2></div><p>Laagspanning en hoogspanning zijn verschillende systeemkeuzes. De juiste batterij hoort bij de juiste omvormer.</p></div><div class="gw-batteries"><article><figure>${img("u", "GoodWe Lynx U G3 laagspanningsbatterij")}</figure><p class="eyebrow">Laagspanning / ES G2</p><h3>Lynx U G3</h3><p class="gw-capacity">5 kWh <small>bruikbaar per module</small></p><p>LFP-opslag voor een compact residentieel systeem. Eén module bevat een eigen BMS. Wand- of vloermontage past de batterij aan de beschikbare ruimte aan.</p><ul><li>Model LXU 5.0-30 · 51,2 V nominaal</li><li>5 / 10 / 15 kWh met 1 / 2 / 3 gelijke modules</li><li>IP65 · model- en plaatsingsvoorwaarden volgen</li></ul><a class="text-link" href="https://en.goodwe.com/lynx-u-g3" target="_blank" rel="noopener noreferrer">Meer over Lynx U G3 ${arrow}</a></article><article><figure>${img("dg2", "GoodWe Lynx D G2 hoogspanningsbatterijen")}</figure><p class="eyebrow">Hoogspanning / ET G2</p><h3>Lynx D G2</h3><p class="gw-capacity">5–8,7 kWh <small>bruikbaar per module, per model</small></p><p>Een nieuwe modulaire batterijserie voor passende hoogspanningssystemen. Elke batterij heeft een eigen BMU; de toegestane combinatie en firmware bepalen de opbouw.</p><ul><li>5,12 kWh nominaal → 5 kWh bruikbaar</li><li>6 / 8,32 / 9 kWh nominaal → 5,8 / 8 / 8,7 kWh bruikbaar</li><li>LFP · IP66 · geen uitwisselbaarheid met Lynx U G3</li></ul><a class="text-link" href="https://en.goodwe.com/lynx-d-g2" target="_blank" rel="noopener noreferrer">Meer over Lynx D G2 ${arrow}</a></article></div><p class="gw-package-note">Voor de voorbeeldsets gebruiken we gelijke GW5.1-BAT-D-G20-modules. Andere D G2-modellen en uitbreiding worden afzonderlijk afgestemd; we mengen geen batterijseries op basis van alleen de naam Lynx.</p></div></section>
<section class="section shell gw-charging" id="goodwe-laden"><div><p class="eyebrow">03 / Ook de auto doet mee</p><h2>Je eigen energie.<br>Ook <em>onderweg.</em></h2><p class="design-lead">De GoodWe HCA G2 verbindt thuisladen met de energievoorziening van je woning.</p><p>Volg en plan laadmomenten via SEMS+. Afstemming op zonnestroom en dynamische belastingregeling vragen de juiste meting, configuratie en software.</p><div class="gw-charge-powers"><span><strong>7 kW</strong>1 fase</span><span><strong>11 kW</strong>3 fasen</span><span><strong>22 kW</strong>3 fasen</span></div><p>De auto en huisaansluiting bepalen welk laadvermogen beschikbaar is. We kiezen een passende HCA G2-uitvoering en controleren de koppeling met de gekozen omvormer.</p><a class="text-link" href="https://en.goodwe.com/hca-g2" target="_blank" rel="noopener noreferrer">Bekijk HCA G2 ${arrow}</a></div><figure>${img("hca", "GoodWe HCA G2 laadpunt met laadkabel")}</figure></section>
<section class="section gw-system-section" id="goodwe-samenspel"><div class="shell"><p class="eyebrow">04 / Eén samenhangend ontwerp</p><h2>Van het dak<br>tot de <em>oprit.</em></h2><ol class="gw-flow" aria-label="Onderdelen van het energiesysteem"><li><span>01</span><strong>Zonnepanelen</strong><p>Wekken gelijkstroom op.</p></li><li><span>02</span><strong>Hybride omvormer</strong><p>Verbindt opwek, opslag en de woning.</p></li><li><span>03</span><strong>Lynx-batterij</strong><p>Bewaart energie voor later.</p></li><li><span>04</span><strong>Woning & HCA G2</strong><p>Gebruiken energie voor wonen en laden.</p></li></ol><p class="gw-package-note">Energiestromen als principe, geen aansluitschema. Batterij, huisverbruik en laadpunt worden via het ontworpen elektrische systeem en de juiste regeling afgestemd.</p><div class="gw-design-principles"><article><h3>Eerst meten</h3><p>Verbruik, teruglevering en rijgedrag geven richting aan de systeemkeuze.</p></article><article><h3>Dan combineren</h3><p>We controleren modelnummers, spanningsniveau, meetaccessoires en firmware.</p></article><article><h3>Zorgvuldig installeren</h3><p>Van meterkast en kabelroutes tot instellingen, uitleg en afwerking.</p></article></div></div></section>`;
}
