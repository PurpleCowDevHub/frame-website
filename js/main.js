document.addEventListener("DOMContentLoaded", () => {
    // --- Slider de navegación ---
    const nav = document.querySelector(".main-nav");
    const navBtns = document.querySelectorAll(".nav-btn");

    if (nav && navBtns.length > 0) {
        navBtns.forEach((btn, index) => {
            btn.addEventListener("click", () => {
                nav.dataset.active = String(index + 1);
            });
        });
    }

    // --- Theme toggle ---
    const themeToggle = document.getElementById("themeToggle");
    const themeBtns = document.querySelectorAll(".theme-btn");
    const root = document.documentElement;

    const applyTheme = (theme) => {
        themeToggle.dataset.theme = theme;
        if (theme === "light") {
            root.style.setProperty("--color-bg",      "#f4f6fb");
            root.style.setProperty("--color-bg-alt",  "#eaecf2");
            root.style.setProperty("--color-surface", "#ffffff");
            root.style.setProperty("--color-text",    "#0a0b0f");
            root.style.setProperty("--color-text-muted", "#5a6270");
        } else {
            root.style.setProperty("--color-bg",      "#0a0b0f");
            root.style.setProperty("--color-bg-alt",  "#0f1118");
            root.style.setProperty("--color-surface", "#141722");
            root.style.setProperty("--color-text",    "#f4f6fb");
            root.style.setProperty("--color-text-muted", "#9aa3b2");
        }
    };

    if (themeToggle) {
        themeBtns.forEach((btn) => {
            btn.addEventListener("click", () => {
                applyTheme(btn.dataset.value);
            });
        });
    }

    // --- Highlight de anchor al navegar ---
    document.querySelectorAll('a[href^="#"]').forEach((link) => {
        link.addEventListener("click", () => {
            const targetId = link.getAttribute("href").slice(1);
            if (!targetId) return;
            const target = document.getElementById(targetId);
            if (!target) return;
            target.classList.remove("anchor-flash");
            void target.offsetWidth;
            setTimeout(() => {
                target.classList.add("anchor-flash");
                target.addEventListener(
                    "animationend",
                    () => target.classList.remove("anchor-flash"),
                    { once: true }
                );
            }, 600);
        });
    });

    // El carrusel fue reemplazado por una rejilla estática de tarjetas glass.

    // --- Reveal al hacer scroll (encabezado de servicios) ---
    const revealTargets = document.querySelectorAll(".services-head");

    if (revealTargets.length > 0) {
        if ("IntersectionObserver" in window) {
            // Repite la animación cada vez que el encabezado entra o sale del viewport.
            // El rootMargin inferior negativo retrasa el disparo hasta que está bien dentro de pantalla.
            const revealObserver = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        entry.target.classList.toggle(
                            "is-visible",
                            entry.isIntersecting
                        );
                    });
                },
                { threshold: 0, rootMargin: "0px 0px -35% 0px" }
            );
            revealTargets.forEach((el) => revealObserver.observe(el));
        } else {
            // Fallback: mostrar sin animación si no hay soporte
            revealTargets.forEach((el) => el.classList.add("is-visible"));
        }
    }
});
