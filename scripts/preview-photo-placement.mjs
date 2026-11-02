import { existsSync } from "node:fs";
import { chromium } from "@playwright/test";
import { mkdir } from "node:fs/promises";
await mkdir("docs/photo-placement/previews", { recursive: true });
const browser = await chromium.launch({
  executablePath:
    process.env.CHROMIUM_PATH ||
    (existsSync("/usr/bin/chromium") ? "/usr/bin/chromium" : undefined),
  args: ["--no-sandbox"],
});
for (const slug of ["home", "energy", "peblar"])
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
      "http://127.0.0.1:8787" +
        (slug === "home"
          ? "/"
          : slug === "energy"
            ? "/energy"
            : "/energy/peblar"),
    );
    for (const im of await page.locator("img").all()) {
      await im.scrollIntoViewIfNeeded();
      await im.evaluate((i) => i.decode());
    }
    await page.evaluate(() => scrollTo(0, 0));
    await page.screenshot({
      path: `docs/photo-placement/previews/${slug}-${label}-full.jpg`,
      fullPage: true,
      quality: 80,
    });
    await page.screenshot({
      path: `docs/photo-placement/previews/${slug}-${label}-hero.jpg`,
      quality: 85,
    });
    await page.addStyleTag({
      content:
        ".site-header,.skip-link,.mobile-contact { visibility: hidden !important; }",
    });
    if (slug === "home") {
      await page
        .locator("#inspiratie")
        .screenshot({
          path: `docs/photo-placement/previews/projects-home-${label}.jpg`,
          quality: 85,
        });
    } else if (slug === "energy") {
      await page
        .locator(".energy-card.theme-whspr")
        .screenshot({
          path: `docs/photo-placement/previews/whspr-card-${label}.jpg`,
          quality: 85,
        });
    }
    await page.close();
  }
await browser.close();
