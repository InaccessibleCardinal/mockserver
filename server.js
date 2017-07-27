var express = require('express');
//var bodyParser = require('body-parser');
var checks = require('./checks');

var app = express();
// app.use(bodyParser.urlencoded({extended: true}));
// app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function(req, res) {
  res.send(checks);
});

app.listen(4111);
console.log('app is on port 4111');
//console.log(checks);
