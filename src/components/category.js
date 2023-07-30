import { html, render } from "../lib.js";
const container = document.querySelector('.category-description');

// Function to render category description
function renderCategoryDescription(categories, category) {
    const categoryDescription = categories[category];

    const categoryTemplate = html`
        <h2>${category}</h2>
        <p>${categoryDescription}</p>`
    render(categoryTemplate, container);
}

// Function to handle category change
function handleCategoryChange(event, category, products, categories, renderProductGrid, renderPriceRangeFilters) {
    category[0] = event.target.value;
    renderProductGrid(products, category[0], null);
    renderCategoryDescription(categories, category[0]);
    renderPriceRangeFilters(products, category[0]);
}

export {
    renderCategoryDescription,
    handleCategoryChange
}