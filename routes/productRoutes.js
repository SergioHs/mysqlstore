const express = require('express')
const router = express.Router();
const productController = require('../controllers/productController')

router.get('/', (req, res) => {
    productController.getProducts()
        .then((productsData) => {
            res.json(productsData)

        })
        .catch((error) => {
            res.status(500).send('Erro ao obter produtos!' + error)
        }) 

})

module.exports = router;