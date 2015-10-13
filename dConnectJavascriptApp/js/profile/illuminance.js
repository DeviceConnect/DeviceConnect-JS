/**
 illuminance.js
 Copyright (c) 2015 NTT DOCOMO,INC.
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

  var btnStr = '';
  btnStr += getBackButton('Device Top', 'doIlluminanceBack', serviceId, '');
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  var builder = new dConnect.URIBuilder();
  builder.setProfile('illuminance');
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
    var temp = json.illuminance;

    var str = '';
    str += '<center><h1>' + temp + ' lx<h1></center>';
    reloadContent(str);
  }, function(errorCode, errorMessage) {
    closeLoading();
    showError('GET illuminance', errorCode, errorMessage);
  });
}

/**
 * Back button
 *
 * @param {String} serviceId service ID
 * @param {String} sessionKey session KEY
 */
function doIlluminanceBack(serviceId, sessionKey) {
  searchDevice(serviceId);
}
