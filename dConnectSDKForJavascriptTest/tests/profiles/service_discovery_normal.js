QUnit.module('ServiceDiscovery Profile Normal Test', {
  before: function() {
    init();
  }
});

/**
 * ServiceDiscoveryプロファイルの正常系テストを行うクラス。
 * @class
 */
let ServiceDiscoveryProfileNormalTest = {};

/**
 * アクセス可能なデバイス一覧を取得する。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /serviceDiscovery<br>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。
 * </p>
 */
ServiceDiscoveryProfileNormalTest.serviceDiscoveryNormalTest001 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: dConnectSDK.constants.serviceDiscovery.PROFILE_NAME
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    assert.ok(json.services != undefined, 'services=' + JSON.stringify(json.services));
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        'errorCode=' + e.errorCode + ', errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('serviceDiscoveryNormalTest001', ServiceDiscoveryProfileNormalTest.serviceDiscoveryNormalTest001);
