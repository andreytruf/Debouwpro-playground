# DE BOUW PRO — Instructions for Codex

## Brand
DE BOUW PRO is a premium full-service renovation and building contractor in Utrecht / De Meern, Netherlands. Main domain: debouwpro.nl. The company is NOT positioned as a small-job handyman. Services: complete home renovations, bathrooms, kitchens, electrical and plumbing work, drainage, underfloor heating, heat pumps, extensions, flat roofs, and project management.
Primary site language: Dutch (NL-NL). Public contacts: hello@debouwpro.nl, info@debouwpro.nl, +31 6 12350850.

## Design direction
Build a high-end, conversion-focused website with the quiet confidence and precision of premium design brands; original and distinctive, not a copy of Tesla, Apple, or any template. Prior B12 inspiration: warm off-white/ivory backgrounds, charcoal typography, restrained copper accents, large editorial architectural images, strong whitespace, subtle motion, crisp mobile UI. Prioritize accessibility, performance, SEO, visual hierarchy and real client inquiries. Avoid cheap construction clip art, generic exaggerated sales copy, and fake reviews.

## Content and truthfulness
Do not invent actual client projects, reviews, awards, certifications, affiliations, or statistics. Clearly label stock/reference images as inspiration until replaced by real portfolio photography. DE BOUW PRO is a separate brand from AllroundKlusjesman. Legacy De Bouw NL history can be mentioned only if useful and accurate. Avoid putting personal mailbox or sensitive data on public pages.

## Workflow
Maintain version-controlled source in GitHub. Keep README.md with setup/build/deploy instructions and update it as implementation evolves. Keep implementation readable and maintainable, responsive and WCAG-conscious. Prefer minimal dependencies and Cloudflare-compatible architecture. Do not change production domain DNS, email configuration, payment/billing, or publish to debouwpro.nl without explicit user approval. Tests, screenshots/previews, and build checks should accompany changes. Treat this repo's role as authoritative.

## Repositories
- Debouwpro-main: production-ready, reviewed code only.
- Debouwpro-test: staging for complete-site QA before promoting to main.
- Debouwpro-playground: freely experiment with layouts, interactions, and infrastructure. Current live demo is a Cloudflare Worker at https://debouwpro-playground.andrey-57c.workers.dev .

## Immediate project
Use the existing B12-inspired design direction for a polished Dutch landing page. Playground currently has a first HTML prototype in index.html. Critically review it and improve typography, layout, mobile navigation, image choice, accessibility, SEO and semantics. No claim that reference photography shows DE BOUW PRO projects. Integrate GitHub->Cloudflare deployment only after checking existing infrastructure and minimizing disruption.

## Repository-specific role
Experimental repository. Iterate on the existing index.html prototype, do not deploy to main website.
