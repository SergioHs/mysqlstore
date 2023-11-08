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

router.get('/:id', (req, res) => {
    productController.getProductsById(req.params.id)
        .then((productData) => {
            if(productData){
                res.status(200).send(productData)
            } else {
                res.status(404).send('Produto não encontrado!')
            }
        })
        .catch((error) => {
            res.status(500).send('Erro ao obter produtos!' + error)
        })

})


module.exports = router;