/**
 airconditioner.js
 Copyright (c) 2015 NTT DOCOMO,INC.
 Released under the MIT license
 http://opensource.org/licenses/mit-license.php
 */

let PowerStatus = null;

let PowerSaving = null;

let OperationMode = null;

let RoomTemperature = null;

let TemperatureMin = 0;
let TemperatureMax = 50;
let Temperature = 25;

let AirFlowMin = 0;
let AirFlowMax = 100;
let AirFlow = 0;
let AirFlowAuto = "false";


/**
 * Air Conditioner
 */
function showAirConditioner(serviceId) {
  initAll();
  setTitle('AirConditioner Profile');

  let btnStr = getBackButton('Device Top', 'searchSystem', serviceId);
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  getAirConditionerTemperatureStatus(serviceId);
  getAirConditionerPowerStatus(serviceId);
  getAirConditionerPowerSavingStatus(serviceId);
  getAirConditionerModeSettingStatus(serviceId);
  getAirConditionerRoomTemperatureStatus(serviceId);
  getAirConditionerAirFlowStatus(serviceId);

  let str = '';
  str += '<form name="AirConditionerForm">';

  str += '<div>';
  str += '<label for="idPowerState">Power Status:</label>';
  str += '<input type="text" id="idPowerState" width="100%" value="'+ PowerStatus + '" readonly>';
  str += '<input type="button" onclick="doAirConditionerOnOff(\'' +
  serviceId + '\', \'ON\');" value="ON" name="ON" >';
  str += '<input type="button" onclick="doAirConditionerOnOff(\'' +
  serviceId + '\', \'OFF\');" value="OFF" name="OFF" >';
  str += '</div>';

  str += '<div>';
  str += '<label for="idPowerSavingStatus">Power Saving:</label>';
  str += '<input type="text" id="idPowerSavingStatus" width="100%" value="'+ PowerSaving + '" readonly>';
  str += '<input type="button" onclick="doAirConditionerPowerSavingOnOff(\'' + serviceId + '\', \'Normal\');" value="Normal" name="Normal" >';
  str += '<input type="button" onclick="doAirConditionerPowerSavingOnOff(\'' + serviceId + '\', \'PowerSaving\');" value="PowerSaving" name="PowerSaving" >';
  str += '</div>';

  str += '<div>';
  str += '<label for="idOperationModeStatus">Operation Mode:</label>';
  str += '<input type="text" id="idOperationModeStatus" width="100%" value="'+ OperationMode + '" readonly>';
  str += '<input type="button" onclick="doAirConditionerModeSetting(\'' +
  serviceId + '\', \'Automatic\');" value="Automatic" name="Automatic" >';
  str += '<input type="button" onclick="doAirConditionerModeSetting(\'' +
  serviceId + '\', \'AirCirculator\');" value="AirCirculator" name="AirCirculator" >';
  str += '<input type="button" onclick="doAirConditionerModeSetting(\'' +
  serviceId + '\', \'Cooling\');" value="Cooling" name="Cooling" >';
  str += '<input type="button" onclick="doAirConditionerModeSetting(\'' +
  serviceId + '\', \'Heating\');" value="Heating" name="Heating" >';
  str += '<input type="button" onclick="doAirConditionerModeSetting(\'' +
  serviceId + '\', \'Dehumidification\');" value="Dehumidification" name="Dehumidification" >';
  str += '<input type="button" onclick="doAirConditionerModeSetting(\'' +
  serviceId + '\', \'Other\');" value="Other" name="Other" >';
  str += '</div>';

  str += '<div>';
  str += '<label for="idRoomTemperatureStatus">Room Temperature (℃):</label>';
  str += '<input type="text" id="idRoomTemperatureStatus" width="100%" readonly>';
  str += '<input type="button" onclick="getAirConditionerRoomTemperatureStatus(\'' + serviceId + '\');" value="Get Room Temperature Value" >';
  str += '</div>';

  str += '<div>';
  str += '<label for="idTemperatureStatus">Temperature Value (℃):</label>';
  str += '<input type="text" id="idTemperatureStatus" width="100%" value="'+ Temperature + '" readonly>';
  str += '<input id="idTemperature" name="idTemperature" type="range" min="' +
           TemperatureMin + '" max="' + TemperatureMax +
           '" step="1" onchange="showTemperature()" value="'+ Temperature + '" />';
  str += '<input type="button" onclick="doAirConditionerSetTemperatureValue(\'' + serviceId + '\');" value="Set Temperature Value" >';
  str += '</div>';

  str += '<div>';
  str += '<label for="idAirFlowStatus">Air Flow Value:';
  str += '<input type="text" id="idAirFlowStatus" width="100%" value="'+ AirFlow + '" readonly /></label>';
  str += '</div>';

  str += '<div>';
  str += '<br>';
  str += '<input type="checkbox" id="idAirFlowAutoCheck" name="AirFlowAutoCheck" /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Air Flow Automatic';
  str += '<br>';
  str += '</div>';

  str += '<div>';
  str += '<input id="idAirFlow" name="idAirFlow" type="range" min="' +
           AirFlowMin + '" max="' + AirFlowMax +
           '" step="1" onchange="showAirFlow()" value="'+ AirFlow + '" />';
  str += '<input type="button" onclick="doAirConditionerSetAirFlow(\'' + serviceId + '\');" value="Set Air Flow Value" >';
  str += '</div>';

  str += '<div>';
  str += '<li><a href="javascript:showENLControl(\'' + serviceId +
           '\');" >ECHONET Lite Property Control</a></li>';
  str += '</div>';

  str += '</form>';


  reloadList(str);
}

