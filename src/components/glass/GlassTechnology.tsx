import React from 'react';
import { ShieldCheck, MessageCircle, FileCheck } from 'lucide-react';
import catalogoData from '../../data/catalogo.json';
import { siteConfig } from '../../config/siteConfig';

export const GlassTechnology: React.FC = () => {
  const vidrios = catalogoData.tiposVidrio;

  return (
    <section className="py-16 sm:py-24 bg-slate-50" id="cristales">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabecera */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-navy-light bg-brand-mist px-3 py-1 rounded-full border border-brand-glass/30">
            Seguridad & Normativa
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mt-3 mb-4">
            Tipos de Cristal de Seguridad
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Vidrios certificados que cumplen con las especificaciones de seguridad de <strong>INDECI</strong> y el Reglamento Nacional de Edificaciones (RNE E.040) para viviendas y comercios en el Perú.
          </p>
        </div>

        {/* 3 Tarjetas de Vidrio */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {vidrios.map((vidrio) => (
            <article 
              key={vidrio.id}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 hover:border-brand-glass shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-navy bg-brand-mist px-3 py-1 rounded-md inline-block mb-3">
                  {vidrio.subtitulo.split(',')[0]}
                </span>
                
                <h3 className="font-serif text-2xl font-bold text-slate-900 mb-2">
                  {vidrio.nombre}
                </h3>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                  {vidrio.descripcion}
                </p>

                {/* Beneficios */}
                <div className="space-y-4 mb-6">
                  {vidrio.beneficios.map((b, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-brand-mist flex items-center justify-center shrink-0 mt-0.5 text-brand-navy">
                        <ShieldCheck className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                          {b.titulo}
                        </h4>
                        <p className="text-xs text-slate-500 leading-snug">
                          {b.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Espesores & CTA */}
              <div className="pt-4 border-t border-slate-100">
                <div className="text-xs text-slate-500 mb-4">
                  <span className="font-bold text-slate-700">Espesores habituales: </span>
                  {vidrio.espesores.join(', ')}
                </div>

                <a
                  href={siteConfig.getWhatsAppUrl(`Asesoría sobre ${vidrio.nombre}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-brand-whatsapp hover:text-white text-slate-700 text-xs sm:text-sm font-bold py-2.5 px-4 rounded-xl transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Consultar Disponibilidad</span>
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Banner INDECI de Confianza */}
        <div className="bg-brand-navy text-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0 text-brand-glass">
              <FileCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif text-xl sm:text-2xl font-bold">
                Cumplimiento de Especificaciones INDECI
              </h4>
              <p className="text-brand-glass text-xs sm:text-sm mt-0.5">
                Garantizamos materiales homologados para inspecciones de defensa civil y licencias de funcionamiento.
              </p>
            </div>
          </div>

          <a
            href={siteConfig.getWhatsAppUrl("Asesoría técnica y normativa INDECI")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-whatsapp hover:bg-brand-whatsapp-dark text-white text-sm font-bold px-6 py-3 rounded-xl shadow-md transition-all shrink-0"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Hablar con un Asesor</span>
          </a>
        </div>

      </div>
    </section>
  );
};
