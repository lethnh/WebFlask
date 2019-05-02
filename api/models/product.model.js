var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ProductSchema = new Schema({
  price: Number,
  name: String,
  image: String,
  description: String,
  status: Boolean
});
//Export model
module.exports = mongoose.model('Product', ProductSchema,'product');