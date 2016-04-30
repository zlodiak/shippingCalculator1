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
  },

  notValidMarkAdd: function(errorMessagesArr) {
    this.$el.find('#fldCityOfDeparture').removeClass('valid').addClass('not_valid');

    this.$el.find('#errorMessageCityOfDeparture').html('');
    for(key in errorMessagesArr) {
      this.$el.find('#errorMessageCityOfDeparture').append(errorMessagesArr[key] + '<br>');
    };    
  },

  validMarkAdd: function() {
    this.$el.find('#fldCityOfDeparture').removeClass('not_valid').addClass('valid');
    this.$el.find('#errorMessageCityOfDeparture').html('');
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
  },

  notValidMarkAdd: function(errorMessagesArr) {
    this.$el.find('#fldCityOfDestination').removeClass('valid').addClass('not_valid');

    this.$el.find('#errorMessageCityOfDestination').html('');
    for(key in errorMessagesArr) {
      this.$el.find('#errorMessageCityOfDestination').append(errorMessagesArr[key] + '<br>');
    };    
  },

  validMarkAdd: function() {
    this.$el.find('#fldCityOfDestination').removeClass('not_valid').addClass('valid');
    this.$el.find('#errorMessageCityOfDestination').html('');
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
  },

  notValidMarkAdd: function(errorMessagesArr) {
    if(errorMessagesArr.weight.length != 0) {
      console.log('weight err');
      this.$el.find('#fldShippingOptionsWeight').removeClass('valid').addClass('not_valid');

      this.$el.find('#errorMessageShippingOptionsWeight').html('');
      for(key in errorMessagesArr.weight) {
        this.$el.find('#errorMessageShippingOptionsWeight').append(errorMessagesArr.weight[key] + '<br>');
      };       
    }; 

    if(errorMessagesArr.volume.length != 0) {
      console.log('volume err');
      this.$el.find('#fldShippingOptionsVolume').removeClass('valid').addClass('not_valid');

      this.$el.find('#errorMessageShippingOptionsVolume').html('');
      for(key in errorMessagesArr.volume) {
        this.$el.find('#errorMessageShippingOptionsVolume').append(errorMessagesArr.volume[key] + '<br>');
      };       
    }; 
  },

  validMarkAdd: function() {  console.log('valid mark');
    this.$el.find('#fldShippingOptionsWeight, #fldShippingOptionsVolume').removeClass('not_valid').addClass('valid');
    this.$el.find('#errorMessageShippingOptionsWeight, #errorMessageShippingOptionsVolume').html('');
  }  

});