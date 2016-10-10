var Bone = require('./bone');

var Bones = function(){

  var bone1 = new Bone({
    name: "Skull",
    fact: "This part of the body protects your brain",
    image: "./public/images/skull.png";
  });

  var bone2 = new Bone({
    name: "Clavicle",
    fact: "This is also called your collar bone",
    image: "./public/images/clavicle.jpg";
  });

  var bone3 = new Bone({
    name: "Rib",
    fact: "You have 24 ribs in total",
    image: "./public/images/ribs.jpg";
  
  });

  var bone4 = new Bone({
    name: "Humerus",
    fact: "This connects your shoulder and your forearm",
    image: "./public/images/humerus.png";
  });

  var bone5 = new Bone({
    name: "Phalanges",
    fact: "This is the collective name for your 3 top finger bones",
    image: "./public/images/phalanges.jpg";
  });

  var bone6 = new Bone({
    name: "Ulna",
    fact: "This bone is essential to everyday functions like throwing a ball or driving a car",
    image: "./public/images/ulna.png";
  });

  var bone7 = new Bone({
    name: "Pelvis",
    fact: "This bone is stronger than the skull",
    // image: 
  });

  var bone8 = new Bone({
    name: "Femur",
    fact: "This bone is the longest bone in the body",
    // image: 
  });

  var bone9 = new Bone({
    name: "Fibula",
    fact: "This is one of the bones that helps attach the ankle to the knee",
    // image: 
  });

  var bone10 = new Bone({
    name: "Talus",
    fact: "This is also known as the ankle bone",
    // image: 
  });

  return [bone1, bone2, bone3, bone4, bone5, bone6, bone7, bone8, bone9, bone10];

}

module.exports = Bones;