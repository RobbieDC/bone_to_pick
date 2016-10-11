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

});