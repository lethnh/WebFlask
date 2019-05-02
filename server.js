var express = require("express");
const bodyParser = require('body-parser')
var cors = require('cors');
// Define route
var producrRoute = require("./api/routes/product.router");
var accountRoute = require("./api/routes/account.router");
var loginRoute = require("./api/routes/auth.router");
// var validateAccount = require("./apps/validations/account.validate");
var app = express();

// Connect to mongo db
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopping', {
  useNewUrlParser: true
});

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use("/api/product", producrRoute);
app.use("/api/account", accountRoute);
app.use("/api/auth", loginRoute);
app.listen(6969);
