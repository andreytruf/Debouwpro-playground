const form = document.querySelector("#offerte");
const fields = form.elements;
form.querySelector("fieldset").disabled = false;
form.querySelectorAll('button[type="submit"]').forEach((button) => {
  button.disabled = false;
});
const requestedProject = new URLSearchParams(location.search).get("project");
if (
  Array.from(fields.project.options).some(
    ({ value }) => value === requestedProject,
  )
) {
  fields.project.value = requestedProject;
}
for (const field of [fields.naam, fields.bericht]) {
  field.addEventListener("input", () => field.setCustomValidity(""));
}
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = Object.fromEntries(
    [...new FormData(form)].map(([name, value]) => [name, value.trim()]),
  );
  fields.naam.setCustomValidity(data.naam ? "" : "Vul uw naam in.");
  fields.bericht.setCustomValidity(
    data.bericht ? "" : "Beschrijf kort uw project.",
  );
  if (!form.reportValidity()) return;

  const subject = "Offerteaanvraag – " + data.project;
  const message = [
    "Goedendag DE BOUW PRO,",
    "",
    "Ik bespreek graag mijn project.",
    "",
    "Naam: " + data.naam,
    "E-mail: " + data.email,
    ...(data.telefoon ? ["Telefoon: " + data.telefoon] : []),
    "Type project: " + data.project,
    "",
    data.bericht,
  ].join("\n");
  const whatsapp = event.submitter?.value === "whatsapp";
  const status = document.querySelector("#status");
  status.textContent = whatsapp
    ? "Verstuur het voorbereide bericht in WhatsApp."
    : "Verstuur het voorbereide bericht in uw e-mailapp.";
  const body = encodeURIComponent(message);
  if (whatsapp) {
    window.location.assign("https://wa.me/31612350850?text=" + body);
  } else {
    window.location.href =
      "mailto:hallo@debouwpro.nl?subject=" +
      encodeURIComponent(subject) +
      "&body=" +
      body;
  }
});

const viewer = document.querySelector("#beeldviewer");
document.querySelectorAll("[data-gallery]").forEach((link) => {
  link.addEventListener("click", (event) => {
    if (
      event.ctrlKey ||
      event.metaKey ||
      event.shiftKey ||
      event.altKey ||
      !viewer.showModal
    )
      return;
    event.preventDefault();
    const photo = viewer.querySelector("img");
    photo.src = link.href;
    photo.alt = link.querySelector("img").alt;
    viewer.querySelector("#beeldtitel").textContent = Array.from(
      link.parentElement.querySelectorAll("figcaption span"),
      (part) => part.textContent,
    ).join(" · ");
    viewer.showModal();
  });
});
viewer.addEventListener("click", (event) => {
  if (event.target === viewer) viewer.close();
});

viewer.querySelector("button").addEventListener("click", () => viewer.close());

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
        safety = setTimeout(finish, 2100);
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
