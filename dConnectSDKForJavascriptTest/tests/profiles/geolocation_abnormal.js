QUnit.module('Geolocation Profile Abnormal Test', {
  before: function() {
    init();
  }
});

/**
 * Geolocationプロファイルのテストを行なうクラス
 *@class
 */
let GeolocationProfileAbnormalTest = {};

/**
 * 定義されていないGETメソッドで位置情報の通知イベントにアクセスするテストを行なう。
 * <h3>【HTTP通信】</h3>
 * <p id = "test">
 * Method: GET
 * Path: /geolocation/onwatchposition?serviceId=xxxx&accessToken=xxx<br />
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。
 * </p>
 */
GeolocationProfileAbnormalTest.onWatchPositionAbnormalTest001 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: dConnectSDK.constants.geolocation.PROFILE_NAME,
    attribute: dConnectSDK.constants.geolocation.ATTR_ON_WATCH_POSITION,
    params: {
      serviceId: getCurrentServiceId()
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode), "errorCode=" + e.errorCode + ", errorMessage=" + e.errorMessage);
    done();
  });
};
QUnit.test('onWatchPositionAbnormalTest001(Calling a get method that does not support.)',
    GeolocationProfileAbnormalTest.onWatchPositionAbnormalTest001);

/**
 * 定義されていないPOSTメソッドで位置情報の通知イベントにアクセスするテストを行なう。
 * <h3>【HTTP通信】</h3>
 * <p id = "test">
 * Method: POST
 * Path: /geolocation/onwatchposition?serviceId=xxxx&accessToken=xxx<br />
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。
 * </p>
 */

GeolocationProfileAbnormalTest.onWatchPositionAbnormalTest002 = function(assert) {
  let done = assert.async();
  sdk.post({
    profile: dConnectSDK.constants.geolocation.PROFILE_NAME,
    attribute: dConnectSDK.constants.geolocation.ATTR_ON_WATCH_POSITION,
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
QUnit.test('onWatchPositionAbnormalTest002(Calling a post method that does not support.)',
    GeolocationProfileAbnormalTest.onWatchPositionAbnormalTest002);

/**
 * 定義されていないPUTメソッドで位置情報の通知イベントにアクセスするテストを行なう。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /geolocation/currentposition?serviceId=xxxx&accessToken=xxxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
GeolocationProfileAbnormalTest.currentPositionAbnormalTest001 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: dConnectSDK.constants.geolocation.PROFILE_NAME,
    attribute: dConnectSDK.constants.geolocation.ATTR_CURRENT_POSITION,
    params: {
      serviceId: getCurrentServiceId()
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('currentPositionAbnormalTest001(Calling a put method that does not support.)',
    GeolocationProfileAbnormalTest.currentPositionAbnormalTest001);

/**
 * 定義されていないPOSTメソッドで位置情報の通知イベントにアクセスするテストを行なう。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /geolocation/currentposition?serviceId=xxxx&accessToken=xxxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
GeolocationProfileAbnormalTest.currentPositionAbnormalTest002 = function(assert) {
  let done = assert.async();
  sdk.post({
    profile: dConnectSDK.constants.geolocation.PROFILE_NAME,
    attribute: dConnectSDK.constants.geolocation.ATTR_CURRENT_POSITION,
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
QUnit.test('currentPositionAbnormalTest002(Calling a post method that does not support.)',
    GeolocationProfileAbnormalTest.currentPositionAbnormalTest002);

/**
 * 定義されていないDELETEメソッドで、位置情報の通知イベントにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: DELETE<br/>
 * Path: /geolocation/currentposition?serviceId=xxxx&accessToken=xxxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
GeolocationProfileAbnormalTest.currentPositionAbnormalTest003 = function(assert) {
  let done = assert.async();
  sdk.delete({
    profile: dConnectSDK.constants.geolocation.PROFILE_NAME,
    attribute: dConnectSDK.constants.geolocation.ATTR_CURRENT_POSITION,
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
QUnit.test('currentPositionAbnormalTest003(Calling a delete method that does not support.)',
    GeolocationProfileAbnormalTest.currentPositionAbnormalTest003);
