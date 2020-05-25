QUnit.module('Battery Profile Abnormal Test', {
  before: function() {
    init();
  }
});

/**
 * Batteryプロファイルのテストを行うクラス。
 * @class
 */
let BatteryProfileAbnormalTest = {};

/**
 * 定義されていないPUTメソッドでバッテリーの全属性にアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /battery?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
BatteryProfileAbnormalTest.allAbnormalTest001 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: dConnectSDK.constants.battery.PROFILE_NAME,
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
QUnit.test('allAbnormalTest001(Calling a put method that does not support.)',
            BatteryProfileAbnormalTest.allAbnormalTest001);

/**
 * 定義されていないPOSTメソッドでバッテリーの全属性にアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /battery?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
BatteryProfileAbnormalTest.allAbnormalTest002 = function(assert) {
  let done = assert.async();
  sdk.post({
    profile: dConnectSDK.constants.battery.PROFILE_NAME,
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
QUnit.test('allAbnormalTest002(Calling a post method that does not support.)',
      BatteryProfileAbnormalTest.allAbnormalTest002);

/**
 * 定義されていないDELETEメソッドでバッテリーの全属性にアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: DELETE<br/>
 * Path: /battery?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
BatteryProfileAbnormalTest.allAbnormalTest003 = function(assert) {
  let done = assert.async();
  sdk.delete({
    profile: dConnectSDK.constants.battery.PROFILE_NAME,
    params: {
      serviceId: getCurrentServiceId()
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e =>{
    checkSuccessErrorCode(assert, e, 8);
    done();
  });
};
QUnit.test('allAbnormalTest003(Calling a delete method that does not support.)',
    BatteryProfileAbnormalTest.allAbnormalTest003);

/**
 * 定義されていないPUTメソッドでバッテリーレベルにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /battery/level?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
BatteryProfileAbnormalTest.levelAbnormalTest001 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: dConnectSDK.constants.battery.PROFILE_NAME,
    attribute: dConnectSDK.constants.battery.ATTR_LEVEL,
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
QUnit.test('levelAbnormalTest001(Calling a put method that does not support.)',
    BatteryProfileAbnormalTest.levelAbnormalTest001);

/**
 * 定義されていないPUTメソッドでバッテリーレベルにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /battery/level?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
BatteryProfileAbnormalTest.levelAbnormalTest002 = function(assert) {
  let done = assert.async();
  sdk.post({
    profile: dConnectSDK.constants.battery.PROFILE_NAME,
    attribute: dConnectSDK.constants.battery.ATTR_LEVEL,
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
QUnit.test('levelAbnormalTest002(Calling a post method that does not support.)',
      BatteryProfileAbnormalTest.levelAbnormalTest002);

/**
 * 定義されていないDELETEメソッドでバッテリーレベルにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: DELETE<br/>
 * Path: /battery/level?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
BatteryProfileAbnormalTest.levelAbnormalTest003 = function(assert) {
  let done = assert.async();
  sdk.delete({
    profile: dConnectSDK.constants.battery.PROFILE_NAME,
    attribute: dConnectSDK.constants.battery.ATTR_LEVEL,
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
QUnit.test('levelAbnormalTest003(Calling a delete method that does not support.)',
      BatteryProfileAbnormalTest.levelAbnormalTest003);

/**
 * 定義されていないPUTメソッドでバッテリーのチャージング時間にアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /battery/chargingTime?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
BatteryProfileAbnormalTest.chargingTimeAbnormalTest001 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: dConnectSDK.constants.battery.PROFILE_NAME,
    attribute: dConnectSDK.constants.battery.ATTR_CHARGING_TIME,
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
QUnit.test('chargingTimeAbnormalTest001(Calling a put method that does not support.)',
      BatteryProfileAbnormalTest.chargingTimeAbnormalTest001);

/**
 * 定義されていないPOSTメソッドでバッテリーのチャージング時間にアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /battery/chargingTime?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
BatteryProfileAbnormalTest.chargingTimeAbnormalTest002 = function(assert) {
  let done = assert.async();
  sdk.post({
    profile: dConnectSDK.constants.battery.PROFILE_NAME,
    attribute: dConnectSDK.constants.battery.ATTR_CHARGING_TIME,
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
QUnit.test('chargingTimeAbnormalTest002(Calling a post method that does not support.)',
      BatteryProfileAbnormalTest.chargingTimeAbnormalTest002);

/**
 * 定義されていないDELETEメソッドでバッテリーのチャージング時間にアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: DELETE<br/>
 * Path: /battery/chargingTime?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
BatteryProfileAbnormalTest.chargingTimeAbnormalTest003 = function(assert) {
  let done = assert.async();
  sdk.delete({
    profile: dConnectSDK.constants.battery.PROFILE_NAME,
    attribute: dConnectSDK.constants.battery.ATTR_CHARGING_TIME,
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
QUnit.test('chargingTimeAbnormalTest003(Calling a delete method that does not support.)',
    BatteryProfileAbnormalTest.chargingTimeAbnormalTest003);

/**
 * 定義されていないPUTメソッドでバッテリーの放電時間にアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /battery/dischargingTime?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
BatteryProfileAbnormalTest.dischargingTimeAbnormalTest001 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: dConnectSDK.constants.battery.PROFILE_NAME,
    attribute: dConnectSDK.constants.battery.ATTR_DISCHARGING_TIME,
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
QUnit.test('dischargingTimeAbnormalTest001(Calling a put method that does not support.)',
      BatteryProfileAbnormalTest.dischargingTimeAbnormalTest001);

/**
 * 定義されていないPOSTメソッドでバッテリーの放電時間にアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /battery/dischargingTime?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
BatteryProfileAbnormalTest.dischargingTimeAbnormalTest002 = function(assert) {
  let done = assert.async();
  sdk.post({
    profile: dConnectSDK.constants.battery.PROFILE_NAME,
    attribute: dConnectSDK.constants.battery.ATTR_DISCHARGING_TIME,
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
QUnit.test('dischargingTimeAbnormalTest002(Calling a post method that does not support.)',
    BatteryProfileAbnormalTest.dischargingTimeAbnormalTest002);

/**
 * 定義されていないDELETEメソッドでバッテリーの放電時間にアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: DELETE<br/>
 * Path: /battery/dischargingTime?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
BatteryProfileAbnormalTest.dischargingTimeAbnormalTest003 = function(assert) {
  let done = assert.async();
  sdk.delete({
    profile: dConnectSDK.constants.battery.PROFILE_NAME,
    attribute: dConnectSDK.constants.battery.ATTR_DISCHARGING_TIME,
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
QUnit.test('dischargingTimeAbnormalTest003(Calling a delete method that does not support.)',
      BatteryProfileAbnormalTest.dischargingTimeAbnormalTest003);

/**
 * 定義されていないPUTメソッドでバッテリーの充電フラグにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id=test">
 * Method: PUT<br/>
 * Path: /battery/charging?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
BatteryProfileAbnormalTest.batteryAbnormalTest001 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: dConnectSDK.constants.battery.PROFILE_NAME,
    attribute: dConnectSDK.constants.battery.ATTR_CHARGING,
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
QUnit.test('chargingAbnormalTest001(Calling a put method that does not support.)',
    BatteryProfileAbnormalTest.batteryAbnormalTest001);

/**
 * 定義されていないPOSTメソッドでバッテリーの充電フラグにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /battery/charging?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
BatteryProfileAbnormalTest.batteryAbnormalTest002 = function(assert) {
  let done = assert.async();
  sdk.post({
    profile: dConnectSDK.constants.battery.PROFILE_NAME,
    attribute: dConnectSDK.constants.battery.ATTR_CHARGING,
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
QUnit.test('chargingAbnormalTest002(Calling a post method that does not support.)', BatteryProfileAbnormalTest.batteryAbnormalTest002);

/**
 * 定義されていないDELETEメソッドでバッテリーの充電フラグにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: DELETE<br/>
 * Path: /battery/charging?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
BatteryProfileAbnormalTest.batteryAbnormalTest003 = function(assert) {
  let done = assert.async();
  sdk.delete({
    profile: dConnectSDK.constants.battery.PROFILE_NAME,
    attribute: dConnectSDK.constants.battery.ATTR_CHARGING,
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
QUnit.test('chargingAbnormalTest003(Calling a delete method that does not support.)',
    BatteryProfileAbnormalTest.batteryAbnormalTest003);

/**
 * 定義されていないPOSTメソッドでバッテリー状態取得イベントにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /battery/onbatterychange?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * ・イベント通知が送られてくること。<br/>
 * </p>
 */
