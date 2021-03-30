const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WomenSchema = new Schema({
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

module.exports = Women = mongoose.model('women', WomenSchema);
