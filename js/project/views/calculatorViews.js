APP.CalculatorView = Backbone.View.extend({  

  initialize: function() {  
    this.cityOfDepartureModel = new APP.CityOfDepartureModel();
    this.cityOfDepartureView = new APP.CityOfDepartureView({
      model: this.cityOfDepartureModel
    });

    this.cityOfDestinationModel = new APP.CityOfDestinationModel();
    this.cityOfDestinationView = new APP.CityOfDestinationView({
      model: this.cityOfDestinationModel
    });

    this.shippingOptionsModel = new APP.ShippingOptionsModel();
    this.shippingOptionsView = new APP.ShippingOptionsView({
      model: this.shippingOptionsModel
    });

    this.render();
  },    

  el: $('#contentContainer'),

  template: _.template($('#calculatorSubmitButtonTemplate').html()),

  render: function () {  
    this.$el.append(this.cityOfDepartureView.render().el);
    this.$el.append(this.cityOfDestinationView.render().el);
    this.$el.append(this.shippingOptionsView.render().el);    
    this.$el.append(this.template());
    return this;
  },

  events:{
    'click #calculatorSubmitButton' : 'submit'
  },

  submit: function() {  
    var cityDeportureName =     $('#fldCityOfDeparture').val(), 
        cityDestinationName =   $('#fldCityOfDestination').val(), 
        shippingOptionsWeight = $('#fldShippingOptionsWeight').val(),
        shippingOptionsVolume = $('#fldShippingOptionsVolume').val();


    this.cityOfDepartureModel.set({'cityName': cityDeportureName});
    this._changeValidMarks(this.cityOfDepartureModel, this.cityOfDepartureView);


    this.cityOfDestinationModel.set({'cityName': cityDestinationName});
    this._changeValidMarks(this.cityOfDestinationModel, this.cityOfDestinationView);


    this.shippingOptionsModel.set({
      'weight': shippingOptionsWeight,
      'volume': shippingOptionsVolume
    });

    this.shippingOptionsView.validMarkAdd();

    if(!this.shippingOptionsModel.isValid()) {
      var errorMessagesArr = this.shippingOptionsModel.validationError;

      this.shippingOptionsView.notValidMarkAdd(errorMessagesArr);

      if(errorMessagesArr.weight.length != 0) { 
        this.shippingOptionsModel.set({'weight': undefined}); 
      };

      if(errorMessagesArr.volume.length != 0) { 
        this.shippingOptionsModel.set({'volume': undefined}); 
      };
    }; 


/*    console.log('---------- result -------------');

    console.log(
      'city departure: ', 
      this.cityOfDepartureModel.get('cityName')
    );

    console.log(
      'city destination: ', 
      this.cityOfDestinationModel.get('cityName')
    );

    console.log(
      'weight / volume: ', 
      this.shippingOptionsModel.get('weight'), 
      this.shippingOptionsModel.get('volume')
    );*/


    if( this.cityOfDepartureModel.get('cityName') &&
        this.cityOfDestinationModel.get('cityName') &&
        this.shippingOptionsModel.get('weight') &&
        this.shippingOptionsModel.get('volume')
    ) { 
      this.paymentModalView = new APP.PaymentModalView();
      this.$el.append(this.paymentModalView.render({
        'cityOfDepartureName': this.cityOfDepartureModel.get('cityName'),
        'cityOfDestinationName': this.cityOfDestinationModel.get('cityName'),
        'shippingOptionsWeight': this.shippingOptionsModel.get('weight'),
        'shippingOptionsVolume': this.shippingOptionsModel.get('volume')
      }).el);
      $('#paymentModal').modal('show') 
    };
  },

  _changeValidMarks: function(model, view) {
    if(model.isValid()) {        
      view.validMarkAdd();
    } else {      
      var errorMessagesArr = model.validationError;

      view.notValidMarkAdd(errorMessagesArr);
      model.set({'cityName': undefined});
    };    
  }

});


APP.PaymentModalView = Backbone.View.extend({     

  tagName: 'div',

  template: _.template($('#paymentModalTemplate').html()),

  render: function (data) {  
    this.$el.html(this.template(data));
    return this;
  }

});