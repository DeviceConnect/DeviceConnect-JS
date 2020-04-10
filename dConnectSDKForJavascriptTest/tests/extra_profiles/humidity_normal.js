QUnit.module('HumidityProfileNormalTest', {
  before: function() {
    init();
  }
});

/**
 * Humidityプロファイルの正常系テストを行うクラス。
 * @class
 */
let HumidityProfileNormalTest = {};

/**
 * 湿度を取得するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: GET<br/>
 * Path: /humidity?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
HumidityProfileNormalTest.humidityNormalTest001 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'humidity',
    params: {
      serviceId: getCurrentServiceId()
    }
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    assert.ok(true, 'humidity=' + json.humidity);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('humidityNormalTest001',
    HumidityProfileNormalTest.humidityNormalTest001);
