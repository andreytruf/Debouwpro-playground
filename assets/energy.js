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
