import React from 'react';
import { X, MessageCircle, Maximize2 } from 'lucide-react';
import { CategoryItem } from '../../types/catalog';
import { siteConfig } from '../../config/siteConfig';

interface CategoryModalProps {
  category: CategoryItem | null;
  isOpen: boolean;
  onClose: () => void;
  onOpenPhoto: (index: number) => void;
}

export const CategoryModal: React.FC<CategoryModalProps> = ({
  category,
  isOpen,
  onClose,
  onOpenPhoto
}) => {
  if (!isOpen || !category) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 relative flex flex-col my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Cabecera del modal */}
        <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-md px-6 py-5 border-b border-slate-200 flex items-start justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-brand-navy-light bg-brand-mist px-3 py-1 rounded-full">
              Galería de Proyectos
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
              {category.nombre}
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-1 max-w-2xl">
              {category.descripcionCorta}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2.5 bg-slate-100 hover:bg-slate-200 rounded-full text-slate-500 hover:text-slate-800 transition-colors cursor-pointer"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Grilla de todas las fotos de la categoría */}
        <div className="p-6 flex-grow">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              {category.fotos.length} fotos reales del catálogo
            </span>
            <span className="text-xs text-slate-400">
              Haz clic en cualquier imagen para ampliar
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
            {category.fotos.map((foto, index) => (
              <div
                key={foto.archivo}
                onClick={() => onOpenPhoto(index)}
                className="group relative h-40 sm:h-48 bg-slate-100 rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md cursor-pointer"
              >
                <img
                  src={`/${foto.ruta}`}
                  alt={`${category.nombre} - Foto ${index + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                
                <div className="absolute inset-0 bg-brand-navy/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                  <div className="flex items-center gap-1.5 text-xs font-bold bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/30">
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>Ampliar</span>
                  </div>
                </div>

                <div className="absolute bottom-1.5 left-2 bg-black/60 text-white text-[10px] font-mono px-1.5 py-0.5 rounded backdrop-blur-xs">
                  Pág. {foto.paginaPdf}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pie con botón de WhatsApp directo */}
        <div className="sticky bottom-0 z-20 bg-slate-50 px-6 py-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-600 text-center sm:text-left">
            ¿Deseas este acabado en tus medidas? Asesoría y visita técnica en obra en Lima.
          </p>
          <a
            href={siteConfig.getWhatsAppUrl(category.nombre)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-whatsapp hover:bg-brand-whatsapp-dark text-white font-bold text-sm px-6 py-2.5 rounded-xl shadow-sm transition-all"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Consultar por WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};
