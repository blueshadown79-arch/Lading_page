# Laura Glass Solutions · Landing Page & Catálogo Digital Inteligente

Landing page comercial de alta conversión y catálogo digital interactivo para **Laura Glass Solutions** (Lima, Perú), empresa especializada en ventanas termoacústicas, mamparas, puertas, muros cortina spider, techos sol y sombra y cristalería de seguridad.

Desarrollada con **React 19**, **TypeScript**, **Tailwind CSS**, **Vite** y motor de búsqueda difusa en vivo con **Fuse.js**.

---

## 🌟 Características Principales

1. **Filosofía "Buscador Primero":**
   - Barra de búsqueda central en el Hero con enfoque automático en equipos de escritorio (sin activar molestamente el teclado virtual en celulares).
   - Búsqueda en vivo carácter por carácter (sin necesidad de presionar Enter).
   - Tolerancia a errores tipográficos, tildes y mayúsculas/minúsculas.
   - Diccionario de sinónimos peruanos integrado (`ducha` ↔ `mampara de baño` ↔ `box`, `sol y sombra` ↔ `pérgola` ↔ `techo`, `serie 62` ↔ `europea`, `spider` ↔ `muro cortina`, `curvo`, `laminado`, etc.).
   - Chips de sugerencias rápidas para acceso directo en 1 clic.
   - Reemplazo fluido de la cuadrícula de categorías sin saltos de página ni recargas.
   - Estado vacío amigable con botón de ayuda directa a WhatsApp.

2. **Catálogo Real con 204 Fotografías de Obras:**
   - 16 categorías arquitectónicas completas extraídas del catálogo oficial de 93 páginas.
   - Visualización por categorías con contador de proyectos.
   - Modal interactivo por categoría con todas las fotos ejecutadas.
   - Lightbox a pantalla completa con navegación por teclado (flechas y Escape) y botón de consulta personalizada a WhatsApp.

3. **Ingeniería en Perfilería & Vidrios de Seguridad:**
   - Comparador interactivo y tabla técnica de series: **Serie 25**, **Serie 62 (corte 45° europeo)**, **Serie 80 (Hermeti-K)**, **Serie 71**, **Serie 35** y **Sistema Nova**.
   - Sección técnica de cristales: **Laminado con PVB (Norma INDECI y RNE E.040)**, **Templado de seguridad** e **Insulado Termoacústico (DVH)**.

4. **Identidad & Contacto Oficial:**
   - Teléfonos verificados: **912 791 992** y **946 330 459**.
   - Instagram: **@vidrerialaura**.
   - Cobertura: Lima Metropolitana y proyectos a nivel nacional.
   - Botón flotante de WhatsApp con tooltip animado.
   - Mensajes de WhatsApp prellenados según el producto o consulta del usuario.

5. **SEO & Rendimiento:**
   - Metadatos Open Graph, Twitter Cards y etiquetas semánticas HTML5.
   - Schema JSON-LD `LocalBusiness` configurado para Lima.
   - Carga diferida (`loading="lazy"`) en imágenes para optimizar Core Web Vitals.
   - Soporte para accesibilidad y `prefers-reduced-motion`.

---

## 📁 Estructura del Proyecto

```text
laura-glass-solutions/
├── public/
│   ├── logo/
│   │   ├── logo-color.svg         # Logotipo principal en azul marino y cyan
│   │   └── logo-white.svg         # Logotipo en blanco para fondos oscuros
│   └── imagenes-catalogo/         # 204 fotografías reales organizadas por categoría
│       ├── murocortinas/
│       ├── ventanas/
│       ├── sistema-nova/
│       ├── serie-25/
│       ├── serie-62/
│       ├── serie-80/
│       ├── serie-71/
│       ├── serie-35/
│       ├── duchas/
│       ├── puertas-vidrio/
│       ├── puertas-aluminio/
│       ├── separatas-bano/
│       ├── cortavientos/
│       ├── oficinas-drywall/
│       ├── techos-sol-sombra/
│       ├── acero-inoxidable/
│       ├── cristales/
│       ├── obras-y-fachadas/
│       └── indice-imagenes.json
├── src/
│   ├── assets/logo/               # SVGs originales
│   ├── components/
│   │   ├── about/MissionVision.tsx        # Misión y Visión oficiales
│   │   ├── catalog/
│   │   │   ├── CatalogGrid.tsx            # Cuadrícula de categorías
│   │   │   ├── CategoryModal.tsx          # Modal de galería por categoría
│   │   │   ├── Lightbox.tsx               # Visor a pantalla completa
│   │   │   └── SearchResults.tsx          # Resultados en vivo de búsqueda
│   │   ├── cta/FinalCTA.tsx               # Llamado a la acción y botones WhatsApp
│   │   ├── gallery/WorksMosaic.tsx        # Mosaico de obras destacadas
│   │   ├── glass/GlassTechnology.tsx      # Cristales: Laminado, Templado, DVH
│   │   ├── hero/HeroSearch.tsx            # Hero central con buscador y chips
│   │   ├── layout/
│   │   │   ├── Header.tsx                 # Barra superior fija
│   │   │   └── Footer.tsx                 # Pie de página corporativo
│   │   ├── series/AluminumSeries.tsx      # Series 25, 62, 80, 71, 35 y Nova
│   │   └── ui/FloatingWhatsApp.tsx        # Botón flotante de WhatsApp
│   ├── config/siteConfig.ts               # Teléfonos, Instagram, dirección y textos
│   ├── data/catalogo.json                 # Base de datos completa del catálogo
│   ├── types/catalog.ts                   # Tipos e interfaces TypeScript
│   ├── utils/searchEngine.ts              # Motor Fuse.js y diccionario de sinónimos
│   ├── App.tsx                            # Componente principal y gestión de estado
│   ├── index.css                          # Estilos globales y reflejos de cristal
│   └── main.tsx                           # Punto de entrada de React
├── index.html                             # Plantilla HTML con SEO y fuentes
├── package.json
├── tailwind.config.js
└── vite.config.ts
```

