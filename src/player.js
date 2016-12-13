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

Player.prototype.play = function() {

};



export default Player;
