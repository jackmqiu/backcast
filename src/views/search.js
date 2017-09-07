var SearchView = Backbone.View.extend({

  el: '.search',

  initialize: function (){
    this.debounced = _.throttle(() => {
      console.log('Debounced');
      this.collection.search($('.form-control').val());
    }, 1000);
  },

  events: {
    'click button': 'handleClick',
    'keypress input': 'handleLiveSearch'
  },

  handleDebounce:  function(e) {

  },

  handleLiveSearch: function(e) {
    this.debounced();
    if(e.which === 13){
      this.collection.search($('.form-control').val());
    }
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
