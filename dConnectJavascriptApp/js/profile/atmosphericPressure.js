　/**
 atmosphericPressure.js
 Copyright (c) 2020 NTT DOCOMO,INC.
 Released under the MIT license
 http://opensource.org/licenses/mit-license.php
 */

/**
 * AtmosphericPressure Menu
 *
 * @param {String} serviceId service ID
 */
function showAtmosphericPressure(serviceId) {

  initAll();

  setTitle('AtmosphericPressure Profile');

  let btnStr = '';
  btnStr += getBackButton('Device Top', 'doAtmosphericPressureBack', serviceId);
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  closeLoading();
  showLoading();

  sdk.get({
    profile: 'atmosphericPressure',
    params: {
      serviceId: serviceId
    }
  }).then(json => {
    if (DEBUG) {
      console.log('Response: ', json);
    }

    closeLoading();
    let temp = json.atmosphericPressure;

    let str = '';
    str += '<center><h1>' + temp + ' hPa<h1></center>';
    reloadContent(str);
  }).catch(e => {
    closeLoading();
    showError('GET atmosphericPressure', e.errorCode, e.errorMessage);
  });
}

/**
 * Back button
 *
 * @param {String} serviceId service ID
 */
function doAtmosphericPressureBack(serviceId) {
  searchDevice(serviceId);
}
