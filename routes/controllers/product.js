var rest = require("restler");
var Product = require("../models/product");

function index(req, res) {
  Product.find({}).exec(function (err, products) {
    if (err) return res.json({ success: false, err });
    res.json({ success: true, products });
  });
}

function show(req, res) {
  Product.findOne({ id: req.params.id }, function (err, product) {
    if (err) return res.json({ success: false, err });
    res.json({ success: true, product });
  });
}

module.exports = {
  index: index,
  show: show
};