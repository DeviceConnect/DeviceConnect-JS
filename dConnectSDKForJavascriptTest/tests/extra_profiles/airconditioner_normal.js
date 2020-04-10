QUnit.module('AirConditionerProfileNormalTest', {
  before: function() {
    init();
  }
});

/**
 * AirConditionerプロファイルの正常系テストを行うクラス。
 * @class
 */
let AirConditionerProfileNormalTest = {};

/**
 * 電源状態を取得するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: GET<br/>
 * Path: /airconditioner?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
AirConditionerProfileNormalTest.getPowerStateNormalTest001 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'airconditioner',
    params: {
      serviceId: getCurrentServiceId()
    }
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    assert.ok(true, 'powerstatus=' + json.powerstatus);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('getPowerStateNormalTest001(get)',
    AirConditionerProfileNormalTest.getPowerStateNormalTest001);

/**
 * 電源をオンするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /airconditioner?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
AirConditionerProfileNormalTest.powerOnNormalTest001 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'airconditioner',
    params: {
      serviceId: getCurrentServiceId()
    }
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('powerOnNormalTest001(get)',
    AirConditionerProfileNormalTest.powerOnNormalTest001);

/**
 * 電源をオフするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: DELETE<br/>
 * Path: /airconditioner?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
AirConditionerProfileNormalTest.powerOffNormalTest001 = function(assert) {
  let done = assert.async();
  sdk.delete({
    profile: 'airconditioner',
    params: {
      serviceId: getCurrentServiceId()
    }
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('powerOffNormalTest001(get)',
    AirConditionerProfileNormalTest.powerOffNormalTest001);

/**
 * 節電動作設定を取得するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: GET<br/>
 * Path: /airconditoner/powersaving?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
AirConditionerProfileNormalTest.powerSavingNormalTest001 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'airconditioner',
    attribute: 'powersaving',
    params: {
      serviceId: getCurrentServiceId()
    }
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    assert.ok(true, 'powersaving=' + json.operationpowersaving);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('PowerSavingNormalTest001(get)',
    AirConditionerProfileNormalTest.powerSavingNormalTest001);

/**
 * 節電動作設定を設定するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /airconditoner/powersaving?serviceId=xxxx&accessToken=xxx&powersaving=PowerSaving<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
AirConditionerProfileNormalTest.powerSavingNormalTest002 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'airconditioner',
    attribute: 'powersaving',
    params: {
      serviceId: getCurrentServiceId(),
      powersaving: 'PowerSaving'
    }
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('PowerSavingNormalTest002(put)',
    AirConditionerProfileNormalTest.powerSavingNormalTest002);

/**
 * 節電動作設定を設定するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /airconditoner/powersaving?serviceId=xxxx&accessToken=xxx&powersaving=Normal<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
AirConditionerProfileNormalTest.powerSavingNormalTest003 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'airconditioner',
    attribute: 'powersaving',
    params: {
      serviceId: getCurrentServiceId(),
      powersaving: 'Normal'
    }
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('PowerSavingNormalTest003(put)',
    AirConditionerProfileNormalTest.powerSavingNormalTest003);

/**
 * 運転モード設定を取得するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: GET<br/>
 * Path: /airconditoner/modesetting?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
AirConditionerProfileNormalTest.modeSettingNormalTest001 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'airconditioner',
    attribute: 'modesetting',
    params: {
      serviceId: getCurrentServiceId(),
      powersaving: 'Normal'
    }
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    assert.ok(true, 'modesetting=' + json.operationmodesetting);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('ModeSettingNormalTest001(get)',
    AirConditionerProfileNormalTest.modeSettingNormalTest001);

/**
 * 運転モード設定を設定するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /airconditoner/modesetting?serviceId=xxxx&accessToken=xxx&modesetting=Other<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
AirConditionerProfileNormalTest.modeSettingNormalTest002 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'airconditioner',
    attribute: 'modesetting',
    params: {
      serviceId: getCurrentServiceId(),
      modesetting: 'Other'
    }
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('ModeSettingNormalTest002(put - Other)',
    AirConditionerProfileNormalTest.modeSettingNormalTest002);

/**
 * 運転モード設定を設定するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /airconditoner/modesetting?serviceId=xxxx&accessToken=xxx&modesetting=AirCirculator<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
AirConditionerProfileNormalTest.modeSettingNormalTest003 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'airconditioner',
    attribute: 'modesetting',
    params: {
      serviceId: getCurrentServiceId(),
      modesetting: 'AirCirculator'
    }
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('ModeSettingNormalTest003(put - AirCirculator)',
    AirConditionerProfileNormalTest.modeSettingNormalTest003);

/**
 * 運転モード設定を設定するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /airconditoner/modesetting?serviceId=xxxx&accessToken=xxx&modesetting=Dehumidification<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
AirConditionerProfileNormalTest.modeSettingNormalTest004 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'airconditioner',
    attribute: 'modesetting',
    params: {
      serviceId: getCurrentServiceId(),
      modesetting: 'Dehumidification'
    }
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('ModeSettingNormalTest004(put - Dehumidification)',
    AirConditionerProfileNormalTest.modeSettingNormalTest004);

/**
 * 運転モード設定を設定するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /airconditoner/modesetting?serviceId=xxxx&accessToken=xxx&modesetting=Heating<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
AirConditionerProfileNormalTest.modeSettingNormalTest005 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'airconditioner',
    attribute: 'modesetting',
    params: {
      serviceId: getCurrentServiceId(),
      modesetting: 'Heating'
    }
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('ModeSettingNormalTest005(put - Heating)',
    AirConditionerProfileNormalTest.modeSettingNormalTest005);

/**
 * 運転モード設定を設定するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /airconditoner/modesetting?serviceId=xxxx&accessToken=xxx&modesetting=Cooling<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
AirConditionerProfileNormalTest.modeSettingNormalTest006 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'airconditioner',
    attribute: 'modesetting',
    params: {
      serviceId: getCurrentServiceId(),
      modesetting: 'Cooling'
    }
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('ModeSettingNormalTest006(put - Cooling)',
    AirConditionerProfileNormalTest.modeSettingNormalTest006);

/**
 * 運転モード設定を設定するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /airconditoner/modesetting?serviceId=xxxx&accessToken=xxx&modesetting=Automatic<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
AirConditionerProfileNormalTest.modeSettingNormalTest007 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'airconditioner',
    attribute: 'modesetting',
    params: {
      serviceId: getCurrentServiceId(),
      modesetting: 'Automatic'
    }
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('ModeSettingNormalTest007(put - Automatic)',
    AirConditionerProfileNormalTest.modeSettingNormalTest007);

/**
 * 室内温度計測値を取得するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: GET<br/>
 * Path: /airconditoner/roomtemperature?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
AirConditionerProfileNormalTest.roomTemperatureNormalTest001 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'airconditioner',
    attribute: 'roomtemperature',
    params: {
      serviceId: getCurrentServiceId()
    }
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    assert.ok(true, 'roomtemperature=' + json.roomtemperature);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('roomTemperatureNormalTest001(get)',
    AirConditionerProfileNormalTest.roomTemperatureNormalTest001);

/**
 * 温度設定値を取得するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: GET<br/>
 * Path: /airconditoner/temperature?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
AirConditionerProfileNormalTest.temperatureNormalTest001 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'airconditioner',
    attribute: 'temperature',
    params: {
      serviceId: getCurrentServiceId()
    }
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    assert.ok(true, 'temperature=' + json.temperature);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('temperatureValueNormalTest001(get)',
    AirConditionerProfileNormalTest.temperatureNormalTest001);

/**
 * 温度設定値を設定するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /airconditoner/temperature?serviceId=xxxx&accessToken=xxx&temperature=25<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
AirConditionerProfileNormalTest.temperatureNormalTest002 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'airconditioner',
    attribute: 'temperature',
    params: {
      serviceId: getCurrentServiceId(),
      temperature: '25'
    }
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('temperatureValueNormalTest002(put)',
    AirConditionerProfileNormalTest.temperatureNormalTest002);

/**
 * 風量設定値を取得するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: GET<br/>
 * Path: /airconditoner/airflow?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
AirConditionerProfileNormalTest.airflowNormalTest001 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'airconditioner',
    attribute: 'airflow',
    params: {
      serviceId: getCurrentServiceId()
    }
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    assert.ok(true, 'airflow=' + json.airflow);
    assert.ok(true, 'airflowauto=' + json.airflowauto);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('airflowNormalTest001(get)',
    AirConditionerProfileNormalTest.airflowNormalTest001);

/**
 * 風量設定値を設定するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /airconditoner/airflow?serviceId=xxxx&accessToken=xxx&airflow=0.0<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
AirConditionerProfileNormalTest.airflowNormalTest002 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'airconditioner',
    attribute: 'airflow',
    params: {
      serviceId: getCurrentServiceId(),
      airflow: '0.0'
    }
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('airflowNormalTest002(put - 0.0)',
    AirConditionerProfileNormalTest.airflowNormalTest002);

/**
 * 風量設定値を設定するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /airconditoner/airflow?serviceId=xxxx&accessToken=xxx&airflow=0.12<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
AirConditionerProfileNormalTest.airflowNormalTest003 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'airconditioner',
    attribute: 'airflow',
    params: {
      serviceId: getCurrentServiceId(),
      airflow: '0.12'
    }
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('airflowNormalTest003(put - 0.12)',
    AirConditionerProfileNormalTest.airflowNormalTest003);

/**
 * 風量設定値を設定するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /airconditoner/airflow?serviceId=xxxx&accessToken=xxx&airflow=0.25<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
AirConditionerProfileNormalTest.airflowNormalTest004 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'airconditioner',
    attribute: 'airflow',
    params: {
      serviceId: getCurrentServiceId(),
      airflow: '0.25'
    }
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('airflowNormalTest004(put - 0.25)',
    AirConditionerProfileNormalTest.airflowNormalTest004);

/**
 * 風量設定値を設定するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /airconditoner/airflow?serviceId=xxxx&accessToken=xxx&airflow=0.38<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
AirConditionerProfileNormalTest.airflowNormalTest005 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'airconditioner',
    attribute: 'airflow',
    params: {
      serviceId: getCurrentServiceId(),
      airflow: '0.38'
    }
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('airflowNormalTest005(put - 0.38)',
    AirConditionerProfileNormalTest.airflowNormalTest005);

/**
 * 風量設定値を設定するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /airconditoner/airflow?serviceId=xxxx&accessToken=xxx&airflow=0.51<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
AirConditionerProfileNormalTest.airflowNormalTest006 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'airconditioner',
    attribute: 'airflow',
    params: {
      serviceId: getCurrentServiceId(),
      airflow: '0.51'
    }
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('airflowNormalTest006(put - 0.51)',
    AirConditionerProfileNormalTest.airflowNormalTest006);

/**
 * 風量設定値を設定するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /airconditoner/airflow?serviceId=xxxx&accessToken=xxx&airflow=0.64<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
AirConditionerProfileNormalTest.airflowNormalTest007 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'airconditioner',
    attribute: 'airflow',
    params: {
      serviceId: getCurrentServiceId(),
      airflow: '0.64'
    }
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('airflowNormalTest007(put - 0.64)',
    AirConditionerProfileNormalTest.airflowNormalTest007);

/**
 * 風量設定値を設定するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /airconditoner/airflow?serviceId=xxxx&accessToken=xxx&airflow=0.77<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
AirConditionerProfileNormalTest.airflowNormalTest008 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'airconditioner',
    attribute: 'airflow',
    params: {
      serviceId: getCurrentServiceId(),
      airflow: '0.77'
    }
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('airflowNormalTest008(put - 0.77)',
    AirConditionerProfileNormalTest.airflowNormalTest008);

/**
 * 風量設定値を設定するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /airconditoner/airflow?serviceId=xxxx&accessToken=xxx&airflow=0.90<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
AirConditionerProfileNormalTest.airflowNormalTest009 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'airconditioner',
    attribute: 'airflow',
    params: {
      serviceId: getCurrentServiceId(),
      airflow: '0.90'
    }
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('airflowNormalTest009(put - 0.90)',
    AirConditionerProfileNormalTest.airflowNormalTest009);

/**
 * 風量設定値を設定するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /airconditoner/airflow?serviceId=xxxx&accessToken=xxx&airflow=1.0<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
AirConditionerProfileNormalTest.airflowNormalTest010 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'airconditioner',
    attribute: 'airflow',
    params: {
      serviceId: getCurrentServiceId(),
      airflow: '1.0'
    }
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('airflowNormalTest010(put - 1.0)',
    AirConditionerProfileNormalTest.airflowNormalTest010);

/**
 * 風量設定値を設定するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /airconditoner/airflow?serviceId=xxxx&accessToken=xxx&airflowauto=true<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
AirConditionerProfileNormalTest.airflowNormalTest011 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'airconditioner',
    attribute: 'airflow',
    params: {
      serviceId: getCurrentServiceId(),
      airflowauto: 'true'
    }
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('airflowNormalTest011(put - Automatic[true])',
    AirConditionerProfileNormalTest.airflowNormalTest011);

/**
 * 風量設定値を設定するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /airconditoner/airflow?serviceId=xxxx&accessToken=xxx&airflow=0.51&airflowauto=false<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
AirConditionerProfileNormalTest.airflowNormalTest012 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'airconditioner',
    attribute: 'airflow',
    params: {
      serviceId: getCurrentServiceId(),
      airflow: '0.51',
      airflowauto: 'false'
    }
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('airflowNormalTest012(put Automatic[false], 0.51)',
    AirConditionerProfileNormalTest.airflowNormalTest012);

/**
 * 風量設定値を設定するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /airconditoner/airflow?serviceId=xxxx&accessToken=xxx&airflow=0.51&airflowauto=true<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
AirConditionerProfileNormalTest.airflowNormalTest013 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'airconditioner',
    attribute: 'airflow',
    params: {
      serviceId: getCurrentServiceId(),
      airflow: '0.51',
      airflowauto: 'true'
    }
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('airflowNormalTest013(put - Automatic[true], 0.51)',
    AirConditionerProfileNormalTest.airflowNormalTest013);

/**
 * ECHONET Lite プロパティを取得するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: GET<br/>
 * Path: /airconditoner/enlproperty?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
AirConditionerProfileNormalTest.enlPropertyNormalTest001 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'airconditioner',
    attribute: 'enlproperty',
    params: {
      serviceId: getCurrentServiceId(),
      epc: '0x80'
    }
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    assert.ok(true, 'epc=' + json.properties[0].epc);
    assert.ok(true, 'value=' + json.properties[0].epc);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('enlPropertyNormalTest001(get)',
    AirConditionerProfileNormalTest.enlPropertyNormalTest001);

/**
 * ECHONET Lite プロパティを取得するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: GET<br/>
 * Path: /airconditoner/enlproperty?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
AirConditionerProfileNormalTest.enlPropertyNormalTest002 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'airconditioner',
    attribute: 'enlproperty',
    params: {
      serviceId: getCurrentServiceId(),
      epc: '0x80,0x8F'
    }
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    assert.ok(true, 'epc=' + json.properties[0].epc);
    assert.ok(true, 'value=' + json.properties[0].value);
    assert.ok(true, 'epc=' + json.properties[1].epc);
    assert.ok(true, 'value=' + json.properties[1].value);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('enlPropertyNormalTest002(get)',
    AirConditionerProfileNormalTest.enlPropertyNormalTest002);

/**
 * ECHONET Lite プロパティを取得するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: GET<br/>
 * Path: /airconditoner/enlproperty?serviceId=xxxx&accessToken=xxx&epc=0x80,0x8F,0xB0,0xB3,0xBB<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
AirConditionerProfileNormalTest.enlPropertyNormalTest003 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'airconditioner',
    attribute: 'enlproperty',
    params: {
      serviceId: getCurrentServiceId(),
      epc: '0x80,0x8F,0xB0,0xB3,0xBB'
    }
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    assert.ok(true, 'epc=' + json.properties[0].epc);
    assert.ok(true, 'value=' + json.properties[0].value);
    assert.ok(true, 'epc=' + json.properties[1].epc);
    assert.ok(true, 'value=' + json.properties[1].value);
    assert.ok(true, 'epc=' + json.properties[2].epc);
    assert.ok(true, 'value=' + json.properties[2].value);
    assert.ok(true, 'epc=' + json.properties[3].epc);
    assert.ok(true, 'value=' + json.properties[3].value);
    assert.ok(true, 'epc=' + json.properties[4].epc);
    assert.ok(true, 'value=' + json.properties[4].value);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('enlPropertyNormalTest003(get)',
    AirConditionerProfileNormalTest.enlPropertyNormalTest003);

/**
 * ECHONET Lite プロパティを設定するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /airconditoner/enlproperty?serviceId=xxxx&accessToken=xxx&epc=0x80&value=49<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
AirConditionerProfileNormalTest.enlPropertyNormalTest004 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'airconditioner',
    attribute: 'enlproperty',
    params: {
      serviceId: getCurrentServiceId(),
      epc: '0x80',
      value: '49'
    }
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });

};
QUnit.test('enlPropertyNormalTest004(put)',
    AirConditionerProfileNormalTest.enlPropertyNormalTest004);
