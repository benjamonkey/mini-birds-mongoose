var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');






var port = 3000;

var app = express();
app.use(bodyParser.json());
mongoose.set('debug', true);
mongoose.connect('mongodb://localhost/birds-mongoose-2');

var SightingModel = require('./Sightings')

app.post('/api/sighting', function(req, res) {
  console.log('POST sighting');
  var sightingObject = new Sighting(req.body);
  sightingObject.save(function(err, savedSighting){
    if (err){
      res.status(500).json(err);
    }else {
      res.status(200).json(savedSighting);
    }

  })
  
});

app.get('/api/sighting', function(req, res) {
  console.log('GET sighting');
  res.end();
});

app.delete('/api/sighting', function(req, res) {
  console.log('DELETE sighting');
  res.end();
});

app.put('/api/sighting', function(req, res) {
  console.log('PUT sighting');
  res.end();
});

app.listen(port, function() {
  console.log("Started server on port", port);
});
