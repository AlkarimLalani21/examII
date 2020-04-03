const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: [true, "Products must enter a name"], minlength: [3, "Name need at least 3 characters!"]},
  quantity: {type: Number, required: [true, "Products must enter a quantity"], default:0 },
  price: {type: Number, required: [true, "Products must enter a price"], default:0 }
  }, {timestamps: true});

const Product = mongoose.model("Product", ProductSchema);
// 

module.exports = Product;