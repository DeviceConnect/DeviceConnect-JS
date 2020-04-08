/**
 drivecontroller.js
 Copyright (c) 2020 NTT DOCOMO,INC.
 Released under the MIT license
 http://opensource.org/licenses/mit-license.php
 */

/**
 * Drive Controllerのメニューを表示
 *
 * @param {String} serviceId サービスID
 */
function showDriveController(serviceId) {

  initAll();
  setTitle('Drive Controller Profile');

  let btnStr = '';
  btnStr += getBackButton('Device Top', 'searchSystem', serviceId);
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  let str = '';
  str += '<center>';
  str += '<form name="formDrive">';
  str += '<div id="power">';
  str += '<label for="slider-0">Power:';
  str += '<input type="range" name="power" id="power" value="0" min="-100" max="100" />';
  str += '</label>';
  str += '<label for="slider-1">Angle:';
  str += '<input type="range" name="rotation" id="rotation" value="0" min="-360" max="360" onmouseup="doDriveRotate(\'' + serviceId + '\')" />';
  str += '</label>';
  str += '</div>';
  str += '<input type="button" data-icon="forbidden" onclick="doDriveStop(\'' + serviceId + '\');" value="停止"  data-inline="true">';
  str += '</form>';
  str += '</center>';
  reloadContent(str);

  $("#power").on("slidestop", "#power", function() {
    doDriveMove(serviceId);
  })

  $("#power").on("slidestop", "#rotation", function() {
    doDriveRotate(serviceId);
  })
}
/**
 * 回転する
 *
 * @param {String} serviceId サービスID
 */
function doDriveRotate(serviceId) {
  let angle = document.formDrive.rotation.value;
  sdk.put({
    profile: 'drivecontroller',
    attribute: 'rotate',
    params: {
      serviceId: serviceId,
      angle: angle
    }
  }).then(json => {
    if (DEBUG) {
      console.log('Response: ', json);
    }
  }).catch(e => {
    showError('PUT drivecontroller/rotate', e.errorCode, e.errorMessage);
  });
}

/**
 * 停止する
 *
 * @param {String} serviceId サービスID
 */
function doDriveStop(serviceId) {
  sdk.delete({
    profile: 'drivecontroller',
    attribute: 'stop',
    params: {
      serviceId: serviceId
    }
  }).then(json => {
    if (DEBUG) {
      console.log('Response: ', json);
    }
  }).catch(e => {
    showError('DELETE drivecontroller/stop', e.errorCode, e.errorMessage);
  });
}

/**
 * 移動します.
 *
 * @param {String} serviceId サービスID
 */
function doDriveMove(serviceId) {
  let power = (document.formDrive.power.value) / 100;
  let angle = document.formDrive.rotation.value;
  sdk.post({
    profile: 'drivecontroller',
    attribute: 'move',
    params: {
      serviceId: serviceId,
      angle: angle,
      speed: speed
    }
  }).then(json => {
    if (DEBUG) {
      console.log('Response: ', json);
    }
  }).catch(e =>  {
    showError('POST drivecontroller/move', e.errorCode, e.errorMessage);
  });
}
