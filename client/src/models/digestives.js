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


  var digestive8 = new Digestive({
    name: "Appendix",
    fact: "The appendix is not a needed organ, and there is some debate over what it was used for",
    image: ""
  });


  var digestive9 = new Digestive({
    name: "Anus",
    fact: "The anus is the final section of the GI tract",
    image: ""
  });



  return [digestive1, digestive2, digestive3, digestive4, digestive5, digestive6, digestive7, digestive8, digestive9]

}

module.exports = Digestives;