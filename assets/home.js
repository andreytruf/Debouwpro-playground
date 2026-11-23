const form = document.querySelector("#offerte");
const fields = form.elements;
form.querySelector("fieldset").disabled = false;
form.querySelectorAll('button[type="submit"]').forEach((button) => {
  button.disabled = false;
});
document.querySelectorAll("[data-project]").forEach((link) => {
  link.addEventListener("click", () => {
    fields.project.value = link.dataset.project;
  });
});
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
