const dbConnection = require('./conn');

const getCartByUserId = (userId) => {
    return new Promise((resolve, reject) => {
        const query = `
        SELECT 
            carts.cart_id,
            users.user_name,
            SUM(products.product_price * cart_products.cart_products_quantity) AS total_cart    
        FROM carts
        JOIN users ON carts.user_id = users.user_id
        JOIN cart_products ON carts.cart_id = cart_products.cart_id
        JOIN products ON cart_products.product_id = products.product_id
        WHERE carts.user_id = ? AND carts.cart_status = 1
        GROUP BY carts.cart_id
        `
        dbConnection.query(query, [userId], (err, results) =>{
            if(err){
                reject(err)
            } else {
                resolve(results)
            }
        })   
    })
}

const getProductsByCartId = (cartId) => {
    return new Promise((resolve, reject) => {
        const query = `
            SELECT 
                products.product_id,
                products.product_title,
                products.product_price,
                cart_products.cart_products_quantity
            FROM cart_products
            JOIN products ON cart_products.product_id = products.product_id
            WHERE cart_products.cart_id = ? 
        `;
        
        dbConnection.query(query, [cartId], (err, result) => {
            if(err){
                reject(err);
            }else{
                resolve(results);
            }
        })
    })
}

module.exports = {
    getCartByUserId
}