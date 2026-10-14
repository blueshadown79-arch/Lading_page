import React, { useState, useMemo } from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HeroSearch } from './components/hero/HeroSearch';
import { CatalogGrid } from './components/catalog/CatalogGrid';
import { SearchResults } from './components/catalog/SearchResults';
import { CategoryModal } from './components/catalog/CategoryModal';
import { Lightbox } from './components/catalog/Lightbox';
import { AluminumSeries } from './components/series/AluminumSeries';
import { GlassTechnology } from './components/glass/GlassTechnology';
import { WorksMosaic } from './components/gallery/WorksMosaic';
import { MissionVision } from './components/about/MissionVision';
import { FinalCTA } from './components/cta/FinalCTA';
import { FloatingWhatsApp } from './components/ui/FloatingWhatsApp';

import catalogoData from './data/catalogo.json';
import { CategoryItem, CatalogImage } from './types/catalog';
import { buscarEnCatalogo } from './utils/searchEngine';

export const App: React.FC = () => {
  // Estado de la búsqueda en vivo
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Resultados difusos calculados en vivo con Fuse.js
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    return buscarEnCatalogo(searchQuery);
  }, [searchQuery]);

  // Modal de Categoría
  const [activeCategoryId, setActiveCategoryId] = useState<string | null>(null);
  const activeCategory = useMemo<CategoryItem | null>(() => {
    if (!activeCategoryId) return null;
    return (catalogoData.categorias as unknown as CategoryItem[]).find(c => c.id === activeCategoryId) || null;
  }, [activeCategoryId]);

  // Lightbox a pantalla completa
  const [lightboxOpen, setLightboxOpen] = useState<boolean>(false);
  const [lightboxImages, setLightboxImages] = useState<CatalogImage[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState<number>(0);
  const [lightboxCategoryName, setLightboxCategoryName] = useState<string>("");

  // Abrir Lightbox desde el modal de categoría
  const handleOpenPhotoFromCategory = (index: number) => {
    if (!activeCategory) return;
    setLightboxImages(activeCategory.fotos);
    setLightboxIndex(index);
    setLightboxCategoryName(activeCategory.nombre);
    setLightboxOpen(true);
  };

  // Abrir Lightbox desde el mosaico de obras destacadas
  const handleOpenPhotoFromMosaic = (image: CatalogImage) => {
    setLightboxImages([image]);
    setLightboxIndex(0);
    setLightboxCategoryName(image.titulo);
    setLightboxOpen(true);
  };

  const handleChipClick = (term: string) => {
    setSearchQuery(term);
    const resultsEl = document.getElementById('catalogo-contenedor');
    if (resultsEl) {
      resultsEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 selection:bg-brand-glass selection:text-brand-navy-dark">
      
      {/* 1. Header delgado fijo */}
      <Header />

      {/* 2. Hero con Barra de Búsqueda Central (Buscador Primero) */}
      <HeroSearch
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onChipClick={handleChipClick}
      />

      {/* 3. Área de Catálogo: Con búsqueda muestra SearchResults; sin búsqueda muestra CatalogGrid */}
      <main id="catalogo-contenedor" className="flex-grow">
        {searchQuery.trim().length > 0 ? (
          <SearchResults
            query={searchQuery}
            results={searchResults}
            onClearSearch={() => setSearchQuery("")}
            onOpenCategoryModal={(catId) => setActiveCategoryId(catId)}
          />
        ) : (
          <CatalogGrid
            categories={catalogoData.categorias as unknown as CategoryItem[]}
            onOpenCategoryModal={(catId) => setActiveCategoryId(catId)}
          />
        )}

        {/* 4. Series de Aluminio (Serie 25, 62, 80, 71, 35 y Sistema Nova) */}
        <AluminumSeries />

        {/* 5. Tipos de Vidrio (Laminado PVB con INDECI, Templado, Insulado DVH) */}
        <GlassTechnology />

        {/* 6. Obras Realizadas (Mosaico con las mejores fotos del catálogo) */}
        <WorksMosaic onOpenPhoto={handleOpenPhotoFromMosaic} />

        {/* 7. Quiénes Somos (Misión y Visión oficiales condensadas) */}
        <MissionVision />

        {/* 8. Llamado Final (Cotiza tu proyecto con WhatsApp y catálogo PDF) */}
        <FinalCTA />
      </main>

      {/* 9. Footer Oficial */}
      <Footer />

      {/* Modal de Galería de Categoría */}
      <CategoryModal
        category={activeCategory}
        isOpen={!!activeCategoryId}
        onClose={() => setActiveCategoryId(null)}
        onOpenPhoto={handleOpenPhotoFromCategory}
      />

      {/* Lightbox a Pantalla Completa */}
      <Lightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        images={lightboxImages}
        currentIndex={lightboxIndex}
        onPrev={() => setLightboxIndex((prev) => (prev > 0 ? prev - 1 : lightboxImages.length - 1))}
        onNext={() => setLightboxIndex((prev) => (prev < lightboxImages.length - 1 ? prev + 1 : 0))}
        categoryName={lightboxCategoryName}
      />

      {/* Botón Flotante de WhatsApp */}
      <FloatingWhatsApp />

    </div>
  );
};

export default App;
