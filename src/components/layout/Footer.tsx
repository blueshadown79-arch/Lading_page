import React from 'react';
import { Phone, MapPin, Clock, MessageCircle } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-navy-dark text-slate-400 py-12 sm:py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mb-12">
          
          {/* Columna 1: Logo y resumen */}
          <div className="space-y-4">
            <img
              src="/logo/logo-white.svg"
              alt="Laura Glass Solutions"
              className="h-12 w-auto"
            />
            <p className="text-sm leading-relaxed text-slate-300">
              Soluciones integrales en carpintería de aluminio, ventanas termoacústicas, mamparas, muros cortina y acabados en vidrio de seguridad.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-brand-glass hover:text-brand-navy flex items-center justify-center text-white transition-all cursor-pointer"
                aria-label="Instagram de Laura Glass Solutions"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href={siteConfig.getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-brand-whatsapp hover:text-white flex items-center justify-center text-white transition-all cursor-pointer"
                aria-label="WhatsApp de Laura Glass Solutions"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Columna 2: Enlaces Rápidos */}
          <div>
            <h4 className="font-serif text-white text-lg font-bold mb-4">
              Navegación
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#inicio" className="hover:text-white transition-colors">Inicio & Buscador</a>
              </li>
              <li>
                <a href="#productos" className="hover:text-white transition-colors">Catálogo de Productos</a>
              </li>
              <li>
                <a href="#series" className="hover:text-white transition-colors">Series de Aluminio</a>
              </li>
              <li>
                <a href="#cristales" className="hover:text-white transition-colors">Tipos de Vidrio (INDECI)</a>
              </li>
              <li>
                <a href="#obras" className="hover:text-white transition-colors">Obras Realizadas</a>
              </li>
              <li>
                <a href="#nosotros" className="hover:text-white transition-colors">Quiénes Somos</a>
              </li>
            </ul>
          </div>

          {/* Columna 3: Contacto y Teléfonos Oficiales */}
          <div>
            <h4 className="font-serif text-white text-lg font-bold mb-4">
              Atención y Ventas
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-brand-glass shrink-0 mt-1" />
                <div>
                  <span className="text-xs text-slate-400 block font-semibold">WhatsApp 1:</span>
                  <a href={`https://wa.me/51912791992`} target="_blank" rel="noopener noreferrer" className="text-white font-bold hover:text-brand-glass">
                    +51 912 791 992
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-brand-glass shrink-0 mt-1" />
                <div>
                  <span className="text-xs text-slate-400 block font-semibold">WhatsApp 2:</span>
                  <a href={`https://wa.me/51946330459`} target="_blank" rel="noopener noreferrer" className="text-white font-bold hover:text-brand-glass">
                    +51 946 330 459
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <svg className="w-4 h-4 fill-brand-glass shrink-0 mt-1" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <div>
                  <span className="text-xs text-slate-400 block font-semibold">Instagram:</span>
                  <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" className="text-white hover:text-brand-glass">
                    {siteConfig.social.instagramHandle}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Columna 4: Zona de Atención */}
          <div>
            <h4 className="font-serif text-white text-lg font-bold mb-4">
              Zona de Atención
            </h4>
            <div className="space-y-2.5 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-brand-glass shrink-0 mt-1" />
                <span className="text-slate-300">
                  {siteConfig.address}
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Cobertura en todos los distritos de <strong>Lima Metropolitana</strong> y atención a proyectos en provincias.
              </p>
              <div className="flex items-center gap-2 pt-2 text-xs text-slate-400">
                <Clock className="w-4 h-4 text-brand-glass" />
                <span>{siteConfig.schedule}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Barra inferior */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © 2026 <strong>Laura Glass Solutions</strong>. Todos los derechos reservados.
          </div>
          <div>
            Diseño Profesional & Catálogo Digital · Lima, Perú
          </div>
        </div>

      </div>
    </footer>
  );
};
