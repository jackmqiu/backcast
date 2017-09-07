var VideoListView = Backbone.View.extend({

  el: '.list',

  initialize: function() {
    // this.render();
    this.collection.on('all', this.render, this);
  },


  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    //Create a list entry for every element in the collection
    this.collection.forEach(this.renderListEntry, this);
    return this;
  },

  renderListEntry: function(listEntry) {
    console.log(listEntry);
    var entryView = new VideoListEntryView({model: listEntry, el: '.list'});
    this.$el.append(entryView.render());
  },

  template: templateURL('src/templates/videoList.html')

});
