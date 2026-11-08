import { chromium } from "@playwright/test";
import { existsSync } from "node:fs";
import { mkdir, writeFile } from "node:fs/promises";
const base =
  process.env.PRIVACY_AUDIT_BASE ||
  "https://debouwpro-playground.andrey-57c.workers.dev";
const b = await chromium.launch({
  executablePath:
    process.env.CHROMIUM_PATH ||
    (existsSync("/usr/bin/chromium") ? "/usr/bin/chromium" : undefined),
  args: ["--no-sandbox"],
});
const observations = [];
try {
  for (const width of [390, 1440]) {
    const c = await b.newContext({
      viewport: { width, height: 900 },
      reducedMotion: "reduce",
    });
    const p = await c.newPage();
    let urls = new Set();
    p.on("request", (r) => urls.add(r.url()));
    for (const route of [
      "/",
      "/energy/",
      "/energy/tesla/",
      "/energy/ecoflow/",
      "/energy/goodwe/",
      "/energy/peblar/",
      "/energy/samsung/",
      "/energy/whspr/",
      "/algemene-voorwaarden/",
      "/privacy/",
      "/cookies/",
    ]) {
      urls = new Set();
      const r = await p.goto(base + route, { waitUntil: "networkidle" });
      const headers = r.headers();
      if (route === "/energy/" && r.status() === 200)
        await p.getByRole("button", { name: "Warmte", exact: true }).click();
      observations.push({
        route,
        width,
        status: r.status(),
        headers: {
          robots: headers["x-robots-tag"],
          csp: headers["content-security-policy"],
          nel: headers["nel"],
          reportTo: headers["report-to"],
          setCookiePresent: !!headers["set-cookie"],
        },
        requests: [...urls].map((u) =>
          new URL(u).origin === new URL(base).origin ? new URL(u).pathname : u,
        ),
        externalRequests: [...urls].filter(
          (u) => new URL(u).origin !== new URL(base).origin,
        ),
        cookies: (await c.cookies()).map(
          ({ name, domain, expires, sameSite, secure, httpOnly }) => ({
            name,
            domain,
            expires,
            sameSite,
            secure,
            httpOnly,
          }),
        ),
        browser: await p.evaluate(async () => ({
          local: Object.keys(localStorage),
          session: Object.keys(sessionStorage),
          indexedDB: indexedDB.databases
            ? (await indexedDB.databases()).map((d) => d.name)
            : [],
          serviceWorkers:
            "serviceWorker" in navigator
              ? (await navigator.serviceWorker.getRegistrations()).length
              : 0,
          caches: "caches" in window ? await caches.keys() : [],
          scripts: [...document.scripts].map((s) => s.src || "[inline]"),
          iframes: document.querySelectorAll("iframe").length,
          forms: document.querySelectorAll("form").length,
        })),
      });
    }
    await c.close();
  }
  await mkdir("docs/privacy-cookies", { recursive: true });
  await writeFile(
    "docs/privacy-cookies/deployed-audit.json",
    JSON.stringify(
      { checkedAt: new Date().toISOString(), base, observations },
      null,
      2,
    ) + "\n",
  );
  console.log(
    JSON.stringify({
      pages: observations.length,
      non200: observations.filter((o) => o.status !== 200).map((o) => o.route),
      external: observations.filter((o) => o.externalRequests.length).length,
      cookies: observations.filter((o) => o.cookies.length).length,
      browserStorage: observations.filter(
        (o) =>
          o.browser.local.length ||
          o.browser.session.length ||
          o.browser.indexedDB.length ||
          o.browser.serviceWorkers ||
          o.browser.caches.length,
      ).length,
    }),
  );
} finally {
  await b.close();
}
