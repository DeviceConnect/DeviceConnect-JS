QUnit.module('Connection Profile Normal Test', {
  before: function() {
    init();
  }
});

/**
 * Connectionプロファイルのテストを行うクラス。
 * @class
 */
let ConnectionProfileNormalTest = {};

/**
 * Wi-Fiの接続状態を取得するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /connection/wifi?serviceId=xxxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * ・enableにtrueかfalseが返ってくること。<br/>
 * </p>
 */
ConnectionProfileNormalTest.wifiTest001 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: dConnectSDK.constants.connection.PROFILE_NAME,
    attribute: dConnectSDK.constants.connection.ATTR_WIFI,
    params: {
      serviceId: getCurrentServiceId()
    }
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    assert.ok(json.enable !== undefined, 'enable=' + json.enable);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode), "errorCode=" + e.errorCode + ", errorMessage=" + e.errorMessage);
    done();
  });
};

QUnit.test('wifiNormalTest001', ConnectionProfileNormalTest.wifiTest001);

/**
 * Wi-Fiの接続状態を有効にするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /connection/wifi?serviceId=xxxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
ConnectionProfileNormalTest.wifiNormalTest001 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: dConnectSDK.constants.connection.PROFILE_NAME,
    attribute: dConnectSDK.constants.connection.ATTR_WIFI,
    params: {
      serviceId: getCurrentServiceId()
    }
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode), "errorCode=" + e.errorCode + ", errorMessage=" + e.errorMessage);
    done();
  });
};
QUnit.test('wifiNormalTest001', ConnectionProfileNormalTest.wifiNormalTest001);

/**
 * Wi-Fiの接続状態を無効にするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: DELETE<br/>
 * Path: /connection/wifi?serviceId=xxxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
ConnectionProfileNormalTest.wifiNormalTest002 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: dConnectSDK.constants.connection.PROFILE_NAME,
    attribute: dConnectSDK.constants.connection.ATTR_WIFI,
    params: {
      serviceId: getCurrentServiceId()
    }
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode), "errorCode=" + e.errorCode + ", errorMessage=" + e.errorMessage);
    done();
  });
};
QUnit.test('wifiNormalTest002', ConnectionProfileNormalTest.wifiNormalTest002);

/**
 * Connectionプロファイルのonwifichangeを登録するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /connection/onwifichange?serviceId=xxxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * ・イベント通知が送られてくること。<br/>
 * </p>
 */
ConnectionProfileNormalTest.onWifichangeTest001 = function(assert) {
  let params = {
    profile: dConnectSDK.constants.connection.PROFILE_NAME,
    attribute: dConnectSDK.constants.connection.ATTR_ON_WIFI_CHANGE,
    params: {
      serviceId: getCurrentServiceId()
    }
  };
  openWebsocket(params, assert, 10000, message => {
    let json = JSON.parse(message);
    if (json.profile === dConnectSDK.constants.connection.PROFILE_NAME
        && json.attribute === dConnectSDK.constants.connection.ATTR_ON_WIFI_CHANGE) {
      if (json.connectStatus) {
        assert.ok(true, message);
        return true;
      }
    }
    assert.ok(false, message);
    return false;
  });
};

QUnit.test('onwifichangeNormalTest001', ConnectionProfileNormalTest.onWifichangeTest001);

/**
 * Bluetoothの接続状態を取得するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /connection/bluetooth?serviceId=xxxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * ・enableにtrueかfalseが返ってくること。<br/>
 * </p>
 */
ConnectionProfileNormalTest.bluetoothNormalTest001 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: dConnectSDK.constants.connection.PROFILE_NAME,
    attribute: dConnectSDK.constants.connection.ATTR_BLUETOOTH,
    params: {
      serviceId: getCurrentServiceId()
    }
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    assert.ok(json.enable !== undefined, 'enable=' + json.enable);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode), "errorCode=" + e.errorCode + ", errorMessage=" + e.errorMessage);
    done();
  });
};

QUnit.test('bluetoothNormalTest001', ConnectionProfileNormalTest.bluetoothNormalTest001);

