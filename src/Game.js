function Game() {
  this.frame = 0;
  this.score = 0;
  this.remainingPins = 10;
  this.firstBowlOfFrame = true;
};

Game.prototype.bowl = function (pins) {
  this._checkPins(pins);
  this.firstBowlOfFrame ? this._firstBowl(pins) : this._secondBowl();
  this.score += pins;
  var framesComplete = this.frame == 10;
  return framesComplete ? this._isGameOver() : this._printScore(pins);
};

Game.prototype._checkPins = function(pins) {
  var invalidNumberOfPins = (this.remainingPins - pins < 0);
  if (invalidNumberOfPins) {
    throw `Bad bowl! There are ${this.remainingPins} pins remaining!`;
  }
};

Game.prototype._isGameOver = function () {
  this.frame = 0;
  var finalScore = this.score;
  this.score = 0;
  return `Game over. You scored ${finalScore}!`;
};

Game.prototype._firstBowl = function (pins) {
  this.remainingPins -= pins;
  this.firstBowlOfFrame = false;
};

Game.prototype._secondBowl = function () {
  this.frame += 1;
  this.firstBowlOfFrame = true;
  this.remainingPins = 10;
};

Game.prototype._printScore = function (pins) {
  return `You knocked down ${pins} pins! Your score is ${this.score}`;
};
