describe("Game", function() {
  var game = new Game

  it("should be initialised with a score of 0", function() {
    expect(game.score()).toEqual(0);

  });
});
