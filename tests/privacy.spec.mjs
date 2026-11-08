import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
for (const route of ["/privacy/", "/cookies/"]) {
  test(`${route}: responsive, accessible, linked and refreshable`, async ({
    page,
    request,
  }) => {
    await page.emulateMedia({ reducedMotion: "reduce" });
    for (const width of [320, 390, 768, 1440]) {
      await page.setViewportSize({ width, height: 900 });
      const r = await page.goto(route);
      expect(r.status()).toBe(200);
      expect(r.headers()["x-robots-tag"]).toContain("noindex");
      await expect(page.locator("h1")).toHaveCount(1);
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
    await page.locator(".legal-index a").nth(1).click();
    await expect(page.locator("#onderdeel-2")).toBeInViewport();
    await page.reload();
    await expect(page.locator("#onderdeel-2")).toBeInViewport();
    for (const slug of [
      "privacy/",
      "cookies/",
      "algemene-voorwaarden",
    ])
      await expect(page.locator(`footer a[href="/${slug}"]`)).toHaveCount(1);
    expect((await request.get("/legal/privacy.mjs")).status()).toBe(404);
  });
}
test("current website uses no application cookies, browser storage or external page requests", async ({
  browser,
}) => {
  const context = await browser.newContext({ reducedMotion: "reduce" });
  const page = await context.newPage();
  const external = [];
  page.on("request", (r) => {
    if (new URL(r.url()).origin !== "http://127.0.0.1:8787")
      external.push(r.url());
  });
  for (const route of [
    "/",
    "/energy",
    "/energy/tesla",
    "/energy/ecoflow",
    "/energy/goodwe",
    "/energy/peblar",
    "/energy/samsung",
    "/energy/whspr",
    "/algemene-voorwaarden",
    "/privacy/",
    "/cookies/",
  ]) {
    await page.goto("http://127.0.0.1:8787" + route);
    if (route === "/energy")
      await page.getByRole("button", { name: "Warmte", exact: true }).click();
    expect(await context.cookies()).toEqual([]);
    expect(
      await page.evaluate(() => ({
        local: Object.keys(localStorage),
        session: Object.keys(sessionStorage),
      })),
    ).toEqual({ local: [], session: [] });
    expect(await page.locator('form,iframe,script[src^="http"]').count()).toBe(
      0,
    );
    for (const slug of ["privacy/", "cookies/"])
      await expect(page.locator(`footer a[href="/${slug}"]`)).toHaveCount(1);
  }
  expect(external).toEqual([]);
  await context.close();
});
