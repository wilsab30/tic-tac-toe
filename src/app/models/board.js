// import Player from 'app/models/player';
import Backbone from 'backbone';

const Board = Backbone.Model.extend({
initialize: function(){
  this.set('board', [" ", " ", " ", " ", " ", " ", " ", " ", " "]);
},
checkWin: function() {

  var win = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
  for (var i = 0; i < 8; i++) {
    if (this.get('board')[win[i][0]] === this.get('board')[win[i][1]] && this.get('board')[win[i][1]] === this.get('board')[win[i][2]] && this.get('board')[win[i][0]] !== ' '){
      console.log('You are a winner player ' +  this.get('board')[win[i][1]] + '!!!!!');
      return true;
    }
  }

},

checkDraw: function() {
  var counter = 0;
  for (var j = 0; j < 9; j++) {
    if (this.get('board')[j] !== ' ') {
      counter += 1;
    }
  }
  if (counter === 9 && this.checkWin() !== true) {
    console.log("IT'S A TIE. WOW.");
    return true;
  }
},

validMove: function(selection, symbol) {

  if (this.get('board')[selection - 1] == ' '){
    this.get('board')[selection - 1] = symbol;
    return true;
  } else {
    console.log('invalid move');
    return false;
  }
},

clearBoard: function() {
  for(var i = 0; i < 9; i++) {
    this.get('board')[i] = ' ';
    }
}
});
export default Board;
