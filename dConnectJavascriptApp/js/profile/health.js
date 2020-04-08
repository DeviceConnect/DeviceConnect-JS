/**
 health.js
 Copyright (c) 2020 NTT DOCOMO,INC.
 Released under the MIT license
 http://opensource.org/licenses/mit-license.php
 */

/**
 * Show Health Menu
 *
 * @param {String} serviceId サービスID
 */
function showHealth(serviceId) {
  initAll();
  setTitle('Health Profile');

  let btnStr = getBackButton('Device Top', 'doHealthBack', serviceId);
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  let str = '';
  str += '<li><a href="javascript:showHeartRate(\'' +
          serviceId + '\');">Heart Rate</a></li>';
  reloadList(str);
}

function showHeartRate(serviceId) {
  initAll();
  setTitle('Heart Rate');

  let btnStr = getBackButton('Health Top', 'doHealthAllBack', serviceId);
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  closeLoading();

  let str = '';
  str += "<h2>HeartRate /health/heartrate</h2>"
  str += makeInputText('HeartRate', 'heartRate', 'HeartRate');
  str += '<input data-role="button" type="button" name="button"' +
    ' id="button" value="Get Heart Rate"' +
    ' onclick="javascript:doGetHeartRateOld(\'' +
    serviceId + '\');"/><br>';
  str += '<input data-role="button" type="button" name="button"' +
    ' id="button" value="Register Event"' +
    ' onclick="javascript:doRegisterHeartRateOld(\'' +
    serviceId + '\');"/><br>';
  str += '<input data-role="button" type="button" name="button"' +
    ' id="button" value="Unregister Event"' +
    ' onclick="javascript:unregisterHeartRateOld(\'' +
    serviceId + '\');"/><br>';
  str += '<hr>';
  str += "<h2>HeartRate /health/heart</h2>"
  str += '<input data-role="button" type="button" name="button"' +
        ' id="button" value="Get Heart Rate"' +
        ' onclick="javascript:doGetHeartrateDefault(\'' +
        serviceId + '\');"/><br>';
  str += '<div>';
  str += '<label for="interval">interval</label>';
  str += '<input type="text" id="interval" size="10" maxlength="10">';
  str += '</div>';
  str += '<input data-role="button" type="button" name="button"' +
        ' id="button" value="Register Event"' +
        ' onclick="javascript:doRegisterHeartrateDefault(\'' +
        serviceId + '\');"/><br>';
  str += '<input data-role="button" type="button" name="button"' +
        ' id="button" value="Unregister Event"' +
        ' onclick="javascript:doUnregisterHeartrateDefault(\'' +
        serviceId + '\');"/><br>';
  str += '<hr>';
  str += "<h2>HeartRate /health/onHeart</h2>"
  str += '<input data-role="button" type="button" name="button"' +
        ' id="button" value="Get onHeart Rate"' +
        ' onclick="javascript:doGetHeartrateOnHeart(\'' +
        serviceId + '\');"/><br>';
  str += '<div>';
  str += '<label for="interval">interval</label>';
  str += '<input type="text" id="onInterval" size="10" maxlength="10">';
  str += '</div>';
  str += '<input data-role="button" type="button" name="button"' +
        ' id="button" value="Register Event"' +
        ' onclick="javascript:doRegisterHeartrateOnHeart(\'' +
        serviceId + '\');"/><br>';
  str += '<input data-role="button" type="button" name="button"' +
        ' id="button" value="Unregister Event"' +
        ' onclick="javascript:doUnregisterHeartrateOnHeart(\'' +
        serviceId + '\');"/><br>';
  str += '<hr>';
  str += '<h2>Heart Rate</h2>';
  str += makeInputText('Value', 'rateValue', 'rateValue');
  str += makeInputText('MDERFloat', 'rateMDERFloat', 'rateMDERFloat');
  str += makeInputText('Type', 'rateType', 'rateType');
  str += makeInputText('TypeCode', 'rateTypeCode', 'rateTypeCode');
  str += makeInputText('Unit', 'rateUnit', 'rateUnit');
  str += makeInputText('UnitCode', 'rateUnitCode', 'rateUnitCode');
  str += makeInputText('TimeStamp', 'rateTimeStamp', 'rateTimeStamp');
  str += makeInputText('TimeStampString', 'rateTimeStampString', 'rateTimeStampString');
  str += '<hr>';
  str += '<h2>RRInterval</h2>';
  str += makeInputText('Value', 'rriValue', 'rriValue');
  str += makeInputText('MDERFloat', 'rriMDERFloat', 'rriMDERFloat');
  str += makeInputText('Type', 'rriType', 'rriType');
  str += makeInputText('TypeCode', 'rriTypeCode', 'rriTypeCode');
  str += makeInputText('Unit', 'rriUnit', 'rriUnit');
  str += makeInputText('UnitCode', 'rriUnitCode', 'rriUnitCode');
  str += makeInputText('TimeStamp', 'rriTimeStamp', 'rriTimeStamp');
  str += makeInputText('TimeStampString', 'rriTimeStampString', 'rriTimeStampString');
  str += '<hr>';
  str += '<h2>EnergyExtended</h2>';
  str += makeInputText('Value', 'energyValue', 'energyValue');
  str += makeInputText('MDERFloat', 'energyMDERFloat', 'energyMDERFloat');
  str += makeInputText('Type', 'energyType', 'energyType');
  str += makeInputText('TypeCode', 'energyTypeCode', 'energyTypeCode');
  str += makeInputText('Unit', 'energyUnit', 'energyUnit');
  str += makeInputText('UnitCode', 'energyUnitCode', 'energyUnitCode');
  str += makeInputText('TimeStamp', 'energyTimeStamp', 'energyTimeStamp');
  str += makeInputText('TimeStampString', 'energyTimeStampString', 'energyTimeStampString');
  str += '<hr>';
  str += '<h2>Device Info</h2>';
  str += makeInputText('ProductName', 'productName', 'productName');
  str += makeInputText('ManufacturerName', 'manufacturerName', 'manufacturerName');
  str += makeInputText('ModelNumber', 'modelNumber', 'modelNumber');
  str += makeInputText('FirmwareRevision', 'firmwareRevision', 'firmwareRevision');
  str += makeInputText('SerialNumber', 'serialNumber', 'serialNumber');
  str += makeInputText('SoftwareRevision', 'softwareRevision', 'softwareRevision');
  str += makeInputText('HardwareRevision', 'hardwareRevision', 'hardwareRevision');
  str += makeInputText('PardNumber', 'partNumber', 'partNumber');
  str += makeInputText('ProtocolRevision', 'protocolRevision', 'protocolRevision');
  str += makeInputText('SystemId', 'systemId', 'systemId');
  str += makeInputText('BatteryLevel', 'batteryLevel', 'batteryLevel');

  reloadContent(str);
}

