# GoodWe — individual products first, existing-system storage second

Scope: Debouwpro-playground only. This refines the existing GoodWe landing; no other brand page, production domain, DNS, Main/Test repository or Canva changes.

## Landing composition

The opening now shows real GoodWe inverter, battery and charger images with three direct category links. Dutch positioning: “Los kiezen. Slim combineren.” The copy explicitly offers one addition to an existing installation or a complete system. Two starting actions lead to complete system examples or existing-system advice. Category navigation includes retrofit. The original three system examples remain intact.

Individual inverter cards cover ES G2 (one phase, low-voltage battery context) and ET G2 (three phases, high-voltage battery context). Batteries and charging now also have their own DE BOUW PRO inquiry links, in addition to manufacturer links. The manufacturer EcoSmart architecture image moves below the product/charging content, loads lazily, and is not the initial landing visual. Product images above the fold are prioritised.

## Verified retrofit solution

Primary Dutch source: https://nl.goodwe.com/sbp-g2 . EMEA source: https://emea.goodwe.com/sbp-g2 . GoodWe describes SBP G2 as a retrofit battery inverter installed on the AC side of the existing grid-connected PV inverter, using compatible low-voltage storage. Product range: 3.6–6 kW, single-phase. It is not a universal passive adapter or a firmware unlock for every old inverter.

Battery compatibility checked against the current EMEA overview, V029.1 dated 22 October 2026: https://emea.goodwe.com/Ftp/EN/Downloads/User%20Manual/GW_Battery%20Compatibility%20Overview-EMEA_EN.pdf . Page 1 lists LX U5.0-30 with SBP G2; notes require ARM firmware 13 or above. The product page uses LXU 5.0-30 spelling for the same U G3 family. Lynx D G2 high-voltage modules are not described as directly compatible with this low-voltage retrofit.

The page distinguishes:

- A suitable existing hybrid GoodWe may allow direct connection to an approved battery, after checking model and firmware.
- An existing ordinary grid-connected PV inverter may be retained with a separately designed AC-coupled battery system such as SBP G2 + suitable Lynx U G3. The original PV inverter and the additional battery inverter have different roles.

SBP G2 itself remains single-phase even where existing PV generation is three-phase. Suitability, metering, net configuration, backup loads/protection and installation are individually designed. No claim of universal compatibility, automatic whole-home backup, fixed retrofit price or instant upgrade is made. The inquiry requests model/year and optionally a type-plate photo, rather than pretending the brand name alone determines compatibility.

EH/Battery Ready activation was researched but not advertised as a general adapter route; some older series have model-specific activation options, which require a separate model check. No unverified unlock, SKU or licence is offered.

## Imagery and principle diagram

New SBP G2 render: https://emea.goodwe.com/Public/Uploads/uploadfile5/images/20251208/SBPG2.png , found on the EMEA SBP G2 page. Manufacturer © GoodWe, used for product identification in the owner-authorised context. Original 1020×1300, locally converted with proportions/transparency preserved to `assets/energy/photo/goodwe-sbp-{480,900}.webp`. The paired Lynx U G3 render and all other product images were already sourced and documented in `docs/goodwe-systems/README.md`. No AI imagery or invented equipment was added.

The retrofit infographic is original HTML/CSS, showing retained PV generation/old inverter/AC side and a separate battery-inverter/storage branch. It is labelled as a principle overview, not a wiring or protection design.

## Reproduction

`npm run check` and `npm test`; `node scripts/preview-goodwe-retrofit.mjs` with the local dev server running captures desktop/mobile Energy and GoodWe plus entry, individual inverter, retrofit, package, battery, charger and flow sections.

## Validation

All 25 Playwright tests passed, including direct routes, mobile layout, navigation, accessibility and new product/retrofit links. `npm run check` passed (static build and Wrangler dry run). Desktop/mobile screenshots were captured under `previews/`. A stale local development asset index initially missed the new SBP image; restarting the local server resolved it before the successful full test run. Playground noindex is retained.
