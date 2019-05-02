var Product = require('../models/product.model');

// Display list of all Authors.
exports.product_list = async function (req, res) {
    var products = await Product.find();
    res.json(products);
};
exports.create = async function(req, res) {
    var product = await Product.create(req.body);
    console.log(req.body);
    res.json(product);
};