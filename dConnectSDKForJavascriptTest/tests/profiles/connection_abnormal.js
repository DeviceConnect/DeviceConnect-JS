QUnit.module('Connection Profile Abnormal Test', {
  before: function() {
    init();
  }
});

/**
 * Connectionプロファイルのテストを行うクラス。
 * @class
 */
let ConnectionProfileAbnormalTest = {};

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
  let serviceId = getCurrentServiceId();
  let done = assert.async();
  sdk.post({
    profile: dConnectSDK.constants.connection.PROFILE_NAME,
    attribute: dConnectSDK.constants.connection.ATTR_WIFI,
    serviceId: serviceId
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 8);
    done();
  });
};
QUnit.test('wifiAbnormalTest001(Calling a post method that does not support.)',
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
  let serviceId = getCurrentServiceId();
  let done = assert.async();
  sdk.post({
    profile: dConnectSDK.constants.connection.PROFILE_NAME,
    attribute: dConnectSDK.constants.connection.ATTR_BLUETOOTH,
    serviceId: serviceId
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 8);
    done();
  });
};
QUnit.test('bluetoothAbnormalTest001(Calling a post method that does not support.)',
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
  let serviceId = getCurrentServiceId();
  let done = assert.async();
  sdk.get({
    profile: dConnectSDK.constants.connection.PROFILE_NAME,
    interface: dConnectSDK.constants.connection.INTERFACE_BLUETOOTH,
    attribute: dConnectSDK.constants.connection.ATTR_DISCOVERABLE,
    serviceId: serviceId
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 8);
    done();
  });
};
QUnit.test('discoverableAbnormalTest001(Calling a post method that does not support.)',
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
  let serviceId = getCurrentServiceId();
  let done = assert.async();
  sdk.get({
    profile: dConnectSDK.constants.connection.PROFILE_NAME,
    interface: dConnectSDK.constants.connection.INTERFACE_BLUETOOTH,
    attribute: dConnectSDK.constants.connection.ATTR_DISCOVERABLE,
    serviceId: serviceId
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 8);
    done();
  });
};
QUnit.test('discoverableAbnormalTest002(Calling a post method that does not support.)',
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
  let serviceId = getCurrentServiceId();
  let done = assert.async();
  sdk.post({
    profile: dConnectSDK.constants.connection.PROFILE_NAME,
    attribute: dConnectSDK.constants.connection.ATTR_NFC,
    serviceId: serviceId
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 8);
    done();
  });
};
QUnit.test('nfcAbnormalTest001(Calling a post method that does not support.)',
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
  let serviceId = getCurrentServiceId();
  let done = assert.async();
  sdk.post({
    profile: dConnectSDK.constants.connection.PROFILE_NAME,
    attribute: dConnectSDK.constants.connection.ATTR_BLE,
    serviceId: serviceId
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 8);
    done();
  });
};
QUnit.test('bleAbnormalTest001(Calling a post method that does not support.)',
    ConnectionProfileAbnormalTest.bleAbnormalTest001);
