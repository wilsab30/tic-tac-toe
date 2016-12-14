import Board from 'board';
import Player from 'player';


describe('Board', function() {
  it('should create new empty game board', function() {
    var socks = new Board();
    for(var i = 1; i < 10; i++) {
      expect(socks.board[i]).toEqual(' ');
      }
    });
  // describe('newGame', function() {
  // });
  describe('checkWinDraw', function() {
    it('should check arrays for posible win', function() {
      var game = new Board();
      var players = new Player();
      players.play(5, game);
      players.play(1, game);
      players.play(4, game);
      players.play(2, game);
      game.board[6] = 'X'
  expect(game.checkWinDraw()).toEqual(true);
    });
    it('should not return true if  player has not won', function() {
      var game = new Board();
      var players = new Player();
      players.play(5, game);
      players.play(1, game);
      players.play(4, game);
      players.play(2, game);
  expect(game.checkWinDraw()).toBeFalsy();
    });
  });
  describe('clearBoard', function() {
    it('should remove all marks from board', function() {

    });
  });
  describe('exitGame', function() {
    it('should end game', function() {

    });
  });
  describe('validMove', function() {
    it('should check to see if spot already contains X or O', function() {
      var socks = new Board();
      expect(socks.validMove(5, 'X')).toEqual(true);
    });
    it('should not allow move to happen twice', function() {
      var socks = new Board();
      socks.validMove(5, 'X');
      expect(socks.validMove(5, 'O')).toEqual(false);
    });
  });
});//end of board
// comment
