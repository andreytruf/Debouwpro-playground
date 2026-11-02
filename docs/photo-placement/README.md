# Corrected owner photo placement and Whspr card

Scope: Playground only. The owner clarified that their two project images should replace temporary images on the corporate homepage, not appear in Energy.

- Reuse the existing `#inspiratie` gallery, preserving the section URL, heading and editorial layout. Green kitchen in Nieuwegein replaces the large temporary interior; roof-window bathroom in Houten replaces the smaller reference. Intro and captions now identify own renovation work, with the existing presentation edits disclosed. Natural landscape/portrait framing preserves the whole scene on mobile and desktop.
- Remove the renovation gallery from `/energy` and `/energy/peblar`. Restore the original Energy-project placeholder. No project imagery is added to Tesla or other brand pages.
- Whspr landing selection card now uses `whspr-garden-{480,800}.webp` (brochure p.7, embedded image xref 497). This is the actual Whspr in a garden beside a brick wall, labelled as a manufacturer example, not a company installation. Card cropping keeps the device visible. The Whspr page hero and social metadata still use its authentic product render.
- No additional downloads, AI generation or image modification was needed. Source and rights records remain in the Peblar/Whspr update registers. Selected image files remain local responsive WebP; originals and old reference assets are preserved.

## Checks and previews

The homepage preservation test now hashes its content outside the explicitly authorised gallery. The expected baseline is computed from the prior committed homepage with that gallery removed, so unrelated homepage changes remain detectable.

`node scripts/preview-photo-placement.mjs` captures homepage, Energy and Peblar on desktop/mobile plus homepage-gallery and Whspr-card crops. Older update screenshots are historical. The Peblar capture script has also been updated for the removed renovation section.

Validation: static build and Wrangler dry run passed. All 20 browser tests passed, including 320/390/768/1440 px, images, accessibility, keyboard/menu/CTA behavior and preservation outside the homepage gallery. Generated HTML confirms two project image tags on the homepage and no owner project-image references on any Energy page.


Final gallery alignment cleanup was additionally checked at all four homepage widths: 4/4 passed. Source commit `d0f90db9bc4bfff6a05db4dc6ff4611e94519db6` was pushed to GitHub. Active Playground deployment `20f4a51f-e3a6-4f8c-a880-94c62f770b3d`, version `12a8671f-599e-4dff-a118-51cf8b8ca205`, already serves the exact validated output; no redundant deployment was needed. All 61 public files matched the local build and retained noindex. Details: `live-checks.json`.

Homepage gallery: https://debouwpro-playground.andrey-57c.workers.dev/#inspiratie . Whspr card: https://debouwpro-playground.andrey-57c.workers.dev/energy/#selectie . Source CI: https://github.com/andreytruf/Debouwpro-playground/actions/runs/41547852192 .
