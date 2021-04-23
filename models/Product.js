const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  name: {
    type: String,
  },
  price: {
    type: String,
  },
  color: {
    type: String,
  },
  material: {
    type: String,
  },
  size: {
    type: String,
  },
  type: {
    type: String,
  },
  description: {
    type: String,
  },
  gender: { type: String },

  image: {
    type: String,
  },
});

module.exports = Product = mongoose.model('product', ProductSchema);
