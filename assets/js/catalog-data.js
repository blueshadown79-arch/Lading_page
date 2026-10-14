/**
 * Datos del Catálogo Oficial - LAURA GLASS SOLUTIONS
 * Organizado para alta conversión comercial y separación por categorías
 */

const LAURA_DATA = {
  empresa: {
    nombre: "Laura Glass Solutions",
    slogan: "Arquitectura & Soluciones Integrales en Vidrio, Aluminio y uPVC",
    mision: "Laura Glass Solutions tiene como misión brindar soluciones integrales en la instalación de ventanas y puertas en vidrio, aluminio y uPVC, garantizando calidad, seguridad y eficiencia en cada proyecto. La empresa se compromete con la satisfacción del cliente mediante un servicio profesional, materiales de alta durabilidad y un enfoque personalizado que optimiza el confort y la estética de cada espacio.",
    vision: "Laura Glass Solutions busca ser una empresa líder y referente en el sector de instalación de ventanas y puertas en vidrio, aluminio y uPVC, reconocida por la excelencia en el servicio, la innovación en los procesos y el compromiso con la sostenibilidad. Su visión es consolidarse como la primera opción de clientes que buscan calidad, confianza y soluciones modernas para sus proyectos arquitectónicos.",
    telefonoPrincipal: "+51 987 654 321",
    telefonoSecundario: "+51 912 345 678",
    whatsapp: "51987654321", // Número para enlaces wa.me (fácilmente editable)
    email: "ventas@lauraglass.pe",
    direccion: "Av. Manuel Prado · Cobertura en toda Lima Metropolitana y Obras a Nivel Nacional",
    horario: "Lunes a Sábado: 8:00 AM - 7:00 PM",
    garantia: "Garantía de Fábrica e Instalación Certificada",
    normativa: "Cumplimiento Estricto con Normas INDECI y RNE E.040"
  },

  metricas: [
    { valor: "+10", etiqueta: "Años de Trayectoria", desc: "Liderando proyectos arquitectónicos en Lima" },
    { valor: "+500", etiqueta: "Obras Entregadas", desc: "Edificios, residencias y locales comerciales" },
    { valor: "100%", etiqueta: "Cristales Certificados", desc: "Vidrios templados y laminados homologados INDECI" },
    { valor: "5 Años", etiqueta: "Garantía Escrita", desc: "Respaldo en hermeticidad y accesorios de acero inox" }
  ],

  // Categorías de proyectos comerciales
  categoriasProyectos: [
    {
      id: "fachadas",
      nombre: "Muros Cortina & Fachadas Spider",
      tagline: "Fachadas integrales de alto impacto para edificios y locales corporativos",
      imagenPrincipal: "assets/img/img_196_950x1425.jpg",
      conteo: "+35 Obras",
      descripcion: "Sistemas estructurales con vidrio continuo, arañas de acero inoxidable de 4 patas y control solar para edificios comerciales y torres residenciales.",
      sistemasUsados: ["Sistema Spider Frente Suspendido", "Muro Cortina Piel de Vidrio", "Ventanas Proyectantes Integradas"]
    },
    {
      id: "residencial",
      nombre: "Ventanas & Mamparas Residenciales",
      tagline: "Aislamiento termoacústico y confort para departamentos y residencias",
      imagenPrincipal: "assets/img/img_002_668x555.jpg",
      conteo: "+120 Obras",
      descripcion: "Ventanas y mamparas en Serie 62 (Europea 45°), Serie 80 (Hermeti-K) y Serie 25 que bloquean el ruido del tráfico y brindan máxima seguridad.",
      sistemasUsados: ["Serie 62 Europea corte 45°", "Serie 80 Grandes Luces", "Serie 25 Residencial", "Sistema Nova"]
    },
    {
      id: "duchas",
      nombre: "Mamparas de Ducha Modelo Euro",
      tagline: "Elegancia, hermeticidad y cristal templado para salas de baño",
      imagenPrincipal: "assets/img/img_115_530x848.jpg",
      conteo: "+85 Obras",
      descripcion: "Mamparas suspendidas con barra guía y rodamientos de acero inoxidable, modelos en escuadra, dobles corredizos y arenados decorativos a medida.",
      sistemasUsados: ["Modelo Euro Suspendido Inox", "Doble Corredizo Hermético", "Arenados y Franjas de Privacidad"]
    },
    {
      id: "puertas",
      nombre: "Puertas de Aluminio & Vidrio",
      tagline: "Diseño contemporáneo, acabado madera noble y cero mantenimiento",
      imagenPrincipal: "assets/img/img_140_581x870.jpg",
      conteo: "+50 Obras",
      descripcion: "Puertas Serie 71 batientes con cerraduras de seguridad, paneles de aluminio con texturas madera que no se dañan con la humedad y puertas comerciales.",
      sistemasUsados: ["Serie 71 Batiente", "Acabado Madera Texturizada", "Tiradores Largos Acero Inox", "Vidrio Templado 10mm"]
    },
    {
      id: "barandas",
      nombre: "Barandas Inox & Cortavientos",
      tagline: "Protección perimetral con vista panorámica para balcones, terrazas y piscinas",
      imagenPrincipal: "assets/img/img_185_754x565.jpg",
      conteo: "+45 Obras",
      descripcion: "Cristales templados y laminados fijados con postes tubulares o botones de acero inoxidable AISI 304/316 con resistencia a vientos fuertes y salinidad.",
      sistemasUsados: ["Postes Tubulares Inox 304/316", "Cortavientos para Azoteas", "Pasamanos Ergonómicos para Escaleras"]
    },
    {
      id: "techos-oficinas",
      nombre: "Techos Sol y Sombra & Oficinas",
      tagline: "Estructuras ligeras en aluminio y divisiones corporativas acústicas",
      imagenPrincipal: "assets/img/img_184_630x578.jpg",
      conteo: "+30 Obras",
      descripcion: "Vigas de aluminio acabado madera o grafito con cubiertas de policarbonato con filtro UV, combinadas con mamparas divisorias y drywall acústico.",
      sistemasUsados: ["Vigas de Aluminio Texturizadas", "Policarbonato con Filtro UV", "Separaciones Vidriadas de Oficina"]
    }
  ],

  // Catálogo comercial de sistemas
  productosDestacados: [
    {
      id: "serie-62",
      categoria: "ventanas",
      serie: "Serie 62 Europea",
      titulo: "Ventanas Termoacústicas Serie 62 (Corte 45°)",
      tagline: "La solución número 1 para eliminar el ruido del tráfico y avenidas en Lima",
      imagen: "assets/img/img_086_864x716.jpg",
      badge: "Línea Europea 45° ⭐",
      beneficioClave: "Atenúa hasta 42 dB de ruido con Doble Vidrio Hermético",
      caracteristicas: [
        "Corte a inglete a 45° con estética europea y esquinas perfectas",
        "Espesor reforzado de aluminio de 1.3 mm para máxima inercia",
        "Rodamientos de precisión que soportan de 20 a 50 kg por hoja",
        "Cierre embutido ergonómico de suave deslizamiento",
        "Sección de marco doble de 100 mm para alta resistencia eólica",
        "Mínimo mantenimiento con pintura electrostática anticorrosiva"
      ],
      colores: ["Negro Semibrillante", "Blanco", "Gris Grafito", "Madera Texturizada", "Silver"],
      vidriosCompatibles: ["Vidrio Insulado (DVH)", "Vidrio Laminado Acústico", "Cristal Templado"]
    },
    {
      id: "serie-80",
      categoria: "mamparas",
      serie: "Serie 80 Hermeti-K",
      titulo: "Mamparas Serie 80 - Diseño Imponente & Grandes Luces",
      tagline: "Aperturas panorámicas de piso a techo para terrazas, salas y dúplex",
      imagen: "assets/img/img_101_777x1250.jpg",
      badge: "Alta Gama / Triple Riel",
      beneficioClave: "Cierre hermético contra lluvia, vientos fuertes y polvo",
      caracteristicas: [
        "Marco triple corredizo que permite abrir hasta el 66% del vano",
        "Perfiles de alta robustez con adaptadores de hoja 80505 y 80506",
        "Sistema de cortaviento perimétrico 80908 que bloquea filtraciones",
        "Deslizamiento ultra suave para paneles de gran peso y dimensión",
        "Ideal para terrazas con vista al mar, balcones altos y jardines",
        "Garantía de estanqueidad y seguridad para niños y mascotas"
      ],
      colores: ["Negro Mate", "Madera Teca / Nogal", "Blanco Puro", "Silver Anodizado"],
      vidriosCompatibles: ["Insulado Termoacústico", "Templado 8mm y 10mm", "Laminado de Seguridad"]
    },
    {
      id: "muro-cortina-spider",
      categoria: "muros-cortina",
      serie: "Spider & Muro Cortina",
      titulo: "Muros Cortina & Fachadas Spider Frente Suspendido",
      tagline: "Fachadas corporativas y residenciales que elevan el valor de la propiedad",
      imagen: "assets/img/img_018_637x1024.jpg",
      badge: "Estructural Corporativo",
      beneficioClave: "Máxima transparencia con arañas y rótulas de acero inoxidable",
      caracteristicas: [
        "Arañas de acero inoxidable AISI 304/316 de 4 patas como único herraje visible",
        "Rótulas articuladas para disipación de movimientos sísmicos y eólicos",
        "Aislamiento térmico exterior con iluminación natural al 100%",
        "Sistemas con aluminio escondido (piel de vidrio continuo)",
        "Cristales templados y laminados que cumplen todas las normas INDECI",
        "Recomendado para edificios multifamiliares, clínicas y centros empresariales"
      ],
      colores: ["Acero Inox Espejo", "Acero Inox Satinado", "Estructura Oculta"],
      vidriosCompatibles: ["Templado 10mm/12mm", "Laminado Reflejante Azul/Verde", "Cool-Lite Solar"]
    },
    {
      id: "serie-25",
      categoria: "ventanas",
      serie: "Serie 25 Residencial",
      titulo: "Ventanas y Mamparas Serie 25 Residencial",
      tagline: "La opción más confiable y equilibrada para renovar departamentos",
      imagen: "assets/img/img_061_830x638.jpg",
      badge: "Más Vendido Residencial",
      beneficioClave: "Excelente relación calidad-precio y hermeticidad garantizada",
      caracteristicas: [
        "Perfiles extruidos de aluminio de gran durabilidad (2501, 2502, 2005, 2009)",
        "Felpas con barrera central y empaques de vinil que sellan el paso del viento",
        "Fabricación versátil en 2, 3 o 4 hojas corredizas con fijos superiores",
        "Ficha técnica oficial y compatibilidad con cristales de 6mm, 8mm y laminados",
        "Acabados anodizados y pintura electrostática horneada a prueba de sol"
      ],
      colores: ["Negro Semibrillante", "Aluminio Mate", "Madera Texturizada", "Blanco"],
      vidriosCompatibles: ["Vidrio Laminado con PVB", "Cristal Templado", "Vidrio Incoloro/Gris"]
    },
    {
      id: "ducha-euro",
      categoria: "duchas",
      serie: "Modelo Euro Inox",
      titulo: "Mamparas de Ducha Modelo Euro (Acero Inoxidable)",
      tagline: "El toque moderno que tu baño necesita: cristales seguros y herrajes eternos",
      imagen: "assets/img/img_115_530x848.jpg",
      badge: "Inox 304 / Cristal 8mm",
      beneficioClave: "Cero óxido por vapor y deslizamiento silencioso de rodamientos",
      caracteristicas: [
        "Barra guía superior maciza y rodamientos de acero inoxidable de alta gama",
        "Cristal templado de 8 mm resistente a impactos mecánicos y cambios térmicos",
        "Tiradores tubulares ergonómicos y topes magnéticos con cierre hermético",
        "Opciones en vidrio incoloro, esmerilado total o arenado decorativo con diseño",
        "Configuración recta frontal o en escuadra (esquinero) a la medida exacta de tu plato",
        "Sellos inferiores de PVC transparente anti-salpicaduras"
      ],
      colores: ["Inox Brillante (Cromado)", "Negro Mate Industrial", "Inox Satinado"],
      vidriosCompatibles: ["Templado Incoloro 8mm", "Arenado Franjas", "Arenado Artístico"]
    },
    {
      id: "puertas-serie-71",
      categoria: "puertas",
      serie: "Serie 71 & Madera",
      titulo: "Puertas de Aluminio Serie 71 & Textura Madera",
      tagline: "La belleza de la madera con la eternidad y solidez del aluminio",
      imagen: "assets/img/img_140_581x870.jpg",
      badge: "Cero Mantenimiento",
      beneficioClave: "Inmune al agua, carcoma y humedad costera de Lima",
      caracteristicas: [
        "Hoja batiente reforzada con bisagras de alto tonelaje para uso intensivo",
        "Cerradura de seguridad con cilindro multipunto y manijas de lujo",
        "Acabado imitación madera con vetas táctiles hiperrealistas",
        "Insertos modernos de aluminio cepillado y mirillas de cristal arenado",
        "Felpa con barrera y doble vinil perimétrico para hermeticidad acústica",
        "Nunca se deforma, no se hincha y no requiere mantenimiento anual de barniz"
      ],
      colores: ["Madera Nogal / Roble", "Negro Grafito", "Blanco Nieve", "Natural Anodizado"],
      vidriosCompatibles: ["Cristal Templado Arenado", "Laminado Opalizado", "Vidrio Incoloro"]
    },
    {
      id: "barandas-cortavientos",
      categoria: "barandas",
      serie: "Acero Inox & Templado",
      titulo: "Barandas y Cortavientos de Acero Inoxidable",
      tagline: "Protección perimetral con estética flotante para terrazas, piscinas y escaleras",
      imagen: "assets/img/img_185_754x565.jpg",
      badge: "Seguridad RNE",
      beneficioClave: "Visibilidad total del paisaje con resistencia a vientos fuertes",
      caracteristicas: [
        "Estructura en acero inoxidable calidad AISI 304 o 316 anti-corrosión salina",
        "Paños de cristal templado de seguridad de 8mm o 10mm según altura del piso",
        "Fijación mediante postes tubulares, balustres con esferas o botones puntuales",
        "Cortavientos especiales para azoteas y edificios frente al mar o zonas ventosas",
        "Pasamanos ergonómicos soldados y pulidos con acabado espejo o satinado"
      ],
      colores: ["Acero Inox Espejo", "Acero Inox Satinado", "Negro Electrostático"],
      vidriosCompatibles: ["Templado 10mm", "Laminado 8mm", "Esmerilado Parcial"]
    },
    {
      id: "techos-sol-sombra",
      categoria: "techos-oficinas",
      serie: "Techos Sol y Sombra",
      titulo: "Techos Sol y Sombra en Aluminio Arquitectónico",
      tagline: "Protección solar y confort térmico para terrazas, cocheras y áreas BBQ",
      imagen: "assets/img/img_184_630x578.jpg",
      badge: "Protección UV 100%",
      beneficioClave: "Estructura ligera que no sobrecarga la losa y dura toda la vida",
      caracteristicas: [
        "Vigas de aluminio reforzadas en acabado madera, negro o gris grafito",
        "Cero corrosión ni polillas; no requiere mantenimiento periódico de pintura",
        "Coberturas en policarbonato alveolar o sólido con filtro UV anti-decoloración",
        "Protección total contra lloviznas y sol intenso sin perder iluminación natural",
        "Instalación limpia en 48 a 72 horas con fijaciones ocultas"
      ],
      colores: ["Madera Teca", "Negro Grafito", "Blanco"],
      vidriosCompatibles: ["Policarbonato Alveolar con filtro UV", "Vidrio Laminado"]
    }
  ],

  // Colección completa de proyectos para la página de proyectos (proyectos.html)
  galeriaCompleta: [
    {
      id: "obra-01",
      titulo: "Edificio Residencial con Muro Cortina Azul",
      categoria: "fachadas",
      imagen: "assets/img/img_196_950x1425.jpg",
      descripcion: "Fachada integral de 5 niveles con cristal reflejante azul, sistema con aluminio escondido y ventanas proyectantes.",
      detalles: "Cristal templado reflejante 8mm · Perfilería de aluminio oculta · Lima"
    },
    {
      id: "obra-02",
      titulo: "Torre Residencial con Barandas Inox en Balcones",
      categoria: "fachadas",
      imagen: "assets/img/img_193_942x1415.jpg",
      descripcion: "Ventanas corredizas Serie 25 en aluminio negro y barandas de acero inoxidable con cristal en todos los balcones.",
      detalles: "Serie 25 negro anodizado · Barandas inox 304 · 6 pisos terminados"
    },
    {
      id: "obra-03",
      titulo: "Residencia Moderna con Ventanas Panorámicas",
      categoria: "residencial",
      imagen: "assets/img/img_002_668x555.jpg",
      descripcion: "Residencia unifamiliar de dos plantas con ventanales de gran formato en Serie 62 europea corte 45° con iluminación arquitectónica.",
      detalles: "Serie 62 corte 45° · Doble vidrio insulado termoacústico"
    },
    {
      id: "obra-04",
      titulo: "Edificio Corporativo Piel de Vidrio Continua",
      categoria: "fachadas",
      imagen: "assets/img/img_010_674x863.jpg",
      descripcion: "Muro cortina continuo que maximiza la luz interior con control solar y atenuación de ruido ambiental.",
      detalles: "Vidrio laminado de control solar · Estructura oculta"
    },
    {
      id: "obra-05",
      titulo: "Mampara Corrediza de 4 Hojas para Sala y Terraza",
      categoria: "residencial",
      imagen: "assets/img/img_061_830x638.jpg",
      descripcion: "Mampara Serie 80 de apertura amplia para integración de jardín y sala de estar.",
      detalles: "Serie 80 triple riel · Cristal templado 8mm incoloro"
    },
    {
      id: "obra-06",
      titulo: "Frente Suspendido con Arañas Spider de Acero Inox",
      categoria: "fachadas",
      imagen: "assets/img/img_018_637x1024.jpg",
      descripcion: "Ingreso corporativo de doble altura con sistema Spider de 4 patas y rótulas de absorción sísmica.",
      detalles: "Arañas Spider inox 316 · Cristal templado 10mm"
    },
    {
      id: "obra-07",
      titulo: "Mampara de Ducha Modelo Euro en Escuadra",
      categoria: "duchas",
      imagen: "assets/img/img_115_530x848.jpg",
      descripcion: "Sistema esquinero con rodamientos superiores suspendidos en acero inoxidable brillante y cristal templado.",
      detalles: "Cristal templado 8mm · Accesorios Euro inox 304"
    },
    {
      id: "obra-08",
      titulo: "Mampara de Ducha con Diseño Esmerilado Decorativo",
      categoria: "duchas",
      imagen: "assets/img/img_116_506x638.jpg",
      descripcion: "Cristal arenado artístico con franjas satinadas de privacidad y perfilería hermética.",
      detalles: "Arenado artístico · Rodamiento suave · Cierre estanco"
    },
    {
      id: "obra-09",
      titulo: "Puerta Residencial de Aluminio Textura Madera",
      categoria: "puertas",
      imagen: "assets/img/img_140_581x870.jpg",
      descripcion: "Puerta Serie 71 batiente con acabado madera y tirador vertical tubular de acero inoxidable de 1 metro.",
      detalles: "Serie 71 · Acabado madera roble · Tirador inox de 1.00m"
    },
    {
      id: "obra-10",
      titulo: "Cortavientos para Azotea y Zona BBQ",
      categoria: "barandas",
      imagen: "assets/img/img_185_754x565.jpg",
      descripcion: "Cierre perimétrico con cristal templado de seguridad sobre postes de acero inoxidable para disfrute panorámico sin viento.",
      detalles: "Cristal templado 10mm · Postes tubulares inox 304"
    },
    {
      id: "obra-11",
      titulo: "Techo Sol y Sombra en Aluminio Grafito",
      categoria: "techos-oficinas",
      imagen: "assets/img/img_184_630x578.jpg",
      descripcion: "Estructura de vigas de aluminio imitación madera con cubierta de policarbonato alveolar con protección UV.",
      detalles: "Vigas aluminio anodizado · Policarbonato con filtro UV"
    },
    {
      id: "obra-12",
      titulo: "Separaciones de Oficina Vidriadas y Drywall",
      categoria: "techos-oficinas",
      imagen: "assets/img/img_171_484x482.jpg",
      descripcion: "Mamparas modulares de cristal templado combinadas con drywall termoacústico para despachos y salas de reunión.",
      detalles: "Cristal templado 10mm · Zócalo y marcos en aluminio anodizado"
    },
    {
      id: "obra-13",
      titulo: "Edificio Residencial Multifamiliar en Esquina",
      categoria: "fachadas",
      imagen: "assets/img/img_197_886x1330.jpg",
      descripcion: "Diseño integral con ventanas corredizas Serie 25 en aluminio negro y mamparas en todos los balcones.",
      detalles: "Serie 25 negro semibrillante · Cristales templados"
    },
    {
      id: "obra-14",
      titulo: "Mampara Corrediza de Gran Altura Serie 80",
      categoria: "residencial",
      imagen: "assets/img/img_097_648x772.jpg",
      descripcion: "Mampara de departamento con marco triple y cortaviento perimétrico con apertura suave.",
      detalles: "Serie 80 Hermeti-K · Vidrio acústico de 8mm"
    },
    {
      id: "obra-15",
      titulo: "Puerta de Ducha Doble Corredizo con Perfilería Negra",
      categoria: "duchas",
      imagen: "assets/img/img_128_616x673.jpg",
      descripcion: "Elegante puerta de ducha con marcos en negro mate y tiradores dobles en acero inox.",
      detalles: "Cristal templado 8mm · Perfilería negro electrostático"
    },
    {
      id: "obra-16",
      titulo: "Puertas Principales y Mamparas Interiores de Aluminio",
      categoria: "puertas",
      imagen: "assets/img/img_124_524x415.jpg",
      descripcion: "Juego de puertas batientes residenciales con cerraduras de alta seguridad y paneles acústicos.",
      detalles: "Serie 71 · Blanco puro y acabado madera texturizada"
    }
  ],

  // Guía de Tecnología de Cristales (para pagina tecnologia-vidrios.html)
  tecnologiaCristales: [
    {
      tipo: "Vidrio Laminado de Seguridad",
      subtitulo: "Seguridad Activa, Protección Antirrobo y Control UV 99%",
      descripcion: "El vidrio laminado se produce intercalando una o más capas de Polivinil Butiral (PVB) de alta elasticidad entre láminas de cristal. Es el estándar legal obligatorio por INDECI para zonas con riesgo de impacto o caídas en altura.",
      beneficios: [
        { titulo: "Seguridad Antirrobo (No cae)", texto: "Al romperse ante un impacto violento, los fragmentos se mantienen firmemente adheridos a la lámina de PVB, impidiendo el ingreso forzado o accidentes." },
        { titulo: "Atenuación Acústica Certificada", texto: "El núcleo elástico de PVB absorbe las frecuencias del ruido del tráfico vehicular, frenando la contaminación sonora en tu hogar." },
        { titulo: "Protección UV al 99%", texto: "Bloquea casi la totalidad de la radiación ultravioleta dañina, protegiendo tus pisos de madera, muebles y cortinas contra la decoloración." },
        { titulo: "Cumplimiento RNE e INDECI", texto: "Homologado para superar inspecciones de defensa civil y licencias de obra en todo el Perú." }
      ],
      espesores: ["3+3 mm (6mm)", "4+4 mm (8mm)", "5+5 mm (10mm)", "6+6 mm (12mm)"]
    },
    {
      tipo: "Cristal Templado de Alta Resistencia",
      subtitulo: "Tratamiento Térmico: 5 Veces más Fuerte con Rotura Granular Segura",
      descripcion: "Sometido a un tratamiento térmico a más de 650°C y enfriado con chorros de aire frío a presión. Este proceso genera una compresión superficial que multiplica exponencialmente su resistencia mecánica y térmica.",
      beneficios: [
        { titulo: "Resistencia Mecánica 5x", texto: "Soporta ráfagas de viento de alta intensidad, impactos directos y cargas estructurales elevadas." },
        { titulo: "Rotura Granular Inofensiva", texto: "Si llegara a quebrarse, se disuelve en pequeños trozos cúbicos sin aristas filosas que no causan heridas graves." },
        { titulo: "Resistencia a Choques Térmicos", texto: "Tolera cambios extremos de temperatura de hasta 250°C, ideal para fachadas soleadas y mamparas de ducha." },
        { titulo: "Variedad de Tonalidades", texto: "Disponible en Incoloro, Bronce, Gris, Reflejante Green, Reflejante Blue, Dark Grey, Satelite Prima y Satinado Ácido." }
      ],
      espesores: ["4 mm", "5.5 mm", "6 mm", "8 mm", "10 mm", "12 mm"]
    },
    {
      tipo: "Vidrio Insulado (Doble Vidriado Hermético - DVH)",
      subtitulo: "Aislamiento Termoacústico Superior con Cámara de Gas Seco",
      descripcion: "Estructura compuesta por dos cristales separados por un perfil espaciador relleno de sales desecantes y una cámara estanca de aire seco o gas argón, con doble sellado primario de butilo y secundario estructural hot-melt.",
      beneficios: [
        { titulo: "Ahorro Energético en Climatización", texto: "Disminuye hasta en un 40% la transferencia de calor en verano y frío en invierno, reduciendo la factura de luz por aire acondicionado." },
        { titulo: "Máximo Silencio Acústico (dB)", texto: "La discontinuidad de la cámara de gas disipa las ondas sonoras de avenidas transitadas, transporte público y ruidos urbanos." },
        { titulo: "Cero Condensación Interior", texto: "La cara interior del vidrio se mantiene a temperatura ambiente, evitando que los vidrios 'suden' en invierno." },
        { titulo: "Doble Sellado Estructural", texto: "Garantía de hermeticidad total contra ingreso de humedad o polvo durante décadas." }
      ],
      espesores: ["Cámaras de aire: 6mm, 9mm, 12mm", "Combinaciones con cristales de 4mm, 6mm u 8mm"]
    }
  ],

  faqs: [
    {
      pregunta: "¿Cuál es la diferencia entre la Serie 25, la Serie 62 y la Serie 80?",
      respuesta: "La <b>Serie 25</b> es la más elegida para residencias y departamentos por su durabilidad y excelente relación costo-beneficio. La <b>Serie 62</b> es una línea europea de corte a 45° con perfil reforzado de 1.3 mm, diseñada para aislamiento termoacústico con vidrio insulado. La <b>Serie 80 (Hermeti-K)</b> es la gama alta para grandes dimensiones, terrazas y dúplex que requieren máxima estanqueidad contra el viento y triple riel."
    },
    {
      pregunta: "¿Realizan visitas técnicas a obra o domicilio para tomar medidas?",
      respuesta: "Sí. Coordinamos una visita técnica a tu domicilio u obra en cualquier distrito de Lima Metropolitana para rectificar medidas exactas con distanciómetro láser y asesorarte sobre el mejor sistema según tu presupuesto y necesidad acústica."
    },
    {
      pregunta: "¿Los vidrios instalados cumplen con las inspecciones de INDECI?",
      respuesta: "Totalmente. Suministramos exclusivamente cristales de seguridad certificados (templados y laminados) que cumplen con la Norma Técnica Peruana E.040 de Vidrio y los requisitos de seguridad exigidos por INDECI para licencias de obra y funcionamiento."
    },
    {
      pregunta: "¿Por qué instalar puertas de aluminio acabado madera en vez de madera real?",
      respuesta: "Las puertas de aluminio con acabado madera tienen la misma elegancia y calidez visual que la madera, pero no se hinchan con la humedad costera de Lima, no se apolillan, son incombustibles y no requieren el costoso lijado y barnizado anual."
    },
    {
      pregunta: "¿Cuánto tiempo demora la fabricación e instalación de un proyecto?",
      respuesta: "Para residencias y departamentos habituales (ventanas, mamparas o puertas de ducha), el tiempo promedio de fabricación e instalación es de <b>5 a 8 días hábiles</b> tras la confirmación de medidas. En proyectos corporativos o muros cortina, nos adaptamos al cronograma de obra."
    }
  ]
};

if (typeof window !== 'undefined') {
  window.LAURA_DATA = LAURA_DATA;
}
