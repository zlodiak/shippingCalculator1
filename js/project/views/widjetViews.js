APP.CityOfDepartureView = Backbone.View.extend({  

  initialize: function() {  

  },    

  tagName: 'div',

  className: 'city_of_departure_container',

  id: 'cityOfDepartureContainer',

  template: _.template($('#cityOfDepartureTemplate').html()),

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

  template: _.template($('#cityOfDestinationTemplate').html()),

  render: function () {  
    this.$el.html(this.template());
    return this;
  }

});


APP.ShippingOptionsView = Backbone.View.extend({  

  initialize: function() {  

  },    

  tagName: 'div',

  className: 'shipping_options_container',

  id: 'shippingOptionsContainer',

  template: _.template($('#shippingOptionsTemplate').html()),

  render: function () {  
    this.$el.html(this.template());
    return this;
  }

});