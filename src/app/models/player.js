import Board from 'app/models/board';
import Backbone from 'backbone';

const Player = Backbone.Model.extend({
  initialize: function(){
    this.set('player1', "X");
    this.set('player2', "O");
    this.set('currentPlayer', this.get('player1'));
    this.set('board', new Board());
  },
  play: function(selection) {
    if (this.get('board').validMove(selection, this.get('currentPlayer')) === false) {
      return;
    }

    // this.get('board').print();

    if (this.get('board').checkWin()){
      console.log("A new game has been started!");
      return;
    }
    if (this.get('board').checkDraw()){

      console.log("A new game has been started!");
      return;
    }
    if (this.get('currentPlayer') === this.get('player1')) {
      this.set('currentPlayer', this.get('player2'));
    } else {
      this.set('currentPlayer', this.get('player1'));
    }
  },

  reset: function(){
    this.get('board').clearBoard();
    this.set('currentPlayer', this.get('player1'));
  }
});









export default Player;
