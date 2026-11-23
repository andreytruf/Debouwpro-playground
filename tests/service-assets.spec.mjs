import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
for (const route of ["/graafwerk/", "/vloerverwarming/", "/vergelijk/test/"]) {
  test(`${route}: nested route loads shared assets and mobile navigation`, async ({
    page,
  }) => {
    const failures = [];
    page.on("response", (r) => {
      if (r.status() >= 400) failures.push(r.url());
    });
    page.on("pageerror", (e) => failures.push(e.message));
    await page.setViewportSize({ width: 390, height: 844 });
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.goto(route);
    await expect(page.locator("header")).toHaveCSS("position", "sticky");
    await expect(page.locator(".menu-toggle")).toBeVisible();
    await page.locator(".menu-toggle").click();
    await expect(page.locator(".menu-toggle")).toHaveAttribute(
      "aria-expanded",
      "true",
    );
    await page.keyboard.press("Escape");
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
    ).toBe(true);
    for (const img of await page.locator("img:visible").all()) {
      await img.scrollIntoViewIfNeeded();
      await img.evaluate((i) => i.decode());
    }
    if (route !== "/vergelijk/test/") {
      const audit = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
        .analyze();
      expect(
        audit.violations.map((v) => ({
          id: v.id,
          nodes: v.nodes.map((n) => n.target),
        })),
      ).toEqual([]);
    }
    expect(failures).toEqual([]);
  });
}
