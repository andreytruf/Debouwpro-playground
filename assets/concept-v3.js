// Session-only preview control: never write cookies or browser storage.
const serviceLayout = document.querySelector("[data-service-layout]");
const serviceControls = document.querySelector(".service-view-controls");
if (serviceLayout && serviceControls) {
  serviceControls.hidden = false;
  serviceControls.addEventListener("click", (event) => {
    const button = event.target.closest("[data-service-view]");
    if (!button) return;
    serviceLayout.dataset.serviceLayout = button.dataset.serviceView;
    serviceControls
      .querySelectorAll("button")
      .forEach((item) =>
        item.setAttribute("aria-pressed", String(item === button)),
      );
  });
}
