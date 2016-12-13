import Board from 'board';
import Prompt from 'prompt';


var Player = function() {
  this.player1 = "X";
  this.player2 = "O";
};

Player.prototype.play = function(player) {
  Prompt.start();
  var spot = prompt("Pick your spot" + 'player' + player +'!')
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
