module('Geolocation Profile Normal Test', {
  setup: function() {
    init();
  }
});

/**
 * geolocationプロファイルのテストを行うクラス。
 * @class
 */

var GeolocationProfileNormalTest = {};

/**
 * Geolocationプロファイルのonwatchipositionを登録するテストを行う。
 * <p>
 * 【HTTP通信】<br/>
 * Method: PUT<br/>
 * Path: /deviceorientation/ondeviceorientation?serviceId=xxxx<br/>
 * </p>
 * <p>
 * 【期待する動作】<br/>
 * ・resultに0が返ってくること。<br/>
 * ・イベント通知が送られてくること。<br/>
 * </p>
 */
GeolocationProfileNormalTest.onwatchpositionNormalTest001 = function(assert) {
  var builder = new dConnect.URIBuilder();
  builder.setProfile(dConnect.constants.geolocation.PROFILE_NAME);
  builder.setAttribute(dConnect.constants.geolocation.ATTR_ON_WATCH_POSITION);
  openWebsocket(builder, assert, 5000, function(message) {
    var json = JSON.parse(message);
    if (json.profile === dConnect.constants.geolocation.PROFILE_NAME && json.attribute === dConnect.constants.geolocation.ATTR_ON_WATCH_POSITION) {
      assert.ok(true, message);
      return true;
    }
    return false;
  });
};
QUnit.asyncTest('onwatchpositionNormalTest001', GeolocationProfileNormalTest.onwatchpositionNormalTest001);


/**
 * 位置情報の値を取得するテストを行なう。
 * <h3>【HTTP通信】</h3>
 * <p id = "test">
 * Method: GET
 * Path: /geolocation/currentposition?serviceId=xxxx&accessToken=xxx<br />
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。
 * ・位置情報が送られてくること。
 * </p>
 */
GeolocationProfileNormalTest.currentpositionNormalTest001 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.geolocation.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.geolocation.ATTR_CURRENT_POSITION);
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
QUnit.asyncTest('currentpositionNormalTest001',
    GeolocationProfileNormalTest.currentpositionNormalTest001);

