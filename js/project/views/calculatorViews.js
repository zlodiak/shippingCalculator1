APP.CalculatorView = Backbone.View.extend({  

  initialize: function() {  
    this.cityOfDepartureWidjet = new APP.CityOfDepartureView();
    this.render();
  },    

  el: $('#contentContainer'),

  render: function () {  
    this.$el.append(this.cityOfDepartureWidjet.render().el);
    return this;
  }

});


