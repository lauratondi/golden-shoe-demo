const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },

  likes: {
    type: Boolean,
  },

  cart: {
    type: Boolean,
  },
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);
