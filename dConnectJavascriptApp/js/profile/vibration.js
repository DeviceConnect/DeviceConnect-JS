/**
 vibration.js
 Copyright (c) 2014 NTT DOCOMO,INC.
 Released under the MIT license
 http://opensource.org/licenses/mit-license.php
 */

/**
 * Vibration Menu
 * @param {String} serviceId サービスID
 */
function showVibration(serviceId) {

  initAll();

  setTitle('Vibration Profile(Vibrate)');

  var btnStr = '';
  btnStr += getBackButton('Device Top', 'doVibrationBack', serviceId, '');
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  var str = '';
  str += '<form name="vibrationForm">';
  str += '<SELECT name="pattern" id="pattern">';
  str += '<OPTION value="null_value">指定なし</OPTION>';
  str += '<OPTION value="100,100,100,100">100,100,100,100</OPTION>';
  str += '<OPTION value="1000">1000</OPTION>';
  str += '<OPTION value="2000,1000,2000">2000,1000,2000</OPTION>';
  str += '<OPTION value="100,5000,100,5000">100,5000,100,5000</OPTION>';
  str += '</SELECT>';
  str += '</form>';
  str += '<input data-role="button" type="button" name="button"' +
        ' id="button" value="Vibrate"' +
        ' onclick="javascript:doVibrateVibration(\'' +
        serviceId + '\');"/><br>';

  str += '<input data-role="button" type="button" name="button"' +
        ' id="button" value="Stop Vibrate"' +
        ' onclick="javascript:doStopVibration(\'' +
        serviceId + '\');"/><br>';

  reloadContent(str);
}

/**
 * Back Button
 *
 * @param {String} serviceId サービスID
 * @param {String} sessionKey セッションキー
 */
function doVibrationBack(serviceId, sessionKey) {
  searchSystem(serviceId);
}

/**
 * Vibrationを実行
 *
 * @param {String} serviceId サービスID
 */
function doVibrateVibration(serviceId) {

  var patternValue = $('#pattern').val();
  if (patternValue == 'null_value') {
    patternValue = null;
  }

  var builder = new dConnect.URIBuilder();
  builder.setProfile('vibration');
  builder.setAttribute('vibrate');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  if (patternValue) {
    builder.addParameter('pattern', patternValue);
  }
  var uri = builder.build();

  if (DEBUG) {
    console.log('Uri:' + uri);
  }

  dConnect.put(uri, null, null, function(json) {
    if (DEBUG) {
      console.log('Response: ', json);
    }
  }, function(errorCode, errorMessage) {
    showError('PUT vibration/vibrate', errorCode, errorMessage);
  });
}

/**
 * Vibrationをキャンセル
 *
 * @param {String} serviceId サービスID
 */
function doStopVibration(serviceId) {
  var builder = new dConnect.URIBuilder();
  builder.setProfile('vibration');
  builder.setAttribute('vibrate');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  var uri = builder.build();

  if (DEBUG) {
    console.log('Uri:' + uri);
  }

  dConnect.delete(uri, null, function(json) {
    if (DEBUG) {
      console.log('Response: ', json);
    }
  }, function(errorCode, errorMessage) {
    showError('DELETE vibration/vibrate', errorCode, errorMessage);
  });
}
