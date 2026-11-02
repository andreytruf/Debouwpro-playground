import { readFile, writeFile, mkdir } from "node:fs/promises";
import { brands } from "../energy/content.mjs";
import { renderLanding, renderBrand } from "../energy/templates.mjs";
export async function buildEnergy() {
  const home = await readFile("index.html", "utf8");
  await mkdir("dist/energy", { recursive: true });
  await writeFile("dist/energy/index.html", renderLanding(home));
  for (const brand of brands) {
    await mkdir(`dist/energy/${brand.slug}`, { recursive: true });
    await writeFile(
      `dist/energy/${brand.slug}/index.html`,
      renderBrand(home, brand),
    );
  }
  console.log("PRO ENERGY: landing + 6 brand pages ready.");
}
