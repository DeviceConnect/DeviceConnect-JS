/**
 vibration.js
 Copyright (c) 2020 NTT DOCOMO,INC.
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

  let btnStr = '';
  btnStr += getBackButton('Device Top', 'searchSystem', serviceId);
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  let str = '';
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
 * Vibrationを実行
 *
 * @param {String} serviceId サービスID
 */
function doVibrateVibration(serviceId) {

  let patternValue = $('#pattern').val();
  if (patternValue == 'null_value') {
    patternValue = null;
  }
  let params = {
    profile: 'vibration',
    attribute: 'vibrate',
    params: {
      serviceId: serviceId
    }
  };
  if (patternValue) {
    params.params['pattern'] = patternValue;
  }
  sdk.put(params).then(json => {
    if (DEBUG) {
      console.log('Response: ', json);
    }
  }).catch(e => {
    showError('PUT vibration/vibrate', e.errorCode, e.errorMessage);
  });
}

/**
 * Vibrationをキャンセル
 *
 * @param {String} serviceId サービスID
 */
function doStopVibration(serviceId) {
  sdk.delete({
    profile: 'vibration',
    attribute: 'vibrate',
    params: {
      serviceId: serviceId
    }
  }).thne(json => {
    if (DEBUG) {
      console.log('Response: ', json);
    }
  }).catch(e => {
    showError('DELETE vibration/vibrate', e.errorCode, e.errorMessage);
  });
}
