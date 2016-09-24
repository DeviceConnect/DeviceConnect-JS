/**
 atmosphericPressure.js
 Copyright (c) 2016 NTT DOCOMO,INC.
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

  var btnStr = '';
  btnStr += getBackButton('Device Top', 'doAtmosphericPressureBack', serviceId, '');
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  var builder = new dConnect.URIBuilder();
  builder.setProfile('atmosphericPressure');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  var uri = builder.build();

  if (DEBUG) {
    console.log('Uri:' + uri);
  }

  closeLoading();
  showLoading();

  dConnect.get(uri, null, function(json) {
    if (DEBUG) {
      console.log('Response: ', json);
    }

    closeLoading();
    var temp = json.atmosphericPressure;

    var str = '';
    str += '<center><h1>' + temp + ' hPa<h1></center>';
    reloadContent(str);
  }, function(errorCode, errorMessage) {
    closeLoading();
    showError('GET atmosphericPressure', errorCode, errorMessage);
  });
}

/**
 * Back button
 *
 * @param {String} serviceId service ID
 * @param {String} sessionKey session KEY
 */
function doAtmosphericPressureBack(serviceId, sessionKey) {
  searchDevice(serviceId);
}
