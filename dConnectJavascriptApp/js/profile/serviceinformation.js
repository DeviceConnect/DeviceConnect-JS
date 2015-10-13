/**
 serviceinformation.js
 Copyright (c) 2015 NTT DOCOMO,INC.
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

  var btnStr = '';
  btnStr += getBackButton('Device Top', 'doServiceInformationBack', serviceId, '');
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  var builder = new dConnect.URIBuilder();
  builder.setProfile('serviceinformation');
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

    var connect = json.connect;

    var wifi = typeof connect.wifi === 'undefined' ? 'none' : connect.wifi;
    var bluetooth = typeof connect.bluetooth === 'undefined' ? 'none' : connect.bluetooth;
    var nfc = typeof connect.nfc === 'undefined' ? 'none' : connect.nfc;
    var ble = typeof connect.ble === 'undefined' ? 'none' : connect.ble;

    var str = '';
    str += '<center>Wi-Fi : <h1>' + wifi + '<h1></center>';
    str += '<center>Bluetooth : <h1>' + bluetooth + '<h1></center>';
    str += '<center>NFC : <h1>' + nfc + '<h1></center>';
    str += '<center>BLE : <h1>' + ble + '<h1></center>';

    reloadContent(str);
  }, function(errorCode, errorMessage) {
    closeLoading();
    showError('GET serviceinformation', errorCode, errorMessage);
  });
}

/**
 * Backボタン
 *
 * @param {String} serviceId サービスID
 * @param {String} sessionKey セッションKEY
 */
function doServiceInformationBack(serviceId, sessionKey) {
  searchDevice(serviceId);
}
