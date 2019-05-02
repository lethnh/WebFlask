// const mongoose = require("mongoose");
// var crypto = require('crypto');
// var jwt = require('jsonwebtoken');
// var fs = require("fs");
// var privateKey = fs.readFileSync("./config/private.key", "utf8");
// var publicKey = fs.readFileSync("./config/public.key", "utf8");
// var account = new mongoose.Schema({
//     username: String,
//     password: String,
//     address: String,
//     age: Number,
//     gender: String,
//     email: String
// });

// account.methods.generateJwt = function (account) {
//     var expiry = new Date();
//     return jwt.sign({
//         account: account,
//         exp: parseInt(expiry.getTime()/ 1000, 10)
//     }, privateKey);
// }

// var Account = mongoose.model("Account", account, "account");
// module.exports = Account;