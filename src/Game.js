function Game() {
  this.frame = 0;
  this.score = 0;
  this.remainingPins = 10;
};

Game.prototype.bowl = function (pins) {
  this.remainingPins -= pins;
  this.score += pins;
};
