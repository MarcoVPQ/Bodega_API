const express = require('express')
const router = new express.Router()

const Product = require('../models/productModel')

router.get('/products', async (req, res) => {
    
    try{
        const products = await Product.find()

        res.send(products)

    } catch(e) {
        res.send(e)
    }
})

module.exports = router