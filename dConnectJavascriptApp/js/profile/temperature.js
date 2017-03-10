/**
 temperature.js
 Copyright (c) 2014 NTT DOCOMO,INC.
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

  var btnStr = getBackButton('Device Top', 'doTemperatureBack', serviceId, '');
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  var str = '';
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

  var btnStr = '';
  btnStr = getBackButton('Temperature Top', 'doTemperatureMenuBack', serviceId, '');
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
  var type = $('#type').val();

  var builder = new dConnect.URIBuilder();
  builder.setProfile('temperature');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter("type", type);

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
    var temp = json.temperature * 100;
    temp = Math.round(temp) / 100;

    var str = '';
    str += '<center><h1>' + temp + '<h1></center>';
    showGetTemperature(serviceId, str);
  }, function(errorCode, errorMessage) {
    closeLoading();
    showError('GET temperature', errorCode, errorMessage);
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

  var btnStr = '';
  btnStr += getBackButton('Temperature Top', 'doTemperatureMenuBack', serviceId, '');
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
  var temp = $('#temperature').val();
  var type = $('#type').val();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('temperature');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter("temperature", temp);
  builder.addParameter("type", type);
  var uri = builder.build();

  if (DEBUG) {
    console.log('Uri:' + uri);
  }

  closeLoading();
  showLoading();

  dConnect.put(uri, null, null,function(json) {
    if (DEBUG) {
      console.log('Response: ', json);
    }

    closeLoading();
  }, function(errorCode, errorMessage) {
    closeLoading();
    showError('PUT temperature', errorCode, errorMessage);
  });
}


/**
 * Backボタン
 *
 * @param {String} serviceId サービスID
 * @param {String} sessionKey セッションKEY
 */
function doTemperatureMenuBack(serviceId, sessionKey) {
  showTemperatureProfile(serviceId);
}


/**
 * Backボタン
 *
 * @param {String} serviceId サービスID
 * @param {String} sessionKey セッションKEY
 */
function doTemperatureBack(serviceId, sessionKey) {
  searchDevice(serviceId);
}
