var Park = function(){
  this.enclosure = [];
}

Park.prototype.addDinosaur = function (dinoToAdd) {
  this.enclosure.push(dinoToAdd);
};

Park.prototype.removeDinosaur = function (dinoToBeRemoved) {
  var pos = this.enclosure.indexOf(dinoToBeRemoved);
  this.enclosure.splice(pos, 1);
};

Park.prototype.removeDinosaurType = function (typeToBeRemoved) {
  // for (dinosaur of this.enclosure){
  //   if (dinosaur.type = typeToBeRemoved){
  //     var pos = this.enclosure.indexOf(dinosaur);
  //     this.enclosure.splice(pos, 1);
  //   };
  // };
  this.enclosure = this.enclosure.filter(dinosaur => dinosaur.type !== typeToBeRemoved);
};



Park.prototype.getNonPandaLikeDinos = function (minYearlyOfspring) {
  var nonPandaLike = []
  for (dinosaur of this.enclosure) {
    if (dinosaur.yearlyOffspring > minYearlyOfspring){
      nonPandaLike.push(dinosaur);
    };
  };
  return nonPandaLike;
};


module.exports = Park;
