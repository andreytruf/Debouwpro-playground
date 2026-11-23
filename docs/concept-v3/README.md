# Playground concept V3 — staging-based comparison

Baseline: andreytruf/Debouwpro-test branch staging/playground-3e17934, commit ee2bcadfb843eb09fd20b0cd6af692c6c3d828e5. Read-only reference checkout; no mutation or deployment to Test/Main. Main branch of Test only contains instructions, so the deployed staging branch is the relevant source.

First import the staging homepage, its exact home CSS/JS, supplied V2 logo, new project/service images and flooring/excavation page builder. Keep existing Playground legal masters, PDFs, source/contact rules, Worker identity and noindex. Adjust only the factual privacy description for the imported browser-side inquiry-draft form. No new data-submission backend, analytics, trackers or third-party page resources.

The original reference homepage is frozen under design/reference-test/index.html. Test's original homepage has no equipment-card showcase; retain the geometric Energy introduction rather than adding one. Services and project metadata use existing staging content only; no invented Maatwerk offer or before/after pair.

## Result

The experiment is isolated in `assets/concept-v3.css` and `assets/concept-v3.js`. The original staging `home.css` remains byte-identical. `/vergelijk/` links both variants; `/vergelijk/test/` and `/vergelijk/test/energy/` preserve the staging homepage/Energy presentation. `/` and `/energy/` present the new concept. The live Test site remains independent and unchanged.

Hero: owner-supplied staging Utrecht kitchen with warm light left overlay; mobile text above a separate visible kitchen frame. Headline “Professionele renovaties zonder gedoe.” The original V2 PNG is preserved with copper PRO. Large copper text uses a darker coordinated shade to meet contrast on the warm light background; original #D97841 remains on logo/button surfaces.

Services: six existing offers, locally drawn SVG symbols by default, accessible photo/icon toggle without persistent storage. Existing project choices and flooring/excavation routes are preserved. No undefined Maatwerk card is invented. Existing geometric Energy introduction is retained, with no new hardware-card showcase on the homepage.

Projects: five staging portfolio images in a compact photo-first grid; names/descriptions appear in the native modal. Links remain keyboard-accessible with explicit project labels, Escape closes and focus returns. Captions remain the source for modal titles, and no new project facts are invented. Before/after is deferred until authentic matched photographs exist.

Shared footer: three desktop columns (V2 brand + WhatsApp, services, contacts), legal links on the lower row; stacked responsive mobile layout. Direct user-initiated WhatsApp links only; no widget/pixel. Contacts remain hallo@debouwpro.nl and info@debouwpro.nl. No response-time or guarantee claim added. Existing legal CONCEPT documents/PDFs remain unchanged; privacy factual annotation describes the imported local draft-preparation form accurately.

## Validation

Build and Wrangler dry run passed. All 36 distinct checks passed across the full run and targeted rerun: initial run had 35 passes and one ambiguous selector caused by the new footer WhatsApp link; the service-page assertion now uses the exact main CTA name. The affected service, homepage, Energy and new concept checks passed on rerun. No functional assertion was removed. Final checks additionally cover 320px comparison page, matching homepage/Energy h1 styling, frozen baseline routes, accessible variant switching, no storage, keyboard modal/focus, no-JS fallback, local form validation and intentional WhatsApp navigation. Desktop/mobile screenshots for both variants, service views, project modal and footer are under previews/. No test data was sent to a real external recipient.

No framework/dependency change, trackers, backend, cookie storage, production/DNS change or mutation of Test/Main/Drive. Fresh public file verification is recorded after Playground publication.
