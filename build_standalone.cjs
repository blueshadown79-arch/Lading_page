const fs = require('fs');
const path = require('path');

const catalogoData = JSON.parse(fs.readFileSync(path.join(__dirname, 'src/data/catalogo.json'), 'utf8'));

// 8 Obras destacadas 100% verificadas en disco
const obrasDestacadas = [
  {
    archivo: "img_196_950x1425.jpg",
    ruta: "imagenes-catalogo/obras-y-fachadas/img_196_950x1425.jpg",
    titulo: "Edificio Residencial & Muro Cortina Azul",
    descripcion: "Fachada integral de 5 niveles con cristal reflejante azul y ventanas proyectantes.",
    ancho: 950,
    alto: 1425,
    paginaPdf: 83
  },
  {
    archivo: "img_193_942x1415.jpg",
    ruta: "imagenes-catalogo/acero-inoxidable/img_193_942x1415.jpg",
    titulo: "Torre Residencial & Balcones con Barandas Inox",
    descripcion: "Ventanas Serie 25 en aluminio negro y barandas de acero inoxidable AISI 304.",
    ancho: 942,
    alto: 1415,
    paginaPdf: 82
  },
  {
    archivo: "img_197_886x1330.jpg",
    ruta: "imagenes-catalogo/obras-y-fachadas/img_197_886x1330.jpg",
    titulo: "Multifamiliar en Esquina con Ventanales Panorámicos",
    descripcion: "Acabados en Serie 62 y mamparas corredizas para máxima iluminación natural.",
    ancho: 886,
    alto: 1330,
    paginaPdf: 85
  },
  {
    archivo: "img_199_931x1402.jpg",
    ruta: "imagenes-catalogo/obras-y-fachadas/img_199_931x1402.jpg",
    titulo: "Edificio Corporativo & Cerramientos Integrales",
    descripcion: "Estructuras de aluminio y cristal templado para edificios comerciales y residenciales.",
    ancho: 931,
    alto: 1402,
    paginaPdf: 86
  },
  {
    archivo: "img_201_920x1379.jpg",
    ruta: "imagenes-catalogo/obras-y-fachadas/img_201_920x1379.jpg",
    titulo: "Fachada Moderna Residencial con Cristales",
    descripcion: "Instalación de cristales de seguridad laminados y cancelería de aluminio.",
    ancho: 920,
    alto: 1379,
    paginaPdf: 89
  },
  {
    archivo: "img_185_754x565.jpg",
    ruta: "imagenes-catalogo/techos-sol-sombra/img_185_754x565.jpg",
    titulo: "Techo Sol y Sombra en Terraza Lounge",
    descripcion: "Estructura de aluminio maderado con cubierta de cristal templado y filtro UV.",
    ancho: 754,
    alto: 565,
    paginaPdf: 78
  },
  {
    archivo: "img_023_908x1218.jpg",
    ruta: "imagenes-catalogo/ventanas/img_023_908x1218.jpg",
    titulo: "Ventanas Corredizas Panorámicas",
    descripcion: "Ventanas termoacústicas de gran vano con cierre hermético y rodajes pesados.",
    ancho: 908,
    alto: 1218,
    paginaPdf: 14
  },
  {
    archivo: "img_086_864x716.jpg",
    ruta: "imagenes-catalogo/serie-62/img_086_864x716.jpg",
    titulo: "Mamparas Serie 62 Modelo Europeo Corte 45°",
    descripcion: "Aluminio termoacústico con junquillos desmontables y doble felpa hermética.",
    ancho: 864,
    alto: 716,
    paginaPdf: 43
  }
];

// Asignamos segmento general a cada categoría para la segmentación solicitada
const segmentMap = {
  'puertas-vidrio': 'puertas',
  'puertas-aluminio': 'puertas',
  'serie-71-35': 'puertas',
  'ventanas-proyectantes-curvas': 'ventanas',
  'serie-25': 'ventanas',
  'serie-62': 'ventanas',
  'sistema-nova': 'ventanas',
  'serie-80': 'mamparas',
  'muros-cortina': 'fachadas',
  'mamparas-ducha': 'duchas',
  'puertas-ducha': 'duchas',
  'separatas-bano': 'duchas',
  'techos-sol-sombra': 'techos',
  'acero-inoxidable': 'acero',
  'cortavientos': 'acero',
  'oficinas-drywall': 'oficinas',
  'cristales': 'todos'
};

catalogoData.categorias.forEach(cat => {
  cat.segmento = segmentMap[cat.id] || 'todos';
});

