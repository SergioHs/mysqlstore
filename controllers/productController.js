const productData = require('../data/product')

const getProducts = async () => {
    const products = productData.getProducts()
    if(products) {
        return products;
    } else {
        throw new Error("Erro ao obter os produtos")
    }

}

module.exports = {
    getProducts
}