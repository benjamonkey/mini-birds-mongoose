var mongoose = require('mongoose');
var birds = require('bird.js')
var Schema = mongoose.Schema;

var sightingSchema = new Schema({
  name: {type: String, lowercase: true, required: true}
  order: {type: String, lowercase: true, maxlength: 20}
  status: {type: String, lowercase: true, enum: [
    "extinct",
    "near threatened",
    "least concern"
  ]
},
  confirmed: {type: Boolean, default: false},
  numberSeen: {type: Number, min: 1},
  user: {
    type: String,
    ref: "User"
  }
  birds: {
    birds: [birdsSchema]
  }
});


module.exports = mongoose.model('Sighting', sightingSchema);


[{
  "name": "red breasted merganser",
  "order": "Anseriformes",
  "status": "least concern",
  "confirmed": true,
  "numberSeen": 2
},
{
  "name": "cedar waxwing",
  "order": "Passeriformes",
  "status": "least concern",
  "confirmed": false,
  "numberSeen": 5
},
{
  "name": "osprey",
  "order": "Accipitriformes",
  "status": "least threatened",
  "confirmed": true,
  "numberSeen": 2
},
{
  "name": "snowy plover",
  "order": "Charadriformes",
  "status": "extinct",
  "confirmed": true,
  "numberSeen": 7
}]
