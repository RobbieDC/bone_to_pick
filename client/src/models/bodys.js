var Body = require("./body");
var bonesData = require("./bones")();
var musclesData = require("./muscles")();
var digestivesData = require("./digestives")();

var BodyData = function() {

  var bodyData = new Body({
    bones: bonesData,
    muscles: musclesData,
    digestives: digestivesData
  });

  return bodyData;

}

module.exports = BodyData;