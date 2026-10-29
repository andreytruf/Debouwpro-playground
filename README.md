# DE BOUW PRO — B12-inspired Website Concept V2

Experimental Dutch landing page for premium complete renovations in Utrecht / De Meern. This repository is **playground only**; it does not target Debouwpro-main, Debouwpro-test or debouwpro.nl.

## Preview locally

Requires Node.js 22+ and npm.

```sh
npm ci
npm run dev
```

Open http://127.0.0.1:8787. You can also open `index.html` directly for a basic visual preview; use Wrangler for actual routing and response headers.

Saved previews: [desktop](docs/previews/desktop-hero.jpg), [mobile](docs/previews/mobile-hero.jpg), [full desktop page](docs/previews/desktop-full.jpg), [full mobile page](docs/previews/mobile-full.jpg).

## Build and verify

```sh
npm run build
npm run check
npx playwright install chromium
npm test
```

`build` copies an explicit list of public files into `dist/`. Instructions, source tooling, tests and dependencies are never public assets. `check` runs a Wrangler dry run, with no upload or deployment. Tests cover four viewport widths (320, 390, 768, 1440), image loading, horizontal overflow, browser errors, axe WCAG A/AA checks, mobile navigation, Escape/focus, FAQ, reduced motion, JavaScript-disabled rendering, headers and 404/source isolation. Automated checks do not replace manual assistive technology testing.

The Playwright config uses `/usr/bin/chromium` when available; otherwise it uses Playwright's installed browser. To use another executable, set `CHROMIUM_PATH`. With the local server running, `npm run preview:capture` regenerates screenshots and local performance observations. These localhost observations are not production Core Web Vitals or throttled mobile measurements.

## Cloudflare preparation

Read-only inspection on 2026-10-29 found an existing assets-based Worker named `debouwpro-playground` and **no Workers Builds triggers** attached to it. Its current demo URL is https://debouwpro-playground.andrey-57c.workers.dev. **V2 is prepared, not deployed**; that URL continues to show the previous deployment until publication.

`wrangler.jsonc` targets only that Worker. It defines no routes, custom domains, DNS, bindings or production environments. After authenticating with access to the intended Cloudflare account, deployment is:

```sh
npm run deploy
```

For an optional future Git integration, connect **only this repository** to the existing playground Worker in Workers Builds. Build command: `npm run build`; deploy command: `npx wrangler deploy`; root: repository root. Verify the target Worker before enabling automatic builds. No GitHub/Cloudflare integration has been created by this change. See [Cloudflare static assets](https://developers.cloudflare.com/workers/static-assets/) and [Workers Builds](https://developers.cloudflare.com/workers/ci-cd/builds/).

## Content and privacy

- Photography is local, responsive WebP, sourced from the prototype's Unsplash references. Every photographic section identifies it as inspiration/reference, not a DE BOUW PRO project. Sources are listed in [docs/PHOTO-SOURCES.md](docs/PHOTO-SOURCES.md).
- No fabricated projects, testimonials, ratings, awards or performance claims.
- Public email `hello@debouwpro.nl` and phone `+31 6 12350850` come from `AGENTS.md`. Email buttons open the visitor's mail app; there is no submission backend or delivery promise.
- No analytics, cookies, external fonts, third-party runtime requests or frameworks. Runtime is HTML, CSS and small progressive enhancement JavaScript.
- Semantic headings, Dutch metadata, Open Graph tags and image descriptions are included. Playground is deliberately `noindex, nofollow` in HTML and response headers, with a disallowing `robots.txt`. No production canonical or sitemap is added to this experiment. Set verified canonical URLs, indexability and sitemap only when promoting reviewed code to a real site.

## Next steps

Replace references with approved real project photography and case studies; confirm service scope and workflow copy; add a server-backed inquiry form with privacy information and spam protection if needed; measure performance on the published playground and real mobile devices; complete keyboard/screen reader and content QA before staging promotion.
