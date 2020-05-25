/**
 powermeter.js
 Copyright (c) 2020 NTT DOCOMO,INC.
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

  let btnStr = getBackButton('Device Top', 'searchSystem', serviceId);
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  let str = '';

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
  let params = pmMakeUriBuilder(serviceId);
  let successCallback = function (json){
    console.log('Response: ', json);
    $('#power-status').val(json.powerstatus);
  };
  sdk.get(params).then(json => { successCallback(json);}).catch(e => { pmAlertError(e.errorCode, e.errorMessage);});
}

function doPowerMeterPutPowerOn(serviceId){
  let params = pmMakeUriBuilder(serviceId);
  sdk.put(params).then(json => { pmLoggingSuccess(json);}).catch(e => { pmAlertError(e.errorCode, e.errorMessage);});
}

function doPowerMeterDeletePowerOff(serviceId){
  let params = pmMakeUriBuilder(serviceId);
  dConnect.delete(params).then(json => { pmLoggingSuccess(json);}).catch(e => { pmAlertError(e.errorCode, e.errorMessage);});
}

function doPowerMeterGetIntegratedPower(serviceId){
  let params = pmMakeUriBuilder(serviceId,'integratedpower');

  let newDate = $('#newDate').val();
  let newTime = $('#newTime').val();

  if(newDate && newTime){
    let newDateStr = newDate + 'T' + newTime + ':00+09:00';
    params.params['date'] = newDateStr;
  }

  let unit = $('#integrated-unit').val();

  if (unit != 'null_value') {
    params.params['unit'] = unit;
  }

  let count = $('#count-power').val();

  if (count != 'null_value') {
    params.params['count'] = count;
  }

  let powerFlow = $('#powerFlow-power').val();

  if (powerFlow != 'null_value') {
    params.params['powerFlow'] = powerFlow;
  }

  let successCallback = function (json){
    $('#integrated-power').val(json.integratedpower);
    $('#integrated-power-unit').val(json.unit);
    $('#integrated-power-count').val(json.count);
    $('#integrated-power-powerflow').val(json.powerFlow);
  };
  sdk.get(params).then(json => { successCallback(json);}).catch(e => { pmAlertError(e.errorCode, e.errorMessage);});
}

function doPowerMeterGetInstantaneousPower(serviceId){
  let params = pmMakeUriBuilder(serviceId,'instantaneouspower');
  let unit = $('#unit-power').val();

  if (unit != 'null_value') {
    params.params['unit'] = unit;
  }

  let successCallback = function (json){
    console.log('Response: ', json);
    $('#instantaneous-power').val(json.instantaneouspower);
    $('#instantaneous-power-unit').val(json.unit);
  };
  sdk.get(params).then(json => { successCallback(json);}).catch(e => { pmAlertError(e.errorCode, e.errorMessage);});
}

function doPowerMeterGetInstantaneousCurrent(serviceId){
  let params = pmMakeUriBuilder(serviceId,'instantaneouscurrent');
  let unit = $('#unit-current').val();

  if (unit != 'null_value') {
    params.params['unit'] = unit;
  }

  let successCallback = function (json){
    console.log('Response: ', json);
    $('#instantaneous-current-r').val(json.instantaneouscurrent.rphase);
    $('#instantaneous-current-t').val(json.instantaneouscurrent.tphase);
    $('#instantaneous-current-unit').val(json.instantaneouscurrent.unit);
  };
  sdk.get(params).then(json => { successCallback(json);}).catch(e => { pmAlertError(e.errorCode, e.errorMessage);});
}


//////common (pm = powermeter)

function pmMakeButton(title,functionName,params) {
  let paramStr = '';
  if(params !== null && params.length > 0){
    if( typeof params === 'string' ) {
      params = [ params ];
    }
    for (let i = 0;i<params.length;i++){
      paramStr += '\''+params[i]+'\'';
      paramStr += ',';
    }
    paramStr = paramStr.slice(0,-1);
  }
  return '<input onclick="'+functionName+'('+paramStr+');" type="button" value="'+title+'"/>';
}

function pmMakeUriBuilder(serviceId, attribute){
   let params = {
    profile: 'powermeter',
    params: {
      serviceId: serviceId
    }
  };
  if(typeof attribute !== 'undefined'){
    params['attribute'] = attribute;
  }
  return params;
}

function pmLoggingSuccess(json){
  console.log('Response: ', JSON.stringify(json));
}

function pmAlertError(errorCode, errorMessage){
  showError('powermeter error', errorCode, errorMessage);
}
