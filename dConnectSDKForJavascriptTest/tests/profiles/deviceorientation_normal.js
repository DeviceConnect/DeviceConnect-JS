module('DeviceOrientation Profile Normal Test', {
  setup: function() {
    init();
  }
});

/**
 * deviceorientationプロファイルのテストを行うクラス。
 * @class
 */

var DeviceOrientationProfileNormalTest = {};

/**
 * DeviceOrientationプロファイルのondeviceorientationを登録するテストを行う。
 * <p>
 * 【HTTP通信】<br/>
 * Method: PUT<br/>
 * Path: /deviceorientation/ondeviceorientation?serviceId=xxxx&sessionKey=xxxxx<br/>
 * </p>
 * <p>
 * 【期待する動作】<br/>
 * ・resultに0が返ってくること。<br/>
 * ・イベント通知が送られてくること。<br/>
 * </p>
 */
DeviceOrientationProfileNormalTest.ondeviceorientationNormalTest001 = function(assert) {
  var builder = new dConnect.URIBuilder();
  builder.setProfile(dConnect.constants.device_orientation.PROFILE_NAME);
  builder.setAttribute(dConnect.constants.device_orientation.ATTR_ON_DEVICE_ORIENTATION);
  openWebsocket(builder, assert, 5000, function(message) {
    var json = JSON.parse(message);
    if (json.profile === dConnect.constants.device_orientation.PROFILE_NAME && json.attribute === dConnect.constants.device_orientation.ATTR_ON_DEVICE_ORIENTATION) {
      assert.ok(true, message);
      return true;
    }
    return false;
  });
};
QUnit.asyncTest('ondeviceorientationNormalTest001', DeviceOrientationProfileNormalTest.ondeviceorientationNormalTest001);


/**
 * ジャイロセンサーの値を取得するテストを行なう。
 * <h3>【HTTP通信】</h3>
 * <p id = "test">
 * Method: GET
 * Path: /deviceorientation/ondeviceorientation?serviceId=xxxx&accessToken=xxx&sessionKey=xxxxx<br />
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。
 * ・イベント通知が送られてくること。
 * </p>
 */
DeviceOrientationProfileNormalTest.ondeviceorientationNormalTest002 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.device_orientation.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.device_orientation.ATTR_ON_DEVICE_ORIENTATION);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        var uri = builder.build();
        dConnect.get(uri, null, function(json) {
              assert.ok(true, 'json: ' + JSON.stringify(json));
              QUnit.start();
            }, function(errorCode, errorMessage) {
              assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
              QUnit.start();
            });
      }, function(errorCode, errorMessage) {
        assert.ok(false, 'errorCode=' + errorCode + ', errorMessage= ' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('ondeviceorientationNormalTest002',
    DeviceOrientationProfileNormalTest.ondeviceorientationNormalTest002);

