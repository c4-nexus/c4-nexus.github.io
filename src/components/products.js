import { html, render } from '../lib.js';
const container = document.querySelector('.product-grid');


// Function to render product tiles
function renderProductGrid(ctx) {
    ctx.filteredProducts = ctx.filterProducts(ctx);
    const productTemplate = (product) => html`
            <div class="product-card">
            <img src="${product.thumbnail}" alt="${product.name}" />
            <h3>${product.name}</h3>
            <p>${product.metal}</p>
            <p>${product.category}</p>
            <p>${product.description}</p>
            <p>Price: $${product.price}</p>
            <p>Ratings: ${product.rating} stars</p>
            <button class="add-to-cart">Add to Cart</button>
        </div>`
    render(ctx.filteredProducts.map(productTemplate), container);
}

export {
    renderProductGrid
}