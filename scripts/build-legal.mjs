import { readFile, mkdir, writeFile } from "node:fs/promises";
import { renderDocuments } from "../legal/documents.mjs";
import { notices, renderNotice } from "../legal/privacy.mjs";
export async function buildLegal() {
  const home = await readFile("index.html", "utf8");
  await mkdir("dist/algemene-voorwaarden", { recursive: true });
  await writeFile(
    "dist/algemene-voorwaarden/index.html",
    renderDocuments(home),
  );
  for (const notice of notices) {
    await mkdir(`dist/${notice.slug}`, { recursive: true });
    await writeFile(
      `dist/${notice.slug}/index.html`,
      renderNotice(home, notice),
    );
  }
  console.log("Algemene voorwaarden: clearly marked concept page ready.");
}
