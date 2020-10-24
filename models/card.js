const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  link: {
    type: String,
    required: true,
    validate: {
      validator(v) {
        return /https?:\/\/(w{3,3}\.)?\w+\S+#/.test(v);
      },
    },
  },
  owner: {
    type: mongoose.ObjectId,
    ref: 'user',
    required: true,
  },
  likes: {
    type: mongoose.ObjectId,
    default: [],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('card', cardSchema);
