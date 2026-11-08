import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import { readFile } from "node:fs/promises";
import { pdfPath, formsPath } from "../legal/render.mjs";
test("legal concept: direct route, responsive reading, accessibility and document downloads", async ({
  page,
  request,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  for (const width of [320, 390, 768, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    const response = await page.goto("/algemene-voorwaarden");
    expect(response.status()).toBe(200);
    expect(response.headers()["x-robots-tag"]).toContain("noindex");
    await expect(page.locator("h1")).toHaveCount(1);
    await expect(
      page.getByText("Concept voor beoordeling", { exact: true }),
    ).toBeVisible();
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
    ).toBe(true);
    if (width === 390 || width === 1440) {
      const result = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
        .analyze();
      expect(
        result.violations.map((v) => ({
          id: v.id,
          targets: v.nodes.map((n) => n.target),
        })),
      ).toEqual([]);
    }
  }
  await page
    .getByRole("link", { name: "Meerwerk en minderwerk", exact: true })
    .click();
  await expect(page).toHaveURL(/#artikel-5$/);
  await expect(page.locator("#artikel-5")).toBeInViewport();
  await page.reload();
  await expect(page.locator("#artikel-5")).toBeInViewport();
  for (const path of [pdfPath, formsPath]) {
    const response = await request.get(path);
    expect(response.status()).toBe(200);
    expect(response.headers()["content-type"]).toContain("application/pdf");
    expect(response.headers()["x-robots-tag"]).toContain("noindex");
    const body = await response.body();
    expect(body.subarray(0, 5).toString()).toBe("%PDF-");
    expect(body.equals(await readFile("." + path))).toBe(true);
  }
});
test("legal page linked from corporate and every Energy footer without a contractual consent step", async ({
  request,
}) => {
  for (const path of [
    "/",
    "/energy",
    "/energy/tesla",
    "/energy/ecoflow",
    "/energy/goodwe",
    "/energy/peblar",
    "/energy/samsung",
    "/energy/whspr",
  ]) {
    const html = await (await request.get(path)).text();
    expect(html.match(/<footer\b[\s\S]*?<\/footer>/)[0]).toContain(
      'href="/algemene-voorwaarden"',
    );
  }
});
