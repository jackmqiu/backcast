var VideoListEntryView = Backbone.View.extend({



  initialize: function() {
  },

  events: {
    'click .video-list-entry-title': 'handleClick'
  },

  handleClick: function(e) {
    // console.log(this.model);
    this.model.select();
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this.$el;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
