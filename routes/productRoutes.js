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
// http://localhost:3000/products/paginated?page=2&pageSize=15
router.get('/paginated', (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const pageSize = parseInt(req.query.pageSize) || 20;

    productController.getProductsPaginated(page, pageSize)
        .then((products) => {
            res.json(products)
        }) 
        .catch((error) => {
            res.status(500).send('Erro ao obter produtos!' + error)
        })
})

router.get('/withCategories', (req, res) => {
    productController.getProductsWithCategories()
        .then((productsData) => {
            res.json(productsData)
        })
        .catch((error) => {
            res.status(500).send('Erro ao obter produtos com categorias!')
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