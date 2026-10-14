import React, { useRef, useEffect } from 'react';
import { Search, X, Sparkles } from 'lucide-react';

interface HeroSearchProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onChipClick: (term: string) => void;
}

const CHIPS_SUGERENCIAS = [
  "Mamparas de ducha",
  "Ventanas Serie 25",
  "Puertas de aluminio",
  "Techos sol y sombra",
  "Muros cortina spider",
  "Serie 62 Europea"
];

export const HeroSearch: React.FC<HeroSearchProps> = ({
  searchQuery,
  onSearchChange,
  onChipClick
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  // Autofocus condicionado: enfoca en desktop sin forzar la apertura del teclado virtual en pantallas táctiles
  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (!isTouchDevice && inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleClear = () => {
    onSearchChange("");
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <section id="inicio" className="hero-glass-pattern text-white pt-10 pb-16 sm:pt-14 sm:pb-20 relative overflow-hidden">
      
      {/* Reflejos arquitectónicos decorativos vectoriales */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-glass/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-brand-glass-cyan/10 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
        
        {/* Logo oficial blanco sobre fondo azul marino */}
        <div className="mb-6 flex justify-center">
          <img 
            src="/logo/logo-white.svg" 
            alt="Laura Glass Solutions" 
            className="h-14 sm:h-16 w-auto drop-shadow-md"
          />
        </div>

        {/* Pregunta Central del Hero */}
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white mb-3 leading-tight">
          ¿Qué estás buscando?
        </h1>

        {/* Texto de apoyo */}
        <p className="text-brand-glass text-base sm:text-lg md:text-xl font-normal max-w-2xl mx-auto mb-8 sm:mb-10 opacity-95">
          Ventanas, mamparas, puertas, techos y más en vidrio y aluminio
        </p>

        {/* BARRA DE BÚSQUEDA CENTRAL Y PROMINENTE */}
        <div className="relative max-w-2xl mx-auto mb-6 shadow-2xl rounded-2xl group">
          <div className="absolute inset-y-0 left-0 pl-4 sm:pl-5 flex items-center pointer-events-none text-brand-navy">
            <Search className="w-6 h-6 text-brand-navy/60 group-focus-within:text-brand-navy-light transition-colors" />
          </div>

          <input
            ref={inputRef}
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Escribe lo que buscas (ej. mampara ducha, serie 62, techo)..."
            className="w-full pl-13 sm:pl-14 pr-12 py-4 sm:py-5 bg-white text-brand-navy text-base sm:text-lg font-medium rounded-2xl border-2 border-white/80 focus:border-brand-glass-cyan focus:outline-none shadow-lg placeholder:text-slate-400 transition-all duration-200"
            aria-label="Buscar en el catálogo de productos"
          />

          {searchQuery && (
            <button
              onClick={handleClear}
              className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-brand-navy transition-colors"
              aria-label="Borrar búsqueda"
            >
              <X className="w-5 h-5 bg-slate-100 hover:bg-slate-200 p-0.5 rounded-full" />
            </button>
          )}
        </div>

        {/* SUGERENCIAS RÁPIDAS (CHIPS) */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 max-w-2xl mx-auto">
          <span className="text-xs font-semibold text-brand-glass/80 uppercase tracking-wider flex items-center gap-1 mr-1">
            <Sparkles className="w-3.5 h-3.5 text-brand-champagne" />
            Sugerencias:
          </span>
          {CHIPS_SUGERENCIAS.map((chip) => (
            <button
              key={chip}
              onClick={() => onChipClick(chip)}
              className="text-xs sm:text-sm font-medium bg-white/10 hover:bg-white/20 active:bg-white/30 text-white border border-white/20 hover:border-brand-glass/60 px-3.5 py-1.5 rounded-full backdrop-blur-sm transition-all hover:scale-105 duration-150 cursor-pointer"
            >
              {chip}
            </button>
          ))}
        </div>

      </div>
    </section>
  );
};
