// MOBILE MENU TOGGLE (si ou ajoute li pita)
const nav = document.querySelector("nav ul");

// Scroll effect header
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.style.background = "#06281e";
    } else {
        header.style.background = "#0b3d2e";
    }
});

// Smooth scroll pou bouton yo
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// WhatsApp bouton animation (ti efè)
const whatsappBtn = document.querySelector(".whatsapp-btn");

if (whatsappBtn) {
    setInterval(() => {
        whatsappBtn.style.transform = "scale(1.05)";
        setTimeout(() => {
            whatsappBtn.style.transform = "scale(1)";
        }, 300);
    }, 3000);
}
