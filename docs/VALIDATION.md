# V2 validation — 2026-10-29

- `npm run check`: static build and Wrangler 4.155.0 deploy dry run passed. No deployment performed.
- `npm test`: 7/7 Playwright tests passed in Chromium. Layout/image/browser-error checks and axe WCAG 2/2.1 A/AA rules passed at 320, 390, 768 and 1440 px. Menu, Escape/focus, section navigation, native FAQ, reduced motion, no-JavaScript rendering, CSP/noindex headers and 404/source isolation passed.
- Manual screenshot inspection: desktop 1440 × 1000 and mobile 390 × 844. Full-page captures included. Diagonal arrow glyphs were replaced with inline SVG to avoid missing font glyphs.
- Local performance observations are saved in `previews/local-metrics.json`. They measure localhost, without mobile network/CPU throttling. They are not production scores or a Core Web Vitals guarantee. No observed layout shift in those captures.
- Runtime uses local responsive WebP, system fonts, one stylesheet and a small deferred script. No third-party requests or dependencies run in the browser.
- Main/Test repositories, production website, DNS and email settings were not modified. Cloudflare was inspected read-only; no build trigger was created and V2 was not deployed.

Pending after playground publication: real-network Lighthouse measurements, physical iOS/Android and screen-reader QA; confirmation of company copy and replacement of reference photos with approved real work. The GitHub workflow is included for repeatable validation; its remote result must be checked separately.
