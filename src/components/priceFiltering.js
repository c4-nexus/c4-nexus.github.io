
// Function to initialize the price slider
function initializePriceSlider(minPrice, maxPrice, renderProductGrid, products) {
  const priceSlider = document.getElementById('price-slider');

  // Create the price slider using noUiSlider
  noUiSlider.create(priceSlider, {
    start: [minPrice, maxPrice],
    connect: true,
    range: {
      min: minPrice,
      max: maxPrice,
    },
    step: 1, // Adjust this step according to your price data
  });

  // Add event listener to handle filtering when slider values change
  priceSlider.noUiSlider.on('change', handlePriceFilter);

  function handlePriceFilter() {
    const priceSlider = document.getElementById('price-slider');
    const priceValues = priceSlider.noUiSlider.get();
  
    // Get the selected min and max prices
    const minPrice = Number(priceValues[0]);
    const maxPrice = Number(priceValues[1]);

    // Filter products based on the selected price range
    const filteredProducts = products.filter((product) => {
      return product.price >= minPrice && product.price <= maxPrice;
    });
  
    // Render the filtered product grid
    const selectedCategory = document.getElementById('categories-select').value; 
    renderProductGrid(filteredProducts, selectedCategory);
  }
}


export {
  initializePriceSlider
}