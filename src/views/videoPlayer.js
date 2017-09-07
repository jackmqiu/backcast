var VideoPlayerView = Backbone.View.extend({

  el: '.player',

  initialize: function() {
    this.collection.on('select', this.render, this);
  },


  render: function() {
    // console.log(this.collection.selected);
    if (!this.collection.selected) {
      this.$el.html('<div class="video-player"><span>Now loading...</span></div>');
      return this;
    }
    this.$el.html(this.template(this.collection.selected));

    if ($('#autoplay').prop('checked') === true) {
      this.$el.find('iframe').attr('src', 'https://www.youtube.com/embed/' + this.collection.selected.id + '?autoplay=1');
    }

    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
