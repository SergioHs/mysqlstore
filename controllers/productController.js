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

const getProductsPaginated = async (page = 1, pageSize = 20) => {
    try {

        if(page === 0){
            page = 1;
        }

        const startIndex = (page - 1) * pageSize;

        const products = productData.getProductsPaginated(startIndex, pageSize)
        
        return products;

    } catch (error) {
        throw new Error("Erro ao obter produtos paginados! Detalhes: " + error.message)
    }
    

}


const getProductsWithCategories = async () => {
    try{
        const products = productData.getProductsWithCategories()
        return products;
    } catch (error) {
        throw new Error("Erro ao obter produtos com categorias. Detalhes: " + error.message)
    }
}

module.exports = {
    getProducts,
    getProductsById,
    getProductsWithCategories,
    getProductsPaginated
}