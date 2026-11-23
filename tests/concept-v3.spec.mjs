import { test, expect } from "@playwright/test";
test("Test reference remains separate and both Energy versions are linked", async ({
  page,
  request,
}) => {
  await page.setViewportSize({ width: 320, height: 900 });
  await page.goto("/vergelijk/");
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth,
    ),
  ).toBe(true);
  await expect(
    page.getByRole("link", { name: "Bekijk de nieuwe hoofdpagina" }),
  ).toHaveAttribute("href", "/");
  for (const path of [
    "/vergelijk/test/",
    "/vergelijk/test/energy/",
    "/vloerverwarming/",
    "/graafwerk/",
  ]) {
    const r = await request.get(path);
    expect(r.status()).toBe(200);
    expect(r.headers()["x-robots-tag"]).toContain("noindex");
  }
  await page.goto("/vergelijk/test/");
  await expect(page.locator("h1")).toHaveText("Uw woning.Onze expertise.");
  await expect(page.locator('link[href="/assets/concept-v3.css"]')).toHaveCount(
    0,
  );
  await page.goto("/");
  await expect(page.locator("h1")).toContainText("Onze expertise.");
  await expect(page.locator(".home-gallery figure")).toHaveCount(5);
  await expect(page.locator("#offerte")).toHaveCount(1);
});
test("service icon and photo variants work with keyboard without persistence", async ({
  page,
}) => {
  await page.goto("/");
  const layout = page.locator("[data-service-layout]");
  await expect(layout).toHaveAttribute("data-service-layout", "icons");
  await expect(page.locator(".service-symbol:visible")).toHaveCount(6);
  await expect(page.locator(".services .service-media:visible")).toHaveCount(0);
  const photos = page.getByRole("button", { name: "Met foto’s", exact: true });
  await photos.focus();
  await page.keyboard.press("Enter");
  await expect(photos).toHaveAttribute("aria-pressed", "true");
  await expect(page.locator(".services .service-media:visible")).toHaveCount(6);
  for (const img of await page.locator(".services img").all()) {
    await img.scrollIntoViewIfNeeded();
    await img.evaluate((i) => i.decode());
  }
  await page.getByRole("button", { name: "Met iconen", exact: true }).click();
  await expect(layout).toHaveAttribute("data-service-layout", "icons");
  expect(await page.evaluate(() => Object.keys(localStorage))).toEqual([]);
});
test("shared dark footer and compatible heading styles on homepage and Energy", async ({
  page,
}) => {
  const sizes = [];
  for (const route of ["/", "/energy/"]) {
    await page.setViewportSize({ width: 1440, height: 1000 });
    await page.goto(route);
    sizes.push(
      await page.locator("h1").evaluate((el) => {
        const s = getComputedStyle(el);
        return [s.fontFamily, s.fontSize, s.fontWeight, s.letterSpacing];
      }),
    );
    await expect(page.locator(".footer-v3")).toHaveCSS(
      "background-color",
      "rgb(26, 26, 26)",
    );
    await expect(
      page.locator('footer a[href="https://wa.me/31612350850"]'),
    ).toHaveAttribute("rel", /noopener/);
    await expect(
      page.locator('footer a[href="mailto:hallo@debouwpro.nl"]'),
    ).toHaveCount(1);
  }
  expect(sizes[0][0]).toEqual(sizes[1][0]);
  expect(sizes[0][2]).toEqual(sizes[1][2]);
});
