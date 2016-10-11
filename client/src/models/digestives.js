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

  var digestive = new Digestive({
    name: "Liver",
    fact: "",
    image: ""
  });



  return [digestive1, digestive2]

}

module.exports = Digestives;