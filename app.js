var express = require("express");
var app = express();
var mongoose = require("mongoose");
var bodyParser = require('body-parser');
var routes = require("./routes/routes");
var session = require('express-session');
var options = require("./options.js");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(session({
  resave: false,
  saveUninitialized: true,
  secret: options.SECRET_SESSION
}));

mongoose.connect(options.MONGO_URL + "emerald");

app.use(express.static(__dirname));

app.use(routes);

app.listen("3000");
