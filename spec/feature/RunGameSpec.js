beforeEach(function(){
  game = new Game();
});

describe('bowling one ball on first frame', function(){
  it('should increment score and change remainingPins', function(){
    game.bowl(5);
    expect(game.remainingPins).toEqual(5);
    expect(game.score).toEqual(5);
  });
});

describe('complete frame', function(){
  it('should change score and increase frame by one', function(){
    game.bowl(2);
    game.bowl(3);
    expect(game.score).toEqual(5);
    expect(game.frame).toEqual(1);
  });

  it('should raise error if user tries to knock down more than 10 pins', function(){
    game.bowl(8);
    expect(function() { game.bowl(8); }).toThrow('Bad bowl! There are 2 pins remaining!');
  });
});

describe('bowling three balls', function(){
  it('should not increase frame when the frame is not complete', function(){
    game.bowl(3);
    game.bowl(4);
    game.bowl(2);
    expect(game.frame).toEqual(1);
  });
});
