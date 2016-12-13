import Board from 'board';



var Player = function() {
  var player1 = "X";
  var player2 = "O";
  this.currentPlayer = player2;
};

Player.prototype.setCurrent = function() {
  if (this.currentPlayer == player1) {
    this.currentPlayer = player2;
  } else {
    this.currentPlayer = player1;
  }
};

Player.prototype.play = function(player) {
  board[spot] = player

  console.log('\n' +
      ' ' + this.board[1] + ' | ' + this.board[2] + ' | ' + this.board[3] + '\n' +
      ' ---------\n' +
      ' ' + this.board[4] + ' | ' + this.board[5] + ' | ' + this.board[6] + '\n' +
      ' ---------\n' +
      ' ' + this.board[7] + ' | ' + this.board[8] + ' | ' + this.board[9] + '\n');
};



export default Player;
// sock = new Board();
// socks.play('X')
