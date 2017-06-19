var express = require("express");
var app = express();
var mongoose = require("mongoose");
var bodyParser = require('body-parser');
var routes = require("./routes/routes");
var session = require('express-session');
var bluebird = require('bluebird');
var port = process.env.PORT || "8080";

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(session({
  resave: false,
  saveUninitialized: true,
  secret: 'SECRET_SESSION_NAME'
}));

// mongoose.Promise = bluebird;
// mongoose.connect("mongodb://localhost/" + "react-boilerplate");

app.use(express.static(__dirname));
app.use(routes);

app.listen(port, () => console.log("listening at localhost:" + port));

module.exports = app;