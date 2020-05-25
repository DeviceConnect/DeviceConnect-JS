/**
 camera.js
 Copyright (c) 2020 NTT DOCOMO,INC.
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

  let btnStr = getBackButton('Device Top', 'searchSystem', serviceId);
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  setTitle('Camera Profile');

  let str = '';
  str += '<form name="cameraForm">';
  str += '<label for="direction">Zoom Direction:</label>';
  str += '<SELECT id="direction">';
  str += '<OPTION value="in">in</OPTION>';
  str += '<OPTION value="out">out</OPTION>';
  str += '</SELECT>';
  str += '<label for="movement">Magnification:</label>';
  str += '<SELECT id="movement">';
  str += '<OPTION value="max">Max</OPTION>';
  str += '<OPTION value="1shot">1shot</OPTION>';
  str += '</SELECT>';
  str += '<br>';
  str += '<input type="button" onclick="doZoom(\'' + serviceId +
          '\');" value="Zoom" />';
  str += '</form>';

  reloadContent(str);

  $('#direction').change(function() {
    let dir = $(this).val();
    let str;
    if (dir === 'in') {
      str = 'Max';
    } else if (dir === 'out') {
      str = 'Min';
    }
    if (str) {
      $('#movement').children('[value=max]').html(str);
      $('#movement').selectmenu('refresh', true);
    }
  });

  doCheckZoom(serviceId);
}

/**
 * カメラのズーム設定を操作する.
 *
 * @param {String} serviceId サービスID
 */
function doZoom(serviceId) {
  let movement = $('#movement').val();
  let direction = $('#direction').val();

  sdk.put({
    profile: 'camera',
    attribute: 'zoom',
    params: {
      serviceId: serviceId,
      movement: movement,
      direction: direction
    }
  }).then(json => {
    if (DEBUG) {
      console.log('Response: ', json);
    }
  }).catch(e => {

  });
}

/**
 * カメラのズーム設定を取得する.
 *
 * @param {String} serviceId サービスID
 */
function doCheckZoom(serviceId) {
  sdk.get({
    profile: 'camera',
    attribute: 'zoom',
    params: {
      serviceId: serviceId
    }
  }).then(json => {
    if (DEBUG) {
      console.log('Response: ', json);
    }
    $('#zoomRange').val(json.zoomPosition);
    $('#zoomRange').slider('refresh');
  }).catch(e => {

  });
}
