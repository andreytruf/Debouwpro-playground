# Read-only domain review — 26 November 2026

Scope: debouwpro.nl, no DNS/domain/mail mutations performed. Playground only is authorised for publication.

Cloudflare zone is pending. Assigned NS: liberty.ns.cloudflare.com and wesley.ns.cloudflare.com. Public delegation still points to docks06.rzone.de and shades06.rzone.de. No Worker custom domains attached.

Public A/AAAA, www CNAME, Google MX, SPF, Google DKIM and DMARC match the imported Cloudflare records. This is a targeted check, not a full authoritative-zone export comparison.

Public DNSSEC DS exists (key tag 1321, algorithm 8, digest type 2). Before moving nameservers, disable DNSSEC at the current provider and verify removal of the old parent DS. Do not change NS before that verification.

Cloudflare autoconfig CNAME points to autoconfigure.strato.de and is currently proxied. Set it to DNS only before activation; this requires separately authorised DNS work. Confirm the intended web proxy/SSL configuration and complete zone inventory first. Preserve Google mail settings. Moving nameservers does not publish the Playground to the production domain.

After checks and owner-authorised NS change at STRATO: verify delegation/Cloudflare active status, existing website, TLS and mail delivery; then enable Cloudflare DNSSEC with its new DS. Production content migration remains a separate release.
