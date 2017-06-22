/**
 drivecontroller.js
 Copyright (c) 2014 NTT DOCOMO,INC.
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

  var btnStr = '';
  btnStr += getBackButton('Device Top', 'doDriveControllerBack', serviceId, '');
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  var str = '';
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
 * Backボタン
 *
 * @param {String}serviceId サービスID
 * @param {String}sessionKey セッションKEY
 */
function doDriveControllerBack(serviceId, sessionKey) {
  searchSystem(serviceId);
}

/**
 * 回転する
 *
 * @param {String} serviceId サービスID
 */
function doDriveRotate(serviceId) {
  var angle = document.formDrive.rotation.value;

  var builder = new dConnect.URIBuilder();
  builder.setProfile('drivecontroller');
  builder.setAttribute('rotate');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('angle', angle);
  var uri = builder.build();
  if (DEBUG) {
    console.log('doDriveRotate:' + uri);
  }

  dConnect.put(uri, null, null, function(json) {
    if (DEBUG) {
      console.log('Response: ', json);
    }
  }, function(errorCode, errorMessage) {
    showError('PUT drivecontroller/rotate', errorCode, errorMessage);
  });
}

/**
 * 停止する
 *
 * @param {String} serviceId サービスID
 */
function doDriveStop(serviceId) {
  var builder = new dConnect.URIBuilder();
  builder.setProfile('drivecontroller');
  builder.setAttribute('stop');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  var uri = builder.build();
  if (DEBUG) {
    console.log('doDriveStop:' + uri);
  }

  dConnect.delete(uri, null, function(json) {
    if (DEBUG) {
      console.log('Response: ', json);
    }
  }, function(errorCode, errorMessage) {
    showError('DELETE drivecontroller/stop', errorCode, errorMessage);
  });
}

/**
 * 移動します.
 *
 * @param {String} serviceId サービスID
 */
function doDriveMove(serviceId) {
  var power = (document.formDrive.power.value) / 100;
  var angle = document.formDrive.rotation.value;

  var builder = new dConnect.URIBuilder();
  builder.setProfile('drivecontroller');
  builder.setServiceId(serviceId);
  builder.setAttribute('move');
  builder.setAccessToken(accessToken);
  builder.addParameter('speed', power);
  builder.addParameter('angle', angle);
  var uri = builder.build();
  if (DEBUG) {
    console.log('doDriveMove:' + uri);
  }
  dConnect.post(uri, null, null, function(json) {
    if (DEBUG) {
      console.log('Response: ', json);
    }
  }, function(errorCode, errorMessage) {
    showError('POST drivecontroller/move', errorCode, errorMessage);
  });
}
