<script type="text/template" id="calculatorSubmitButtonTemplate">
  <div class="col-xs-12"><div class="btn btn-default pull-right" id="calculatorSubmitButton">Рассчитать</div></div>
</script>

<script type="text/template" id="paymentModalTemplate">
  <!-- Modal payment -->
  <div class="modal fade payment_modal" id="paymentModal" tabindex="-1" role="dialog" aria-labelledby="paymentLabel">
    <div class="modal-dialog" role="document">     
      <div class="modal-content">
        <form class="" id="paymentForm" method="get" action="#" onSubmit="return false;">
          <fieldset>         
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 class="modal-title" id="paymentLabel">Заказ составлен</h4>
            </div>

            <div class="modal-body" id="paymentModalFields">
              <form>
                <fieldset disabled>
                  <div class="form-group">
                    <label>Город отправления</label>
                    <input type="text" class="form-control" placeholder="<%= cityOfDepartureName %>">
                  </div>

                  <div class="form-group">
                    <label>Город отправления</label>
                    <input type="text" class="form-control" placeholder="<%= cityOfDestinationName %>">
                  </div>

                  <div class="form-group shipping_options">
                    <label>Параметры груза</label>

                    <div class="input-group">
                      <span class="input-group-addon" id="basic-addon1">Вес</span>
                      <input type="number" class="form-control" placeholder="<%= shippingOptionsWeight %>">
                      <span class="input-group-addon">кг</span>
                    </div>                                    

                    <div class="input-group">
                      <span class="input-group-addon" id="basic-addon1">Объём</span>
                      <input type="number" class="form-control" placeholder="<%= shippingOptionsVolume %>">
                      <span class="input-group-addon">м<sup>3</sup></span>
                    </div>  
                  </div>  
                </fieldset>
              </form>                   
            </div>

            <div class="modal-footer">
              <button type="button" class="btn btn-default" data-dismiss="modal">Понятно</button>
            </div>
          </fieldset>
        </form>          
      </div>
    </div>
  </div>  
</script>

<script type="text/template" id="cityOfDepartureTemplate">
  <div class="panel panel-default">
    <div class="panel-body row">
      <h2 class="col-xs-12">Город отправления</h2>
      <div class="form-group col-xs-12">
        <input type="text" class="form-control" id="fldCityOfDeparture">
        <div id="errorMessageCityOfDeparture" class="help-block"></div>
      </div>
    </div>
  </div>
</script>

<script type="text/template" id="cityOfDestinationTemplate">
  <div class="panel panel-default">
    <div class="panel-body row">
      <h2 class="col-xs-12">Город назначения</h2>
      <div class="form-group col-xs-12">
        <input type="text" class="form-control" id="fldCityOfDestination">
        <div id="errorMessageCityOfDestination" class="help-block"></div>
      </div>
    </div>
  </div>
</script>


<script type="text/template" id="shippingOptionsTemplate">
  <div class="panel panel-default">
    <div class="panel-body row">
      <h2 class="col-xs-12">Параметры груза</h2>
      <div class="form-group col-xs-12">
        <div class="">
          <label>Вес</label>
          <input type="text" class="form-control" id="fldShippingOptionsWeight">
          <div id="errorMessageShippingOptionsWeight" class="help-block"></div>
        </div>

        <div class="">
          <label>Объём</label>
          <input type="text" class="form-control" id="fldShippingOptionsVolume">  
          <div id="errorMessageShippingOptionsVolume" class="help-block"></div>      
        </div>
      </div>
    </div>
  </div>
</script>
