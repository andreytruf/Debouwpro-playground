import { chromium } from "@playwright/test";
import { existsSync } from "node:fs";
import { mkdir } from "node:fs/promises";
const browser = await chromium.launch({
  executablePath:
    process.env.CHROMIUM_PATH ||
    (existsSync("/usr/bin/chromium") ? "/usr/bin/chromium" : undefined),
  args: ["--no-sandbox"],
});
await mkdir("docs/energy/previews", { recursive: true });
for (const slug of ["energy", "tesla", "whspr"]) {
  for (const [label, width, height] of [
    ["desktop", 1440, 1000],
    ["mobile", 390, 844],
  ]) {
    const page = await browser.newPage({
      viewport: { width, height },
      deviceScaleFactor: 1,
      reducedMotion: "reduce",
    });
    await page.goto(
      `http://127.0.0.1:8787/energy${slug === "energy" ? "" : "/" + slug}`,
    );
    for (const img of await page.locator("img").all()) {
      await img.scrollIntoViewIfNeeded();
      await img.evaluate((i) => i.decode());
    }
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.screenshot({
      path: `docs/energy/previews/${slug}-${label}-full.jpg`,
      fullPage: true,
      quality: 80,
    });
    await page.screenshot({
      path: `docs/energy/previews/${slug}-${label}-hero.jpg`,
      quality: 85,
    });
    await page.close();
  }
}
await browser.close();
console.log("Landing, Tesla and Whspr: desktop and mobile screenshots saved.");