function doGetHeartrateDefault(serviceId) {
  doGetHeartRate(serviceId, 'heart');
}

function doRegisterHeartrateDefault(serviceId) {
  doRegisterHeartRate(serviceId, 'heart');
}

function doUnregisterHeartrateDefault(serviceId) {
  unregisterHeartRate(serviceId, 'heart');
}

function doGetHeartrateOnHeart(serviceId) {
  doGetHeartRate(serviceId, 'onheart');
}

function doRegisterHeartrateOnHeart(serviceId) {
  doRegisterHeartRate(serviceId, 'onheart');
}

function doUnregisterHeartrateOnHeart(serviceId) {
  unregisterHeartRate(serviceId, 'onheart');
}



function doGetHeartRate(serviceId, attribute) {
  closeLoading();
  showLoading();

  sdk.get({
    profile: 'health',
    attribute: attribute,
    params: {
      serviceId: serviceId
    }
  }).then(json => {
    closeLoading();
    showResponseHealth(json);
  }).catch(e => {
    closeLoading();
    alert("errorCode=" + e.errorCode + ", errorMessage=" + e.errorMessage);
  });
}

function doRegisterHeartRate(serviceId, attribute) {
  let intervalParam = $('#interval').val();
  if (attribute == 'onheart') {
    intervalParam = $('#onInterval').val();
  } else {
    intervalParam = $('#interval').val();
  }

  let params = {
    profile: 'health',
    attribute: attribute,
    params: {
      serviceId: serviceId
    }
  };
  if (intervalParam !== '') {
    params['interval'] = intervalParam;
  }

  sdk.addEventListener(params, message => {
    if (DEBUG) {
      console.log('Event-Message: ' + message);
    }
    let json = JSON.parse(message);
    showResponseHealth(json);
  }).then(json => {
    if (DEBUG) {
      console.log('Success to add event listener.');
    }
  }).catch(e => {
    alert("errorCode=" + e.errorCode + ", errorMessage=" + e.errorMessage);
  });
}

