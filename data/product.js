const dbConnection = require('./conn');

const getProducts = () => {
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM products';

        dbConnection.query(query, (err, results) => {
            if(err){
                reject(err);
            } else {
                resolve(results);
            }
        });

    })
}

module.exports = {
    getProducts
}