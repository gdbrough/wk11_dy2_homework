var assert = require("assert");
var Park = require("../park.js");

describe("Park", function(){

  it("park starts with empty enclosure", function(){
    var park = new Park();
    assert.strictEqual(park.enclosure.length, 0);
  });

  it("should be able to add dinosaur", function(){
    var park = new Park();
    park.addDinosaur(dinosaur1);
    assert.strictEqual(park.enclosure.length, 1);
    assert.deepStrictEqual(park.enclosure, [dinosaur1])
  });

  it("should be able to remove a specific dinosaur", function(){
    var park = new Park();
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    assert.deepStrictEqual(park.enclosure, [dinosaur1, dinosaur2, dinosaur3]);
    park.removeDinosaur(dinosaur2);
    assert.deepStrictEqual(park.enclosure, [dinosaur1, dinosaur3]);
  });

  it("should be able to remove all dinosaurs of a particular type", function(){
    var park = new Park();
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    assert.deepStrictEqual(park.enclosure, [dinosaur1, dinosaur2, dinosaur3]);
    park.removeDinosaurType("Velociraptor");
    assert.deepStrictEqual(park.enclosure, [dinosaur1, dinosaur3]);
    // assert.strictEqual(park.removeDinosaurType("Velociraptor"), "test");
  });

  it("should get all the dinosaurs with an offspring count of more than 2", function(){
    var park = new Park();
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    assert.deepStrictEqual(park.getNonPandaLikeDinos(2), [dinosaur1, dinosaur2]);
  });

});
