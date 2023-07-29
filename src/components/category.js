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
function handleCategoryChange(event, products, categories, renderProductGrid) {
    const category = event.target.value;

    renderProductGrid(products, category);
    renderCategoryDescription(categories, category);
}

export {
    renderCategoryDescription,
    handleCategoryChange
}