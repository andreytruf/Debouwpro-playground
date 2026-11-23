# DE BOUW PRO — Test/Main handoff: mandatory contacts

Before transferring any Playground changes, read AGENTS.md and the relevant current source/history. The owner-confirmed canonical email addresses are **hallo@debouwpro.nl** and **info@debouwpro.nl**. The first uses Dutch **hallo**, with **a**, regardless of speech recognition. Apply this in code, configuration, documents, PDFs and any subsequent handoff. Do not provision or redirect mailboxes merely to correct copy.

The 23 November 2026 contact correction updates Playground and the three affected Drive legal masters. Contracts remain CONCEPT; the legal working source is the existing Drive folder and separate B2C/B2B/ZZP/Energy structure. See docs/contact-correction/README.md and docs/privacy-cookies/RECONCILIATION.md. Older conversations, screenshots and Git revisions are historical evidence, not the authority for current contact spelling.

This chat remains Playground-only for website work. Main/Test transfers and production publication require their separately authorised workflow; no permission to change DNS or email infrastructure is inferred.

## Nested-route asset issue found during Playground review

The staging-derived homepage had relative `assets/styles.css`, `assets/site.js` and favicon paths. Reusing that head under `/graafwerk/` and `/vloerverwarming/` produced missing assets despite HTTP 200 for the page itself. Playground now uses root-absolute asset paths and tests actual CSS/JS loading and mobile menu behavior (`tests/service-assets.spec.mjs`). Apply the equivalent fix in Test through its authorised workflow; this chat did not mutate Test. Owner now prefers the original warm hero, with other V3 sections retained; the light hero is preserved as an optional comparison.
