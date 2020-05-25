/**
 power.js
 Copyright (c) 2020 NTT DOCOMO,INC.
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
 * TVの電源を取得する
 * @param {String} serviceId サービスID
 */
function getPowerStatus(serviceId) {
  initAll();
  setTitle('Power Profile');

  let btnStr = getBackButton('Device Top', 'searchSystem', serviceId);
  reloadHeader(btnStr);
  reloadFooter(btnStr);
  closeLoading();
  showLoading();

  sdk.get({
    profile: 'power',
    params: {
      serviceId: serviceId
    }
  }).then(json => {
    if (DEBUG) {
      console.log('Response: ', json);
    }
    closeLoading();

    let str = '';
    str += '<br>';
    str += '電源: ' + json.powerstatus;

    powerUI(str, serviceId);
  }).catch(e => {
    closeLoading();
    let str = '';
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
  let params = {
    profile: 'power',
    params: {
      serviceId: serviceId
    }
  };
  closeLoading();
  showLoading();
  let successCallback = function(json) {
    if (DEBUG) {
      console.log('Response: ', json);
    }

    closeLoading();
    getPowerStatus(serviceId);
  };

  let errorCallback = function(errorCode, errorMessage) {
    closeLoading();
    showError('PowerOnOff ', errorCode, errorMessage);
    getPowerStatus(serviceId);
  };

  if (isSwitch == 'ON') {
    sdk.put(params).then(json => { successCallback(json);}).catch(e => { errorCallback(e.errorCode, e.errorMessage)});
  } else {
    sdk.delete(params).then(json => { successCallback(json);}).catch(e => { errorCallback(e.errorCode, e.errorMessage)});
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

  let btnStr = getBackButton('Device Top', 'doPowerBack', serviceId);
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  let str = '';
  str += s;
  str += '<div>';
  str += '<input type="button" onclick="doOnOff(\'' +
  serviceId + '\', \'ON\');" value="ON" name="ON" >';
  str += '<input type="button" onclick="doOnOff(\'' +
  serviceId + '\', \'OFF\');" value="OFF" name="OFF" >';
  str += '</div></label>';
  reloadList(str);
}
