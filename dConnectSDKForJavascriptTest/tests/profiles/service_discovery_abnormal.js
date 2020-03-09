QUnit.module('ServiceDiscovery Profile Abnormal Test', {
  before: function() {
    init();
  }
});

/**
 * ServiceDiscoveryプロファイルの異常系テストを行うクラス。
 * @class
 */
let ServiceDiscoveryProfileAbnormalTest = {};

/**
 * 定義されていないPUTメソッドでデバイス一覧取得にアクセスする。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /serviceDiscovery
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。
 * </p>
 */
ServiceDiscoveryProfileAbnormalTest.getServiceDiscoveryProfileAbnormalTest001 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: dConnectSDK.constants.serviceDiscovery.PROFILE_NAME
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        'errorCode=' + e.errorCode + ', errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('getServiceDiscoveryAbnormalTest001', ServiceDiscoveryProfileAbnormalTest.getServiceDiscoveryProfileAbnormalTest001);

/**
 * 定義されていないPOSTメソッドでデバイス一覧取得にアクセスする。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /serviceDiscovery
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。
 * </p>
 */
ServiceDiscoveryProfileAbnormalTest.getServiceDiscoveryProfileAbnormalTest002 = function(assert) {
  let serviceId = getCurrentServiceId();
  let done = assert.async();
  sdk.post({
    profile: dConnectSDK.constants.serviceDiscovery.PROFILE_NAME
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        'errorCode=' + e.errorCode + ', errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('getServiceDiscoveryAbnormalTest002', ServiceDiscoveryProfileAbnormalTest.getServiceDiscoveryProfileAbnormalTest002);

/**
 * 定義されていないDELETEメソッドでデバイス一覧取得にアクセスする。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: DELETE<br/>
 * Path: /serviceDiscovery
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。
 * </p>
 */
ServiceDiscoveryProfileAbnormalTest.getServiceDiscoveryProfileAbnormalTest003 = function(assert) {
  let serviceId = getCurrentServiceId();
  let done = assert.async();
  sdk.delete({
    profile: dConnectSDK.constants.serviceDiscovery.PROFILE_NAME
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 3);
    done();
  });
};
QUnit.test('getServiceDiscoveryAbnormalTest003', ServiceDiscoveryProfileAbnormalTest.getServiceDiscoveryProfileAbnormalTest003);

/**
 * 定義されていないPOSTメソッドで接続状態取得イベントにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /serviceDiscovery/onservicechange?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
ServiceDiscoveryProfileAbnormalTest.onServiceChangeAbnormalTest001 = function(assert) {
  let serviceId = getCurrentServiceId();
  let done = assert.async();
  sdk.post({
    profile: dConnectSDK.constants.serviceDiscovery.PROFILE_NAME,
    attribute: dConnectSDK.constants.serviceDiscovery.ATTR_ON_SERVICE_CHANGE,
    serviceId: serviceId
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 3);
    done();
  });
};
QUnit.test('onServiceChangeAbnormalTest001', ServiceDiscoveryProfileAbnormalTest.onServiceChangeAbnormalTest001);
