/**
 humidity.js
 Copyright (c) 2020 NTT DOCOMO,INC.
 Released under the MIT license
 http://opensource.org/licenses/mit-license.php
 */

/**
 * Humidity Menu
 *
 * @param {String} serviceId service ID
 */
function showHumidity(serviceId) {

  initAll();

  setTitle('Humidity Profile');

  let btnStr = '';
  btnStr += getBackButton('Device Top', 'doHumidityBack', serviceId);
  reloadHeader(btnStr);
  reloadFooter(btnStr);
  closeLoading();
  showLoading();

  sdk.get({
    profile: 'humidity',
    params: {
      serviceId: serviceId
    }
  }).then(json => {
    if (DEBUG) {
      console.log('Response: ', json);
    }

    closeLoading();
    let temp = json.humidity * 100;

    let str = '';
    str += '<center><h1>' + temp + ' %<h1></center>';
    reloadContent(str);
  }).catch(e => {
    closeLoading();
    showError('GET humidity', e.errorCode, e.errorMessage);
  });
}

/**
 * Back button
 *
 * @param {String} serviceId service ID
 */
function doHumidityBack(serviceId) {
  searchDevice(serviceId);
}
