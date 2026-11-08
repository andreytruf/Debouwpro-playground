import { documents } from "./documents.mjs";
import { company } from "./voorwaarden.mjs";
import { esc } from "./render.mjs";
const date = "8 november 2026";
export const notices = [
  {
    slug: "privacy",
    title: "Privacyverklaring",
    heading: "Zorgvuldig met<br>jouw <em>gegevens.</em>",
    lead: "Wat we verwerken, waarom we dat doen en hoe je jouw privacyrechten gebruikt.",
    summary: "",
    sections: [],
    links: [
      [
        "Privacyrechten — Autoriteit Persoonsgegevens",
        "https://autoriteitpersoonsgegevens.nl/themas/basis-avg/privacyrechten-avg",
      ],
      ["Cloudflare privacy", "https://www.cloudflare.com/privacypolicy/"],
      ["Google privacy", "https://policies.google.com/privacy?hl=nl"],
      ["Dropbox privacy", "https://www.dropbox.com/privacy"],
    ],
  },
  {
    slug: "cookieverklaring",
    title: "Cookieverklaring",
    heading: "Helder over<br><em>cookies.</em>",
    lead: "Geen reclameprofielen. Geen onnodige toestemmingsvragen.",
    summary:
      "Gecontroleerde Playground-versie: " +
      date +
      ". In de huidige websitecode gebruiken we geen cookies, localStorage, sessionStorage of vergelijkbare opslag voor bezoekersmeting, advertenties of voorkeuren.",
    sections: [
      [
        "Wat cookies en vergelijkbare technieken doen",
        "Cookies zijn kleine gegevensbestanden die een website via je browser kan bewaren. Ook andere technieken, zoals localStorage, pixels en apparaatkenmerken, kunnen worden gebruikt om bezoekers te herkennen. De regels gaan daarom niet alleen over bestanden die cookie heten.",
      ],
      [
        "Wat deze versie gebruikt",
        "De navigatie, FAQ, filters en productkeuzes werken in het geheugen van de geopende pagina. Ze bewaren geen keuze in een cookie of browseropslag. Vernieuwen kan een selectie daarom terugzetten. Er zijn geen eigen analytische of marketingcookies ingesteld en er is geen cookie voor toestemming nodig omdat deze site geen keuze over tracking vraagt.",
        "Er zijn geen ingebouwde Google Maps-, YouTube-, sociale-media- of advertentiewidgets. Productafbeeldingen staan op dezelfde website. Gewone links naar fabrikanten laden hun website pas wanneer je die link volgt.",
      ],
      [
        "Technische levering via Cloudflare",
        "Cloudflare levert en beveiligt de website. Daarbij kunnen technische request-, netwerk- en beveiligingsgegevens worden verwerkt, ook zonder dat er een cookie op je apparaat staat. De hosting kan afhankelijk van beveiligingsinstellingen of een beveiligingscontrole technisch noodzakelijke cookies toepassen. Dat is niet hetzelfde als toestemming voor advertenties.",
        "In de beschreven gewone bezoekcontrole zijn geen door de site geplaatste cookies of browseropslag aangetroffen. Dit is een controle van die versie en die bezoekerssituatie, geen belofte dat de hosting bij elke toekomstige beveiligingscontrole nooit een technisch cookie kan gebruiken. Zie de Privacyverklaring voor gegevensverwerking en Cloudflare voor uitleg over eventuele beveiligingscookies.",
      ],
      [
        "Waarom er geen cookiebanner verschijnt",
        "Deze versie laadt geen dienst waarvoor wij eerst toestemming voor tracking moeten vragen. Een venster met Accepteren en Weigeren zou daarom nu geen daadwerkelijke trackingkeuze bieden. Je hoeft niet akkoord te gaan met privacyvoorwaarden om de pagina’s te lezen of ons te benaderen.",
        "Als later toestemmingsplichtige analytics, advertentiepixels of embeds worden toegevoegd, mogen die pas na een geldige keuze worden geladen. Weigeren en later intrekken moeten dan eenvoudig mogelijk zijn. Op dit moment staat zulke optionele tracking niet aan.",
      ],
      [
        "Browserinstellingen en externe links",
        "Via de instellingen van je browser kun je opgeslagen cookies bekijken en verwijderen of opslag blokkeren. De huidige websitekeuzes worden niet blijvend opgeslagen. Een gewone e-mail- of telefoonlink start je eigen app; het beleid van jouw e-mail- of telefoonaanbieder geldt voor die app.",
        "Deze verklaring beschrijft de Playground-website en niet automatisch allroundklusjesman.nl of andere bestaande websites. Die moeten afzonderlijk worden gecontroleerd. Een gewijzigd aanbod van tools of hostinginstellingen kan een nieuwe controle vereisen.",
      ],
      [
        "Vragen en wijzigingen",
        "Heb je vragen over cookies of merk je een onverwacht script of cookie op? Mail hello@debouwpro.nl en vermeld de pagina en je browser, zonder gevoelige gegevens mee te sturen. De datum bovenaan geeft aan op welke versie deze verklaring is gebaseerd.",
      ],
    ],
    links: [
      [
        "Cookiebeleid — Autoriteit Persoonsgegevens",
        "https://autoriteitpersoonsgegevens.nl/themas/internet-slimme-apparaten/cookies/cookies-en-uw-organisatie-zorg-voor-een-goed-beleid",
      ],
      [
        "Cloudflare cookies",
        "https://developers.cloudflare.com/fundamentals/reference/policies-compliances/cloudflare-cookies/",
      ],
    ],
  },
];
// Drive v0.1 remains the drafting source; audit annotations are explicitly separate.
const privacy = notices[0];
privacy.slug = "privacy";
privacy.title = "Privacyverklaring · CONCEPT v0.1";
privacy.summary =
  "CONCEPT — preview voor juridische en feitelijke controle. Gebaseerd op document 06 uit Google Drive, versie 0.1 van 8 november 2026. Geen definitief vastgestelde privacyverklaring. Open punten zijn hieronder herkenbaar aangegeven.";
