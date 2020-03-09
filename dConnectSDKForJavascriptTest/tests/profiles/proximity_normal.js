QUnit.module('Proximity Profile Normal Test', {
  before: function() {
    init();
  }
});

/**
 * Proximityプロファイルの正常系テストを行うクラス。
 * @class
 */
let ProximityProfileNormalTest = {};

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
  let serviceId = getCurrentServiceId();
  let params = {
    profile: dConnectSDK.constants.proximity.PROFILE_NAME,
    attribute: dConnectSDK.constants.proximity.ATTR_ON_DEVICE_PROXIMITY,
    serviceId: serviceId
  };
  openWebsocket(params, assert, 2000, message => {
    let json = JSON.parse(message);
    if (json.profile === dConnectSDK.constants.proximity.PROFILE_NAME
          && json.attribute === dConnectSDK.constants.proximity.ATTR_ON_DEVICE_PROXIMITY) {
      if (json.proximity) {
        assert.ok(true, message);
        return true;
      }
    }
    assert.ok(false, message);
    return false;
  });
};
QUnit.test('onDeviceProximityNormalTest001', ProximityProfileNormalTest.onDeviceProximityNormallTest001);
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
ProximityProfileNormalTest.onDeviceProximityNormalTest002 = function(assert) {
  let serviceId = getCurrentServiceId();
  let done = assert.async();
  sdk.post({
    profile: dConnectSDK.constants.proximity.PROFILE_NAME,
    attribute: dConnectSDK.constants.proximity.ATTR_ON_DEVICE_PROXIMITY,
    serviceId: serviceId
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode), "errorCode=" + e.errorCode + ", errorMessage=" + e.errorMessage);
    done();
  });
};
QUnit.test('onDeviceProximityNormalTest002', ProximityProfileNormalTest.onDeviceProximityNormalTest002);
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
  let serviceId = getCurrentServiceId();
  let params = {
    profile: dConnectSDK.constants.proximity.PROFILE_NAME,
    attribute: dConnectSDK.constants.proximity.ATTR_ON_USER_PROXIMITY,
    serviceId: serviceId
  };
  openWebsocket(params, assert, 2000, message => {
    let json = JSON.parse(message);
    if (json.profile === dConnectSDK.constants.proximity.PROFILE_NAME
          && json.attribute === dConnectSDK.constants.proximity.ATTR_ON_USER_PROXIMITY) {
      if (json.proximity) {
        assert.ok(true, message);
        return true;
      }
    }
    assert.ok(false, message);
    return false;
  });
};
QUnit.test('onUserProximityNormalTest001', ProximityProfileNormalTest.onUserProximityNormalTest001);

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
  let serviceId = getCurrentServiceId();
  let done = assert.async();
  sdk.post({
    profile: dConnectSDK.constants.proximity.PROFILE_NAME,
    attribute: dConnectSDK.constants.proximity.ATTR_ON_USER_PROXIMITY,
    serviceId: serviceId
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode), "errorCode=" + e.errorCode + ", errorMessage=" + e.errorMessage);
    done();
  });
};
QUnit.test('onUserProximityNormalTest002', ProximityProfileNormalTest.onUserProximityNormalTest002);
