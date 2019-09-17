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

router.get('/product/:id', async (req, res) => {

    try{
      const id = req.params.id
      const product = await Product.findById(id)

      res.send(product)
      
    }catch(e){
        res.send(e)
    }
})



/*router.post('/products', (req, res) => {
  
    Route to add bilk items to collection

    Product.collection.insertMany(req.body,(err, docs) => {
        if(err){
            return console.log(err)
        } else {
            console.log('Success')
        }
    })

    
})
*/

module.exports = router