import { chromium } from "@playwright/test";
import { existsSync } from "node:fs";
import { documents, documentPrint } from "../legal/documents.mjs";
const b = await chromium.launch({
  executablePath:
    process.env.CHROMIUM_PATH ||
    (existsSync("/usr/bin/chromium") ? "/usr/bin/chromium" : undefined),
  args: ["--no-sandbox"],
});
try {
  for (const d of documents) {
    const p = await b.newPage();
    await p.setContent(documentPrint(d));
    await p.pdf({
      path: "." + d.pdf,
      format: "A4",
      preferCSSPageSize: true,
      printBackground: true,
      tagged: true,
      outline: true,
      displayHeaderFooter: true,
      headerTemplate: "<div></div>",
      footerTemplate: `<div style="font:8px Arial;width:100%;margin:0 18mm;display:flex;justify-content:space-between"><span>DE BOUW PRO · ${d.label} · CONCEPT v${d.version} · niet vastgesteld</span><span class="pageNumber"></span></div>`,
    });
    await p.close();
    console.log(d.pdf);
  }
} finally {
  await b.close();
}
