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
  str += '<label for="slider-0">Power:</label>';
  str += '<input type="range" name="power" id="power" value="80"' +
        ' min="0" max="100"  />';
  str += '<input type="button" data-icon="arrow-u" onclick="doDriveMove(\'' +
        serviceId + '\', 0);" value=" "  data-inline="true" ' +
        'data-iconpos="top" ><br>';
  str += '<input type="button" data-icon="arrow-l" onclick="doDriveMove(\'' +
        serviceId + '\', 270);" value=" "  data-inline="true"' +
        ' data-iconpos="left">';
  str += '<input type="button" onclick="doDriveStop(\'' + serviceId +
        '\');" value="*"  data-inline="true"  >';
  str += '<input type="button" data-icon="arrow-r" onclick="doDriveMove(\'' +
        serviceId + '\', 90);" value=" " data-inline="true"' +
        '  data-iconpos="right"><br>';
  str += '<input type="button" data-icon="arrow-d" onclick="doDriveMove(\'' +
        serviceId + '\', 180);" value=" " data-inline="true"' +
        '  data-iconpos="bottom"><br>';
  str += 'angle:';
  str += '<input type="range" name="userRotate" id="userRotate"' +
          ' value="80" min="0" max="360"  />';
  str += '<input type="button" onclick="doDriveRotate(\'' +
        serviceId + '\');" value="Rotate" >';
  str += '</form>';
  str += '</center>';
  reloadContent(str);
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
  var angle = document.formDrive.userRotate.value;

  var builder = new dConnect.URIBuilder();
  builder.setProfile('drive_controller');
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
    showError('PUT drive_controller/rotate', errorCode, errorMessage);
  });

}

/**
 * 停止する
 *
 * @param {String} serviceId サービスID
 */
function doDriveStop(serviceId) {
  var builder = new dConnect.URIBuilder();
  builder.setProfile('drive_controller');
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
    showError('DELETE drive_controller/stop', errorCode, errorMessage);
  });
}

/**
 * 操作する
 *
 * @param {String}serviceId サービスID
 * @param {String}angle 操作する方向
 */
function doDriveMove(serviceId, angle) {
  var body = document.formDrive.power.value;
  var mPower = body / 100;

  var builder = new dConnect.URIBuilder();
  builder.setProfile('drive_controller');
  builder.setServiceId(serviceId);
  builder.setAttribute('move');
  builder.setAccessToken(accessToken);
  builder.addParameter('angle', angle);
  builder.addParameter('speed', mPower);
  var uri = builder.build();
  if (DEBUG) {
    console.log('doDriveMove:' + uri);
  }

  dConnect.post(uri, null, null, function(json) {
    if (DEBUG) {
      console.log('Response: ', json);
    }
  }, function(errorCode, errorMessage) {
    showError('POST drive_controller/move', errorCode, errorMessage);
  });
}
