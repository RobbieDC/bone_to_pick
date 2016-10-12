var Body = require("./body");
var bonesData = require("./bones")();
var musclesData = require("./muscles")();
var digestivesData = require("./digestives")();

var Bodys = function() {

  var body = new Body({
    bones: bonesData,
    muscles: musclesData,
    digestives: digestivesData
  });

  return body;

}

module.exports = Bodys;