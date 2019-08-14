const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
  name: {
      type: String
  },
  price: {
      type: Number
  },
  available: {
      type: Number
  },
  imgPath: {
      type: String
  },
  purchased: Number
})

const Product = mongoose.model('Product', productSchema)

module.exports = Product