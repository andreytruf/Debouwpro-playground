import { chromium } from "@playwright/test";
import { mkdir } from "node:fs/promises";
await mkdir("docs/peblar-update/previews", { recursive: true });
const browser = await chromium.launch({
  executablePath: "/usr/bin/chromium",
  args: ["--no-sandbox"],
});
for (const slug of ["energy", "peblar"])
  for (const [label, width, height] of [
    ["desktop", 1440, 1000],
    ["mobile", 390, 844],
  ]) {
    const page = await browser.newPage({
      viewport: { width, height },
      bypassCSP: true, // Allow screenshot-only masking of the sticky header in section crops.
      reducedMotion: "reduce",
    });
    await page.goto(
      "http://127.0.0.1:8787/energy" + (slug === "peblar" ? "/peblar" : ""),
    );
    for (const im of await page.locator("img").all()) {
      await im.scrollIntoViewIfNeeded();
      await im.evaluate((i) => i.decode());
    }
    await page.evaluate(() => scrollTo(0, 0));
    await page.screenshot({
      path: `docs/peblar-update/previews/${slug}-${label}-full.jpg`,
      fullPage: true,
      quality: 80,
    });
    await page.screenshot({
      path: `docs/peblar-update/previews/${slug}-${label}-hero.jpg`,
      quality: 85,
    });
    await page.locator(".renovation-preview").screenshot({
      path: `docs/peblar-update/previews/projects-${slug}-${label}.jpg`,
      quality: 85,
    });
    if (slug === "peblar")
      await page.locator(".peblar-range").screenshot({
        path: `docs/peblar-update/previews/range-${label}.jpg`,
        quality: 85,
      });
    await page.close();
  }
await browser.close();
