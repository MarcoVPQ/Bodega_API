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
  images: {
      type: Array
  },
  purchased: Number,
  description: {
      type: String
  }
})

const Product = mongoose.model('Product', productSchema)

module.exports = Product