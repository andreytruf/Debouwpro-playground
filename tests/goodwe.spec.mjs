import { test, expect } from "@playwright/test";

test("GoodWe package inquiries retain the independently selected charging option", async ({
  page,
}) => {
  await page.goto("/energy/goodwe");
  const kits = page.locator("[data-goodwe-package]");
  await expect(kits).toHaveCount(3);
  const balans = page.locator('[data-goodwe-package="Balans"]');
  await balans.getByRole("checkbox").focus();
  await page.keyboard.press("Space");
  await expect(balans.locator(".gw-kit-selection")).toContainText("met HCA G2");
  await expect(balans.locator("[data-goodwe-inquiry]")).toHaveAttribute(
    "href",
    /Balans.*met%20HCA%20G2/,
  );
  await expect(
    page.locator('[data-goodwe-package="Compact"] .gw-kit-selection'),
  ).toContainText("zonder laadpunt");
  await balans.getByRole("checkbox").uncheck();
  await expect(balans.locator("[data-goodwe-inquiry]")).toHaveAttribute(
    "href",
    /zonder%20laadpunt/,
  );
  for (const kit of await kits.all()) {
    await expect(kit.locator(".gw-kit-specs")).toContainText("kWp");
    await expect(kit.locator(".gw-kit-specs")).toContainText("kWh");
  }
  await expect(page.locator(".photo-credit,.visual-disclaimer")).toHaveCount(0);
});

test("GoodWe complete system examples and advice remain available without JavaScript", async ({
  browser,
}) => {
  const context = await browser.newContext({
    javaScriptEnabled: false,
    viewport: { width: 390, height: 844 },
  });
  const page = await context.newPage();
  await page.goto("http://127.0.0.1:8787/energy/goodwe");
  await expect(page.locator("[data-goodwe-package]:visible")).toHaveCount(3);
  await expect(page.locator("[data-goodwe-inquiry]:visible")).toHaveCount(3);
  await expect(page.locator("[data-goodwe-ev]:visible")).toHaveCount(0);
  await expect(page.locator("#goodwe-laden")).toContainText("HCA G2");
  await context.close();
});

test("GoodWe landing opens with individual products and routes existing systems to a model check", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/energy/goodwe");
  const hero = page.locator(".gw-entry-hero");
  await expect(hero.locator(".gw-entry-products a")).toHaveCount(3);
  await hero.getByRole("link", { name: "Ik heb al zonnepanelen" }).click();
  await expect(page).toHaveURL(/#goodwe-bestaand$/);
  const retrofit = page.locator("#goodwe-bestaand");
  await expect(retrofit).toContainText("éénfase-batterijomvormer");
  await expect(retrofit.locator(".gw-retrofit-hardware")).toContainText(
    "SBP G2",
  );
  await expect(
    retrofit.getByRole("link", { name: "Laat mijn installatie beoordelen" }),
  ).toHaveAttribute("href", /Type%20bestaande%20omvormer/);
  await hero.locator('a[href="#goodwe-batterijen"]').click();
  await expect(page).toHaveURL(/#goodwe-batterijen$/);
  await expect(page.locator("#goodwe-batterijen .gw-item-advice")).toHaveCount(
    2,
  );
});
