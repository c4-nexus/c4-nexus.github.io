import { renderProductGrid } from './components/products.js';
import { handleCategoryChange, renderCategoryDescription } from './components/category.js';
import { getData } from './data.js';
import { renderPriceRangeFilters } from './components/priceFilter.js'

// Add event listeners
document.addEventListener('DOMContentLoaded', async () => {

    const categoriesSelect = document.getElementById('categories-select');
    const [products, categories] = await Promise.all([getData('products'), getData('categories')]);

    //Initial load
    const initialCategory = 'Engagement rings';
    renderProductGrid(products, initialCategory);
    renderCategoryDescription(categories, initialCategory);
    renderPriceRangeFilters(products, initialCategory);

    //Event handlers
    categoriesSelect.addEventListener('change', (event) => handleCategoryChange(event, products, categories, renderProductGrid));

});
