import { mkdir, writeFile, readFile } from "node:fs/promises";

const pages = [
  {
    slug: "vloerverwarming",
    title: "Vloerverwarming en vloerafwerking",
    intro:
      "Van watergedragen vloerverwarming tot uw afgewerkte vloer. In Utrecht en omgeving stemmen we voorbereiding, installatie en vloerafwerking op elkaar af.",
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
        "Afwerken met PVC, tegels of laminaat",
        "We stemmen egalisatie en afwerking af op de gekozen vloer. PVC, tegels en laminaat moeten geschikt zijn voor vloerverwarming. Ook de ondervloer, warmteweerstand, droogtijd en het opstookprotocol tellen mee.",
      ],
    ],
    photo: true,
    related:
      '<a class="text-link" href="/energy/">Bekijk ook warmtepompen bij PRO ENERGY</a>',
  },
  {
    slug: "graafwerk",
    title: "Graafwerk met een minigraver",
    intro:
      "Graafwerk voor renovatie, tuin of leidingtracé in Utrecht en omgeving. Met een compacte graafmachine kunnen we ook werken op locaties waar weinig ruimte is, als de toegang het toelaat.",
    sections: [
      [
        "Sleuven en voorbereiding",
        "Denk aan sleuven voor afvoer of leidingen, het uitgraven van een gedeelte van de tuin of het voorbereiden van de ondergrond voor vervolgwerk.",
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
  for (const { slug, title, intro, sections, related, photo } of pages) {
    const main = `<main id="main" class="shell section">
      <a class="text-link" href="/#diensten">Terug naar expertise</a>
      <h1 class="service-page-title">${title}</h1>
      <p class="home-intro">${intro}</p>
      ${photo ? '<figure class="service-preview"><img src="/assets/services/vloer-utrecht.webp" width="490" height="230" alt="Afgewerkte vloer bij een keukenrenovatie in Utrecht"><figcaption>Voorbeeld van vloerafwerking · Utrecht</figcaption></figure>' : ""}
      <div class="service-details">${sections.map(([heading, text]) => `<section><h2>${heading}</h2><p>${text}</p></section>`).join("")}</div>
      <div class="home-actions">
        <a class="home-button copper" href="mailto:hallo@debouwpro.nl?subject=${encodeURIComponent(title)}">Bespreek uw project</a>
        ${related ?? ""}
      </div>
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
      .replace(/<script src="\/assets\/home\.js" defer><\/script>/, "")
      .replace('class="home-design"', 'class="home-design service-page"')
      .replace(/href="#(?!main")/g, 'href="/#')
      .replace(/<main\b[\s\S]*?<\/main>/, main)
      .replace(/<dialog\b[\s\S]*?<\/dialog>/, "");
    await mkdir(`dist/${slug}`, { recursive: true });
    await writeFile(`dist/${slug}/index.html`, html);
  }
}
