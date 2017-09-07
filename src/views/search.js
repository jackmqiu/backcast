var SearchView = Backbone.View.extend({

  el: '.search',

  events: {
    'click .btn': 'handleClick'
  },

  handleClick: function(e) {
    this.collection.search($('.form-control').val());
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/search.html')

});
