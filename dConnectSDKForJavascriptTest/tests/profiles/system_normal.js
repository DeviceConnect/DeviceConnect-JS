QUnit.module('System Profile Normal Test', {
  before: function() {
    init();
  }
});

/**
 * Systemプロファイルの正常系テストを行うクラス。
 * @class
 */
let SystemProfileNormalTest = {};

/**
 * スマートフォンのシステム情報を取得するテストを行う。
 * <p id="test">
 * 【HTTP通信】<br/>
 * Method: GET<br/>
 * Path: /system?serviceId=xxxx<br/>
 * </p>
 * <p id="expected">
 * 【期待する動作】<br/>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
SystemProfileNormalTest.systemTest001 = function(assert) {
  let serviceId = getCurrentServiceId();
  let done = assert.async();
  sdk.get({
    profile: dConnectSDK.constants.system.PROFILE_NAME,
    serviceId: serviceId
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    assert.ok(true, 'version=' + json.version);
    assert.ok(json.supports !== undefined, 'supports is ok.');
    assert.ok(json.plugins !== undefined, 'pluginId is ok.');
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode), 'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('systemTest001(get)', SystemProfileNormalTest.systemTest001);

/**
 * デバイスプラグインを有効にする、もしくは設定画面を起動するテストを行う。
 * <p id="test">
 * 【HTTP通信】<br/>
 * Method: PUT<br/>
 * Path: /system/wakeup?serviceId=xxxx<br/>
 * </p>
 * <p id="expected">
 * 【期待する動作】<br/>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
SystemProfileNormalTest.systemWakeupTest001 = function(assert) {
  let serviceId = getCurrentServiceId();
  let done = assert.async();
  sdk.delete({
    profile: dConnectSDK.constants.system.PROFILE_NAME,
    interface: dConnectSDK.constants.system.INTERFACE_DEVICE,
    attribute: dConnectSDK.constants.system.ATTRI_WAKEUP
    pluginId: serviceId
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode), 'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('systemWakeupTest001(put)', SystemProfileNormalTest.systemWakeupTest001);
