var BodyApi = function(app) {
  var body = require( "../client/src/models/bodys" )();

  app.get( "/api/body", function(req, res) {
    res.json(body);
  });
}

module.exports = BodyApi;
