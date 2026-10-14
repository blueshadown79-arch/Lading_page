export interface CatalogImage {
  archivo: string;
  ruta: string;
  titulo: string;
  descripcion: string;
  ancho: number;
  alto: number;
  paginaPdf: number;
}

export interface CategoryItem {
  id: string;
  slug: string;
  nombre: string;
  descripcionCorta: string;
  imagenPortada: string;
  totalFotos: number;
  palabrasClave: string[];
  fotos: CatalogImage[];
}

export interface SeriesSpec {
  id: string;
  nombre: string;
  tagline: string;
  espesor: string;
  apertura: string;
  acustica: string;
  cargaRueda: string;
  vidrios: string;
  descripcion: string;
  imagen: string;
  caracteristicas: string[];
  colores: string[];
}

export interface GlassType {
  id: string;
  nombre: string;
  subtitulo: string;
  descripcion: string;
  beneficios: { titulo: string; desc: string }[];
  espesores: string[];
  imagen: string;
}

export interface SearchResultItem {
  id: string;
  nombre: string;
  categoriaNombre: string;
  descripcionCorta: string;
  imagen: string;
  palabrasClave: string[];
  slug: string;
}
