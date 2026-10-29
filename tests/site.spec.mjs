import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

for (const width of [320, 390, 768, 1440]) {
  test(`layout, assets and accessibility at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    const errors = [];
    page.on("pageerror", (error) => errors.push(error.message));
    page.on("response", (response) => {
      if (response.status() >= 400)
        errors.push(`${response.status()} ${response.url()}`);
    });
    await page.goto("/");
    await expect(page.locator("h1")).toHaveCount(1);
    for (const image of await page.locator("img").all()) {
      await image.scrollIntoViewIfNeeded();
      await expect(image).toHaveJSProperty("complete", true);
      expect(await image.evaluate((img) => img.naturalWidth)).toBeGreaterThan(
        0,
      );
    }
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
    ).toBe(true);
    expect(errors).toEqual([]);
    const audit = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
      .analyze();
    expect(audit.violations).toEqual([]);
  });
}
test("mobile menu, keyboard, anchors and FAQ", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  const menu = page.locator(".menu-toggle");
  await menu.click();
  await expect(menu).toHaveAttribute("aria-expanded", "true");
  await page.keyboard.press("Escape");
  await expect(menu).toHaveAttribute("aria-expanded", "false");
  await expect(menu).toBeFocused();
  await menu.click();
  await page
    .getByRole("navigation")
    .getByRole("link", { name: "Onze aanpak" })
    .click();
  await expect(page).toHaveURL(/#aanpak$/);
  await expect(menu).toHaveAttribute("aria-expanded", "false");
  await expect(page.locator("#aanpak")).toBeFocused();
  await page.locator("summary").first().click();
  await expect(page.locator("details").first()).toHaveAttribute("open", "");
});
test("no JavaScript and reduced motion", async ({ browser }) => {
  const context = await browser.newContext({
    javaScriptEnabled: false,
    viewport: { width: 390, height: 844 },
  });
  const page = await context.newPage();
  await page.goto("http://127.0.0.1:8787/");
  await expect(page.getByRole("navigation")).toBeVisible();
  await expect(page.locator(".intro-copy")).toHaveCSS("opacity", "1");
  await context.close();
  const reduced = await browser.newContext({ reducedMotion: "reduce" });
  const other = await reduced.newPage();
  await other.goto("http://127.0.0.1:8787/");
  await expect(other.locator("html")).toHaveCSS("scroll-behavior", "auto");
  await expect(other.locator(".intro-copy")).toHaveCSS("opacity", "1");
  await reduced.close();
});
test("Cloudflare headers, missing paths and source isolation", async ({
  request,
}) => {
  const home = await request.get("/");
  expect(home.headers()["x-robots-tag"]).toContain("noindex");
  expect(home.headers()["content-security-policy"]).toContain(
    "default-src 'self'",
  );
  for (const path of [
    "/missing-page",
    "/AGENTS.md",
    "/package.json",
    "/.git/config",
  ]) {
    expect((await request.get(path)).status()).toBe(404);
  }
});
