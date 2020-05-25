QUnit.module('Geolocation Profile Normal Test', {
  before: function() {
    init();
  }
});

/**
 * geolocationプロファイルのテストを行うクラス。
 * @class
 */

let GeolocationProfileNormalTest = {};

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
  let params = {
    profile: dConnectSDK.constants.geolocation.PROFILE_NAME,
    attribute: dConnectSDK.constants.geolocation.ATTR_ON_WATCH_POSITION,
    params: {
      serviceId: getCurrentServiceId()
    }
  };
  openWebsocket(params, assert, 10000, message => {
    let json = JSON.parse(message);
    if (json.profile === dConnect.constants.geolocation.PROFILE_NAME
        && json.attribute === dConnect.constants.geolocation.ATTR_ON_WATCH_POSITION) {
      assert.ok(true, message);
      return true;
    }
    return false;
  });
};
QUnit.test('onwatchpositionNormalTest001', GeolocationProfileNormalTest.onwatchpositionNormalTest001);


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
  let done = assert.async();
  sdk.get({
    profile: dConnectSDK.constants.geolocation.PROFILE_NAME,
    attribute: dConnectSDK.constants.geolocation.ATTR_CURRENT_POSITION,
    params: {
      serviceId: getCurrentServiceId()
    }
  }).then(json => {
    assert.ok(true, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode), "errorCode=" + e.errorCode + ", errorMessage=" + e.errorMessage);
    done();
  });
};
QUnit.test('currentpositionNormalTest001',
    GeolocationProfileNormalTest.currentpositionNormalTest001);
