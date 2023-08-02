import { renderProductGrid } from './components/products.js';
import { handleCategoryChange, renderCategoryDescription } from './components/category.js';
import { getData } from './data.js';
import { renderPriceRangeFilters } from './components/priceFilter.js';
import { filterProducts } from './util.js';
import { renderMetalTypeFilters } from './components/metalFilter.js'

// Add event listeners
document.addEventListener('DOMContentLoaded', async () => {
    const [products, categories] = await Promise.all([getData('products'), getData('categories')]);


    const ctx = {
        filterProducts,
        renderProductGrid,
        renderPriceRangeFilters,
        renderMetalTypeFilters,
        products,
        categories,
        category: 'Engagement rings',
        selectedPrices: [],
        selectedMetals: [],
        filteredProducts: []
    }


    //Initial load
    renderProductGrid(ctx);
    renderCategoryDescription(ctx);
    renderPriceRangeFilters(ctx);
    renderMetalTypeFilters(ctx);

    //Event handlers

    //category change
    const categoriesSelect = document.getElementById('categories-select');
    categoriesSelect.addEventListener('change', (event) => handleCategoryChange(event, ctx));
});
