/**
 remotecontroller.js
 Copyright (c) 2020 NTT DOCOMO,INC.
 Released under the MIT license
 http://opensource.org/licenses/mit-license.php
 */

/**
 * Remote Controller Profile
 *
 * @param {String} serviceId サービスID
 */
function showRemoteController(serviceId) {

  initAll();

  let btnStr = '';
  btnStr += getBackButton('Device Top', 'searchSystem',
            serviceId, '');
  setTitle('Remote Controller Profile');
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  let str = '';
  str += '<input type="button" onclick="doRemoteControllerGet(\'' +
          serviceId + '\');" value="get" name="get" >';
  reloadContent(str);
}

/**
 *
 * IrDataの送信
 *
 * @param {String}serviceId サービスID
 */
function doRemoteControllerSend(serviceId) {

  closeLoading();
  showLoading();

  let message = document.getElementById('menu').innerHTML;
  sdk.post({
    profile: 'remotecontroller',
    params: {
      serviceId: serviceId,
      message: message
    }
  }).then(json => {
    if (DEBUG) {
      console.log('Response: ', json);
    }

    closeLoading();
  }).catch(e => {
    showError('POST remotecontroller', e.errorCode, e.errorMessage);
    closeLoading();
  });
}

/**
 * IrDataの取得
 *
 * @param {String} serviceId サービスID
 */
function doRemoteControllerGet(serviceId) {
  closeLoading();
  showLoading();

  sdk.get({
    profile: 'remotecontroller',
    params: {
      serviceId: serviceId
    }
  }).then(json => {
    if (DEBUG) {
      console.log('Response: ', json);
    }

    let cmd = json.message;
    reloadMenu(cmd);

    let str = '';
    str += '<center>';
    str += '<input type="button" onclick="doRemoteControllerGet(\'' +
          serviceId + '\');" value="get" name="get" >';
    str += '<input type="button" onclick="doRemoteControllerSend(\'' +
          serviceId + '\');" value="send" name="send">';
    str += '</center>';

    reloadContent(str);
    closeLoading();
  }).catch(e => {
    showError('GET remotecontroller', e.errorCode, e.errorMessage);
    closeLoading();
  });
}
