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
  str += pmMakeButton('GetPowerStatus','doPowerMeterGetPowerStatus',serviceId);
  str += pmMakeButton('PutPowerOn','doPowerMeterPutPowerOn',serviceId);
  str += pmMakeButton('DeletePowerOff','doPowerMeterDeletePowerOff',serviceId);
  str += '<hr>';

  str += '<center>Date</center><br>';
  str += '<input name="newDate" id="newDate" type="text" data-role="datebox" data-options=\'{"mode":"datebox"}\' />';
  str += '<input name="newTime" id="newTime" type="text" data-role="datebox" data-options=\'{"mode":"timebox"}\' />';

  str += '<form name="integratedPowerUnitForm">';
  str += '<SELECT name="integrated-unit" id="integrated-unit">';
  str += '<OPTION value="null_value">unit : 指定なし</OPTION>';
  str += '<OPTION value="Wh">unit : Wh</OPTION>';
  str += '<OPTION value="kWh">unit : kWh</OPTION>';
  str += '<OPTION value="MWh">unit : MWh (Error Case)</OPTION>';
  str += '</SELECT>';
  str += '</form>';

  str += '<form name="integratedPowerCountForm">';
  str += '<SELECT name="count-power" id="count-power">';
  str += '<OPTION value="null_value">count : 指定なし</OPTION>';
  str += '<OPTION value="24">count : 24</OPTION>';
  str += '<OPTION value="48">count : 48</OPTION>';
  str += '<OPTION value="96">count : 96 (Error Case)</OPTION>';
  str += '</SELECT>';
  str += '</form>'; 

  str += '<form name="integratedPowerPowerFlowForm">';
  str += '<SELECT name="powerFlow-power" id="powerFlow-power">';
  str += '<OPTION value="null_value">powerFlow : 指定なし</OPTION>';
  str += '<OPTION value="normal">powerFlow : normal</OPTION>';
  str += '<OPTION value="reverse">powerFlow : reverse</OPTION>';
  str += '<OPTION value="turn">powerFlow : turn (Error Case)</OPTION>';
  str += '</SELECT>';
  str += '</form>';

  str += makeInputText('IntegratedPower', 'integrated-power', 'integrated-power');
  str += makeInputText('Unit', 'integrated-power-unit', 'integrated-power-unit');
  str += makeInputText('Count', 'integrated-power-count', 'integrated-power-count');
  str += makeInputText('powerFlow', 'integrated-power-powerflow', 'integrated-power-powerflow');
  str += pmMakeButton('GetIntegratedPower','doPowerMeterGetIntegratedPower',serviceId);
  str += '<hr>';

  str += '<form name="instantaneousPowerUnitForm">';
  str += '<SELECT name="unit-power" id="unit-power">';
  str += '<OPTION value="null_value">unit : 指定なし</OPTION>';
  str += '<OPTION value="W">unit : W</OPTION>';
  str += '<OPTION value="kW">unit : kW</OPTION>';
  str += '<OPTION value="MW">unit : MW (Error Case)</OPTION>';
  str += '</SELECT>';
  str += '</form>';

  str += makeInputText('InstantaneousPower', 'instantaneous-power', 'instantaneous-power');
  str += makeInputText('Unit', 'instantaneous-power-unit', 'instantaneous-power-unit');
  str += pmMakeButton('GetInstantaneousPower','doPowerMeterGetInstantaneousPower',serviceId);
  str += '<hr>';

  str += '<form name="integratedCurrentUnitForm">';
  str += '<SELECT name="unit-current" id="unit-current">';
  str += '<OPTION value="null_value">unit : 指定なし</OPTION>';
  str += '<OPTION value="A">unit : A</OPTION>';
  str += '<OPTION value="mA">unit : mA</OPTION>';
  str += '<OPTION value="uA">unit : uA (Error Case)</OPTION>';
  str += '</SELECT>';
  str += '</form>';

  str += makeInputText('InstantaneousCurrent(R)', 'instantaneous-current-r', 'instantaneous-current-r');
  str += makeInputText('InstantaneousCurrent(T)', 'instantaneous-current-t', 'instantaneous-current-t');
  str += makeInputText('Unit', 'instantaneous-current-unit', 'instantaneous-current-unit');
  str += pmMakeButton('GetInstantaneousCurrent','doPowerMeterGetInstantaneousCurrent',serviceId);
  str += '<hr>';
  reloadContent(str);
}

function doPowerMeterGetPowerStatus(serviceId){
  var builder = pmMakeUriBuilder(serviceId);
  var successCallback = function (json){
    console.log('Response: ', json);
    $('#power-status').val(json.powerstatus);
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
    var newDateStr = newDate + 'T' + newTime + ':00+09:00';
    builder.addParameter('date', newDateStr);
  }

  var unit = $('#integrated-unit').val();

  if (unit != 'null_value') {
    builder.addParameter('unit', unit);
  }

  var count = $('#count-power').val();

  if (count != 'null_value') {
    builder.addParameter('count', count);
  }

  var powerFlow = $('#powerFlow-power').val();

  if (powerFlow != 'null_value') {
    builder.addParameter('powerFlow', powerFlow);
  }

  var successCallback = function (json){
    $('#integrated-power').val(json.integratedpower);
    $('#integrated-power-unit').val(json.unit);
    $('#integrated-power-count').val(json.count);
    $('#integrated-power-powerflow').val(json.powerFlow);
  };
  dConnect.get(builder.build(), null, successCallback, pmAlertError);
}

function doPowerMeterGetInstantaneousPower(serviceId){
  var builder = pmMakeUriBuilder(serviceId,'instantaneouspower');
  var unit = $('#unit-power').val();

  if (unit != 'null_value') {
    builder.addParameter('unit', unit);
  }

  var successCallback = function (json){
    console.log('Response: ', json);
    $('#instantaneous-power').val(json.instantaneouspower);
    $('#instantaneous-power-unit').val(json.unit);
  };
  dConnect.get(builder.build(), null, successCallback, pmAlertError);
}

function doPowerMeterGetInstantaneousCurrent(serviceId){
  var builder = pmMakeUriBuilder(serviceId,'instantaneouscurrent');
  var unit = $('#unit-current').val();

  if (unit != 'null_value') {
    builder.addParameter('unit', unit);
  }

  var successCallback = function (json){
    console.log('Response: ', json);
    $('#instantaneous-current-r').val(json.instantaneouscurrent.rphase);
    $('#instantaneous-current-t').val(json.instantaneouscurrent.tphase);
    $('#instantaneous-current-unit').val(json.instantaneouscurrent.unit);
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
