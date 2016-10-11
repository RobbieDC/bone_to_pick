var Muscle = require('./muscle');

var Muscles = function(){

  var muscle1 = new Muscle({
    name: "", 
    fact: "",
    image: ""
  });

  var muscle2 = new Muscle({
    name: "", 
    fact: "",
    image: ""
  });

  return [muscle1, muscle2]

}

module.exports = Muscles;