/**
 * LAURA GLASS SOLUTIONS - PROYECTOS POR CATEGORÍA
 * Manejo de parámetros de URL, filtrado dinámico y visor Lightbox
 */

document.addEventListener('DOMContentLoaded', () => {
  initProjectsPage();
  initLightbox();
});

function initProjectsPage() {
  const container = document.getElementById('projectsGrid');
  const tabs = document.querySelectorAll('#projectCategoryTabs .filter-tab');
  const catTitle = document.getElementById('catTitle');
  const catDesc = document.getElementById('catDesc');
  const catCount = document.getElementById('catCountBadge');

  if (!container || !window.LAURA_DATA) return;

  // Obtener categoría desde parámetro URL o hash (?cat=fachadas o #fachadas)
  const urlParams = new URLSearchParams(window.location.search);
  let initialCat = urlParams.get('cat') || window.location.hash.replace('#', '') || 'todos';

  const categoryInfo = {
    todos: {
      titulo: "Catálogo Completo de Obras",
      desc: "Explora nuestra amplia trayectoria en fachadas integrales, mamparas residenciales, duchas y barandas en Lima.",
    },
    fachadas: {
      titulo: "Muros Cortina & Fachadas Spider",
      desc: "Proyectos en torres residenciales y edificios comerciales con cristales reflejantes, arañas inox y piel de vidrio.",
    },
    residencial: {
      titulo: "Ventanas & Mamparas Residenciales",
      desc: "Instalaciones en casas y departamentos dúplex con Serie 62 corte 45°, Serie 80 Hermeti-K y Serie 25.",
    },
    duchas: {
      titulo: "Mamparas de Ducha Modelo Euro",
      desc: "Sistemas suspendidos con barra de acero inoxidable, cristales templados de 8mm y arenados decorativos.",
    },
    puertas: {
      titulo: "Puertas de Aluminio & Vidrio",
      desc: "Puertas batientes Serie 71, modelos con textura madera noble y puertas comerciales con tiradores de acero inox.",
    },
    barandas: {
      titulo: "Barandas Inox & Cortavientos",
      desc: "Protección perimetral con cristal templado para balcones, piscinas, escaleras y azoteas frente al viento.",
    },
    'techos-oficinas': {
      titulo: "Techos Sol y Sombra & Oficinas",
      desc: "Estructuras en aluminio arquitectónico con policarbonato UV y separaciones acústicas para despachos corporativos.",
    }
  };

  function renderCategory(cat) {
    // Actualizar tabs activas
    tabs.forEach(t => {
      if (t.getAttribute('data-cat') === cat) {
        t.classList.add('active');
      } else {
        t.classList.remove('active');
      }
    });

    const info = categoryInfo[cat] || categoryInfo.todos;
    catTitle.textContent = info.titulo;
    catDesc.textContent = info.desc;

    // Filtrar proyectos
    const allWorks = window.LAURA_DATA.galeriaCompleta;
    const filtered = cat === 'todos' 
      ? allWorks 
      : allWorks.filter(w => w.categoria === cat);

    catCount.textContent = `${filtered.length} Obras Disponibles`;

    // Renderizar tarjetas de proyecto altamente comerciales
    container.innerHTML = filtered.map(item => `
      <div class="product-card" data-cat="${item.categoria}">
        <div class="product-thumb" style="height: 260px; cursor: pointer;" onclick="openLightbox('${item.imagen}', '${item.titulo}', '${item.descripcion}')">
          <img src="${item.imagen}" alt="${item.titulo}" loading="lazy" />
          <span class="product-badge" style="background: rgba(2, 132, 199, 0.9);">
            ${item.categoria.toUpperCase()}
          </span>
          <div class="gallery-zoom-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/><line x1="21" y1="3" x2="14" y2="10"/><line x1="3" y1="21" x2="10" y2="14"/></svg>
          </div>
        </div>
        <div class="product-body">
          <h3 class="product-title" style="font-size: 1.15rem; margin-bottom: 0.4rem;">${item.titulo}</h3>
          <p class="product-lead" style="font-size: 0.85rem; margin-bottom: 0.75rem; color: #475569;">${item.descripcion}</p>
          
          <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 0.6rem 0.8rem; margin-bottom: 1.25rem; font-size: 0.78125rem; color: #0369a1; font-weight: 600;">
            ✓ ${item.detalles}
          </div>

          <div class="product-actions" style="margin-top: auto;">
            <a href="https://wa.me/${window.LAURA_DATA.empresa.whatsapp}?text=${encodeURIComponent('Hola Laura Glass Solutions, me interesa cotizar una obra similar a: ' + item.titulo)}" target="_blank" class="btn btn-whatsapp" style="width: 100%; font-size: 0.875rem;">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.969.54 1.861.855 2.796.855 3.18 0 5.767-2.587 5.767-5.766.001-3.182-2.585-5.742-5.767-5.742zm8.469 5.766c0 4.67-3.799 8.469-8.469 8.469-1.488 0-2.883-.393-4.093-1.077l-4.524 1.185 1.207-4.41c-.779-1.29-1.229-2.794-1.229-4.367 0-4.671 3.799-8.469 8.469-8.469 4.67 0 8.469 3.798 8.469 8.469z"/></svg>
              Cotizar Obra Similar
            </a>
          </div>
        </div>
      </div>
    `).join('');
  }

  // Escuchar clics en los botones de filtrado
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const cat = tab.getAttribute('data-cat');
      history.replaceState(null, '', `?cat=${cat}`);
      renderCategory(cat);
    });
  });

  // Render inicial
  renderCategory(initialCat);
}

function initLightbox() {
  const lightbox = document.getElementById('lightboxModal');
  const closeBtn = document.getElementById('lightboxClose');

  if (!lightbox) return;

  closeBtn.addEventListener('click', () => {
    lightbox.classList.remove('open');
  });

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) lightbox.classList.remove('open');
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('open')) {
      lightbox.classList.remove('open');
    }
  });
}

function openLightbox(src, title, desc) {
  const lightbox = document.getElementById('lightboxModal');
  const img = document.getElementById('lightboxImg');
  const caption = document.getElementById('lightboxCaption');

  img.src = src;
  caption.innerHTML = `<strong>${title}</strong><br><span style="font-size:0.875rem;color:#cbd5e1;">${desc}</span>`;
  lightbox.classList.add('open');
}
