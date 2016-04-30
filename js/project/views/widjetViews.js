APP.CityOfDepartureView = Backbone.View.extend({  

  initialize: function() {  

  },    

  tagName: 'div',

  className: 'city_of_departure_container',

  template: _.template($('#CityOfDepartureTemplate').html()),

  render: function () {  
    this.$el.html(this.template());
    return this;
  }

});