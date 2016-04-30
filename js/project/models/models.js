window.APP = window.APP || {};

APP.CityOfDepartureModel = Backbone.Model.extend({
  defaults: {
    cityName: undefined
  }, 

  validate: function(attrs) {   console.log('v', attrs.cityName);
    var errorsArr = [];

    if($.trim(attrs.cityName).length == 0) { errorsArr.push('Это поле не может быть пустым') };

    console.log('errorsArr: ', errorsArr);

    if(errorsArr.length != 0) { return errorsArr };
  }  
});