var express = require('express');
var app = express();
var path = require('path');
var BoneApi = require('./bone_api/boneApi');

app.use(express.static('client/build'));

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

app.listen(3000, function(){

  new BoneApi(app);
  console.log('App running on port ' + this.address().port);
  
});