module('Proximity Profile Abnormal Test', {
  setup: function() {
    init();
  }
});

/**
 * Proximityプロファイルの異常系テストを行うクラス。
 * @class
 */
var ProximityProfileAbnormalTest = {};

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
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile(dConnect.constants.proximity.PROFILE_NAME);
  builder.setAttribute(dConnect.constants.proximity.ATTR_ON_DEVICE_PROXIMITY);
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  var uri = builder.build();
  dConnect.post(uri, null, null, function(json) {
    assert.ok(false, "json: " + JSON.stringify(json));
    QUnit.start();
  }, function(errorCode, errorMessage) {
    if (errorCode == 3) {
      assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    } else if (checkErrorCode(errorCode)) {
      assert.ok(true, 'not support');
    } else {
      assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    }
    QUnit.start();
  });
};
QUnit.asyncTest('onDeviceProximityAbnormalTest001', ProximityProfileAbnormalTest.onDeviceProximityAbnormalTest001);

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
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile(dConnect.constants.proximity.PROFILE_NAME);
  builder.setAttribute(dConnect.constants.proximity.ATTR_ON_USER_PROXIMITY);
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  var uri = builder.build();
  dConnect.post(uri, null, null, function(json) {
    assert.ok(false, "json: " + JSON.stringify(json));
    QUnit.start();
  }, function(errorCode, errorMessage) {
    if (errorCode == 3) {
      assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    } else if (checkErrorCode(errorCode)) {
      assert.ok(true, 'not support');
    } else {
      assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    }
    QUnit.start();
  });
};
QUnit.asyncTest('onUserProximityAbnormalTest001', ProximityProfileAbnormalTest.onUserProximityAbnormalTest001);
