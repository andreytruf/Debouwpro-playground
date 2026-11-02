import { createHash } from "node:crypto";
import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
const routes = [
  "/energy",
  "/energy/tesla",
  "/energy/ecoflow",
  "/energy/goodwe",
  "/energy/peblar",
  "/energy/samsung",
  "/energy/whspr",
];

for (const route of routes) {
  test(`${route}: direct URL, refresh, responsive layout and accessibility`, async ({
    page,
  }) => {
    const errors = [];
    page.on("pageerror", (error) => errors.push(error.message));
    page.on("response", (response) => {
      if (response.status() >= 400)
        errors.push(`${response.status()} ${response.url()}`);
    });
    await page.emulateMedia({ reducedMotion: "reduce" });
    for (const width of [320, 390, 768, 1440]) {
      await page.setViewportSize({ width, height: 900 });
      const response = await page.goto(route);
      expect(response.status()).toBe(200);
      expect(response.headers()["x-robots-tag"]).toContain("noindex");
      await expect(page.locator("h1")).toHaveCount(1);
      await expect(page.locator('meta[name="description"]')).toHaveAttribute(
        "content",
        /.+/,
      );
      await expect(page.locator('meta[name="robots"]')).toHaveAttribute(
        "content",
        /noindex/,
      );
      await expect(
        page.locator('#navigation a[href="/energy"]'),
      ).toHaveAttribute("href", "/energy");
      for (const img of await page.locator("img").all()) {
        await img.scrollIntoViewIfNeeded();
        await img.evaluate((image) => image.decode());
        expect(
          await img.evaluate((image) => image.naturalWidth),
        ).toBeGreaterThan(0);
      }
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
            nodes: v.nodes.map((n) => n.target),
          })),
        ).toEqual([]);
      }
    }
    await page.reload();
    await expect(page.locator("h1")).toBeVisible();
    expect(errors).toEqual([]);
  });
}

test("Energy filters, category shortcuts, links, mobile navigation and contact", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/energy");
  await expect(page.locator(".energy-card:visible")).toHaveCount(6);
  await page.getByRole("button", { name: "Warmte", exact: true }).click();
  await expect(page.locator(".energy-card:visible")).toHaveCount(2);
  await expect(page.locator(".filter-status")).toHaveText(
    "2 oplossingen in deze selectie",
  );
  await page.getByRole("button", { name: "Alle oplossingen" }).click();
  await expect(page.locator(".energy-card:visible")).toHaveCount(6);
  await page.locator('[data-category-link="laden"]').click();
  await expect(page.locator(".energy-card:visible")).toHaveCount(2);
  await page.getByRole("button", { name: "Alle oplossingen" }).click();
  await page
    .getByRole("link", { name: "Ontdek Tesla — Powerwall · Wall Connector" })
    .click();
  await expect(page).toHaveURL(/\/energy\/tesla\/?$/);
  await expect(
    page.locator('#contact a[href^="mailto:"]').first(),
  ).toHaveAttribute("href", /Tesla/);
  await expect(page.locator('#contact a[href^="tel:"]')).toHaveAttribute(
    "href",
    "tel:+31612350850",
  );
  await page.locator(".menu-toggle").click();
  await page
    .getByRole("navigation", { name: "Hoofdnavigatie" })
    .getByRole("link", { name: "Energy", exact: true })
    .click();
  await expect(page).toHaveURL(/\/energy\/?$/);
  await page.locator(".menu-toggle").click();
  await page
    .getByRole("navigation", { name: "Hoofdnavigatie" })
    .getByRole("link", { name: "Expertise" })
    .click();
  await expect(page).toHaveURL(/\/#diensten$/);
});

test("all Energy pages and images are linked correctly; no broken local destinations", async ({
  request,
}) => {
  const checked = new Set();
  for (const route of routes) {
    const response = await request.get(route);
    const html = await response.text();
    for (const match of html.matchAll(
      /(?:href|src)="(\/[^"#]*)(?:#[^"]*)?"/g,
    )) {
      if (checked.has(match[1])) continue;
      checked.add(match[1]);
      expect((await request.get(match[1])).status(), match[1]).toBe(200);
    }
  }
  expect((await request.get("/energy/unknown-brand")).status()).toBe(404);
  expect((await request.get("/energy/content.mjs")).status()).toBe(404);
});

test("Energy works without JavaScript, including navigation and FAQ", async ({
  browser,
}) => {
  const context = await browser.newContext({
    javaScriptEnabled: false,
    viewport: { width: 390, height: 844 },
  });
  const page = await context.newPage();
  await page.goto("http://127.0.0.1:8787/energy");
  await expect(page.locator(".energy-card:visible")).toHaveCount(6);
  await expect(
    page.getByRole("navigation", { name: "Hoofdnavigatie" }),
  ).toBeVisible();
  await page.locator(".faq-list summary").first().click();
  await expect(page.locator(".faq-list details").first()).toHaveAttribute(
    "open",
    "",
  );
  await context.close();
});

test("corporate homepage main content is preserved", async ({ request }) => {
  const html = await (await request.get("/")).text();
  const main = html.slice(html.indexOf("<main"), html.indexOf("</main>") + 7);
  expect(createHash("sha256").update(main).digest("hex")).toBe(
    "0be1cea169664def0f896c22cbc44dc343453cd91149bdf7e23e017dc118b307",
  );
});
