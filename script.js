// Update this number if your business WhatsApp number changes.
// Use country code without +, spaces, or punctuation.
const WHATSAPP_NUMBER = "918433209827";

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.textContent = isOpen ? "×" : "☰";
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

const floatingWhatsapp = document.getElementById("floatingWhatsapp");
floatingWhatsapp.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello Corbett Wild Trails! I would like to enquire about a Jim Corbett trip.")}`;

document.getElementById("enquiryForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const name = form.get("guestName").trim();
  const date = form.get("visitDate");
  const guests = form.get("guests");
  const interest = form.get("interest");
  const message = form.get("message").trim();

  const text = [
    "Hello Corbett Wild Trails! I'd like to enquire about a trip.",
    "",
    `Name: ${name}`,
    `Preferred date: ${date}`,
    `Travellers: ${guests}`,
    `Interested in: ${interest}`,
    message ? `Additional details: ${message}` : ""
  ].filter(Boolean).join("\n");

  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
});
