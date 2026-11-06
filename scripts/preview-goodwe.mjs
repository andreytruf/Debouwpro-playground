import { existsSync } from "node:fs";
import { chromium } from "@playwright/test";
import { mkdir } from "node:fs/promises";
await mkdir("docs/goodwe-systems/previews", { recursive: true });
const browser = await chromium.launch({
  executablePath:
    process.env.CHROMIUM_PATH ||
    (existsSync("/usr/bin/chromium") ? "/usr/bin/chromium" : undefined),
  args: ["--no-sandbox"],
});
for (const slug of ["energy", "goodwe"])
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
      "http://127.0.0.1:8787/energy" + (slug === "goodwe" ? "/goodwe" : ""),
    );
    for (const im of await page.locator("img").all()) {
      await im.scrollIntoViewIfNeeded();
      await im.evaluate((i) => i.decode());
    }
    await page.evaluate(() => scrollTo(0, 0));
    await page.screenshot({
      path: `docs/goodwe-systems/previews/${slug}-${label}-full.jpg`,
      fullPage: true,
      quality: 80,
    });
    await page.screenshot({
      path: `docs/goodwe-systems/previews/${slug}-${label}-hero.jpg`,
      quality: 85,
    });
    await page.addStyleTag({
      content:
        ".site-header,.skip-link,.mobile-contact { visibility: hidden !important; }",
    });
    if (slug === "goodwe")
      await page.locator("#goodwe-batterijen").screenshot({
        path: `docs/goodwe-systems/previews/range-${label}.jpg`,
        quality: 85,
      });
    if (slug === "goodwe") {
      for (const [name, selector] of [
        ["packages", "#mogelijkheden"],
        ["charging", "#goodwe-laden"],
        ["flow", "#goodwe-samenspel"],
      ]) {
        await page
          .locator(selector)
          .screenshot({
            path: `docs/goodwe-systems/previews/${name}-${label}.jpg`,
            quality: 85,
          });
      }
    }
    await page.close();
  }
await browser.close();
