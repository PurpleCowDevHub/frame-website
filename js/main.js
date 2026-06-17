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

    // El carrusel fue reemplazado por una rejilla estática de tarjetas glass.
});
