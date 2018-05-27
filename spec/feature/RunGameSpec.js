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

describe('two complete frames', function(){
  it('should increase frame to 2, increment score and reset remaining pins', function(){
    game.bowl(3);
    game.bowl(4);
    game.bowl(2);
    game.bowl(5);
    expect(game.frame).toEqual(2);
    expect(game.score).toEqual(14);
    expect(game.remainingPins).toEqual(10);
  });
});

describe('complete game', function(){

  beforeEach(function(){
    game.bowl(3);
    game.bowl(4);//1st frame
    game.bowl(2);
    game.bowl(5);//2nd frame
    game.bowl(3);
    game.bowl(4);//3rd
    game.bowl(2);
    game.bowl(5);//4th
    game.bowl(3);
    game.bowl(4);//5th
    game.bowl(2);
    game.bowl(5);//6th
    game.bowl(3);
    game.bowl(4);//7th
    game.bowl(2);
    game.bowl(5);//8th
    game.bowl(3);
    game.bowl(4);//9th
    game.bowl(2);
  });

  it('should state game over and show score', function(){
    expect(game.bowl(5)).toEqual('Game over. You scored 70!');
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
    game.bowl(0);
    game.bowl(0);
    game.bowl(0);
    game.bowl(0);
    game.bowl(0);
    game.bowl(0);
    game.bowl(0);
    game.bowl(0);
    game.bowl(0);
    game.bowl(0);
    game.bowl(0);
    game.bowl(0);
    game.bowl(0);
    game.bowl(0);
    game.bowl(0);
    game.bowl(0);
    game.bowl(0);
    game.bowl(0);
    game.bowl(0);
    expect(game.bowl(0)).toEqual('Game over. You scored 0!');
  });
});
