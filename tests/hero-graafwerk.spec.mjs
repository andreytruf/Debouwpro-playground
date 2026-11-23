import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
test("hero photograph precedes shade and copy; reduced motion shows everything immediately", async ({
  browser,
}) => {
  const c = await browser.newContext({
    reducedMotion: "no-preference",
    viewport: { width: 1440, height: 1000 },
  });
  const p = await c.newPage();
  await p.goto("http://127.0.0.1:8787/");
  await p
    .locator("[data-hero-sequence] picture img")
    .evaluate((i) => i.decode());
  const first = await p
    .locator(".hero-content")
    .evaluate((e) => Number(getComputedStyle(e).opacity));
  expect(first).toBeLessThan(1);
  await expect
    .poll(() =>
      p
        .locator(".hero-content")
        .evaluate((e) => Number(getComputedStyle(e).opacity)),
    )
    .toBe(1);
  await expect
    .poll(() =>
      p
        .locator("[data-hero-sequence]")
        .evaluate((e) => Number(getComputedStyle(e, "::after").opacity)),
    )
    .toBe(1);
  await c.close();
  const reduced = await browser.newContext({ reducedMotion: "reduce" });
  const q = await reduced.newPage();
  await q.goto("http://127.0.0.1:8787/");
  await expect(q.locator(".hero-content")).toHaveCSS("opacity", "1");
  await expect(q.locator(".hero-content")).toHaveCSS("animation-name", "none");
  await expect(q.locator("[data-hero-sequence]")).not.toHaveClass(
    /hero-sequence-pending/,
  );
  await reduced.close();
});
test("keyboard focus bypasses the hero entrance", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "no-preference" });
  await page.goto("/");
  const cta = page.getByRole("link", {
    name: "Vraag een offerte aan",
    exact: true,
  });
  await cta.focus();
  await expect(cta).toBeFocused();
  await expect(page.locator(".hero-content")).toHaveCSS("opacity", "1");
});
for (const width of [320, 390, 768, 1440])
  test(`Graafwerk complete layout and accessibility at ${width}px`, async ({
    page,
  }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.emulateMedia({ reducedMotion: "reduce" });
    const errors = [];
    page.on("pageerror", (e) => errors.push(e.message));
    page.on("response", (r) => {
      if (r.status() >= 400) errors.push(r.url());
    });
    const r = await page.goto("/graafwerk/");
    expect(r.status()).toBe(200);
    expect(r.headers()["x-robots-tag"]).toContain("noindex");
    await expect(page.locator("h1")).toHaveText("Graafwerk met een minigraver");
    await expect(page.locator(".ground-cards article")).toHaveCount(3);
    await expect(page.locator(".ground-checks li")).toHaveCount(4);
    await page.locator(".ground-visual img").evaluate((i) => i.decode());
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
    ).toBe(true);
    await page.getByRole("link", { name: "Wat is er vooraf nodig?" }).click();
    await expect(page).toHaveURL(/#opname$/);
    await expect(page.locator("#opname")).toBeInViewport();
    await page.locator(".ground-faq summary").first().click();
    await expect(page.locator(".ground-faq details").first()).toHaveAttribute(
      "open",
      "",
    );
    await expect(
      page.locator('.ground-contact a[href^="mailto:"]'),
    ).toHaveAttribute("href", /^mailto:hallo@debouwpro\.nl/);
    await expect(
      page.locator('.ground-contact a[href^="https://wa.me/"]'),
    ).toHaveAttribute("rel", /noopener/);
    if (width === 390 || width === 1440) {
      const a = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
        .analyze();
      expect(
        a.violations.map((v) => ({
          id: v.id,
          nodes: v.nodes.map((n) => n.target),
        })),
      ).toEqual([]);
    }
    expect(errors).toEqual([]);
  });
