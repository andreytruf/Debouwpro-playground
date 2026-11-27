import { mkdir, writeFile, readFile } from "node:fs/promises";

import { additionalServices } from "./service-content.mjs";

const pages = [
  ...additionalServices,
  {
    slug: "vloerverwarming",
    title: "Vloerverwarming en vloerafwerking",
    intro:
      "Elektrische, infrarood- en watergedragen vloerverwarming in Utrecht en omgeving. We stemmen het systeem af op uw ruimte en vloerafwerking. Ook elektrische en watergedragen wandverwarming is mogelijk.",
    sections: [
      [
        "Infrezen in de bestaande dekvloer",
        "We beoordelen eerst de dikte, conditie en opbouw van de vloer en de ligging van bestaande leidingen. Als de dekvloer geschikt is, frezen we sleuven voor de verwarmingsbuizen. Bij een constructieve betonvloer is eerst een aparte beoordeling nodig.",
      ],
      [
        "Opbouwsysteem met netten of platen",
        "Bij een nieuwe vloeropbouw kunnen verwarmingsbuizen op draadstaalmatten worden bevestigd en in de dekvloer worden opgenomen. Als de opbouwhoogte beperkt is, bespreken we of een laagbouwsysteem met platen past. We houden rekening met isolatie, deuren en aansluitingen op omliggende vloeren.",
      ],
      [
        "Elektrische vloerverwarming en infrarood",
        "We bespreken welk elektrisch systeem, zoals verwarmingsmatten of infraroodfolie, past bij de ruimte en de gekozen vloerafwerking.",
      ],
      [
        "Elektrische en watergedragen wandverwarming",
        "Met elektrische verwarmingskabels of watergedragen leidingen in de wand geeft het wandoppervlak warmte af aan de ruimte. We stemmen het systeem af op de wandopbouw, de warmtebron en de afwerking met stucwerk of tegels.",
      ],
      [
        "Afwerken met PVC, tegels of laminaat",
        "We stemmen egalisatie en afwerking af op de gekozen vloer. PVC, tegels en laminaat moeten geschikt zijn voor vloerverwarming. Ook de ondervloer, warmteweerstand, droogtijd en het opstookprotocol tellen mee.",
        "vloerafwerking",
      ],
    ],
    photo: [
      "/assets/services/vloer-utrecht.webp",
      "Voorbeeld van vloerafwerking · Utrecht",
    ],
    project: "Vloerverwarming",
    steps: [
      [
        "Vloer en warmtebron beoordelen",
        "We bekijken de bestaande vloer, beschikbare opbouwhoogte en het verwarmingssysteem.",
      ],
      [
        "Systeem kiezen en aanleggen",
        "We kiezen met u een passend systeem, stemmen de aanleg af op de vloer en controleren de aansluiting.",
      ],
      [
        "Afwerken en in gebruik nemen",
        "We plannen de vloerafwerking en bespreken het opstookprotocol.",
      ],
    ],
    related:
      '<a class="text-link" href="/energy/">Bekijk ook warmtepompen bij PRO ENERGY</a>',
  },
  {
    slug: "graafwerk",
    title: "Graafwerk met een minigraver",
    photo: [
      "/assets/services/graafwerk-schema.svg",
      "Principeillustratie · geen uitvoeringsplan",
    ],
    steps: [
      [
        "Werkplek bekijken",
        "We bespreken de toegang, werkruimte en bereikbaarheid van de locatie.",
      ],
      [
        "Werk voorbereiden",
        "We stemmen het tracé, leidinginformatie, eventuele meldingen en de bestemming van de grond af.",
      ],
      [
        "Uitvoeren en afronden",
        "We graven volgens de afspraken en laten het terrein klaar voor de afgesproken vervolgstap.",
      ],
    ],
    intro:
      "Graafwerk voor renovatie, tuin of leidingtracé in Utrecht en omgeving. Met een compacte graafmachine kunnen we ook werken op locaties waar weinig ruimte is, als de toegang het toelaat.",
    sections: [
      [
        "Sleuven en voorbereiding",
        "We graven sleuven voor kabels, leidingen en afvoer. Voor tuinaanleg brengen we de grond op de gewenste hoogte en egaliseren we het terrein.",
      ],
      [
        "Bouwputten, funderingen en betonwerk",
        "We graven bouwputten uit voor funderingen of zwembaden. Voor funderings- en betonwerk kunnen we de ondergrond op hoogte brengen, egaliseren en verdichten volgens de afspraken voor het vervolgwerk.",
      ],
      [
        "Boomverzorging en snoeiwerk op hoogte",
        "We snoeien bomen, ook op hoogte, en verwijderen bomen waar dat nodig is. Vooraf bekijken we de bereikbaarheid en de ruimte rondom de boom. We stemmen het afvoeren van takken, stammen en ander groenafval met u af.",
      ],
      [
        "Toegang en uitvoering",
        "We bespreken de bereikbaarheid, beschikbare werkruimte, ondergrond en afvoer van grond vooraf. Ook stemmen we af welke kabel- en leidinginformatie en eventuele meldingen nodig zijn voordat het graafwerk begint.",
      ],
    ],
  },
];

