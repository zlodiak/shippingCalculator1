APP.CalculatorView = Backbone.View.extend({  

  initialize: function() {  
    this.cityOfDepartureModel = new APP.CityOfDepartureModel();
    this.cityOfDepartureWidjet = new APP.CityOfDepartureView({model: this.cityOfDepartureModel});
    this.cityOfDestinationWidjet = new APP.CityOfDestinationView();
    this.shippingOptionsWidjet = new APP.ShippingOptionsView();
    this.render();
  },    

  el: $('#contentContainer'),

  template: _.template($('#calculatorSubmitButtonTemplate').html()),

  render: function () {  
    this.$el.append(this.cityOfDepartureWidjet.render().el);
    this.$el.append(this.cityOfDestinationWidjet.render().el);
    this.$el.append(this.shippingOptionsWidjet.render().el);
    this.$el.append(this.template());
    return this;
  },

  events:{
    'click #calculatorSubmitButton' : 'submit'
  },

  submit: function() {
    var cityName = $('#fldCityOfDeparture').val();

    this.cityOfDepartureModel.set({'cityName': cityName});

    if(this.cityOfDepartureModel.isValid()) {        
      console.log('valid');
      this.cityOfDepartureWidjet.validMarkAdd();
    } else {      
      var errorMessagesArr = this.cityOfDepartureModel.validationError;
      console.log('invalid: ', errorMessagesArr);
      this.cityOfDepartureWidjet.notValidMarkAdd(errorMessagesArr);
      this.cityOfDepartureModel.set({'cityName': undefined});
    };

    console.log('-----------------------');
    console.log('city dep: ', this.cityOfDepartureModel.get('cityName'));
  }

});


