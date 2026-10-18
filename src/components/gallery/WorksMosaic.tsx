import React from 'react';
import { Maximize2, MessageCircle } from 'lucide-react';
import { CatalogImage } from '../../types/catalog';
import { siteConfig } from '../../config/siteConfig';

interface WorksMosaicProps {
  onOpenPhoto: (image: CatalogImage) => void;
}

// Selección de las fotos de mayor resolución del catálogo para el mosaico arquitectónico
const OBRAS_DESTACADAS: CatalogImage[] = [
  {
    archivo: "img_196_950x1425.jpg",
    ruta: "imagenes-catalogo/obras-y-fachadas/img_196_950x1425.jpg",
    titulo: "Edificio Residencial & Muro Cortina Azul",
    descripcion: "Fachada integral de 5 niveles con cristal reflejante azul y ventanas proyectantes.",
    ancho: 950,
    alto: 1425,
    paginaPdf: 83
  },
  {
    archivo: "img_002_668x555.jpg",
    ruta: "imagenes-catalogo/obras-y-fachadas/img_002_668x555.jpg",
    titulo: "Residencia Contemporánea de Lujo",
    descripcion: "Carpintería en aluminio negro con ventanas de gran formato y mamparas panorámicas.",
    ancho: 668,
    alto: 555,
    paginaPdf: 2
  },
  {
    archivo: "img_193_942x1415.jpg",
    ruta: "imagenes-catalogo/obras-y-fachadas/img_193_942x1415.jpg",
    titulo: "Torre Residencial & Balcones con Barandas Inox",
    descripcion: "Ventanas Serie 25 en aluminio negro y barandas de acero inoxidable AISI 304.",
    ancho: 942,
    alto: 1415,
    paginaPdf: 82
  },
  {
    archivo: "img_obra_01_950x1342.jpg",
    ruta: "imagenes-catalogo/obras-y-fachadas/img_obra_01_950x1342.jpg",
    titulo: "Residencia Contemporánea con Cerramientos Integrales",
    descripcion: "Proyecto residencial de 2 niveles con ventanales en aluminio negro y mamparas de piso a techo.",
    ancho: 950,
    alto: 1342,
    paginaPdf: 4
  },
  {
    archivo: "img_197_886x1330.jpg",
    ruta: "imagenes-catalogo/obras-y-fachadas/img_197_886x1330.jpg",
    titulo: "Multifamiliar en Esquina con Ventanales Panorámicos",
    descripcion: "Acabados en Serie 62 y mamparas corredizas para iluminación natural.",
    ancho: 886,
    alto: 1330,
    paginaPdf: 85
  },
  {
    archivo: "img_185_754x565.jpg",
    ruta: "imagenes-catalogo/acero-inoxidable/img_185_754x565.jpg",
    titulo: "Cortavientos & Barandas Inox en Azotea",
    descripcion: "Paneles de cristal templado sobre postes tubulares de acero inoxidable resistente al viento.",
    ancho: 754,
    alto: 565,
    paginaPdf: 80
  },
  {
    archivo: "img_086_864x716.jpg",
    ruta: "imagenes-catalogo/serie-62/img_086_864x716.jpg",
    titulo: "Ventana Termoacústica Serie 62 Europea",
    descripcion: "Corte a inglete a 45° en blanco puro con marco doble de 100 mm.",
    ancho: 864,
    alto: 716,
    paginaPdf: 43
  },
  {
    archivo: "img_115_530x848.jpg",
    ruta: "imagenes-catalogo/duchas/img_115_530x848.jpg",
    titulo: "Mampara de Ducha Modelo Euro en Escuadra",
    descripcion: "Sistema suspendido con rodamientos superiores y cristal templado de 8mm.",
    ancho: 530,
    alto: 848,
    paginaPdf: 59
  }
];

export const WorksMosaic: React.FC<WorksMosaicProps> = ({ onOpenPhoto }) => {
  return (
    <section className="py-16 sm:py-24 bg-white" id="obras">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabecera */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-navy-light bg-brand-mist px-3 py-1 rounded-full border border-brand-glass/30">
            Evidencia en Obra
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mt-3 mb-4">
            Obras Realizadas en Lima
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Una selección de nuestros mejores trabajos ejecutados: desde residencias unifamiliares hasta fachadas integrales de edificios comerciales y multifamiliares.
          </p>
        </div>

        {/* Mosaico de Obras */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
          {OBRAS_DESTACADAS.map((obra, index) => (
            <div
              key={obra.archivo}
              onClick={() => onOpenPhoto(obra)}
              className={`group relative overflow-hidden rounded-2xl bg-slate-950 border border-slate-200/80 shadow-sm hover:shadow-2xl transition-all duration-300 cursor-pointer ${
                index === 0 || index === 2 ? 'sm:row-span-2 h-[420px] sm:h-full' : 'h-[280px]'
              }`}
            >
              <img
                src={`/${obra.ruta}`}
                alt={obra.titulo}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
              />
              
              {/* Overlay con degradado suave */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              {/* Botón de ampliar al centro */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="bg-white/20 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 border border-white/30">
                  <Maximize2 className="w-4 h-4" />
                  <span>Ver a Pantalla Completa</span>
                </span>
              </div>

              {/* Información inferior */}
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] font-bold uppercase tracking-wider text-brand-glass block mb-0.5">
                  Laura Glass Solutions
                </span>
                <h3 className="font-serif text-lg sm:text-xl font-bold leading-snug">
                  {obra.titulo}
                </h3>
                <p className="text-xs text-slate-300 line-clamp-2 mt-1">
                  {obra.descripcion}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Intermedio */}
        <div className="text-center">
          <p className="text-slate-600 text-sm mb-4">
            ¿Tienes un plano o dimensiones de tu obra? Solicita cotización formal directa.
          </p>
          <a
            href={siteConfig.getWhatsAppUrl("Cotización para obra completa")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-whatsapp hover:bg-brand-whatsapp-dark text-white font-bold text-sm px-7 py-3.5 rounded-xl shadow-md transition-all hover:shadow-lg"
          >
            <MessageCircle className="w-5 h-5 fill-white" />
            <span>Consultar Proyecto por WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
