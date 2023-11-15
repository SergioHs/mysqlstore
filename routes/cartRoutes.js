const express = require('express')
const router = express.Router();
const cartController = require('../controllers/cartController')

router.get('/cartByUser/:userId', (req, res) =>{
    cartController.getCartByUserId(req.params.userId)
    .then((result) => {
        res.json(result);
    })
    .catch((error) => {
        res.status(500).send('Erro ao obter carrinho do usuário. Detalhes: ' + error)
    })
})

router.get('/:cartId/products', (req, res) => {
    const cartId = req.params.cartId;
    
})


module.exports = router;
