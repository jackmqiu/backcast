var Video = Backbone.Model.extend({

  initialize: function(video) {
    // override youtube's complex id field
    this.set('id', video.id.videoId);
  },

  select: function() {
    console.log('Video\'s parent collection:', this.collection);
    this.collection.selected = this;
    this.trigger('select', this);
  }

});
