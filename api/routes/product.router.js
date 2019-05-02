var express = require('express');
var router = express.Router();
var product_controller = require('../controllers/productController');

// GET request for list of all Authors.
router.get('/', product_controller.product_list);
router.post('/create', product_controller.create);
module.exports = router;
