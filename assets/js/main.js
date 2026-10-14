/**
 * LAURA GLASS SOLUTIONS - JAVASCRIPT PRINCIPAL (LANDING PAGE COMERCIAL)
 * Funcionalidades interactivas, renderizado dinámico de sistemas, categorías de proyectos y WhatsApp
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initProductCatalog();
  initProjectCategories();
  initFaqAccordion();
  initContactForm();
  initSmoothScroll();
});

/* ==========================================================================
   1. NAVEGACIÓN MÓVIL
   ========================================================================== */
function initMobileNav() {
  const toggleBtn = document.getElementById('mobileNavToggle');
  const navMenu = document.getElementById('navMenu');
  
  if (!toggleBtn || !navMenu) return;

  toggleBtn.addEventListener('click', () => {
    navMenu.classList.toggle('open');
    const isOpen = navMenu.classList.contains('open');
    toggleBtn.setAttribute('aria-expanded', isOpen);
  });

  navMenu.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
    });
  });
}

/* ==========================================================================
   2. CATÁLOGO DE SISTEMAS & FILTROS COMERCIALES
   ========================================================================== */
function initProductCatalog() {
  const container = document.getElementById('productsContainer');
  const filterTabs = document.querySelectorAll('.filter-tab');
  
  if (!container || !window.LAURA_DATA) return;

  function renderProducts(category = 'todos') {
    const products = window.LAURA_DATA.productosDestacados;
    const filtered = category === 'todos' 
      ? products 
      : products.filter(p => p.categoria === category);

    container.innerHTML = filtered.map(p => `
      <div class="product-card" data-category="${p.categoria}">
        <div class="product-thumb">
          <img src="${p.imagen}" alt="${p.titulo}" loading="lazy" />
          <span class="product-badge">${p.badge || p.serie}</span>
        </div>
        <div class="product-body">
          <div class="product-series">${p.serie}</div>
          <h3 class="product-title">${p.titulo}</h3>
          <p class="product-lead">${p.tagline}</p>
          
          <div style="background: #f0f9ff; border-left: 3px solid #0284c7; padding: 0.5rem 0.75rem; border-radius: 4px; margin-bottom: 1rem; font-size: 0.8125rem; font-weight: 700; color: #0369a1;">
            ⚡ ${p.beneficioClave || 'Máxima durabilidad y hermeticidad'}
          </div>

          <div class="product-specs">
            ${p.caracteristicas.slice(0, 3).map(spec => `
              <div class="product-spec-item">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                <span>${spec}</span>
              </div>
            `).join('')}
          </div>

          <div class="product-colors">
            <span style="font-size: 0.6875rem; color: #64748b; font-weight:700;">Acabados:</span>
            ${p.colores.map(c => `<span class="color-chip">${c}</span>`).join('')}
          </div>

          <div class="product-actions">
            <button class="btn btn-outline btn-view-details" data-id="${p.id}">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="3" x2="16.65" y2="16.65"/></svg>
              Ficha Técnica
            </button>
            <a href="https://wa.me/${window.LAURA_DATA.empresa.whatsapp}?text=${encodeURIComponent('Hola Laura Glass Solutions, deseo cotizar el sistema: ' + p.titulo)}" target="_blank" class="btn btn-whatsapp">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.969.54 1.861.855 2.796.855 3.18 0 5.767-2.587 5.767-5.766.001-3.182-2.585-5.742-5.767-5.742zm8.469 5.766c0 4.67-3.799 8.469-8.469 8.469-1.488 0-2.883-.393-4.093-1.077l-4.524 1.185 1.207-4.41c-.779-1.29-1.229-2.794-1.229-4.367 0-4.671 3.799-8.469 8.469-8.469 4.67 0 8.469 3.798 8.469 8.469z"/></svg>
              Cotizar
            </a>
          </div>
        </div>
      </div>
    `).join('');

    container.querySelectorAll('.btn-view-details').forEach(btn => {
      btn.addEventListener('click', () => {
        openProductModal(btn.getAttribute('data-id'));
      });
    });
  }

  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      filterTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      renderProducts(tab.getAttribute('data-category'));
    });
  });

  renderProducts('todos');
}

/* ==========================================================================
   3. SHOWCASE DE CATEGORÍAS DE PROYECTOS (ENLACES A OTRA PÁGINA)
   ========================================================================== */
