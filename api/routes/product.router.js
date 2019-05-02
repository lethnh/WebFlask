var express = require("express");
var router = express.Router();
var controller = require("../controllers/product.controller")

// Get all product
router.get("/", controller.index);

// Find product
router.get("/findProductById/:id", controller.findProductById);

// Create product
router.post("/create", controller.create);

//Delete product
router.delete("/delete/:id", controller.deleteProduct);

//Edit product
router.put("/edit/:id", controller.editProductById);


module.exports = router;
