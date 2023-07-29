function filterProducts (products, category) {
    return products.filter(product => product.category == category);
}

export { filterProducts };