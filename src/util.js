function filterProducts(products, category, selectedPrices) {
    let filteredProducts = [];
    if (selectedPrices && selectedPrices.length != 0) {
        filteredProducts = products.filter(product => product.category == category);
        filteredProducts = products.filter(product => {
            let isInRange = false;
            selectedPrices.forEach(price => {
                if (product.price >= price.split('-')[0] && product.price <= price.split('-')[1]) {
                    isInRange = true;
                }
            })
            return isInRange;
        })
    }else {
        filteredProducts = products.filter(product => product.category == category);
    }
    console.log(products);
    console.log(selectedPrices)
    return filteredProducts;
}

export { filterProducts };