const htmlContent = `<!DOCTYPE html>
<html lang="es" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <!-- 1. TÍTULO Y META DESCRIPCIÓN SEO -->
  <title>Laura Glass Solutions - Ventanas, mamparas, puertas y techos en vidrio y aluminio</title>
  <meta name="description" content="Laura Glass Solutions: Fabricación e instalación de ventanas termoacústicas, mamparas corredizas, puertas de cristal templado, techos sol y sombra y muros cortina en Lima, Perú. Asesoría directa y cotizaciones rápidas.">
  <meta name="keywords" content="Laura Glass Solutions, ventanas de aluminio, mamparas de vidrio, puertas de cristal templado, techos sol y sombra, muros cortina spider, serie 25, serie 62, serie 80, sistema nova, acero inoxidable, vidriería en Lima">
  <meta name="author" content="Laura Glass Solutions">

  <!-- 2. DIRECTIVAS DE INDEXACIÓN Y CANONICAL -->
  <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
  <meta name="googlebot" content="index, follow">
  <link rel="canonical" href="https://laura-glass-solutions.vercel.app/">
  <link rel="icon" type="image/svg+xml" href="logo/logo-color.svg">
  <link rel="apple-touch-icon" href="logo/logo-color.svg">

  <!-- 3. OPEN GRAPH (Facebook, WhatsApp, LinkedIn) -->
  <meta property="og:locale" content="es_PE">
  <meta property="og:type" content="website">
  <meta property="og:title" content="Laura Glass Solutions - Ventanas, mamparas, puertas y techos en vidrio y aluminio">
  <meta property="og:description" content="Fabricación e instalación de ventanas termoacústicas, mamparas, puertas de cristal templado, muros cortina y techos sol y sombra en Lima, Perú.">
  <meta property="og:url" content="https://laura-glass-solutions.vercel.app/">
  <meta property="og:site_name" content="Laura Glass Solutions">
  <meta property="og:image" content="https://laura-glass-solutions.vercel.app/imagenes-catalogo/obras-y-fachadas/img_196_950x1425.jpg">
  <meta property="og:image:secure_url" content="https://laura-glass-solutions.vercel.app/imagenes-catalogo/obras-y-fachadas/img_196_950x1425.jpg">
  <meta property="og:image:width" content="950">
  <meta property="og:image:height" content="1425">
  <meta property="og:image:type" content="image/jpeg">
  <meta property="og:image:alt" content="Laura Glass Solutions - Obras y proyectos de arquitectura en vidrio y aluminio">

  <!-- 4. TWITTER CARDS -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Laura Glass Solutions - Ventanas, mamparas, puertas y techos en vidrio y aluminio">
  <meta name="twitter:description" content="Fabricación e instalación de ventanas termoacústicas, mamparas, puertas de cristal templado, muros cortina y techos sol y sombra en Lima, Perú.">
  <meta name="twitter:image" content="https://laura-glass-solutions.vercel.app/imagenes-catalogo/obras-y-fachadas/img_196_950x1425.jpg">

  <!-- 5. GEO-LOCALIZACIÓN PARA LIMA, PERÚ -->
  <meta name="geo.region" content="PE-LIM">
  <meta name="geo.placename" content="Lima, Perú">
  <meta name="geo.position" content="-12.046374;-77.042793">
  <meta name="ICBM" content="-12.046374, -77.042793">

  <!-- 6. ETIQUETA DE VERIFICACIÓN DE GOOGLE SEARCH CONSOLE -->
  <meta name="google-site-verification" content="GOOGLE_SEARCH_CONSOLE_VERIFICATION_CODE">

  <!-- 7. DATOS ESTRUCTURADOS JSON-LD (SCHEMA.ORG) -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": "Laura Glass Solutions",
    "image": "https://laura-glass-solutions.vercel.app/imagenes-catalogo/obras-y-fachadas/img_196_950x1425.jpg",
    "url": "https://laura-glass-solutions.vercel.app/",
    "telephone": "+51912791992",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Lima",
      "addressRegion": "Lima",
      "addressCountry": "PE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -12.046374,
      "longitude": -77.042793
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "08:00",
      "closes": "19:00"
    },
    "sameAs": [
      "https://www.tiktok.com/@vidrerialaura",
      "https://www.instagram.com/serviciolauraglass"
    ],
    "description": "Empresa especializada en fabricación e instalación de ventanas, mamparas, puertas y techos en vidrio, aluminio y acero inoxidable en Lima, Perú."
  }
  </script>

  <!-- Google Fonts: Cormorant Garamond & Manrope -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,600&family=Manrope:wght@400;500;600;700;800&display=swap" rel="stylesheet">

  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            brand: {
              navy: '#0B2A4A',
              'navy-dark': '#071B30',
              'navy-light': '#163A63',
              glass: '#8EC5E8',
              'glass-cyan': '#48CAE4',
              mist: '#EAF3FA',
              champagne: '#C9A96E',
              whatsapp: '#25D366',
              'whatsapp-dark': '#1EBE5D'
            }
          },
          fontFamily: {
            serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
            sans: ['Manrope', 'system-ui', 'sans-serif']
          }
        }
      }
    }
  </script>

  <style>
    /* Estilos del slider horizontal en el Hero */
    .hero-slider-container {
      position: absolute;
      top: 0; left: 0; right: 0; bottom: 0;
      overflow: hidden;
      z-index: 1;
    }
    .hero-slider-track {
      display: flex;
      flex-direction: row;
      width: 300%;
      height: 100%;
      transition: transform 0.9s cubic-bezier(0.65, 0, 0.35, 1);
    }
    .hero-slide {
      position: relative;
      width: 33.33333%;
      height: 100%;
      flex-shrink: 0;
    }
    .hero-slide img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
    /* Degradado sutil y ligero para que la foto se vea nítida y luminosa */
    .hero-overlay {
      position: absolute;
      inset: 0;
      background: linear-gradient(180deg, rgba(7, 27, 48, 0.32) 0%, rgba(11, 42, 74, 0.38) 45%, rgba(7, 27, 48, 0.60) 100%);
    }
    .hero-text-shadow {
      text-shadow: 0 2px 12px rgba(0, 0, 0, 0.85), 0 4px 30px rgba(0, 0, 0, 0.65);
    }
    .hero-sub-shadow {
      text-shadow: 0 1px 8px rgba(0, 0, 0, 0.85);
    }
    @keyframes pulseSlow {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.05); }
    }
    .animate-pulse-slow {
      animation: pulseSlow 3s infinite ease-in-out;
    }
    .modal-backdrop {
      transition: opacity 0.25s ease-in-out;
    }
    /* Relieve táctil para los iconos de categoría */
    .icon-badge-relieve {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 30px;
      height: 30px;
      border-radius: 9px;
      background: linear-gradient(180deg, #ffffff 0%, #f8fafc 45%, #e2e8f0 100%);
      box-shadow: 
        0 2px 4px rgba(15, 23, 42, 0.12),
        0 1px 1px rgba(15, 23, 42, 0.08),
        inset 0 1.5px 0.5px rgba(255, 255, 255, 1),
        inset 0 -1.5px 1px rgba(0, 0, 0, 0.12);
      border: 1px solid rgba(203, 213, 225, 0.95);
      flex-shrink: 0;
      transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
      filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.06));
    }
    .icon-badge-relieve svg {
      color: #0B2A4A !important;
      filter: drop-shadow(0 1px 1.5px rgba(11, 42, 74, 0.32));
      transition: transform 0.2s ease;
    }
    .active-filter-btn .icon-badge-relieve {
      background: linear-gradient(180deg, #ffffff 0%, #f1f5f9 55%, #e2e8f0 100%);
      box-shadow: 
        0 3px 6px rgba(0, 0, 0, 0.35),
        inset 0 1.5px 0.5px rgba(255, 255, 255, 1),
        inset 0 -1px 1px rgba(0, 0, 0, 0.18);
      border: 1px solid rgba(255, 255, 255, 0.85);
      transform: translateY(-0.5px);
    }
    .active-filter-btn .icon-badge-relieve svg {
      color: #0B2A4A !important;
      filter: drop-shadow(0 1.5px 2px rgba(11, 42, 74, 0.45));
    }
    button:hover .icon-badge-relieve svg {
      transform: scale(1.12);
    }
  </style>
</head>
<body class="bg-slate-50 text-slate-800 font-sans antialiased selection:bg-brand-glass selection:text-brand-navy-dark">

  <!-- 1. HEADER DELGADO FIJO -->
  <header id="main-header" class="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-all py-3.5 shadow-sm">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
      
      <!-- Logo -->
      <a href="#inicio" class="flex items-center gap-2 group">
        <img src="logo/logo-color.svg" alt="Laura Glass Solutions" class="h-10 sm:h-11 w-auto transition-transform group-hover:scale-105" onerror="this.onerror=null; this.src='public/logo/logo-color.svg';">
      </a>

      <!-- Navegación Escritorio -->
      <nav class="hidden md:flex items-center gap-7">
        <a href="#productos" class="text-sm font-semibold text-slate-700 hover:text-brand-navy transition-colors">Catálogo de Proyectos</a>
        <a href="#obras" class="text-sm font-semibold text-slate-700 hover:text-brand-navy transition-colors">Obras Realizadas</a>
        <a href="#nosotros" class="text-sm font-semibold text-slate-700 hover:text-brand-navy transition-colors">Quiénes Somos</a>
        <a href="#contacto" class="text-sm font-semibold text-slate-700 hover:text-brand-navy transition-colors">Contacto</a>
      </nav>

      <!-- Botones de Acción -->
      <div class="hidden sm:flex items-center gap-3">
        <button onclick="focusSearch()" class="p-2 text-slate-600 hover:text-brand-navy hover:bg-slate-100 rounded-lg transition-colors cursor-pointer" title="Buscar en catálogo">
          <svg class="w-5 h-5 stroke-current stroke-2 fill-none" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
        </button>
        <a href="#contacto" class="text-xs font-bold uppercase tracking-wider text-brand-navy border border-slate-300 px-3.5 py-2 rounded-lg hover:bg-slate-50 transition-colors">
          Cotizar
        </a>
        <a href="https://wa.me/51912791992?text=Hola%20Laura%20Glass%20Solutions,%20deseo%20solicitar%20una%20cotizaci%C3%B3n." target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 bg-brand-whatsapp hover:bg-brand-whatsapp-dark text-white text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-lg shadow-sm transition-all hover:shadow hover:-translate-y-0.5">
          <svg class="w-4 h-4 fill-white" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/></svg>
          <span>WhatsApp</span>
        </a>
      </div>

      <!-- Botón Móvil -->
      <button onclick="toggleMobileMenu()" class="md:hidden p-2 text-slate-700 hover:bg-slate-100 rounded-lg">
        <svg class="w-6 h-6 stroke-current stroke-2 fill-none" viewBox="0 0 24 24"><path d="M4 12h16M4 6h16M4 18h16"></path></svg>
      </button>

    </div>

    <!-- Menú Móvil -->
    <div id="mobile-menu" class="hidden md:hidden bg-white border-t border-slate-200 px-4 py-4 space-y-3 shadow-lg">
      <a href="#productos" onclick="toggleMobileMenu()" class="block py-2 text-base font-semibold text-slate-800 border-b border-slate-100">Catálogo de Proyectos</a>
      <a href="#obras" onclick="toggleMobileMenu()" class="block py-2 text-base font-semibold text-slate-800 border-b border-slate-100">Obras Realizadas</a>
      <a href="#nosotros" onclick="toggleMobileMenu()" class="block py-2 text-base font-semibold text-slate-800 border-b border-slate-100">Quiénes Somos</a>
      <a href="#contacto" onclick="toggleMobileMenu()" class="block py-2 text-base font-semibold text-slate-800 border-b border-slate-100">Contacto</a>
      <a href="https://wa.me/51912791992?text=Hola%20Laura%20Glass%20Solutions,%20deseo%20solicitar%20una%20cotizaci%C3%B3n." target="_blank" class="w-full flex items-center justify-center gap-2 bg-brand-whatsapp text-white py-3 rounded-lg font-bold">
        <span>WhatsApp: 912 791 992</span>
      </a>
    </div>
  </header>

  <!-- 2. HERO PRINCIPAL: FONDO DINÁMICO HORIZONTAL CON 3 FOTOS NÍTIDAS + BUSCADOR PRIMERO -->
  <section id="inicio" class="relative text-white pt-14 pb-20 sm:pt-20 sm:pb-28 overflow-hidden min-h-[580px] flex items-center">
    
    <!-- FONDO INTERACTIVO: SLIDER HORIZONTAL CON 3 FOTOS MEJORADAS CON IA -->
    <div class="hero-slider-container">
      <div id="hero-slider-track" class="hero-slider-track">
        
        <!-- Foto 1: Fachada Muro Cortina Azul (Mejorada con IA) -->
        <div class="hero-slide">
          <img src="imagenes-catalogo/obras-y-fachadas/hero_slide_1_muro_cortina_hd.jpg" alt="Fachada Muro Cortina de Vidrio" onerror="this.onerror=null; this.src='public/imagenes-catalogo/obras-y-fachadas/hero_slide_1_muro_cortina_hd.jpg';">
          <div class="hero-overlay"></div>
        </div>

        <!-- Foto 2: Residencia de Lujo con Ventanales (Mejorada con IA) -->
        <div class="hero-slide">
          <img src="imagenes-catalogo/obras-y-fachadas/hero_slide_2_residencia_hd.jpg" alt="Residencia Contemporánea Panorámica" onerror="this.onerror=null; this.src='public/imagenes-catalogo/obras-y-fachadas/hero_slide_2_residencia_hd.jpg';">
          <div class="hero-overlay"></div>
        </div>

        <!-- Foto 3: Techo Sol y Sombra en Terraza Lounge (Mejorada con IA) -->
        <div class="hero-slide">
          <img src="imagenes-catalogo/techos-sol-sombra/hero_slide_3_techo_sol_sombra_hd.jpg" alt="Techos Sol y Sombra en Terraza" onerror="this.onerror=null; this.src='public/imagenes-catalogo/techos-sol-sombra/hero_slide_3_techo_sol_sombra_hd.jpg';">
          <div class="hero-overlay"></div>
        </div>

      </div>
    </div>

    <!-- Flechas de navegación horizontal del Hero (Desktop) -->
    <button onclick="prevHeroSlide()" class="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/35 hover:bg-black/65 text-white items-center justify-center transition-all cursor-pointer backdrop-blur-sm border border-white/25 shadow-lg" title="Foto anterior" aria-label="Foto anterior">
      <svg class="w-5 h-5 stroke-current stroke-2 fill-none" viewBox="0 0 24 24"><path d="m15 18-6-6 6-6"></path></svg>
    </button>
    <button onclick="nextHeroSlide()" class="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/35 hover:bg-black/65 text-white items-center justify-center transition-all cursor-pointer backdrop-blur-sm border border-white/25 shadow-lg" title="Siguiente foto" aria-label="Siguiente foto">
      <svg class="w-5 h-5 stroke-current stroke-2 fill-none" viewBox="0 0 24 24"><path d="m9 18 6-6-6-6"></path></svg>
    </button>

    <!-- Indicadores Horizontales: Líneas blancas delgadas y limpias (sin texto) -->
    <div class="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2.5 sm:gap-3 bg-black/35 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 shadow-xl">
      <button onclick="setHeroSlide(0)" id="hero-bar-0" class="w-10 sm:w-14 h-1 sm:h-1.5 rounded-full bg-white transition-all cursor-pointer shadow-md" aria-label="Slide 1"></button>
      <button onclick="setHeroSlide(1)" id="hero-bar-1" class="w-6 sm:w-8 h-1 sm:h-1.5 rounded-full bg-white/40 hover:bg-white/70 transition-all cursor-pointer" aria-label="Slide 2"></button>
      <button onclick="setHeroSlide(2)" id="hero-bar-2" class="w-6 sm:w-8 h-1 sm:h-1.5 rounded-full bg-white/40 hover:bg-white/70 transition-all cursor-pointer" aria-label="Slide 3"></button>
    </div>

    <!-- CONTENIDO CENTRAL DEL HERO -->
    <div class="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10 w-full">
      
      <!-- Logo blanco -->
      <div class="mb-5 flex justify-center">
        <img src="logo/logo-white.svg" alt="Laura Glass Solutions" class="h-14 sm:h-16 w-auto drop-shadow-2xl" onerror="this.onerror=null; this.src='public/logo/logo-white.svg';">
      </div>

      <!-- Pregunta Central -->
      <h1 class="font-serif text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white mb-3 leading-tight hero-text-shadow">
        ¿Qué estás buscando?
      </h1>

      <p class="text-white text-base sm:text-lg max-w-2xl mx-auto mb-8 font-medium hero-sub-shadow">
        Ventanas, mamparas, puertas, techos y más en vidrio y aluminio
      </p>

      <!-- BARRA DE BÚSQUEDA CENTRAL -->
      <div class="max-w-2xl mx-auto mb-6">
        <div class="relative flex items-center shadow-2xl rounded-2xl bg-white text-slate-800 transition-all border-2 border-white/60 focus-within:border-brand-glass focus-within:ring-4 focus-within:ring-brand-glass/30">
          
          <div class="pl-4 sm:pl-5 text-brand-navy">
            <svg class="w-6 h-6 stroke-current stroke-2 fill-none" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
          </div>

          <input
            type="text"
            id="search-input"
            autocomplete="off"
            spellcheck="false"
            placeholder="Escribe lo que buscas: puertas, duchas, Serie 62, sol y sombra, spider..."
            oninput="handleSearchInput(this.value)"
            class="w-full py-4 pl-3.5 pr-12 text-base sm:text-lg bg-transparent border-0 focus:outline-none focus:ring-0 text-slate-800 placeholder-slate-400 font-medium"
          />

          <button
            id="search-clear-btn"
            onclick="clearSearch()"
            class="hidden absolute right-3 p-1.5 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-600 cursor-pointer"
            title="Borrar búsqueda"
          >
            <svg class="w-5 h-5 stroke-current stroke-2 fill-none" viewBox="0 0 24 24"><path d="M18 6 6 18M6 6l12 12"></path></svg>
          </button>
        </div>
      </div>

      <!-- CHIPS DE SUGERENCIA RÁPIDA -->
      <div class="flex flex-wrap items-center justify-center gap-2 max-w-2xl mx-auto">
        <span class="text-xs text-white font-bold mr-1 hidden sm:inline drop-shadow">Atajos:</span>
        <button onclick="setSearchChip('Puertas de aluminio')" class="text-xs bg-black/45 hover:bg-black/65 text-white border border-white/30 px-3.5 py-1.5 rounded-full backdrop-blur-md transition-all cursor-pointer font-medium shadow">
          🚪 Puertas de aluminio
        </button>
        <button onclick="setSearchChip('Mamparas de ducha')" class="text-xs bg-black/45 hover:bg-black/65 text-white border border-white/30 px-3.5 py-1.5 rounded-full backdrop-blur-md transition-all cursor-pointer font-medium shadow">
          🚿 Mamparas de ducha
        </button>
        <button onclick="setSearchChip('Ventanas Serie 25')" class="text-xs bg-black/45 hover:bg-black/65 text-white border border-white/30 px-3.5 py-1.5 rounded-full backdrop-blur-md transition-all cursor-pointer font-medium shadow">
          🪟 Ventanas Serie 25
        </button>
        <button onclick="setSearchChip('Techos sol y sombra')" class="text-xs bg-black/45 hover:bg-black/65 text-white border border-white/30 px-3.5 py-1.5 rounded-full backdrop-blur-md transition-all cursor-pointer font-medium shadow">
          ☀️ Techos sol y sombra
        </button>
        <button onclick="setSearchChip('Muros cortina spider')" class="text-xs bg-black/45 hover:bg-black/65 text-white border border-white/30 px-3.5 py-1.5 rounded-full backdrop-blur-md transition-all cursor-pointer font-medium shadow">
          🏢 Muros cortina spider
        </button>
      </div>

    </div>
  </section>

  <!-- 3. ÁREA DE CATÁLOGO SEGMENTADO POR CATEGORÍAS -->
  <main id="productos" class="py-14 sm:py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- CONTENEDOR DE RESULTADOS DE BÚSQUEDA EN VIVO -->
      <div id="search-results-section" class="hidden mb-16">
        <div class="flex items-center justify-between border-b border-slate-200 pb-4 mb-8">
          <div>
            <h2 class="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
              Resultados para "<span id="search-query-display" class="text-brand-navy"></span>"
            </h2>
            <p id="search-count-display" class="text-sm text-slate-500 mt-1"></p>
          </div>
          <button onclick="clearSearch()" class="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-slate-600 hover:text-brand-navy bg-slate-100 hover:bg-slate-200 px-3.5 py-2 rounded-lg transition-colors cursor-pointer">
            <svg class="w-4 h-4 stroke-current stroke-2 fill-none" viewBox="0 0 24 24"><path d="M18 6 6 18M6 6l12 12"></path></svg>
            <span>Ver Todo el Catálogo</span>
          </button>
        </div>

        <!-- Cuadrícula de Resultados -->
        <div id="search-results-grid" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"></div>

        <!-- Estado Vacío -->
        <div id="search-empty-state" class="hidden bg-white rounded-2xl p-8 sm:p-12 text-center max-w-xl mx-auto border border-slate-200 shadow-sm">
          <div class="w-16 h-16 bg-brand-mist rounded-full flex items-center justify-center mx-auto mb-4 text-brand-navy">
            <svg class="w-8 h-8 stroke-current stroke-2 fill-none" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
          </div>
          <h3 class="font-serif text-2xl font-bold text-slate-800 mb-2">No encontramos eso, pero podemos ayudarte</h3>
          <p class="text-slate-600 text-sm mb-6 leading-relaxed">
            Fabricamos e instalamos soluciones a medida en cualquier tipo de cristal y aluminio. Escríbenos directamente y un asesor técnico te atenderá.
          </p>
          <a id="search-empty-wa-btn" href="#" target="_blank" class="inline-flex items-center gap-2 bg-brand-whatsapp hover:bg-brand-whatsapp-dark text-white font-bold px-6 py-3 rounded-xl transition-all shadow-md">
            <span>Consultar requerimiento por WhatsApp</span>
          </a>
        </div>
      </div>

      <!-- CATÁLOGO SEGMENTADO CON FILTROS DINÁMICOS -->
      <div id="catalog-grid-section">
        
        <div class="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <span class="text-xs font-bold uppercase tracking-widest text-brand-navy-light bg-brand-mist px-3 py-1 rounded-full border border-brand-glass/30">
            Catálogo de Obras Ejecutadas
          </span>
          <h2 class="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mt-3 mb-4">
            Líneas de Solución Arquitectónica
          </h2>
          <p class="text-slate-600 text-base sm:text-lg leading-relaxed">
            Filtra por categoría para ver directamente todos los proyectos realizados en cada área.
          </p>
        </div>

        <!-- BARRA DE SEGMENTACIÓN POR CATEGORÍA CON RELIEVE EN ICONOS -->
        <div class="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-8" id="segment-filter-buttons">
          
          <!-- Puertas -->
          <button onclick="filterSegment('puertas')" id="seg-btn-puertas" class="px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer bg-brand-navy text-white shadow-[0_3px_8px_rgba(11,42,74,0.35),inset_0_1px_0_rgba(255,255,255,0.2)] active-filter-btn flex items-center gap-2.5 border border-brand-navy-light">
            <span class="icon-badge-relieve">
              <svg class="w-4 h-4 text-brand-navy" viewBox="0 0 24 24" fill="none">
                <rect x="4" y="2" width="16" height="20" rx="1.5" stroke="currentColor" stroke-width="1.8" fill="#F8FAFC"/>
                <rect x="6.5" y="4.5" width="11" height="6.5" rx="0.8" fill="#BAE6FD" stroke="#38BDF8" stroke-width="1"/>
                <rect x="6.5" y="12.5" width="11" height="7.5" rx="0.8" fill="#BAE6FD" stroke="#38BDF8" stroke-width="1"/>
                <circle cx="15.5" cy="12" r="1.2" fill="#F59E0B"/>
                <path d="M8 6.5l8 2.5" stroke="#FFFFFF" stroke-width="1" stroke-linecap="round" opacity="0.85"/>
              </svg>
            </span>
            <span>Puertas (Vidrio & Aluminio)</span>
          </button>

          <!-- Ventanas -->
          <button onclick="filterSegment('ventanas')" id="seg-btn-ventanas" class="px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer bg-white hover:bg-slate-50 text-slate-700 flex items-center gap-2.5 border border-slate-200/90 shadow-[0_1px_3px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,0.9)] hover:shadow-md hover:-translate-y-0.5">
            <span class="icon-badge-relieve">
              <svg class="w-4 h-4 text-brand-navy" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="3" width="18" height="18" rx="1.5" stroke="currentColor" stroke-width="1.8" fill="#F8FAFC"/>
                <line x1="12" y1="3" x2="12" y2="21" stroke="currentColor" stroke-width="1.5"/>
                <line x1="3" y1="12" x2="21" y2="12" stroke="currentColor" stroke-width="1.5"/>
                <rect x="4.5" y="4.5" width="6" height="6" fill="#BAE6FD" fill-opacity="0.75"/>
                <rect x="13.5" y="4.5" width="6" height="6" fill="#BAE6FD" fill-opacity="0.75"/>
                <rect x="4.5" y="13.5" width="6" height="6" fill="#BAE6FD" fill-opacity="0.75"/>
                <rect x="13.5" y="13.5" width="6" height="6" fill="#BAE6FD" fill-opacity="0.75"/>
                <path d="M5.5 5.5l4 4M14.5 5.5l4 4" stroke="#FFFFFF" stroke-width="1" stroke-linecap="round" opacity="0.9"/>
              </svg>
            </span>
            <span>Ventanas & Series</span>
          </button>

          <!-- Mamparas -->
          <button onclick="filterSegment('mamparas')" id="seg-btn-mamparas" class="px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer bg-white hover:bg-slate-50 text-slate-700 flex items-center gap-2.5 border border-slate-200/90 shadow-[0_1px_3px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,0.9)] hover:shadow-md hover:-translate-y-0.5">
            <span class="icon-badge-relieve">
              <svg class="w-4 h-4 text-brand-navy" viewBox="0 0 24 24" fill="none">
                <rect x="2" y="4" width="20" height="16" rx="1.5" stroke="currentColor" stroke-width="1.8"/>
                <rect x="3.5" y="5.5" width="9" height="13" rx="0.8" fill="#BAE6FD" fill-opacity="0.7" stroke="currentColor" stroke-width="1.2"/>
                <rect x="11.5" y="5.5" width="9" height="13" rx="0.8" fill="#E0F2FE" fill-opacity="0.8" stroke="currentColor" stroke-width="1.2"/>
                <path d="M10 9v6M18 9v6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
                <path d="M5 7l6 4M13 7l6 4" stroke="#FFFFFF" stroke-width="1" stroke-linecap="round" opacity="0.85"/>
              </svg>
            </span>
            <span>Mamparas Panorámicas</span>
          </button>

          <!-- Fachadas / Muros Cortina -->
          <button onclick="filterSegment('fachadas')" id="seg-btn-fachadas" class="px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer bg-white hover:bg-slate-50 text-slate-700 flex items-center gap-2.5 border border-slate-200/90 shadow-[0_1px_3px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,0.9)] hover:shadow-md hover:-translate-y-0.5">
            <span class="icon-badge-relieve">
              <svg class="w-4 h-4 text-brand-navy" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="2" width="18" height="20" rx="1.5" stroke="currentColor" stroke-width="1.8" fill="#0284C7" fill-opacity="0.25"/>
                <line x1="12" y1="2" x2="12" y2="22" stroke="currentColor" stroke-width="1.2" stroke-dasharray="2 2"/>
                <line x1="3" y1="12" x2="21" y2="12" stroke="currentColor" stroke-width="1.2" stroke-dasharray="2 2"/>
                <circle cx="12" cy="12" r="2.2" fill="#E2E8F0" stroke="currentColor" stroke-width="1.2"/>
                <path d="M10 10l-2-2M14 10l2-2M10 14l-2 2M14 14l2 2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
              </svg>
            </span>
            <span>Muros Cortina & Spider</span>
          </button>

          <!-- Duchas -->
          <button onclick="filterSegment('duchas')" id="seg-btn-duchas" class="px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer bg-white hover:bg-slate-50 text-slate-700 flex items-center gap-2.5 border border-slate-200/90 shadow-[0_1px_3px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,0.9)] hover:shadow-md hover:-translate-y-0.5">
            <span class="icon-badge-relieve">
              <svg class="w-4 h-4 text-brand-navy" viewBox="0 0 24 24" fill="none">
                <path d="M4 4h7a2 2 0 0 1 2 2v2" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
                <path d="M10 8h6l1.5 3h-9L10 8z" fill="#0284C7" stroke="currentColor" stroke-width="1.2"/>
                <rect x="15" y="6" width="6" height="15" rx="1" fill="#BAE6FD" fill-opacity="0.75" stroke="currentColor" stroke-width="1.4"/>
                <path d="M10 13l-1 2M13 13v2M12 16v2" stroke="#38BDF8" stroke-width="1.4" stroke-linecap="round"/>
              </svg>
            </span>
            <span>Mamparas de Ducha</span>
          </button>

          <!-- Techos -->
          <button onclick="filterSegment('techos')" id="seg-btn-techos" class="px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer bg-white hover:bg-slate-50 text-slate-700 flex items-center gap-2.5 border border-slate-200/90 shadow-[0_1px_3px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,0.9)] hover:shadow-md hover:-translate-y-0.5">
            <span class="icon-badge-relieve">
              <svg class="w-4 h-4 text-brand-navy" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="7" r="3" fill="#F59E0B" stroke="#D97706" stroke-width="1"/>
                <path d="M12 2v2M6.5 4.5l1.5 1.5M17.5 4.5l-1.5 1.5" stroke="#F59E0B" stroke-width="1.4" stroke-linecap="round"/>
                <path d="M3 13l18-2M3 17l18-2M3 21l18-2" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
                <line x1="6" y1="12" x2="6" y2="21" stroke="currentColor" stroke-width="1.4"/>
                <line x1="18" y1="11" x2="18" y2="20" stroke="currentColor" stroke-width="1.4"/>
              </svg>
            </span>
            <span>Techos Sol y Sombra</span>
          </button>

          <!-- Acero Inox -->
          <button onclick="filterSegment('acero')" id="seg-btn-acero" class="px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer bg-white hover:bg-slate-50 text-slate-700 flex items-center gap-2.5 border border-slate-200/90 shadow-[0_1px_3px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,0.9)] hover:shadow-md hover:-translate-y-0.5">
            <span class="icon-badge-relieve">
              <svg class="w-4 h-4 text-brand-navy" viewBox="0 0 24 24" fill="none">
                <path d="M3 6h18" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/>
                <path d="M3 18h18" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
                <line x1="5" y1="6" x2="5" y2="20" stroke="currentColor" stroke-width="1.8"/>
                <line x1="10" y1="6" x2="10" y2="20" stroke="currentColor" stroke-width="1.4"/>
                <line x1="14" y1="6" x2="14" y2="20" stroke="currentColor" stroke-width="1.4"/>
                <line x1="19" y1="6" x2="19" y2="20" stroke="currentColor" stroke-width="1.8"/>
                <path d="M3 6.5h18" stroke="#FFFFFF" stroke-width="0.8" opacity="0.85"/>
              </svg>
            </span>
            <span>Barandas & Acero Inox</span>
          </button>

        </div>

        <!-- BANNER DE ACCESO DIRECTO CUANDO SE FILTRA POR SEGMENTO (Ej. Puertas) -->
        <div id="segment-quick-action" class="hidden bg-brand-mist border border-brand-glass/40 rounded-2xl p-4 sm:p-5 mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 id="segment-quick-title" class="font-serif text-lg sm:text-xl font-bold text-brand-navy"></h3>
            <p id="segment-quick-desc" class="text-xs sm:text-sm text-slate-600"></p>
          </div>
          <button id="segment-quick-btn" onclick="openActiveSegmentFullGallery()" class="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-navy hover:bg-brand-navy-dark text-white text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-xl shadow-md transition-all cursor-pointer whitespace-nowrap">
            <svg class="w-4 h-4 stroke-current stroke-2 fill-none" viewBox="0 0 24 24"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"></path></svg>
            <span id="segment-quick-btn-text">Ver Galería Completa de Puertas</span>
          </button>
        </div>

        <!-- Cuadrícula de Categorías Filtradas -->
        <div id="categories-grid" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"></div>

      </div>

    </div>
  </main>

  <!-- 4. OBRAS REALIZADAS EN LIMA (MOSAICO ARQUITECTÓNICO CON FOTOS 100% CORREGIDAS) -->
  <section id="obras" class="py-16 sm:py-24 bg-white border-t border-slate-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div class="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
        <span class="text-xs font-bold uppercase tracking-widest text-brand-navy-light bg-brand-mist px-3 py-1 rounded-full border border-brand-glass/30">
          Portafolio de Obras
        </span>
        <h2 class="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mt-3 mb-4">
          Obras Realizadas en Lima
        </h2>
        <p class="text-slate-600 text-base sm:text-lg leading-relaxed">
          Fachadas integrales, edificios residenciales, muros cortina spider y cerramientos de alta gama ejecutados por Laura Glass Solutions.
        </p>
      </div>

      <div id="obras-mosaic-grid" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"></div>

    </div>
  </section>

  <!-- 5. QUIÉNES SOMOS: DISEÑO EDITORIAL, ASIMÉTRICO Y HUMANO -->
  <section id="nosotros" class="py-20 sm:py-28 bg-white border-t border-slate-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- 1 y 2. TITULAR ASIMÉTRICO + PÁRRAFO + FOTO REAL A LA DERECHA -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start mb-20 sm:mb-28">
        
        <!-- Bloque de Texto (Izquierda) -->
        <div class="lg:col-span-7 space-y-6 text-left">
          <h2 class="font-serif text-3xl sm:text-4xl md:text-5xl text-slate-900 font-semibold leading-[1.18] tracking-tight">
            Hacemos proyectos de ventanas, mamparas, puertas y techos en vidrio, aluminio y acero inoxidable para casas, edificios y oficinas en Lima.
          </h2>
          <p class="text-[17px] sm:text-[18px] text-slate-600 leading-relaxed font-normal max-w-2xl">
            Trabajamos directamente con propietarios, arquitectos y constructoras. Fabricamos en nuestro taller y montamos cada pieza en obra con perfiles herméticos, cristales de seguridad y herrajes de larga duración.
          </p>
        </div>

        <!-- Foto Real a la Derecha (Casi recta, sin marcos decorativos ni sombras de IA) -->
        <div class="lg:col-span-5 text-left">
          <div class="overflow-hidden rounded-[4px] bg-slate-100">
            <img 
              src="imagenes-catalogo/obras-y-fachadas/img_196_950x1425.jpg" 
              alt="Muro cortina en edificio, Lima" 
              loading="lazy"
              class="w-full h-[380px] sm:h-[440px] object-cover object-center"
              onerror="this.onerror=null; this.src='public/' + this.getAttribute('src');"
            />
          </div>
          <p class="mt-2 text-sm text-slate-500 font-medium">
            Muro cortina y ventanas en edificio multifamiliar, Lima.
          </p>
        </div>

      </div>

      <!-- 3. MISIÓN Y VISIÓN SIN TARJETAS (Dos bloques separados por línea fina) -->
      <div class="pt-12 border-t border-slate-200 mb-20 sm:mb-28">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          
          <!-- Misión -->
          <div class="text-left space-y-3">
            <h3 class="font-serif italic text-2xl sm:text-3xl text-brand-navy">
              Misión
            </h3>
            <p class="text-[17px] text-slate-700 leading-relaxed">
              Fabricar e instalar carpintería de aluminio y vidrio con medidas exactas, cierres herméticos y acabados limpios que resistan el paso del tiempo y la humedad de Lima.
            </p>
          </div>

          <!-- Visión -->
          <div class="text-left space-y-3 md:border-l md:border-slate-200 md:pl-16">
            <h3 class="font-serif italic text-2xl sm:text-3xl text-brand-navy">
              Visión
            </h3>
            <p class="text-[17px] text-slate-700 leading-relaxed">
              Ser el taller de referencia en Lima para quienes buscan un trabajo bien hecho, sin intermediarios, con asesoría técnica honesta y entregas a tiempo.
            </p>
          </div>

        </div>
      </div>

      <!-- 4. CÓMO TRABAJAMOS: TRES PASOS CON NÚMEROS GRANDES EN SERIF -->
      <div class="pt-12 border-t border-slate-200 mb-20 sm:mb-28">
        <h3 class="font-serif text-2xl sm:text-3xl font-semibold text-slate-900 mb-10 text-left">
          Cómo trabajamos
        </h3>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 text-left">
          
          <!-- Paso 01 -->
          <div class="space-y-3">
            <div class="font-serif text-4xl sm:text-5xl text-brand-navy font-semibold">
              01
            </div>
            <h4 class="text-base font-bold text-slate-900">
              Tomamos medidas en tu obra
            </h4>
            <p class="text-[15px] sm:text-[16px] text-slate-600 leading-relaxed">
              Vamos al lugar del proyecto, evaluamos vanos, niveles y recomendamos el sistema de aluminio y cristal adecuado.
            </p>
          </div>

          <!-- Paso 02 -->
          <div class="space-y-3">
            <div class="font-serif text-4xl sm:text-5xl text-brand-navy font-semibold">
              02
            </div>
            <h4 class="text-base font-bold text-slate-900">
              Fabricamos a medida
            </h4>
            <p class="text-[15px] sm:text-[16px] text-slate-600 leading-relaxed">
              Cortamos la perfilería, procesamos los cristales y armamos los marcos en taller asegurando escuadra y hermeticidad.
            </p>
          </div>

          <!-- Paso 03 -->
          <div class="space-y-3">
            <div class="font-serif text-4xl sm:text-5xl text-brand-navy font-semibold">
              03
            </div>
            <h4 class="text-base font-bold text-slate-900">
              Instalamos y entregamos
            </h4>
            <p class="text-[15px] sm:text-[16px] text-slate-600 leading-relaxed">
              Montamos las estructuras en obra, calibramos rodamientos y cerraduras, y sellamos perimetralmente para entrega final.
            </p>
          </div>

        </div>
      </div>

      <!-- 5. TIRA DE FOTOS REALES DE OBRAS EN DISTINTAS CATEGORÍAS (Cuadrícula asimétrica) -->
      <div class="pt-12 border-t border-slate-200 mb-16 sm:mb-20">
        <div class="mb-8 text-left">
          <h3 class="font-serif text-2xl sm:text-3xl font-semibold text-slate-900">
            Trabajos en taller y obras instaladas
          </h3>
          <p class="text-[15px] text-slate-500 mt-1">
            Fotografías reales de obras en distintas líneas de carpintería metálica y vidriería en Lima.
          </p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-left">
          
          <!-- Foto 1: Mamparas -->
          <div>
            <div class="overflow-hidden rounded-[4px] bg-slate-100 aspect-[3/4]">
              <img 
                src="imagenes-catalogo/serie-80/img_101_777x1250.jpg" 
                alt="Mampara Serie 80 Hermeti-K" 
                loading="lazy"
                class="w-full h-full object-cover"
                onerror="this.onerror=null; this.src='public/' + this.getAttribute('src');"
              />
            </div>
            <p class="mt-2 text-xs sm:text-sm text-slate-600 font-medium leading-snug">
              Mamparas corredizas Serie 80
            </p>
          </div>

          <!-- Foto 2: Techos sol y sombra -->
          <div>
            <div class="overflow-hidden rounded-[4px] bg-slate-100 aspect-[3/4]">
              <img 
                src="imagenes-catalogo/techos-sol-sombra/img_185_754x565.jpg" 
                alt="Techo sol y sombra" 
                loading="lazy"
                class="w-full h-full object-cover"
                onerror="this.onerror=null; this.src='public/' + this.getAttribute('src');"
              />
            </div>
            <p class="mt-2 text-xs sm:text-sm text-slate-600 font-medium leading-snug">
              Techo sol y sombra en terraza
            </p>
          </div>

          <!-- Foto 3: Puertas de vidrio -->
          <div>
            <div class="overflow-hidden rounded-[4px] bg-slate-100 aspect-[3/4]">
              <img 
                src="imagenes-catalogo/puertas-vidrio/img_146_430x761.jpg" 
                alt="Puerta de cristal templado" 
                loading="lazy"
                class="w-full h-full object-cover"
                onerror="this.onerror=null; this.src='public/' + this.getAttribute('src');"
              />
            </div>
            <p class="mt-2 text-xs sm:text-sm text-slate-600 font-medium leading-snug">
              Puerta batiente de cristal templado
            </p>
          </div>

          <!-- Foto 4: Acero Inox & Balcones -->
          <div>
            <div class="overflow-hidden rounded-[4px] bg-slate-100 aspect-[3/4]">
              <img 
                src="imagenes-catalogo/acero-inoxidable/img_193_942x1415.jpg" 
                alt="Barandas en acero inoxidable" 
                loading="lazy"
                class="w-full h-full object-cover"
                onerror="this.onerror=null; this.src='public/' + this.getAttribute('src');"
              />
            </div>
            <p class="mt-2 text-xs sm:text-sm text-slate-600 font-medium leading-snug">
              Barandas en acero inoxidable AISI 304
            </p>
          </div>

        </div>
      </div>

      <!-- 6. REDES SOCIALES Y CONTACTO: FRANJA AZUL MARINO SÓLIDO (Sin degradados ni brillos) -->
      <div class="bg-brand-navy text-white px-6 py-6 sm:px-8 sm:py-7 rounded-[4px]">
        <div class="flex flex-col md:flex-row items-center justify-between gap-5 text-center md:text-left">
          
          <div>
            <p class="font-serif text-xl sm:text-2xl text-white font-normal">
              Mira nuestras instalaciones en video
            </p>
            <p class="text-xs sm:text-sm text-slate-300 mt-0.5">
              Obras reales grabadas en el sitio de trabajo en Lima.
            </p>
          </div>

          <div class="flex flex-wrap items-center justify-center md:justify-end gap-5 sm:gap-6">
            
            <!-- WhatsApp: Único botón relleno (verde sobrio) -->
            <a 
              href="https://wa.me/51912791992?text=Hola%20Laura%20Glass%20Solutions,%20deseo%20consultar%20por%20un%20proyecto." 
              target="_blank" 
              rel="noopener noreferrer" 
              class="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white px-5 py-2.5 rounded-[4px] font-semibold text-sm transition-colors"
            >
              <svg class="w-4 h-4 fill-white" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/></svg>
              <span>Escribir por WhatsApp</span>
            </a>

            <!-- TikTok: Enlace de texto subrayado con icono monocromo -->
            <a 
              href="https://www.tiktok.com/@vidrerialaura" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="text-white/90 hover:text-white underline underline-offset-4 text-sm font-medium inline-flex items-center gap-1.5 transition-colors"
            >
              <svg class="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.82 4.46 6.34 6.34 0 0 0 1.86-4.46V8.78a8.18 8.18 0 0 0 4.91 1.63v-3.72z"/></svg>
              <span>TikTok @vidrerialaura</span>
            </a>

            <!-- Instagram: Enlace de texto subrayado con icono monocromo -->
            <a 
              href="https://www.instagram.com/serviciolauraglass/" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="text-white/90 hover:text-white underline underline-offset-4 text-sm font-medium inline-flex items-center gap-1.5 transition-colors"
            >
              <svg class="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              <span>Instagram @serviciolauraglass</span>
            </a>

          </div>
        </div>
      </div>

    </div>
  </section>

  <!-- 6. LLAMADO FINAL A LA ACCIÓN COMERCIAL -->
  <section id="contacto" class="py-20 sm:py-28 bg-brand-navy text-white relative overflow-hidden text-center">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
      
      <span class="text-xs font-bold uppercase tracking-widest text-brand-glass border border-brand-glass/30 px-3.5 py-1.5 rounded-full inline-block mb-4">
        Atención Inmediata en Lima
      </span>

      <h2 class="font-serif text-3xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight leading-tight">
        Cotiza tu Proyecto a Medida
      </h2>

      <p class="text-brand-glass text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
        Envíanos tus medidas, planos o fotos por WhatsApp y recibe asesoría técnica personalizada con presupuesto detallado en menos de 24 horas.
      </p>

      <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
        <a href="https://wa.me/51912791992?text=Hola%20Laura%20Glass%20Solutions,%20deseo%20cotizar%20un%20proyecto." target="_blank" class="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-brand-whatsapp hover:bg-brand-whatsapp-dark text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-all hover:scale-105">
          <svg class="w-5 h-5 fill-white" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/></svg>
          <span>Escribir al WhatsApp: 912 791 992</span>
        </a>

        <a href="https://www.tiktok.com/@vidrerialaura" target="_blank" rel="noopener noreferrer" class="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-black hover:bg-neutral-900 text-white font-bold border border-white/30 px-8 py-4 rounded-xl transition-all hover:scale-105">
          <svg class="w-5 h-5 fill-white" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.82 4.46 6.34 6.34 0 0 0 1.86-4.46V8.78a8.18 8.18 0 0 0 4.91 1.63v-3.72z"/></svg>
          <span>Ver Obras en TikTok (@vidrerialaura)</span>
        </a>
      </div>

    </div>
  </section>

  <!-- 7. FOOTER OFICIAL -->
  <footer class="bg-brand-navy-dark text-slate-400 py-12 sm:py-16 border-t border-white/10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        <div class="space-y-4">
          <img src="logo/logo-white.svg" alt="Laura Glass Solutions" class="h-12 w-auto" onerror="this.onerror=null; this.src='public/logo/logo-white.svg';">
          <p class="text-sm leading-relaxed text-slate-300">
            Soluciones integrales en carpintería de aluminio, ventanas termoacústicas, mamparas, muros cortina y acabados en vidrio de seguridad en Lima, Perú.
          </p>
          <div class="pt-2 flex items-center gap-2.5">
            <!-- TikTok -->
            <a href="https://www.tiktok.com/@vidrerialaura" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full bg-white/10 hover:bg-black hover:text-white flex items-center justify-center text-white transition-all cursor-pointer" title="TikTok Oficial @vidrerialaura" aria-label="TikTok">
              <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.82 4.46 6.34 6.34 0 0 0 1.86-4.46V8.78a8.18 8.18 0 0 0 4.91 1.63v-3.72z"/></svg>
            </a>
            <!-- Instagram -->
            <a href="https://www.instagram.com/serviciolauraglass/" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full bg-white/10 hover:bg-pink-600 hover:text-white flex items-center justify-center text-white transition-all cursor-pointer" title="Instagram Oficial @serviciolauraglass" aria-label="Instagram">
              <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
            <!-- Facebook -->
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full bg-white/10 hover:bg-blue-600 hover:text-white flex items-center justify-center text-white transition-all cursor-pointer" title="Facebook Laura Glass" aria-label="Facebook">
              <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <!-- WhatsApp -->
            <a href="https://wa.me/51912791992" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full bg-white/10 hover:bg-brand-whatsapp hover:text-white flex items-center justify-center text-white transition-all cursor-pointer" title="WhatsApp 912 791 992" aria-label="WhatsApp">
              <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/></svg>
            </a>
          </div>
        </div>

        <div>
          <h4 class="font-serif text-white text-lg font-bold mb-4">Líneas de Solución</h4>
          <ul class="space-y-2 text-sm text-slate-300">
            <li><a href="#productos" onclick="filterSegment('puertas')" class="hover:text-brand-glass">Puertas de Vidrio & Aluminio</a></li>
            <li><a href="#productos" onclick="filterSegment('ventanas')" class="hover:text-brand-glass">Ventanas Serie 62, 25 & Nova</a></li>
            <li><a href="#productos" onclick="filterSegment('mamparas')" class="hover:text-brand-glass">Mamparas Serie 80 Hermeti-K</a></li>
            <li><a href="#productos" onclick="filterSegment('duchas')" class="hover:text-brand-glass">Mamparas y Puertas para Ducha</a></li>
            <li><a href="#productos" onclick="filterSegment('fachadas')" class="hover:text-brand-glass">Muros Cortina Spider</a></li>
            <li><a href="#productos" onclick="filterSegment('techos')" class="hover:text-brand-glass">Techos Sol y Sombra</a></li>
          </ul>
        </div>

        <div>
          <h4 class="font-serif text-white text-lg font-bold mb-4">Canales de Contacto</h4>
          <ul class="space-y-3 text-sm text-slate-300">
            <li>
              <span class="block text-xs text-slate-400">WhatsApp Oficial (Único):</span>
              <a href="https://wa.me/51912791992" target="_blank" class="text-white font-bold hover:text-brand-glass flex items-center gap-1.5 mt-0.5">
                <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                +51 912 791 992
              </a>
            </li>
            <li>
              <span class="block text-xs text-slate-400">TikTok Oficial:</span>
              <a href="https://www.tiktok.com/@vidrerialaura" target="_blank" rel="noopener noreferrer" class="text-white hover:text-brand-glass font-medium">@vidrerialaura (10.4K Me gusta)</a>
            </li>
            <li>
              <span class="block text-xs text-slate-400">Instagram Oficial:</span>
              <a href="https://www.instagram.com/serviciolauraglass/" target="_blank" rel="noopener noreferrer" class="text-white hover:text-brand-glass font-medium">@serviciolauraglass</a>
            </li>
            <li>
              <span class="block text-xs text-slate-400">Facebook:</span>
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" class="text-white hover:text-brand-glass font-medium">Laura Glass (Carabayllo, Lima)</a>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="font-serif text-white text-lg font-bold mb-4">Ubicación & Atención</h4>
          <p class="text-sm text-slate-300 leading-relaxed mb-1 font-semibold text-white">
            📍 Carabayllo, Lima 15121
          </p>
          <p class="text-sm text-slate-300 leading-relaxed mb-3">
            Atención e instalaciones técnicas en toda Lima Metropolitana y coordinación a nivel nacional.
          </p>
          <p class="text-xs text-slate-400">
            Horario: Lunes a Sábado de 8:00 AM a 7:00 PM
          </p>
        </div>
      </div>

      <div class="border-t border-white/10 pt-8 text-center text-xs text-slate-500">
        &copy; 2026 Laura Glass Solutions. Todos los derechos reservados. Lima, Perú.
      </div>

    </div>
  </footer>

  <!-- BOTÓN FLOTANTE DE WHATSAPP -->
  <aside class="fixed bottom-6 right-6 z-40 flex items-center gap-3" aria-label="Contacto directo por WhatsApp">
    <div class="hidden sm:block bg-white text-slate-800 text-xs font-bold py-2 px-3.5 rounded-full shadow-lg border border-slate-200">
      ¿En qué podemos ayudarte?
    </div>
    <a
      href="https://wa.me/51912791992?text=Hola%20Laura%20Glass%20Solutions,%20deseo%20asesor%C3%ADa%20para%20un%20proyecto."
      target="_blank"
      rel="noopener noreferrer"
      class="w-14 h-14 bg-brand-whatsapp hover:bg-brand-whatsapp-dark text-white rounded-full flex items-center justify-center shadow-2xl transition-all transform hover:scale-110 animate-pulse-slow"
      aria-label="Escribir por WhatsApp a Laura Glass Solutions"
    >
      <svg class="w-8 h-8 fill-white" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/></svg>
    </a>
  </aside>

  <!-- MODAL DE GALERÍA DE CATEGORÍA / SEGMENTO -->
  <div id="category-modal" class="hidden fixed inset-0 z-50 overflow-y-auto">
    <div class="fixed inset-0 bg-slate-900/85 backdrop-blur-sm modal-backdrop" onclick="closeCategoryModal()"></div>
    <div class="relative min-h-screen flex items-center justify-center p-4 sm:p-6">
      <div class="relative bg-white rounded-3xl max-w-5xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden border border-slate-200">
        
        <!-- Cabecera Modal -->
        <div class="p-5 sm:p-6 border-b border-slate-100 flex items-start justify-between bg-slate-50">
          <div>
            <div class="flex items-center gap-2">
              <span id="modal-category-badge" class="text-xs font-bold uppercase tracking-widest text-brand-navy-light bg-brand-mist px-2.5 py-0.5 rounded-full"></span>
              <span id="modal-category-total" class="text-xs text-slate-500 font-medium"></span>
            </div>
            <h3 id="modal-category-title" class="font-serif text-2xl sm:text-3xl font-bold text-slate-900 mt-1"></h3>
            <p id="modal-category-desc" class="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl"></p>
          </div>
          <button onclick="closeCategoryModal()" class="p-2 rounded-full hover:bg-slate-200 text-slate-500 hover:text-slate-800 transition-colors cursor-pointer">
            <svg class="w-6 h-6 stroke-current stroke-2 fill-none" viewBox="0 0 24 24"><path d="M18 6 6 18M6 6l12 12"></path></svg>
          </button>
        </div>

        <!-- Fotos en Cuadrícula -->
        <div class="p-5 sm:p-6 overflow-y-auto flex-grow">
          <div id="modal-photos-grid" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"></div>
        </div>

        <!-- Footer Modal con CTA WhatsApp -->
        <div class="p-4 sm:p-5 border-t border-slate-100 bg-slate-50 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span class="text-xs text-slate-500 text-center sm:text-left">
            Toca cualquier foto para verla a pantalla completa en alta resolución.
          </span>
          <a id="modal-category-wa-btn" href="#" target="_blank" class="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-whatsapp hover:bg-brand-whatsapp-dark text-white text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-xl transition-all">
            <svg class="w-4 h-4 fill-white" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/></svg>
            <span>Consultar requerimiento por WhatsApp</span>
          </a>
        </div>

      </div>
    </div>
  </div>

  <!-- LIGHTBOX A PANTALLA COMPLETA -->
  <div id="lightbox" class="hidden fixed inset-0 z-50 bg-black/95 flex flex-col justify-between p-4 sm:p-6 backdrop-blur-md">
    
    <!-- Barra superior Lightbox -->
    <div class="flex items-center justify-between text-white z-10">
      <div>
        <p id="lightbox-counter" class="text-xs uppercase tracking-widest text-brand-glass"></p>
        <h4 id="lightbox-title" class="font-serif text-lg sm:text-xl font-bold truncate max-w-md sm:max-w-2xl"></h4>
      </div>
      <button onclick="closeLightbox()" class="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white cursor-pointer transition-colors" title="Cerrar (Esc)">
        <svg class="w-6 h-6 stroke-current stroke-2 fill-none" viewBox="0 0 24 24"><path d="M18 6 6 18M6 6l12 12"></path></svg>
      </button>
    </div>

    <!-- Contenedor Imagen Central con Flechas -->
    <div class="relative flex-grow flex items-center justify-center my-4 overflow-hidden">
      <button onclick="prevLightboxImage()" class="absolute left-2 sm:left-4 z-10 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-all cursor-pointer">
        <svg class="w-6 h-6 stroke-current stroke-2 fill-none" viewBox="0 0 24 24"><path d="m15 18-6-6 6-6"></path></svg>
      </button>

      <img id="lightbox-img" src="" alt="Trabajo Laura Glass" class="max-h-[75vh] max-w-full object-contain rounded-lg shadow-2xl transition-all">

      <button onclick="nextLightboxImage()" class="absolute right-2 sm:right-4 z-10 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-all cursor-pointer">
        <svg class="w-6 h-6 stroke-current stroke-2 fill-none" viewBox="0 0 24 24"><path d="m9 18 6-6-6-6"></path></svg>
      </button>
    </div>

    <!-- Barra inferior Lightbox -->
    <div class="flex flex-col sm:flex-row items-center justify-between gap-3 text-white z-10">
      <p id="lightbox-desc" class="text-xs sm:text-sm text-slate-300 max-w-2xl text-center sm:text-left"></p>
      <a id="lightbox-wa-btn" href="#" target="_blank" class="inline-flex items-center gap-2 bg-brand-whatsapp hover:bg-brand-whatsapp-dark text-white text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-xl shadow-lg transition-all">
        <svg class="w-4 h-4 fill-white" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/></svg>
        <span>Consultar este trabajo por WhatsApp</span>
      </a>
    </div>

  </div>

  <!-- LÓGICA JAVASCRIPT AUTÓNOMA -->
  <script>
    const CATALOGO = ${JSON.stringify(catalogoData)};
    const OBRAS_DESTACADAS = ${JSON.stringify(obrasDestacadas)};

    let currentLightboxImages = [];
    let currentLightboxIndex = 0;
    let currentActiveSegment = 'puertas';
    let currentHeroSlideIndex = 0;
    let heroSlideInterval = null;

    // Control del Slider Horizontal del Hero
    function setHeroSlide(index) {
      currentHeroSlideIndex = index;
      const track = document.getElementById('hero-slider-track');
      if (track) {
        track.style.transform = 'translateX(-' + (index * 33.33333) + '%)';
      }

      // Actualizar indicadores horizontales: barras blancas delgadas
      for (let i = 0; i < 3; i++) {
        const bar = document.getElementById('hero-bar-' + i);
        if (bar) {
          if (i === index) {
            bar.className = 'w-10 sm:w-14 h-1 sm:h-1.5 rounded-full bg-white transition-all cursor-pointer shadow-md';
          } else {
            bar.className = 'w-6 sm:w-8 h-1 sm:h-1.5 rounded-full bg-white/40 hover:bg-white/70 transition-all cursor-pointer';
          }
        }
      }
    }

    function prevHeroSlide() {
      const prev = (currentHeroSlideIndex > 0) ? currentHeroSlideIndex - 1 : 2;
      setHeroSlide(prev);
    }

    function nextHeroSlide() {
      const next = (currentHeroSlideIndex + 1) % 3;
      setHeroSlide(next);
    }

    function startHeroSlider() {
      if (heroSlideInterval) clearInterval(heroSlideInterval);
      heroSlideInterval = setInterval(() => {
        nextHeroSlide();
      }, 4500);
    }

    // Normalizador de texto para búsqueda
    function normalize(text) {
      if (!text) return '';
      return text.toString()
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\\u0300-\\u036f]/g, "")
        .trim();
    }

    // Diccionario de sinónimos peruanos
    const DICCIONARIO_SINONIMOS = {
      'puerta': ['puertas', 'batiente', 'vaiven', 'cristal templado', 'aluminio', 'acceso', 'serie 71', 'serie 35'],
      'puertas': ['puerta', 'batiente', 'vaiven', 'cristal templado', 'aluminio', 'acceso', 'serie 71', 'serie 35'],
      'ducha': ['mampara de ducha', 'puerta de ducha', 'box de ducha', 'bano', 'cristal templado', 'separata'],
      'mampara': ['puerta corrediza', 'mampara de ducha', 'separador', 'serie 25', 'serie 62', 'serie 80'],
      'sol y sombra': ['techo sol y sombra', 'pergola', 'aluminio maderado', 'policarbonato', 'cubierta'],
      'techo': ['sol y sombra', 'pergola', 'policarbonato', 'cubierta'],
      'spider': ['muro cortina', 'arana', 'frente suspendido', 'acero inoxidable', 'fachada'],
      'muro cortina': ['spider', 'piel de vidrio', 'frente suspendido', 'fachada flotante'],
      'ventana': ['proyectante', 'corrediza', 'serie 25', 'serie 62', 'serie 80', 'sistema nova', 'curvo'],
      'europea': ['serie 62', 'corte 45', 'termoacustica'],
      'hermetica': ['serie 80', 'serie 25', 'insulado', 'termoacustica'],
      'templado': ['cristal de seguridad', 'laminado', 'indeci', 'vidrio templado'],
      'laminado': ['pvb', 'indeci', 'seguridad', 'acustico', 'proteccion uv']
    };

    function expandirTerminos(query) {
      const qNorm = normalize(query);
      const expandidos = [qNorm];
      for (const [key, sinonimos] of Object.entries(DICCIONARIO_SINONIMOS)) {
        if (qNorm.includes(key) || key.includes(qNorm)) {
          sinonimos.forEach(s => expandidos.push(normalize(s)));
        }
      }
      return expandidos;
    }

    // Segmentos y Filtros
    const SEGMENTOS_INFO = {
      'puertas': {
        titulo: 'Trabajos en Puertas de Vidrio & Aluminio',
        desc: 'Sistemas batientes, corredizos, vaivén en cristal templado de seguridad y perfiles de aluminio de alta resistencia.',
        btnText: 'Ver todas las fotos de Puertas'
      },
      'ventanas': {
        titulo: 'Sistemas de Ventanas & Línea Europea',
        desc: 'Serie 62 termoacústica corte 45°, Serie 25 residencial, Sistema Nova clásico y ventanas proyectantes curvas.',
        btnText: 'Ver todas las fotos de Ventanas'
      },
      'mamparas': {
        titulo: 'Mamparas Corredizas & Grandes Luces',
        desc: 'Serie 80 Hermeti-K, Serie 25 de gran vano y sistemas corredizos para integración de terrazas y salas.',
        btnText: 'Ver todas las fotos de Mamparas'
      },
      'fachadas': {
        titulo: 'Muros Cortina & Sistema Spider Suspendido',
        desc: 'Fachadas integrales de vidrio para edificios y frentes con arañas articuladas de acero inoxidable.',
        btnText: 'Ver todas las fotos de Muros Cortina'
      },
      'duchas': {
        titulo: 'Mamparas y Puertas para Ducha',
        desc: 'Sistemas Euro suspendidos en acero inoxidable, doble corredizo hermético y separatas de baño.',
        btnText: 'Ver todas las fotos de Duchas'
      },
      'techos': {
        titulo: 'Techos Sol y Sombra & Pérgolas',
        desc: 'Estructuras de aluminio con acabado maderado y cubiertas en cristal templado o policarbonato con protección UV.',
        btnText: 'Ver todas las fotos de Techos'
      },
      'acero': {
        titulo: 'Barandas & Acabados en Acero Inoxidable',
        desc: 'Pasamanos, cortavientos en azoteas, balcones y cerramientos perimetrales en acero quirúrgico AISI 304.',
        btnText: 'Ver todas las fotos de Acero Inox'
      }
    };

    function filterSegment(segmentId) {
      currentActiveSegment = segmentId;

      // Actualizar estilo de botones con relieve
      const inactiveClasses = 'px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer bg-white hover:bg-slate-50 text-slate-700 flex items-center gap-2.5 border border-slate-200/90 shadow-[0_1px_3px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,0.9)] hover:shadow-md hover:-translate-y-0.5';
      const activeClasses = 'px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer bg-brand-navy text-white shadow-[0_3px_8px_rgba(11,42,74,0.35),inset_0_1px_0_rgba(255,255,255,0.2)] active-filter-btn flex items-center gap-2.5 border border-brand-navy-light';

      const allButtons = document.querySelectorAll('#segment-filter-buttons button');
      allButtons.forEach(btn => {
        btn.className = inactiveClasses;
        const svg = btn.querySelector('svg');
        if (svg) svg.classList.add('text-brand-navy');
      });
      const activeBtn = document.getElementById('seg-btn-' + segmentId);
      if (activeBtn) {
        activeBtn.className = activeClasses;
        const svg = activeBtn.querySelector('svg');
        if (svg) svg.classList.remove('text-brand-navy');
      }

      // Actualizar banner rápido
      const quickAction = document.getElementById('segment-quick-action');
      if (segmentId === 'todos') {
        quickAction.classList.add('hidden');
      } else {
        const info = SEGMENTOS_INFO[segmentId];
        if (info) {
          quickAction.classList.remove('hidden');
          document.getElementById('segment-quick-title').textContent = info.titulo;
          document.getElementById('segment-quick-desc').textContent = info.desc;
          document.getElementById('segment-quick-btn-text').textContent = info.btnText;
        }
      }

      renderCategories(segmentId);
    }

    function openActiveSegmentFullGallery() {
      if (currentActiveSegment === 'todos') return;
      
      // Agrupar todas las fotos del segmento seleccionado
      const filteredCategories = CATALOGO.categorias.filter(c => c.segmento === currentActiveSegment);
      let allPhotos = [];
      filteredCategories.forEach(c => {
        allPhotos = allPhotos.concat(c.fotos || []);
      });

      const info = SEGMENTOS_INFO[currentActiveSegment];

      document.getElementById('modal-category-badge').textContent = 'Línea de Proyectos';
      document.getElementById('modal-category-total').textContent = allPhotos.length + ' fotos de obras ejecutadas';
      document.getElementById('modal-category-title').textContent = info ? info.titulo : 'Proyectos de ' + currentActiveSegment;
      document.getElementById('modal-category-desc').textContent = info ? info.desc : 'Galería completa de obras.';
      document.getElementById('modal-category-wa-btn').href = 'https://wa.me/51912791992?text=' + encodeURIComponent('Hola Laura Glass Solutions, me interesa cotizar proyectos de: ' + (info ? info.titulo : currentActiveSegment));

      currentLightboxImages = allPhotos;

      const grid = document.getElementById('modal-photos-grid');
      grid.innerHTML = allPhotos.map((foto, index) => \`
        <div class="group relative aspect-square bg-slate-100 rounded-xl overflow-hidden cursor-pointer border border-slate-200" onclick="openLightboxFromCategory(\${index})">
          <img src="\${foto.ruta}" alt="\${foto.titulo}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" onerror="this.onerror=null; this.src='public/' + this.getAttribute('src');">
          <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <span class="text-white text-xs font-bold uppercase tracking-wider bg-black/60 px-3 py-1.5 rounded-full">
              Ampliar
            </span>
          </div>
          <span class="absolute bottom-2 left-2 bg-black/60 text-white text-[10px] px-2 py-0.5 rounded">
            \${foto.ancho}x\${foto.alto}
          </span>
        </div>
      \`).join('');

      document.getElementById('category-modal').classList.remove('hidden');
      document.body.classList.add('overflow-hidden');
    }

    // Renderizar Categorías en Catálogo General
    function renderCategories(segmentFilter = 'todos') {
      const container = document.getElementById('categories-grid');
      const list = (segmentFilter === 'todos') 
        ? CATALOGO.categorias 
        : CATALOGO.categorias.filter(c => c.segmento === segmentFilter);

      container.innerHTML = list.map(cat => \`
        <div class="group bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col">
          <div class="relative aspect-[4/3] overflow-hidden bg-slate-100 cursor-pointer" onclick="openCategoryModal('\${cat.id}')">
            <img 
              src="\${cat.imagenPortada}" 
              alt="\${cat.nombre}" 
              loading="lazy" 
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              onerror="this.onerror=null; this.src='public/' + this.getAttribute('src');"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
            <span class="absolute top-3 left-3 bg-white/95 backdrop-blur-md text-brand-navy text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
              \${cat.subcategoria || 'Arquitectura'}
            </span>
            <span class="absolute bottom-3 right-3 bg-black/60 backdrop-blur-md text-white text-xs font-semibold px-2.5 py-1 rounded-full">
              \${cat.totalFotos} fotos
            </span>
          </div>

          <div class="p-5 flex flex-col flex-grow">
            <h3 class="font-serif text-xl font-bold text-slate-900 group-hover:text-brand-navy transition-colors mb-2 cursor-pointer" onclick="openCategoryModal('\${cat.id}')">
              \${cat.nombre}
            </h3>
            <p class="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4 line-clamp-2 flex-grow">
              \${cat.descripcionCorta}
            </p>
            <div class="flex items-center gap-2 pt-2 border-t border-slate-100">
              <button onclick="openCategoryModal('\${cat.id}')" class="flex-1 text-xs font-bold uppercase tracking-wider text-brand-navy bg-brand-mist hover:bg-brand-glass/30 py-2.5 rounded-lg transition-colors cursor-pointer text-center">
                Ver Galería
              </button>
              <a href="https://wa.me/51912791992?text=\${encodeURIComponent('Hola Laura Glass Solutions, me interesa información y presupuesto sobre: ' + cat.nombre)}" target="_blank" class="p-2.5 rounded-lg bg-emerald-50 hover:bg-brand-whatsapp text-brand-whatsapp hover:text-white transition-all cursor-pointer" title="Consultar por WhatsApp">
                <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/></svg>
              </a>
            </div>
          </div>
        </div>
      \`).join('');
    }

    // Manejo de la búsqueda en vivo
    function handleSearchInput(query) {
      const clearBtn = document.getElementById('search-clear-btn');
      const searchSection = document.getElementById('search-results-section');
      const catalogSection = document.getElementById('catalog-grid-section');
      const resultsGrid = document.getElementById('search-results-grid');
      const emptyState = document.getElementById('search-empty-state');
      const queryDisplay = document.getElementById('search-query-display');
      const countDisplay = document.getElementById('search-count-display');

      if (!query || !query.trim()) {
        clearBtn.classList.add('hidden');
        searchSection.classList.add('hidden');
        catalogSection.classList.remove('hidden');
        return;
      }

      clearBtn.classList.remove('hidden');
      searchSection.classList.remove('hidden');
      catalogSection.classList.add('hidden');

      queryDisplay.textContent = query;

      const terms = expandirTerminos(query);
      const matches = [];

      CATALOGO.categorias.forEach(cat => {
        let matchScore = 0;
        const nombreNorm = normalize(cat.nombre);
        const descNorm = normalize(cat.descripcionCorta);
        const keywordsNorm = (cat.palabrasClave || []).map(normalize);

        for (const t of terms) {
          if (nombreNorm.includes(t)) matchScore += 10;
          if (descNorm.includes(t)) matchScore += 5;
          if (keywordsNorm.some(k => k.includes(t) || t.includes(k))) matchScore += 8;
        }

        if (matchScore > 0) {
          matches.push({
            id: cat.id,
            nombre: cat.nombre,
            categoriaNombre: cat.subcategoria || cat.nombre,
            descripcion: cat.descripcionCorta,
            imagen: cat.imagenPortada,
            score: matchScore,
            totalFotos: cat.totalFotos
          });
        }
      });

      matches.sort((a, b) => b.score - a.score);

      if (matches.length === 0) {
        resultsGrid.innerHTML = '';
        resultsGrid.classList.add('hidden');
        emptyState.classList.remove('hidden');
        countDisplay.textContent = '0 resultados';
        document.getElementById('search-empty-wa-btn').href = 'https://wa.me/51912791992?text=' + encodeURIComponent('Hola Laura Glass Solutions, estoy buscando: "' + query + '". ¿Me podrían asesorar si fabrican esta solución?');
      } else {
        emptyState.classList.add('hidden');
        resultsGrid.classList.remove('hidden');
        countDisplay.textContent = matches.length + (matches.length === 1 ? ' producto coincidente' : ' productos coincidentes');

        resultsGrid.innerHTML = matches.map(item => \`
          <div class="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg transition-all flex flex-col">
            <div class="relative aspect-[4/3] overflow-hidden bg-slate-100 cursor-pointer" onclick="openCategoryModal('\${item.id}')">
              <img src="\${item.imagen}" alt="\${item.nombre}" class="w-full h-full object-cover hover:scale-105 transition-transform duration-300" onerror="this.onerror=null; this.src='public/' + this.getAttribute('src');">
              <span class="absolute top-2.5 left-2.5 bg-white/95 text-brand-navy text-[11px] font-bold px-2 py-0.5 rounded-full uppercase">
                \${item.categoriaNombre}
              </span>
            </div>
            <div class="p-4 sm:p-5 flex flex-col flex-grow">
              <h4 class="font-serif text-lg font-bold text-slate-900 mb-1 cursor-pointer hover:text-brand-navy" onclick="openCategoryModal('\${item.id}')">
                \${item.nombre}
              </h4>
              <p class="text-xs text-slate-600 line-clamp-2 mb-4 flex-grow">\${item.descripcion}</p>
              <div class="flex items-center gap-2 pt-2 border-t border-slate-100">
                <button onclick="openCategoryModal('\${item.id}')" class="flex-1 text-xs font-bold uppercase tracking-wider text-brand-navy bg-slate-100 hover:bg-slate-200 py-2 rounded-lg transition-colors cursor-pointer text-center">
                  Ver Fotos (\${item.totalFotos})
                </button>
                <a href="https://wa.me/51912791992?text=\${encodeURIComponent('Hola Laura Glass Solutions, me interesa consultar por: ' + item.nombre)}" target="_blank" class="p-2 rounded-lg bg-brand-whatsapp text-white transition-all" title="Consultar por WhatsApp">
                  <svg class="w-4 h-4 fill-white" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/></svg>
                </a>
              </div>
            </div>
          </div>
        \`).join('');
      }
    }

    function clearSearch() {
      const input = document.getElementById('search-input');
      input.value = '';
      handleSearchInput('');
      input.focus();
    }

    function setSearchChip(term) {
      const input = document.getElementById('search-input');
      input.value = term;
      handleSearchInput(term);
      document.getElementById('productos').scrollIntoView({ behavior: 'smooth' });
    }

    function focusSearch() {
      const input = document.getElementById('search-input');
      input.focus();
      input.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    function toggleMobileMenu() {
      const menu = document.getElementById('mobile-menu');
      menu.classList.toggle('hidden');
    }

    // Modal de Categoría
    function openCategoryModal(catId) {
      const cat = CATALOGO.categorias.find(c => c.id === catId);
      if (!cat) return;

      document.getElementById('modal-category-badge').textContent = cat.subcategoria || 'Línea';
      document.getElementById('modal-category-total').textContent = cat.totalFotos + ' fotos de obras';
      document.getElementById('modal-category-title').textContent = cat.nombre;
      document.getElementById('modal-category-desc').textContent = cat.descripcionCorta;
      document.getElementById('modal-category-wa-btn').href = 'https://wa.me/51912791992?text=' + encodeURIComponent('Hola Laura Glass Solutions, me interesa información y presupuesto sobre: ' + cat.nombre);

      currentLightboxImages = cat.fotos || [];

      const grid = document.getElementById('modal-photos-grid');
      grid.innerHTML = (cat.fotos || []).map((foto, index) => \`
        <div class="group relative aspect-square bg-slate-100 rounded-xl overflow-hidden cursor-pointer border border-slate-200" onclick="openLightboxFromCategory(\${index})">
          <img src="\${foto.ruta}" alt="\${foto.titulo}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" onerror="this.onerror=null; this.src='public/' + this.getAttribute('src');">
          <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <span class="text-white text-xs font-bold uppercase tracking-wider bg-black/60 px-3 py-1.5 rounded-full">
              Ampliar Foto
            </span>
          </div>
          <span class="absolute bottom-2 left-2 bg-black/60 text-white text-[10px] px-2 py-0.5 rounded">
            \${foto.ancho}x\${foto.alto}
          </span>
        </div>
      \`).join('');

      document.getElementById('category-modal').classList.remove('hidden');
      document.body.classList.add('overflow-hidden');
    }

    function closeCategoryModal() {
      document.getElementById('category-modal').classList.add('hidden');
      document.body.classList.remove('overflow-hidden');
    }

    // Lightbox a Pantalla Completa
    function openLightboxFromCategory(index) {
      currentLightboxIndex = index;
      renderLightboxImage();
      document.getElementById('lightbox').classList.remove('hidden');
    }

    function openLightboxSingle(image) {
      currentLightboxImages = [image];
      currentLightboxIndex = 0;
      renderLightboxImage();
      document.getElementById('lightbox').classList.remove('hidden');
    }

    function renderLightboxImage() {
      if (!currentLightboxImages.length) return;
      const foto = currentLightboxImages[currentLightboxIndex];
      const imgEl = document.getElementById('lightbox-img');
      imgEl.src = foto.ruta;
      imgEl.onerror = function() { this.onerror = null; this.src = 'public/' + foto.ruta; };

      document.getElementById('lightbox-counter').textContent = (currentLightboxIndex + 1) + ' de ' + currentLightboxImages.length;
      document.getElementById('lightbox-title').textContent = foto.titulo || 'Trabajo Ejecutado';
      document.getElementById('lightbox-desc').textContent = foto.descripcion || 'Laura Glass Solutions · Lima, Perú';
      document.getElementById('lightbox-wa-btn').href = 'https://wa.me/51912791992?text=' + encodeURIComponent('Hola Laura Glass Solutions, me interesa cotizar una instalación como esta: ' + (foto.titulo || '') + ' (' + foto.ruta + ')');
    }

    function prevLightboxImage() {
      if (!currentLightboxImages.length) return;
      currentLightboxIndex = (currentLightboxIndex > 0) ? currentLightboxIndex - 1 : currentLightboxImages.length - 1;
      renderLightboxImage();
    }

    function nextLightboxImage() {
      if (!currentLightboxImages.length) return;
      currentLightboxIndex = (currentLightboxIndex < currentLightboxImages.length - 1) ? currentLightboxIndex + 1 : 0;
      renderLightboxImage();
    }

    function closeLightbox() {
      document.getElementById('lightbox').classList.add('hidden');
    }

    // Teclas del Lightbox
    window.addEventListener('keydown', (e) => {
      const lb = document.getElementById('lightbox');
      if (!lb.classList.contains('hidden')) {
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') prevLightboxImage();
        if (e.key === 'ArrowRight') nextLightboxImage();
      }
    });

    // Renderizar Mosaico de Obras (con fotos 100% verificadas)
    function renderObras() {
      const container = document.getElementById('obras-mosaic-grid');
      container.innerHTML = OBRAS_DESTACADAS.map((obra, idx) => \`
        <div class="group relative aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all" onclick="openLightboxSingle(OBRAS_DESTACADAS[\${idx}])">
          <img src="\${obra.ruta}" alt="\${obra.titulo}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" onerror="this.onerror=null; this.src='public/' + this.getAttribute('src');">
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
          <div class="absolute bottom-4 left-4 right-4 text-white">
            <span class="text-[10px] uppercase font-bold tracking-wider text-brand-glass block">Obra Real</span>
            <h4 class="font-serif text-base sm:text-lg font-bold leading-snug truncate">\${obra.titulo}</h4>
          </div>
        </div>
      \`).join('');
    }

    // Inicialización al cargar la página
    window.addEventListener('DOMContentLoaded', () => {
      filterSegment('puertas');
      renderObras();
      startHeroSlider();

      // Pausar slider si el usuario interactúa con la búsqueda
      const searchBox = document.getElementById('search-input');
      searchBox.addEventListener('focus', () => {
        if (heroSlideInterval) clearInterval(heroSlideInterval);
      });
      searchBox.addEventListener('blur', () => {
        startHeroSlider();
      });

      // Autofocus en desktop
      const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      if (!isTouch) {
        searchBox.focus();
      }
    });
  </script>

</body>
</html>
`;

// Escribir a todas las ubicaciones correspondientes
const targets = [
  path.join(__dirname, 'index.html'),
  path.join(__dirname, 'dist/index.html'),
  path.join(__dirname, 'CATALOGO_DIGITAL.html'),
  path.join(__dirname, '../CATALOGO_LAURA_GLASS.html')
];

targets.forEach(target => {
  fs.writeFileSync(target, htmlContent, 'utf8');
  console.log('Generado archivo standalone en:', target);
});
