var Videos = Backbone.Collection.extend({
  initialize: function() {
    this.selected = null;
  },

  searchVideos: function() {
    /*
    $.ajax({
      url: 'https://www.googleapis.com/youtube/v3/search',
      type: 'GET',
      contentType: 'application/json',
      success: function (data) {
        //console.log('GET MESSAGES', data.results[96]);

      }
    })
  }
  */
  },
  model: Video

});