function unregisterHeartRate(serviceId, attribute) {

  sdk.removeEventListener({
    profile: 'health',
    attribute: attribute,
    params: {
      serviceId: serviceId
    }
  }).then(json => {
    if (DEBUG) {
      console.log('Success to remove event listener.');
    }
  }).catch(e => {
    alert("errorCode=" + e.errorCode + ", errorMessage=" + e.errorMessage);
  });
}

function doHealthBack(serviceId) {
  searchDevice(serviceId);
}

function doHealthAllBack(serviceId, sessionKey) {
  showHealth(serviceId);
}


function showResponseHealth(json) {
  // HeartRate
  if (json.heart.rate) {
    $('#rateValue').val(json.heart.rate.value);
    $('#rateMDERFloat').val(json.heart.rate.mderFloat);
    $('#rateType').val(json.heart.rate.type);
    $('#rateTypeCode').val(json.heart.rate.typeCode);
    $('#rateUnit').val(json.heart.rate.unit);
    $('#rateUnitCode').val(json.heart.rate.unitCode);
    $('#rateTimeStamp').val(json.heart.rate.timeStamp);
    $('#rateTimeStampString').val(json.heart.rate.timeStampString);
  }
  // RRI
  if (json.heart.rr) {
    $('#rriValue').val(json.heart.rr.value);
    $('#rriMDERFloat').val(json.heart.rr.mderFloat);
    $('#rriType').val(json.heart.rr.type);
    $('#rriTypeCode').val(json.heart.rr.typeCode);
    $('#rriUnit').val(json.heart.rr.unit);
    $('#rriUnitCode').val(json.heart.rr.unitCode);
    $('#rriTimeStamp').val(json.heart.rr.timeStamp);
    $('#rriTimeStampString').val(json.heart.rr.timeStampString);
  }
  // Energy Extended
  if (json.heart.energy) {
    $('#energyValue').val(json.heart.energy.value);
    $('#energyMDERFloat').val(json.heart.energy.mderFloat);
    $('#energyType').val(json.heart.energy.type);
    $('#energyTypeCode').val(json.heart.energy.typeCode);
    $('#energyUnit').val(json.heart.energy.unit);
    $('#energyUnitCode').val(json.heart.energy.unitCode);
    $('#energyTimeStamp').val(json.heart.energy.timeStamp);
    $('#energyTimeStampString').val(json.heart.energy.timeStampString);
  }
  // Device
  if (json.heart.device) {

    $('#productName').val(json.heart.device.productName);
    $('#manufacturerName').val(json.heart.device.manufacturerName);
    $('#modelNumber').val(json.heart.device.modelNumber);
    $('#firmwareRevision').val(json.heart.device.firmwareRevision);
    $('#serialNumber').val(json.heart.device.serialNumber);
    $('#softwareRevision').val(json.heart.device.softwareRevision);
    $('#hardwareRevision').val(json.heart.device.hardwareRevision);
    $('#partNumber').val(json.heart.device.partNumber);
    $('#protocolRevision').val(json.heart.device.protocolRevision);
    $('#systemId').val(json.heart.device.systemId);
    $('#batteryLevel').val(json.heart.device.batteryLevel);
  }

}

function doGetHeartRateOld(serviceId) {
  closeLoading();
  showLoading();

  sdk.get({
    profile: 'health',
    attribute: 'heartrate',
    params: {
      serviceId: serviceId
    }
  }).then(json => {
    closeLoading();
    $('#heartRate').val(json.heartRate);
  }).catch(e => {
    closeLoading();
    alert("errorCode=" + e.errorCode + ", errorMessage=" + e.errorMessage);
  });
}

function doRegisterHeartRateOld(serviceId) {
  sdk.addEventListener({
    profile: 'health',
    attribute: 'heartrate',
    params: {
      serviceId: serviceId
    }
  }, message => {
    if (DEBUG) {
      console.log('Event-Message: ' + message);
    }

    let json = JSON.parse(message);
    $('#heartRate').val(json.heartRate);
  }).then(json => {
    if (DEBUG) {
      console.log('Success to add event listener.');
    }
  }).catch( e => {
    alert("errorCode=" + e.errorCode + ", errorMessage=" + e.errorMessage);
  });
}

function unregisterHeartRateOld(serviceId) {

  sdk.removeEventListener({
    profile: 'health',
    attribute: 'heartrate',
    params: {
      serviceId: serviceId
    }
  }).then(json => {
    if (DEBUG) {
      console.log('Success to add event listener.');
    }
  }).catch(e => {
    alert("errorCode=" + e.errorCode + ", errorMessage=" + e.errorMessage);
  });
}
