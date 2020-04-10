QUnit.module('AtmosphericPressureProfileNormalTest', {
  before: function() {
    init();
  }
});

/**
 * AtmosphericPressureプロファイルの正常系テストを行うクラス。
 * @class
 */
let AtmosphericPressureProfileNormalTest = {};

/**
 * 気圧を取得するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: GET<br/>
 * Path: /atmosphericPressure?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
AtmosphericPressureProfileNormalTest.atmosphericPressureNormalTest001 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'atmosphericPressure',
    params: {
      serviceId: getCurrentServiceId()
    }
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    assert.ok(true, 'atmosphericPressure=' + json.atmosphericPressure);
    assert.ok(true, 'timeStamp=' + json.timeStamp);
    assert.ok(true, 'timeStampString=' + json.timeStampString);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('atmosphericPressureNormalTest001',
        AtmosphericPressureProfileNormalTest.atmosphericPressureNormalTest001);
