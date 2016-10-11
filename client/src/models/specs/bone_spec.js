var assert = require('assert');
var Bone = require('../bone');

describe('Bone', function(){

  var testBone;

  before(function(){
    testBone = new Bone({
      name:"Test Bone", 
      fact:"The test bone is connected to the... other test bone.",
      image: "nope.jpg"});
  });

  it('should have a name', function(){
    assert.equal("Test Bone", testBone.name);
  });

  it('should have a fact', function(){
    assert.equal("The test bone is connected to the... other test bone.", testBone.fact);
  });

  it('should have a image', function(){
    assert.equal("nope.jpg", testBone.image);
  });

});