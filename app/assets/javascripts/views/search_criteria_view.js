IWitness.SearchCriteriaView = Ember.View.extend({
  templateName: 'search_criteria_template',
  modelBinding: 'IWitness.searchController.content',
  radius: 1,

  search: function(e) {
    IWitness.searchController.search();
  },

  didInsertElement: function() {
    this.$('.date').datepicker();
    this.$('.time').timePicker({show24Hours: false});

    this.map = new google.maps.Map(document.getElementById("map"), {
      center:    new google.maps.LatLng(39.76395,-86.1656),
      zoom:      15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    google.maps.event.addListener(this.map, 'bounds_changed', _.debounce(this.mapUpdate, 100).bind(this));
  },

  mapUpdate: function() {
    var bounds = this.map.getBounds();
    this.setPath('model.center', this.map.getCenter());
    this.setPath('model.northEast', bounds.getNorthEast());
    this.setPath('model.southWest', bounds.getSouthWest());
  }
});
