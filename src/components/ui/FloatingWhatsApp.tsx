import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';

export const FloatingWhatsApp: React.FC = () => {
  const [tooltipVisible, setTooltipVisible] = useState(true);

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 flex items-center gap-3">
      
      {/* Tooltip comercial */}
      {tooltipVisible && (
        <div className="hidden sm:flex items-center gap-2 bg-white text-slate-800 text-xs font-bold py-2 px-3.5 rounded-full shadow-xl border border-slate-200 animate-bounce">
          <span className="w-2 h-2 rounded-full bg-brand-whatsapp animate-ping" />
          <span>¿Deseas cotizar por WhatsApp?</span>
          <button 
            onClick={() => setTooltipVisible(false)}
            className="text-slate-400 hover:text-slate-600 ml-1 cursor-pointer"
            aria-label="Cerrar aviso"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Botón Circular Flotante */}
      <a
        href={siteConfig.getWhatsAppUrl("Hola Laura Glass Solutions, deseo cotizar una obra")}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-brand-whatsapp hover:bg-brand-whatsapp-dark text-white flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 cursor-pointer group"
        aria-label="Contactar a Laura Glass Solutions por WhatsApp"
      >
        <MessageCircle className="w-7 h-7 fill-white group-hover:rotate-12 transition-transform" />
      </a>
    </div>
  );
};
