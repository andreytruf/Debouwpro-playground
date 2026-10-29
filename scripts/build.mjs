import { cp, mkdir, rm, stat } from "node:fs/promises";
// Only public files belong in the deploy directory.
await rm("dist", { recursive: true, force: true });
await mkdir("dist");
for (const path of [
  "index.html",
  "404.html",
  "robots.txt",
  "_headers",
  "assets",
]) {
  await cp(path, `dist/${path}`, { recursive: true });
}
for (const name of ["living", "kitchen", "detail"]) {
  for (const size of [640, 1280])
    await stat(`dist/assets/images/${name}-${size}.webp`);
}
console.log("Static build ready in dist/.");
