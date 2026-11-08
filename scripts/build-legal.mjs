import { readFile, mkdir, writeFile } from "node:fs/promises";
import { renderLegal } from "../legal/render.mjs";
export async function buildLegal() {
  const home = await readFile("index.html", "utf8");
  await mkdir("dist/algemene-voorwaarden", { recursive: true });
  await writeFile("dist/algemene-voorwaarden/index.html", renderLegal(home));
  console.log("Algemene voorwaarden: clearly marked concept page ready.");
}
