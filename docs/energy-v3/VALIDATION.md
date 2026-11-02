# Visual/product upgrade validation

The homepage and seven Energy pages retain their existing HTML/CSS/JavaScript build and Cloudflare assets-only architecture. Homepage main content remains byte-for-byte identical to V2; only header/footer wordmarks changed.

## Implemented

- One corporate SVG logotype asset for all headers and footers, using the same font family and proportions. PRO is `#D97841`; a white-on-dark variant is included for future use. The entire ENERGY heading is copper.
- Landing page sections, categories, solution filters, integration explanation, process, FAQ, empty real-project gallery and contact flows preserved. Product cards now use responsive photographic scenes.
- Six distinct brand compositions in `energy/showcase.mjs`, with common factual specifications, source links, installation information, FAQs, contact and related solutions retained.
- Tesla has a cinematic architectural hero and separate Powerwall / Wall Connector stories, with real CC0 Powerwall 3 reference photography.
- EcoFlow has a bright split composition, 5/10/15 kWh example selector and an original energy-flow explanation without fabricated live data.
- GoodWe has a centred architectural composition, separate hybrid inverter / Lynx roles and an original system blueprint.
- Peblar has a residential composition, official media-pack product imagery with alternate views and three progressively enhanced charging explanations.
- Samsung has a panoramic split composition, verified 5/8/12/16 kW A7/W35 model-range presentation and water-side installation considerations. Older 2023 Samsung Dropbox documents were not used as R290 imagery.
- Whspr has a human-scale Dutch residential composition, published dimension discussion and hybrid installation explanation, without unsupported acoustic, savings or delivery claims.
- Six original AI scenes, labelled as concepts and never represented as exact product photos or DE BOUW PRO work. The image rights register explicitly identifies manufacturer photography still requiring cleared use.

## Verification

Existing route, refresh, responsive, metadata, noindex, source-isolation, keyboard, no-JavaScript and axe checks are retained. New tests cover identical corporate logos, the copper ENERGY heading and keyboard-operated product explorers. All eight pages are covered at mobile/tablet/desktop widths; full Energy layout checks include 320, 390, 768 and 1440 px.

Desktop/mobile hero and full-page captures for all seven Energy pages are stored in `previews/`. Production source modules, test tooling and documentation are excluded from deployed assets by the explicit build allowlist.

Final local and public verification results and deployment identifiers are recorded below after publication. Main/Test repositories, Wix, production DNS and debouwpro.nl remain outside this change.

## Final local results

- `npm test`: 20/20 passed in the final complete run.
- `npm run check`: static build and Wrangler deploy dry run passed.
- Four viewport widths checked; axe WCAG A/AA audits passed for every Energy page on mobile and desktop.
- `git diff --check`: passed.
