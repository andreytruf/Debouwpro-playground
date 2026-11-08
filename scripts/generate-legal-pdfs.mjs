import { chromium } from "@playwright/test";
import { existsSync } from "node:fs";
import { mkdir, writeFile } from "node:fs/promises";
import { renderTermsPrint, pdfPath, formsPath } from "../legal/render.mjs";
import { renderFormsPrint } from "../legal/forms.mjs";
await mkdir("assets/legal", { recursive: true });
const browser = await chromium.launch({
  executablePath:
    process.env.CHROMIUM_PATH ||
    (existsSync("/usr/bin/chromium") ? "/usr/bin/chromium" : undefined),
  args: ["--no-sandbox"],
});
try {
  for (const [path, html] of [
    [pdfPath, renderTermsPrint()],
    [formsPath, renderFormsPrint()],
  ]) {
    const page = await browser.newPage();
    await page.setContent(html, { waitUntil: "load" });
    await page.emulateMedia({ media: "print" });
    await page.pdf({
      path: "." + path,
      format: "A4",
      printBackground: true,
      preferCSSPageSize: true,
      tagged: true,
      outline: true,
      displayHeaderFooter: true,
      headerTemplate: "<div></div>",
      footerTemplate:
        '<div style="font:8px Arial;width:100%;margin:0 18mm;display:flex;justify-content:space-between;color:#666"><span>DE BOUW PRO · CONCEPT 08-11-2026 · juridische controle vereist</span><span><span class="pageNumber"></span> / <span class="totalPages"></span></span></div>',
    });
    await writeFile(
      "docs/algemene-voorwaarden/" +
        (path === pdfPath
          ? "voorwaarden-print.html"
          : "projectformulieren-print.html"),
      html,
    );
    console.log(path);
    await page.close();
  }
} finally {
  await browser.close();
}
