import { handleCategoryChange, renderProductGrid, renderCategoryDescription } from './components/productsAndCategory.js';
import { getData } from './data.js';
import { initializePriceSlider } from './components/priceFiltering.js'

// Add event listeners
document.addEventListener('DOMContentLoaded', async () => {
    const categoriesSelect = document.getElementById('categories-select');
    const [products, categories] = await Promise.all([getData('products'), getData('categories')]);
    categoriesSelect.addEventListener('change', (event) => handleCategoryChange(event, products, categories));

    //Initial load
    const initialCategory = 'Engagement rings';
    renderProductGrid(products, initialCategory);
    renderCategoryDescription(categories, initialCategory);

    //Price filter
    initializePriceSlider(0, 150, renderProductGrid, products);
});
