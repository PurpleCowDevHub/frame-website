# Proyecto: Sitio Web Corporativo - frame

Este repositorio contiene el código fuente para el Front-end de la página de inicio oficial de **frame**, una agencia de desarrollo web pro. El objetivo de este documento es servir como guía de desarrollo e instrucciones de codificación para el agente de IA.

## Objetivos de Desarrollo

Desarrollar la estructura HTML5 semántica y los estilos CSS3 correspondientes para la vista principal (`index.html`). El diseño de la interfaz debe ser limpio, minimalista, corporativo y elegante, implementando un sistema de diseño con efecto *glassmorphism* (estilo Apple) y secciones preparadas para transiciones mediante scroll.

### Especificaciones Técnicas del Diseño (CSS)
*   **Paleta de Colores:** Configurar variables CSS utilizando una base oscura/clara minimalista con cuatro colores de acento clave para botones, estados hover e indicadores: Azul Tech, Verde, Amarillo y Rojo.
*   **Efecto Glassmorphism:** Utilizar combinaciones de `background: rgba(...)`, `backdrop-filter: blur(...)` y bordes semi-transparentes para las cajas principales y componentes de interacción.

---

## Componentes y Secciones a Codificar

El agente de IA debe generar el código para las siguientes cinco secciones obligatorias dentro de la vista de inicio:

### 1. Global Header (Navegación)
*   **Estructura:** Etiqueta `<header>` con posición fija (`position: fixed`) en la parte superior.
*   **Elementos:** Contenedor para el logotipo de "frame", menú de navegación (`<nav>`) con enlaces a Servicios, Portafolio y Precios, y un botón destacado con efecto *glass* para el "Acceso Clientes".

### 2. Hero Section (Banner de Entrada)
*   **Estructura:** Sección de pantalla completa (`height: 100vh`) optimizada para alto impacto visual.
*   **Elementos:** 
    *   Un contenedor `div` con ID específico asignado como marcador de posición para un lienzo (`<canvas>`) de renderizado 3D en el fondo.
    *   Capa de contenido superpuesta en el eje Z que contenga un título principal corporativo, un subtítulo descriptivo y un botón de llamada a la acción (CTA) interactivo.

### 3. Value Proposition (Propuesta de Valor)
*   **Estructura:** Bloque de contenido limpio con amplio espaciado interno (*padding*).
*   **Elementos:** Distribución en columnas o cuadrícula minimalista que introduzca la filosofía de código de la agencia y su enfoque en el rendimiento técnico y la excelencia en el diseño web.

### 4. Services Showcase (Muestra de Servicios)
*   **Estructura:** Seccionamiento mediante una rejilla interactiva (`grid`).
*   **Elementos:** Tarjetas individuales para cada servicio (Sitios Web, E-commerce, Landing Pages). Cada tarjeta debe aplicar el efecto de desenfoque de fondo, iconos representativos (o marcadores de posición) y un micro-intercambio de color basado en los acentos corporativos al pasar el cursor (hover).

### 5. Global Footer (Pie de Página)
*   **Estructura:** Etiqueta `<footer>` que cierre la jerarquía de la página.
*   **Elementos:** 
    *   Formulario de contacto estructurado (campos para Nombre, Correo, Teléfono y Mensaje).
    *   Bloque de información con datos de contacto ficticios (Teléfono: +57 300 000 0000, Correo: contacto@frame.com).
    *   Sección de enlaces a redes sociales y fila de cierre con la nota legal de todos los derechos reservados.

---

## Instrucciones de Entrega del Código

1.  **Escribir un código HTML5 completamente limpio**, estructurado y que utilice etiquetas semánticas estrictas (`<header>`, `<main>`, `<section>`, `<footer>`).
2.  **Proporcionar un archivo `styles.css` modular**, documentando cada clase y asegurando que las transiciones utilicen propiedades de aceleración por hardware (`transition: transform, background, filter`).
3.  **No incluir lógica compleja de JavaScript** de momento; preparar el DOM con IDs y clases descriptivas para su posterior manipulación.

---

## Estructura del Proyecto

```
frame-website/
├── index.html                 # Vista principal (HTML semántico)
├── README.md                  # Guía de desarrollo
├── assets/
│   └── fonts/Avenir/          # Tipografía local Avenir
├── css/
│   └── styles.css             # Sistema de diseño modular
└── js/
    └── vendor/
        └── liquid-glass/      # Web Component de cristal líquido
            ├── displacement-utils.js
            ├── glass-element.js
            └── README.md
```

## Liquid Glass

El header utiliza el Web Component `<glass-element>` (carpeta `js/vendor/liquid-glass/`)
para generar una caja central con efecto de cristal líquido que agrupa los 4 botones
de navegación. Los scripts se cargan al final de `index.html` en el orden requerido
(`displacement-utils.js` antes de `glass-element.js`).