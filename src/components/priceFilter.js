import { html, render } from "../lib.js";
import { filterProducts } from "../util.js";
const container = document.querySelector('.price-filter');

function renderPriceRangeFilters(products, category) {
  const filteredProducts = filterProducts(products, category);
  const allPrices = [];
  filteredProducts.forEach(product => allPrices.push(product.price));
  const minPrice = Math.floor(Math.min(...allPrices));
  const maxPrice = Math.ceil(Math.max(...allPrices));
  const priceRanges = [];

  for (let i = 0; i <= maxPrice; i += 50) {
    priceRanges.push(i);
  }
  

  const priceRangeTemplate = (priceRanges) => html`
        <h4>Filter by Price</h4>
        ${priceRanges.map(inputRowTemplate)}`

  const inputRowTemplate = (initialValue) => html`
        <label>
          <input type="checkbox" name="price" value=${`${initialValue}-${(initialValue + 49.99).toFixed(2)}`}>
           ${`${initialValue}-${(initialValue + 49.99).toFixed(2)}`}
        </label>`

  render(priceRangeTemplate(priceRanges), container);
}

export {
  renderPriceRangeFilters
}