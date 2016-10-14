/**
 health.js
 Copyright (c) 2014 NTT DOCOMO,INC.
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

  var btnStr = getBackButton('Device Top', 'doHealthBack', serviceId, '');
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  var str = '';
  str += '<li><a href="javascript:showHeartRate(\'' +
          serviceId + '\');">Heart Rate</a></li>';
  reloadList(str);
}

function showHeartRate(serviceId) {
  initAll();
  setTitle('Heart Rate');

  var btnStr = getBackButton('Health Top', 'doHealthAllBack', serviceId, '');
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  closeLoading();

  var str = '';
  str += "<h2>HeartRate Old</h2>"
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
  str += "<h2>HeartRate New</h2>"
  str += '<input data-role="button" type="button" name="button"' +
        ' id="button" value="Get Heart Rate"' +
        ' onclick="javascript:doGetHeartRate(\'' +
        serviceId + '\');"/><br>';
  str += '<div>';
  str += '<label for="interval">interval</label>';
  str += '<input type="text" id="interval" size="10" maxlength="10">';
  str += '</div>';
  str += '<input data-role="button" type="button" name="button"' +
        ' id="button" value="Register Event"' +
        ' onclick="javascript:doRegisterHeartRate(\'' +
        serviceId + '\');"/><br>';
  str += '<input data-role="button" type="button" name="button"' +
        ' id="button" value="Unregister Event"' +
        ' onclick="javascript:unregisterHeartRate(\'' +
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

function doGetHeartRate(serviceId) {
  var builder = new dConnect.URIBuilder();
  builder.setProfile('health');
  builder.setAttribute('heart');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);

  var uri = builder.build();
  if (DEBUG) {
    console.log('Uri: ' + uri);
  }

  closeLoading();
  showLoading();

  dConnect.get(uri, null, function(json) {
    closeLoading();
    showResponseHealth(json);
  }, function(errorCode, errorMessage) {
    closeLoading();
    alert("errorCode=" + errorCode + ", errorMessage=" + errorMessage);
  });
}

function doRegisterHeartRate(serviceId) {
  var intervalParam = $('#interval').val();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('health');
  builder.setAttribute('heart');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  if (intervalParam !== '') {
    builder.addParameter('interval', intervalParam);
  }
  
  var uri = builder.build();
  if (DEBUG) {
    console.log('Uri: ' + uri);
  }

  dConnect.addEventListener(uri, function(message) {
    if (DEBUG) {
      console.log('Event-Message: ' + message);
    }
    var json = JSON.parse(message);
    showResponseHealth(json);
  }, function() {
    if (DEBUG) {
      console.log('Success to add event listener.');
    }
  }, function(errorCode, errorMessage) {
    alert("errorCode=" + errorCode + ", errorMessage=" + errorMessage);
  });
}

function unregisterHeartRate(serviceId) {
  var builder = new dConnect.URIBuilder();
  builder.setProfile('health');
  builder.setAttribute('heart');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);

  var uri = builder.build();
  if (DEBUG) {
    console.log('Uri: ' + uri);
  }

  dConnect.removeEventListener(uri, function() {
    if (DEBUG) {
      console.log('Success to remove event listener.');
    }
  }, function(errorCode, errorMessage) {
    alert("errorCode=" + errorCode + ", errorMessage=" + errorMessage);
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
  var builder = new dConnect.URIBuilder();
  builder.setProfile('health');
  builder.setAttribute('heartrate');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);

  var uri = builder.build();
  if (DEBUG) {
    console.log('Uri: ' + uri);
  }

  closeLoading();
  showLoading();

  dConnect.get(uri, null, function(json) {
    closeLoading();
    $('#heartRate').val(json.heartRate);
  }, function(errorCode, errorMessage) {
    closeLoading();
    alert("errorCode=" + errorCode + ", errorMessage=" + errorMessage);
  });
}

function doRegisterHeartRateOld(serviceId) {
  var builder = new dConnect.URIBuilder();
  builder.setProfile('health');
  builder.setAttribute('heartrate');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);

  var uri = builder.build();
  if (DEBUG) {
    console.log('Uri: ' + uri);
  }

  dConnect.addEventListener(uri, function(message) {
    if (DEBUG) {
      console.log('Event-Message: ' + message);
    }

    var json = JSON.parse(message);
    $('#heartRate').val(json.heartRate);
  }, function() {
    if (DEBUG) {
      console.log('Success to add event listener.');
    }
  }, function(errorCode, errorMessage) {
    alert("errorCode=" + errorCode + ", errorMessage=" + errorMessage);
  });
}

function unregisterHeartRateOld(serviceId) {
  var builder = new dConnect.URIBuilder();
  builder.setProfile('health');
  builder.setAttribute('heartrate');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);

  var uri = builder.build();
  if (DEBUG) {
    console.log('Uri: ' + uri);
  }

  dConnect.removeEventListener(uri, function() {
    if (DEBUG) {
      console.log('Success to add event listener.');
    }
  }, function(errorCode, errorMessage) {
    alert("errorCode=" + errorCode + ", errorMessage=" + errorMessage);
  });
}