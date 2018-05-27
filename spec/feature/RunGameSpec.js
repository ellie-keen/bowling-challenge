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
    for (var i = 0; i < 3; i++) { game.bowl(3); }; 
    expect(game.frame).toEqual(1);
  });
});

describe('two complete frames', function(){
  it('should increase frame to 2, increment score and reset remaining pins', function(){
    for (var i = 0; i < 4; i++) { game.bowl(3); };
    expect(game.frame).toEqual(2);
    expect(game.score).toEqual(12);
    expect(game.remainingPins).toEqual(10);
  });
});

describe('complete game', function(){

  beforeEach(function(){
    for (var i = 0; i < 19; i++) { game.bowl(3); };
  });

  it('should state game over and show score', function(){
    expect(game.bowl(3)).toEqual('Game over. You scored 60!');
  });

  it('should reset the game', function(){
    game.bowl(5);
    expect(game.score).toEqual(0);
    expect(game.remainingPins).toEqual(10);
    expect(game.frame).toEqual(0);
    expect(game.firstBowlOfFrame).toBeTruthy();
  });
});

describe('gutter game', function(){
  it('should state that the player has scored 0', function(){
    for (var i = 0; i < 19; i++) { game.bowl(0); };
    expect(game.bowl(0)).toEqual('Game over. You scored 0!');
  });
});
