import React from 'react';
import { MessageCircle, Image as ImageIcon, ArrowRight } from 'lucide-react';
import { CategoryItem } from '../../types/catalog';
import { siteConfig } from '../../config/siteConfig';

interface CatalogGridProps {
  categories: CategoryItem[];
  onOpenCategoryModal: (categoryId: string) => void;
}

export const CatalogGrid: React.FC<CatalogGridProps> = ({
  categories,
  onOpenCategoryModal
}) => {
  return (
    <section className="py-12 sm:py-16 bg-slate-50" id="productos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabecera de sección */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-navy-light bg-brand-mist px-3 py-1 rounded-full border border-brand-glass/30">
            Catálogo Oficial 2026
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mt-3 mb-4">
            Nuestros Productos & Soluciones
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Explora cada categoría para ver fotos reales de trabajos ejecutados en Lima. Toca cualquier producto para abrir su galería o consultar directamente a nuestros especialistas.
          </p>
        </div>

        {/* Cuadrícula de Tarjetas de Categoría */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {categories.map((cat) => (
            <article 
              key={cat.id}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 hover:border-brand-glass shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group cursor-pointer"
              onClick={() => onOpenCategoryModal(cat.id)}
            >
              {/* Imagen de portada */}
              <div className="relative h-64 bg-slate-900 overflow-hidden">
                <img
                  src={`/${cat.imagenPortada}`}
                  alt={cat.nombre}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                
                {/* Conteo de fotos badge */}
                <div className="absolute top-3 right-3 bg-brand-navy-dark/90 text-white text-xs font-bold px-3 py-1 rounded-full backdrop-blur-md flex items-center gap-1.5 border border-white/20">
                  <ImageIcon className="w-3.5 h-3.5 text-brand-glass" />
                  <span>{cat.totalFotos} fotos</span>
                </div>

                <div className="absolute bottom-3 left-4 right-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-glass drop-shadow">
                    Laura Glass Solutions
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-white drop-shadow-md leading-tight">
                    {cat.nombre}
                  </h3>
                </div>
              </div>

              {/* Cuerpo de la tarjeta */}
              <div className="p-5 sm:p-6 flex flex-col flex-grow bg-white">
                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                  {cat.descripcionCorta}
                </p>

                {/* Botones de acción */}
                <div className="pt-4 border-t border-slate-100 flex items-center gap-2.5" onClick={(e) => e.stopPropagation()}>
                  <button
                    onClick={() => onOpenCategoryModal(cat.id)}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 text-xs sm:text-sm font-bold text-brand-navy bg-brand-mist/70 hover:bg-brand-mist py-2.5 px-3 rounded-xl transition-colors cursor-pointer"
                  >
                    <span>Ver Galería</span>
                    <ArrowRight className="w-4 h-4 text-brand-navy-light" />
                  </button>
                  
                  <a
                    href={siteConfig.getWhatsAppUrl(cat.nombre)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 bg-brand-whatsapp hover:bg-brand-whatsapp-dark text-white text-xs sm:text-sm font-bold py-2.5 px-4 rounded-xl shadow-sm transition-all"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>Consultar</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
