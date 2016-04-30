APP.CityOfDepartureView = Backbone.View.extend({  

  initialize: function() {  

  },    

  tagName: 'div',

  className: 'city_of_departure_container',

  id: 'cityOfDepartureContainer',

  template: _.template($('#CityOfDepartureTemplate').html()),

  render: function () {  
    this.$el.html(this.template());
    return this;
  }

});


APP.CityOfDestinationView = Backbone.View.extend({  

  initialize: function() {  

  },    

  tagName: 'div',

  className: 'city_of_destination_container',

  id: 'cityOfDestinationContainer',

  template: _.template($('#CityOfDestinationTemplate').html()),

  render: function () {  
    this.$el.html(this.template());
    return this;
  }

});