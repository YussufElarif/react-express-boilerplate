var express = require('express');
var path = require("path");
var router = express.Router();

var product = require("./controllers/product");

router.route("/api/product")
      .get(product.index);

router.route("/api/product/:id")
      .get(product.show);

router.route('*')
      .get(function (req, res) {
            res.sendFile(path.resolve('./index.html'));
      });

module.exports = router;