---

## 🚀 Cómo Ejecutar en Desarrollo

Abre una terminal en la carpeta del proyecto y ejecuta:

```bash
# En Windows (PowerShell / CMD):
npm.cmd run dev
```

La aplicación estará disponible inmediatamente en `http://localhost:5173/`.

---

## 🛠️ Cómo Compilar para Producción

Para generar el sitio estático optimizado y listo para subir a un servidor:

```bash
npm.cmd run build
```

Esto generará la carpeta `dist/` con:
- `dist/index.html`
- `dist/assets/` (CSS y JS minificados con gzip)
- `dist/logo/`
- `dist/imagenes-catalogo/` (las 204 fotografías listas para producción)

---

## ✏️ Cómo Agregar Productos y Fotos Nuevas

Todo el catálogo es administrable desde un único archivo: **`src/data/catalogo.json`**.

### Para agregar una foto a una categoría existente:
1. Guarda la imagen en `public/imagenes-catalogo/[nombre-categoria]/mi-foto.jpg`.
2. Abre `src/data/catalogo.json`.
3. Busca la categoría correspondiente (por ejemplo `"id": "duchas"`).
4. Agrega un nuevo elemento al arreglo `"fotos"`:

```json
{
  "archivo": "mi-foto.jpg",
  "ruta": "imagenes-catalogo/duchas/mi-foto.jpg",
  "titulo": "Mampara de Ducha Corrediza en Acero Inoxidable",
  "descripcion": "Instalación en San Isidro con cristal templado de 8mm y accesorios en acero mate.",
  "ancho": 800,
  "alto": 1000
}
```

### Para agregar una nueva categoría completa:
Agrega un objeto en `"categorias"` dentro de `src/data/catalogo.json`:

```json
{
  "id": "nueva-categoria",
  "slug": "nueva-categoria",
  "nombre": "Nombre de la Categoría",
  "descripcionCorta": "Descripción comercial atractiva.",
  "subcategoria": "Acabados",
  "imagenPortada": "imagenes-catalogo/mi-carpeta/portada.jpg",
  "totalFotos": 1,
  "palabrasClave": ["palabra1", "sinonimo1", "sinonimo2"],
  "fotos": [ ... ]
}
```

El motor de búsqueda indexará automáticamente los nuevos términos y sinónimos sin necesidad de tocar código.

---

## 📞 Cómo Cambiar Teléfonos y Redes Sociales

Todos los canales de atención y textos comerciales se configuran en un solo archivo: **`src/config/siteConfig.ts`**.

```typescript
export const siteConfig = {
  name: "Laura Glass Solutions",
  
  // Modifica los teléfonos aquí:
  phones: [
    { label: "Ventas & WhatsApp 1", number: "912 791 992", fullNumber: "51912791992" },
    { label: "Ventas & WhatsApp 2", number: "946 330 459", fullNumber: "51946330459" },
  ],
  primaryPhone: "51912791992",
  secondaryPhone: "51946330459",

  // Modifica Instagram y redes aquí:
  social: {
    instagram: "https://instagram.com/vidrerialaura",
    instagramHandle: "@vidrerialaura",
    email: "ventas@lauraglass.pe",
  },
  
  // Horario y cobertura:
  schedule: "Lunes a Sábado: 8:00 AM - 7:00 PM",
  coverage: "Lima Metropolitana y proyectos a nivel nacional"
};
```

Cualquier cambio aquí actualizará automáticamente:
- El botón de WhatsApp del Header.
- El botón flotante de WhatsApp.
- Los botones de cotización en cada tarjeta de producto.
- Los enlaces del Footer.
- El botón de contacto en caso de que una búsqueda no arroje resultados.

---

## 🌐 Cómo Publicar la Landing Page en Internet

La aplicación es un sitio estático de ultra-alta velocidad (jamstack). Puedes publicarlo gratis o con tu propio dominio en cualquiera de estos servicios:

### Opción 1: Vercel (Recomendado - 2 minutos)
1. Crea una cuenta en [vercel.com](https://vercel.com).
2. Conecta tu repositorio de GitHub o arrastra la carpeta `dist/` generada por `npm.cmd run build`.
3. Si conectas GitHub, Vercel detectará Vite automáticamente. Comando de compilación: `npm run build`, directorio de salida: `dist`.

### Opción 2: Netlify
1. Ve a [netlify.com](https://netlify.com).
2. Arrastra directamente la carpeta `dist/` a la sección "Deploy manually" o conéctalo a GitHub.

### Opción 3: Firebase Hosting
1. Instala Firebase CLI: `npm.cmd install -g firebase-tools`.
2. Ejecuta `firebase init hosting`, selecciona `dist` como carpeta pública y responde `Yes` a single-page app.
3. Ejecuta `firebase deploy`.

### Opción 4: Hosting Tradicional (cPanel / Hostinger)
1. Ejecuta `npm.cmd run build`.
2. Entra al Administrador de Archivos de cPanel en `public_html/`.
3. Sube y descomprime todo el contenido que está **DENTRO** de la carpeta `dist/` (debe quedar `index.html` en la raíz de `public_html`).

---

© 2026 Laura Glass Solutions · Todos los derechos reservados.
