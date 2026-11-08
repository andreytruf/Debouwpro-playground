# Algemene voorwaarden — review draft

Playground only. This is a proposed contract document, not a legal opinion, certification of enforceability, or activated replacement for existing contract terms. The public page and every PDF clearly retain CONCEPT status. No contract acceptance checkbox was added to an advice/contact flow.

## Deliverables

- `/algemene-voorwaarden/`: responsive Dutch page, same corporate header/footer, accessible contents links and two downloadable PDFs.
- `/assets/legal/de-bouw-pro-algemene-voorwaarden-concept-2026-11-08.pdf`: 21 articles, 9 A4 pages; renovation, contracting, Energy, individual and business customer distinctions.
- `/assets/legal/de-bouw-pro-projectformulieren-concept-2026-11-08.pdf`: six blank printable forms, one per A4 page (not interactive PDF fields): scope/terms delivery; early-start request; model withdrawal; change order; warning/decision; completion/handover.
- [Russian review and operational checklist](REVIEW-RU.md), including original-source findings, official legal sources and items for lawyer/insurer review. Private customer folders, original contracts and personal mailbox data are not deployed or copied into this repository.

## Identity and status

Owner confirmed DE BOUW PRO and unchanged KvK 55345344 on 8 November 2026 and directed use of the current website address. `www.debouwnl.com` currently publishes Veldzigt 18, De Meern; that address is used. No unverified postal code, VAT ID, legal form, insurance policy or certification is invented. Full contractual identity (including entrepreneur name where required), VAT information and policy coverage need checking before adoption. PRO ENERGY is not treated as a separate legal entity. No representation of an official KvK extract check is made.

The adopted version must be supplied correctly before contract formation. Posting this preview does not bind a visitor or amend existing agreements. The source does not silently promote a draft to active terms. After legal review, identity/policy confirmation and owner adoption, deliberately update status, version, PDFs and website together; retain a copy of every issued version and its delivery evidence.

## Reproduction

The content source is `legal/voorwaarden.mjs`; `legal/render.mjs` renders the same article text to website and print; `legal/forms.mjs` supplies the blank forms. `scripts/build-legal.mjs` integrates into the existing static build. No framework or runtime service was introduced.

```
node scripts/generate-legal-pdfs.mjs
npm run check
npm test
# With npm run dev running:
node scripts/preview-legal.mjs
```

PDF generation needs Playwright Chromium (or CHROMIUM_PATH). Checked-in PDFs make ordinary builds deterministic without a browser dependency at build time. Regenerate PDFs after changing legal content. PDFs contain selectable Dutch text, document titles, tags/bookmarks and page numbering. They are not certified PDF/UA documents. Local `pdfinfo`, `pdftotext` and rendered pages are used to verify page count, content and layout.

Only `dist` is deployed. The build copies public PDFs and CSS under assets and generates the legal HTML. Private notes, sources and print HTML under docs and legal/script sources remain outside dist. Existing Energy pages inherit the footer link automatically; homepage main content is unchanged. Playground noindex, CSP and production/domain separation are retained.

## Validation

Static build and Wrangler dry run passed. All 27 distinct Playwright checks passed across the full run and focused rerun: 26 passed in the full post-restart run; the new legal route check was corrected to wait for the anchor transition before refresh and passed with both legal checks on rerun. The initial 320px Dutch heading overflow was fixed with wrapping/hyphenation. A transient pre-restart GoodWe timeout did not recur. No existing page assertion was relaxed. New checks cover 320/390/768/1440px layout, axe accessibility, direct route/refresh, contents links, both real PDF responses/bytes/noindex and footer links on all eight existing pages.

PDF checks: 9 pages / 76 numbered clauses through 21.3; six single-page forms; selectable text and CONCEPT footer on every page. Representative print pages and final desktop/mobile website previews were visually inspected. Local review notes and print HTML are outside the deployment directory. The actual public files still require post-publication verification below.

## Public verification

Published source: `9145e3d99748e7c55c4823f267ed0bead33e2454`. All 81 public build files matched the Playground responses byte for byte after publication, including both PDFs and all existing pages. The legal route returned HTTP 200, CSP and `X-Robots-Tag: noindex, nofollow`. Observed deployment: `c2e47466-069e-4f58-8d0a-2c2cdab0244c`; version `6c7e27b0-d319-4bae-9058-1dfd8c06aa5f`. Publication completed through the existing Wrangler path; no redundant deployment was issued. GitHub Actions was still in progress when checked; local test outcomes are recorded above.
