QUnit.module('Proximity Profile Abnormal Test', {
  before: function() {
    init();
  }
});

/**
 * Proximityプロファイルの異常系テストを行うクラス。
 * @class
 */
let ProximityProfileAbnormalTest = {};

/**
 * サポートしていないPOSTメソッドで、ondeviceproximityにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3
 * <p id="test">
 * Method: POST<br/>
 * Path: /proximity/ondeviceproximity?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
ProximityProfileAbnormalTest.onDeviceProximityAbnormalTest001 = function(assert) {
  let done = assert.async();
  sdk.post({
    profile: dConnectSDK.constants.proximity.PROFILE_NAME,
    attribute: dConnectSDK.constants.proximity.ATTR_ON_DEVICE_PROXIMITY,
    params: {
      serviceId: getCurrentServiceId()
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 3);
    done();
  });
};
QUnit.test('onDeviceProximityAbnormalTest001', ProximityProfileAbnormalTest.onDeviceProximityAbnormalTest001);

/**
 * サポートしていないPOSTメソッドで、onuserproximityにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3
 * <p id="test">
 * Method: POST<br/>
 * Path: /proximity/onuserproximity?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
ProximityProfileAbnormalTest.onUserProximityAbnormalTest001 = function(assert) {
  let done = assert.async();
  sdk.post({
    profile: dConnectSDK.constants.proximity.PROFILE_NAME,
    attribute: dConnectSDK.constants.proximity.ATTR_ON_USER_PROXIMITY,
    params: {
      serviceId: getCurrentServiceId()
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 3);
    done();
  });
};
QUnit.test('onUserProximityAbnormalTest001', ProximityProfileAbnormalTest.onUserProximityAbnormalTest001);
