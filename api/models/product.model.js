const mongoose = require("mongoose");
var product = new mongoose.Schema({
    price: Number,
    name: String,
    image: String,
    description: String,
    status: Boolean
});

var Product = mongoose.model("Product", product, "product");
module.exports = Product;