var MuscleApi = function( app ) {
  var muscles = require("../client/src/models/muscles")();

  app.get( "/api/muscles", function( req, res )  {
    res.json( muscles );
  });
}

module.exports = MuscleApi;
