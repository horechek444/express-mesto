const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  about: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  avatar: {
    type: String,
    validate: {
      validator(v) {
        return /https?:\/\/(w{3,3}\.)?\S+(\.ru|com|рф)(\S*)?(\.\w{2,4})?#?/gi.test(v);
      },
      message: (props) => `ссылка для аватара ${props.value} невалидна`,
    },
  },
});

module.exports = mongoose.model('user', userSchema);
