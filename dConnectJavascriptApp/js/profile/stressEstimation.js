/**
 stressEstimation.js
 Copyright (c) 2016 NTT DOCOMO,INC.
 Released under the MIT license
 http://opensource.org/licenses/mit-license.php
 */

/**
 * Show StressEstimation Menu
 *
 * @param {String} serviceId サービスID
 */
function showStressEstimationProfile(serviceId) {
  initAll();
  setTitle('StressEstimation Profile');

  var btnStr = getBackButton('Device Top', 'doStressEstimationBack', serviceId, '');
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  var str = '';
  str += '<li><a href="javascript:showStressEstimation(\'' +
          serviceId + '\');">StressEstimation</a></li>';
  reloadList(str);
}

function showStressEstimation(serviceId) {
  initAll();
  setTitle('StressEstimation');

  var btnStr = getBackButton('StressEstimation Top', 'doStressEstimationAllBack', serviceId, '');
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  closeLoading();

  var str = '';
  str += '<input data-role="button" type="button" name="button"' +
        ' id="button" value="Get StressEstimation"' +
        ' onclick="javascript:doGetStressEstimation(\'' +
        serviceId + '\');"/><br>';
  str += '<div>';
  str += '<label for="interval">interval</label>';
  str += '<input type="text" id="interval" size="10" maxlength="10">';
  str += '</div>';
  str += '<input data-role="button" type="button" name="button"' +
        ' id="button" value="Register Event"' +
        ' onclick="javascript:doRegisterStressEstimation(\'' +
        serviceId + '\');"/><br>';
  str += '<input data-role="button" type="button" name="button"' +
        ' id="button" value="Unregister Event"' +
        ' onclick="javascript:unregisterStressEstimation(\'' +
        serviceId + '\');"/><br>';
  str += '<hr>';
  str += '<h2>StressEstimation</h2>';
  str += makeInputText('LFHF', 'stressEstimationLFHF', 'stressEstimationLFHF');
  str += makeInputText('TimeStamp', 'stressEstimationTimeStamp', 'stressEstimationTimeStamp');
  str += makeInputText('TimeStampString', 'stressEstimationTimeStampString', 'stressEstimationTimeStampString');

  reloadContent(str);
}

function doGetStressEstimation(serviceId) {
  var builder = new dConnect.URIBuilder();
  builder.setProfile('stressEstimation');
  builder.setAttribute('onStressEstimation');
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
    showResponseStress(json);
  }, function(errorCode, errorMessage) {
    closeLoading();
    alert("errorCode=" + errorCode + ", errorMessage=" + errorMessage);
  });
}

function doRegisterStressEstimation(serviceId) {
  var intervalParam = $('#interval').val();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('stressEstimation');
  builder.setAttribute('onStressEstimation');
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
    showResponseStress(json);
  }, function() {
    if (DEBUG) {
      console.log('Success to add event listener.');
    }
  }, function(errorCode, errorMessage) {
    alert("errorCode=" + errorCode + ", errorMessage=" + errorMessage);
  });
}

function unregisterStressEstimation(serviceId) {
  var builder = new dConnect.URIBuilder();
  builder.setProfile('stressEstimation');
  builder.setAttribute('onStressEstimation');
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

function doStressEstimationBack(serviceId) {
  searchDevice(serviceId);
}

function doStressEstimationAllBack(serviceId, sessionKey) {
  showStressEstimationProfile(serviceId);
}


function showResponseStress(json) {
  // StressEstimation
  if (json.stress) {
    $('#stressEstimationLFHF').val(json.stress.lfhf);
    $('#stressEstimationTimeStamp').val(json.stress.timeStamp);
    $('#stressEstimationTimeStampString').val(json.stress.timeStampString);
  }
}