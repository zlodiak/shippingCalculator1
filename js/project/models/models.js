window.APP = window.APP || {};

APP.Departure = Backbone.Model.extend({
  defaults: {
    idParent: undefined,
    cityName: undefined
  }, 

  // idAttribute: 'idGraph',

  validate: function(attrs) {

  }  
});