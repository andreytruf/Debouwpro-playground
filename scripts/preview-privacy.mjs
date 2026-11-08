import { chromium } from "@playwright/test";
import { existsSync } from "node:fs";
import { mkdir, writeFile } from "node:fs/promises";
const base = process.env.PRIVACY_PREVIEW_BASE || "http://127.0.0.1:8787";
const dir = "docs/privacy-cookies/previews";
await mkdir(dir, { recursive: true });
const b = await chromium.launch({
  executablePath:
    process.env.CHROMIUM_PATH ||
    (existsSync("/usr/bin/chromium") ? "/usr/bin/chromium" : undefined),
  args: ["--no-sandbox"],
});
const audit = [];
try {
  for (const route of ["privacy", "cookies", "algemene-voorwaarden"]) {
    for (const [label, width, height] of [
      ["desktop", 1440, 1000],
      ["mobile", 390, 844],
    ]) {
      const c = await b.newContext({
        viewport: { width, height },
        reducedMotion: "reduce",
      });
      const p = await c.newPage();
      const origins = new Set();
      p.on("request", (r) => origins.add(new URL(r.url()).origin));
      const r = await p.goto(base + "/" + route, { waitUntil: "networkidle" });
      await p.screenshot({
        path: `${dir}/${route}-${label}.jpg`,
        type: "jpeg",
        quality: 85,
      });
      audit.push({
        route,
        label,
        status: r.status(),
        origins: [...origins],
        cookies: (await c.cookies()).map(({ name, domain }) => ({
          name,
          domain,
        })),
        storage: await p.evaluate(() => ({
          local: Object.keys(localStorage),
          session: Object.keys(sessionStorage),
        })),
      });
      await c.close();
    }
  }
  await writeFile(
    "docs/privacy-cookies/browser-audit.json",
    JSON.stringify(
      { base, checked_at: new Date().toISOString(), observations: audit },
      null,
      2,
    ) + "\n",
  );
} finally {
  await b.close();
}
