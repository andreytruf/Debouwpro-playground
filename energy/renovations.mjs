// Owner-supplied renovation photos: never present these as Energy installations.
export function renovations() {
  return `<section class="section shell renovation-preview" id="renovaties" aria-labelledby="renovation-title">
    <div class="section-heading"><div><p class="eyebrow">DE BOUW PRO / Uit eigen werk</p><h2 id="renovation-title">Dezelfde aandacht.<br>Ook <em>binnen.</em></h2></div><p>Van keuken en badkamer tot de techniek erachter. Deze foto's tonen onze renovatieprojecten, geen laadpunten of andere Energy-installaties. De foto's zijn bewerkt voor licht en presentatie.</p></div>
    <div class="renovation-grid">
      <figure><img src="/assets/projects/nieuwegein-keuken-1280.webp" srcset="/assets/projects/nieuwegein-keuken-640.webp 640w, /assets/projects/nieuwegein-keuken-1280.webp 1280w" sizes="(max-width:760px) calc(100vw - 40px), 60vw" width="1280" height="853" loading="lazy" decoding="async" alt="Eigen keukenrenovatie in Nieuwegein met donkergroene fronten en warme werkbladverlichting"><figcaption><span>01 / Keuken · Nieuwegein</span><span>Eigen renovatieproject · bewerkte foto</span></figcaption></figure>
      <figure><img src="/assets/projects/houten-badkamer-1280.webp" srcset="/assets/projects/houten-badkamer-640.webp 640w, /assets/projects/houten-badkamer-1280.webp 1086w" sizes="(max-width:760px) calc(100vw - 40px), 35vw" width="1086" height="1448" loading="lazy" decoding="async" alt="Eigen badkamerrenovatie in Houten met glazen douchewand en daglicht via een dakraam"><figcaption><span>02 / Badkamer · Houten</span><span>Eigen renovatieproject · bewerkte foto</span></figcaption></figure>
    </div><a class="text-link" href="/#contact">Bespreek je renovatieplannen <svg class="arrow" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 19 19 5M5 5h14v14"/></svg></a>
  </section>`;
}