BatteryProfileAbnormalTest.onBatteryChangeAbnormalTest001 = function(assert) {
  let done = assert.async();
  sdk.post({
    profile: dConnectSDK.constants.battery.PROFILE_NAME,
    attribute: dConnectSDK.constants.battery.ATTR_ON_BATTERY_CHANGE,
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
QUnit.test('onBatteryChangeAbnormalTest001',
      BatteryProfileAbnormalTest.onBatteryChangeAbnormalTest001);

/**
 * 定義されていないGETメソッドでバッテリー状態取得イベントにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /battery/onbatterychange?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * ・イベント通知が送られてくること。<br/>
 * </p>
 */
BatteryProfileAbnormalTest.onBatteryChangeAbnormalTest002 = function(assert) {
  let done = assert.async();
  sdk.post({
    profile: dConnectSDK.constants.battery.PROFILE_NAME,
    attribute: dConnectSDK.constants.battery.ATTR_ON_BATTERY_CHANGE,
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
QUnit.test('onBatteryChangeAbnormalTest002',
      BatteryProfileAbnormalTest.onBatteryChangeAbnormalTest002);

/**
 * 定義されていないPOSTメソッドで充電状態取得イベントにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /battery/onchargingchange?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * ・イベント通知が送られてくること。<br/>
 * </p>
 */
BatteryProfileAbnormalTest.onChargingChangeAbnormalTest001 = function(assert) {
  let done = assert.async();
  sdk.post({
    profile: dConnectSDK.constants.battery.PROFILE_NAME,
    attribute: dConnectSDK.constants.battery.ATTR_ON_CHARGING_CHANGE,
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
QUnit.test('onChargingChangeAbnormalTest001',
    BatteryProfileAbnormalTest.onChargingChangeAbnormalTest001);

/**
 * 定義されていないGETメソッドで充電状態取得イベントにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /battery/onchargingchange?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * ・イベント通知が送られてくること。<br/>
 * </p>
 */
BatteryProfileAbnormalTest.onChargingChangeAbnormalTest002 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: dConnectSDK.constants.battery.PROFILE_NAME,
    attribute: dConnectSDK.constants.battery.ATTR_ON_CHARGING_CHANGE,
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
QUnit.test('onChargingChangeAbnormalTest002', BatteryProfileAbnormalTest.onChargingChangeAbnormalTest002);
