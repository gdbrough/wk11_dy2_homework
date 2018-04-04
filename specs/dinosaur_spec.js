var assert = require("assert");
var Dinosaur = require("../dinosaur.js");
var Park = require("../park.js")

describe("Dinosaur", function(){

  beforeEach(function () {
      dinosaur1 = new Dinosaur("Tyrannosaurus", 5);
      dinosaur2 = new Dinosaur("Velociraptor", 10);
      dinosaur3 = new Dinosaur("Triceratops", 1);
  });

  it("should have a type", function(){
    assert.strictEqual(dinosaur1.type, "Tyrannosaurus");
  });

  it("should have a number of offspring per year", function(){
    assert.strictEqual(dinosaur1.yearlyOffspring, 5);
  });

});
