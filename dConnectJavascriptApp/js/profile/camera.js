/**
 camera.js
 Copyright (c) 2014 NTT DOCOMO,INC.
 Released under the MIT license
 http://opensource.org/licenses/mit-license.php
 */

/**
 * Camera Profile
 *
 * @param {String}serviceId サービスID
 */
function showCamera(serviceId) {
  initAll();

  var btnStr = getBackButton('Device Top', 'doCameraBack', serviceId, '');
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  setTitle('Camera Profile');

  var str = '';
  str += '<form name="cameraForm">';
  str += '<label for="direction">Zoom Direction:</label>';
  str += '<SELECT id="direction">';
  str += '<OPTION value="in">in</OPTION>';
  str += '<OPTION value="out">out</OPTION>';
  str += '</SELECT>';
  str += '<label for="movement">Magnification:</label>';
  str += '<SELECT id="movement">';
  str += '<OPTION value="start">Max</OPTION>';
  str += '<OPTION value="1shot">1shot</OPTION>';
  str += '</SELECT>';
  str += '<br>';
  str += '<input type="button" onclick="doZoom(\'' + serviceId +
          '\');" value="Zoom" />';
  str += '</form>';

  reloadContent(str);

  $('#direction').change(function() {
    var dir = $(this).val();
    var str;
    if (dir === 'in') {
      str = 'Max';
    } else if (dir === 'out') {
      str = 'Min';
    }
    if (str) {
      $('#movement').children('[value=start]').html(str);
      $('#movement').selectmenu('refresh', true);
    }
  });

  doCheckZoom(serviceId);
}

/**
 * Backボタン
 *
 * @param {String}serviceId サービスID
 * @param {String}sessionKey セッションKEY
 */
function doCameraBack(serviceId, sessionKey) {
  searchSystem(serviceId);
}

/**
 * カメラのズーム設定を操作する.
 *
 * @param {String} serviceId サービスID
 */
function doZoom(serviceId) {
  var movement = $('#movement').val();
  var direction = $('#direction').val();

  var builder = new dConnect.URIBuilder();
  builder.setProfile('camera');
  builder.setAttribute('zoom');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('movement', movement);
  builder.addParameter('direction', direction);
  var uri = builder.build();
  if (DEBUG) {
    console.log('Uri:' + uri)
  }

  dConnect.put(uri, null, null, function(json) {
    if (DEBUG) {
      console.log('Response: ', json);
    }
  }, function(errorCode, errorMessage) {

  });
}

/**
 * カメラのズーム設定を取得する.
 *
 * @param {String} serviceId サービスID
 */
function doCheckZoom(serviceId) {
  var builder = new dConnect.URIBuilder();
  builder.setProfile('camera');
  builder.setAttribute('zoom');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  var uri = builder.build();
  if (DEBUG) {
    console.log('Uri:' + uri);
  }

  dConnect.get(uri, null, function(json) {
    if (DEBUG) {
      console.log('Response: ', json);
    }
    $('#zoomRange').val(json.zoomPosition);
    $('#zoomRange').slider('refresh');
  }, function(errorCode, errorMessage) {

  });
}