export async function buildServices() {
  const home = await readFile("index.html", "utf8");
  for (const {
    slug,
    title,
    intro,
    sections,
    related,
    photo,
    project = title,
    steps,
  } of pages) {
    const inquiry = `/?project=${encodeURIComponent(project)}#contact`;
    const main = `<main id="main">
      <section class="service-hero">
        <div class="shell service-hero-grid">
          <div>
            <a class="service-back" href="/#diensten">← Alle diensten</a>
            <h1>${title}</h1>
            <p class="service-lead">${intro}</p>
            <div class="home-actions">
              <a class="home-button copper" href="${inquiry}">Vraag een offerte aan</a>
              <a class="home-button outline" href="#werkzaamheden">Bekijk de werkzaamheden</a>
            </div>
          </div>
          ${photo ? `<figure class="service-visual"><img src="${photo[0]}" alt="" fetchpriority="high"><figcaption>${photo[1]}</figcaption></figure>` : `<ul class="service-summary" aria-label="Werkzaamheden">${sections.map(([heading]) => `<li>${heading}</li>`).join("")}</ul>`}
        </div>
      </section>
      <nav class="service-subnav" aria-label="Op deze pagina"><div class="shell">
        <a href="#werkzaamheden">Werkzaamheden</a><a href="#werkwijze">Werkwijze</a><a href="#service-contact">Contact</a>
      </div></nav>
      <section class="shell section service-section" id="werkzaamheden">
        <h2>Wat we voor u doen</h2>
        <div class="service-scope">${sections.map(([heading, text, id]) => `<article${id ? ` id="${id}"` : ""}><h3>${heading}</h3><p>${text}</p></article>`).join("")}</div>
      </section>
      <section class="service-process" id="werkwijze"><div class="shell section service-section">
        <h2>Zo werken we</h2>
        <ol class="service-scope">${steps.map(([heading, text]) => `<li><h3>${heading}</h3><p>${text}</p></li>`).join("")}</ol>
      </div></section>
      <section class="shell section service-section" id="service-contact">
        <h2>Bespreek uw plannen</h2>
        <div class="home-actions">
          <a class="home-button copper" href="${inquiry}">Naar het contactformulier</a>
          <a class="home-button outline" href="mailto:hallo@debouwpro.nl?subject=${encodeURIComponent(title)}">Bespreek uw project</a>
          ${related ?? ""}
        </div>
      </section>
    </main>`;
    const html = home
      .replace(/<title>.*?<\/title>/, `<title>${title} | DE BOUW PRO</title>`)
      .replace(/(<meta\s+name="description"\s+content=")[^"]+/, `$1${intro}`)
      .replace(
        /(<meta\s+property="og:title"\s+content=")[^"]+/,
        `$1${title} | DE BOUW PRO`,
      )
      .replace(
        /(<meta\s+property="og:description"\s+content=")[^"]+/,
        `$1${intro}`,
      )
      .replace(/<meta\s+property="og:image(?::alt)?"[^>]*>/g, "")
      .replace(/<script src="\/assets\/home\.js" defer><\/script>/, "")
      .replace('class="home-design"', 'class="home-design service-page"')
      .replace(
        "</head>",
        '<link rel="stylesheet" href="/assets/services.css"></head>',
      )
      .replace(/href="#(?!main")/g, 'href="/#')
      .replace(/<main\b[\s\S]*?<\/main>/, main)
      .replace(/<dialog\b[\s\S]*?<\/dialog>/, "");
    await mkdir(`dist/${slug}`, { recursive: true });
    await writeFile(`dist/${slug}/index.html`, html);
  }
}
