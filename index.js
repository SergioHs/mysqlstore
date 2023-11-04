const cors = require('cors')
const express = require('express')
const productRoutes = require('./routes/productRoutes')

const app = express();
const port = 3000;

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send("Hello World")
})

app.use('/products', productRoutes)

app.listen(port, () => {
    console.log('Servidor rodando em http://localhost:' + port);
})