function initProjectCategories() {
  const container = document.getElementById('projectCategoriesContainer');
  if (!container || !window.LAURA_DATA) return;

  const cats = window.LAURA_DATA.categoriasProyectos;
  container.innerHTML = cats.map(cat => `
    <article class="category-showcase-card">
      <div class="category-showcase-thumb">
        <img src="${cat.imagenPrincipal}" alt="${cat.nombre}" loading="lazy" />
        <span class="category-badge-count">${cat.conteo}</span>
      </div>
      <div class="category-showcase-body">
        <h3 class="category-showcase-title">${cat.nombre}</h3>
        <p class="category-showcase-desc">${cat.descripcion}</p>

        <div class="category-chips-list">
          ${cat.sistemasUsados.map(s => `<span class="category-chip">${s}</span>`).join('')}
        </div>

        <a href="proyectos.html?cat=${cat.id}" class="category-btn-view">
          <span>Ver Obras de esta Categoría</span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
        </a>
      </div>
    </article>
  `).join('');
}

/* ==========================================================================
   4. MODAL DE PRODUCTO / FICHA TÉCNICA
   ========================================================================== */
function openProductModal(productId) {
  const product = window.LAURA_DATA.productosDestacados.find(p => p.id === productId);
  if (!product) return;

  const modalBackdrop = document.getElementById('productModal');
  const modalHero = document.getElementById('modalHeroImg');
  const modalBadge = document.getElementById('modalBadge');
  const modalTitle = document.getElementById('modalTitle');
  const modalDesc = document.getElementById('modalDesc');
  const modalSpecs = document.getElementById('modalSpecsList');
  const modalColors = document.getElementById('modalColorsList');
  const modalGlasses = document.getElementById('modalGlassList');
  const modalQuoteBtn = document.getElementById('modalQuoteBtn');

  modalHero.src = product.imagen;
  modalBadge.textContent = product.serie;
  modalTitle.textContent = product.titulo;
  modalDesc.textContent = product.tagline;

  modalSpecs.innerHTML = product.caracteristicas.map(c => `
    <li style="display:flex;align-items:flex-start;gap:0.5rem;margin-bottom:0.4rem;font-size:0.9rem;color:#334155;">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0284c7" stroke-width="2.5" style="flex-shrink:0;margin-top:2px;"><polyline points="20 6 9 17 4 12"/></svg>
      <span>${c}</span>
    </li>
  `).join('');

  modalColors.innerHTML = product.colores.map(c => `<span class="color-chip" style="font-size:0.8rem;padding:0.25rem 0.6rem;">${c}</span>`).join('');
  modalGlasses.innerHTML = product.vidriosCompatibles.map(g => `<span class="color-chip" style="background:#e0f2fe;border-color:#bae6fd;color:#0369a1;font-size:0.8rem;padding:0.25rem 0.6rem;">${g}</span>`).join('');

  const waText = encodeURIComponent(`Hola Laura Glass Solutions, deseo cotizar una instalación del sistema: ${product.titulo}`);
  modalQuoteBtn.href = `https://wa.me/${window.LAURA_DATA.empresa.whatsapp}?text=${waText}`;

  modalBackdrop.classList.add('open');
}

const modalClose = document.getElementById('modalCloseBtn');
if (modalClose) {
  modalClose.addEventListener('click', () => {
    document.getElementById('productModal').classList.remove('open');
  });
}

window.addEventListener('click', (e) => {
  const modal = document.getElementById('productModal');
  if (e.target === modal) {
    modal.classList.remove('open');
  }
});

/* ==========================================================================
   5. FAQ ACCORDION
   ========================================================================== */
function initFaqAccordion() {
  const container = document.getElementById('faqContainer');
  if (!container || !window.LAURA_DATA) return;

  container.innerHTML = window.LAURA_DATA.faqs.map((faq, i) => `
    <div class="faq-item ${i === 0 ? 'active' : ''}">
      <button class="faq-question">
        <span>${faq.pregunta}</span>
        <span class="faq-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>
        </span>
      </button>
      <div class="faq-answer">
        <p>${faq.respuesta}</p>
      </div>
    </div>
  `).join('');

  container.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.parentElement;
      const wasActive = item.classList.contains('active');
      
      container.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
      
      if (!wasActive) {
        item.classList.add('active');
      }
    });
  });
}

/* ==========================================================================
   6. FORMULARIO DE CONTACTO DIRECTO
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const nombre = document.getElementById('contactName').value.trim();
    const tel = document.getElementById('contactPhone').value.trim();
    const servicio = document.getElementById('contactService').value;
    const msg = document.getElementById('contactMsg').value.trim();

    if (!nombre || !tel) {
      alert('Por favor ingrese su nombre y teléfono para responderle.');
      return;
    }

    const waMsg = `Hola Laura Glass Solutions 👋\nSoy: ${nombre}\nTeléfono/WhatsApp: ${tel}\nInteresado en: ${servicio}\nDetalles: ${msg || 'Deseo solicitar presupuesto y asesoría en obra.'}`;
    window.open(`https://wa.me/${window.LAURA_DATA.empresa.whatsapp}?text=${encodeURIComponent(waMsg)}`, '_blank');
    
    form.reset();
  });
}

/* ==========================================================================
   7. SCROLL SUAVE
   ========================================================================== */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}
