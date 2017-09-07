var VideoPlayerView = Backbone.View.extend({

  el: '.player',

  initialize: function() {
    this.collection.on('select', this.render, this);
  },


  render: function() {
    // console.log(this.collection.selected);
    this.$el.html(this.template(this.collection.selected));
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