function showTemperature() {
  console.log('showTemperature: ', $('#idTemperature').val());
  Temperature = $('#idTemperature').val();
}

function showAirFlow() {
  console.log('showAirFlow: ', $('#idAirFlow').val());
  AirFlow = $('#idAirFlow').val();
}

/**
 * Show ECHONET Lite Property Get
 *
 * @param {String}serviceId サービスID
 */
function showENLGet(serviceId) {
  initAll();
  setTitle('Get ECHONETLite Property');
  let btnStr = getBackButton('AirConditioner Top', 'showAirConditioner', serviceId);
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  let str = '';
  str += '<form name="ENLGetForm">';
  str += 'ECHONETLite Property Get<br>';

  str += '<label for="airconditonerENLGetEPC">EPC:</label>';
  str += '<input type="text" id="idGetEPC" width="100%">';

  str += '<input type="button" name="getButton" id="getButton" value="Get"' +
           ' onclick="doGetENLEPC(\'' + serviceId + '\');"/>';

  str += '<label for="airconditonerENLGetValue">Value:</label>';
  str += '<input type="text" id="idGetValue" width="100%">';
  str += '</form>';
  reloadContent(str);
}

/**
 * Show ECHONET Lite Property Set
 *
 * @param {String}serviceId Service ID
 */
function showENLSet(serviceId) {
  initAll();
  setTitle('Set ECHONETLite Property');
  let btnStr = getBackButton('AirConditioner Top', 'showAirConditioner', serviceId);
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  let str = '';
  str += '<form name="ENLSetForm">';
  str += 'ECHONETLite Property Set<br>';

  str += '<label for="airconditonerENLSetEPC">EPC:</label>';
  str += '<input type="text" id="idSetEPC" width="100%">';
  str += '<label for="airconditonerENLSetValue">EDT:</label>';
  str += '<input type="text" id="idSetValue" width="100%">';

  str += '<input type="button" name="setButton" id="setButton" value="Set"' +
           ' onclick="doSetENLEPC(\'' + serviceId + '\');"/>';

  str += '<label for="airconditonerENLSetResult">Result:</label>';
  str += '</form>';
  reloadContent(str);
}

/**
 * Get Air Conditioner power state.
 * @param {String} serviceId Service ID.
 */
function getAirConditionerPowerStatus(serviceId) {
  closeLoading();
  showLoading();

  sdk.get({
    profile: 'airconditioner',
    params: {
      serviceId: serviceId
    }
  }).then(json => {
    if (DEBUG) {
      console.log('Response: ', json);
    }
    closeLoading();

    let str = '';
    str += json.powerstatus;
    $('#idPowerState').val(str);
    PowerStatus = str;
  }).catch(e => {
    closeLoading();
    let str = '';
    str += 'Unknown';
    $('#idPowerState').val(str);
    PowerStatus = str;
  });
}

/**
 * Power On/Off.
 * @param {String} serviceId service ID
 * @param {String} isSwitch On / Off
 */
