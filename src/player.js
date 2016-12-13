import Board from 'board';



var Player = function() {
  this.player1 = "X";
  this.player2 = "O";
  this.currentPlayer = this.player2;
};

Player.prototype.play = function(selection, board) {
  if (this.currentPlayer == this.player1) {
    this.currentPlayer = this.player2;
  } else {
    this.currentPlayer = this.player1;
  }
  board.validMove(selection, this.currentPlayer);

  board.print();
  // console.log('\n' +
  //     ' ' + this.board[1] + ' | ' + this.board[2] + ' | ' + this.board[3] + '\n' +
  //     ' ---------\n' +
  //     ' ' + this.board[4] + ' | ' + this.board[5] + ' | ' + this.board[6] + '\n' +
  //     ' ---------\n' +
  //     ' ' + this.board[7] + ' | ' + this.board[8] + ' | ' + this.board[9] + '\n');
};





export default Player;
// sock = new Board();
// socks.play('X')
