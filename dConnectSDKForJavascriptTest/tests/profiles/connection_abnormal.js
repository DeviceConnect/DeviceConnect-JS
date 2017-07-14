module('Connection Profile Abnormal Test', {
  setup: function() {
    init();
  }
});

/**
 * Connectionプロファイルのテストを行うクラス。
 * @class
 */
var ConnectionProfileAbnormalTest = {};

/**
 * 定義されていないメソッドでWi-Fiの接続状態にアクセスするテストを行う。
 *<h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /connection/wifi?serviceId=xxxx<br/>
 *</p>
 * <h3>【期待する動作】</h3>
 *<p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
ConnectionProfileAbnormalTest.wifiAbnormalTest001 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile(dConnect.constants.connection.PROFILE_NAME);
  builder.setAttribute(dConnect.constants.connection.ATTR_WIFI);
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
};
QUnit.asyncTest('wifiAbnormalTest001(Calling a post method that does not support.)', 
    ConnectionProfileAbnormalTest.wifiAbnormalTest001);

/**
 * 定義されていないメソッドでBluetoothの接続状態にアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 *<p id="test">
 * Method: POST<br/>
 * Path: /connection/bluetooth?serviceId=xxxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 *<p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
ConnectionProfileAbnormalTest.bluetoothAbnormalTest001 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile(dConnect.constants.connection.PROFILE_NAME);
  builder.setAttribute(dConnect.constants.connection.ATTR_BLUETOOTH);
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
};
QUnit.asyncTest('bluetoothAbnormalTest001(Calling a post method that does not support.)',
    ConnectionProfileAbnormalTest.bluetoothAbnormalTest001);

/**
 * 定義されていないメソッドでBluetoothの検索可能状態にアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 *<p id="test">
 * Method: GET<br/>
 * Path: /connection/bluetooth/discoverable?serviceId=xxxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 *<p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
ConnectionProfileAbnormalTest.discoverableAbnormalTest001 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile(dConnect.constants.connection.PROFILE_NAME);
  builder.setInterface(dConnect.constants.connection.INTERFACE_BLUETOOTH);
  builder.setAttribute(dConnect.constants.connection.ATTR_DISCOVERABLE);
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
};
QUnit.asyncTest('discoverableAbnormalTest001(Calling a post method that does not support.)',
    ConnectionProfileAbnormalTest.discoverableAbnormalTest001);

/**
 * 定義されていないメソッドでBluetoothの検索可能状態にアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * Method: POST <br/>
 * Path: /connection/bluetooth/discoverable?serviceId=xxxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
ConnectionProfileAbnormalTest.discoverableAbnormalTest002 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile(dConnect.constants.connection.PROFILE_NAME);
  builder.setInterface(dConnect.constants.connection.INTERFACE_BLUETOOTH);
  builder.setAttribute(dConnect.constants.connection.ATTR_DISCOVERABLE);
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
};
QUnit.asyncTest('discoverableAbnormalTest002(Calling a post method that does not support.)',
    ConnectionProfileAbnormalTest.discoverableAbnormalTest002);

/**
 * 定義されていないメソッドでnfcの状態にアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST <br/>
 * Path: /connection/nfc?serviceId=xxxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
ConnectionProfileAbnormalTest.nfcAbnormalTest001 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile(dConnect.constants.connection.PROFILE_NAME);
  builder.setAttribute(dConnect.constants.connection.ATTR_NFC);
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
};
QUnit.asyncTest('nfcAbnormalTest001(Calling a post method that does not support.)',
    ConnectionProfileAbnormalTest.nfcAbnormalTest001);

/**
 * 定義されていないメソッドでBLEの状態にアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * Method: POST <br/>
 * Path: /connection/ble?serviceId=xxxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id=expected>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
ConnectionProfileAbnormalTest.bleAbnormalTest001 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile(dConnect.constants.connection.PROFILE_NAME);
  builder.setAttribute(dConnect.constants.connection.ATTR_BLE);
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
};
QUnit.asyncTest('bleAbnormalTest001(Calling a post method that does not support.)', 
    ConnectionProfileAbnormalTest.bleAbnormalTest001);
