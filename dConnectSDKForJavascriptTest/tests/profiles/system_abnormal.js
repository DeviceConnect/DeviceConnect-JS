QUnit.module('System Profile Abnormal Test', {
  before: function() {
    init();
  }
});

/**
 * Systemプロファイルの異常系テストを行うクラス。
 * @class
 */
let SystemProfileAbnormalTest = {};

/**
 * 定義されていないPUTメソッドでスマートフォンのシステム情報にアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /system?serviceId=xxxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * ・errCodeに3が返ってくること。<br/>
 * </p>
 */
SystemProfileAbnormalTest.systemAbnormalTest001 = function(assert) {
  let serviceId = getCurrentServiceId();
  let done = assert.async();
  sdk.put({
    profile: dConnectSDK.constants.system.PROFILE_NAME,
    serviceId: serviceId
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 3);
    done();
  });
};

QUnit.test('systemAbnormalTest001(put)', SystemProfileAbnormalTest.systemAbnormalTest001);

/**
 * 定義されていないPOSTメソッドでスマートフォンのシステム情報にアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /system?serviceId=xxxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * ・errCodeに3が返ってくること。<br/>
 * </p>
 */
SystemProfileAbnormalTest.systemAbnormalTest002 = function(assert) {
  let serviceId = getCurrentServiceId();
  let done = assert.async();
  sdk.post({
    profile: dConnectSDK.constants.system.PROFILE_NAME,
    serviceId: serviceId
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 3);
    done();
  });
};
QUnit.test('systemAbnormalTest002(post)', SystemProfileAbnormalTest.systemAbnormalTest002);

/**
 * 定義されていないDELETEメソッドでスマートフォンのシステム情報にアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: DELETE<br/>
 * Path: /system?serviceId=xxxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * ・errCodeに3が返ってくること。<br/>
 * </p>
 */
SystemProfileAbnormalTest.systemAbnormalTest003 = function(assert) {
  let serviceId = getCurrentServiceId();
  let done = assert.async();
  sdk.delete({
    profile: dConnectSDK.constants.system.PROFILE_NAME,
    serviceId: serviceId
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 3);
    done();
  });
};
QUnit.test('systemAbnormalTest003(DELETE)', SystemProfileAbnormalTest.systemAbnormalTest003);

/**
 * 非サポートなPUTプロファイルを指定して対応プロファイル一覧にアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /system/device?serviceId=xxxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * ・errorCodeに3が返ってくること。
 * </p>
 */
SystemProfileAbnormalTest.systemDeviceAbnormalTest001 = function(assert) {
  let serviceId = getCurrentServiceId();
  let done = assert.async();
  sdk.put({
    profile: dConnectSDK.constants.system.PROFILE_NAME,
    attribute: dConnectSDK.constants.system.INTERFACE_DEVICE
    serviceId: serviceId
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 3);
    done();
  });
};
QUnit.test('systemDeviceAbnormalTest(put)',
    SystemProfileAbnormalTest.systemDeviceAbnormalTest001);

/**
 * 非サポートなPOSTプロファイルを指定して対応プロファイル一覧にアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /system/device?serviceId=xxxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * ・errorCodeに3が返ってくること。
 * </p>
 */
SystemProfileAbnormalTest.systemDeviceAbnormalTest002 = function(assert) {
  let serviceId = getCurrentServiceId();
  let done = assert.async();
  sdk.post({
    profile: dConnectSDK.constants.system.PROFILE_NAME,
    attribute: dConnectSDK.constants.system.INTERFACE_DEVICE
    serviceId: serviceId
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 3);
    done();
  });
};
QUnit.test('systemAbnormalTest002(post)', SystemProfileAbnormalTest.systemDeviceAbnormalTest002);

/**
 * 非サポートなDELETEプロファイルを指定して対応プロファイル一覧にアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: DELETE<br/>
 * Path: /system/device?serviceId=xxxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * ・errorCodeに3が返ってくること。
 * </p>
 */
