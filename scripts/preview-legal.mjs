import { chromium } from "@playwright/test";
import { existsSync } from "node:fs";
import { mkdir } from "node:fs/promises";
const dir = "docs/algemene-voorwaarden/previews";
await mkdir(dir, { recursive: true });
const browser = await chromium.launch({
  executablePath:
    process.env.CHROMIUM_PATH ||
    (existsSync("/usr/bin/chromium") ? "/usr/bin/chromium" : undefined),
  args: ["--no-sandbox"],
});
try {
  for (const [label, width, height] of [
    ["desktop", 1440, 1000],
    ["mobile", 390, 844],
  ]) {
    const page = await browser.newPage({
      viewport: { width, height },
      reducedMotion: "reduce",
    });
    await page.goto("http://127.0.0.1:8787/algemene-voorwaarden", {
      waitUntil: "networkidle",
    });
    await page.screenshot({
      path: `${dir}/legal-${label}.jpg`,
      type: "jpeg",
      quality: 85,
    });
    await page.screenshot({
      path: `${dir}/legal-${label}-full.jpg`,
      type: "jpeg",
      quality: 70,
      fullPage: true,
    });
    await page.goto("http://127.0.0.1:8787/");
    await page.locator("footer").scrollIntoViewIfNeeded();
    await page.screenshot({
      path: `${dir}/footer-${label}.jpg`,
      type: "jpeg",
      quality: 80,
    });
    await page.close();
  }
} finally {
  await browser.close();
}
