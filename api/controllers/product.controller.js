var Product = require("../models/product.model");
var multer = require('multer')
var upload = multer({
  dest: 'uploads/'
})

module.exports.index = async function (req, res) {
  var products = await Product.find();
  res.json(products);
};

module.exports.create = async function (req, res) {
  var product = await Product.create(req.body);
  res.json(product);
};

module.exports.findProductById = async function (req, res) {
  var product = await Product.findById(req.params.id);
  res.json(product);
};

module.exports.deleteProduct = async function (req, res) {
  var product = await Product.findOneAndDelete(req.params.id);
  res.json(product);
};

module.exports.editProductById = async function (req, res) {
  var product = await Product.findOneAndUpdate(req.params.id, req.body);
  res.json(product);
};
