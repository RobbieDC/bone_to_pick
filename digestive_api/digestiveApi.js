var DigestiveApi = function( app ) {
  var digestives = require("../client/src/models/digestives")();

  app.get( "/api/digestives", function( req, res ) {
    res.json( digestives )
  });

}

module.exports = DigestiveApi;
