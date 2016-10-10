// this will contain restful routes
var BoneApi = function(app){
  var bones = require('../client/src/models/bones')();

  var Bone= require('../client/src/models/bone');

  //film index
  app.get('/api/bones', function(req, res){
    res.json(bones);
  });


}

module.exports = BoneApi;
