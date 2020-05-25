/**
 serviceinformation.js
 Copyright (c) 2020 NTT DOCOMO,INC.
 Released under the MIT license
 http://opensource.org/licenses/mit-license.php
 */

/**
 * ServiceInformation Menu
 *
 * @param {String} serviceId サービスID
 */
function showServiceInformation(serviceId) {

  initAll();

  setTitle('ServiceInformation Profile');

  let btnStr = '';
  btnStr += getBackButton('Device Top', 'doServiceInformationBack', serviceId);
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  closeLoading();
  showLoading();

  sdk.get({
    profile: 'serviceinformation',
    params: {
      serviceId: serviceId
    }
  }).then(json => {
    if (DEBUG) {
      console.log('Response: ', json);
    }

    closeLoading();

    let connect = json.connect;

    let wifi = typeof connect.wifi === 'undefined' ? 'none' : connect.wifi;
    let bluetooth = typeof connect.bluetooth === 'undefined' ? 'none' : connect.bluetooth;
    let nfc = typeof connect.nfc === 'undefined' ? 'none' : connect.nfc;
    let ble = typeof connect.ble === 'undefined' ? 'none' : connect.ble;

    let str = '';
    str += '<center>Wi-Fi : <h1>' + wifi + '<h1></center>';
    str += '<center>Bluetooth : <h1>' + bluetooth + '<h1></center>';
    str += '<center>NFC : <h1>' + nfc + '<h1></center>';
    str += '<center>BLE : <h1>' + ble + '<h1></center>';

    reloadContent(str);
  }).catch(e => {
    closeLoading();
    showError('GET serviceinformation', e.errorCode, e.errorMessage);
  });
}

/**
 * Backボタン
 *
 * @param {String} serviceId サービスID
 */
function doServiceInformationBack(serviceId) {
  searchDevice(serviceId);
}
