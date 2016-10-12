var BoneApi = function(app){
  var bones = require('../client/src/models/bones')();
  var muscles = require('../client/src/models/muscles')();
  var digestives = require('../client/src/models/digestives')();

  app.get('/api/bones', function(req, res){
    res.json(bones);
    res.json(muscles);
    res.json(digestives);
  });

}

module.exports = BoneApi;
