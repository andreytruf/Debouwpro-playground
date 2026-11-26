Follow-up refinement, 26 November: softened the accelerated entrance after owner feedback. Shade now takes 850ms after 100ms; copy overlaps from 220ms for 950ms with a gentler acceleration curve, 6px movement and 1px focus effect. Total entrance is about 1.17 seconds. Keyboard and reduced-motion bypasses remain unchanged.

# Hero entrance and Graafwerk — Playground

**26 November refinement:** the owner requested a quicker, overlapping entrance. Shade now starts after 80ms and lasts 600ms; copy starts after 260ms and lasts 650ms, with a subtle 2px-to-sharp title focus. The whole sequence finishes around 910ms after image readiness rather than 1450ms. Reduced motion, no-JS and keyboard alternatives are retained. Original timing notes below describe the first iteration.

Owner preference: retain the warm Test-derived kitchen hero and icon-based service cards by default. The photo comparison remains available without persistence. No Test/Main/production, DNS, legal-master or email-configuration changes.

## Hero

`data-hero-sequence` opts the main homepage hero into the sequence. Existing reference/light variants are unchanged. The photo decodes before the entrance begins: an approximately 180ms clear-photo interval, 950ms shade fade and 750ms copy arrival starting after 700ms. The final look matches the warm static hero. Frame captures/opacity measurements are saved in sequence.json and previews/.

Without JS, with reduced motion or when the document is hidden, the content remains immediately visible. Keyboard focus ends any pending entrance immediately. Invisible introductory links do not intercept pointer clicks. Image failure and a bounded safety timer prevent hidden content; nothing stores cookies or browser data. Animation uses opacity and a small translate rather than moving page layout or repeatedly animating.

## Graafwerk

`services/graafwerk.mjs` renders a complete service page, using `assets/graafwerk.css` only on that route. Includes breadcrumbs, main proposition, original SVG site-overview diagram, three existing work categories, a four-part preparation checklist, process, native FAQ and mail/phone/WhatsApp CTAs. No excavator photo, completed project, dimension, price, certification or turnaround time is invented. The SVG is explicitly a principle illustration, not an execution plan. The service's social image now shows the corporate logo rather than an unrelated kitchen photograph.

Existing header/footer, hallo@debouwpro.nl, info@debouwpro.nl, noindex and local assets are retained. Inquiry text uses the visitor's mail app; no server submission or WhatsApp message is sent automatically.

## Verification

Static build and Wrangler dry run passed. All 45 distinct Playwright checks passed across the full and focused runs (40 passed initially; 9 relevant checks passed after local asset-index refresh and a contrast correction). New tests observe the visual entrance and reduced-motion/keyboard alternatives, and verify Graafwerk at 320/390/768/1440px, real SVG decoding, section anchors, FAQ, CTA destinations and axe accessibility. Existing site, Energy, legal, product-selection and privacy checks remain passing.

A previously running Wrangler dev server had a stale index and returned HTML 404 for the newly added SVG/CSS. A fresh server resolved asset delivery; the source SVG also passed XML parsing. A small copper eyebrow on the beige preparation panel was darkened after axe reported insufficient contrast. Final mobile/desktop screenshots were visually reviewed.

Reproduce with npm run check, npm test and node scripts/preview-hero-graafwerk.mjs while npm run dev is running. Restart the local dev server after adding new public assets if its asset index remains stale. This is a local development issue, not a reason to relax asset-response tests.
