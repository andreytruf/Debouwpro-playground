// Filters enhance the complete, server-rendered selection; without JS every card stays visible.
const filters = document.querySelector(".energy-filters");
if (filters) {
  const cards = [...document.querySelectorAll(".energy-card")];
  const status = document.querySelector(".filter-status");
  function selectCategory(value) {
    let count = 0;
    for (const card of cards) {
      card.hidden =
        value !== "alles" && !card.dataset.category.split(" ").includes(value);
      if (!card.hidden) count++;
    }
    filters
      .querySelectorAll("button")
      .forEach((button) =>
        button.setAttribute(
          "aria-pressed",
          String(button.dataset.filter === value),
        ),
      );
    status.textContent = `${count} ${count === 1 ? "oplossing" : "oplossingen"} in deze selectie`;
  }
  filters.hidden = false;
  filters.addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (button) selectCategory(button.dataset.filter);
  });
  document
    .querySelectorAll("[data-category-link]")
    .forEach((link) =>
      link.addEventListener("click", () =>
        selectCategory(link.dataset.categoryLink),
      ),
    );
}

// Product explorers explain supported options, without pretending to be a sizing calculator.
const explorer = document.querySelector("[data-module-explorer]");
if (explorer) {
  explorer.addEventListener("click", (event) => {
    const button = event.target.closest("[data-modules]");
    if (!button) return;
    const count = Number(button.dataset.modules);
    explorer
      .querySelectorAll("[data-modules]")
      .forEach((item) =>
        item.setAttribute("aria-pressed", String(item === button)),
      );
    explorer
      .querySelectorAll("[data-layer]")
      .forEach((layer) =>
        layer.classList.toggle(
          "is-active",
          Number(layer.dataset.layer) <= count,
        ),
      );
    explorer.querySelector(".module-result").textContent =
      `${count} ${count === 1 ? "module" : "modules"} · ${count * 5} kWh voorbeeldcapaciteit`;
  });
}

const modePicker = document.querySelector("[data-mode-picker]");
if (modePicker) {
  function showMode(value) {
    modePicker
      .querySelectorAll("[data-mode]")
      .forEach((button) =>
        button.setAttribute(
          "aria-pressed",
          String(button.dataset.mode === value),
        ),
      );
    modePicker
      .querySelectorAll("[data-mode-panel]")
      .forEach((panel) => (panel.hidden = panel.dataset.modePanel !== value));
  }
  showMode("normaal");
  modePicker.querySelector(".mode-copy").setAttribute("aria-live", "polite");
  modePicker.addEventListener("click", (event) => {
    const button = event.target.closest("[data-mode]");
    if (button) showMode(button.dataset.mode);
  });
}

const productImage = document.querySelector("[data-product-image]");
if (productImage) {
  document
    .querySelector(".hardware-angle-buttons")
    .addEventListener("click", (event) => {
      const button = event.target.closest("[data-product-view]");
      if (!button) return;
      const side = button.dataset.productView === "side";
      productImage.src = `/assets/energy/photo/peblar-${side ? "side" : "front"}.webp`;
      productImage.alt = `Officiële Peblar Home productrender, ${side ? "zijaanzicht" : "vooraanzicht"}`;
      document
        .querySelectorAll("[data-product-view]")
        .forEach((item) =>
          item.setAttribute("aria-pressed", String(item === button)),
        );
    });
}

// Model options update the selected execution and the matching inquiry subject.
for (const root of document.querySelectorAll("[data-peblar-config]")) {
  const group = root.querySelector(".peblar-variant-buttons");
  if (!group) continue;
  group.hidden = false;
  root.querySelector(".variant-available").hidden = true;
  group.addEventListener("click", (event) => {
    const button = event.target.closest("[data-peblar-variant]");
    if (!button) return;
    for (const item of group.querySelectorAll("button"))
      item.setAttribute("aria-pressed", String(item === button));
    const option = button.dataset.peblarVariant;
    const model = root.dataset.peblarConfig;
    root.querySelector(".peblar-selected").textContent =
      `Peblar ${model} · ${option}`;
    root.querySelector("[data-variant-advice]").href =
      `mailto:hello@debouwpro.nl?subject=${encodeURIComponent(`Peblar ${model} — ${option}`)}`;
    const image = root.querySelector("[data-variant-image]");
    if (image && button.dataset.variantImageFile) {
      image.src = "/assets/energy/photo/" + button.dataset.variantImageFile;
      image.alt = `Peblar ${model} ${option.startsWith("Kabel") ? "met vaste laadkabel" : "in socket-uitvoering"}`;
    }
  });
}
