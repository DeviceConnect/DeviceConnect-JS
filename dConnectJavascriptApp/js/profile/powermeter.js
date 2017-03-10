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

  str += makeInputText('IntegratedPower', 'integrated-power', 'integrated-power');
  str += pmMakeButton('GetIntegratedPower','doPowerMeterGetIntegratedPower',serviceId);
  str += '<hr>';

  str += makeInputText('InstantaneousPower', 'instantaneous-power', 'instantaneous-power');
  str += pmMakeButton('GetInstantaneousPower','doPowerMeterGetInstantaneousPower',serviceId);
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

function doPowerMeterGetIntegratedPower(serviceId){
  var builder = pmMakeUriBuilder(serviceId,'integratedpower');

  var newDate = $('#newDate').val();
  var newTime = $('#newTime').val();

  if(newDate && newTime){
    var newDateStr = newDate + 'T' + newTime + ':00+0900';
    builder.addParameter('date', newDateStr);
  }

  var successCallback = function (json){
    var integra = json.integratedpower;
    var total = 0;
    jQuery.each(integra,function(i,value){
      total+=value;
    });
    $('#integrated-power').val(total);
  };
  dConnect.get(builder.build(), null, successCallback, pmAlertError);
}

function doPowerMeterGetInstantaneousPower(serviceId){
  var builder = pmMakeUriBuilder(serviceId,'instantaneouspower');
  var successCallback = function (json){
    console.log('Response: ', json);
    $('#instantaneous-power').val(json.instantaneouspower);
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
