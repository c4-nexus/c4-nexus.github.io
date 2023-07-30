import { renderProductGrid } from './components/products.js';
import { handleCategoryChange, renderCategoryDescription } from './components/category.js';
import { getData } from './data.js';
import { renderPriceRangeFilters, handlePriceFiltering } from './components/priceFilter.js'

// Add event listeners
document.addEventListener('DOMContentLoaded', async () => {
    const [products, categories] = await Promise.all([getData('products'), getData('categories')]);
    let category = [];


    //Initial load
    const initialCategory = 'Engagement rings';
    renderProductGrid(products, initialCategory, null);
    renderCategoryDescription(categories, initialCategory);
    renderPriceRangeFilters(products, initialCategory);

    //Event handlers
    const categoriesSelect = document.getElementById('categories-select');
    categoriesSelect.addEventListener('change', (event) => handleCategoryChange(event, category, products, categories, renderProductGrid, renderPriceRangeFilters));

    const priceInputs = Array.from(document.querySelectorAll('input[name="price"]'));
    priceInputs.forEach(el => el.addEventListener('click', (event) => handlePriceFiltering(category, products, renderProductGrid)));
});
