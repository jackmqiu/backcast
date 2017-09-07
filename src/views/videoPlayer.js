var VideoPlayerView = Backbone.View.extend({

  el: '.player',

  initialize: function() {
    this.collection.on('all', this.render, this);
  },


  render: function() {
    // console.log(this.collection.selected);
    if (!this.collection.selected) {
      this.$el.html('<div class="video-player"><span>Now loading...</span></div>');
      return this;
    }
    this.$el.html(this.template(this.collection.selected));
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
