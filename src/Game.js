function Game() {
  this.frame = 0;
  this.score = 0;
  this.remainingPins = 10;
  this.firstBowl = true;
};

Game.prototype.bowl = function (pins) {
  this._checkPins(pins);
  if (this.firstBowl) {
    this._firstBowl(pins);
  } else {
    this._secondBowl();
  };
  this.score += pins;
  return this._isGameOver();
};

Game.prototype._checkPins = function(pins) {
  if (this.remainingPins - pins < 0) {
    throw `Bad bowl! There are ${this.remainingPins} pins remaining!`;
  };
};

Game.prototype._isGameOver = function () {
  if (this.frame == 10) {
    this.frame = 0;
    var finalScore = this.score;
    this.score = 0;
    return `Game over. You scored ${finalScore}!`;
  };
};

Game.prototype._firstBowl = function (pins) {
  this.remainingPins -= pins;
  this.firstBowl = false;
};

Game.prototype._secondBowl = function () {
  this.frame += 1;
  this.firstBowl = true;
  this.remainingPins = 10;
};
