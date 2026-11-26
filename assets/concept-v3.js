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

// Start only after the actual kitchen image has decoded. Content stays visible
// without JS; reduced motion and keyboard focus bypass the entrance sequence.
const hero = document.querySelector("[data-hero-sequence]");
if (hero) {
  const reduced = matchMedia("(prefers-reduced-motion: reduce)");
  const photo = hero.querySelector("picture img");
  if (photo && !reduced.matches && !document.hidden) {
    let finished = false;
    let safety;
    const finish = () => {
      finished = true;
      clearTimeout(safety);
      hero.classList.remove("hero-sequence-pending", "hero-sequence-playing");
    };
    hero.classList.add("hero-sequence-pending");
    hero.addEventListener("focusin", finish, { once: true });
    reduced.addEventListener("change", (event) => {
      if (event.matches) finish();
    });
    // A failed or slow image must never leave the introduction hidden.
    safety = setTimeout(finish, 3500);
    photo.decode().then(() => {
      if (finished || reduced.matches || document.hidden) return finish();
      clearTimeout(safety);
      requestAnimationFrame(() => {
        if (finished) return;
        hero.classList.add("hero-sequence-playing");
        safety = setTimeout(finish, 1200);
      });
    }, finish);
    hero.addEventListener("animationend", (event) => {
      if (event.animationName === "hero-copy-arrive") finish();
    });
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) finish();
    });
  }
}