function doAirConditionerOnOff(serviceId, isSwitch) {
  let params = {
    profile: 'airconditioner',
    params: {
      serviceId: serviceId
    }
  }
  closeLoading();
  showLoading();

  let successCallback = function(json) {
    if (DEBUG) {
      console.log('Response: ', json);
    }

    closeLoading();
    getAirConditionerPowerStatus(serviceId);
  };

  let errorCallback = function(errorCode, errorMessage) {
    closeLoading();
    showError('PowerOnOff Air Conditioner', errorCode, errorMessage);
    getAirConditionerPowerStatus(serviceId);
  };

  if (isSwitch == 'ON') {
    sdk.put(params).then( json => { successCallback(json); }).catch( e => { errorCallback(e.errorCode, e.errorMessage);});
  } else {
    sdk.delete(params).then( json => { successCallback(json); }).catch( e => { errorCallback(e.errorCode, e.errorMessage);});
  }

}

/**
 * Get Air Conditioner power saving status.
 * @param {String} serviceId Service ID.
 */
function getAirConditionerPowerSavingStatus(serviceId) {
  closeLoading();
  showLoading();

  sdk.get({
    profile: 'airconditioner',
    attribute: 'powersaving',
    params: {
      serviceId: serviceId
    }
  }).then(json => {
    if (DEBUG) {
      console.log('Response: ', json);
    }
    closeLoading();

    let str = '';
    str += json.powersaving;
    $('#idPowerSavingStatus').val(str);
    PowerSaving = str;
  }).catch(e => {
    closeLoading();
    let str = '';
    str += 'Unknown';
    $('#idPowerSavingStatus').val(str);
    PowerSaving = str;
  });
}

/**
 * Power Saving On/Off.
 * @param {String} serviceId service ID
 * @param {String} isSwitch On / Off
 */
function doAirConditionerPowerSavingOnOff(serviceId, isSwitch) {
  closeLoading();
  showLoading();

  let successCallback = function(json) {
    if (DEBUG) {
      console.log('Response: ', json);
    }

    closeLoading();
    getAirConditionerPowerSavingStatus(serviceId);
  };

  let errorCallback = function(errorCode, errorMessage) {
    closeLoading();
    showError('PowerSavingOnOff Air Conditioner', errorCode, errorMessage);
    getAirConditionerPowerSavingStatus(serviceId);
  };

  sdk.put({
    profile: 'airconditioner',
    attribute: 'powersaving',
    params: {
      serviceId: serviceId,
      powersaving: isSwitch
    }
  }).then(json => {
    successCallback(json);
  }).catch(e => {
    errorCallback(e.errorCode, e.errorMessage);
  });
}

/**
 * Get Air Conditioner operation mode setting status.
 * @param {String} serviceId Service ID.
 */
function getAirConditionerModeSettingStatus(serviceId) {
  closeLoading();
  showLoading();

  sdk.get({
    profile: 'airconditioner',
    attribute: 'modesetting',
    params: {
      serviceId: serviceId
    }
  }).then(json => {
    if (DEBUG) {
      console.log('Response: ', json);
    }
    closeLoading();

    let str = '';
    str += json.modesetting;
    $('#idOperationModeStatus').val(str);
    OperationMode = str;
  }).catch(e => {
    closeLoading();
    let str = '';
    str += 'Unknown';
    $('#idOperationModeStatus').val(str);
    OperationMode = str;
  });
}

/**
 * Set Operation Mode Setting.
 * @param {String} serviceId service ID
 * @param {String} mode Operation Mode
 */
function doAirConditionerModeSetting(serviceId, mode) {
  closeLoading();
  showLoading();

  let successCallback = function(json) {
    if (DEBUG) {
      console.log('Response: ', json);
    }

    closeLoading();
    getAirConditionerModeSettingStatus(serviceId);
  };

  let errorCallback = function(errorCode, errorMessage) {
    closeLoading();
    showError('ModeSettingSet Air Conditioner', errorCode, errorMessage);
    getAirConditionerModeSettingStatus(serviceId);
  };

  sdk.put({
    profile: 'airconditioner',
    attribute: 'modesetting',
    params: {
      serviceId: serviceId,
      modesetting: mode
    }
  }).then(json => {
    successCallback(json);
  }).catch(e => {
    errorCallback(e.errorCode, e.errorMessage);
  });

}

/**
 * Get Air Conditioner room temperature status.
 * @param {String} serviceId Service ID.
 */