privacy.sections = [];
for (const line of documents[5].content.split("\n").slice(3)) {
  if (/^\d+\. /.test(line))
    privacy.sections.push([line.replace(/^\d+\. /, "")]);
  else if (line.trim() && privacy.sections.length)
    privacy.sections.at(-1).push(line);
}
const notes = {
  0: "CONTROLEPUNT — De eigenaar bevestigde DE BOUW PRO, KvK 55345344 en het websiteadres Veldzigt 18, De Meern. De volledige juridische naam en rechtsvorm zijn nog niet onafhankelijk aan een actueel registeruittreksel getoetst. De open velden van de Drive-werkversie blijven daarom zichtbaar.",
  3: "FEITENCHECK — De eigenaar bevestigde Gmail, zakelijke e-mailadressen op debouwpro.nl, Dropbox en Google Drive. Google Workspace en Jortt zijn in de bron slechts voorbeelden en hier niet als gebruikte diensten bevestigd. Accounttype, rolverdeling, overeenkomsten en doorgiften vereisen nog controle.",
  4: "CONTROLEPUNT — Een optionele keuze voor beperkte AI-bewerking staat afzonderlijk in formulier 05. Welke AI-diensten, uploadinstellingen en bewaartermijnen daadwerkelijk voor projectbeelden zijn gebruikt, is nog niet geïnventariseerd. Er wordt geen bestaande toestemming of veilige externe verwerking verondersteld.",
  5: "CONTROLEPUNT — Werkelijke bewaartermijnen voor leads, foto’s, projectdossiers, mailboxen en backups zijn nog niet bevestigd. De placeholders hieronder zijn open werkpunten, geen reeds toegepaste termijnen.",
  6: "CONTROLEPUNT — De hieronder genoemde beperking van dossiertoegang en de overige accountmaatregelen zijn ontwerpuitgangspunten, niet technisch geverifieerd. Voor de website zijn HTTPS en beveiligingsheaders vastgesteld; MFA, maprechten, backups, verwerkersafspraken en internationale doorgiften moeten nog apart worden getoetst.",
};
for (const [i, text] of Object.entries(notes))
  privacy.sections[Number(i)].splice(1, 0, text);
