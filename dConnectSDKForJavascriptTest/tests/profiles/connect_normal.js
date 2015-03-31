module('Connect Profile Normal Test', {
  setup: function() {
    init();
  }
});

/**
 * Connectプロファイルのテストを行うクラス。
 * @class
 */
var ConnectProfileNormalTest = {};

/**
 * Wi-Fiの接続状態を取得するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /connect/wifi?serviceId=xxxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * ・enableにtrueかfalseが返ってくること。<br/>
 * </p>
 */
ConnectProfileNormalTest.wifiTest001 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.connect.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.connect.ATTR_WIFI);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        var uri = builder.build();
        dConnect.get(uri, null, function(json) {
              assert.ok(true, 'result=' + json.result);
              assert.ok(json.enable !== undefined, 'enable=' + json.enable);
              QUnit.start();
            }, function(errorCode, errorMessage) {
              assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
              QUnit.start();
            });
      }, function(errorCode, errorMessage) {
        assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};

QUnit.asyncTest('wifiNormalTest001', ConnectProfileNormalTest.wifiTest001);

/**
 * Wi-Fiの接続状態を有効にするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /connect/wifi?serviceId=xxxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
ConnectProfileNormalTest.wifiNormalTest001 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.connect.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.connect.ATTR_WIFI);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        var uri = builder.build();
        dConnect.put(uri, null, null, function(json) {
              assert.ok(true, 'result=' + json.result);
              QUnit.start();
            }, function(errorCode, errorMessage) {
              assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
              QUnit.start();
            });
      }, function(errorCode, errorMessage) {
        assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('wifiNormalTest001', ConnectProfileNormalTest.wifiNormalTest001);

/**
 * Wi-Fiの接続状態を無効にするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: DELETE<br/>
 * Path: /connect/wifi?serviceId=xxxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
ConnectProfileNormalTest.wifiNormalTest002 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.connect.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.connect.ATTR_WIFI);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        var uri = builder.build();
        dConnect.delete(uri, null, function(json) {
              assert.ok(true, 'result=' + json.result);
              QUnit.start();
            }, function(errorCode, errorMessage) {
              assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
              QUnit.start();
            });
      }, function(errorCode, errorMessage) {
        assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('wifiNormalTest002', ConnectProfileNormalTest.wifiNormalTest002);

/**
 * Connectプロファイルのonwifichangeを登録するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /connect/onwifichange?serviceId=xxxx&sessionKey=xxxxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * ・イベント通知が送られてくること。<br/>
 * </p>
 */
ConnectProfileNormalTest.onWifichangeTest001 = function(assert) {
  var builder = new dConnect.URIBuilder();
  builder.setProfile(dConnect.constants.connect.PROFILE_NAME);
  builder.setAttribute(dConnect.constants.connect.ATTR_ON_WIFI_CHANGE);
  openWebsocket(builder, assert, 10000, function(message) {
    var json = JSON.parse(message);
    if (json.profile === dConnect.constants.connect.PROFILE_NAME && json.attribute === dConnect.constants.connect.ATTR_ON_WIFI_CHANGE) {
      if (json.connectStatus) {
        assert.ok(true, message);
        return true;
      }
    }
    assert.ok(false, message);
    return false;
  });
};

QUnit.asyncTest('onwifichangeNormalTest001', ConnectProfileNormalTest.onWifichangeTest001);

/**
 * Bluetoothの接続状態を取得するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /connect/bluetooth?serviceId=xxxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * ・enableにtrueかfalseが返ってくること。<br/>
 * </p>
 */
ConnectProfileNormalTest.bluetoothNormalTest001 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.connect.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.connect.ATTR_BLUETOOTH);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        var uri = builder.build();
        dConnect.get(uri, null, function(json) {
              assert.ok(true, 'result=' + json.result);
              assert.ok(json.enable !== undefined, 'enable=' + json.enable);
              QUnit.start();
            }, function(errorCode, errorMessage) {
              assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
              QUnit.start();
            });
      }, function(errorCode, errorMessage) {
        assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};

QUnit.asyncTest('bluetoothNormalTest001', ConnectProfileNormalTest.bluetoothNormalTest001);

