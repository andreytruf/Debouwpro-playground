import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import { readFile } from "node:fs/promises";
import { documents } from "../legal/documents.mjs";
test("separate Drive concept documents: responsive hub, accessible downloads and no activation", async ({
  page,
  request,
}) => {
  for (const width of [320, 390, 768, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    const r = await page.goto("/algemene-voorwaarden");
    expect(r.status()).toBe(200);
    expect(r.headers()["x-robots-tag"]).toContain("noindex");
    await expect(page.locator("h1")).toHaveCount(1);
    await expect(page.locator(".legal-document-card")).toHaveCount(6);
    await expect(
      page.getByText("CONCEPT — uitsluitend voor beoordeling", { exact: true }),
    ).toBeVisible();
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
    ).toBe(true);
    if (width === 390 || width === 1440) {
      const a = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
        .analyze();
      expect(
        a.violations.map((v) => ({
          id: v.id,
          targets: v.nodes.map((n) => n.target),
        })),
      ).toEqual([]);
    }
  }
  await page.reload();
  await expect(page.locator(".legal-document-card")).toHaveCount(6);
  for (const d of documents) {
    await expect(page.locator(`a[href="${d.pdf}"]`)).toHaveCount(1);
    const r = await request.get(d.pdf);
    expect(r.status()).toBe(200);
    expect(r.headers()["content-type"]).toContain("application/pdf");
    expect(r.headers()["x-robots-tag"]).toContain("noindex");
    const body = await r.body();
    expect(body.subarray(0, 5).toString()).toBe("%PDF-");
    expect(body.equals(await readFile("." + d.pdf))).toBe(true);
    expect(d.content).not.toMatch(
      /interne controlepunten|interne aandachtspunten|Interne publicatiecheck/i,
    );
  }
  const old = await request.get(
    "/assets/legal/de-bouw-pro-algemene-voorwaarden-concept-2026-11-08.pdf",
  );
  expect(old.status()).toBe(200);
});
test("legal hub linked throughout corporate and Energy footer", async ({
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
