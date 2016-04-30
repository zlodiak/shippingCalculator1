APP.CalculatorView = Backbone.View.extend({  

  initialize: function() {  
    this.cityOfDepartureWidjet = new APP.CityOfDepartureView();
    this.cityOfDestinationWidjet = new APP.CityOfDestinationView();
    this.shippingOptionsWidjet = new APP.ShippingOptionsView();
    this.render();
  },    

  el: $('#contentContainer'),

  template: _.template($('#submitButtonTemplate').html()),

  render: function () {  
    this.$el.append(this.cityOfDepartureWidjet.render().el);
    this.$el.append(this.cityOfDestinationWidjet.render().el);
    this.$el.append(this.shippingOptionsWidjet.render().el);
    this.$el.append(this.template());
    return this;
  }

});


