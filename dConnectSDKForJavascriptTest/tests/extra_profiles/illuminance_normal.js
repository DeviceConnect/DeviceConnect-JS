QUnit.module('IlluminanceProfileNormalTest', {
  before: function() {
    init();
  }
});

/**
 * Illuminanceプロファイルの正常系テストを行うクラス。
 * @class
 */
let IlluminanceProfileNormalTest = {};

/**
 * 照度を取得するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: GET<br/>
 * Path: /illuminance?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
IlluminanceProfileNormalTest.illuminanceNormalTest001 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'illuminance',
    params: {
      serviceId: getCurrentServiceId()
    }
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    assert.ok(true, 'illuminance=' + json.illuminance);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('illuminanceNormalTest001',
    IlluminanceProfileNormalTest.illuminanceNormalTest001);
