import React, { useState } from 'react';
import { MessageCircle, Check, ShieldCheck, Layers } from 'lucide-react';
import catalogoData from '../../data/catalogo.json';
import { siteConfig } from '../../config/siteConfig';

export const AluminumSeries: React.FC = () => {
  const [selectedSeriesId, setSelectedSeriesId] = useState<string>("serie-62");
  const series = catalogoData.seriesAluminio;
  const currentSeries = series.find(s => s.id === selectedSeriesId) || series[0];

  return (
    <section className="py-16 sm:py-24 bg-white" id="series">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabecera de la sección */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-navy-light bg-brand-mist px-3 py-1 rounded-full border border-brand-glass/30">
            Ingeniería en Perfilería
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mt-3 mb-4">
            Series de Aluminio & Sistemas Oficiales
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Perfiles extruidos de alta resistencia y herrajes de precisión para cada nivel de exigencia arquitectónica, aislamiento acústico y dimensiones de vano.
          </p>
        </div>

        {/* Selector de pestañas de series */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {series.map((s) => (
            <button
              key={s.id}
              onClick={() => setSelectedSeriesId(s.id)}
              className={`whitespace-nowrap px-4 sm:px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all duration-200 cursor-pointer ${
                selectedSeriesId === s.id
                  ? 'bg-brand-navy text-white shadow-md scale-105'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              {s.nombre.split(' (')[0]}
            </button>
          ))}
        </div>

        {/* Ficha destacada interactiva de la serie seleccionada */}
        <div className="bg-slate-50 border border-slate-200 rounded-3xl overflow-hidden shadow-lg mb-16 grid grid-cols-1 lg:grid-cols-12 gap-0">
          
          {/* Imagen de la serie */}
          <div className="lg:col-span-5 relative bg-slate-900 min-h-[300px] lg:min-h-full">
            <img
              src={`/${currentSeries.imagen}`}
              alt={currentSeries.nombre}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-glass">
                Laura Glass Solutions
              </span>
              <h3 className="font-serif text-2xl font-bold">
                {currentSeries.nombre}
              </h3>
            </div>
          </div>

          {/* Especificaciones y beneficios */}
          <div className="lg:col-span-7 p-6 sm:p-8 md:p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-brand-champagne font-bold text-xs uppercase tracking-wider mb-2">
                <ShieldCheck className="w-4 h-4" />
                <span>Garantía de Fábrica & Hermeticidad</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
                {currentSeries.nombre}
              </h3>
              <p className="text-brand-navy font-semibold text-sm sm:text-base mb-4">
                {currentSeries.tagline}
              </p>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                {currentSeries.descripcion}
              </p>

              {/* Lista de características */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
                {currentSeries.caracteristicas.map((carac, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                    <Check className="w-4 h-4 text-brand-navy shrink-0 mt-0.5" />
                    <span>{carac}</span>
                  </div>
                ))}
              </div>

              {/* Acabados disponibles */}
              <div className="mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
                  Acabados y Colores:
                </span>
                <div className="flex flex-wrap gap-2">
                  {currentSeries.colores.map((color) => (
                    <span 
                      key={color} 
                      className="text-xs font-medium bg-white border border-slate-200 px-3 py-1 rounded-md text-slate-700"
                    >
                      {color}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA WhatsApp directo */}
            <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-slate-500 text-center sm:text-left">
                Asesoría técnica y rectificación de vanos a láser en Lima.
              </div>
              <a
                href={siteConfig.getWhatsAppUrl(`Cotización de ${currentSeries.nombre}`)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-whatsapp hover:bg-brand-whatsapp-dark text-white font-bold text-sm px-6 py-3 rounded-xl shadow-md transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Consultar esta Serie</span>
              </a>
            </div>
          </div>
        </div>

        {/* TABLA COMPARATIVA TÉCNICA */}
        <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
          <div className="px-6 py-4 bg-brand-mist/50 border-b border-slate-200 flex items-center justify-between">
            <h4 className="font-serif text-lg font-bold text-brand-navy flex items-center gap-2">
              <Layers className="w-5 h-5 text-brand-navy-light" />
              <span>Cuadro Comparativo de Series</span>
            </h4>
            <span className="text-xs text-slate-500 hidden sm:inline">
              Desliza horizontalmente para ver todos los datos
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[700px]">
              <thead>
                <tr className="bg-slate-50 text-slate-700 font-bold border-b border-slate-200">
                  <th className="py-3 px-4">Serie / Sistema</th>
                  <th className="py-3 px-4">Espesor de Aluminio</th>
                  <th className="py-3 px-4">Tipo de Apertura</th>
                  <th className="py-3 px-4">Nivel Acústico</th>
                  <th className="py-3 px-4">Resistencia Rodajes</th>
                  <th className="py-3 px-4">Vidrio Compatible</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-600">
                {series.map((s) => (
                  <tr key={s.id} className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-slate-900 flex items-center gap-1.5">
                      {s.nombre.split(' (')[0]}
                    </td>
                    <td className="py-3.5 px-4">{s.espesor}</td>
                    <td className="py-3.5 px-4">{s.apertura}</td>
                    <td className="py-3.5 px-4">
                      <span className="inline-block bg-slate-100 text-brand-navy px-2 py-0.5 rounded font-medium text-xs">
                        {s.acustica}
                      </span>
                    </td>
                    <td className="py-3.5 px-4">{s.cargaRueda}</td>
                    <td className="py-3.5 px-4">{s.vidrios}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
};
