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

    // --- Modal de servicios y complementos ---
    const MODAL_DATA = {
        landing: {
            icon: "rocket_launch",
            accent: "yellow",
            tag: "1 – 2 semanas",
            title: "Landing Pages",
            price: "Desde $800.000 COP",
            priceNote: "pago único",
            desc: "Página de conversión de alto impacto enfocada en un solo objetivo. Arquitectura de componentes modulares, rendimiento técnico medible y diseño que convierte visitas en clientes.",
            features: [
                "Una sola página, enfocada en un objetivo",
                "Se ve bien en celular y computador",
                "Formulario para captar clientes",
                "Integración con WhatsApp",
                "Mapa de Google Maps integrado",
                "Carga rápida y lista para Google",
            ],
        },
        sitios: {
            icon: "language",
            accent: "green",
            tag: "3 – 5 semanas",
            title: "Sitios Web",
            price: "Desde $2.500.000 COP",
            priceNote: "pago único",
            desc: "Plataforma corporativa escalable con CMS integrado, arquitectura de información jerárquica y optimización SEO técnica avanzada para que tu marca destaque en Google.",
            features: [
                "Varias páginas hechas a tu medida",
                "Se ve bien en cualquier pantalla",
                "Tú mismo editas el contenido",
                "Sección de blog o noticias",
                "Correos de publicidad y newsletters",
                "Integración con WhatsApp y redes",
                "Preparada para Google y carga rápida",
            ],
        },
        tienda: {
            icon: "storefront",
            accent: "red",
            tag: "4 – 8 semanas",
            title: "Tienda Online",
            price: "Desde $5.000.000 COP",
            priceNote: "pago único",
            desc: "E-commerce completo con pasarelas de pago seguras, gestión de inventario en tiempo real y dashboard analítico para que administres tu negocio desde cualquier lugar.",
            features: [
                "Catálogo de productos con buscador",
                "Carrito de compras y pago seguro",
                "Registro e inicio de sesión de usuarios",
                "Panel de administración completo",
                "Gestión de productos, pedidos e inventario",
                "Cupones de descuento y reportes de ventas",
            ],
        },
        apps: {
            icon: "dashboard",
            accent: "blue",
            tag: "A tu medida",
            title: "Aplicaciones Web",
            price: "Cotización personalizada",
            priceNote: "según requerimientos",
            desc: "Software empresarial a medida con autenticación, roles de usuario y dashboards de métricas. Construido exactamente para los procesos internos de tu empresa.",
            features: [
                "Panel de administración profesional",
                "100% a la medida de tu empresa",
                "Roles de usuario y acceso seguro",
                "Reportes, métricas y dashboards",
                "Funciona en celular y computador",
                "Integraciones con tus herramientas actuales",
            ],
        },
        seo: {
            icon: "trending_up",
            accent: "green",
            tag: "Complemento",
            title: "Posicionamiento en Google",
            price: "Desde $350.000 COP / mes",
            priceNote: "mantenimiento mensual",
            desc: "Optimización técnica y de contenido para que tu sitio aparezca en los primeros resultados cuando tus clientes te buscan en Google.",
            features: [
                "Auditoría SEO completa",
                "Optimización de palabras clave",
                "Meta etiquetas y estructura técnica",
                "Seguimiento de posiciones mensual",
                "Recomendaciones de contenido",
            ],
        },
        "3d": {
            icon: "view_in_ar",
            accent: "blue",
            tag: "Complemento",
            title: "Elementos 3D",
            price: "Desde $600.000 COP",
            priceNote: "pago único",
            desc: "Objetos 3D interactivos integrados en tu sitio que se mueven con el scroll o el mouse. Hacen tu marca única, moderna y absolutamente memorable.",
            features: [
                "Modelos 3D personalizados",
                "Animación con scroll o cursor",
                "Optimizados para carga rápida",
                "Compatible con todos los navegadores",
            ],
        },
        integraciones: {
            icon: "hub",
            accent: "yellow",
            tag: "Complemento",
            title: "Integraciones",
            price: "Desde $200.000 COP",
            priceNote: "por integración",
            desc: "Conectamos tu sitio web con las herramientas que ya usas: CRMs, plataformas de email, sistemas de pagos, Google Analytics, calendarios y más.",
            features: [
                "Integración con CRM (HubSpot, Zoho, etc.)",
                "Conexión con plataformas de email",
                "Google Analytics y Search Console",
                "Pasarelas de pago adicionales",
                "APIs de terceros a la medida",
            ],
        },
        mantenimiento: {
            icon: "build",
            accent: "red",
            tag: "Complemento",
            title: "Mantenimiento",
            price: "Desde $150.000 COP / mes",
            priceNote: "mantenimiento mensual",
            desc: "Cuidamos y actualizamos tu sitio web después de la entrega: actualizaciones de seguridad, backups periódicos, ajustes de contenido y soporte prioritario.",
            features: [
                "Actualizaciones de seguridad",
                "Backups automáticos periódicos",
                "Ajustes de texto e imágenes",
                "Soporte por WhatsApp prioritario",
                "Monitoreo de disponibilidad",
            ],
        },
    };

    const ACCENT_RGB = {
        blue:   "47, 129, 247",
        green:  "46, 204, 113",
        yellow: "245, 197, 24",
        red:    "255, 77, 77",
    };
    const ACCENT_HEX = {
        blue:   "#2f81f7",
        green:  "#2ecc71",
        yellow: "#f5c518",
        red:    "#ff4d4d",
    };

    const overlay   = document.getElementById("svModalOverlay");
    const modalBody = document.getElementById("svModalContent");
    const closeBtn  = document.getElementById("svModalClose");

    function buildModal(key) {
        const d = MODAL_DATA[key];
        if (!d) return;
        const accentHex  = ACCENT_HEX[d.accent]  || "#2f81f7";
        const accentRgb  = ACCENT_RGB[d.accent]   || "47,129,247";
        const featuresHtml = d.features
            .map(f => `<li><span class="material-symbols-rounded">check</span>${f}</li>`)
            .join("");

        overlay.style.setProperty("--modal-accent",      accentHex);
        overlay.style.setProperty("--modal-accent-rgb",  accentRgb);
        overlay.style.setProperty("--modal-accent-bg",   `rgba(${accentRgb}, 0.12)`);
        overlay.style.setProperty("--modal-accent-glow", `rgba(${accentRgb}, 0.28)`);

        modalBody.innerHTML = `
            <div class="sv-modal-header">
                <div class="sv-modal-icon">
                    <span class="material-symbols-rounded">${d.icon}</span>
                </div>
                <div class="sv-modal-meta">
                    <span class="sv-modal-tag">${d.tag}</span>
                    <h3 class="sv-modal-title" id="svModalTitle">${d.title}</h3>
                </div>
            </div>
            <div class="sv-modal-price">
                <span class="sv-modal-price-label">Precio</span>
                <span class="sv-modal-price-value">${d.price}</span>
                <span class="sv-modal-price-note">— ${d.priceNote}</span>
            </div>
            <p class="sv-modal-desc">${d.desc}</p>
            <p class="sv-modal-features-title">Incluye</p>
            <ul class="sv-modal-features">${featuresHtml}</ul>
            <a href="#contacto" class="sv-modal-cta">
                Cotizar ahora
                <span class="material-symbols-rounded">arrow_forward</span>
            </a>
        `;
    }

    function openModal(key) {
        buildModal(key);
        overlay.removeAttribute("hidden");
        requestAnimationFrame(() => {
            overlay.classList.add("is-open");
        });
        document.body.style.overflow = "hidden";
        closeBtn.focus();
    }

    function closeModal() {
        overlay.classList.remove("is-open");
        overlay.addEventListener("transitionend", () => {
            overlay.setAttribute("hidden", "");
            document.body.style.overflow = "";
        }, { once: true });
    }

    document.querySelectorAll("[data-modal]").forEach((btn) => {
        btn.addEventListener("click", () => openModal(btn.dataset.modal));
    });

    if (overlay) {
        overlay.addEventListener("click", (e) => {
            if (e.target.closest(".sv-modal-cta")) closeModal();
        });
    }

    if (closeBtn) closeBtn.addEventListener("click", closeModal);

    if (overlay) {
        overlay.addEventListener("click", (e) => {
            if (e.target === overlay) closeModal();
        });
        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape" && overlay.classList.contains("is-open")) closeModal();
        });
    }

    // --- Stepper de formulario de contacto ---
    const cstForm     = document.getElementById("contactForm");
    const cstPanels   = document.querySelectorAll(".cst-panel");
    const cstLabels   = document.querySelectorAll(".cst-step-label");
    const cstFill     = document.getElementById("cstProgressFill");
    const cstBack     = document.getElementById("cstBack");
    const cstNext     = document.getElementById("cstNext");
    const cstSubmit   = document.getElementById("cstSubmit");

    const cstFill2 = document.getElementById("cstProgressFill2");

    if (cstForm && cstPanels.length && cstNext && cstBack) {
        let currentStep = 1;
        const totalSteps = cstPanels.length;

        function goToStep(step) {
            cstPanels.forEach((p) => p.classList.remove("is-active"));
            const target = document.querySelector(`.cst-panel[data-panel="${step}"]`);
            if (target) target.classList.add("is-active");

            cstLabels.forEach((lbl) => {
                const n = parseInt(lbl.dataset.step, 10);
                lbl.classList.toggle("is-active", n === step);
                lbl.classList.toggle("is-done", n < step);
            });

            if (cstFill)  cstFill.style.width  = step > 1 ? "100%" : "0%";
            if (cstFill2) cstFill2.style.width = step > 2 ? "100%" : "0%";

            cstBack.classList.toggle("is-visible", step > 1);

            const isLast = step === totalSteps;
            cstNext.style.display   = isLast ? "none" : "inline-flex";
            cstSubmit.style.display = isLast ? "inline-flex" : "none";

            currentStep = step;
        }

        function validateStep(step) {
            let ok = true;
            if (step === 1) {
                ["name", "email", "phone"].forEach((id) => {
                    const el = document.getElementById(id);
                    if (!el) return;
                    const empty = !el.value.trim();
                    el.classList.toggle("is-error", empty);
                    if (empty) ok = false;
                });
            }
            if (step === 2) {
                const chosen = cstForm.querySelector("input[name='project']:checked");
                if (!chosen) {
                    ok = false;
                    document.querySelectorAll(".cst-project-card").forEach((c) =>
                        c.style.borderColor = "var(--accent-red)"
                    );
                    setTimeout(() =>
                        document.querySelectorAll(".cst-project-card").forEach((c) =>
                            (c.style.borderColor = "")
                        ), 700
                    );
                }
            }
            if (step === 3) {
                const msg = document.getElementById("message");
                if (msg && !msg.value.trim()) {
                    msg.classList.add("is-error");
                    ok = false;
                }
            }
            return ok;
        }

        cstNext.addEventListener("click", () => {
            if (validateStep(currentStep) && currentStep < totalSteps) {
                goToStep(currentStep + 1);
            }
        });

        cstBack.addEventListener("click", () => {
            if (currentStep > 1) goToStep(currentStep - 1);
        });

        cstForm.querySelectorAll("input, textarea").forEach((el) => {
            el.addEventListener("input", () => el.classList.remove("is-error"));
        });

        cstForm.addEventListener("submit", (e) => {
            e.preventDefault();
            if (!validateStep(3)) return;
            cstSubmit.disabled = true;
            cstSubmit.innerHTML = '<span>Enviando…</span>';
            setTimeout(() => {
                goToStep(1);
                cstForm.reset();
                cstSubmit.disabled = false;
                cstSubmit.innerHTML = '<span>Enviar mensaje</span><span class="material-symbols-rounded" aria-hidden="true">send</span>';
            }, 1800);
        });

        goToStep(1);
    }

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
