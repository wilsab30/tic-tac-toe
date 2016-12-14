import Player from 'player';


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
  this.printBoard = '\n' + 'Player Board        Position Board \n\n' +
      ' ' + this.board[1] + ' | ' + this.board[2] + ' | ' + this.board[3] + '          ' + '  1 | 2 | 3 \n' +
      ' ---------' + '          ' + ' -----------\n' +
      ' ' + this.board[4] + ' | ' + this.board[5] + ' | ' + this.board[6] + '          ' + '  4 | 5 | 6 \n' +
      ' ---------' + '          ' + ' -----------\n' +
      ' ' + this.board[7] + ' | ' + this.board[8] + ' | ' + this.board[9] + '          ' + '  7 | 8 | 9 \n';
  console.log(this.printBoard);
};

Board.prototype.print = function() {
  // console.log(this.printBoard);
  console.log('\n' + 'Player Board        Position Board \n\n' +
     ' ' + this.board[1] + ' | ' + this.board[2] + ' | ' + this.board[3] + '          ' + '  1 | 2 | 3 \n' +
     ' ---------' + '          ' + ' -----------\n' +
     ' ' + this.board[4] + ' | ' + this.board[5] + ' | ' + this.board[6] + '          ' + '  4 | 5 | 6 \n' +
     ' ---------' + '          ' + ' -----------\n' +
     ' ' + this.board[7] + ' | ' + this.board[8] + ' | ' + this.board[9] + '          ' + '  7 | 8 | 9 \n');
};
// Board.prototype.newGame = function() {};

Board.prototype.checkWinDraw = function() {
  var win = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]];
  for (var i=0; i<7; i++) {
    if (this.board[win[i][0]] === this.board[win[i][1]] && this.board[win[i][1]] === this.board[win[i][2]] && this.board[win[i][0]] !== ' ') {
      console.log('You are a winner player ' + this.board[win[i][1]] + '!!!!!');
      this.clearBoard();
      
    }
  }
};

Board.prototype.exitGame = function() {};

Board.prototype.validMove = function(selection, symbol) {

  if (this.board[selection] == ' '){
    this.board[selection] = symbol;
    return true;
  } else {
    console.log('invalid move');
    return false;
  }
};

Board.prototype.clearBoard = function() {
  for(var i = 1; i < 10; i++) {
    this.board[i] = ' ';
    }
};


// socks = new Board();
export default Board;
