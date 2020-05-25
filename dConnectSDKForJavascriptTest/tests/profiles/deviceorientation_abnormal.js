QUnit.module('DeviceOrientation Profile Abnormal Test', {
  before: function() {
    init();
  }
});

/**
 * DeviceOrientationプロファイルのテストを行なうクラス
 *@class
 */
let DeviceOrientationProfileAbnormalTest = {};

/**
 * 定義されていないPOSTメソッドで加速度センサー、ジャイロセンサーの通知イベントにアクセスするテストを行なう。
 * <h3>【HTTP通信】</h3>
 * <p id = "test">
 * Method: POST
 * Path: /deviceorientation/ondeviceorientation?serviceId=xxxx&accessToken=xxx<br />
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。
 * ・イベント通知が送られてくること。
 * </p>
 */

DeviceOrientationProfileAbnormalTest.onDeviceOrientationAbnormalTest002 = function(assert) {
  let done = assert.async();
  sdk.post({
    profile: dConnectSDK.constants.deviceOrientation.PROFILE_NAME,
    attribute: dConnectSDK.constants.deviceOrientation.ATTR_ON_DEVICE_ORIENTATION,
    params: {
      serviceId: getCurrentServiceId()
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 8);
    done();
  });
};
QUnit.test('onDeviceOrientationAbnormalTest001',
    DeviceOrientationProfileAbnormalTest.onDeviceOrientationAbnormalTest002);
