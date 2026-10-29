// Progressive enhancement: navigation and content also work without JavaScript.
const toggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#navigation");
const mobile = matchMedia("(max-width: 760px)");
toggle.hidden = false;
document.documentElement.classList.add("js-nav");
function closeMenu(returnFocus = false) {
  const wasOpen = toggle.getAttribute("aria-expanded") === "true";
  toggle.setAttribute("aria-expanded", "false");
  toggle.querySelector("span").textContent = "Menu";
  navigation.classList.remove("open");
  if (wasOpen && returnFocus) toggle.focus();
}
toggle.addEventListener("click", () => {
  const open = toggle.getAttribute("aria-expanded") !== "true";
  toggle.setAttribute("aria-expanded", String(open));
  toggle.querySelector("span").textContent = open ? "Sluiten" : "Menu";
  navigation.classList.toggle("open", open);
});
navigation.addEventListener("click", (event) => {
  const link = event.target.closest("a");
  if (!link || !mobile.matches) return;
  closeMenu();
  const target = document.querySelector(link.hash);
  if (target) {
    target.setAttribute("tabindex", "-1");
    target.focus({ preventScroll: true });
    target.addEventListener("blur", () => target.removeAttribute("tabindex"), {
      once: true,
    });
  }
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeMenu(true);
});
document.addEventListener("click", (event) => {
  if (!event.target.closest(".site-header")) closeMenu();
});
mobile.addEventListener("change", () => closeMenu(true));
if (
  "IntersectionObserver" in window &&
  !matchMedia("(prefers-reduced-motion: reduce)").matches
) {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.08 },
  );
  document.documentElement.classList.add("motion-ready");
  document
    .querySelectorAll(".reveal")
    .forEach((element) => observer.observe(element));
}
