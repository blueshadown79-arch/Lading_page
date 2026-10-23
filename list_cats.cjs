const c = require('./src/data/catalogo.json');
c.categorias.forEach((cat, i) => {
  console.log(`${i + 1}. [${cat.id}] ${cat.nombre} (${cat.fotos.length} fotos) - Subcat: ${cat.subcategoria}`);
});
