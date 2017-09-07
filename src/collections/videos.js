var Videos = Backbone.Collection.extend({
  initialize: function() {
    // this.search('overwatch');
    this.selected = null;
  },

  search: function(searchTerm) {
    let that = this;
    Backbone.ajax({
      cache: false,
      data: $.extend({
        key: 'AIzaSyBXAIw8i6u1yQ6DXE0DR44yc_82YKdVJ5s',
        q: searchTerm,
        part: 'snippet'

      }, {maxResults:5,pageToken:$("#pageToken").val()}),
      dataType: 'json',
      type: 'GET',
      timeout: 5000,
      url: 'https://www.googleapis.com/youtube/v3/search',
      success: function(data){
        that.reset(data.items);
        that.at(0).select();
        // console.log('data from youtube: ', data);
      },
      error: function(data) {
        
      }
    });


  },

  parse: function(data){
    return data.items;
  },
  model: Video

});
