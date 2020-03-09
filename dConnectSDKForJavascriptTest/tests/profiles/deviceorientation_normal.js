QUnit.module('DeviceOrientation Profile Normal Test', {
  before: function() {
    init();
  }
});

/**
 * deviceorientationプロファイルのテストを行うクラス。
 * @class
 */

let DeviceOrientationProfileNormalTest = {};

/**
 * DeviceOrientationプロファイルのondeviceorientationを登録するテストを行う。
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
DeviceOrientationProfileNormalTest.ondeviceorientationNormalTest001 = function(assert) {
  let serviceId = getCurrentServiceId();
  let params = {
    profile: dConnectSDK.constants.deviceOrientation.PROFILE_NAME,
    attribute: dConnectSDK.constants.deviceOrientation.ATTR_ON_DEVICE_ORIENTATION,
    serviceId: serviceId
  };
  openWebsocket(params, assert, 10000, message => {
    let json = JSON.parse(message);
    if (json.profile === dConnectSDK.constants.deviceOrientation.PROFILE_NAME
      && json.attribute === dConnectSDK.constants.deviceOrientation.ATTR_ON_DEVICE_ORIENTATION) {
      assert.ok(true, message);
      return true;
    }
    return false;
  });
};
QUnit.test('ondeviceorientationNormalTest001', DeviceOrientationProfileNormalTest.ondeviceorientationNormalTest001);


/**
 * DeviceOrientationの値を取得するテストを行なう。
 * <h3>【HTTP通信】</h3>
 * <p id = "test">
 * Method: GET
 * Path: /deviceorientation/ondeviceorientation?serviceId=xxxx&accessToken=xxx<br />
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。
 * ・イベント通知が送られてくること。
 * </p>
 */
DeviceOrientationProfileNormalTest.ondeviceorientationNormalTest002 = function(assert) {
  let serviceId = getCurrentServiceId();
  let done = assert.async();
  sdk.get({
    profile: dConnectSDK.constants.deviceOrientation.PROFILE_NAME,
    attribute: dConnectSDK.constants.deviceOrientation.ATTR_ON_DEVICE_ORIENTATION,
    serviceId: serviceId
  }).then(json => {
    assert.ok(true, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode), "errorCode=" + e.errorCode + ", errorMessage=" + e.errorMessage);
    done();
  });
};
QUnit.test('ondeviceorientationNormalTest002',
    DeviceOrientationProfileNormalTest.ondeviceorientationNormalTest002);
