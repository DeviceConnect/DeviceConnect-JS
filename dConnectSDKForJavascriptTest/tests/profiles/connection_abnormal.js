module('Connect Profile Abnormal Test', {
  setup: function() {
    init();
  }
});

/**
 * Batteryプロファイルのテストを行うクラス。
 * @class
 */
var ConnectProfileAbnormalTest = {};

/**
 * 定義されていないメソッドでWi-Fiの接続状態にアクセスするテストを行う。
 *<h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /connect/wifi?serviceId=xxxx<br/>
 *</p>
 * <h3>【期待する動作】</h3>
 *<p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
ConnectProfileAbnormalTest.wifiAbnormalTest001 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.connect.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.connect.ATTR_WIFI);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        var uri = builder.build();
        dConnect.post(uri, null, null, function(json) {
              assert.ok(false, 'json: ' + JSON.stringify(json));
              QUnit.start();
            }, function(errorCode, errorMessage) {
              if (errorCode == 8) {
                assert.ok(true, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
              } else if (checkErrorCode(errorCode)) {
                assert.ok(true, "not support");
              } else {
                assert.ok(false, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
              }
              QUnit.start();
            });
      }, function(errorCode, errorMessage) {
        assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('wifiAbnormalTest001(Calling a post method that does not support.)', 
    ConnectProfileAbnormalTest.wifiAbnormalTest001);

/**
 * 定義されていないメソッドでBluetoothの接続状態にアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 *<p id="test">
 * Method: POST<br/>
 * Path: /connect/bluetooth?serviceId=xxxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 *<p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
ConnectProfileAbnormalTest.bluetoothAbnormalTest001 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.connect.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.connect.ATTR_BLUETOOTH);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        var uri = builder.build();
        dConnect.post(uri, null, null, function(json) {
              assert.ok(false, 'json: ' + JSON.stringify(json));
              QUnit.start();
            }, function(errorCode, errorMessage) {
              if (errorCode == 8) {
                assert.ok(true, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
              } else if (checkErrorCode(errorCode)) {
                assert.ok(true, "not support");
              } else {
                assert.ok(false, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
              }
              QUnit.start();
            });
      }, function(errorCode, errorMessage) {
        assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('bluetoothAbnormalTest001(Calling a post method that does not support.)',
    ConnectProfileAbnormalTest.bluetoothAbnormalTest001);

/**
 * 定義されていないメソッドでBluetoothの検索可能状態にアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 *<p id="test">
 * Method: GET<br/>
 * Path: /connect/bluetooth/discoverable?serviceId=xxxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 *<p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
ConnectProfileAbnormalTest.discoverableAbnormalTest001 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.connect.PROFILE_NAME);
        builder.setInterface(dConnect.constants.connect.INTERFACE_BLUETOOTH);
        builder.setAttribute(dConnect.constants.connect.ATTR_DISCOVERABLE);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        var uri = builder.build();
        dConnect.get(uri, null, function(json) {
              assert.ok(false, 'json: ' + JSON.stringify(json));
              QUnit.start();
            }, function(errorCode, errorMessage) {
              if (errorCode == 8) {
                assert.ok(true, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
              } else if (checkErrorCode(errorCode)) {
                assert.ok(true, "not support");
              } else {
                assert.ok(false, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
              }
              QUnit.start();
            });
      }, function(errorCode, errorMessage) {
        assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('discoverableAbnormalTest001(Calling a post method that does not support.)',
    ConnectProfileAbnormalTest.discoverableAbnormalTest001);

/**
 * 定義されていないメソッドでBluetoothの検索可能状態にアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * Method: POST <br/>
 * Path: /connect/bluetooth/discoverable?serviceId=xxxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
ConnectProfileAbnormalTest.discoverableAbnormalTest002 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.connect.PROFILE_NAME);
        builder.setInterface(dConnect.constants.connect.INTERFACE_BLUETOOTH);
        builder.setAttribute(dConnect.constants.connect.ATTR_DISCOVERABLE);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        var uri = builder.build();
        dConnect.post(uri, null, null, function(json) {
              assert.ok(false, 'json: ' + JSON.stringify(json));
              QUnit.start();
            }, function(errorCode, errorMessage) {
              if (errorCode == 8) {
                assert.ok(true, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
              } else if (checkErrorCode(errorCode)) {
                assert.ok(true, "not support");
              } else {
                assert.ok(false, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
              }
              QUnit.start();
            });
      }, function(errorCode, errorMessage) {
        assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('discoverableAbnormalTest002(Calling a post method that does not support.)',
    ConnectProfileAbnormalTest.discoverableAbnormalTest002);

/**
 * 定義されていないメソッドでnfcの状態にアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST <br/>
 * Path: /connect/nfc?serviceId=xxxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
ConnectProfileAbnormalTest.nfcAbnormalTest001 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.connect.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.connect.ATTR_NFC);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        var uri = builder.build();
        dConnect.post(uri, null, null, function(json) {
              assert.ok(false, 'json: ' + JSON.stringify(json));
              QUnit.start();
            }, function(errorCode, errorMessage) {
              if (errorCode == 8) {
                assert.ok(true, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
              } else if (checkErrorCode(errorCode)) {
                assert.ok(true, "not support");
              } else {
                assert.ok(false, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
              }
              QUnit.start();
            });
      }, function(errorCode, errorMessage) {
        assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('nfcAbnormalTest001(Calling a post method that does not support.)',
    ConnectProfileAbnormalTest.nfcAbnormalTest001);

/**
 * 定義されていないメソッドでBLEの状態にアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * Method: POST <br/>
 * Path: /connect/ble?serviceId=xxxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id=expected>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
ConnectProfileAbnormalTest.bleAbnormalTest001 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.connect.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.connect.ATTR_BLE);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        var uri = builder.build();
        dConnect.post(uri, null, null, function(json) {
              assert.ok(false, 'json: ' + JSON.stringify(json));
              QUnit.start();
            }, function(errorCode, errorMessage) {
              if (errorCode == 8) {
                assert.ok(true, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
              } else if (checkErrorCode(errorCode)) {
                assert.ok(true, "not support");
              } else {
                assert.ok(false, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
              }
              QUnit.start();
            });
      }, function(errorCode, errorMessage) {
        assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('bleAbnormalTest001(Calling a post method that does not support.)', 
    ConnectProfileAbnormalTest.bleAbnormalTest001);
