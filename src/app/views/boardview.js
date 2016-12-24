import Backbone from 'backbone';

const BoardView = Backbone.View.extend({
initialize: function(){
  this.listenTo(this.model, 'change', this.render);
 },

render: function(){
  this.$('#one').html(this.model.get('board').get('board')[0])
  this.$('#two').html(this.model.get('board').get('board')[1])
  this.$('#three').html(this.model.get('board').get('board')[2])
  this.$('#four').html(this.model.get('board').get('board')[3])
  this.$('#five').html(this.model.get('board').get('board')[4])
  this.$('#six').html(this.model.get('board').get('board')[5])
  this.$('#seven').html(this.model.get('board').get('board')[6])
  this.$('#eight').html(this.model.get('board').get('board')[7])
  this.$('#nine').html(this.model.get('board').get('board')[8])
  },

// events: {
//   "click"
//   }
});


export default BoardView;
