var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  email: {
    type: String,
    required: true
  }
  username: {
    type: String,
    lowercase: true,
    maxlength: 20
  }
  level: {
    type: Number,
    required: true
  }
  location: {
    type: String,
    required: true
  }
  member: {
    type: Boolean,
    default: false
  }
});


module.exports = mongoose.model('User', userSchema);
