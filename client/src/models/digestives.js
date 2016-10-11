var Digestive = require("./digestive");

var Digestives = function() {

  var digestive1 = new Digestive({
    name: "mouth",
    fact: "An average human has 32 teeth",
    image: "./public/images/mouth.jpg"
  });

  var digestive2 = new Digestive({
    name: "",
    fact: "",
    image: ""
  });

  return [digestive1, digestive2]

}

module.exports = Digestives;