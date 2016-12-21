import Board from 'app/models/board';
import Player from 'app/models/player';


describe('Board', function() {
  it('should create new empty game board', function() {
    var socks = new Board();
    for(var i = 0; i < 9; i++) {
      expect(socks.get('board')[i]).toEqual(' ');
      }
    });
  // describe('newGame', function() {
  // });
  describe('checkWin', function() {
    it('should check arrays for posible win', function() {
      var players = new Player();

      players.play(5);
      players.play(1);
      players.play(4);
      players.play(2);
      players.play(6);
      expect(players.get('board').checkWin()).toEqual(true);
    });
    it('should not return true if  player has not won yet', function() {
      var players = new Player();
      players.play(5);
      players.play(1);
      players.play(4);
      players.play(2);
  expect(players.get('board').checkWin()).toBeFalsy();
    });
  });
  describe('checkDraw', function() {
    it('should check arrays for posible win', function() {
      var players = new Player();
      players.play(5);
      players.play(1);
      players.play(4);
      players.play(2);
      players.play(3);
      players.play(6);
      players.play(9);
      players.play(7);
      players.play(8);
  expect(players.get('board').checkDraw()).toEqual(true);
    });
    it('should not return true if  player has not won yet', function() {
      var players = new Player();
      players.play(5);
      players.play(1);
      players.play(4);
      players.play(6);
  expect(players.get('board').checkDraw()).toBeFalsy();
    });
    it('should not return true if  player has won with full board', function() {
      var players = new Player();
      players.play(5);
      players.play(1);
      players.play(4);
      players.play(2);
      players.play(3);
      players.play(6);
      players.play(9);
      players.play(8);
      players.play(7);
  expect(players.get('board').checkDraw()).toBeFalsy();
    });
  });
  describe('clearBoard', function() {
    it('should remove all marks from board', function() {
      var game = new Board();
      var players = new Player();
      players.play(5);
      players.play(1);
      players.play(4);
      players.play(2);
      players.play(6);
      players.get('board').clearBoard();
      for(var i = 0; i < 9; i++) {
        expect(players.get('board').get('board')[i]).toEqual(' ');
        }
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
