import { cp, mkdir, rm, stat, readFile, writeFile } from "node:fs/promises";
import { buildLegal } from "./build-legal.mjs";
import { buildEnergy } from "./build-energy.mjs";
import { buildServices } from "./build-services.mjs";
// Only public files belong in the deploy directory.
await rm("dist", { recursive: true, force: true });
await mkdir("dist");
for (const path of [
  "index.html",
  "robots.txt",
  "_headers",
  "assets",
]) {
  await cp(path, `dist/${path}`, { recursive: true });
}
const home = await readFile("index.html", "utf8");
const fallback = await readFile("404.html", "utf8");
const sharedRegion = (tag) =>
  home
    .match(new RegExp(`<${tag}\\b[\\s\\S]*?</${tag}>`))[0]
    .replaceAll('href="#', 'href="/#');
await writeFile(
  "dist/404.html",
  fallback
    .replace("<!-- site-header -->", sharedRegion("header"))
    .replace("<!-- site-footer -->", sharedRegion("footer")),
);
for (const name of ["living", "kitchen", "detail"]) {
  for (const size of [640, 1280])
    await stat(`dist/assets/images/${name}-${size}.webp`);
}
await buildEnergy();
await buildLegal();
await buildServices();
console.log("Static build ready in dist/.");
