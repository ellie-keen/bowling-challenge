beforeEach(function(){
  game = new Game();
});

describe('when creating a new game', function(){
  it('should start with a score of 0', function(){
    expect(game.score).toEqual(0);
  });

  it('should start on 0 frames', function(){
    expect(game.frame).toEqual(0);
  });

  it('should start with 10 remaining pins', function(){
    expect(game.remainingPins).toEqual(10);
  });
});
