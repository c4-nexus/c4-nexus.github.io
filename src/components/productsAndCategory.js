import { html, render } from '../lib.js';


// Function to render product tiles
function renderProductGrid(products, selectedCategory) {
    const productGridContainer = document.querySelector('.product-grid');
    const filteredProducts = selectedCategory ? products.filter(product => product.category == selectedCategory) : products;

    const productTemplate = (product) => html`
            <div class="product-card">
            <img src="${product.thumbnail}" alt="${product.name}" />
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p>Price: $${product.price}</p>
            <p>Ratings: ${product.rating} stars</p>
            <button class="add-to-cart">Add to Cart</button>
        </div>`

    render(filteredProducts.map(productTemplate), productGridContainer);
}

// Function to render category description
function renderCategoryDescription(categories, selectedCategory) {
    const categoryDescriptionContainer = document.querySelector('.category-description');
    const categoryDescription = categories[selectedCategory];

    const categoryTemplate = html`
        <h2>${selectedCategory}</h2>
        <p>${categoryDescription}</p>`
    render(categoryTemplate, categoryDescriptionContainer);
}

// Function to handle category change
function handleCategoryChange(event, products, categories) {
    const selectedCategory = event.target.value;

    renderProductGrid(products, selectedCategory);
    renderCategoryDescription(categories, selectedCategory);
}

export {
    renderProductGrid,
    renderCategoryDescription,
    handleCategoryChange
}