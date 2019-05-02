const http = require('http');
const express = require('express')
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors');
const wiki = require('./api/routes/wiki');
const indexRouter = require('./api/routes/product.router');


const hostname = '127.0.0.1';
const port = 6969;

app.use('/wiki', wiki);
app.use('/api/product', indexRouter);

const mongoDB = 'mongodb://localhost:27017/shopping';
mongoose.connect(mongoDB, {
  useNewUrlParser: true
});

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
