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

Read-only inspection on 2026-10-29 found an existing assets-based Worker named `debouwpro-playground` and **no Workers Builds triggers** attached to it. Its current demo URL is https://debouwpro-playground.andrey-57c.workers.dev. V2 was already published before the PRO ENERGY extension. The Energy work targets this same playground Worker only.

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


## PRO ENERGY extension

Seven static pages are built by the existing `npm run build` workflow: `/energy`, `/energy/tesla`, `/energy/ecoflow`, `/energy/goodwe`, `/energy/peblar`, `/energy/samsung` and `/energy/whspr`. Cloudflare may redirect to a trailing slash; both direct requests and refreshes work. Unknown Energy paths return a real 404.

- `energy/content.mjs`: Dutch page copy, model qualifiers, manufacturer references, FAQs and related solutions.
- `energy/templates.mjs`: semantic HTML renderer. Corporate header and footer are reused from the inspected `index.html`; only internal destinations are adapted for nested pages.
- `scripts/build-energy.mjs`: writes the seven HTML pages into `dist/energy`. Do not edit generated files in `dist`.
- `assets/energy.css`, `assets/energy.js`: scoped visual styles and optional solution filtering. All pages and links work without JavaScript.
- `assets/energy/*.svg`: original, explicitly labelled schematic placeholders. Manufacturer photos are still needed with permission to publish.
- `tests/energy.spec.mjs`: direct URLs, refresh, four viewport widths, accessibility, local links/assets, navigation, filtering, CTA and no-JavaScript coverage.

The corporate homepage content, existing visual styles and assets are preserved. Its only HTML change is the Energy navigation link. Shared navigation JavaScript handles links without hashes to support page-to-page navigation. Playground noindex metadata, response headers, robots and CSP remain in place. No source modules are served as public files.

With the local server running, `node scripts/preview-energy.mjs` captures desktop/mobile screenshots of the landing page, Tesla and Whspr into `docs/energy/previews/`. [Asset and technical source notes](docs/energy/SOURCES.md) list verified facts and outstanding approvals. The [Energy validation report](docs/energy/VALIDATION.md) records checks and publication status.


## Visual and product showcase upgrade

The Energy landing retains its architecture and sections. A single corporate wordmark (`assets/brand/wordmark.svg`) now supplies every header and footer, with PRO in #D97841. The entire ENERGY heading is copper. No homepage main content was rewritten.

`energy/showcase.mjs` supplies six genuinely different editorial compositions: cinematic Tesla, daylight modular EcoFlow, architectural/technical GoodWe, hardware-led Peblar, panoramic Samsung and human-scale Whspr. Specifications, sources, FAQs, consultation and corporate navigation continue using the existing shared renderer. `assets/showcase.css` is isolated to this presentation layer. The existing build, static HTML outputs and Cloudflare assets-only configuration are preserved.

Real Powerwall 3 photography (CC0) and official publicly distributed Peblar media-pack renders supplement six clearly labelled original AI architecture scenes. No AI scene is represented as an exact manufacturer product image or a company project. Other manufacturer image rights remain documented in [the image register](docs/energy-v3/IMAGE-SOURCES.md), together with original asset sources and the older Samsung Dropbox material that was deliberately not reused for R290.

With the local server running, `node scripts/preview-energy-v3.mjs` captures all seven Energy pages at desktop and mobile sizes under `docs/energy-v3/previews/`. The newer tests cover the unified wordmark, copper heading, keyboard-controlled capacity examples, charging explanations and fallback content.


## Peblar and owner portfolio preview

The Peblar page now uses manufacturer-supplied lifestyle photography in place of its former AI scene and includes Home, Business and Dual model cards. Images are local WebP derivatives from the owner's `/De Bouw Pro/B2B info/Peblar` Dropbox media packs. Existing product-view and charging-mode controls remain intact. The two owner-supplied, presentation-edited renovation photos have been moved to the corporate homepage gallery, replacing its temporary references. They no longer appear in Energy or Peblar, following the owner’s placement clarification.

Run `node scripts/preview-peblar.mjs` with the local dev server running to capture desktop/mobile previews in `docs/peblar-update/previews`. Source and verification details: [Peblar update](docs/peblar-update/README.md). Full manufacturer archives, private certificates and contracts are not deployed or redistributed.


## Whspr brochure imagery

The Whspr Energy card now uses the manufacturer’s garden photograph; its hero and social preview use the product render extracted from the owner-supplied September 2026 brochure. The dedicated page also includes extracted hardware detail, garden example and thermostat imagery, precise body/support dimensions, source-attributed sound information and a clearer hybrid heating explanation. No new AI image was needed; the former generic-unit AI image is no longer referenced. All brochure examples are distinguished from company projects. See [Whspr sources and verification](docs/whspr-update/README.md). Capture previews with `node scripts/preview-whspr.mjs` against the running local dev server.


## Corrected photo placement

Owner clarification: the green kitchen and roof-window bathroom belong in the main corporate landing page (`/#inspiratie`), replacing two temporary gallery images. They have been removed from all Energy pages, including Peblar. The original Energy-project placeholder is restored; other homepage sections retain their original content. Whspr’s selection card now shows the device in a real garden/manufacturer setting rather than on white, while the product page hero remains unchanged. Sources and screenshots: [photo placement](docs/photo-placement/README.md). Capture with `node scripts/preview-photo-placement.mjs`.
