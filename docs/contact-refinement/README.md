# Contact and mobile refinements — 26 November 2026

Playground only. Keeps the warm kitchen hero and 1.6-second entrance, original logo, icon/photo comparison, accessible project gallery and noindex.

- Contact area: editorial panel, clearer labels, optional phone marker, larger fields and focus outlines, three direct contact links, stacked mobile actions, and named fieldset/form.
- Icon service cards: horizontal icon/content layout with shorter spacing on mobile; desktop and photo option preserved.
- Graafwerk: coordinated supporting service card with original line icon and dedicated-page link. Added to inquiry project choices.
- Corporate and Energy copy: formal Dutch u/uw tone; technical product specifications preserved. Historical comparison snapshots are unchanged.

## Email delivery limitation
The form still prepares an email or WhatsApp message that the visitor sends. Labels and privacy copy disclose this. Cloudflare's read-only Email Sending subdomains query returned no configured senders. Enabling direct delivery requires a verified sending domain/provider and separate mail/DNS setup; no Workspace, MX/SPF/DKIM/DMARC, domain delegation or email-service configuration was changed in this iteration. No new provider or dependency was added, and no test emails were sent.

## Validation
Existing build/dry-run and browser checks cover responsive layout, accessibility, navigation, form draft preparation, photo viewer and Energy interactions. New preview images are in previews/. See the accompanying task report for final results.

Validation results: build and Wrangler dry run passed. Initial suite: 44/45 passed, with a GoodWe checkbox timeout. Focused rerun: 24/24 passed including all GoodWe tests, Energy and homepage checks. Final mobile-spacing rerun: 4/4 layout/accessibility checks passed at 320, 390, 768 and 1440px. All 45 distinct existing tests have passed across these runs. Screenshots inspected at 390 and 1440px.
