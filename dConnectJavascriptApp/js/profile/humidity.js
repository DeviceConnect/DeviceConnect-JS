/**
 humidity.js
 Copyright (c) 2015 NTT DOCOMO,INC.
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

  var btnStr = '';
  btnStr += getBackButton('Device Top', 'doHumidityBack', serviceId, '');
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  var builder = new dConnect.URIBuilder();
  builder.setProfile('humidity');
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
    var temp = json.humidity * 100;

    var str = '';
    str += '<center><h1>' + temp + ' %<h1></center>';
    reloadContent(str);
  }, function(errorCode, errorMessage) {
    closeLoading();
    showError('GET humidity', errorCode, errorMessage);
  });
}

/**
 * Back button
 *
 * @param {String} serviceId service ID
 * @param {String} sessionKey session KEY
 */
function doHumidityBack(serviceId, sessionKey) {
  searchDevice(serviceId);
}