/**
 * Bluetoothの接続状態を有効にするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /connect/bluetooth?serviceId=xxxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
ConnectProfileNormalTest.bluetoothNormalTest002 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.connect.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.connect.ATTR_BLUETOOTH);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        var uri = builder.build();
        dConnect.put(uri, null, null, function(json) {
              assert.ok(true, 'result=' + json.result);
              QUnit.start();
            }, function(errorCode, errorMessage) {
              assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
              QUnit.start();
            });
      }, function(errorCode, errorMessage) {
        assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};

QUnit.asyncTest('bluetoothNormalTest002', ConnectProfileNormalTest.bluetoothNormalTest002);

/**
 * Bluetoothの接続状態を無効にするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: DELETE<br/>
 * Path: /connect/bluetooth?serviceId=xxxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
ConnectProfileNormalTest.bluetoothNormalTest003 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.connect.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.connect.ATTR_BLUETOOTH);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        var uri = builder.build();
        dConnect.delete(uri, null, function(json) {
              assert.ok(true, 'result=' + json.result);
              QUnit.start();
            }, function(errorCode, errorMessage) {
              assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
              QUnit.start();
            });
      }, function(errorCode, errorMessage) {
        assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};

QUnit.asyncTest('bluetoothNormalTest003', ConnectProfileNormalTest.bluetoothNormalTest003);

/**
 * Connectプロファイルのonbluetoothchangeを登録するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /connect/onbluetoothchange?serviceId=xxxx&sessionKey=xxxxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * ・イベント通知が送られてくること。<br/>
 * </p>
 */
ConnectProfileNormalTest.onBluetoothChangeNormalTest003 = function(assert) {
  var builder = new dConnect.URIBuilder();
  builder.setProfile(dConnect.constants.connect.PROFILE_NAME);
  builder.setAttribute(dConnect.constants.connect.ATTR_ON_BLUETOOTH_CHANGE);
  openWebsocket(builder, assert, 10000, function(message) {
    var json = JSON.parse(message);
    if (json.profile === dConnect.constants.connect.PROFILE_NAME && json.attribute === dConnect.constants.connect.ATTR_ON_BLUETOOTH_CHANGE) {
      if (json.connectStatus) {
        assert.ok(true, message);
        return true;
      }
    }
    assert.ok(false, message);
    return false;
  });
};

QUnit.asyncTest('onBluetoothChangeNormalTest003', ConnectProfileNormalTest.onBluetoothChangeNormalTest003);

/**
 * Bluetoothの検索可能状態を有効にするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /connect/bluetooth/discoverable?serviceId=xxxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
ConnectProfileNormalTest.discoverableNormalTest001 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.connect.PROFILE_NAME);
        builder.setInterface(dConnect.constants.connect.INTERFACE_BLUETOOTH);
        builder.setAttribute(dConnect.constants.connect.ATTR_DISCOVERABLE);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        var uri = builder.build();
        dConnect.put(uri, null, null, function(json) {
              assert.ok(true, 'result=' + json.result);
              QUnit.start();
            }, function(errorCode, errorMessage) {
              assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
              QUnit.start();
            });
      }, function(errorCode, errorMessage) {
        assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};

QUnit.asyncTest('discoverableNormalTest001', ConnectProfileNormalTest.discoverableNormalTest001);

/**
 * Bluetoothの検索可能状態を無効にするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: DELETE<br/>
 * Path: /connect/bluetooth/discoverable?serviceId=xxxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
ConnectProfileNormalTest.discoverableNormalTest002 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.connect.PROFILE_NAME);
        builder.setInterface(dConnect.constants.connect.INTERFACE_BLUETOOTH);
        builder.setAttribute(dConnect.constants.connect.ATTR_DISCOVERABLE);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        var uri = builder.build();
        dConnect.delete(uri, null, function(json) {
              assert.ok(true, 'result=' + json.result);
              QUnit.start();
            }, function(errorCode, errorMessage) {
              assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
              QUnit.start();
            });
      }, function(errorCode, errorMessage) {
        assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};

QUnit.asyncTest('discoverableNormalTest002', ConnectProfileNormalTest.discoverableNormalTest002);

/**
 * NFCの接続状態を取得にするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /connect/nfc?serviceId=xxxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * ・enableにtrueかfalseが返ってくること。<br/>
 * </p>
 */
ConnectProfileNormalTest.nfcNormalTest001 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.connect.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.connect.ATTR_NFC);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        var uri = builder.build();
        dConnect.get(uri, null, function(json) {
              assert.ok(true, 'result=' + json.result);
              assert.ok(json.enable !== undefined, 'enable=' + json.enable);
              QUnit.start();
            }, function(errorCode, errorMessage) {
              assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
              QUnit.start();
            });
      }, function(errorCode, errorMessage) {
        assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};

QUnit.asyncTest('nfcNormalTest001', ConnectProfileNormalTest.nfcNormalTest001);

