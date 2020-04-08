/**
 connection.js
 Copyright (c) 2020 NTT DOCOMO,INC.
 Released under the MIT license
 http://opensource.org/licenses/mit-license.php
 */

/**
 * Connection Menu
 *
 * @param {String} serviceId サービスID
 */
function showConnection(serviceId) {
  initAll();
  setTitle('Connection Profile');

  let btnStr = getBackButton('Device Top', 'doConnectionBack',
                  serviceId);
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  let str = '';
  str += 'Bluetooth:<br>';
  str += '<select name="bluetooth" id="bluetooth" data-role="slider">';
  str += '<option value="off" id="off">Off</option>';
  str += '<option value="on" id="on">On</option>';
  str += '</select><br>';
  str += 'BLE:<br>';
  str += '<select name="ble" id="ble" data-role="slider">';
  str += '<option value="off" id="off">Off</option>';
  str += '<option value="on" id="on">On</option>';
  str += '</select><br>';
  str += 'Wifi:<br>';
  str += '<select name="wifi" id="wifi" data-role="slider">';
  str += '<option value="off">Off</option>';
  str += '<option value="on">On</option>';
  str += '</select><br>';
  str += 'NFC:<br>';
  str += '<select name="nfc" id="nfc" data-role="slider">';
  str += '<option value="off">Off</option>';
  str += '<option value="on">On</option>';
  str += '</select><br>';
  reloadContent(str);

  doCheckBluetooth(serviceId);
  doCheckBLE(serviceId);
  doCheckWifi(serviceId);
  doCheckNfc(serviceId);

  doRegisterWifiChangeEvent(serviceId);
  doRegisterBluetoothChangeEvent(serviceId);
}

/**
 * Bluetoothが有効かどうかのチェック
 *
 * @param {String}serviceId サービスID
 */
function doCheckBluetooth(serviceId) {
  sdk.get({
    profile: 'connection',
    attribute: 'bluetooth',
    params: {
      serviceId: serviceId
    }
  }).then(json => {
    if (DEBUG) {
      console.log('Response: ', json);
    }
    changeSlider('bluetooth', json.enable ? 1 : 0);
    $('#bluetooth').bind('change', function(event, ui) {
      if ($('#bluetooth').val() === 'off') {
        doConnectBluetooth(serviceId, false);
      } else if ($('#bluetooth').val() === 'on') {
        doConnectBluetooth(serviceId, true);
      }
    });
  }).catch(e => {
    showError('connection/bluetooth', e.errorCode, e.errorMessage);
  });
}

/**
 * BLEが有効かどうかのチェック
 *
 * @param {String}serviceId サービスID
 */
function doCheckBLE(serviceId) {
  sdk.get({
    profile: 'connection',
    attribute: 'ble',
    params: {
      serviceId: serviceId
    }
  }).then(json => {
    if (DEBUG) {
      console.log('Response: ', json);
    }
    changeSlider('ble', json.enable ? 1 : 0);
    $('#ble').bind('change', function(event, ui) {
      if ($('#ble').val() === 'off') {
        doConnectBLE(serviceId, false);
      } else if ($('#ble').val() === 'on') {
        doConnectBLE(serviceId, true);
      }
    });
  }).catch(e => {
    showError('GET connection/ble', e.errorCode, e.errorMessage);
  });
}

/**
 * Wifiが有効かどうかのチェック
 *
 * @param {String}serviceId サービスID
 */
function doCheckWifi(serviceId) {
  sdk.get({
    profile: 'connection',
    attribute: 'wifi',
    params: {
      serviceId: serviceId
    }
  }).then(json => {
    if (DEBUG) {
      console.log('Response: ', json);
    }
    changeSlider('wifi', json.enable ? 1 : 0);
    $('#wifi').bind('change', function(event, ui) {
      if ($('#wifi').val() === 'off') {
        doConnectWifi(serviceId, false);
      } else if ($('#wifi').val() === 'on') {
        doConnectWifi(serviceId, true);
      }
    });
  }).catch(e => {
    showError('GET connection/wifi', e.errorCode, e.errorMessage);
  });
}

/**
 * NFCが有効かどうかのチェック
 *
 * @param {String}serviceId サービスID
 */
function doCheckNfc(serviceId) {
  sdk.get({
    profile: 'connection',
    attribute: 'nfc',
    params: {
      serviceId: serviceId
    }
  }).then(json => {
    if (DEBUG) {
      console.log('Response: ', json);
    }
    changeSlider('nfc', json.enable ? 1 : 0);
    $('#nfc').bind('change', function(event, ui) {
      if ($('#nfc').val() === 'off') {
        doConnectNfc(serviceId, false);
      } else if ($('#nfc').val() === 'on') {
        doConnectNfc(serviceId, true);
      }
    });
  }).catch(e => {
    showError('GET connection/nfc', e.errorCode, e.errorMessage);
  });
}

/**
 * WifiのOn/Off
 *
 * @param {String}serviceId サービスID
 * @param {Boolean}connect true ON, false OFF
 */
function doConnectWifi(serviceId, connect) {
  doDeviceOn('wifi', serviceId, connect);
}

