import Board from 'board';


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
    it('should check to see if spot alrady contains X or O', function() {

    });
  });
});//end of board
