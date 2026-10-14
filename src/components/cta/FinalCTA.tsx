import React from 'react';
import { MessageCircle, FileDown, Calculator, CheckCircle } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 hero-glass-pattern text-white relative overflow-hidden" id="contacto">
      
      {/* Elementos decorativos de cristal */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-brand-glass/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 right-10 w-80 h-80 bg-brand-champagne/10 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        <span className="text-xs font-bold uppercase tracking-widest text-brand-glass border border-brand-glass/30 px-3.5 py-1.5 rounded-full inline-block mb-4">
          Atención Inmediata en Lima
        </span>

        <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight leading-tight">
          Cotiza tu Proyecto a Medida
        </h2>

        <p className="text-brand-glass text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
          Envíanos tus medidas, fotos o planos en PDF y recibe asesoría técnica personalizada con presupuesto detallado en menos de 24 horas.
        </p>

        {/* Botones Principales de WhatsApp */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <a
            href={siteConfig.getWhatsAppUrl("Solicitud de cotización con asesor 1", siteConfig.primaryPhone)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-brand-whatsapp hover:bg-brand-whatsapp-dark text-white font-bold text-base px-8 py-4 rounded-2xl shadow-xl transition-all duration-200 hover:-translate-y-1"
          >
            <MessageCircle className="w-5 h-5 fill-white" />
            <span>WhatsApp: 912 791 992</span>
          </a>

          <a
            href={siteConfig.getWhatsAppUrl("Solicitud de cotización con asesor 2", siteConfig.secondaryPhone)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-brand-whatsapp hover:bg-brand-whatsapp-dark text-white font-bold text-base px-8 py-4 rounded-2xl shadow-xl transition-all duration-200 hover:-translate-y-1"
          >
            <MessageCircle className="w-5 h-5 fill-white" />
            <span>WhatsApp: 946 330 459</span>
          </a>
        </div>

        {/* Acciones Secundarias Configurables: Catálogo PDF y Cotizador */}
        <div className="flex flex-wrap items-center justify-center gap-3 max-w-xl mx-auto pt-4 border-t border-white/10">
          
          {/* Botón Descargar Catálogo Completo PDF (configurable) */}
          <a
            href="#catalogo-pdf"
            onClick={(e) => {
              e.preventDefault();
              window.open(siteConfig.getWhatsAppUrl("Deseo recibir el Catálogo Técnico Completo en PDF"), '_blank');
            }}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold bg-white/10 hover:bg-white/20 text-white border border-white/20 px-4 py-2.5 rounded-xl backdrop-blur-sm transition-all"
          >
            <FileDown className="w-4 h-4 text-brand-glass" />
            <span>Descargar Catálogo Completo (PDF)</span>
          </a>

          {/* Enlace al Cotizador web (configurable) */}
          <a
            href="#cotizador-web"
            onClick={(e) => {
              e.preventDefault();
              window.open(siteConfig.getWhatsAppUrl("Deseo coordinar visita técnica y medición en obra a láser"), '_blank');
            }}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold bg-white/10 hover:bg-white/20 text-white border border-white/20 px-4 py-2.5 rounded-xl backdrop-blur-sm transition-all"
          >
            <Calculator className="w-4 h-4 text-brand-champagne" />
            <span>Solicitar Visita Técnica en Obra</span>
          </a>
        </div>

        {/* Badges de Garantía */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs text-brand-glass font-medium">
          <span className="flex items-center gap-1.5">
            <CheckCircle className="w-4 h-4 text-brand-whatsapp" />
            Respaldo con Normativa INDECI
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle className="w-4 h-4 text-brand-whatsapp" />
            Herrajes de Acero Inoxidable
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle className="w-4 h-4 text-brand-whatsapp" />
            Instalación Limpia en Lima
          </span>
        </div>

      </div>
    </section>
  );
};