function getAirConditionerRoomTemperatureStatus(serviceId) {
  closeLoading();
  showLoading();

  sdk.get({
    profile: 'airconditioner',
    attribute: 'roomtemperature',
    params: {
      serviceId: serviceId
    }
  }).then(json => {
    if (DEBUG) {
      console.log('Response: ', json);
    }
    closeLoading();

    let str = '';
    str += json.roomtemperature;
    $('#idRoomTemperatureStatus').val(str);
    RoomTemperature = str;
  }).catch (e => {
    closeLoading();
    let str = '';
    str += 'Unknown';
    $('#idRoomTemperatureStatus').val(str);
    RoomTemperature = str;
  });
}

/**
 * Get Air Conditioner temperature value status.
 * @param {String} serviceId Service ID.
 */
function getAirConditionerTemperatureStatus(serviceId) {

  closeLoading();
  showLoading();

  sdk.get({
    profile: 'airconditioner',
    attribute: 'temperature',
    params: {
      serviceId: serviceId
    }
  }).then(json => {
    if (DEBUG) {
      console.log('Response: ', json);
    }
    closeLoading();

    let str = '';
    str += json.temperature;
    $('#idTemperatureStatus').val(str);
    $('#idTemperature').val(str);
    Temperature = str;
  }).catch(e => {
    closeLoading();
    let str = '';
    str += 'Unknown';
    $('#idTemperatureStatus').val(str);
    Temperature = str;
  });
}

/**
 * Set Temperature Value.
 * @param {String} serviceId service ID
 */
function doAirConditionerSetTemperatureValue(serviceId) {
  closeLoading();
  showLoading();

  let successCallback = function(json) {
    if (DEBUG) {
      console.log('Response: ', json);
    }

    closeLoading();
    getAirConditionerTemperatureStatus(serviceId);
  };

  let errorCallback = function(errorCode, errorMessage) {
    closeLoading();
    showError('TemperatureValueSet Air Conditioner', errorCode, errorMessage);
    getAirConditionerTemperatureStatus(serviceId);
  };

  sdk.put({
    profile: 'airconditioner',
    attribute: 'temperature',
    params: {
      serviceId: serviceId,
      temperature: Temperature
    }
  }).then(json => {
    successCallback(json);
  }).catch(e => {
    errorCallback(e.errorCode, e.errorMessage);
  });

}

/**
 * Get Air Conditioner air flow value status.
 * @param {String} serviceId Service ID.
 */
function getAirConditionerAirFlowStatus(serviceId) {

  closeLoading();
  showLoading();

  sdk.get({
    profile: 'airconditioner',
    attribute: 'airflow',
    params: {
      serviceId: serviceId
    }
  }).then(json => {
    if (DEBUG) {
      console.log('Response: ', json);
    }
    closeLoading();

    let str = '';
    str += (json.airflow) * 100;
    $('#idAirFlowStatus').val(str);
    $('#idAirFlow').val(str).slider('refresh');
    AirFlow = str;
    if (json.airflowauto === ("true")) {
      AirFlowAuto = true;
      document.AirConditionerForm.elements["idAirFlowAutoCheck"].checked = true;
      $('#idAirFlowStatus').val("Automatic");
    } else {
      AirFlowAuto = false;
      document.AirConditionerForm.elements["idAirFlowAutoCheck"].checked = false;
    }
  }).catch(e =>  {
    closeLoading();
    let str = '';
    str += 'Unknown';
    $('#idAirFlowStatus').val(str);
    AirFlow = str;
  });
}

/**
 * Set Air Flow Value.
 * @param {String} serviceId service ID
 */
function doAirConditionerSetAirFlow(serviceId) {

  let params = {
    profile: 'airconditioner',
    attribute: 'airflow',
    params: {
      serviceId: serviceId
    }
  };
  let AirFlow = Number($('#idAirFlow').val());
  console.log('AirFlow: ', AirFlow);

  if ($('#idAirFlowAutoCheck:checked').val()) {
    params.params.airflowauto = true;
  } else {
    params.params.airflowauto = false;
    if (AirFlow == 0) {
      params.params.airflow = 0;
    } else {
      params.params.airflow = AirFlow/100;
    }
  }

  closeLoading();
  showLoading();

  let successCallback = function(json) {
    if (DEBUG) {
      console.log('Response: ', json);
    }

    closeLoading();
    getAirConditionerAirFlowStatus(serviceId);
  };

  let errorCallback = function(errorCode, errorMessage) {
    closeLoading();
    showError('AirFlowValueSet Air Conditioner', errorCode, errorMessage);
    getAirConditionerAirFlowStatus(serviceId);
  };

  sdk.put(params)
  .then(json => {
    successCallback(json);
  }).catch(e => {
    errorCallback(e.errorCode, e.errorMessage);
  });

}

