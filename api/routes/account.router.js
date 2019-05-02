var express = require("express");
var router = express.Router();
var controller = require("../controllers/account.controller");

// Create account
router.post("/create", controller.create);
router.get("/isExistUsername/:username", controller.isExistUsername);
module.exports = router;

