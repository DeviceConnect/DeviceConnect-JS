module('DeviceOrientation Profile Abnormal Test', {
  setup: function() {
    init();
  }
});

/**
 * DeviceOrientationプロファイルのテストを行なうクラス
 *@class
 */
var DeviceOrientationProfileAbnormalTest = {};

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
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile(dConnect.constants.device_orientation.PROFILE_NAME);
  builder.setAttribute(dConnect.constants.device_orientation.ATTR_ON_DEVICE_ORIENTATION);
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
QUnit.asyncTest('onDeviceOrientationAbnormalTest001', 
    DeviceOrientationProfileAbnormalTest.onDeviceOrientationAbnormalTest002);
