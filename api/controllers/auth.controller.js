var Account = require("../models/account.model");
module.exports.login = async function(req, res) {
    var username = req.body.username;
    var password = req.body.password;
    var account = new Account();
    Account.findOne({username: username, password: password}, function(error, success)  {
        if (success) {
            var token = account.generateJwt(success);
            console.log("test", token);
            res.json(success);
        } else {
            res.json("User not exist");
        }
    });
};
module.exports.register = async function(req, res) {
    var username = req.body.username;
    var password = req.body.password;
    var account = new Account();
    Account.findOne({username: username, password: password}, function(error, success)  {
        if (success) {
            var token = account.generateJwt(success);
            console.log("test", token);
            res.json(success);
        } else {
            res.json("User not exist");
        }
    });
};