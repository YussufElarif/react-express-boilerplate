var express = require("express");
var app = express();
var mongoose = require("mongoose");
var bodyParser = require('body-parser');
var routes = require("./routes/routes");
var session = require('express-session');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(session({
  resave: false,
  saveUninitialized: true,
  secret: 'SECRET_SESSION_NAME'
}));

<<<<<<< HEAD
mongoose.connect("mongodb://localhost/" + "dbname");
=======
// mongoose.connect("mongodb://localhost/" + "dbname");
>>>>>>> 484dd924744c829083c1198fec8e05f09d3c0781

app.use(express.static(__dirname));
app.use(routes);

app.listen("3000");
