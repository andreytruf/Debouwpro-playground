import { test, expect } from "@playwright/test";

test("Peblar executions switch hardware and preserve the selected inquiry", async ({
  page,
}) => {
  await page.goto("/energy/peblar");
  const home = page.locator('[data-peblar-config="Home"]');
  await home.getByRole("button", { name: "Kabel 7,5 m", exact: true }).click();
  await expect(home.locator("[data-variant-advice]")).toHaveAttribute(
    "href",
    /Home.*7%2C5/,
  );
  const business = page.locator('[data-peblar-config="Business"]');
  await business.getByRole("button", { name: "Socket", exact: true }).focus();
  await page.keyboard.press("Enter");
  await expect(business.locator("[data-variant-image]")).toHaveAttribute(
    "src",
    "/assets/energy/photo/peblar-business.webp",
  );
  await business.locator("[data-variant-image]").evaluate((i) => i.decode());
  await expect(business.locator("[data-variant-advice]")).toHaveAttribute(
    "href",
    /Business.*Socket/,
  );
  await business
    .getByRole("button", { name: "Kabel 5 m", exact: true })
    .click();
  await expect(business.locator("[data-variant-image]")).toHaveAttribute(
    "src",
    "/assets/energy/photo/peblar-front.webp",
  );
  const dual = page.locator('[data-peblar-config="Dual"]');
  await dual
    .getByRole("button", { name: "Dual · Shutter", exact: true })
    .click();
  await expect(dual.locator(".peblar-selected")).toContainText("Shutter");
  await expect(dual.locator("[data-variant-advice]")).toHaveAttribute(
    "href",
    /Dual.*Shutter/,
  );
  await expect(page.locator(".photo-credit,.visual-disclaimer")).toHaveCount(0);
});

test("Peblar complete range is readable without JavaScript", async ({
  browser,
}) => {
  const context = await browser.newContext({
    javaScriptEnabled: false,
    viewport: { width: 390, height: 844 },
  });
  const page = await context.newPage();
  await page.goto("http://127.0.0.1:8787/energy/peblar");
  await expect(page.locator(".variant-available:visible")).toHaveCount(3);
  await expect(
    page.locator('[data-peblar-config="Business"] .variant-available'),
  ).toContainText("Socket met shutter");
  await expect(page.locator("[data-variant-advice]:visible")).toHaveCount(3);
  await context.close();
});
