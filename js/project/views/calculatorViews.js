APP.CalculatorView = Backbone.View.extend({  

  initialize: function() {  
    this.paymentModalView = new APP.PaymentModalView();

    this.cityOfDepartureModel = new APP.CityOfDepartureModel();
    this.cityOfDepartureView = new APP.CityOfDepartureView({model: this.cityOfDepartureModel});

    this.cityOfDestinationModel = new APP.CityOfDestinationModel();
    this.cityOfDestinationView = new APP.CityOfDestinationView({model: this.cityOfDestinationModel});

    this.shippingOptionsView = new APP.ShippingOptionsView();

    this.render();
  },    

  el: $('#contentContainer'),

  template: _.template($('#calculatorSubmitButtonTemplate').html()),

  render: function () {  
    this.$el.append(this.cityOfDepartureView.render().el);
    this.$el.append(this.cityOfDestinationView.render().el);
    this.$el.append(this.shippingOptionsView.render().el);
    this.$el.append(this.paymentModalView.render().el);
    this.$el.append(this.template());
    return this;
  },

  events:{
    'click #calculatorSubmitButton' : 'submit'
  },

  submit: function() {  
    var flagPaymentStart = true,
        cityDeportureName = $('#fldCityOfDeparture').val(), 
        cityDestinationName = $('#fldCityOfDestination').val();

    this.cityOfDepartureModel.set({'cityName': cityDeportureName});

    if(this.cityOfDepartureModel.isValid()) {        
      this.cityOfDepartureView.validMarkAdd();
    } else {      
      var errorMessagesArr = this.cityOfDepartureModel.validationError;
      this.cityOfDepartureView.notValidMarkAdd(errorMessagesArr);
      this.cityOfDepartureModel.set({'cityName': undefined});
      flagPaymentStart = false;
    };

    this.cityOfDestinationModel.set({'cityName': cityDestinationName});

    if(this.cityOfDestinationModel.isValid()) {        
      this.cityOfDestinationView.validMarkAdd();
    } else {      
      var errorMessagesArr = this.cityOfDestinationModel.validationError;
      this.cityOfDestinationView.notValidMarkAdd(errorMessagesArr);
      this.cityOfDestinationModel.set({'cityName': undefined});
      flagPaymentStart = false;
    };

    console.log('-----------------------', flagPaymentStart);
    console.log('city dep: ', this.cityOfDepartureModel.get('cityName'));
    console.log('city des: ', this.cityOfDestinationModel.get('cityName'));

    if(flagPaymentStart == true) {
      $('#paymentModal').modal('show');
    };
  }

});


APP.PaymentModalView = Backbone.View.extend({  

  initialize: function() {  

  },    

  tagName: 'div',

  template: _.template($('#paymentModalTemplate').html()),

  render: function () {  
    this.$el.html(this.template());
    return this;
  }

});