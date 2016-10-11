var Muscle = require('./muscle');

var Muscles = function(){

  var muscle1 = new Muscle({
    name: "Orbicularis oculi", 
    fact: "Made up of three parts. It controls the movement of the eyelid",
    image: "./public/images/Orbicularis_oculi.jpg"
  });

  var muscle2 = new Muscle({
    name: "Deltoids",
    fact: "The Deltoids is a rounded triangular shaped muscle at your shoulder",
    image: "./public/images/Deltoideus.png"
  });

  var muscle3 = new Muscle({
    name: "Pectoralis Major Muscle",
    fact: "A large fan shaped muscle that covers much of the chest. ",
    image: "./public/images/pectoralis-major.jpg"
  });

  var muscle4 = new Muscle({
    name: "Bicep", 
    fact: "The Bicep is made up of two main muscles, Bicep Brachii muscles one is short and the other is long",
    image: "./public/images/Biceps-brachii-muscle.png"
  });
  var muscle5 = new Muscle({
    name: "Brachioradialis Muscle", 
    fact: "Muscle in the forearm which aids in flexing the elbow",
    image: "./public/images/Brachioradialis.png"
  });

  var muscle6 = new Muscle({
    name: "Lumbrical Muscles", 
    fact: "These are four small fleshy muscles in between the tendons which are connected to the fingers",
    image: "./public/images/lumbrical.jpg"
  });

  var muscle7 = new Muscle({
    name: "Quadriceps", 
    fact: "Made up of four parts",
    image: "./public/images/quads.jpeg"
  });

  var muscle8 = new Muscle({
    name: "Soleus Muscle",
    fact: "This muscle is one the main muscle in the calf",
    image: "./public/images/Soleus.jpg"
  });

  var muscle9 = new Muscle({
    name: "Tibialis Anterior", 
    fact: "This muscle is vital in connecting bottom of the leg and the foot together to form the ankle",
    image: "./public/images/Tibialis.png"
  });
  return [muscle1, muscle2, muscle3, muscle4, muscle5, muscle6, muscle7, muscle8, muscle9]

}

module.exports = Muscles;