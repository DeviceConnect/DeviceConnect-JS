/**
 illuminance.js
 Copyright (c) 2020 NTT DOCOMO,INC.
 Released under the MIT license
 http://opensource.org/licenses/mit-license.php
 */

/**
 * Illuminance Menu
 *
 * @param {String} serviceId service ID
 */
function showIlluminance(serviceId) {

  initAll();

  setTitle('Illuminance Profile');

  let btnStr = '';
  btnStr += getBackButton('Device Top', 'doIlluminanceBack', serviceId);
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  closeLoading();
  showLoading();

  sdk.get({
    profile: 'illuminance',
    params: {
      serviceId: serviceId
    }
  }).then(json => {
    if (DEBUG) {
      console.log('Response: ', json);
    }

    closeLoading();
    let temp = json.illuminance;

    let str = '';
    str += '<center><h1>' + temp + ' lx<h1></center>';
    reloadContent(str);
  }).catch(e => {
    closeLoading();
    showError('GET illuminance', e.errorCode, e.errorMessage);
  });
}

/**
 * Back button
 *
 * @param {String} serviceId service ID
 */
function doIlluminanceBack(serviceId) {
  searchDevice(serviceId);
}