/**
 * NFCの接続状態を有効にするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /connect/nfc?serviceId=xxxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
ConnectProfileNormalTest.nfcNormalTest002 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.connect.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.connect.ATTR_NFC);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        var uri = builder.build();
        dConnect.put(uri, null, null, function(json) {
              assert.ok(true, 'result=' + json.result);
              QUnit.start();
            }, function(errorCode, errorMessage) {
              assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
              QUnit.start();
            });
      }, function(errorCode, errorMessage) {
        assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};

QUnit.asyncTest('nfcNormalTest002', ConnectProfileNormalTest.nfcNormalTest002);

/**
 * NFCの接続状態を無効にするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: DELETE<br/>
 * Path: /connect/nfc?serviceId=xxxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
ConnectProfileNormalTest.nfcNormalTest003 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.connect.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.connect.ATTR_NFC);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        var uri = builder.build();
        dConnect.delete(uri, null, function(json) {
              assert.ok(true, 'result=' + json.result);
              QUnit.start();
            }, function(errorCode, errorMessage) {
              assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
              QUnit.start();
            });
      }, function(errorCode, errorMessage) {
        assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};

QUnit.asyncTest('nfcNormalTest003', ConnectProfileNormalTest.nfcNormalTest003);

/**
 * Connectプロファイルのonnfcchangeを登録するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /connect/onnfcchange?serviceId=xxxx&sessionKey=xxxxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * ・イベント通知が送られてくること。<br/>
 * </p>
 */
ConnectProfileNormalTest.onNfcChangeNormalTest001 = function(assert) {
  var builder = new dConnect.URIBuilder();
  builder.setProfile(dConnect.constants.connect.PROFILE_NAME);
  builder.setAttribute(dConnect.constants.connect.ATTR_ON_NFC_CHANGE);
  openWebsocket(builder, assert, 10000, function(message) {
    var json = JSON.parse(message);
    if (json.profile === dConnect.constants.connect.PROFILE_NAME && json.attribute === dConnect.constants.connect.ATTR_ON_NFC_CHANGE) {
      if (json.connectStatus) {
        assert.ok(true, message);
        return true;
      }
    }
    assert.ok(false, message);
    return false;
  });
};

QUnit.asyncTest('onNfcChangeNormalTest001', ConnectProfileNormalTest.onNfcChangeNormalTest001);

/**
 * BLEの接続状態を取得にするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /connect/ble?serviceId=xxxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * ・enableにtrueかfalseが返ってくること。<br/>
 * </p>
 */
ConnectProfileNormalTest.bleNormalTest001 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.connect.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.connect.ATTR_BLE);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        var uri = builder.build();
        dConnect.get(uri, null, function(json) {
              assert.ok(true, 'result=' + json.result);
              assert.ok(json.enable != undefined, 'enable=' + json.enable);
              QUnit.start();
            }, function(errorCode, errorMessage) {
              assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
              QUnit.start();
            });
      }, function(errorCode, errorMessage) {
        assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};

QUnit.asyncTest('bleNormalTest001', ConnectProfileNormalTest.bleNormalTest001);

/**
 * BLEの接続状態を有効にするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /connect/ble?serviceId=xxxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
ConnectProfileNormalTest.bleNormalTest002 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.connect.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.connect.ATTR_BLE);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        var uri = builder.build();
        dConnect.put(uri, null, null, function(json) {
              assert.ok(true, 'result=' + json.result);
              QUnit.start();
            }, function(errorCode, errorMessage) {
              assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
              QUnit.start();
            });
      }, function(errorCode, errorMessage) {
        assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};

QUnit.asyncTest('bleNormalTest002', ConnectProfileNormalTest.bleNormalTest002);

/**
 * BLEの接続状態を無効にするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: DELETE<br/>
 * Path: /connect/ble?serviceId=xxxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
ConnectProfileNormalTest.bleNormalTest003 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.connect.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.connect.ATTR_BLE);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        var uri = builder.build();
        dConnect.delete(uri, null, function(json) {
              assert.ok(true, 'result=' + json.result);
              QUnit.start();
            }, function(errorCode, errorMessage) {
              assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
              QUnit.start();
            });
      }, function(errorCode, errorMessage) {
        assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};

QUnit.asyncTest('bleNormalTest003', ConnectProfileNormalTest.bleNormalTest003);

/**
 * Connectプロファイルのonblechangeを登録するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /connect/onblechange?serviceId=xxxx&sessionKey=xxxxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * ・イベント通知が送られてくること。<br/>
 * </p>
 */
ConnectProfileNormalTest.onBleChangeNormalTest001 = function(assert) {
  var builder = new dConnect.URIBuilder();
  builder.setProfile(dConnect.constants.connect.PROFILE_NAME);
  builder.setAttribute(dConnect.constants.connect.ATTR_ON_BLE_CHANGE);
  openWebsocket(builder, assert, 10000, function(message) {
    var json = JSON.parse(message);
    if (json.profile === dConnect.constants.connect.PROFILE_NAME && json.attribute === dConnect.constants.connect.ATTR_ON_BLE_CHANGE) {
      if (json.connectStatus) {
        assert.ok(true, message);
        return true;
      }
    }
    assert.ok(false, message);
    return false;
  });
};

QUnit.asyncTest('onBleChangeNormalTest001', ConnectProfileNormalTest.onBleChangeNormalTest001);
