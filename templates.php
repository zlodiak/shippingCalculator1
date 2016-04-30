<script type="text/template" id="calculatorSubmitButtonTemplate">
  <div class="btn btn-default" id="calculatorSubmitButton">Рассчитать</div>
</script>

<script type="text/template" id="paymentModalTemplate">
  <!-- Modal payment -->
  <div class="modal fade" id="paymentModal" tabindex="-1" role="dialog" aria-labelledby="paymentLabel">
    <div class="modal-dialog" role="document">     
      <div class="modal-content">
        <form class="" id="paymentForm" method="get" action="#" onSubmit="return false;">
          <fieldset>         
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 class="modal-title" id="paymentLabel">Груз готов к отправке, введите номер пластиковой карты</h4>
            </div>

            <div class="modal-body" id="paymentModalFields">
              <input class="form-control" id="fldCardNumber" name="fldCardNumber" type="number">                     
            </div>

            <div class="modal-footer">
              <button type="button" class="btn btn-default" data-dismiss="modal">Закрыть</button>
              <button type="submit" class="btn btn-primary submit" value="Submit" id="paymentSubmitButton">Оплатить</button>
            </div>
          </fieldset>
        </form>          
      </div>
    </div>
  </div>  
</script>

<script type="text/template" id="cityOfDepartureTemplate">
  <div class="panel panel-default">
    <div class="panel-body">
      <h2>Город отправления</h2>
      <div class="input-group">
        <input type="text" class="form-control" id="fldCityOfDeparture">
        <div id="errorMessageCityOfDeparture" class="help-block"></div>
      </div>
    </div>
  </div>
</script>

<script type="text/template" id="cityOfDestinationTemplate">
  <div class="panel panel-default">
    <div class="panel-body">
      <h2>Город назначения</h2>
      <div class="input-group">
        <input type="text" class="form-control" id="fldCityOfDestination">
        <div id="errorMessageCityOfDestination" class="help-block"></div>
      </div>
    </div>
  </div>
</script>


<script type="text/template" id="shippingOptionsTemplate">
  <div class="panel panel-default">
    <div class="panel-body">
      <h2>Параметры груза</h2>
      <div class="input-group col-xs-12">
        <div class="row">
          <label>Вес</label>
          <input type="text" class="form-control" id="fldWeight">
        </div>

        <div class="row">
          <label>Объём</label>
          <input type="text" class="form-control" id="fldVolume">        
        </div>
      </div>
    </div>
  </div>
</script>
