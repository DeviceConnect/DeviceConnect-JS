QUnit.module('Battery Profile Normal Test', {
  before: function() {
    init();
  }
});

/**
 * Batteryプロファイルのテストを行うクラス。
 * @class
 */
let BatteryProfileNormalTest = {};

/**
 * バッテリーの全属性取得するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /battery?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
BatteryProfileNormalTest.allNormalTest001 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: dConnectSDK.constants.battery.PROFILE_NAME,
    serviceId: getCurrentServiceId()
  }).then(json => {
      if (json.level === undefined) {
        assert.ok(true, 'level=' + json.level);
      } else {
        assert.ok(json.level >= 0.0 && json.level <= 1.0, 'level=' + json.level);
      }
      assert.ok(true, 'charging=' + json.charging);
      if (json.chargingTime === undefined) {
        assert.ok(true, 'chargingTime=' + json.chargingTime);
      } else {
        assert.ok(json.chargingTime >= 0, 'chargingTime=' + json.chargingTime);
      }
      if (json.dischargingTime === undefined) {
        assert.ok(true, json.dischargingTime);
      } else {
        assert.ok(true, 'dischargingTime=' + json.dischargingTime);
      }
      done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode), "errorCode=" + e.errorCode + ", errorMessage=" + e.errorMessage);
    done();
  });
};
QUnit.test('allNormalTest001', BatteryProfileNormalTest.allNormalTest001);

/**
 * バッテリーレベルを取得するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /battery?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * ・levelが0.0〜1.0の範囲に収まっていること。<br/>
 * </p>
 */

BatteryProfileNormalTest.levelNormalTest001 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: dConnectSDK.constants.battery.PROFILE_NAME,
    serviceId: getCurrentServiceId()
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    assert.ok((json.level != undefined && 0 <= json.level && json.level <= 1.0), 'level=' + json.level);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode), "errorCode=" + e.errorCode + ", errorMessage=" + e.errorMessage);
    done();
  });
};
QUnit.test('levelNormalTest001', BatteryProfileNormalTest.levelNormalTest001);

/**
 * バッテリーのチャージング時間を取得するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /battery/chargingTime?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * ・chargingTime >= 0が返ってくること。<br/>
 * </p>
 */
BatteryProfileNormalTest.chargingTimeNormalTest001 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: dConnectSDK.constants.battery.PROFILE_NAME,
    attribute: dConnectSDK.constants.battery.ATTR_CHARGING_TIME,
    serviceId: getCurrentServiceId()
  }).then(json => {
    if (json.result === dConnect.constants.RESULT_ERROR) {
      assert.equal(json.errorCode, dConnect.constants.ErrorCode.NOT_SUPPORT_PROFILE, 'errorCode=' + json.errorCode + ' errorMessage=' + json.errorMessage);
    } else {
      assert.ok(true, 'result=' + json.result);
      assert.ok((json.chargingTime != undefined && json.chargingTime >= 0), 'chargingTime=' + json.chargingTime);
    }
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode), "errorCode=" + e.errorCode + ", errorMessage=" + e.errorMessage);
    done();
  });
};
QUnit.test('chargingTimeNormalTest001', BatteryProfileNormalTest.chargingTimeNormalTest001);

/**
 * バッテリーの放電時間を取得するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /battery/dischargingTime?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * ・dischargingTime >= 0が返ってくること。<br/>
 * </p>
 */
BatteryProfileNormalTest.dischargingTimeNormalTest001 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: dConnectSDK.constants.battery.PROFILE_NAME,
    attribute: dConnectSDK.constants.battery.ATTR_DISCHARGING_TIME,
    serviceId: getCurrentServiceId()
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    assert.ok((json.dischargingTime && json.dischargingTime >= 0), 'dischargingTime=' + json.dischargingTime);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode), "errorCode=" + e.errorCode + ", errorMessage=" + e.errorMessage);
    done();
  });
};
QUnit.test('dischargingTimeNormalTest001', BatteryProfileNormalTest.dischargingTimeNormalTest001);

/**
 * バッテリーの充電フラグを取得するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /battery?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * ・chargingにtrueかfalseが返ってくること。<br/>
 * </p>
 */
BatteryProfileNormalTest.batteryNormalTest001 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: dConnectSDK.constants.battery.PROFILE_NAME,
    attribute: dConnectSDK.constants.battery.ATTR_CHARGING,
    serviceId: getCurrentServiceId()
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    assert.ok(json.charging !== undefined, 'charging=' + json.charging);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode), "errorCode=" + e.errorCode + ", errorMessage=" + e.errorMessage);
    done();
  });
};
QUnit.test('batteryNormalTest001', BatteryProfileNormalTest.batteryNormalTest001);

/**
 * Batteryプロファイルのonbatterychangeの登録と解除を行うテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /battery/onbatterychange?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * ・イベント通知が送られてくること。<br/>
 * </p>
 */
BatteryProfileNormalTest.onBatteryChangeNormalTest001 = function(assert) {
  let params = {
    profile: dConnectSDK.constants.battery.PROFILE_NAME,
    attribute: dConnectSDK.constants.battery.ATTR_ON_BATTERY_CHANGE
  }
  openWebsocket(params, assert, 10000, message => {
    let json = JSON.parse(message);
    if (json.profile === dConnectSDK.constants.battery.PROFILE_NAME
        && json.attribute === dConnectSDK.constants.battery.ATTR_ON_BATTERY_CHANGE) {
      assert.ok(true, message);
      return true;
    }
    return false;
  });
};
QUnit.test('onBatteryChangeNormalTest001', BatteryProfileNormalTest.onBatteryChangeNormalTest001);

/**
 * Batteryプロファイルのonchargingchangeを登録するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /battery/onchargingchange?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * ・イベント通知が送られてくること。<br/>
 * </p>
 */
BatteryProfileNormalTest.onChargingChangeNormalTest001 = function(assert) {
  let params = {
    profile: dConnectSDK.constants.battery.PROFILE_NAME,
    attribute: dConnectSDK.constants.battery.ATTR_ON_CHARGING_CHANGE
  }
  openWebsocket(params, assert, 10000, message => {
    let json = JSON.parse(message);
    if (json.profile === dConnectSDK.constants.battery.PROFILE_NAME
        && json.attribute === dConnectSDK.constants.battery.ATTR_ON_CHARGING_CHANGE) {
      assert.ok(true, message);
      return true;
    }
    return false;
  });
};
QUnit.test('onChargingChangeNormalTest001', BatteryProfileNormalTest.onChargingChangeNormalTest001);
