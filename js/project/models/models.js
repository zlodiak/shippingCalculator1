window.APP = window.APP || {};

APP.CityOfDepartureModel = Backbone.Model.extend({
  defaults: {
    cityName: undefined
  }, 

  validate: function(attrs) {   console.log('v', attrs.cityName);
    if($.trim(attrs.cityName).length == 0) { return 'Это поле не может быть пустым' };
  }  
});