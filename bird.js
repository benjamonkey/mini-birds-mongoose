var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = new Schema({
  name: {
    type: String,
    lowercase: true,
    required: true
  },
  order: {
    type: String,
    lowercase: true,
    maxlength: 20
  },
  status: {
    type: String,
    lowercase: true,
    enum: [
    "extinct",
    "near threatened",
    "least concern"
  ]
}

});

var dude = new bird({name: "blueJay", age: 100})

dude.save(function(err, bird){
  var bird1 = new Bird({
    name: "wassuup",
    email: "sdfsdfsdf@gmail.com"
  });
  bird1.save()

})
