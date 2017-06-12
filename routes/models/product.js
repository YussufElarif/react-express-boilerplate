var mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: false },
    price: { type: Number, required: true },
    images: { type: [String], required: false },
    tags: { type: [String], required: false }
});

module.exports = mongoose.model('Product', ProductSchema)