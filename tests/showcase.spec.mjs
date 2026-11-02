import { test, expect } from "@playwright/test";

test("one corporate wordmark and copper Energy heading across the site", async ({
  page,
  request,
}) => {
  for (const route of [
    "/",
    "/energy",
    ...["tesla", "ecoflow", "goodwe", "peblar", "samsung", "whspr"].map(
      (s) => "/energy/" + s,
    ),
  ]) {
    await page.goto(route);
    await expect(page.locator(".brand-logo")).toHaveCount(2);
    for (const logo of await page.locator(".brand-logo").all()) {
      await expect(logo).toHaveAttribute("src", "/assets/brand/wordmark.svg");
      await expect(logo).toHaveAttribute("alt", "DE BOUW PRO");
    }
  }
  const source = await (await request.get("/assets/brand/wordmark.svg")).text();
  expect(source).toContain('fill="#D97841"');
  expect(source).toContain('fill="#1A1A1A"');
  await page.goto("/energy");
  await expect(page.locator("#energy-title > span").first()).toHaveCSS(
    "color",
    "rgb(217, 120, 65)",
  );
});

test("product explorers explain configurations and remain keyboard usable", async ({
  page,
  browser,
}) => {
  await page.goto("/energy/ecoflow");
  const capacity = page.getByRole("button", { name: "15 kWh", exact: true });
  await capacity.focus();
  await page.keyboard.press("Enter");
  await expect(capacity).toHaveAttribute("aria-pressed", "true");
  await expect(page.locator(".module-result")).toHaveText(
    "3 modules · 15 kWh voorbeeldcapaciteit",
  );
  await expect(page.locator(".stack-layer.is-active")).toHaveCount(3);
  await page.goto("/energy/peblar");
  await page.getByRole("button", { name: "Zijaanzicht", exact: true }).click();
  await expect(page.locator("[data-product-image]")).toHaveAttribute(
    "src",
    "/assets/energy/photo/peblar-side.webp",
  );
  await page
    .locator("[data-product-image]")
    .evaluate((image) => image.decode());
  await page.getByRole("button", { name: "Laden op zon", exact: true }).click();
  await expect(page.locator('[data-mode-panel="zon"]')).toBeVisible();
  await expect(page.locator('[data-mode-panel="normaal"]')).toBeHidden();
  await page
    .getByRole("button", { name: "Load balancing", exact: true })
    .click();
  await expect(page.locator('[data-mode-panel="balans"]')).toBeVisible();
  const context = await browser.newContext({ javaScriptEnabled: false });
  const fallback = await context.newPage();
  await fallback.goto("http://127.0.0.1:8787/energy/peblar");
  await expect(fallback.locator("[data-mode-panel]:visible")).toHaveCount(3);
  await context.close();
});
