import { getData } from "../data.js";
import { html, render } from "../lib.js";

const catContainer = document.querySelector('nav');
const descContainer = document.querySelector('.category-description');

//Function to render categories
function renderCategories(ctx) {

    const categoriesTemplate = (ctx) => html`
          <ul id="categories-select">
            ${Object.keys(ctx.categories).map(categoryTemplate)}
          </ul>`

    const categoryTemplate = (category) => html`
    <li><a href="#">${category}</a></li>`

    render(categoriesTemplate(ctx), catContainer);

}


// Function to render category description
function renderCategoryDescription(ctx) {
    const categoryDescription = ctx.categories[ctx.category];

    const categoryTemplate = html`
        <h2>${ctx.category}</h2>
        <p>${categoryDescription}</p>`
    render(categoryTemplate, descContainer);
}

// Function to handle category change
async function handleCategoryChange(event, ctx) {
    ctx.category = event.target.textContent;
    ctx.products = await getData('products');
    ctx.selectedPrices = [];
    ctx.selectedMetals = [];
    ctx.gridCounter = 8;
    ctx.renderProductGrid(ctx);
    renderCategoryDescription(ctx);
    ctx.renderPriceRangeFilters(ctx);
    ctx.renderMetalTypeFilters(ctx);
}

export {
    renderCategoryDescription,
    handleCategoryChange,
    renderCategories
}