/**
 * BluetoothのOn/Off
 *
 * @param {String}serviceId サービスID
 * @param {Boolean}connect true ON, false OFF
 */
function doConnectBluetooth(serviceId, connect) {
  doDeviceOn('bluetooth', serviceId, connect);
}

/**
 * BLEのOn/Off
 *
 * @param {String}serviceId サービスID
 * @param {Boolean}connect true ON, false OFF
 */
function doConnectBLE(serviceId, connect) {
  doDeviceOn('ble', serviceId, connect);
}

/**
 * NFCのOn/Off
 *
 * @param {String}serviceId サービスID
 * @param {Boolean}connect true ON, false OFF
 */
function doConnectNfc(serviceId, connect) {
  alert('Not supported.');
  changeSlider('nfc', 1);
}

/**
 * 各種通信部分の設定
 *
 * @param {String} type Bluetooth or Wifi
 * @param {String} serviceId サービスID
 * @param {Boolean} connect true ON, false OFF
 */
function doDeviceOn(type, serviceId, connect) {
  let params = {
    profile: 'connection',
    attribute: type,
    params: {
      serviceId: serviceId
    }
  };
  if (connect) {
    sdk.put(params).then(json => {
      if (DEBUG) {
        console.log('Response: ', json);
      }
      if (type === 'ble' || type === 'bluetooth') {
        changeSlider('bluetooth', 1);
        changeSlider('ble', 1);
      } else {
        changeSlider(type, 1);
      }
    }).catch(e => {
      showError('PUT connection/' + type, e.errorCode, e.errorMessage);
      changeSlider(type, 0);
    });
  } else {
    sdk.delete(params).then(json => {
      if (DEBUG) {
        console.log('Response: ', json);
      }
      if (type === 'ble' || type === 'bluetooth') {
        changeSlider('bluetooth', 0);
        changeSlider('ble', 0);
      } else {
        changeSlider(type, 0);
      }
    }).catch(e => {
      showError('DELETE connection/' + type, e.errorCode, e.errorMessage);
      changeSlider(type, 1);
    });
  }
}

/**
 * sliderを変化させる
 *
 * @param {String}name 名前
 * @param {String}status ステータス(0:off, 1:on)
 */
function changeSlider(name, status) {
  if (name === 'nfc') {
    $('#nfc').prop('selectedIndex', status);
    $('#nfc').slider('refresh');
  } else if (name === 'ble') {
    $('#ble').prop('selectedIndex', status);
    $('#ble').slider('refresh');
  } else if (name === 'bluetooth') {
    $('#bluetooth').prop('selectedIndex', status);
    $('#bluetooth').slider('refresh');
  } else if (name === 'wifi') {
    $('#wifi').prop('selectedIndex', status);
    $('#wifi').slider('refresh');
  }
}

/**
 * Wifi Change Event
 *
 * @param {String}serviceId サービスID
 */
function doRegisterWifiChangeEvent(serviceId) {
  sdk.addEventListener({
    profile: 'connection',
    attribute: 'onwifichange',
    params: {
      serviceId: serviceId
    }
  }, (message) => {
    // イベントメッセージが送られてくる
    if (DEBUG) {
      console.log('Event-Message: ' + message);
    }

    let json = JSON.parse(message);
    if (json.connectStatus.enable) {
      changeSlider('wifi', 1);
    } else {
      changeSlider('wifi', 0);
    }
  }).catch(e => {
    alert(e.errorMessage);
  });
}

/**
 * Bluetooth Change Event
 *
 * @param {String}serviceId サービスID
 */
function doRegisterBluetoothChangeEvent(serviceId) {
  sdk.addEventListener({
    profile: 'connection',
    attribute: 'onbluetoothchange',
    params: {
      serviceId: serviceId
    }
  }, (message) => {
    // イベントメッセージが送られてくる
    if (DEBUG) {
      console.log('Event-Message: ' + message);
    }

    let json = JSON.parse(message);
    if (json.connectStatus.enable) {
      changeSlider('bluetooth', 1);
      changeSlider('ble', 1);
    } else {
      changeSlider('bluetooth', 0);
      changeSlider('ble', 0);
    }
  }).catch(e => {
    alert(e.errorMessage);
  });
}

/**
 * Backボタン
 *
 * serviceId {String}サービスID
 */
function doConnectionBack(serviceId) {
  doUnregisterWifiChangeEvent(serviceId);
  doUnregisterBluetoothChangeEvent(serviceId);
  searchSystem(serviceId);
}

/**
 * Wifi Change Event削除
 *
 * @param {String}serviceId サービスID
 */
function doUnregisterWifiChangeEvent(serviceId) {
  sdk.removeEventListener({
    profile: 'connection',
    attribute: 'onwifichange',
    params: {
      serviceId: serviceId
    }
  }).catch(e => {
    alert(e.errorMessage);
  });
}

/**
 * Bluetooth Change Event削除
 *
 * @param {String}serviceId サービスID
 */
function doUnregisterBluetoothChangeEvent(serviceId) {
  sdk.removeEventListener({
    profile: 'connection',
    attribute: 'onbluetoothchange',
    params: {
      serviceId: serviceId
    }
  }).catch(e => {
    alert(e.errorMessage);
  });

}
