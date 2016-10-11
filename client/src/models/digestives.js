var Digestive = require("./digestive");

var Digestives = function() {

  var digestive1 = new Digestive({
    name: "Mouth",
    fact: "An average human has 32 teeth",
    image: "./public/images/mouth.jpg"
  });

  var digestive2 = new Digestive({
    name: "Esophagus",
    fact: "The esophagus is around 9-10 inches long, and connects your mouth to  your stomach",
    image: ""
  });

  var digestive3 = new Digestive({
    name: "Liver",
    fact: "The liver is able to regenerate dead or damaged tissue",
    image: ""
  });

  var digestive4 = new Digestive({
    name: "Gallbladder",
    fact: "The gallbladder holds bile produced in the liver",
    image: ""
  });

  var digestive5 = new Digestive({
    name: "Stomach",
    fact: "The stomach has a pH of 1.5 - 3.5",
    image: ""
  });


  var digestive6 = new Digestive({
    name: "Small intestine",
    fact: "The small intestine is around 10 feet in length!",
    image: ""
  });


  var digestive7 = new Digestive({
    name: "Large intestine",
    fact: "The large intestine is an important factor in re absorbing water and vitamins",
    image: ""
  });

  
  var digestive = new Digestive({
    name: "Liver",
    fact: "",
    image: ""
  });



  return [digestive1, digestive2, digestive3, digestive4, digestive5, digestive6, digestive7]

}

module.exports = Digestives;