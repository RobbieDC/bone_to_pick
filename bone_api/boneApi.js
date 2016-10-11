var BoneApi = function(app){
  var bones = require('../client/src/models/bones');

  app.get('/api/bones', function(req, res){
    res.json(bones);
  });

}

module.exports = BoneApi;
