/**
 deviceorientation.js
 Copyright (c) 2020 NTT DOCOMO,INC.
 Released under the MIT license
 http://opensource.org/licenses/mit-license.php
 */

/**
 * DeviceOrientation
 */
function showDeviceOrientation(serviceId) {
  initAll();
  setTitle('DeviceOrientation Profile(Event)');

  let btnStr = getBackButton('Device Top', 'doOrientationBack',
      serviceId);
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  let str = '';
  str += '<div>';
  str += '  <input data-icon=\"search\" onclick=\"doDeviceOrientationGet(\'' +
          serviceId + '\')\" type=\"button\" value=\"Get\" />';
  str += '</div>';
  str += '<div>';
  str += '<label for="interval">interval</label>';
  str += '<input type="text" id="set_interval" size="10" maxlength="10">';
  str += '</div>';

  str += '<fieldset class=\"ui-grid-a\">';
  str += '  <div class=\"ui-block-a\">';
  str += '    <input data-icon=\"search\" ' +
          'onclick=\"doDeviceOrientationRegist(\'' +
          serviceId + '\')\"' +
          ' type=\"button\" value=\"Register\" />';
  str += '  </div>';
  str += '  <div class=\"ui-block-b\">';
  str += '    <input data-icon=\"search\"' +
          ' onclick=\"doDeviceOrientationUnregister(\'' +
          serviceId + '\')\" type=\"button\" value=\"Unregister\" />';
  str += '  </div>';
  str += '</fieldset>';

  str += '<form  name="deviceOrientationForm">';
  str += 'Accelerometer<br>';
  str += '<input type="text" id="accelX" width="100%">';
  str += '<input type="text" id="accelY" width="100%">';
  str += '<input type="text" id="accelZ" width="100%">';
  str += 'Accelerometer (Gravity)<br>';
  str += '<input type="text" id="accelXG" width="100%">';
  str += '<input type="text" id="accelYG" width="100%">';
  str += '<input type="text" id="accelZG" width="100%">';
  str += 'Rotation<br>';
  str += '<input type="text" id="rotationAlpha" width="100%">';
  str += '<input type="text" id="rotationBeta" width="100%">';
  str += '<input type="text" id="rotationGamma" width="100%">';
  str += 'Interval<br>';
  str += '<input type="text" id="interval" width="100%">';
  str += '</form>';
  reloadContent(str);
}

/**
 * Backボタン
 *
 * serviceId サービスID
 */
function doOrientationBack(serviceId) {
  doDeviceOrientationUnregister(serviceId);
  searchSystem(serviceId);
}

function setDeviceOrientation(json) {
  if (json.orientation.acceleration) {
    $('#accelX').val('x: ' + json.orientation.acceleration.x);
    $('#accelY').val('y: ' + json.orientation.acceleration.y);
    $('#accelZ').val('z: ' + json.orientation.acceleration.z);
  }

  if (json.orientation.accelerationIncludingGravity) {
    $('#accelXG').val('x: ' + json.orientation.accelerationIncludingGravity.x);
    $('#accelYG').val('y: ' + json.orientation.accelerationIncludingGravity.y);
    $('#accelZG').val('z: ' + json.orientation.accelerationIncludingGravity.z);
  }

  if (json.orientation.rotationRate) {
    $('#rotationBeta').val('β: ' + json.orientation.rotationRate.beta);
    $('#rotationGamma').val('γ: ' + json.orientation.rotationRate.gamma);
    $('#rotationAlpha').val('α: ' + json.orientation.rotationRate.alpha);
  }

  if (json.orientation.interval) {
    $('#interval').val(json.orientation.interval);
  }
}

function doDeviceOrientationGet(serviceId) {
  sdk.get({
    profile: 'deviceorientation',
    attribute: 'ondeviceorientation',
    params: {
      serviceId: serviceId
    }
  }).then(json => {
    if (json.orientation) {
      setDeviceOrientation(json);
    }
  }).catch(e => {
    alert('errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
  });
}

/**
 * DeviceOrientation Event
 */
function doDeviceOrientationRegist(serviceId, sessionKey) {
  let intervalParam = $('#set_interval').val();
  let params = {
    profile: 'deviceorientation',
    attribute: 'ondeviceorientation',
    params: {
      serviceId: serviceId
    }
  };
  if (intervalParam !== '') {
    params['interval'] = intervalParam;
  }

  sdk.addEventListener(params, (message) => {
    // イベントメッセージが送られてくる
    if (DEBUG) {
      console.log('Event-Message:' + message)
    }

    let json = JSON.parse(message);
    if (json.orientation) {
      setDeviceOrientation(json);
    }
  }).then(json ={
    if (DEBUG) {
      console.log('Successed register Device Orientation.');
    }
  }).catch(e => {
    alert('errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
  });
}

/**
 * DeviceOrientation
 */
function doDeviceOrientationUnregister(serviceId, sessionKey) {
  sdk.removeEventListener({
    profile: 'deviceorientation',
    attribute: 'ondeviceorientation',
    params: {
      serviceId: serviceId
    }
  }).then(json => {
    if (DEBUG) {
      console.log('Successed unregister Device Orientation.');
    }
  }).catch(e => {
    alert(e.errorMessage);
  });
}