SystemProfileAbnormalTest.systemDeviceAbnormalTest003 = function(assert) {
  let serviceId = getCurrentServiceId();
  let done = assert.async();
  sdk.delete({
    profile: dConnectSDK.constants.system.PROFILE_NAME,
    attribute: dConnectSDK.constants.system.INTERFACE_DEVICE
    serviceId: serviceId
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 3);
    done();
  });
};
QUnit.test('systemDeviceAbnormalTest(delete)',
      SystemProfileAbnormalTest.systemDeviceAbnormalTest003);

/**
 * 非サポートなGETプロファイルを指定して対応プロファイル一覧にアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /system/wakeup?pluginId=xxxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
SystemProfileAbnormalTest.systemWakeupAbnormalTest001 = function(assert) {
  let serviceId = getCurrentServiceId();
  let done = assert.async();
  sdk.put({
    profile: dConnectSDK.constants.system.PROFILE_NAME,
    interface: dConnectSDK.constants.system.INTERFACE_DEVICE,
    attribute: dConnectSDK.constants.system.ATTRI_WAKEUP
    serviceId: serviceId
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 8);
    done();
  });
};
QUnit.test('systemWakeupAbnormalTest001(get)', SystemProfileAbnormalTest.systemWakeupAbnormalTest001);

/**
 * 非サポートなPOSTプロファイルを指定して対応プロファイル一覧にアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /system/wakeup?pluginId=xxxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
SystemProfileAbnormalTest.systemWakeupAbnormalTest002 = function(assert) {
  let serviceId = getCurrentServiceId();
  let done = assert.async();
  sdk.post({
    profile: dConnectSDK.constants.system.PROFILE_NAME,
    interface: dConnectSDK.constants.system.INTERFACE_DEVICE,
    attribute: dConnectSDK.constants.system.ATTRI_WAKEUP
    serviceId: serviceId
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 8);
    done();
  });
};
QUnit.test('systemWakeupAbnormalTest002(post)', SystemProfileAbnormalTest.systemWakeupAbnormalTest002);

/**
 * 非サポートなDELETEプロファイルを指定して対応プロファイル一覧にアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: DELETE<br/>
 * Path: /system/wakeup?pluginId=xxxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
SystemProfileAbnormalTest.systemWakeupAbnormalTest003 = function(assert) {
  let serviceId = getCurrentServiceId();
  let done = assert.async();
  sdk.delete({
    profile: dConnectSDK.constants.system.PROFILE_NAME,
    interface: dConnectSDK.constants.system.INTERFACE_DEVICE,
    attribute: dConnectSDK.constants.system.ATTRI_WAKEUP
    serviceId: serviceId
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 8);
    done();
  });
};
QUnit.test('systemWakeupAbnormalTest003(delete)',
      SystemProfileAbnormalTest.systemWakeupAbnormalTest003);

/**
 * 非サポートなPOSTプロファイルを指定して対応プロファイル一覧にアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /system/wakeup?pluginId=xxxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
SystemProfileAbnormalTest.onEventsAbnormalTest001 = function(assert) {
  let serviceId = getCurrentServiceId();
  let done = assert.async();
  sdk.post({
    profile: dConnectSDK.constants.system.PROFILE_NAME,
    attribute: dConnectSDK.constants.system.ATTRI_EVENTS
    serviceId: serviceId
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 3);
    done();
  });
};
QUnit.test('onEventsAbnormalTest001(Calling a delete method that does not support',
  SystemProfileAbnormalTest.onEventsAbnormalTest001);

/**
 * 非サポートなGETプロファイルを指定して対応プロファイル一覧にアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /system/wakeup?pluginId=xxxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
SystemProfileAbnormalTest.onEventsAbnormalTest002 = function(assert) {
  let serviceId = getCurrentServiceId();
  let done = assert.async();
  sdk.get({
    profile: dConnectSDK.constants.system.PROFILE_NAME,
    attribute: dConnectSDK.constants.system.ATTRI_EVENTS
    serviceId: serviceId
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 3);
    done();
  });
};
QUnit.test('onEventsAbnormalTest002(Calling a delete method that does not support',
      SystemProfileAbnormalTest.onEventsAbnormalTest002);
