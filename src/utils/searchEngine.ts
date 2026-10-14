import Fuse from 'fuse.js';
import catalogoData from '../data/catalogo.json';

// Creamos una lista aplanada de elementos indexables para Fuse.js
// Incluye categorías principales y fotos destacadas para búsquedas profundas
export interface SearchableItem {
  id: string;
  nombre: string;
  categoriaNombre: string;
  categoriaId: string;
  descripcionCorta: string;
  imagen: string;
  palabrasClave: string[];
  slug: string;
}

const itemsParaBuscar: SearchableItem[] = catalogoData.categorias.map((cat: any) => ({
  id: cat.id,
  nombre: cat.nombre,
  categoriaNombre: cat.subcategoria || cat.nombre,
  categoriaId: cat.id,
  descripcionCorta: cat.descripcionCorta,
  imagen: cat.imagenPortada,
  palabrasClave: cat.palabrasClave || [],
  slug: cat.slug,
}));

// Opciones de Fuse.js para tolerancia a faltas de ortografía, tildes y sinónimos
const fuseOptions = {
  includeScore: true,
  threshold: 0.38, // Balance óptimo entre flexibilidad y relevancia
  ignoreLocation: true,
  keys: [
    { name: 'nombre', weight: 0.4 },
    { name: 'palabrasClave', weight: 0.4 },
    { name: 'descripcionCorta', weight: 0.15 },
    { name: 'categoriaNombre', weight: 0.05 },
  ]
};

const fuseInstance = new Fuse(itemsParaBuscar, fuseOptions);

// Función normalizadora de tildes para búsqueda en español
function normalizarTexto(texto: string): string {
  return texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

// Diccionario de sinónimos clave
const SINONIMOS: Record<string, string[]> = {
  ducha: ["mampara", "baño", "euro", "shower", "box", "vidrio templado"],
  bano: ["ducha", "mampara", "separatas", "sanitario"],
  cristal: ["vidrio", "luna", "templado", "laminado", "insulado"],
  vidrio: ["cristal", "luna", "templado", "laminado", "insulado"],
  techo: ["pergola", "sol y sombra", "listones", "vigas", "policarbonato"],
  pergola: ["techo", "sol y sombra", "listones"],
  ventana: ["corrediza", "proyectante", "nova", "serie 25", "serie 62", "acustica"],
  puerta: ["acceso", "batiente", "ingreso", "serie 71", "serie 35", "aluminio madera"],
  baranda: ["pasamanos", "barandilla", "acero inox", "balcon", "escalera"],
  pasamanos: ["baranda", "acero inoxidable", "escalera"],
  spider: ["muro cortina", "araña", "fachada", "piel de vidrio"],
  fachada: ["muro cortina", "spider", "edificio", "piel de vidrio"],
};

export function buscarEnCatalogo(query: string): SearchableItem[] {
  const cleanQuery = query.trim();
  if (!cleanQuery) return [];

  // Búsqueda directa en Fuse
  const results = fuseInstance.search(cleanQuery);
  const matched = results.map(r => r.item);

  // Si hay pocos resultados, expandimos con sinónimos
  const queryWords = normalizarTexto(cleanQuery).split(/\s+/);
  const sinonimosAdicionales: string[] = [];

  queryWords.forEach(word => {
    for (const [key, synList] of Object.entries(SINONIMOS)) {
      if (normalizarTexto(key).includes(word) || word.includes(normalizarTexto(key))) {
        sinonimosAdicionales.push(...synList);
      }
    }
  });

  if (sinonimosAdicionales.length > 0 && matched.length < 3) {
    const synResults = fuseInstance.search(sinonimosAdicionales.join(' '));
    synResults.forEach(sr => {
      if (!matched.some(m => m.id === sr.item.id)) {
        matched.push(sr.item);
      }
    });
  }

  return matched;
}
