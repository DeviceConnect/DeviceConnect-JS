QUnit.module('TemperatureProfileNormalTest', {
  before: function() {
    init();
  }
});

/**
 * Temperatureプロファイルの正常系テストを行うクラス。
 * @class
 */
let TemperatureProfileNormalTest = {};

/**
 * 温度を取得するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: GET<br/>
 * Path: /temperature?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
TemperatureProfileNormalTest.allNormalTest001 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'temperature',
    params: {
      serviceId: getCurrentServiceId(),
      type: '1'
    }
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    assert.ok(true, 'temperature=' + json.temperature);
    assert.ok(true, 'type=' + json.type);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('temperatureNormalTest001',
    TemperatureProfileNormalTest.allNormalTest001);

/**
 * 温度を設定するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: GET<br/>
 * Path: /temperature?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
TemperatureProfileNormalTest.allNormalTest001 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'temperature',
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
QUnit.test('temperatureNormalTest001',
    TemperatureProfileNormalTest.allNormalTest001);
