import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

for (const width of [320, 390, 768, 1440]) {
  test(`layout, assets and accessibility at ${width}px`, async ({ page }) => {
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.setViewportSize({ width, height: 900 });
    const errors = [];
    page.on("pageerror", (error) => errors.push(error.message));
    page.on("response", (response) => {
      if (response.status() >= 400)
        errors.push(`${response.status()} ${response.url()}`);
    });
    await page.goto("/");
    await expect(page.locator("h1")).toHaveCount(1);
    for (const image of await page.locator("img:visible").all()) {
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
    const allMedia = page.locator(".home-gallery a");
    for (const media of await allMedia.all()) {
      const box = await media.boundingBox();
      expect(box.width / box.height).toBeCloseTo(width <= 475 ? 1 : 4 / 3, 1);
    }
    const cards = await page.locator(".services article").evaluateAll((items) =>
      items.map((item) => ({
        top: item.getBoundingClientRect().top,
        bottom: item.querySelector(".card-copy").getBoundingClientRect().bottom,
      })),
    );
    for (const card of cards) {
      const nextRow = cards.find((candidate) => candidate.top > card.top);
      if (nextRow) expect(nextRow.top).toBeGreaterThan(card.bottom);
    }
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
  await expect(
    page.getByRole("navigation", { name: "Hoofdnavigatie" }),
  ).toBeVisible();
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

test("portfolio opens and closes by keyboard, returning focus", async ({
  page,
}) => {
  await page.goto("/");
  const photo = page.locator("[data-gallery]").first();
  await photo.focus();
  await page.keyboard.press("Enter");
  await expect(page.getByRole("dialog")).toBeVisible();
  await expect(page.locator("#beeldtitel")).toContainText("Houten");
  await page.keyboard.press("Escape");
  await expect(page.getByRole("dialog")).toBeHidden();
  await expect(photo).toBeFocused();
});

test("the inquiry validates input and prepares a WhatsApp draft on request", async ({
  page,
}) => {
  await page.goto("/");
  await page.emulateMedia({ reducedMotion: "reduce" });
  const form = page.locator("#offerte");
  const submit = form.getByRole("button", { name: "Open WhatsApp" });
  await submit.click();
  await expect(form.locator(":invalid").first()).toBeVisible();
  const service = page.locator("[data-project]").first();
  await service.focus();
  await page.keyboard.press("Enter");
  await expect(form.locator("select")).toHaveValue("Complete woningrenovatie");
  await form.getByLabel("Naam").fill("Test");
  await form.getByLabel("E-mailadres").fill("test@example.com");
  await form.getByLabel("Bericht").fill("Testbericht");
  await page.route("https://wa.me/**", (route) =>
    route.fulfill({ body: "Test" }),
  );
  const outgoing = page.waitForRequest("https://wa.me/**");
  await submit.click({ timeout: 5000 });
  const url = new URL((await outgoing).url());
  expect(url.pathname).toBe("/31612350850");
  expect(url.searchParams.get("text")).toContain("Testbericht");
});

test("flooring and excavation are linked from expertise", async ({
  page,
  request,
}) => {
  await page.goto("/");
  await expect(page.locator(".installation-media img")).toHaveCount(2);
  await page
    .getByRole("link", { name: "Vloerverwarming en vloerafwerking" })
    .click();
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "Vloerverwarming en vloerafwerking",
  );
  await expect(
    page.getByRole("heading", { name: "Infrezen in de bestaande dekvloer" }),
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Bespreek uw project", exact: true }),
  ).toHaveAttribute("href", /^mailto:hallo@debouwpro\.nl/);
  const excavation = await request.get("/graafwerk/");
  expect(excavation.status()).toBe(200);
  expect(excavation.headers()["x-robots-tag"]).toContain("noindex");
  await page.goto("/");
  await page.getByRole("link", { name: "Bekijk graafwerk" }).click();
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "Graafwerk met een minigraver",
  );
});
