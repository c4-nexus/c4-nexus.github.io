import { html, render } from '../lib.js';
const productContainer = document.querySelector('.product-grid');
const counterContainer = document.querySelector('.product-counter');
const loadMoreButton = document.querySelector('#load-more-btn');


// Function to render product tiles
function renderProductGrid(ctx) {

    ctx.filteredProducts = ctx.filterProducts(ctx);

    if(ctx.shownProducts.length > ctx.filteredProducts.length) {
        ctx.gridCounter = 8;
    }

    if (ctx.filteredProducts.length >= ctx.gridCounter - 8) {
        ctx.shownProducts = ctx.filteredProducts.slice(0, ctx.gridCounter);
    }

    if (ctx.filteredProducts.length < 8) {
        ctx.shownProducts = ctx.filteredProducts.slice(0, ctx.filteredProducts.length)
    }

    if (ctx.shownProducts.length != ctx.filteredProducts.length) {
        loadMoreButton.style.display = 'block';
    }else {
        loadMoreButton.style.display = 'none';
    }
    
    const productTemplate = (product) => html`
            <div class="product-card">
            <img src="${product.thumbnail}" alt="${product.name}" />
            <h3>${product.name}</h3>
            <p>Metal: ${product.metal}</p>
            <p>${product.description}</p>
            <p>Price: $${product.price}</p>
            <p>Ratings: ${product.rating} stars</p>
            <button class="add-to-cart">Add to Cart</button>
        </div>`

    const countTemplate = (ctx) => html`
        <span id="product-count">${ctx.shownProducts.length}</span> out of <span id="total-products">${ctx.filteredProducts.length} products</span>
    `
    render(countTemplate(ctx), counterContainer);
    render(ctx.shownProducts.map(productTemplate), productContainer);
}


export {
    renderProductGrid
}