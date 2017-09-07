var Videos = Backbone.Collection.extend({
  initialize: function() {
    this.selected = null;
  },

  model: Video

});
