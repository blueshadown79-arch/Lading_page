import React, { useState, useEffect } from 'react';
import { MessageCircle, Menu, X, Search } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';

interface HeaderProps {
  onSearchFocus?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onSearchFocus }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearchClick = () => {
    if (onSearchFocus) {
      onSearchFocus();
    } else {
      const el = document.getElementById('search-input');
      el?.focus();
      el?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3' 
        : 'bg-white border-b border-slate-100 py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-2 group" aria-label="Laura Glass Solutions - Inicio">
          <img 
            src="/logo/logo-color.svg" 
            alt="Laura Glass Solutions" 
            className="h-10 sm:h-11 w-auto transition-transform duration-300 group-hover:scale-[1.02]"
          />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#productos" className="text-sm font-semibold text-slate-700 hover:text-brand-navy transition-colors">
            Productos
          </a>
          <a href="#series" className="text-sm font-semibold text-slate-700 hover:text-brand-navy transition-colors">
            Series de Aluminio
          </a>
          <a href="#cristales" className="text-sm font-semibold text-slate-700 hover:text-brand-navy transition-colors">
            Tipos de Vidrio
          </a>
          <a href="#obras" className="text-sm font-semibold text-slate-700 hover:text-brand-navy transition-colors">
            Obras Realizadas
          </a>
          <a href="#nosotros" className="text-sm font-semibold text-slate-700 hover:text-brand-navy transition-colors">
            Quiénes Somos
          </a>
          <a href="#contacto" className="text-sm font-semibold text-slate-700 hover:text-brand-navy transition-colors">
            Contacto
          </a>
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={handleSearchClick}
            className="p-2 text-slate-600 hover:text-brand-navy hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
            title="Buscar en el catálogo"
            aria-label="Buscar en el catálogo"
          >
            <Search className="w-5 h-5" />
          </button>

          <a 
            href="#contacto" 
            className="text-xs font-bold uppercase tracking-wider text-brand-navy border border-slate-300 px-3.5 py-2 rounded-lg hover:bg-slate-50 transition-colors"
          >
            Cotizar
          </a>

          <a 
            href={siteConfig.getWhatsAppUrl()} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-whatsapp hover:bg-brand-whatsapp-dark text-white text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-lg shadow-sm transition-all hover:shadow hover:-translate-y-0.5"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>WhatsApp</span>
          </a>
        </div>

        {/* Mobile menu button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Abrir menú"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3">
          <a 
            href="#productos" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-semibold text-slate-800 border-b border-slate-100"
          >
            Productos y Catálogo
          </a>
          <a 
            href="#series" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-semibold text-slate-800 border-b border-slate-100"
          >
            Series de Aluminio
          </a>
          <a 
            href="#cristales" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-semibold text-slate-800 border-b border-slate-100"
          >
            Tipos de Vidrio
          </a>
          <a 
            href="#obras" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-semibold text-slate-800 border-b border-slate-100"
          >
            Obras Realizadas
          </a>
          <a 
            href="#nosotros" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-semibold text-slate-800 border-b border-slate-100"
          >
            Quiénes Somos
          </a>
          <a 
            href="#contacto" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-semibold text-slate-800 border-b border-slate-100"
          >
            Contacto
          </a>

          <div className="pt-2 flex flex-col gap-2">
            <a 
              href={siteConfig.getWhatsAppUrl()} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-brand-whatsapp text-white py-3 rounded-lg font-bold"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              <span>Contactar por WhatsApp</span>
            </a>
            <div className="text-center text-xs text-slate-500 pt-1">
              Atención directa en Lima: 912 791 992 / 946 330 459
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