privacy.sections.push([
  "Feitencheck van deze Playground",
  "De onderzochte website gebruikt lokale afbeeldingen en scripts, gewone e-mail- en telefoonlinks en geen ingebouwd aanvraagformulier, account of betaalmodule. E-mail wordt pas verzonden wanneer je dat in je eigen mailprogramma doet. De websitecode bevat geen analytics-tag, marketingpixel, iframe, cookie- of browseropslagfunctie. De browsercontrole en de cookie-pagina beschrijven de onderzochte bezoekerssituatie.",
  "Cloudflare verzorgt hosting en beveiliging. Voor levering en beveiliging kunnen onder andere IP-adres, tijdstip, opgevraagde URL, browser- en netwerkgegevens worden verwerkt. De publieke responses bevatten ook Cloudflare-netwerkfoutrapportageheaders. Dit is niet hetzelfde als een door DE BOUW PRO geïnstalleerde marketingtracker. Exacte logtermijnen en accountinstellingen zijn niet door deze frontendcontrole vastgesteld.",
  "Voor de fiscale basisadministratie geldt in het algemeen zeven jaar, en voor bepaalde btw-gegevens over onroerende zaken tien jaar. Dit is een wettelijk kader, geen bevestiging dat elke foto of lead zo lang wordt bewaard. Een categorisch bewaarschema moet nog worden vastgesteld.",
  "Cloudflare, Google en Dropbox zijn internationale aanbieders. Er wordt geen uitsluitend Nederlandse of Europese opslag beloofd. De concrete doorgiftegrond en de noodzakelijke waarborgen moeten per gebruikte dienst en account worden gecontroleerd.",
  "Voor een privacyverzoek kun je mailen naar hello@debouwpro.nl. In beginsel geldt een reactietermijn van één maand; een wettelijk toegestane verlenging wordt binnen die eerste maand toegelicht. Stuur niet uit jezelf een volledig identiteitsbewijs. Een websitebezoek of adviesvraag is geen toestemming voor marketing of portfolio-publicatie.",
]);
notices[1].slug = "cookies";
export function renderNotice(home, n) {
  const header = home
    .match(/<header\b[\s\S]*?<\/header>/)[0]
    .replaceAll('href="#', 'href="/#');
  const footer = home
    .match(/<footer\b[\s\S]*?<\/footer>/)[0]
    .replaceAll('href="#home"', 'href="/#home"');
  return `<!doctype html><html lang="nl-NL"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="robots" content="noindex, nofollow"><meta name="theme-color" content="#F2F0EC"><title>${n.title} | DE BOUW PRO</title><meta name="description" content="${esc(n.lead)}"><link rel="icon" href="/assets/favicon.svg" type="image/svg+xml"><link rel="stylesheet" href="/assets/styles.css"><link rel="stylesheet" href="/assets/legal.css"><script src="/assets/site.js" defer></script></head><body class="legal-page"><a class="skip-link" href="#main">Ga naar inhoud</a>${header}<main id="main"><section class="legal-hero shell"><nav class="legal-breadcrumb" aria-label="Broodkruimel"><a href="/">DE BOUW PRO</a><span aria-hidden="true">/</span><span>${n.title}</span></nav><p class="eyebrow">${n.title} · DE BOUW PRO</p><h1>${n.heading}</h1><p class="legal-lead">${n.lead}</p><div class="legal-status"><p>${esc(n.summary)}</p></div><p class="legal-meta">DE BOUW PRO · KvK ${company.kvk}<br>${esc(company.address)} · <a href="mailto:${company.email}">${company.email}</a></p></section><div class="shell legal-layout"><aside class="legal-index"><nav aria-label="Inhoud ${n.title.toLowerCase()}"><h2>Inhoud</h2><ol>${n.sections.map(([t], i) => `<li><a href="#onderdeel-${i + 1}">${esc(t)}</a></li>`).join("")}</ol></nav></aside><div class="legal-content">${n.sections.map(([t, ...ps], i) => `<section class="legal-article" id="onderdeel-${i + 1}"><h2><span>${String(i + 1).padStart(2, "0")}</span>${esc(t)}</h2>${ps.map((p) => `<p${/^(CONTROLEPUNT|FEITENCHECK)/.test(p) ? ' class="legal-review-note"' : ""}>${esc(p)}</p>`).join("")}</section>`).join("")}<section class="legal-article" id="contact"><h2>Meer informatie</h2><ul class="privacy-sources">${n.links.map(([t, u]) => `<li><a href="${u}" target="_blank" rel="noopener noreferrer">${esc(t)}<span class="sr-only"> (opent in een nieuw tabblad)</span></a></li>`).join("")}</ul><p><a href="/${n.slug === "privacy" ? "cookies" : "privacy"}">Lees ook de ${n.slug === "privacy" ? "Cookieverklaring" : "Privacyverklaring"}</a></p><a class="text-link" href="mailto:${company.email}?subject=Privacyvraag">Stel een privacyvraag <span aria-hidden="true">→</span></a></section></div></div></main>${footer}</body></html>`;
}