/**
 * Bluetoothの接続状態を有効にするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /connection/bluetooth?serviceId=xxxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
ConnectionProfileNormalTest.bluetoothNormalTest002 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: dConnectSDK.constants.connection.PROFILE_NAME,
    attribute: dConnectSDK.constants.connection.ATTR_BLUETOOTH,
    params: {
      serviceId: getCurrentServiceId()
    }
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode), "errorCode=" + e.errorCode + ", errorMessage=" + e.errorMessage);
    done();
  });
};

QUnit.test('bluetoothNormalTest002', ConnectionProfileNormalTest.bluetoothNormalTest002);

/**
 * Bluetoothの接続状態を無効にするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: DELETE<br/>
 * Path: /connection/bluetooth?serviceId=xxxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
ConnectionProfileNormalTest.bluetoothNormalTest003 = function(assert) {
  let done = assert.async();
  sdk.delete({
    profile: dConnectSDK.constants.connection.PROFILE_NAME,
    attribute: dConnectSDK.constants.connection.ATTR_BLUETOOTH,
    params: {
      serviceId: getCurrentServiceId()
    }
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode), "errorCode=" + e.errorCode + ", errorMessage=" + e.errorMessage);
    done();
  });
};

QUnit.test('bluetoothNormalTest003', ConnectionProfileNormalTest.bluetoothNormalTest003);

/**
 * Connectionプロファイルのonbluetoothchangeを登録するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /connection/onbluetoothchange?serviceId=xxxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * ・イベント通知が送られてくること。<br/>
 * </p>
 */
ConnectionProfileNormalTest.onBluetoothChangeNormalTest003 = function(assert) {
  let params = {
    profile: dConnectSDK.constants.connection.PROFILE_NAME,
    attribute: dConnectSDK.constants.connection.ATTR_ON_BLUETOOTH_CHANGE,
    params: {
      serviceId: getCurrentServiceId()
    }
  };
  openWebsocket(params, assert, 10000, message => {
    let json = JSON.parse(message);
    if (json.profile === dConnectSDK.constants.connection.PROFILE_NAME
      && json.attribute === dConnectSDK.constants.connection.ATTR_ON_BLUETOOTH_CHANGE) {
      if (json.connectStatus) {
        assert.ok(true, message);
        return true;
      }
    }
    assert.ok(false, message);
    return false;
  });
};

QUnit.test('onBluetoothChangeNormalTest003', ConnectionProfileNormalTest.onBluetoothChangeNormalTest003);

/**
 * Bluetoothの検索可能状態を有効にするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /connection/bluetooth/discoverable?serviceId=xxxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
ConnectionProfileNormalTest.discoverableNormalTest001 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: dConnectSDK.constants.connection.PROFILE_NAME,
    interface: dConnectSDK.constants.connection.INTERFACE_BLUETOOTH,
    attribute: dConnectSDK.constants.connection.ATTR_DISCOVERABLE,
    params: {
      serviceId: getCurrentServiceId()
    }
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode), "errorCode=" + e.errorCode + ", errorMessage=" + e.errorMessage);
    done();
  });
};

QUnit.test('discoverableNormalTest001', ConnectionProfileNormalTest.discoverableNormalTest001);

/**
 * Bluetoothの検索可能状態を無効にするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: DELETE<br/>
 * Path: /connection/bluetooth/discoverable?serviceId=xxxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
ConnectionProfileNormalTest.discoverableNormalTest002 = function(assert) {
  let done = assert.async();
  sdk.delete({
    profile: dConnectSDK.constants.connection.PROFILE_NAME,
    interface: dConnectSDK.constants.connection.INTERFACE_BLUETOOTH,
    attribute: dConnectSDK.constants.connection.ATTR_DISCOVERABLE,
    params: {
      serviceId: getCurrentServiceId()
    }
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode), "errorCode=" + e.errorCode + ", errorMessage=" + e.errorMessage);
    done();
  });
};

QUnit.test('discoverableNormalTest002', ConnectionProfileNormalTest.discoverableNormalTest002);

/**
 * NFCの接続状態を取得にするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /connection/nfc?serviceId=xxxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * ・enableにtrueかfalseが返ってくること。<br/>
 * </p>
 */
ConnectionProfileNormalTest.nfcNormalTest001 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: dConnectSDK.constants.connection.PROFILE_NAME,
    attribute: dConnectSDK.constants.connection.ATTR_NFC,
    params: {
      serviceId: getCurrentServiceId()
    }
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    assert.ok(json.enable !== undefined, 'enable=' + json.enable);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode), "errorCode=" + e.errorCode + ", errorMessage=" + e.errorMessage);
    done();
  });
};

QUnit.test('nfcNormalTest001', ConnectionProfileNormalTest.nfcNormalTest001);

