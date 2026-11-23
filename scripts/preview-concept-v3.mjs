import { chromium } from "@playwright/test";
import { existsSync } from "node:fs";
import { mkdir } from "node:fs/promises";
const dir = "docs/concept-v3/previews";
await mkdir(dir, { recursive: true });
const b = await chromium.launch({
  executablePath:
    process.env.CHROMIUM_PATH ||
    (existsSync("/usr/bin/chromium") ? "/usr/bin/chromium" : undefined),
  args: ["--no-sandbox"],
});
try {
  for (const [device, width, height] of [
    ["desktop", 1440, 1000],
    ["mobile", 390, 844],
  ]) {
    const p = await b.newPage({
      viewport: { width, height },
      reducedMotion: "reduce",
    });
    for (const [name, path] of [
      ["new-home", "/"],
      ["test-home", "/vergelijk/test/"],
      ["new-energy", "/energy/"],
      ["test-energy", "/vergelijk/test/energy/"],
    ]) {
      await p.goto("http://127.0.0.1:8787" + path, {
        waitUntil: "networkidle",
      });
      await p.screenshot({
        path: `${dir}/${name}-${device}.jpg`,
        type: "jpeg",
        quality: 85,
      });
      if (name === "new-home") {
        await p.screenshot({
          path: `${dir}/new-home-${device}-full.jpg`,
          type: "jpeg",
          quality: 75,
          fullPage: true,
        });
        await p.locator("#diensten").scrollIntoViewIfNeeded();
        await p.screenshot({
          path: `${dir}/services-icons-${device}.jpg`,
          type: "jpeg",
          quality: 85,
        });
        await p
          .getByRole("button", { name: "Met foto’s", exact: true })
          .click();
        await p.screenshot({
          path: `${dir}/services-photos-${device}.jpg`,
          type: "jpeg",
          quality: 85,
        });
        await p.locator("#inspiratie").scrollIntoViewIfNeeded();
        await p.screenshot({
          path: `${dir}/projects-${device}.jpg`,
          type: "jpeg",
          quality: 85,
        });
        await p.locator("[data-gallery]").first().click();
        await p.screenshot({
          path: `${dir}/project-detail-${device}.jpg`,
          type: "jpeg",
          quality: 85,
        });
        await p.keyboard.press("Escape");
        await p.locator("footer").scrollIntoViewIfNeeded();
        await p.screenshot({
          path: `${dir}/footer-${device}.jpg`,
          type: "jpeg",
          quality: 85,
        });
      }
    }
    await p.close();
  }
} finally {
  await b.close();
}