/**
 * Get Air Conditioner ECHONETLite Property.
 * @param {String} serviceId Service ID.
 * @param {String} epc Property number.
 */
function getAirConditionerECHONETLiteProperty(serviceId, epc) {
  closeLoading();
  showLoading();

  sdk.get({
    profile: 'airconditioner',
    attribute: 'enlproperty',
    params: {
      serviceId: serviceId,
      epc: epc
    }
  }).then(json => {
    if (DEBUG) {
      console.log('Response: ', json);
    }
    closeLoading();

    let str = '';
    for(let i=0; i<json.properties.length; i++) {
      if (i != 0) {
        str += ",";
      }
      str += '{\"' + json.properties[i].epc + '\",\"' + json.properties[i].value + '\"}';
    }
    $('#idGetEDT').val(str);
  }).catch(e => {
    closeLoading();
    let str = '';
    str += 'Unknown';
    $('#idGetEDT').val(str);
  });
}

/**
 * Set ECHONET Lite Property.
 * @param {String} serviceId service ID
 * @param {String} epc Property Number.
 * @param {String} value Property Value
 */
function doAirConditionerECHONETLitePropertySet(serviceId, epc, value) {

  closeLoading();
  showLoading();

  let successCallback = function(json) {
    if (DEBUG) {
      console.log('Response: ', json);
    }

    closeLoading();
    $('#idSetResult').val(json.result);
  };

  let errorCallback = function(errorCode, errorMessage) {
    closeLoading();
    showError('ECHONETLitePropertySet Air Conditioner', errorCode, errorMessage);
    $('#idSetResult').val(errorMessage);
  };

  sdk.put({
    profile: 'airconditioner',
    attribute: 'enlproperty',
    params: {
      serviceId: serviceId,
      epc: epc,
      value: value
    }
  }).then(json => {
    successCallback(json);
  }).catch(e => {
    errorCallback(e.errorCode, e.errorMessage);
  });
}

/* Show ECHONET Lite page */
function showENLControl(serviceId) {
  initAll();
  setTitle('ECHONET Lite Property Control');

  let btnStr = getBackButton('AirCoditioner Top', 'showAirConditioner', serviceId);
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  let str = '';
  str += '<form name="ECHONETLiteForm">';

  str += '<div>';
  str += '<label>Get ECHONET Lite Property:</label>';
  str += '<label for="idGetEPC">ECHONET Property (EPC):</label>';
  str += '<input type="text" id="idGetEPC" width="100%" value="" />';
  str += '<input type="button" name="getButton" id="getButton" value="Get"' +
           ' onclick="doGetENLEPC(\'' + serviceId + '\');"/>';
  str += '<label for="idGetEDT">ECHONET Property Data (EDT):</label>';
  str += '<input type="text" id="idGetEDT" width="100%" value="" readonly />';
  str += '</div>';
  str += '<br>';
  str += '<hr>';
  str += '<br>';
  str += '<div>';
  str += '<label>Set ECHONET Lite Property:</label>';
  str += '<label for="idSetEPC">ECHONET Property (EPC):</label>';
  str += '<input type="text" id="idSetEPC" width="100%" value="" />';
  str += '<label for="idSetEDT">ECHONET Property Data (EDT):</label>';
  str += '<input type="text" id="idSetEDT" width="100%" value="" />';
  str += '<input type="button" name="setButton" id="setButton" value="Set"' +
           ' onclick="doSetENLEPC(\'' + serviceId + '\');"/>';
  str += '<label for="idSetResult">Result:</label>';
  str += '<input type="text" id="idSetResult" width="100%" value="" readonly />';
  str += '</div>';

  str += '</form>';

  reloadList(str);
}

/**
 * Get ECHONET Lite value.
 * @param {String} serviceId service ID
 */
function doGetENLEPC(serviceId) {

  let epc = $('#idGetEPC').val();
      console.log('epc: ', epc);
  getAirConditionerECHONETLiteProperty(serviceId, epc);

}

/**
 * Set ECHONET Lite value.
 * @param {String} serviceId service ID
 */
function doSetENLEPC(serviceId) {

  let epc = $('#idSetEPC').val();
  let edt = $('#idSetEDT').val();
      console.log('epc: ', epc);
      console.log('edt: ', edt);
  doAirConditionerECHONETLitePropertySet(serviceId, epc, edt);

}
