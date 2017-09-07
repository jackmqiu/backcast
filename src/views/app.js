var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(window.exampleVideoData);
    this.videos.selected = this.videos.first();
    this.render();
  },

  render: function() {
    this.$el.html(this.template());
    var videoPlayer = new VideoPlayerView({
      collection: this.videos
    });
    this.$el.append(videoPlayer.render());
    var videoList = new VideoListView({
      collection: this.videos
    });
    this.$el.append(videoList.render());
    var searchBar = new SearchView();
    this.$el.append(searchBar.render());
    return this;
  },

  template: templateURL('src/templates/app.html')

});
