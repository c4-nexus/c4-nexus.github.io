import { html, render } from "../lib.js";
import { filterProducts } from "../util.js";
const container = document.querySelector('.price-filter');

function renderPriceRangeFilters(products, category) {
  const allPrices = filterProducts(products, category, null).map(product => product.price);
  const maxPrice = Math.ceil(Math.max(...allPrices));
  // const minPrice = Math.floor(Math.min(...allPrices));
  const priceRanges = [];

  for (let i = 0; i < maxPrice; i += 50) {
    priceRanges.push(i);
  }
  
  const priceRangeTemplate = (priceRanges) => html`
        <h4>Filter by Price</h4>
        ${priceRanges.map(inputRowTemplate)}`

  const inputRowTemplate = (initialValue) => html`
        <label>
          <input  type="checkbox" name="price" value=${`${initialValue}-${(initialValue + 49.99).toFixed(2)}`}>
           ${`${initialValue}-${(initialValue + 49.99).toFixed(2)}`}
        </label>`

  Array.from(document.querySelectorAll('input[name="price"]')).forEach(input => input.checked = false);
  render(priceRangeTemplate(priceRanges), container);
}


function handlePriceFiltering(category, products, renderProductGrid) {
  const selectedPrices = [];
  if (!category[0]) {
    category[0] = 'Engagement rings';
  }
  Array.from(document.querySelectorAll('input[name="price"]')).forEach(input => input.checked ? selectedPrices.push(input.value) : null);
  renderProductGrid(products, category[0], selectedPrices);
}


export {
  renderPriceRangeFilters,
  handlePriceFiltering
}