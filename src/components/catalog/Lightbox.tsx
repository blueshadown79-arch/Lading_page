import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react';
import { CatalogImage } from '../../types/catalog';
import { siteConfig } from '../../config/siteConfig';

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  images: CatalogImage[];
  currentIndex: number;
  onPrev: () => void;
  onNext: () => void;
  categoryName: string;
}

export const Lightbox: React.FC<LightboxProps> = ({
  isOpen,
  onClose,
  images,
  currentIndex,
  onPrev,
  onNext,
  categoryName
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onPrev, onNext, onClose]);

  if (!isOpen || images.length === 0) return null;

  const currentImage = images[currentIndex] || images[0];

  return (
    <div 
      className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex flex-col justify-between items-center p-4 sm:p-6"
      onClick={onClose}
    >
      {/* Barra Superior */}
      <div className="w-full max-w-6xl flex items-center justify-between text-white py-2 z-10" onClick={(e) => e.stopPropagation()}>
        <div>
          <span className="text-xs uppercase tracking-wider text-brand-glass font-bold block">
            {categoryName}
          </span>
          <span className="text-sm text-slate-300">
            Foto {currentIndex + 1} de {images.length}
          </span>
        </div>

        <button
          onClick={onClose}
          className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors cursor-pointer"
          aria-label="Cerrar visor"
        >
          <X className="w-6 h-6 text-white" />
        </button>
      </div>

      {/* Imagen Central con Flechas */}
      <div className="relative w-full max-w-5xl flex-grow flex items-center justify-center my-4 overflow-hidden" onClick={(e) => e.stopPropagation()}>
        {images.length > 1 && (
          <button
            onClick={onPrev}
            className="absolute left-2 sm:left-4 z-20 p-2.5 sm:p-3 bg-black/50 hover:bg-black/80 text-white rounded-full transition-all hover:scale-110 cursor-pointer"
            aria-label="Imagen anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}

        <img
          src={`/${currentImage.ruta}`}
          alt={currentImage.titulo || categoryName}
          className="max-h-[75vh] max-w-full object-contain rounded-lg shadow-2xl transition-all duration-200"
        />

        {images.length > 1 && (
          <button
            onClick={onNext}
            className="absolute right-2 sm:right-4 z-20 p-2.5 sm:p-3 bg-black/50 hover:bg-black/80 text-white rounded-full transition-all hover:scale-110 cursor-pointer"
            aria-label="Imagen siguiente"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}
      </div>

      {/* Pie con detalles y botón WhatsApp */}
      <div className="w-full max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left z-10 bg-slate-900/80 px-5 py-3 rounded-xl border border-white/10" onClick={(e) => e.stopPropagation()}>
        <div>
          <p className="text-white text-sm font-semibold">
            {currentImage.titulo || categoryName}
          </p>
          <p className="text-slate-400 text-xs">
            {currentImage.descripcion || `Catálogo Oficial Laura Glass Solutions (Pág. ${currentImage.paginaPdf})`}
          </p>
        </div>

        <a
          href={siteConfig.getWhatsAppUrl(`${categoryName} (Foto ${currentIndex + 1})`)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-brand-whatsapp hover:bg-brand-whatsapp-dark text-white text-xs font-bold px-4 py-2 rounded-lg shadow-sm transition-all"
        >
          <MessageCircle className="w-4 h-4 fill-white" />
          <span>Consultar esta Obra</span>
        </a>
      </div>
    </div>
  );
};
