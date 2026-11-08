# Legal, privacy and cookie preview

Only Debouwpro-playground changed. Canonical pages: `/algemene-voorwaarden/`, `/privacy/`, `/cookies/`. Existing brand/logo, homepage main content, Energy pages, security headers and noindex are retained. Main, Test, production domains and Google Drive masters were not changed.

## Source and status

Read [reconciliation and outstanding checks](RECONCILIATION.md). Drive is the authoritative working source, with six distinct versioned CONCEPT documents. Six public PDF review derivatives retain their contractual text and placeholders, omit explicitly internal publication checklists, and clearly disclaim adoption. The earlier mixed 21-article document/research remains historical reference and old PDF URLs continue working. No warranty regime is silently imported across B2C/B2B/ZZP/Energy.

`/privacy/` uses Drive v0.1 text with separately labelled audit/owner-confirmed facts and visible review callouts. No retention period, legal form, provider agreement, access control, AI-data-handling setting or international safeguard is represented as independently confirmed when it is not. `/cookies/` describes the actual current website and the limits of a normal-visit audit. Cloudflare delivery/security and network-error reporting are distinguished from application tracking.

## Build and reproduction

- `legal/drive-sources.json`: selected textual snapshots, source metadata and displayable-text hashes; not deployed as a public file.
- `legal/documents.mjs`: separate document index and PDF rendering, preserving source wording.
- `legal/privacy.mjs`: Drive-led privacy presentation and cookie notice.
- `scripts/generate-drive-legal-pdfs.mjs`: regenerate review PDFs after an explicitly reviewed Drive source update; does not modify Drive.
- `scripts/preview-privacy.mjs`: desktop/mobile screenshots for three legal pages against local dev; set PRIVACY_PREVIEW_BASE to inspect the live Playground.
- `scripts/audit-privacy.mjs`: fresh-browser audit at mobile and desktop across 11 routes, defaulting to the deployed Playground; set PRIVACY_AUDIT_BASE for a different authorised preview.
- `npm run check` and `npm test`: existing build/check workflow and full Playwright suite.

No new dependency, framework, tracker, contact backend, persistent storage or consent banner was introduced. The footer is a labelled legal navigation, and the pre-existing no-JS test now names the main navigation because a second navigation landmark is intentionally present.

## Validation

All 30 Playwright tests passed in the final local run. Includes axe accessibility, 320/390/768/1440px layouts, direct routes and refresh, new footer links, all six PDF responses/bytes/noindex, existing homepage preservation, Energy/product interactions and browser cookie/storage/request checks. Static build and Wrangler dry run passed. A stale existing Wrangler asset index initially returned 404 for new pages; restarting that local development server fixed it. No assertion was removed to hide that problem.

All 155 numbered source clauses across Particulieren/B2B/ZZP/Energy were compared in order with PDF text, then checked as complete normalized paragraphs; no clause mismatch. Form/privacy source text is preserved as a separate derivative, including open fields, with only the internal checklist omitted. Desktop/mobile screenshots and representative source/PDF checks were inspected. The final deployed audit and public file verification are recorded after publication; these technical results do not confer legal approval.

## Published validation

Source commit `a61df6e428d15d768bd98a82db95dc06c5f79375`; deployment `0185a9a0-8673-46d9-ad40-7e8ae34ca51a`, version `2902b3a6-0432-4f4a-a392-7de0158316b3`. All 89 public files matched dist byte for byte. All six new PDF endpoints returned PDF content and noindex headers. No redundant deployment was issued once the existing Wrangler publication completed. GitHub Actions passed for the implementation commit: https://github.com/andreytruf/Debouwpro-playground/actions/runs/42532881701 .

The deployed browser audit completed 22 observations (11 URLs at 390px and 1440px). All returned HTTP 200, noindex and CSP. No cookies, local/session storage, IndexedDB databases, service workers, caches or external page requests were observed. Application source and browser inspection found no tracker, iframe or submission form. Cloudflare NEL/Report-To headers are recorded and disclosed; absence of an observed reporting request is not a promise that no error report can ever be sent. See deployed-audit.json and public-verification.json.

Managed-environment limitation: Chromium did not trust the environment HTTPS inspection certificate. The audit therefore used the explicit, browser-only `PRIVACY_AUDIT_PROXY_CA=1` setting, recorded in its output. Normal curl HTTPS verification remained enabled for public content/header checks. This bypass was not added to the website, tests or production configuration, and the browser audit does not certify the public TLS chain.
