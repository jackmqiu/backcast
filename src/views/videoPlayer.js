var VideoPlayerView = Backbone.View.extend({

  el: '.player',

  initialize: function() {
    this.collection.on('select', this.render, this);
  },


  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
