import $ from 'jquery';
import Backbone from 'backbone';
import Player from 'app/models/player';
import BoardView from 'app/views/boardView';

$(document).ready( function() {

  var game = new Player();
  var boardView = new BoardView({

    el: $('#board'),
    model: game
  });
 boardView.render();
});
