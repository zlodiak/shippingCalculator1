APP.CalculatorView = Backbone.View.extend({  

  initialize: function() {  
    this.cityOfDepartureWidjet = new APP.CityOfDepartureView();
    this.cityOfDestinationWidjet = new APP.CityOfDestinationView();
    this.render();
  },    

  el: $('#contentContainer'),

  render: function () {  
    this.$el.append(this.cityOfDepartureWidjet.render().el);
    this.$el.append(this.cityOfDestinationWidjet.render().el);
    return this;
  }

});


