export const siteConfig = {
  name: "Laura Glass Solutions",
  tagline: "Arquitectura en Vidrio, Aluminio, uPVC y Acero Inoxidable",
  description: "Especialistas en instalación de ventanas termoacústicas, mamparas, puertas, muros cortina, techos sol y sombra y acabados en vidrio templado y laminado en Lima, Perú.",
  location: "Lima, Perú",
  coverage: "Lima Metropolitana y proyectos a nivel nacional",
  address: "Av. Manuel Prado · Lima, Perú",
  schedule: "Lunes a Sábado: 8:00 AM - 7:00 PM",
  
  // Teléfonos oficiales del cliente
  phones: [
    { label: "Ventas & WhatsApp 1", number: "912 791 992", fullNumber: "51912791992" },
    { label: "Ventas & WhatsApp 2", number: "946 330 459", fullNumber: "51946330459" },
  ],
  primaryPhone: "51912791992",
  secondaryPhone: "51946330459",
  
  // Redes Sociales oficiales
  social: {
    instagram: "https://instagram.com/vidrerialaura",
    instagramHandle: "@vidrerialaura",
    email: "ventas@lauraglass.pe",
  },

  // Misión y Visión oficiales del catálogo
  mision: "Soluciones integrales en la instalación de ventanas y puertas en vidrio, aluminio y uPVC, garantizando calidad, seguridad y eficiencia en cada proyecto, con servicio profesional, materiales duraderos y un enfoque personalizado que optimiza el confort y la estética de cada espacio.",
  vision: "Ser una empresa líder y referente en el sector, reconocida por la excelencia en el servicio, la innovación en los procesos y el compromiso con la sostenibilidad; consolidándonos como la primera opción para clientes que buscan calidad, confianza y soluciones modernas.",

  // Enlaces de WhatsApp con mensajes prellenados
  getWhatsAppUrl(productOrQuery?: string, phone = "51912791992") {
    const text = productOrQuery
      ? `Hola Laura Glass Solutions, me interesa información y asesoría sobre: ${productOrQuery}. ¿Podrían ayudarme?`
      : "Hola Laura Glass Solutions, deseo solicitar una cotización para un proyecto en vidrio y aluminio.";
    return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
  }
};
