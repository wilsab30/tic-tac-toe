var Board = function() {
  this.board = {
    1: ' ',
    2: ' ',
    3: ' ',
    4: ' ',
    5: ' ',
    6: ' ',
    7: ' ',
    8: ' ',
    9: ' '
  };
  console.log('\n' +
      ' ' + this.board[1] + ' | ' + this.board[2] + ' | ' + this.board[3] + '\n' +
      ' ---------\n' +
      ' ' + this.board[4] + ' | ' + this.board[5] + ' | ' + this.board[6] + '\n' +
      ' ---------\n' +
      ' ' + this.board[7] + ' | ' + this.board[8] + ' | ' + this.board[9] + '\n');
};

// Board.prototype.newGame = function() {};

Board.prototype.checkWinDraw = function() {};

Board.prototype.exitGame = function() {};

Board.prototype.validMove = function() {};

Board.prototype.clearBoard = function() {
  for(var i = 1; i < 10; i++) {
    this.board[i] = ' ';
    }
};


// socks = new Board();
export default Board;