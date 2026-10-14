import React from 'react';
import { Target, Compass, Award } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';

export const MissionVision: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-slate-50 border-t border-slate-200/80" id="nosotros">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabecera */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-navy-light bg-brand-mist px-3 py-1 rounded-full border border-brand-glass/30">
            Identidad Corporativa
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mt-3 mb-4">
            Quiénes Somos
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            En <strong>Laura Glass Solutions</strong> nos dedicamos a transformar y proteger cada espacio con ingeniería de carpintería y cristalería de alto nivel en Lima, Perú.
          </p>
        </div>

        {/* Tarjetas Misión y Visión */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Misión */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-sm hover:shadow-lg transition-all duration-300 relative overflow-hidden group">
            <div className="w-12 h-12 bg-brand-mist text-brand-navy rounded-2xl flex items-center justify-center mb-6">
              <Target className="w-6 h-6" />
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              Nuestra Misión
            </h3>

            <p className="text-slate-600 text-base leading-relaxed">
              {siteConfig.mision}
            </p>

            <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-brand-navy uppercase tracking-wider">
              <Award className="w-4 h-4 text-brand-champagne" />
              <span>Calidad · Seguridad · Eficiencia</span>
            </div>
          </div>

          {/* Visión */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-sm hover:shadow-lg transition-all duration-300 relative overflow-hidden group">
            <div className="w-12 h-12 bg-brand-mist text-brand-navy rounded-2xl flex items-center justify-center mb-6">
              <Compass className="w-6 h-6" />
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              Nuestra Visión
            </h3>

            <p className="text-slate-600 text-base leading-relaxed">
              {siteConfig.vision}
            </p>

            <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-brand-navy uppercase tracking-wider">
              <Award className="w-4 h-4 text-brand-champagne" />
              <span>Innovación · Sostenibilidad · Confianza</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
