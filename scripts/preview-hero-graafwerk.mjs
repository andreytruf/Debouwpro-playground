import { chromium } from "@playwright/test";
import { existsSync } from "node:fs";
import { mkdir, writeFile } from "node:fs/promises";
const dir = "docs/hero-graafwerk/previews";
await mkdir(dir, { recursive: true });
const b = await chromium.launch({
  executablePath:
    process.env.CHROMIUM_PATH ||
    (existsSync("/usr/bin/chromium") ? "/usr/bin/chromium" : undefined),
  args: ["--no-sandbox"],
});
try {
  const p = await b.newPage({
    viewport: { width: 1440, height: 1000 },
    reducedMotion: "no-preference",
  });
  await p.goto("http://127.0.0.1:8787/");
  await p
    .locator("[data-hero-sequence] picture img")
    .evaluate((i) => i.decode());
  const frames = [];
  for (const [name, wait] of [
    ["photo", 0],
    ["shade", 350],
    ["copy", 450],
    ["ready", 800],
  ]) {
    if (wait) await p.waitForTimeout(wait);
    frames.push(
      await p
        .locator("[data-hero-sequence]")
        .evaluate(
          (e, name) => ({
            stage: name,
            ms: Math.round(performance.now()),
            shade: Number(getComputedStyle(e, "::after").opacity),
            copy: Number(
              getComputedStyle(e.querySelector(".hero-content")).opacity,
            ),
          }),
          name,
        ),
    );
    await p.screenshot({
      path: `${dir}/hero-${name}.jpg`,
      type: "jpeg",
      quality: 85,
    });
  }
  await writeFile(
    "docs/hero-graafwerk/sequence.json",
    JSON.stringify(frames, null, 2) + "\n",
  );
  await p.close();
  for (const [name, width, height] of [
    ["desktop", 1440, 1000],
    ["mobile", 390, 844],
  ]) {
    const q = await b.newPage({
      viewport: { width, height },
      reducedMotion: "reduce",
    });
    await q.goto("http://127.0.0.1:8787/graafwerk/", {
      waitUntil: "networkidle",
    });
    await q.screenshot({
      path: `${dir}/graafwerk-${name}.jpg`,
      type: "jpeg",
      quality: 85,
    });
    await q.screenshot({
      path: `${dir}/graafwerk-${name}-full.jpg`,
      type: "jpeg",
      quality: 75,
      fullPage: true,
    });
    await q.close();
  }
} finally {
  await b.close();
}
