import React from 'react';
import { MessageCircle, Image as ImageIcon, ArrowLeft, HelpCircle } from 'lucide-react';
import { SearchableItem } from '../../utils/searchEngine';
import { siteConfig } from '../../config/siteConfig';

interface SearchResultsProps {
  query: string;
  results: SearchableItem[];
  onClearSearch: () => void;
  onOpenCategoryModal: (categoryId: string) => void;
}

export const SearchResults: React.FC<SearchResultsProps> = ({
  query,
  results,
  onClearSearch,
  onOpenCategoryModal
}) => {
  return (
    <section className="py-10 sm:py-14 bg-white" id="resultados-busqueda">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabecera de resultados */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-slate-200">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-navy-light mb-1">
              <span>Resultados de Búsqueda</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900">
              Coincidencias para <span className="text-brand-navy">"{query}"</span>
            </h2>
          </div>

          <button
            onClick={onClearSearch}
            className="inline-flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-brand-navy bg-slate-100 hover:bg-slate-200 px-4 py-2 rounded-lg transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Volver al Catálogo Completo</span>
          </button>
        </div>

        {/* SI NO HAY RESULTADOS */}
        {results.length === 0 ? (
          <div className="text-center py-16 px-4 max-w-lg mx-auto bg-slate-50 border border-slate-200 rounded-2xl shadow-sm">
            <div className="w-16 h-16 mx-auto mb-4 bg-brand-mist text-brand-navy rounded-full flex items-center justify-center">
              <HelpCircle className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-slate-900 mb-2">
              No encontramos "{query}", pero podemos ayudarte
            </h3>
            <p className="text-slate-600 text-sm sm:text-base mb-6 leading-relaxed">
              En Laura Glass Solutions fabricamos todo tipo de estructuras y cerramientos a medida en vidrio, aluminio y uPVC. Envíanos tu consulta directa y un especialista te responderá al instante.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={siteConfig.getWhatsAppUrl(`Consulta sobre ${query}`)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-whatsapp hover:bg-brand-whatsapp-dark text-white font-bold px-6 py-3 rounded-xl shadow-md transition-all"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>Consultar por WhatsApp</span>
              </a>
              <button
                onClick={onClearSearch}
                className="w-full sm:w-auto text-sm font-semibold text-slate-700 bg-white border border-slate-300 hover:bg-slate-50 px-5 py-3 rounded-xl transition-colors cursor-pointer"
              >
                Limpiar Búsqueda
              </button>
            </div>
          </div>
        ) : (
          /* GRILLA DE RESULTADOS */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {results.map((item) => (
              <article 
                key={item.id}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-brand-glass/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                {/* Imagen destacada */}
                <div 
                  className="relative h-60 bg-slate-900 overflow-hidden cursor-pointer"
                  onClick={() => onOpenCategoryModal(item.categoriaId)}
                >
                  <img
                    src={`/${item.imagen}`}
                    alt={item.nombre}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                  
                  <span className="absolute top-3 left-3 bg-brand-navy/90 text-brand-glass text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full backdrop-blur-sm border border-brand-glass/20">
                    {item.categoriaNombre}
                  </span>

                  <div className="absolute bottom-3 right-3 bg-white/20 hover:bg-white/30 text-white text-xs font-semibold px-2.5 py-1 rounded-md backdrop-blur-sm flex items-center gap-1">
                    <ImageIcon className="w-3.5 h-3.5" />
                    <span>Ver fotos</span>
                  </div>
                </div>

                {/* Contenido de la tarjeta */}
                <div className="p-5 sm:p-6 flex flex-col flex-grow">
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 mb-2 leading-snug group-hover:text-brand-navy transition-colors">
                    {item.nombre}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                    {item.descripcionCorta}
                  </p>

                  {/* Acciones */}
                  <div className="pt-4 border-t border-slate-100 flex items-center gap-2">
                    <button
                      onClick={() => onOpenCategoryModal(item.categoriaId)}
                      className="flex-1 text-xs sm:text-sm font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 py-2.5 px-3 rounded-xl transition-colors cursor-pointer text-center"
                    >
                      Ver Galería
                    </button>
                    
                    <a
                      href={siteConfig.getWhatsAppUrl(item.nombre)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 bg-brand-whatsapp hover:bg-brand-whatsapp-dark text-white text-xs sm:text-sm font-bold py-2.5 px-3 rounded-xl shadow-sm transition-all text-center"
                    >
                      <MessageCircle className="w-4 h-4 fill-white" />
                      <span>Consultar</span>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
