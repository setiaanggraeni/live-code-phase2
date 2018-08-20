const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProductSchema = new Schema({
  name: String,
  price: Number,
  stock: Number,
  tags: [{
    type: String
  }],
  user: { type: Schema.Types.ObjectId, ref: 'Users' }
})

const product = mongoose.model('Products', ProductSchema)
module.exports = product
