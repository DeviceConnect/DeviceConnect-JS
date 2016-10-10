/**
 ecg.js
 Copyright (c) 2016 NTT DOCOMO,INC.
 Released under the MIT license
 http://opensource.org/licenses/mit-license.php
 */

/**
 * Show ECG Menu
 *
 * @param {String} serviceId サービスID
 */
function showECGProfile(serviceId) {
  initAll();
  setTitle('ECG Profile');

  var btnStr = getBackButton('Device Top', 'doECGBack', serviceId, '');
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  var str = '';
  str += '<li><a href="javascript:showECG(\'' +
          serviceId + '\');">ECG</a></li>';
  reloadList(str);
}

function showECG(serviceId) {
  initAll();
  setTitle('ECG');

  var btnStr = getBackButton('ECG Top', 'doECGAllBack', serviceId, '');
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  closeLoading();

  var str = '';
  str += '<input data-role="button" type="button" name="button"' +
        ' id="button" value="Get ECG"' +
        ' onclick="javascript:doGetECG(\'' +
        serviceId + '\');"/><br>';
  str += '<div>';
  str += '<label for="interval">interval</label>';
  str += '<input type="text" id="interval" size="10" maxlength="10">';
  str += '</div>';
  str += '<input data-role="button" type="button" name="button"' +
        ' id="button" value="Register Event"' +
        ' onclick="javascript:doRegisterECG(\'' +
        serviceId + '\');"/><br>';
  str += '<input data-role="button" type="button" name="button"' +
        ' id="button" value="Unregister Event"' +
        ' onclick="javascript:unregisterECG(\'' +
        serviceId + '\');"/><br>';
  str += '<hr>';
  str += '<h2>ECG</h2>';
  str += makeInputText('Value', 'ecgValue', 'ecgValue');
  str += makeInputText('MDERFloat', 'ecgMDERFloat', 'ecgMDERFloat');
  str += makeInputText('Type', 'ecgType', 'ecgType');
  str += makeInputText('TypeCode', 'ecgTypeCode', 'ecgTypeCode');
  str += makeInputText('Unit', 'ecgUnit', 'ecgUnit');
  str += makeInputText('UnitCode', 'ecgUnitCode', 'ecgUnitCode');
  str += makeInputText('TimeStamp', 'ecgTimeStamp', 'ecgTimeStamp');
  str += makeInputText('TimeStampString', 'ecgTimeStampString', 'ecgTimeStampString');

  reloadContent(str);
}

function doGetECG(serviceId) {
  var builder = new dConnect.URIBuilder();
  builder.setProfile('ecg');
  builder.setAttribute('onECG');
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
    showResponseECG(json);
  }, function(errorCode, errorMessage) {
    closeLoading();
    alert("errorCode=" + errorCode + ", errorMessage=" + errorMessage);
  });
}

function doRegisterECG(serviceId) {
  var intervalParam = $('#interval').val();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('ecg');
  builder.setAttribute('onECG');
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
    showResponseECG(json);
  }, function() {
    if (DEBUG) {
      console.log('Success to add event listener.');
    }
  }, function(errorCode, errorMessage) {
    alert("errorCode=" + errorCode + ", errorMessage=" + errorMessage);
  });
}

function unregisterECG(serviceId) {
  var builder = new dConnect.URIBuilder();
  builder.setProfile('ecg');
  builder.setAttribute('onECG');
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

function doECGBack(serviceId) {
  searchDevice(serviceId);
}

function doECGAllBack(serviceId, sessionKey) {
  showECGProfile(serviceId);
}


function showResponseECG(json) {
  // ECG
  if (json.ecg) {
    $('#ecgValue').val(json.ecg.value);
    $('#ecgMDERFloat').val(json.ecg.mderFloat);
    $('#ecgType').val(json.ecg.type);
    $('#ecgTypeCode').val(json.ecg.typeCode);
    $('#ecgUnit').val(json.ecg.unit);
    $('#ecgUnitCode').val(json.ecg.unitCode);
    $('#ecgTimeStamp').val(json.ecg.timeStamp);
    $('#ecgTimeStampString').val(json.ecg.timeStampString);
  }
}