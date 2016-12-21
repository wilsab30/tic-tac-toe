import Backbone from 'backbone';

const BoardView = Backbone.View.extend({
initialize: function(){
  this.listenTo(this.model, 'change', this.render);
 },

render: function(){
  this.$('#one').html(this.model.get('board'))
 }
});


export default BoardView;
