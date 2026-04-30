# Plan de Diseño y Desarrollo: Landing Page Empanadas (Valparaíso)

Este documento detalla el plan de diseño y estructura para la landing page de la empresa familiar de empanadas en Valparaíso.

## User Review Required

> [!IMPORTANT]
> **Falta el Logo:** Mencionaste que adjuntarías el logo, pero no lo he recibido en tu mensaje. Por favor, adjunta el logo en tu próxima respuesta para poder extraer la paleta de colores y definir la identidad visual exacta.
> Mientras tanto, he propuesto una base visual gastronómica que adaptaremos una vez lo envíes.

## 1. Análisis del Negocio y Concepto Visual
- **Tipo de Negocio:** Venta de empanadas, empresa familiar, arraigada en Valparaíso (local chileno tradicional).
- **Estilo Visual Propuesto:** "Moderno Artesanal". Combinaremos la calidez y tradición de una empresa familiar con un diseño web premium, limpio y de alta calidad.
- **Sensación a transmitir:**
  - *Apetitoso:* Uso de imágenes de alta calidad de los productos (jugosidad, masa dorada).
  - *Calidez y Hogar:* Que se sienta hecho a mano, con cariño.
  - *Confianza y Calidad:* Un diseño pulcro que transmita profesionalismo e higiene.

### Paleta de Colores (A confirmar con Logo)
*Mientras espero el logo, sugiero una base orientada a la gastronomía local:*
- **Primario:** (A extraer del logo) - Posiblemente un tono Terracota o Rojo cálido (hambre, tradición).
- **Secundario:** (A extraer del logo) - Dorado/Mostaza oscuro (color de la masa horneada).
- **Fondo Principal:** Blanco Roto / Crema muy suave (para contrastar sin cansar la vista).
- **Acentos:** Verde oscuro (asociado a ingredientes frescos) o tonos carbón para textos.

### Tipografías Recomendadas
- **Títulos (Headings):** *Outfit* o *Lora* (Outfit para un toque moderno, Lora para algo más clásico y artesanal).
- **Cuerpo de texto (Body):** *Inter* o *Roboto* (limpias, modernas, excelente legibilidad en móviles).

## 2. Estructura de la Landing Page (Secciones)

1. **Navbar (Navegación Fija):**
   - Logo a la izquierda.
   - Enlaces: Inicio, Especialidades, Nosotros, Locales.
   - Botón destacado CTA: "¡Pide ahora!".
   - Diseño con efecto "glassmorphism" (fondo ligeramente translúcido) al hacer scroll.

2. **Hero Section (Primer Impacto):**
   - Imagen de fondo de alta calidad (empanadas recién salidas del horno) con un overlay oscuro para asegurar la legibilidad del texto.
   - **Título Fuerte (H1):** Ej. "Las auténticas empanadas de Valparaíso, directas a tu mesa."
   - **Subtítulo:** "Receta familiar, ingredientes seleccionados y el sabor tradicional que nos caracteriza."
   - **CTA Principal:** Botón grande y atractivo "Ver el Menú" o "Haz tu pedido".

3. **Productos Destacados (El Menú):**
   - Tarjetas (cards) modernas con bordes redondeados y sombra suave.
   - Imagen apetitosa de cada empanada (Pino, Queso, Mariscos, etc.).
   - Título, breve descripción (ej. "Carne picada a cuchillo, aceituna, huevo...") y Precio destacado.
   - Hover effect: La tarjeta se eleva ligeramente o la imagen hace un ligero zoom.

4. **Nosotros / Historia Familiar:**
   - Diseño en dos columnas (Imagen de la familia o del local vs. Texto).
   - Enfoque emocional: Desde cuándo están en Valparaíso, el amor por la cocina, el valor de lo artesanal.

5. **Locales (Dónde Encontrarnos):**
   - Dirección exacta en Valparaíso.
   - Horarios de atención.
   - Botón de acción rápida: "Cómo llegar" (link a Google Maps).

6. **Testimonios (Social Proof):**
   - 3 tarjetas con reseñas de clientes reales. Estrellas doradas para fomentar la confianza.

7. **Footer Profesional:**
   - Logo.
   - Enlaces rápidos de navegación.
   - Redes sociales (Instagram, Facebook).
   - Información legal / Derechos reservados.

8. **Botón Flotante de WhatsApp:**
   - Siempre visible en la esquina inferior derecha para facilitar pedidos y consultas directas.

## 3. Ideas de Diseño y Mejoras para Conversión

- **Mobile-First:** Los botones serán grandes y fácilmente clickeables con el pulgar para facilitar la compra desde celulares.
- **Micro-animaciones:** Los elementos aparecerán con un suave "fade-in-up" al hacer scroll, dando un aspecto premium y moderno.
- **Uso de Imágenes:** Fotografía en clave cálida. (Puedo generar mockups temporales con IA para que la web se vea viva).
- **Espaciado (White Space):** Uso generoso de márgenes para que la página respire.
- **Copywriting Persuasivo:** Frases como "Horneadas todos los días", "Pide por WhatsApp", "El sabor de casa".

## 4. Plan de Implementación (Angular)
- El proyecto ya existe en `C:\Users\Alvarox\Desktop\Proyecto Web\frontend\frontend`.
- Crearé componentes Standalone para cada sección (ej: `app-hero`, `app-products`, `app-footer`).
- Usaré SCSS nativo, definiendo variables globales (`:root`) basadas en tu logo.
- Estructura limpia y responsiva usando Flexbox y CSS Grid.

## Próximos Pasos

1. **Revisa este plan** y dime si te gusta la estructura y el enfoque.
2. **Adjunta el logo** de tu empresa.
3. Con tu aprobación y el logo, comenzaré con la FASE 3 (Desarrollo del código en Angular).
