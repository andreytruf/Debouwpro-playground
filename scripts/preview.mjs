import { existsSync } from "node:fs";
import { chromium } from "@playwright/test";
import { mkdir, writeFile } from "node:fs/promises";
const browser = await chromium.launch({
  executablePath:
    process.env.CHROMIUM_PATH ||
    (existsSync("/usr/bin/chromium") ? "/usr/bin/chromium" : undefined),
  args: ["--no-sandbox"],
});
await mkdir("docs/previews", { recursive: true });
const metrics = [];
for (const [name, width, height] of [
  ["desktop", 1440, 1000],
  ["mobile", 390, 844],
]) {
  const page = await browser.newPage({
    viewport: { width, height },
    deviceScaleFactor: 1,
    reducedMotion: "reduce",
  });
  await page.addInitScript(() => {
    window.previewMetrics = { cls: 0, lcp: 0 };
    new PerformanceObserver((list) => {
      for (const item of list.getEntries())
        window.previewMetrics.lcp = item.startTime;
    }).observe({ type: "largest-contentful-paint", buffered: true });
    new PerformanceObserver((list) => {
      for (const item of list.getEntries())
        if (!item.hadRecentInput) window.previewMetrics.cls += item.value;
    }).observe({ type: "layout-shift", buffered: true });
  });
  await page.goto("http://127.0.0.1:8787/");
  await page.locator(".hero-image img").evaluate((img) => img.decode());
  await page.screenshot({
    path: `docs/previews/${name}-hero.jpg`,
    quality: 85,
  });
  metrics.push({
    viewport: name,
    ...(await page.evaluate(() => ({
      ...window.previewMetrics,
      resources: performance
        .getEntriesByType("resource")
        .map((r) => ({ name: r.name.split("/").pop(), bytes: r.transferSize })),
    }))),
  });
  for (const image of await page.locator("img").all()) {
    await image.scrollIntoViewIfNeeded();
    await image.evaluate((img) => img.decode());
  }
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.screenshot({
    path: `docs/previews/${name}-full.jpg`,
    quality: 80,
    fullPage: true,
  });
  await page.close();
}
await writeFile(
  "docs/previews/local-metrics.json",
  JSON.stringify(metrics, null, 2) + "\n",
);
await browser.close();
