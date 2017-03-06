/**
 power.js
 Copyright (c) 2017 NTT DOCOMO,INC.
 Released under the MIT license
 http://opensource.org/licenses/mit-license.php
 */

/**
 * Show Power Menu
 *
 * @param {String} serviceId サービスID
 */
function showPower(serviceId) {
  getPowerStatus(serviceId);
}



/**
 * Backボタン
 *
 * @param {String}serviceId サービスID
 * @param {String}sessionKey セッションKEY
 */
function doPowerBack(serviceId, sessionKey) {
  searchSystem(serviceId);
}


/**
 * TVの電源を取得する
 * @param {String} serviceId サービスID
 */
function getPowerStatus(serviceId) {
  initAll();
  setTitle('Power Profile');

  var btnStr = getBackButton('Device Top', 'doPowerBack', serviceId, '');
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  var builder = new dConnect.URIBuilder();
  builder.setProfile('power');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  var uri = builder.build();
  if (DEBUG) {
    console.log('Uri: ' + uri);
  }

  closeLoading();
  showLoading();

  dConnect.get(uri, null, function(json) {
    if (DEBUG) {
      console.log('Response: ', json);
    }
    closeLoading();

    var str = '';
    str += '<br>';
    str += '電源: ' + json.powerstatus;

    powerUI(str, serviceId);
  }, function(errorCode, errorMessage) {
    closeLoading();
    var str = '';
    str += '<br>';
    str += '電源: UNKOWN';
    powerUI(str, serviceId);
  });
}

/**
 * 電源OnOffする
 * @param {String} serviceId サービスID
 * @param {String} isSwitch On Offするか
 */
function doOnOff(serviceId, isSwitch) {

  var builder = new dConnect.URIBuilder();
  builder.setProfile('power');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);

  var uri = builder.build();
  if (DEBUG) {
    console.log('Uri: ' + uri);
  }

  closeLoading();
  showLoading();
  var successCallback = function(json) {
    if (DEBUG) {
      console.log('Response: ', json);
    }

    closeLoading();
    getPowerStatus(serviceId);
  };

  var errorCallback = function(errorCode, errorMessage) {
    closeLoading();
    showError('PowerOnOff ', errorCode, errorMessage);
    getPowerStatus(serviceId);
  };

  if (isSwitch == 'ON') {
    dConnect.put(uri, null, null, successCallback, errorCallback);
  } else {
    dConnect.delete(uri, null, successCallback, errorCallback);
  }

}


/*
  Power UI.
  @param {String} s html
  @param {String} serviceId サービスID
 */
function powerUI(s, serviceId) {
  initAll();
  setTitle('Power Profile');

  var btnStr = getBackButton('Device Top', 'doPowerBack', serviceId, '');
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  var str = '';
  str += s;
  str += '<div>';
  str += '<input type="button" onclick="doOnOff(\'' +
  serviceId + '\', \'ON\');" value="ON" name="ON" >';
  str += '<input type="button" onclick="doOnOff(\'' +
  serviceId + '\', \'OFF\');" value="OFF" name="OFF" >';
  str += '</div></label>';
  reloadList(str);
}