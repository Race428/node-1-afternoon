const express = require('express')
const app = express( )
const port = 4001
const getProducts = require('./getProducts')
const getProduct = require('./getProduct')



app.get('/api/products', getProducts)

app.get('/api/product/:id', getProduct)


app.listen(port, () => {
  console.log( `server listening on port: ${port}`)
})
