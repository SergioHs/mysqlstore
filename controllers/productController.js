const productData = require('../data/product')

const getProducts = async () => {
    const products = productData.getProducts()
    if(products) {
        return products;
    } else {
        throw new Error("Erro ao obter os produtos")
    }
}

const getProductsById = async (productId) => {
    try {
        const product = productData.getProductById(productId)
        return product;

    } catch (error) {
        throw new Error("Erro ao obter o produto. Detalhes: " + error.message);
    }
}

module.exports = {
    getProducts,
    getProductsById
}