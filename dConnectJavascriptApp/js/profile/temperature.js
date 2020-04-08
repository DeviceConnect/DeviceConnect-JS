/**
 temperature.js
 Copyright (c) 2020 NTT DOCOMO,INC.
 Released under the MIT license
 http://opensource.org/licenses/mit-license.php
 */


/**
 * Show Health Menu
 *
 * @param {String} serviceId サービスID
 */
function showTemperatureProfile(serviceId) {
  initAll();
  setTitle('Temperature Profile');

  let btnStr = getBackButton('Device Top', 'doTemperatureBack', serviceId, '');
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  let str = '';
  str += '<li><a href="javascript:showGetTemperature(\'' +
          serviceId + '\',\'\');">Get Temperature</a></li>';
  str += '<li><a href="javascript:showSetTemperature(\'' +
          serviceId + '\');">Set Temperature</a></li>';
  reloadList(str);
}
/**
 * Show Get Temperature.
 *
 * @param {String} serviceId サービスID
 */
function showGetTemperature(serviceId, html) {

  initAll();

  setTitle('Temperature Profile');

  let btnStr = '';
  btnStr = getBackButton('Temperature Top', 'doTemperatureMenuBack', serviceId);
  reloadHeader(btnStr);
  reloadFooter(btnStr);
  btnStr = '';
  btnStr += '<h2>Temperature Info</h2>';
  btnStr += html
  btnStr += '<div data-role="fieldcontain">';
  btnStr += '  <label for="Type">Type:</label>';
  btnStr += '  <select id="type">';
  btnStr += '    <option value="1">摂氏</option>';
  btnStr += '    <option value="2">華氏</option>';
  btnStr += '  </select>';
  btnStr += '</div>';
  btnStr += '<input data-role="button" type="button" name="button"' +
        ' id="button" value="Get Temperature"' +
        ' onclick="javascript:getTemperature(\'' +
        serviceId + '\');"/><br>';
  reloadContent(btnStr);
}
/**
 * Get Temperature.
 *
 * @param {String} serviceId サービスID
 */
function getTemperature(serviceId) {
  let type = $('#type').val();
  closeLoading();
  showLoading();

  sdk.get({
    profile: 'temperature',
    params: {
      serviceId: serviceId,
      type: type
    }
  }).then(json => {
    if (DEBUG) {
      console.log('Response: ', json);
    }

    closeLoading();
    let temp = json.temperature * 100;
    temp = Math.round(temp) / 100;

    let str = '';
    str += '<center><h1>' + temp + '<h1></center>';
    showGetTemperature(serviceId, str);
  }).catch(e => {
    closeLoading();
    showError('GET temperature', e.errorCode, e.errorMessage);
  });
}

/**
 * Show Set Temperature.
 *
 * @param {String} serviceId サービスID
 */
function showSetTemperature(serviceId) {

  initAll();

  setTitle('Temperature Profile');

  let btnStr = '';
  btnStr += getBackButton('Temperature Top', 'doTemperatureMenuBack', serviceId);
  reloadHeader(btnStr);
  reloadFooter(btnStr);
  btnStr += '<h2>Temperature Info</h2>';
  btnStr += makeInputText('Temperature', 'temperature', 'temperature');
  btnStr += '<div data-role="fieldcontain">';
  btnStr += '  <label for="Type">Type:</label>';
  btnStr += '  <select id="type">';
  btnStr += '    <option value="1">摂氏</option>';
  btnStr += '    <option value="2">華氏</option>';
  btnStr += '  </select>';
  btnStr += '</div>';
  btnStr += '<input data-role="button" type="button" name="button"' +
        ' id="button" value="Set Temperature"' +
        ' onclick="javascript:setTemperature(\'' +
        serviceId + '\');"/><br>';
  reloadContent(btnStr);
}

/**
* Set Temperature Impl.
* @param {String} serviceId サービスID
*/
function setTemperature(serviceId) {
  let temp = $('#temperature').val();
  let type = $('#type').val();
  closeLoading();
  showLoading();

  sdk.put({
    profile: 'temperature',
    params: {
      serviceId: serviceId,
      type: type,
      temperature: temp
    }
  }).then(json => {
    if (DEBUG) {
      console.log('Response: ', json);
    }

    closeLoading();
  }).catch(e => {
    closeLoading();
    showError('PUT temperature', e.errorCode, e.errorMessage);
  });
}


/**
 * Backボタン
 *
 * @param {String} serviceId サービスID
 */
function doTemperatureMenuBack(serviceId) {
  showTemperatureProfile(serviceId);
}


/**
 * Backボタン
 *
 * @param {String} serviceId サービスID
 */
function doTemperatureBack(serviceId) {
  searchDevice(serviceId);
}
