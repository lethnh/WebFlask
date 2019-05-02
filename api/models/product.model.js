const mongoose = require("mongoose");
var product = new mongoose.Schema({
  price: Number,
  name: String,
  image: String,
  description: String,
  status: Boolean,
  review: Number,
});

var Product = mongoose.model("Product", product, "product");
module.exports = Product;
