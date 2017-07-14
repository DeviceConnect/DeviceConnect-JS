module('Proximity Profile Normal Test', {
  setup: function() {
    init();
  }
});

/**
 * Proximityプロファイルの正常系テストを行うクラス。
 * @class
 */
var ProximityProfileNormalTest = {};

/**
 * デバイス近接センサー値取得イベントの登録と削除のテストを行う。
 * <h3>【HTTP通信】</h3
 * <p id="test">
 * Method: PUT, DELETE<br/>
 * Path: /proximity/ondeviceproximity?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
ProximityProfileNormalTest.onDeviceProximityNormallTest001 = function(assert) {
  var builder = new dConnect.URIBuilder();
  builder.setProfile(dConnect.constants.proximity.PROFILE_NAME);
  builder.setAttribute(dConnect.constants.proximity.ATTR_ON_DEVICE_PROXIMITY);
  openWebsocket(builder, assert, 2000, function(message) {
    var json = JSON.parse(message);
    if (json.profile === dConnect.constants.proximity.PROFILE_NAME && json.attribute === dConnect.constants.proximity.ATTR_ON_DEVICE_PROXIMITY) {
      if (json.proximity) {
        assert.ok(true, message);
        return true;
      }
    }
    assert.ok(false, message);
    return false;
  });
};
QUnit.asyncTest('onDeviceProximityNormalTest001', ProximityProfileNormalTest.onDeviceProximityNormallTest001);

/**
 * ユーザー近接センサー値取得イベントの登録と削除のテストを行う。
 * <h3>【HTTP通信】</h3
 * <p id="test">
 * Method: PUT, DELETE<br/>
 * Path: /proximity/onuserproximity?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
ProximityProfileNormalTest.onUserProximityNormalTest001 = function(assert) {
  var builder = new dConnect.URIBuilder();
  builder.setProfile(dConnect.constants.proximity.PROFILE_NAME);
  builder.setAttribute(dConnect.constants.proximity.ATTR_ON_USER_PROXIMITY);
  openWebsocket(builder, assert, 2000, function(message) {
    var json = JSON.parse(message);
    if (json.profile === dConnect.constants.proximity.PROFILE_NAME && json.attribute === dConnect.constants.proximity.ATTR_ON_USER_PROXIMITY) {
      if (json.proximity) {
        assert.ok(true, message);
        return true;
      }
    }
    assert.ok(false, message);
    return false;
  });
};
QUnit.asyncTest('onUserProximityNormalTest001', ProximityProfileNormalTest.onUserProximityNormalTest001);

/**
 * GETメソッドで、onuserproximityにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3
 * <p id="test">
 * Method: GET<br/>
 * Path: /proximity/onuserproximity?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
ProximityProfileNormalTest.onUserProximityNormalTest002 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile(dConnect.constants.proximity.PROFILE_NAME);
  builder.setAttribute(dConnect.constants.proximity.ATTR_ON_USER_PROXIMITY);
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  var uri = builder.build();
  dConnect.get(uri, null, function(json) {
    assert.ok(json.proximity != undefined, JSON.stringify(json));
    QUnit.start();
  }, function(errorCode, errorMessage) {
    assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('onUserProximityNormalTest002', ProximityProfileNormalTest.onUserProximityNormalTest002);