/**
 * NFCの接続状態を有効にするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /connection/nfc?serviceId=xxxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
ConnectionProfileNormalTest.nfcNormalTest002 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: dConnectSDK.constants.connection.PROFILE_NAME,
    attribute: dConnectSDK.constants.connection.ATTR_NFC,
    params: {
      serviceId: getCurrentServiceId()
    }
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode), "errorCode=" + e.errorCode + ", errorMessage=" + e.errorMessage);
    done();
  });
};

QUnit.test('nfcNormalTest002', ConnectionProfileNormalTest.nfcNormalTest002);

/**
 * NFCの接続状態を無効にするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: DELETE<br/>
 * Path: /connection/nfc?serviceId=xxxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
ConnectionProfileNormalTest.nfcNormalTest003 = function(assert) {
  let done = assert.async();
  sdk.delete({
    profile: dConnectSDK.constants.connection.PROFILE_NAME,
    attribute: dConnectSDK.constants.connection.ATTR_NFC,
    params: {
      serviceId: getCurrentServiceId()
    }
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode), "errorCode=" + e.errorCode + ", errorMessage=" + e.errorMessage);
    done();
  });
};

QUnit.test('nfcNormalTest003', ConnectionProfileNormalTest.nfcNormalTest003);

/**
 * Connectionプロファイルのonnfcchangeを登録するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /connection/onnfcchange?serviceId=xxxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * ・イベント通知が送られてくること。<br/>
 * </p>
 */
ConnectionProfileNormalTest.onNfcChangeNormalTest001 = function(assert) {
  let params = {
    profile: dConnectSDK.constants.connection.PROFILE_NAME,
    attribute: dConnectSDK.constants.connection.ATTR_ON_NFC_CHANGE,
    params: {
      serviceId: getCurrentServiceId()
    }
  };
  openWebsocket(params, assert, 10000, message => {
    let json = JSON.parse(message);
    if (json.profile === dConnectSDK.constants.connection.PROFILE_NAME
      && json.attribute === dConnectSDK.constants.connection.ATTR_ON_NFC_CHANGE) {
      if (json.connectStatus) {
        assert.ok(true, message);
        return true;
      }
    }
    assert.ok(false, message);
    return false;
  });
};

QUnit.test('onNfcChangeNormalTest001', ConnectionProfileNormalTest.onNfcChangeNormalTest001);

/**
 * BLEの接続状態を取得にするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /connection/ble?serviceId=xxxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * ・enableにtrueかfalseが返ってくること。<br/>
 * </p>
 */
ConnectionProfileNormalTest.bleNormalTest001 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: dConnectSDK.constants.connection.PROFILE_NAME,
    attribute: dConnectSDK.constants.connection.ATTR_BLE,
    params: {
      serviceId: getCurrentServiceId()
    }
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    assert.ok(json.enable != undefined, 'enable=' + json.enable);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode), "errorCode=" + e.errorCode + ", errorMessage=" + e.errorMessage);
    done();
  });
};

QUnit.test('bleNormalTest001', ConnectionProfileNormalTest.bleNormalTest001);

/**
 * BLEの接続状態を有効にするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /connection/ble?serviceId=xxxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
ConnectionProfileNormalTest.bleNormalTest002 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: dConnectSDK.constants.connection.PROFILE_NAME,
    attribute: dConnectSDK.constants.connection.ATTR_BLE,
    params: {
      serviceId: getCurrentServiceId()
    }
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode), "errorCode=" + e.errorCode + ", errorMessage=" + e.errorMessage);
    done();
  });
};

QUnit.test('bleNormalTest002', ConnectionProfileNormalTest.bleNormalTest002);

/**
 * BLEの接続状態を無効にするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: DELETE<br/>
 * Path: /connection/ble?serviceId=xxxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
ConnectionProfileNormalTest.bleNormalTest003 = function(assert) {
  let done = assert.async();
  sdk.delete({
    profile: dConnectSDK.constants.connection.PROFILE_NAME,
    attribute: dConnectSDK.constants.connection.ATTR_BLE,
    params: {
      serviceId: getCurrentServiceId()
    }
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode), "errorCode=" + e.errorCode + ", errorMessage=" + e.errorMessage);
    done();
  });
};

QUnit.test('bleNormalTest003', ConnectionProfileNormalTest.bleNormalTest003);

/**
 * Connectionプロファイルのonblechangeを登録するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /connection/onblechange?serviceId=xxxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * ・イベント通知が送られてくること。<br/>
 * </p>
 */
ConnectionProfileNormalTest.onBleChangeNormalTest001 = function(assert) {
  let params = {
    profile: dConnectSDK.constants.connection.PROFILE_NAME,
    attribute: dConnectSDK.constants.connection.ATTR_ON_BLE_CHANGE,
    params: {
      serviceId: getCurrentServiceId()
    }
  };
  openWebsocket(params, assert, 10000, message => {
    let json = JSON.parse(message);
    if (json.profile === dConnectSDK.constants.connection.PROFILE_NAME
      && json.attribute === dConnectSDK.constants.connection.ATTR_ON_BLE_CHANGE) {
      if (json.connectStatus) {
        assert.ok(true, message);
        return true;
      }
    }
    assert.ok(false, message);
    return false;
  });
};

QUnit.test('onBleChangeNormalTest001', ConnectionProfileNormalTest.onBleChangeNormalTest001);
