# GoodWe curated residential systems — 6 November 2026

Scope: Debouwpro-playground only. Preserve the corporate homepage, other Energy brand compositions, noindex and static HTML/CSS/JS/Cloudflare architecture. No Main, Test, production, DNS or Canva changes.

## Primary sources and verification

- https://en.goodwe.com/es-g2 : ES G2 single-phase models include GW3000-ES-20, 3000 VA grid output. GW3600 variants list 3680 VA, so the compact example uses the unambiguous 3 kW-class model.
- https://en.goodwe.com/et-g2 : ET G2 is 6–15 kW, not a 5 kW model. Exact examples use GW6000-ET-20 and GW10K-ET-20.
- https://en.goodwe.com/lynx-u-g3 : LXU 5.0-30, 5 kWh usable, 51.2 V, LFP, IP65, wall/floor placement. Do not mix different A/U battery models.
- https://en.goodwe.com/lynx-d-g2 : model-specific nominal/usable capacities: 5.12/5, 6/5.8, 8.32/8 and 9/8.7 kWh. Page also lists G20/G21 variations with different operating conditions; they are not described as universally interchangeable. Examples use identical GW5.1-BAT-D-G20 modules only.
- https://en.goodwe.com/hca-g2 : 7 kW one phase, 11 or 22 kW three phase, SEMS+ monitoring and solar/dynamic-load-control features requiring the suitable installation and settings.
- https://emea.goodwe.com/Ftp/EN/Downloads/User%20Manual/GW_Battery%20Compatibility%20Overview-EMEA_EN.pdf : current EMEA V029.1, 22 October 2026. Page 1 lists U-30 with ES G2 and ARM ≥13. Page 3 lists D G2 GW5.1-BAT-D-G20 with ET G2 and ARM ≥18. This was read through the web document tool; several old/global PDF URLs returned 404 to curl, so they are not presented as extra verification or redistributed.
- https://en.goodwe.com/Ftp/EN/Downloads/User%20Manual/GW_Compatibility-list-of-GoodWe-EV-Chargers-and-Inverters-EN.pdf : version 2, 20 October 2026. Page 2 lists GW3000-ES-20 (ARM 10.427+) and ET G2 6/10 kW models (ARM 13.436+) for EV pairing. Battery and EV firmware conditions are separate; exact required software is verified at installation, not inferred by treating version formats as interchangeable.
- https://en.goodwe.com/ecosmart-home : manufacturer whole-home visual language and system overview. The new page uses original Dutch explanatory copy and an original HTML/CSS principle diagram rather than copying a wiring diagram or brochure text.

## Example sets — not final engineering or live inventory

| Example | PV arithmetic only | Inverter | Usable storage |
| --- | --- | --- | --- |
| Compact | 8 × 450 Wp = 3.60 kWp | GW3000-ES-20, 3 kW, one phase | 1 × LXU 5.0-30 = 5 kWh |
| Balans | 14 × 450 Wp = 6.30 kWp | GW6000-ET-20, 6 kW, three phases | 2 × GW5.1-BAT-D-G20 = 10 kWh usable (10.24 nominal) |
| Ruimte | 24 × 450 Wp = 10.80 kWp | GW10K-ET-20, 10 kW, three phases | 3 × GW5.1-BAT-D-G20 = 15 kWh usable (15.36 nominal) |

450 Wp is an explicit calculation assumption, not a selected panel model or a claim that GoodWe supplies those panels. Actual strings, minimum/maximum DC voltage, shading, roof, generation, battery output power and grid capacity must be designed. These are advice examples with no fixed price, yield, savings or guaranteed payback. kWp, kW and kWh are explained separately. The offered scope, accessories and suitability require an individual proposal.

An optional HCA G2 checkbox carries the charging request into that package's inquiry, without claiming a preinstalled charger, automatic universal integration or a choice of charger power made solely from inverter power. Each package remains independently selectable. Without JavaScript all package contents and inquiry links remain accessible, while unenhanced add-on checkboxes remain hidden.

## Images and visual direction

All current GoodWe page and Energy-card imagery uses manufacturer product/media assets. The old AI scene remains preserved as an unused historical asset, not referenced by live HTML. No new AI generation was needed. Product geometry, labels and transparency are preserved; images are resized to local WebP at 480/900 px (hardware) or 720/1600 px (hero). Copyright remains GoodWe. User requested manufacturer communications material for this page; no open image licence, official company partnership or completed DE BOUW PRO installation is claimed. Full brochures/PDFs are not redistributed.

The layout uses warm white, charcoal and a restrained readable red (#B51F36) inspired by GoodWe within the existing DE BOUW PRO header/footer and copper corporate wordmark. It is not a claim of official GoodWe identity ownership. No manufacturer awards, deployment figures, testimonials or guarantees are copied.

Asset sources (all on en.goodwe.com):
- `goodwe-hero`: https://en.goodwe.com/Public/Uploads/uploadfile/images/20230811/ESH_day_pc-347(convert.io).webp
- `goodwe-u`: https://en.goodwe.com/Public/Uploads/uploadfile/images/20241213/20241213-111922.png
- `goodwe-dg2`: https://en.goodwe.com/Public/Uploads/uploadfile/images/20260512/1020_1300(1).png
- `goodwe-et`: https://en.goodwe.com/Public/Uploads/uploadfile/images/20250529/ETG2-1.png
- `goodwe-hca`: https://en.goodwe.com/Public/Uploads/uploadfile/images/20241206/20241206-151632.png
- `goodwe-es`: https://en.goodwe.com/Public/Uploads/uploadfile/images/20230726/ESG2Series(convert.io).webp

## Checks

Run `npm run check`, `npm test`, then `node scripts/preview-goodwe.mjs` against the local dev server. Previews cover landing and GoodWe desktop/mobile plus package, battery, charging and flow crops. Additional functional tests verify package-specific optional charging and no-JavaScript content.

Validation: static build and Wrangler dry run passed. All 24 browser tests passed after adjusting the shared dark-section accent for WCAG contrast. Tests cover 320/390/768/1440 px, direct routes/refresh, all images and local links, automated WCAG AA, independent package charging choices and their inquiry subjects, no-JavaScript fallback and preservation of the corporate homepage outside its approved project gallery. All GoodWe live image references now use manufacturer assets. Family renders illustrate the series; the text defines exact example models and module quantities.
