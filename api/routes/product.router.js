var express = require("express");
var router = express.Router();
var controller = require("../controllers/product.controller")

// Get all product
router.get("/", controller.index);

// Create product
router.post("/create", controller.create);

// Find product
router.get("/findProductById/:id", controller.findProductById);
module.exports = router;