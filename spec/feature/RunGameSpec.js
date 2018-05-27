beforeEach(function(){
  game = new Game();
});

describe('after bowling one ball on first frame', function(){
  it('should increment score and change remaining pins', function(){
    game.bowl(5);
    expect(game.remainingPins).toEqual(5);
    expect(game.score).toEqual(5);
  });

});
