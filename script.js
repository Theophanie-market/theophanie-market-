// ==========================================================================
// THEOPHANIE MARKET LAKAY — v2.0
// ==========================================================================

document.addEventListener("DOMContentLoaded", () => {

    const header = document.getElementById("site-header");
    const menuToggle = document.getElementById("menu-toggle");
    const nav = document.getElementById("main-nav");

    // --- Sticky header shrink/shadow on scroll ---
    const onScroll = () => {
        if (window.scrollY > 40) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    // --- Mobile menu toggle ---
    if (menuToggle && nav) {
        menuToggle.addEventListener("click", () => {
            const isOpen = nav.classList.toggle("open");
            menuToggle.classList.toggle("open", isOpen);
            menuToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
        });

        // Close mobile menu after tapping a link
        nav.querySelectorAll("a").forEach((link) => {
            link.addEventListener("click", () => {
                nav.classList.remove("open");
                menuToggle.classList.remove("open");
                menuToggle.setAttribute("aria-expanded", "false");
            });
        });
    }

    // --- Smooth scroll for in-page anchors ---
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
            const targetId = this.getAttribute("href");
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    // --- Scroll reveal animation ---
    const revealTargets = document.querySelectorAll(
        ".stat, .card, .contact-card, .promo-text, .promo-badge"
    );
    revealTargets.forEach((el) => el.classList.add("reveal"));

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.15 }
    );

    revealTargets.forEach((el) => observer.observe(el));
});
