module('Connection Profile Normal Test', {
  setup: function() {
    init();
  }
});

/**
 * Connectionプロファイルのテストを行うクラス。
 * @class
 */
var ConnectionProfileNormalTest = {};

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
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.connection.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.connection.ATTR_WIFI);
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

QUnit.asyncTest('wifiNormalTest001', ConnectionProfileNormalTest.wifiTest001);

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
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.connection.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.connection.ATTR_WIFI);
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
QUnit.asyncTest('wifiNormalTest001', ConnectionProfileNormalTest.wifiNormalTest001);

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
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.connection.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.connection.ATTR_WIFI);
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
QUnit.asyncTest('wifiNormalTest002', ConnectionProfileNormalTest.wifiNormalTest002);

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
  var builder = new dConnect.URIBuilder();
  builder.setProfile(dConnect.constants.connection.PROFILE_NAME);
  builder.setAttribute(dConnect.constants.connection.ATTR_ON_WIFI_CHANGE);
  openWebsocket(builder, assert, 10000, function(message) {
    var json = JSON.parse(message);
    if (json.profile === dConnect.constants.connection.PROFILE_NAME && json.attribute === dConnect.constants.connection.ATTR_ON_WIFI_CHANGE) {
      if (json.connectStatus) {
        assert.ok(true, message);
        return true;
      }
    }
    assert.ok(false, message);
    return false;
  });
};

QUnit.asyncTest('onwifichangeNormalTest001', ConnectionProfileNormalTest.onWifichangeTest001);

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
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.connection.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.connection.ATTR_BLUETOOTH);
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

QUnit.asyncTest('bluetoothNormalTest001', ConnectionProfileNormalTest.bluetoothNormalTest001);

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
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.connection.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.connection.ATTR_BLUETOOTH);
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

QUnit.asyncTest('bluetoothNormalTest002', ConnectionProfileNormalTest.bluetoothNormalTest002);

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
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.connection.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.connection.ATTR_BLUETOOTH);
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

QUnit.asyncTest('bluetoothNormalTest003', ConnectionProfileNormalTest.bluetoothNormalTest003);

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
  var builder = new dConnect.URIBuilder();
  builder.setProfile(dConnect.constants.connection.PROFILE_NAME);
  builder.setAttribute(dConnect.constants.connection.ATTR_ON_BLUETOOTH_CHANGE);
  openWebsocket(builder, assert, 10000, function(message) {
    var json = JSON.parse(message);
    if (json.profile === dConnect.constants.connection.PROFILE_NAME && json.attribute === dConnect.constants.connection.ATTR_ON_BLUETOOTH_CHANGE) {
      if (json.connectStatus) {
        assert.ok(true, message);
        return true;
      }
    }
    assert.ok(false, message);
    return false;
  });
};

QUnit.asyncTest('onBluetoothChangeNormalTest003', ConnectionProfileNormalTest.onBluetoothChangeNormalTest003);

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
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.connection.PROFILE_NAME);
        builder.setInterface(dConnect.constants.connection.INTERFACE_BLUETOOTH);
        builder.setAttribute(dConnect.constants.connection.ATTR_DISCOVERABLE);
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

QUnit.asyncTest('discoverableNormalTest001', ConnectionProfileNormalTest.discoverableNormalTest001);

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
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.connection.PROFILE_NAME);
        builder.setInterface(dConnect.constants.connection.INTERFACE_BLUETOOTH);
        builder.setAttribute(dConnect.constants.connection.ATTR_DISCOVERABLE);
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

QUnit.asyncTest('discoverableNormalTest002', ConnectionProfileNormalTest.discoverableNormalTest002);

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
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.connection.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.connection.ATTR_NFC);
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

QUnit.asyncTest('nfcNormalTest001', ConnectionProfileNormalTest.nfcNormalTest001);

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
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.connection.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.connection.ATTR_NFC);
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

QUnit.asyncTest('nfcNormalTest002', ConnectionProfileNormalTest.nfcNormalTest002);

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
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.connection.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.connection.ATTR_NFC);
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

QUnit.asyncTest('nfcNormalTest003', ConnectionProfileNormalTest.nfcNormalTest003);

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
  var builder = new dConnect.URIBuilder();
  builder.setProfile(dConnect.constants.connection.PROFILE_NAME);
  builder.setAttribute(dConnect.constants.connection.ATTR_ON_NFC_CHANGE);
  openWebsocket(builder, assert, 10000, function(message) {
    var json = JSON.parse(message);
    if (json.profile === dConnect.constants.connection.PROFILE_NAME && json.attribute === dConnect.constants.connection.ATTR_ON_NFC_CHANGE) {
      if (json.connectStatus) {
        assert.ok(true, message);
        return true;
      }
    }
    assert.ok(false, message);
    return false;
  });
};

QUnit.asyncTest('onNfcChangeNormalTest001', ConnectionProfileNormalTest.onNfcChangeNormalTest001);

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
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.connection.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.connection.ATTR_BLE);
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

QUnit.asyncTest('bleNormalTest001', ConnectionProfileNormalTest.bleNormalTest001);

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
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.connection.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.connection.ATTR_BLE);
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

QUnit.asyncTest('bleNormalTest002', ConnectionProfileNormalTest.bleNormalTest002);

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
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.connection.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.connection.ATTR_BLE);
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

QUnit.asyncTest('bleNormalTest003', ConnectionProfileNormalTest.bleNormalTest003);

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
  var builder = new dConnect.URIBuilder();
  builder.setProfile(dConnect.constants.connection.PROFILE_NAME);
  builder.setAttribute(dConnect.constants.connection.ATTR_ON_BLE_CHANGE);
  openWebsocket(builder, assert, 10000, function(message) {
    var json = JSON.parse(message);
    if (json.profile === dConnect.constants.connection.PROFILE_NAME && json.attribute === dConnect.constants.connection.ATTR_ON_BLE_CHANGE) {
      if (json.connectStatus) {
        assert.ok(true, message);
        return true;
      }
    }
    assert.ok(false, message);
    return false;
  });
};

QUnit.asyncTest('onBleChangeNormalTest001', ConnectionProfileNormalTest.onBleChangeNormalTest001);
