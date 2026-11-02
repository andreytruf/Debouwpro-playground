# Peblar and renovation photo preview

Scope: Debouwpro-playground only. Preserve noindex and the current static architecture. No DNS, production, Main or Test changes.

## Image provenance

All new source material was supplied by the owner via Dropbox; only selected optimised WebP derivatives are published. Manufacturer images remain © Peblar and identify equipment; no official corporate partnership is claimed. The same manufacturer media context described in `docs/energy-v3/IMAGE-SOURCES.md` applies. Archives and brochures are not redistributed.

| Public derivative | Supplied source | Treatment |
| --- | --- | --- |
| `assets/energy/photo/peblar-{720,1600}.webp` | `Peblar brand images.zip` → `Peblar Images/Peblar 16.jpeg` | Resize/convert; authentic manufacturer scene, not our installation. Replaces the former AI carport on the Peblar page and its Energy card. |
| `peblar-detail-{640,1200}.webp` | Same archive → `Peblar 14.jpeg` | Resize/convert; manufacturer detail photo. |
| `peblar-business.webp` | `Peblar Home and Business socket version.zip` → `Peblar_front-side_socket_transparant.png` | Preserve aspect ratio and transparency. Labelled Business socket variant, not Home. |
| `peblar-dual.webp` | `Dual product images.zip` → `DC_2.png` | Resize/convert; manufacturer's Dual scene, not our installation. |
| `assets/projects/nieuwegein-keuken-{640,1280}.webp` | Owner project folder Nieuwegein → `Donkergroene keuken met kookplaat en tuinzicht.png` | Owner identifies this as a real project photo edited for lighting/presentation. No further generative changes. |
| `assets/projects/houten-badkamer-{640,1280}.webp` | Owner project folder Houten → `Moderne badkamer met dakraam.png` | Same; actual larger derivative is 1086 px wide to avoid upscaling. |

The two project images are captioned as edited renovation photography, explicitly not Energy installations. Public filenames and captions omit client surnames, addresses and private Dropbox links. Source originals remain in Dropbox. No claim about energy savings, performance, reviews or completion dates is added.

## Product verification

Home/Business selection is checked against the owner-supplied Dutch Peblar product brochure (© 2026), pp. 3–5. Home: 3.7/11 kW and fixed 5/7.5 m Type 2 cable; Business: 7.4/22 kW with socket/shutter/cable variants and MID metering. Connectivity, accessories, model and firmware remain configuration-dependent. Dual has two Type 2 sockets; variant and protection details checked against specification sheet `6004-2601-9602`. Do not describe it as two unrestricted simultaneous 22 kW outputs. Future firmware features in the sheets are not advertised as available.

A short training statement is supported by the supplied personal completion certificate dated 3 May 2026 for the Peblar Benelux course. It does not claim company partnership, warranty authorisation or accreditation beyond that training. The certificate itself is not published.

## Verification

Screenshots: `previews/` contains landing/Peblar hero and full-page desktop/mobile captures, model range and renovation section crops. Reproduce with `node scripts/preview-peblar.mjs` after `npm run dev`.

`npm run check`: successful static build and Wrangler dry run. `npm test`: 20/20 passed. Direct routes, refresh, decoding all images, local links, responsive widths 320/390/768/1440, axe WCAG AA checks, keyboard interaction, no-JavaScript fallbacks and noindex verified. The existing homepage main-content hash is unchanged. A stale long-running local Wrangler asset index initially returned 404 for newly added files; restarting the development server resolved it before validation.

The last card image alignment / SVG arrow cleanup is additionally covered by targeted landing and Peblar responsive/accessibility checks. Targeted final checks: 2/2 passed. All source and selected images are committed to the Playground repository only. Deployment and public verification are recorded after publication.
