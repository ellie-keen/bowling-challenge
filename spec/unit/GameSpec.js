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

  it('should start with firstBowlOfFrame as true', function(){
    expect(game.firstBowlOfFrame).toBeTruthy();
  });
});

describe('#bowl', function(){
  it('should change remainingPins', function(){
    game.bowl(5)
    expect(game.remainingPins).toEqual(5);
  });

  it('should increase the score', function(){
    game.bowl(5)
    expect(game.score).toEqual(5);
  });

  it('should state how many pins have been knocked down', function(){
    expect(game.bowl(5)).toEqual('You knocked down 5 pins! Your score is 5');
  });
});
