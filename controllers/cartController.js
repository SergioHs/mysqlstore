const cartData = require('../data/cart')

const getCartByUserId = async (userId) => {
    try {
        const cartInfo = cartData.getCartByUserId(userId);
        return cartInfo;
    } catch (error) {
        throw new Error("Erro ao consultar iformações do carrinho deste usuário. Detalhes: " + error)
    }
}

const getProductsByCartId = (cartId) => {
    try {
        
    } catch (error) {
        
    }
}

module.exports = {
    getCartByUserId,
    getProductsByCartId
};