# Peblar catalogue refinement — 6 November 2026

Scope: Debouwpro-playground only. Corporate homepage and other brand page compositions are preserved. No production domain, DNS, Main or Test changes. Current manufacturer pages were read before updating the range.

## Verified range

Official sources: https://peblar.com/chargers/home , https://peblar.com/chargers/business , https://peblar.com/chargers/dual .

Three product families, not nine independent product families or a claimed exhaustive SKU count:

- Home: fixed Type 2 cable, 5 m or 7.5 m. 3.7 kW single-phase / 11 kW three-phase. Indicative energy meter; Wi-Fi/Ethernet; OCPP 1.6-J.
- Business: fixed cable 5 m / 7.5 m, Type 2 socket, or socket with shutter. 7.4 kW single-phase / 22 kW three-phase. MID metering and Eichrecht variant; Wi-Fi/Ethernet/mobile-network back office connectivity. Cable length choices are not depicted as invented different hardware.
- Dual: DUAL-T2-M, DUAL-T2-E (Eichrecht), DUAL-T2S-M (Shutter). Two sockets, up to 1 × 22 kW or 2 × 11 kW on three phases; other phase configurations are installation-dependent. Wi-Fi 6, 2× Ethernet, LTE Cat 1. Future card/PIN payment, later protocol capabilities and future accessories are not promised as currently available.

Selectors expose 2 Home, 4 Business connection/cable choices, and 3 Dual variants. Business Eichrecht is mentioned as a metering variant, not mixed up with cable length. These controls express the inquiry preference, not live inventory, pricing or a compatibility guarantee. Selected options are carried into the mailto inquiry subject. All option names and inquiry links remain available without JavaScript.

## Visual direction and imagery

Manufacturer-inspired hierarchy: large genuine product images, distinct family sections, compact option buttons, a contextual Dual photo, a comparison table, and clear technical/contact content within the established DE BOUW PRO identity. No manufacturer review, sales numbers or third-party installer testimonials are copied.

Existing owner-supplied official media-pack imagery is reused. Fixed-cable housing renders are supplied in the manufacturer's shared Home/Business cable pack; socket render is the Business socket version. Dual variants reuse the same model-family scene rather than inventing visually different housings. Existing image provenance remains in `docs/peblar-update/README.md`.

New contextual photo: https://peblar.com/hubfs/Dual%20charger%20page/Parking%20Garage%20with%20man%20edited.png , discovered on the current Dual product page. © Peblar. Original 1920×1090; responsive local WebP derivatives `assets/energy/photo/peblar-dual-parking-{720,1600}.webp`, preserving proportions. Owner explicitly authorised manufacturer imagery and requested removal of public provenance/AI disclaimer captions on the Peblar page. Provenance is kept here; no open licence or official corporate partnership is asserted. No AI imagery is used on the Peblar page or card.

Public image provenance captions are removed from Peblar and its landing card. Technical conditions remain where they help choose a product. Other brands' captions are outside this change.

## Validation

Use `npm run check`, `npm test` and `node scripts/preview-peblar-range.mjs` with the local dev server running. Captures include Energy/Peblar desktop and mobile, plus comparison-table crops.

Validation: `npm run check` passed (static build and Wrangler dry run). All 22 browser tests passed, including all seven Energy routes, responsive widths 320/390/768/1440, automated WCAG AA checks, image decoding, local links, keyboard model selection, inquiry subjects and no-JavaScript access to the complete range. The homepage preservation test passed. Final screenshots include family sections; mobile comparison has a swipe hint.
