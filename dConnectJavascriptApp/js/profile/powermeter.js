/**
 powermeter.js
 Copyright (c) 2015 NTT DOCOMO,INC.
 Released under the MIT license
 http://opensource.org/licenses/mit-license.php
 */

/**
 * Show PowerMeter Menu
 *
 * @param {String} serviceId service Id
 */
function showPowerMeter(serviceId) {
  initAll();
  setTitle('PowerMeter Profile');

  var sessionKey = currentClientId;

  var btnStr = getBackButton('Device Top', 'doPowerMeterBack', serviceId, '');
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  var str = '';

  str += makeInputText('PowerStatus', 'power-status', 'power-status');
  str += pmMakeButton('GetPowerState','doPowerMeterGetPowerState',serviceId);
  str += pmMakeButton('PutPowerOn','doPowerMeterPutPowerOn',serviceId);
  str += pmMakeButton('DeletePowerOff','doPowerMeterDeletePowerOff',serviceId);
  str += '<hr>';

  str += '<center>Date</center><br>';
  str += '<input name="newDate" id="newDate" type="text" data-role="datebox" data-options=\'{"mode":"datebox"}\' />';
  str += '<input name="newTime" id="newTime" type="text" data-role="datebox" data-options=\'{"mode":"timebox"}\' />';

  str += makeInputText('IntegratedPowerValue', 'integrated-powervalue', 'integrated-powervalue');
  str += pmMakeButton('GetIntegratedPowerValue','doPowerMeterGetIntegratedPowerValue',serviceId);
  str += '<hr>';

  str += makeInputText('InstantaneousPowerValue', 'instantaneous-powervalue', 'instantaneous-powervalue');
  str += pmMakeButton('GetInstantaneousPowerValue','doPowerMeterGetInstantaneousPowerValue',serviceId);
  str += '<hr>';

  reloadContent(str);
}

function doPowerMeterGetPowerState(serviceId){
  var builder = pmMakeUriBuilder(serviceId);
  var successCallback = function (json){
    console.log('Response: ', json);
    $('#power-stauts').val(json.powerstatus);
  };
  dConnect.get(builder.build(), null, successCallback, pmAlertError);
}

function doPowerMeterPutPowerOn(serviceId){
  var builder = pmMakeUriBuilder(serviceId);
  dConnect.put(builder.build(),null,null,pmLoggingSuccess,pmAlertError);
}

function doPowerMeterDeletePowerOff(serviceId){
  var builder = pmMakeUriBuilder(serviceId);
  dConnect.delete(builder.build(),null,pmLoggingSuccess,pmAlertError);
}

function doPowerMeterGetIntegratedPowerValue(serviceId){
  var builder = pmMakeUriBuilder(serviceId,'integratedpowervalue');

  var newDate = $('#newDate').val();
  var newTime = $('#newTime').val();

  if(newDate && newTime){
    var newDateStr = newDate + 'T' + newTime + ':00+0900';
    builder.addParameter('date', newDateStr);
  }

  var successCallback = function (json){
    var integra = json.integratedpowervalue;
    var total = 0;
    jQuery.each(integra,function(i,value){
      total+=value;
    });
    $('#integrated-powervalue').val(total);
  };
  dConnect.get(builder.build(), null, successCallback, pmAlertError);
}

function doPowerMeterGetInstantaneousPowerValue(serviceId){
  var builder = pmMakeUriBuilder(serviceId,'instantaneouspowervalue');
  var successCallback = function (json){
    console.log('Response: ', json);
    $('#instantaneous-powervalue').val(json.instantaneouspowervalue);
  };
  dConnect.get(builder.build(), null, successCallback, pmAlertError);
}

/**
 * Back button
 *
 * @param {String}serviceId service id
 * @param {String}sessionKey session key
 */
function doPowerMeterBack(serviceId, sessionKey) {
  searchSystem(serviceId);
}

//////common (pm = powermeter)

function pmMakeButton(title,functionName,params) {
  var paramStr = '';
  if(params !== null && params.length > 0){
    if( typeof params === 'string' ) {
      params = [ params ];
    }
    for (var i = 0;i<params.length;i++){
      paramStr += '\''+params[i]+'\'';
      paramStr += ',';
    }
    paramStr = paramStr.slice(0,-1);
  }
  return '<input onclick="'+functionName+'('+paramStr+');" type="button" value="'+title+'"/>';
}

function pmMakeUriBuilder(serviceId, attribute){
  var builder = new dConnect.URIBuilder();
  builder.setProfile('powermeter');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  if(typeof attribute !== 'undefined'){
    builder.setAttribute(attribute);
  }
  return builder;
}

function pmLoggingSuccess(json){
  console.log('Response: ', json);
}

function pmAlertError(errorCode, errorMessage){
  showError('powermeter error', errorCode, errorMessage);
}
