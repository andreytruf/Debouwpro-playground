# Whspr brochure-based update

Scope: Debouwpro-playground only. The Energy card, Whspr page and its social image now identify the actual Whspr shown in the owner-supplied brochure. Existing static architecture, homepage, other product designs, navigation and noindex remain intact. No production, DNS, Main or Test changes.

## Source material and image extraction

The owner supplied and explicitly requested extraction from `/De Bouw Pro/B2B info/Whspr/whspr-brochure-2026-09-24.pdf` and `whspr-installatiehandleiding.pdf` via Dropbox. Only selected WebP derivatives are published; no complete PDFs or private Dropbox URLs are committed or deployed. Copyright remains Whspr. Owner-authorised use here is for identification/presentation of the described Whspr solution; this is not an open-licence claim, redistribution licence or official installer/partner claim. No new AI imagery was needed.

Images are extracted from the embedded brochure bitmaps, rather than captured with page headings, customer quotes or signatures. Source colour, device shape and proportions are preserved. No AI reconstruction, invented branding, hardware substitution or composite placement is used.

| Public images under `assets/energy/photo` | Brochure source | Treatment |
| --- | --- | --- |
| `whspr-product-{480,640}.webp` | p.9, embedded product render xref 636, 1138×640 | Crop blank side margins to native 640×640, then create 480/640 WebP. All device geometry remains intact. Used on landing card, hero and social metadata. |
| `whspr-detail-{480,725}.webp` | p.6, xref 475, 725×1088 | Extract and resize. Hardware detail from the manufacturer. |
| `whspr-garden-{480,800}.webp` | p.7, xref 497, 800×1200 | Extract and resize; manufacturer's placement example, explicitly not a DE BOUW PRO installation or customer reference. No customer testimonials copied. |
| `whspr-thermostat-{640,1280}.webp` | p.8, xref 562, 1440×810 | Extract and resize; example screen values clearly labelled. |

The brochure's p.10 image is explicitly marked PLACEHOLDER RENDER and was not used. The cover/architectural scene was unnecessary. Previous AI files `whspr-{720,1600}.webp` remain as historical assets to preserve existing work, but no current HTML page references them. Archived earlier screenshots retain their historical appearance.

## Technical verification and corrections

- Brochure p.9 and manual pp.26–28: body 592×592×823 mm; with BigFoot supports 592×600×922 mm. Replaces the old approximate 60×60×90 cm. Neither size includes required placement space.
- Published heat output 4 kW, COP 4.81 at A7/W35; max electrical input 1.7 kW. Actual performance remains conditional; no annual savings or guaranteed payback.
- Hybrid space heating; domestic hot water stays with the boiler. Supplied thermostat controls the heat pump and boiler. Manual describes either/or operation; it is not described as simultaneous unrestricted operation.
- Manual v1.2 is labelled “voor review”. The website attributes the data and requires current model/installation confirmation. A draft manual is not presented as final approval.
- Manual: max sound power 51 dB(A), night max 45 dB(A) with 2 kW thermal output. These are explicitly sound-power source values, not sound pressure at the property boundary. No “inaudible” or universal boundary placement claim.
- Brochure's “1 cm from boundary / anywhere / no sound calculation” sales language is not repeated. Manual pp.5–6 requires free air and separate R290 safety-zone assessment, including openings and drains. FAQ mentions 30 cm free airflow while clearly distinguishing the safety zone. The page does not provide a DIY installation drawing.
- No fixed one-day installation promise, blanket no-electrical-work claim, guaranteed stock, customer reviews, partner status or certifications added.

## Reproducing checks

`npm run check` builds the static site and validates the existing Cloudflare configuration with a dry run. `npm test` covers direct routes, refresh, image decoding, local links, responsive widths, WCAG AA accessibility checks, navigation, no-JavaScript and the unchanged homepage hash. With `npm run dev` running, use `node scripts/preview-whspr.mjs` for desktop/mobile full pages, heroes, Whspr card and section crops in `previews/`.


## Validation

`npm run check`: static build and Wrangler dry run passed. `npm test`: 20/20 passed, including all seven Energy routes at 320/390/768/1440 px, image decoding, WCAG AA automated checks, navigation/CTAs, no-JavaScript fallback, headers, local links and unchanged homepage content hash. Hero copy was shortened after screenshot review; final Whspr responsive/accessibility check passed (1/1) after that cleanup.

No current generated HTML references the previous `whspr-1600.webp` or `whspr-720.webp`; the Energy card and Whspr hero/social metadata all point to the extracted product render. All selected images are local responsive WebP with declared dimensions and lazy loading below the hero. Product render: 18 KB at 640 px, 11 KB at 480 px.


## Published verification

Published source: `fb38e6b9c2465d2f3c758eff430e6d0d4b2b54b4`. Active Playground deployment `808e9b27-4c25-4089-b55c-d8117bbbdfd0`, version `f89b8ed4-1092-4b4f-86c8-93f4bd27930a`, at 100%. An independent Wrangler publication had already activated the same validated file contents by the final check. All 61 public files matched this local build byte for byte and retained noindex, so the additional API-uploaded candidate `064394c5-2fc9-4ca0-9e1c-35064ce05cc2` was deliberately not activated. Results: `live-checks.json`.

Preview: https://debouwpro-playground.andrey-57c.workers.dev/energy/whspr/ . Landing card: https://debouwpro-playground.andrey-57c.workers.dev/energy/#selectie . Main/Test repositories, DNS and debouwpro.nl were not touched.
