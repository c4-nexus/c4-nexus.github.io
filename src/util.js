function filterProducts(ctx) {
    ctx.filteredProducts = ctx.products.filter(product => product.category == ctx.category);
    if (ctx.selectedPrices && ctx.selectedPrices.length != 0) {
        ctx.filteredProducts = ctx.filteredProducts.filter(product => {
            let isInFilter = false;
            ctx.selectedPrices.forEach(price => {
                if (product.price >= price.split('-')[0] && product.price <= price.split('-')[1]) {
                    isInFilter = true;
                }
            })
            return isInFilter;
        })
    }

    if (ctx.selectedMetals && ctx.selectedMetals.length != 0) {
        ctx.filteredProducts = ctx.filteredProducts.filter(product => {
            let isInFilter = false;
            ctx.selectedMetals.forEach(metal => {
                if (product.metal == metal) {
                    isInFilter = true;
                }
            })
            return isInFilter;
        })
    }
    return ctx.filteredProducts;
}

export { filterProducts };