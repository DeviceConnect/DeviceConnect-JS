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
  str += makeInputText('HeartRate', 'heartRate', 'HeartRate');
  str += '<input data-role="button" type="button" name="button"' +
        ' id="button" value="Get Heart Rate"' +
        ' onclick="javascript:doGetHeartRate(\'' +
        serviceId + '\');"/><br>';
  str += '<input data-role="button" type="button" name="button"' +
        ' id="button" value="Register Event"' +
        ' onclick="javascript:doRegisterHeartRate(\'' +
        serviceId + '\');"/><br>';
  str += '<input data-role="button" type="button" name="button"' +
        ' id="button" value="Unregister Event"' +
        ' onclick="javascript:unregisterHeartRate(\'' +
        serviceId + '\');"/><br>';

  reloadContent(str);
}

function doGetHeartRate(serviceId) {
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

function doRegisterHeartRate(serviceId) {
  var builder = new dConnect.URIBuilder();
  builder.setProfile('health');
  builder.setAttribute('heartrate');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.setSessionKey(currentClientId);

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

function unregisterHeartRate(serviceId) {
  var builder = new dConnect.URIBuilder();
  builder.setProfile('health');
  builder.setAttribute('heartrate');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.setSessionKey(currentClientId);

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

function doHealthBack(serviceId) {
  searchDevice(serviceId);
}

function doHealthAllBack(serviceId, sessionKey) {
  showHealth(serviceId);
}
