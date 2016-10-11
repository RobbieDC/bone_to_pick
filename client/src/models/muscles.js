var Muscle = require('./muscle');

var Muscles = function(){

  var muscle1 = new Muscle({
    name: "Orbicularis oculi", 
    fact: "Made up of three parts. It controls the movement of the eyelid",
    image: ""
  });

  var muscle2 = new Muscle({
    name: "Deltoids",
    fact: "The Deltoids is a rounded triangular shaped muscle",
    image: ""
  });

  var muscle3 = new Muscle({
    name: "Pectoralis Major",
    fact: "Also known as the pecs",
    image: ""
  });

  var muscle4 = new Muscle({
    name: "Bicep", 
    fact: "",
    image: ""
  });
  var muscle5 = new Muscle({
    name: "Anterior Forearm", 
    fact: "",
    image: ""
  });

  var muscle6 = new Muscle({
    name: "Lumbricallis", 
    fact: "",
    image: ""
  });

  var muscle7 = new Muscle({
    name: "Quadriceps", 
    fact: "",
    image: ""
  });

  var muscle8 = new Muscle({
    name: "Dorsi Flexors",
    fact: "",
    image: ""
  });

  var muscle9 = new Muscle({
    name: "Tibialis Anterior", 
    fact: "",
    image: ""
  });
  return [muscle1, muscle2, muscle3, muscle4, muscle5, muscle6, muscle7, muscle8, muscle9]

}

module.exports = Muscles;