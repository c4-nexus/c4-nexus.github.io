import { getData } from "../data.js";
import { html, render } from "../lib.js";
const container = document.querySelector('.category-description');

// Function to render category description
function renderCategoryDescription(ctx) {
    const categoryDescription = ctx.categories[ctx.category];

    const categoryTemplate = html`
        <h2>${ctx.category}</h2>
        <p>${categoryDescription}</p>`
    render(categoryTemplate, container);
}

// Function to handle category change
async function handleCategoryChange(event, ctx) {
    ctx.category = event.target.value;
    ctx.products = await getData('products');
    ctx.selectedPrices = [];
    ctx.selectedMetals = [];
    ctx.renderProductGrid(ctx);
    renderCategoryDescription(ctx);
    ctx.renderPriceRangeFilters(ctx);
    ctx.renderMetalTypeFilters(ctx);
}

export {
    renderCategoryDescription,
    handleCategoryChange
}